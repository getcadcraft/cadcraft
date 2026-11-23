---
title: Ühikud, paberimõõdud ja mõõtkavad
summary: Mida joonise ühikud CadCraftis tähendavad, paberimõõdud lehtedele ja väljatrükkidele, iga standardne mõõtkava ning kuidas teksti ja mõõtude suurused seostuvad printimismõõtkavaga.
keywords: ühikud, millimeetrid, tollid, jalad, jalad ja tollid, arhitektuurne, tehniline, murdarv, murrud, lunits, pikkuse vorming, täpsus, meetrid, paberi suurus, a3, a1, arch d, ansi, tabloid, letter, mõõtkava, 1:100, 1/4 tolli, arhitektuurne mõõtkava, tehniline mõõtkava, insunits
from: 7dc9b62e
---

## Joonise ühikud

Joonistad täissuuruses joonise ühikutes. See, mida üks ühik tähendab, on joonise seade **Units** (Ühikud):

1. Vajuta {{key:Esc}}, et midagi ei oleks valitud, vahelehel {{ui:Model}} (Mudel).
2. Jaotises {{ui:Current settings}} vali {{ui:Units}}: {{ui:Unitless}} (Ühikuta), {{ui:Millimeters}} (Millimeetrid), {{ui:Centimeters}} (Sentimeetrid), {{ui:Meters}} (Meetrid), {{ui:Inches}} (Tollid) või {{ui:Feet}} (Jalad).

Mõõdud võivad kirjutada oma pikkused millimeetrites, sentimeetrites, meetrites või kilomeetrites, olenemata joonise ühikust: vt [Mõõdud mm, cm, m või km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Ühikute muutmine ei muuda suurust. See muudab seda, kuidas mõõtkavad lehtedel ja väljatrükkidel loetakse, ja milliseid mõõtkavu pakutakse. DWG-st või DXF-ist avatud joonis säilitab failis hoitud ühikud; vasakpoolse paneeli jaotis {{ui:Drawing}} (Joonis) näitab neid.

Joonist {{ui:Unitless}} (Ühikuta) käsitletakse paberi ühikus: ISO-paberil millimeetrites, USA paberil tollides.

## Jalad ja tollid ning murrud

See, kuidas pikkused **kirjutatakse ja sisestatakse**, on eraldi seade: pikkuse vorming. See ei muuda geomeetriat, ainult seda, kuidas arvud välja näevad ja mida saab sisestada.

1. Vajuta {{key:Esc}}, et midagi ei oleks valitud, vahelehel {{ui:Model}}.
2. Jaotises {{ui:Current settings}} vali {{ui:Length format}} (Pikkuse vorming): {{ui:Decimal}} (Kümnend) (`150.5`), {{ui:Architectural}} (Arhitektuurne) (`12'-6 1/2"`), {{ui:Engineering}} (Tehniline) (`12'-6.5"`), {{ui:Fractional}} (Murdarv) (`150 1/2`) või {{ui:Scientific}} (Teaduslik) (`1.505E+02`).
3. Vali {{ui:Precision}} (Täpsus): kümnendkohad või väikseim murd (1/16 on arhitektuuril tavaline valik).

Või sisesta {{cmd:UNITS}} (`UN`) ja vasta kahele küsimusele.

Valikuga {{ui:Architectural}} või {{ui:Engineering}} on üks joonise ühik üks toll, nagu AutoCADis: sea ka {{ui:Units}} väärtuseks {{ui:Inches}}. Siis saad sisestada pikkusi jalgades ja tollides kõikjal, kus pikkust küsitakse, ja kastides {{ui:Properties}}:

| Sisestad | Tähendab |
|---|---|
| `12'6"` või `12'-6"` | 12 jalga 6 tolli (150) |
| `12'6-1/2"` | 12 jalga 6½ tolli. Murru ette kasuta kriipsu: {{key:Space}} on käsureal {{key:Enter}}. |
| `12'` | 12 jalga |
| `6"` või `6` | 6 tolli: tavaline arv on tollid |
| `1/2`, `6-1/2` | murrud töötavad igas vormingus |

Punktid võtavad samad pikkused: `@12'6",0` või `@10'<90`. Nurgad jäävad kraadideks.

Vorming näitub ajaloos ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: pindalad ruuttollides ja ruutjalgades), paneelis {{ui:Properties}}, staatusriba koordinaatides ja **uutes mõõtudes**. Lehed säilitavad oma paberiühikud (millimeetrid või tollid) kümnendarvudena.

:::note
Pikkuse vorming salvestatakse DWG- ja DXF-failidesse ning iga mõõt hoiab oma vormingut: salvestatud joonis avaneb uuesti sellisena, nagu jätsid.
:::

## Paberimõõdud

Lehed ja mudeli väljatrükid kasutavad neid mõõtmeid, kummaski suunas:

| Paber | Suurus | Ühik lehel |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimeetrid |
| ISO A3 | 420 × 297 mm | millimeetrid |
| ISO A2 | 594 × 420 mm | millimeetrid |
| ISO A1 | 841 × 594 mm | millimeetrid |
| ISO A0 | 1189 × 841 mm | millimeetrid |
| Letter | 11 × 8.5 in | tollid |
| Legal | 14 × 8.5 in | tollid |
| Tabloid / ANSI B | 17 × 11 in | tollid |
| ANSI C | 22 × 17 in | tollid |
| ANSI D | 34 × 22 in | tollid |
| ARCH C | 24 × 18 in | tollid |
| ARCH D | 36 × 24 in | tollid |
| ARCH E | 48 × 36 in | tollid |

Uued lehed algavad ISO A3-l meetermõõdustikus ja ühikuta joonistel ning Tabloid-il tollides või jalgades olevatel joonistel. Mudeli väljatrükid algavad samamoodi ISO A4 või Letter, ja siis mäletavad sinu viimast valikut. Avatud failide lehed säilitavad oma suuruse, mida näidatakse kui „Kohandatud”, kui see ei ole üks neist.

## Mõõtkavad

Mõõtkava `1:n` tähendab, et üks ühik paberil näitab n sama ühikut mudelis, nii et 1:100 näitab 1 m hoonest 10 mm paberil. CadCraft arvutab selle välja joonise ühikute ja paberi ühiku järgi.

**Meetermõõtkavad**, pakutakse igale joonisele: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitektuursed mõõtkavad**, pakutakse, kui ühikud on tollid või jalad: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Tehnilised mõõtkavad**, pakutakse, kui ühikud on tollid või jalad: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Sinu enda mõõtkavad.** Sisesta `SCALELISTEDIT` (või `SCALELIST`), et lisada oma mõõtkava, näiteks 1:75 või ala mõõtkava 2 paberiühikut : 300 joonise ühikut. `Add` küsib nime, siis paberiühikud ja joonise ühikud (nimi nagu `1:75` pakub omi arve; vajuta {{key:Enter}}, et need võtta). `Edit`, `Delete`, `List` ja `Reset` töötavad samal loendil; `Reset` läheb tagasi standardloendile. Sinu mõõtkavad ilmuvad standardite järele vaateakna mõõtkavade loendis paneelis Properties ja dialoogis {{ui:Plot to PDF}}; vaateaken selles mõõtkavas loetakse oma nimega, ja need salvestatakse joonisesse (DWG ja DXF 2000) joonise mõõtkavade loendina. Teisest programmist avatud joonis toob oma loendi kaasa; mõõtkavasid, mis vastavad standardile, ei näidata kaks korda.

Kui vaateaken suunatakse valikuga {{ui:Show the whole model}} või {{ui:Pick a window on the model…}}, valib CadCraft suurima standardse mõõtkava, mis sobib. {{ui:Fit the whole model}} (Mahuta kogu mudel) seab selle asemel täpse mõõtkava, mis loetakse lihtsa suhtena.

## Suurused paberil ja mudelis

Teksti ja mõõdu suurused on ruumi ühikutes, kuhu joonistad.

| Soovid paberil | Joonistatud lehel | Joonistatud mudelis 1:50 (mm joonis) | Joonistatud mudelis 1/4" = 1'-0" (tolli joonis) |
|---|---|---|---|
| 2.5 mm tekst | 2.5 | 125 | — |
| 3/32" tekst | 0.09375 | — | 4.5 |

Mõõtude puhul hoia suurused paberisuurustena ja sea üldine mõõtkava ({{cmd:DIMSCALE}}) printimismõõtkavaks: 50 mõõtkavale 1:50, 48 mõõtkavale 1/4" = 1'-0". Vt [Mõõtmise suurused](topic:dimension-settings).

## Märgista mõõtkava järgi

Joonista mudel täissuuruses ja lase CadCraftil eespool toodud arvutused sinu eest teha.

1. Vali tekst või mõõdud, mis peavad paberil oma suuruse säilitama. Paneelis Properties märgi {{ui:Annotative}} (Annotatiivne). {{ui:Size on paper}} (Suurus paberil) näitab siis näiteks `2.5 mm at 1:50`.
2. Sisesta {{cmd:ANNOSCALE}} ja mõõtkava, millega joonis prinditakse, näiteks `1:100`.

Iga annotatiivne tekst ja mõõt muudetakse suuruses nii, et see prinditakse uues mõõtkavas samas suuruses: 2,5 mm tekst on millimeetrijoonisel 125 kõrge mõõtkavas 1:50 ja 250 kõrge mõõtkavas 1:100. Lõigu laius muutub koos sellega; mõõdu tekst, nooled ja vahed muutuvad koos (selle üldine mõõtkava). See on üks tagasivõtmise samm, ja objekte, mis pole annotatiivsed, ei muudeta kunagi.

Seade salvestatakse DWG-s ja DXF-is: teised programmid loevad annotatiivse märgi, ja CadCraft hoiab ka iga objekti mõõtkava, mille järgi ta on suurustatud.

Kui su kontor määrab paberikõrgused lisandmoodulis Vaikepoliitikad (Sätted › Üldine › Vaikepoliitikad › Annotatsioonide suurused paberil), määrab {{cmd:ANNOSCALE}} ka uue teksti algkõrguseks kontori kõrguse märkmetele selles mõõtkavas. Vt [Vaikepoliitikad](topic:default-policies).

### Üks objekt mitmes mõõtkavas

Leht näitab sageli sama plaani mõõtkavas 1:100 ja selle osa mõõtkavas 1:50. Anna märkmetele ja mõõtudele mõlemad mõõtkavad ja iga vaateaken näitab neid nende paberisuuruses:

1. Vali annotatiivne tekst ja mõõdud ning sisesta `OBJECTSCALE`.
2. Vali `Add` ja sisesta mõõtkava, näiteks `1:50`. (`Current scale` lisab joonise annotatsioonimõõtkava; `List` näitab, mida iga objekt hoiab; `Delete` eemaldab ühe.)

Vaateaken, mille mõõtkava on objekti loendis, näitab seda selle mõõtkava suuruses: 2,5 mm tekst joonistatakse 250 kõrge 1:100 vaateaknas ja 125 kõrge 1:50 vaateaknas, ekraanil ja väljatrükis. Objekt jääb sinna, kus ta on; erinev on ainult tema suurus. Vaateaknas mõõtkavas, mis ei ole loendis, näitab objekt oma praegust suurust, kuni sisestad `ANNOALLVISIBLE` ja valid `OFF`: siis jäetakse ta sinna välja. {{cmd:ANNOSCALE}} muudab suurust objektidel, mis loetlevad uue mõõtkava, ja jätab teised nagu nad on.

Loendid salvestatakse DWG-s ja DXF-is CadCrafti enda andmetena. Teine programm näeb iga objekti annotatiivsena, selle ühe mõõtkavaga, mille järgi ta on suurustatud. ANNOALLVISIBLE-lüliti ei jää failis alles.

## Joonepaksused ja joontüübid

Kihil või objektil võib olla **joonepaksus** (0,05 kuni 2,11 mm) ja **joontüüp** (katkendlik, peidetud, keskjoon, faasi, punktiir…). Määra need paremas paneelis: kui midagi pole valitud, on {{ui:Linetype}} (Joontüüp) ja {{ui:Lineweight}} (Joonepaksus) jaotises {{ui:Current settings}} need, mida uued objektid saavad ({{ui:By layer}} (Kihi järgi), et järgida nende kihti), ja kaks jaotises {{ui:Layer …}} on praeguse kihi enda omad. Kui objektid on valitud, muudavad samad kaks rida ja {{ui:Linetype scale}} (Joontüübi mõõtkava) neid objekte. Käsud on {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) ja {{cmd:LTSCALE}} (`LTS`).

Joontüübid näitatakse ekraanil ja prindis. Nende kriipsud on joonise ühikutes: meetrijoonis kasutab ISO suurusi (DASHED: 12,7 mm kriipsud), tollijoonis tollisuurusi (0.5"). Kui kriipsud tunduvad liiga väikesed või suured, muuda joonise {{ui:Linetype scale}} (LTSCALE): iga kriips ja vahe korrutatakse sellega; objekti enda mõõtkava korrutab seda veel kord. Muster, mis on liiga peen, et üldse näha, joonistatakse tahke joonena.

Joonepaksused prinditakse väljatrükis, mm-des paberil, olenemata mõõtkavast. Jooned vaikimisi joonepaksusega ({{ui:Default}} (Vaikimisi)) kasutavad pliiatsi laiust, mis on valitud dialoogis {{ui:Plot to PDF}} (0,13 kuni 0,70 mm; algselt 0,25 mm); joonepaksus 0 prindib kõige õhukesema joonena. Ekraanil on iga joon üks piksel lai, kuni vajutad staatusribal nuppu {{ui:LWT}} (või sisestad {{cmd:LWDISPLAY}}): siis joonistab üle 0,25 mm joonepaksus mudelis laiemalt (0,5 mm = 2 piksel), ja lehel oma tõelises laiuses paberil. Valik jääb sellesse brauserisse.

## Kontori standard

Kontor võib hoida oma paberi tekstikõrgusi, kihte, tiitelploki välju ja malle ühes kirjes, kontoristandardis. CadCraft loeb seda selles järjekorras: joonise enda kirje (seatud käsuga {{cmd:OFFICESTANDARD}} › `Import`, hoitakse failis), sinu meeskonna jagatud standard, siis sinu Vaikepoliitikad. Annotatiivsed tekstid ja mõõdud võtavad oma paberikõrguse sellest annotatsioonimõõtkavas. Tühi standard ei muuda midagi. {{cmd:OFFICESTANDARD}} › `Layers` lisab kontorikihid, mis joonisel puuduvad.
