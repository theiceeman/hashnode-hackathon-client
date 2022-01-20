import React from 'react';

const Logo = ({ className }) => {
	const theme = localStorage.getItem('color-theme');
	return (
		<img
			className={className ?? 'w-full'}
			src={theme === 'dark' ? '/images/logo-dark.svg' : '/images/logo-light.svg'}
			alt='logo'
		/>
	);
};

export default Logo;
