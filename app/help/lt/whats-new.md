---
title: Kas naujo 0.9
summary: Brūkšniavimai, kurie seka savo ribą, sluoksnių grupės, aukštai viename brėžinyje, 2D išmanios sienos su durimis ir langais, teksto stiliai bei formatuojamas teksto redaktorius, plaukiojanti komandų eilutė, įtraukimas prie tinklelio, dešimt lanko būdų ir Dokumentų skydelis.
keywords: kas naujo, 0.9, versijų pastabos, keitimų žurnalas, brūkšniavimas, hatch, susietas brūkšniavimas, hatchedit, pat failas, šablono failas, sluoksnių grupės, laygroup, aukštai, aukštai sluoksniuose, floorlayers, išmanios sienos, siena, durys, langas, sienų įrankiai, teksto stilius, stilius, mtext redaktorius, pastraipos tekstas, formatavimas, plaukiojanti komandų eilutė, komandų eilutė, viršutinė sritis, kompaktiška, įtraukimas prie tinklelio, grid snap, f9, lankas, dokumentų skydelis, paėmimas, JK plieno profiliai, draw.io, tajų tekstas, dxf r12, kas naujo, 0.8, 0.8.1, versija, naujos funkcijos, automatinis užbaigimas, šmėkla, tab, sketchfix, photosketch, autosheet, detalės, gridmove, autodim, žymos, raudonasis žymėjimas, sujungimas, git, fossil, prieiga, braižymas be regėjimo, ekrano skaitytuvas, ribos, kampai, aunits, shx, diagrama, ole, istorija, palyginimas, žodžiais, ypatybės, pėdos ir coliai, ištempimas, kalbos, įvesties įrenginiai, problemos, gyvai, asistentai
from: 8b6dea0b
---

Tai, kas pasikeitė CadCraft 0.9 versijoje, palyginti su 0.8.1. CadCraft yra 2D ir 3D braižymo programa, priklausanti CadCraft Studio 0.9 ir jos aštuoniems programoms. 0.9 užbaigia plano braižymą, prideda teksto stilius ir tikrą teksto redaktorių bei suteikia daugiau vietos ekrane.

## Nauja

### Plano braižymas

- **Brūkšniavimai seka savo ribą.** {{cmd:HATCH}} susisieja su tuo, ką riboja. Perkelkite, pasukite ar keiskite ribos mastelį – brūkšniavimas ir jo šablonas seka; pakeiskite formą – brūkšniavimas apskaičiuojamas iš naujo. {{cmd:HATCHEDIT}} (`HE`) keičia brūkšniavimą vėliau ir sukuria ar nutraukia ryšį. Žr. [Brūkšniavimas ir užpildo sritys](topic:hatch).
- **Brūkšniavimo šablono failai.** Prie {{cmd:HATCH}} klausimo „Pasirinkite vidinį tašką“ įveskite `[Šablono failas (F)]` ir pasirinkite `.pat` failą. Išbandyti tik failai, parašyti įprastu formatu.
- **Sluoksnių grupės.** Skydelyje {{ui:Įrankiai}} grupėje {{ui:Sluoksniai}}: {{ui:Nauja grupė}}, {{ui:Pridėti paruoštas grupes}}, {{ui:Grupuoti pagal pavadinimą}} ir {{ui:Rasti sluoksnį}}; arba įveskite {{cmd:LAYGROUP}} (`LG`). Žr. [Organizuokite brėžinį sluoksniais](topic:layers#group-layers).
- **Aukštai sluoksniuose.** {{cmd:FLOORS}} (`FLR`), arba {{ui:Aukštai…}} {{ui:Daugiau}} meniu grupėje {{ui:Vaizdas}}. Lapo rodymo sritis gali rodyti vieną aukštą pagal {{ui:Rodomas aukštas}} Ypatybėse. {{cmd:FLOORLAYERS}} paverčia aukštus sluoksniais failui, kurį siunčiate kitam. Žr. [Aukštų sudėjimas viename brėžinyje](topic:floors).
- **2D išmanios sienos, durys ir langai.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) ir {{cmd:DELOPENING}}. Kampai, T jungtys ir susikirtimai apskaičiuojami už jus. Sienos saugo, kaip jungiasi, o Ypatybėse atsiranda {{ui:Drausti jungimą pradžioje}} / {{ui:Drausti jungimą gale}}, {{ui:Padėties linija}} ir redaguojamas {{ui:Ilgis}}. Žr. [Braižykite 2D sienas, duris ir langus](topic:walls-2d).
- **Sienų įrankis planų sienoms.** Įveskite {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} ir kitas. Įrankių juostos mygtukų jiems dar nėra. Žr. [Sienų formos, pjūviai, poslinkiai ir fiksavimai 2D sienoms](topic:wall-tools-2d).

### Tekstas

- **Teksto stiliai.** {{cmd:STYLE}} (`ST`), arba {{ui:Teksto stilius}} įrankių juostoje {{ui:Braižymas}}: pavadinti stiliai su šriftu, aukščiu, pločio koeficientu ir pasvirimu. Žr. [Nustatykite teksto šriftą ir dydį teksto stiliais](topic:text-styles).
- **Formatuojamas pastraipų teksto redaktorius.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} arba dukart spustelėjus tekstą atsidaro langelis su šriftu, dydžiu, paryškinimu, pasvirimu, pabraukimu, perbraukimu, spalva, lygiavimu bei laipsnio, ± ir skersmens ženklais, taip pat {{ui:Gerai}} ir {{ui:Atšaukti}}. Žr. [Formatuokite pastraipų tekstą](topic:format-paragraph-text).
- **Diagrama iš draw.io XML.** {{cmd:DIAGRAM}} (`T2D`) taip pat skaito įklijuotą draw.io XML. Žr. [Nubraižykite diagramą iš teksto](topic:text-to-diagram).
- **Tajų tekstas PDF spausdinyje.** Anksčiau jis spausdinosi kaip klaustukai.

### Daugiau vietos ir braižymo pagalbos

- **Plaukiojanti, plonesnė komandų eilutė ir kompaktiška viršutinė sritis.** Vilkite komandų eilutės rankenėlę, kad ji taptų plaukiojanti, vilkite jos viršutinį kraštą, kad būtų mažiau eilučių; {{key:F2}} atveria istoriją. {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Komandų eilutė}} ir viršutinės srities pasirinkimai turi tuos pačius nustatymus. Žr. [Parametrai](topic:settings#command-line).
- **Įtraukimo meniu.** Dešiniuoju pelės klavišu spustelėkite {{ui:Prilipimas}} būsenos juostoje arba įveskite {{cmd:OSNAP}}.
- **Įtraukimas prie tinklelio.** {{ui:Prisegimas prie tinklelio}} mygtukas būsenos juostoje arba {{key:F9}}: pasirinkti taškai pereina į artimiausią tinklelio tašką, kai jų neperėmė objekto įtraukimas.
- **Lankas dešimčia būdų ir Tęsti.** {{ui:Lankas}} įrankių juostoje {{ui:Braižymas}} arba {{cmd:ARC}}: 3 taškai, Start/Center/End šeima ir Center/Start/End šeima, bei Tęsti (paspauskite {{key:Enter}} pradžios taške) nuo paskutinės linijos, lanko ar polilinijos.
- **Dokumentų skydelis.** {{cmd:DOCUMENTS}} (`DOCS`), arba {{ui:Dokumentai…}} {{ui:Daugiau}} meniu grupėje {{ui:Vaizdas}}: peržiūra, būsena ir paėmimas kiekvienam brėžiniui projekto aplanke. Atsidaro kaip centruotas dialogas. Žr. [Dokumentai](topic:documents).

### Failai

- **JK plieno profiliai.** 976 profiliai Standard skydelyje, įvedami kaip rašoma brėžiniuose (pavyzdžiui, `305x165x40 UB`).
- **Pietų Afrikos paketai** (braižymo praktika ir statybos reglamentai) kaip Statybos reglamentų priedo paketai. Skaičiai nepatikrinti.
- **CadCraft priedai**, pridedami pagal poreikį ir pagal nutylėjimą išjungti: interjero apšvietimo projektavimas, lustų projektavimas (HDL į išdėstymą), maršrutizatoriaus graviravimas, grandinių modeliavimas, rolerinių grandinių žvaigždės ir Statybos reglamentų šalių paketai.

## Ištaisyta

- Brūkšniavimo perkėlimas, pasukimas ar mastelio keitimas paliko jo šabloną.
- {{cmd:GRIDMOVE}} pernešė visą plano sieną, kuri prasideda tik ant tinklelio linijos. Dabar sienos vertinamos pagal savo galus.
- Tinklelis rodomas tik brėžinio ribose, nors ribos buvo išjungtos.
- Blokų sąrašas šoniniame skydelyje slenka, o vardas, kuris nėra blokas, išvardija blokus, prasidedančius tuo pačiu („Ar turėjote omenyje?“).
- DXF R12 failai, kuriuos AutoCAD atmetė („Unknown group 1001 for table“), dabar ten atsidaro.
- Labai dideli failai (apie 70 000 objektų ir daugiau) neatsidarydavo su „Maximum call stack size exceeded“.
- DWG failai iš AutoCAD 2018 ir naujesnių su aukšta priežiūros versija neatsidarydavo su „bad BITLONG code 11“.
- Pastraipų teksto lange naujas dydis, įvestas pasirinktai daliai, palieka pasirinkimą.

## Visose programose

Pagalbos užuominos prie kiekvieno valdiklio su patarimu, uždaromas pradžios patarimas, skirtukų juostos, kurios slenka, kai netelpa, ir naršyklės skirtuko pavadinimas, kuris seka atidarytą brėžinį (`<brėžinys> - CadCraft | CadCraft`). {{ui:Parametrai}} › {{ui:Išdėstymas}} dabar yra išskleidžiamas sąrašas su dviejų eilučių parinktimis. Kalbų sąrašas {{ui:Parametrai}} ilgesnis nei 0.8 versijoje. Gyvas bendras redagavimas, bibliotekos kolekcijos ir svorio bei temperatūros vienetai aprašyti Studio pastabose.

## Sąžiningi apribojimai

- Pastraipų tekste nėra punktų ar numeruotų sąrašų, tabuliacijos liniuotės ar lygiavimo į abi puses. Spausdinami PDF tekstai nustatyti Helvetica šriftu.
- Plano sienos tiesios, todėl lankas braižomas kaip trumpos sienos. Bendruomenės rankinis sienų įrankio patikrinimas dar laukia.
- Sluoksnių grupės neįrašomos AutoCAD savo formatu, todėl AutoCAD rodo plokščią sąrašą. Kitos programos rodo visus aukštus kartu, nebent paleisite {{cmd:FLOORLAYERS}}.
- Dokumentų skydelio dar nėra išbandę du žmonės tikrame bendrame aplanke. Maršrutizatoriaus graviravimas nebuvo paleistas nė vienoje tikroje mašinoje. Apšvietimo skaičiavimas patikrintas su fotonų pėdsaku, o ne kita programa. Inžineriniai priedai yra tik patikros pagalbos, o ne inžinerio peržiūros pakaitalas.
- Kalbos, išskyrus anglų, yra mašininiai juodraščiai, o dalis naujų žodžių – tik anglų kalba.

## Anksčiau: 0.8 ir 0.8.1

Tai, kas pasikeitė CadCraft 0.8 ir 0.8.1 versijose, palyginti su 0.7. 0.8 (2026 m. lapkričio 1 d.) prideda braižymo pagalbininkus, kurie dirba iš jūsų pačių brėžinio, pagal taisykles jūsų kompiuteryje ir be modelio, o 0.8.1 (2026 m. lapkričio 2 d.) ištaiso po jos praneštas klaidas.

### Nauja

**Brėžinys, kuris užbaigia jūsų mintį**

- **Šmėkla rodo, kas bus toliau.** Kai nieko nevyksta, pilka brūkšninė šmėkla rodo, ką jūsų brėžinio šablonai sako, kas bus toliau: kitas stulpelis tuo pačiu atstumu, kitas laiptų žingsnis, trūkstama kambario siena. Paspauskite {{key:Tab}}, kad nubraižytumėte ją vienu anuliavimo žingsniu, arba {{key:Esc}}, kad ją atmestumėte. Ji žiūri tik į naujausius objektus, todėl didelis brėžinys lieka sklandus. Išjunkite ją {{ui:Parametrai}} › {{ui:CadCraft}} arba su {{cmd:AUTOCOMPLETE}} `Off`.
- **Kitas taškas braižant liniją.** {{cmd:LINE}} ar {{cmd:PLINE}} metu šmėkla yra kitas taškas: kitas laiptų žingsnis, ketvirtasis stačiakampio kampas arba taškas, kuris jį uždaro. Priartinkite žymeklį ir paspauskite {{key:Tab}}, tarsi būtumėte spustelėję.
- **Rankiniai eskizai tampa tiksliais.** {{cmd:SKETCHFIX}}: braižykite grubias linijas pieštuku, pele ar pirštu, ir kiekviena tampa švaria linija, apskritimu, lanku, stačiakampiu ar polilinija, prisitraukiančia prie to, kas jau nubraižyta. Žr. [Eskizuokite pieštuku ir gaukite tikslią geometriją](topic:sketch-with-a-pen).
- **Eskizo nuotrauka tampa brėžiniu.** {{cmd:PHOTOSKETCH}} (`PSK`) randa popierių nuotraukoje, ištiesina perspektyvą, pritaiko jūsų nurodytą popieriaus dydį ir mastelį bei perbraižo pieštuko linijas į sluoksnį kiekvienai pieštuko spalvai. Užrašai nebraižomi.
- **Matmenys pagal taisykles.** {{cmd:AUTODIM}} (`ADIM`) sudaro matmenų grandines išilgai jūsų pasirinktų kraštinių, bendrą dydį, angų plotį, skylių skersmenis ir, su `Grid`, tinklelio žingsnį. Jis niekada nekartoja matmens, kuris jau yra.
- **Perkelkite tinklelio liniją, ir rinkinys seka.** {{cmd:GRIDMOVE}} (`GM`): sienos, kurios baigiasi ant tinklelio linijos, ištempiamos kartu su ja, sienos išilgai jos, stulpeliai, jos burbulas ir žymė juda, o matmenys ant jos matuoja naują tarpą. Vienas anuliavimo žingsnis.

**Lapai, detalės ir žymos**

- **Lapai, kurie išsidėsto patys.** {{cmd:AUTOSHEET}} paima jūsų pavadintus vaizdus (arba atskiras modelio dalis), parenka popieriaus dydį ir standartinį mastelį bei išdėsto vaizdus naujuose lapuose su antraštės bloku ir pavadinimo bei mastelio užrašu. Viskas lieka redaguojama. Žr. [Išdėstykite lapus man](topic:lay-out-sheets-for-me).
- **Jūsų firmos detalės, pasiūlomos braižant.** {{cmd:DETAILS}} (`DET`) saugo jūsų pačių detalių blokus. Kai pasirinkimas atitinka vieną pagal žodžius sluoksniuose, blokų pavadinimuose ir pastabose, būsenos juostoje tai nurodoma; pasirinkite ir padėkite. {{cmd:DETAILS}} › Share įdeda jūsų sąrašą į Dokumentų aplanką ir atneša tai, ką pridėjo jūsų komanda. Parametrai išjungia pasiūlymus.
- **Žymos ant blokų.** {{cmd:TAGS}} apibrėžia žymą (jos rūšį, reikšmes, kurias ji gali įgyti, blokus, kuriems taikoma), priskiria ją pasirinktoms blokų nuorodoms ir išvardija jas kaip lentelę, kurią galite įrašyti kaip CSV. Apibrėžimai saugomi DWG. Žr. [Žymos](topic:tags).
- **Brėžinio ribos.** {{cmd:LIMITS}} nustato stačiakampį brėžiniui: tinklelis jį užpildo, o Visi mastelis jį parodo. Ribos rodomos kaip kontūras ir įrašomos DWG bei DXF kartu su popieriaus ribomis. Žr. [Nustatykite brėžinio ribas](topic:drawing-limits).

**Darbas su kitais žmonėmis ir kitomis programomis**

- **Pažymėjimą paverskite revizija.** {{cmd:REDLINE}} skaito paketą, kurį rašo MarkupCraft, ir išvardija kiekvieną pakeitimą. Priimkite ar atmeskite kiekvieną su pastaba; priimtieji gauna revizijos debesį ir revizijos žurnalą viename anuliavimo žingsnyje, o jūs įrašote atsakymų failą, kuris uždaro žymėjimus MarkupCraft. Žr. [Pažymėjimą paverskite revizija](topic:redline-to-revision).
- **Brėžiniai, kuriuos git ir Fossil gali sujungti.** Įjungus {{ui:Failai, tinkami sujungti}} {{ui:Parametrai}} › {{ui:CadCraft}}, kiekvienas objektas gauna raktą, kuris niekada nesikeičia (failai apie 10 procentų didesni). `cadcraft merge base ours theirs` tada sujungia dviejų žmonių pakeitimus to paties DWG ar DXF objektas po objekto ir praneša tik ten, kur du žmonės pakeitė tą patį. Žr. [Sujunkite dviejų žmonių pakeitimus viename brėžinyje](topic:merge-drawings).
- **Kas pasikeitė, žodžiais.** Istorijoje {{ui:Palyginti}} pateikia paprastą sąrašą: kur kas pasikeitė, kokio dydžio tos vietos, kas buvo pridėta, pašalinta ar pakeista, ir redaguotas tekstas. Žr. [Pasakykite žodžiais, kas pasikeitė](topic:changes-in-words).
- **Kampai ir pakraipos.** Įveskite kryptį kaip geodezinį kampą, pavyzdžiui, N45°23'30"E, arba laipsniais, minutėmis ir sekundėmis, bet kur, kur prašoma kampo; AUNITS nustato, kaip rodomi kampai. Žr. [Įveskite ir rodykite kampus](topic:bearings-and-angles).
- **Jūsų SHX šriftai.** Nurodykite CadCraft aplanką su SHX šriftais, ir teksto stiliai, kurie juos vardija, piešiami tais šriftais ekrane ir spausdiniuose. Žr. [Braižykite tekstą savo SHX šriftais](topic:shx-fonts).
- **Diagrama iš teksto.** {{cmd:DIAGRAM}} skaito Mermaid srauto schemą, PlantUML komponentų diagramą, D2 ar iš-kur-į-kur sąrašą ir nubraižo blokus bei jungtis, kurias galite redaguoti. Žr. [Nubraižykite diagramą iš teksto](topic:text-to-diagram).
- **OLE objektai DWG.** {{cmd:OLELIST}} išvardija OLE objektus, kuriuos DWG turi ir kuriuos CadCraft pats nemoka išdėstyti, ir įdeda paveikslėlio kopiją ten, kur nurodote. Žr. [Paveikslėliai](topic:pictures#objects-from-other-programs-ole).
- **Jūsų skaičiavimai lieka su brėžiniu.** Skaičiavimų lapai ir projektavimo priežastys saugomi DWG kartu su klasių lentele.

**Braižymas be regėjimo**

- Įjunkite {{ui:Braižymas be regėjimo}} {{ui:Parametrai}} (arba įveskite {{cmd:ACCESS}} ir atsakykite `On`). CadCraft per ekrano skaitytuvą ištaria kiekvieną komandą ir rezultatą, aprašo brėžinį ir tai, kas yra šalia žymeklio, leidžia perkelti žymeklį ir rinkti taškus klaviatūra, bei groja garsą kiekvienam įtraukimui ir rankenėlei. Kur jūsų naršyklė gali atpažinti kalbą jūsų kompiuteryje, komandas galima ištarti. Žr. [Braižykite be regėjimo](topic:draft-without-sight).

**Visose programose**

- **Kalbos.** 54 kalbos; dešimt naujų (lietuvių, latvių, bosnių, maratų, telugų, albanų, afrikanų, filipiniečių, suahilių, uzbekų). Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol gimtoji kalba jų neperskaitys.
- **Įvesties įrenginiai.** Jutiklinė plokštė, rašiklis, 3D pelė, žaidimų valdiklis ir MIDI valdikliai.
- **Įrankių juostos eilutės ir savybių lentelė.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} kitose programose siūlo Tilpti, 2 eilutes ar 1 eilutę. CadCraft turi savo nustatymą {{ui:Parametrai}} › {{ui:CadCraft}} (žr. [Įrankių juostos eilutės](topic:settings#toolbar-rows)). Bendra savybių lentelė yra trijose kitose programose, ne CadCraft.
- **Problemos, gyvai ir priedai.** Bendras Problemų skydelis, kuris įspėja kiekvienoje programoje, {{ui:Kintama}} vaizdas CadCraft Studio, rodantis, kas kur yra (žr. [Dirbkite su vienu brėžiniu kartu](topic:work-live)), ir priedų sąrašas.
- **Prijunkite savo DI.** Vienas ryšys nuo CadCraft Studio su visomis aštuoniomis programomis, kiekvienai programai su tik skaitymo, siūlymų ar redagavimo lygiu ir paprastų žodžių veiksmų žurnalu. CadCraft DI neturi, o {{ui:Klausti}} visose programose naudoja jūsų prijungtą DI.

### Ištaisyta 0.8.1

- **Savybės rodė 150 vietoj 12'-6"** brėžiniuose su pėdomis ir coliais. Laukai, kuriuos programa nuskaito pati, vėl išlaiko savo tekstą.
- **DWG failai, kurių klasių skyrius buvo nuskaitytas kaip klaidingo tipo** (GitHub cadcraft#5), dabar atsidaro teisingai.
- **Kryžminė žymeklio linija nebesirodo už iškylančių langų.**
- **Studio ir supakuotos versijos gali keisti kalbą veikimo metu.** Anksčiau buvo tik anglų. Dar neišbandyta visose platformose: praneškite, jei kalba nepasikeičia.
- **Planšetės vertikaliai** suteikia laisvą tinklelio aukštį drobei, o lapų režimas prasideda ties 760 px ar mažiau.
- **STRETCH su kryžminiu langu ir LIMITS** buvo pranešta Studio 0.8.0 versijoje, bet žiniatinklio 0.8 versijoje jau veikė teisingai; pranešėjo diegimo programa buvo senesnė. Studio 0.8.1 juos turi.

### Dar nėra šioje versijoje

- **0.8 ir 0.8.1 neturi kodo parašo.** Windows gali įspėti (pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}); Mac kompiuteryje dešiniuoju pelės klavišu spustelėkite CadCraft Studio ir pasirinkite {{ui:Atverti}}. Parduotuvių versijos sustabdytos, o iPad ir iPhone versija 0.8.1 nebuvo perstatyta.
- **Rašiklio eskizai ir eskizų nuotraukos** išbandyti tik su išgalvotomis nuotraukomis ir pele, dar ne su tikru rašikliu, jutikliniu ekranu ar ranka pieštu eskizu popieriuje.
- **Braižymas be regėjimo** patikrintas automatiniais testais, dar ne su ekrano skaitytuvu ar neregiu testuotoju.
- **Detalių dalijimasis** nebuvo patikrintas dviejų žmonių, o Team Cloud Plan aplankas kaip Dokumentų aplankas dar nepadarytas.
- **Sujungimas** veikia CadCraft DWG ir DXF failams; kitų programų failams dar nepadaryta.
- **Anuliavimas tarp langų:** CadCraft praneša apie kiekvieną baigtą žingsnį, bet Studio dar neturi vieno anuliavimo visoms programoms; kiekviena programa anuliuoja savo žingsnius.
- **DWG OLE objektai** išsaugomi, bet nepiešiami vietoje.
- **Spausdinimo stilių lentelių (CTB failų) skaitymas** iš kitų programų sukurtas, bet nepatikrintas su kitos programos failu.
- **Prijunkite savo DI:** vieno paspaudimo prijungimas Studio, įmontuota jungtis naršyklės DI, jūsų pačių API raktas Studio ir paskelbtas MCP paketas šioje versijoje nežadami.

Ankstesnę versiją žr. [Kas naujo 0.7](topic:whats-new-0-7).
