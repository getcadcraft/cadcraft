---
title: Atėjus iš kitos braižymo programinės įrangos
summary: Kaip įprasti komandos, klavišai ir įpročiai atitinka CadCraft ir kokie skirtumai dažnai painioja patyrusius braižytojus.
keywords: perėjimas, skirtumai, migracija, įpročiai, slapyvardžiai, dinaminė įvestis, pickfirst, pickadd, qsave, saveas, įrašyti kaip, mtext, ctb, poliarinis sekimas, xref, klaviatūros spartieji klavišai, įprasta, copyclip, pasteclip, pasteorig, copybase, iškarpykla
from: b58688e7
---

Jei esate dirbę su AutoCAD ar programa, sukurta pagal tą patį modelį, didžioji dalis to, ką žinote, čia veikia: komandų eilutė, slapyvardžiai, pavyzdžiui `L`, `C`, `TR` ir `O`, {{key:Enter}} arba {{key:Space}} kartojimui, lango ir kryžminė pažymėjimo sritis, objektų prisegimas ties F3, ortogonalus režimas ties F8, modelio erdvė su išdėstymais ir rodiniais. Šiame puslapyje išvardyta, kas atitinka tiesiogiai, ir tie skirtumai, dėl kurių žmonės klysta. Perskaitykite antrą dalį, net jei pirmąją tik peržvelgiate.

## Kas atitinka tiesiogiai

| Įprotis | CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Tos pačios komandos, tie patys slapyvardžiai |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Tie patys |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Tos pačios matmenų komandos |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO`, įvesti komandų eilutėje | Tie patys, naujiems matmenims |
| `B` blokui sukurti, `I` įterpti, `PU` išvalyti | Tie patys (išvalymas pašalina tik nenaudojamus blokus) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z`, tada `E` arba `W` | Tie patys |
| Įvedant `_LINE` arba `-LAYER` iš scenarijaus ar įpročio | Pradinis `_`, `-`, `.` arba `'` ignoruojamas |
| {{key:Enter}} arba {{key:Space}} tuščioje eilutėje kartoja paskutinę komandą | Tas pats |
| {{key:Esc}} atšaukia; dar kartą {{key:Esc}} panaikina pažymėjimą | Tas pats |
| `@dx,dy`, `@d<a`, įvesti kampai prieš laikrodžio rodyklę nuo rytų | Tas pats |
| Langas iš kairės į dešinę, kryžius iš dešinės į kairę, spustelėjimas-spustelėjimas; paspaudimas ir vilkimas lasso, {{key:Space}} keičia langą / kryžių / tvorelę (LASSOMODE) | Tas pats |
| Pirma pažymėti, tada komanda (daiktavardis-veiksmažodis) | Tas pats; baigta komanda panaikina pažymėjimą |
| `ALL` ir `L` prie Pasirinkti objektus | Tas pats |
| Shift+spustelėjimas pašalina iš pažymėjimo | Tas pats. Parametrai gali padaryti, kad spustelėjimas pakeistų pažymėjimą, kaip su PICKADD 0: žr. [CadCraft parametrai](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Tos pačios komandos ir klavišai; įklijavimas padeda kopiją pagal jos apatinį kairįjį kampą, kaip PASTECLIP |
| F3 objektų prisegimas, F7 tinklelis, F8 Ortho | Tie patys klavišai |
| Dukart spustelėti ratuką, kad priartintumėte iki ribų | Tas pats |
| Veidrodinis tekstas lieka skaitomas | Tas pats (kaip MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Tie patys; Mac kompiuteryje veikia ir Command |

Visas komandas ir slapyvardžius rasite [Komandų žinyne](topic:commands).

:::tip
Jei jums patinka AutoCAD juosta, pasirinkite braižymo stilių {{ui:Klasikinis braižymas}} skyriuje {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Meniu, klavišai ir pelė}}: skirtukai Pradžia, Įterpimas, Anotacijos, Parametrinis, Vaizdas, Tvarkymas ir Išvestis virš tos pačios komandų eilutės, o vidurinis mygtukas slenka, o dešinysis spustelėjimas yra {{key:Enter}}. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse).
:::

[Komandų žemėlapis](topic:command-map) išvardija visas CadCraft komandas su trumpais pavadinimais, o [greitoji nuoroda](topic:cheat-sheet) – 40 dažniausiai naudojamų (taip pat kaip vieno puslapio PDF).

## Skirtumai, dėl kurių žmonės klysta

### Įvesti taškai yra absoliutūs

Įjungus dinaminę įvestį, kita programa įvestą `100,0` antrajam taškui laiko santykiniu. **CadCraft komandų eilutėje taip nėra:** ten `x,y` visada matuojamas nuo pradžios taško. Jei {{ui:Dyn}} ({{key:F12}}) įjungtas, naudokite jo laukus: atstumas, {{key:Tab}}, kampas. Naudokite `@100,0`, jei norite „100 į dešinę nuo paskutinio taško“, arba perkelkite kryžiuką reikiama kryptimi ir įveskite tik `100`.

### Shift praleidžia prisegimus; ortogonalaus režimo neįjungia

Laikant {{key:Shift}} spustelėjimo metu, to spustelėjimo objektų prisegimai ignoruojami. Ortogonalus režimas laikinai neįjungiamas. Naudokite {{key:F8}} arba mygtuką {{ui:Ortho}}.

### Dešinysis spustelėjimas visada yra Enter

Dešiniojo spustelėjimo meniu nėra. Dešinysis spustelėjimas brėžinyje yra {{key:Enter}}: baigia komandą, užbaigia pažymėjimą arba kartoja paskutinę komandą. Vilkimo metu arba pažymėjimo lange jis atšaukia. Vilkite dešiniuoju mygtuku, kad slinktumėte.

### Nėra slinkimo tarpo klavišu

{{key:Space}} yra {{key:Enter}}, todėl laikant {{key:Space}} ir vilkiant nevyksta slinkimas. Slinkite vidurio arba dešiniuoju mygtuku, arba atitolinkite ir vėl priartinkite ratuku kitoje vietoje.

### Apkarpyti ir pratęsti

Apkarpymas ir pratęsimas pradeda veikti Greitajame režime: kiekvienas matomas objektas yra pjovimo briauna arba riba, rodyklė ant taško rodo, kas bus pašalinta, vilkiamas kelias nupjauna visas dalis, kurias kerta, o objektas, kurio niekas nekerta, ištrinamas. {{key:Shift}} perjungia tarp apkarpymo ir pratęsimo. `O` perjungia į Standartinį režimą (pirma pasirinkite briaunas), `F` ir `C` yra tvora ir kryžius, `E` yra EDGEMODE, `R` trina. Nėra `P` (Projekcija) parinkties: CadCraft apkarpo brėžinio plokštumoje.

### Suapvalinimas ir nuokirtimas

{{cmd:FILLET}} ir {{cmd:CHAMFER}} priima jums žinomas parinktis: Undo, Polyline, Radius (arba Distance, Angle ir mEthod), Trim ir Multiple, o {{key:Shift}}+spustelėjimas – aštriam kampui. Suapvalinimas tarp polilinijos ir linijos prideda lanką kaip atskirą objektą, o ne sujungia jo su polilinija, o polilinijos kampai šalia lanko segmento paliekami kaip yra.

### Pastraipos tekstas ir vienos eilutės tekstas

`T`, `MT` ir `MTEXT` yra pastraipos tekstas, įvedamas vietoje, su plotiu, eilučių tarpu ir lygiavimu; `DT` ir `DTEXT` yra vienos eilutės tekstas, kaip jūs jį žinote. Teksto stilių ir stulpelių nėra, o teksto viduje formatuoti (paryškinimas, sukrautos trupmenos) dar negalima: failo formatavimas išsaugomas, nubraižomas ir įrašomas (žr. [Pridėti tekstą ir žymas](topic:text#formatting-inside-paragraph-text-from-other-programs)). Viskas braižoma Helvetica stiliaus šriftu.

### Įrašyti reiškia „atsisiųsti kopiją“

{{key:Mod+S}}, `SAVE` ir `QSAVE` atsisiunčia kopiją brėžinio formatu: DWG, kurį atidarėte, įrašomas kaip DWG, o DXF – kaip DXF. Naršyklėje niekas nepakeičiama vietoje, o atidaryti failai niekada nekeičiami. CadCraft Studio programoje {{key:Mod+S}} įrašo atgal į failą, kurį atidarėte.

`SAVEAS` ({{key:Mod+Shift+S}}) yra nedidelis langas, o ne failų naršyklė: pasirinkite {{ui:DWG}} (su {{ui:Versija}}, AutoCAD 2000–2018), {{ui:DXF R12}} arba {{ui:DXF 2000}} ir spauskite {{ui:Įrašyti}}. Kur nukeliauja atsisiuntimas, nusprendžia naršyklė. `DXFOUT` visada atsisiunčia DXF R12.

Atidarytas DWG įrašomas versija, kurioje atėjo; naujas brėžinys įrašomas AutoCAD 2000 formatu, nebent pasirinkote kitą. Lapai, matmenys ir brūkšniuočių šablonai išsaugomi. Žr. [Failai: kas atsidaro, kas įrašoma](topic:files#saving).

### Sluoksniai: paprasčiau

- Kiekvienas sluoksnio pakeitimas (įjungimas, įšaldymas, užrakinimas, spalva, spausdinimas, linijos tipas, linijos storis, dabartinis sluoksnis) yra vienas {{ui:Anuliuoti}} žingsnis.
- Išjungimas ir įšaldymas CadCraft veikia vienodai.
- Sluoksniai, kuriuos brėžinys įšaldo viename rodinyje, lieka įšaldyti ten: ekrane, spausdinant ir įrašant DWG ar DXF.
- Rodinys, kuris rodo sluoksnį savo spalva, linijos tipu, linijos storiu ar skaidrumu, tai ir toliau daro ekrane, spausdinant ir įrašant DWG (DXF išsaugo paties sluoksnio nustatymus; įrašymas tai pasako). Keisti tai pagal rodinį dar neįgyvendinta.
- Sluoksnių savybių tvarkyklės ir sluoksnių būsenų nėra; {{cmd:RENAME}}, {{cmd:LAYMRG}} ir {{cmd:LAYDEL}} pervadina, sujungia ir ištrina sluoksnius. Linijų tipai ir linijų storiai nustatomi dešiniajame skydelyje (žr. [Linijų storiai ir linijų tipai](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} ir {{cmd:LAYMCUR}} veikia pasirenkant.
- Įrašant į DXF R12, sluoksnių pavadinimai rašomi didžiosiomis raidėmis. DWG išsaugo juos taip, kaip įvedėte.

### Matmenų stiliai

`DIMSTYLE` atidaro pavadintų stilių tvarkyklę (naujas, keisti, nustatyti dabartinį, palyginti, taikyti). `DIMSCALE` ir kiti nustatymai vis dar keičia tai, ką naudoja nauji matmenys, o kiekvienas matmuo išsaugo savo dydžius, kuriuos taip pat galima keisti Savybių skydelyje. Dabartinis stilius faile neišsaugomas. Matmenys seka brėžinio ilgio formatą (dešimtainį arba pėdas ir colius su {{cmd:UNITS}}) arba savo {{ui:Formatas}}. Žr. [Nustatyti matmenų dydžius](topic:dimension-settings).

### Spausdinimas paprastesnis

Spausdinimo stiliaus lentelės veikia pagal spalvą, kaip CTB failai: Monochrome, Colour ir Grayscale yra įdiegtos, galite sukurti savąsias, o kiekvienas lapas išsaugo savo lentelę. CTB failų skaitymas paremtas paskelbtu aprašymu ir išbandytas tik su failais, kuriuos sukūrėme patys; pavadintos spausdinimo stiliaus lentelės (STB) ir puslapio nustatymai dar neįgyvendinti. Linijos spausdinamos savo linijos storiu, kiti – vienu pieštuko storiu. Lapai spausdinami 1:1 savame popieriuje; modelis spausdinamas pasirinktu ar pritaikytu masteliu. Žr. [Spausdinti į PDF](topic:plot-pdf).

### Darbas rodinyje

Kaip žinote: dukart spustelėkite rodinio viduje (arba įveskite {{cmd:MSPACE}}), kad dirbtumėte su modeliu per jį, o dukart spustelėkite už jo ribų (arba {{cmd:PSPACE}}), kad grįžtumėte į lapą. Rodinio viduje slinkimas ir mastelis keičia tai, ką rodinys parodo, nebent jo rodymas užrakintas; tada jie perkelia lapą. Spustelėjus skirtuką po brėžiniu taip pat išeinama iš rodinio. Žr. [Dirbti su modeliu per rodinį](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Sekimas ir dinaminė įvestis veikia, tinklelio prisegimo dar nėra

Tinklelis tik žiūrėjimui: taškai į jį neprisega (F9 prisegimo režimo nėra). Poliarinis sekimas ({{key:F10}}, žingsnis nustatomas {{cmd:POLARANG}}) ir objektų prisegimo sekimas ({{key:F11}}: sustokite ties prisegimo tašku, kad jį pasiektumėte) veikia kaip žinote; žr. [Prisegti prie objektų](topic:object-snaps#polar-tracking). Dinaminė įvestis ({{key:F12}}) rodo atstumą ir kampą (arba X ir Y) prie kryžiuko; žr. [Koordinačių ir atstumų įvedimas](topic:coordinate-entry#dynamic-input).

### Pėdos ir coliai

Pasirinkite {{ui:Ilgio formatas}} {{ui:Architektūrinis}} arba {{ui:Inžinerinis}} (arba įveskite {{cmd:UNITS}}) ir įvedinėkite ilgius kaip įprasta: `12'6"`, `12'6-1/2"`. Prieš trupmeną naudokite brūkšnelį, o ne tarpą: {{key:Space}} yra {{key:Enter}}. Taip pat nustatykite {{ui:Vienetai}} į {{ui:Coliai}}, kad lapai ir spausdinimai siūlytų architektūrinius mastelius. Formatas išsaugomas DWG ir DXF failuose. Žr. [Pėdos ir coliai](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopijavimas ir įklijavimas lieka CadCraft viduje

{{key:Mod+C}}, {{key:Mod+X}} ir {{key:Mod+V}} kopijuoja, iškerpa ir įklijuoja objektus brėžinio viduje, tarp brėžinių ir tarp CadCraft skirtukų tame pačiame naršyklėje. Iškarpykla yra pati CadCraft: CadCraft objektų negalite įklijuoti į kitą programą, nei kitos programos objektų į CadCraft. Įklijavus iš brėžinio kitais vienetais, mastelis nekeičiamas: po to naudokite {{cmd:SCALE}}. {{key:Mod+D}} yra dublikatas, kuris juda kartu su žymekliu, tai CadCraft papildymas. Žr. [Kopijuoti, įklijuoti ir dubliuoti](topic:copy-paste).

### Naršyklės klavišai, kurių negalite naudoti

Tinklalapis negali perimti {{key:Mod+N}}, {{key:Mod+W}} ar {{key:Mod+T}} iš naršyklės: jie atidaro ir uždaro langus bei skirtukus. Naudokite mygtuką {{ui:Naujas}} arba įveskite `NEW`. Žr. [Klavišai, pelės ir jutikliniai kilimėliai](common:keys).

## Komandos, kurių galbūt ieškosite, bet kurios dar nėra

{{cmd:TABLE}} dar neįgyvendinta. Ją įvedus rodoma „Unknown command“. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} ir {{cmd:XREF}} yra įgyvendintos.) [Dar neįgyvendinta](topic:not-built-yet) išvardija, ką daryti šiandien.
