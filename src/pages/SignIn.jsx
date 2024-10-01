import React, { useState } from 'react'
import Title from '../components/Title'
import { Link,NavLink } from 'react-router-dom'


const SignIn = () => {

  const [showPassword,setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 border-2 p-4 bg-cyan-300  m-auto mt-14 gap-4 '>
      <div className='text-2xl sm:text-3xl'>
      <Title text1={'Sign'} text2={'In'}/>
      </div>
      <input type="text" className='w-full px-3 py-2   ' placeholder='Name' required />
      <input type="email" className='w-full px-3 py-2    ' placeholder='Email' required />
      <input type={showPassword ? 'text' : 'password'} className='w-full px-3 py-2' placeholder='Password' required />
      <input type={showPassword ? 'text' : 'password'} className='w-full px-3 py-2' placeholder='Confirm Password' required />

      

      <div className='w-full flex justify-between  text-xs sm:text-sm mt-[8px] items-center font-semibold'>
      <button type='button' onClick={togglePasswordVisibility} className='  sm:mr-[210px] text-xs bg-blue-400 rounded-full py-2 px-2 font-semibold'>
      {
        showPassword ? 'Hide Password' : 'Show Password'
      }
      </button>
      <NavLink className="no-active-bg hover:text-blue-700 active:text-blue-500">
        <Link to='/login'><button>Login</button></Link>
        <hr className='border border-black '/>
      </NavLink>
      </div>
      <div className='bg-gray-900 text-white  px-8 py-3  hover:bg-gray-700 hover:text-white active:bg-gray-500 font-semibold rounded-full'>
         <button>Sign in</button>
      </div>
      
    </form>
  )
}

export default SignIn
