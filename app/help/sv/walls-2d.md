---
title: Rita smarta väggar, dörrar och fönster i 2D
summary: Rita väggar som en polylinje, sammanfoga dem snyggt och placera dörrar och fönster som följer med väggen. Allt i 2D, utan 3D-modell.
keywords: vägg, väggar, WALL, WA, dörr, DOOR, DR, fönster, WINDOW, WN, DELOPENING, smart vägg, planritning, svängning, gångjärn, öppning
from: 45845d49
---

Väggar här är 2D-ritobjekt. De skapar ingen 3D-modell, så en plan är lika lätt som en linjeritning. För en byggnadsmodell, använd BimCraft.

## Rita väggar

Skriv `WALL` (`WA`), eller välj {{ui:Vägg}} i menyn {{ui:Mer}} i gruppen {{ui:Rita}}, och klicka sedan på punkter som du skulle göra för en polylinje. Tryck {{key:Enter}} för att avsluta, eller skriv `C` för att sluta rummet.

- `T` anger tjockleken.
- `J` anger vad dina klick följer: väggens mitt, eller dess vänstra eller högra sida.
- `F` anger fyllningen: ingen, heltäckande eller skraffering.

Hörn geras automatiskt. En vägg som slutar inom en annan väggs tjocklek sammanfogas med den i ett snyggt T, och väggar som korsar varandra öppnar sig mot varandra. Sammanfogningarna sparas med väggarna. För rektanglar, polygoner, bågar, delningar, lås och resten, se "Väggformer, skärningar, förskjutningar och lås för 2D-väggar".

## Lägg till dörrar och fönster

Skriv `DOOR` (`DR`) eller `WINDOW` (`WN`) och klicka på en vägg. En dörr svänger åt den sida av väggen du klickar på. `W` anger bredden, `Y` typen och `H` gångjärnssidan. Fortsätt klicka för att placera fler, och tryck {{key:Enter}} för att avsluta. Dörrar kan vara enkla, dubbla, skjutdörrar eller en öppen dörröppning. Fönster kan vara fasta, fönster med bågar eller skjutfönster.

## Ändra dem

Markera en vägg för att se dess handtag:

- Ändhandtagen sträcker väggen. Väggar som är sammanfogade med den följer med.
- Mittenhandtaget flyttar väggen.
- Ett handtag på en öppning skjuter den längs väggen.
- Pilarna vänder en dörrs gångjärn och svängning.

Egenskaper visar tjockleken, fyllningen och varje öppning: typ, bredd, position, gångjärn, svängning, visad öppen eller stängd, och Ta bort. `DELOPENING` tar bort den öppning som ligger närmast där du klickar.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` och `ERASE` fungerar som vanligt. Dörrar och fönster följer med sin vägg, sammanfogade väggar behåller sina sammanfogningar, och ett enda Ångra tar tillbaka allt.

## I andra program

Varje vägg sparas som ett vanligt block, så andra CAD-program visar den korrekt och kan flytta den, men de kan inte redigera den som vägg. `EXPLODE` gör en vägg till vanliga linjer och bågar, och den är då inte längre en vägg.
