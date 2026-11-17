---
title: Model u 3D
summary: Pogledajte crtež u 3D na kartici 3D i od njega izradite jednostavna puna tijela: izvucite ih (s nagibom ili po putanji), rotirajte, potisnite i povucite plohe, izradite kutije, cilindre i klinove, spojite, oduzmite i presijecite ih, zatim ih pomaknite, kopirajte, zakrenite i izbrišite te na list postavite ravne 2D poglede na njih.
keywords: 3d, tri d, puno tijelo, puna tijela, 3dsolid, regija, tijelo, acis, sat, sab, puna tijela iz drugih programa, otvori 3D crtež, izvuci, ext, rotiraj, rev, provuci, presspull, potisni povuci, push pull, kutija, cilindar, cyl, klin, 3dorbit, orbita, pogled, vscurrent, vizualni stil, sjenčano, skrivene linije, žičani model, rendgen, xray, iso, perspektiva, paralelno, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, view cube, unija, uni, oduzmi, su, presjek, in, bulova, kombiniraj, spoji tijela, viewbase, flatshot, ravni pogled, 2d pogled, pogled crteža, prednji pogled, pogled odozgo, bočni pogled
from: 13060e71
---

## Što ćete izraditi

Tlocrt prostorije 1000 × 600 izvučen u blok visine 400, ploha povučena prema gore i cilindar pokraj njega, zatim se model sprema zajedno s crtežom i izvozi za 3D preglednik ili pisač.

Kartica {{ui:3D}} nalazi se pored {{ui:Model}} ispod crteža. Prikazuje crtež u prostoru modela kako leži na podlozi, u bojama svojih slojeva (slojevi koji su isključeni ili zamrznuti ostaju skriveni), i tijela koja izradite. Pri prvom otvaranju učitava se 3D prikaz; nakon toga se prebacuje odmah.

## Izvucite oblik

1. Na kartici {{ui:Model}} upišite `REC` i pritisnite {{key:Enter}}. Upišite `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Kliknite karticu {{ui:3D}}. Traka prikazuje grupu {{ui:3D}} umjesto grupa za crtanje.
3. Kliknite {{ui:Izvuci}} (ili upišite {{cmd:EXTRUDE}}, `EXT`). Kliknite unutar pravokutnika, zatim pritisnite {{key:Enter}}.
4. Upišite `400` i pritisnite {{key:Enter}}. Povijest kaže „Izvučeno: 1 puno tijelo, visina 400“, s njegovim volumenom.

Zatvorene polilinije (uključujući lukove), pravokutnici, poligoni, kružnice i elipse se izvlače; linije i otvorene polilinije ne, a povijest kaže zašto. Možete i prvo odabrati oblike na kartici {{ui:Model}} i tamo upisati `EXTRUDE`. Umjesto da upišete visinu, možete je kliknuti: obris prati kursor gore i dolje. Negativna visina ide prema dolje. Upišite `D` na upitu za visinu da izbrišete 2D oblike nakon izvlačenja (ponovni `D` ih zadržava).

Na upitu za visinu, `T` (Nagib (`T`)) traži kut u stupnjevima: bočne strane se nagnu za taj kut, pa je gornja strana manja (negativan kut je čini većom); kut prestrm za oblik se odbija. `P` (putanja) umjesto toga provlači oblike po putanji (vidi dolje).

## Rotiraj i provuci

- {{cmd:REVOLVE}} (`REV`, ili {{ui:Više}} › {{ui:Rotiraj oko osi}}): odaberite zatvorene oblike, pritisnite {{key:Enter}}, zatim kliknite dva kraja osi (ili upišite `X` ili `Y` za os crteža kroz 0,0), zatim upišite kut ili pritisnite {{key:Enter}} za puni krug. Oblik se okreće oko osi i izlazi iz podloge: nacrtajte pola obrisa vaze uz liniju i rotirajte ga oko te linije. Oblik smije dodirivati os, ali je ne smije presijecati. Puni krug ima 48 koraka.
- {{cmd:SWEEP}} (ili {{ui:Više}} › {{ui:Provuci po putanji}}, ili `P` na upitu za visinu u EXTRUDE): odaberite zatvorene oblike (profil), pritisnite {{key:Enter}}, zatim kliknite putanju: liniju, polilinija, luk, kružnicu ili elipsu. Profil se postavlja poprijeko na putanju, sredinom na njoj, i pruža se duž nje; kutovi se spajaju ukosom, a zatvorena putanja daje prsten. Mali pravokutnik provučen duž obrisa prostorije daje podnu letvicu; kružnica duž polilinije daje cijev.

## Potisnite i povucite plohu

1. Kliknite {{ui:Potisni/povuci}} (ili upišite {{cmd:PRESSPULL}}).
2. Kliknite gornju plohu bloka.
3. Upišite `100` i pritisnite {{key:Enter}}, ili pomaknite kursor i kliknite. Blok je visok 500.

## Kutije, cilindri i klinovi

- {{cmd:BOX}}: kliknite ili upišite dva kuta, zatim visinu.
- {{cmd:CYLINDER}} (`CYL`): središte, polumjer, zatim visina. Cilindri i izvučene kružnice imaju 48 stranica, glatko sjenčane.
- {{cmd:WEDGE}} (`WE`): dva kuta i visina. Puna visina je na prvom kutu, a spušta se do nule na drugom.

Na kartici 3D klik pada na plohu ili rub pod kursorom, inače na podlogu, pa kutija može stajati na drugom tijelu.

## Pomaknite, kopirajte, zakrenite i izbrišite tijela

Na kartici 3D klik odabire tijelo; povucite slijeva nadesno za prozor, zdesna nalijevo za križanje. Zatim:

- {{cmd:MOVE}}: kliknite baznu točku i mjesto na koje ide, ili upišite `<100,0,0>` (ili `@100,0`) za udaljenost duž X, Y i Z.
- {{cmd:COPY}}: isto, uz zadržavanje izvornika.
- {{cmd:ROTATE}}: upišite kut (zakreće se oko sredine odabira, oko Z), ili kliknite središte, početnu točku i kut.
- {{cmd:ERASE}} ili {{key:Delete}}.

## Spojite, oduzmite i presijecite tijela

Otvorite {{ui:Više}} na traci 3D ili upišite naredbu:

- {{cmd:UNION}} (`UNI`): odaberite tijela, pritisnite {{key:Enter}}: postaju jedno tijelo.
- {{cmd:SUBTRACT}} (`SU`): odaberite tijela koja ostaju i pritisnite {{key:Enter}}, zatim ona koja se oduzimaju i pritisnite {{key:Enter}}. Rupa kroz blok: nacrtajte cilindar kroz njega, zatim oduzmite cilindar.
- {{cmd:INTERSECT}} (`IN`): odaberite tijela, pritisnite {{key:Enter}}: ostaje samo ono što su svi zajedno imali.

Povijest kaže volumen rezultata. Svaka naredba je jedan korak poništavanja. Prva koju pokrenete učitava motor za 3D booleove operacije (oko 0,5 MB; uključen je u {{ui:Spremi za offline}}). Mogu se spajati samo zatvorena tijela: tijelo s otvorenim rubovima (iz tuđih labavih 3D ploha) odbija se uz taj razlog. Rezultat je jedno tijelo; zakrivljene plohe ostaju sastavljene od ravnih faceta, kao što je bio cilindar.

Dvostruki klik na tijelo uređuje njegove plohe i rubove zasebno; {{key:Esc}} ga ponovno zatvara. Svaka 3D promjena je jedan korak poništavanja u istoj povijesti kao crtež: {{key:Mod+Z}} poništava zadnju radnju na bilo kojoj kartici.

## Ravni pogledi na listu

1. Otvorite karticu lista (ili ostanite na {{ui:Model}}), zatim upišite {{cmd:VIEWBASE}} (ili `FLATSHOT`).
2. Odaberite pogled: {{key:Enter}} za prednji, ili `T` (odozgo), `R` (desno), `L` (lijevo), `BA` (straga), `BO` (odozdo), `I` (izometrija).
3. {{key:Enter}} prikazuje skrivene linije, crtkano; `H` ih izostavlja.
4. {{key:Enter}} uzima mjerilo koje predlaže CadCraft: na listu, najveće standardno mjerilo (npr. 1:20) pri kojem pogled stane u manje od pola papira. Ili upišite jedno: `1:50`, `2:1`.
5. Kliknite ili upišite gdje ide središte pogleda.

Pogled je jedna referenca bloka, `VIEW-FRONT-1` i tako dalje: vidljivi rubovi su na sloju VIEW-VISIBLE (0.5 mm), skriveni na VIEW-HIDDEN (crtkano, 0.25 mm). Pomičite ga, kotirajte i ispišite kao svaki drugi crtež. To je slika tijela kakva su bila kad ste je izradili: nakon promjene tijela obrišite pogled i ponovno pokrenite {{cmd:VIEWBASE}}. Za više pogleda pokrenite ga jednom za svaki pogled.

## Pogledajte okolo

Povlačite kotačićem za orbitu, {{key:Shift}} + povlačenje kotačićem ili desna tipka za pomicanje, a okretanje kotačića zumira na kursoru. Na touchpadu dva prsta orbitiraju, a štipanje zumira. Desni klik bez povlačenja je {{key:Enter}}, kao na drugim karticama. 3DORBIT dopušta lijevoj tipki da orbitira dok ne pritisnete {{key:Enter}} ili {{key:Esc}}.

- {{ui:Pogledi}} (ili {{cmd:VIEW}}): Iso (izometrija), Top (odozgo), Bottom (odozdo), Front (sprijeda), Back (straga), Left (lijevo), Right (desno), Perspective (perspektiva) ili Parallel (paralelno), i Zoom to everything (zumiraj na sve).
- {{ui:Stil}} (ili {{cmd:VSCURRENT}}, `VS`): Shaded (sjenčano), Shaded with edges (sjenčano s rubovima), Hidden line (skrivene linije), Wireframe (žičani model) ili X-ray (rendgen).

Točke na koje kliknete hvataju se na tijela (kutove, rubove, plohe) i na 2D crtež na podlozi: krajeve i polovišta njegovih linija i lukova te točke duž njih. 2D linije se nikad ne odabiru na kartici 3D. Kad naredba traži 2D objekte (EXTRUDE, REVOLVE, SWEEP), klik odabire jedan, povlačenje slijeva nadesno uzima ono što je potpuno unutra, a povlačenje zdesna nalijevo uzima ono što prelazi, kao na kartici {{ui:Model}}.

Kocka pogleda nalazi se u gornjem desnom kutu kartice 3D: kliknite plohu, rub ili kut da pogledate odande, povucite je za orbitu, a gumb s kućicom vraća izometrijski pogled. To je {{ui:Automatski}}, početak {{ui:Pokazatelj u kutu}} u [CadCraft postavkama](topic:settings). Postavljeno na {{ui:ViewCube}}, kartica {{ui:Model}} također prikazuje kocku, gledajući odozgo; klik na bilo koju drugu stranu otvara karticu 3D gledajući odande. Postavljeno na {{ui:Ikona osi}}, obje kartice umjesto toga prikazuju oznaku osi.

## Tijela iz drugih programa

Crtež iz drugog programa može sadržavati 3D tijela, regije i tijela (3DSOLID, REGION, BODY: drugi program čuva njihov oblik kao ACIS podatke). CadCraft prikazuje one u prostoru modela na kartici 3D, u boji njihova sloja i s vlastitim rubovima, pri prvom otvaranju kartice; redak naredbi zatim kaže koliko ih je nacrtano.

- Prikazuju se onakva kakva jesu: ne možete ih odabrati, pomaknuti ni mijenjati. Slojevi koji su isključeni ili zamrznuti ih skrivaju.
- Spremanje kao DWG svako vraća nepromijenjeno, u bilo kojoj verziji DWG-a, pa ih drugi program ponovno dobiva. DXF datoteke ih ne čuvaju: CadCraft ih upisuje samo u DWG i to kaže kad spremate kao DXF.
- Nacrtano: ravne plohe te plohe na cilindrima, stošcima, kuglama, torusima i jednostavnim spline površinama, s ravnim, zaobljenim i spline rubovima. Ploha na nekoj drugoj vrsti površine, ili ona koju CadCraft ne može rasporediti, ne pogađa se: izostavlja se i navodi, npr. „Još nije nacrtano (3D tijela): 2 plohe na spline-površini (sweepsur), površina koja još nije nacrtana.“
- Tijela unutar blokova još se ne prikazuju; {{ui:O ovoj datoteci}} ih broji.

Zakrivljene plohe crtaju se kao male ravne ploče, otprilike 7.5° razmaknute, pa zakriveno tijelo izbliza izgleda malo facetirano.

## Spremite i izvezite

Spremanje čuva 3D model, u DWG i u DXF. Svaka ploha ide kao 3D ploha na sloju `CC-3D`, pa ostali programi prikazuju tijela, a CadCraft zadržava svoju točnu kopiju u datoteci i čita je kad ponovno otvorite crtež, s 3D prikazom kakav je bio (kamera, projekcija i vizualni stil). 3D plohe koje su izradili drugi programi dolaze na kartici 3D kao labave plohe, zajedno u jednoj grupi. 3D ploha unutar bloka dolazi jednom za svaku referencu tog bloka u modelu, postavljena i zakrenuta kao referenca; u samom bloku i na listu 3D ploha se crta ravno, kao njezin obris.

{{ui:Izvezi}} u grupi 3D preuzima samo tijela: GLB za preglednike i web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ili STL za 3D ispis, u milimetrima ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pita koji.

:::note
3D model je stvarne veličine. Crtež bez jedinica računa se kao milimetri, pa je `1000` jedan metar. Ako kasnije promijenite jedinice crteža (Svojstva, uz ništa odabrano), tijela se skaliraju s njima kako bi ostala na crtežu, a povijest to kaže. Jedan {{key:Mod+Z}} poništava promjenu jedinica i skaliranje zajedno.
:::
