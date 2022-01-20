import React from 'react';
import { useRoutes } from 'react-router-dom';

//  layouts
import MainLayout from 'layouts/MainLayout';
import DashboardLayout from 'layouts/dashboard';
// pages
import { Error404Page, HomePage, WalletPage } from 'pages';

export default function Routes() {
	return useRoutes([
		{
			path: '/dashboard',
			element: <DashboardLayout />,
			children: [{ path: '', element: <WalletPage /> }],
		},
		{
			path: '/',
			element: <MainLayout />,
			children: [{ path: '/', element: <HomePage /> }],
		},
		{ path: '*', element: <Error404Page /> },
	]);
}
