# 📘 Internship Task 2 – Strict Tech Stack Implementation

## 🎯 Objective

This project recreates the **Internship Task Document from Task 1** using a **mandatory templating engine and bundler** as instructed in Internship Task 2.

The final compiled output is designed to **look exactly like the Task 1 document**, including:
- Headings and formatting
- Emojis
- Bullet points
- Clickable links
- Overall structure and styling

The goal is to enforce correct usage of tools, not redesign the content.

---

## 🧰 Technology Stack Used

### 🧩 Templating Engine
- **Nunjucks**
- Used to create reusable templates with layout inheritance (`layout.njk`) and content blocks.

### ⚙ Bundler / Build Tool
- **Vite**
- Used to build and compile Nunjucks templates into static HTML output.

Both tools are used throughout the project as required.

---

## 📁 Project Folder Structure

TASK2/
├── src/
│ ├── templates/
│ │ ├── layout.njk
│ │ └── index.njk
│ └── assets/
│ ├── css/
│ ├── images/
│ └── js/
├── dist/
│ └── index.html
├── vite.config.js
├── package.json
└── README.md

## prerequisties

**Node.js** and **npm** should be installed before.

check using :
 
 node -v
 npm -v

## commands Used 

*npm install
*npm run build (compile the templates into static HTML)
*npm run preview(to preview the compiled site locally)

