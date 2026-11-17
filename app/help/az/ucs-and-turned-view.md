---
title: Görünüşü çevirin və öz koordinatlarınızdan istifadə edin (UCS)
summary: Görünüşü 90° və ya istənilən bucağa çevirin, çertyojdakı heç nəyi köçürmədən, və nöqtələrin, ortoqonalın, polyar izləmənin, şəbəkənin və yeni mətnin binanın öz oxlarını izləməsi üçün istifadəçi koordinat sistemi (UCS) təyin edin.
keywords: ucs, istifadəçi koordinat sistemi, plan, görünüşü çevir, görünüşü fırlat, görünüş burulması, ucs z, ucs 3point, ucs obyekt, ucs dünya, adlı ucs, ucsfollow, turnleft, turnright, turnworld, bucaq altında bina, fırlanmış şəbəkə
from: 6f152c65
---

## Nəyi öyrənəcəksiniz

Bucaq altında qurulmuş binanın ekranda düz oxunması üçün çertyoja necə fırlanmış baxmaq və nöqtələri onun öz oxları boyunca necə yazmaq. Bunu edərkən çertyojdakı heç nə köçmür: obyektlər öz koordinatlarını saxlayır, çevirmə redaktə deyil və çertyoj dəyişmiş kimi qeyd olunmur.

## Görünüşü dörddə bir çevirin

1. {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Görünüşü 90° sola fırladın}} və ya {{ui:Görünüşü 90° sağa fırladın}} klikləyin.

Çertyoj çəkmə sahəsinin ortası ətrafında ekranda fırlanır. Davam etdirmək üçün yenidən edin.

2. {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Dünyaya qayıt}} klikləyin ki, yenidən düzləşsin.

Bunların arxasındakı komandalar {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} və {{cmd:TURNWORLD}}-dir. Birinə düymə vermək üçün {{cmd:ALIASEDIT}} ilə ləqəblərinizə `TL=TURNLEFT` kimi sətir əlavə edin.

## Bucaq altında binaya uyğunlaşdırın

1. Yazın `UCS` və {{key:Enter}} basın, sonra `OB` (Obyekt) və {{key:Enter}}.
2. Başlanğıc olmalı olan divar xəttinin ucuna yaxın divar xəttinə klikləyin.

UCS indi həmin ucdan başlayır, X oxu divar boyunca gedir və görünüş çevrilir ki, divar ekranda düz olsun. Sol aşağı küncdəki ox işarəsi UCS oxlarının hara baxdığını göstərir.

3. Adi kimi çəkin. UCS təyin olunanda:
   - `x,y` və `@dx,dy` UCS oxları boyunca ölçülür; `d<a` bucağı UCS X oxundan ölçür.
   - {{ui:Ortoqonal}}, polyar izləmə və şəbəkə UCS oxlarını izləyir, çarpaz xətt də belə.
   - Yeni mətn və yeni abzaslar UCS X oxu boyunca gedir; {{cmd:DIMLINEAR}}-in üfüqi və şaquli ölçüləri də onu izləyir.
   - Vəziyyət çubuğundakı və {{cmd:ID}}-dən gələn koordinatlar UCS koordinatlarıdır.
4. UCS təyin olunanda dünya nöqtəsini yazmaq üçün əvvəlinə `*` qoyun: `*0,0` və ya `@*100,0`.
5. Yazın `UCS`, {{key:Enter}}, sonra dünyaya qayıtmaq üçün yenidən {{key:Enter}}.

## UCS təyin etməyin digər yolları

`UCS` sorğusunda:

| Yazırsınız | Nə edir |
|---|---|
| nöqtə | Yeni başlanğıc; sonra yeni X oxunda nöqtəyə klikləyin, ya da bucağı saxlamaq üçün {{key:Enter}} basın |
| `Z` | UCS-i başlanğıcı ətrafında yazdığınız (dərəcə ilə, saat əqrəbinin əksinə) və ya seçdiyiniz bucaqla fırladır |
| `3` (3 nöqtə) | Başlanğıc, müsbət X oxu üzrə nöqtə və müsbət Y tərəfində nöqtə |
| `OB` (Obyekt) | Xətdən, qövsdən, dairədən, polixətt seqmentindən, mətndən, blok istinadından, nöqtədən və ya köməkçi xətdən |
| `P` (Əvvəlki) | Bu UCS-dən əvvəlki UCS (çertyoj açıq olduqda son on saxlanılır) |
| `W` (Dünya) | Dünyaya qayıt |
| `NA` (Adlı) | `S` cari UCS-i ad altında saxlayır, `R` birini bərpa edir, `D` birini silir, `?` siyahını göstərir |

Hər dəyişiklik görünüşü elə çevirir ki, yeni UCS X oxu üfüqi olsun. {{cmd:PLAN}} UCS-i dəyişmədən görünüşü çevirir: cari UCS üçün {{key:Enter}}, saxlanmış üçün `U`, dünya üçün `W`.

## Yaxşı bilmək üçün

- Bölünmüş ekranın hər paneli öz fırlanmasını saxlayır. UCS çertyojun özünə aiddir.
- Vərəqlər kağız koordinatlarında işləyir; UCS-i {{ui:Model}} səkməsində, ya da görünüş pəncərəsinin içində təyin edin.
- Fırlanmış görünüşdə sürüklənən seçim pəncərələri ekranda içərisində olanı seçir.
- LISP rutinləri `getpoint`-dən UCS-də nöqtələr alır, `UCSORG`, `UCSXDIR`, `UCSYDIR` və `VIEWTWIST` oxuya bilir, `trans` isə dünya, UCS və ekran arasında çevirir.

:::note
Saxlanmış fayl UCS-i və görünüşün fırlanmasını sonrakı versiyada saxlayacaq; o vaxta qədər onlar çertyoj açıq olduğu müddətdə qalır.
:::
