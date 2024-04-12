import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function ExperienceCard({ exp }) {
  return (
    <li className="mb-10 ms-6 flex flex-col gap-1">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-bgwhite rounded-full -start-3 ring-4 ring-bgblack/30 dark:ring-bggrey/20 dark:bg-bgwhite">
        <FontAwesomeIcon icon={faBriefcase} />
      </span>
      <h3 className="text-xl font-bold text-txtblack dark:text-white">
        {exp.role}
      </h3>
      <h3 className="text-md font-semibold text-txtblack mb-1">
        {exp.company}
      </h3>
      <span className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mb-1">
        {exp.timeline}
      </span>
      <p className="text-base w-1/2 font-normal text-gray-500 dark:text-gray-400">
        {exp.description}
      </p>
      <span className="flex gap-2">
        {exp.skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block text-sm font-medium text-txtblack bg-bggrey/20 p-2 rounded-md"
          >
            {skill}
          </span>
        ))}
      </span>
    </li>
  );
}

export default ExperienceCard;
