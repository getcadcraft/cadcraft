---
title: Enheter ved import: en fil oppgir sine enheter, eller du blir spurt først
summary: Når en fil du henter inn i en tegning oppgir sine enheter, konverterer CadCraft den og sier fra om det. Når den ikke gjør det, spør CadCraft før noe plasseres, og husker svaret for den filen.
keywords: enheter, import, sett inn, xref, legg ved, XATTACH, INSERT, OBJ, DWG, DXF, punktsky, bibliotekselement, millimeter, meter, tommer, fot, målestokk, feil størrelse, for stor, for liten, 1000 ganger, spør, husket, INSUNITS
from: 558f1293
---

## Det du gjør

Henter inn en fil i en tegning og sørger for at den kommer inn i riktig størrelse.

## Trinn

1. Hent inn filen som vanlig: `INSERT` › Fil, `XATTACH`, `POINTCLOUDATTACH`, eller {{ui:Filer}} i Bibliotek-panelet.
2. Hvis filen oppgir sine enheter, spørres det ikke om noe. Kommandolinjen sier hvilke enheter filen oppgir, og målestokken som brukes når de avviker fra tegningens.
3. Hvis den ikke gjør det, spør en dialog etter **Enheter for** filen. Velg hva én enhet i filen er, og klikk {{ui:Bruk disse enhetene}}. Ingenting plasseres før du har svart.
4. {{ui:Avbryt}} (eller {{key:Esc}}) henter inn ingenting.

## Hvilke filer som oppgir sine enheter

- **DWG og DXF**: tegningens innsettingsenheter (`$INSUNITS`). En fil uten dem blir spurt om.
- **Punktskyer**: LAS og LAZ med et koordinatsystem, E57, PTX og PLY oppgir sine. Andre spørres det om.
- **OBJ**: oppgir aldri enheter. Du blir spurt.
- **glTF og GLB**: meter, etter formatets egen regel.
- **Bilder**: har ingen egen størrelse. `IMAGEATTACH` spør etter bredden, og tilbyr bredden du oppga for den filen tidligere.
- **Skanninger**: en skanning som oppgir sin tetthet (punkter per tomme), kommer inn i sin virkelige størrelse i tegningens enheter; `SCANATTACH` spør fortsatt etter bredden.
- **Tillegget Punktskyer**: spør når du bygger en sky der filen ikke oppgir noen enhet, og merker skyens tall med enheten den har.

## Greit å vite

- Å åpne en DWG eller DXF som sin egen tegning spør ikke om noe: kommandolinjen sier hvilke enheter filen oppgir, eller at den ikke oppgir noen. Egenskaper setter enhetene for en tegning.
- Når denne tegningen heller ikke har enheter, kan en fil ikke konverteres: den plasseres tall for tall, og kommandolinjen sier det.
- Svaret huskes for den filen på denne datamaskinen, i alle CadCraft-appene. Neste gang den hentes inn, spørres det ikke, og kommandolinjen sier at de husede enhetene ble brukt.
- For å bli spurt igjen: kommandopaletten ({{key:Mod+K}}) › **Spør igjen om enhetene til importerte filer**.
