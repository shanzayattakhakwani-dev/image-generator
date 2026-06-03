import React from 'react';
import { testimonialsData, assets } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-12'>
      
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
        Customer testimonials
      </h1>

      <p className='text-gray-500 mb-12'>
        What users are saying
      </p>

      <div className='flex flex-wrap gap-6 justify-center'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='bg-white shadow-md p-6 rounded-lg w-72 text-center'>
            
            <img
              src={testimonial.image}
              alt=""
              className='rounded-full w-14 mx-auto'
            />

            <h2 className='mt-3 font-semibold'>
              {testimonial.name}
            </h2>

            <p className='text-gray-500 text-sm'>
              {testimonial.role}
            </p>

            <div className='flex justify-center mb-4 mt-2'>
              {Array(testimonial.stars).fill().map((_, i) => (
                <img key={i} src={assets.rating_star} alt="" />
              ))}
            </div>

            <p className='text-gray-600 text-sm'>
              {testimonial.text}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Testimonials;