---
title: Komandų žemėlapis: ką įvesti
summary: Kiekviena CadCraft komanda su trumpaisiais pavadinimais nuo A iki Z, sudaryta pačios programos, ir kiti braižymo programų įpročiai, kurie skiriasi.
keywords: komandų žemėlapis, komandos, slapyvardžiai, trumpi pavadinimai, iš kur atėjote, komandų sąrašas, ką įvesti, ištrinti, apkirpti, lygiavertis, skirtumai
from: 9426856f
---

CadCraft priima komandų pavadinimus ir trumpuosius pavadinimus, kuriuos žmonės žino iš kitų braižymo programų: įveskite `L` linijai, `TR` apkirpti, `E` ištrinti. Taigi daugumai jų nereikia mokytis jokios vertimo lentelės: pavadinimas, kurį žinote, čia tas pats. Žemiau – visos CadCraft komandos, sudarytos pačios programos. {{key:Enter}} pakartoja paskutinę komandą; įvedus `HELP` komandų eilutėje išvedamas tas pats sąrašas.

Keletas, kurios nėra tokios pačios arba dar neįgyvendintos:

- **Save** (Įrašyti) naršyklėje atsisiunčia kopiją ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio jis įrašo failą. Žr. [Atvykimas iš kitos braižymo programinės įrangos](topic:coming-from).
- **PLOT** kuria PDF (taip pat PNG ir SVG) su spausdinimo stiliaus lentele; puslapio nustatymų tvarkyklės nėra.
- **DIMSTYLE** ir **PEDIT** yra įgyvendintos; **PEDIT** neturi parinkties „Redaguoti viršūnę“ (tai daro rankenėlės).
- **TABLE** neįgyvendinta; {{cmd:XREF}}, {{cmd:SPLINE}} ir {{cmd:WBLOCK}} yra.
- Rutinos savos komandos (AutoLISP `C:NAME`) atsiranda, kai ją įkeliate su {{cmd:APPLOAD}}; jų čia nėra.

## Visos komandos (402)

| Komanda | Trumpieji pavadinimai | Ką daro |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Sukti 3D vaizdą kairiuoju mygtuku |
| `ACCESS` | `AX` | Įjungti arba išjungti braižymą be regėjimo: rezultatai skaitomi per ekrano skaitytuvą, klaviatūros žymeklis brėžinyje, prilipimo garsai ir balsu įvedamos komandos. |
| `ALIASEDIT` | | Redaguoti komandų slapyvardžius viename tekstiniame faile (įprastas L, *LINE formatas) |
| `ALIGN` | `AL` | Perkelti ir sukti objektus taip, kad šaltinio taškai atsidurtų paskirties taškuose (viena, dvi ar trys poros), ir jei norite – keisti jų mastelį |
| `ALIGNPANEL` | `ALP` | Atverti lygiavimo ir paskirstymo skydelį |
| `ALIGNTO` | | Sulygiuoti pasirinktų objektų kairiąją, centro, dešiniąją, viršutinę, vidurio ar apatinę kraštines: pagal pasirinkimą, pirmą ar paskutinį pasirinktą objektą arba tašką |
| `ANNOALLVISIBLE` | `ANNOALL` | Rodyti anotacinius objektus kiekviename mastelyje arba tik ten, kur rodinio (ar brėžinio) mastelis yra jų sąraše |
| `ANNOSCALE` | `CANNOSCALE` | Nustatyti brėžinio anotacijos mastelį: anotaciniai tekstai ir matmenys pakeičiami dydžiu, kad atsispausdintų tokio pat dydžio |
| `APPLOAD` | `AP` | Įkelti programas: LISP rutinas (.lsp) ir jų dialogų failus (.dcl); paleidimo rinkinys (AP) |
| `ARC` | `A` | Lankas: 3 taškai, Pradžia/Centras/Pabaiga, Pradžia/Centras/Kampas, Pradžia/Centras/Ilgis, Pradžia/Galas/Kampas, Pradžia/Galas/Kryptis, Pradžia/Galas/Spindulys, Centras/Pradžia/Galas, Centras/Pradžia/Kampas, Centras/Pradžia/Ilgis, Tęsti |
| `AREA` | `AA` | Plotas ir perimetras pagal taškus arba objektą; Pridėti ir Atimti saugo bėgančią sumą (AA) |
| `ARRAY` | `AR` | Kopijos eilėmis ir stulpeliais arba apie centrą (AR) |
| `ARRAYASSOCIATIVITY` | | Nustato, ar ARRAY komandos kuria masyvus, kuriuos galima redaguoti (1), ar paprastas kopijas (0) |
| `ARRAYCLOSE` | | Baigia masyvo šaltinio objektų redagavimą |
| `ARRAYEDIT` | | Keičia masyvą, sukurtą su Susietuoju pasirinkimu: skaičius, tarpus, šaltinio objektus, vieną elementą |
| `ARRAYPATH` | | Kopijos išilgai linijos, lanko, polilinijos ar kitos kreivės |
| `ARRAYPOLAR` | | Kopijos apie centro tašką |
| `ARRAYRECT` | | Kopijos eilėmis ir stulpeliais |
| `ASBUILT` | `ASB` | ASBUILT nuskaito brigados išmatuotus tikrus taškus (CSV / TXT, kaip rašo EXPORTPOINTS) ir palygina juos su brėžinio taškais: patenka į toleranciją ar ne, neišmatuoti, papildomi. Pažymi juos sluoksnyje AS-BUILT ir atsisiunčia CSV ataskaitą. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Apibrėžti atributą (žymą, kurios blokas prašo reikšmės), kurį dėti į bloką (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Redaguoti bloko nuorodos atributų reikšmes komandų eilutėje, vieną po kito ({{key:Enter}} palieka reikšmę) |
| `ATTSYNC` | | Suderinti bloko nuorodas su jo atributų apibrėžimais: naujos pridedamos su numatytosiomis reikšmėmis, pašalintos išmetamos, pozicijos ir tekstas atstatomi; reikšmės išsaugomos |
| `AUDIT` | | Tikrina atidarytą brėžinį dėl pažeidimų: neskaitmeninių reikšmių, objektų be dydžio, trūkstamų sluoksnių, blokų, stilių ir linijų tipų, blokų, kurie patys į save įeina, bendrų identifikatorių, sugadintų matmenų ir raštų. Surašo rastus dalykus pagal rūšį ir klausia prieš taisydamas; taisymas – vienas atšaukimo žingsnis. |
| `AUNITS` | `ANGUNITS` | Kaip rodomi ir įvedami kampai: dešimtainiai laipsniai, laipsniai-minutės-sekundės arba azimutai, pvz., N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Brėžinio automatinis pildymas įjungtas ar išjungtas, arba išvardyti, ką dabar siūlo brėžinio šablonai. |
| `AUTOCONSTRAIN` | | Pridėti sutapimo, horizontalius ir vertikalius apribojimus ten, kur geometrija jau arti |
| `AUTODIM` | `ADIM` | Matmenys pagal taisykles: bendras dydis, grandinės palei kraštines, angos, skylių skersmenys ir tinklelio tarpai, nekartojant to, kas jau pamatuota. |
| `AUTOSHEET` | `ASH` | Išdėsto lapus pats: parenka popierių ir standartinius masteliai bei įdeda kiekvieną rodinį su antrašte ir titulo bloku. |
| `BATTMAN` | | Bloko atributų tvarkyklė: tvarka, žymos, raginimai, numatytosios reikšmės ir bloko atributų režimai, tada atnaujinamos jo nuorodos |
| `BCLOSE` | | Uždaryti bloko redaktorių: įrašyti bloką arba atmesti pakeitimus |
| `BCONVERT` | | BCONVERT randa pasikartojančią geometriją ir paverčia ją bloko nuorodomis. Pasirinkite pasikartojančius objektus: randamas kiekvienas kitas objektų rinkinys atvirojoje erdvėje, kuris yra ta pati geometrija, perkelta ir pasukta bet kokiu kampu; jei įjungti Veidrodinis arba Keistas mastelis, randami ir veidrodiniai atvaizdai bei kopijos kitu dydžiu. Naujam blokui duokite pavadinimą ir bazinį tašką; pasirinkimas ir kiekviena kopija tampa nuorodomis į jį, kiekviena su savu sukimu ir mastelio dydžiu. Arba pasirinkite Blokas ir nurodykite esamą bloką, kad rastumėte laisvas jo objektų kopijas. Kopija turi turėti tą patį sluoksnį, spalvą, linijos tipą ir linijos storį, nebent Ypatybės nustatytos į Ignoruoti. Užrakintų sluoksnių objektai paliekami nepaliesti. Vienas atšaukimo žingsnis. |
| `BEDIT` | `BE` | Bloko redaktorius: redaguoti bloko objektus ir atributus; BCLOSE įrašo (BE) |
| `BLEND` | | BLEND: spline tarp dviejų atvirų kreivių galų, pasirinktas netoli galų sujungimui. Tęstinumas (CON): Liestinė seka abi kryptis, Sklandus taip pat seka, kaip jos lenkiasi. |
| `BLOCK` | `B`, `BMAKE` | Sukurti bloką iš objektų (jie tampa viena nuoroda) |
| `BLOCKREPLACE` | | BLOCKREPLACE: kiekviena vieno bloko nuoroda tampa kito bloko nuoroda toje pačioje vietoje, su tuo pačiu mastelio dydžiu ir sukimu. Abiejų blokų bendrų atributų reikšmės išsaugomos. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE rodo Blokų skydelį su žymekliu jo filtre. Skydelis rodo kiekvieno bloko paveikslėlį (naujausiai įdėti – pirmi), sąrašu ar tinkleliu; spustelėkite paveikslėlį arba nuvilkite jį ant brėžinio, kad įdėtumėte bloką su INSERT. Po Bibliotekomis pridėkite savo DWG ar DXF failą: jo blokai išvardijami su paveikslėliais ir kopijuojami į šį brėžinį, kai įdedate vieną. CadCraft Studio galima pridėti ir brėžinių aplanką; failai ir aplankai prisimenami. |
| `BOMEDIT` | `BOMCOLUMNS` | Medžiagų sąrašo lentelės stulpeliai, grupavimas, rūšiavimas, pavadinimas, sumos ir pastabos |
| `BOMEXPORT` | | Įrašyti medžiagų sąrašo lentelę kaip .csv failą |
| `BOMTABLE` | `BOM` | Tiesioginė vienos zonos ar viso brėžinio medžiagų sąrašo lentelė |
| `BOMUPDATE` | | Atnaujinti visas medžiagų sąrašo lenteles dabar, net ir užšaldytas |
| `BOMZONE` | `BZONE` | Pavadintas brėžinio plotas medžiagų sąrašui: du kampai, daugiakampis arba uždaro objekto kontūras |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): pasirinkite tašką uždaros srities viduje ir gaukite uždarą polilinija aplink ją. Lankai lieka lankais. Salelės taip pat nubrėžia vidines sritis. |
| `BOX` | | Dėžė: du kampai ir aukštis (3D) |
| `BPARAMETER` | `BPARAM` | Dar neįgyvendinta: parametro (pvz., Matomumo) pridėjimas prie bloko. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Bloko parametrai: pavadinti parametrai su formulėmis ir keli matomumo parametrai viename bloke. Veikia bloko redaktoriuje (priskirti pasirinktus objektus būsenai) ir pasirinktoje nuorodoje (jos pačios reikšmės ir būsenos). |
| `BREAK` | `BR` | Nutraukti liniją, lanką, apskritimą ar polilinija tarp dviejų taškų (BR) |
| `BREAKATPOINT` | | Padalyti liniją, lanką ar polilinija dviem taške |
| `BREAKLINE` | | Nubrėžti liniją su lūžio ženklu; jos dydis ir išplėtimas už galų prisimenami. |
| `BREPLACE` | | BREPLACE pakeičia vieną bloką kitu. Pasirinkti: pasirinkite bloko nuorodas ir nurodykite bloką, kuris bus naudojamas vietoje. Visi: nurodykite bloką ir jo pakaitalą; kiekviena nuoroda visose erdvėse ir kituose blokuose pasikeičia. Nuoroda išlaiko savo vietą, mastelį, sukimą ir sluoksnį, bei abiejų blokų atributų reikšmes; reikšmės, kurių naujas blokas neturi kur dėti, išmetamos ir įvardijamos. |
| `BSEARCH` | | BSEARCH ieško blokų. Pavadinimas: dalis bloko pavadinimo arba šablonas su * ir ?. Atributas: reikšmė (arba TAG=reikšmė), turima nuorodos atributuose. Geometrija: pasirinkite objektus arba vieną bloko nuorodą – išvardijami blokai, kurių forma panaši bent 85 %, geriausi pirmi; dydis, sukimas ir veidrodinis atspindys neskaičiuojami. Atvirojoje erdvėje rastos nuorodos pažymimos, paruoštos kitai komandai. |
| `BURST` | | Išskaidyti bloko nuorodas ir išsaugoti tai, ką sako jų atributai: kiekviena reikšmė tampa tekstu atributo sluoksnyje. |
| `BVHIDE` | `BVH` | Bloko redaktoriuje: paslėpti objektus dabartinėje matomumo būsenoje. |
| `BVSHOW` | `BVSH` | Bloko redaktoriuje: rodyti objektus, kuriuos dabartinė matomumo būsena slepia (jie rodomi išblukę, kad juos būtų galima pasirinkti). |
| `BVSTATE` | `BVS` | Bloko redaktoriuje, bloke su matomumo būsenomis: perjungti būseną arba pridėti, pervadinti ar ištrinti vieną. |
| `CAL` | | Apskaičiuoti ilgį ar skaičių: + − * / ir skliaustai, įvedami bet kur |
| `CENTERLINE` | `CL` | Ašinė linija tarp dviejų linijų: per vidurį tarp jų arba išilgai pusiausvyros, kai jos susiliečia (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Centro žymė: kryžius apskritimo ar lanko centre, su ašinėmis linijomis, tiek kiek išeina už jo (CM) |
| `CHAMFER` | `CHA` | Nuašlifuoti kampą tarp dviejų linijų (D du atstumai, A ilgis ir kampas, P kiekvienas polilinijos kampas) |
| `CHSPACE` | | CHSPACE: perkelti objektus tarp lapo ir modelio per rodinį. Jie keičiami mastelio dydžiu ir pasukami, kad iš kitos pusės atrodytų taip pat. Lape jie eina į modelį; kai dirbate per rodinį (MSPACE), jie ateina į lapą. |
| `CIRCLE` | `C` | Centras ir spindulys, skersmuo, 2 ar 3 taškai |
| `CLASS` | | Įdėti pasirinktus objektus į klasę arba, nieko nepasirinkus, nustatyti aktyvią klasę (? išvardija jas) |
| `CLASSES` | `CLS` | Klasių skydelis: klasės surūšiuoja objektus per sluoksnius; rodyti, slėpti ir stilizuoti jas bei perrašyti kiekviename rodinyje (CLS) |
| `COMMANDLINE` | `CMDLINE` | Prijungti arba atplėšti komandų eilutę, padaryti ją viena eilute, nustatyti jos istorijos eilutes arba atverti istoriją (F2) |
| `COMPARESETTINGS` | `CMPSET` | Palyginti matmenų stilius, teksto stilius, sluoksnius, lapus ar vienetus: du šiame brėžinyje arba šį brėžinį su kitu atvirtu, ir nukopijuoti reikšmę. |
| `CONSTRAINTBAR` | `CBAR` | Rodyti arba slėpti apribojimų juostas (Rodyti visas / Slėpti visas arba pagal objektą) |
| `COPY` | `CO`, `CP` | Kopijuoti objektus tiek kartų, kiek spustelite |
| `COPYBASE` | | Kopijuoti objektus į iškarpinę su bazės tašku, kurį pasirenkate |
| `COPYCLIP` | | Kopijuoti objektus į iškarpinę (Ctrl+C); PASTECLIP juos įdeda |
| `COUNT` | `BCOUNT` | Suskaičiuoti bloko nuorodas: pasirinkite vieną, kad pažymėtumėte ir suskaičiuotumėte visas to bloko nuorodas |
| `COUNTTABLE` | | Įdėti bloko skaičių lentelę |
| `CREDITS` | | Įdeda bibliotekos autorius į brėžinį kaip lentelę. Paleiskite iš naujo, kad lentelė atsinaujintų pagal dabartinius brėžinio elementus. |
| `CURSORSIZE` | | Kryžiuko dydis: 100 nubrėžia jį per visą brėžinį nuo krašto iki krašto (Parametrai › Žymeklis › Visas ekranas) |
| `CUTCLIP` | | Iškirpti objektus į iškarpinę (Ctrl+X): nukopijuoti, tada ištrinti |
| `CYLINDER` | `CYL` | Cilindras: centras, spindulys ir aukštis (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Išvardyti blokus, jų atributus ir objektų savybes kaip lentelę brėžinyje arba CSV faile |
| `DATALINK` | `DL` | Lentelė iš CSV failo, kuris prisimena failą, kad jį būtų galima vėl perskaityti |
| `DATALINKUPDATE` | `DLU` | Perskaityti duomenų ryšio failą iš naujo ir vėl užpildyti jo lenteles |
| `DCALIGNED` | `DCALI` | Dimensinis apribojimas: tikras atstumas tarp taškų, taško ir linijos arba dviejų linijų |
| `DCANGULAR` | `DCANG` | Dimensinis apribojimas: kampas tarp dviejų linijų arba lanko |
| `DCCONVERT` | | Paversti matmenis, nubrėžtus ant apribojamos geometrijos, dimensiniais apribojimais |
| `DCDIAMETER` | `DCDIA` | Dimensinis apribojimas: apskritimo ar lanko skersmuo |
| `DCDISPLAY` | | Rodyti arba slėpti dimensinius apribojimus brėžinyje |
| `DCHORIZONTAL` | `DCHOR` | Dimensinis apribojimas: horizontalus atstumas |
| `DCLINEAR` | `DCLIN` | Dimensinis apribojimas: horizontalus arba vertikalus atstumas nuo vietos, kur jį dedate |
| `DCRADIUS` | `DCRAD` | Dimensinis apribojimas: apskritimo ar lanko spindulys |
| `DCVERTICAL` | `DCVER` | Dimensinis apribojimas: vertikalus atstumas |
| `DELBLOCKS` | | Ištrinti blokus: kiekvieną nuorodą (ir įdėtas, kiekviename lape) bei apibrėžimus |
| `DELCONSTRAINT` | `DELCON` | Pašalinti visus apribojimus (geometrinius ir dimensinius) nuo pasirinktų objektų |
| `DELOPENING` | | Išimti duris ar langą iš sienos. |
| `DESCRIBE` | `DESC` | Pasakyti, ką brėžinyje yra: kiek objektų, kokių, kokio dydžio, kas pasirinkta. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Išvalyti pasirinkimą (Esc) |
| `DETAILS` | `DET` | Jūsų įmonės detalės, surastos pagal tai, ką braižote: rasti, pridėti bloką, išvardyti, pašalinti, įjungti ar išjungti pasiūlymus. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Nubraižyti diagramą iš teksto: Mermaid schemą, PlantUML komponentų diagramą, D2, nuo–iki sąrašą ar draw.io XML kaip redaguojamus blokus ir jungtis |
| `DIMALIGNED` | `DAL`, `DIMALI` | Tikras atstumas tarp dviejų taškų |
| `DIMANGULAR` | `DAN`, `DIMANG` | Kampas tarp dviejų linijų, lanko arba per tris taškus |
| `DIMARC` | `DAR` | Lanko ilgio matmuo: atstumas palei lanką su lanko ženklu (DAR) |
| `DIMASZ` | | Matmenų nustatymas: rodyklės dydis |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Matmenys, sukrauti iš vienos bazinės linijos |
| `DIMBREAK` | `DBREAK` | Nutraukti matmenų ir pratęsimo linijas, kur jos kerta kitus objektus (Auto), tarp dviejų taškų (Rankiniu), arba pašalinti pertraukas |
| `DIMCONSTRAINT` | `DCON` | Dimensiniai apribojimai: tiesiniai, įstrižai, kampiniai, spindulys, skersmuo, konvertuoti |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Matmenų grandinė, kiekvienas nuo paskutinio galo |
| `DIMDEC` | | Matmenų nustatymas: dešimtainių skaičius |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Lanko ar apskritimo skersmuo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Atlaisvinti matmenis nuo objektų, prie kurių jie buvo pririšti (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Keisti matmenų tekstą (Pradžia, Naujas tekstas, Sukti) arba pasvirti pratęsimo linijas (Įstrižas) (DED) |
| `DIMEXE` | | Matmenų nustatymas: pratęsimas už matmenų linijos |
| `DIMEXO` | | Matmenų nustatymas: poslinkis nuo pradžios taško |
| `DIMGAP` | | Matmenų nustatymas: tarpas aplink tekstą |
| `DIMINSPECT` | | Patikros matmuo: rėmelis aplink reikšmę su etikete ir tuo, kaip dažnai detalė tikrinama |
| `DIMJOGGED` | `DJO`, `JOG` | Lūžusio spindulio matmuo: spindulys nubrėžtas nuo arčiau esančio taško, kai centras toli (DJO) |
| `DIMJOGLINE` | `DJL` | Pridėti lūžio ženklą prie tiesinio ar įstrižo matmens linijos, rodantį, kad atstumas nenubrėžtas mastelyje (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontalus ar vertikalus atstumas (R bet kuriam kampui) |
| `DIMLUNIT` | | Matmenų nustatymas: ilgio formatas (1 mokslinis, 2 dešimtainis, 3 inžinerinis, 4 architektūrinis, 5 trupmeninis) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinatės matmuo: X ar Y atstumas nuo taško iki UCS pradžios, ant nuorodos (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Perrašyti matmenų kintamuosius pasirinktiems matmenims nekeičiant jų stiliaus; Išvalyti grąžina stilių (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Lanko ar apskritimo spindulys |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Susieti matmens taškus su objektais, kad jis sektų ir vėl matuotų, kai jie pajuda (DRE) |
| `DIMSCALE` | | Matmenų nustatymas: bendras mastelis (dydžiai × šis) |
| `DIMSPACE` | | Lygūs tarpai tarp lygiagrečių matmenų, matuojami nuo bazinio matmens (0 suderina juos, Auto yra dvigubas teksto aukštis) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Kurti, keisti, nustatyti dabartinį, ištrinti, taikyti ir palyginti pavadintus matmenų stilius (dialogas; -DIMSTYLE komandų eilutėje) |
| `DIMTEDIT` | `DIMTED` | Perkelti matmenų tekstą į kairę, dešinę arba į matmens linijos centrą, arba jį pasukti |
| `DIMTEXTUNIT` | `DTU` | Matmenų tekstas mm, cm, m ar km, arba brėžinio vienetais: pasirinkti matmenys, kitaip nauji (DTU) |
| `DIMTXT` | | Matmenų nustatymas: teksto aukštis |
| `DIST` | `DI` | Atstumas ir kampas tarp dviejų taškų |
| `DISTRIBUTE` | | Tolygiai išdėstyti pasirinktus objektus iš šono į šoną arba aukštyn ir žemyn: lygūs žingsniai tarp centrų arba lygūs tarpai; du kraštiniai lieka |
| `DIVIDE` | `DIV` | DIVIDE (DIV): žymės, perpjaunančios liniją, lanką, apskritimą, polilinija, spline ar elipsę į lygias dalis. Taškai arba, su Bloku, blokas kiekvienoje žymėje. |
| `DOCUMENTS` | `DOCS` | Atverti Dokumentų skydelį: tikrinti brėžinius išimant ir grąžinant, peržiūras, leidimo būsenas ir patvirtinimą projekto aplankui |
| `DOOR` | `DR` | Įdėti duris į sieną. Pusė, kurią spustelite, yra ta, į kurią jos atsidaro. |
| `DRAWORDER` | | Pakeisti piešimo tvarką: atnešti objektus į priekį, nusiųsti į galą, arba padėti juos virš ar po kitais objektais. |
| `DUPLICATE` | `DUP` | Kopija, kuri juda kartu su žymekliu: spustelėkite, kad ją padėtumėte (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Brėžinio savybės: pavadinimas, autorius ir kita, bei jūsų pačių pavadinimų ir reikšmių poros |
| `DXFOUT` | | Atsisiųsti brėžinį kaip DXF R12 (Įrašyti išlaiko savo formatą) |
| `EATTEDIT` | `DDATTE` | Redaguoti bloko nuorodos atributus: reikšmes, tekstą ir savybes, po vieną atributą |
| `ELLIPSE` | `EL` | Ašies galiniai taškai ir kita pusašis |
| `ERASE` | `E`, `DELETE` | Pašalinti objektus |
| `EXPLODE` | `X` | Suskaidyti polilinijas, blokus ir matmenis į dalis |
| `EXPORT` | `EXP` | Įrašyti brėžinio kopiją į failo tipą, kurį rašo priedas |
| `EXPORT3D` | `3DEXPORT` | Eksportuoti 3D modelį: GLB, OBJ arba STL |
| `EXPORTPOINTS` | `EXPPTS` | Įrašyti taškus, o blokų įterpimo taškus su vienu atributu kaip aprašymą, į CSV ar TXT failą (PNEZD, PENZD arba XYZ) BIM ir matavimo programoms |
| `EXTEND` | `EX` | Pailginti objektus iki kitų: spustelėkite arti galo, vilkite per kelis arba Shift+spragtelėkite, kad apkirptumėte |
| `EXTRIM` | | EXTRIM: pasirinkite vieną pjovimo kraštą, tada pusę. Viskas, kas kerta kraštą, apkerpama toje pusėje. Dalys, kurios dings, rodomos judinant žymeklį. |
| `EXTRUDE` | `EXT` | Ištempti uždarus 2D objektus į kūnus (3D) |
| `FIELD` | | Įdėti lauką į tekstą, lentelės langelį ar atributą: data, failo pavadinimas, lapo numeris, brėžinio savybė, objekto plotas ar ilgis arba formulė |
| `FILLET` | `F` | Suapvalinti arba nustatyti kampą tarp dviejų objektų (R spindulys, P kiekvienas polilinijos kampas, M keli) |
| `FIND` | | Rasti ir pakeisti žodžius tekste, atributų reikšmėse ir matmenų tekste |
| `FLATTEN` | | Nustatyti pasirinktų objektų aukštį (Z) ir storį į 0, įskaitant blokus, kuriuos jie naudoja. |
| `FLOOR` | | Pasirinkti aukštą, ant kurio braižyti, pridėti naują arba perkelti ar kopijuoti pasirinkimą į jį. |
| `FLOORLAYERS` | | Paversti aukštus sluoksniais, pavadintais Floor-Layer, failui, kuris eina žmogui be aukštų. |
| `FLOORS` | `FLR` | Atverti Aukštų skydelį: sudėti aukštus vienoje modelio erdvėje. |
| `GCCOINCIDENT` | | Apribojimas: du taškai susitinka arba taškas lieka ant objekto |
| `GCCOLLINEAR` | | Apribojimas: dvi linijos lieka vienoje linijoje |
| `GCCONCENTRIC` | | Apribojimas: du apskritimai ar lankai turi bendrą centrą |
| `GCEQUAL` | | Apribojimas: dvi linijos lieka vienodo ilgio, arba du apskritimai ar lankai – vieno spindulio |
| `GCFIX` | | Apribojimas: taškas ar visas objektas lieka, kur yra |
| `GCHORIZONTAL` | | Apribojimas: linija (arba du taškai) lieka horizontali |
| `GCPARALLEL` | | Apribojimas: dvi linijos lieka lygiagrečios |
| `GCPERPENDICULAR` | | Apribojimas: dvi linijos lieka statiu kampu |
| `GCSYMMETRIC` | | Apribojimas: du taškai, linijos ar apskritimai atsispindi vienas kito atžvilgiu per liniją |
| `GCTANGENT` | | Apribojimas: linija ir apskritimas ar lankas (arba du iš jų) lieka liestinėje |
| `GCVERTICAL` | | Apribojimas: linija (arba du taškai) lieka vertikali |
| `GDSIN` | `GDS` | Peržiūrėti IC išdėstymą (GDSII srauto failą): kiekvienas sluoksnis ir duomenų tipas kaip brėžinio sluoksnis, plokščiai, vartotojo vienetais; tik peržiūrai ir matavimui (laboratorinis bandymas) |
| `GEOMCONSTRAINT` | `GCON` | Geometriniai apribojimai: horizontalūs, vertikalūs, lygiagretūs, liestiniai, sutampantys… |
| `GLBOUT` | | Eksportuoti 3D modelį kaip GLB (glTF) |
| `GRADIENT` | `GD` | Užpildo sritį vienos ar dviejų spalvų gradientu |
| `GRID` | | Nustatyti tinklelį: atstumas tarp linijų, kas N-oji linija yra pagrindinė, ON arba OFF, arba Auto, kad vėl sektų mastelį |
| `GRIDMOVE` | `GM` | Perkelti tinklelio liniją ir kartu tai, kas ant jos kabo: sienos ištempiamos, stulpai, burbulai ir žymos juda, matmenys seka. |
| `GROUP` | `G` | GROUP (G): suteikti pasirinktiems objektams bendrą pavadinimą. Spustelėjus vieną iš jų, pasirenkami visi. Enter prie pavadinimo sukuria grupę be pavadinimo. |
| `GROUPEDIT` | | GROUPEDIT: pakeisti grupę. Pasirinkite vieną iš jos objektų arba nurodykite Pavadinimą, tada Pridėti ar Šalinti objektus, PERvadinti, pakeisti Aprašymą arba nurodyti, ar spustelėjimas pasirenka ją visą. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Užpildyti sritį vientisu užpildu arba raštu: spustelėkite jos viduje arba pasirinkite uždarus objektus (H) |
| `HATCHEDIT` | `HE` | Keisti brūkšniuotę: raštą, mastelį, kampą, pradžią ir jos ryšį su kontūru. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Iš naujo sukuria kontūro polilinijas iš brūkšniuotės, susietas su ja arba ne |
| `HATCHTOBACK` | | Nusiųsti visas brūkšniuotes už visko kito. |
| `HELP` | `?` | Šis sąrašas |
| `HIDEOBJECTS` | | Slėpti pasirinktus objektus iki UNISOLATEOBJECTS. Neišsaugoma su brėžiniu. |
| `HISTORY` | `HIST` | HISTORY (HIST): šio brėžinio versijos – kopijos, saugomos šiame kompiuteryje, kai Studio jį įrašo, ir debesies versijos – atverti, atkurti ir palyginti su pakeistais, spalva rodomais dalykais. |
| `ID` | | Taško koordinatės |
| `IMAGE` | `IM` | Suteikti CadCraft paveikslėlių failus, kuriuos naudoja brėžinys (DWG saugo tik, kur jie buvo). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Įdėti paveikslėlį (PNG arba JPEG) iš failo. |
| `IMAGECLIP` | `ICL` | Apkirpti paveikslėlį stačiakampiu ar daugiakampiu arba pašalinti jo iškirpimą. |
| `IMPORT` | `IMP` | Importuoti priedo skaitomo tipo failą į šį brėžinį |
| `INSERT` | `I`, `DDINSERT` | Įdėti bloką (S mastelis, R sukti); F iš DWG/DXF failo, L iš bibliotekos |
| `INTERSECT` | `IN` | Palikti tik tai, kas bendra kietiesiems kūnams (3D), arba sritį, kurią bendrai turi 2D regionai |
| `ISODRAFT` | | ISODRAFT: izometrinis braižymas įjungtas ar išjungtas arba tiesiai ant Kairės, Viršutinės ar Dešinės plokštumos. Kai jis įjungtas, Ortogonalus ir poliarinis sekimas seka dvi plokštumos ašis, tinklelis piešiamas izometriškai, o ELLIPSE turi Izoapskritimą. |
| `ISOLATEOBJECTS` | `ISOLATE` | Rodyti tik pasirinktus objektus; visa kita šioje erdvėje paslepiama iki UNISOLATEOBJECTS. Neišsaugoma su brėžiniu. |
| `ISOPLANE` | | ISOPLANE: pasirinkti izometrinę plokštumą, kurioje braižyti: Kairė, Viršutinė arba Dešinė. Enter eina į kitą, kaip F5 daro, kai įjungtas izometrinis braižymas. |
| `JOIN` | `J` | Sujungti linijas, lankus ir polilinijas, besiliečiančias galas į galą, į vieną polilinija; linijas vienoje linijoje – į vieną liniją (J) |
| `LASER` | `LASERCUT` | Atverti Lazerio skydelį: siųsti sluoksnius lazerinei pjovimo ar graviravimo mašinai (GRBL G-kodas) |
| `LASSOMODE` | | Spaudimas ir vilkimas nubrėžia lasą (1) arba stačiakampį (0) |
| `LAYDEL` | | Ištrinti sluoksnį ir visus jame esančius objektus (modelyje, lapuose ir blokuose) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Atverti sluoksnių tvarkyklę: visi sluoksniai vienoje lentelėje |
| `LAYERPANEL` | | Rodyti sluoksnių skydelį |
| `LAYFRZ` | | Užšaldyti kiekvieno pasirinkto objekto sluoksnį |
| `LAYGROUP` | `LG` | Sugrupuoti sluoksnius į aplankus Sluoksnių skydelyje. |
| `LAYISO` | | Izoliuoti pasirinktų objektų sluoksnius (kiekvienas kitas sluoksnis išjungtas) |
| `LAYLOCKFADE` | | Nustatyti, kiek išbluksta objektai užrakintuose sluoksniuose ir ar spustelėjimas gali juos pasirinkti. |
| `LAYMCUR` | | Padaryti pasirinkto objekto sluoksnį dabartiniu |
| `LAYMRG` | | Sujungti sluoksnius: jų objektai perkeliami į tikslinį sluoksnį, o sujungti sluoksniai išnyksta |
| `LAYOFF` | | Išjungti kiekvieno pasirinkto objekto sluoksnį |
| `LAYON` | | Įjungti visus sluoksnius |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Naujas lapas su rėmeliu, titulo bloku ir rodiniu |
| `LAYTHW` | | Atšaldyti visus sluoksnius |
| `LAYUNISO` | | Vėl įjungti sluoksnius, kuriuos LAYISO išjungė |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Konvertuoja tekstą, įvestą senais vietnamietiškais šriftais (TCVN3 / ABC šriftais, pvz., .VnTime, ir VNI šriftais, pvz., VNI-Times), į Unicode. Toks tekstas jau rodomas teisingai; ši komanda jį perrašo visam laikui, su skaičiumi ir vienu atšaukimo žingsniu. |
| `LENGTHEN` | `LEN` | Pailginti arba sutrumpinti linijas, lankus ir polilinijas: per kiekį, procentą, iki visos sumos arba vilkimu (LEN) |
| `LIBRARY` | `LIB` | Bibliotekos skydelis: įdėti elementus, tikrinti atnaujinimus, autoriai |
| `LIMITS` | | Nustatyti brėžinio ribas: ON, OFF arba apatinį kairįjį ir viršutinį dešinįjį kampus. Su ribomis ON taškai už jų atmetami |
| `LINE` | `L` | Tiesūs segmentai, kiekvienas savaime objektas |
| `LINETYPE` | `LT`, `CELTYPE` | Linijos tipas naujiems objektams (pagal sluoksnį, pagal bloką arba pavadintas) |
| `LINKVIEWS` | `SYNCVIEWS` | Judinti ir didinti visus skydelius kartu (padalytas ekranas), kad palygintumėte du brėžinius ar peržiūras |
| `LISPEDIT` | `VLIDE` | LISPEDIT (arba VLIDE) atveria LISP redaktorių: langą rutinai rašyti, įkelti ir išbandyti. Įkelti į brėžinį nuskaito kiekvieną formą, kaip APPLOAD daro su failu, ir sukuria jo komandas. Vykdyti pasirinkimą įvertina pasirinktas formas arba formą, kurioje yra žymeklis. Konsolė rodo, ką rutina išvedė, ir kiekvieną klaidą su eilute. Atitinkamas skliaustas žymimas rašant, o Enter įtraukia naują eilutę. Naujas, Atverti ir Įrašyti veikia su .lsp failu. Sąrašai šalia teksto rodo funkcijas, kurias rutina apibrėžia, tas, kurias ji kviečia ir kurių šis LISP dar neturi, ir visas jos turimas funkcijas. Langas neblokuoja brėžinio, todėl rutina gali prašyti taškų; Stop arba Esc baigia veikiančią rutiną. |
| `LIST` | `LI`, `LS` | Aprašyti objektus istorijoje |
| `LTSCALE` | `LTS` | Brėžinio linijos tipo mastelis (kiekvienas brūkšnys ir tarpas dauginamas iš jo) |
| `LWDISPLAY` | `LWT` | Rodyti arba slėpti linijų storius ekrane (LWT mygtukas būsenos juostoje) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Linijos storis naujiems objektams (pagal sluoksnį, pagal bloką, numatytasis arba mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Žemėlapio sluoksniai po modelio erdve: brėžinio koordinačių sistema, plytelės, WMS, WMTS, ArcGIS, paveikslėliai |
| `MASSPROP` | | MASSPROP: pasirinktų sričių ir uždarų objektų skerspjūvio savybės: plotas, perimetras, centroidas, inercijos momentai ir sandaugos, inercijos spinduliai ir pagrindinės ašys. Tiksliai linijoms ir lankams. Ataskaitą gali įrašyti į tekstinį failą. |
| `MATCHPROP` | `MA`, `PAINTER` | Suderinti savybes: nukopijuoti vieno objekto sluoksnį, spalvą ir kitas savybes kitiems (MA) |
| `MEASURE` | `ME` | MEASURE (ME): žymė kas nurodytą ilgį palei liniją, lanką, apskritimą, polilinija, spline ar elipsę, pradedant nuo galo arčiausiai jūsų taško. Taškai arba, su Bloku, blokas kiekvienoje žymėje. |
| `MEASUREGEOM` | `MEA` | Išmatuoti atstumą, spindulį, kampą ar plotą (MEA) |
| `MINSERT` | | MINSERT: įdėti bloką eilėmis ir stulpeliais vienu kartu. Kiekvienas yra atskira nuoroda, todėl bet kurį galima perkelti ar ištrinti. |
| `MIRROR` | `MI` | Atspindėti objektus per liniją |
| `MLEADER` | `MLD`, `MLEAD` | Daugiašalinė nuoroda: rodyklė, nuoroda ir pastaba kaip vienas objektas (MLD) |
| `MLEADERALIGN` | `MLA` | Sulygiuoti daugiašalines nuorodas su viena iš jų pagal kryptį, lygiais tarpais arba paskirstyti tarp dviejų taškų (MLA) |
| `MLEADERCOLLECT` | `MLC` | Surinkti kelias daugiašalines nuorodas į vieną: jų blokai eilėje ar stulpelyje, arba jų pastabos viena po kitos (MLC) |
| `MLEADEREDIT` | `MLE` | Pridėti nuorodų linijas prie daugiašalinės nuorodos arba jas pašalinti; perjungti jos turinį tarp teksto ir bloko (MLE) |
| `MLINE` | | Nubrėžti lygiagrečias linijas kartu, sujungtas kampuose. |
| `MOVE` | `M` | Perkelti objektus pagal bazinį tašką ir antrą tašką |
| `MSPACE` | `MS` | Dirbti su modeliu per atidaryto lapo rodinį (arba dukart spustelėti rodinio viduje). |
| `MTEXT` | `MT`, `T` | Paragrafo tekstas: vilkite jo plotį, tada rašykite vietoje; Enter pradeda naują pastraipą (T) |
| `MVIEW` | `MV` | Rodinys į modelį lape |
| `NAMEDVIEW` | `NV`, `VIEWS` | Pavadinti rodiniai: įrašyti ekrane esantį vaizdą (arba langą) pavadinimu ir grįžti prie jo (NV) |
| `NCOPY` | | Nukopijuoti objektus iš bloko nuorodos arba susieto brėžinio į brėžinį, neišskaidant jo. |
| `NEARBY` | | Pasakyti, kas yra arti žymeklio, arčiausias pirmas, su atstumu ir puse. |
| `NEW` | | Pradėti naują brėžinį |
| `OBJECTSCALE` | `OBJSCALE` | Anotacinio teksto ir matmenų anotacijos mastelis: pridėti mastelį, ištrinti, pridėti dabartinį arba išvardyti (kiekvienas rodinys rodo juos pagal savo mastelį) |
| `OBJOUT` | | Eksportuoti 3D modelį kaip OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Biuro standartas: teksto aukščiai popieriuje, sluoksniai, titulo bloko laukai ir šablonai viename įraše. Parodo galiojantį ir iš kur jis kilęs; Importuoti .json įrašą į šį brėžinį, pridėti trūkstamus biuro sluoksnius, išvardyti titulo bloko laukus. |
| `OFFSET` | `O` | Lygiagrečios kopijos per atstumą |
| `OFFSETGAPTYPE` | | OFFSETGAPTYPE: kaip OFFSET uždaro tarpus išoriniuose polilinijos kampuose. 0 pratęsia atkarpas, 1 prideda lanką, 2 prideda tiesų nupjovimą. Išsaugoma šiai sesijai. |
| `OLELIST` | `OLES` | Išvardyti OLE objektus, kuriuos turi brėžinys, ir įdėti vieno paveikslėlio kopiją ten, kur pasirinksite |
| `OPEN` | | Atverti DWG ar DXF iš šio kompiuterio |
| `OPENIN3D` | | Atverti šį brėžinį 3D modeliavimo programoje naujame skirtuke (nieko neįkeliama) |
| `OPTIONKEYS` | `OPTKEYS` | Suteikti komandų parinktims savo raides (ARRAY.PO, P) viename tekstiniame faile |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Atverti objektų prilipimo meniu: pasirinkti, kurie prilipimai įjungti. Taip pat dešinysis pelės mygtukas ant Prilipimo būsenos juostoje. |
| `OVERKILL` | | Ištrinti dublikatus ir sujungti persidengiančias ar galas į galą linijas ir lankus pagal toleranciją. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametrų skydelis: vartotojo parametrai ir dimensiniai apribojimai vienoje lentelėje |
| `PARTSLIST` | `PLIST` | Detalių sąrašo lentelė: kiekviena standartinė detalė ir plieno profilis, įdėtas iš bibliotekos |
| `PASTEAREA` | `PAREA` | Įklijuoti sritį, nukopijuotą MarkupCraft (Copy area), tikru dydžiu kaip paveikslėlį. |
| `PASTEBLOCK` | | PASTEBLOCK: įklijuoti tai, ką nukopijavote, kaip vieną bloką. Blokas gauna savo pavadinimą; RENAME suteikia jūsų. |
| `PASTECLIP` | | Įklijuoti iškarpinę: ji seka žymeklį, spustelėkite, kur ji eina (Ctrl+V) |
| `PASTEORIG` | | Įklijuoti iškarpinę koordinatėse, iš kurių ji buvo nukopijuota (Ctrl+Shift+V) |
| `PDF` | | Suteikti CadCraft PDF failus, kuriuos naudoja brėžinio pagrindai |
| `PDFADJUST` | | Išblukinti, kontrastuoti, nustatyti vienspalvį ar išjungti PDF pagrindą |
| `PDFATTACH` | `PDFATT` | Pridėti PDF puslapį kaip pagrindą (PDFATTACH) |
| `PDFCLIP` | | Apkirpti PDF pagrindą stačiakampiu ar daugiakampiu |
| `PDFIMPORT` | `PDFIM` | Paversti PDF puslapio linijas, užpildus ir tekstą brėžinio objektais (PDFIMPORT) |
| `PDFLAYERS` | | Įjungti arba išjungti PDF pagrindo sluoksnius |
| `PEDIT` | `PE` | Redaguoti polilinija: uždaryti, atverti, sujungti, plotis, pritaikyti kreivę, spline kreivė, atkreivinti, linijos tipo generavimas, apversti; linijos, lankai ir spline gali būti paversti polilinijomis |
| `PENPRESSURE` | | Ar rašiklio spaudimas nustato SKETCHFIX ir SKETCHLIVE kuriamų linijų storį (pagal numatytuosius įjungta). Išsaugoma šioje naršyklėje. |
| `PHOTOSKETCH` | `PSK` | Paverčia nuotrauką ranka nupieštos skicos ant popieriaus į linijas ir lankus pagal mastelį, ištiesina perspektyvą ir kiekvienai rašiklio spalvai duoda savo sluoksnį. |
| `PICKSTYLE` | | PICKSTYLE: ar pasirinkus vieną grupės objektą pasirenkama visa grupė (1, pradžios nustatymas), ar tik tas objektas (0). Išsaugoma šiai sesijai. |
| `PLAN` | | Pasukti vaizdą taip, kad UCS X ašis (dabartinė ucs, išsaugota Ucs arba Pasaulis) būtų horizontali ekrane. Nieko brėžinyje nejuda. |
| `PLINE` | `PL` | Polilinija iš tiesių ir lankų segmentų |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Spausdinti į PDF: lapas arba modelis pagal mastelį |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Spausdinimo stiliaus lentelės: nustatyti, kaip kiekviena spalva spausdinama (spalva, juoda, pilka, rašalas, linijos storis); saugoma kartu su brėžiniu (STYLESMANAGER) |
| `POINT` | `PO` | Taškų objektai |
| `POINTCLOUD` | `PC` | Pridėtas taškų debesis: pjūvis, aukštis, storis, spalva, dydis, matomumas, mastelis, atjungimas |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Pridėti taškų debesį (LAS, LAZ, XYZ, PTS) po brėžiniu |
| `POLARANG` | | Poliarinio sekimo žingsnis laipsniais (90, 45, 30, 22,5, 15 …) |
| `POLYGON` | `POL` | Taisyklingas daugiakampis |
| `PRESSPULL` | | Stumti arba traukti kietojo kūno paviršių (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Atverti Ypatybių skydelį (taip pat Ctrl+1 arba dukart spustelėti objektą) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Sulankstyti Ypatybių skydelį iki lango krašto |
| `PSPACE` | `PS` | Palikti rodinį, su kuriuo dirbate, ir grįžti į lapą (arba dukart spustelėti už jo). |
| `PUBLISH` | `-PUBLISH` | Spausdinti kelis arba visus lapus į vieną PDF (puslapis ir žymė kiekvienam lapui) |
| `PURGE` | `PU` | Pašalinti blokų apibrėžimus, kurių niekas nenaudoja |
| `QDIM` | | Greitas matmuo: išmatuoti kelis objektus vienu kartu (tęstinis, bazinis, pakopinis, ordinatės, spindulys ar skersmuo) |
| `QPMODE` | `QP` | Greitosios ypatybės prie žymeklio įjungtos ar išjungtos |
| `QSELECT` | `QS` | Greitas pasirinkimas: visi tipo objektai, kurių sluoksnis, spalva, dydis ar pavadinimas atitinka (QS) |
| `RASTERSNAP` | | Įjungti arba išjungti prilipimą prie nuskenuotų lapų linijų. |
| `RAY` | | Spindulys: konstrukcinė linija iš taško, be galo viena kryptimi. |
| `RECOVER` | | Atverti pažeistą DXF ar DWG: praleidžia tai, ko neįmanoma perskaityti, vietoj to, kad atmestų failą, pasako, kas praleista, tada patikrina ir taiso brėžinį kaip AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Uždara polilinija iš dviejų kampų |
| `REDLINE` | `RDL` | Pažymėjimas į revizijos versiją: skaityti MarkupCraft pažymėjimų paketą, priimti arba atmesti kiekvieną pakeitimą, apdebesinti priimtus su revizijos žurnalu ir įrašyti atsakymų failą (RDL) |
| `REDO` | | Atkurti tai, kas buvo anuliuota |
| `REFCLOSE` | | Baigti bloko redagavimą vietoje: įrašyti jį arba atmesti pakeitimus |
| `REFEDIT` | | Redaguoti bloką vietoje, kur yra jo nuoroda, o likusi brėžinio dalis išblukusi; REFCLOSE įrašo |
| `REGEN` | `RE` | Perkurti tai, kas nubrėžta šiame skirtuke, iš brėžinio |
| `REGENALL` | `REA` | Perkurti tai, kas nubrėžta kiekviename skirtuke, skydelyje ir atvirame brėžinyje |
| `REGION` | `REG` | REGION (REG): padaryti plokščias sritis (regionus) iš uždarų objektų arba iš linijų, lankų ir polilinijų, kurios uždaro kilpą galas į galą. UNION, SUBTRACT ir INTERSECT tada sujungia regionus, o MASSPROP pateikia jų skerspjūvio savybes. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Susieti kelis skenavimus: išdėstyti juos viename rėmelyje pagal pasirinktų taškų poras arba taikinius, patikslinti ICP, eksportuoti vieną LAS arba E57 |
| `REINIT` | | Įkelti savo slapyvardžių failą iš naujo |
| `RENAME` | `-RENAME`, `REN` | Pervadinti sluoksnį arba bloką (visi objektai ar nuorodos seka) |
| `REVCLOUD` | `RC` | Revizijos debesis: apvalinti stačiakampį, daugiakampį, laisvą kelią ar objektą (RC) |
| `REVOLVE` | `REV` | Sukti uždarus 2D objektus apie ašį į kūnus (3D) |
| `ROTATE` | `RO` | Sukti objektus apie bazinį tašką |
| `SAMPLES` | `SAMPLE` | Atverti vieną iš CadCraft pavyzdinių brėžinių (architektūrinį rinkinį, kaip pastatyta), kad pasimokytumėte |
| `SAVE` | `QSAVE` | Atsisiųsti brėžinį jo formatu (DWG arba DXF) |
| `SAVEAS` | | Atsisiųsti brėžinį kaip DWG arba DXF: pasirinkti, kurį |
| `SAYSEL` | | Pasakyti, kas pasirinkta, po vieną sakinį kiekvienam. |
| `SCALE` | `SC` | Keisti objektų mastelį apie bazinį tašką |
| `SCALELISTEDIT` | `SCALELIST` | Pridėti, redaguoti ir ištrinti brėžinio savus mastelius; jie rodomi rodinių ir spausdinimo mastelių sąrašuose ir išsaugomi faile (SCALELIST) |
| `SCANALIGN` | `SCL` | Sulygiuoti nuskenuotą lapą su dviem taškais: perkelti, pasukti ir, jei pasirinksite, keisti mastelį. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Įdėti nuskenuotą brėžinį: PNG, JPEG ar TIFF (vienas puslapis arba visi daugiapuslapio failo puslapiai) arba PDF puslapį, kuris yra paveikslėlis. |
| `SCANCLEAN` | `SCC` | Paversti nuskenuotą lapą juodu baltu ir pašalinti dėmes. |
| `SCANCROP` | `SCR` | Apkirpti nuskenuotą lapą iki lango. |
| `SCANDESKEW` | `SCD` | Rasti kampą, kuriuo guli nuskenuoto lapo ilgos linijos, ir atsukti lapą tiesiai, kai priimate kampą. |
| `SCANERASE` | `SCE` | Ištrinti nuskenuoto lapo sritį: stačiakampį, daugiakampį ar lasą. |
| `SCANINFO` | `SCI` | Rodyti nuskenuoto lapo originalų failą ir nuo to laiko atliktus žingsnius. |
| `SCANSCALE` | `SCS` | Nustatyti nuskenuoto lapo mastelį: pasirinkti du jo taškus ir įvesti tikrą atstumą tarp jų. |
| `SCANTRACE` | `SCT` | Nubrėžti nuskenuoto lapo linijas ir lankus į naują sluoksnį, su nustatyta tolerancija. Tekstas ir brūkšniavimas lieka rastriniai. |
| `SELECT` | | Pasirinkti objektus dabar (P, Ankstesnis, kitoje komandoje) |
| `SELECTALL` | `AI_SELALL` | Pasirinkti kiekvieną objektą, kurį galite redaguoti šiame skirtuke (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Pasirinkti kiekvieną objektą, panašų į tuos, kuriuos pasirenkate: tas pats tipas, sluoksnis ir spalva (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Rodo Lapų rinkinio skydelį: lapai iš daugelio brėžinių, sunumeruoti, paskelbti kaip vienas PDF. |
| `SHORTCUTS` | `KEYS` | Suteikti bet kuriai komandai savo klavišą (Ctrl ar Alt su raide arba laisvas funkcinis klavišas), išsaugotą šioje naršyklėje ar darbalaukio programoje. |
| `SHXFONTS` | `SHX` | Suteikti CadCraft SHX šriftus iš aplanko ar failų, kad teksto stiliai, kurie juos nurodo, būtų piešiami jais (sąrašas, pašalinti, atvirkštinis) |
| `SKETCHFIX` | `SKF` | Piešti laisvas linijas; kiekviena tampa švaria linija, apskritimu, lanku, stačiakampiu ar polilinija, sulygiuota ir sujungta su kitomis. |
| `SKETCHLIVE` | `SKL` | Skicuoti rašikliu: kiekvienas brūkšnys tampa tiksliu linijos, apskritimo, lanko ar stačiakampio, kai pakeliate rašiklį, prisegtu prie brėžinio, su dydžiu, kurį galima perrašyti. |
| `SPLINE` | `SPL` | Nubrėžti spline per taškus (arba su kontroliniu daugiakampiu) arba paversti polilinija |
| `SPLINEDIT` | `SPE` | Redaguoti spline: pritaikyti taškus, kontrolinius taškus ir svorius, atverti ar uždaryti, apversti arba paversti polilinija |
| `SPLIT` | | Padalyti brėžinio sritį į skydelius (kaip VPORTS modelyje; taip pat iš lapo) |
| `STEELMEMBER` | `SMEMBER` | Plieninis elementas 3D iš standartinio profilio: du taškai (sija) arba bazinis taškas ir aukštis (stulpas) |
| `STLOUT` | | Eksportuoti 3D modelį kaip STL (milimetrais) |
| `STRETCH` | `S` | Ištempti: vilkite kryžminį langą per galus, kad perkeltumėte; viduje esantys objektai juda, likusieji lieka (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Teksto stiliai: šriftas, aukštis, plotis ir nuolydis, kuriuos gauna naujas tekstas (dialogas; -STYLE komandų eilutėje) |
| `SUBTRACT` | `SU` | Atimti kietuosius kūnus iš kitų (3D) arba 2D regionus iš regionų |
| `SWBOUT` | `SWMACRO` | Atsisiųsti makrokomandą SolidWorks (.swb), kuri atkuria modelį kaip vieną apribotą eskizą |
| `SWEEP` | | Ištempti uždarus 2D objektus palei kelią (linija, polilinija, lankas, apskritimas) į kūnus (3D) |
| `TABLE` | `TB` | Sukurti lentelę: eilutės ir stulpeliai arba iš skaičiuoklės langelių iš iškarpinės ar CSV failo |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Redaguoti lentelę: rašyti langelyje, įdėti ir ištrinti eilutes bei stulpelius, dydžius, sujungtus langelius, lygiavimą |
| `TABLEEXPORT` | | Įrašyti tai, ką rodo lentelė, kaip CSV failą |
| `TABLEPASTE` | `PASTETABLE` | Sukurti lentelę iš skaičiuoklės langelių iš iškarpinės |
| `TABLESTYLE` | `TS` | Lentelių stiliai: teksto aukščiai, lygiavimas, paraštė ir kraštinės antraštės, antraštės ir duomenų eilutėms |
| `TAGS` | | Žymos ant bloko nuorodų: apibrėžti žymą (tipas, leidžiamos reikšmės, blokai, kuriems taikoma), nustatyti ją pasirinktoms nuorodoms ir jas išvardyti kaip tvarkaraštį, kurį galima įrašyti kaip CSV. |
| `TEXT` | `DT`, `DTEXT` | Vienos eilutės tekstas; Enter pradeda kitą eilutę |
| `TEXTEDIT` | `ED`, `DDEDIT` | Redaguoti tekstą vietoje: pasirinkti tekstą (arba dukart jį spustelėti) (ED) |
| `TEXTMASK` | `TMASK` | Padėti fono kaukę už teksto (brėžinio fonas arba spalva) arba ją nuimti. |
| `TEXTTOFRONT` | | Iškelti visą tekstą, matmenis ir nuorodas prieš visa kita. |
| `TOOLBAR` | | Pasirinkti, ką rodo įrankių juostos mygtukai: piktogramas ir tekstą, tik piktogramas ar tik tekstą (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Padėti įrankių juostą viršuje, apačioje, kairėje arba dešinėje lango (TBDOCK) |
| `TOOLBARROWS` | | Pasirinkti, kiek eilučių naudoja įrankių juosta: suvynioti pagal vietą, 2 arba 1 (Shift+Ctrl+F1) |
| `TOPAREA` | | Padaryti juostas virš brėžinio standartines arba kompaktiškas |
| `TOUCHCROSSHAIR` | `TCX` | Poslinkio kryžiukas braižymui pirštu: vienas pirštas perkelia kryžiuką, kuris yra virš jo ir šalia, kad pirštas nedengtų pasirinkimo taško. Pakėlus pirštą nieko nepasirenkama; spustelėjimo mygtukas arba bakstelėjimas antru pirštu pasirenka ties kryžiuku, o laikant Spragtelėjimą judinant vilkiama. Ilgas paspaudimas arba Enter mygtukas yra Enter. Du pirštai slenka ir didina. Parinktys: ON, OFF, Auto (įjungta tik tada, kai pirštas yra vienintelis rodyklė), Atstumas, Pusė. |
| `TOUR` | `TUTORIAL` | Pakartoti šešių žingsnių pirmo brėžinio ekskursiją |
| `TRIM` | `TR` | Apkirpti objektus iki vietos, kur juos kerta kiti: spustelėkite gabalėlį, vilkite per kelis arba Shift+spragtelėkite, kad pratęstumėte |
| `TRIMEXTENDMODE` | | Kaip TRIM ir EXTEND pradeda: 1 Greitas (kiekvienas objektas yra pjovimo kraštas ar riba), 0 Standartinis (pirmiausia pasirenkami kraštai) |
| `TTR` | | Apskritimas, liečiantis du objektus, su jūsų nurodytu spinduliu (tas pats kaip CIRCLE T). |
| `TURNLEFT` | | Pasukti vaizdą 90° į kairę (prieš laikrodžio rodyklę): UCS Z -90, ir vaizdas seka. Nieko brėžinyje nejuda. |
| `TURNRIGHT` | | Pasukti vaizdą 90° į dešinę (pagal laikrodžio rodyklę): UCS Z 90, ir vaizdas seka. Nieko brėžinyje nejuda. |
| `TURNWORLD` | | Grįžti į pasaulį: UCS Pasaulis, ir vaizdas vėl horizontalus. |
| `TXT2MTXT` | `T2M` | Sujungti vienos eilutės tekstus į vieną paragrafo tekstą, iš viršaus į apačią. |
| `UCS` | | Jūsų koordinačių sistema: pradžios taškas ir X ašis (pradžia, Z kampas, 3taškai, OBjektas, Ankstesnis, Pasaulis, NAmed). Taškai, kuriuos įvedate, ortogonalumas, poliarinis sekimas, tinklelis ir naujas tekstas seka ją; vaizdas pasisuka taip, kad jo X ašis būtų horizontali. Nieko brėžinyje nejuda. |
| `UNDO` | `U` | Anuliuoti paskutinę komandą |
| `UNGROUP` | | UNGROUP: išardyti grupes. Pasirinkite grupių objektus arba nurodykite Pavadinimą. Objektai lieka brėžinyje. |
| `UNION` | `UNI` | Sujungti kietuosius kūnus į vieną (3D) arba 2D regionus į vieną regioną |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Vėl rodyti visus objektus, paslėptus su ISOLATEOBJECTS arba HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kaip rodomi ir įvedami ilgiai: dešimtainiai, pėdos ir coliai, trupmenos (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Vėl apskaičiuoti laukus ir pasirinkti, kada jie atsinaujina patys |
| `USDOUT` | | Eksportuoti 3D modelį kaip USD (.usda tekstas, .usdc dvejetainis arba .usdz paketas) |
| `VIEW` | `-VIEW`, `V` | Standartiniai 3D vaizdai, perspektyva ar lygiagretus (3D) |
| `VIEWBASE` | `FLATSHOT` | Padėti plokščią 2D kietųjų kūnų vaizdą (priekis, viršus, šonas ar izometrinis, paslėptos linijos brūkšniuotos) lape ar modelyje |
| `VIEWLABEL` | `VL` | Rodinio pavadinimas lape, rodantis jo rodinio vardą, ir keičiasi su juo. |
| `VOICE` | | Įjungti arba išjungti balsu įvedamas komandas. Atpažįstamos šiame kompiuteryje. |
| `VPCLIP` | | Apkirpti lapo rodinį uždaru objektu arba nubrėžtu daugiakampiu; Delete vėl padaro stačiakampį |
| `VPLAYER` | | Užšaldyti ar atšaldyti sluoksnius tik kai kuriuose rodiniuose (Freeze, Thaw, Reset) ir pasirinkti, kurie sluoksniai naujuose rodiniuose pradeda užšaldyti (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Padalyti brėžinio sritį į skydelius, kiekvienas su savo vaizdu (lape: rodinys, kaip MVIEW) |
| `VPVIEW` | | Nustatyti, ką rodo rodinys: pasirinkti langą modelyje |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D vaizdo vizualinis stilius: šešėliuota, kraštai, paslėpta linija, karkasas, rentgenas |
| `WALL` | `WA` | Nubrėžti 2D sienas kaip polilinija. Jos susijungia ir palaiko duris bei langus. |
| `WALLARC` | `WARC` | Nubrėžti sienų lanką. Plano sienos tiesios, todėl lankas nubrėžiamas kaip trumpos tiesios sienos (po 15 laipsnių), kurios susijungia. |
| `WALLDELSEG` | | Ištrinti sienos gabalą tarp dviejų taškų. Likusi dalis lieka kaip viena ar dvi sienos. |
| `WALLDIM` | | Įvesti naują matmens reikšmę: siena jo tolimame gale perkeliama statmenai sau, siena pirmame gale išlieka, o prie jos prijungtos sienos seka. |
| `WALLDISJOIN` | | Pasirinkite sieną arti vieno galo, kad uždraustumėte jungimus tame gale: galas nubrėžiamas statmenai ir niekas jo nesekam. Vėl pasirinkite, kad leistumėte. |
| `WALLGRID` | | Užrakinti sieną prie tinklelio linijos: išilgai jos arba vienu galu ant jos. Perkelkite liniją su GRIDMOVE ir siena seks. |
| `WALLHOLD` | | Lygiuoti ir užrakinti: siena išlaiko vietą prie kitos sienos (ant jos linijos arba nurodytu atstumu). Jei viena juda, kita seka. |
| `WALLHOLDDIM` | | Užrakinti atstumą tarp dviejų lygiagrečių sienų. Jei viena juda, kita seka, kad jį išlaikytų. |
| `WALLHOLDS` | | Išvardyti sienų užraktus. |
| `WALLJOINS` | | Suteikti kiekvienai senesnio brėžinio sienai jos ID ir išsaugoti jungimus tarp jų. Tai taip pat įvyksta pirmą kartą, kai ką nors pakeičiate. |
| `WALLJOINSTYLE` | | Spustelėkite kampą, kur dvi sienos susijungia galas į galą, kad pakeistumėte jo nubrėžimą: įstrižai, plokščiai, nupjauti statmenai. T perjungia, kuri siena eina per. |
| `WALLOFFSET` | `WO` | Perkelti sieną statmenai sau per atstumą (prie jos prijungtos sienos seka) arba padaryti kopiją tame atstume. |
| `WALLPICK` | | Padaryti sienas ant linijos ar polilinijos brėžinyje, su prie jos prijungtomis linijomis, jei pasakysite Taip. |
| `WALLPOLY` | `WP` | Nubrėžti sienas aplink taisyklingą daugiakampį su 3–64 kraštinėmis, kaip POLYGON. |
| `WALLRECT` | `WR` | Nubrėžti keturias sujungtas sienas nuo dviejų priešingų kampų, kaip RECTANG. |
| `WALLREJOIN` | | Padaryti dvi sienos dalis vėl viena siena. Pirmoji išlaiko savo vietą brėžinyje. |
| `WALLROT` | | Nubrėžti keturias sujungtas sienas kaip stačiakampį, pasuktą bet kokiu kampu: pirmoji kraštinė, tada kiek toli išeina kita. |
| `WALLSPLIT` | `WS` | Padalyti sieną dviem taške arba ten, kur kita siena kerta. Dalys lieka sujungtos, nebent prašote tarpo ar laisvų galų. Durys ir langai eina su savo dalimi. |
| `WALLSPLITGAP` | | Padalyti sieną palikdami tarpą: įveskite tarpą, pasirinkite sieną, tada tašką. Dalys išlaiko laisvus galus ir gali būti vėl sujungtos. |
| `WALLSTRETCH` | | Ištempti langu: sienų galai viduje juda, visiškai viduje esančios sienos juda visos, o sienos, kurios įsiremia į jų šonus, slysta kartu. |
| `WALLTAN` | | Tęsti sieną lanku, kuris išeina iš jos palei sieną (nubrėžiamas kaip trumpos tiesios sienos). |
| `WALLTRACE` | | Padaryti sienas aplink mažiausią uždarą linijų ir sienų plotą aplink spragtelėtą tašką. |
| `WALLUNHOLD` | | Nuimti užraktus nuo sienos (ir kitų sienų užraktus prie jos). |
| `WBLOCK` | `W`, `-WBLOCK` | Įrašyti bloką, kai kuriuos objektus arba visą brėžinį į naują DWG ar DXF failą (W) |
| `WEDGE` | `WE` | Pleištas: du kampai ir aukštis; jis nusileidžia nuo pirmojo kampo (3D) |
| `WHEREAMI` | `WHERE` | Pasakyti, kur yra žymeklis. |
| `WHOHAS` | | Pasakyti, kas turi atvirą brėžinį. CadCraft Studio prie kiekvieno atvirą brėžinio failo laiko mažą užrakto failą (Plan.dwg.cclock: kas, nuo kada, kuri versija) ir pašalina jį uždarius. Parinktys: Dabartinis, Failas, Aplankas, Kelias, Vardas. Užraktas, neatnaujintas penkias minutes, laikomas pasenusiu. Naršyklėje neprieinama. |
| `WINDOW` | `WN` | Įdėti langą į sieną. |
| `XATTACH` | `XA` | Susieti kitą DWG ar DXF su šiuo brėžiniu, rodomą tik skaitymui (XREF išvardija ir perkrauna juos) |
| `XCLIP` | `XC` | Apkirpti bloko nuorodas ir susietus brėžinius stačiakampiu ar daugiakampiu arba pašalinti iškirpimą. |
| `XLINE` | `XL` | Konstrukcinė linija, be galo į abi puses: per du taškus, horizontali, vertikali, kampu, dalijanti kampą pusiau arba nuo linijos poslinkiu. |
| `XREF` | `XR`, `-XREF` | Susieti brėžiniai (išorinės nuorodos): sąrašas, prijungti, perkrauti, susieti, atjungti |
| `ZOOM` | `Z` | Visas brėžinys arba langas |
