import React from 'react';

const Logo = ({ className }) => {
	return <img className={className ?? ' w-[200px] h-10'} src='/images/logo-light.svg' alt='logo' />;
};

export default Logo;
