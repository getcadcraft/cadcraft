---
title: Mākoņpunktu formāti: kas tiek pievienots un ko eksportēt
summary: Kuri lāzerskenēšanas faili tiek pievienoti zem rasējuma, kuri ir skenera ražotāja paša formāts un ko eksportēt no skenera programmatūras, lai skenējums te tiktu pievienots.
keywords: mākoņpunkti, pointcloudattach, pcattach, lāzerskenēšana, skenējums, formāti, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksportēt, nevar atvērt, nav nolasīts
from: 20a5f4ee
---

## Kas šeit tiek pievienots

Pievienojiet šos ar {{cmd:POINTCLOUDATTACH}}, {{ui:Atvērt}} vai nometot tos lapā (skatiet tēmu par izpildījuma līniju pārzīmēšanu pār mākoņpunktiem):

| Formāts | Paplašinājums | Ko nolasa |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punkti, krāsas, intensitāte, LiDAR klases, koordinātu sistēma un tās vienības. LAZ līdz 1 GB. |
| E57 | `.e57` | Katrs skenējums failā, katrs novietots pēc sava stāvokļa; krāsas, vai intensitāte, ja failā nav krāsu; metri. Attēli failā tiek izlaisti (par to paziņots). Līdz 6 miljoniem punktu un 512 MB šobrīd: lielākus skenējumus eksportējiet kā LAS vai LAZ. |
| PLY | `.ply` | Teksts un binārs (abas baitu secības): virsotņu x y z, krāsas un intensitāte. Skaldnes tiek izlaistas (par to paziņots). |
| PCD | `.pcd` | Teksts un binārs: x y z, saspiestas vai atsevišķas krāsas, intensitāte. Saspiestos PCD failus vēl nenolasa: saglabājiet tos kā binārus vai tekstu. |
| PTX | `.ptx` | Viens vai vairāki skenējumi, katrs novietots ar savu transformāciju; punkti, ko skeneris nav izmērījis, tiek izlaisti. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Teksts: x y z, ar intensitāti un krāsām, ja kolonnas ir. |

## Faili, ko lasa tikai skenera programmatūra

Daži skenējumu faili ir skenera ražotāja paša formāts, bez publicēta apraksta un bez atvērta lasītāja. CadCraft tos nevar nolasīt: tos pievienojot, komandrindā tiek parādīts, kas tas ir un ko darīt. Eksportējiet skenējumu no ražotāja programmatūras kā E57 vai LAS (vai PTX, PTS), tad pievienojiet eksportēto failu.

| Fails | Paplašinājums | Eksportējiet no |
|---|---|---|
| ReCap projekts | `.rcp` | ReCap: atveriet projektu un eksportējiet to. Projekts tikai norāda uz saviem skenējumiem, tāpēc viens pats `.rcp` fails punktus nedod. |
| ReCap skenējums | `.rcs` | ReCap: atveriet projektu, kuram skenējums pieder, un eksportējiet to. |
| FARO skenējums | `.fls` | FARO SCENE. |
| Leica skenējums | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble skenējums | `.tzf` | Trimble RealWorks vai Trimble Business Center. |
| Z+F skenējums | `.zfs` | Z+F LaserControl. |

:::tip
Kad eksporta laikā tiek prasīts formāts, LAS vai LAZ saglabā visu, ko CadCraft izmanto (krāsas, intensitāti, klases, koordinātu sistēmu un tās vienības), mazākā failā.
:::

## Kāpēc šie faili netiek nolasīti

Šie formāti nav publicēti, un vienīgais veids, kā tos nolasīt, ir katra ražotāja pašu programmatūras bibliotēka, saskaņā ar tās noteikumiem. CadCraft nolasa tikai formātus, ko var nolasīt ar savu kodu jūsu datorā, tāpēc skenējums nekad nav jānosūta kur citur, lai to pievienotu.
