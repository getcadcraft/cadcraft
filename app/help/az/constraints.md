---
title: Çertyoju məhdudlaşdırın
summary: Həndəsi və ölçü məhdudiyyətləri ilə xətləri üfüqi, uclarını birlikdə və ölçüləri sabit saxlayın; ölçünü dəyişdikdə çertyoj da ardınca dəyişsin.
keywords: məhdudiyyət, məhdudiyyətlər, parametrik, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, sərbəstlik dərəcələri, tam məhdudlaşdırılmış
from: f8f21fa4
---

## Nə yaradacaqsınız

Enini bir yerdən dəyişdirdiyiniz lövhə: tərəfləri düzbucaqlı qalır, bir künc öz yerində qalır, hündürlüyü həmişə eninin yarısı olur.

Məhdudiyyətlər {{ui:Model}} sekmesindəki xətlər, polixətlər, çevrələr, qövslər və nöqtələrlə işləyir. Əlavə etdiyiniz hər məhdudiyyət ayrıca bir geri qaytarma addımıdır.

## Konturu çəkin və məhdudlaşdırın

1. `REC` yazın və {{key:Enter}} basın. `0,0` yazın, {{key:Enter}} basın, `100,50` yazın, {{key:Enter}} basın.
2. `AUTOCONSTRAIN` yazın və {{key:Enter}} basın. `ALL` yazın, {{key:Enter}} basın, sonra yenidən {{key:Enter}} basın.

   Tarixçədə yazılır: "4 məhdudiyyət tətbiq edildi". Tərəflərin yanında **H** və **V** hərfli kiçik qutular görünür: bunlar məhdudiyyət zolaqlarıdır.
3. `GCFIX` yazın və {{key:Enter}} basın. Sol-aşağı künc yaxınlığında klikləyin. ⊕ işarəsi olan qutu görünür: həmin künc olduğu yerdə qalır.

`AUTOCONSTRAIN` uclar demək olar üst-üstə düşdükdə üst-üstə düşmə məhdudiyyətləri, xətlər demək olar üfüqi və ya şaquli olduqda isə üfüqi və ya şaquli məhdudiyyətlər əlavə edir. Nə qədər yaxın olduğunu dəyişmək üçün onun sorğusunda `S` yazın (başlanğıcda 0.05 çertyoj vahidi və 1°).

## Ölçüləri əlavə edin

1. `DCHORIZONTAL` yazın və {{key:Enter}} basın.
2. Sol-aşağı künc yaxınlığında, sonra sağ-aşağı künc yaxınlığında klikləyin.
3. Ölçü xətti üçün düzbucaqlının altında klikləyin.
4. Sorğuda `Dimension text <d1=100>` göstərilir. `width=120` yazın və {{key:Enter}} basın.

   Düzbucaqlının eni indi 120-dir və etiketdə `width=120` yazılır.
5. `DCVERTICAL` yazın və {{key:Enter}} basın, `O` yazın və {{key:Enter}} basın, sonra sağ tərəfə klikləyin.
6. Onun sağında klikləyin, `width/2` yazın və {{key:Enter}} basın.

   Hündürlük 60-dır. Etiketdə `fx: d1=width/2` yazılır: ölçünü ifadə idarə edir.

Tarixçədə indi kontur tam məhdudlaşdırılmış kimi yazılır. Ölçünü dəyişmək üçün `width`-i dəyişdirin (bax: [Parametrlərdən və tənliklərdən istifadə](topic:parameters)), ya da `width=120` etiketinə ikiqat klikləyin, yeni qiymət yazın və {{ui:Tətbiq et}} seçin.

## Məhdudlaşdırılmış obyektlərin yerini dəyişmək

Köçürmə, fırlatma, miqyaslama, tutacaqlar və Xassələr paneli bütün məhdudiyyətləri saxlayır: yerini dəyişdiyiniz obyekt sabit qalır, qalanları isə ardınca gedir. Məhdudiyyətlər ardınca gedə bilmədikdə redaktə edilmir və tarixçədə səbəb yazılır, məsələn: "Görülmədi: məhdudiyyətlər həmin obyekti olduğu yerdə saxlayır". Obyekti silmək onun məhdudiyyətlərini də silir.

## Məhdudlaşdırılmış obyektləri güzgüləyin və kəsin

- {{cmd:MIRROR}} güzgüləndirdiyiniz obyektlər arasındakı məhdudiyyətləri surətlərə köçürür. Tərəflər (toxunanın hansı tərəfdən toxunduğu, məsafənin hansı tərəfə ölçüldüyü) güzgü surəti üçün yenidən hesablanır və köçürülmüş ölçülər yapışdırmada olduğu kimi öz adlarını alır. `Erase source objects` `Y` olduqda məhdudiyyətlər güzgülənmiş obyektlərdə qalır. Tarixçədə neçəsinin köçürüldüyü yazılır.
- {{cmd:TRIM}} xəttin və ya qövsün məhdudiyyətlərini qalan hissədə saxlayır: ucdakı məhdudiyyət həmin ucu hələ də olan parçaya keçir, istiqamət qaydası ({{ui:Üfüqi}}, {{ui:Şaquli}}, {{ui:Paralel}}, {{ui:Perpendikulyar}}) bütün parçalarda qüvvədə qalır, iki kənar uc arasındakı ölçü onları ölçməyə davam edir. Kəsilib atılan hissəni saxlayan məhdudiyyətlər və ya kəsik nəticəsində dəyişən uzunluq ({{ui:Bərabər}}, qövsün bucağı) silinir. Kəsilmiş çevrə mərkəz və radius məhdudiyyətlərini saxlayır. Kəsilmiş polixətlər öz məhdudiyyətlərini itirir.

## Məhdudiyyətlər

| Komanda | Saxlayır |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | xətt və ya parça üfüqi və ya şaquli (`2P`: iki nöqtə üfüqi və ya şaquli) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | iki xətt paralel, perpendikulyar və ya bir xətt üzərində |
| {{cmd:GCCOINCIDENT}} | iki nöqtə üst-üstə; `O`: nöqtə xətt, çevrə və ya qövs üzərində |
| {{cmd:GCTANGENT}} | xətt və çevrə və ya qövs, ya da onlardan ikisi, toxunur |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | iki çevrə və ya qövs bir mərkəzdə; iki uzunluq və ya iki radius bərabər |
| {{cmd:GCSYMMETRIC}} | iki nöqtə, xətt və ya çevrə xəttin o tayında güzgü simmetrikdir |
| {{cmd:GCFIX}} | nöqtə (yaxınlığında klikləyin) və ya bütöv obyekt (`O`) olduğu yerdə |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | məsafə |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | radius, diametr, iki xətt arasındakı bucaq və ya qövsün bucağı |

{{cmd:GEOMCONSTRAINT}} və {{cmd:DIMCONSTRAINT}} hansının lazım olduğunu soruşur; {{ui:Parametrik}} qrupundakı {{ui:Məhdudlaşdır}} və {{ui:Ölçü}} onları işə salır, orada {{ui:Daha çox}} hər birini sadalayır. Klik etdiyiniz yer hissəni seçir: ucun yaxınlığında klikləmə, orta və ya mərkəz həmin nöqtəni götürür; polixəttə klik onun altındakı parçanı götürür. Birinci obyekt yerində qalır, ikincisi onunla birləşmək üçün hərəkət edir.

Digərləri ilə ziddiyyət təşkil edən və ya digərləri onu artıq nəzərdə tutduğu üçün heç nə əlavə etməyən məhdudiyyət mesajla rədd edilir və heç nə yerini dəyişmir.

## Görün, seçin və silin

- Məhdudiyyət zolağındakı qutuya (və ya üst-üstə düşmə kvadratına, ya da ölçü etiketinə) klikləyin ki, həmin məhdudiyyət seçilsin; tarixçədə adı yazılır. Silmək üçün {{key:Delete}} basın.
- {{cmd:DELCONSTRAINT}} seçdiyiniz obyektlərdən bütün məhdudiyyətləri silir.
- {{cmd:CONSTRAINTBAR}}: `S` bütün zolaqları göstərir, `H` onları gizlədir; onların göstərilməsi və ya gizlədilməsi üçün əvvəlcə obyektləri seçin. {{ui:Daha çox}} menyusunda {{ui:Məhdudiyyət zolaqlarını göstər}} və {{ui:Məhdudiyyət zolaqlarını gizlət}} var.
- {{cmd:DCDISPLAY}} ölçü məhdudiyyətlərini göstərir və ya gizlədir. Onlar heç vaxt çap olunmur.
- {{cmd:DCCONVERT}} xətlər, çevrələr və qövslər üzərində çəkilmiş ölçüləri ölçü məhdudiyyətlərinə çevirir.

:::note
Əgər AutoCAD-in parametrik çertyojundan istifadə etmisinizsə, komanda adları və sorğular eynidir. Məhdudiyyətlər və parametrlər DWG və DXF fayllarında digər proqramların nəzərə almadığı formada saxlanılır; bax: [Fayllar](topic:files#constraints-in-files).
:::
