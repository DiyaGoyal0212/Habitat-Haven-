import React from 'react'
import Navbar from './components/Navbar';
import Footer1 from './components/footer';
import App from './App';
import Washing from './components/Washing';
import Fridge from './components/fridge';
import Oven from './components/oven';
import Service from './components/Service';
import Login1 from './components/Login1';
import Login from './components/Login';
import Aone from './components/a11';
import Liv from './components/Living_room';
import Str from './components/Storage_room';
import Newsignup from './components/Newsignup';
 
import {BrowserRouter , Routes , Route} from "react-router-dom";

const Home = () => {
  return (
    <>
    

    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/washing' element={<Washing/>} />
        <Route path='/fridge' element={<Fridge/>} />
        <Route path='/oven' element={<Oven/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/signup' element={<Login1/>} />
        <Route path='/Newsignup' element={<Newsignup/>} />
        <Route path='/a11' element={<Aone />} />
        <Route path='/Living_room' element={<Liv />} />
        <Route path='/Storage_room' element={<Str/>} />
        {/* <Route path='/cart' element={<Cart/>} /> */}
        
    </Routes>
    <Footer1/>
    </BrowserRouter>

    {/* <BrowserRouter>
    <Routes>
    <Route path='/signup' element={<Login1/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter> */}

    </>
  )
}

export default Home
