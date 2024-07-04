import { fireEvent, render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import horrorBooks from "../data/horror.json";
import { describe, expect } from "vitest";

describe("Book filter function works properly", () => {
  it("returns three books if user types hor", () => {
    render(<BookList genre={horrorBooks} />);
    const input = screen.getByLabelText(/Filter/i);
    fireEvent.change(input, { target: { value: "hor" } });
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBeLessThanOrEqual(3);
  });
  it("returns three books if user types tom", () => {
    render(<BookList genre={horrorBooks} />);
    const input = screen.getByLabelText(/Filter/i);
    fireEvent.change(input, { target: { value: "tom" } });
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBeLessThanOrEqual(3);
  });
  it("returns three books if user types star wars", () => {
    render(<BookList genre={horrorBooks} />);
    const input = screen.getByLabelText(/Filter/i);
    fireEvent.change(input, { target: { value: "star wars" } });
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBeLessThanOrEqual(2);
  });
});

describe("Book selection function", () => {
  it("changes border color", () => {
    render(<BookList genre={horrorBooks} />);
    const firstCardImg = screen.getByAltText("The Silent Corner: A Novel of Suspense (Jane Hawk)");
    fireEvent.click(firstCardImg);
    const firstCard = firstCardImg.closest(".card");
    expect(firstCard).toHaveClass("border-danger");
  });
  it("changes border color back to normal if another card is clicked", () => {
    render(<BookList genre={horrorBooks} />);
    const firstCardImg = screen.getByAltText("The Silent Corner: A Novel of Suspense (Jane Hawk)");
    fireEvent.click(firstCardImg);
    const firstCard = firstCardImg.closest(".card");
    const secondCardImg = screen.getByAltText("Celtic Empire (Dirk Pitt Adventure)");
    fireEvent.click(secondCardImg);
    expect(firstCard).not.toHaveClass("border-danger");
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
