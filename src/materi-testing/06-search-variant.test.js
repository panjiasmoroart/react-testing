import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing semua aplikasi di dalam App", () => {
  test("melakukan testing untuk queryBy dan findBy", async () => {
    render(<App />);
    // jika dijalankan pasti error, error tersebut karena kita menggunakan getByText
    // getByText secara default me return error ketika apa yg di cari tidak ditemukan
    // nah disini text "Selamat datang" pasti tidak ditemukan, karena memang blm di render
    // kan usernya blm ada, kondisinya jika user ada baru tampilkan Selamat datang {user}
    // ketika ada case seperti ini, kita tidak bisa menggunakan getBYText kita bisa gunakan
    // queryByText untuk keperluan tersebut
    // expect(screen.getByText(/Selamat datang/)).toBeNull();

    // karena kita menggunakan queryBy maka proses pencarian componentnya tidak
    // akan mereturn error. dia hanya menyimpan value yang kita cari, jika value
    // yg dicari tidak ada ya sudah valuenya berarti tidak ada atau null
    expect(screen.queryByText(/Selamat datang/)).toBeNull();
    // getByText tidak bisa menerima proses yang asynchronous
    // dengan harapan, setelah 1 detik maka text "Selamat datang" suda ada dalam document
    // untuk mengetahui lebih dalam proses async bisa menggunakan screendebug
    // screen.debug();
    expect(await screen.findByText(/Selamat datang/)).toBeInTheDocument();
    // screen.debug();
  });
});
