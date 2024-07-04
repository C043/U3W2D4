import { findAllByRole, render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import horrorBooks from "../data/horror.json";
import BookList from "../components/BookList";

describe("Welcome component", () => {
  it("mounts correctly", () => {
    render(<Welcome />);
    screen.debug();
    const heading = screen.getByText(/Welcome to EpiBooks!/i);
    expect(heading).toBeInTheDocument();
  });
});

describe("Book cards", () => {
  it("render all the books", async () => {
    render(<BookList genre={horrorBooks} />);
    screen.debug();
    console.log(horrorBooks.length);
    const cards = await screen.findAllByRole("img");
    expect(cards.length).toBeLessThanOrEqual(horrorBooks.length);
  });
});
