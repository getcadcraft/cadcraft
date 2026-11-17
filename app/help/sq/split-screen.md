---
title: Ndaj ekranin
summary: Shfaq vizatimin në dy, tre ose katër panele me zmadhimin e tyre, vendos një fletë pranë modelit, dhe hap disa vizatime anash për anë.
keywords: ndaj, ndarje ekrani, panele, vports, viewports, të vendosura, vendos, anash për anë, të grumbulluara, dy vizatime, skeda, skeda dokumenti, krahaso, ndarës, modeli dhe fleta, disa vizatime, vizatime të hapura
from: ee2f034b
---

## Çfarë do të mësosh

Si të shikosh një vizatim në disa panele njëkohësisht, secili me zmadhimin e vet, dhe si të hapësh disa vizatime dhe t'i shohësh anash për anë.

## Ndaj një vizatim në panele

1. Hap një vizatim, ose vizato disa vija dhe rrethe.
2. Hap {{ui:Pamja}} › {{ui:Më shumë}} dhe zgjidh {{ui:Ndaj anash për anë}} (ose shkruaj {{cmd:VPORTS}}, pastaj `2`, pastaj {{key:Enter}}).

Zona e vizatimit ndahet në dy panele, që të dyja shfaqin të njëjtën pamje. Paneli aktiv ka kornizë blu dhe merr kryqëzoren.

3. Kliko në panelin tjetër. Ai bëhet aktiv. (Ai klikim i parë vetëm ndërron panelet; kliko përsëri për të zgjedhur.)
4. Zmadho me rrotullën. Vetëm ai panel zmadhohet.
5. Tërhiq vijën midis paneleve për ta bërë njërin më të gjerë. {{key:Home}} mbi një ndarës të fokusuar e vendos përsëri në mes.

{{cmd:VPORTS}} pranon gjithashtu `3` (dy panele në një anë dhe një të madh në anën tjetër: `L` ose `R`), `4`, dhe `SI` për të kthyer një panel. Pamja e panelit aktiv mbush atëherë zonën. Te një fletë, {{cmd:VPORTS}} shton në vend të kësaj një viewport në fletë (si në AutoCAD); shkruaj {{cmd:SPLIT}} aty, ose përdor menunë Pamja.

## Vizato nga një panel në tjetrin

1. Ndaj anash për anë, dhe zmadho secilin panel mbi një qoshe tjetër të vizatimit.
2. Shkruaj `L` dhe shtyp {{key:Enter}}, dhe kliko pikën e parë në panelin e majtë.
3. Kliko një herë në panelin e djathtë për ta bërë aktiv, pastaj kliko pikën e dytë atje.

Vija shkon midis dy vendeve. Një komandë vazhdon ndërsa ndërron panelet, dhe shiriti elastik shfaqet në çdo panel.

## Modeli pranë një fletë

1. Ndaj anash për anë.
2. Kliko panelin e djathtë, pastaj kliko skedën e një fletë nën vizatim.

Paneli i djathtë shfaq fletën; i majti vazhdon të shfaqë modelin. Çdo panel mban hapësirën e vet, kështu që mund të vizatosh në model dhe të shohësh viewport-in e fletës të ndjekë.

## Disa vizatime në një dritare

1. Hap një vizatim. Pastaj hap një tjetër (ose shtyp {{ui:E re}}).

Çdo vizatim hapet në skedën e vet mbi zonën e vizatimit. Kliko një skedë për të ndërruar; rreshti i komandës, panelet dhe zhbërja ndjekin vizatimin te i cili ndërron. {{key:Mod+C}} në një vizatim dhe {{key:Mod+V}} në një tjetër kopjon objekte mes tyre.

2. Kliko {{ui:Vendos vizatimet e hapura anash për anë}} (ikona e ndarjes në fund të skedave), ose ikonën e grumbulluar pranë saj.

Çdo panel tani shfaq një nga vizatimet e hapura, deri në katër. Kliko një panel për të punuar në atë vizatim.

3. Kliko {{ui:×}} në një skedë për ta mbyllur atë vizatim. Nëse ka ndryshime të paruajtura, CadCraft pyet së pari.

:::tip
Hapja e një vizatimi ndërsa dritarja mban vetëm një vizatim të ri, të pa prekur, e përdor atë skedë në vend që të shtojë një tjetër.
:::

## Zmadho dhe lëviz bashkë

Për të krahasuar dy rishikime, vendosi anash për anë, pastaj kliko {{ui:Lidh pamjet e paneleve}} (ikona e lidhjes në fund të skedave), ose zgjidhe në {{ui:Pamja}} › {{ui:Më shumë}}, ose shkruaj {{cmd:LINKVIEWS}} dhe `ON`. Tani një lëvizje ose zmadhim në një panel zhvendos çdo panel që shfaq modelin (ose çdo panel që shfaq një fletë) në të njëjtin vend, kështu që dy vizatimet mbeten të rreshtuara. {{cmd:LINKVIEWS}} `OFF` e lë secilin panel të lëvizë përsëri vetë.

## Gabimet e zakonshme

- **Klikimi im nuk bëri asgjë.** Ai e bëri atë panel aktiv. Kliko përsëri për të zgjedhur ose vizatuar.
- **Rrota zmadhoi panelin e gabuar.** Rrota zmadhon panelin nën kursor dhe e bën aktiv.
- **Panelet u kthyen në një.** Hapja e një vizatimi e shfaq atë ashtu si u ruajt; një vizatim i ruajtur pa panele hapet në një.
- **Largimi nga faqja paralajmëron për ndryshime të paruajtura që nuk i shoh.** Një skedë tjetër mban një vizatim me ndryshime. Kalo te ajo dhe ruaje, ose largohu pa ruajtur.
