# Javascript quality guidelines

In order to enforcing OS3 style guidelines. We created the following packages to help projects implement linters easily.

- [@os3/prettier-config](./packages/prettier/README.md)
- [@os3/eslint-config](./packages/eslint/README.md)
- [@os3/commitlint-config](./packages/commitlint/README.md)
- [@os3/lint-staged-config](./packages/lint-staged/README.md)
- [@os3/semantic-release-config](./semantic-release/README.md)

You can also configure [`.editorconfig`](./.editorconfig) file to ensure your code editor follow the style guide.

Some of the packages (commitlint & lint-staged) are created to work with [husky](https://typicode.github.io/husky/) to make git hook easy. We recomend to follow the [manual installation](https://typicode.github.io/husky/#/?id=manual) and then add the following hooks to your project:

- Hook for lint commit messages:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

- Hook for lint your files before commit

```bash
npx husky add .husky/pre-commit 'npx --no -- lint-staged'
```
