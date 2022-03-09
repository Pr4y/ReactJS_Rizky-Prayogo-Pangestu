// Jawaban Soal No.2 Sampai 6

// 2A. Jelaskan kenapa baris 21-23 tidak dapat tampil
// Karena value pada variabel terdaftar sebelumnya adalah 'false'
// Sedangkan pada baris 21 dilakukan pengecekan jika variabel 'terdaftar' memiliki nilai 'true'
// Jadi harus mengubah value terdaftar baris k3 4 menjadi true

// 2B. Jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
// Karena variabel nama sebelumnya memiliki tipe 'const'
// Dimana tipe 'const' memiliki sifat tidak dapat mengubah ulang value dari variabel

// 2C. Dengan melakukan komen pada baris ke-26, apakah baris 28 dapat dieksekusi?
// Tidak, dalam scoping javascript, variabel asal merupakan variabel lokal dan tidak bisa dipanggil di Global

// No. 3 lakukanlah descruturing pada kode di task 
console.log("Jawaban Soal Nomor 3");
const foo = ['Budi', 'Sita', 'Ayu'];
const [a, b, c] = foo;

console.log(`
a = ${a},
b = ${b},
c = ${c},
`);

// No. 4 
console.log("Jawaban Soal No.4");
let bdays = ['10-17', '05-19', '20-19'];
bdays = bdays.map(x =>{
    return x = x.replace('-',"/")
})
console.log(bdays);

// No. 5 
console.log("Jawaban Soal No.5");
let value = [1, 2, 3, 4, 5, 6];
value = value.map(x => x * 2);

console.log(value);

// no.6
console.log("Jawaban Soal No.6");
let arr = [1.5, 2.56, 5.1, 12.33];
arr = arr.map(x => Math.round(x));

console.log(arr);

