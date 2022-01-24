import React from 'react';

function Hero() {
	return (
		<div className='py-2 container mx-auto md:py-12 md:mt-0 sm:py-8'>
			<div className='flex  flex-col md:flex-row'>
				<div className='basis-1/2  items-start justify-center px-6 md:px-0 text-left flex flex-col py-8'>
					<h1>Buy & Sell</h1>
					<h1>crypto in minutes</h1>
					<p className='text-lg text-gray-500 font-dm-sans my-4'>
						Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto asset exchange.
					</p>
					<button className='bg-norm-blue border-none px-6 py-3 shadow-2xl my-3 rounded-2xl text-white font-segoe-ui font-semibold'>
						Get started now
					</button>
				</div>
				<div className='basis-1/2 justify-end items-center px-2 '>
					<img src='/images/globe.png' alt='hero' className='bg-cover w-full' />
				</div>
			</div>
		</div>
	);
}

export default Hero;
