---
title: Postavljanje lista sa naslovnim blokom i prozorima pogleda
summary: Napravite list (raspored) sa okvirom i naslovnim blokom, podesite razmeru prozora pogleda, dodajte drugi prozor za detalj i popunite naslovni blok.
keywords: raspored, list, prostor papira, prozor pogleda, mview, vpview, naslovni blok, razmera, veličina papira, okvir, vports, razmera štampanja, mspace, pspace, prostor modela, uđi u prozor pogleda, dvostruki klik na prozor pogleda
from: 45a45de8
---

## Šta ćete napraviti

List A3 sa naslovnim blokom, cela osnova u jednom prozoru pogleda u razmeri 1:100, i drugi prozor pogleda koji prikazuje jedan ugao u razmeri 1:20.

## Model i listovi

Zgradu crtate na kartici {{ui:Model}}, u punoj veličini: zid od 6 m je dugačak 6000 jedinica u milimetrima. **List** (raspored) je komad papira, izmeren u milimetrima ili inčima. **Prozor pogleda** je prozor isečen u listu koji prikazuje model u nekoj razmeri.

## Pre početka

1. Otvorite ili nacrtajte osnovu na kartici {{ui:Model}}.
2. Pritisnite {{key:Esc}} da ništa ne bude izabrano.
3. U {{ui:Trenutna podešavanja}} postavite {{ui:Jedinice}} na jedinicu kojom ste crtali, na primer {{ui:Milimetri}}.

Jedinice su bitne: razmera prozora pogleda kao 1:100 znači da jedan milimetar na papiru prikazuje 100 stvarnih milimetara, pa CadCraft mora da zna šta je jedna jedinica crteža. Crtež ostavljen kao {{ui:Bez jedinica}} uzima se da je u jedinici papira (milimetri na ISO papiru, inči na američkom papiru).

## Napravite list

1. Kliknite dugme {{ui:+}} pored jezičaka ispod crteža, ili ukucajte `LAYOUT` i pritisnite {{key:Enter}}, ili kliknite {{ui:Novi list}}.

Otvara se novi jezičak, `Layout1`. Trebalo bi da vidite list na tamnijem stolu: okvir, naslovni blok u donjem desnom uglu i jedan prozor pogleda iznad njega koji prikazuje ceo model u najvećoj standardnoj razmeri koja staje. Istorija navodi papir: ISO A3 za metričke crteže i crteže bez jedinica, Tabloid (ANSI B) za crteže u inčima ili stopama.

2. Kliknite {{ui:Granice}} da uklopite list na ekran.

## Izaberite papir

1. Pritisnite {{key:Esc}} da ništa ne bude izabrano. Naslov desnog panela glasi „List: Layout1“.
2. U {{ui:Naziv}} ukucajte `A-101 Plan` i pritisnite {{key:Enter}}. Jezičak je preimenovan.
3. U {{ui:Papir}} izaberite veličinu.
4. U {{ui:Orijentacija}} izaberite {{ui:Pejzaž}} ili {{ui:Portret}}.

:::warning
Promena papira ne pomera i ne menja veličinu onoga što je već na listu. Posle promene proverite da li okvir, naslovni blok i prozor pogleda još staju, pa ih pomerite ili promenite veličinu uz pomoć hvataljki. Prelazak između papira u milimetrima i papira u inčima čuva brojeve, pa se sve menja u veličini: statusna traka vas upozorava.
:::

## Podesite razmeru prozora pogleda

1. Kliknite okvir prozora pogleda (njegovu ivicu). Naslov panela glasi „Prozor pogleda“.
2. U {{ui:Razmera}} izaberite `1:100`.

Model unutar prozora pogleda se ponovo crta u 1:100, centriran tamo gde je bio. Lista nudi metričke razmere od 10:1 do 1:10000; crteži u inčima ili stopama dobijaju i arhitektonske razmere (1/4" = 1'-0" i slično) i inženjerske razmere (1" = 20' i slično). {{ui:Uklopi ceo model}} postavlja tačnu, nestandardnu razmeru koja staje sve.

3. Ako osnova više nije centrirana, promenite {{ui:X}} i {{ui:Y}} pod {{ui:Centar pogleda (model)}} u desnom panelu: to je tačka modela prikazana u sredini prozora pogleda.

## Prikažite deo modela u prozoru pogleda

1. Sa izabranim prozorom pogleda kliknite {{ui:Izaberi prozor na modelu…}} u desnom panelu (ili ukucajte `VPVIEW` i pritisnite {{key:Enter}}).
2. CadCraft prelazi na karticu {{ui:Model}}. Kliknite jedan ugao područja koje treba prikazati.
3. Kliknite suprotni ugao.

Vraćate se na list, a prozor pogleda prikazuje to područje u najvećoj standardnoj razmeri koja staje; istorija kaže koja. {{ui:Prikaži ceo model}} vraća celu osnovu u standardnoj razmeri.

## Dodajte drugi prozor pogleda za detalj

1. Napravite mesta na listu: izaberite prvi prozor pogleda i prevucite hvataljku ugla da ga smanjite.
2. Ukucajte `MV` i pritisnite {{key:Enter}}, ili kliknite {{ui:Prozor pogleda}} u grupi Listovi.
3. Kliknite jedan ugao novog prozora pogleda na listu.
4. Kliknite suprotni ugao.

Novi prozor pogleda prikazuje ceo model. Istorija kaže njegovu razmeru.

5. Kliknite okvir novog prozora pogleda.
6. Kliknite {{ui:Izaberi prozor na modelu…}} i izaberite mali deo oko jednog ugla osnove.
7. U {{ui:Razmera}} izaberite `1:20`.

Okviri prozora pogleda su na sloju `Viewports`, koji je podešen da se ne štampa, pa se okviri vide na ekranu ali ne u PDF-u.

## Popunite naslovni blok

Naslovni blok je napravljen od običnih linija i teksta na sloju `Title block`. Počinje nazivom crteža, razmerom prvog prozora pogleda, današnjim datumom i brojem lista.

1. Dvaput kliknite veliki naslovni tekst. Otvara se polje za uređivanje preko njega.
2. Ukucajte naslov lista.
3. Kliknite {{ui:U redu}}, ili pritisnite {{key:Mod+Enter}}.

Uradite isto za ostala polja. Upotrebite {{cmd:TEXT}} da pišete u prazno polje „CRTAO“. Tekst RAZMERA se ne ažurira sam kada promenite razmeru prozora pogleda: izmenite ga ručno.

## Nacrtajte na listu

Sve što nacrtate na jezičku lista je na papiru, u jedinicama papira: tekst visine 3.5 je visok 3.5 mm na ISO listu. Napomene, strelice severa i okviri lista pripadaju ovde.

Da biste promenili samu osnovu, idite na karticu {{ui:Model}} ili radite kroz prozor pogleda (sledeći odeljak); svaki prozor pogleda prikazuje promenu.

## Radite na modelu kroz prozor pogleda

1. Dvaput kliknite unutar prozora pogleda, van njegovog okvira. Ili ukucajte `MS` i pritisnite {{key:Enter}}: sa jednim prozorom na listu ide direktno unutra; sa više, kliknite unutar onog koji želite.

Okvir je nacrtan deblje, istorija kaže da ste unutra, a jezičak lista ostaje izabran. Sve što nacrtate ili promenite sada je na modelu, u jedinicama modela, kao na kartici {{ui:Model}}: linija nacrtana unutar prozora pogleda u 1:100 je u stvarnim milimetrima. Slojevi zamrznuti u ovom prozoru pogleda ne mogu se ovde birati.

2. Okrenite točkić ili prevucite srednjim tasterom da zumirate i pomerate ono što prozor pogleda prikazuje. List ostaje na mestu.
3. Dvaput kliknite bilo gde van okvira, ili ukucajte `PS` i pritisnite {{key:Enter}}.

Vraćate se na list. Prozor pogleda zadržava prikaz kojim ste ga ostavili; {{key:Mod+Z}} vraća stari prikaz u jednom koraku. Klik na bilo koji jezičak ispod crteža takođe napušta prozor pogleda.

:::note
Prozor pogleda čiji je prikaz zaključan ({{ui:Zaključan prikaz}} u {{ui:Svojstva}}) zadržava svoj prikaz: unutra, pomeranje i zumiranje pomeraju ceo list. Prozor pogleda koji je isključen ne može se otvoriti.
:::

## Označite prikaz nazivom

Naslov prikaza ispod prozora pogleda može prikazivati naziv prikaza prozora pogleda i pratiti ga:

1. Dajte prikazu naziv: izaberite okvir prozora pogleda i popunite {{ui:Naziv pogleda}} u {{ui:Svojstva}}. Ili sačuvajte prikaz na kartici {{ui:Model}} pomoću {{cmd:NAMEDVIEW}} i, sa izabranim prozorom pogleda, ukucajte `VPVIEW`, `V` i naziv prikaza: prozor pogleda prikazuje taj prikaz i preuzima njegov naziv.
2. Ukucajte `VIEWLABEL` (`VL`) i pritisnite {{key:Enter}}, pa kliknite gde ide oznaka ({{key:Enter}} je stavlja ispod donjeg levog ugla prozora pogleda).

Kada se naziv prikaza promeni, oznaka se menja zajedno s njim, u istom koraku opozivanja.

## Zamrznite sloj u jednom prozoru pogleda

Da sakrijete sloj u jednom prozoru pogleda, ali ne i u drugima (nameštaj u detalju, na primer):

1. Izaberite okvir prozora pogleda, ili radite unutra (dvostruki klik).

Panel {{ui:Slojevi}} dobija još jedno dugme u svakom redu, a linija iznad liste to kaže.

2. Kliknite to dugme u redu sloja.

Sloj nestaje samo iz tog prozora pogleda. Kliknite ponovo da ga odmrznete; {{key:Mod+Z}} poništava bilo koju od ovih radnji. Za više slojeva ili prozora pogleda odjednom, ukucajte `VPLAYER`: `F` (zamrzni), `T` (odmrzni), zatim nazive slojeva (`A-*` uzima svaki sloj koji počinje sa A-), pa `C` (tekući), `A` (svi) ili `S` (izaberi). `VPLAYER` `V` (Vpvisdflt) bira slojeve koje novi prozori pogleda počinju zamrznuti.

## Više listova

Svako {{ui:+}} dodaje još jedan list (`Layout2`, `Layout3` …) sa sledećim brojem lista. Da obrišete otvoreni list, pritisnite {{key:Esc}} i kliknite {{ui:Izbriši ovaj list}} u desnom panelu. Bez pitanja se briše; {{key:Mod+Z}} ga vraća.

Odštampajte list pomoću {{ui:Odštampaj ovaj list}} ili {{key:Mod+P}}; vidi [Štampanje u PDF](topic:plot-pdf).

## Česte greške

- **Prozor pogleda ne prikazuje ništa.** Model je prazan, ili je prikaz usmeren negde drugde. Izaberite okvir i kliknite {{ui:Prikaži ceo model}}.
- **Lista razmera prikazuje samo odnose, bez razmera u stopama i inčima.** Postavite {{ui:Jedinice}} na {{ui:Inči}} ili {{ui:Stope}} na kartici {{ui:Model}}.
- **1:100 izgleda deset puta preveliko ili premalo.** Jedinice crteža su pogrešne. Postavite {{ui:Jedinice}} na ono što je jedna jedinica zaista.
- **Klik na osnovu unutar prozora pogleda ne bira ništa.** Na listu birate objekte lista. Prvo dvaput kliknite unutar prozora pogleda da radite na osnovi kroz njega.
- **Klikovi van prozora pogleda ne rade ništa.** Nalazite se unutar prozora pogleda: dvaput kliknite van njega, ili ukucajte `PS`, da ponovo radite na listu.
- **„Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first.“** {{cmd:MVIEW}} radi samo na jezičku lista.
