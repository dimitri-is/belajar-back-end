// contoh kode dan perbedaan Map dan WeakMap
/*
    let visitsCountMap = new Map(); //menyimpan user

    function countUser(user) {
        let count = visitsCountMap.get(user) || 0;
        visitsCountMap.set(user, count + 1);
    }

    let jonas = { name: "Jonas" };
    countUser(jonas);   //menambahkan user "jonas"

    jonas = null        //data object "jonas" dihapus

    //delay dibutuhkan untuk menunggu garbage collector bekerja
    setTimeout(function () {
        console.log(visitsCountMap);
    }, 10000)

output  >   Map(1) { { name: 'Jonas' } => 1 }
*/
// setTimesout untuk menunda eksekusi kode yang ada di dalamnya hingga angka waktu yang ditetapkan.
// ketika reference objek jonas dihapus dengan mengubahnya menjadi null, map tidak lagi menyimpan data user (garbage collected) seharusnya.
// data jonas masih tersimpan ke memori sampai kita benar-benar menghapusnya ketika masih tersedia di dalam Map.


// penerapan weakmap yang lain
// let visitsCountMap = new WeakMap();
// yang artinya nilai jonas sudah tidak dijangkau objek, akan dihapus dari memori termasuk informasi yang disimpan di dalam WeakMap.
/*
    const { inspect } = require('util');

    let visitsCountMap = new WeakMap(); // Menyimpan daftar user

    function countUser(user) {
        let count = visitsCountMap.get(user) || 0;
        visitsCountMap.set(user, count + 1);
    }

    let jonas = { name: "Jonas" };
    countUser(jonas);                // Menambahkan user "Jonas"

    jonas = null;                    // Data object "Jonas" dihapus

    // delay dibutuhkan untuk menunggu garbage collector bekerja
    setTimeout(function () {
        console.log(inspect(visitsCountMap, { showHidden: true }));
    }, 10000);

output  >   WeakMap { { name: 'Jonas' } => 1 }
*/
// weakMap tidak dapat dilihat langsung menggunakan console.log, yang merupakan issue pada nodejs supaya menggunakan fungsi inspect agar dapat melihat data yang ada di dalam weakmap
// hasil output sesuai bisa dilihat dari kode, yang disebabkan oleh waktu tunggu yang tidak cukup menunjukkan cara kerja garbage collector.