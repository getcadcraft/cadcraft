---
title: Njësitë gjatë importit: një skedar i deklaron njësitë, ose pyetesh më parë
summary: Kur një skedar që sjell në një vizatim deklaron njësitë e veta, CadCraft e konverton dhe e thotë këtë. Kur nuk e bën, CadCraft pyet përpara se të vendosë ndonjë gjë dhe e mban mend përgjigjen për atë skedar.
keywords: njësi, import, insert, xref, attach, XATTACH, INSERT, OBJ, DWG, DXF, re pikash, objekt biblioteke, milimetra, metra, inç, këmbë, shkallë, madhësi e gabuar, shumë e madhe, shumë e vogël, 1000 herë, pyet, mbahet mend, INSUNITS
from: 558f1293
---

## Çfarë do të bësh

Sill një skedar në një vizatim dhe sigurohu që të hyjë me madhësinë e duhur.

## Hapat

1. Sill skedarin si zakonisht: `INSERT` › File, `XATTACH`, `POINTCLOUDATTACH`, ose {{ui:Files}} në panelin e Bibliotekës.
2. Nëse skedari deklaron njësitë e veta, asgjë nuk pyetet. Rreshti i komandave thotë cilat njësi deklaron skedari, dhe shkallën e përdorur kur ato ndryshojnë nga ato të vizatimit.
3. Nëse jo, një dialog pyet **Njësitë e** skedarit. Zgjidh çfarë përfaqëson një njësi në skedar dhe kliko {{ui:Use these units}}. Asgjë nuk vendoset përpara se të përgjigjesh.
4. {{ui:Cancel}} (ose {{key:Esc}}) nuk sjell asgjë.

## Cilët skedarë deklarojnë njësitë e tyre

- **DWG dhe DXF**: njësitë e futjes së vizatimit (`$INSUNITS`). Një skedar pa to pyetet.
- **Re pikash**: LAS dhe LAZ me një sistem koordinatash, E57, PTX dhe PLY deklarojnë të tyret. Të tjerët pyetet.
- **OBJ**: nuk deklaron kurrë njësi. Pyetesh.
- **glTF dhe GLB**: metra, sipas rregullit të formatit.
- **Fotografitë**: nuk kanë madhësi të vetën. `IMAGEATTACH` kërkon gjerësinë, dhe ofron gjerësinë që i dhe atij skedari më parë.
- **Skanimet**: një skanim që deklaron densitetin e tij (pika për inç) hyn në madhësinë e tij reale në njësitë e vizatimit; `SCANATTACH` kërkon akoma gjerësinë.
- **Shtesa Re pikash**: pyet kur ndërton një re ku skedari nuk deklaron njësi, dhe i etiketon numrat e resë në njësinë që mban.

## Gjëra të dobishme

- Hapja e një DWG ose DXF si vizatim i vet nuk pyet asgjë: rreshti i komandave thotë cilat njësi deklaron skedari, ose që nuk deklaron asnjë. Vetitë vendosin njësitë e një vizatimi.
- Kur edhe ky vizatim nuk ka njësi, një skedar nuk mund të konvertohet: vendoset numër për numër dhe rreshti i komandave e thotë këtë.
- Përgjigjja mbahet mend për atë skedar në këtë kompjuter, në çdo aplikacion CadCraft. Herën tjetër që hyn nuk pyetesh, dhe rreshti i komandave thotë që u përdorën njësitë e mbajtura mend.
- Për t'u pyetur përsëri: paleta e komandave ({{key:Mod+K}}) › **Pyet përsëri për njësitë e skedarëve të importuar**.
