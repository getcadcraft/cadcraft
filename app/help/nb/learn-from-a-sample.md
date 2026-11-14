---
title: Lær av en eksempeltegning
summary: Åpne CadCrafts eksempelhus eller eksempel som bygget og gå gjennom arkene, tegningshodet, måltilsettingene og layerne.
keywords: eksempel, eksempler, eksempeltegning, lære, veiledning, gjennomgang, tegningshode, ark, som bygget, arkitektsett, åpne et eksempel
from: aa1f960a
---

## Dette lærer du

Hvordan et ferdig sett er bygget: modellrom, ark med visningsområder i en målestokk, et tegningshode med attributter, måltilsettinger i fot og tommer og i millimeter, layer. Eksemplene er CadCrafts egne og kan brukes fritt til hva som helst (CC0).

## Åpne et eksempel

1. I panelet til venstre, under {{ui:Tegning}}, klikker du {{ui:Åpne et eksempel}} (eller skriver {{cmd:SAMPLES}}; i bånd-stilene finner du det i menyen {{ui:Fil}}).
2. Klikk {{ui:Åpne}} ved siden av {{ui:Eksempelhus}}. Det åpnes i en egen fane, så arbeidet ditt blir åpent.

## Se deg rundt i modellen

1. Klikk {{ui:Utstrekning}} (eller skriv `ZOOM`, deretter `E`): planen, frontfasaden, et snitt og en veggdetalj.
2. I {{ui:Layer}} klikker du øyet ved siden av `A-ANNO-DIMS` for å skjule måltilsettingene, og igjen for å vise dem.
3. Klikk en dør: Egenskaper viser en blokkreferanse til `DOOR-32`. Dører og vinduer er blokker, plassert dreid og speilet.

## Arkene

1. Klikk {{ui:A-101 FLOOR PLAN}} under tegningen: et ARCH D-ark med ett visningsområde i 1/4" = 1'-0".
2. Dobbeltklikk inne i visningsområdet for å arbeide på modellen gjennom det; dobbeltklikk utenfor for å komme tilbake.
3. {{ui:A-501 DETAILS}} viser veggdetaljen i 1 1/2" = 1'-0": samme modell, en annen målestokk.

## Tegningshodet

1. På et hvilket som helst ark dobbeltklikker du tegningshodet: {{ui:Rediger attributter}} lister PROJECT, TITLE, SCALE, DATE, DRAWN og SHEET.
2. Endre DRAWN til initialene dine og klikk {{ui:OK}}.
3. For å endre selve tegningshodet på alle ark velger du det og velger {{ui:Blokker}} › {{ui:Mer}} › {{ui:Rediger på stedet}}. Se [Attributter](topic:attributes).

## Som bygget

Åpne {{ui:Eksempel som bygget}} på samme måte. De grå prikkene på `SCAN-SLICE` er et snitt av en skanning; veggene på `AB-WALL` ble tracet over dem. Østveggen er 35 mm ute av vinkel: måltilsettingene sier det to ganger, i millimeter (`AB-DIMS-MM`) og i fot og tommer (`AB-DIMS-FTIN`, de samme lengdene gjennom en målestokk). De røde skyene på `REV-1` markerer det oppmålingen fant.

## Neste

- [Endre størrelsen på måltilsettingstekst](topic:change-dimension-text-size)
- [Plott til PDF](topic:plot-pdf): plott {{ui:A-101 FLOOR PLAN}}.
