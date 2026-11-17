---
title: Oznake: atributi, ki polnijo razpredelnice
summary: Določite oznako (njeno vrsto, dovoljene vrednosti, bloke, na katere se nanaša), jo nastavite na sklice blokov in sklice izpišite kot razpredelnico, ki jo lahko shranite kot CSV.
keywords: oznake, oznaka, atribut, razpredelnica, izvleček podatkov, lastnost, požarna odpornost, seznam izbire, sklic na blok, TAGS, csv
from: 9b90bacc
---

**Oznaka** je atribut bloka z opredelitvijo: katero vrsto vrednosti hrani, katere vrednosti so dovoljene in na katere bloke se nanaša. Vrednosti so običajni atributi blokov, zato jih lahko vsak drug program prebere, {{cmd:ATTEDIT}} pa jih prikaže. Nove so samo opredelitve, ki se hranijo v risbi.

## Opredelite in nastavite

Vnesite {{cmd:TAGS}} in izberite:

- {{ui:Opredeli}}: ime (črke, številke, presledek, `_ . -`), vrsto (`text`, `number`, `integer`, `yesno`, `length`, `angle`), dovoljene vrednosti, ločene s `;` (pustite prazno za katero koli), in imena blokov, na katera se nanaša (`DOOR*` ustreza vsakemu bloku, ki se začne z DOOR; prazno pomeni vse bloke).
- {{ui:Komplet}}: ob izbranih sklicih na blok vnesite `FireRating=60 min; Width=850`. Vrednost, ki ni na dovoljenem seznamu, ali ni število pri oznaki za število, je zavrnjena in to je povedano. En korak razveljavitve. Blok, ki atributa nima, ga dobi kot skrit atribut.
- {{ui:Razpredelnica}}: vsak sklic na blok, na katerega se oznaka nanaša, po želji združen po oznaki ali imenu bloka, natisnjen in shranjen kot CSV.
- {{ui:Odstrani (R)}}: pozabi opredelitev; vrednosti ostanejo na sklicih.

Preimenovanje oznake preimenuje njene vrednosti na vsakem sklicu. Imena oznak niso občutljiva na velike in male črke, prav tako kot imena atributov.
