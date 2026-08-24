const state = {
  preview: null,
  recentCharges: [],
  reportType: "warning",
  impoundmentChoice: "no" // "yes" or "no" for citations
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
  closeBtn: document.getElementById("closeBtn"),
  copyBuffer: document.getElementById("copyBuffer"),
  confirmBackdrop: document.getElementById("confirmBackdrop"),
  confirmClearBtn: document.getElementById("confirmClearBtn"),
  cancelClearBtn: document.getElementById("cancelClearBtn"),
  themeToggle: document.getElementById("themeToggle")
};

/* Tooltip system */
const tooltip = document.getElementById("tooltip");
let tooltipVisible = false;
let tooltipLock = false; // mobile click mode

const money = value =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(Number(value) || 0);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCodes() {
  const query = els.searchInput.value.trim().toLowerCase();
  const filtered = PENAL_CODES.filter(item =>
    [item.code, item.reference, item.classification, item.section]
      .some(value => String(value ?? "").toLowerCase().includes(query))
  );

  els.codeCount.textContent = `${filtered.length} / ${PENAL_CODES.length}`;

  if (!filtered.length) {
    els.codeList.innerHTML = '<div class="empty-state">No penal codes found.</div>';
    return;
  }

  // Render list
  els.codeList.innerHTML = filtered.map(item => `
    <button class="code-item" type="button" data-code="${escapeHtml(item.code)}">
      <span class="code-reference">
        <span class="code-number">${escapeHtml(item.code)}</span>
        ${escapeHtml(item.reference)}
      </span>
      <span class="code-classification">${escapeHtml(item.classification)}</span>
    </button>
  `).join("");

  // ⭐ Tooltip binding MUST be inside renderCodes()
  els.codeList.querySelectorAll(".code-item").forEach(button => {
    const item = findCode(button.dataset.code);

    // Desktop hover
    button.addEventListener("mouseenter", e => {
      if (tooltipLock) return;
      showTooltip(item.description, e.clientX, e.clientY);
    });

    button.addEventListener("mousemove", e => {
      if (tooltipLock) return;
      if (tooltipVisible) showTooltip(item.description, e.clientX, e.clientY);
    });

    button.addEventListener("mouseleave", () => {
      if (!tooltipLock) hideTooltip();
    });

    // Mobile tap
    button.addEventListener("click", e => {
      tooltipLock = !tooltipLock;

      if (tooltipLock) {
        showTooltip(item.description, e.clientX, e.clientY);
      } else {
        hideTooltip();
      }
    });
  });
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
}

  // Desktop hover
  button.addEventListener("mouseenter", e => {
    if (tooltipLock) return;
    showTooltip(item.description, e.clientX, e.clientY);
  });

  button.addEventListener("mousemove", e => {
    if (tooltipLock) return;
    if (tooltipVisible) showTooltip(item.description, e.clientX, e.clientY);
  });

  button.addEventListener("mouseleave", () => {
    if (!tooltipLock) hideTooltip();
  });

  // Mobile click/tap
  button.addEventListener("click", e => {
    tooltipLock = !tooltipLock;

    if (tooltipLock) {
      showTooltip(item.description, e.clientX, e.clientY);
    } else {
      hideTooltip();
    }
  });
});


function findCode(code) {
  return PENAL_CODES.find(item => item.code === code);
}

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
      <button class="go-back" type="button" id="previewBack">Go back</button>
      <button class="add-charge" type="button" id="previewAdd">Add to charge</button>
    </div>
  `;

  document.getElementById("previewBack").addEventListener("click", () => {
    state.preview = null;
    renderPreview();
  });

  document.getElementById("previewAdd").addEventListener("click", () => {
    addCharge(item);
    state.preview = null;
    renderPreview();
  });
}

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
    els.recentCharges.innerHTML = '<div class="empty-state">No charges selected.</div>';
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
      <button class="remove-charge" type="button" aria-label="Remove charge" data-index="${index}">×</button>
    </div>
  `).join("");

  els.recentCharges.querySelectorAll(".remove-charge").forEach(button => {
    button.addEventListener("click", () => removeCharge(Number(button.dataset.index)));
  });
}

function renderSummary() {
  if (!state.recentCharges.length) {
    els.summaryCharges.innerHTML = '<div class="empty-state">No charges selected.</div>';
    els.totalFine.textContent = "$0.00";
    els.sentencedRow.classList.add("hidden");
    return;
  }

  const counts = new Map();
  state.recentCharges.forEach(item => {
    const key = item.code;
    if (!counts.has(key)) counts.set(key, { item, count: 0 });
    counts.get(key).count++;
  });

  els.summaryCharges.innerHTML = [...counts.values()].map(({ item, count }) => `
    <div class="summary-charge">${escapeHtml(item.code)} - ${escapeHtml(item.reference)}</div>
  `).join("");

  const totalFine = state.recentCharges.reduce((sum, item) => sum + Number(item.fine || 0), 0);
  const arrestCharges = state.recentCharges.filter(item => item.warrantsArrest);
  const totalJail = arrestCharges.reduce((sum, item) => sum + Number(item.jailTime || 0), 0);

  els.totalFine.textContent = money(totalFine);

  if (arrestCharges.length > 0) {
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
  document.querySelectorAll(".report-type").forEach(button => {
    button.classList.toggle("selected", button.dataset.report === state.reportType);
  });
}

function updateImpoundmentUI() {
  const group = document.getElementById("impoundmentGroup");
  if (!group) return;

  const impoundPossible = state.recentCharges.some(item =>
    String(item.impoundment).toLowerCase() !== "no"
  );

  if (state.reportType === "citation" && impoundPossible) {
    group.classList.remove("hidden");
  } else {
    group.classList.add("hidden");
  }

  document.querySelectorAll(".impound-type").forEach(button => {
    button.classList.toggle("selected", button.dataset.impound === state.impoundmentChoice);
  });
}

function openModal() {
  if (!state.recentCharges.length) {
    alert("Add at least one charge before continuing.");
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

function setInputValid() {
  const value = els.userId.value;
  const valid = /^\d*$/.test(value);
  els.userId.classList.toggle("invalid", !valid);
  els.numberError.classList.toggle("hidden", valid);
  return valid;
}

function buildCopyText() {
  const userId = els.userId.value.trim();
  const lines = [
    "rerfah | Sergeant <:ocso:1531706128428306452>",
    `<@${userId}>`,
    ""
  ];

  const label = state.reportType === "warning"
    ? "Written Warning:"
    : state.reportType === "citation"
      ? "Citation:"
      : "Arrest report:";

  lines.push(`**${label.replace(":", "")}:**`);

  for (const item of state.recentCharges) {
    const fine = money(item.fine);
    const hasImpoundment = String(item.impoundment).toLowerCase() !== "no";

    // WRITTEN WARNING
    if (state.reportType === "warning") {
      if (hasImpoundment) {
        lines.push(`${item.code} - ~~${fine} + Impoundment~~`);
      } else {
        lines.push(`${item.code} - ~~${fine}~~`);
      }
      continue;
    }

    // ARREST REPORT
    if (state.reportType === "arrest") {
      if (hasImpoundment) {
        lines.push(`${item.code} - ${fine} + Impoundment`);
      } else {
        lines.push(`${item.code} - ${fine}`);
      }
      continue;
    }

    // CITATION
    if (state.reportType === "citation") {
      if (hasImpoundment) {
        if (state.impoundmentChoice === "yes") {
          lines.push(`${item.code} - ${fine} + Impoundment`);
        } else {
          lines.push(`${item.code} - ${fine} + ~~Impoundment~~`);
        }
      } else {
        lines.push(`${item.code} - ${fine}`);
      }
    }
  }

  lines.push("");
  lines.push("**Total:**");

  const totalFine = state.recentCharges.reduce((sum, item) => sum + Number(item.fine || 0), 0);

  if (state.reportType === "arrest") {
    const totalJail = state.recentCharges
      .filter(item => item.warrantsArrest)
      .reduce((sum, item) => sum + Number(item.jailTime || 0), 0);

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

/* Theme handling */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.querySelector(".theme-icon");
  if (icon) {
    icon.textContent = theme === "dark" ? "🌙" : "☀️";
  }
}

function initTheme() {
  const stored = localStorage.getItem("theme");
  let theme = stored;

  if (!theme) {
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme = prefersDark ? "dark" : "light";
  }

  setTheme(theme);
}

/* Keyboard navigation for button groups */
function setupKeyboardGroup(selector) {
  const buttons = Array.from(document.querySelectorAll(selector));
  buttons.forEach((button, index) => {
    button.addEventListener("keydown", event => {
      const key = event.key;
      if (key === "ArrowRight" || key === "ArrowDown") {
        event.preventDefault();
        const next = buttons[(index + 1) % buttons.length];
        next.focus();
        next.click();
      } else if (key === "ArrowLeft" || key === "ArrowUp") {
        event.preventDefault();
        const prev = buttons[(index - 1 + buttons.length) % buttons.length];
        prev.focus();
        prev.click();
      } else if (key === " " || key === "Enter") {
        event.preventDefault();
        button.click();
      }
    });
  });
}

function showTooltip(text, x, y) {
  tooltip.textContent = text;
  tooltip.classList.remove("hidden");

  const padding = 12;
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;

  let left = x + padding;
  let top = y + padding;

  if (left + tooltipWidth > window.innerWidth) {
    left = x - tooltipWidth - padding;
  }
  if (top + tooltipHeight > window.innerHeight) {
    top = y - tooltipHeight - padding;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;

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

/* Event wiring */
els.searchInput.addEventListener("input", renderCodes);

els.codeList.addEventListener("click", event => {
  const button = event.target.closest(".code-item");
  if (!button) return;

  const item = findCode(button.dataset.code);
  if (!item) return;

  if (event.shiftKey) {
    addCharge(item);
    state.preview = null;
    renderPreview();
  } else {
    openPreview(item);
  }
});

document.querySelectorAll(".report-type").forEach(button => {
  button.addEventListener("click", () => {
    state.reportType = button.dataset.report;
    updateReportTypeButtons();
    updateImpoundmentUI();
  });
});

document.addEventListener("click", e => {
  if (!tooltipLock) return;

  if (!e.target.closest(".code-item")) {
    tooltipLock = false;
    hideTooltip();
  }
});

document.querySelectorAll(".impound-type").forEach(button => {
  button.addEventListener("click", () => {
    state.impoundmentChoice = button.dataset.impound;
    document.querySelectorAll(".impound-type").forEach(other =>
      other.classList.toggle("selected", other === button)
    );
  });
});

els.userId.addEventListener("input", () => {
  const original = els.userId.value;
  const cleaned = original.replace(/\D/g, "");
  if (original !== cleaned) {
    els.userId.value = cleaned;
    els.userId.classList.add("invalid");
    els.numberError.classList.remove("hidden");
  } else {
    setInputValid();
  }
});

els.continueBtn.addEventListener("click", openModal);
els.closeBtn.addEventListener("click", closeModal);
els.copyBtn.addEventListener("click", copyInformation);

els.resetBtn.addEventListener("click", () => {
  if (!state.recentCharges.length) {
    resetApp();
  } else {
    openConfirmModal();
  }
});

els.confirmClearBtn.addEventListener("click", () => {
  resetApp();
  closeConfirmModal();
});

els.cancelClearBtn.addEventListener("click", closeConfirmModal);

els.modalBackdrop.addEventListener("click", event => {
  if (event.target === els.modalBackdrop) closeModal();
});

els.confirmBackdrop.addEventListener("click", event => {
  if (event.target === els.confirmBackdrop) closeConfirmModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (!els.modalBackdrop.classList.contains("hidden")) {
      closeModal();
    } else if (!els.confirmBackdrop.classList.contains("hidden")) {
      closeConfirmModal();
    }
  }
});

/* Theme toggle */
els.themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
  localStorage.setItem("theme", next);
});

/* Init */
renderCodes();
renderPreview();
renderRecentCharges();
renderSummary();
updateReportTypeButtons();
updateImpoundmentUI();
initTheme();
setupKeyboardGroup(".report-type");
setupKeyboardGroup(".impound-type");
