import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
import { MdAccountBalanceWallet as WalletIcon, MdArrowRightAlt as RigthArrowAlt } from 'react-icons/md';

const SideBar = () => {
	return (
		<>
			<div className='absolute lg:relative w-80 mr-1 h-screen bg-white dark:bg-nature-800 hidden lg:block'>
				<div className='w-full h-16 flex items-center py-3 px-8'>
					<Link to='/'>
						<Logo />
					</Link>
				</div>
				<ul className='py-6'>
					<li className='py-1  px-3'>
						<Link to='/' className='flex items-center rounded-md pl-2 py-2 text-white bg-glitz-300'>
							<WalletIcon className='w-6 h-6 mr-4' />
							<span className='text-base font-dm-sans font-normal  tracking-wider capitalize'>
								Wallet
							</span>
						</Link>
					</li>
					<li className='py-1 px-3'>
						<Link
							to='/'
							className='flex items-center rounded-md pl-2 py-2 text-nature-700 hover:bg-nature-50'
						>
							<RigthArrowAlt className='w-6 h-6 mr-4' />
							<span className='text-base font-dm-sans font-normal  tracking-wider capitalize'>
								Transfer
							</span>
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SideBar;
