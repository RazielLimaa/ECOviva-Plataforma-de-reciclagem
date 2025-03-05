import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';  // Importando o módulo path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components')  // Alias correto
    }
  }
});
