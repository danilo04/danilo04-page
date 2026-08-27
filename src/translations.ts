export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      blog: "Blog",
      talks: "Talks",
      research: "Research",
      about: "About",
      aboutMe: "About Me",
    },
    // About Me Page (Full Page)
    aboutPage: {
      hero: {
        badge: "Open to Opportunities",
        name: "Danilo Dominguez, Ph.D.",
        title: "Senior Mobile & Backend Engineer",
        summary: "Accomplished Android Engineer with over nine years of experience designing and developing secure, high-performance native Android applications using Kotlin and Java. Specialized in building privacy-focused mobile solutions, with a proven track record of implementing robust sync engines, advanced encryption, and reliable network protocols for scalable, user-trusted apps.",
        contact: "Contact Me",
      },
      profile: {
        title: "Profile",
        aboutMe: {
          title: "About Me",
          content: "I'm a Senior Software Engineer with over 18 years of experience developing applications, building robust systems, and leading backend integrations at scale. My work blends hands-on development with deep architectural thinking—translating into performant, secure, and maintainable systems used by thousands of users worldwide.",
        },
        whatIDo: {
          title: "What I Do",
          items: [
            "Architect encrypted sync engines for mobile apps",
            "Build scalable APIs and backend systems for real-time data",
            "Re-architect legacy systems to reduce technical debt",
            "Lead cross-platform mobile development across Android",
            "Research and implement advanced static analysis and QA tooling",
          ],
        },
        academicBackground: {
          title: "Academic Background",
          content: "I hold a Ph.D. in Computer Science (Software Engineering) from Iowa State University, where my research focused on static analysis and event-driven mobile app behaviors. This academic foundation fuels my analytical approach to engineering challenges and informs my decision-making in high-impact environments.",
        },
        whatDrivesMe: {
          title: "What Drives Me",
          content: "I'm passionate about clean code, scalable design, and software that empowers users. I thrive in roles that combine technical depth with meaningful impact—especially where there's room to lead, innovate, and continually learn.",
        },
      },
      experience: {
        title: "Work Experience",
        jobs: [
          {
            title: "Senior Mobile Engineer",
            company: "Plan A Technologies",
            location: "Remote",
            period: "February 2026 – Present",
            highlights: [
              "Contribute to the development of a Kotlin Multiplatform app.",
              "Championed code quality by establishing rigorous testing standards for shared KMP modules, reducing platform-specific regressions and improving overall application stability.",
              "Integrated backend APIs into the KMP shared layer, streamlining network requests and data parsing for both client platforms.",
            ],
          },
          {
            title: "Part-time Professor",
            company: "Technological University of Panama",
            location: "Panama City, Panama",
            period: "2022 – Present",
            highlights: [
              "Part-time professor teaching graduate courses on Software Engineering such as Software Quality, Software Architecture, and Data Science courses.",
            ],
          },
          {
            title: "Senior Software Engineer",
            company: "Etyalab S.A. (Smartmatic)",
            location: "Panama City, Panama",
            period: "June 2025 – November 2025",
            highlights: [
              "Contributed to the development of a robust Android-based voter verification system for Smartmatic, implemented in Java and deployed in production environments.",
              "Designed and implemented a statistics module used across two national elections, ensuring accurate, reliable, and efficient data processing at scale.",
              "Identified and resolved complex concurrency issues, including subtle race conditions, significantly improving system stability and runtime performance in production.",
            ],
          },
          {
            title: "Senior Mobile Engineer",
            company: "Automattic (Day One Journal & Simplenote)",
            location: "Remote",
            period: "2021 – 2025",
            highlights: [
              "Collaborated closely with iOS and design teams to design, implement, and ship cross-platform features for the Day One and Simplenote mobile apps.",
              "Designed and implemented a new synchronization engine backed by REST APIs, including end-to-end encryption and resilient networking logic; significantly reduced sync-related support tickets after launch.",
              "Delivered multiple complex product features that contributed to a 142% increase in monthly active users (MAU).",
              "Led the migration of a legacy Android codebase to an MVVM architecture using Kotlin, Room, Jetpack Compose, Compose Navigation, Kotlin Coroutines, and Flow.",
              "Contributed to shared multi-platform libraries using Kotlin Multiplatform (KMP) to improve code reuse and consistency across platforms.",
            ],
          },
          {
            title: "Senior Software Engineer",
            company: "ADR Technologies",
            location: "Remote",
            period: "2019 – 2021",
            highlights: [
              "Led the initial design and architecture of the company's flagship Android application using Kotlin, MVVM, and Jetpack components such as Room and Navigation.",
              "Implemented complex, business-critical mobile features involving financial and monetary operations, with a strong focus on correctness and reliability.",
              "Worked in fast-paced, Scrum-based agile teams, collaborating closely with product and backend engineers.",
              "Diagnosed and resolved multiple integration issues, reducing customer support tickets by approximately 60%.",
              "Developed backend and mobile features across a Ruby on Rails backend and Android applications.",
            ],
          },
          {
            title: "Consulting Software Engineer",
            company: "Crimson Logic Panama Consulting",
            location: "Panama City, Panama",
            period: "2019 (4 months)",
            highlights: [
              "Implemented new features for total trade solutions for local clients in Panama.",
            ],
          },
          {
            title: "Research Assistant",
            company: "Iowa State University",
            location: "Ames, IA, USA",
            period: "2013 – 2018",
            highlights: [
              "Implemented a static analysis for the Android framework which allowed me to analyze Android applications.",
              "Developed static analysis tools for Android apps to automatically identify bugs and security vulnerabilities.",
              "Researched new static analysis and testing techniques for mobile applications.",
            ],
          },
          {
            title: "Web Developer & Chief Engineer",
            company: "Technological University of Panama",
            location: "Panama City, Panama",
            period: "2006 – 2011",
            highlights: [
              "Developed a purchasing system for the Ministry of Education in two stages, similar to the system used by the Panama Canal.",
              "Developed a CMS using Drupal, creating special modules for interconnection with the Latin American Network of Educational Portals (RELPE).",
              "Designed the architecture and developed a helpdesk system to manage requests for the university's IT department.",
              "Taught PHP programming courses for the IT and Communications Department.",
            ],
          },
          {
            title: "Software Engineer",
            company: "Excelsys S.A.",
            location: "Panama City, Panama",
            period: "2010 (6 months)",
            highlights: [
              "Migrated the internet banking platform to a new system using J2EE technology.",
            ],
          },
        ],
      },
      education: {
        title: "Education",
        degrees: [
          {
            degree: "Ph.D. in Computer Science",
            institution: "Iowa State University",
            period: "2014 – 2019",
            details: "Thesis: The Construction and Applications of Callback Control Flow Graphs for Event-Driven and Framework-Based Mobile Apps",
          },
          {
            degree: "M.Sc. in Computer Science",
            institution: "Rochester Institute of Technology",
            period: "2011 – 2013",
            details: "Fulbright Scholar",
          },
          {
            degree: "Systems and Computing Engineering",
            institution: "Technological University of Panama",
            period: "2004 – 2009",
            details: "Graduated with Honors",
          },
          {
            degree: "Postgraduate in Higher Education",
            institution: "Universidad del Istmo de Panama",
            period: "2020 – 2021",
            details: "",
          },
        ],
      },
      skills: {
        title: "Skills",
        categories: [
          {
            name: "Mobile Development",
            items: ["Kotlin", "Java", "Android SDK", "Swift", "iOS", "Jetpack Compose", "Kotlin Coroutines", "Kotlin Flows", "Room", "Firebase", "Kotlin Multiplatform (KMP)"],
          },
          {
            name: "Backend & Architecture",
            items: ["Ruby on Rails", "Python", "J2EE", "Laravel", "CakePHP", "SpringBoot", "REST APIs", "MVVM", "Clean Architecture", "End-to-End Encryption"],
          },
          {
            name: "Databases",
            items: ["MySQL", "PostgreSQL", "SQLite", "SQLServer", "Redis", "Kafka", "HSQL"],
          },
          {
            name: "Cloud & DevOps",
            items: ["AWS", "Azure", "Google Cloud", "Docker", "Linux", "MacOS"],
          },
          {
            name: "Web Development",
            items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Drupal"],
          },
          {
            name: "Research & Tools",
            items: ["Static Analysis", "Security Research", "LaTeX", "Academic Writing", "Technical RFCs"],
          },
        ],
      },
      awards: {
        title: "Awards & Achievements",
        list: [
          { year: "2025", title: "Rock the JVM - Kotlin Coroutines and Concurrency" },
          { year: "2015", title: "SENACYT-IFARHU Scholarship - Doctorate in Computer Science" },
          { year: "2011", title: "Fulbright Scholarship - Masters in Computer Science" },
          { year: "2009", title: "Graduated with Honors - Technological University of Panama" },
        ],
      },
      volunteering: {
        title: "Volunteering",
        list: [
          {
            organization: "Free Software and Open Source Community in Panama",
            period: "2009 – Present",
            description: "Organize events and provide workshops to promote open source technologies.",
          },
          {
            organization: "IEEE Computer Society - Panama Section",
            period: "2023 – Present",
            description: "Active member contributing to the local tech community.",
          },
        ],
      },
      languages: {
        title: "Languages",
        list: [
          { name: "English", level: "Professional proficiency", flag: "🇺🇸" },
          { name: "Spanish", level: "Native speaker", flag: "🇪🇸" },
        ],
      },
      cta: {
        title: "Let's Work Together",
        description: "I'm always interested in hearing about new projects and opportunities. Whether you need help with mobile development, architecture design, or security research, let's connect!",
        button: "Get In Touch",
      },
    },
    // Home Page
    home: {
      hero: {
        greeting: "Hey, I'm",
        subtitle1: "Senior Mobile & Backend Engineer",
        subtitle2: "Ph.D. in Computer Science with research in static analysis",
        subtitle3: "Building secure, scalable sync engines and high-performance systems for 18+ years",
        subtitle4: "Academic instructor and researcher, teaching software architecture and software quality",
        subtitle5: "Passionate about problem solving, having tackled complex issues across the full stack: backend, integration, frontend, and mobile",
        viewWork: "View My Work",
        learnMore: "Learn More",
        titleLine1: "Building Secure,",
        titleLine2: "High-Performance",
        titleLine3: "Mobile Apps",
        description: "Mobile Engineer & PhD Researcher specializing in privacy, robust and reliable systems.",
        viewResume: "About Me",
        contactMe: "Contact Me",
        imageAlt: "Danilo Dominguez Cartoon",
        architecturePreview: "Architecture Preview",
        architectureDescription: "Visualizing end-to-end encrypted packet flows in real-time sync systems.",
      },
      featured: {
        title: "Featured",
        projectTitle: "Project",
        projectDescription: "An amazing project built with modern technologies and best practices.",
        learnMore: "Learn More →",
      },
      cta: {
        title: "Let's Build Something Great",
        description: "I'm always interested in hearing about new projects and opportunities.",
        getInTouch: "Get In Touch",
      },
      list: [
        {
          title: "Open Source Tools for Quality Assurance",
          description:
            "Exploring essential open-source tools and best practices for quality assurance in modern software development. Learn how to implement effective testing strategies using freely available tools.",
        },
        {
          title: "Kotlin Coroutines for Android Apps",
          description:
            "Exploring Kotlin Coroutines for Android apps. Learn how to use Kotlin Coroutines to build asynchronous and responsive Android apps.",
        },
      ],
    },
    // About Page
    about: {
      title: "About Me",
      subtitle: "Senior Mobile & Backend Engineer | Android & Cross-Platform App Expert | PhD in Computer Science | 10+ Years Building Scalable, Secure Systems",
      bio: {
        p1: "I'm a Senior Mobile & Backend Engineer with over 10 years of experience designing and developing secure, high-performance native Android applications using Kotlin and Java. I hold a Ph.D. in Computer Science, with doctoral research focused on static analysis for detecting vulnerabilities in Android apps.",
        p2: "Specialized in building privacy-focused mobile solutions, I have a proven track record of implementing robust sync engines, advanced encryption, and reliable network protocols for scalable, user-trusted applications. At Automattic, I led the development of a sync engine for the Day One Journal app, reducing support tickets and boosting monthly active users by 142%. My expertise spans across architectural patterns, end-to-end project ownership, and mentoring peers.",
        p3: "As a creative problem-solver and collaborative team player, I thrive in taking ownership of complex projects, driving innovation through secure and performant solutions. I'm passionate about building systems that prioritize user privacy and security while maintaining exceptional performance and scalability.",
        p4: "Passionate about problem solving, having tackled complex issues across the full stack: backend, integration, frontend, and mobile.",
      },
      section: {
        heading: "Engineering & Research Excellence",
        summary: "With over 18 years of experience in software development and 9 years in mobile development, I specialize in creating secure, realible and performant applications. My work bridges the gap between academic research in security and practical, high-performance engineering.",
        features: [
          {
            id: "native",
            title: "Native Android Expert",
            description: "9+ years crafting high-performance apps with Kotlin and Java. Deep expertise in the Android SDK, custom views, and performance tuning.",
          },
          {
            id: "security",
            title: "Privacy & Security",
            description: "Building robust sync engines for offline-first architecture and implementing advanced end-to-end encryption protocols.",
          },
          {
            id: "research",
            title: "Doctoral Research",
            description: "PhD in Static Analysis. My research focuses on automated detection of vulnerabilities and data leaks in large-scale Android applications.",
          },
        ],
      },
      skills: {
        title: "Skills",
        categories: {
          mobile: "Mobile Development",
          backend: "Backend & Architecture",
          tools: "Tools & Expertise",
        },
      },
      experience: {
        title: "Experience",
        list: [
          {
            title: "",
            company: "Universidad Tecnológica de Panamá",
            location: "Panama City, Panama",
            period: "January 2023 - Present",
            description: [
              "Teach undergraduate courses in data analysis and software development, combining academic instruction with real-world engineering experience to prepare students for careers in technology.",
            ],
          },
          {
            title: "Senior Mobile Engineer",
            company: "Automattic",
            location: "Remote",
            period: "June 2021 - April 2025",
            description: [
              "Architected and implemented a secure sync engine for journaling services, enabling cross-device data consistency and reducing support requests by over 30% within the first 4 months.",
              "Collaborated cross-functionally with product and infrastructure teams to deliver features that scaled to thousands of concurrent users and drove a 142% increase in user engagement.",
              "Refactored core application modules to enhance code clarity, reduce technical debt, and support long-term scalability and maintainability.",
            ],
          },
          {
            title: "Senior Software Engineer",
            company: "ADR Technologies",
            location: "Remote",
            period: "August 2019 - May 2021",
            description: [
              "Developed robust APIs and backend services to enable seamless integration of supply chain systems with digital platforms, supporting real-time operations and cross-platform accessibility using Ruby on Rails and Python.",
              "Defined and implemented backend architecture for a new B2B platform, enabling faster delivery of services and improved modularity for future features.",
              "Diagnosed and resolved integration issues, reducing backend-related support tickets by 60% and improving system reliability for enterprise clients.",
            ],
          },
          {
            title: "Software Engineer",
            company: "Crimson Logic Panama Consulting",
            location: "Panama City, Panama",
            period: "April 2019 - August 2019",
            description: [
              "Implemented backend and UI services for processing logic for Total Trade Solutions (J2EE solution), improving data handling efficiency and ensuring reliable integration with multiple Latin American trade systems.",
            ],
          },
          {
            title: "Research Assistant",
            company: "Iowa State University",
            location: "Ames, IA",
            period: "May 2013 - December 2018",
            description: [
              "Built static analysis tools for Android applications, enabling automated detection of bugs and security vulnerabilities — experience that translates into building more stable and secure production-grade mobile apps.",
              "Engineered a custom static analysis pipeline for the Android framework, gaining deep insight into app behavior, system APIs, and lifecycle challenges central to modern Android development.",
              "Researched and prototyped advanced testing and analysis techniques for mobile applications, focusing on code quality, performance, and reliability — foundational knowledge that informs senior-level engineering decisions.",
            ],
          },
          {
            title: "Head of Engineering",
            company: "Universidad Tecnológica de Panamá",
            location: "Panama City, Panama",
            period: "August 2010 - January 2011",
            description: [
              "Led the development of a government-grade procurement system for Panama's Ministry of Education, designed for reliability and security.",
            ],
          },
          {
            title: "Web Developer",
            company: "Universidad Tecnológica de Panamá",
            location: "Panama City, Panama",
            period: "August 2006 - January 2010",
            description: [
              "Developed a Content Management System (CMS) with Drupal, including custom modules for data exchange via APIs with Latin American educational platforms (RELPE).",
              "Created a help desk platform to manage IT support requests, reducing average response times and streamlining workflow for staff and technicians.",
              "Taught PHP programming to over 100 young professionals, mentoring future developers and contributing to the university's core computing curriculum.",
            ],
          },
          {
            title: "Software Engineer",
            company: "Excelsys S.A.",
            location: "Panama City, Panama",
            period: "January 2010 - June 2010",
            description: [
              "Migrated a legacy banking system to a modern J2EE backend, enhancing performance, modularity, and security for digital banking services.",
            ],
          },
        ],
      },
      values: {
        title: "What I Value",
        security: {
          title: "Security First",
          description: "Building privacy-focused solutions with advanced encryption and secure architecture, ensuring user data remains protected.",
        },
        leadership: {
          title: "Team Leadership",
          description: "Mentoring peers, driving innovation, and collaborating effectively to deliver high-impact solutions.",
        },
        scalability: {
          title: "Scalability",
          description: "Designing robust, high-performance systems that grow with your needs while maintaining reliability and efficiency.",
        },
      },
    },
    // Blog Page
    blog: {
      title: "Blog",
      description: "Thoughts on software engineering, architecture, and technology.",
      loading: "Loading posts...",
      empty: {
        title: "No blog posts yet. Check back soon!",
        description: "In the meantime, check out the sample posts in the content/blog folder to see how to create new posts.",
      },
      back: "Back to Blog",
      postNotFound: "Post not found",
      postNotFoundDescription: "The blog post you're looking for doesn't exist yet.",
      interactions: {
        likes: "Likes",
        comments: "Comments",
        noComments: "No comments yet. Be the first to comment!",
        addComment: "Add a comment",
        namePlaceholder: "Your name",
        commentPlaceholder: "Write your comment...",
        submit: "Post Comment",
        submitting: "Posting...",
        error: "Failed to post comment. Please try again.",
      },
      section: {
        heading: "Latest Thoughts",
        description: "Insights on engineering, security, and the evolving Android ecosystem from a PhD perspective.",
        viewAllPosts: "View all posts",
        categories: {
          security: "Security",
          engineering: "Engineering",
          research: "Research",
          mobile: "Mobile",
        },
        posts: [
          {
            id: "1",
            category: "security",
            title: "Implementing End-to-End Encryption in Kotlin",
            summary: "A practical guide to integrating the Signal Protocol for secure messaging in modern Android applications.",
            date: "Oct 12, 2023",
            readTime: "8 min read",
          },
          {
            id: "2",
            category: "engineering",
            title: "Optimizing Sync Engines for Low-Connectivity",
            summary: "Strategies for building robust, offline-first architectures that handle spotty networks gracefully without draining battery.",
            date: "Sep 28, 2023",
            readTime: "12 min read",
          },
          {
            id: "3",
            category: "research",
            title: "Understanding Android Static Analysis Tools",
            summary: "How to use custom lint rules and academic static analysis frameworks to catch privacy leaks before they hit production.",
            date: "Aug 15, 2023",
            readTime: "15 min read",
          },
        ],
      },
    },
    // Projects Page
    projects: {
      title: "Projects",
      description: "A collection of projects I've built. Each one represents my journey in web development.",
      code: "Code",
      live: "Live",
      cta: {
        title: "Want to see more?",
        description: "Check out my GitHub profile for more projects and contributions.",
        visitGitHub: "Visit GitHub",
      },
    },
    // Talks Page
    talks: {
      title: "Talks",
      description: "A collection of talks I've given at different conferences and meetups.",
      deck: "Deck",
      watch: "Watch",
      empty: "No talks available at the moment. Check back soon!",
      cta: {
        title: "Interested in having me speak?",
        description: "Get in touch to discuss speaking opportunities at your conference or meetup.",
        getInTouch: "Get in Touch",
      },
      list: [
        {
          title: "Designing Applications with AI Agents: Patterns, Prompts, and Architectural Decisions",
          description:
            "A comprehensive technical walkthrough on structuring and building modern applications using AI agents. We analyze the fundamental building blocks of an effective agent — from prompt orchestration to design patterns that let agents make decisions and execute actions — and discuss the architectural challenges developers face today, with practical solutions and live demonstrations.",
        },
        {
          title: "Designing Applications with AI Agents: Patterns, Prompts, and Architectural Decisions",
          description:
            "Building agents is easy. Designing them is not. This talk goes back to the fundamentals of software architecture - trade-offs, constraints and quality attributes - and applies them to agentic systems: Model, System Prompt, Tools and Memory. We'll explore orchestration patterns (ReAct, RAG, Plan-and-Execute, Multi-agent), how to choose a model, and why, in the era of AI, the architect's role matters more than ever.",
        },
        {
          title: "Open Source Tools for Quality Assurance",
          description:
            "Exploring essential open-source tools and best practices for quality assurance in modern software development. Learn how to implement effective testing strategies using freely available tools.",
        },
        {
          title: "Kotlin Coroutines for Android Apps",
          description:
            "Exploring Kotlin Coroutines for Android apps. Learn how to use Kotlin Coroutines to build asynchronous and responsive Android apps.",
        },
        {
          title: "Open Source Software as a Tool for Research Reproducibility",
          description:
            "Exploring how open source software contributes to reproducibility in scientific research. Learn about the role of OSS licensing, development practices, and communities in building trust and enabling collaborative discovery.",
        },
        {
          title: "Software Architecture and Design",
          description:
            "An introduction to software architecture concepts, architectural drivers, reliability, maintainability, and complexity in software design. Covers essential vs accidental complexity and SOLID principles.",
        },
        {
          title: "Effective Race Detection for Event-Driven Programs",
          description:
            "A presentation on race detection techniques for event-driven systems, particularly web applications. Explores the challenges of identifying race conditions in callback-based architectures and introduces novel approaches using race coverage and chain decomposition for efficient detection.",
        },
      ],
    },
    // Footer
    footer: {
      copyright: "All rights reserved.",
    },
    // Research Page
    researchPage: {
      hero: {
        badge: "Academic Research",
        title: "Research & Publications",
        description: "My research focuses on software engineering, specifically the design of program analysis and testing tools to improve the quality of mobile applications. I'm passionate about bridging academic research with practical engineering solutions.",
        stats: [
          { value: "10+", label: "Publications" },
          { value: "30+", label: "Citations" },
        ],
      },
      focus: {
        title: "Research Focus",
        areas: [
          {
            icon: "🔬",
            title: "Static Analysis",
            description: "Developing techniques to analyze Android applications without execution, focusing on callback control flow analysis for event-driven mobile apps.",
          },
          {
            icon: "📊",
            title: "Callback Control Flow",
            description: "Researching novel representations for control flow in callback-based and framework-driven mobile applications using Callback Control Flow Graphs (CCFGs).",
          },
          {
            icon: "🧪",
            title: "Testing Criteria",
            description: "Designing test coverage criteria based on callback sequences to improve bug detection in Android applications.",
          },
          {
            icon: "📱",
            title: "Mobile App Testing",
            description: "Designing automated testing strategies for Android applications, including coverage measurement and test adequacy criteria.",
          },
          {
            icon: "🔄",
            title: "Event-Driven Systems",
            description: "Analyzing the unique challenges of event-driven and framework-based mobile application architectures.",
          },
          {
            icon: "🛠️",
            title: "Developer Tools",
            description: "Creating practical analysis tools and frameworks that help developers understand and test callback interactions in Android apps.",
          },
        ],
      },
      thesis: {
        title: "Doctoral Dissertation",
        degree: "Ph.D. in Computer Science",
        name: "The Construction and Applications of Callback Control Flow Graphs for Event-Driven and Framework-Based Mobile Apps",
        description: "This dissertation presents novel techniques for constructing and utilizing callback control flow graphs (CCFGs) to analyze event-driven mobile applications. The work addresses unique challenges in understanding the execution flow of Android apps, where control is largely driven by callbacks and framework interactions.",
        institution: "Iowa State University",
        year: "2019",
      },
      publications: {
        title: "Selected Publications",
        viewAll: "View Google Scholar",
        download: "Paper",
        citations: "citations",
        list: [
          {
            title: "Testing Criteria for Mobile Apps Based on Callback Sequences",
            authors: "Danilo Dominguez Perez, Wei Le",
            venue: "arXiv",
            year: "2019",
            abstract: "This paper introduces a family of test criteria based on callback sequences and uses the Callback Control Flow Automata (CCFA) to measure coverage for testing. Our experiments show that guiding by our criteria, testing can find more bugs and trigger bugs faster than state-of-the-art tools.",
            link: "https://arxiv.org/abs/1911.09201",
            citations: 1,
          },
          {
            title: "Specifying Callback Control Flow of Mobile Apps Using Finite Automata",
            authors: "Danilo Dominguez Perez, Wei Le",
            venue: "IEEE TSE 2019",
            year: "2019",
            abstract: "This paper presents an empirical study of callback behaviors in Android applications, analyzing how callbacks interact and share data, which is crucial for understanding app behavior and detecting bugs.",
            link: "https://ieeexplore.ieee.org/abstract/document/8613913",
            citations: 9,
          },
          {
            title: "Generating Predicate Callback Summaries for the Android Framework",
            authors: "Danilo Dominguez Perez, Wei Le",
            venue: "MOBILESoft 2017",
            year: "2017",
            abstract: "This paper presents techniques for constructing Callback Control Flow Graphs (CCFGs) for Android applications, providing a novel representation for analyzing control flow in event-driven mobile apps.",
            link: "https://ieeexplore.ieee.org/abstract/document/7972720",
            citations: 19,
          },
          {
            title: "Predicate Callback Summaries",
            authors: "Danilo Dominguez Perez, Wei Le",
            venue: "ICSE-C 2017",
            year: "2017",
            abstract: "This study provides empirical insights into the behavior patterns of Android applications, focusing on callback interactions and their implications for testing and analysis.",
            link: "https://ieeexplore.ieee.org/abstract/document/7965334",
            citations: 5,
          },
        ],
      },
      tools: {
        title: "Research Tools & Projects",
        list: [
          {
            name: "CCFA (Callback Control Flow Automata)",
            description: "A novel representation for measuring test coverage based on callback sequences in Android applications.",
            tags: ["Testing", "Coverage", "Android", "Static Analysis"],
          },
          {
            name: "CCFG Builder",
            description: "Tools for constructing Callback Control Flow Graphs to analyze event-driven mobile applications.",
            tags: ["Program Analysis", "Android", "Control Flow"],
          },
        ],
      },
      collaborators: {
        title: "Research Collaborators",
        list: [
          { name: "Wei Le", affiliation: "Iowa State University" },
        ],
      },
      cta: {
        title: "Interested in Collaboration?",
        description: "I'm always open to research collaborations and discussions about mobile app quality, security, and testing. Let's connect and explore how we can advance the field together.",
        contact: "Get In Touch",
        scholar: "Google Scholar",
      },
    },
    // Common
    common: {
      loading: "Loading...",
      date: "Date",
      author: "Author",
    },
  },
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      blog: "Blog",
      talks: "Charlas",
      research: "Investigación",
      about: "Acerca de",
      aboutMe: "Sobre Mí",
    },
    // About Me Page (Full Page)
    aboutPage: {
      hero: {
        badge: "Abierto a Oportunidades",
        name: "Danilo Dominguez, Ph.D.",
        title: "Ingeniero Senior de Móvil y Backend",
        summary: "Ingeniero Android con más de nueve años de experiencia diseñando y desarrollando aplicaciones Android nativas seguras y de alto rendimiento usando Kotlin y Java. Especializado en construir soluciones móviles enfocadas en la privacidad, con un historial comprobado de implementar motores de sincronización robustos, cifrado avanzado y protocolos de red confiables para aplicaciones escalables y confiables.",
        contact: "Contáctame",
      },
      profile: {
        title: "Perfil",
        aboutMe: {
          title: "Sobre Mí",
          content: "Soy un Ingeniero de Software Senior con más de 18 años de experiencia desarrollando aplicaciones, construyendo sistemas robustos y liderando integraciones de backend a escala. Mi trabajo combina desarrollo práctico con pensamiento arquitectónico profundo—traduciéndose en sistemas performantes, seguros y mantenibles utilizados por miles de usuarios en todo el mundo.",
        },
        whatIDo: {
          title: "Lo Que Hago",
          items: [
            "Arquitecto motores de sincronización encriptados para aplicaciones móviles",
            "Construyo APIs escalables y sistemas de backend para datos en tiempo real",
            "Re-arquitecto sistemas legacy para reducir deuda técnica",
            "Lidero desarrollo móvil multiplataforma en Android",
            "Investigo e implemento análisis estático avanzado y herramientas de QA",
          ],
        },
        academicBackground: {
          title: "Antecedentes Académicos",
          content: "Tengo un Ph.D. en Ciencias de la Computación (Ingeniería de Software) de la Universidad Estatal de Iowa, donde mi investigación se centró en análisis estático y comportamientos de aplicaciones móviles basadas en eventos. Esta base académica alimenta mi enfoque analítico a los desafíos de ingeniería e informa mi toma de decisiones en entornos de alto impacto.",
        },
        whatDrivesMe: {
          title: "Lo Que Me Impulsa",
          content: "Me apasiona el código limpio, el diseño escalable y el software que empodera a los usuarios. Prospero en roles que combinan profundidad técnica con impacto significativo—especialmente donde hay espacio para liderar, innovar y aprender continuamente.",
        },
      },
      experience: {
        title: "Experiencia Laboral",
        jobs: [
          {
            title: "Ingeniero Móvil Senior",
            company: "Plan A Technologies",
            location: "Remoto",
            period: "Febrero 2026 – Presente",
            highlights: [
              "Contribuyo al desarrollo de una aplicación Kotlin Multiplatform.",
              "Impulsé la calidad del código estableciendo estándares rigurosos de pruebas para módulos KMP compartidos, reduciendo las regresiones específicas de cada plataforma y mejorando la estabilidad general de la aplicación.",
              "Integré APIs de backend en la capa compartida de KMP, simplificando las solicitudes de red y el análisis de datos para ambas plataformas cliente.",
            ],
          },
          {
            title: "Profesor de Tiempo Parcial",
            company: "Universidad Tecnológica de Panamá",
            location: "Ciudad de Panamá, Panamá",
            period: "2022 – Presente",
            highlights: [
              "Profesor de tiempo parcial enseñando cursos de posgrado en Ingeniería de Software como Calidad de Software, Arquitectura de Software y cursos de Ciencia de Datos.",
            ],
          },
          {
            title: "Ingeniero de Software Senior",
            company: "Etyalab S.A. (Smartmatic)",
            location: "Ciudad de Panamá, Panamá",
            period: "Junio 2025 – Noviembre 2025",
            highlights: [
              "Contribuí al desarrollo de un sistema robusto de verificación de votantes basado en Android para Smartmatic, implementado en Java y desplegado en entornos de producción.",
              "Diseñé e implementé un módulo de estadísticas utilizado en dos elecciones nacionales, asegurando procesamiento de datos preciso, confiable y eficiente a escala.",
              "Identifiqué y resolví problemas complejos de concurrencia, incluyendo condiciones de carrera sutiles, mejorando significativamente la estabilidad del sistema y el rendimiento en producción.",
            ],
          },
          {
            title: "Ingeniero Móvil Senior",
            company: "Automattic (Day One Journal y Simplenote)",
            location: "Remoto",
            period: "2021 – 2025",
            highlights: [
              "Colaboré estrechamente con equipos de iOS y diseño para diseñar, implementar y lanzar funciones multiplataforma para las aplicaciones móviles Day One y Simplenote.",
              "Diseñé e implementé un nuevo motor de sincronización respaldado por APIs REST, incluyendo cifrado de extremo a extremo y lógica de red resiliente; reduje significativamente los tickets de soporte relacionados con sincronización después del lanzamiento.",
              "Entregué múltiples funciones de producto complejas que contribuyeron a un aumento del 142% en usuarios activos mensuales (MAU).",
              "Lideré la migración de un código base Android heredado a una arquitectura MVVM usando Kotlin, Room, Jetpack Compose, Compose Navigation, Kotlin Coroutines y Flow.",
              "Contribuí a bibliotecas multiplataforma compartidas usando Kotlin Multiplatform (KMP) para mejorar la reutilización de código y consistencia entre plataformas.",
            ],
          },
          {
            title: "Ingeniero de Software Senior",
            company: "ADR Technologies",
            location: "Remoto",
            period: "2019 – 2021",
            highlights: [
              "Lideré el diseño inicial y la arquitectura de la aplicación Android insignia de la empresa usando Kotlin, MVVM y componentes Jetpack como Room y Navigation.",
              "Implementé funciones móviles complejas y críticas para el negocio que involucraban operaciones financieras y monetarias, con un fuerte enfoque en corrección y confiabilidad.",
              "Trabajé en equipos ágiles basados en Scrum de ritmo rápido, colaborando estrechamente con ingenieros de producto y backend.",
              "Diagnostiqué y resolví múltiples problemas de integración, reduciendo los tickets de soporte al cliente en aproximadamente un 60%.",
              "Desarrollé funciones de backend y móviles a través de un backend Ruby on Rails y aplicaciones Android.",
            ],
          },
          {
            title: "Ingeniero de Software Consultor",
            company: "Crimson Logic Panama Consulting",
            location: "Ciudad de Panamá, Panamá",
            period: "2019 (4 meses)",
            highlights: [
              "Implementé nuevas funciones para soluciones de comercio total para clientes locales en Panamá.",
            ],
          },
          {
            title: "Asistente de Investigación",
            company: "Iowa State University",
            location: "Ames, IA, EE.UU.",
            period: "2013 – 2018",
            highlights: [
              "Implementé un análisis estático para el framework de Android que me permitió analizar aplicaciones Android.",
              "Desarrollé herramientas de análisis estático para aplicaciones Android para identificar automáticamente errores y vulnerabilidades de seguridad.",
              "Investigué nuevas técnicas de análisis estático y pruebas para aplicaciones móviles.",
            ],
          },
          {
            title: "Desarrollador Web y Jefe de Ingeniería",
            company: "Universidad Tecnológica de Panamá",
            location: "Ciudad de Panamá, Panamá",
            period: "2006 – 2011",
            highlights: [
              "Desarrollé un sistema de compras para el Ministerio de Educación en dos etapas, similar al sistema utilizado por el Canal de Panamá.",
              "Desarrollé un CMS usando Drupal, creando módulos especiales para interconexión con la Red Latinoamericana de Portales Educativos (RELPE).",
              "Diseñé la arquitectura y desarrollé un sistema de mesa de ayuda para gestionar solicitudes del departamento de TI de la universidad.",
              "Enseñé cursos de programación PHP para el Departamento de TI y Comunicaciones.",
            ],
          },
          {
            title: "Ingeniero de Software",
            company: "Excelsys S.A.",
            location: "Ciudad de Panamá, Panamá",
            period: "2010 (6 meses)",
            highlights: [
              "Migré la plataforma de banca por internet a un nuevo sistema usando tecnología J2EE.",
            ],
          },
        ],
      },
      education: {
        title: "Educación",
        degrees: [
          {
            degree: "Doctorado en Ciencias de la Computación",
            institution: "Iowa State University",
            period: "2014 – 2019",
            details: "Tesis: La Construcción y Aplicaciones de Grafos de Flujo de Control de Callbacks para Aplicaciones Móviles Basadas en Eventos y Frameworks",
          },
          {
            degree: "Maestría en Ciencias de la Computación",
            institution: "Rochester Institute of Technology",
            period: "2011 – 2013",
            details: "Becario Fulbright",
          },
          {
            degree: "Ingeniería en Sistemas y Computación",
            institution: "Universidad Tecnológica de Panamá",
            period: "2004 – 2009",
            details: "Graduado con Honores",
          },
          {
            degree: "Postgrado en Docencia Superior",
            institution: "Universidad del Istmo de Panamá",
            period: "2020 – 2021",
            details: "",
          },
        ],
      },
      skills: {
        title: "Habilidades",
        categories: [
          {
            name: "Desarrollo Móvil",
            items: ["Kotlin", "Java", "Android SDK", "Swift", "iOS", "Jetpack Compose", "Kotlin Coroutines", "Kotlin Flows", "Room", "Firebase", "Kotlin Multiplatform (KMP)"],
          },
          {
            name: "Backend y Arquitectura",
            items: ["Ruby on Rails", "Python", "J2EE", "Laravel", "CakePHP", "SpringBoot", "REST APIs", "MVVM", "Clean Architecture", "Cifrado de Extremo a Extremo"],
          },
          {
            name: "Bases de Datos",
            items: ["MySQL", "PostgreSQL", "SQLite", "SQLServer", "Redis", "Kafka", "HSQL"],
          },
          {
            name: "Nube y DevOps",
            items: ["AWS", "Azure", "Google Cloud", "Docker", "Linux", "MacOS"],
          },
          {
            name: "Desarrollo Web",
            items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Drupal"],
          },
          {
            name: "Investigación y Herramientas",
            items: ["Análisis Estático", "Investigación de Seguridad", "LaTeX", "Escritura Académica", "RFCs Técnicos"],
          },
        ],
      },
      awards: {
        title: "Premios y Logros",
        list: [
          { year: "2025", title: "Rock the JVM - Kotlin Coroutines y Concurrencia" },
          { year: "2015", title: "Beca SENACYT-IFARHU - Doctorado en Ciencias de la Computación" },
          { year: "2011", title: "Beca Fulbright - Maestría en Ciencias de la Computación" },
          { year: "2009", title: "Graduado con Honores - Universidad Tecnológica de Panamá" },
        ],
      },
      volunteering: {
        title: "Voluntariado",
        list: [
          {
            organization: "Comunidad de Software Libre y Código Abierto en Panamá",
            period: "2009 – Presente",
            description: "Organizo eventos y brindo talleres para promover tecnologías de código abierto.",
          },
          {
            organization: "IEEE Computer Society - Sección Panamá",
            period: "2023 – Presente",
            description: "Miembro activo contribuyendo a la comunidad tecnológica local.",
          },
        ],
      },
      languages: {
        title: "Idiomas",
        list: [
          { name: "Inglés", level: "Competencia profesional", flag: "🇺🇸" },
          { name: "Español", level: "Nativo", flag: "🇪🇸" },
        ],
      },
      cta: {
        title: "Trabajemos Juntos",
        description: "Siempre estoy interesado en escuchar sobre nuevos proyectos y oportunidades. Ya sea que necesites ayuda con desarrollo móvil, diseño de arquitectura o investigación de seguridad, ¡conectemos!",
        button: "Contáctame",
      },
    },
    // Home Page
    home: {
      hero: {
        greeting: "Hola, soy",
        subtitle1: "Ingeniero Senior de Móvil y Backend",
        subtitle2: "Doctor en Ciencias de la Computación con investigación en análisis estático",
        subtitle3: "Construyendo motores de sincronización seguros y escalables y sistemas de alto rendimiento durante más de 18 años",
        subtitle4: "Instructor académico e investigador, enseñando arquitectura de software y calidad de software",
        subtitle5: "Apasionado por la resolución de problemas, habiendo abordado problemas complejos en toda la pila: backend, integración, frontend y móvil",
        viewWork: "Ver Mi Trabajo",
        learnMore: "Saber Más",
        titleLine1: "Construyendo Aplicaciones",
        titleLine2: "Móviles Seguras y de",
        titleLine3: "Alto Rendimiento",
        description: "Ingeniero Móvil e Investigador PhD especializado en privacidad, sistemas robustos y confiables.",
        viewResume: "Acerca de Mí",
        contactMe: "Contáctame",
        imageAlt: "Danilo Dominguez Cartoon",
        architecturePreview: "Vista Previa de Arquitectura",
        architectureDescription: "Visualizando flujos de paquetes cifrados de extremo a extremo en sistemas de sincronización en tiempo real.",
      },
      featured: {
        title: "Destacados",
        projectTitle: "Proyecto",
        projectDescription: "Un proyecto increíble construido con tecnologías modernas y mejores prácticas.",
        learnMore: "Saber Más →",
      },
      cta: {
        title: "Construyamos Algo Genial",
        description: "Siempre estoy interesado en escuchar sobre nuevos proyectos y oportunidades.",
        getInTouch: "Contáctame",
      },
    },
    // About Page
    about: {
      title: "Acerca de Mí",
      subtitle: "Ingeniero Senior de Móvil y Backend | Experto en Apps Android y Multiplataforma | Doctor en Ciencias de la Computación | Más de 10 Años Construyendo Sistemas Escalables y Seguros",
      bio: {
        p1: "Soy un Ingeniero Senior de Móvil y Backend con más de 10 años de experiencia diseñando y desarrollando aplicaciones Android nativas seguras y de alto rendimiento usando Kotlin y Java. Tengo un Doctorado en Ciencias de la Computación, con investigación doctoral enfocada en análisis estático para detectar vulnerabilidades en aplicaciones Android.",
        p2: "Especializado en construir soluciones móviles centradas en la privacidad, tengo un historial comprobado de implementar motores de sincronización robustos, cifrado avanzado y protocolos de red confiables para aplicaciones escalables y confiables para el usuario. En Automattic, lideré el desarrollo de un motor de sincronización para la aplicación Day One Journal, reduciendo tickets de soporte y aumentando los usuarios activos mensuales en un 142%. Mi experiencia abarca patrones arquitectónicos, propiedad de proyectos de extremo a extremo y mentoría de compañeros.",
        p3: "Como solucionador de problemas creativo y jugador de equipo colaborativo, prospero al tomar posesión de proyectos complejos, impulsando la innovación a través de soluciones seguras y de alto rendimiento. Me apasiona construir sistemas que priorizan la privacidad y seguridad del usuario mientras mantienen un rendimiento y escalabilidad excepcionales.",
        p4: "Apasionado por la resolución de problemas, habiendo abordado problemas complejos en toda la pila: backend, integración, frontend y móvil.",
      },
      section: {
        heading: "Excelencia en Ingeniería e Investigación",
        summary: "Con más de 18 años de experiencia en desarrollo de software y 9 años en desarrollo móvil, me especializo en crear aplicaciones seguras, confiables y de alto rendimiento. Mi trabajo conecta la investigación académica en seguridad con la ingeniería práctica de alto rendimiento.",
        features: [
          {
            id: "native",
            title: "Experto en Android Nativo",
            description: "Más de 9 años creando aplicaciones de alto rendimiento con Kotlin y Java. Experiencia profunda en el Android SDK, vistas personalizadas y optimización de rendimiento.",
          },
          {
            id: "security",
            title: "Privacidad y Seguridad",
            description: "Construyendo motores de sincronización robustos para arquitectura offline-first e implementando protocolos avanzados de cifrado de extremo a extremo.",
          },
          {
            id: "research",
            title: "Investigación Doctoral",
            description: "Doctorado en Análisis Estático. Mi investigación se enfoca en la detección automatizada de vulnerabilidades y fugas de datos en aplicaciones Android a gran escala.",
          },
        ],
      },
      skills: {
        title: "Habilidades",
        categories: {
          mobile: "Desarrollo Móvil",
          backend: "Backend y Arquitectura",
          tools: "Herramientas y Experiencia",
        },
      },
      experience: {
        title: "Experiencia",
        list: [
          {
            title: "",
            company: "Universidad Tecnológica de Panamá",
            location: "Ciudad de Panamá, Panamá",
            period: "Enero 2023 - Presente",
            description: [
              "Enseño cursos de pregrado en análisis de datos y desarrollo de software, combinando instrucción académica con experiencia de ingeniería del mundo real para preparar a los estudiantes para carreras en tecnología.",
            ],
          },
          {
            title: "Ingeniero Senior de Móvil",
            company: "Automattic",
            location: "Remoto",
            period: "Junio 2021 - Abril 2025",
            description: [
              "Diseñé e implementé un motor de sincronización seguro para servicios de diario, permitiendo consistencia de datos entre dispositivos y reduciendo solicitudes de soporte en más del 30% dentro de los primeros 4 meses.",
              "Colaboré de manera interfuncional con equipos de producto e infraestructura para entregar características que escalaron a miles de usuarios concurrentes y generaron un aumento del 142% en la participación de usuarios.",
              "Refactoricé módulos principales de la aplicación para mejorar la claridad del código, reducir la deuda técnica y apoyar la escalabilidad y mantenibilidad a largo plazo.",
            ],
          },
          {
            title: "Ingeniero Senior de Software",
            company: "ADR Technologies",
            location: "Remoto",
            period: "Agosto 2019 - Mayo 2021",
            description: [
              "Desarrollé APIs robustas y servicios backend para permitir la integración perfecta de sistemas de cadena de suministro con plataformas digitales, apoyando operaciones en tiempo real y accesibilidad multiplataforma usando Ruby on Rails y Python.",
              "Definí e implementé la arquitectura backend para una nueva plataforma B2B, permitiendo una entrega más rápida de servicios y una modularidad mejorada para características futuras.",
              "Diagnostiqué y resolví problemas de integración, reduciendo tickets de soporte relacionados con backend en un 60% y mejorando la confiabilidad del sistema para clientes empresariales.",
            ],
          },
          {
            title: "Ingeniero de Software",
            company: "Crimson Logic Panama Consulting",
            location: "Ciudad de Panamá, Panamá",
            period: "Abril 2019 - Agosto 2019",
            description: [
              "Implementé servicios backend y de UI para la lógica de procesamiento de Total Trade Solutions (solución J2EE), mejorando la eficiencia del manejo de datos y asegurando una integración confiable con múltiples sistemas comerciales latinoamericanos.",
            ],
          },
          {
            title: "Asistente de Investigación",
            company: "Iowa State University",
            location: "Ames, IA",
            period: "Mayo 2013 - Diciembre 2018",
            description: [
              "Construí herramientas de análisis estático para aplicaciones Android, permitiendo la detección automática de errores y vulnerabilidades de seguridad — experiencia que se traduce en construir aplicaciones móviles de nivel de producción más estables y seguras.",
              "Diseñé una pipeline personalizada de análisis estático para el framework de Android, obteniendo una visión profunda del comportamiento de aplicaciones, APIs del sistema y desafíos del ciclo de vida centrales para el desarrollo moderno de Android.",
              "Investigué y prototipé técnicas avanzadas de pruebas y análisis para aplicaciones móviles, enfocándome en calidad de código, rendimiento y confiabilidad — conocimiento fundamental que informa decisiones de ingeniería de nivel senior.",
            ],
          },
          {
            title: "Jefe de Ingeniería",
            company: "Universidad Tecnológica de Panamá",
            location: "Ciudad de Panamá, Panamá",
            period: "Agosto 2010 - Enero 2011",
            description: [
              "Lideré el desarrollo de un sistema de adquisiciones de nivel gubernamental para el Ministerio de Educación de Panamá, diseñado para confiabilidad y seguridad.",
            ],
          },
          {
            title: "Desarrollador Web",
            company: "Universidad Tecnológica de Panamá",
            location: "Ciudad de Panamá, Panamá",
            period: "Agosto 2006 - Enero 2010",
            description: [
              "Desarrollé un Sistema de Gestión de Contenidos (CMS) con Drupal, incluyendo módulos personalizados para intercambio de datos vía APIs con plataformas educativas latinoamericanas (RELPE).",
              "Creé una plataforma de mesa de ayuda para gestionar solicitudes de soporte de TI, reduciendo los tiempos promedio de respuesta y optimizando el flujo de trabajo para personal y técnicos.",
              "Enseñé programación PHP a más de 100 jóvenes profesionales, mentorizando a futuros desarrolladores y contribuyendo al currículo central de computación de la universidad.",
            ],
          },
          {
            title: "Ingeniero de Software",
            company: "Excelsys S.A.",
            location: "Ciudad de Panamá, Panamá",
            period: "Enero 2010 - Junio 2010",
            description: [
              "Migré un sistema bancario legado a un backend moderno J2EE, mejorando el rendimiento, modularidad y seguridad para servicios bancarios digitales.",
            ],
          },
        ],
      },
      values: {
        title: "Lo Que Valoro",
        security: {
          title: "Seguridad Primero",
          description: "Construyendo soluciones centradas en la privacidad con cifrado avanzado y arquitectura segura, asegurando que los datos del usuario permanezcan protegidos.",
        },
        leadership: {
          title: "Liderazgo de Equipo",
          description: "Mentoría de compañeros, impulsando la innovación y colaborando efectivamente para entregar soluciones de alto impacto.",
        },
        scalability: {
          title: "Escalabilidad",
          description: "Diseñando sistemas robustos y de alto rendimiento que crecen con tus necesidades mientras mantienen confiabilidad y eficiencia.",
        },
      },
    },
    // Blog Page
    blog: {
      title: "Blog",
      description: "Pensamientos sobre ingeniería de software, arquitectura y tecnología.",
      loading: "Cargando publicaciones...",
      empty: {
        title: "Aún no hay publicaciones en el blog. ¡Vuelve pronto!",
        description: "Mientras tanto, revisa las publicaciones de ejemplo en la carpeta content/blog para ver cómo crear nuevas publicaciones.",
      },
      back: "Volver al Blog",
      postNotFound: "Publicación no encontrada",
      postNotFoundDescription: "La publicación del blog que buscas aún no existe.",
      interactions: {
        likes: "Me gusta",
        comments: "Comentarios",
        noComments: "Aún no hay comentarios. ¡Sé el primero en comentar!",
        addComment: "Agregar un comentario",
        namePlaceholder: "Tu nombre",
        commentPlaceholder: "Escribe tu comentario...",
        submit: "Publicar comentario",
        submitting: "Publicando...",
        error: "Error al publicar el comentario. Por favor, inténtalo de nuevo.",
      },
      section: {
        heading: "Últimos Pensamientos",
        description: "Perspectivas sobre ingeniería, seguridad y el ecosistema Android en evolución desde una perspectiva de PhD.",
        viewAllPosts: "Ver todas las publicaciones",
        categories: {
          security: "Seguridad",
          engineering: "Ingeniería",
          research: "Investigación",
          mobile: "Móvil",
        },
        posts: [
          {
            id: "1",
            category: "security",
            title: "Implementando Cifrado de Extremo a Extremo en Kotlin",
            summary: "Una guía práctica para integrar el Protocolo Signal para mensajería segura en aplicaciones Android modernas.",
            date: "12 Oct, 2023",
            readTime: "8 min de lectura",
          },
          {
            id: "2",
            category: "engineering",
            title: "Optimizando Motores de Sincronización para Baja Conectividad",
            summary: "Estrategias para construir arquitecturas robustas y offline-first que manejan redes intermitentes con elegancia sin agotar la batería.",
            date: "28 Sep, 2023",
            readTime: "12 min de lectura",
          },
          {
            id: "3",
            category: "research",
            title: "Entendiendo las Herramientas de Análisis Estático de Android",
            summary: "Cómo usar reglas de lint personalizadas y frameworks académicos de análisis estático para detectar fugas de privacidad antes de que lleguen a producción.",
            date: "15 Ago, 2023",
            readTime: "15 min de lectura",
          },
        ],
      },
    },
    // Projects Page
    projects: {
      title: "Proyectos",
      description: "Una colección de proyectos que he construido. Cada uno representa mi viaje en el desarrollo web.",
      code: "Código",
      live: "En Vivo",
      cta: {
        title: "¿Quieres ver más?",
        description: "Revisa mi perfil de GitHub para más proyectos y contribuciones.",
        visitGitHub: "Visitar GitHub",
      },
    },
    // Talks Page
    talks: {
      title: "Charlas",
      description: "Una colección de charlas que he dado en diferentes conferencias y meetups.",
      deck: "Presentación",
      watch: "Ver",
      empty: "No hay charlas disponibles en este momento. ¡Vuelve pronto!",
      cta: {
        title: "¿Interesado en que hable?",
        description: "Ponte en contacto para discutir oportunidades de charla en tu conferencia o meetup.",
        getInTouch: "Contáctame",
      },
      list: [
        {
          title: "Diseñando Aplicaciones con Agentes de IA: Patrones, Prompts y Decisiones Arquitectónicas",
          description:
            "Un recorrido técnico integral sobre cómo estructurar y construir aplicaciones modernas con agentes de IA. Analizamos los bloques fundamentales de un agente efectivo — desde la orquestación de prompts hasta los patrones de diseño que permiten tomar decisiones y ejecutar acciones — y discutimos los desafíos arquitectónicos que enfrentan los desarrolladores hoy, con soluciones prácticas y demostraciones en vivo.",
        },
        {
          title: "Diseñando Aplicaciones con Agentes de IA: Patrones, Prompts y Decisiones Arquitectónicas",
          description:
            "Construir agentes es fácil. Diseñarlos no. Esta charla retoma los fundamentos de la arquitectura de software - trade-offs, restricciones y atributos de calidad - y los aplica a sistemas agénticos: Modelo, System Prompt, Herramientas y Memoria. Exploraremos patrones de orquestación (ReAct, RAG, Plan-and-Execute, Multi-agent), cómo elegir un modelo y por qué, en la era de la IA, el rol del arquitecto importa más que nunca.",
        },
        {
          title: "Herramientas Open Source para el Aseguramiento de Calidad",
          description:
            "Explorando herramientas esenciales de código abierto y mejores prácticas para el aseguramiento de calidad en el desarrollo moderno de software. Aprende cómo implementar estrategias efectivas de testing usando herramientas disponibles gratuitamente.",
        },
        {
          title: "Kotlin Coroutines para Android Apps",
          description:
            "Explorando Kotlin Coroutines para aplicaciones Android. Aprende cómo usar Kotlin Coroutines para construir aplicaciones Android asíncronas y responsivas.",
        },
        {
          title: "Open Source Software como Herramienta en la Reproducibilidad de la Investigación",
          description:
            "Explorando cómo el software de código abierto contribuye a la reproducibilidad en la investigación científica. Aprende sobre el rol de las licencias OSS, prácticas de desarrollo y comunidades en la construcción de confianza y descubrimiento colaborativo.",
        },
        {
          title: "Arquitectura y Diseño de Software",
          description:
            "Una introducción a los conceptos de arquitectura de software, drivers arquitectónicos, fiabilidad, mantenibilidad y complejidad en el diseño de software. Cubre complejidad esencial vs accidental y principios SOLID.",
        },
        {
          title: "Detección Efectiva de Condiciones de Carrera en Programas Basados en Eventos",
          description:
            "Una presentación sobre técnicas de detección de condiciones de carrera en sistemas basados en eventos, particularmente aplicaciones web. Explora los desafíos de identificar condiciones de carrera en arquitecturas basadas en callbacks e introduce enfoques novedosos usando cobertura de carreras y descomposición de cadenas para detección eficiente.",
        },
      ],
    },
    // Footer
    footer: {
      copyright: "Todos los derechos reservados.",
    },
    // Research Page
    researchPage: {
      hero: {
        badge: "Investigación Académica",
        title: "Investigación y Publicaciones",
        description: "Mi investigación se enfoca en ingeniería de software, específicamente en el diseño de herramientas de análisis de programas y pruebas para mejorar la calidad de aplicaciones móviles. Me apasiona conectar la investigación académica con soluciones prácticas de ingeniería.",
        stats: [
          { value: "10+", label: "Publicaciones" },
          { value: "30+", label: "Citas" },
        ],
      },
      focus: {
        title: "Enfoque de Investigación",
        areas: [
          {
            icon: "🔬",
            title: "Análisis Estático",
            description: "Desarrollo de técnicas para analizar aplicaciones Android sin ejecución, enfocándose en análisis de flujo de control de callbacks para apps móviles orientadas a eventos.",
          },
          {
            icon: "📊",
            title: "Flujo de Control de Callbacks",
            description: "Investigación de representaciones novedosas para flujo de control en aplicaciones móviles basadas en callbacks y frameworks usando Grafos de Flujo de Control de Callbacks (CCFGs).",
          },
          {
            icon: "🧪",
            title: "Criterios de Pruebas",
            description: "Diseño de criterios de cobertura de pruebas basados en secuencias de callbacks para mejorar la detección de errores en aplicaciones Android.",
          },
          {
            icon: "📱",
            title: "Pruebas de Apps Móviles",
            description: "Diseño de estrategias automatizadas de pruebas para aplicaciones Android, incluyendo medición de cobertura y criterios de adecuación de pruebas.",
          },
          {
            icon: "🔄",
            title: "Sistemas Orientados a Eventos",
            description: "Análisis de los desafíos únicos de arquitecturas de aplicaciones móviles orientadas a eventos y basadas en frameworks.",
          },
          {
            icon: "🛠️",
            title: "Herramientas para Desarrolladores",
            description: "Creación de herramientas de análisis prácticas y frameworks que ayudan a los desarrolladores a entender y probar interacciones de callbacks en apps Android.",
          },
        ],
      },
      thesis: {
        title: "Tesis Doctoral",
        degree: "Doctorado en Ciencias de la Computación",
        name: "La Construcción y Aplicaciones de Grafos de Flujo de Control de Callbacks para Aplicaciones Móviles Basadas en Eventos y Frameworks",
        description: "Esta tesis presenta técnicas novedosas para construir y utilizar grafos de flujo de control de callbacks (CCFGs) para analizar aplicaciones móviles orientadas a eventos. El trabajo aborda desafíos únicos para entender el flujo de ejecución de apps Android, donde el control está principalmente dirigido por callbacks e interacciones del framework.",
        institution: "Iowa State University",
        year: "2019",
      },
      publications: {
        title: "Publicaciones Seleccionadas",
        viewAll: "Ver Google Scholar",
        download: "Artículo",
        citations: "citas",
        list: [
          {
            title: "Testing Criteria for Mobile Apps Based on Callback Sequences",
            authors: "Danilo Dominguez Perez, Wei Le",
            venue: "arXiv",
            year: "2019",
            abstract: "Este artículo introduce una familia de criterios de prueba basados en secuencias de callbacks y usa los Autómatas de Flujo de Control de Callbacks (CCFA) para medir la cobertura. Nuestros experimentos muestran que guiados por nuestros criterios, las pruebas pueden encontrar más errores y detectarlos más rápido que las herramientas del estado del arte.",
            link: "https://arxiv.org/abs/1911.09201",
            citations: 1,
          },
          {
            title: "Specifying Callback Control Flow of Mobile Apps Using Finite Automata",
            authors: "Danilo Dominguez Perez, Wei Le",
            venue: "IEEE TSE 2019",
            year: "2019",
            abstract: "Este artículo presenta un estudio empírico de comportamientos de callbacks en aplicaciones Android, analizando cómo los callbacks interactúan y comparten datos, lo cual es crucial para entender el comportamiento de apps y detectar errores.",
            link: "https://ieeexplore.ieee.org/abstract/document/8613913",
            citations: 9,
          },
          {
            title: "Generating Predicate Callback Summaries for the Android Framework",
            authors: "Danilo Dominguez Perez, Wei Le",
            venue: "MOBILESoft 2017",
            year: "2017",
            abstract: "Este artículo presenta técnicas para construir Grafos de Flujo de Control de Callbacks (CCFGs) para aplicaciones Android, proporcionando una representación novedosa para analizar el flujo de control en apps móviles orientadas a eventos.",
            link: "https://ieeexplore.ieee.org/abstract/document/7972720",
            citations: 19,
          },
          {
            title: "Predicate Callback Summaries",
            authors: "Danilo Dominguez Perez, Wei Le",
            venue: "ICSE-C 2017",
            year: "2017",
            abstract: "Este estudio proporciona conocimientos empíricos sobre los patrones de comportamiento de aplicaciones Android, enfocándose en interacciones de callbacks y sus implicaciones para pruebas y análisis.",
            link: "https://ieeexplore.ieee.org/abstract/document/7965334",
            citations: 5,
          },
        ],
      },
      tools: {
        title: "Herramientas y Proyectos de Investigación",
        list: [
          {
            name: "CCFA (Autómatas de Flujo de Control de Callbacks)",
            description: "Una representación novedosa para medir cobertura de pruebas basada en secuencias de callbacks en aplicaciones Android.",
            tags: ["Pruebas", "Cobertura", "Android", "Análisis Estático"],
          },
          {
            name: "Constructor de CCFG",
            description: "Herramientas para construir Grafos de Flujo de Control de Callbacks para analizar aplicaciones móviles orientadas a eventos.",
            tags: ["Análisis de Programas", "Android", "Flujo de Control"],
          },
        ],
      },
      collaborators: {
        title: "Colaboradores de Investigación",
        list: [
          { name: "Wei Le", affiliation: "Iowa State University" },
        ],
      },
      cta: {
        title: "¿Interesado en Colaborar?",
        description: "Siempre estoy abierto a colaboraciones de investigación y discusiones sobre calidad de apps móviles, seguridad y pruebas. Conectemos y exploremos cómo podemos avanzar el campo juntos.",
        contact: "Contáctame",
        scholar: "Google Scholar",
      },
    },
    // Common
    common: {
      loading: "Cargando...",
      date: "Fecha",
      author: "Autor",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
export type Language = keyof typeof translations;

