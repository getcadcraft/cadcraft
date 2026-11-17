---
title: Referenca ukazov
summary: Vsak ukaz v risalni aplikaciji CadCraft, z njegovimi bližnjicami, vprašanji, ki jih postavlja, možnostmi in privzetimi vrednostmi.
keywords: ukazi, bližnjice, seznam ukazov, površina, obseg, measuregeom, črta, pline, krožnica, lok, prirezi, odmik, dimlinear, blok, vstavi, postavitev, izris, povečava, pomoč, copyclip, cutclip, pasteclip, pasteorig, copybase, podvoji, selectall
from: 7db2646b
---

Vnesite ime ukaza ali bližnjico in pritisnite {{key:Enter}} ali {{key:Space}}. Velikost črk ni pomembna, vodilni `_`, `-`, `.` ali `'` pa se prezre. Vnesite `HELP` (ali `?`), da v zgodovini ukazne vrstice izpišete kratek seznam vseh ukazov; pritisnite {{key:F1}} za to pomoč.

Kako brati pozive: možnosti so v oglatih oklepajih, izberete pa jih tako, da vnesete njihove velike črke (`D` za Premer). Privzeta vrednost je v kotnih oklepajih; pritisnite {{key:Enter}}, da jo sprejmete. Kjer je zahtevana točka, lahko kliknete ali vnesete katerokoli obliko iz [Vnos koordinat in razdalj](topic:coordinate-entry). Kjer je zahtevana razdalja, lahko vnesete število ali kliknete dve točki.

Pritisk na {{key:Enter}} tam, kjer je zahtevana točka ali predmet, in ni privzete vrednosti, konča ukaz. {{key:Esc}} ga prekliče. Vse, kar je ukaz naredil, je en korak razveljavitve.

## Risanje

### LINE

Bližnjice: `L`. Ravni odseki, vsak svoj predmet.

- `Določite prvo točko` (Enter: začne pri zadnji točki, ki ste jo podali)
- `Določite naslednjo točko [Razveljavi (U)]`, ponavljano. Po dveh odsekih: `[Razveljavi (U)/Zapri (C)]`.
- `U` vzame nazaj zadnji odsek, `C` zapre do prve točke in konča. Enter konča.

### PLINE

Bližnjice: `PL`. Ena polilinija iz odsekov črt in lokov.

- `Določite začetno točko`
- `Določite naslednjo točko [Lok (A)/Zapri (C)/Razveljavi (U)]` (Zapri, ko sta dva odseka)
- `A` preklopi na loke: `Določite krajišče loka [Črta (L)/Zapri (C)/Razveljavi (U)]`. Vsak lok se nadaljuje tangentno na prejšnji odsek. `L` se vrne na črte, `CL` zapre z lokom.
- Enter konča; polilinija ostane odprta.

### CIRCLE

Bližnjice: `C`.

- `Določite središčno točko krožnice [3P/2P/Ttr (tan tan polmer)]`
- `Določite polmer krožnice [Premer (D)] <zadnji polmer>`; `D` vpraša `Določite premer krožnice`.
- `2P`: dve krajišči premera. `3P`: tri točke na krožnici.
- `T` (tudi ukaz `TTR` in {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Določite točko na predmetu za prvo tangento krožnice`, nato drugo, nato polmer (Enter: zadnji). Krožnica se dotika obeh predmetov (črt, lokov, krožnic, odsekov polilinije, tudi znotraj blokov); od tistih, ki se dotikajo, je izbrana tista, ki se dotika najbližje vašim izborom. Ko nobena ne ustreza, se prikaže »Krožnica ne obstaja«.
- `TTT` (ali {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): trije predmeti; krožnica, ki se dotika vseh treh, najbližje vašim izborom (tri črte dajo notranjo ali zunanjo krožnico, odvisno od tega, kje kliknete).

### ARC

Bližnjice: `A`.

- `Določite začetno točko loka [Središče (C)]`, `Določite drugo točko loka`, `Določite končno točko loka`: lok skozi tri točke.
- `C`: `Določite središčno točko loka`, `Določite začetno točko loka`, `Določite končno točko loka`. Lok teče v nasprotni smeri urnega kazalca od začetka do konca.

### RECTANG

Bližnjice: `REC`, `RECTANGLE`. Zaprta polilinija.

- `Določite prvo točko oglišča`, `Določite drugo točko oglišča`. Za drugo oglišče vnesite `@širina,višina`.

### POLYGON

Bližnjice: `POL`. Pravilni mnogokotnik kot zaprta polilinija.

- `Vnesite število stranic <4>` (3 do 1024)
- `Določite središče mnogokotnika`
- `Vnesite možnost [Včrtan v krožnico/Očrtan okoli krožnice] <I>`
- `Določite polmer krožnice`: kliknite ali vnesite točko; njena razdalja določi velikost, njena smer pa zasuka mnogokotnik.

### ELLIPSE

Bližnjice: `EL`.

- `Določite krajišče osi elipse [Središče (C)]`, `Določite drugo krajišče osi`, `Določite razdaljo do druge osi`
- `C`: `Določite središče elipse`, `Določite krajišče osi`, nato razdaljo do druge osi.
- `I` (`Isocircle`, samo medtem ko je {{cmd:ISODRAFT}} vklopljen): središče, nato polmer ali `Premer`: elipsa, kot jo krog kaže na trenutni izometrični ravnini.

### HATCH

Bližnjice: `H`, `BH`, `BHATCH`; ali {{ui:Hatch}} v orodni vrstici. Najprej izpiše trenutni vzorec, merilo in kot.

- `Izberite notranjo točko [Izberi predmete/Vzorec/Merilo/Kot]`, ponavljano (`Razveljavi (U)`, ko je območje že določeno): vsak klik doda zaprto območje okoli njega, z zaprtimi oblikami znotraj kot otoki. Enter ustvari eno šrafuro iz vseh.
- `S`: `Izberite zaprte predmete` (zaprte polilinije, krožnice, zaprte elipse).
- `P`: `Vnesite ime vzorca, SOLID ali ? za seznam <trenutni>`. `SC`: `Določite merilo vzorca`. `A`: `Določite kot vzorca`.
- `G` (Prelivanje): polnilo je preliv namesto vzorca. Glejte {{cmd:GRADIENT}} za njegova vprašanja.

Glejte [Šrafure in polnjenje območij](topic:hatch).

### GRADIENT

Bližnjice: `GD`. Napolni območje s prelivom ene ali dveh barv. Najprej sprašuje po prelivu, nato pa nadaljuje kot {{cmd:HATCH}} (`Izberite notranjo točko`, `S` za zaprte predmete, {{key:Enter}} za konec).

- `Vnesite možnost prelivanja [Tip/Ena barva/Dve barvi/Kot/Središčno/eXit] <X>`, ponavljano; vsakič izpiše trenutni preliv.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` ali eden od njih obrnjen (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Dovolj so prve črke.
- `O`: ena barva, nato njen odtenek od 0 do 1 (0 jo zatemni do črne, 0,5 je sama barva, 1 jo posvetli do bele). `TW`: prva in druga barva. Barva je število od 1 do 255, tri števila, kot `255,128,0`, ali `#rrggbb`.
- `A`: kot, pod katerim teče preliv. `C`: središčno Da ali Ne (Ne premakne sredino prelivanja na eno stran).
- Zavrne barvo ali tip, ki ga ne pozna, in odtenek zunaj območja od 0 do 1.

{{cmd:HATCHEDIT}} `G` in Lastnosti (Preliv) kasneje spremenita preliv ali spremenita katero koli šrafuro v preliv. Preliv je narisan na zaslonu in izrisan. DWG 2004 in novejši ga hranijo kot pravi preliv; DXF 2000 in DWG 2000 ga hranijo za CadCraft, drugi programi pa vidijo polno polnilo v prvi barvi.

### HATCHGENERATEBOUNDARY

Bližnjice: `HGB`. Znova naredi rob iz šrafure, ki ga je izgubila. `Izberite šrafure` (ali jih izberite prej), nato `Povežem vsako šrafuro z njenim novim robom, da ji bo sledila? [Da (Y)/Ne (N)] <Da>`.

- Vsaka zanka šrafure postane zaprta polilinija na sloju šrafure; nove polilinije ostanejo izbrane. Ukrivljen rob se vrne kot kratki ravni kosi, ki jih šrafura ohrani.
- Z Da šrafura sledi svojemu novemu robu, kot ga naredi {{cmd:HATCH}}. En korak razveljavitve.
- Pove, če ni bila izbrana nobena šrafura.

### POINT

Bližnjice: `PO`; ali {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Točkovni predmeti, po eden na klik, do Enter.

- `Določite točko`

### XLINE

Bližnjice: `XL`; ali {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Pomožne črte, neskončne na obe strani. Glejte [Pomožne črte in poltraki](topic:construction-lines).

- `Določite točko [Vod/Nav/Kot/Razpolovi/Odmik]`, nato `Določite točko, skozi katero gre` za vsako črto, do Enter.
- `A`: `Vnesite kot pomožne črte [Referenca] <0>`; `R` najprej vpraša `Izberite objekt črte`.
- `B`: `Določite oglišče kota`, `Določite začetno točko kota`, nato `Določite končno točko kota` za vsako črto.
- `O`: `Določite razdaljo odmika [Skozi] <Skozi>`, nato `Izberite objekt črte` in `Določite stran za odmik` (ali `Določite točko, skozi katero gre`) za vsako črto.

### RAY

Brez bližnjic; ali {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Določite začetno točko`, nato `Določite točko, skozi katero gre` za vsak poltrak, do Enter.

### TEXT

Bližnjice: `DT`, `DTEXT`; ali {{ui:Text}} v orodni vrstici. Enovrstično besedilo; vsaka vrstica je svoj predmet.

- `Določite začetno točko besedila [Poravnava (J)]`
- `J`: `Vnesite možnost [Levo/Središče/Desno/Sredina/TL/MC] <L>`, nato `Določite točko vstavljanja besedila`
- `Določite višino <trenutna višina besedila>`
- `Določite kot zasuka besedila <0>`
- `Vnesite besedilo`, ponavljano: vsak Enter začne naslednjo vrstico pod njo. Enter na prazni vrstici konča. {{key:Space}} tukaj vnese presledek.

### DIVIDE

Bližnjice: `DIV`. {{cmd:DIVIDE}} postavi oznake na črto, lok, krožnico, polilinijo, zlepek ali elipso, ki jo razdelijo na enake dele. Izberite predmet, nato vnesite število delov (2 do 32767). Odprt predmet dobi eno oznako manj od delov; zaprt dobi oznako tudi na začetku. Sam predmet se ne prereže. Oznake so točke; `Block` namesto tega zahteva blok iz te risbe in ali se zasuče, da sledi predmetu. Dolžine vzdolž zlepkov in elips se merijo po kratkih tetivah. Zavrne besedilo, šrafure in druge predmete brez dolžine.

### MEASURE

Bližnjice: `ME`. {{cmd:MEASURE}} postavi oznako na vsako dano dolžino vzdolž črte, loka, krožnice, polilinije, zlepka ali elipse, štetih od krajišča najbližjega vašemu kliku (zaprt predmet: od njegovega začetka). Dolžino vnesete tako, da jo vtipkate ali z dvema točkama. Daljni konec odprtega predmeta ne dobi oznake. `Block` postavi blok na vsako oznako namesto točke. Zavrne dolžino 0, dolžino, daljšo od predmeta, in tisto, ki bi naredila več kot 32767 oznak.

### BOUNDARY

Bližnjice: `BO`, `BPOLY`. {{cmd:BOUNDARY}} naredi zaprto polilinijo okoli območja, ki vsebuje točko, ki jo izberete, iz katerihkoli črt, lokov, krožnic, polilinij in krivulj, ki ga omejujejo na zaslonu. Kosi, ki ležijo na loku ali krožnici, se vrnejo kot odseki lokov; kosi elips in zlepkov se vrnejo kot kratki ravni odseki. Z vključenimi `Otoki` (začetna nastavitev) dobi tudi vsako zaprto območje znotraj njega svojo polilinijo. Izbirajte točke naprej; Enter konča. Predmeti, ki omejujejo območje, ostanejo, kakor so. Pove, če nobeno zaprto območje ne vsebuje točke.

### BLEND

{{cmd:BLEND}} nariše zlepek med krajiščema dveh odprtih krivulj. Izberite vsako krivuljo blizu krajišča, ki ga želite spojiti. `CONtinuity` izbere `Tangent` (zlepek zapusti in pride vzdolž obeh krivulj) ali `Smooth` (tudi upogne, kakor se krivita na krajiščih); izbira ostane za sejo. Obe krivulji se ne spremenita. Zavrne zaprte predmete in dve krajišči, ki se že stikata.

### REGION

Bližnjice: `REG`. {{cmd:REGION}} spremeni zaprte predmete v regije: ploske površine, ki jih lahko združite, odrežete in izmerite. Izberite krožnice, zaprte polilinije, zaprte elipse ali zaprte zlepke, ali črte, loke in odprte polilinije, ki zaprejo zanko od konca do konca; vsaka zanka postane ena regija in nadomesti predmete, iz katerih je nastala. Loki ostanejo loki; elipse in zlepki postanejo kratki ravni odseki. Kar ni zaprto in ne zapre zanke, ostane, kakršno je, in pove se, koliko je takih. V risbi je regija ena ali več zaprtih polilinij, ki so skupaj kot neimenovana skupina, zato klik izbere celotno regijo, kopija pa je regija zase; drugi programi, ki odprejo datoteko, vidijo zaprte polilinije.

Ko so v risbi regije, {{cmd:UNION}}, {{cmd:SUBTRACT}} in {{cmd:INTERSECT}} na zavihku 2D delajo z regijami: `UNION` združi izbrane regije v eno (regije, ki so ločene, postanejo ena regija z več obrisi), `SUBTRACT` vpraša za regije, od katerih se odvzame, nato za tiste, ki se odvzamejo (luknja ostane del regije), `INTERSECT` ohrani območje, ki ga imajo vse skupaj. Vsak pove površino rezultata in je en korak razveljavitve. Zavrnejo, če ne bi ostalo ničesar ali če nič ni skupnega. Na zavihku 3D in v risbi brez regij ukazi delajo z telesi, kot prej.

## Spreminjanje

Bližnjice: `MT`, `T`; ali {{ui:Paragraph}} v orodni vrstici. Odstavčno besedilo, ki se prelamlja na širino, vneseno na mestu.

- `Določite prvo točko oglišča`
- `Določite nasprotno točko oglišča [Višina (H)/Poravnava (J)/Razmik vrstic (L)/Zasuk (R)/Širina (W)]`: širina med dvema ogliščema je mesto, kjer se besedilo prelomi. `H` vpraša `Določite višino`, `J` `Vnesite poravnavo [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Vnesite faktor razmika vrstic (0,25 do 4)`, `R` `Določite kot zasuka`, `W` `Določite širino (0 za brez prelomov)` in preskoči drugo oglišče.
- Nato se na risbi odpre okvir: tipkajte, {{key:Enter}} za nov odstavek, {{key:Mod+Enter}} ali klik zunaj za konec, {{key:Esc}} za preklic. Njegova vrstica nastavi višino, razmik vrstic, širino in poravnavo. Glejte [Dodajanje besedila in oznak](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Bližnjice: `ED`, `DDEDIT`; ali dvakrat kliknite besedilo. `Izberite besedilo za urejanje`, ponavljano do {{key:Enter}}: vsako se odpre v istem okvirju. Začet na izbranem ali dvakrat kliknjenem besedilu, ureja tega in konča.

### ERASE

Bližnjice: `E`, `DELETE`; ali pritisnite {{key:Delete}} z izbranimi predmeti.

- `Izberite predmete` (preskočeno, če so predmeti že izbrani)

### MOVE

Bližnjice: `M`.

- `Izberite predmete`
- `Določite izhodiščno točko [Premik (D)]`, `Določite drugo točko`
- `D`: `Določite premik`, vnesen kot `dx,dy`.

### COPY

Bližnjice: `CO`, `CP`. Kopije, kolikorkrat podate točke.

`Matrika` pri pozivu za drugo točko naredi vrsto naenkrat: vnesite število predmetov (izvirnik šteje kot enega), nato točko, kjer je prva kopija; ostali sledijo na enakem razmiku. `Prilagodi` naredi to točko mesto zadnje kopije, ostale pa so enakomerno razporejene vmes.

- `Izberite predmete`
- `Določite izhodiščno točko [Premik (D)]`
- `Določite drugo točko [Razveljavi (U)]`, ponavljano do Enter. `U` vzame nazaj zadnjo kopijo.

### ROTATE

Bližnjice: `RO`.

- `Izberite predmete`, `Določite izhodiščno točko`
- `Določite kot zasuka <zadnji kot>`: stopinje, pozitivne v nasprotni smeri urnega kazalca; ali kliknite točko, da zasukate proti njej.

### SCALE

Bližnjice: `SC`.

- `Izberite predmete`, `Določite izhodiščno točko`
- `Določite faktor merila`: vnesite faktor, kot je `0.5` ali `2`. Kliknjena točka da kot faktor svojo razdaljo od izhodiščne točke.

### MIRROR

Bližnjice: `MI`.

- `Izberite predmete`
- `Določite prvo točko zrcalne črte`, `Določite drugo točko zrcalne črte`
- `Izbrišem izvorne predmete? [Da (Y)/Ne (N)] <N>`

### ALIGN

Bližnjice: `AL`; ali {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Izberite predmete`
- `Določite prvo izvorno točko`, `Določite prvo ciljno točko`
- `Določite drugo izvorno točko (Enter za nadaljevanje)`, `Določite drugo ciljno točko`
- `Določite tretjo izvorno točko (Enter za nadaljevanje)`, `Določite tretjo ciljno točko`
- Pri dveh parih: `Predmete skaliram glede na točke poravnave? [Da (Y)/Ne (N)] <N>`

Glejte [Poravnava predmetov](topic:modify-objects#align-objects).

### ALIGNTO

- `Izberite predmete` (ali izbor), `Poravnaj [Levo (L)/Središče (C)/Desno (R)/Zgoraj (T)/Sredina (M)/Spodaj (B)] <Levo>`, `Na [Izbor/Prvi/Zadnji/Točka] <Izbor>`; `P` vpraša za točko. Izbor ostane.

### DISTRIBUTE

- `Izberite predmete` (vsaj tri), `Razporedi [Vodoravno/Navpično] <Vodoravno>`, `Razmakni enakomerno [Središča/Razmiki] <Razmiki>`. Zunanja dva ostaneta; izbor ostane.

### ALIGNPANEL

Bližnjice: `ALP`; ali {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Odpre podokno, ki z vrsto klikov izvaja ALIGNTO in DISTRIBUTE.

### LASER

Bližnjice: `LASERCUT`; ali {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Odpre podokno Laser nad risbo: kaj naredi vsak sloj (rez, zarezovanje, graviranje, polnjenje, slika), predogled, G-koda GRBL za shranjevanje ter vodenje in pošiljanje prek Web Serial. Glejte [Pošljite risbo laserju](topic:laser-cutting).

### STRETCH

Bližnjice: `S`; ali {{ui:Stretch}}. `Izberite predmete za raztezanje`: povlecite okna sekanja (ali vnesite `C`) čez krajišča za premik. `Določite izhodiščno točko [Premik (D)]`, `Določite drugo točko`. Točke znotraj oken se premaknejo: krajišča črt, oglišča polilinij (odseki lokov ohranijo svojo višino), točke kot; krožnice, elipse, besedilo, točke in bloki se premaknejo v celoti, ko je njihovo središče ali točka vstavljanja znotraj. Izbor, narejen pred ukazom, ohrani okna sekanja (in lasso), ki so ga naredila, zato se raztegne enako. Brez okna se predmeti premaknejo v celoti.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Bližnjice: `AR`; ali {{ui:Array}}. `Izberite predmete`, nato `Vnesite vrsto matrike [Pravokotna/POlarna] <Pravokotna>` (samo ARRAY).

- Pravokotna se začne s 4 stolpci × 3 vrsticami, razmik je 1,5-kratnik velikosti predmetov, prikazan kot predogled. `Vnesite možnost [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` vpraša za stolpce in vrstice, `S` za razdalje med stolpci in med vrsticami (negativno gre levo ali dol), `COL` in `R` vsakega v eni smeri.
- Polarna vpraša `Določite središčno točko matrike`, se začne s 6 elementi okoli in zasukana. `Vnesite možnost [Elementi/Kot polnjenja/ROTate predmeti/eXit] <X>`: `I` elementi, `F` kot polnjenja (+ v nasprotni smeri urnega kazalca, − v smeri), `ROT` Da ali Ne.
- {{key:Enter}} (eXit) naredi kopije kot navadne predmete. En korak razveljavitve.
- `AS` (ASsociative) preklaplja med navadnimi kopijami in matriko, ki ostane urejljiva: en predmet, ki ga kasneje spremenite z {{cmd:ARRAYEDIT}}, z ročicami ali v Lastnostih. Izbira se zapomni ({{cmd:ARRAYASSOCIATIVITY}}); začne se z navadnimi kopijami.

### ARRAYPATH

Kopije vzdolž krivulje. `Izberite predmete`, nato `Izberite krivuljo poti`: črta, lok, krožnica, elipsa, polilinija ali zlepek (ne eden od predmetov, ki se razporejajo). Pot se začne na njenem koncu, ki je bližje predmetom, prvi element pa so predmeti tam, kjer so.

- `Vnesite možnost [Metoda/Elementi/Razmik (SP)/Poravnava (AL)/ASsociative/eXit] <X>`, s predogledom. `M`: `Deli` enakomerno razporedi elemente po celotni poti, `Meri` postavi enega vsakih toliko vzdolž nje. `I`: število elementov (pri Meri pomeni 0 toliko, kolikor jih gre); število čez konec poti je omejeno na to, kar se prilega. `SP`: razdalja med elementi vzdolž poti (preklopi na Meri). `AL`: Da zasuče vsak element, da sledi poti, Ne ga pusti pokonci.
- `AS` kot pri {{cmd:ARRAY}}. Z njim vklopljenim matrika hrani svojo kopijo oblike poti: poznejše urejanje krivulje poti ne premakne elementov.
- Zavrne pot, ki ni krivulja, in en element.

### ARRAYEDIT

Spremeni matriko, narejeno z ASsociative. `Izberite matriko` (ali jo izberite prej). Izpiše, kakšna je matrika zdaj, nato sprašuje do {{key:Enter}}:

- Pravokotna: `COL` stolpci in njihov razmik, `R` vrstice in njihov razmik, `A` kot, pod katerim tečejo stolpci.
- Polarna: `I` elementi, `F` kot polnjenja, `ROT` zasuk elementov Da ali Ne.
- Pot: `M` Deli ali Meri, `I` elementi, `SP` razmik, `AL` poravnava s potjo.
- `S` (Izvor) odpre predmete, ki se ponavljajo, same zase, kot urejevalnik blokov. Tam risite in urejajte; {{cmd:ARRAYCLOSE}} shrani ali opusti, in vsak element sledi.
- `REP` (REPlace): `Izberite nadomestne predmete`, `Določite izhodiščno točko nadomestnih predmetov`, nato kliknite elemente, ki jih nadomeščate, in {{key:Enter}}. Ti elementi prikažejo nadomestilo; nadomestni predmeti zapustijo risbo in živijo v matriki. `RES` (RESet) spet prikaže izvorne predmete v vsakem elementu.
- Vsaka sprememba je en korak razveljavitve. Zavrne navadne kopije, navaden sklic bloka in matriko na zaklenjenem sloju.

Ista števila so v Lastnostih pod Matrika, matrika pa ima ročice: njena izhodiščna točka jo premakne, ročica pri drugem elementu nastavi razmik, ročica za zadnjim elementom nastavi število (pri polarni: drugi element nastavi, koliko elementov, zadnji element kot polnjenja). {{cmd:EXPLODE}} spremeni matriko nazaj v navadne kopije.

### ARRAYCLOSE

Konča {{cmd:ARRAYEDIT}} Izvor: `Shranim spremembe izvornih predmetov matrike? [Shrani/Opusti (D)] <Shrani>`. Pove se, če nobeni izvorni predmeti matrike niso odprti. {{cmd:BCLOSE}} naredi isto.

### ARRAYASSOCIATIVITY

`Vnesite novo vrednost za ARRAYASSOCIATIVITY (1 = matrike ostanejo urejljive, 0 = navadne kopije)`. Nastavi, s čim začnejo {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR in {{cmd:ARRAYPATH}}; njihova možnost `AS` spremeni isto nastavitev. Zapomni se v tem brskalniku.

### OFFSET

Bližnjice: `O`. Črte, loki, krožnice in polilinije.

Kjer se polilinija premakne navzven in se njeni ravni odseki na oglišču razidejo, {{cmd:OFFSETGAPTYPE}} odloči, kako se vrzel zapre.

- `Določite razdaljo odmika [Skozi] <zadnja razdalja ali Skozi>`
- `Izberite predmet za odmik`, nato `Določite točko na strani za odmik` (ali pri Skozi `Določite točko, skozi katero gre`), ponavljano do Enter.

### OFFSETGAPTYPE

- `Vrzeli na ogliščih odmika: 0 podaljšaj, 1 zaokroži, 2 posnemi`: kako {{cmd:OFFSET}} zapre vrzeli na zunanjih ogliščih polilinije. `0` podaljša odseke, dokler se ne stikajo (začetna nastavitev), `1` jih poveže z lokom okoli starega oglišča, `2` z ravno odrezo. Notranja oglišča in odseki lokov niso prizadeti. Ohranjeno za to sejo.

### EXTRIM

{{cmd:EXTRIM}} obreže vse na eni strani roba. Izberite rezni rob (črto, lok, krožnico, polilinijo, elipso, zlepek ali pomožno črto), nato kliknite točko na strani, ki jo želite počistiti: vsaka črta, lok, krožnica, polilinija in pomožna črta, ki seka rob, izgubi svoj kos na tisti strani, kjer se začne na robu. Med izbiro strani kosi, ki bi odšli, sledijo kazalcu. Za zaprt rob sta strani notranja in zunanja. Predmeti, ki se samo dotikajo roba, ter besedilo, šrafure, zlepki in elipse, ki ga sekajo, ostanejo, kakršni so. En korak razveljavitve.

### TRIMEXTENDMODE

- `Vnesite novo vrednost za TRIMEXTENDMODE (1 Hitro, 0 Standardno)`: kako se {{cmd:TRIM}} in {{cmd:EXTEND}} začneta. `1` Hitro: vsak predmet je rezni rob ali meja. `0` Standardno: najprej vprašata za robove. Tudi `(setvar "TRIMEXTENDMODE" 0)` v LISP.

### TRIM

Bližnjice: `TR`. Najprej izpiše `Trenutne nastavitve: hitri način (TRIMEXTENDMODE 1), robovi: brez podaljška, vlečenje riše pot`. V hitrem načinu je vsak viden predmet rezni rob, predmet, ki ga nič ne seka, pa se izbriše; v standardnem načinu najprej vpraša `Izberite rezne robove (Enter = vsak predmet)` in reže samo ob njih.

- `Izberite predmet za obrezovanje ali Shift-izberite za podaljšanje [Rezni robovi (T)/Ograja (F)/Sekanje (C)/Način (O)/Rob (E)/Izbriši (R)/Razveljavi (U)]`, ponavljano: kliknite kos, ki ga odstranite (med kazalcem nad njim je siv in črtkan), povlecite pot čez več kosov (vsi gredo v enem koraku) ali kliknite dve prazni mesti za ograjo med njima. {{key:Shift}} namesto tega podaljša. `T` izbere rezne robove (standardni način), `F` vpraša za točke ograje, `C` dve oglišči okna (kosi, ki so delno znotraj, gredo), `O` vpraša `Vnesite možnost načina obrezovanja [Hitro/Standardno]`, `E` vpraša `Vnesite način podaljška implicitnega roba [Podaljšaj/Brez podaljška]` (EDGEMODE), `R` izbriše predmete, ki jih izberete, `U` razveljavi zadnji izbor ali vlečenje. Enter konča. Glejte [Obrezovanje in podaljševanje](topic:trim-and-extend).

- Klik na šrafuro jo obreže: rezni robovi razdelijo šrafirano območje, kos, na katerega ste kliknili, pa se odstrani (na mestu, kjer je bil, ne ostane nobena narisana obroba). Šrafura ohrani svoj vzorec ali preliv; šrafura, ki je bila povezana s svojim robom, po tem ni več povezana, ker je ne polni več. Pove, če nobeni rezni rob ne razdeli šrafure na tem mestu, če je klik zunaj šrafure in če ne bi ostalo ničesar (uporabite {{cmd:ERASE}}). Povlečena pot ali ograja ne reže šrafur.

### EXTEND

Bližnjice: `EX`. Isto kot TRIM v obratni smeri: `Izberite predmet za podaljšanje ali Shift-izberite za obrezovanje [Mejni robovi/Ograja/Sekanje/Način/Rob/Razveljavi (U)]`. Klik podaljša krajišče, ki je najbližje, do naslednje meje; povlečena pot ali ograja podaljša vsak predmet, ki ga seka; {{key:Shift}} obreže. `B` izbere mejne robove (standardni način). Način in Rob sta skupna s TRIM.

### LINKVIEWS

Bližnjice: `SYNCVIEWS`; ali {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, ali ikona povezave na zavihkih risbe. `Poveži poglede podoken [ON/OFF]` (Enter vzame drugo stanje): medtem ko je vklopljeno, pomik ali povečava v aktivnem podoknu premakne vsako podokno, ki prikazuje isto vrsto prostora. Glejte [Razdelitev zaslona](topic:split-screen).

### OPENIN3D

Brez bližnjic; ali {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}}, kjer aplikacija za 3D modeliranje sprejme predano risbo. Odpre jo tam v novem zavihku, kot DWG (nič se ne naloži). Če brskalnik zavihek blokira, to pove.

### LASSOMODE

`Vnesite novo vrednost za LASSOMODE (1 = lasso, 0 = pravokotnik)`: kaj riše pritisk in vlečenje na prazno mesto. Enako kot Nastavitve › CadCraft › Vlečenje za izbiro. Glejte [Izbira z lassom](topic:lasso-selection).

### FILLET

Bližnjice: `F`. Črte, loki, krožnice in polilinije. Najprej izpiše `Trenutne nastavitve: Način = TRIM, Polmer = 0`.

- `Izberite prvi predmet [Razveljavi (U)/Polilinija (P)/Polmer (R)/Obreži (T)/Več (M)]`
  - `R` vpraša `Določite polmer zaokrožitve <zadnji>`. `T` vpraša `Vnesite možnost načina obrezovanja [Obreži/Brez obrezovanja]`: z Brez obrezovanja predmeti ostanejo, kakršni so, in doda se samo lok.
  - `M` ohrani ukaz za več oglišč, dokler ne pritisnete {{key:Enter}}; `U` vzame nazaj zadnje oglišče, ne da bi zapustil ukaz.
  - `P` vpraša `Izberite 2D polilinijo [Polmer]` in zaokroži vsako oglišče, kjer se stikata dva ravna odseka. Zaokrožitve, ki jih že ima, so zamenjane z novim polmerom; polmer 0 jih odstrani. Oglišča, katerih stranice so prekratke za polmer, ostanejo in se preštejejo.
- `Izberite drugi predmet ali Shift-izberite za uporabo oglišča [Polmer]`. Držite {{key:Shift}} med klikom za oster kot, ne glede na polmer.

Kliknite vsak predmet na delu, ki ga želite ohraniti. Dve črti, ki se ne stikata, se podaljšata. Dve vzporedni črti dobita polkrog preko vrzeli, na krajišču prve črte, najbližjem vašemu kliku. Krožnica se nikoli ne reže. Dva odseka ene polilinije, ki sta drug ob drugem, dobita lok znotraj polilinije; polilinija in drug predmet delujeta, kadar rez pristane na prvem ali zadnjem odseku polilinije.

### CHAMFER

Bližnjice: `CHA`. Črte in ravni odseki polilinij. Najprej izpiše trenutne razdalje (ali dolžino in kot).

- `Izberite prvo črto [Razveljavi (U)/Polilinija (P)/Razdalja (D)/Kot (A)/Obreži (T)/Način (E)/Več (M)]`
  - `D` vpraša `Določite prvo razdaljo posnetja <zadnja>` in `Določite drugo razdaljo posnetja <prva>`: prva se odreže od prve črte, ki jo izberete, druga od druge.
  - `A` vpraša `Določite dolžino posnetja na prvi črti` in `Določite kot posnetja od prve črte`.
  - `E` (Način) izbere, katera od obeh uporablja naslednje posnetje. `T`, `M`, `U` in `P` delujejo kot pri {{cmd:FILLET}}.
- `Izberite drugo črto ali Shift-izberite za uporabo oglišča [Razdalja/Kot/Način]`. Shift+klik naredi oster kot.

Razdalja, daljša od črte, je zavrnjena (`Razdalja je prevelika.`).

### BREAK in BREAKATPOINT

Bližnjice: `BR`. `Izberite predmet` (kjer kliknete, je prva točka), `Določite drugo točko preloma [Prva točka (F)]`; `F` vpraša `Določite prvo točko preloma` in `Določite drugo točko preloma`. Vmesni del odide; pri krožnici v nasprotni smeri urnega kazalca od prve točke. BREAKATPOINT vpraša `Določite točko preloma` in predmet tam razdeli na dva dela (ne krožnice).

### LENGTHEN

Bližnjice: `LEN`. `Izberite predmet za merjenje [Sprememba (DE)/Odstotek (P)/Skupaj (T)/Dinamično (DY)]`: klik izpiše `Trenutna dolžina` (in vključen kot loka) in spet vpraša. `DE` vpraša `Vnesite spremembo dolžine (negativno skrajša) [Kot]`, `P` `Vnesite odstotek dolžine`, `T` `Določite skupno dolžino [Kot]`, `DY` vleče. Nato `Izberite predmet za spremembo [Razveljavi (U)]`, ponavljano: krajišče, ki je najbližje kliku, se premakne. Črte, loki in odprte polilinije.

### JOIN

Bližnjice: `J`. `Izberite predmete za združitev`. Črte, loki in odprte polilinije, ki se stikajo od konca do konca, postanejo polilinije (zaprte, ko se veriga zapre); črte na eni črti postanejo ena črta; loki ene krožnice postanejo en lok ali krožnica. Zgodovina pove, koliko predmetov se je združilo in koliko ne.

### MATCHPROP

Bližnjice: `MA`, `PAINTER`. `Izberite izvorni predmet`, nato `Izberite ciljne predmete [Nastavitve]` in {{key:Enter}}. Kopira sloj in barvo ter med predmeti iste vrste višino in širino besedila, dimenzije kot ali vzorec šrafure. `S` vpraša `Vklopite ali izklopite lastnost [Barva/Sloj/Besedilo/Kota/Šrafura]`, ponavljano do {{key:Enter}}; izbira se zapomni za sejo.

### EXPLODE

Bližnjice: `X`. Polilinije postanejo črte in loki, sklici blokov postanejo svoji predmeti, kote postanejo črte, puščice in besedilo. Matrika, ki ostane urejljiva ({{cmd:ARRAYEDIT}}), postane navadne kopije svojih predmetov.

- `Izberite predmete`

### GROUP

Bližnjice: `G`. {{cmd:GROUP}} da izbranim predmetom ime, ki ga delijo. Izberite predmete, nato vnesite ime (brez presledkov; `?` našteje skupine; Enter naredi neimenovano skupino) in za imenovano skupino neobvezen opis. Od takrat naprej klik na enega od njih ali okno, ki zajame enega, izbere vse, zato se premikajo, kopirajo in brišejo skupaj; vsak predmet je še vedno svoj predmet. Predmet je lahko v več skupinah. Kopija cele skupine je nova neimenovana skupina; kopija enega člana sam se pridruži skupini. Skupine pripadajo prostoru, v katerem so nastale (model ali list). Ohranijo se, ko shranite kot DWG ali DXF in datoteko znova odprete v CadCraft; datoteke DXF 2000 jih nosijo tudi kot skupinske predmete za druge programe, skupine, narejene v drugem programu, pa se preberejo, ko odprete DXF ali DWG.

### UNGROUP

{{cmd:UNGROUP}} razdre skupine: izberite predmete skupin (vsaka skupina, v kateri so, se razdre) ali vnesite `Name` in ime skupine. Predmeti ostanejo v risbi. En korak razveljavitve vrne skupine.

### GROUPEDIT

{{cmd:GROUPEDIT}} spremeni eno skupino. Izberite enega od njenih predmetov ali `Name` in njeno ime; skupina, ki je že izbrana, se vzame, kakršna je. Nato: `Add` predmete (izbrane enega za drugim, ne skupine za skupino), `Remove` predmete, `REName` skupino (Preimenuj), spremeni njen `Description` ali nastavi `Selectable` (ali klik na en predmet izbere celotno skupino). `eXit` ali Enter konča. Skupina brez predmetov izgine.

### PICKSTYLE

- `Izbira skupine: 0 klik izbere en predmet, 1 celotno skupino`: z `1` (začetna nastavitev) klik ali okno na zgrupiranem predmetu izbere celotno skupino; z `0` posamezne predmete, da lahko uredite enega člana. Ohranjeno za to sejo.

## Odložišče

CadCraftovo lastno odložišče: deluje znotraj risbe, med risbami in med zavihki CadCraft v tem brskalniku. Glejte [Kopiranje, prilepljanje in podvajanje](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ali {{ui:Copy}} v skupini {{ui:Edit}}. Kopira predmete v odložišče skupaj z bloki in sloji, ki jih uporabljajo. Predmeti ostanejo izbrani.

- `Izberite predmete za kopiranje` (preskočeno, če so predmeti že izbrani)

### CUTCLIP

{{key:Mod+X}}, ali {{ui:Cut}} v meniju {{ui:More}}. Kopira predmete v odložišče, nato jih izbriše (en korak razveljavitve).

- `Izberite predmete za izrezovanje` (preskočeno, če so predmeti že izbrani)

### COPYBASE

Kopira predmete v odložišče z izhodiščno točko, ki jo izberete; prilepljanje postavi to točko.

- `Določite izhodiščno točko`
- `Izberite predmete za kopiranje`

### PASTECLIP

{{key:Mod+V}}, ali {{ui:Paste}} v skupini {{ui:Edit}}. Kopija sledi kazalcu, visi z spodnjega levega kota svojih obsegov (ali z njihovega središča, ali s točke `COPYBASE`; glejte [Nastavitve CadCraft](topic:settings)).

- `Določite točko vstavljanja`

Prilepljeni predmeti so izbrani. Blok, ki ga risba že ima pod istim imenom, ohrani definicijo te risbe.

Ko je območje, kopirano v MarkupCraft, novejše od tistega, kar je kopiral CadCraft (in staro manj kot 6 ur), {{key:Mod+V}} in `PASTECLIP` namesto tega prilepita to območje: glejte `PASTEAREA`.

### PASTEAREA

Bližnjice: `PAREA`. {{ui:Paste a copied area}} v meniju {{ui:More}}. Prilepi območje, kopirano z {{ui:Copy area}} v MarkupCraft, kot sliko v pravi velikosti. Glejte [Slike v risbi](topic:pictures).

- `Določite levo spodnje oglišče kopiranega območja`
- `Merilo njegove velikosti na papirju (100 za list v merilu 1:100; Točke: dve točki na njem in njuna prava razdalja) [Točke] <1>` (samo, če list ni imel merila risbe): število, {{key:Enter}} za velikost papirja ali `P`, nato `Prva točka na prilepljenem območju`, `Druga točka na prilepljenem območju` in njuna prava razdalja.

### PASTEORIG

{{key:Mod+Shift+V}}, ali {{ui:Paste in place}} v meniju {{ui:More}}. Prilepi na koordinate, iz katerih so bili predmeti kopirani. Ne sprašuje ničesar.

### DUPLICATE

Bližnjice: `DUP`. {{key:Mod+D}}, ali {{ui:Duplicate and move}} v meniju {{ui:More}}. Kopija predmetov se premika s kazalcem od mesta, kjer je; {{key:Esc}} ne pusti ničesar. Ne uporablja odložišča.

- `Izberite predmete za podvajanje` (preskočeno, če so predmeti že izbrani)
- `Določite, kam gre kopija (Esc ne pusti ničesar)`: kliknite, vnesite točko, `@dx,dy` (od mesta, kjer je bil kazalec), ali razdaljo proti kazalcu.

### SELECT

Vpraša `Izberite predmete` (z vsako spodnjo možnostjo) in pusti, kar ste izbrali, izbrano za naslednji ukaz ali za kasnejši `P`.

### QSELECT

Bližnjice: `QS`. V brskalniku pogovorno okno {{ui:Quick select}} (glejte [Izbira predmetov](topic:select-objects#select-by-a-rule-quick-select)). Brez njega ukazna vrstica vpraša `Vnesite vrsto predmeta`, `Vnesite lastnost`, `Vnesite operator [=/<>/>/</*/Izberi vse] <=>` in `Vnesite vrednost`. Ujemanja postanejo izbor.

### SELECTSIMILAR

Bližnjice: `SIM`. `Izberite predmete [SEttings]` (ali trenutni izbor): izbere vsak predmet iste vrste z istim slojem in barvo (in imenom bloka, vzorcem šrafure). `SE` vpraša `Vklopite ali izklopite lastnost [LAyer/COlor/NAme/PAttern/HEight]`, ponavljano do {{key:Enter}}.

### FIND

Brez bližnjic; ali {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. V brskalniku pogovorno okno {{ui:Find and replace}} (glejte [Dodajanje besedila in oznak](topic:text#find-and-replace-words)). Brez njega: `Vnesite besedilo za iskanje`, nato `Vnesite nadomestno besedilo (Enter: izberi najdeno)`. Išče v besedilu, vrednostih atributov in besedilu kot, na odprtem zavihku ali v izboru.

### SELECTALL in DESELECT

`SELECTALL` (bližnjica `AI_SELALL`, {{key:Mod+A}}) izbere vsak predmet, ki ga lahko uredite na odprtem zavihku. `DESELECT` (bližnjice `AI_DESELECT`, `SELECTNONE`; ali {{key:Esc}}) počisti izbor.

## Kotiranje

### DIMLINEAR

Bližnjice: `DLI`, `DIMLIN`. Vodoravna ali navpična razdalja.

- `Določite izhodišče prve pomožne merilne črte [Izberi predmet]` (Enter ali `S`: `Izberite predmet za kotiranje`, nato kliknite črto, lok, krožnico ali odsek polilinije)
- `Določite izhodišče druge pomožne merilne črte`
- `Določite mesto kotne črte [Besedilo/Vodoravno/Navpično/Zasukano]`. `T` vpraša za besedilo (`<>` je izmerjena vrednost), `H` in `V` določita smer, `R` vpraša `Določite kot kotne črte <0>`.

### DIMALIGNED

Bližnjice: `DAL`, `DIMALI`. Prava razdalja med dvema točkama.

- Izhodišča kot pri {{cmd:DIMLINEAR}}, nato `Določite mesto kotne črte [Besedilo]`.

### DIMANGULAR

Bližnjice: `DAN`, `DIMANG`.

- `Izberite lok, krožnico ali črto, ali Enter za oglišče`
- Lok: njegov kot. Krožnica: `Določite drugo krajišče kota`. Črta: `Izberite drugo črto`. Enter: `Določite oglišče kota`, `Določite prvo krajišče kota`, `Določite drugo krajišče kota`.
- `Določite mesto kotne črte [Besedilo]`: kliknite znotraj kota, ki ga merite.

### DIMRADIUS in DIMDIAMETER

Bližnjice: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Izberite lok ali krožnico`, nato `Določite mesto kotne črte [Besedilo]`.

### DIMCONTINUE

Bližnjice: `DCO`, `DIMCONT`. Nadaljuje od zadnje linearne ali poravnane kote (ali vpraša `Izberite linearno ali poravnano koto`).

- `Določite izhodišče druge pomožne merilne črte [Razveljavi (U)]`, ponavljano do Enter.

### DIMBASELINE

Bližnjice: `DBA`, `DIMBASE`. Kot {{cmd:DIMCONTINUE}}, vendar vsaka kota začne pri prvem izhodišču in je naložena dlje navzven.

### DIMORDINATE

Bližnjice: `DOR`, `DIMORD`. `Določite mesto elementa`, nato `Določite krajišče vodilke [Xdatum/Ydatum/Besedilo]`. Zapiše, kako daleč je element od izhodišča UCS vzdolž X ali vzdolž Y, na vodilki: vodilka, ki teče večinoma navzgor ali navzdol, bere X, tista, ki teče vstran, bere Y; `Xdatum` in `Ydatum` to določita. Izhodišče najprej nastavite z {{cmd:UCS}} (brez njega je 0,0 risbe). Ročice premaknejo element, izhodišče in konec vodilke, vrednost pa sledi. Shranjeno kot prava ordinatna kota v DWG in DXF. Zavrne konec vodilke na samem elementu.

### DIMARC

Bližnjice: `DAR`. `Izberite lok ali segment polilinijskega loka`, nato `Določite mesto kote dolžine loka [Besedilo]`. Meri vzdolž loka (ne tetive) in pred vrednostjo zapiše simbol loka. Zavrne polno krožnico, črto ali ravni segment polilinije. DWG ga hrani kot kot dolžine loka; DXF ga hrani kot kotno koto z dolžino kot besedilom, CadCraft pa ga ob odprtju spet odpre kot kot dolžine loka.

### DIMJOGGED

Bližnjice: `DJO`, `JOG`. `Izberite lok ali krožnico`, `Določite prepis središčne lokacije`, `Določite lokacijo zloma`. Kota polmera za krivuljo, katere središče je daleč ali zunaj lista: kotna črta se začne pri točki, ki jo podate, namesto pri središču, z zlomom v njej, vendar še vedno zapiše pravi polmer. DWG ga hrani kot kota polmera z zlomom; DXF ga hrani kot kota polmera, CadCraft pa ga ob odprtju spet odpre z zlomom.

### DIMJOGLINE

Bližnjice: `DJL`. `Izberite koto za dodajanje zloma [Odstrani]`, nato `Določite lokacijo zloma (ali pritisnite Enter)`. Postavi simbol zloma na črto linearne ali poravnane kote, da pokaže, da razdalja ni narisana v merilu; vrednost se ne spremeni. `Odstrani` ga vzame. Zavrne druge vrste kot.

### QDIM

Brez bližnjic. `Izberite geometrijo za kotiranje`, nato `Določite položaj kotne črte [Zvezno/Zamaknjeno/Osnovno/Ordinatno/Polmer/Premer/točkaIzhodišča]`. Kotira več predmetov v enem koraku, od krajišč črt in odsekov polilinij, središč krožnic in lokov, točk in sklicev blokov. Položaj nad ali pod predmeti meri čez, ob njih pa navzgor. `Zvezno` poveže točke v verigo, `Osnovno` meri vse od prve, `Zamaknjeno` gnezdi pare od sredine navzven, `Ordinatno` da vsaki točki njeno razdaljo od izhodišča (`točkaIzhodišča` izbere novo), `Polmer` in `Premer` kotirata vsako izbrano krožnico in lok. Način se zapomni. Vse, kar naredi, je en korak razveljavitve. Pove, če je manj kot dve točki ali ni lokov ali krožnic za Polmer in Premer.

### DIMBREAK

Bližnjice: `DBREAK`. `Izberite kote za dodajanje ali odstranjevanje prelomov`, nato `Prelomi tam, kjer sekajo drugi predmeti [Samodejno/Ročno/Odstrani] <Samodejno>`. `Samodejno` pusti vrzel v kotni in pomožni merilni črti, kjer koli jo seka drug predmet, in jo spet izračuna, ko se ti predmeti ali kota premaknejo. `Ročno` (ena kota) vpraša za dve točki in pusti vrzel med njima. `Odstrani` vzame vse vrzeli. Vrzel je 1,5-kratnik višine besedila kote.

### DIMSPACE

Brez bližnjic. `Izberite osnovno koto`, `Izberite kote za razmik`, `Vnesite vrednost razmika ali Samodejno <Samodejno>`. Premakne kotne črte vzporednih linearnih in poravnanih kot (ali kotnih okoli istega oglišča), tako da so enako oddaljene, merjeno od osnovne kote, vsaka na svoji strani. `0` jih poravna z osnovno; `Samodejno` je dvakratna višina besedila osnovne kote. Kote, ki niso vzporedne z osnovno, ostanejo nedotaknjene.

### DIMINSPECT

Brez bližnjic. `Izberite kote`, `Oblika okvirja pregleda [Okrogla/Kotna/Brez/odstrani] <Okrogla>`, `Vnesite oznako`, `Vnesite stopnjo pregleda <100%>`. Nariše okvir okoli vrednosti z oznako pred njo in stopnjo pregleda za njo. `odstrani` ga vzame. Besedilo tolerance ostane z vrednostjo.

### DIMOVERRIDE

Bližnjice: `DOV`, `DIMOVER`. `Vnesite ime spremenljivke kotiranja za prepis ali Počisti`, `Vnesite novo vrednost za …`, znova do Enter, nato `Izberite kote`. Spremeni te nastavitve samo na izbranih kotah; slog kotiranja ostane nespremenjen. Vzame spremenljivke, ki so število ali stikalo (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Počisti` vrne izbrane kote na njihov slog. Zavrne ime, ki ni taka spremenljivka, in vrednost, ki je ne sprejme.

### DIMREASSOCIATE

Bližnjice: `DRE`, `DIMREASSOC`. `Izberite kote`, nato za vsako njene izhodiščne točke pomožnih merilnih črt (`Določite izhodišče prve pomožne merilne črte na predmetu`: prilepi na krajišče ali sredino črte, oglišče polilinije, središče; Enter pusti to točko prosto), ali za polmer, premer, kota polmera z zlomom ali kota dolžine loka `Izberite lok ali krožnico`. Kota je nato vezana na te predmete: ko se premaknejo ali spremenijo velikost, ji sledi v istem koraku razveljavitve in se spet izmeri. Premik vezane točke z roko ali izbris predmeta to vez prekine. Vez se v DWG in DXF 2000 shrani kot lastni podatki CadCraft; drugi programi vidijo navadno koto.

### DIMDISASSOCIATE

Bližnjice: `DDA`, `DIMDISASSOC`. `Izberite kote`. Sprosti jih od predmetov, na katere so vezane; nič se ne premakne.

### CENTERMARK

Bližnjice: `CM`, `DIMCENTER`, `DCE`. `Izberite krožnico ali lok za dodajanje središčne oznake`, znova do Enter. Nariše križec v središču in štiri središčnice malo čez krivuljo (tip črte CENTER), kot navadne črte na trenutnem sloju; velikost je določena z velikostjo puščice in splošnim merilom trenutnih nastavitev kotiranja, zasuk pa z UCS. Ne sledijo krožnici, če se ta premakne.

### CENTERLINE

Bližnjice: `CL`. `Izberite prvo črto`, `Izberite drugo črto`. Nariše črto na sredini med dvema črtama (vzdolž simetrale, če se stikata), malo daljšo od njiju, v tipu črte CENTER. Navadna črta: ne sledi dvema črtama.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Brez bližnjic. Vsaka vpraša `Vnesite novo vrednost za … <trenutno>` in nastavi to velikost za **nove** kote: splošno merilo, višina besedila, velikost puščice, decimalna mesta (do 8), razmik okoli besedila, podaljšek čez kotno črto, odmik od izhodišča. Glejte [Nastavitev velikosti kot](topic:dimension-settings).

### DIMLUNIT

Nastavitev kotiranja: format dolžin samo za nove kote (1 znanstveni, 2 decimalni, 3 inženirski, 4 arhitekturni, 5 ulomki).

### DIMSTYLE in -DIMSTYLE

Bližnjice: `DST`, `DDIM`, `D`. Upravitelj slogov kotiranja: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` v ukazni vrstici: `Slog kotiranja [Obnovi/Shrani/Izbriši/Uporabi/Primerjaj/preimenuj (E)/Seznam]`. Glejte [Nastavitev velikosti kot](topic:dimension-settings#named-dimension-styles).

### DIMEDIT in DIMTEDIT

`DIMEDIT` (`DED`): `Urejanje kote [Domov/Novo/Zasukaj/Poševno] <Domov>`, nato kote (ali tiste, ki so že izbrane). Novo vpraša za besedilo (`<>` = meritev); Zasukaj za kot (0 vrne besedilo nazaj); Poševno za kot, pod katerim tečejo pomožne merilne črte od osi X (Enter = nobenega; samo linearne in poravnane kote). `DIMTEDIT` (`DIMTED`): `Besedilo kote [Levo/Desno/Središče/Domov/Kot] <Središče>`. Glejte [Nastavitev velikosti kot](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Bližnjice: `DTU`. `Enote v besedilu novih kot [Enote risbe/mm/cm/m/km]`, ali z izbranimi kotami `Enote v besedilu izbranih kot`. Zapiše izmerjeno dolžino v tej enoti z enoto za njo (DIMLFAC in pripona DIMPOST); `D` se vrne na enote risbe. Glejte [Kote v mm, cm, m ali km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Bližnjice: `RC`. Izpiše `Dolžina loka: … Vrsta: …`, nato `Določite prvo točko [Dolžina loka/Predmet/Pravokotno/Mnogokotno/Prosto]`. Pravokotno vpraša `Določite nasprotno oglišče`; Mnogokotno `Določite naslednjo točko (Enter zapre oblak) [Razveljavi (U)]`; Prosto sledi kazalcu do klika ali {{key:Enter}}; `O` vpraša `Izberite predmet` in `Obrnem smer? [Da/Ne] <N>` ter predmet spremeni v oblak. `A` vpraša `Določite dolžino vsakega loka`. `R`, `P` in `F` izberejo vrsto za naslednji oblak. Rezultat je zaprta polilinija iz lokov.

### MLEADER

Bližnjice: `MLD`; ali {{ui:Leader}}. `Določite mesto konice puščice vodilke [Velikost puščice/Razdalja pristanka/Blok]`, `Določite mesto pristanka vodilke`, nato besedilo v okvirju na mestu (ali brez njega `Vnesite besedilo (prazna vrstica konča)`). `Blok` najprej vpraša za ime bloka in večkratna vodilka pokaže ta blok namesto besedila. Več vodilnih črt: {{cmd:MLEADEREDIT}}. Shranjeno kot prava večkratna vodilka v DWG; DXF hrani črte, konico puščice in besedilo, ki jih nariše.

### MLEADEREDIT

Bližnjice: `MLE`. `Izberite večkratno vodilko`, nato `Določite mesto konice puščice vodilke [Odstrani vodilke/Vsebina bloka/Vsebina besedila]`: vsaka točka doda vodilno črto od nove konice puščice do istega pristanka, do Enter. `Odstrani vodilke` nato vzame vodilno črto, na katero kliknete (večkratna vodilka ohrani vsaj eno). `Vsebina bloka` vpraša za ime bloka in pokaže ta blok namesto besedila (vpraša se za njegove atribute); `Vsebina besedila` vrne besedilo. Vsaka vodilna črta ima svojo ročico. DWG ohrani vsako vodilno črto in blok v eni večkratni vodilki.

### MLEADERALIGN

Bližnjice: `MLA`. `Izberite večkratne vodilke`, nato `Izberite večkratno vodilko, na katero se poravnava [Razporedi/Razmik/Uporabi trenutni razmik]` in `Določite smer`. Premakne pristanke drugih večkratnih vodilk (in njihovo besedilo ali blok) na črto skozi pristanek izbrane v tej smeri; konice puščic ostanejo, kamor kažejo. `Razmik` jim nastavi tudi enak razmik; `Razporedi` vpraša za dve točki in jih enakomerno razporedi med njima. Potrebujete vsaj dve večkratni vodilki.

### MLEADERCOLLECT

Bližnjice: `MLC`. `Izberite večkratne vodilke`, nato `Določite mesto zbrane večkratne vodilke [Navpično/Vodoravno]` (Enter ohrani mesto prve). Naredi eno večkratno vodilko iz več: vsebina bloka gre v nov blok, ki drži vsak blok drug ob drugem ali drug pod drugim; vsebina besedila postane ena opomba z vrstico za vsako. Prva večkratna vodilka ohrani svoje vodilne črte; druge se odstranijo. Zavrne mešanico besedila in vsebine bloka.

### TABLE

Bližnjice: `TB`; ali {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Naredi tabelo: en predmet, ki ga premikate, kopirate, zasučete, spremenite v merilu in izrišete kot vsakega drugega, z njenimi celicami, shranjenimi kot podatki.

- `Število podatkovnih vrstic ali [Prilepi/Datoteka/Slog] <3>`, nato `Število stolpcev <3>`, `Višina besedila` in `Zgornje levo oglišče tabele`. Tabela dobi naslovno vrstico (ena združena celica) in glavno vrstico nad podatkovnimi vrsticami.
- `P`: tabela iz celic preglednice na odložišču (besedilo z tabulatorjem med celicami). Pritisk {{key:Ctrl+V}} s takimi celicami na odložišču naredi isto, razen če je CadCraftova lastna kopija novejša (ali če CadCraft ne more ugotoviti: tedaj prilepi svojo kopijo in to pove). `F`: tabela iz datoteke `.csv` ali datoteke, ločene s tabulatorji. Prva vrstica postane glavna vrstica; širine stolpcev se prilagodijo besedilu.
- `S`: izberite slog tabele za to tabelo (glejte {{cmd:TABLESTYLE}}).
- Zavrne število vrstic ali stolpcev, ki ni celo število, in več celic, kot jih tabela lahko drži (2.000 vrstic, 200 stolpcev, 40.000 celic).
- {{cmd:EXPLODE}} spremeni tabelo v črte in besedilo. Shranjena kot DWG je tabela pravi objekt tabele, ki ga drugi programi lahko urejajo; shranjena kot DXF je blok, ki jo nariše, CadCraft pa jo ob odprtju spet odpre kot tabelo.

### TABLEDIT

Bližnjice: `TABLEEDIT`, `TABEDIT`; ali dvakrat kliknite celico. Ureja tabelo.

- `Izberite celico za vpisovanje (Enter za konec) ali [Vrstica/Stolpec/Velikost/Združi/Razdruži/Poravnava/Višina/Vrsta/Počisti]`. Kliknite celico ali pa z izbrano tabelo vnesite njeno ime (`B3`: stolpec B, vrstica 3; naslovna vrstica je vrstica 1). V brskalniku se čez celico odpre okvir: {{key:Enter}} ohrani besedilo, {{key:Tab}} gre na naslednjo celico, {{key:Alt+Enter}} začne novo vrstico, {{key:Esc}} pusti celico, kakršna je bila.
- Besedilo, ki se začne z `=`, je formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, z `+ - * / ^`, oklepaji in funkcijami, kot sta `sqrt` in `round`. Celica prikaže vrednost; formula, ki imenuje svojo celico, celico zunaj tabele ali celico brez števila, prikaže `####`, ukazna vrstica pa pove, zakaj.
- `R` / `C`: `Vstavi` ali `Izbriši` vrstice ali stolpce pri izbrani celici (koliko, in zgoraj ali spodaj, levo ali desno). Formule sledijo celicam, ki jih imenujejo.
- `S`: širina stolpca in višina vrstice. Vrstica nikoli ni nižja, kot potrebuje njeno besedilo. Izbrana tabela ima tudi ročico na robu vsakega stolpca in vsake vrstice.
- `M`: združi od ene izbrane celice do druge; `U`: razdruži. `A`: poravnava (`TL` zgoraj levo … `MC` sredina na sredini … `BR` spodaj desno). `H`: lastna višina besedila te celice (0 = slog). `K`: naredi vrstico naslovno, glavno ali podatkovno. `CL`: izprazni celico.
- Zavrne tabelo na zaklenjenem sloju, brisanje vseh vrstic ali stolpcev in združitev, ki bi drugo združeno celico prerezala na dvoje.

### TABLESTYLE

Bližnjice: `TS`. Našteje sloge tabel s številom tabel, ki uporabljajo vsakega, nato `Slog tabele: [Novo/Nastavi/Uredi/Izbriši/Uporabi]`.

- Slog hrani višino besedila in poravnavo naslovne, glavne in podatkovne vrstice, odmik celice ter katere obrobe so narisane (zunanja, med vrsticami, med stolpci).
- `N` naredi slog iz trenutnega in ga nastavi kot trenutnega; `S` nastavi trenutni slog (nove tabele ga prevzamejo); `E` ureja enega: tabele, ki ga uporabljajo, se ponovno narišejo; `A` da izbranim tabelam trenutni slog; `D` izbriše enega (ne Standardno, ne trenutnega; tabele, ki so ga uporabljale, ohranijo svoj videz).
- Slogi se shranijo z risbo (DWG in DXF).

### TABLEEXPORT

Shrani, kar tabela prikazuje, kot datoteko CSV (formula kot svojo vrednost). `Izberite tabelo` ali jo izberite prej. Besedilne celice, ki se začnejo z `=`, `+`, `-` ali `@`, dobijo vodilni `'`, da jih preglednica ne zažene.

### TABLEPASTE

Bližnjice: `PASTETABLE`. Naredi tabelo iz celic preglednice na odložišču, nato vpraša za njeno zgornje levo oglišče. Isto kot {{cmd:TABLE}} › `Prilepi`.

### DATALINK

Bližnjice: `DL`. `Povezava podatkov: [Novo/Seznam/Odstrani] <Novo>`. `N` vpraša za datoteko CSV, postavi tabelo iz nje in si zapomni ime datoteke; `L` našteje povezave z njihovo datoteko, velikostjo, časom branja in številom tabel, ki jih uporabljajo; `R` odstrani povezavo (njene tabele ostanejo navadne tabele).

### DATALINKUPDATE

Bližnjice: `DLU`. Znova prebere datoteko povezave podatkov in znova napolni tabele, povezane z njo (vrstice in stolpci se dodajo ali odstranijo, da se ujemajo). Brskalnik ne more sam odpreti datoteke, zato vas prosi, da jo znova izberete. Če je več povezav, vpraša, katero.

### FIELD

Postavi polje v risbo: besedilo, ki si izračuna samo vrednost. `Polje: [Datum/Ime datoteke/List/Lastnost/Predmet/Izraz/Koda] <Datum>`:

- `D`: zdaj, ali shranjen, ustvarjen ali izrisan datum, in format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: ime datoteke, z ali brez njene končnice. `S`: številka lista, njegov naslov ali koliko je listov. `P`: lastnost risbe po imenu (glejte {{cmd:DWGPROPS}}). `O`: izberite predmet, nato kaj prebrati (površina, dolžina, obseg, polmer, premer, sloj, ime, x, y, besedilo, zasuk, barva) in decimalna mesta. `E`: formula. `C`: besedilo s kodami, vnesenimi kot so, na primer `List %<sheetnumber>% od %<sheetcount>%`.
- Nato `Izberite besedilo, celico tabele ali blok z atributi, v katerega ga dodate (Enter: novo besedilo)`: izbrano besedilo dobi polje, dodano za tem, kar vsebuje; enako celica tabele; sklic bloka vpraša, kateri atribut; {{key:Enter}} vpraša za višino in točko za novo besedilo.
- Na zaslonu ima polje svetlo sivo ozadje; izris in PDF ga nikoli nimata. Ročno tipkanje čez besedilo polja polje konča. Polje, ki se ne da izračunati, prikaže `####`.
- Polje predmeta najde svoj predmet po ključu, ki ga CadCraft hrani na predmetih (Nastavitve › CadCraft › Datoteke, prijazne združevanju); z izklopljenimi ključi zavrne.

### UPDATEFIELD

Bližnjice: `UPDATEFIELDS`. `Izberite predmete, katerih polja naj se posodobijo (Enter: vsa polja) ali [Nastavitve]`. `S` nastavi, kdaj se polja posodobijo samodejno: vtipkajte črke `O` odpri, `S` shrani, `P` izriši, `R` regeneriraj (vse štiri za začetek) ali `NONE`.

### DWGPROPS

Bližnjice: `DRAWINGPROPS`. Našteje lastnosti risbe, nato `Spremeni: [Naslov/Predmet/Avtor/Podjetje/Ključne besede/coMments/cUstom/Odstrani/eXit]`. Prvih šest je tisto, kar kaže podokno {{ui:Drawing details}}; `U` doda vaše lastno ime in vrednost, `R` odstrani enega. Polja jih berejo (`%<prop:title>%`, `%<prop:Client>%`) in takoj sledijo. Zavrne lastno ime, ki je eno od vgrajenih ali vsebuje `%`, `<`, `>`, narekovaj ali poševnico nazaj.

## Parametrično

Glejte [Omejitve risbe](topic:constraints) in [Uporaba parametrov in enačb](topic:parameters). Omejitve delujejo na zavihku {{ui:Model}}.

### GEOMCONSTRAINT in ukazi GC

Bližnjica `GCON`: `Vnesite vrsto omejitve [Vodoravna/Navpična/Pravokotna/Vzporedna/Tangentna/Sovpadajoča/Koncentrična/Kolinearna/Simetrična/Enaka/Fiksiraj] <Vodoravna>`, nato pozivi tega ukaza.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Izberite predmet [2Točki] <2Točki>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Izberite prvi predmet`, `Izberite drugi predmet` (drugi se premakne).
- {{cmd:GCCOINCIDENT}}: `Izberite prvo točko [Predmet/Samodejna omejitev] <Predmet>`, `Izberite drugo točko [Predmet] <Predmet>`.
- {{cmd:GCFIX}}: `Izberite točko [Predmet] <Predmet>`.
- {{cmd:GCSYMMETRIC}}: `Izberite prvi predmet [2Točki] <2Točki>`, `Izberite drugi predmet`, `Izberite zrcalno črto`.

### DIMCONSTRAINT in ukazi DC

Bližnjica `DCON`: `Izberite pridruženo koto za pretvorbo [Linearna/Vodoravna/Navpična/Poravnana/Kotna/Polmer/Premer/Pretvori] <Poravnana>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Določite prvo točko omejitve [Predmet] <Predmet>`, `Določite drugo točko omejitve`, `Določite mesto kotne črte`, `Besedilo kote <d1=40>` (število, izraz ali `ime=izraz`).
- {{cmd:DCALIGNED}}: enako kot zgoraj, z `[Predmet/Točka in črta/2 črti]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Izberite lok ali krožnico`. {{cmd:DCANGULAR}}: `Izberite prvo črto ali lok`, `Izberite drugo črto`.
- {{cmd:DCCONVERT}}: `Izberite kote za pretvorbo`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Izberite predmete [Nastavitve]`. `S` vpraša za toleranco razdalje in kota.
- {{cmd:DELCONSTRAINT}} (bližnjica `DELCON`): `Izberite predmete`; njihove omejitve odidejo.
- {{cmd:CONSTRAINTBAR}} (bližnjica `CBAR`): `Izberite predmete [Prikaži vse/Skrij vse]`, nato `[Prikaži/Skrij]`.
- {{cmd:DCDISPLAY}}: `Vnesite možnost [Prikaži/Skrij]`.

### PARAMETERS in -PARAMETERS

{{cmd:PARAMETERS}} (bližnjice `PAR`, `PARAM`) odpre podokno {{ui:Parameters}}. `-PARAMETERS`: `Vnesite možnost [Novo/Uredi/Preimenuj/Izbriši/?] <?>`.

### SWBOUT

Bližnjica `SWMACRO`. Prenese makro (.swb), ki v SolidWorks znova zgradi model kot eno omejeno skico. Glejte [Premik skic v druge orodja za modeliranje delov](topic:solidworks-sketches).

## Bloki

### ANNOSCALE

Bližnjice: `CANNOSCALE`. Pove merilo zapisov risbe in koliko zapisanih predmetov vsebuje, nato vpraša `Novo merilo zapisov`: vnesite `1:50`, `1:100`, `2:1`, samo število (`50` pomeni 1:50) ali ime enega od lastnih meril risbe. Vsako zapisano besedilo in kota se preoblikuje, da se pri novem merilu natisne v isti velikosti, v enem koraku razveljavitve; predmeti, ki niso zapisani, ostanejo nedotaknjeni, prav tako predmet, ki hrani seznam meril brez novega ({{cmd:OBJECTSCALE}}). Glejte [Enote, papirji in merila](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Bližnjice: `OBJSCALE`. `Izberite zapisane predmete`, nato `Merila zapisov izbranih predmetov [Dodaj/Izbriši/Trenutno merilo/Seznam/eXit] <Dodaj>`. Zapisano besedilo ali kota hrani seznam meril zapisa. `Dodaj` in `Izbriši` vprašata za merilo (`1:50`, `2:1`, samo število ali ime enega od lastnih meril risbe); `Trenutno merilo` doda merilo zapisa risbe; `Seznam` izpiše merila vsakega predmeta. Pogled, katerega merilo je na seznamu predmeta, prikaže predmet v velikosti, ki pri tem merilu natisne njegovo višino na papirju, na zaslonu in v izrisih. Zadnjega merila ni mogoče izbrisati. Predmeti, ki niso zapisani, so izpuščeni: najprej vklopite Zapisano v Lastnostih. Seznami so shranjeni v DWG in DXF kot lastni podatki CadCraft. Glejte [Enote, papirji in merila](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Bližnjice: `ANNOALL`. `Prikaži zapisane predmete pri vseh merilih [ON/OFF]`. Vklopljeno (kakor se risba začne): zapisan predmet se pokaže tudi v pogledu ali v modelu, katerega merilo ni na njegovem seznamu, v velikosti, ki jo ima. Izklopljeno: tam se ne pokaže in ga v modelu ni mogoče izbrati. Preklop je en korak razveljavitve; ne shrani se v datoteko.

### SCALELISTEDIT

Bližnjice: `SCALELIST`. `Seznam meril [Dodaj/Uredi/Izbriši/Seznam/Ponastavi]` do {{key:Enter}}. Dodaj: `Ime merila`, `Enote na papirju`, `Enote risbe`. Uredi in Izbriši vprašata za ime merila. Lastna merila risbe se pridružijo seznamom meril pogleda in izrisa ter se shranijo z risbo. Glejte [Enote, papirji in merila](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT in PEDIT

`SPLINE` (`SPL`): `Prva točka zlepka [Metoda/Predmet] (Točke prilagajanja)`. Prilagajanje: točke, skozi katere gre krivulja; `Zapri`, `Razveljavi`, nato `Začetna tangenta` in `Končna tangenta` (točka ali {{key:Enter}}). Metoda › Kontrolna oglišča vpraša za stopnjo (1 do 5) in riše iz kontrolnega poligona. Predmet spremeni polilinije v zlepke skozi njihova oglišča. `SPLINEDIT` (`SPE`): `[Podatki prilagajanja/Uredi oglišče/pretvori v polilinijo/Odpri ali zapri/Obrni/Razveljavi/eXit]`; Podatki prilagajanja `[Dodaj/Izbriši/Premakni/Počisti/Tangente/eXit]`; Uredi oglišče `[Dodaj kontrolno točko/Premakni/Utež/eXit]`. `PEDIT` (`PE`): `[Zapri/Odpri/Združi/Širina/Prilagodi/Zlepek/Odkrivi/Generiranje tipa/Obrni/Razveljavi/eXit]`, `M` za več predmetov; črte, loki in zlepki so najprej ponujeni kot polilinije. Glejte [Zlepki in polilinije](topic:splines).

### BLOCK

Bližnjice: `B`, `BMAKE`.

- `Vnesite ime bloka`. Če obstaja: `Blok "…" že obstaja. Ga ponovno določim? [Da/Ne] <N>`.
- `Določite izhodiščno točko vstavljanja`
- `Izberite predmete`. Zamenjani so z enim sklicem na novi blok.

### WBLOCK

Bližnjice: `W`, `-WBLOCK`. Zapiše blok, nekaj predmetov ali vso risbo kot novo datoteko DWG ali DXF. `Vir WBLOCK [Blok/Cela risba/Predmeti] <Predmeti>`:

- **Predmeti**: `Določite izhodiščno točko vstavljanja` (postane izhodišče nove risbe), `Izberite predmete`, nato `Oblika datoteke [DWG/DXF/R12 DXF]` in `Ime datoteke za novo risbo`, nato `Kaj storiti s predmeti [Ohrani/Pretvori v blok/Izbriši]`. Pretvori jih zamenja z enim sklicem na blok z imenom datoteke; Izbriši jih odstrani.
- **Blok**: `Blok za zapis`. Lastni predmeti bloka, z njegovo izhodiščno točko kot izhodiščem, vključno z gnezdenimi bloki.
- **Cela risba**: vsak predmet v prostoru modela. Listi se ne zapišejo; za kopijo, ki jih ohrani, uporabite {{cmd:SAVEAS}}.

Nova datoteka hrani samo sloje, tipe črt, besedilo in sloge kotiranja ter bloke, ki jih uporabljajo njeni predmeti, in enote risbe. Različica DWG je tista, ki jo je {{cmd:SAVEAS}} nazadnje uporabil. V brskalniku se datoteka prenese; v Studiu se odpre pogovorno okno za shranjevanje.

### ATTDEF

Bližnjice: `ATT`, `DDATTDEF`, `-ATTDEF`; ali {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Izpiše načine, nato `Vnesite možnost za spremembo (Enter, ko končate) [Nevidno/Konstantno/Prednastavljeno]`, `Vnesite ime oznake atributa`, `Vnesite poziv atributa`, `Vnesite privzeto vrednost atributa` (`Vnesite vrednost atributa`, če je konstantno), `Določite začetno točko besedila`, `Določite višino besedila`, `Določite kot zasuka besedila`. {{cmd:BLOCK}} prenese definicije atributov v blok.

### EATTEDIT in ATTEDIT

`EATTEDIT` (`DDATTE`, ali dvakrat kliknite sklic z atributi; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Izberite sklic bloka z atributi`, nato pogovorno okno {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): isti sklic, nato `<poziv> (<OZNAKA>) <vrednost>` za vsak atribut; {{key:Enter}} ohrani vrednost. Glejte [Atributi](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Posodobi atribute sklicev katerega bloka [Ime/Izberi/Vse] <Izberi>`. Vrednosti se ohranijo; novi atributi dobijo svojo privzeto vrednost, odstranjeni odidejo, položaji se ponastavijo.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. Pogovorno okno: blok, atributi (oznaka, poziv, privzeta vrednost, načini, vrstni red), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT in REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Izberite sklic bloka za urejanje na mestu` (ali izbor). `REFCLOSE`: `Shranim spremembe v "…" [Shrani/Opusti (D)] <Shrani>`; {{ui:Save the block}} in {{ui:Discard}} na vrstici naredita isto. Celotno urejanje je en korak razveljavitve. Glejte [Atributi](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT in BCLOSE

`BE`; ali {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Vnesite ime bloka za urejanje <blok izbranega sklica>` odpre urejevalnik blokov. `BCLOSE` vpraša `Zapri urejevalnik blokov za "…" [Shrani/Opusti (D)] <Shrani>`; {{ui:Save block}} in {{ui:Discard changes}} na traku naredita isto. Vse, kar naredite v urejevalniku, je en korak razveljavitve.

### VIEWBASE

Bližnjica: `FLATSHOT`. Ploski 2D pogled teles na zavihku 3D: `Pogled [Spredaj/Zgoraj/Desno/Levo/Zadaj/Spodaj/Izometrično]`, `Skrite črte [Prikaži/Skrij]`, merilo (`1:20`, `2:1`; {{key:Enter}} vzame tisto, ki ustreza listu), nato središče pogleda. En sklic bloka, vidni robovi na VIEW-VISIBLE, skriti robovi črtkani na VIEW-HIDDEN. Glejte [Ploski pogledi na listu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Bližnjice: `-PUBLISH`; ali {{ui:All sheets in one PDF}} v pogovornem oknu {{ui:Plot to PDF}}. `Listi za izris [Vsi/Nekateri]`: {{key:Enter}} izriše vsak list, `S` vpraša za imena, ločena z vejicami. En PDF, stran in zaznamek za vsak list. Glejte [Vsi listi v enem PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Bližnjice: `SSM`, `SHEETSETMANAGER`. Pripelje vas do razdelka {{ui:Sheet set}} v levem podoknu: listi iz mnogih risb, oštevilčeni in naslovljeni, njihove glave risb napolnjene iz kompleta, objavljeni kot en PDF. Glejte [Kompleti listov](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): izberite DWG ali DXF, nato njeno točko vstavljanja. {{cmd:XREF}} (`XR`, `-XREF`): `Povezane risbe [?/Pripni/Znova naloži/Veži/Odpni] (Enter: ?)`; pri več povezavah izberite enega od njenih sklicev ali vnesite `N` in njegovo ime. Glejte [Povezane risbe](topic:files#linked-drawings-external-references).

### COUNT

Bližnjice: `BCOUNT`; ali {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Izberite sklic bloka za štetje ali [Vse/Izvoz] (Enter: Vse)`: izbira izbere in prešteje vsak sklic tega bloka v tem prostoru; {{key:Enter}} ali `A` jih vse našteje; `E`, nato `C` (šteje) ali `A` (atribute) prenese CSV. Glejte [Štetje blokov in izvoz razporeda](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Bližnjice: `I`, `DDINSERT`.

- `Vnesite ime bloka ali [Datoteka/Knjižnica] <zadnji blok>` (velikost črk ni pomembna). `F` vpraša za DWG ali DXF, nato za celo risbo ali enega od njenih blokov; ime, ki je že v uporabi, vpraša {{ui:Keep existing}} ali {{ui:Rename}}. `L` odpre podokno knjižnice.
- `Določite točko vstavljanja [Merilo/Zasuk]`. `S` vpraša `Določite faktor merila`, `R` vpraša `Določite kot zasuka`; oboje se zapomni.
- Kadar blok že stoji ob predmetih, ki se drugje ponavljajo brez njega, vrstica pove, koliko mest je predlaganih, poziv pa dobi `predlagano`: `G` jih pokaže; kliknite blizu enega, da tja postavite blok, `A` za vse, {{key:Enter}} za vrnitev. Prevzamejo zasuk svojih sosedov in privzete vrednosti atributov. Risbe z več kot 20.000 predmeti v odprtem prostoru se ne preiskujejo.
- Nato `Vnesite <poziv> (<OZNAKA>) <privzeto>` za vsak atribut, ki ga blok zahteva. Glejte [Atributi bloka](topic:attributes).

### LIBRARY

Bližnjice: `LIB`. Odpre podokno knjižnice: postavite elemente, preverite posodobitve, zasluge knjižnice. Brez vprašanj. Glejte [Vstavljanje iz datoteke ali knjižnice](topic:insert-from-file-and-library).

### STEELMEMBER

Bližnjice: `SMEMBER`; ali {{ui:3D member}} na zavihku {{ui:Standard}} knjižnice. `Velikost profila <W12x26>` (kot ga navaja zavihek), nato `Začetna točka [Steber]` in `Končna točka`: trden element na zavihku 3D med tema točkama, stoji na tleh. `C` vpraša za izhodiščno točko stebra in njegovo višino. En korak razveljavitve. Glejte [Postavitev jeklenih profilov in standardnih delov](topic:steel-and-standard-parts).

### PARTSLIST

Bližnjice: `PLIST`. `Zgornje levo oglišče seznama delov`, nato `Višina besedila <2.5>`: nariše tabelo vsakega standardnega dela in jeklenega profila, postavljenega iz knjižnice (številke postavk, količina, del, standard, velikost, dolžina, material, masa). En korak razveljavitve. Glejte [Postavitev jeklenih profilov in standardnih delov](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Bližnjice: `PU`. Odstrani definicije blokov, ki jih nič ne uporablja. Brez vprašanj.

### DELBLOCKS

Ali {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Izberite blok za brisanje [Ime/eXit]`: kliknite sklic bloka ali vnesite `N` za seznam blokov s filtrom (izberite več) ali `X` / {{key:Enter}} za konec. Odide vsak sklic — v modelu, na vsakem listu in znotraj drugih blokov — nato definicija, ukazna vrstica pa pove, kaj je izbrisano in kaj ne. Neimenovani bloki in povezane risbe niso ponujeni. Poziv se vrne za naslednji blok; celoten ukaz je en korak razveljavitve.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} prilepi, kar ste kopirali ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), kot en blok: izberite točko vstavljanja in tja gre en sklic na nov blok, izbran. Blok dobi svoje ime (`A$C` in število); {{cmd:RENAME}} mu da vašega. En korak razveljavitve odstrani sklic in blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} vpraša za blok, ki ga nadomesti, in blok, ki pride na njegovo mesto (`?` našteje bloke), nato spremeni vsak sklic v modelu, na vsakem listu in znotraj drugih blokov. Vsak sklic obdrži svoje mesto, merilo, zasuk, sloj in vrednosti atributov, ki jih imata oba bloka; atributi, ki jih ima samo novi blok, začnejo s privzetimi vrednostmi, in pove, katere vrednosti so bile opuščene. Ko starega bloka ne uporablja nihče več, ponudi, da ga odstrani. Zavrne povezane risbe in nadomestilo, ki bi postavilo blok znotraj samega sebe. En korak razveljavitve.

### MINSERT

{{cmd:MINSERT}} postavi blok v vrstice in stolpce: ime bloka, točka vstavljanja, merilo, zasuk, število vrstic in stolpcev ter razdalje med njimi. Ves sklop se zavrti z zasukom. Vsak je svoj sklic (največ 10.000), zato lahko katerega koli kasneje premaknete ali izbrišete.

### BLOCKSPALETTE

Bližnjice: `BLOCKSPAL`; ali {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Prikaže podokno {{ui:Blocks}} s kazalcem v filtru. Vsak blok ima majhno sliko; tisti, vstavljeni nazadnje, so prvi. Dva gumba ob filtru preklapljata med seznamom in mrežo slik. Kliknite sliko (ali {{ui:Insert}}), da postavite blok z {{cmd:INSERT}}, ali ga povlecite na risbo, da ga postavite tja, kamor ga spustite.

Pod {{ui:Libraries}}, na seznamu: {{ui:Add a drawing}} vzame vašo lastno datoteko DWG ali DXF in našteje njene bloke s slikami ter celo risbo kot en blok. Postavitev enega kopira njegovo definicijo (in gnezdene bloke ter njihove sloje) v to risbo, kot to naredi možnost `File` pri {{cmd:INSERT}}; blok, ki je tu že z isto definicijo, se uporabi brez vprašanja, eden z istim imenom, ki se razlikuje, pa vpraša {{ui:Keep existing}} ali {{ui:Rename}}. V brskalniku datoteka ostane, dokler se stran ne zapre. V CadCraft Studio {{ui:Add a folder}} našteje risbe v mapi, vsako odprto, ko jo kliknete, datoteke in mape pa se zapomnijo. Majhen x odstrani knjižnico s seznama; datoteka se ne dotakne. Skupna {{ui:Library}} je nekaj drugega: glejte [Vstavljanje iz datoteke ali knjižnice](topic:insert-from-file-and-library).

### BCONVERT

Ali {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Najde geometrijo, ki se ponavlja, in vsako kopijo spremeni v sklic na en blok.

- `Izberite predmete, ki se ponavljajo, ali [Blok]`: predmeti ene kopije. `B` namesto tega imenuje obstoječi blok, da najde ohlapne kopije njegovih predmetov.
- `Kopija je lahko: zrcaljena = Ne, spremenjena = Ne; sloj, barva, tip črte in debelina črte = Ujema se … [Zrcaljeno/Spremenjeno/Lastnosti]`: `M`, `S` in `P` preklapljajo, kaj šteje kot kopija; {{key:Enter}} išče. Nastavitve se zapomnijo.
- `Ime za novi blok <Blok1>`, nato `Določite izhodiščno točko bloka` ({{key:Enter}} vzame spodnji levi kot izbora).
- Pove, koliko drugih množic predmetov ima isto geometrijo, označi vse, kar bi zamenjal, in vpraša `Da/Ne`.

Kopija so isti predmeti, premaknjeni in zasukani za poljuben kot (in zrcaljeni ali spremenjeni v merilu z enim faktorjem, kadar so ti vklopljeni): vsak predmet mora imeti svoj ustrezen par, do milijoninke velikosti izbora. Vsak sklic dobi svojo rotacijo in merilo (zrcaljen dobi negativno merilo Y), sloj pa sloj, ki so ga predmeti delili. Predmeti na zaklenjenih slojih ostanejo nedotaknjeni in se preštejejo. Iščejo se v odprtem prostoru (model ali odprti list). Zelo obsežno iskanje se ustavi pri delovni meji in to pove. En korak razveljavitve.

### BSEARCH

Ali {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Poišči bloke po [Ime/Atribut/Geometrija] <Ime>`:

- `N`: del imena bloka ali vzorec z `*` in `?`. Našteje vsak blok s sklici tu in v celotni risbi.
- `A`: vrednost atributa ali `OZNAKA=vrednost`. Našteje bloke, katerih sklici jo imajo, z najdenimi vrednostmi. Konstantni atributi se štejejo.
- `G`: izberite predmete ali en sklic bloka in navedeni bodo bloki, katerih oblika je vsaj 85 % podobna, najboljši najprej. Velikost, zasuk in zrcaljenje ne štejejo. Mera primerja razdalje med točkami, razporejenimi vzdolž obrisov, zato najde podobne; za natančne kopije uporabite {{cmd:BCONVERT}}.

Sklici, najdeni v odprtem prostoru, so izbrani in pripravljeni za naslednji ukaz.

### BREPLACE

Ali {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Zamenjaj [Izbrano/Vse]`: `S` zamenja sklice blokov, ki jih izberete, z blokom, ki ga imenujete; `A` vpraša za blok in njegovo zamenjavo ter spremeni vsak sklic, kot to naredi {{cmd:BLOCKREPLACE}} (ista koda). Sklic obdrži svoje mesto, merilo, zasuk, sloj in vrednosti atributov, ki jih imata oba bloka; vrednosti, za katere novi blok nima mesta, se opustijo in navedejo. `?` našteje bloke. En korak razveljavitve.

### DATAEXTRACTION

Bližnjice: `EATTEXT`, `DX`; ali {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Našteje bloke, njihove atribute in lastnosti predmetov kot tabelo ali datoteko CSV.

- Deluje na izboru ali vpraša `Izberite predmete (Enter: vse v tem prostoru)`.
- `Seznam: [Bloki/Predmeti/Vse]`, kadar izbor vsebuje oboje. Neimenovani bloki, tabele in kosovnice se nikoli ne naštejejo.
- Izpiše stolpce, ki jih lahko izberete (ime, vrsta, sloj, X, Y, zasuk, merilo, dolžina, površina, barva, tip črte, prostor in po en stolpec za vsako oznako atributa), nato `Stolpci, po imenu ali številki, ločeni z vejicami`. {{key:Enter}} vzame označene: za bloke ime in vsak atribut; za predmete vrsto, sloj in dolžino.
- `Združi enake vrstice s številom? [Da/Ne] <Da>`, nato `Postavite seznam v: [Tabela/Csv] <Tabela>`. Tabela je navadna tabela (ureja jo {{cmd:TABLEDIT}}) in ni živa: ko se risba spremeni, ukaz znova zaženite.
- Zavrne stolpec, ki ni na seznamu. Tabela drži 1.999 vrstic podatkov; datoteka CSV jih vzame vse.

### COUNTTABLE

Prešteje sklice blokov izbora (ali odprtega prostora) in števila postavi v tabelo (`Blok`, `Število`) ali datoteko CSV. Za štetje, ki sledi risbi samodejno, glejte {{cmd:BOMTABLE}}.

## Listi in izris

### LAYOUT

Bližnjice: `LO`, `NEWLAYOUT`; ali gumb {{ui:+}} pod risbo. Nov list z obrobo, glavo risbe in enim pogledom na ISO A3 (ali Tabloid za risbe v palcih ali čevljih). Brez vprašanj.

### MVIEW

Bližnjice: `MV`. Samo na listu ({{cmd:VPORTS}} na listu naredi isto).

- `Določite oglišče pogleda [Mnogokotno/Predmet]`, `Določite nasprotno oglišče`. Pogled prikaže ves model v standardnem merilu.
- `P` (Mnogokotno): kliknite oglišča obrisa (`Razveljavi (U)`, `Zapri (C)`), {{key:Enter}}, ko končate. Zavrne manj kot tri oglišča.
- `O` (Predmet): `Izberite zaprt predmet za obris pogleda`: zaprta polilinija, krožnica ali elipsa na listu. Pogled prevzame njegovo obliko (krivulje kot kratki ravni kosi); predmet ostane, kakršen je bil. Zavrne predmet, ki ni zaprt.

### VPCLIP

Obreže pogled, ki je že na listu. `Izberite pogled za obrezovanje` (ali ga izberite prej), nato `Izberite predmet, na katerega se obreže [Mnogokotno/Izbriši]`:

- Kliknite zaprto polilinijo, krožnico ali elipso, ali {{key:Enter}} (ali `P`), da kliknete oglišča mnogokotnika.
- `D` (Izbriši, ponujeno, ko je pogled obrezan) ga spremeni spet v pravokotnik: okvir okoli obrisa, ki ga je imel.
- Kar pogled prikazuje, se na papirju ne premakne, njegovo merilo ostane. Model se riše in izriše samo znotraj obrisa, rob pa mu sledi. En korak razveljavitve.
- Obrezan pogled ima ročico na vsakem ogljišču obrisa, poleg središča in štirih oglišč svojega okvira (povleka oglišča okvirja raztegne obris z njim). Lastnosti pokažejo Obris: Pravokotnik ali Obrezano s številom oglišč.
- Datoteke DWG in DXF 2000 hranijo obris za CadCraft. Drugi programi odprejo pogled kot pravokotnik okoli njega; DXF R12 hrani samo pravokotnik.
- Na zavihku modela pove, da so pogledi na listih.

### VPORTS

Bližnjice: `VIEWPORTS`. {{cmd:SPLIT}} je isti tudi z lista, in {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} ga izvedejo. Na modelu: `Vnesite število podoken [SIngle/2/3/4] <3>`; `2` vpraša `[Vodoravno/Navpično] <Navpično>` (Navpično = drug ob drugem), `3` vpraša `[Levo/Desno] <Desno>` (kam gre veliko podokno). Vsako podokno ohrani svoj pogled in prostor; klik naredi podokno aktivno. Na listu je to {{cmd:MVIEW}}. Glejte [Razdelitev zaslona](topic:split-screen).

### VPVIEW

Brez bližnjic. Samo na listu.

- `Izberite pogled` (preskočeno, če je en izbran), nato na modelu: `Določite prvo oglišče okna za prikaz`, `Določite nasprotno oglišče`.

### UCS

Brez bližnjic. Lasten koordinatni sistem; ni urejanje. `Določite izhodišče UCS [Poimenovan/Predmet/Prejšnji/Svet/Z/3točke] <Svet>`: točka je novo izhodišče, nato `Določite točko na osi X (Enter ohrani kot)`. `Z`: `Določite kot zasuka okoli osi Z <90>`. `3`: izhodišče, točka na pozitivni osi X, točka na pozitivni strani Y. `OB`: `Izberite predmet za poravnavo UCS`. `NA`: `[Obnovi/Shrani/Izbriši/?]` in ime. Pogled se zavrti, da je nova os X vodoravna. Glejte [Zasuk pogleda in uporaba lastnih koordinat](topic:ucs-and-turned-view).

### PLAN

Brez bližnjic. `Vnesite možnost [Trenutni ucs/Ucs/Svet] <Trenutni ucs>`: zavrti pogled aktivnega podokna, tako da je os X UCS (ali sveta) vodoravna. Nič v risbi se ne premakne.

### TURNLEFT, TURNRIGHT, TURNWORLD

Brez bližnjic; ali {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Isto kot `UCS Z -90`, `UCS Z 90` in `UCS W`, s pogledom, ki sledi.

### VPLAYER

Brez bližnjic. Na listu ali znotraj pogleda. `Vnesite možnost [?/Zamrzni/Odmrzni/Ponastavi/Vpvisdflt]`: `F`, `T`, `R` vprašajo za imena slojev (vejice, nadomestna znaka `*` in `?`), nato `[Vsi/Izberi/Trenutni] <Trenutni>` pogledi; Ponastavi vrne vsak sloj na njegovo privzeto stanje »zamrznjen v novih pogledih«; `V` nastavi to privzetost (`[Zamrznjeno/Odmrznjeno]`), ki jo uporablja {{cmd:MVIEW}}. `?` našteje sloje, zamrznjene v trenutnem pogledu. Stolpec pogleda v podoknu Sloji naredi isto za en pogled. Glejte [Zamrznitev sloja v enem pogledu](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Bližnjice: `MS`; ali dvakrat kliknite znotraj pogleda. Samo na listu. Delo na modelu prek pogleda: izbrani, edini na listu ali `Kliknite znotraj pogleda, da delate v njem`. Pomik in povečava znotraj spremenita pogled (pogled, zaklenjen na zaslon, ga ohrani, list pa se premakne); novi pogled je zapisan kot en korak razveljavitve. Glejte [Delo na modelu prek pogleda](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Bližnjice: `PS`; ali dvakrat kliknite zunaj pogleda ali kliknite zavihek pod risbo. Nazaj na list.

### PLOT

Bližnjice: `PRINT`, `PUBLISH`, `EXPORTPDF`; ali {{key:Mod+P}}. Odpre pogovorno okno {{ui:Plot to PDF}}. Glejte [Izris v PDF](topic:plot-pdf).

### PLOTSTYLES

Bližnjice: `STYLESMANAGER`, `PSTABLES`; ali {{ui:Edit tables…}} v pogovornem oknu {{ui:Plot to PDF}}. Odpre {{ui:Plot style tables}}: kaj vsaka barva izriše kot (barva, siva, črnilo, debelina črte), shranjeno z risbo. Glejte [Tabele slogov izrisa](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} premakne predmete med listom in modelom prek pogleda, merjene in zasukane, da so videti enako z druge strani. Na listu izberite predmete in gredo v model (izberite pogled, če ima list več kot enega). Medtem ko delate na modelu prek pogleda ({{cmd:MSPACE}}), izbrani predmeti pridejo na list. Pove, kolikokrat večji ali manjši so postali. Pogledi ostanejo na svojem listu. En korak razveljavitve.

### ISODRAFT

{{cmd:ISODRAFT}} izometrično risanje vklopi `ON` ali izklopi `OFF`, ali pa gre naravnost na ravnino `Levo`, `Zgoraj` ali `Desno`. Medtem ko je vklopljeno: ortogonalno ({{key:F8}}) drži črte vzdolž dveh osi ravnine (levo: 90° in 150°; zgoraj: 30° in 150°; desno: 30° in 90°), polarno sledenje ({{key:F10}}) sledi istima osema, lovljenje na mrežo ({{key:F9}}) uporablja izometrično mrežo, mreža ({{key:F7}}) pa je narisana s črtami pod 30°, 90° in 150°. {{cmd:ELLIPSE}} dobi `Isocircle`: podate središče in polmer (ali `Premer`), nariše pa elipso, kot jo krog kaže na trenutni ravnini. Risba ostane ploska: to so pripomočki za risanje slikovitega pogleda, ne 3D model. Nastavitev velja za to sejo in se ne shrani v datoteko.

### ISOPLANE

{{cmd:ISOPLANE}} izbere ravnino, na kateri deluje izometrično risanje: `Levo`, `Zgoraj` ali `Desno`. Enter gre na naslednjo ravnino. Medtem ko je izometrično risanje vklopljeno, {{key:F5}} naredi isto sredi ukaza; medtem ko je izključeno, je {{key:F5}} prepuščen brskalniku.

## Poizvedba

### CAL

Izpiše vrednost izračuna, kot bi bila prebrana povsod, kjer se vnaša dolžina.

- `Izraz`: vnesite ga, na primer `12'6"+3/4"` ali `(24'-0")/3`, in pritisnite {{key:Enter}}. CadCraft izpiše `= 12'-6 3/4"   (150.75 enot risbe)`. Glejte [Aritmetika v vnesenih vrednostih](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Bližnjice: `DI`; ali {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Določite prvo točko`, `Določite drugo točko`. Izpiše razdaljo, kot, Delta X in Delta Y.

### AREA

Bližnjice: `AA`; ali {{ui:View}} › {{ui:More}} › {{ui:Area}}. Izpiše površino in obseg.

- `Določite prvo točko oglišča [Predmet/Dodaj površino/Odštej površino] <Predmet>`
  - Kliknite ali vnesite oglišča; pri `Določite naslednjo točko (Enter zapre) [Razveljavi (U)]` pritisnite {{key:Enter}}, da zaprete obris. `U` vzame nazaj zadnje oglišče.
  - {{key:Enter}} ali `O`, nato `Izberite predmet`: krožnica (izpiše obseg), elipsa, polilinija (odprta se za površino zapre z ravno črto, dolžina pa se izpiše) ali šrafura (luknje se odštejejo).
  - `A` (Dodaj površino) in `S` (Odštej površino) hranita tekoči seštevek: poziv se začne z `(način DODAJANJA)` ali `(način ODŠTEVANJA)`, vsaka površina se doda ali odšteje, po vsaki pa se izpiše `Skupna površina = …`. V teh načinih `O` izbira predmete do {{key:Enter}}, {{key:Enter}} pri prvem pozivu pa ukaz konča.

### MEASUREGEOM

Bližnjice: `MEA`. `Vnesite možnost [Razdalja/Polmer/Kot/Površina] <Razdalja>`; po vsaki meritvi vpraša znova, privzeto pa `eXit`.

`Hitro` meri okoli kazalca, medtem ko se premikate: razdaljo do najbližjega predmeta desno, zgoraj, levo in spodaj (vzdolž osi trenutnega UCS), narisano med premikanjem, in kot tam, kjer se dva od teh sosedov ravna in stikata. Klik zapiše štiri razdalje, čisto širino in višino ter kote v zgodovino; Enter se vrne na možnosti. Bere, kar je na zaslonu.

- `D`: dve točki, kot pri {{cmd:DIST}}.
- `R`: `Izberite lok ali krožnico`; izpiše polmer in premer.
- `A`: lok (njegov vključeni kot), črta in nato druga črta (kot med njima, proti njunim oddaljenim koncem), ali {{key:Enter}} in tri točke (oglišče, nato oba konca).
- `AR`: kot pri {{cmd:AREA}}, ena površina.

### ID

Brez bližnjic. `Določite točko`; izpiše njen X in Y.

### LIST

Bližnjice: `LI`, `LS`. `Izberite predmete`; izpiše vrsto, sloj in glavne mere vsakega predmeta.

### MASSPROP

{{cmd:MASSPROP}} poda lastnosti prereza regij in zaprtih predmetov, ki jih izberete, skupaj: površino, obseg, omejevalni okvir, težišče, momente vztrajnosti okoli osi X in Y skozi izhodišče, produkt vztrajnosti, polmere vrtenja, iste momente okoli težišča in glavne momente s smermi njihovih osi. Luknje v regiji štejejo kot luknje. Številke so v enotah risbe in natančne za obrise iz črt in lokov; elipse in zlepki se merijo kot kratki ravni odseki, in to pove. Po poročilu vpraša, ali naj ga zapiše v besedilno datoteko. Predmeti, ki niso zaprti, so izpuščeni, in pove se, koliko jih je.

## Pogled, datoteka in drugo

### ZOOM

Bližnjice: `Z`.

- `Določite oglišče okna, vnesite faktor merila (nX) [Obseg/Vse/Okno/Prejšnji/Merilo/Središče]`. Za okno kliknite dve oglišči. `E`, `A` ali Enter: vsa risba.
- `P` (Prejšnji, ali {{ui:Previous}} v orodni vrstici) se vrne na pogled pred tem, do 10 pogledov na zavihek; niz korakov kolesca ali en pomik šteje kot en pogled.
- Število, kot `2`, `2x` ali `0.5x` (ali `S` in nato število), povečuje ali pomanjšuje za ta faktor okoli sredine zaslona.
- `C` vpraša `Določite središčno točko` in `Vnesite višino ali povečavo (nX)`.

### PDFATTACH, PDFIMPORT in ukazi PDF

Bližnjice: `PDFATT` za {{cmd:PDFATTACH}}, `PDFIM` za {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} postavi stran PDF pod risbo (datoteka, stran, točka vstavljanja, merilo, zasuk); {{cmd:PDFIMPORT}} spremeni črte, krivulje, polnila in besedilo strani v predmete risbe na slojih, poimenovanih po PDF, v pravi velikosti, v vtipkanem merilu ali merjeno po dveh točkah in pravi razdalji. {{cmd:PDFCLIP}} obreže podlago, {{cmd:PDFADJUST}} nastavi zbledetje, kontrast, enobarvnost ali jo izklopi, {{cmd:PDFLAYERS}} preklaplja lastne sloje PDF, {{cmd:PDF}} pa CadCraftu znova da datoteke, ki jih uporabljajo podlage risbe. Glejte [Podlage PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Bližnjica: `AUTOC`. Samodejno dopolnjevanje risbe: ko ne teče noben ukaz, siva senca pokaže, kaj pravijo lastni vzorci risbe, da sledi. {{cmd:AUTOCOMPLETE}} ga vklopi `On` ali izklopi `Off` (tudi Nastavitve › CadCraft) ali `Show` pokaže, kaj bi zdaj predlagal. **Tab** nariše senco kot en korak razveljavitve, **Esc** jo odslovi, dokler se risba ne spremeni. Najde tri stvari med najnovejšimi predmeti: naslednjo kopijo nečesa, narisanega dvakrat ali večkrat na enak korak (količnike, stebre, stopnico in tread), naslednje korake stopnišča iz polilinije in manjkajočo stran sobe ali verige zidov. Sredi {{cmd:LINE}} ali {{cmd:PLINE}} je senca **naslednja točka**: naslednji korak stopnice (riser, tread, riser…), četrto oglišče pravokotnika, točka, ki ga zapre, ali še en enak korak. Približajte kazalec in pritisnite **Tab**, kakor da bi tam kliknili; nadaljujte ali pritisnite Enter. Izračuna se na tem računalniku po pravilih, brez modela.

### AUTOSHEET

Bližnjica: `ASH`. Listi, ki se sami postavijo. {{cmd:AUTOSHEET}} vzame kose risbe (vaše imenovane poglede, ali ločene dele modela, ali ves model), izbere velikost papirja (ali tisto, ki jo podate), vsakemu kosu da standardno merilo (eno merilo za vse ali največje, ki ga vsak lahko sprejme) in razporedi poglede v vrstice na novih listih z glavo risbe in napisom (ime in merilo) pod vsakim. Kar se ne prilega enemu listu, dobi svoj list. En korak razveljavitve. Izračuna se na tem računalniku po pravilih, brez modela.

### PHOTOSKETCH

Bližnjica: `PSK`. Fotografija skice v risbo. Izberite fotografijo (JPEG, PNG ali TIFF) ročne skice na listu papirja. {{cmd:PHOTOSKETCH}} poišče štiri oglišča lista, poravna perspektivo, vzame velikost papirja, ki jo navedete (`Papir`, ali najbližjo standardno), in `Merilo` skice (1 : n), nato pa izriše črte peresa v črte, loke in krožnice, za vsako barvo peresa svoj sloj (črna, rdeča, modra, zelena). Če ne najde roba papirja, vzame celotno fotografijo kot list in to pove. Napisi so izpuščeni. En korak razveljavitve. Opravljeno na tem računalniku s klasično obdelavo slik, brez modela, nič se ne pošlje nikamor. Glejte tudi ukaze za skenirane risbe.

### AUTODIM

Bližnjica: `ADIM`. Samodejno kotiranje po pravilih. {{cmd:AUTODIM}} koti izbrane predmete (ali celotno risbo) glede na njihove nivojske in navpične robove: verigo kot vzdolž stranic, ki jih izberete (`Stranice`), eno skupno koto zunaj nje, širino vsake odprtine (vrzel med kolinearnimi črtami zidu), premer za vsako velikost luknje in z `Mreža` razmik med mrežnimi črtami. Kota, ki je že tam, ni narejena znova. En korak razveljavitve. Izračuna se na tem računalniku po pravilih, brez modela.

### GRIDMOVE

Bližnjica: `GM`. Premik mrežne črte nese njen sklop. {{cmd:GRIDMOVE}} premakne mrežno črto (črto na sloju, katerega ime pove mreža ali os) in to, kar visi nanjo: zidovi z enim koncem na črti se raztegnejo, da ji sledijo; zidovi vzdolž nje se premaknejo v celoti; stebri (sklici blokov in krožnice na črti), njen mehurček in oznaka se premaknejo; kote, katerih točke ležijo nanjo, merijo nov razmik. Podajte dve točki (šteje samo del čez črto) ali `Razdalja`. En korak razveljavitve vrne vse. Deluje po pravilih na tem računalniku.

### DETAILS

Bližnjica: `DET`. Detajli, ki najdejo vas. {{cmd:DETAILS}} hrani detajle vaše pisarne: `Add` da blok te risbe na seznam, `List` in `Remove` ga upravljata, `Find` jih razvrsti za to, kar je izbrano (ali za to, kar ste nazadnje narisali), glede na besede na njegovih slojih, imena blokov, vzorce šrafur in opombe v primerjavi z imenom in opombami vsakega detajla, tako da glava okna najde vaše obrobe parapeta. Izberite številko in točko, da ga postavite. Z vklopljenim `Hint` (tudi Nastavitve › CadCraft) izbira nečesa, kar se ujema z detajlom, izpiše eno vrstico v vrstici stanja. Seznam se hrani v tem brskalniku, na tem računalniku, in ta seznam se preiskuje. `Share` ga da tudi v vašo mapo Dokumenti (`.cadcraft/firm-details.json`, z risbo vsakega bloka): `Pull` doda, kar ima vaša ekipa, a vi nimate, `Push` doda, kar imate vi, a oni nimajo, `Both` naredi oboje, nič pa se ne odstrani z nobene strani. Najprej odprite mapo Dokumenti ({{cmd:DOCUMENTS}}); kadar je ta mapa mapa načrta Team Cloud, si ves tim deli en seznam. Predmet detajla v podoknu Knjižnica ima gumb **Dodaj v detajle mojega podjetja**, ki ga da na isti seznam. Izračuna se na tem računalniku po besedah, brez modela.

### SKETCHFIX

Bližnjica: `SKF`. Skice s peresom postanejo natančna geometrija. Pritisnite in povlecite eno prosto potezo naenkrat (pero, miška ali prst), nato Enter. Vsaka poteza se prebere kot črta, krožnica, lok, pravokotnik ali polilinija: skoraj vodoravne in navpične črte postanejo natančno vodoravne in navpične, zaprta okrogla poteza postane krožnica, zaprta poteza s štirimi pravokotnimi oglišči pravokotnik, konci potez pa se potegnejo skupaj in na konce, ki so že v risbi. En korak razveljavitve. Izračuna se na tem računalniku po pravilih, brez modela.

### SCANATTACH in ukazi za skenirane risbe

Bližnjice: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nima. Delajo na sliki, vsak z enim korakom razveljavitve. {{cmd:SCANATTACH}} vstavi PNG, JPEG, TIFF (ena stran ali vse) ali stran PDF, ki je slika. {{cmd:SCANSCALE}} postavi merilo lista po dveh izbranih točkah in pravi razdalji. {{cmd:SCANALIGN}} ga premakne in zasuče na dve točki (`Prilagodi merilo listu` Da/Ne). {{cmd:SCANDESKEW}} pokaže kot dolgih črt lista in ga zasuče, ko `Sprejmete` ali podate `Vrednost`. {{cmd:SCANCLEAN}} ga naredi črno-belega (`Prag` Samodejno/Prilagodljivo/Raven, `Packe`) in `Zaženi`. {{cmd:SCANCROP}} ohrani okno. {{cmd:SCANERASE}} izbriše `Pravokotnik`, `Mnogokotnik` ali `Lasso`. {{cmd:SCANTRACE}} prenese črte in loke na nov sloj (`Tolerance`, `Okno`, `Loki`, `Ostanki`, `Zaženi`) in poroča, kaj je našel in kaj je pustil kot raster. {{cmd:SCANINFO}} našteje izvirno datoteko in korake. {{cmd:RASTERSNAP}} vklopi ali izklopi lovljenje na črte skeniranih listov. Glejte temo Skenirane risbe in sledenje.

### REGEN in REGENALL

Bližnjice: `RE` za {{cmd:REGEN}}, `REA` za {{cmd:REGENALL}}. Znova zgradi, kar je narisano na zaslonu iz risbe: {{cmd:REGEN}} zavihek, na katerega gledate (na listu tudi model, ki ga kažejo njegovi pogledi), {{cmd:REGENALL}} vsak zavihek, vsako podokno razdeljenega zaslona in vsako odprto risbo. Uporabite ju, ko slika izgleda zastarela po skriptiranji ali zelo velikih spremembah ali ko je risbo uredil pomočnik; sama risba se ne dotakne, zato ni ničesar za razveljaviti.

### NAMEDVIEW

Bližnjice: `NV`, `VIEWS`. `Vnesite možnost [?/Obnovi/Shrani/Okno/Izbriši] <Obnovi>`, nato ime pogleda. `S` shrani pogled na zaslonu, `W` okno, ki ga izberete, `R` prikaže shranjen pogled, `D` izbriše enega, `?` našteje poglede tega zavihka. Shranjevanje pod obstoječim imenom ga zamenja; vsaka sprememba je en korak razveljavitve. Pogledi pripadajo zavihku, na katerem so bili shranjeni. Datoteke DWG in DXF jih hranijo (tabela VIEW); pogledi lista se vrnejo na prvi list, ker datoteka ne pove, kateri je kateri.

### UNDO in REDO

Bližnjice: `U` za {{cmd:UNDO}}; {{cmd:REDO}} nima. Tudi {{key:Mod+Z}} in {{key:Mod+Y}}.

### LAYER

Bližnjice: `LA`. Skoči na podokno {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Vnesite tip črte za nove predmete` — `ByLayer`, `ByBlock` ali ime (`?` našteje: Continuous, lastne tipe risbe in DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE z njihovimi velikostmi `2` (polovična) in `X2` (dvojna)). {{cmd:LWEIGHT}} (`LW`): debelina črte za nove predmete v mm, ali `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): merilo tipa črte risbe (razveljavljivo). {{cmd:LWDISPLAY}} (`LWT`): `Prikaži debeline črt [ON/OFF]` — isto kot gumb {{ui:LWT}} v vrstici stanja. Glejte [Debeline in tipi črt](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Vnesite vrsto predmeta za preimenovanje [Sloj/Blok]`, `Vnesite staro ime`, nato novo ime; predmeti ali sklici sledijo. {{cmd:LAYMRG}}: `Izberite predmet na sloju za združitev ali [Ime]` do {{key:Enter}}, nato `Izberite predmet na ciljnem sloju ali [Ime]` in `Y`. {{cmd:LAYDEL}}: `Izberite predmet na sloju za brisanje ali [Ime]`, nato `Y`: sloj in vsi predmeti na njem odidejo (ne sloj 0, DEFPOINTS ali trenutni sloj). En korak razveljavitve vsak. Glejte [Organizacija risbe s sloji](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Sloji z izbiro predmetov; tudi v meniju {{ui:Tools}} podokna {{ui:Layers}}. {{cmd:LAYISO}}: `Izberite predmete na sloju(ih), ki naj se izolirajo`, nato {{key:Enter}}: vsak drug sloj gre izklopljen. {{cmd:LAYUNISO}} jih spet vklopi. {{cmd:LAYOFF}} in {{cmd:LAYFRZ}}: `Izberite predmet na sloju, ki naj se izklopi` (ali zamrzne), znova in znova; `U` vzame nazaj zadnjega, {{key:Enter}} konča. {{cmd:LAYMCUR}}: `Izberite predmet, katerega sloj postane trenutni`. {{cmd:LAYON}} vklopi vse sloje, {{cmd:LAYTHW}} odmrzne vse sloje. Vsak ukaz je en korak razveljavitve. Glejte [Organizacija risbe s sloji](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} začne prazno risbo in {{cmd:OPEN}} odpre DWG ali DXF, vsak v svojem zavihku nad risbo (nedotaknjena nova risba se uporabi namesto novega zavihka). Zaprtje zavihka z neshranjenimi spremembami najprej vpraša. Glejte [Razdelitev zaslona](topic:split-screen).

{{cmd:SAVE}} (bližnjica `QSAVE`, tudi {{key:Mod+S}}) prenese kopijo v obliki risbe: DWG, če je bila odprta iz DWG, DXF, če iz DXF. Nova risba uporabi obliko, nazadnje izbrano v Shrani kot v tem brskalniku, sicer DWG.

{{cmd:SAVEAS}} (tudi {{key:Mod+Shift+S}}) odpre pogovorno okno {{ui:Save a copy as}}: izberite {{ui:DWG}} (in njegovo {{ui:Version}}), {{ui:DXF R12}} ali {{ui:DXF 2000}}, nato {{ui:Save}}. Izbira velja za to risbo in za nove risbe v tem brskalniku.

{{cmd:DXFOUT}} vedno prenese kopijo DXF R12, ne da bi spremenil obliko, ki jo uporablja {{cmd:SAVE}}.

Glejte [Datoteke: kaj se odpre, kaj se shrani](topic:files#saving).

### TOUR

Bližnjice: `TUTORIAL`. Ponovno začne šeststopenjsko predstavitev prve risbe. Glejte [Začetek dela](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Bližnjice: `TBDOCK`. `Položaj orodne vrstice [Zgoraj/Spodaj/Levo/Desno]`. Glejte [Nastavitve](topic:settings#toolbar-position).

### COMMANDLINE

Bližnjice: `CMDLINE`. `Ukazna vrstica [Pripeta spodaj/Lebdeča/Ena vrstica/Prikazane vrstice zgodovine/Zgodovina ukazov (F2)]`: pripne ali loči ukazno vrstico, jo naredi v eni vrstici, vpraša, koliko vrstic zgodovine prikazati (0 do 12), ali odpre zgodovino. Glejte [Nastavitve](topic:settings#command-line).

### TOPAREA

`Območje nad risbo [Standardno/Kompaktno]`: vrstice nad risbo, kakor so bile, ali kompaktne. Glejte [Nastavitve](topic:settings#top-area).

### POLARANG

`Vnesite korak polarnega kota v stopinjah <90>`: korak, po katerem se črte {{ui:Polar}} sledenja poravnavajo (več kot 0, do 180). Shrani se v tem brskalniku.

### UNITS

Bližnjice: `UN`. Kako se pišejo in vnašajo dolžine.

- `Vnesite format dolžin [Znanstveni/Decimalni/Inženirski/Arhitekturni/Ulomki] <trenutni>`
- Arhitekturni in Ulomki: `Vnesite imenovalec najmanjšega prikazanega ulomka (1, 2, 4, 8, 16, 32, 64, 128 ali 256)`. Drugi: `Vnesite število decimalnih mest (0 do 8)`.

Nove kote mu sledijo. En korak razveljavitve. Isto kot {{ui:Length format}} in {{ui:Precision}} v {{ui:Current settings}}; glejte [Čevlji in palci](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Bližnjice: `GDS`. Ogled postavitve IC (datoteka toka GDSII): laboratorijski poskus, samo za ogled in merjenje.

- Izbirnik datotek sprejme datoteko `.gds`; pri več vrhnjih celicah `Vnesite vrhnjo celico za risanje`.
- Vsak sloj in tip podatkov postane sloj risbe (`GDS 1`, `GDS 2/5`), sklici in matrike so postavljeni ploski, v uporabniški enoti datoteke (navadno mikrometri). En korak razveljavitve. Nič se ne simulira ali preverja in datoteka se ne zapiše nazaj.

### DIAGRAM

Bližnjice: `TEXTDIAGRAM`, `T2D`. Diagram iz besedila.

- Okvir sprejme besedilo (ali eno vrstico z `;` med stavki v ukazni vrstici): poteka Mermaid, komponentni diagram PlantUML, D2 ali seznam od-do.
- `Določite zgornje levo oglišče diagrama`, nato `Določite višino besedila`.

Bloki in povezave so navadni predmeti na sloju `Diagram`, izbrani, ko se konča. En korak razveljavitve. Glejte [Narišite diagram iz besedila](topic:text-to-diagram).

### OLELIST

Bližnjice: `OLES`. Predmeti OLE, ki jih nosi DWG in jih CadCraft sam ne more postaviti.

- Našteje vsakega: številka, vrsta, velikost, ali je shranil sliko.
- `Vnesite možnost [Postavi/eXit] <eXit>`: Postavi vpraša za številko, spodnje levo oglišče in širino, ter nariše okvir s sliko. En korak razveljavitve; ohranjeni predmet se ne spremeni. Glejte [Slike](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Bližnjice: `SHX`. Vaše lastne pisave SHX.

- `Vnesite možnost pisave SHX [Mapa/Datoteke/Seznam/Odstrani/Obrni/Počisti] <Seznam>`

{{ui:Folder}} prebere vsako `.shx` v mapi (CadCraft Studio; ob vsakem zagonu znova), {{ui:Files}} vzame izbrane datoteke (brskalnik), {{ui:Reverse}} postavi črke ene pisave od zadnje proti prvi. Slogi besedila, ki imenujejo naloženo pisavo, se rišejo v njej. Glejte [Risanje besedila v lastnih pisavah SHX](topic:shx-fonts).

### LIMITS

Kako velika naj bo risba.

- `Določite spodnji levi kot ali [ON/OFF] <trenutno>`: točka, `ON` ali `OFF`.
- `Določite zgornji desni kot <trenutno>`.

Mreža zapolni meje, {{cmd:ZOOM}} Vse jih pokaže, z vklopljenimi mejami pa je točka zunaj zavrnjena (`**Zunaj meja`). En korak razveljavitve; shranjeno v DWG in DXF. Glejte [Nastavitev mej risbe](topic:drawing-limits).

### AUNITS

Bližnjice: `ANGUNITS`. Kako se koti prikazujejo in vnašajo.

- `Vnesite format kotov [Decimalne stopinje/Stopinje-minute-sekunde/Geodetski smeri] <trenutni>`
- `Vnesite število decimalnih mest (0 do 8)`, ali za ostala dva `Vnesite natančnost` (0 stopinj, 2 minuti, 4 sekunde, 5 do 8 decimalk sekunde).

En korak razveljavitve; shranjeno v DWG in DXF. Isto kot {{ui:Angle format}} v {{ui:Current settings}}. Glejte [Vnos in prikaz smeri in kotov](topic:bearings-and-angles).

### APPLOAD

Bližnjice: `AP`; ali {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. Pogovorno okno {{ui:Load applications}}: naloži rutine `.lsp` in datoteke pogovornih oken `.dcl`, jih odstrani, znova naloži iz zgodovine in zagonski sklop. Ukazi rutine `(defun c:NAME …)` nato delujejo kot vsak drug ukaz. Glejte [Nalaganje aplikacij](topic:load-applications) in [Zaženite rutine LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ali {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) odpre vašo datoteko bližnjic (vrstice `ALIAS, *COMMAND`); {{ui:Save}} jo uveljavi. {{cmd:REINIT}} jo uveljavi znova. Glejte [Urejanje bližnjic ukazov](topic:command-aliases).

### LISPEDIT

Bližnjice: `VLIDE`; ali {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Odpre urejevalnik LISP, okno, ki ostane odprto ob risbi.

- Besedilo: številke vrstic, partner oklepaja pri kazalcu je označen (rdeče, če ga nima), {{key:Enter}} zamakne novo vrstico pod odprtim oklepajem, {{key:Tab}} vtipka dva presledka, {{key:Esc}} zapusti besedilo.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): prebere vsak obrazec, kot to naredi {{cmd:APPLOAD}} z datoteko, in naredi njegove ukaze `c:`. Datoteka se prikaže na seznamu {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): oceni izbrane obrazce ali obrazec, v katerem je kazalec.
- {{ui:Stop}}: konča rutino, ki teče.
- {{ui:Console}}: kar je rutina izpisala, in vsaka napaka z njeno vrstico; kliknite napako, da pridete tja. Besedilo se izvaja po en obrazec najvišje ravni naenkrat, zato je vrstica obrazca, ali znotraj njega vrstica, ki kliče funkcijo, ki jo napaka imenuje.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): datoteka `.lsp`. Besedilo se hrani tudi v tem brskalniku, zato zapiranje okna ne izgubi besedila.
- Ob besedilu: funkcije, ki jih rutina določa, tiste, ki jih kliče in jih ta LISP še nima, tiste, ki jih kliče in niso definirane v njej niti vgrajene, ter celotni seznami tistega, kar je vgrajeno in kar ni.

Besedilo z oklepajem, ki se nikoli ne zapre, ali z nizom, ki se nikoli ne konča, se ne izvede: vrstica je navedena. Ni korak-za-korakom razhroščevalnika, prekinitvenih točk ali okna za spremljanje. Glejte [Zaženite rutine LISP](topic:run-lisp).

### HELP

Bližnjice: `?`. Izpiše vsak ukaz, njegove bližnjice in enovrstični opis v zgodovini ukazne vrstice. Ne odpre te pomoči: za to pritisnite {{key:F1}} ali kliknite {{ui:Help}}.

## Poziv za izbor predmetov

Na vsakem pozivu `Izberite predmete`: kliknite predmete, narišite okna (z leve proti desni) in sekanja (z desne proti levi) z dvema klikoma, ali pritisnite in povlecite lasso ({{key:Space}} med vlečenjem: okno, sekanje, ograja), {{key:Shift}}+klik za odstranitev, in pritisnite {{key:Enter}}, da končate. Lahko vtipkate tudi `ALL` (vse), `L` (zadnji predmet), `P` (Prejšnji: kar je uporabil zadnji ukaz), `F` (Ograja: predmeti, ki jih seka črta točk; `U` vzame nazaj točko), `W` (Okno), `C` (Sekanje), `R` (način odstranjevanja: izbira jemlje predmete ven; poziv pravi `Odstrani predmete`) in `A` (Dodaj znova). `?` jih našteje. Na pozivu niso prikazani. {{key:Tab}} nad prekrivajočimi se predmeti označi naslednjega; kliknite, da ga izberete. Glejte [Izbira predmetov](topic:select-objects).

### ACCESS

Bližnjice: `AX`. Risanje brez vida. {{cmd:ACCESS}} vklopi ali izklopi Access (`On`, `Off`) in preklopi zvoke lovljenja (`Sound`) ter izgovorjene ukaze (`Voice`); najprej pove stanje. Ko je Access vklopljen, se vsak ukaz in rezultat izgovarja prek bralnika zaslona, območje risbe pa ima kazalec tipkovnice. Tema pomoči »Risanje brez vida« ima tipke.

### DESCRIBE

Bližnjice: `DESC`. Pove, kaj risba vsebuje: koliko predmetov, katere vrste, kako velik je, koliko slojev, kaj je izbrano. Samo bere; ničesar ne spremeni.

### WHEREAMI

Bližnjice: `WHERE`. Pove, kje je kazalec, v enotah risbe.

### NEARBY

Pove, kaj leži blizu kazalca, najbližje najprej, vsako z njegovo razdaljo in stranjo, na kateri je.

### SAYSEL

Pove, kaj je izbrano, en stavek za vsak predmet (dolžina črte, krajišči in kot; polmer krožnice in središče; besedilo, kakor je napisano).

### VOICE

Vklopi ali izklopi izgovorjene ukaze. Prepoznajo se na tem računalniku; kjer brskalnik tega ne more, glas ostane izklopljen, razen če v Nastavitvah izberete spletno storitev brskalnika.

### TOUCHCROSSHAIR

Bližnjica: `TCX`. Odmaknjen križec za risanje s prstom, da konica prsta ne pokrije točke, ki jo izberete. Medtem ko je vklopljen, en prst na risbi ne izbere ničesar: premakne križec, ki sedi nad prstom in ob njem. Lovljenje predmetov in sledenje sledita križcu. Dvig prsta ne izbere ničesar in pusti križec, kjer je. Za izbor pritisnite gumb {{ui:Click}} v kotu risbe ali se dotaknite risbe z drugim prstom. Držite {{ui:Click}}, medtem ko premikate drugi prst, za vlečenje (okno izbire, lasso, ročica). Prst, pritisnjen in miren, ali gumb {{ui:Enter}} je Enter. Dva prsta premikata in povečujeta kot prej. Blizu spodnjega roba in oddaljenega stranskega roba se križec približa prstu, tako da je mogoče doseči vsak del risbe. Pero in miška vedno izbereta neposredno.

{{cmd:TOUCHCROSSHAIR}} pove stanje in vpraša `ON`, `OFF`, `Auto` (vklopljeno samo, kjer je prst edini kazalec, zato je izklopljeno na računalniku z miško), `Distance` (kako daleč je križec od prsta, 24 do 240 slikovnih pik) ali `Side` (`Left`: gor in levo, za desno roko; `Right` za levo roko; gumbi se premaknejo v drugi kot). Iste izbire so v Nastavitve › CadCraft, na napravi z zaslonom na dotik pa ima vrstica stanja stikalo {{ui:Offset crosshair}}. Izbire se hranijo v tem brskalniku.

### WHOHAS

Pove, kdo ima risbo odprto. V CadCraft Studio na računalniku odprtje DWG ali DXF zapiše majhno datoteko zaklepa poleg nje (`Plan.dwg.cclock`: kdo, od kdaj, katera različica), jo osveži vsako minuto, medtem ko je risba odprta, in jo odstrani, ko je risba zaprta. Odprtje risbe, ki jo ima odprto nekdo drug, pove, kdo in od kdaj, ter ponudi {{ui:Open read-only}} (Shrani nato vpraša za novo ime), {{ui:Open anyway}} (drugi osebi se to pove ob njeni naslednji osvežitvi) ali {{ui:Cancel}}. Shranjevanje čez datoteko, ki jo ima odprto nekdo drug, najprej vpraša. Zaklep, ki ni bil osvežen pet minut, je zastarel: druga kopija se je zaprla brez shranjevanja ali pa računalnik spi.

{{cmd:WHOHAS}} vpraša `Trenutna` (odprta risba), `Datoteka` (izberite eno), `Mapa` (izberite mapo: našteti so vsi risbe v njej, ki so odprte nekje), `Pot` (vnesite polno pot) ali `Ime` (ime, ki ga vidijo drugi; ime vašega računa, ko ste prijavljeni). Studio lahko doseže samo mape, ki ste jih izbrali: za risbo, odprto iz mape, ki nikoli ni bila izbrana, enkrat pove, da ne more zabeležiti, da je risba odprta; `Mapa` izbere mapo, zaklepi pa tam delujejo od takrat naprej. Zaklep je opomba za ljudi, ne ovira: drug program lahko še vedno zapiše datoteko. V brskalniku mape za iskanje ni, ukaz pa to pove.

### OVERKILL

Izbriše podvojene predmete in uredi prekrivajoče se črte in loke, za risbe, ki prispejo polne podvojenih črt. `Izberite predmete za čiščenje`, {{key:Enter}}, nato še enkrat {{key:Enter}}, da očistite z nastavitvami, ki so prikazane, ali pa jih prej spremenite:

- `Tolerance`: kako blizu morata biti dve koordinati, da veljata za isti (0,000001 na začetku; 0 pomeni točno isto).
- `Ignore`: lastnosti, ki se lahko razlikujejo med dvema predmetoma, sicer enakima. Vtipkajte ime, da jo preklopite: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ali `None` / `All`. {{key:Enter}}, ko končate.
- `Overlap`: vklopljeno ali izklopljeno. Ko je vklopljeno, se črte na eni ravni črti, ki se prekrivajo, zlijejo v eno črto (črta, ki leži znotraj druge, je preprosto izbrisana), loki na eni krožnici, ki se prekrivajo, pa v en lok; loki, ki zaprejo poln obrat, postanejo krožnica, lok, ki leži na krožnici, pa je izbrisan.
- `Ends`: vklopljeno ali izklopljeno. Ko je vklopljeno, se črte na eni ravni črti in loki na eni krožnici, ki se dotikajo samo od konca do konca, zlijejo v en kos.

Vsaka vrsta predmeta se preveri glede podvojenosti: dva predmeta sta podvojena, kadar sta njuna geometrija ista v okviru tolerance in se ujemata sloj, barva, tip črte, merilo tipa črte, debelina črte, debelina, prosojnost in višina (manj tiste, ki jih prezrete). Črte in odprte polilinije se ujemajo tudi, kadar so narisane v obratni smeri. Prvi predmet v vrstnem redu risanja ostane in ohrani svoje lastnosti. Ukaz poroča, koliko predmetov je preveril in izbrisal: podvojene, prekrivajoče se kose, združene, kose, povezane od konca do konca. Ena {{cmd:UNDO}} vzame vse nazaj. Nastavitve veljajo, dokler ne zaprete okna risbe.

Pušča pri miru: predmete na zaklenjenih slojih in skrite predmete. Ne združuje črt z višino (Z) (točne podvojene vedno odidejo), in se ne dotika odsekov znotraj polilinije (niso redčeni), črte, ki leži na odseku polilinije, ter zaprte polilinije, narisane v obratni smeri.

### DRAWORDER

Spremeni, kateri predmeti so narisani spredaj. `Izberite predmete za ponovno razvrstitev`, {{key:Enter}}, nato `Nad predmete`, `Pod predmete`, `Spredaj` ali `Zadaj` ({{key:Enter}} = `Zadaj`). `Nad predmete` in `Pod predmete` vprašata za referenčne predmete: izbor gre tik pred najbolj spredaj od njih, ali tik za najbolj zadaj od njih. Izbrani predmeti ohranijo svoj vrstni red med seboj. En korak razveljavitve. Vrstni red se shrani z risbo v DWG in DXF, kjer je to vrstni red, v katerem so predmeti zapisani.

Na zaslonu CadCraft riše polnjena območja (polne šrafure, široke polilinije, maske) najprej, nato črte, nato besedilo, tako da je besedilo vedno berljivo nad polnilom; vrstni red risanja se kaže med polnjenimi predmeti in med slikami. Drugi programi, ki odprejo datoteko, narišejo vsak predmet v shranjenem vrstnem redu.

### TEXTTOFRONT

Pripelje besedilo, kote in vodilke pred vse ostalo v odprtem prostoru: `Besedilo`, `Kote`, `Vodilke` ali `Vse` ({{key:Enter}} = `Vse`). En korak razveljavitve. Pove, če ga ni, ali če so že spredaj.

### HATCHTOBACK

Pošlje vsako šrafuro odprtega prostora za vse ostalo, tako da polnila ne prekrivajo črt in besedila v shranjeni datoteki. Brez pozivov. En korak razveljavitve.

### ISOLATEOBJECTS

Bližnjice: `ISOLATE`. Prikaže samo izbrane predmete: vse drugo v odprtem prostoru izgine iz vida, dokler ne pride {{cmd:UNISOLATEOBJECTS}}. Za razliko od {{cmd:LAYISO}} deluje na predmetih, ki jih izberete, ne glede na njihove sloje, in ne spremeni nobenega sloja. Skriti predmeti se ne rišejo, ne izbirajo, ne lovijo, ne povečujejo in ne izrišejo, ukazi, ki sprejmejo `ALL`, pa jih preskočijo. Kar narišete, medtem ko so predmeti izolirani, se prikaže kot običajno.

To velja samo za sejo: nič o tem se ne shrani z risbo, ni korak razveljavitve, in ponovno odprtje risbe pokaže vse. Medtem ko so predmeti skriti, vrstica stanja prikazuje gumb s njihovim številom; kliknite ga, da jih spet prikažete.

### HIDEOBJECTS

Skrije izbrane predmete do {{cmd:UNISOLATEOBJECTS}}. Enaka pravila kot pri {{cmd:ISOLATEOBJECTS}}: samo za sejo, ni shranjeno, ni korak razveljavitve.

### UNISOLATEOBJECTS

Bližnjice: `UNISOLATE`, `UNHIDE`. Spet prikaže vsak predmet, ki ga je skril {{cmd:ISOLATEOBJECTS}} ali {{cmd:HIDEOBJECTS}}, in pove, koliko se jih je vrnilo.

### LAYLOCKFADE

Nastavi, kako izgledajo predmeti na zaklenjenih slojih in ali jih klik doseže. Pove trenutno stanje, nato sprejme:

- število od 0 do 90: količina zbledetja v odstotkih (50 na začetku). 0 zbledetje izklopi.
- `ON` ali `OFF`: zbledetje vklopljeno ali izklopljeno, količina ostane.
- `Pick`, nato `Yes` ali `No`: ali lahko klik izbere predmete na zaklenjenih slojih, medtem ko ne teče noben ukaz? `No` (privzeto): sploh jih ni mogoče izbrati. `Yes`: klik ali okno jih izbere, da lahko {{ui:Properties}} pokaže; še vedno jih ni mogoče spremeniti, in lastni `Select objects` ukaza jih nikoli ne vzame.

Lovljenje predmetov najde predmete na zaklenjenih slojih v obeh primerih. Izrisi se nikoli ne zbledijo. Obe nastavitvi sta vaši, ne risbini, in sta tudi v {{ui:Settings}} pod {{ui:Locked layers}}.

### BURST

Razstavi sklice blokov in ohrani, kar povedo njihovi atributi. `Izberite sklice blokov za razstavljanje`, {{key:Enter}}: vsak sklic se zamenja z predmeti bloka, vrednost vsakega vidnega atributa pa postane navadno besedilo na lastnem sloju tega atributa (atribut na sloju 0 pristane na sloju sklica, kakor drugi predmeti bloka na sloju 0). Nevidni atributi odidejo. Blok znotraj bloka ostane sklic bloka. En korak razveljavitve; pove, koliko sklicev je razstavljenih in koliko vrednosti atributov je spremenjenih v besedilo.

Zavrne povezano risbo po imenu (najprej jo vključite, ali kopirajte iz nje z {{cmd:NCOPY}}), drugih izbranih predmetov pa ne dotakne. Za sklice blokov da {{cmd:EXPLODE}} enake predmete; {{cmd:BURST}} jemlje samo sklice blokov in šteje besedilo atributov.

### TXT2MTXT

Bližnjice: `T2M`. Združi enovrstična besedila v eno odstavčno besedilo. `Izberite enovrstična besedila za združitev`, {{key:Enter}}, nato `Odstavek` (vrstice se zlijejo in prelomijo pri širini najširše vrstice) ali `Vrstice` (vsako besedilo ostane svoja vrstica); {{key:Enter}} vzame tisto, uporabljeno nazadnje. Vrstice so urejene od zgoraj navzdol, nato od leve proti desni, vzdolž smeri zgornjega besedila. Odstavek visi z zgornjega levega kota zgornjega besedila in prevzame njegovo višino, zasuk, slog, sloj in barvo. En korak razveljavitve.

Besedilo, ki je že odstavčno, prazno besedilo in drugi predmeti v izboru ostanejo nedotaknjeni, ukaz pa pove, koliko jih je.

### NCOPY

Kopira predmete iz sklica bloka ali povezane risbe v risbo, ne da bi kaj razstavil. `Izberite predmet znotraj sklica bloka ali povezane risbe`: predmet, najbližji izbiri, se kopira tam, kjer je viden, ne glede na to, kako globoko v blokih je; izberite še več, nato {{key:Enter}}. Naslednje `Izhodiščna točka za premik kopij`: {{key:Enter}} jih pusti na mestu, ali podajte izhodiščno točko in drugo točko. Celoten ukaz je en korak razveljavitve.

Kopija vzame sloj, na katerem se prikaže: predmet na sloju 0 znotraj bloka pristane na sloju sklica, v katerem je sedel, barva ByBlock pa postane barva tega sklica. Iz povezane risbe sloj `Plan|Walls` postane `Plan$0$Walls` (ime, ki ga da povezava), narejen z barvo, tipom črte in debelino črte povezanega sloja. Vrednost atributa se kopira kot besedilo. Sklici blokov na zaklenjenih slojih ne morejo biti izbrani.

### FLATTEN

Nastavi višino (Z) in debelino izbranih predmetov na 0. `Izberite predmete za sploščenje`, {{key:Enter}}. Sploščijo tudi predmete znotraj definicij blokov, ki jih uporablja izbor (in blokov znotraj njih), tako da se vsak sklic na te bloke spremeni; povezane risbe pustijo, kakor so. En korak razveljavitve; pove, koliko predmetov se je spremenilo, in pove, če nobeden ni imel višine ali debeline.

Kar CadCraft ohrani od tretje dimenzije v 2D risbi, je: višina na krogih, lokih, elipsah, točkah, besedilu, sklicih blokov, šrafurah, vodilkah in polilinijah (njihova kota), višina na vsakem krajišču črte in debelina na črtah, krožnicah, lokih, polilinijah, točkah in besedilu, kakršna je bila v datoteki. {{cmd:FLATTEN}} počisti natanko to. Ne dotika se 3D modela na zavihku 3D, 3D ploskev ali teles, predmet, narisan v nagnjeni ravnini, pa je bil ob odprtju datoteke že prenesen v ravnino risbe.

### BREAKLINE

Nariše črto s simbolom preloma, za pogled, ki je prekrajšan. Pove trenutno velikost in podaljšek, nato `Začetna točka črte preloma` (ali najprej `Velikost` / `Podaljšek`, da ju spremenite), `Druga točka` in `Kje je simbol preloma`: kliknite vzdolž črte ali {{key:Enter}} za sredino. Rezultat je ena polilinija na trenutnem sloju: črta, ki gre čez vsako točko za podaljšek, z Z-obliko poteze, visoko kot velikost in pol toliko dolgo.

`Velikost` in `Podaljšek` se zapomnita kot vaše nastavitve (velikost začne z dvakratno višino besedila kote, pomnoženo z merilom kote; podaljšek z polovico velikosti). {{key:Enter}} ponovi ukaz.

### AUDIT

Preveri odprto risbo glede poškodb in jo popravi. {{cmd:AUDIT}} pogleda vsak predmet v modelu, na listih in znotraj blokov, ter tabelo slojev, in našteje, kar najde, po vrsti:

- števila, ki niso končna, ali so absurdno velika;
- predmeti brez velikosti: črta brez dolžine, krožnica brez polmera, polilinija z eno točko, besedilo brez črk ali višine, sklic bloka z ničelnim merilom;
- predmeti na sloju, ki ga risba nima; sklici na blok, ki ga ni; imena slogov besedila in kot ter imena tipov črt, ki jih risba nima;
- bloki, ki vsebujejo sami sebe, neposredno ali prek drugih blokov;
- predmeti, ki delijo identifikator, ključ ali datotečni ročaj;
- kote brez točk, od koder so merjene, in šrafure, katerih rob ni zaprt obris.

Nato vpraša `Naj jih popravim? [Da/Ne]`. `Ne` ne spremeni ničesar. `Da` popravi vse v enem koraku razveljavitve: odstrani, kar ni mogoče narisati (slabe številke, brez velikosti, manjkajoč blok, pokvarjena kota, šrafura brez uporabnega roba, sklic, ki zapre krog blokov); manjkajoči sloj se naredi; neznana imena slogov in tipov črt se vrnejo na privzete; skupni ključ se nadomesti. Izpiše, koliko predmetov je odstranjenih in koliko popravljenih. Iste ugotovitve se pojavijo v podoknu Težave, vsaka s svojim {{ui:Repair}}.

Ničesar ne zavrne, vendar preverja samo to, kar CadCraft sam riše: podatki, shranjeni za druge programe (3D telesa, predmeti OLE), se ne odprejo.

### RECOVER

Odpre poškodovano DXF ali DWG. {{cmd:RECOVER}} vpraša za datoteko, prebere, kar se da prebrati, namesto da bi datoteko zavrnil, našteje, kar je preskočeno ali predpostavljeno, nato preveri in popravi risbo, kot to naredi {{cmd:AUDIT}} z `Da`.

- DXF: vrstice, ki niso del para kode in vrednosti, se preskočijo, dokler se pari spet ne poravnajo; odsek brez konca se zapre; datoteka, ki je prekinjena, se prebere do prekinitve; binarna DXF, ki je prekinjena, se prebere do zadnje cele vrednosti. Ko odsek, blok ali predmet še vedno ni mogoče prebrati, se izpusti in imenuje, branje pa se nadaljuje mimo njega.
- DWG: predmeti, ki ne uspejo pri preverjanjih ali jih ni mogoče dekodirati, se izpustijo, izgubljen seznam predmetov pa se obnovi s sprehodom po podatkih predmetov.

Datoteka na disku se ne spremeni. Obnovljena risba se odpre neshranjena: shranite jo pod novim imenom. Datoteka, iz katere se sploh ničesar ne da prebrati, je zavrnjena, z razlogom.

### LEGACYTEXT

Pretvori besedilo, vneseno s starimi 8-bitnimi vietnamskimi pisavami, v Unicode. Kratki imeni `TEXTTOUNICODE` in `VNTEXT`.

Starejše vietnamske risbe hranijo besedilo kot zahodne znake, ki jih šele pisava spremeni v vietnamščino: besedilo TCVN3 v pisavah ABC (`.VnTime`, `.VnArial` in pisave z velikimi črkami, katerih imena se končajo na `H`), in besedilo VNI v pisavah VNI (`VNI-Times`). CadCraft tako besedilo prikaže, kakor se bere, takoj ko je risba odprta, po pisavi njegovega sloga besedila, predmeta ali odseka znotraj odstavčnega besedila; datoteka še vedno hrani stare znake.

{{cmd:LEGACYTEXT}} pove, koliko besedil je našel v vsakem kodiranju, in vpraša `Pretvorim … v Unicode?`. `Da` prepiše vsakega (model, listi, bloki, vrednosti in definicije atributov) in slogom besedila dodeli Unicode pisavo (Times New Roman, Arial ali Courier New po vrsti stare pisave), v enem koraku razveljavitve. Oblikovanje znotraj odstavčnega besedila se ohrani.

Kadar nobeno besedilo ne uporablja znane pisave (slog, ki je izgubil ime pisave), vpraša `Preberi izbrana besedila kot [Tcvn3/Vni/Brez]`: izberite kodiranje in izberite besedila. Besedilo, ki je že v Unicode, ostane nedotaknjeno. Prepisi besedila kote in besedilo večkratne vodilke se ne pretvarjajo.
