import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import data from "../data/data.json";

function Experience() {
  return (
    <section
      id="experience"
      class=" w-full min-h-screen max-h-fit overflow-visible flex flex-col justify-center items-center px-12 pt-24"
    >
      <div class="flex flex-col">
        <h1 class="text-center text-4xl font-bold text-txtblack">Experience</h1>
        <ol class="relative flex flex-col items-center justify-center w-full border-s border-bggrey/30 px-4 m-12 md:left-1/4">
          {data.experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
