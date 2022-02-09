import React from 'react';
import { HiLightningBolt, HiCheckCircle, HiExclamationCircle, HiExclamation } from 'react-icons/hi';

const Alert = ({ title, msg }) => {
	const alertType =
		title === 'info'
			? 'glitz-300'
			: title === 'success'
			? 'nature-200'
			: title === 'warning'
			? 'nature-400'
			: 'nature-300';
	return (
		<div class='flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md'>
			<div className={`flex items-center justify-center w-12 bg-${alertType}`}>
				{/* <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
        </svg> */}
				{title === 'info' ? (
					<HiExclamationCircle className='w-6 h-6 text-white' />
				) : title === 'success' ? (
					<HiCheckCircle className='w-6 h-6 text-white' />
				) : title === 'warning' ? (
					<HiExclamation className='w-6 h-6 text-white' />
				) : (
					<HiLightningBolt className='w-6 h-6 text-white' />
				)}
			</div>

			<div className='px-4 py-2 -mx-3'>
				<div className='mx-3'>
					<span className={`font-semibold text-${alertType}`}>{title}</span>
					<p className='text-sm text-norm-black dark:text-norm-text'>{msg}</p>
				</div>
			</div>
		</div>
	);
};

export default Alert;
