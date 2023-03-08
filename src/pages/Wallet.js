import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { formater } from 'components/atom';
import { HiDownload as WithdrawalIcon, HiUpload as TransferIcon, HiExternalLink as DepositIcon } from 'react-icons/hi';
import tokens from 'components/_mock_/coin';
import { useNavigate } from 'react-router-dom';
import TransferModal from 'components/TransferModal';
import WithdrawModal from 'components/WithdrawModal';

const Wallet = () => {
	const [show, setShow] = useState(false);
	const [showWithdrawModal, setshowWithdrawModal] = useState(false);
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<div className='bg-white pb-7 rounded-t-lg dark:bg-nature-800'>
				<div className='flex items-center justify-between px-6 py-3 mx-auto border-b border-grey-50  dark:border-norm-light'>
					<h1 className='w-full text-center tracking-wider text-lg font-medium leading-5 font-dm-sans text-norm-light dark:text-norm-text'>
						Total Balance
					</h1>
					<button
						type='button'
						className='text-white border bg-nature-700 border-nature-700 hover:bg-nature-800 hover:text-white font-medium rounded-full text-sm p-1.5  dark:bg-nature-700 dark:hover:text-white'
						onClick={() => setVisible(!visible)}
					>
						{visible ? <MdVisibilityOff className='w-4 h-4' /> : <MdVisibility className='w-4 h-4' />}
					</button>
				</div>
				<div className='container px-6 py-4 mx-auto'>
					<div className='flex flex-col items-center justify-between w-full mt-4'>
						<div className='flex items-center'>
							{visible ? (
								<span className='text-[32px] font-normal font-nunito-sans tracking-wide text-norm-black dark:text-white mr-1'>
									***
								</span>
							) : (
								<img
									className='w-10 h-10 mr-2 px-1 py-1  rounded-full'
									src='/images/eth_logo.svg'
									alt='Eth-logo'
									loading='lazy'
								/>
							)}
							<span className='text-[32px] font-normal font-nunito-sans tracking-wide text-norm-black dark:text-white mr-1'>
								{visible ? '***' : '0.37078'}
							</span>
							<span className='text-[32px] font-normal font-nunito-sans text-norm-black dark:text-white'>
								{visible ? '***' : 'ETH'}
							</span>
						</div>
						<span className='text-base leading-8 tracking-wide font-medium font-nunito text-neutral-500 dark:text-norm-text mt-2'>
							= {visible ? '****' : formater.format(0)}
						</span>
					</div>

					<div className='flex items-center justify-center w-full mt-10'>
						{/* <button
							type='button'
							className='py-2 px-4 mr-2 mb-2 text-sm font-dm-sans font-medium tracking-wide text-white rounded-full bg-norm-blue hover:bg-norm-dblue hover:text-norm-text text-center inline-flex items-center'
						>
							<DepositIcon className='mr-1 -ml-1 w-4 h-4' />
							Deposit
						</button> */}
						<button
							type='button'
							className='py-2 px-4 mr-2 mb-2 text-sm font-dm-sans font-medium tracking-wide text-white rounded-full bg-norm-blue hover:bg-norm-dblue hover:text-norm-text text-center inline-flex items-center'
							onClick={() => setShow(true)}
						>
							<TransferIcon className='mr-1 -ml-1 w-4 h-4' />
							Deposit
						</button>
						<button
							type='button'
							className='py-2 px-4 mr-2 mb-2 text-sm font-dm-sans font-medium tracking-wide text-white rounded-full bg-norm-blue hover:bg-norm-dblue hover:text-norm-text text-center inline-flex items-center'
							onClick={() => setshowWithdrawModal(true)}
						>
							<WithdrawalIcon className='mr-1 -ml-1 w-4 h-4' />
							Withdraw
						</button>
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
				<div className='bg-white dark:bg-nature-800' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
					<div className='overflow-x-auto max-w-full'>
						<table className='w-full'>
							<tbody>
								{tokens.map((token) => (
									<tr
										key={token.name}
										className='hover:bg-gray-50 dark:hover:bg-norm-ldark hover:cursor-pointer'
										onClick={() => navigate(`/dashboard/asset/${token.id}`, { state: token })}
									>
										<td className='p-2 pl-5 whitespace-nowrap'>
											<div className='flex items-center py-2'>
												<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-4'>
													<img
														className='rounded-full'
														src={token.image}
														widtd='40'
														height='40'
														alt={token.name}
													/>
												</div>
												<div className='ml-4'>
													<div className='font-medium font-dm-sans text-base mr-3 uppercase text-norm-black dark:text-white leading-5 tracking-wider'>
														{token.name}
													</div>
													<div className='mt-2 font-normal text-sm font-nunito tracking-wider text-norm-light'>
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
										<td className='p-2 pr-5 whitespace-nowrap'>
											<div className='text-right py-2 font-medium uppercase font-nunito text-base text-norm-black dark:text-white leading-5 tracking-wider'>
												{visible ? '****' : token.balance}
											</div>
										</td>
										{/* <td className='p-2 pl-10 whitespace-nowrap'>
		<div className='text-center py-2 font-medium font-nunito text-base text-norm-black dark:text-white'>
			<HiArrowRight className='w-4 h-4' />
		</div>
	</td> */}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div
					className='hidden bg-white dark:bg-nature-800'
					id='dashboard'
					role='tabpanel'
					aria-labelledby='dashboard-tab'
				>
					<div className='overflow-x-auto max-w-full'>
						<table className='w-full'>
							<tbody>
								{tokens.map((token) => (
									<tr
										key={token.name}
										className='hover:bg-gray-50 dark:hover:bg-norm-ldark hover:cursor-pointer'
										// onClick={() => navigate(`/dashboard/asset/${token.id}`)}
									>
										<td className='p-2 pl-5 whitespace-nowrap'>
											<div className='flex items-center py-2'>
												<div className='text-norm-blue flex-shrink-0 mr-2 sm:mr-4'>
													<TransferIcon className='p-2 border border-norm-blue rounded-full w-8 h-8' />
												</div>
												<div className='ml-4'>
													<div className='font-medium font-dm-sans text-base mr-3 uppercase text-norm-black dark:text-white leading-5 tracking-wider'>
														Send {token.name}
													</div>
													<div className='mt-2 font-normal text-sm font-dm-sans tracking-wide text-norm-light'>
														<span className='text-nature-200'>
															{new Date().toLocaleDateString('en-US', {
																month: 'short',
																day: 'numeric',
																year: '2-digit',
															})}
														</span>
														{' . '}
														<span> From: 0x0x...542</span>
													</div>
												</div>
											</div>
										</td>
										<td className='p-2'></td>
										{/* <td className='p-2'></td> */}
										<td className='p-2 pr-5 whitespace-nowrap'>
											<div className='text-right py-2 font-medium uppercase font-nunito text-base text-norm-black dark:text-white leading-5 tracking-wider'>
												{token.balance}
											</div>
											<div className='text-right py-2 font-normal font-nunito text-sm text-norm-light leading-5 tracking-wider'>
												{token.balance}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<TransferModal show={show} setShow={setShow} />
			<WithdrawModal show={showWithdrawModal} setShow={setshowWithdrawModal} />
		</>
	);
};

export default Wallet;
