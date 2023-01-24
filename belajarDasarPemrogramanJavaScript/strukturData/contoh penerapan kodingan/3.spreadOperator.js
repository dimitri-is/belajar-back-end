// template penggunaannya secara umum
/*
    const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

    console.log(...favorites);

    output  >  Seafood Salad Nugget Soup
*/
// sama seperti kita melakukan pemanggilan secara manual satu-persatu
// console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// contoh penerapanya pada kedua array menjadi 1 baris hasil array baru
/*
    const kesukaanIrfan = ["Laptop", "Ngoding", "Game", 24];
    const kesukaanIman = ["Keguruan", "Keibuan", "Agama", 25];

    const allFavorites = [...kesukaanIrfan, ...kesukaanIman];

    console.log(allFavorites);

output >
[
    'Laptop',   'Ngoding',
    'Game',     24,
    'Keguruan', 'Keibuan',
    'Agama',    25
]
*/

// untuk pada object literals
/*
    const object1 = { namaAwal: `Obi-Wan`, umur: 24 };
    const object2 = { namaAkhir: `Ucul`, jenisK: `Pria` };

    const nowObject = { ...object1, ...object2 };

    console.log(nowObject);

output { namaAwal: 'Obi-Wan', umur: 24, namaAkhir: 'Ucul', jenisK: 'Pria' }
*/
// hasilnya menjadi seperti pada penggunaan di array, yaitu kedua objectnya menjadi 1 object kesatuan kode yang lebih ringkas.