---
title: Bëj dhe fut blloqe
summary: Kthe një derë të vizatuar në bllok, vendose sërish me pozicione, shkallë dhe kënde të tjera, dhe pastro blloqet e papërdorura.
keywords: bllok, bmake, insert, ddinsert, simbol, purge, explode, redefine, pikë bazë, referencë, count, bcount, tabelë, csv, atribute, nxjerrje e të dhënave
from: 125a129d
---

## Çfarë do të bësh

Një simbol dere i bërë bllok me emrin `DOOR-900`, pastaj i vendosur tri herë: sipas vizatimit, i rrotulluar 90 gradë dhe i pasqyruar.

Një bllok është një grup objektesh me emër. Vizatohet një herë; çdo vend ku përdoret është një **referencë bllok** që tregon përsëri te i vetmi përcaktim. Seksioni {{ui:Blloqe}} në panelin e majtë liston blloqet në vizatim dhe sa herë përdoret secili.

## Vizato derën

1. Shkruaj `L` dhe shtyp {{key:Enter}}.
2. Shkruaj `0,0` dhe shtyp {{key:Enter}}.
3. Shkruaj `@0,900` dhe shtyp {{key:Enter}}, pastaj shtyp {{key:Enter}} përsëri. Ky është krahu i derës.
4. Shkruaj `A` dhe shtyp {{key:Enter}}.
5. Shkruaj `C` dhe shtyp {{key:Enter}} për të dhënë qendrën më parë.
6. Shkruaj `0,0` dhe shtyp {{key:Enter}} për qendrën.
7. Shkruaj `900,0` dhe shtyp {{key:Enter}} për pikën e fillimit.
8. Shkruaj `0,900` dhe shtyp {{key:Enter}} për pikën e fundit. Ky është harku i hapjes.
9. Kliko {{ui:Shtrirje}}.

Harqet shkojnë në drejtim të kundërt të akrepave të orës nga pika e fillimit deri te pika e fundit.

## Bëj bllokun

1. Shkruaj `B` dhe shtyp {{key:Enter}}, ose kliko {{ui:Bëj}} te grupi Blloqe.
2. Te `Shkruaj emrin e bllokut`, shkruaj `DOOR-900` dhe shtyp {{key:Enter}}.
3. Te `Cakto pikën bazë të futjes`, shkruaj `0,0` dhe shtyp {{key:Enter}}. Kjo është menteshë: pika që bie aty ku vendos bllokun.
4. Te `Përzgjidh objektet`, tërhiq një dritare rreth krahut dhe harkut.
5. Shtyp {{key:Enter}}.

Historiku thotë `Blloku "DOOR-900" u bë nga 2 objekte, dhe ato u zëvendësuan me një referencë të vetme ndaj tij.` Paneli {{ui:Blloqe}} e liston DOOR-900 me `1×` pranë: një referencë. Kliko derën: tani përzgjidhet si një objekt i vetëm, një "Referencë blloku".

:::tip
Mund të përzgjedhësh objektet më parë dhe pastaj të shkruash `B`. CadCraft prapë kërkon emrin dhe pikën bazë, pastaj përdor përzgjedhjen tënde.
:::

## Fut bllokun

1. Shkruaj `I` dhe shtyp {{key:Enter}}, ose kliko {{ui:Fut}} pranë DOOR-900 në panelin {{ui:Blloqe}}.
2. Te `Shkruaj emrin e bllokut ose [Skedar (F)/Bibliotekë (L)] <DOOR-900>`, shtyp {{key:Enter}}. (Butoni {{ui:Fut}} i panelit e plotëson emrin për ty.)
3. Dera ndjek kryqëzuesin. Kliko aty ku duhet të jetë menteshë.

Shfaqet një derë e dytë.

## Fut i rrotulluar ose i shkallëzuar

1. Shkruaj `I` dhe shtyp {{key:Enter}}, pastaj shtyp {{key:Enter}} për të pranuar emrin.
2. Te `Cakto pikën e futjes [Shkallë/Rrotullo]`, shkruaj `R` dhe shtyp {{key:Enter}}.
3. Shkruaj `90` dhe shtyp {{key:Enter}}. Paraqitja rrotullohet.
4. Kliko për ta vendosur.

Shkruaj `S` në vend të kësaj për të vendosur një faktor shkalle; ai zbatohet në të dy drejtimet. Shkalla dhe rrotullimi mbahen mend për futjen e ardhshme. Për ta pasqyruar një derë, fute dhe pastaj përdor {{cmd:MIRROR}} mbi referencën.

## Ndrysho një bllok të vendosur

Përzgjidh një referencë bllokut. Në panelin e djathtë mund të ndryshosh {{ui:X}}, {{ui:Y}}, {{ui:Shkalla X}}, {{ui:Shkalla Y}} dhe {{ui:Rrotullim}}. Një {{ui:Shkalla X}} negative e kthen.

## Ripërcakto një bllok

Për të ndryshuar çdo derë njëherësh, bëj një bllok me të njëjtin emër:

1. Vizato versionin e ri të derës.
2. Shkruaj `B` dhe shtyp {{key:Enter}}, dhe shkruaj `DOOR-900`.
3. Te `Blloku "DOOR-900" ekziston tashmë. Ta ripërcaktosh?`, shkruaj `Y` dhe shtyp {{key:Enter}}.
4. Jep pikën bazë dhe përzgjidh objektet e reja, si më parë.

Çdo referencë ndaj DOOR-900 tani tregon versionin e ri.

Ose redakto vetë bllokun: {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Redakto bllokun}} ({{cmd:BEDIT}}) e hap veçmas, dhe {{ui:Ruaj bllokun}} e kthen mbrapsht. Shih [Atributet e blloqeve](topic:attributes#change-a-block-the-block-editor).

## Numëro blloqet dhe eksporto një tabelë

Shkruaj {{cmd:COUNT}} (ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Numëro blloqet}}), pastaj:

- kliko një derë: çdo derë në këtë hapësirë përzgjidhet, dhe historiku thotë sa janë këtu dhe në gjithë vizatimin;
- ose shtyp {{key:Enter}}: historiku liston çdo bllok me numërimin e tij, më të shumtin e parë;
- ose shkruaj `E`, pastaj `C` për një CSV të numërimeve (në model, në fletë, gjithsej) ose `A` për një rresht për referencë me shtresën, pozicionin, rrotullimin dhe çdo vlerë atributi, një tabelë që mund ta hapësh në një fletë llogaritëse.

Blloqet pa emër (përmasat, tabelat) dhe referencat brenda blloqeve të tjerë nuk numërohen. Qelizat që fillojnë si formulë (`=`, `+`, `-`, `@`) marrin një `'` në fillim, që fleta llogaritëse t'i shfaqë si tekst.

## Shpjego dhe pastro

- {{cmd:EXPLODE}} (`X`) kthen një referencë bloku të përzgjedhur në objekte të veçanta. Përcaktimi mbetet.
- {{cmd:PURGE}} (`PU`) heq përcaktimet e blloqeve që askush nuk i përdor më. Historiku thotë sa hoqi.

## Emrat e blloqeve

Një emër mund të ketë deri në 255 karaktere dhe mund të përmbajë hapësira, por nuk mund të fillojë me yllthin, dhe nuk mund të përmbajë `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ose një backtick. Kur ruan DXF R12, emrat shkruhen me shkronja të mëdha; karakteret që nuk janë shkronja, shifra, `$`, `_` ose `-` bëhen `_`, dhe emrat pritën në 31 karaktere. Historiku thotë sa u ndryshuan. Emrat e shkurtër me shkronja të mëdha, shifra dhe vija lidhëse, si `DOOR-900`, mbeten të pandryshuar. Një DWG i ruajtur mban emrat siç i shkrove, me shkronja të mëdha dhe të vogla; vetëm karakteret që DWG nuk i lejon ndryshojnë (një `|` bëhet `$0$`, të tjerat bëhen `_`).

## Shkruaj një bllok ose objekte në skedarin e tyre

Shkruaj `W` ({{cmd:WBLOCK}}) dhe zgjidh **Objekte**, **Bllok** ose **E gjithë vizatimi**. Rezultati është një DWG ose DXF i ri që mban vetëm shtresat, stilet dhe blloqet që përdor, me pikën bazë tënde si origjinë. Për objektet mund t'i mbash, t'i kthesh në bllok ose t'i fshish nga ky vizatim.

## Gabimet e zakonshme

- **Blloku ra larg kryqëzuesit.** Pika bazë nuk ishte mbi objektet. Bëje sërish bllokun me pikën bazë në një qoshe ose menteshë.
- **"No objects selected; nothing made."** Shtypi {{key:Enter}} para se të kishe përzgjedhur diçka. Përzgjidh objektet, pastaj shtyp {{key:Enter}}.
- **"This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK)."** Ky vizatim nuk ka ende blloqe: shkruaj `F` për të sjellë një bllok nga një vizatim tjetër, ose `L` për bibliotekën (ose bëje një me BLOCK). Shih [Fut nga një skedar ose biblioteka](topic:insert-from-file-and-library).
- **"A viewport cannot go in a block."** Një dritare pamjeje nuk mund të vendoset në bllok. Lër kornizat e dritareve jashtë përzgjedhjes.
