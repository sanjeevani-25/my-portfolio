import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function SkillsCard({ data }) {
  return (
    <div class="w-64 h-fit border-solid border-2 border-bgblue flex flex-col p-8 rounded-2xl gap-12">
      <div>
        <span class="text-txtblack text-2xl text-bold">{data.name}</span>
        {/* <FontAwesomeIcon icon={faDownload} /> */}
      </div>
      <span class="text-txtgrey">{data.description}</span>
    </div>
  );
}

export default SkillsCard;
