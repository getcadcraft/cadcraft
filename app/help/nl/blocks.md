---
title: Blokken maken en invoegen
summary: Maak van een getekende deur een blok, plaats het op andere posities, schalen en hoeken, en ruim ongebruikte blokken op.
keywords: blok, bmake, invoegen, ddinsert, symbool, opschonen, ontbinden, opnieuw definiëren, basispunt, verwijzing, tellen, bcount, staat, csv, attributen, gegevens extraheren
from: 125a129d
---

## Wat u gaat maken

Een deursymbool dat een blok wordt met de naam `DOOR-900`, en dat daarna drie keer wordt geplaatst: zoals getekend, 90 graden gedraaid en gespiegeld.

Een blok is een benoemde groep objecten. U tekent het één keer; elke plek waar u het gebruikt, is een **blokverwijzing** die naar die ene definitie verwijst. Het paneel {{ui:Blokken}} in het linkerpaneel toont de blokken in de tekening en hoe vaak elk wordt gebruikt.

## De deur tekenen

1. Typ `L` en druk op {{key:Enter}}.
2. Typ `0,0` en druk op {{key:Enter}}.
3. Typ `@0,900` en druk op {{key:Enter}}, en druk daarna nog eens op {{key:Enter}}. Dit is het deurblad.
4. Typ `A` en druk op {{key:Enter}}.
5. Typ `C` en druk op {{key:Enter}} om eerst het middelpunt op te geven.
6. Typ `0,0` en druk op {{key:Enter}} voor het middelpunt.
7. Typ `900,0` en druk op {{key:Enter}} voor het startpunt.
8. Typ `0,900` en druk op {{key:Enter}} voor het eindpunt. Dit is de draaiboog.
9. Klik op {{ui:Alles tonen}}.

Bogen lopen tegen de klok in van het startpunt naar het eindpunt.

## Het blok maken

1. Typ `B` en druk op {{key:Enter}}, of klik op {{ui:Maken}} in de groep Blokken.
2. Typ bij `Enter block name` de naam `DOOR-900` en druk op {{key:Enter}}.
3. Typ bij `Specify insertion base point` `0,0` en druk op {{key:Enter}}. Dit is het scharnier: het punt dat op de plek komt waar u het blok plaatst.
4. Sleep bij `Select objects` een venster rond het deurblad en de boog.
5. Druk op {{key:Enter}}.

De geschiedenis zegt `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Het paneel {{ui:Blokken}} toont DOOR-900 met `1×` ernaast: één verwijzing. Klik op de deur: die wordt nu als één object geselecteerd, een "Blokverwijzing".

:::tip
U kunt de objecten eerst selecteren en daarna `B` typen. CadCraft vraagt dan nog steeds naar de naam en het basispunt, en gebruikt daarna uw selectie.
:::

## Het blok invoegen

1. Typ `I` en druk op {{key:Enter}}, of klik naast DOOR-900 in het paneel {{ui:Blokken}} op {{ui:Invoegen}}.
2. Bij `Enter block name or [File/Library] <DOOR-900>` drukt u op {{key:Enter}}. (De knop {{ui:Invoegen}} van het paneel vult de naam voor u in.)
3. De deur volgt het kruishaar. Klik waar het scharnier moet komen.

Er verschijnt een tweede deur.

## Gedraaid of geschaald invoegen

1. Typ `I` en druk op {{key:Enter}}, en druk daarna op {{key:Enter}} om de naam te accepteren.
2. Bij `Specify insertion point [Scale/Rotate]` typt u `R` en drukt u op {{key:Enter}}.
3. Typ `90` en druk op {{key:Enter}}. De voorbeeldweergave draait.
4. Klik om het te plaatsen.

Typ in plaats daarvan `S` om een schaalfactor in te stellen; die geldt voor beide richtingen. De schaal en de rotatie worden onthouden voor de volgende invoeging. Om een deur te spiegelen, voegt u hem in en gebruikt u daarna {{cmd:MIRROR}} op de verwijzing.

## Een geplaatst blok wijzigen

Selecteer een blokverwijzing. In het rechterpaneel kunt u de {{ui:X}}, {{ui:Y}}, {{ui:Schaal X}}, {{ui:Schaal Y}} en {{ui:Rotatie}} wijzigen. Een negatieve {{ui:Schaal X}} spiegelt het blok.

## Een blok opnieuw definiëren

Om alle deuren in één keer te wijzigen, maakt u een blok met dezelfde naam:

1. Teken de nieuwe versie van de deur.
2. Typ `B` en druk op {{key:Enter}}, en typ `DOOR-900`.
3. Bij `Block "DOOR-900" already exists. Redefine it?` typt u `Y` en drukt u op {{key:Enter}}.
4. Geef het basispunt op en selecteer de nieuwe objecten, zoals eerder.

Elke verwijzing naar DOOR-900 toont nu de nieuwe versie.

Of bewerk het blok zelf: {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blok bewerken}} ({{cmd:BEDIT}}) opent het op zichzelf, en {{ui:Blok opslaan}} zet het terug. Zie [Blokattributen](topic:attributes#change-a-block-the-block-editor).

## Blokken tellen en een staat exporteren

Typ {{cmd:COUNT}} (of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blokken tellen}}), en daarna:

- klik op één deur: elke deur in deze ruimte wordt geselecteerd, en de geschiedenis zegt hoeveel er hier zijn en in de hele tekening;
- of druk op {{key:Enter}}: de geschiedenis somt elk blok met zijn aantal op, het meeste eerst;
- of typ `E`, en daarna `C` voor een CSV met de aantallen (in het model, op bladen, totaal) of `A` voor één rij per verwijzing met de laag, positie, rotatie en elke attribuutwaarde: een staat die u in een spreadsheet kunt openen.

Naamloze blokken (maatvoeringen, tabellen) en verwijzingen binnen andere blokken worden niet geteld. Cellen die beginnen als een formule (`=`, `+`, `-`, `@`) krijgen een voorloopse `'`, zodat een spreadsheet ze als tekst toont.

## Ontbinden en opschonen

- {{cmd:EXPLODE}} (`X`) zet een geselecteerde blokverwijzing terug in losse objecten. De definitie blijft bestaan.
- {{cmd:PURGE}} (`PU`) verwijdert blokdefinities die niets meer gebruikt. De geschiedenis zegt hoeveel er zijn verwijderd.

## Blocknamen

Een naam kan tot 255 tekens lang zijn en mag spaties bevatten, maar mag niet beginnen met een asterisk en mag geen `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` of een backtick bevatten. Wanneer u DXF R12 opslaat, worden namen in hoofdletters geschreven, worden andere tekens dan letters, cijfers, `$`, `_` en `-` veranderd in `_`, en worden namen afgekapt tot 31 tekens; de geschiedenis zegt hoeveel er zijn gewijzigd. Korte namen in hoofdletters, cijfers en koppeltekens, zoals `DOOR-900`, blijven ongewijzigd. Een opgeslagen DWG houdt namen zoals u ze typte, met hoofd- en kleine letters; alleen tekens die DWG niet toestaat, veranderen (een `|` wordt `$0$`, andere worden `_`).

## Een blok of objecten naar een eigen bestand schrijven

Typ `W` ({{cmd:WBLOCK}}) en kies **Objecten**, **Blok** of **Hele tekening**. Het resultaat is een nieuwe DWG of DXF die alleen de lagen, stijlen en blokken bevat die het gebruikt, met uw basispunt als oorsprong. Voor objecten kunt u ze bewaren, in een blok omzetten of uit deze tekening verwijderen.

## Veelvoorkomende fouten

- **Het blok kwam ver van het kruishaar terecht.** Het basispunt lag niet op de objecten. Maak het blok opnieuw met het basispunt op een hoek of een scharnier.
- **"Geen objecten geselecteerd; niets gemaakt."** U drukte op {{key:Enter}} voordat u iets had geselecteerd.
- **"Deze tekening heeft nog geen blokken: F voegt er een in uit een bestand, L uit de bibliotheek (of maak er een met BLOCK)."** Typ `F` om een blok uit een andere tekening te halen, of `L` voor de bibliotheek. Zie [Invoegen uit een bestand of de bibliotheek](topic:insert-from-file-and-library).
- **"Een viewport kan niet in een blok."** Laat viewportkaders buiten de selectie.
