import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test('wraps content in a div with "navbar" class', () => {
  const { container } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});
