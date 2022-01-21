import React from 'react'

function Modal({children,open,close}) {
    return (
        <div className='fixed inset-0 w-screen h-screen bg-slate-300'>
            {children}
        </div>
    )
}

export default Modal
