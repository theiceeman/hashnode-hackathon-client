import React, { useState } from 'react';
import img1 from "../Public/imgs/logo-light.svg";
import TransferModal from './TransferModal';

function Nav() {
    const [show, setShow] = useState(false);
    return (
        <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container px-6 py-3 mx-auto">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                    <div className='col-span-1  flex py-1'>
                <img src={img1} className='bg-cover md:border-r-2 pr-6 py-1' />
                 </div>
                    </div>

                    {/* <!-- Mobile menu button --> */}
                    <div class="flex md:hidden">
                        <button type="button" onClick={()=> setShow(!show)} class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-8 h-8 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div class="items-center justify-self-center md:flex">
                    <div class={`${show ? 'flex' : 'hidden'}   md:flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1`}>
                        <a class="li" href="#">Exchange</a>
                        <a class="li" href="#">Market</a>
                        <a class="li" href="#">Discover</a>
                        <a class="li" href="#">Dashboard</a>
                        {/* <TransferModal /> */}
                    </div>

                    <div class={`${show ? 'flex' : 'hidden'} md:flex items-center py-2 -mx-1 md:mx-0`}>
            <button className='bg-norm-blue border-none px-4 py-2 shadow-2xl rounded-2xl text-white font-segoe-ui font-semibold' >Connect Wallet</button>     </div>


                    {/* <!-- Search input on mobile screen --> */}
                    {/* <div class="mt-3 md:hidden">
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                        </div>
                    </div> */}
                </div>
            </div>
            </div>
            </nav>
    //   <div className='w-full border-b-2 z-50 bg-white border-grey-100 py-4 sticky top-0' >
    //       <div className='container mx-auto items-center grid grid-cols-5'>
    //     <div className='col-span-1  flex py-1'>
    //         <img src={img1} className='bg-cover border-r-2 pr-6 py-1' />
    //     </div>
    //     <div class="flex md:hidden">
    //                 <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
    //                     <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
    //                         <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
    //                     </svg>
    //                 </button>
    //             </div>

    //     <div className='col-span-2'>
    //         <ul className='text-left flex justify-start items-start'>
    //              <li className='li' >Exchange</li>
    //              <li className='li' >Market</li>
    //              <li className='li'>Discover</li>
    //              <li className='li'>Dashboard</li>
    //         </ul>
    //     </div>
    //     <div className='col-span-2 justify-self-end flex items-center content-end'>
    //         <button className='bg-norm-blue border-none px-4 py-2 shadow-2xl rounded-2xl text-white font-segoe-ui font-semibold' >Connect Wallet</button>
    //     </div>
    // </div>
    //   </div>
    )
}

export default Nav
