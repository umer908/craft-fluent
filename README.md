# Craft + Fluent UI (Vite + React + TypeScript)

A minimal proof-of-concept editor showing **Craft.js (Basic-style)** running in a **Vite + React + TypeScript** app, with UI controls migrated to **Microsoft Fluent UI v9**.

> **Note:** This repo demonstrates the core pieces as a **sample**. Completing all requested enhancements is time-intensive; I’m sharing this trimmed implementation for review and will continue after selection.

---

## Tech Stack

- **Vite** (React + TypeScript)
- **Craft.js** – drag & drop page editor primitives
- **Fluent UI v9** – Microsoft design system components

---

## What’s Included

- ✅ Vite React app (TypeScript)
- ✅ Craft.js editor shell with minimal components:
  - `Container` (canvas, droppable)
  - `Text` (inline-editable)
  - `Btn` (button)
  - `Toolbox` to insert elements
- ✅ Basic left-rail layout (panels on the **left**)
- ✅ Fluent UI v9 integration (`FluentProvider` + `webLightTheme`)
- ✅ Fluent UI components used in toolbox/button example

---

## Still Pending / Next Steps (post-selection)

- 🔄 Replace remaining raw HTML controls with Fluent UI equivalents (Inputs, Sliders, Switches, etc.)
- 🧭 Full “Settings” panel parity (per-component props editors in Fluent UI)
- 🧩 Optional: **Reka.js** data-binding panel (JSON editor → live-bound components)
- 🧱 Polished theming, tokens, and layout patterns per Fluent UI guidelines
- 🧪 Unit tests and stricter type coverage

---

## Getting Started

```bash
# 1) Install
npm install

# 2) Run dev
npm run dev

#
