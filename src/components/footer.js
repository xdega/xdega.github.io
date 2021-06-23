import * as React from "react";

const Footer = () => {
  return(
    <footer className="text-gray-400">
      © {new Date().getFullYear()} | Liam Hockley 
      |<a className="text-blue-400" href="mailto:contact@liamhockley.me"> contact@liamhockley.me </a>
      |<a className="text-blue-400" target="_blank" rel="noreferrer" href="https://github.com/xdega"> github.com/xdega</a>
    </footer>
  );
}

export default Footer;