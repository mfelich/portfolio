import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import summoneraiCoach from "../assets/summonerai-coach.png";
import biddora1 from "../assets/biddora-1.png";
import biddora2 from "../assets/biddora-2.png";
import biddora3 from "../assets/biddora-3.png";

const Projects = () => {
  const projects = [
    {
      title: "Biddora",
      description:
        "Backend system for a real-time auction platform enabling live bidding with instant updates via WebSockets. Designed and implemented secure REST APIs using Spring Security (JWT) with role-based access control, including secured WebSocket sessions and user-scoped resources.",
      technologies: [
        "Java 17",
        "Spring Boot",
        "Spring Security & JWT",
        "WebSocket",
        "PostgreSQL",
        "Redis",
        "Docker",
        "SpringDoc OpenAPI",
      ],
      images: [biddora1, biddora2, biddora3],
      details:
        "Handles bid validation and automated auction winner determination, with performance optimized through Redis caching to reduce database load on frequently accessed product data. The application is fully containerized with Docker and documented using SpringDoc OpenAPI.",
      githubUrl: "https://github.com/mfelich/biddora-backend",
    },
    {
      title: "SummonerAI Coach",
      description:
        "Backend-driven analytics platform integrating third-party APIs and AI services to generate contextual performance insights.",
      technologies: ["Spring Boot", "Riot API", "OpenAI API", "React"],
      images: [summoneraiCoach],
      details:
        "Implemented backend services to fetch and process external data from Riot API, transform match statistics, and generate AI-driven analysis using OpenAI APIs. Designed the system to handle external API limitations, data processing, and structured response delivery to a React frontend.",
      githubUrl: "https://github.com/mfelich/summonerai-coach",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <h1 className="title-section">Projects</h1>

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
