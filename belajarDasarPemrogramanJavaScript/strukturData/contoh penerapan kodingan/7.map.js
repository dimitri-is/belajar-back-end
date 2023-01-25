// berikut untuk mendefinisikan map dengan constructor
//  const myMap = new Map();
// kita dapat menetapkan nilai dari Map secara langsung menggunakan array multi dimensi seperti ini
/*
    const myMap = new Map([
        ['1', 'a string key'],
        [1, 'a number key'],
        [true, true]
    ]);

    console.log(myMap);

output  > Map(3) { '1' => 'a string key', 1 => 'a number key', true => true }
*/
// array pertama di luar dengan fungsi menyimpan masing-masing elemen atau pasangan key-value dari Map
// array di dalamnya, elemen pertama adalah key, dan elemen kedua velue
// kita dapat membuat objek ketika mendapatkan nilainya berdasar key tertentu dengan metode get(), dan untuk menambahkan key-valuenya baru menggunakan metode set()
/*
    const capital = new Map([
        ["Jakarta", "Indonesia"],
        ["London", "England"],
        ["Tokyo", "Japan"]
    ]);

    console.log(capital.size);
    console.log(capital.get("London"));
    capital.set("New Delhi", "India");
    console.log(capital.size);
    console.log(capital.get("New Delhi"));

output  >   3
            England
            4
            India
*/

// berikut cara yang tidak sesuai untuk mengoperasikan Map, karena ketika menetapkan nilai, data akan disimpan sebagai generic object, yang mengakibatkan data tidak tersimpan dalam Map querry, dan tidak bisa menggunakan fitur Map seperti .has atau .delete
/*
    const wrongMap = new Map();

    wrongMap["My Key"] = "My Value";
    console.log(wrongMap["My Key"]);

    output  >   My Value
*/

// kita harus tetap menggunakan metode .set() .get()
/*
    const wrongMap = new Map();
    wrongMap["My Key"] = "Key Value";

    console.log(wrongMap.has("My Key"));
    console.log(wrongMap.delete("My Key"));

output  >   false
            false
*/

