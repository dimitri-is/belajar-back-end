/*Switch Case Statement
Switch statement juga dapat digunakan unruk melakukan pengecekan banyak kondisi dengan mudah dan ringkas, tidak seperti if. */
// berikut contoh penerapannya
/*
switch (expression) {
    case value1;
        // do something
        break;
    case value1;
        // do something
        break;
    ...
    ...
    default;
    // do something else
}
*/
/*tanda kurung setelah keyword switch berisi variabel atau expression yang akan dievaluasi
setiap kondisi mungkin terjadi > masukkan keyword case diikuti dengan nilai yang valid 
> jika kondisi pada case sama dengan variabel pada switch, maka blok kode setelah dua titi (:) akan dijalankan 
> keyword break digunakan untuk keluar dari proses switch 
> terdapat satu case bernama default berfungsi sama seperti keyword else pada control flow if-else 
> jika tidak ada yang sama dengan variabel pada switch, maka blok kode akan dijalankan
*/
// contoh penerapan materi if-else yang dikonversi menjadi switch statement
let bahasa = "Perancis";
let salam = null;


switch (bahasa) {
    case "Inggris":
        salam = "Good Mording";
        break;
    case "Perancis":
        salam = "Bonjour";
        break;
    case "Jepang":
        salam = "Ohayou Gozaimasu!";
        break;
    default:
        salam = "Selamat Pagi!";
}

console.log(salam);
// output   > Bonjour