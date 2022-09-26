# create-tlist

## Scaffolding Your First Project

With NPM:

```bash
$ npm create tlist
```

With Yarn:

```bash
$ yarn create tlist
```

With PNPM:

```bash
$ pnpm create tlist
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue project, run:

```bash
# npm 6.x
npm create tlist@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create tlist@latest my-vue-app -- --template vue

# yarn
yarn create tlist my-vue-app --template vue

# pnpm
pnpm create tlist my-vue-app --template vue
```

Currently supported template presets include:

- `vue`
- `vue-ts`

You can use `.` for the project name to scaffold in the current directory.