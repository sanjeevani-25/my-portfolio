import { useState } from "react";
import SkillsCard from "../components/SkillsCard";
import data from "../data/data.json";

const Skills = () => {
  const [Choice, setChoice] = useState("tech");
  const onclickStyle = {
    borderWidth: "2px",
    borderColor: "#191919",
    backgroundColor: "#191919",
    color: "#fff",
  };
  const defaultStyle =
    "w-fit rounded-lg px-4 sm:px-12 py-2  border-solid border-2 border-bggrey text-txtgrey hover:border-bgblack hover:text-txtblack text-sm md:text-base";

  return (
    <section
      id="skills"
      className="w-full h-fit flex flex-col gap-12 px-12 py-24"
    >
      <h1 className="text-center text-4xl font-bold text-txtblack">Skills</h1>
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8" role="group">
          <button
            className={defaultStyle}
            style={Choice === "tech" ? onclickStyle : {}}
            onClick={() => {
              setChoice("tech");
            }}
          >
            Tech
          </button>
          <button
            className={defaultStyle}
            style={Choice === "design" ? onclickStyle : {}}
            onClick={() => {
              setChoice("design");
            }}
          >
            Design
          </button>
        </div>
        <div className="flex flex-wrap xs:gap-4 md:gap-8 xs:px-12 md:px-32 justify-center">
          {data.skills[Choice].map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
