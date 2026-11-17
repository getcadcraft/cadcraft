---
title: Registruj više skeniranja u jedno
summary: Smjesti skeniranja snimljena s različitih pozicija u jedan okvir pomoću odabranih parova tačaka ili upisanih ciljeva, dorađuj ih pomoću ICP-a, spasi registraciju kao projekat i izvezi registrovani oblak kao LAS ili E57. Komanda je REGISTERSCANS.
keywords: registruj, registracija, skeniranja, oblak tačaka, icp, iterativno najbliža tačka, ciljevi, parovi tačaka, kruta transformacija, poravnaj, spoji, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Šta ćete uraditi

Nekoliko skeniranja istog mjesta (svako sa vlastite pozicije skenera) počinje u vlastitim koordinatama. Registrujte ih: dajte svakom skeniranju jedno postavljanje da svi budu u jednom okviru, zatim to spasite kao projekat i zapišite registrovani oblak kao jednu LAS ili E57 datoteku.

## Postavite skeniranja

1. Otvorite dijalog (upišite `REGISTERSCANS` (ili `REGSCAN`)). {{ui:Dodaj skeniranja…}} prihvata datoteke LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ, ili ih prevucite na dijalog. Skeniranja koja koriste različite jedinice se odbijaju uz napomenu: prvo pretvorite jedno od njih.
2. Odaberite {{ui:Skeniranje za pomjeranje}} i {{ui:Postavi prema}}. Slika prikazuje svako skeniranje u okviru onako kako je sada, svako jednom bojom: {{ui:Osnova}}, {{ui:Sprijeda}} ili {{ui:Bočni}}. Prevucite za pomjeranje pogleda, a točkićem miša zumirajte.
3. **Po parovima tačaka.** Kliknite {{ui:Odaberi par}}, zatim tačku na skeniranju koje pomjerate, pa isto mjesto na drugom skeniranju (ugao, cilj, podnožje stuba). Uradite to najmanje tri puta, tačkama koje nisu na jednoj liniji i razmaknutim. Kliknite {{ui:Postavi po parovima}}: skeniranje se postavlja metodom najmanjih kvadrata, a **Preostalo** pokazuje koliko svaki par još odstupa. Par s velikim brojem je loš odabir: uklonite ga križićem i postavite ponovo.
4. **Po ciljevima.** Ako su poznate stvarne koordinate tačke (izmjereni ciljevi), kliknite {{ui:Odaberi, pa upiši cilj}}, kliknite tačku na njenom skeniranju i upišite X, Y i Z cilja u red. Parovi i upisani ciljevi se slobodno mješaju.

## Dorada pomoću ICP-a

Parovi daju grubo postavljanje. {{ui:Doradi}} pomjera skeniranje dok se njegove površine ne poklope s površinama drugog: prvo **tačka na tačku**, zatim **tačka na ravan**. Tabela navodi svaki korak s greškom i brojem podudarenih tačaka; linija iznad nje prikazuje kako greška opada. {{ui:Zaustavi}} završava izvođenje nakon koraka koji je u toku i zadržava dostignuto. {{ui:Poništi}} vraća cijelo izvođenje (ili zadnje postavljanje); {{ui:Vrati}} vraća skeniranje na koordinate iz datoteke.

Da bi bilo brzo na laptopu, ICP radi na prorijeđenom dijelu tačaka ({{ui:Korištene tačke}}, 5,000 do 60,000) i zanemaruje podudaranja udaljenija od {{ui:Najveća udaljenost podudaranja}} (podrazumijevano 5% veličine skeniranja, što se smanjuje kako se ustaljuje). Potrebno mu je prvo grubo postavljanje: skeniranja koja se jedva preklapaju javljaju da se ne mogu podudarati. Površine koje su samo ravne ili samo prave ne mogu da fiksiraju položaj duž sebe; u tom slučaju dodajte parove.

## Čuvanje i izvoz

- {{ui:Spasi projekat}} zapisuje malu datoteku `.ccscans.json`: naziv svakog skeniranja, veličinu i otisak prvih 64 KB, uz njegovu transformaciju. Ne sadrži tačke. {{ui:Otvori projekat…}} pronalazi datoteke skeniranja prema tim referencama (datoteke moraju prvo biti dodane) i vraća svaku transformaciju.
- {{ui:Izvezi LAS}} i {{ui:Izvezi E57}} zapisuju jednu datoteku sa svakim skeniranjem na njegovom registrovanom mjestu. Tačke u originalima se nikad ne prepisuju; transformacija se primjenjuje pri izvozu. Kada je uključeno {{ui:Čitaj svaku tačku iz datoteka}}, svaka datoteka se ponovo čita za svaku tačku (do 20 miliona po skeniranju); kada je isključeno, zapisuju se samo tačke prikazane u pregledniku.
- {{ui:Prikaži registrovani oblak}} (CadCraft) zapisuje LAS i priključuje ga pod crtež na njegovim vlastitim koordinatama, kao i svaki oblak.

:::note
Ništa se ne šalje. Registracija radi u jedinicama vlastitim za datoteke i čuva milimetre: LAS se zapisuje sa skalom koja odgovara (do 0,1 mm), a E57 sa dvostrukom preciznošću. Koordinatni sistem se prenosi u LAS samo kada svako skeniranje navodi isti EPSG kod. E57 pisač je naš vlastiti; provjerava se čitanjem njegovih datoteka ovim čitačem i libE57Format.
:::
