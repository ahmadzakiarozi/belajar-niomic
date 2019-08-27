function panggilobject(){
/*mobil itu objek */ 
var mobil = {
    /*type, harga, warn itu objek */
    type: 'LUXURY',
    harga: 200000000,
    warna: 'hitam',
}
console.log (mobil)
console.log(mobil.type)
console.log(mobil.harga)
}
panggilobject();

/*ARRAY DALAM OBJEK */
function arrob(){
var contoh ={
    tahun: ['2001','2002','2003']
}
console.log (contoh.tahun[1])
}
arrob();
console.log (" ")
function tiba (){
    var makan ={
        waktu: 200,
        nama: "Restaurant Enak",
        tahun: [2000,2001,2002],
    }
    if (makan.waktu == 200){
        console.log (" NAMA RESTAURANT :", makan.nama);
    }
    
}
tiba();
console.log(" ");
/*MEMBUAT OBJECT PROPERTY */
function motor() {
    var motor ={
        jenis: "Motor Honda",
        type: 145,
        harga: 'Rp. 15.5000.00',
        barang: 'second',
        warna: 'Merah Abu Abu'
    }
    
    console.log (motor)
    console.log (motor.harga)
   /*Merubah OBJECT PROPERTY */
    motor.harga = 'Rp. 20.000.000'
    console.log ("Motor Update Baru", motor.harga);
    console.log ("TYPE LAMA ", motor.type)
    motor.type = 75;
    console.log ("TYPE BARU", motor.type)
}
motor();
console.log ();
/* MENAMBAHKAN OBJECT PROPERTY */
function tambahop(){
    var music = {
        nama: "ANGKLUNG",
        jenis: 19,
        harga: 150000,
        kondisi: 'Second'
    }
    music.nama_music_baru = "DRUM";
    console.log (music);
    console.log (music.nama_music_baru);
}
tambahop();

console.log (" ");

/*FUNCTION DALAM OBJEK(Memanggil function lain kedalam objek difunction utama) */
function sekolah(){
    var pengajar ={
        nama: "MUSTIKA RATU",
        umur: 25,
        jp: "Perempuan",
        status: "PENGAJAR",
        muridku: murid2(),
        siapa1: m3()
    }
    console.log("Berikut Nama Pengajar", pengajar.nama);
    console.log ("Identitas Murid Laki Laki Yaitu : ", pengajar.muridku);
    console.log( "Identitas Murid Perempuan Yaitu :", pengajar.siapa1);
}
function murid2(){
    var murid1 = {
        nama: "ALI AKBAR",
        umur: 10,
        jp: "Laki - Laki",
        status: "Murid"
    }
   return (murid1)
}
console.log(" ")

function m3 (){
    var muridaku = {
        nama: "Sulasmi",
        umur:9,
        jp: "Perempuan",
        status: "Murid"
    }
    return (muridaku)
}
sekolah();
console.log (" ")

/* NESTED OBJEK (OBJEK DALAM OBJEK) */
function mahasiswa (){
    var data ={
        nama: "AHMAD ZAKY ARROZI",
        umur: 22,
        ipk : {
            semester1: 3.74,
            semester2: 3.14,
            semester3: 3.45
        }
    }
    data.ipk.semester4 = 3.22;
    /*console.log (data.ipk.semester4)
    console.log (data.ipk.semester1)*/
    return (data)
} 
mahasiswa(); 
console.log(" ")
/*PERULANGAN FOR IN (DIGUNAKAN UNTUK MENENTUKAN OBJEK) */
function sekolah1 (){
    var mur ={
        name1: 'AHMAD ZAKY ARROZI',
        umur: 21,
        name2: mahasiswa()
    }
    for (var xi in mur){
        console.log ("BERIKUT NAMA MURID :", mur[xi])
    }
    console.log (typeof(mur))
    var xii = 15, hii='naruto';
    console.log (typeof(xii),typeof(hii))
}
sekolah1()
console.log(" ")
