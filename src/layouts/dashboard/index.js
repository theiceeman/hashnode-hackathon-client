import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
	return (
		<div>
			<h1 className='text-2xl text-center font-bold'>Dashboard Layout</h1>
			<main className='mx-auto py-3'>
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;
