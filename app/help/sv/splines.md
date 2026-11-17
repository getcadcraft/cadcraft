---
title: Splines och polylinjer: SPLINE, SPLINEDIT, PEDIT
summary: Rita en jämn kurva genom punkter eller från en kontrollpolygon, redigera dess anpassnings- och kontrollpunkter, och redigera polylinjer (sammanfoga, stäng, bredd, anpassa, spline, räta ut) eller gör om en spline till en polylinje.
keywords: spline, splinedit, spl, spe, pedit, pe, anpassningspunkter, kontrollpunkter, vikter, nurbs, redigera polylinje, sammanfoga, anpassa kurva, räta ut, konvertera till polylinje, precision, tangent, kurva, anpassningstolerans
from: d31f72d8
---

## Vad du gör

En kurva genom fem punkter, sedan samma kurva redigerad på tre sätt, och en polylinje byggd av tre linjer.

## Rita en spline genom punkter

1. Skriv `SPL` och tryck {{key:Enter}}.
2. Klicka eller skriv punkterna som kurvan ska gå genom: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Tryck {{key:Enter}} efter den sista.
3. {{ui:Starttangent}}: klicka på en punkt som kurvan ska lämna mot, eller tryck {{key:Enter}} för att låta programmet avgöra. Gör likadant för sluttangenten.

Kurvan går genom varje punkt. Skriv `C` i stället för {{key:Enter}} för att stänga den (kurvan går tillbaka till första punkten). {{key:U}} (`Ångra`) tar tillbaka den sista punkten medan du ritar.

### Rita en från en kontrollpolygon

Skriv `M` vid första frågan, sedan `C` (Kontrollpunkter (C)) och en grad från 1 till 5 (3 är vanligast). Nu är punkterna du väljer hörn i en polygon som drar kurvan mot sig; kurvan börjar vid den första och slutar vid den sista. En sluten kurva går runt, utan hörn vid skarven.

### Gör om en polylinje till en spline

Skriv `O` (Objekt) vid första frågan och markera polylinjer eller linjer. De blir splines genom sina hörnpunkter; originalen tas bort.

## Redigera en spline

Markera den och skriv `SPE` (eller skriv `SPE` och klicka på den). Greppunkter visar anpassningspunkterna (eller kontrollpunkterna för en spline som saknar dem): dra en för att forma om kurvan. Vid frågan:

- **Anpassningsdata** (en spline ritad genom punkter): `A` lägger till en anpassningspunkt (klicka var), `D` tar bort en (klicka nära den), `M` flyttar en (klicka nära den och klicka sedan på dess nya plats), `T` anger sluttangenterna, `P` rensar anpassningspunkterna, så att splinen från då på redigeras med sina kontrollpunkter.
- **Redigera hörn**: `A` lägger till en kontrollpunkt utan att ändra kurvan, `M` flyttar en, `W` ger en en **vikt** (över 1 drar kurvan närmare den, under 1 låter den släppa).
- **Öppna** eller **Stäng**, och **Vänd** (kurvan går åt andra hållet).
- **konvertera till polylinje** (`P`): splinen blir en polylinje; precisionen är hur många segment varje spann får (10 är vanligast).
- **Ångra** tar tillbaka den senaste ändringen; **Avsluta** (X) avslutar.

{{ui:Egenskaper}} visar en splines grad, hur många anpassnings- och kontrollpunkter den har och dess längd, och låter dig öppna eller stänga den.

## Redigera en polylinje

Markera en polylinje och skriv `PE`. En linje, båge eller spline du väljer erbjuds först att göras om till en polylinje (en spline frågar efter precisionen).

- **Stäng** / **Öppna** förenar eller skiljer ändarna.
- **Sammanfoga** lägger till linjer, bågar och polylinjer vars ändar möter polylinjens ände. `Fuzz-avstånd` är hur långt ifrån varandra ändarna får vara och ändå sammanfogas (0 betyder att de måste mötas).
- **Bredd** ger hela polylinjen en bredd (0 tar bort den).
- **Anpassa** ersätter polylinjen med en jämn kurva som går genom dess hörn; **Spline** med en kubisk B-spline som följer dem (den börjar och slutar vid första och sista hörnet och håller sig nära de andra). Båda blir en polylinje av korta segment, och de ursprungliga hörnen behålls, så **Räta ut** tar tillbaka dem.
- **Linjetyp gen** säger om en streckad linjetyp fortsätter längs hela polylinjen eller börjar om vid varje hörn.
- **Vänd** ändrar ordningen på dess hörn. **Flera** (`M` vid första frågan) redigerar flera polylinjer med samma alternativ.

Redigering av polylinjens hörn i {{ui:Egenskaper}} eller med greppunkter förblir som den var: PEDIT har ingen hörnredigerare.

## I filer

DWG och DXF 2000 behåller en spline som spline: grad, kontrollpunkter, knutar, vikter, anpassningspunkter och tangenter. En spline du öppnar och inte ändrar skrivs tillbaka exakt som den kom. DXF R12 har ingen spline: den sparas som en polylinje längs kurvan, och historiken säger hur många.

Förskjut, trimma, förläng, avrunda, bryt och sammanfoga fungerar inte på splines. {{cmd:EXPLODE}} en spline, eller {{cmd:PEDIT}} den, för att få en polylinje som de kommandona tar emot.

## Vanliga misstag

- **Kurvan överskjuter mellan närliggande punkter.** En kurva genom punkter böjer sig där punkterna gör det. Använd färre punkter, eller en kontrollpolygon.
- **”Det är ingen spline.”** SPLINEDIT tar bara splines; {{cmd:PEDIT}} redigerar polylinjer.
- **En sluten anpassad spline får en något annan form i ett annat program.** CadCraft stänger den med en jämn skarv vid första punkten; ett annat program kan stänga den med en periodisk kurva. En sluten spline med kontrollpunkter är likadan i båda.
