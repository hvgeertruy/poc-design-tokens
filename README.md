# How it works

## Sync from FIGMA

- Use `Tokens studio for figma` plugin (https://tokens.studio/)
- Update design tokens in figma
- push design tokens to repository in figma using `push to github`
- pull changes into `poc-design-tokens` using `git pull origin main`
- run `npm run build:design-tokens` in `poc-design-tokens`
- Run the app if you did not already using `cd my-app && npm run start`
- The app should update

Things to think about:

- When pushing / pulling design tokens, whether we do this on main branch or use a feature branch

## Sync from DEVELOPMENT

- Use `Tokens studio for figma` plugin (https://tokens.studio/)
- Update design tokens in `./tokens.json` in development
- commit & push design tokens to repository in development
- pull changes into `Tokens studio for figma` using `pull from github`
- The tokens should be updated in Figma
