import React from 'react'
import Title from './Title';

const NewsletterBox = () => {
  const onSubmitHandler = (event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <div className='text-center py-8 text-3xl sm:text-4xl lg:text-5xl bg-white'>
         <Title text1={'Subscribe To Our'} text2={'Newsletter Box'}/>
         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700 font-serif'>
         Get the latest updates and exclusive offers.
         </p>
      </div>
      <form className='w-full items-center sm:w-1/2 flex bg-white gap-3 mx-auto my-6 border pl-3'> 
          <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Your E-Mail' required/>
          <button type='submit' className='bg-black text-white hover:bg-cyan-500 active:bg-cyan-300 text-sm sm:text-lg font-semibold px-10 py-4'>Subscribe</button>
         </form>
    </div>
  )
}

export default NewsletterBox
