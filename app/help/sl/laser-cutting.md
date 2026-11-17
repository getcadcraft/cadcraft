---
title: Pošiljanje risbe na laser
summary: Odprite podokno Laser, izberite, kaj naredi vsak sloj (rez, vrez, graviranje, polnjenje, slika), predogledajte gibanje glave in shranite G-kodo za način laserja GRBL ali jo pošljite iz brskalnika po pregledu opravila.
keywords: laser, rezalnik z laserjem, graver z laserjem, GRBL, G-koda, gcode, graviranje, polnjenje, dithering, graviranje slike, vrez, rez, Web Serial, obkroži opravilo, moč, hitrost, prehodi, LASER, LASERCUT, CNC
from: 72b56db0
---

Podokno {{ui:Laser}} spremeni sloje risbe v program za laser, ki teče na GRBL (večina hobijev in krmilnikov za diodne in CO2 lasere v majhnih delavnicah). Vtipkajte `LASER` (ali `LASERCUT`) in pritisnite {{key:Enter}}, ali izberite {{ui:Laser…}} v meniju {{ui:Več}} skupine {{ui:Pogled}}. V slogih traku je v meniju {{ui:Datoteka}} in poleg {{ui:Izris}}. Podokno se odpre čez risbo in ostane odprto, medtem ko risate: predogled sledi vsaki spremembi.

:::warning
Vsako nastavitev najprej preizkusite na odpadku, nosite zaščito za oči, ki ustreza vašemu laserju, kjer je pokrov, ga imejte zaprtega in nikoli ne puščajte delujočega laserja brez nadzora. Številke, s katerimi se začne vsak sloj, so zgolj nadomestne vrednosti, ne priporočila za noben material.
:::

## Kaj se pošlje

Podokno prebere model (ne liste), na slojih, ki so vklopljeni in odmrznjeni:

- Črte, loki, krogi, polilinije (ločni segmenti ostanejo loki), elipse in zlepki (spline). Oblika, ki se konča tam, kjer se začne, šteje kot zaprta.
- Bloki se razstavijo: objekt na sloju 0 znotraj bloka gre s slojem sklica na blok.
- Šrafura pošlje svojo mejo, zato je našrafiran logotip na sloju **Polnjenje oblik** napolnjen.
- Slika (`IMAGEATTACH`) se vgravira na sloj, nastavljen na **Graviraj sliko**, kadar leži pravokotno (ni zasukana ali nagnjena) in je njena datoteka odprta v CadCraftu.
- Besedilo, kote, vodilke, točke in konstrukcijske črte se ne pošljejo; podokno pove, koliko jih je izpustilo. Za izžig besedila narišite črke kot oblike ali jih našrafirajte.

Velikosti se pošljejo v milimetrih iz enot risbe (`UNITS`): risba v palcih se pomnoži z 25.4. Risba brez nastavljenih enot se pošlje z ena enota na en milimeter. Označite {{ui:Samo izbrane objekte}}, da pošljete del risbe.

## Izberite, kaj naredi vsak sloj

Vsak sloj z nečim na njem je vrstica. {{ui:Naredi}} ga nastavi na **Rez**, **Vrez**, **Graviraj črte**, **Polnjenje oblik**, **Graviraj sliko** ali **Ne pošlji**, z {{ui:Moč %}}, {{ui:Hitrost mm/min}} in številom {{ui:Prehodi}}. Vsaka sprememba je en korak razveljavitve in se shrani v risbo: DWG (vsaka različica, ki jo shrani CadCraft) in DXF ohranita nastavitve, zato se risba naslednjič odpre z njimi. Drugi programi datoteko odprejo kot prej; vidijo en neuporabljen blok z imenom CADCRAFT_LASER (če ga tam počistite, odstranite nastavitve).

- **Polnjenje oblik** za notranjost zaprtih oblik zažge v črtah, razmaknjenih za {{ui:Razmik vrstic}}, pod {{ui:Kot}}, v obe smeri ali eno, s prevozom (overscan), da je glava pri hitrosti, ko se laser vklopi; navzkrižna šrafura doda drugi prehod pod 90°. Oblika z luknjo ostane pri luknji odprta.
- **Graviraj sliko** spremeni sliko v pike (Floyd–Steinberg, Atkinson, urejeno ali preprosto črno-belo pri pragu) ali, z *Sivinske stopnje*, v spremenljivo moč.
- Vrstni red: najprej slike in polnjenja, nato graviranje črt, nato vrezi, nato rezi, da se izrezan del ne premakne med graviranjem. Znotraj enega sloja poti tečejo **od znotraj navzven** (luknja pred ploščo, v kateri je), nato najbližja.

## Predogled, nato shranite

Predogled riše, kaj glava naredi: črte, ki žgejo, v barvi, hitra premikanja v sivi, in zelen okvir okoli vsega, kar žge. Pod njim so velikost, dolžina žganja in ocena časa (brez pospeška; pravi stroj traja dlje). {{ui:Shrani G-kodo…}} zapiše G-kodo za način laserja GRBL: `$32=1`, `M4` (ali `M3`) z vrednostmi S, premike `G0` in `G1`, `M5` na koncu. X0 Y0 je spodnji levi kot opravila, razen če izberete izhodišče risbe: tam nastavite delovno ničlo vašega stroja.

## Pošljite iz brskalnika

V Chromu in Edgeu {{ui:Poveži…}} zahteva, da izberete USB vrata laserja. Nič se ne poveže ali pošlje, dokler ne pritisnete gumba. Najprej pritisnite {{ui:Obkroži opravilo}}: glava obriše škatlo opravila z **izklopljenim** laserjem (ali pri nizki moči, ki ste jo nastavili za kazalec), da vidite, kje bo žgalo. Šele nato se vklopi {{ui:Pošlji opravilo}}, in se spet izklopi, če kar koli spremenite. {{ui:Premor}} zadrži glavo, {{ui:Ustavi}} jo zadrži, ponastavi krmilnik (laser se izklopi) in pošlje `M5`. Kjer manjka Web Serial (Firefox, Safari in CadCraft Studio, ki Web Serial še nima), podokno ponudi samo shranjevanje: shranite G-kodo in jo pošljite z lastnim programom za laser.

## Še ni izdelano

Še ni izdelano: formati drugih krmilnikov (Ruida, laserji Marlin, datoteke proizvajalcev), jezički in uvodne črte, odmik reza (kerf), knjižnice materialov, rotacijski in Z-osi, poravnava s kamero, besedilo kot obrisi.
