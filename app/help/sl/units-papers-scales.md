---
title: Enote, formati papirja in merila
summary: Kaj pomenijo enote risbe v CadCraftu, velikosti papirja za liste in izrise, vsa standardna merila ter kako se velikosti besedila in kot povezujejo z merilom izrisa.
keywords: enote, milimetri, palci, čevlji, arhitekturni, inženirski, ulomkovni, ulomki, lunits, format dolžin, natančnost, metri, velikost papirja, a3, a1, arch d, ansi, tabloid, letter, merilo, 1:100, 1/4 palca, arhitekturno merilo, inženirsko merilo, insunits
from: 8346236a
---

## Enote risbe

Risate v polni velikosti, v enotah risbe. Kaj ena enota pomeni, je nastavitev risbe **Enote**:

1. Pritisnite {{key:Esc}}, da nič ni izbrano, na zavihku {{ui:Model}}.
2. V {{ui:Trenutne nastavitve}} izberite {{ui:Enote}}: {{ui:Brez enot}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Palci}} ali {{ui:Čevlji}}.

Kote lahko zapišejo dolžine v milimetrih, centimetrih, metrih ali kilometrih, ne glede na enoto risbe: glejte [Kote v mm, cm, m ali km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Spreminjanje enot ničesar ne spremeni po velikosti. Spremeni se način branja meril na listih in v izrisih ter katera merila so ponujena. Risba, odprta iz DWG ali DXF, ohrani enote, shranjene v datoteki; razdelek {{ui:Risba}} v levi plošči jih prikaže.

Risba {{ui:Brez enot}} se šteje za enoto papirja: milimetri na ISO papirju, palci na ameriškem papirju.

## Čevlji in palci ter ulomki

Kako so dolžine **zapisane in vpisane**, je ločena nastavitev: format dolžin. Ne spremeni geometrije, samo to, kako so številke videti in kaj lahko vpišete.

1. Pritisnite {{key:Esc}}, da nič ni izbrano, na zavihku {{ui:Model}}.
2. V {{ui:Trenutne nastavitve}} izberite {{ui:Format dolžin}}: {{ui:Decimalni}} (`150.5`), {{ui:Arhitekturni}} (`12'-6 1/2"`), {{ui:Inženirski}} (`12'-6.5"`), {{ui:Ulomkovni}} (`150 1/2`) ali {{ui:Znanstveni}} (`1.505E+02`).
3. Izberite {{ui:Natančnost}}: decimalna mesta ali najmanjši ulomek (1/16 je običajna izbira za arhitekturni format).

Ali vpišite {{cmd:UNITS}} (`UN`) in odgovorite na njegovi dve vprašanji.

Pri {{ui:Arhitekturni}} ali {{ui:Inženirski}} obliki je ena enota risbe en palec, kot v AutoCADu: nastavite tudi {{ui:Enote}} na {{ui:Palci}}. Čevlje in palce lahko potem vpišete povsod, kjer se zahteva dolžina, in v poljih {{ui:Lastnosti}}:

| Vpišete | Pomeni |
|---|---|
| `12'6"` ali `12'-6"` | 12 čevljev 6 palcev (150) |
| `12'6-1/2"` | 12 čevljev 6½ palca. Pred ulomkom uporabite vezaj: {{key:Space}} je {{key:Enter}} v ukazni vrstici. |
| `12'` | 12 čevljev |
| `6"` ali `6` | 6 palcev: navadno število je palci |
| `1/2`, `6-1/2` | ulomki delujejo v katerem koli formatu |

Točke sprejmejo enake dolžine: `@12'6",0` ali `@10'<90`. Koti ostanejo v stopinjah.

Format se prikaže v zgodovini ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: površine kot kvadratni palci in kvadratni čevlji), v {{ui:Lastnosti}}, v koordinatah v vrstici stanja in v **novih kotah**. Listi ohranijo svoje enote papirja (milimetre ali palce) kot decimalna števila.

:::note
Format dolžin se shrani v datoteke DWG in DXF, vsaka kota pa ohrani svojega: shranjena risba se ob ponovnem odprtju pokaže tako, kot ste jo pustili.
:::

## Formati papirja

Listi in izrisi modelov uporabljajo te velikosti v obeh usmeritvah:

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

Novi listi začnejo pri ISO A3 za metrične risbe in risbe brez enot, pri Tabloidu za risbe v palcih ali čevljih. Izrisi modelov začnejo pri ISO A4 ali Letter na enak način, nato si zapomnijo vašo zadnjo izbiro. Listi iz odprtih datotek ohranijo svojo velikost, prikazano kot „Po meri“, kadar ni ena od teh.

## Merila

Merilo `1:n` pomeni, da ena enota na papirju prikazuje n enakih enot v modelu, torej 1:100 prikaže 1 m stavbe kot 10 mm papirja. CadCraft to izračuna iz enot risbe in enote papirja.

**Metrična merila**, ponujena za vsako risbo: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitekturna merila**, ponujena, kadar so enote palci ali čevlji: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženirska merila**, ponujena, kadar so enote palci ali čevlji: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vaša merila.** Vpišite `SCALELISTEDIT` (ali `SCALELIST`), da dodate lastno merilo, na primer 1:75 ali merilo lokacije 2 enoti papirja : 300 enot risbe. `Dodaj (A)` vpraša za ime, nato enote papirja in enote risbe (ime, kot `1:75`, ponudi svoje številke; pritisnite {{key:Enter}}, da jih sprejmete). `Uredi (E)`, `Izbriši (D)`, `Seznam (L)` in `Ponastavi (R)` delujejo na istem seznamu; `Ponastavi (R)` se vrne na standardni seznam. Vaša merila se pojavijo za standardnimi v seznamu merila poglednega okna v {{ui:Lastnosti}} in v pogovornem oknu {{ui:Izris v PDF}}; pogledno okno pri tem merilu se prikaže z njegovim imenom, merila pa se shranijo v risbi (DWG in DXF 2000) kot seznam meril risbe. Risba, odprta iz drugega programa, prinese svoj seznam; merila, ki se ujemajo s standardnim, se ne prikažejo dvakrat.

Ko je pogledno okno usmerjeno z {{ui:Pokaži celoten model}} ali {{ui:Izberite okno na modelu …}}, CadCraft izbere največje standardno merilo, ki se prilega. {{ui:Prilagodi celotnemu modelu}} namesto tega nastavi natančno merilo, ki se prikaže kot navadno razmerje.

## Velikosti na papirju in v modelu

Velikosti besedila in kot so v enotah prostora, v katerem risate.

| Želite na papirju | Narisano na listu | Narisano v modelu pri 1:50 (risba v mm) | Narisano v modelu pri 1/4" = 1'-0" (risba v palcih) |
|---|---|---|---|
| besedilo 2.5 mm | 2.5 | 125 | — |
| besedilo 3/32" | 0.09375 | — | 4.5 |

Pri kotah ohranite velikosti kot velikosti na papirju in nastavite splošno merilo ({{cmd:DIMSCALE}}) na merilo izrisa: 50 za 1:50, 48 za 1/4" = 1'-0". Glejte [Nastavitev velikosti kot](topic:dimension-settings).

## Anotiranje glede na merilo

Risbo narišite v polni velikosti, račune zgoraj pa naj opravi CadCraft namesto vas.

1. Izberite besedilo ali kote, ki naj ohranijo svojo velikost na papirju. V {{ui:Lastnosti}} označite {{ui:Anotativno}}. {{ui:Velikost na papirju}} nato prikaže na primer `2.5 mm pri 1:50`.
2. Vpišite {{cmd:ANNOSCALE}} in merilo, pri katerem bo risba natisnjena, na primer `1:100`.

Vsako anotativno besedilo in vsaka kota se spremeni tako, da se natisne v isti velikosti pri novem merilu: besedilo 2.5 mm je v milimetrski risbi pri 1:50 visoko 125, pri 1:100 pa 250. Širina odstavka se spremeni z njim; besedilo, puščice in razmiki kote se spremenijo skupaj (njeno splošno merilo). To je en korak razveljavitve, neanotativni objekti pa se nikoli ne spremenijo.

Nastavitev se shrani v DWG in DXF: drugi programi preberejo oznako anotativnosti, CadCraft pa ohrani tudi merilo, za katero je vsak objekt določen.

Če vaša pisarna nastavi višine papirja v dodatku Default Policies (Nastavitve › Splošno › Default Policies › Velikosti anotacij na papirju), {{cmd:ANNOSCALE}} nastavi tudi višino, s katero se začne novo besedilo, na pisarniško višino za opombe pri tem merilu. Glejte [Privzete politike](topic:default-policies).

### En predmet pri več merilih

List pogosto prikazuje isti tloris pri 1:100 in del pri 1:50. Opombam in kotam dajte obe merili, in vsako pogledno okno jih prikaže v njihovi velikosti na papirju:

1. Izberite anotativno besedilo in kote ter vpišite `OBJECTSCALE`.
2. Izberite `Dodaj (A)` in vpišite merilo, na primer `1:50`. (`Trenutno merilo (C)` doda merilo anotacij risbe; `Seznam (L)` pokaže, kaj ima vsak objekt; `Izbriši (D)` ga odstrani.)

Pogledno okno, katerega merilo je na seznamu objekta, prikaže objekt v velikosti za to merilo: besedilo 2.5 mm je narisano 250 visoko skozi pogledno okno 1:100 in 125 visoko skozi 1:50, na zaslonu in v izrisu. Objekt ostane tam, kjer je; razlikuje se samo njegova velikost. V pogledu pri merilu, ki ni na seznamu objekta, se objekt prikaže v velikosti, ki jo ima, dokler ne vpišete `ANNOALLVISIBLE` in izberete `OFF`: tedaj je tam izpuščen. {{cmd:ANNOSCALE}} spremeni velikost objektom, ki navajajo novo merilo, druge pa pusti pri miru.

Seznami se shranijo v DWG in DXF kot lastni podatki CadCrafta. Drug program vidi vsak objekt kot anotativen, pri enem merilu, za katero je določen. Preklop ANNOALLVISIBLE se v datoteki ne ohrani.

## Debeline in tipi črt

Sloj ali objekt ima lahko **debelino črte** (0.05 do 2.11 mm) in **tip črte** (črtkana, skrita, središčna, fantomska, pikčasta …). Nastavite ju v desni plošči: kadar nič ni izbrano, sta {{ui:Tip črte}} in {{ui:Debelina črte}} pod {{ui:Trenutne nastavitve}} tisto, kar dobijo novi objekti ({{ui:ByLayer}} sledi njihovemu sloju), dve vrstici pod {{ui:Sloj …}} pa sta lastni vrednosti trenutnega sloja. Pri izbranih objektih enaki dve vrstici in {{ui:Merilo tipa črte}} spremenijo te objekte. Ukazi so {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) in {{cmd:LTSCALE}} (`LTS`).

Tipi črt se prikažejo na zaslonu in v izrisih. Njihove črtice so v enotah risbe: metrična risba uporablja ISO velikosti (DASHED: 12.7 mm črtice), palčna pa palčne (0.5"). Če so črtice preveč majhne ali prevelike, spremenite {{ui:Merilo tipa črte}} risbe (LTSCALE): vsaka črtica in vrzel se pomnoži z njim; merilo objekta jo pomnoži še enkrat. Vzorec, ki je premajhen, da bi ga videli, se nariše kot polna črta.

Debeline črt se izrišejo v mm na papirju, ne glede na merilo. Črte z debelino {{ui:Privzeto}} uporabijo širino peresa, izbrano v pogovornem oknu {{ui:Izris v PDF}} (0.13 do 0.70 mm; sprva 0.25 mm); debelina 0 se izriše kot najtanjša črta. Na zaslonu je vsaka črta široka eno slikovno točko, dokler ne pritisnete {{ui:LWT}} v vrstici stanja (ali vpišete {{cmd:LWDISPLAY}}): tedaj se debelina nad 0.25 mm riše širše (0.5 mm = 2 slikovni točki) v modelu, na listu pa v pravi širini na papirju. Izbira se hrani v tem brskalniku.
