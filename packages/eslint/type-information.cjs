module.exports = {
	// Linting with Type Information: https://typescript-eslint.io/linting/typed-linting/
	extends: ['plugin:@typescript-eslint/recommended-type-checked'],
	root: true,
	parserOptions: {
		project: './tsconfig.json',
	},
};
