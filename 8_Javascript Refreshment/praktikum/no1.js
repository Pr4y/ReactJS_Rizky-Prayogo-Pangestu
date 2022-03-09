var a = 5;
let b = "kampus merdeka";
let nama = "Budi"; // (1)
let terdaftar = true; // (2)
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        lengkap_arr[2] + // (3)
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        "berasal dari " +
        asal
    );
}

if (terdaftar === true) {
    console.log(nama +" terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
nama = b;

// console.log("asal diakses =" + asal); // (3)
console.log("a adalah = " + a);
console.log("b adalah = " + b);

// 1a. Ambillah index ke-2 dalam array di abris 5 dan tampilkan dalam console
console.log("Array = " + lengkap_arr[2]);

// 1b. Ubahlah kode diatas sehingga menampilkan baris 22 dalam console
// Mengubah value pada variabel terdaftar pada baris 4 menjadi true

// 1c. lakukan pemanggilan function perkenalan
perkenalan()

// 1d. Ubahlah kode sehingga menampilkan output sesuai task
// Melakukan perubahan sebagai berikut
// (1) mengubah const menjadi let
// (2) Mengubah value pada variabel terdaftar pada baris 4 menjadi true
// (3) Menonaktifkan baris 28

 