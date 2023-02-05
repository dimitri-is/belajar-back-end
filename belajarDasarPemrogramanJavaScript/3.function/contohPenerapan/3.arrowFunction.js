// contoh regular function
/*
    function sayHello(greet){
        console.log(`${greet}`);
    }

    const sayName = function (name){
        console.log(`Nama saya ${name}`)
    }
*/

// contoh arrow function
/*
    const sayHello = (greet) =>{
        console.log(`${greet}!`)
    }

    const sayName = {name} => {
        console.log(`Nama saya ${name}`)
    }
*/

// tidak perlu menuliskan keyword function setiap fungsi, tetap menuliskan paremeter di dalam tanda kurung lalu diikuti dengan tanda panah ( => ) sebelum kurung kurawal.
/*contoh
    const sayName = (name) => {
        console.log(`Nama saya ${name}`)
    }
*/

// jika fungsi hanya memiliki satu parameter, maka bisa menghapuskan tanda kurung seperti berikut
/*
    const sayName = name => {
        console.log(`Nama saya ${name}`)
    }

    sayName("Laela");

output  >   Nama saya Laela
*/

// jika tidak memiliki parameter, maka tetap bisa menuliskan tanda kurung namun kosong seperti ini
/*
const sayHello = () => {
        console.log("Selamat pagi semuanya!")
    };

    sayHello();

output  >   Selamat pagi semuanya!
*/

// ketika body dari function hanya dari satu baris bisa menghapus tanda kurung kurawal, yang akan menghemat baris kode yang ditulis
/*
    const sayName = name => console.log(`Nama saya ${name}`);
    sayName("Laela");

    const sayHello = () => console.log("Selamat pagi semuanya!");
    sayHello();

output  >
            Nama Saya Laela
            Selamat pagi semuanya!
*/

// kita tidak perlu menulisakan lagi returnnya, karena bekerja untuk fungsi satu baris ketika sebuah fungsi perlu mengembalikan sebuah nilai.
/*
    const multiply = (a, b) => a * b;
    console.log(multiply(3, 4));

output  >   12
*/