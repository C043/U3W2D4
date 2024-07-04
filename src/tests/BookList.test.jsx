import { fireEvent, render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";
import BookList from "../components/BookList";
import horrorBooks from "../data/horror.json";

describe("CommentArea component", () => {
  it("mounts correctly", () => {
    render(<CommentArea />);
    const commentLabel = screen.getByLabelText(/Comment/i);
    expect(commentLabel).toBeInTheDocument();
  });
});

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
