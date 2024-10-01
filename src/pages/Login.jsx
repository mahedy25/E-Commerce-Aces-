import React from 'react'
import Title from '../components/Title'
import { Link,NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 border p-2  sm:p-4 bg-cyan-300'>
      <div className='text-2xl sm:text-3xl'>
      <Title text1={'Log'} text2={'In'}/>
      </div>
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />

      <div className='w-full flex justify-between  text-xs sm:text-sm mt-[8px] items-center font-semibold'>
      <p className='cursor-pointer'>Forgot Password?</p>
      <NavLink className="no-active-bg hover:text-blue-700 active:text-blue-500">
        <Link to='/sign-in'><p>Create Account</p></Link>
        <hr className='border border-black '/>
      </NavLink>
      </div>

      <div className='bg-gray-900 text-white  px-8 py-3   hover:bg-gray-700 hover:text-white active:bg-gray-500 font-semibold rounded-full'>
         <button>Log In</button>
      </div>
      
    </form>
  )
}

export default Login
