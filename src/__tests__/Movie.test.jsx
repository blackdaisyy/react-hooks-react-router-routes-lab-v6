// src/__tests__/Movie.test.jsx
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes"; // Make sure this is not empty
import "@testing-library/jest-dom";

test("renders the <NavBar /> component", async () => {
  const id = 1;
  const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/${id}`],
    initialIndex: 0,
  });

  render(<RouterProvider router={router} />);

  // ✅ This will now pass, since <nav> is present
  expect(await screen.findByRole("navigation")).toBeInTheDocument();
});
