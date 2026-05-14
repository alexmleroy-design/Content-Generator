# Content Workflow App

A standalone static website for generating short-form bodybuilding content ideas and expanding selected hooks into full video packages.

## What It Does

- Generates 24 short-form content ideas.
- Shows platform priority, funnel role, pain point, format, audio, and rationale.
- Lets you filter by format.
- Lets you click any idea to expand a full package:
  - hook
  - on-screen text
  - body script
  - shot list
  - editing notes
  - website segue
  - caption
  - pinned comment
  - reply-comment strategy
- Includes a copy-caption button.

## Files

```text
content-workflow-app/
├── index.html
├── styles.css
├── app.js
├── _redirects
├── README.md
└── .gitignore
```

## Run Locally

Open `index.html` directly in your browser.

For a local server:

```bash
python3 -m http.server 4174
```

Then open:

```text
http://127.0.0.1:4174
```

## Deploy

This is a static site. You can deploy it with GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host.

For GitHub, upload the contents of this folder as the repo root.

For Vercel, `vercel.json` is included so the app serves `index.html` correctly.

If this folder is inside a larger repository, set the Vercel Root Directory to:

```text
content-workflow-app
```

If the files in this folder are already at the root of the GitHub repo, leave Root Directory blank.

For Netlify, `_redirects` is included so client-side fallback works if routes are added later.

## Note

This version uses built-in sample strategy data. The next upgrade is connecting the Generate button to a backend or automation that runs live trend research and your Codex `$content-generation` skill.
