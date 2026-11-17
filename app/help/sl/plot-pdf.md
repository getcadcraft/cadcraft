---
title: Izris v PDF
summary: Naredite PDF lista v polni velikosti ali modela v merilu ali prilagojenega papirju, ga natisnite iz brskalnika ali iz programa CadCraft Studio ali ga shranite kot PNG ali SVG.
keywords: izris, tisk, tiskalnik, kopije, png, svg, slika, pdf, objavi, exportpdf, papir, merilo, enobarvno, sivine, črno-belo, debelina črte, pero, nastavitev strani, okno izrisa, slog izrisa, tabela slogov izrisa, ctb, odvisno od barve, rastriranje, plotstyles, stylesmanager
from: a4752f83
---

## Kaj boste naredili

Naredili boste PDF lista v polni velikosti, nato hitri PDF modela v merilu 1:100 in izpis.

PDF se izdela v vašem brskalniku; nič se ne naloži. Gre za vektorski PDF: črte ostanejo ostre pri vsaki povečavi, besedilo pa je mogoče iskati.

## Izris lista

1. Kliknite zavihek lista pod risbo.
2. Pritisnite {{key:Mod+P}}, kliknite {{ui:Izris}} ali vnesite `PLOT` in pritisnite {{key:Enter}}.

Odpre se pogovorno okno {{ui:Izris v PDF}}. Pove, kateri list izriše in na kateri papir, „v polni velikosti … kot ga vidite“. Predogled na desni prikazuje list.

3. V {{ui:Slog izrisa}} izberite {{ui:Enobarvno (črno)}} za črne črte, {{ui:Barvno (kot narisano)}} za ohranitev barv, {{ui:Sivine}} ali svojo tabelo (glejte [Tabele slogov izrisa](topic:plot-pdf#plot-style-tables)). List ohrani to izbiro: shranjena je z risbo.
4. V {{ui:Debelina črte}} izberite debelino peresa od 0.13 mm do 0.70 mm. Črte s privzeto debelino se natisnejo s to debelino; črte z lastno debelino (sloja ali objekta ali s peresom njihove barve v tabeli) se natisnejo v tej debelini.
5. Kliknite {{ui:Prenesi PDF}}.

Brskalnik prenese PDF, poimenovan po risbi in listu, na primer `Drawing1-A-101 Plan.pdf`. Zgodovina prikaže njegovo velikost v bajtih in velikost papirja v milimetrih.

List se vedno izriše v merilu 1:1 na svojem papirju. Za spremembo papirja ga spremenite na samem listu (glejte [Nastavitev lista](topic:sheets-and-viewports)). Sloji, nastavljeni na neizrisovanje, so izpuščeni, prav tako okvirji pogledov.

## Vsi listi v enem PDF

Če imate dva ali več listov, ima pogovorno okno {{ui:Izris v PDF}} možnost {{ui:Vsi listi v enem PDF}}; lahko pa vnesete {{cmd:PUBLISH}}. {{key:Enter}} izbere vse liste; `S` (Nekatere) zahteva njihova imena, ločena z vejicami. Prenese se en PDF s stranjo za vsak list, po vrstnem redu zavihkov, vsaka v svoji velikosti papirja, in z zaznamkom za vsak list z njegovim imenom. Vsak list se izriše s svojo tabelo slogov izrisa; list, pri katerem ni izbrana nobena, uporabi tisto, ki ste jo nazadnje izbrali v pogovornem oknu, in debelino peresa, ki ste jo nazadnje izbrali.

## Izris modela

1. Kliknite zavihek {{ui:Model}}.
2. Pritisnite {{key:Mod+P}}.

Pogovorno okno pove, da izriše model na list papirja, in prikaže več nastavitev:

3. V {{ui:Površina}} izberite, kaj naj se izriše:
   - {{ui:Vse (obseg)}}: celotna risba.
   - {{ui:Kar je na zaslonu}}: območje, ki ga zdaj vidite v risbi.
   - {{ui:Okno …}}: nato kliknite {{ui:Izberi}}, kliknite dve oglišči na risbi in pogovorno okno se vrne.
4. V {{ui:Papir}} izberite velikost: od ISO A4 do A0, Letter, Legal, Tabloid, ANSI C in D ali ARCH C, D in E.
5. V {{ui:Usmerjenost}} izberite {{ui:Ležeče}} ali {{ui:Pokončno}}.
6. V {{ui:Merilo (S)}} izberite {{ui:Prilagodi papirju}} ali merilo, na primer `1:100`.

Pod nastavitvami vrstica pove merilo in koliko veliko je območje na papirju. Če je večje od papirja, to sporoči: robovi bodo odrezani. Izberite manjše merilo, večji papir ali {{ui:Prilagodi papirju}}.

7. Kliknite {{ui:Prenesi PDF}}.

Izris modela pusti 5 mm rob okoli, ker večina tiskalnikov ne more tiskati do roba. {{ui:Prilagodi papirju}} da nenavadno merilo (zgodovina in informacijska vrstica pišeta „(prilagojeno)“); kadar mora biti risba pravilno izmerljiva, izberite standardno merilo.

:::note
Merila se berejo v realnih enotah. Da bo 1:100 pravilno, nastavite {{ui:Enote}} v {{ui:Trenutne nastavitve}} na to, kaj pomeni ena enota risbe. Risba brez enot se šteje, da je v milimetrih.
:::

## Tabele slogov izrisa

Tabela slogov izrisa pove, kako se vsaka od 255 standardnih barv risbe izriše, na enak način kot tabela slogov izrisa, odvisna od barve (CTB), v drugih programih CAD. Tri so vgrajene:

| Tabela | Izriše |
|---|---|
| {{ui:Barvno (kot narisano)}} | Vsak objekt v svoji barvi. |
| {{ui:Enobarvno (črno)}} | Vsaka barva črna: običajna izbira za risbe. |
| {{ui:Sivine}} | Vsaka barva kot njen odtenek sive, tako da barve ostanejo ločene na črno-belem tiskalniku. |

Če želite svojo, na primer rdeče črte debele in vse drugo tanko:

1. V pogovornem oknu {{ui:Izris v PDF}} kliknite {{ui:Uredi tabele…}} (ali vnesite {{cmd:PLOTSTYLES}}).
2. Kliknite {{ui:Nova}} in vnesite ime, na primer `office`, v {{ui:Ime}}. Če želite začeti z vgrajeno tabelo, jo izberite v {{ui:Tabela}} in kliknite {{ui:Kopiraj}}.
3. Kliknite barvo v mreži. {{key:Shift}}+klik izbere razpon barv, {{key:Mod}}+klik doda še eno, {{ui:Izberi vse barve}} izbere vse.
4. Nastavite, kako se izbrane barve izrišejo:
   - {{ui:Natisne se v}}: {{ui:Lastna barva}}, {{ui:Črna}} ali {{ui:Druga barva…}}.
   - {{ui:Kot siva}}: barva kot njen odtenek sive.
   - {{ui:Barvilo (%)}}: 100 je polna barva, 50 je na pol poti do bele (rastriranje), za ozadne črte.
   - {{ui:Debelina črte}}: {{ui:Lastna debelina črte}} ohrani debelino objekta ali sloja; vrednost izriše vsako črto te barve s to debelino.
   - {{ui:Tip črte}}: izriše vsako črto te barve z drugim tipom črte (na primer vse rdeče črtkano); {{ui:Uporabi tip črte objekta}} jih pusti.
   - {{ui:Konec črte}} in {{ui:Stik črt}}: zaključki ravni, kvadratni ali okrogli ter koti zašiljeni, posneti ali okrogli (okrogli, kot prej, če ničesar ne nastavite).
   - {{ui:Slog polnila}}: polno polnilo te barve se izriše kot šrafure (vodoravne ali navpične črte, poševne, mreža, romboidi, kvadratne pike) namesto barve, za tiskalnike in načrte, kjer bi bila enakomerna barva preveč težka.

   Tabela sama ima še dve nastavitvi: {{ui:Debeline črt}}, debeline, ki jih pozna (izrisana črta gre na najbližjo od njih), in {{ui:Merilo tipa črte}}, faktor za črtice vsakega tipa črte, ki ni ISO.

5. Kliknite {{ui:Končano}}. Tabela se ohrani v risbi, list (ali model) pa se zdaj izriše z njo. {{ui:Prekliči}} zavrže spremembe.

Barva z lastnim peresom prikaže pik v kotu, pik na dnu pa, kadar nastavi debelino črte. Barva z resnično barvo (ni ena od 255) uporabi pero najbližje standardne barve.

Risba ohrani svoje tabele in izbiro vsakega lista, ko jo shranite kot DWG (2000 do 2018) ali DXF (R12 ali 2000), in se ob odprtju znova naložijo. Drugi programi vidijo ime v nastavitvi strani vsakega lista (`office.ctb`), ne samo tabele. Risba iz drugega programa, katere nastavitev strani navaja tabelo, kot je `monochrome.ctb`, se izriše z vgrajeno tabelo s tem imenom; za katero koli drugo ime pogovorno okno pove, da risba tega nima, in riše barve risbe, dokler ne izberete tabele ali je ne ustvarite s tem imenom.

Za uporabo tabele v drugi risbi kliknite {{ui:Izvozi}} v {{ui:Tabele slogov izrisa}} (shrani `office.plotstyle.json`), nato {{ui:Uvozi…}} v drugi risbi. {{ui:Uvozi…}} sprejme tudi datoteko `.ctb` iz drugega programa: prebere se iz objavljenega opisa formata in **še ni preverjena z resnično datoteko**. Prebere se barva, rastriranje in debelina vsake barve; sivine, številke peres, tipi črt, zaključki in stiki črt ter slogi polnil se ne berejo, imenovana tabela (`.stb`) pa je zavrnjena. Primerjajte prvi izris s pričakovanji in nam pošljite datoteko, če je napačen.

## Tiskanje

**V brskalniku** kliknite {{ui:Natisni…}}. CadCraft naredi PDF in odpre brskalnikovo lastno pogovorno okno za tiskanje. Tam izberite „Dejanska velikost“ ali 100 % (ne „Prilagodi“), da ohranite merilo. Če brskalnik ne more tiskati iz strani, se PDF odpre v novem zavihku: tiskajte od tam s {{key:Mod+P}}.

Lahko tudi kliknete {{ui:Odpri za tiskanje}}: PDF se odpre v novem zavihku brskalnika, natisnete pa ga od tam.

:::safari
Safari morda prikaže PDF in počaka, da uporabite **Datoteka**, nato **Natisni**.
:::

Če brskalnik blokira nov zavihek, CadCraft namesto tega prenese PDF in to sporoči v zgodovini. Za odpiranje v zavihku naslednjič dovolite pojavna okna za spletno mesto.

**V CadCraft Studiu** pogovorno okno {{ui:Izris v PDF}} našteje tiskalnike računalnika. Izberite {{ui:Tiskalnik}}, {{ui:Papir v tiskalniku}} in število {{ui:Kopije}}, nato kliknite {{ui:Natisni…}}. {{ui:Enako kot izris}} izbere papir tiskalnika, ki ustreza velikosti lista (A3 za list A3); če tiskalnik nima takega, uporabi svoj papir in list prilagodi nanj. V Windows se list pošlje kot slika 300 dpi, ker Windows ne more tiskati PDF brez programa za PDF; v Linux in macOS gre sam PDF v sistemsko storitev tiskanja. Nič ne zapusti računalnika.

## Datoteke PNG in SVG

{{ui:Prenesi PNG}} shrani izrisan list kot sliko pri 300 dpi (zmanjšano samo, kadar bi bil zelo velik list večji, kot ga brskalnik zmore narediti; zgodovina to pove). {{ui:Prenesi SVG}} ga shrani kot skalabilno risbo v milimetrih z črtami in besedilom izrisa. Oba prihajata iz istega izrisa kot PDF, z istim slogom izrisa, debelino črte in območjem. Slike, vstavljene v risbo, so le v PDF-ju; zgodovina pove, koliko jih je bilo izpuščenih.

## Slike

Slike se natisnejo pri svoji ločljivosti, pod črtami. {{ui:Slike}} v pogovornem oknu jih omeji na 600, 300 ali 150 dpi za manjšo datoteko. Črte, besedilo in šrafure ostanejo vedno ostri (vektorji), prosojnost pa ostane prosojnost. Glejte [Slike v risbi](topic:pictures).

## Nastavitve, ki se shranijo

Pogovorno okno si v tem brskalniku zapomni vaš nazadnje izbrani papir, usmerjenost, merilo in debelino črte. Tabela slogov izrisa se shrani pri vsakem listu v risbi; list, pri katerem ni izbrana nobena, začne z nazadnje izbrano. Izbrano okno ostane, dokler ne osvežite strani; potem se pogovorno okno začne z {{ui:Vse (obseg)}}.

## Pogoste napake

- **PDF je prazen ali so gumbi sivi.** Ni ničesar za izris (prazen model) ali je izbrano {{ui:Okno …}} in še ni izbrano okno („Za izris izberite okno.“).
- **Besedilo v PDF-ju kaže „?“.** Besedilo v poljščini, češčini, cirilici, grščini in drugih evropskih pisavah se izriše takšno, kot je: PDF nosi črke, ki jih potrebuje (iz pisave Liberation Sans, ki ima širine kot Helvetica), besedilo pa je še vedno mogoče označiti in iskati. Kitajsko, japonsko in korejsko besedilo se prav tako izriše takšno, kot je: kadar ga risba vsebuje, izris prenese večjo pisavo (približno 10 MB, enkrat), PDF pa nosi samo uporabljene znake, zato je prvič potrebna povezava (ne v offline kopiji, shranjeni prej). Hebrejščina se izriše iz iste vdelane pisave kot latinsko besedilo, besedilo v arabščini, perzijščini in urdujščini pa sproži prenos še ene pisave (manj kot 1 MB, enkrat); vrstice iz desne proti levi so urejene in črke povezane (glejte [Besedilo](topic:text)). Redki ideogrami zunaj teh pisav in pisave, ki potrebujejo zapleteno oblikovanje, kot je hindijščina, se izrišejo kot „?“, zgodovina pa jih šteje.
- **Vse črte so enako debele.** Njihova debelina je privzeta: dajte slojem ali objektom {{ui:Debelina črte}} v desnem podoknu (glejte [Debeline črt in tipi črt](topic:units-papers-scales#line-weights-and-linetypes)) ali nastavite debeline po barvah v [tabeli slogov izrisa](topic:plot-pdf#plot-style-tables).
- **„(ni v tej risbi)“ ob slogu izrisa.** Risba prihaja iz drugega programa in navaja tabelo, ki je ne vsebuje. Izberite eno od tabel ali naredite tabelo s tem imenom.
- **Konstrukcijske črte so se natisnile.** Nastavite, da se njihov sloj ne izrisuje: kliknite gumb tiskalnika v podoknu {{ui:Sloji}}.
- **Izpis je napačne velikosti.** Tiskalnik ga je spremenil v merilu. Tiskajte v dejanski velikosti.
- **{{key:Mod+P}} je odprl brskalnikovo pogovorno okno za tiskanje.** Kazalec je bil v polju v desnem podoknu ali je bilo odprto drugo pogovorno okno. Pritisnite {{key:Enter}} ali {{key:Esc}}, da zapustite polje, nato poskusite znova ali kliknite {{ui:Izris}}.
- **{{key:Mod+P}} ni naredil ničesar.** Teče ukaz. Najprej pritisnite {{key:Esc}}.
