import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff, MdArrowBackIosNew } from 'react-icons/md';
import { formater } from 'components/atom';
import { HiDownload as WithdrawalIcon, HiUpload as TransferIcon, HiExternalLink as DepositIcon } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const Transaction = () => {
	const [visible, setVisible] = useState(false);
	const location = useLocation();
	const token = location.state;
	return (
		<>
			<div className='bg-white pb-7 rounded-t-lg dark:bg-nature-800'>
				<div className='flex items-center justify-between px-6 py-3 mx-auto border-b border-grey-50  dark:border-norm-light'>
					<Link
						to='/dashboard'
						className='text-nature-700 hover:text-nature-800 font-medium rounded-full text-sm p-1.5  dark:text-nature-700 dark:hover:text-nature-700'
					>
						<MdArrowBackIosNew className='w-6 h-6' />
					</Link>
					<div>
						<span className='text-center tracking-wider uppercase text-2xl font-extrabold leading-6 font-dm-sans text-norm-black dark:text-norm-text'>
							{token && token.id}
						</span>
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
								{visible ? '****' : token && token.balance}
							</span>
							{/* <span className='text-[32px] font-normal font-nunito-sans text-norm-black dark:text-white'>
								{visible ? '***' : 'ETH'}
							</span> */}
						</div>
						<span className='text-base leading-8 tracking-wide font-medium font-nunito text-neutral-500 dark:text-norm-text mt-2'>
							= {visible ? '****' : formater.format(token.price)}
						</span>
					</div>

					<div className='flex items-center justify-center w-full mt-10'>
						<button
							type='button'
							class='py-2 px-4 mr-2 mb-2 text-sm font-dm-sans font-medium tracking-wide text-white rounded-full bg-norm-blue hover:bg-norm-dblue hover:text-norm-text text-center inline-flex items-center'
						>
							<DepositIcon className='mr-1 -ml-1 w-4 h-4' />
							Deposit
						</button>
						<button
							type='button'
							class='py-2 px-4 mr-2 mb-2 text-sm font-dm-sans font-medium tracking-wide text-white rounded-full bg-norm-blue hover:bg-norm-dblue hover:text-norm-text text-center inline-flex items-center'
						>
							<WithdrawalIcon className='mr-1 -ml-1 w-4 h-4' />
							Withdraw
						</button>
						<button
							type='button'
							class='py-2 px-4 mr-2 mb-2 text-sm font-dm-sans font-medium tracking-wide text-white rounded-full bg-norm-blue hover:bg-norm-dblue hover:text-norm-text text-center inline-flex items-center'
							// onClick={() => setShow(true)}
						>
							<TransferIcon className='mr-1 -ml-1 w-4 h-4' />
							Send
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Transaction;
