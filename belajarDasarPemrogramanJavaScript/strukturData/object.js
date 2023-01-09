const user = {
    namaDepan: "Penceng",
    namaBelakang: "Saputra",
    umur: 21,
    "keinginan": "sukses"
};

console.log(`Perkenalkan, nama saya ${user.namaDepan} ${user.namaBelakang}`);
console.log(`cita-cita saya adalah ingin ${[user.keinginan]}`);
/*output    >
            Perkenalkan, nama saya Penceng Saputra
            cita-cita saya adalah ingin sukses
 */

const pengguna = {
    namaDepan: "Dimitri",
    namaBelakang: "I S",
    umur: 21,
    adalahJedi: true,
};

console.log(`Perkenalkan, nama saya ${pengguna.namaDepanamaBelakang} ${pengguna.namaBelakangnamaBelakang}`);
console.log(`Umur saya, ${[pengguna.umur]}`);
/*output    >
            Perkenalkan, nama saya undefined undefined
            Umur saya, 21
 */


// Memodifikasi sebuah object
// gunakan assignment utk mengubah nilai properti di dalam object 
const jurusanFatek = {
    kepanjangan: "Fakultas Teknik",
    jurusan1: "Teknik Sipil",
    jurusan2: "Teknik Pertambangan",
    jurusan3: "Teknik Perencanaan Wilayah, dan Kota",
    jumlahMahasiswa: 1000,
    "lambang fatek": "hijau muda",
};

jurusanFatek.cewekCantik = "Ratih Susanti";
jurusanFatek.jumlahMahasiswa["PalingBanyak"] = 1000;
console.log(jurusanFatek);
// Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variabel dari object.


