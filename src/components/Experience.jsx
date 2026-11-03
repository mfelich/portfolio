import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  const experiences = [
    {
      date: "March, 2026 - Present",
      title: "AI Code Evaluation Engineer — Code Human Preference (Claude-HFI)",
      description: [
        "Worked within existing codebases, evaluating alternative Claude-generated implementations of software development tasks.",
        "Each iteration required comparing solutions for functional correctness, maintainability, and how completely they addressed the original requirements.",
        "Identified incomplete functionality, potential bugs, and technical trade-offs before selecting the stronger implementation path.",
        "Documented evaluation findings, explaining why one approach was preferable and where improvements were needed.",
      ],
    },
    {
      date: "August, 2024 - Present",
      title: "Freelance Experience",
      description: [
        "Worked directly with multiple clients, translating business needs into functional web applications and taking ownership of implementation.",
        "My backend work has involved Java, Spring Boot, REST APIs, business logic, and PostgreSQL, alongside frontend development with React.",
        "For Lux Roses, the challenge was to bring an existing sales process online without introducing unnecessary payment infrastructure. I built a cash-on-delivery ordering flow, an admin dashboard, and automated order-status notifications.",
        "The resulting application is actively used by the client to manage customer orders.",
      ],
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (prefersReducedMotion) return;

      const firstExperienceHeading = section.querySelector(
        "[data-experience-heading]",
      );
      const trackLine = section.querySelector("[data-experience-track]");

      gsap.from("[data-experience-title]", {
        y: 14,
        autoAlpha: 0,
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      if (firstExperienceHeading && trackLine) {
        gsap.from(trackLine, {
          scaleY: 0,
          autoAlpha: 0,
          transformOrigin: "bottom",
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: firstExperienceHeading,
            start: "top 88%",
            once: true,
          },
        });
      }

      gsap.utils
        .toArray("[data-experience-heading], [data-experience-paragraph]")
        .forEach((element) => {
          const marker = element.matches("[data-experience-heading]")
            ? element
                .closest("li")
                ?.querySelector("[data-experience-marker]")
            : null;

          gsap.from(element, {
            y: 12,
            autoAlpha: 0,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          });

          if (marker) {
            gsap.from(marker, {
              scale: 0.7,
              autoAlpha: 0,
              duration: 0.45,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            });
          }
        });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <div ref={sectionRef} id="experience" className="w-full">
      <h1 data-experience-title className="title-section">
        Experience
      </h1>

      <ol className="relative">
        <span
          data-experience-track
          aria-hidden="true"
          className="pointer-events-none absolute start-0 top-0 h-full w-px bg-gray-700/70"
        />
        {experiences.map((exp, index) => (
          <li key={index} className="mb-4 md:mb-8 lg:mb-6 ms-6">
            <span data-experience-marker className="absolute ring-violet-600 flex items-center justify-center w-2 h-2 bg-brand-softer mt-2.5 rounded-full -start-1 ring-4 ring-buffer">
              <span className="absolute w-2 h-2 rounded-full bg-[#0b0b0b]"></span>
            </span>

            <div data-experience-heading>
              <time className="bg-[#111827] border border-default-medium text-gray-400 text-heading text-xs font-poppins font-medium px-1.5 py-0.5 rounded">
                {exp.date}
              </time>

              <h3 className="font-poppins font-semibold text-white text-lg md:text-xl lg:text-xl mt-2 text-left">
                {exp.title}
              </h3>
            </div>

            {exp.description.map((text, i) => (
              <p
                data-experience-paragraph
                key={i}
                className="font-poppins text-gray-500 text-sm md:text-md lg:text-md mt-2 sm:mt-0 lg:mt-2 text-left"
              >
                {text}
              </p>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
