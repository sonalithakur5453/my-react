import React from 'react'
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Image from "./component/Image"
import Info from './component/Info'
import Footer from "./component/Footer"

function App() {
  return (
    <div className='w-full min-h-screen bg-white'>
      <Navbar />
      <Hero />
      <Image />
      <Info />
      <Footer />
      
      </div>
  )
}

export default App
