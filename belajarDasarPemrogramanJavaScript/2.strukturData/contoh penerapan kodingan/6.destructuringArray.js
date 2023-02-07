// contoh penerapan destructuring array pada ES6
/*
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

    const [firstFood, secondFood, thirthFood, fourthFood] = favorites;

    console.log(firstFood);
    console.log(secondFood);
    console.log(thirthFood);
    console.log(fourthFood);

output  > Seafood
          Salad
          Nugget
          Soup
*/
// kita bebas menentukan nama variabel lokal, yang penting adalah urutan ketika deklarasi variabelnya saja.

// kita bisa memilih nilai pada index tertentu untuk destrukturisasi pada array.
// jika kita mengambil nilai pada array, tidak perlu menyiapkan variabel lokal guna menampung nilai arrY lainnya. kita bisa membiarkan indeks array yang kita inginkan tetap kosong dengan tanpa menulis variabel lokal, dan tanda koma tetap diperlukan
/*
    const favorites = ["Seafood", "Salad", "Rujak", "Gulai"];

    const [, , thirdFood] = favorites;

    console.log(thirdFood);

output  >   Rujak
*/

// Destructuring Assignment
// tidak seperti object, kita perlu membungkusnya dengan tanda kurung
// sangat berguna untuk mengubah kedua nilai pada ES6 saat ini, dan berikut contoh penerapan kodenya
/*
    const favorites = ["Latto-latto", "Mobile Legends", "Free Fire", "Soto Makassar"];

    let myFood = "Ice Cream";
    let herFood = "Gudeg Jogja";

    [myFood, herFood] = favorites;

    console.log(myFood);
    console.log(herFood);

output > Latto-latto
         Mobile Legends
*/


// dan ini penerapan kode sebelum adanya ES6 untuk destructuring assignment arraynya menggunakan algoritma shorting berikut
/*
    var a = 1;
    var b = 2;
    var temp;

    console.log("Sebelum swap");
    console.log("Nilai a: " + a);
    console.log("Nilai b: " + b);

    temp = a;
    a = b;
    b = temp;

    console.log("Setelah swap");
    console.log("Nilai a: " + a);
    console.log("Nilai b: " + b);

output > Sebelum swap
          Nilai a: 1
          Nilai b: 2
          Setelah swap
          Nilai a: 2
          Nilai b: 1
*/
// variabel temp merupakan variabel penengah untuk menyimpan data sementara pada variabel yang ditukar, yang menjadi kurang efektif karena harus membuat variabel baru yang bersifat sementara

// berikut contoh pada ES6 yang tanpa variabel sementara atau tambahan
/*
    let a = 1;
    let b = 2;

    console.log("Sebelum Swap");
    console.log("Nilai a: " + a);
    console.log("Nilai b: " + b);

    [a, b] = [b, a]

    console.log("Setelah Swap");
    console.log("Nilai a: " + a);
    console.log("Nilai b: " + b);

output > Sebelum Swap
         Nilai a: 1
         Nilai b: 2
         Setelah Swap
         Nilai a: 2
         Nilai b: 1
*/

// default values
// variabel bersifat undefined ketika melakukan destructuring array masih terdapat variabel dengan posisi tidak dapat dijangkau oleh array.
/*
    const favorites = ["Seafood"];
    const [myFood, herFood] = favorites

    console.log(myFood);
    console.log(herFood);

output  > Seafood
          undefined
*/
// seperti object, agar nilai variabel tidak undefined kita dapat memberikan nilai default pada variebl yang tidak terjangkau oleh array
/*
    const favorites = ["Seafood"];

    const [myFood, herFood = "Salad"] = favorites

    console.log(myFood);
    console.log(herFood);

output  > Seafood
          Salad
*/
