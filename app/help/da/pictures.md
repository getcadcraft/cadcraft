---
title: Billeder i en tegning
summary: Placér et PNG- eller JPEG-billede, klip det til et rektangel eller en polygon, vis de billeder en DWG bruger, og plot dem skarpt.
keywords: pastearea, parea, kopieret areal, markupcraft, rigtig størrelse, rigtig størrelse, overlay, ole, ole2frame, indlejret objekt, indsæt billede, indsæt skærmbillede, ctrl+v, udklipsholder billede, skærmbillede, billede, image, imageattach, iat, image, imageclip, klip, png, jpeg, jpg, logo, foto, raster, imagedef, xref, plot, pdf, opløsning
from: 4025ac97
---

## Hvad du skal lave

Et firmalogo placeret i et tegningshoved, klippet til den del, du vil have, og en PDF, hvor det udskrives i sin egen opløsning.

## Placér et billede

1. Skriv {{cmd:IMAGEATTACH}} (eller `IAT`) og tryk {{key:Enter}}. Vælg en PNG- eller JPEG-fil.
2. `Specify the lower-left corner`: klik, eller skriv et punkt.
3. `Specify its width`: bredden i tegnenheder. {{key:Enter}} beholder den tilbudte bredde: én enhed pr. pixel, eller den bredde, du gav denne fil sidst (ledeteksten siger, hvilken).
4. `Specify its rotation angle`: tryk {{key:Enter}} for ingen rotation.

Billedet er ét objekt: vælg det via dets ramme, og flyt, kopiér, roter, skalér eller slet det som enhver blok.

:::note
Billedfilen bliver hos tegningen, mens den er åben. En gemt DWG navngiver filen, som andre programmer gør; den indeholder ikke pixlene. Behold billedet ved siden af tegningen.
:::

## Indsæt et skærmbillede eller et kopieret billede

1. Kopiér billedet (et skærmbillede med {{pick:windows=Windows-tast+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=dit skærmbilledeværktøj}}, eller Kopiér billede i et andet program eller en browser).
2. Peg ddér, hvor det skal være på tegningen, og tryk {{key:Mod+V}}.

Billedets nederste venstre hjørne lander ved markøren (eller midt i visningen), i en bredde på 40 % af det, du ser. Flyt, skalér og klip det som ethvert billede. Dets navn er tegningens navn med `-picture-1.png` (derefter `-2` osv.), og historikken siger det.
{{ui:Redigér}} › {{ui:Mere}} › {{ui:Sæt et billede ind}} gør det samme fra menuen (browseren kan spørge først).

En DWG gemmer kun navnet på et billedes fil. Så når du gemmer tegningen, gemmes billedet også som sin egen fil. Behold de to i samme mappe, for tegningen viser billedet derfra. I browseren er det en anden download, og historikken siger det. Med kun CadCraft-objekter på udklipsholderen indsætter {{key:Mod+V}} dem, som før.

## Indsæt et område kopieret i MarkupCraft

{{ui:Kopiér areal}} i MarkupCraft kopierer en del af et ark som et billede, der ved, hvor stort det er. CadCraft indsætter det i den størrelse.

1. Kopiér området i MarkupCraft (et rektangel, en cirkel eller en friform; {{ui:Kopiér som overlay}}, hvis du vil se din tegning igennem det).
2. I CadCraft trykker du {{key:Mod+V}}, eller skriver {{cmd:PASTEAREA}} (eller `PAREA`), eller vælger {{ui:Redigér}} › {{ui:Mere}} › {{ui:Sæt et kopieret areal ind}}.
3. `Specify the lower-left corner of the copied area`: klik, eller skriv et punkt. En ramme i områdets størrelse følger markøren.

Sådan bliver det stort:

- **Arket havde en tegningsskala:** i sin rigtige størrelse, i tegningens enheder (en 1:50-detalje af en 2 m trappe er 2 m lang i en meter-tegning, 78.74 in i en tomme-tegning). Intet mere spørges om.
- **Arket havde ingen skala:** CadCraft siger, hvor stort det er på papiret, og spørger efter en skala. Skriv `100` for et 1:100-ark, tryk {{key:Enter}} for papirstørrelsen, eller skriv `P`, klik to punkter på det indsatte billede og skriv, hvor langt fra hinanden de virkelig ligger (ligesom {{cmd:SCANSCALE}} gør). Det nederste venstre hjørne bliver, hvor du placerede det.

En tegning uden enheder tager millimeter, ligesom et PDF-underlag gør. Et overlay beholder sit papir gennemsigtigt og starter så svagt, som det var, da det blev kopieret. Uden for en cirkel eller friform er det også gennemsigtigt. Det indsatte område er et billede som ethvert andet: flyt, roter, skalér, klip eller slet det. Hele indsættelsen er ét trin i fortryd. Gemt som DWG er det et IMAGE med sin udtoning og gennemsigtighed.

{{key:Mod+V}} indsætter området, når billedet på udklipsholderen er områdets, eller når området blev kopieret efter noget, du kopierede i CadCraft (og inden for de sidste 6 timer). Ellers indsættes det som før. {{cmd:PASTEAREA}} indsætter det sidst kopierede område når som helst.

## Vis billederne en DWG bruger

En DWG gemmer kun, hvor dens billeder var. CadCraft viser derfor hvert billede som en ramme med sit filnavn.

1. Skriv {{cmd:IMAGE}} (eller `IM`). Kommandolinjen lister hver billedfil og om den vises.
2. Vælg filerne (flere ad gangen). En fil, hvis navn indeholder det navn, tegningen angiver, tæller også med, for eksporter tilføjer ofte et projektpræfiks.

## Klip et billede

1. Skriv {{cmd:IMAGECLIP}} (eller `ICL`) og vælg billedet.
2. Vælg `R` og klik to hjørner, eller `P` og klik punkterne i en polygon, og tryk derefter {{key:Enter}}. `D` fjerner klippet.

## Plot billeder

Billeder går ind i PDF'en som billeder, i deres egen opløsning og under linjerne. I dialogen {{ui:Plot}} kan {{ui:Billeder}} begrænses til 600, 300 eller 150 dpi for at gøre filen mindre. En JPEG går ind uændret.

## Hvad der gemmes hvor

| Format | Billeder |
|---|---|
| DWG (alle versioner) | Som billeder (IMAGE), med deres klip |
| DXF | Som deres rammer med filnavnet. Gemningen siger det |

## Objekter fra andre programmer (OLE)

En tegning kan indeholde objekter, som et andet program har lavet, såsom et billede fra et malerprogram eller et regnearksområde (OLE-objekter). CadCraft kører eller redigerer dem ikke, og kan ikke indsætte nye. Det den gør:

- **I en DXF** åbnes et OLE-objekt som en ramme. Hvis objektet gemte et billede af sig selv, og billedet er en bitmap, tegnes billedet inde i rammen. Ellers bærer rammen en etiket med objektets type, såsom »Microsoft Excel Worksheet (OLE)«. Du kan flytte, kopiere og slette rammen som en blok. {{cmd:SAVEAS}} til DXF 2000 skriver den tilbage som et OLE-objekt, med dens data uændret.
- **I en DWG** bevares objekterne og skrives tilbage, når du gemmer som DWG, byte for byte. Men de **vises ikke**: en DWG gemmer et objekts plads inde i sine egne data, og CadCraft læser det ikke endnu. Historikken siger, hvor mange der blev bevaret. Skriv {{cmd:OLELIST}} for at se, hvad de er (type, størrelse, om hvert gemte et billede), og for at lægge en kopi af et billede, hvor du vil: **Placér** spørger efter nummeret, det nederste venstre hjørne og bredden, og tegner en ramme med billedet i. Den kopi er en ramme, du kan flytte eller slette. Selve objektet bliver i tegningen og skrives stadig tilbage, når du gemmer.
- Et objekt, der kom fra en DXF, gemmes i en DWG kun som sin ramme og etiket. Historikken siger det. Gem som DXF 2000 for at bevare selve objektet.
- Billeder, der er metafiler (som mange programmer gemmer), tegnes ikke. Rammen og etiketten vises i stedet.

## Almindelige fejl

| Du ser | Hvorfor | Løsning |
|---|---|---|
| En ramme med et filnavn | CadCraft har ikke filen | {{cmd:IMAGE}}, og vælg derefter filen |
| »That is not a picture« | Objektet, du valgte, er ikke et billede | Vælg billedets ramme |
