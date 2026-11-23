---
title: Enote, formati papirja in merila
summary: Kaj pomenijo enote risbe v CadCraft, formati papirja za liste in izrise, vsa standardna merila ter kako se velikosti besedila in kot nanašajo na merilo izrisa.
keywords: enote, milimetri, palci, čevlji, čevlji in palci, arhitekturni, inženirski, ulomkovni, ulomki, lunits, format dolžin, natančnost, metri, format papirja, a3, a1, arch d, ansi, tabloid, letter, merilo, 1:100, 1/4 palca, arhitekturno merilo, inženirsko merilo, insunits
from: 7dc9b62e
---

## Enote risbe

Rišete v polni velikosti, v enotah risbe. Kaj predstavlja ena enota, določa nastavitev risbe **Enote**:

1. Pritisnite {{key:Esc}}, da nič ni izbrano, na zavihku {{ui:Model}}.
2. V {{ui:Trenutne nastavitve}} izberite {{ui:Enote}}: {{ui:Brez enot}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Palci}} ali {{ui:Čevlji}}.

Kote lahko zapišejo dolžine v milimetrih, centimetrih, metrih ali kilometrih ne glede na enoto risbe: glejte [Kote v mm, cm, m ali km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Sprememba enot ničesar ne spremeni po velikosti. Spremeni, kako se merila berejo na listih in v izrisih, ter katera merila so ponujena. Risba, odprta iz DWG ali DXF, ohrani enote, shranjene v datoteki; razdelek {{ui:Risba}} na levem podoknu jih prikaže.

{{ui:Brez enot}} risba se obravnava kot enota papirja: milimetri na ISO papirju, palci na ameriškem papirju.

## Čevlji in palci ter ulomki

Kako so dolžine **zapisane in vnesene**, je ločena nastavitev, format dolžin. Ne spremeni geometrije, samo to, kako številke izgledajo in kaj lahko vnesete.

1. Pritisnite {{key:Esc}}, da nič ni izbrano, na zavihku {{ui:Model}}.
2. V {{ui:Trenutne nastavitve}} izberite {{ui:Format dolžin}}: {{ui:Decimalni}} (`150.5`), {{ui:Arhitekturni}} (`12'-6 1/2"`), {{ui:Inženirski}} (`12'-6.5"`), {{ui:Ulomkovni}} (`150 1/2`) ali {{ui:Znanstveni}} (`1.505E+02`).
3. Izberite {{ui:Natančnost}}: decimalna mesta ali najmanjši ulomek (1/16 je običajna izbira za arhitekturni format).

Ali vnesite {{cmd:UNITS}} (`UN`) in odgovorite na njegni dve vprašanji.

Pri {{ui:Arhitekturni}} ali {{ui:Inženirski}} je ena enota risbe en palec, kot v AutoCAD: nastavite tudi {{ui:Enote}} na {{ui:Palci}}. Potem lahko dolžine vnašate v čevljih in palcih povsod, kjer se zahteva dolžina, in v poljih {{ui:Lastnosti}}:

| Vnesete | Pomeni |
|---|---|
| `12'6"` ali `12'-6"` | 12 čevljev 6 palcev (150) |
| `12'6-1/2"` | 12 čevljev 6½ palca. Pred ulomkom uporabite vezaj: {{key:Space}} je {{key:Enter}} v ukazni vrstici. |
| `12'` | 12 čevljev |
| `6"` ali `6` | 6 palcev: golo število je palci |
| `1/2`, `6-1/2` | ulomki delujejo v vsaki obliki |

Točke sprejmejo enake dolžine: `@12'6",0` ali `@10'<90`. Koti ostanejo v stopinjah.

Oblika se prikaže v zgodovini ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: površine kot kvadratni palci in kvadratni čevlji), v {{ui:Lastnosti}}, v koordinatah v vrstici stanja in v **novih kotah**. Listi ohranijo svoje enote papirja (milimetri ali palci) kot decimalna števila.

:::note
Format dolžin je shranjen v datotekah DWG in DXF, vsaka kota pa ima svojega: shranjena risba se odpre tako, kot ste jo pustili.
:::

## Formati papirja

Listi in izrisi modela uporabljajo te velikosti, v obeh usmeritvah:

| Papir | Velikost | Enota na listu |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetri |
| ISO A3 | 420 × 297 mm | milimetri |
| ISO A2 | 594 × 420 mm | milimetri |
| ISO A1 | 841 × 594 mm | milimetri |
| ISO A0 | 1189 × 841 mm | milimetri |
| Letter | 11 × 8.5 in | palci |
| Legal | 14 × 8.5 in | palci |
| Tabloid / ANSI B | 17 × 11 in | palci |
| ANSI C | 22 × 17 in | palci |
| ANSI D | 34 × 22 in | palci |
| ARCH C | 24 × 18 in | palci |
| ARCH D | 36 × 24 in | palci |
| ARCH E | 48 × 36 in | palci |

Novi listi se začnejo na ISO A3 za metrične in brezenotne risbe, na Tabloid za risbe v palcih ali čevljih. Izrisi modela se začnejo na ISO A4 ali Letter na enak način, nato si zapomnijo vašo zadnjo izbiro. Listi iz odprtih datotek ohranijo svojo velikost, prikazano kot "Custom", kadar ni ena od teh.

## Merila

Merilo `1:n` pomeni, da ena enota na papirju prikaže n enakih enot modela, torej 1:100 prikaže 1 m stavbe kot 10 mm papirja. CadCraft to izračuna iz enot risbe in enote papirja.

**Metrična merila**, ponujena za vsako risbo: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitekturna merila**, ponujena, ko so enote palci ali čevlji: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženirska merila**, ponujena, ko so enote palci ali čevlji: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vaša lastna merila.** Vnesite {{cmd:SCALELISTEDIT}} (ali {{cmd:SCALELIST}}), da dodate merilo, na primer 1:75 ali merilo lokacije 2 enoti papirja : 300 enot risbe. `Add` vpraša za ime, nato enote papirja in enote risbe (ime, kot `1:75`, ponudi svoje številke; pritisnite {{key:Enter}}, da jih vzamete). `Edit`, `Delete`, `List` in `Reset` delajo s istim seznamom; `Reset` se vrne na standardni seznam. Vaša merila so prikazana za standardnimi v seznamu meril pogleda v {{ui:Lastnosti}} in v pogovornem oknu {{ui:Izris v PDF}}; pogled pri tem merilu se prikaže z njegovim imenom, shranjena pa so v risbi (DWG in DXF 2000) kot seznam meril risbe. Risba, odprta iz drugega programa, prinese svoj seznam; merila, ki ustrezajo standardnemu, se ne prikažejo dvakrat.

Ko je pogled usmerjen z {{ui:Pokaži celoten model}} ali {{ui:Izberite okno na modelu …}}, CadCraft izbere največje standardno merilo, ki se prilega. {{ui:Prilagodi celotnemu modelu}} nastavi točno merilo, ki se prikaže kot navadno razmerje.

## Velikosti na papirju in v modelu

Velikosti besedila in kot so v enotah prostora, v katerem rišete.

| Želite na papirju | Narisano na listu | Narisano v modelu v 1:50 (risba v mm) | Narisano v modelu v 1/4" = 1'-0" (risba v palcih) |
|---|---|---|---|
| 2,5 mm besedilo | 2.5 | 125 | — |
| 3/32" besedilo | 0.09375 | — | 4.5 |

Pri kotah ohranite velikosti kot velikosti na papirju in nastavite skupno merilo ({{cmd:DIMSCALE}}) na merilo izrisa: 50 za 1:50, 48 za 1/4" = 1'-0". Glejte [Nastavitev velikosti kot](topic:dimension-settings).

## Anotiranje po merilu

Narišite model v polni velikosti in naj CadCraft opravi vsote zgoraj.

1. Izberite besedilo ali kote, ki naj ohranijo svojo velikost na papirju. V {{ui:Lastnosti}} obkljukajte {{ui:Anotativno}}. {{ui:Velikost na papirju}} potem pokaže na primer `2.5 mm at 1:50`.
2. Vnesite {{cmd:ANNOSCALE}} in merilo, v katerem bo risba natisnjena, na primer `1:100`.

Vsako anotativno besedilo in vsaka kota se preoblikuje, da se natisne v isti velikosti pri novem merilu: 2,5 mm besedilo je 125 visoko v milimetrski risbi pri 1:50 in 250 visoko pri 1:100. Širina odstavka se spremeni z njim; besedilo kote, puščice in razmiki se spremenijo skupaj (njihovo skupno merilo). To je en korak razveljavitve, predmeti, ki niso anotativni, pa se nikoli ne spremenijo.

Nastavitev je shranjena v DWG in DXF: drugi programi preberejo oznako anotativnosti, CadCraft pa hrani tudi merilo, za katero je vsak predmet velikosten.

Če vaša pisarna nastavi višine na papirju v dodatku Privzeta pravila (Nastavitve › Splošno › Privzeta pravila › Velikosti anotacij na papirju), {{cmd:ANNOSCALE}} nastavi tudi višino, s katero se začne novo besedilo, na pisarniško višino za opombe pri tem merilu. Glejte [Privzeta pravila](topic:default-policies).

### En predmet pri več merilih

List pogosto prikaže isti tloris v 1:100 in del njega v 1:50. Dajte opombam in kotam obe merili in vsak pogled jih prikaže v njihovi velikosti na papirju:

1. Izberite anotativno besedilo in kote ter vnesite `OBJECTSCALE`.
2. Izberite `Add` in vnesite merilo, na primer `1:50`. (`Current scale` doda merilo anotacij risbe; `List` prikaže, kaj vsak predmet ohrani; `Delete` ga odstrani.)

Pogled, katerega merilo je na seznamu predmeta, ga prikaže v velikosti za to merilo: 2,5 mm besedilo je narisano 250 visoko skozi pogled 1:100 in 125 visoko skozi pogled 1:50, na zaslonu in v izrisu. Predmet ostane tam, kjer je; razlikuje se samo njegova velikost. V pogledu pri merilu, ki ni na seznamu predmeta, se predmet prikaže v velikosti, ki jo ima, dokler ne vnesete `ANNOALLVISIBLE` in izberete `OFF`: potem je tam izpuščen. {{cmd:ANNOSCALE}} preoblikuje predmete, ki imajo na seznamu novo merilo, ostale pa pusti kot so.

Seznami so shranjeni v DWG in DXF kot lastni podatki CadCraft. Drugi program vidi vsak predmet kot anotativen, pri enem merilu, za katero je velik. Stikalo ANNOALLVISIBLE ni shranjeno v datoteki.

## Debeline in vrste črt

Sloj ali predmet lahko ima **debelino črte** (0,05 do 2,11 mm) in **vrsto črte** (črtkana, skrita, središčna, fantomska, pikčasta …). Nastavite ju v desnem podoknu: če nič ni izbrano, sta {{ui:Tip črte}} in {{ui:Debelina črte}} pod {{ui:Trenutne nastavitve}} to, kar dobijo novi predmeti ({{ui:ByLayer}}, da sledijo svojemu sloju), dva pod {{ui:Sloj …}} pa sta tekočega sloja. Ko so predmeti izbrani, iste dve vrstici in {{ui:Merilo tipa črte}} spremenijo te predmete. Ukazi so {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) in {{cmd:LTSCALE}} (`LTS`).

Vrste črt so prikazane na zaslonu in v izrisih. Njihove črtice so v enotah risbe: metrična risba uporablja ISO velikosti (DASHED: črtice 12,7 mm), risba v palcih pa palčne (0,5"). Če so črtice premajhne ali prevelike, spremenite {{ui:Merilo tipa črte}} (LTSCALE) risbe: vsaka črtica in presledek se z njim pomnožita; merilo predmeta se pomnoži še enkrat. Vzorec, ki je premajhen, da bi bil viden, je narisan kot polna črta.

Debeline črt se natisnejo v izrisih, v mm na papirju ne glede na merilo. Črte z debelino {{ui:Privzeto}} uporabijo širino peresa, izbrano v pogovornem oknu {{ui:Izris v PDF}} (0,13 do 0,70 mm; sprva 0,25 mm); debelina 0 se natisne kot najtanjša črta. Na zaslonu je vsaka črta eno piksel široka, dokler ne pritisnete {{ui:LWT}} v vrstici stanja (ali vnesete {{cmd:LWDISPLAY}}): potem debelina nad 0,25 mm riše širše (0,5 mm = 2 piksla) v modelu, na listu pa v svoji pravi širini na papirju. Izbira se hrani v tem brskalniku.

## Pisarniški standard

Pisarna lahko hrani svoje višine besedila na papirju, sloje, polja glave risbe in predloge v enem zapisu, pisarniškem standardu. CadCraft ga prebere v tem vrstnem redu: zapis risbe (nastavljen z {{cmd:OFFICESTANDARD}} › `Import`, shranjen v datoteki), skupni standard vaše ekipe, nato vaša Privzeta pravila. Anotativno besedilo in kote vzamejo svojo višino na papirju iz njega pri merilu anotacij. Prazen standard ničesar ne spremeni. {{cmd:OFFICESTANDARD}} › `Layers` doda pisarniške sloje, ki jih risba nima.
