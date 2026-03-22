# CLAUDE.md

## 🧠 Project Overview

This is a web project built using:

- Astro as the main framework
- TypeScript for type safety
- Bun as the runtime, package manager, and task runner

The project follows a modular and maintainable architecture, prioritizing performance and separation of concerns.

---

## ⚙️ Tech Stack

- Framework: Astro
- Language: TypeScript
- Runtime: Bun
- Styling: (define here: Tailwind / CSS Modules / etc.)
- Components: Astro + React (if applicable)

---

## 📁 Project Structure

src/

├── components/        # Reusable UI components (Astro / React)
├── layouts/           # Layout components
├── pages/             # Astro pages (routing)
├── styles/            # Global styles or CSS modules
├── assets/            # Static assets (images, icons, etc.)
├── lib/               # Utilities, helpers, shared logic
└── types/             # Global TypeScript types

public/                # Static files served as-is

astro.config.mjs
tsconfig.json
bun.lockb

---

## 📐 Architecture Rules

- Keep components small and reusable
- Separate logic from presentation when possible
- Avoid deeply nested components
- Prefer composition over inheritance
- Use `lib/` for shared logic (formatters, helpers, API calls, etc.)
- Keep types centralized in `types/`

---

## 🧩 Components Guidelines

- Use `.astro` for static or server-rendered components
- Use `.tsx` (React) only when interactivity is needed
- Avoid unnecessary client-side JavaScript
- Use Astro Islands (`client:*`) only when required

Example:

```astro
---
import Button from '../components/Button.tsx';
---

<Button client:load />