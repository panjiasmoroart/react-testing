function penjumlahan(angka1, angka2) {
  return angka1 + angka2;
}

function perkalian(angka1, angka2) {
  return angka1 * angka2;
}

// menambahkan testing fungsi text/string
function potonganPajak(gaji) {
  const PAJAK = 10 / 100;
  const gajiBersih = gaji - gaji * PAJAK;
  return `Gaji bersih anda Rp${gajiBersih}`;
}

function greeting(nama) {
  return `Hallo ${nama}`;
}

test("Menjumlahkan nilai", () => {
  expect(1 + 1).toBe(2);
});

test("Fungsi Penjumlahan", () => {
  expect(penjumlahan(3, 2)).toBe(5);
  expect(penjumlahan(4, 8)).toBe(12);
  expect(penjumlahan(7, 1)).toBe(8);
});

test("Fungsi Perkalian", () => {
  expect(perkalian(3, 2)).toBe(6);
  expect(perkalian(5, 4)).toBe(20);
});

test("Mengetahui gaji bersih di kurangi pajak", () => {
  expect(potonganPajak(10000000)).toBe(`Gaji bersih anda Rp${9000000}`);
});

test("Menyapa nama", () => {
  expect(greeting("Panji")).toBe("Hallo Panji");
});

// kesimpulan
// untuk melakukan testing sebuah fungsi javascript murni, cukup gunakan jest
// RTL saya gunakan ketika melakukan testing untuk Component React
