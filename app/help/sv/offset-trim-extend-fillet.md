---
title: Förskjut, trimma, förläng, avrunda och fasa väggar
summary: Gör enkla linjer till dubbla väggar med Förskjut, rensa hörnen med Avrunda, och klipp och förläng linjer med Trimma och Förläng.
keywords: förskjut, trimma, förläng, avrunda, fasa, fasning, bryt, breakatpoint, ändra längd, väggar, hörn, klipp, parallell, radie, rensning
from: c6c5cbd0
---

## Vad du ska göra

Ett litet rum med 200 tjocka väggar: innerytan ritas, ytterytan förskjuts, hörnen rensas upp, och en dörröppning skärs genom en vägg.

## Rita innerytan

1. Skriv `L` och tryck på {{key:Enter}}.
2. Skriv `0,0` och tryck på {{key:Enter}}.
3. Skriv `@5000,0` och tryck på {{key:Enter}}.
4. Skriv `@0,4000` och tryck på {{key:Enter}}.
5. Skriv `@-5000,0` och tryck på {{key:Enter}}.
6. Skriv `C` och tryck på {{key:Enter}}.
7. Klicka på {{ui:Extents}}.

Du har fyra separata linjer. (En sluten polylinje skulle förskjutas i ett enda steg; separata linjer visar hur Avrunda rensar hörn.)

## Förskjut ytterytan

1. Skriv `O` och tryck på {{key:Enter}}. Prompten lyder `Specify offset distance [Through] <Through>:`.
2. Skriv `200` och tryck på {{key:Enter}}.
3. Vid `Select object to offset` klickar du på den nedre linjen.
4. Vid `Specify point on side to offset` klickar du var som helst under den. En parallell linje visas 200 under.
5. Klicka på den högra linjen, klicka sedan till höger om den.
6. Klicka på den övre linjen, klicka sedan ovanför den.
7. Klicka på den vänstra linjen, klicka sedan till vänster om den.
8. Tryck på {{key:Enter}} för att avsluta kommandot.

Du bör se fyra yttre linjer, var och en lika lång som sin inre linje, så att de yttre hörnen inte möts.

:::tip
Tryck på {{key:Enter}} vid avståndsprompten för att använda det senaste avståndet igen. Skriv `T` för Through: då går varje kopia genom punkten du klickar, på vilket avstånd det än är.
:::

{{cmd:OFFSET}} fungerar på linjer, bågar, cirklar och polylinjer. Att förskjuta en sluten polylinje förskjuter hela konturen, inklusive hörnen.

## Rensa de yttre hörnen med Avrunda

{{cmd:FILLET}} förenar två linjer i ett hörn: den trimmar eller förlänger båda så att de möts. Med radien 0 blir hörnet kantigt.

1. Skriv `F` och tryck på {{key:Enter}}. Prompten lyder `Select first line [Radius]:`.
2. Om den senaste avrundningen du gjorde använde en radie, skriv `R`, tryck på {{key:Enter}}, skriv `0` och tryck på {{key:Enter}}.
3. Klicka på den yttre nedre linjen nära dess högra ände.
4. Vid `Select second line` klickar du på den yttre högra linjen nära dess nedre ände.

De två linjerna möts nu i ett vasst hörn, och kommandot avslutas.

5. Tryck på {{key:Enter}} för att upprepa {{cmd:FILLET}}, och gör nästa hörn.
6. Upprepa tills alla fyra yttre hörn möts.

Klicka på varje linje på den del du vill **behålla**. Med en radie över 0 lägger Avrunda till en båge mellan linjerna i stället.

:::tip
Skriv `M` vid den första prompten för att göra alla fyra hörnen på en gång, eller rita den yttre ytan som en sluten polylinje och skriv `P`: varje hörn görs på en gång. Håll ned {{key:Shift}} när du klickar på den andra linjen för ett kantigt hörn utan att ändra radien.
:::

## Fasa ett hörn

{{cmd:CHAMFER}} skär av ett hörn med en rak linje.

1. Skriv `CHA` och tryck på {{key:Enter}}.
2. Skriv `D` och tryck på {{key:Enter}}. Skriv `300` och tryck på {{key:Enter}} för det första avståndet, tryck sedan på {{key:Enter}} för att använda 300 också för det andra.
3. Klicka på den inre övre linjen nära dess vänstra ände, och sedan på den inre vänstra linjen nära dess övre ände.

Hörnet skärs tillbaka 300 längs varje linje, och en fasningslinje förenar dem. Skriv `A` i stället för `D` för att ge en längd på den första linjen och en vinkel.

## Skär en dörröppning med Trimma

Rita först de två dörrkarmarna över nedre väggen, och trimma sedan väggens linjer mellan dem.

1. Skriv `L` och tryck på {{key:Enter}}.
2. Skriv `1000,200` och tryck på {{key:Enter}}.
3. Skriv `@0,-600` och tryck på {{key:Enter}}, tryck sedan på {{key:Enter}} igen.
4. Tryck på {{key:Enter}} för att upprepa {{cmd:LINE}}.
5. Skriv `1900,200` och tryck på {{key:Enter}}.
6. Skriv `@0,-600` och tryck på {{key:Enter}}, tryck sedan på {{key:Enter}} igen.

Du har nu två korta linjer som korsar nedre väggen 900 isär.

7. Skriv `TR` och tryck på {{key:Enter}}. Historiken säger `Current settings: Quick mode, edges: No extend`.
8. Klicka på den inre nedre linjen mellan de två karmarna. Den biten försvinner. (Vila pekaren på den först: biten som ska bort blir grå och streckad.)
9. Klicka på den yttre nedre linjen mellan de två karmarna. Den biten försvinner också.
10. Klicka på den del av varje karm som sticker upp över väggen, och på delen under den.
11. Tryck på {{key:Enter}} för att avsluta kommandot.

Du bör se en öppning på 900 i nedre väggen, med karmarna som avslutar väggens ändar.

I Snabbläge (standard) frågar Trimma inte först efter vilka skärkanter du vill använda: varje synligt objekt är en skärkant. Välj den bit du vill ha borta, eller dra en bana genom flera bitar för att trimma dem alla på en gång. Skriv `U` och tryck på {{key:Enter}} för att ta tillbaka det senaste valet eller draget utan att lämna kommandot. Fönster, korsning, valda kanter och {{key:Shift}} för att förlänga finns i [Trimma och förläng](topic:trim-and-extend).

## Förläng en linje till en annan

{{cmd:EXTEND}} förlänger en linje, båge eller polylinjeände tills den möter nästa objekt i den riktningen.

1. Skriv `L` och tryck på {{key:Enter}}.
2. Skriv `1000,2000` och tryck på {{key:Enter}}.
3. Skriv `@2000,0` och tryck på {{key:Enter}}, tryck sedan på {{key:Enter}} igen. Linjen stannar 2000 före den högra väggen.
4. Skriv `EX` och tryck på {{key:Enter}}.
5. Klicka på den nya linjen nära dess högra ände.
6. Tryck på {{key:Enter}} för att avsluta kommandot.

Linjen går nu till innerytan på den högra väggen. Varje synligt objekt är en gräns; peka nära den ände som ska växa. Inne i {{cmd:TRIM}} gör {{key:Shift}}+klick samma sak.

## Bryt och ändra längd

{{cmd:BREAK}} (`BR`, eller {{ui:Modify}} › {{ui:More}} › {{ui:Break}}) skär en lucka utan skärkant: klicka på objektet där luckan börjar (det klicket är första punkten), klicka sedan där den slutar. På en cirkel tas den del som går moturs från första punkten till den andra bort. `F` vid den andra frågan låter dig ange första punkten igen, och {{cmd:BREAKATPOINT}} delar ett objekt i två vid en punkt, utan lucka.

{{cmd:LENGTHEN}} (`LEN`) ändrar en längd vid en ände:

1. Skriv `LEN` och tryck på {{key:Enter}}. Klicka på en linje för att se dess nuvarande längd; prompten frågar igen.
2. Välj hur: `DE` (Delta: ett belopp att lägga till, negativt för att ta bort; `A` för en bågs vinkel), `P` (Procent: 50 halverar den), `T` (Total: den längd den ska ha) eller `DY` (Dynamisk: dra änden).
3. Klicka på varje objekt nära den ände som ska flyttas. `U` tar tillbaka det senaste; {{key:Enter}} avslutar.

Linjer, bågar och öppna polylinjer (deras ändsegment) kan göras längre.

## Vanliga misstag

- **En hel linje försvann.** Ingenting korsade den, så Snabbläge raderade den. Skriv `U` för att få tillbaka den; kontrollera att skärlinjen verkligen korsar den (zooma in) och inte ligger på ett lager som är av.
- **”Ingen gräns i den riktningen.”** Avrunda eller Förläng hittade inget att gå in i. Peka närmare den ände som ska växa.
- **”Radien är för stor.”** Bågen skulle gå förbi änden på en av linjerna. Använd en mindre radie.
- **”Endast det första eller sista segmentet på en öppen polylinje kan klippas tillbaka.”** Markera två segment av polylinjen intill varandra, eller skriv `P` för att runda av varje hörn på den.
- **Förskjutningen gick åt fel håll.** Sidan är där du klickar efter att du valt objektet. Ångra med {{key:Mod+Z}} och klicka på andra sidan.
- **”Kan inte förskjutas så långt.”** Förskjutningen skulle vända bågen, cirkeln eller polylinjen ut och in. Använd ett mindre avstånd.
