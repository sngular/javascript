# @os3/commitlint-config

Sharable [commitlint](https://commitlint.js.org/) config enforcing OS3 style guidelines. Uses:

- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional): Shareable commitlint config enforcing conventional commits.

## Getting started

```bash
npm install --save-dev @os3/commitlint-config
echo "module.exports = { extends: ['@os3'] };" > commitlint.config.cjs
```

After that you can use [husky](https://typicode.github.io/husky/) to add a commit-msg hook to lint your commit messages:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

To help adoption you can use [@commitlint/prompt-cli](https://commitlint.js.org/#/guides-use-prompt) to write commit messages faster and ensures they adhere to the commit convention.

```bash
npm install --save-dev @commitlint/{cli,prompt-cli}
```

## Rules

We are following the following recommendations @commitlint/config-conventional

### body-max-line-length

We decide to remove this limit to allow add release notes in the commit body.
