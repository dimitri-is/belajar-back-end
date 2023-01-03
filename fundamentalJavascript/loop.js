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
//arti kode di atas adalah "Jika i kurang dari 5, maka tampilkan nilai i"


/*Fr=or of loop
for..of 
mulai hadir pada 2015 di ECMAScript
jauh lebih sederhana, dan modern dibandingkan loop yang biasanya
berikut sintaks dasarnya =
		for(arrayItem of myArray) {
			// do something
		}

tidak membutuhkan banya statement untuk melakukan looping pada array
kita bisa menganggap array sebagai kumpulan nilai yang disimpan dalam satu variabel

dengannya, nilai tiap array akan diinisiasikan pada variabel baru yang kita tentukan tiap proses loopingnya
jumlah prosesnya akan menyesuaikan ukuran array
seperti kita melakukan perintah "Hei JavaScript! lakukan perulangan pada myArray, akses tiap nilainya, dan simpan pada variabel arryItem"
pada proses ini, gunakan variabel arrayItem untuk mengakses tiap nilai dari item myArray
*/
//berikut contoh penerapan sintaks kodenya
let	myArray	= ["Yanti", "Ahmad", "Badrun", "Khasib"];

for(const arrayItem of myArray)	{
	console.log(arrayItem);
} 
/*output	>	
				Yanti
				Ahmad
				Badrun
				Khasib
*/

/*While and do-while
metode lain untuk melakukan looping dengan statement while
seperti for, instruksi while mengevaluasi ekspresi boolean dan menjalankan kode di dalam blok while ketika bernilai true

ingin menampilkan angka 1 - 100? dapat menggunakan dengan while untuk menulis kode seperti pada contoh sintaks berikut =
*/
let i = 1;

while	(i <= 100)	{
	console.log(i);
	i++;
}
//output	> 1 sampai 100 kebawah
/*pada contoh sintaks kode, dan hasilnya tidak memiliki ketergantungan dengan variabel iterasi seperti pada for loop
while lebih cocok untuk kasus dimana tidak tahu pasti berapa banyak perulangan yang diperlukan, walau while dapat melakukan perulangan yang sama dengan for*/
//berikut contoh sintaks kode lainnya dari do-while
let q = 1;

do	{
	console.log(q);
	q++;
}while	(q	<= 100);
//output	> 1 sampai 100 kebawah

/*infinite loops
ada suatu kondisi yang perlu dihindari yaitu infinite loop, ketika menerapkan perulangan pada program
hal tersebut adalah kondisi dimana program kita stucked di dalam perulangan
akan berjalan terus hingga menyebabkan crash pada aplikasi dan komputer kecuali ada intervasi secara eksternal, seperti mematikan aplikasi yang dibuat*/
//berikut contoh kode sintaksnya
//contoh while
let w = 1;
while (w <=5)	{
	console.log(w);
}
//output	> akan muncul nilai dari variabel w secara terus-menerus, kecuali kita menutup secara paksa untuk keluar
//contoh for
for(let f = 1; f <= 5; f=1)	{
	console.log(f);
}
//output	> akan muncul nilai dari variabel w secara terus-menerus, kecuali kita menutup secara paksa untuk keluar sama ajahhh.
//karena variabel selalu bernilai 1, maka kondisinya i<= akan selalu bernilai true, dan akan terus mencetak hasilnya hingga, konsol mengalami crash