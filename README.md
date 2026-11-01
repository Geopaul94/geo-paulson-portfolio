# Geo Paulson portfolio

A responsive, dependency-free static website. All deployable files are in `dist/`.

## Preview

From this directory, run `python3 -m http.server 8765 --directory dist`, then open http://localhost:8765. Or open `dist/index.html` directly for an offline preview.

## Deploy

Upload the contents of `dist/` to any static host (GitHub Pages, Netlify, Cloudflare Pages). No build command, package install or environment variables are required. For hosts with an output directory setting, choose `dist`.

For GitHub Pages, place the contents of `dist` in the publishing branch root and choose that branch in repository Settings → Pages. Relative asset paths support project subdirectories.

The local Sites hosting configuration is excluded from this repository; it is not required by other hosts.

## Edit

Content and links: `dist/index.html`. Design and responsive rules: `dist/styles.css`. Theme preference: `dist/script.js`. Both original CVs: `dist/assets/`.

## Sources and verification

Content is based on the two supplied Geo Paulson CVs. The Software Engineer CV provides the specific profile and app URLs; its personal email and phone are retained for this personal portfolio. Education and employment status are reproduced as stated in those CVs, not independently confirmed.

The reference https://amkrys.github.io/#about was inspected for section hierarchy, navigation and typography. The revised design follows the reference’s dark/purple palette, pill navigation, numbered sections, biography/facts layout and text-led project cards. All content and code are tailored to Geo. A personal portrait has not yet been supplied; the hero uses initials.

Verified 2026-10-28: Debt Tracker Google Play listing; Ghonestapps developer profile (HTTP 200); second developer profile, identified as oortech (HTTP 200); Geopaul94 GitHub profile (HTTP 200). LinkedIn blocked verification (HTTP 999) and is omitted. No unverified project repositories or store URLs were invented. The Google Play text and CV differ about cloud backup; the site follows the CV's backup/restore feature description and makes no absolute data-privacy claims. Download counts are omitted to avoid a stale metric.

All assets are local. The page content and CVs work offline when downloaded; external profile links and email/phone handlers require their respective services/apps. Theme preferences gracefully fall back if local storage is unavailable. No analytics, trackers or contact-form backend.
