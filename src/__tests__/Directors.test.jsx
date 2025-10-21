// src/__tests__/Directors.test.jsx
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

test("renders Directors Page header", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/directors"],
  });
  render(<RouterProvider router={router} />);
  const header = screen.getByRole("heading", {
    level: 1,
    name: /Directors Page/i,
  });
  expect(header).toBeInTheDocument();
});

test("renders one <article> per director", async () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/directors"],
  });
  render(<RouterProvider router={router} />);
  const articles = await screen.findAllByRole("article");
  expect(articles.length).toBeGreaterThan(0); // adjust as per your data
});
