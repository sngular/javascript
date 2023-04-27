# @os3/lint-staged-config

Sharable [lint-staged](https://github.com/okonet/lint-staged#readme) config enforcing OS3 style guidelines.

## Getting started

```bash
npm install --save-dev @os3/lint-staged-config
echo "export * from \"@os3/lint-staged-config\";" > lint-staged.config.js
```

After that you can use [husky](https://typicode.github.io/husky/) to add a pre-commit hook to lint your code before each commit:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## Scripts

It will run prettier or eslit depends of the following rules:

- `*.{js,cjs,mjs,jsx,ts,tsx}`
  - `prettier --write`
  - `eslint --fix`
- `*.{md,html,css}`
  - `prettier --write`
