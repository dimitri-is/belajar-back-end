/*contoh penulisan funstion parameter
dapat mendefinisikan inputan dari sebuah fungsi*/
/*
    function multply(a, b) {         <----- ini merupakan argument
        return a * b;
}*/

// contoh parameter dari fungsi adalah sebuah object,  yang bisa kita manfaatkan destructuring object untuk mendapatkan nilainya
/*
    const user = {
        id: 24,
        displayName: 'Kren',
        fullName: 'Kyo Ren',
    };

    function introduce({ displayName, fullName }) {
        console.log(`${displayName} is ${fullName}`);
    }

    introduce(user);

output  >   Kren is Kyo Ren
*/


// default parameters
// berikut contoh kode ketika argumen lebih sedikit dari parameternya
/*
    function exponentsFormula(baseNumber, exponent) {
        let result = baseNumber ** exponent;
        console.log(`${baseNumber}^${exponent} = ${result}`);
    }

    exponentsFormula(2);

output  >   2^undefined = NaN
/*
/*maka parameter yang tidak terdefinisikan akan bernilai undefined. sebagai solusi jika memungkinkan, kita bisa memberikan nilai default pada parameter, yang akan digunakan jika kita tidak memasukkan parameter*/
// berikut contoh keduanya
/*
    function exponentsFormula(baseNumber, exponent = 2) {
        let result = baseNumber ** exponent;
        console.log(`${baseNumber}^${exponent} = ${result}`);
    }

    exponentsFormula(3);

output > 3 ^ 2 = 9
*/


// rest parameter
// contoh fungsi yang menjumlahkan seluruh nilai argumen seperti berikut
/*
    function sum(...numbers) {
        let result = 0;
        for (let number of numbers) {
            result += number;
        }
        return result;
    }

    console.log(sum(1, 2, 3, 4, 5));

output  >   15
*/

