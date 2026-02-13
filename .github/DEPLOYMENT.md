# CI/CD and deployment

## Environments

- **Staging**: deploys from the `staging` branch to GitHub Pages. Production deployment is not configured.

## One-time setup (required)

1. **Enable GitHub Pages and set source to Actions**
   - Open your repo on GitHub → **Settings** → **Pages** (left sidebar).
   - Under **Build and deployment**:
     - **Source**: select **GitHub Actions** (not "Deploy from a branch").
   - Save. You do **not** need to pick a branch or folder.
   - Without this, the deploy step will fail with **404 / "Ensure GitHub Pages has been enabled"**.

2. **Environments (optional)**
   - Repo **Settings → Environments**
   - Add `staging` if you want branch protection or approval gates for staging deploys.

## Workflows

| Workflow            | Trigger        | Action                          |
|--------------------|----------------|---------------------------------|
| **CI**             | Push/PR to `main`, `staging` | Lint + build (no deploy)        |
| **Deploy Staging** | Push to `staging`            | Install → lint → build → deploy to Pages   |

Deploy Staging runs in order: **install** (npm ci) → **lint** → **build** → **deploy** (staging).

## URLs

After deployment, the site is available at:

- **Project site**: `https://<owner>.github.io/<repo>/`

Ensure `VITE_BASE_PATH` in the workflow matches your repo name (it uses `/${{ github.event.repository.name }}/` by default).

## Branch strategy

- Push to `staging` to deploy the staging site to GitHub Pages.
- `main` does not trigger any deployment (production is skipped).

## Troubleshooting

### Deploy fails with 404 / "Ensure GitHub Pages has been enabled"

- Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
- Direct link: `https://github.com/<owner>/<repo>/settings/pages` (replace `<owner>` and `<repo>`).
- Re-run the failed workflow (Actions → select the run → "Re-run all jobs").
