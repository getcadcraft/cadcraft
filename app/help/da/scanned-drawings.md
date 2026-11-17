---
title: Scannede tegninger og sporing
summary: Hent et scannet ark ind, skalér og ret det op, rens det, slet dele af det, fang til dets linjer og spor det om til linjer og buer.
keywords: scan, scannet tegning, raster, tiff, jpeg, png, skalér, justér, ret op, fjern pletter, tærskel, sort-hvid, beskær, slet, spor, vektorisér, fang, buer, skravering, papirtegninger, gamle tegninger, scanattach, scantrace
from: 36227e5b
---

## Fra et papirark til tegningsobjekter

En scannet tegning er et billede. CadCraft gemmer det billede, du gav det, og ændrer det aldrig: hvert oprydningstrin laver et nyt billede, med ét fortryd-trin for hvert, og {{cmd:SCANINFO}} viser den oprindelige fil og de trin, der er taget siden. Intet sendes nogen steder hen, og intet gættes af en trænet model: oprydningen og sporingen er almindelig billedbehandling, og den kører på din computer.

1. **Indsæt det.** {{cmd:SCANATTACH}} læser en PNG, en JPEG, en TIFF (én side, eller alle siderne i en flersidet fil) eller en PDF-side, der er et billede. Den spørger efter siden, det nederste venstre hjørne og bredden. For en PDF-side spørger den også, hvor mange pixels per tomme siden skal tegnes med.
2. **Skalér det.** {{cmd:SCANSCALE}}: vælg to punkter på scanningen, og skriv derefter den sande afstand mellem dem. Arket skaleres om det første punkt.
3. **Justér det.** {{cmd:SCANALIGN}}: vælg to punkter på scanningen og de to steder, de hører til. Arket flytter sig og drejer, så det passer, og skaleres også, medmindre du svarer Nej.
4. **Ret det op.** {{cmd:SCANDESKEW}} måler den vinkel, arkets lange linjer ligger i, og viser den med, hvor sikker den er. Accepter den, eller skriv din egen, og arket drejes. Et ark med få lange linjer får en advarsel: kontrollér vinklen, før du accepterer den.
5. **Rens det.** {{cmd:SCANCLEAN}} gør arket sort-hvidt (Auto udjævner papiret først; Adaptiv følger papirets ændringer tættere; Niveau er ét tal for hele arket), og fjerner pletter op til den størrelse, du angiver.
6. **Beskær og slet.** {{cmd:SCANCROP}} beholder et vindue. {{cmd:SCANERASE}} sletter et rektangel, en polygon eller et lasso (tryk og træk): stempler, noter, en kaffeplet.

Det rensede billede er det, en gemt DWG indeholder (en IMAGE og dens IMAGEDEF, med billedets fil ved siden af tegningen, som for ethvert billede).

## Fang til scanningens linjer

Med {{cmd:RASTERSNAP}} slået til (standard) finder objektfang også linjerne i en sort-hvid scanning: linjernes ender, deres midter, hjørner og krydsninger, vist med de sædvanlige fangemærker. Den del af arket under markøren spores, mens du bevæger dig; zoom ind nok til, at en pixel er et par skærmpixels. En linje, der er længere end den del, der spores, følges til sine ender.

## Sporingen

{{cmd:SCANTRACE}} gør arkets linjer til linjer og buer på et nyt lag (SCAN-TRACE), som ét fortryd-trin, med scanningen stadig under dem. Du angiver:

- **Tolerance:** hvor langt en sporet linje eller bue må ligge fra linjerne på scanningen, i tegningsenheder (rapporten giver også pixels). En snæver tolerance følger hver bølge; en løs giver færre og mere lige stykker.
- **Vindue:** et hjørne af arket, eller hele arket.
- **Buer:** fra giver kun linjer.
- **Rester:** det, sporingen lod være, tegnes som kasser på et lag, du kan slukke for, eller tegnes slet ikke.

Sporingen finder midten af hver streg, følger den, tilpasser rette linjer og cirkelbuer til den, samler stykker, der blev skåret, hvor en anden linje krydsede, gør næsten vandrette og næsten lodrette linjer helt vandrette og lodrette, og lukker hjørner. **Tekst og skravering bliver som raster:** stykker på størrelse med skrift lægges til side, og bundter af korte parallelle linjer tages for skravering og lægges til side.

Når den er færdig, siger den, hvor mange linjer og buer den lavede, tolerancen, og hvor mange stykker den lod stå som raster. **Det er, hvad pixlerne gav ved den tolerance, og ikke en påstand om, at resultatet er rigtigt.** Sammenlign med arket: en sporing kan overse en svag linje, samle to linjer, der ligger meget tæt, eller tegne en linje, hvor der kun er en plet. Rens scanningen først (rettet op, sort-hvid, pletter fjernet), så bliver resultatet meget bedre.

## Hvad den ikke læser

TIFF-filer gemt i fliser, BigTIFF, TIFF med JPEG- eller deflate-komprimering, Group 3-faxkodning og farver gemt i separate planer afvises med en besked; gem dem igen som striber med LZW, PackBits, Group 4 eller uden komprimering. Interlaced PNG-filer afvises også. Filer over 128 MB eller 100 millioner pixels afvises, og et sporingsvindue kan højst indeholde 64 millioner pixels.
