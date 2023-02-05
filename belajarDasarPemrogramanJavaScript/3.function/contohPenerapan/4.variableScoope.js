// contoh scoping dalam kode
/*
    // gloabal variable, dapat diakses pada parent() dan child()
    const a = 'a';

    function parent() {
        // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut
        const b = 'b';

        function child() {
            // local variable, dapat diakses hanya pada fungsi child().
            const c = 'c';
        }
    }
*/

// harus berhati-hati dalam mendefinisikan variabel di dalam fungsi. Karena, kita bisa mendapatkan hasil yang tidak diperkirakan. contohnya seperti di bawah
/*
    function multiply(num) {
        total = num * num;
        return total;
    }

    let total = 9;
    let number = multiply(20);

    console.log(total)

output  >   400
*/
/*
bukan nilai total tetap 9, karena mengingat variabel total pada fungsi multiply seharusnya tidak akan berpengaruh pada kode di luar fungsi.bisa terjadi karena pada fungsi multiply() akan menetapkan variabel total sebagai cakupan lokal.tidak menggunakan keyword const atau let saat mendeklarasikan variabel total pada fungsi multiply() sehingga variabel  total menjadi global.
*/