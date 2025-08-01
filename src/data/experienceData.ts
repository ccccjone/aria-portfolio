export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  image: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "we-independent",
    company: "We Independent",
    position: "Full Stack Engineer",
    duration: "Jan 2025 - Present",
    image: "/aria-experience-wi.png",
    description: "Contributed to the design and development of a non-profit organization's platform, delivering full-stack features with a focus on frontend scalability and secure integration.",
    responsibilities: [
      "Built responsive pages including homepage, donate, about, header, and footer using React and Tailwind CSS",
      "Translated Figma mockups into modular, production-ready UI with full accessibility and mobile support",
      "Implemented authentication with email/password and Google OAuth, using JWT-based session management",
      "Developed a dynamic blog search bar with autocomplete, tag filtering, and search history",
      "Created user profile features with CRUD operations for managing saved articles and collections",
      "Integrated PayPal donation functionality using PayPal JS SDK with full transaction flow and error handling",
      "Tested RESTful APIs via Postman and validated backend responses through SQL queries",
      "Collaborated in Agile sprints, conducted code reviews on GitHub/GitLab, and supported internal deployments"
    ],
    technologies: ["React", "Node.js", "JavaScript", "Tailwind CSS", "Java", "MySQL", "Postman", "PayPal SDK"],
    achievements: [
        "Successfully implemented responsive UI for all major pages, enhancing cross-device experience",
        "Independently resolved edge-case layout issues, reducing design-related bug reports by 40%",
        "Accelerated development by creating reusable UI patterns and layout components"
    ]
  },
  {
    id: "shengyang",
    company: "Sacred Sun Power Sources",
    position: "Investment & Business Manager",
    duration: "2021.06 - 2022.05",
    image: "/aria-experience-sy.png",
    description: "Supported investment operations across multiple portfolio companies, conducting analysis, reporting, and post-investment performance tracking.",
    responsibilities: [
        "Assisted in evaluating investment opportunities for 6 target companies by conducting financial analysis and industry research",
        "Prepared investment proposals and internal reports for cross-functional decision-making",
        "Monitored portfolio performance including production, inventory, sales, and cash flow",
        "Collaborated with operation teams to support capital recovery and risk control"
    ],
    technologies: ["Excel VBA", "Investment Analysis", "Wind"],
    achievements: [
        "Contributed to the successful assessment of 3+ projects that passed internal investment review",
        "Improved reporting clarity and efficiency by streamlining financial model templates",
        "Supported cross-department collaboration between finance, production, and sales teams"
    ]
  },
    {
    id: "tp-link-sw",
    company: "TP-Link",
    position: "Software Systems Analyst",
    duration: "2021.01 - 2021.05",
    image: "/aria-experience-tp.png",
    description: "Worked on ERP/OA system optimization for procurement workflows, with emphasis on automation design, API behavior planning, and backend testing across multiple departments.",
    responsibilities: [
        "Led technical requirements analysis for ERP/OA systems, translating business needs into API specifications and data flow designs",
        "Defined product requirements (PRDs) and user stories for procurement workflows such as inventory alerts and approval chains",
        "Coordinated with backend and IT teams to implement 5+ major module upgrades, including financial system integration",
        "Designed and executed automated API and feature test cases; managed UAT and production rollout"
    ],
    technologies: ["OA System", "ERP", "Agile Development", "Cross-Functional Project Management", "Test Automation", "Requirements Analysis"],
    achievements: [
        "Reduced manual operations by 30% through automation of approval and purchasing workflows",
        "Improved system response times by 30% via backend optimization and UAT validation",
        "Resolved 10+ system-level bugs through automated test design, cutting verification time by 50%",
        "Enhanced data synchronization across IT, finance, and supply chain by 40% through better integration planning"
    ]
  },
      {
    id: "tp-link-hr",
    company: "TP-Link",
    position: "Senior HR & Administrative Specialist (VP Assistant)",
    duration: "2018.07 - 2021.05",
    image: "/aria-experience-tp.png",
    description: "Supported executive operations across recruitment, organizational development, subsidiary setup, and R&D procurement in a global electronics company.",
    responsibilities: [
        "Planned and coordinated large-scale campus recruitment programs, including target planning, material design, process setup, and university liaison",
        "Led and participated in organizational development (OD) and training (TD) initiatives across multiple departments",
        "Contributed to the establishment of domestic and international subsidiaries, including market/policy research and documentation of HR systems",
        "Procured advanced R&D and production equipment, including PCB and optical lab instruments, by working closely with engineering teams"
    ],
    technologies: ["Microsoft Office", "Project Management", "HR Management", "R&D Procurement"],
    achievements: [
        "Twice awarded Excellent Staff of TP-Link (Apr 2019, Apr 2020)",
        "Spearheaded recruitment campaigns that enhanced early-career talent pipelines across target universities",
        "Helped establish multiple global sites, supporting legal, HR, and operational system setup"
    ]
  },
    {
    id: "zhongtai",
    company: "Zhongtai Securities",
    position: "Financial Software Development Intern",
    duration: "2017.10 - 2018.02",
    image: "/aria-experience-zt.png",
    description: "Built a high-efficiency stress testing automation tool to replace manual workflows for the finance and risk analysis team.",
    responsibilities: [
        "Developed a Python-based automation tool to replace Excel workflows for stress testing, integrating data processing (Pandas), risk modeling (NumPy), and reporting (OpenPyXL/ReportLab)",
        "Designed modularized scripts with separate data, compute, and report layers, supported by inline documentation for ease of collaboration",
        "Implemented data validation pipelines to ensure accuracy in high-volume financial datasets"
    ],
    technologies: ["Python", "Pandas", "NumPy", "OpenPyXL", "Financial Analysis", "Data Validation"],
    achievements: [
        "Improved data processing efficiency by 5x, handling 500+ portfolios per day",
        "Reduced processing time from 8 hours to 30 minutes through vectorized operations and automation",
        "Decreased manual error rates by 90% through end-to-end workflow automation"
    ]
  }
];