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
