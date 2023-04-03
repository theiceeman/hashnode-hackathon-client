import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
//  layouts
import MainLayout from 'layouts/MainLayout';
import DashboardLayout from 'layouts/dashboard';
// pages
import { Error404Page, HomePage, StakePage, TransactionPage, WalletPage } from 'pages';
import { checkIfWalletIsConnected } from 'lib/web3/script';
import { setUserAddress } from 'providers/redux-toolkit/reducers/user.reducer';
import { useDispatch } from 'react-redux';

export default function Routes() {
	const dispatch = useDispatch()

	const fetchUser = async () => {
		let result = await checkIfWalletIsConnected()
		if (!result.ok) return;
		dispatch(setUserAddress(result.message))
	}

	useEffect(() => {
		fetchUser()
	}, [])

	// update ui when network changes
	window.ethereum.on("chainChanged", (chainId) => {
		setInterval(() => {
			window.location.reload();
			window.scrollTo(0, 0);
		}, 1000);

	});

	return useRoutes([
		{
			path: '/dashboard',
			element: <DashboardLayout />,
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
