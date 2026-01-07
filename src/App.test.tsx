import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

jest.mock("./pages/PostPage", () => () => <div>PostPage</div>);
jest.mock("./pages/PostDetail", () => () => <div>PostDetail</div>);

describe("App routing", () => {
  test("renders PostPage on /posts", () => {
    render(
      <MemoryRouter initialEntries={["/posts"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/PostPage/i)).toBeInTheDocument();
  });

  test("renders PostDetail on /posts/:postId", () => {
    render(
      <MemoryRouter initialEntries={["/posts/1"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/PostDetail/i)).toBeInTheDocument();
  });
});
