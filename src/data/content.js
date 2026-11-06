/**
 * PORTFOLIO CONTENT & CONFIGURATION
 * Edit this single file to update all text, links, projects, and personal details.
 * Placeholders are marked with [TODO] or [BRACKETS].
 */

export const content = {
  // Owner Details
  owner: {
    fullName: "[SUBHASH KUMAR]",
    firstName: "[SUBHASH]",
    initial: "S", // Used for monogram fallback and favicon
    course: "B.Tech [COMPUTER SCIENCE AND ENGINEERING], 1st year, [LPU], [CITY]",
    branch: "[COMPUTER SCIENCE AND ENGINEERING]",
    year: "1st year",
    college: "[LPU]",
    city: "[CITY]",
    courseMeta: "B.Tech [COMPUTER SCIENCE AND ENGINEERING] · [LPU] · [CITY]",
    statusDotText: "Open to internships and collaborations",

    // One-line intro (max 48ch recommended in hero)
    oneLineIntro: "First-year CSE student who builds small things to understand big ones.",

    // Contact & Links
    email: "student@example.com", // [TODO: Replace with your actual email]
    github: "https://github.com/[USERNAME]",
    linkedin: "https://linkedin.com/in/[USERNAME]",
    resumePdf: "./resume.pdf",

    // Optional photo url. If null/empty, Hero renders the elegant 160px monogram frame
    photoUrl: null,
  },

  // Hero Section
  hero: {
    badge: "Open to internships and collaborations",
    titleLine1: "[FULL NAME]",
    tagline: {
      prefix: "First-year student building deliberate things to understand ",
      italicWord: "complex",
      suffix: " systems.",
    },
    ctaPrimary: "View my work",
    ctaSecondary: "Download resume",
  },

  // About Section (Asymmetric: 3 cols label, 8 cols content)
  about: {
    sectionNum: "01",
    sectionTitle: "ABOUT",
    paragraphs: [
      "I chose engineering out of a curiosity for how computers function underneath layered abstractions. Rather than treating software as magic or assembling opaque templates, I enjoy building small utilities from first principles—writing foundational tools in C, learning memory layout, and understanding how bits move.",
      "Right now, I am exploring low-level programming, data structures, and web protocols. I spend my time outside lecture halls reading documentation, keeping a clean physical notebook of technical diagrams, and committing code to version control daily."
    ],
    quickFacts: [
      { label: "Location", value: "[CITY], India" },
      { label: "Studying", value: "B.Tech [BRANCH] (1st Year)" },
      { label: "Interested in", value: "Systems, Web Architecture, Algorithms" }
    ]
  },

  // Skills Section (Grouped text lists in 3 columns: Languages, Web, Tools)
  skills: {
    sectionNum: "02",
    sectionTitle: "SKILLS",
    categories: [
      {
        title: "Languages",
        items: ["C", "Python", "JavaScript (ES6+)", "HTML5 & CSS3"]
      },
      {
        title: "Web",
        items: ["React.js", "Tailwind CSS", "Node.js (Basics)", "RESTful APIs"]
      },
      {
        title: "Tools",
        items: ["Git & GitHub", "Linux / Bash", "VS Code", "Vim (Basics)"]
      }
    ],
    currentlyLearning: [
      "Data Structures & Algorithms (C)",
      "Dynamic Memory & Pointers",
      "Computer Networks (HTTP/TCP)",
      "TypeScript Fundamentals"
    ]
  },

  // Projects Section (Selected work: full-width numbered list)
  projects: {
    sectionNum: "03",
    sectionTitle: "SELECTED WORK",
    heading: "Selected work",
    items: [
      {
        number: "01",
        title: "CLI Expense Ledger",
        description: "A terminal tool for tracking personal student expenses with structured binary file persistence and category summaries.",
        tech: ["C", "File I/O", "Make", "Valgrind"],
        github: "https://github.com/[USERNAME]/cli-expense-ledger",
        live: null,
        learned: "Mastered struct serialization to disk, defensive file pointer operations, and zero-memory-leak hygiene using Valgrind.",
        previewImg: "./images/project-1.svg"
      },
      {
        number: "02",
        title: "Campus Mess Menu Notifier",
        description: "A lightweight client-side viewer that parses weekly campus dining schedules and computes the upcoming meal in real-time.",
        tech: ["JavaScript", "HTML5", "Tailwind CSS", "LocalStorage"],
        github: "https://github.com/[USERNAME]/campus-menu-viewer",
        live: "https://example.com/demo",
        learned: "Handled timezone/date edge cases across device clocks and built an accessible table view without third-party UI libraries.",
        previewImg: "./images/project-2.svg"
      },
      {
        number: "03",
        title: "Sorting Algorithm Visualizer",
        description: "An interactive canvas experiment stepping through Bubble, Insertion, and Quick Sort algorithms at variable playback speeds.",
        tech: ["React", "HTML5 Canvas", "Algorithms"],
        github: "https://github.com/[USERNAME]/sorting-visualizer",
        live: "https://example.com/sorting",
        learned: "Explored non-blocking animation loops with requestAnimationFrame and state reconciliation during high-frequency array swaps.",
        previewImg: "./images/project-3.svg"
      }
    ]
  },

  // Journey Section (Timeline: vertical 1px line, 10px square markers)
  journey: {
    sectionNum: "04",
    sectionTitle: "JOURNEY",
    heading: "Chronicle",
    items: [
      {
        date: "2024 / 05",
        title: "High School Graduation",
        description: "Completed secondary education focusing on Mathematics and Physics with high academic distinction."
      },
      {
        date: "2024 / 06",
        title: "Qualified Engineering Entrance",
        description: "Secured competitive entrance rank to gain admission to the B.Tech [BRANCH] programme."
      },
      {
        date: "2024 / 08",
        title: "Joined B.Tech at [COLLEGE NAME]",
        description: "Commenced undergraduate studies. Began rigorous coursework in problem solving, C programming, and discrete math."
      },
      {
        date: "2024 / 10",
        title: "First Open Source & Terminal Utilities",
        description: "Shipped first terminal tools and configured a minimalist Linux development environment for daily practice."
      }
    ]
  },

  // Contact Section
  contact: {
    sectionNum: "05",
    sectionTitle: "CONTACT",
    heading: "Let's build something.",
    subtitle: "Have an internship opportunity, an open-source collaboration, or just want to discuss engineering fundamentals? Drop a message.",
    email: "student@example.com", // [TODO: Replace with your actual email]
    formAction: "https://formspree.io/f/TODO_ADD_YOUR_KEY", // [TODO: Set Formspree endpoint or keep for testing]
    socials: [
      { label: "GitHub ↗", href: "https://github.com/[USERNAME]" },
      { label: "LinkedIn ↗", href: "https://linkedin.com/in/[USERNAME]" },
      { label: "Resume ↗", href: "./resume.pdf" }
    ]
  },

  // Footer Section
  footer: {
    copyrightYear: "2026",
    tagline: "Designed and built by me",
    backToTop: "Back to top ↑"
  }
};

