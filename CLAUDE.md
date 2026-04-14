# CLAUDE.md

Project guidance for Claude Code.

> See `~/.claude/CLAUDE.md` for global workflow rules.

## Hooks

- **gitleaks**: Pre-commit hook scans for accidental secret commits (`github-pat`, `aws`, `stripe`, etc.). Runs via `pre-commit` framework. Installed 2026-04-14 (OPS-116).
