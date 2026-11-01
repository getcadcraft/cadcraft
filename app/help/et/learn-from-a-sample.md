---
title: Õppimine näidisjoonise põhjal
summary: Ava CadCrafti näidismaja või näidis teostusjoonis ja käi läbi selle lehed, tiitelplokk, mõõdud ja kihid.
keywords: näidis, näidised, näitejoonis, õpi, õpetus, läbikäik, tiitelplokk, lehed, teostusjoonis, arhitektuurikomplekt, ava näidis
from: aa1f960a
---

## Mida õpid

Kuidas valmis komplekt on üles ehitatud: mudeliruum, lehed vaateakendega mõõtkavas, tiitelplokk atribuutidega, mõõdud jalgades ja tollides ning millimeetrites, kihid. Näidised on CadCrafti enda omad ja neid võib vabalt kasutada mis tahes otstarbel (CC0).

## Näidise avamine

1. Vasakpaneelis jaotises {{ui:Joonis}} klõpsa {{ui:Ava näidis}} (või sisesta {{cmd:SAMPLES}}; lindi stiilides on see menüüs {{ui:Fail}}).
2. Klõpsa {{ui:Ava}} nupule {{ui:Näidismaja}} kõrval. See avaneb oma vahekaardil, nii et sinu töö jääb avatuks.

## Vaata mudelit üle

1. Klõpsa {{ui:Ulatus}} (või sisesta `ZOOM`, siis `E`): põrandaplaan, eestvaade, lõige ja seinadetail.
2. Jaotises {{ui:Kihid}} klõpsa `A-ANNO-DIMS` kõrval olevale silmale, et mõõdud peita, ja uuesti, et need näidata.
3. Klõpsa ukse peal: {{ui:Omadused}} näitab plokiviidet `DOOR-32`. Uksed ja aknad on plokid, paigutatud pööratult ja peegelduvalt.

## Lehed

1. Klõpsa joonise all {{ui:A-101 FLOOR PLAN}}: ARCH D leht ühe vaateaknaga mõõtkavas 1/4" = 1'-0".
2. Topeltklõpsa vaateaknas, et töötada mudeliga selle kaudu; topeltklõpsa väljaspool, et tagasi tulla.
3. {{ui:A-501 DETAILS}} näitab seinadetaili mõõtkavas 1 1/2" = 1'-0": sama mudel, teine mõõtkava.

## Tiitelplokk

1. Mis tahes lehel topeltklõpsa tiitelplokile: {{ui:Muuda atribuute}} loetleb PROJECT, TITLE, SCALE, DATE, DRAWN ja SHEET.
2. Muuda DRAWN väärtuseks oma initsiaalid ja klõpsa {{ui:OK}}.
3. Et muuta tiitelplokki iga lehe jaoks, vali see ja vali {{ui:Plokid}} › {{ui:Veel}} › {{ui:Muuda kohapeal}}.
   Vaata [Atribuudid](topic:attributes).

## Teostusjoonis

Ava {{ui:Näidis teostusjoonis}} samamoodi. Hallid punktid kihil `SCAN-SLICE` on skanni lõik; seinad kihil `AB-WALL` on nende peale joonistatud. Idaseina on 35 mm ristnurgast väljas: mõõdud ütlevad seda kaks korda, millimeetrites (`AB-DIMS-MM`) ja jalgades ja tollides (`AB-DIMS-FTIN`, samad pikkused läbi mõõtkava). Punased pilvkontuurid kihil `REV-1` tähistavad seda, mida mõõdistus leidis.

## Edasi

- [Muuda mõõdu teksti suurust](topic:change-dimension-text-size)
- [Prindi PDF-iks](topic:plot-pdf): trüki {{ui:A-101 FLOOR PLAN}}.
