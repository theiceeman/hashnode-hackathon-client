import React from 'react';
import MyListbox from 'components/List';
import { formater } from 'components/atom';
import tokens from 'components/_mock_/coin';
import { useNavigate } from 'react-router-dom';

const Stake = () => {
	const navigate = useNavigate();
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

			<div className='bg-white dark:bg-nature-800' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
				<div class='overflow-x-auto max-w-full'>
					<table class='w-full'>
						<tbody>
							{tokens.map((token) => (
								<tr
									key={token.name}
									className='hover:bg-gray-50 dark:hover:bg-norm-ldark hover:cursor-pointer'
									onClick={() => navigate('/')}
								>
									<td class='p-2 pl-5 whitespace-nowrap'>
										<div class='flex items-center py-2'>
											<div class='w-10 h-10 flex-shrink-0 mr-2 sm:mr-4'>
												<img
													class='rounded-full'
													src={token.image}
													widtd='40'
													height='40'
													alt={token.name}
												/>
											</div>
											<div className='ml-4'>
												<div class='font-medium font-dm-sans text-base mr-3 uppercase text-norm-black dark:text-white leading-5 tracking-wider'>
													{token.name}
												</div>
												<div class='mt-2 font-normal text-sm font-nunito tracking-wider text-norm-light'>
													{formater.format(token.price)}{' '}
													<span
														className={`ml-3 ${
															token.profit.startsWith('-')
																? ' text-nature-300'
																: 'text-nature-200'
														}`}
													>
														{token.profit}%
													</span>
												</div>
											</div>
										</div>
									</td>
									<td className='p-2'></td>
									{/* <td className='p-2'></td> */}
									<td class='p-2 pr-5 whitespace-nowrap'>
										<div class='text-right py-2 font-medium uppercase font-nunito text-base text-norm-black dark:text-white leading-5 tracking-wider'>
											{token.balance}
										</div>
									</td>
									{/* <td class='p-2 pl-10 whitespace-nowrap'>
		<div class='text-center py-2 font-medium font-nunito text-base text-norm-black dark:text-white'>
			<HiArrowRight className='w-4 h-4' />
		</div>
	</td> */}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Stake;
