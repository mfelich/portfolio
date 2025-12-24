import React from "react";

const Experience = () => {
  const experiences = [
    {
      date: "September, 2021 - Present",
      title: "Computer Science at the University of Bihać, Technical Faculty",
      description: [
        "Developed backend components for an IoT-based smart animal feeder as part of a team-based academic project, applying professional software engineering practices.",
        "Engineered the core system using Spring Boot, creating RESTful endpoints for device control and automated feeding workflow management.",
        "Improved system performance by ~35% by strategically implementing Redis caching to reduce redundant database calls and processing.",
        "Increased application stability by establishing a testing suite with JUnit and Mockito, minimizing regression bugs.",
        "Gained relevant foundational knowledge: Applied networking concepts (informed by Cisco CCNA certification) to backend system design and utilized Matlab for algorithm design and system simulations, strengthening analytical problem-solving skills.",
      ],
    },
    {
      date: "August, 2025 - September, 2025",
      title: "Freelance Backend Developer (Spring Boot / Java)",
      description: [
        "Developed and delivered a full-stack custom web shop solution for a local business, taking ownership of backend development using Spring Boot 3.x and Java 17.",
        "Designed and implemented a secure REST API following a layered architecture (Controller-Service-Repository) with Spring Security for role-based access control (admin panel).",
        "Managed data persistence using Hibernate/JPA with a PostgreSQL database.",
        "Ensured code reliability and maintainability by writing unit and integration tests with JUnit 5 and Mockito.",
        "Built a complementary frontend using React, focusing on user-friendly interfaces and clear data presentation.",
        "Successfully delivered a stable, production-ready application by directly collaborating with the client to gather requirements and define the project scope.",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="w-full px-8 lg:px-48 2xl:px-1/2 mb-28 md:mb-32 lg:mb-48"
    >
      <h1 className="title-section">Experience</h1>

      <ol className="relative border-s border-default">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-4 md:mb-8 lg:mb-6 ms-6">
            <span className="absolute ring-violet-600 flex items-center justify-center w-2 h-2 bg-brand-softer mt-2.5 rounded-full -start-1 ring-4 ring-buffer">
              <span className="absolute w-2 h-2 rounded-full bg-[#0b0b0b]"></span>
            </span>

            <time className="bg-[#111827] border border-default-medium text-gray-400 text-heading text-xs font-poppins font-medium px-1.5 py-0.5 rounded">
              {exp.date}
            </time>

            <h3 className="font-poppins font-semibold text-white text-lg md:text-xl lg:text-xl mt-2 text-left">
              {exp.title}
            </h3>

            {exp.description.map((text, i) => (
              <p
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
