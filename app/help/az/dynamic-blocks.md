---
title: Dinamik bloklar
summary: CadCraft DWG-dəki dinamik bloklarla nə edir: həqiqi adlarını saxlayır, saxlandıqları vəziyyəti göstərir, görünürlük vəziyyətlərini dəyişir, digər dəyərlərini göstərir və saxlandıqda dinamik qalırlar.
keywords: dinamik blok, dinamik bloklar, görünürlük, görünürlük vəziyyəti, çevirmək, uzatmaq, axtarış, parametrlər, fərdi, blok xassələri, *u blokları, dinamik
from: 26b6aa80
---

## Nə işləyir

Dinamik bloklarla yaradılmış DWG bu qədər işləyən halda açılır:

- **Həqiqi adları.** Dinamik blok {{ui:Bloklar}} panelində öz adı ilə ("Receptacle", "Sink") göstərilir, adsız `*U` bloku kimi yox.
- **Saxlandıqları vəziyyət.** Hər istinad digər proqramın göstərdiyi dəqiq şeyi göstərir: təyin olunduğu görünürlük vəziyyətini, saxlandığı kimi uzadılmış və ya çevrilmiş.
- **Görünürlük vəziyyətini dəyişmək.** Bir istinad seçin (və ya eyni bloktan bir neçə), {{ui:Xassələr}}-i açın və {{ui:Fərdi}} bölməsində {{ui:Görünürlük}} siyahısından başqa vəziyyət seçin. İstinad həmin vəziyyəti dərhal göstərir, atributları da: vəziyyətin gizlətdikləri yox olur, göstərdikləri dəyərləri ilə görünür. İstinad hər dəyəri saxlayır, ona görə heç nə boş qalmır; {{ui:Xassələr}} gizlədilənləri "gizlədilib" işarəsi ilə sadalayır. {{key:Mod+Z}} köhnə vəziyyəti bir addımda qaytarır.
- **Tutacaqlar.** Seçilmiş dinamik blok parametrlərinin olduğu yerdə öz tutacaqlarını göstərir: görünürlük vəziyyəti üçün kiçik üçbucaq (siyahı üçün klikləyin), məsafənin uclarında oxlar, çevirmə üçün ikiqat ox. Hazırda yalnız görünürlük tutacağı işləyir; digərləri bunu status sətrində deyir.
- **Digər dəyərlər, yalnız oxumaq üçün.** Görünürlük siyahısının altında {{ui:Fərdi}} blokun məsafələrini, düzləşdirmə bucaqlarını, çevirmə vəziyyətlərini və nöqtələrini çertyojun saxladığı kimi göstərir.
- **Görünürlük vəziyyətlərinin redaktəsi.** Bloku {{cmd:BEDIT}} ilə açın: redaktor bir vəziyyəti göstərir, çertyojun üstündəki zolaqda adı yazılır (orada başqasını seçin). {{cmd:BVSTATE}} yazın ki, dəyişəsiniz, əlavə edəsiniz (hər şeyi gizlədərək, hər şeyi göstərərək və ya göstərilənləri saxlayaraq), adını dəyişəsiniz və ya siləsiniz; {{cmd:BVHIDE}} seçilmiş obyektləri hazırda göstərilən vəziyyətdə gizlədir; {{cmd:BVSHOW}} gizlədilənləri solğun göstərir ki, geri gətirmək üçün klikləyə biləsiniz. Bloku saxlayın: adı dəyişdirilmiş vəziyyətə təyin olunmuş istinadlar onu yeni adı ilə saxlayır, silinmiş vəziyyətə təyin olunanlar isə birinci vəziyyəti göstərir.
- **Dinamik qalır.** Çertyojun gəldiyi DWG versiyasında saxlandıqda bloklar seçdiyiniz vəziyyətlə dinamik qalır; digər proqram onları eyni dinamik bloklar kimi açır. Redaktə etdiyiniz görünürlük vəziyyətləri də saxlanılır: yeni adları, əlavə etdiyiniz vəziyyətlər və hər birinin göstərdikləri.

## Yalnız oxumaq üçün və ya hələ yoxdur

| Hələ yoxdur | Hazırda bunun əvəzinə |
|---|---|
| Məsafələrin, bucaqların və ya çevirmələrin dəyişdirilməsi (uzatma, köçürmə, çevirmə əməliyyatları) | {{ui:Fərdi}}-də yalnız oxumaq üçün göstərilir; bloku yaradan proqramda redaktə edin. |
| Axtarış, XY, fırlanma və polyar parametrlər | Hələ oxunmur: istinad saxlandığı kimi göstərilir. |
| Məsafə, çevirmə və nöqtə tutacaqlarının sürüşdürülməsi | Parametrlərin olduğu yerdə göstərilir; görünürlük tutacağı və Xassələrdəki {{ui:Görünürlük}} siyahısı vəziyyətləri dəyişir. |
| Dinamik blokların yaradılması (parametr və ya görünürlük vəziyyəti əlavə etmək, heç olmayan bloka) | CadCraft-da yaratdığınız bloklar sadə bloklardır; {{cmd:BPARAMETER}} bunu deyir. |
| Görünürlük vəziyyəti olan blokun obyektlərinə blok redaktorunda obyekt əlavə etmək və ya silmək | Blok sonra sadə blok kimi saxlanılır (redaktor bağlananda bunu deyir). |
| Dinamik saxlamaq başqa DWG versiyasında və ya DXF-də | Seçdiyiniz vəziyyəti göstərən sadə bloklar kimi saxlanılır və saxlama bunu deyir. |

:::note
{{cmd:BEDIT}}-də obyektləri hərəkət etdirmək və ya dəyişmək görünürlük vəziyyətləri olan bloku dinamik saxlayır. Vəziyyəti olmayan blok və ya redaktorda obyektləri əlavə olunan və ya silinən blok sadə blok olur.
:::
