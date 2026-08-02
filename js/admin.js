// Admin Dashboard Controller (Event Delegated, State Persistent, & File Upload Enabled)

let currentPortfolioData = null;

document.addEventListener("DOMContentLoaded", () => {
    // 1. Gated Password Authentication check
    setupAdminAuth();
});

// Auth Gating Check
function setupAdminAuth() {
    const passwordForm = document.getElementById("admin-password-form");
    const loginWrapper = document.getElementById("admin-login-wrapper");
    const dashboardContainer = document.getElementById("admin-dashboard-container");

    const isLoggedIn = sessionStorage.getItem("adminLoggedIn") === "true";

    if (isLoggedIn) {
        if (loginWrapper) loginWrapper.style.display = "none";
        if (dashboardContainer) dashboardContainer.style.display = "grid";
        loadDashboard();
    } else {
        if (loginWrapper) loginWrapper.style.display = "flex";
        if (dashboardContainer) dashboardContainer.style.display = "none";
    }

    if (passwordForm) {
        passwordForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const passwordInput = document.getElementById("admin-password").value;
            
            // Default Password check
            if (passwordInput === "hussnain123") {
                sessionStorage.setItem("adminLoggedIn", "true");
                sessionStorage.setItem("adminPassword", passwordInput);
                loginWrapper.style.display = "none";
                dashboardContainer.style.display = "grid";
                loadDashboard();
            } else {
                const status = document.getElementById("login-status");
                status.innerText = "Incorrect password. Try again.";
                status.classList.add("error");
                status.style.display = "block";
            }
        });
    }
}

// Load configurations form inputs and lists
function loadDashboard() {
    // Sidebar switching actions
    const menuItems = document.querySelectorAll(".admin-menu-item");
    const contentSections = document.querySelectorAll(".admin-content-section");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(i => i.classList.remove("active"));
            contentSections.forEach(s => s.classList.remove("active"));

            item.classList.add("active");
            const targetSection = item.dataset.target;
            document.getElementById(targetSection).classList.add("active");
        });
    });

    // Logout action trigger
    const logoutBtn = document.getElementById("admin-logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            sessionStorage.removeItem("adminLoggedIn");
            window.location.reload();
        });
    }

    // Load active localStorage data record
    currentPortfolioData = JSON.parse(localStorage.getItem("portfolioData"));
    
    // Fill inputs
    fillFormFields(currentPortfolioData);
    
    // Bind Save actions
    setupSaveHandlers(currentPortfolioData);
    
    // Setup File Upload triggers
    setupImageUploaders();
    
    // Load and bind Projects CRUD
    renderAdminProjects(currentPortfolioData);
    setupProjectsCRUD(currentPortfolioData);

    // Setup Export Code panel
    updateExportCode(currentPortfolioData);
    setupExportCopy();
}

// Bind active storage details to textareas and inputs
function fillFormFields(data) {
    // Hero & Bio details
    document.getElementById("profile-logo").value = data.profile.logo || "Hussnain";
    document.getElementById("hero-name").value = data.profile.name;
    document.getElementById("hero-title").value = data.profile.title;
    document.getElementById("hero-subtitle").value = data.profile.subtitle;
    document.getElementById("hero-tagline").value = data.profile.tagline;
    document.getElementById("profile-bio").value = data.profile.bio;
    
    // Profile photo image & preview
    const profileImgSrc = data.profile.image || "assets/images/profile.png";
    document.getElementById("profile-img-url").value = profileImgSrc;
    document.getElementById("profile-img-preview").src = profileImgSrc;

    // Contact info
    document.getElementById("contact-email").value = data.profile.email;
    document.getElementById("contact-phone").value = data.profile.phone;
    document.getElementById("contact-location").value = data.profile.location;
    document.getElementById("contact-linkedin").value = data.profile.linkedin;
    document.getElementById("contact-github").value = data.profile.github;

    // Achievements list (Newline delimited)
    document.getElementById("resume-achievements").value = data.achievements.join("\n");

    // Skills lists (Newline & pipe delimited)
    document.getElementById("resume-skills").value = data.skills.map(s => `${s.name} | ${s.category}`).join("\n");

    // Education timeline (Newline & pipe delimited)
    document.getElementById("resume-education").value = data.education.map(e => `${e.degree} | ${e.institution} | ${e.period} | ${e.details}`).join("\n");

    // Experience timeline (Newline & pipe delimited)
    document.getElementById("resume-experience").value = data.experience.map(e => `${e.role} | ${e.company} | ${e.period} | ${e.details}`).join("\n");
}

// Helper to compress and resize images to fit in localStorage and prevent export bloat
function compressAndResizeImage(file, maxWidth, maxHeight, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width = Math.round((width * maxHeight) / height);
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            // Compress to JPEG with 0.7 quality
            const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.7);
            callback(compressedDataUrl);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Image upload triggers to Base64 converters and compressors
function setupImageUploaders() {
    const profileUpload = document.getElementById("profile-img-upload");
    const profileUrl = document.getElementById("profile-img-url");
    const profilePreview = document.getElementById("profile-img-preview");

    const projUpload = document.getElementById("proj-img-upload");
    const projUrl = document.getElementById("proj-img-url");
    const projPreview = document.getElementById("proj-img-preview");
    const projFallback = document.getElementById("proj-img-preview-fallback");

    // Profile photo upload helper
    if (profileUpload) {
        profileUpload.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                compressAndResizeImage(file, 400, 400, (compressedUrl) => {
                    profileUrl.value = compressedUrl;
                    profilePreview.src = compressedUrl;
                });
            }
        });
    }

    // Profile photo URL manual input change helper
    if (profileUrl) {
        profileUrl.addEventListener("input", (e) => {
            profilePreview.src = e.target.value || "assets/images/profile.png";
        });
    }

    // Project image upload helper
    if (projUpload) {
        projUpload.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                compressAndResizeImage(file, 800, 500, (compressedUrl) => {
                    projUrl.value = compressedUrl;
                    projPreview.src = compressedUrl;
                    projPreview.style.display = "block";
                    if (projFallback) projFallback.style.display = "none";
                });
            }
        });
    }

    // Project image URL manual input change helper
    if (projUrl) {
        projUrl.addEventListener("input", (e) => {
            if (e.target.value) {
                projPreview.src = e.target.value;
                projPreview.style.display = "block";
                if (projFallback) projFallback.style.display = "none";
            } else {
                projPreview.style.display = "none";
                if (projFallback) projFallback.style.display = "block";
            }
        });
    }
}

// Update configuration values on forms submit
function setupSaveHandlers(data) {
    // 1. Profile details form
    const profileForm = document.getElementById("admin-profile-form");
    if (profileForm) {
        profileForm.addEventListener("submit", (e) => {
            e.preventDefault();
            data.profile.logo = document.getElementById("profile-logo").value;
            data.profile.name = document.getElementById("hero-name").value;
            data.profile.title = document.getElementById("hero-title").value;
            data.profile.subtitle = document.getElementById("hero-subtitle").value;
            data.profile.tagline = document.getElementById("hero-tagline").value;
            data.profile.bio = document.getElementById("profile-bio").value;
            data.profile.image = document.getElementById("profile-img-url").value;
            
            saveDataState(data, "profile-status");
        });
    }

    // 2. Contact details form
    const contactForm = document.getElementById("admin-contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            data.profile.email = document.getElementById("contact-email").value;
            data.profile.phone = document.getElementById("contact-phone").value;
            data.profile.location = document.getElementById("contact-location").value;
            data.profile.linkedin = document.getElementById("contact-linkedin").value;
            data.profile.github = document.getElementById("contact-github").value;

            saveDataState(data, "contact-status");
        });
    }

    // 3. Resume, Timeline & Skills form
    const resumeForm = document.getElementById("admin-resume-form");
    if (resumeForm) {
        resumeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Save achievements
            const achievementLines = document.getElementById("resume-achievements").value.split("\n");
            data.achievements = achievementLines.filter(l => l.trim() !== "");

            // Save skills
            const skillLines = document.getElementById("resume-skills").value.split("\n");
            data.skills = skillLines.map(l => {
                const parts = l.split("|");
                return {
                    name: parts[0] ? parts[0].trim() : "",
                    category: parts[1] ? parts[1].trim() : "Languages"
                };
            }).filter(s => s.name !== "");

            // Save education
            const eduLines = document.getElementById("resume-education").value.split("\n");
            data.education = eduLines.map(l => {
                const parts = l.split("|");
                return {
                    degree: parts[0] ? parts[0].trim() : "",
                    institution: parts[1] ? parts[1].trim() : "",
                    period: parts[2] ? parts[2].trim() : "",
                    details: parts[3] ? parts[3].trim() : ""
                };
            }).filter(e => e.degree !== "");

            // Save experience
            const expLines = document.getElementById("resume-experience").value.split("\n");
            data.experience = expLines.map(l => {
                const parts = l.split("|");
                return {
                    role: parts[0] ? parts[0].trim() : "",
                    company: parts[1] ? parts[1].trim() : "",
                    period: parts[2] ? parts[2].trim() : "",
                    details: parts[3] ? parts[3].trim() : ""
                };
            }).filter(e => e.role !== "");

            saveDataState(data, "resume-status");
        });
    }
}

// Helper to save state with updated timestamp
async function saveAdminData(data) {
    try {
        data.lastUpdated = Date.now();
        localStorage.setItem("portfolioData", JSON.stringify(data));
        updateExportCode(data);

        const passwordInput = document.getElementById("admin-password")?.value || sessionStorage.getItem("adminPassword") || "hussnain123";
        const response = await fetch('/api/portfolio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: passwordInput,
                content: data
            })
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error || "Failed to update database.");
        }
    } catch (e) {
        console.error("Storage/Sync error:", e);
        alert("Saved locally, but failed to sync to MongoDB database: " + e.message);
    }
}

// Sync back state
function saveDataState(data, statusElementId) {
    saveAdminData(data);
    const status = document.getElementById(statusElementId);
    if (status) {
        status.innerText = "Settings updated successfully!";
        status.className = "form-status success";
        status.style.display = "block";
        setTimeout(() => {
            status.style.display = "none";
        }, 3000);
    }
}

// Renders projects list in Admin settings panel
function renderAdminProjects(data) {
    const tableBody = document.getElementById("admin-projects-table-body");
    if (!tableBody) return;

    tableBody.innerHTML = "";
    
    if (data.projects.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted);">No projects in catalog. Click "+ Add New Project" to create one.</td></tr>`;
        return;
    }

    data.projects.forEach(proj => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${proj.title}</strong></td>
            <td><span class="project-card-tag">${proj.category}</span></td>
            <td>
                <div class="admin-action-btns">
                    <button class="btn btn-secondary btn-small edit-proj-btn" data-id="${proj.id}">Edit</button>
                    <button class="btn btn-danger btn-small delete-proj-btn" data-id="${proj.id}">Delete</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Event Delegation setup for Projects CRUD to fix rebinding bugs
function setupProjectsCRUD(data) {
    const tableBody = document.getElementById("admin-projects-table-body");
    const projFormSection = document.getElementById("project-form-section");
    const projForm = document.getElementById("proj-form");
    const addProjBtn = document.getElementById("admin-add-project-btn");
    const cancelBtn = document.getElementById("proj-cancel-btn");

    const projPreview = document.getElementById("proj-img-preview");
    const projFallback = document.getElementById("proj-img-preview-fallback");

    if (!tableBody) return;

    // Use Event Delegation to capture click events robustly
    tableBody.addEventListener("click", (e) => {
        const deleteBtn = e.target.closest(".delete-proj-btn");
        const editBtn = e.target.closest(".edit-proj-btn");

        if (deleteBtn) {
            const id = deleteBtn.dataset.id;
            if (confirm("Are you sure you want to delete this project?")) {
                data.projects = data.projects.filter(p => p.id !== id);
                saveAdminData(data);
                renderAdminProjects(data);
                
                // Hide editor if we deleted the project that was open
                if (document.getElementById("proj-id").value === id) {
                    projFormSection.style.display = "none";
                }
            }
        }

        if (editBtn) {
            const id = editBtn.dataset.id;
            const proj = data.projects.find(p => p.id === id);
            if (proj) {
                // Reset inputs and load values
                projForm.reset();
                document.getElementById("proj-id").value = proj.id;
                document.getElementById("proj-title").value = proj.title;
                document.getElementById("proj-category").value = proj.category;
                document.getElementById("proj-short").value = proj.shortDesc || "";
                document.getElementById("proj-desc").value = proj.description;
                document.getElementById("proj-tech").value = proj.technologies.join(", ");
                document.getElementById("proj-demo").value = proj.demoLink || "#";
                document.getElementById("proj-code").value = proj.codeLink || "#";
                document.getElementById("proj-gradient").value = proj.gradient || "";
                
                // Set featured checkbox state
                document.getElementById("proj-featured").checked = proj.featured === true;
                
                // Set screenshot values and previews
                const imgSrc = proj.image || "";
                document.getElementById("proj-img-url").value = imgSrc;
                if (imgSrc) {
                    projPreview.src = imgSrc;
                    projPreview.style.display = "block";
                    projFallback.style.display = "none";
                } else {
                    projPreview.style.display = "none";
                    projFallback.style.display = "block";
                }

                document.getElementById("project-form-title").innerText = "Edit Project";
                projFormSection.style.display = "block";
                projFormSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // Add Project panel trigger
    if (addProjBtn) {
        addProjBtn.addEventListener("click", () => {
            projForm.reset();
            document.getElementById("proj-id").value = "";
            document.getElementById("proj-featured").checked = false;
            projPreview.style.display = "none";
            projFallback.style.display = "block";
            document.getElementById("project-form-title").innerText = "Add Project";
            projFormSection.style.display = "block";
            projFormSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Cancel editing
    if (cancelBtn) {
        cancelBtn.addEventListener("click", () => {
            projFormSection.style.display = "none";
        });
    }

    // Project Form submit listener
    if (projForm) {
        projForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const id = document.getElementById("proj-id").value;
            const title = document.getElementById("proj-title").value;
            const category = document.getElementById("proj-category").value;
            const shortDesc = document.getElementById("proj-short").value;
            const description = document.getElementById("proj-desc").value;
            const technologies = document.getElementById("proj-tech").value.split(",").map(t => t.trim()).filter(t => t !== "");
            const demoLink = document.getElementById("proj-demo").value;
            const codeLink = document.getElementById("proj-code").value;
            const gradient = document.getElementById("proj-gradient").value;
            const image = document.getElementById("proj-img-url").value; // Base64 or text link
            const featured = document.getElementById("proj-featured").checked;

            if (id) {
                // Editing existing project
                const index = data.projects.findIndex(p => p.id === id);
                if (index !== -1) {
                    data.projects[index] = {
                        ...data.projects[index],
                        title, category, shortDesc, description, technologies, demoLink, codeLink, gradient, image, featured
                    };
                }
            } else {
                // Adding new project
                const newId = "proj-" + Date.now();
                const newProj = {
                    id: newId,
                    title, category, shortDesc, description, technologies, demoLink, codeLink, image, featured,
                    gradient: gradient || "linear-gradient(135deg, var(--accent-indigo), var(--accent-cyan))"
                };
                data.projects.push(newProj);
            }

            saveAdminData(data);
            projFormSection.style.display = "none";
            renderAdminProjects(data);
            alert("Project saved successfully!");
        });
    }
}

// Dynamic Export Code Generator
function updateExportCode(data) {
    const exportTextarea = document.getElementById("export-code-textarea");
    if (!exportTextarea || !data) return;

    // Generate formatted defaultPortfolioData code
    const formattedData = JSON.stringify(data, null, 4);
    exportTextarea.value = `const defaultPortfolioData = ${formattedData};`;
}

// Bind Copy Code event listener
function setupExportCopy() {
    const copyBtn = document.getElementById("btn-copy-export");
    const exportTextarea = document.getElementById("export-code-textarea");

    if (copyBtn && exportTextarea) {
        copyBtn.addEventListener("click", () => {
            exportTextarea.select();
            navigator.clipboard.writeText(exportTextarea.value).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = "Copied!";
                copyBtn.style.background = "var(--accent-cyan)";
                copyBtn.style.color = "#ffffff";
                
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.background = "";
                    copyBtn.style.color = "";
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy export code: ", err);
                alert("Failed to copy automatically. Please select all text and copy manually.");
            });
        });
    }
}
