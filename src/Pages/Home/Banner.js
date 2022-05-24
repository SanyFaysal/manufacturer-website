import React from 'react';
import img from '../../images/layer_im_2.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen  bg-base-100   container mx-auto px-12 ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} class="lg:max-w-lg sm:max-w-sm rounded-lg" alt='bike' />
                <div className='pr-12'>
                    <h1 class="text-5xl font-bold">We Provide </h1>
                    <p class="py-6 text-xl">  The main parts of a bicycle like wheels, frame, seat, handle bars, and components and so many. We also could consider the helmet as a key safety issue.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;