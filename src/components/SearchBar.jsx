import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
  const [visible,setVisible] = useState(false)
  const location = useLocation();

  useEffect(()=>{
    if ((location.pathname.includes('/collections')) && showSearch) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
    
  },[location,showSearch]);

    

  return showSearch && visible ? (
    <div className=' text-center'>
       <div className='inline-flex items-center justify-center border border-gray-800 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>

<input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 w-full  outline-none bg-inherit text-sm'/>
              <img
              src={assets.cross_icon2}
              className="w-6 cursor-pointer mr-2"
              alt=""
              style={{ visibility: search.length > 0 ? 'visible' : 'hidden' }} // Toggle visibility
              onClick={() => setSearch('')} // Clear the input on click
              />
              <img
              src={assets.search_icon}
              className="w-4 cursor-pointer"
              alt=""
                   />
    </div>

    <h1 onClick={()=>setShowSearch(false)} className='inline cursor-pointer
    border px-3  py-1 bg-gray-800 text-white rounded-md'>Close</h1>
    </div>
      
      
  ) : null
}

export default SearchBar

