import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import { describe } from "vitest";

describe("Welcome component", () => {
  it("mounts correctly", () => {
    render(<Welcome />);
    screen.debug();
    const heading = screen.getByText(/Welcome to EpiBooks!/i);
    expect(heading).toBeInTheDocument();
  });
});
