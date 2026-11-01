---
title: Mokykitės iš pavyzdinio brėžinio
summary: Atidarykite CadCraft pavyzdinį namą arba pavyzdinį kaip pastatyta brėžinį ir apžiūrėkite jo lapus, antraštės bloką, matmenis ir sluoksnius.
keywords: pavyzdys, pavyzdžiai, pavyzdinis brėžinys, mokytis, pamoka, instrukcija, antraštės blokas, lapai, kaip pastatyta, architektūrinis rinkinys, atverti pavyzdį
from: aa1f960a
---

## Ko išmoksite

Kaip sudaromas baigtas rinkinys: modelio erdvė, lapai su vaizdo langais tam tikru mastelyje, antraštės blokas su atributais, matmenys pėdomis ir coliais bei milimetrais, sluoksniai. Pavyzdžiai yra patys CadCraft ir laisvai naudojami bet kam (CC0).

## Atidaryti pavyzdį

1. Kairiajame skydelyje, skiltyje {{ui:Drawing}}, spustelėkite {{ui:Open a sample}} (arba įveskite {{cmd:SAMPLES}}; juostos stiliuose jis yra meniu {{ui:File}}).
2. Spustelėkite {{ui:Open}} šalia {{ui:Pavyzdinis namas}}. Jis atsidaro savo skirtuke, todėl jūsų darbas lieka atviras.

## Apžiūrėkite modelį

1. Spustelėkite {{ui:Extents}} (arba įveskite `ZOOM`, tada `E`): planą, priekinį fasadą, pjūvį ir sienos detalę.
2. Skiltyje {{ui:Layers}} spustelėkite akies piktogramą šalia `A-ANNO-DIMS`, kad paslėptumėte matmenis, ir dar kartą, kad juos vėl parodytumėte.
3. Spustelėkite duris: {{ui:Properties}} rodo bloko nuorodą `DOOR-32`. Durys ir langai yra blokai, įdėti pasukti ir atspindėti.

## Lapai

1. Spustelėkite {{ui:A-101 FLOOR PLAN}} po brėžiniu: ARCH D lapas su vienu vaizdo langu 1/4" = 1'-0" mastelyje.
2. Dukart spustelėkite vaizdo lango viduje, kad dirbtumėte su modeliu per jį; dukart spustelėkite už jo ribų, kad grįžtumėte.
3. {{ui:A-501 DETAILS}} rodo sienos detalę 1 1/2" = 1'-0" mastelyje: tas pats modelis, kitas mastelis.

## Antraštės blokas

1. Bet kuriame lape dukart spustelėkite antraštės bloką: {{ui:Edit attributes}} rodo PROJECT, TITLE, SCALE, DATE, DRAWN ir SHEET.
2. Pakeiskite DRAWN į savo inicialus ir spustelėkite {{ui:OK}}.
3. Kad pakeistumėte patį antraštės bloką visuose lapuose, pažymėkite jį ir pasirinkite {{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. Žr. [Atributai](topic:attributes).

## Kaip pastatyta

Taip pat atidarykite {{ui:Pavyzdinis kaip pastatyta}}. Pilki taškai ties `SCAN-SLICE` yra skenavimo pjūvis; sienos ties `AB-WALL` nubrėžtos per juos. Rytinė siena nukrypusi nuo kvadrato 35 mm: matmenys tai nurodo du kartus – milimetrais (`AB-DIMS-MM`) ir pėdomis bei coliais (`AB-DIMS-FTIN`, tie patys ilgiai per matavimo mastelį). Raudonieji debesėliai `REV-1` žymi tai, ką rado apžiūra.

## Toliau

- [Keisti matmens teksto dydį](topic:change-dimension-text-size)
- [Spausdinti į PDF](topic:plot-pdf): išspausdinkite {{ui:A-101 FLOOR PLAN}}.
