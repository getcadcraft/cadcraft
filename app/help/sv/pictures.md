---
title: Bilder i en ritning
summary: Placera en PNG- eller JPEG-bild, klipp den till en rektangel eller en polygon, visa bilderna en DWG använder, och plotta dem skarpa.
keywords: pastearea, parea, kopiera yta, kopierad yta, markupcraft, verklig storlek, riktig storlek, överlägg, ole, ole2frame, inbäddat objekt, klistra in bild, klistra in skärmbild, ctrl+v, bild från urklipp, skärmbild, bild, imageattach, iat, image, imageclip, klipp, png, jpeg, jpg, logotyp, foto, raster, imagedef, xref, plot, pdf, upplösning
from: 4025ac97
---

## Det du ska skapa

En företagslogotyp placerad i ett ritningshuvud, klippt till den del du vill ha, och en PDF där den skrivs ut i sin egen upplösning.

## Placera en bild

1. Skriv {{cmd:IMAGEATTACH}} (eller `IAT`) och tryck på {{key:Enter}}. Välj en PNG- eller JPEG-fil.
2. `Ange nedre vänstra hörnet`: klicka, eller skriv en punkt.
3. `Ange bredd`: bredden i ritningsenheter. {{key:Enter}} behåller den föreslagna bredden: en enhet per pixel, eller bredden du angav för den här filen förra gången (prompten säger vilken).
4. `Ange rotationsvinkel`: tryck på {{key:Enter}} för ingen rotation.

Bilden är ett enda objekt: markera den via dess ram, och flytta, kopiera, rotera, skala eller radera den som vilket block som helst.

:::note
Bildfilen stannar i ritningen medan den är öppen. En sparad DWG anger filnamnet, som andra program gör; den innehåller inte pixlarna. Behåll bilden bredvid ritningen.
:::

## Klistra in en skärmbild eller en kopierad bild

1. Kopiera bilden (en skärmbild med {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=ditt skärmbildsverktyg}}, eller Kopiera bild i ett annat program eller en webbläsare).
2. Peka på var den ska stå på ritningen och tryck på {{key:Mod+V}}.

Bildens nedre vänstra hörn hamnar vid pekaren (eller mitt i vyn), 40 % så bred som det du ser; flytta, skala och klipp den som vilken bild som helst. Dess namn är ritningens med `-picture-1.png` (sedan `-2`, …), och historiken säger det. {{ui:Redigera}} › {{ui:Mer}} › {{ui:Klistra in en bild}} gör detsamma från menyn (webbläsaren kan fråga först).

En DWG behåller bara namnet på en bilds fil, så när du sparar ritningen sparas bilden också som en egen fil. Behåll de två i samma mapp: ritningen visar bilden därifrån. I webbläsaren är det en andra nedladdning, och historiken säger det. Om det bara finns CadCraft-objekt på urklippet klistrar {{key:Mod+V}} in dem, som förut.

## Klistra in en yta som kopierats i MarkupCraft

{{ui:Kopiera yta}} i MarkupCraft kopierar en del av ett blad som en bild som vet hur stor den är. CadCraft klistrar in den i den storleken.

1. I MarkupCraft, kopiera ytan (en rektangel, en cirkel eller en frihandsform; {{ui:Kopiera som överlägg}} om du vill se din ritning genom den).
2. I CadCraft, tryck på {{key:Mod+V}}, eller skriv {{cmd:PASTEAREA}} (eller `PAREA`), eller välj {{ui:Redigera}} › {{ui:Mer}} › {{ui:Klistra in en kopierad yta}}.
3. `Ange nedre vänstra hörnet på den kopierade ytan`: klicka, eller skriv en punkt. En ram i ytans storlek följer pekaren.

Så stor blir den:

- **Bladet hade en ritningsskala:** i sin verkliga storlek, i ritningens enheter (en 1:50-detalj av en 2 m lång trappa är 2 m i en ritning i meter, och 78.74 in i en ritning i tum). Mer frågas inte.
- **Bladet hade ingen skala:** CadCraft säger dess storlek på papper och frågar efter en skala: skriv `100` för ett blad i 1:100, tryck på {{key:Enter}} för pappersstorleken, eller skriv `P`, klicka två punkter på den inklistrade bilden och skriv hur långt isär de verkligen är (som {{cmd:SCANSCALE}} gör). Det nedre vänstra hörnet stannar där du placerade det.

En ritning utan enheter tar millimeter, som ett PDF-underlägg gör. Ett överlägg behåller sitt papper genomskinligt och börjar lika blekt som det kopierades; utanför en cirkel eller frihandsform är det också genomskinligt. Den inklistrade ytan är en bild som alla andra: flytta, rotera, skala, klipp eller radera den, och hela inklistringen är ett enda steg att ångra. Sparad som en DWG är den en IMAGE med sin tona och transparens.

{{key:Mod+V}} klistrar in ytan när bilden på urklippet är ytans, eller när ytan kopierades efter något du kopierat i CadCraft (och under de senaste 6 timmarna). Annars klistrar den in som förut. {{cmd:PASTEAREA}} klistrar in den senast kopierade ytan när som helst.

## Visa bilderna en DWG använder

En DWG lagrar bara var dess bilder fanns, så CadCraft visar varje bild som en ram med dess filnamn.

1. Skriv {{cmd:IMAGE}} (eller `IM`). Kommandoraden listar varje bildfil och om den visas.
2. Välj filerna (flera samtidigt). En fil vars namn innehåller det namn ritningen anger räknas också, eftersom export ofta lägger till ett projektprefix.

## Klipp en bild

1. Skriv {{cmd:IMAGECLIP}} (eller `ICL`) och markera bilden.
2. Välj `R` och klicka två hörn, eller `P` och klicka punkterna i en polygon, och tryck sedan på {{key:Enter}}. `D` tar bort klippet.

## Plotta bilder

Bilder går in i PDF-filen som bilder, i sin egen upplösning och under linjerna. I dialogrutan {{ui:Plotta till PDF}} kan {{ui:Bilder}} begränsa dem till 600, 300 eller 150 dpi för att göra filen mindre. En JPEG går in som den är.

## Vad som sparas var

| Format | Bilder |
|---|---|
| DWG (alla versioner) | Som bilder (IMAGE), med sitt klipp |
| DXF | Som sina ramar med filnamnet; sparandet säger det |

## Objekt från andra program (OLE)

En ritning kan innehålla objekt som ett annat program skapat, till exempel en bild från ett målarprogram eller ett kalkylområde (OLE-objekt). CadCraft kör eller redigerar dem inte, och kan inte infoga nya. Det den gör:

- **I en DXF** öppnas ett OLE-objekt som en ram. Om objektet sparade en bild av sig självt och den bilden är en bitmapp, ritas bilden inuti ramen; annars bär ramen en etikett med objektets typ, till exempel ”Microsoft Excel Worksheet (OLE)”. Du kan flytta, kopiera och radera ramen som ett block. {{cmd:SAVEAS}} till DXF 2000 skriver den som ett OLE-objekt igen, med sina data oförändrade.
- **I en DWG** behålls objekten och skrivs tillbaka när du sparar som DWG, byte för byte, men de **visas inte**: en DWG behåller ett objekts plats inuti sina egna data, och CadCraft läser den ännu inte. Historiken säger hur många som behölls. Skriv {{cmd:OLELIST}} för att se vad de är (typ, storlek, om varje sparade en bild) och för att lägga en kopia av en bild där du väljer: **Placera** frågar efter numret, det nedre vänstra hörnet och bredden, och ritar en ram med bilden i. Den kopian är en ram du kan flytta eller radera; objektet självt står kvar i ritningen och skrivs fortfarande tillbaka när du sparar.
- Ett objekt som kommit från en DXF sparas i en DWG bara som sin ram och etikett; historiken säger det. Spara som DXF 2000 för att behålla objektet självt.
- Bilder som är metafiler (vad många program sparar) ritas inte: ramen och etiketten visas i stället.

## Vanliga misstag

| Du ser | Orsak | Åtgärd |
|---|---|---|
| En ram med ett filnamn | CadCraft har inte filen | {{cmd:IMAGE}}, och välj sedan filen |
| ”That is not a picture” | Objektet du valde är inte en bild | Välj bildens ram |
