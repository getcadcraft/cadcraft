---
title: Ispis u PDF
summary: Napravite PDF lista u punoj veličini ili modela u mjerilu ili prilagođenog papiru, ispišite ga iz preglednika ili iz programa CadCraft Studio, ili ga spremite kao PNG ili SVG.
keywords: ispis, pisač, kopije, png, svg, slika, pdf, objavi, exportpdf, papir, mjerilo, jednobojno, nijanse sive, crno-bijelo, debljina linije, pero, postavke stranice, prozor ispisa, stil ispisa, tablica stilova ispisa, ctb, ovisno o boji, rasterizacija, plotstyles, stylesmanager
from: a4752f83
---

## Što ćete napraviti

PDF lista u punoj veličini, zatim brzi PDF modela u mjerilu 1:100 i ispis.

PDF se izrađuje unutar vašeg preglednika; ništa se ne učitava. To je vektorski PDF: linije ostaju oštre pri svakom zumiranju, a tekst se može pretraživati.

## Ispis lista

1. Kliknite karticu lista ispod crteža.
2. Pritisnite {{key:Mod+P}}, kliknite {{ui:Ispis}}, ili upišite `PLOT` i pritisnite {{key:Enter}}.

Otvara se dijaloški okvir {{ui:Ispis u PDF}}. Navodi koji list ispisuje i na kojem papiru, „u punoj veličini … kako ga vidite“. Pregled s desne strane prikazuje list.

3. U {{ui:Stil ispisa}} odaberite {{ui:Jednobojno (crno)}} za crne linije, {{ui:Boja (kako je nacrtano)}} za zadržavanje boja, {{ui:Nijanse sive}}, ili vlastitu tablicu (vidi [Tablice stilova ispisa](topic:plot-pdf#plot-style-tables)). List pamti ovaj izbor: sprema se zajedno s crtežom.
4. U {{ui:Debljina linije}} odaberite širinu pera od 0.13 mm do 0.70 mm. Linije sa zadanom debljinom ispisuju se ovom širinom; linije s vlastitom debljinom (sloja ili objekta, ili pero njihove boje u tablici) ispisuju se njome.
5. Kliknite {{ui:Preuzmi PDF}}.

Preglednik preuzima PDF nazvan prema crtežu i listu, na primjer `Drawing1-A-101 Plan.pdf`. Povijest prikazuje njegovu veličinu u bajtovima i veličinu papira u milimetrima.

List se uvijek ispisuje u mjerilu 1:1 na vlastitom papiru. Za promjenu papira promijenite ga na samom listu (vidi [Postavljanje lista](topic:sheets-and-viewports)). Slojevi postavljeni da se ne ispisuju izostavljaju se, kao i okviri viewporta.

## Svi listovi u jednom PDF-u

Ako ima dva ili više listova, dijaloški okvir {{ui:Ispis u PDF}} ima {{ui:Svi listovi u jednom PDF-u}}; ili upišite {{cmd:PUBLISH}}. {{key:Enter}} uzima sve listove; opcija Neke (S) traži njihove nazive, odvojene zarezima. Preuzima se jedan PDF sa stranicom za svaki list, redom kartica, svaka u vlastitoj veličini papira, i zabilješka za svaki list s njegovim nazivom. Svaki list ispisuje se sa svojom tablicom stilova ispisa; list bez odabrane tablice koristi onu koju ste zadnji put odabrali u dijaloškom okviru, i debljinu pera koju ste zadnji put odabrali.

## Ispis modela

1. Kliknite karticu {{ui:Model}}.
2. Pritisnite {{key:Mod+P}}.

Dijaloški okvir navodi da ispisuje model na list papira i prikazuje više postavki:

3. U {{ui:Površina}} odaberite što ispisati:
   - {{ui:Sve (opseg)}}: cijeli crtež.
   - {{ui:Što je na zaslonu}}: područje koje sada vidite u crtežu.
   - {{ui:Prozor…}}: zatim kliknite {{ui:Odaberi}}, kliknite dva kuta na crtežu, i dijaloški okvir se vraća.
4. U {{ui:Papir}} odaberite veličinu: ISO A4 do A0, Letter, Legal, Tabloid i ANSI C i D, ili ARCH C, D i E.
5. U {{ui:Orijentacija}} odaberite {{ui:Položeno}} ili {{ui:Uspravno}}.
6. U {{ui:Skaliraj}} odaberite {{ui:Prilagodi papiru}} ili mjerilo, na primjer `1:100`.

Ispod postavki redak prikazuje mjerilo i koliko područje ispada na papiru. Ako je veće od papira, to se navodi: rubovi će biti odrezani. Odaberite manje mjerilo, veći papir ili {{ui:Prilagodi papiru}}.

7. Kliknite {{ui:Preuzmi PDF}}.

Ispis modela ostavlja rub od 5 mm oko ruba, jer većina pisača ne može ispisati do ruba. {{ui:Prilagodi papiru}} daje neokruglo mjerilo (povijest i info redak navode „(prilagođeno)“); kada crtež mora imati točne mjere, odaberite standardno mjerilo.

:::note
Mjerila se čitaju u stvarnim jedinicama. Da bi 1:100 bio točan, postavite {{ui:Jedinice}} u {{ui:Trenutne postavke}} na ono što jedna jedinica crteža predstavlja. Crtež bez jedinica uzima se kao milimetri.
:::

## Tablice stilova ispisa

Tablica stilova ispisa određuje kako se svaka od 255 standardnih boja crteža ispisuje, kao što to radi tablica stilova ispisa ovisna o boji (CTB) u drugim CAD programima. Tri su ugrađene:

| Tablica | Ispisuje |
|---|---|
| {{ui:Boja (kako je nacrtano)}} | Svaki objekt u svojoj boji. |
| {{ui:Jednobojno (crno)}} | Svaka boja crna: uobičajen izbor za crteže. |
| {{ui:Nijanse sive}} | Svaka boja kao njezina nijansa sive, pa boje ostaju razdvojene na crno-bijelom pisaču. |

Za izradu vlastite, na primjer crvenih debelih linija, a sve ostalo tanko:

1. U dijaloškom okviru {{ui:Ispis u PDF}} kliknite {{ui:Uredi tablice…}} (ili upišite {{cmd:PLOTSTYLES}}).
2. Kliknite {{ui:Nova}} i upišite naziv, na primjer `office`, u {{ui:Naziv}}. Za početak od ugrađene tablice, odaberite je u {{ui:Tablica}} i kliknite {{ui:Kopiraj}}.
3. Kliknite boju u mreži. {{key:Shift}}+klik odabire raspon boja, {{key:Mod}}+klik dodaje još jednu, a {{ui:Odaberi svaku boju}} ih odabire sve.
4. Postavite kako se odabrane boje ispisuju:
   - {{ui:Ispisuje se u}}: {{ui:Vlastita boja}}, {{ui:Crna}} ili {{ui:Druga boja…}}.
   - {{ui:Kao siva}}: boja kao njezina nijansa sive.
   - {{ui:Tinta (%)}}: 100 je puna tinta, 50 je pola puta prema bijeloj (rasterizacija), za pozadinske linije.
   - {{ui:Debljina linije}}: {{ui:Vlastita debljina linije}} zadržava debljinu linije objekta ili sloja; vrijednost ispisuje svaku liniju te boje tom širinom.
   - {{ui:Tip linije}}: ispisuje svaku liniju te boje drugim tipom linije (na primjer sve crveno isprekidano); {{ui:Koristi tip linije objekta}} ih ostavlja.
   - {{ui:Kraj linije}} i {{ui:Spoj linija}}: ravni, kvadratni ili zaobljeni krajevi, te oštri, skošeni ili zaobljeni kutovi (zaobljeni, kao prije, kada ništa ne postavite).
   - {{ui:Stil ispune}}: puna ispuna te boje ispisuje se kao linije šrafure (vodoravne ili okomite crte, kose, križne, rombovi, kvadratne točke) umjesto tinte, za pisače i nacrte gdje je jednolična tinta pretežka.

Sama tablica ima još dvije postavke: {{ui:Debljine linija}}, širine koje poznaje (ispisana linija ide na najbližu od njih), i {{ui:Mjerilo tipa linije}}, faktor za crtice svakog tipa linije koji nije ISO.

5. Kliknite {{ui:Gotovo}}. Tablica se čuva u crtežu, a list (ili model) sada se ispisuje s njom. {{ui:Odustani}} odbacuje promjene.

Boja s vlastitim perom pokazuje točku u kutu, a točka na dnu kada postavlja debljinu linije. Objekt s pravom bojom (ne jednom od 255) koristi pero najbliže standardne boje.

Crtež čuva svoje tablice i izbor svakog lista kada spremite kao DWG (2000 do 2018) ili DXF (R12 ili 2000), i otvara ih ponovno. Drugi programi vide naziv u postavkama stranice svakog lista (`office.ctb`), a ne samu tablicu. Crtež iz drugog programa čija postavka stranice navodi tablicu, na primjer `monochrome.ctb`, ispisuje se s ugrađenom tablicom tog naziva; za svaki drugi naziv dijaloški okvir navodi da crtež to nema i ispisuje boje crteža dok ne odaberete tablicu ili ne napravite onu s tim nazivom.

Za korištenje tablice u drugom crtežu kliknite {{ui:Izvezi}} u {{ui:Tablice stilova ispisa}} (sprema `office.plotstyle.json`), zatim {{ui:Uvezi…}} u drugom crtežu. {{ui:Uvezi…}} također prima datoteku `.ctb` iz drugog programa: čita se iz objavljenog opisa formata i **još nije provjerena na stvarnoj datoteci**. Čitaju se boja, rasterizacija i debljina linije svake boje; nijanse sive, brojevi pera, tipovi linija, krajevi i spojevi linija te stilovi ispune se ne čitaju, a imenovana tablica (`.stb`) se odbija. Usporedite prvi ispis s onim što očekujete i pošaljite nam datoteku ako nije točno.

## Ispis

**U pregledniku** kliknite {{ui:Ispis…}}. CadCraft izrađuje PDF i otvara vlastiti dijaloški okvir za ispis preglednika. Tamo odaberite „Stvarna veličina“ ili 100% (ne „Prilagodi“) kako bi mjerilo ostalo očuvano. Ako preglednik ne može ispisati sa stranice, PDF se umjesto toga otvara u novoj kartici: ispišite ga odatle pomoću {{key:Mod+P}}.

Također možete kliknuti {{ui:Otvori za ispis}}: PDF se otvara u novoj kartici preglednika, a ispisujete ga odatle.

:::safari
Safari može prikazati PDF i čekati da upotrijebite **Datoteka**, zatim **Ispis**.
:::

Ako vaš preglednik blokira novu karticu, CadCraft umjesto toga preuzima PDF i o tome obavještava u povijesti. Dopustite skočne prozore za ovo mjesto da se sljedeći put otvori u kartici.

**U programu CadCraft Studio** dijaloški okvir {{ui:Ispis u PDF}} navodi pisače računala. Odaberite {{ui:Pisač}}, {{ui:Papir u pisaču}} i broj {{ui:Kopija}}, zatim kliknite {{ui:Ispis…}}. {{ui:Isto kao ispis}} bira papir pisača koji je veličine lista (A3 za A3 list); kada pisač nema takav, koristi njegov papir i prilagođava list njemu. Na Windowsima se list šalje kao slika od 300 dpi, jer Windows ne može ispisati PDF bez PDF programa; na Linuxu i macOS-u sam PDF ide u sustavni servis ispisa. Ništa ne napušta računalo.

## Slike i datoteke SVG

{{ui:Preuzmi PNG}} sprema ispisani list kao sliku od 300 dpi (smanjuje se samo kada bi vrlo velik list bio veći nego što preglednik može izraditi; povijest to navodi). {{ui:Preuzmi SVG}} sprema ga kao skalabilni crtež u milimetrima, s linijama i tekstom ispisa. Oba dolaze iz istog ispisa kao PDF, s istim stilom ispisa, debljinom linije i područjem. Slike postavljene u crtežu su samo u PDF-u; povijest navodi koliko ih je izostavljeno.

## Slike

Slike se ispisuju u vlastitoj rezoluciji, ispod linija. {{ui:Slike}} u dijaloškom okviru ograničava ih na 600, 300 ili 150 dpi za manju datoteku. Linije, tekst i šrafure uvijek ostaju oštri (vektor), a prozirnost ostaje prozirnost. Vidi [Slike u crtežu](topic:pictures).

## Postavke koje se pamte

Dijaloški okvir pamti vaš zadnji papir, orijentaciju, mjerilo i debljinu linije u ovom pregledniku. Tablica stilova ispisa čuva se uz svaki list u crtežu; list bez odabrane tablice počinje s onom koju ste zadnje odabrali. Odabrani prozor pamti se dok ne ponovno učitate stranicu; nakon toga dijaloški okvir kreće s {{ui:Sve (opseg)}}.

## Česte pogreške

- **PDF je prazan ili su gumbi sivi.** Nema što ispisati (prazan model), ili je odabran {{ui:Prozor…}} a prozor još nije odabran („Odaberite prozor za ispis.“).
- **Tekst pokazuje „?“ u PDF-u.** Tekst na poljskom, češkom, ćirilici, grčkom i drugim pismima Europe ispisuje se kao sam. PDF tada sadrži slova koja su mu potrebna (iz fonta Liberation Sans, koji ima Helveticine širine), a tekst se još može odabrati i pretraživati. Kineski, japanski i korejski tekst također se ispisuju kao sami: kada crtež sadrži takav tekst, ispis preuzima veći font (oko 10 MB, jednom) i PDF nosi samo korištene znakove, pa prvi put treba vezu (ne u izvanmrežnoj kopiji spremljenoj prije). Hebrejski se ispisuje istim ugrađenim fontom kao latinični tekst, a arapski, perzijski i urdu tekst čini da ispis preuzme još jedan font (manji od 1 MB, jednom); redci zdesna nalijevo se slažu i slova se spajaju (vidi [Tekst](topic:text)). Rijetki ideogrami izvan tih fontova i pisma koja zahtijevaju složeno oblikovanje, poput hindskog, ispisuju se kao „?“, a povijest ih broji.
- **Sve linije su iste debljine.** Njihova debljina je zadana: dodijelite slojevima ili objektima {{ui:Debljina linije}} u desnom panelu (vidi [Debljine linija i tipovi linija](topic:units-papers-scales#line-weights-and-linetypes)), ili postavite debljine po boji u [tablici stilova ispisa](topic:plot-pdf#plot-style-tables).
- **„(nije u ovom crtežu)“ uz stil ispisa.** Crtež je iz drugog programa i navodi tablicu koju ne sadrži. Odaberite jednu od tablica ili napravite onu s tim nazivom.
- **Ispisane su konstrukcijske linije.** Postavite njihov sloj da se ne ispisuje: kliknite njegov gumb pisača na panelu {{ui:Slojevi}}.
- **Ispis je krive veličine.** Pisač ga je skalirao. Ispišite u stvarnoj veličini.
- **{{key:Mod+P}} otvorio je dijaloški okvir ispisa preglednika.** Kursor je bio u polju u desnom panelu, ili je bio otvoren drugi dijaloški okvir. Pritisnite {{key:Enter}} ili {{key:Esc}} da izađete iz polja, pa pokušajte ponovno, ili kliknite {{ui:Ispis}}.
- **{{key:Mod+P}} nije ništa učinio.** Naredba je u tijeku. Najprije pritisnite {{key:Esc}}.
