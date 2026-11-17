---
title: Registriraj više skeniranja u jedno
summary: Postavi skeniranja snimljena s različitih položaja u jedan okvir pomoću odabranih parova točaka ili upisanih ciljeva, dorađuj ih s ICP-om, spremi registraciju kao projekt i izvezi registrirani oblak kao LAS ili E57. Naredba je REGISTERSCANS.
keywords: registriraj, registracija, skeniranja, oblak točaka, icp, iterativna najbliža točka, ciljevi, parovi točaka, kruta transformacija, poravnaj, spoji, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Što ćete učiniti

Više skeniranja jednog mjesta (svako s vlastitog položaja skenera) počinje u vlastitim koordinatama. Registrirajte ih: dajte svakom skeniranju jedno postavljanje da svi budu u jednom okviru, zatim spremite to kao projekt i zapišite registrirani oblak kao jednu LAS ili E57 datoteku.

## Postavite skeniranja

1. Otvorite dijaloški okvir (upišite `REGISTERSCANS` (ili `REGSCAN`)). {{ui:Dodaj skeniranja…}} prihvaća datoteke LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ, ili ih povucite na dijaloški okvir. Skeniranja koja koriste različite jedinice se odbijaju uz napomenu: prvo pretvorite jedno.
2. Odaberite {{ui:Skeniranje za pomicanje}} i {{ui:Postavi uz}}. Slika prikazuje svako skeniranje u okviru kakvo je sada, svako u jednoj boji: {{ui:Tlocrt}}, {{ui:Prednji (F)}} ili {{ui:Bok}}; povucite za pomicanje prikaza, a kotačićem zumirajte.
3. **Po parovima točaka.** Kliknite {{ui:Odaberite par}}, zatim točku na skeniranju koje se pomiče, zatim isto mjesto na drugom skeniranju (kut, cilj, podnožje stupa). Učinite to najmanje tri puta, s točkama koje nisu na jednom pravcu i koje su razmaknute. Kliknite {{ui:Postavi po parovima}}: skeniranje se postavlja metodom najmanjih kvadrata, a **Preostalo** pokazuje koliko svaki par još promašuje. Par s velikim brojem je loš odabir: uklonite ga križićem i ponovno postavite.
4. **Po ciljevima.** Ako su poznate stvarne koordinate točke (izmjereni ciljevi), kliknite {{ui:Odaberite, zatim upišite cilj}}, kliknite točku na njezinu skeniranju i upišite X, Y i Z koordinate cilja u redak. Parovi i upisani ciljevi slobodno se miješaju.

## Doradi s ICP-om

Parovi daju grubo postavljanje. {{ui:Doredi}} pomiče skeniranje dok se njegove površine ne poklope s površinama drugog skeniranja: prvo **točka na točku**, zatim **točka na ravninu**. Tablica prikazuje svaki korak s pogreškom i brojem podudarenih točaka; redak iznad nje crta pad pogreške. {{ui:Zaustavi}} završava izvođenje nakon tekućeg koraka i zadržava ono što je postigao. {{ui:Poništi}} vraća cijelo izvođenje (ili zadnje postavljanje); {{ui:Vrati zadano}} vraća skeniranje na koordinate iz datoteke.

Da bi bilo brzo na prijenosnom računalu, ICP radi na prorijeđenom udjelu točaka ({{ui:Korištene točke}}, od 5,000 do 60,000) i zanemaruje podudaranja udaljenija od {{ui:Najveća udaljenost podudaranja}} (zadano 5% veličine skeniranja, što se smanjuje kako se postupak stabilizira). Potrebno je prvo grubo postavljanje: skeniranja koja se jedva preklapaju javljaju da se ne mogu podudarati. Površine koje su samo ravne ili samo pravocrtne ne mogu popraviti položaj duž sebe; u tom slučaju dodajte parove.

## Spremanje i izvoz

- {{ui:Spremi projekt}} zapisuje mali `.ccscans.json` datoteku: naziv svakog skeniranja, njegovu veličinu i otisak prvih 64 KB, s njegovom transformacijom. Ne sadrži točke. {{ui:Otvori projekt…}} pronalazi datoteke skeniranja prema tim referencama (datoteke moraju prvo biti dodane) i vraća svaku transformaciju na mjesto.
- {{ui:Izvezi LAS}} i {{ui:Izvezi E57}} zapisuju jednu datoteku sa svim skeniranjima na njihovu registriranu poziciju. Točke se nikad ne prepisuju u izvornim datotekama; transformacija se primjenjuje pri izvozu. Uz uključeno {{ui:Čitaj svaku točku iz datoteka}}, svaka datoteka se ponovno čita za svaku točku (do 20 milijuna po skeniranju); uz isključeno, zapisuju se samo točke prikazane u pregledniku.
- {{ui:Prikaži registrirani oblak}} (CadCraft) zapisuje LAS i priključuje ga pod crtež na vlastitim koordinatama, kao i svaki drugi oblak.

:::note
Ništa se ne šalje na poslužitelj. Registracija radi u vlastitim jedinicama datoteka i zadržava milimetre: LAS se zapisuje s mjerilom koje odgovara (do 0,1 mm), a E57 s double vrijednostima. Koordinatni sustav prenosi se u LAS samo kad svako skeniranje navodi isti EPSG kod. E57 pisač je naš vlastiti; provjerava se čitanjem njegovih datoteka natrag ovim čitačem i libE57Format-om.
:::
