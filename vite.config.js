import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  build: {
    outDir: 'src', 
  },
  base: '/e-plantShopping/',
  plugins: [react()],
});
