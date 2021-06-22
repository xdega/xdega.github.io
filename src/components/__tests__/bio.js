import React from "react"
import { render } from "@testing-library/react"
import Bio from "../bio"

test("bio renders intro text correctly", () => {
  const { getByTestId } = render(<Bio />);

  expect(getByTestId("bio-intro"))
    .toHaveTextContent("I am a Software Engineer focused on Ed Tech and the WWW.")
})
