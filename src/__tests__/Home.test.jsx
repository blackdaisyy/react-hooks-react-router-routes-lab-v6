// src/__tests__/Home.test.jsx
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

test("renders 'Home Page' inside of an <h1 />", () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/"] });
  render(<RouterProvider router={router} />);
  const h1 = screen.getByRole("heading", { level: 1, name: /Home Page/i });
  expect(h1).toBeInTheDocument();
});

test("Displays a list of movie titles", async () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/"] });
  render(<RouterProvider router={router} />);
  const titleList = await screen.findAllByRole("heading", { level: 2 });
  expect(titleList.length).toBeGreaterThan(2);
  expect(titleList[0].tagName).toBe("H2");
  expect(titleList[0].textContent).toBe("Doctor Strange");
});

test("Displays links for each associated movie", async () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/"] });
  render(<RouterProvider router={router} />);
  const linkList = await screen.findAllByText(/View Info/i);
  expect(linkList.length).toBeGreaterThan(2);
  const href = linkList[0].getAttribute("href");
  expect(href).toBe("/movie/1");
});
