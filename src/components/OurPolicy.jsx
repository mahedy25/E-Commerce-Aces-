import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (


    <div >

<div className='text-center text-3xl sm:text-4xl lg:text-5xl '>
         <Title text1={'We'} text2={'Provide'}/>
      </div>

      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10 text-xs sm:text-sm md:text-base text-gray-700 '>
      <div>
        <img src={assets.exchange_icon} alt=""  className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>7 Days Free Exchange</p>
        <p className='text-gray-400'>You Can Exchange Any Products Under 7 Days</p>
      </div>

      <div>
        <img src={assets.quality_icon} alt=""  className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Quality Assurance</p>
        <p className='text-gray-400'>100% Good Quality Products</p>
      </div>

      <div>
        <img src={assets.support_img} alt=""  className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
      </div>
      </div>
      
    </div>
    
    
    
      
  )
}

export default OurPolicy
