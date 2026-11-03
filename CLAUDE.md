# CLAUDE.md

Vincent Ondeng's academic portfolio. Plain HTML, CSS and Bootstrap 4, no build step. Built on the MIT-licensed `academic-portfolio-template-lemos` template (keep `LICENSE` and the footer credit in `components/footer-lemos.js`).

## Layout

- `index.html`: home
- `pages/`: `education`, `experience`, `skills`, `projects`, `publications`
- `pages/projects/<slug>.html`: one write-up per project (5 projects)
- `components/`: shared header and footer (web components, loaded on every page)
- `assets/css/project-detail.css`: styles for the project write-ups
- `assets/img/`: `profile.jpg`, `favicon.svg` (`avatar.svg` is the unused old placeholder)
- `files/Resume.pdf`: linked from the home page

All paths are root-relative (`/assets/...`). Preview locally with `python3 -m http.server 8000` from the repo root, never by opening files directly.

## Rules that must not break

1. **The GNN paper is not published and not submitted.** It is a manuscript in preparation. Title: "Graph Neural Networks for Informal Settlement Characterization from Building Footprints: Adjacency Design, Scale and City-Relative Labels". Never write "submitted", "under review", "published" or "accepted", never name a journal, and never add a DOI, a PDF link or a BibTeX button for it. It stays under "Work in Progress" on `pages/publications.html`. Vincent has no publications and no submissions yet.
2. **No invented facts.** Do not add dates, numbers, employers, co-authors or links Vincent has not given you. If something is missing, leave it out and list it in your final message.
3. **Verified figures only.** CEMA return visits: "more than 835,000" (never 630,000). The thesis used CHIRPS rainfall only (never "rainfall and temperature").
4. **The STAC Vegetation Index Pipeline project is removed.** Do not add it back.
5. **Voice:** first person, plain, short, honest about limitations. No emojis. Minimal styling. Keep the template's colours and components; do not redesign.
6. Keep the pages mobile-friendly. Check at 390 px wide as well as desktop.

## Still to do

1. Per-project GitHub links currently point to `https://github.com/vincentondeng`. Replace each with the real repo URL once Vincent gives it. Each write-up has a Resources section at the bottom.

Done: photo (`assets/img/profile.jpg`, also used as `og:image`), `files/Resume.pdf` (copy of `Ondeng_Master_CV.pdf`), CEMA dates confirmed as May to Sep 2025, internal links checked.

## Deploy to GitHub Pages

Root-relative paths only work when the site is served from the domain root. Ask Vincent which applies before pushing:

- **User site** (repo named `vincentondeng.github.io`, or a custom domain): works as is. Note the existing site there is Jekyll-based, so back it up on a branch first, then replace its contents with this site and add an empty `.nojekyll` file at the root.
- **Project site** (repo like `vincentondeng/portfolio`, served at `/portfolio/`): root-relative paths will break. Either use a custom domain, or convert every `/assets/...`, `/components/...`, `/pages/...` and `/` link to a path relative to each page.

Steps:

1. `git init` (if needed), commit everything, push to `main`.
2. In the repo: Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Wait for the Pages build, then open the live URL and click through every page on desktop and a phone-width window.
4. Report the live URL and anything still unresolved from the list above.

Do not push to or overwrite an existing repo without Vincent's go-ahead.
