---
title: Konstruksiya xətləri və şüalar
summary: Sonsuz uzanan xətlər (XLINE) və ya bir nöqtədən bir istiqamətə uzanan xətlər (RAY) ilə şeyləri düzləşdirin və onları adi xətlərə kəsin.
keywords: xline, ray, konstruksiya xətti, konstruksiya xətləri, sonsuz xətt, bələdçi xətt, istinad xətti, bissektrisa, ofset xətti, plan xətləri, xl
from: b6c398bc
---

## Nə öyrənəcəksiniz

Çertyoj çəkərkən şeyləri düzləşdirmək üçün konstruksiya xətlərini necə çəkmək olar: iki nöqtədən keçən, üfüqi və ya şaquli, bucaq altında, iki istiqamət arasında yarıda və ya xəttdən təyin olunmuş məsafədə. Vəzifəsini yerinə yetirdikdə onları adi xətlərə necə kəsmək olar.

## İki növ

- **Konstruksiya xətti** ({{cmd:XLINE}}) hər iki istiqamətdə sonsuz uzanır.
- **Şüa** ({{cmd:RAY}}) bir nöqtədən başlayır və bir istiqamətdə sonsuz uzanır.

Miqyasdan asılı olmayaraq hər ikisi bütün çertyoj sahəsi boyunca çəkilir, həm bölünmüş ekranda, həm də vərəqdəki görünüş pəncərələrində. {{ui:Hüdudlar}} onları nəzərə almır, ona görə çertyojun miqyasını ona uyğunlaşdırmaq çəkdiyiniz şeyləri yenə də əhatə edir.

## Konstruksiya xətlərini çəkin

1. {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Konstruksiya xətti}} klikləyin və ya `XL` yazın və {{key:Enter}} basın.
2. Bir nöqtəyə klikləyin. Bundan sonra hər klik birinci nöqtədən və klik etdiyiniz nöqtədən keçən konstruksiya xətti əlavə edir.
3. Bitirmək üçün {{key:Enter}} basın.

Birinci nöqtə əvəzinə seçim yaza bilərsiniz:

| Seçim | Nə edir |
|---|---|
| `H` (Hor) | Üfüqi xətlər, klik etdiyiniz hər nöqtədən bir. |
| `V` (Ver) | Şaquli xətlər hər nöqtədən keçir. |
| `A` (Ang) | Yazdığınız bucaq altında xətlər (dərəcə ilə, X oxundan saat əqrəbinin əksinə), hər nöqtədən keçir. `R` (Reference) bucağı seçdiyiniz xəttdən ölçür. |
| `B` (Bisect) | Künca klikləyin, sonra bir tərəf boyunca nöqtəyə: digər tərəf boyunca klik etdiyiniz hər nöqtə ikisinin arasında yarıda xətt əlavə edir. |
| `O` (Offset) | Məsafə yazın, xətt seçin, sonra tərəfə klikləyin: ondan həmin məsafədə, paralel konstruksiya xətti. `T` (Through) əvəzinə klik etdiyiniz nöqtədən keçirir. Məsafə növbəti dəfə üçün yadda saxlanılır. |

## Şüaları çəkin

1. {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Şüa}} klikləyin və ya `RAY` yazın və {{key:Enter}} basın.
2. Şüaların başladığı yerə klikləyin.
3. Hər şüanın keçəcəyi nöqtəyə klikləyin. Bitirmək üçün {{key:Enter}} basın.

## Onlara tutun və onları kəsin

Konstruksiya xətləri və şüalar Ən yaxın, Perpendikulyar və Kəsişmə tutmalarına tutulur. Onların ucu və ortası yoxdur, ona görə Son nöqtə və Orta nöqtə onlarda heç nə tapmır.

Onlar {{cmd:TRIM}} və {{cmd:BREAK}} komandalarında digər xətlər kimi kəsir və kəsilir:

- Konstruksiya xəttinin bir ucunu kəsin, o, kəsik yerindən başlayan şüaya çevrilir.
- Şüanın uzaq hissəsini kəsin, o, adi xəttə çevrilir.
- Konstruksiya xəttini bir nöqtədə qırın, iki şüa alırsınız.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} və {{cmd:STRETCH}} onlarda da işləyir. Pəncərə seçimi onları heç vaxt seçmir, çünki heç bir pəncərə sonsuz xəttin hamısını ehtiva edə bilməz; kəsişən pəncərə və ya klik seçir.

:::note
Hər versiyalı DWG və DXF 2000 onları konstruksiya xətti kimi saxlayır. DXF R12-də belə xətt yoxdur, ona görə orada onlar çertyoj boyunca xəttə çevrilir və saxlama bunu bildirir. Çap və ya PDF onları yalnız çap etdiyi sahə boyunca çəkir.
:::
