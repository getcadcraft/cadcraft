---
title: Postavite list s zaglavljem crteža i viewportima
summary: Izradite list (layout) s okvirom i zaglavljem crteža, postavite mjerilo viewporta, dodajte drugi viewport za detalj i ispunite zaglavlje crteža.
keywords: layout, list, papirni prostor, viewport, mview, vpview, zaglavlje crteža, mjerilo, veličina papira, okvir, vports, mjerilo ispisa, mspace, pspace, prostor modela, uđi u viewport, dvostruki klik na viewport
from: 45a45de8
---

## Što ćete izraditi

List A3 sa zaglavljem crteža, cijeli tlocrt u jednom viewportu u mjerilu 1:100, i drugi viewport koji prikazuje jedan kut u mjerilu 1:20.

## Model i listovi

Zgradu crtate na kartici {{ui:Model}}, u punoj veličini: zid od 6 m je 6000 jedinica dug u milimetrima. **List** (layout) je komad papira, izmjeren u milimetrima ili inčima. **Viewport** je prozor izrezan u listu koji prikazuje model u nekom mjerilu.

## Prije početka

1. Otvorite ili nacrtajte tlocrt na kartici {{ui:Model}}.
2. Pritisnite {{key:Esc}} da ništa nije odabrano.
3. U {{ui:Trenutne postavke}} postavite {{ui:Jedinice}} na jedinicu u kojoj ste crtali, na primjer {{ui:Milimetri}}.

Jedinice su važne: mjerilo viewporta poput 1:100 znači da jedan milimetar na papiru prikazuje 100 stvarnih milimetara, pa CadCraft mora znati što je jedna jedinica crteža. Crtež ostavljen kao {{ui:Bez jedinica}} uzima se kao jedinica papira (milimetri na ISO papiru, inči na US papiru).

## Napravite list

1. Kliknite gumb {{ui:+}} desno od kartica ispod crteža, ili upišite `LAYOUT` i pritisnite {{key:Enter}}, ili kliknite {{ui:Novi list}}.

Otvara se nova kartica `Layout1`. Trebali biste vidjeti list na tamnijoj podlozi: okvir, zaglavlje crteža u donjem desnom kutu i jedan viewport iznad njega koji prikazuje cijeli model u najvećem standardnom mjerilu koje stane. Povijest navodi papir: ISO A3 za metričke crteže i crteže bez jedinica, Tabloid (ANSI B) za crteže u inčima ili stopama.

2. Kliknite {{ui:Opseg}} da list stane na zaslon.

## Odaberite papir

1. Pritisnite {{key:Esc}} da ništa nije odabrano. Naslov desne ploče glasi "List: Layout1".
2. U {{ui:Naziv}} upišite `A-101 Plan` i pritisnite {{key:Enter}}. Kartica se preimenuje.
3. U {{ui:Papir}} odaberite veličinu.
4. U {{ui:Orijentacija}} odaberite {{ui:Položeno}} ili {{ui:Uspravno}}.

:::warning
Promjena papira ne pomiče niti mijenja veličinu onoga što je već na listu. Nakon promjene provjerite stane li još okvir, zaglavlje crteža i viewport, pa ih pomaknite ili promijenite veličinu hvatalima. Prebacivanje između papira u milimetrima i inčima čuva brojeve, pa se sve mijenja u veličini: statusna traka vas upozorava.
:::

## Postavite mjerilo viewporta

1. Kliknite okvir viewporta (njegov rub). Naslov ploče glasi "Viewport".
2. U {{ui:Skaliraj}} odaberite `1:100`.

Model unutar viewporta se ponovno crta u 1:100, centriran tamo gdje je bio. Popis nudi metrička mjerila od 10:1 do 1:10000; crteži u inčima ili stopama dobivaju i arhitektonska mjerila (1/4" = 1'-0" i slična) i inženjerska mjerila (1" = 20' i slična). {{ui:Prilagodi cijeli model}} postavlja točno, nestandardno mjerilo koje sve uklapa.

3. Ako tlocrt više nije centriran, promijenite {{ui:X}} i {{ui:Y}} pod {{ui:Središte pogleda (model)}} u desnoj ploči: to je točka modela prikazana u sredini viewporta.

## Prikažite dio modela u viewportu

1. S odabranim viewportom kliknite {{ui:Odaberite prozor na modelu…}} u desnoj ploči (ili upišite `VPVIEW` i pritisnite {{key:Enter}}).
2. CadCraft prelazi na karticu {{ui:Model}}. Kliknite jedan kut područja koje želite prikazati.
3. Kliknite suprotni kut.

Vraćeni ste na list, a viewport prikazuje to područje u najvećem standardnom mjerilu koje stane; povijest kaže koje. {{ui:Prikaži cijeli model}} vraća cijeli tlocrt u standardnom mjerilu.

## Dodajte drugi viewport za detalj

1. Napravite mjesta na listu: odaberite prvi viewport i povucite hvatalo kuta da ga smanjite.
2. Upišite `MV` i pritisnite {{key:Enter}}, ili kliknite {{ui:Viewport}} u grupi Listovi.
3. Kliknite jedan kut novog viewporta na listu.
4. Kliknite suprotni kut.

Novi viewport prikazuje cijeli model. Povijest kaže njegovo mjerilo.

5. Kliknite okvir novog viewporta.
6. Kliknite {{ui:Odaberite prozor na modelu…}} i odaberite malo područje oko jednog kuta tlocrta.
7. U {{ui:Skaliraj}} odaberite `1:20`.

Okviri viewporta su na sloju `Viewports`, koji je postavljen da se ne ispisuje, pa se okviri vide na zaslonu, ali ne u PDF-u.

## Ispunite zaglavlje crteža

Zaglavlje crteža sastoji se od običnih linija i teksta na sloju `Title block`. Počinje s nazivom crteža, mjerilom prvog viewporta, današnjim datumom i brojem lista.

1. Dvaput kliknite veliki naslovni tekst. Otvara se okvir za uređivanje preko njega.
2. Upišite naslov lista.
3. Kliknite {{ui:U redu}}, ili pritisnite {{key:Mod+Enter}}.

Isto učinite i za ostala polja. Upotrijebite {{cmd:TEXT}} da upišete u prazno polje "DRAWN BY". Tekst SCALE se ne ažurira sam kad promijenite mjerilo viewporta: uredite ga ručno.

## Crtajte na listu

Sve što nacrtate na kartici lista je na papiru, u jedinicama papira: tekst visok 3.5 je 3.5 mm visok na ISO listu. Bilješke, strelice sjevera i okviri listova pripadaju ovdje.

Za promjenu samog tlocrta idite na karticu {{ui:Model}}, ili radite kroz viewport (sljedeći odjeljak); svaki viewport prikazuje promjenu.

## Radite na modelu kroz viewport

1. Dvaput kliknite unutar viewporta, izvan njegovog okvira. Ili upišite `MS` i pritisnite {{key:Enter}}: s jednim viewportom na listu odmah ulazite; s više kliknite onaj koji želite.

Okvir je nacrtan deblje, povijest kaže da ste unutra, a kartica lista ostaje odabrana. Sve što sada nacrtate ili promijenite je na modelu, u jedinicama modela, kao na kartici {{ui:Model}}: linija nacrtana unutar viewporta u 1:100 je u stvarnim milimetrima. Slojevi zamrznuti u ovom viewportu ovdje se ne mogu odabrati.

2. Okrenite kotačić ili povucite srednjom tipkom za zumiranje i pomicanje prikaza viewporta. List ostaje na mjestu.
3. Dvaput kliknite bilo gdje izvan okvira ili upišite `PS` i pritisnite {{key:Enter}}.

Vraćeni ste na list. Viewport zadržava pogled s kojim ste ga ostavili; {{key:Mod+Z}} vraća stari pogled u jednom koraku. Klik na bilo koju karticu ispod crteža također vas izvodi iz viewporta.

:::note
Viewport čiji je prikaz zaključan ({{ui:Prikaz zaključan}} u {{ui:Svojstva}}) zadržava svoj pogled: unutar njega pomicanje i zumiranje pomiču cijeli list. Viewport koji je isključen ne može se ući.
:::

## Označite pogled imenom

Naslov pogleda ispod viewporta može prikazati naziv pogleda viewporta i pratiti ga:

1. Dajte pogledu ime: odaberite okvir viewporta i ispunite {{ui:Naziv pogleda}} u {{ui:Svojstva}}, ili spremite pogled na kartici {{ui:Model}} s {{cmd:NAMEDVIEW}} i, s odabranim viewportom, upišite `VPVIEW`, `V` i naziv pogleda: viewport prikazuje taj pogled i preuzima njegov naziv.
2. Upišite `VIEWLABEL` (`VL`) i pritisnite {{key:Enter}}, zatim kliknite gdje ide oznaka ({{key:Enter}} je stavlja ispod donjeg lijevog kuta viewporta).

Kad se naziv pogleda promijeni, oznaka se mijenja s njim, u istom koraku poništavanja.

## Zamrznite sloj u jednom viewportu

Da sakrijete sloj u jednom viewportu, a ne u ostalima (namještaj u detalju, na primjer):

1. Odaberite okvir viewporta, ili radite unutar njega (dvostrukim klikom).

Panel {{ui:Slojevi}} dobiva još jedan gumb u svakom retku, a redak iznad popisa to kaže.

2. Kliknite taj gumb u retku sloja.

Sloj nestaje samo iz tog viewporta. Kliknite ponovno da ga odmrznete; {{key:Mod+Z}} poništava bilo koje. Za više slojeva ili viewporta odjednom upišite `VPLAYER`: `F` (zamrzni) ili `T` (odmrzni), nazive slojeva (`A-*` uzima svaki sloj koji počinje s A-), zatim `C` (trenutni), `A` (svi) ili `S` (odabir). `VPLAYER` `V` (Vpvisdflt) bira slojeve koje novi viewporti počinju zamrznuti.

## Još listova

Svaki {{ui:+}} dodaje još jedan list (`Layout2`, `Layout3` …) sa sljedećim brojem lista. Za brisanje otvorenog lista pritisnite {{key:Esc}} i kliknite {{ui:Izbriši ovaj list}} u desnoj ploči. Briše se bez pitanja; {{key:Mod+Z}} ga vraća.

Ispišite list pomoću {{ui:Ispiši ovaj list}} ili {{key:Mod+P}}; pogledajte [Ispis u PDF](topic:plot-pdf).

## Česte pogreške

- **Viewport ne prikazuje ništa.** Model je prazan ili je pogled usmjeren drugdje. Odaberite okvir i kliknite {{ui:Prikaži cijeli model}}.
- **Popis mjerila prikazuje samo omjere, bez mjerila u stopama i inčima.** Postavite {{ui:Jedinice}} na {{ui:Inči}} ili {{ui:Stope}} na kartici {{ui:Model}}.
- **1:100 izgleda deset puta preveliko ili premalo.** Jedinice crteža su krive. Postavite {{ui:Jedinice}} na ono što jedna jedinica zaista jest.
- **Klik na tlocrt unutar viewporta ne odabire ništa.** Na listu odabirete objekte lista. Prvo dvaput kliknite unutar viewporta da radite na tlocrtu kroz njega.
- **Klikovi izvan viewporta ne rade ništa.** Nalazite se unutar viewporta: dvaput kliknite izvan njega ili upišite `PS` da ponovno radite na listu.
- **"Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first."** {{cmd:MVIEW}} radi samo na kartici lista. Najprije otvorite karticu lista (ili je izradite naredbom LAYOUT).
