module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@themesberg/flowbite/**/*.js'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: '0.5rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
		},
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				'dm-sans': ['DM Sans', 'sans-serif'],
				'nunito-sans': ['Nunito Sans', 'sans-serif'],
			},
			basis: {
				'3/5': '60%',
				'2/5': '40',
			},
			colors: {
				grey: {
					50: '#F9FAFB',
					100: '#F4F6F8',
					200: '#E6E5E8',
					300: '#C4CDD5',
					400: '#e6e5e8',
					500: '#adb0bb',
					600: '#949db2',
					700: '#767E89',
					800: '#32363E',
					900: '#20232A',
					dark: '#212121',
					darker: '#22262D',
				},
				norm: {
					text: '#E6E5E8',
					light: '#777490',
					gray: '#F4F5F6',
					black: '#23262F',
					blue: '#3772FF',
					dblue: '#0045EA',
					green: '#58BD7D',
					orange: '#FF6838',
					ldark: '#282C34',
				},
				'norm-dark': {
					black: '#141416',
					card: '#18191D',
				},
				nature: {
					50: '#F7F7F7',
					100: '#F6F7F8',
					200: '#00C292',
					300: '#e46a76',
					400: '#fec90f',
					700: '#777e90',
					800: '#32363E',
					900: '#20232A',
				},
				glitz: {
					100: '#E6E5E8',
					200: '#C3E4FC',
					300: '#1A97F5',
					400: '#1682D4',
					500: '#2956BA',
					600: '#1E4DB7',
					800: '#282C34',
				},
			},
		},
	},
	plugins: [require('@themesberg/flowbite/plugin')],
};
