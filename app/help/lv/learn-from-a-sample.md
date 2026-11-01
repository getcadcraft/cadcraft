---
title: Mācieties no parauga rasējuma
summary: Atveriet CadCraft paraugu māju vai izpildīto (as-built) paraugu un izejiet cauri tā lapām, titulblokam, izmēriem un slāņiem.
keywords: paraugs, paraugi, piemēra rasējums, mācīties, apmācība, pamācība, titulbloks, lapas, izpildītais, arhitektūras komplekts, atvērt paraugu
from: aa1f960a
---

## Ko iemācīsieties

Kā veidojas gatavs komplekts: modeļa telpa, lapas ar skatlogiem noteiktā mērogā, titulblokā ar atribūtiem, izmēri pēdās un collās un milimetros, slāņi. Paraugi ir CadCraft paši un bez maksas izmantojami jebkam (CC0).

## Atvērt paraugu

1. Kreisajā panelī, zem {{ui:Rasējums}}, noklikšķiniet uz {{ui:Atvērt paraugu}} (vai ierakstiet {{cmd:SAMPLES}}; lentes stilos tas atrodas izvēlnē {{ui:Fails}}).
2. Noklikšķiniet uz {{ui:Atvērt}} blakus {{ui:Paraugs: māja}}. Tas atveras savā cilnē, tāpēc jūsu darbs paliek atvērts.

## Apskatiet modeli

1. Noklikšķiniet uz {{ui:Robežas}} (vai ierakstiet `ZOOM`, tad `E`): stāva plāns, priekšējā fasāde, griezums un sienas detaļa.
2. Sadaļā {{ui:Slāņi}} noklikšķiniet uz acs blakus `A-ANNO-DIMS`, lai paslēptu izmērus, un vēlreiz, lai tos parādītu.
3. Noklikšķiniet uz durvīm: {{ui:Rekvizīti}} rāda `DOOR-32` bloka atsauci. Durvis un logi ir bloki, novietoti pagriezti un spoguļoti.

## Lapas

1. Noklikšķiniet uz {{ui:A-101 FLOOR PLAN}} zem rasējuma: ARCH D lapa ar vienu skatlogu mērogā 1/4" = 1'-0".
2. Veiciet dubultklikšķi skatlogā, lai ar to strādātu pie modeļa; veiciet dubultklikšķi ārpusē, lai atgrieztos.
3. {{ui:A-501 DETAILS}} rāda sienas detaļu mērogā 1 1/2" = 1'-0": tas pats modelis, cits mērogs.

## Titulbloks

1. Jebkurā lapā veiciet dubultklikšķi uz titulbloka: {{ui:Rediģēt atribūtus}} uzskaita PROJECT, TITLE, SCALE, DATE, DRAWN un SHEET.
2. Mainiet DRAWN uz saviem inicialiem un noklikšķiniet uz {{ui:Labi}}.
3. Lai mainītu pašu titulbloku visās lapās, atlasiet to un izvēlieties {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Rediģēt vietā}}. Skatiet [Atribūti](topic:attributes).

## Izpildītais

Atveriet {{ui:Paraugs: izpildītais}} tādā pašā veidā. Pelēkie punkti uz `SCAN-SLICE` ir skenējuma šķēlums; sienas uz `AB-WALL` ir uzzīmētas pār tiem. Austrumu siena ir par 35 mm novirzījusies no taisna leņķa: izmēri to saka divreiz, milimetros (`AB-DIMS-MM`) un pēdās un collās (`AB-DIMS-FTIN`, tie paši garumi caur mērogu). Sarkanie mākoņi uz `REV-1` atzīmē to, ko atklāja uzmērīšana.

## Tālāk

- [Mainīt izmēra teksta izmēru](topic:change-dimension-text-size)
- [Drukāt PDF](topic:plot-pdf): izdrukājiet {{ui:A-101 FLOOR PLAN}}.
