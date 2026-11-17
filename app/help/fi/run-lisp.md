---
title: Aja LISP-rutiineja
summary: Mitä CadCraftin LISP ajaa (funktiot, kehotteet, komennot, kohteet, valintaikkunat, vla-kohteet), miten LISP kirjoitetaan komentoriville ja mitä siltä vielä puuttuu.
keywords: lisp, rutiini, lsp, dcl, valintaikkuna, komento, defun, entget, ssget, vla, vlax, vl, getpoint, virhe, yhteensopivuus, mitä toimii
from: 571bc077
---

## Mitä opit

Mitä odottaa, kun lataat toiselle CAD-ohjelmalle kirjoitetun LISP-rutiinin: mitkä osat ajetaan CadCraftissa ja mitä siltä ei vielä ole.

CadCraftilla on oma LISP. Se on kirjoitettu julkisen AutoLISP-viitteen pohjalta, ei kenenkään muun ohjelman pohjalta, joten useimmat AutoCADille kirjoitetut rutiinit toimivat muuttumattomina. Kun jotain puuttuu, komentorivi nimeää funktion, jotta voit erottaa CadCraftin puutteen rutiinin virheestä.

## Kirjoita LISP komentoriville

Kirjoita lauseke, joka alkaa merkillä `(`, ja paina {{key:Enter}}: `(+ 1 2)` tulostaa `3`. `!nimi` tulostaa muuttujan arvon. Lauseke, jota ei ole vielä suljettu, odottaa seuraavaa riviä.

Kehotteessa lauseke vastaa siihen: kohdassa `Anna säde` kirjoita `(* 2 12.5)`, saat 25.

## Mitä ajetaan

- **Kieli:** `defun` (paikalliset muuttujat `/`-merkin jälkeen), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` ja `*error*` (paikallinen `*error*` toimii). Nimet eivät ole kirjainkokoherkkiä; kokonaisluvut ja reaaliluvut eroavat toisistaan, kuten odotat (`(/ 7 2)` on 3).
- **Sisäänrakennetut funktiot:** matematiikka, listat (`car`, `cdr` ja niiden sukulaiset, `assoc`, `nth`, `member`, `subst`, `append`…), merkkijonot (`strcat`, `substr`, `strcase`, `wcmatch`…), muunnokset (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometria (`polar`, `distance`, `angle`, `inters`) ja tiedostot (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Komennot:** `(defun c:NIMI …)` luo komennon. `(command …)` ja `(command-s …)` ohjaavat CadCraftin omia komentoja, ja `pause` odottaa vastaustasi.
- **Kehotteet:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` `initget`-avainsanoineen, `entsel`, `nentsel` ja `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, suodatinlistoilla ja `-4`-testeillä).
- **Kohteet listoina:** `entget`, `entmod`, `entmake` (myös lohkot), `entdel`, `entlast`, `entnext` (lohkoviittauksen attribuutit tulevat sen jälkeen ATTRIB-kohteina ja sitten SEQEND, joten attribuuttirutiinit toimivat), `handent`, valintajoukot, `tblsearch` ja `tblnext`, `layoutlist`, `regapp`, `getvar` ja `setvar` CadCraftin asetuksille.
- **Valintaikkunat:** `.dcl`-tiedostot `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog` ja `done_dialog` -funktioilla. Painikkeet, muokkauskentät, luettelot, pudotusvalikot, kytkimet, valintapainikkeet, rivit, sarakkeet ja ruudut näkyvät kaikki. Rutiini, joka kirjoittaa valintaikkunansa väliaikaistiedostoon, toimii myös.
- **Kohteet:** `vl-load-com` (se ei tee mitään; mitään ei tarvitse ladata), `vl-`-listafunktiot ja merkkijonofunktiot, `vl-catch-all-apply` sekä `vla-get-…`- ja `vla-put-…`-ominaisuudet, `vla-…`-metodit ja `vlax-for` kokoelmille Blocks, Layers ja Layouts, mallitila ja lohkomääritykset muunnelmineen ja turvallisine taulukkoineen.

## Testatut rutiinit

CadCraftin testit ajavat joukon rutiineja, jotka on kirjoitettu näitä tarkistuksia varten (valintasuodattimet, kehotteet, komennot, kohteet, virhekäsittelijät), ja yhden suositun rutiinin, jota ihmiset pyysivät nimeltä: Lee Macin DelBlocksin, nimellä sen valintaikkunan kautta ja valitsemalla lohkon. CadCraftissa on myös oma {{cmd:DELBLOCKS}}, joten sitä varten ei tarvita rutiinia.

## Ei vielä toteutettu

- `grread` (hiiren seuraaminen itse), reaktorit (`vlr-…`), käyräfunktiot (`vlax-curve-…`), sanakirjat ja laajennettu data (`dictsearch`, xdata `entget`- ja `entmake`-funktioissa) sekä Express Tools -työkalujen `acet-…`-funktiot.
- Valintaikkunoiden kuvat ja diat näkyvät tyhjinä kehyksinä.
- Toisen ohjelman ajaminen, Windowsin rekisteri ja tiedostot, joita et ole ladannut: rutiini voi kirjoittaa ja lukea omia väliaikaistiedostojaan, jotka säilyvät, kunnes suljet sivun.

Kun rutiini osuu johonkin näistä, komentorivi näyttää viestin, jossa on funktion nimi, ja kertoo, ettei CadCraftilla ole sitä vielä.

## Virheitä, joita vältä

- **Komento samalla nimellä kuin CadCraftin komennolla.** CadCraftin oma komento säilyy. Aja rutiinin komento muodossa `(c:NIMI)` komentorivillä.
- **LISP, johon et luota.** Rutiini voi muuttaa mitä tahansa piirustuksessa, mutta ei mitään sen ulkopuolella: se ei pääse tiedostoihisi, muille sivustoille tai muihin sovelluksiin.
