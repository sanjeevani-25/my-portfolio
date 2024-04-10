// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
// import "../App.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faLightbulb,
  faBriefcase,
  faEnvelope,
  faMoon,
  faSun,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Headroom from "react-headroom";

const Navbar = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    // <Headroom class="headroom--pinned">
    // <header class="">
    <nav class="fixed bg-bgwhite top-0 left-0 w-full flex items-center justify-between sm:justify-center px-8 sm:px-8 z-40 lg:px-20 py-4 sm:py-3">
      <div class="hidden sm:block ">
        <ul class="flex items-center justify-center gap-6">
          {[
            ["Home", "home", faHouse],
            ["Profile", "profile", faUser],
            ["Skills", "skills", faLightbulb],
            ["Projects", "projects", faGear],
            ["Experience", "experience", faBriefcase],
            ["Contact", "contact", faEnvelope],
          ].map(([title, url, iconName]) => (
            <a key={title} href={`#${url}`}>
              <li class="relative group px-6 pt-3 cursor-pointer flex flex-col justify-center items-center hover:scale-110 h-fit">
                <FontAwesomeIcon
                  className="size-5"
                  // style={"group-hover" ? { color: "#74C0FC" } : {}}
                  icon={iconName}
                />

                <div class="invisible w-5 border-t-2 my-2 group-hover:visible"></div>

                <span class="invisible text-txtgrey text-xs pointer-events-none group-hover:visible">
                  {title}
                </span>
              </li>
            </a>
          ))}
        </ul>
      </div>
      {/* <FontAwesomeIcon icon={faMoon} />
      <FontAwesomeIcon icon={faSun} /> */}
    </nav>
    // </header>
    // </Headroom>
  );
};

export default Navbar;
