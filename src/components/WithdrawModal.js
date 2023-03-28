import { rpcErrors } from 'lib/general/helper-functions';
import { SimpleToastError, SimpleToastSuccess } from 'lib/validation/error-handlers';
import { approve, withdrawFromVault } from 'lib/web3/methods';
import { loadProvider } from 'lib/web3/script';
import { getUserTotalBalance, getUserTotalBalanceinUsd } from 'providers/redux-toolkit/actions/user-actions';
import { setUserTotalBalance } from 'providers/redux-toolkit/reducers/user.reducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import MyListbox from './List';
import Modal from './Modal';
import { TokenSelector } from './Selector/selector';
import tokens from './_mock_/coin';

function WithdrawModal({ show, setShow }) {
	const dispatch = useDispatch();
	const [completed, setCompleted] = useState(false);
	const myRef = React.createRef();
	const [isOpen, setIsOpen] = useState(false);
	const [coin, setCoin] = useState('DAI');


	const { userAddress } = useSelector((state) => state.userAddress)
	const [provider, setProvider] = useState(null)


	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const values = Object.fromEntries(data.entries());
		const { recipient, tokenAddress, amount } = values;

		// console.log({ values }); return;

		let result = await withdrawFromVault(provider, userAddress, recipient, tokenAddress, amount);

		if (result.ok) {
			SimpleToastSuccess('Deposit successfull!')
			// window.location.reload();
			// store user total balance
			let totalBalance = await getUserTotalBalanceinUsd()
			if (totalBalance) dispatch(setUserTotalBalance(totalBalance))
		} else {
			let error = await rpcErrors(result.data);
			SimpleToastError(error.data)
		}
	}

	const Action = (e) => {
		setShow(false);
		handleSubmit(e)
		// setCompleted(true);
	};

	useEffect(async () => {
		setProvider(await loadProvider())
	}, [])
	return (
		<div>
			{show && (
				<Modal>
					<div className='justify-self-center lg:w-1/2 w-full'>
						<form onSubmit={Action}>
							<div className='px-4 lg:px-8 py-8 bg-white dark:bg-nature-900 z-50 rounded-xl shadow-lg flex flex-col '>
								<div className='flex justify-between mb-6 items-center'>
									<h2 className='justify-self-start text-center font-bold text-[32px] leading-10 text-norm-black dark:text-norm-text font-dm-sans'>
										Withdraw{' '}
									</h2>
									<button
										onClick={() => setShow(false)}
										className=' py-1 px-3 rounded-full text-2xl text-norm-black dark:text-norm-light dark:hover:text-norm-text font-dm-sans font-extrabold justify-center border dark:hover:border-norm-text'
									>
										x
									</button>
								</div>
								<div className='mb-6 w-full'>
									{/* <MyListbox /> */}
									<span className='text-gray-500 text-sm font-semibold'>Token</span>
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
									<span className='text-gray-500 text-sm font-semibold'>Address</span>
									<input
										type='text'
										name="recipient"
										className='border-2 mt-1 w-full mb-1  focus:border-gray-600 focus:outline-none border-gray-200 rounded-lg'
										placeholder="Recipient address..."
									/>
								</div>
								<div className='mb-6 w-full'>
									<span className='text-gray-500 text-sm font-semibold'>Amount</span>
									<input
										type='number'
										name="amount"
										className='border-2 mt-1 w-full mb-1  focus:border-gray-600 focus:outline-none border-gray-200 rounded-lg'
										placeholder='Amount to withdraw...'
									/>
								</div>
								<div className='w-full'>
									<button
										type="submit"
										className='w-full text-center rounded-3xl hover:cursor-pointer bg-norm-blue hover:bg-norm-dblue text-white hover:text-white font-dm-sans font-semibold text-lg px-8 py-2'
									>
										Withdraw
									</button>
								</div>
							</div>
						</form>
					</div>
				</Modal>
			)}
			{completed && (
				<Modal>
					<div className='px-8 py-8 lg:w-1/2 w-full bg-white z-50  rounded-lg shadow-lg flex flex-col '>
						<div className='flex justify-end items-center'>
							<button
								onClick={() => setCompleted(false)}
								className=' py-1 px-3 rounded-full text-2xl text-norm-black dark:text-norm-light dark:hover:text-norm-text font-dm-sans font-extrabold justify-center border dark:hover:border-norm-text'
							>
								x
							</button>
							{/* <div
								onClick={() => setCompleted(false)}
								className='h-12 w-12 justify-self-end text-right rounded-full justify-center border-2 hover:cursor-pointer flex items-center border-gray-100'
							>
								<span className='text-lg hover:cursor-pointer'>X</span>
							</div> */}
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
									<span className='text-green-400 text-sm lg:text-lg font-dm-sans tracking-wide'>
										Completed
									</span>
								</div>
								<div>
									<span className='block font-dm-sans text-lg mb-3 tracking-wide font-medium text-gray-500'>
										Transaction ID
									</span>
									<span className='text-sm lg:text-lg font-dm-sans tracking-wide'>
										0msx836930...87r398
									</span>
								</div>
							</div>
							<div className='my-4'>
								<span className='block font-dm-sans text-lg mb-3 tracking-wide font-medium text-gray-500'>
									Transaction ID
								</span>
								<span className=' text-lg font-dm-sans tracking-wide'>0msx836930...87r398</span>
							</div>
						</div>
						<button className='w-full border-2 font-dm-sans leading-5 text-center rounded-3xl  hover:cursor-pointer bg-norm-light hover:bg-norm-black  text-white  font-semibold text-xl tracking-wide px-8 py-2'>
							Wallet
						</button>
					</div>
				</Modal>
			)}
		</div>
	);
}

export default WithdrawModal;
