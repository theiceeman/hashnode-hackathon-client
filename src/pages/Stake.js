import React from 'react';
import MyListbox from 'components/List';

const Stake = () => {
	return (
		<>
			<div className='bg-white pb-7 rounded-t-lg dark:bg-nature-800'>
				<div className='justify-self-center w-full px-20'>
					<div className='px-8 py-8 flex flex-col'>
						<div className='flex justify-between mb-6 items-center'>
							<h2 className='justify-self-start text-center font-semibold text-3xl text-gray-700 dark:text-norm-text font-dm-sans'>
								Stake{' '}
							</h2>
						</div>
						<div className='bg-gray-100 dark:bg-norm-ldark rounded-lg flex mb-6 justify-between items-center px-3 md:px-6 py-5'>
							<span className='font-medium font-dm-sans text-lg text-gray-600 dark:text-norm-light'>
								Available <br /> balance
							</span>
							<span className='text-right'>
								<p className='text-lg text-gray-800 dark:text-norm-text font-dm-sans font-semibold'>
									2,4637 ETH
								</p>
								<p className='text-gray-500 dark'>$10,123.98</p>
							</span>
						</div>
						<div className='mb-6'>
							{/* <div className='flex items-center'> */}
							<MyListbox />
							{/* <input
									type='number'
									id='base-input'
									placeholder='0.0'
									class=' mt-7 border-1 w-full py-4 text-gray-600 font-medium focus:outline-none hover:cursor-pointer border-norm-black rounded'
								/> */}
							{/* </div> */}
						</div>
						<div className='mb-6 w-full'>
							<span className='text-gray-500 text-sm font-semibold'>Recipient Address</span>
							<input
								type='number'
								id='base-input'
								placeholder='0.0'
								class=' mt-1 border-1 w-full py-4 text-gray-600 font-medium focus:outline-none hover:cursor-pointer border-norm-black rounded'
							/>
						</div>
						<div className='lg:flex lg:items-center lg:justify-center w-full'>
							<button
								className='w-full text-center rounded-3xl  hover:cursor-pointer bg-norm-blue
                             text-white font-dm-sans font-semibold text-lg px-8 py-2'
							>
								Save
							</button>
							<button className='ml-4 w-full text-center rounded-3xl  hover:cursor-pointer border-2 border-norm-light text-norm-light hover:text-norm-text hover:bg-norm-black dark:text-white font-dm-sans font-semibold text-lg px-8 py-2'>
								Withdraw
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white dark:bg-nature-800'>
				<ul className='flex -mb-px' id='myTab' data-tabs-toggle='#myTabContent' role='tablist'>
					<li className='w-full' role='presentation'>
						<button
							className='inline-block relative py-4 px-4 w-full text-base font-dm-sans leading-5 capitalize font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 active'
							id='profile-tab'
							data-tabs-target='#profile'
							type='button'
							role='tab'
							aria-controls='profile'
							aria-selected='true'
						>
							Savings
						</button>
					</li>
					{/* <li className='w-full' role='presentation'>
						<button
							className='inline-block relative py-4 px-4 w-full text-base font-dm-sans leading-5 capitalize font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
							id='dashboard-tab'
							data-tabs-target='#dashboard'
							type='button'
							role='tab'
							aria-controls='dashboard'
							aria-selected='false'
						>
							Transactions
						</button>
					</li> */}
				</ul>
			</div>
		</>
	);
};

export default Stake;
