---
title: Flytta, kopiera, rotera, skala, spegla, töj och matris
summary: Möblera ett rum med de grundläggande ändringskommandona, med baspunkter, inskrivna avstånd och ångra.
keywords: flytta, kopiera, rotera, skala, spegla, töj, matris, sammanfoga, matchprop, matcha egenskaper, formatpensel, arrayrect, arraypolar, polär matris, radera, spräng, ångra, gör om, baspunkt, förskjutning, ändra, justera, fördela, rada upp, fördela jämnt
from: 8eaeee6c
---

## Vad du ska göra

Ett bord med en stol, kopierad runt bordet, vriden, speglad och ändrad i storlek. Under tiden använder du {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} och {{cmd:UNDO}}.

## Rita delarna

1. Skriv `REC` och tryck på {{key:Enter}}, skriv `0,0` och tryck på {{key:Enter}}, skriv sedan `@1800,900` och tryck på {{key:Enter}}. Detta är bordet.
2. Skriv `REC` och tryck på {{key:Enter}}, skriv `300,-700` och tryck på {{key:Enter}}, skriv sedan `@450,450` och tryck på {{key:Enter}}. Detta är en stol, under bordet.
3. Klicka på {{ui:Extents}}.

## Flytta: baspunkt, sedan andra punkten

Varje flytt, kopiering, rotation och skalning börjar från en **baspunkt**: punkten som följer med, eller som något vrids kring.

1. Klicka på stolen för att markera den.
2. Skriv `M` och tryck på {{key:Enter}}. Historiken visar `1 found`.
3. Vid `Specify base point` fångar du till stolens övre vänstra hörn (Ändpunkt) och klickar.
4. Vid `Specify second point` skriver du `@0,200` och trycker på {{key:Enter}}.

Stolen flyttar sig 200 uppåt, närmare bordet.

:::tip
Skriv `D` vid `Specify base point` för att ange en förskjutning i stället: CadCraft frågar då `Specify displacement`, och du skriver hur långt åt sidan och uppåt, till exempel `0,200` (inget `@` behövs).
:::

## Kopiera så många gånger du vill

1. Klicka på stolen.
2. Skriv `CO` och tryck på {{key:Enter}}.
3. Fånga till stolens nedre vänstra hörn och klicka som baspunkt.
4. Skriv `@600,0` och tryck på {{key:Enter}}. En kopia visas 600 åt höger.
5. Skriv `@600,0` igen och tryck på {{key:Enter}}. En andra kopia visas 1200 åt höger om originalet.
6. Tryck på {{key:Enter}} för att avsluta kommandot.

{{cmd:COPY}} fortsätter tills du trycker på {{key:Enter}}. Varje kopia placeras efter avståndet från baspunkten till punkten du anger. En `@`-punkt räknas från den senast angivna punkten, som efter första kopian är den kopians punkt, så `@600,0` två gånger ger kopior på 600 och 1200. Skriv `U` och tryck på {{key:Enter}} för att ta tillbaka den senaste kopian utan att lämna kommandot.

Du bör se tre stolar i rad under bordet.

:::tip
{{cmd:COPY}} är till för kopior inom en ritning, placerade efter en baspunkt. För att flytta objekt till en annan ritning eller flik, eller för att klistra in dem senare, använd urklippet: {{key:Mod+C}}, sedan {{key:Mod+V}}. {{key:Mod+D}} gör en kopia som följer pekaren. Se [Kopiera, klistra in och duplicera](topic:copy-paste).
:::

## Spegla raden till andra sidan

1. Dra ett korsande fönster (från höger till vänster) över de tre stolarna, utan att röra bordet.
2. Skriv `MI` och tryck på {{key:Enter}}.
3. Vid `Specify first point of mirror line` fångar du till Mittpunkt på bordets vänstra sida och klickar.
4. Vid `Specify second point of mirror line` fångar du till Mittpunkt på bordets högra sida och klickar.
5. Vid `Erase source objects? [Yes/No] <N>` trycker du på {{key:Enter}} för att behålla dem.

Du bör se tre stolar under bordet och tre speglade stolar ovanför det. Text i en spegelvänd markering förblir läsbar: den placeras spegelvänd men skrivs inte baklänges.

## Rotera en stol

1. Klicka på den högra stolen under bordet.
2. Skriv `RO` och tryck på {{key:Enter}}.
3. Fånga till stolens nedre högra hörn och klicka som baspunkt.
4. Skriv `90` och tryck på {{key:Enter}}.

Stolen vrids 90 grader moturs runt baspunkten. En negativ vinkel vrider medurs. I stället för att skriva kan du klicka på en andra punkt: vinkeln mäts från baspunkten till den punkten.

## Skala bordet

1. Markera bordet.
2. Skriv `SC` och tryck på {{key:Enter}}.
3. Fånga till bordets nedre vänstra hörn och klicka som baspunkt.
4. Skriv `1.2` och tryck på {{key:Enter}}.

Bordet blir 20 % större och växer bort från baspunkten. En faktor under 1 gör det mindre.

:::note
Om du klickar en punkt i stället för att skriva skalfaktorn, blir faktorn avståndet från baspunkten till den punkten. Att klicka en ritningsenhet bort ger faktorn 1. Att skriva talet är oftast vad du vill ha.
:::

## Ångra och gör om

- {{key:Mod+Z}}, knappen {{ui:Undo}} eller `U` och sedan {{key:Enter}} ångrar det senaste kommandot. Ett helt kommando är ett steg: att ångra en {{cmd:COPY}} som gjorde fem kopior tar bort alla fem.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, knappen {{ui:Redo}} eller `REDO` tar tillbaka det.
- Historiken säger vad som ångrades (”Ångrade COPY”).

CadCraft sparar de senaste 500 stegen. Lagerinställningar (På, Frys, Lås, färg) är inställningar, inte redigeringar, och ångras inte.

## Töj ett rum bredare

{{cmd:STRETCH}} (`S`, eller {{ui:Stretch}}) flyttar bara det som ligger inuti ett korsande fönster: hörn och linjeändar inom det flyttas, allt annat står kvar, så rummet blir bredare i stället för att flyttas.

1. Skriv `S` och tryck på {{key:Enter}}.
2. Dra ett fönster från höger till vänster över högra väggen, så att det täcker väggens hörn och ändarna av allt som möter den.
3. Tryck på {{key:Enter}}.
4. Klicka en baspunkt, skriv sedan `@600,0` och tryck på {{key:Enter}}.

Rektangeln är 600 bredare; linjer som slutade vid väggen slutar fortfarande vid den. En båge med en ände inuti behåller sin höjd, cirklar och text flyttas när deras centrum eller infogningspunkt ligger inuti, och ett mått mäter sin nya längd. Objekt som väljs ett i taget, utan fönster, flyttas bara.

Du kan också markera först: dra det korsande fönstret (eller ett korsande lasso) över väggen utan att något kommando körs, skriv sedan `S`. STRETCH tar den markeringen och töjer det som fönstren innehåller, precis som om du hade dragit dem vid dess egen fråga.

## Matris: rader och kolumner, eller runt ett centrum

{{cmd:ARRAY}} (`AR`, eller {{ui:Array}}) kopierar markeringen i ett rutnät eller i en cirkel.

1. Markera en stol, skriv `AR` och tryck på {{key:Enter}}. Tryck på {{key:Enter}} för Rektangulär.
2. En förhandsvisning med 4 kolumner och 3 rader visas. Skriv `COU`, tryck på {{key:Enter}}, skriv sedan `5` för kolumner och `2` för rader.
3. Skriv `S`, tryck på {{key:Enter}}, skriv sedan `600` mellan kolumner och `-900` mellan rader (negativt går nedåt).
4. Tryck på {{key:Enter}} för att skapa kopiorna.

För en ring av stolar runt ett bord väljer du `PO` (Polär) i stället, klickar på bordets centrum och anger `I` (objekt), `F` (fyllnadsvinkel: 360 för hela varvet, 180 för halvt) och `ROT` (om kopiorna vrids mot centrum). {{cmd:ARRAYRECT}} och {{cmd:ARRAYPOLAR}} hoppar över frågan.

## Sammanfoga delar till en polylinje

{{cmd:JOIN}} (`J`, eller {{ui:Modify}} › {{ui:More}} › {{ui:Join}}): markera linjer, bågar och öppna polylinjer vars ändar möts, och tryck på {{key:Enter}}. De blir en polylinje, sluten när de går hela varvet, som du sedan kan förskjuta i ett enda steg. Linjer som ligger på samma linje blir en linje, även med luckor mellan sig; bågar från samma cirkel blir en båge, eller cirkeln.

## Matcha egenskaper

{{cmd:MATCHPROP}} (`MA`, eller {{ui:Modify}} › {{ui:More}} › {{ui:Match properties}}): klicka på objektet vars utseende du vill ha, markera sedan objekten som ska ändras och tryck på {{key:Enter}}. De tar dess lager och färg; en text tar dess höjd, ett mått tar dess storlekar, och en skraffering tar dess mönster. Skriv `S` (Inställningar) vid den andra frågan för att stänga av någon av dessa.

## Justera objekt

**Efter punkter.** {{cmd:ALIGN}} (`AL`, eller {{ui:Modify}} › {{ui:More}} › {{ui:Align}}): markera objekten och tryck på {{key:Enter}}, klicka sedan på en punkt på dem (källan) och på dit den ska (målet).

- Ett par flyttar dem. Tryck på {{key:Enter}} vid `Specify second source point` för att stanna där.
- Två par vrider dem också, så att linjen mellan de två källpunkterna ligger längs linjen mellan de två målpunkterna. CadCraft frågar då `Scale objects based on alignment points?`: `Y` gör dem lika mycket större eller mindre också.
- Ett tredje par speglar dem när dess två punkter ligger på motsatt sida av den linjen.

**Kanter och avstånd.** {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} (eller `ALIGNPANEL`) öppnar en liten panel över ritningen. Markera objekt, och sedan:

- välj vad som ska justeras mot i {{ui:Align to}} (hela markeringen, det första eller sista objektet du valde, eller en punkt du klickar), och klicka på {{ui:Left}}, {{ui:Center}}, {{ui:Right}}, {{ui:Top}}, {{ui:Middle}} eller {{ui:Bottom}};
- eller välj {{ui:Equal gaps}} eller {{ui:Equal centres}} och klicka på {{ui:Across}} eller {{ui:Up and down}}: de yttre två objekten står kvar, och resten fördelas jämnt mellan dem (minst tre objekt).

Varje klick är ett ångringssteg, och markeringen står kvar, så du kan prova något annat. Varje objekt räknas efter sin begränsningsram, i UCS när en är satt. På kommandoraden motsvaras det av {{cmd:ALIGNTO}} och {{cmd:DISTRIBUTE}}.

## Radera och spräng

- {{cmd:ERASE}} (`E`, eller {{key:Delete}}) tar bort de markerade objekten.
- {{cmd:EXPLODE}} (`X`) bryter en polylinje i linjer och bågar, en blockreferens i sina objekt, och ett mått i linjer, pilspetsar och text. Sprängda mått mäter inte längre sig själva.

## Vanliga misstag

- **Att skriva ett avstånd utan `@` vid andra punkten.** `600,0` är den absoluta punkten 600,0, inte ”600 åt höger”. Använd `@600,0`, eller bara `600` med korset pekande åt rätt håll.
- **Vridningen gick åt fel håll.** Positiva vinklar vrider moturs.
- **Ångra tog bort mer än väntat.** Ett ångringssteg tar tillbaka hela det senaste kommandot, inklusive alla kopior det gjorde.
- **Kommandot bad inte om att markera objekt.** Objekten var redan markerade, så kommandot använde dem. Tryck först på {{key:Esc}} för att börja utan markering.
