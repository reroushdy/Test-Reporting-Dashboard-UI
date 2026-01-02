// UI/dashboard.js
(async function () {
  const res = await fetch("../mock-data/test-results.json");
  const data = await res.json();

  for (const project of data.projects) {
    const card = document.querySelector(`[data-project="${project.name}"]`);
    if (!card) continue;

    // 1) Fill title
    const titleEl = card.querySelector(".panel-title");
    if (titleEl) titleEl.textContent = project.name;

    // 2) Counts -> total
    const pass = project.tests.pass ?? 0;
    const fail = project.tests.fail ?? 0;
    const pending = project.tests.pending ?? 0;
    const total = pass + fail + pending;

    // Guard against divide-by-zero
    if (total === 0) continue;

    // 3) Donut math (r must match your SVG circle)
    const r = 16;
    const C = 2 * Math.PI * r;

    const passLen = (pass / total) * C;
    const failLen = (fail / total) * C;
    const pendingLen = (pending / total) * C;

    // 4) Apply dasharray + offsets
    const passCircle = card.querySelector(".donut-pass");
    const failCircle = card.querySelector(".donut-fail");
    const pendingCircle = card.querySelector(".donut-pending");

    if (passCircle) {
      passCircle.style.strokeDasharray = `${passLen} ${C - passLen}`;
      passCircle.style.strokeDashoffset = `0`;
    }

    if (failCircle) {
      failCircle.style.strokeDasharray = `${failLen} ${C - failLen}`;
      failCircle.style.strokeDashoffset = `${-passLen}`;
    }

    if (pendingCircle) {
      pendingCircle.style.strokeDasharray = `${pendingLen} ${C - pendingLen}`;
      pendingCircle.style.strokeDashoffset = `${-(passLen + failLen)}`;
    }

    // 5) Center total
    const totalText = card.querySelector(".donut-total");
    if (totalText) totalText.textContent = total;

    // 6) Legend text
    const passLegend = card.querySelector(".legend-pass");
    const failLegend = card.querySelector(".legend-fail");
    const pendingLegend = card.querySelector(".legend-pending");

    if (passLegend) passLegend.textContent = `Pass: ${pass}`;
    if (failLegend) failLegend.textContent = `Fail: ${fail}`;
    if (pendingLegend) pendingLegend.textContent = `Pending: ${pending}`;
  }
})();