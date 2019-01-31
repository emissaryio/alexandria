import config, { plugins } from './rollup.config.common';

export default [
  // src/index.js
  Object.assign(config[0], {
    output: {
      file: 'dist/emissary-ui-kit.dev.js',
      format: 'cjs'
    },
    plugins
  })
];
