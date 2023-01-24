// format data yang sering terpakai pada JSON(Javascript Object Notation)
/*
    {
        {
            "id": 14,
                "title": "Belajar Fundamental JSON",
                    "author": "Penceng Koding"
        },
        {
            "id": 42,
                "title": "Belajar Fundamental JavaScript Pemula",
                    "author": "Penceng Koding"
        }
    }
*/
// struktur tersebut dibangun kebanyakan dari array dan object, untuk mengelola data pada JS yang memudahkan developer. Dan di dalamnya terdapat fitur destructuring object dan array.

// berikut contoh penerapan destructuring yang merupakan sintaksis untuk mengeluarkan nilai array atau properties dari sebuah object ke dalam satuan yang lebih kecil.
// berikut cara penerapannya:
/*
    const profile = {
        firstName: "John",
        lastName: "Jedul",
        age: 14
    }

    const firstName = profile.firstName
    const lastName = profile.lastName
    const age = profile.age

    console.log(firstName, lastName, age);

output > John Jedul 14
*/
// dalam penerapan tersebut, kode terekstraksi ke nilai yang berada di dalam objek, kemudian menyimpannya pada variabel lokal dengan nama-nama sama dengan properti dalam object profile.
// kita tidak boleh menggunakan cara ini, ketika memiliki banyak objek walapupun terlihat mudah, karena akan banyak kode yang tertulis secara ulang.
