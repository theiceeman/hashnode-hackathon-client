import React from 'react';
import { useRoutes } from 'react-router-dom';

//  layouts
import MainLayout from 'layouts/MainLayout';
import DashboardLayout from 'layouts/dashboard';
// pages
import { Error404Page, HomePage, StakePage, TransactionPage, WalletPage } from 'pages';

export default function Routes({ account}) {
	return useRoutes([
		{
			path: '/dashboard',
			element: <DashboardLayout account={account} />,
			children: [
				{ path: '', element: <WalletPage  account={account} /> },
				{ path: 'asset/:slug', element: <TransactionPage /> },
				{ path: 'stake', element: <StakePage /> },
			],
		},
		{
			path: '/',
			element: <MainLayout account={account} />,
			children: [{ path: '/', element: <HomePage /> }],
		},
		{ path: '*', element: <Error404Page /> },
	]);
}
