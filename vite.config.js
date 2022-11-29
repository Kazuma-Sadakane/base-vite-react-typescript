import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import envCompilable from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgrPlugin from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';
import {NodeGlobalsPolyfillPlugin as nodeGlobalsPolyfillPlugin} from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  envPrefix: 'REACT_APP_',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@/*': './src/*',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        nodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  plugins: [
    react(),
    envCompilable(),
    tsconfigPaths(),
    envCompatible(/* options */),
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
