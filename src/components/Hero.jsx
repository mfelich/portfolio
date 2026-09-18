import React from "react";
import profilePic from "../assets/profile-pic1.png";
import ElectricBorder from "./ui/ElectricBorder";
import StrokeText from "./ui/StrokeText";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const TECH = ["Java", "Spring Boot", "PostgreSQL", "Docker", "REST APIs"];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/mfelich",
    path: "M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mirza-felic-867a40356/",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mfelichh/",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z",
  },
];

const Hero = () => {
  const handleScrollTo = (e, hash) => {
    e.preventDefault();

    const target = document.querySelector(hash);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.to(window, {
      duration: prefersReducedMotion ? 0 : 1,
      scrollTo: { y: hash, offsetY: 160 },
      ease: "power2.inOut",
    });
  };

  return (
    <div className="w-full mt-6 md:mt-8 lg:mt-16 flex flex-col lg:flex-row lg:items-center lg:justify-center gap-12 lg:gap-8">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start">
        <StrokeText
          text="Mirza Felić"
          strokeColor="#7C3AED"
          fillColor="#FFFFFF"
          strokeWidth={1.6}
          drawDuration={1.6}
          fillDelay={0.2}
          stagger={0.05}
          ease="power2.out"
          trigger="mount"
          fillMode="wipe"
          reverse={false}
          className="font-poppins text-center lg:text-start text-[52px] md:text-[72px] lg:text-[136px] tracking-[-1px] md:tracking-[-2.5px] lg:tracking-[-3.5px] font-extrabold"
        />

        <p className="mt-2 font-poppins text-sm md:text-lg lg:text-lg text-gray-400">
          Backend Engineer (Java/Spring)
        </p>

        <p className="mt-6 max-w-[52ch] font-poppins text-sm md:text-base leading-relaxed text-gray-400 lg:border-l lg:border-violet-600/40 lg:pl-5">
          I can work across the stack, but given the choice I'll always pick the
          backend — Java and Spring Boot specifically. That's where the
          interesting problems are, for me.
        </p>

        <ul className="mt-7 w-full flex items-center justify-center lg:justify-start gap-2 flex-wrap">
          {TECH.map((tech) => (
            <li key={tech} className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <span className="text-violet-600 text-sm font-poppins">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 w-full flex items-center justify-center lg:justify-start gap-4 flex-wrap">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "#projects")}
            className="rounded-md bg-violet-600 border border-violet-600 px-4 py-2 font-poppins text-gray-100 transition-colors duration-200 hover:bg-violet-700 hover:border-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View projects
          </a>

          <a
            href="mailto:mfelich77@gmail.com"
            className="text-gray-100 rounded-md border border-violet-600 px-4 py-2 font-poppins transition-colors duration-200 hover:bg-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Contact me
          </a>

          <a
            href="/Mirza_Felic_Java_Backend.pdf"
            download
            className="px-2 py-2 font-poppins text-sm text-gray-400 underline decoration-violet-600/50 underline-offset-4 transition-colors duration-200 hover:text-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Download CV
          </a>
        </div>

        <div className="mt-8 w-full flex items-center justify-center lg:justify-start gap-3">
          {SOCIALS.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-200 hover:border-violet-600 hover:bg-violet-600/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-[18px] w-[18px] fill-gray-500 transition-colors duration-200 group-hover:fill-violet-600"
              >
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
        <ElectricBorder
          color="#7c3aed"
          speed={1}
          chaos={0.16}
          thickness={1}
          borderRadius={999}
        >
          <div>
            <img
              src={profilePic}
              alt="Mirza Felić"
              className="w-[260px] h-[260px] rounded-full shadow-lg"
            />
          </div>
        </ElectricBorder>
      </div>
    </div>
  );
};

export default Hero;
