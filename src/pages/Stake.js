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
				<div className='flex items-center justify-between px-6 py-3 mx-auto border-b border-grey-50  dark:border-norm-light'>
					<h1 className='w-full text-center tracking-wider text-2xl font-medium leading-5 font-dm-sans text-norm-light dark:text-norm-text'>
						Stake
					</h1>
				</div>
				<div className='container px-6 py-4 mx-auto'>
					<div className='flex flex-col items-center justify-between w-full mt-4'>
						<div className='flex items-center'>
							<span className='text-[32px] font-normal font-nunito-sans tracking-wide text-norm-black dark:text-white mr-1'>
								0
							</span>
							<span className='text-[32px] font-normal font-nunito-sans text-norm-black dark:text-white'>
								ETH
							</span>
						</div>
						<span className='text-base leading-8 tracking-wide font-medium font-nunito text-neutral-500 dark:text-norm-text mt-2'>
							= {formater.format(0.0)}
						</span>
					</div>
				</div>
				<div className='justify-self-center w-full px-20'>
					<div className='px-8 py-8 flex flex-col'>
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
							<span className='text-norm-light leading-6 tracking-wide text-lg font-dm-sans font-semibold'>
								Recipient Address
							</span>
							<input
								type='text'
								id='base-input'
								placeholder='0.0'
								class='mt-2 border-1 w-full py-3 text-norm-light text-2xl font-nunito font-bold focus:outline-none hover:cursor-pointer border-norm-light dark:bg-nature-800 rounded-lg'
							/>
						</div>
						<div className='flex items-center justify-center w-full'>
							<button className='w-full text-center rounded-3xl  hover:cursor-pointer bg-norm-blue hover:bg-norm-dblue text-white hover:text-white font-dm-sans font-semibold text-lg px-8 py-2'>
								Save
							</button>
							<button className='ml-4 lg:mt-0 w-full text-center rounded-3xl border border-norm-blue text-norm-light dark:text-norm-text hover:text-white hover:border-norm-dblue hover:bg-norm-dblue font-dm-sans font-medium text-lg px-8 py-2'>
								Withdraw
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white dark:bg-nature-800 border-t border-norm-light dark:border-norm-light'>
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
