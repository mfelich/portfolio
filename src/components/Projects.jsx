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
        "An e-commerce application built for a small business selling handmade satin roses. The ordering system was designed around cash-on-delivery payments, allowing the owner to manage orders, update their statuses, and keep customers informed through automated notifications.",
      techStack: [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "Spring Security",
        "Hibernate / JPA",
        "Vercel",
        "Railway",
      ],
      technologies: [
        "Order Lifecycle Management",
        "Admin Dashboard",
        "Cash-on-Delivery Checkout",
        "Customer Email Notifications",
        "Spring Security",
        "CSRF Protection",
        "Custom Business Logic",
        "Order Status Management",
      ],
      images: [luxrosesMockup],
      details:
        "I handled the implementation from backend business logic to the React storefront and administrative interface. The application is actively used by the client.",
      projectUrl: "https://rose-client.vercel.app/",
    },

    {
      title: "Arcwell Studio",
      description:
        "A responsive website built for my own digital agency to showcase services, present selected work, and connect with potential clients. The platform combines modern UI/UX design, interactive elements, and technical SEO with a streamlined client inquiry process.",
      techStack: ["React", "JavaScript", "GSAP", "Resend", "Vercel"],
      technologies: [
        "UI/UX Design",
        "Responsive Design",
        "SEO Optimization",
        "Brand Identity",
        "Motion & Interactions",
        "Contact Form",
        "Email Integration",
        "Production Deployment",
      ],
      images: [luxrosesMockup],
      details:
        "I designed and developed the website using React, creating reusable components, responsive layouts, and interactive animations. I integrated Resend for handling client inquiries, implemented page-specific SEO configurations, and managed production deployment through Vercel with a custom domain.",
      projectUrl: "https://arcwellweb.com/",
    },

    {
      title: "Biddora",
      description:
        "A real-time auction system where multiple users can compete for the same item and receive live bidding updates.",
      techStack: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "WebSocket",
        "Spring Data JPA",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
      technologies: [
        "Real-Time Bidding",
        "Concurrent Bid Validation",
        "JWT Authentication",
        "Role-Based Access Control",
        "Redis Caching",
        "Automated Winner Selection",
        "Secured WebSockets",
        "Transactional Bid Processing",
      ],
      images: [biddoraMockup],
      details:
        "I built the Spring Boot backend with auction-specific WebSocket channels, JWT-based authentication, and automatic winner selection. Bid processing uses database transactions, while Redis caches product data that changes less frequently than live auction prices.",
      projectUrl: "https://github.com/mfelich/biddora-backend",
    },
    {
      title: "SummonerAI Coach",
      description:
        "A League of Legends analytics application that turns recent match statistics into AI-generated gameplay feedback.",
      techStack: [
        "Java",
        "Spring Boot",
        "Spring AI",
        "Riot Games API",
        "OpenAI API",
        "Vite",
      ],
      technologies: [
        "External API Orchestration",
        "Data Transformation",
        "DTO Mapping",
        "OpenAI Integration",
        "Match Data Aggregation",
        "Contextual AI Analysis",
        "API Rate-Limit Handling",
        "REST API Design",
      ],
      images: [summoneraiCoachMockup],
      details:
        "The Spring Boot backend retrieves match data through Riot Games APIs, extracts relevant statistics into structured DTOs, and passes the processed information to an OpenAI model with predefined gameplay context. I built the API integration and data processing flow, including handling external API rate-limit responses.",
      projectUrl: "https://github.com/mfelich/summonerai-coach",
    },
  ];

  return (
    <div id="projects" className="projects-section w-full">
      <h1 className="title-section">Projects</h1>

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
