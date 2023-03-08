import { useEffect } from "react";

const Logo = ({ theme }) => {
	console.log(theme)
	// let theme = '';
	// useEffect(() => {
	// 	theme = localStorage.getItem('theme-mode');
	// });
	return (
		<>
			<img
				className={'w-full'}
				src={theme === 'light' ? '/images/logo-light.svg' : '/images/logo-dark.svg'}
				alt='logo'
			/>
		</>
	);
};

export default Logo;
