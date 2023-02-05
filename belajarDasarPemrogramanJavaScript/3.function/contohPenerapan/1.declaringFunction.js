// penerapan fungsi
/*
    multiply(){         nama fungsi
        return 5*5;     kode yang akan dieksekusi
    }
*/

// gambaran struktur fungsi dengan parameter
/*
    multiply(a, b) {    nama fungsi, dan parameter
        return a*b;
    }
*/



// parameter dan argument
// parameter
/*
    function multiply(a,b) {
        return a*b;
    }
*/
// argument
// multiply(3,4);

// kita dapat memanggil dengan menuliskan nama fungsi diikuti tanda kurung dan memasukkan argumen di dalamnya(jika ada), setelah membuat fungsi.
/*
    function greeting() {
        console.log("Good Morning!")
    }

    greeting();

output  >   Good Morning
*/
// jika fungsi hanya menjalankan baris kode yang sama dirasa kurang fungsional, dan kita dapat membuat fungsi untuk menerima dan memanfaatkannya dan memanfaatkan parameter untuk mengubah perilaku dari fungsinya
// bisa menambahkan variabel dalam tanda kurung fungsi ketika hendak menambahkan parameter fungsi yang tidak perlu keyword var, let, ataupun const, dan bisa juga menambahkan lebih dari satu parameter dengan memberikan tadna koma antar variabel parameternya.
// fungsi greeting akan ditambahkan parameter name dan language
/*
    function greeting(name, language) {
        if (language === "English") {
            console.log(`Good Morning ${name}!`);
        } else if (language === "French") {
            console.log(`Bonjour ${name}!`);
        } else {
            console.log(`Selamat Pagi ${name}!`);
        }
    }
*/
// perlu mengirim dua nilai untuk argumen
/*
    function greeting(name, language) {
        if (language === "English") {
            console.log(`Good Morning ${name}!`);
        } else if (language === "French") {
            console.log(`Bonjour ${name}!`);
        } else {
            console.log(`Selamat Pagi ${name}!`);
        }
    }

    greeting("Harry", "French")

output  >   Bonjour Harry!
*/

// berikut adalah function yang melakukan perhitungan matematika dan hasilnya dapat dimasukkan ke dalam sebuah variabel
/*
function multiply(a, b) {
        return a * b;
    }

    let result = multiply(10, 2);
    console.log(result)

output  >   20
*/
// kita menggunakan keyword return untuk mengembalikan sebuah nilai


/*
    function greeting(name, language) {
        if (language === "English") {
            return `Good Morning ${name}!`
        } else if (language === "French") {
            return `Bonjour ${name}!`;
        } else {
            return `Selamat Pagi ${name}!`;
        }
    }

    let greetingMessage = greeting("Harry", "French");
    console.log(greetingMessage);

output  > Bonjour Harry!
*/
// statement return tereksekusi, maka fungsi akan langsung terhenti dan mengembalikan nilai



// expression function
// contoh penulisannya
/*
    const greeting = function (name, language) {
        if (language === "English") {
            return "Good Morning" + name + "!";
        } else if (language === "French") {
            return "Bonjour" + name + "!";
        } else {
            return "Selamat Pagi" + name + "!";
        }
    }

    console.log(greeting('Ron', 'English'));

output  >   Good MorningRon!
*/