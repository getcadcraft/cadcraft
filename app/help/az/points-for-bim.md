---
title: BIM proqramları üçün nöqtələr
summary: Nöqtələri, və təsvirli blokların daxiletmə nöqtələrini, BIM və geodeziya proqramlarının idxal etdiyi CSV və ya TXT fayla ixrac edin.
keywords: exportpoints, nöqtələri ixrac et, nöqtələr, csv, txt, pnezd, penzd, xyz, geodeziya nöqtələri, koordinatlar, bim, nöqtələrin qoyulması, nöqtə faylı, şimal koordinatı, şərq koordinatı, hündürlük
from: d80e2d53
---

## Nəyi hazırlayacaqsınız

Nöqtə faylı: hər sətirdə bir nöqtə, onun nömrəsi, şimal, şərq, hündürlük və təsviri ilə. BIM proqramları (Revit və Archicad da daxil olmaqla) və geodeziya proqramları onu geodeziya nöqtələrini, sayt işarələrini və ya avadanlığı yerləşdirmək üçün idxal edə bilər.

## Nöqtələri ixrac edin

1. Nöqtələri və daxiletmə nöqtələri istənilən blok istinadlarını seçin, və ya hamısını götürmək üçün heç nə seçməyin.
2. {{cmd:EXPORTPOINTS}} (və ya `EXPPTS`, və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Nöqtələri ixrac et}}) yazın və {{key:Enter}} basın (`Nöqtələri və blokları seçin` sorğusunda heç nə seçilməyibsə, {{key:Enter}} basın).
3. Atributları olan bloklar seçdiyiniz zaman CadCraft onların etiketlərini sadalayır: dəyəri təsvir olan birini yazın (məsələn `ITEM`), və ya hər blokun adını istifadə etmək üçün başqa bir şey yazın.
4. Sütunları seçin: `PNEZD` (nöqtə, şimal, şərq, hündürlük, təsvir: adi olan), `PENZD` (şərq şimaldan əvvəl) və ya `XYZ` (yalnız koordinatlar).
5. Vahidləri seçin: `D` çəkildiyi kimi, `M` metr və ya `F` fut (yalnız çertyojun vahidləri təyin olunduqda: {{ui:Xassələr}} › {{ui:Vahidlər}}, heç nə seçilmədən).
6. UCS təyin olunubsa, `W` dünya və ya `U` UCS koordinatlarını seçin (bax [UCS və dönmüş görünüş](topic:ucs-and-turned-view)).
7. `C` vergüllə ayrılmış `.csv` üçün, və ya `T` tab ilə ayrılmış `.txt` üçün seçin, və ilk nöqtə nömrəsini daxil edin.

Fayl `<drawing>-points.csv` (və ya `.txt`) kimi yüklənir, tarixçə neçə nöqtə olduğunu deyir.

## Faylda nə var

- Hər sətirdə bir nöqtə, sətir sonu ilə (CR LF), üç onluq işarə ilə.
- Nöqtənin hündürlüyü onun Z-dir (yoxdursa 0). Blokun nöqtəsi onun daxiletmə nöqtəsidir.
- Vergül (və ya TXT-də tab) və ya dırnaq olan təsvir ikiqat dırnaq arasında yazılır, daxili dırnaqlar ikiqat olur.
- Format CivilCraft-ın oxuduğu və yazdığı formatdır, buna görə fayl orada da nöqtələr kimi açılır.

## Tez-tez edilən səhvlər

- Vahidlər üçün yalnız `D` təklif olunur: çertyojun vahidləri təyin olunmayıb. Təyin edin, və ya digər proqramda çevirin.
- Nöqtələr digər proqramda gözlədiyinizdən uzaqdadır: dünya koordinatlarını (`W`) və ya digər proqramın geodeziya nöqtəsinin istifadə etdiyi UCS-ni (`U`) ixrac edin.
