import React from "react";
import profilePic from "../assets/profile-pic1.png";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full px-8 lg:px-48 mb-28 md:mb-32 lg:mb-48 mt-1"
    >
      <h1 className="title-section">About me</h1>

      <div className="md:flex md:items-start md:justify-start md:space-x-4 space-y-4 md:space-y-0 mt-12">
        <img
          src={profilePic}
          alt=""
          className="w-full rounded-md md:w-1/3 h-auto lg:w-1/4"
        />
        <div>
          <div className="py-0 px-0 mb-6 md:mb-6 lg:mb- space-y-6">
            <h1 className="font-poppins text-gray-200 text-left text-md md:text-lg lg:text-lg">
              Backend Developer specializing in Spring Boot and secure API
              design, building backend systems that reflect real-world product
              constraints and access rules.
            </h1>

            <h1 className="font-poppins text-gray-200 text-left text-md md:text-lg lg:text-lg">
              I design and implement backend components including role-based
              authorization, user-scoped resource access, validation layers, and
              centralized error handling. My work also includes real-time
              communication using WebSockets, integration of third-party and
              AI-driven APIs, and performance optimization through Redis-based
              caching strategies.
            </h1>

            <h1 className="font-poppins text-gray-200 text-left text-md md:text-lg lg:text-lg">
              Alongside my professional development, I am currently in my final
              year of Computer Science (Software Engineering) at a technical
              faculty, strengthening my engineering foundation while working on
              backend systems designed around real usage and evolving
              requirements.
            </h1>
          </div>


          <div className="flex flex-wrap items-center justify-start gap-2 mt-2">
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
                Postgres
              </h1>
            </div>
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                JavaScript
              </h1>
            </div>
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                React
              </h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
