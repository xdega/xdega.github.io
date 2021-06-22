import * as React from "react";
import Header from "./header";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header isRootPath={isRootPath} title={title} />
      <main>{children}</main>
      <footer className="text-gray-400">
        © {new Date().getFullYear()} | Liam Hockley 
        |<a className="text-blue-400" href="mailto:contact@liamhockley.me"> contact@liamhockley.me </a>
        |<a className="text-blue-400" target="_blank" rel="noreferrer" href="https://github.com/xdega"> github.com/xdega</a>
      </footer>
    </div>
  );
}

export default Layout
