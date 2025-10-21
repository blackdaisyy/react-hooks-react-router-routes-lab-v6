// src/__tests__/Movie.test.jsx
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

test("renders the <NavBar /> component on movie route", async () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/movie/1"],
  });
  render(<RouterProvider router={router} />);
  const nav = await screen.findByRole("navigation");
  expect(nav).toBeInTheDocument();
});

test("renders movie details correctly", async () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/movie/1"],
  });
  render(<RouterProvider router={router} />);
  // waiting for the title (h1)
  const title = await screen.findByRole("heading", { level: 1 });
  expect(title.textContent).toBe("Doctor Strange");
  const time = await screen.findByText(/\d+ min/); // e.g. "115 min"
  expect(time).toBeInTheDocument();
  const genreSpans = await screen.findAllByText(/(Action|Adventure|Fantasy)/i);
  expect(genreSpans.length).toBeGreaterThan(0);
});
