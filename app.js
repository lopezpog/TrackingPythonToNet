(() => {
  const DATA = window.TRACKING_DATA;
  const KEY = "TrackingPythonToNet:v2";
  const PASSWORD_SHA256 = "38e578a8810fd7bd4b8c3dd9aba2d3bcd5873d667546a4d119e377be552a3f7b";
  const $ = id => document.getElementById(id);

  let editing = false;
  let dirty = false;
  let openGroup = null;

  function defaultState() {
    const done = {};
    const auth = DATA.groups.find(g => g.name === "Autenticación");
    if (auth) auth.subgroups.forEach(s => s.endpoints.forEach(e => done[e.id] = true));
    return { done, updatedAt: null };
  }

  function loadSavedState() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return parsed && parsed.done ? parsed : defaultState();
    } catch {
      return defaultState();
    }
  }

  let savedState = loadSavedState();
  let draftState = JSON.parse(JSON.stringify(savedState));

  function state() { return draftState; }

  async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2,"0")).join("");
  }

  function endpointCount(sub){ return sub.endpoints.length; }
  function subProgress(sub){
    if (!sub.endpoints.length) return 0;
    return sub.endpoints.filter(e => !!state().done[e.id]).length / sub.endpoints.length;
  }
  function groupProgress(group){
    if (!group.subgroups.length) return 0;
    return group.subgroups.reduce((a,s) => a + subProgress(s),0) / group.subgroups.length;
  }
  function totalProgress(){
    if (!DATA.groups.length) return 0;
    return DATA.groups.reduce((a,g) => a + groupProgress(g),0) / DATA.groups.length;
  }
  function allEndpoints(){
    return DATA.groups.flatMap(g => g.subgroups.flatMap(s => s.endpoints.map(e => ({...e,group:g,subgroup:s}))));
  }
  function pct(v){ return (v*100).toFixed(2)+"%"; }
  function esc(v){ return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  function showToast(msg){
    const t=$("toast");
    t.textContent=msg;
    t.classList.add("show");
    setTimeout(()=>t.classList.remove("show"),1800);
  }

  function updateEditUI(){
    const banner=$("editBanner");
    const lockBtn=$("lockBtn");
    const saveBtn=$("saveBtn");
    const resetBtn=$("resetBtn");

    saveBtn.disabled=!editing || !dirty;
    resetBtn.disabled=!editing;

    banner.className="edit-banner " + (dirty ? "dirty" : editing ? "unlocked" : "locked");

    if (dirty) {
      banner.innerHTML="<strong>Cambios sin guardar.</strong><span>Presiona <b>Guardar cambios</b> para hacerlos persistentes.</span>";
    } else if (editing) {
      banner.innerHTML="<strong>Edición habilitada.</strong><span>Puedes modificar checks. Nada se guarda hasta presionar <b>Guardar cambios</b>.</span>";
    } else {
      banner.innerHTML="<strong>Modo lectura.</strong><span>Desbloquea la edición para modificar checks. Los cambios no se guardan hasta presionar <b>Guardar cambios</b>.</span>";
    }

    lockBtn.textContent = editing ? "🔓 Edición habilitada" : "🔒 Modo lectura";
    $("dirtyStatus").textContent = dirty ? "Cambios pendientes de guardar" : "Sin cambios pendientes";
  }

  function renderSummary(){
    const all=allEndpoints();
    const done=all.filter(x=>state().done[x.id]).length;
    const gp=DATA.groups.map(groupProgress);
    const completeGroups=gp.filter(v=>v===1).length;
    const total=totalProgress();

    $("totalPct").textContent=pct(total);
    $("totalBar").style.width=pct(total);
    $("doneCount").textContent=done+" / "+DATA.baseline;
    $("rawPct").textContent=((done/DATA.baseline)*100).toFixed(2)+"% bruto";
    $("groupsDone").textContent=completeGroups+" / "+DATA.groups.length;
    $("lastUpdate").textContent=savedState.updatedAt ? new Date(savedState.updatedAt).toLocaleString("es-CL") : "Sin guardado";
  }

  function renderGroupCards(){
    const host=$("groupCards"); host.innerHTML="";
    DATA.groups.forEach((g,index)=>{
      const p=groupProgress(g);
      const eps=g.subgroups.flatMap(s=>s.endpoints);
      const done=eps.filter(e=>state().done[e.id]).length;
      const card=document.createElement("article");
      card.className="group-card"+(openGroup===g.name?" active":"");
      card.innerHTML=`
        <div class="name">${index+1}. ${esc(g.name)}</div>
        <div class="pct">${pct(p)}</div>
        <div class="bar"><i style="width:${pct(p)}"></i></div>
        <div class="meta">${done}/${eps.length} endpoints · ${g.subgroups.length} subgrupos</div>`;
      card.addEventListener("click",()=>{
        openGroup=openGroup===g.name?null:g.name;
        $("groupFilter").value=openGroup||"";
        renderAll();
        document.querySelector(".table-section").scrollIntoView({behavior:"smooth",block:"start"});
      });
      host.appendChild(card);
    });
  }

  function renderGroupFilter(){
    const sel=$("groupFilter");
    if(sel.options.length>1)return;
    DATA.groups.forEach(g=>{
      const o=document.createElement("option");
      o.value=g.name;o.textContent=g.name;sel.appendChild(o);
    });
  }

  function endpointMatches(g,s,e){
    const q=$("search").value.trim().toLowerCase();
    const sf=$("statusFilter").value;
    const done=!!state().done[e.id];
    if(sf==="done"&&!done)return false;
    if(sf==="pending"&&done)return false;
    if(!q)return true;
    return [g.name,s.name,e.method,e.path].some(v=>v.toLowerCase().includes(q));
  }

  function renderTable(){
    const gf=$("groupFilter").value;
    const tbody=$("endpointTable"); tbody.innerHTML="";
    let any=false;

    DATA.groups.forEach(g=>{
      if(gf && g.name!==gf)return;

      const hasVisible=g.subgroups.some(s=>s.endpoints.some(e=>endpointMatches(g,s,e)));
      if(!hasVisible)return;
      any=true;

      const expanded=openGroup===g.name;
      const gp=groupProgress(g);
      const eps=g.subgroups.flatMap(s=>s.endpoints);
      const doneCount=eps.filter(e=>state().done[e.id]).length;

      const gh=document.createElement("tr");
      gh.className="group-row";
      gh.innerHTML=`<td class="center"><span class="group-toggle">${expanded?"▼":"▶"}</span></td>
        <td colspan="5">${esc(g.name)} · ${pct(gp)} · ${doneCount}/${eps.length} endpoints</td>`;
      gh.addEventListener("click",()=>{
        openGroup=expanded?null:g.name;
        renderAll();
      });
      tbody.appendChild(gh);

      if(!expanded)return;

      g.subgroups.forEach(s=>{
        const visible=s.endpoints.filter(e=>endpointMatches(g,s,e));
        if(!visible.length)return;

        const sh=document.createElement("tr");
        sh.className="subhead";
        sh.innerHTML=`<td></td><td colspan="5">${esc(s.name)} · ${pct(subProgress(s))} · ${s.endpoints.filter(e=>state().done[e.id]).length}/${s.endpoints.length}</td>`;
        tbody.appendChild(sh);

        visible.forEach(e=>{
          const done=!!state().done[e.id];
          const tr=document.createElement("tr");
          if(done)tr.className="done";
          tr.innerHTML=`
            <td></td>
            <td>${esc(s.name)}</td>
            <td><span class="method">${esc(e.method)}</span></td>
            <td><code>${esc(e.path)}</code></td>
            <td><span class="state ${done?"ok":"pending"}">${done?"TERMINADO":"PENDIENTE"}</span></td>
            <td class="center"><input class="check" type="checkbox" ${done?"checked":""} ${editing?"":"disabled"} aria-label="Terminado"></td>`;
          tr.querySelector(".check").addEventListener("change",ev=>{
            draftState.done[e.id]=ev.target.checked;
            dirty=JSON.stringify(draftState.done)!==JSON.stringify(savedState.done);
            renderAll();
          });
          tbody.appendChild(tr);
        });
      });
    });

    if(!any){
      const tr=document.createElement("tr");
      tr.className="empty-row";
      tr.innerHTML='<td colspan="6">No hay endpoints que coincidan con los filtros.</td>';
      tbody.appendChild(tr);
    }
  }

  function renderAll(){
    renderSummary();
    renderGroupCards();
    renderTable();
    updateEditUI();
  }

  async function unlock(){
    if(editing){
      editing=false;
      draftState=JSON.parse(JSON.stringify(savedState));
      dirty=false;
      renderAll();
      showToast("Edición bloqueada");
      return;
    }
    const pass=prompt("Clave de edición:");
    if(pass===null)return;
    const hash=await sha256(pass);
    if(hash!==PASSWORD_SHA256){
      alert("Clave incorrecta.");
      return;
    }
    editing=true;
    renderAll();
    showToast("Edición habilitada");
  }

  function saveChanges(){
    if(!editing||!dirty)return;
    savedState=JSON.parse(JSON.stringify(draftState));
    savedState.updatedAt=new Date().toISOString();
    draftState=JSON.parse(JSON.stringify(savedState));
    localStorage.setItem(KEY,JSON.stringify(savedState));
    dirty=false;
    renderAll();
    showToast("Cambios guardados");
  }

  function exportState(){
    const payload={
      format:"TrackingPythonToNet-state",
      version:2,
      exportedAt:new Date().toISOString(),
      baseline:DATA.baseline,
      done:savedState.done,
      updatedAt:savedState.updatedAt
    };
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download="TrackingPythonToNet-state-"+new Date().toISOString().slice(0,10)+".json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function importState(file){
    if(!editing){
      alert("Desbloquea la edición antes de importar un estado.");
      return;
    }
    const reader=new FileReader();
    reader.onload=()=>{
      try{
        const parsed=JSON.parse(reader.result);
        if(!parsed.done||typeof parsed.done!=="object")throw new Error("Formato inválido");
        draftState={done:parsed.done,updatedAt:savedState.updatedAt};
        dirty=true;
        renderAll();
        showToast("Estado importado como borrador");
      }catch(e){
        alert("No se pudo importar el archivo: "+e.message);
      }
    };
    reader.readAsText(file);
  }

  $("search").addEventListener("input",renderTable);
  $("groupFilter").addEventListener("change",e=>{
    openGroup=e.target.value||null;
    renderAll();
  });
  $("statusFilter").addEventListener("change",renderTable);
  $("lockBtn").addEventListener("click",unlock);
  $("saveBtn").addEventListener("click",saveChanges);
  $("exportBtn").addEventListener("click",exportState);
  $("importInput").addEventListener("change",e=>{
    const f=e.target.files&&e.target.files[0];
    if(f)importState(f);
    e.target.value="";
  });
  $("resetBtn").addEventListener("click",()=>{
    if(!editing)return;
    if(!confirm("¿Reiniciar todos los checks al estado base? Auth quedará marcado y el resto pendiente."))return;
    draftState=defaultState();
    dirty=true;
    renderAll();
  });
  $("closeAllBtn").addEventListener("click",()=>{
    openGroup=null;
    $("groupFilter").value="";
    renderAll();
  });

  window.addEventListener("beforeunload",e=>{
    if(!dirty)return;
    e.preventDefault();
    e.returnValue="";
  });

  renderGroupFilter();
  renderAll();
})();