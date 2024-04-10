import React, { useState, useCallback } from "react";
import data from "../data/data.json";
import Select from "react-tailwindcss-select";
import ProjectCard from "../components/ProjectCard";
import "react-tailwindcss-select/dist/index.css";

function Projects() {
  const options = data.categories;

  const [tech, setTech] = useState(null);

  const handleChange = (value) => {
    setTech(value);
  };

  const filteredProjects =
    tech !== null
      ? data.projects.filter((project) => {
          // if (!project || !project.skills || !Array.isArray(project.skills)) {
          //   return false; // Skip invalid projects
          // }
          return tech.some((value) => project.skills.includes(value.value));
        })
      : data.projects;
  return (
    <section
      id="projects"
      class=" w-full min-h-screen overflow-visible flex flex-col justify-center items-center px-12 py-24"
    >
      {/* Search by name / tags filter AND or OR/ time from to / category */}
      <h1 class="text-center text-4xl font-bold text-txtblack">Projects</h1>
      <div className="w-1/2 mx-auto py-12">
        <Select
          classNames={{
            menuButton: ({ isDisabled }) =>
              `flex text-md text-txtgrey border border-bggrey rounded shadow-sm transition-all duration-300 focus:outline-none ${
                isDisabled
                  ? "bg-bgblack"
                  : "bg-bgwhite hover:border-bgblack focus:border-bgblack focus:ring focus:ring-bgblack/10"
              }`,
            menu: "absolute z-10 w-full bg-bgwhite shadow-lg border rounded py-1 mt-1.5 text-sm text-bggrey",
            listItem: ({ isSelected }) =>
              `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                isSelected
                  ? `text-white bg-bgblack`
                  : `text-bggrey hover:bg-bgblack/10 hover:text-bgblack`
              }`,
          }}
          value={tech}
          onChange={handleChange}
          options={options}
          isMultiple={true}
          isClearable={true}
          placeholder="Tech stack used..."
        />
      </div>

      <div class="flex flex-wrap items-center justify-center gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
