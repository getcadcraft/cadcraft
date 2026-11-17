---
title: Send en tegning til en laser
summary: Åpne Laser-panelet, velg hva hvert layer gjør (kutt, riss, gravering, fyll, bilde), forhåndsvis hodets bevegelser, lagre G-kode i GRBL-lasermodus, eller send den fra nettleseren etter å ha rammet inn jobben.
keywords: laser, laserskjærer, lasergraverer, GRBL, G-code, gcode, gravere, fyll, dither, bildegravering, riss, kutte, Web Serial, ramme inn jobben, effekt, hastighet, passeringer, LASER, LASERCUT, CNC
from: 72b56db0
---

{{ui:Laser}}-panelet gjør lagene i en tegning om til et program for en laser som kjører GRBL (de fleste hobby- og småverkstedstyringer for diode- og CO2-lasere). Skriv `LASER` (eller `LASERCUT`) og trykk {{key:Enter}}, eller velg {{ui:Laser…}} i {{ui:Mer}}-menyen i gruppen {{ui:Visning}}. I båndstilene ligger den i {{ui:Fil}}-menyen og ved siden av {{ui:Plott}}. Panelet åpnes over tegningen og forblir åpent mens du tegner: forhåndsvisningen følger hver endring.

:::warning
Test alle innstillinger på et skrapemateriale først, bruk vernebriller som passer til laseren din, hold lokket lukket der det finnes ett, og la aldri en kjørende laser stå alene. Tallene et layer starter med, er plassholdere, ikke anbefalinger for noe materiale.
:::

## Hva som sendes

Panelet leser modellen (ikke arkene), på lag som er på og tint:

- Linjer, buer, sirkler, polylinjer (bue-segmenter forblir buer), ellipser og splines. En form som slutter der den starter, regnes som lukket.
- Blokker tas fra hverandre: et objekt på layer 0 inne i en blokk følger layeret til blokkreferansen.
- En skravur sender sin grense, så en skravert logo på et **Fyll**-layer blir fylt.
- Et bilde (`IMAGEATTACH`) graveres på et layer satt til **Gravér bilde**, når det ligger rett (ikke dreid eller skrådd) og filen er åpen i CadCraft.
- Tekst, måltilsetninger, hjelpelinjer, punkter og konstruksjonslinjer sendes ikke; panelet sier hvor mange det utelot. For å brenne inn tekst, tegn bokstavene som former, eller skrav dem.

Størrelser sendes i millimeter fra tegningens enheter (`UNITS`): en tegning i tommer ganges med 25.4. En tegning uten satte enheter sendes med én enhet til én millimeter. Kryss av {{ui:Bare de valgte objektene}} for å sende en del av tegningen.

## Velg hva hvert layer gjør

Hvert layer med noe på seg er en rad. {{ui:Gjør}} setter det til **Kutt**, **Riss**, **Gravér linjer**, **Fyll former**, **Gravér bilde** eller **Sendes ikke**, med en {{ui:Effekt %}}, en {{ui:Hastighet mm/min}} og et antall {{ui:Passeringer}}. Hver endring er ett steg i angre og lagres i tegningen: DWG (hver versjon CadCraft lagrer) og DXF beholder innstillingene, så tegningen åpnes med dem neste gang. Andre programmer åpner filen som før; de ser én ubrukt blokk kalt CADCRAFT_LASER (å rense den der fjerner innstillingene).

- **Fyll** brenner innsiden av lukkede former i linjer, {{ui:Linjeavstand}} fra hverandre, i en {{ui:Vinkel}}, begge retninger eller én, med en overskyting slik at hodet har full fart når laseren tennes; krysskravering legger til et annet pass i 90°. En form med et hull forblir åpen ved hullet.
- **Gravér bilde** gjør et bilde om til prikker (Floyd–Steinberg, Atkinson, ordnet, eller ren svart-hvitt ved en terskel) eller, med *Gråtoner*, til variabel effekt.
- Rekkefølge: bilder og fyll først, deretter linjegravering, deretter riss, så kutt, slik at en utkuttet del ikke flytter seg mens den graveres. Innenfor ett layer går banene **innvendig først** (et hull før plata det er i), nærmeste deretter.

## Forhåndsvis, deretter lagre

Forhåndsvisningen tegner det hodet gjør: brennende linjer i farge, raske bevegelser i grått, og en grønn boks rundt alt som brennes. Under den vises størrelsen, brennlengden og et tidsanslag (uten akselerasjon; en ekte maskin bruker lengre tid). {{ui:Lagre G-kode…}} skriver GRBL laser-modus G-kode: `$32=1`, `M4` (eller `M3`) med S-verdier, `G0`- og `G1`-bevegelser, `M5` til slutt. X0 Y0 er jobbens nedre venstre hjørne, med mindre du velger tegningens origo: still maskinens arbeidsnull dit.

## Send fra nettleseren

I Chrome og Edge ber {{ui:Koble til…}} deg velge laserens USB-port. Ingenting kobles til eller sendes før du trykker en knapp. Trykk {{ui:Ramm inn jobben}} først: hodet tegner opp boksen til jobben med laseren **av** (eller på den lave effekten du har satt for en peker), slik at du ser hvor den vil brenne. Først da blir {{ui:Send jobb}} aktiv, og den slås av igjen hvis du endrer noe. {{ui:Pause}} holder hodet, {{ui:Stopp}} holder det, nullstiller styringen (laseren slås av) og sender `M5`. Der Web Serial mangler (Firefox, Safari og CadCraft Studio, som ikke har Web Serial ennå), tilbyr panelet bare lagring: lagre G-koden og send den med laserens eget program.

## Ikke bygget ennå

Ikke bygget ennå: andre styringers formater (Ruida, Marlin-lasere, leverandørfiler), faner og innføringslinjer, kerf-forskyvning, materialbibliotek, roterende og Z-akser, kameraoppretting, tekst som konturer.
