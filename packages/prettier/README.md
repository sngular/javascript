# @os3/prettier-config

Sharable [prettier](https://prettier.io/) config enforcing OS3 style guidelines.

## Getting started

```bash
npm install --save-dev @os3/prettier-config
echo "module.exports = require(\"@os3/prettier-config\");" > prettier.config.cjs
```

## Rules

We are following the following recommendations:

- [eslint:recommended](https://eslint.org/docs/latest/rules/)
- plugin:prettier/recommended
- plugin:import/recommended
- plugin:markdown/recommended
- plugin:jsdoc/recommended

### Indent

We decide to use tabs instead of spaces that recommends eslint.

Reasons:

- logical: that's what they're used for.
- file size: tab is just 1 character.
- accessibility: you can customize your own indentation width.
