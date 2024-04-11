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
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faCode, faLink, faVideo } from "@fortawesome/free-solid-svg-icons";
// import Modal from "react-modal";
// import ReactPlayer from "react-player";

function ProjectCard({ project }) {
  //   console.log(project);

  // const [modalisOpen, setModalIsOpen] = useState(false);
  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  return (
    <div class="w-1/2 lg:w-1/4 flex flex-col items-center p-0 border-solid border-2 border-bgblack/60 rounded-xl">
      <img
        src={`/src/assets/images/${project.img[0]}`}
        className="rounded-t-xl"
        alt=""
      />
      <div class="w-full justify-start flex flex-col gap-2 p-4 ">
        <div class="flex flex-wrap justify-between items-center">
          <h1 class="text-xl font-bold text-txtblack">{project.name}</h1>
          {/* <span class="text-sm text-txtgrey">{project.timeline}</span> */}
        </div>
        <div class="text-xs lg:text-xs text-txtgrey">{project.description}</div>
        <div class="flex justify-start gap-4 items-center">
          {/* <a href={project.code}>
            <FontAwesomeIcon icon={faGithub} />
          </a> */}

          {project.code && (
            <a href={project.code}>
              <FontAwesomeIcon icon={faCode} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo}>
              <FontAwesomeIcon icon={faLink} />
            </a>
          )}
          {project.figma && (
            <a href={project.figma}>
              <FontAwesomeIcon icon={faFigma} />
            </a>
          )}
          {/* {project.vid && (
            <a href={project.vid}>
              <FontAwesomeIcon icon={faVideo} />
            </a>
          )} */}
        </div>
        <div class="flex flex-wrap gap-2 justify-start">
          {project.skills.map((skill, index) => (
            <div
              key={index}
              class="w-fit bg-bggrey px-2 py-1 rounded  text-xs text-txtwhite"
            >
              {skill}
            </div>
          ))}
        </div>
        {/* <Modal
          isOpen={modalisOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              height:"85vh",
              width:"850px"
              // top: "50%",
              // left: "50%",
              // right: "auto",
              // bottom: "auto",
              margin: "auto",
              // marginRight: '-50%',
              // transform: 'translate(-50%, -50%)',
              // backgroundColor: 'rgba(0, 0, 0, 0.75)',
              border: "none",
            },
          }}
        >
          <ReactPlayer url={project.vid} />
        </Modal> */}
      </div>
    </div>
  );
}

export default ProjectCard;
