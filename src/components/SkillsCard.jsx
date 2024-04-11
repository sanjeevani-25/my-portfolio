import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function SkillsCard({ skill }) {
  return (
    <div class=" group xs:w-48 sm:w-56 lg:w-64 h-fit border-solid border-2 border-bgblack flex flex-col p-8 rounded-xl gap-12 hover:bg-bgblack cursor-pointer">
      <div>
        <span class="text-txtblack text-2xl text-bold group-hover:text-txtwhite">
          {skill.name}
        </span>
        {/* <FontAwesomeIcon icon={faDownload} /> */}
      </div>
      <span class="text-txtgrey text-xs group-hover:text-txtwhite/70">
        {skill.description}
      </span>
    </div>
  );
}

export default SkillsCard;
