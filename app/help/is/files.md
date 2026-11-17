---
title: Skrár: hvað opnast, hvað vistast
summary: Sniðin sem CadCraft opnar, vistar og flytur út, hvað er varðveitt eða breytt, og hvert skrárnar fara.
keywords: xclip, clip, xclip mörk, binda klippt, dwg, dxf, pdf, r12, opna, vista, útflutningur, innflutningur, snið, umbreyting, niðurhal, saveas, dxfout, vista sem, dwg vistun, qsave, xref, xattach, tengd teikning, ytri tilvísun, binda, endurhlaða, aftengja
from: b8c5778d
---

## Í hnotskurn

| Snið | Opna | Vista | Athugasemdir |
|---|---|---|---|
| DXF (texti eða tvíundir, hvaða útgáfa sem er) | Já | Já, sem DXF R12, DXF 2000 eða DXF 2000 (tvíundir) | Tvíundir DXF opnast eins og textaskrá og vistast aftur sem tvíundir. |
| DWG | Já | Já, sem DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 eða 2018) | Lesið og skrifað með eigin DWG-safni CadCraft (AutoCAD R13 til 2018 skrár). DWG-skránni þinni er aldrei breytt. Skemmdar skrár, eða útgáfur sem lesandinn ræður ekki við, eru hafnaðar með skilaboðum. |
| PDF | Sækir síðu inn: sem undirlag eða sem hluti ([PDF-undirlög](topic:pdf-underlay)) | Já, með prentun | Vektor-PDF af blaði, eða af líkaninu í mælikvarða. |

Hver teikning sem þú opnar (eða byrjar með {{ui:Ný}}) fær sinn flipa yfir teiknisvæðinu; ný teikning sem enginn hefur snert er notuð í stað þess að bæta við flipa. Smelltu á flipa til að skipta, á {{ui:×}} til að loka honum (CadCraft spyr fyrst ef óvistaðar breytingar eru til), eða raðaðu opnum teikningum hlið við hlið: sjá [Skipta skjánum](topic:split-screen).

## Opna teikningu

- Ýttu á {{key:Mod+O}}, smelltu á {{ui:Opna}}, eða sláðu inn `OPEN`, og veldu síðan skrána.
- Eða dragðu `.dwg`- eða `.dxf`-skrá yfir teiknisvæðið.

Skráin er lesin í vafranum þínum. Hún er ekki send neitt. Ferillinn segir hversu mörg atriði og lög komu inn og hve langan tíma það tók, og hlutinn {{ui:Teikning}} í vinstra spjaldinu sýnir sniðið, til dæmis „DWG 2018 (AC1032)“.

DWG-lesarinn er hluti af CadCraft og er sóttur með fyrstu DWG-skránni sem þú opnar eftir að síðan hleðst (nokkur hundruð KB), svo enginn sérstakur niðurhalsbið er. Hann les skrána í bakgrunni, svo síðan svarar áfram meðan stór DWG opnast.

DXF er lesin í bitum um 4 MB, aldrei sem einn textablokk, svo DXF yfir 512 MB opnast líka. Það sem takmarkar er minni tölvunnar þinnar: meðan DXF opnast má búast við að hún noti um 16 til 20 sinnum stærð skrárinnar (100 MB DXF með um 690.000 hluti notaði um 1.5 GB í prófun okkar).

### Hvað kemur inn

- Línur, bogar, hringir, fjöllínur (með bogahlutum), sporbaugar, punktar, texti og fjöllínutexti, fylltir fletir, skyggingar (staðlað mynstur teiknað sem línur, önnur sem flatur tónn), blokkartilvísanir með eigindum sínum (gildi sem þú getur breytt; sjá [Eigindi blokkar](topic:attributes)), málsetningar, og blöð með sýnisgluggum sínum.
- Splines koma inn sem splines (gráða, stjórnpunktar, hnútar, vægi, festipunktar); sjá [Splines og fjöllínur](topic:splines).
- Fjölvísanir með einni vísilínu og texta koma inn sem CadCraft-fjölvísanir sem þú getur breytt (sjá {{cmd:MLEADER}}). Aðrar (með blokk, nokkrum vísilínum eða bognum línum) eru teiknaðar eins og hitt forritið teiknaði þær og hreyfast sem ein heild; ferillinn segir hversu margar.
- Myndir (images) birtast sem rammi með heiti myndarinnar þangað til þú gefur CadCraft skrána með {{cmd:IMAGE}}: sjá [Myndir í teikningu](topic:pictures#show-the-pictures-a-dwg-uses). Útmáningar (wipeouts) birtast sem rammi sinn, og það sem er undir þeim helst sýnilegt.
- Töflur í DWG koma inn eins og hitt forritið teiknaði þær.
- Þrívíðir fletir í líkaninu koma inn á {{ui:3D}}-flipanum, ekki sem tvívíðir hlutir; það sama gildir um þá sem eru inni í blokkum, einu sinni fyrir hverja blokkartilvísun í líkaninu. Í blokk og á blaði eru þeir einnig teiknaðir flatir, sem útlínur. Sjá [Líkan í 3D](topic:3d-solids).
- Lög halda lit sínum, kveikt/slökkt, frosin, læst og prentstillingum. DEFPOINTS prentast aldrei.
- Málsetningar verða að raunverulegum, breytanlegum CadCraft-málsetningum þar sem punktar þeirra er hægt að lesa. Þær birtast fyrst nákvæmlega eins og hitt forritið teiknaði þær; um leið og þú breytir einni teiknar CadCraft hana aftur í sínum eigin stíl.
- Hvert blað verður blaðflipi. Í hinu forritinu hefur sérhvert blað falinn fyrsta sýnisglugga sem er blaðið sjálft; CadCraft sleppir honum.

### Það sem kemur ekki inn enn

Allt sem CadCraft getur ekki teiknað er talið, ekki giskað á. Reiturinn „Um þessa skrá“ í vinstra spjaldinu skráir það sem „Ekki birt enn:“ fylgt af hverri tegund hluta og fjölda þeirra. Dæmigerð tilvik eru töflur í DXF, möskvar og þrívíðir fastir hlutir í blokkum. Þrívíðir fastir hlutir, svæði og líkamar í líkaninu birtast á 3D-flipanum (sjá [Líkan í 3D](topic:3d-solids#solids-from-other-programs)). Sýnisgluggar sem eru snúnir í skránni birtast snúnir, eins og þar, og halda snúningnum þegar þú vistar; það sama gildir um núverandi UCS, nefnd UCS og snúna sýn.

Texti er teiknaður með einni leturgerð í stíl Helvetica. Merki sem passar á eina línu í upprunalega forritinu, með þrengra letri, getur brotnað á tvær línur í CadCraft.

## Vistun

Það eru þrjár leiðir til að vista. Hver þeirra sækir afrit.

- **Vista**: ýttu á {{key:Mod+S}}, smelltu á {{ui:Vista}}, eða sláðu inn `SAVE` (líka `QSAVE`). Hún vistar í snið teikningarinnar: DWG ef þú opnaðir DWG, DXF ef þú opnaðir DXF. DWG heldur útgáfunni sem hún kom með (2018 skrá vistast sem 2018). Ný teikning notar snið og DWG-útgáfu sem þú valdir síðast í {{ui:Vista sem}} í þessum vafra; ef þú hefur aldrei valið, DWG í AutoCAD 2000-sniði.
- **Vista sem**: ýttu á {{key:Mod+Shift+S}}, smelltu á {{ui:Vista sem}}, eða sláðu inn `SAVEAS`. Glugginn {{ui:Vista afrit sem}} býður upp á {{ui:DWG}}, með lista yfir {{ui:Útgáfa}} (AutoCAD 2018, 2013, 2010, 2007, 2004 eða 2000), {{ui:DXF R12}} og {{ui:DXF 2000}}, hvert með skráarheitinu sem það gefur, og núverandi snið og útgáfu teikningarinnar þegar valin. Smelltu á {{ui:Vista}} til að sækja, eða {{ui:Hætta við}} (eða {{key:Esc}}) til að vista ekkert; ferillinn segir þá „Ekki vistað.“ Það sem þú velur heldur sér: {{key:Mod+S}} notar það fyrir þessa teikningu upp frá því, og nýjar teikningar í þessum vafra byrja með það.
- **DXFOUT**: sláðu inn `DXFOUT`. Hún sækir alltaf afrit af DXF R12, og næsta {{key:Mod+S}} vistar samt í snið teikningarinnar sjálfrar.

Vafrinn sækir `<drawing name>.dwg` eða `<drawing name>.dxf`. Sérhver vistun er **nýtt niðurhal**; skráin sem þú opnaðir er aldrei yfirskrifuð eða breytt. Ferillinn staðfestir það, til dæmis „Vistað afrit sem Plan.dwg (DWG (AutoCAD 2018)). Upprunalega Plan.dxf er óbreytt.“ Fyrir DXF stendur „(DXF R12, opnast í hvaða CAD-forriti sem er)“. Línurnar fyrir neðan skrá allt sem breyttist á leiðinni.

Þegar CadCraft keyrir í skjáborðsforritinu virkar vistun eins og í öðrum skjáborðsforritum: {{key:Mod+S}} skrifar teikninguna aftur í skrána sem þú opnaðir, í sínu eigin sniði og útgáfu, og ferillinn segir hvert hún var vistuð. {{ui:Vista sem}} og útflutningar sýna vistunarglugga stýrikerfisins, og `.dwg`, `.dxf` eða `.ccsheets`-skrá sem þú tvísmellir á opnast í CadCraft.

Fyrir PDF skaltu prenta í staðinn (sjá hér að neðan).

## Hvað DWG heldur og breytir

CadCraft skrifar DWG sjálft, inni í vafranum þínum, með sama DWG-safni og það les með. Veldu útgáfuna í {{ui:Vista sem}}: AutoCAD 2000-sniðið (skráarútgáfa AC1015) opnast í flestum forritum, líka þeim gömlu; nýrri sniðin (2004, AC1018, upp í 2018, AC1032) halda líka sönnum litum. Ekkert er sent, og það er hægt að vista DWG án nettengingar.

Hver útgáfa er prófuð með því að lesa vistuðu skrárnar aftur með DWG-lesendum þriggja annarra forrita og með CadCraft sjálfu. CadCraft-DWG skrá hefur ekki verið opnuð í AutoCAD sjálfu enn.

### Hvað DWG heldur

- Línur, bogar, hringir, sporbaugar, punktar og fjöllínur með bogahlutum sínum.
- Einlínu texti með röðun sinni og breiddarstuðli.
- Margra lína og vafinn texti, sem fjöllínutexti. Hitt forritið vefur hann aftur með sömu breidd.
- Litir hluta: eftir lagi, eftir blokk, 255 staðallitirnir, og sannir litir í 2004-sniði og síðar.
- Lög með lit sínum, línugerð, línuþykkt og kveikt, frosið, læst og prentstillingum; eigin línugerðir, línuþykktir og línugerðarkvarðar hlutanna, línugerðarmynstrin og línugerðarkvarði teikningarinnar.
- Einingar teikningarinnar og lengdarsniðið (tugakerfi, fet og tommur, brot…).
- Blokkir með grunnpunkti sínum og eigindaskilgreiningum, þar á meðal ósýnilegum, föstum og forstilltum.
- Blokkartilvísanir með skala, snúningi og eigindagildum.
- Fylltir fletir, og mynstraðar skyggingar með mynstri sínu, kvarða og horni (línur mynstursins sjálfs, svo önnur forrit teikna sömu línur og CadCraft).
- Málsetningar, sem raunverulegar málsetningar: önnur forrit mæla þær aftur þegar þær eru teygðar. Hver heldur sínum eigin stillingum (texta­hæð, örvastærð, aukastafir, lengdarsnið) og texta sínum, og ber afritaða mynd sem sérhver DWG-málsetning hefur.
- Blöð (útlit): hvert blað með pappírsstærð sinni og einingum, því sem er teiknað á því, og sýnisgluggum sínum með sýn og kvarða.
- Nefndar sýnir.
- Fjölvísanir, sem fjölvísanir.
- Heiti laga og blokka eins og þú slóst þau inn, með hástöfum og lágstöfum. (DXF R12 skrifar þau með hástöfum.)

### Hvað DWG breytir

Hvert af þessu er skráð í ferilinn eftir að þú vistar, þegar það á við um teikninguna þína.

| Í CadCraft | Í vistuðu DWG |
|---|---|
| Sannir litir (valdir með litavali), í 2000-sniði | Næsti staðallitur: 2000-sniðið hefur aðeins 255. Vistaðu sem 2004 eða nýrra til að halda þeim |
| Nefndar sýnir á blaði | Pappírssýnir: DWG segir ekki hvaða blað, svo þegar CadCraft opnar skrána aftur tilheyra þær fyrsta blaðinu |
| Margra lína texti með breiddarstuðli | Venjuleg stafabreidd: í DWG gildir breiddarstuðullinn aðeins um einlínu texta |
| Heiti laga eða blokka með stöfum sem DWG leyfir ekki | Breytt: heiti úr tengdri teikningu eins og `Base\|Walls` verður `Base$0$Walls` (eins og bindingar tengdrar teikningar nefna það), og aðrir stafir verða `_` |

### Af hverju R12, og hvað umbreytist

Þegar þú vistar sem DXF skrifar CadCraft DXF R12, útgáfuna sem sérhvert CAD-forrit getur opnað. Hún er eldri en sumir eiginleikar, svo sum atriði eru skrifuð á einfaldara formi:

| Í CadCraft | Í vistuðu R12-skránni |
|---|---|
| Margra lína texti | Einn textahlutur á hverja línu |
| Sporbaugar | Fjöllínur sem fylgja sporbaugnum |
| Skyggingar (úr opnuðum skrám) | Aðeins útlínur þeirra |
| Sannir litir (valdir með litavali) | Næsti staðallitur |
| Línuþykktir, og eigin línugerðarkvarðar hlutanna | Sleppt: R12 hefur hvorugt (línugerðir haldast) |
| Heiti laga og blokka | Skrifuð með hástöfum; bil og aðrir stafir verða `_`, og heiti eru stytt í 31 staf („Titilreitur“ verður `TITILREITUR`) |
| Lög stillt á að prentast ekki | Önnur forrit prenta þau (CadCraft man stillinguna þegar teikningin er með blaði) |
| Málsetningar | Raunverulegar málsetningar með eigin teiknaðri blokk, svo önnur forrit sýna þær eins og þú sérð þær |
| Fjölvísanir | Línurnar, örvaroddurinn og textinn sem þær teikna |
| Nefndar sýnir | Haldast, með heitum í hástöfum; sýnir blaðs koma aftur á fyrsta blaðinu |
| Nokkur blöð | Fyrsta blaðið er pappírsrýmið sem sérhvert forrit sýnir; hin haldast sem blokkir nefndar `CCLAYOUT_1`, `CCLAYOUT_2` … sem CadCraft breytir aftur í blöð þegar það opnar skrána |

Ferillinn telur upp hvert af þessu sem átti við teikninguna þína.

:::tip
Til að halda áfram að vinna í teikningu yfir nokkra daga, vistaðu sem DXF og opnaðu þá DXF næst. Allt sem CadCraft getur teiknað lifir af umferðina, þar á meðal málsetningar, blokkir og öll blöð.
:::

## Tengdar teikningar (ytri tilvísanir)

{{cmd:XATTACH}} (`XA`, eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Tengja teikningu (xref)}}) tengir aðra DWG- eða DXF-skrá: veldu skrána, smelltu síðan þar sem hún á að fara ({{key:Enter}} setur hana á 0,0). Hún kemur inn sem ein blokk nefnd eftir skránni, í réttum mælikvarða þegar teikningarnar tvær hafa mismunandi einingar. Lögin hennar og blokkir halda heitum sínum með heiti tengingarinnar framan við — `Plan|Walls`, `Plan|Door` — svo þau blandist aldrei við þín: kveiktu og slökktu á tengdu lögunum, frystu þau eða læstu eins og þín eigin. Tenging er lesin eingöngu: breyttu hinni teikningunni og endurhladdu hana. Það sem þú stillir á lög tengingarinnar (lit, línugerð, línuþykkt, kveikt/slökkt, frost, lás, prentun) heldur sér þegar þú endurhleður hana, þegar þú vistar teikninguna sem DWG á meðan tengingin er enn tenging, og þegar önnur teikning tengir þessa.

{{cmd:XREF}} (`XR`): `?` skráir tengingarnar (hlaðnar eða ekki, hvaða skrá, hve margar tilvísanir); `A` tengir; `R` endurhleður eina úr skrá sinni (veldu skrána aftur: vafrinn nær ekki í möppurnar þínar af sjálfsdáðum); `B` bindur eina (hún verður venjulegar blokkir og lög nefnd `Plan$0$Walls`); `D` aftengir eina (tilvísanir hennar og lög fara). Hvert þeirra er eitt skref í afturköllun.

{{cmd:XCLIP}} (`XC`) klippir blokkartilvísanir og tengingar: veldu þær, `N` fyrir nýja mörk, síðan `R` og tvö horn eða `P` og punkta marghyrnings ({{key:Enter}} lokar honum); `D` fjarlægir klippinguna. Aðeins það sem liggur innan sýnist og prentast, og klippingin fylgir tilvísuninni. DWG og DXF 2000 halda klippingum; DXF R12 vistar tilvísunina í heilu lagi og segir það. Þegar þú bindur tengingu sem hefur klipptar tilvísanir spyr {{cmd:XREF}} `B`: `A` bindur allt, `C` heldur aðeins klipptum hluta hverrar tilvísunar (línur og bogar eru skornir við mörkin; textar og innfelldar blokkir haldast ef innsetningarpunktur þeirra er innan þeirra).

Teikning sem þú opnar getur tengt skrár sem CadCraft sér ekki: hún segir hve margar eru ekki hlaðnar. Notaðu {{cmd:XREF}}, `R` og veldu hverja skrá til að sjá þær.

Þegar þú vistar er hlaðin tenging **bundin** inn í skrána (önnur forrit sjá venjulegar blokkir og lög nefnd `Plan$0$…`), og ferillinn segir frá því. Tenging sem er ekki hlaðin er áfram tenging við skrána sína, bæði í DWG og DXF.

## Opna í 3D

{{ui:Sýn}} › {{ui:Meira}} › {{ui:Opna í ModelCraft}} ({{cmd:OPENIN3D}}) opnar teikninguna í þrívíddarlíkanaforritinu á nýjum flipa, sem DWG, án þess að hlaða henni upp. Breytingar sem gerðar eru þar haldast þar; vistaðu þær þar. Valmyndaratriðið birtist aðeins þar sem það forrit getur tekið við afhentri teikningu.

## Prenta PDF

Ýttu á {{key:Mod+P}}, smelltu á {{ui:Prenta}}, eða sláðu inn `PLOT`. PDF-skráin er búin til í vafranum og sótt, eða opnuð á nýjum flipa til prentunar. Sjá [Prenta í PDF](topic:plot-pdf).

## Hvar skrárnar enda

Sérhver vistun og hvert prent er niðurhal, svo skrárnar lenda þar sem vafrinn setur niðurhöl: venjulega í Downloads-möppunni. Til að velja möppu í hvert skipti, breyttu niðurhalsstillingunni í vafranum; [Vafrar og tölvur](common:browsers) sýnir hvar hún er.

Ekkert sem þú opnar eða vistar er sent til okkar. Sjá [Hvar skrárnar þínar fara](common:your-files).

## PLN- og PLA-verkefnaskrár

CadCraft opnar DWG- og DXF-teikningar, ekki eigin skrár Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Ef þú opnar eina þeirra segir það þér hvað hún er. Í Archicad skaltu vista þau blöð eða útlit sem þú þarft sem DWG og opna þau hér, eða flytja líkanið út sem IFC og opna það í BimCraft. Þar sem BimCraft getur tekið skrána yfir, býður CadCraft upp á {{ui:Opna í BimCraft}}.

## Ef síðan lokast áður en þú vistar

CadCraft geymir afrit af sérhverri teikningu sem þú breytir, aðeins í þessum vafra, skömmu eftir að þú hættir að breyta. Ef flipinn lokast, vafrinn stöðvast eða tölvan endurræsir sig áður en þú vistar, spyr CadCraft **Endurheimta vinnuna þína?** þegar það ræsist næst: {{ui:Endurheimta}} opnar teikninguna aftur, óvistaða, á sínum eigin flipa. Vistun teikningarinnar fjarlægir afritið hennar. Sjá [Endurheimta vinnuna þína](common:recover).

## Á netinu og án nettengingar

Opnun, teikning, vistun (DWG og DXF) og prentun gerast öll á tölvunni þinni, svo þær virka án tengingar þegar CadCraft er hlaðið.

Til að nota CadCraft án nokkurrar tengingar, smelltu á {{ui:Vista til notkunar án nettengingar}} í stikunni efst meðan þú ert á netinu. Merkið telur upp („Vista 40 af 212“) og endar á „Tilbúið án nettengingar“. Vistaða afritið inniheldur DWG-lesarann, um 5 MB samtals, svo **DWG-skrár opnast einnig án nettengingar** þegar hún er vistuð. Smelltu aftur á hnappinn fyrir {{ui:Vista aftur (sækja nýjustu útgáfu)}} eða {{ui:Fjarlægja afritið án nettengingar}}. „Ekki tókst að vista“ þýðir að sumar skrár sóttust ekki: athugaðu tenginguna og smelltu til að reyna aftur. „Ekki tiltækt án nettengingar“ þýðir að þessi vafragluggi getur ekki geymt afrit (einkagluggar og sumar stýrðar tölvur).

Án vistaðs afrits er DWG-lesarinn sóttur í fyrsta skipti sem þú opnar DWG eftir að síðan hleðst, svo opnun DWG án nettengingar getur mistekist; DXF-skrár þurfa hann aldrei. Ekki endurhlaða síðunni án nettengingar nema CadCraft sé vistað.

Sjá [Vinna án nettengingar](common:offline) til að fá nánari upplýsingar.

:::offline
Þú ert án nettengingar núna. Teikningar vistast sem DWG eða DXF og prentast eðlilega, og DXF-skrár opnast. DWG-skrár opnast ef CadCraft sýnir „Tilbúið án nettengingar“, eða ef DWG-lesarinn er þegar hlaðinn í þessum flipa.
:::

## Takmarkanir í skrám

Takmarkanir og breytur (sjá [Takmarka teikningu](topic:constraints)) eru vistaðar bæði í DWG og DXF. Sérhver takmarkaður hlutur ber lítinn CadCraft-minnispunkt (útvíkkuð gögn), og ónotuð blokk sem heitir `CADCRAFT_PARAMETRIC` geymir takmarkanirnar og breytutöfluna. Önnur forrit opna teikninguna eðlilega og hunsa hvort tveggja; þau geta eytt ónotuðu blokkinni þegar þau hreinsa. Athugasemdirnar vísa í hluti eftir eigin lykli, ekki eftir handföngum skrárinnar, svo forrit sem endurnúmerar handföng brýtur þær ekki. Þegar annað forrit hefur eytt eða breytt takmörkuðum hlut, fellir CadCraft takmarkanirnar á honum þegar það opnar skrána og segir hve margar. Skrá án þeirra opnast án takmarkana.

Skissa sem flutt er út úr hlutalíkanara (`.json`) opnast líka: sjá [Flytja skissur til og frá öðrum hlutalíkönurum](topic:solidworks-sketches).

## Ekki tiltækt enn

- Fjölvísanir sem fjölvísanahlutir í vistaðri DXF (R12 hefur þær ekki: þær eru vistaðar sem það sem þær teikna).
- Myndir í vistaðri DXF (þær vistast sem rammar þeirra; DWG heldur þeim sem myndum), og útmáningar sem fela það sem er undir þeim.
- Vistun DXF-útgáfu nýrri en 2000.
- Skýjavistun og samstilling milli tölva.

Sjá [Ekki smíðað enn](topic:not-built-yet) fyrir allan listann.
