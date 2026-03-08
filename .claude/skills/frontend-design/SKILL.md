---
name: frontend-design
description: Use when starting any frontend design work, building a website, creating a landing page, designing UI, or writing HTML/CSS. Invoke this at the start of every frontend session before writing any code.
user-invokable: false
---

# Frontend Design System

Apply these rules to every frontend project. This skill is the base layer for all visual work.

## Step 0: Check Brand Assets

Before designing anything:
1. Look for a `brand_assets/` folder in the project root
2. If it exists, inventory its contents — logos, color guides, style guides, images
3. Use real assets over placeholders wherever available
4. If a color palette is defined, use those exact hex values — never invent brand colors
5. If a logo is present, use it

## Step 1: Reference Image Workflow

**If a reference image was provided:**
- Match layout, spacing, typography, and color exactly
- Swap in placeholder content (images via `https://placehold.co/`, generic copy)
- Do NOT improve, add to, or interpret the design — match it literally
- After building: screenshot → compare → fix mismatches → screenshot again
- Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

**If no reference image:**
- Design from scratch using the guardrails below

## Step 2: Output Defaults

- Single `index.html` with all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Step 3: Local Server & Screenshots

- Always serve on localhost — never screenshot a `file:///` URL
- Start dev server: `node serve.mjs` (serves project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before screenshotting
- If server is already running, do not start a second instance
- Screenshot command: `node screenshot.mjs http://localhost:3000`
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented)
- Optional label: `node screenshot.mjs http://localhost:3000 label` → `screenshot-N-label.png`
- After screenshotting, read the PNG with the Read tool to analyze it directly

## Design Guardrails

### Colors
- Never use default Tailwind palette (indigo-500, blue-600, slate-400, etc.)
- Pick a custom brand color and derive a full palette from it
- Use exact hex values defined in brand assets if present

### Shadows
- Never use flat `shadow-md`
- Use layered, color-tinted shadows with low opacity
- Example: `box-shadow: 0 4px 6px rgba(var(--brand-rgb), 0.08), 0 12px 24px rgba(var(--brand-rgb), 0.06)`

### Typography
- Never use the same font for headings and body
- Pair a display/serif with a clean sans-serif
- Large headings: tight tracking (`letter-spacing: -0.03em`)
- Body text: generous line-height (`line-height: 1.7`)
- Load fonts from Google Fonts CDN

### Gradients & Texture
- Layer multiple radial gradients for depth
- Add grain/texture via SVG noise filter where appropriate
- Avoid flat single-color backgrounds on hero sections

### Animations
- Only animate `transform` and `opacity`
- Never use `transition-all` — always specify the property
- Use spring-style easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` for entrances

### Interactive States
- Every clickable element needs: `hover`, `focus-visible`, and `active` states
- No exceptions — buttons, links, cards, icons all need all three

### Images
- Add a gradient overlay: `background: linear-gradient(to top, rgba(0,0,0,0.6), transparent)`
- Consider a color treatment layer with `mix-blend-multiply`

### Spacing
- Use intentional, consistent spacing tokens — not random Tailwind steps
- Define a spacing scale in `:root` CSS variables and use it throughout

### Depth / Layering
- Surfaces should use a layering system: base → elevated → floating
- Not everything sits at the same z-plane
- Use subtle background differences (e.g., `#f8f7f5` vs `#ffffff`) to imply elevation

## Hard Rules

- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass (minimum 2 rounds)
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not use glassmorphism unless the reference explicitly shows it
