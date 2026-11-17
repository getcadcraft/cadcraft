---
title: Teikna texta með eigin SHX-leturgerðum
summary: Gefðu CadCraft möppu með SHX-leturgerðum (eða veldu skrárnar) og textastílarnir sem nefna þær eru teiknaðir með þeim, á skjánum og í prentun eða PDF-skrá, með hæð, breiddarstuðli og halla stílsins.
keywords: shx, leturgerðir, leturgerð, formleturgerð, stór leturgerð, bigfont, unifont, arfur, persneska, farsi, arabíska, textastíll, vantar leturgerð, leturgerð skipt út, SHXFONTS, mappa, öfugt, sjónræn röð, simplex, isocp
from: 14b0a4ab
---

Teikningar frá öðrum forritum nefna oft **SHX-leturgerðir** í textastílum sínum, og DWG-skrá geymir þær ekki. Án leturgerðarinnar teiknar CadCraft þann texta með eigin letri, sem er í lagi fyrir venjulegan latneskan texta en ekki fyrir gamlar leturgerðir sem varpa venjulegum stafakóðum á aðra bókstafi, eins og gamlar persneskar athugasemdir.

Gefðu CadCraft leturgerðirnar, og það teiknar textann með þeim.

## Hlaðaðu leturgerðunum þínum

Skrifaðu {{cmd:SHXFONTS}} (`SHX`) og veldu:

- {{ui:Folder}} (CadCraft Studio): veldu möppu. Sérhver `.shx`-skrá í henni er lesin núna, og aftur í hvert skipti sem CadCraft ræsist.
- {{ui:Files}} (vafrinn): veldu eina eða fleiri `.shx`-skrár. Þær eru geymdar í þessum vafra og aldrei sendar upp.
- {{ui:List}}: leturgerðirnar sem eru hlaðnar, og þær sem opna teikningin nefnir en þú hefur ekki hlaðið.
- {{ui:Remove}} og {{ui:Clear}}: gleymdu einni leturgerð, eða öllum.

CadCraft getur ekki fylgt leturgerðum frá þriðja aðila, svo það sendir aldrei neinar: þær koma frá þér. Teikning nefnir aðeins leturgerðir sínar og geymir ekkert afrit af þeim.

## Hvað gerist

Heiti leturgerðar textastíls er borið saman við hlaðna leturgerð eftir heiti, án tillits til há- og lágstafa, möppu og `.shx` (`SIMPLEX.SHX` finnur `simplex`). Texti í slíkum stíl er teiknaður sem línur, á skjánum, í prentun og í PDF, á sínum stað, í sinni hæð, snúningi, breiddarstuðli og halla. Breidd hans er leturgerðarinnar sjálfrar, svo jöfnun {{ui:Center}} og {{ui:Right}}, línubrot og val passi við það sem þú sérð. Stíll þar sem leturgerðin er ekki hlaðin heldur innbyggða letrinu, og þegar þú opnar teikningu sem nefnir leturgerðir sem þú hefur ekki hlaðið, segir skipanalínan það.

Staðlaði stíllinn telur líka: teikning þar sem stíllinn {{ui:Standard}} nefnir eigin leturgerð heldur henni.

## Leturgerðir þegar í sjónrænni röð

Margar gamlar persneskar og arabískar SHX-leturgerðir geyma stafi þegar mótaða fyrir skjáinn og teiknaðar frá vinstri til hægri, svo texti sem skrifaður er í rökrænni röð kemur afturábak. Skrifaðu {{cmd:SHXFONTS}}, veldu {{ui:Reverse}} og nefndu leturgerðina: texti hennar er þá settur upp þannig að síðasti stafurinn kemur fyrst. Keyrðu það aftur til að afturkalla. Rofinn tilheyrir leturgerðinni, er geymdur í þessum vafra og er ekki vistaður í teikningunni.

## Það sem er ekki þakið enn

- Texti með innbyggðum sniðkóðum (litum, staflum í MTEXT) er áfram í innbyggða letrinu.
- Stórar leturgerðir (tvíbæta gerðin) fylla inn í kóða sem aðalleturgerðin vantar, en texti í austur-asískri kóðasíðu sem CadCraft hefur þegar breytt í Unicode er ekki varpaður aftur á tvíbæta kóða leturgerðarinnar.
- Leturlesarinn fylgir birtri lýsingu á sniðinu og var prófaður með leturgerðum sem gerðar eru fyrir CadCraft. Ef ein af þínum teiknar vitlaust, sendu okkur leturgerðina og teikninguna.
