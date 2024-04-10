import React from "react";
import {
  faGithub,
  faGithubAlt,
  faLinkedin,
  faLinkedinIn,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const c = "w-6";
  return (
    <div class="fixed bottom-0 w-1/2 right-1/4 flex gap-8 text-txtblack bg-bgwhite h-12 p-4 items-center justify-center rounded-t-md">
      <FontAwesomeIcon icon={faGithub} class={c} />
      {/* <FontAwesomeIcon icon={faGithubAlt} class={c} /> */}
      {/* <FontAwesomeIcon icon={faLinkedin} class={c} /> */}
      <FontAwesomeIcon icon={faLinkedinIn} class={c} />
      <FontAwesomeIcon icon={faDribbble} class={c} />
      <FontAwesomeIcon icon={faCode} class={c} />
    </div>
  );
}

export default Footer;
