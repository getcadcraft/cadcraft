---
title: Bir çertyoja iki nəfərin dəyişikliklərini birləşdirin
summary: git, Fossil və ya Mercurial-ın DWG və ya DXF-in iki nüsxəsini obyekt-obyekt birləşdirməsinə icazə verin, hər obyektdə CadCraft-ın saxladığı açardan istifadə etməklə.
keywords: birləşdirmə, git, fossil, mercurial, versiya nəzarəti, fərq, münaqişə, üçtərəfli, cadcraft birləşdirmə, açar, gitattributes, DWG, DXF
from: 71482bf9
---

Eyni çertyojda iki nəfər dəyişiklik edir. Əgər onlar fərqli obyektləri dəyişibsə, birləşmə avtomatik ola bilər: əllə yenidən etmək lazım deyil.

## Bu nəyi mümkün edir

CadCraft çəkdiyiniz hər obyektə qısa bir **açar** verir ki, o heç vaxt dəyişmir və heç vaxt iki obyektə verilmir. O, obyektlə birlikdə DWG və ya DXF-də saxlanılır (digər proqramların saxladığı əlavə məlumat kimi). Birləşmə obyektləri fayldakı mövqeyinə görə yox, bu açara görə tapır, çünki hər proqram saxlayanda mövqeləri yenidən nömrələyir. Heç vaxt birləşdirmirsinizsə, bunu {{ui:Parametrlər}} › CadCraft › Birləşməyə uyğun fayllar bölməsində söndürün; fayllar təxminən 10 faiz kiçilir.

Açarlar mövcud olmazdan əvvəl saxlanılmış çertyoj hələ də birləşir: onun obyektləri faylda yerinə görə açar alır, bu, onu açan hər kəs üçün eynidir.

## Qurun

Git üçün hər repozitoriyada bir dəfəlik iki sətir lazımdır:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# bir dəfə, hər kompüterdə
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git olmadan onu əllə işə salın: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil və Mercurial eyni üç faylı öz birləşdirmə-alət parametrində qəbul edir.

## Qaydalar

- Obyekt yalnız bir tərəfdə dəyişdirilibsə, o götürülür. Hər iki tərəfdə eyni dəyişiklik bir dəfə götürülür.
- Eyni xüsusiyyət iki cür dəyişdirilibsə, bu **münaqişədir**: sizin tərəfiniz qalır və hesabat hər iki dəyəri sadalayır. Nəticəni açın, həmin obyektə baxın və əllə düzəldin.
- Hər iki tərəfdən əlavə olunan obyekt saxlanılır. Bir tərəfdən silinən və digərində dəyişdirilməyən obyekt silinir. Bir tərəfdən silinən və digərində dəyişdirilən: silinir və hesabatda göstərilir.
- Qatlar, bloklar, mətn və ölçü üslubları, vərəqlər və adlı görünüşlər eyni qaydada birləşir. Məhdudiyyətlər adlandırdıqları obyektləri izləyir.
- Nəticə sizin faylınızın eyni fayl formatında və versiyasında yazılır.

Birləşdirilmir: obyektlərin çəkilmə sırası sizindir, sonra digər tərəfin əlavə etdiyi obyektlər. Hər iki tərəfdə eyni blok təyinində dəyişikliklər münaqişədir, heç vaxt qarışdırılmır. Heç nə serverə göndərilmir; hər şey kompüterinizdə işləyir.
