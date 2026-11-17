---
title: Postavite list s naslovnim blokom i prozorima pregleda
summary: Napravite list (raspored) s okvirom i naslovnim blokom, postavite razmjeru prozora pregleda, dodajte drugi prozor za detalj i popunite naslovni blok.
keywords: raspored, list, prostor papira, prozor pregleda, mview, vpview, naslovni blok, razmjera, veličina papira, okvir, vports, razmjera štampanja, mspace, pspace, prostor modela, uđi u prozor pregleda, dvostruki klik na prozor pregleda
from: 45a45de8
---

## Šta ćete napraviti

List A3 s naslovnim blokom, cijeli plan u jednom prozoru pregleda na 1:100, i drugi prozor pregleda koji prikazuje jedan ugao na 1:20.

## Model i listovi

Zgradu crtate na kartici {{ui:Model}}, u punoj veličini: zid od 6 m je 6000 jedinica dug u milimetrima. **List** (raspored) je komad papira, mjeren u milimetrima ili inčima. **Prozor pregleda** je otvor izrezan u listu koji prikazuje model u nekoj razmjeri.

## Prije nego počnete

1. Otvorite ili nacrtajte plan na kartici {{ui:Model}}.
2. Pritisnite {{key:Esc}} da ništa ne bude označeno.
3. U {{ui:Trenutne postavke}} postavite {{ui:Jedinice}} na jedinicu kojom ste crtali, na primjer {{ui:Milimetri}}.

Jedinice su važne: razmjera prozora pregleda kao 1:100 znači da jedan milimetar na papiru predstavlja 100 stvarnih milimetara, pa CadCraft mora znati šta je jedna jedinica crteža. Crtež ostavljen kao {{ui:Bez jedinica}} uzima se kao jedinica papira (milimetri na ISO papiru, inči na US papiru).

## Napravite list

1. Kliknite dugme {{ui:+}} desno od jezičaka ispod crteža, ili upišite `LAYOUT` i pritisnite {{key:Enter}}, ili kliknite {{ui:Novi list}}.

Otvara se novi jezičak `Layout1`. Trebalo bi da vidite list na tamnijoj podlozi: okvir, naslovni blok u donjem desnom uglu i jedan prozor pregleda iznad njega koji prikazuje cijeli model u najvećoj standardnoj razmjeri koja stane. Historija navodi papir: ISO A3 za metričke crteže i crteže bez jedinica, Tabloid (ANSI B) za crteže u inčima ili stopama.

2. Kliknite {{ui:Granice}} da list stane na ekran.

## Izaberite papir

1. Pritisnite {{key:Esc}} da ništa ne bude označeno. Naslov desnog panela glasi "List: Layout1".
2. U {{ui:Naziv}} upišite `A-101 Plan` i pritisnite {{key:Enter}}. Jezičak je preimenovan.
3. U {{ui:Papir}} izaberite veličinu.
4. U {{ui:Orijentacija}} izaberite {{ui:Vodoravno}} ili {{ui:Uspravno}}.

:::warning
Promjena papira ne pomjera niti mijenja veličinu onoga što je već na listu. Nakon promjene provjerite da okvir, naslovni blok i prozor pregleda još stanu, pa ih pomjerite ili promijenite veličinu hvataljkama. Prebacivanje između milimetarskog i inčnog papira čuva brojeve, pa se sve mijenja u veličini: traka statusa vas upozorava.
:::

## Postavite razmjeru prozora pregleda

1. Kliknite okvir prozora pregleda (njegovu ivicu). Naslov panela glasi "Prozor pregleda".
2. U {{ui:Razmjera}} izaberite `1:100`.

Model unutar prozora pregleda ponovo se crta na 1:100, centriran tamo gdje je bio. Lista nudi metričke razmjere od 10:1 do 1:10000; crteži u inčima ili stopama dobijaju i arhitektonske razmjere (1/4" = 1'-0" i slično) i inženjerske razmjere (1" = 20' i slično). {{ui:Prilagodi cijeli model}} postavlja tačnu, nestandardnu razmjeru koja sve stane.

3. Ako plan više nije centriran, promijenite {{ui:X}} i {{ui:Y}} pod {{ui:Centar pogleda (model)}} u desnom panelu: to je tačka modela prikazana u sredini prozora pregleda.

## Prikažite dio modela u prozoru pregleda

1. S izabranim prozorom pregleda kliknite {{ui:Odaberi prozor na modelu…}} u desnom panelu (ili upišite `VPVIEW` i pritisnite {{key:Enter}}).
2. CadCraft prelazi na karticu {{ui:Model}}. Kliknite jedan ugao područja koje želite prikazati.
3. Kliknite suprotni ugao.

Vraćeni ste na list, a prozor pregleda prikazuje to područje u najvećoj standardnoj razmjeri koja stane; historija kaže koja. {{ui:Prikaži cijeli model}} vraća cijeli plan u standardnoj razmjeri.

## Dodajte drugi prozor pregleda za detalj

1. Napravite prostor na listu: izaberite prvi prozor pregleda i prevucite hvataljku ugla da ga smanjite.
2. Upiši `MV` i pritisni {{key:Enter}}, ili kliknite {{ui:Prozor pregleda}} u grupi Listovi.
3. Kliknite jedan ugao novog prozora pregleda na listu.
4. Kliknite suprotni ugao.

Novi prozor pregleda prikazuje cijeli model. Historija kaže njegovu razmjeru.

5. Kliknite okvir novog prozora pregleda.
6. Kliknite {{ui:Odaberi prozor na modelu…}} i izaberite mali dio oko jednog ugla plana.
7. U {{ui:Razmjera}} izaberite `1:20`.

Okviri prozora pregleda su na sloju `Viewports`, koji je postavljen da se ne štampa, pa se okviri vide na ekranu, ali ne u PDF-u.

## Popunite naslovni blok

Naslovni blok je napravljen od običnih linija i teksta na sloju `Title block`. Počinje s imenom crteža, razmjerom prvog prozora pregleda, današnjim datumom i brojem lista.

1. Dvaput kliknite veliki naslovni tekst. Otvara se polje za uređivanje preko njega.
2. Upišite naslov lista.
3. Kliknite {{ui:U redu}}, ili pritisnite {{key:Mod+Enter}}.

Uradite isto za ostala polja. Upotrijebite {{cmd:TEXT}} da upišete u prazno polje "DRAWN BY". Tekst SCALE se sam ne ažurira kad promijenite razmjeru prozora pregleda: uredite ga ručno.

## Crtajte na listu

Sve što nacrtate na kartici lista je na papiru, u jedinicama papira: tekst visine 3.5 je visok 3.5 mm na ISO listu. Napomene, strelice sjevera i okviri lista pripadaju ovdje.

Da promijenite sam plan, idite na karticu {{ui:Model}} ili radite kroz prozor pregleda (sljedeći odjeljak); svaki prozor pregleda prikazuje promjenu.

## Radite na modelu kroz prozor pregleda

1. Dvaput kliknite unutar prozora pregleda, van njegovog okvira. Ili upišite `MS` i pritisnite {{key:Enter}}: s jednim prozorom na listu ide ravno unutra; s nekoliko, kliknite unutar onog koji želite.

Okvir se crta jače, historija kaže da ste unutra, a jezičak lista ostaje izabran. Sve što sada nacrtate ili promijenite je na modelu, u jedinicama modela, kao na kartici {{ui:Model}}: linija nacrtana unutar prozora pregleda na 1:100 je u stvarnim milimetrima. Slojevi zamrznuti u ovom prozoru pregleda ne mogu se birati ovdje.

2. Okrećite točkić ili prevlačite srednjim tasterom da zumirate i pomjerate ono što prozor pregleda prikazuje. List ostaje gdje je.
3. Dvaput kliknite bilo gdje van okvira, ili upišite `PS` i pritisnite {{key:Enter}}.

Vraćeni ste na list. Prozor pregleda zadržava pogled s kojim ste ga ostavili; {{key:Mod+Z}} vraća stari pogled u jednom koraku. Klik na bilo koji jezičak ispod crteža također vas izvodi iz prozora pregleda.

:::note
Prozor pregleda čiji je prikaz zaključan ({{ui:Prikaz zaključan}} u Svojstvima) zadržava svoj pogled: unutar njega, pomjeranje i zumiranje pomjera cijeli list. Prozor pregleda koji je isključen ne može se otvoriti.
:::

## Označite pogled imenom

Naslov pogleda ispod prozora pregleda može prikazati ime pogleda prozora i pratiti ga:

1. Dajte pogledu ime: označite okvir prozora pregleda i popunite {{ui:Naziv prikaza}} u Svojstvima; ili sačuvajte pogled na kartici {{ui:Model}} s {{cmd:NAMEDVIEW}} i, s izabranim prozorom pregleda, upišite `VPVIEW`, `V` i ime pogleda: prozor pregleda prikazuje taj pogled i preuzima ime.
2. Upišite `VIEWLABEL` (`VL`) i pritisnite {{key:Enter}}, zatim kliknite gdje ide oznaka ({{key:Enter}} je stavlja ispod donjeg lijevog ugla prozora pregleda).

Kad se ime pogleda promijeni, oznaka se mijenja s njim, u istom koraku poništavanja.

## Zamrznite sloj u jednom prozoru pregleda

Da sakrijete sloj u jednom prozoru pregleda, ali ne u drugima (namještaj u detalju, recimo):

1. Označite okvir prozora pregleda, ili radite unutra (dvostruki klik).

Panel {{ui:Slojevi}} dobija još jedno dugme u svakom redu, a red iznad liste to kaže.

2. Kliknite to dugme u redu sloja.

Sloj nestaje samo iz tog prozora pregleda. Kliknite opet da ga odmrznete; {{key:Mod+Z}} poništava bilo koje. Za više slojeva ili prozora odjednom upišite `VPLAYER`: `F` (Freeze) ili `T` (Thaw), imena slojeva (`A-*` uzima svaki sloj koji počinje s A-), zatim `C` (Current), `A` (All) ili `S` (Select). `VPLAYER` `V` (Vpvisdflt) bira slojeve koje novi prozori pregleda počinju zamrznuti.

## Još listova

Svaki {{ui:+}} dodaje još jedan list (`Layout2`, `Layout3` …) sa sljedećim brojem lista. Da obrišete otvoreni list, pritisnite {{key:Esc}} i kliknite {{ui:Obriši ovaj list}} u desnom panelu. Briše se bez pitanja; {{key:Mod+Z}} ga vraća.

Ispišite list s {{ui:Ispiši ovaj list}} ili {{key:Mod+P}}; pogledajte [Štampaj u PDF](topic:plot-pdf).

## Česte greške

- **Prozor pregleda ne prikazuje ništa.** Model je prazan, ili je pogled usmjeren drugdje. Izaberite okvir i kliknite {{ui:Prikaži cijeli model}}.
- **Lista razmjera pokazuje samo odnose, bez razmjera u stopama i inčima.** Postavite {{ui:Jedinice}} na {{ui:Inči}} ili {{ui:Stope}} na kartici {{ui:Model}}.
- **1:100 izgleda deset puta preveliko ili premalo.** Jedinice crteža su pogrešne. Postavite {{ui:Jedinice}} na ono što jedna jedinica zaista jeste.
- **Klik na plan unutar prozora pregleda ništa ne označava.** Na listu označavate objekte lista. Dvaput kliknite unutar prozora pregleda prvo da radite na planu kroz njega.
- **Klikovi van prozora pregleda ne rade ništa.** Vi ste unutar prozora pregleda: dvaput kliknite van njega, ili upišite `PS`, da ponovo radite na listu.
- **"Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first."** Prozori pregleda idu na raspored. Prvo otvorite jezičak rasporeda (ili napravite jedan s LAYOUT). {{cmd:MVIEW}} radi samo na jezičku lista.
