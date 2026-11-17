---
title: Postavke CadCraft-a
summary: Postavke koje pripadaju aplikaciji za crtanje: veličina kursora, odakle visi kopija pri lijepljenju, šta klik radi s odabirom, koliko redova koristi traka s alatima, gdje stoji komandna linija i koliko je visoka, kompaktno gornje područje i indikator u uglu.
keywords: komandna linija, plutajuća komandna linija, plutanje, prikači, jedan red, f2, istorija komandi, commandline, cmdline, toparea, gornje područje, kompaktno, cursorsize, krstić preko cijelog ekrana, kursor preko cijelog ekrana, od ivice do ivice, redovi trake s alatima, prikaz trake s alatima, ctrl f1, postavke, preferencije, opcije, indikator u uglu, kocka pogleda, ikona osa, ucs ikona, kursor, krstić, kvadrat za biranje, tačka lijepljenja, bazna tačka, klikanje na objekte, odabir, pickadd, shift, vrati
from: 0896eb42
---

Otvorite {{ui:Postavke}} preko zupčanika u traci aplikacije ili {{key:Mod+,}}. Prva kartica, {{ui:CadCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži one koje dijele sve aplikacije u porodici (tema, veličina teksta i širine panela, izgled i redoslijed trake s alatima). Postavke CadCraft-a postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj pregledač ih pamti. {{ui:Vrati postavke CadCraft-a}} vraća svaku od njih na početne vrijednosti.

## Kursor

**Mali**, **Srednji** (početna), **Veliki** ili **Preko cijelog ekrana**: veličina krstića i kvadrata za biranje u crtežu. Veći kvadrat za biranje bira objekte i sa malo veće udaljenosti, što pomaže na ekranu osjetljivom na dodir ili vrlo finom crtežu.

**Preko cijelog ekrana** pruža dvije linije krstića od ivice do ivice crteža, također kada nijedna komanda nije pokrenuta, pa možete očima provjeriti da se dvije stvari poklapaju preko cijelog pogleda. Kada je pogled podijeljen, linije ostaju u panelu u kojem radite. Isto kao {{cmd:CURSORSIZE}} 100 u AutoCAD-u: upišite {{cmd:CURSORSIZE}} i 100 za cijeli ekran; manji broj bira najbližu veličinu (ispod 5 Mali, od 5 do 9 Srednji, od 10 do 99 Veliki).

## Tačka lijepljenja

Odakle kopija visi s kursora nakon {{key:Mod+V}} ({{cmd:PASTECLIP}}), dok ne kliknete:

- **Donji lijevi ugao** (početna): donji lijevi ugao granica kopiranih objekata, kao u AutoCAD-u.
- **Centar**: sredina njihovih granica. Zgodno za postavljanje simbola na oko.

Kopija napravljena s `COPYBASE` uvijek visi s bazne tačke koju ste odabrali. {{ui:Zalijepi na mjesto}} ({{key:Mod+Shift+V}}) zanemaruje ovu postavku: zadržava originalne koordinate. Vidi [Kopiraj, zalijepi i dupliciraj](topic:copy-paste).

## Klikanje na objekte

Šta klik u crtežu radi s odabirom kada nijedna komanda nije pokrenuta:

- **Dodaje odabiru** (početna): svaki klik ili prozor dodaje objekte; {{key:Shift}}+klik, ili {{key:Shift}}+prozor, ih izvlače.
- **Zamjenjuje odabir**: klik ili prozor bira samo ono što uhvati. {{key:Shift}}+klik dodaje objekat, ili izvlači jedan koji je već odabran; {{key:Shift}}+prozor dodaje.

Na upitu `Select objects:` unutar komande, klikovi uvijek dodaju (a {{key:Shift}} uklanja), bez obzira na ovu postavku. Vidi [Odabir objekata](topic:select-objects).

## Klik na prazno mjesto

Šta klik gdje nema objekta radi kada nijedna komanda nije pokrenuta. U svakom slučaju započinje prozor za odabir (drugi klik ga završava).

- **Briše odabir** (početna): ono što je bilo odabrano se pušta. Držite {{key:Shift}} dok klikćete da zadržite.
- **Zadržava odabir**: odabir ostaje, kao u drugim programima za crtanje; prozor se dodaje tome. Pritisnite {{key:Esc}} da obrišete odabir.

## Prevlačenje za odabir

Šta pritisak i prevlačenje na praznom mjestu crtaju:

- **Lasso** (početni): slobodno ocrtavanje. Ako prvo idete udesno, odabire se sve što je potpuno unutra; ako prvo ulijevo, sve što dodiruje. {{key:Space}} dok prevlačite prebacuje između prozora, presjeka i ograde.
- **Pravougaonik**: okvir, kao što klik i drugi klik crtaju.

{{cmd:LASSOMODE}} `1` ili `0` postavlja isto. Vidi [Lasso odabir](topic:lasso-selection).

## Prevlačenje za skraćivanje i produživanje

Šta pritisak na praznom mjestu i prevlačenje rade u {{cmd:TRIM}} i {{cmd:EXTEND}}:

- **Put** (početni): slobodan put; svaki dio koji presijeca biva skraćen (ili produžen).
- **Prozor**: okvir; svaki dio koji dodiruje biva skraćen, kao što radi opcija `C`.

Vidi [Skrati i produži](topic:trim-and-extend).

## Položaj trake s alatima

{{ui:CadCraft}} › {{ui:Položaj trake s alatima}}: **Gore** (početni, kako je uvijek bilo), **Dolje**, **Lijevo** ili **Desno**. Lijevo ili desno, grupe alata se slažu u kolonu koja se pomjera kada je viša od prozora, a dugmad se prelamaju u dva ili tri po redu. Izbor se čuva s vašim postavkama, a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ga postavlja iz komandne linije. {{ui:Opšte}} › {{ui:Vrati raspored}} vraća traku s alatima na vrh.

Trake stilova menija stoje unutar trake s alatima i pomjeraju se s njom, ali je stil {{ui:Traka}} napravljen da ide preko vrha ili dna: sa strane dobija usku kolonu koja se pomjera. Na telefonu traka s alatima ostaje tamo gdje je raspored telefona stavlja.

## Redovi trake s alatima

Koliko redova alati koriste iznad crteža, u traci s alatima CadCraft-a i u stilovima {{ui:Klasični nacrt}} i {{ui:Traka}}:

- **Prelomi da stane** (početno): alati se prelamaju prema širini prozora.
- **2 reda**: najviše dva reda. Kada se alati prelome u dva reda ili manje pri ovoj širini, samo se prelome; inače stoje u dva reda koja se pomjeraju u stranu.
- **1 red**: jedan red koji se pomjera u stranu, što crtežu ostavlja najviše prostora.

{{key:Shift+Ctrl+F1}} prolazi kroz ova tri, a {{cmd:TOOLBARROWS}} postavlja jedan. Šta dugmad prikazuju (ikone i tekst, samo ikone ili samo tekst) je postavka {{ui:Opšte}} › {{ui:Traka s alatima}}; {{key:Ctrl+F1}} prolazi kroz nju, a {{cmd:TOOLBAR}} je postavlja.

## Komandna linija

Komandna linija može ostati prikačena ispod crteža, kao što je uvijek bila, ili lebdjeti preko njega, i može biti tanka kao jedan red.

- **Učinite je plutajućom.** Prevucite hvatač na njenom lijevom kraju u crtež, ili izaberite {{ui:Lebdi preko crteža}} u njenom meniju {{ui:Opcije komandne linije}} (tri tačke na desnom kraju). Ponovo prevucite hvatač da je pomjerite; njeno mjesto se zadržava kada se prozor promijeni. Prevucite njenu desnu ivicu da je učinite širom ili užom. Spustite je na statusnu traku, ili izaberite {{ui:Prikači na dno}}, da je ponovo prikačite.
- **Učinite je tanjom ili višom.** Prevucite njenu gornju ivicu: svaki korak je jedan red istorije. Do nule redova je **komandna linija od jednog reda**: samo upit i ono što upišete, a nova poruka se pokaže iznad nje na trenutak. Dvostruki klik na gornju ivicu prebacuje između jednog reda i visine koju ste imali.
- **Istorija.** {{key:F2}}, ili dugme sa satom na komandnoj liniji ({{ui:Istorija komandi (F2)}}), otvara cijelu istoriju iznad linije (ispod nje kada linija pluta blizu vrha prozora). Kucanje i dalje ide u komandnu liniju; {{key:PageUp}} i {{key:PageDown}} pomjeraju istoriju, a {{key:Esc}}, {{key:F2}} ili klik negdje drugo je zatvara. Vaš vlastiti taster na F2 ima prednost nad ovim.
- **S tastature.** Hvatač je dugme: kada je fokusiran, strelice pomjeraju plutajuću komandnu liniju (uz {{key:Shift}}, većim koracima); {{key:Up}} plutajućom učini prikačenu, a {{key:Down}} na donjoj ivici je prikači. Gornja ivica je razdjelnik: {{key:Up}} i {{key:Down}} dodaju ili oduzimaju red, {{key:Home}} je pretvara u jedan red, {{key:End}} u najvišu. Čitači ekrana i dalje čuju svaku poruku, također u komandnoj liniji od jednog reda.

{{ui:CadCraft}} › {{ui:Komandna linija}} ima iste izbore: {{ui:Prikačena na dnu}} ili {{ui:Pluta}}, {{ui:Prikazane linije istorije}} (0 do 12) i {{ui:Standardna visina}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ih postavlja iz komandne linije. Mjesto i visina se za CadCraft čuvaju u ovom pregledaču zajedno s ostalim rasporedom, pa sačuvano radno okruženje ih nosi; {{ui:Opšte}} › {{ui:Vrati raspored}} ponovo prikači komandnu liniju na standardnu visinu. Na telefonu komandna linija ostaje prikačena s jednim redom istorije; dugme za istoriju tu također radi.

Kada je prozor nizak i provjera rasporeda ponudi zbijeniji raspored, njeno {{ui:Da}} također pretvara komandnu liniju u jedan red ako crtež i poslije traka s alatima ostaje nizak.

## Gornje područje

{{ui:CadCraft}} › {{ui:Gornje područje}}: **Standardno** (početno) ili **Kompaktno**. Kompaktno održava trake iznad crteža malim u svakom stilu menija: nazivi grupa i riječi ispod ikona nestaju (opisi i čitači ekrana ih i dalje imaju), a dugmad su tješnja. Radi s [redovima trake s alatima](topic:settings#toolbar-rows): Kompaktno i **1 red** ostavljaju crtežu najviše prostora. {{cmd:TOPAREA}} ga postavlja.

## Indikator u uglu

Šta stoji u uglu crteža:

- **Automatski** (početno): ikona osa na kartici {{ui:Model}} i kocka pogleda na kartici {{ui:3D}}.
- **Ikona osa**: oznaka X i Y u donjem lijevom uglu kartice {{ui:Model}}, i mala oznaka X, Y i Z na kartici {{ui:3D}}.
- **Kocka pogleda**: kocka u gornjem desnom uglu obje kartice. Na kartici {{ui:Model}} prikazuje crtež odozgo, a klik na drugu stranu, ivicu ili ugao otvara karticu {{ui:3D}} koja gleda odatle. Na 3D kartici se okreće s pogledom: kliknite da gledate sa strane, prevucite za orbitu, a kućica vraća izometrijski pogled. Vidi [Model u 3D](topic:3d-solids).
- **Ništa**: ništa u uglu.

Listovi ne prikazuju nijedno od ovoga.

## Dužina i površina odabira

- **U statusnoj traci** (početno): kada su objekti odabrani, statusna traka prikazuje njihovu ukupnu dužinu i ukupnu površinu zatvorenih. Vidi [Ukupne vrijednosti odabira](topic:properties-panel#totals-of-a-selection).
- **Sakriveno**: statusna traka ih izostavlja. Svojstva ih i dalje prikazuju za više objekata.

## Mreža, Ortogonalno i hvatanja

Ovih nema u dijalogu: dugmad {{ui:Mreža}}, {{ui:Ortogonalno}} i {{ui:Hvatanje}} u statusnoj traci (ili {{key:F7}}, {{key:F8}}, {{key:F3}}) i spisak hvatanja objekata pored njih pamte se kako ih ostavite. Vidi [Hvatanje za tačke na objektima](topic:object-snaps).
