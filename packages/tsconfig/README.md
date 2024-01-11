# @sngular/tsconfig

Sharable [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) enforcing SNGULAR style guidelines.

## Getting started

Install:

```bash
npm install --save-dev @sngular/tsconfig
```

Config for basic config:

```bash
echo "{ \"extends\": \"@sngular/tsconfig\" }" > tsconfig.json
```

Config for check only config:

```bash
echo "{ \"extends\": \"@sngular/tsconfig/checkOnly\" }" > tsconfig.json
```

After that you have to include:

- compilerOptions.outDir
- compilerOptions.rootDir
- include
- exclude

The final aspect of `tsconfig` should be like:

```json
{
	"extends": "@sngular/tsconfig",
	"compilerOptions": {
		"outDir": "./dist-types",
		"rootDir": "."
	},
	"include": ["src"],
	"exclude": ["dist-types"]
}
```
