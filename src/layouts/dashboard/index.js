import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';

const DashboardLayout = () => {
	return (
		<>
			<div className='bg-nature-100 dark:bg-nature-900'>
				<div className='w-full'>
					{/* Navigation starts */}
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
