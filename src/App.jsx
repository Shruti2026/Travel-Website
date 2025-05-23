import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import HeroSection from './HeroSection'
import PlaceSection from './PlaceSection'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="h-screen bg-[url('./src/assets/images/bg_img.jpg')] bg-cover bg-center bg-no-repeat -mt-5">
        <Header />
        <HeroSection />
      </div>
      <PlaceSection />
      <Footer />
    </>
  )
}

export default App
