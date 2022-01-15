module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@themesberg/flowbite/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
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
					darker: '#20232A',
				},
				secondary: {
					lighter: '#FFD3BC',
					light: '#FFC5A6',
					main: '#FB9678',
				},
			},
		},
	},
	plugins: [require('@themesberg/flowbite/plugin')],
};
