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


// tipe data bigInt
// terpakai jika menginginkan cakupan nilai yang lebih besar dari yang bisa dipakai biasanya.
// untuk projek kriptografi, menentukan waktu hingga presisi microsecond
const bigNumber = 23872489746223238n;
const myInt = 1215673517625n;

console.log(bigNumber);
console.log(myInt);
// akan tertuliskan hasil=
// 23872489746223238n
// 1215673517625n
// bigInt tetap bisa digunakan untuk nilai yang lebih kecil
const bigIntTapiKecil = 10n;

console.log(bigIntTapiKecil);
// hasil =
// 10n
// penerapan bigInt pada sistem Aritmatika
console.log(7n + 8n);
console.log(7n - 8n);
console.log(7n * 8n);
console.log(7n / 8n);
console.log(7n % 8n);
// hasil akan seperti terlihat pada tipe data di operasi aritmatika biasanya
// 15n
// -1n
// 56n
// 0n
// 7n

