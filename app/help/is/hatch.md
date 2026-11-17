---
title: Skygging og fylling svæða
summary: Fylla svæði með einum lit eða venjulegu mynstri með því að smella inni í því eða velja lokuð form, stilla mælikvarða og horn mynstursins og breyta skyggingu síðar.
keywords: skygging, hatch, bhatch, fylling, einlit fylling, mynstur, ansi31, ansi37, múrsteinn, jörð, net, sniðlínur, poché, eyja, afmörkun, mælikvarði, horn
from: 14399174
---

## Það sem þú býrð til

Veggsnið fyllt með ANSI31-mynstri, súla í því látin vera auð og einlit fylling í súlunni.

## Skygging með smelli inni í svæði

1. Teiknaðu rétthyrning (`REC`, `0,0`, `@2000,1200`) og hring inni í honum (`C`, `1000,600`, `300`). Smelltu á {{ui:Mörk}}.
2. Smelltu á {{ui:Skygging}} í hópnum {{ui:Teikna}}, eða sláðu inn `H` og ýttu á {{key:Enter}}. Ferillinn segir til um hvaða mynstur er virkt, til dæmis `Current hatch: ANSI31, scale 1, angle 0°`.
3. Sláðu inn [Mynstur (P)] og ýttu á {{key:Enter}}, sláðu inn `ANSI31` og ýttu á {{key:Enter}}.
4. Sláðu inn [Mælikvarði (SC)] og ýttu á {{key:Enter}}, sláðu inn `20` og ýttu á {{key:Enter}}. Stærðir mynstra eru miðaðar við pappír, svo teikning sem prentuð er í 1:20 þarfnast mælikvarða 20.
5. Við `Pick internal point` smellirðu inni í rétthyrningnum, utan hringsins. Skyggingin birtist sem forskoðun.
6. Ýttu á {{key:Enter}}. Rétthyrningurinn er skyggður; hringurinn inni í honum er áfram auður, því hann er eyja.

Smelltu inni í nokkrum svæðum áður en þú ýtir á {{key:Enter}} til að gera þau að einni skyggingu. `U` tekur síðasta svæðið til baka.

## Einlit fylling

1. Sláðu inn `H` og ýttu á {{key:Enter}}.
2. Sláðu inn [Mynstur (P)], ýttu á {{key:Enter}}, sláðu inn `SOLID` og ýttu á {{key:Enter}}.
3. Smelltu inni í hringnum og ýttu síðan á {{key:Enter}}.

## Skygging lokaðra forma sem þú velur

Í stað þess að smella inni í svæði skaltu slá inn `S` (Veldu hluti) við `Pick internal point` og velja lokaðar fjöllínur, hringi eða lokaða sporbauga, og ýta síðan á {{key:Enter}}. Form innan annarra forma verða auð hvert í sínu lagi (það ytra skyggt, það næsta innan þess autt, og svo koll af kolli).

## Mynstur

Sláðu inn `?` við spurninguna um mynstur til að fá listann. Venjulegu mynstrin eru ANSI31 til ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH og SOLID. Í teikningu í tommum (eða með fetum og tommum sem lengdarsniði) eru notaðar tommustærðir mynstranna, eins og í AutoCAD; annars millimetrastærðirnar.

{{ui:Horn}} (`A`) snýr öllu mynstrinu: ANSI31 í 90° hallar hinn veginn.

**Mynsturskrár.** Sláðu inn [Mynsturskrá (F)] við `Pick internal point` og veldu `.pat`-skrá. Mynstrin í henni bætast við listann. Ef þau eru fleiri en eitt er spurt hvaða skuli nota. Skrá sem CadCraft getur ekki lesið segir það, og öll mynstur sem hún sleppti eru talin. Stærðir í `.pat`-skrá hafa enga eigin einingu, svo þær eru lesnar í einingum teikningarinnar. Aðeins skrár sem skrifaðar eru á venjulegu `.pat`-sniði hafa verið prófaðar; engin skrá sem önnur forrit bjuggu til.

## Breyta skyggingu

Veldu hana (smelltu á eina af línum hennar). Í {{ui:Eiginleikar}}: {{ui:Mynstur}}, {{ui:Mynstursmælikvarði}} og {{ui:Mynsturshorn}}. Skyggingar úr opnuðum teikningum sýna mynstur sitt ef það er eitt af venjulegu mynstrunum; önnur birtast sem ljós tónn af lit þeirra.

## Algeng mistök

- **„No closed boundary round that point.“** Það er bil í útlínunni, eða hluti hennar er utan skjásins: CadCraft skoðar aðeins það sem er á skjánum. Lokaðu bilinu (notaðu aðdrátt á hornin), eða taktu aðdrátt út.
- **„The pattern is too dense to draw at this scale.“** Línurnar yrðu þéttari en teikningin getur sýnt. Notaðu stærri mælikvarða: prófaðu prentmælikvarðann (20 fyrir 1:20).
- Mynsturið virðist risastórt eða agnarsmátt. Mælikvarðinn er í teikningareiningum á hverja mynsturseiningu; sjá skref 4 hér að ofan.
- Það að færa útlínuna færir ekki skygginguna. Skygging er ekki bundin afmörkun sinni. Færðu bæði, eða skyggðu aftur.

## Skygging sem helst bundin afmörkun sinni

Skygging sem þú býrð til með `HATCH` man hvaða afmörkun hún hefur. Færðu, snúðu eða skalaðu afmörkunina, og skyggingin og mynstur hennar fylgja með. Dragðu grip til að móta afmörkunina upp á nýtt, og skyggingin er reiknuð aftur. Færðu skygginguna eina og afmörkunin kemur líka, eins og fyllt form í teikniforriti.

Tengingin rofnar, og skipanalínan segir frá því, ef afmörkunin lokast ekki lengur eða þú mótar skygginguna handvirkt. Skyggingin sjálf stendur eftir. Sláðu inn `AS` meðan þú skyggir til að búa til sjálfstæðar skyggingar. Afritaðu skyggingu ásamt afmörkun sinni, og afritið fær sína eigin tengingu.

`HATCHEDIT` (`HE`) breytir mynstri, mælikvarða, horni og upphafspunkti skyggingar, og tengir hana við afmörkun eða rýfur tenginguna. Tengingin er vistuð í DWG- og DXF 2000-skrám. DXF R12-skrá hefur ekkert skyggingarhlut, og tengingar sem gerðar eru í öðrum forritum eru ekki lesnar: notaðu `HATCHEDIT` og Tengja fyrir þær.

Skygging sem hefur enga afmörkun lengur (afmörkunin var eydd, eða skráin kom án hennar) getur fengið hana aftur: `HATCHGENERATEBOUNDARY` (`HGB`) teiknar lokaða fjöllínu umhverfis hverja lykkju skyggingarinnar og, ef þú svarar Já, tengir skygginguna við þær.

## Hallafylling

`GRADIENT` (`GD`) fyllir svæði með halla í stað mynsturs: sömu val og `HATCH`, eftir að spurt er um gerð (línulegur, sívalningslaga, hnattlaga, hálfhnattlaga, bogadreginn, og hver þeirra öfugsnúin), einn lit með tónun eða tvo liti, hornið, og hvort hallinn sé miðjaður. Í `HATCH` gerir valkosturinn `G` sama. `HATCHEDIT` `G`, eða {{ui:Eiginleikar}} undir Halli, breytir halla eða gerir hvaða skyggingu sem er að halla.

Halli sést á skjánum og í prentun. Vistaðu sem DWG 2004 eða nýrra og önnur forrit fá raunverulega hallaskyggingu. DXF 2000 og DWG 2000 hafa engan halla: þar heldur CadCraft honum fyrir sig og önnur forrit sjá einlita fyllingu í fyrsta litnum.

## Klippa skyggingu

`TRIM` klippir skyggingu eins og hvern annan hlut. Smelltu á skygginguna öðrum megin við skurðbrúnina sem þú vilt fjarlægja: brúnirnar skipta skyggða svæðinu og sá hluti er fjarlægður. Í Quick-ham er sérhver hlutur skurðbrún; veldu brúnirnar fyrst (valkostur `T`) þegar þær eru margar. Klippt skygging er ekki lengur tengd afmörkun sinni, því hún fyllir hana ekki lengur.
