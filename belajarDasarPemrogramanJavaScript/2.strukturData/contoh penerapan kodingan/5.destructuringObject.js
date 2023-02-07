// contoh penerapan dasar destructuring object menggunakan object iteral({})
/*
    const profile = {
        firstName: "John",
        lastName: "Silit",
        age: 24
    }

    const { firstName, lastName, age } = profile;

    console.log(firstName, lastName, age);

output > John Silit 24
*/
/*{} mempresentasikan object yang akan didestrukturisasi, yang terdapat beberapa variabel untuk menyimpan nilai properti dari object profile.
perlu diperhattkan juga penamaan variabel, harus sama seperti properti object, agar nilai-nilai akan dimasukkan secara otomatis.
sehingga, object.variable akan berisikan hasil nilai dari variable di dalam object tersebut
*/
// kita dapat menentukan salah satu nilai yang ingin kita destrukturisasi, agar tidak perlu membuat banyak variabel yang dimiliki objek seperti contoh berikut
// const {lastName} = profile;


// destructuring assignment
// contoh kasus destructuring object pada deklarasi variabel yang sudah dideklarasikan
/*
    const profile = {
        firstName: "John",
        lastName: "Talep",
        age: 46
    }

    let firstName = "Dimas";
    let age = 13;

    ({ firstName, age } = profile); //fungsi tanda kurung, akan memberi tahu JavaScript bahwa tanda kurawal di dalamnya bukan sebuah block statement melainkan sebuah expression, sehingga assignment dapat dilakukan.

    console.log(firstName);
    console.log(age);
    // jika kita tidak menuliskan destructuring object di dalam tanda kurung, maka tanda kurung kurawal akan membuat JS mengira kita membuat block statement(sementara tidak bisa berada pada sisi kiri assignment)

output > John
         46
*/

// default values
// nilai dari variabel menjadi undefined, ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek.
/*
    const profile = {
        firstName: "Cicing",
        lastName: "Lalang",
        age: 25
    }


    const { firstName, lastName, age, isMale } = profile;

    console.log(firstName);
    console.log(age);
    console.log(isMale); //outputnya akan mendapatkan hasil undefined, karena merupakan variable kosong
*/
// alternatifnya bisa mendefinisikan nilai default pada properti tertentu jika tidak ditemukan. Untuk melakukannya, bisa menambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai defaultnya. berikut contohnya const {firstName, age, isMale = false} = profile; maka hasilnya akan tersedia false


// assigning to different local variable names
// sebenarnya dalam proses destrukturisasi object kita dapat menggunakan penamaan variabel lokal yang berbeda.
// ES6 menyediakan sintaksis tambahan membuat dapat melakukannya
/*
const profile = {
    firstName: "Liu",
    lastName: "Kang",
    age: 76
}

const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

output > Liu
         Kang
         76
*/