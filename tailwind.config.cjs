/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./composables/**/*.{js,ts}',
		'./plugins/**/*.{js,ts}',
		'./app.{js,ts,vue}',
	],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: '#2C2C40',
				secondary: '#1B2441',
			},
		},
	},
	plugins: [],
};
