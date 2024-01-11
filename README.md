# Javascript quality guidelines

In order to enforcing SNGULAR style guidelines. We created the following packages to help projects implement linters easily.

- [@sngular/commitlint-config](./packages/commitlint/README.md)
- [@sngular/eslint-config](./packages/eslint/README.md)
- [@sngular/lint-staged-config](./packages/lint-staged/README.md)
- [@sngular/prettier-config](./packages/prettier/README.md)
- [@sngular/semantic-release-config](./packages/semantic-release/README.md)
- [@sngular/tsconfig](./packages/tsconfig/README.md)

You can also configure [`.editorconfig`](./.editorconfig) file to ensure your code editor follow the style guide.

Some of the packages (commitlint & lint-staged) are created to work with [husky](https://typicode.github.io/husky/) to make git hook easy. We recommend to follow the [manual installation](https://typicode.github.io/husky/#/?id=manual) and then add the following hooks to your project:

- Hook for lint commit messages:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

- Hook for lint your files before commit

```bash
npx husky add .husky/pre-commit 'npx --no -- lint-staged'
```
