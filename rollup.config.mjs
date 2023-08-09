import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';

import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: { find: '@/', replacement: './src/' },
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        modules: true,
        inject: {
          insertAt: 'top',
        },
      }),
      peerDepsExternal(),
      resolve(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'es' }],
    plugins: [
      alias({
        entries: { find: '@/', replacement: './src/' },
      }),
      dts.default(),
    ],
    external: [/\.css$/],
  },
];
