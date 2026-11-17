---
title: CadCraft parametrai
summary: Parametrai, susiję su braižymo programa: žymeklio dydis, kur iš žymeklio kabo įklijuota kopija, ką spustelėjimas daro su pasirinkimu, kiek eilučių naudoja įrankių juosta, kur stovi komandų eilutė ir koks ji aukštas, kompaktiška viršutinė sritis bei kampo indikatorius.
keywords: komandų eilutė, plaukiojanti komandų eilutė, plaukti, prijungti, viena eilutė, f2, komandų istorija, commandline, cmdline, toparea, viršutinė sritis, kompaktiškas, cursorsize, kryžiukas visame ekrane, pilno ekrano žymeklis, iki krašto, įrankių juostos eilutės, įrankių juostos rodinys, ctrl f1, parametrai, nustatymai, pasirinktys, kampo indikatorius, ašies piktograma, vaizdo kubas, žymeklis, kryžiukas, pasirinkimo langelis, įklijavimo taškas, bazinis taškas, spustelėjimas ant objektų, pasirinkimas, pickadd, shift, atstatyti
from: 0896eb42
---

Atidarykite {{ui:Parametrai}} su krumpliaračio piktograma programos juostoje arba {{key:Mod+,}}. Pirmasis skirtukas, {{ui:CadCraft}}, turi šiai programai priklausančius parametrus; {{ui:Bendra}} turi tuos, kuriuos bendrai naudoja visos šeimos programos (tema, skydelio teksto dydis ir plotis, įrankių juostos išvaizda ir tvarka). CadCraft parametrai galioja tik šiai programai: keičiate juos čia, o naršyklė juos prisimena. {{ui:Atstatyti CadCraft parametrus}} visus grąžina į pradinę būseną.

## Žymeklis

**Mažas**, **Vidutinis** (pradinė reikšmė), **Didelis** arba **Visas ekranas**: kryžiuko ir pasirinkimo langelio dydis brėžinyje. Didesnis pasirinkimo langelis pasirenka objektus ir iš šiek tiek didesnio atstumo, o tai padeda su jutikliniu ekranu arba labai smulkiu brėžiniu.

**Visas ekranas** kryžiuko dvi linijos nutiesiamos iki krašto per visą brėžinį, taip pat kai nevykdoma jokia komanda, todėl galite akimis patikrinti, ar du dalykai sutampa per visą vaizdą. Kai vaizdas padalytas, linijos lieka tame lange, su kuriuo dirbate. Tas pats kaip AutoCAD {{cmd:CURSORSIZE}} 100: įveskite {{cmd:CURSORSIZE}} ir 100 visam ekranui; mažesnis skaičius parenka artimiausią dydį (iki 5 – Mažas, nuo 5 iki 9 – Vidutinis, nuo 10 iki 99 – Didelis).

## Įklijavimo taškas

Vieta, kur įklijuota kopija kabo nuo žymeklio po {{key:Mod+V}} ({{cmd:PASTECLIP}}), kol spustelėsite:

- **Apatinis kairysis kampas** (pradinė reikšmė): kopijuotų objektų ribų apatinis kairysis kampas, kaip AutoCAD.
- **Centras**: jų ribų vidurys. Patogu simbolį dėti akimis.

Kopija, padaryta su `COPYBASE`, visada kabo nuo pasirinkto bazinio taško. {{ui:Įklijuoti vietoje}} ({{key:Mod+Shift+V}}) ignoruoja šį parametrą: išlaiko originalias koordinates. Žr. [Kopijuoti, įklijuoti ir dubliuoti](topic:copy-paste).

## Spustelėjimas ant objektų

Ką spustelėjimas brėžinyje daro pasirinkimui, kai nevykdoma jokia komanda:

- **Prideda prie pasirinkimo** (pradinė reikšmė): kiekvienas spustelėjimas ar langas prideda objektus; {{key:Shift}}+spustelėjimas arba {{key:Shift}}+langas juos pašalina.
- **Pakeičia pasirinkimą**: spustelėjimas ar langas pasirenka tik tai, ką paima. {{key:Shift}}+spustelėjimas prideda objektą arba pašalina jau pasirinktą; {{key:Shift}}+langas prideda.

Ties raginimu `Pasirinkite objektus:` komandos viduje spustelėjimai visada prideda (o {{key:Shift}} pašalina), nepriklausomai nuo šio parametro. Žr. [Objektų pasirinkimas](topic:select-objects).

## Spragtelėjimas tuščioje vietoje

Ką daro spustelėjimas vietoje, kur nėra objekto, kai nevykdoma jokia komanda. Abiem atvejais pradedamas pasirinkimo langas (antras spustelėjimas jį baigia).

- **Išvalo pasirinkimą** (pradinė reikšmė): tai, kas buvo pasirinkta, atleidžiama. Laikykite {{key:Shift}} spustelėdami, kad išliktų.
- **Palieka pasirinkimą**: pasirinkimas lieka, kaip kitose braižymo programose; langas prideda prie jo. Paspauskite {{key:Esc}}, kad išvalytumėte pasirinkimą.

## Vilkimas pasirenkant

Ką paspaudus ir vilkant tuščioje vietoje nubrėžiama:

- **Lasas** (pradinė reikšmė): laisvos formos kontūras. Judant pirmiausia į dešinę, pasirenkama tai, kas visiškai jame yra; pirmiausia į kairę – tai, ką jis liečia; {{key:Space}} vilkimo metu perjungia tarp lango, kirtimo ir tvoros.
- **Stačiakampis**: langelis, nubrėžiamas dviem spustelėjimais.

{{cmd:LASSOMODE}} `1` arba `0` nustato tą patį. Žr. [Lasso pasirinkimas](topic:lasso-selection).

## Vilkimas apkerpant ir pratęsiant

Ką paspaudus tuščioje vietoje ir vilkant daro {{cmd:TRIM}} ir {{cmd:EXTEND}}:

- **Kelias** (pradinė reikšmė): laisvos formos kelias; kiekviena jo kertama dalis apkerpama (arba pratęsiama).
- **Langas**: langelis; kiekviena jo liečiama dalis apkerpama, kaip daro parinktis `C`.

Žr. [Apkirpti ir pratęsti](topic:trim-and-extend).

## Įrankių juostos padėtis

{{ui:CadCraft}} › {{ui:Įrankių juostos padėtis}}: **Viršuje** (pradinė reikšmė, kaip visada buvo), **Apačioje**, **Kairė** arba **Dešinė**. Kairėje ar dešinėje įrankių grupės sudedamos į stulpelį, kuris slenka, kai jis aukštesnis už langą, o mygtukai po du ar tris eina vienoje eilutėje. Pasirinkimas išsaugomas kartu su jūsų parametrais, o {{cmd:TOOLBARDOCK}} (`TBDOCK`) nustato jį iš komandų eilutės. {{ui:Bendra}} › {{ui:Atstatyti išdėstymą}} grąžina įrankių juostą viršuje.

Meniu stilių juostos yra įrankių juostoje ir juda kartu su ja, tačiau {{ui:Juosta}} stilius skirtas bėgti viršuje ar apačioje: šone jis gauna siaurą slenkantį stulpelį. Telefone įrankių juosta lieka ten, kur ją padeda telefono išdėstymas.

## Įrankių juostos eilutės

Kiek eilučių įrankiai naudoja virš brėžinio CadCraft įrankių juostoje ir {{ui:Klasikinis braižymas}} bei {{ui:Juosta}} stiliuose:

- **Pritaikyti prie pločio** (pradinė reikšmė): įrankiai sudedami pagal lango plotį.
- **2 eilutės**: ne daugiau kaip dvi eilutės. Kai įrankiai šiuo plotiu telpa į dvi eilutes ar mažiau, jie tiesiog sudedami; priešingu atveju jie išdėstomi dviejose eilutėse, kurios slenka į šoną.
- **1 eilutė**: viena eilutė, slenkanti į šoną; brėžiniui lieka daugiausia vietos.

{{key:Shift+Ctrl+F1}} perjungia tarp trijų, o {{cmd:TOOLBARROWS}} nustato vieną iš jų. Ką mygtukai rodo (piktogramas ir tekstą, tik piktogramas arba tik tekstą) yra {{ui:Bendra}} › {{ui:Įrankių juosta}} parametras; {{key:Ctrl+F1}} perjungia jį, o {{cmd:TOOLBAR}} nustato.

## Komandų eilutė

Komandų eilutė gali likti prijungta po brėžiniu, kaip visada buvo, arba plaukti virš jo, ir gali būti plona – vienos eilutės.

- **Padarykite plaukiojančią.** Įvilkite rankenėlę kairiajame gale į brėžinį arba pasirinkite {{ui:Plaukti virš brėžinio}} jos {{ui:Komandų eilutės parinktys}} meniu (trys taškai dešiniajame gale). Vėl įvilkite rankenėlę, kad perkeltumėte; jos vieta išsaugoma, kai keičiamas lango dydis. Įvilkite dešinįjį kraštą, kad padarytumėte platesnę ar siauresnę. Numeskite ją ant būsenos juostos arba pasirinkite {{ui:Prijungti apačioje}}, kad vėl prijungtumėte.
- **Padarykite plonesnę ar aukštesnę.** Įvilkite viršutinį kraštą: kiekvienas žingsnis – viena istorijos eilutė. Iki nulio eilučių tai yra **vienos eilutės komandų eilutė**: tik raginimas ir tai, ką įvedate, o naujas pranešimas trumpam pasirodo virš jos. Dvigubas spustelėjimas ant viršutinio krašto perjungia tarp vienos eilutės ir anksčiau turėto aukščio.
- **Istorija.** {{key:F2}} arba laikrodžio mygtukas komandų eilutėje ({{ui:Komandų istorija (F2)}}) atveria visą istoriją virš eilutės (po ja, kai eilutė plaukia arti lango viršaus). Rašymas vis tiek eina į komandų eilutę; {{key:PageUp}} ir {{key:PageDown}} slenka istoriją, o {{key:Esc}}, {{key:F2}} arba spustelėjimas kitur ją uždaro. Jūsų pačių priskirtas klavišas F2 turi pirmenybę prieš tai.
- **Klaviatūra.** Rankenėlė yra mygtukas: kai ji fokusuota, rodyklių klavišai perkelia plaukiojančią komandų eilutę (su {{key:Shift}} – didesniais žingsniais); {{key:Up}} padaro prijungtą plaukiojančią, o {{key:Down}} ties apatiniu kraštu prijungia ją. Viršutinis kraštas yra skyriklis: {{key:Up}} ir {{key:Down}} prideda arba atima eilutę, {{key:Home}} padaro vienos eilutės, {{key:End}} – aukščiausią. Ekrano skaitytuvai vis tiek perskaito kiekvieną pranešimą, taip pat vienos eilutės komandų eilutėje.

{{ui:CadCraft}} › {{ui:Komandų eilutė}} turi tuos pačius pasirinkimus: {{ui:Prijungta apačioje}} arba {{ui:Plaukiojanti}}, {{ui:Rodomos istorijos eilutės}} (0–12) ir {{ui:Standartinis aukštis}}. {{cmd:COMMANDLINE}} (`CMDLINE`) nustato juos iš komandų eilutės. Vieta ir aukštis CadCraft išsaugomi šioje naršyklėje kartu su kitu maketu, todėl išsaugota darbo aplinka juos perneša; {{ui:Bendra}} › {{ui:Atstatyti išdėstymą}} vėl prijungia komandų eilutę prie apačios standartiniu aukščiu. Telefone komandų eilutė lieka prijungta su viena istorijos eilute; istorijos mygtukas ten taip pat veikia.

Kai langas žemas ir išdėstymo patikrinimas siūlo glaudesnį išdėstymą, jo {{ui:Taip}} taip pat paverčia komandų eilutę į vienos eilutės, jei brėžinys po įrankių juostų vis dar per žemas.

## Viršutinė sritis

{{ui:CadCraft}} › {{ui:Viršutinė sritis}}: **Standartinė** (pradinė reikšmė) arba **Kompaktiška**. Kompaktiška visuose meniu stiliuose palieka juostas virš brėžinio mažas: grupių pavadinimai ir žodžiai po piktogramomis dingsta (patarimai ir ekrano skaitytuvai juos vis tiek turi), o mygtukai glaudesni. Tai veikia kartu su [Įrankių juostos eilutės](topic:settings#toolbar-rows): Kompaktiška ir **1 eilutė** palieka brėžiniui daugiausia vietos. {{cmd:TOPAREA}} nustato ją.

## Kampo indikatorius

Kas yra brėžinio kampe:

- **Automatinis** (pradinė reikšmė): ašies piktograma skirtuke {{ui:Modelis}} ir vaizdo kubas skirtuke {{ui:3D}}.
- **Ašies piktograma**: X ir Y žymė apatiniame kairiajame skirtuko {{ui:Modelis}} kampe ir maža X, Y ir Z žymė skirtuke {{ui:3D}}.
- **Vaizdo kubas**: kubas viršutiniame dešiniajame abiejų skirtukų kampe. Skirtuke {{ui:Modelis}} jis rodo brėžinį iš viršaus, o spustelėjus kitą paviršių, kraštinę ar kampą, atsidaro skirtukas {{ui:3D}}, žiūrintis iš ten. Skirtuke 3D jis sukasi kartu su vaizdu: spustelėkite, kad pažiūrėtumėte iš šono, vilkite, kad sukinėtumėte aplink, o namelis grąžina į izometrinį vaizdą. Žr. [Modelis 3D](topic:3d-solids).
- **Nėra**: kampe nieko nerodoma.

Lapai nerodo nei vieno, nei kito.

## Pasirinkimo ilgis ir plotas

- **Būsenos juostoje** (pradinė reikšmė): pasirinkus objektus, būsenos juostoje rodomas jų bendras ilgis ir uždarų objektų bendras plotas. Žr. [Pasirinkimo sumos](topic:properties-panel#totals-of-a-selection).
- **Paslėpta**: būsenos juosta jų nerodo. Savybės vis tiek rodo kelių objektų ilgį ir plotą.

## Tinklelis, ortogonalumas ir prilipimai

Jų nėra dialogo lange: būsenos juostos mygtukai {{ui:Tinklelis}}, {{ui:Ortogonalus}} ir {{ui:Prilipimas}} (arba {{key:F7}}, {{key:F8}}, {{key:F3}}) ir šalia jų esantis objektų prilipimų sąrašas išsaugomi, kai juos palieki. Žr. [Prilipimas prie objektų taškų](topic:object-snaps).
