---
title: Nutikad seinad, uksed ja aknad 2D-s
summary: Joonista seinu nagu joonpolüüni, ühenda need puhtalt ja pane sisse uksed ja aknad, mis liiguvad seinaga kaasa. Kõik 2D, ilma 3D-mudelita.
keywords: sein, seinad, WALL, WA, uks, DOOR, DR, aken, WINDOW, WN, DELOPENING, nutikas sein, korrusplaan, avanemissuund, hing, ava
from: 45845d49
---

Siinsed seinad on 2D-joonistusobjektid. Need ei loo 3D-mudelit, nii et plaan jääb sama kergeks kui joonisplaan. Hoone mudeli jaoks kasuta BimCraftit.

## Joonista seinu

Kirjuta `WALL` (`WA`) või vali rühma {{ui:Draw}} menüüst {{ui:More}} {{ui:Wall}}, seejärel klõpsa punkte nii, nagu joonpolüüni puhul. Lõpetamiseks vajuta {{key:Enter}} või kirjuta `C`, et ruum sulgeda.

- `T` määrab paksuse.
- `J` ütleb, mida sinu klõpsud järgivad: seina keskjoont või selle vasakut või paremat külge.
- `F` määrab täite: puudub, tahke või viirutus.

Nurgad lõigatakse ise lõikeühendusena. Sein, mis lõpeb teise seina paksuse sees, ühendub sellega puhta T-ühendusena, ja seinad, mis ristuvad, avanevad üksteise suunas. Ühendused salvestatakse seintega. Ristkülikute, hulknurkade, kaarte, jagamise, lukkude ja muu kohta vt „Seinakujud, lõiked, nihked ja lukud 2D-seintel“.

## Lisa uksed ja aknad

Kirjuta `DOOR` (`DR`) või `WINDOW` (`WN`) ja klõpsa seinale. Uks avaneb sinu klõpsatud seina poole. `W` määrab laiuse, `Y` tüübi ja `H` hinge poole. Kliki edasi, et panna veel, ning lõpetamiseks vajuta {{key:Enter}}. Uksed võivad olla ühe- või kahetiivalised, nihkuvad või avatud ava. Aknad võivad olla fikseeritud, avatavad või nihkuvad.

## Muuda neid

Vali sein, et näha selle haarangud:

- Otste haarangud venitavad seina. Seina külge ühendatud seinad järgivad.
- Keskmine haarang liigutab seina.
- Ava haarang nihutab seda mööda seina.
- Nooled pööravad ukse hinge ja avanemissuuna ümber.

Omadused näitavad paksust, täidet ja iga avamist: tüüp, laius, asukoht, hing, avanemine, kas kuvatakse lahti või kinni, ning {{ui:Remove}}. `DELOPENING` eemaldab avamise, mis on kõige lähemal, kus klõpsad.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` ja `ERASE` töötavad tavapäraselt. Uksed ja aknad lähevad oma seinaga kaasa, ühendatud seinad säilitavad oma ühendused ning üks {{ui:Undo}} võtab kõik tagasi.

## Teistes programmides

Iga sein salvestatakse tavalise plokina, nii et teised CAD-programmid näitavad seda õigesti ja saavad seda liigutada, kuid nad ei saa seda seinana muuta. `EXPLODE` muudab seina tavalisteks joonteks ja kaarteks ning see lakkab olemast sein.
