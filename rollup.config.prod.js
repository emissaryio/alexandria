import { minify } from 'uglify-es';
import { uglify } from 'rollup-plugin-uglify';

import config, { plugins } from './rollup.config.common';

const prodPlugins = plugins.concat([uglify({}, minify)]);

export default [
  // src/index.js
  Object.assign(config[0], {
    output: {
      file: 'dist/emissary-ui-kit.js',
      format: 'cjs'
    },
    plugins: prodPlugins
  })
];
