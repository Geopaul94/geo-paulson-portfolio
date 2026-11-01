# Geo Paulson portfolio

Responsive personal portfolio with dark/light themes, project highlights and downloadable CVs. Plain HTML, CSS and JavaScript; no dependencies or build step.

## Run locally

Clone this repository, enter its directory, and run:

```sh
python3 -m http.server 8765
```

Open http://localhost:8765/. All site files are in the repository root.

## Publish

In GitHub Settings → Pages, choose Deploy from a branch, main, / (root), then Save. Once deployment succeeds, visit https://geopaul94.github.io/geo-paulson-portfolio/ . Subsequent commits to main trigger redeployment.

## Files

- index.html: content, metadata, links and anchors.
- styles.css: responsive design and themes.
- script.js: theme preference and active navigation.
- favicon.svg: site icon.
- Both Geo_Paulson_*_CV.pdf files: original CVs and downloads.
- AGENTS.md: project context, approved design, source caveats and validation instructions for AI coding tools. Read it before making changes.

Keep file links relative to the repository root. There are no dist/ or assets/ directories.

## Validation

Run `node --check script.js`. Check local links, section navigation, both themes, both CV downloads, desktop/mobile layouts and browser errors. See AGENTS.md for the complete contributor checklist.

## Content

The two supplied CVs are the factual sources. The design adapts the dark/purple style of https://amkrys.github.io/#about using Geo’s own content and implementation. A personal portrait remains optional; the hero uses initials. No analytics, trackers or contact-form backend.
