import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
       <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img src={assets.contact_img} alt="" className='w-full md:w-[480px]' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-black'>Our Store</p>
          <p className='text-gray-500'>Bank street 6587 <br />Bangladesh</p>
          <p className='text-fuchsia-600'>Tel : 12345678</p>
          <p className='text-fuchsia-600'>E-mail Address :aces413@gmail.com</p>
          <p className='font-semibold text-xl text-black'>Get Job In Aces</p>
          <p className='text-gray-500'>Learn More About Our Team & Job Openings</p>
          <button className='bg-gray-900 text-white  px-8 py-3   hover:bg-gray-700 hover:text-white active:bg-gray-500 font-semibold rounded-full'>Explore Jobs</button>
        </div>
        
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact