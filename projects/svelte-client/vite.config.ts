import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	optimizeDeps: {
		include: ["@nurbxfit/infra", "apiv2"],
	},
	build: {
		commonjsOptions: {
			include: [/@nurbxfit\/infra/, /apiv2/, /node_modules/],
		},
	},
});
