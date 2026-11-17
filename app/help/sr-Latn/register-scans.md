---
title: Registruj više skenova u jedan
summary: Postavi skenove snimljene sa različitih pozicija u jedan okvir pomoću izabranih parova tačaka ili unetih ciljeva, dotereaj ih sa ICP, sačuvaj registraciju kao projekat i izvezi registrovani oblak kao LAS ili E57. Komanda je REGISTERSCANS.
keywords: registracija, registrovanje, skenovi, oblak tačaka, icp, iterativna najbliža tačka, ciljevi, parovi tačaka, kruta transformacija, poravnanje, spajanje, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Šta ćete uraditi

Više skenova istog mesta (svaki sa sopstvene pozicije skenera) počinje u sopstvenim koordinatama. Registrujte ih: dajte svakom skenu jedno postavljanje da svi budu u jednom okviru, zatim to sačuvajte kao projekat i zapišite registrovani oblak kao jednu LAS ili E57 datoteku.

## Postavi skenove

1. Otvorite dijalog (ukucajte `REGISTERSCANS` (ili `REGSCAN`)). {{ui:Dodaj skenove…}} prihvata datoteke LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ, ili ih prevucite na dijalog. Skenovi sa različitim jedinicama se odbijaju uz napomenu: prvo jedan od njih pretvorite.
2. Izaberite {{ui:Sken za pomeranje}} i {{ui:Postavi u odnosu na}}. Slika prikazuje svaki sken u okviru onako kako stoji sada, svaki u drugoj boji: {{ui:Osnova}}, {{ui:Sprednji}} ili {{ui:Bočno}}; prevucite za pomeranje pogleda, koristite točkić miša za zumiranje.
3. **Po parovima tačaka.** Kliknite {{ui:Izaberi par}}, zatim tačku na skenu koji pomerate, pa isto mesto na drugom skenu (ugao, cilj, podnožje stuba). Ovo uradite najmanje tri puta, sa tačkama koje nisu na jednoj liniji i koje su razmaknute. Kliknite {{ui:Postavi po parovima}}: sken se postavlja metodom najmanjih kvadrata, a **Preostalo** pokazuje koliko svaki par još odstupa. Par sa velikim brojem je loš izbor: uklonite ga krstićem i ponovo postavite.
4. **Po ciljevima.** Ako su poznate prave koordinate tačke (izmereni ciljevi), kliknite {{ui:Izaberi, pa unesi cilj}}, kliknite tačku na njenom skenu i u red unesite X, Y i Z cilja. Parovi i uneti ciljevi se slobodno mešaju.

## Dotereaj sa ICP

Parovi daju grubo postavljanje. {{ui:Precizno podesi}} pomera sken dok se njegove površine ne poklope sa površinama drugog skena: prvo **tačka na tačku**, zatim **tačka na ravan**. Tabela navodi svaki korak sa njegovom greškom i brojem poklopljenih tačaka; linija iznad nje crta smanjivanje greške. {{ui:Zaustavi}} završava pokretanje posle koraka koji je u toku i zadržava dostignuto. {{ui:Opozovi}} vraća celo pokretanje (ili poslednje postavljanje) unazad; {{ui:Vrati}} vraća sken na koordinate iz datoteke.

Da bi bilo brzo na laptopu, ICP radi na prorednom delu tačaka ({{ui:Korišćene tačke}}, 5.000 do 60.000) i ignoriše poklapanja udaljenija od {{ui:Najveća razdaljina poklapanja}} (podrazumevano 5% veličine skena, a smanjuje se kako se stabilizuje). Potrebno mu je grubo postavljanje unapred: skenovi koji se jedva preklapaju javljaju da se ne mogu poklopiti. Površine koje su samo ravne ili samo prave ne mogu da odrede položaj duž sebe; u tom slučaju dodajte parove.

## Sačuvaj i izvezi

- {{ui:Sačuvaj projekat}} zapisuje mali `.ccscans.json` fajl: naziv svakog skena, veličinu i otisak prvih 64 KB, zajedno sa njegovom transformacijom. Ne sadrži tačke. {{ui:Otvori projekat…}} traži datoteke skenova po tim referencama (datoteke moraju prvo biti dodate) i vraća svaku transformaciju.
- {{ui:Izvezi LAS}} i {{ui:Izvezi E57}} zapisuju jednu datoteku sa svim skenovima na njihovom registrovanom mestu. Originali se nikad ne menjaju; transformacija se primenjuje pri izvozu. Kada je uključeno {{ui:Čitaj svaku tačku iz datoteka}}, svaka datoteka se ponovo čita za svaku tačku (do 20 miliona po skenu); kada je isključeno, zapisuju se samo tačke prikazane u pregledaču.
- {{ui:Prikaži registrovani oblak}} (CadCraft) zapisuje LAS i prikači ga pod crtež na njegovim koordinatama, kao i svaki oblak.

:::note
Ništa se ne šalje na mrežu. Registracija radi u jedinicama samih datoteka i čuva milimetre: LAS se zapisuje sa razmerom koja odgovara (do 0,1 mm), a E57 sa dvostrukom tačnošću. Koordinatni sistem se prenosi u LAS samo kada svi skenovi navode isti EPSG kod. E57 pisač je naš; proverava se čitanjem njegovih datoteka ovim čitačem i u libE57Format.
:::
