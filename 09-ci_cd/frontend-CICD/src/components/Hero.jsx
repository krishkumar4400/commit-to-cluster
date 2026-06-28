import React from 'react'
import { assets } from '../assets/assets'
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <img
        src={assets.gradientBackground}
        className="absolute -top-50 -z-1 opacity-50"
        alt=""
      />
      <div className="mt-20 mb-10 text-center">
        <div className="px-6 py-1.5 bg-blue-200 text-blue-600 rounded-full text-sm inline-flex items-center justify-center gap-4 mb-5 border border-blue-400/80 ">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} className="w-3" alt="" />
        </div>

        <h1 className="text-gray-700 pb-4 text-2xl sm:text-4xl sm:leading-15 md:text-5xl font-semibold ">
          Your own <span className="text-blue-600">blogging</span> <br />{" "}
          platform.
        </h1>
        <p className='text-gray-500 max-sm:text-sm max-w-2xl m-auto mb-6 sm:mb-8'>
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it’s one word or a thousand, your story
          starts right here
        </p>
        <SearchBar/>
      </div>
    </div>
  );
}

export default Hero
