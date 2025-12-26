import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const MobileNav = ({ isMobileNav,setMobileNav }) => {

  const handleScrollTo = (e) => {
    e.preventDefault();
    const hash = e.currentTarget.getAttribute("href");

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: hash, offsetY: 100 },
      ease: "power1.inOut",
    });

    setMobileNav(false);
  };



  return (
    <div className="w-full px-8 py-8 lg:px-48">

      <ul className="inline-block gap-4 w-full space-y-4">
        <li className="w-full flex items-center justify-start">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="text-3xl text-white font-semibold hover:text-violet-600 cursor-pointer"
          >
            Home
          </a>
        </li>
        <li className="w-full flex items-center justify-start">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, "#about")}
            className="text-3xl text-white font-semibold hover:text-violet-600 cursor-pointer"
          >
            About me
          </a>
        </li>
        <li className="w-full flex items-center justify-start">
          <a
            href="#experience"
            onClick={(e) => handleScrollTo(e, "#about")}
            className="text-3xl text-white font-semibold hover:text-violet-600 cursor-pointer"
          >
            Experience
          </a>
        </li>
        <li className="w-full flex items-center justify-start">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "#projects")}
            className="text-3xl text-white font-semibold hover:text-violet-600 cursor-pointer"
          >
            Projects
          </a>
        </li>
      </ul>

    </div>
  );
};

export default MobileNav;
