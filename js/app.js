/* Ask Candidates — app logic.
   No tracking, no analytics, no network calls. Everything runs in this page. */

(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const els = {
    messageDisplay: $("message-display"),
    copyMessage: $("btn-copy-message"),
    reroll: $("btn-reroll"),
    restoreBar: $("restore-bar"),
    restoreBtn: $("btn-restore"),
    copyShare: $("btn-copy-share"),
  };

  let isDirty = false;
  let stashedDraft = null;

  // Shuffle deck — cycles through all templates before repeating any
  let deck = [];
  let deckPos = 0;

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function nextIndex() {
    if (deckPos >= deck.length) {
      deck = shuffleArray([...Array(MESSAGE_TEMPLATES.length).keys()]);
      deckPos = 0;
    }
    return deck[deckPos++];
  }

  // Always start with the momentum template; pre-load the rest so it does not repeat early
  const defaultIndex = MESSAGE_TEMPLATES.findIndex(t => t.angle === "momentum");
  deck = shuffleArray([...Array(MESSAGE_TEMPLATES.length).keys()].filter(i => i !== defaultIndex));
  let currentIndex = defaultIndex;

  function buildMessage() {
    const t = MESSAGE_TEMPLATES[currentIndex];
    return ["Dear [Candidate Name],", t.body, t.personalize, t.ask, SIGNOFF].join("\n\n");
  }

  function setMessageHtml(plainText) {
    if (!plainText) { els.messageDisplay.innerHTML = ""; return; }
    const escape = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const html = plainText.split("\n\n").map(para => {
      const isPersonalize = /^\[.+\]$/.test(para.trim());
      const cls = isPersonalize ? ' class="msg-personalize"' : '';
      const escaped = escape(para)
        .replace(/\n/g, "<br>")
        .replace(/\[([^\]]+)\]/g, '<span class="fill-in">[$1]</span>');
      return `<p${cls}>${escaped}</p>`;
    }).join("");
    els.messageDisplay.innerHTML = html;
  }

  function getDisplayText() {
    const ps = els.messageDisplay.querySelectorAll("p");
    if (!ps.length) return els.messageDisplay.textContent.trim();
    return Array.from(ps).map(p => {
      const clone = p.cloneNode(true);
      clone.querySelectorAll("br").forEach(br => br.replaceWith("\n"));
      return clone.textContent.trim();
    }).filter(Boolean).join("\n\n");
  }

  function flashButton(btn, label, ms = 1400) {
    const original = btn.textContent;
    btn.textContent = label;
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; }, ms);
  }

  function copyText(text, btn) {
    const done = () => flashButton(btn, "Copied ✓");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => legacyCopy(text, done));
    } else {
      legacyCopy(text, done);
    }
  }

  function legacyCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    done();
  }

  function shareComment() {
    const i = Math.floor(Math.random() * SHARE_COMMENTS.length);
    return SHARE_COMMENTS[i] + "\n" + SITE_URL;
  }

  function init() {
    setMessageHtml(buildMessage());

    els.messageDisplay.addEventListener("input", () => { isDirty = true; });

    els.reroll.addEventListener("click", () => {
      if (isDirty && getDisplayText().trim()) {
        stashedDraft = getDisplayText();
        els.restoreBar.hidden = false;
      }
      currentIndex = nextIndex();
      setMessageHtml(buildMessage());
      isDirty = false;
    });

    els.restoreBtn.addEventListener("click", () => {
      if (stashedDraft) { setMessageHtml(stashedDraft); isDirty = true; }
      els.restoreBar.hidden = true;
    });

    els.copyMessage.addEventListener("click", () => {
      copyText(getDisplayText(), els.copyMessage);
    });

    if (els.copyShare) {
      els.copyShare.addEventListener("click", () => {
        copyText(shareComment(), els.copyShare);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
