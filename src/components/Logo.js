import React from 'react';
// import Darkmode from './Darkmode';

const Logo = ({ className }) => {
	// const [theme] = Darkmode();
	const theme = localStorage.getItem('theme-mode');
	return (
		<img
			className={className ?? 'w-full'}
			src={theme === 'dark' ? '/images/logo-light.svg' : '/images/logo-dark.svg'}
			alt='logo'
		/>
	);
};

export default Logo;
