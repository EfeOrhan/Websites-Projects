/* 1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklaynız.

    öğrenci 1:
        isim                : Efe Orhan
        doğum tarihi        : 2005
        matematik notları   : 70, 70, 80

    öğrenci 2:
        isim                : Ali Arı
        doğum tarihi        : 2005
        matematik notları.  : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değikende tutunuz.
    3- Öğrencilerinin ders ortalama notunu deişkende saklayınız
    4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değikende saklayınız

*/

var ogr1_ad = "Efe";
var ogr1_soyad = "Orhan";
var ogr1_dogumtarihi = 2005;
var ogr1_mat1 = 70;
var ogr1_mat2 = 70;
var ogr1_mat3 = 80;
var ogr1_yas = 2026 - ogr1_dogumtarihi;
var ogr1_ortalama = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;

console.log(ogr1_yas)
console.log(ogr1_ortalama)
console.log(ogr1_ortalama >= 50)

var ogr2_ad = "Ali";
var ogr2_soyad = "Arı";
var ogr2_dogumtarihi = 2005;
var ogr2_mat1 = 40;
var ogr2_mat2 = 40;
var ogr2_mat3 = 50;
var ogr2_yas = 2026 - ogr2_dogumtarihi;
var ogr2_ortalama = (ogr1_mat2 + ogr2_mat2 + ogr2_mat3) / 3;

console.log(ogr2_yas)
console.log(ogr2_ortalama)
console.log(ogr2_ortalama >= 50)

