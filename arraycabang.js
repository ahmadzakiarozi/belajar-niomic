function arraycabang(){
    var nama = [["ZAKI", "ZAKA", "ZAKIA"],
                ["RAHMA", "RAHIM", "FATIMA"],
                ["FATIH", "ZAHRULLAH", "RONY"]];
   console.log (nama.length);
   console.log (nama[0]);
   console.log (nama[0][2]);
   console.log (nama[1][2]);
   console.log (nama[2][0]);  
}
arraycabang();
console.log (" ")
/* LATIHAN NESTED ARRAY (ARRAY EBRCABANG) */
function latihan(){
var angka = [["SAYA", "MAU", "MAKAN"],
            ["KAMU", "MAKAN", "APA"],
            ["APAKAH", "KAMU", "MINUM"],
            ["SAYA", "TIDAK", "HAUS"]]
        console.log (angka[1][1], angka[3][1], angka[2][2]);
 
}
latihan();
console.log (" ")
/* ARRAY DALAM PERULANGAN */
function arrayloop(){
    var angka = [["SAYA", "MAU", "MAKAN"],
    ["KAMU", "MAKAN", "APA"],
    ["APAKAH", "KAMU", "MINUM"],
    ["SAYA", "TIDAK", "HAUS"]]
 for (var i=0; i< angka.length; i++){
     console.log (angka[i]);
 }   
}
arrayloop()
console.log (" ")
/* ARRAY PERULANGAN FO - OF 
( FOR - OF UNTUN=K MENGGANTI NILAI INDEKS) dimulai dari indeks 1*/
function forof(){
    var nilai = [[0,2,3,4,5], [6,7,8], [9,10,11,12]]
    for (var c of nilai){
        console.log(c.length);
        console.log (c)
       
    }
}
forof();
console.log (" ");
