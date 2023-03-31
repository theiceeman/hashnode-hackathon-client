import { rpcErrors } from 'lib/general/helper-functions';
import { SimpleToastError, SimpleToastSuccess } from 'lib/validation/error-handlers';
import { approve, getUserInvestments, getUserTokenInvestments, withdrawFromVault } from 'lib/web3/methods';
import { loadProvider } from 'lib/web3/script';
import { getUserTotalBalanceinUsd } from 'providers/redux-toolkit/actions/user-actions';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import { TokenSelector } from './Selector/selector';
import tokens from './_mock_/coin';

function WithdrawInvestModal({ show, setShow,token, setTotalBalanceInUsd }) {
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
        const { recipient, tokenAddress, amount } = values;

        let result = await withdrawFromVault(provider, userAddress, recipient, tokenAddress, amount);
        if (!result.ok) {
            let error = await rpcErrors(result.data);
            SimpleToastError(error.data); return;
        }
        SimpleToastSuccess('Deposit successfull!')
        let totalBalanceInUsd = await getUserTotalBalanceinUsd()
        if (totalBalanceInUsd) setTotalBalanceInUsd(totalBalanceInUsd)
    }

    const Action = (e) => {
        setShow(false);
        handleSubmit(e)
        // setCompleted(true);
    };
    useEffect(async () => {
        setProvider(await loadProvider())
        userAddress && setTokenInvestments(await getUserTokenInvestments(provider,userAddress,token.address))
    }, [userAddress,token])

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
        </div>
    );
}

export default WithdrawInvestModal;
