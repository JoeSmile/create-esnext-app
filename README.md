# create-esnext-app

Opinionated ESNext application boilerplate generator.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Styled with Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://img.shields.io/npm/v/create-esnext-app.svg)](https://www.npmjs.com/package/create-esnext-app)
[![npm downloads](https://img.shields.io/npm/dt/create-esnext-app.svg)](https://www.npmjs.com/package/create-esnext-app)
[![dependencies](https://david-dm.org/jimzhan/create-esnext-app.svg)](https://david-dm.org/jimzhan/create-esnext-app.svg)

## Supported Templates 

* [Basic](#basic---esnext-boilerplate) - Foundation of every ESNext based application.
* [Fastify](#fastify-server-boilerplate) - Fastify based API server template.
* [React](#react--antd-boilerplate) - React based template (without configuration needed).

## Installation

```sh
npm install -g create-esnext-app
```

## Update

```sh
npm update -g create-esnext-app
```

## Create Biolerplate

```sh
create-esnext-app
```

## Templates

###  Basic - ESNext Boilerplate

* [Babel](https://babeljs.io/) settings with supports includes:
  * [Class properties](https://babeljs.io/docs/plugins/transform-class-properties/)
  * [Decorators](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
  * [Babel Env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
  * [Babel Jest](https://github.com/facebook/jest/tree/master/packages/babel-jest)
  * [Module Resolver](https://github.com/tleunen/babel-plugin-module-resolver) for `src`.
* [Commitizen](https://github.com/commitizen/cz-cli) for better commit message (via `npm run commit`).
  * [Conventional Changelog](https://github.com/commitizen/cz-conventional-changelog) as commit message template.
  * [CommitLint](https://github.com/marionebl/commitlint) as commit message format validator (via `commitmsg` hook provided by `husky`)
* [ESLint](https://github.com/eslint/eslint) with:
  * [StandardJS](https://github.com/standard/eslint-config-standard).
  * [VSCode](https://code.visualstudio.com/) supports.
  * [Jest](https://github.com/facebook/jest).
* [Jest](https://github.com/facebook/jest) with [VSCode](https://code.visualstudio.com/) supports.
* [Prettier](https://github.com/prettier/prettier) for code formatting (`precommit` and `VSCode`).
* [Husky](https://github.com/typicode/husky) for GIT hooks.
* [per-env](https://github.com/ericclemmons/per-env) for npm scripts.


### Fastify Server Boilerplate

* Foundation extended from [Basic](#basic---esnext-boilerplate).
* [Fastify](https://github.com/fastify/fastify) - An modern efficient server.
* [Convict](https://github.com/mozilla/node-convict) - expands on the standard pattern of configuring.


### React + AntD Boilerplate

* Foundation extended from [Basic](#basic---esnext-boilerplate).
* [create-react-app](https://github.com/facebookincubator/create-react-app) based React boilerplate.
* [react-app-rewired](https://github.com/timarney/react-app-rewired) for tweaking the `CRA` webpack config(s) without ejecting.
* [Enzyme](https://github.com/airbnb/enzyme) testing utilities for React.
* [Ant Design](https://github.com/ant-design/ant-design/) An enterprise-class UI design language and React-based implementation.


## VSCode Supports (Optional)
* Required Extensions:
  - [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [JavaScript Standard Style](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)
  - [Prettier-Standard](https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode)
* Workspace settings (via `.vscode/settings.json`).
* Chrome based debugger (via `.vscode/launch.json`).
