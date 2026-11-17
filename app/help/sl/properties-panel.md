---
title: Podokno Lastnosti
summary: Oglejte in spremenite vse o izbranih objektih, veliko naenkrat: koordinate z Z, velikosti, besedilo, nastavitve kotiranja, prosojnost in več. Polja sprejmejo izraze in dolžine z enotami.
keywords: skupaj, skupna dolžina, skupna površina, vsota, dolžina izbora, lastnosti, paleta lastnosti, ctrl+1, pr, ch, mo, ddmodify, različno, hitra izbira, pickadd, koordinate, z, višina, debelina, prosojnost, material, hiperpovezava, izraz, quickcalc, oglišče, slog kotiranja, toleranca, decimalke
from: 10d6a829
---

## Kaj se boste naučili

Kako odpreti podokno Lastnosti, spremeniti en objekt ali sto v enem koraku, vpisati natančne koordinate (z Z), uporabiti izraze in enote v katerem koli številskem polju ter kaj kaže vsaka vrsta objekta.

## Odprtje

Podokno je na desni. Da ga pripeljete v ospredje:

- Pritisnite {{key:Mod+1}} ali vpišite {{cmd:PROPERTIES}} (ali `PR`, `CH`, `MO`).
- Dvokliknite objekt (besedilo in večkratne vodilke odprejo svoj urejevalnik besedila).

Podokno je premično kot drugi: povlecite njegovo ročico, da ga pripnete levo, desno ali spodaj, ali ga spustite čez risbo, da lebdi (glejte [Razporeditev podoken in uporaba drugega monitorja](common:arrange-panels)).

### Zložitev

Gumb s pripenjačem v zgornjem desnem kotu podokna vklopi **samodejno skrivanje**: podokno se zloži v trak ob desnem robu, risba pa dobi prostor. Pokažite na trak (ali pritisnite {{key:Mod+1}}), in podokno se odpre čez risbo; ko se oddaljite, se spet zloži. Ponovno kliknite pripenjač, da ostane odprto. {{cmd:PROPERTIESCLOSE}} ga tudi zloži.

## Oddelki

Lastnosti so razvrščene v oddelke, ki jih lahko zložite: **Splošno**, **Geometrija**, **Besedilo**, **Črte in puščice**, **Prilagoditev**, **Primarne enote**, **Alternativne enote**, **Tolerance**, **Vzorec**, **Razno** in za bloke **Atributi** in **Element knjižnice**. Kliknite ime oddelka, da ga zložite ali odprete; CadCraft si zapomni, katere ste zložili.

Povlecite tanko črto med imeni in vrednostmi, da so imena širša ali ožja. Dvokliknite jo, da se vrne. S tipkovnico ji dajte fokus in uporabite puščične tipke.

## Spremenite vrednost

1. Kliknite vrstico. Glava kaže „Črta“.
2. Kliknite v {{ui:Dolžina}}. Med urejanjem polje kaže polno vrednost, ne zaokrožene.
3. Vpišite `2500` in pritisnite {{key:Enter}}. Črta je zdaj dolga 2500, ohranja pa svojo začetno točko in kot.

{{key:Enter}} ali klik drugje uveljavi vrednost; {{key:Esc}} vrne staro vrednost. Vsaka sprememba je en korak razveljavitve.

### Izrazi in enote

Vsako številsko polje sprejme več kot samo navadno številko:

| Vpišete | Dobite |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (palci, v risbi v čevljih in palcih) |
| `900mm`, `3.5m`, `2ft` | Pretvorjeno v enote risbe |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (polja kotov) |
| `0.5r`, `100g` | Radiani in gradi, pretvorjeni v stopinje |

Dolžina z enoto zahteva, da ima risba enote: najprej nastavite {{ui:Enote}} pod {{ui:Novi objekti}} (ničesar ni izbrano). Napačen vpis je zavrnjen z opombo pod podoknom, nič se ne spremeni in nikoli se ne shrani kot 0. Funkcije: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; koti so v stopinjah.

## Spremenite veliko objektov naenkrat

1. Izberite več objektov, na primer 8 črt in 4 kote.
2. Glava pravi „12 objektov“, seznam na vrhu pa ponudi **Vse (12)**, **Črta (8)** in **Kota (4)**.
3. **Vse** prikaže, kaj ima vsak objekt (sloj, barva, tip črte …). Izberite **Kota (4)**, da vidite nastavitve kotiranja.
4. Spremenite vrednost, na primer {{ui:Decimalke}} na `1`.

Vse štiri kote se spremenijo v enem koraku razveljavitve. Polje, ki kaže **Različno**, pomeni, da se objekti razlikujejo; vpis vrednosti jo nastavi na vse. Objekti na zaklenjenih slojih ostanejo, kakor so, opomba pa pove, koliko jih je.

## Skupaj za izbor

Ko je izbranih več objektov, oddelek {{ui:Skupaj}} na vrhu pove:

- **Objekti**: koliko vsake vrste, na primer „8 črt, 2 polilinije, 1 krog“.
- **Skupna dolžina**: seštevek črt, lokov in polilinij (tudi zlepkov) ter koliko objektov to je.
- **Skupna površina**: seštevek zaprtih objektov: krogov, celih elips, zaprtih polilinij in šrafur (luknje šrafure se odštejejo).

Vse je v formatu dolžine risbe (čevlji in palci, kadar jih uporablja; površine tedaj v kvadratnih palcih in kvadratnih čevljih). Vrstica stanja kaže isto dolžino in površino, kadar koli so objekti izbrani; {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Dolžina in površina izbora}} › {{ui:Skrito}} to izklopi. Za en objekt {{ui:Geometrija}} kaže njegovo lastno dolžino in površino, kakor prej.

## Koordinate

Vsaka točka kaže **X**, **Y** in **Z**: začetek in konec črte, središča, vstavitvene točke, položaje besedila, trenutno oglišče polilinije. Črte prikazujejo tudi **Delta X**, **Delta Y** in **Delta Z** (samo za branje). Polilinije in šrafure imajo **Višino** (en Z za ves objekt).

Gumb s križcem ob imenu točke vam omogoča, da jo izberete v risbi: kliknite ga, nato kliknite nov položaj (lovljenja delujejo). Vrednosti so svetovne koordinate.

## Splošno

| Polje | Kaj je |
|---|---|
| {{ui:Sloj}}, {{ui:Barva}}, {{ui:Tip črte}}, {{ui:Merilo tipa črte}}, {{ui:Debelina črte}} | Kakor v podoknu slojev; {{ui:ByLayer}} sledi sloju |
| {{ui:Prosojnost}} | ByLayer, ByBlock ali 0 do 90 % |
| {{ui:Debelina}} | Kako daleč se črte, krogi, loki, polilinije, točke in besedilo raztezajo v Z |
| {{ui:Material}} | ByLayer, ByBlock, Global ali ime, ki ga je prinesla risba |
| {{ui:Slog izrisa}} | Samo za branje: risbe se izrisujejo po barvi, prek [tabele slogov izrisa](topic:plot-pdf#plot-style-tables) lista |
| {{ui:Hiperpovezava}} | Spletni naslov, shranjen z objektom |

## Kaj kaže vsaka vrsta

| Izbrano | Lahko spremenite |
|---|---|
| Črta | Začetni in končni X, Y, Z; dolžina; kot |
| Krog | Središče; polmer; premer; obseg; površina (vsako nastavi polmer) |
| Lok | Središče; polmer; začetni in končni kot; skupni kot; tetiva (prikaže dolžino loka in površino) |
| Elipsa | Središče; velika in mala polmera; razmerje polmerov; kot velike osi; začetni in končni kot |
| Polilinija | Brskalnik oglišč (spodaj); splošna širina; višina; zaprta; površina, kadar je zaprta (skalira jo okoli središča) |
| Besedilo | Vsebina; slog; poravnava; višina; zasuk; faktor širine; kot poševnosti; določena širina; razmik vrstic; anotativno; položaj |
| Sklic na blok | Vstavitvena točka; zasuk; merilo X, Y, Z in enotno merilo; vrednosti atributov |
| Šrafura | Vzorec; merilo; kot; izhodišče; asociativnost; zaznavanje otokov; barva ozadja; višina |
| Kota | Glejte spodaj |
| Večkratna vodilka | Besedilo; višina; širina; stran besedila; velikost puščice; razdalja pristanka; točka puščice |
| Pogledno okno | Merilo; središče in velikost na listu; središče pogleda v modelu; vklop; zaklenjen prikaz |

### Oglišča polilinije

{{ui:Trenutno oglišče}} kaže, katero oglišče pripada poljem pod njim. Uporabite puščične gumbe ali vpišite številko, da se premaknete na drugo oglišče; število ni omejeno. Vsako oglišče ima X, Y, širino začetnega in končnega segmenta ter izbočenje segmenta, ki se tam začne (0 = ravno).

## Kote

Kota kaže svoj **slog kotiranja**, kaj meri, svoje točke in vse nastavitve:

- **Črte in puščice:** puščica za vsak konec, velikost puščice, velikost oznake, barve in debeline kote ter pomožnih merilnih črt, skrivanje ene polovice ali katere koli pomožne črte, odmik pomožne merilne črte in podaljšek.
- **Besedilo:** prepis (pustite prazno za izmerjeno vrednost; `<>` pomeni njo znotraj vašega besedila), slog, barva, višina, odmik, navpični in vodoravni položaj, vedno vodoravno, zasuk, polnilo ozadja.
- **Prilagoditev:** splošno merilo, razmik osnovnih črt, kaj se premakne, ko je prostora malo, premik besedila.
- **Primarne enote:** format, decimalke, zaokroževanje, predpona, pripona, merilo meritve, decimalni znak, zatiranje vodilnih in zadnjih ničel; za kote format kota in decimalke.
- **Alternativne enote:** vklop ali izklop, format, decimalke, množitelj (25.4 spremeni palce v milimetre), zaokroževanje, predpona in pripona.
- **Tolerance:** nič, simetrično, odstopanje, meje ali osnovno, z zgornjimi in spodnjimi vrednostmi, decimalkami, višino in položajem.

Če spremenite katerokoli od teh nastavitev na odprti koti, se slika, ki jo je naredil drug program, opusti in CadCraft jo nariše znova.

:::note
Vodoravni položaj besedila (ob prvi ali drugi pomožni merilni črti) in besedilo pod črto se narišeta pri linearnih in poravnanih kotah; pri drugih kotah se ohranita in shranita, a še nista narisana. Izbire prilagoditve se ohranijo in shranijo, a še niso narisane: CadCraft postavi besedilo po svojem pravilu (nad črto, zunaj, kadar ne gre notri).
:::

## Nič ni izbrano

Ko ničesar ni izbrano, podokno kaže:

- **Novi objekti:** sloj, barvo, tip črte, debelino črte in višino besedila, ki jih dobijo novi objekti; enote risbe in format dolžin; tip črte in debelino črte trenutnega sloja; velikosti za nove kote. Na listu sta najprej ime lista, papir in usmerjenost.
- **Pogled:** središče, višina in širina tega, kar je na zaslonu. Vpišite vrednost, da premaknete pogled tja.
- **Razno:** ikona UCS vklopljena ali izklopljena, UCS (vedno Svet: CadCraft še nima uporabniških koordinatnih sistemov) in merilo anotacij.

## Gumbi na vrhu

| Gumb | Naredi |
|---|---|
| Lijak | {{cmd:QSELECT}}: izbira po vrsti in lastnosti |
| Kazalec | {{cmd:SELECT}}: izbira objektov v ukazni vrstici |
| Plus ali 1 | Ali klik doda izboru (plus) ali ga zamenja (1); ista nastavitev kot v {{ui:Nastavitve}}, {{ui:CadCraft}} |
| Pripenjač | Samodejno skrivanje, zgoraj |

## Pogoste napake

- **Vpisovanje v polje ni naredilo ničesar.** Pritisnite {{key:Enter}} ali kliknite drugje, da uveljavite. Rdeče polje in opomba pomenita, da je bil vpis zavrnjen.
- **Dolžina z enoto je zavrnjena.** Risba nima enot. Nastavite {{ui:Enote}}, ko ničesar ni izbrano.
- **Vidna sta samo Sloj in Barva.** Izbrano je več vrst objektov in je izbrano **Vse**. Izberite eno vrsto na seznamu na vrhu.
- **Nekateri objekti se niso spremenili.** Na zaklenjenem so sloju. Odklenite sloj v podoknu slojev.
- **Vtipkane črke so šle v polje.** Medtem ko ima polje kurzor, tipke pišejo tja. Pritisnite {{key:Enter}} ali {{key:Esc}} in nato vpišite ukaz.
