---
title: Blloqet dinamikë
summary: Çfarë bën CadCraft me blloqet dinamikë në një DWG: mbajnë emrat e tyre të vërtetë, shfaqin gjendjen me të cilën u ruajtën, ndërrojnë gjendjet e dukshmërisë, shfaqin vlerat e tjera dhe mbeten dinamikë kur ruhen.
keywords: bllok dinamik, blloqe dinamike, dukshmëri, gjendje dukshmërie, kthe, shtrij, kërko, parametra, personalizuar, veti blloku, *u blloqe, dinamik
from: dea2ee7c
---

## Çfarë funksionon

Një DWG me blloqe dinamike hapet me ta duke punuar deri këtu:

- **Emrat e tyre të vërtetë.** Një bllok dinamik listohet te paneli {{ui:Blloqe}} me emrin e vet ("Receptacle", "Sink"), jo si bllok `*U` pa emër.
- **Gjendja me të cilën u ruajtën.** Çdo referencë shfaq saktësisht atë që tregoi programi tjetër: gjendjen e dukshmërisë në të cilën ishte vendosur, e shtrirë ose e kthyer ashtu siç u ruajt.
- **Ndërrimi i gjendjes së dukshmërisë.** Zgjidh një referencë (ose disa të të njëjtit bllok), hap {{ui:Vetitë}}, dhe te seksioni {{ui:Të personalizuara}} zgjidh një gjendje tjetër nga lista {{ui:Dukshmëria}}. Referenca shfaq menjëherë atë gjendje, edhe atributet e saj: ata që gjendja i fsheh zhduken, ata që i shfaq paraqiten me vlerat e tyre. Një referencë mban çdo vlerë, kështu që asgjë nuk kthehet bosh; {{ui:Vetitë}} i liston të fshehurat të shënuara si "fshehur". {{key:Mod+Z}} e kthen gjendjen e vjetër me një hap.
- **Grips.** Një bllok dinamik i zgjedhur shfaq grips-et e veta aty ku janë parametrat e tij: një trekëndësh i vogël për gjendjen e dukshmërisë (kliko për listën e gjendjeve), shigjeta në skajet e një distance, një shigjetë e dyfishtë për kthesën. Vetëm grip-i i dukshmërisë vepron sot; të tjerët e thonë këtë në shiritin e statusit.
- **Vlerat e tjera, vetëm për lexim.** Nën listën e dukshmërisë, {{ui:Të personalizuara}} shfaq edhe distancat, këndet e drejtimit, gjendjet e kthesave dhe pikat e blloqut ashtu siç i mban vizatimi.
- **Redaktimi i gjendjeve të dukshmërisë.** Hap bllokun me {{cmd:BEDIT}}: redaktuesi shfaq një gjendje, të emërtuar në shiritin mbi vizatim (zgjidh një tjetër atje). Shkruaj {{cmd:BVSTATE}} për të ndërruar, për të shtuar (duke fshehur çdo gjë, duke shfaqur çdo gjë, ose duke mbajtur ato që shfaqen), për të riemëruar ose fshirë një gjendje; {{cmd:BVHIDE}} fsheh objektet e zgjedhura në gjendjen që shfaqet; {{cmd:BVSHOW}} shfaq ato të fshehurat, të zbehura, që t'i klikosh për t'i kthyer. Ruaj bllokun: referencat e vendosura në një gjendje të riemëruar e mbajnë me emrin e ri, ndërsa ato të vendosura në një gjendje të fshirë shfaqin gjendjen e parë.
- **Mbeten dinamikë.** Kur ruhet si DWG në versionin me të cilin erdhi vizatimi, blloqet mbeten dinamikë, me gjendjen që zgjodhe: programi tjetër i hap si të njëjtët blloqe dinamikë. Gjendjet e dukshmërisë që ke redaktuar ruhen gjithashtu: emrat e tyre të rinj, gjendjet që ke shtuar dhe ç'shfaq secila.

## Çfarë është vetëm për lexim, ose s'ekziston ende

| Nuk ekziston ende | Në vend të saj, sot |
|---|---|
| Ndryshimi i distancave, këndeve ose kthesave (veprimet stretch, move, flip) | Shfaqen vetëm për lexim te {{ui:Të personalizuara}}; redakto në programin që e bëri blloku. |
| Parametrat lookup, XY, rotacioni dhe polarë | Nuk lexohen ende: referenca shfaqet ashtu si u ruajt. |
| Tërheqja e grips-eve të distancës, kthesës dhe pikës | Shfaqen aty ku janë parametrat; grip-i i dukshmërisë dhe lista {{ui:Dukshmëria}} te Vetitë ndërrojnë gjendjet. |
| Krijimi i blloqeve dinamikë të llojit të programit tjetër (stretch, flip, lookup) | Blloqet që bën në CadCraft janë blloqe të thjeshta; {{cmd:BPARAMETER}} e thotë këtë. Parametrat e tu dhe disa parametra dukshmërie janë te menaxheri i Parametrave (shih "Parametrat dhe gjendjet e dukshmërisë të tuat" më poshtë). |
| Shtimi ose fshirja e objekteve të një blloku me gjendje dukshmërie në redaktuesin e blloqeve | Blloku ruhet atëherë si bllok i thjeshtë (redaktuesi e thotë kur mbyllet). |
| Mbajtja dinamike në një version tjetër DWG ose në DXF | Ruhen si blloqe të thjeshta që shfaqin gjendjen e zgjedhur, dhe ruajtja e thotë këtë. |

:::note
Lëvizja ose ndryshimi i objekteve në {{cmd:BEDIT}} mban dinamik një bllok me gjendje dukshmërie. Një bllok pa gjendje, ose një bllok ku u shtuan ose u fshinë objekte në redaktues, bëhet bllok i thjeshtë.
:::

## Parametrat dhe gjendjet e dukshmërisë të tuat

Një bllok që bën në CadCraft mund të mbajë parametrat e vet dhe **disa** parametra dukshmërie, secili me gjendjet e veta. Shkruaj {{cmd:BPARAMS}} (ose `BPM`) për të hapur **Menaxherin e parametrave** për bllokun që po redakton në {{cmd:BEDIT}}, për bllokun e referencës së zgjedhur, ose për bllokun që emërton.

- **Parametrat**: një emër, një tip (numër, gjatësi, kënd, numërim, po/jo), dhe një vlerë ose një formulë mbi parametra të tjerë (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Del si}} shfaq rezultatin. Një formulë që nuk funksionon, ose një vlerë që nuk përshtatet me tipin e vet (një numërim 1.5), refuzohet dhe menaxheri thotë pse; asgjë tjetër nuk ndryshon.
- **Parametrat e dukshmërisë**: {{ui:Shto parametër dukshmërie}} krijon një me një gjendje të parë. Çdo gjendje mund të riemërohet, hiqet (e fundit mbetet), ose t'i jepet një numër "shfaqet kur". Një formulë zgjedh gjendjen nga parametrat (gjendjen me numrin që përputhet, përndryshe gjendjen në atë vend të listës); pa formulë, çdo referencë zgjedh vetë.
- **Vendosja e objekteve në një gjendje**: në redaktuesin e blloqeve zgjidh objektet, shkruaj {{cmd:BPARAMS}} dhe kliko {{ui:Vendos objektet e zgjedhura këtu}} te gjendja. Objektet që asnjë parametër dukshmërie nuk i liston shfaqen gjithmonë.
- **Kjo referencë**: kur niset nga një referencë e zgjedhur, menaxheri shfaq edhe vlerat dhe gjendjet e vetë asaj reference.

Jashtë redaktuesit të blloqeve çdo ndryshim është një hap zhbërjeje. Në redaktuesin e blloqeve ndryshimet janë të redaktuesit: {{ui:Ruaj bllokun}} i mban. `-BPARAMS` kërkon të njëjtën gjë në rreshtin e komandës.

**Në skedar.** DWG dhe DXF mbajnë parametrat, cilat objekte janë në cilën gjendje, dhe vlerat e çdo reference, në regjistrat e vetë CadCraft; hape sërish skedarin në CadCraft dhe gjithçka kthehet. Një program tjetër e sheh çdo referencë si bllokun me të gjitha objektet e veta, meqë një DWG mban së shumti një parametër dukshmërie për bllok të llojit të vet. Një referencë që programi tjetër e zhvendosi, ose një bllok ku ai ndryshoi objekte, kthehet pa pjesët që nuk përputhen më (asgjë nuk merret me hamendje).
