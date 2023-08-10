import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import image from '@rollup/plugin-image';

import packageJson from './package.json';
import * as path from 'path';

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
        entries: { '@': path.resolve(__dirname, './src') },
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      peerDepsExternal(),
      resolve(),
      typescript({ tsconfig: './tsconfig.json' }),
      image(),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'es' }],
    plugins: [
      alias({
        entries: { '@': path.resolve(__dirname, './src') },
      }),
      dts.default(),
    ],
    external: [/\.css$/],
  },
];
