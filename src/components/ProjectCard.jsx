import React from "react";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <>
      <div className="md:flex mb-8 md:mb-8 lg:mb-4 md:items-start md:justify-start lg:flex lg:items-start lg:justify-start md:space-x-4 lg:space-x-4">
        <div className="mb-2 rounded-lg w-full md:w-1/2 lg:w-1/3 relative overflow-hidden">
          <a
            href={project?.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} - slide ${currentIndex + 1}`}
              className="w-full rounded-lg object-fill"
            />
          </a>

          {hasMultipleImages && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full hover:bg-black/70 transition-colors duration-200"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full hover:bg-black/70 transition-colors duration-200"
                aria-label="Next slide"
              >
                ›
              </button>
            </>
          )}

          {hasMultipleImages && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {project.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    idx === currentIndex ? "bg-white" : "bg-gray-400"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                ></span>
              ))}
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 lg:w-2/3">
          <a
            href={project?.projectUrl}
            target="_blank"
            className="font-poppins text-white text-lg md:text-xl lg:text-xl sm:mt-0 lg:mt-0 text-left font-semibold hover:text-violet-600 cursor-pointer transition-colors duration-200"
          >
            {project?.title}
          </a>
          <p className="font-poppins text-gray-500 text-sm md:text-md lg:text-md mt-2 sm:mt-0 lg:mt-2 text-left">
            {project?.description}
          </p>

          <div className="flex flex-wrap items-center justify-start gap-2 mt-2">
            {project.technologies?.map((tech, index) => (
              <div
                key={index}
                className="px-2 py-2 bg-gray-800 w-fit rounded-md"
              >
                <h1 className="text-violet-600 text-sm md:text-md lg:text-md font-poppins">
                  {tech}
                </h1>
              </div>
            ))}
          </div>

          <p className="font-poppins text-gray-500 text-sm md:text-md lg:text-md mt-2 md:mt-2 sm:mt-0 lg:mt-2 text-left">
            {project?.details}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
