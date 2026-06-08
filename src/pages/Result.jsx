import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake loading simulation (optional but useful)
    setLoading(true);

    setTimeout(() => {
      setImage(assets.sample_img_2); // demo change
      setIsImageLoaded(true);
      setLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setIsImageLoaded(false);
    setInput('');
    setImage(assets.sample_img_1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col min-h-[90vh] justify-center items-center'
    >

      {/* IMAGE */}
      <div className='relative'>
        <img src={image} alt="" className='max-w-sm rounded' />

        {/* loading bar */}
        <span
          className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
            loading ? 'w-full transition-all duration-[2s]' : 'w-0'
          }`}
        />
      </div>

      {/* loading text */}
      <p className={!loading ? 'hidden' : ''}>
        Loading...
      </p>

      {/* INPUT SECTION */}
      {!isImageLoaded && (
        <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder='Describe what you want to generate'
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'
          />

          <button
            type='submit'
            className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'
          >
            Generate
          </button>
        </div>
      )}

      {/* RESULT BUTTONS */}
      {isImageLoaded && (
        <div className='flex gap-2 flex-wrap justify-center text-sm p-0.5 mt-10 rounded-full'>

          <p
            onClick={handleReset}
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'
          >
            Generate Another
          </p>

          <a
            href={image}
            download
            className='bg-zinc-900 text-white px-10 py-3 rounded-full cursor-pointer'
          >
            Download
          </a>

        </div>
      )}

    </form>
  );
};

export default Result;