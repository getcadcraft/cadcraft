---
title: Kaj je novega v 0.9 (prej)
summary: Šrafure, ki sledijo svoji meji, skupine slojev, zložene etaže, pametne stene 2D z vrati in okni, slogi besedila in urejevalnik oblikovanega besedila, lebdeča ukazna vrstica, lovljenje na mrežo, deset načinov za lok in podokno Dokumenti.
keywords: kaj je novega 0.9, prejšnja izdaja, kaj je novega, 0.9, opombe izdaje, dnevnik sprememb, šrafura, pridružena šrafura, hatchedit, datoteka pat, datoteka vzorca, skupine slojev, laygroup, etaže, zložene etaže, floorlayers, pametne stene, stena, vrata, okno, orodja za stene, slog besedila, style, mtext, urejevalnik odstavkov, oblikovanje, lebdeča ukazna vrstica, ukazna vrstica, zgornje območje, kompaktno, lovljenje na mrežo, grid snap, f9, lok, podokno dokumenti, prijava, jeklo, draw.io, tajsko besedilo, dxf r12, sprememba, 0.8, 0.8.1, različica, nove funkcije, samodejno dopolnjevanje, duh, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, risanje brez vida, limits, bearings, aunits, shx, diagram, ole, zgodovina, primerjava, z besedami, lastnosti, čevlji in palci, raztegni, jeziki, vnosne naprave, težave, živo, pomočniki
from: 3451e64c
---

To se je spremenilo v CadCraft 0.9 v primerjavi z 0.8.1. CadCraft je risarska in 3D aplikacija CadCraft Studio 0.9 in njenih osmih aplikacij. 0.9 dokonča risanje tlorisov, doda sloge besedila in pravi urejevalnik besedila ter da več prostora na zaslonu.

## Novo

### Risanje tlorisov

- **Šrafure, ki sledijo svoji meji.** {{cmd:HATCH}} se poveže z tem, kar jo omejuje. Premaknete, zasukate ali skalirate mejo in šrafura ter njen vzorec sledita; preoblikujete jo in šrafura se ponovno izračuna. {{cmd:HATCHEDIT}} (`HE`) spremeni šrafuro naknadno in naredi ali konča povezavo. Glejte [Šrafura in polnila površin](topic:hatch).
- **Datoteke vzorcev šrafure.** Pri vprašanju {{cmd:HATCH}} `Določite notranjo točko` vnesite `F` (datoteka vzorca) in izberite datoteko `.pat`. Preizkušene so bile samo datoteke, zapisane v običajni obliki.
- **Skupine slojev.** V {{ui:Orodja}} na podoknu {{ui:Sloji}}: {{ui:Nova skupina}}, {{ui:Dodaj pripravljene skupine}}, {{ui:Združi po imenu}} in {{ui:Poiščite sloj}}; ali vnesite {{cmd:LAYGROUP}} (`LG`). Glejte [Urejanje risbe s sloji](topic:layers#group-layers).
- **Zložene etaže.** {{cmd:FLOORS}} (`FLR`), ali {{ui:Etaže…}} v meniju {{ui:Več}} skupine {{ui:Pogled}}. Pogled na listu lahko prikaže eno etažo pod {{ui:Prikazana etaža}} v {{ui:Lastnosti}}. {{cmd:FLOORLAYERS}} spremeni etaže v sloje za datoteko, ki gre nekomu drugemu. Glejte [Zlaganje etaž v eni risbi](topic:floors).
- **Pametne stene 2D, vrata in okna.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) in {{cmd:DELOPENING}}. Vogali, T stiki in križanja se izračunajo za vas. Stene hranijo zapis, kako se stikajo, v {{ui:Lastnosti}} pa dobijo {{ui:Ne dovoli stika na začetku}} / {{ui:Ne dovoli stika na koncu}}, {{ui:Črta lokacije}} in urejljivo {{ui:Dolžina}}. Glejte [Risanje 2D pametnih sten, vrat in oken](topic:walls-2d).
- **Orodja za stene na tlorisnih stenah.** Vnesite {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} in ostala. Še nimajo gumbov na orodni vrstici. Glejte [Oblike sten, rezi, odmiki in zaklepi za 2D stene](topic:wall-tools-2d).

### Besedilo

- **Slogi besedila.** {{cmd:STYLE}} (`ST`), ali {{ui:Slog besedila}} na orodni vrstici {{ui:Risanje}}: imenovani slogi s pisavo, višino, faktorjem širine in nagibom. Glejte [Nastavitev pisave in velikosti besedila s slogi besedila](topic:text-styles).
- **Urejevalnik oblikovanega odstavčnega besedila.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ali dvojni klik na besedilo odpre okno s pisavo, velikostjo, krepko, ležeče, podčrtano, prečrtano, barvo, poravnavo in znaki stopinje, plus-minus in premera, ter {{ui:V redu}} in {{ui:Prekliči}}. Glejte [Oblikovanje odstavčnega besedila](topic:format-paragraph-text).
- **Diagram iz besedila XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) prebere tudi prilepljeni XML draw.io. Glejte [Risanje diagrama iz besedila](topic:text-to-diagram).
- **Tajsko besedilo v izrisu PDF.** Prej se je izrisovalo kot vprašaji.

### Več prostora in pripomočki za risanje

- **Lebdeča, tanjša ukazna vrstica in kompaktno zgornje območje.** Povlecite ročico ukazne vrstice, da jo naredite lebdečo, povlecite njen zgornji rob za manj vrstic, {{key:F2}} odpre zgodovino. {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Ukazna vrstica}} in izbire zgornjega območja imajo enake nastavitve. Glejte [Nastavitve](topic:settings#command-line).
- **Meni lovljenja predmetov.** Desni klik na {{ui:Lovljenje}} v vrstici stanja ali vnesite {{cmd:OSNAP}}.
- **Lovljenje na mrežo.** Gumb {{ui:Lovljenje na mrežo}} v vrstici stanja ali {{key:F9}}: izbrane točke gredo na najbližjo točko mreže, kadar lovljenje predmeta ni prevzelo točke.
- **Lok na deset načinov in Nadaljuj.** {{ui:Lok}} na orodni vrstici {{ui:Risanje}} ali {{cmd:ARC}}: 3 točke, družina Začetek/Središče/Konec in družina Središče/Začetek/Konec, ter Nadaljuj (pritisnite {{key:Enter}} na začetni točki) od zadnje črte, loka ali polilinije.
- **Podokno Dokumenti.** {{cmd:DOCUMENTS}} (`DOCS`) ali {{ui:Dokumenti…}} v meniju {{ui:Več}} skupine {{ui:Pogled}}: revizija, stanje in odjava za vsako risbo v mapi projekta. Odpre se kot sredinsko pogovorno okno. Glejte [Dokumenti](topic:documents).

### Datoteke

- **Jeklene velikosti po Združenem kraljestvu.** 976 prerezov v podoknu Standardno, vnesenih kot na risbah (na primer `305x165x40 UB`).
- **Južnoafriški paketi** (risarska praksa in gradbeni predpisi) kot paketi dodatka Gradbeni predpisi. Številke niso preverjene.
- **Dodatki za CadCraft,** dodani na zahtevo in privzeto izklopljeni: oblikovanje notranje razsvetljave, oblikovanje čipov (HDL v postavitev), rezkanje z usmerjevalnikom, simulacija vezij, verižna zobniki valjčnih verig in paketi držav gradbenih predpisov.

## Popravljeno

- Premikanje, zasukanje ali skaliranje šrafure je pustilo njen vzorec za seboj.
- {{cmd:GRIDMOVE}} je prenesel celotno tlorisno steno, ki se začne samo na mrežni črti. Stena se zdaj presodi po svojih koncih.
- Mreža je bila prikazana samo znotraj mej risbe tudi z izklopljenimi mejami.
- Seznam blokov v stranskem podoknu se pomika, ime, ki ni blok, pa navede bloke, ki se začnejo z njim ("Did you mean").
- Datoteke DXF R12, ki jih je AutoCAD zavrnil ("Unknown group 1001 for table"), se zdaj odprejo tam.
- Zelo velike datoteke (približno 70.000 entitet in več) se niso odprle z "Maximum call stack size exceeded".
- Datoteke DWG iz AutoCAD 2018 in novejših z visoko različico vzdrževanja se niso odprle z "bad BITLONG code 11".
- V oknu odstavčnega besedila se nova velikost, vpisana za izbrani del, ohrani z izborom.

## V vsaki aplikaciji

Namigi orodij Bootstrap na vsaki kontroli z namigom, začetni nasvet, ki ga lahko zaprete, zavihki, ki se pomikajo, če se ne prilegajo, in naslov zavihka brskalnika, ki sledi odprti risbi (`<drawing> - CadCraft | CadCraft`). {{ui:Nastavitve}} › {{ui:Postavitev}} je zdaj spustni seznam izbir z dvema vrsticama. Seznam jezikov v {{ui:Nastavitve}} je daljši kot v 0.8. Sodelovanje v živo, zbirke Knjižnice ter teže in temperature enot so opisane v opombah za Studio.

## Iskreno o omejitvah

- Odstavčno besedilo nima alinej ali številčnih seznamov, ravnila tabulatorjev ali poravnave na obe strani. Izrisani PDF-ji nastavijo besedilo v Helvetica.
- Tlorisne stene so ravne, zato je lok narisan kot kratke stene. Skupnostno ročno preverjanje orodja za stene še čaka.
- Skupine slojev niso zapisane v AutoCADovi lastni obliki, zato AutoCAD prikaže ploski seznam. Drugi programi prikažejo vse etaže skupaj, razen če zaženete {{cmd:FLOORLAYERS}}.
- Podokno Dokumenti ni preizkusila dva človeka na pravi skupni mapi. Obdelava z usmerjevalnikom ni bila zagnana na nobenem pravem računalniku. Ocena razsvetljave je bila preverjena z sledenjem fotonov, ne z drugim programom. Inženirski dodatki so pripomočki za preverjanje, ne nadomestilo za pregled inženirja.
- Jeziki razen angleščine so strojni osnutki, nekatere nove besede so samo v angleščini.

## Prej: 0.8 in 0.8.1

To se je spremenilo v CadCraft 0.8 in 0.8.1 v primerjavi z 0.7. 0.8 (1. novembra 2026) doda pripomočke za risanje, ki delajo iz vaše lastne risbe, po pravilih na vašem računalniku in brez modela; 0.8.1 (2. novembra 2026) popravi napake, prijavljene po njej.

### Novo

**Risba, ki dokonča vašo misel**

- **Duh pokaže, kaj sledi.** Brez teka ukaza sivi črtkani duh pokaže, kaj pravijo vzorci vaše risbe, da sledi: naslednji steber pri enakem razmiku, naslednji korak stopnice, manjkajoča stena sobe. Pritisnite {{key:Tab}}, da ga narišete kot en korak razveljavitve, ali {{key:Esc}}, da ga odpravite. Gleda samo najnovejše predmete, zato ostane gladek na veliki risbi. Izklopite ga v {{ui:Nastavitve}} › {{ui:CadCraft}} ali z {{cmd:AUTOCOMPLETE}} `Off`.
- **Naslednja točka med risanjem črte.** Med {{cmd:LINE}} ali {{cmd:PLINE}} je duh naslednja točka: naslednji korak stopnice, četrti vogal pravokotnika ali točka, ki ga zaključi. Približajte kazalec in pritisnite {{key:Tab}}, kot da bi kliknili tam.
- **Skice s pisalom postanejo natančna geometrija.** {{cmd:SKETCHFIX}}: narišite grobe poteze s pisalom, miško ali prstom in vsaka postane čista črta, krog, lok, pravokotnik ali polilinija, poravnana in spojena z drugimi. Glejte [Skicirajte s pisalom in dobite natančno geometrijo](topic:sketch-with-a-pen).
- **Fotografija skice postane risba.** {{cmd:PHOTOSKETCH}} (`PSK`) najde papir na fotografiji, izravna perspektivo, uporabi velikost papirja in merilo, ki ju podate, in sledi črte peresa na sloj za vsako barvo peresa. Pisava ni sledena.
- **Kotirajte po pravilih.** {{cmd:AUTODIM}} (`ADIM`) naredi verige kot vzdolž stranic, ki jih izberete, skupno velikost, širine odprtin, premere lukenj in z `Grid` razmik mrežnih črt. Nikoli ne ponovi kote, ki je že tam.
- **Premaknite mrežno črto in niz sledi.** {{cmd:GRIDMOVE}} (`GM`): stene, ki se končajo na mrežni črti, se raztegnejo z njo, stene vzdolž nje, stebri, njen mehurček in oznaka se premaknejo, kote na njej pa izmerijo novi razmik. En korak razveljavitve.

**Listi, detajli in oznake**

- **Listi, ki se sami razporedijo.** {{cmd:AUTOSHEET}} vzame vaše imenovane poglede (ali ločene dele modela), izbere velikost papirja in standardno merilo ter postavi poglede na nove liste z glavo risbe in napisom ime-in-merilo. Vse ostane urejljivo. Glejte [Naj vam razporedim liste](topic:lay-out-sheets-for-me).
- **Detajli vašega podjetja, ponujeni med risanjem.** {{cmd:DETAILS}} (`DET`) ohrani vaše lastne bloke detajlov. Ko se izbor ujema z enim po besedah na njegovih slojih, imenih blokov in opombah, vrstica stanja to pove; izberite ga in ga postavite. {{cmd:DETAILS}} › Share da vaš seznam v mapo Dokumenti in prinese, kar je dodala vaša ekipa. Nastavitve ponudbe izklopijo.
- **Oznake na blokih.** {{cmd:TAGS}} določi oznako (njeno vrsto, dovoljene vrednosti, bloke, na katere se nanaša), jo nastavi na izbrane sklice blokov in jih izpiše kot razpored, ki ga lahko shranite kot CSV. Definicije so shranjene v DWG. Glejte [Oznake](topic:tags).
- **Meje risbe.** {{cmd:LIMITS}} nastavi pravokotnik za risbo: mreža ga zapolni in pogled All ga prikaže. Meje so prikazane kot obris in shranjene v DWG in DXF, skupaj z mejami papirja. Glejte [Nastavitev mej risbe](topic:drawing-limits).

**Delo z drugimi ljudmi in drugimi programi**

- **Spremenite označbo v revizijo.** {{cmd:REDLINE}} prebere paket, ki ga zapiše MarkupCraft, in našteje vsako spremembo. Sprejmite ali zavrnite vsako z opombo; sprejete dobijo oblak revizije in dnevnik revizij v enem koraku razveljavitve, shranite pa datoteko odgovorov, ki zapre označbe v MarkupCraft. Glejte [Spremenite označbo v revizijo](topic:redline-to-revision).
- **Risbe, ki jih git in Fossil lahko združita.** Z vklopljeno {{ui:Datoteke, primerne za združevanje}} v {{ui:Nastavitve}} › {{ui:CadCraft}} dobi vsak predmet ključ, ki se nikoli ne spremeni (datoteke so okoli 10 odstotkov večje). `cadcraft merge base ours theirs` nato združi urejanja dveh ljudi enega DWG ali DXF predmet za predmetom in poroča samo, kjer sta dva spremenila isto stvar. Glejte [Združite urejanja dveh ljudi v eni risbi](topic:merge-drawings).
- **Kaj se je spremenilo, z besedami.** V Zgodovini daje Primerjava navaden seznam: kje so se stvari spremenile, kako velika so ta mesta, kaj je bilo dodano, odstranjeno ali spremenjeno, in besedilo, ki je bilo urejeno. Glejte [Povejte z besedami, kaj se je spremenilo](topic:changes-in-words).
- **Koti in koti z besedami.** Vnesite smer kot geodetski kot, na primer N45°23'30"E, ali v stopinjah, minutah in sekundah, kjer koli je zahtevan kot; AUNITS določi, kako so koti prikazani. Glejte [Vnos in prikaz kotov](topic:bearings-and-angles).
- **Vaše lastne pisave SHX.** Dajte CadCraft mapo pisav SHX in slogi besedila, ki jih imenujejo, se rišejo v njih, na zaslonu in v izrisih. Glejte [Risanje besedila v vaših lastnih pisavah SHX](topic:shx-fonts).
- **Diagram iz besedila.** {{cmd:DIAGRAM}} prebere diagram poteka Mermaid, komponentni diagram PlantUML, D2 ali seznam od-do ter nariše bloke in povezave, ki jih lahko urejate. Glejte [Risanje diagrama iz besedila](topic:text-to-diagram).
- **Predmeti OLE v DWG.** {{cmd:OLELIST}} našteje predmete OLE, ki jih DWG nosi in ki jih CadCraft sam ne more postaviti, ter postavi kopijo slike, kjer rečete. Glejte [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaši izračuni ostanejo z risbo.** Listi za izračune in razlogi za oblikovanje se hranijo v DWG s tabelo razredov.

**Risanje brez vida**

- Vklopite {{ui:Risanje brez vida}} v {{ui:Nastavitve}} (ali vnesite {{cmd:ACCESS}} in odgovorite `On`). CadCraft vsak ukaz in rezultat pove prek bralnika zaslona, opiše risbo in to, kar je blizu kazalca, dovoli vam premikanje kazalca in izbiranje točk s tipkovnico ter predvaja zvok za vsako lovljenje in ročico. Kjer lahko vaš brskalnik prepozna govor na vašem računalniku, je mogoče ukaze izgovoriti. Glejte [Rišite brez vida](topic:draft-without-sight).

**V vsaki aplikaciji**

- **Jeziki.** 54 jezikov; deset je novih (litovščina, latvijščina, bosanščina, marathi, telugu, albanščina, afrikanščina, filipinščina, svahili, uzbeščina). Jeziki razen angleščine so strojni osnutki, dokler jih ne prebere izvorni govorec.
- **Vnosne naprave.** Sledilna ploščica, pisalo, 3D miška, igralni krmilnik in krmiljenje MIDI.
- **Vrstice orodne vrstice in mreža lastnosti.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} ponudi Prelom, 2 vrstici ali 1 vrstica v drugih aplikacijah. CadCraft ima svojo nastavitev v {{ui:Nastavitve}} › {{ui:CadCraft}} (glejte [Vrstice orodne vrstice](topic:settings#toolbar-rows)). Skupna mreža lastnosti je v treh drugih aplikacijah, ne v CadCraft.
- **Težave, Živo in dodatki.** Skupno podokno Težave, ki opozarja v vsaki aplikaciji, pogled Živo v CadCraft Studio, kdo je kje (glejte [Delo na eni risbi skupaj](topic:work-live)), in seznam dodatkov.
- **Povežite svojo umetno inteligenco.** Ena povezava iz CadCraft Studio do vseh osmih aplikacij, z ravnjo samo za branje, predlaganje ali urejanje za vsako aplikacijo in dnevnikom v preprostih besedah o tem, kaj je pomočnik naredil. CadCraft nima lastne umetne inteligence, in Vprašaj v vsaki aplikaciji uporabi umetno inteligenco, ki jo povežete.

### Popravljeno v 0.8.1

- **Lastnosti so prikazale 150 namesto 12'-6"** v risbah s čevlji in palci. Polja, ki jih aplikacija bere sama, spet ohranijo svoje besedilo.
- **Datoteke DWG, katerih razdelek razredov je bil prebran kot napačna vrsta** (GitHub cadcraft#5), se zdaj odprejo pravilno.
- **Križec se ne prikazuje več za pojavnimi okni.**
- **Studio in pakirane izdaje lahko menjajo jezik med delovanjem.** Prej so bile samo v angleščini. Še ni preizkušeno na vsaki platformi: sporočite nam, če se jezik ne spremeni.
- **Tablice v pokončni postavitvi** dajo prosti prostor mreže platnu, način listov pa se začne pri 760 slikovnih pikah ali manj.
- **STRETCH s križnim oknom in LIMITS** sta bila prijavljena v Studio 0.8.0 in sta bila v spletni izdaji 0.8 že pravilna; namestitveni program prijavitelja je bil starejši. Studio 0.8.1 ju vsebuje.

### Še ni v tej različici

- **0.8 in 0.8.1 nista podpisani s kodo.** Windows lahko opozori (izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}); na Macu z desnim klikom na CadCraft Studio izberite {{ui:Odpri}}. Izdaje za trgovine so zadržane, izdelava za iPad in iPhone pa ni bila ponovno zgrajena za 0.8.1.
- **Skice s pisalom in fotografije skic** so bile preizkušene samo na izmišljenih fotografijah in z miško, še ne z dejanskim pisalom, zaslonom na dotik ali ročno skico na papirju.
- **Risanje brez vida** je bilo preizkušeno z avtomatskimi preverjanji, še ne z bralnikom zaslona ali slepim preizkuševalcem.
- **Deljenje detajlov** ni imelo preverjanja dveh oseb, mapa Team Cloud Plan kot mapa Dokumenti pa ni izdelana.
- **Združevanje** deluje za datoteke DWG in DXF CadCraft; za datoteke drugih aplikacij ni izdelano.
- **Razveljavitev med okni:** CadCraft poroča o vsakem končanem koraku, Studio pa še nima enotne razveljavitve za vse aplikacije; vsaka aplikacija razveljavi svoje korake.
- **OLE predmeti DWG** se ohranijo, vendar se ne narišejo na svojem mestu.
- **Branje tabel slogov izrisa** (datoteke CTB) iz drugih programov je izdelano, vendar ni preverjeno z datoteko iz drugega programa.
- **Povežite svojo umetno inteligenco:** povezava z enim klikom v Studio, gostujoči konektor za umetno inteligenco v brskalniku, vaš lastni ključ API v Studio in objavljeni paket MCP v tej izdaji niso obljubljeni.

Za prejšnjo različico glejte [Kaj je novega v 0.7](topic:whats-new-0-7).
