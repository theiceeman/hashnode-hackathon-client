import { useEffect, useState } from 'react';

export default function Darkmode() {
	const [theme, setTheme] = useState('light');
	const colorTheme = theme === 'light' ? 'dark' : 'light';

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem('color-theme', theme);
	}, [theme, colorTheme]);
	return [colorTheme, setTheme];
}
