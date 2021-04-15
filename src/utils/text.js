export function potonganPajak(gaji) {
  const PAJAK = 10 / 100;
  const gajiBersih = gaji - gaji * PAJAK;
  return `Gaji bersih anda Rp${gajiBersih}`;
}

export function greeting(nama) {
  return `Hallo ${nama}`;
}
