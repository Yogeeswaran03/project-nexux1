import React from 'react';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import ChefImage from './assets/Chef.png';
 // Change the image source to a chef image or any relevant image for a restaurant

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row px-3 pt-32 pb-5 md:py-33 bg-secondary justify-center items-center'>

            <div className='md:flex md:flex-col  px-10 md:pl-8 md:justify-center pb-15 md:w-1/2 order-2 md:order-1'>
                <h1 className='md:w-1/2 text-white text-3xl md:text-4xl font-hero-font'>Welcome to Our Restaurant!</h1>
                <p className='md:text-2xl text-xl text-gray-200 mt-3'>Enjoy delicious meals prepared by our talented chefs.</p>
                
            </div>

            <div className="md:w-1/3 w-4/5 h-auto rounded-full border-4 border-solid flex mb-20 md:mb-0 justify-center items-center animate-border-color order-1 md:order-2">
                {/* Replace ChefImage with the relevant image source for your restaurant */}
                <img className="w-full h-auto rounded-full" src={ChefImage} alt="Chef Image" />
            </div>

        </section>
    );
}
