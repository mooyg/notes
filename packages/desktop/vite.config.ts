import { defineConfig, searchForWorkspaceRoot } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [tsconfigPaths(), react()],
})
