# @os3/lint-staged-config

Sharable [lint-staged](https://github.com/okonet/lint-staged#readme) config enforcing OS3 style guidelines.

## Getting started

### Install

```bash
npm install --save-dev @os3/lint-staged-config
```

### Configure

#### With ESLint

```bash
echo "module.exports = require('@os3/lint-staged-config');" > lint-staged.config.cjs
```

#### With ESLint & Prettier

```bash
echo "module.exports = require('@os3/lint-staged-config/prettier.cjs');" > lint-staged.config.cjs
```

### Hook

After that you can use [husky](https://typicode.github.io/husky/) to add a pre-commit hook to lint your code before each commit:

```bash
npx husky add .husky/pre-commit 'npx --no -- lint-staged'
```

## Scripts

Based on the selected configuration, it will execute different actions according to the following rules:

### [With ESLint](#with-eslint)

- `*.{js,cjs,mjs,jsx,ts,tsx}`
  - `eslint --fix`

### [With ESLint & Prettier](#with-eslint--prettier)

- `*.{js,cjs,mjs,jsx,ts,tsx}`
  - `eslint --fix`
  - `prettier --write`
- `*.{md,html,css}`
  - `prettier --write`
