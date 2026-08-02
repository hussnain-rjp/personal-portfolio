// Projects Dynamic Renderer & Modal Controller

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Get database records
    const data = await getPortfolioData();
    if (!data || !data.projects) return;

    const projectsGrid = document.getElementById("projects-grid");
    const filterTabsContainer = document.getElementById("filter-tabs");
    
    if (projectsGrid) {
        // Initial projects render
        renderProjects(data.projects, "all");
        
        // Render filter categories buttons
        setupFilterTabs(data.projects);
    }
    
    // Setup detail modals
    setupModalOverlay();
});

// Render cards list
function renderProjects(projects, activeCategory) {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = "";

    const filtered = activeCategory === "all" 
        ? projects 
        : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No projects found in this category.</div>`;
        return;
    }

    filtered.forEach((project, index) => {
        const card = document.createElement("div");
        card.className = "glass-card project-card animate-fade-in";
        card.style.animationDelay = `${index * 0.1}s`;
        card.dataset.id = project.id;
        
        // Check if there's a real thumbnail, or use gradient style
        const hasImage = project.image && project.image !== "placeholder";
        const imageHtml = hasImage
            ? `<img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
            : "";
        const displayStyle = hasImage ? "none" : "flex";
            
        const fallbackGradient = project.gradient || "linear-gradient(135deg, var(--accent-indigo), var(--accent-cyan))";

        // Generate tech tags html
        const tagsHtml = project.technologies.slice(0, 3).map(tech => 
            `<span class="project-card-tag">${tech}</span>`
        ).join("");

        card.innerHTML = `
            <div class="project-card-image" style="background: ${fallbackGradient}">
                ${imageHtml}
                <div class="fallback-overlay" style="position: absolute; top:0; left:0; width:100%; height:100%; display: ${displayStyle}; align-items: center; justify-content: center; font-weight: 800; font-family: var(--font-heading); font-size: 1.5rem; color: #ffffff; text-shadow: 0 2px 5px rgba(0,0,0,0.3); text-transform: uppercase;">
                    ${project.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                </div>
            </div>
            <div class="project-card-tags">
                ${tagsHtml}
            </div>
            <h3>${project.title}</h3>
            <p>${project.shortDesc || project.description.substring(0, 100) + '...'}</p>
            <div class="project-card-links">
                <a href="#" class="project-card-link open-details-btn" data-id="${project.id}">
                    Learn More 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 2px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
            </div>
        `;

        grid.appendChild(card);
    });

    // Rebind modal click events for "Learn More"
    document.querySelectorAll(".open-details-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const projId = e.currentTarget.dataset.id;
            openProjectModal(projId);
        });
    });
}

// Generate tabs triggers
function setupFilterTabs(projects) {
    const container = document.getElementById("filter-tabs");
    if (!container) return;

    // Get unique categories from list
    const categories = ["all", ...new Set(projects.map(p => p.category.toLowerCase()))];
    
    // Label helpers mapping values
    const labels = {
        "all": "All Projects",
        "wordpress": "WordPress",
        "web": "Front-End",
        "python": "Python CLI",
        "laravel": "Laravel API",
        "mobile": "React Native"
    };

    container.innerHTML = "";
    categories.forEach(cat => {
        const button = document.createElement("button");
        button.className = `filter-tab ${cat === "all" ? "active" : ""}`;
        button.dataset.category = cat;
        button.innerText = labels[cat] || (cat.charAt(0).toUpperCase() + cat.slice(1));
        
        button.addEventListener("click", (e) => {
            document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            renderProjects(projects, cat);
        });

        container.appendChild(button);
    });
}

// Setup Modal overlay close triggers
function setupModalOverlay() {
    const modal = document.getElementById("project-modal");
    if (!modal) return;

    const closeBtn = modal.querySelector(".modal-close-btn");
    
    const closeModal = () => {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    };

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
}

// Open modal and load detail fields
async function openProjectModal(id) {
    const data = await getPortfolioData();
    const project = data.projects.find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById("project-modal");
    if (!modal) return;

    // Set title and description
    modal.querySelector(".modal-title").innerText = project.title;
    modal.querySelector(".modal-desc").innerText = project.description;
    
    // Set fallback gradient or image
    const imgEl = modal.querySelector(".modal-img-tag");
    const imgWrapper = modal.querySelector(".modal-image");
    
    if (project.image && project.image !== "placeholder") {
        imgEl.src = project.image;
        imgEl.style.display = "block";
        imgWrapper.style.background = project.gradient || "var(--bg-secondary)";
    } else {
        imgEl.style.display = "none";
        imgWrapper.style.background = project.gradient || "linear-gradient(135deg, var(--accent-indigo), var(--accent-cyan))";
    }

    // Bind technologies tag cloud
    const tagsContainer = modal.querySelector(".modal-tags");
    tagsContainer.innerHTML = project.technologies.map(tech => 
        `<span class="project-card-tag" style="font-size:0.8rem; padding:0.3rem 1rem;">${tech}</span>`
    ).join("");

    // Bind action links
    const demoBtn = modal.querySelector(".modal-demo-btn");
    const codeBtn = modal.querySelector(".modal-code-btn");
    
    if (project.demoLink && project.demoLink.trim() !== "" && project.demoLink !== "#") {
        demoBtn.href = project.demoLink;
        demoBtn.style.display = "inline-flex";
    } else {
        demoBtn.style.display = "none";
    }
    
    if (project.codeLink && project.codeLink.trim() !== "" && project.codeLink !== "#") {
        codeBtn.href = project.codeLink;
        codeBtn.style.display = "inline-flex";
    } else {
        codeBtn.style.display = "none";
    }

    // Activate Modal overlay
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}
