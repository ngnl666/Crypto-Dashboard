import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		deps: {
			inline: ['@nuxt/test-utils-edge'],
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, '.'),
		},
	},
	plugins: [
		AutoImport({
			imports: ['vue'],
			vueTemplate: true,
			dts: true,
		}),

		Components({
			dirs: ['./components'],
		}),
	],
});
