import React from 'react';
function EachPricing({ img, coin_name, coin_number, coin_percent, color }) {
	console.log(coin_percent);
	return (
		<div className='px-6 py-8 hover:bg-white hover:shadow-xl hover:rounded-xl hover:cursor-pointer flex lg:flex-col justify-start text-left gap-y-2 items-start content-center'>
			<div className='justify-self-start mb-1 mr-4'>
				<img src={img} alt='bitcoin' className='bg-cover' />
			</div>
			<div className='flex flex-col'>
				<div className='flex gap-x-3 mb-1 items-center justify-self-start'>
					<span className='text-sm font-medium text-gray-400'>BTC/USDT</span>
					<span
						className={`rounded-3xl text-sm font-semibold ${
							coin_percent.startsWith('-') ? 'bg-norm-orange' : 'bg-norm-green'
						} text-white py-0.5 px-2`}
					>
						{coin_percent}
					</span>
				</div>
				<h2 className='text-2xl mb-1 tracking-wide text-gray-700 font-semibold font-dm-sans'>{coin_number}</h2>
				<p className='text-sm tracking-wider text-gray-700'>{coin_number}</p>
			</div>
		</div>
	);
}

function Pricing() {
	return (
		<div className='mt-4 container mx-auto'>
			<div className='grid grid-cols-1 lg:grid-cols-4 md:grid-col-2 gap-x-4 p-7 bg-gray-100 shadow-lg rounded-3xl'>
				<EachPricing
					img='/images/bitcoin.svg'
					coin_name='BTC/USDT'
					coin_number='36,641.20'
					coin_percent='-0.76%'
				/>
				<EachPricing
					img='/images/chainlink.svg'
					coin_name='BTC/USDT'
					coin_number='36,641.20'
					coin_percent='+0.76%'
				/>
				<EachPricing
					img='/images/maid.svg'
					coin_name='BTC/USDT'
					coin_number='36,641.20'
					coin_percent='+0.76%'
				/>
				<EachPricing
					img='/images/monero.svg'
					coin_name='BTC/USDT'
					coin_number='36,641.20'
					coin_percent='+0.76%'
				/>
			</div>
		</div>
	);
}

export default Pricing;
