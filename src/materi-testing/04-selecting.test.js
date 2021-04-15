import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

// selecting element for expect value (memilih sebuah element untuk menentukan pengujian)
describe("Testing untuk seluruh App saat pertama render", () => {
  it("memastikan kontent text P sesuai saat pertama render", () => {
    render(<App />);

    const textP = screen.getByText("Saya sedang Sembunyi");

    expect(textP).toBeInTheDocument();
  });

  it("memastikan kontent button sesuai saat pertama render", () => {
    render(<App />);

    const textButton = screen.getByText("Munculkan");

    expect(textButton).toBeInTheDocument();
  });
});
