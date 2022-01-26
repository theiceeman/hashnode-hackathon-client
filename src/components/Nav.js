import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Nav() {
	const [show, setShow] = useState(false);
	return (
		<nav className='bg-white shadow dark:bg-gray-800'>
			<div className='container px-6 py-3 mx-auto'>
				<div className='flex flex-col md:flex-row md:justify-between md:items-center'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<div className='col-span-1  flex py-1'>
								<Logo />
							</div>
						</div>

						{/* <!-- Mobile menu button --> */}
						<div className='flex md:hidden'>
							<button
								type='button'
								onClick={() => setShow(!show)}
								className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
								aria-label='toggle menu'
							>
								<svg viewBox='0 0 24 24' className='w-8 h-8 fill-current'>
									<path
										fill-rule='evenodd'
										d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
									></path>
								</svg>
							</button>
						</div>
					</div>

					{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
					<div className='items-center justify-self-center md:flex'>
						<div
							className={`${
								show ? 'flex' : 'hidden'
							}   md:flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1`}
						>
							<Link to='/' className='li'>
								Exchange
							</Link>
							<Link to='/' className='li'>
								Market
							</Link>
							<Link to='/' className='li'>
								Discover
							</Link>
							<Link to='/' className='li'>
								Dashboard
							</Link>
							{/* <TransferModal /> */}
						</div>

						<div className={`${show ? 'flex' : 'hidden'} md:flex items-center py-2 -mx-1 md:mx-0`}>
							<button className='bg-norm-blue hover:bg-norm-dblue border-none px-4 py-2 shadow-2xl rounded-3xl text-base leading-6 text-white font-dm-sans font-medium'>
								Connect Wallet
							</button>{' '}
						</div>
					</div>
				</div>
			</div>
		</nav>
		//   <div className='w-full border-b-2 z-50 bg-white border-grey-100 py-4 sticky top-0' >
		//       <div className='container mx-auto items-center grid grid-cols-5'>
		//     <div className='col-span-1  flex py-1'>
		//         <img src={img1} className='bg-cover border-r-2 pr-6 py-1' />
		//     </div>
		//     <div class="flex md:hidden">
		//                 <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
		//                     <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
		//                         <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
		//                     </svg>
		//                 </button>
		//             </div>

		//     <div className='col-span-2'>
		//         <ul className='text-left flex justify-start items-start'>
		//              <li className='li' >Exchange</li>
		//              <li className='li' >Market</li>
		//              <li className='li'>Discover</li>
		//              <li className='li'>Dashboard</li>
		//         </ul>
		//     </div>
		//     <div className='col-span-2 justify-self-end flex items-center content-end'>
		//         <button className='bg-norm-blue border-none px-4 py-2 shadow-2xl rounded-2xl text-white font-segoe-ui font-semibold' >Connect Wallet</button>
		//     </div>
		// </div>
		//   </div>
	);
}

export default Nav;
