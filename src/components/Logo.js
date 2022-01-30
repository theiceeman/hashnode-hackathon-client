const Logo = ({ className }) => {
	const theme = localStorage.getItem('theme-mode');
	return (
		<>
			<img
				className={className ?? 'w-full'}
				src={theme === 'light' ? '/images/logo-light.svg' : '/images/logo-dark.svg'}
				alt='logo'
			/>
		</>
	);
};

export default Logo;
