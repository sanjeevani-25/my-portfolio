import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutMeSVG from "../assets/about-me-svg-1.svg";
import data from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDownload, faFile } from "@fortawesome/free-solid-svg-icons";

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

  const navigateTo = useNavigate();

  const toContact = () => {
    navigateTo("/contact");
  };

  return (
    <section
      id="profile"
      className="w-full h-screen flex flex-col items-center gap-8 pt-24"
    >
      <h1 className="text-center text-4xl font-bold text-txtblack ">
        About me
      </h1>
      <div className="w-full flex items-center justify-center">
        <div className="md:w-1/2 hidden md:block p-2">
          <img src={AboutMeSVG} alt="" className="mx-auto w-fit" />
        </div>
        <div className="flex flex-col items-center justify-center h-1/2 md:w-1/2 gap-16">
          <div className="text-center text-sm lg:text-base text-txtgrey px-12">
            {displayedData}
          </div>
          <div className="flex justify-center gap-12 md:gap-8 items-center">
            <button className="w-fit rounded-xl px-4 md:px-8 py-2 bg-bgblue border-solid border-2 border-bgblue text-txtwhite text-sm lg:text-base hover:bg-bggrey/50 hover:text-txtblack flex gap-2 items-center">
              RESUME
              {/* <FontAwesomeIcon icon={faDownload} /> */}
              <FontAwesomeIcon icon={faFile} />
            </button>
            <button
              className="w-fit rounded-xl px-4 md:px-8 py-2 border-solid border-2 border-bgblue text-sm lg:text-base text-txtblack hover:bg-bggrey/50"
              onClick={toContact}
            >
              HIRE ME
            </button>
            <button
              className="w-fit px-2 text-sm lg:text-base text-txtblack opacity-50 hover:opacity-100"
              onClick={handleClick}
            >
              {TLDR}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
