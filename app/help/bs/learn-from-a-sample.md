---
title: Učenje na primjeru crteža
summary: Otvorite CadCraft-ov primjer kuće ili primjer as-built i prođite kroz njegove listove, natpisni blok, kote i slojeve.
keywords: primjer, primjeri, primjer crteža, učenje, vodič, obilazak, natpisni blok, listovi, as-built, set za arhitekturu, otvori primjer
from: aa1f960a
---

## Šta ćete naučiti

Kako se gotov set pravi: prostor modela, listovi sa prozorima pregleda u razmjeri, natpisni blok sa atributima, kote u stopama i inčima i u milimetrima, slojevi. Primjeri su CadCraft-ovi vlastiti i slobodni za upotrebu u bilo koju svrhu (CC0).

## Otvaranje primjera

1. U lijevom panelu, pod {{ui:Crtež}}, kliknite {{ui:Otvori primjer}} (ili upišite {{cmd:SAMPLES}}; u stilovima trake to je u meniju {{ui:Datoteka}}).
2. Kliknite {{ui:Otvori}} pored {{ui:Primjer kuće}}. Otvara se u vlastitoj kartici, pa vaš rad ostaje otvoren.

## Pogledajte model

1. Kliknite {{ui:Granice}} (ili upišite `ZOOM`, pa `E`): tlocrt, prednji izgled, presjek i detalj zida.
2. U {{ui:Slojevi}} kliknite oko pored `A-ANNO-DIMS` da sakrijete kote, pa opet da ih prikažete.
3. Kliknite vrata: {{ui:Svojstva}} pokazuju referencu bloka `DOOR-32`. Vrata i prozori su blokovi, postavljeni zakrenuti i zrcaljeni.

## Listovi

1. Kliknite {{ui:A-101 FLOOR PLAN}} ispod crteža: list ARCH D sa jednim prozorom pregleda u razmjeri 1/4" = 1'-0".
2. Dvaput kliknite unutar prozora pregleda da radite na modelu kroz njega; dvaput kliknite van njega da se vratite.
3. {{ui:A-501 DETAILS}} prikazuje detalj zida u 1 1/2" = 1'-0": isti model, druga razmjera.

## Natpisni blok

1. Na bilo kojem listu dvaput kliknite natpisni blok: {{ui:Uredi atribute}} navodi PROJECT, TITLE, SCALE, DATE, DRAWN i SHEET.
2. Promijenite DRAWN u svoje inicijale i kliknite {{ui:U redu}}.
3. Da promijenite sam natpisni blok na svakom listu, izaberite ga i odaberite {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi na mjestu}}. Vidi [Atributi](topic:attributes).

## Kao izgrađeno (as-built)

Otvorite {{ui:Primjer as-built}} na isti način. Sive tačke na `SCAN-SLICE` su isječak skeniranja; zidovi na `AB-WALL` su precrtani preko njih. Istočni zid je 35 mm izvan pravog ugla: kote to kažu dvaput, u milimetrima (`AB-DIMS-MM`) i u stopama i inčima (`AB-DIMS-FTIN`, iste dužine kroz razmjeru mjerenja). Crveni oblaci na `REV-1` označavaju ono što je pregled našao.

## Dalje

- [Promjena veličine teksta kote](topic:change-dimension-text-size)
- [Štampaj u PDF](topic:plot-pdf): štampajte {{ui:A-101 FLOOR PLAN}}.
