// contoh deklarasi set()
/*
    const numberSet = new Set([1, 4, 6, 4, 1]);

    console.log(numberSet);

output  >   Set(3) { 1, 4, 6 }
*/
// angka yang duplikat  secara otomatis akan terbuang, dan akan tercetak salah satu

// untuk menambahkan data kedalam set bisa memanfaatkan funsgi add()
/*
    const numberSet = new Set([1, 5, 7, 5, 1]);

    numberSet.add(4);
    numberSet.add(6);
    numberSet.add(8);

    console.log(numberSet);

output  >   Set(6) { 1, 5, 7, 4, 6, 8 }
*/
// fungsi tersebut menerima argumen, nilai yang dianggap duplikat tetap terabaikan, kita memasukkan array maka akan dianggap satu elemen
/*
    const numberSet = new Set([1, 4, 6, 4, 1]);
    numberSet.add(5);
    numberSet.add(10);
    numberSet.add(8);

    numberSet.delete(4);

    console.log(numberSet);

output  >   { 1, 6, 5, 10, 8 }
*/
// Set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.