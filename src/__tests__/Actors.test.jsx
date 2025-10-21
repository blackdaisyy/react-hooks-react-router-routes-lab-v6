// src/__tests__/Actors.test.jsx
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

test("renders Actors Page header", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/actors"],
  });
  render(<RouterProvider router={router} />);
  const header = screen.getByRole("heading", {
    level: 1,
    name: /Actors Page/i,
  });
  expect(header).toBeInTheDocument();
});

test("renders one <article> per actor", async () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/actors"],
  });
  render(<RouterProvider router={router} />);
  const articles = await screen.findAllByRole("article");
  expect(articles.length).toBeGreaterThan(0); // adjust as per your data
});
