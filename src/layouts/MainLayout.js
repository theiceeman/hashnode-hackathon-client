import Footer from 'components/Footer';
import Nav from 'components/Nav';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { HiExclamation } from 'react-icons/hi';

const MainLayout = () => {
	const Notification = () => {
		return (
			<div className='w-full text-white bg-norm-blue'>
				<div className='container flex items-center px-3 py-1 mx-auto'>
					<HiExclamation className='w-5 h-5 text-white' />
					<p className='mx-3 font-semibold font-sans text-sm'>
						Please make sure you have Metamask installed on your broweser.
					</p>
				</div>
			</div>
		);
	};
	return (
		<div>
			{window && !window.ethereum && <Notification />}
			<Nav />
			<main className='mx-auto'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
