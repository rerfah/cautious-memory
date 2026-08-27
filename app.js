const state = {
  preview: null,
  recentCharges: [],
  reportType: "warning",
  impoundmentChoice: "no",

  // NEW: Other LEO involvement
  otherLeoInvolved: "no",
  otherLeoNames: "",
  otherLeoRanks: "",
  otherLeoDepts: ""
};

// ⭐ STEP 1 — Department → Emoji mapping
const deptEmoji = {
  "WSP": "<:wsp:1531706012531425401>",
  "OCSO": "<:ocso:1531706128428306452>",
  "NPS": "<:nps:1531706208002769067>"
};

let officerName = "";
let officerRank = "";
let officerDept = "";
let officerBadge = "";

const deptBadges = {
  OCSO: "<:ocso:1531706128428306452>",
  WSP: "<:wsp:1531706012531425401>",
  NPS: "<:nps:1531706208002769067>"
};

const els = {
  codeList: document.getElementById("codeList"),
  codeCount: document.getElementById("codeCount"),
  searchInput: document.getElementById("searchInput"),
  previewEmpty: document.getElementById("previewEmpty"),
  previewCard: document.getElementById("previewCard"),
  recentCharges: document.getElementById("recentCharges"),
  summaryCharges: document.getElementById("summaryCharges"),
  totalFine: document.getElementById("totalFine"),
  sentencedRow: document.getElementById("sentencedRow"),
  totalJail: document.getElementById("totalJail"),
  continueBtn: document.getElementById("continueBtn"),
  resetBtn: document.getElementById("resetBtn"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  modal: document.getElementById("modal"),
  userId: document.getElementById("userId"),
  numberError: document.getElementById("numberError"),
  copyBtn: document.getElementById("copyBtn"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  copyBuffer: document.getElementById("copyBuffer"),
  confirmBackdrop: document.getElementById("confirmBackdrop"),
  confirmClearBtn: document.getElementById("confirmClearBtn"),
  cancelClearBtn: document.getElementById("cancelClearBtn"),
  themeToggle: document.getElementById("themeToggle"),
  topAlert: document.getElementById("topAlert"),
  topAlertClose: document.querySelector(".alert-close"),
  loginBackdrop: document.getElementById("loginBackdrop"),
  loginUsername: document.getElementById("loginUsername"),
  loginRank: document.getElementById("loginRank"),
  loginContinue: document.getElementById("loginContinue"),
  deptOptions: document.querySelectorAll(".dept-option"),
  tooltip: document.getElementById("tooltip")
};

function initLogin() {
  if (!els.loginBackdrop) return;

  const saved = JSON.parse(localStorage.getItem("loginInfo") || "{}");

  els.loginBackdrop.classList.remove("hidden");
  requestAnimationFrame(() => {
    els.loginBackdrop.classList.add("show");
  });

  if (saved.username) els.loginUsername.value = saved.username;
  if (saved.rank) els.loginRank.value = saved.rank;

  if (saved.dept) {
    officerDept = saved.dept;
    officerBadge = deptBadges[officerDept];
    els.deptOptions.forEach(btn => {
      btn.classList.toggle("selected", btn.dataset.dept === saved.dept);
    });
  }

  const rememberCheckbox = document.getElementById("rememberLogin");
  if (rememberCheckbox && saved.remember) rememberCheckbox.checked = true;

  els.deptOptions.forEach(btn => {
    btn.addEventListener("click", () => {
      els.deptOptions.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      officerDept = btn.dataset.dept;
      officerBadge = deptBadges[officerDept];
    });
  });

  els.loginContinue.addEventListener("click", () => {
    officerName = els.loginUsername.value.trim();
    officerRank = els.loginRank.value.trim();

    if (!officerName || !officerRank || !officerDept) return;

    officerRank = officerRank
      .toLowerCase()
      .split(" ")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    const remember = rememberCheckbox ? rememberCheckbox.checked : false;

    if (remember) {
      localStorage.setItem(
        "loginInfo",
        JSON.stringify({
          username: officerName,
          rank: officerRank,
          dept: officerDept,
          remember: true
        })
      );
    } else {
      localStorage.removeItem("loginInfo");
    }

    els.loginBackdrop.classList.remove("show");
    setTimeout(() => {
      els.loginBackdrop.classList.add("hidden");
    }, 200);
  });
}

let tooltipVisible = false;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

function animateTooltip() {
  if (!els.tooltip) return;

  currentX += (targetX - currentX) * 0.25;
  currentY += (targetY - currentY) * 0.25;

  els.tooltip.style.left = `${currentX}px`;
  els.tooltip.style.top = `${currentY}px`;

  requestAnimationFrame(animateTooltip);
}

if (els.tooltip) animateTooltip();

function showTooltip(text, x, y) {
  if (!els.tooltip) return;

  els.tooltip.textContent = text;
  els.tooltip.classList.remove("hidden");

  requestAnimationFrame(() => {
    els.tooltip.classList.add("show");
  });

  targetX = x;
  targetY = y;
  tooltipVisible = true;
}

function hideTooltip() {
  if (!els.tooltip) return;

  els.tooltip.classList.remove("show");
  tooltipVisible = false;

  setTimeout(() => {
    if (!tooltipVisible) els.tooltip.classList.add("hidden");
  }, 150);
}

function showTopAlert(message = "You have added this charge already.") {
  if (!els.topAlert) return;

  const textEl = els.topAlert.querySelector(".alert-text");
  if (textEl) {
    textEl.textContent = message;
  }

  els.topAlert.classList.remove("hidden");

  requestAnimationFrame(() => {
    els.topAlert.classList.add("show");
  });

  setTimeout(() => hideTopAlert(), 3000);
}

function hideTopAlert() {
  if (!els.topAlert) return;

  els.topAlert.classList.remove("show");

  setTimeout(() => {
    els.topAlert.classList.add("hidden");
  }, 400);
}

if (els.topAlertClose) els.topAlertClose.onclick = hideTopAlert;

const money = value =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(Number(value) || 0);

const escapeHtml = value =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const findCode = code => PENAL_CODES.find(item => item.code === code);

function renderCodes() {
  const query = els.searchInput.value.trim().toLowerCase();

  const filtered = PENAL_CODES.filter(item =>
    [item.code, item.reference, item.classification, item.section].some(v =>
      String(v ?? "").toLowerCase().includes(query)
    )
  );

  els.codeCount.textContent = `${filtered.length} / ${PENAL_CODES.length}`;

  if (!filtered.length) {
    els.codeList.innerHTML =
      '<div class="empty-state">No penal codes found.</div>';
    return;
  }

  els.codeList.innerHTML = filtered
    .map(
      item => `
    <button class="code-item" type="button" data-code="${escapeHtml(
      item.code
    )}">
      <span class="code-reference">
        <span class="code-number">${escapeHtml(item.code)}</span>
        ${escapeHtml(item.reference)}
      </span>
      <span class="code-classification">${escapeHtml(
        item.classification
      )}</span>
    </button>
  `
    )
    .join("");

  els.codeList.querySelectorAll(".code-item").forEach(button => {
    const item = findCode(button.dataset.code);
    if (!item) return;

    let hoverTimer = null;

    button.addEventListener("mouseenter", e => {
      const x = e.clientX + 12;
      const y = e.clientY + 12;

      targetX = x;
      targetY = y;

      hoverTimer = setTimeout(() => {
        showTooltip(item.description, x, y);
      }, 500);
    });

    button.addEventListener("mousemove", e => {
      const x = e.clientX + 12;
      const y = e.clientY + 12;

      targetX = x;
      targetY = y;

      if (!tooltipVisible) {
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => {
          showTooltip(item.description, x, y);
        }, 500);
      }
    });

    button.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimer);
      hoverTimer = null;
      hideTooltip();
    });
  });
}

function renderPreview() {
  if (!state.preview) {
    els.previewEmpty.classList.remove("hidden");
    els.previewCard.classList.add("hidden");
    els.previewCard.innerHTML = "";
    return;
  }

  const item = state.preview;

  els.previewEmpty.classList.add("hidden");
  els.previewCard.classList.remove("hidden");

  const safeSection = String(item.section ?? "").replace(/^\(\d+\)\s*/, "");

  els.previewCard.innerHTML = `
    <div class="preview-head">
      <div class="preview-code">${escapeHtml(item.code)} - ${escapeHtml(
    item.reference
  )}</div>
      <div class="preview-classification">${escapeHtml(
        item.classification
      )}</div>
    </div>

    <div class="preview-row">
      <span class="preview-label">Fine</span>
      <span class="preview-value">${money(item.fine)}</span>
    </div>

    <div class="preview-row">
      <span class="preview-label">Jail time</span>
      <span class="preview-value">${Number(item.jailTime) || 0}s</span>
    </div>

    <div class="preview-row">
      <span class="preview-label">Impoundment</span>
      <span class="preview-value">${escapeHtml(
        String(item.impoundment ?? "")
      )}</span>
    </div>

    <div class="preview-row">
      <span class="preview-label">Section</span>
      <span class="preview-value">${escapeHtml(safeSection)}</span>
    </div>

    <div class="preview-actions">
      <button class="go-back" id="previewBack">Go back</button>
      <button class="add-charge" id="previewAdd">Add to charge</button>
    </div>
  `;

  const backBtn = document.getElementById("previewBack");
  const addBtn = document.getElementById("previewAdd");

  if (backBtn) {
    backBtn.onclick = () => {
      state.preview = null;
      renderPreview();
    };
  }

  if (addBtn) {
    addBtn.onclick = () => {
      addCharge(item);
      state.preview = null;
      renderPreview();
    };
  }
}

// ⭐ Missing before: define openPreview so click handler works
function openPreview(item) {
  state.preview = item;
  renderPreview();
}

function addCharge(item) {
  if (state.recentCharges.some(c => c.code === item.code)) {
    showTopAlert("You have added this charge already.");
    return;
  }

  state.recentCharges.push(item);
  renderRecentCharges();
  renderSummary();
}

function removeCharge(index) {
  state.recentCharges.splice(index, 1);
  renderRecentCharges();
  renderSummary();
}

function renderRecentCharges() {
  if (!state.recentCharges.length) {
    els.recentCharges.innerHTML =
      '<div class="empty-state">No charges selected.</div>';
    return;
  }

  els.recentCharges.innerHTML = state.recentCharges
    .map(
      (item, index) => `
    <div class="recent-item">
      <div class="recent-main">
        <div class="recent-title">
          ${escapeHtml(item.code)} - ${escapeHtml(item.reference)}
          <span class="code-classification"> · ${escapeHtml(
            item.classification
          )}</span>
        </div>
        <div class="recent-subtitle">
          ${money(item.fine)} · ${Number(item.jailTime) || 0}s of jailtime
        </div>
      </div>
      <button class="remove-charge" data-index="${index}">×</button>
    </div>
  `
    )
    .join("");

  els.recentCharges.querySelectorAll(".remove-charge").forEach(btn => {
    btn.onclick = () => removeCharge(Number(btn.dataset.index));
  });
}

function renderSummary() {
  if (!state.recentCharges.length) {
    els.summaryCharges.innerHTML =
      '<div class="empty-state">No charges selected.</div>';
    els.totalFine.textContent = "$0.00";
    els.sentencedRow.classList.add("hidden");
    return;
  }

  const unique = new Map();
  state.recentCharges.forEach(item => {
    if (!unique.has(item.code)) unique.set(item.code, item);
  });

  els.summaryCharges.innerHTML = [...unique.values()]
    .map(
      item =>
        `<div class="summary-charge">${escapeHtml(item.code)} - ${escapeHtml(
          item.reference
        )}</div>`
    )
    .join("");

  const totalFine = state.recentCharges.reduce(
    (sum, item) => sum + Number(item.fine || 0),
    0
  );

  const totalJail = state.recentCharges
    .filter(item => item.warrantsArrest)
    .reduce((sum, item) => sum + Number(item.jailTime || 0), 0);

  els.totalFine.textContent = money(totalFine);

  if (totalJail > 0) {
    els.sentencedRow.classList.remove("hidden");
    els.totalJail.textContent = `${totalJail}s`;
  } else {
    els.sentencedRow.classList.add("hidden");
  }
}

function resetApp() {
  state.preview = null;
  state.recentCharges = [];
  renderPreview();
  renderRecentCharges();
  renderSummary();
}

function updateReportTypeButtons() {
  document.querySelectorAll(".report-type").forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.report === state.reportType);
  });
}

function updateImpoundmentUI() {
  const group = document.getElementById("impoundmentGroup");
  if (!group) return;

  const impoundPossible = state.recentCharges.some(
    item => String(item.impoundment || "").toLowerCase() !== "no"
  );

  if (state.reportType === "citation" && impoundPossible) {
    group.classList.remove("hidden");
  } else {
    group.classList.add("hidden");
  }

  document.querySelectorAll(".impound-type").forEach(btn => {
    btn.classList.toggle(
      "selected",
      btn.dataset.impound === state.impoundmentChoice
    );
  });
}

function openModal() {
  if (!state.recentCharges.length) {
  showTopAlert("You have to add a charge first.");
  return;
}

  updateReportTypeButtons();
  updateImpoundmentUI();

  els.userId.value = "";
  setInputValid();

  if (els.modalBackdrop) {
    els.modalBackdrop.classList.remove("hidden");
    setTimeout(() => els.userId.focus(), 0);
  }
}

function closeModal() {
  if (els.modalBackdrop) els.modalBackdrop.classList.add("hidden");
}

function openConfirmModal() {
  if (els.confirmBackdrop) els.confirmBackdrop.classList.remove("hidden");
}

function closeConfirmModal() {
  if (els.confirmBackdrop) els.confirmBackdrop.classList.add("hidden");
}

function setInputValid() {
  const valid = /^\d*$/.test(els.userId.value);
  els.userId.classList.toggle("invalid", !valid);
  els.numberError.classList.toggle("hidden", valid);
  return valid;
}

function buildCopyText() {
  const userId = els.userId.value.trim();

  const header = `${officerName} | ${officerRank} ${officerBadge || ""}`.trim();
  const lines = [header];

  // ⭐ Insert extra LEOs directly under the main officer
  if (state.otherLeoInvolved === "yes") {
    const names = state.otherLeoNames.split(",").map(v => v.trim());
    const ranks = state.otherLeoRanks.split(",").map(v => v.trim());
    const depts = state.otherLeoDepts.split(",").map(v => v.trim());

    for (let i = 0; i < names.length; i++) {
      const n = names[i] || "";
      const r = ranks[i] || "";
      const d = depts[i] || "";

      const emoji = deptEmoji[d.toUpperCase()] || "";

      lines.push(`${n} | ${r} ${emoji}`);
    }
  }

  // Add the user ID line after officers
  lines.push(`<@${userId}>`);
  lines.push("");

  const label =
    state.reportType === "warning"
      ? "Written Warning"
      : state.reportType === "citation"
      ? "Citation"
      : "Arrest report";

  lines.push(`**${label}:**`);

  for (const item of state.recentCharges) {
    const fine = money(item.fine);
    const imp = String(item.impoundment || "").toLowerCase() !== "no";

    if (state.reportType === "warning") {
      lines.push(`${item.code} - ~~${fine}${imp ? " + Impoundment" : ""}~~`);
      continue;
    }

    if (state.reportType === "arrest") {
      lines.push(`${item.code} - ${fine}${imp ? " + Impoundment" : ""}`);
      continue;
    }

    if (state.reportType === "citation") {
      if (imp) {
        lines.push(
          `${item.code} - ${fine} + ${
            state.impoundmentChoice === "yes"
              ? "Impoundment"
              : "~~Impoundment~~"
          }`
        );
      } else {
        lines.push(`${item.code} - ${fine}`);
      }
    }
  }

  lines.push("");
  lines.push("**Total:**");

  const totalFine = state.recentCharges.reduce(
    (sum, item) => sum + Number(item.fine || 0),
    0
  );

  const impoundInTotal =
    state.reportType !== "warning" &&
    state.impoundmentChoice === "yes" &&
    state.recentCharges.some(
      item => String(item.impoundment || "").toLowerCase() !== "no"
    );

  if (state.reportType === "arrest") {
    const totalJail = state.recentCharges
      .filter(item => item.warrantsArrest)
      .reduce((sum, item) => sum + Number(item.jailTime || 0), 0);

    lines.push(
      `${totalJail}s of Jailtime & ${money(totalFine)}${
        impoundInTotal ? " + Impoundment" : ""
      }`
    );
  } else {
    const base = state.reportType === "warning" ? "$0.00" : money(totalFine);
    lines.push(`${base}${impoundInTotal ? " + Impoundment" : ""}`);
  }

  return lines.join("\n");
}

async function copyInformation() {
  if (!setInputValid() || !els.userId.value.trim()) {
    els.userId.classList.add("invalid");
    els.numberError.classList.remove("hidden");
    els.numberError.textContent = "ⓘ Only numbers may be inputted";
    return;
  }

  // ⭐ Validate other LEO usernames (3–20 chars each)
const rawNames = document.getElementById("otherLeoNames").value.trim();
if (state.otherLeoInvolved === "yes") {
  const nameList = rawNames.split(",").map(n => n.trim());

  const invalid = nameList.some(n => n.length < 3 || n.length > 20);

  if (invalid) {
    document.getElementById("otherLeoNames").classList.add("invalid");
    document.getElementById("otherLeoNameError").classList.remove("hidden");
    return; // prevent continuing
  } else {
    document.getElementById("otherLeoNames").classList.remove("invalid");
    document.getElementById("otherLeoNameError").classList.add("hidden");
  }
}

// ⭐ Validate department (must be OCSO, WSP, or NPS)
const rawDepts = document.getElementById("otherLeoDepts").value.trim();
if (state.otherLeoInvolved === "yes") {
  const deptList = rawDepts.split(",").map(d => d.trim().toUpperCase());

  const validDepts = ["OCSO", "WSP", "NPS"];
  const invalidDept = deptList.some(d => !validDepts.includes(d));

  if (invalidDept) {
    document.getElementById("otherLeoDepts").classList.add("invalid");
    document.getElementById("otherLeoDeptError").classList.remove("hidden");
    return; // prevent continuing
  } else {
    document.getElementById("otherLeoDepts").classList.remove("invalid");
    document.getElementById("otherLeoDeptError").classList.add("hidden");
  }
}
  
  // ⭐ STEP 5 — Capture extra LEO fields
  state.otherLeoNames = document.getElementById("otherLeoNames").value.trim();
  state.otherLeoRanks = document.getElementById("otherLeoRanks").value.trim();
  state.otherLeoDepts = document.getElementById("otherLeoDepts").value.trim();

  // ⭐ STEP 5 — Auto-capitalise ranks (title case)
  state.otherLeoRanks = state.otherLeoRanks
    .split(",")
    .map(r => r.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase()))
    .join(", ");

  // Build final text AFTER capturing extra LEO info
  const text = buildCopyText();

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    els.copyBuffer.value = text;
    els.copyBuffer.focus();
    els.copyBuffer.select();
    document.execCommand("copy");
  }

  closeModal();
}

function setupKeyboardGroup(selector) {
  const buttons = [...document.querySelectorAll(selector)];

  buttons.forEach((btn, index) => {
    btn.addEventListener("keydown", e => {
      const key = e.key;

      if (key === "ArrowRight" || key === "ArrowDown") {
        e.preventDefault();
        const next = buttons[(index + 1) % buttons.length];
        next.focus();
        next.click();
      }

      if (key === "ArrowLeft" || key === "ArrowUp") {
        e.preventDefault();
        const prev =
          buttons[(index - 1 + buttons.length) % buttons.length];
        prev.focus();
        prev.click();
      }

      if (key === " " || key === "Enter") {
        e.preventDefault();
        btn.click();
      }
    });
  });
}

/* --- EVENT WIRING --- */

if (els.searchInput) {
  els.searchInput.addEventListener("input", renderCodes);
}

if (els.codeList) {
  els.codeList.addEventListener("click", e => {
    const btn = e.target.closest(".code-item");
    if (!btn) return;

    const item = findCode(btn.dataset.code);
    if (!item) return;

    if (e.shiftKey) {
      addCharge(item);
      state.preview = null;
      renderPreview();
    } else {
      openPreview(item);
    }
  });
}

document.querySelectorAll(".report-type").forEach(btn => {
  btn.onclick = () => {
    state.reportType = btn.dataset.report;
    updateReportTypeButtons();
    updateImpoundmentUI();
  };
});

document.querySelectorAll(".impound-type").forEach(btn => {
  btn.onclick = () => {
    state.impoundmentChoice = btn.dataset.impound;
    updateImpoundmentUI();
  };
});

// REPORT TYPE BUTTONS
document.querySelectorAll(".report-type").forEach(btn => {
  btn.onclick = () => {
    state.reportType = btn.dataset.report;

    document.querySelectorAll(".report-type").forEach(b =>
      b.classList.toggle("selected", b === btn)
    );

    // Show impoundment only for arrest reports
    document.getElementById("impoundmentGroup")
      .classList.toggle("hidden", state.reportType !== "arrest");
  };
});

// IMPOUNDMENT BUTTONS
document.querySelectorAll(".impound-type").forEach(btn => {
  btn.onclick = () => {
    state.impoundmentChoice = btn.dataset.impound;

    document.querySelectorAll(".impound-type").forEach(b =>
      b.classList.toggle("selected", b === btn)
    );
  };
});


// ⭐ STEP 4 — OTHER LEO INVOLVEMENT BUTTONS
document.querySelectorAll(".other-leo-type").forEach(btn => {
  btn.onclick = () => {
    state.otherLeoInvolved = btn.dataset.otherleo;

    // Toggle selected class
    document.querySelectorAll(".other-leo-type").forEach(b =>
      b.classList.toggle("selected", b === btn)
    );

    // Show/hide extra fields
    const fields = document.getElementById("otherLeoFields");
    fields.classList.toggle("hidden", state.otherLeoInvolved === "no");
  };
});

if (els.userId) {
  els.userId.addEventListener("input", () => {
    const value = els.userId.value;
    const valid = /^\d*$/.test(value);

    els.userId.classList.toggle("invalid", !valid);
    els.numberError.classList.toggle("hidden", valid);
  });
}

if (els.continueBtn) {
  els.continueBtn.onclick = openModal;
}

if (els.modalCloseBtn) {
  els.modalCloseBtn.onclick = closeModal;
}

if (els.copyBtn) {
  els.copyBtn.onclick = copyInformation;
}

if (els.resetBtn) {
  els.resetBtn.onclick = () => {
    state.recentCharges.length ? openConfirmModal() : resetApp();
  };
}

if (els.confirmClearBtn) {
  els.confirmClearBtn.onclick = () => {
    resetApp();
    closeConfirmModal();
  };
}

if (els.cancelClearBtn) {
  els.cancelClearBtn.onclick = closeConfirmModal;
}

if (els.modalBackdrop) {
  els.modalBackdrop.onclick = e => {
    if (e.target === els.modalBackdrop) closeModal();
  };
}

if (els.confirmBackdrop) {
  els.confirmBackdrop.onclick = e => {
    if (e.target === els.confirmBackdrop) closeConfirmModal();
  };
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (els.modalBackdrop && !els.modalBackdrop.classList.contains("hidden")) {
      closeModal();
    } else if (
      els.confirmBackdrop &&
      !els.confirmBackdrop.classList.contains("hidden")
    ) {
      closeConfirmModal();
    }
  }
});

/* --- THEME + PARALLAX --- */

document.documentElement.classList.add("theme-transition");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

if (els.themeToggle) {
  els.themeToggle.addEventListener("click", () => {
    document.documentElement.classList.add("theme-transition");

    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 400);
  });
}

document.addEventListener("scroll", () => {
  document.documentElement.style.setProperty("--scroll", window.scrollY);
});

/* --- INITIAL RENDER --- */

renderCodes();
renderPreview();
renderRecentCharges();
renderSummary();
updateReportTypeButtons();
updateImpoundmentUI();
setupKeyboardGroup(".report-type");
setupKeyboardGroup(".impound-type");
initLogin();
