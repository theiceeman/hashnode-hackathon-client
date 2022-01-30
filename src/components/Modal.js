import React from 'react';

function Modal({ children }) {
	return (
		<div className='fixed inset-0 w-screen h-screen flex px-12 py-20 justify-center items-center bg-norm-black bg-opacity-60'>
			<div className='lg:w-[65%] w-full md:w-3/4 z-50 mx-auto flex justify-center'>{children}</div>
		</div>
	);
}

export default Modal;
