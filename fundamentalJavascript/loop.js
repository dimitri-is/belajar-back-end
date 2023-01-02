/*Akan ada situasi dimana perlu melakukan hal yang sama berkali-kali.
misal kita ingin menampilkan semua nama pengguna yang terdaftar di aplikasi atau sesederhana menampilkan angka 1 sampai 10. 
Dan ini tidak praktis, jika menuliskan kode seperti contoh berikut=
 */
/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

output  >
1
2
3
4
5
6
7
8
9
10
*/

/*maka, kita perlu menggunakan teknik pengulangan, yang umum dikenal dengan teknik looping.
kita banyak pilihan untuk melakukannya
*/
// antara lain =
/*For Loop
teknik for salah satu cara yang banyak digunakan. struktur dasarnya seperti berikut= 

for(inisialisasi variabel; test kondisi; perubahan nilai variabel)  {
    // do something
}
*/
// contoh penerapan for looping =
for (let i = 0; i < 5; i++) {
    console.log(i);
}
/*output    >
1
2
3
4 
*/
/*terdapat tiga bagian utama dari sintaks for tsb =
1. variabel i sebagai indeks iterasi. Variabel ini yang mewarisi nilai awal dari perulangan
2. operasi perbandingan. JavaScript melakukan pengecekan kondisi apakah perulangan masih perlu dilakukan. Jika true, kode di dalam blok for akan dijalankan.
3. increment/decrement. Kita melakukukan penambahan atau pengurangan variabel iterasi. Di variabel i akan ditambah dengan 1 di setiap akhir perulangan. Perubahan nilai ini penting karena jika mengubah nilainya, proses perulangan dapat terus berjalan selama kondisi terpenuhi. 
*/
