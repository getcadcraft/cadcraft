---
title: Ühikud, paberi suurused ja mõõtkavad
summary: Mida joonistusühikud CadCraftis tähendavad, lehtede ja väljatrükkide paberi suurused, iga standardne mõõtkava ning kuidas teksti ja mõõtmete suurused seostuvad väljatrüki mõõtkavaga.
keywords: ühikud, millimeetrid, tollid, jalad, jalad ja tollid, arhitektuurne, tehniline, murdarv, murdarvud, pikkuse vorming, täpsus, meetrid, paberi suurus, a3, a1, arch d, ansi, tabloid, letter, mõõtkava, 1:100, 1/4 tolli, arhitektuurne mõõtkava, tehniline mõõtkava, insunits
from: 8346236a
---

## Joonistusühikud

Joonistad täissuuruses, joonistusühikutes. See, mida üks ühik tähendab, on joonise seade {{ui:Ühikud}}:

1. Vajuta {{key:Esc}}, et midagi ei oleks valitud, vahekaardil {{ui:Mudel}}.
2. Jaotises {{ui:Praegused sätted}} vali {{ui:Ühikud}}: {{ui:Ühikuta}}, {{ui:Millimeetrid}}, {{ui:Sentimeetrid}}, {{ui:Meetrid}}, {{ui:Tollid}} või {{ui:Jalad}}.

Mõõtmed võivad kirjutada oma pikkused millimeetrites, sentimeetrites, meetrites või kilomeetrites, olenemata joonise ühikust: vaata [Mõõtmed mm, cm, m või km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Ühikute muutmine ei muuda suurust. See muudab seda, kuidas lehtedel ja väljatrükkides mõõtkavasid loetakse, ja milliseid mõõtkavasid pakutakse. DWG-st või DXF-ist avatud joonis säilitab failis salvestatud ühikud; vasakpoolse paneeli jaotis {{ui:Joonis}} näitab neid.

{{ui:Ühikuta}} joonist käsitletakse paberi ühikus: ISO paberil millimeetrites, USA paberil tollides.

## Jalad ja tollid ning murdarvud

Kuidas pikkused kirjutatakse ja sisestatakse, on eraldi seade: pikkuse vorming. See ei muuda geomeetriat, ainult seda, kuidas arvud välja näevad ja mida võib sisestada.

1. Vajuta {{key:Esc}}, et midagi ei oleks valitud, vahekaardil {{ui:Mudel}}.
2. Jaotises {{ui:Praegused sätted}} vali {{ui:Pikkuse vorming}}: {{ui:Kümnend}} (`150.5`), {{ui:Arhitektuurne}} (`12'-6 1/2"`), {{ui:Tehniline}} (`12'-6.5"`), {{ui:Murdarv}} (`150 1/2`) või {{ui:Teaduslik}} (`1.505E+02`).
3. Vali {{ui:Täpsus}}: kümnendkohad või väikseim murdosa (1/16 on arhitektuurse tavaline valik).

Või sisesta {{cmd:UNITS}} (`UN`) ja vasta kahele selle küsimusele.

Arhitektuurse või tehnilise vormingu korral on üks joonistusühik üks toll, nagu AutoCADis: sea ka {{ui:Ühikud}} väärtuseks {{ui:Tollid}}. Siis saad pikkusi sisestada jalgades ja tollides kõikjal, kus pikkust küsitakse, ja väljades jaotises {{ui:Omadused}}:

| Sisestad | Tähendab |
|---|---|
| `12'6"` või `12'-6"` | 12 jalga 6 tolli (150) |
| `12'6-1/2"` | 12 jalga 6½ tolli. Kasuta murdosa ees kriipsu: {{key:Space}} on käsureal {{key:Enter}}. |
| `12'` | 12 jalga |
| `6"` või `6` | 6 tolli: tavaline arv on tollid |
| `1/2`, `6-1/2` | murdarvud töötavad igas vormingus |

Punktid võtavad samad pikkused: `@12'6",0` või `@10'<90`. Nurgad jäävad kraadideks.

Vorming kuvatakse ajaloos ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: alad ruuttollides ja ruutjalgades), väljal {{ui:Omadused}}, olekuriba koordinaatides ja uutes mõõtmetes. Lehed säilitavad oma paberiühikud (millimeetrid või tollid) kümnendarvudena.

:::note
Pikkuse vorming salvestatakse DWG- ja DXF-failides ning iga mõõde säilitab oma; salvestatud joonis avaneb uuesti nii, nagu jätsid.
:::

## Paberi suurused

Lehed ja mudeli väljatrükid kasutavad neid suurusi mõlemas suunas:

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

Uued lehed algavad ISO A3 peal meetriliste ja ühikuta joonistega ning Tabloid peal tollides või jalgades joonistega. Mudeli väljatrükid algavad samal viisil ISO A4 või Letter peal ja mäletavad seejärel sinu viimast valikut. Avatud failide lehed säilitavad oma suuruse, mida näidatakse „Kohandatud“, kui see pole üks neist.

## Mõõtkavad

Mõõtkava `1:n` tähendab, et üks ühik paberil näitab n sama ühikut mudelis, nii et 1:100 näitab 1 m hoonet kui 10 mm paberil. CadCraft arvutab selle välja joonistusühikute ja paberi ühiku põhjal.

**Meetrilised mõõtkavad**, pakutakse igale joonisele: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitektuursed mõõtkavad**, pakutakse siis, kui ühikud on tollid või jalad: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Tehnilised mõõtkavad**, pakutakse siis, kui ühikud on tollid või jalad: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Sinu enda mõõtkavad.** Sisesta {{cmd:SCALELISTEDIT}} (või {{cmd:SCALELIST}}), et lisada oma mõõtkava, näiteks 1:75 või objekti mõõtkava 2 paberiühikut : 300 joonisühikut. `Add` küsib nime, seejärel paberiühikuid ja joonistusühikuid (nimi nagu `1:75` pakub oma arve; vajuta {{key:Enter}}, et need võtta). `Edit`, `Delete`, `List` ja `Reset` töötavad samal loendil; `Reset` läheb tagasi standardloendi juurde. Sinu mõõtkavad ilmuvad standardsete järele vaateakna mõõtkavade loendis jaotises {{ui:Omadused}} ja dialoogis {{ui:Prindi PDF-iks}}; vaateaken selles mõõtkavas kuvatakse oma nimega ning need salvestatakse joonisesse (DWG ja DXF 2000) joonise mõõtkavaloendina. Teises programmis avatud joonis toob oma loendi kaasa; mõõtkavad, mis vastavad standardsele, ei ilmu kaks korda.

Kui vaateaken on suunatud nupuga {{ui:Näita kogu mudelit}} või {{ui:Vali mudelil aken…}}, valib CadCraft suurima standardse mõõtkava, mis mahub. {{ui:Mahuta kogu mudel}} seab selle asemel täpse mõõtkava, mis loetakse tavalise suhtena.

## Suurused paberil ja mudelis

Teksti ja mõõtmete suurused on selles ruumis kasutatavates ühikutes, kus joonistad.

| Paberil soovid | Joonistatud lehel | Joonistatud mudelis mõõtkavas 1:50 (mm-joonis) | Joonistatud mudelis mõõtkavas 1/4" = 1'-0" (tolli-joonis) |
|---|---|---|---|
| 2.5 mm tekst | 2.5 | 125 | — |
| 3/32" tekst | 0.09375 | — | 4.5 |

Mõõtmete puhul hoia suurused paberisuurustena ja sea üldmõõtkava ({{cmd:DIMSCALE}}) väljatrüki mõõtkavaks: 50 mõõtkavale 1:50, 48 mõõtkavale 1/4" = 1'-0". Vaata [Mõõtmete suuruste seadistamine](topic:dimension-settings).

## Märgi mõõtkava järgi

Joonista mudel täissuuruses ja las CadCraft teeb sinu eest ülal toodud arvutused.

1. Vali tekst või mõõtmed, mis peaksid paberil oma suuruse säilitama. Omadustes märgi {{ui:Annotatiivne}}. {{ui:Suurus paberil}} näitab siis näiteks `2.5 mm at 1:50`.
2. Sisesta {{cmd:ANNOSCALE}} ja mõõtkava, millises joonis prinditakse, näiteks `1:100`.

Iga annotatiivne tekst ja mõõde suurendatakse või vähendatakse nii, et see prindib uues mõõtkavas samas suuruses: 2.5 mm tekst on millimeetri-joonisel mõõtkavas 1:50 125 kõrge ja mõõtkavas 1:100 250 kõrge. Lõigu laius muutub koos sellega; mõõtme tekst, nooled ja vahed muutuvad koos (selle üldmõõtkava). See on üks tagasivõtmise samm ning mitteannotatiivseid objekte ei muudeta kunagi.

Seade salvestatakse DWG- ja DXF-i: teised programmid loevad annotatiivse märgi ja CadCraft hoiab ka iga objekti mõõtkava, mille järgi see on suurustatud.

Kui su kontor seab paberikõrgused lisandmooduli Vaikepoliitikad kaudu (Sätted › Üldine › Vaikepoliitikad › Annotatsioonide suurused paberil), määrab {{cmd:ANNOSCALE}} ka uue teksti algkõrguse selle mõõtkava märkmete jaoks kontori kõrguseks. Vaata [Vaikepoliitikad](topic:default-policies).

### Üks objekt mitmes mõõtkavas

Leht näitab sageli sama plaani mõõtkavas 1:100 ja selle osa mõõtkavas 1:50. Anna märkustele ja mõõtmetele mõlemad mõõtkavad ja iga vaateaken näitab neid nende paberisuuruses:

1. Vali annotatiivne tekst ja mõõtmed ning sisesta `OBJECTSCALE`.
2. Vali `Add` ja sisesta mõõtkava, näiteks `1:50`. (`Current scale` lisab joonise annotatsioonimõõtkava; `List` näitab, mida iga objekt hoiab; `Delete` eemaldab ühe.)

Vaateaken, mille mõõtkava on objekti loendis, näitab seda selle mõõtkava suuruses: 2.5 mm tekst joonistatakse 1:100 vaateaknas 250 kõrgena ja 1:50 vaateaknas 125 kõrgena, nii ekraanil kui väljatrükis. Objekt jääb oma kohale; erineb ainult selle suurus. Vaateaknas mõõtkavas, mida ei ole objekti loendis, näitab objekt oma praegust suurust, kuni sisestad `ANNOALLVISIBLE` ja valid `OFF`: siis jäetakse see seal välja. {{cmd:ANNOSCALE}} muudab suurust objektidel, mis loetlevad uut mõõtkava, ja jätab teised nagu on.

Loendid salvestatakse DWG- ja DXF-i CadCrafti enda andmetena. Teine programm näeb iga objekti annotatiivsena, selle ühe mõõtkavaga, mille järgi see on suurustatud. `ANNOALLVISIBLE` lüliti faili ei jäeta alles.

## Joonepaksused ja joontüübid

Kihil või objektil võib olla **joonepaksus** (0.05 kuni 2.11 mm) ja **joontüüp** (katkendlik, peidetud, keskjoon, fantoom, punkt…). Määra need paremas paneelis: kui midagi pole valitud, on {{ui:Joontüüp}} ja {{ui:Joonepaksus}} jaotises {{ui:Praegused sätted}} need, mida uued objektid saavad ({{ui:Kihi järgi}}, et järgida nende kihti), ja need kaks jaotises {{ui:Kiht …}} on praeguse kihi enda omad. Kui objektid on valitud, muudavad samad kaks rida ja {{ui:Joontüübi mõõtkava}} neid objekte. Käsud on {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) ja {{cmd:LTSCALE}} (`LTS`).

Joontüübid näidatakse ekraanil ja väljatrükis. Nende kriipsud on joonistusühikutes: meetrilises joonisel kasutatakse ISO suurusi (DASHED: 12.7 mm kriipsud), tollijoonisel tollisuurusi (0.5"). Kui kriipsud paistavad liiga väikesed või suured, muuda joonise {{ui:Joontüübi mõõtkava}} (LTSCALE): iga kriips ja vahe korrutatakse sellega; objekti enda mõõtkava korrutab seda veel kord. Liiga peen muster, mida ei näe üldse, joonistatakse tahke joonena.

Joonepaksused prinditakse väljatrükis mm-des paberil, olenemata mõõtkavast. Joontel vaikejoonepaksusega kasutatakse dialoogis {{ui:Prindi PDF-iks}} valitud pliiatsi laiust (0.13 kuni 0.70 mm; alguses 0.25 mm); joonepaksus 0 prinditakse õhukeseima joonena. Ekraanil on iga joon üks piksel lai, kuni vajutad olekuribal {{ui:LWT}} (või sisestad {{cmd:LWDISPLAY}}): siis joonistatakse joonepaksus üle 0.25 mm mudelis laiemalt (0.5 mm = 2 pikslit) ja lehel paberil oma tegelikus laiuses. Valik jääb sellesse brauserisse alles.
