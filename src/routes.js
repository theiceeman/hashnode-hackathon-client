import React, { useEffect, useState } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
//  layouts
import MainLayout from 'layouts/MainLayout';
import DashboardLayout from 'layouts/dashboard';
// pages
import { Error404Page, HomePage, StakePage, TransactionPage, WalletPage } from 'pages';
import { checkIfWalletIsConnected, connectedNetworkChainId } from 'lib/web3/script';
import { setUserAddress } from 'providers/redux-toolkit/reducers/user.reducer';
import { useDispatch, useSelector } from 'react-redux';


export default function Routes() {
	const dispatch = useDispatch()
	const [isAuth, setIsAuth] = useState(false)
	const [userNetwork, setUserNetwork] = useState(0)
	const { userAddress } = useSelector((state) => state.userAddress)

	const fetchUser = async () => {
		let result = await checkIfWalletIsConnected()
		if (!result.ok) return;
		dispatch(setUserAddress(result.message))
	}
	const authenticateUser = (userNetwork, userAddress) => {
		if (userAddress !== null && userNetwork == process.env.REACT_APP_CHAIN_ID)
			setIsAuth(true)
	}


	useEffect(async () => {
		userNetwork && userAddress && authenticateUser(userNetwork, userAddress)
	}, [userAddress, userNetwork, isAuth])

	useEffect(async () => {
		fetchUser()
		setUserNetwork(await connectedNetworkChainId())
	}, [])

	// update ui when network changes
	window.ethereum.on("chainChanged", (chainId) => {
		setUserNetwork(parseInt(chainId, 16))
		setInterval(() => {
			window.location.reload();
			window.scrollTo(0, 0);
		}, 1000);
	});


	return useRoutes([
		{
			path: '/dashboard',
			element: isAuth ? <DashboardLayout /> : <Navigate to="/" />,
			children: [
				{ path: '', element: <WalletPage /> },
				{ path: 'asset/:slug', element: <TransactionPage /> },
				{ path: 'stake', element: <StakePage /> },
			],
		},
		{
			path: '/',
			element: <MainLayout />,
			children: [{ path: '/', element: <HomePage /> }],
		},
		{ path: '*', element: <Error404Page /> },
	]);
}
