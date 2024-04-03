// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
// import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faHouse,
  faUser,
  faLightbulb,
  faBriefcase,
  faEnvelope,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav class="absolute top-0 left-0 w-full flex items-center justify-between sm:justify-center px-8 sm:px-8 lg:px-20 z-40 py-4 sm:py-3">
      <div class="hidden sm:block ">
        <ul class="flex items-center justify-center ">
          {[
            ["Home", "/home", faHouse],
            ["Profile", "/profile", faUser],
            ["Skills", "/skills", faLightbulb],
            ["Projects", "/projects", faBriefcase],
            ["Contact", "/contact", faEnvelope],
          ].map(([title, url, iconName]) => (
            <li
              key={title}
              class="relative group px-6 py-3 cursor-pointer flex-1 justify-center"
            >
              <FontAwesomeIcon class="size-6 hover:scale-110" icon={iconName} />
              <div class="border-t-2 opacity-0 my-2 group-hover:opacity-100"></div>
              {/* <span class="absolute h-2 bg-blue-400"></span> */}
              <div class="absolute opacity-0 group-hover:opacity-100 text-center text-xs pointer-events-none">
                {title}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <FontAwesomeIcon icon={faMoon} />
      <FontAwesomeIcon icon={faSun} /> */}
    </nav>
  );
};

export default Navbar;
