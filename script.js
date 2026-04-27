const roles = [
  {
    id: "care-manager",
    title: "Care Manager / Group Facilitator",
    org: "The Center for Health Care Services, TCOOMMI Genesis Program",
    location: "San Antonio, TX",
    dates: "Nov 2024 - Mar 2026",
    setting: "Community forensic behavioral health",
    summary:
      "Managed care for justice-involved adults with mental health needs while connecting clinical planning to housing, employment, and medical supports.",
    bullets: [
      "Delivered case management and care coordination for adults navigating mental health challenges within justice-involved systems.",
      "Conducted screenings and clinical assessments to inform individualized treatment planning.",
      "Developed trauma-informed treatment plans designed to promote long-term stability and engagement.",
      "Facilitated psychoeducational groups focused on coping skills, participation, and recovery support.",
      "Collaborated with community supervision officers and multidisciplinary teams while maintaining compliant documentation."
    ],
    tags: ["Case Management", "Treatment Planning", "Group Facilitation", "Community Resources"]
  },
  {
    id: "rehab-tech",
    title: "Rehabilitation Technician",
    org: "Kerrville State Hospital, Rehabilitation Department",
    location: "Kerrville, TX",
    dates: "May 2022 - Jun 2024",
    setting: "Inpatient serious mental illness services",
    summary:
      "Supported rehabilitative therapy services in a structured inpatient setting serving individuals with serious mental illness.",
    bullets: [
      "Delivered rehabilitative therapy services within a high-responsibility inpatient environment.",
      "Assisted in the development and facilitation of structured treatment programming.",
      "Provided support and guidance for newly hired staff entering the department.",
      "Exercised sound judgment while participating in emergency and disaster response efforts."
    ],
    tags: ["Rehabilitation", "Inpatient Care", "Staff Support", "Crisis Response"]
  },
  {
    id: "research-assistant",
    title: "Research Assistant",
    org: "The University of Texas at San Antonio, Psychology Department",
    location: "San Antonio, TX",
    dates: "Aug 2021 - Dec 2021",
    setting: "Academic psychology research",
    summary:
      "Contributed to psychology research examining personality traits and academic performance through collaborative inquiry and analysis.",
    bullets: [
      "Analyzed personality traits in relation to academic performance.",
      "Supported research methodology development and data analysis processes.",
      "Contributed to academic research discussions and writing activities."
    ],
    tags: ["Research Methods", "Data Analysis", "Academic Writing"]
  },
  {
    id: "work-study",
    title: "Work Study Intern",
    org: "El Paso Community College, Psychology Department",
    location: "El Paso, TX",
    dates: "Aug 2018 - Jan 2019",
    setting: "Academic program support",
    summary:
      "Provided reliable departmental support through records management, educational materials, and day-to-day communication.",
    bullets: [
      "Managed academic records for 80 students with accuracy and confidentiality.",
      "Developed lecture materials and presentations for psychology courses.",
      "Provided administrative and communication support to departmental operations."
    ],
    tags: ["Record Management", "Presentation Design", "Student Support"]
  },
  {
    id: "drug-court",
    title: "Family Drug Court Intern",
    org: "El Paso County Court House, 65th Judicial District",
    location: "El Paso, TX",
    dates: "Jun 2018 - Aug 2018",
    setting: "Court-based recovery support",
    summary:
      "Observed and supported a recovery-oriented court setting where documentation, confidentiality, and interdisciplinary communication were essential.",
    bullets: [
      "Maintained confidential client records in compliance with legal standards.",
      "Observed court proceedings and recovery-focused group sessions.",
      "Documented client progress and interdisciplinary recommendations.",
      "Managed program communication and client inquiries."
    ],
    tags: ["Court Systems", "Confidential Records", "Recovery Support", "Client Communication"]
  }
];

const skills = [
  {
    label: "Mental Health Screening & Assessment",
    category: "Clinical Care",
    copy: "Comfortable gathering the information needed to understand presentation, risk, and support needs."
  },
  {
    label: "Treatment Planning",
    category: "Clinical Care",
    copy: "Builds individualized, trauma-informed plans designed to support stability and long-term progress."
  },
  {
    label: "Co-Occurring Disorders (COPSD)",
    category: "Clinical Care",
    copy: "Works from a whole-person view that considers overlapping mental health and substance use needs."
  },
  {
    label: "Case Management & Care Coordination",
    category: "Coordination",
    copy: "Connects clinical planning with community resources, logistics, and interdisciplinary follow-through."
  },
  {
    label: "Substance Use Recovery Planning",
    category: "Coordination",
    copy: "Supports recovery-oriented pathways that balance accountability, coping, and access to care."
  },
  {
    label: "Discharge Planning",
    category: "Coordination",
    copy: "Helps translate treatment progress into practical next steps for continuity and safety."
  },
  {
    label: "Psychoeducational Group Facilitation",
    category: "Communication",
    copy: "Facilitates structured group experiences that promote engagement, coping skills, and reflection."
  },
  {
    label: "Motivational Interviewing",
    category: "Communication",
    copy: "Uses collaborative, nonjudgmental communication to support change readiness and client voice."
  },
  {
    label: "Patient Engagement & Communication",
    category: "Communication",
    copy: "Builds trust while maintaining clarity, professionalism, and strong boundaries."
  },
  {
    label: "Clinical Documentation & EHR Management",
    category: "Documentation",
    copy: "Maintains accurate records aligned with regulatory expectations and continuity-of-care needs."
  },
  {
    label: "HIPAA Compliance",
    category: "Documentation",
    copy: "Handles sensitive information with confidentiality, consistency, and respect for legal standards."
  },
  {
    label: "Interdisciplinary Collaboration",
    category: "Documentation",
    copy: "Documents and communicates effectively across teams so care plans stay actionable and aligned."
  }
];

const education = [
  {
    title: "Mental Health and Wellness Counseling (LPC-Track)",
    meta: "Master of Arts · Angelo State University · Jan 2026 - Present",
    body:
      "Currently pursuing advanced counseling training that builds on existing behavioral health experience and strengthens readiness for clinical practice."
  },
  {
    title: "Applied Psychology",
    meta: "Master of Science · Angelo State University · Jan 2024 - Aug 2025",
    body:
      "Graduate coursework and study focused on psychology at an advanced level, reinforcing research literacy and applied behavioral understanding."
  },
  {
    title: "Psychology",
    meta: "Bachelor of Arts · The University of Texas at San Antonio · Jan 2020 - Dec 2021",
    body:
      "Undergraduate foundation in psychology with exposure to research, analysis, and behavioral science perspectives."
  }
];

const certifications = [
  {
    title: "Qualified Mental Health Professional (QMHP)",
    meta: "Texas · Current"
  },
  {
    title: "Licensed Chemical Dependency Counselor - Intern (LCDC-I)",
    meta: "Texas · Oct 2025 - Oct 2030"
  },
  {
    title: "Community Health Worker (CHW)",
    meta: "Texas · Nov 2024 - Nov 2026"
  },
  {
    title: "CPR / AED Certification",
    meta: "United States · May 2024 - May 2026"
  }
];

const filters = ["All", ...new Set(skills.map((skill) => skill.category))];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const roleList = document.querySelector("[data-role-list]");
const roleSetting = document.querySelector("[data-role-setting]");
const roleDates = document.querySelector("[data-role-dates]");
const roleTitle = document.querySelector("[data-role-title]");
const roleOrg = document.querySelector("[data-role-org]");
const roleSummary = document.querySelector("[data-role-summary]");
const roleBullets = document.querySelector("[data-role-bullets]");
const roleTags = document.querySelector("[data-role-tags]");
const skillFilters = document.querySelector("[data-skill-filters]");
const skillsGrid = document.querySelector("[data-skills-grid]");
const educationAccordion = document.querySelector("[data-education-accordion]");
const certificationsGrid = document.querySelector("[data-certifications-grid]");
const progressBar = document.querySelector("[data-progress-bar]");
const counters = [...document.querySelectorAll("[data-counter]")];
const navLinks = [...document.querySelectorAll("[data-nav-link]")];
const sections = [...document.querySelectorAll("main section[id]")];

function renderRoles() {
  roleList.innerHTML = "";

  roles.forEach((role, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "role-card";
    button.dataset.roleId = role.id;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.innerHTML = `
      <div class="role-card__meta">
        <span class="role-card__setting">${role.setting}</span>
        <span class="role-card__dates">${role.dates}</span>
      </div>
      <p class="role-card__title">${role.title}</p>
      <p class="role-card__org">${role.org}</p>
    `;
    button.addEventListener("click", () => setActiveRole(role.id));
    roleList.appendChild(button);
  });

  setActiveRole(roles[0].id);
}

function setActiveRole(roleId) {
  const selected = roles.find((role) => role.id === roleId);
  if (!selected) {
    return;
  }

  roleSetting.textContent = selected.setting;
  roleDates.textContent = selected.dates;
  roleTitle.textContent = selected.title;
  roleOrg.textContent = `${selected.org} · ${selected.location}`;
  roleSummary.textContent = selected.summary;
  roleBullets.innerHTML = selected.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
  roleTags.innerHTML = selected.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

  [...roleList.querySelectorAll(".role-card")].forEach((card) => {
    const isActive = card.dataset.roleId === roleId;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });
}

function renderSkillFilters() {
  skillFilters.innerHTML = "";

  filters.forEach((filter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip";
    button.textContent = filter;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    if (index === 0) {
      button.classList.add("is-active");
    }
    button.addEventListener("click", () => setSkillFilter(filter));
    skillFilters.appendChild(button);
  });
}

function renderSkills(activeFilter = "All") {
  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  skillsGrid.innerHTML = filteredSkills
    .map(
      (skill) => `
        <article class="skill-card reveal is-visible">
          <span class="skill-card__category">${skill.category}</span>
          <div class="skill-card__label">${skill.label}</div>
          <p class="skill-card__copy">${skill.copy}</p>
        </article>
      `
    )
    .join("");
}

function setSkillFilter(filter) {
  [...skillFilters.querySelectorAll(".filter-chip")].forEach((chip) => {
    const isActive = chip.textContent === filter;
    chip.classList.toggle("is-active", isActive);
    chip.setAttribute("aria-pressed", String(isActive));
  });

  renderSkills(filter);
}

function renderEducation() {
  educationAccordion.innerHTML = education
    .map(
      (item, index) => `
        <article class="accordion-item reveal ${index === 0 ? "is-visible" : ""}">
          <button class="accordion-trigger" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <div>
              <span>${item.title}</span>
              <small>${item.meta}</small>
            </div>
            <span class="accordion-icon">+</span>
          </button>
          <div class="accordion-panel" style="max-height:0;">
            <div class="accordion-panel__inner">${item.body}</div>
          </div>
        </article>
      `
    )
    .join("");

  [...educationAccordion.querySelectorAll(".accordion-trigger")].forEach((trigger) => {
    trigger.addEventListener("click", () => toggleAccordion(trigger));
  });

  const firstTrigger = educationAccordion.querySelector(".accordion-trigger");
  if (firstTrigger) {
    const firstPanel = firstTrigger.nextElementSibling;
    firstPanel.style.maxHeight = `${firstPanel.scrollHeight}px`;
  }
}

function toggleAccordion(trigger) {
  const panel = trigger.nextElementSibling;
  const isOpen = trigger.getAttribute("aria-expanded") === "true";

  [...educationAccordion.querySelectorAll(".accordion-trigger")].forEach((itemTrigger) => {
    itemTrigger.setAttribute("aria-expanded", "false");
    const itemPanel = itemTrigger.nextElementSibling;
    itemPanel.style.maxHeight = "0";
  });

  if (!isOpen) {
    trigger.setAttribute("aria-expanded", "true");
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  }
}

function renderCertifications() {
  certificationsGrid.innerHTML = certifications
    .map(
      (cert) => `
        <article class="cert-card reveal is-visible">
          <div class="cert-card__title">${cert.title}</div>
          <p class="cert-card__meta">${cert.meta}</p>
        </article>
      `
    )
    .join("");
}

function setupReveal() {
  if (reducedMotion) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function animateCounters() {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const counter = entry.target;
        const targetValue = Number(counter.dataset.counter);
        const duration = reducedMotion ? 0 : 1000;
        const startTime = performance.now();

        function updateCounter(now) {
          const elapsed = now - startTime;
          const progress = duration === 0 ? 1 : Math.min(elapsed / duration, 1);
          counter.textContent = String(Math.round(progress * targetValue));

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = String(targetValue);
          }
        }

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(counter);
      });
    },
    {
      threshold: 0.5
    }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

function setupSpotlight() {
  if (reducedMotion) {
    return;
  }

  window.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--spotlight-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--spotlight-y", `${event.clientY}px`);
  });
}

function setupSectionSpy() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const matches = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", matches);
        });
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));
}

renderRoles();
renderSkillFilters();
renderSkills();
renderEducation();
renderCertifications();
setupReveal();
animateCounters();
setupSpotlight();
setupSectionSpy();
updateScrollProgress();

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
