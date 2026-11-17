---
title: Atributet e bllokut
summary: Shiko dhe ndrysho vlerat që mban një referencë bllok, si një numër artikulli ose një prodhues, dhe mbaji ato kur ruan një kopje.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, bllok titulli, redakto në vend, redaktuesi i atributeve, attdef, përcakto atributin, bedit, redaktuesi i bllokut, bclose, atribut, atributet, attrib, etiketë, numër artikulli, vlerë, i padukshëm, konstant, bllok, vetitë, listë, etiketë pajisjeje
from: 34d307c7
---

## Çfarë janë atributet

Një atribut është një vlerë e emërtuar që udhëton me një referencë bllok: numri i artikullit të një etikete pajisjeje, emri i një etikete dhome, vlerësimi i zjarrit i një dyeri. Përkufizimi i bllokut thotë cilat atribute ka (secili ka një **etiketë**, një **kërkesë**, një **vlerë paracaktuar** dhe një vend, madhësi dhe kënd për tekstin e vet). Çdo referencë e bllokut mban vlerat e veta.

Disa atribute janë **të padukshme**: mbajnë të dhëna, si një prodhues ose një numër modeli, por nuk vizatohen kurrë. Disa janë **konstante**: janë të njëjta për çdo referencë, të fiksuara nga blloku.

## Ku vijnë atributet

- Blloqet në skedarët DWG dhe DXF që hap i mbajnë atributet e tyre, me vlerat e çdo reference.
- Blloqet që sjell me {{cmd:INSERT}} dhe opsionin {{ui:File}} i mbajnë të tyre. Shih [Fut nga një skedar ose biblioteka](topic:insert-from-file-and-library).
- Artikujt e bibliotekës vijnë si blloqe me atribute: një numër artikulli i dukshëm dhe të dhënat e artikullit, të padukshme.
- Blloqet që bën vetë: përcakto atributet me {{cmd:ATTDEF}} së pari (më poshtë), pastaj përzgjidhi me objektet e tjera kur bën bllokun.

## Përcakto atribute për blloqet e tua

1. Vizato vijat e bllokut, për shembull një etiketë dhome.
2. Zgjidh {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Përcakto atributin}}, ose shkruaj `ATT` dhe shtyp {{key:Enter}}.
3. Historiku tregon mënyrat (`Invisible=No Constant=No Preset=No`). Shkruaj `I`, `C` ose `P` për të ndërruar një, dhe shtyp {{key:Enter}} kur janë të sakta. Vlerat e padukshme ruhen, por nuk vizatohen; një vlerë konstante ka të njëjtën vlerë në çdo referencë; një vlerë e paracaktuar nuk kërkohet kur fut bllokun.
4. Shkruaj etiketën (për shembull `ROOM_NO`: shkronja të mëdha, pa hapësira), kërkesën (`Room number`) dhe një vlerë paracaktuar (`101`).
5. Kliko aty ku shkon vlera, dhe jep lartësinë dhe rrotullimin. Etiketa shfaqet në vizatim.
6. Bëj bllokun me {{cmd:BLOCK}}, duke përzgjedhur vijat dhe përkufizimet e atributeve bashkë. Referenca që i zëvendëson merr vlerat paracaktuar; çdo {{cmd:INSERT}} i ri i kërkon ato.

Një përkufizim atributi i përzgjedhur shfaq {{ui:Etiketa}}, {{ui:Kërkesa}}, {{ui:Paracaktuar}} dhe mënyrat te {{ui:Vetitë}}.

## Ndrysho një bllok: redaktuesi i bllokut

{{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Redakto bllokun}} ({{cmd:BEDIT}}, `BE`) hap një bllok më vete: shkruaj emrin e tij (ose përzgjidh një referencë më parë). Një shirit në krye tregon cilin bllok po redakton. Vizato, fshi dhe ndrysho objektet e tij me komandat e zakonshme, dhe shto ose ndrysho përkufizimet e atributeve. Pastaj kliko {{ui:Ruaj bllokun}} (ose shkruaj {{cmd:BCLOSE}} dhe `S`): çdo referencë tregon ndryshimin, dhe një {{key:Mod+Z}} i zhbën të gjitha. {{ui:Hidh ndryshimet}} (`BCLOSE`, `D`) e lë bllokun ashtu si ishte.

Kur shton, heq ose ndryshon përkufizime atributesh, ruajtja gjithashtu i sjell të gjitha referencat në rregull: vlerat që shkrove mbahen, një atribut i ri merr vlerën e tij paracaktuar, një atribut i hequr zhduket, dhe çdo atribut kthehet aty ku e vendos përkufizimi. Historiku thotë sa referenca u përditësuan.

## Redakto një bllok titulli aty ku është (REFEDIT)

Një bllok titulli në një fletë shpesh ndodhet brenda një blloku. Për ta ndryshuar vijat ose tekstet pa dalë nga fleta:

1. Përzgjidh bllokun e titullit, pastaj {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Ndrysho në vend}} (ose shkruaj {{cmd:REFEDIT}}).
2. Përmbajtja e tij bëhet objekte të zakonshme aty ku janë; çdo gjë tjetër zbehet dhe nuk mund të ndryshohet.
3. Ndrysho, fshi ose vizato: objektet e reja bëhen pjesë e bllokut.
4. Kliko {{ui:Ruaj bllokun}} te shiriti në krye (ose shkruaj {{cmd:REFCLOSE}} dhe `S`). Çdo referencë tregon ndryshimin, dhe një {{key:Mod+Z}} zhbën tërë redaktimin. {{ui:Hidh}} e lë bllokun ashtu si ishte.

Një vizatim i lidhur, një bllok dinamik, ose një referencë e shkallëzuar ndryshe në gjerësi dhe lartësi nuk mund të redaktohet në vend: përdor {{cmd:BEDIT}} (ose hap vizatimin e lidhur).

:::note
Ruaj ose hidh në redaktuesin e bllokut para se të ruash vizatimin: një skedar i ruajtur ndërsa redaktuesi është i hapur ka bllokun siç ishte përpara redaktimit.
:::

## Plotëso vlerat kur vendos një bllok

1. Shkruaj `I` dhe shtyp {{key:Enter}}, shkruaj emrin e bllokut dhe shtyp {{key:Enter}}.
2. Kliko aty ku shkon.
3. CadCraft kërkon çdo vlerë, për shembull `Enter Item number (ITEM) <>`. Shkruaj vlerën dhe shtyp {{key:Enter}}, ose shtyp {{key:Enter}} për të mbajtur vlerën paracaktuar që shfaqet në kllapa këndore.

Vlerat që blloku i shënon si paracaktuara, dhe ato konstante, nuk kërkohen. Ato marrin vlerën e tyre paracaktuar.

## Shiko dhe ndrysho vlerat

1. Kliko një referencë bllok.
2. Në panelin e djathtë, nën {{ui:Atributet}}, çdo etiketë ka vlerën e vet. Ato të padukshme thonë `hidden`.
3. Kliko një vlerë, shkruaj të renë dhe shtyp {{key:Enter}}.

Vizatimi shfaq vlerën e re menjëherë. Çdo ndryshim është një hap: {{key:Mod+Z}} e zhbën.

**Redaktuesi i atributeve.** Kliko dy herë një referencë me atribute (ose {{cmd:EATTEDIT}}): dialogu {{ui:Ndrysho atributet}} liston çdo etiketë me kërkesën dhe vlerën e saj. Shkruaj vlera të reja; kliko një rresht për të ndryshuar {{ui:Lartësi}}, {{ui:Rrotullim}}, {{ui:Faktorin e gjerësisë}}, {{ui:Drejtim}}, {{ui:Shtresa}}, {{ui:Ngjyra}} dhe {{ui:[E padukshme (I)]}} të atributit, vetëm për këtë referencë. {{ui:Zbato}} e mban dialogun të hapur; {{ui:OK}} zbaton dhe mbyll. Çdo {{ui:Zbato}} ose {{ui:OK}} është një hap zhbërjeje.

**Në vijën e komandës**, {{cmd:ATTEDIT}} pyet çdo vlerë me radhë: shkruaj një të re, ose shtyp {{key:Enter}} për ta mbajtur.

## Ndrysho përkufizimet e atributeve (BATTMAN, ATTSYNC)

{{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Menaxheri i atributeve}} ({{cmd:BATTMAN}}) liston atributet e një blloku: ndrysho një etiketë, kërkesë ose vlerë paracaktuar, shëno {{ui:[E padukshme (I)]}}, {{ui:[Konstante (C)]}} ose {{ui:Paracaktuar}}, dhe lëviz ato lart ose poshtë (radha në të cilën pyeten vlerat). Me {{ui:Përditëso referencat (vlerat ruhen)}} të shënuar, {{ui:Zbato}} sjell edhe çdo referencë në rregull; një etiketë e riemëruar mban vlerat e veta. Çdo {{ui:Zbato}} është një hap zhbërjeje.

{{cmd:ATTSYNC}} i sjell referencat në përputhje me përkufizimet e blloqeve të tyre me dorë: `S` zgjedh një referencë, `N` emëron një bllok, `A` i bën të gjitha blloqet. Vlerat ruhen.

Vlerat e fushave të një artikulli bibliotekë (id, versioni, licenca dhe atribuimi i tij) shfaqen, por nuk mund të redaktohen, që kontrolli për përditësime të vazhdojë të punojë. Numri i artikullit dhe sasia janë tuajat për t'i ndryshuar.

## Listo ato

Përzgjidh referencat dhe shkruaj `LI` (për {{cmd:LIST}}). Historiku shfaq çdo atribut si `TAG = value`, me `(invisible)` ose `(constant)` aty ku zbatohet.

## Lëvizja, rrotullimi dhe shpërbërja

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} dhe {{cmd:MIRROR}} i mbajnë vlerat; teksti lëviz me bllokun dhe mbetet i lexueshëm.
- {{cmd:EXPLODE}} i kthen atributet e dukshme në tekst të thjeshtë me vlerat e tyre. Ato të padukshmet hiqen.

## Ruajtja

Një DWG dhe një DXF i ruajtur mbajnë çdo atribut: përkufizimet e çdo blloku (edhe ato të padukshme, konstante dhe paracaktuar) dhe vlerat e çdo reference. Programet e tjera CAD i lexojnë si atribute të zakonshme bllokut.

Në një DXF R12, një vlerë më e gjatë se 255 karaktere pritet në 255, dhe historiku e thotë këtë.

## Gabime të zakonshme

- **Një vlerë nuk shfaqet në vizatim.** Është e padukshme, ose është bosh. Vlerat e padukshme ende shfaqen në panelin e djathtë.
- **Vlera që shkrova shkoi në vijën e komandës.** Kliko fillimisht te kutia e vlerës në panelin e djathtë.
