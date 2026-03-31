import React from "react";
import instagramLogo from "../assets/instagram.png";
import githubLogo from "../assets/github.png";
import linkedInLogo from "../assets/linkedin.png";
import PrismaticBurst from "../components/ui/PrismaticBurst.jsx";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const handleScrollTo = (e) => {
    e.preventDefault();
    const hash = e.currentTarget.getAttribute("href");

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: hash, offsetY: 160 },
      ease: "power1.inOut",
    });
  };

  const handleContactClick = () => {
    window.location.href = "mailto:mfelich77@gmail.com";
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "660px",
          position: "relative",
          boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.7)",
        }}
      >
        <PrismaticBurst
          animationType="rotate3d"
          intensity={0.6}
          speed={1}
          distort={0.1}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={41}
          mixBlendMode="lighten"
          colors={["#F527EE", "#FFE25E", "#2F5CF5"]}
          color0="#F527EE"
          color1="#FFE25E"
          color2="#2F5CF5"
        />

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0F0F0F] pointer-events-none"></div>
      </div>

      <div className="w-full absolute top-0 left-0 mt-6 md:mt-8 lg:mt-16 px-4 h-[660px] flex items-center justify-center">
        <div>
          <h1
            className="text-violet-600 font-poppins font-extrabold text-center text-[44px] md:text-[72px] lg:text-[82px]"
            style={{
              textShadow: "2px 2px 8px rgba(124, 58, 237, 0.5)",
            }}
          >
            Mirza Felić
          </h1>
          <h1 className="text-gray-200 text-sm font-poppins text-center md:text-lg lg:text-lg">
             Backend Engineer (Java/Spring)
          </h1>

          <div className="w-full flex items-center justify-center">
            <div className="w-8/12 rounded-md h-1 bg-gray-200 my-6"></div>
          </div>

          <div className="w-full mb-6 flex items-center justify-center gap-2 flex-wrap">
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                Java
              </h1>
            </div>
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                Spring Boot
              </h1>
            </div>
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                PostgreSQL
              </h1>
            </div>
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                Docker
              </h1>
            </div>
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                REST API's
              </h1>
            </div>
          </div>

          <div className="w-full mb-8 flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://www.instagram.com/mfelichh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramLogo} alt="" className="w-[27px]" />
            </a>

            <a
              href="https://www.linkedin.com/in/mirza-felic-867a40356/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInLogo} alt="" className="w-[27px]" />
            </a>

            <a
              href="https://github.com/mfelich"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="" className="w-[27px]" />
            </a>
          </div>

          <div className="w-full flex items-center justify-center gap-4 flex-wrap">
            <button
              className="text-gray-100 rounded-md border border-violet-600 px-4 py-2 hover:bg-violet-600 font-poppins"
              onClick={handleContactClick}
            >
              Contact me
            </button>
            <button
              href="#projects"
              className="text-gray-100 rounded-md border border-violet-600 px-4 py-2 hover:bg-violet-600 font-poppins"
              onClick={(e) => handleScrollTo(e, "#projects")}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
