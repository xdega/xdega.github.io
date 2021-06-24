import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              email
              github
            }
          }
        }
      }
    `
  );

  const author = site.siteMetadata.author;

  return(
    <footer className="flex text-gray-400 divide-x-2">
      <div className="pr-1">
        <span data-testid="date" className="mr-1">© {new Date().getFullYear()} </span>
        <span data-testid="name" className="mr-1">{author.name}</span>
      </div>
      <div className="px-2">
        <a data-testid="email" 
           className="text-blue-400" 
           href={`mailto:${author.email}`}> 
           {author.email}
        </a>
      </div>
      <div className="px-2">
        <a data-testid="github"
           className="text-blue-400" 
           target="_blank" 
           rel="noreferrer" 
           href={author.github}> 
           {author.github.replace("https://", "")}
        </a>
      </div>
    </footer>
  );
}

export default Footer;