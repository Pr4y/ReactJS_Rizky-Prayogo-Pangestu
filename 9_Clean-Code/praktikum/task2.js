// Task 2 Fixing Code


class Kendaraan {
    var totalRoda = 0;
    var kecepatanPerJam = 0;
}

class Mobil extends Kendaraan {
    void berjalan() {
        tambahKecepatan(10);
    }

    tambahKecepatan(kecepatanBaru) {
        kecepatanPerJam += kecepatanBaru;
    }
}

void main() {
    mobilCepat = new Mobil();
    mobilCepat.tambahKecepatan(30);
    mobilLamban = new Mobil();
    mobilLamban.berjalan();
}