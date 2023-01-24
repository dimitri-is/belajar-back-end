// contoh penerapan umum
/*
let myArray = ["Cokelat", 42.2, 22, true, "Programming"];
console.log(myArray);
*/

// kurung siku untuk mengakses sebuah nilai yang berisi angka untuk diakses
// console.log(myArray[1]);
// indeks dimulai dari 0, sehingga ketika kita memanggil nilai 1, makan yang keluar pada perintah console.log nilai dalam urutan yang kedua.

// bagaimana jika kita ingin mengakses indeks pada ukuran terluarnya? Maka hasilnya akan undefined
/*
    let myArray = ["Kost", 550, 600, false, "Umi"];
    console.log(myArray[0]);
    console.log(myArray[1]);
    console.log(myArray[2]);
    console.log(myArray[3]);
    console.log(myArray[4]);
    console.log(myArray[5]);
    console.log("Panjang nilai myArray adalah " + myArray + ".");
output  Kost
        550
        600
        false
        Umi
        undefined
        Panjang nilai myArray adalah Kost,550,600,false,Umi.
*/

// metode push()
/*
    const myArray = ["Cokelat", 43.4, 12, false, "Latihan"];

    myArray.push(`JavaScript`);
    console.log(myArray);

output  [ 'Cokelat', 43.4, 12, false, 'Latihan', 'JavaScript' ]
*/

// metode pop()
/*
    const myArray = ["Cokelat", 12, 34.2, false, "Metode Pop"];

    myArray.pop();
    console.log(myArray);

output      [ 'Cokelat', 12, 34.2, false ]
*/

// metode shift(), unshift()
/*
    const myArray = ["Cokelat", 12.4, 12, true, "Playboy"];

    myArray.shift();
    myArray.unshift("Apple");

    console.log(myArray);

output
    shift() >  [ 12.4, 12, true, 'Playboy' ]
    unshift() > [ 'Apple', 'Cokelat', 12.4, 12, true, 'Playboy' ]
*/

// menggunakan keyword delete
/*
    const myArray = ["Cokelat", 12.4, 12, true, "Playboy"];

    delete myArray[1];
    console.log(myArray);

output [ 'Cokelat', <1 empty item>, 12, true, 'Playboy' ]
*/

// menghapus menggunakan metode splice()
/*
    const myArray = ["Cokelat", 12.4, 12, true, "Playboy"];

    myArray.splice(2, 1);
    console.log(myArray);

output [ 'Cokelat', 12.4, true, 'Playboy' ]
keterangan = mengahpus indeks 2 sebanyak 1 elemen
*/
