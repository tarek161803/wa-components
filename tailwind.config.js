/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Urbanist', 'sans-serif'],
			spaceport: ['Spaceport', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#0099FF',
					light: '#12A1FF',
				},
				success: {
					DEFAULT: '#10B981',
				},
			},
			boxShadow: {
				custom: '2px 2px 0px 1px rgba(88, 98, 118, 0.32)',
				'custom-sm': '1px 1px 0px 1px rgba(107, 114, 128, 0.30)',
				'custom-light': '2px 2px 0px 1px #e5e7eb',
				'custom-sm-light': '1px 1px 0px 1px #e5e7eb',
			},
		},
	},
	prefix: 'ctx-',
	plugins: [],
};
