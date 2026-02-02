import React from "react";
import profilePic from "../assets/profile-pic1.png";

const AboutMe = () => {
  return (
    <div id="about" className="w-full mt-1">
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
              Backend Engineer focused on building secure and scalable backend
              systems using Spring Boot. I specialize in designing REST APIs
              with clear access rules, role-based authorization, validation
              layers, and centralized exception handling.
            </h1>

            <h1 className="font-poppins text-gray-200 text-left text-md md:text-lg lg:text-lg">
              I have hands-on experience implementing real-time communication
              with WebSockets, integrating third-party and AI-driven APIs, and
              improving performance through Redis-based caching strategies. My
              projects reflect real product requirements such as user-scoped
              data access, security constraints, and maintainable architectures.
            </h1>

            <h1 className="font-poppins text-gray-200 text-left text-md md:text-lg lg:text-lg">
              I am currently in my final year of Computer Science (Software
              Engineering), combining a strong engineering foundation with
              practical backend development on production-oriented projects.
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
                Spring Security
              </h1>
            </div>
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                PostgreSQL
              </h1>
            </div>
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                Redis
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
