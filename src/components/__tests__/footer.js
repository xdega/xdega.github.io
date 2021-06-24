import React from "react"
import * as Gatsby from 'gatsby';
import { render } from "@testing-library/react"

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
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

describe("<Footer /> component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
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
    //
  });

  it("should display current year", () => {
    //
  });

  it("should render correct mailto", () => {
    //
  });

  it("should render correct email text", () => {
    //
  });

  it("should render correct github href", () => {
    //
  });

  it("should render correct github text", () => {
    //
  })
});