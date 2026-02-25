import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import luxrosesMockup from "../assets/luxroses-mockup.png";
import biddoraMockup from "../assets/biddora-mockup.png";
import summoneraiCoachMockup from "../assets/summonerAiCoach-mockup.png";



const Projects = () => {
  const projects = [
    {
      title: "Lux Roses",
      description:
        "Commercial-grade e-commerce platform delivered for a business client, designed with a secure session-based architecture and production deployment strategy. Engineered backend services with Spring Boot and Spring Security, implementing CSRF-protected administrative access and role-scoped resource management.",
      technologies: [
        "Java 17",
        "Spring Boot",
        "Spring Security (Session + CSRF)",
        "PostgreSQL",
        "Hibernate / JPA",
        "Spring Mail",
        "SMTP Integration",
        "React",
        "Railway",
        "Vercel",
      ],
      images: [luxrosesMockup],
      details:
        "Architected and implemented a full order lifecycle system including cart workflow, administrative order management, secure image upload handling with persistent storage, and automated transactional email notifications using SMTP integration for order confirmations and administrative alerts. Designed using layered architecture (Controller-Service-Repository) with DTO validation and production-grade configuration management via Railway environment variables. Successfully deployed backend infrastructure (PostgreSQL + persistent volumes) to Railway and frontend to Vercel, delivering a live system actively used by the clients.",
      githubUrl: "https://rose-client.vercel.app/",
    },
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
      images: [biddoraMockup],
      details:
        "Handles bid validation and automated auction winner determination, with performance optimized through Redis caching to reduce database load on frequently accessed product data. The application is fully containerized with Docker and documented using SpringDoc OpenAPI.",
      githubUrl: "https://github.com/mfelich/biddora-backend",
    },
    {
      title: "SummonerAI Coach",
      description:
        "Backend-driven analytics platform integrating third-party APIs and AI services to generate contextual performance insights.",
      technologies: ["Spring Boot", "Riot API", "OpenAI API", "React"],
      images: [summoneraiCoachMockup],
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
