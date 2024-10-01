import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/*-------hero left side-------*/}
      <div className='w-full sm:w-1/2 flex items-center text-center justify-center py-10 sm:py-0'>
      <div className='text-gray-800'>
        <div className='flex items-center text-center justify-center gap-2'>
          <p className='w-2 sm:w-8 md:w-11 h-[2px] bg-gray-400'></p>
          <p className='font-semibold font-sans text-3xl  '>Welcome To The</p>
          <p className='w-2 sm:w-8 md:w-11 h-[2px] bg-gray-400'></p>
        </div>
        <h1 className=' text-2xl sm:py-3 lg:text-5xl leading-relaxed prata-regular '>Home Of <br /> Latest Accessory Items</h1>
      </div>
      </div>
      {/*-------hero Right side-------*/}
      <img src={assets.hero_img} alt="" className='w-full sm:w-1/2'/>
    </div>
  )
}

export default Hero
