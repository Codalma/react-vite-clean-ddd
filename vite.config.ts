import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src/'),
      '@application': path.resolve(__dirname, '/src/application'),
      '@domain': path.resolve(__dirname, '/src/domain'),
      '@infrastructure': path.resolve(__dirname, '/src/infrastructure'),
      '@presentation': path.resolve(__dirname, '/src/presentation'),
      '@mocks': path.resolve(__dirname, '/__mocks__'),
    },
  },
  css: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
  },
});
