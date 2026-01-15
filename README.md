# Test Reporting Dashboard UI 📊

🔗 **Live Demo:**  
👉 https://reroushdy.github.io/Test-Reporting-Dashboard-UI/

---

## Overview
A UI design project exploring clearer, more actionable ways to present automated test results from UI and API test suites.

## Purpose
Automated tests generate valuable data, but reports are often difficult to scan quickly. This project focuses on improving **readability**, **visual hierarchy**, and **at-a-glance status awareness** to support faster triage and better decision-making.

## Project Status 🚧
**In Progress**

This dashboard currently uses mock test data and static layouts. It is intentionally designed to evolve alongside my:
- UI automation projects
- API testing work
- CI/CD pipeline integrations

---

## Structure
```
Test-Reporting-Dashboard
│
├── requirements.txt
├── README.md
│
├── Mock-Data/
│   ├── test-summary.json
│   ├── failed-tests.json
│   └── trends.json
│
├── Design/
│   └── Wireframes/
│       ├── layout.svg        # Structural layout
│       ├── colors.svg        # Color system reference
│       └── fonts.svg         # Typography reference
│   └── High-Fidelity/
│       └── reporting-dashboard.svg
│
├── docs/
│   ├── index.html
│   ├── styles.css
│   ├── dashboard.js
│   └── dashboard.html
│
└── Notes/
    └── design-decisions.md
```

---

## Scope 🎯
- Static UI built with **HTML, CSS, SVG, and JavaScript**
- Uses **mock JSON test data**
- Inspired by real UI and API automation test outputs
- Emphasis on:
  - Clear status communication
  - Visual grouping
  - Error and defect visibility

---

## Tools & Technologies 🛠️
- HTML / CSS (semantic structure, CSS variables)
- Vanilla JavaScript
- SVG (donut charts and indicators)
- Mock JSON data
- Inkscape (wireframes and high-fidelity designs)

---

## Future Enhancements 🚀
- Connect to real test output files (Robot Framework, API tests)
- CI/CD pipeline integration
- Interactive filtering and historical trends
