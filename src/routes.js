import React from 'react';
import { useRoutes } from 'react-router-dom';

//  layouts
import MainLayout from 'layouts/MainLayout';
import DashboardLayout from 'layouts/dashboard';
// pages
import { Error404Page, HomePage, StakePage, TransactionPage, WalletPage } from 'pages';

export default function Routes({ userAddress}) {
	return useRoutes([
		{
			path: '/dashboard',
			element: <DashboardLayout userAddress={userAddress} />,
			children: [
				{ path: '', element: <WalletPage /> },
				{ path: 'asset/:slug', element: <TransactionPage /> },
				{ path: 'stake', element: <StakePage /> },
			],
		},
		{
			path: '/',
			element: <MainLayout userAddress={userAddress} />,
			children: [{ path: '/', element: <HomePage /> }],
		},
		{ path: '*', element: <Error404Page /> },
	]);
}
