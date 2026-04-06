# Design System: lbruton.cc

## 1. Visual Theme & Atmosphere

lbruton.cc is a dark-first portfolio and guide site built by a network engineer — the aesthetic is terminal-native, infrastructure-informed, and purposefully restrained. The design language is shared across the main landing page and all guide hero pages (SpecFlow, DocVault, Session Memory, etc.), creating a cohesive ecosystem feel despite each page covering different topics.

The palette starts from near-black (`#070b14`) and builds upward through layered navy surfaces (`#0a0e17`, `#111a2e`, `#162040`), creating depth without brightness. Text lives in a cool blue-gray range (`#b8c4d4` body, `#e6edf5` bright, `#6b7d93` dim), producing comfortable contrast ratios that don't fatigue during long reading sessions. The single accent color — a soft indigo (`#818cf8`) — appears in links, labels, section markers, and focus states, tying every interactive element together.

What gives the system its identity is the monospace-as-UI-chrome pattern. Section labels, navigation brands, tags, file headers, and flow diagrams all use the monospace stack (`SF Mono`, `JetBrains Mono`, `Fira Code`), while body text uses the system sans-serif. This dual-font strategy makes the site feel like a well-formatted README rendered in a premium terminal — technical but polished.

Each project in the portfolio gets a dedicated accent color (HexTrackr green, StakTrakr blue, Forge amber, MyMelo pink, etc.) used in card dots, hero tints, and guide-specific highlights, while the structural chrome remains consistent.

**Key Characteristics:**
- Near-black canvas (`#070b14`) with layered navy surfaces — depth through background stepping, not shadows
- Cool blue-gray text scale: dim (`#6b7d93`), body (`#b8c4d4`), bright (`#e6edf5`)
- Single indigo accent (`#818cf8`) for all interactive and decorative elements
- Monospace for UI chrome (labels, brands, tags); system sans-serif for body text
- Project-specific accent colors for per-project identity within the unified system
- Vertical gradient heroes (`180deg`, primary → deep) with border-bottom separation
- Sticky frosted-glass nav with `backdrop-filter: blur(12px)` and semi-transparent background
- No external CSS framework — pure CSS custom properties, Grid, and Flexbox

## 2. Color Palette & Roles

### Background Scale
- **Deep** (`#070b14`): `--bg-deep` — Deepest background, body and footer. The void.
- **Primary** (`#0a0e17`): `--bg-primary` — Hero gradient start, section backgrounds.
- **Card** (`#111a2e`): `--bg-card` — Card surfaces, code blocks, sidebar panels.
- **Card Hover** (`#162040`): `--bg-card-hover` — Interactive hover state for cards, file headers.

### Text Scale
- **Bright** (`#e6edf5`): `--text-bright` — Headings, card names, emphasized text, code block text.
- **Body** (`#b8c4d4`): `--text` — Default body text, descriptions, paragraphs.
- **Dim** (`#6b7d93`): `--text-dim` — Secondary text, nav links (resting), metadata, footer copy.

### Accent
- **Indigo** (`#818cf8`): `--accent` — Links, section labels, hero labels, focus rings, button fills.
- **Indigo Dim** (`#818cf820`): `--accent-dim` — 12.5% opacity variant for subtle accent backgrounds and borders.

### Border Scale
- **Border** (`#1e2a3a`): `--border` — Default borders, dividers, section separators.
- **Border Hover** (`#2d3f5a`): `--border-hover` — Active/hover state for bordered elements.

### Project Accent Colors
Each project has a unique accent used in card dots and guide-specific highlights:

| Project | Color Name | Hex | CSS Variable |
|---------|-----------|-----|-------------|
| HexTrackr | Green | `#22c55e` | `--hex` |
| Forge | Amber | `#f59e0b` | `--forge` |
| TRMCompare | Cyan | `#00b4d8` | `--trmc` |
| WhoseOnFirst | Purple | `#a78bfa` | `--whoseon` |
| StakTrakr | Blue | `#3b82f6` | `--stak` |
| MyMelo | Pink | `#f472b6` | `--mymelo` |
| SpecFlow | Indigo | `#6366f1` | `--specflow` |
| Claude Context | Indigo | `#818cf8` | `--claude-ctx` |

### Semantic Colors (Guide Pages)
- **Green** (`#22c55e`): `--green` — Success callouts, positive states, implementation phase.
- **Amber** (`#f59e0b`): `--amber` — Warning callouts, task phase, caution states.
- **Cyan** (`#00b4d8`): `--cyan` — Design phase, info highlights.
- **Pink** (`#f472b6`): `--pink` — Decorative accents.
- **Red** (`#ef4444`): `--red` — Error callouts, gates, danger states.

## 3. Typography Rules

### Font Families
- **Sans-serif (body/headings):** `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif` (`--sans`)
- **Monospace (UI chrome):** `'SF Mono', 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Consolas, monospace` (`--mono`)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Title (Main) | Sans | 2.8rem (44.8px) | 700 | 1.2 | -0.03em | Main page hero only |
| Hero Title (Guide) | Sans | 2.4rem (38.4px) | 700 | 1.2 | -0.03em | Guide page heroes |
| Section Title | Sans | 1.8rem (28.8px) | 700 | implicit | -0.02em | Major section headings on main page |
| Section Title (Guide) | Sans | 1.6rem (25.6px) | 700 | implicit | -0.02em | Guide content sections |
| Subsection (H3) | Sans | 1.15rem (18.4px) | 600 | implicit | normal | Guide subsections |
| Hero Subtitle | Sans | 1.15rem (18.4px) | 400 | 1.8 | normal | Hero description paragraphs |
| Body | Sans | 1rem (16px) | 400 | 1.7–1.8 | normal | Default reading text |
| Nav Brand | Mono | 1.1rem (17.6px) | 700 | implicit | -0.02em | Site brand in nav |
| Card Name | Mono | 1rem (16px) | 600 | implicit | normal | Project card titles |
| Button | Sans | 0.9rem (14.4px) | 500 | implicit | normal | CTA buttons |
| Nav Link | Sans | 0.85rem (13.6px) | 400 | implicit | normal | Navigation links |
| Code Block | Mono | 0.82rem (13.1px) | 400 | 1.7 | normal | Pre-formatted code |
| Section Label | Mono | 0.75–0.8rem | 400 | implicit | 2px | `text-transform: uppercase`, section identifiers |
| Tag | Mono | 0.7rem (11.2px) | 400 | implicit | normal | Card tags, metadata badges |
| Prompt Label | Mono | 0.72rem (11.5px) | 400 | implicit | 1px | `text-transform: uppercase`, prompt block labels |

### Principles
- **Monospace is structural, not decorative.** It appears in the nav brand, section labels, tags, file headers, and code — elements that frame the content. Body text is always sans-serif.
- **Uppercase + letter-spacing for labels.** Section labels (`OVERVIEW`, `PHASE 1`, `OPEN SOURCE`) use mono uppercase with 1–2px letter-spacing to create a scrim-like label effect.
- **Tight headings, relaxed body.** Headings use negative letter-spacing (-0.02em to -0.03em) and tight line heights. Body text uses 1.7–1.8 line-height for comfortable reading.
- **Two weights for sans, two for mono.** Sans: 400 (body) and 700 (headings). Mono: 400 (code/tags) and 600–700 (brand/card names). No intermediary weights clutter the system.

## 4. Component Stylings

### Buttons

**Primary (Filled)**
- Background: `var(--accent)` (`#818cf8`)
- Text: `#fff`
- Padding: `10px 24px`
- Radius: `8px`
- Border: none
- Hover: background shifts to `#6366f1` (slightly deeper indigo)
- Transition: `all 0.2s`
- Use: Primary CTA ("View Guides")

**Outline (Ghost)**
- Background: transparent
- Text: `var(--text)` (`#b8c4d4`)
- Padding: `10px 24px`
- Radius: `8px`
- Border: `1px solid var(--border)` (`#1e2a3a`)
- Hover: border-color shifts to `var(--accent)`, text to `var(--text-bright)`
- Transition: `all 0.2s`
- Use: Secondary CTA ("GitHub Profile")

### Cards

**Project Card**
- Background: `var(--bg-card)` (`#111a2e`)
- Border: `1px solid var(--border)` (`#1e2a3a`)
- Radius: `12px`
- Padding: `24px`
- Transition: `all 0.25s ease`
- Hover: background `var(--bg-card-hover)`, border `var(--border-hover)`, `translateY(-2px)` lift
- Structure: card-dot (10px circle in project accent color) + card-name (mono 600) + card-desc + tags

**Pipe Card (Guide Pages)**
- Same base styling as project card
- Padding: `20px`
- Used for pipeline phase cards in guide content

### Tags / Badges
- Font: `var(--mono)` at 0.7rem
- Padding: `3px 8px`
- Radius: `4px`
- Background: `var(--bg-deep)` (`#070b14`)
- Border: `1px solid var(--border)`
- Color: `var(--text-dim)`
- Use: Technology tags on project cards

### Callouts
- Background: `var(--bg-card)`
- Border: `1px solid var(--border)`
- Border-left: `3px solid` (color varies by type)
- Radius: `0 10px 10px 0` (rounded right side only)
- Padding: `16px 20px`
- Title: mono, 0.78rem, uppercase-adjacent weight 600
- Variants: amber (default), green (`.callout-green`), red (`.callout-red`)

### Prompt Blocks
- Background: `linear-gradient(135deg, #111a2e 0%, #162040 100%)`
- Border: `1px solid var(--accent-dim)`
- Border-left: `3px solid var(--accent)`
- Radius: `0 10px 10px 0`
- Padding: `20px 24px`
- Label: mono, 0.72rem, uppercase, accent color, 1px letter-spacing

### Code Blocks
- Background: `var(--bg-card)` (`#111a2e`)
- Border: `1px solid var(--border)`
- Radius: `10px`
- Padding: `20px 24px`
- Font: `var(--mono)` at 0.82rem, line-height 1.7
- Text color: `var(--text-bright)`
- Overflow: `overflow-x: auto`

**File Header (paired with code block)**
- Background: `var(--bg-card-hover)` (`#162040`)
- Border: `1px solid var(--border)`, no bottom border
- Radius: `10px 10px 0 0` (top rounded only)
- Includes: 8px colored dot + file path in mono 0.78rem dim text
- Following code block: radius `0 0 10px 10px` (bottom rounded only)

### Flow Diagrams
- Background: `var(--bg-card)`
- Border: `1px solid var(--border)`
- Radius: `12px`
- Padding: `32px`
- Font: `var(--mono)` at 0.82rem, line-height 2
- `white-space: pre` for ASCII art layout
- Semantic colors: `.phase` (accent), `.gate` (red), `.arrow` (dim), `.tool` (green)

### Tables
- `border-collapse: collapse`, full width
- Header: bg `var(--bg-card)`, text `var(--accent)`, mono 0.78rem uppercase, 1px letter-spacing
- Cells: padding `12px 16px`, border-bottom `1px solid var(--border)`
- Last row: no bottom border

### Navigation
- Sticky, `z-index: 100`
- Background: `#070b14e8` (deep with 91% opacity)
- `backdrop-filter: blur(12px)`
- Border-bottom: `1px solid var(--border)`
- Padding: `14px 0`
- Brand: mono 1.1rem 700, bright text with accent `.cc` span
- Links: sans 0.85rem, dim text → bright on hover
- Container: flex, space-between

### Footer
- Border-top: `1px solid var(--border)`
- Padding: `40px 0`
- Text-align: center
- Links: flex row centered, 24px gap, 0.85rem dim text → accent on hover
- Copy: 0.8rem dim text

### Sidebar Panel (About Section)
- Background: `var(--bg-card)`
- Border: `1px solid var(--border)`
- Radius: `12px`
- Padding: `24px`
- Title: mono 0.8rem uppercase, accent color, 1px letter-spacing
- Items: flex row, space-between, 8px vertical padding, border-bottom separator
- Label: dim text | Value: bright text, weight 500

## 5. Layout Principles

### Spacing System
- Hero padding (main): `100px 0 80px`
- Hero padding (guides): `80px 0 60px`
- Section padding: `72px 0` (main), `48px 0` (guides)
- Container horizontal: `0 24px`
- Card padding: `24px` (project cards), `20px` (pipe cards)
- Card grid gap: `16px` (project cards), `24px` (pipe cards)
- Button padding: `10px 24px`
- Section title margin-bottom: `12px`
- Section description margin-bottom: `32–40px`
- Subsection (H3) margin: `32px 0 12px`

### Grid & Container
- Main container: `max-width: 960px` (landing page), `max-width: 800px` (guide pages)
- Centered: `margin: 0 auto`
- Project card grid: `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`
- Pipeline card grid: `repeat(auto-fill, minmax(180px, 1fr))`
- About section: 2-column grid, `gap: 40px`

### Whitespace Philosophy
- **Generous vertical rhythm.** 72px between sections on the main page, 48px in guides. Breathing room is the primary hierarchy mechanism.
- **Section borders, not backgrounds.** Sections are separated by `1px solid var(--border)` borders, not alternating background colors. The background stays dark throughout.
- **Hero gradient as anchor.** Each page starts with a `180deg` gradient from `--bg-primary` to `--bg-deep`, creating a subtle darkening effect that grounds the hero.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, `--bg-deep` | Page background, section backgrounds |
| Surface (Level 1) | `--bg-card` fill + `1px solid --border` | Cards, code blocks, sidebars, callouts |
| Hover (Level 2) | `--bg-card-hover` fill + `--border-hover` + `translateY(-2px)` | Interactive card hover states |
| Frosted (Special) | `#070b14e8` + `backdrop-filter: blur(12px)` | Sticky navigation bar |
| Accent Edge (Special) | `3px solid accent-color` left border | Callouts, prompt blocks |

**Shadow Philosophy:** This design system deliberately avoids box-shadow for elevation. Depth is created entirely through background color stepping — each layer uses a slightly lighter shade of navy. The `--bg-deep` → `--bg-primary` → `--bg-card` → `--bg-card-hover` progression creates four distinct elevation levels using only flat fills and borders. The single concession to non-flat depth is the `translateY(-2px)` lift on card hover, adding a subtle physical metaphor to the color-based elevation.

The frosted glass nav is the only element using blur-based depth, creating a clear hierarchy: the nav floats above all content through both opacity and blur.

## 7. Do's and Don'ts

### Do
- Use the four-step background scale (`--bg-deep` → `--bg-primary` → `--bg-card` → `--bg-card-hover`) for all elevation
- Use monospace for UI chrome: labels, brands, tags, code, file headers — anything structural
- Use sans-serif for all reading text: body, descriptions, headings
- Apply uppercase + letter-spacing (1–2px) for section labels — this is the system's signature
- Use `var(--accent)` (`#818cf8`) as the single interactive color for links, labels, and buttons
- Separate sections with `1px solid var(--border)` borders, not background color changes
- Use project-specific accent colors only in card dots and guide-specific highlights
- Keep transitions at `0.2s–0.25s ease` for all interactive states
- Use `#070b14e8` (not full opacity) for the nav background to allow blur-through

### Don't
- Don't use box-shadow for elevation — depth comes from background color stepping only
- Don't introduce warm tones (oranges, yellows) into the structural UI; warm colors are for project accents only
- Don't use bold (700) on body text — headings are 700, body is always 400
- Don't use the accent color for text content — it's for interactive and structural elements only
- Don't remove the `backdrop-filter` from the nav — the frosted effect is load-bearing
- Don't use rounded-left borders on callouts — only the right side rounds (`0 10px 10px 0`)
- Don't apply the hero gradient to content sections — sections have flat `--bg-deep` backgrounds
- Don't center body text — only hero content is centered; section content is left-aligned
- Don't use more than two font families — mono and sans cover everything

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 700px | Single column, reduced padding, smaller headings |
| Desktop | ≥ 700px | Multi-column grids, full padding, full typography |

### Touch Targets
- Buttons: `10px 24px` padding provides comfortable 44px+ touch height
- Nav links: adequate spacing with 16px gap (mobile), 24px (desktop)
- Cards: full-width on mobile, natural tap targets

### Collapsing Strategy
- Hero title: 2.8rem → 2rem (main), 2.4rem → 1.8rem (guides)
- Hero padding: `100px 0 80px` → `60px 0 50px`
- Section padding: `72px 0` → `48px 0`
- Project grid: `minmax(280px, 1fr)` → single column
- Pipeline grid: `minmax(180px, 1fr)` → 2-column
- About grid: 2-column → single column stacked
- Nav links: gap reduces from 24px to 16px
- Code blocks: font reduces to 0.75rem, padding to 16px
- Flow diagrams: font reduces to 0.72rem, padding to 20px

## 9. Agent Prompt Guide

### Quick Color Reference
- Page background: `#070b14` (deep), `#0a0e17` (primary)
- Card background: `#111a2e`
- Card hover: `#162040`
- Border: `#1e2a3a` (default), `#2d3f5a` (hover)
- Body text: `#b8c4d4`
- Heading text: `#e6edf5`
- Dim text: `#6b7d93`
- Accent (links/labels): `#818cf8`
- Button primary fill: `#818cf8`, hover `#6366f1`

### Example Component Prompts
- "Create a hero section with dark background gradient (180deg, #0a0e17 to #070b14). Uppercase mono label at 0.8rem with #818cf8 color and 2px letter-spacing. H1 at 2.8rem weight 700, #e6edf5, letter-spacing -0.03em. Subtitle at 1.15rem weight 400, #b8c4d4, line-height 1.8, max-width 600px centered. Two buttons: primary (#818cf8 fill, white text, 8px radius) and outline (transparent, #1e2a3a border, 8px radius)."
- "Build a project card: #111a2e background, 1px solid #1e2a3a border, 12px radius, 24px padding. Header with 10px colored dot + mono 600 name in #e6edf5. Description at 0.88rem #b8c4d4. Tags row: mono 0.7rem, #070b14 background, #1e2a3a border, 4px radius, 3px 8px padding. Hover: background #162040, border #2d3f5a, translateY(-2px)."
- "Design a callout box: #111a2e background, 1px solid #1e2a3a border, 3px solid #f59e0b left border, radius 0 10px 10px 0, padding 16px 20px. Title in mono 0.78rem weight 600, color #f59e0b. Body at 0.9rem."
- "Create a code block with file header: header bar at #162040 with 1px #1e2a3a border (no bottom), radius 10px 10px 0 0, 8px colored dot + mono 0.78rem #6b7d93 filename. Code block below: #111a2e, radius 0 0 10px 10px, mono 0.82rem #e6edf5, padding 20px 24px."
- "Build a sticky nav: background #070b14e8, backdrop-filter blur(12px), border-bottom 1px #1e2a3a, padding 14px 0. Brand left: mono 1.1rem weight 700 #e6edf5 with .cc span in #818cf8. Links right: sans 0.85rem #6b7d93, hover #e6edf5."

### Iteration Guide
1. All depth comes from background color stepping — never use box-shadow for elevation
2. Monospace is for structure (labels, brands, tags, code); sans-serif is for reading (body, headings)
3. Section labels: mono + uppercase + 1–2px letter-spacing + accent color — the system's visual signature
4. The hero gradient (180deg, primary → deep) appears on every page — it's the universal anchor
5. Cards hover with three simultaneous changes: background lightens, border lightens, element lifts 2px
6. Callouts always round right, never left: `border-radius: 0 10px 10px 0`
7. One breakpoint at 700px handles everything — the grid system does the rest via `auto-fill` + `minmax()`
