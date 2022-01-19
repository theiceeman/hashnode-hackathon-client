import React from 'react';
import { HiMenuAlt4 as MenuAlt4Icon } from 'react-icons/hi';

const Navbar = ({ show, setShow, profile, setProfile }) => {
	return (
		<nav className='h-16 flex items-center lg:items-stretch justify-end lg:justify-between relative z-10'>
			<div className='hidden lg:flex w-full pr-6'>
				<div className='w-1/2 h-full hidden lg:flex items-center pl-6 pr-24'></div>
				<div className='w-1/2 hidden lg:flex'>
					<div className='w-full flex items-center pl-8 justify-end'>
						<div className='mr-1 relative'>
							<button className='bg-norm-blue text-base font-nunito font-bold transition duration-150 ease-in-out rounded-3xl text-white px-6 py-2'>
								Connect a Wallet
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='mr-8 visible lg:hidden relative' onClick={() => setShow(!show)}>
				{show ? ' ' : <MenuAlt4Icon className='h-[30px] w-[30px] text-norm-black dark:text-norm-light' />}
			</div>
		</nav>
	);
};

export default Navbar;
