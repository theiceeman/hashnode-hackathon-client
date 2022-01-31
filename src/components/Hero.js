import React from 'react';

function Hero() {
	return (
		<div className='py-2 container mx-auto md:py-12 md:mt-0 sm:py-8'>
			<div className='flex flex-col md:flex-row'>
				<div className='basis-[60%] items-start justify-center px-4 md:px-0 text-left flex flex-col py-8'>
					<h1 className='font-dm-sans text-norm-black dark:text-norm-text text-4xl lg:text-6xl'>
						Store<span className='font-bold text-norm-light'>.</span>Send
						<span className='font-bold text-norm-light'>.</span>Withdraw
					</h1>
					<h1 className='font-dm-sans text-norm-black dark:text-white text-4xl lg:text-6xl'>
						crypto assets seamless
					</h1>
					<p className='text-lg text-gray-500 font-dm-sans my-4'>
						Invest Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto asset exchange.
					</p>
					<a href='/dashboard'>
						<button className='bg-norm-blue hover:bg-norm-dblue border-none px-6 py-3 shadow-2xl my-3 rounded-3xl text-white font-dm-sans font-medium'>
							Get started now
						</button>
					</a>
				</div>
				<div className='basis-1/2 justify-end items-center px-2 '>
					<img src='/images/globe.png' alt='hero' className='bg-cover w-full' />
				</div>
			</div>
		</div>
	);
}

export default Hero;
