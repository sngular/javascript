# @os3/tsconfig

Sharable [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) enforcing OS3 style guidelines.

## Getting started

Install:

```bash
npm install --save-dev @os3/tsconfig
```

Config for basic config:

```bash
echo "{ \"extends\": \"@os3/tsconfig\" }" > tsconfig.json"
```

Config for check only config:

```bash
echo "{ \"extends\": \"@os3/tsconfig/checkOnly\" }" > tsconfig.json"
```

After that you have to include:

- compilerOptions.outDir
- compilerOptions.rootDir
- include
- exclude

The final aspect of `tsconfig` should be like:

```json
{
	"extends": "@os3/tsconfig",
	"compilerOptions": {
		"outDir": "./dist-types",
		"rootDir": "."
	},
	"include": ["src"],
	"exclude": ["dist-types"]
}
```
