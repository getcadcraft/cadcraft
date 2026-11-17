---
title: Mətn üslubları ilə mətnin şriftini və ölçüsünü təyin edin
summary: Şrift, hündürlük, en və meyllə adlandırılmış mətn üslubları yaradın, yeni mətn üçün birini cari edin və üslubu dəyişdirəndə ondan istifadə edən bütün mətni dəyişin.
keywords: mətn üslubu, üslub, STYLE, ST, TEXTSTYLE, -STYLE, şrift, mətn hündürlüyü, en əmsalı, maillik, meyl, şrifti dəyişdir, standart üslub, üslubu tətbiq et, DDSTYLE
from: bd5a4883
---

## Nə edəcəksiniz

`Qeydlər` adlı mətn üslubu yaradın, öz şrifti və hündürlüyü ilə, onu yeni mətn üçün istifadə edin, sonra üslubu dəyişdirin ki, ondan istifadə edən bütün qeydlər bir anda dəyişsin.

## Addımlar

1. {{cmd:STYLE}} (`ST`) yazın və {{key:Enter}} basın, və ya **{{ui:Çəkmə}}** alətlər panelində {{ui:Mətn üslubu}} klikləyin. {{ui:Mətn üslubu}} dialoqu çertyojdakı üslubları siyahılayır. Hər çertyojda `Standart` var.
2. {{ui:Yeni…}} klikləyin, yeni üslubun adı kimi `Qeydlər` yazın və {{ui:OK}} klikləyin. Status sətri deyir: "Mətn üslubu Qeydlər yaradıldı və cari təyin edildi."
3. {{ui:Şrift}}də şrift adını seçin və ya yazın. {{ui:Hündürlük (0 = hər dəfə soruş)}} bir ədədə təyin edin, məsələn `2.5`, beləliklə hər yeni mətn o hündürlüyü alır. Hər dəfə soruşulmaq üçün `0`-da buraxın.
4. Daha dar, geniş və ya əyilmiş hərflər istəyirsinizsə, {{ui:En əmsalı}} və {{ui:Maillik bucağı (°)}} təyin edin. Nümunə sətri nəticəni göstərir.
5. {{ui:Bağla}} klikləyin. {{cmd:TEXT}} və ya {{cmd:MTEXT}} ilə mətn çəkin: yeni mətn cari üslubu alır.
6. Artıq yaratdığınız üslubu istifadə etmək üçün dialoqu yenidən açın, siyahıdan seçin və {{ui:Cari təyin et}} klikləyin.
7. Artıq çəkilmiş mətnə üslub vermək üçün mətni seçin, dialoqu açın, üslubu seçin və {{ui:Seçilmiş mətnə tətbiq et}} klikləyin.

## Üslubu sonra dəyişdirin

Dialoqda üslubun şriftini, hündürlüyünü, enini və ya meylini dəyişdirin və ondan istifadə edən hər mətn izləyir, bir geri qaytarma addımında ({{key:Mod+Z}}). Status sətri neçə mətnin izlədiyini göstərir.

## Qeydlər

- {{ui:Sil}} `Standart`ı və hələ mətn tərəfindən istifadə olunan üslubu rədd edir: əvvəlcə həmin mətni başqa üslubda dəyişin.
- Üslublar çertyojun STYLE cədvəlində saxlanılır, buna görə DXF və DWG faylları onları saxlayır.
- Əmr sətrində `-STYLE` eyni işi seçimlərlə görür: `Cari`, [Yeni (N)], [Şrift (F)], [Hündürlük (H)], [En (W)], [Maillik (O)], [Sil (D)], [Siyahı (L)].
- Oxuduğunuz kompüterdə olmayan şrift başqa görünüşdə göstərilir.
