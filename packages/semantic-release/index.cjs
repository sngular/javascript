module.exports = {
	branches: ['main'],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/npm',
		[
			'@semantic-release/gitlab',
			{
				gitlabUrl: 'https://gitlab.sngular.com',
			},
		],
		[
			'@semantic-release/git',
			{
				assets: ['../../package-lock.json', 'package.json', 'CHANGELOG.md'],
			},
		],
	],
};
