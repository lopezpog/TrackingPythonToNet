(() => {
  const DATA = window.TRACKING_DATA;
  const KEY = "TrackingPythonToNet:v1";
  const $ = (id) => document.getElementById(id);

  function defaultState() {
    const done = {};
    // Línea base actual: Auth cerrado.
    DATA.groups.find(g => g.name === "Autenticación").subgroups.forEach(s =>
      s.endpoints.forEach(e => done[e.id] = true)
    );
    return { done, updatedAt: new Date().toISOString() };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return parsed && parsed.done ? parsed : defaultState();
    } catch {
      return defaultState();
    }
  }

  let state = loadState();

  function save() {
    state.updatedAt = new Date().toISOString();
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  function endpointCount(sub) { return sub.endpoints.length; }
  function subProgress(sub) {
    if (!sub.endpoints.length) return 0;
    return sub.endpoints.filter(e => !!state.done[e.id]).length / sub.endpoints.length;
  }
  function groupProgress(group) {
    if (!group.subgroups.length) return 0;
    return group.subgroups.reduce((a,s) => a + subProgress(s), 0) / group.subgroups.length;
  }
  function totalProgress() {
    if (!DATA.groups.length) return 0;
    return DATA.groups.reduce((a,g) => a + groupProgress(g), 0) / DATA.groups.length;
  }
  function allEndpoints() {
    return DATA.groups.flatMap(g => g.subgroups.flatMap(s => s.endpoints.map(e => ({...e, group:g, subgroup:s}))));
  }
  function pct(v) { return (v * 100).toFixed(2) + "%"; }
  function esc(v) {
    return String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function renderSummary() {
    const all = allEndpoints();
    const done = all.filter(x => state.done[x.id]).length;
    const gp = DATA.groups.map(groupProgress);
    const completeGroups = gp.filter(v => v === 1).length;
    const total = totalProgress();

    $("totalPct").textContent = pct(total);
    $("totalBar").style.width = pct(total);
    $("doneCount").textContent = done + " / " + DATA.baseline;
    $("rawPct").textContent = ((done / DATA.baseline) * 100).toFixed(2) + "% bruto";
    $("groupsDone").textContent = completeGroups + " / " + DATA.groups.length;
    $("lastUpdate").textContent = state.updatedAt
      ? new Date(state.updatedAt).toLocaleString("es-CL")
      : "—";
  }

  function renderGroupCards() {
    const host = $("groupCards");
    host.innerHTML = "";
    DATA.groups.forEach((g, index) => {
      const p = groupProgress(g);
      const eps = g.subgroups.flatMap(s => s.endpoints);
      const done = eps.filter(e => state.done[e.id]).length;
      const card = document.createElement("article");
      card.className = "group-card";
      card.innerHTML = `
        <div class="name">${index + 1}. ${esc(g.name)}</div>
        <div class="pct">${pct(p)}</div>
        <div class="bar"><i style="width:${pct(p)}"></i></div>
        <div class="meta">${done}/${eps.length} endpoints · ${g.subgroups.length} subgrupos</div>`;
      card.addEventListener("click", () => {
        $("groupFilter").value = g.name;
        renderTable();
        document.querySelector(".table-section").scrollIntoView({behavior:"smooth"});
      });
      host.appendChild(card);
    });
  }

  function renderGroupFilter() {
    const sel = $("groupFilter");
    if (sel.options.length > 1) return;
    DATA.groups.forEach(g => {
      const o = document.createElement("option");
      o.value = g.name; o.textContent = g.name;
      sel.appendChild(o);
    });
  }

  function renderTable() {
    const q = $("search").value.trim().toLowerCase();
    const gf = $("groupFilter").value;
    const sf = $("statusFilter").value;
    const tbody = $("endpointTable");
    tbody.innerHTML = "";

    DATA.groups.forEach(g => {
      if (gf && g.name !== gf) return;
      g.subgroups.forEach(s => {
        const visible = s.endpoints.filter(e => {
          const done = !!state.done[e.id];
          if (sf === "done" && !done) return false;
          if (sf === "pending" && done) return false;
          if (!q) return true;
          return [g.name, s.name, e.method, e.path].some(v => v.toLowerCase().includes(q));
        });
        if (!visible.length) return;

        const subPct = subProgress(s);
        const sh = document.createElement("tr");
        sh.className = "subhead";
        sh.innerHTML = `<td colspan="6">${esc(g.name)} → ${esc(s.name)} · ${pct(subPct)} · ${s.endpoints.filter(e=>state.done[e.id]).length}/${s.endpoints.length}</td>`;
        tbody.appendChild(sh);

        visible.forEach(e => {
          const done = !!state.done[e.id];
          const tr = document.createElement("tr");
          if (done) tr.className = "done";
          tr.innerHTML = `
            <td>${esc(g.name)}</td>
            <td>${esc(s.name)}</td>
            <td><span class="method">${esc(e.method)}</span></td>
            <td><code>${esc(e.path)}</code></td>
            <td><span class="state ${done ? "ok" : "pending"}">${done ? "TERMINADO" : "PENDIENTE"}</span></td>
            <td class="center"><input class="check" type="checkbox" ${done ? "checked" : ""} aria-label="Terminado"></td>`;
          tr.querySelector(".check").addEventListener("change", ev => {
            state.done[e.id] = ev.target.checked;
            save();
            renderAll();
          });
          tbody.appendChild(tr);
        });
      });
    });
  }

  function renderAll() {
    renderSummary();
    renderGroupCards();
    renderTable();
  }

  function exportState() {
    const payload = {
      format: "TrackingPythonToNet-state",
      version: 1,
      exportedAt: new Date().toISOString(),
      baseline: DATA.baseline,
      done: state.done
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {type:"application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "TrackingPythonToNet-state-" + new Date().toISOString().slice(0,10) + ".json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function importState(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!parsed.done || typeof parsed.done !== "object") throw new Error("Formato inválido");
        state = {done: parsed.done, updatedAt: new Date().toISOString()};
        save();
        renderAll();
      } catch (e) {
        alert("No se pudo importar el archivo: " + e.message);
      }
    };
    reader.readAsText(file);
  }

  $("search").addEventListener("input", renderTable);
  $("groupFilter").addEventListener("change", renderTable);
  $("statusFilter").addEventListener("change", renderTable);
  $("exportBtn").addEventListener("click", exportState);
  $("importInput").addEventListener("change", e => {
    const f = e.target.files && e.target.files[0];
    if (f) importState(f);
    e.target.value = "";
  });
  $("resetBtn").addEventListener("click", () => {
    if (!confirm("¿Reiniciar todos los checks? Auth volverá a su línea base inicial.")) return;
    state = defaultState();
    save();
    renderAll();
  });

  renderGroupFilter();
  save();
  renderAll();
})();