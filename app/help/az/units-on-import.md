---
title: İdxalda vahidlər: fayl öz vahidlərini bildirir, ya da əvvəlcə soruşulursunuz
summary: Çertyoja gətirdiyiniz fayl öz vahidlərini bildirəndə CadCraft onları çevirir və bunu deyir. Bildirməyəndə, heç nə yerləşdirmədən əvvəl soruşur və faylınız üçün cavabınızı yadda saxlayır.
keywords: vahidlər, idxal, daxil et, xref, əlavə et, XATTACH, INSERT, OBJ, DWG, DXF, nöqtə buludu, kitabxana elementi, millimetr, metr, düym, fut, miqyas, səhv ölçü, çox böyük, çox kiçik, 1000 dəfə, soruş, yadda saxlanılıb, INSUNITS
from: 558f1293
---

## Nə edəcəksiniz

Faylı çertyoja gətirin və onun düzgün ölçüdə gəldiyinə əmin olun.

## Addımlar

1. Faylı adi kimi gətirin: `INSERT` › Fayl, `XATTACH`, `POINTCLOUDATTACH` və ya Kitabxana panelində {{ui:Fayllar}}.
2. Fayl vahidlərini bildirirsə, heç nə soruşulmur. Komanda sətri faylın hansı vahidləri bildirdiyini deyir və onlar çertyojdan fərqli olanda istifadə olunan miqyası göstərir.
3. Bildirmirsə, dialoq **Faylın vahidləri** soruşur. Faylda bir vahidin nə olduğunu seçin və {{ui:Bu vahidlərdən istifadə et}} klikləyin. Cavab verməzdən əvvəl heç nə yerləşdirilmir.
4. {{ui:Ləğv et}} (və ya {{key:Esc}}) heç nə gətirmir.

## Hansı fayllar vahidlərini bildirir

- **DWG və DXF**: çertyojun daxil etmə vahidləri (`$INSUNITS`). Onları olmayan fayldan soruşulur.
- **Nöqtə buludları**: koordinat sistemi olan LAS və LAZ, E57, PTX və PLY öz vahidlərini bildirir. Digərlərindən soruşulur.
- **OBJ**: heç vaxt vahid bildirmir. Sizdən soruşulur.
- **glTF və GLB**: metrlər, formatın öz qaydasına görə.
- **Şəkillər**: öz ölçüləri yoxdur. `IMAGEATTACH` en soruşur və həmin fayl üçün əvvəl verdiyiniz eni təklif edir.
- **Skanlar**: sıxlığını (düym başına nöqtə) bildirən skan çertyojun vahidlərində həqiqi ölçüdə gəlir; `SCANATTACH` yenə də eni soruşur.
- **Nöqtə buludları əlavəsi**: vahid bildirməyən fayldan bulud quranda soruşur və buludun rəqəmlərini onun daşıdığı vahiddə etiketləyir.

## Yaxşı bilmək üçün

- DWG və ya DXF-i öz çertyoju kimi açmaq heç nə soruşmur: komanda sətri faylın hansı vahidləri bildirdiyini və ya heç birini bildirmədiyini deyir. Xassələr çertyojun vahidlərini təyin edir.
- Bu çertyojun da vahidi yoxdursa, fayl çevrilə bilməz: rəqəm-rəqəm yerləşdirilir və komanda sətri bunu deyir.
- Cavab həmin fayl üçün bu kompüterdə, bütün CadCraft tətbiqlərində yadda saxlanılır. Növbəti dəfə gələndə soruşulmursunuz və komanda sətri yadda qalan vahidlərin istifadə olunduğunu deyir.
- Yenidən soruşmaq üçün: komanda palitrası ({{key:Mod+K}}) › **İdxal olunmuş fayllar üçün vahidləri yenidən soruş**.
