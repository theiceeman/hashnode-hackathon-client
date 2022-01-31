import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThirdwebProvider } from '@3rdweb/react';
import { RinkeByChainID } from 'components/constants';
import '@themesberg/flowbite';
import './css/tailwind.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<ThirdwebProvider
			supportedChainIds={RinkeByChainID}
			connectors={{
				injected: {},
			}}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThirdwebProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
