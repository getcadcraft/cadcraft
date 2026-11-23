---
title: CadCraft nustatymai
summary: Braižymo programos nustatymai: žymeklio dydis, kur įklijuota kopija kabo nuo žymeklio, ką spustelėjimas daro pasirinkimui, kiek eilučių naudoja įrankių juosta, kur stovi komandų eilutė ir koks ji aukštas, kompaktiška viršutinė sritis ir kampo indikatorius.
keywords: komandų eilutė, plaukianti komandų eilutė, plaukti, prijungti, viena eilutė, f2, komandų istorija, commandline, cmdline, toparea, viršutinė sritis, kompaktiškas, cursorsize, visas ekranas, kryžiukas, nuo krašto iki krašto, įrankių juostos eilutės, įrankių juostos rodymas, ctrl f1, nustatymai, parinktys, kampo indikatorius, žiūros kubas, ašies piktograma, ucs piktograma, žymeklis, kryžiukas, pasirinkimo langelis, įklijavimo taškas, bazinis taškas, objektų spustelėjimas, pasirinkimas, pickadd, shift, atstatyti
from: ae1a81db
---

Atverkite {{ui:Parametrai}} su krumpliaračiu programos juostoje arba {{key:Mod+,}}. Pirmasis skirtukas, {{ui:CadCraft}}, turi šios programos nustatymus; {{ui:Bendra}} turi tuos, kuriuos bendrai naudoja visos šeimos programos (tema, skydelių teksto dydis ir pločiai, įrankių juostos išvaizda ir tvarka). CadCraft nustatymai egzistuoja tik programoje: keičiate juos čia, o ši naršyklė juos prisimena. {{ui:Atstatyti CadCraft nustatymus}} grąžina kiekvieną į pradinę padėtį.

## Žymeklis

**Mažas**, **Vidutinis** (pradinis), **Didelis** arba **Visas ekranas**: kryžiuko ir pasirinkimo langelio dydis brėžinyje. Didesnis pasirinkimo langelis pasirenka objektus ir iš šiek tiek didesnio atstumo, o tai padeda jutikliniam ekranui ar labai smulkiam brėžiniui.

**Visas ekranas** nubrėžia kryžiuko dvi linijas nuo krašto iki krašto per visą brėžinį, taip pat kai nevykdoma jokia komanda, kad galėtumėte akimis patikrinti, ar du dalykai sutampa per visą vaizdą. Kai vaizdas padalytas, linijos lieka skydelyje, su kuriuo dirbate. Tas pats kaip AutoCAD {{cmd:CURSORSIZE}} 100: įveskite {{cmd:CURSORSIZE}} ir 100 visam ekranui; mažesnis skaičius pasirenka artimiausią dydį (mažiau nei 5 – Mažas, 5–9 – Vidutinis, 10–99 – Didelis).

## Įklijavimo taškas

Kur įklijuota kopija kabo nuo žymeklio po {{key:Mod+V}} ({{cmd:PASTECLIP}}), kol spustelite:

- **Apatinis kairysis kampas** (pradinis): nukopijuotų objektų apimties apatinis kairysis kampas, kaip AutoCAD.
- **Centras**: jų apimties vidurys. Patogu simbolį pagal akį įdėti.

Kopija, padaryta su `COPYBASE`, visada kabo nuo bazinio taško, kurį pasirinkote. {{ui:Įklijuoti vietoje}} ({{key:Mod+Shift+V}}) ignoruoja šį nustatymą: išlaiko pradines koordinates. Žr. [Kopijuoti, įklijuoti ir dubliuoti](topic:copy-paste).

## Objektų spustelėjimas

Ką spustelėjimas brėžinyje daro pasirinkimui, kai nevykdoma jokia komanda:

- **Prideda prie pasirinkimo** (pradinis): kiekvienas spustelėjimas ar langas prideda objektus; {{key:Shift}}+spustelėjimas arba {{key:Shift}}+langas juos išima.
- **Pakeičia pasirinkimą**: spustelėjimas ar langas pasirenka tik tai, ką pagauna. {{key:Shift}}+spustelėjimas prideda objektą arba išima jau pasirinktą; {{key:Shift}}+langas prideda.

Prie `Pasirinkite objektus:` raginimo komandos viduje spustelėjimai visada prideda (o {{key:Shift}} išima), nepriklausomai nuo šio nustatymo. Žr. [Pasirinkti objektus](topic:select-objects).

## Spustelėjimas tuščioje vietoje

Ką daro spustelėjimas vietoje, kur nėra objekto, kai nevykdoma jokia komanda. Abiem atvejais prasideda pasirinkimo langas (antras spustelėjimas jį baigia).

- **Išvalo pasirinkimą** (pradinis): tai, kas buvo pasirinkta, atleidžiama. Laikykite {{key:Shift}} spustelėdami, kad išliktų.
- **Palieka pasirinkimą**: pasirinkimas lieka, kaip kitose braižymo programose; langas prie jo prideda. Paspauskite {{key:Esc}}, kad išvalytumėte pasirinkimą.

## Vilkimas pasirinkimui

Ką daro paspaudimas ir vilkimas tuščioje vietoje:

- **Lasas** (pradinis): laisvos rankos kontūras. Jei pirmiausia vilkiate į dešinę, pasirenkama tai, kas visiškai telpa viduje; į kairę – tai, ką liečia. {{key:Space}} vilkimo metu perjungia tarp lango, kryžminio ir tvoros.
- **Stačiakampis**: dėžė, kurią nubrėžia spustelėjimas ir antras spustelėjimas.

{{cmd:LASSOMODE}} `1` arba `0` nustato tą patį. Žr. [Lasso pasirinkimas](topic:lasso-selection).

## Vilkimas apkirpimui ir pratęsimui

Ką daro paspaudimas tuščioje vietoje ir vilkimas {{cmd:TRIM}} bei {{cmd:EXTEND}} komandose:

- **Kelias** (pradinis): laisvos rankos kelias; kiekvienas gabalas, kurį jis kerta, apkerpamas (arba pratęsiamas).
- **Langas**: dėžė; kiekvienas gabalas, kurį ji liečia, apkerpamas, kaip daro `C` parinktis.

Žr. [Apkirpti ir pratęsti](topic:trim-and-extend).

## Įrankių juostos padėtis

{{ui:CadCraft}} › {{ui:Įrankių juostos padėtis}}: **Viršuje** (pradinė, kaip visada buvo), **Apačioje**, **Kairėje** arba **Dešinėje**. Kairėje ar dešinėje įrankių grupės sudėliojamos stulpeliu, kuris slenka, kai yra aukštesnis už langą, o mygtukai susivynioja po du ar tris eilutėje. Pasirinkimas išsaugomas kartu su jūsų nustatymais, o {{cmd:TOOLBARDOCK}} (`TBDOCK`) nustato jį iš komandų eilutės. {{ui:Bendra}} › {{ui:Atstatyti išdėstymą}} grąžina įrankių juostą viršuje.

Meniu stilių juostos guli įrankių juostoje ir juda su ja, bet stilius {{ui:Juosta}} sukurtas bėgti per viršų ar apačią: iš šono jis gauna siaurą slenkantį stulpelį. Telefone įrankių juosta lieka ten, kur ją padeda telefono išdėstymas.

## Įrankių juostos eilutės

Kiek eilučių įrankiai naudoja virš brėžinio CadCraft įrankių juostoje ir stiliuose {{ui:Braižymo klasikinis}} bei {{ui:Juosta}}:

- **Suvynioti pagal vietą** (pradinis): įrankiai susivynioja pagal lango plotį.
- **2 eilutės**: daugiausia dvi eilutės. Kai įrankiai susivynioja į dvi eilutes ar mažiau esant tokiam pločiui, jie tiesiog susivynioja; kitu atveju stovi dviejose eilutėse, kurios slenka į šalį.
- **1 eilutė**: viena eilutė, kuri slenka į šalį, o tai brėžiniui palieka daugiausia vietos.

{{key:Shift+Ctrl+F1}} perjungia tarp trijų, o {{cmd:TOOLBARROWS}} nustato vieną. Ką mygtukai rodo (piktogramas ir tekstą, tik piktogramas ar tik tekstą) nustato {{ui:Bendra}} › {{ui:Įrankių juosta}}; {{key:Ctrl+F1}} perjungia, o {{cmd:TOOLBAR}} nustato.

## Komandų eilutė

Komandų eilutė gali likti prijungta po brėžiniu, kaip visada buvo, arba plaukti virš jo, ir ji gali būti plona kaip viena eilutė.

- **Atplėškite ją.** Vilkite rankenėlę kairiajame gale į brėžinį arba pasirinkite {{ui:Plaukti virš brėžinio}} jos meniu {{ui:Komandų eilutės parinktys}} (trys taškai dešiniajame gale). Vėl vilkite rankenėlę, kad perkeltumėte; jos vieta išsaugoma, kai keičiasi lango dydis. Vilkite dešinįjį kraštą, kad padarytumėte platesnę ar siauresnę. Numeskite ją ant būsenos juostos arba pasirinkite {{ui:Prijungti apačioje}}, kad vėl prijungtumėte.
- **Padarykite ją plonesnę ar aukštesnę.** Vilkite viršutinį kraštą: kiekvienas žingsnis – viena istorijos eilutė. Iki nulio eilučių ji yra **viena eilutė**: tik raginimas ir tai, ką įvedate, o naujas pranešimas trumpam rodomas virš jos. Dvigubas spustelėjimas ant viršutinio krašto perjungia tarp vienos eilutės ir aukščio, kurį turėjote.
- **Istorija.** {{key:F2}} arba laikrodžio mygtukas komandų eilutėje ({{ui:Komandų istorija (F2)}}) atveria visą istoriją virš eilutės (po ja, kai eilutė plaukia arti lango viršaus). Rašymas vis dar eina į komandų eilutę; {{key:PageUp}} ir {{key:PageDown}} slenka istoriją, o {{key:Esc}}, {{key:F2}} arba spustelėjimas kitur ją uždaro. Jūsų klavišas F2 turi pirmenybę.
- **Iš klaviatūros.** Rankenėlė yra mygtukas: kai ji fokusuota, rodyklių klavišai perkelia plaukiančią komandų eilutę (su {{key:Shift}} – didesniais žingsniais); {{key:Up}} atplėšia prijungtą, o {{key:Down}} apatiniame krašte ją prijungia. Viršutinis kraštas yra skirtukas: {{key:Up}} ir {{key:Down}} prideda arba atima eilutę, {{key:Home}} padaro vieną eilutę, {{key:End}} – aukščiausią. Ekrano skaitytuvai vis tiek girdi kiekvieną pranešimą, įskaitant vienos eilutės komandų eilutę.

{{ui:CadCraft}} › {{ui:Komandų eilutė}} turi tuos pačius pasirinkimus: {{ui:Prijungta apačioje}} arba {{ui:Plaukianti}}, {{ui:Rodomos istorijos eilutės}} (0–12) ir {{ui:Standartinis aukštis}}. {{cmd:COMMANDLINE}} (`CMDLINE`) nustato juos iš komandų eilutės. Vieta ir aukštis CadCraft saugomi šioje naršyklėje kartu su kitu išdėstymu, todėl išsaugota darbo aplinka juos perneša; {{ui:Bendra}} › {{ui:Atstatyti išdėstymą}} komandų eilutę vėl prijungia standartiniu aukščiu. Telefone komandų eilutė lieka prijungta su viena istorijos eilute; istorijos mygtukas ten veikia taip pat.

{{ui:CadCraft}} › {{ui:Parinkčių raidės}} saugo raides, kurias pasirinkote komandų parinkčių atsakymams: {{ui:Redaguoti…}} atveria failą, {{ui:Importuoti…}} pakeičia jį pasirinktu failu, {{ui:Eksportuoti}} įrašo jį. Žr. [Suteikite komandos parinktims savo raides](topic:option-letters).

Kai langas trumpas ir išdėstymo patikra siūlo tankesnį išdėstymą, jos {{ui:Taip}} taip pat paverčia komandų eilutę į vieną eilutę, jei brėžinys po įrankių juostų vis dar trumpas.

## Viršutinė sritis

{{ui:CadCraft}} › {{ui:Viršutinė sritis}}: **Standartinė** (pradinė) arba **Kompaktiška**. Kompaktiška palaiko juostas virš brėžinio mažas visuose meniu stiliuose: grupių pavadinimai ir žodžiai po piktogramomis išnyksta (patarimai ir ekrano skaitytuvai jų vis tiek turi), o mygtukai tankesni. Ji veikia kartu su [Įrankių juostos eilutės](topic:settings#toolbar-rows): Kompaktiška ir **1 eilutė** palieka brėžiniui daugiausia vietos. {{cmd:TOPAREA}} ją nustato.

## Kampo indikatorius

Kas yra brėžinio kampe:

- **Automatinis** (pradinis): ašies piktograma skirtuke {{ui:Modelis}} ir žiūros kubas skirtuke {{ui:3D}}.
- **Ašies piktograma**: X ir Y žymė apatiniame kairiajame skirtuko {{ui:Modelis}} kampe ir maža X, Y bei Z žymė skirtuke {{ui:3D}}.
- **Žiūros kubas**: kubas viršutiniame dešiniajame abiejų skirtukų kampe. Skirtuke {{ui:Modelis}} jis rodo brėžinį iš viršaus, o spustelėjus kitą paviršių, briauną ar kampą atveriamas skirtukas {{ui:3D}}, žiūrintis iš ten. Skirtuke 3D jis sukasi kartu su vaizdu: spustelėkite, kad žiūrėtumėte iš šono, vilkite, kad suktumėte, o namelis grąžina izometrinį vaizdą. Žr. [Modelis 3D](topic:3d-solids).
- **Nieko**: kampe nieko nerodoma.

Lapuose nerodomas nei vienas.

## Pasirinkto ilgis ir plotas

- **Būsenos juostoje** (pradinis): kai objektai pasirinkti, būsenos juostoje rodomas jų bendras ilgis ir uždarų objektų bendras plotas. Žr. [Pasirinkimo sumos](topic:properties-panel#totals-of-a-selection).
- **Paslėpta**: būsenos juosta jų nerodo. Ypatybės vis tiek rodo kelių objektų sumas.

## Tinklelis, ortogonalumas ir prilipimai

Šių nėra dialoge: mygtukai {{ui:Tinklelis}}, {{ui:Ortogonalus}} ir {{ui:Prilipimas}} būsenos juostoje (arba {{key:F7}}, {{key:F8}}, {{key:F3}}) ir objektų prilipimų sąrašas šalia jų prisimenami, kai juos paliekate. Žr. [Prilipti prie taškų ant objektų](topic:object-snaps).
