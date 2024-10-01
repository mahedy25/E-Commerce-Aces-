import React, { useCallback, useContext, useState } from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink} from 'react-router-dom'
import { useEffect } from "react";
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible,setVisible] = useState(false);
  const {setShowSearch,getCartCount} = useContext(ShopContext);
  

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  }, [visible]);

  return (
    <div className='flex items-center justify-between py-5 font-medium '>
      <Link to='/'><img src={assets.logo}  alt="" className='w-24 sm:w-36
      '/></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-800 '>
      
      <NavLink to='/' className='flex flex-col items-center gap-1 font-semibold hover:text-cyan-500 active:text-cyan-300 '>
        <p >HOME</p>
        <hr className='w-10 border-none h-[1.5px] bg-gray-800 hidden'/>
      </NavLink>
      <NavLink to='/collections' className='flex flex-col items-center gap-1 hover:text-cyan-500 font-semibold active:text-cyan-300'>
        <p>COLLECTIONS</p>
        <hr className='w-10 border-none h-[1.5px] bg-gray-800 hidden'/>
      </NavLink>
      <NavLink to='/about' className='flex flex-col items-center font-semibold gap-1 hover:text-cyan-500 active:text-cyan-300'>
        <p>ABOUT</p>
        <hr className='w-10 border-none h-[1.5px] bg-gray-800 hidden'/>
      </NavLink>
      <NavLink to='/contact' className='flex flex-col font-semibold items-center gap-1 hover:text-cyan-500 active:text-cyan-300'>
        <p>CONTACT</p>
        <hr className='w-10 border-none h-[1.5px] bg-gray-800 hidden'/>
      </NavLink>
        
      </ul>
      <div className='flex items-center gap-6'>

        <div className="relative group">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="" className='w-5 cursor-pointer '/>

        {/* Tooltip */}
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Search
        </span>

        </div>
        
         <div className='group relative'>
            <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer'/>
            <div className='group-hover:block hidden absolute dropdown-menu right-0  pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-gray-800 text-white'>
                 <p className='cursor-pointer hover:text-cyan-500 active:text-cyan-300'>My Profile</p>
                 <Link to='/orders'><p className='cursor-pointer hover:text-cyan-500 active:text-cyan-300'>Orders</p></Link>
                 <Link to='/sign-in'><p className='cursor-pointer hover:text-cyan-500 active:text-cyan-300'>Sign In</p></Link>
                 <Link to='/login'><p className='cursor-pointer hover:text-cyan-500 active:text-cyan-300'>Log In</p></Link>
                 <p className='cursor-pointer hover:text-cyan-500 active:text-cyan-300'>Log Out</p>
              </div>
            </div>
         </div>
         <Link to='/cart' className='relative'>
            <div className=' relative group'>
            <img src={assets.cart_icon} alt="" className='w-5 min-w-5'/>

             {/* Tooltip */}
             <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 transition-opacity duration-200 group-hover:opacity-100">
             Cart
            </span>

            </div>
            <p className='absolute right-[-5px] w-4 text-center bottom-[-5px] leading-4 bg-gray-800 aspect-square rounded-full text-[8px] text-white'>{getCartCount()}</p>
         </Link>
         <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden'/>
      </div>

        {/*--------sidebar menu---------*/}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-cyan-300 transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-black font-sans font-semibold'>
              <div onClick={()=>setVisible(false)} className='flex  items-center ml-[348px] gap-4 p-3 mt-3 cursor-pointer'>
                <img src={assets.cross_icon} alt="" className='h-6'/>
                
              </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 hover:text-white' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 hover:text-white' to='/collections'>COLLECTIONS</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 hover:text-white' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 hover:text-white' to='/contact'>CONTACT</NavLink>
            </div>
        </div>

    </div>
  )
}

export default Navbar
