/* ============================================================================
   PORTFOLIO ENGINE — reads window.PORTFOLIO from content.js and renders
   ============================================================================ */

(function () {
  "use strict";

  const P = window.PORTFOLIO;
  if (!P) return;

  /* ── Helpers ── */
  function q(sel, ctx)       { return (ctx || document).querySelector(sel); }
  function qa(sel, ctx)      { return Array.from((ctx || document).querySelectorAll(sel)); }
  function has(sel, ctx)     { return !!(ctx || document).querySelector(sel); }
  function setText(sel, val) { const el = q(sel); if (el) el.textContent = val; }
  function setHTML(sel, val) { const el = q(sel); if (el) el.innerHTML = val; }
  function setHref(sel, val) { const el = q(sel); if (el) el.href = val; }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "class") node.className = v;
        else if (k === "html") node.innerHTML = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v);
      });
    }
    if (children) {
      [].concat(children).forEach(c => {
        if (c instanceof Node) node.appendChild(c);
        else if (typeof c === "string") node.appendChild(document.createTextNode(c));
      });
    }
    return node;
  }

  function dataUriToBlobUrl(dataUri) {
    const match = /^data:([^;]+);base64,(.*)$/.exec(dataUri);
    if (!match) return dataUri;
    const mime = match[1];
    const binary = atob(match[2]);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return URL.createObjectURL(new Blob([bytes], { type: mime }));
  }

  /* ── Apply design tokens ── */
  function applySettings() {
    const s = P.settings || {};
    if (s.accent) {
      document.documentElement.style.setProperty("--accent", s.accent);
    }
  }

  /* ── Theme ── */
  function resolveTheme() {
    const saved = localStorage.getItem("rs-portfolio-theme");
    const def   = (P.settings || {}).defaultTheme || "system";
    if (saved === "dark" || saved === "light") return saved;
    if (def === "dark" || def === "light") return def;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("rs-portfolio-theme", theme);
  }

  function initTheme() {
    applyTheme(resolveTheme());
    const btn = q("#themeToggle");
    if (btn) btn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      applyTheme(cur === "dark" ? "light" : "dark");
    });
  }

  /* ── Scroll progress ── */
  function initScrollProgress() {
    const bar = q("#scrollProgress span");
    if (!bar || !(P.settings || {}).showScrollProgress) return;
    q("#scrollProgress").removeAttribute("hidden");
    window.addEventListener("scroll", () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    }, { passive: true });
  }

  /* ── Reveal on scroll ── */
  function initReveal() {
    const nodes = qa("[data-reveal]");

    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(n => n.classList.add("revealed"));
      return;
    }

    // Apply transition delays before observing
    nodes.forEach(n => {
      const d = n.getAttribute("data-reveal-delay");
      if (d) n.style.transitionDelay = (parseInt(d) * 80) + "ms";
    });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

    nodes.forEach(n => {
      // If already in viewport on page load, reveal immediately (no async wait)
      const r = n.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        n.classList.add("revealed");
      } else {
        obs.observe(n);
      }
    });
  }

  /* ── Nav ── */
  function initNav() {
    const basics = P.basics || {};
    setText("[data-logo]", basics.shortName || basics.fullName || "");

    // CV links
    const cv = basics.cvUrl || "#";
    qa("#navCv, #heroCv").forEach(a => { a.href = cv; });

    // Nav shadow on scroll
    const nav = q("#nav");
    if (nav) {
      window.addEventListener("scroll", () => {
        nav.classList.toggle("nav--scrolled", window.scrollY > 10);
      }, { passive: true });
    }

    // Mobile burger
    const burger = q("#navBurger");
    const menu   = q("#mobileMenu");
    if (burger && menu) {
      burger.addEventListener("click", () => {
        const open = menu.hidden;
        menu.hidden = !open;
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      menu.addEventListener("click", e => {
        if (e.target.tagName === "A") { menu.hidden = true; burger.setAttribute("aria-expanded", "false"); }
      });
      document.addEventListener("keydown", e => {
        if (e.key === "Escape" && !menu.hidden) { menu.hidden = true; burger.setAttribute("aria-expanded", "false"); }
      });
    }

    // Active link highlight
    const links = qa(".nav__links a, .nav__mobile a");
    const sects  = qa("section[id]");
    window.addEventListener("scroll", () => {
      let cur = "";
      sects.forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id; });
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
    }, { passive: true });
  }

  /* ── Hero ── */
  function renderHero() {
    const b = P.basics || {};
    setText("[data-hero-name]",     b.fullName || "");
    setText("[data-hero-headline]", b.headline || "");
    setText("[data-hero-location]", b.status   || b.location || "");
    setHTML("[data-hero-intro]",    (b.intro || "").split("\n").filter(Boolean).map(p => `<p>${p}</p>`).join(""));

    // Email + LinkedIn buttons
    const emailA = q("#heroEmail");  if (emailA) emailA.href = `mailto:${b.email}`;
    const liA    = q("#heroLinkedin"); if (liA) { liA.href = b.linkedin || "#"; if (!b.linkedin) liA.hidden = true; }
    const navLi  = q("#navCv"); if (navLi) navLi.href = b.cvUrl || "#";

    // Target roles
    const label = q("[data-target-roles-label]");
    const list  = q("[data-target-roles]");
    if (label) label.textContent = P.targetRolesLabel || "";
    if (list && P.targetRoles) {
      P.targetRoles.forEach(r => list.appendChild(el("li", {}, [el("span", { class: "pill" }, r)])));
    }

    // Portrait (initials fallback)
    const portrait = q("[data-portrait]");
    if (portrait) {
      if (b.photo) {
        portrait.innerHTML = `<img src="${b.photo}" alt="Portrait of ${b.fullName}" class="portrait__img">`;
      } else {
        const initials = (b.fullName || "RS").split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
        portrait.innerHTML = `<div class="portrait__initials" aria-label="${b.fullName}">${initials}</div>`;
      }
    }
  }

  /* ── Metrics strip ── */
  function renderMetrics() {
    const list = q("[data-metrics]");
    if (!list || !P.metrics) return;
    P.metrics.forEach(m => {
      const li = el("li", { class: "metric" }, [
        el("p", { class: "metric__value" }, [
          el("strong", {}, m.value + (m.suffix ? "" : "")),
          m.suffix ? el("span", { class: "metric__suffix" }, m.suffix) : null
        ].filter(Boolean)),
        el("p", { class: "metric__label", text: m.label })
      ]);
      list.appendChild(li);
    });

    // Count-up animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          qa(".metric__value strong", e.target.parentElement || list).forEach(num => {
            const raw = num.textContent;
            const n   = parseFloat(raw);
            if (isNaN(n)) return;
            let start = null;
            const dur = 1200;
            const step = ts => {
              if (!start) start = ts;
              const prog = Math.min((ts - start) / dur, 1);
              const ease = 1 - Math.pow(1 - prog, 3);
              const val  = Math.round(ease * n);
              num.textContent = raw.includes("+") ? val + "+" : String(val);
              if (prog < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
          obs.disconnect();
        });
      }, { threshold: 0.5 });
      obs.observe(list);
    }
  }

  /* ── About ── */
  function renderAbout() {
    const ab = P.about || {};
    setText("[data-about-kicker]",  ab.kicker  || "");
    setText("[data-about-heading]", ab.heading || "About");
    const body = q("[data-about-body]");
    if (body && ab.paragraphs) {
      body.innerHTML = ab.paragraphs.map(p => `<p>${p}</p>`).join("");
    }
    const pList = q("[data-principles]");
    if (pList && ab.principles) {
      ab.principles.forEach(pr => {
        pList.appendChild(el("li", { class: "principle" }, [
          el("h3", { class: "principle__title", text: pr.title }),
          el("p",  { class: "principle__text",  text: pr.text  })
        ]));
      });
    }
  }

  /* ── Case Studies ── */
  function renderCases() {
    setText("[data-work-kicker]",  P.caseStudiesKicker  || "");
    setText("[data-work-heading]", P.caseStudiesHeading || "Selected Work");
    const wrap = q("[data-cases]");
    if (!wrap || !P.caseStudies) return;

    P.caseStudies.forEach((cs, i) => {
      const id = "case-" + i;

      // Results
      const results = (cs.results || []).map(r =>
        `<div class="case__result"><strong>${r.value}</strong><span>${r.label}</span></div>`
      ).join("");

      // Actions
      const actions = (cs.actions || []).map(a => `<li>${a}</li>`).join("");

      // Tags
      const tags = (cs.tags || []).map(t => `<span class="chip chip--sm">${t}</span>`).join("");

      const card = el("article", { class: "case", "data-reveal": "" }, [
        el("button", {
          class:           "case__toggle",
          type:            "button",
          "aria-expanded": "false",
          "aria-controls": id,
          html: `
            <div class="case__toggle-top">
              <span class="case__meta">${cs.org} · ${cs.period}</span>
              <svg class="case__chevron" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <h3 class="case__title">${cs.title}</h3>
            <p class="case__summary">${cs.summary}</p>
            ${tags ? `<div class="chips chips--sm">${tags}</div>` : ""}
          `
        }),
        el("div", {
          class:  "case__body",
          id:     id,
          hidden: true,
          html: `
            <div class="case__section">
              <p class="case__section-label">Role</p>
              <p>${cs.role}</p>
            </div>
            <div class="case__section">
              <p class="case__section-label">Situation</p>
              <p>${cs.context}</p>
            </div>
            <div class="case__section">
              <p class="case__section-label">What I did</p>
              <ul class="case__actions">${actions}</ul>
            </div>
            ${results ? `<div class="case__results">${results}</div>` : ""}
          `
        })
      ]);

      // Toggle accordion
      const btn = q(".case__toggle", card);
      const body = q(".case__body", card);
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        body.hidden = open;
        card.classList.toggle("case--open", !open);
      });

      wrap.appendChild(card);
    });
  }

  /* ── Experience timeline ── */
  function renderTimeline() {
    setText("[data-exp-kicker]",  P.experienceKicker  || "");
    setText("[data-exp-heading]", P.experienceHeading || "Experience");
    const list = q("[data-timeline]");
    if (!list || !P.experience) return;
    P.experience.forEach(e => {
      const points = (e.points || []).map(p => `<li>${p}</li>`).join("");
      list.appendChild(el("li", { class: "tl-item", "data-reveal": "" }, [
        el("div", { class: "tl-item__dot" }),
        el("div", { class: "tl-item__content" }, [
          el("div", { class: "tl-item__header" }, [
            el("div", {}, [
              el("p", { class: "tl-item__role",    text: e.role    }),
              el("p", { class: "tl-item__company", text: e.company }),
              el("p", { class: "tl-item__meta",    text: e.meta    })
            ]),
            el("span", { class: "tl-item__period", text: e.period })
          ]),
          el("ul", { class: "tl-item__points", html: points })
        ])
      ]));
    });
  }

  /* ── Impact gauges ── */
  function renderImpact() {
    const imp = P.impact;
    if (!imp || !imp.items || imp.items.length === 0) {
      const sec = q("[data-impact]");
      if (sec) sec.hidden = true;
      return;
    }
    const sec = q("[data-impact]");
    if (sec) sec.removeAttribute("hidden");

    setText("[data-impact-kicker]",  imp.kicker  || "");
    setText("[data-impact-heading]", imp.heading || "Measured Impact");
    setText("[data-impact-note]",    imp.note    || "");
    setText("[data-impact-readout]", imp.baseline || "");

    // Table toggle
    const tableToggle = q("[data-impact-table-toggle]");
    const tableWrap   = q("#impactTable");
    if (tableToggle && tableWrap) {
      tableToggle.addEventListener("click", () => {
        const open = tableToggle.getAttribute("aria-expanded") === "true";
        tableToggle.setAttribute("aria-expanded", open ? "false" : "true");
        tableWrap.hidden = open;
        tableToggle.textContent = open ? "View as table" : "Hide table";
      });
    }

    // Table body
    const tbody = q("[data-impact-tbody]");
    if (tbody) {
      imp.items.forEach(item => {
        tbody.appendChild(el("tr", {}, [
          el("td", { text: item.label }),
          el("td", { text: item.value + "%" })
        ]));
      });
    }

    // Gauges
    const grid = q("[data-impact-rows]");
    const readout = q("[data-impact-readout]");
    if (!grid) return;

    const R = 44, C = +(2 * Math.PI * R).toFixed(2);

    imp.items.forEach(item => {
      const dash = +((item.value / 100) * C).toFixed(2);
      const gauge = el("div", {
        class:    "gauge",
        tabindex: "0",
        role:     "img",
        "aria-label": `${item.label}: ${item.value}%`
      }, [
        el("div", {
          class: "gauge__ring-wrap",
          html: `
            <svg class="gauge__svg" viewBox="0 0 100 100" aria-hidden="true">
              <circle class="gauge__track" cx="50" cy="50" r="${R}"
                      stroke-width="7" fill="none"
                      stroke-dasharray="${C}" stroke-dashoffset="0"/>
              <circle class="gauge__fill" cx="50" cy="50" r="${R}"
                      stroke-width="7" fill="none"
                      stroke-dasharray="${C}"
                      stroke-dashoffset="${C}"
                      data-target-offset="${+(C - dash).toFixed(2)}"/>
            </svg>
            <div class="gauge__centre">
              <span class="gauge__value" data-gauge-val="0">0%</span>
            </div>
          `
        }),
        el("p", { class: "gauge__label", text: item.label })
      ]);

      // Tooltip on hover/focus
      gauge.addEventListener("mouseenter", () => { if (readout) readout.textContent = item.note; });
      gauge.addEventListener("focus",      () => { if (readout) readout.textContent = item.note; });
      gauge.addEventListener("mouseleave", () => { if (readout) readout.textContent = imp.baseline || ""; });
      gauge.addEventListener("blur",       () => { if (readout) readout.textContent = imp.baseline || ""; });

      grid.appendChild(gauge);
    });

    // Animate gauges on scroll
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      qa(".gauge__fill", grid).forEach(fill => {
        fill.style.strokeDashoffset = fill.getAttribute("data-target-offset");
      });
      qa("[data-gauge-val]", grid).forEach((span, i) => {
        span.textContent = imp.items[i].value + "%";
      });
      return;
    }

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        qa(".gauge", grid).forEach((gauge, i) => {
          const fill    = q(".gauge__fill", gauge);
          const valSpan = q("[data-gauge-val]", gauge);
          const target  = parseFloat(fill.getAttribute("data-target-offset"));
          const start   = C;
          const item    = imp.items[i];
          let t0 = null;
          const dur = 1400;
          const step = ts => {
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            fill.style.strokeDashoffset = (start + (target - start) * ease).toFixed(2);
            if (valSpan) valSpan.textContent = Math.round(item.value * ease) + "%";
            if (p < 1) requestAnimationFrame(step);
          };
          setTimeout(() => requestAnimationFrame(step), i * 150);
        });
        obs.disconnect();
      });
    }, { threshold: 0.3 });
    obs.observe(grid);
  }

  /* ── Skills ── */
  function renderSkills() {
    setText("[data-skills-kicker]",  P.skillsKicker  || "");
    setText("[data-skills-heading]", P.skillsHeading || "Capabilities");
    const wrap = q("[data-skills]");
    if (!wrap || !P.skills) return;
    P.skills.forEach(group => {
      const grp = el("div", { class: "skill-group", "data-reveal": "" }, [
        el("h3", { class: "skill-group__title", text: group.group }),
        el("ul", { class: "pills", html: (group.items || []).map(it => `<li><span class="pill">${it}</span></li>`).join("") })
      ]);
      wrap.appendChild(grp);
    });
  }

  /* ── Credentials ── */
  function renderCredentials() {
    setText("[data-edu-kicker]",  P.educationKicker  || "");
    setText("[data-edu-heading]", P.educationHeading || "Education & Certifications");

    // Education list
    const eduList = q("[data-education]");
    if (eduList && P.education) {
      P.education.forEach(e => {
        const li = el("li", { class: "edu-item" + (e.highlight ? " edu-item--highlight" : "") }, [
          e.badge ? el("span", { class: "edu-item__badge", text: e.badge }) : null,
          el("p",  { class: "edu-item__period", text: e.period }),
          el("p",  { class: "edu-item__degree", text: e.degree }),
          el("p",  { class: "edu-item__school", text: e.school }),
          e.detail ? el("p", { class: "edu-item__detail", text: e.detail }) : null
        ].filter(Boolean));
        eduList.appendChild(li);
      });
    }

    // Credential badges (Quadient certification badge images)
    const badgesWrap = q("[data-badges]");
    if (badgesWrap && P.credentialBadges && P.credentialBadges.length) {
      badgesWrap.removeAttribute("hidden");
      P.credentialBadges.forEach(b => {
        const src = (window.CERT_FILES && window.CERT_FILES[b.file]) || encodeURI(b.file);
        badgesWrap.appendChild(
          el("div", { class: "badge-item" }, [
            el("img", { src: src, alt: b.label, class: "badge-item__img", loading: "lazy" }),
            el("span", { class: "badge-item__label", text: b.label })
          ])
        );
      });
    }

    // Certifications
    const certsWrap = q("[data-certs-wrap]");
    const certsGroups = q("[data-certs]");
    if (certsGroups && P.certifications && P.certifications.length) {
      if (certsWrap) certsWrap.removeAttribute("hidden");
      P.certifications.forEach(group => {
        const list = el("ul", { class: "cert-list" },
          group.items.map(item => {
            const raw = (window.CERT_FILES && window.CERT_FILES[item.file]) || encodeURI(item.file);
            const href = raw.startsWith("data:") ? dataUriToBlobUrl(raw) : raw;
            return el("li", { class: "cert-item" }, [
              el("a", { href: href, target: "_blank", rel: "noopener noreferrer" }, [
                el("span", { class: "cert-item__name", text: item.name + (item.year ? ` — ${item.year}` : "") }),
                el("span", { class: "cert-item__link", text: "View →" })
              ])
            ]);
          })
        );
        certsGroups.appendChild(el("div", { class: "cert-group" }, [
          el("p", { class: "cert-group__title", text: group.issuer }),
          list
        ]));
      });
    }

    // Awards
    const awardsWrap = q("[data-awards-wrap]");
    const awardsList = q("[data-awards]");
    if (!P.awards || P.awards.length === 0) {
      if (awardsWrap) awardsWrap.hidden = true;
    } else if (awardsList) {
      if (awardsWrap) awardsWrap.removeAttribute("hidden");
      P.awards.forEach(a => {
        awardsList.appendChild(el("li", { class: "award" }, [
          el("strong", { text: a.title }),
          el("span",   { text: a.detail })
        ]));
      });
    }
  }

  /* ── Beyond work ── */
  function renderBeyond() {
    setText("[data-beyond-kicker]",  P.beyondKicker  || "");
    setText("[data-beyond-heading]", P.beyondHeading || "Beyond the Day Job");
    const wrap = q("[data-beyond]");
    const sec  = q("[data-beyond-section]");
    if (!P.beyond || P.beyond.length === 0) {
      if (sec) sec.hidden = true;
      return;
    }
    if (sec) sec.removeAttribute("hidden");
    if (!wrap) return;
    P.beyond.forEach(b => {
      wrap.appendChild(el("article", { class: "beyond-card", "data-reveal": "" }, [
        el("h3", { class: "beyond-card__title", text: b.title }),
        el("p",  { class: "beyond-card__text",  text: b.text  })
      ]));
    });
  }

  /* ── Contact ── */
  function renderContact() {
    const ct = P.contact || {};
    setText("[data-contact-kicker]",  ct.kicker  || "");
    setText("[data-contact-heading]", ct.heading || "Let's connect");
    setText("[data-contact-text]",    ct.text    || "");
    const b = P.basics || {};
    setHref("#contactEmail",    `mailto:${b.email}`);
    setHref("#contactLinkedin", b.linkedin || "#");
    if (!b.linkedin) { const el2 = q("#contactLinkedin"); if (el2) el2.hidden = true; }

    const avail = q("[data-availability]");
    const note  = q("[data-availability-note]");
    if (avail && ct.availability) { avail.textContent = ct.availability; avail.removeAttribute("hidden"); }
    if (note  && ct.availabilityNote) { note.textContent = ct.availabilityNote; note.removeAttribute("hidden"); }
  }

  /* ── Footer ── */
  function renderFooter() {
    setText("[data-footer-note]", (P.settings || {}).footerNote || "");
    const yr = q("[data-year]");
    if (yr) yr.textContent = new Date().getFullYear();
  }

  /* ── Bootstrap ── */
  function init() {
    applySettings();
    initTheme();
    initScrollProgress();
    initNav();
    renderHero();
    renderMetrics();
    renderAbout();
    renderCases();
    renderTimeline();
    renderImpact();
    renderSkills();
    renderCredentials();
    renderBeyond();
    renderContact();
    renderFooter();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
