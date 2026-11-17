---
title: Etiketat: atribute që ushqejnë tabelat
summary: Përcakto një etiketë (llojin e saj, vlerat që mund të marrë, blloqet ku zbatohet), vendose te referencat e blloqeve, dhe listoji referencat si një tabelë që mund ta ruash si CSV.
keywords: etiketë, atribut, tabelë, nxjerrje të dhënash, veti, vlerësim zjarri, listë zgjedhjeje, referencë bllok, TAGS, csv
from: 9b90bacc
---

Një **etiketë** është një atribut bllok me një përkufizim: çfarë lloj vlere mban, cilat vlera lejohen, dhe cilët blloqe zbatohet. Vlerat janë atribute të zakonshme bllokesh, kështu që çdo program tjetër i lexon dhe {{cmd:ATTEDIT}} i shfaq. Vetëm përkufizimet janë të reja, dhe ruhen në vizatim.

## Përcakto dhe vendos

Shkruaj {{cmd:TAGS}} dhe zgjidh:

- {{ui:Përcakto}}: një emër (shkronja, shifra, hapësirë, `_ . -`), një lloj (`text`, `number`, `integer`, `yesno`, `length`, `angle`), vlerat e lejuara të ndara me `;` (lëre bosh për çdo vlerë), dhe emrat e blloqeve ku zbatohet (`DOOR*` përputhet me çdo bllok që fillon me DOOR; bosh do të thotë çdo bllok).
- {{ui:Set}}: me referencat e blloqeve të zgjedhura, shkruaj `FireRating=60 min; Width=850`. Një vlerë jashtë listës së lejuar, ose jo numër për një etiketë numerike, refuzohet dhe thuhet. Një hap i vetëm zhbërjeje. Një bllok që nuk e ka atributin e merr si atribut të fshehur.
- {{ui:Tabelë}}: çdo referencë te një bllok ku zbatohet një etiketë, opsionalisht e grupuar sipas një etikete ose emrit të bllokut, shtypet dhe ruhet si CSV.
- {{ui:Hiq (R)}}: harron një përkufizim; vlerat mbeten te referencat.

Riemërtimi i një etikete e ripemëron vlerat e saj në çdo referencë. Emrat e etiketave nuk janë të ndjeshëm ndaj shkronjave të mëdha, ashtu si emrat e atributeve.
