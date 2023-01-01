/*statement if akhkan menguji suatu kondisi
jika bermilai true, maka blok kode di dalamnya akan dijalankan. sebaliknya, jika bernilai false maka prosesnya akan dilewatkan.
*/
// contoh kodenya
const sedangHujan = false;

console.log("Persiapan sebelum berangkat kegiatan.");
if (sedangHujan) {
    console.log("Hari ini hujan, bawa payung.");
}
console.log("Berangkat kegiatan.");
/*output    >
Persiapan sebelum berangkat kegiatanfk.
// jika nilai tertulis true, maka akan nampak juga "Hari ini hujan, bawa payung."
Berangkat kegiatan.
 */