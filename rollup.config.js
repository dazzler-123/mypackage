import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
    babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    commonjs({
      ignoreGlobal: true,
      include: /node_modules/,
    }),
    postcss({
      plugins: [autoprefixer(), cssnano()],
      extract: true,
      minimize: true,
      verbose: true,
    }),
    terser(),
    
  ],
  onwarn: (warning, warn) => {
    // Skip certain warnings
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
    // Use default for everything else
    warn(warning);
  },
};
