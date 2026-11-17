---
title: Líkan í 3D
summary: Skoðaðu teikninguna í 3D á 3D-flipanum og gerðu einföld rúmlíkami úr henni: þrýstu út (með halla eða eftir slóð), snúðu, þrýstu og dragðu fleti, kassa, strokka og fleyga, sameinaðu, dragðu frá og skerðu þá, færðu, afritaðu, snúðu og eyddu þeim, og settu flatar 2D-sýnir af þeim á blað.
keywords: 3d, þrívítt, rúmlíkami, svæði, búkur, acis, sat, sab, rúmlíkami frá öðrum forritum, opna 3D-teikningu, þrýsta út, ext, snúa, rev, sópa, halli, slóð, presspull, þrýsta og draga, ýta og draga, kassi, strokkur, cyl, fleygur, 3dorbit, hringsnúa, sýn, vscurrent, sjónrænn stíll, skyggt, falin lína, grind, röntgen, xray, iso, fjarvídd, samsíða, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, sýniskubbur, sameina, uni, draga frá, su, skerast, in, boolean, sameina rúmlíkami, viewbase, flatshot, flöt sýn, 2D-sýn, teikningarsýn, framsýn, ofansýn, hliðarsýn, faldar línur
from: 13060e71
---

## Það sem þú býrð til

Grunnflötur rýmis 1000 × 600 þrýstur út í blokk 400 há, flötur dreginn upp og strokkur við hlið hans — síðan er líkanið vistað með teikningunni og flutt út fyrir 3D-skoðara eða prentara.

{{ui:3D}}-flipinn er við hlið {{ui:Líkan}} undir teikningunni. Hann sýnir teikninguna í líkanrými liggjandi á jörðinni í litum laga (lög sem eru slökkt eða fryst haldast falin) og rúmlíkömin sem þú býrð til. Í fyrsta skipti sem hann opnast hleðst 3D-sýnin; eftir það skiptir hún samstundis.

## Þrýsta út form

1. Á {{ui:Líkan}}-flipanum skrifaðu `REC` og ýttu á {{key:Enter}}. Skrifaðu `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Smelltu á {{ui:3D}}-flipann. Tækjastikan sýnir {{ui:3D}}-hópinn í stað teikningahópanna.
3. Smelltu á {{ui:Þrýsta út}} (eða skrifaðu {{cmd:EXTRUDE}}, `EXT`). Smelltu inni í rétthyrningnum og ýttu síðan á {{key:Enter}}.
4. Skrifaðu `400` og ýttu á {{key:Enter}}. Sagan segir „Þrýst út 1 rúmlíkami, 400 há“ ásamt rúmmáli þess.

Lokaðar fjöllínur (þar á meðal bogar), rétthyrningar, marghyrningar, hringir og sporbaugar þrýstast út; línur og opnar fjöllínur gera það ekki, og sagan segir hvers vegna. Þú getur líka valið formin fyrst á {{ui:Líkan}}-flipanum og skrifað `EXTRUDE` þar. Í stað þess að skrifa hæðina getur þú smellt hana: útlínan fylgir bendlinum upp og niður. Neikvæð hæð fer niður. Skrifaðu `D` við hæðarspurninguna til að eyða 2D-formunum eftir útpressun (`D` aftur heldur þeim).

Við hæðarspurninguna biður `T` (Hallahorn) um horn í gráðum: hliðarnar halla inn um það, þannig að toppurinn verður minni (neikvætt horn gerir hann stærri); horn sem er of bratt fyrir formið er hafnað. `P` (Slóð) sópar formunum eftir slóð í staðinn (sjá hér fyrir neðan).

## Snúa og sópa

- {{cmd:REVOLVE}} (`REV`, eða {{ui:Meira}} › {{ui:Snúa um ás}}): veldu lokuð form, ýttu á {{key:Enter}}, smelltu síðan á báða enda ássins (eða skrifaðu `X` eða `Y` fyrir ás teikningarinnar um 0,0), og skrifaðu síðan horn eða ýttu á {{key:Enter}} fyrir heilan hring. Formið snýst um ásinn og rís upp úr jörðinni: teiknaðu helminginn af útlínu vasa við hlið línu og snúðu henni um línuna. Formið má snerta ásinn en ekki fara yfir hann. Heill snúningur hefur 48 þrep.
- {{cmd:SWEEP}} (eða {{ui:Meira}} › {{ui:Sópa eftir slóð}}, eða `P` við hæðarspurningu EXTRUDE): veldu lokuð form (sniðið), ýttu á {{key:Enter}}, smelltu síðan á slóðina: línu, fjöllínu, boga, hring eða sporbaug. Sniðið rís þvert á slóðina, miðja þess á henni, og gengur eftir henni; horn eru skásneidd, og lokuð slóð býr til hring. Lítill rétthyrningur sem sópaður er eftir útlínu herbergis verður gólflisti; hringur sem sópaður er eftir fjölínu verður pípa.

## Þrýsta og draga flöt

1. Smelltu á {{ui:Ýta/draga}} (eða skrifaðu {{cmd:PRESSPULL}}).
2. Smelltu á efri flöt blokkarinnar.
3. Skrifaðu `100` og ýttu á {{key:Enter}}, eða færðu bendilinn og smelltu. Blokkin er þá 500 há.

## Kassar, strokkar og fleygar

- {{cmd:BOX}}: smelltu eða skrifaðu tvö horn, og síðan hæð.
- {{cmd:CYLINDER}} (`CYL`): miðjan, radíusinn, síðan hæð. Strokkar og þrýst út hringir hafa 48 hliðar, skyggðar mjúklega.
- {{cmd:WEDGE}} (`WE`): tvö horn og hæð. Hann er full hæð við fyrsta hornið og hallar niður í ekkert við hitt.

Á 3D-flipanum lendir smellur á fletinum eða brúninni undir bendlinum, annars á jörðinni, þannig að kassi getur staðið á öðru rúmlíkami.

## Færa, afrita, snúa og eyða rúmlíkömum

Á 3D-flipanum velur smellur rúmlíkami; dragðu frá vinstri til hægri fyrir glugga, og frá hægri til vinstri fyrir krossglugga. Síðan:

- {{cmd:MOVE}}: smelltu á grunnpunkt og hvert hann á að fara, eða skrifaðu `<100,0,0>` (eða `@100,0`) fyrir vegalengd eftir X, Y og Z.
- {{cmd:COPY}}: það sama, en upprunalega helst.
- {{cmd:ROTATE}}: skrifaðu horn (það snýst um miðju valsins, um Z), eða smelltu á miðjuna, upphafspunkt og horn.
- {{cmd:ERASE}} eða {{key:Delete}}.

## Sameina, draga frá og skerast rúmlíkami

Opnaðu {{ui:Meira}} á 3D-tækjastikunni, eða skrifaðu skipunina:

- {{cmd:UNION}} (`UNI`): veldu rúmlíkömin, ýttu á {{key:Enter}}: þau verða eitt rúmlíkami.
- {{cmd:SUBTRACT}} (`SU`): veldu rúmlíkömin sem á að halda og ýttu á {{key:Enter}}, síðan þau sem á að taka í burtu og ýttu á {{key:Enter}}. Gat í gegnum blokk: teiknaðu strokk í gegnum hana og dragðu síðan strokkinn frá.
- {{cmd:INTERSECT}} (`IN`): veldu rúmlíkömin, ýttu á {{key:Enter}}: aðeins það sem þau eiga öll sameiginlegt verður eftir.

Sagan segir rúmmál niðurstöðunnar. Hver aðgerð er eitt skref í afturköllun. Fyrsta keyrslan hleður 3D-tvíundaraðgerðavélinni (um 0,5 MB; innifalin í {{ui:Vista til notkunar án nettengingar}}). Aðeins lokuð rúmlíkami er hægt að sameina: rúmlíkami með opnum brúnum (úr lausum 3D-flötum frá öðru forriti) er hafnað og ástæðan gefin. Niðurstaðan er eitt rúmlíkami; bogadregnir fletir eru áfram gerðir úr flötum bútum, eins og strokkurinn var.

Tvísmelltu á rúmlíkami til að breyta flötum þess og brúnum sér; {{key:Esc}} lokar því aftur. Sérhver 3D-breyting er eitt skref í afturköllun í sömu sögu og teikningin: {{key:Mod+Z}} afturkallar síðasta sem þú gerðir á hvorum flipanum.

## Flatar sýnir á blaði

1. Opnaðu blaðflipa (eða vertu áfram á {{ui:Líkan}}), skrifaðu síðan {{cmd:VIEWBASE}} (eða `FLATSHOT`).
2. Veldu sýnina: {{key:Enter}} fyrir framsýn, eða `T` (ofansýn), `R` (hægri), `L` (vinstri), `BA` (aftan), `BO` (neðan), `I` (ísómetrísk).
3. {{key:Enter}} sýnir faldar línur, strikaðar; `H` sleppir þeim.
4. {{key:Enter}} tekur þann mælikvarða sem CadCraft stingur upp á: á blaði, stærsta staðlaða mælikvarða (svo sem 1:20) þar sem sýnin passar í innan við helming pappírsins. Eða skrifaðu einn: `1:50`, `2:1`.
5. Smelltu, eða skrifaðu, hvar miðja sýnarinnar á að vera.

Sýnin er ein blokkartilvísun, `VIEW-FRONT-1` og svo framvegis: sýnilegar brúnir á laginu VIEW-VISIBLE (0,5 mm), faldar á VIEW-HIDDEN (strikaðar, 0,25 mm). Færðu hana, málsettu og prentaðu eins og hverja aðra teikningu. Hún er mynd af rúmlíkömunum eins og þau voru þegar þú gerðir hana: eftir breytingar skaltu eyða sýninni og keyra {{cmd:VIEWBASE}} aftur. Fyrir fleiri sýnir keyrirðu skipunina einu sinni fyrir hverja sýn.

## Skoða umhverfið

Dragðu með hjólinu til að hringsnúa, {{key:Shift}} + hjóladráttur eða hægri hnappurinn til að hliðra, og snúðu hjólinu til að aðdrætta við bendilinn. Á snertiborði snúa tveir fingur sýninni og klípa aðdrátturinn. Hægri smellur án þess að draga er {{key:Enter}}, eins og á hinum flipunum. `3DORBIT` leyfir vinstri hnappi að hringsnúa þar til þú ýtir á {{key:Enter}} eða {{key:Esc}}.

- {{ui:Sýnir}} (eða {{cmd:VIEW}}): Ísó, Ofan, Neðan, Framan, Aftan, Vinstri, Hægri, Fjarvídd eða Samsíða, og Aðdráttur á allt.
- {{ui:Stíll}} (eða {{cmd:VSCURRENT}}, `VS`): Skyggt, Skyggt með brúnum, Falin lína, Grind eða Röntgen.

Punktarnir sem þú smellir á smella að rúmlíkömum (hornum, brúnum, flötum) og að 2D-teikningunni á jörðinni: endum og miðjum lína og boga, og punktum meðfram þeim. 2D-línurnar eru aldrei valdar á 3D-flipanum. Þegar skipun biður um 2D-hluti (EXTRUDE, REVOLVE, SWEEP) velur smellur einn; dragðu frá vinstri til hægri tekur það sem er alveg innan gluggans, og dragðu frá hægri til vinstri tekur það sem gluggi sker, eins og á {{ui:Líkan}}-flipanum.

Sýniskubbur er efst hægra megin á 3D-flipanum: smelltu á flöt, brún eða horn til að líta þaðan, dragðu hann til að hringsnúa, og húshnappurinn fer aftur í ísó-sýnina. Það er {{ui:Sjálfvirkt}}, upphafið af {{ui:Hornvísir}} í [Stillingar CadCraft](topic:settings). Stillt á {{ui:Útsýniskubbur}} sýnir {{ui:Líkan}}-flipinn líka kubb sem horfir ofan frá; ef smellt er á aðra hlið opnast 3D-flipinn og horfir þaðan. Stillt á {{ui:Ásatákn}} sýna báðir flipar ásamerkið í staðinn.

## Rúmlíkami frá öðrum forritum

Teikning frá öðru forriti getur haldið 3D-rúmlíkömum, svæðum og búkum (3DSOLID, REGION, BODY: hitt forritið geymir lögun þeirra sem ACIS-gögn). CadCraft sýnir þau sem eru í líkanrými á 3D-flipanum, í lit lagsins síns og með sínum eigin brúnum, í fyrsta skipti sem þú opnar flipann; skipanalínan segir síðan hversu mörg voru teiknuð.

- Þau birtast eins og þau eru: þú getur ekki valið, fært eða breytt þeim. Lög sem eru slökkt eða fryst fela þau.
- Vistað sem DWG skrifar hvert þeirra óbreytt til baka, í hvaða DWG-útgáfu sem er, svo hitt forritið fær þau aftur. DXF-skrár geyma þau ekki: CadCraft skrifar þau aðeins í DWG og segir það þegar þú vistar sem DXF.
- Teiknað: flatir fletir, og fletir á sívalningum, keilum, kúlum, tórusum og einföldum splínuflötum, með beinum, kringlóttum og splínubrúnum. Flötur á annarri tegund yfirborðs, eða sem CadCraft getur ekki lagt út, er ekki giskað á: honum er sleppt og hann skráður, til dæmis „Ekki enn teiknað (3D-rúmlíkami): 2 fletir á spline-surface (sweepsur), yfirborð sem ekki er enn teiknað.“
- Rúmlíkami inni í blokkum eru ekki sýnd enn; „Um þessa skrá“ telur þau.

Bogadregnir fletir eru teiknaðir sem smáir flatir bútar, um 7,5° hver frá öðrum, þannig að bogadregið rúmlíkami lítur örlítið út fyrir að vera með fleti þegar þú skoðar það nálægt.

## Vista og flytja út

Vistun geymir 3D-líkanið, bæði í DWG og í DXF. Sérhver flötur fer inn sem 3D-flötur á laginu `CC-3D`, svo að önnur forrit sýni rúmlíkömin, og CadCraft geymir sitt eigið nákvæma afrit í skránni, sem það les til baka þegar þú opnar teikninguna aftur, með 3D-sýninni eins og hún var (myndavél, varpi og sjónrænn stíll). 3D-fletir sem önnur forrit bjuggu til koma inn á 3D-flipann sem lausir fletir, haldnir saman sem einn hópur. 3D-flötur inni í blokk kemur inn einu sinni fyrir hverja tilvísun í þá blokk í líkaninu, staðsettur og snúinn eins og tilvísunin er; í blokkinni sjálfri og á blaði er 3D-flötur teiknaður flatur, sem útlína hans.

{{ui:Flytja út}} í 3D-hópnum sækir rúmlíkömin ein: GLB fyrir skoðara og vefinn ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) eða STL fyrir þrívíddarprentun, í millimetrum ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} spyr hvert.

:::note
Þrívíddarlíkanið er í raunstærð. Teikning án eininga telst vera í millimetrum, þannig að `1000` er einn metri. Ef þú breytir einingum teikningarinnar síðar ({{ui:Eiginleikar}}, með engu valið), eru rúmlíkömin skölluð með þeim svo þau haldist á teikningunni, og sagan segir það. Eitt {{key:Mod+Z}} afturkallar breytingu eininganna og skölunina saman.
:::
