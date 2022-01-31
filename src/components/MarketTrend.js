import React from 'react';

function MarketTrend() {
	return (
		<div className='py-8 my-16 container mx-auto'>
			<div className='flex w-full justify-between flex-col lg:flex-row gap-y-3 px-4 lg:px-0 mb-8 lg:mb-16  content-center'>
				<h1 className='justify-self-start text-3xl leading-5 lg:text-5xl font-dm-sans dark:text-norm-text'>
					Market trend
				</h1>
				<div className='flex items-center'>
					<button className='w-1/2 lg:w-full border-2 border-gray-200 rounded-3xl font-segoe-ui hover:cursor-pointer hover:bg-norm-black dark:text-norm-text dark:hover:bg-norm-light hover:border-none hover:text-white focus:border-none text-gray-800 font-semibold text-lg px-8 py-2'>
						View more
					</button>
				</div>
			</div>
			{/* <!-- component --> */}
			<div className='p-3'>
				<div className='overflow-x-auto'>
					<table className='table-auto w-full'>
						<thead className='text-sm capitalize font-dm-sans mb-4 border-b-2 border-gray-100 text-gray-400'>
							<tr className='py-4'>
								<td className='p-2 whitespace-nowrap'>
									<div className='py-3 text-md dark:text-norm-text leading-5 tracking-wider font-dm-sans text-left'>
										#
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='py-3 text-md dark:text-norm-text leading-5 tracking-wider font-dm-sans text-left'>
										Name
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='py-3 text-md dark:text-norm-text leading-5 tracking-wider font-dm-sans text-left'>
										Price
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='py-3 text-md dark:text-norm-text leading-5 tracking-wider font-dm-sans text-left'>
										24h change
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='py-3 text-md dark:text-norm-text leading-5 tracking-wider font-dm-sans text-center'>
										Trade
									</div>
								</td>
							</tr>
						</thead>
						<tbody>
							<tr className='hover:bg-gray-100 hover:rounded-3xl hover:cursor-pointer'>
								<td className='p-2 whitespace-nowrap'>
									<div className='flex items-center py-2'>
										<span className='text-base leading-5 text-gray-500 dark:text-norm-text font-dm-sans'>
											1
										</span>
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='flex items-center py-2'>
										<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-4'>
											<img
												className='rounded-full'
												src='/images/bitcoin.svg'
												widtd='40'
												height='40'
												alt='Alex Shatov'
											/>
										</div>
										<div className='font-medium text-lg leading-5 font-dm-sans mr-3 tracking-wider text-gray-800 dark:text-norm-text'>
											Bitcoin
										</div>
										<div className='font-medium text-lg tracking-wider font-nunito text-gray-300 dark:text-norm-light'>
											BTC
										</div>
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='text-left py-2 text-lg font-semibold text-gray-600 dark:text-norm-text'>
										$36,450.21
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='text-left py-2 font-medium text-base font-nunito text-green-500'>
										+1.7%
									</div>
								</td>
								<td className='p-2 whitespace-nowrap flex items-end content-end justify-center'>
									<button className='lg:text-lg py-1 px-6 mt-2 text-center hover:cursor-pointer hover:bg-norm-black hover:border-none hover:text-white focus:border-none border-2 text-gray-600 text-sm font-semibold border-gray-200 rounded-3xl'>
										Trade
									</button>
								</td>
							</tr>
							<tr className='hover:bg-gray-100 hover:rounded-xl hover:cursor-pointer'>
								<td className='p-2 whitespace-nowrap'>
									<div className='flex items-center py-2'>
										<span className='text-base leading-5 text-gray-500 dark:text-norm-text font-dm-sans'>
											2
										</span>
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='flex items-center py-2'>
										<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-4'>
											<img
												className='rounded-full'
												src='/images/maid.svg'
												widtd='40'
												height='40'
												alt='Alex Shatov'
											/>
										</div>
										<div className='font-medium text-lg leading-5 font-dm-sans mr-3 tracking-wider text-gray-800 dark:text-norm-text'>
											Bitcoin
										</div>
										<div className='font-medium text-lg tracking-wider font-nunito text-gray-300 dark:text-norm-light'>
											BTC
										</div>
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='text-left py-2 text-lg font-semibold text-gray-600 dark:text-norm-text'>
										$36,450.21
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='text-left py-2 font-medium text-base font-nunito text-green-500'>
										+1.7%
									</div>
								</td>
								<td className='p-2 whitespace-nowrap flex items-end content-end justify-center'>
									<button className='lg:first-line:text-lg py-1 px-6 mt-2 text-center hover:cursor-pointer hover:bg-norm-black hover:border-none hover:text-white focus:border-none  border-2 text-gray-600 text-sm font-semibold border-gray-200 rounded-3xl'>
										Trade
									</button>
								</td>
							</tr>
							<tr className='hover:bg-gray-100 hover:rounded-xl hover:cursor-pointer'>
								<td className='p-2 whitespace-nowrap'>
									<div className='flex items-center py-2'>
										<span className='text-base leading-5 text-gray-500 dark:text-norm-text font-dm-sans'>
											3
										</span>
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='flex items-center py-2'>
										<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-4'>
											<img
												className='rounded-full'
												src='/images/chainlink.svg'
												widtd='40'
												height='40'
												alt='Alex Shatov'
											/>
										</div>
										<div className='font-medium text-lg leading-5 font-dm-sans mr-3 tracking-wider text-gray-800 dark:text-norm-text'>
											Bitcoin
										</div>
										<div className='font-medium text-lg tracking-wider font-nunito text-gray-300 dark:text-norm-light'>
											BTC
										</div>
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='text-left py-2 text-lg font-semibold text-gray-600 dark:text-norm-text'>
										$36,450.21
									</div>
								</td>
								<td className='p-2 whitespace-nowrap'>
									<div className='text-left py-2 font-medium text-base font-nunito text-green-500'>
										+1.7%
									</div>
								</td>

								<td className='p-2 whitespace-nowrap flex items-end content-end justify-center'>
									<button className='lg:text-lg py-1 px-6 mt-2 text-center hover:cursor-pointer hover:bg-norm-black hover:border-none hover:text-white focus:border-none  border-2 text-gray-600 text-sm font-semibold border-gray-200 rounded-3xl'>
										Trade
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default MarketTrend;
