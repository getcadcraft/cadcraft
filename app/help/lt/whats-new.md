---
title: Kas naujo 0.7 versijoje
summary: PDF pagrindai ir PDF importas, nuskenuoti brėžiniai su automatiniu atvaizdavimu, tikri splainai su SPLINE, SPLINEDIT ir PEDIT, matmenų stilių tvarkytuvė, tekstas, kuris išlaiko savo formatavimą, WBLOCK ir jūsų mastelius, 3D kietieji kūnai iš kitų programų, nuskenuotų vaizdų registravimas, Laser skydelis, USD eksportas, istorija ir spausdinimas CadCraft Studio, vadovaujamas pirmasis brėžinys, įrankių juosta bet kurioje pusėje ar mažesniu eilučių skaičiumi ir dar daugiau DI asistentams.
keywords: kas naujo, naujienos, leidimų pastabos, pakeitimų žurnalas, pakeitimai, 0.7, versija, nauji funkcijos, pdf, pdfattach, pdfimport, pagrindas, scan, scanattach, scantrace, atvaizdavimas, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatavimas, wblock, scalelistedit, mastelių sąrašas, acis, 3d kietieji kūnai, registerscans, registruoti nuskaitymus, icp, e57, las, lazeris, grbl, g-code, usd, usdout, istorija, versijos, palyginti, spausdinti, spausdintuvas, png, svg, spausdinimo stilius, linijų tipas, apžvalga, komandų lapas, komandų žemėlapis, įrankių juostos padėtis, įrankių juostos eilutės, toolbardock, regen, regenall, jutiklinė planšetė, perbraukimas, kodų puslapis, kirilica, korėjiečių, kinų, japonų, elektra, rcd, p&id, pid, acad.lsp, acaddoc.lsp, palaikymo aplankas, asistentai, mcp, vienetai, portugalų
from: b9258ca6
---

Tai, kas pasikeitė CadCraft 0.7 versijoje, palyginti su 0.6. Didelė dalis to buvo paprašyta Discord serveryje. Sąrašas sugrupuotas pagal sritis, svarbiausios – pirmiau.

## Nauja

### PDF ir nuskenuoti brėžiniai

- **PDF puslapis po brėžiniu.** {{cmd:PDFATTACH}} (`PDFATT`) įdeda puslapį tikru dydžiu arba jūsų įvestu mastelių. Lygiuokite pagal jo linijas, išblukinkite, paverskite vienspalviu ({{cmd:PDFADJUST}}), iškirpkite ({{cmd:PDFCLIP}}) ir perjunkite paties PDF sluoksnius ({{cmd:PDFLAYERS}}). Spausdinama kaip linijos, užpildai ir tekstas, o DWG ar DXF 2000 išlaiko jį kaip nuorodą į failą. Atidarant PDF su {{ui:Open}}, klausiama, ar jį prijungti, ar importuoti. Žr. [PDF pagrindai ir PDF importas](topic:pdf-underlay).
- **PDF puslapio pavertimas brėžinio objektais.** {{cmd:PDFIMPORT}} (`PDFIM`) sukuria linijas, polilinijas, apskritimus, lankus, vientisus užpildus ir tekstą sluoksniuose, pavadintuose pagal PDF, tikru dydžiu, įvestu mastelių arba pagal du taškus ir tikrą atstumą, vienu anuliavimo žingsniu. Žr. [Importuoti puslapį](topic:pdf-underlay#import-a-page).
- **Nuskenuoti brėžiniai.** {{cmd:SCANATTACH}} įkelia PNG, JPEG arba TIFF (vieną puslapį ar visus) arba PDF puslapį, kuris yra paveikslėlis. Tada galite pakeisti mastelį pagal du taškus ({{cmd:SCANSCALE}}), suderinti ({{cmd:SCANALIGN}}), ištiesinti pagal jo paties ilgas linijas ({{cmd:SCANDESKEW}}), paversti juodai baltu ir pašalinti dėmes ({{cmd:SCANCLEAN}}), apkarpyti ir ištrinti jo dalis. Kiekvienas žingsnis yra vienas anuliavimo žingsnis, o originalus failas išlaikomas. Žr. [Nuskenuoti brėžiniai ir atvaizdavimas](topic:scanned-drawings).
- **Skenavimo atvaizdavimas į linijas ir lankus.** {{cmd:SCANTRACE}} nubrėžia skenavimo linijas kaip linijas ir lankus naujame sluoksnyje SCAN-TRACE, pagal jūsų nustatytą toleranciją, o tekstą ir brūkšniuotę palieka kaip yra. Ataskaitoje nurodoma, ką sukūrė ir ko nepaliko; tai nėra teiginys, kad rezultatas teisingas: patikrinkite jį su brėžiniu. {{cmd:RASTERSNAP}} leidžia objektų fiksavimams rasti skenavimo galus, kampus ir susikirtimus. Niekas nesiunčiama jokur ir jokio apmokyto modelio nenaudojama. Žr. [Atvaizdavimas](topic:scanned-drawings#the-trace).

### Brėžimas ir redagavimas

- **Tikri splainai.** {{cmd:SPLINE}} (`SPL`) brėžia kreivę per taškus arba pagal valdymo taškus (laipsnis nuo 1 iki 5), su galinėmis liestinėmis; {{cmd:SPLINEDIT}} (`SPE`) perkelia, prideda ir ištrina tvirtinimo ar valdymo taškus, nustato svorius, atidaro, uždaro, apverčia arba paverčia splainą polilinija. Splainai iš DWG ir DXF failų atsidaro kaip splainai, o DWG ir DXF 2000 juos įrašo kaip splainus. Žr. [Splainai ir polilinijos](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) uždaro ir atidaro polilinijas, prijungia prie jų linijas ir lankus, nustato vieną plotį, per viršūnes ar palei jas pritaiko kreivę arba splainą ir grąžina atgal su Decurve, apverčia ir redaguoja kelias iš karto. Žr. [Redaguoti polilinija](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) įrašo bloką, kelis objektus arba visą brėžinį į naują DWG ar DXF, kuriame yra tik jų naudojami sluoksniai, stiliai ir blokai. Žr. [Įrašyti bloką ar objektus į atskirą failą](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN ir REGENALL.** {{cmd:REGEN}} (`RE`) perbrėžia skirtuką, kuriame esate, iš brėžinio, {{cmd:REGENALL}} (`REA`) – kiekvieną skirtuką, sritį ir atvirą brėžinį. Žr. [REGEN ir REGENALL](topic:commands#regen-and-regenall).

### Tekstas ir matmenys

- **Tekstas išlaiko savo formatavimą.** Pastraipų tekstas iš kitų programų išlaiko kiekvieno žodžio spalvas, paryškinimą ir kursyvą, pabraukimą, sukrautas trupmenas ir aukščius: jie nubrėžiami ekrane ir PDF, išlieka redaguojant žodžius ir įrašomi atgal. Žr. [Formatavimas pastraipų tekste iš kitų programų](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Matmenų stilių tvarkytuvė.** {{cmd:DIMSTYLE}} (`D`) sukuria, keičia, palygina ir taiko pavadintus matmenų stilius; pakeitus stilių, pakinta visi juo naudojami matmenys. {{cmd:DIMEDIT}} (`DED`) grąžina tekstą į vietą, įveda naują tekstą, pasuka jį arba pakreipia pratęsimo linijas; {{cmd:DIMTEDIT}} perkelia tekstą į kairę, į dešinę arba į vidurį. Žr. [Pavadinti matmenų stiliai](topic:dimension-settings#named-dimension-styles).
- **Jūsų mastelius.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) prideda mastelius, pavyzdžiui 1:75, į vaizdo lango ir spausdinimo mastelių sąrašus; jie išsaugomi brėžinyje (DWG ir DXF 2000), o brėžinys iš kitos programos atsineša savo sąrašą. Žr. [Mastelius](topic:units-papers-scales#scales).
- **Tekstas kitomis abėcėlėmis.** DXF failai, įrašyti kirilicos, korėjiečių, kinų, japonų ar vietnamiečių kodų puslapiais, dabar atsidaro su savo tekstu, o kinų, japonų ir korėjiečių tekstas spausdinamas PDF (spausdinant pirmą kartą reikalingas šriftas atsisiunčiamas). Žr. [Šriftas](topic:text#font).

### Spausdinimas ir spausdinimas popieriuje

- **Daugiau spausdinimo stilių lentelėse.** Kiekvienai spalvai lentelė dabar gali nustatyti ir linijos tipą, linijos galą ir jungtį bei užpildo stilių, kuris spausdina vientisus užpildus kaip brūkšniuotės linijas; lentelė turi savo linijų storių sąrašą ir linijų tipo mastelį. Žr. [Spausdinimo stilių lentelės](topic:plot-pdf#plot-style-tables).
- **Spausdinimas ir PNG bei SVG failai.** Spausdinimo dialogas turi {{ui:Print…}}, {{ui:Download PNG}} (300 dpi) ir {{ui:Download SVG}}. CadCraft Studio jame rodomi kompiuterio spausdintuvai, jų popierius ir kopijų skaičius. Žr. [Spausdinimas](topic:plot-pdf#print) ir [Paveikslėlio ir SVG failai](topic:plot-pdf#picture-and-svg-files).

### 3D ir taškų debesys

- **3D kietieji kūnai iš kitų programų.** Kietieji kūnai, regionai ir kūnai brėžinio modelio erdvėje rodomi 3D skirtuke, tik skaitymui, o įrašant DWG jie įrašomi atgal nepakeisti. Paviršių, kurių CadCraft dar nenubrėžia, veidai išvardijami, o ne spėjami. Žr. [Kietieji kūnai iš kitų programų](topic:3d-solids#solids-from-other-programs).
- **Kelių nuskaitymų registravimas.** {{cmd:REGISTERSCANS}} (`REGSCAN`) sudeda nuskaitymus, atliktus iš skirtingų pozicijų, į vieną rėmą pagal taškų poras arba įvestas tikslo koordinates, patikslina juos ICP metodu, išsaugo registraciją kaip nedidelį projekto failą ir įrašo registruotą debesį kaip vieną LAS ar E57 failą. Žr. [Registruoti kelis nuskaitymus į vieną](topic:register-scans).
- **USD eksportas.** {{cmd:USDOUT}} arba {{cmd:EXPORT3D}} › {{ui:USD}} įrašo 3D skirtuko kietuosius kūnus kaip `.usda`, `.usdc` ar `.usdz`. Žr. [Eksportuoti 3D modelį kaip USD](topic:usd).
- **Skaičiavimai 3D skirtuke.** Kur 3D skirtuko įrankiai prašo atstumo, galite įvesti skaičiavimą, kaip komandų eilutėje. Žr. [Aritmetika įvestoje reikšmėje](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Gaminiai

- **Siuntimas į lazerį.** {{cmd:LASER}} arba {{ui:View}} › {{ui:More}} › {{ui:Laser…}} atveria skydelį virš brėžinio: kiekvienas sluoksnis pjauna, žymi, graviruoja linijas, užpildo figūras, graviruoja paveikslėlį arba nesiunčiamas, su savo galia, greičiu ir perėjimais. Peržiūra seka jūsų pakeitimus, {{ui:Save G-code…}} įrašo GRBL lazerio režimo G kodą, o Chrome ar Edge naršyklėse skydelis gali apibrėžti darbo ribas ir jį siųsti per USB. Nustatymai išsaugomi brėžinyje (DWG ir DXF). Žr. [Siųsti brėžinį į lazerį](topic:laser-cutting).
- **Elektros įrenginių simboliai Elektros priede.** Duomenų, telefono ir TV lizdai, raktiniai ir laikmačio jungikliai, termostatas, išėjimo ženklas, detektoriai, signalizacijos taškas ir garsinis signalas, ventiliatorius, vandens šildytuvas, viryklė, elektromobilio įkrovimo taškas, energijos skaitiklis ir pogrindinis skydas bei RCD ir RCBO simboliai. Grandinė gali turėti RCD, skydo lentelėje yra RCD stulpelis, o patikros nurodo lizdų grandines be 30 mA ar mažesnio RCD. Tai planavimo priminimas, o ne kodo patikra.
- **P&ID priedas.** P&ID brėžia technologinių procesų schemas: simbolius su jungimo taškais, procesų ir signalų linijas, žymas, linijų numerius, linijų, įrangos, prietaisų ir vožtuvų sąrašus (CSV arba darbo knyga) ir patikras. Jis pateikiamas su CadCraft ir yra išjungtas, kol jo neįjungsite {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}. Tai brėžimo pagalbinė priemonė, o ne inžinerinis patvirtinimas, o jo žodžiai kol kas tik anglų kalba.

### Pradžia ir ekranas

- **Vadovaujamas pirmasis brėžinys.** {{cmd:TOUR}} (arba {{ui:Take the tour}} pradžios kortelėje) veda per šešis žingsnius tikrame brėžinyje: linija, apskritimas, perkėlimas, apkirpimas, ištrynimas ir matmuo. Jis prasideda savaime pirmą kartą, kai CadCraft atsidaro tuščias. Žr. [Norite vadovaujamo mokymo?](topic:getting-started#prefer-to-be-guided)
- **Komandų lapas ir komandų žemėlapis.** [Komandų lapas](topic:cheat-sheet) turi 40 kasdienių komandų viename puslapyje, taip pat PDF spausdinimui, o [komandų žemėlapis](topic:command-map) išvardija komandas su jų trumpaisiais pavadinimais nuo A iki Z.
- **Įrankių juosta bet kurioje pusėje.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar position}}: viršuje (kaip anksčiau), apačioje, kairėje arba dešinėje, arba įveskite {{cmd:TOOLBARDOCK}}. Žr. [Įrankių juostos padėtis](topic:settings#toolbar-position).
- **Įrankių juostos eilutės.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar rows}}: pritaikyti pagal vietą, 2 eilutės arba 1 eilutė, CadCraft įrankių juostai ir Drafting classic bei Ribbon stiliams. {{key:Shift+Ctrl+F1}} perjungia jas, {{key:Ctrl+F1}} – tai, ką rodo mygtukai, o {{cmd:TOOLBARROWS}} ir {{cmd:TOOLBAR}} nustato jas. Pradžios užuominos lange yra uždarymo mygtukas. Dėkojame GJoe2, kuris tai pasiūlė kaip pull request. Žr. [Įrankių juostos eilutės](topic:settings#toolbar-rows).

### CadCraft Studio

- **Istorija.** {{cmd:HISTORY}} (`HIST`), arba {{ui:View}} › {{ui:More}} › {{ui:History…}}: kopijos, kurias Studio saugo atidarant ir įrašant brėžinį, bei brėžinio debesies versijos, jei jį atidarėte iš debesies. Atidarykite ar atkurkite vieną arba palyginkite dvi, o pridėti, pašalinti ir pakeisti dalykai rodomi spalvomis. Žr. [Istorija](topic:history).
- **acad.lsp ir acaddoc.lsp.** Pasirinkite palaikymo aplanką {{cmd:APPLOAD}}: tie du failai įkeliami paleidus CadCraft (acaddoc.lsp dar kartą kiekvienam naujam brėžinio skirtukui), o `S::STARTUP` vykdomas po jų. Žr. [Įkelti programas](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Spausdinimo dialogas atskirame lange.** Mygtukas jo pavadinimo juostoje perkelia jį į langą, kurį galite padėti kitame monitoriuje. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).

### DI asistentams

- **Failai pagal pavadinimą aplankuose, kuriuos pasirenkate.** CadCraft Studio asistentas gali atidaryti, įrašyti ir spausdinti failus pagal pavadinimą bei perduoti komandai failą, kurio ji prašo (INSERT iš failo, COUNT eksportas, SAVEAS, PLOT), bet tik aplankuose, kuriuos pridedate skiltyje {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}}. Žr. [Leiskite naudoti failus pasirinktuose aplankuose](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Mažiau kvietimų.** Asistentas gali įvesti visą komandų eilutę vienu kartu, palaikyti komandą atidarytą tarp savo kvietimų, suskaičiuoti objektus pagal tipą ir sluoksnį jų nerodydamas bei įterpti bloką su atributų reikšmėmis vienu žingsniu.
- **Be lango.** `cadcraft` komandų eilutė įrašo SVG spausdinimus ir konvertuoja, spausdina, tikrina ar aprašo daugybę failų vienu metu. MCP paketas dar nepaskelbtas. Žr. [Dirbti su failais neatidarius CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Pakeista

- **Jutiklinė planšetė slenka.** Perbraukite dviem pirštais jutiklinėje planšetėje, ir 2D vaizdas seka juos; suspaudimas ir pelės ratukas keičia mastelį. Žr. [Pelė, jutiklinė planšetė ir lietimas](topic:mouse-trackpad-touch).
- **OLE objektai išlaikomi.** DXF įterpti objektai rodomi kaip jų paveikslėlis arba kaip pažymėtas rėmelis ir įrašomi atgal DXF 2000 formatu. DWG objektai išlaikomi ir įrašomi atgal, kai įrašote kaip DWG, bet dar nerodomi. Anksčiau jie įrašant prarasdavo. Žr. [Objektai iš kitų programų (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Naujo brėžinio vienetai** seka vienetą, kurį pažymite {{ui:Settings}} › {{ui:General}} › {{ui:Units}}.

## Ištaisyta

- Maketai, kurie atsidarydavo tušti arba prarasdavo vaizdo langą ir vietoj jo rodydavo visą modelį, dabar atsidaro su tikrais vaizdo langais. Maketas be ryšio su savo turiniu išlaikomas, o atidarymo ataskaita tai nurodo.
- DXF failai senesniais kodų puslapiais rodydavo sugadintą kirilicos ir korėjiečių tekstą. Dabar jie skaitomi teisingai.
- Pastraipų tekstas iš kitų programų prarasdavo savo formatavimą, kai buvo atidarytas, ir įrašant grįždavo paprastas.

## Visose programose

- **Vienetai.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} turi po vieną sąrašą ilgiui, plotui, tūriui, kampui ir nuolydžiui, su tiksliais dydžiais pagal vienetų apibrėžimus (JAV apžiūros pėda yra atskiras vienetas). Išjunkite vienetus, kurių niekada nenaudojate, ir jie išeina iš vienetų sąrašų; pažymėkite vieną, ir nauji darbai prasideda juo. Failas visada išlaiko savo vienetą. CadCraft žvaigždutė nustato naujo brėžinio vienetus, kai tai yra vienetas, kurį brėžinys gali turėti; CadCraft savasis langelis {{ui:Units}} dar nesekia jungiklių. Kai brėžinys turi vienetus, įvestas ilgis gali turėti bet kurio vieneto žymą. Žr. [Vienetai, įvestos reikšmės ir vienetų sąrašai](common:unit-lists).
- **Tankesnis išdėstymas ir skydeliai, kurie susitvarko.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} telpa daugiau ekrane (jutiklinių ekranų ir telefonų didelius mygtukus išlaiko). Kiekvienas šoninis skydelis turi plonią pavadinimo juostą: vilkite ją, kad prijungtumėte ar atplėštumėte skydelį, numeskite ant kito skydelio juostos, kad dalytumėtės rėmu kaip skirtukais, prisegkite, kad jis išslystų į kraštą, arba paslėpkite ir grąžinkite iš krašto. Žr. [Išdėstyti skydelius](common:arrange-panels#make-the-layout-denser).
- **Dialogai juda.** Vilkite dialogą už jo pavadinimo juostos, kad jis nebūtų brėžinio kelyje; jis grįžta ten, kur palikote. Dukart spustelėkite pavadinimo juostą, kad jį vėl centruotumėte. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).
- **Receptai DI asistentams.** Dešimt išbandytų užklausų jūsų asistentui (sutvarkyti brėžinį, atspausdinti rinkinį, patikrinti brėžinius, paklausti modelio, sudėti kiekių skaičiavimą, išbandyti detalės variantą…), kiekviena su įrankiais, kuriuos ji kviečia, ir leidimais, kurių reikia, bei kiekviena pakartota mūsų testais. Programose DI nėra. Žr. [Receptai DI asistentams](common:assistants-recipes).
- **Kalbos.** **Português (Portugal)** naujai pasirodė {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ji, **Português (Brasil)**, **Español (México)** ir **Bahasa Indonesia** dabar turi visus programų žodžius, tačiau kaip juodraščiai, kurių dar neperžiūrėjo gimtakalbis. Žinyno temos yra anglų kalba.
- **CadCraft Studio** nurodo, kodėl nepavyko patikrinti atnaujinimo (dar nėra failo jūsų sistemai, nėra ryšio, netinkamas parašas), o ne rodo tik „Atlikta“, ir nebeberia kortelės „Kas naujo“, kurią uždarėte, kol neatsiras naujesnė versija.

## Dar nėra šioje versijoje

- **0.7 nepasirašyta kodu.** Parašas ir Microsoft Store paketas perkelti į 0.8, nes sertifikato patvirtinimas dar neįvyko. Patikrinkite SHA-256 šalia kiekvieno failo getcadcraft.com/download. Windows, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:More info}}, tada {{ui:Run anyway}}. Mac kompiuteryje pirmą kartą dešiniuoju pelės klavišu spustelėkite CadCraft Studio ir pasirinkite {{ui:Open}}. CadCraft Studio dar nėra programų parduotuvėje, o iPad ar iPhone versijos dar nėra.
- Kampų ir nuolydžių sąrašai {{ui:Units}} išsaugomi, bet jų dar niekas neskaito.
- DWG OLE objektai išlaikomi, bet nerodomi, o metafailų paveikslėliai OLE objektų viduje nenubrėžiami.
- Spausdinimo stilių lentelių (CTB failų) skaitymas iš kitų programų laukia pavyzdinio failo.
- Senesni azijietiški tekstai, užrašyti kaip `\M+` kodai, skaitomi, bet dar nepatikrinti su kitos programos failu.
- PDF pagrindai: paveikslėliai puslapio viduje rodomi ekrane, bet nespausdinami, asistento spausdinimas palieka pagrindus, o tai, kaip kitos programos skaito išsaugotą iškirpimą ir mastelį, dar nepatikrinta.
- Istorija: CadCraft dar nesiunčia savo įrašų į debesį, todėl debesies versijos yra tos, kurios įrašytos iš kitų įrenginių ir žiniatinklio. Istorija yra tik CadCraft Studio.
- Ar Studio išlaiko acad.lsp palaikymo aplanką po paleidimo iš naujo, dar nepatikrinta; jei klausia, pasirinkite aplanką iš naujo APPLOAD.
- Lazerio skydelis dar nebandytas su tikru lazeriu: išbandykite kiekvieną nustatymą ant atliekų. CadCraft Studio neturi Web Serial, todėl Studio skydelis įrašo tik G kodą.
- Nuskaitymų registravimas išbandytas su išgalvotais nuskaitymais, dar ne su tikro skeneriu rinkinio.
- Dviejų pirštų slinkimas išbandytas su imituotais jutiklinės planšetės įvykiais, dar ne su tikra jutiklinė planšete.
- {{cmd:PEDIT}} neturi parinkties Edit vertex (naudokite rankenas arba Ypatybes). Poslinkis, apkirpimas, pratęsimas, suapvalinimas, nutraukimas ir sujungimas dar nepriima splainų; splaino aukštis (Z) neišlaikomas.
- Nauji pastraipų tekstai dar negali turėti formatavimo kodų, o SVG spausdinimai rodo formatuotą tekstą viena spalva.
- WBLOCK parinktis Entire drawing įrašo tik modelį, o ne lapus. Dabartinis matmenų stilius nėra išsaugomas faile: brėžinys atsidaro su Standard kaip dabartiniu.
- Meniu juostos stiliuose dar nėra sluoksnių, spalvų ar linijų tipų sąrašų: naudokite skydelį {{ui:Layers}} ir {{ui:Properties}}.
- Taškų debesys dar neįrašomi į brėžinį ir nespausdinami, o E57 failai atsidaro iki 6 milijonų taškų ir 512 MB.
- CadCraft įrašyti DWG failai dar nepatikrinti pačiame AutoCAD.

Viskas kita – [Dar nepadaryta](topic:not-built-yet).
