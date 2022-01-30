import React, { useState } from 'react';
// import MyListbox from './List';
import Modal from './Modal';
import tokens from './_mock_/coin';
import { TokenSelector } from './Selector/selector';

function TransferModal({ show, setShow }) {
	const [completed, setCompleted] = useState(false);
	const myRef = React.createRef();
	const [isOpen, setIsOpen] = useState(false);
	// Default this to a country's code to preselect it
	const [coin, setCoin] = useState('ETH');
	const Action = () => {
		setShow(false);
		setCompleted(true);
	};
	return (
		<div>
			{show && (
				<Modal>
					<div className='justify-self-center lg:w-1/2 w-full'>
						<div className='px-8 py-8 bg-white dark:bg-nature-900 z-50 rounded-xl shadow-lg flex flex-col '>
							<div className='flex justify-between mb-6 items-center'>
								<h2 className='justify-self-start text-center font-bold text-[32px] leading-10 text-norm-black dark:text-norm-text font-dm-sans'>
									Transfer{' '}
								</h2>
								<button
									onClick={() => setShow(false)}
									className=' py-1 px-3 rounded-full text-2xl text-norm-black dark:text-norm-light dark:hover:text-norm-text font-dm-sans font-extrabold justify-center border dark:hover:border-norm-text'
								>
									x
								</button>
								{/* <div
									onClick={() => setShow(false)}
									className='h-12 w-12 rounded-full justify-center border-2 hover:cursor-pointer flex items-center border-gray-100'
								>
									<span className='text-lg hover:cursor-pointer'>X</span>
								</div> */}
							</div>
							<div className='bg-gray-100 rounded-lg flex mb-6 justify-between items-center px-3 md:px-6 py-5'>
								<span className='font-medium font-dm-sans text-lg text-gray-600'>
									Available <br /> balance
								</span>
								<span className='text-right'>
									<p className='text-lg text-gray-800 font-dm-sans font-semibold'>2,4637 ETH</p>
									<p className='text-gray-500'>$10,123.98</p>
								</span>
							</div>
							<div className='mb-6 w-full'>
								{/* <MyListbox /> */}
								<span className='text-gray-500 text-sm font-semibold'>Coin</span>
								<TokenSelector
									id={'countries'}
									ref={myRef}
									open={isOpen}
									onToggle={() => setIsOpen(!isOpen)}
									tokens={tokens}
									onChange={(val) => setCoin(val)}
									selectedValue={tokens.find((option) => option.id === coin)}
								/>
							</div>
							<div className='mb-6 w-full'>
								<span className='text-gray-500 text-sm font-semibold'>Recipient Address</span>
								<input
									type='text'
									className='border-2 mt-1 w-full mb-1  focus:border-gray-600 focus:outline-none border-gray-200 rounded-lg'
									placeholder='**********'
								/>
							</div>
							<div className='md:mb-10 mb-6 w-full'>
								<span className='text-gray-500 text-sm font-semibold'>Amount to transfer</span>
								<input
									type='text'
									className='border-2 mt-1 w-full mb-1 focus:border-gray-600 focus:outline-none border-gray-200 rounded-lg'
									placeholder='20,000 ETH'
								/>
								<span className='text-gray-500'>max amount</span>
							</div>
							<div className='w-full'>
								<button
									onClick={Action}
									className='w-full border-2 text-center hover:border-gray-200 rounded-3xl  hover:cursor-pointer bg-gray-700  text-white  font-semibold text-lg px-8 py-2'
								>
									Transfer
								</button>
							</div>
						</div>
					</div>
				</Modal>
			)}
			{completed && (
				<Modal>
					<div className='px-8 py-8  w-1/2 bg-white z-50  rounded-lg shadow-lg flex flex-col '>
						<div className='flex justify-end items-center'>
							<div
								onClick={() => setCompleted(false)}
								className='h-12 w-12 justify-self-end text-right rounded-full justify-center border-2 hover:cursor-pointer flex items-center border-gray-100'
							>
								<span className='text-lg hover:cursor-pointer'>X</span>
							</div>
						</div>

						<h2 className='text-center font-semibold mb-3 text-3xl text-gray-700 font-dm-sans'>
							Congratulations{' '}
						</h2>
						{/* <span className='mb-4 text-4xl text-center'>🎉</span> */}
						<span className='text-center px-10 font-dm-sans text-gray-600 text-xl leading-8'>
							You successfully a withdrawal <span className='text-green-400'> 100.00 USDT </span> from
							Bitcloud
						</span>
						<div className='border-2 my-8  py-4 px-6 rounded-2xl border-gray-200'>
							<div className='flex justify-between border-b-2 pb-4'>
								<div>
									<span className='block font-dm-sans text-lg mb-3 tracking-wide font-medium text-gray-500'>
										Status
									</span>
									<span className='text-green-400 text-lg font-dm-sans tracking-wide'>Completed</span>
								</div>
								<div>
									<span className='block font-dm-sans text-lg mb-3 tracking-wide font-medium text-gray-500'>
										Transaction ID
									</span>
									<span className=' text-lg font-dm-sans tracking-wide'>0msx836930...87r398</span>
								</div>
							</div>
							<div className='my-4'>
								<span className='block font-dm-sans text-lg mb-3 tracking-wide font-medium text-gray-500'>
									Transaction ID
								</span>
								<span className=' text-lg font-dm-sans tracking-wide'>0msx836930...87r398</span>
							</div>
						</div>
						<button className='w-full border-2 font-dm-sans text-center hover:border-gray-200 rounded-3xl  hover:cursor-pointer bg-gray-700  text-white  font-semibold text-xl tracking-wide px-8 py-2'>
							Wallet
						</button>
					</div>
				</Modal>
			)}
		</div>
	);
}

export default TransferModal;
