/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [svelte(), nxViteTsPaths(), tsconfigPaths()],
});
