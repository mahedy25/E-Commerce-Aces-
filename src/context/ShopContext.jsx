import { createContext, useEffect, useState,useRef } from "react";
import { products } from "../assets/assets";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


export const ShopContext = createContext();

const ShopContextProvider =(props)=>{

  const currency ='$';
  const delivery_fee = 10;
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(false);

  
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : {}; // Empty object if no saved cart
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems && Object.keys(cartItems).length > 0) {  // Only save if cartItems has values
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]); // This should run every time cartItems changes
  


  

  const addToCart = (itemId) => {
    console.log(`Adding item with ID: ${itemId}`);
     let cartData = structuredClone(cartItems);
     
     if (cartData[itemId]) {
      cartData[itemId] += 1;
     }
     else {
      cartData[itemId] = {};
      cartData[itemId] = 1;
     }
     setCartItems(cartData);

      
    
      
 };
 // Save cart to localStorage whenever cartItems changes
 useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);
    


    const getCartCount = () => {
      let totalCount = 0;
      for(const items in cartItems){
        try {
          if (cartItems[items]>0) {
            totalCount += cartItems[items];
          }
        } catch (error) {
          
        }
      }
      return totalCount;
    }

    const updateQuantity = async (itemId,quantity)=>{
     let cartData = structuredClone(cartItems);
     cartData[itemId] = quantity;

     setCartItems(cartData);
    }

    const getCartAmount = () =>{
      let totalAmount = 0;
      for(const items in cartItems){
        let iteminfo = products.find((products)=> products._id === items);
        
          try {
            if (cartItems[items]>0){
              totalAmount += iteminfo.price * cartItems[items];
            }
          } catch (error) {
            
          
        } 
      }
      return totalAmount;
    }
  
  const value ={
     products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
  }
  return (
    <ShopContext.Provider value={value}>
       {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;