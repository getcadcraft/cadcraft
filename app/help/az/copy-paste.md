---
title: Kopyalama, yapışdırma və dublikat
summary: Obyektləri CadCraft-ın buferinə kopyalayın, klik etdiyiniz yerə və ya yerində yapışdırın, göstərici ilə dublikat yaradın və işi başqa çertyojdan və ya sekmədən gətirin.
keywords: kopyala, kəs, yapışdır, yerində yapışdır, dublikat, bufer, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, çertyojlar arasında, başqa sekmə, baza nöqtəsi
from: 4b9f29d3
---

## Nə öyrənəcəksiniz

Obyektləri buferə necə kopyalamaq və klik etdiyiniz yerə yapışdırmaq, öz koordinatlarında yapışdırmaq, göstəricinin köməyi ilə dublikat etmək, kəsmək və başqa çertyoja daşımaq. Buradakı hər şey alətlər panelinin {{ui:Redaktə}} qrupunda da var: {{ui:Kopyala}}, {{ui:Yapışdır}} və {{ui:Daha çox}} menyusu.

## Klik etdiyiniz yerə kopyalayın və yapışdırın

1. Obyektləri seçin: onlara klikləyin və ya pəncərə çəkin.
2. {{key:Mod+C}} basın və ya {{ui:Redaktə}} qrupunda {{ui:Kopyala}} klikləyin. Komanda sətrində neçə obyektin kopyalandığı yazılır. Onlar seçili qalır.
3. {{key:Mod+V}} basın və ya {{ui:Yapışdır}} klikləyin. Surət göstəricidə görünür, kopyalanmış obyektlərin sol-aşağı küncündən asılı olaraq.
4. Həmin küncün gedəcəyi yerə klikləyin, ya da `2000,500` kimi nöqtə yazın və {{key:Enter}} basın. Obyekt tutmaları və Ortoqonal adi kimi işləyir.

Yapışdırılmış obyektlər seçili olur, ona görə onları dərhal köçürə və ya dəyişə bilərsiniz. Bir {{key:Mod+Z}} bütün yapışdırmanı geri qaytarır.

:::tip
Surətin divar küncü kimi seçdiyiniz nöqtədən asılmasını istəyirsiniz? `COPYBASE` yazın, baza nöqtəsinə klikləyin, obyektləri seçin və {{key:Enter}} basın. Sonra yapışdırma həmin nöqtəni klik etdiyiniz yerə qoyur. Hər surəti sol-aşağı küncü əvəzinə mərkəzindən asmaq üçün [CadCraft parametrləri](topic:settings) bölməsində {{ui:Yapışdırma nöqtəsi}} dəyişdirin.
:::

## Yerində yapışdırın

{{key:Mod+Shift+V}} basın və ya {{ui:Daha çox}} menyusunda {{ui:Yerində yapışdır}} seçin. Surət kopyalandığı koordinatların eynilə, klik etmədən yerləşir. Obyektləri başqa çertyoja eyni yerə və ya bir vərəqdən başqa vərəqə daşımaq üçün istifadə edin.

## Dublikat edin və köçürün

1. Obyektləri seçin.
2. {{key:Mod+D}} basın və ya {{ui:Daha çox}} menyusunda {{ui:Dublikat et və köçür}} seçin.
3. Surət orijinalın üstündə olur və göstəricilə birlikdə hərəkət edir. Onun gedəcəyi yerə klikləyin. Həmçinin `@0,-600` kimi yerdəyişmə və ya göstəriciyə doğru məsafə yaza bilərsiniz.

Klikdən əvvəl {{key:Esc}} basılsa, heç nə qalmır. Dublikat bir geri qaytarma addımıdır və buferə toxunmur.

## Kəsin

{{key:Mod+X}} basın və ya {{ui:Daha çox}} menyusunda {{ui:Kəs}} seçin. Obyektlər buferə düşür və bir geri qaytarma addımında çertyojdan silinir. Onları {{key:Mod+V}} və ya {{key:Mod+Shift+V}} ilə geri yapışdırın.

## Çertyojlar və sekmələr arasında

Başqa çertyoj açdıqda bufer öz surətini saxlayır və bu brauzerdə bütün CadCraft sekmələri onu paylaşır. Bir sekmədə kopyalayın, sonra başqasında {{key:Mod+V}} basın.

- Obyektlərin istifadə etdiyi bloklar onlarla birlikdə gəlir. Yapışdırdığınız çertyojda eyni adlı blok artıq varsa, AutoCAD-də olduğu kimi, onun öz tərifi istifadə olunur.
- Obyektlərin istifadə etdiyi qatlar əlavə olunur, öz rəngi və parametrləri ilə.
- İki çertyoj müxtəlif vahidlər istifadə etdikdə surət yenidən miqyaslanmır: CadCraft bunu bildirir və sonradan {{cmd:SCALE}} istifadə edə bilərsiniz.
- Görünüş pəncərələri öz vərəqində qalır; surətdə onlar nəzərə alınmır.

:::note
Bufer CadCraft-ın öz buferidir. CadCraft obyektlərini başqa proqrama yapışdıra, ya da başqa proqramdan CadCraft-a yapışdıra bilməzsiniz: onun əvəzinə DWG və ya DXF kimi saxlayın. Çox böyük surət sekmələr arasında paylaşmaq üçün çox böyük ola bilər; onda komanda sətrində yalnız bu sekmənin onu yapışdıra biləcəyi yazılır.
:::

## Ümumi səhvlər

- **{{key:Mod+V}} komanda sətrinə mətn yapışdırdı.** Orada nəsə yazmışdınız, ona görə düymələr mətnə təsir etdi. Onu təmizləmək üçün {{key:Esc}} basın, sonra yenidən {{key:Mod+V}} basın.
- **Heç nə olmadı və status sətri cari komandanı bitirməyi tələb edir.** Başqa komanda işləyir. Əvvəlcə {{key:Esc}} basın.
- **Yapışdırma çox uzağa düşdü.** O, kopyaladığınızın sol-aşağı küncündən asılır, bu isə təsadüfən seçdiyiniz uzaq obyekt ola bilər. Yerində yapışdırın və ya `COPYBASE` ilə kopyalayın.
- **Səbəbi ilə "Heç nə yapışdırılmadı".** Başqa sekmənin buferdə qoyduğu məlumat oxuna bilmədi (zədələnmişdi və ya əl ilə dəyişdirilmişdi). Obyektləri yenidən kopyalayın.

Düymələrin tam siyahısı üçün bax: [Klaviatura və siçan](topic:keyboard), hər sorğu üçün isə [Komanda arayışı](topic:commands#clipboard).
