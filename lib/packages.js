#!/usr/bin/env node
const Basic = {
  global: ['babel-eslint'],
  dependencies: ['axios'],
  devDependencies: [
    'babel-cli',
    'babel-eslint',
    'babel-jest',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-runtime',
    'babel-plugin-module-resolver',
    'babel-preset-env',
    'babel-preset-jest',
    'babel-preset-react',
    'commitizen',
    'cross-env',
    'cz-conventional-changelog',
    'eslint',
    'eslint-config-standard',
    'eslint-config-standard-react',
    'eslint-plugin-html',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-react',
    'eslint-plugin-standard',
    'husky',
    'jest',
    'lint-staged',
    'per-env',
    'prettier-standard',
    'rimraf',
    '@commitlint/cli',
    '@commitlint/config-conventional'
  ]
}

const Fastify = Object.assign(Basic, {
  dependencies: Basic.dependencies.concat([
    'convict',
    'dotenv',
    'glob',
    'fastify'
  ])
})

const React = {
  global: Basic.global.concat(['create-react-app']),
  dependencies: Basic.dependencies.concat([
    'antd',
    'ant-design-pro',
    'react',
    'react-dom',
    'react-router-component',
    'react-scripts',
    'styled-components'
  ]),
  devDependencies: Basic.devDependencies.concat([
    'babel-plugin-import',
    'enzyme',
    'enzyme-adapter-react-16',
    'jest-enzyme',
    'react-app-rewire-eslint',
    'react-app-rewire-less',
    'react-app-rewired',
    'react-test-renderer'
  ])
}

module.exports = {
  Basic,
  Fastify,
  React
}
