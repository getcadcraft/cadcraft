---
title: Postavke programa CadCraft
summary: Postavke koje pripadaju aplikaciji za crtanje: veličina kursora, mjesto na kojem zalijepljena kopija visi o kursoru, što klik radi s odabirom, broj redaka alatne trake, mjesto naredbenog retka i njegova visina, kompaktno gornje područje te indikator kuta.
keywords: naredbeni redak, plutajući naredbeni redak, odvoji, usidri, jedan redak, f2, povijest naredbi, commandline, cmdline, toparea, gornje područje, kompaktno, cursorsize, križić na cijelom zaslonu, kursor od ruba do ruba, retci alatne trake, prikaz alatne trake, ctrl f1, postavke, opcije, indikator kuta, kocka pogleda, oznaka osi, ucs ikona, kursor, križić, okvir za odabir, točka lijepljenja, bazna točka, klik na objekte, odabir, pickadd, shift, vrati
from: ae1a81db
---

Otvorite {{ui:Postavke}} zupčanikom na traci aplikacije ili pomoću {{key:Mod+,}}. Prva kartica, {{ui:CadCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Općenito}} sadrži one koje dijele sve aplikacije obitelji (tema, veličina teksta ploča i širine, izgled i redoslijed alatne trake). Postavke programa CadCraft postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj preglednik ih pamti. {{ui:Vrati zadane postavke programa CadCraft}} vraća svaku na početnu vrijednost.

## Kursor

**Mali**, **Srednji** (početna), **Veliki** ili **Cijeli zaslon**: veličina križića i okvira za odabir u crtežu. Veći okvir za odabir bira objekte i s nešto veće udaljenosti, što pomaže na zaslonu osjetljivom na dodir ili u vrlo finom crtežu.

**Cijeli zaslon** pruža dvije linije križića od ruba do ruba crteža, i kad nijedna naredba ne radi, pa okom možete provjeriti jesu li dvije stvari poravnate kroz cijeli prikaz. Kad je prikaz podijeljen, linije ostaju u oknu u kojem radite. Isto kao {{cmd:CURSORSIZE}} 100 u AutoCADu: upišite {{cmd:CURSORSIZE}} i 100 za cijeli zaslon; manji broj odabire najbližu veličinu (ispod 5 Mali, od 5 do 9 Srednji, od 10 do 99 Veliki).

## Točka lijepljenja

Odakle zalijepljena kopija visi o kursoru nakon {{key:Mod+V}} ({{cmd:PASTECLIP}}), dok ne kliknete:

- **Donji lijevi kut** (početna): donji lijevi kut opsega kopiranih objekata, kao u AutoCADu.
- **Središte**: sredina njihova opsega. Zgodno za okom postavljanje simbola.

Kopija izrađena s `COPYBASE` uvijek visi o baznoj točki koju ste odabrali. {{ui:Zalijepi na isto mjesto}} ({{key:Mod+Shift+V}}) ne uzima u obzir ovu postavku: zadržava izvorne koordinate. Pogledajte [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste).

## Klik na objekte

Što klik u crtežu radi s odabirom kad nijedna naredba ne radi:

- **Dodaje u odabir** (početna): svaki klik ili prozor dodaje objekte; {{key:Shift}}+klik ili {{key:Shift}}+prozor ih uklanja.
- **Zamjenjuje odabir**: klik ili prozor odabire samo ono što obuhvati. {{key:Shift}}+klik dodaje objekt ili uklanja onaj koji je već odabran; {{key:Shift}}+prozor dodaje.

Kod upita `Select objects:` unutar naredbe klikovi uvijek dodaju (a {{key:Shift}} uklanja), što god ova postavka kaže. Pogledajte [Odabir objekata](topic:select-objects).

## Klik na prazno mjesto

Što klik tamo gdje nema objekta radi kad nijedna naredba ne radi. U svakom slučaju pokreće prozor odabira (drugi klik ga završava).

- **Briše odabir** (početna): što je bilo odabrano, pušta se. Držite {{key:Shift}} dok kliknete da ga zadržite.
- **Zadržava odabir**: odabir ostaje, kao u drugim programima za crtanje; prozor se dodaje njemu. Pritisnite {{key:Esc}} za brisanje odabira.

## Povlačenje za odabir

Što pritisak i povlačenje na praznom mjestu crtaju:

- **Laso** (početna): slobodno nacrtan obris. Pomak prvo udesno odabire ono što je potpuno unutra, prvo ulijevo ono što dotiče; {{key:Space}} dok povlačite prebacuje između prozora, križanja i ograde.
- **Pravokutnik**: okvir, kao što ga crtaju klik i drugi klik.

{{cmd:LASSOMODE}} `1` ili `0` postavlja isto. Pogledajte [Odabir lasom](topic:lasso-selection).

## Povlačenje za skraćivanje i produživanje

Što pritisak na praznom mjestu i povlačenje rade u {{cmd:TRIM}} i {{cmd:EXTEND}}:

- **Putanja** (početna): slobodna putanja; svaki dio koji prijeđe bit će obrezan (ili produžen).
- **Prozor**: okvir; svaki dio koji dotakne bit će obrezan, kao što čini opcija `C`.

Pogledajte [Skraćivanje i produživanje](topic:trim-and-extend).

## Položaj alatne trake

{{ui:CadCraft}} › {{ui:Položaj alatne trake}}: **Gore** (početna, kako je oduvijek bilo), **Dolje**, **Lijevo** ili **Desno**. Lijevo ili desno skupine alata slažu se u stupac koji se pomiče kad je viši od prozora, a gumbi se prelamaju po dva ili tri u retku. Odabir se sprema s vašim postavkama, a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ga postavlja iz naredbenog retka. {{ui:Općenito}} › {{ui:Vrati raspored na zadano}} vraća alatnu traku na vrh.

Trake stilova izbornika nalaze se unutar alatne trake i pomiču se s njom, ali je stil {{ui:Vrpca}} napravljen da ide preko vrha ili dna: sa strane dobiva usku kolonu koja se pomiče. Na telefonu alatna traka ostaje gdje je postavi raspored za telefon.

## Retci alatne trake

Koliko redaka alati koriste iznad crteža, u alatnoj traci programa CadCraft i u stilovima {{ui:Klasično crtanje}} i {{ui:Vrpca}}:

- **Prelomi da stane** (početna): alati se prelamaju prema širini prozora.
- **2 retka**: najviše dva retka. Kad se alati pri ovoj širini prelome na dva retka ili manje, samo se prelamaju; inače stoje u dva retka koji se pomiču u stranu.
- **1 redak**: jedan redak koji se pomiče u stranu, što crtežu ostavlja najviše prostora.

{{key:Shift+Ctrl+F1}} prolazi kroz sva tri, a {{cmd:TOOLBARROWS}} postavlja jedno. Što gumbi prikazuju (ikone i tekst, samo ikone ili samo tekst) postavka je {{ui:Općenito}} › {{ui:Alatna traka}}; {{key:Ctrl+F1}} prolazi kroz nju, a {{cmd:TOOLBAR}} je postavlja.

## Naredbeni redak

Naredbeni redak može ostati usidren ispod crteža, kao što je oduvijek bio, ili lebdjeti iznad njega, a može biti tanak kao jedan redak.

- **Učinite ga plutajućim.** Povucite ručku na lijevom kraju u crtež ili odaberite {{ui:Odvoji iznad crteža}} u izborniku {{ui:Mogućnosti naredbenog retka}} (tri točke na desnom kraju). Ponovno povucite ručku da ga pomaknete; njegovo mjesto se čuva kad se promijeni veličina prozora. Povucite njegov desni rub da ga proširite ili suzite. Ispustite ga na statusnu traku ili odaberite {{ui:Usidri na dnu}} da ga ponovno usidrite.
- **Učinite ga tanjim ili višim.** Povucite njegov gornji rub: svaki korak je jedan redak povijesti. Do nule redaka to je **naredbeni redak u jednom retku**: samo upit i ono što upisujete, a nova poruka se kratko pojavi iznad njega. Dvostruki klik na gornji rub prebacuje između jednog retka i visine koju ste imali.
- **Povijest.** {{key:F2}} ili gumb sata na naredbenom retku ({{ui:Povijest naredbi (F2)}}) otvara cijelu povijest iznad retka (ispod njega kad redak pluta blizu vrha prozora). Upisivanje i dalje ide u naredbeni redak; {{key:PageUp}} i {{key:PageDown}} pomiču povijest, a {{key:Esc}}, {{key:F2}} ili klik drugdje je zatvara. Vaš vlastiti prečac na F2 ima prednost.
- **S tipkovnice.** Ručka je gumb: kad je fokusirana, strelice pomiču plutajući naredbeni redak (s {{key:Shift}}, u većim koracima); {{key:Up}} čini usidreni plutajućim, a {{key:Down}} na donjem rubu ga usidruje. Gornji rub je razdjelnik: {{key:Up}} i {{key:Down}} dodaju ili oduzimaju redak, {{key:Home}} ga svodi na jedan redak, {{key:End}} na najviši. Čitači zaslona i dalje čitaju svaku poruku, i u naredbenom retku s jednim retkom.

{{ui:CadCraft}} › {{ui:Naredbeni redak}} ima iste izbore: {{ui:Usidren na dnu}} ili {{ui:Pluta}}, {{ui:Prikazani redci povijesti}} (0 do 12) i {{ui:Standardna visina}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ih postavlja iz naredbenog retka. Mjesto i visina čuvaju se za CadCraft u ovom pregledniku zajedno s ostalim rasporedom, pa ih sprema i spremljeno radno okruženje; {{ui:Općenito}} › {{ui:Vrati raspored na zadano}} ponovno usidruje naredbeni redak na njegovu standardnu visinu. Na telefonu naredbeni redak ostaje usidren s jednim retkom povijesti; gumb povijesti tamo također radi.

{{ui:CadCraft}} › {{ui:Slova opcija}} čuva slova koja ste odabrali za opcije naredbi: {{ui:Uredi…}} otvara datoteku, {{ui:Uvezi…}} je zamjenjuje datotekom koju odaberete, a {{ui:Izvezi}} je sprema. Pogledajte [Dajte opcijama naredbi vlastita slova](topic:option-letters).

Kad je prozor nizak i provjera rasporeda ponudi zbijeniji raspored, njegov {{ui:Da}} također pretvara naredbeni redak u jedan redak ako je crtež i nakon alatnih traka još kratak.

## Gornje područje

{{ui:CadCraft}} › {{ui:Gornje područje}}: **Standardno** (početna) ili **Kompaktno**. Kompaktno drži trake iznad crteža malima u svakom stilu izbornika: nestaju nazivi skupina i riječi ispod ikona (opisi pri zadržavanju pokazivača i čitači zaslona i dalje ih imaju), a gumbi su zbijeniji. Radi s [Retcima alatne trake](topic:settings#toolbar-rows): Kompaktno i **1 redak** crtežu ostavljaju najviše prostora. {{cmd:TOPAREA}} to postavlja.

## Indikator kuta

Što se nalazi u kutu crteža:

- **Automatski** (početna): ikona osi na kartici {{ui:Model}} i kocka pogleda na kartici {{ui:3D}}.
- **Ikona osi**: oznaka X i Y dolje lijevo na kartici {{ui:Model}}, i mala oznaka X, Y i Z na kartici {{ui:3D}}.
- **Kocka pogleda**: kocka gore desno na objema karticama. Na kartici {{ui:Model}} prikazuje crtež odozgo, a klik na drugu stranu, rub ili kut otvara karticu {{ui:3D}} s pogledom s te strane. Na 3D kartici okreće se s pogledom: kliknite za pogled s bočne strane, povucite za kruženje, a kućica se vraća na izometrijski pogled. Pogledajte [Model u 3D](topic:3d-solids).
- **Nijedno**: ništa u kutu.

Listovi ne prikazuju ni jedno ni drugo.

## Duljina i površina odabira

- **U statusnoj traci** (početna): kad su objekti odabrani, statusna traka prikazuje njihovu ukupnu duljinu i ukupnu površinu zatvorenih. Pogledajte [Zbrojevi odabira](topic:properties-panel#totals-of-a-selection).
- **Skriveno**: statusna traka ih izostavlja. Svojstva ih i dalje prikazuju za više objekata.

## Mreža, Orto i hvatanja

Nisu u dijaloškom okviru: gumbi {{ui:Mreža}}, {{ui:Orto}} i {{ui:Hvatanje}} u statusnoj traci (ili {{key:F7}}, {{key:F8}}, {{key:F3}}) i popis hvatanja objekata uz njih pamte se kad ih napustite. Pogledajte [Hvatanje na točke na objektima](topic:object-snaps).
