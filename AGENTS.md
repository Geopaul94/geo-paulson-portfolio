# Geo Paulson portfolio — AI contributor guide

## Purpose and approved design
Personal portfolio for Geo Paulson, a software engineer in Kochi. Preserve the approved dark background, purple accents, bold sans-serif type, sticky rounded navigation, numbered sections, biography beside a facts panel, and text-led project cards. Reference: https://amkrys.github.io/#about. Use Geo’s own content; do not copy the reference person’s photo, achievements or testimonials. The earlier ivory/green design was rejected.

## Architecture
Dependency-free static HTML, CSS and vanilla JavaScript. No framework, package manager, build step, backend, database, analytics or secrets. All deployable files are at the repository ROOT:
- index.html: content, metadata, links and section anchors.
- styles.css: tokens, responsive layouts, both themes and reduced motion.
- script.js: theme persistence and active navigation.
- favicon.svg: GP icon.
- Geo_Paulson_Software_Engineer_CV.pdf and Geo_Paulson_Flutter_CV.pdf: original factual sources and downloads.
Use relative root-level file links. A manual upload flattened the former dist/assets directories; do not restore those prefixes without moving files too.

## Facts and content
Both CVs are the factual sources. Copy lists Software Engineer at Laennec AI, April 2025–Present; BCA at Mangalayatan University, 2023–Ongoing; Brototype Flutter program, 2023–2025. These statuses are supplied, not independently confirmed. Ask before changing facts.
Projects: Debt Tracker, Klik, Ultimate Pet Lover’s App, and team contributions to Zorgm Pro, Zorgm Health Coach and Zorgm Digital Steth. Never imply sole ownership of employer products. Do not invent metrics, testimonials, job availability or URLs.
Personal contact intentionally follows the CV: geopaul94@gmail.com and +91 8589837557. Do not replace these with company defaults.
Verified 2026-10-28: Debt Tracker Play listing, Ghonestapps and oortech Play developer profiles, and Geopaul94 GitHub. LinkedIn verification was blocked and the link omitted. Recheck links when changing them. The CV describes Drive backup while older Play text differed: avoid absolute privacy claims and stale download counts.
A portrait has not yet been supplied. The hero uses initials. A user-supplied portrait is the remaining optional enhancement.

## Preview and hosting
Run python3 -m http.server 8765 from the repository root and open http://localhost:8765/. No installation or build required.
Repository: https://github.com/Geopaul94/geo-paulson-portfolio
GitHub Pages target: deploy from main, / (root). Expected URL: https://geopaul94.github.io/geo-paulson-portfolio/ . Verify Pages status before claiming success. Commits to the configured branch trigger deployment.

## Change rules and verification
Read git status first; preserve unrelated changes. Make focused edits. Do not add frameworks, dependencies or redesigns unless requested. Preserve section anchors, CV links, keyboard focus, contrast, light mode and reduced-motion support.
Run node --check script.js. Verify all local href/src files and anchor targets. Check desktop, 390px and 320px layouts, both themes, active navigation, both PDF downloads and console errors. After deployment, verify live HTML, CSS, JS, favicon and PDFs. Disclose checks not performed.
Theme persistence uses localStorage with error handling. Content remains available without JS. Email and phone links open external handlers; there is no contact-form backend.
Keep this guide and README consistent with the actual repository. Never commit credentials, local tool configuration, scratch files or machine-specific paths. Commit/push only when authorized, using concise conventional commit messages.
