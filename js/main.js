// Default Portfolio Data for Muhammad Hussnain Akram
const defaultPortfolioData = {
    lastUpdated: 1722648000000,
    profile: {
        name: "Muhammad Hussnain Akram",
        title: "Full-Stack Developer",
        subtitle: "React Native | WordPress | Python",
        tagline: "Building scalable backends, clean mobile interfaces, and robust web solutions with precision.",
        bio: "BS Data Science student at UET Lahore with practical experience across the full development stack — from HTML/CSS front-ends and WordPress sites to Laravel v11 back-end systems, React Native mobile apps, and Python-based applications with OOP and database integration. Delivered multiple real-world projects and led technical workshops. Eager to contribute to a professional team and continue growing as a developer.",
        image: "assets/images/profile.png",
        logo: "Hussnain",
        email: "m.hussnainakram@gmail.com",
        phone: "+92 315 474 3800",
        location: "Lahore, Pakistan",
        linkedin: "https://www.linkedin.com/in/muhammad-hussnain-akram-960556330",
        github: "https://github.com/hussnain-rjp"
    },
    skills: [
        { name: "HTML5 / CSS3", category: "Languages" },
        { name: "JavaScript", category: "Languages" },
        { name: "Python", category: "Languages" },
        { name: "PHP", category: "Languages" },
        { name: "MySQL", category: "Languages" },
        { name: "React Native", category: "Frameworks" },
        { name: "WordPress", category: "CMS & Design" },
        { name: "Canva", category: "CMS & Design" },
        { name: "Power BI", category: "CMS & Design" },
        { name: "Git / GitHub", category: "Version Control" }
    ],
    education: [
        {
            degree: "BS Data Science",
            institution: "University of Engineering and Technology (UET), Lahore",
            period: "2025 – Present",
            details: "Currently enrolled in a 4-year undergraduate program focused on data science, programming, and applied computing."
        },
        {
            degree: "Intermediate (Pre-Engineering / ICS)",
            institution: "Punjab Group of Colleges (PGC), Lahore",
            period: "Completed 2024",
            details: "Completed intermediate studies with a foundation in mathematics, computing, and sciences."
        }
    ],
    experience: [
        {
            role: "Web Development Workshop Organizer",
            company: "UET Lahore — Student-Led Initiative",
            period: "2024–2025",
            details: "Planned and conducted hands-on web development workshops for junior students at UET Lahore.;Covered WordPress Development in detail; prepared course material and exercises.;Received a formal certificate of recognition for leading these workshops."
        }
    ],
    achievements: [
        "Certificate for Conducting Web Development Workshops — issued by IDS UET Lahore for organizing and leading technical workshops for junior students.",
        "Delivered two versions of The Gadgetz Hub website — one full-stack WordPress build and one pure HTML/CSS front-end rebuild.",
        "Built a fully functional Project Management System in Python using OOP and database integration.",
        "Developed a Career Path Advisor application in Python — a complete standalone CLI program.",
        "Currently developing with Laravel v11 and React Native CLI — actively expanding into full-stack and mobile development."
    ],
    certificates: [
        {
            name: "Microsoft Power BI for Beginners & Excel Users",
            issuer: "Udemy",
            date: "July 24, 2026",
            image: "assets/images/cert-powerbi.jpg"
        },
        {
            name: "Learn Git & GitHub in less than 3 hours (2026)",
            issuer: "Udemy",
            date: "July 24, 2026",
            image: "assets/images/cert-git.jpg"
        },
        {
            name: "Claude Code 101",
            issuer: "Anthropic",
            date: "Completed 2026",
            image: "assets/images/cert-claudecode.jpg"
        }
    ],
    projects: [
        {
            id: "gadgetz-wp",
            title: "The Gadgetz Hub — Full-Stack (WordPress)",
            category: "wordpress",
            featured: true,
            shortDesc: "Built a complete tech gadgets website using WordPress with dynamic plugins and setup.",
            description: "Built a complete full-stack tech gadgets website using WordPress — handled both front-end design and back-end configuration including plugins, product pages, and site settings. Implemented responsive layouts, product listing pages, UI design, navigation, and basic SEO setup. Managed hosting, deployment, and ongoing maintenance of the live site.",
            technologies: ["WordPress", "WooCommerce", "SEO", "Hosting"],
            demoLink: "#",
            codeLink: "#",
            gradient: "linear-gradient(135deg, #1e3a8a, #3b82f6)"
        },
        {
            id: "gadgetz-html",
            title: "The Gadgetz Hub — Front-End Rebuild",
            category: "web",
            featured: true,
            shortDesc: "Re-built the Gadgetz Hub website from scratch using pure HTML5 and CSS3.",
            description: "Re-built the Gadgetz Hub website from scratch using pure HTML5 and CSS3 — no frameworks or CMS. Focused on pixel-accurate layouts, custom styling, and responsive design without any third-party dependencies. Demonstrates deep understanding of core web fundamentals independent of WordPress.",
            technologies: ["HTML5", "CSS3", "Responsive CSS", "Clean Semantics"],
            demoLink: "#",
            codeLink: "https://github.com/hussnain-rjp",
            gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
        },
        {
            id: "pms-python",
            title: "Project Management System",
            category: "python",
            featured: true,
            shortDesc: "Full project management system in Python using OOP and database integration.",
            description: "Designed and built a full project management system in Python using Object-Oriented Programming principles. Integrated a MySQL/SQLite database for persistent storage of projects, tasks, and users. Implemented features including task assignment, status tracking, and user role management via a CLI interface.",
            technologies: ["Python", "OOP", "MySQL / SQLite", "CLI Mode"],
            demoLink: "#",
            codeLink: "https://github.com/hussnain-rjp",
            gradient: "linear-gradient(135deg, #10b981, #059669)"
        },
        {
            id: "cpa-python",
            title: "Career Path Advisor",
            category: "python",
            featured: false,
            shortDesc: "Python CLI application that recommends career paths based on user skills.",
            description: "Developed a Python-based CLI application that guides users toward suitable career paths based on their skills and interests. Used logic trees, conditional flows, and data structures to simulate an intelligent recommendation engine. Demonstrates applied Python skills including functions, file I/O, and structured program design.",
            technologies: ["Python", "Logic Trees", "File I/O", "CLI Application"],
            demoLink: "#",
            codeLink: "https://github.com/hussnain-rjp",
            gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)"
        },
        {
            id: "laravel-backend",
            title: "Laravel v11 Back-End APIs",
            category: "laravel",
            featured: false,
            shortDesc: "Building clean, secure MVC web applications and RESTful APIs using Laravel v11.",
            description: "Actively building web applications using Laravel v11 — working with routing, controllers, Eloquent ORM, and Blade templates. Developing RESTful APIs and applying MVC architecture for clean, scalable back-end logic. Comfortable with migrations, seeders, middleware, and authentication scaffolding.",
            technologies: ["Laravel v11", "PHP", "Eloquent ORM", "REST APIs", "MySQL"],
            demoLink: "#",
            codeLink: "https://github.com/hussnain-rjp",
            gradient: "linear-gradient(135deg, #ef4444, #b91c1c)"
        },
        {
            id: "react-mobile",
            title: "React Native Mobile App Development",
            category: "mobile",
            featured: false,
            shortDesc: "Cross-platform mobile applications build using React Native CLI (In Progress).",
            description: "Currently learning and building mobile applications using React Native CLI. Working with components, navigation, state management, and native device APIs. Focused on cross-platform (Android/iOS) app development as a growing skill.",
            technologies: ["React Native", "JavaScript", "Mobile Navigation", "Native Device APIs"],
            demoLink: "#",
            codeLink: "https://github.com/hussnain-rjp",
            gradient: "linear-gradient(135deg, #ec4899, #be185d)"
        }
    ]
};

// Initialize Database on Page Load (with Schema Merging for backward compatibility)
function getPortfolioData() {
    let dataStr = localStorage.getItem('portfolioData');
    if (!dataStr) {
        localStorage.setItem('portfolioData', JSON.stringify(defaultPortfolioData));
        return defaultPortfolioData;
    }
    let data = JSON.parse(dataStr);
    
    // Check if defaultPortfolioData has a newer timestamp than the saved local storage data
    const codeUpdatedTime = defaultPortfolioData.lastUpdated || 0;
    const localUpdatedTime = data.lastUpdated || 0;
    
    if (codeUpdatedTime > localUpdatedTime) {
        localStorage.setItem('portfolioData', JSON.stringify(defaultPortfolioData));
        return defaultPortfolioData;
    }
    
    // Defensively merge schema updates if they don't exist in local storage
    let updated = false;
    if (!data.profile) { data.profile = defaultPortfolioData.profile; updated = true; }
    if (!data.profile.logo) { data.profile.logo = defaultPortfolioData.profile.logo; updated = true; }
    if (!data.profile.image) { data.profile.image = defaultPortfolioData.profile.image; updated = true; }
    if (!data.skills) { data.skills = defaultPortfolioData.skills; updated = true; }
    if (!data.education) { data.education = defaultPortfolioData.education; updated = true; }
    if (!data.experience) { data.experience = defaultPortfolioData.experience; updated = true; }
    if (!data.achievements) { data.achievements = defaultPortfolioData.achievements; updated = true; }
    if (!data.projects) { data.projects = defaultPortfolioData.projects; updated = true; }
    
    // Ensure existing projects have featured flag
    if (data.projects) {
        data.projects.forEach(p => {
            if (p.featured === undefined) {
                const defProj = defaultPortfolioData.projects.find(dp => dp.id === p.id);
                p.featured = defProj ? defProj.featured : false;
                updated = true;
            }
        });
    }

    // Active Migration: Scrub Laravel elements from existing local storage data
    if (data.profile && data.profile.subtitle && data.profile.subtitle.includes("Laravel")) {
        data.profile.subtitle = data.profile.subtitle.replace("Laravel | ", "").replace(" | Laravel", "").replace("Laravel", "");
        updated = true;
    }
    if (data.skills) {
        const originalLength = data.skills.length;
        data.skills = data.skills.filter(s => !s.name.toLowerCase().includes("laravel"));
        if (data.skills.length !== originalLength) updated = true;
    }
    if (data.projects) {
        const originalLength = data.projects.length;
        data.projects = data.projects.filter(p => p.id !== "laravel-backend" && !p.title.toLowerCase().includes("laravel"));
        if (data.projects.length !== originalLength) updated = true;
    }

    if (updated) {
        localStorage.setItem('portfolioData', JSON.stringify(data));
    }
    return data;
}

// Save database state
function savePortfolioData(data) {
    localStorage.setItem('portfolioData', JSON.stringify(data));
}

// Global Core Script
document.addEventListener("DOMContentLoaded", () => {
    // 1. Get Active Data
    const portfolioData = getPortfolioData();
    
    // 2. Render Shared Elements
    injectNavbar(portfolioData);
    injectFooter(portfolioData);
    
    // 3. Setup Themes (Dark by default)
    setupTheme();
    
    // 4. Secret Redirect Key Shortcut: Ctrl+Shift+A
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
            e.preventDefault();
            window.location.href = "admin.html";
        }
    });

    // 5. Setup Logo / Footer Logo click counters
    setupLogoClicks();

    // 6. Dynamic Content Bindings
    bindGlobalTextElements(portfolioData);
    
    // 7. Render dynamic skills strip (if on homepage)
    renderSkillsStrip(portfolioData);
});

// Dynamic Page text loader
function bindGlobalTextElements(data) {
    // Fill emails, linkedin, github, profile details globally
    const elementsToBind = {
        "dyn-profile-name": data.profile.name,
        "dyn-profile-title": data.profile.title,
        "dyn-profile-subtitle": data.profile.subtitle,
        "dyn-profile-tagline": data.profile.tagline,
        "dyn-profile-bio": data.profile.bio,
        "dyn-email": data.profile.email,
        "dyn-phone": data.profile.phone,
        "dyn-location": data.profile.location
    };

    Object.keys(elementsToBind).forEach(className => {
        document.querySelectorAll(`.${className}`).forEach(el => {
            if (el.tagName === 'A') {
                if (className === 'dyn-email') {
                    el.href = `mailto:${elementsToBind[className]}`;
                } else if (className === 'dyn-phone') {
                    el.href = `tel:${elementsToBind[className]}`;
                }
            }
            el.innerText = elementsToBind[className];
        });
    });

    // Bind social URLs
    document.querySelectorAll(".dyn-github-link").forEach(el => {
        el.href = data.profile.github;
    });
    document.querySelectorAll(".dyn-linkedin-link").forEach(el => {
        el.href = data.profile.linkedin;
    });

    // Bind profile image source
    const profileImg = document.getElementById("profile-img");
    if (profileImg) {
        profileImg.src = data.profile.image || "assets/images/profile.png";
    }
}

// Render dynamic tech skills strip on home page
function renderSkillsStrip(data) {
    const container = document.getElementById("skills-strip-container");
    if (!container || !data.skills) return;

    // Bullet colors sequence matching screenshot
    const bulletColors = ["#6366f1", "#06b6d4", "#10b981", "#ef4444", "#ec4899", "#8b5cf6", "#f59e0b"];

    container.innerHTML = data.skills.map((skill, index) => {
        const color = bulletColors[index % bulletColors.length];
        return `
            <span class="skill-tag">
                <span style="color: ${color}; margin-right: 5px;">●</span>
                ${skill.name}
            </span>
        `;
    }).join("");
}

// Inject Navigation Header (Glassmorphic)
function injectNavbar(data) {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    const isLinkActive = (pageName) => {
        if (currentPath === pageName) return "active";
        if (currentPath === "" && pageName === "index.html") return "active";
        return "";
    };

    const logoText = data.profile.logo || "Hussnain";

    navbar.innerHTML = `
        <div class="nav-container">
            <div class="nav-logo" id="logo-trigger">${logoText}</div>
            <div class="nav-links-container">
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-link ${isLinkActive("index.html")}">Home</a></li>
                    <li><a href="about.html" class="nav-link ${isLinkActive("about.html")}">About</a></li>
                    <li><a href="projects.html" class="nav-link ${isLinkActive("projects.html")}">Projects</a></li>
                    <li><a href="resume.html" class="nav-link ${isLinkActive("resume.html")}">Resume</a></li>
                    <li><a href="contact.html" class="nav-link ${isLinkActive("contact.html")}">Contact</a></li>
                </ul>
            </div>
            <div class="nav-controls">
                <button class="theme-toggle-btn" aria-label="Toggle theme" id="theme-btn">
                    <!-- Moon Icon (Dark Mode Active) -->
                    <svg class="moon-icon" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
                    <!-- Sun Icon (Light Mode Active) -->
                    <svg class="sun-icon" viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0-7a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8.485-11.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zm-14.142 14.142a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM21 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM3 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm15.485 8.485a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM5.636 5.636a1 1 0 0 1 0 1.414L4.222 7.05a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0z"/></svg>
                </button>
                <button class="hamburger" aria-label="Open menu" id="hamburger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    `;

    // Hook Menu Events
    const hamburger = document.getElementById("hamburger-btn");
    const navLinks = document.querySelector(".nav-links-container");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
    }
}

// Inject footer layout
function injectFooter(data) {
    const footer = document.querySelector(".footer");
    if (!footer) return;

    const currentYear = new Date().getFullYear();
    const logoText = data.profile.logo || "Hussnain";

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-logo">
                <a href="index.html" class="logo-text">${logoText}</a>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
                    &copy; ${currentYear} All rights reserved.
                </p>
            </div>
            <div class="footer-links" style="display: flex; gap: 1.25rem; align-items: center;">
                <a href="${data.profile.linkedin}" target="_blank" aria-label="LinkedIn" class="social-icon-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" style="width: 22px; height: 22px;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="${data.profile.github}" target="_blank" aria-label="GitHub" class="social-icon-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" style="width: 22px; height: 22px;"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
            </div>
        </div>
    `;
}

// Setup Logo click triggers for hidden admin page redirect (5 clicks)
function setupLogoClicks() {
    let clickCount = 0;
    let clickTimer = null;

    const handleLogoClick = () => {
        clickCount++;
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 3000); // Reset clicks after 3s

        if (clickCount >= 5) {
            clickCount = 0;
            window.location.href = "admin.html";
        }
    };

    const logo = document.getElementById("logo-trigger");
    const footerLogo = document.getElementById("footer-trigger");
    if (logo) logo.addEventListener("click", handleLogoClick);
    if (footerLogo) footerLogo.addEventListener("click", handleLogoClick);
}

// Theme handling logic
function setupTheme() {
    const themeBtn = document.getElementById("theme-btn");
    if (!themeBtn) return;

    // Default to dark mode (which is lack of .theme-light class)
    const storedTheme = localStorage.getItem("theme") || "dark";
    
    if (storedTheme === "light") {
        document.documentElement.classList.add("theme-light");
    } else {
        document.documentElement.classList.remove("theme-light");
    }

    themeBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("theme-light");
        const activeTheme = document.documentElement.classList.contains("theme-light") ? "light" : "dark";
        localStorage.setItem("theme", activeTheme);
    });
}

// Sync cross-tab updates automatically
window.addEventListener('storage', (e) => {
    if (e.key === 'portfolioData') {
        window.location.reload();
    }
});
