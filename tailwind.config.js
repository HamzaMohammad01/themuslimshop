/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				text: {
					0: "#fff",
					50: "#f3f4f1",
					100: "#e7e9e2",
					200: "#ced2c6",
					300: "#b6bca9",
					400: "#9da58d",
					500: "#858f70",
					600: "#6a725a",
					700: "#505643",
					800: "#35392d",
					900: "#1b1d16",
					950: "#0d0e0b",
				},
				background: "#070a05",
				primary: "#83ca44",
				secondary: "#3f6f16",
				accent: "#57aa0e",
			},
			fontFamily: {
				primary: '"Audiowide", sans-serif',
				secondary: '"ABeeZee", sans-serif',
				accent: '"Bangers", system-ui',
			},
			screens: {
				sm: { min: "640px", max: "767px" },
				md: { min: "768px", max: "1023px" },
				lg: { min: "1024px", max: "1279px" },
				xl: { min: "1200px", max: "1535px" },
				"2xl": { min: "1536px" },
			},
		},
	},
	plugins: [],
};
