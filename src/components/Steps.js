import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function Steps() {
	return (
		<div className='mt-16 px-4 lg:my-24'>
			<div className='container mx-auto'>
				<div className='text-center w-full flex items-center justify-start  lg:justify-center mb-4'>
					<img src='/images/logo-light.svg' alt='logo' />
				</div>
				<h1 className='md:text-center text-left text-4xl lg:text-5xl font-dm-sans left-5 dark:text-norm-text'>
					How it works
				</h1>
				<p className='md:text-center text-left my-3 leading-5 lg:my-5 text-xl text-grey-600 font-dm-sans'>
					Stacks is a production-ready library of stackable content blocks built in React Native.
				</p>
				<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
					<div className='grid gap-8 row-gap-8 lg:grid-cols-3'>
						<div className='sm:text-center'>
							<div className='flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 sm:mx-auto'>
								<img src='/images/step-2.png' alt='step 1' />
							</div>
							<span className='inline-flex items-center font-dm-sans font-bold text-norm-light mb-3'>
								Step 1
							</span>
							<h6 className='mb-2 font-semibold font-dm-sans text-norm-black dark:text-norm-text leading-5'>
								Connect wallet
							</h6>
							<p className='max-w-md mb-3 text-sm text-norm-light font-dm-sans leading-5 sm:mx-auto'>
								connnet to our Defi app using a MetaMask wallet on a Rinkeby Test Network
							</p>
						</div>
						<div className='sm:text-center'>
							<div className='flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 sm:mx-auto'>
								<img src='/images/step-3.png' alt='step 2' />
							</div>
							<span className='inline-flex items-center font-dm-sans font-bold text-norm-light mb-3'>
								Step 2
							</span>
							<h6 className='mb-2 font-semibold font-dm-sans text-norm-black dark:text-norm-text leading-5'>
								Start Staking & Depositing
							</h6>
							<p className='max-w-md mb-3 text-sm text-norm-light font-dm-sans leading-5 sm:mx-auto'>
								connnet to our Defi app using a MetaMask wallet on a Rinkeby Test Network
							</p>
						</div>
						<div className='sm:text-center'>
							<div className='flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 sm:mx-auto'>
								<img src='/images/step-4.png' alt='step 2' />
							</div>
							<span className='inline-flex items-center font-dm-sans font-bold text-norm-light mb-3'>
								Step 3
							</span>
							<h6 className='mb-2 font-semibold font-dm-sans text-norm-black dark:text-norm-text leading-5'>
								Earn money
							</h6>
							<p className='max-w-md mb-3 text-sm text-norm-light font-dm-sans leading-5 sm:mx-auto'>
								connnet to our Defi app using a MetaMask wallet on a Rinkeby Test Network
							</p>
						</div>
					</div>
				</div>
				{/* <div className='max-w-xl lg:px-8 mt-5 py-6 lg:mx-auto'>
					<Carousel
						autoPlay={true}
						interval={3000}
						emulateTouch={true}
						showArrows={true}
						useKeyboardArrows={true}
						infiniteLoop={true}
					>
						<div className='px-4 flex flex-col-reverse bg-grey-100 md:flex-row justify-between rounded-xl shadow-lg py-2 lg:py-6'>
							<div className='lg:p-4 p-2 flex flex-col text-left justify-center gap-3 items-start'>
								<span className='text-gray-700 md:mb-2 mb-0 text-lg uppercase tracking-wider font-bold'>
									Step 1
								</span>
								<h2 className='text-xl font-medium font-dm-sans text-gray-500'>Connect Wallet</h2>
								<span className='text-gray-400 font-dm-sans'>
									Stacks is a production-ready library of stackable content blocks built in React
									Native.
								</span>
							</div>
							<div className='flex items-center justify-center'>
								<img src='/images/globe.png' alt='globe' />
							</div>
						</div>
						<div className='px-4 flex flex-col-reverse bg-grey-100 md:flex-row justify-between rounded-xl shadow-lg py-2 lg:py-6'>
							<div className='lg:p-4 p-2 flex flex-col text-left justify-center gap-3 items-start'>
								<span className='text-gray-700 md:mb-2 mb-0 text-lg uppercase tracking-wider font-bold'>
									Step 2
								</span>
								<h2 className='text-xl font-medium font-dm-sans text-gray-500'>Connect Wallet</h2>
								<span className='text-gray-400 font-dm-sans'>
									Stacks is a production-ready library of stackable content blocks built in React
									Native.
								</span>
							</div>
							<div className='flex items-center justify-center'>
								<img src='/images/globe.png' alt='globe2' />
							</div>
						</div>
						<div className='px-4 flex flex-col-reverse bg-grey-100 md:flex-row justify-between rounded-xl shadow-lg py-2 lg:py-6'>
							<div className='lg:p-4 p-2 flex flex-col text-left justify-center gap-3 items-start'>
								<span className='text-gray-700 md:mb-2 mb-0 text-lg uppercase tracking-wider font-bold'>
									Step 3
								</span>
								<h2 className='text-xl font-medium font-dm-sans text-gray-500'>Connect Wallet</h2>
								<span className='text-gray-400 font-dm-sans'>
									Stacks is a production-ready library of stackable content blocks built in React
									Native.
								</span>
							</div>
							<div className='flex items-center justify-center'>
								<img src='/images/globe.png' alt='globe3' />
							</div>
						</div>
					</Carousel>
				</div> */}
			</div>
		</div>
	);
}

export default Steps;
