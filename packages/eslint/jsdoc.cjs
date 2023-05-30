module.exports = {
	extends: ['./index.cjs', 'plugin:jsdoc/recommended'],
	plugins: ['jsdoc'],
	settings: {
		jsdoc: {
			mode: 'typescript',
		},
	},
	rules: {
		'jsdoc/require-description-complete-sentence': ['error'],
	},
};
