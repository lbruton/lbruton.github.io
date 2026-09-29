---
tags: [portfolio]
doc_type: overview
project: portfolio
source: manual
created: "2026-04-03"
updated: "2026-04-03"
---

# Portfolio

> **Public copy.** Deployment and infra details (hosts, IPs, ports) are in the private companion: `Devops/DocVault/Projects/Portfolio/Overview.md` (`vault-path private`).

Personal portfolio and project showcase at **www.lbruton.cc**.

## Quick Reference

| Property | Value |
|----------|-------|
| Repo | `lbruton/lbruton.github.io` |
| Local Path | `/Volumes/DATA/GitHub/lbruton.github.io/` |
| Live URL | `https://lbruton.github.io/` (also `https://www.lbruton.cc` via Cloudflare CNAME) |
| Hosting | GitHub Pages (user site) |
| Tech | Single-file HTML, no build step, no dependencies |
| Theme | Dark navy — shared design language with all project hero pages |

## Architecture

**Hub-and-spoke model:**
- Portfolio is the central hub linking to all project hero/about pages
- Each project's hero page links back to the portfolio in its nav/footer
- `lonniebruton.com` (WordPress photography blog) cross-links for SEO

**GitHub Pages structure:**
- User site: `lbruton.github.io` repo serves at root `/`
- Project sites: other repos with Pages enabled serve at `/<repo-name>/`
- All share the same domain namespace

## DNS

| Record | Type | Target | Proxy | Notes |
|--------|------|--------|-------|-------|
| `www.lbruton.cc` | CNAME | `lbruton.github.io` | DNS-only (grey cloud) | Required for GitHub SSL provisioning |


## Project Sections

| Category | Projects |
|----------|----------|
| Network Administration | HexTrackr, Forge, TRMCompare, WhoseOnFirst |
| Finance & Investment | StakTrakr |
| AI Companions | MyMelo |
| Developer Tools | specflow (fork), claude-context (fork) |

## Existing Hero Pages

| Project | Hero Page URL | Status |
|---------|--------------|--------|
| specflow | `lbruton.github.io/specflow/` | Live |
| TRMCompare | `lbruton.github.io/TRMCompare/about/` | Live |
| StakTrakr | `about.html` in repo (served on staktrakr.com) | Needs portfolio integration |
| HexTrackr | — | Needs hero page |
| Forge | — | Needs hero page |
| MyMelo | — | Needs hero page |
| WhoseOnFirst | — | Needs hero page |

## Roadmap

1. Build hero pages for remaining projects
2. Retrofit "Back to lbruton.cc" nav/footer on existing hero pages (specflow, TRMCompare)
3. Add screenshots/previews to portfolio project cards
4. Cross-link from lonniebruton.com (WordPress footer)
5. Open Graph image for social previews
6. Blog posts section (future)

## Related

- [Cloudflare](/Volumes/DATA/GitHub/Devops/DocVault/KnowledgeBase/Infrastructure/Cloudflare.md) — DNS CNAME for www.lbruton.cc
- [Home Network](/Volumes/DATA/GitHub/Devops/DocVault/KnowledgeBase/Infrastructure/Home%20Network.md) — AdGuard DNS rewrite needed for LAN access
- Cloud - GitHub Pages (archived) — hosting platform
