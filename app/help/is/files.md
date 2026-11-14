---
title: Skrár: hvað opnast, hvað vistast
summary: Skráarsniðin sem CadCraft opnar, vistar og flytur út, hvað varðveitist eða er umbreytt og hvert skrárnar fara.
keywords: xclip, clip, xclip-mörk, binda klippt, dwg, dxf, pdf, r12, opna, vista, flytja út, flytja inn, snið, umbreyting, sækja, saveas, dxfout, vista sem, dwg-vistun, qsave, xref, xattach, tengd teikning, ytri tilvísun, binda, endurhlaða, aftengja
from: 6d68b34e
---

## Í stuttu máli

| Snið | Opna | Vista | Athugasemdir |
|---|---|---|---|
| DXF (texti, öll útgáfur) | Já | Já, sem DXF R12 eða DXF 2000 | Tvíundar-DXF er hafnað: vistaðu það fyrst sem texta-DXF. |
| DWG | Já | Já, sem DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 eða 2018) | Lesið og skrifað af eigin DWG-safni CadCraft (AutoCAD R13 til 2018 skrár). DWG-skránni þinni er aldrei breytt. Skemmdum skrám, eða útgáfum sem lesarinn ræður ekki við, er hafnað með skilaboðum. |
| PDF | Sækir síðu inn: sem undirlag eða sem hluti ([PDF-undirlög](topic:pdf-underlay)) | Já, með prentun | Vigur-PDF af blaði, eða af líkaninu í mælikvarða. |

Hver teikning sem þú opnar (eða byrjar með {{ui:Ný}}) fær sinn eigin flipa yfir teikniflötinn; ný teikning sem enginn hefur snert er notuð í stað þess að bæta við flipa. Smelltu á flipa til að skipta, á {{ui:×}} til að loka honum (CadCraft spyr fyrst ef óvistaðar breytingar eru til), eða raðaðu opnum teikningum hlið við hlið: sjá [Skipta skjánum](topic:split-screen).

## Opna teikningu

- Ýttu á {{key:Mod+O}}, smelltu á {{ui:Opna}}, eða sláðu inn `OPEN`, og veldu síðan skrána.
- Eða dragðu `.dwg`- eða `.dxf`-skrá á teikniflötinn.

Skráin er lesin inni í vafranum þínum. Hún er ekki send neitt. Ferillinn segir hversu marga hluti og lög komu inn og hversu langan tíma það tók, og {{ui:Teikning}}-hlutinn í vinstra spjaldinu sýnir sniðið, til dæmis „DWG 2018 (AC1032)“.

DWG-lesarinn er hluti af CadCraft og er sóttur með fyrstu DWG-skránni sem þú opnar eftir að síðan hleðst (nokkur hundruð KB), svo það er enginn sérstakur niðurhalstími. Hann les skrána í bakgrunni, svo síðan svarar áfram meðan stór DWG-skrá opnast.

### Hvað kemur inn

- Línur, bogar, hringir, fjöllínur (með bogaspjótum), sporbaugar, punktar, texti og margra lína texti, fylltir fletir, skygging (staðlað mynstur er teiknað sem línur sínar, önnur sem flatur tónn), blokkatilvísanir með eigindum sínum (gildi sem þú getur breytt; sjá [Blokkareigindi](topic:attributes)), málsetningar og blöð með sýnisgluggum þeirra.
- Splínur koma inn sem splínur (gráða, stjórnpunktar, hnútar, vigtir, passapunktar); sjá [Splínur og fjöllínur](topic:splines).
- Fjölvísar með einni vísilínu og texta koma inn sem CadCraft-fjölvísar sem þú getur breytt (sjá {{cmd:MLEADER}}). Aðrir (með blokk, nokkrum vísilínum eða bognum línum) eru teiknaðir eins og hitt forritið teiknaði þá og færast sem ein heild; ferillinn segir hversu margir.
- Myndir sýnast sem rammi með skráarnafni myndarinnar þar til þú gefur CadCraft skrána með {{cmd:IMAGE}}: sjá [Myndir í teikningu](topic:pictures#show-the-pictures-a-dwg-uses). Útmáningar sýnast sem rammi sinn, og það sem er undir þeim sést áfram.
- Töflur í DWG koma inn eins og hitt forritið teiknaði þær.
- 3D-fletir í líkanrými koma inn á {{ui:3D}}-flipann, ekki sem 2D-hlutir; það sama á við um þá sem eru í blokkum, einu sinni fyrir hverja blokkatilvísun í líkaninu. Í blokk og á blaði eru þeir einnig teiknaðir flatir, sem útlínur. Sjá [Líkan í 3D](topic:3d-solids).
- Lögin halda lit sínum og stillingum um kveikt, frosið, læst og prentun. DEFPOINTS prentast aldrei.
- Málsetningar verða að raunverulegum, breytanlegum málsetningum í CadCraft þar sem punktar þeirra eru læsilegir. Þær sýnast fyrst nákvæmlega eins og hitt forritið teiknaði þær; um leið og þú breytir einni teiknar CadCraft hana upp aftur í eigin stíl.
- Hvert útlit verður blaðsflipi. Í hinu forritinu hefur hvert útlit falinn fyrsta sýnisglugga sem er blaðið sjálft; CadCraft sleppir honum.

### Það sem kemur ekki inn ennþá

Allt sem CadCraft getur ekki teiknað er talið, ekki giskað á. Reitnum „Um þessa skrá“ í vinstra spjaldinu er það skráð sem „Ekki sýnt ennþá:“ og á eftir hverri tegund hluta og hversu margir. Dæmigerð tilvik eru töflur í DXF, möskvar og 3D-fastir hlutir í blokkum. 3D-fastir hlutir, svæði og líkamar í líkanrými birtast á 3D-flipanum (sjá [Líkan í 3D](topic:3d-solids#solids-from-other-programs)). Sýnisgluggar sem eru snúnir í skránni birtast snúnir, eins og þar, og halda snúningnum þegar þú vistar; það á líka við um núverandi UCS, nefnd UCS og snúna sýn.

Texti er teiknaður með einu letri í stíl Helvetica. Merki sem passar á eina línu í þrengra letri upprunalega forritsins getur brotnað á tvær línur í CadCraft.

## Vistun

Það eru þrjár leiðir til að vista. Hver þeirra sækir afrit.

- **Vista**: ýttu á {{key:Mod+S}}, smelltu á {{ui:Vista}}, eða sláðu inn `SAVE` (líka `QSAVE`). Hún vistar í sniði teikningarinnar: DWG ef þú opnaðir DWG, DXF ef þú opnaðir DXF. DWG heldur útgáfunni sem það kom með (2018-skrá vistast sem 2018). Ný teikning notar sniðið og DWG-útgáfuna sem þú valdir síðast í {{ui:Vista sem}} í þessum vafra; ef þú hefur aldrei valið, DWG á AutoCAD 2000-sniði.
- **Vista sem**: ýttu á {{key:Mod+Shift+S}}, smelltu á {{ui:Vista sem}}, eða sláðu inn `SAVEAS`. Glugginn {{ui:Vista afrit sem}} býður upp á {{ui:DWG}}, með lista yfir {{ui:Útgáfa}} (AutoCAD 2018, 2013, 2010, 2007, 2004 eða 2000), {{ui:DXF R12}} og {{ui:DXF 2000}}, hvert með skráarnafninu sem það gefur, og núverandi snið og útgáfa teikningarinnar eru þegar valin. Smelltu á {{ui:Vista}} til að sækja, eða {{ui:Hætta við}} (eða {{key:Esc}}) til að vista ekkert; ferillinn segir þá „Ekki vistað.“ Það sem þú velur heldur sér: {{key:Mod+S}} notar það fyrir þessa teikningu upp frá því, og nýjar teikningar í þessum vafra byrja með því.
- **DXFOUT**: sláðu inn `DXFOUT`. Það sækir alltaf afrit af DXF R12, og næsta {{key:Mod+S}} vistar samt í eigin sniði teikningarinnar.

Vafrinn sækir `<heiti teikningar>.dwg` eða `<heiti teikningar>.dxf`. Hver vistun er **nýtt niðurhal**; skránni sem þú opnaðir er aldrei skrifað yfir eða breytt. Ferillinn staðfestir það, til dæmis „Afrit vistað sem Plan.dwg (DWG (AutoCAD 2018)). Upprunalega Plan.dxf er óbreytt.“ Fyrir DXF stendur „(DXF R12, opnast í hvaða CAD-forriti sem er)“. Línurnar þar undir telja upp allt sem breyttist á leiðinni.

Þegar CadCraft keyrir í skjáborðsforritinu virkar vistun eins og í öðrum skjáborðsforritum: {{key:Mod+S}} skrifar teikninguna aftur í skrána sem þú opnaðir, í eigin sniði og útgáfu, og ferillinn segir hvar hún var vistuð. {{ui:Vista sem}} og útflutningar sýna vistunargluggakerfisins, og `.dwg`-, `.dxf`- eða `.ccsheets`-skrá sem þú tvísmellir á opnast í CadCraft.

Fyrir PDF skaltu prenta í staðinn (sjá hér að neðan).

## Hvað DWG geymir og breytir

CadCraft skrifar DWG-skrána sjálft, inni í vafranum þínum, með sama DWG-safni og það les með. Veldu útgáfuna í {{ui:Vista sem}}: AutoCAD 2000-sniðið (skráarútgáfa AC1015) opnast í flestum forritum, líka gömlum; nýrri sniðin (2004, AC1018, allt til 2018, AC1032) geyma líka raunliti. Ekkert er sent upp, og það virkar án nettengingar að vista DWG.

Hver útgáfa er prófuð með því að lesa vistuðu skrárnar aftur með DWG-lesurum þriggja annarra forrita og með CadCraft sjálfu. CadCraft-DWG hefur ekki enn verið opnað í AutoCAD sjálfu.

### Hvað DWG geymir

- Línur, bogar, hringir, sporbaugar, punktar og fjöllínur með bogaspjótum sínum.
- Eina línu texti með jöfnun sinni og breiddarstuðli.
- Margra lína og brotinn texti, sem margra lína texti. Hitt forritið brýtur hann aftur úr sömu breidd.
- Litir hluta: eftir lagi, eftir blokk, 255 staðlaðir litir, og raunlitir í 2004-sniði og síðar.
- Lög með lit, línugerð, línuþykkt og stillingum um kveikt, frosið, læst og prentun; eigin línugerðir, línuþykktir og línugerðarkvarðar hluta, línugerðarmynstur og línugerðarkvarði teikningarinnar.
- Einingar teikningarinnar og lengdarsnið (aukastafir, fet og tommur, brot…).
- Blokkir með grunnpunkti sínum og eigindaskilgreiningum, þar á meðal ósýnilegum, föstum og forstilltum.
- Blokkatilvísanir með mælikvarða, snúningi og eigindagildum.
- Fylltir fletir, og mynstraðar skyggingar með mynstri, mælikvarða og horni sínum (eigin línur mynstursins, svo önnur forrit teikna sömu línur og CadCraft gerir).
- Málsetningar, sem raunverulegar málsetningar: önnur forrit mæla þær aftur þegar þær eru teygðar. Hver heldur sínum eigin stillingum (textahæð, stærð örvar, aukastafir, lengdarsnið) og texta sínum, og ber teiknaða afritið sem sérhver DWG-málsetning hefur.
- Blöð (útlit): hvert blað með pappírsstærð og einingum, því sem er teiknað á það, og sýnisgluggum þess með sýn og mælikvarða.
- Nefndar sýnir.
- Fjölvísar, sem fjölvísar.
- Heiti laga og blokka eins og þú slóst þau inn, með há- og lágstöfum. (DXF R12 skrifar þau með hástöfum.)

### Hvað DWG breytir

Hvert þessara atriða er skráð í ferilinn eftir að þú vistar, þegar það á við teikninguna þína.

| Í CadCraft | Í vistuðu DWG |
|---|---|
| Raunlitir (valdir með litavali), í 2000-sniðinu | Næsti staðallitur: 2000-sniðið hefur aðeins 255 liti. Vistaðu sem 2004 eða nýrra til að geyma þá |
| Nefndar sýnir á blaði | Sýnir í pappírsrými: DWG segir ekki hvaða blað, svo þegar CadCraft opnar skrána aftur tilheyra þær fyrsta blaðinu |
| Margra lína texti með breiddarstuðli | Venjuleg stafabreidd: í DWG gildir breiddarstuðullinn aðeins um eina línu texta |
| Heiti laga eða blokka með stöfum sem DWG leyfir ekki | Breytt: heiti úr tengdri teikningu eins og `Base\|Walls` verður `Base$0$Walls` (eins og binding tengdrar teikningar nefnir það), og aðrir stafir verða `_` |

### Af hverju R12, og hvað umbreytist

Þegar þú vistar sem DXF skrifar CadCraft DXF R12, útgáfuna sem sérhvert CAD-forrit getur opnað. Hún er eldri en sum atriði, svo nokkur atriði eru skrifuð í einfaldara formi:

| Í CadCraft | Í vistaðri R12-skrá |
|---|---|
| Margra lína texti | Einn textahlutur á hverja línu |
| Sporbaugar | Fjöllínur sem fylgja sporbaugnum |
| Skyggingar (úr opnuðum skrám) | Aðeins útlínur þeirra |
| Raunlitir (valdir með litavali) | Næsti staðallitur |
| Línuþykktir, og eigin línugerðarkvarðar hluta | Sleppt: R12 hefur hvorugt (línugerðir haldast) |
| Heiti laga og blokka | Skrifuð með hástöfum; bil og aðrir stafir verða `_`, og heiti eru stytt í 31 staf (`Titilblokk` verður `TITILBLOKK`) |
| Lög stillt á að prenta ekki | Önnur forrit prenta þau (CadCraft man stillinguna þegar teikningin hefur blað) |
| Málsetningar | Raunverulegar málsetningar með eigin teiknaðri blokk, svo önnur forrit sýna þær eins og þú sérð þær |
| Fjölvísar | Línurnar, örvaroddinn og textinn sem þeir teikna |
| Nefndar sýnir | Geymdar, með heitum í hástöfum; sýnir blaðs koma aftur á fyrsta blaðið |
| Nokkur blöð | Fyrsta blaðið er pappírsrýmið sem öll forrit sýna; hin eru geymd sem blokkir sem heita `CCLAYOUT_1`, `CCLAYOUT_2` … sem CadCraft breytir aftur í blöð þegar það opnar skrána |

Ferillinn telur upp hvert þessara atriða sem átti við teikninguna þína.

:::tip
Til að halda áfram að vinna á teikningu yfir nokkra daga skaltu vista sem DXF og opna þá DXF-skrá næst. Allt sem CadCraft getur teiknað lifir af hringferðina, þar með talið málsetningar, blokkir og öll blöð.
:::

## Tengdar teikningar (ytri tilvísanir)

{{cmd:XATTACH}} (`XA`, eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Tengja teikningu (xref)}}) tengir aðra DWG- eða DXF-teikningu: veldu skrána, smelltu síðan þar sem hún á að fara ({{key:Enter}} setur hana á 0,0). Hún kemur inn sem ein blokk sem heitir eftir skránni, í réttum mælikvarða þegar teikningarnar tvær hafa mismunandi einingar. Lög hennar og blokkir halda heitum sínum með heiti tengingarinnar fremst — `Plan|Walls`, `Plan|Door` — svo þau blandast aldrei þínum: kveiktu og slökktu á tengdum lögum, frystu eða læstu þeim eins og þínum eigin. Tenging er skrifvarin: breyttu hinni teikningunni og endurhlaððu hana. Það sem þú stillir á lög tengingar (lit, línugerð, línuþykkt, kveikt/slökkt, frystingu, læsingu, prentun) geymist þegar þú endurhleður hana, þegar þú vistar teikninguna sem DWG á meðan tengingin er enn tenging, og þegar önnur teikning tengir þessa.

{{cmd:XREF}} (`XR`): `?` sýnir tengingarnar (hlaðnar eða ekki, hvaða skrá, hversu margar tilvísanir); `A` tengir; `R` endurhleður einni úr skránni sinni (veldu skrána aftur: vafrinn getur ekki náð í möppurnar þínar sjálfur); `B` bindur eina (hún verður venjulegar blokkir og lög sem heita `Plan$0$Walls`); `D` aftengir eina (tilvísanir hennar og lög fara). Hvert er eitt skref í afturköllun.

{{cmd:XCLIP}} (`XC`) klippir blokkatilvísanir og tengingar: veldu þær, `N` fyrir nýja mörk, og síðan `R` og tvö horn eða `P` og punkta marghyrningsins ({{key:Enter}} lokar honum); `D` fjarlægir klippinguna. Aðeins það sem er innan sýnist og prentast, og klippingin færist með tilvísuninni. DWG og DXF 2000 geyma klippingar; DXF R12 vistar tilvísunina heila og segir frá því. Þegar þú bindur tengingu sem hefur klipptar tilvísanir spyr {{cmd:XREF}} `B`: `A` bindur allt, `C` heldur aðeins klipptum hluta hverrar tilvísunar (línur og bogar eru skornir við mörkin; textar og innfelldar blokkir haldast ef innsetningarpunktur þeirra er innan).

Teikning sem þú opnar getur tengt skrár sem CadCraft sér ekki: hún segir hversu margar eru ekki hlaðnar. Notaðu {{cmd:XREF}}, `R` og veldu hverja skrá til að sjá þær.

Þegar þú vistar er hlaðin tenging **bundin** inn í skrána (önnur forrit sjá venjulegar blokkir og lög sem heita `Plan$0$…`), og ferillinn segir það. Tenging sem er ekki hlaðin er áfram tenging við skrána sína, í DWG og DXF.

## Opna í 3D

{{ui:Sýn}} › {{ui:Meira}} › {{ui:Opna í ModelCraft}} ({{cmd:OPENIN3D}}) opnar teikninguna í 3D-líkanforritinu á nýjum flipa, sem DWG, án þess að senda hana upp. Breytingar sem gerðar eru þar haldast þar; vistaðu þær þar. Valmyndaratriðið birtist aðeins þar sem það forrit getur tekið við teikningu.

## Prenta PDF

Ýttu á {{key:Mod+P}}, smelltu á {{ui:Prenta}}, eða sláðu inn `PLOT`. PDF-skjalið er búið til inni í vafranum og sótt, eða opnað á nýjum flipa til prentunar. Sjá [Prenta í PDF](topic:plot-pdf).

## Hvert skrárnar fara

Sérhver vistun og prentun er niðurhal, svo skrárnar lenda þar sem vafrinn setur niðurhöl: yfirleitt í möppunni Niðurhöl (Downloads). Til að velja möppu í hvert skipti skaltu breyta niðurhalsstillingunni í vafranum þínum; [Vafrar og tölvur](common:browsers) sýnir hvar.

Ekkert sem þú opnar eða vistar er sent til okkar. Sjá [Hvert skrárnar þínar fara](common:your-files).

## PLN- og PLA-verkefnaskrár

CadCraft opnar DWG- og DXF-teikningar, ekki eigin skrár Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Ef þú opnar eina þeirra segir það þér hvað hún er. Í Archicad skaltu vista þær sýnir eða útlit sem þú þarft sem DWG og opna þau hér, eða flytja líkanið út sem IFC og opna það í BimCraft. Þar sem BimCraft getur tekið skrána yfir býður CadCraft upp á {{ui:Opna í BimCraft}}.

## Ef síðan lokast áður en þú vistar

CadCraft geymir afrit af hverri teikningu sem þú breytir, í þessum vafra einum, skömmu eftir að þú hættir að breyta. Ef flipinn lokast, vafrinn stöðvast eða tölvan endurræsist áður en þú vistar, spyr CadCraft **Endurheimta vinnuna þína?** næst þegar það ræsist: {{ui:Endurheimta}} opnar teikninguna aftur, óvistaða, á sínum eigin flipa. Þegar þú vistar teikninguna fjarlægist afritið hennar. Sjá [Endurheimta vinnuna þína](common:recover).

## Á netinu og án nettengingar

Opnun, teikning, vistun (DWG og DXF) og prentun gerast öll í tölvunni þinni, svo þau virka án tengingar þegar CadCraft hefur hlaðist.

Til að nota CadCraft án nettengingar alveg skaltu smella á {{ui:Vista til notkunar án nettengingar}} í efri stikunni meðan þú ert á netinu. Merkið telur upp („Vistar 40 af 212“) og endar á „Tilbúið án nettengingar“. Vistaða afritið inniheldur DWG-lesarann, um 5 MB alls, svo **DWG-skrár opnast líka án nettengingar** þegar það hefur verið vistað. Smelltu aftur á hnappinn fyrir {{ui:Vista aftur (sækja nýjustu útgáfu)}} eða {{ui:Fjarlægja afritið án nettengingar}}. „Ekki tókst að vista“ þýðir að sumar skrár sóttust ekki: athugaðu tenginguna og smelltu til að reyna aftur. „Ekki í boði án nettengingar“ þýðir að þessi vafragluggi getur ekki geymt afrit (einkagluggar og sumar stýrðar tölvur).

Án vistaðs afrits er DWG-lesarinn sóttur í fyrsta sinn sem þú opnar DWG eftir að síðan hleðst, svo opnun DWG án nettengingar getur mistekist; DXF-skrár þurfa hann aldrei. Ekki endurhlaða síðunni án nettengingar nema CadCraft sé vistað.

Sjá [Vinna án nettengingar](common:offline) til að fá nánari upplýsingar.

:::offline
Þú ert án nettengingar núna. Teikningar vistast sem DWG eða DXF og prentast venjulega, og DXF-skrár opnast. DWG-skrár opnast ef CadCraft sýnir „Tilbúið án nettengingar“, eða ef DWG-lesarinn er þegar hlaðinn í þessum flipa.
:::

## Þvinganir í skrám

Þvinganir og breytur (sjá [Þvinga teikningu](topic:constraints)) eru vistaðar bæði í DWG og DXF. Hver þvingaður hlutur ber litla CadCraft-athugasemd (útvíkkuð gögn), og ónotuð blokk sem heitir `CADCRAFT_PARAMETRIC` geymir þvinganirnar og breytutöfluna. Önnur forrit opna teikninguna venjulega og hunsa hvort tveggja; þau geta eytt ónotuðu blokkinni þegar þau hreinsa. Athugasemdirnar vísa í hluti með eigin lykli, ekki með auðkennum skráarinnar, svo forrit sem endurnúmerar auðkenni brýtur þær ekki. Þegar annað forrit hefur eytt eða breytt þvinguðum hlut fellir CadCraft þvinganirnar á honum þegar það opnar skrána og segir hversu margar. Skrá án þeirra opnast án þvingana.

Skissa flutt út úr hlutalíkanaforriti (`.json`) opnast líka: sjá [Flytja skissur til og frá öðrum hlutalíkanaforritum](topic:solidworks-sketches).

## Ekki í boði ennþá

- Fjölvísar sem fjölvísahlutir í vistaðri DXF (R12 hefur þá ekki: þeir eru vistaðir sem það sem þeir teikna).
- Myndir í vistaðri DXF (þær vistast sem rammar sínir; DWG geymir þær sem myndir), og útmáningar sem fela það sem er undir þeim.
- Vistun DXF-útgáfu nýrri en 2000.
- Skýjavistun og samstilling milli tölva.

Sjá [Ekki smíðað ennþá](topic:not-built-yet) fyrir allan listann.
