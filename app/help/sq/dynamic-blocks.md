---
title: Blloqet dinamike
summary: Çfarë bën CadCraft me blloqet dinamike në një DWG: mbajnë emrat e tyre të vërtetë, shfaqin gjendjen në të cilën u ruajtën, ndërrojnë gjendjet e dukshmërisë, shfaqin vlerat e tjera, dhe mbeten dinamike kur ruhen.
keywords: bllok dinamik, blloqe dinamike, dukshmëri, gjendje dukshmërie, kthim, shtrirje, kërkim, parametra, të personalizuara, veti blloku, *u blloqe, dinamik
from: 26b6aa80
---

## Çfarë funksionon

Një DWG i bërë me blloqe dinamike hapet me ta duke funksionuar deri këtu:

- **Emrat e tyre të vërtetë.** Një bllok dinamik listohet te paneli {{ui:Blloqe}} nën emrin e vet ("Receptacle", "Sink"), jo si një bllok `*U` pa emër.
- **Gjendja në të cilën u ruajtën.** Çdo referencë tregon saktësisht atë që tregoi programi tjetër: gjendjen e dukshmërisë në të cilën u vendos, e shtrirë ose e kthyer ashtu siç u ruajt.
- **Ndërrimi i gjendjes së dukshmërisë.** Zgjidhni një referencë (ose disa të të njëjtit bllok), hapni {{ui:Vetitë}}, dhe te seksioni {{ui:Të personalizuara}} zgjidhni një gjendje tjetër nga lista {{ui:Dukshmëria}}. Referenca shfaq atë gjendje menjëherë, edhe atributet e saj: ato që gjendja i fsheh zhduken, ato që i shfaq shfaqen me vlerat e tyre. Një referencë mban çdo vlerë, kështu që asgjë nuk kthehet bosh; {{ui:Vetitë}} liston të fshehurat të shënuara "hidden". {{key:Mod+Z}} e kthen gjendjen e vjetër në një hap.
- **Dorezat.** Një bllok dinamik i zgjedhur shfaq dorezat e veta aty ku janë parametrat e tij: një trekëndësh i vogël për gjendjen e dukshmërisë (klikojeni për listën e gjendjeve), shigjeta në skajet e një distance, një shigjetë e dyfishtë për një kthim. Vetëm dorezë e dukshmërisë vepron sot; të tjerat e thonë këtë në shiritin e gjendjes.
- **Vlerat e tjera, vetëm për lexim.** Nën listën e dukshmërisë, {{ui:Të personalizuara}} shfaq edhe distancat, këndet e drejtimit, gjendjet e kthimit dhe pikat e bllokut ashtu siç i mban vizatimi.
- **Redaktimi i gjendjeve të dukshmërisë.** Hapeni bllokun me {{cmd:BEDIT}}: redaktuesi shfaq një gjendje, të emërtuar në shiritin mbi vizatim (zgjidhni një tjetër aty). Shkruani {{cmd:BVSTATE}} për të ndërruar, shtuar (duke fshehur gjithçka, duke shfaqur gjithçka, ose duke mbajtur ato që shfaqen), riemërtuar ose fshirë një gjendje; {{cmd:BVHIDE}} fsheh objektet e zgjedhura në gjendjen që shfaqet; {{cmd:BVSHOW}} shfaq të fshehurat të zbehura, që të klikoni ato që duhen kthyer. Ruajeni bllokun: referencat e vendosura në një gjendje të riemërtuar e mbajnë me emrin e ri, dhe ato të vendosura në një gjendje të fshirë shfaqin gjendjen e parë.
- **Mbeten dinamike.** Të ruajtura si DWG në versionin me të cilin erdhi vizatimi, blloqet mbeten dinamike, me gjendjen që zgjodhët: programi tjetër i hap si të njëjtët blloqe dinamike. Gjendjet e dukshmërisë që keni redaktuar ruhen gjithashtu: emrat e tyre të rinj, gjendjet që keni shtuar dhe çfarë shfaq secila.

## Çfarë është vetëm për lexim, ose ende nuk ekziston

| Ende nuk ekziston | Në vend të kësaj, sot |
|---|---|
| Ndryshimi i distancave, këndeve ose kthimeve (veprimet shtrirje, zhvendosje, kthim) | Shfaqen vetëm për lexim në {{ui:Të personalizuara}}; redaktojini në programin që e bëri bllokun. |
| Parametrat lookup, XY, rrotullimi dhe polar | Nuk lexohen ende: referenca shfaqet ashtu si u ruajt. |
| Tërheqja e dorezave të distancës, kthimit dhe pikës | Tregojnë ku janë parametrat; dorezë e dukshmërisë dhe lista {{ui:Dukshmëria}} te Vetitë ndërrojnë gjendjet. |
| Krijimi i blloqeve dinamike (shtimi i parametrave, ose i gjendjeve të dukshmërisë te një bllok që s'ka) | Blloqet që bëni në CadCraft janë blloqe të thjeshta; {{cmd:BPARAMETER}} e thotë këtë. |
| Shtimi ose fshirja e objekteve të një bloku me gjendje dukshmërie në redaktuesin e blloqeve | Blloku ruhet atëherë si bllok i thjeshtë (redaktuesi e thotë kur mbyllet). |
| Mbajtja e tyre dinamike në një version tjetër DWG ose në DXF | Ruhen si blloqe të thjeshta që tregojnë gjendjen që zgjodhët, dhe ruajtja e thotë këtë. |

:::note
Zhvendosja ose ndryshimi i objekteve në {{cmd:BEDIT}} e mban dinamik një bllok me gjendje dukshmërie. Një bllok pa gjendje, ose një bllok ku objektet u shtuan ose u fshinë në redaktues, bëhet bllok i thjeshtë.
:::
