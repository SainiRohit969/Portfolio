/* ============================================================================
   ROHIT SAINI — PORTFOLIO CONTENT
   Edit this file to update the portfolio.
   ============================================================================ */

window.PORTFOLIO = {

  /* --------------------------------------------------------------------------
     1. BASICS
  -------------------------------------------------------------------------- */
  basics: {
    fullName:  "Rohit Saini",
    shortName: "Rohit Saini",
    headline:  "Sr. Associate – Projects | Quadient Solution Architect & AI Automation Specialist",
    intro:     "10+ years delivering enterprise customer communication and document automation solutions. Currently leading the architecture and team delivery for a large-scale Xpression-to-Quadient migration at Cognizant — and building AI-powered tools that make the migration itself faster, smarter, and fully traceable.",
    email:     "rohit.saini2@cognizant.com",
    phone:     "",
    status:    "Sr. Associate – Projects · Cognizant",
    location:  "Noida, Uttar Pradesh, India",
    linkedin:  "https://www.linkedin.com/in/rohit-saini-574864204",
    github:    "",
    cvUrl:     "RohitSaini_ResumeCognizant_2026.docx",
    cvLabel:   "Download CV",
    photo:     "Rohit Saini.jpg",
    pageTitle: "Rohit Saini — Quadient Specialist & AI Tools Builder",
    metaDesc:  "10+ years in customer communication management and document automation. Leading Xpression-to-Quadient migration at Cognizant and building multi-agent AI tools with Claude.",
    siteUrl:   ""
  },

  /* --------------------------------------------------------------------------
     2. TARGET ROLES  (small pills in the hero)
  -------------------------------------------------------------------------- */
  targetRolesLabel: "Open to",
  targetRoles: [
    "Solution Architect",
    "AI & Automation Consultant",
    "Technical Project Manager",
    "CCM Specialist",
    "Quadient Consultant"
  ],

  /* --------------------------------------------------------------------------
     3. HEADLINE NUMBERS  (proof strip)
  -------------------------------------------------------------------------- */
  metrics: [
    { value: "10+",    suffix: "yrs", label: "Experience in CCM & document automation" },
    { value: "50",     suffix: "%",  label: "Processing time reduced for insurance client" },
    { value: "10000+",suffix: "",   label: "Document templates developed & delivered to production" },
    { value: "5",    suffix: "",    label: "Specialised AI agents built into COMPASS" }
  ],

  /* --------------------------------------------------------------------------
     3b. IMPACT GAUGES  (what COMPASS delivered)
  -------------------------------------------------------------------------- */
  impact: {
    kicker:   "Measured impact",
    heading:  "What COMPASS delivered",
    note:     "COMPASS is an AI-powered migration tool that converts xPression PDPX templates to Quadient Inspire JLD — with 5 specialised Claude AI agents handling variable mapping, style migration, workload assignment, progress analysis, and chat support.",
    baseline: "Hover or tab a dial for detail.",
    items: [
      {
        label: "Variable mapping automated",
        value: 80,
        note:  "Agent 1 auto-maps xPression variables to Quadient WFD data paths with high/medium/low/none confidence scoring — eliminating the most time-consuming manual step per template."
      },
      {
        label: "Style migration automated",
        value: 70,
        note:  "Agent 4 matches new TextStyles and ParagraphStyles to the company style catalog using typography metrics with ±5% tolerance, preventing style proliferation."
      },
      {
        label: "Migration visibility",
        value: 90,
        note:  "Real-time dashboard, full QA pipeline, and AI Progress Analyst give leadership instant project health — no manual status gathering needed."
      },
      {
        label: "Delivery throughput",
        value: 60,
        note:  "AI-assisted assignment, automated conversion checks, and progress tracking significantly increased templates completed per delivery cycle."
      }
    ]
  },

  /* --------------------------------------------------------------------------
     4. ABOUT
  -------------------------------------------------------------------------- */
  about: {
    heading: "About",
    kicker:  "Who I am",
    paragraphs: [
      "I am a senior technical professional at Cognizant with over 10 years in customer communication management (CCM) and document composition. My career spans roles from developer to solution architect, with a consistent thread: solving complex, high-stakes problems in the insurance and financial services domain.",
      "Today I lead the architecture design and team delivery for a large-scale migration of an insurance client's communications platform from xPression to Quadient Inspire. In parallel, I design and build AI-powered tools — most notably COMPASS, a two-server Flask application with 5 specialised Claude AI agents — that make the migration faster, smarter, and fully traceable.",
      "Beyond COMPASS, I've built a suite of 10 production-grade tools for the Chubb EAS migration program — conversational AI dashboards, QA analytics engines, automated deployment pipelines, API automation tools, and batch XML orchestration systems — using Python, Flask, Node.js, and SQL. I own each one across the full solution lifecycle: architecture blueprints, database design, UI, API integration, and production incident resolution in a regulated enterprise environment.",
      "My approach combines deep technical expertise with a builder's instinct. If a problem is worth solving, I'll design the system, write the code, and ship it — whether that's a regulated insurance document template or a multi-agent AI application powered by the latest LLMs."
    ],
    principles: [
      { title: "Architecture first",     text: "I design systems from first principles — thinking through data flow, separation of concerns, and integration before writing a line of code." },
      { title: "Build, don't theorise",  text: "10,000+ production templates developed and delivered, multiple POCs, and a full-stack AI application. Evidence lives in the delivered work." },
      { title: "AI as leverage",         text: "I use AI to amplify what a small team can deliver — eliminating repetitive work so the team focuses on what actually matters." }
    ]
  },

  /* --------------------------------------------------------------------------
     5. CASE STUDIES
  -------------------------------------------------------------------------- */
  caseStudiesHeading: "Selected Work",
  caseStudiesKicker:  "Evidence",
  caseStudies: [
    {
      title:   "COMPASS — AI-Powered Migration Automation",
      client:  "Internal · PRS Insurance Migration",
      org:     "Cognizant",
      period:  "2025 — Present",
      role:    "Creator & Architect — designed, built and deployed end-to-end",
      summary: "Built a two-server AI application that automates xPression-to-Quadient template conversion, using 5 specialised Claude AI agents to handle the most time-consuming migration steps.",
      context: "Migrating 50,000+ insurance document templates from xPression (PDPX format) to Quadient Inspire (JLD format) was entirely manual. Variable mapping — matching xPression variable names to Quadient WFD data paths — alone consumed most of a developer's time per template. There was no visibility into team progress, no QA pipeline, and no way for leadership to see project health without a manual status call.",
      actions: [
        "Designed a two-server Flask architecture: Dashboard (port 5000) for form tracking and AI agents, and Migrator (port 5001) as the PDPX-to-JLD conversion engine.",
        "Built Agent 1 — Variable Mapping: searches Quadient WFD paths for each unmapped xPression variable and proposes matches with confidence scoring (high / medium / low / none).",
        "Built Agent 4 — Style Migration: matches new TextStyles and ParagraphStyles to the company catalog using typography metrics with ±5% tolerance, preventing style proliferation.",
        "Built Agent 2 — Smart Assignment: analyses developer workloads and due dates, proposes balanced form assignments for admin review.",
        "Built Agent 3 — Progress Analyst: generates 4–8 structured insights across Risk, Progress, Workload and Quality — detecting overdue forms, stalled work, and workload imbalances.",
        "Built a Chat Agent (claude-opus-4-6 with 10 tools): conversational AI with multi-turn history, role-aware permissions, HTML email drafting, and SMTP send.",
        "Implemented full form lifecycle tracking, audit trail, Excel import, real-time KPI charts, and a role-based access system (Admin / Developer / QA)."
      ],
      results: [
        { value: "5",    label: "Specialised AI agents" },
        { value: "80%",  label: "Variable mapping automated" },
        { value: "100%", label: "Migration visibility — no manual status calls" }
      ],
      tags: ["Python / Flask", "Claude claude-opus-4-6", "Anthropic SDK", "AI Agent Design", "Tool Use Loops", "Bootstrap 5", "Chart.js", "REST API"]
    },
    {
      title:   "AI-Powered Automation Suite — 10 Production Tools",
      client:  "Chubb NA · EAS xPression-to-Quadient Migration Program",
      org:     "Cognizant",
      period:  "2025 — Present",
      role:    "Senior Developer & Solution Architect — designed, built and deployed each tool end-to-end",
      summary: "Beyond COMPASS, built a suite of production-grade Python and Node.js tools spanning conversational AI dashboards, QA analytics engines, automated deployment pipelines, API automation, and batch XML orchestration — covering the full lifecycle of the Chubb EAS migration program.",
      context: "The Chubb EAS migration program needed more than template conversion: defect tracking ran through manual Excel pivot tables, deployments had no controlled promotion path, post-migration form validation depended on Postman, executive reporting took hours every week, and a new enterprise 'Carry Forward' capability had no architecture at all. Each gap was closed with a purpose-built, production-grade tool.",
      actions: [
        "EAS TransForm — CCM Migration Platform: architected and built an AI-assisted Flask platform automating end-to-end conversion of hundreds of Chubb insurance templates from legacy xPression to Quadient Inspire, eliminating manual re-creation entirely.",
        "Defect Analytics & Reporting Automation: engineered an intelligent Python rule-based defect classification engine with automated Chart.js HTML reporting across four Chubb insurance product lines, replacing manual Excel pivot-table analysis.",
        "Development Status Dashboard: designed a full-stack Flask governance platform with role-based access and a built-in conversational AI chatbot enabling plain-English queries over live form development and QA pipeline data.",
        "DeployHub — Deployment Control System: architected a Flask three-stage deployment pipeline (Test → UAT → Production) with role-based access, automated backup/rollback, audit logging, and SMTP security alerting for the Quadient development team.",
        "Interactive Ticket Creator — API Automation Tool: built a Node.js/Express automation tool enabling direct XML payload submission to the Quadient Inspire REST API with Chubb-specific header injection, eliminating Postman dependency for post-migration form validation.",
        "Carry Forward DC — Enterprise Feature Architecture: led end-to-end solution architecture for a Quadient Scaler 'Carry Forward' capability covering PostgreSQL schema design (20+ stored procedures), GraalJS workflow automation, UI wireframes, and an 18-week delivery plan.",
        "Executive Reporting Automation: automated generation of executive-ready PowerPoint decks using python-pptx, reducing stakeholder presentation prep from hours to seconds for the Chubb EAS xPression-Quadient migration program.",
        "XSD Schema Generator: built an automated pipeline converting Chubb's Excel variable master lists into enterprise-grade XML Schema Definitions for Quadient Inspire, eliminating hand-authoring of data contracts for integrations.",
        "Batch XML Orchestration Engine: engineered a Python automation engine merging multiple Quadient XML payloads into single batch transactions from Excel manifests, enabling bulk multi-document insurance package generation across CMHL and MFG product lines.",
        "Production Incident Resolution & Pipeline Hardening: diagnosed and resolved critical Chubb-Quadient pipeline failures using GraalJS XML restructuring scripts, establishing a structured incident audit framework to validate migration accuracy and prevent regression."
      ],
      results: [
        { value: "10",           label: "Production-grade tools designed and shipped" },
        { value: "Hours→Secs",   label: "Executive reporting prep time" },
        { value: "0",            label: "Manual template re-creation needed" }
      ],
      tags: ["Python / Flask", "Node.js / Express", "PostgreSQL", "GraalJS", "python-pptx", "Chart.js", "REST API", "Deployment Pipelines"]
    },
    {
      title:   "Xpression → Quadient Enterprise Migration",
      client:  "PRS Insurance · Chubb",
      org:     "Cognizant",
      period:  "2025 — Present",
      role:    "Sr. Associate – Projects · Chubb NA — Architecture lead and offshore delivery manager",
      summary: "Leading architecture design and team delivery for a large-scale migration of an insurance client's customer communications platform from legacy xPression to Quadient Inspire.",
      context: "A major insurance client's customer communications ran on an ageing xPression platform — slow to change, inconsistent in branding, and increasingly difficult to maintain. The migration to Quadient Inspire needed to cover hundreds of templates across multiple lines of business, maintaining regulatory compliance and zero customer-facing disruption. The team needed clear architecture, a reliable quality pipeline, and tooling to track progress at scale.",
      actions: [
        "Led the architecture design for the PRS Insurance platform, ensuring scalability, regulatory compliance, and alignment with Chubb enterprise architecture standards.",
        "Defined the PDPX-to-JLD conversion approach, template structure (Base Templates, Style Masters, content blocks), and the quality assurance pipeline.",
        "Managed the development team — task assignment, code reviews, QA coordination, and delivery tracking.",
        "Designed and built the Dynamic Communication Dashboard and COMPASS tool in parallel, providing real-time project visibility and AI-assisted development.",
        "Conducted POCs for complex implementation challenges requested by the client, including Dynamic Communication features and advanced scripting scenarios."
      ],
      results: [
        { value: "~70%", label: "Processing time reduction via new architecture" },
        { value: "Full",  label: "Regulatory compliance and audit trail from day one" },
        { value: "Live",  label: "Real-time dashboard and AI progress tracking" }
      ],
      tags: ["Solution Architecture", "Team Leadership", "Quadient Inspire", "xPression", "QA Pipeline", "Insurance Domain", "Agile Delivery"]
    },
    {
      title:   "POC Leadership & Legacy Modernisation",
      client:  "Multiple insurance and financial services clients",
      org:     "BelWo Services",
      period:  "2016 — 2025",
      role:    "Solution Architect / Technical Team Lead — POC design and delivery",
      summary: "Led multiple POC projects delivering 40–50% processing time reductions and 15–20% cost savings, including migrating 5 years of legacy code to Inspire Scaler in 4 months.",
      context: "Across multiple roles and clients in insurance and financial services, the challenge was consistent: legacy systems running inefficient processes, clients needing proof-of-concept evidence before committing to full delivery, and teams needing upskilling on new platforms and architectures. Each POC was a high-stakes demonstration that had to deliver measurable results.",
      actions: [
        "Designed and delivered 4 POC projects introducing scalable Quadient solutions that reduced processing time by 40–50% and operational cost by 15–20%.",
        "Refactored 5 years of legacy Inspire Automation code within a 4-month timeframe, fully migrating to Inspire Scaler — implemented end-to-end.",
        "Integrated AI-driven chatbots into Dynamic Communications, enhancing user interaction and reducing query resolution time.",
        "Developed and managed team delivery of 10,000+ document composition templates across 10+ insurance lines of business for multiple Canadian insurance clients, all moved to production.",
        "Streamlined code review processes, reducing defect rate by 15%, and mentored multiple developer cohorts.",
        "Provided technical support for 8 Conduent (formerly Xerox) projects at 100% on-time resolution rate."
      ],
      results: [
        { value: "40–50%",   label: "Processing time reduction per POC" },
        { value: "15–20%",   label: "Operational cost savings" },
        { value: "10,000+",  label: "Templates developed & delivered to production" }
      ],
      tags: ["Quadient Inspire", "POC Design", "Solution Architecture", "Code Review", "Team Mentoring", "Dynamic Communication", "Insurance Templates"]
    }
  ],

  /* --------------------------------------------------------------------------
     6. CAREER TIMELINE
  -------------------------------------------------------------------------- */
  experienceHeading: "Experience",
  experienceKicker:  "Career",
  experience: [
    {
      role:    "Sr. Associate – Projects · Chubb NA",
      company: "Cognizant Technology Solutions",
      meta:    "Chubb North America Client · Multiple Chubb NA Projects · Noida, India",
      period:  "June 2025 — Present",
      points: [
        "Leading architecture design and all offshore teams working across multiple Chubb NA projects — including the Xpression-to-Quadient migration and Dynamic Communication work — and overseeing all other new projects from a delivery standpoint on the offshore side, as Chubb NA Account Champ.",
        "Managing development team on large-scale Xpression-to-Quadient migration across multiple Chubb NA projects.",
        "Designed and built COMPASS — a 5-agent AI tool automating template migration using Claude claude-opus-4-6.",
        "Built Dynamic Communication Dashboard for real-time project tracking and AI-powered status reporting.",
        "Built a further suite of 10 production-grade tools for the Chubb EAS migration program — including EAS TransForm, Defect Analytics & Reporting Automation, DeployHub deployment control system, an Interactive Ticket Creator API automation tool, and a Batch XML Orchestration Engine — using Python, Flask, Node.js, and SQL.",
        "Conducting complex implementation POCs and client-requested feature prototypes.",
        "Completed Claude Certified Architect and Microsoft Azure AI Fundamentals certifications."
      ]
    },
    {
      role:    "Solution Architect Level 1",
      company: "BelWo Services (India) Pvt. Ltd.",
      meta:    "Multiple enterprise clients · India",
      period:  "May 2025 — June 2025",
      points: [
        "End-to-end solution architecture for enterprise Quadient applications, aligned with business and IT strategy.",
        "Developed architectural blueprints, technical documentation, and integration patterns.",
        "Led POC design and effort estimations for new client engagements."
      ]
    },
    {
      role:    "Technical Team Lead",
      company: "BelWo Services (India) Pvt. Ltd.",
      meta:    "Multiple enterprise clients · India",
      period:  "Sept 2024 — May 2025",
      points: [
        "Streamlined code review processes, reducing defect rate by 15%.",
        "Spearheaded 4 POC projects delivering 40–50% processing time reduction and 15–20% cost savings.",
        "Implemented DNOW projects including DC and DAS (Inspire Messenger).",
        "Initiated mentorship programmes, boosting team productivity."
      ]
    },
    {
      role:    "Sr. Composition Developer",
      company: "BelWo Services (India) Pvt. Ltd.",
      meta:    "Multiple clients including Canadian insurance · India",
      period:  "May 2022 — Sept 2024",
      points: [
        "Led team on multiple Quadient projects, improving customer engagement by 30–40%.",
        "Integrated AI-driven chatbots into Dynamic Communications.",
        "Refactored 5 years of legacy code within 4 months, migrating from Inspire Automation to Inspire Scaler."
      ]
    },
    {
      role:    "Composition Developer → Developer",
      company: "BelWo Services (India) Pvt. Ltd.",
      meta:    "Multiple clients · India",
      period:  "2016 — May 2022",
      points: [
        "Developed and maintained 500+ document templates across 10+ insurance lines of business, all delivered to production.",
        "Provided technical support for 8 Conduent/Xerox projects at 100% on-time resolution.",
        "Implemented automation scripts reducing production processing time."
      ]
    }
  ],

  /* --------------------------------------------------------------------------
     7. SKILLS
  -------------------------------------------------------------------------- */
  skillsHeading: "Capabilities",
  skillsKicker:  "What I bring",
  skills: [
    { group: "AI & Automation",         items: ["Claude AI / Anthropic SDK", "AI Agent Design", "Tool Use Loops", "Prompt Engineering", "Multi-Agent Systems", "Workflow Automation", "REST API Integration"] },
    { group: "Full-Stack Development",  items: ["Python / Flask", "Node.js / Express", "PostgreSQL", "MySQL", "GraalJS", "python-pptx", "Chart.js", "XML / XSD", "REST APIs", "HTML / CSS"] },
    { group: "Quadient Technologies",   items: ["Inspire Designer (Basic → Advanced)", "Inspire Interactive (Basic → Advanced)", "Inspire Scaler (Basic → Advanced)", "Inspire Automation", "Inspire Dynamic Communication", "Digital Advantage Suite", "Inspire Content Manager"] },
    { group: "Architecture & Delivery", items: ["Solution Architecture", "Technical Project Management", "Agile Project Management", "POC Design & Delivery", "QA Pipeline Design", "Code Review", "Release Management", "Deployment Pipeline Design"] },
    { group: "Business & Analysis",     items: ["Requirements Analysis", "Process Optimisation", "Stakeholder Management", "Cross-functional Collaboration", "Cost Reduction Analysis", "Team Mentoring"] }
  ],

  /* --------------------------------------------------------------------------
     8. EDUCATION & CERTIFICATIONS
  -------------------------------------------------------------------------- */
  educationHeading: "Education & Certifications",
  educationKicker:  "Credentials",
  education: [
    {
      highlight: false,
      badge:  "",
      period: "Graduated",
      degree: "B.Tech — Electronics & Communication Engineering",
      school: "Punjab Technical University · India",
      detail: ""
    },
    {
      highlight: false,
      badge:  "",
      period: "Schooling",
      degree: "Central Board of Secondary Education (CBSE)",
      school: "Army Public School, Agra Cantt · India",
      detail: ""
    }
  ],

  credentialBadges: [
    { label: "Inspire Designer — Advanced",    file: "QuadientCertificates/DesignerAdvanced.png" },
    { label: "Inspire Designer — Basic",        file: "QuadientCertificates/DesignerBasic.png" },
    { label: "Inspire Designer — Scripting",    file: "QuadientCertificates/DesignerScripting.png" },
    { label: "Inspire Content Manager",         file: "QuadientCertificates/DynamicCommunication.png" },
    { label: "Dynamic Communication",           file: "QuadientCertificates/ICM.png" },
    { label: "Inspire Interactive — Advanced",  file: "QuadientCertificates/InteractiveAdvanced.png" },
    { label: "Inspire Interactive — Basic",     file: "QuadientCertificates/InteractiveBasic.png" },
    { label: "Inspire Scaler — Advanced",       file: "QuadientCertificates/SCalerAdvanced.png" },
    { label: "Inspire Scaler — Basic",          file: "QuadientCertificates/ScalerBasic.png" },
    { label: "Quadient Inspire R17 — First Mover", file: "QuadientCertificates/QuadientR17FirstMover.png" },
    { label: "Microsoft Certified: Azure AI Fundamentals", file: "AzureAI-Fundamental_Badge.png" },
    { label: "Claude Certified Architect",          file: "Claude Certificates/Claudebadge.png" }
  ],

  certifications: [
    {
      issuer: "Anthropic",
      items: [
        { name: "Claude Certified Architect", year: "2026", file: "Claude Certificates/Claude Architechcertificate-Foundation.pdf" },
        { name: "Claude Early Adopter",        year: "",     file: "Claude Certificates/Claude certificate-Early Adopter.pdf" }
      ]
    },
    {
      issuer: "Microsoft",
      items: [
        { name: "Azure AI Fundamentals", year: "2026", file: "Microsoft Certified- Azure AI Fundamentals.png" }
      ]
    },
    {
      issuer: "Quadient",
      items: [
        { name: "Inspire Designer — Advanced",     year: "", file: "QuadientCertificates/Inspire Designer Advanced_2EBCED424E4CA94282B755A6FAFEB125.pdf" },
        { name: "Inspire Designer — Basic",        year: "", file: "QuadientCertificates/Inspire Designer Basic_47D7E91107A09047A49AECA8871D941A.pdf" },
        { name: "Inspire Designer — Scripting",    year: "", file: "QuadientCertificates/Inspire Designer Scripting_9F422F41C59AF540B8CCFED5CEFC9999.pdf" },
        { name: "Inspire Interactive — Advanced",  year: "", file: "QuadientCertificates/Inspire Interactive Advanced_69458FA73500D047B90413EA0762BC87.pdf" },
        { name: "Inspire Interactive — Basic",     year: "", file: "QuadientCertificates/Inspire Interactive Basic_6BC4E5D7E1E31B4AA432C58DA434F1F1.pdf" },
        { name: "Inspire Scaler — Advanced",       year: "", file: "QuadientCertificates/Inspire Scaler Advanced_A9E5C8B914F0BF4F98D83F019673821E.pdf" },
        { name: "Inspire Scaler — Basic",          year: "", file: "QuadientCertificates/Inspire Scaler Basic_DD1896D59C4D1242A60A67BBF3E64B29.pdf" },
        { name: "Dynamic Communication — Basic",   year: "", file: "QuadientCertificates/Dynamic Communications Basic_3B7A335D30D71E46BD7F44A86185CB1F.pdf" },
        { name: "Inspire Content Manager — Basic", year: "", file: "QuadientCertificates/Inspire Content Manager Basic_9BD7865FC9423D4997A552965E5981D8.pdf" },
        { name: "Quadient Inspire R17 — First Mover", year: "", file: "QuadientCertificates/QuadientR17FirstMover.png" }
      ]
    }
  ],

  awards: [],

  /* --------------------------------------------------------------------------
     9. BEYOND WORK
  -------------------------------------------------------------------------- */
  beyondHeading: "Beyond the Day Job",
  beyondKicker:  "Outside work",
  beyond: [
    {
      title: "Building AI Tools",
      text:  "Exploring what's possible with large language models by building practical tools that solve real problems — not demos. COMPASS is the most complete example: a production-grade multi-agent AI application built outside of project hours."
    },
    {
      title: "System Architecture",
      text:  "Enjoys designing systems from first principles — thinking through data flow, separation of concerns, and how components fit together before a line of code is written."
    },
    {
      title: "Continuous Learning",
      text:  "Recently completed Claude Certified Architect and Microsoft Azure AI Fundamentals. Always pursuing the next frontier in AI, cloud, and enterprise technology."
    }
  ],

  /* --------------------------------------------------------------------------
     10. CONTACT
  -------------------------------------------------------------------------- */
  contact: {
    heading:          "Let's connect",
    kicker:           "Contact",
    text:             "Open to conversations about AI automation, Quadient CCM solutions, technical project management, and enterprise technology delivery. I pick up new technologies and domains quickly — I welcome roles and projects that stretch into unfamiliar ground.",
    availability:     "Sr. Associate – Projects · Cognizant · Noida, India",
    availabilityNote: "Open to opportunities in AI automation, CCM consulting, and solution architecture."
  },

  /* --------------------------------------------------------------------------
     11. LOOK & FEEL
  -------------------------------------------------------------------------- */
  settings: {
    accent:             "#1e40af",
    defaultTheme:       "system",
    showScrollProgress: true,
    footerNote:         "Built by Rohit Saini."
  }
};
