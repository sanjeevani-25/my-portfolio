import React, { useState, useEffect } from "react";
import AboutMeSVG from "../assets/about-me-svg-1.svg";
import data from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const [TLDR, setTLDR] = useState("TL;DR");
  const [displayedData, setDisplayedData] = useState(data.home[0].description1);

  const handleClick = () => {
    setTLDR(TLDR == "TL;DR" ? "Full Text" : "TL;DR");
  };
  useEffect(() => {
    setDisplayedData(
      TLDR == "Full Text"
        ? data.home[0].description2
        : data.home[0].description1
    );
  }, [TLDR]);

  return (
    <section id="profile" class="w-full h-fit flex items-center justify-center">
      <div class="w-1/2">
        <img src={AboutMeSVG} alt="" class="mx-auto w-fit" />
      </div>
      <div class="flex flex-col items-center justify-center w-1/2 gap-4 py-12">
        {/* <h1 class="text-center text-4xl font-bold text-txtblack">About me</h1> */}
        <div class="text-center text-sm lg:text-base text-txtgrey px-12 py-12">
          {displayedData}
        </div>
        <div class="flex justify-center gap-2 lg:gap-8 items-center">
          <button class="w-fit rounded-xl px-4 md:px-8 py-2 bg-bgblue border-solid border-2 border-bgblue text-txtwhite text-xs md:text-sm lg:text-base hover:bg-bgslightdarkblue flex gap-2 items-center">
            RESUME
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <button class="w-fit rounded-xl px-4 md:px-8 py-2 border-solid border-2 border-bgblue text-xs md:text-sm lg:text-base text-txtblack hover:bg-bgblue/5">
            HIRE ME
          </button>
          <button
            class="w-fit px-2 text-xs md:text-sm lg:text-base text-txtblack opacity-50 hover:opacity-100"
            onClick={handleClick}
          >
            {TLDR}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
