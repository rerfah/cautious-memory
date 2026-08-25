/* -------------------------------------------------------
   STATE
------------------------------------------------------- */
const state = {
  preview: null,
  recentCharges: [],
  reportType: "warning",
  impoundmentChoice: "no"
};

/* -------------------------------------------------------
   ELEMENTS
------------------------------------------------------- */
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
  closeBtn: document.getElementById("closeBtn"),
  copyBuffer: document.getElementById("copyBuffer"),
  confirmBackdrop: document.getElementById("confirmBackdrop"),
  confirmClearBtn: document.getElementById("confirmClearBtn"),
  cancelClearBtn: document.getElementById("cancelClearBtn"),
  themeToggle: document.getElementById("themeToggle"),

  /* NEW: Top alert tooltip */
  topAlert: document.getElementById("topAlert"),
  topAlertClose: document.querySelector(".alert-close")
};

/* -------------------------------------------------------
   MAGNETIC TOOLTIP FOLLOW SYSTEM
------------------------------------------------------- */
const tooltip = document.getElementById("tooltip");
let tooltipVisible = false;

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

function animateTooltip() {
  currentX += (targetX - currentX) * 0.25;
  currentY += (targetY - currentY) * 0.25;

  tooltip.style.left = `${currentX}px`;
  tooltip.style.top = `${currentY}px`;

  requestAnimationFrame(animateTooltip);
}

animateTooltip();

/* -------------------------------------------------------
   TOOLTIP SHOW / HIDE
------------------------------------------------------- */
function showTooltip(text, x, y) {
  tooltip.textContent = text;
  tooltip.classList.remove("hidden");

  targetX = x;
  targetY = y;

  tooltip.classList.add("show");
  tooltipVisible = true;
}

function hideTooltip() {
  tooltip.classList.remove("show");
  tooltipVisible = false;

  setTimeout(() => {
    if (!tooltipVisible) tooltip.classList.add("hidden");
  }, 150);
}

/* -------------------------------------------------------
   TOP ALERT TOOLTIP (NEW)
------------------------------------------------------- */
function showTopAlert() {
  els.topAlert.classList.remove("hidden");

  requestAnimationFrame(() => {
    els.topAlert.classList.add("show");
  });

  setTimeout(() => hideTopAlert(), 3000);
}

function hideTopAlert() {
  els.topAlert.classList.remove("show");

  setTimeout(() => {
    els.topAlert.classList.add("hidden");
  }, 400);
}

els.topAlertClose.onclick = hideTopAlert;

/* -------------------------------------------------------
   HELPERS
------------------------------------------------------- */
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

/* -------------------------------------------------------
   RENDER: CODE LIST
------------------------------------------------------- */
function renderCodes() {
  const query = els.searchInput.value.trim().toLowerCase();

  const filtered = PENAL_CODES.filter(item =>
    [item.code, item.reference, item.classification, item.section]
      .some(v => String(v ?? "").toLowerCase().includes(query))
  );

  els.codeCount.textContent = `${filtered.length} / ${PENAL_CODES.length}`;

  if (!filtered.length) {
    els.codeList.innerHTML = `<div class="empty-state">No penal codes found.</div>`;
    return;
  }

  els.codeList.innerHTML = filtered.map(item => `
    <button class="code-item" type="button" data-code="${escapeHtml(item.code)}">
      <span class="code-reference">
        <span class="code-number">${escapeHtml(item.code)}</span>
        ${escapeHtml(item.reference)}
      </span>
      <span class="code-classification">${escapeHtml(item.classification)}</span>
    </button>
  `).join("");

  els.codeList.querySelectorAll(".code-item").forEach(button => {
    const item = findCode(button.dataset.code);

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

/* -------------------------------------------------------
   RENDER: PREVIEW
------------------------------------------------------- */
function openPreview(item) {
  state.preview = item;
  renderPreview();
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

  els.previewCard.innerHTML = `
    <div class="preview-head">
      <div class="preview-code">${escapeHtml(item.code)} - ${escapeHtml(item.reference)}</div>
      <div class="preview-classification">${escapeHtml(item.classification)}</div>
    </div>

    <div class="preview-row">
      <span class="preview-label">Fine</span>
      <span class="preview-value">${money(item.fine)}</span>
    </div>

    <div class="preview-row">
      <span class="preview-label">Jail time</span>
      <span class="preview-value">${escapeHtml(item.jailTime)}s</span>
    </div>

    <div class="preview-row">
      <span class="preview-label">Impoundment</span>
      <span class="preview-value">${escapeHtml(item.impoundment)}</span>
    </div>

    <div class="preview-row">
      <span class="preview-label">Section</span>
      <span class="preview-value">${escapeHtml(item.section.replace(/^\(\d+\)\s*/, ""))}</span>
    </div>

    <div class="preview-actions">
      <button class="go-back" id="previewBack">Go back</button>
      <button class="add-charge" id="previewAdd">Add to charge</button>
    </div>
  `;

  document.getElementById("previewBack").onclick = () => {
    state.preview = null;
    renderPreview();
  };

  document.getElementById("previewAdd").onclick = () => {
    addCharge(item);
    state.preview = null;
    renderPreview();
  };
}

/* -------------------------------------------------------
   CHARGES
------------------------------------------------------- */
function addCharge(item) {
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
    els.recentCharges.innerHTML = `<div class="empty-state">No charges selected.</div>`;
    return;
  }

  els.recentCharges.innerHTML = state.recentCharges.map((item, index) => `
    <div class="recent-item">
      <div class="recent-main">
        <div class="recent-title">
          ${escapeHtml(item.code)} - ${escapeHtml(item.reference)}
          <span class="code-classification"> · ${escapeHtml(item.classification)}</span>
        </div>
        <div class="recent-subtitle">${money(item.fine)} · ${escapeHtml(item.jailTime)}s jail</div>
      </div>
      <button class="remove-charge" data-index="${index}">×</button>
    </div>
  `).join("");

  els.recentCharges.querySelectorAll(".remove-charge").forEach(btn => {
    btn.onclick = () => removeCharge(Number(btn.dataset.index));
  });
}

/* -------------------------------------------------------
   SUMMARY
------------------------------------------------------- */
function renderSummary() {
  if (!state.recentCharges.length) {
    els.summaryCharges.innerHTML = `<div class="empty-state">No charges selected.</div>`;
    els.totalFine.textContent = "$0.00";
    els.sentencedRow.classList.add("hidden");
    return;
  }

  const unique = new Map();
  state.recentCharges.forEach(item => {
    if (!unique.has(item.code)) unique.set(item.code, item);
  });

  els.summaryCharges.innerHTML = [...unique.values()].map(item => `
    <div class="summary-charge">${escapeHtml(item.code)} - ${escapeHtml(item.reference)}</div>
  `).join("");

  const totalFine = state.recentCharges.reduce((sum, item) => sum + Number(item.fine), 0);
  const totalJail = state.recentCharges
    .filter(item => item.warrantsArrest)
    .reduce((sum, item) => sum + Number(item.jailTime), 0);

  els.totalFine.textContent = money(totalFine);

  if (totalJail > 0) {
    els.sentencedRow.classList.remove("hidden");
    els.totalJail.textContent = `${totalJail}s`;
  } else {
    els.sentencedRow.classList.add("hidden");
  }
}

/* -------------------------------------------------------
   RESET
------------------------------------------------------- */
function resetApp() {
  state.preview = null;
  state.recentCharges = [];
  renderPreview();
  renderRecentCharges();
  renderSummary();
}

/* -------------------------------------------------------
   REPORT TYPE + IMPOUNDMENT
------------------------------------------------------- */
function updateReportTypeButtons() {
  document.querySelectorAll(".report-type").forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.report === state.reportType);
  });
}

function updateImpoundmentUI() {
  const group = document.getElementById("impoundmentGroup");
  const impoundPossible = state.recentCharges.some(item =>
    String(item.impoundment).toLowerCase() !== "no"
  );

  if (state.reportType === "citation" && impoundPossible) {
    group.classList.remove("hidden");
  } else {
    group.classList.add("hidden");
  }

  document.querySelectorAll(".impound-type").forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.impound === state.impoundmentChoice);
  });
}

/* -------------------------------------------------------
   MODAL (UPDATED)
------------------------------------------------------- */
function openModal() {
  if (!state.recentCharges.length) {
    showTopAlert();   // NEW: replaces alert()
    return;
  }

  updateReportTypeButtons();
  updateImpoundmentUI();

  els.userId.value = "";
  setInputValid();

  els.modalBackdrop.classList.remove("hidden");
  setTimeout(() => els.userId.focus(), 0);
}

function closeModal() {
  els.modalBackdrop.classList.add("hidden");
}

function openConfirmModal() {
  els.confirmBackdrop.classList.remove("hidden");
}

function closeConfirmModal() {
  els.confirmBackdrop.classList.add("hidden");
}

/* -------------------------------------------------------
   INPUT VALIDATION
------------------------------------------------------- */
function setInputValid() {
  const valid = /^\d*$/.test(els.userId.value);
  els.userId.classList.toggle("invalid", !valid);
  els.numberError.classList.toggle("hidden", valid);
  return valid;
}

/* -------------------------------------------------------
   COPY REPORT
------------------------------------------------------- */
function buildCopyText() {
  const userId = els.userId.value.trim();
  const lines = [
    "rerfah | Sergeant <:ocso:1531706128428306452>",
    `<@${userId}>`,
    ""
  ];

  const label =
    state.reportType === "warning" ? "Written Warning" :
    state.reportType === "citation" ? "Citation" :
    "Arrest report";

  lines.push(`**${label}:**`);

  for (const item of state.recentCharges) {
    const fine = money(item.fine);
    const imp = String(item.impoundment).toLowerCase() !== "no";

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
            state.impoundmentChoice === "yes" ? "Impoundment" : "~~Impoundment~~"
          }`
        );
      } else {
        lines.push(`${item.code} - ${fine}`);
      }
    }
  }

  lines.push("");
  lines.push("**Total:**");

  const totalFine = state.recentCharges.reduce((sum, item) => sum + Number(item.fine), 0);

  if (state.reportType === "arrest") {
    const totalJail = state.recentCharges
      .filter(item => item.warrantsArrest)
      .reduce((sum, item) => sum + Number(item.jailTime), 0);

    lines.push(`${totalJail}s of Jailtime & ${money(totalFine)}`);
  } else {
    lines.push(state.reportType === "warning" ? "$0.00" : money(totalFine));
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

/* -------------------------------------------------------
   THEME
------------------------------------------------------- */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.querySelector(".theme-icon");
  if (icon) icon.textContent = theme === "dark" ? "🌙" : "☀️";
}

function initTheme() {
  const stored = localStorage.getItem("theme");
  const theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(theme);
}

if (els.themeToggle) {
  els.themeToggle.onclick = () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };
}

/* -------------------------------------------------------
   KEYBOARD NAVIGATION
------------------------------------------------------- */
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
        const prev = buttons[(index - 1 + buttons.length) % buttons.length];
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

/* -------------------------------------------------------
   EVENT WIRING
------------------------------------------------------- */
els.searchInput.addEventListener("input", renderCodes);

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

els.userId.addEventListener("input", () => {
  const cleaned = els.userId.value.replace(/\D/g, "");
  els.userId.value = cleaned;
  setInputValid();
});

els.continueBtn.onclick = openModal;
els.closeBtn.onclick = closeModal;
els.copyBtn.onclick = copyInformation;

els.resetBtn.onclick = () => {
  state.recentCharges.length ? openConfirmModal() : resetApp();
};

els.confirmClearBtn.onclick = () => {
  resetApp();
  closeConfirmModal();
};

els.cancelClearBtn.onclick = closeConfirmModal;

els.modalBackdrop.onclick = e => {
  if (e.target === els.modalBackdrop) closeModal();
};

els.confirmBackdrop.onclick = e => {
  if (e.target === els.confirmBackdrop) closeConfirmModal();
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (!els.modalBackdrop.classList.contains("hidden")) {
      closeModal();
    } else if (!els.confirmBackdrop.classList.contains("hidden")) {
      closeConfirmModal();
    }
  }
});

/* -------------------------------------------------------
   INIT
------------------------------------------------------- */
renderCodes();
renderPreview();
renderRecentCharges();
renderSummary();
updateReportTypeButtons();
updateImpoundmentUI();
initTheme();
setupKeyboardGroup(".report-type");
setupKeyboardGroup(".impound-type");
