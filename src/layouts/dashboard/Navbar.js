// import { ConnectWallet } from '@3rdweb/react';
import Logo from 'components/Logo';
import { Link } from 'react-router-dom';
import { HiSun as SunIcon, HiMoon as MoonIcon } from 'react-icons/hi';
import Darkmode from 'components/Darkmode';
import { shortenIfAddress, useEthers } from '@usedapp/core';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
// import CustomConnect from 'components/Connectwallet';

const Navbar = ({ account}) => {
	const [theme, setTheme] = Darkmode();
	const { activateBrowserWallet } = useEthers();
	const themeMode = useSelector((state) => state.themeMode);
	let isConnected = account !== undefined ? true : false;


	
	useEffect(() => {
		setTheme(themeMode)
	  },[themeMode]);

	return (
		<>
			<nav className='bg-white dark:bg-nature-800 px-4 py-4'>
				<div className='relative flex items-center justify-between mx-auto'>
					<div className='flex items-center'>
						<Link to='/' className='flex'>
							<Logo />
						</Link>
					</div>
					<div className='flex items-center space-x-2 lg:space-x-8 lg:flex'>
						<button
							type='button'
							className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm p-1.5 mr-1 lg:mr-4'
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						>
							{theme === 'dark' ? <SunIcon className='w-6 h-6' /> : <MoonIcon className='w-6 h-6' />}
						</button>
						{/* <ConnectWallet
							fontFamily={'Dm Sans, sans-serif'}
							borderRadius={'3xl'}
							className='dark:text-white '
						/> */}
						{!isConnected ? (
                <button
                  onClick={() => activateBrowserWallet()}
                  className="bg-norm-blue hover:bg-norm-dblue border-none px-4 py-2 shadow-2xl rounded-3xl text-base leading-6 text-white font-dm-sans font-medium"
                >
                  Connect Wallet
                </button>
              ) : (
                <button className="bg-norm-blue hover:bg-norm-dblue border-none px-4 py-2 shadow-2xl rounded-3xl text-base leading-6 text-white font-dm-sans font-medium">
                  {shortenIfAddress(account)}
                </button>
              )}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
