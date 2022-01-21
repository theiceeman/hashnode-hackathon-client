import React from 'react'
import bitcoin from "../Public/imgs/bitcoin.svg";
import chainlink from "../Public/imgs/chainlink.svg";
import maid from "../Public/imgs/maid.svg";

function MarketTrend() {
    return (
        <div className='py-8 my-16 container mx-auto'>
             <div className='flex w-full justify-between flex-col lg:flex-row gap-y-3 px-4 lg:px-0 mb-8 lg:mb-16  content-center'>
                 <h1 className='justify-self-start text-5xl'>MarketTrend</h1>
                 <div className='flex items-center'>
                    <button className='w-full border-2 w-1/2 lg:w-full  border-gray-200 rounded-3xl font-segoe-ui hover:cursor-pointer hover:bg-norm-black hover:border-none hover:text-white focus:border-none text-gray-800 font-semibold text-lg px-8 py-2'>View more</button>
                 </div>
             </div>
             {/* <!-- component --> */}
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-sm capitalize font-dm-sans mb-4 border-b-2 border-gray-100 text-gray-400">
                            <tr className='py-4'>
                            <td class="p-2 whitespace-nowrap">
                                    <div class="py-3 text-md tracking-wider font-dm-sans text-left">#</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="py-3 text-md tracking-wider font-dm-sans text-left">Name</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="py-3 text-md tracking-wider font-dm-sans text-left">Price</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="py-3 text-md tracking-wider font-dm-sans text-left">24h change</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="py-3 text-md tracking-wider font-dm-sans text-center">Trade</div>
                                </td>
                            </tr>
                        </thead>
                        <tbody class="text-lg">
                            <tr className='hover:bg-gray-100 hover:rounded-3xl hover:cursor-pointer' >
                            <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center py-2">
                                       <span className='text-lg text-gray-500 font-dm-sans'>1</span>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center py-2">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-4"><img class="rounded-full" src={bitcoin} widtd="40" height="40" alt="Alex Shatov"/></div>
                                        <div class="font-medium text-lg mr-3 text-gray-800">Bitcoin</div>
                                        <div class="font-medium text-lg tracking-wider text-gray-300">BTC</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left py-2 text-lg font-semibold text-gray-600">$36,450.21</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left py-2 font-medium text-lg text-green-500">+1.7%</div>
                                </td>
                                <td class="p-2 whitespace-nowrap flex items-end content-end justify-center">
                                    <button class="text-lg py-1 px-6 mt-2 text-right hover:cursor-pointer hover:bg-norm-black hover:border-none hover:text-white focus:border-none border-2 text-gray-600 text-sm font-semibold border-gray-200 rounded-3xl">Trade</button>
                                </td>
                            </tr>
                            <tr className='hover:bg-gray-100 hover:rounded-xl hover:cursor-pointer' >
                            <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center py-2">
                                       <span className='text-lg text-gray-500 font-dm-sans'>2</span>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center py-2">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-4"><img class="rounded-full" src={maid} widtd="40" height="40" alt="Alex Shatov"/></div>
                                        <div class="font-medium text-lg mr-3 text-gray-800">Bitcoin</div>
                                        <div class="font-medium text-lg tracking-wider text-gray-300">BTC</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left py-2 text-lg font-semibold text-gray-600">$36,450.21</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left py-2 font-medium text-lg text-green-500">+1.7%</div>
                                </td>
                                <td class="p-2 whitespace-nowrap flex items-end content-end justify-center">
                                    <button class="text-lg py-1 px-6 mt-2 text-right hover:cursor-pointer hover:bg-norm-black hover:border-none hover:text-white focus:border-none  border-2 text-gray-600 text-sm font-semibold border-gray-200 rounded-3xl">Trade</button>
                                </td>
                            </tr>
                            <tr className='hover:bg-gray-100 hover:rounded-xl hover:cursor-pointer' >
                            <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center py-2">
                                       <span className='text-lg text-gray-500 font-dm-sans'>3</span>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center py-2">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-4"><img class="rounded-full" src={chainlink} widtd="40" height="40" alt="Alex Shatov"/></div>
                                        <div class="font-medium text-lg mr-3 text-gray-800">Bitcoin</div>
                                        <div class="font-medium text-lg tracking-wider text-gray-300">BTC</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left py-2 text-lg font-semibold text-gray-600">$36,450.21</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left py-2 font-medium text-lg text-green-500">+1.7%</div>
                                </td>
                        
                                <td class="p-2 whitespace-nowrap flex items-end content-end justify-center">
                                    <button class="text-lg py-1 px-6 mt-2 text-right hover:cursor-pointer hover:bg-norm-black hover:border-none hover:text-white focus:border-none  border-2 text-gray-600 text-sm font-semibold border-gray-200 rounded-3xl">Trade</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MarketTrend