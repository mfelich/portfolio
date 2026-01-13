import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
import Container from "./components/layout/Container.jsx";
import { useState } from "react";

function App() {
  const [isMobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div className="background-primary">
        <Navbar isMobileNav={isMobileNav} setMobileNav={setMobileNav} />

        {isMobileNav && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 mt-[70px]"
            onClick={() => setMobileNav(false)}
          />
        )}

        <Hero />
        <Container>
          <AboutMe />
          <Experience />
          <Projects />
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
