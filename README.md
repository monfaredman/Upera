# uperatv

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### Prerequisites

- **Node.js 18.20.8 (LTS)** – run `nvm use` (the repo ships with an `.nvmrc`) before installing dependencies. Newer Node 22+ releases are incompatible with `sharp` and will force a source build that fails on Apple Silicon.
- **npm 10.x** – bundled with Node 18.20.8 when installed via nvm.
- **Python 3.11 or lower** – automatically used by `node-gyp` when you run `nvm use` and install the matching Xcode command-line tools.

If `nvm use` reports the version is missing, install it once via `nvm install 18.20.8` and re-run `nvm use` before `npm install`.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
