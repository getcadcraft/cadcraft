---
title: Komandų žemėlapis: ką įvesti
summary: Visos CadCraft komandos su trumpaisiais pavadinimais, nuo A iki Z, sudarytos pačios programos, ir įpročiai iš kitų brėžimo programų, kurie skiriasi.
keywords: komandų žemėlapis, komandos, pseudonimai, trumpieji pavadinimai, atėjus iš, komandų sąrašas, ką įvesti, ištrinti, apkirpti, lygiavertis, skirtumai
from: 3bdfd3e6
---

CadCraft priima komandų pavadinimus ir trumpuosius pavadinimus, kuriuos žmonės žino iš kitų brėžimo programų: įveskite `L` linijai, `TR` apkirpti, `E` ištrinti. Todėl daugumai jų nereikia mokytis atitikmenų lentelės: pavadinimas, kurį jau žinote, čia tas pats. Toliau pateiktas sąrašas – visos CadCraft komandos, sudarytos pačios programos. {{key:Enter}} pakartoja paskutinę komandą; `HELP` komandų eilutėje išveda tą patį sąrašą.

Keletas, kurios nesutampa arba dar neįgyvendintos:

- **Įrašyti** naršyklėje atsisiunčia kopiją ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio programoje įrašo failą. Žr. [Atėjus iš kitos brėžimo programinės įrangos](topic:coming-from).
- **PLOT** sukuria PDF (taip pat PNG ir SVG) su spausdinimo stilių lentele; puslapio nustatymų tvarkyklės nėra.
- **DIMSTYLE** ir **PEDIT** įgyvendintos; **PEDIT** neturi Redaguoti viršūnę parinkties (tai atlieka valdymo rankenėlės).
- **TABLE** neįgyvendinta; {{cmd:XREF}}, {{cmd:SPLINE}} ir {{cmd:WBLOCK}} – įgyvendintos.
- Rutinos savosios komandos (AutoLISP `C:NAME`) atsiranda įkėlus ją su {{cmd:APPLOAD}}; čia jos neišvardytos.

## Visos komandos (398)

| Komanda | Trumpieji pavadinimai | Ką daro |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Sukti 3D vaizdą kairiuoju pelės mygtuku |
| `ACCESS` | `AX` | Įjungti arba išjungti braižymą be regos: rezultatai sakomi per ekrano skaitytuvą, žymeklis brėžinyje valdomas klaviatūra, įgarsinamas pritraukimas ir balsu ištariamos komandos. |
| `ALIASEDIT` |  | Redaguoti komandų pseudonimus viename teksto faile (įprastas formatas: L, *LINE) |
| `ALIGN` | `AL` | Perkelti ir pasukti objektus taip, kad šaltinio taškai atsidurtų paskirties taškuose (viena, dvi ar trys poros), ir, jei norite, pakeisti jų mastelį |
| `ALIGNPANEL` | `ALP` | Atverti Lygiavimo ir paskirstymo skydelį |
| `ALIGNTO` |  | Lygiuoti pasirinktų objektų kairiuosius, centro, dešiniuosius, viršutinius, vidurio ar apatinius kraštus pagal pasirinkimą, pirmąjį ar paskutinį pasirinktą objektą arba tašką |
| `ANNOALLVISIBLE` | `ANNOALL` | Rodyti anotacinius objektus visuose mastelių lygiuose arba tik ten, kur vaizdo prievado (ar brėžinio) mastelis yra jų sąraše |
| `ANNOSCALE` | `CANNOSCALE` | Nustatyti brėžinio anotacijos mastelį: anotacinis tekstas ir matmenys keičiami taip, kad atspausdinti būtų to paties dydžio |
| `APPLOAD` | `AP` | Įkelti programas: LISP rutinas (.lsp) ir jų dialogų failus (.dcl); paleidimo rinkinys (AP) |
| `ARC` | `A` | Lankas: 3 taškai, Pradžia/Centras/Pabaiga, Pradžia/Centras/Kampas, Pradžia/Centras/Ilgis, Pradžia/Galas/Kampas, Pradžia/Galas/Kryptis, Pradžia/Galas/Spindulys, Centras/Pradžia/Pabaiga, Centras/Pradžia/Kampas, Centras/Pradžia/Ilgis, Tęsti |
| `AREA` | `AA` | Plotas ir perimetras pagal taškus arba objekto; Pridėti ir Atimti kaupia bendrą sumą (AA) |
| `ARRAY` | `AR` | Kopijos eilėmis ir stulpeliais arba apie centrą (AR) |
| `ARRAYASSOCIATIVITY` |  | Nustato, ar ARRAY komandos sukuria masyvus, kuriuos galima toliau redaguoti (1), ar paprastas kopijas (0) |
| `ARRAYCLOSE` |  | Baigia redaguoti masyvo pradinius objektus |
| `ARRAYEDIT` |  | Keičia masyvą, sukurtą su Asociatyvia parinktimi: kiekius, atstumus, pradinius objektus, vieną elementą |
| `ARRAYPATH` |  | Objektų kopijos išilgai tiesės, lanko, polilinijos ar kitos kreivės |
| `ARRAYPOLAR` |  | Kopijos apie centro tašką |
| `ARRAYRECT` |  | Kopijos eilėmis ir stulpeliais |
| `ASBUILT` | `ASB` | ASBUILT nuskaito brigados išmatuotus tikrus taškus (CSV / TXT, kaip rašo EXPORTPOINTS) ir palygina juos su brėžinio taškais: patenka ar nepatenka į toleranciją, neišmatuoti, papildomi. Pažymi juos sluoksnyje AS-BUILT ir atsisiunčia CSV ataskaitą. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Apibrėžti atributą (žymę, kurios blokas prašo reikšmės), kurį įdėti į bloką (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Redaguoti bloko nuorodos atributų reikšmes komandų eilutėje, vieną po kito (Enter palieka reikšmę) |
| `ATTSYNC` |  | Suderinti bloko nuorodas su jo atributų apibrėžimais: nauji pridedami su numatytosiomis reikšmėmis, pašalinti išmetami, pozicijos ir tekstas atstatomi; reikšmės išsaugomos |
| `AUDIT` |  | Patikrina atidarytą brėžinį dėl pažeidimų: ne baigtinių skaičių, objektų be dydžio, trūkstamų sluoksnių, blokų, stilių ir linijų tipų, blokų, kurie talpina patys save, bendrų id, sugadintų matmenų ir brūkšniavimų. Surašo, ką rado, pagal rūšį ir klausia prieš taisant; taisymas – vienas Anuliuoti žingsnis. |
| `AUNITS` | `ANGUNITS` | Kaip rodomi ir įvedami kampai: dešimtainiai laipsniai, laipsniai-minutės-sekundės arba kryptys, pavyzdžiui, N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Brėžinio automatinis užbaigimas įjungtas arba išjungtas, arba išvardyti, ką brėžinio šablonai siūlo dabar. |
| `AUTOCONSTRAIN` |  | Pridėti sutapimo, horizontalius ir vertikalius ribojimus ten, kur geometrija jau artima |
| `AUTODIM` | `ADIM` | Matuoti pagal taisykles: bendrieji matmenys, grandinės palei kraštus, angos, skylių skersmenys ir tinklelio žingsnis, nekartojant to, kas jau pamatuota. |
| `AUTOSHEET` | `ASH` | Išdėsto lapus savaime: parenka popierių ir standartinius mastelius bei patalpina kiekvieną vaizdą su antrašte ir titulinio lapo bloku. |
| `BATTMAN` |  | Blokų atributų tvarkyklė: bloko atributų tvarka, žymos, raginimai, numatytosios reikšmės ir režimai, tada atnaujinamos jo nuorodos |
| `BCLOSE` |  | Uždaryti bloko redaktorių: išsaugoti bloką arba atmesti pakeitimus |
| `BCONVERT` |  | BCONVERT randa pasikartojančią geometriją ir paverčia ją bloko nuorodomis. Pasirinkite pasikartojančius objektus: randamas kiekvienas kitas objektų rinkinys atvirojoje erdvėje, kuris yra ta pati geometrija, perkeltas ir pasuktas bet kokiu kampu; su įjungtais Veidrodiniu ar Keičiant mastelį randami ir veidrodiniai vaizdai bei kopijos kitu dydžiu. Suteikite naujam blokui pavadinimą ir bazinį tašką; pasirinkimas ir kiekviena kopija tampa nuorodomis į jį, kiekviena su savo pasukimu ir mastelio. Arba pasirinkite Blokas ir nurodykite esamo bloko pavadinimą, kad rastumėte jo objektų laisvas kopijas. Kopija turi turėti tą patį sluoksnį, spalvą, linijos tipą ir linijos storį, nebent Savybės nustatytos į Ignoruoti. Objektai užrakintuose sluoksniuose paliekami nepaliesti. Vienas Anuliuoti žingsnis. |
| `BEDIT` | `BE` | Bloko redaktorius: redaguoti bloko objektus ir atributus; BCLOSE išsaugo (BE) |
| `BLEND` |  | BLEND: kreivė tarp dviejų atvirų kreivių galų, pasirenkamų arti galų, kad susijungtų. Tolydumas: Liestinė seka abi kryptis, Glotnus seka ir jų lenkimą. |
| `BLOCK` | `B`, `BMAKE` | Sudaryti bloką iš objektų (jie tampa viena nuoroda) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: kiekviena vieno bloko nuoroda tampa kito bloko nuoroda toje pačioje vietoje, su tuo pačiu mastelių ir pasukimu. Bendrų abiejuose blokuose atributų reikšmės išsaugomos. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE rodo Blokų skydelį su žymekliu jo filtre. Skydelis rodo kiekvieno bloko paveikslėlį (naujausiai įdėti pirmiausia), sąrašu ar tinkleliu; spustelėkite paveikslėlį arba nuvilkite jį į brėžinį, kad įdėtumėte bloką su INSERT. Bibliotekose pridėkite savo DWG ar DXF failą: jo blokai išvardijami su paveikslėliais ir nukopijuojami į šį brėžinį, kai įdedate vieną iš jų. CadCraft Studio programoje galima pridėti ir brėžinių aplanką; failai ir aplankai prisimenami. |
| `BOMEDIT` | `BOMCOLUMNS` | Medžiagų sąrašo lentelės stulpeliai, grupavimas, rūšiavimas, antraštė, sumos ir pastabos |
| `BOMEXPORT` |  | Išsaugoti medžiagų sąrašo lentelę kaip .csv failą |
| `BOMTABLE` | `BOM` | Gyva medžiagų sąrašo lentelė vienai zonai arba visam brėžiniui |
| `BOMUPDATE` |  | Atnaujinti visas medžiagų sąrašo lenteles dabar, net ir užšaldytas |
| `BOMZONE` | `BZONE` | Pavadinta brėžinio sritis medžiagų sąrašui: du kampai, daugiakampis arba uždaro objekto kontūras |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): pasirinkite tašką uždaros srities viduje ir gaukite uždarą polilinija aplink ją. Lankai lieka lankais. Salos apibrėžia ir srityse viduje esančias sritis. |
| `BOX` |  | Dėžė: du kampai ir aukštis (3D) |
| `BPARAMETER` | `BPARAM` | Dar neįgyvendinta: parametro (pavyzdžiui, Matomumas) pridėjimas prie bloko. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Bloko parametrai: pavadinti parametrai su formulėmis ir keli matomumo parametrai viename bloke. Veikia bloko redaktoriuje (pasirinktus objektus priskirti būsenai) ir pasirinktoje nuorodoje (jos pačios reikšmės ir būsenos). |
| `BREAK` | `BR` | Nutraukti tiesę, lanką, apskritimą ar polilinija tarp dviejų taškų (BR) |
| `BREAKATPOINT` |  | Padalyti tiesę, lanką ar polilinija į dvi dalis taške |
| `BREAKLINE` |  | Nubrėžti tiesę su nutraukimo ženklu; jos dydis ir išplėtimas už galų prisimenami. |
| `BREPLACE` |  | BREPLACE pakeičia vieną bloką kitu. Pasirinkta: pasirinkite bloko nuorodas ir nurodykite bloką, kurį naudoti vietoj. Visi: nurodykite bloką ir jo pakaitalą, ir kiekviena nuoroda visose erdvėse bei kituose blokuose pasikeičia. Nuoroda išlaiko savo vietą, mastelį, pasukimą ir sluoksnį bei bendrų abiejų blokų atributų reikšmes; reikšmės, kurių naujasis blokas neturi kur dėti, išmetamos ir įvardijamos. |
| `BSEARCH` |  | BSEARCH randa blokus. Pavadinimas: dalis bloko pavadinimo arba šablonas su * ir ?. Atributas: reikšmė (arba TAG=reikšmė), turima nuorodos atributuose. Geometrija: pasirinkite objektus arba vieną bloko nuorodą, ir sąraše, geriausi pirmiau, išvardijami blokai, kurių forma panaši bent 85 %; dydis, pasukimas ir veidrodinis atspindys neskaičiuojami. Atvirojoje erdvėje rastos nuorodos pažymimos, paruoštos kitai komandai. |
| `BURST` |  | Išskaidyti bloko nuorodas ir išsaugoti tai, ką sako jų atributai: kiekviena reikšmė tampa tekstu atributo sluoksnyje. |
| `BVHIDE` | `BVH` | Bloko redaktoriuje: paslėpti objektus dabartinėje matomumo būsenoje. |
| `BVSHOW` | `BVSH` | Bloko redaktoriuje: rodyti objektus, kuriuos dabartinė matomumo būsena slepia (jie rodomi išblukę, kad galima būtų pasirinkti). |
| `BVSTATE` | `BVS` | Bloko redaktoriuje, bloke su matomumo būsenomis: perjungti į būseną arba pridėti, pervardyti ar ištrinti vieną. |
| `CAL` |  | Apskaičiuoti ilgį ar skaičių: + − * / ir skliaustai, įvedami bet kur |
| `CENTERLINE` | `CL` | Centrinė linija tarp dviejų tiesių: vidury tarp jų arba išilgai bisektrisės, kai jos susikerta (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Centro žymė: kryžius apskritimo ar lanko centre su centrinėmis linijomis, išeinančiomis šiek tiek už jo (CM) |
| `CHAMFER` | `CHA` | Nupjauti kampą tarp dviejų tiesių (D – du atstumai, A – ilgis ir kampas, P – kiekvienas polilinijos kampas) |
| `CHSPACE` |  | CHSPACE: perkelti objektus tarp lapo ir modelio per vaizdo prievadą. Jie keičia mastelį ir pasukami, kad iš kitos pusės atrodytų taip pat. Lape jie patenka į modelį; dirbant per vaizdo prievadą (MSPACE) jie patenka į lapą. |
| `CIRCLE` | `C` | Centras ir spindulys, skersmuo, 2 ar 3 taškai |
| `CLASS` |  | Įdėti pasirinktus objektus į klasę arba, nieko nepasirinkus, nustatyti aktyvią klasę (? išvardija jas) |
| `CLASSES` | `CLS` | Klasių skydelis: klasės rūšiuoja objektus per sluoksnius; rodyti, slėpti ir stilizuoti jas bei perrašyti kiekviename vaizdo prievade (CLS) |
| `COMMANDLINE` | `CMDLINE` | Prijungti arba atplėšti komandų eilutę, padaryti ją viena eilute, nustatyti jos istorijos eilutes arba atverti istoriją (F2) |
| `COMPARESETTINGS` | `CMPSET` | Palyginti matmenų stilius, teksto stilius, sluoksnius, lapus ar vienetus: du šiame brėžinyje arba šį brėžinį su kitu atidarytu, ir nukopijuoti reikšmę per. |
| `CONSTRAINTBAR` | `CBAR` | Rodyti arba slėpti ribojimų juostas (Rodyti visas / Slėpti visas, arba pagal objektą) |
| `COPY` | `CO`, `CP` | Kopijuoti objektus tiek kartų, kiek spustelite |
| `COPYBASE` |  | Kopijuoti objektus į iškarpinę su jūsų pasirinktu bazės tašku |
| `COPYCLIP` |  | Kopijuoti objektus į iškarpinę (Ctrl+C); PASTECLIP įdeda juos |
| `COUNT` | `BCOUNT` | Suskaičiuoti bloko nuorodas: pasirinkite vieną, kad pažymėtumėte ir suskaičiuotumėte visas jo bloko nuorodas |
| `COUNTTABLE` |  | Įdėti bloko kiekių lentelę |
| `CREDITS` |  | Įdeda bibliotekos autorystės lentelę į brėžinį. Paleiskite dar kartą, kad lentelė atsinaujintų pagal dabartinius brėžinio elementus. |
| `CURSORSIZE` |  | Kryžminio žymeklio dydis: 100 nutiesia jį per visą brėžinį nuo krašto iki krašto (Parametrai › Žymeklis › Visas ekranas) |
| `CUTCLIP` |  | Iškirpti objektus į iškarpinę (Ctrl+X): nukopijuoti, tada ištrinti |
| `CYLINDER` | `CYL` | Cilindras: centras, spindulys ir aukštis (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Išvardyti blokus, jų atributus ir objektų savybes kaip lentelę brėžinyje arba CSV faile |
| `DATALINK` | `DL` | Lentelė iš CSV failo, kuri prisimena failą, kad jį būtų galima vėl nuskaityti |
| `DATALINKUPDATE` | `DLU` | Vėl nuskaityti duomenų ryšio failą ir papildyti jo lenteles |
| `DCALIGNED` | `DCALI` | Matmenų ribojimas: tikras atstumas tarp taškų, taško ir tiesės arba dviejų tiesių |
| `DCANGULAR` | `DCANG` | Matmenų ribojimas: kampas tarp dviejų tiesių arba lanko |
| `DCCONVERT` |  | Paversti matmenis, nubrėžtus ant ribojamos geometrijos, matmenų ribojimais |
| `DCDIAMETER` | `DCDIA` | Matmenų ribojimas: apskritimo ar lanko skersmuo |
| `DCDISPLAY` |  | Rodyti arba slėpti matmenų ribojimus brėžinyje |
| `DCHORIZONTAL` | `DCHOR` | Matmenų ribojimas: horizontalus atstumas |
| `DCLINEAR` | `DCLIN` | Matmenų ribojimas: horizontalus arba vertikalus atstumas nuo vietos, kur jį padedate |
| `DCRADIUS` | `DCRAD` | Matmenų ribojimas: apskritimo ar lanko spindulys |
| `DCVERTICAL` | `DCVER` | Matmenų ribojimas: vertikalus atstumas |
| `DELBLOCKS` |  | Ištrinti blokus: kiekvieną nuorodą (ir įdėtąsias, kiekviename lape) bei apibrėžimus |
| `DELCONSTRAINT` | `DELCON` | Pašalinti kiekvieną ribojimą (geometrinį ir matmenų) iš pasirinktų objektų |
| `DELOPENING` |  | Išimti duris ar langą iš sienos. |
| `DESCRIBE` | `DESC` | Pasakyti, ką turi brėžinys: kiek objektų, kokių, koks didelis, kas pasirinkta. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Panaikinti pasirinkimą (Esc) |
| `DETAILS` | `DET` | Jūsų įmonės savos detalės, surastos pagal tai, ką braižote: ieškoti, pridėti bloką, išvardyti, pašalinti, įjungti arba išjungti pasiūlymus. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Nubraižyti diagramą iš teksto: Mermaid srautų schemą, PlantUML komponentų diagramą, D2, sąrašą nuo–iki arba draw.io XML kaip redaguojamus blokus ir jungtis |
| `DIMALIGNED` | `DAL`, `DIMALI` | Tikras atstumas tarp dviejų taškų |
| `DIMANGULAR` | `DAN`, `DIMANG` | Kampas tarp dviejų tiesių, lanko arba pagal tris taškus |
| `DIMARC` | `DAR` | Lanko ilgio matmuo: atstumas palei lanką su lanko ženklu (DAR) |
| `DIMASZ` |  | Matmenų nustatymas: rodyklės dydis |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Matmenys, sudėti nuo vienos bazinės linijos |
| `DIMBREAK` | `DBREAK` | Nutraukti matmenų ir pratęsimo linijas, kur jos kerta kitus objektus (Auto), tarp dviejų taškų (Rankinis) arba pašalinti nutraukimus |
| `DIMCONSTRAINT` | `DCON` | Matmenų ribojimai: tiesiniai, lygiagretūs, kampiniai, spindulys, skersmuo, konvertavimas |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Matmenų grandinė, kiekvienas nuo paskutinio galo |
| `DIMDEC` |  | Matmenų nustatymas: skaitmenų po kablelio skaičius |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Lanko ar apskritimo skersmuo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Atlaisvinti matmenis nuo objektų, prie kurių jie pririšti (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Keisti matmenų tekstą (Pradžia, Naujas tekstas, Pasukti) arba įstrižai pasvirti pratęsimo linijas (Įstrižai) |
| `DIMEXE` |  | Matmenų nustatymas: pratęsimas už matmenų linijos |
| `DIMEXO` |  | Matmenų nustatymas: poslinkis nuo pradžios taško |
| `DIMGAP` |  | Matmenų nustatymas: tarpas aplink tekstą |
| `DIMINSPECT` |  | Patikros matmuo: rėmelis aplink reikšmę su etikete ir tuo, kaip dažnai detalė tikrinama |
| `DIMJOGGED` | `DJO`, `JOG` | Lūžusio spindulio matmuo: spindulys nubrėžiamas nuo artimesnio taško, kai centras toli (DJO) |
| `DIMJOGLINE` | `DJL` | Pridėti lūžio ženklą prie tiesinės ar lygiagrečios matmenų linijos, rodant, kad atstumas nepieštas mastelyje (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontalus arba vertikalus atstumas (R – bet kuriam kampui) |
| `DIMLUNIT` |  | Matmenų nustatymas: ilgio formatas (1 mokslinis, 2 dešimtainis, 3 inžinerinis, 4 architektūrinis, 5 trupmeninis) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinatės matmuo: X ar Y atstumas nuo taško iki UCS pradžios, su nukreipiamąja linija (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Perrašyti matmenų kintamuosius pasirinktuose matmenyse nekeičiant jų stiliaus; Išvalyti grąžina stilių (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Lanko ar apskritimo spindulys |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Pririšti matmens taškus prie objektų, kad jis sektų ir vėl matuotų, kai jie pasislenka (DRE) |
| `DIMSCALE` |  | Matmenų nustatymas: bendras mastelis (dydžiai × šis) |
| `DIMSPACE` |  | Lygus tarpas tarp lygiagrečių matmenų, matuojamas nuo bazinio matmens (0 sulygiuoja juos, Auto yra dvigubas teksto aukštis) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Kurti, keisti, nustatyti dabartinį, ištrinti, taikyti ir lyginti pavadintus matmenų stilius (dialogas; komandų eilutėje -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | Perkelti matmenų tekstą į kairę, dešinę ar į matmens linijos centrą arba jį pasukti |
| `DIMTEXTUNIT` | `DTU` | Matmenų tekstas mm, cm, m ar km arba brėžinio paties vienetais: pasirinkti matmenys, kitu atveju nauji (DTU) |
| `DIMTXT` |  | Matmenų nustatymas: teksto aukštis |
| `DIST` | `DI` | Atstumas ir kampas tarp dviejų taškų |
| `DISTRIBUTE` |  | Tolygiai išdėstyti pasirinktus objektus iš šono į šoną arba aukštyn ir žemyn: vienodi žingsniai tarp centrų arba vienodi tarpai; du išoriniai lieka vietoje |
| `DIVIDE` | `DIV` | DIVIDE (DIV): žymės, dalijančios tiesę, lanką, apskritimą, polilinija, kreivę ar elipsę į lygias dalis. Taškai arba, su Bloku, blokas kiekvienoje žymėje. |
| `DOCUMENTS` | `DOCS` | Atverti Dokumentų skydelį: išimti ir grąžinti brėžinius, peržiūras, leidimo būsenas ir patvirtinimą projekto aplankui |
| `DOOR` | `DR` | Įdėti duris į sieną. Pusė, kurią spustelite, yra ta, į kurią jos atsidarys. |
| `DRAWORDER` |  | Pakeisti piešimo tvarką: nukelti objektus į priekį, į galą arba virš ar po kitais objektais. |
| `DUPLICATE` | `DUP` | Kopija, judanti kartu su žymekliu: spustelėkite, kad padėtumėte (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Brėžinio savybės: pavadinimas, autorius ir kita, bei jūsų pačių pavadinimų ir reikšmių poros |
| `DXFOUT` |  | Atsisiųsti brėžinį kaip DXF R12 (Įrašyti išlaiko savo formatą) |
| `EATTEDIT` | `DDATTE` | Redaguoti bloko nuorodos atributus: reikšmes, tekstą ir savybes, po vieną atributą |
| `ELLIPSE` | `EL` | Ašių galiniai taškai ir kita pusašė |
| `ERASE` | `E`, `DELETE` | Pašalinti objektus |
| `EXPLODE` | `X` | Suskaidyti polilinijas, blokus ir matmenis į dalis |
| `EXPORT` | `EXP` | Išsaugoti brėžinio kopiją failo tipu, kurį rašo priedas |
| `EXPORT3D` | `3DEXPORT` | Eksportuoti 3D modelį: GLB, OBJ arba STL |
| `EXPORTPOINTS` | `EXPPTS` | Įrašyti taškus, o blokų įterpimo taškus su vienu atributu kaip aprašymu, į CSV arba TXT failą (PNEZD, PENZD arba XYZ) BIM ir matavimo programoms |
| `EXTEND` | `EX` | Pailginti objektus iki kitų: spustelėkite arti galo, vilkite per kelis arba Shift+spragtelėkite, kad apkirptumėte |
| `EXTRIM` |  | EXTRIM: pasirinkite vieną pjovimo kraštą, tada pusę. Viskas, kas kerta kraštą, bus apkirpta toje pusėje. Gabalai, kurie būtų pašalinti, rodomi judinant žymeklį. |
| `EXTRUDE` | `EXT` | Ištempti uždarus 2D objektus į kietuosius kūnus (3D) |
| `FIELD` |  | Įdėti lauką į tekstą, lentelės langelį ar atributą: data, failo pavadinimas, lapo numeris, brėžinio savybė, objekto plotas ar ilgis arba formulė |
| `FILLET` | `F` | Suapvalinti arba padaryti kampą kvadratinį tarp dviejų objektų (R – spindulys, P – kiekvienas polilinijos kampas, M – keli) |
| `FIND` |  | Rasti ir pakeisti žodžius tekste, atributų reikšmėse ir matmenų tekste |
| `FLATTEN` |  | Nustatyti pasirinktų objektų aukštį (Z) ir storį į 0, taip pat blokuose, kuriuos jie naudoja. |
| `FLOOR` |  | Pasirinkti aukštą, kuriame braižyti, pridėti naują arba perkelti ar kopijuoti pasirinkimą į jį. |
| `FLOORLAYERS` |  | Paversti aukštus sluoksniais, pavadintais Floor-Layer, failui, kuris atiteks kam nors be aukštų. |
| `FLOORS` | `FLR` | Atverti Aukštų skydelį: sudėti aukštus viename modelio erdvėje. |
| `GCCOINCIDENT` |  | Ribojimas: du taškai susitinka arba taškas lieka ant objekto |
| `GCCOLLINEAR` |  | Ribojimas: dvi tiesės lieka vienoje tiesėje |
| `GCCONCENTRIC` |  | Ribojimas: du apskritimai ar lankai turi bendrą centrą |
| `GCEQUAL` |  | Ribojimas: dvi tiesės lieka to paties ilgio, o du apskritimai ar lankai – to paties spindulio |
| `GCFIX` |  | Ribojimas: taškas ar visas objektas lieka savo vietoje |
| `GCHORIZONTAL` |  | Ribojimas: tiesė (arba du taškai) lieka horizontali |
| `GCPARALLEL` |  | Ribojimas: dvi tiesės lieka lygiagrečios |
| `GCPERPENDICULAR` |  | Ribojimas: dvi tiesės lieka statmenos |
| `GCSYMMETRIC` |  | Ribojimas: du taškai, tiesės ar apskritimai atsispindi vienas kito atžvilgiu per tiesę |
| `GCTANGENT` |  | Ribojimas: tiesė ir apskritimas ar lankas (arba du iš jų) lieka liestiniai |
| `GCVERTICAL` |  | Ribojimas: tiesė (arba du taškai) lieka vertikali |
| `GDSIN` | `GDS` | Peržiūrėti IC išdėstymą (GDSII srauto failą): kiekvienas sluoksnis ir duomenų tipas kaip brėžinio sluoksnis, plokščiai, vartotojo vienetais; tik peržiūrai ir matavimui (laboratorinis bandymas) |
| `GEOMCONSTRAINT` | `GCON` | Geometriniai ribojimai: horizontalūs, vertikalūs, lygiagretūs, liestiniai, sutampantys… |
| `GLBOUT` |  | Eksportuoti 3D modelį kaip GLB (glTF) |
| `GRADIENT` | `GD` | Užpildyti sritį vienos ar dviejų spalvų gradientu |
| `GRIDMOVE` | `GM` | Perkelti tinklelio liniją ir kartu perkelti tai, kas ant jos kabo: sienos tempiasi, stulpeliai, burbulai ir žymos juda, matmenys seka. |
| `GROUP` | `G` | GROUP (G): suteikti pasirinktiems objektams bendrą pavadinimą. Spustelėjus vieną iš jų, pasirenkami visi. Enter prie pavadinimo sukuria nepavadintą grupę. |
| `GROUPEDIT` |  | GROUPEDIT: keisti grupę. Pasirinkite vieną jos objektą arba nurodykite jos Pavadinimą, tada Pridėti arba Pašalinti objektus, Pervardyti, pakeisti Aprašymą arba nurodyti, ar spustelėjimas pasirenka ją visą. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Užpildyti sritį vientisu užpildu arba raštu: spustelėkite jos viduje arba pasirinkite uždarus objektus (H) |
| `HATCHEDIT` | `HE` | Keisti brūkšniavimą: raštą, mastelį, kampą, pradžią ir jo ryšį su riba. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Iš naujo sukuria brūkšniavimo ribos polilinijas, susietas su brūkšniavimu arba ne |
| `HATCHTOBACK` |  | Nukelti visus brūkšniavimus už visko kito. |
| `HELP` | `?` | Šis sąrašas |
| `HIDEOBJECTS` |  | Paslėpti pasirinktus objektus iki UNISOLATEOBJECTS. Neįrašoma su brėžiniu. |
| `HISTORY` | `HIST` | HISTORY (HIST): šio brėžinio versijos – kopijos, saugomos šiame kompiuteryje, kai Studio jį įrašo, ir debesies versijos – atverti, atkurti ir palyginti su spalva pažymėtais pakeitimais. |
| `ID` |  | Taško koordinatės |
| `IMAGE` | `IM` | Suteikti CadCraft paveikslėlių failus, kuriuos naudoja brėžinys (DWG saugo tik tai, kur jie buvo). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Įdėti paveikslėlį (PNG arba JPEG) iš failo. |
| `IMAGECLIP` | `ICL` | Iškirpti paveikslėlį stačiakampiu arba daugiakampiu arba pašalinti jo iškirpimą. |
| `IMPORT` | `IMP` | Importuoti į šį brėžinį failą, kurio tipą skaito priedas |
| `INSERT` | `I`, `DDINSERT` | Įdėti bloką (S – mastelis, R – pasukti); F – iš DWG/DXF failo, L – iš bibliotekos |
| `INTERSECT` | `IN` | Palikti tik tai, ką kietieji kūnai turi bendro (3D), arba plotą, kurį bendrai turi 2D sritys |
| `ISODRAFT` |  | ISODRAFT: izometrinis braižymas įjungtas arba išjungtas, arba tiesiai ant Kairės, Viršutinės ar Dešinės plokštumos. Kol jis įjungtas, Orto ir poliarinis sekimas seka dviejų plokštumos ašių kryptis, tinklelis piešiamas izometriškai, o ELLIPSE turi Izoapskritimą. |
| `ISOLATEOBJECTS` | `ISOLATE` | Rodyti tik pasirinktus objektus; visa kita šioje erdvėje paslėpta iki UNISOLATEOBJECTS. Neįrašoma su brėžiniu. |
| `ISOPLANE` |  | ISOPLANE: pasirinkti izometrinę plokštumą braižymui: Kairė, Viršutinė arba Dešinė. Enter pereina prie kitos, kaip F5 veikia, kai įjungtas izometrinis braižymas. |
| `JOIN` | `J` | Sujungti tieses, lankus ir polilinijas, kurios susitinka galu su galu, į vieną polilinija; tiesės vienoje tiesėje – į vieną tiesę (J) |
| `LASER` | `LASERCUT` | Atverti Lazerio skydelį: siųsti sluoksnius į lazerinio pjovimo ar graviravimo įrenginį (GRBL G-kodas) |
| `LASSOMODE` |  | Paspaudus ir vilkus, piešiamas lasas (1) arba stačiakampis (0) |
| `LAYDEL` |  | Ištrinti sluoksnį ir kiekvieną jame esantį objektą (modelyje, lapuose ir blokuose) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Atverti sluoksnių tvarkyklę: visi sluoksniai vienoje lentelėje |
| `LAYERPANEL` |  | Rodyti sluoksnių skydelį |
| `LAYFRZ` |  | Užšaldyti kiekvieno pasirinkto objekto sluoksnį |
| `LAYGROUP` | `LG` | Sugrupuoti sluoksnius į aplankus Sluoksnių skydelyje. |
| `LAYISO` |  | Izoliuoti pasirinktų objektų sluoksnius (visi kiti sluoksniai išjungti) |
| `LAYLOCKFADE` |  | Nustatyti, kiek išblunka objektai užrakintuose sluoksniuose ir ar spustelėjimas gali juos pasirinkti. |
| `LAYMCUR` |  | Padaryti dabartiniu pasirinkto objekto sluoksnį |
| `LAYMRG` |  | Sujungti sluoksnius: jų objektai perkeliami į tikslinį sluoksnį, o sujungti sluoksniai pašalinami |
| `LAYOFF` |  | Išjungti kiekvieno pasirinkto objekto sluoksnį |
| `LAYON` |  | Įjungti visus sluoksnius |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Naujas lapas su antraštės bloku ir vaizdo prievadu |
| `LAYTHW` |  | Atšildyti visus sluoksnius |
| `LAYUNISO` |  | Vėl įjungti sluoksnius, kuriuos LAYISO išjungė |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Konvertuoja tekstą, įvestą senais vietnamiečių šriftais (TCVN3 / ABC šriftais, pavyzdžiui, .VnTime, ir VNI šriftais, pavyzdžiui, VNI-Times), į Unicode. Toks tekstas jau rodomas taip, kaip skaitosi; ši komanda jį perrašo visam laikui, nurodydama kiekį ir su vienu Anuliuoti žingsniu. |
| `LENGTHEN` | `LEN` | Pailginti arba sutrumpinti tieses, lankus ir polilinijas: per dydį, procentą, iki bendro ilgio arba vilkimu (LEN) |
| `LIBRARY` | `LIB` | Bibliotekos skydelis: įdėti elementus, tikrinti atnaujinimus, autorystė |
| `LIMITS` |  | Nustatyti brėžinio ribas: ĮJUNGTA, IŠJUNGTA arba apatinį kairįjį ir viršutinį dešinįjį kampus. Kai ribos įjungtos, taškai už jų atmetami |
| `LINE` | `L` | Tiesios atkarpos, kiekviena – savas objektas |
| `LINETYPE` | `LT`, `CELTYPE` | Linijos tipas, kurį gauna nauji objektai (pagal sluoksnį, pagal bloką arba pavadintas) |
| `LINKVIEWS` | `SYNCVIEWS` | Kartu slinkti ir keisti mastelį visiems langams (padalintas ekranas), lyginant dvi brėžinius ar peržiūras |
| `LISPEDIT` | `VLIDE` | LISPEDIT (arba VLIDE) atveria LISP redaktorių: langą rutinai rašyti, įkelti ir išbandyti. Įkėlimas į brėžinį nuskaito kiekvieną formą, kaip tai daro APPLOAD įkeliant failą, ir sukuria jos komandas. Vykdyti pasirinkimą įvertina pasirinktas formas arba formą, kurioje yra žymeklis. Konsolė rodo, ką rutina išvedė, ir kiekvieną klaidą su jos eilute. Atitinkamas skliaustas pažymimas rašant, o Enter įtraukia naują eilutę. Naujas, Atverti ir Įrašyti veikia su .lsp failu. Sąrašai šalia teksto rodo funkcijas, kurias rutina apibrėžia, tas, kurias ji kviečia ir kurių šis LISP dar neturi, bei visas jos funkcijas. Langas neblokuoja brėžinio, todėl rutina gali prašyti taškų; Stabdyti arba Esc baigia veikiančią rutiną. |
| `LIST` | `LI`, `LS` | Aprašyti objektus istorijoje |
| `LTSCALE` | `LTS` | Brėžinio linijos tipo mastelis (kiekvienas brūkšnys ir tarpas dauginamas iš jo) |
| `LWDISPLAY` | `LWT` | Rodyti arba slėpti linijų storius ekrane (LWT mygtukas būsenos juostoje) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Linijos storis, kurį gauna nauji objektai (pagal sluoksnį, pagal bloką, numatytasis arba mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Žemėlapio sluoksniai po modelio erdve: brėžinio koordinačių sistema, plytelės, WMS, WMTS, ArcGIS, paveikslėliai |
| `MASSPROP` |  | MASSPROP: sričių ir uždarų objektų skerspjūvio savybės: plotas, perimetras, svorio centras, momentai ir inercijos sandauga, inercijos spinduliai bei pagrindinės ašys. Tiksli tiesėms ir lankams. Ataskaitą gali įrašyti į tekstinį failą. |
| `MATCHPROP` | `MA`, `PAINTER` | Suderinti savybes: nukopijuoti vieno objekto sluoksnį, spalvą ir kitą kitiems objektams (MA) |
| `MEASURE` | `ME` | MEASURE (ME): žymė kas nurodytą ilgį palei tiesę, lanką, apskritimą, polilinija, kreivę ar elipsę, pradedant nuo galo, arčiausiai jūsų pasirinkimo. Taškai arba, su Bloku, blokas kiekvienoje žymėje. |
| `MEASUREGEOM` | `MEA` | Išmatuoti atstumą, spindulį, kampą ar plotą (MEA) |
| `MINSERT` |  | MINSERT: įdėti bloką eilėmis ir stulpeliais vienu kartu. Kiekvienas yra atskira nuoroda, todėl bet kurią galite perkelti ar ištrinti. |
| `MIRROR` | `MI` | Atspindėti objektus per tiesę |
| `MLEADER` | `MLD`, `MLEAD` | Daugiakryptė nuoroda: rodyklė, nukreipiamoji linija ir pastaba kaip vienas objektas (MLD) |
| `MLEADERALIGN` | `MLA` | Išlygiuoti daugiakryptes nuorodas su viena iš jų pagal kryptį, vienodais tarpais arba išdėstyti tarp dviejų taškų (MLA) |
| `MLEADERCOLLECT` | `MLC` | Surinkti kelias daugiakryptes nuorodas į vieną: jų blokai eilėje ar stulpelyje arba jų pastabos viena po kitos (MLC) |
| `MLEADEREDIT` | `MLE` | Pridėti nukreipiamąsias linijas prie daugiakryptės nuorodos arba jas pašalinti; perjungti jos turinį tarp teksto ir bloko (MLE) |
| `MLINE` |  | Nubrėžti lygiagrečias linijas kartu, sujungtas kampuose. |
| `MOVE` | `M` | Perkelti objektus pagal bazinį tašką ir antrąjį tašką |
| `MSPACE` | `MS` | Dirbti su modeliu per atidaryto lapo vaizdo prievadą (arba dukart spustelėti vaizdo prievado viduje). |
| `MTEXT` | `MT`, `T` | Pastraipos tekstas: vilkite jo plotį, tada rašykite vietoje; Enter pradeda naują pastraipą (T) |
| `MVIEW` | `MV` | Vaizdo prievadas į modelį lape |
| `NAMEDVIEW` | `NV`, `VIEWS` | Pavadinti vaizdai: išsaugoti ekrane matomą vaizdą (arba langą) pavadinimu ir grįžti prie jo (NV) |
| `NCOPY` |  | Nukopijuoti objektus iš bloko nuorodos arba susieto brėžinio į brėžinį, neišskaidant jo. |
| `NEARBY` |  | Pasakyti, kas yra šalia žymeklio, artimiausi pirmi, su atstumu ir puse. |
| `NEW` |  | Pradėti naują brėžinį |
| `OBJECTSCALE` | `OBJSCALE` | Anotacinio teksto ir matmenų anotacijos mastai: pridėti mastelį, ištrinti vieną, pridėti dabartinį mastelį arba juos išvardyti (kiekvienas vaizdo prievadas rodo juos savo mastelio dydžiu) |
| `OBJOUT` |  | Eksportuoti 3D modelį kaip OBJ |
| `OFFSET` | `O` | Lygiagrečios kopijos per atstumą (O) |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kaip OFFSET uždaro tarpus išoriniuose polilinijos kampuose. 0 pratęsia atkarpas, 1 prideda lanką, 2 prideda tiesų pjūvį. Išsaugoma šiai sesijai. |
| `OLELIST` | `OLES` | Išvardyti brėžinio OLE objektus ir įdėti vieno paveikslėlio kopiją ten, kur pasirinksite |
| `OPEN` |  | Atverti DWG arba DXF iš šio kompiuterio |
| `OPENIN3D` |  | Atverti šį brėžinį 3D modeliavimo programoje naujame skirtuke (nieko neįkeliama) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Atverti objektų pritraukimo meniu: pasirinkti, kurie pritraukimai įjungti. Taip pat dešiniuoju pelės mygtuku spustelėjus Pritraukimą būsenos juostoje. |
| `OVERKILL` |  | Ištrinti pasikartojančius objektus ir sujungti persidengiančias ar galu su galu einančias tieses bei lankus pagal toleranciją. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametrų skydelis: vartotojo parametrai ir matmenų ribojimai vienoje lentelėje |
| `PARTSLIST` | `PLIST` | Detalių sąrašo lentelė kiekvienai standartinei detalei ir plieno profiliui, įdėtam iš bibliotekos |
| `PASTEAREA` | `PAREA` | Įdėti sritį, nukopijuotą MarkupCraft (Kopijuoti sritį), tikru dydžiu kaip paveikslėlį. |
| `PASTEBLOCK` |  | PASTEBLOCK: įdėti tai, ką nukopijavote, kaip vieną bloką. Blokas gauna savo pavadinimą; RENAME suteikia jūsų. |
| `PASTECLIP` |  | Įdėti iškarpinę: ji seka žymeklį, spustelėkite, kur ji eis (Ctrl+V) |
| `PASTEORIG` |  | Įdėti iškarpinę į koordinates, iš kurių ji buvo nukopijuota (Ctrl+Shift+V) |
| `PDF` |  | Suteikti CadCraft PDF failus, kuriuos naudoja brėžinio pagrindai |
| `PDFADJUST` |  | Išblukinti, kontrastuoti, paversti monochromine arba išjungti PDF pagrindą |
| `PDFATTACH` | `PDFATT` | Prijungti PDF puslapį kaip pagrindą (PDFATTACH) |
| `PDFCLIP` |  | Iškirpti PDF pagrindą stačiakampiu ar daugiakampiu |
| `PDFIMPORT` | `PDFIM` | Paversti PDF puslapio linijas, užpildus ir tekstą į brėžinio objektus (PDFIMPORT) |
| `PDFLAYERS` |  | Įjungti arba išjungti PDF pagrindo sluoksnius |
| `PEDIT` | `PE` | Redaguoti polilinija: uždaryti, atidaryti, sujungti, plotis, pritaikyti kreivę, splaino kreivė, išlyginti, linijos tipo generavimas, apversti; tiesės, lankai ir splainai gali būti paversti polilinijomis |
| `PHOTOSKETCH` | `PSK` | Paverčia ant popieriaus nupieštos ranka eskizo nuotrauką į linijas ir lankus tam tikru mastu, ištiesindama perspektyvą ir kiekvienai rašiklio spalvai suteikdama atskirą sluoksnį. |
| `PICKSTYLE` |  | PICKSTYLE: ar pasirinkus vieną grupės objektą pasirenkama visa grupė (1, pradinė nuostata) ar tik tas objektas (0). Išsaugoma šiai sesijai. |
| `PLAN` |  | Pasukti vaizdą, kad UCS X ašis (Dabartinė UCS, išsaugota Ucs arba Pasaulis) būtų horizontali ekrane. Niekas brėžinyje nejuda. |
| `PLINE` | `PL` | Polilinija iš tiesių ir lankų atkarpų |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Spausdinti į PDF: lapą arba modelį pasirinktu mastu |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Spausdinimo stilių lentelės: nustatyti, kaip kiekviena spalva spausdinama (spalva, juoda, pilka, rašalas, linijos storis); išsaugoma su brėžiniu (STYLESMANAGER) |
| `POINT` | `PO` | Taškų objektai |
| `POINTCLOUD` | `PC` | Prijungtas taškų debesis: pjūvis, aukštis, storis, spalva, dydis, matomumas, mastelis, atjungimas |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Prijungti taškų debesį (LAS, LAZ, XYZ, PTS) po brėžiniu |
| `POLARANG` |  | Poliarinio sekimo žingsnis laipsniais (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Taisyklingas daugiakampis |
| `PRESSPULL` |  | Stumti arba traukti kietojo kūno paviršių (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Atverti Savybių skydelį (taip pat Ctrl+1 arba dukart spustelėti objektą) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Sulankstyti Savybių skydelį iki lango krašto |
| `PSPACE` | `PS` | Palikti vaizdo prievadą, su kuriuo dirbate, ir grįžti į lapą (arba dukart spustelėti už jo ribų). |
| `PUBLISH` | `-PUBLISH` | Spausdinti kelis ar visus lapus į vieną PDF (puslapis ir žymė kiekvienam lapui) |
| `PURGE` | `PU` | Pašalinti bloko apibrėžimus, kurių niekas nenaudoja |
| `QDIM` |  | Greitas matmuo: matuoti kelis objektus iš karto (tęstinis, bazinis, pakopinis, ordinatė, spindulys ar skersmuo) |
| `QPMODE` | `QP` | Greitosios savybės pagal žymeklį įjungtos arba išjungtos |
| `QSELECT` | `QS` | Greitas pasirinkimas: visi tam tikro tipo objektai, kurių sluoksnis, spalva, dydis ar pavadinimas atitinka (QS) |
| `RASTERSNAP` |  | Įjungti arba išjungti pritraukimą prie nuskenuotų lapų linijų. |
| `RAY` |  | Spindulys: konstrukcinė linija iš taško, begalinė viena kryptimi. |
| `RECOVER` |  | Atveria sugadintą DXF arba DWG: praleidžia tai, ko nepavyksta perskaityti, vietoj to, kad atsisakytų failo; praneša, kas praleista, tada patikrina ir taiso brėžinį kaip AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Uždara polilinija iš dviejų kampų |
| `REDLINE` | `RDL` | Redlinija į peržiūrą: perskaityti MarkupCraft redlinijos paketą, priimti arba atmesti kiekvieną pakeitimą, apdebesuoti priimtus su peržiūros žurnalu ir įrašyti atsakymų failą (RDL) |
| `REDO` |  | Perdaryti tai, kas buvo anuliuota |
| `REFCLOSE` |  | Baigti redaguoti bloką vietoje: išsaugoti arba atmesti pakeitimus |
| `REFEDIT` |  | Redaguoti bloką vietoje, kur yra jo nuoroda, o likęs brėžinys išblunka; REFCLOSE išsaugo |
| `REGEN` | `RE` | Iš naujo sukurti tai, kas nubrėžta šiame skirtuke, pagal brėžinį (RE) |
| `REGENALL` | `REA` | Iš naujo sukurti tai, kas nubrėžta kiekviename skirtuke, lange ir atidarytame brėžinyje (REA) |
| `REGION` | `REG` | REGION (REG): sukurti plokščias sritis (regionus) iš uždarų objektų arba iš tiesių, lankų ir polilinijų, kurios užsidaro ciklu galas į galą. Tuomet UNION, SUBTRACT ir INTERSECT sujungia regionus, o MASSPROP pateikia jų skerspjūvio savybes. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Sulygiuoti kelis skenavimus: sudėti juos į vieną rėmą pagal pasirinktų taškų poras arba taikinius, patikslinti su ICP, eksportuoti vieną LAS arba E57 |
| `REINIT` |  | Iš naujo įkelti savo pseudonimų failą |
| `RENAME` | `-RENAME`, `REN` | Pervardyti sluoksnį arba bloką (kiekvienas objektas ar nuoroda seka) |
| `REVCLOUD` | `RC` | Peržiūros debesis: apvynioti stačiakampį, daugiakampį, laisvą kelią arba objektą (RC) |
| `REVOLVE` | `REV` | Pasukti uždarus 2D objektus apie ašį į kietuosius kūnus (3D) |
| `ROTATE` | `RO` | Pasukti objektus apie bazinį tašką |
| `SAMPLES` | `SAMPLE` | Atverti vieną iš CadCraft pavyzdinių brėžinių (architektūrinį rinkinį, kaip pastatyta), kad pasimokytumėte |
| `SAVE` | `QSAVE` | Atsisiųsti brėžinį jo formatu (DWG arba DXF) |
| `SAVEAS` |  | Atsisiųsti brėžinį kaip DWG arba DXF: pasirinkti, kurį |
| `SAYSEL` |  | Pasakyti, kas pasirinkta, po vieną sakinį kiekvienam. |
| `SCALE` | `SC` | Keisti objektų mastelį apie bazinį tašką |
| `SCALELISTEDIT` | `SCALELIST` | Pridėti, redaguoti ir ištrinti brėžinio savus mastelius; jie rodomi vaizdo prievado ir spausdinimo mastelių sąrašuose ir išsaugomi faile (SCALELIST) |
| `SCANALIGN` | `SCL` | Sulygiuoti nuskenuotą lapą pagal du taškus: perkelti, pasukti ir, jei pasirinksite, keisti mastelį. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Įdėti nuskenuotą brėžinį: PNG, JPEG arba TIFF (vienas puslapis arba visi daugiapusio failo puslapiai) arba PDF puslapį, kuris yra paveikslėlis. |
| `SCANCLEAN` | `SCC` | Paversti nuskenuotą lapą juodu baltu ir pašalinti dėmes. |
| `SCANCROP` | `SCR` | Apkirpti nuskenuotą lapą iki lango. |
| `SCANDESKEW` | `SCD` | Rasti kampą, kuriuo guli nuskenuoto lapo ilgos linijos, ir ištiesinti lapą, kai priimsite kampą. |
| `SCANERASE` | `SCE` | Ištrinti nuskenuoto lapo sritį: stačiakampį, daugiakampį ar lasą. |
| `SCANINFO` | `SCI` | Parodyti nuskenuoto lapo originalų failą ir nuo to laiko atliktus veiksmus. |
| `SCANSCALE` | `SCS` | Nustatyti nuskenuoto lapo mastelį: pasirinkti du jo taškus ir įvesti tikrą atstumą tarp jų. |
| `SCANTRACE` | `SCT` | Nubrėžti nuskenuoto lapo kontūrus į linijas ir lankus naujame sluoksnyje, pagal jūsų nustatytą toleranciją. Tekstas ir brūkšniavimas lieka kaip rastras. |
| `SELECT` |  | Pasirinkti objektus dabar (P, Ankstesnis, kitai komandai) |
| `SELECTALL` | `AI_SELALL` | Pasirinkti kiekvieną objektą, kurį galite redaguoti šiame skirtuke (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Pasirinkti kiekvieną panašų į pasirinktus: tas pats tipas, sluoksnis ir spalva (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Rodo Lapų rinkinio skydelį: lapai iš daugelio brėžinių, sunumeruoti, spausdinami kaip vienas PDF. |
| `SHORTCUTS` | `KEYS` | Suteikti bet kuriai komandai savo klavišą (Ctrl arba Alt su raide, arba laisvas funkcinis klavišas), išsaugotą šioje naršyklėje ar darbalaukio programoje. |
| `SHXFONTS` | `SHX` | Suteikti CadCraft SHX šriftus iš aplanko arba failų, kad teksto stiliai, kurie juos nurodo, būtų piešiami jais (sąrašas, pašalinti, atvirkštinė tvarka) |
| `SKETCHFIX` | `SKF` | Piešti laisvos rankos brūkšnius; kiekvienas tampa švaria linija, apskritimu, lanku, stačiakampiu ar polilinija, sulygintais ir sujungtais su kitais. |
| `SKETCHLIVE` | `SKL` | Eskizuoti rašikliu: kiekvienas brūkšnys tampa tiksliu tiese, apskritimu, lanku ar stačiakampiu, kai pakeliate rašiklį; jis prikabinamas prie brėžinio, o jo dydis įvedamas per viršų. |
| `SPLINE` | `SPL` | Nubrėžti kreivę per taškus (arba su valdymo daugiakampiu) arba paversti polilinija į ją |
| `SPLINEDIT` | `SPE` | Redaguoti kreivę: pritaikyti taškus, valdymo taškus ir svorius, atidaryti arba uždaryti, apversti arba paversti polilinija |
| `SPLIT` |  | Padalyti brėžinio sritį į langus (kaip VPORTS modelyje; taip pat iš lapo) |
| `STEELMEMBER` | `SMEMBER` | Plieninis elementas 3D iš standartinio profilio: du taškai (sija) arba pagrindo taškas ir aukštis (Stulpas) |
| `STLOUT` |  | Eksportuoti 3D modelį kaip STL (milimetrais) |
| `STRETCH` | `S` | Tempti: vilkti kertantį langą per galus, kad perkeltumėte; viduje esantys objektai perkeliami, likusieji lieka (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Teksto stiliai: šriftas, aukštis, plotis ir nuolydis, kuriuos įgyja naujas tekstas (dialogas; komandų eilutėje -STYLE) |
| `SUBTRACT` | `SU` | Atimti kietuosius kūnus iš kitų (3D) arba 2D sritis iš sričių |
| `SWBOUT` | `SWMACRO` | Atsisiųsti SolidWorks makrokomandą (.swb), kuri atkuria modelį kaip vieną ribotą eskizą |
| `SWEEP` |  | Ištempti uždarus 2D objektus išilgai kelio (linija, polilinija, lankas, apskritimas) į kietuosius kūnus (3D) |
| `TABLE` | `TB` | Sukurti lentelę: eilutės ir stulpeliai arba iš skaičiuoklės langelių iškarpinėje ar CSV faile |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Redaguoti lentelę: rašyti langelyje, įterpti ir ištrinti eilutes bei stulpelius, dydžius, sujungtus langelius, lygiavimą |
| `TABLEEXPORT` |  | Išsaugoti tai, ką rodo lentelė, kaip CSV failą |
| `TABLEPASTE` | `PASTETABLE` | Sukurti lentelę iš skaičiuoklės langelių iškarpinėje |
| `TABLESTYLE` | `TS` | Lentelių stiliai: teksto aukščiai, lygiavimas, paraštės ir rėmeliai antraštės, stulpelių antraštės ir duomenų eilutėms |
| `TAGS` |  | Žymos ant bloko nuorodų: apibrėžti žymą (rūšis, leidžiamos reikšmės, blokai, kuriems ji taikoma), nustatyti ją pasirinktoms nuorodoms ir išvardyti jas kaip sąrašą, kurį galima įrašyti kaip CSV |
| `TEXT` | `DT`, `DTEXT` | Vienos eilutės tekstas; Enter pradeda kitą eilutę |
| `TEXTEDIT` | `ED`, `DDEDIT` | Redaguoti tekstą vietoje: pasirinkti tekstą (arba dukart spustelėti jį) (ED) |
| `TEXTMASK` | `TMASK` | Padėti foninę kaukę už tekstų (brėžinio fonas arba spalva) arba ją pašalinti. |
| `TEXTTOFRONT` |  | Iškelti visą tekstą, matmenis ir nuorodas virš visko kito. |
| `TOOLBAR` |  | Pasirinkti, ką rodo įrankių juostos mygtukai: piktogramas ir tekstą, tik piktogramas arba tik tekstą (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Perkelti įrankių juostą į viršų, apačią, kairę ar dešinę lango pusę |
| `TOOLBARROWS` |  | Pasirinkti, kiek eilučių naudoja įrankių juosta: prisitaikyti, 2 arba 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Padaryti brėžinio viršuje esančias juostas standartinėmis arba kompaktiškomis |
| `TOUCHCROSSHAIR` | `TCX` | Kryžminis žymeklis su poslinkiu piešimui pirštu: vienas pirštas perkelia kryžminį žymeklį, esantį virš jo ir šalia, kad pirštas nedengtų pasirinkimo taško. Pakėlus pirštą nieko nepasirenkama; Spustelėjimo mygtukas arba bakstelėjimas antru pirštu pasirenka taške prie kryžminio žymeklio, o laikant Spustelėjimą judinant vilkiama. Ilgas paspaudimas arba Enter mygtukas yra Enter. Du pirštai slenka ir keičia mastelį. Parinktys: ĮJUNGTA, IŠJUNGTA, Auto (įjungta tik ten, kur pirštas yra vienintelis žymeklis), Atstumas, Šonas. |
| `TOUR` | `TUTORIAL` | Dar kartą pereiti šešių žingsnių pirmojo brėžinio ekskursiją |
| `TRIM` | `TR` | Nukirpti objektus iki vietos, kur juos kerta kiti: spustelėkite gabalą, vilkite per kelis arba Shift+spragtelėkite, kad pratęstumėte (TR) |
| `TRIMEXTENDMODE` |  | Kaip TRIM ir EXTEND prasideda: 1 Greitas (kiekvienas objektas yra pjovimo kraštas ar riba), 0 Standartinis (pirmiausia pasirinkite kraštus) |
| `TTR` |  | Apskritimas, liestinis prie dviejų objektų, su jūsų nurodytu spinduliu (tas pats kaip CIRCLE T) |
| `TURNLEFT` |  | Pasukti vaizdą 90° į kairę (prieš laikrodžio rodyklę): UCS Z -90, o vaizdas seka. Niekas brėžinyje nejuda. |
| `TURNRIGHT` |  | Pasukti vaizdą 90° į dešinę (pagal laikrodžio rodyklę): UCS Z 90, o vaizdas seka. Niekas brėžinyje nejuda. |
| `TURNWORLD` |  | Grįžti į pasaulį: UCS Pasaulis, ir vaizdas vėl lygus. |
| `TXT2MTXT` | `T2M` | Sujungti vienos eilutės tekstus į vieną pastraipos tekstą, iš viršaus į apačią. |
| `UCS` |  | Jūsų pačių koordinačių sistema: pradžia ir X ašis (pradžia, Z kampas, 3 taškai, Objektas, Ankstesnė, Pasaulis, Pavadinta). Įvesti taškai, ortogonalus režimas, poliarinis sekimas, tinklelis ir naujas tekstas seka ją; vaizdas pasisuka taip, kad jo X ašis būtų horizontali. Niekas brėžinyje nejuda. |
| `UNDO` | `U` | Anuliuoti paskutinę komandą |
| `UNGROUP` |  | UNGROUP: išardyti grupes. Pasirinkite grupių objektus arba nurodykite Pavadinimą. Objektai lieka brėžinyje. |
| `UNION` | `UNI` | Sujungti kietuosius kūnus į vieną (3D) arba 2D sritis į vieną sritį |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Rodyti iš naujo visus objektus, paslėptus ISOLATEOBJECTS arba HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kaip rodomi ir įvedami ilgiai: dešimtainiai, pėdos ir coliai, trupmenos (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Iš naujo apskaičiuoti laukus ir pasirinkti, kada jie atsinaujina patys |
| `USDOUT` |  | Eksportuoti 3D modelį kaip USD (.usda tekstas, .usdc dvejetainis arba .usdz paketas) |
| `VIEW` | `-VIEW`, `V` | Standartiniai 3D vaizdai, perspektyvos arba lygiagretūs (3D) |
| `VIEWBASE` | `FLATSHOT` | Įdėti plokščią 2D 3D kietųjų kūnų vaizdą (priekis, viršus, šonas arba izometrinis; paslėptos linijos brūkšniuotos) ant lapo arba modelyje |
| `VIEWLABEL` | `VL` | Vaizdo pavadinimas lape, rodantis jo vaizdo prievado vaizdo pavadinimą ir keičiantis kartu su juo. |
| `VOICE` |  | Įjungti arba išjungti balsu įvedamas komandas. Jos atpažįstamos šiame kompiuteryje. |
| `VPCLIP` |  | Iškirpti lapo vaizdo prievadą uždaru objektu arba nubrėžtu daugiakampiu; Delete vėl padaro jį stačiakampiu |
| `VPLAYER` |  | Užšaldyti arba atšaldyti sluoksnius tik kai kuriuose vaizdo prievaduose (Užšaldyti, Atšaldyti, Atstatyti) ir pasirinkti, kurie sluoksniai naujuose vaizdo prievaduose pradeda užšaldyti (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Padalyti brėžinio sritį į langus, kiekvienas su savo vaizdu (lape: vaizdo prievadas, kaip MVIEW) |
| `VPVIEW` |  | Nustatyti, ką rodo vaizdo prievadas: pasirinkti langą modelyje |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D vaizdo vizualinis stilius: šešėliuotas, kraštai, paslėpta linija, karkasas, rentgenas |
| `WALL` | `WA` | Nubrėžti 2D sienas kaip polilinija. Jos susijungia ir laiko duris bei langus. |
| `WALLARC` | `WARC` | Nubrėžti sienų lanką. Plano sienos yra tiesios, todėl lankas piešiamas kaip trumpos tiesios sienos (kiekviena po 15 laipsnių), kurios susijungia. |
| `WALLDELSEG` |  | Ištrinti sienos dalį tarp dviejų taškų. Likusi dalis lieka viena ar dviem sienomis. |
| `WALLDIM` |  | Įvesti naują matmens reikšmę: siena jos tolimajame gale pasislenka statmenai sau, siena pirmajame gale išlieka, o prie jos prijungtos sienos seka. |
| `WALLDISJOIN` |  | Pasirinkti sieną arti vieno galo, kad būtų uždrausta jungtis tame gale: galas nubrėžiamas statmenai ir niekas jo nesekia. Pasirinkite dar kartą, kad leistumėte. |
| `WALLGRID` |  | Užrakinti sieną prie tinklelio linijos: palei ją arba vienas galas ant jos. Perkelkite liniją su GRIDMOVE, ir siena seks. |
| `WALLHOLD` |  | Lygiuoti ir užrakinti: siena išlaiko savo vietą prieš kitą sieną (ant jos linijos arba turimu atstumu). Jei viena pasislenka, kita seka. |
| `WALLHOLDDIM` |  | Užrakinti atstumą tarp dviejų lygiagrečių sienų. Jei viena pasislenka, kita seka, kad išlaikytų jį. |
| `WALLHOLDS` |  | Išvardyti sienų užraktus. |
| `WALLJOINS` |  | Suteikti kiekvienai senesnio brėžinio sienai jos id ir išsaugoti jungtis tarp jų. Tai taip pat įvyksta pirmą kartą, kai ką nors pakeičiate. |
| `WALLJOINSTYLE` |  | Spustelėkite kampą, kur dvi sienos susijungia galas į galą, kad pakeistumėte, kaip jis nubrėžiamas: įstrižai, sviestu, kvadratiškai nupjauti. T perjungia, kuri siena eina per. |
| `WALLOFFSET` | `WO` | Perkelti sieną statmenai sau per atstumą (prie jos prijungtos sienos seka) arba padaryti kopiją tuo atstumu. |
| `WALLPICK` |  | Sukurti sienas ant linijos arba polilinijos brėžinyje, su prie jos prijungtomis linijomis, jei pasakysite Taip. |
| `WALLPOLY` | `WP` | Nubrėžti sienas aplink taisyklingą daugiakampį su 3–64 kraštinėmis, kaip POLYGON. |
| `WALLRECT` | `WR` | Nubrėžti keturias sujungtas sienas iš dviejų priešingų kampų, kaip RECTANG. |
| `WALLREJOIN` |  | Padaryti dvi sienos dalis vėl viena siena. Pirmoji išlaiko savo vietą brėžinyje. |
| `WALLROT` |  | Nubrėžti keturias sujungtas sienas kaip stačiakampį, pasuktą bet kokiu kampu: pirma pusė, paskui kaip toli išeiti. |
| `WALLSPLIT` | `WS` | Padalyti sieną per pusę taške arba ten, kur kerta kita siena. Dalys lieka sujungtos, nebent prašote tarpo ar laisvų galų. Durys ir langai eina su savo dalimi. |
| `WALLSPLITGAP` |  | Padalyti sieną palikdami tarpą: įveskite tarpą, pasirinkite sieną, tada tašką. Dalys išlaiko laisvus galus ir gali būti vėl sujungtos. |
| `WALLSTRETCH` |  | Tempti su langu: sienų galai, esantys jame, pasislenka; visiškai jame esančios sienos pasislenka visos, o sienos, kurios remiasi į jų šonus, slysta kartu. |
| `WALLTAN` |  | Tęsti sieną lanku, kuris nuo jos išeina palei sieną (nubrėžtas kaip trumpos tiesios sienos). |
| `WALLTRACE` |  | Nubrėžti sienas aplink mažiausią uždarą sritį iš linijų ir sienų aplink spustelėtą tašką. |
| `WALLUNHOLD` |  | Nuimti užraktus nuo sienos (ir kitų sienų užraktus jai). |
| `WBLOCK` | `W`, `-WBLOCK` | Įrašyti bloką, kai kuriuos objektus arba visą brėžinį į naują DWG arba DXF failą (W) |
| `WEDGE` | `WE` | Pleištas: du kampai ir aukštis; jis nuožulnėja nuo pirmojo kampo (3D) |
| `WHEREAMI` | `WHERE` | Pasakyti, kur yra žymeklis. |
| `WHOHAS` |  | Pasako, kas atidarė brėžinį. CadCraft Studio prie kiekvieno atidaryto brėžinio laiko nedidelį užrakto failą (Plan.dwg.cclock: kas, nuo kada, kuri versija) ir ištrina jį uždarius. Parinktys: Dabartinis (atidarytas brėžinys), Failas (pasirinkti vieną), Aplankas (kiekvienas brėžinys aplanke, kuris kur nors atidarytas; tai taip pat leidžia Studio laikyti užrakto failus tame aplanke), Kelias (įvesti vieną), Vardas (vardas, kurį mato kiti). Užraktas, kuris nebuvo atnaujintas penkias minutes, laikomas pasenusiu. Naršyklėje nepasiekiama. |
| `WINDOW` | `WN` | Įdėti langą į sieną. |
| `XATTACH` | `XA` | Susieti kitą DWG arba DXF su šiuo brėžiniu, rodomą tik skaitymui (XREF išvardija ir įkelia juos iš naujo) |
| `XCLIP` | `XC` | Iškirpti bloko nuorodas ir susietus brėžinius stačiakampiu ar daugiakampiu arba pašalinti iškirpimą. |
| `XLINE` | `XL` | Konstrukcinė linija, begalinė į abi puses: per du taškus, horizontali, vertikali, kampu, dalijanti kampą pusiau arba nukelta nuo tiesės. |
| `XREF` | `XR`, `-XREF` | Susieti brėžiniai (išorinės nuorodos): išvardyti, prijungti, įkelti iš naujo, įtraukti, atjungti |
| `ZOOM` | `Z` | Apimtis arba langas |
