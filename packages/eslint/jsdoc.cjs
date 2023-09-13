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
		// support for https://custom-elements-manifest.open-wc.org/
		'jsdoc/check-tag-names': [
			'warn',
			{
				definedTags: [
					'attr',
					'attribute',
					'prop',
					'property',
					'part',
					'csspart',
					'slot',
					'cssprop',
					'cssproperty',
					'fires',
					'event',
					'tag',
					'tagname',
					'summary',
					'internal',
					'ignore',
					'defaul',
				],
			},
		],
	},
};
