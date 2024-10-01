import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext);
  const [showfilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
       setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () =>{

    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy =productsCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct = () =>{
    let fpCopy = filterProducts.slice();

    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break

        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
          break

          default:
            applyFilter();
            break
    }
  }
   
  
  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
     sortProduct();
  },[sortType])

  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 '>

      {/*---filter--------*/}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showfilter)} className='my-0 text-xl flex items-center cursor-pointer font-bold gap-2'>Add Filters:
          <img src={assets.dropdown_icon} alt="" className={`h-5 sm:hidden ${showfilter ? '' : '-rotate-90'}`}/>
        </p>
        {/*--------category--------*/}
        <div className={`border bg-gray-800  border-gray-500 text-white pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
         <p className='mb-3 text-xl font-bold'>Categories</p>
         <div className='flex flex-col gap-2 text-sm text-white'>
          <p className='flex gap-2'>
          <input type="checkbox" value={"Men's"} className='w-3'  onChange={toggleCategory} />Men's
          </p>
          <p className='flex gap-2'>
          <input type="checkbox" value={'Ladies'} className='w-3' onChange={toggleCategory} />Ladies
          </p>
          <p className='flex gap-2'>
          <input type="checkbox" value={'Both'} className='w-3' onChange={toggleCategory} />Both
          </p>
         </div>
        </div>
        {/*--------Sub Category--------*/}
        <div className={`border bg-cyan-300 border-gray-500 pl-5 py-3 my-5 ${showfilter ? '' : 'hidden'} sm:block`}>
         <p className='mb-3 text-xl font-bold'>Choose Product</p>
         <div className='flex flex-col gap-2 text-sm font-semibold text-gray-800'>
          <p className='flex gap-2'>
          <input type="checkbox" value={'Eyewear'} className='w-3' onChange={toggleSubCategory} />Eyewear
          </p>
          <p className='flex gap-2'>
          <input type="checkbox" value={'Shoulder Bag'} className='w-3' onChange={toggleSubCategory} />Shoulder Bag
          </p>
          <p className='flex gap-2'>
          <input type="checkbox" value={'Watch'} className='w-3' onChange={toggleSubCategory} />Watch
          </p>
          <p className='flex gap-2'>
          <input type="checkbox" value={'Round Hat'} className='w-3' onChange={toggleSubCategory} />Round Hat
          </p>
          <p className='flex gap-2'>
          <input type="checkbox" value={'Bracelet'} className='w-3' onChange={toggleSubCategory} />Bracelet
          </p>
          <p className='flex gap-2'>
          <input type="checkbox" value={'Finger Ring'} className='w-3' onChange={toggleSubCategory} />Finger Ring
          </p>
         </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>
         
      <div className='flex flex-col sm:flex-row justify-center sm:justify-between gap-3 text:3xl sm:text-4xl mb-4 -my-1'>
       <h1 className='font-semibold text-3xl'>All <span className='text-fuchsia-600'>Collections</span> </h1>
       
          {/* sort by */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 w-36 sm:w-44 border-gray-800 text-xs sm:text-sm px-2'>
            <option value="relavent">Price: Relavent</option>
            <option value="low-high">Price: Low To High</option>
            <option value="high-low">Price: High To Low</option>
          </select>
         </div>

         {/* All Products */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
              {
                filterProducts.map((item,index)=>(
                  <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                ))
              }
          </div>

      </div>
    </div>
  )
}

export default Collection
