import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='bg-nature-100 dark:bg-nature-900'>
			<div className='px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<div className='flex flex-col items-center justify-between pt-5 pb-10 sm:flex-row'>
					<div className='flex items-center mt-4 space-x-4 sm:mt-0'>
						<a
							href='https://github.com/okorieebube/hashnode-hackathon-client'
							target='blank'
							className='text-nature-700 hover:text-nature-800 dark:hover:text-norm-text transition-colors duration-300 hover:text-teal-accent-400'
						>
							<FaGithub className='w-6 h-6' />
						</a>
					</div>
					<div className='flex items-center mt-4 space-x-4'>
						<a
							href='https://github.com/okorieebube/hashnode-hackathon-client'
							target='blank'
							className='text-sm font-medium font-dm-sans leading-5 text-nature-700 hover:text-nature-800 dark:hover:text-norm-text transition-colors duration-300'
						>
							Docs
						</a>
						<Link
							to='/'
							className='text-sm font-medium font-dm-sans leading-5 text-nature-700 hover:text-nature-800 dark:hover:text-norm-text transition-colors duration-300'
						>
							Article
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
