import TransferModal from 'components/TransferModal';
import React from 'react';
import { MdVisibility } from 'react-icons/md';
// import bitcoin from '../Public/imgs/bitcoin.svg';
// import chainlink from '../Public/imgs/chainlink.svg';
// import maid from '../Public/imgs/maid.svg';
const formater = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 2,
});

const people = [
	{
		name: 'Jane Cooper',
		title: 'Regional Paradigm Technician',
		department: 'Optimization',
		role: 'Admin',
		email: 'jane.cooper@example.com',
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	// More people...
];

const Wallet = () => {
	return (
		<>
			<div className='bg-white pb-7 rounded-t-lg dark:bg-nature-800'>
				<div className='container px-6 py-4 mx-auto'>
					<div className='flex items-center justify-between'>
						<div>
							<h4 className='text-xl font-normal leading-5 font-dm-sans text-neutral-500 mb-4'>
								Total balance
							</h4>
							<p className='flex items-center text-lg font-nunito font-bold text-center text-gray-800 capitalize lg:text-2xl dark:text-white'>
								<img
									className='w-8 h-8 mr-3 px-1 py-1 border rounded-full'
									src='/images/eth_logo.svg'
									alt='Eth-logo'
								/>{' '}
								0 ETH
							</p>
							<p className='text-base leading-8 tracking-wide font-medium font-nunito text-neutral-500 mt-2'>
								= {formater.format(0)}
							</p>
						</div>
						<div className='flex md:order-2'>
							<button
								type='button'
								className='text-white border bg-nature-700 border-nature-700 hover:bg-nature-800 hover:text-white font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center dark:bg-nature-700 dark:hover:text-white'
							>
								<MdVisibility className='w-5 h-5' />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white dark:bg-nature-800 mb-4 border-b border-gray-200 dark:border-gray-700'>
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
							Assets
						</button>
					</li>
					<li className='w-full' role='presentation'>
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
					</li>
				</ul>
			</div>
			<div id='myTabContent'>
				<div
					className='bg-gray-50  dark:bg-nature-800'
					id='profile'
					role='tabpanel'
					aria-labelledby='profile-tab'
				>
					<div class='overflow-x-auto w-full'>
						<table class='table-auto w-full'>
							<tbody class='text-lg'>
								<tr className='hover:bg-gray-50 hover:rounded-lg hover:cursor-pointer'>
									<td class='p-2 whitespace-nowrap'>
										<div class='flex items-center py-2'>
											<span className='text-lg text-gray-500 font-dm-sans'>1</span>
										</div>
									</td>
									<td class='p-2 whitespace-nowrap'>
										<div class='flex items-center py-2'>
											<div class='w-10 h-10 flex-shrink-0 mr-2 sm:mr-4'>
												<img
													class='rounded-full'
													src='/images/bitcoin.svg'
													widtd='40'
													height='40'
													alt='Alex Shatov'
												/>
											</div>
											<div class='font-medium text-lg mr-3 text-gray-800'>Bitcoin</div>
											<div class='font-medium text-lg tracking-wider text-gray-300'>BTC</div>
										</div>
									</td>
									<td class='p-2 whitespace-nowrap'>
										<div class='text-left py-2 text-lg font-semibold text-gray-600'>$36,450.21</div>
									</td>
									<td class='p-2 whitespace-nowrap'>
										<div class='text-left py-2 font-medium text-lg text-green-500'>+1.7%</div>
									</td>
									<td class='p-2 whitespace-nowrap flex items-end content-end justify-center'>
										<button class='text-lg py-1 px-6 mt-2 text-right  border-2 text-gray-600 text-sm font-semibold border-gray-200 rounded-3xl'>
											Trade
										</button>
									</td>
								</tr>
								<tr className='hover:bg-gray-50 hover:rounded-lg hover:cursor-pointer'>
									<td class='p-2 whitespace-nowrap'>
										<div class='flex items-center py-2'>
											<span className='text-lg text-gray-500 font-dm-sans'>2</span>
										</div>
									</td>
									<td class='p-2 whitespace-nowrap'>
										<div class='flex items-center py-2'>
											<div class='w-10 h-10 flex-shrink-0 mr-2 sm:mr-4'>
												<img
													class='rounded-full'
													src='/images/maid.svg'
													widtd='40'
													height='40'
													alt='Alex Shatov'
												/>
											</div>
											<div class='font-medium text-lg mr-3 text-gray-800'>Bitcoin</div>
											<div class='font-medium text-lg tracking-wider text-gray-300'>BTC</div>
										</div>
									</td>
									<td class='p-2 whitespace-nowrap'>
										<div class='text-left py-2 text-lg font-semibold text-gray-600'>$36,450.21</div>
									</td>
									<td class='p-2 whitespace-nowrap'>
										<div class='text-left py-2 font-medium text-lg text-green-500'>+1.7%</div>
									</td>
									<td class='p-2 whitespace-nowrap flex items-end content-end justify-center'>
										<button class='text-lg py-1 px-6 mt-2 text-right  border-2 text-gray-600 text-sm font-semibold border-gray-200 rounded-3xl'>
											Trade
										</button>
									</td>
								</tr>
								<tr className='hover:bg-gray-50 hover:rounded-lg hover:cursor-pointer'>
									<td class='p-2 whitespace-nowrap'>
										<div class='flex items-center py-2'>
											<span className='text-lg text-gray-500 font-dm-sans'>3</span>
										</div>
									</td>
									<td class='p-2 whitespace-nowrap'>
										<div class='flex items-center py-2'>
											<div class='w-10 h-10 flex-shrink-0 mr-2 sm:mr-4'>
												<img
													class='rounded-full'
													src='/images/chainlink.svg'
													widtd='40'
													height='40'
													alt='Alex Shatov'
												/>
											</div>
											<div class='font-medium text-lg mr-3 text-gray-800'>Bitcoin</div>
											<div class='font-medium text-lg tracking-wider text-gray-300'>BTC</div>
										</div>
									</td>
									<td class='p-2 whitespace-nowrap'>
										<div class='text-left py-2 text-lg font-semibold text-gray-600'>$36,450.21</div>
									</td>
									<td class='p-2 whitespace-nowrap'>
										<div class='text-left py-2 font-medium text-lg text-green-500'>+1.7%</div>
									</td>
									<td class='p-2 whitespace-nowrap flex items-end content-end justify-center'>
										<button class='text-lg py-1 px-6 mt-2 text-right  border-2 text-gray-600 text-sm font-semibold border-gray-200 rounded-3xl'>
											Trade
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div
					className='hidden p-4 bg-gray-50 rounded-lg dark:bg-nature-800'
					id='dashboard'
					role='tabpanel'
					aria-labelledby='dashboard-tab'
				>
					<div className='flex flex-col'>
						<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
							<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
								<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
									<table className='min-w-full divide-y divide-gray-200'>
										<tbody className='bg-white divide-y divide-gray-200'>
											{people.map((person) => (
												<tr key={person.email}>
													<td className='px-6 py-4 whitespace-nowrap'>
														<div className='flex items-center'>
															<div className='flex-shrink-0 h-10 w-10'>
																<img
																	className='h-10 w-10 rounded-full'
																	src={person.image}
																	alt=''
																/>
															</div>
															<div className='ml-4'>
																<div className='text-sm font-medium text-gray-900'>
																	{person.name}
																</div>
																<div className='text-sm text-gray-500'>
																	{person.email}
																</div>
															</div>
														</div>
													</td>
													<td className='px-6 py-4 whitespace-nowrap'>
														<div className='text-sm text-gray-900'>{person.title}</div>
														<div className='text-sm text-gray-500'>{person.department}</div>
													</td>
													<td className='px-6 py-4 whitespace-nowrap'>
														<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
															Active
														</span>
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
														{person.role}
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
														<a href='#' className='text-indigo-600 hover:text-indigo-900'>
															Edit
														</a>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					{/* <p className='text-sm text-gray-500 dark:text-gray-400'>
						This is some placeholder content the{' '}
						<strong className='font-medium text-gray-800 dark:text-white'>
							Dashboard tab's associated content
						</strong>
						. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript
						swaps classes to control the content visibility and styling.
					</p> */}
				</div>
			</div>
			<TransferModal />
		</>
	);
};

export default Wallet;
