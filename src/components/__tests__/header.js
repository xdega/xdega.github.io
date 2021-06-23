import React from "react"
import { render } from "@testing-library/react"
import Header from "../header"

test("header link renders title correctly", () => {
  const { getByTestId } = render(<Header title="Liam Hockley" />);

  expect(getByTestId("header-link")).toHaveTextContent(/liam hockley/i)
});

test("header link href to /", () => {
  const { getByTestId } = render(<Header title="Liam Hockley" />);

  expect(getByTestId("header-link")).toHaveAttribute("href", "/");
});

test("header is correct size on root path", () => {
  const isRootPath = true;
  const { getByTestId } = render(<Header isRootPath={isRootPath} title="Liam Hockley" />);
  expect(getByTestId("header-h1")).toHaveClass("sm:text-5xl")
});

test("header is correct size on non-root path", () => {
  const isRootPath = false;
  const { getByTestId } = render(<Header isRootPath={isRootPath} title="Liam Hockley" />);

  expect(getByTestId("header-h1")).toHaveClass('sm:text-3xl')
});
