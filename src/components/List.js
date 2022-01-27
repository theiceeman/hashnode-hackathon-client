// import { useState } from 'react'
// import { Listbox } from '@headlessui/react'
// import img from  "../Public/imgs/bitcoin.svg";
// import { formater } from './atom';
const tokens = [
	{ id: 1, name: 'BTC Bitcoin', balance: 0.033, unavailable: false },
	{ id: 2, name: 'ETH Ethereum', balance: 0, unavailable: false },
	{ id: 3, name: 'TRX Tron', balance: 48900, unavailable: false },
];

function MyListbox() {
	return (
		<div>
			<span className='text-gray-500 text-sm font-semibold'>Coin</span>
			<select className='mt-2 border-1 w-full mb-1 py-4 text-gray-600 font-medium focus:outline-none hover:cursor-pointer border-norm-black rounded'>
				{tokens.map((token) => (
					<option
						className='rounded-lg p-2 text-gray-400 font-medium font-nunito hover:bg-gray-300'
						key={token.id}
						value={token}
						disabled={token.unavailable}
					>
						{token.name} {token.balance}
					</option>
				))}
			</select>
		</div>
	);
}

export default MyListbox;
