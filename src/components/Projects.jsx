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
        "Backend system for a real-time auction platform where users can place live bids on products with instant updates via WebSocket connections. Implements JWT-based authentication with Spring Security for secured API endpoints and WebSocket sessions.",
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
        "Features include automated auction winner determination with bid validation, Redis caching for product listings to reduce database load, and additional modules for user favorites and rating systems. The application is containerized with Docker and includes comprehensive API documentation through SpringDoc OpenAPI.",
      githubUrl: "https://github.com/mfelich/biddora-backend",
    },
    {
      title: "SummonerAI Coach",
      description:
        "AI-powered coaching platform for League of Legends players, providing personalized strategies and performance analysis.",
      technologies: ["Spring Boot", "Riot API", "OpenAI API", "React"],
      images: [summoneraiCoach],
      details:
        "Features include real-time player data fetching from Riot API, statistical processing of match history, AI-driven analysis generation with contextual recommendations, and automated reporting system. The backend serves a React frontend with processed data and AI insights.",
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
