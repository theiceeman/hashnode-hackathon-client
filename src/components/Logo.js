import React from 'react';
import Darkmode from './Darkmode';

const Logo = ({ className }) => {
	const [colorTheme] = Darkmode();
	// const theme = localStorage.getItem('color-theme');
	return (
		<img
			className={className ?? 'w-full'}
			src={colorTheme === 'light' ? '/images/logo-light.svg' : '/images/logo-dark.svg'}
			alt='logo'
		/>
	);
};

export default Logo;
