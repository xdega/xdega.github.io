import React from "react"
import * as Gatsby from 'gatsby';
import { render } from "@testing-library/react"

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      author: 'Liam Hockley',
      description: 'My description',
      title: 'My Title',
    },
  },
}));

describe("<Footer /> component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () =>{
    const { site } = useStaticQuery(
      Gatsby.graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `
    );
  
    console.log(site.siteMetadata.title);
  });
});