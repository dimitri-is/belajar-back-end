// fungsi operator adalah symbol yang memberitahu interpreter melakukan operasi aritmatika, relasi bahkan logika guna memberikan hasil tertentu
// assigment operator
// digunakan memberikan nilai variabel
// tanda (=) operatornya yang digunakan untuk menginisialisasi nilai pada variabel
// variabel yang ingin diberi nilai berada di sebelah kiri, di kanan merupakan nilainya, dan diantaranya merupakan operator assigment sendiri
let y = "2";
x = y;
console.log(x);
// output > 2
// nah berikut merupakan contohnya yang diartikan kita menginisiasikan nilai y pada variabel x, dan sekarang nilai x memiliki nilai yang sama dengan y
// contoh penerapan lainnya
let x = 10;
let y = 5;

x += y;

console.log(x);
// output > 15
// penerapan expression seperti pada contoh shortcut di aitmatika ke operator assigment lainnya


// comparison operator
// operator untuk membuat logika perbandingan pada suatu nilai
// dalam penggunaannya, kita harus menggunakan karakter khusus, seperti
// (==) > membandingkan kedua nilai apakah sama(tidak identik)
// (!=) > membandingkan kedua nilai apakah tidak sama (tidak identik)
// (===) > membandingkan kedua nilai apakah identik
// (!==) > membandingkan kedua nilai apakah tidak identik
// (>) > membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua
// (>=) > membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua
// (<) > membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua
// (<=) > membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);
// output > true
//          false
// perbedaan antara "sama"(==) dan "identik"(===)
const aString = '10';
const aNumber = 10;

console.log(aString == aNumber);
console.log(aString === aNumber);
// output > true
//          false


// logical operator 
// untuk penetapan logika yang lebih kompleks, kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika
// berikut karakter yang dapat digunakan pada logical operator yang lebih kompleks
// (&&) > operator dan (and), logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true)
// (||) > operator atau (or), logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true)
// (!) > operator tidak (not), digunakan untuk membailkkan suatu kondisi
// contoh penerapannya
let a = 10;
let b = 12;

// and operator
console.log(a < 15 && b > 10); // (true && true) > true
console.log(a > 15 && b > 10); // (false && true) > false

// or operator
console.log(a < 15 || b > 10); // (true || true) > true
console.log(a > 15 || b > 10); // (false || true) > true

// not operator
console.log(!(a < 15)); // !(true) > false
console.log(!(a < 15 && b > 10)); // !(true && true) > !(true) > false
// boolean merupakan salah satu kunci logika yang kita buat seperti pada contoh tersebut