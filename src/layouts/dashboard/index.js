import React from 'react';
import { Outlet } from 'react-router-dom';
// Dashboard components
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';
import { HiExclamation } from 'react-icons/hi';

const Notification = () => {
	return (
		<div className='w-full text-white bg-norm-blue'>
			<div className='container flex items-center px-3 py-1 mx-auto'>
				<HiExclamation className='w-5 h-5 text-white' />
				<p className='mx-3 font-semibold font-sans text-sm'>
					Please make sure you have Metamask installed on your PC.
				</p>
			</div>
		</div>
	);
};

const DashboardLayout = () => {
	return (
		<>
			<div className='bg-nature-100 dark:bg-nature-900'>
				<div className='w-full'>
					{/* Navigation starts */}
					{window && !window.ethereum && <Notification />}
					<Navbar />
					<TopBar />
					{/* Navigation ends */}
					<main className='lg:container lg:mx-auto py-12 w-full lg:px-8'>
						<Outlet />
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default DashboardLayout;
