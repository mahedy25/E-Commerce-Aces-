import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collection'
import Orders from './pages/Orders'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Product from './pages/Product'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import SignIn from './pages/SignIn'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw] '>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collections' element={<Collections/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
     </Routes>
     <Footer/>
    </div>

  )
}

export default App
