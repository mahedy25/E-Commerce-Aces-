import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div >

      <div className='text-3xl sm:text-4xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <h1 className='text-xl font-bold text-black'>Our Company-</h1>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptates dolorem dolor laborum voluptate qui molestiae ex libero tenetur. Illum nobis amet ullam repudiandae nemo.</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptates dolorem dolor laborum voluptate qui molestiae ex libero tenetur. Illum nobis amet ullam repudiandae nemo.</p>
         <b className='text-black text-xl'>Our Mission-</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nobis? Quia ullam velit itaque accusantium modi magni aliquid rerum dicta.</p>
         </div>
      </div>

      <div className='text-3xl sm:text-4xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-cyan-300'>
          <b className='text-xl'>User Friendly:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolor ipsa modi adipisci ipsam a.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-blue-300'>
          <b className='text-xl'>Best Customer Service:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolor ipsa modi adipisci ipsam a.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-fuchsia-400'>
          <b className='text-xl'>Quality Products:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolor ipsa modi adipisci ipsam a.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
