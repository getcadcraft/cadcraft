---
title: Dela skärmen
summary: Visa ritningen i två, tre eller fyra rutor med egen zoom, placera ett blad bredvid modellen och öppna flera ritningar sida vid sida.
keywords: dela, dela skärm, rutor, vports, viewports, plattlagd, bredvid varandra, staplad, två ritningar, flikar, dokumentflikar, jämför, avdelare, modell och blad, flera ritningar, öppna ritningar
from: ee2f034b
---

## Vad du lär dig

Hur du tittar på en ritning i flera rutor samtidigt, var och en med egen zoom, och hur du öppnar flera ritningar och ser dem sida vid sida.

## Dela en ritning i rutor

1. Öppna en ritning, eller rita några linjer och cirklar.
2. Öppna {{ui:Vy}} › {{ui:Mer}} och välj {{ui:Dela sida vid sida}} (eller skriv {{cmd:VPORTS}}, sedan `2`, sedan {{key:Enter}}).

Ritområdet delas i två rutor, som båda visar samma vy. Den aktiva rutan har en blå ram och får korsmarkören.

3. Klicka i den andra rutan. Den blir aktiv. (Det första klicket byter bara ruta; klicka igen för att välja.)
4. Zooma med hjulet. Bara den rutan zoomar.
5. Dra linjen mellan rutorna för att göra en bredare. {{key:Home}} på en fokuserad avdelare sätter tillbaka den i mitten.

{{cmd:VPORTS}} tar också `3` (två rutor på ena sidan och en stor på andra: `L` eller `R`), `4`, och `SI` för att återgå till en ruta. Den aktiva rutans vy fyller då hela ytan. På ett blad lägger {{cmd:VPORTS}} i stället till en vyport på bladet (som i AutoCAD); skriv {{cmd:SPLIT}} där, eller använd menyn Vy.

## Rita från en ruta till en annan

1. Dela sida vid sida, och zooma varje ruta till ett annat hörn av ritningen.
2. Skriv `L` och tryck {{key:Enter}}, och klicka på första punkten i den vänstra rutan.
3. Klicka en gång i den högra rutan för att göra den aktiv, och klicka sedan på andra punkten där.

Linjen går mellan de två platserna. Ett kommando fortsätter när du byter ruta, och gummibandet syns i alla rutor.

## Modellen bredvid ett blad

1. Dela sida vid sida.
2. Klicka i den högra rutan och klicka sedan på ett blads flik under ritningen.

Den högra rutan visar bladet; den vänstra visar fortfarande modellen. Varje ruta behåller sitt eget utrymme, så du kan rita på modellen och se bladets vyport följa med.

## Flera ritningar i ett fönster

1. Öppna en ritning. Öppna sedan en annan (eller tryck {{ui:Ny}}).

Varje ritning öppnas i sin egen flik över ritområdet. Klicka på en flik för att byta; kommandoraden, panelerna och ångra följer ritningen du byter till. {{key:Mod+C}} i en ritning och {{key:Mod+V}} i en annan kopierar objekt mellan dem.

2. Klicka på {{ui:Tile the open drawings side by side}}-ikonen (delningsikonen i slutet av flikarna), eller den staplade ikonen bredvid den.

Varje ruta visar nu en av de öppna ritningarna, upp till fyra. Klicka i en ruta för att arbeta i den ritningen.

3. Klicka på {{ui:×}} på en flik för att stänga den ritningen. Om den har osparade ändringar frågar CadCraft först.

:::tip
Om du öppnar en ritning medan fönstret bara innehåller en ny, orörd ritning använder den fliken i stället för att lägga till en.
:::

## Panorera och zooma tillsammans

För att jämföra två revisioner, lägg dem sida vid sida och klicka sedan på {{ui:Länka rutornas vyer}} (länkikonen i slutet av flikarna), eller välj den i {{ui:Vy}} › {{ui:Mer}}, eller skriv {{cmd:LINKVIEWS}} och `ON`. Nu flyttar en panorering eller zoom i en ruta varje ruta som visar modellen (eller varje ruta som visar ett blad) till samma plats, så att de två ritningarna ligger på linje. {{cmd:LINKVIEWS}} `OFF` låter varje ruta röra sig på egen hand igen.

## Vanliga misstag

- **Mitt klick gjorde ingenting.** Det gjorde den rutan aktiv. Klicka igen för att välja eller rita.
- **Hjulet zoomade fel ruta.** Hjulet zoomar rutan under pekaren och gör den aktiv.
- **Rutorna gick tillbaka till en.** Att öppna en ritning visar den som den sparades; en ritning som sparats utan rutor öppnas i en.
- **Att lämna sidan varnar för osparade ändringar som jag inte ser.** En annan flik har en ritning med ändringar. Byt till den och spara, eller lämna utan att spara.
