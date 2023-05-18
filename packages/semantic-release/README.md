# @os3/semantic-release-config

Sharable [semantic-release](https://semantic-release.gitbook.io/semantic-release/) config enforcing OS3 style guidelines. Uses:

- [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer)
- [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
- [@semantic-release/gitlab](https://github.com/semantic-release/gitlab)
- [@semantic-release/changelog](https://github.com/semantic-release/changelog)
- [@semantic-release/npm](https://github.com/semantic-release/npm)
- [@semantic-release/git](https://github.com/semantic-release/git)

## Getting started

Install:

```bash
npm install --save-dev @os3/semantic-release-config
```

Config for Single package repo:

```bash
echo "module.exports = require(\"@os3/semantic-release-config\");" > release.config.cjs
```

config for monorepo:

```bash
echo "module.exports = require(\"@os3/semantic-release-config/monorepo\");" > release.config.cjs
```
