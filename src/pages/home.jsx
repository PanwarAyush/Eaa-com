import React from 'react'
import Announcement from '../components/Announcement';
import Navbar from '../components/navbar'
import Slider from '../components/Slider';
import Categories  from '../components/Categories';
import Products  from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Bot from '../components/Chatbot/EAaChatBot'
const home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
     <Slider/>
     <Categories/>
     <Products/>
      <Bot/>
     <Newsletter/>
     <Footer/>
    </div>
  )
};

export default home
