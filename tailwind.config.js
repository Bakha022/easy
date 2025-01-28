/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			boxShadow: {
				custom: '0px 0px 20px 10px rgba(32, 125, 255, 0.04)', 
			},
		},
		screens: {
			xs: '500px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
	},
	plugins: [],
}
