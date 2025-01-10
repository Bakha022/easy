import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	esbuild: {
		loader: 'jsx',
		include:  /src\/.*\.(js|jsx|ts|tsx)$/,
	},
})
