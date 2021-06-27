---
title: "Tests: One Week Later"
date: "2021-06-26T22:43:35.156Z"
description: "It has been a good week since I entered the wonderful world of
unit testing (via Jest) for this, my new personal website and blog. Since that 
first test, I have refactored my UI and written multiple test suites for each 
component. Let's discuss!"
---

## Recap

Last week I implemented my very first unit test. It was a snapshot-based test for my Bio component. It was simple but all I could test at the time. I realised that my layout was not factored enough and did not lend itself to a reasonable level of unit testing. 

I had encountered one of my first major valuable lessons in unit testing. That is, testable code should be decoupled and broken down into units. In this case, it would mean breaking down my layout into some reasonable building blocks such as Header, Bio, and Footer components.

## The Progress

My goal over the last week was to ensure that I created testable components. Not only that, I wanted to write tests that render the component instead of relying on a library of "brittle" snapshots that would have to be maintained.

The result is a healthy collection of test suites that render my components, mock Gatsby's GraphQL implementation, and test that the dynamic data is rendered correctly. One good example of this would probably be my footer test suite, where I use a little bit of string manipulation and use dynamic data values for both HTML properties and text output...

__src/components/footer.js__

```js
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
```

__src/components/\_\_tests\_\_/footer.js__

```js
import React from "react"
import * as Gatsby from 'gatsby';
import { render } from "@testing-library/react";
import Footer from "../footer";

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

describe("<Footer /> component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author: {
            name: "Liam Hockley",
            email: "contact@liamhockley.me",
            github: "https://github.com/xdega",
          },
        },
      },
    }));
  });

  it("should render correct author name", () => {
    const { site } = useStaticQuery(
      Gatsby.graphql`
        query {
          site {
            siteMetadata {
              author {
                name
              }
            }
          }
        }
      `
    );
    const { getByTestId } = render(<Footer />);
    
    expect(getByTestId("name")).toHaveTextContent(site.siteMetadata.author.name);
  });

  it("should display current year", () => {
    const { getByTestId } = render(<Footer />);
    const date = new Date().getFullYear();

    expect(getByTestId("date")).toHaveTextContent(date);
  });

  it("should render correct mailto", () => {
    const { site } = useStaticQuery(
      Gatsby.graphql`
        query {
          site {
            siteMetadata {
              author {
                email
              }
            }
          }
        }
      `
    );
    const { getByTestId } = render(<Footer />);

    expect(getByTestId("email")).toHaveAttribute("href", `mailto:${site.siteMetadata.author.email}`);
  });

  it("should render correct email text", () => {
    const { site } = useStaticQuery(
      Gatsby.graphql`
        query {
          site {
            siteMetadata {
              author {
                email
              }
            }
          }
        }
      `
    );
    const { getByTestId } = render(<Footer />);

    expect(getByTestId("email")).toHaveTextContent(site.siteMetadata.author.email);
  });

  it("should render correct github href", () => {
    const { site } = useStaticQuery(
      Gatsby.graphql`
        query {
          site {
            siteMetadata {
              author {
                github
              }
            }
          }
        }
      `
    );
    const { getByTestId } = render(<Footer />);

    expect(getByTestId("github")).toHaveAttribute("href", site.siteMetadata.author.github);
  });

  it("should render correct github text", () => {
    const { site } = useStaticQuery(
      Gatsby.graphql`
        query {
          site {
            siteMetadata {
              author {
                github
              }
            }
          }
        }
      `
    );
    const { getByTestId } = render(<Footer />);

    const github_string = site.siteMetadata.author.github.replace("https://", "");
    expect(getByTestId("github")).toHaveTextContent(github_string);

  })
});
```

## Future Improvements

One thing that I  overlooked when diving into unit tests was that of static code testing. That is to say, implementation of tools like Prettier and ESLint to enforce consistent code standards. It is usually something I set up quite early in a project, but I had dropped the ball here.

A few inconsistencies in my source code include semi-colon use, single-quote, double-quote, and backtick usage. It should be relatively simple to fix.

Watch this space for future updates on my adventures in testing. That said, I intend to dive into some deeper engineering philosophy topics in the immediate future.