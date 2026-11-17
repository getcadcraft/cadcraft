---
title: Skannede tegninger og sporing
summary: Hent inn et skannet ark, skaler og rett det ut, rydd opp, slett deler av det, fest til linjene og spor det om til linjer og buer.
keywords: skanning, skannet tegning, raster, tiff, jpeg, png, skala, juster, rett ut, fjern flekker, terskel, svart-hvitt, beskjær, slett, spor, vektoriser, fang, buer, skravur, papirtegninger, gamle tegninger, scanattach, scantrace
from: 36227e5b
---

## Fra papirark til tegningsobjekter

En skannet tegning er et bilde. CadCraft beholder bildet du ga den, og endrer det aldri: hvert opprydningssteg lager et nytt bilde, med ett angre-steg for hvert, og {{cmd:SCANINFO}} lister opp originalfilen og stegene som er tatt siden. Ingenting sendes noe sted, og ingen trent modell gjetter noe. Opprydningen og sporingen er vanlig bildebehandling, og den kjøres på din egen maskin.

1. **Sett den inn.** {{cmd:SCANATTACH}} leser et PNG-, JPEG- eller TIFF-bilde (én side, eller alle sidene i en flersiders fil) eller en PDF-side som er et bilde. Den spør etter siden, det nedre venstre hjørnet og bredden. For en PDF-side spør den også hvor mange piksler per tomme siden skal tegnes med.
2. **Skaler den.** {{cmd:SCANSCALE}}: klikk to punkter på skanningen, og skriv deretter den virkelige avstanden mellom dem. Arket skaleres om det første punktet.
3. **Juster den.** {{cmd:SCANALIGN}}: klikk to punkter på skanningen og de to stedene de hører hjemme; arket flyttes og snur seg for å passe, og skaleres også med mindre du svarer Nei.
4. **Rett den ut.** {{cmd:SCANDESKEW}} måler vinkelen arkets lange linjer ligger i, viser den, og viser hvor sikker den er. Godta den, eller skriv inn din egen, så snus arket. Et ark med få lange linjer får en advarsel: kontroller vinkelen før du godtar den.
5. **Rydd den.** {{cmd:SCANCLEAN}} gjør arket svart-hvitt (Auto jevner først ut papiret; Adaptiv følger papirets endringer tettere; Nivå er ett tall for hele arket), og fjerner flekker opp til den størrelsen du setter.
6. **Beskjær og slett.** {{cmd:SCANCROP}} beholder et vindu. {{cmd:SCANERASE}} sletter et rektangel, en mangekant eller et lasso (trykk og dra): stempler, merknader, en kaffeflekk.

Det rensede bildet er det en lagret DWG-fil inneholder (et IMAGE og dets IMAGEDEF, med bildefilen ved siden av tegningen, slik som for alle bilder).

## Fest til linjene i skanningen

Med {{cmd:RASTERSNAP}} på (standard) finner objektfang også linjene i en svart-hvit skanning: endene av linjer, midtpunktene, hjørnene og kryssene, vist med vanlige fangmerker. Delen av arket under pekeren spores mens du beveger deg; zoom nok inn til at en piksel er noen få skjermpiksler. En linje som er lengre enn delen som spores, følges helt til endene.

## Sporingen

{{cmd:SCANTRACE}} gjør linjene på arket om til linjer og buer på et nytt layer (SCAN-TRACE), som ett angre-steg, med skanningen fortsatt under. Du angir:

- **Toleranse:** hvor langt en sporet linje eller bue kan ligge fra linjene på skanningen, i tegningsenheter (rapporten gir også piksler). En stram toleranse følger hver ujevnhet; en løs gir færre og rettere biter.
- **Vindu:** et hjørne av arket, eller hele arket.
- **Buer:** av gir bare linjer.
- **Rest:** det sporingen lot være, tegnes som bokser på et layer du kan slå av, eller tegnes ikke.

Sporingen finner midten av hvert strøk, følger det, tilpasser rette linjer og sirkelbuer til det, binder sammen løp som ble kuttet der en annen linje krysset, gjør nesten vannrette og nesten loddrette linjer nøyaktig vannrette og loddrette, og lukker hjørner. **Tekst og skravur blir værende som raster:** biter på størrelse med skrift settes til side, og bunter av korte parallelle linjer tas for skravur og settes også til side.

Når den er ferdig, sier den hvor mange linjer og buer den laget, toleransen, og hvor mange biter den lot være som raster. **Dette er hva pikslene ga, innenfor den toleransen, og det er ikke en påstand om at resultatet er riktig.** Sammenlign med arket: en sporing kan gå glipp av en svak linje, slå sammen to linjer som ligger svært tett, eller tegne en linje der det bare er en flekk. Rydd skanningen først (rettet ut, svart-hvitt, flekker borte), så blir resultatet mye bedre.

## Det som ikke leses

TIFF-filer lagret i fliser, BigTIFF, TIFF med JPEG- eller deflate-komprimering, Group 3-faksekoding og farger lagret i egne planer avvises med en melding; lagre dem på nytt som striper med LZW, PackBits, Group 4 eller uten komprimering. Interlacede PNG-filer avvises også. Filer over 128 MB eller 100 millioner piksler avvises, og et sporingsvindu kan inneholde høyst 64 millioner piksler.
