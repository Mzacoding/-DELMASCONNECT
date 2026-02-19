# Implementation Plan: Dark/Light Mode + Ad Spaces

## Task 1: Fix Dark/Light Mode on ALL Pages
- [ ] 1.1 Update App.js - pass darkMode to Marketplace component
- [ ] 1.2 Update Header.jsx - add proper dark/light mode toggle button
- [ ] 1.3 Update Marketplace.jsx - add darkMode prop support and theme classes
- [ ] 1.4 Update YardPortal.jsx - add darkMode prop support and theme classes

## Task 2: Add Ad Spaces to All Pages
- [ ] 2.1 Add AdSlot to Marketplace (sidebar, between results)
- [ ] 2.2 Add MobileAd to Marketplace
- [ ] 2.3 Add AdSlot to YardPortal (dashboard)
- [ ] 2.4 Add MobileAd to YardPortal

## Implementation Order:
1. App.js - pass darkMode to Marketplace
2. Header.jsx - fix theme toggle
3. Marketplace.jsx - add dark mode support + ads
4. YardPortal.jsx - add dark mode support + ads

