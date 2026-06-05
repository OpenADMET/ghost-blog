# Local Development Setup

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or v20
- [Ghost CLI](https://ghost.org/docs/ghost-cli/): `npm install -g ghost-cli`

## Getting Started

1. **Clone the repo and navigate into it**
   ```bash
   git clone <repo-url>
   cd openadmet-ghost
   ```

2. **Update the config with your local path**

   Open `config.development.json` and update the `contentPath` and database `filename` to match where you cloned the repo:
   ```json
   "database": {
     "connection": {
       "filename": "/YOUR/LOCAL/PATH/openadmet-ghost/content/data/ghost-local.db"
     }
   },
   "paths": {
     "contentPath": "/YOUR/LOCAL/PATH/openadmet-ghost/content"
   }
   ```

3. **Start Ghost**
   ```bash
   ghost start
   ```

4. **View the site** at [http://localhost:2368](http://localhost:2368)

   Admin panel: [http://localhost:2368/ghost](http://localhost:2368/ghost)

5. **Stop Ghost**
   ```bash
   ghost stop
   ```

## Making Theme Changes

The theme lives in `content/themes/openadmet-theme/`. After editing:

1. Zip the theme (run from `content/themes/`):
   ```bash
   cd content/themes
   zip -r openadmet-theme.zip openadmet-theme --exclude "openadmet-theme/node_modules/*" --exclude "*.DS_Store"
   ```

2. Upload `openadmet-theme.zip` in Ghost Admin → Settings → Design → Theme.
