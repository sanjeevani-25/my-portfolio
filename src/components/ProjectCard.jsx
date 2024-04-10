import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ project }) {
  //   console.log(project);

  return (
    <div class="w-1/2 lg:w-1/5 flex flex-col items-center p-0 border-solid border-2 border-bgblack/60 rounded-xl">
      <img src={project.img} className="rounded-t-xl" alt="" />
      <div class="w-full justify-start flex flex-col gap-2 p-4 ">
        <div class="flex flex-wrap justify-between items-center">
          <h1 class="text-2xl font-bold text-txtblack">{project.name}</h1>
          {/* <span class="text-sm text-txtgrey">{project.timeline}</span> */}
        </div>
        <div class="text-md lg:text-base text-txtgrey">
          {project.description}
        </div>
        <div class="flex justify-start gap-4 items-center">
          {/* <a href={project.code}>
            <FontAwesomeIcon icon={faGithub} />
          </a> */}
          <a href={project.code}>
            <FontAwesomeIcon icon={faCode} />
          </a>
          <a href={project.demo}>
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
        <div class="flex flex-wrap gap-2 justify-start">
          {project.skills.map((skill, index) => (
            <div
              key={index}
              class="w-fit bg-bggrey px-2 py-1 rounded  text-sm text-txtwhite"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
