import { render, screen } from "@testing-library/react";
import App from "../App";

test("Menyapa Panji", () => {
  render(<App />);
  const text = screen.getByText("Hallo Panji");
  expect(text).toBeInTheDocument();
});
