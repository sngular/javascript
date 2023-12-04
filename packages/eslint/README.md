# @os3/eslint-config

Sharable [eslint](https://eslint.org/) config enforcing OS3 style guidelines. Uses:

- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier): Runs Prettier as an ESLint rule.
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): Lint ES2015+ (ES6+) import/export syntax
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc): JSDoc linting rules for ESLint
- [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html): lint inline scripts in html files.
- [eslint-plugin-markdown](https://www.npmjs.com/package/eslint-plugin-markdown): lint scripts inside markdown files.

## Getting started

```bash
npm install --save-dev @os3/eslint-config
echo "module.exports = { extends: ['@os3'] };" > .eslintrc.cjs
```

If you want to use it with **jsdoc** you need to modify your `.eslintrc.cjs` file:

```js
module.exports = { extends: ['@os3', '@os3/eslint-config/jsdoc.cjs'] };
```

If you want to use it with **prettier** you need to modify your `.eslintrc.cjs` file:

```js
module.exports = { extends: ['@os3', '@os3/eslint-config/prettier.cjs'] };
```

The prettier config must be the last one in the extends array, because it overrides some conflicting ESLint formatting rules.

**Note:** The order of the extends is important, because the last one will override the previous ones.

Once you have it installed and configured you can add the following script into your `package.json`:

```json
{
	"scripts": {
		"lint": "npm run lint:eslint",
		"lint:eslint": "eslint .",
		"format": "npm run format:eslint",
		"format:eslint": "npm run lint:eslint -- --fix"
	}
}
```

Now you can run `npm run format` for formatting all your project code or `npm run lint` to check project code formatting.

### VSCode recommendation

If you prefer to automate ESLint fix execution, you can add this configuration to your `VSCode settings.json`, and it will be executed every time you save a file.

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

## Rules

We are following the following recommendations:

- [eslint:recommended](https://eslint.org/docs/latest/rules/)
- plugin:prettier/recommended
- plugin:import/recommended
- plugin:markdown/recommended
- plugin:jsdoc/recommended

And a specific `import/order` rule for the `plugin:import` that you can see at [index.cjs](index.cjs).

### Indent

We decide to use tabs instead of spaces that recommends eslint.

Reasons:

- logical: that's what they're used for.
- file size: tab is just 1 character.
- accessibility: you can customize your own indentation width.
