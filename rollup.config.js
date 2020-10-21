import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'index.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: '@acompanha-legis/sdk',
    sourcemap: true,
  },
  external: ['axios', 'qs'],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'inline', include: ['modules/**/*'] }),
  ],
};
