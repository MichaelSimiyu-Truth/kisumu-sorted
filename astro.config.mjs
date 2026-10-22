/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					green: '#1F5214',      // Primary green
					orange: '#F28C1E',     // Accent orange
					offwhite: '#FAF8F5',   // Page background
					dark: '#1A1A1A',       // Body text
					lightgreen: '#E8F0E5', // Card/section backgrounds
				}
			},
			fontFamily: {
				// We'll add the Google fonts in the next step, but here is the setup
				heading: ['"Plus Jakarta Sans"', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			}
		},
	},
	plugins: [],
}