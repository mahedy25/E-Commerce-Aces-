import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='text-gray-800 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 font-sans '>

<div>
  <img src={assets.logo} alt="" className='mb-5 w-24 sm:w-36' />
  <p>An Accessories Website</p>
</div>

<div>
  <p className='text-2xl font-bold mb-5'>Company</p>
  <ul className='flex flex-col gap-1 text-cyan-500'>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
  </ul>
</div>

<div>
  <p className='text-2xl font-bold mb-5'>Contact Us</p>
  <ul className='flex flex-col gap-1 text-cyan-500'>
    <li>Call : +524658791455</li><br />
    <li>E-mail : aces413@gmail.com</li>
  </ul>
</div>
</div>
<div>
  <hr />
  <p className='py-5 font-medium text-center'>Copyright 2024@Aces All Rights Reserved</p>
</div>
    </div>
  )
}

export default Footer
