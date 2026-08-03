# Professional Multi-Page Developer Portfolio

This is a clean, modern, responsive multi-page personal portfolio website built for **Muhammad Hussnain Akram** — Full-Stack Developer specializing in Laravel, React Native, WordPress, and Python.

## Features

- **True Multi-Page Site**: Clean separation of layouts (`index.html`, `about.html`, `projects.html`, `resume.html`, `contact.html`).
- **Premium Aesthetics**: Glassmorphic UI headers, responsive timeline widgets, interactive modals, custom animations, and a curated dark/light theme switcher (Dark mode default).
- **Dynamic Content & Data Loading**: The layout initializes a static portfolio JSON database inside `localStorage` on first view and loads values dynamically.
- **Hidden Admin Editor**: A secret login page (`admin.html`) containing an Admin Dashboard to live-edit hero text, bio summaries, contact links, achievements, and perform full CRUD actions (Add/Edit/Delete) on projects.
- **Embedded Resume Viewer**: View resume PDF inline or download directly with a custom CTA action.
- **Interactive Certificate Overlay**: Click credentials to enlarge certificate screenshots with high-resolution modal zoom boxes.

---

## Secret Admin Access

The Admin panel dashboard (`admin.html`) is hidden from public navigation:
1. **Shortcut**: Press `Ctrl + Shift + A` (or `Cmd + Shift + A`) from any page to redirect instantly to the Admin gate.
2. **Gesture**: Double-click or click 5 times on the navbar logo `MHA.Dev` (or the footer logo) within 3 seconds to trigger redirect.
3. **Password Lock**: Authenticate using the password. By default, it is `musarahim` unless customized via the `ADMIN_PASSWORD` environment variable in Vercel.

> [!WARNING]
> This admin panel is synced with a MongoDB Atlas database. Ensure you configure the `ADMIN_PASSWORD` and `MONGODB_URI` environment variables in Vercel to secure the panel and establish a secure database connection.

---

## Tech Stack

- **Frontend Core**: HTML5, CSS3, ES6 JavaScript
- **Fonts & Icons**: Outfit & Inter (Google Fonts), Inline SVGs
- **Theme Engine**: CSS Custom Variables & LocalStorage persistence

---

## Folder Structure

```text
portfolio/
├── index.html          # Landing Page (Hero, quick stack, teaser)
├── about.html          # About Page (Bio, Education timeline, categories)
├── projects.html       # Projects Catalog (Filtering, detail modals)
├── resume.html         # Resume Page (Timeline, Certifications cards, PDF iframe)
├── contact.html        # Contact Page (Form validation, details, socials)
├── admin.html          # Secret Lock gate and administration editor
├── css/
│   └── style.css       # Core stylesheets & dark/light theme variables
├── js/
│   ├── main.js         # Layout injector, settings, and db initializer
│   ├── projects.js     # Projects list catalog renderer & modal binder
│   └── admin.js        # Auth gate checks, form updates, and projects CRUD
├── assets/
│   ├── resume.pdf      # Complete PDF resume download file
│   └── images/         # Profile photo and Udemy credentials screenshots
└── .gitignore          # Version control configuration exclusions
```

---

## How to Run Locally

Since this site is built with pure Vanilla JS and HTML, no packages or bundle builders are required:

1. Clone or copy this directory structure locally.
2. Double-click `index.html` to open it directly in your browser.
3. Alternatively, launch it with a local web server (such as VS Code's **Live Server** extension, or `python -m http.server` in terminal) to render resume embeds and icons cleanly.
