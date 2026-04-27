# Portfolio — lbruton.github.io

Personal portfolio at **www.lbruton.cc**: hub-and-spoke site linking to all project hero pages. Single-file HTML, no build step, hosted on GitHub Pages with Cloudflare DNS.

> See `~/.claude/CLAUDE.md` for global workflow rules.

## Documentation

Project docs: `/Volumes/DATA/GitHub/DocVault/Projects/Portfolio/`

Start at `Overview.md` and follow the index.

## Issue Tracking

Prefix: `WWW-`. Issues tracked in Plane: <https://plane.lbruton.cc/lbruton/projects/8267e307-d3b9-48f2-8bbe-1f4cc961e63a/>.

Portfolio was born directly in Plane (2026-04-27) — there is no DocVault `Issues/` archive for this project. New issues are created via `/issue` (which dispatches on `.specflow/config.json` `issue_backend`) or directly via `mcp__plane__create_issue`.

## Git Topology

- Default branch: `main`. All changes go through worktree branch → PR → main.
- No version lock — single-file static site.
- Repo: `https://github.com/lbruton/lbruton.github.io.git`.

## Hooks

- **gitleaks**: Pre-commit hook scans for accidental secret commits (`github-pat`, `aws`, `stripe`, etc.). Runs via `pre-commit` framework. Installed 2026-04-14 (OPS-116).
