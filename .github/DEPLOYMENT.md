# CI/CD and deployment

## Environments

- **Staging**: deploys from the `staging` branch to GitHub Pages.
- **Production**: deploys from the `main` branch to GitHub Pages.

## One-time setup

1. **GitHub Pages**
   - Repo **Settings → Pages**
   - **Source**: choose **GitHub Actions**.

2. **Environments (optional)**
   - Repo **Settings → Environments**
   - Add `staging` and `production` if you want branch protection or approval gates.

## Workflows

| Workflow            | Trigger        | Action                          |
|--------------------|----------------|---------------------------------|
| **CI**             | Push/PR to `main`, `staging` | Lint + build (no deploy)        |
| **Deploy Staging** | Push to `staging`            | Lint + build + deploy to Pages   |
| **Deploy Production** | Push to `main`           | Lint + build + deploy to Pages   |

## URLs

After deployment, the site is available at:

- **Project site**: `https://<owner>.github.io/<repo>/`

Ensure `VITE_BASE_PATH` in the workflows matches your repo name (it uses `/${{ github.event.repository.name }}/` by default).

## Branch strategy

- Use `staging` for preview; merge to `main` when ready for production.
- Both branches deploy to the same GitHub Pages site; the last successful deploy wins.
