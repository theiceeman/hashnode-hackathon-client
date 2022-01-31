import Footer from 'components/Footer';
import Nav from 'components/Nav';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div>
			<Nav />
			<main className='mx-auto'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
