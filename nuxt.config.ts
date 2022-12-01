import { visualizer } from 'rollup-plugin-visualizer';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
	app: {
		head: {
			titleTemplate: 'Crypto Dashboard',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content: 'Provide Crypto Currency & NFT Infomation With Data Visualization',
				},
			],
		},
	},
	vite: {
		plugins: [
			visualizer(),

			AutoImport({
				resolvers: [ElementPlusResolver()],
				dts: true,
			}),

			Components({
				resolvers: [IconsResolver({ prefix: false, enabledCollections: ['ep'] }), ElementPlusResolver()],
				dts: true,
			}),

			Icons({
				autoInstall: true,
			}),
		],
	},
	build: {
		transpile: [/echarts/],
	},
	typescript: {
		typeCheck: true,
	},
});
