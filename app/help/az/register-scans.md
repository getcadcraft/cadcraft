---
title: Bir neçə skanı bir yerə qeydiyyatdan keçirmək
summary: Müxtəlif mövqelərdən alınmış skanları seçilmiş nöqtə cütləri və ya yazılmış hədəflər ilə bir çərçivəyə yerləşdirin, ICP ilə dəqiqləşdirin, qeydiyyatı layihə kimi saxlayın və qeydiyyatdan keçmiş buludu LAS və ya E57 kimi ixrac edin. Komanda: REGISTERSCANS.
keywords: qeydiyyat, qeydiyyatdan keçirmə, skanlar, nöqtə buludu, icp, iterativ ən yaxın nöqtə, hədəflər, nöqtə cütləri, bərk çevrilmə, hizalama, birləşdirmə, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Nə edəcəksiniz

Eyni yerin bir neçə skanı (hər biri öz skaner mövqeyindən alınıb) öz koordinatlarında başlayır. Onları qeydiyyatdan keçirin: hər skana bir yerləşdirmə verin ki, hamısı bir çərçivədə dursun, sonra bunu layihə kimi saxlayın və qeydiyyatdan keçmiş buludu bir LAS və ya E57 faylına yazın.

## Skanları yerləşdirin

1. Dialoqu açın (`REGISTERSCANS` (və ya `REGSCAN`) yazın). {{ui:Skan əlavə et…}} LAS, LAZ, E57, PLY, PCD, PTX, PTS və ya XYZ fayllarını qəbul edir; faylları dialoqa da sürükləyib sala bilərsiniz. Müxtəlif vahidlərdən olan skanlar qeyd ilə rədd edilir: əvvəlcə birini çevirin.
2. {{ui:Köçürüləcək skan}} və {{ui:Hansı skana görə yerləşdirilsin}} seçin. Şəkildə hər skan indiki yeri ilə çərçivədə göstərilir, hər biri öz rəngi ilə: {{ui:Plan}}, {{ui:Ön}} və ya {{ui:Yan}}; sürükləyərək sürüşdürün, təkərlə miqyası dəyişin.
3. **Nöqtə cütləri ilə.** {{ui:Cüt seçin}} klikləyin, sonra köçürüləcək skanda nöqtəni, sonra digər skanda eyni yeri (künc, hədəf, sütunun dibi) klikləyin. Bunu ən azı üç dəfə edin; nöqtələr bir düz xətt üzərində olmasın və bir-birindən uzaqda olsun. {{ui:Cütlərlə yerləşdir}} klikləyin: skan ən kiçik kvadratlar üsulu ilə yerləşdirilir və **Qalıq** hər cütün hələ nə qədər səhv etdiyini göstərir. Böyük rəqəmi olan cüt pis seçimdir: onu çarpaz işarəsi ilə silin və yenidən yerləşdirin.
4. **Hədəflər ilə.** Nöqtənin həqiqi koordinatları məlumdursa (ölçülmüş hədəflər), {{ui:Seçin, sonra hədəfi yazın}} klikləyin, skanda nöqtəni klikləyin və sətirdə hədəfin X, Y və Z qiymətlərini yazın. Cütlər və yazılmış hədəflər sərbəst qarışdırıla bilər.

## ICP ilə dəqiqləşdirin

Cütlər təxmini yerləşdirmə verir. {{ui:Dəqiqləşdir}} skanı, səthləri digər skanın səthlərinə oturana qədər hərəkət etdirir: əvvəlcə **nöqtədən nöqtəyə**, sonra **nöqtədən müstəviyə**. Cədvəl hər addımı, onun xətasını və neçə nöqtənin uyğunlaşdığını sadalayır; üstündəki xətt xətanın necə azaldığını göstərir. {{ui:Dayandır}} cari addımdan sonra işi bitirir və əldə olunanı saxlayır. {{ui:Geri qaytar}} bütün işi (və ya son yerləşdirməni) geri qaytarır; {{ui:Sıfırla}} skanı öz fayl koordinatlarına qaytarır.

Sürətli işləmək üçün noutbukda ICP nöqtələrin seyrəldilmiş hissəsi ilə işləyir ({{ui:İstifadə olunan nöqtələr}}, 5.000-dən 60.000-ə qədər) və {{ui:Ən böyük uyğunluq məsafəsi}}-dən uzaq uyğunluqları nəzərə almır (standart olaraq skan ölçüsünün 5%-i, yerləşdikcə kiçilir). Əvvəlcə təxmini yerləşdirmə lazımdır: bir-birini az örtən skanlar uyğunlaşdırıla bilmədiklərini bildirir. Yalnız düz və ya yalnız düz xətt olan səthlər öz boyunca yerini düzəldə bilmir; belə hallarda cütlər əlavə edin.

## Saxlayın və ixrac edin

- {{ui:Layihəni saxla}} kiçik `.ccscans.json` faylı yazır: hər skanın adı, ölçüsü, ilk 64 KB-ın barmaq izi və transformasiyası. Heç bir nöqtə saxlamır. {{ui:Layihəni aç…}} skan fayllarını bu istinadlarla tapır (fayllar əvvəlcə əlavə edilməlidir) və hər transformasiyanı bərpa edir.
- {{ui:LAS ixrac et}} və {{ui:E57 ixrac et}} bütün skanları qeydiyyatdakı yerləri ilə bir fayla yazır. Orijinal nöqtələr heç vaxt yenidən yazılmır; transformasiya çıxış zamanı tətbiq olunur. {{ui:Fayllardan bütün nöqtələri oxu}} açıq olduqda hər fayl hər nöqtə üçün yenidən oxunur (hər skan üçün 20 milyona qədər); bağlı olduqda yalnız baxış pəncərəsində göstərilən nöqtələr yazılır.
- {{ui:Qeydiyyatdan keçmiş buludu göstər}} ({{ui:CadCraft}}) LAS faylını yazır və onu öz koordinatlarında, hər hansı bulud kimi, çertyojun altına əlavə edir.

:::note
Heç nə yüklənmir. Qeydiyyat faylların öz vahidlərində aparılır və millimetrləri saxlayır: LAS uyğun miqyasla yazılır (0,1 mm-ə qədər), E57 isə ikiqat dəqiqlikli (double) yazılır. Koordinat sistemi LAS-a yalnız hər skan eyni EPSG kodunu göstərdikdə daşınır. E57 yazıcısı bizim öz yazıcımızdır; faylları bu oxucu və libE57Format ilə geri oxumaqla yoxlanılır.
:::
