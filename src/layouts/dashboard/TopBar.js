import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopBar = () => {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<div className='bg-white dark:bg-nature-800'>
			<ul className='flex divide-x pt-4 divide-gray-200 sm:flex dark:divide-gray-700'>
				<li className='w-full'>
					<Link
						to='/app'
						className={`inline-block relative py-4 px-4 w-full text-sm font-medium font-dm-sans capitalize text-center ${
							pathname === '/dashboard'
								? 'text-white bg-glitz-300 hover:bg-glitz-400 hover:text-glitz-100'
								: 'text-nature-700 bg-white dark:bg-nature-800 hover:text-norm-black dark:hover:text-nature-700 hover:bg-nature-50 dark:hover:bg-norm-black'
						}`}
					>
						overview
					</Link>
				</li>
				<li className='w-full'>
					<Link
						to='/stake'
						className={`inline-block relative py-4 px-4 w-full text-sm font-medium font-dm-sans capitalize text-center ${
							pathname === '/stake'
								? 'text-white bg-glitz-300 hover:bg-glitz-400 hover:text-glitz-100'
								: 'text-nature-700 bg-white dark:bg-nature-800 hover:text-norm-black dark:hover:text-nature-700 hover:bg-nature-50 dark:hover:bg-norm-black'
						}`}
					>
						Stake
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default TopBar;
