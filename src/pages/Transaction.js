
import { HiDownload as WithdrawalIcon, HiUpload as TransferIcon, HiExternalLink as DepositIcon } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { formater } from 'components/atom';
import tokens from 'components/_mock_/coin';
import { loadProvider } from 'lib/web3/script';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getUserTokenInvestmentBalance } from 'lib/web3/methods';
import { convertAmountToUsd } from 'lib/general/helper-functions';
import { MdVisibility, MdVisibilityOff, MdArrowBackIosNew } from 'react-icons/md';
import WithdrawInvestModal from 'components/WithdrawInvestModal';

const Transaction = () => {
	const [show, setShow] = useState(false);
	let { slug } = useParams()
	const [visible, setVisible] = useState(false);
	// const location = useLocation();
	let token = tokens.find((option) => option.id === slug)
	const [tokenbalance, setTokenbalance] = useState(0);
	const [tokenbalanceInUsd, setTokenbalanceInUsd] = useState(0.00);
	const { userAddress } = useSelector((state) => state.userAddress)


	useEffect(async () => {
		const provider = await loadProvider();
		let token = tokens.find((option) => option.id === slug)
		if (userAddress) {
			let balance = await getUserTokenInvestmentBalance(provider, userAddress, token.address)
			let balanceInUsd = await convertAmountToUsd(token.id, tokenbalance)
			setTokenbalance(balance)
			setTokenbalanceInUsd(balanceInUsd)
		}
	}, [slug, userAddress, tokenbalance])


	return (
		<>
			<div className='bg-white pb-7 rounded-t-lg dark:bg-nature-800'>
				<div className='flex items-center justify-between px-6 py-3 mx-auto border-b border-grey-50  dark:border-norm-light'>
					<Link
						to='/dashboard/stake'
						className='text-nature-700 hover:text-nature-800 font-medium rounded-full text-sm p-1.5  dark:text-nature-700 dark:hover:text-nature-700'
					>
						<MdArrowBackIosNew className='w-6 h-6' />
					</Link>
					<div>
						{/* <span className='text-center tracking-wider uppercase text-2xl font-extrabold leading-6 font-dm-sans text-norm-black dark:text-norm-text'>
							{token && token.id}
						</span> */}
						<span className='ml-4 text-center tracking-wider capitalize text-2xl font-semibold leading-6 font-dm-sans text-norm-light dark:text-norm-text'>
							{token && token.name}
						</span>
					</div>
					{/* <h1 className='text-center tracking-wider text-lg font-medium leading-5 font-dm-sans text-norm-light dark:text-norm-text'>
					 {state.id}
					</h1> */}
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
							<span className='text-[32px] font-normal font-nunito-sans tracking-wide text-norm-black dark:text-white mr-1'>
								{visible ? '****' : tokenbalance && tokenbalance}
							</span>
							<span className='text-[32px] font-normal font-nunito-sans text-norm-black dark:text-white'>
								{visible ? '****' : token && token.id}
							</span>
						</div>
						<span className='text-base leading-8 tracking-wide font-medium font-nunito text-neutral-500 dark:text-norm-text mt-2'>
							= {visible ? '****' : formater.format(tokenbalanceInUsd)}
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
							<WithdrawalIcon className='mr-1 -ml-1 w-4 h-4' />
							Withdraw
						</button>
						{/* <button
							type='button'
							className='py-2 px-4 mr-2 mb-2 text-sm font-dm-sans font-medium tracking-wide text-white rounded-full bg-norm-blue hover:bg-norm-dblue hover:text-norm-text text-center inline-flex items-center'
						// onClick={() => setShow(true)}
						>
							<TransferIcon className='mr-1 -ml-1 w-4 h-4' />
							Send
						</button> */}
					</div>
				</div>
			</div>
			<div className='bg-white dark:bg-nature-800 border-t border-norm-light dark:border-norm-light'>
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

			<WithdrawInvestModal
				show={show}
				setShow={setShow}
				token={token}
				setTokenBalanceInUsd={setTokenbalanceInUsd} />
		</>
	);
};

export default Transaction;
