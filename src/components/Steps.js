import React from 'react';
import img1 from "../Public/imgs/logo-light.svg";
import img2 from '../Public/imgs/globe.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Steps() {
    return (
       <div className='mt-16 px-4 lg:my-24'>
            <div className="container mx-auto">
                <div className='text-center w-full flex items-center justify-start  lg:justify-center mb-4'>
                    <img src={img1} />
                </div>
                <h1 className='md:text-center text-left text-4xl lg:text-5xl'>How it works</h1>
                <p className='md:text-center text-left my-3 lg:my-5 text-xl text-grey-600 font-segoe-ui  text-xl'>Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                <div className='max-w-xl lg:px-8 mt-5 py-6 lg:mx-auto'>
                    <Carousel autoPlay={true} interval={3000} emulateTouch={true} showArrows={true} useKeyboardArrows={true} infiniteLoop={true}>
                    <div className='px-4 flex flex-col-reverse bg-grey-100 md:flex-row justify-between rounded-xl shadow-lg py-2 lg:py-6'>
                        <div className='lg:p-4 p-2 flex flex-col text-left justify-center gap-3 items-start'>
                            <span className='text-gray-700 md:mb-2 mb-0 text-lg uppercase tracking-wider font-bold'>Step 1</span>
                            <h2 className='text-xl font-medium font-dm-sans text-gray-500'>Connect Wallet</h2>
                            <span className='text-gray-400 font-dm-sans' >Stacks is a production-ready library of stackable content blocks built in React Native.</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={img2}/>
                        </div>
                    </div>
                    <div className='px-4 flex flex-col-reverse bg-grey-100 md:flex-row justify-between rounded-xl shadow-lg py-2 lg:py-6'>
                        <div className='lg:p-4 p-2 flex flex-col text-left justify-center gap-3 items-start'>
                            <span className='text-gray-700 md:mb-2 mb-0 text-lg uppercase tracking-wider font-bold'>Step 2</span>
                            <h2 className='text-xl font-medium font-dm-sans text-gray-500'>Connect Wallet</h2>
                            <span className='text-gray-400 font-dm-sans' >Stacks is a production-ready library of stackable content blocks built in React Native.</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={img2}/>
                        </div>
                    </div>
                    <div className='px-4 flex flex-col-reverse bg-grey-100 md:flex-row justify-between rounded-xl shadow-lg py-2 lg:py-6'>
                        <div className='lg:p-4 p-2 flex flex-col text-left justify-center gap-3 items-start'>
                            <span className='text-gray-700 md:mb-2 mb-0 text-lg uppercase tracking-wider font-bold'>Step 3</span>
                            <h2 className='text-xl font-medium font-dm-sans text-gray-500'>Connect Wallet</h2>
                            <span className='text-gray-400 font-dm-sans' >Stacks is a production-ready library of stackable content blocks built in React Native.</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={img2}/>
                        </div>
                    </div>
                    </Carousel>
                </div>
            </div>
       </div>
    )
}

export default Steps
