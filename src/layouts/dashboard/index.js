import React from 'react';
import { Outlet } from 'react-router-dom';
// import { ThirdwebProvider } from '@3rdweb/react';
// import { ConnectorOptions } from '@3rdweb/hooks';
// Dashboard components
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';
// const supportedChainIds = [1, 4, 137, 250, 43114, 80001];
// const supportedChainIds = [1, 4, 137, 250, 43114, 80001];
// const connectors = {
// 	injected: {},
// 	magic: {},
// 	walletconnect: {},
// 	walletlink: {
// 		appName: 'thirdweb - demo',
// 		url: 'https://thirdweb.com',
// 		darkMode: true,
// 	},
// };

const DashboardLayout = () => {
	return (
		<>
			{/* <ThirdwebProvider connectors={connectors} supportedChainIds={supportedChainIds}> */}
			<div className='bg-nature-100 dark:bg-nature-900'>
				<div className='w-full'>
					{/* Navigation starts */}
					<Navbar />
					<TopBar />
					{/* Navigation ends */}
					<main className='lg:container lg:mx-auto py-12 w-full lg:px-8'>
						<Outlet />
					</main>
				</div>
				<Footer />
			</div>
			{/* </ThirdwebProvider> */}
		</>
	);
};

export default DashboardLayout;
