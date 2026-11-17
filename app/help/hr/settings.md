---
title: Postavke za CadCraft
summary: Postavke koje pripadaju aplikaciji za crtanje: veličina kursora, mjesto na kojem zalijepljena kopija visi od kursora, što klik čini odabiru, koliko redaka koristi alatna traka, gdje stoji naredbeni redak i koliko je visok, kompaktno gornje područje i indikator kuta.
keywords: naredbeni redak, plutajući naredbeni redak, odvoji, usidri, jedan redak, f2, povijest naredbi, commandline, cmdline, toparea, gornje područje, kompaktno, cursorsize, kursor preko cijelog zaslona, od ruba do ruba, redovi alatne trake, prikaz alatne trake, ctrl f1, postavke, preferencije, opcije, indikator kuta, viewcube, ikona osi, ikona UCS, kursor, nišan, okvir odabira, točka lijepljenja, bazna točka, klik na objekte, odabir, pickadd, shift, vrati zadano
from: 0896eb42
---

Otvorite {{ui:Postavke}} sa zupčanikom u traci aplikacije ili pomoću {{key:Mod+,}}. Prva kartica, {{ui:CadCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Općenito}} sadrži one koje dijele sve aplikacije obitelji (tema, veličina teksta i širine ploča, izgled i redoslijed alatne trake). Postavke za CadCraft postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj preglednik ih pamti. {{ui:Vrati zadane postavke za CadCraft}} vraća svaku na početnu vrijednost.

## Kursor

**Malen**, **Srednji** (početna vrijednost), **Velik** ili **Cijeli zaslon**: veličina nišana i okvira odabira u crtežu. Veći okvir odabira bira objekte i s malo veće udaljenosti, što pomaže na zaslonu osjetljivom na dodir ili kod vrlo finog crteža.

**Cijeli zaslon** pušta dvije linije nišana od ruba do ruba preko crteža, također i kad nije pokrenuta naredba, pa možete okom provjeriti da se dvije stvari poravnavaju po cijelom prikazu. Uz podijeljen prikaz, linije ostaju u oknu u kojem radite. Isto kao AutoCADova {{cmd:CURSORSIZE}} 100: upišite {{cmd:CURSORSIZE}} i 100 za cijeli zaslon; manji broj bira najbližu veličinu (ispod 5 Malen, od 5 do 9 Srednji, od 10 do 99 Velik).

## Točka lijepljenja

Mjesto na kojem zalijepljena kopija visi od kursora nakon {{key:Mod+V}} ({{cmd:PASTECLIP}}), dok ne kliknete:

- **Donji lijevi kut** (početna vrijednost): donji lijevi kut opsega kopiranih objekata, kao u AutoCADu.
- **Središte**: sredina njihova opsega. Zgodno za postavljanje simbola okom.

Kopija napravljena s `COPYBASE` uvijek visi od bazne točke koju ste odabrali. {{ui:Zalijepi na isto mjesto}} ({{key:Mod+Shift+V}}) zanemaruje ovu postavku: zadržava izvorne koordinate. Vidi [Kopiraj, zalijepi i dupliciraj](topic:copy-paste).

## Klik na objekte

Što klik u crtežu čini odabiru kad nije pokrenuta naredba:

- **Dodaje odabiru** (početna vrijednost): svaki klik ili prozor dodaje objekte; {{key:Shift}}+klik ili {{key:Shift}}+prozor ih uzimaju van.
- **Zamjenjuje odabir**: klik ili prozor odabire samo ono što uhvati; {{key:Shift}}+klik dodaje objekt ili uklanja onaj koji je već odabran; {{key:Shift}}+prozor dodaje.

Na upitu `Odaberite objekte:` unutar naredbe klikovi uvijek dodaju (a {{key:Shift}} uklanja), bez obzira na ovu postavku. Vidi [Odabir objekata](topic:select-objects).

## Klik na prazno mjesto

Što klik gdje nema objekta čini kad nije pokrenuta naredba. U oba slučaja pokreće prozor odabira (drugi klik ga dovršava).

- **Briše odabir** (početna vrijednost): ono što je bilo odabrano se pušta. Držite {{key:Shift}} dok klikate da ga zadržite.
- **Zadržava odabir**: odabir ostaje, kao u drugim programima za crtanje; prozor se dodaje njemu. Pritisnite {{key:Esc}} da obrišete odabir.

## Povlačenje za odabir

Što pritisak i povlačenje na praznom mjestu crtaju:

- **Laso** (početna vrijednost): slobodni obris. Ako prvo idete udesno, odabire se ono što je u potpunosti unutra; ako prvo idete ulijevo, ono što dotakne. {{key:Space}} dok povlačite prebacuje između prozora, križanja i ograde.
- **Pravokutnik**: okvir, kao što se crta klikom i drugim klikom.

{{cmd:LASSOMODE}} `1` ili `0` postavlja isto. Vidi [Laso odabir](topic:lasso-selection).

## Povlačenje za skraćivanje i produživanje

Što pritisak na praznom mjestu i povlačenje rade u {{cmd:TRIM}} i {{cmd:EXTEND}}:

- **Put** (početna vrijednost): slobodni put; svaki dio koji prijeđe bit će skraćen (ili produžen).
- **Prozor**: okvir; svaki dio koji dotakne bit će skraćen, kao što čini opcija `C`.

Vidi [Skrati i produži](topic:trim-and-extend).

## Položaj alatne trake

{{ui:CadCraft}} › {{ui:Položaj alatne trake}}: **Gore** (početna vrijednost, kako je oduvijek bilo), **Dolje**, **Lijevo** ili **Desno**. Lijevo ili desno, grupe alata slažu se u stupac koji se pomiče kad je viši od prozora, a gumbi se prelamaju u dva ili tri u redu. Izbor se sprema s vašim postavkama, a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ga postavlja iz naredbenog retka. {{ui:Općenito}} › {{ui:Vrati raspored na zadano}} vraća alatnu traku na vrh.

Trake stilova izbornika nalaze se unutar alatne trake i pomiču se s njom, ali stil {{ui:Vrpca}} napravljen je da ide preko vrha ili dna: sa strane dobija uzak stupac koji se pomiče. Na telefonu alatna traka ostaje gdje je stavi raspored za telefon.

## Redovi alatne trake

Koliko redaka alati koriste iznad crteža, u CadCraft alatnoj traci i u stilovima {{ui:Klasično crtanje}} i {{ui:Vrpca}}:

- **Prelamaj da stane** (početna vrijednost): alati se prelamaju prema širini prozora.
- **2 retka**: najviše dva retka. Kad alati stanu u dva retka ili manje pri ovoj širini, samo se prelamaju; inače stoje u dva retka koja se pomiču u stranu.
- **1 redak**: jedan redak koji se pomiče u stranu, što crtežu daje najviše prostora.

{{key:Shift+Ctrl+F1}} prolazi kroz tri, a {{cmd:TOOLBARROWS}} postavlja jedan. Što gumbi prikazuju (ikone i tekst, samo ikone ili samo tekst) postavka je {{ui:Općenito}} › {{ui:Alatna traka}}; {{key:Ctrl+F1}} prolazi kroz nju, a {{cmd:TOOLBAR}} je postavlja.

## Naredbeni redak

Naredbeni redak može ostati usidren ispod crteža, kao što je uvijek bio, ili plutati iznad njega, a može biti tanak kao jedan redak.

- **Odvojite ga.** Povucite hvatište na lijevom kraju u crtež ili odaberite {{ui:Odvoji iznad crteža}} u izborniku {{ui:Mogućnosti naredbenog retka}} (tri točke na desnom kraju). Ponovno povucite hvatište da ga pomaknete; njegovo mjesto ostaje kad se promijeni veličina prozora. Povucite njegov desni rub da ga proširite ili suzite. Ispustite ga na statusnu traku ili odaberite {{ui:Usidri na dnu}} da ga ponovno usidrite.
- **Učinite ga tanjim ili višim.** Povucite njegov gornji rub: svaki korak je jedan redak povijesti. Do nule redaka postaje **naredbeni redak u jednom retku**: samo upit i ono što upisujete, a nova poruka se na trenutak prikaže iznad njega. Dvostruki klik na gornji rub prebacuje između jednog retka i visine koju ste imali.
- **Povijest.** {{key:F2}} ili gumb sata na naredbenom retku ({{ui:Povijest naredbi (F2)}}) otvara cijelu povijest iznad retka (ispod njega kad redak pluta blizu vrha prozora). Upisivanje i dalje ide u naredbeni redak; {{key:PageUp}} i {{key:PageDown}} pomiču povijest, a {{key:Esc}}, {{key:F2}} ili klik negdje drugo je zatvara. Vaša vlastita tipka na F2 ima prednost nad ovim.
- **S tipkovnice.** Hvatište je gumb: kad je u fokusu, tipke sa strelicama pomiču plutajući naredbeni redak (uz {{key:Shift}}, većim koracima); {{key:Up}} odvaja usidren, a {{key:Down}} na donjem rubu ga usidruje. Gornji rub je razdjelnik: {{key:Up}} i {{key:Down}} dodaju ili uklanjaju redak, {{key:Home}} ga svodi na jedan redak, {{key:End}} na najviši. Čitači zaslona i dalje čuju svaku poruku, i u naredbenom retku u jednom retku.

{{ui:CadCraft}} › {{ui:Naredbeni redak}} ima iste izbore: {{ui:Usidren na dnu}} ili {{ui:Pluta}}, {{ui:Prikazani redci povijesti}} (0 do 12) i {{ui:Standardna visina}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ih postavlja iz naredbenog retka. Mjesto i visina čuvaju se za CadCraft u ovom pregledniku zajedno s ostatkom rasporeda, pa spremljeno radno okruženje ih nosi sa sobom; {{ui:Općenito}} › {{ui:Vrati raspored na zadano}} ponovno usidruje naredbeni redak na standardnu visinu. Na telefonu naredbeni redak ostaje usidren s jednim retkom povijesti; gumb povijesti radi i tamo.

Kad je prozor nizak i provjera rasporeda ponudi tješnji raspored, njezino {{ui:Da}} također pretvara naredbeni redak u jedan redak ako je crtež i dalje prekratak nakon alatnih traka.

## Gornje područje

{{ui:CadCraft}} › {{ui:Gornje područje}}: **Standardno** (početna vrijednost) ili **Kompaktno**. Kompaktno održava trake iznad crteža malima u svakom stilu izbornika: nazivi grupa i riječi ispod ikona nestaju (opisi alata i čitači zaslona i dalje ih imaju), a gumbi su tješnji. Radi s [redovima alatne trake](topic:settings#toolbar-rows): Kompaktno i **1 redak** daju crtežu najviše prostora. {{cmd:TOPAREA}} to postavlja.

## Indikator kuta

Što stoji u kutu crteža:

- **Automatski** (početna vrijednost): ikona osi na kartici {{ui:Model}} i ViewCube na kartici {{ui:3D}}.
- **Ikona osi**: oznaka X i Y u donjem lijevom kutu kartice {{ui:Model}}, te mala oznaka X, Y i Z na kartici {{ui:3D}}.
- **ViewCube**: kocka u gornjem desnom kutu obiju kartica. Na kartici {{ui:Model}} prikazuje crtež odozgo, a klik na drugu stranu, rub ili kut otvara karticu {{ui:3D}} gledanu odande. Na 3D kartici okreće se s pogledom: klik da gledate sa strane, povlačenje za orbitu, a kućica se vraća na izometrijski pogled. Vidi [Model u 3D](topic:3d-solids).
- **Ništa**: ništa u kutu.

Listovi ne prikazuju nijedno od toga.

## Duljina i površina odabira

- **U statusnoj traci** (početna vrijednost): kad su objekti odabrani, statusna traka prikazuje njihovu ukupnu duljinu i ukupnu površinu zatvorenih. Vidi [Zbrojevi odabira](topic:properties-panel#totals-of-a-selection).
- **Skriveno**: statusna traka ih izostavlja. Svojstva ih i dalje prikazuju za više objekata.

## Mreža, Orto i hvatanja

Ovo nije u dijalogu: gumbi {{ui:Mreža}}, {{ui:Orto}} i {{ui:Hvatanje}} u statusnoj traci (ili {{key:F7}}, {{key:F8}}, {{key:F3}}) i popis hvatanja objekata pored njih pamte se kako ih ostavite. Vidi [Hvatanje na točke na objektima](topic:object-snaps).
