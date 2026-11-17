---
title: Ekki enn smíðað
summary: Það sem þessi útgáfa CadCraft teikniforritsins getur ekki gert enn, og hvað á að gera í staðinn í dag.
keywords: vantar, takmarkanir, ctb, stb, prentstíll, eiginleikar, ucs, skýringar, kvik blokk, spline, vegvísir, ekki studd, vista dwg, skygging, teygja, fylki, tengja, samræma eiginleika, brjóta, lengja, línugerð, línuþykkt, ytri tilvísun, ský, 3d, föst efni, mengjaaðgerðir, fjölleiðarvísir, útmáun
from: 87e56521
---

CadCraft er í þróun. Þessi síða telur upp það sem þessi útgáfa gerir ekki enn, svo þú þurfir ekki að leita að því. Hvert atriði segir hvað á að gera í staðinn í dag.

## Skrár og vistun

| Ekki enn smíðað | Í staðinn, í dag |
|---|---|
| CadCraft DWG-skrá sem hefur verið yfirfarin í AutoCAD sjálfu | Sérhver vistuð útgáfa er lesin aftur af þremur öðrum forritum með DWG-lesurum og af CadCraft. Sjá [Hvað DWG-skrá geymir og breytir](topic:files#what-a-dwg-keeps-and-changes). |
| Vistun DXF nýrri en 2000 | Vistaðu sem DXF 2000, eða sem DWG allt að AutoCAD 2018. |
| Vistun yfir opnuðu skránni í vafranum | Hver vistun hleður niður nýju afriti; skiptu sjálf(ur) út gömlu skránni ef þú vilt. Í CadCraft Studio skrifar {{key:Mod+S}} aftur í skrána sem þú opnaðir. |
| Skýjavistun og samstilling milli tölva | CadCraft sendir ekki vistanir sínar í skýið enn: geymdu DWG- og DXF-skrárnar þínar í þínum eigin möppum. Í CadCraft Studio sýnir [Saga](topic:history) skýjaútgáfur teikningar sem var vistuð annars staðar og afrit af þínum eigin vistunum á þessari tölvu. |
| Yfirlögn og breyting á tengdri teikningu á staðnum | Festu teikninguna sem tengil og hlaðaðu henni aftur eftir að þú hefur breytt hinni teikningunni. Tengill helst tengill þegar þú vistar sem DWG, og {{cmd:XCLIP}} klippir hann. |
| Myndir í DXF; útmáun sem felur það sem er undir | DXF geymir mynd sem ramma með skráarheitinu; DWG geymir hana sem mynd — sjá [Myndir í teikningu](topic:pictures). Útmáun birtist sem rammi sinn. |
| Breyting á fjölleiðarvísum með bognum leiðarlínum, með leiðarlínum beggja vegna efnisins, eða með blokk sem er snúin eða skölluð ójafnt | Þær eru teiknaðar eins og hitt forritið teiknaði þær og hreyfast sem ein heild. Fjölleiðarvísar með beinum leiðarlínum að einum lendingarstað, og texti eða blokk sem efni, verða breytanlegir ({{cmd:MLEADEREDIT}}). |
| Í töflum úr öðrum forritum: reitur sem geymir blokk, textasnið inni í reit, reitaramma og liti hvers reits í DXF-töflu, tafla brotin í dálka | Taflan opnast sem breytanleg tafla ({{cmd:TABLEDIT}}) og er sýnd eins og hitt forritið teiknaði hana þar til þú breytir henni; þá teiknar CadCraft hana aftur út frá reitunum sínum: venjulegur texti, formúlur eins og `=G3*H3` og `=Sum(I3:I9)`, jöfnun og textahæðir. Blokkarreitur verður þá tómur. Óbreytt DWG-tafla er vistuð aftur með reitagögnunum sem fylgdu henni. |
| Raunverulegur töfluhlutur í vistaðri DXF | DWG geymir töflu sem töflu sem önnur forrit geta breytt. DXF geymir hana sem blokkina sem teiknar hana, ásamt eigin skrá CadCraft: CadCraft opnar hana aftur sem töflu; önnur forrit sjá blokk. Tafla sem er speglað eða skölluð ójafnt er vistuð þannig í DWG líka. |
| Afritun og líming með öðrum forritum | Klippiborð CadCraft virkar á milli CadCraft-teikninga og flipa í sama vafra, ekki með öðrum forritum. Vistaðu sem DWG eða DXF og opnaðu hana þar. Sjá [Afrita, líma og tvöfalda](topic:copy-paste). |

## Teikning og breytingar

| Ekki enn smíðað | Í staðinn, í dag |
|---|---|
| Skyggingarmynstur sem CadCraft hefur ekki, og litstigaáfyllingar nákvæmlega eins og önnur forrit mála þær | Opnaðar skyggingar með mynstrum sem CadCraft hefur ekki birtast sem tónn. Litstigaáfylling ({{cmd:GRADIENT}}) er máluð á hátt CadCraft fyrir hverja gerð: svipað og í öðrum forritum að eðli, ekki punkt fyrir punkt. DWG 2004 og nýrri geyma hana sem raunverulega litstigaskyggingu; í DXF 2000- eða DWG 2000-skrá les aðeins CadCraft hana til baka, og önnur forrit sjá heilfyllingu. Mynstur hlaðast úr `.pat`-skrá, og skyggingu má tengja við afmörkun sína og fylgir henni þá: sjá [Skygging og fylltir fletir](topic:hatch). |
| Línugerðir með formum eða texta í sér, og línuþykktir í vistaðri DXF R12 | Form og texti í línugerð skráar eru skilin eftir úr strikum hennar; vistaðu sem DWG til að halda línuþykktum. |
| Mynstraðar skyggingar í vistaðri DXF | R12 hefur enga skyggingu: þær eru vistaðar sem útlínur sínar. Vistaðu sem DWG til að halda mynstrinu. |
| Fylki sem annað forrit bjó til eða getur breytt; raðir og hæðir í slóðar- og pólfylkjum; fylki sem fylgir slóðarferli sínum | Fylki sem búið er til með tengdum hætti (ASsociative, {{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; breytt með {{cmd:ARRAYEDIT}}) er vistað sem blokkartilvísun með eigin tölum CadCraft: önnur forrit sýna, færa, prenta og sprengja það en geta ekki breytt fjölda þess, og fylki sem búið er til í öðru forriti opnast hér sem venjuleg blokkartilvísun. Slóðarfylki geymir afrit af slóð sinni: ef ferillinn er breyttur síðar færast hlutirnir ekki. |
| Klipptir blaðgluggar til og frá öðrum forritum | Gluggi klipptur með {{cmd:VPCLIP}} eða búinn til með {{cmd:MVIEW}} Polygonal eða Object er vistaður með eigin útlínu CadCraft: önnur forrit opna hann sem rétthyrninginn utan um hann, og gluggi klipptur í öðru forriti opnast hér sem rétthyrningurinn sinn. DXF R12 geymir aðeins rétthyrninginn. |
| {{cmd:STRETCH}} með krossandi marghyrningi | Notaðu einn eða fleiri krossandi glugga. |
| {{cmd:PEDIT}} Breyta hornpunkti (einum hornpunkti í einu í skipanalínu) | Gripar, og hornpunktavafrinn í Eiginleikum (sérhver hornpunktur, breidd hans og bunga). Restin af PEDIT er smíðuð: sjá [Splænur og fjöllínur](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} og {{cmd:JOIN}} á sporbaugum og splænum | {{cmd:EXPLODE}} splænu (eða {{cmd:PEDIT}} hana) til að fá fjöllínu sem þessar skipanir taka við. |
| Ávöl horn og skáskurður milli bogahluta fjöllínu og hlutans við hlið hans; ávalt horn sem tengir línu í fjöllínu | {{cmd:EXPLODE}} fjöllínuna, og gerðu síðan ávöl horn á hlutunum. Ávalabogi er bætt við sem sinn eigin hlutur. |
| Stytta og lengja: Project-valkosturinn (3D) og lenging bogaenda fjöllínu | Styttu í plani teikningarinnar; fyrir bogaenda, sprengdu fjöllínuna eða teiknaðu bogann aftur. |
| OLE-hlutir: innsetning þeirra, keyrsla eða breyting; sýning þeirra í DWG þar sem skráin setur þá; metaskrármyndir | Sjá [Myndir](topic:pictures#objects-from-other-programs-ole). Hlutir DXF birtast sem bitmynd þeirra eða merktur rammi; hlutir DWG eru varðveittir, ekki teiknaðir á sínum stað ({{cmd:OLELIST}} telur þá upp og setur afrit af mynd þar sem þú segir til). |
| Innsláttur sniðkóða (feitletrun, staflaðar brotatölur, litir hvert orð) í málsgreinatexta; leturgerðir aðrar en Helvetica-stíls letrið; dálkar | Snið sem kom í skrá er varðveitt, teiknað og vistað (sjá Texti); nýr málsgreinatexti hefur eina hæð og lit. |
| Málsgreinatexti breyttur í snúningi sínum | Ritillinn opnast láréttur; texti heldur snúningi sínum. |
| Fjölleiðarvísar vistaðir sem fjölleiðarvísihlutir í DXF | DWG geymir þá sem fjölleiðarvísa, með sérhverri leiðarlínu og blokk sem efni; DXF geymir það sem þeir teikna (línur, örvaodda, og textann eða blokkina). |
| Í töflum ({{cmd:TABLE}}): texti sem vefst inni í reit, töflur sem brotna í hluta, eigin textastíll töfluminnis og litir eftir gerð raðar í glugga, gagnatengill við töflureikniskrá (`.xlsx`) eða skrá sem les skrána sjálf | Texti reits brotnar aðeins þar sem þú brýtur hann ({{key:Alt+Enter}}); breikkaðu dálkinn. {{cmd:DATALINK}} les `.csv`-skrá, og {{cmd:DATALINKUPDATE}} biður þig að velja skrána aftur. {{cmd:DATAEXTRACTION}} og {{cmd:COUNTTABLE}} búa til töflu sem fylgir ekki teikningunni sjálf: keyrðu þær aftur (lifandi talning: {{cmd:BOMTABLE}}). |
| Eigindaskilgreiningar geymdar sér í vistaðri skrá (utan blokkar), fjöllínu eigindi | Settu eigindaskilgreiningar í blokk áður en þú vistar: einar sér vistast þær sem texti sem sýnir merkið. |
| Lagastöður (vistun og endurheimt þess hvaða lög eru kveikt) | Notaðu {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, eða kveiktu og slökktu á lögum handvirkt. |
| Val með gluggamarghyrningi og krossandi marghyrningi, og vistaðar valsíur | Girðing (`F`), Window, Crossing, Remove (`R`), {{cmd:QSELECT}} fyrir reglu. |

## Eiginleikagluggi

| Ekki enn smíðað | Í staðinn, í dag |
|---|---|
| Teikning Fit-valkostanna, og lárétt textastaða og texti undir línu á málsetningum annarra en línulegra og jafnsamsíða | Þeir eru geymdir á hlutnum, sýndir í Eiginleikum og vistaðir; CadCraft staðsetur textann eftir eigin reglu. |
| Efni sem önnur forrit sjá | Vistuð skrá geymir heiti efnisins fyrir CadCraft; önnur forrit sýna efni lagsins. |
| Gegnsæi í DWG 2000- og DXF-skrám | Önnur forrit sýna þessa hluti heila; CadCraft geymir gegnsæið. Vistaðu sem DWG 2004 eða nýrri fyrir alla. |
| Skyggingartengill gerður í öðru forriti | CadCraft vistar sinn eigin tengil í DWG- og DXF 2000-skrám; tenglar gerðir í öðrum forritum eru ekki lesnir. Notaðu `HATCHEDIT` og Tengja: sjá [Skygging og fylltir fletir](topic:hatch). |
| Hnit í Eiginleikum í UCS | Eiginleikar sýna heimshnit; stöðustikan og {{cmd:ID}} sýna UCS-hnit. Sjá [Snúðu sýninni og notaðu þín eigin hnit](topic:ucs-and-turned-view). |
| Sérstök staða fyrir skýringarhlut á hverjum mælikvarða hans; lestur skráa fyrir hvern mælikvarða sem önnur forrit geyma | Skýringartexti eða -málsetning geymir lista yfir mælikvarða ({{cmd:OBJECTSCALE}}) og hver gluggi sýnir hann í þeirri stærð sem á við mælikvarða hans, á sama stað. Listinn er vistaður sem eigin gögn CadCraft: annað forrit sér hlutinn á þeim eina mælikvarða sem hann er stærður fyrir, og lista gerðan í öðru forriti er ekki lesinn. Sjá [Einingar, blöð og mælikvarðar](topic:units-papers-scales#annotate-by-scale). |
| Breyting á fjarlægðum, hornum eða speglunum kvikrar blokkar; kvikar blokkir haldast kvikar þegar þú vistar í annarri DWG-útgáfu eða sem DXF | Skiptu um sýnileikastöðu hennar í Eiginleikar › {{ui:Sérsniðið}}; önnur gildi hennar birtast þar eingöngu til lestrar. Hún helst kvik þegar hún er vistuð sem DWG í þeirri útgáfu sem teikningin kom í. Sjá [Kvikar blokkir](topic:dynamic-blocks). |
| Passunarvik splænu, splænugráða 6 og hærri, 3D-splænur | Passunar- og stýripunktar, gráður 1 til 5 og vigtir eru smíðaðar: sjá [Splænur og fjöllínur](topic:splines). Hæð splænu (Z) er ekki geymd. |

## Nákvæmnishjálp

| Ekki enn smíðað | Í staðinn, í dag |
|---|---|
| Eltingu frá punktum yfir skipanir, og stillingagluggi eltingar (hlutfallsleg pólhorn, aukahorn) | {{cmd:POLARANG}} setur skrefið; náðu punktunum aftur í næstu skipun. |
| Smella á net | Sláðu inn hnit; netið er aðeins sjónræn leiðsögn. |
| Boga- og lengdarvalkostir við val á hornum svæðis, og MEASUREGEOM Volume | Teiknaðu útlínuna með {{cmd:PLINE}} (bogar meðtaldir), síðan {{cmd:AREA}} `O`. |
| Kvikt inntak fyrir gripa, og valmyndarlisti þess (örin niður) | Skipanalínan sýnir valkostina. |
| Horn í gráðum-mínútum-sekúndum, grönum eða stefnum mælingamanna | Sláðu inn tugabrot gráður: `30.5` fyrir 30°30'. |
| Gluggi fyrir sýnastjórnun; nefndar sýnir blaðs sem koma aftur á því blaði | {{cmd:NAMEDVIEW}} listar og endurheimtir sýnir. Vistuð skrá geymir þær, en sýnir blaðs koma aftur á fyrsta blaðinu. |

## Blöð, málsetningar og prentun

| Ekki enn smíðað | Í staðinn, í dag |
|---|---|
| Reitir fyrir mælikvarða glugga, nefndan hlut eins og lag eða blokk, tengil, og reiti blaðasetts umfram blaðnúmer og heiti; reitir skrifaðir sem reitahlutir sem önnur forrit uppfæra | {{cmd:FIELD}} hefur dagsetningu, skráarheiti, blaðnúmer, heiti og fjölda, eiginleika teikningarinnar ({{cmd:DWGPROPS}}), flatarmál, lengd og aðra eiginleika hlutar, og formúlur, í texta, eigindum og töflureitum. Annað forrit sýnir reit CadCraft sem þann texta sem það las síðast; CadCraft les dagsetningu, skráarheiti, eiginleika, blað og formúlureiti annarra forrita og skilur hina gerðirnar eftir sem texta. Mælikvarði glugga er sleginn inn handvirkt. |
| Vistun á því hvaða málsetningarstíll er virkur; málsetningartexti dreginn á laust svæði | Teikning opnast með Standard sem virkum stíl. Texti situr á málsetningarlínunni (DIMTEDIT Left / Right / Center). Sjá [Stilltu stærðir málsetninga](topic:dimension-settings). |
| Breytanlegar tvílínu hornmálsetningar úr opnuðum skrám sem CadCraft getur ekki reiknað út | Þær eru sýndar eins og þær eru teiknaðar í skránni. Ordinate-, bogalengdar- og brotnar radíusmálsetningar opnast sem málsetningar sem þú getur breytt. |
| Prófun CTB-lesarans á skrá úr öðru forriti (hann er smíðaður eftir birtri lýsingu), nefndir prentstílar (STB), punktaskygging, pennanúmer, grátónar úr CTB og aðlögun línugerðar í prentstíl | Gerðu töfluna í {{ui:Prentstílstöflur}} (litur, grátónn, blek, línuþykkt, línugerð, línuendi og tenging, og fyllingarstíll fyrir hvern lit): sjá [Prentstílstöflur](topic:plot-pdf#plot-style-tables). |
| Blaðastillingar | Veldu pappír, mælikvarða og prentstíl í glugganum {{ui:Prenta í PDF}}; blað heldur prentstíl sínum. |
| Hindí og önnur letur sem þurfa flókna mótun í PDF-skjölum, og sjaldgæf tákn (evrópsk letur, kýrillískt, grískt, hebreskt, arabískt, persneskt, úrdú, taílenskt, kínverskt, japanskt og kóreskt letur) | Þau prentast sem „?“. |
| Arabískt letur og kínverskur, japanskur eða kóreskur texti í sama prentaða PDF-skjali | Prentun notar eitt letur: annað letrið af þessum tveimur prentast sem „?“. |
| Skýr stefnumerki í texta (innfellingar, yfirskriftir, einangrunarmerki) | Þau eru hunsuð: hver lína er raðað eftir stöfum sínum einum. |
| Myndir inni í tengdri PDF-síðu, í prentun | Línur, fyllingar og texti síðunnar prentast. Síða sem er aðeins mynd fer inn með {{cmd:SCANATTACH}} og myndir prentast. Sjá [PDF-undirlög](topic:pdf-underlay#plot-and-save). |
| Senda verk í leysi úr CadCraft Studio (Studio hefur ekki Web Serial) | Vistaðu G-kóðann og sendu hann með eigin forriti leysisins, eða sendu hann úr Chrome eða Edge. Sjá [Senda teikningu í leysi](topic:laser-cutting#send-from-the-browser). |

## Þvinganir og breytur

| Ekki enn smíðað | Í staðinn, í dag |
|---|---|
| Þvinganir á blöðum, í blokkum, á sporbaugum, splænum eða texta | Þvingaðu á {{ui:Líkan}}-flipanum, á línum, fjöllínum, hringjum, bogum og punktum. |
| Slétt (G2), og bein þvingun á bungu bogans í fjöllínu | Snertill og jafn; bogahluti fylgir báðum endum sínum. |
| Viðmiðunar- (drifnar) víddarþvinganir, og `3Point` í {{cmd:DCANGULAR}} | Venjuleg málsetning (DIMLINEAR …) sýnir gildi án þess að stýra því. |
| Víddarþvinganir af föstri stærð á blaði, og prentun þeirra | Þær sjást aðeins á skjánum; bættu við venjulegum málsetningum fyrir prentun. |
| Þvinganir sem haldast í gegnum EXPLODE, BREAK, JOIN og aðrar skipanir sem búa til nýja hluti, og á styttum fjöllínum | Þvingaðu þá aftur (AUTOCONSTRAIN hjálpar). {{cmd:MIRROR}} og {{cmd:TRIM}} á línum, bogum og hringjum halda þeim. |
| Hönnunartöflur (stillingar) í CadCraft | Breyttu breytum í glugganum. |
| Prófuð hringferð með SolidWorks | Athugaðu skissuna sem fjölvinn býr til áður en þú treystir á hana. |

## 3D

| Ekki enn smíðað | Í staðinn, í dag |
|---|---|
| Ávöl horn, skáskurðir, skeljar og sveigðar form; sópun eftir slóð sem rís (3D-slóðir) | Dragðu útlínur út með bogum, ýttu og togaðu fleti, snúðu og sópaðu eftir láréttum slóðum. |
| Útdráttur í annarri átt en upp | Teiknaðu formið á jörðina og dragðu það upp eða niður (með halla eða eftir slóð ef þú vilt); snúðu föstu efninu á eftir. |
| Hæð og þykkt 2D-hluta | Teikningin liggur á jörðinni (hæð 0) á 3D-flipanum. |
| Breyting á föstum efnum, svæðum og líkömum úr öðrum forritum; sýning þeirra inni í blokkum; fletir þeirra á sópuðum, sveigðum eða öðrum frjálsum yfirborðum; fjölflatar og marghyrningsnet | Föst efni í líkanrými birtast á 3D-flipanum eins og þau eru og eru vistuð óbreytt aftur í DWG; það sem ekki er teiknað er talið upp þegar 3D-flipinn opnast. Biddu um net sem 3D-fleti í líkanrými. Sjá [Föst efni úr öðrum forritum](topic:3d-solids#solids-from-other-programs). |
| Afritun og líming fastra efna | Á 3D-flipanum, notaðu {{cmd:COPY}}. Klippiborðið geymir aðeins 2D-hluti. |
| Sniðmyndir, sýnir sem fylgja síðari breytingum á föstum efnum, og skyggð föst efni á prentuðum blöðum | {{cmd:VIEWBASE}} setur flatar sýnir (mynd á ákveðnu augnabliki); keyrðu það aftur eftir breytingar á föstu efnunum. |
| Efni, áferðir og lýsingarstillingar | Sjónrænu stílarnir: skyggt, brúnir, falin lína, grindarlíkan, röntgen. |
| Kortalög prentuð, á blaðagluggum og á 3D-flipanum; myndir úr skrám vistuðum með teikningunni; staðsetning teikningar skrifuð fyrir önnur forrit í DWG 2000–2007 og DXF R12 | Kortalög sjást undir líkanrýminu á skjánum; kerfið og lagalistinn eru vistuð með teikningunni: sjá [Kortalög undir teikningunni](topic:map-layers). |
| E57-skannanir yfir 6 milljónum punkta eða 512 MB, eigin skrár skannaframleiðenda (RCP, RCS, FLS, LGS, TZF, ZFS), punktaský vistað með teikningunni eða prentað, smellun á ský á 3D-flipanum, lóðréttar (snið) sneiðar á Líkan-flipanum | Fluttu út stórar skannanir eða skannanir framleiðenda sem LAS eða LAZ ([Punktskýjasnið](topic:point-cloud-formats)); festu skýið í hvert skipti sem þú opnar teikninguna; rektu línur eftir grunnsneið á Líkan-flipanum: sjá [Rektu útfærðar línur yfir punktský](topic:point-clouds). |
| Skráning skanna: að finna mörk (kúlur, skákborð) í skanna sjálfkrafa, leysa alla skanna saman (knippisjöfnun), kvarði, skráning gegn líkani | Veldu samsvarandi punkta eða sláðu inn hnit marka, og fínstilltu síðan einn skanna í einu með ICP: sjá [Skráðu marga skanna í einn](topic:register-scans). |

## Rútínur og sérsnið

| Ekki enn smíðað | Í staðinn, í dag |
|---|---|
| Þýtt eða varið LISP (.fas, .vlx), innfæddir forrit (.arx, .crx, .dbx) og VBA (.dvb) | Hlaðaðu `.lsp`-frumkóða rútínu með {{cmd:APPLOAD}}. |
| `grread` í LISP, hvatar (`vlr-…`), ferilföll (`vlax-curve-…`), orðabækur og framlengd gögn, `acet-…` í Express Tools | Restin af málinu keyrir: sjá [Keyra LISP-rútínur](topic:run-lisp). Skipanalínan nefnir fall sem vantar þegar rútína nær í það. |
| Myndir og skyggnur í glugga rútínu | Þær birtast sem auðir rammar; restin af glugganum virkar. |
| CraftScript (.craft), Lua og Python í CadCraft | Keyrðu þau í Script-vinnusvæði PartCraft. |
| Lista yfir lög, liti og línugerðir innan borðvalmyndarstíla | Notaðu {{ui:Lög}}-gluggann og {{ui:Eiginleikar}}. |
| Ræsipakkinn og tilbrigði (aliases) geymd á tölvunni þinni eða samstillt | Þau eru geymd í þessum vafra; skjáforritið og skýjaþjónustan geyma þau fyrir þig. Í Studio eru `acad.lsp` og `acaddoc.lsp` lesin úr stuðningsmöppu sem þú velur (Hlaða forritum). |

## Hjálp

Hjálpin lýsir þessari útgáfu. Þegar eitthvað bætist við færist það af þessari síðu og í leiðbeiningarnar.
