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
echo "module.exports = { extends: ['@os3/eslint-config'] };" > .eslintrc.cjs
```

If you want to use extend the config with other tools like prettier, jsdoc or type information, you can take a look at [Configurations](#configurations) section.

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

## Configurations

### Default

The default configuration is the one that you can see at [index.cjs](index.cjs). It expect to be used in a source type module, and override environment to commonjs for files with `.cjs` extension. And a specific `import/order` rule for the `plugin:import`.

### Import order

It will split imports in 3 groups:

- External imports
- Internal imports
- Type imports

#### Indent

We decide to use tabs instead of spaces that recommends eslint.

Reasons:

- logical: that's what they're used for.
- file size: tab is just 1 character.
- accessibility: you can customize your own indentation width.

### Prettier

If you want to use prettier with eslint you need to add this configuration to your `.eslintrc.cjs` file:

```js
module.exports = { extends: ['@os3/eslint-config', '@os3/eslint-config/prettier.cjs'] };
```

The prettier config must be the last one in the extends array, because it overrides some conflicting ESLint formatting rules.

### JSDoc

If you want to use jsdoc with eslint you need to add this configuration to your `.eslintrc.cjs` file:

```js
module.exports = { extends: ['@os3/eslint-config', '@os3/eslint-config/jsdoc.cjs'] };
```

### Type Information

If you want to work with types using typescript or jsdoc with eslint you need to add this configuration to your `.eslintrc.cjs` file:

```js
module.exports = { extends: ['@os3/eslint-config', '@os3/eslint-config/type-information.cjs'] };
```

Additionally, you will need `tsconfig.json` files, that you can find in the package [@os3/tsconfig](../tsconfig/README.md). Eslint types configuration will use the `tsconfig.json` file. If you need to use different configuration take a look [Linting with Type Information](https://typescript-eslint.io/linting/typed-linting/).

### All together

If you want to use all together you need to add this configuration to your `.eslintrc.cjs` file:

```js
module.exports = {
	extends: [
		'@os3/eslint-config',
		'@os3/eslint-config/type-information.cjs',
		'@os3/eslint-config/jsdoc.cjs',
		'@os3/eslint-config/prettier.cjs',
	],
};
```

If you are planning to include into an existing project, we recommend to include them one by one to solve the linting errors step by step. The recommended include order is:

1. `@os3/eslint-config`
2. `@os3/eslint-config/prettier.cjs`
3. `@os3/eslint-config/jsdoc.cjs`
4. `@os3/eslint-config/type-information.cjs`

This will help you to lint your code and fix the errors easily.
