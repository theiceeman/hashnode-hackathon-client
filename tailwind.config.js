module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@themesberg/flowbite/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				'dm-sans': ['DM Sans', 'sans-serif'],
				'segoe-ui': [
					'Nunito',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
				],
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
					light: '#777490',
					gray: '#F4F5F6',
					black: '#23262F',
					blue: '#3772FF',
					green: '#58BD7D',
				},
				'norm-dark': {
					black: '#141416',
					card: '#18191D',
				},
				nature: {
					100: '#FAFBFB',
					200: '#00C292',
					300: '#e46a76',
					400: '#fec90f',
					700: '#777e90',
					800: '#32363E',
					900: '#20232A',
				},
				glitz: {
					100: '#FAFBFB',
					200: '#C3E4FC',
					300: '#1A97F5',
					400: '#1682D4',
					500: '#2956BA',
					600: '#1E4DB7',
				},
			},
		},
	},
	plugins: [require('@themesberg/flowbite/plugin')],
};
