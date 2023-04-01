import { convertAmountToUsd, rpcErrors } from 'lib/general/helper-functions';
import { SimpleToastError, SimpleToastSuccess } from 'lib/validation/error-handlers';
import { approve, getUserInvestments, getUserTokenInvestmentBalance, getUserTokenInvestments, withdrawFromCompound, withdrawFromVault } from 'lib/web3/methods';
import { loadProvider } from 'lib/web3/script';
import { getUserTotalBalanceinUsd } from 'providers/redux-toolkit/actions/user-actions';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import { TokenSelector } from './Selector/selector';
import tokens from './_mock_/coin';

function WithdrawInvestModal({ show, setShow, token, setTokenbalance,setTokenbalanceInUsd }) {
    const myRef = React.createRef();
    const [coin, setCoin] = useState('DAI');
    const [isOpen, setIsOpen] = useState(false);
    const [completed, setCompleted] = useState(false);

    const { userAddress } = useSelector((state) => state.userAddress)
    const [provider, setProvider] = useState(null)
    const [tokenInvestments, setTokenInvestments] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());
        const { investmentId, amount } = values;
        // console.log({ values }); return;

        let result = await withdrawFromCompound(provider, userAddress, investmentId, amount);
        if (!result.ok) {
            let error = await rpcErrors(result.data);
            SimpleToastError(error.data); return;
        }
        SimpleToastSuccess('Withdrawal successfull!')
        // let totalBalanceInUsd = await getUserTotalBalanceinUsd()
        // if (totalBalanceInUsd) setTotalBalanceInUsd(totalBalanceInUsd)
		let token = tokens.find((option) => option.id === coin)
		let balance = await getUserTokenInvestmentBalance(provider, userAddress, token.address)
		if (balance) setTokenbalance(balance)
		let balanceInUsd = await convertAmountToUsd(coin, balance)
		setTokenbalanceInUsd(balanceInUsd)
    }

    const Action = (e) => {
        setShow(false);
        handleSubmit(e)
        // setCompleted(true);
    };

    useEffect(async () => {
        if (userAddress && provider)
            setTokenInvestments(await getUserTokenInvestments(provider, userAddress, token.address))
    }, [userAddress, provider, token])

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
                                    {/* <div class="relative"> */}
                                    <select name="investmentId" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 pl-3 pr-10 bg-white text-gray-500">
                                        <option>-- Select Investment --</option>
                                        {tokenInvestments.map((e, index) => (
                                            <option key={index} value={index + 1}>{e.maturityValue} {coin} (DEPOSIT + INTEREST) </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                                        </svg>
                                    </div>
                                    {/* </div> */}
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
        </div>
    );
}

export default WithdrawInvestModal;
