---
title: Tulek teistest joonestustarkvaradest
summary: Kuidas tuttavad käsud, klahvid ja harjumused vastavad CadCraftile ning erinevused, mis kogenud joonestajaid kimbutavad.
keywords: üleminek, erinevused, migreerimine, harjumused, lühendid, aliased, dünaamiline sisend, pickfirst, pickadd, qsave, saveas, salvesta nimega, mtext, ctb, polaarjälgimine, xref, klahvikombinatsioonid, tuttav, copyclip, pasteclip, pasteorig, copybase, lõikelaud
from: b58688e7
---

Kui oled kasutanud AutoCADi või sama mudeli peal põhinevat programmi, töötab siin suurem osa sellest, mida tead: käsurida, lühendid nagu `L`, `C`, `TR` ja `O`, Enter või tühikuklahv korduseks, akna- ja ristvalik, objektipüüded klahvil F3, Ortho klahvil F8, mudelruum koos paigutuste ja vaateakendega. See leht loetleb, mis vastab otse, ja seejärel erinevused, mis inimesi vahele võtavad. Loe teine pool isegi siis, kui ainult vaatad.

## Mis vastab otse

| Harjumus | CadCraftis |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Samad käsud, samad lühendid |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Samad |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Samad mõõtmiskäsud |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` käsurealt trükituna | Samad, uutele mõõtudele |
| `B` plokiks tegemiseks, `I` sisestamiseks, `PU` puhastamiseks | Samad (puhastus eemaldab ainult kasutamata plokid) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` ning seejärel `E` või `W` | Samad |
| `_LINE` või `-LAYER` trükkimine skriptist või harjumusest | Algav `_`, `-`, `.` või `'` ignoreeritakse |
| Enter või tühikuklahv tühjal viibal kordab viimast käsku | Sama |
| Esc tühistab; Esc uuesti tühjendab valiku | Sama |
| `@dx,dy`, `@d<a`, trükitud nurgad vastupäeva idast | Sama |
| Aken vasakult paremale, rist paremalt vasakule, klõps-klõps; vajuta ja lohista lasso jaoks, tühikuklahv tsükleerib akna / risti / piirjoone vahel (LASSOMODE) | Sama |
| Vali esmalt, seejärel käsk (nimisõna-tegusõna) | Sama; lõpetatud käsk tühjendab valiku |
| `ALL` ja `L` valiku viibal | Sama |
| Shift+klõps eemaldab valikust | Sama. Sätted võivad panna klõpsu hoopis valikut asendama, nagu PICKADD 0 teeb: vaata [CadCrafti sätted](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Samad käsud ja klahvid; kleepimine paigutab koopia alumise vasaku nurga järgi, nagu PASTECLIP teeb |
| F3 objektipüüde, F7 võrk, F8 Ortho | Samad klahvid |
| Ratta topeltklõps suumib ulatuseni | Sama |
| Peegeldatud tekst jääb loetavaks | Sama (nagu MIRRTEXT 0 puhul) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Samad; Macil töötab ka Command |

[Käskude viide](topic:commands) loetleb iga käsu ja lühendi.

:::tip
Kui eelistad AutoCADi lindi, vali {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Menüüd, klahvid ja hiir}} menüülaadiks {{ui:Klassikaline joonistus}}: vahekaardid Avaleht, Lisa, Märkused, Parameetriline, Vaade, Haldus ja Väljund samal käsurea kohal ning keskmine nupp nihutab vaadet, paremklõps on Enter. Vaata [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse).
:::

[Käskude kaart](topic:command-map) loetleb kõik CadCrafti käsud koos lühinimedega ja [kiirjuht](topic:cheat-sheet) 40 kõige sagedamini kasutatavat (ka ühe lehena PDF-ina).

## Erinevused, mis inimesi vahele võtavad

### Trükitud punktid on absoluutsed

Kui dünaamiline sisend on sees, käsitleb teine programm teisena trükitud `100,0` relatiivsena. **CadCrafti käsurida ei tee seda:** seal on `x,y` alati mõõdetud algpunktist. Kui {{ui:Dün}} ({{key:F12}}) on sees, kasuta selle välju: kaugus, {{key:Tab}}, nurk. Kasuta `@100,0` tähenduses „100 viimasest punktist paremale“ või liiguta ristkursorit õiges suunas ja trüki lihtsalt `100`.

### Shift jätab püüded vahele; see ei anna Orthot

Shift’i hoidmine klõpsates ignoreerib selle klõpsu objektipüüded. See ei lülita ajutiselt Orthot. Kasuta F8 või nuppu {{ui:Ortho}}.

### Paremklõps on alati Enter

Hiireparemklõpsu menüüd ei ole. Joonisel paremklõps on Enter: see lõpetab käsu, lõpetab valiku või kordab viimast käsku. Nupu lohistamise või valikuruudu ajal see hoopis tühistab. Vaate nihutamiseks lohista parema nupuga.

### Tühikuklahviga nihutamist ei ole

Tühikuklahv on Enter, seega tühikuklahvi all hoidmine ja lohistamine ei nihuta vaadet. Nihuta keskmise või parema nupuga või suumi välja ja tagasi teises kohas ratta abil.

### Lõika ja Ulata

Lõika ja Ulata alustavad kiirrežiimis: iga nähtav objekt on lõikeserv või piir, osa kursori all näitab, mis läheb ära, lohistatud tee lõikab kõik osad, mida ta läbib, ja objekt, mida miski ei läbi, kustutatakse. {{key:Shift}} vahetab lõikamise ja ulatamise vahel. `O` lülitab standardrežiimi (kõigepealt vali servad), `F` ja `C` on piirjoon ja rist, `E` on EDGEMODE, `R` kustutab. Projekteerimise valikut `P` ei ole: CadCraft lõikab joonise tasandil.

### Ümardus ja faas

{{cmd:FILLET}} ja {{cmd:CHAMFER}} võtavad vastu valikud, mida tunned: Undo, Polyline, Radius (või Distance, Angle ja mEthod), Trim ja Multiple, ning {{key:Shift}}+klõps teravale nurgale. Murdjoone ja joone vaheline ümardus lisab kaare eraldi objektina, selle asemel et ühendada need murdjoonega, ja murdjoone nurgad kaare lõigu kõrval jäetakse nii nagu on.

### Lõigutekst ja üherealine tekst

`T`, `MT` ja `MTEXT` on lõigutekst, mis trükitakse kohapeal, laiuse, reavahe ja joondusega; `DT` ja `DTEXT` on üherealine tekst, nagu tunned. Tekstistiile ja veerge ei ole ning teksti sees ei saa veel vormindada (paks kiri, murdarvud virnas); failis tulnud vormindus säilib, joonistatakse ja salvestatakse (vaata [Teksti ja sildid](topic:text#formatting-inside-paragraph-text-from-other-programs)). Kõik joonistub Helvetica-taolise fondiga.

### Salvesta tähendab „laadi alla koopia“

{{key:Mod+S}}, `SAVE` ja `QSAVE` laadivad alla koopia joonise vormingus: DWG, mille avasid, salvestub DWG-na, DXF DXF-ina. Brauseris ei kirjutata midagi üle ja avatud faile ei muudeta kunagi. CadCrafti Studio’s kirjutab {{key:Mod+S}} tagasi faili, mille avasid.

`SAVEAS` ({{key:Mod+Shift+S}}) on väike dialoog, mitte failibrauser: vali {{ui:DWG}} (koos {{ui:Versioon}}’iga, AutoCAD 2000 kuni 2018), {{ui:DXF R12}} või {{ui:DXF 2000}} ja klõpsa {{ui:Salvesta}}. Kuhu allalaadimine läheb, otsustab brauser. `DXFOUT` laadib alati alla DXF R12.

DWG, mille avasid, salvestub versioonis, millega see tuli; uus joonis salvestub AutoCAD 2000 vormingus, kui ei vali teist. Lehed, mõõdud ja viirutusmustrid säilivad. Vaata [Failid: mis avaneb, mis salvestub](topic:files#saving).

### Kihid: lihtsam

- Iga kihimuudatus (sisse, külmuta, lukusta, värv, printimine, joontüüp, joonepaksus, aktiivne kiht) on üks {{ui:Võta tagasi}} samm.
- Väljalülitamine ja külmutamine mõjuvad CadCraftis ühtemoodi.
- Kihid, mille joonis ühes vaateaknas külmutab, jäävad seal külmutatuks: ekraanil, printides ja DWG- või DXF-ina salvestades.
- Vaateaken, mis näitab kihti oma värvi, joontüübi, joonepaksuse või läbipaistvusega, jätkab seda nii ekraanil, printides kui salvestatud DWG-s (DXF säilitab kihi enda sätted; salvestamine ütleb seda). Nende muutmine vaateakna kaupa ei ole veel valmis.
- Kihihaldurit ega kihiolekuid ei ole; {{cmd:RENAME}}, {{cmd:LAYMRG}} ja {{cmd:LAYDEL}} nimetavad ümber, ühendavad ja kustutavad kihid. Joontüübid ja joonepaksused määratakse paremas paneelis (vaata [Joonepaksused ja joontüübid](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} ja {{cmd:LAYMCUR}} töötavad valimise teel.
- DXF R12-na salvestamisel kirjutatakse kihinimed suurtähtedega. DWG säilitab need nii, nagu trükkisid.

### Mõõtestiilid

`DIMSTYLE` avab nimega stiilide haldur (uus, muuda, määra aktiivseks, võrdle, rakenda). `DIMSCALE` ja teised sätted muudavad endiselt seda, mida uued mõõdud kasutavad, ning iga mõõt säilitab oma suurused, mida saad muuta ka omaduste paneelis. Aktiivset stiili faili ei salvestata. Mõõdud järgivad joonise pikkuse vormingut (kümnend või jalad ja tollid {{cmd:UNITS}}-iga) või oma {{ui:Vorming}}’ut. Vaata [Mõõdu suuruste seadistamine](topic:dimension-settings).

### Printimine on lihtsam

Printimisstiilitabelid töötavad värvi järgi, nagu CTB-failid: Monochrome, Colour ja Grayscale on sisseehitatud, saad teha omi, ja iga leht säilitab oma tabeli. CTB-failide lugemine on ehitatud avaldatud kirjeldusest ja on proovitud ainult failidel, mille ise tegime; nimelisi printimisstiilitabeleid (STB) ja lehekülje seadistusi ei ole veel ehitatud. Jooned prinditakse oma joonepaksusega, ülejäänud ühe pliiatsilaiusega. Lehed prinditakse 1:1 oma paberil; mudel prinditakse valitud või sobitatud mõõtkavas. Vaata [Prindi PDF-iks](topic:plot-pdf).

### Töötamine vaateakna sees

Nagu tunned: topeltklõps vaateakna sees (või trüki {{cmd:MSPACE}}) töötab mudeliga selle kaudu ning topeltklõps väljaspool (või {{cmd:PSPACE}}) viib tagasi lehele. Sees nihutamine ja suumimine muudavad seda, mida vaateaken näitab, kui selle kuvamine ei ole lukus; siis liigutavad need lehte. Joonise all olevale sakile klõpsamine lahkub samuti vaateaknast. Vaata [Töötamine mudeliga vaateakna kaudu](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Jälgimine ja dünaamiline sisend jah, võrgusnäpitsus veel mitte

Võrk on ainult vaatamiseks; punktid ei kleepu sellele (F9 püüderežiimi ei ole). Polaarjälgimine ({{key:F10}}, samm seadistatakse {{cmd:POLARANG}}-iga) ja objektipüüde jälgimine ({{key:F11}}: peatu püüdepunktil, et see omandada) töötavad nii, nagu tunned; vaata [Püüdmine objektidele](topic:object-snaps#polar-tracking). Dünaamiline sisend ({{key:F12}}) näitab ristkursori juures kaugust ja nurka (või X ja Y); vaata [Koordinaatide ja kauguste sisestamine](topic:coordinate-entry#dynamic-input).

### Jalad ja tollid

Vali {{ui:Pikkuse vorming}} {{ui:Arhitektuurne}} või {{ui:Tehniline}} (või trüki {{cmd:UNITS}}) ja trüki pikkusi nii, nagu tunned: `12'6"`, `12'6-1/2"`. Murdarvu ette kasuta sidekriipsu, mitte tühikut: {{key:Space}} on {{key:Enter}}. Määra ka {{ui:Ühikud}} väärtuseks {{ui:Tollid}}, et lehed ja printimised pakuks arhitektuurseid mõõtkavu. Vormingut säilitatakse salvestatud DWG- ja DXF-failides. Vaata [Jalad ja tollid](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopeerimine ja kleepimine jääb CadCrafti sisse

{{key:Mod+C}}, {{key:Mod+X}} ja {{key:Mod+V}} kopeerivad, lõikavad ja kleebivad objekte joonise sees, joonisete vahel ja CadCrafti sakkide vahel samas brauseris. Lõikelaud on CadCrafti oma: CadCrafti objekte ei saa kleepida teise programmi ega teise programmi objekte CadCraftisse. Teistes ühikutes joonisest kleepimine ei mõõtkavasta uuesti: kasuta järgnevalt {{cmd:SCALE}}. {{key:Mod+D}} on dubleerimine, mis liigub kursoriga, CadCrafti lisand. Vaata [Kopeeri, kleebi ja dubleeri](topic:copy-paste).

### Brauseri klahve, mida ei saa kasutada

Veebileht ei saa brauserist {{key:Mod+N}}, {{key:Mod+W}} ega {{key:Mod+T}}: need avavad ja sulgevad aknaid ja sakke. Kasuta nuppu {{ui:Uus}} või trüki `NEW`. Vaata [Klahvid, hiired ja puuteplaadid](common:keys).

## Käsud, mida võid otsida, kuid mida veel ei ole

{{cmd:TABLE}} ei ole ehitatud. Selle trükkimine ütleb „Unknown command“. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} ja {{cmd:XREF}} on ehitatud.) [Veel ehitamata](topic:not-built-yet) loetleb, mida praegu teha.
