import React from "react"
import { render } from "@testing-library/react"
import Bio from "../bio"

describe("<Bio /> component", () => {
  const originalWarn = console.warn.bind(console.warn);

  beforeAll(() => {
    console.warn = (msg) => {
      /**
       * Disabling the image loading warning. Unable to find good documentation 
       * on how to propery mock a component that contains images, but these 
       * tests do not care about images per se.
       * */
      !msg.toString().includes('Image not loaded') && originalWarn(msg);
    }
  });

  afterAll(() => {
    console.warn = originalWarn
  });

  it("should render intro text correctly", () => {
    const { getByTestId } = render(<Bio />);
  
    expect(getByTestId("bio-intro"))
      .toHaveTextContent("I am a Software Engineer focused on Ed Tech and the WWW.")
  })
});