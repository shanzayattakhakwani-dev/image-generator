import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
        Create AI Images
      </h1>

      <p className='text-gray-500 mb-8'>
        Turn Your Imagination into Visuals
      </p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
      <div>
        <h2 className='text-gray-600 mb-4'>
            Introducing the AI-powered Text to Image Generator
        </h2>
        <p className='text-gray-600'>
            Introducing the AI-powered Text to Image Generator, a smart tool that transforms your written ideas into stunning visuals within seconds. Simply describe what you imagine, and the AI brings it to life with creative and detailed images, making design, storytelling, and content creation faster and more accessible than ever.

        </p>

      </div>
      </div>
    </div>
  );
};

export default Description;