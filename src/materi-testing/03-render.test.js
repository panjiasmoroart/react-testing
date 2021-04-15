import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing untuk seluruh App", () => {
  it("memunculkan seluruh html view dari App", () => {
    // yg dilakukan render RTL, dia mensimulasikan seakan sedang berada dibrowser
    // hanya saja render RTL ini kerjanya di terminal, buka di browser
    // sehingga kita bisa melakukan testing terhadap element yg nampak
    render(<App />);
    // menampilkan ke dalam terminal apa yg telah di render oleh RTL
    screen.debug();

    const btn = screen.getByRole("button");
    // buat sekenario seolah-olah diklik
    fireEvent.click(btn);
    screen.debug();
  });
});
