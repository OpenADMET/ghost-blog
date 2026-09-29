# Contributing

This repo holds the OpenADMET Ghost theme (`content/themes/openadmet-theme/`) and shared site content such as `content/settings/routes.yaml` and brand images. Ghost itself is not committed; install it locally as below.

## Prerequisites

- [Node.js](https://nodejs.org/) v22 (required by the theme's build tooling)
- [Ghost CLI](https://ghost.org/docs/ghost-cli/): `npm install -g ghost-cli`

## Local Development Setup

1. **Install Ghost in a separate folder**
   ```bash
   mkdir ~/ghost-local && cd ~/ghost-local
   ghost install local
   ```
   The site runs at [http://localhost:2368](http://localhost:2368), with the admin panel at [http://localhost:2368/ghost](http://localhost:2368/ghost).

2. **Link the theme from this repo into Ghost**
   ```bash
   ln -s /path/to/ghost-blog/content/themes/openadmet-theme ~/ghost-local/content/themes/openadmet-theme
   ghost restart
   ```
   Then activate **openadmet-theme** in Ghost Admin → Settings → Design → Change theme.

3. **Stop Ghost** with `ghost stop` (run from `~/ghost-local`).

## Making Theme Changes

From `content/themes/openadmet-theme/`:

```bash
npm ci            # once, to install build tools
npx gulp          # rebuild assets on change and live-reload
npx gulp build    # one-off build of assets/built/
npx gscan .       # validate the theme against Ghost
npx gulp zip      # write dist/openadmet-theme.zip
```

Commit the rebuilt `assets/built/` files with your change. CI rebuilds them on every pull request and fails if they are out of date, and it runs `gscan` to catch theme errors. Zips are build output and are not committed.

## Releasing

1. Bump `version` in `content/themes/openadmet-theme/package.json`.
2. Add a `## X.Y.Z — YYYY-MM-DD` entry at the top of `content/themes/openadmet-theme/CHANGELOG.md`.
3. Commit, then tag and push:
   ```bash
   git tag -a openadmet-theme-vX.Y.Z -m "openadmet-theme X.Y.Z"
   git push origin master openadmet-theme-vX.Y.Z
   ```

The **Theme release** workflow checks that the tag matches `package.json`, validates and zips the theme, and publishes a GitHub release with the zip attached and the CHANGELOG entry as notes. Upload that zip in Ghost Admin → Settings → Design → Theme.

If the repo variable `GHOST_ADMIN_API_URL` and secret `GHOST_ADMIN_API_KEY` are set (from a Ghost Admin → Settings → Integrations custom integration), the workflow also uploads the zip to that Ghost site automatically. Because the theme keeps the same name, this replaces the live theme once it is active.
