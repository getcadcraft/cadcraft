---
title: Učenje na primjeru crteža
summary: Otvorite CadCraftovu primjer kuće ili primjer izvedenog stanja i prođite kroz njegove listove, zaglavlje, kote i slojeve.
keywords: primjer, primjeri, primjer crteža, učenje, vodič, obilazak, zaglavlje, listovi, izvedeno stanje, arhitektonski komplet, otvori primjer
from: aa1f960a
---

## Što ćete naučiti

Kako je izgrađen gotov komplet: prostor modela, listovi s viewportima u mjerilu, zaglavlje s atributima, kote u stopama i inčima te u milimetrima, slojevi. Primjeri su CadCraftovi vlastiti i slobodni za bilo kakvu uporabu (CC0).

## Otvaranje primjera

1. U lijevoj ploči, pod {{ui:Crtež}}, kliknite {{ui:Otvori primjer}} (ili upišite {{cmd:SAMPLES}}; u stilovima s vrpcom nalazi se u izborniku {{ui:Datoteka}}).
2. Kliknite {{ui:Otvori}} pored {{ui:Primjer kuće}}. Otvara se u vlastitoj kartici, pa vaš rad ostaje otvoren.

## Razgledavanje modela

1. Kliknite {{ui:Opseg}} (ili upišite `ZOOM`, zatim `E`): tlocrt, glavno pročelje, presjek i detalj zida.
2. U {{ui:Slojevi}} kliknite oko pored `A-ANNO-DIMS` da sakrijete kote, i ponovno da ih prikažete.
3. Kliknite vrata: Svojstva prikazuju referencu bloka `DOOR-32`. Vrata i prozori su blokovi, postavljeni zakrenuti i zrcaljeni.

## Listovi

1. Kliknite {{ui:A-101 FLOOR PLAN}} ispod crteža: ARCH D list s jednim viewportom u mjerilu 1/4" = 1'-0".
2. Dvaput kliknite unutar viewporta da kroz njega radite na modelu; dvaput kliknite izvan da se vratite.
3. {{ui:A-501 DETAILS}} prikazuje detalj zida u mjerilu 1 1/2" = 1'-0": isti model, drugo mjerilo.

## Zaglavlje

1. Na bilo kojem listu dvaput kliknite zaglavlje: {{ui:Uredi atribute}} navodi PROJECT, TITLE, SCALE, DATE, DRAWN i SHEET.
2. Promijenite DRAWN u svoje inicijale i kliknite {{ui:U redu}}.
3. Da promijenite samo zaglavlje na svakom listu, odaberite ga i izaberite {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi na mjestu}}. Vidi [Atributi](topic:attributes).

## Izvedeno stanje

Otvorite {{ui:Primjer izvedenog stanja}} na isti način. Sive točke na `SCAN-SLICE` isječak su skeniranja; zidovi na `AB-WALL` ucrtani su preko njih. Istočni zid je 35 mm izvan pravog kuta: kote to govore dvaput, u milimetrima (`AB-DIMS-MM`) i u stopama i inčima (`AB-DIMS-FTIN`, iste duljine kroz mjerilo mjerenja). Crveni oblaci na `REV-1` označavaju što je izmjera pronašla.

## Sljedeće

- [Promjena veličine teksta kote](topic:change-dimension-text-size)
- [Plotanje u PDF](topic:plot-pdf): plotajte {{ui:A-101 FLOOR PLAN}}.
