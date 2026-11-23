---
title: Skygging og fyllingar svæða
summary: Fylltu svæði með samfylltum lit eða venjulegu mynstri með því að smella inni í því eða velja lokuð form, stilltu mælikvarða og horn mynstursins, og breyttu skyggingu síðar.
keywords: skygging, bhatch, fylling, samfylling, mynstur, ansi31, ansi37, múrsteinn, jörð, net, skurðlínur, poché, eyja, jaðar, mælikvarði, horn
from: e7feb344
---

## Það sem þú býrð til

Veggsnið fyllt með mynstrinu ANSI31, súla í því sem er látin vera tóm, og samfylling í súlunni.

## Skygging með því að smella inni í svæði

1. Teiknaðu rétthyrning (`REC`, `0,0`, `@2000,1200`) og hring inni í honum (`C`, `1000,600`, `300`). Smelltu á {{ui:Mörk}}.
2. Smelltu á {{ui:Skygging}} í hópnum {{ui:Teikna}}, eða skrifaðu `H` og ýttu á {{key:Enter}}. Sagan segir hvaða mynstur er núverandi, til dæmis `Current hatch: ANSI31, scale 1, angle 0°`.
3. Skrifaðu `P` og ýttu á {{key:Enter}}, skrifaðu `ANSI31` og ýttu á {{key:Enter}}.
4. Skrifaðu `SC` og ýttu á {{key:Enter}}, skrifaðu `20` og ýttu á {{key:Enter}}. Stærðir mynstra eru á pappír, svo teikning prentuð í 1:20 þarf mælikvarða 20.
5. Við `Veldu innri punkt` smelltu inni í rétthyrningnum, fyrir utan hringinn. Skyggingin sést sem forskoðun.
6. Ýttu á {{key:Enter}}. Rétthyrningurinn er skyggður; hringurinn inni í honum er áfram tómur, því hann er eyja.

Smelltu inni í nokkrum svæðum áður en þú ýtir á {{key:Enter}} til að gera þau að einni skyggingu. `U` tekur síðasta svæðið til baka.

## Samfylling

1. Skrifaðu `H` og ýttu á {{key:Enter}}.
2. Skrifaðu `P`, ýttu á {{key:Enter}}, skrifaðu `SOLID` og ýttu á {{key:Enter}}.
3. Smelltu inni í hringnum og ýttu síðan á {{key:Enter}}.

## Skyggðu lokuð form sem þú velur

Í stað þess að smella inni skaltu skrifa `S` (Velja hluti) við `Veldu innri punkt` og velja lokaðar fjöllínur, hringi eða lokaða sporbauga, og ýta síðan á {{key:Enter}}. Form innan annarra form eru skilin tóm í röð (ytra formið skyggt, það næsta að innan autt, og svo framvegis).

## Mynstur

Skrifaðu `?` við spurninguna um mynstur til að sjá listann. Staðlaðu mynstrin eru ANSI31 til ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS og EARTH, og SOLID. Í teikningu í tommum (eða með fetum og tommum sem lengdarsnið) eru notaðar tommustærðir mynstranna, eins og í AutoCAD; annars millimetrastærðirnar.

{{ui:Horn}} (`A`) snýr öllu mynstrinu: ANSI31 í 90° hallar í hina áttina.

**Mynstraskrár.** Skrifaðu `F` (Mynstraskrá) við `Veldu innri punkt` og veldu `.pat`-skrá. Mynstrin í henni bætast við listann; ef þau eru fleiri en eitt er spurt hvert skal nota. Skrá án mynsturs sem CadCraft getur lesið segir það, og mynstur sem var sleppt er talið. Aðeins skrár skrifaðar á venjulegu `.pat`-sniði hafa verið prófaðar; engin sem önnur forrit bjuggu til.

## Breyttu skyggingu

Veldu hana (smelltu á eina af línum hennar). Í {{ui:Eiginleikar}}: {{ui:Mynstur}}, {{ui:Mynsturshorn}} og {{ui:Mynstursmælikvarði}}. Skyggingar úr opnuðum teikningum sýna mynstur sitt þegar það er eitt af stöðluðu mynstrunum; önnur sýnast sem ljós tónn af lit þeirra.

## Algeng mistök

- **„No closed boundary round that point.“** Það er bil í útlínunni, eða hluti hennar er utan skjásins: CadCraft skoðar aðeins það sem er á skjánum. Lokaðu bilinu (aðdráttur að hornunum), eða zoomaðu út.
- **„The pattern is too dense to draw at this scale.“** Línurnar væru nær hvor annarri en teikningin getur sýnt. Notaðu stærri mælikvarða: prófaðu prentmælikvarðann (20 fyrir 1:20).
- **Mynstrið sýnist risastórt eða pínulítið.** Mælikvarðinn er í einingum teikningar á hverja einingu mynsturs; sjá skref 4 hér að ofan.
- **Skyggingin hætti að fylgja útlínu sinni.** Skygging gerð með {{cmd:HATCH}} helst við hlutina sem hún var gerð úr: færir þú, snýrð eða skalar útlínuna fer skyggingin með; mótir þú hana með gripi er skyggingin reiknuð út aftur. Tengingin endar þegar útlínan lokast ekki lengur, þegar þú mótar skygginguna sjálf með hendi, eða þegar þú klippir hana, og skipanalínan segir það. Ekkert tapast: skyggðu svæðið aftur til að tengja það á ný.

## Skygging sem helst við jaðar sinn

Skygging sem þú býrð til með `HATCH` man hvað afmarkar hana. Færðu, snúðu eða skalaðu jaðarinn og skyggingin og mynstur hennar fara með. Dragðu grip til að móta jaðarinn og skyggingin er reiknuð út aftur. Færðu skygginguna eina og jaðar hennar fylgir með, eins og fyllt form í teikniforriti.

Tengingin endar, og skipanalínan segir það, ef jaðarinn lokast ekki lengur eða þú mótar skygginguna með hendi. Skyggingin sjálf helst. Skrifaðu `AS` meðan þú skyggir til að búa til skyggingar sem standa einar. Afritaðu skyggingu ásamt jaðri hennar og afritið fær sína eigin tengingu.

`HATCHEDIT` (`HE`) breytir mynstri, mælikvarða, horni og uppruna skyggingar, og tengir hana við jaðar eða endar tengingunni. Tengingin er vistuð í DWG- og DXF 2000-skrám. DXF R12-skrá hefur enga skyggingarhluti, og tengingar sem önnur forrit gerðu eru ekki lesnar: notaðu `HATCHEDIT` og Tengja fyrir þær.

Skygging sem hefur enga jaðarlínu lengur (jaðarinn var eyddur, eða skráin kom án hans) getur fengið hana aftur: `HATCHGENERATEBOUNDARY` (`HGB`) teiknar lokaða fjöllínu umhverfis hverja lykkju skyggingarinnar og, ef þú svarar Já, tengir skygginguna við þær.

## Hallafylling

`GRADIENT` (`GD`) fyllir svæði með halla í stað mynsturs: sömu val og `HATCH`, eftir að það spyr um gerðina (línulegan, sívalan, kúlulaga, hálfkúlulaga, bogadreginn, og hvern þessara á hvolfi), einn lit með styrk eða tvo liti, hornið, og hvort miðjað sé. Í `HATCH` gerir valkosturinn `G` það sama. `HATCHEDIT` `G`, eða {{ui:Eiginleikar}} undir {{ui:Halli}}, breytir halla eða gerir hvaða skyggingu sem er að hallafyllingu.

Hallinn sést á skjánum og í prentun. Vistaðu sem DWG 2004 eða nýrri og önnur forrit fá raunverulega hallaskyggingu. DXF 2000 og DWG 2000 hafa enga halla: þar geymir CadCraft hann fyrir sjálft sig og önnur forrit sjá samfyllingu í fyrsta litnum.

## Klipptu skyggingu

`TRIM` klippir skyggingu eins og hvern annan hlut. Smelltu á skygginguna þeim megin við skurðbrúnina sem þú vilt fjarlægja: brúnirnar skipta skyggða svæðinu og sá bútur er fjarlægður. Í hraðham er sérhver hlutur skurðbrún; veldu brúnirnar fyrst (valkostur `T`) þegar þær eru margar. Klippt skygging er ekki lengur tengd jaðri sínum, því hún fyllir hann ekki lengur.
