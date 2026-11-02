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
              For over three years, I've worked as a software
              developer, turning client requirements into working web
              applications and taking responsibility for their implementation.
            </h1>

            <h1 className="font-poppins text-gray-200 text-left text-md md:text-lg lg:text-lg">
              My work includes client projects and applications
              involving REST APIs, authentication, real-time communication, and
              third-party integrations. I focus on understanding requirements,
              making practical technical decisions, and writing code that's
              straightforward to maintain.
            </h1>

            <h1 className="font-poppins text-gray-200 text-left text-md md:text-lg lg:text-lg">
              Alongside development, I evaluate AI-generated code in existing
              codebases, comparing different implementations and assessing their
              correctness, maintainability, and alignment with requirements.
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-2 mt-2">
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                Engineering Judgment
              </h1>
            </div>
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
              <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                End-to-End Ownership
              </h1>
            </div>
            <div className="px-2 py-2 bg-gray-800 w-fit rounded-md">
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
