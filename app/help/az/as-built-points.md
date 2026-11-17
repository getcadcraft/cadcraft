---
title: İcra olunmuş nöqtələrin yoxlanılması
summary: Topoqrafik qrupun ölçdüyü nöqtələri oxuyun və onları çertyojun nöqtələri və blokları ilə müqayisə edin: tolerans daxilində və ya kənarda, ölçülməyib, əlavə — çertyojda işarələnmiş və CSV hesabat kimi yazılmış.
keywords: as built, as-built, asbuilt, planalma, ümumi stansiya, planlaşdırma, kazıqla işarələmə, nöqtə faylı, csv, txt, pnezd, penzd, xyz, tolerans, kənarlaşma, yoxlama, müqayisə, exportpoints, planlaşdırma nöqtələri
from: f7c35208
---

{{cmd:ASBUILT}} (ləqəb ASB) {{cmd:EXPORTPOINTS}}-in digər yarısıdır: çertyojun nöqtələrini sahə üçün ixrac edirsiniz, qrup onları yerinə qoyur və icra olunanı ölçür, ASBUILT isə onların faylını çertyojla müqayisə edir.

1. {{cmd:ASBUILT}} yazın və ixrac etdiyiniz eyni nöqtələri və blokları seçin ({{key:Enter}} EXPORTPOINTS kimi hər POINT-i götürür).
2. **İcra olunmuş nöqtələri** **Nömrə** ilə (qrup sizin nöqtə nömrələrinizi saxlayıb: ixracı başladığınız ilk nömrəni verin) və ya **Ən yaxın** ilə (öz nöqtələrini özləri nömrələyiblər: hər layihə nöqtəsi ən yaxın olanı alır) cütləşdirin.
3. Faylın vahidlərini və koordinatlarını ixrac etdiyiniz kimi verin (Çertyoj, Metr və ya Fut; Dünya və ya UCS) və çertyoj vahidləri ilə **tolerans**ı yazın.
4. Qrupun CSV və ya TXT faylını seçin. CadCraft onu CivilCraft kimi oxuyur: vergül, tab, nöqtəli vergül və ya boşluq, sütunların adını göstərən başlıq sətri və ya sütun sayına görə PNEZD.

Əmr sətri neçə nöqtənin cütləşdirildiyini, neçəsinin tolerans daxilində, kənarda, ölçülməmiş və əlavə olduğunu və ən böyük məsafəni bildirir. **Çertyojda işarələnsin?** Bəli onları **AS-BUILT** qatına bir addımda qoyur: hər ölçüdə nöqtə, yanında onun nömrəsi və məsafəsi, və layihə nöqtəsindən tolerans xaricindəki hər ölçüyə qırmızı xətt. CSV hesabat hər nöqtə ilə birlikdə yüklənir: layihə və icra koordinatları, şərq, şimal və hündürlükdə fərqlər və nəticə.

Həmçinin bax: [BIM proqramları üçün nöqtələr](topic:points-for-bim).
