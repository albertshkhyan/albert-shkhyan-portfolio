# CI/CD and deployment

## Overview

- **CI**: Runs on every push and PR to `main` and `staging`. Lint + build only (no deploy).
- **Deploy Staging**: Runs on push to `staging`. Install → lint → build → deploy to GitHub Pages.
- **Production**: Not configured; add a new workflow when needed.

## Design (scalable and best practices)

| Practice | How it's done |
|----------|----------------|
| **Single source of truth for build** | Reusable composite action `.github/actions/build` (install → lint → build). CI and Deploy Staging both use it. |
| **Consistent Node version** | `.nvmrc` (e.g. `20`). Local and CI use the same version via `node-version-file`. |
| **Minimal permissions** | CI: `contents: read`. Deploy: `contents: read`, `pages: write`, `id-token: write`. |
| **Concurrency** | CI and deploy use `concurrency` so duplicate runs can be cancelled. |
| **Adding production later** | Add `deploy-production.yml` that calls the same build action and deploys (e.g. to Pages or another host). |

## One-time setup (required)

1. **GitHub Pages**
   - **Settings → Pages** → **Build and deployment** → **Source**: **GitHub Actions**.
   - Without this, deploy fails with **404 / "Ensure GitHub Pages has been enabled"**.

2. **Allow `staging` to deploy to github-pages**
   - **Settings → Environments** → open **github-pages**.
   - Under **Deployment branches and tags**, ensure **staging** is allowed (click **"+ Add deployment branch or tag rule"** and add `staging` if only `main` is listed).
   - Otherwise you'll get: *"Branch 'staging' is not allowed to deploy to github-pages due to environment protection rules."*

## Workflows

| Workflow | Trigger | Jobs |
|----------|---------|------|
| **CI** | Push/PR to `main`, `staging` | `lint & build` (uses build action) |
| **Deploy Staging** | Push to `staging` | `install → lint → build` (uses build action) → `Upload artifact` → `deploy (staging)` |

## URLs

- **Staging (GitHub Pages):** `https://<owner>.github.io/<repo>/`

`VITE_BASE_PATH` is set from the repo name in the workflows.

## Branch strategy

- **staging**: Push to deploy staging to GitHub Pages.
- **main**: No deploy; use for merging after staging is validated. Add a production workflow when needed.

## Scaling: adding production

1. Add `.github/workflows/deploy-production.yml`.
2. Trigger on `main` (or `release`).
3. Reuse the same build action; add a deploy step (e.g. `deploy-pages` again or another provider).
4. Optionally add a `production` environment and required reviewers.

## Troubleshooting

### Deploy fails with 404 / "Ensure GitHub Pages has been enabled"

- **Settings → Pages** → **Source** = **GitHub Actions**.
- Link: `https://github.com/<owner>/<repo>/settings/pages`
- Re-run the failed workflow.

### Deploy fails: "Branch 'staging' is not allowed to deploy to github-pages"

- The **github-pages** environment only allows certain branches. Add **staging** to the allowed list.
- **Settings → Environments → github-pages** → **Deployment branches and tags** → **"+ Add deployment branch or tag rule"** → add the **staging** branch → save.
- Re-run the failed workflow.

### Node version mismatch

- Update `.nvmrc` and ensure local `node -v` matches. CI uses `.nvmrc` automatically.
