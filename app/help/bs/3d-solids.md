---
title: Model u 3D
summary: Pogledajte crtež u 3D na kartici 3D i od njega napravite jednostavna tijela: izvucite ih (sa konusom ili duž putanje), rotirajte, gurajte i povlačite plohe, pravite kvadre, cilindre i klinove, spajajte, oduzimajte i presijecajte ih, zatim ih pomjerajte, kopirajte, rotirajte i brišite, te postavljajte ravne 2D poglede na list.
keywords: 3d, tri d, tijelo, tijela, 3dsolid, region, body, acis, sat, sab, tijela iz drugih programa, otvori 3D crtež, extrude, ext, revolve, rev, sweep, konus, taper, putanja, path, presspull, pritisni povuci, gurni povuci, box, kvadar, cilindar, cyl, klin, wedge, 3dorbit, orbit, pogled, vscurrent, vizuelni stil, sjenčeno, skrivena linija, žičani model, x-ray, xray, iso, perspektiva, paralelno, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, kocka pogleda, union, uni, subtract, su, intersect, in, boolean, kombinuj, spoji tijela, viewbase, flatshot, ravni pogled, 2D pogled, pogled crteža, pogled sprijeda, pogled odozgo, pogled sa strane, skriveni rubovi
from: 13060e71
---

## Šta ćete napraviti

Osnovu sobe 1000 × 600 izvlačimo u blok visine 400, jednu plohu podižemo, a pored nje pravimo cilindar — zatim se model snima zajedno sa crtežom i izvozi za 3D pregledač ili štampač.

Kartica {{ui:3D}} nalazi se pored kartice {{ui:Model}} ispod crteža. Prikazuje crtež prostora modela koji leži na tlu, u bojama svojih slojeva (slojevi koji su isključeni ili zamrznuti ostaju skriveni), i tijela koja napravite. Prvi put kad se otvori, 3D pogled se učita; poslije se prebacuje odmah.

## Izvlačenje oblika

1. Na kartici {{ui:Model}} upišite `REC` i pritisnite {{key:Enter}}. Upišite `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Kliknite na karticu {{ui:3D}}. Traka alata prikazuje grupu {{ui:3D}} umjesto grupa za crtanje.
3. Kliknite {{ui:Extrude}} (ili upišite {{cmd:EXTRUDE}}, `EXT`). Kliknite unutar pravougaonika, pa pritisnite {{key:Enter}}.
4. Upišite `400` i pritisnite {{key:Enter}}. Historija kaže „Extruded 1 solid, 400 high” sa njegovom zapreminom.

Zatvorene polilinije (uključujući lukove), pravougaonici, poligoni, krugovi i elipse se izvlače; linije i otvorene polilinije se ne izvlače, a historija kaže zašto. Oblike možete prvo odabrati na kartici {{ui:Model}} i tamo upisati `EXTRUDE`. Umjesto da upisujete visinu, možete je kliknuti: obris prati kursor gore i dolje. Negativna visina ide naniže. Na upitu za visinu upišite `D` da obrišete 2D oblike nakon izvlačenja (ponovni `D` ih zadržava).

Na upitu za visinu, `T` (Konus) traži ugao u stepenima: bočne strane se nagnu za taj ugao, pa je vrh manji (negativan ugao ga čini većim); ugao preoštar za oblik se odbija. `P` (Putanja) provlači oblike duž putanje umjesto toga (vidi dolje).

## Rotiranje i provlačenje

- {{cmd:REVOLVE}} (`REV`, ili {{ui:More}} › {{ui:Revolve about an axis}}): odaberite zatvorene oblike, pritisnite {{key:Enter}}, zatim kliknite dva kraja ose (ili upišite `X` ili `Y` za osu crteža kroz 0,0), pa upišite ugao ili pritisnite {{key:Enter}} za puni krug. Oblik se okreće oko ose i izdiže se iznad tla: nacrtajte polovinu obrisa jedne vaze pored linije, pa je rotirajte oko te linije. Oblik smije dodirivati osu, ali ne smije je prelaziti. Puni krug ima 48 koraka.
- {{cmd:SWEEP}} (ili {{ui:More}} › {{ui:Sweep along a path}}, ili `P` na upitu za visinu u EXTRUDE): odaberite zatvorene oblike (profil), pritisnite {{key:Enter}}, zatim kliknite putanju: liniju, poliliniju, luk, krug ili elipsu. Profil se postavlja poprečno na putanju, sredinom na njoj, i ide duž nje; uglovi se sastavljaju pod kosim rezom, a zatvorena putanja pravi prsten. Mali pravougaonik provučen duž obrisa sobe pravi podnu lajsnu; krug duž polilinije pravi cijev.

## Guranje i povlačenje plohe

1. Kliknite {{ui:Press/pull}} (ili upišite {{cmd:PRESSPULL}}).
2. Kliknite gornju plohu bloka.
3. Upišite `100` i pritisnite {{key:Enter}}, ili pomjerite kursor i kliknite. Blok je sada visok 500.

## Kvadri, cilindri i klinovi

- {{cmd:BOX}}: kliknite ili upišite dva ugla, zatim visinu.
- {{cmd:CYLINDER}} (`CYL`): centar, poluprečnik, zatim visina. Cilindri i izvučeni krugovi imaju 48 strana, sjenčene glatko.
- {{cmd:WEDGE}} (`WE`): dva ugla i visina. Puna visina je na prvom uglu, a na drugom se nagne do nule.

Na kartici 3D klik pada na plohu ili ivicu ispod kursora, inače na tlo, pa kvadar može stajati na drugom tijelu.

## Pomjeranje, kopiranje, rotiranje i brisanje tijela

Na kartici 3D klik odabire tijelo; prevucite s lijeva na desno za prozor, a s desna na lijevo za presijecanje. Zatim:

- {{cmd:MOVE}}: kliknite osnovnu tačku i mjesto gdje ide, ili upišite `<100,0,0>` (ili `@100,0`) za pomak duž X, Y i Z.
- {{cmd:COPY}}: isto, ali original ostaje.
- {{cmd:ROTATE}}: upišite ugao (okreće se oko sredine odabira, oko Z), ili kliknite centar, početnu tačku i ugao.
- {{cmd:ERASE}} ili {{key:Delete}}.

## Spajanje, oduzimanje i presjek tijela

Otvorite {{ui:More}} na traci 3D alata, ili upišite komandu:

- {{cmd:UNION}} (`UNI`): odaberite tijela, pritisnite {{key:Enter}}: postaju jedno tijelo.
- {{cmd:SUBTRACT}} (`SU`): odaberite tijela koja zadržavate i pritisnite {{key:Enter}}, zatim ona koja oduzimate i pritisnite {{key:Enter}}. Rupa kroz blok: nacrtajte cilindar kroz njega, pa oduzmite cilindar.
- {{cmd:INTERSECT}} (`IN`): odaberite tijela, pritisnite {{key:Enter}}: ostaje samo ono što su svi zajedno imali.

Historija kaže zapreminu rezultata. Svaka od ovih operacija je jedan korak poništavanja. Prva koju pokrenete učitava 3D motor za booleove operacije (oko 0,5 MB; uključen je u {{ui:Save for offline}}). Kombinovati se mogu samo zatvorena tijela: tijelo sa otvorenim ivicama (iz tuđih labavih 3D ploha) se odbija, uz navedeni razlog. Rezultat je jedno tijelo; zakrivljene plohe ostaju sastavljene od ravnih faceta, kao što je bio i cilindar.

Dvostruki klik na tijelo otvara njegove plohe i ivice odvojeno; {{key:Esc}} ga ponovo zatvara. Svaka 3D promjena je jedan korak poništavanja u istoj historiji kao crtež: {{key:Mod+Z}} poništava posljednju stvar koju ste uradili na bilo kojoj kartici.

## Ravni pogledi na listu

1. Otvorite karticu lista (ili ostanite na {{ui:Model}}), pa upišite {{cmd:VIEWBASE}} (ili `FLATSHOT`).
2. Odaberite pogled: {{key:Enter}} za pogled sprijeda, ili `T` (odozgo), `R` (desno), `L` (lijevo), `BA` (straga), `BO` (odozdo), `I` (izometrija).
3. {{key:Enter}} prikazuje skrivene linije, isprekidane; `H` ih izostavlja.
4. {{key:Enter}} uzima razmjeru koju predlaže CadCraft: na listu, najveću standardnu razmjeru (npr. 1:20) pri kojoj pogled stane u manje od pola papira. Ili upišite jednu: `1:50`, `2:1`.
5. Kliknite, ili upišite, gdje ide centar pogleda.

Pogled je jedna referenca bloka, `VIEW-FRONT-1` i tako dalje: vidljive ivice su na sloju VIEW-VISIBLE (0,5 mm), skrivene na VIEW-HIDDEN (isprekidane, 0,25 mm). Pomjerajte ga, kotirajte i štampajte kao i svaki drugi crtež. To je slika tijela u trenutku kad ste ga napravili: nakon promjene tijela obrišite pogled i ponovo pokrenite {{cmd:VIEWBASE}}. Za više pogleda pokrenite ga po jednom za svaki pogled.

## Razgledanje

Povlačite točkićem miša za orbitu, {{key:Shift}} + povlačenje točkićem ili desnim dugmetom za pomjeranje pogleda, a okretanje točkića zumira prema kursoru. Na touchpadu, dva prsta orbitiraju, a stezanje zumira. Desni klik bez povlačenja je {{key:Enter}}, kao i na ostalim karticama. `3DORBIT` omogućava da lijevo dugme orbitira dok ne pritisnete {{key:Enter}} ili {{key:Esc}}.

- {{ui:Views}} (ili {{cmd:VIEW}}): Izometrija, Odozgo, Odozdo, Sprijeda, Straga, Lijevo, Desno, Perspektiva ili Paralelno, te Zumiraj na sve.
- {{ui:Style}} (ili {{cmd:VSCURRENT}}, `VS`): Sjenčeno, Sjenčeno sa ivicama, Skrivena linija, Žičani model ili X-ray.

Tačke na koje kliknete se privlače na tijela (uglovi, ivice, plohe) i na 2D crtež na tlu: krajevi i sredine njegovih linija i lukova te tačke duž njih. 2D linije se nikad ne odabiru na kartici 3D. Kad naredba traži 2D objekte (EXTRUDE, REVOLVE, SWEEP), klik bira jedan, prevlačenje s lijeva na desno uzima sve što je u potpunosti unutar prozora, a prevlačenje s desna na lijevo uzima sve što prelazi, kao na kartici {{ui:Model}}.

Kocka pogleda nalazi se u gornjem desnom uglu kartice 3D: kliknite plohu, ivicu ili ugao da pogledate sa te strane, prevucite je za orbitu, a dugme s kućicom vraća izometrijski pogled. To je {{ui:Automatic}}, početak {{ui:Corner indicator}} u [CadCraft postavkama](topic:settings). Kad se postavi na {{ui:View cube}}, kartica {{ui:Model}} također prikazuje kocku, gledajući odozgo; klik na bilo koju drugu stranu otvara karticu 3D koja gleda sa te strane. Kad se postavi na {{ui:Axis icon}}, obje kartice umjesto toga prikazuju oznaku osa.

## Tijela iz drugih programa

Crtež iz drugog programa može sadržavati 3D tijela, regione i tijela (3DSOLID, REGION, BODY: drugi program čuva njihov oblik kao ACIS podatke). CadCraft prikazuje one u prostoru modela na kartici 3D, u boji njihovog sloja i sa njihovim vlastitim ivicama, prvi put kad otvorite karticu; komandna linija tada kaže koliko je nacrtano.

- Prikazuju se kakvi jesu: ne možete ih odabrati, pomjerati ni mijenjati. Slojevi koji su isključeni ili zamrznuti ih skrivaju.
- Snimanje kao DWG upisuje svako od njih nepromijenjeno, u bilo kojoj DWG verziji, pa ih drugi program ponovo dobija. DXF datoteke ih ne čuvaju: CadCraft ih upisuje samo u DWG i to kaže kad snimate kao DXF.
- Nacrtano: ravne plohe i plohe na cilindrima, konusima, sferama, torusima i jednostavnim površinama splajna, sa pravim, zaobljenim i splajn ivicama. Ploha na bilo kojoj drugoj vrsti površine, ili ona koju CadCraft ne može rasporediti, se ne pogađa: izostavlja se i navodi se, npr. „Not drawn yet (3D solids): 2 faces on spline-surface (sweepsur), a surface not drawn yet.”
- Tijela unutar blokova još se ne prikazuju; „About this file” ih broji.

Zakrivljene plohe se crtaju kao male ravne površine, razmaknute oko 7,5°, pa zakrivljeno tijelo izgleda malo facetirano kad ga gledate izbliza.

## Snimanje i izvoz

Snimanje čuva 3D model, u DWG i u DXF. Svaka ploha ulazi kao 3D ploha na sloju `CC-3D`, pa drugi programi prikazuju tijela, a CadCraft zadržava svoju vlastitu tačnu kopiju u datoteci, koju čita kad ponovo otvorite crtež, sa 3D pogledom kakav je bio (kamera, projekcija i vizuelni stil). 3D plohe koje su napravili drugi programi ulaze na karticu 3D kao labave plohe, sastavljene u jednu grupu. 3D ploha unutar bloka ulazi jednom za svaku referencu tog bloka u modelu, postavljena i okrenuta kao i referenca; u samom bloku i na listu, 3D ploha se crta ravno, kao njen obris.

{{ui:Export}} u grupi 3D preuzima samo tijela: GLB za pregledače i web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ili STL za 3D štampu, u milimetrima ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pita koji.

:::note
3D model je stvarne veličine. Crtež bez jedinica se računa kao milimetri, pa je `1000` jedan metar. Ako kasnije promijenite jedinice crteža (Svojstva, bez odabira), tijela se skaliraju zajedno s njima kako bi ostala na crtežu, a historija to kaže. Jedno {{key:Mod+Z}} poništava promjenu jedinica i skaliranje zajedno.
:::
