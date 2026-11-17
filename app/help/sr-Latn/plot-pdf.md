---
title: Štampanje u PDF
summary: Napravi PDF lista u punoj veličini, ili modela u razmeri ili uklopljenog u papir, i štampaj ga iz pregledača ili iz Studija, ili ga sačuvaj kao PNG ili SVG.
keywords: štampanje, štampa, kopije, png, svg, slika, pdf, objavi, exportpdf, papir, razmera, jednobojno, sivi tonovi, crno-belo, debljina linije, pero, podešavanje strane, prozor štampanja, stil štampanja, tabela stilova štampanja, ctb, zavisno od boje, rasterisanje, plotstyles, stylesmanager
from: a4752f83
---

## Šta ćeš napraviti

PDF lista u punoj veličini, zatim brz PDF modela u 1:100, i štampani primerak.

PDF se pravi unutar tvog pregledača; ništa se ne šalje. To je vektorski PDF: linije ostaju oštre na svakom zumu, a tekst se može pretraživati.

## Štampaj list

1. Klikni karticu lista ispod crteža.
2. Pritisni {{key:Mod+P}}, klikni {{ui:Štampaj}}, ili ukucaj `PLOT` i pritisni {{key:Enter}}.

Otvara se dijalog {{ui:Štampaj u PDF}}. Kaže koji list štampa i na kom papiru, „u punoj veličini … kako vidiš“. Pregled desno prikazuje list.

3. U {{ui:Stil štampanja}} izaberi {{ui:Monohromatski (crna)}} za crne linije, {{ui:Boja (kako je nacrtano)}} da zadržiš boje, {{ui:Sivi tonovi}}, ili sopstvenu tabelu (vidi [Tabele stilova štampanja](topic:plot-pdf#plot-style-tables)). List zadržava ovaj izbor: čuva se sa crtežom.
4. U {{ui:Debljina linije}} izaberi širinu pera od 0.13 mm do 0.70 mm. Linije sa podrazumevanom debljinom štampaju se u ovoj širini; linije sa sopstvenom debljinom (sloja ili objekta, ili pero njihove boje u tabeli) štampaju se u toj.
5. Klikni {{ui:Preuzmi PDF}}.

Pregledač preuzima PDF nazvan po crtežu i listu, na primer `Drawing1-A-101 Plan.pdf`. Istorija prijavljuje njegovu veličinu u bajtovima i veličinu papira u milimetrima.

List se uvek štampa u 1:1 na svom papiru. Da promeniš papir, promeni ga na samom listu (vidi [Podešavanje lista](topic:sheets-and-viewports)). Slojevi postavljeni da se ne štampaju su izostavljeni, kao i okviri prozora pogleda.

## Svi listovi u jednom PDF-u

Sa dva ili više listova, dijalog {{ui:Štampaj u PDF}} ima {{ui:Svi listovi u jednom PDF-u}}; ili ukucaj {{cmd:PUBLISH}}. {{key:Enter}} uzima svaki list; `Neke (S)` traži njihove nazive, odvojene zarezima. Jedan PDF se preuzima sa stranicom po listu, po redosledu kartica, svaka u svojoj veličini papira, i sa obeleživačem za svaki list, sa njegovim nazivom. Svaki list se štampa sa sopstvenom tabelom stilova štampanja; list bez izabrane koristi onu koju si poslednju izabrao u dijalogu, i debljinu pera koju si poslednju izabrao.

## Štampaj model

1. Klikni karticu {{ui:Model}}.
2. Pritisni {{key:Mod+P}}.

Dijalog kaže da štampa model na list papira i prikazuje više podešavanja:

3. U {{ui:Površina}} izaberi šta se štampa:
   - {{ui:Sve (obuhvat)}}: ceo crtež.
   - {{ui:Šta je na ekranu}}: područje koje sada vidiš u crtežu.
   - {{ui:Prozor…}}: zatim klikni {{ui:Izbor}}, klikni dva ugla na crtežu, i dijalog se vraća.
4. U {{ui:Papir}} izaberi veličinu: ISO A4 do A0, Letter, Legal, Tabloid i ANSI C i D, ili ARCH C, D i E.
5. U {{ui:Orijentacija}} izaberi {{ui:Pejzaž}} ili {{ui:Portret}}.
6. U {{ui:Razmera}} izaberi {{ui:Uklopi u papir}} ili razmeru kao `1:100`.

Ispod podešavanja, red navodi razmeru i koliko područje ispada na papiru. Ako je veće od papira, to se kaže: ivice se seku. Izaberi manju razmeru, veći papir, ili {{ui:Uklopi u papir}}.

7. Klikni {{ui:Preuzmi PDF}}.

Štampa modela ostavlja marginu od 5 mm oko ivice, jer većina štampača ne može da štampa do ivice. {{ui:Uklopi u papir}} daje neparnu razmeru (istorija i informativni red kažu „(uklopljeno)“); izaberi standardnu razmeru kad crtež mora da se meri tačno.

:::note
Razmere se čitaju u stvarnim jedinicama. Da bi 1:100 bilo tačno, postavi {{ui:Jedinice}} u {{ui:Trenutna podešavanja}} na to šta je jedna jedinica crteža. Crtež bez jedinica uzima se kao da je u milimetrima.
:::

## Tabele stilova štampanja

Tabela stilova štampanja kaže kako se svaka od 255 standardnih boja crteža štampa, kao što to radi tabela stilova štampanja zavisna od boje (CTB) u drugim CAD programima. Tri su ugrađene:

| Tabela | Štampa |
|---|---|
| {{ui:Boja (kako je nacrtano)}} | Svaki objekat u svojoj boji. |
| {{ui:Monohromatski (crna)}} | Svaka boja crna: uobičajen izbor za crteže. |
| {{ui:Sivi tonovi}} | Svaka boja kao njena siva, pa boje ostaju odvojene na crno-belom štampaču. |

Da napraviš sopstvenu, na primer crvene linije debele, a sve ostalo tanko:

1. U dijalogu {{ui:Štampaj u PDF}} klikni {{ui:Uredi tabele…}} (ili ukucaj {{cmd:PLOTSTYLES}}).
2. Klikni {{ui:Novo}} i ukucaj naziv, na primer `office`, u {{ui:Naziv}}. Da počneš od ugrađene tabele, izaberi je u {{ui:Tabela}} i klikni {{ui:Kopiraj}}.
3. Klikni boju u mreži. {{key:Shift}}+klik izabere opseg boja, {{key:Mod}}+klik dodaje još jednu, a {{ui:Izaberi sve boje}} uzima sve.
4. Podesi kako se izabrane boje štampaju:
   - {{ui:Štampa kao}}: {{ui:Sopstvena boja}}, {{ui:Crna}} ili {{ui:Druga boja…}}.
   - {{ui:Kao siva}}: boja kao njena siva.
   - {{ui:Intenzitet (%)}}: 100 je puni intenzitet, 50 je na pola puta do belog (rasterisanje), za pozadinske linije.
   - {{ui:Debljina linije}}: {{ui:Sopstvena debljina linije}} zadržava debljinu objekta ili sloja; vrednost štampa svaku liniju te boje u toj širini.
   - {{ui:Tip linije}}: štampa svaku liniju te boje drugim tipom linije (na primer sve crveno isprekidano); {{ui:Koristi tip linije objekta}} ih ostavlja.
   - {{ui:Kraj linije}} i {{ui:Spoj linija}}: ravni, kvadratni ili zaobljeni krajevi, i zašiljeni, kosi ili zaobljeni uglovi (zaobljeni, kao ranije, kad ništa ne podesiš).
   - {{ui:Stil ispune}}: puna ispuna te boje štampa se kao linije šrafure (vodoravne ili uspravne trake, kose, ukrštene, romboidi, kvadratne tačke) umesto mastila, za štampače i planove gde je ravno mastilo pretežko.

   Sama tabela ima još dva podešavanja: {{ui:Debljine linija}}, širine koje poznaje (odštampana linija ide na najbližu od njih), i {{ui:Razmera tipa linije}}, faktor za crtice svakog tipa linije koji nije ISO.
5. Klikni {{ui:Gotovo}}. Tabela se čuva u crtežu, i list (ili model) se sada štampa sa njom. {{ui:Otkaži}} odbacuje promene.

Boja sa sopstvenim perom pokazuje tačku u svom uglu, a tačku dole kad podešava debljinu linije. Objekat sa pravom bojom (ne jednom od 255) koristi pero najbliže standardne boje.

Crtež zadržava svoje tabele i izbor svakog lista kad čuvaš kao DWG (2000 do 2018) ili DXF (R12 ili 2000), i ponovo se otvara s njima. Drugi programi vide naziv u podešavanju strane svakog lista (`office.ctb`), a ne samu tabelu. Crtež iz drugog programa čije podešavanje strane navodi tabelu kao `monochrome.ctb` štampa se ugrađenom tabelom tog naziva; za bilo koji drugi naziv dijalog kaže da crtež nema tu tabelu i štampa boje crteža dok ne izabereš tabelu ili napraviš onu s tim nazivom.

Da koristiš tabelu u drugom crtežu, klikni {{ui:Izvezi}} u {{ui:Tabele stilova štampanja}} (čuva `office.plotstyle.json`), zatim {{ui:Uvezi…}} u drugom crtežu. {{ui:Uvezi…}} takođe prihvata `.ctb` fajl iz drugog programa: čita se iz objavljenog opisa formata i **još nije proveren na pravom fajlu**. Čitaju se boja, rasterisanje i debljina linije svake boje; sivi tonovi, brojevi pera, tipovi linija, krajevi i spojevi linija i stilovi ispune se ne čitaju, a imenovana tabela (`.stb`) se odbija. Uporedi prvo štampanje sa onim što očekuješ, i pošalji nam fajl ako je pogrešno.

## Štampanje

**U pregledaču** klikni {{ui:Štampaj…}}. CadCraft pravi PDF i otvara sopstveni dijalog pregledača za štampu. Tu izaberi „Actual size“ ili 100 % (ne „Fit“) da zadržiš razmeru. Ako pregledač ne može da štampa sa stranice, PDF se umesto toga otvara u novoj kartici: odatle ga štampaj sa {{key:Mod+P}}.

Možeš i da klikneš {{ui:Otvori za štampanje}}: PDF se otvara u novoj kartici pregledača, a ti ga štampaš odatle.

:::safari
Safari može da prikaže PDF i čeka da koristiš **File**, zatim **Print**.
:::

Ako tvoj pregledač blokira novu karticu, CadCraft umesto toga preuzima PDF i to kaže u istoriji. Dozvoli iskačuće prozore za sajt da se sledeći put otvori u kartici.

**U CadCraft Studiu** dijalog {{ui:Štampaj u PDF}} navodi štampače računara. Izaberi {{ui:Štampač}}, {{ui:Papir u štampaču}} i broj {{ui:Kopije}}, zatim klikni {{ui:Štampaj…}}. {{ui:Isto kao štampanje}} bira papir štampača koji je veličine lista (A3 za A3 list); kad štampač nema takav, koristi svoj papir i uklapa list u njega. Na Windowsu se list šalje kao slika od 300 dpi, jer Windows ne može da štampa PDF bez PDF programa; na Linuxu i macOS-u sam PDF ide u sistemsku uslugu štampe. Ništa ne napušta računar.

## Fajlovi slika i SVG

{{ui:Preuzmi PNG}} čuva štampani list kao sliku od 300 dpi (smanjuje se samo kad bi veoma veliki list bio veći nego što pregledač može da napravi; istorija to kaže). {{ui:Preuzmi SVG}} čuva ga kao skalabilan crtež u milimetrima, sa linijama i tekstom štampe. Oba dolaze iz iste štampe kao PDF, sa istim stilom štampanja, debljinom linije i područjem. Slike postavljene u crtežu su samo u PDF-u; istorija kaže koliko ih je izostavljeno.

## Slike

Slike se štampaju u sopstvenoj rezoluciji, ispod linija. {{ui:Slike}} u dijalogu ih ograničavaju na 600, 300 ili 150 dpi za manji fajl. Linije, tekst i šrafure uvek ostaju oštri (vektorski), a providnost ostaje providnost. Vidi [Slike u crtežu](topic:pictures).

## Podešavanja koja se pamte

Dijalog pamti tvoj poslednji papir, orijentaciju, razmeru i debljinu linije u ovom pregledaču. Tabela stilova štampanja čuva se uz svaki list u crtežu; list bez izabrane počinje sa onom koju si poslednju izabrao. Izabrani prozor se čuva dok ne ponovo učitaš stranicu; posle toga dijalog počinje na {{ui:Sve (obuhvat)}}.

## Česte greške

- **PDF je prazan ili su dugmad siva.** Nema šta da se štampa (prazan model), ili je izabrano {{ui:Prozor…}} a prozor još nije izabran („Pick the window to plot.“).
- **U PDF-u tekst pokazuje „?“.** Tekst na poljskom, češkom, ćirilici, grčkom i drugim pismima Evrope štampa se kao sam sebe: PDF tada nosi slova koja su mu potrebna (iz fonta Liberation Sans, koji ima Helveticine širine), a tekst se i dalje može označiti i pretražiti. Kineski, japanski i korejski tekst se takođe štampa kao sam sebe: kad crtež to ima, štampa preuzima veći font (oko 10 MB, jednom), a PDF nosi samo korišćene znakove, pa mu je potrebna veza prvi put (ne u offline kopiji sačuvanoj ranije). Hebrejski se štampa iz istog ugrađenog fonta kao latinični tekst, a arapski, persijski i urdu tekst pokreće preuzimanje još jednog fonta (ispod 1 MB, jednom); redovi zdesna nalevo se poređaju i slova se spajaju (vidi [Tekst](topic:text)). Retki ideogrami van tih fontova i pisma koja traže složeno oblikovanje, kao hindi, štampaju se kao „?“, a istorija ih broji.
- **Sve linije su iste debljine.** Njihova debljina je podrazumevana: daj slojevima ili objektima {{ui:Debljina linije}} u desnom panelu (vidi [Debljine linija i tipovi linija](topic:units-papers-scales#line-weights-and-linetypes)), ili postavi debljine po boji u [tabeli stilova štampanja](topic:plot-pdf#plot-style-tables).
- **„(nije u ovom crtežu)“ pored stila štampanja.** Crtež je došao iz drugog programa i navodi tabelu koju ne sadrži. Izaberi jednu od tabela ili napravi onu s tim nazivom.
- **Štampane su konstrukcione linije.** Postavi im sloj da se ne štampa: klikni njegovo dugme štampača u panelu {{ui:Slojevi}}.
- **Odštampani primerak je pogrešne veličine.** Štampač ga je razmerio. Štampaj u stvarnoj veličini.
- **{{key:Mod+P}} je otvorio dijalog štampe pregledača.** Kursor je bio u polju u desnom panelu, ili je bio otvoren drugi dijalog. Pritisni {{key:Enter}} ili {{key:Esc}} da izađeš iz polja, pa pokušaj ponovo, ili klikni {{ui:Štampaj}}.
- **{{key:Mod+P}} ništa ne radi.** Komanda se izvršava. Prvo pritisni {{key:Esc}}.
