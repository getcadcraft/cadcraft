---
title: Dar neįgyvendinta
summary: Ko šios CadCraft braižymo programos versija dar nedaro ir ką šiandien daryti vietoj to.
keywords: trūksta, apribojimai, ctb, stb, spausdinimo stilius, ypatybės, ucs, anotacinis, dinaminis blokas, splainas, planai, nepalaikoma, dwg įrašymas, brūkšniuotė, tempti, masyvas, jungti, matchprop, nutraukti, pailginti, linijos tipas, linijos storis, xref, debesis, 3d, kietieji kūnai, būlio operacijos, daugiarodyklė nuoroda, išdengimas
from: 87e56521
---

CadCraft kuriamas. Šiame puslapyje išvardyta, ko dabartinė versija dar nedaro, kad to nereikėtų ieškoti. Kiekviename punkte nurodyta, ką daryti šiandien.

## Failai ir įrašymas

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| DWG failas, patikrintas pačiame AutoCAD | Kiekviena įrašyta versija perskaitoma trijų kitų programų DWG skaitikliais ir CadCraft. Žr. [Ką DWG išsaugo ir ką keičia](topic:files#what-a-dwg-keeps-and-changes). |
| DXF įrašymas naujesnis nei 2000 | Įrašykite kaip DXF 2000 arba kaip DWG iki AutoCAD 2018. |
| Įrašymas per atidarytą failą naršyklėje | Kiekvienas įrašymas atsisiunčia naują kopiją; jei norite, seną failą pakeiskite patys. CadCraft Studio programoje {{key:Mod+S}} įrašo atgal į atidarytą failą. |
| Įrašymas į debesį ir sinchronizavimas tarp kompiuterių | CadCraft dar nesiunčia įrašų į debesį: laikykite DWG ir DXF failus savo aplankuose. CadCraft Studio programoje [Istorija](topic:history) rodo brėžinio debesies versijas, įrašytas kitur, ir jūsų įrašų kopijas šiame kompiuteryje. |
| Perdangos ir susieto brėžinio redagavimas vietoje | Pridėkite brėžinį kaip nuorodą ir perkraukite jį, pakeitus kitą brėžinį. Nuoroda išlieka nuoroda, kai įrašote kaip DWG, o {{cmd:XCLIP}} ją iškerpa. |
| Paveikslėliai DXF faile; išdengimai, slepiantys tai, kas po jais | DXF išsaugo paveikslėlį kaip jo rėmelį su failo pavadinimu; DWG išsaugo jį kaip paveikslėlį – žr. [Paveikslėliai brėžinyje](topic:pictures). Išdengimas rodomas kaip savo rėmelis. |
| Daugiarodyklių nuorodų redagavimas su lenkta nuorodos linija, su nuorodų linijomis abiejose turinio pusėse arba su bloku, kuris pasuktas ar keičiamas nevienodu mastelio koeficientu | Jos nubraižomos taip, kaip nubraižė kita programa, ir juda kaip vienas objektas. Daugiarodyklės su tiesiomis nuorodos linijomis į vieną vietą ir tekstu ar bloku kaip turiniu tampa redaguojamos ({{cmd:MLEADEREDIT}}). |
| Kitų programų lentelės: langelis su bloku, teksto formatavimas langelyje, DXF lentelės langelių kraštinės ir spalvos, lentelė, suskaidyta į stulpelius | Lentelė atidaroma kaip redaguojama lentelė ({{cmd:TABLEDIT}}) ir rodoma taip, kaip ją nubraižė kita programa, kol ją redaguosite; tada CadCraft ją perbraižo pagal jos langelius: paprastas tekstas, formulės, pvz., `=G3*H3` ir `=Sum(I3:I9)`, lygiavimas ir teksto aukščiai. Bloko langelis tada tuščias. Nepakeista DWG lentelė įrašoma su tais langelių duomenimis, kuriuos turėjo. |
| Tikras lentelės objektas išsaugotame DXF faile | DWG išsaugo lentelę kaip lentelę, kurią kitos programos gali redaguoti. DXF išsaugo ją kaip bloką, kuris ją piešia, su CadCraft savo įrašu: CadCraft ją vėl atidaro kaip lentelę; kitos programos mato bloką. Veidrodiškai ar nevienodai pamasteliuota lentelė tokia pat išsaugoma ir DWG. |
| Kopijavimas ir įklijavimas su kitomis programomis | CadCraft iškarpinė veikia tarp CadCraft brėžinių ir kortelių toje pačioje naršyklėje, o ne su kitomis programomis. Įrašykite kaip DWG ar DXF ir atidarykite ją ten. Žr. [Kopijuoti, įklijuoti ir dubliuoti](topic:copy-paste). |

## Braižymas ir redagavimas

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Brūkšniuotės raštai, kurių CadCraft neturi, ir gradientinės užpildos, tiksliai taip, kaip jas piešia kitos programos | Atidarytos brūkšniuotės su raštais, kurių CadCraft neturi, rodomos kaip tonas. Gradientinė užpildas ({{cmd:GRADIENT}}) nupiešiama CadCraft savu būdu kiekvienam tipui: panašiai kaip kitų programų rūšimi, bet ne taškas po taško. DWG 2004 ir naujesnėse versijose ji išlieka tikra gradientine brūkšniuote; DXF 2000 ar DWG 2000 faile ją nuskaito tik CadCraft, o kitos programos mato vientisą užpildą. Raštai įkeliami iš `.pat` failo, o brūkšniuotę galima susieti su jos riba, ir ji seka tą ribą: žr. [Brūkšniuotė ir užpildomos sritys](topic:hatch). |
| Linijos tipai su figūromis ar tekstu ir linijų storiai išsaugotame DXF R12 | Figūros ir tekstas failo linijos tipe praleidžiami iš jo brūkšnių; įrašykite kaip DWG, kad išliktų linijų storiai. |
| Raštuotos brūkšniuotės išsaugotame DXF | R12 neturi brūkšniuočių: jos įrašomos kaip savo kontūrai. Įrašykite kaip DWG, kad išliktų raštas. |
| Masyvai, kuriuos padarė kita programa ar kuriuos galima redaguoti kitoje; eilutės ir lygiai kelio bei poliariniuose masyvuose; masyvas, sekantis savo kelio kreivę | Masyvas, sukurtas ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; keičiamas su {{cmd:ARRAYEDIT}}), išsaugomas kaip bloko nuoroda su CadCraft savo skaičiais: kitos programos jį rodo, perkelia, spausdina ir išskaido, bet negali keisti jo kiekių; kitoje programoje padarytas masyvas čia atidaromas kaip paprasta bloko nuoroda. Kelio masyvas išlaiko savo kelio kopiją: vėliau redaguojant kreivę elementai nejuda. |
| Iškerpami lapo rodinių langai į kitas programas ir iš jų | Rodinys, iškirptas su {{cmd:VPCLIP}} arba sukurtas su {{cmd:MVIEW}} Daugiakampis ar Objektas, išsaugomas su CadCraft savo kontūru: kitos programos jį atidaro kaip stačiakampį aplink jį, o kitoje programoje iškirptas rodinys čia atidaromas kaip savo stačiakampis. DXF R12 išlaiko tik stačiakampį. |
| {{cmd:STRETCH}} su kryžminiu daugiakampiu | Naudokite vieną ar daugiau kryžminių langų. |
| {{cmd:PEDIT}} Edit vertex (po vieną viršūnę komandinėje eilutėje) | Gripai ir viršūnių naršyklė Ypatybėse (kiekviena viršūnė, jos pločiai ir išlinkis). Likusi PEDIT dalis įgyvendinta: žr. [Splainai ir polilinijos](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} ir {{cmd:JOIN}} elipsėms ir splainams | {{cmd:EXPLODE}} splainą (arba {{cmd:PEDIT}} jį), kad gautumėte poliliniją, su kuria šios komandos veikia. |
| Suapvalinimas ir nuokapa tarp polilinijos lanko atkarpos ir gretimos atkarpos; suapvalinimas, jungiantis liniją į poliliniją | {{cmd:EXPLODE}} poliliniją, tada suapvalinkite gautas dalis. Suapvalinimo lankas pridedamas kaip savas objektas. |
| Apkirpimas ir pratęsimas: Projekcija (3D) pasirinkimas ir polilinijos lanko galo pratęsimas | Apkirpkite braižymo plokštumoje; lanko galui išskaidykite poliliniją arba nubraižykite lanką iš naujo. |
| OLE objektai: įterpimas, paleidimas ar redagavimas; DWG faile esančių objektų rodymas ten, kur failas juos padeda; metafailų paveikslėliai | Žr. [Paveikslėliai](topic:pictures#objects-from-other-programs-ole). DXF objektai rodomi kaip jų bitmap arba pažymėtas rėmelis; DWG objektai išlaikomi, bet ne nupiešiami vietoje ({{cmd:OLELIST}} juos išvardija ir pagal jūsų nurodymą įdeda paveikslėlio kopiją). |
| Formatavimo kodų rašymas (paryškinimas, sukrautos trupmenos, spalvos pagal žodį) pastraipos tekste; šriftai, kitokie nei vienas Helvetica tipo šriftas; stulpeliai | Formatavimas, atėjęs iš failo, išlaikomas, nupiešiamas ir įrašomas (žr. Tekstas); naujas pastraipos tekstas turi vieną aukštį ir spalvą. |
| Pastraipos tekstas, redaguojamas esant jo pasukimui | Redaktorius atsidaro lygus; tekstas išlaiko savo pasukimą. |
| Daugiarodyklės, išsaugotos DXF kaip daugiarodyklių objektai | DWG išlaiko jas kaip daugiarodykles, su kiekviena nuorodos linija ir bloku kaip turiniu; DXF išlaiko tai, ką jos nubraižo (linijas, rodyklių galus ir tekstą ar bloką). |
| Lentelėse ({{cmd:TABLE}}): tekstas, lūžtantis langelyje; lentelės, skylančios į dalis; lentelės stiliaus teksto stilius ir spalvos pagal eilutės rūšį dialoge; duomenų ryšys su skaičiuoklės failu (`.xlsx`) arba su failu, kuris pats nuskaito failą | Langelio tekstas lūžta tik ten, kur jį nulaužiate ({{key:Alt+Enter}}); išplatinkite stulpelį. {{cmd:DATALINK}} nuskaito `.csv` failą, o {{cmd:DATALINKUPDATE}} prašo vėl pasirinkti failą. {{cmd:DATAEXTRACTION}} ir {{cmd:COUNTTABLE}} sukuria lentelę, kuri pati neseka brėžinio: paleiskite iš naujo (gyvas skaičiavimas: {{cmd:BOMTABLE}}). |
| Atributų apibrėžimai, laikomi atskirai išsaugotame faile (ne bloke), daugiaeilučiai atributai | Prieš įrašydami įdėkite atributų apibrėžimus į bloką: atskirai jie įrašomi kaip tekstas, rodantis žymę. |
| Sluoksnių būsenos (įrašymas ir atkūrimas, kurie sluoksniai įjungti) | Naudokite {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, arba įjunkite ir išjunkite sluoksnius rankiniu būdu. |
| Lango daugiakampio ir kryžminio daugiakampio pasirinkimas bei išsaugoti pasirinkimo filtrai | Tvora (`F`), Langas (W), Kryžminis (C), Pašalinti (`R`), {{cmd:QSELECT}} pagal taisyklę. |


## Ypatybių skydelis

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Fit pasirinkimų nubraižymas ir horizontali teksto padėtis bei tekstas žemiau linijos matmenims, kurie nėra linijiniai ar lygiagretūs | Jie išlaikomi objekte, rodomi Ypatybėse ir įrašomi; CadCraft teksto padėtį nustato pagal savo taisyklę. |
| Medžiagos, kurias mato kitos programos | Įrašytas failas CadCraft išlaiko medžiagos pavadinimą; kitos programos rodo sluoksnio medžiagą. |
| Permatomumas DWG 2000 ir DXF failuose | Kitos programos tuos objektus rodo vientisus; CadCraft permatomumą išlaiko. Įrašykite kaip DWG 2004 ar vėlesnę, kad visi jį matytų. |
| Brūkšniuotės nuoroda, sukurta kitoje programoje | CadCraft įrašo savo nuorodą DWG ir DXF 2000 failuose; kitose programose sukurtos nuorodos neskaitomos. Naudokite `HATCHEDIT` ir Nuoroda: žr. [Brūkšniuotė ir užpildomos sritys](topic:hatch). |
| Koordinatės Ypatybėse UCS sistemoje | Ypatybėse rodomos pasaulio koordinatės; būsenos juosta ir {{cmd:ID}} rodo UCS koordinates. Žr. [Pasukite vaizdą ir naudokite savo koordinates](topic:ucs-and-turned-view). |
| Atskira anotacinio objekto padėtis kiekviename jo mastelyje; kitų programų saugomų mastelio įrašų skaitymas | Anotacinis tekstas ar matmuo išlaiko mastelių sąrašą ({{cmd:OBJECTSCALE}}), o kiekvienas rodinių langas jį rodo tokio dydžio, koks atitinka jo mastelį, toje pačioje vietoje. Sąrašas įrašomas kaip CadCraft savi duomenys: kita programa objektą mato tik viename mastelyje, kuriam jis pritaikytas, o kitoje programoje sudarytas sąrašas neskaitomas. Žr. [Vienetai, lapai ir masteliai](topic:units-papers-scales#annotate-by-scale). |
| Dinaminio bloko atstumų, kampų ar apvertimų keitimas; dinaminiai blokai, išlaikomi dinaminiais, kai įrašote kitoje DWG versijoje ar kaip DXF | Pakeiskite jo matomumo būseną Ypatybėse › {{ui:Pasirinktiniai}}; kitos jo reikšmės ten rodomos tik skaitomos. Jis išlieka dinamiškas, kai įrašote kaip DWG tos versijos, kuria atėjo brėžinys. Žr. [Dinaminiai blokai](topic:dynamic-blocks). |
| Splaino pritaikymo tolerancija, splaino laipsnis 6 ir aukštesnis, 3D splainai | Pritaikymo ir valdymo taškai, 1–5 laipsnio ir svoriai įgyvendinti: žr. [Splainai ir polilinijos](topic:splines). Splaino aukštis (Z) neišlaikomas. |

## Tikslumo pagalbinės priemonės

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Sekimas nuo taškų per komandas ir sekimo nustatymų dialogas (santykiniai poliariniai kampai, papildomi kampai) | {{cmd:POLARANG}} nustato žingsnį; kitoje komandoje vėl nurodykite taškus. |
| Piešimas prie tinklelio | Įveskite koordinates; tinklelis yra tik vizuali gairė. |
| Lanko ir Ilgio (L) pasirinkimai nurodant srities kampus bei MEASUREGEOM Tūris | Nubraižykite kontūrą su {{cmd:PLINE}} (įskaitant lankus), tada {{cmd:AREA}} `O`. |
| Dinaminis įvedimas gripams ir jo parinkčių sąrašas (rodyklė žemyn) | Komandinė eilutė rodo parinktis. |
| Kampai laipsniais, minutėmis ir sekundėmis, gradais ar geodezinėmis kryptimis | Įveskite dešimtainius laipsnius: `30.5` reiškia 30°30'. |
| Vaizdų tvarkyklės dialogas; lapo pavadinti vaizdai, grįžtantys į tą patį lapą | {{cmd:NAMEDVIEW}} išvardija ir atkuria vaizdus. Išsaugotas failas juos išlaiko, bet lapų vaizdai grįžta į pirmąjį lapą. |

## Lapai, matmenys ir spausdinimas

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Laukai rodinio mastelio, pavadinto objekto, pvz., sluoksnio ar bloko, nuorodos ir lapų rinkinio laukai, išskyrus lapo numerį ir pavadinimą; laukai, įrašyti kaip laukų objektai, kuriuos atnaujina kitos programos | {{cmd:FIELD}} turi datą, failo pavadinimą, lapo numerį, pavadinimą ir kiekį, brėžinio savybes ({{cmd:DWGPROPS}}), objekto plotą, ilgį ir kitas savybes bei formules tekste, atributuose ir lentelių langeliuose. Kita programa CadCraft lauką rodo kaip tekstą, kurį ji paskutinį kartą nuskaitė; CadCraft nuskaito kitos programos datos, failo pavadinimo, savybės, lapo ir išraiškos laukus, o kitokius palieka kaip tekstą. Rodinio mastelį įvedate ranka. |
| Dabartinio matmenų stiliaus įrašymas; matmenų tekstas, nutemptas į laisvą vietą | Brėžinys atsidaro su dabartiniu Standard stiliumi. Tekstas guli ant matmens linijos ({{cmd:DIMTEDIT}} Left / Right / Center). Žr. [Matmenų dydžių nustatymas](topic:dimension-settings). |
| Redaguojami dvieiliai kampiniai matmenys iš atidarytų failų, kurių CadCraft negali išspręsti | Jie rodomi taip, kaip nubraižyti faile. Ordinačių, lanko ilgio ir lūžtuoto spindulio matmenys atsidaro kaip redaguojami matmenys. |
| CTB skaitiklio tikrinimas su kitos programos failu (jis įgyvendintas pagal paskelbtą aprašą), pavadinti spausdinimo stiliai (STB), dither, rašiklių numeriai, pilkieji tonai iš CTB ir linijos tipo pritaikomasis koregavimas spausdinimo stiliuje | Sudarykite lentelę {{ui:Spausdinimo stiliaus lentelės}} (spalva, pilkis, tušas, linijos storis, linijos tipas, linijos galas ir jungtis bei užpildymo stilius kiekvienai spalvai): žr. [Spausdinimo stiliaus lentelės](topic:plot-pdf#plot-style-tables). |
| Lapo nustatymai | Pasirinkite popierių, mastelį ir spausdinimo stilių dialoge {{ui:Spausdinti į PDF}}; lapas išlaiko savo spausdinimo stilių. |
| Hindi ir kitos rašto sistemos, reikalaujančios sudėtingo formavimo PDF failuose, ir retos ideogramos (Europos rašmenys, kirilica, graikų, hebrajų, arabų, persų, urdu, tajų, kinų, japonų ir korėjiečių spausdinimas) | Jos spausdinamos kaip „?“. |
| Arabiško rašto ir kinų, japonų ar korėjiečių tekstas tame pačiame išspausdintame PDF | Spausdinys turi vieną šriftą: viena iš dviejų rašmenų sistemų spausdinama kaip „?“. |
| Aiškūs krypties žymekliai tekste (įterpimai, perrašymai, izoliacijos) | Jie ignoruojami: kiekviena eilutė tvarkoma tik pagal savo raides. |
| Paveikslėliai prijungto PDF puslapio viduje spausdinyje | Puslapio linijos, užpildai ir tekstas išspausdinami. Puslapis, kuris yra tik paveikslėlis, įdedamas su {{cmd:SCANATTACH}}, ir paveikslėliai spausdinami. Žr. [PDF pagrindai](topic:pdf-underlay#plot-and-save). |
| Darbo siuntimas lazeriui iš CadCraft Studio (Studio neturi Web Serial) | Įrašykite G-code ir siųskite jį su savo lazerio programa arba siųskite iš Chrome ar Edge. Žr. [Siųsti brėžinį lazeriui](topic:laser-cutting#send-from-the-browser). |

## Apribojimai ir parametrai

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Apribojimai lapuose, blokuose, elipsėse, splainuose ar tekste | Riškite skirtuke {{ui:Modelis}}, ant linijų, polilinijų, apskritimų, lankų ir taškų. |
| Sklandus (G2) ir tiesioginis polilinijos lanko išlinkio apribojimas | Liestinė ir lygi; lanko atkarpa seka savo dviem galais. |
| Nuorodiniai (valdomi) matmenų apribojimai ir `3Point` {{cmd:DCANGULAR}} | Paprastas matmuo (DIMLINEAR …) rodo reikšmę, bet jos nevaldo. |
| Fiksuoto dydžio matmenų apribojimai popieriuje ir jų spausdinimas | Jie rodomi tik ekrane; spausdinimui pridėkite paprastus matmenis. |
| Apribojimai, išlaikomi per EXPLODE, BREAK, JOIN ir kitas komandas, kurios kuria naujus objektus, bei ant apkirptų polilinijų | Nustatykite juos iš naujo (AUTOCONSTRAIN padeda). {{cmd:MIRROR}} ir {{cmd:TRIM}} linijoms, lankams ir apskritimams juos išlaiko. |
| Projektavimo lentelės (konfigūracijos) CadCraft | Keiskite parametrus skydelyje. |
| Išbandytas abipusis perdavimas su SolidWorks | Patikrinkite eskizą, kurį sukuria makrokomanda, prieš jį naudodami. |

## 3D

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Suapvalinimai, nuokapos, kevalai ir perėjimai (loft); išvedimai išilgai kylančio kelio (3D keliai) | Ištraukite kontūrus su lankais, stumkite ir traukite paviršius, apsukite ir išvedkite išilgai plokščių kelių. |
| Ištraukimas kita kryptimi nei aukštyn | Nubraižykite formą ant žemės ir ištraukite ją aukštyn ar žemyn (su nuolydžiu arba išilgai kelio, jei norite); vėliau pasukite kietąjį kūną. |
| 2D objektų aukštis ir storis | Brėžinys guli ant žemės (aukštis 0) 3D skirtuke. |
| Kitų programų kietųjų kūnų, sričių ir korpusų redagavimas; jų rodymas blokuose; jų paviršiai ant išvestinių, perėjimo ar kitų laisvos formos paviršių; daugiapaviršiai ir daugiakampiai tinklai | Modelio erdvės kietieji kūnai 3D skirtuke rodomi kaip yra ir DWG išsaugomi nepakeisti; tai, kas nenubraižyta, išvardijama atidarant 3D skirtuką. Prašykite tinklų kaip 3D paviršių modelio erdvėje. Žr. [Kietieji kūnai iš kitų programų](topic:3d-solids#solids-from-other-programs). |
| Kietųjų kūnų kopijavimas ir įklijavimas | 3D skirtuke naudokite {{cmd:COPY}}. Iškarpinėje yra tik 2D objektai. |
| Pjūviai, vaizdai, kurie seka vėlesnius kietųjų kūnų pakeitimus, ir šešėliuoti kietieji kūnai išspausdintuose lapuose | {{cmd:VIEWBASE}} sudaro plokščius vaizdus (momentinę nuotrauką); paleiskite jį iš naujo pakeitus kietuosius kūnus. |
| Medžiagos, tekstūros ir apšvietimo nustatymai | Vaizdo stiliai: šešėliuotas, kraštinės, paslėpta linija, karkasas, X-ray. |
| Žemėlapio sluoksniai, spausdinami, lapų rodinių languose ir 3D skirtuke; paveikslėliai iš failų, įrašytų kartu su brėžiniu; brėžinio vieta, įrašoma kitoms programoms DWG 2000–2007 ir DXF R12 | Žemėlapio sluoksniai rodomi po modelio erdve ekrane; sistema ir sluoksnių sąrašas įrašomi kartu su brėžiniu: žr. [Žemėlapio sluoksniai po brėžiniu](topic:map-layers) |
| E57 skenavimai, viršijantys 6 milijonus taškų ar 512 MB, skenerių gamintojų failai (RCP, RCS, FLS, LGS, TZF, ZFS), taškų debesis, įrašytas kartu su brėžiniu ar spausdinamas, piešimas prie debesies 3D skirtuke, statūs (pjūvio) pjūviai skirtuke Modelis | Dideles ar gamintojų skenavimus eksportuokite kaip LAS ar LAZ ([Taškų debesies formatai](topic:point-cloud-formats)); debesį prijunkite kiekvieną kartą atidarydami brėžinį; faktinės būklės linijas braižykite iš plano pjūvio skirtuke Modelis: žr. [Sekite faktinės būklės linijas per taškų debesį](topic:point-clouds) |
| Skenavimų sulyginimas: taikinių (sferų, šachmatinių lentų) paieška skenavime savaime, visų skenavimų sprendimas kartu (ryšulio koregavimas), mastelis, sulyginimas su modeliu | Pasirinkite atitinkančius taškus ar įveskite taikinių koordinates, tada tikslinkite po vieną skenavimą su ICP: žr. [Sujunkite kelis skenavimus į vieną](topic:register-scans) |

## Rutinos ir pritaikymas

| Dar neįgyvendinta | Vietoj to, šiandien |
|---|---|
| Sukompiliuotas ar apsaugotas LISP (.fas, .vlx), vietinės programos (.arx, .crx, .dbx) ir VBA (.dvb) | Įkelkite rutinos `.lsp` šaltinį su {{cmd:APPLOAD}}. |
| LISP `grread`, reaktoriai (`vlr-…`), kreivių funkcijos (`vlax-curve-…`), žodynai ir išplėstiniai duomenys, Express Tools `acet-…` | Likusi kalba veikia: žr. [Paleiskite LISP rutinas](topic:run-lisp). Komandinė eilutė nurodo trūkstamą funkciją, kai rutina į ją kreipiasi. |
| Paveikslėliai ir skaidrės rutinos dialoge | Jie rodomi kaip tušti rėmeliai; likęs dialogas veikia. |
| CraftScript (.craft), Lua ir Python CadCraft | Paleiskite juos PartCraft Script darbo srityje. |
| Sluoksnių, spalvų ir linijos tipų sąrašai juostos meniu stiliuose | Naudokite {{ui:Sluoksniai}} skydelį ir {{ui:Ypatybės}}. |
| Startup Suite ir pseudonimai, saugomi jūsų kompiuteryje ar sinchronizuojami | Jie saugomi šioje naršyklėje; darbalaukio programa ir debesies paslauga juos saugos už jus. Studio programoje `acad.lsp` ir `acaddoc.lsp` skaitomi iš palaikymo aplanko, kurį pasirenkate (Įkelti programas). |

## Žinynas

Žinynas aprašo šią versiją. Kai kas nors pridedama, tai iškeliama iš šio puslapio į vadovus.
