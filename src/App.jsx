import React from 'react'
import { DarkModeProvider } from './component/DarkModeContext'
import Header from './component/Header'
import Footer from './component/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Clients from './sections/Clients'
import Contact from './sections/Contact'

function App() {
  return (
    <>
    <DarkModeProvider>
    <Header/>
    <Hero/>
    <About/>
    <PopularAreas/>
    <Properties/>
    <Services/>
    <Clients/>
    <Contact  />
    <Footer/>
    </DarkModeProvider>
    </>
  )
}

export default App