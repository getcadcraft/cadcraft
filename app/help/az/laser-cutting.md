---
title: Çertyoju lazerə göndərin
summary: Lazer panelini açın, hər qatın nə etdiyini seçin (kəs, cızma, qravürləmə, doldurma, şəkil), başın hərəkətlərini önizləyin, GRBL lazer rejimi G-kodunu saxlayın və ya qrafik yoxlamadan sonra brauzerdən göndərin.
keywords: lazer, lazer kəsici, lazer qravürləyici, GRBL, G-kod, gcode, qravürləmə, doldurma, dither, şəkil qravürləmə, cızma, kəsmə, Web Serial, işi çərçivəyə alın, güc, sürət, keçidlər, LASER, LASERCUT, CNC
from: 72b56db0
---

{{ui:Lazer}} paneli çertyojun qatlarını GRBL işlədən lazer üçün proqrama çevirir (əksər həvəskar və kiçik emalatxana diod və CO2 nəzarətçiləri). `LASER` (və ya `LASERCUT`) yazın və {{key:Enter}} basın, ya da {{ui:Görünüş}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Lazer…}} seçin. Lent üslublarında o {{ui:Fayl}} menyusundadır və {{ui:Çap et}} düyməsinin yanındadır. Panel çertyojun üzərində açılır və siz çəkdikcə açıq qalır: önizləmə hər dəyişikliyi izləyir.

:::warning
Hər parametri əvvəlcə ehtiyat parçada sınayın, lazerə uyğun qoruyucu eynək taxın, varsa qapağı bağlı saxlayın və işləyən lazeri heç vaxt tək qoymayın. Qatın başladığı rəqəmlər yer tutucudur, hər hansı material üçün tövsiyə deyil.
:::

## Nə göndərilir

Panel modeli oxuyur (vərəqləri yox), yalnız açıq və donmamış qatlardakı obyektləri:

- Xətlər, qövslər, çevrələr, polixəttlər (qövs seqmentləri qövs olaraq qalır), ellipslər və splaynlar. Başladığı yerdə bitən fiqur bağlı sayılır.
- Bloklar açılır: blokun içində qat 0-da olan obyekt blok istinadının qatı ilə gedir.
- Ştrixlama öz sərhədini göndərir, buna görə **Doldurma** qatındakı ştrixlanmış loqo doldurulur.
- Şəkil (`IMAGEATTACH`) **Şəkli qravürlə** təyin olunmuş qatda qravürlənir, əgər düzbucaqlıdırsa (dönmüş və ya maili deyil) və onun faylı CadCraft-da açıqdırsa.
- Mətn, ölçülər, nişanlar (leaders), nöqtələr və köməkçi xətlər göndərilmir; panel neçəsinin buraxıldığını deyir. Mətni yandırmaq üçün hərfləri fiqur kimi çəkin və ya ştrixləyin.

Ölçülər çertyojun vahidlərindən (`UNITS`) millimetrlə gedir: düymlə çertyoj 25.4 ilə vurulur. Vahidləri təyin olunmamış çertyoj bir vahidi bir millimetr kimi göndərilir. Çertyojun bir hissəsini göndərmək üçün {{ui:Yalnız seçilmiş obyektlər}} qutusunu qeyd edin.

## Hər qatın nə etdiyini seçin

Hər tərkibi olan qat bir sətirdir. {{ui:Nə edir}} qatı **Kəs**, **Cızma**, **Xətləri qravürlə**, **Fiqurları doldur**, **Şəkli qravürlə** və ya **Göndərilmir** olaraq təyin edir, həmçinin {{ui:Güc %}}, {{ui:Sürət mm/dəq}} və {{ui:Keçidlər}} sayı ilə.

Hər dəyişiklik bir geri qaytarma addımıdır və çertyojda saxlanılır: CadCraft-ın saxladığı hər versiyada DWG və DXF parametrləri saxlayır, buna görə çertyoj növbəti dəfə onlarla açılır. Digər proqramlar faylı əvvəlki kimi açır; onlar istifadə olunmayan CADCRAFT_LASER adlı bir blok görür (orada təmizləmək parametrləri silir).

- **Doldurma** qapalı fiqurların içini {{ui:Sətirarası interval}} ilə, {{ui:Bucaq}} altında, iki istiqamətdə və ya birində xətlərlə yandırır; çarpaz ştrixləmə 90° bucaqda ikinci keçid əlavə edir. Lazer yandığı anda baş artıq sürətdə olsun deyə kənara çıxma ilə işləyir. Deşiyi olan fiqur deşikdə açıq qalır.
- **Şəkli qravürlə** şəkli nöqtələrə çevirir (Floyd–Steinberg, Atkinson, sıralı və ya hədd ilə sadə qara-ağ) və ya *Boz səviyyələr* ilə dəyişən güc olaraq.
- Sıra: əvvəl şəkillər və doldurmalar, sonra xətt qravürləmə, sonra cızmalar, sonra kəsiklər, belə ki kəsilmiş hissə qravürlənərkən yerindən tərpənməsin. Bir qatda yollar **daxildən-birinci** gedir (hər deşik onu əhatə edən lövhədən əvvəl), ən yaxın növbəti.

## Önizləyin, sonra saxlayın

Önizləmə başın nə etdiyini çəkir: yanan xətlər rəngdə, sürətli hərəkətlər boz rəngdə və hər yanan şeyin ətrafında yaşıl qutu. Altında ölçü, yanma uzunluğu və vaxt təxmini var (sürətlənmə olmadan; real maşın daha çox vaxt aparır). {{ui:G-kodu saxla…}} GRBL lazer rejimi G-kodunu yazır: `$32=1`, `S` dəyərləri ilə `M4` (və ya `M3`), `G0` və `G1` hərəkətləri, sonda `M5`. Çertyojun başlanğıcını seçməsəniz, X0 Y0 işin aşağı sol küncüdür: maşınınızın iş sıfırını orada təyin edin.

## Brauzerdən göndərin

Chrome və Edge-də {{ui:Qoşul…}} lazerin USB portunu seçməyinizi istəyir. Düymələrdən birinə basana qədər heç nə qoşulmur və göndərilmir. Əvvəlcə {{ui:İşi çərçivəyə al}} basın: baş işin qutusunu **söndürülmüş** lazerlə izləyir (və ya göstərici üçün təyin etdiyiniz aşağı gücdə), beləliklə harada yanacağını görəcəksiniz. Yalnız sonra {{ui:İşi göndər}} aktiv olur və bir şeyi dəyişsəniz, yenidən sönür. {{ui:Pauza}} başı saxlayır, {{ui:Dayandır}} onu da saxlayır, nəzarətçini sıfırlayır (lazer sönür) və `M5` göndərir. Web Serial olmayan yerdə (Firefox, Safari və Web Serial hələ olmayan CadCraft Studio) panel yalnız saxlamağı təklif edir: G-kodu saxlayın və lazerin öz proqramı ilə göndərin.

## Hələ hazırlanmayıb

Hələ hazırlanmayıb: digər nəzarətçilərin formatları (Ruida, Marlin lazerləri, satıcı faylları), tablar və giriş xətləri (lead-in), kerf ofseti, material kitabxanaları, fırlanan və Z oxları, kamera ilə hizalama, mətnin konturları.
