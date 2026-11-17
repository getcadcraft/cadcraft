---
title: Kopier, lim inn og dupliser
summary: Kopier objekter til CadCrafts utklippstavle, lim dem inn der du klikker eller på samme sted, dupliser med pekeren, og ta med arbeid fra en annen tegning eller fane.
keywords: kopier, klipp ut, lim inn, lim inn på samme sted, dupliser, utklippstavle, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, mellom tegninger, en annen fane, basispunkt
from: 4b9f29d3
---

## Hva du lærer

Hvordan du kopierer objekter til utklippstavlen, limer dem inn der du klikker, limer dem inn på sine egne koordinater, dupliserer dem med pekeren, klipper dem ut, og tar dem med til en annen tegning. Alt dette finnes også i verktøylinjens gruppe {{ui:Rediger}}: {{ui:Kopier}}, {{ui:Lim inn}} og {{ui:Mer}}-menyen.

## Kopier og lim inn der du klikker

1. Velg objektene: klikk dem, eller dra et vindu.
2. Trykk {{key:Mod+C}}, eller klikk {{ui:Kopier}} i gruppen {{ui:Rediger}}. Kommandolinjen sier hvor mange objekter som ble kopiert. De forblir valgt.
3. Trykk {{key:Mod+V}}, eller klikk {{ui:Lim inn}}. Kopien vises ved markøren, hengende fra nedre venstre hjørne av de kopierte objektene.
4. Klikk der det hjørnet skal, eller skriv et punkt som `2000,500` og trykk {{key:Enter}}. Objektfang og Ortho virker som vanlig.

De innlimte objektene er valgt, så du kan flytte eller endre dem med én gang. Ett {{key:Mod+Z}} fjerner hele innlimingen.

:::tip
Vil du at kopien skal henge fra et punkt du velger, for eksempel hjørnet på en vegg? Skriv `COPYBASE`, klikk basispunktet, velg objektene, og trykk {{key:Enter}}. Innliming plasserer da det punktet der du klikker. For å henge hver kopi fra midten i stedet for nedre venstre hjørne, endre {{ui:Innlimingspunkt}} i [CadCrafts innstillinger](topic:settings).
:::

## Lim inn på samme sted

Trykk {{key:Mod+Shift+V}}, eller velg {{ui:Lim inn på samme sted}} i {{ui:Mer}}-menyen. Kopien settes inn nøyaktig på de koordinatene den ble kopiert fra, uten klikk. Bruk det til å ta objekter med til en annen tegning på samme sted, eller fra et ark til et annet ark.

## Dupliser og flytt

1. Velg objektene.
2. Trykk {{key:Mod+D}}, eller velg {{ui:Dupliser og flytt}} i {{ui:Mer}}-menyen.
3. En kopi ligger oppå originalen og beveger seg med pekeren. Klikk der den skal. Du kan også skrive en forskyvning som `@0,-600`, eller en avstand mot markøren.

{{key:Esc}} før klikket etterlater ingenting. Duplikatet er ett angre-steg og berører ikke utklippstavlen.

## Klipp ut

Trykk {{key:Mod+X}}, eller velg {{ui:Klipp ut}} i {{ui:Mer}}-menyen. Objektene havner på utklippstavlen og slettes fra tegningen, i ett angre-steg. Lim dem inn igjen med {{key:Mod+V}} eller {{key:Mod+Shift+V}}.

## Mellom tegninger og faner

Utklippstavlen beholder kopien når du åpner en annen tegning, og den deles av alle CadCraft-faner i denne nettleseren. Kopier i én fane, og trykk deretter {{key:Mod+V}} i en annen.

- Blokker objektene bruker, følger med. Hvis tegningen du limer inn i allerede har en blokk med samme navn, brukes dens egen definisjon, slik AutoCAD gjør.
- Lag objektene bruker, legges til med den fargen og de innstillingene de hadde.
- Kopien skaleres ikke om når de to tegningene bruker ulike enheter: CadCraft sier fra om det, og du kan bruke {{cmd:SCALE}} etterpå.
- Visningsområder blir på arket sitt; de utelates fra en kopi.

:::note
Utklippstavlen er CadCrafts egen. Du kan ikke lime CadCraft-objekter inn i et annet program, eller lime inn fra et annet program i CadCraft: lagre som DWG eller DXF i stedet. En veldig stor kopi kan være for stor til å deles mellom faner; kommandolinjen sier da bare at denne fanen kan lime den inn.
:::

## Vanlige feil

- **{{key:Mod+V}} limte tekst inn i kommandolinjen.** Du hadde skrevet noe der, så tastene virket på teksten. Trykk {{key:Esc}} for å tømme den, og trykk deretter {{key:Mod+V}} igjen.
- **Ingenting skjedde, og statuslinjen sier at du må fullføre gjeldende kommando.** En annen kommando kjører. Trykk {{key:Esc}} først.
- **Innlimingen havnet langt unna.** Den henger fra nedre venstre hjørne av det du kopierte, som kan være et fjernt objekt du valgte ved en feil. Bruk {{ui:Lim inn på samme sted}}, eller kopier med `COPYBASE`.
- **«Nothing pasted» med en grunn.** Det en annen fane la på utklippstavlen kunne ikke leses (det var ødelagt, eller endret for hånd). Kopier objektene på nytt.

Se hele listen over taster i [Tastatur og mus](topic:keyboard), og hver ledetekst i [Kommandoreferansen](topic:commands#clipboard).
