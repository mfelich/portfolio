
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Experience from './components/Experience.jsx'
import MobileNav from './components/MobileNav.jsx'
import { useState } from 'react'  

function App() {

  const [isMobileNav, setMobileNav] = useState(false);

  return (
    <>
    <div className="background-primary">
      <Navbar isMobileNav={isMobileNav} setMobileNav={setMobileNav} />

      {isMobileNav ? (
        <MobileNav isMobileNav={isMobileNav} setMobileNav={setMobileNav} />
      ) : (
        <>
          <Hero />
          <AboutMe />
          <Experience />
          <Projects />
          <Footer />
        </>
      )}
    </div>
    </>
  )
}

export default App
