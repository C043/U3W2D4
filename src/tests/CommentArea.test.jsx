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
