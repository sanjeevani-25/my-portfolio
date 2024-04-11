// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
// import "../App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
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
  // const [header, setHeader] = useState(false);

  // const scrollHeader = () => {
  //   if (window.scrollY >= 20) {
  //     setHeader(true);
  //   } else {
  //     setHeader(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHeader);
  //   return () => {
  //     window.removeEventListener("scroll", scrollHeader);
  //   };
  // }, []);
  const [selectedLink, setSelectedLink] = useState(null);
  const location = useLocation();

  const handleClick = (url) => {
    setSelectedLink(url);
    console.log(selectedLink);
  };

  return (
    // <Headroom class="headroom--pinned">
    // <header class="">
    <nav class="hidden fixed bg-bgwhite top-0 left-0 w-full md:flex items-center justify-between sm:justify-center px-8 sm:px-8 z-40 lg:px-20 py-4 sm:py-3">
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
            <Link key={title} to={`/${url}`} onClick={() => handleClick(url)}>
              <li class="relative group px-6 pt-3 cursor-pointer flex flex-col justify-center items-center hover:scale-110 h-fit">
                <FontAwesomeIcon
                  className="size-5"
                  // style={"group-hover" ? { color: "#74C0FC" } : {}}
                  // style={{ color: selectedLink == url ? "white" : "" }}
                  icon={iconName}
                />

                <div
                  class={` w-5 border-t-2 my-2 group-hover:visible ${
                    selectedLink == url ? "visible" : "invisible"
                  }`}
                ></div>

                <span class="invisible text-txtgrey text-xs pointer-events-none group-hover:visible">
                  {title}
                </span>
              </li>
            </Link>
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
