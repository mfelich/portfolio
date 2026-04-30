import React from "react";

const Experience = () => {
  const experiences = [
    {
      date: "March, 2026 - Present",
      title: "AI Code Evaluation Engineer — Code Human Preference (Claude-HFI)",
      description: [
        "Worked on a client project focused on evaluating and improving AI-generated software solutions by testing Claude-HFI across real development codebases.",
        "Designed complex engineering prompts and follow-up tasks to assess model performance in backend development, architecture decisions, debugging, and production-level code quality.",
        "Compared multiple AI-generated implementation trajectories for the same engineering problem, performing deep technical analysis of code quality, maintainability, scalability, and best-practice alignment.",
        "Wrote detailed professional evaluations including pros/cons analysis, architectural trade-offs, and final decision reports determining the stronger implementation path.",
      ],
    },
    {
      date: "August, 2025 - September, 2025",
      title: "Freelance Backend Developer (Spring Boot / Java)",
      description: [
        "Designed and delivered a production-ready backend for a custom e-commerce platform using Spring Boot 3 and Java 17.",
        "Implemented secure REST APIs with Spring Security (role-based access, admin panel).",
        "Modeled and managed persistence with Hibernate/JPA and PostgreSQL.",
        "Ensured reliability through unit and integration testing with JUnit 5 and Mockito.",
        "Collaborated directly with the client to define requirements, backend scope, and delivery milestones.",
      ],
    },
    {
      date: "September, 2022 - September, 2023",
      title: "Backend Developer — Academic IoT Project (Spring Boot)",
      description: [
        "Developed backend services for an IoT-based smart feeder system as part of a team project.",
        "Designed REST APIs using Spring Boot for device control and automated workflows.",
        "Improved backend performance by ~35% using Redis caching to reduce database load.",
        "Increased system stability by implementing unit and integration tests with JUnit and Mockito.",
      ],
    },
  ];

  return (
    <div id="experience" className="w-full">
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
