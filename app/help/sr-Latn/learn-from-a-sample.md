---
title: Učenje na primeru crteža
summary: Otvorite primer kuće ili primer izvedenog stanja i prođite kroz listove, tablicu natpisa, kote i slojeve.
keywords: primer, primeri, primer crteža, učenje, vodič, obilazak, tablica natpisa, listovi, izvedeno stanje, arhitektonski set, otvori primer
from: aa1f960a
---

## Šta ćete naučiti

Kako se gotov set pravi: prostor modela, listovi sa prozorima pogleda u razmeri, tablica natpisa sa atributima, kote u stopama i inčima i u milimetrima, slojevi. Primeri su CadCraft-ovi i slobodni za bilo kakvu upotrebu (CC0).

## Otvorite primer

1. U levom panelu, ispod {{ui:Crtež}}, kliknite {{ui:Otvori primer}} (ili ukucajte {{cmd:SAMPLES}}; u stilovima trake sa karticama nalazi se u meniju {{ui:Datoteka}}).
2. Kliknite {{ui:Otvori}} pored {{ui:Primer kuće}}. Otvara se na sopstvenoj kartici, pa vaš rad ostaje otvoren.

## Pogledajte model

1. Kliknite {{ui:Granice}} (ili ukucajte `ZOOM`, pa `E`): osnovu prizemlja, prednji izgled, presek i detalj zida.
2. U {{ui:Slojevi}}, kliknite oko pored `A-ANNO-DIMS` da sakrijete kote, a zatim opet da ih prikažete.
3. Kliknite vrata: {{ui:Svojstva}} prikazuju referencu bloka `DOOR-32`. Vrata i prozori su blokovi, postavljeni okrenuti i ogledalno preslikani.

## Listovi

1. Kliknite {{ui:A-101 OSNOVA PRIZEMLJA}} ispod crteža: list ARCH D sa jednim prozorom pogleda u razmeri 1/4" = 1'-0".
2. Dvaput kliknite unutar prozora pogleda da radite na modelu kroz njega; dvaput kliknite van njega da se vratite.
3. {{ui:A-501 DETALJI}} prikazuje detalj zida u razmeri 1 1/2" = 1'-0": isti model, druga razmera.

## Tablica natpisa

1. Na bilo kom listu, dvaput kliknite tablicu natpisa: {{ui:Uredi atribute}} navodi PROJECT, TITLE, SCALE, DATE, DRAWN i SHEET.
2. Promenite DRAWN na svoje inicijale i kliknite {{ui:U redu}}.
3. Da promenite samu tablicu natpisa na svakom listu, izaberite je i odaberite {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi na mestu}}. Pogledajte [Atributi](topic:attributes).

## Izvedeno stanje

Otvorite {{ui:Primer izvedenog stanja}} na isti način. Sive tačke na `SCAN-SLICE` su presek skeniranja; zidovi na `AB-WALL` su precrtani preko njih. Istočni zid nije pravougaon za 35 mm: kote to kažu dvaput, u milimetrima (`AB-DIMS-MM`) i u stopama i inčima (`AB-DIMS-FTIN`, iste dužine kroz razmeru merenja). Crveni oblaci na `REV-1` označavaju ono što je snimanje pronašlo.

## Dalje

- [Promena veličine teksta kote](topic:change-dimension-text-size)
- [Štampanje u PDF](topic:plot-pdf): štampajte {{ui:A-101 OSNOVA PRIZEMLJA}}.
