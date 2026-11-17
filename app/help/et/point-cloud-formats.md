---
title: Punktipilvede formaadid: mis kinnitub ja mida eksportida
summary: Millised laserskaneeringu failid kinnituvad joonise alla, millised on skanneri tootja enda formaadis ning mida eksportida skanneri tarkvarast, et skaneering siia kinnituks.
keywords: punktipilv, pointcloudattach, pcattach, laserskaneering, skaneering, formaadid, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, ei saa avada, ei loeta
from: 20a5f4ee
---

## Mis siin kinnitub

Kinnita need käsuga {{cmd:POINTCLOUDATTACH}}, nupuga {{ui:Ava}} või lohistades need lehele (vt teemat tegelikult olemasolevate joonte jälgimise kohta punktipilve kohal):

| Formaat | Laiend | Mida loetakse |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punktid, värvid, intensiivsus, LiDAR-klassid, koordinaatsüsteem ja selle ühikud. LAZ kuni 1 GB. |
| E57 | `.e57` | Iga skaneering failis, igaüks oma asendi järgi paigutatud; värvid või intensiivsus, kui failis värve pole; meetrid. Failis olevad pildid jäetakse välja (öeldakse). Praegu kuni 6 miljonit punkti ja 512 MB: suuremad skaneeringud ekspordi LAS- või LAZ-ina. |
| PLY | `.ply` | Tekst ja binaar (mõlemad baidijärjestused): tippude x y z, värvid ja intensiivsus. Tahud jäetakse välja (öeldakse). |
| PCD | `.pcd` | Tekst ja binaar: x y z, pakitud või eraldi värvid, intensiivsus. Pakitud PCD-faile ei loeta veel: salvesta need binaarina või tekstina. |
| PTX | `.ptx` | Üks või mitu skaneeringut, igaüks oma teisendusega paigutatud; punktid, mida skanner ei mõõtnud, jäetakse välja. Meetrid. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, koos intensiivsuse ja värvidega, kui veerud on olemas. |

## Failid, mida loeb ainult skanneri tarkvara

Osad skaneerimisfailid on skanneri tootja enda formaadis, ilma avaldatud kirjelduse ja avatud lugejata. CadCraft ei saa neid lugeda: nende kinnitamine ütleb, mis fail on ja mida käsureal teha. Ekspordi skaneering tootja tarkvarast E57 või LAS (või PTX, PTS) formaadis ning kinnita eksporditud fail.

| Fail | Laiend | Ekspordi kust |
|---|---|---|
| ReCap-projekt | `.rcp` | ReCap: ava projekt ja ekspordi see. Projekt viitab ainult oma skaneeringutele, nii et ainult `.rcp` kopeerimine ei anna punkte. |
| ReCap-skaneering | `.rcs` | ReCap: ava projekt, millele skaneering kuulub, ja ekspordi see. |
| FARO-skaneering | `.fls` | FARO SCENE. |
| Leica-skaneering | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skaneering | `.tzf` | Trimble RealWorks või Trimble Business Center. |
| Z+F-skaneering | `.zfs` | Z+F LaserControl. |

:::tip
Kui eksport küsib formaati, hoiab LAS või LAZ kõike, mida CadCraft kasutab (värvid, intensiivsus, klassid, koordinaatsüsteem ja selle ühikud), kõige väiksemas failis.
:::

## Miks neid faile ei loeta

Need formaadid pole avaldatud ja ainus viis neid lugeda on iga tootja enda tarkvarateek, selle enda tingimustel. CadCraft loeb ainult formaate, mida ta saab lugeda oma koodiga sinu arvutis, nii et skaneeringut ei pea kinnitamiseks kuhugi saatma.
