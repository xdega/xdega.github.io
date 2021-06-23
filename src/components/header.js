import * as React from "react";
import { Link } from "gatsby";

const Header = (props) => {
  const {title, isRootPath} = props;

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
  (isRootPath) ? css.push("sm:text-5xl") :  css.push("sm:text-3xl");

  return (
    <header className="global-header text-center sm:text-left whitespace-nowrap">
    <h1 data-testid="header-h1" className={css.join(' ')}>
      <Link data-testid="header-link" to="/">
        {title}
      </Link>
    </h1>
    </header>
  );
}

export default Header;
