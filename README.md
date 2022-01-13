# DDEV pull wp generator

Generate DDEV config files to pull a site via SSH and git-manage your child theme.

State: _Work in progress_

## TODOs

- [ ] easier config.yaml, see https://twitter.com/randyfay/status/1481745262640914433
- [ ] Move config values to provider script, config.yaml requires 'ddev restart' every time?
- [x] add all form fields to store
- [ ] ask fellow devs if we just can't use reverse rsync which includes from .gitignore with path instead of pattern and exludes everything else
- [ ] add screencast
- [ ] optional: is it possible to generate a folder, zip it & download it?

## How was this created?

- npm init svelte@next
- npm install
- npm i bootstrap sass autoprefixer postcss
- npm i -D @sveltejs/adapter-static@next
- npm i -D svelte-preprocess
- add configs to svelte.config.json, \_\_layout.svelte, etc.
- Important: add `static/.nojekyll`

## License

- my own code is public domain, have fun forking!
- check out package.json for third party (open source) packages and their respective licenses

<hr>

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
