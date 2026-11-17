---
title: Skicka en ritning till en laser
summary: Öppna panelen Laser, välj vad varje lager gör (skär, rita linjer, gravera, fyll, bild), förhandsgranska huvudets rörelser, spara GRBL-laserläge G-kod, eller skicka den från webbläsaren efter att du ramat in jobbet.
keywords: laser, laserskärare, lasergravör, GRBL, G-kod, gcode, gravera, fyll, dither, bildgravering, rita linjer, skär, Web Serial, rama in jobbet, effekt, hastighet, varv, LASER, LASERCUT, CNC
from: 72b56db0
---

Panelen {{ui:Laser}} omvandlar ritningens lager till ett program för en laser som kör GRBL (de flesta hobby- och småverkstadsstyrda diod- och CO2-laserna). Skriv `LASER` (eller `LASERCUT`) och tryck på {{key:Enter}}, eller välj {{ui:Laser…}} i menyn {{ui:Mer}} i gruppen {{ui:Vy}}. I lägena med menyflik finns den i menyn {{ui:Fil}} och bredvid {{ui:Plotta}}. Panelen öppnas över ritningen och förblir öppen medan du ritar: förhandsvisningen följer varje ändring.

:::warning
Testa alla inställningar på skrot först, använd skyddsglasögon som passar din laser, håll locket stängt där det finns ett, och lämna aldrig en igång laser utan uppsikt. Siffrorna ett lager börjar med är platshållare, inte rekommendationer för något material.
:::

## Vad som skickas

Panelen läser modellen (inte bladen), på lager som är på och upptinade:

- Linjer, bågar, cirklar, polylinjer (bågsegment förblir bågar), ellipser och splines. En form som slutar där den börjar räknas som sluten.
- Block tas isär: ett objekt på lager 0 inuti ett block följer med blockreferensens lager.
- En skraffering skickar sin gräns, så en skrafferad logga på ett **Fyll**-lager fylls.
- En bild (`IMAGEATTACH`) graveras på ett lager satt till **Gravera bild**, när den ligger rätt (inte vriden eller lutad) och dess fil är öppen i CadCraft.
- Text, måttsättningar, hänvisningar, punkter och konstruktionslinjer skickas inte; panelen säger hur många den lämnade ute. För att bränna in text, rita bokstäverna som former eller skraffera dem.

Storlekar skickas i millimeter från ritningens enheter (`UNITS`): en ritning i tum multipliceras med 25,4. En ritning utan angivna enheter skickas så att en enhet blir en millimeter. Bocka i {{ui:Endast markerade objekt}} för att skicka en del av ritningen.

## Välj vad varje lager gör

Varje lager med något på sig är en rad. {{ui:Gör}} sätter den till **Skär**, **Rita linjer**, **Gravera linjer**, **Fyll former**, **Gravera bild** eller **Skickas inte**, med en {{ui:Effekt %}}, en {{ui:Hastighet mm/min}} och ett antal {{ui:Varv}}. Varje ändring är ett steg i ångra och sparas i ritningen: DWG (varje version CadCraft sparar) och DXF behåller inställningarna, så ritningen öppnas med dem nästa gång. Andra program öppnar filen som vanligt; de ser ett oanvänt block som heter CADCRAFT_LASER (rensning där tar bort inställningarna).

- **Fyll** bränner insidan av slutna former i linjer, {{ui:Radavstånd}} isär, i en {{ui:Vinkel}}, åt båda håll eller ett, med ett överskjutande så att huvudet har fart när lasern tänds; korsskraffering lägger till ett andra varv vid 90°. En form med ett hål förblir öppen vid hålet.
- **Gravera bild** omvandlar en bild till prickar (Floyd–Steinberg, Atkinson, ordnad eller ren svartvit vid en tröskel) eller, med *Grånivåer*, till variabel effekt.
- Ordning: bilder och fyllningar först, sedan linjegravering, sedan rita linjer, sedan skär, så att en utskuren del inte rör sig medan den graveras. Inom ett lager körs banorna **inifrån och ut** (ett hål före plattan det sitter i), närmaste nästa.

## Förhandsgranska, sedan spara

Förhandsvisningen visar vad huvudet gör: brännande linjer i färg, snabba förflyttningar i grått, och en grön ruta runt allt som bränns. Under den visas storleken, brännlängden och en tidsuppskattning (utan acceleration; en riktig maskin tar längre tid). {{ui:Spara G-kod…}} skriver GRBL-laserläge G-kod: `$32=1`, `M4` (eller `M3`) med S-värden, `G0` och `G1`-förflyttningar, `M5` i slutet. X0 Y0 är jobbets nedre vänstra hörn om du inte väljer ritningens origo: ställ din maskins arbetsnollpunkt där.

## Skicka från webbläsaren

I Chrome och Edge frågar {{ui:Anslut…}} efter lasern USB-port. Ingenting ansluts eller skickas förrän du trycker på en knapp. Tryck först på {{ui:Rama in jobbet}}: huvudet följer jobbets ruta med lasern **av** (eller på den låga effekt du angett för en pekare) så att du ser var det kommer att bränna. Först då blir {{ui:Skicka jobb}} aktiv, och den stängs av igen om du ändrar något. {{ui:Pausa}} håller huvudet, {{ui:Stopp}} håller det också, återställer styrenheten (lasern släcks) och skickar `M5`. Där Web Serial saknas (Firefox, Safari och CadCraft Studio, som ännu inte har Web Serial) erbjuder panelen bara sparning: spara G-koden och skicka den med din lasers egna program.

## Finns inte ännu

Finns inte ännu: andra styrenheters format (Ruida, Marlin-lasrar, leverantörsfiler), flikar och inledningar, kerfförskjutning, materialbibliotek, roterande och Z-axlar, kameraalignering, text som konturer.
