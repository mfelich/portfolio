import React from "react";

const MobileNav = ({ setMobileNav }) => {

  const handleScrollTo = (e) => {
    e.preventDefault();
    const hash = e.currentTarget.getAttribute("href");
    const target =
      hash === "#home" ? null : hash ? document.querySelector(hash) : null;

    setMobileNav(false);
    if (hash !== "#home" && !target) return;

    window.requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      window.scrollTo({
        top:
          hash === "#home"
            ? 0
            : target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
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
