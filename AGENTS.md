# Repository Guidelines
This repository contains the MJMC Tech documentation site built with VitePress. Use these notes to keep contributions predictable and easy to review.

## Project Structure & Module Organization
- Source lives in `docs/`; each subfolder maps to a sidebar group (e.g., `docs/equipment`, `docs/audio`, `docs/video`, `docs/software`, `docs/media`).
- Navigation is defined in `docs/.vitepress/config.mts`; add new pages there when they should appear in the sidebar.
- Generated output sits in `docs/.vitepress/dist`; do not edit or commit that folder.

## Build, Test, and Development Commands
- `npm install` — installs VitePress and related tooling (use Node 24 LTS via `nvm use 24`).
- `npm run docs:dev` — local dev server with hot reload at `http://localhost:5173/` by default.
- `npm run docs:build` — static site build; use to catch broken links and frontmatter issues.
- `npm run docs:preview` — serves the last build for a production-like check.

## Coding Style & Naming Conventions
- Markdown only; prefer short sentences and scannable lists. Use sentence case for headings.
- Frontmatter: include it when layouts or metadata are needed; follow existing examples in `docs/index.md`.
- Filenames and new directories use kebab-case (`new-topic.md`); keep section folders aligned with sidebar groupings.
- Indent lists with two spaces; keep line length reasonable for diff readability; avoid trailing whitespace.
- Place images or downloads under the closest logical folder (e.g., `docs/media/`) and link with relative paths.

## Testing Guidelines
- No automated tests; rely on `npm run docs:build` for validation and on local preview for visual checks.
- When adding navigation, ensure links resolve and the sidebar order matches the structure shown in `config.mts`.

## Commit & Pull Request Guidelines
- Commit messages follow a conventional style seen in history (`chore: setup…`); use clear types like `docs:`, `chore:`, or `feat:` with a concise action.
- For PRs, include: purpose of the change, key pages touched (paths), and any screenshots for visual tweaks.
- Before requesting review, run `npm run docs:build` and note the result in the PR description.

## Content Authoring Tips
- Keep instructions task-focused and audience-aware (volunteers and staff). Provide exact room names, device labels, and menu paths when possible.
- Cross-link related guides with absolute doc paths (e.g., `/equipment/cameras`) to keep navigation consistent with VitePress routing.
