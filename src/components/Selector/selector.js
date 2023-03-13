import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdArrowDropDown } from 'react-icons/md';

export const TokenSelector = React.forwardRef((props, ref) => {
	// console.log('yyy',props.selectedValue)
	const [query, setQuery] = useState('');
	const [depositToken, setDepositToken] = useState(props.selectedValue.address)

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target) && props.open) {
				props.onToggle();
				setQuery('');
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [props, ref]);



	return (
		<div ref={ref}>
			<div className='mt-1 relative w-full'>
				<button
					type='button'
					className='bg-white dark:bg-nature-800 relative w-full border border-norm-light rounded-lg shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-norm-blue focus:border-norm-blue'
					aria-haspopup='listbox'
					aria-expanded='true'
					aria-labelledby='listbox-label'
					onClick={props.onToggle}
				>

					<input
						type='search'
						name='tokenAddress'
						autoComplete={'off'}
						className='hidden'
						value={depositToken}
						readOnly
					/>
					<span className='truncate flex items-center'>
						<img
							alt={`${props.selectedValue.value}`}
							src={props.selectedValue.image}
							className={'inline mr-2 w-7 h-7 rounded-full'}
						/>
						<span className='font-medium font-dm-sans text-norm-black dark:text-norm-text text-[28px]'>
							{props.selectedValue.id}
						</span>
					</span>
					<span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
						<MdArrowDropDown className='h-5 w-6 font-extrabold text-norm-light' />
					</span>
				</button>
				{props.open && (
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.1 }}
						className='absolute z-10 mt-1 w-full bg-white dark:bg-nature-800 shadow-lg max-h-80 rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
						tabIndex={-1}
						role='listbox'
						aria-labelledby='listbox-label'
						aria-activedescendant='listbox-option-3'
					>
						<div className='sticky top-0 z-10 bg-white dark:bg-nature-800'>
							<li className=' text-norm-black dark:text-norm-text cursor-default select-none relative py-2 px-3'>
								<input
									type='search'
									name='search'
									autoComplete={'off'}
									className='bg-white dark:bg-nature-900 font-dm-sans focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded'
									placeholder={'Search for a token'}
									onChange={(e) => setQuery(e.target.value)}
								/>
							</li>
							<hr />
						</div>

						<div
							className={
								'max-h-64 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-thin overflow-y-scroll'
							}
						>
							{props.tokens.filter((token) => token.id.toLowerCase().startsWith(query.toLowerCase()))
								.length === 0 ? (
								<li className='text-norm-light dark:text-norm-text font-dm-sans font-medium cursor-default select-none relative py-3 pl-3 pr-9'>
									No tokens available matching <b>{query}</b>
								</li>
							) : (
								props.tokens
									.filter((token) => token.id.toLowerCase().startsWith(query.toLowerCase()))
									.map((value, index) => {
										return (
											<li
												key={`${props.id}-${index}`}
												className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 flex items-center hover:bg-gray-50 transition'
												id='listbox-option-0'
												role='option'
												aria-selected={false}
												onClick={() => {
													props.onChange(value.id);
													setQuery('');
													setDepositToken(value.address)
													props.onToggle();
												}}
											>
												<img
													alt={`${value.id}`}
													src={value.image}
													className={'inline mr-2 w-6 h-6 rounded-full'}
												/>

												<span className='font-normal font-dm-sans text-sm leading-5 text-norm-black dark:text-norm-text truncate'>
													{value.id}
												</span>
											</li>
										);
									})
							)}
						</div>
					</motion.ul>
				)}
				<AnimatePresence></AnimatePresence>
			</div>
		</div>
	);
});
