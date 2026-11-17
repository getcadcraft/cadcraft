---
title: Ordna en ritning med klasser
summary: Klasser sorterar objekt på ett andra sätt, över lager (Belysning-Armatur-Spot): visa och dölj dem, ge dem en färg, linjetyp, linjetjocklek, fyllning och textstil som objekt kan ta "enligt klass", och ange vilken klass nya objekt hamnar i.
keywords: klass, klasser, CLASSES, CLS, CLASS, enligt klass, ByClass, aktiv klass, använd vid skapande, Ingen, designlager, lagerskala, höjd, Vectorworks
from: 672de9cb
---

Lager anger *var* ett objekt hör hemma i ritningen; klasser anger *vad* det är. En vägg på lagret `Våning 1` kan ligga i klassen `Väggar-Exteriör`, och en spotlight på lagret `Tak` i klassen `Belysning-Armatur-Spot`. Du kan dölja alla lampor på alla lager samtidigt, eller plotta alla yttervägger tjockare, utan att flytta något mellan lager.

Varje objekt börjar i klassen **Ingen**. En ritning utan egna klasser fungerar precis som tidigare.

## Öppna panelen Klasser

Skriv `CLASSES` (eller `CLS`) och tryck på {{key:Enter}}, eller välj {{ui:Klasser…}} i menyn {{ui:Mer}} i gruppen {{ui:Vy}}. Panelen öppnas över ritningen och förblir öppen medan du ritar.

- **Lägg till en klass:** skriv dess namn i rutan överst och tryck på {{key:Enter}}. Ett `-` skapar en nivå: `Belysning-Armatur-Spot` placeras under `Belysning-Armatur`, som ligger under `Belysning`; de saknade nivåerna läggs till åt dig.
- **Visa eller dölj:** ögat bredvid en klass. Att dölja en klass döljer alla klasser under den, på skärmen och på papper.
- **Aktiv klass:** den runda knappen. Nya objekt du ritar hamnar i den aktiva klassen.
- **Välj en klass:** klicka på dess namn. Knapparna och inställningarna under listan verkar sedan på den.

Siffran i slutet av varje rad är hur många objekt som finns i klassen (i modellen, på bladen och i blockdefinitioner).

## Lägg objekt i en klass

Markera objekten, välj en klass i panelen och välj {{ui:Ange klass}}. Markera först {{ui:Enligt klass}} för att objekten ska ta sin färg, linjetyp, linjetjocklek, fyllning och textstil från klassen. Du kan också:

- skriva `CLASS` med objekt markerade och ange ett klassnamn (ett nytt namn skapar klassen);
- skriva `CLASS` utan något markerat för att ange den aktiva klassen; `?` listar klasserna med deras antal;
- använda avsnittet {{ui:Klass}} i panelen Egenskaper: klassen, och en omkopplare {{ui:… enligt klass}} för färg, linjetyp och linjetjocklek (fyllning för skraffering, textstil för text);
- välja efter klass med `QSELECT`: välj egenskapen {{ui:Klass}}.

{{ui:Markera dess objekt}} markerar varje objekt i den valda klassen på det öppna bladet (eller i modellen).

## Hur ett objekt ritas: objekt, klass, lager

Ett objekts färg, linjetyp, linjetjocklek, fyllning och textstil kan vara **enligt klass**, på samma sätt som de kan vara enligt lager. CadCraft tittar i denna ordning:

1. Objektets eget värde, om det inte är enligt klass.
2. Klassens värde, när objektet tar det enligt klass och klassen har ett.
3. Lagrets värde.

En klass vars färg (eller linjetyp …) är {{ui:Inte angivet}} skickar objektet vidare till sitt lager. Välj en klass och ange dess {{ui:Färg}}, {{ui:Linjetyp}}, {{ui:Linjetjocklek}}, {{ui:Fyllning (skraffering)}} och {{ui:Textstil}} under knapparna. Markera {{ui:Använd vid skapande}} för att nya objekt som ritas i klassen tar alla dessa enligt klass.

Varje ändring i panelen är ett enda steg att ångra med {{ui:Ångra}}.

## Byt namn och ta bort

{{ui:Byt namn}} redigerar namnet på plats: tryck på {{key:Enter}} för att behålla det, {{key:Esc}} för att lämna det. Klasserna under den följer med (`Belysning-Spot` blir `Ljus-Spot` när `Belysning` blir `Ljus`), och så gör deras objekt och eventuella vyportsöverskrivningar.

{{ui:Ta bort}} tar bort klassen och alla klasser under den. Deras objekt flyttas till **Ingen**. Ett {{ui:Ångra}} för tillbaka allt. **Ingen** kan varken byta namn på eller tas bort.

## Designlager

Under {{ui:Designlager}} kan varje lager ha en skala (`1:50`) och en höjd. Ett designlager är ett vanligt lager: modellrum och blad fungerar som tidigare, och skalan och höjden sparas i ritningen för de verktyg som ska använda dem.

## I DWG- och DXF-filer

Klasser sparas i varje DWG-version som CadCraft sparar och i DXF (R12 och 2000). Varje objekts klass är dess egna utökade data (applikation `CADCRAFT_CLASS`), så AutoCAD och andra program behåller den med objektet. Klasslistan, färgerna och synligheten sparas i ett oanvänt block med namnet `CADCRAFT_CLASSES`; om ett annat program rensar det blocket hittar CadCraft ändå varje objekts klass, och klasserna återkommer med standardinställningar.

Andra program känner inte till klasser: de ritar varje objekt med sina egna värden eller lagrets värden.

Se även [Klassöverskrivningar per vyport](topic:viewport-overrides) och [Ordna en ritning med lager](topic:layers).
