---
title: Kas naujo 0.7 (anksčiau)
summary: PDF pagrindai ir PDF importas, nuskaityti brėžiniai su automatiniu perbraižymu, tikri splainai su SPLINE, SPLINEDIT ir PEDIT, matmenų stilių tvarkytojas, tekstas, kuris išsaugo savo formatavimą, WBLOCK ir jūsų pačių mastelių sąrašai, 3D kietieji kūnai iš kitų programų, skenavimų registravimas, lazerio skydelis, USD eksportas, istorija ir spausdinimas CadCraft Studio, vedama pirmoji braižinio dalis, įrankių juosta bet kurioje pusėje ar mažiau eilučių, ir daugiau DI asistentams.
keywords: kas naujo 0.7, ankstesnė versija, versijų pastabos, keitimų žurnalas, pakeitimai, 0.7, versija, naujos funkcijos, pdf, pdfattach, pdfimport, pagrindas, skenavimas, scanattach, scantrace, trace, rastras, rastersnap, splainas, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatavimas, wblock, scalelistedit, mastelių sąrašas, acis, 3D kietieji kūnai, registerscans, skenavimų registravimas, icp, e57, las, lazeris, grbl, g-code, usd, usdout, istorija, versijos, palyginti, spausdinti, spausdintuvas, png, svg, spausdinimo stilius, linijos tipas, apžvalga, greitasis žinynas, komandų žemėlapis, įrankių juostos padėtis, įrankių juostos eilutės, toolbardock, regen, regenall, jutiklinė plokštė, perbraukimas, kodų puslapis, kirilica, korėjiečių, kinų, japonų, elektra, rcd, p&id, pid, acad.lsp, acaddoc.lsp, palaikymo aplankas, asistentai, mcp, vienetai, portugalų
from: d9a8ea79
---

Tai, kas pasikeitė CadCraft 0.7 versijoje, palyginti su 0.6. Didelė dalis to buvo prašyta Discord. Sąrašas sugrupuotas pagal sritis, svarbiausi – pirmiausia.

## Nauja

### PDF ir nuskaityti brėžiniai

- **Įdėkite PDF puslapį po brėžiniu.** {{cmd:PDFATTACH}} (`PDFATT`) įdeda puslapį tikruoju dydžiu arba jūsų įvestu mastelių. Galite prisiglausti prie jo linijų, išblukinti jį, paversti monochromišku ({{cmd:PDFADJUST}}), iškirpti ({{cmd:PDFCLIP}}) ir perjungti paties PDF sluoksnius ({{cmd:PDFLAYERS}}). Spausdinamas kaip linijos, užpildai ir tekstas, o DWG arba DXF 2000 jį išsaugo kaip nuorodą į failą. Atidarius PDF su {{ui:Atverti}}, klausiama, ar jį prijungti, ar importuoti. Žr. [PDF pagrindai ir PDF importas](topic:pdf-underlay).
- **Paverskite PDF puslapį brėžinio objektais.** {{cmd:PDFIMPORT}} (`PDFIM`) sukuria linijas, polilinijas, apskritimus, lankus, vientisus užpildus ir tekstą sluoksniuose, pavadintuose pagal PDF, tikru dydžiu, įvestu mastelių arba pagal du taškus ir tikrą atstumą, viename anuliavimo žingsnyje. Žr. [Importuoti puslapį](topic:pdf-underlay#import-a-page).
- **Nuskaityti brėžiniai.** {{cmd:SCANATTACH}} įtraukia PNG, JPEG ar TIFF (vieną puslapį arba visus) arba PDF puslapį, kuris yra paveikslėlis. Tada galite pamasštabuoti jį pagal du taškus ({{cmd:SCANSCALE}}), suderinti ({{cmd:SCANALIGN}}), ištiesinti pagal jo paties ilgas linijas ({{cmd:SCANDESKEW}}), paversti juodai baltu ir pašalinti dėmes ({{cmd:SCANCLEAN}}), iškirpti ir ištrinti jo dalis. Kiekvienas žingsnis yra vienas anuliavimo žingsnis, o originalus failas išsaugomas. Žr. [Nuskaityti brėžiniai ir perbraižymas](topic:scanned-drawings).
- **Nuskaitymo perbraižymas į linijas ir lankus.** {{cmd:SCANTRACE}} nubraižo skenuotas linijas kaip linijas ir lankus naujame sluoksnyje SCAN-TRACE, pagal jūsų nustatytą toleranciją, o tekstą ir brūkšniavimą palieka kaip yra. Ataskaita nurodo, ką sukūrė ir ką paliko; tai nėra teiginys, kad rezultatas teisingas: patikrinkite jį su lapu. {{cmd:RASTERSNAP}} leidžia objektų įtraukimams rasti skenavimo galus, kampus ir susikirtimus. Niekas niekur nesiunčiama ir nenaudojamas joks apmokytas modelis. Žr. [Perbraižymas](topic:scanned-drawings#the-trace).

### Braižymas ir redagavimas

- **Tikri splainai.** {{cmd:SPLINE}} (`SPL`) braižo kreivę per taškus arba pagal valdymo taškus (laipsnis nuo 1 iki 5), su galinėmis liestinėmis; {{cmd:SPLINEDIT}} (`SPE`) perkelia, prideda ir trina tašku, nustato svorius, atidaro, uždaro, apverčia ar paverčia splainą polilinija. Splainai iš DWG ir DXF failų atsidaro kaip splainai, o DWG ir DXF 2000 juos išsaugo kaip splainus. Žr. [Splainai ir polilinijos](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) uždaro ir atidaro polilinijas, prijungia prie jų linijas ir lankus, nustato vieną plotį, pritaiko per viršūnes kreivę arba splainą palei jas, grąžina atgal su Decurve, apverčia ir redaguoja kelias vienu metu. Žr. [Redaguoti polilinija](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) įrašo bloką, kai kuriuos objektus ar visą brėžinį į naują DWG ar DXF, kuriame yra tik jų naudojami sluoksniai, stiliai ir blokai. Žr. [Įrašyti bloką ar objektus į atskirą failą](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN ir REGENALL.** {{cmd:REGEN}} (`RE`) perbraižo skirtuką, kuriame esate, iš brėžinio, {{cmd:REGENALL}} (`REA`) – visus skirtukus, sritis ir atidarytus brėžinius. Žr. [REGEN ir REGENALL](topic:commands#regen-and-regenall).

### Tekstas ir matmenys

- **Tekstas išsaugo savo formatavimą.** Pastraipų tekstas iš kitų programų išlaiko spalvas kiekvienam žodžiui, paryškinimą ir pasvirimą, pabraukimą, sukrautas trupmenas ir aukščius: jie rodomi ekrane ir PDF, išsaugomi redaguojant žodžius ir įrašomi atgal. Žr. [Formatavimas pastraipų tekste iš kitų programų](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Matmenų stilių tvarkytojas.** {{cmd:DIMSTYLE}} (`D`) sukuria, keičia, palygina ir pritaiko pavadintus matmenų stilius; pakeitus stilių, pasikeičia visi matmenys, kurie jį naudoja. {{cmd:DIMEDIT}} (`DED`) grąžina tekstą, įveda naują tekstą, pasuka jį arba pakreipia išplėtimo linijas; {{cmd:DIMTEDIT}} perkelia tekstą kairėn, dešinėn arba į centrą. Žr. [Pavadinti matmenų stiliai](topic:dimension-settings#named-dimension-styles).
- **Jūsų mastelių sąrašai.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) prideda mastelius, pavyzdžiui, 1:75, į rodymo srities ir spausdinimo mastelių sąrašus; jie įrašomi brėžinyje (DWG ir DXF 2000), o brėžinys iš kitos programos atsineša savo sąrašą. Žr. [Mastelis](topic:units-papers-scales#scales).
- **Tekstas kitomis abėcėlėmis.** DXF failai, įrašyti kirilicos, korėjiečių, kinų, japonų ar vietnamiečių kodų puslapiais, dabar atsidaro su savo tekstu, o kinų, japonų ir korėjiečių tekstas spausdinamas PDF (spausdinimas pirmą kartą reikalingą šriftą atsisiunčia). Žr. [Šriftas](topic:text#font).

### Spausdinimas ir spausdinimo stiliai

- **Daugiau spausdinimo stilių lentelėse.** Kiekvienai spalvai lentelė dabar gali nustatyti ir linijos tipą, linijos galą ir jungtį, bei užpildo stilių, kuris spausdina vientisus užpildus kaip brūkšniavimo linijas; lentelė turi savo linijų storių sąrašą ir linijos tipo mastelį. Žr. [Spausdinimo stilių lentelės](topic:plot-pdf#plot-style-tables).
- **Spausdinimas, PNG ir SVG failai.** Spausdinimo dialoge yra {{ui:Spausdinti…}}, {{ui:Atsisiųsti PNG}} (300 dpi) ir {{ui:Atsisiųsti SVG}}. CadCraft Studio jame rodo kompiuterio spausdintuvus, jų popierių ir kopijų skaičių. Žr. [Spausdinimas](topic:plot-pdf#print) ir [Paveikslėlio ir SVG failai](topic:plot-pdf#picture-and-svg-files).

### 3D ir taškų debesys

- **3D kietieji kūnai iš kitų programų.** Kieti kūnai, sritys ir kūnai brėžinio modelio erdvėje rodomi 3D skirtuke, tik skaitymui, o įrašymas į DWG juos rašo atgal nepakeistus. Paviršiai, kurių CadCraft dar nebraižo, išvardijami, o ne spėjami. Žr. [Kietieji kūnai iš kitų programų](topic:3d-solids#solids-from-other-programs).
- **Kelių skenavimų registravimas.** {{cmd:REGISTERSCANS}} (`REGSCAN`) sudeda skenavimus, atliktus iš skirtingų vietų, į vieną koordinačių sistemą pagal taškų poras arba įvestas tikslines koordinates, patikslina juos ICP metodu, įrašo registraciją kaip mažą projekto failą ir parašo suregistruotą debesį kaip vieną LAS ar E57 failą. Žr. [Kelių skenavimų sujungimas į vieną](topic:register-scans).
- **USD eksportas.** {{cmd:USDOUT}}, arba {{cmd:EXPORT3D}} › {{ui:USD}}, įrašo 3D skirtuko kietuosius kūnus kaip `.usda`, `.usdc` ar `.usdz`. Žr. [3D modelio eksportavimas į USD](topic:usd).
- **Skaičiavimai 3D skirtuke.** Kur 3D skirtuko įrankiai prašo atstumo, galite įvesti skaičiavimą, kaip komandų eilutėje. Žr. [Aritmetika įvestoje reikšmėje](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Gaminimas

- **Siųskite brėžinį į lazerį.** {{cmd:LASER}}, arba {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Lazeris…}}, atveria skydelį virš brėžinio: kiekvienas sluoksnis pjaunamas, įbrėžiamas, graviruojamos linijos, užpildomos figūros, graviruojamas paveikslėlis arba neišsiunčiamas, su savo galia, greičiu ir praėjimais. Peržiūra seka jūsų pakeitimus, {{ui:Įrašyti G kodą…}} įrašo GRBL lazerio režimo G kodą, o Chrome ar Edge naršyklėse skydelis gali apibrėžti darbo ribas ir jį išsiųsti per USB. Nustatymai įrašomi brėžinyje (DWG ir DXF). Žr. [Siųsti brėžinį į lazerį](topic:laser-cutting).
- **Elektros priedo instaliacijos simboliai.** Duomenų, telefono ir TV lizdai, raktiniai ir laiko jungikliai, termostatas, išėjimo ženklas, detektoriai, signalizacijos taškas ir garsinis signalas, ventiliatorius, vandens šildytuvas, viryklė, elektromobilio įkrovimo taškas, energijos skaitiklis ir pogrindinis skydas, bei RCD ir RCBO simboliai. Grandinė gali turėti RCD, skydo lentelėje yra RCD stulpelis, o patikros nurodo lizdų grandines be 30 mA ar mažesnio RCD. Tai planavimo priminimas, ne kodo patikrinimas.
- **P&ID priedas.** P&ID braižo technologinių procesų schemas: simboliai su jungimo taškais, procesų ir signalų linijos, žymos, linijų numeriai, linijų, įrangos, prietaisų ir vožtuvų sąrašai (CSV arba darbo knyga) bei patikros. Jis pateikiamas kartu su CadCraft ir išjungtas, kol jo neįjungsite {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Priedai}}. Tai braižymo pagalba, ne inžinerinis patvirtinimas, o jo tekstai kol kas tik anglų kalba.

### Pradžia ir ekranas

- **Vedama pirmoji braižinio dalis.** {{cmd:TOUR}} (arba {{ui:Pradėti apžvalgą}} pradžios kortelėje) veda per šešis žingsnius tikrame brėžinyje: linija, apskritimas, perkėlimas, kirpimas, trynimas ir matmuo. Ji prasideda savaime, kai pirmą kartą CadCraft atsidaro tuščias. Žr. [Norite, kad jus vestų?](topic:getting-started#prefer-to-be-guided)
- **Greitasis žinynas ir komandų žemėlapis.** [Greitasis žinynas](topic:cheat-sheet) turi 40 dažniausių komandų viename puslapyje, taip pat kaip PDF spausdinimui, o [komandų žemėlapis](topic:command-map) išvardija komandas su trumpaisiais pavadinimais nuo A iki Z.
- **Įrankių juosta bet kurioje pusėje.** {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Įrankių juostos padėtis}}: viršuje (kaip anksčiau), apačioje, kairėje ar dešinėje, arba įveskite {{cmd:TOOLBARDOCK}}. Žr. [Įrankių juostos padėtis](topic:settings#toolbar-position).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Įrankių juostos eilutės}}: tilpti į eilutes, 2 eilutės arba 1 eilutė, CadCraft įrankių juostai ir stiliams Drafting classic bei Ribbon. {{key:Shift+Ctrl+F1}} jas perjungia, {{key:Ctrl+F1}} – tai, ką rodo mygtukai, o {{cmd:TOOLBARROWS}} ir {{cmd:TOOLBAR}} jas nustato. Pradžios užuominoje yra uždarymo mygtukas. Ačiū GJoe2, kuris tai atsiuntė kaip pull request. Žr. [Įrankių juostos eilutės](topic:settings#toolbar-rows).

### CadCraft Studio

- **Istorija.** {{cmd:HISTORY}} (`HIST`), arba {{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Istorija…}}: kopijos, kurias Studio saugo atidarius ir įrašius brėžinį, bei brėžinio debesies versijos, jei jį atidarėte iš debesies. Atverkite ar atkurkite vieną, arba palyginkite dvi – pridėti, pašalinti ir pakeisti dalykai rodomi spalva. Žr. [Istorija](topic:history).
- **acad.lsp ir acaddoc.lsp.** Pasirinkite palaikymo aplanką {{cmd:APPLOAD}}: tie du failai įkeliami paleidus CadCraft (acaddoc.lsp dar kartą kiekvienam naujam brėžinio skirtukui), o `S::STARTUP` vykdomas po jų. Žr. [Programų įkėlimas](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Spausdinimo dialogas savame lange.** Mygtukas jo pavadinimo juostoje perkelia jį į langą, kurį galite padėti kitame monitoriuje. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).

### DI asistentams

- **Failai pagal pavadinimą aplankuose, kuriuos pasirenkate.** CadCraft Studio asistentas gali atidaryti, įrašyti ir spausdinti failus pagal pavadinimą bei perduoti komandai failą, kurio ji prašo (INSERT iš failo, COUNT eksportas, SAVEAS, PLOT), bet tik aplankuose, kuriuos pridedate {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Asistentai}} › {{ui:Aplankai, kuriuos jis gali naudoti}}. Žr. [Leiskite naudoti failus aplankuose, kuriuos pasirenkate](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Mažiau iškvietimų.** Asistentas gali įvesti visą komandų eilutę vienu kartu, palikti komandą atvirą tarp savo iškvietimų, suskaičiuoti objektus pagal tipą ir sluoksnį jų neišvardindamas, bei įdėti bloką su atributų reikšmėmis vienu žingsniu.
- **Be lango.** `cadcraft` komandų eilutė rašo SVG spausdinius ir konvertuoja, spausdina, tikrina ar aprašo daug failų vienu metu. MCP paketas dar nepaskelbtas. Žr. [Dirbti su failais neatidarius CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Pakeista

- **Jutiklinė plokštė slenka vaizdą.** Perkelkite du pirštus ant jutiklinės plokštės, ir 2D vaizdas seka juos; suspaudimas ir pelės ratukas keičia mastelį. Žr. [Pelė, jutiklinė plokštė ir jutiklinis ekranas](topic:mouse-trackpad-touch).
- **OLE objektai išsaugomi.** DXF įterpti objektai rodomi kaip savo paveikslėlis arba kaip pažymėtas rėmelis ir įrašomi atgal DXF 2000 formatu. DWG objektai išsaugomi ir įrašomi atgal, kai įrašote kaip DWG, bet dar nerodomi. Anksčiau įrašant jie prarasdavo. Žr. [Objektai iš kitų programų (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Naujo brėžinio vienetai** seka vienetą, kurį pažymėjote žvaigždute {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}}.

## Ištaisyta

- Lapai, kurie atsidarė tušti arba prarado rodymo sritį ir rodė visą modelį jos vietoje, dabar atsidaro su tikromis rodymo sritimis. Lapas be ryšio su savo turiniu išsaugomas, o atidarymo ataskaita tai nurodo.
- DXF failai senesniais kodų puslapiais rodė iškreiptą kirilicos ir korėjiečių tekstą. Dabar jie nuskaitomi teisingai.
- Pastraipų tekstas iš kitų programų prarasdavo formatavimą, kai buvo atidarytas, ir įrašomas atgal be jo.

## Visose programose

- **Vienetai.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}} turi po vieną sąrašą ilgiui, plotui, tūriui, kampui ir nuolydžiui, su tikrais dydžiais pagal vienetų apibrėžimus (JAV apžiūros pėda yra atskiras vienetas). Išjunkite vienetus, kurių niekada nenaudojate, ir jie išeina iš sąrašų; pažymėkite vieną žvaigždute – ir nauji darbai prasidės juo. Failas visada išlaiko savo vienetą. CadCraft programoje žvaigždutė nustato naujo brėžinio vienetus, kai tai vienetas, kurį brėžinys gali turėti; CadCraft savo {{ui:Vienetai}} langelis dar neseka jungiklių. Kai brėžinys turi vienetus, įvestas ilgis gali turėti bet kurio vieneto žymą. Žr. [Vienetai, įvestos reikšmės ir vienetų sąrašai](common:unit-lists).
- **Tankesnis išdėstymas ir skydeliai, kurie susitvarko.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Išdėstymo tankis}} › {{ui:Kompaktiška}} telpa daugiau ekrane (jutikliniai ekranai ir telefonai išlaiko savo didelius mygtukus). Kiekvienas šoninis skydelis turi ploną pavadinimo juostą: vilkite jį, kad prijungtumėte arba padarytumėte plaukiojantį, nuleiskite ant kito skydelio juostos, kad dalytųsi vienu rėmu kaip skirtukai, prisekite, kad slystų į kraštą, arba paslėpkite ir grąžinkite iš krašto. Žr. [Skydelių išdėstymas](common:arrange-panels#make-the-layout-denser).
- **Dialogai perkeliami.** Vilkite dialogą už pavadinimo juostos, kad jis nestovėtų brėžinio kelyje; jis grįžta ten, kur paliksite. Dukart spustelėkite pavadinimo juostą, kad jį vėl centruotumėte. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).
- **Receptai DI asistentams.** Dešimt pavyzdinių užklausų jūsų pačių asistentui (sutvarkyti brėžinį, suspausdinti rinkinį, patikrinti brėžinius, uždavinti modeliui klausimus, susumuoti kiekių skaičiavimą, išbandyti detalės variantą ir kt.), kiekviena su įrankiais, kuriuos ji kviečia, ir leidimais, kurių jai reikia; kiekvieną paleidžia mūsų testai. Programos DI neturi. Žr. [Receptai DI asistentams](common:assistants-recipes).
- **Kalbos.** **Português (Portugal)** nauja {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Kalba}}. Ši, **Português (Brasil)**, **Español (México)** ir **Bahasa Indonesia** dabar turi visus programų žodžius kaip juodraščius, dar neperskaitytus gimtąja kalba. Pagalbos temos – anglų kalba.
- **CadCraft Studio** nurodo, kodėl nepavyko patikrinti atnaujinimo (dar nėra failo jūsų sistemai, nėra tinklo, neteisingas parašas), o ne tik „Atlikta“, ir nebeatkuria uždarytos kortelės „Kas naujo“, kol nėra naujesnės versijos.

## Dar nėra šioje versijoje

- **0.7 neturi kodo parašo.** Parašas ir „Microsoft Store“ paketas perkelti į 0.8, nes sertifikato patvirtinimas dar neatėjo. Patikrinkite SHA-256 šalia kiekvieno failo getcadcraft.com/download. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}. Mac kompiuteryje pirmą kartą dešiniuoju pelės klavišu spustelėkite CadCraft Studio ir pasirinkite {{ui:Atverti}}. CadCraft Studio dar nėra programų parduotuvėje, o iPad ar iPhone versijos dar nėra.
- Kampų ir nuolydžių sąrašai {{ui:Vienetai}} yra įrašomi, bet jų dar niekas neskaito.
- DWG OLE objektai išsaugomi, bet nerodomi, o metafailų paveikslėliai OLE objektuose nepiešiami.
- Spausdinimo stilių lentelių (CTB failų) skaitymas iš kitų programų laukia pavyzdinio failo.
- Senesnis Azijos tekstas, užrašytas kaip `\M+` kodai, nuskaitomas, bet dar nepatikrintas su kitos programos failu.
- PDF pagrindai: vaizdai puslapyje rodomi ekrane, bet nespausdinami; DI asistento spausdinys palieka pagrindus nuošalyje, o tai, kaip kitos programos skaito išsaugotą iškirpimą ir mastelį, nepatikrinta.
- Istorija: CadCraft dar neišsiunčia įrašymų į debesį, todėl debesies versijos yra tos, kurios įrašytos iš kitų įrenginių ir žiniatinklio. Istorija yra tik CadCraft Studio.
- Ar Studio išlaiko acad.lsp palaikymo aplanką po perkrovimo, dar nepatikrinta; jei paklaus, APPLOAD programoje pasirinkite aplanką iš naujo.
- Lazerio skydelis dar neišbandytas tikru lazeriu: išbandykite kiekvieną nustatymą ant laužo. CadCraft Studio neturi Web Serial, todėl Studio skydelis tik įrašo G kodą.
- Skenavimų registravimas išbandytas su išgalvotais skenavimais, dar ne su tikro skenerio rinkiniu.
- Dviejų pirštų slinkimas išbandytas su simuliuotais jutiklinės plokštės įvykiais, dar ne su tikra plokšte.
- {{cmd:PEDIT}} neturi Edit vertex parinkties (naudokite rankenėles arba Ypatybes). Poslinkis, kirpimas, pratęsimas, suapvalinimas, lūžis ir jungimas dar nepriima splainų; splaino aukštis (Z) neišsaugomas.
- Naujas pastraipų tekstas dar negali turėti formatavimo kodų, o SVG spausdiniai rodo formatuotą tekstą viena spalva.
- WBLOCK parinktis Visas brėžinys įrašo tik modelį, ne lapus. Dabartinis matmenų stilius faile neįrašomas: brėžinys atsidaro su Standard kaip dabartiniu.
- Juostos meniu stiliai dar neturi sluoksnių, spalvų ar linijų tipų sąrašų: naudokite {{ui:Sluoksniai}} skydelį ir {{ui:Ypatybės}}.
- Taškų debesys dar neįrašomi brėžinyje ir nespausdinami, o E57 failai atsidaro iki 6 milijonų taškų ir 512 MB.
- CadCraft įrašyti DWG failai dar nepatikrinti pačiame AutoCAD.

Visa kita – [Dar nepadaryta](topic:not-built-yet).
