// undefined
// variabel yang tidak memiliki nilai
//contoh pertama 
let x;
console.log(x);
// maka akan muncul hasil=
// undefined

// contoh kedua jika ditambahkan fungsi typeof() akan menghasilkan output undefined yang lebih jelas
let a;
console.log(typeof (a));
// maka hasilnya akan keluar juga=
// tulisan undefinel yang lebih jelas

// numbers
// tipe data angka, yang dituliskan dengan angka seperti pada umumnya
let o = 10;
console.log(typeof (o));
let y = 12.08;
console.log(typeof (y));
// akan memberikan hasil =
// number
// number

// pembuatan contoh hitungan aritmatika, dan juga penggunaan tiap-tiap operatornya
let n = 15;
let m = 3;

console.log(n + m);
console.log(n - m);
console.log(n * m);
console.log(n / m);
console.log(n % m);
console.log(n ** m);
// akan menghasilkan =
// 18 hasil penjumlahan
// 12 hasil pengurangan
// 45 hasil perkalian
// 5 hasil pembagian
// 0 hasil dari sisa hasil bagi
// 3375 hasil perpangkatan

// terdapat juga operator increment(++), dan decrement(--) di aitmatika.
// berfungsi menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada.
let aitmatika = 10;
console.log(--aitmatika);
console.log(--aitmatika);
console.log(++aitmatika);
console.log(aitmatika++);
// maka akan memberikan hasil increment, dan decrement seperti berikut=
// 9
// 8
// 9
// 9
