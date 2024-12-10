import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: 'https://github.com/auem-moonoom/wedding-invitation.github.io/', // Replace <repository-name> with your GitHub repository name
});