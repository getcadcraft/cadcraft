---
title: Kaj je novega v 0.9
summary: Šrafure, ki sledijo svoji meji, skupine slojev, etaže v skladu, pametni zidovi z vrati in okni, slogi besedila in urejevalnik oblikovanega besedila, plavajoča ukazna vrstica, lovljenje na mrežo, deset načinov risanja loka in podokno Dokumenti.
keywords: kaj je novega, 0.9, opombe ob izdaji, dnevnik sprememb, šrafura, pridružena šrafura, hatchedit, datoteka vzorca, skupine slojev, laygroup, etaže, sklad etaž, floorlayers, pametni zidovi, zid, vrata, okno, orodja za zidove, slog besedila, style, urejevalnik mtext, odstavčno besedilo, oblikovanje, plavajoča ukazna vrstica, ukazna vrstica, zgornje območje, kompaktno, lovljenje na mrežo, mreža, f9, lok, podokno Dokumenti, odjava, britanske jeklene dimenzije, draw.io, tajsko besedilo, dxf r12, spremembe, 0.8, 0.8.1, različica, nove funkcije, samodopolnjevanje, duh, tabulator, sketchfix, photosketch, autosheet, podrobnosti, gridmove, autodim, oznake, označba, združi, git, fossil, dostop, risanje brez vida, bralnik zaslona, meje, smeri, aunits, shx, diagram, ole, zgodovina, primerjava, z besedami, lastnosti, čevlji in palci, raztegni, jeziki, vhodne naprave, težave, v živo, pomočniki
from: 8b6dea0b
---

To je, kar se je v CadCraftu 0.9 spremenilo v primerjavi z 0.8.1. CadCraft je aplikacija za 2D in 3D risanje v CadCraft Studiu 0.9 in njegovih osmih aplikacijah. 0.9 dokonča risanje tlorisov, doda sloge besedila in pravi urejevalnik besedila ter da več prostora na zaslonu.

## Novo

### Risanje tlorisov

- **Šrafure, ki sledijo svoji meji.** {{cmd:HATCH}} se poveže s tem, kar jo omejuje. Premaknete, zasučete ali spremenite merilo meje, šrafura in njen vzorec sledita; oblikujete jo na novo, šrafura pa se izračuna znova. {{cmd:HATCHEDIT}} (`HE`) šrafuro kasneje spremeni in ustvari ali konča povezavo. Glejte [Šrafiranje in polnila območij](topic:hatch).
- **Datoteke vzorcev šrafur.** Na vprašanje ukaza {{cmd:HATCH}} `Določite notranjo točko` vtipkajte `F` in izberite datoteko `.pat`. Preizkušene so bile le datoteke, zapisane v običajni obliki. Datoteka vzorca (F) je tam, kjer izberete `F`.
- **Skupine slojev.** V {{ui:Orodja}} na podoknu {{ui:Sloji}}: {{ui:Nova skupina}}, {{ui:Dodaj pripravljene skupine}}, {{ui:Združi po imenu}} in {{ui:Poiščite sloj}}; ali vtipkajte {{cmd:LAYGROUP}} (`LG`). Glejte [Ureditev risbe s sloji](topic:layers#group-layers).
- **Etaže v skladu.** {{cmd:FLOORS}} (`FLR`) ali {{ui:Etaže…}} v meniju {{ui:Več}} skupine {{ui:Pogled}}. Pogledno okno na listu lahko pod {{ui:Prikazana etaža}} v Lastnostih prikaže eno etažo. {{cmd:FLOORLAYERS}} spremeni etaže v sloje za datoteko, ki gre komu drugemu. Glejte [Zlaganje etaž v eno risbo](topic:floors).
- **Pametni 2D zidovi, vrata in okna.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) in {{cmd:DELOPENING}}. Vogale, T-spoje in križišča izračunajo sami. Zidovi hranijo zapis, kako se spajajo, Lastnosti pa dobijo {{ui:Ne dovoli stika na začetku}} / {{ui:Ne dovoli stika na koncu}}, {{ui:Referenčna črta}} in urejljivo {{ui:Dolžino}}. Glejte [Risanje 2D zidov, vrat in oken](topic:walls-2d).
- **Orodja za zidove v tlorisih.** Vtipkajte {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} in ostala. Gumbov v orodni vrstici zaenkrat nimajo. Glejte [Oblike zidov, rezi, odmiki in zaklepi za 2D zidove](topic:wall-tools-2d).

### Besedilo

- **Slogi besedila.** {{cmd:STYLE}} (`ST`) ali {{ui:Slog besedila}} na orodni vrstici {{ui:Risanje}}: poimenovani slogi s pisavo, višino, faktorjem širine in nagibom. Glejte [Nastavitev pisave in velikosti besedila s slogi besedila](topic:text-styles).
- **Urejevalnik oblikovanega odstavčnega besedila.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ali dvoklik na besedilo odpre okno s pisavo, velikostjo, krepko, ležeče, podčrtano, prečrtano, barvo, poravnavo in znaki za stopinje, plus-minus in premer, ter {{ui:V redu}} in {{ui:Prekliči}}. Glejte [Oblikovanje odstavčnega besedila](topic:format-paragraph-text).
- **Diagram iz XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) prebere tudi prilepljeni XML draw.io. Glejte [Riši diagram iz besedila](topic:text-to-diagram).
- **Tajsko besedilo v izrisu PDF.** Prej se je natisnilo kot vprašaji.

### Več prostora in pripomočki za risanje

- **Plavajoča, tanjša ukazna vrstica in kompakten zgornji del.** Povlecite ročico ukazne vrstice, da postane plavajoča, povlecite njen zgornji rob za manj vrstic, {{key:F2}} pa odpre zgodovino. {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Ukazna vrstica}} in možnosti zgornjega dela imajo enake nastavitve. Glejte [Nastavitve](topic:settings#command-line).
- **Meni objektnih prijemov.** Desno kliknite {{ui:Lovljenje}} v vrstici stanja ali vtipkajte {{cmd:OSNAP}}.
- **Lovljenje na mrežo.** Gumb {{ui:Lovljenje na mrežo}} v vrstici stanja ali {{key:F9}}: izbrane točke gredo na najbližjo točko mreže, kadar točke ni prevzel noben objektni prijem.
- **Lok na deset načinov in Nadaljuj.** {{ui:Lok}} na orodni vrstici {{ui:Risanje}} ali {{cmd:ARC}}: s 3 točkami, družina Začetek/Središče/Konec in družina Središče/Začetek/Konec, ter Nadaljuj (pritisnite {{key:Enter}} na začetni točki) od zadnje črte, loka ali polilinije.
- **Podokno Dokumenti.** {{cmd:DOCUMENTS}} (`DOCS`) ali {{ui:Dokumenti…}} v meniju {{ui:Več}} skupine {{ui:Pogled}}: različica, stanje in odjava za vsako risbo v projektni mapi. Odpre se kot centrirano pogovorno okno. Glejte [Dokumenti](topic:documents).

### Datoteke

- **Britanske jeklene dimenzije.** 976 profilov v podoknu Standard, vtipkanih kakor na risbah (na primer `305x165x40 UB`).
- **Južnoafriški paketi** (praksa risanja in gradbeni predpisi) kot paketi dodatka Gradbeni predpisi. Števila niso preverjena.
- **Dodatki za CadCraft,** dodani po potrebi in privzeto izklopljeni: oblikovanje notranje razsvetljave, oblikovanje čipov (HDL v postavitev), rezbarjenje z usmerjevalnikom, simulacija vezij, zobniki za valjčne verige in paketi držav za gradbene predpise.

## Popravljeno

- Premik, zasuk ali merilo šrafure je pustil njen vzorec za seboj.
- {{cmd:GRIDMOVE}} je odnesel cel tloris zidu, ki se začne le na mrežni črti. Zid je zdaj presojan po svojih koncih.
- Mreža je bila prikazana le znotraj meja risbe, tudi če so bile meje izklopljene.
- Seznam blokov na stranskem podoknu se pomika, ime, ki ni blok, pa navede bloke, ki se začnejo z njim („Ali ste mislili“).
- Datoteke DXF R12, ki jih AutoCAD ni sprejel („Unknown group 1001 for table“), se zdaj odprejo tam.
- Zelo velike datoteke (približno 70.000 entitet in več) se niso mogle odpreti z napako „Maximum call stack size exceeded“.
- Datoteke DWG iz AutoCAD 2018 in novejših z visoko različico vzdrževanja se niso mogle odpreti z napako „bad BITLONG code 11“.
- V polju odstavčnega besedila nova velikost, vtipkana za izbrani del, ohrani izbor.

## V vseh aplikacijah

Opisi orodij (Bootstrap) pri vsaki kontroli z namigom, začetni namig, ki ga lahko zaprete, zavihki, ki se pomikajo, če se ne prilegajo, in naslov zavihka brskalnika, ki sledi odprti risbi (`<drawing> - CadCraft | CadCraft`). {{ui:Nastavitve}} › {{ui:Razporeditev}} je zdaj spustni seznam dvovrstičnih izbir. Seznam jezikov v {{ui:Nastavitve}} je daljši kakor v 0.8. Sodelovanje v živo, zbirke Knjižnice ter enote teže in temperature so opisani v opombah Studia.

## Iskrene omejitve

- Odstavčno besedilo nima oznak ali oštevilčenih seznamov, tabulatorskega ravnila ali poravnave. Izrisani PDF-ji nastavijo besedilo v pisavi Helvetica.
- Zidovi v tlorisu so ravni, zato je lok narisan kot kratki zidovi. Skupinski ročni pregled orodja za zidove še čaka.
- Skupine slojev niso zapisane v AutoCADovi obliki, zato AutoCAD prikaže ravni seznam. Drugi programi prikažejo vse etaže skupaj, razen če zaženete {{cmd:FLOORLAYERS}}.
- Podokna Dokumenti dva ljudi še nista preizkusila na pravi deljeni mapi. Rezbarjenje z usmerjevalnikom še ni bilo preizkušeno na pravem stroju. Ocena razsvetljave je bila preverjena s sledenjem fotonov, ne z drugim programom. Dodatki za inženirstvo so pripomočki za preverjanje, ne nadomestilo za pregled inženirja.
- Jeziki razen angleščine so strojni osnutki, nekatere nove besede pa so le v angleščini.

## Starejše: 0.8 in 0.8.1

To je, kar se je v CadCraftu 0.8 in 0.8.1 spremenilo v primerjavi z 0.7. Različica 0.8 (1. novembra 2026) doda pomočke za risanje, ki delujejo iz vaše lastne risbe, po pravilih na vašem računalniku in brez modela. Različica 0.8.1 (2. novembra 2026) pa popravlja napake, prijavljene po njej.

### Novo

**Risba, ki dokonča vašo misel**

- **Duh pokaže, kaj sledi.** Brez zagnanega ukaza sivi črtkani duh pokaže, kaj vzorci vaše risbe napovedujejo: naslednjo letev pri enakem razmiku, naslednjo stopnico stopnišča, manjkajoči zid sobe. Pritisnite {{key:Tab}}, da ga narišete kot en korak razveljavitve, ali {{key:Esc}}, da ga odpustite. Gleda le na najnovejše objekte, zato ostane gladek tudi na veliki risbi. Izklopite ga v {{ui:Nastavitve}} › {{ui:CadCraft}} ali z {{cmd:AUTOCOMPLETE}} `Off`.
- **Naslednja točka med risanjem črte.** Med {{cmd:LINE}} ali {{cmd:PLINE}} je duh naslednja točka: naslednja stopnica stopnišča, četrti vogal pravokotnika ali točka, ki ga sklene. Približajte kazalec in pritisnite {{key:Tab}}, kakor da bi kliknili tam.
- **Peresne skice postanejo natančna geometrija.** {{cmd:SKETCHFIX}}: narišite grobe poteze s peresom, miško ali prstom, in vsaka postane čista črta, krožnica, lok, pravokotnik ali polilinija, prilepljena na to, kar je že narisano. Glejte [Skiciranje s peresom in pridobitev natančne geometrije](topic:sketch-with-a-pen).
- **Fotografija skice postane risba.** {{cmd:PHOTOSKETCH}} (`PSK`) poišče papir na fotografiji, poravna perspektivo, uporabi velikost papirja in merilo, ki ju navedete, ter prenese peresne črte na sloj za vsako barvo peresa. Napisi se ne prenesejo.
- **Kotiranje po pravilih.** {{cmd:AUTODIM}} (`ADIM`) naredi verige kot vzdolž stranic, ki jih izberete, celotno velikost, širine odprtin, premere lukenj in z `Grid` razmik mreže. Nikoli ne ponovi kote, ki je že tam.
- **Premaknite mrežno črto in sklop sledi.** {{cmd:GRIDMOVE}} (`GM`): zidovi, ki se končajo na mrežni črti, se raztegnejo z njo; zidovi vzdolž nje, stebri, njen balon in oznaka se premaknejo, kote nanjo pa merijo novi razmik. En korak razveljavitve.

**Listi, podrobnosti in oznake**

- **Listi, ki se sami razporedijo.** {{cmd:AUTOSHEET}} vzame vaše poimenovane poglede (ali ločene dele modela), izbere velikost papirja in standardno merilo ter postavi poglede na nove liste z glavo risbe in napisom imena in merila. Vse ostane urejljivo. Glejte [Naj vam razporedim liste](topic:lay-out-sheets-for-me).
- **Vaši podrobnosti, ponujeni med risanjem.** {{cmd:DETAILS}} (`DET`) hrani vaše lastne bloke podrobnosti. Ko se izbor ujema z enim po besedah na njegovih slojih, imenih blokov in opombah, to pove vrstica stanja; izberite ga in ga postavite. {{cmd:DETAILS}} › Deli shrani vaš seznam v mapo Dokumenti in prinese, kar je dodala vaša ekipa. Nastavitve ponudbe izklopijo.
- **Oznake na blokih.** {{cmd:TAGS}} določi oznako (njeno vrsto, vrednosti, ki jih sme imeti, bloke, na katere se nanaša), jo nastavi na izbrane sklice blokov in jih našteje kot razpredelnico, ki jo lahko shranite kot CSV. Definicije so shranjene v DWG. Glejte [Oznake](topic:tags).
- **Meje risbe.** {{cmd:LIMITS}} nastavi pravokotnik za risbo: mreža ga zapolni, zoom Vse ga pokaže. Meje so prikazane kot obris in shranjene v DWG in DXF, skupaj z mejami papirja. Glejte [Nastavitev mej risbe](topic:drawing-limits).

**Delo z drugimi ljudmi in drugimi programi**

- **Označba v revizijo.** {{cmd:REDLINE}} prebere paket, ki ga zapiše MarkupCraft, in našteje vsako spremembo. Vsako sprejmete ali zavrnete z opombo; sprejete dobijo revizijski oblak in revizijski dnevnik v enem koraku razveljavitve, shranite pa datoteko odgovorov, ki zapre označbe v MarkupCraftu. Glejte [Označba v revizijo](topic:redline-to-revision).
- **Risbe, ki jih git in Fossil lahko združita.** Z vklopljenim {{ui:Datoteke, primerne za združevanje}} v {{ui:Nastavitve}} › {{ui:CadCraft}} dobi vsak objekt ključ, ki se nikoli ne spremeni (datoteke so okoli 10 odstotkov večje). `cadcraft merge base ours theirs` nato združi urejanja dveh ljudi enega objekta DWG ali DXF po objektih in poroča le tam, kjer sta dva spremenila isto stvar. Glejte [Združitev urejanj dveh ljudi v eni risbi](topic:merge-drawings).
- **Kaj se je spremenilo, z besedami.** V Zgodovini Primerjava da navaden seznam: kje so se stvari spremenile, kako veliki so ti deli, kaj je bilo dodano, odstranjeno ali spremenjeno in besedilo, ki je bilo urejeno. Glejte [Povejte z besedami, kaj se je spremenilo](topic:changes-in-words).
- **Smeri in koti.** Smer vtipkajte kot geodetski azimut, na primer N45°23'30"E, ali v stopinjah, minutah in sekundah, kjerkoli je zahtevan kot; AUNITS nastavi, kako so koti prikazani. Glejte [Vtipkajte in prikažite smeri in kote](topic:bearings-and-angles).
- **Lastne pisave SHX.** Dajte CadCraftu mapo pisav SHX in slogi besedila, ki jih poimenujejo, se izrišejo v njih, na zaslonu in v izrisih. Glejte [Riši besedilo v lastnih pisavah SHX](topic:shx-fonts).
- **Diagram iz besedila.** {{cmd:DIAGRAM}} prebere diagram poteka Mermaid, komponentni diagram PlantUML, D2 ali seznam od-do in nariše bloke ter povezave, ki jih lahko urejate. Glejte [Riši diagram iz besedila](topic:text-to-diagram).
- **Objekti OLE v DWG.** {{cmd:OLELIST}} našteje objekte OLE, ki jih DWG nosi in jih CadCraft sam ne more postaviti, ter postavi kopijo slike, kjer rečete. Glejte [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaši izračuni ostanejo z risbo.** Računski listi in obrazložitve načrta se hranijo v DWG s tabelo razredov.

**Risanje brez vida**

- Vklopite {{ui:Risanje brez vida}} v {{ui:Nastavitve}} (ali vtipkajte {{cmd:ACCESS}} in odgovorite `On`). CadCraft govori vsak ukaz in rezultat prek vašega bralnika zaslona, opisuje risbo in to, kar je blizu kazalca, dovoli vam premikati kazalec in izbirati točke s tipkovnico ter predvaja zvok za vsak prijem in ročico. Kjer vaš brskalnik na računalniku prepozna govor, je mogoče ukaze izgovarjati. Glejte [Risanje brez vida](topic:draft-without-sight).

**V vseh aplikacijah**

- **Jeziki.** 54 jezikov; deset je novih (litovščina, latvijščina, bosanščina, marathi, telugu, albanščina, afrikaans, filipinščina, svahili, uzbeščina). Jeziki poleg angleščine so strojni osnutki, dokler jih ne prebere izvorni govorec.
- **Vhodne naprave.** Sledilna ploščica, pero, 3D miška, igralniški krmilnik in krmilja MIDI.
- **Vrstice orodne vrstice in mreža lastnosti.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} v drugih aplikacijah ponuja Prelom, 2 vrstici ali 1 vrstica. CadCraft ima svojo nastavitev v {{ui:Nastavitve}} › {{ui:CadCraft}} (glejte [Vrstice orodne vrstice](topic:settings#toolbar-rows)). Skupna mreža lastnosti je v treh drugih aplikacijah, ne v CadCraftu.
- **Težave, sodelovanje v živo in dodatki.** Skupno podokno Težave, ki opozarja v vseh aplikacijah, pogled v živo v CadCraft Studiu, ki pokaže, kdo je kje (glejte [Delo z eno risbo skupaj](topic:work-live)), in seznam dodatkov.
- **Povežite svojega pomočnika z umetno inteligenco.** Ena povezava iz CadCraft Studia z vsemi osmimi aplikacijami, s stopnjo samo za branje, predlaganje ali urejanje za vsako aplikacijo in dnevnikom v preprostih besedah, kaj je pomočnik naredil. CadCraft nima lastne umetne inteligence, Vprašaj v vsaki aplikaciji pa uporablja pomočnika, ki ga povežete.

### Popravljeno v 0.8.1

- **Lastnosti so pokazale 150 namesto 12'-6"** v risbah s čevlji in palci. Polja, ki jih aplikacija bere sama, spet ohranijo svoje besedilo.
- **Datoteke DWG, katerih razdelek razredov je bil prebran kot napačna vrsta** (GitHub cadcraft#5), se zdaj odprejo pravilno.
- **Križec se ne prikazuje več za pojavnimi okni.**
- **Studio in pakirane izdaje lahko menjajo jezik med delovanjem.** Prej so bile samo v angleščini. Še ni preizkušeno na vseh platformah: sporočite, če se jezik ne spremeni.
- **Tablice v pokončni postavitvi** dajo prosti prostor za mrežo platnu, način listov pa se začne pri 760 slikovnih pikah ali manj.
- **STRETCH z križajočim oknom in LIMITS** sta bila prijavljena v Studiu 0.8.0, v spletni izdelavi 0.8 pa sta bila že pravilna; namestitveni program prijavitelja je bil starejši. Studio 0.8.1 ju vsebuje.

### Ni še v tej različici

- **0.8 in 0.8.1 nista podpisani s kodo.** Windows lahko opozori (izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}); na Macu z desnim klikom kliknite CadCraft Studio in izberite {{ui:Odpri}}. Izdaje za trgovine so zadržane, izdelava za iPad in iPhone pa ni bila ponovno zgrajena za 0.8.1.
- **Peresne skice in fotografije skic** so bile preizkušene le na izmišljenih fotografijah in z miško, še ne z pravim peresom, zaslonom na dotik ali ročno skico na papirju.
- **Risanje brez vida** je bilo preizkušeno z avtomatskimi preverbami, še ne z bralnikom zaslona ali slepim preizkuševalcem.
- **Deljenje podrobnosti** ni imelo preverbe z dvema ljudema, mapa Team Cloud Plan kot mapa Dokumenti pa ni zgrajena.
- **Združevanje** deluje za datoteke DWG in DXF CadCrafta; za datoteke drugih aplikacij ni zgrajeno.
- **Razveljavitev med okni:** CadCraft poroča o vsakem končanem koraku, vendar Studio še nima ene same razveljavitve za vse aplikacije; vsaka aplikacija razveljavi svoje korake.
- **Objekti OLE v DWG** so ohranjeni, vendar niso narisani na mestu.
- **Branje tabel slogov izrisa (datoteke CTB)** iz drugih programov je zgrajeno, vendar še ni preverjeno z datoteko iz drugega programa.
- **Povežite svojega pomočnika z umetno inteligenco:** povezava z enim klikom v Studiu, gostiteljski priključek za pomočnika v brskalniku, vaš lasten API ključ v Studiu in objavljeni paket MCP v tej izdaji niso obljubljeni.

Za prejšnjo različico glejte [Kaj je novega v 0.7](topic:whats-new-0-7).
