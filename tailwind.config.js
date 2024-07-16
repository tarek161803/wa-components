/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Urbanist', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#0099FF',
					light: '#12A1FF',
				},
			},
			boxShadow: {
				custom: '2px 2px 0px 1px rgba(88, 98, 118, 0.32)',
				'custom-sm': '1px 1px 0px 1px rgba(107, 114, 128, 0.30)',
			},
		},
	},
	prefix: 'ctx-',
	plugins: [],
};
