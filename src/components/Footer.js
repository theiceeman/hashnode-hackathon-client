import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaHashtag } from 'react-icons/fa';

function Footer() {
	return (
		<footer className='bg-white dark:bg-nature-900'>
			<div className='px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<div className='flex flex-col items-center justify-between pt-5 pb-10 sm:flex-row'>
					<div className='flex items-center mt-4 space-x-4 sm:mt-0'>
						<a
							href='https://github.com/okorieebube/hashnode-hackathon-client'
							target='blank'
							className='text-nature-700 hover:text-nature-800 dark:hover:text-norm-text transition-colors duration-300 hover:text-teal-accent-400'
						>
							<FaGithub className='w-4 h-4 lg:w-6 lg:h-6' />
						</a>
						<a
							href='https://kelviniot.hashnode.dev/building-a-crypto-wallet-with-thirdweb-x-hashnode'
							target='blank'
							className='text-nature-700 underline inline-flex items-center hover:text-nature-800 dark:hover:text-norm-text transition-colors duration-300 hover:text-teal-accent-400'
						>
							<FaHashtag className='w-4 h-4 lg:w-6 lg:h-6' />
							<span className='font-dm-sans font-bold text-base lg:text-2xl'>thirdwebhackathon</span>
						</a>
					</div>
					{/* <p className='text-base font-medium font-dm-sans leading-5 text-nature-700 dark:hover:text-norm-text md:order-2'>
						© Bitcloud 2022 - All rights reserved
					</p> */}
					<div className='flex items-center mt-4 space-x-4'>
						<a
							href='https://github.com/okorieebube/hashnode-hackathon-client'
							target='blank'
							className='text-base font-medium font-dm-sans leading-5 hover:underline text-nature-700 hover:text-nature-800 dark:hover:text-norm-text transition-colors duration-300'
						>
							Docs
						</a>
						<Link
							to='/'
							className='text-base font-medium font-dm-sans leading-5 hover:underline text-nature-700 hover:text-nature-800 dark:hover:text-norm-text transition-colors duration-300'
						>
							Contracts
						</Link>
						<Link
							to='/'
							className='text-base font-medium font-dm-sans leading-5 hover:underline text-nature-700 hover:text-nature-800 dark:hover:text-norm-text transition-colors duration-300'
						>
							Team
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
