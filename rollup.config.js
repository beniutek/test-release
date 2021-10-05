import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const name = 'TestRelease';

const extensions = [
  '.js', '.ts',
];

const babelConfig = {
  babelHelpers: 'bundled',
  include: ['src/**/*'],
  extensions
}

export default {
  input: './src/main.js',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en/#external
  external: [],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel(babelConfig),
  ],

  output: [
    { file: pkg.main, format: 'umd', name },
    { file: pkg.module, format: 'es' },
    { file: pkg.browser, format: 'iife', name },
  ],
};