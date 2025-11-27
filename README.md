# MJMC Tech Docs
VitePress site for Mount Joy Mennonite Church technology documentation.

## Getting Started
- `nvm use 24` to match the project’s Node LTS.
- `npm install` to install VitePress and docs tooling.
- `npm run docs:dev` to start local preview at http://localhost:5173/.

## Building
- `npm run docs:build` to generate the static site in `docs/.vitepress/dist/`.
- `npm run docs:preview` to serve the last build for a production-like check.

## Contributing
- Edit or add pages under `docs/`; keep filenames in kebab-case.
- Update navigation in `docs/.vitepress/config.mts` when adding new sections.
- See `AGENTS.md` for full contributor guidelines.
