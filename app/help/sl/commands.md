---
title: Referenca ukazov
summary: Vsak ukaz v risarski aplikaciji CadCraft, z aliasi, vprašanji, možnostmi in privzetimi nastavitvami.
keywords: ukazi, aliasi, seznam ukazov, površina, obseg, measuregeom, črta, pline, krožnica, lok, prirezi, odmik, dimlinear, blok, vstavi, postavitev, izris, zoom, pomoč, copyclip, cutclip, pasteclip, pasteorig, copybase, podvoji, selectall
from: 979ffe3b
---

Vnesite ime ukaza ali alias in pritisnite {{key:Enter}} ali {{key:Space}}. Velikost črk ni pomembna, vodilni `_`, `-`, `.` ali `'` pa se prezre. Vnesite `HELP` (ali `?`), da v zgodovini ukazne vrstice izpišete kratek seznam vseh ukazov; pritisnite {{key:F1}} za to pomoč.

Kako brati pozive: možnosti so v oglatih oklepajih, izberete pa jo tako, da vnesete njene velike črke (`D` za Premer). Privzeta vrednost je v kotnih oklepajih; pritisnite {{key:Enter}}, da jo sprejmete. Kjer je zahtevana točka, lahko kliknete ali vnesete katerokoli obliko iz [Vnos koordinat in razdalj](topic:coordinate-entry). Kjer je zahtevana razdalja, lahko vnesete število ali kliknete dve točki.

Pritisk na {{key:Enter}} tam, kjer je zahtevana točka ali predmet in privzete vrednosti ni, konča ukaz. {{key:Esc}} ga prekliče. Vse, kar ukaz naredi, je en korak razveljavitve.

## Risanje

### LINE

Aliasi: `L`. Ravni odseki, vsak je svoj predmet.

- `Določite prvo točko` (Enter: začnite pri zadnji točki, ki ste jo podali)
- `Določite naslednjo točko [Razveljavi (U)]`, ponovljeno. Po dveh odsekih: `[Razveljavi (U)/Zapri (C)]`.
- `U` vzame nazaj zadnji odsek, `C` zapre do prve točke in konča. Enter konča.

### PLINE

Aliasi: `PL`. Ena polilinija iz odsekov črt in lokov.

- `Določite začetno točko`
- `Določite naslednjo točko [Lok (A)/Zapri (C)/Razveljavi (U)]` (Zapri, ko sta dva odseka)
- `A` preklopi na loke: `Določite krajišče loka [Črta (L)/Zapri (C)/Razveljavi (U)]`. Vsak lok se nadaljuje tangentno na prejšnji odsek. `L` se vrne na črte, `CL` zapre z lokom.
- Enter konča; polilinija ostane odprta.

### CIRCLE

Aliasi: `C`.

- `Določite središče kroga [3P/2P/Ttr (tan tan polmer)]`
- `Določite polmer kroga [Premer (D)] <zadnji polmer>`; `D` zahteva `Določite premer kroga`.
- `2P`: dve krajišči premera. `3P`: tri točke na krogu.
- `T` (tudi ukaz `TTR` in {{ui:Risanje}} › {{ui:Več}} › {{ui:Krožnica: Tan, Tan, polmer}}): `Določite točko na predmetu za prvo tangento kroga`, drugo, nato polmer (Enter: zadnji). Krog se dotika obeh predmetov (črt, lokov, krogov, odsekov polilinije, tudi znotraj blokov); med tistimi, ki se, je tisti, ki se dotika najbližje vašim izborom. „Krog ne obstaja“, ko nobeden ne ustreza.
- `TTT` (ali {{ui:Risanje}} › {{ui:Več}} › {{ui:Krožnica: Tan, Tan, Tan}}): trije predmeti; krog, ki se dotika vseh treh, najbližje vašim izborom (tri črte dajo notranji krog ali zunanjega, odvisno od tega, kje kliknete).

### ARC

Aliasi: `A`.

- `Določite začetno točko loka [Središče (C)]`, `Določite drugo točko loka`, `Določite končno točko loka`: lok skozi tri točke.
- `C`: `Določite središče loka`, `Določite začetno točko loka`, `Določite končno točko loka`. Lok teče v nasprotni smeri urinega kazalca od začetka do konca.

### RECTANG

Aliasi: `REC`, `RECTANGLE`. Zaprta polilinija.

- `Določite prvo točko oglišča`, `Določite drugo točko oglišča`. Vnesite `@width,height` za drugo oglišče.

### POLYGON

Aliasi: `POL`. Pravilni mnogokotnik kot zaprta polilinija.

- `Vnesite število stranic <4>` (3 do 1024)
- `Določite središče mnogokotnika`
- `Vnesite možnost [Včrtan v krog (I)/Očrtan krogu (C)] <I>`
- `Določite polmer kroga`: kliknite ali vnesite točko; njena razdalja nastavi velikost, njena smer zasuče mnogokotnik.

### ELLIPSE

Aliasi: `EL`.

- `Določite krajišče osi elipse [Središče (C)]`, `Določite drugo krajišče osi`, `Določite razdaljo do druge osi`
- `C`: `Določite središče elipse`, `Določite krajišče osi`, nato razdaljo do druge osi.
- `I` (`Isocircle`, samo med vklopljenim {{cmd:ISODRAFT}}): središče, nato polmer ali `Premer`: elipsa, ki jo krog kaže na trenutni izometrični ravnini.

### HATCH

Aliasi: `H`, `BH`, `BHATCH`; ali {{ui:Šrafura}} na orodni vrstici. Najprej izpiše trenutni vzorec, merilo in kot.

- `Določite notranjo točko [Izberi predmete (S)/Vzorec (P)/Merilo (SC)/Kot (A)]`, ponovljeno (`Razveljavi (U)`, ko je območje že tu). Vsak klik doda zaprto območje okoli njega, z zaprtimi oblikami znotraj kot otoki. Enter naredi eno šrafuro iz vseh.
- `S`: `Izberite zaprte predmete` (zaprte polilinije, krogi, zaprte elipse).
- `P`: `Vnesite ime vzorca, SOLID ali ? za seznam <trenutni>`. `SC`: `Določite merilo vzorca`. `A`: `Določite kot vzorca`.
- `G` (Prelivanje): polnilo je prelivanje namesto vzorca. Glejte {{cmd:GRADIENT}} za njegova vprašanja.

Glejte [Šrafura in polnila površin](topic:hatch).

### GRADIENT

Aliasi: `GD`. Zapolni območje s prelivanjem ene ali dveh barv. Najprej vpraša za prelivanje, nato nadaljuje, kot to naredi {{cmd:HATCH}} (`Določite notranjo točko`, `S` za zaprte predmete, {{key:Enter}}, da končate).

- `Vnesite možnost prelivanja [Vrsta (T)/Ena barva (O)/Dve barvi (TW)/Kot (A)/Središčno (C)/Izhod (X)] <X>`, ponovljeno; vsakič izpiše prelivanje, kot je zdaj.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` ali eno od njih obrnjeno (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Prve črke so dovolj.
- `O`: ena barva, nato njen odtenek od 0 do 1 (0 jo zatemni v črno, 0,5 je sama barva, 1 jo zaznamuje v belo). `TW`: prva in druga barva. Barva je število od 1 do 255, tri števila, kot `255,128,0`, ali `#rrggbb`.
- `A`: kot, pod katerim teče prelivanje. `C`: središčno Da ali Ne (Ne premakne sredino prelivanja na eno stran).
- Zavrne barvo ali vrsto, ki je ne pozna, in odtenek zunaj 0 do 1.

{{cmd:HATCHEDIT}} `G` in {{ui:Lastnosti}} (Prelivanje) spremenita prelivanje kasneje ali spremenita katero koli šrafuro v prelivanje. Prelivanje je prikazano na zaslonu in izrisano. DWG 2004 in novejši ga hranijo kot pravo šrafuro s prelivanjem; DXF 2000 in DWG 2000 ga hranita za CadCraft, drugi programi pa vidijo polno polnilo v prvi barvi.

### HATCHGENERATEBOUNDARY

Aliasi: `HGB`. Ponovno naredi mejo iz šrafure, ki jo je izgubila. `Izberite šrafure` (ali jih izberite prej), nato `Povežite vsako šrafuro z njeno novo mejo, da ji bo sledila? [Da (Y)/Ne (N)] <Da>`.

- Vsaka zanka šrafure postane zaprta polilinija na sloju šrafure; nove polilinije ostanejo izbrane. Ukrivljen rob se vrne kot kratki ravni kosi, ki jih šrafura ohrani.
- Z `Da` šrafura sledi svoji novi meji, kot šrafura, narejena z {{cmd:HATCH}}. En korak razveljavitve.
- Pove, če šrafura ni bila izbrana.

### POINT

Aliasi: `PO`; ali {{ui:Risanje}} › {{ui:Več}} › {{ui:Točka}}. Točkovni predmeti, po eden na klik, dokler ne pritisnete Enter.

- `Določite točko`

### XLINE

Aliasi: `XL`; ali {{ui:Risanje}} › {{ui:Več}} › {{ui:Pomožna premica}}. Pomožne premice, neskončne v obe smeri. Glejte [Pomožne premice in poltraki](topic:construction-lines).

- `Določite točko [Vodoravna (H)/Navpična (V)/Kot (A)/Razpolovnica (B)/Odmik (O)]`, nato `Določite točko na premici` za vsako premico, dokler ne pritisnete Enter.
- `A`: `Vnesite kot pomožne premice [Referenca (R)] <0>`; `R` najprej vpraša `Izberite objekt premice`.
- `B`: `Določite oglišče kota`, `Določite začetno točko kota`, nato `Določite končno točko kota` za vsako premico.
- `O`: `Določite razdaljo odmika [Skozi (T)] <Skozi>`, nato `Izberite objekt premice` in `Določite stran za odmik` (ali `Določite točko na premici`) za vsako premico.

### RAY

Brez aliasov; ali {{ui:Risanje}} › {{ui:Več}} › {{ui:Poltrak}}. `Določite začetno točko`, nato `Določite točko na poltraku` za vsak poltrak, dokler ne pritisnete Enter.

### TEXT

Aliasi: `DT`, `DTEXT`; ali {{ui:Besedilo}} na orodni vrstici. Enovrstično besedilo; vsaka vrstica je svoj predmet.

- `Določite začetno točko besedila [Poravnava (J)]`
- `J`: `Vnesite možnost [Levo/Središče/Desno/Sredina/TL/MC] <L>`, nato `Določite vstavitveno točko besedila`
- `Določite višino <trenutna višina besedila>`
- `Določite kot zasuka besedila <0>`
- `Vnesite besedilo`, ponovljeno: vsak Enter začne naslednjo vrstico pod njo. Enter na prazni vrstici konča. Tu {{key:Space}} vnese presledek.

### DIVIDE

Aliasi: `DIV`. {{cmd:DIVIDE}} postavi oznake na črto, lok, krog, polilinijo, zlepek ali elipso, ki jo razdelijo na enake dele. Izberite predmet, nato podajte število delov (2 do 32767). Odprt predmet dobi eno oznako manj od delov; zaprt dobi oznako tudi na začetku. Sam predmet ni prerezan. Oznake so točke; `Block` namesto tega vpraša za blok te risbe in ali se zasuka, da sledi predmetu. Dolžine vzdolž zlepkov in elips se merijo vzdolž kratkih tetiv. Zavrne besedilo, šrafure in druge predmete brez dolžine.

### MEASURE

Aliasi: `ME`. {{cmd:MEASURE}} postavi oznako vsako podano dolžino vzdolž črte, loka, kroga, polilinije, zlepka ali elipse, štetih od krajišča, najbližjega vašemu izboru (zaprt predmet: od njegovega začetka). Dolžino podate tako, da jo vnesete ali z dvema točkama. Daljni konec odprtega predmeta ne dobi oznake. `Block` na vsaki oznaki postavi blok namesto točke. Zavrne dolžino 0, daljšo od predmeta, in tisto, ki bi naredila več kot 32767 oznak.

### BOUNDARY

Aliasi: `BO`, `BPOLY`. {{cmd:BOUNDARY}} naredi zaprto polilinijo okoli območja, ki vsebuje točko, ki jo izberete, iz vseh črt, lokov, krogov, polilinij in krivulj, ki ga omejujejo na zaslonu. Kosi, ki ležijo na loku ali krogu, se vrnejo kot odseki loka; kosi elips in zlepkov se vrnejo kot kratki ravni odseki. Z vklopljenimi `Islands` (začetna nastavitev) dobi vsako zaprto območje znotraj njega tudi svojo polilinijo. Še naprej izbirajte točke; Enter konča. Predmeti, ki omejujejo območje, ostanejo nedotaknjeni. Pove, če nobeno zaprto območje ne vsebuje točke.

### BLEND

{{cmd:BLEND}} nariše zlepek med krajiščema dveh odprtih krivulj. Izberite vsako krivuljo blizu konca, ki ga želite spojiti. `CONtinuity` izbere `Tangent` (zlepek zapusti in pride vzdolž obeh krivulj) ali `Smooth` (poleg tega sledi, kako se krivita na koncih); izbira se ohrani za sejo. Dve krivulji se ne spremenita. Zavrne zaprte predmete in dva konca, ki se že stikata.

### REGION

Aliasi: `REG`. {{cmd:REGION}} spremeni zaprte predmete v regije: ploske površine, ki jih lahko združite, prerežete in izmerite. Izberite kroge, zaprte polilinije, zaprte elipse ali zaprte zlepke, ali črte, loke in odprte polilinije, ki zaprejo zanko od konca do konca; vsaka zanka postane ena regija in nadomesti predmete, iz katerih je nastala. Loki ostanejo loki; elipse in zlepki postanejo kratki ravni odseki. Kar ni zaprto in ne zapre nobene zanke, ostane, kot je, in pove se, koliko je takšnih. V risbi je regija ena ali več zaprtih polilinij, držanih skupaj kot neimenovana skupina, zato klik izbere celotno regijo, kopija pa je regija zase; drugi programi, ki odprejo datoteko, vidijo zaprte polilinije.

Če so v risbi regije, {{cmd:UNION}}, {{cmd:SUBTRACT}} in {{cmd:INTERSECT}} na zavihku 2D delujejo na regijah: `UNION` združi izbrane regije v eno (regije, ki so ločene, postanejo ena regija z več obrisi), `SUBTRACT` vpraša za regije, od katerih odštejete, nato za tiste, ki jih odvzamete (luknja ostane del regije), `INTERSECT` ohrani območje, ki si ga vse delijo. Vsak pove površino rezultata in je en korak razveljavitve. Zavrnejo, ko ne bi ostalo nič ali ni nič skupnega. Na zavihku 3D in v risbi brez regij enaki ukazi delujejo na telesih kot prej.

## Spreminjanje

Aliasi: `MT`, `T`; ali {{ui:Odstavek}} na orodni vrstici. Odstavčno besedilo, ki se prelomi v določeno širino, vneseno na mestu.

- `Določite prvo točko oglišča`
- `Določite nasprotno oglišče [Višina (H)/Poravnava (J)/Razmik vrstic (L)/Zasuk (R)/Širina (W)]`: širina med obema ogliščema je mesto, kjer se besedilo prelomi. `H` vpraša `Določite višino`, `J` `Vnesite poravnavo [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Vnesite faktor razmika vrstic (0,25 do 4)`, `R` `Določite kot zasuka`, `W` `Določite širino (0 za brez preloma)` in preskoči drugo oglišče.
- Nato se na risbi odpre okno: vtipkajte, {{key:Enter}} za nov odstavek, {{key:Mod+Enter}} ali klik zunaj, da končate, {{key:Esc}}, da prekličete. Njegova vrstica nastavi višino, razmik vrstic, širino in poravnavo. Glejte [Dodajanje besedila in oznak](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliasi: `ED`, `DDEDIT`; ali dvakrat kliknite besedilo. `Izberite besedilo za urejanje`, ponovljeno, dokler ne pritisnete {{key:Enter}}: vsako se odpre v istem oknu. Če se začne na izbranem ali dvakrat kliknjenem besedilu, ureja tega in konča.
### ERASE

Aliasi: `E`, `DELETE`; ali pritisnite {{key:Delete}} z izbranimi predmeti.

- `Izberite objekte` (preskočeno, ko so predmeti že izbrani)

### MOVE

Aliasi: `M`.

- `Izberite objekte`
- `Določite osnovno točko [Premik (D)]`, `Določite drugo točko`
- `D`: `Določite premik`, vnesen kot `dx,dy`.

### COPY

Aliasi: `CO`, `CP`. Kopira tolikokrat, kolikor točk podate.

`Matrika` pri pozivu za drugo točko naredi vrsto naenkrat: podajte število elementov (izvirnik šteje kot enega), nato točko, kamor gre prva kopija; druge sledijo pri enakem razmiku. `Prilagodi (F)` naredi to točko mesto zadnje kopije, ostale pa so enakomerno razporejene med njima.

- `Izberite objekte`
- `Določite osnovno točko [Premik (D)]`
- `Določite drugo točko [Razveljavi (U)]`, ponovljeno, dokler ne pritisnete Enter. `U` vzame nazaj zadnjo kopijo.

### ROTATE

Aliasi: `RO`.

- `Izberite objekte`, `Določite osnovno točko`
- `Določite kot zasuka <zadnji kot>`: stopinje, pozitivne v nasprotni smeri urinega kazalca; ali kliknite točko, da zasukate proti njej.

### SCALE

Aliasi: `SC`.

- `Izberite objekte`, `Določite osnovno točko`
- `Določite faktor merila`: vnesite faktor, na primer `0.5` ali `2`. Kliknjena točka da svojo razdaljo od osnovne točke kot faktor.

### MIRROR

Aliasi: `MI`.

- `Izberite objekte`
- `Določite prvo točko zrcalne črte`, `Določite drugo točko zrcalne črte`
- `Izbrišem izvorne objekte? [Da/Ne] <N>`

### ALIGN

Aliasi: `AL`; ali {{ui:Spreminjanje}} › {{ui:Več}} › {{ui:Poravnaj}}.

- `Izberite objekte`
- `Določite prvo izvorno točko`, `Določite prvo ciljno točko`
- `Določite drugo izvorno točko (Enter za nadaljevanje)`, `Določite drugo ciljno točko`
- `Določite tretjo izvorno točko (Enter za nadaljevanje)`, `Določite tretjo ciljno točko`
- Z dvema paroma: `Skaliram predmete na podlagi poravnalnih točk? [Da/Ne] <N>`

Glejte [Poravnava predmetov](topic:modify-objects#align-objects).

### ALIGNTO

- `Izberite objekte` (ali izbor), `Poravnaj [Levo/Središče/Desno/Zgoraj/Sredina/Spodaj] <Levo>`, `Na [Izbor/Prvi/Zadnji/Točka] <Izbor>`; `P` vpraša za točko. Izbor ostane.

### DISTRIBUTE

- `Izberite objekte` (vsaj tri), `Razporedi [Vodoravno/Navpično] <Vodoravno>`, `Razporedi enakomerno [Središča/Razmiki] <Razmiki>`. Zunanja dva ostaneta; izbor ostane.

### ALIGNPANEL

Aliasi: `ALP`; ali {{ui:Spreminjanje}} › {{ui:Več}} › {{ui:Poravnaj in razporedi}}. Odpre podokno, ki z klikom zažene ALIGNTO in DISTRIBUTE.

### LASER

Aliasi: `LASERCUT`; ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Laser…}}. Odpre podokno Laser nad risbo: kaj naredi vsak sloj (rez, zarez, graviranje, polnilo, slika), predogled, G-koda GRBL za shranjevanje ter uokvirjanje in pošiljanje prek Web Serial. Glejte [Pošljite risbo laserju](topic:laser-cutting).

### STRETCH

Aliasi: `S`; ali {{ui:Raztegni}}. `Izberite objekte za raztegovanje`: povlecite križna okna (ali vnesite `C`) čez konce, da premaknete. `Določite osnovno točko [Premik (D)]`, `Določite drugo točko`. Točke znotraj oken se premaknejo: konci črt, oglišča polilinij (odseki lokov ohranijo svojo višino), točke kot; krogi, elipse, besedilo, točke in bloki se premaknejo v celoti, ko je njihovo središče ali vstavitvena točka znotraj. Izbor, narejen pred ukazom, ohrani križna okna (in lasse), ki so ga naredila, zato se raztegnejo na enak način. Brez okna se predmeti premaknejo v celoti.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliasi: `AR`; ali {{ui:Matrika}}. `Izberite objekte`, nato `Vnesite vrsto matrike [Pravokotna/POlarna] <Pravokotna>` (samo ARRAY).

- Pravokotna se začne pri 4 stolpcih × 3 vrsticah, z razmikom 1,5-kratnika velikosti predmetov, prikazana kot predogled. `Vnesite možnost [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` vpraša za stolpce in vrstice, `S` razdalje med stolpci in med vrsticami (negativno gre levo ali dol), `COL` in `R` vsak za eno smer.
- Polarna vpraša `Določite središčno točko matrike`, začne pri 6 elementih vse naokoli, zasukanih. `Vnesite možnost [Elementi/Kot polnjenja/ZAsuk elementov/eXit] <X>`: `I` elementi, `F` kot polnjenja (+ v nasprotni smeri urinega kazalca, − v smeri urinega kazalca), `ROT` Da ali Ne.
- {{key:Enter}} (eXit) naredi kopije kot navadne predmete. En korak razveljavitve.
- `AS` (ASsociative) preklaplja med navadnimi kopijami in matriko, ki ostane urejljiva: en predmet, ki ga spremenite pozneje z {{cmd:ARRAYEDIT}}, z njegovimi ročicami ali v Lastnostih. Izbira se pomni ({{cmd:ARRAYASSOCIATIVITY}}); začne se na navadnih kopijah.

### ARRAYPATH

Kopije vzdolž krivulje. `Izberite objekte`, nato `Izberite krivuljo poti`: črta, lok, krog, elipsa, polilinija ali zlepek (ne eden od predmetov, ki se razmnožujejo). Pot se začne na krajišču, bližjem predmetom, prvi element pa so predmeti tam, kjer so.

- `Vnesite možnost [Metoda/Elementi/Razmik/Poravnaj/ASsociative/eXit] <X>`, s predogledom. `M`: `Divide` razporedi elemente enakomerno po celi poti, `Measure` postavi enega vsako določeno razdaljo naprej. `I`: število elementov (pri Measure 0 pomeni toliko, kolikor se jih prilega; število čez konec poti je omejeno na to, kar se prilega). `SP`: razdalja med elementi vzdolž poti (preklopi na Measure). `AL`: Da zasuka vsak element, da sledi poti, Ne jih pusti pokonci.
- `AS` kot v {{cmd:ARRAY}}. Ko je vklopljen, matrika ohrani svojo kopijo oblike poti: poznejše urejanje krivulje poti ne premakne elementov.
- Zavrne pot, ki ni krivulja, in en element.

### ARRAYEDIT

Spremeni matriko, narejeno z ASsociative. `Izberite matriko` (ali jo izberite prej). Izpiše, kakšna matrika je zdaj, nato sprašuje do {{key:Enter}}:

- Pravokotna: `COL` stolpci in njihov razmik, `R` vrstice in njihov razmik, `A` kot, pod katerim tečejo stolpci.
- Polarna: `I` elementi, `F` kot polnjenja, `ROT` zasuk elementov Da ali Ne.
- Pot: `M` Divide ali Measure, `I` elementi, `SP` razmik, `AL` poravnava s potjo.
- `S` (Source) odpre predmete, ki se ponavljajo, zase, kot urejevalnik blokov. Tam risite in urejajte; {{cmd:ARRAYCLOSE}} shrani ali zavrže, vsi elementi pa sledijo.
- `REP` (REPlace): `Izberite nadomestne predmete`, `Določite osnovno točko nadomestnih predmetov`, nato kliknite elemente, ki jih nadomestite, in {{key:Enter}}. Ti elementi prikažejo nadomestilo namesto tega; nadomestni predmeti zapustijo risbo in živijo v matriki. `RES` (RESet) ponovno pokaže izvorne predmete v vsakem elementu.
- Vsaka sprememba je en korak razveljavitve. Zavrne navadne kopije, navadni sklic na blok in matriko na zaklenjenem sloju.

Enake številke so v Lastnostih pod Matrika, matrika pa ima ročice: njena osnovna točka jo premakne, ročica pri drugem elementu nastavi razmik, ročica za zadnjim elementom nastavi število (polarna: drugi element nastavi, koliko elementov, zadnji element kot polnjenja). {{cmd:EXPLODE}} spremeni matriko nazaj v navadne kopije.

### ARRAYCLOSE

Konča {{cmd:ARRAYEDIT}} Source: `Shranim spremembe izvornih predmetov matrike? [Shrani/Zavrzi] <Shrani>`. Pove, če nobeni izvorni predmeti matrike niso odprti. {{cmd:BCLOSE}} naredi isto.

### ARRAYASSOCIATIVITY

`Vnesite novo vrednost za ARRAYASSOCIATIVITY (1 = matrike ostanejo urejljive, 0 = navadne kopije)`. Nastavi, s čim začnejo {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR in {{cmd:ARRAYPATH}}; njihova možnost `AS` spremeni isto nastavitev. Pomni se v tem brskalniku.

### OFFSET

Aliasi: `O`. Črte, loki, krogi in polilinije.

Kjer se polilinija premakne navzven in njeni ravni odseki pri ogliščih razideta, {{cmd:OFFSETGAPTYPE}} odloči, kako se reža zapre.

- `Določite razdaljo odmika [Skozi] <zadnja razdalja, ali Skozi>`
- `Izberite predmet za odmik`, nato `Določite točko na strani za odmik` (ali, s Skozi, `Določite točko skozi`), ponovljeno, dokler ne pritisnete Enter.

### OFFSETGAPTYPE

- `Odmik reže v ogliščih: 0 podaljšaj, 1 zaobli, 2 posnemi`: kako {{cmd:OFFSET}} zapre reže na zunanjih ogliščih polilinije. `0` podaljša odseke, dokler se ne srečajo (začetna nastavitev), `1` jih poveže z lokom okoli starega oglišča, `2` z ravnim rezom. Notranji vogali in odseki lokov niso prizadeti. Ohranjeno za to sejo.

### EXTRIM

{{cmd:EXTRIM}} obreže vse na eni strani roba. Izberite rezalni rob (črto, lok, krog, polilinijo, elipso, zlepek ali pomožno črto), nato kliknite točko na strani, ki jo želite očistiti: vsaka črta, lok, krog, polilinija in pomožna črta, ki seka rob, izgubi svoj del na tej strani, kjer se začne pri robu. Med izbiranjem strani kose, ki bi odšli, sledijo kazalcu. Za zaprt rob sta strani notranja in zunanja. Predmeti, ki se samo dotikajo roba, ter besedilo, šrafure, zlepki in elipse, ki ga sekajo, ostanejo, kot so. En korak razveljavitve.

### TRIMEXTENDMODE

- `Vnesite novo vrednost za TRIMEXTENDMODE (1 Hitro, 0 Standardno)`: kako se {{cmd:TRIM}} in {{cmd:EXTEND}} začneta. `1` Hitro: vsak predmet je rezalni rob ali meja. `0` Standardno: najprej vprašata za robove. Tudi `(setvar "TRIMEXTENDMODE" 0)` v LISP.

### TRIM

Aliasi: `TR`. Najprej izpiše `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. V hitrem načinu je vsak viden predmet rezalni rob, predmet, ki ga nič ne seka, pa se izbriše; v standardnem načinu najprej vpraša `Izberite rezalne robove (Enter = vsi predmeti)` in reže samo na njih.

- `Izberite predmet za obrezovanje ali Shift-izberite za podaljšanje [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, ponovljeno: kliknite kos za odstranitev (prikaže se sivo in črtkano, medtem ko kazalec počiva nanj), povlecite pot čez več kosov (vsi gredo v enem koraku) ali kliknite dve prazni mesti za ograjo med njima. {{key:Shift}} namesto tega podaljša. `T` izbere rezalne robove (standardni način), `F` vpraša za točke ograje, `C` dve oglišči okna (delni kosi znotraj gredo), `O` vpraša `Vnesite možnost načina obrezovanja [Quick/Standard]`, `E` vpraša `Vnesite način podaljška implicitnega roba [Extend/No extend]` (EDGEMODE), `R` izbriše predmete, ki jih izberete, `U` razveljavi zadnji izbor ali potezo. Enter konča. Glejte [Obrezovanje in podaljševanje](topic:trim-and-extend).

- Klik na šrafuro jo prereže: rezalni robovi razdelijo šrafirano območje, kos, na katerega ste kliknili, pa se odstrani (na mestu ni ostal narisan obris). Šrafura ohrani svoj vzorec ali prelivanje; šrafura, ki je bila povezana z mejo, ni povezana po tem, ker je ne zapolnjuje več. Pove, če noben rezalni rob ne razdeli šrafure tam, če je klik zunaj šrafure in če nič ne bi ostalo (uporabite {{cmd:ERASE}}). Potegnjena pot ali ograja ne reže šrafur.

### EXTEND

Aliasi: `EX`. Isto kot TRIM v obratni smeri: `Izberite predmet za podaljšanje ali Shift-izberite za obrezovanje [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Klik podaljša konec, najbližji njemu, do naslednje meje; potegnjena pot ali ograja podaljša vsak predmet, ki ga prečka; {{key:Shift}} obreže. `B` izbere mejne robove (standardni način). Način in rob sta skupna s TRIM.

### LINKVIEWS

Aliasi: `SYNCVIEWS`; ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Poveži poglede podoken}}, ali ikona povezave na zavihkih risbe. `Poveži poglede podoken [ON/OFF]` (Enter vzame drugo stanje): medtem ko je vklopljeno, premik ali povečava v aktivnem podoknu premakne vsako podokno, ki kaže isto vrsto prostora. Glejte [Razdelitev zaslona](topic:split-screen).

### OPENIN3D

Brez aliasov; ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Odpri v ModelCraft}}, kjer aplikacija za 3D modeliranje sprejme predano risbo. Odpre jo tam v novem zavihku, kot DWG (nič se ne naloži). Če brskalnik zavihek blokira, to pove.

### LASSOMODE

`Vnesite novo vrednost za LASSOMODE (1 = lasso, 0 = pravokotnik)`: kaj riše pritisk in vlečenje na prazno mesto. Enako kot Nastavitve › CadCraft › Vlečenje za izbiro. Glejte [Izbor z lasom](topic:lasso-selection).

### FILLET

Aliasi: `F`. Črte, loki, krogi in polilinije. Najprej izpiše `Current settings: Mode = TRIM, Radius = 0`.

- `Izberite prvi predmet [Razveljavi (U)/Polilinija (P)/Polmer (R)/Obreži (T)/Več (M)]`
  - `R` vpraša `Določite polmer zaobljenja <zadnji>`. `T` vpraša `Vnesite možnost načina obrezovanja [Trim/No trim]`: z `No trim` predmeti ostanejo, kakor so, in doda se samo lok.
  - `M` ohrani ukaz za več oglišč, dokler ne pritisnete {{key:Enter}}; `U` vzame nazaj zadnje oglišče, ne da bi zapustil ukaz.
  - `P` vpraša `Izberite 2D polilinijo [Radius]` in zaobli vsako oglišče, kjer se stikata dva ravna odseka. Zaobljenosti, ki jih že ima, so nadomeščene z novim polmerom; polmer 0 jih odstrani. Oglišča, katerih stranice so prekratke za polmer, so pustljena in prešteta.
- `Izberite drugi predmet ali Shift-izberite za uporabo oglišča [Radius]`. Držite {{key:Shift}} med klikom za ostro oglišče, ne glede na polmer.

Kliknite vsak predmet na delu, ki ga želite ohraniti. Dve črti, ki se ne stikata, se podaljšata. Dve vzporedni črti dobita polkrog čez režo na koncu prve črte, najbližji vašemu kliku. Krog nikoli ni prerezan. Dva odseka ene polilinije, ki sta drug ob drugem, dobita lok znotraj polilinije; polilinija in drug predmet delujeta, kadar rez pristane na prvem ali zadnjem odseku polilinije.

### CHAMFER

Aliasi: `CHA`. Črte in ravni odseki polilinij. Najprej izpiše trenutne razdalje (ali dolžino in kot).

- `Izberite prvo črto [Razveljavi (U)/Polilinija (P)/Razdalja (D)/Kot (A)/Obreži (T)/Način (E)/Več (M)]`
  - `D` vpraša `Določite razdaljo prvega posnetja <zadnja>` in `Določite razdaljo drugega posnetja <prva>`: prva se odreže od prve črte, ki jo izberete, druga od druge.
  - `A` vpraša `Določite dolžino posnetja na prvi črti` in `Določite kot posnetja od prve črte`.
  - `E` (Način) izbere, katera od obeh uporabi naslednje posnetje. `T`, `M`, `U` in `P` delujejo kot pri {{cmd:FILLET}}.
- `Izberite drugo črto ali Shift-izberite za uporabo oglišča [Razdalja/Kot/Način]`. {{key:Shift}}+klik naredi ostro oglišče.

Razdalja, daljša od črte, je zavrnjena (`Distance is too large.`).

### BREAK in BREAKATPOINT

Aliasi: `BR`. `Izberite predmet` (kjer kliknete, je prva točka), `Določite drugo točko preloma [Prva točka (F)]`; `F` vpraša `Določite prvo točko preloma` in `Določite drugo točko preloma`. Vmesni del odide; na krogu v nasprotni smeri urinega kazalca od prve točke. BREAKATPOINT vpraša `Določite točko preloma` in predmet tam razdeli na dva dela (ni krog).

### LENGTHEN

Aliasi: `LEN`. `Izberite predmet za merjenje [DElta/Percent/Total/DYnamic]`: izbor izpiše `Current length` (in vključen kot loka) in ponovno vpraša. `DE` vpraša `Vnesite dolžino spremembe (negativno skrajša) [Kot]`, `P` `Vnesite dolžino v odstotkih`, `T` `Določite skupno dolžino [Kot]`, `DY` vleče. Nato `Izberite predmet za spremembo [Razveljavi (U)]`, ponovljeno: spremeni se konec, najbližji klik. Črte, loki in odprte polilinije.

### JOIN

Aliasi: `J`. `Izberite predmete za združitev`. Črte, loki in odprte polilinije, ki se stikajo od konca do konca, postanejo polilinije (zaprte, kadar se veriga zapre); črte na eni črti postanejo ena črta; loki ene krožnice postanejo en lok ali krog. Zgodovina pove, koliko predmetov se je združilo in koliko ne.

### MATCHPROP

Aliasi: `MA`, `PAINTER`. `Izberite izvorni predmet`, nato `Izberite ciljne predmete [Nastavitve (S)]` in {{key:Enter}}. Kopira sloj in barvo, med predmeti iste vrste pa še višino in širino besedila, velikosti kot ali vzorec šrafure. `S` vpraša `Vklopi ali izklopi lastnost [Barva/Sloj/Besedilo/Kota/Šrafura]`, ponovljeno do {{key:Enter}}; izbira se pomni za sejo.

### EXPLODE

Aliasi: `X`. Polilinije postanejo črte in loki, sklici na bloke postanejo svoji predmeti, kote postanejo črte, puščice in besedilo. Matrika, ki ostane urejljiva ({{cmd:ARRAYEDIT}}), postane navadne kopije svojih predmetov.

- `Izberite objekte`

### GROUP

Alias: `G`. {{cmd:GROUP}} da izbranim predmetom ime, ki ga delijo. Izberite predmete, nato vnesite ime (brez presledkov; `?` našteje skupine; Enter naredi neimenovano skupino) in, za imenovano skupino, izbirni opis. Od takrat naprej klik na enega od njih ali okno, ki zajame enega, izbere vse, zato se skupaj premaknejo, kopirajo in izbrišejo; vsak predmet je še vedno svoj predmet. Predmet je lahko v več skupinah. Kopija cele skupine je nova neimenovana skupina; kopija enega člana sam se pridruži skupini. Skupine pripadajo prostoru, v katerem so nastale (model ali list). Ohranijo se, ko shranite kot DWG ali DXF in datoteko spet odprete v CadCraft; datoteke DXF 2000 jih nosijo tudi kot predmete skupin za druge programe, skupine, narejene v drugem programu, pa se preberejo, ko odprete DXF ali DWG.

### UNGROUP

{{cmd:UNGROUP}} razdeli skupine: izberite predmete skupin (vsaka skupina, v kateri so, se razdeli) ali vnesite `Name` in ime skupine. Predmeti ostanejo v risbi. En korak razveljavitve vrne skupine.

### GROUPEDIT

{{cmd:GROUPEDIT}} spremeni eno skupino. Izberite enega od njenih predmetov ali `Name` in njeno ime; skupina, ki je že izbrana, se vzame, kot je. Nato: `Add` predmete (izbrane enega za drugim, ne skupine za skupino), `Remove` predmete, `REName` skupino, spremenite njen `Description` ali nastavite `Selectable` (ali klik na en predmet izbere celotno skupino). `eXit` ali Enter konča. Skupina brez predmetov je izginila.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: z `1` (začetna nastavitev) klik ali okno na zgrupiranem predmetu izbere celotno skupino; z `0` posamezni predmeti, zato lahko urejate enega člana. Ohranjeno za to sejo.

## Odložišče

Odložišče CadCraft: deluje znotraj risbe, med risbami in med zavihki CadCraft v tem brskalniku. Glejte [Kopiraj, prilepi in podvoji](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ali {{ui:Kopiraj}} v skupini {{ui:Urejanje}}. Kopira predmete v odložišče skupaj z bloki in sloji, ki jih uporabljajo. Predmeti ostanejo izbrani.

- `Izberite objekte za kopiranje` (preskočeno, ko so predmeti že izbrani)

### CUTCLIP

{{key:Mod+X}}, ali {{ui:Izreži}} v meniju {{ui:Več}}. Kopira predmete v odložišče in jih nato izbriše (en korak razveljavitve).

- `Izberite objekte za izrez` (preskočeno, ko so predmeti že izbrani)

### COPYBASE

Kopira predmete v odložišče z osnovno točko, ki jo izberete; prilepljanje postavi to točko.

- `Določite osnovno točko`
- `Izberite objekte za kopiranje`

### PASTECLIP

{{key:Mod+V}}, ali {{ui:Prilepi}} v skupini {{ui:Urejanje}}. Kopija sledi kazalcu in visi od spodnjega levega kota svojega obsega (ali od njegovega središča, ali od točke `COPYBASE`; glejte [Nastavitve CadCraft](topic:settings)).

- `Določite vstavitveno točko`

Prilepljeni predmeti so izbrani. Blok, ki ga risba že ima pod istim imenom, ohrani definicijo te risbe.

Ko je območje, kopirano v MarkupCraft, novejše od tistega, kar je kopiral CadCraft (in je mlajše od 6 ur), {{key:Mod+V}} in `PASTECLIP` namesto tega prilepita to območje: glejte `PASTEAREA`.

### PASTEAREA

Aliasi: `PAREA`. {{ui:Prilepi kopirano območje}} v meniju {{ui:Več}}. Prilepi območje, kopirano z {{ui:Kopiraj območje}} v MarkupCraft, kot sliko v pravi velikosti. Glejte [Slike v risbi](topic:pictures).

- `Določite spodnji levi kot kopiranega območja`
- `Merilo njegove velikosti na papirju (100 za list 1:100; Points: dve točki na njem in njuna prava razdalja) [Points] <1>` (samo, če list ni imel merila risbe): število, {{key:Enter}} za velikost na papirju ali `P`, nato `Prva točka na prilepljenem območju`, `Druga točka na prilepljenem območju` in njuna prava razdalja.

### PASTEORIG

{{key:Mod+Shift+V}}, ali {{ui:Prilepi na isto mesto}} v meniju {{ui:Več}}. Prilepi na koordinate, iz katerih so bili predmeti kopirani. Ne vpraša ničesar.

### DUPLICATE

Aliasi: `DUP`. {{key:Mod+D}}, ali {{ui:Podvoji in premakni}} v meniju {{ui:Več}}. Kopija predmetov se premika s kazalcem od mesta, kjer je; {{key:Esc}} ne pusti ničesar. Ne uporablja odložišča.

- `Izberite objekte za podvajanje` (preskočeno, ko so predmeti že izbrani)
- `Določite, kam gre kopija (Esc ne pusti ničesar)`: kliknite, vnesite točko, `@dx,dy` (od mesta, kjer je bil kazalec), ali razdaljo proti kazalcu.

### SELECT

Vpraša `Izberite objekte` (z vsemi spodnjimi možnostmi) in pusti izbrano, kar ste izbrali, za naslednji ukaz ali za poznejši `P`.

### QSELECT

Aliasi: `QS`. V brskalniku pogovorno okno {{ui:Hitra izbira}} (glejte [Izbira predmetov](topic:select-objects#select-by-a-rule-quick-select)). Brez njega ukazna vrstica vpraša `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` in `Enter value`. Ujemanja postanejo izbor.

### SELECTSIMILAR

Aliasi: `SIM`. `Izberite objekte [SEttings]` (ali trenutni izbor): izbere vsak predmet iste vrste z istim slojem in barvo (in imenom bloka, vzorcem šrafure). `SE` vpraša `Vklopi ali izklopi lastnost [LAyer/COlor/NAme/PAttern/HEight]`, ponovljeno do {{key:Enter}}.

### FIND

Brez aliasov; ali {{ui:Urejanje}} › {{ui:Več}} › {{ui:Poišči in zamenjaj}}. V brskalniku pogovorno okno {{ui:Poišči in zamenjaj}} (glejte [Dodajanje besedila in oznak](topic:text#find-and-replace-words)). Brez njega: `Enter text to find`, nato `Enter replacement text (Enter: select what is found)`. Išče v besedilu, vrednostih atributov in besedilu kot, na odprtem zavihku ali v izboru.

### SELECTALL in DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) izbere vsak predmet, ki ga lahko urejate na odprtem zavihku. `DESELECT` (aliasa `AI_DESELECT`, `SELECTNONE`; ali {{key:Esc}}) počisti izbor.

## Kote

### DIMLINEAR

Aliasi: `DLI`, `DIMLIN`. Vodoravna ali navpična razdalja.

- `Določite prvo točko podaljška kotne črte [Izberi predmet (S)]` (Enter ali `S`: `Izberite predmet za kotiranje`, nato kliknite črto, lok, krog ali odsek polilinije)
- `Določite drugo točko podaljška kotne črte`
- `Določite mesto kotne črte [Besedilo/Vodoravno/Navpično/Zasukano]`. `T` vpraša za besedilo (`<>` je izmerjena vrednost), `H` in `V` določita smer, `R` vpraša `Določite kot kotne črte <0>`.

### DIMALIGNED

Aliasi: `DAL`, `DIMALI`. Prava razdalja med dvema točkama.

- Izhodišča kot pri {{cmd:DIMLINEAR}}, nato `Določite mesto kotne črte [Besedilo]`.

### DIMANGULAR

Aliasi: `DAN`, `DIMANG`.

- `Izberite lok, krog ali črto, ali Enter za oglišče`
- Lok: njegov kot. Krog: `Določite drugo krajišče kota`. Črta: `Izberite drugo črto`. Enter: `Določite oglišče kota`, `Določite prvo krajišče kota`, `Določite drugo krajišče kota`.
- `Določite mesto kotne črte [Besedilo]`: kliknite znotraj kota, ki ga merite.

### DIMRADIUS in DIMDIAMETER

Aliasi: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Izberite lok ali krog`, nato `Določite mesto kotne črte [Besedilo]`.

### DIMCONTINUE

Aliasi: `DCO`, `DIMCONT`. Nadaljuje od zadnje naredjene linearne ali poravnane kote (ali vpraša `Izberite linearno ali poravnano koto`).

- `Določite drugo točko podaljška kotne črte [Razveljavi (U)]`, ponovljeno do Enter.

### DIMBASELINE

Aliasi: `DBA`, `DIMBASE`. Kot {{cmd:DIMCONTINUE}}, vendar se vsaka kota začne pri prvem izhodišču in je naložena dlje naprej.

### DIMORDINATE

Aliasi: `DOR`, `DIMORD`. `Določite mesto značilnosti`, nato `Določite krajišče vodilke [Xdatum/Ydatum/Besedilo]`. Zapiše, kako daleč je značilnost od izhodišča UCS vzdolž X ali vzdolž Y, na vodilki: vodilka, ki gre večinoma gor ali dol, prebere X, tista, ki gre vstran, prebere Y; `Xdatum` in `Ydatum` določita, katera. Najprej nastavite izhodišče z {{cmd:UCS}} (brez njega je 0,0 risbe). Ročice premaknejo značilnost, izhodišče in konec vodilke, vrednost pa sledi. Shranjeno kot prava ordinatna kota v DWG in DXF. Zavrne konec vodilke na samo značilnosti.

### DIMARC

Aliasi: `DAR`. `Izberite lok ali odsek loka polilinije`, nato `Določite mesto kote dolžine loka [Besedilo]`. Meri vzdolž loka (ne tetive) in pred vrednostjo zapiše simbol loka. Zavrne poln krog, črto ali ravni odsek polilinije. DWG jo ohrani kot kota dolžine loka; DXF jo ohrani kot kotna kota z dolžino kot besedilom, CadCraft pa jo ob odprtju spet odpre kot kot dolžine loka.

### DIMJOGGED

Aliasi: `DJO`, `JOG`. `Izberite lok ali krog`, `Določite nadomestno središčno točko`, `Določite mesto preloma`. Kota polmera za krivuljo, katere središče je daleč ali zunaj lista: črta kote se začne pri točki, ki jo podate, namesto pri središču, z lomom vmes, in še vedno zapiše pravi polmer. DWG jo ohrani kot kota polmera z lomom; DXF jo ohrani kot kota polmera, CadCraft pa jo ob odprtju spet odpre z lomom.

### DIMJOGLINE

Aliasi: `DJL`. `Izberite koto za dodajanje preloma [Odstrani (R)]`, nato `Določite mesto preloma (ali pritisnite Enter)`. Postavi simbol preloma na črto linearne ali poravnane kote, da pokaže, da razdalja ni narisana v merilu; vrednost se ne spremeni. `Remove` ga odstrani. Zavrne druge vrste kot.

### QDIM

Brez aliasov. `Izberite geometrijo za kotiranje`, nato `Določite položaj črte kote [Zvezno/Zamaknjeno/Osnovno/Ordinatno/Polmer/Premer/datumPoint]`. Kotira več predmetov naenkrat, od krajišč črt in odsekov polilinij, središč krogov in lokov, točk in sklicev na bloke. Položaj nad ali pod predmeti meri čez, eden ob njih pa meri navzgor. `Continuous` poveže točke v verigo, `Baseline` meri vse od prve, `Staggered` gnezdi pare od sredine navzven, `Ordinate` da vsaki točki njeno razdaljo od izhodišča (`datumPoint` izbere novo), `Radius` in `Diameter` kotirata vsak krog in lok, ki ga izberete. Način se pomni. Vse, kar naredi, je en korak razveljavitve. Pove, če je manj kot dve točki ali ni lokov ali krogov za Radius in Diameter.

### DIMBREAK

Aliasi: `DBREAK`. `Izberite kote za dodajanje ali odstranjevanje prelomov`, nato `Prelom, kjer druge predmete sekajo [Auto/Manual/Remove] <Auto>`. `Auto` pusti vrzel v kotni in pomožnih črtah povsod, kjer jo seka drug predmet, in jo izračuna znova, ko se ti predmeti ali kota premaknejo. `Manual` (ena kota) vpraša za dve točki in pusti vrzel med njima. `Remove` odstrani vse vrzeli. Vrzel je 1,5-kratnik višine besedila kote.

### DIMSPACE

Brez aliasov. `Izberite osnovno koto`, `Izberite kote za razmik`, `Vnesite vrednost razmika ali Auto <Auto>`. Premakne kotne črte vzporednih linearnih in poravnanih kot (ali kotnih okoli istega oglišča), da so enako oddaljene, merjeno od osnovne kote, vsaka na strani, na kateri je. `0` jih poravna z osnovno; `Auto` je dvakratna višina besedila osnovne kote. Kote, ki niso vzporedne osnovni, ostanejo pri miru.

### DIMINSPECT

Brez aliasov. `Izberite kote`, `Oblika okvirja pregleda [Round/Angular/None/remove] <Round>`, `Vnesite oznako`, `Vnesite stopnjo pregleda <100%>`. Nariše okvir okoli vrednosti z oznako pred njo in stopnjo pregleda za njo. `remove` odstrani okvir. Besedilo tolerance ostane pri vrednosti.

### DIMOVERRIDE

Aliasi: `DOV`, `DIMOVER`. `Vnesite ime spremenljivke kote za preglasitev ali Clear`, `Vnesite novo vrednost za …`, znova do Enter, nato `Izberite kote`. Spremeni te nastavitve samo na izbranih kotah; slog kote se ne spremeni. Vzame spremenljivke, ki so število ali stikalo (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` vrne izbrane kote na njihov slog. Zavrne ime, ki ni taka spremenljivka, in vrednost, ki je ne sprejme.

### DIMREASSOCIATE

Aliasi: `DRE`, `DIMREASSOC`. `Izberite kote`, nato za vsako njene izhodiščne točke podaljška (`Določite prvo izhodiščno točko podaljška na predmetu`: prilepi na krajišče ali sredino črte, oglišče polilinije, središče; Enter pusti točko prosto), ali za polmer, premer, z lomom polmer ali kot dolžine loka `Izberite lok ali krog`. Kota je nato povezana s temi predmeti: ko se premaknejo ali spremenijo velikost, ji sledi v istem koraku razveljavitve in se znova izmeri. Ročni premik povezane točke ali izbris predmeta to povezavo konča. Povezava je shranjena v DWG in DXF 2000 kot lastni podatki CadCraft; drugi programi vidijo navadno koto.

### DIMDISASSOCIATE

Aliasi: `DDA`, `DIMDISASSOC`. `Izberite kote`. Sprosti jih od predmetov, s katerimi so povezane; nič se ne premakne.

### CENTERMARK

Aliasi: `CM`, `DIMCENTER`, `DCE`. `Izberite krog ali lok za dodajanje oznake središča`, znova do Enter. Nariše križ v središču in štiri središčnice tik čez krivuljo (vrsta črte CENTER), kot navadne črte na trenutnem sloju; velikost je določena iz velikosti puščice in skupnega merila trenutnih nastavitev kote, zasukana z UCS. Ne sledijo krogu, če se ta premakne.

### CENTERLINE

Aliasi: `CL`. `Izberite prvo črto`, `Izberite drugo črto`. Nariše črto na pol poti med dvema črtama (vzdolž simetrale, kadar se stikata), nekoliko daljšo od njiju, v vrsti črte CENTER. Navadna črta: ne sledi dvema črtama.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Brez aliasov. Vsaka vpraša `Vnesite novo vrednost za … <trenutna>` in nastavi to velikost za **nove** kote: skupno merilo, višino besedila, velikost puščice, decimalna mesta (do 8), razmik okoli besedila, podaljšek čez črto kote, odmik od izhodišča. Glejte [Nastavitev velikosti kot](topic:dimension-settings).

### DIMLUNIT

Nastavitev kote: oblika novih kot (samo nove; 1 znanstvena, 2 decimalna, 3 inženirska, 4 arhitekturna, 5 ulomkovna).

### DIMSTYLE in -DIMSTYLE

Aliasi: `DST`, `DDIM`, `D`. Upravitelj slogov kote: {{ui:Nastavi kot trenutno}}, {{ui:Novo…}}, {{ui:Spremeni…}}, {{ui:Preimenuj…}}, {{ui:Izbriši}}, {{ui:Primerjaj…}}, {{ui:Uporabi za izbrane}}. `-DIMSTYLE` v ukazni vrstici: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Glejte [Nastavitev velikosti kot](topic:dimension-settings#named-dimension-styles).

### DIMEDIT in DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, nato kote (ali tiste, ki so že izbrane). New vpraša za besedilo (`<>` = izmerjena vrednost); Rotate za kot (0 vrne besedilo nazaj); Oblique za kot kotnih črt od osi X (Enter = nobenega; samo linearne in poravnane kote). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Glejte [Nastavitev velikosti kot](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliasi: `DTU`. `Enote v besedilu novih kot [Enote risbe/mm/cm/m/km]`, ali z izbranimi kotami `Enote v besedilu izbranih kot`. Zapiše izmerjeno dolžino v tej enoti z enoto za njo (DIMLFAC in pripona DIMPOST); `D` se vrne na enote risbe. Glejte [Kote v mm, cm, m ali km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliasi: `RC`. Izpiše `Arc length: … Type: …`, nato `Določite prvo točko [Dolžina loka/Predmet/Pravokotno/Mnogokotno/Prosto]`. Pravokotno vpraša `Določite nasprotno oglišče`; Mnogokotno `Določite naslednjo točko (Enter zaključi oblak) [Razveljavi (U)]`; Prosto sledi kazalcu do klika ali {{key:Enter}}; `O` vpraša `Izberite predmet` in `Obrnem smer? [Da/Ne] <N>` ter predmet spremeni v oblak. `A` vpraša `Določite dolžino vsakega loka`. `R`, `P` in `F` izberejo vrsto za naslednji oblak. Rezultat je zaprta polilinija lokov.

### MLEADER

Aliasi: `MLD`; ali {{ui:Vodilka}}. `Določite mesto puščice vodilke [Velikost puščice/Razdalja pristanka/Blok]`, `Določite mesto pristanka vodilke`, nato besedilo v oknu na mestu (ali, brez njega, `Vnesite besedilo (prazna vrstica konča)`). `Block` najprej vpraša za ime bloka, večkratna vodilka pa pokaže ta blok namesto besedila. Več vodilnih črt: {{cmd:MLEADEREDIT}}. Shranjeno kot prava večkratna vodilka v DWG; DXF ohrani vodilne črte, puščico in besedilo, ki jih nariše.

### MLEADEREDIT

Aliasi: `MLE`. `Izberite večkratno vodilko`, nato `Določite mesto puščice vodilke [Odstrani vodilke/Vsebina bloka/Vsebina besedila]`: vsaka točka doda vodilno črto od nove puščice do istega pristanka, do Enter. `Remove leaders` nato odstrani vodilno črto, na katero kliknete (večkratna vodilka ohrani vsaj eno). `Block content` vpraša za ime bloka in pokaže ta blok namesto besedila (vpraša za njegove atribute); `Text content` vrne besedilo. Vsaka vodilna črta ima svojo ročico. DWG ohrani vsako vodilno črto in blok v eni večkratni vodilki.

### MLEADERALIGN

Aliasi: `MLA`. `Izberite večkratne vodilke`, nato `Izberite večkratno vodilko, na katero poravnate [Distribute/Spacing/Use current spacing]` in `Določite smer`. Premakne pristanke drugih večkratnih vodilk (in njihovo besedilo ali blok) na črto skozi pristanek izbrane v tej smeri; puščice ostanejo, kjer kažejo. `Spacing` jim nastavi tudi enak razmik; `Distribute` vpraša za dve točki in jih enakomerno razporedi med njima. Potrebuje vsaj dve večkratni vodilki.

### MLEADERCOLLECT

Aliasi: `MLC`. `Izberite večkratne vodilke`, nato `Določite mesto zbrane večkratne vodilke [Vertical/Horizontal]` (Enter ohrani mesto prve). Naredi eno večkratno vodilko iz več: vsebina blokov gre v nov blok, ki drži vsak blok vzporedno ali enega pod drugim; vsebina besedila postane ena opomba z vrstico za vsako. Prva večkratna vodilka ohrani svoje vodilne črte; druge so odstranjene. Zavrne mešanico vsebine besedila in bloka.

### TABLE

Aliasi: `TB`; ali {{ui:Opombe}} › {{ui:Več}} › {{ui:Tabela}}. Naredi tabelo: en predmet, ki ga premikate, kopirate, zasučete, skalirate in izrisujete kot vsakega drugega, z njenimi celicami, shranjenimi kot podatki.

- `Število podatkovnih vrstic ali [Paste/File/Style] <3>`, nato `Število stolpcev <3>`, `Višina besedila` in `Zgornje levo oglišče tabele`. Tabela dobi naslovno vrstico (ena združena celica) in glavo nad podatkovnimi vrsticami.
- `P`: tabela iz celic preglednice na odložišču (besedilo z tabulatorjem med celicami). Pritisk {{key:Ctrl+V}} s takšnimi celicami na odložišču naredi isto, razen če je kopija CadCraft novejša (ali CadCraft ne more povedati: potem prilepi svojo kopijo in to pove). `F`: tabela iz datoteke `.csv` ali datoteke z ločilom tabulator. Prva vrstica postane glava; širine stolpcev se prilegajo besedilu.
- `S`: izberite slog tabele za to tabelo (glejte {{cmd:TABLESTYLE}}).
- Zavrne število vrstic ali stolpcev, ki ni celo število, in več celic, kot jih tabela lahko drži (2.000 vrstic, 200 stolpcev, 40.000 celic).
- {{cmd:EXPLODE}} spremeni tabelo v črte in besedilo. Shranjena kot DWG je tabela prava tabelni predmet, ki ga lahko drugi programi urejajo; shranjena kot DXF je blok, ki jo nariše, CadCraft pa jo ob odprtju spet odpre kot tabelo.

### TABLEDIT

Aliasi: `TABLEEDIT`, `TABEDIT`; ali dvakrat kliknite celico. Ureja tabelo.

- `Izberite celico za vnos besedila (Enter za konec) ali [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Kliknite celico ali, z izbrano tabelo, vnesite njeno ime (`B3`: stolpec B, vrstica 3; naslovna vrstica je vrstica 1). V brskalniku se nad celico odpre okno: {{key:Enter}} ohrani besedilo, {{key:Tab}} gre na naslednjo celico, {{key:Alt+Enter}} začne novo vrstico, {{key:Esc}} pusti celico, kakršna je bila.
- Besedilo, ki se začne z `=`, je formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, z `+ - * / ^`, oklepaji in funkcijami, kot sta `sqrt` in `round`. Celica prikaže vrednost; formula, ki poimenuje svojo celico, celico zunaj tabele ali celico brez števila, prikaže `####`, ukazna vrstica pa pove zakaj.
- `R` / `C`: `Insert` ali `Delete` vrstic ali stolpcev pri izbrani celici (koliko, in nad ali pod, levo ali desno). Formule sledijo celicam, ki jih poimenujejo.
- `S`: širina stolpca in višina vrstice. Vrstica ni nikoli nižja, kot potrebuje njeno besedilo. Izbrana tabela ima tudi ročico na robu vsakega stolpca in vsake vrstice.
- `M`: združi od ene izbrane celice do druge; `U`: razdruži. `A`: poravnava (`TL` zgoraj levo … `MC` sredina na sredini … `BR` spodaj desno). `H`: lastna višina besedila te celice (0 = slog). `K`: naredi vrstico naslovno, glavno ali podatkovno. `CL`: izprazni celico.
- Zavrne tabelo na zaklenjenem sloju, brisanje vsake vrstice ali stolpca in združitev, ki bi prerezala drugo združeno celico na dva dela.

### TABLESTYLE

Aliasi: `TS`. Našteje sloge tabel s številom tabel, ki jih uporabljajo, nato `Table style: [New/Set/Edit/Delete/Apply]`.

- Slog hrani višino besedila in poravnavo naslovnih, glavnih in podatkovnih vrstic, rob celice ter katere obrobe so narisane (zunanje, med vrsticami, med stolpci).
- `N` naredi slog iz trenutnega in ga naredi tekočega; `S` nastavi tekoči slog (nove tabele ga prevzamejo); `E` ureja enega: tabele, ki ga uporabljajo, se znova narišejo; `A` da izbranim tabelam tekoči slog; `D` izbriše enega (ne Standard, ne tekoči; tabele, ki so ga uporabljale, ohranijo svoj videz).
- Slogi so shranjeni z risbo (DWG in DXF).

### TABLEEXPORT

Shrani, kar tabela prikazuje, kot datoteko CSV (formula kot svojo vrednost). `Izberite tabelo` ali jo izberite prej. Besedilne celice, ki se začnejo z `=`, `+`, `-` ali `@`, dobijo vodilni `'`, da jih preglednica ne zažene.

### TABLEPASTE

Aliasi: `PASTETABLE`. Naredi tabelo iz celic preglednice na odložišču, nato vpraša za njeno zgornje levo oglišče. Isto kot {{cmd:TABLE}} › `Paste`.

### DATALINK

Aliasi: `DL`. `Data link: [New/List/Remove] <New>`. `N` vpraša za datoteko CSV, postavi tabelo iz nje in si zapomni ime datoteke; `L` našteje povezave z njihovo datoteko, velikostjo, časom branja in številom tabel, ki jih uporabljajo; `R` odstrani povezavo (njene tabele ostanejo navadne tabele).

### DATALINKUPDATE

Aliasi: `DLU`. Znova prebere datoteko podatkovne povezave in znova napolni tabele, povezane z njo (vrstice in stolpci se dodajo ali odstranijo, da se ujemajo). Brskalnik ne more sam odpreti datoteke, zato vas prosi, da znova izberete datoteko. Če je več povezav, vpraša, katero.

### FIELD

Postavi polje v risbo: besedilo, ki si izračuna samo. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: zdaj, ali shranjen, ustvarjen ali izrisan datum, in oblika (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: ime datoteke, z ali brez njene končnice. `S`: številka lista, njegov naslov ali koliko je listov. `P`: lastnost risbe po imenu (glejte {{cmd:DWGPROPS}}). `O`: izberite predmet, nato, kaj naj prebere (površina, dolžina, obseg, polmer, premer, sloj, ime, x, y, besedilo, zasuk, barva) in decimalna mesta. `E`: formula. `C`: besedilo s kodami, vpisanimi, kot so, na primer `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Nato `Izberite besedilo, celico tabele ali blok z atributi, da ga vstavite (Enter: novo besedilo)`: izbrano besedilo dobi polje dodano za tem, kar vsebuje; celica tabele enako; sklic na blok vpraša, kateri atribut; {{key:Enter}} vpraša za višino in točko za novo besedilo.
- Na zaslonu ima polje svetlo sivo ozadje; izris in PDF ga nikoli nimata. Vpisovanje čez besedilo polja z roko konča polje. Polje, ki se ne da izračunati, prikaže `####`.
- Polje predmeta najde svoj predmet po ključu, ki ga CadCraft hrani pri predmetih (Nastavitve › CadCraft › Datoteke, primerne za združevanje); z izklopljenimi ključi zavrne.

### UPDATEFIELD

Aliasi: `UPDATEFIELDS`. `Izberite predmete, katerih polja naj se posodobijo (Enter: vsa polja) ali [Settings]`. `S` nastavi, kdaj se polja posodobijo samodejno: vnesite črke `O` odpri, `S` shrani, `P` izriši, `R` regen (vse štiri za začetek), ali `NONE`.

### DWGPROPS

Aliasi: `DRAWINGPROPS`. Našteje lastnosti risbe, nato `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Prvih šest je tisto, kar prikazuje podokno {{ui:Podrobnosti risbe}}; `U` doda vaše ime in vrednost, `R` odstrani enega. Polja jih berejo (`%<prop:title>%`, `%<prop:Client>%`) in takoj sledijo. Zavrne ime po meri, ki je eno od vgrajenih ali vsebuje `%`, `<`, `>`, narekovaj ali povratno poševnico.

## Parametrično

Glejte [Omejitve risbe](topic:constraints) in [Uporaba parametrov in enačb](topic:parameters). Omejitve delujejo na zavihku {{ui:Model}}.

### GEOMCONSTRAINT in ukazi GC

Alias `GCON`: `Vnesite vrsto omejitve [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, nato pozivi tega ukaza.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Izberite predmet [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Izberite prvi predmet`, `Izberite drugi predmet` (drugi se premakne).
- {{cmd:GCCOINCIDENT}}: `Izberite prvo točko [Object/Autoconstrain] <Object>`, `Izberite drugo točko [Object] <Object>`.
- {{cmd:GCFIX}}: `Izberite točko [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Izberite prvi predmet [2Points] <2Points>`, `Izberite drugi predmet`, `Izberite simetrijsko črto`.

### DIMCONSTRAINT in ukazi DC

Alias `DCON`: `Izberite pridruženo koto za pretvorbo [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Določite prvo točko omejitve [Object] <Object>`, `Določite drugo točko omejitve`, `Določite mesto kotne črte`, `Besedilo kote <d1=40>` (število, izraz ali `name=expression`).
- {{cmd:DCALIGNED}}: enako kot zgoraj, z `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Izberite lok ali krog`. {{cmd:DCANGULAR}}: `Izberite prvo črto ali lok`, `Izberite drugo črto`.
- {{cmd:DCCONVERT}}: `Izberite kote za pretvorbo`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Izberite predmete [Settings]`. `S` vpraša za toleranci razdalje in kota.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Izberite objekte`; njihove omejitve odidejo.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Izberite predmete [Showall/Hideall]`, nato `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Vnesite možnost [Show/Hide]`.

### PARAMETERS in -PARAMETERS

{{cmd:PARAMETERS}} (aliasa `PAR`, `PARAM`) odpre podokno {{ui:Parametri}}. `-PARAMETERS`: `Vnesite možnost [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Prenese makro (.swb), ki model v SolidWorks zgradi kot eno omejeno skico. Glejte [Premikanje skic v in iz drugih modelirnikov delov](topic:solidworks-sketches).

## Bloki

### ANNOSCALE

Aliasi: `CANNOSCALE`. Pove merilo anotacij risbe in koliko anotativnih predmetov vsebuje, nato vpraša `New annotation scale`: vnesite `1:50`, `1:100`, `2:1`, golo število (`50` je 1:50) ali ime enega od lastnih meril risbe. Vsako anotativno besedilo in vsaka kota se preoblikuje, da se natisne v isti velikosti pri novem merilu, v enem koraku razveljavitve; predmeti, ki niso anotativni, ostanejo pri miru, prav tako predmet, ki ima seznam meril brez novega (glejte {{cmd:OBJECTSCALE}}). Glejte [Enote, formati papirja in merila](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliasi: `OBJSCALE`. `Izberite anotativne predmete`, nato `Merila anotacij izbranih predmetov [Add/Delete/Current scale/List/eXit] <Add>`. Anotativno besedilo ali kota ima seznam meril anotacij. `Add` in `Delete` vprašata za merilo (`1:50`, `2:1`, golo število ali ime enega od lastnih meril risbe); `Current scale` doda merilo anotacij risbe; `List` izpiše merila vsakega predmeta. Pogled, katerega merilo je na seznamu predmeta, prikaže predmet v velikosti, ki natisne njegovo višino na papirju pri tem merilu, na zaslonu in v izrisih. Zadnjega merila ni mogoče izbrisati. Predmeti, ki niso anotativni, so izpuščeni: najprej vklopite Anotativno v Lastnostih. Seznami so shranjeni v DWG in DXF kot lastni podatki CadCraft. Glejte [Enote, formati papirja in merila](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliasi: `ANNOALL`. `Prikaži anotativne predmete pri vseh merilih [ON/OFF]`. Vklopljeno (kakor se risba začne): anotativni predmet se prikaže tudi v pogledu ali v modelu, katerega merilo ni na njegovem seznamu, v velikosti, ki jo ima. Izklopljeno: tam se ne prikaže in ga ni mogoče izbrati v modelu. Stikalo je en korak razveljavitve; ni shranjeno v datoteki.

### SCALELISTEDIT

Aliasi: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]`, dokler ne pritisnete {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit in Delete vprašata za ime merila. Lastna merila risbe se pridružijo seznamom meril pogleda in izrisa ter se shranijo z risbo. Glejte [Enote, formati papirja in merila](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT in PEDIT

`SPLINE` (`SPL`): `Prva točka zlepka [Method/Object] (Fit points)`. Fit: točke, skozi katere krivulja gre; `Close`, `Undo`, nato `Start tangent` in `End tangent` (točka ali {{key:Enter}}). Method › Control vertices vpraša za stopnjo (1 do 5) in riše iz nadzorne poligonale. Object spremeni polilinije v zlepke skozi njihova oglišča. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` za več predmetov; črte, loki in zlepki so najprej ponujeni kot polilinije. Glejte [Zlepki in polilinije](topic:splines).

### BLOCK

Aliasi: `B`, `BMAKE`.

- `Vnesite ime bloka`. Če obstaja: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Določite vstavitveno osnovno točko`
- `Izberite objekte`. Zamenjani so z enim sklicem na novi blok.

### WBLOCK

Aliasi: `W`, `-WBLOCK`. Zapiše blok, nekaj predmetov ali celotno risbo v novo datoteko DWG ali DXF. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Določite vstavitveno osnovno točko` (postane izhodišče nove risbe), `Izberite objekte`, nato `File format [DWG/DXF/R12 DXF]` in `File name for the new drawing`, nato `What to do with the objects [Retain/Convert to block/Delete]`. Convert jih nadomesti z enim sklicem na blok z imenom datoteke; Delete jih odstrani.
- **Block**: `Block to write out`. Lastni predmeti bloka z njegovo osnovno točko kot izhodiščem, vključno z gnezdenimi bloki.
- **Entire drawing**: vsak predmet v modelnem prostoru. Listi se ne zapišejo; za kopijo, ki ohrani liste, uporabite {{cmd:SAVEAS}}.

Nova datoteka vsebuje samo sloje, vrste črt, sloge besedila in kot ter bloke, ki jih uporabljajo njeni predmeti, in enote risbe. Različica DWG je tista, ki jo je {{cmd:SAVEAS}} nazadnje uporabil. V brskalniku se datoteka prenese; v Studio se odpre pogovorno okno za shranjevanje.

### ATTDEF

Aliasi: `ATT`, `DDATTDEF`, `-ATTDEF`; ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Določi atribut}}. Najprej izpiše načine, nato `Vnesite možnost za spremembo (Enter ko končate) [Invisible/Constant/Preset]`, `Vnesite ime oznake atributa`, `Vnesite poziv atributa`, `Vnesite privzeto vrednost atributa` (`Vnesite vrednost atributa`, kadar je konstantna), `Določite začetno točko besedila`, `Določite višino besedila`, `Določite kot zasuka besedila`. {{cmd:BLOCK}} vzame definicije atributov v blok.

### EATTEDIT in ATTEDIT

`EATTEDIT` (`DDATTE`, ali dvakrat kliknite sklic z atributi; {{ui:Bloki}} › {{ui:Več}} › {{ui:Uredi atribute}}): `Izberite sklic na blok z atributi`, nato pogovorno okno {{ui:Uredi atribute}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): isti sklic, nato `<prompt> (<TAG>) <value>` za vsak atribut; {{key:Enter}} ohrani vrednost. Glejte [Atributi](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Posodobi atribute sklicev katerega bloka [Name/Select/All] <Select>`. Vrednosti se ohranijo; novi atributi dobijo svojo privzeto vrednost, odstranjeni odidejo, položaji se ponastavijo.

### BATTMAN

{{ui:Bloki}} › {{ui:Več}} › {{ui:Upravitelj atributov}}. Pogovorno okno: blok, atributi (oznaka, poziv, privzeto, načini, vrstni red), {{ui:Posodobi reference (vrednosti ohranjene)}}, {{ui:Uporabi (A)}}.

### REFEDIT in REFCLOSE

{{ui:Bloki}} › {{ui:Več}} › {{ui:Uredi na mestu}}. `REFEDIT`: `Izberite sklic na blok za urejanje na mestu` (ali izbor). `REFCLOSE`: `Shranim spremembe v "…"? [Shrani/Zavrzi] <Shrani>`; {{ui:Shrani blok}} in {{ui:Zavrzi}} na traku naredita isto. Celotno urejanje je en korak razveljavitve. Glejte [Atributi](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: ali pritisk poteze pisala nastavi debelino črte tistega, kar naredita {{cmd:SKETCHFIX}} in {{cmd:SKETCHLIVE}} (sprva vklopljeno). Glejte [Skiciranje s pisalom](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Pove, kateri pisarniški standard velja za to risbo in od kod prihaja: zapis risbe, skupni standard vaše ekipe ali vaša Privzeta pravila (višine besedila `all.anno.*`); če ni nobenega, velikosti programa. `[Import/Layers/Title block/Clear/eXit]`: `Import` prebere `cc-office-standard` .json (zapis, ki ga zapišeta SuperCad in BimCraft) v to risbo, shranjen z njo v DWG in DXF; `Layers` doda pisarniške sloje, ki jih risba nima, v enem koraku razveljavitve, in nikoli ne odstrani nobenega; `Title block` našteje polja pisarne z vrednostmi te risbe; `Clear` odstrani zapis risbe. Višine anotativnega besedila in kot sledijo veljavnemu standardu. Glejte [Enote, formati papirja in merila](topic:units-papers-scales).

### BPARAMS

Aliasi: `BPM`, `BLOCKPARAMS`. Odpre upravitelja parametrov za blok v urejevalniku blokov, za blok izbranega sklica ali za blok, ki ga imenujete (`Block name`): parametri s formulami, več parametrov vidnosti z njihovimi stanji ter lastne vrednosti in stanja izbranega sklica. Glejte [Lastni parametri in stanja vidnosti](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` naredi isto v ukazni vrstici: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT in BCLOSE

`BE`; ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Uredi blok}}. `Vnesite ime bloka za urejanje <blok izbranega sklica>` odpre urejevalnik blokov. `BCLOSE` vpraša `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Shrani blok}} in {{ui:Zavrzi spremembe}} na traku naredita isto. Vse, kar naredite v urejevalniku, je en korak razveljavitve.

### VIEWBASE

Alias: `FLATSHOT`. Ravni 2D pogled teles na zavihku 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, merilo (`1:20`, `2:1`; {{key:Enter}} vzame tisto, ki se prilega listu), nato središče pogleda. En sklic na blok, vidni robovi na VIEW-VISIBLE, skriti črtkani na VIEW-HIDDEN. Glejte [Ravni pogledi na listu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliasi: `-PUBLISH`; ali {{ui:Vsi listi v enem PDF}} v pogovornem oknu {{ui:Izris v PDF}}. `Listi za izris [All/Some]`: {{key:Enter}} izriše vsak list, `S` vpraša za imena, ločena z vejicami. En PDF, stran in zaznamek na list. Glejte [Vsak list v enem PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliasi: `SSM`, `SHEETSETMANAGER`. Pripelje vas do razdelka {{ui:Komplet listov}} na levem podoknu: listi iz mnogih risb, oštevilčeni in naslovljeni, njihove glave risbe izpolnjene iz kompleta, objavljeni kot en PDF. Glejte [Kompleti listov](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): izberite DWG ali DXF, nato njeno vstavitveno točko. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; pri več povezavah izberite eno od njenih referenc ali vnesite `N` in njeno ime. Glejte [Povezane risbe](topic:files#linked-drawings-external-references).

### COUNT

Aliasi: `BCOUNT`; ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Preštej bloke}}. `Izberite sklic na blok za štetje, ali [All/Export] (Enter: All)`: izbira izbere in prešteje vsak sklic tega bloka v tem prostoru; {{key:Enter}} ali `A` jih vse našteje; `E`, nato `C` (šteje) ali `A` (atributi) prenese CSV. Glejte [Štetje blokov in izvoz razporeda](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliasi: `I`, `DDINSERT`.

- `Vnesite ime bloka ali [File/Library] <zadnji blok>` (velikost črk ni pomembna). `F` vpraša za DWG ali DXF, nato celotno risbo ali enega od njenih blokov; ime, ki je že v uporabi, vpraša {{ui:Ohrani obstoječe}} ali {{ui:Preimenuj}}. `L` odpre podokno knjižnice.
- `Določite vstavitveno točko [Scale/Rotate]`. `S` vpraša `Določite faktor merila`, `R` vpraša `Določite kot zasuka`; oboje se pomni.
- Ko blok že stoji ob predmetih, ki se drugje ponavljajo brez njega, vrstica pove, koliko mest je predlaganih, poziv pa dobi `suGgested`: `G` jih pokaže; kliknite blizu enega, da postavite blok tam, `A` za vse, {{key:Enter}}, da se vrnete. Prevzamejo zasuk svojih sosedov in privzete vrednosti atributov. Risbe z več kot 20.000 predmeti v odprtem prostoru niso pregledane.
- Nato `Enter <prompt> (<TAG>) <default>` za vsak atribut, ki ga blok zahteva. Glejte [Atributi blokov](topic:attributes).

### LIBRARY

Aliasi: `LIB`. Odpre podokno knjižnice: postavitev elementov, preverjanje posodobitev, zasluge knjižnice. Brez vprašanj. Glejte [Vstavljanje iz datoteke ali knjižnice](topic:insert-from-file-and-library).

### STEELMEMBER

Aliasi: `SMEMBER`; ali {{ui:Element 3D}} na zavihku {{ui:Standardno}} knjižnice. `Section size <W12x26>` (kot je navedeno na zavihku), nato `Start point [Column]` in `End point`: trden element na zavihku 3D med obema točkama, ki stoji na tleh. `C` vpraša za osnovno točko stebra in njegovo višino. En korak razveljavitve. Glejte [Postavitev jeklenih prerezov in standardnih delov](topic:steel-and-standard-parts).

### PARTSLIST

Aliasi: `PLIST`. `Zgornji levi kot seznama delov`, nato `Višina besedila <2.5>`: nariše tabelo vsakega standardnega dela in jeklenega prereza, postavljenega iz knjižnice (številke elementov, količina, del, standard, velikost, dolžina, material, masa). En korak razveljavitve. Glejte [Postavitev jeklenih prerezov in standardnih delov](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliasi: `PU`. Odstrani definicije blokov, ki jih nič ne uporablja. Brez vprašanj.

### DELBLOCKS

Ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Izbriši bloke}}. `Izberite blok za brisanje [Name/eXit]`: izberite sklic na blok, ali `N` za seznam blokov s filtrom (izberite več), ali `X` / {{key:Enter}}, da konča. Vsak sklic odide — v modelu, na vsakem listu in znotraj drugih blokov — nato definicija, ukazna vrstica pa pove, kaj je bilo izbrisano in kaj ne. Neimenovani bloki in povezane risbe niso ponujeni. Poziv se vrne za naslednji blok; ves ukaz je en korak razveljavitve.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} prilepi, kar ste kopirali ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), kot en blok: izberite vstavitveno točko in en sklic na nov blok pride tja, izbran. Blok dobi svoje ime (`A$C` in število); {{cmd:RENAME}} mu da vaše. En korak razveljavitve odstrani sklic in blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} vpraša za blok, ki ga nadomesti, in blok, ki pride na njegovo mesto (`?` našteje bloke), nato spremeni vsak sklic v modelu, na vsakem listu in znotraj drugih blokov. Vsak sklic ohrani svoje mesto, merilo, zasuk, sloj in vrednosti atributov, ki jih imata oba bloka; atributi, ki jih ima samo novi blok, začnejo pri svojih privzetih vrednostih, in pove vam, katere vrednosti so bile opuščene. Ko ničesar več ne uporablja starega bloka, ponudi, da ga odstrani. Zavrne povezane risbe in nadomestilo, ki bi postavilo blok znotraj samega sebe. En korak razveljavitve.

### MINSERT

{{cmd:MINSERT}} postavi blok v vrstice in stolpce: ime bloka, vstavitvena točka, merilo, zasuk, število vrstic in stolpcev ter razdalje med njimi. Celoten niz se zasuka z zasukom. Vsak je svoj sklic (največ 10.000), zato lahko katerega koli premaknete ali izbrišete pozneje.

### BLOCKSPALETTE

Aliasi: `BLOCKSPAL`; ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Podokno blokov}}. Prikaže podokno {{ui:Bloki}} s kazalcem v njegovem filtru. Vsak blok ima majhno sliko; tisti, ki so bili nazadnje postavljeni, so prvi. Gumba ob filtru preklapljata med seznamom in mrežo slik. Kliknite sliko (ali {{ui:Vstavi}}), da postavite blok z {{cmd:INSERT}}, ali ga povlecite na risbo, da ga postavite, kamor ga spustite.

{{ui:Knjižnice}}, pod seznamom: {{ui:Dodaj risbo}} vzame DWG ali DXF datoteko, ki je vaša, in našteje njene bloke s slikami ter celotno risbo kot en blok. Postavitev enega kopira njegovo definicijo (in blokov, ki so v njem gnezdeni, ter njihove sloje) v to risbo, kot to naredi možnost `File` pri {{cmd:INSERT}}; blok, ki je že tu z enako definicijo, se uporabi brez vprašanja, eden z enakim imenom, a drugačen, pa vpraša {{ui:Ohrani obstoječe}} ali {{ui:Preimenuj}}. V brskalniku datoteka ostane, dokler se stran ne zapre. V CadCraft Studio {{ui:Dodaj mapo}} našteje risbe v mapi, vsaka se odpre, ko jo kliknete, datoteke in mape pa se pomnijo. Majhen x odstrani knjižnico s seznama; datoteke ne spremeni. Skupna {{ui:Knjižnica}} je nekaj drugega: glejte [Vstavljanje iz datoteke ali knjižnice](topic:insert-from-file-and-library).

### BCONVERT

Ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Pretvori ponovitve v bloke}}. Najde geometrijo, ki se ponavlja, in vsako kopijo spremeni v sklic na en blok.

- `Izberite predmete, ki se ponavljajo, ali [Block]`: predmeti ene kopije. `B` namesto tega imenuje obstoječi blok, da najde ohlapne kopije njegovih predmetov.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` in `P` preklapljajo, kaj šteje kot kopija; {{key:Enter}} išče. Nastavitve se pomnijo.
- `Ime za nov blok <Block1>`, nato `Določite osnovno točko bloka` ({{key:Enter}} vzame spodnji levi kot izbora).
- Pove, koliko drugih skupin predmetov je enake geometrije, označi vse, kar bi nadomestil, in vpraša `Yes/No`.

Kopija so isti predmeti, premaknjeni in zasukani za poljuben kot (in zrcaljeni ali skalirani za en faktor, kadar so ti vklopljeni): vsak predmet mora imeti svoj par, z natančnostjo v milijoninki velikosti izbora. Vsak sklic dobi svoj zasuk in merilo (zrcaljenega negativno merilo Y), sloj, ki so ga predmeti delili. Predmeti na zaklenjenih slojih ostanejo pri miru in se preštejejo. Išče v odprtem prostoru (modelu ali odprtem listu). Zelo velik iskanje se ustavi pri delovni meji in to pove. En korak razveljavitve.

### BSEARCH

Ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Najdi bloke}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: del imena bloka ali vzorec z `*` in `?`. Našteje vsak blok s sklici tu in v celotni risbi.
- `A`: vrednost atributa ali `TAG=value`. Našteje bloke, katerih sklici jo imajo, z najdenimi vrednostmi. Konstantni atributi se štejejo.
- `G`: izberite predmete ali en sklic na blok, nato so našteti bloki, katerih oblika je vsaj 85 % podobna, najboljši prvi. Velikost, zasuk in zrcaljenje se ne štejejo. Meritev primerja razdalje med točkami, razporejenimi vzdolž obrisov, zato najde podobne; za natančne kopije uporabite {{cmd:BCONVERT}}.

Najdeni sklici v odprtem prostoru so izbrani, pripravljeni za naslednji ukaz.

### BREPLACE

Ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Zamenjaj bloke}}. `Replace [Selected/All]`: `S` nadomesti sklice na bloke, ki jih izberete, z blokom, ki ga imenujete; `A` vpraša za blok in njegovo zamenjavo ter spremeni vsak sklic, kot to naredi {{cmd:BLOCKREPLACE}} (ista koda). Sklic ohrani svoje mesto, merilo, zasuk, sloj in vrednosti atributov, ki jih imata oba bloka; vrednosti, za katere novi blok nima prostora, se opustijo in navedejo. `?` našteje bloke. En korak razveljavitve.

### DATAEXTRACTION

Aliasi: `EATTEXT`, `DX`; ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Izvleček podatkov}}. Našteje bloke, njihove atribute in lastnosti predmetov kot tabelo ali datoteko CSV.

- Deluje na izboru ali vpraša `Izberite objekte (Enter: vse v tem prostoru)`.
- `List: [Blocks/Objects/All]`, kadar izbor vsebuje oboje. Neimenovani bloki, tabele in kosovnice se nikoli ne naštejejo.
- Izpiše stolpce, ki jih lahko izberete (ime, vrsta, sloj, X, Y, zasuk, merilo, dolžina, površina, barva, vrsta črte, prostor in po eden za vsako oznako atributa), nato `Columns, by name or number with commas between`. {{key:Enter}} vzame označene: ime in vsak atribut za bloke; vrsto, sloj in dolžino za predmete.
- `Put identical rows together with a count? [Yes/No] <Yes>`, nato `Put the list in a: [Table/Csv] <Table>`. Tabela je navadna tabela ({{cmd:TABLEDIT}} jo ureja) in ni živa: ko se risba spremeni, ukaz zaženite znova.
- Zavrne stolpec, ki ni na seznamu. Tabela drži 1.999 vrstic podatkov; datoteka CSV jih sprejme vse.

### COUNTTABLE

Šteje sklice na bloke izbora (ali odprtega prostora) in da števila v tabelo (`Block`, `Count`) ali datoteko CSV. Za število, ki sledi risbi samodejno, glejte {{cmd:BOMTABLE}}.

## Listi in izris

### LAYOUT

Aliasi: `LO`, `NEWLAYOUT`; ali gumb {{ui:+}} pod risbo. Nov list z obrobo, glavo risbe in enim pogledom, na ISO A3 (ali Tabloid za risbe v palcih ali čevljih). Brez vprašanj.

### MVIEW

Aliasi: `MV`. Samo na listu ({{cmd:VPORTS}} na listu naredi isto).

- `Določite oglišče pogleda [Polygonal/Object]`, `Določite nasprotno oglišče`. Pogled prikaže ves model v standardnem merilu.
- `P` (Polygonal): kliknite oglišča obrisa (`Undo`, `Close`), {{key:Enter}}, ko končate. Zavrne manj kot tri oglišča.
- `O` (Object): `Izberite zaprt predmet za obris pogleda`: zaprta polilinija, krog ali elipsa na listu. Pogled prevzame njegovo obliko (krivulje kot kratki ravni kosi); predmet ostane, kot je bil. Zavrne predmet, ki ni zaprt.

### VPCLIP

Obreže pogled, ki je že na listu. `Izberite pogled za obrezovanje` (ali ga izberite prej), nato `Izberite predmet, na katerega se obreže [Polygonal/Delete]`:

- Kliknite zaprto polilinijo, krog ali elipso, ali {{key:Enter}} (ali `P`), da kliknete oglišča mnogokotnika.
- `D` (Delete, ponujen, ko je pogled obrezan) ga spet naredi za pravokotnik: okvir okoli obrisa, ki ga je imel.
- Kar pogled prikazuje, se na papirju ne premakne in njegovo merilo ostane. Model je narisan in izrisan samo znotraj obrisa, rob pa mu sledi. En korak razveljavitve.
- Obrezan pogled ima ročico na vsakem oglišču svojega obrisa, poleg središča in štirih oglišč okvirja (vlečenje oglišča okvirja raztegne obris z njim). Lastnosti pokažejo Obris: Pravokotnik ali Obrezan s številom oglišč.
- Datoteki DWG in DXF 2000 ohranita obris za CadCraft. Drugi programi odprejo pogled kot pravokotnik okoli njega; DXF R12 ohrani samo pravokotnik.
- Na zavihku modela pove, da so pogledi na listih.

### VPORTS

Aliasi: `VIEWPORTS`. {{cmd:SPLIT}} je enak tudi z lista, in {{ui:Pogled}} › {{ui:Več}} › {{ui:Razdeli drugo ob drugo}}, {{ui:Razdeli drugo pod drugo}}, {{ui:Štiri podokna}}, {{ui:Eno podokno}} ga zaženejo. Na modelu: `Vnesite število podoken [SIngle/2/3/4] <3>`; `2` vpraša `[Horizontal/Vertical] <Vertical>` (Vertical = drugo ob drugem), `3` vpraša `[Left/Right] <Right>` (kam gre veliko podokno). Vsako podokno ohrani svoj pogled in prostor; klik naredi podokno aktivno. Na listu je to {{cmd:MVIEW}}. Glejte [Razdelitev zaslona](topic:split-screen).

### VPVIEW

Brez aliasov. Samo na listu.

- `Izberite pogled` (preskočeno, če je en izbran), nato na modelu: `Določite prvi kot okna za prikaz`, `Določite nasprotni kot`.

### UCS

Brez aliasov. Lasten koordinatni sistem; ne urejanje. `Določite izhodišče UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: točka je novo izhodišče, nato `Določite točko na osi X (Enter ohrani kot)`. `Z`: `Določite kot zasuka okoli osi Z <90>`. `3`: izhodišče, točka na pozitivni osi X, točka na strani pozitivne Y. `OB`: `Izberite predmet za poravnavo UCS`. `NA`: `[Restore/Save/Delete/?]` in ime. Pogled se zasuka, da je nova os X vodoravna. Glejte [Zasuk pogleda in uporaba lastnih koordinat](topic:ucs-and-turned-view).

### PLAN

Brez aliasov. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: zasuka pogled aktivnega podokna, da je os X tega UCS (ali sveta) vodoravna. Nič v risbi se ne premakne.

### TURNLEFT, TURNRIGHT, TURNWORLD

Brez aliasov; ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Zasuk pogleda za 90° v levo}}, {{ui:Zasuk pogleda za 90° v desno}}, {{ui:Nazaj na svet}}. Isto kot `UCS Z -90`, `UCS Z 90` in `UCS W`, s pogledom, ki sledi.

### VPLAYER

Brez aliasov. Na listu ali znotraj pogleda. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` vprašajo za imena slojev (vejice, džokerja `*` in `?`), nato `[All/Select/Current] <Current>` pogledov; Reset vrne vsak sloj na njegovo privzeto stanje "zamrznjen v novih pogledih"; `V` nastavi to privzeto (`[Frozen/Thawed]`), ki ga uporabi {{cmd:MVIEW}}. `?` našteje sloje, zamrznjene v trenutnem pogledu. Stolpec pogledov v podoknu Sloji naredi isto za en pogled. Glejte [Zamrznitev sloja v enem pogledu](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliasi: `MS`; ali dvakrat kliknite znotraj pogleda. Samo na listu. Delo na modelu prek pogleda: izbranega, edinega na listu ali `Click inside the viewport to work in`. Premikanje in povečava znotraj spremenita pogled (pogled, zaklenjen na zaslon, ga ohrani, list pa se premakne); novi pogled je zapisan kot en korak razveljavitve. Glejte [Delo na modelu prek pogleda](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliasi: `PS`; ali dvakrat kliknite zunaj pogleda, ali kliknite zavihek pod risbo. Nazaj na list.

### PLOT

Aliasi: `PRINT`, `PUBLISH`, `EXPORTPDF`; ali {{key:Mod+P}}. Odpre pogovorno okno {{ui:Izris v PDF}}. Glejte [Izris v PDF](topic:plot-pdf).

### PLOTSTYLES

Aliasi: `STYLESMANAGER`, `PSTABLES`; ali {{ui:Uredi tabele…}} v pogovornem oknu {{ui:Izris v PDF}}. Odpre {{ui:Tabele slogov izrisa}}: kaj se natisne kot vsaka barva (barva, siva, tiskarska barva, debelina črte), shranjeno z risbo. Glejte [Tabele slogov izrisa](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} premakne predmete med listom in modelom prek pogleda, skalirane in zasukane, da so videti enako z druge strani. Na listu izberite predmete in gredo v model (izberite pogled, če ima list več kot enega). Med delom na modelu prek pogleda ({{cmd:MSPACE}}) izbrani predmeti pridejo na list. Pove, kolikokrat večji ali manjši so postali. Pogledi ostanejo na svojem listu. En korak razveljavitve.

### ISODRAFT

{{cmd:ISODRAFT}} vklopi ali izklopi izometrično risanje `ON` ali `OFF`, ali gre naravnost na ravnino `Left`, `Top` ali `Right`. Medtem ko je vklopljeno: Orto ({{key:F8}}) drži črte vzdolž dveh osi ravnine (levo: 90° in 150°; zgoraj: 30° in 150°; desno: 30° in 90°), polarno sledenje ({{key:F10}}) sledi istim osem, lovljenje na mrežo ({{key:F9}}) uporablja izometrično mrežo, mreža ({{key:F7}}) pa je narisana s črtami pri 30°, 90° in 150°. {{cmd:ELLIPSE}} dobi `Isocircle`: podajte središče in polmer (ali `Premer`), in nariše elipso, ki jo krog kaže na trenutni ravnini. Risba ostane ravna: to so pripomočki za risanje perspektivnega pogleda, ne 3D model. Nastavitev velja za to sejo in ni shranjena v datoteki.

### ISOPLANE

{{cmd:ISOPLANE}} izbere ravnino, na kateri deluje izometrično risanje: `Left`, `Top` ali `Right`. Enter gre na naslednjo ravnino. Medtem ko je izometrično risanje vklopljeno, {{key:F5}} naredi isto sredi ukaza; medtem ko je izklopljeno, je {{key:F5}} prepuščen brskalniku.

## Poizvedba

### CAL

Izpiše vrednost izračuna, tako kot bi bila prebrana kjer koli, kjer je vtipkana dolžina.

- `Expression`: vnesite, na primer `12'6"+3/4"` ali `(24'-0")/3`, in pritisnite {{key:Enter}}. CadCraft izpiše `= 12'-6 3/4"   (150.75 drawing units)`. Glejte [Aritmetika v vtipkani vrednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliasi: `DI`; ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Izmeri razdaljo}}.

- `Določite prvo točko`, `Določite drugo točko`. Izpiše razdaljo, kot, Delta X in Delta Y.

### AREA

Aliasi: `AA`; ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Površina}}. Izpiše površino in obseg.

- `Določite prvo točko oglišča [Object/Add area/Subtract area] <Object>`
  - Kliknite ali vnesite oglišča; pri `Določite naslednjo točko (Enter zaključi) [Razveljavi (U)]` pritisnite {{key:Enter}}, da zaprete obris. `U` vzame nazaj zadnje oglišče.
  - {{key:Enter}} ali `O`, nato `Izberite predmet`: krog (izpiše obseg), elipsa, polilinija (odprta se zapre z ravno črto za površino, njena dolžina se izpiše) ali šrafura (luknje se odštejejo).
  - `A` (Dodaj površino) in `S` (Odštej površino) hranita tekočo vsoto: poziv se začne z `(ADD mode)` ali `(SUBTRACT mode)`, vsako površino se doda ali odšteje, in `Total area = …` se izpiše po vsaki. V teh načinih `O` izbira predmete do {{key:Enter}}, {{key:Enter}} pri prvem pozivu pa konča ukaz.

### MEASUREGEOM

Aliasi: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; po vsaki meritvi vpraša znova, s `eXit` kot privzetim.

`Quick` meri okoli kazalca, ko ga premikate: razdaljo do najbližjega predmeta desno, zgoraj, levo in spodaj (vzdolž osi trenutnega UCS), narisano sproti, in kot, kjer sta dva od teh sosedov ravna in se stikata. Klik zapiše štiri razdalje, čisto širino in višino ter kote v zgodovino; Enter se vrne na možnosti. Bere to, kar je na zaslonu.

- `D`: dve točki, kot {{cmd:DIST}}.
- `R`: `Izberite lok ali krog`; izpiše polmer in premer.
- `A`: lok (njegov vključeni kot), črta in nato druga črta (kot med njima, proti njunima oddaljenima koncema), ali {{key:Enter}} in tri točke (oglišče, nato oba konca).
- `AR`: kot {{cmd:AREA}}, ena površina.

### ID

Brez aliasov. `Določite točko`; izpiše njen X in Y.

### LIST

Aliasi: `LI`, `LS`. `Izberite objekte`; izpiše vrsto vsakega predmeta, njegov sloj in glavne mere.

### MASSPROP

{{cmd:MASSPROP}} da lastnosti preseka regij in zaprtih predmetov, ki jih izberete, skupaj vzete: površina, obseg, omejevalni okvir, težišče, momenti vztrajnosti okoli osi X in Y skozi izhodišče, produkt vztrajnosti, polmeri vrtenja, isti momenti okoli težišča ter glavni momenti s smermi njihovih osi. Luknje v regiji štejejo kot luknje. Številke so v enotah risbe in natančne za obrise, narejene iz črt in lokov; elipse in zlepki so merjeni kot kratki ravni odseki, in to pove. Po poročilu vpraša, ali naj ga zapiše v besedilno datoteko. Predmeti, ki niso zaprti, so izpuščeni, in pove, koliko jih je.

## Pogled, datoteka in drugo

### ZOOM

Aliasi: `Z`.

- `Določite kot okna, vnesite faktor merila (nX) [Extents/All/Window/Previous/Scale/Center]`. Za okno kliknite dva kota. `E`, `A` ali Enter: celotna risba.
- `P` (Previous, ali {{ui:Prejšnji (P)}} na orodni vrstici) se vrne na prejšnji pogled, do 10 pogledov na zavihek; niz korakov kolesca ali en premik se šteje kot en pogled.
- Število, kot `2`, `2x` ali `0.5x` (ali `S` in nato število), povečava ali pomanjša za ta faktor okoli sredine zaslona.
- `C` vpraša `Določite središčno točko` in `Vnesite višino ali povečavo (nX)`.

### PDFATTACH, PDFIMPORT in ukazi PDF

Aliasi: `PDFATT` za {{cmd:PDFATTACH}}, `PDFIM` za {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} postavi stran PDF pod risbo (datoteka, stran, vstavitvena točka, merilo, zasuk); {{cmd:PDFIMPORT}} spremeni črte, krivulje, polnila in besedilo strani v predmete risbe na slojih, poimenovanih po PDF, v pravi velikosti, vtipkanem merilu ali skaliranem iz dveh točk in prave razdalje. {{cmd:PDFCLIP}} obreže podlago, {{cmd:PDFADJUST}} nastavi zbledenje, kontrast, enobarvnost ali jo izklopi, {{cmd:PDFLAYERS}} preklaplja lastne sloje PDF, {{cmd:PDF}} pa da CadCraft datoteke, ki jih podlage risbe spet uporabljajo. Glejte [Podlage PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Samodejno dopolnjevanje risbe: brez teka ukaza sivi duh pokaže, kaj pravijo vzorci vaše risbe, da sledi. {{cmd:AUTOCOMPLETE}} ga vklopi `On` ali izklopi `Off` (tudi Nastavitve › CadCraft) ali `Show` pokaže, kaj bi predlagal zdaj. **Tab** nariše duha kot en korak razveljavitve, **Esc** ga odpravi, dokler se risba ne spremeni. V najnovejših predmetih najde tri stvari: naslednjo kopijo nečesa, narisanega dvakrat ali večkrat v enakem koraku (stebri, vertikale, stopnica in gaz stopnice), naslednje korake polilinijske stopnice in manjkajočo stran sobe ali verige sten. Med {{cmd:LINE}} ali {{cmd:PLINE}} je duh **naslednja točka**: naslednji korak stopnice (vzpon, gaz, vzpon …), četrti vogal pravokotnika, točka, ki ga zaključi, ali še en enak korak. Približajte kazalec in pritisnite **Tab**, kot da bi kliknili tam; nadaljujte ali pritisnite Enter. Izračunano na tem računalniku po pravilih, brez modela.

### AUTOSHEET

Alias: `ASH`. Listi, ki se sami razporedijo. {{cmd:AUTOSHEET}} vzame kose risbe (vaše imenovane poglede, ali ločene dele modela, ali ves model), izbere velikost papirja (ali tisto, ki jo podate), vsakemu kosu da standardno merilo (eno merilo za vse ali največje, ki ga vsak prenese) in postavi poglede v vrstice na nove liste z glavo risbe in napisom (ime in merilo) pod vsakim. Kar se ne prilega enemu listu, dobi svoj list. En korak razveljavitve. Izračunano na tem računalniku po pravilih, brez modela.

### PHOTOSKETCH

Alias: `PSK`. Fotografija skice v risbo. Izberite fotografijo (JPEG, PNG ali TIFF) ročne skice na listu papirja. {{cmd:PHOTOSKETCH}} najde štiri vogale lista, izravna perspektivo, vzame velikost papirja, ki jo navedete (`Paper`, ali najbližja standardna), in `Scale` skice (1 : n), nato sledi črte peresa v črte, loke in kroge, s plastjo za vsako barvo peresa (črna, rdeča, modra, zelena). Če ne najde roba papirja, vzame celotno fotografijo kot list in to pove. Pisava je izpuščena. En korak razveljavitve. Opravljeno na tem računalniku s klasično obdelavo slik, brez modela, nič poslano nikamor. Glejte tudi ukaze za skenirane risbe.

### AUTODIM

Alias: `ADIM`. Samodejno kotiranje po pravilih. {{cmd:AUTODIM}} kotira izbrane predmete (ali celotno risbo) iz njihovih vodoravnih in navpičnih robov: veriga kot vzdolž stranic, ki jih izberete (`Sides`), ena skupna kota zunaj nje, širina vsake odprtine (reža med kolinearnimi črtami sten), premer za vsako velikost luknje in z `Grid` razmik med mrežnimi črtami. Kota, ki je že tam, se ne naredi znova. En korak razveljavitve. Izračunano na tem računalniku po pravilih, brez modela.

### GRIDMOVE

Alias: `GM`. Premik mrežne črte prenese niz. {{cmd:GRIDMOVE}} premakne mrežno črto (črto na sloju, katerega ime pove grid ali axis) in, kar je nanjo obešeno: stene z enim koncem na črti se raztegnejo, da ji sledijo, stene vzdolž nje se premaknejo v celoti, stebri (sklici na bloke in krogi na črti), njen mehurček in oznaka se premaknejo, kote, katerih točke ležijo nanjo, pa izmerijo novi razmik. Podajte dve točki (šteje samo del čez črto) ali `Distance`. En korak razveljavitve vrne vse. Opravljeno po pravilih na tem računalniku.

### DETAILS

Alias: `DET`. Detajli, ki vas najdejo. {{cmd:DETAILS}} hrani detajle vašega podjetja: `Add` postavi blok te risbe na seznam, `List` in `Remove` upravljata z njim, `Find` jih razvrsti za to, kar je izbrano (ali za to, kar ste nazadnje narisali), po besedah na njegovih slojih, imenih blokov, vzorcih šrafur in opombah v primerjavi z imenom in opombami vsakega detajla, tako da detajl okenskega nadvoja najde vaše talne obloge. Izberite število in točko, da ga postavite. Z vklopljenim `Hint` (tudi Nastavitve › CadCraft) izbira nečesa, kar se ujema z detajlom, postavi eno vrstico v vrstico stanja. Seznam se hrani v tem brskalniku, na tem računalniku, in ta seznam je tisti, v katerem se išče. `Share` ga postavi tudi v mapo Dokumenti (`.cadcraft/firm-details.json`, z risbo vsakega bloka): `Pull` doda, kar ima vaša ekipa in vam manjka, `Push` doda, kar imate vi in jim manjka, `Both` naredi obe, in z nobene strani se nič ne odstrani. Najprej odprite mapo Dokumenti ({{cmd:DOCUMENTS}}); če je ta mapa mapa Team Cloud Plan, si celotna ekipa deli en seznam. Predmet detajla v podoknu Knjižnica ima gumb **Dodaj v detajle mojega podjetja**, ki ga da na isti seznam. Izračunano po besedah na tem računalniku, brez modela.

### SKETCHFIX

Alias: `SKF`. Skice s pisalom postanejo natančna geometrija. Pritisnite in povlecite eno prosto potezo naenkrat (pisalo, miška ali prst), nato Enter. Vsaka poteza je prebrana kot črta, krog, lok, pravokotnik ali polilinija: skoraj ravne in navpične črte se naredijo natanko vodoravne in navpične, zaprta okrogla poteza postane krog, zaprta poteza s štirimi pravimi koti pravokotnik, konci potez pa se povlečejo skupaj in na konce, ki so že v risbi. En korak razveljavitve. Izračunano na tem računalniku po pravilih, brez modela.

### SCANATTACH in ukazi za skenirane risbe

Aliasi: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nima nobenega. Delujejo na sliki, po en korak razveljavitve vsak. {{cmd:SCANATTACH}} vstavi PNG, JPEG, TIFF (eno stran ali vse) ali stran PDF, ki je slika. {{cmd:SCANSCALE}} skalira list iz dveh izbranih točk in prave razdalje. {{cmd:SCANALIGN}} ga premakne in zasuka na dve točki (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} pokaže kot dolgih črt lista in ga zasuče, ko `Accept` ali podate `Value`. {{cmd:SCANCLEAN}} naredi črno-belo (`Threshold` Auto/Adaptive/Level, `Specks`) in `Run`. {{cmd:SCANCROP}} ohrani okno. {{cmd:SCANERASE}} izbriše `Rectangle`, `Polygon` ali `Lasso`. {{cmd:SCANTRACE}} sledi črte in loke na nov sloj (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) in pove, kaj je našel in kaj je pustil kot raster. {{cmd:SCANINFO}} našteje prvotno datoteko in korake. {{cmd:RASTERSNAP}} vklopi ali izklopi lovljenje na črte skeniranih listov. Glejte temo Skenirane risbe in sledenje.

### REGEN in REGENALL

Aliasi: `RE` za {{cmd:REGEN}}, `REA` za {{cmd:REGENALL}}. Obnovi, kar je narisano na zaslonu iz risbe: {{cmd:REGEN}} zavihek, ki ga gledate (na listu tudi model, ki ga prikazujejo njegovi pogledi), {{cmd:REGENALL}} vsak zavihek, vsako podokno razdeljenega zaslona in vsako odprto risbo. Uporabite ju, kadar je slika zastarela po skriptirani ali zelo veliki spremembi, ali kadar je pomočnik urejal risbo; sama risba se ne dotakne, zato ni ničesar razveljaviti.

### NAMEDVIEW

Aliasi: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, nato ime pogleda. `S` shrani pogled na zaslonu, `W` okno, ki ga izberete, `R` prikaže shranjen pogled, `D` izbriše enega, `?` našteje poglede tega zavihka. Shranjevanje pod obstoječim imenom ga nadomesti; vsaka sprememba je en korak razveljavitve. Pogledi pripadajo zavihku, na katerem so bili shranjeni. Datoteki DWG in DXF jih ohranita (tabela VIEW); pogledi lista se vrnejo na prvi list, saj datoteka ne pove, kateri je.

### UNDO in REDO

Aliasi: `U` za {{cmd:UNDO}}; {{cmd:REDO}} nima nobenega. Tudi {{key:Mod+Z}} in {{key:Mod+Y}}.

### LAYER

Aliasi: `LA`. Skoči na podokno {{ui:Sloji}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` ali ime (`?` jih našteje: Continuous, lastne vrste risbe in DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE z njihovimi velikostmi `2` (polovična) in `X2` (dvojna)). {{cmd:LWEIGHT}} (`LW`): debelina črte za nove predmete v mm, ali `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): merilo vrste črt risbe (z razveljavitvijo). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — isto kot gumb {{ui:LWT}} v vrstici stanja. Glejte [Debeline in vrste črt](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, nato novo ime; predmeti ali sklici sledijo. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]`, dokler ne pritisnete {{key:Enter}}, nato `Select object on target layer or [Name]` in `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, nato `Y`: sloj in vsak predmet na njem odideta (ne sloj 0, DEFPOINTS ali tekoči sloj). En korak razveljavitve vsak. Glejte [Urejanje risbe s sloji](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Sloji z izbiro predmetov; tudi v meniju {{ui:Orodja}} podokna {{ui:Sloji}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, nato {{key:Enter}}: vsak drug sloj se izklopi. {{cmd:LAYUNISO}} jih spet vklopi. {{cmd:LAYOFF}} in {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (ali zamrznjen), znova in znova; `U` vzame nazaj zadnjega, {{key:Enter}} konča. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} vklopi vse sloje, {{cmd:LAYTHW}} odmrzne vse sloje. Vsak ukaz je en korak razveljavitve. Glejte [Urejanje risbe s sloji](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} začne prazno risbo, {{cmd:OPEN}} odpre DWG ali DXF, vsak v svojem zavihku nad risbo (neuporabljena nova risba se uporabi namesto novega zavihka). Zapiranje zavihka z neshranjenimi spremembami najprej vpraša. Glejte [Razdelitev zaslona](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, tudi {{key:Mod+S}}) prenese kopijo v obliki risbe: DWG, če je bila odprta iz DWG, DXF, če iz DXF. Nova risba uporabi obliko, nazadnje izbrano pri Shrani kot v tem brskalniku, sicer DWG.

{{cmd:SAVEAS}} (tudi {{key:Mod+Shift+S}}) odpre pogovorno okno {{ui:Shrani kopijo kot}}: izberite {{ui:DWG}} (in njegovo {{ui:Različica}}), {{ui:DXF R12}} ali {{ui:DXF 2000}}, nato {{ui:Shrani}}. Izbira velja za to risbo in za nove risbe v tem brskalniku.

{{cmd:DXFOUT}} vedno prenese kopijo DXF R12, ne da bi spremenil obliko, ki jo uporablja {{cmd:SAVE}}.

Glejte [Datoteke: kaj se odpre, kaj se shrani](topic:files#saving).

### TOUR

Aliasi: `TUTORIAL`. Ponovno zažene šestkoračni ogled prve risbe. Glejte [Začetek](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliasi: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Glejte [Nastavitve](topic:settings#toolbar-position).

### COMMANDLINE

Aliasi: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: pripne ali naredi lebdečo ukazno vrstico, naredi jo eno vrstico, vpraša, koliko vrstic zgodovine prikazati (0 do 12), ali odpre zgodovino. Glejte [Nastavitve](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: vrstice nad risbo, kakršne so bile, ali kompaktne. Glejte [Nastavitve](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: korak, pri katerem se črte {{ui:Polarno}} sledenja poravnajo (več kot 0, do 180). Hrani se v tem brskalniku.

### UNITS

Aliasi: `UN`. Kako so dolžine zapisane in vnesene.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Arhitekturna in ulomkovna: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 ali 256)`. Druge: `Enter number of decimal places (0 to 8)`.

Nove kote mu sledijo. En korak razveljavitve. Isto kot {{ui:Format dolžin}} in {{ui:Natančnost}} v {{ui:Trenutne nastavitve}}; glejte [Čevlji in palci](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliasi: `GDS`. Ogled IC postavitve (datoteka toka GDSII): laboratorijski poskus, samo za ogled in merjenje.

- Izbirnik datotek sprejme datoteko `.gds`; pri več vrhnjih celicah `Enter the top cell to draw`.
- Vsak sloj in datatype postane sloj risbe (`GDS 1`, `GDS 2/5`), sklici in matrike so postavljeni ploski, v uporabniški enoti datoteke (navadno mikrometri). En korak razveljavitve. Nič se ne simulira ali preverja in datoteka se ne zapiše nazaj.

### DIAGRAM

Aliasi: `TEXTDIAGRAM`, `T2D`. Diagram iz besedila.

- Okvir sprejme besedilo (ali eno vrstico z `;` med stavki v ukazni vrstici): poteka Mermaid, komponentni diagram PlantUML, D2 ali seznam od-do.
- `Določite zgornji levi kot diagrama`, nato `Določite višino besedila`.

Bloki in povezave so navadni predmeti na sloju `Diagram`, izbrani, ko se konča. En korak razveljavitve. Glejte [Risanje diagrama iz besedila](topic:text-to-diagram).

### OLELIST

Aliasi: `OLES`. Predmeti OLE, ki jih nosi DWG in jih CadCraft sam ne more postaviti.

- Našteje vsakega: številka, vrsta, velikost, ali je shranil sliko.
- `Enter an option [Place/eXit] <eXit>`: Place vpraša za številko, spodnji levi kot in širino, ter nariše okvir s sliko. En korak razveljavitve; ohranjeni predmet se ne spremeni. Glejte [Slike](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliasi: `SHX`. Lastne pisave SHX.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} prebere vsako `.shx` v mapi (CadCraft Studio; ob vsakem zagonu znova), {{ui:Files}} vzame izbrane datoteke (brskalnik), {{ui:Reverse}} postavi črke ene pisave od zadaj naprej. Slogi besedila, ki imenujejo naložen font, se rišejo v njem. Glejte [Risanje besedila v vaših lastnih pisavah SHX](topic:shx-fonts).

### LIMITS

Kako velika naj bo risba.

- `Specify lower left corner or [ON/OFF] <current>`: točka, `ON` ali `OFF`.
- `Specify upper right corner <current>`.

Mreža zapolni meje, {{cmd:ZOOM}} All jih prikaže, z vklopljenimi mejami pa točka zunaj je zavrnjena (`**Outside limits`). En korak razveljavitve; shranjeno v DWG in DXF. Glejte [Nastavitev mej risbe](topic:drawing-limits).

### AUNITS

Aliasi: `ANGUNITS`. Kako so koti prikazani in vneseni.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ali za drugi dve `Enter precision` (0 stopinj, 2 minuti, 4 sekunde, 5 do 8 decimalk sekunde).

En korak razveljavitve; shranjeno v DWG in DXF. Isto kot {{ui:Format kota}} v {{ui:Trenutne nastavitve}}. Glejte [Vnos in prikaz smeri in kotov](topic:bearings-and-angles).

### APPLOAD

Aliasi: `AP`; ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Naloži aplikacijo …}}. Pogovorno okno {{ui:Naloži aplikacije}}: naloži rutine `.lsp` in datoteke pogovornih oken `.dcl`, jih odstrani, znova naloži iz zgodovine in Zagonski paket. Ukazi rutine `(defun c:NAME …)` potem delujejo kot vsaki drug. Glejte [Nalaganje aplikacij](topic:load-applications) in [Zaženite rutine LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Uredi aliase …}}) odpre vašo datoteko aliasov (vrstice `ALIAS, *COMMAND`); {{ui:Shrani}} jo uporabi. {{cmd:REINIT}} jo uporabi znova. Glejte [Uredite aliase ukazov](topic:command-aliases).

### OPTIONKEYS

Aliasi: `OPTKEYS`; ali {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Črke možnosti}} › {{ui:Uredi…}}. Odpre vašo datoteko črk za možnosti (vrstice `COMMAND.OPTION, LETTERS`, kot `ARRAY.PO, P`); {{ui:Shrani}} jo uporabi, {{cmd:REINIT}} pa jo uporabi znova. Glejte [Dajte možnostim ukazov lastne črke](topic:option-letters).

### LISPEDIT

Aliasi: `VLIDE`; ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Urejevalnik LISP}}. Odpre urejevalnik LISP, okno, ki ostane odprto ob risbi.

- Besedilo: številke vrstic, partner oklepaja pri kazalcu označen (rdeč, če ga nima), {{key:Enter}} zamakne novo vrstico pod odprtim oklepajem, {{key:Tab}} vtipka dva presledka, {{key:Esc}} zapusti besedilo.
- {{ui:Naloži v risbo}} ({{key:Ctrl+Shift+Enter}}): prebere vsak obrazec, kot to naredi {{cmd:APPLOAD}} z datoteko, in naredi njene ukaze `c:`. Datoteka se pokaže na seznamu {{cmd:APPLOAD}}.
- {{ui:Zaženi izbor}} ({{key:Ctrl+Enter}}): oceni izbrane obrazce ali obrazec, v katerem je kazalec.
- {{ui:Ustavi}}: konča tečočo rutino.
- {{ui:Konzola}}: kar je rutina izpisala, in vsaka napaka z vrstico; kliknite napako, da greste tja. Besedilo se izvaja po en obrazec na najvišji ravni naenkrat, zato je vrstica obrazca ali, znotraj njega, vrstica, ki kliče funkcijo, ki jo napaka navaja.
- {{ui:Novo}}, {{ui:Odpri}}, {{ui:Shrani}} ({{key:Ctrl+S}}): datoteka `.lsp`. Besedilo se hrani tudi v tem brskalniku, zato zapiranje okna ne izgubi besedila.
- Ob besedilu: funkcije, ki jih rutina določa, tiste, ki jih kliče, a jih ta LISP še nima, tiste, ki jih kliče in jih v njej ni niti vgrajenih, ter celotna seznama tistega, kar je vgrajeno in kar ni.

Besedilo z oklepajem, ki se nikoli ne zapre, ali nizom, ki se nikoli ne konča, se ne izvede: navede se vrstica. Ni koračnega razhroščevalnika, prelomnih točk ali okna za opazovanje. Glejte [Zaženite rutine LISP](topic:run-lisp).

### HELP

Aliasi: `?`. Izpiše vsak ukaz, njegove aliase in enovrstični opis v zgodovini ukazne vrstice. Ne odpre te pomoči: za to pritisnite {{key:F1}} ali kliknite {{ui:Pomoč}}.

## Poziv za izbiro predmetov

Pri vsakem pozivu `Izberite objekte` kliknite predmete, narišite okna (od leve proti desni) in sekanja (od desne proti levi) z dvema klikoma ali pritisnite in povlecite lasso ({{key:Space}} med vlečenjem: okno, sekanje, ograja), {{key:Shift}}+klik za odstranitev in pritisnite {{key:Enter}}, da končate. Vtipkate lahko tudi `ALL` (vse), `L` (zadnji predmet), `P` (Previous: kar je uporabil zadnji ukaz), `F` (Fence: predmete, ki jih prečka črta točk; `U` vzame nazaj točko), `W` (Window), `C` (Crossing), `R` (način odstranjevanja: izbire vzamejo predmete ven; poziv pravi `Remove objects`) in `A` (Add again). `?` jih našteje. Niso prikazani v pozivu. {{key:Tab}} nad prekrivajočimi se predmeti označi naslednjega; kliknite, da ga izberete. Glejte [Izbira predmetov](topic:select-objects).

### ACCESS

Alias: `AX`. Risanje brez vida. {{cmd:ACCESS}} vklopi ali izklopi dostopnost (`On`, `Off`) in preklaplja zvoke lovljenja (`Sound`) ter glasovne ukaze (`Voice`); najprej pove stanje. Ko je dostopnost vklopljena, vsak ukaz in rezultat bere bralnik zaslona, območje risbe pa ima kazalec tipkovnice. Tema pomoči „Risanje brez vida“ ima tipke.

### DESCRIBE

Alias: `DESC`. Pove, kaj risba vsebuje: koliko predmetov, katere vrste, kako velikih, koliko slojev, kaj je izbrano. Samo bere; ničesar ne spremeni.

### WHEREAMI

Alias: `WHERE`. Pove, kje je kazalec, v enotah risbe.

### NEARBY

Pove, kaj leži blizu kazalca, najbližje najprej, vsako z njegovo razdaljo in stranjo, na kateri je.

### SAYSEL

Pove, kaj je izbrano, po en stavek za predmet (dolžina črte, krajišči in kot; polmer kroga in središče; besedilo, kakršno je zapisano).

### VOICE

Vklopi ali izklopi govorjene ukaze. Prepoznavajo se na tem računalniku; kjer brskalnik tega ne zmore, glas ostane izklopljen, razen če izberete spletno storitev brskalnika v Nastavitvah.

### TOUCHCROSSHAIR

Alias: `TCX`. Zamaknjen križec za risanje s prstom, da konica prsta ne pokrije točke, ki jo izberete. Medtem ko je vklopljen, en prst na risbi ne izbere: premakne križec, ki je nad prstom in ob eni strani. Lovljenje predmetov in sledenje sledita križcu. Dvig prsta ničesar ne izbere in pusti križec tam, kjer je. Za izbiro pritisnite gumb {{ui:Klik}} v kotu risbe ali se dotaknite risbe z drugim prstom. Držite {{ui:Klik}} med premikanjem drugega prsta za vleko (okno izbora, lasso, ročica). Prst, pritisnjen in miren, ali gumb {{ui:Enter}}, je Enter. Dva prsta premikata in povečujeta kot prej. Blizu spodnjega roba in roba na daljni strani se križec približa prstu, zato je mogoče doseči vsak del risbe. Pisalo in miška vedno izbereta neposredno.

{{cmd:TOUCHCROSSHAIR}} pove stanje in vpraša `ON`, `OFF`, `Auto` (vklopljeno samo, kjer je prst edini kazalec, zato je izklopljeno na računalniku z miško), `Distance` (kako daleč je križec od prsta, 24 do 240 slikovnih pik) ali `Side` (`Left`: gor in levo, za desno roko; `Right` za levo roko; gumbi se premaknejo v drug kot). Enake izbire so v Nastavitve › CadCraft, na napravi z zaslonom na dotik pa ima vrstica stanja stikalo {{ui:Zamaknjen križec}}. Izbire se hranijo v tem brskalniku.

### WHOHAS

Pove, kdo ima risbo odprto. V CadCraft Studio na računalniku odprtje DWG ali DXF zapiše majhno datoteko zaklepa poleg nje (`Plan.dwg.cclock`: kdo, od kdaj, katera različica), jo osveži vsako minuto, dokler je risba odprta, in jo odstrani, ko je risba zaprta. Odprtje risbe, ki jo ima odprto nekdo drug, pove, kdo in od kdaj, ter ponudi {{ui:Odpri samo za branje}} (Shrani nato vpraša za novo ime), {{ui:Odpri vseeno}} (druga oseba je obveščena ob njeni naslednji osvežitvi) ali {{ui:Prekliči}}. Shranjevanje čez datoteko, ki jo ima odprto nekdo drug, najprej vpraša. Zaklep, ki ni bil osvežen pet minut, je zastarel: druga kopija se je zaprla brez shranjevanja ali pa je računalnik v spanju.

{{cmd:WHOHAS}} vpraša `Current` (odprta risba), `File` (izberite eno), `FOlder` (izberite mapo: našteti so vsi risbe v njej, ki so odprte nekje), `Path` (vnesite polno pot) ali `Name` (ime, ki ga vidijo drugi; ime vašega računa, ko ste prijavljeni). Studio lahko doseže samo mape, ki ste jih izbrali: za risbo, odprto iz mape, ki nikoli ni bila izbrana, enkrat pove, da ne more zabeležiti risbe kot odprte; `FOlder` izbere mapo, zaklepi pa tam delujejo od takrat naprej. Zaklep je opomba za ljudi, ne ovira: drug program lahko še vedno zapiše datoteko. V brskalniku ni map, v katerih bi iskal, in ukaz to pove.

### OVERKILL

Izbriše podvojene predmete in uredi prekrivajoče se črte in loke, za risbe, ki prihajajo polne podvojenih linij. `Izberite objekte za čiščenje`, {{key:Enter}}, nato še enkrat {{key:Enter}}, da očistite z nastavitvami, ki so prikazane, ali spremenite eno najprej:

- `Tolerance`: kako blizu morata biti dve koordinati, da veljata za isti (0,000001 na začetku; 0 pomeni natanko enako).
- `Ignore`: lastnosti, ki se lahko razlikujejo med dvema predmetoma, ki sta sicer enaka. Vnesite ime za preklop: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ali `None` / `All`. {{key:Enter}}, ko končate.
- `Overlap`: vklopljeno ali izklopljeno. Ko je vklopljeno, črte vzdolž ene ravne črte, ki se prekrivajo, postanejo ena črta (črta, ki leži znotraj druge, je preprosto izbrisana), loki ene krožnice, ki se prekrivajo, pa postanejo en lok; loki, ki zaprejo celoten obrat, postanejo krog, lok, ki leži na krogu, pa se izbriše.
- `Ends`: vklopljeno ali izklopljeno. Ko je vklopljeno, črte vzdolž ene ravne črte in loki ene krožnice, ki se dotikajo samo od konca do konca, postanejo en kos.

Vsaka vrsta predmeta je preverjena za podvojitve: dva predmeta sta podvojena, kadar je njuna geometrija enaka v okviru tolerance in se ujemata njun sloj, barva, vrsta črte, merilo vrste črte, debelina črte, debelina, prosojnost in višina (minus tiste, ki jih prezrete). Črte in odprte polilinije se ujemajo tudi, kadar so narisane v obratni smeri. Prvi predmet v vrstnem redu risanja ostane in ohrani svoje lastnosti. Ukaz poroča, koliko predmetov je preveril in izbrisal: podvojene, prekrivajoče se kose, združene, kose, spojene od konca do konca. En {{cmd:UNDO}} vse vrne. Nastavitve veljajo, dokler ne zaprete okna risbe.

Pusti pri miru: predmete na zaklenjenih slojih in skrite predmete. Ne združuje črt z višino (Z) (natančni podvojeni zaradi njih vseeno odidejo), in se ne dotika segmentov znotraj polilinije (niso stanjšani), črte, ki leži na segmentu polilinije, in zaprte polilinije, narisane v obratni smeri.

### DRAWORDER

Spremeni, kateri predmeti so narisani spredaj. `Izberite objekte za preureditev`, {{key:Enter}}, nato `Above objects`, `Under objects`, `Front` ali `Back` ({{key:Enter}} = `Back`). `Above objects` in `Under objects` vprašata za referenčne predmete: izbor gre tik pred najbolj sprednjega od njih, ali tik za najbolj zadnjega. Izbrani predmeti ohranijo svoj vrstni red med seboj. En korak razveljavitve. Vrstni red je shranjen z risbo v DWG in DXF, kjer je vrstni red, v katerem so predmeti zapisani.

Na zaslonu je vsak predmet narisan v vrstnem redu risbe, kot ga drugi programi, ki odprejo datoteko, narišejo: trdna šrafura, široka polilinija ali maska besedila prekrije črte in besedilo za seboj, kar je spredaj, pa jo prekrije. Kjer črta seka besedilo, sta vidna oba. Slike in priloženi PDF-ji ostanejo pod linijami. V zelo veliki risbi, katere polnila in linije se prekrivajo in izmenjujejo več kot 256-krat, prvih 256 ohrani svoj vrstni red, ostali pa narišejo svoja polnila pod črtami, da ponovno risanje ostane hitro.

### TEXTTOFRONT

Pripelje besedilo, kote in vodilke pred vse drugo v odprtem prostoru: `Text`, `Dimensions`, `Leaders` ali `All` ({{key:Enter}} = `All`). En korak razveljavitve. Pove, če ničesar ni, ali če so že spredaj.

### HATCHTOBACK

Pošlje vsako šrafuro odprtega prostora za vse ostalo, tako da polnila ne prekrivajo več črt in besedila v shranjeni datoteki. Brez vprašanj. En korak razveljavitve.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Pokaže samo izbrane predmete: vse drugo v odprtem prostoru gre iz vidnega polja do {{cmd:UNISOLATEOBJECTS}}. Za razliko od {{cmd:LAYISO}} deluje na predmetih, ki jih izberete, ne glede na njihove sloje, in ne spremeni nobenega sloja. Skriti predmeti se ne risbajo, ne izbirajo, ne lovijo, ne približujejo in ne izrisujejo, ukazi, ki sprejmejo `ALL`, pa jih preskočijo. Kar narišete, medtem ko so predmeti izolirani, se prikaže kot običajno.

To je samo za sejo: nič o tem se ne shrani z risbo, ni korak razveljavitve, in ponovno odprtje risbe pokaže vse. Medtem ko so predmeti skriti, vrstica stanja prikaže gumb z njihovim številom; kliknite ga, da jih spet pokažete.

### HIDEOBJECTS

Skrije izbrane predmete do {{cmd:UNISOLATEOBJECTS}}. Enaka pravila kot pri {{cmd:ISOLATEOBJECTS}}: samo za sejo, ni shranjeno, ni korak razveljavitve.

### UNISOLATEOBJECTS

Aliasi: `UNISOLATE`, `UNHIDE`. Ponovno pokaže vsak predmet, skrit z {{cmd:ISOLATEOBJECTS}} ali {{cmd:HIDEOBJECTS}}, in pove, koliko se jih je vrnilo.

### LAYLOCKFADE

Nastavi, kako izgledajo predmeti na zaklenjenih slojih in ali klik nanje seže. Pove trenutno stanje, nato sprejme:

- število od 0 do 90: količina zbledelosti v odstotkih (50 na začetku). 0 izklopi zbledelost.
- `ON` ali `OFF`: zbledelost vklopljena ali izklopljena, količina ostane.
- `Pick`, nato `Yes` ali `No`: ali klik lahko izbere predmete na zaklenjenih slojih, medtem ko noben ukaz ne teče? `No` (privzeto): ne morejo biti izbrani. `Yes`: klik ali okno jih izbere, da lahko {{ui:Lastnosti}} prikažejo, vendar jih še vedno ni mogoče spremeniti, lastni `Select objects` ukaza pa jih nikoli ne vzame.

Lovljenje predmetov najde predmete na zaklenjenih slojih v vsakem primeru. Izrisi se nikoli ne zbledijo. Obe nastavitvi sta vaši, ne risbini, in sta tudi v {{ui:Nastavitve}} pod {{ui:Zaklenjeni sloji}}.

### BURST

Razstavi sklice na bloke in ohrani, kar povedo njihovi atributi. `Izberite sklice na blok za razstavljanje`, {{key:Enter}}: vsak sklic je zamenjan z predmeti bloka, vsaka vidna vrednost atributa pa postane navadno besedilo na sloju tega atributa (atribut na sloju 0 pristane na sloju sklica, kot ostali predmeti bloka na sloju 0). Nevidni atributi odidejo. Blok znotraj bloka ostane sklic na blok. En korak razveljavitve; pove število razstavljenih sklicev in vrednosti atributov, pretvorjenih v besedilo.

Zavrne povezano risbo po imenu (najprej jo vežite ali kopirajte iz nje z {{cmd:NCOPY}}), ostale izbrane predmete pa pusti pri miru. Za sklice na bloke {{cmd:EXPLODE}} da iste predmete; {{cmd:BURST}} vzame samo sklice na bloke in šteje besedilo atributov.

### TXT2MTXT

Alias: `T2M`. Združi enovrstična besedila v eno odstavčno besedilo. `Izberite enovrstično besedilo za združitev`, {{key:Enter}}, nato `Paragraph` (vrstice se združijo in prelomijo pri širini najširše vrstice) ali `Lines` (vsako besedilo ostane svoja vrstica); {{key:Enter}} vzame tisto, uporabljeno nazadnje. Vrstice so urejene od zgoraj navzdol, nato od leve proti desni, vzdolž smeri zgornjega besedila. Odstavek visi od zgornjega levega kota zgornjega besedila in prevzame njegovo višino, zasuk, slog, sloj in barvo. En korak razveljavitve.

Besedilo, ki je že odstavčno besedilo, prazno besedilo in drugi predmeti v izboru ostanejo pri miru, ukaz pa pove, koliko jih je.

### NCOPY

Kopira predmete iz sklica na blok ali povezane risbe v risbo, ne da bi kaj razstavil. `Izberite predmet znotraj sklica na blok ali povezane risbe`: predmet, najbližji izboru, je kopiran tam, kjer se prikazuje, ne glede na to, kako globoko v blokih je; izberite še več in nato {{key:Enter}}. Naslednje `Base point to move the copies`: {{key:Enter}} jih pusti na mestu, ali podajte osnovno točko in drugo točko. Celoten ukaz je en korak razveljavitve.

Kopija prevzame sloj, na katerem se prikazuje: predmet na sloju 0 znotraj bloka pristane na sloju sklica, v katerem je sedel, ByBlock barva pa postane barva tega sklica. Iz povezane risbe sloj `Plan|Walls` postane `Plan$0$Walls` (ime, ki ga da povezava), narejen z barvo, vrsto črte in debelino črte povezanega sloja. Vrednost atributa je kopirana kot besedilo. Sklici na bloke na zaklenjenih slojih se ne dajo izbrati.

### FLATTEN

Nastavi višino (Z) in debelino izbranih predmetov na 0. `Izberite predmete za sploščenje`, {{key:Enter}}. Sploščijo tudi predmete znotraj definicij blokov, ki jih izbor uporablja (in blokov znotraj njih), tako da se vsak sklic na te bloke spremeni; povezane risbe se pustijo, kakršne so. En korak razveljavitve; pove, koliko predmetov se je spremenilo, in pove, če nobeden ni imel višine ali debeline.

Kar CadCraft ohrani o tretji dimenziji v 2D risbi, je: višina pri krogih, lokih, elipsah, točkah, besedilu, sklicih na bloke, šrafurah, vodilkah in polilinijah (njihova kota), višina na vsakem koncu črte in debelina pri črtah, krogih, lokih, polilinijah, točkah in besedilu, kot jih je imela datoteka. {{cmd:FLATTEN}} počisti natanko to. Ne dotika se 3D modela na zavihku 3D, 3D ploskev ali teles, predmet, narisan v nagnjeni ravnini, pa je bil že prinesen v ravnino risbe, ko je bila datoteka odprta.

### BREAKLINE

Nariše črto s simbolom preloma, za pogled, ki je prekrajšan. Pove trenutno velikost in podaljšek, nato `First point of the break line` (ali `Size` / `Extension`, da ju prej spremenite), `Second point` in `Where the break symbol sits`: kliknite vzdolž črte ali {{key:Enter}} za sredino. Rezultat je ena polilinija na trenutnem sloju: črta, ki gre čez vsako točko za podaljšek, z Z-obliko poteze, visoko kot velikost in polovično tako dolgo.

`Size` in `Extension` se pomnita kot vaše nastavitve (velikost se začne kot dvakratnik višine besedila kote, pomnoženo z merilom kote; podaljšek pri polovici velikosti). {{key:Enter}} ponovi ukaz.

### AUDIT

Preveri odprto risbo za poškodbe in jih popravi. {{cmd:AUDIT}} pregleda vsak predmet v modelu, na listih in znotraj blokov ter tabelo slojev, in našteje, kar najde, po vrsti:

- števila, ki niso končna ali so nesmiselno velika;
- predmeti brez velikosti: črta brez dolžine, krog brez polmera, polilinija z enim mestom, besedilo brez črk ali višine, sklic na blok z ničelnim merilom;
- predmeti na sloju, ki ga risba nima; sklici na blok, ki ga ni; imena slogov besedila in kote ter imena vrst črt, ki niso v risbi;
- bloki, ki vsebujejo sami sebe, neposredno ali prek drugih blokov;
- predmeti, ki si delijo identifikator, ključ ali ročaj datoteke;
- kote brez točk, od katerih so merjene, in šrafure, katerih meja ni zaprt obris.

Nato vpraša `Fix them? [Yes/No]`. `No` ničesar ne spremeni. `Yes` popravi vse v enem koraku razveljavitve: odstrani, kar ni mogoče narisati (slaba števila, brez velikosti, manjkajoči blok, pokvarjena kota, šrafura brez uporabne meje, sklic, ki zapre krog blokov); manjkajoči sloj se naredi; neznana imena slogov in vrst črt se vrnejo na privzeta; deljen ključ se nadomesti. Pove, koliko predmetov je bilo odstranjenih in koliko popravljenih. Iste ugotovitve se prikažejo tudi v podoknu Težave, vsaka s svojim {{ui:Popravi}}.

Ničesar ne zavrne, vendar preverja samo to, kar CadCraft sam nariše: podatki, shranjeni za druge programe (3D telesa, predmeti OLE), se ne odprejo.

### RECOVER

Odpre poškodovano DXF ali DWG. {{cmd:RECOVER}} vpraša za datoteko, prebere, kar se da prebrati, namesto da bi datoteko zavrnil, našteje, kar je preskočil ali predpostavil, nato preveri in popravi risbo, kot to naredi {{cmd:AUDIT}} z `Yes`.

- DXF: vrstice, ki niso del para kode in vrednosti, se preskočijo, dokler se pari spet ne poravnajo; odsek brez konca se zapre; datoteka, ki je prekinjena, se prebere do prekinitve; binarni DXF, ki je prekinjen, se prebere do zadnje cele vrednosti. Ko odsek, blok ali predmet še vedno ni mogoče prebrati, je izpuščen in poimenovan, branje pa se nadaljuje mimo njega.
- DWG: predmeti, ki ne opravijo preverjanj ali se ne dajo dekodirati, so izpuščeni, izgubljen seznam predmetov pa se obnovi s pregledovanjem podatkov predmetov.

Datoteka na disku se ne spremeni. Obnovljena risba se odpre nesharnjena: shranite jo pod novim imenom. Datoteka, iz katere ni mogoče prebrati prav nič, je zavrnjena, z razlogom.

### LEGACYTEXT

Pretvori besedilo, vneseno s starimi 8-bitnimi vietnamskimi pisavami, v Unicode. Kratki imeni `TEXTTOUNICODE` in `VNTEXT`.

Starejše vietnamske risbe hranijo svoje besedilo kot zahodne znake, ki ga šele pisava spremeni v vietnamščino: TCVN3 besedilo v pisavah ABC (`.VnTime`, `.VnArial` in pisave z velikimi črkami, katerih imena se končajo na `H`), in besedilo VNI v pisavah VNI (`VNI-Times`). CadCraft takšno besedilo prikaže tako, kot se bere, takoj ko je risba odprta, po pisavi njegovega sloga besedila, predmeta ali odseka odstavčnega besedila; datoteka še vedno hrani stare znake.

{{cmd:LEGACYTEXT}} pove, koliko besedil je našel v vsakem kodiranju, in vpraša `Convert … to Unicode?`. `Yes` prepiše vsakega (model, liste, bloke, vrednosti in definicije atributov) ter da slogom besedila pisavo Unicode (Times New Roman, Arial ali Courier New glede na vrsto stare pisave), v enem koraku razveljavitve. Oblikovanje znotraj odstavčnega besedila se ohrani.

Kadar nobeno besedilo ne uporablja znane pisave (slog, ki je izgubil ime pisave), vpraša `Read selected texts as [Tcvn3/Vni/None]`: izberite kodiranje in izberite besedila. Besedilo, ki je že Unicode, ostane pri miru. Preglasitve besedila kote in besedilo večkratne vodilke se ne pretvarjajo.
