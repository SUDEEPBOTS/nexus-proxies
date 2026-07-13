---
name: Nexus Proxies
description: Premium Proxy Generator & Formatter for Webshare API
colors:
  bg-main: "#f0fdf4"
  card-bg: "rgba(255, 255, 255, 0.65)"
  primary: "#0ea5e9"
  primary-hover: "#0284c7"
  accent: "#10b981"
  text-main: "#0f172a"
  text-muted: "#64748b"
  danger: "#ef4444"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
  code:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "1.1rem"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
---

## Visual Concept
Nexus Proxies is a clean, bright, and highly polished utility app that uses a crisp light theme with glassmorphism. It combines deep blues (`#0ea5e9`) and emerald greens (`#10b981`) to convey speed, security, and success.

## Colors
The palette is centered around white/light gray with vibrant accents:
- **Primary:** Crisp Sky Blue (`#0ea5e9`) for main actions.
- **Accent:** Emerald Green (`#10b981`) for success states and badges.
- **Backgrounds:** Very light mint (`#f0fdf4`) with soft radial gradients. Cards use white (`rgba(255, 255, 255, 0.65)`) with heavy background blur (16px) for the glassmorphic effect.
- **Text:** Dark Slate (`#0f172a`) for readability, with muted slate (`#64748b`) for secondary text.

## Typography
- **Primary Font:** Outfit (Google Fonts). Used across headings and body for a modern, geometric look.
- **Monospace Font:** JetBrains Mono for API keys, proxy IPs, and code blocks.
- **Hierarchy:** Headings use gradient text and tight letter spacing (`-1px`).

## Layout & Rhythm
- Max width container of 1000px.
- Grid layout with `auto-fill, minmax(300px, 1fr)` for proxy cards.
- Consistent 1rem and 1.5rem padding/gaps for breathing room.

## Components
- **Cards:** Glassmorphic, 16px border-radius, delicate white borders, and soft shadows (`0 10px 40px -10px rgba(0,0,0,0.05)`). Hover states lift the card and intensify the shadow with primary color hints.
- **Buttons:** Solid primary color with 12px border-radius. Hover states lift the button and deepen the color.
- **Inputs:** Semi-transparent white (`rgba(255,255,255,0.8)`), solid border, transitions to solid white on focus with a blue ring.

## Motion
- **Entrance:** Smooth fade-ins and subtle upward slides (Framer Motion).
- **Micro-interactions:** Buttons translate up by 2px on hover. Cards float slightly.
- **State Changes:** Copy buttons change background to Accent color seamlessly when clicked.
