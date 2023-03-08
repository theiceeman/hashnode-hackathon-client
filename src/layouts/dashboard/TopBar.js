import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopBar = () => {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<div className='bg-white dark:bg-nature-800'>
			{/* <ul className='flex divide-x  divide-gray-200 sm:flex dark:divide-gray-700'> */}
			<ul className='flex'>
				<li className='w-full'>
					<Link
						to='/dashboard'
						className={`inline-block relative py-4 px-4 w-full text-base leading-5 tracking-wider font-medium font-dm-sans capitalize text-center ${
							pathname === '/dashboard' || pathname === '/dashboard/asset/'
								? 'text-white bg-norm-blue hover:bg-norm-dblue  hover:text-nature-100'
								: 'text-nature-700 bg-white dark:bg-nature-800 hover:text-norm-black dark:hover:text-nature-700 hover:bg-glitz-100 dark:hover:bg-norm-black'
						}`}
					>
						Wallet
					</Link>
				</li>
				<li className='w-full'>
					<Link
						to='stake'
						className={`inline-block relative py-4 px-4 w-full text-base leading-5 tracking-wider font-medium font-dm-sans capitalize text-center ${
							pathname === '/dashboard/stake'
								? 'text-white bg-norm-blue hover:bg-norm-dblue hover:text-glitz-100'
								: 'text-nature-700 bg-white dark:bg-nature-800 hover:text-norm-black dark:hover:text-nature-700 hover:bg-glitz-100 dark:hover:bg-norm-black'
						}`}
					>
						Savings
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default TopBar;
