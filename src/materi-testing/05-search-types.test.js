import { render, screen } from "@testing-library/react";
import App from "../App";

// selecting element for expect value (memilih sebuah element untuk menentukan pengujian)
describe("Melakukan testing untuk seluruh App", () => {
  it("memunculkan role yang ada dalam sebuah component", () => {
    render(<App />);
    // mengethaui role dari sebuah tag
    // screen.getByRole("");
  });
});
