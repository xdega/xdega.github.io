import React from "react"
import { render } from "@testing-library/react"
import Header from "../header"

test("header renders title correctly", () => {
  const { debug, getByTestId } = render(<Header title="Liam Hockley" />);

  expect(getByTestId("header")).toHaveTextContent(/liam hockley/i)
});

test("header links to /", () => {
  //
});

test("header is correct size on root path", () => {
  //
});

test("header is correct size on non-root path", () => {
  //
});
