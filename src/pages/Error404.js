import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<div className='flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28'>
			<div className='w-full lg:w-1/2'>
				<img className='hidden lg:block' src='/images/404-1.png' alt='404 Error' />
				<img className='hidden md:block lg:hidden' src='/images/404-2.png' alt='404 Error' />
				<img className='md:hidden' src='/images/404-2.png' alt='404 Error' />
			</div>
			<div className='w-full lg:w-1/2'>
				<h1 className='py-4 text-3xl lg:text-4xl font-extrabold font-dm-sans leading-6 text-slate-700'>
					Uh Oh! Looks like you've found the doorway to nothing 😏
				</h1>
				<p className='py-4 text-base font-dm-sans leading-6 text-slate-600'>
					The page you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.
				</p>
				<p className='py-2 text-base font-dm-sans leading-6 text-slate-600'>
					Sorry about that! Please return to our home page to get a detailed direction.
				</p>
				<Link to='/'>
					<button className='w-full lg:w-auto my-4 border font-dm-sans rounded-md px-1 sm:px-16 py-5 bg-glitz-300 text-white hover:bg-glitz-400'>
						Go back to Homepage
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Error404;
