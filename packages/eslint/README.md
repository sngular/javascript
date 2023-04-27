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

Now you can run `npm format` for formatting all your project code or `npm lint` to check project code formatting.

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
