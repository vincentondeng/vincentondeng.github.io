# Vincent Ondeng: academic portfolio

Personal academic portfolio site, built on the [academic-portfolio-template-lemos](https://github.com/rochanaro/academic-portfolio-template-lemos) template by Rochana R. Obadage (MIT licence, see `LICENSE`).

Plain HTML, CSS and Bootstrap 4. No build step. Pages use root-relative paths (`/assets/...`), so serve the folder from the site root, for example:

```bash
python3 -m http.server 8000
```

## Where things are

- `index.html`: home
- `pages/`: education, experience, skills, projects, publications
- `pages/projects/`: one write-up per project
- `components/`: shared header and footer
- `assets/css/project-detail.css`: styles for the project write-ups
- `files/Resume.pdf`: the resume linked from the home page
