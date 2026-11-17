---
title: Formatet e reve të pikave: çfarë bashkëngjitet dhe çfarë të eksportosh
summary: Cilët skedarë skanimi bashkëngjiten nën vizatim, cilët janë format të vetë prodhuesit të skanerit, dhe çfarë të eksportosh nga programi i skanerit që skanimi të bashkëngjitet këtu.
keywords: retë e pikave, pointcloudattach, pcattach, skanim lazer, skanim, formate, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksporto, nuk hapet, nuk lexohet
from: 20a5f4ee
---

## Çfarë bashkëngjitet këtu

Bashkëngjit këto me {{cmd:POINTCLOUDATTACH}}, {{ui:Hap}} ose duke i lëshuar mbi faqe (shih temën mbi gjurmimin e vijave as-built mbi një re pikash):

| Format | Shtesë | Çfarë lexohet |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pikat, ngjyrat, intensiteti, klasat LiDAR, sistemi koordinativ dhe njësitë e tij. LAZ deri në 1 GB. |
| E57 | `.e57` | Çdo skanim në skedar, secili i vendosur sipas pozës së vet; ngjyrat, ose intensiteti kur skedari nuk ka ngjyra; metra. Imazhet në skedar lihen jashtë (thuhet kështu). Deri në 6 milion pika dhe 512 MB për momentin: eksporto skanimet më të mëdha si LAS ose LAZ. |
| PLY | `.ply` | Tekst dhe binar (të dy renditjet e bajtëve): x y z të kulmeve, ngjyrat dhe intensiteti. Faqet lihen jashtë (thuhet). |
| PCD | `.pcd` | Tekst dhe binar: x y z, ngjyra të paketuara ose të ndara, intensiteti. Skedarët PCD të kompresuar nuk lexohen ende: ruaji si binar ose tekst. |
| PTX | `.ptx` | Një ose më shumë skanime, secili i vendosur nga transformimi i vet; pikat që skaneri nuk i mati lihen jashtë. Metra. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, me intensitet dhe ngjyra kur ka kolona për to. |

## Skedarë që lexohen vetëm nga programi i skanerit

Disa skedarë skanimi janë format të vetë prodhuesit të skanerit, pa përshkrim të publikuar dhe pa lexues të hapur. CadCraft nuk mund t'i lexojë: kur bashkëngjitet një i tillë, shfaq se çfarë është dhe çfarë të bësh në rreshtin e komandës. Eksporto skanimin nga programi i prodhuesit si E57 ose LAS (ose PTX, PTS), pastaj bashkëngjit skedarin e eksportuar.

| Skedar | Shtesë | Eksporto nga |
|---|---|---|
| Projekt ReCap | `.rcp` | ReCap: hap projektin dhe eksportoje. Projekti vetëm tregon te skanimet e tij, kështu që kopjimi i vetëm i `.rcp` nuk jep pika. |
| Skanim ReCap | `.rcs` | ReCap: hap projektin ku bën pjesë skanimi dhe eksportoje. |
| Skanim FARO | `.fls` | FARO SCENE. |
| Skanim Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Skanim Trimble | `.tzf` | Trimble RealWorks ose Trimble Business Center. |
| Skanim Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Kur eksportimi kërkon një format, LAS ose LAZ mban gjithçka që përdor CadCraft (ngjyrat, intensitetin, klasat, sistemin koordinativ dhe njësitë e tij) në skedarin më të vogël.
:::

## Pse këta skedarë nuk lexohen

Ato formate nuk janë publikuar, dhe e vetmja mënyrë për t'i lexuar është biblioteka softuerike e secilit prodhues, sipas kushteve të veta. CadCraft lexon vetëm formatet që mund t'i lexojë me kodin e vet në kompjuterin tënd, kështu që një skanim nuk duhet të dërgohet askund për t'u bashkëngjitur.
