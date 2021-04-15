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

// selecting element for action fireEvent (memilih element untuk memberikan sebuah aksi)
// cara selecting ada banyak cara getByRole, getByText
describe("Testing untuk seluruh App setelah melakukan action click pada button", () => {
  it("memastikan kontent text P sesuai setelah action click button", () => {
    render(<App />);

    const buttonMunculkan = screen.getByText("Munculkan");
    fireEvent.click(buttonMunculkan);
    // screen.debug();

    const textP = screen.getByText("Saya sedang Muncul");
    expect(textP).toBeInTheDocument();
  });

  it("memastikan kontent button sesuai setelah action click button", () => {
    render(<App />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    // screen.debug();

    const buttonSembunyikan = screen.getByText("Sembunyikan");
    expect(buttonSembunyikan).toBeInTheDocument();
  });
});
