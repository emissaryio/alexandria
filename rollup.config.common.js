import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export const plugins = [
  resolve({
    browser: true,
    preferBuiltins: true
  }),
  commonjs({
    include: 'node_modules/**'
  }),
  babel({
    exclude: 'node_modules/**'
  })
];

export default [{
  input: 'src/index.js',
  external: [
    'react',
    'react-dom',
    '@material-ui/core',
    '@material-ui/icons',
    '@material-ui/core/styles'
  ]
}];
