# Raghavender Reddy Manchireddy | Portfolio

A static React portfolio built with Vite, Tailwind CSS, and Lucide. The professional content lives in `src/content.js` and the section components are in `src/main.jsx`.

## Local development

Use Node.js 24 and npm. Run these commands from the repository root.

```sh
npm ci
npm run dev -- --host 0.0.0.0
```

Open http://localhost:5173/my-portifolio/ in a browser on the same machine. In a cloud workspace, forward port 5173 and open `/my-portifolio/` on the forwarded URL.

```sh
npm run lint
npm run build
npm run preview -- --host 0.0.0.0
```

The production preview uses port 4173 and the same path. The build output is in `dist/`.

## GitHub Pages

1. Review the site locally, then merge the reviewed files into the `main` branch of `RaghavenderManchireddy/my-portifolio`. If this repository is empty, an initial commit on `main` is required before you can open a pull request against it.
2. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**. This requires repository administration access and a plan that supports Pages for the repository's visibility.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow** and select `main`. Approve the deployment if the `github-pages` environment requires a reviewer. On subsequent pushes to `main`, the workflow builds and deploys automatically.
4. After the workflow succeeds, open https://raghavendermanchireddy.github.io/my-portifolio/ and check the home page, navigation, and project cards.

If the repository name changes, update the Vite base path and the canonical and social URLs in `index.html`.
