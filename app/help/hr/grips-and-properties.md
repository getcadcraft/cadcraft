---
title: Uređivanje pomoću ručki i Svojstava
summary: Razvucite, pomaknite i promijenite veličinu objekata pomoću njihovih ručki te upišite točne duljine, polumjere, kutove i koordinate na ploči Svojstva.
keywords: ručke, grips, svojstva, rastezanje, duljina, polumjer, koordinate, uređivanje, brza svojstva, paleta svojstava, promjena, sloj, boja, color
from: f22541ba
---

## Što ćete naučiti

Dva brza načina promjene objekta bez naredbe: povucite njegove **ručke** ili upišite nove vrijednosti na ploči **Svojstva** s desne strane.

## Ručke

Kad odaberete objekte (do 200 odjednom) bez pokrenute naredbe, na njima se pojave mali kvadratići. To su ručke:

| Objekt | Ručke |
|---|---|
| Linija | Oba kraja i sredina (pomiče cijelu liniju) |
| Kružnica | Središte (pomiče je) i četiri točke na kružnici (mijenjaju polumjer) |
| Luk | Središte i oba kraja (mijenjaju mjesto početka i kraja) |
| Polilinija | Svaki vrh |
| Tekst, točka, referenca bloka | Točka umetanja |
| Elipsa | Središte |
| Kota | Njezine definirajuće točke i položaj mjerne crte |
| Viewport | Središte (pomiče ga) i četiri kuta (mijenjaju mu veličinu) |

### Pomicanje ručke

1. Nacrtajte liniju i kliknite je. Pojavit će se tri ručke.
2. Kliknite ručku na jednom kraju. Statusna traka kaže "Kliknite gdje ova ručka ide (Esc za odustajanje). Hvatanje i Orto vrijede."
3. Pomaknite križić. Prikaz slijedi.
4. Kliknite novi položaj ili se hvatanjem za točku na drugom objektu kliknite na nju.

Kraj se pomakne, a ostatak linije ostaje na mjestu. Možete i pritisnuti ručku i povući je, pa otpustiti tamo gdje treba.

:::note
Ne možete upisati koordinatu za ručku. Za točan položaj uhvatite točku ili upišite vrijednost u polje na ploči Svojstva.
:::

Pritisnite {{key:Esc}} ili kliknite desnom tipkom miša za odustajanje od pomicanja ručke.

## Svojstva

Desna ploča prikazuje svojstva odabranog.

1. Kliknite liniju. Naslov ploče glasi "Linija".
2. Kliknite u {{ui:Duljina}}, upišite `2500` i pritisnite {{key:Enter}}.

Linija je sada točno 2500 duga i zadržava početnu točku i kut. {{key:Enter}} ili klik izvan polja primjenjuje vrijednost; {{key:Esc}} vraća staru vrijednost. Svaka promjena je jedan korak poništavanja, i kad se mijenja više objekata odjednom.

Polja primaju izraze (`=2*45`) i duljine s jedinicama (`3'6"`, `900mm`), svaka točka ima X, Y i Z, a više objekata može se mijenjati zajedno. Sve je opisano u [Ploči Svojstva](topic:properties-panel).

## Česte pogreške

- **Ručke se ne pojavljuju.** Naredba je pokrenuta (pritisnite {{key:Esc}}), ili je odabrano više od 200 objekata, ili je objekt na zaključanom sloju.
- **Ručka je otišla na krivo mjesto.** Hvatanje ju je uhvatilo. Držite {{key:Shift}} dok kliknete da zanemarite hvatanje.
- **Upisivanje na ploči Svojstva ne radi.** Pritisnite {{key:Enter}} ili kliknite izvan polja da primijenite vrijednost. Neispravan unos (nulta ili negativna duljina i polumjer, tekst koji nije vrijednost) boji polje crveno i kaže zašto.
- **Upisana slova su završila u polju Svojstva.** Dok polje ima kursor, tipke upisuju u njega. Pritisnite {{key:Enter}} ili {{key:Esc}}, pa upišite naredbu.
