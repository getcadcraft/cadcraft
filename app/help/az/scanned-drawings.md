---
title: Skan edilmiş çertyojlar və izləmə
summary: Skan edilmiş vərəqi daxil edin, miqyaslayın və düzləşdirin, təmizləyin, bir hissəsini silin, onun xətlərinə tutun və xətlər və qövslər şəklində izləyin.
keywords: skan, skan edilmiş çertyoj, rastr, tiff, jpeg, png, miqyas, hizalama, düzləşdirmə, nöqtələrin silinməsi, hədd, ağ-qara, kəsmə, silmə, izləmə, vektorlaşdırma, tutma, qövslər, ştrixlama, kağız çertyojlar, köhnə çertyojlar, scanattach, scantrace
from: 36227e5b
---

## Kağız vərəqdən çertyoj obyektlərinə

Skan edilmiş çertyoj şəkildir. CadCraft sizin verdiyiniz şəkli saxlayır və heç vaxt dəyişmir: hər təmizləmə addımı yeni şəkil yaradır, hər biri üçün bir geri alma addımı var, {{cmd:SCANINFO}} isə orijinal faylı və ondan sonra atılmış addımları sadalayır. Heç yerə göndərilmir və öyrədilmiş model ilə heç nə təxmin edilmir: təmizləmə və izləmə adi şəkil emalıdır və kompüterinizdə işləyir.

1. **Daxil edin.** {{cmd:SCANATTACH}} PNG, JPEG, TIFF (bir səhifə və ya çoxsəhifəli faylın bütün səhifələri) və ya şəkil olan PDF səhifəsini oxuyur. Səhifəni, sol-aşağı künci və eni soruşur. PDF səhifəsi üçün, səhifənin hansı piksel sıxlığı ilə çəkiləcəyini də soruşur.
2. **Miqyaslayın.** {{cmd:SCANSCALE}}: skanda iki nöqtə seçin, sonra aralarındakı həqiqi məsafəni yazın. Vərəq birinci nöqtə ətrafında miqyaslanır.
3. **Hizalayın.** {{cmd:SCANALIGN}}: skanda iki nöqtə və onların aid olduğu iki yer seçin; vərəq uyğunlaşmaq üçün köçür və dönür, və "Xeyr" cavabı verməsəniz miqyaslanır da.
4. **Bucaqları düzəldin.** {{cmd:SCANDESKEW}} vərəqin uzun xətlərinin yerləşdiyi bucağı ölçür və nə qədər əmin olduğunu göstərərək bildirir. Qəbul edin və ya öz bucağınızı yazın; vərəq fırladılır. Uzun xətləri az olan vərəq xəbərdarlıq alır: qəbul etməzdən əvvəl bucağı yoxlayın.
5. **Təmizləyin.** {{cmd:SCANCLEAN}} vərəqi ağ-qara edir (Avtomatik kağızı əvvəlcə bərabərləşdirir; Uyğunlaşan kağızın dəyişikliklərini daha yaxından izləyir; Səviyyə bütün vərəq üçün bir rəqəmdir) və təyin etdiyiniz ölçüyə qədər ləkələri silir.
6. **Kəsin və silin.** {{cmd:SCANCROP}} bir pəncərəni saxlayır. {{cmd:SCANERASE}} düzbucaqlını, çoxbucaqlını və ya lassonu (basıb sürükləyərək) silir: möhürləri, qeydləri, fincan ləkəsini.

Təmizlənmiş şəkil saxlanılan DWG-nin içindədir (IMAGE və onun IMAGEDEF-i, şəklin faylı çertyojun yanında, hər hansı şəkildə olduğu kimi).

## Skanın xətlərinə tutun

{{cmd:RASTERSNAP}} açıq olduqda (standart olaraq) obyekt tutmaları ağ-qara skanın xətlərini də tapır: xətlərin uclarını, orta nöqtələrini, künclərini və kəsişmələrini, adi tutma işarələri ilə. Göstəricinin altındakı vərəq hissəsi siz hərəkət etdirdikcə izlənir; bir piksel bir neçə ekran pikseli olacaq qədər yaxınlaşdırın. İzlənən hissədən uzun xətt onun uclarına qədər izlənir.

## İzləmə

{{cmd:SCANTRACE}} vərəqin xətlərini yeni qatda (SCAN-TRACE) xətlərə və qövslərə çevirir, bir geri alma addımı kimi, skan altlarında qalır. Təyin edirsiniz:

- **Tolerantlıq:** izlənən xətt və ya qövsün skandakı xətlərdən nə qədər uzaqda ola biləcəyi, çertyoj vahidlərində (hesabatda piksellər də verilir). Dar tolerantlıq hər əyriliyi izləyir; geniş tolerantlıq daha az, daha düz parçalar yaradır.
- **Pəncərə:** vərəqin bir küncü və ya bütün vərəq.
- **Qövslər:** söndürülüb: yalnız xətt yaradır.
- **Qalanlar:** izləmənin toxunmadığı hissələr, söndürülə bilən qatda qutular kimi çəkilir və ya heç çəkilmir.

İzləmə hər zolağın mərkəzini tapır, onu izləyir, düz xətləri və dairəvi qövsləri ona uyğunlaşdırır, başqa xəttin kəsdiyi yerdə kəsilmiş qaçışları birləşdirir, demək olar ki, üfüqi və demək olar ki, şaquli xətləri dəqiq üfüqi və şaquli edir və künclər bağlayır. **Mətn və ştrixlama rastr olaraq qalır:** yazı ölçüsündə parçalar kənara qoyulur, qısa paralel xətlərin dəstələri ştrixlama hesab edilir və kənara qoyulur.

İzləmə bitdikdə neçə xətt və qövs yaratdığını, tolerantlığı və neçə parçanı rastr olaraq buraxdığını bildirir. **Bu, piksellərin həmin tolerantlıqla verdiyi nəticədir və nəticənin düzgün olduğuna dair iddia deyil.** Vərəq ilə müqayisə edin: izləmə zəif xətti qaçıra, çox yaxın iki xətti birləşdirə və ya yalnız ləkə olan yerdə xətt çəkə bilər. Əvvəlcə skanı təmizləyin (düzləşdirilmiş, ağ-qara, ləkələr yox), nəticə xeyli yaxşı olacaq.

## Nəyi oxumur

Kafellərdə saxlanılmış TIFF fayllar, BigTIFF, JPEG və ya deflate sıxılması olan TIFF, Group 3 faks kodlaşdırması və ayrı təbəqələrdə saxlanılan rənglər mesajla rədd edilir; onları LZW, PackBits, Group 4 və ya sıxılmadan zolaqlar kimi yenidən saxlayın. Interlaced PNG fayllar da rədd edilir. 128 MB-dan və ya 100 milyon pikseldən böyük fayllar rədd edilir, izləmə pəncərəsi isə ən çox 64 milyon piksel tutur.
