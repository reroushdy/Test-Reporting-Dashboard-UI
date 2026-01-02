# Test Reporting Dashboard UI

## Overview
A UI design project exploring clearer, more actionable ways to present automated test results from UI and API test suites.

## Purpose
Automated tests generate valuable data, but reports are often difficult to scan quickly. This project focuses on improving readability, visual hierarchy, and at-a-glance status awareness to support faster triage and better decision-making.

## Project Status
In Progress
This project currently uses mock test data and static UI layouts. It is designed to evolve alongside my automation, API testing, and CI/CD projects.

## Structure
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
├── UI/
│   ├── index.html
│   ├── styles.css
│   ├── dashboard.js
│   └── dashboard.html
│
└── Notes/
    └── design-decisions.md

## Scope
- Static UI (HTML,CSS, SVG, JavaScript)
- Uses mock JSON test data
- Inspired by real UI and API automation test outputs
- Focus on clarity, hierarchy, and error visibility

## Tools
- HTML / CSS (CSS variables, semantic structure)
- Vanilla JavaScript
- SVG for visualizations
- Mock JSON data
- Inkscape (wireframes and high-fidelity designs)

## Future Enhancements
- Connect to real test output files (Robot Framework, API tests)
- Add CI pipeline integration
- Interactive filtering, historical views and trends