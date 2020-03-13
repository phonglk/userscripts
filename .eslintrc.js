const header = require('./src/next/sticker/header.json');
const grant = header.grant || [];
const globVars = grant.reduce((glob, v) => ({ ...glob, [v]: 'readonly' }), {});

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier', 'standard-preact'],
  globals: {
    ...globVars,
    process: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
