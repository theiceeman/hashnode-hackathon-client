import Logo from 'components/Logo';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiSun as SunIcon, HiMoon as MoonIcon } from 'react-icons/hi';
import Darkmode from 'components/Darkmode';

const Navbar = () => {
	const [colorTheme, setTheme] = Darkmode();
	return (
		<>
			<nav className='bg-white px-2 sm:px-4 py-2.5 rounded dark:bg-nature-800'>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<Link to='/' className='flex'>
						<Logo />
					</Link>
					<div className='flex md:order-2'>
						<button
							type='button'
							class='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm p-1.5 mr-4'
							onClick={() => setTheme(colorTheme)}
						>
							{colorTheme === 'light' ? (
								<MoonIcon className='w-6 h-5' />
							) : (
								<SunIcon className='w-6 h-6' />
							)}
						</button>
						<button
							type='button'
							className='text-white bg-glitz-300 hover:bg-glitz-400 text-base leading-6 font-dm-sans font-medium transition duration-150 ease-in-out rounded-3xl px-6 py-2 mr-3 md:mr-0'
						>
							Connect a Wallet
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
