import { useEffect, useState } from 'react';

const app_theme = () => {
	const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches;
	if (!('theme-mode' in localStorage) || userPrefersDark) return 'light';
};

export default function Darkmode() {
	const [theme, setTheme] = useState(app_theme);

	const setUserTheme = (userTheme) => {
		const root = window.document.documentElement;
		const isDark = userTheme === 'dark';

		root.classList.remove(isDark ? 'light' : 'dark');
		root.classList.add(userTheme);

		localStorage.setItem('theme-mode', userTheme);
	};

	useEffect(() => {
		setUserTheme(theme);
	}, [theme]);
	return [theme, setTheme];
}
