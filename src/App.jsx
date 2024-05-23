import React from 'react';
import Card1 from './components/card1';
import Card from './components/Card';
import './components/image.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel2 from './carousle'
import './App.css';

import Navbar from "./components/Navbar";

function App() {
  return (
    <>


    <Navbar />

    <Carousel2 />
    <h2 className='why'>Explore our products</h2>

    <div  className='box2'>
  <Card 
 img={require("./image/dinning_room2.jpg")}
  text="Dinning Room" /> 
  <Card 
  img={require("./image/Bedroom3.jpg")}
   text="Bedroom" /> 
  <Card 
  img={require("./image/Oven.jpg")}
  text="Microwave" />
  <Card 
  img={require("./image/Refridgerator.jpg")}
  text="Refrigerator" />
  <Card 
  img={require("./image/Living_Room.jpg")}
  text="Living Room" />
  <Card 
 img={require("./image/washing_machine.jpg")}
  text="Washing Machine" />
  </div>
   
    <div className='box'>
    <h2 className='why'>WHY HABITAT HAVEN ?</h2>
    <div className='b1'>
    
    <Card1 
    img={require("./image/badge.webp")}
    head= "Rent Furniture Wherever You Go"
    line="Look at what HUB offers"
    />
    <Card1
    img={require("./image/value.png")}
    head="Add Value to Your Space."
    line="Look at what HUB offers" 
    /> </div>
    <div className='b1'> 
    <Card1
    img={require("./image/heart.png")}
    head="We Value Mother Nature"
    line="Look at what HUB offers" 
    />
    <Card1
    img={require("./image/quality.png")}
    head="Seeking fusion of Quality, Trust and Indianness?"
    line="Look at what HUB offers" 
    />
    </div>

    <Card1 
    img={require("./image/safety.png")}
    head="Your Safety. Our Assurance."
    line="Look at what HUB offers" 

    />
    </div> 

    {/* <Footer1 /> */}
    </>
    

    
  )
}

export default App;
