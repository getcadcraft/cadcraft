---
title: Model u 3D
summary: Pogledajte crtež u 3D na kartici 3D i pravite od njega jednostavna tela: izvlačenje (sa zakošenjem ili duž putanje), rotiranje, guranje i vučenje površi, kvadri, cilindri i klinovi, pa spajanje, oduzimanje i presecanje tela, zatim pomeranje, kopiranje, rotiranje i brisanje tela i postavljanje ravnih 2D pogleda na njih na listu.
keywords: 3d, tri d, čvrsto telo, tela, 3dsolid, region, body, acis, sat, sab, tela iz drugih programa, otvori 3D crtež, izvuci, ext, rotiraj, rev, provuci, sweep, zakošenje, putanja, presspull, gurni povuci, push pull, kvadar, box, cilindar, cyl, klin, 3dorbit, orbita, pogled, vscurrent, vizuelni stil, senčeno, skrivena linija, žičani model, rendgen, x-ray, xray, iso, perspektiva, paralelno, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, kocka pogleda, unija, uni, oduzmi, su, presek, in, bulova, kombinuj, spoji tela, viewbase, flatshot, ravan pogled, 2d pogled, pogled crteža, prednji pogled, pogled odozgo, bočni pogled, skrivene linije
from: 13060e71
---

## Šta ćete napraviti

Pravougaonik sobe 1000 × 600 izvlačimo u blok visine 400, jednu površ podižemo, a pored nje pravimo cilindar. Zatim se model čuva zajedno sa crtežom i izvozi za 3D pregledač ili za štampanje.

Kartica {{ui:3D}} nalazi se pored kartice {{ui:Model}} ispod crteža. Prikazuje crtež iz prostora modela kako leži na tlu, u bojama svojih slojeva (slojevi koji su isključeni ili zamrznuti ostaju sakriveni), i tela koja pravite. Kada se prvi put otvori, 3D prikaz se učitava; posle toga se prebacuje odmah.

## Izvlačenje oblika

1. Na kartici {{ui:Model}} ukucajte `REC` i pritisnite {{key:Enter}}. Ukucajte `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Kliknite karticu {{ui:3D}}. Traka sa alatkama prikazuje grupu {{ui:3D}} umesto grupa za crtanje.
3. Kliknite {{ui:Izvlačenje}} (ili ukucajte {{cmd:EXTRUDE}}, `EXT`). Kliknite unutar pravougaonika, pa pritisnite {{key:Enter}}.
4. Ukucajte `400` i pritisnite {{key:Enter}}. U istoriji piše „Izvučeno je 1 3D telo, visina 400“ sa zapreminom.

Zatvorene polilinije (uključujući lukove), pravougaonici, poligoni, krugovi i elipse mogu da se izvuku; linije i otvorene polilinije ne mogu, a istorija kaže zašto. Oblike možete i prvo izabrati na kartici {{ui:Model}} i tamo ukucati `EXTRUDE`. Umesto da ukucate visinu, možete je i kliknuti: obris prati kursor gore i dole. Negativna visina ide naniže. Ukucajte `D` na upitu za visinu da obrišete 2D oblike posle izvlačenja (ponovo `D` ih zadržava).

Na upitu za visinu, `T` (Ugao zakošenja) traži ugao u stepenima: stranice se nagnu za taj ugao, pa je gornji deo manji (negativan ugao ga čini većim); previše strm ugao za oblik se odbija. `P` (Putanja) provlači oblike duž putanje (vidi dole).

## Rotiranje i provlačenje

- {{cmd:REVOLVE}} (`REV`, ili {{ui:Više}} › {{ui:Rotiraj oko ose}}): izaberite zatvorene oblike, pritisnite {{key:Enter}}, zatim kliknite dva kraja ose (ili ukucajte `X` ili `Y` za osu crteža kroz 0,0), pa ukucajte ugao ili pritisnite {{key:Enter}} za puni obrt. Oblik se okreće oko ose i izdiže se iznad tla: nacrtajte polovinu obrisa vaze pored linije, pa je rotirajte oko te linije. Oblik sme da dodiruje osu, ali ne sme da je preseče. Pun obrt ima 48 koraka.
- {{cmd:SWEEP}} (ili {{ui:Više}} › {{ui:Provuci duž putanje}}, ili `P` na upitu za visinu u EXTRUDE): izaberite zatvorene oblike (profil), pritisnite {{key:Enter}}, zatim kliknite putanju: liniju, polilinija, luk, krug ili elipsu. Profil se postavlja preko putanje, sredinom na njoj, i prolazi duž nje; uglovi se seku pod uglom, a zatvorena putanja pravi prsten. Mali pravougaonik provučen duž obrisa sobe pravi podnu lajsnu; krug duž polilinije pravi cev.

## Guranje i vučenje površi

1. Kliknite {{ui:Gurni/povuci}} (ili ukucajte {{cmd:PRESSPULL}}).
2. Kliknite gornju površ bloka.
3. Ukucajte `100` i pritisnite {{key:Enter}}, ili pomerite kursor i kliknite. Blok je sada visok 500.

## Kvadri, cilindri i klinovi

- {{cmd:BOX}}: kliknite ili ukucajte dva ugla, pa visinu.
- {{cmd:CYLINDER}} (`CYL`): centar, poluprečnik, pa visina. Cilindri i izvučeni krugovi imaju 48 strana, senčeni glatko.
- {{cmd:WEDGE}} (`WE`): dva ugla i visina. Puna je visina na prvom uglu, a ka drugom se spušta do nule.

Na kartici 3D klik pada na površ ili ivicu ispod kursora, inače na tlo, pa kvadar može da stoji na drugom telu.

## Pomeranje, kopiranje, rotiranje i brisanje tela

Na kartici 3D klik bira telo; prevucite s leva na desno za prozor, a s desna na levo za presecanje. Zatim:

- {{cmd:MOVE}}: kliknite početnu tačku i mesto na koje ide, ili ukucajte `<100,0,0>` (ili `@100,0`) za pomeraj duž X, Y i Z.
- {{cmd:COPY}}: isto, ali original ostaje.
- {{cmd:ROTATE}}: ukucajte ugao (okreće se oko sredine izbora, oko Z), ili kliknite centar, početnu tačku i ugao.
- {{cmd:ERASE}} ili {{key:Delete}}.

## Spajanje, oduzimanje i presecanje tela

Otvorite {{ui:Više}} na traci sa alatkama 3D ili ukucajte komandu:

- {{cmd:UNION}} (`UNI`): izaberite tela, pritisnite {{key:Enter}}: postaju jedno telo.
- {{cmd:SUBTRACT}} (`SU`): izaberite tela koja ostaju, pritisnite {{key:Enter}}, zatim tela koja se oduzimaju, pa pritisnite {{key:Enter}}. Rupa kroz blok: nacrtajte cilindar kroz njega, pa oduzmite cilindar.
- {{cmd:INTERSECT}} (`IN`): izaberite tela, pritisnite {{key:Enter}}: ostaje samo ono što su svi zajedno imali.

Istorija kaže zapreminu rezultata. Svaka od ovih komandi je jedan korak poništavanja. Prva koju pokrenete učitava motor za bulove operacije (oko 0,5 MB; uključen je u {{ui:Sačuvaj za rad van mreže}}). Kombinovati se mogu samo zatvorena tela: telo sa otvorenim ivicama (iz tuđih 3D lica) se odbija uz taj razlog. Rezultat je jedno telo; krive površi ostaju sastavljene od ravnih faseta, kao što je bio cilindar.

Dvostruki klik na telo menja njegova lica i ivice posebno; {{key:Esc}} ga zatvara. Svaka 3D promena je jedan korak poništavanja u istoj istoriji kao crtež: {{key:Mod+Z}} poništava poslednju stvar koju ste uradili na bilo kojoj kartici.

## Ravni pogledi na listu

1. Otvorite karticu lista (ili ostanite na {{ui:Model}}), pa ukucajte {{cmd:VIEWBASE}} (ili `FLATSHOT`).
2. Izaberite pogled: {{key:Enter}} za prednji, ili `T` (odozgo), `R` (desno), `L` (levo), `BA` (pozadi), `BO` (odozdo), `I` (izometrija).
3. {{key:Enter}} prikazuje skrivene linije, isprekidane; `H` ih izostavlja.
4. {{key:Enter}} uzima razmeru koju predlaže CadCraft: na listu, najveću standardnu razmeru (na primer 1:20) pri kojoj pogled stane u manje od polovine papira. Ili ukucajte jednu: `1:50`, `2:1`.
5. Kliknite ili ukucajte gde ide centar pogleda.

Pogled je jedna referenca bloka, `VIEW-FRONT-1` i tako dalje: vidljive ivice su na sloju VIEW-VISIBLE (0.5 mm), skrivene na VIEW-HIDDEN (isprekidane, 0.25 mm). Pomerite ga, kotirajte i štampajte kao i svaki drugi crtež. To je slika tela u trenutku kada ste ga napravili: posle promene tela obrišite pogled i ponovo pokrenite {{cmd:VIEWBASE}}. Za više pogleda pokrenite je po jednom za svaki pogled.

## Pogled oko modela

Povucite točkićem za orbitu, {{key:Shift}} + povlačenje točkićem ili desnim dugmetom za pomeranje, a okretanje točkića zumira na kursor. Na touchpadu dva prsta orbitiraju, a štipanje zumira. Desni klik bez povlačenja je {{key:Enter}}, kao na ostalim karticama. 3DORBIT dozvoljava levom dugmetu da orbitira dok ne pritisnete {{key:Enter}} ili {{key:Esc}}.

- {{ui:Pogledi}} (ili {{cmd:VIEW}}): Iso, Odozgo, Odozdo, Sprijeda, Pozadi, Levo, Desno, Perspektiva ili Paralelno, i Zumiraj na sve.
- {{ui:Stil}} (ili {{cmd:VSCURRENT}}, `VS`): Senčeno, Senčeno sa ivicama, Skrivene linije, Žičani model ili Rendgen.

Tačke koje kliknete se privlače ka telima (uglovi, ivice, površi) i ka 2D crtežu na tlu: krajevi i sredine njegovih linija i lukova, i tačke duž njih. 2D linije se nikada ne biraju na kartici 3D. Kada komanda traži 2D objekte (EXTRUDE, REVOLVE, SWEEP), klik bira jedan, prevlačenje s leva na desno uzima ono što je potpuno unutar prozora, a s desna na levo uzima ono što prelazi, kao na kartici {{ui:Model}}.

Kocka pogleda nalazi se u gornjem desnom uglu kartice 3D: kliknite površ, ivicu ili ugao da pogledate odatle, prevucite je za orbitu, a dugme kućice vraća izometrijski pogled. To je {{ui:Automatski}}, početak {{ui:Indikator ugla}} u [CadCraft podešavanjima](topic:settings). Podešeno na {{ui:Kocka pogleda}}, kartica {{ui:Model}} prikazuje takođe kocku, koja gleda odozgo; klik na neku drugu stranu otvara karticu 3D koja gleda odatle. Podešeno na {{ui:Ikona osa}}, obe kartice prikazuju oznaku osa.

## Tela iz drugih programa

Crtež iz drugog programa može da sadrži 3D tela, regione i tela (3DSOLID, REGION, BODY: drugi program čuva njihov oblik kao ACIS podatke). CadCraft prikazuje one u prostoru modela na kartici 3D, u boji njihovog sloja i sa sopstvenim ivicama, prvi put kada otvorite karticu; komandna linija tada kaže koliko ih je nacrtano.

- Prikazuju se kakva jesu: ne možete ih birati, pomerati ni menjati. Slojevi koji su isključeni ili zamrznuti ih sakrivaju.
- Čuvanje kao DWG upisuje svako od njih nepromenjeno, u bilo kojoj DWG verziji, pa ih drugi program ponovo dobija. DXF datoteke ih ne čuvaju: CadCraft ih upisuje samo u DWG i to kaže kada sačuvate kao DXF.
- Nacrtano: ravne površi, i površi na cilindrima, konusima, sferama, torusima i jednostavnim splajn površima, sa pravim, zaobljenim i splajn ivicama. Površ bilo koje druge vrste, ili ona koju CadCraft ne može da rasporedi, ne pogađa se: izostavlja se i navodi se, na primer „Nije još nacrtano (3D tela): 2 lica na spline-surface (sweepsur), površ koja još nije nacrtana.“
- Tela unutar blokova još se ne prikazuju; „O ovoj datoteci“ ih broji.

Krive površi se crtaju kao male ravne delove, na oko 7.5° jedan od drugog, pa kriva tela izgledaju malo fasetirano izbliza.

## Čuvanje i izvoz

Čuvanje zadržava 3D model, u DWG i u DXF. Svako lice ulazi kao 3D lice na sloju `CC-3D`, pa drugi programi prikazuju tela, a CadCraft u datoteci čuva svoju tačnu kopiju, koju učitava kada ponovo otvorite crtež, sa 3D prikazom kakav je bio (kamera, projekcija i vizuelni stil). 3D lica koja su napravili drugi programi ulaze na kartici 3D kao samostalna lica, objedinjena u jednu grupu. 3D lice unutar bloka ulazi jednom za svaku referencu tog bloka u modelu, postavljeno i okrenuto kao referenca; u samom bloku i na listu 3D lice se crta ravno, kao svoj obris.

{{ui:Izvezi}} u 3D grupi preuzima samo tela: GLB za pregledače i veb ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ili STL za 3D štampanje, u milimetrima ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pita koji.

:::note
3D model je stvarne veličine. Crtež bez jedinica računa se kao milimetri, pa je `1000` jedan metar. Ako kasnije promenite jedinice crteža (Svojstva, bez izabranih objekata), tela se skaliraju zajedno s njima da ostanu na crtežu, a istorija to kaže. Jedan {{key:Mod+Z}} poništava promenu jedinica i skaliranje zajedno.
:::
