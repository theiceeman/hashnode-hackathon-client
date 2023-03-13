
import dotenv from "dotenv";
dotenv.config();
const tokens = [
	{
		id: 'USDC',
		image: 'https://compound.finance/compound-components/assets/asset_USDC.svg',
		name: 'USD Coin',
		price: '36376.81',
		profit: '-8.92',
		balance: '0 BTC',
		address: process.env.REACT_APP_USDC_ADDRESS
	},
	{
		id: 'DAI',
		image: 'https://compound.finance/compound-components/assets/asset_DAI.svg',
		name: 'Dai',
		price: '2593.08',
		profit: '+11.24',
		balance: '0.3708 ETH',
		address: process.env.REACT_APP_DAI_ADDRESS
	},
	{
		id: 'UNI',
		image: 'https://compound.finance/images/asset_UNI.svg',
		name: 'Uniswap',
		price: '386.59',
		profit: '-9.68',
		balance: '0 BNB',
		address: process.env.REACT_APP_UNI_ADDRESS
	},
	{
		id: 'WBTC',
		image: 'https://compound.finance/compound-components/assets/asset_BTC.svg',
		name: 'Wrapped BTC',
		price: '1.00',
		profit: '+10.02',
		balance: '0 USDT',
		address: process.env.REACT_APP_WBTC_ADDRESS
	},
	{
		id: 'USDT',
		image: 'https://compound.finance/compound-components/assets/asset_USDT.svg',
		name: 'Tether',
		price: '0.64',
		profit: '-11.49',
		balance: '0 XRP',
		address: process.env.REACT_APP_USDT_ADDRESS
	},
];

export default tokens;
