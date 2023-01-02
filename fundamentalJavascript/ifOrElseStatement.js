/*statement if akhkan menguji suatu kondisi
jika bermilai true, maka blok kode di dalamnya akan dijalankan. sebaliknya, jika bernilai false maka prosesnya akan dilewatkan.
*/
// contoh kodenya
const sedangHujan = false;

console.log("Persiapan sebelum berangkat kegiatan.");
if (sedangHujan) {
    console.log("Hari ini hujan, bawa payung.");
}
console.log("Berangkat kegiatan.");
/*output    >
Persiapan sebelum berangkat kegiatanfk.
// jika nilai tertulis true, maka akan nampak juga "Hari ini hujan, bawa payung.", Kenapa begitu, karena kode di dalam blok kode if dilewatkan
Berangkat kegiatan.
 */
// berikut contoh penerapan lainnya
let x = 15;

if (x > 29) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 29");
}
// output   > Nilai kurang dari 29
/* terdapat variabel dengan nilai 15, kemudian bertanya apakah nilai variabel tersebut lebih dari kode di dalam blok kode if. Jika benar, maka dapat terlihat output nilai variabel x, jika salah akan muncul teks nilai kurang dari 29*/
/*Kita juga dapat mengecheck beberapa kondisi sekaligus dengan menggabungkan kondisi if dan else.
berikut contoh programnya */
let bahasa = "Perancis";
let salam = "Selamat Pagi!";

if (bahasa === "Inggris") {
    salam = "Good Morning!";
} else if (bahasa === "Perancis") {
    salam = "Bonjour!"
} else if (bahasa === "Jepang") {
    salam = "Ohayou Gozaimasu!"
}

console.log(salam);
// output   > Bonjour!
/* pengecheckannya dilakukan ketika kondisi dari statemen if paling awal > ketika nilai bahasa adalah "Perancis", maka untuk bahasa === "Jepang" tidak akan dilakukan */

/* selain pengulangan kondisi, kita juga dapat membuat Ternary Operator atau Conditional Expressions. Dengannya, kita dapat meniliskan if-else statement hanya dalam satu baris.
contoh programnya seperti berikut*/
// kondisi benar ? ekspresi benar : salah ekspresi
const adalahAnggota = false;
const diskon = adalahAnggota ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${diskon * 100}%`);
// output   > Anda mendapatkan diskon sebesar 0%
/*operator ini membutuhkan tiga operand.
sebelum tanda tanya (?) berisi kondisi yang dievaluasi > diikuti expression apabila nilai kondisinya benar sebelum tanda titik dua > Terakhir, expression yang dieksekusi ketika kondisinya salah, karena conditional expression. Maka operand kedua, dan ketiga harus mengembalikan nilai */


/*truthy & falsy
di dalam if statement perlu dimasukkan expression yang akan dievaluasi. 
umumnya, mengembalikan nilai boolean untuk menentukan kondisi true atau false.
bagaimana jika kita tuliskan expression yang tidak mengembalikan nilai boolean? tentu saja masih bisa */
/*setiap nilai, pada dasarnya mewarisi sifat boolean, yang dikenal truth falsy
trurh berarti nilai yang dievaluasi akan menghasilkan nilai true, begitu juga dengan falsy.
selain boolean falsy, tipe data yang dianggap falsy antara lain=
Number 0
BigInt 0n
String kosong seperti "" atau '' 
null
undefined
NaN, atau Not a Number*/
// dari penjelasan materi terakhir di atas, berikut penggunaanya
let nama = "";

if (nama) {
    console.log(`Halo, ${nama}`);
} else {
    console.log("Nama masih kosong");
}
// output   > Nama masih kosong