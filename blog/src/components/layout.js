import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const headerCSS = [
    "font-bold",
    "bg-blue-300",
    "text-white",
    "px-2",
    "py-2",
    "pr-3",
    "inline",
    "bg-gradient-to-r",
    "from-green-300",
    "to-blue-400"
  ];

  // Make the heading smaller for non home page links
  (isRootPath) ? headerCSS.push('text-5xl') :  headerCSS.push('text-3xl');


  header = (
    <h1 className={headerCSS.join(' ')}>
      <Link to="/">{title}</Link>
    </h1>
  );

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} | Liam Hockley
      </footer>
    </div>
  );
}

export default Layout
