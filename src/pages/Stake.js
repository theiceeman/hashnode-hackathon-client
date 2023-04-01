import React, { useEffect, useState } from 'react';
import { formater } from 'components/atom';
import tokens from 'components/_mock_/coin';
import { useNavigate } from 'react-router-dom';
import { TokenSelector } from 'components/Selector/selector';
import { calculateInvestmentInterest, getUserTokenInvestmentBalance, investInCompound } from 'lib/web3/methods';
import { loadProvider } from 'lib/web3/script';
import { useSelector } from 'react-redux';
import { SimpleToastError, SimpleToastSuccess } from 'lib/validation/error-handlers';
import { convertAmountToUsd, rpcErrors } from 'lib/general/helper-functions';

const Stake = () => {
	const navigate = useNavigate();
	const myRef = React.createRef();
	const [coin, setCoin] = useState('DAI');
	const [isOpen, setIsOpen] = useState(false);
	const [tokenbalance, setTokenbalance] = useState(0);
	const [tokenbalanceInUsd, setTokenbalanceInUsd] = useState(0.00);

	const { userAddress } = useSelector((state) => state.userAddress)




	const handleSubmit = async (e) => {
		e.preventDefault();
		const provider = await loadProvider();
		const data = new FormData(e.target);
		const values = Object.fromEntries(data.entries());
		const { tokenAddress, amount } = values;
		// console.log({ values }); return;

		let res = await investInCompound(provider, userAddress, tokenAddress, amount)
		if (!res.ok) {
			SimpleToastError((await rpcErrors(res.data)).data);
			return;
		}

		SimpleToastSuccess('Investment successfull!')
		let balance = await getUserTokenInvestmentBalance(provider, userAddress, tokenAddress)
		if (balance) setTokenbalance(balance)
		let balanceInUsd = await convertAmountToUsd(coin, balance)
		setTokenbalanceInUsd(balanceInUsd)
	}


	const Action = (e) => {
		handleSubmit(e)
		// setCompleted(true);
	};

	useEffect(async () => {
		const provider = await loadProvider();
		let token = tokens.find((option) => option.id === coin)
		if (userAddress) {
			let balance = await getUserTokenInvestmentBalance(provider, userAddress, token.address)
			let balanceInUsd = await convertAmountToUsd(token.id, tokenbalance)
			setTokenbalance(balance)
			setTokenbalanceInUsd(balanceInUsd)
		}
	}, [coin, userAddress, tokenbalance])


	useEffect(async () => {

	}, [])






	return (
		<>
			<div className='bg-white pb-7 rounded-t-lg dark:bg-nature-800'>
				<div className='flex items-center justify-between px-6 py-3 mx-auto border-b border-grey-50  dark:border-norm-light'>
					<h1 className='w-full text-center tracking-wider text-2xl font-medium leading-5 font-dm-sans text-norm-light dark:text-norm-text'>
						Investments
					</h1>
				</div>
				<div className='container px-6 py-4 mx-auto'>
					<div className='flex flex-col items-center justify-between w-full mt-4'>
						<div className='flex items-center'>
							<span className='text-[32px] font-normal font-nunito-sans tracking-wide text-norm-black dark:text-white mr-1'>
								{tokenbalance}
							</span>
							<span className='text-[32px] font-normal font-nunito-sans text-norm-black dark:text-white'>
								{coin}
							</span>
						</div>
						<span className='text-base leading-8 tracking-wide font-medium font-nunito text-neutral-500 dark:text-norm-text mt-2'>
							= {formater.format(tokenbalanceInUsd)}
						</span>
					</div>
				</div>
				<div className='justify-self-center w-full px-20'>
					<form onSubmit={Action}>
						<div className='px-8 py-8 flex flex-col'>
							<div className='mb-6 w-full'>
								{/* <div className='flex items-center'> */}
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
								{/* <input
									type='number'
									id='base-input'
									placeholder='0.0'
									className=' mt-7 border-1 w-full py-4 text-gray-600 font-medium focus:outline-none hover:cursor-pointer border-norm-black rounded'
								/> */}
								{/* </div> */}
							</div>
							<div className='mb-6 w-full'>
								<span className='text-gray-500 text-sm font-semibold'>Amount</span>
								<input
									type='text'
									id='base-input'
									name="amount"
									placeholder='0'
									className='mt-2 border w-full py-2 text-norm-light text-[28px] font-nunito  font-medium focus:outline-none hover:cursor-pointer border-norm-light dark:bg-nature-800 rounded-lg'
								/>
							</div>
							<div className='flex items-center justify-center w-full'>
								<button className='w-full text-center rounded-3xl  hover:cursor-pointer bg-norm-blue hover:bg-norm-dblue text-white hover:text-white font-dm-sans font-semibold text-lg px-8 py-2'>
									Invest Asset
								</button>
								<button className='ml-4 lg:mt-0 w-full text-center rounded-3xl border border-norm-blue text-norm-light dark:text-norm-text hover:text-white hover:border-norm-dblue hover:bg-norm-dblue font-dm-sans font-medium text-lg px-8 py-2'>
									Withdraw Investment
								</button>
							</div>
						</div>
					</form>
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
									onClick={() => navigate(`/dashboard/asset/${token.id}`)}
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
														className={`ml-3 ${token.profit.startsWith('-')
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
											{token.balance}
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
		</>
	);
};

export default Stake;
