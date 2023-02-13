// contoh kode yang mungkin ada contoh closurenya
/*
    function init() {
        var name = 'Obi Wan'; //variabel lokal di dalam scope fungsi init

        function greet() {   //inner function, merupakan contoh closure
            console.log(`Halo, ${name}`); //memanggil  variabel yang dideklarasikan di parent function
        }

        greet();
    }

    init();

output  >   Halo, Obi Wan
*/
/*fungsi  init() memiliki variabel lokal name dan fungsi greet(). Fungsi greet() adalah sebagai inner function yang didefinisikan  di dalam init() dan hanya bisa diakses di dalam funsgi init(). Perhatikan bahwa fungsi greet() tidak memiliki variabel lokal. Namun, karena inner function memiliki akses ke variabel di parent function-nya, jadi greet mengakses variabel  name. itulah yang dimaksud dengan lexical scope.*/
/*
    function init() {
        var name = 'Obi Wan';

        function greet() {
            console.log(`Halo, ${name}`);
        }

        return greet;
    }

    let myFunction = init();
    myFunction();

output  >    Halo, Obi Wan
*/
/* di kode tersebut, menghasilkan output sama seperti contoh kode pertama. perbedaannya fungsi greet() yang mengembalikan return() dari outer functionnya sebelum dieksekusi, variabel name berada di dalam scope init() yang akan hilang atau dihapus ketika fungsinya selesai dijalankan. Fungsi great yang diakses melalui fungsi MyFunction masih memiliki referensi atau akses ke variabel name. variabel di atas telah tertutup (closed covered) yang variabelnya berada di dalam closure.
*/

// contoh variabel untuk bisa menjadi private
/*
    let counter = 0;

    let add = () => {
        return ++counter;
    }

    console.log(add());
    console.log(add());
    counter = 23;
    console.log(add());

output >
    1
    2
    24
*/
/*nilai counter akan bertambah ketika memanggil fungsi add(), tapi bisa juga mengubah nilai counter secara langsung dengan assignment opertator.
tapi, sebaiknya dihindari pada contoh program yang lebih kompleks, karena perubahan langsung pada nilai counter bisa memunculkan bug */


// contoh program counter yang dibuat dengan closure
/*
    ``let add = () => {
        let counter = 0;
        return () => {
            return ++counter;
        };
    }

    let addCounter = add();

    console.log(addCounter());
    console.log(addCounter());
    console.log(addCounter());``

output  >
        1
        2
        3
*/
