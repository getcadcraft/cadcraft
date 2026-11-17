---
title: Stycklistor per zon
summary: Markera områden i en ritning som zoner och placera en tabell för varje zon som räknar blocken inuti den. Tabellerna följer ritningen när du arbetar, och du väljer vilka kolumner var och en visar.
keywords: stycklista, BOM, delförteckning, förteckning, zon, område, tabell, räkna, antal, attribut, kolumner, artikelnummer, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

En **zon** är ett namngivet område i ritningen. En **stycklistetabell** listar vad som ligger inuti en zon, eller i hela ritningen: varje block med dess antal och dess attributvärden. En ritning kan ha så många zoner och tabeller som du behöver, och en zon kan ha flera tabeller med olika kolumner.

Verktygen finns på fliken Block under {{ui:Stycklista}}, i menyn Mer i gruppen Block, och de kan också skrivas.

## Skapa en zon

Skriv {{cmd:BOMZONE}} och antingen

- klicka på två motstående hörn för en rektangel,
- välj {{ui:Polygon}}, klicka på varje hörn och tryck på Enter för att stänga den, eller
- välj {{ui:Objekt (O)}} och peka på en sluten polylinje, en cirkel, en ellips eller en sluten spline. Dess kontur kopieras. Objektet står kvar som det är.

Skriv sedan zonens namn. Zonen ritas som en streckad kontur med sitt namn ovanför det övre vänstra hörnet, på lagret `BOM-ZONES`, som inte skrivs ut. Slå på utskrift för det lagret om du vill ha zoner på papper.

En zon är en vanlig sluten polylinje: flytta den, töj den eller dra i dess handtag, så följer namnet med. För att byta namn på en zon, redigera namnets text, eller använd {{cmd:BOMZONE}} och {{ui:Byt namn}}. {{ui:Zoner}} listar varje zon och hur många tabeller den har.

## Placera en tabell

Skriv {{cmd:BOMTABLE}} (eller {{cmd:BOM}}), peka på zonens kontur eller dess namn, ange texthöjden och klicka där tabellens övre vänstra hörn ska ligga. Tryck på Enter i stället för att peka på en zon, eller välj {{ui:Hela}}, för en tabell över hela ritningen.

En ny tabell visar artikelnummer, antal, blocknamn och en kolumn för varje attribut som blocken bär (de första sex. De övriga erbjuds, men är avbockade). Block med samma namn och samma attributvärden delar en rad.

## Vad som räknas som inuti

- Ett block räknas i den zon som innehåller dess **infogningspunkt**.
- En linje, båge, cirkel, polylinje, ellips, spline eller skraffering räknas **helt** i den zon som innehåller mitten av dess utsträckning (för en linje, dess mittpunkt). Dess längd klipps inte vid zonens kant.
- En punkt exakt på kanten är inuti.
- Zoner kan överlappa varandra. Varje zon räknas för sig, så ett objekt i överlappningen finns i båda tabellerna.

## Tabeller följer ritningen

När du lägger till, flyttar, kopierar eller raderar ett block, redigerar ett attribut eller ändrar form på eller flyttar en zon, ritas varje tabell om i samma steg. Ångra tar tillbaka din ändring och tabelländringen tillsammans.

För att en tabell ska sluta följa ritningen, bocka i {{ui:Fryst}} i dess inställningar. En fryst tabell ändras bara när du redigerar dess inställningar eller skriver {{cmd:BOMUPDATE}}, som uppdaterar alla tabeller direkt.

## Välj kolumnerna

Markera en tabell och skriv {{cmd:BOMEDIT}}. I dialogrutan:

- **Kolumner**: bocka i de som ska visas (nummer, antal, namn, lager, längd, area, anmärkningar och varje attribut), skriv egen rubrik för vilken som helst och flytta dem upp eller ned.
- {{ui:Gruppera rader efter}}: blocknamn och attributvärden, enbart blocknamn, lager eller ett attribut. I en sammanslagen rad står "varierar" där ett värde skiljer sig mellan block.
- {{ui:Sortera efter}} valfri kolumn, stigande eller fallande.
- {{ui:Rubrik}}, {{ui:Visa rubriken}} och {{ui:Summaraden}}.
- {{ui:Räkna linjearbete per lager}} lägger till en rad per lager med antalet objekt, deras totala längd och, för slutna former, deras totala area, i ritningsenheter.
- **Anmärkningar**: bocka i kolumnen Anmärkningar och skriv sedan en anmärkning för vilken rad som helst i tabellen längst ned i dialogrutan.

Varje tabell behåller sina egna val.

## Artikelnummer

En rad behåller sitt artikelnummer så länge den finns i tabellen. En ny rad får nästa lediga nummer, och ett nummer som redan delats ut används aldrig igen. Då stämmer ballonger och anteckningar som hänvisar till ett nummer. {{ui:Numrera om objekt}} numrerar dem från 1 i den ordning de visas.

En rad identifieras av det den grupperar: ändrar du hur raderna grupperas, eller ändrar ett attributvärde som grupperingen använder, räknas raden som en ny.

## Export och andra program

{{cmd:BOMEXPORT}}, eller {{ui:Exportera CSV}} i dialogrutan, sparar en tabell som en .csv-fil för ett kalkylblad.

I en DWG- eller DXF-fil är en tabell ett vanligt block av linjer och text, så andra program visar och skriver ut den som den ritats. Där är den inte ett tabellobjekt, och den uppdateras inte i andra program. Länken till dess zon behålls i filen som utökad data som CadCraft läser tillbaka, så tabellen blir levande igen när du öppnar ritningen i CadCraft. En R12-DXF av en ritning utan blad behåller inte inställningen "skrivs inte ut" för zonens lager.

Att spränga en tabell gör den till lösa linjer och text och avslutar länken.
