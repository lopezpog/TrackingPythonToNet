(() => {
  const DATA = window.TRACKING_DATA;
  const KEY = "TrackingPythonToNet:v2";
  const PASSWORD_SHA256 = "38e578a8810fd7bd4b8c3dd9aba2d3bcd5873d667546a4d119e377be552a3f7b";
  const $ = id => document.getElementById(id);

  let editing = false;
  let dirty = false;
  let openGroup = null;

  // Notas por modulo, independientes de los checks y disponibles en modo lectura.
  const GROUP_NOTES = {
    "Dashboard": {
      title: "Dashboard · cierre",
      paragraphs: [
        "100 % — CERRADO (6/6 GET) por decisión del responsable del proyecto.",
        "Última corrección: eliminación de ruta duplicada en GET /api/dashboard.",
        "No equivale a una certificación independiente de pruebas integradas."
      ]
    },
    "Agenda": {
      title: "Agenda · estado de migración",
      paragraphs: [
        "47 de 50 métodos HTTP tienen implementación registrada en .NET.",
        "Pendientes: POST/PATCH de recibir y POST de confirmar ingreso.",
        "Los checks reflejan cobertura de implementación, no certificación de pruebas, paridad funcional ni cierre del módulo.",
        "Las preferencias guardadas en este navegador tienen prioridad sobre la cobertura publicada."
      ]
    }
  };
  let previousNoteFocus = null;

  function openNote(groupName) {
    const note = GROUP_NOTES[groupName];
    if (!note) return;
    const modal = $("groupNoteDialog");
    $("groupNoteTitle").textContent = note.title;
    const content = $("groupNoteBody");
    content.replaceChildren();
    note.paragraphs.forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      content.appendChild(p);
    });
    previousNoteFocus = document.activeElement;
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    $("groupNoteClose").focus();
  }

  function noteButton(groupName) {
    if (!GROUP_NOTES[groupName]) return null;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "note-link";
    button.textContent = "Ver nota";
    button.setAttribute("aria-label", "Ver nota de " + groupName);
    button.addEventListener("click", event => {
      event.stopPropagation();
      openNote(groupName);
    });
    return button;
  }

  // Cobertura publicada: 47 rutas de Agenda tienen handlers registrados en .NET.
  // Las tres rutas de recepcion (ep-55, ep-56 y ep-58) no estan implementadas.
  // CHECK = implementacion declarada; NO certifica paridad funcional ni QA.
  const AGENDA_RECEPCION_PENDIENTE = new Set(["ep-55", "ep-56", "ep-58"]);
  const AGENDA_PUBLICACION_VERSION = 1;
  const DASHBOARD_PUBLICACION_VERSION = 2;

  // Dashboard cerrado a 6/6 por solicitud del responsable del proyecto.
  // Nueva version del estado publicado para aplicar el cierre incluso si hay checks antiguos.
  function migrarDashboardPublicado(estado) {
    if ((estado.dashboardPublicacionVersion || 0) >= DASHBOARD_PUBLICACION_VERSION) return estado;
    const grupo = DATA.groups.find(g => g.name === "Dashboard");
    if (grupo) grupo.subgroups.forEach(sub => sub.endpoints.forEach(ep => {
      estado.done[ep.id] = true;
    }));
    estado.dashboardPublicacionVersion = DASHBOARD_PUBLICACION_VERSION;
    try { localStorage.setItem(KEY, JSON.stringify(estado)); } catch {}
    return estado;
  }


  // Aplicar UNA sola vez el avance publicado de Agenda en navegadores que ya
  // guardaron estados antiguos. Cambios posteriores del usuario se respetan.
  function migrarAgendaPublicada(estado) {
    if ((estado.agendaPublicacionVersion || 0) >= AGENDA_PUBLICACION_VERSION) return estado;
    const agenda = DATA.groups.find(g => g.name === "Agenda");
    if (!agenda) return estado;
    agenda.subgroups.forEach(sub => sub.endpoints.forEach(ep => {
      estado.done[ep.id] = !AGENDA_RECEPCION_PENDIENTE.has(ep.id);
    }));
    estado.agendaPublicacionVersion = AGENDA_PUBLICACION_VERSION;
    try { localStorage.setItem(KEY, JSON.stringify(estado)); } catch {}
    return estado;
  }

  function defaultState() {
    const done = {};
    const auth = DATA.groups.find(g => g.name === "Autenticación");
    if (auth) auth.subgroups.forEach(s => s.endpoints.forEach(e => done[e.id] = true));
    const dashboard = DATA.groups.find(g => g.name === "Dashboard");
    if (dashboard) dashboard.subgroups.forEach(sub => sub.endpoints.forEach(ep => {
      done[ep.id] = true;
    }));
    const agenda = DATA.groups.find(g => g.name === "Agenda");
    if (agenda) agenda.subgroups.forEach(s => s.endpoints.forEach(e => {
      if (!AGENDA_RECEPCION_PENDIENTE.has(e.id)) done[e.id] = true;
    }));
    return { done, updatedAt: null };
  }

  function loadSavedState() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return migrarDashboardPublicado(migrarAgendaPublicada(defaultState()));
      const parsed = JSON.parse(raw);
      // Incorporar la cobertura publicada sin sobrescribir decisiones locales
      // explicitamente guardadas (true o false).
      if (!parsed || !parsed.done || typeof parsed.done !== "object") return migrarAgendaPublicada(defaultState());
      const base = defaultState();
      return migrarDashboardPublicado(migrarAgendaPublicada({ ...base, ...parsed, done: { ...base.done, ...parsed.done } }));
    } catch {
      return migrarAgendaPublicada(defaultState());
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
    const lockBtn = $("lockBtn");
    $("saveBtn").disabled = !editing || !dirty;
    $("resetBtn").disabled = !editing;
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
      const cardNote = noteButton(g.name);
      if (cardNote) card.appendChild(cardNote);
      card.addEventListener("click",()=>{
        openGroup=openGroup===g.name?null:g.name;
        renderAll();
        document.querySelector(".table-section").scrollIntoView({behavior:"smooth",block:"start"});
      });
      host.appendChild(card);
    });
  }

  function renderTable(){
    const tbody=$("endpointTable"); tbody.innerHTML="";
    let any=false;

    DATA.groups.forEach(g=>{

      any=true;

      const expanded=openGroup===g.name;
      const gp=groupProgress(g);
      const eps=g.subgroups.flatMap(s=>s.endpoints);
      const doneCount=eps.filter(e=>state().done[e.id]).length;

      const gh=document.createElement("tr");
      gh.className="group-row";
      gh.innerHTML=`<td class="center"><span class="group-toggle">${expanded?"▼":"▶"}</span></td>
        <td colspan="5">${esc(g.name)} · ${pct(gp)} · ${doneCount}/${eps.length} endpoints</td>`;
      const rowNote = noteButton(g.name);
      if (rowNote) gh.querySelector("td[colspan]").appendChild(rowNote);
      gh.addEventListener("click",()=>{
        openGroup=expanded?null:g.name;
        renderAll();
      });
      tbody.appendChild(gh);

      if(!expanded)return;

      g.subgroups.forEach(s=>{
        const visible=s.endpoints;
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
      tr.innerHTML='<td colspan="6">No hay endpoints disponibles.</td>';
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

  $("groupNoteClose").addEventListener("click", () => $("groupNoteDialog").close());
  $("groupNoteDialog").addEventListener("close", () => {
    if (previousNoteFocus && previousNoteFocus.isConnected) previousNoteFocus.focus();
    previousNoteFocus = null;
  });
  $("groupNoteDialog").addEventListener("click", event => {
    if (event.target === $("groupNoteDialog")) $("groupNoteDialog").close();
  });

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
    if(!confirm("¿Reiniciar los checks al estado base publicado? Autenticación, Dashboard y 47 rutas de Agenda quedarán marcados; recepción seguirá pendiente."))return;
    draftState=defaultState();
    dirty=true;
    renderAll();
  });
  $("closeAllBtn").addEventListener("click",()=>{
    openGroup=null;
    renderAll();
  });

  window.addEventListener("beforeunload",e=>{
    if(!dirty)return;
    e.preventDefault();
    e.returnValue="";
  });

  renderAll();
})();