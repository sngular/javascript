# @os3/prettier-config

Sharable [prettier](https://prettier.io/) config enforcing OS3 style guidelines.

## Getting started

```bash
npm install --save-dev @os3/prettier-config
echo "module.exports = require(\"@os3/prettier-config\");" > prettier.config.cjs
```

Once you have it installed and configured you can add the following script into your `package.json`:

```json
{
	"scripts": {
		"lint": "npm run lint:prettier",
		"lint:prettier": "prettier --check .",
		"format": "npm run format:prettier",
		"format:prettier": "npm run lint:prettier -- --write"
	}
}
```

Now you can run `npm format` for formatting all your project code or `npm lint` to check project code formatting.

## Rules

### Indent

We decide to use tabs instead of spaces that recommends eslint.

Reasons:

- logical: that's what they're used for.
- file size: tab is just 1 character.
- accessibility: you can customize your own indentation width.
