---
title: Kas nauja 0.9 (ankstesnė)
summary: Brūkšniuotės, kurios seka savo kontūrą, sluoksnių grupės, sukrauti aukštai, 2D išmanios sienos su durimis ir langais, teksto stiliai ir formatuoto teksto redaktorius, plaukianti komandų eilutė, prilipimas prie tinklelio, dešimt būdų nubrėžti lanką ir Dokumentų skydelis.
keywords: kas nauja 0.9, ankstesnė versija, kas nauja, 0.9, versijų pastabos, pakeitimų žurnalas, brūkšniuotė, asociatyvi brūkšniuotė, hatchedit, pat failas, rašto failas, sluoksnių grupės, laygroup, aukštai, sukrauti aukštai, floorlayers, išmanios sienos, siena, durys, langas, sienų įrankiai, teksto stilius, stilius, mtext redaktorius, pastraipos tekstas, formatavimas, plaukianti komandų eilutė, komandų eilutė, viršutinė sritis, kompaktiška, prilipimas prie tinklelio, grid snap, f9, lankas, dokumentų skydelis, patikrinti, JK plieno dydžiai, draw.io, tajų tekstas, dxf r12, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, automatinis pildymas, šmėkla, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, žymos, redline, sujungti, git, fossil, access, braižymas be regėjimo, ekrano skaitytuvas, ribos, azimutai, aunits, shx, diagram, ole, istorija, palyginti, žodžiais, ypatybės, pėdos ir coliai, ištempti, kalbos, įvesties įrenginiai, problemos, gyvai, pagalbininkai
from: 3451e64c
---

Tai, kas pasikeitė CadCraft 0.9, palyginti su 0.8.1. CadCraft yra 2D ir 3D braižymo programa CadCraft Studio 0.9 ir jos aštuoniose programose. 0.9 baigia plano braižymą, prideda teksto stilius ir tikrą teksto redaktorių bei suteikia daugiau vietos ekrane.

## Naujovės

### Plano braižymas

- **Brūkšniuotės, kurios seka savo kontūrą.** {{cmd:HATCH}} susieja save su tuo, kas ją riboja. Perkelkite, pasukite ar keiskite kontūro mastelį – brūkšniuotė ir jos raštas seka; pertvarkykite kontūrą – brūkšniuotė apskaičiuojama iš naujo. {{cmd:HATCHEDIT}} (`HE`) vėliau keičia brūkšniuotę ir sukuria ar nutraukia ryšį. Žr. [Brūkšniuotė ir užpildymo sritys](topic:hatch).
- **Brūkšniavimo rašto failai.** Prie {{cmd:HATCH}} klausimo `Nurodykite vidinį tašką` įveskite `F` (Rašto failas) ir pasirinkite `.pat` failą. Išbandyti tik failai, parašyti įprastu formatu.
- **Sluoksnių grupės.** {{ui:Įrankiai}} skydelyje {{ui:Sluoksniai}}: {{ui:Nauja grupė}}, {{ui:Pridėti paruoštas grupes}}, {{ui:Grupuoti pagal pavadinimą}} ir {{ui:Rasti sluoksnį}}; arba įveskite {{cmd:LAYGROUP}} (`LG`). Žr. [Brėžinio tvarkymas su sluoksniais](topic:layers#group-layers).
- **Sukrauti aukštai.** {{cmd:FLOORS}} (`FLR`) arba {{ui:Aukštai…}} meniu {{ui:Daugiau}} grupėje {{ui:Vaizdas}}. Rodinys lape gali rodyti vieną aukštą pagal {{ui:Rodomas aukštas}} Ypatybėse. {{cmd:FLOORLAYERS}} paverčia aukštus sluoksniais failui, kuris eina kitam žmogui. Žr. [Sukraukite aukštus viename brėžinyje](topic:floors).
- **2D išmanios sienos, durys ir langai.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) ir {{cmd:DELOPENING}}. Kampai, T jungtys ir susikirtimai apskaičiuojami už jus. Sienos saugo savo jungimų įrašą, o Ypatybėse atsiranda {{ui:Drausti jungimą pradžioje}} / {{ui:Drausti jungimą gale}}, {{ui:Vietos linija}} ir redaguojamas {{ui:Ilgis}}. Žr. [Braižykite 2D sienas, duris ir langus](topic:walls-2d).
- **Sienų įrankis plano sienoms.** Įveskite {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} ir kitas. Jų dar nėra įrankių juostos mygtukų. Žr. [2D sienų formos, pjūviai, poslinkiai ir užraktai](topic:wall-tools-2d).

### Tekstas

- **Teksto stiliai.** {{cmd:STYLE}} (`ST`) arba {{ui:Teksto stilius}} įrankių juostoje {{ui:Braižymas}}: pavadinti stiliai su šriftu, aukščiu, pločio koeficientu ir nuolydžiu. Žr. [Nustatykite teksto šriftą ir dydį su teksto stiliais](topic:text-styles).
- **Formatuoto pastraipos teksto redaktorius.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} arba dukart spustelėjus tekstą atveriamas langas su šriftu, dydžiu, paryškinimu, kursyvu, pabraukimu, perbraukimu, spalva, lygiavimu, laipsnio, ± ir skersmens ženklais, taip pat {{ui:Gerai}} ir {{ui:Atšaukti}}. Žr. [Formatuokite pastraipos tekstą](topic:format-paragraph-text).
- **Diagrama iš draw.io XML.** {{cmd:DIAGRAM}} (`T2D`) taip pat skaito įklijuotą draw.io XML. Žr. [Nubraižykite diagramą iš teksto](topic:text-to-diagram).
- **Tajų kalbos tekstas PDF spausdinime.** Anksčiau jis spausdinosi kaip klaustukai.

### Daugiau vietos ir braižymo pagalba

- **Plaukianti, plonesnė komandų eilutė ir kompaktiška viršutinė sritis.** Vilkite komandų eilutės rankenėlę, kad ją atplėštumėte, vilkite jos viršutinį kraštą, kad būtų mažiau eilučių; {{key:F2}} atveria istoriją. {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Komandų eilutė}} ir viršutinės srities pasirinkimai turi tuos pačius nustatymus. Žr. [Nustatymai](topic:settings#command-line).
- **Objektų prilipimo meniu.** Dešiniuoju pelės mygtuku spustelėkite {{ui:Prilipimas}} būsenos juostoje arba įveskite {{cmd:OSNAP}}.
- **Prilipimas prie tinklelio.** {{ui:Prilipimas prie tinklelio}} mygtukas būsenos juostoje arba {{key:F9}}: pasirinkti taškai eina į artimiausią tinklelio tašką, kai jokio objekto prilipimas taško nepaėmė.
- **Lankas dešimt būdų ir Tęsti.** {{ui:Lankas}} įrankių juostoje {{ui:Braižymas}} arba {{cmd:ARC}}: 3 taškai, Pradžia/Centras/Pabaiga šeima, Centras/Pradžia/Pabaiga šeima ir Tęsti (paspauskite {{key:Enter}} pradžios taške) nuo paskutinės linijos, lanko ar polilinijos.
- **Dokumentų skydelis.** {{cmd:DOCUMENTS}} (`DOCS`) arba {{ui:Dokumentai…}} meniu {{ui:Daugiau}} grupėje {{ui:Vaizdas}}: peržiūra, būsena ir išėmimas kiekvienam brėžiniui projekto aplanke. Atsiveria centruotas dialogas. Žr. [Dokumentai](topic:documents).

### Failai

- **JK plieno dydžiai.** 976 profiliai Standartiniame skydelyje, įvedami kaip brėžiniuose (pavyzdžiui, `305x165x40 UB`).
- **Pietų Afrikos paketai** (braižymo praktika ir statybos reglamentai) kaip Statybos reglamentų priedo paketai. Skaičiai nepatvirtinti.
- **Priedai CadCraft,** pridedami pagal poreikį ir pagal nutylėjimą išjungti: interjero apšvietimo projektavimas, lustų projektavimas (HDL į išdėstymą), frezos graviravimas, grandinių modeliavimas, rolikinių grandinių žvaigždžių projektavimas ir Statybos reglamentų šalių paketai.

## Ištaisyta

- Brūkšniuotės perkėlimas, pasukimas ar keitimas paliko savo raštą.
- {{cmd:GRIDMOVE}} nešė visą plano sieną, kuri prasideda tik ties tinklelio linija. Dabar siena vertinama pagal galus.
- Tinklelis rodomas tik brėžinio ribose, net kai ribos išjungtos.
- Blokų sąrašas šoniniame skydelyje slenka, o pavadinimas, kuris nėra blokas, išvardija blokus, prasidedančius tuo („Ar turėjote omenyje“).
- DXF R12 failai, kuriuos AutoCAD atmetė („Unknown group 1001 for table“), dabar atsidaro.
- Labai dideli failai (apie 70 000 objektų ir daugiau) nesidarė su „Maximum call stack size exceeded“.
- DWG failai iš AutoCAD 2018 ir naujesnių su aukšta priežiūros versija nesidarė su „bad BITLONG code 11“.
- Pastraipos teksto langelyje nauja dalies, kuri pasirinkta, dydžio reikšmė išlaiko pasirinkimą.

## Kiekvienoje programoje

Patarimai kiekvienam valdikliui su užuomina, pradžios patarimas, kurį galima uždaryti, skirtukų juostos, kurios slenka, kai netelpa, ir naršyklės skirtuko pavadinimas, kuris seka atidarytą brėžinį (`<drawing> - CadCraft | CadCraft`). {{ui:Parametrai}} › {{ui:Išdėstymas}} dabar yra išskleidžiamasis sąrašas su dviejų eilučių pasirinkimais. Kalbų sąrašas {{ui:Parametrai}} ilgesnis nei 0.8. Gyvas bendras redagavimas, bibliotekų kolekcijos ir svorio bei temperatūros vienetai aprašyti Studio pastabose.

## Sąžiningos ribos

- Pastraipos tekste nėra ženklų ar numeruotų sąrašų, tabuliatorių liniuotės ar lygiavimo pagal plotį. Spausdinami PDF tekstai nustatomi Helvetica šriftu.
- Plano sienos tiesios, todėl lankas nubrėžiamas trumpomis sienomis. Bendruomenės rankinis sienų įrankio patikrinimas dar laukia.
- Sluoksnių grupės neįrašomos AutoCAD formatu, todėl AutoCAD rodo plokščią sąrašą. Kitos programos rodo visus aukštus kartu, nebent paleidžiate {{cmd:FLOORLAYERS}}.
- Dokumentų skydelio dar nebandė du žmonės tikrame bendrame aplanke. Frezos graviravimas nebuvo bandytas realioje mašinoje. Apšvietimo skaičiavimas patikrintas su fotonų sekimu, o ne su kita programa. Inžineriniai priedai yra tikrinimo priemonės, o ne inžinieriaus peržiūros pakaitalas.
- Kalbos, išskyrus anglų, yra mašininiai juodraščiai, o kai kurie nauji žodžiai tik anglų kalba.

## Ankstesnė: 0.8 ir 0.8.1

Tai, kas pasikeitė CadCraft 0.8 ir 0.8.1, palyginti su 0.7. 0.8 (2026 m. lapkričio 1 d.) prideda braižymo pagalbininkus, kurie dirba iš jūsų pačių brėžinio, pagal taisykles jūsų kompiuteryje ir be modelio; 0.8.1 (2026 m. lapkričio 2 d.) ištaiso klaidas, praneštas po to.

### Naujovės

**Brėžinys, kuris užbaigia jūsų mintį**

- **Šmėkla parodo, kas ateina toliau.** Kai nevykdoma jokia komanda, pilka brūkšninė šmėkla rodo, ką jūsų brėžinio šablonai sako, kas ateina toliau: kitas stovas tuo pačiu žingsniu, kitas laiptų žingsnis, trūkstama kambario siena. Paspauskite {{key:Tab}}, kad ją nubrėžtumėte kaip vieną atšaukimo žingsnį, arba {{key:Esc}}, kad ją atmestumėte. Ji žiūri tik į naujausius objektus, todėl didelis brėžinys lieka sklandus. Išjunkite ją {{ui:Parametrai}} › {{ui:CadCraft}} arba su {{cmd:AUTOCOMPLETE}} `Off`.
- **Kitas taškas, kol braižote liniją.** {{cmd:LINE}} ar {{cmd:PLINE}} viduryje šmėkla yra kitas taškas: kitas laiptų žingsnis, keturias stačiakampio kampas arba taškas, kuris jį uždaro. Priartinkite žymeklį ir paspauskite {{key:Tab}}, tarsi būtumėte spustelėję ten.
- **Rašikliu nupiešti eskizai tampa tiksliais.** {{cmd:SKETCHFIX}}: nubrėžkite grubius brūkšnius rašikliu, pele ar pirštu, ir kiekvienas tampa švaria linija, apskritimu, lanku, stačiakampiu ar polilinija, prisegta prie to, kas jau nubrėžta. Žr. [Skicuokite rašikliu ir gaukite tikslią geometriją](topic:sketch-with-a-pen).
- **Eskizo nuotrauka tampa brėžiniu.** {{cmd:PHOTOSKETCH}} (`PSK`) randa popierių nuotraukoje, ištiesina perspektyvą, pritaiko jūsų nurodytą popieriaus dydį ir mastelį ir perbraižo rašiklio linijas į sluoksnį kiekvienai rašiklio spalvai. Užrašai neperbraižomi.
- **Matmenys pagal taisykles.** {{cmd:AUTODIM}} (`ADIM`) sudaro matmenų grandines palei jūsų pasirinktas puses, bendrą dydį, angų plotius, skylių skersmenis ir su `Grid` – tinklelio tarpus. Jis niekada nekartoja jau esančio matmens.
- **Perkelkite tinklelio liniją ir rinkinys seka.** {{cmd:GRIDMOVE}} (`GM`): sienos, kurios baigiasi ant tinklelio linijos, ištempiamos kartu su ja; sienos išilgai jos, stulpai, jos burbulas ir žyma juda, matmenys ant jos matuoja naują tarpą. Vienas atšaukimo žingsnis.

**Lapai, detalės ir žymos**

- **Lapai, kurie išsidėsto patys.** {{cmd:AUTOSHEET}} paima jūsų pavadintus rodinius (arba atskiras modelio dalis), pasirenka popieriaus dydį ir standartinį mastelį ir sudeda rodinius į naujus lapus su titulo bloku ir pavadinimo bei mastelio antrašte. Viskas lieka redaguojama. Žr. [Lapų išdėstymas man](topic:lay-out-sheets-for-me).
- **Jūsų firmos detalės, siūlomos braižant.** {{cmd:DETAILS}} (`DET`) saugo jūsų pačių detalių blokus. Kai pasirinkta atitinka vieną pagal žodžius sluoksniuose, blokų pavadinimuose ir pastabose, būsenos juostoje tai nurodoma; pasirinkite ją ir įdėkite. {{cmd:DETAILS}} › Share įdeda jūsų sąrašą į Dokumentų aplanką ir atneša tai, ką komanda pridėjo. Parametrai išjungia pasiūlymus.
- **Žymos ant blokų.** {{cmd:TAGS}} apibrėžia žymą (jos tipą, leidžiamas reikšmes, blokus, kuriems ji taikoma), nustato ją pasirinktoms bloko nuorodoms ir jas išvardija kaip tvarkaraštį, kurį galite įrašyti kaip CSV. Apibrėžimai saugomi DWG. Žr. [Žymos](topic:tags).
- **Brėžinio ribos.** {{cmd:LIMITS}} nustato brėžinio stačiakampį: tinklelis jį užpildo, o visas rodinys jį parodo. Ribos rodomos kaip kontūras ir išsaugomos DWG ir DXF kartu su popieriaus ribomis. Žr. [Nustatyti brėžinio ribas](topic:drawing-limits).

**Darbas su kitais žmonėmis ir kitomis programomis**

- **Pažymėjimas tampa revizija.** {{cmd:REDLINE}} skaito paketą, kurį rašo MarkupCraft, ir išvardija kiekvieną pakeitimą. Priimkite arba atmeskite kiekvieną su pastaba; priimti gauna revizijos debesį ir revizijos žurnalą vienu atšaukimo žingsniu, o atsakymų failą įrašote, kad uždarytumėte pažymėjimus MarkupCraft. Žr. [Pažymėjimo pavertimas revizija](topic:redline-to-revision).
- **Brėžiniai, kuriuos git ir Fossil gali sujungti.** Įjungus {{ui:Failai, tinkami sujungti}} {{ui:Parametrai}} › {{ui:CadCraft}}, kiekvienas objektas gauna raktą, kuris niekada nesikeičia (failai apie 10 procentų didesni). `cadcraft merge base ours theirs` tada sujungia dviejų žmonių pakeitimus to paties DWG ar DXF objektais ir praneša tik tada, kai du žmonės pakeitė tą patį dalyką. Žr. [Sujunkite dviejų žmonių pakeitimus viename brėžinyje](topic:merge-drawings).
- **Kas pasikeitė, žodžiais.** Istorijoje {{ui:Palyginti}} duoda paprastą sąrašą: kur kas pasikeitė, kokio dydžio vietos, kas pridėta, pašalinta ar pakeista, ir redaguotas tekstas. Žr. [Pasakykite žodžiais, kas pasikeitė](topic:changes-in-words).
- **Azimutai ir kampai.** Įveskite kryptį kaip geodezininko azimutą, pavyzdžiui N45°23'30"E, arba laipsniais, minutėmis ir sekundėmis, bet kur, kur prašomas kampas; AUNITS nustato, kaip rodomi kampai. Žr. [Įvesti ir rodyti azimutus ir kampus](topic:bearings-and-angles).
- **Jūsų SHX šriftai.** Suteikite CadCraft SHX šriftų aplanką, ir teksto stiliai, kurie juos nurodo, piešiami jais ekrane ir spausdinimuose. Žr. [Piešti tekstą savo SHX šriftais](topic:shx-fonts).
- **Diagrama iš teksto.** {{cmd:DIAGRAM}} skaito Mermaid schemą, PlantUML komponentų diagramą, D2 arba nuo–iki sąrašą ir nubraižo redaguojamus blokus bei jungtis. Žr. [Nubraižykite diagramą iš teksto](topic:text-to-diagram).
- **OLE objektai DWG.** {{cmd:OLELIST}} išvardija OLE objektus, kuriuos DWG turi ir CadCraft pats negali įdėti, ir įdeda pasirinkto paveikslėlio kopiją ten, kur nurodote. Žr. [Paveikslėliai](topic:pictures#objects-from-other-programs-ole).
- **Jūsų skaičiavimai lieka su brėžiniu.** Skaičiavimo lapai ir projektavimo pagrindimai saugomi DWG kartu su klasių lentele.

**Braižymas be regėjimo**

- Įjunkite {{ui:Braižymas be regėjimo}} {{ui:Parametrai}} (arba įveskite {{cmd:ACCESS}} ir atsakykite `On`). CadCraft kiekvieną komandą ir rezultatą perskaito per ekrano skaitytuvą, aprašo brėžinį ir tai, kas yra šalia žymeklio, leidžia perkelti žymeklį ir rinkti taškus klaviatūra bei kiekvienam prilipimui ir rankenėlei groja garsą. Ten, kur naršyklė gali atpažinti kalbą jūsų kompiuteryje, komandas galima ištarti balsu. Žr. [Braižykite be regėjimo](topic:draft-without-sight).

**Visose programose**

- **Kalbos.** 54 kalbos; dešimt yra naujos (lietuvių, latvių, bosnių, marathi, telugu, albanų, afrikaansų, filipinų, svahili, uzbekų). Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol jas perskaito gimtakalbis.
- **Įvesties įrenginiai.** Jutiklinė dalis, rašiklis, 3D pelė, žaidimų valdiklis ir MIDI valdikliai.
- **Įrankių juostos eilutės ir ypatybių lentelė.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} siūlo Suvynioti, 2 eilutes arba 1 eilutę kitose programose. CadCraft turi savo nustatymą {{ui:Parametrai}} › {{ui:CadCraft}} (žr. [Įrankių juostos eilutės](topic:settings#toolbar-rows)). Bendra ypatybių lentelė yra trijose kitose programose, ne CadCraft.
- **Problemos, Gyvai ir priedai.** Bendras skydelis Problemos, kuris įspėja kiekvienoje programoje, Gyvai rodinys, kas kur yra CadCraft Studio (žr. [Dirbkite su vienu brėžiniu kartu](topic:work-live)), ir priedų sąrašas.
- **Prijunkite savo DI.** Vienas ryšys nuo CadCraft Studio prie visų aštuonių programų, kiekvienai programai – tik skaitymo, siūlymų ar redagavimo lygis ir paprastais žodžiais užrašytas pagalbininko veiksmų žurnalas. CadCraft pats DI neturi, o Klauskite visose programose naudoja jūsų prijungtą DI.

### Ištaisyta 0.8.1

- **Ypatybės rodė 150 vietoj 12'-6"** pėdų ir colių brėžiniuose. Laukai, kuriuos programa pati skaito, vėl išlaiko savo tekstą.
- **DWG failai, kurių klasių skyrius buvo skaitomas kaip klaidingas tipas** (GitHub cadcraft#5), dabar atsidaro teisingai.
- **Kryžiukas nebeberiasi už iškylančių langų.**
- **Studio ir supakuotos versijos gali keisti kalbą veikimo metu.** Anksčiau buvo tik anglų. Dar neišbandyta visose platformose: praneškite, jei kalba nepasikeičia.
- **Planšetės vertikaliai** atiduoda laisvą tinklelio aukštį drobei, o lapų režimas prasideda ties 760 px ar mažiau.
- **STRETCH su kryžminiu langu ir LIMITS** buvo pranešti Studio 0.8.0 ir jau buvo teisingi 0.8 žiniatinklio versijoje; pranešėjo diegimo programa buvo senesnė. Studio 0.8.1 juos turi.

### Dar nėra šioje versijoje

- **0.8 ir 0.8.1 nepasirašyti kodu.** Windows gali įspėti (pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}); Mac kompiuteryje dešiniuoju pelės mygtuku spustelėkite CadCraft Studio ir pasirinkite {{ui:Atverti}}. Parduotuvės versijos sustabdytos, o iPad ir iPhone versija 0.8.1 nebuvo perkurta.
- **Rašikliu nupiešti eskizai ir eskizų nuotraukos** išbandyti tik su išgalvotomis nuotraukomis ir pele, dar ne su tikru rašikliu, jutikliniu ekranu ar ranka nupieštu eskizu ant popieriaus.
- **Braižymas be regėjimo** patikrintas automatiniais testais, dar ne su ekrano skaitytuvu ar aklu bandytoju.
- **Dalijimasis detalėmis** neturėjo dviejų žmonių patikros, o Team Cloud Plan aplankas kaip Dokumentų aplankas dar nepadarytas.
- **Sujungimas** veikia CadCraft DWG ir DXF failams; tas pats kitų programų failams dar nepadarytas.
- **Anuliavimas per langus:** CadCraft praneša apie kiekvieną baigtą žingsnį, bet Studio dar neturi vieno Anuliuoti visoms programoms; kiekviena programa anuliuoja savus žingsnius.
- **DWG OLE objektai** išsaugomi, bet nepiešiami vietoje.
- **Spausdinimo stiliaus lentelių (CTB failų) skaitymas** iš kitų programų padarytas, bet nepatikrintas su kitos programos failu.
- **Prijunkite savo DI:** vieno paspaudimo prijungimas Studio, prijungiamas žiniatinklio DI, jūsų pačių API raktas Studio ir paskelbtas MCP paketas šioje versijoje nežadami.

Ankstesnės versijos apie ją žr. [Kas nauja 0.7](topic:whats-new-0-7).
