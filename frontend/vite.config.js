import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',   // để xử lý cả file .js có JSX
    include: /src\/.*\.js$/,  // hoặc regex phù hợp
    exclude: [],
  },
  server: {
    port: 3000,
    open: true,
  },
});
