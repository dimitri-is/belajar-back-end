let namaAkhir;
namaAkhir = "Saputra";

console.log(namaAkhir);

// outputnya akan tertera tulisan=
// Saputra

// bisa juga memakai versi ini
let lastName = "Penceng";

console.log(lastName);
// maka hasilnya akan sama seperti pada contoh pertama yaitu=
// Penceng

// contoh penerapan expression 1
let jenengAwal = "Safa";
let jenengLengkap = (jenengAwal + "Ndaru");

console.log(jenengLengkap);
// hasilnya akan SafaNdaru, karena di dalam tanda petik tidak ada spasi di awal kata.

// contoh penerapan expression 2
let nameLengkap = "Dimitri" + "Irfan";

console.log(nameLengkap);
// hasil penerapan expression 2, menjadi DimitriIrfan, dan kasusnya seperti pada contoh expression pertama

// membuat variabel konstanta, yang tidak bisa kita lakukan perulangan
const z = 200;

console.log(z);
// hasilnya akan keluar angka 200

// membuat contoh kode perulangan variabel konstanta, yang pasti akan muncul error
const b = 1290;
console.log(b);
b = 1290;
console.log(b);
// hasilnya akan muncul error code saat menjalankan baris perintah kedua.