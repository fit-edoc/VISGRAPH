import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroText from './components/HeroText'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Show from './components/Show'
import VisgraphStack from './components/VisgraphStack'
import Footer from './Footer'




function App() {
 

  return (
   <>
   <Loader/>
   <Nav/>
  <Hero/>
 <div className='h-[10vh] w-screen bg-black overflow-hidden absolute  top-[90%] skew-y-3'>  <HeroText/> </div>
  <Show/>
   <div className='h-[10vh] w-screen bg-black overflow-hidden skew-x-3'>  <HeroText/> </div>


  <VisgraphStack/>
 <Footer/>

   
   </>
  )
}

export default App
