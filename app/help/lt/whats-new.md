---
title: Kas naujo 0.8 ir 0.8.1 versijose
summary: Vaiduoklis, kuris užbaigia jūsų brėžinį, pieštukiniai eskizai ir eskizų nuotraukos, paverstos geometrija, lapai, kurie išsidėsto patys, detalės, siūlomos piešiant, GRIDMOVE ir AUTODIM, žymos, failai, tinkami sujungti, raudonieji žymėjimai, paverčiami revizijomis, braižymas be regėjimo, brėžinio ribos, kampai, SHX šriftai, diagramos iš teksto ir taisymai 0.8.1 versijoje.
keywords: kas naujo, kas nauja, versijos pastabos, keitimų žurnalas, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, automatinis baigimas, vaiduoklis, tab, sketchfix, photosketch, autosheet, detalės, gridmove, autodim, žymos, revizija, sujungimas, git, fossil, prieiga, braižymas be regėjimo, ekrano skaitytuvas, ribos, kampai, aunits, shx, diagrama, ole, istorija, palyginimas, žodžiais, savybės, pėdos ir coliai, tempimas, kalbos, įvesties įrenginiai, problemos, tiesiogiai, asistentai
from: 9dd82db5
---

Tai, kas pasikeitė CadCraft 0.8 ir 0.8.1 versijose, palyginti su 0.7. 0.8 versija (2026 m. lapkričio 1 d.) prideda brėžinio pagalbines priemones, kurios veikia pagal jūsų pačių brėžinį, pagal taisykles jūsų kompiuteryje ir be modelio, o 0.8.1 versija (2026 m. lapkričio 2 d.) ištaiso klaidas, praneštas po jos išleidimo.

## Naujovės

### Brėžinys, kuris užbaigia jūsų mintį

- **Vaiduoklis parodo, kas bus toliau.** Kai nevykdoma jokia komanda, pilkas brūkšninis vaiduoklis rodo, ką sako jūsų brėžinio šablonai: kitą stulpelį tuo pačiu žingsniu, kitą laiptelio pakopą, trūkstamą patalpos sieną. Paspauskite {{key:Tab}}, kad jį nubrėžtumėte kaip vieną anuliavimo žingsnį, arba {{key:Esc}}, kad jį atmestumėte. Jis žiūri tik į naujausius objektus, todėl didelis brėžinys lieka sklandus. Išjunkite jį per {{ui:Parametrai}} › {{ui:CadCraft}} arba komanda {{cmd:AUTOCOMPLETE}} su parinktimi [Išjungti (O)].
- **Kitas taškas braižant liniją.** {{cmd:LINE}} ar {{cmd:PLINE}} vykdymo metu vaiduoklis rodo kitą tašką: kitą laiptelio pakopą, ketvirtą stačiakampio kampą arba tašką, kuris jį uždaro. Priartinkite žymeklį prie jo ir paspauskite {{key:Tab}}, tarsi būtumėte spustelėję tą vietą.
- **Pieštukiniai eskizai tampa tiksliąja geometrija.** {{cmd:SKETCHFIX}}: nubrėžkite grubius brūkšnius pieštuku, pele ar pirštu, ir kiekvienas taps švariu tiese, apskritimu, lanku, stačiakampiu ar polilinija, prilipusia prie jau nubrėžto. Žr. [Piešti pieštuku ir gauti tikslią geometriją](topic:sketch-with-a-pen).
- **Eskizo nuotrauka tampa brėžiniu.** {{cmd:PHOTOSKETCH}} (`PSK`) nuotraukoje randa popierių, ištiesina perspektyvą, pritaiko jūsų nurodytą popieriaus dydį ir mastelį bei kiekvienai pieštuko spalvai perkelia linijas į atskirą sluoksnį. Užrašai nėra perkeliami.
- **Matmenuokite pagal taisykles.** {{cmd:AUTODIM}} (`ADIM`) sukuria matmenų grandines išilgai jūsų pasirinktų kraštinių, bendrą dydį, angų plotius, skylių skersmenis ir, su `Grid`, tinklelio žingsnį. Jis niekada nepakartoja matmens, kuris jau yra.
- **Perkelkite tinklelio liniją, o visi kiti seka.** {{cmd:GRIDMOVE}} (`GM`): sienos, baigiančios tinklelio liniją, tempiasi kartu su ja, sienos išilgai jos, kolonos, jos žymeklis ir žymos juda, o matmenys jai matuoja naują žingsnį. Vienas anuliavimo žingsnis.

### Lapai, detalės ir žymos

- **Lapai, kurie išsidėsto patys.** {{cmd:AUTOSHEET}} paima jūsų pavadintus vaizdus (arba atskiras modelio dalis), parenka popieriaus dydį ir standartinį mastelį bei išdėsto vaizdus naujuose lapuose su antraštės bloku ir pavadinimo bei mastelio užrašu. Viskas lieka redaguojama. Žr. [Išdėstyti lapus už mane](topic:lay-out-sheets-for-me).
- **Jūsų įmonės detalės, siūlomos piešiant.** {{cmd:DETAILS}} (`DET`) saugo jūsų pačių detalių blokus. Kai pasirinktas objektas atitinka vieną iš jų pagal žodžius jo sluoksniuose, blokų pavadinimuose ar pastabose, būsenos juostoje tai nurodoma; pasirinkite jį ir įdėkite. {{cmd:DETAILS}} › Bendrinti įrašo jūsų sąrašą į aplanką Dokumentai ir įtraukia tai, ką pridėjo jūsų komanda. Parametrai išjungia siūlymus.
- **Žymos ant blokų.** {{cmd:TAGS}} apibrėžia žymą (jos tipą, reikšmes, kurias ji gali įgyti, blokus, kuriems ji taikoma), priskiria ją pasirinktoms blokų nuorodoms ir išvardija jas kaip žiniaraštį, kurį galima įrašyti kaip CSV. Apibrėžimai saugomi DWG faile. Žr. [Žymos](topic:tags).
- **Brėžinio ribos.** {{cmd:LIMITS}} nustato brėžiniui stačiakampį: tinklelis jį užpildo, o mastelio keitimas „Viską“ jį parodo. Ribos rodomos kaip kontūras ir įrašomos į DWG bei DXF failus kartu su popieriaus ribomis. Žr. [Nustatyti brėžinio ribas](topic:drawing-limits).

### Darbas su kitais žmonėmis ir kitomis programomis

- **Žymėjimą paverskite revizija.** {{cmd:REDLINE}} nuskaito paketą, kurį įrašo MarkupCraft, ir išvardija kiekvieną pakeitimą. Priimkite arba atmeskite kiekvieną su pastaba; priimtieji gauna revizijos debesį ir revizijų žurnalą vienu anuliavimo žingsniu, o jūs įrašote atsakymų failą, kuris uždaro žymėjimus MarkupCraft. Žr. [Žymėjimą paversti revizija](topic:redline-to-revision).
- **Brėžiniai, kuriuos git ir Fossil gali sujungti.** Įjungus {{ui:Failai, tinkami sujungti}} per {{ui:Parametrai}} › {{ui:CadCraft}}, kiekvienas objektas gauna raktą, kuris niekada nesikeičia (failai maždaug 10 procentų didesni). Tada `cadcraft merge base ours theirs` sujungia dviejų žmonių pakeitimus to paties DWG ar DXF objekto lygiu ir praneša tik apie vietas, kur du žmonės pakeitė tą patį. Žr. [Sujungti dviejų žmonių pakeitimus viename brėžinyje](topic:merge-drawings).
- **Kas pasikeitė, žodžiais.** Skiltyje {{ui:Istorija}} {{ui:Palyginti}} pateikia paprastą sąrašą: kur kas pasikeitė, kokio dydžio yra vietos, kas buvo pridėta, pašalinta ar pakeista ir kokį tekstą redagavo. Žr. [Pasakyti žodžiais, kas pasikeitė](topic:changes-in-words).
- **Kampai ir kryptys.** Kryptį įveskite kaip geodezininko azimutą, pavyzdžiui N45°23'30"E, arba laipsniais, minutėmis ir sekundėmis, bet kur, kur prašoma kampo; AUNITS nustato, kaip rodomi kampai. Žr. [Įvesti ir rodyti azimutus ir kampus](topic:bearings-and-angles).
- **Jūsų pačių SHX šriftai.** Nurodykite CadCraft aplanką su SHX šriftais, ir teksto stiliai, kurie juos įvardija, bus piešiami jais ekrane ir spausdinyje. Žr. [Piešti tekstą jūsų SHX šriftais](topic:shx-fonts).
- **Diagrama iš teksto.** {{cmd:DIAGRAM}} nuskaito Mermaid schemą, PlantUML komponentų diagramą, D2 arba sąrašą „iš–į“ ir nubrėžia redaguojamus blokus bei jungtis. Žr. [Nubrėžti diagramą iš teksto](topic:text-to-diagram).
- **OLE objektai DWG faile.** {{cmd:OLELIST}} išvardija OLE objektus, kuriuos DWG failas turi ir kuriuos CadCraft pats negali įdėti, ir įdeda paveikslėlio kopiją ten, kur nurodote. Žr. [Paveikslėliai](topic:pictures#objects-from-other-programs-ole).
- **Jūsų skaičiavimai lieka su brėžiniu.** Skaičiavimų lapai ir projektavimo priežastys saugomi DWG faile kartu su klasių lentele.

### Braižymas be regėjimo

- Įjunkite {{ui:Braižymas be regėjimo}} skiltyje {{ui:Parametrai}} (arba įveskite {{cmd:ACCESS}} ir atsakykite `On`). CadCraft per ekrano skaitytuvą ištaria kiekvieną komandą ir rezultatą, apibūdina brėžinį ir tai, kas yra šalia žymeklio, leidžia perkelti žymeklį ir rinktis taškus klaviatūra bei kiekvienam prisikabinimui ir rankenėlei paleidžia garsą. Kai jūsų naršyklė gali atpažinti kalbą jūsų kompiuteryje, komandas galima ištarti balsu. Žr. [Braižyti be regėjimo](topic:draft-without-sight).

### Visose programose

- **Kalbos.** 54 kalbos; dešimt yra naujos (lietuvių, latvių, bosnių, marathi, telugu, albanų, afrikaans, filipinų, svahili, uzbekų). Kalbos, be anglų, yra mašininiai juodraščiai, kol jas perskaito gimtakalbis.
- **Įvesties įrenginiai.** Jutiklinė dalis, rašiklis, 3D pelė, žaidimų valdiklis ir MIDI valdikliai.
- **Įrankių juostų eilutės ir savybių lentelė.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} siūlo Perkelti, 2 eilutės arba 1 eilutė kitose programose. CadCraft turi savo nustatymą {{ui:Parametrai}} › {{ui:CadCraft}} (žr. [Įrankių juostos eilutės](topic:settings#toolbar-rows)). Bendra savybių lentelė yra trijose kitose programose, o ne CadCraft.
- **Problemos, tiesiogiai ir priedai.** Bendras skydelis Problemos, kuris įspėja visose programose, Tiesiogiai rodinys, kuriame matote, kas kur yra CadCraft Studio (žr. [Dirbti su vienu brėžiniu kartu](topic:work-live)), ir priedų sąrašas.
- **Prijunkite savo dirbtinį intelektą.** Vienas prisijungimas iš CadCraft Studio prie visų aštuonių programų, su kiekvienai programai nustatytu tik skaitymo, siūlymų ar redagavimo lygiu, ir paprastais žodžiais parašytas asistento veiksmų žurnalas. CadCraft neturi savo dirbtinio intelekto, o Klauskite kiekvienoje programoje naudoja jūsų prijungtą dirbtinį intelektą.

## Ištaisyta 0.8.1 versijoje

- **Savybės rodė 150 vietoj 12'-6"** brėžiniuose su pėdomis ir coliais. Laukai, kuriuos programa nuskaito pati, vėl išlaiko savo tekstą.
- **DWG failai, kurių klasių skyrius buvo nuskaitytas kaip klaidingas tipas** (GitHub cadcraft#5), dabar atsidaro teisingai.
- **Kryžminis žymeklis neberodomas už iššokančių langų.**
- **Studio ir supakuotos laidos gali keisti kalbą veikimo metu.** Anksčiau jos buvo tik anglų kalba. Dar neišbandyta visose platformose: pranešite, jei kalba nepasikeičia.
- **Planšetės vertikalioje padėtyje** atiduoda laisvą tinklelio aukštį darbo sričiai, o lapų režimas prasideda ties 760 px ar mažiau.
- **STRETCH su kertančiu langu ir LIMITS** buvo pranešti Studio 0.8.0 versijoje, o 0.8 interneto versijoje jau veikė teisingai; pranešėjo diegimo programa buvo senesnė. Studio 0.8.1 versijoje jie teisingi.

## Dar nėra šioje versijoje

- **0.8 ir 0.8.1 nėra pasirašytos kodu.** „Windows“ gali įspėti (pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}); „Mac“ kompiuteryje dešiniu pelės klavišu spustelėkite CadCraft Studio ir pasirinkite {{ui:Atverti}}. Parduotuvių versijos sustabdytos, o iPad ir iPhone versija 0.8.1 versijai nebuvo perkurta.
- **Pieštukiniai eskizai ir eskizų nuotraukos** išbandyti tik su išgalvotomis nuotraukomis ir pele, dar ne su tikru rašikliu, jutikliniu ekranu ar ranka popieriuje nubraižytu eskizu.
- **Braižymas be regėjimo** išbandytas automatiniais patikrinimais, dar ne su ekrano skaitytuvu ar neregiu bandytoju.
- **Detalių bendrinimas** nebuvo patikrintas dviejų žmonių, o aplankas Dokumentai kaip Team Cloud Plan aplankas dar nesukurtas.
- **Sujungimas** veikia CadCraft DWG ir DXF failams; kitų programų failams dar nesukurta.
- **Kelių langų anuliavimas:** CadCraft praneša apie kiekvieną baigtą žingsnį, bet Studio dar neturi vieno Anuliuoti visoms programoms; kiekviena programa anuliuoja savo žingsnius.
- **DWG OLE objektai** išlaikomi, bet nepiešiami vietoje.
- **Spausdinimo stilių lenteles (CTB failus)** iš kitų programų skaityti sukurta, bet nepatikrinta su kitos programos failu.
- **Prijunkite savo dirbtinį intelektą:** vienas prisijungimas paspaudus Studio, prijungiamas jungtis naršyklės dirbtiniam intelektui, jūsų pačių API raktas Studio viduje ir paskelbtas MCP paketas šioje versijoje neobjektyvūs.

Ankstesnės versijos aprašymą žr. [Kas naujo 0.7 versijoje](topic:whats-new-0-7).
