import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("CommentArea component", () => {
  it("mounts correctly", () => {
    render(<CommentArea />);
    const commentLabel = screen.getByLabelText(/Comment/i);
    expect(commentLabel).toBeInTheDocument();
  });
});
