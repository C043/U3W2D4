import { findAllByRole, fireEvent, render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import horrorBooks from "../data/horror.json";
import BookList from "../components/BookList";
import { describe } from "vitest";
import App from "../App";
import CommentArea from "../components/CommentArea";

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

describe("Single comment component", () => {
  it("not present if no book is selected", () => {
    render(<BookList genre={horrorBooks} />);
    const selectBookAlert = screen.getByText(/Select a Book/i);
    expect(selectBookAlert).toBeInTheDocument();
  });
  it("not present if no book is selected", async () => {
    render(<BookList genre={horrorBooks} />);
    screen.debug();

    const firstBookImg = screen.getByAltText("The Silent Corner: A Novel of Suspense (Jane Hawk)");
    fireEvent.click(firstBookImg);
    const singleComment = await screen.findByText("Troppo western!");
    expect(singleComment).toBeInTheDocument();
  });
});
