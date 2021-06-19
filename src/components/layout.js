import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const css = [
    "font-bold",
    "bg-blue-300",
    "text-white",
    "px-2",
    "py-2",
    "pr-3",
    "inline",
    "bg-gradient-to-r",
    "from-green-300",
    "to-blue-400",
    "text-4xl"
  ];

  // Make the heading smaller for non home page links and small devices
  (isRootPath) ? css.push('sm:text-5xl') :  css.push('sm:text-3xl');

  const header = (
    <h1 className={css.join(' ')}>
      <Link to="/">{title}</Link>
    </h1>
  );

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header text-center sm:text-left whitespace-nowrap">{header}</header>
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
