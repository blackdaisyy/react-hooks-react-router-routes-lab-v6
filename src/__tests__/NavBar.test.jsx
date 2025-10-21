import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test("NavBar renders links in correct order", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(3);
  expect(links[0].textContent).toBe("Home");
  expect(links[1].textContent).toBe("Directors");
  expect(links[2].textContent).toBe("Actors");
});
