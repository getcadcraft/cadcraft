---
title: Štampaj u PDF
summary: Napravi PDF lista u punoj veličini, ili modela u razmjeri ili uklopljenog u papir, štampaj iz preglednika ili iz CadCraft Studio aplikacije, ili sačuvaj kao PNG ili SVG.
keywords: ispis, štampa, štampač, kopije, png, svg, slika, pdf, objavi, exportpdf, papir, razmjera, monohromatski, sivi tonovi, crno-bijelo, debljina linije, olovka, postavke stranice, prozor ispisa, stil štampe, tabela stilova štampe, ctb, zavisno od boje, rasterizacija, plotstyles, stylesmanager
from: a4752f83
---

## Šta ćete napraviti

PDF lista u punoj veličini, zatim brzi PDF modela u razmjeri 1:100, i jedan odštampani primjerak.

PDF se pravi unutar vašeg preglednika; ništa se ne otprema. To je vektorski PDF: linije ostaju oštre pri bilo kojem zumu, a tekst se može pretraživati.

## Ispis lista

1. Kliknite karticu lista ispod crteža.
2. Pritisnite {{key:Mod+P}}, kliknite {{ui:Ispiši}}, ili upišite `PLOT` i pritisnite {{key:Enter}}.

Otvara se dijalog {{ui:Štampaj u PDF}}. Navodi koji list ispisuje i na kojem papiru, "u punoj veličini … kako ga vidite". Pregled desno prikazuje list.

3. U {{ui:Stil štampe}} izaberite {{ui:Monohromatski (crna)}} za crne linije, {{ui:Boja (kako je nacrtano)}} da zadržite boje, {{ui:Sivi tonovi}}, ili vlastitu tabelu (vidi [Tabele stilova štampe](topic:plot-pdf#plot-style-tables)). List čuva ovaj izbor: sačuvan je uz crtež.
4. U {{ui:Debljina linije}} izaberite širinu olovke od 0,13 mm do 0,70 mm. Linije s podrazumijevanom debljinom štampaju se ovom širinom; linije s vlastitom debljinom (sloj ili objekat, ili olovka njihove boje u tabeli) štampaju se tom debljinom.
5. Kliknite {{ui:Preuzmi PDF}}.

Preglednik preuzima PDF nazvan prema crtežu i listu, na primjer `Drawing1-A-101 Plan.pdf`. Historija prijavljuje njegovu veličinu u bajtovima i veličinu papira u milimetrima.

List se uvijek ispisuje u razmjeri 1:1 na svom papiru. Da promijenite papir, promijenite ga na samom listu (vidi [Podešavanje lista](topic:sheets-and-viewports)). Slojevi postavljeni da se ne ispisuju izostavljaju se, kao i okviri okvira prikaza.

## Svi listovi u jednom PDF-u

Uz dva ili više listova, dijalog {{ui:Štampaj u PDF}} ima {{ui:Svi listovi u jednom PDF-u}}; ili upišite {{cmd:PUBLISH}}. {{key:Enter}} uzima sve listove; `[Neki (S)]` traži njihove nazive, odvojene zarezima. Preuzima se jedan PDF sa stranicom po listu, redoslijedom kartica, svaka u svojoj veličini papira, i oznakom za svaki list s njegovim nazivom. Svaki list se ispisuje sa svojom tabelom stilova štampe; list kojem nijedna nije izabrana koristi onu koju ste zadnju izabrali u dijalogu, i širinu olovke koju ste zadnju izabrali.

## Ispis modela

1. Kliknite karticu {{ui:Model}}.
2. Pritisnite {{key:Mod+P}}.

Dijalog kaže da ispisuje model na list papira, i prikazuje više postavki:

3. U {{ui:Površina}} izaberite šta se ispisuje:
   - {{ui:Sve (granice)}}: cijeli crtež.
   - {{ui:Što je na ekranu}}: područje koje sada vidite u crtežu.
   - {{ui:Prozor…}}: zatim kliknite {{ui:Odaberi}}, kliknite dva ugla na crtežu, i dijalog se vraća.
4. U {{ui:Papir}} izaberite veličinu: ISO A4 do A0, Letter, Legal, Tabloid i ANSI C i D, ili ARCH C, D i E.
5. U {{ui:Orijentacija}} izaberite {{ui:Vodoravno}} ili {{ui:Uspravno}}.
6. U {{ui:Razmjera}} izaberite {{ui:Uklopi u papir}} ili razmjeru kao `1:100`.

Ispod postavki, jedan red prijavljuje razmjeru i koliko područje ispada veliko na papiru. Ako je veće od papira, to kaže: ivice su odsječene. Izaberite manju razmjeru, veći papir, ili {{ui:Uklopi u papir}}.

7. Kliknite {{ui:Preuzmi PDF}}.

Ispis modela ostavlja marginu od 5 mm oko ivice, jer većina štampača ne može štampati do ivice. {{ui:Uklopi u papir}} daje neparnu razmjeru (historija i informativni red kažu "(prilagođeno)"); izaberite standardnu razmjeru kada crtež mora imati tačne mjere.

:::note
Razmjere se čitaju u stvarnim jedinicama. Da bi 1:100 bilo tačno, postavite {{ui:Jedinice}} u {{ui:Trenutne postavke}} na ono što jedna jedinica crteža predstavlja. Crtež bez jedinica uzima se kao da je u milimetrima.
:::

## Tabele stilova štampe

Tabela stilova štampe kaže kako se svaka od 255 standardnih boja crteža ispisuje, kao što to radi tabela stilova štampe zavisna od boje (CTB) u drugim CAD programima. Tri su ugrađene:

| Tabela | Ispisuje |
|---|---|
| {{ui:Boja (kako je nacrtano)}} | Svaki objekat u vlastitoj boji. |
| {{ui:Monohromatski (crna)}} | Svaka boja kao crna: uobičajen izbor za crteže. |
| {{ui:Sivi tonovi}} | Svaka boja kao njena siva, pa boje ostaju razdvojene na crno-bijelom štampaču. |

Da napravite vlastitu, na primjer da crvene linije budu debele i crne, a sve ostalo tanko:

1. U dijalogu {{ui:Štampaj u PDF}} kliknite {{ui:Uredi tabele…}} (ili upišite {{cmd:PLOTSTYLES}}).
2. Kliknite {{ui:Nova}}, i upišite naziv, na primjer `office`, u {{ui:Naziv}}. Da počnete od ugrađene tabele, izaberite je u {{ui:Tabela}} i kliknite {{ui:Kopiraj}}.
3. Kliknite boju u mreži. {{key:Shift}}+klik bira raspon boja, {{key:Mod}}+klik dodaje još jednu, a {{ui:Odaberi sve boje}} ih uzima sve.
4. Postavite kako se izabrane boje ispisuju:
   - {{ui:Štampa se u}}: {{ui:Vlastitoj boji}}, {{ui:Crnoj}} ili {{ui:Drugoj boji…}}.
   - {{ui:Kao siva}}: boja kao njena siva.
   - {{ui:Tinta (%)}}: 100 je puna tinta, 50 je pola puta ka bijelom (rasterizacija), za pozadinske linije.
   - {{ui:Debljina linije}}: {{ui:Vlastita debljina linije}} zadržava debljinu objekta ili sloja; vrijednost ispisuje svaku liniju te boje tom širinom.
   - {{ui:Vrsta linije}}: ispisuje svaku liniju te boje drugom vrstom linije (na primjer sve crveno isprekidano); {{ui:Koristi tip linije objekta}} ih ostavlja.
   - {{ui:Kraj linije}} i {{ui:Spoj linija}}: ravni, kvadratni ili zaobljeni krajevi, i šiljasti, kosi ili zaobljeni uglovi (zaobljeni, kao ranije, kada ništa ne postavite).
   - {{ui:Stil ispune}}: puna ispuna te boje ispisuje se kao linije šrafure (vodoravne ili uspravne trake, kose, ukrštene, romboidi, kvadratne tačkice) umjesto tinte, za štampače i planove gdje je ravna tinta pretežka.

   Sama tabela ima još dvije postavke: {{ui:Debljine linija}}, širine koje poznaje (ispisana linija ide na najbližu od njih), i {{ui:Razmjera vrste linije}}, faktor za crtice svake vrste linije koja nije ISO.
5. Kliknite {{ui:Gotovo}}. Tabela se čuva u crtežu, a list (ili model) se sada ispisuje s njom. {{ui:Otkaži}} odbacuje promjene.

Boja s vlastitom olovkom prikazuje tačku u svom uglu, a tačku na dnu kada postavlja debljinu linije. Objekat sa stvarnom bojom (ne jednom od 255) koristi olovku najbliže standardne boje.

Crtež čuva svoje tabele i izbor svakog lista kada sačuvate kao DWG (2000 do 2018) ili DXF (R12 ili 2000), i ponovo ih otvara. Drugi programi vide naziv u postavkama stranice svakog lista (`office.ctb`), a ne samu tabelu. Crtež iz drugog programa čija postavka stranice imenuje tabelu kao `monochrome.ctb` ispisuje se ugrađenom tabelom tog naziva; za bilo koji drugi naziv dijalog kaže da crtež to nema, i ispisuje boje crteža dok ne izaberete tabelu ili ne napravite jednu tog naziva.

Da koristite tabelu u drugom crtežu, kliknite {{ui:Izvezi}} u {{ui:Tabele stilova štampe}} (sačuva `office.plotstyle.json`), zatim {{ui:Uvezi…}} u drugom crtežu. {{ui:Uvezi…}} takođe prihvata `.ctb` datoteku iz drugog programa: čita se iz objavljenog opisa formata i **još nije provjerena na stvarnoj datoteci**. Čitaju se boja, rasterizacija i debljina linije svake boje; sivi tonovi, brojevi olovki, vrste linija, krajevi i spojevi linija i stilovi ispune se ne čitaju, a imenovana tabela (`.stb`) se odbija. Uporedite prvi ispis s onim što očekujete, i pošaljite nam datoteku ako je pogrešna.

## Štampanje

**U pregledniku** kliknite {{ui:Štampaj…}}. CadCraft pravi PDF i otvara vlastiti dijalog štampe preglednika za njega. Tamo izaberite "Stvarna veličina" ili 100% (ne "Uklopi") da zadržite razmjeru. Ako preglednik ne može štampati sa stranice, PDF se umjesto toga otvara u novoj kartici: štampajte ga odatle pritiskom na {{key:Mod+P}}.

Možete i kliknuti {{ui:Otvori za štampu}}: PDF se otvara u novoj kartici preglednika, a vi ga štampate odatle.

:::safari
Safari može prikazati PDF i čekati da koristite **Datoteka**, zatim **Ispis**.
:::

Ako preglednik blokira novu karticu, CadCraft umjesto toga preuzima PDF i to kaže u historiji. Dozvolite iskočne prozore za sajt da ga sljedeći put otvori u kartici.

**U CadCraft Studio aplikaciji**, dijalog {{ui:Štampaj u PDF}} navodi štampače računara. Izaberite {{ui:Štampač}}, {{ui:Papir u štampaču}} i broj {{ui:Kopije}}, zatim kliknite {{ui:Štampaj…}}. "Isto kao ispis" bira papir štampača koji je veličine lista (A3 za A3 list); kada štampač nema takav, koristi svoj papir i uklapa list u njega. Na Windowsu se list šalje kao slika od 300 dpi, jer Windows ne može štampati PDF bez PDF programa; na Linuxu i macOS-u sam PDF ide u sistemski servis štampanja. Ništa ne napušta računar.

## Datoteke PNG i SVG

{{ui:Preuzmi PNG}} čuva ispisani list kao sliku od 300 dpi (smanjuje se samo kada bi vrlo velik list bio veći nego što preglednik može napraviti; historija to kaže). {{ui:Preuzmi SVG}} ga čuva kao skalabilan crtež u milimetrima, s linijama i tekstom ispisa. Oba dolaze iz istog ispisa kao PDF, sa istom tabelom stilova, debljinom linije i područjem. Slike postavljene u crtežu su samo u PDF-u; historija kaže koliko ih je izostavljeno.

## Slike

Slike se ispisuju u svojoj rezoluciji, ispod linija. {{ui:Slike}} u dijalogu ih ograničava na 600, 300 ili 150 dpi za manju datoteku. Linije, tekst i šrafure uvijek ostaju oštri (vektorski), a prozirnost ostaje prozirnost. Vidi [Slike u crtežu](topic:pictures).

## Postavke koje se pamte

Dijalog u ovom pregledniku pamti vaš zadnji papir, orijentaciju, razmjeru i debljinu linije. Tabela stilova štampe čuva se uz svaki list u crtežu; list kojem nijedna nije izabrana počinje s onom koju ste zadnju izabrali. Izabrani prozor čuva se dok ne osvježite stranicu; poslije toga dijalog počinje s {{ui:Sve (granice)}}.

## Česte greške

- **PDF je prazan ili su dugmad siva.** Nema šta ispisati (prazan model), ili je izabrano {{ui:Prozor…}} a prozor još nije odabran ("Odaberite prozor za ispis.").
- **Tekst pokazuje "?" u PDF-u.** Tekst na poljskom, češkom, ćirilici, grčkom i ostalim pismima Evrope ispisuje se kao sam. PDF tada nosi slova koja su mu potrebna (iz fonta Liberation Sans, koji ima Helvetica širine), a tekst se i dalje može označiti i pretraživati. Kineski, japanski i korejski tekst se također ispisuje kao sam: kada crtež ima takav tekst, ispis preuzima veći font (oko 10 MB, jednom), i PDF nosi samo korištene znakove, pa mu treba veza prvi put (ne u offline kopiji sačuvanoj ranije). Hebrejski se ispisuje istim ugrađenim fontom kao latinični tekst, a arapski, perzijski i urdu tekst natjera ispis da preuzme još jedan font (manje od 1 MB, jednom); linije zdesna nalijevo se poređaju i slova spoje (vidi [Tekst](topic:text)). Rijetki ideogrami van tih fontova i pisma koja traže složeno oblikovanje, poput hindskog, ispisuju se kao "?", a historija ih broji.
- **Sve linije su iste debljine.** Njihova debljina je podrazumijevana: dajte slojevima ili objektima {{ui:Debljina linije}} u desnom panelu (vidi [Debljine linija i vrste linija](topic:units-papers-scales#line-weights-and-linetypes)), ili postavite debljine po boji u [tabeli stilova štampe](topic:plot-pdf#plot-style-tables).
- **"(not in this drawing)" pored stila štampe.** Crtež je iz drugog programa i imenuje tabelu koju ne sadrži. Izaberite jednu od tabela, ili napravite tabelu tog naziva.
- **Konstrukcione linije su ispisane.** Postavite im sloj da se ne ispisuje: kliknite njegovo dugme štampača u panelu {{ui:Slojevi}}.
- **Ispis je pogrešne veličine.** Štampač ga je skalirao. Štampajte u stvarnoj veličini.
- **{{key:Mod+P}} je otvorio dijalog štampe preglednika.** Kursor je bio u polju u desnom panelu, ili je bio otvoren drugi dijalog. Pritisnite {{key:Enter}} ili {{key:Esc}} da izađete iz polja, pa pokušajte ponovo, ili kliknite {{ui:Ispiši}}.
- **{{key:Mod+P}} ne radi ništa.** Komanda se izvršava. Prvo pritisnite {{key:Esc}}.
