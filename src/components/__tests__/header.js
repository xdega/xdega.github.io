import React from "react"
import { render } from "@testing-library/react"
import Header from "../header"

describe("<Header /> component", () => {
  it("should render correct title", () => {
    const { getByTestId } = render(<Header title="Liam Hockley" />);
  
    expect(getByTestId("header-link")).toHaveTextContent(/liam hockley/i)
  });
  
  it("should have href to /", () => {
    const { getByTestId } = render(<Header title="Liam Hockley" />);
  
    expect(getByTestId("header-link")).toHaveAttribute("href", "/");
  });
  
  it("should have correct size on root path", () => {
    const isRootPath = true;
    const { getByTestId } = render(<Header isRootPath={isRootPath} title="Liam Hockley" />);
    expect(getByTestId("header-h1")).toHaveClass("sm:text-5xl")
  });
  
  it("should have correct size on non-root path", () => {
    const isRootPath = false;
    const { getByTestId } = render(<Header isRootPath={isRootPath} title="Liam Hockley" />);
  
    expect(getByTestId("header-h1")).toHaveClass('sm:text-3xl')
  });
});
