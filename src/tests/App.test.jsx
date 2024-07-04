import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Welcome from "../components/Welcome";

describe("Welcome component", () => {
  it("mounts correctly", () => {
    render(<Welcome />);
    screen.debug();
    const heading = screen.getByText(/Welcome to EpiBooks!/i);
    expect(heading).toBeInTheDocument();
  });
});
