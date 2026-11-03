import React, { useLayoutEffect, useRef } from "react";
import profilePic from "../assets/profile-pic1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return undefined;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      gsap.utils.toArray("[data-about-paragraph]").forEach((paragraph) => {
        gsap.from(paragraph, {
          y: 12,
          autoAlpha: 0,
          duration: 0.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 88%",
            once: true,
          },
        });
      });

      timeline.from("[data-about-title]", {
        y: 14,
        autoAlpha: 0,
        duration: 0.45,
        ease: "power2.out",
      });
      timeline.from(
        "[data-about-image]",
        {
          y: 16,
          autoAlpha: 0,
          duration: 0.55,
          ease: "power2.out",
        },
        "-=0.15",
      );
      timeline.from(
        "[data-about-strength]",
        {
          y: 8,
          autoAlpha: 0,
          duration: 0.35,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.15",
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <div ref={sectionRef} id="about" className="w-full mt-1">
      <h1 data-about-title className="title-section">
        About me
      </h1>

      <div className="md:flex md:items-start md:justify-start md:space-x-4 space-y-4 md:space-y-0 mt-12">
        <img
          data-about-image
          src={profilePic}
          alt=""
          className="w-full rounded-md md:w-1/3 h-auto lg:w-1/4"
        />
        <div>
          <div className="py-0 px-0 mb-6 md:mb-6 lg:mb- space-y-6">
            <h1 data-about-paragraph className="font-poppins text-gray-200 text-left text-md md:text-lg lg:text-lg">
              For over three years, I've worked as a software
              developer, turning client requirements into working web
              applications and taking responsibility for their implementation.
            </h1>

            <h1 data-about-paragraph className="font-poppins text-gray-200 text-left text-md md:text-lg lg:text-lg">
              My work includes client projects and applications
              involving REST APIs, authentication, real-time communication, and
              third-party integrations. I focus on understanding requirements,
              making practical technical decisions, and writing code that's
              straightforward to maintain.
            </h1>

            <h1 data-about-paragraph className="font-poppins text-gray-200 text-left text-md md:text-lg lg:text-lg">
              Alongside development, I evaluate AI-generated code in existing
              codebases, comparing different implementations and assessing their
              correctness, maintainability, and alignment with requirements.
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-2 mt-2">
            <div data-about-strength className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                Engineering Judgment
              </h1>
            </div>
            <div data-about-strength className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                End-to-End Ownership
              </h1>
            </div>
            <div data-about-strength className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                Client Collaboration
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
