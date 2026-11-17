---
title: PDF-underlägg och PDF-import
summary: Lägg en PDF-sida under din ritning för att spåra och plotta den, eller gör sidans linjer och text till ritningsobjekt.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, underlägg, spåra, importera pdf, skanning, planritning, tona ut, klipp, lager, fångst, öppna pdf
from: aa301d0f
---

## Två sätt att hämta in en PDF-sida

- **Bifoga** ({{cmd:PDFATTACH}}) behåller PDF:en som en bild under din ritning. Du spårar den, fångar dess linjer, tonar ut den och klipper den, och den skrivs ut tillsammans med bladet. Ritningen sparar bara filens namn.
- **Importera** ({{cmd:PDFIMPORT}}) gör sidans linjer, kurvor, fyllningar och text till vanliga ritningsobjekt, på lager med namn efter PDF:en. De är dina att redigera, och PDF:en behövs inte efteråt.

Att öppna en PDF med {{ui:Öppna}} frågar vilket av de två du vill ha.

## Bifoga en sida

1. Skriv `PDFATTACH` (eller `PDFATT`) och välj PDF:en. Har den flera sidor skriver du sidnumret.
2. Klicka på infogningspunkten (sidans nedre vänstra hörn).
3. Tryck {{key:Enter}} för sidans verkliga storlek, eller skriv skalan: ritenheter per PDF-punkt (en punkt är 1/72 tum, så 0.3528 in i en millimeterritning).
4. Tryck {{key:Enter}} för ingen vridning, eller skriv en vinkel.

Sidan är ett objekt, likt en blockreferens: flytta, rotera, skala, kopiera, radera och lägg den på ett lager. Stäng av dess lager så försvinner den. Zooma in så ritas sidan om skarpt.

## Spåra den

Med {{ui:Fångst}} på fångar markören PDF:ens egna linjer: ändpunkter, mittpunkter och skärningar (och {{ui:Närmaste}} när den fångsten är på). Text som ritats som bokstäver på sidan fångas inte.

## Justera den

- `PDFADJUST`: **Tona ut** (0 till 80 procent), **Kontrast** (0 till 100), **Monokrom**, och **Av/på** för att dölja den utan att radera den.
- `PDFCLIP`: visa bara en rektangel eller polygon av sidan; **Ta bort** tar bort klippet.
- `PDFLAYERS`: en PDF kan ha egna lager. Kommandot listar dem; skriv ett nummer för att slå på eller av det lagret för just det här underlägget. Lager som filen har avslagna startar avslagna.

## Plotta och spara

PLOT skriver ut sidan som dess linjer, fyllningar och text (så den förblir skarp och sökbar). Bilder i PDF:en visas på skärmen men skrivs inte ut ännu.

En DWG-fil eller DXF 2000 sparar underlägget som en länk: filens namn, sidan, var den ligger, dess skala, vridning, klipp, tonning och kontrast. PDF:en själv finns inte i ritningen. Öppna ritningen igen, skriv `PDF` och välj filen igen; sidorna visas som ramar tills dess, och får sin verkliga storlek då. Äldre DXF (R12) har inga underlägg: den behåller ramen och namnet. Hur andra program läser det sparade klippet och skalan har ännu inte kontrollerats i dem.

## Importera en sida

1. Skriv `PDFIMPORT` (eller `PDFIM`) och välj PDF:en och sidan.
2. Klicka där sidans nedre vänstra hörn ska ligga.
3. Tryck {{key:Enter}} för verklig storlek, skriv en skala, eller välj **Två punkter**: sidan ritas i verklig storlek, sedan klickar du två punkter på ett avstånd du känner till och skriver det verkliga avståndet; allt skalas efter det.

Linjer blir linjer och polylinjer, cirklar och bågar känns igen, fyllda former blir heltäckande skraffering, och text blir text på ett lager som slutar med `-TEXT`. Det är ett enda steg att ångra. Bilder i PDF:en importeras inte: bifoga sidan i stället. En skanning (en sida som bara är en bild) har inga linjer att importera.

PDF-filer läses som opålitliga filer: inga skript körs, och en mycket stor sida kapas av och det anges.
