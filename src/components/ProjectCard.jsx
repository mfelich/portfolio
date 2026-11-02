import React, { useId, useLayoutEffect, useRef, useState } from "react";

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleTagCount, setVisibleTagCount] = useState(0);
  const detailsId = `project-details-${useId().replace(/:/g, "")}`;
  const tagRowRef = useRef(null);
  const measuredTagsRef = useRef(null);
  const viewMoreRef = useRef(null);

  useLayoutEffect(() => {
    if (isExpanded) return undefined;

    const updateVisibleTagCount = () => {
      const row = tagRowRef.current;
      const measuredTags = measuredTagsRef.current;
      const button = viewMoreRef.current;
      if (!row || !measuredTags || !button) return;

      const gap = parseFloat(window.getComputedStyle(row).columnGap) || 0;
      const availableWidth = row.clientWidth - button.offsetWidth - gap;
      const tags = Array.from(measuredTags.children);
      let usedWidth = 0;
      let count = 0;

      for (const tag of tags) {
        const nextWidth =
          usedWidth + (count > 0 ? gap : 0) + tag.getBoundingClientRect().width;
        if (nextWidth > availableWidth) break;
        usedWidth = nextWidth;
        count += 1;
      }

      setVisibleTagCount((currentCount) =>
        currentCount === count ? currentCount : count,
      );
    };

    updateVisibleTagCount();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateVisibleTagCount);
      return () => window.removeEventListener("resize", updateVisibleTagCount);
    }

    const resizeObserver = new ResizeObserver(updateVisibleTagCount);
    if (tagRowRef.current) resizeObserver.observe(tagRowRef.current);
    if (viewMoreRef.current) resizeObserver.observe(viewMoreRef.current);
    measuredTagsRef.current
      ?.querySelectorAll("[data-project-tag]")
      .forEach((tag) => resizeObserver.observe(tag));

    return () => resizeObserver.disconnect();
  }, [isExpanded, project.technologies]);

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

          <p className="font-poppins text-gray-400 text-xs mt-2 text-left">
            <span className="text-gray-300">Stack:</span>{" "}
            {project.techStack.join(" · ")}
          </p>

          <div
            ref={tagRowRef}
            className={`projects-tag-row relative mt-2 flex items-center gap-2 ${
              isExpanded ? "flex-wrap" : "flex-nowrap overflow-hidden"
            }`}
          >
            {project.technologies
              ?.slice(
                0,
                isExpanded ? project.technologies.length : visibleTagCount,
              )
              .map((tech, index) => (
                <div
                  key={index}
                  className="max-w-full shrink-0 rounded-md bg-gray-800 px-2 py-2"
                >
                  <h1 className="break-words font-poppins text-sm text-violet-600 md:text-md lg:text-md">
                    {tech}
                  </h1>
                </div>
              ))}
            {!isExpanded && (
              <button
                ref={viewMoreRef}
                type="button"
                aria-expanded={isExpanded}
                aria-controls={detailsId}
                onClick={() => setIsExpanded(true)}
                className="projects-view-more ml-auto inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-poppins text-sm text-gray-300 transition-colors duration-200 hover:text-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
              >
                View More
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 transition-transform duration-200"
                  fill="none"
                >
                  <path
                    d="m3.5 6 4.5 4 4.5-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            {!isExpanded && (
              <div
                ref={measuredTagsRef}
                aria-hidden="true"
                className="pointer-events-none invisible absolute left-0 top-0 flex w-max items-center gap-2"
              >
                {project.technologies?.map((tech) => (
                  <div
                    key={tech}
                    data-project-tag
                    className="max-w-full shrink-0 rounded-md bg-gray-800 px-2 py-2"
                  >
                    <h1 className="break-words font-poppins text-sm text-violet-600 md:text-md lg:text-md">
                      {tech}
                    </h1>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            id={detailsId}
            className={`projects-details ${isExpanded ? "is-expanded" : ""}`}
            aria-hidden={!isExpanded}
          >
            <div className="projects-details-content">
              <p className="font-poppins text-gray-500 text-sm md:text-md lg:text-md mt-2 md:mt-2 sm:mt-0 lg:mt-2 text-left">
                {project?.details}
              </p>
              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                  onClick={() => setIsExpanded(false)}
                  className="projects-view-more inline-flex items-center gap-2 font-poppins text-sm text-gray-300 transition-colors duration-200 hover:text-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
                >
                  View Less
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 rotate-180 transition-transform duration-200"
                    fill="none"
                  >
                    <path
                      d="m3.5 6 4.5 4 4.5-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
