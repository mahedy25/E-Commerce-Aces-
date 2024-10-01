import React, { useContext, useState , useEffect } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);

  
  const [deliveryInfo, setDeliveryInfo] = useState({
   firstname: '',
   lastname: '',
   email: '',
   street: '',
   city: '',
   state: '',
   zip: '',
   country:'',
   phone: '',
    });

   


    // Ensure this function updates the state correctly
  const handleChange = (e) => {
   const { name, value } = e.target;
   setDeliveryInfo((prevInfo) => ({
     ...prevInfo,
     [name]: value, // Update the correct field based on the name attribute
   }));
 };

    const handlePlaceOrder = () => {
      const { firstname, lastname, email, street, city, state, zip, country, phone } = deliveryInfo;
  
      // Check if any field is empty
      if (!firstname || !lastname || !email || !street || !city || !country || !phone) {
        toast.error('Please complete all the required delivery information before placing the order!',{
        theme:'dark',
        position:'bottom-right',
        });
        
        return;
      }
  
      // Proceed to navigate to the "See Order" page if information is complete
      navigate('/orders');
        // Adjust to your actual route
    };
  
    useEffect(() => {
      window.scrollTo({
        top:0,
      });
    }, []);

 

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

       {/* left side */}
       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'}/>
          </div>

          <div className='flex gap-3'>

            <input type="text" value={deliveryInfo.firstname}
              name="firstname"
          onChange={handleChange} placeholder='First Name*' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

            <input type="text" value={deliveryInfo.lastname} name="lastname"
          onChange={handleChange} placeholder='Last Name*' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

          </div>

          <input type="email" value={deliveryInfo.email} name="email"
          onChange={handleChange}  placeholder='Your Email Address*' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

          <input type="text" value={deliveryInfo.street} name="street"
          onChange={handleChange}   placeholder='Street*' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

          <div className='flex gap-3'>

            <input type="text" value={deliveryInfo.city} name="city"
          onChange={handleChange}  placeholder='City*' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

            <input type="text" value={deliveryInfo.state} name="state"
          onChange={handleChange}  placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

          </div>
          <div className='flex gap-3'>

            <input type="text" value={deliveryInfo.zip} name="zip"
          onChange={handleChange} placeholder='Zip-code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

            <input type="text" value={deliveryInfo.country} name="country"
          onChange={handleChange}   placeholder='Country*' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>

          </div>
          <input type="text" value={deliveryInfo.phone} name="phone"
          onChange={handleChange}  placeholder='Phone Number*' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
       </div>

        {/*-----------Right side---------------*/}

      <div className='mt-8'>

      <div className='mt-8 min-w-60'>
          <CartTotal/>
        </div>
      
      <div className='mt-12 text-2xl'>

      <Title text1={'Payment'} text2={'Method'}/>

      {/*------------payment method selection-----------------*/}

      <div className='flex gap-3 flex-col lg:flex-row'>

      <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
         </div>

         

         <div onClick={()=>setMethod('paypal')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-green-400' : ''}`}></p>
            <img className='h-5 mx-4' src={assets.payple_logo} alt="" />
         </div>

         <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
         </div>

         <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
            <h1 className='text-gray-800 text-sm font-semibold mx-4'>Cash On Delivery</h1>
         </div>
      </div>

      <div className='w-full text-end mt-4'>
         <button onClick={handlePlaceOrder} className='bg-black text-white hover:bg-cyan-500 hover:text-black active:text-black active:bg-cyan-300 px-8 py-3 text-sm mt-5 font-sans font-bold rounded-md'>Place Order</button>
      </div>

      </div>


      </div>


         {/* Toastify Container */}
      <ToastContainer />
       
    </div>
  )
}

export default PlaceOrder;
