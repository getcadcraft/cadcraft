---
title: Nöqtə buludu üzərində faktiki xətləri izləyin
summary: Lazer skanını (LAS, LAZ, E57, PLY, PCD, PTX, PTS və ya XYZ) çertyojun altına əlavə edin, onun vasitəsilə plan kəsiyi çıxarın və nöqtələrinə obyekt tutması ilə divarları, qapıları və sütunları çəkin.
keywords: nöqtə buludu, pointcloudattach, pcattach, pointcloud, pc, lazer skanı, skan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, planalma, kəsik, plan kəsiyi, düyün, tutma, izləmə, mövcud şərait
from: b0e0aae5
---

## Nə yaradacaqsınız

Skan edilmiş binanın divarlarının xətt və polixətlər kimi, məhz skanın nöqtələri üzərində çəkildiyi faktiki mərtəbə planı.

## Buludu əlavə edin

1. Əgər çertyojun vahidləri yoxdursa, əvvəlcə onları təyin edin ({{ui:Properties}} daxilində {{ui:Units}} qutusu və ya {{cmd:UNITS}}): CadCraft buludu öz vahidlərindən çertyojun vahidlərinə çevirir.
2. {{cmd:POINTCLOUDATTACH}} (və ya `PCATTACH`) yazın və {{key:Enter}} basın. `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` və ya `.xyz` faylını seçin (nöqtə buludu formatları haqqında mövzu hər birinin nə gətirdiyini və skanerin öz proqramından nəyin ixrac edilməli olduğunu izah edir). Faylı {{ui:Open}} ilə də aça bilərsiniz, səhifəyə sürükləyib buraxa bilərsiniz və ya BIM görüntüləyicisindən {{ui:CadCraft-da izlə}} ilə göndərə bilərsiniz.
3. `Buludun aşağı-sol küncü`: faylın öz koordinatlarını saxlamaq üçün {{key:Enter}} basın (layihəyə qeydiyyatdan keçmiş skan çertyojla üst-üstə düşür), və ya buludun aşağı-sol küncünün yerləşəcəyi yeri klikləyin.
4. Komanda sətri neçə nöqtənin göstərildiyini bildirir. Görünüş buluda yaxınlaşır; bulud xətlərin altındadır, hər nöqtə yuxarıdan görünür.

## Plan kəsiyi çıxarın və izləyin

1. {{cmd:POINTCLOUD}} (və ya `PC`) yazın, sonra {{ui:Kəsik (S)}} üçün `S`. Yalnız buludun ən aşağı nöqtəsindən 1.2 m yuxarıda olan nazik zolaq görünür: divarlar, qapı açımları və sütunlar plan kimi oxunur.
2. `H` kəsiyin hündürlüyünü, `T` isə qalınlığını (çertyojun vahidləri ilə) təyin edir. {{key:Enter}} komandanı bitirir.
3. Obyekt tutmasını ({{key:F3}}) tutmalar arasında {{ui:Node}} ilə birlikdə yandırın. {{cmd:LINE}} və ya {{cmd:PLINE}} ilə çəkin: kursor kəsiyin nöqtələrinə tutulur və "Nöqtə buludu" kimi etiketlənir. Çertyojun öz son nöqtələri, orta nöqtələri və mərkəzləri buluddan üstün tutulur, ona görə polixətti bağlayanda o, ilk nöqtəyə düşür.
4. Başqa səviyyəni izləmək üçün kəsiyin hündürlüyünü dəyişin, sonra bütün buludu görmək üçün kəsiyi söndürün (yenidən `S`).

## Əlavə seçimlər

{{cmd:POINTCLOUD}} daxilində: `C` nöqtələri faylın rənglərinə, hündürlüyə, intensivliyə, LiDAR sinfinə və ya bir rənginə görə rəngləyir; `SI` nöqtə ölçüsünü təyin edir; `V` buludu gizlədir və ya göstərir; `Z` buluda yaxınlaşır; `D` onu ayırır.

3D tabı da buludu, onun ən aşağı nöqtəsi yerdə olmaqla, eyni kəsiklə göstərir.

:::note
Bulud çertyojun bir hissəsi deyil: DWG və ya DXF-də saxlanılmır, geri qaytarma onu dəyişmir. Çertyoju sonradan açdıqda buludu yenidən əlavə edin. Fayllar bu kompüterdə oxunur; heç nə yüklənmir. Çox böyük skanlar bərabər şəkildə 2 milyon nöqtəyə qədər seyreldilir. E57 faylları hələlik 6 milyon nöqtəyə və 512 MB-a qədər açılır: daha böyük skanları LAS və ya LAZ kimi ixrac edin.
:::

## Çap

{{cmd:PLOT}} buludu çertyojla birlikdə, xətlərin altında çap edir: model çapında ({{ui:Everything}} buludun sahəsini daxil edir) və hər layout görünüş pəncərəsində, PDF-də, PNG-də, SVG-də və printerə göndərdiyiniz çapda. Ekranda olanı çap edir: kəsik yandırılıbsa kəsiyi, seçdiyiniz rəngləri və gizlətdiyiniz halda gizli. Kağızda nöqtələr kiçik kvadratlara çevrilir, hər kvadratda ən yüksək nöqtə qalib gəlir və çap təxminən 400 000 nöqtədən çox saxlamır (çox sıx bulud daha böyük kvadratlarla çap olunur). Bulud yalnız əlavə edildiyi çertyojda çap olunur; kağız fəzasında heç vaxt özü çap olunmur, yalnız görünüş pəncərəsi vasitəsilə.

## Bir neçə skan

Müxtəlif mövqelərdən alınmış skanlar bir çərçivəyə qeydiyyatdan keçirilə, ICP ilə dəqiqləşdirilə və bir LAS və ya E57 kimi ixrac edilə bilər: [Bir neçə skanı birləşdirmək](topic:register-scans) bölməsinə baxın.
