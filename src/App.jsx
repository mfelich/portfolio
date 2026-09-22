import "./App.css";
import { useState, Suspense, lazy } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Container from "./components/layout/Container.jsx";
import LazySection from "./components/layout/LazySection.jsx";

const AboutMe = lazy(() => import("./components/AboutMe.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));

function App() {
  const [isMobileNav, setMobileNav] = useState(false);

  return (
    <div className="background-primary">
      <Navbar isMobileNav={isMobileNav} setMobileNav={setMobileNav} />

      {isMobileNav && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 mt-[70px]"
          onClick={() => setMobileNav(false)}
        />
      )}

      <Container>
        <Hero />

        <LazySection>
          <AboutMe />
        </LazySection>

        <LazySection>
          <Experience />
        </LazySection>

        <LazySection>
          <Projects />
        </LazySection>
      </Container>

      <Footer />

      {process.env.NODE_ENV === "production" && <SpeedInsights />}
    </div>
  );
}

export default App;
