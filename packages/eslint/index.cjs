module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:markdown/recommended',
		'plugin:jsdoc/recommended',
	],
	plugins: ['prettier', 'import', 'jsdoc', 'html', 'markdown'],
	settings: {
		jsdoc: {
			mode: 'typescript',
		},
	},
	env: {
		browser: true,
		node: true,
		es2022: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
	},
	overrides: [
		{
			files: ['**/*.cjs'],
			env: {
				commonjs: true,
			},
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			// Enable the Markdown processor for all .md files.
			files: ['**/*.md'],
			processor: 'markdown/markdown',
		},
		{
			// Target ```js code blocks in .md files.
			files: ['**/*.md/*.js'],
			rules: {
				'no-console': 'off',
				'import/no-unresolved': 'off',
			},
		},
	],
};
