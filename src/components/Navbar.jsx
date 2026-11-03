import React from "react";
import menus from "../assets/menus.png";
import devIcon from "../assets/code.png";
import closeMenu from "../assets/close2.png";
import MobileNav from "./MobileNav.jsx";

const Navbar = ({ isMobileNav, setMobileNav }) => {
  
  const handleScrollTo = (e) => {
    e.preventDefault();
    const hash = e.currentTarget.getAttribute("href");
    const target = hash === "#home" ? null : hash ? document.querySelector(hash) : null;

    if (hash !== "#home" && !target) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top:
        hash === "#home"
          ? 0
          : target.getBoundingClientRect().top + window.scrollY - 160,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleMenuClick = () => {
    setMobileNav(true);
  };

  const handleMenuClose = () => {
    setMobileNav(false);
  };

  return (
    <>
      <div className="sticky top-0 z-[50]">
        <div className="px-8 lg:px-32 w-full background-primary">
          <div className=" w-full h-14 flex items-center justify-between">
            <div className="flex items-center justify-center gap-4">
              <span>
                <img src={devIcon} alt="" className="w-[27px]" />
              </span>
              <span className="hidden md:block">
                <h1 className="text-md text-violet-600">Backend Developer</h1>
              </span>
            </div>
            <div className="hidden md:block lg:block">
              <ul className="inline-flex gap-4">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => handleScrollTo(e, "#home")}
                    className="text-md text-white hover:text-violet-600 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleScrollTo(e, "#about")}
                    className="text-md text-white hover:text-violet-600 cursor-pointer"
                  >
                    About me
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    onClick={(e) => handleScrollTo(e, "#about")}
                    className="text-md text-white hover:text-violet-600 cursor-pointer"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => handleScrollTo(e, "#projects")}
                    className="text-md text-white hover:text-violet-600 cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:hidden lg:hidden">
              {isMobileNav ? (
                <>
                  <img
                    src={closeMenu}
                    alt=""
                    className="w-[27px] cursor-pointer"
                    onClick={handleMenuClose}
                  />
                </>
              ) : (
                <>
                  <img
                    src={menus}
                    alt=""
                    className="w-[27px] cursor-pointer"
                    onClick={handleMenuClick}
                  />
                </>
              )}
            </div>
          </div>
        </div>
         {isMobileNav ? (
          <div className="w-full background-primary">
            <MobileNav setMobileNav={setMobileNav} />
            <div className="w-full h-1 bg-violet-600"></div>
          </div>
        ):(
          <>
          <div className="w-full h-1 bg-violet-600"></div>
          </>
        )}
        
      </div>
    </>
  );
};

export default Navbar;
