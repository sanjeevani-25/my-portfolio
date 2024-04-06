import React from "react";
import SkillsCard from "../components/SkillsCard";
import data from "../data/data.json";

const Skills = () => {
  console.log(data.skills[0]);
  return (
    <section
      id="skills"
      class="w-full h-fit flex flex-col items-center justify-center"
    >
      <div class="flex items-center justify-center gap-8">
        <button class="w-fit rounded-xl px-4 md:px-12 py-2 bg-bgblue border-solid border-2 border-bgblue text-txtwhite text-xs md:text-sm lg:text-base hover:bg-bgslightdarkblue flex gap-2 items-center">
          Tech
        </button>
        <button class="w-fit rounded-xl px-4 md:px-12 py-2 border-solid border-2 border-bgblue text-xs md:text-sm lg:text-base text-txtblack hover:bg-bgblue/5">
          Design
        </button>
      </div>
      <div class="flex flex-wrap gap-8 py-12 md:px-32 justify-center">
        {data.skills.map((skill, index) => (
          <SkillsCard key={index} data={skill} />
        ))}
      </div>
    </section>
  );
};
export default Skills;
