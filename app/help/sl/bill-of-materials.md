---
title: Kosovnice po območjih
summary: Označite področja risbe kot območja in za vsako postavite tabelo, ki šteje bloke znotraj njega. Tabele sledijo risbi, ko delate, in izberete, kateri stolpci se prikažejo v vsaki.
keywords: kosovnica, BOM, seznam delov, razpredelnica, območje, površina, tabela, štetje, količina, atribut, stolpci, številka elementa, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Območje** je poimenovano področje risbe. **Tabela kosovnice** našteje, kaj leži znotraj enega območja ali v celotni risbi: vsak blok z njegovo količino in vrednostmi atributov. Risba lahko ima poljubno število območij in tabel, eno območje pa lahko ima več tabel z različnimi stolpci.

Orodja so na zavihku {{ui:Blocks}} pod {{ui:Bill of materials}}, v meniju {{ui:More}} skupine {{ui:Blocks}}, in jih je mogoče vnesti.

## Naredite območje

Vnesite {{cmd:BOMZONE}} in nato:

- kliknite dve nasprotni oglišči za pravokotnik,
- izberite {{ui:Polygon}}, kliknite vsako oglišče in pritisnite Enter za zaprtje, ali
- izberite {{ui:Object}} in izberite zaprto polilinijo, krog, elipso ali zaprt zlepek. Njegov obris se kopira; predmet ostane, kakor je.

Nato vnesite ime območja. Območje je narisano kot črtkan obris z imenom nad zgornjim levim kotom, na sloju `BOM-ZONES`, ki se ne izrisuje. Če želite območja na papirju, vklopite izris za ta sloj.

Območje je navadna zaprta polilinija: premaknite jo, raztegnite ali povlecite njene ročice, ime pa sledi. Če ga želite preimenovati, uredite besedilo imena ali uporabite {{cmd:BOMZONE}} in {{ui:Rename}}. {{ui:Zones}} našteje vsa območja in koliko tabel ima vsako.

## Postavite tabelo

Vnesite {{cmd:BOMTABLE}} (ali {{cmd:BOM}}), izberite obris območja ali njegovo ime, določite višino besedila in kliknite, kam gre zgornji levi kot tabele. Pritisnite Enter namesto izbire območja ali izberite {{ui:Whole}} za tabelo celotne risbe.

Nova tabela prikaže številko elementa, količino, ime bloka in stolpec za vsak atribut, ki ga bloki nosijo (prvih šest; drugi so ponujeni nepotrjeni). Bloki z enakim imenom in enakimi vrednostmi atributov delijo eno vrstico.

## Kaj šteje kot znotraj

- Blok šteje v območju, ki vsebuje njegovo **vstavitveno točko**.
- Črta, lok, krog, polilinija, elipsa, zlepek ali šrafura šteje **celo** v območju, ki vsebuje središče njenih mej (pri črti njeno središče). Njena dolžina ni prirezana na robu območja.
- Točka točno na robu je znotraj.
- Območja se lahko prekrivajo. Vsako območje šteje zase, zato je predmet v prekrivanju v obeh tabelah.

## Tabele sledijo risbi

Ko dodate, premaknete, kopirate ali izbrišete blok, uredite atribut ali oblikujete ali premaknete območje, se vsaka tabela nariše znova v istem koraku. Razveljavitev vrne vaše urejanje in spremembo tabele skupaj.

Če želite, da tabela ne sledi, označite {{ui:Frozen}} v njenih nastavitvah. Zamrznjena tabela se spremeni samo, ko urejate njene nastavitve ali vnesete {{cmd:BOMUPDATE}}, ki zdaj posodobi vsako tabelo.

## Izberite stolpce

Izberite tabelo in vnesite {{cmd:BOMEDIT}}. V pogovornem oknu:

- **Stolpci**: označite tiste, ki jih želite prikazati (številka elementa, količina, ime, sloj, dolžina, površina, opombe in vsak atribut), vnesite svojo glavo za katerega koli od njih in ga premaknite gor ali dol.
- {{ui:Group rows by}}: ime bloka in vrednosti atributov, samo ime bloka, sloj ali en atribut. V združeni vrstici vrednost, ki se med bloki razlikuje, piše „različno“.
- {{ui:Sort by}} katerikoli stolpec, naraščajoče ali padajoče.
- {{ui:Title}}, {{ui:Show the title}} in {{ui:Totals row}}.
- {{ui:Count linework by layer}} doda eno vrstico za vsak sloj s številom predmetov, njihovo skupno dolžino in, za zaprte oblike, skupno površino, v enotah risbe.
- **Opombe**: označite stolpec Opombe, nato vnesite opombo za katero koli vrstico v tabeli v spodnjem delu pogovornega okna.

Vsaka tabela ohrani svoje izbire.

## Številke elementov

Vrstica obdrži svojo številko elementa, dokler je v tabeli. Nova vrstica dobi naslednjo prosto številko, številka, ki je bila že dodeljena, pa se ne uporabi znova, zato oznake in opombe, ki navajajo številko, ostanejo pravilne. {{ui:Renumber items}} jih oštevilči od 1 po vrstnem redu, kot so prikazani.

Vrstica je določena s tem, kako je združena: spremenite način združevanja vrstic ali spremenite vrednost atributa, ki ga združevanje uporablja, in vrstica šteje kot nova.

## Izvoz in drugi programi

{{cmd:BOMEXPORT}} ali {{ui:Export CSV}} v pogovornem oknu shrani tabelo kot datoteko .csv za preglednico.

V datoteki DWG ali DXF je tabela navaden blok črt in besedila, zato jo drugi programi prikažejo in izrišejo, kot je narisana. Tam ni tabelarni predmet in se v drugih programih ne posodablja. Povezava na njeno območje je shranjena v datoteki kot razširjeni podatek, ki ga CadCraft prebere nazaj, zato je tabela znova živa, ko ponovno odprete risbo v CadCraftu. R12 DXF risbe brez lista ne ohrani nastavitve „ne izriše se“ za sloj območja.

Razstavljanje tabele jo spremeni v posamezne črte in besedilo ter konča povezavo.
