---
title: Podešavanja CadCraft-a
summary: Podešavanja koja pripadaju aplikaciji za crtanje: veličina kursora, gde zalepljena kopija visi od kursora, šta klik radi sa izborom, koliko redova koristi traka sa alatima, gde stoji komandna linija i koliko je visoka, kompaktna gornja oblast i indikator ugla.
keywords: komandna linija, lebdeća komandna linija, lebdi, zakači, jedan red, f2, istorija komandi, commandline, cmdline, toparea, gornja oblast, kompaktno, cursorsize, kursor preko celog ekrana, kursor od ivice do ivice, redovi trake sa alatima, prikaz trake sa alatima, ctrl f1, podešavanja, opcije, indikator ugla, kocka pogleda, ikona ose, ucs ikona, kursor, ukrštanje, okvir za izbor, tačka lepljenja, osnovna tačka, klikanje na objekte, izbor, pickadd, shift, vrati
from: 0896eb42
---

Otvorite {{ui:Podešavanja}} zupčanikom u gornjoj traci ili sa {{key:Mod+,}}. Prva kartica, {{ui:CadCraft}}, sadrži podešavanja koja pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži ona koja dele sve aplikacije iz porodice (tema, veličina teksta i širina panela, izgled i raspored trake sa alatima). Podešavanja CadCraft-a važe samo u aplikaciji: menjate ih ovde, a ovaj pregledač ih pamti. {{ui:Vrati podešavanja CadCraft-a}} vraća svako od njih na početno.

## Kursor

**Malen**, **Srednji** (početno), **Velik** ili **Preko celog ekrana**: veličina ukrštanja i okvira za izbor u crtežu. Veći okvir za izbor bira objekte i sa malo veće udaljenosti, što pomaže na ekranu osetljivom na dodir ili u vrlo finom crtežu.

**Preko celog ekrana** pušta dve linije ukrštanja od ivice do ivice crteža, i kada nije aktivna nijedna komanda, pa možete proveriti okom da se dve stvari poklapaju preko celog prikaza. Kada je prikaz podeljen, linije ostaju u oknu u kojem radite. Isto kao {{cmd:CURSORSIZE}} 100 u AutoCAD-u: ukucajte {{cmd:CURSORSIZE}} i 100 za preko celog ekrana; manji broj bira najbližu veličinu (ispod 5 Malen, od 5 do 9 Srednji, od 10 do 99 Velik).

## Tačka lepljenja

Gde zalepljena kopija visi od kursora posle {{key:Mod+V}} ({{cmd:PASTECLIP}}), dok ne kliknete:

- **Donji levi ugao** (početno): donji levi ugao obuhvata kopiranih objekata, kao u AutoCAD-u.
- **Centar**: sredina njihovog obuhvata. Zgodno za postavljanje simbola na oko.

Kopija napravljena sa `COPYBASE` uvek visi od osnovne tačke koju ste izabrali. {{ui:Nalepi na mesto}} ({{key:Mod+Shift+V}}) ignoriše ovo podešavanje: zadržava originalne koordinate. Vidi [Kopiranje, lepljenje i dupliranje](topic:copy-paste).

## Klikanje na objekte

Šta klik u crtežu radi sa izborom kada nijedna komanda ne radi:

- **Dodaje izboru** (početno): svaki klik ili prozor dodaje objekte; {{key:Shift}}+klik ili {{key:Shift}}+prozor ih izbacuju.
- **Zamenjuje izbor**: klik ili prozor bira samo ono što zahvati. {{key:Shift}}+klik dodaje objekat, ili izbacuje onaj koji je već izabran; {{key:Shift}}+prozor dodaje.

Na promptu `Izaberi objekte:` unutar komande, klikovi uvek dodaju (a {{key:Shift}} uklanja), bez obzira na ovo podešavanje. Vidi [Izaberi objekte](topic:select-objects).

## Klik na prazno mesto

Šta klik gde nema objekta radi kada nijedna komanda ne radi. U oba slučaja započinje prozor za izbor (drugi klik ga završava).

- **Briše izbor** (početno): ono što je bilo izabrano se pušta. Držite {{key:Shift}} dok kliknete da zadržite.
- **Zadržava izbor**: izbor ostaje, kao u drugim programima za crtanje; prozor dodaje tome. Pritisnite {{key:Esc}} da obrišete izbor.

## Prevlačenje za izbor

Šta pritisak i prevlačenje na praznom mestu crtaju:

- **Lazo** (početno): slobodno nacrtan obrub. Ako prvo idete udesno, bira se sve što leži potpuno unutra, ako prvo ulevo, sve što dodiruje; {{key:Space}} dok prevlačite prebacuje između prozora, ukrštanja i ograde.
- **Pravougaonik**: okvir, kao što klik pa drugi klik crtaju.

{{cmd:LASSOMODE}} `1` ili `0` postavlja isto. Vidi [Izbor lazom](topic:lasso-selection).

## Prevlačenje za skraćivanje i produžavanje

Šta pritisak na praznom mestu i prevlačenje rade u {{cmd:TRIM}} i {{cmd:EXTEND}}:

- **Putanja** (početno): slobodna putanja; svaki deo koji prelazi se skraćuje (ili produžava).
- **Prozor**: okvir; svaki deo koji dodiruje se skraćuje, kao što to radi opcija `C`.

Vidi [Skraćivanje i produžavanje](topic:trim-and-extend).

## Položaj trake sa alatima

{{ui:CadCraft}} › {{ui:Položaj trake sa alatima}}: **Gore** (početno, kako je oduvek bilo), **Dole**, **Levo** ili **Desno**. Na levoj ili desnoj strani grupe alata se slažu u kolonu koja se pomera kada je viša od prozora, a dugmad se prelamaju u dva ili tri reda. Izbor se čuva sa vašim podešavanjima, a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ga postavlja iz komandne linije. {{ui:Opšte}} › {{ui:Vrati raspored}} vraća traku sa alatima na vrh.

Trake menija sa stilom nalaze se unutar trake sa alatima i pomeraju se s njom, ali je stil {{ui:Traka}} napravljen da ide preko gornje ili donje ivice: sa strane dobija usku kolonu koja se pomera. Na telefonu traka sa alatima ostaje gde je raspored za telefon stavlja.

## Redovi trake sa alatima

Koliko redova alati zauzimaju iznad crteža, u traci sa alatima CadCraft-a i u stilovima {{ui:Klasičan crtački}} i {{ui:Traka}}:

- **Prelomi da stane** (početno): alati se prelamaju prema širini prozora.
- **2 reda**: najviše dva reda. Kada se alati na ovoj širini prelamaju u dva reda ili manje, samo se prelamaju; inače stoje u dva reda koji se pomeraju u stranu.
- **1 red**: jedan red koji se pomera u stranu, što crtežu daje najviše mesta.

{{key:Shift+Ctrl+F1}} prolazi kroz ova tri, a {{cmd:TOOLBARROWS}} postavlja jedan. Šta dugmad prikazuju (ikone i tekst, samo ikone ili samo tekst) je podešavanje {{ui:Opšte}} › {{ui:Traka sa alatima}}; {{key:Ctrl+F1}} prolazi kroz njih, a {{cmd:TOOLBAR}} postavlja jedno.

## Komandna linija

Komandna linija može ostati zakačena ispod crteža, kao što je oduvek bila, ili lebdeti preko njega, i može biti tanka koliko jedan red.

- **Učinite je lebdećom.** Prevucite ručicu na njenom levom kraju u crtež, ili izaberite {{ui:Lebdi preko crteža}} u njenom meniju {{ui:Opcije komandne linije}} (tri tačke na desnom kraju). Ponovo prevucite ručicu da je pomerite; njeno mesto se čuva kada se prozor promeni. Prevucite njenu desnu ivicu da je proširite ili suzite. Spustite je na statusnu traku ili izaberite {{ui:Zakači pri dnu}} da je ponovo zakačite.
- **Učinite je tanjom ili višom.** Prevucite njenu gornju ivicu: svaki korak je jedan red istorije. Do nula redova je **komandna linija od jednog reda**: samo prompt i ono što kucate, a nova poruka se pojavi iznad nje na trenutak. Dvostruki klik na gornju ivicu prebacuje između jednog reda i visine koju ste imali.
- **Istorija.** {{key:F2}}, ili dugme sata na komandnoj liniji ({{ui:Istorija komandi (F2)}}), otvara celu istoriju iznad linije (ispod nje kada linija lebdi blizu gornjeg dela prozora). Kucanje i dalje ide u komandnu liniju; {{key:PageUp}} i {{key:PageDown}} pomeraju istoriju, a {{key:Esc}}, {{key:F2}} ili klik negde drugde je zatvara. Vaš sopstveni prečac na F2 ima prednost nad ovim.
- **Sa tastature.** Ručica je dugme: kada je u fokusu, strelice pomeraju lebdeću komandnu liniju (sa {{key:Shift}}, većim koracima); {{key:Up}} učini zakačenu lebdećom, a {{key:Down}} na donjoj ivici je zakači. Gornja ivica je razdvajač: {{key:Up}} i {{key:Down}} dodaju ili uzimaju red, {{key:Home}} je pretvara u jedan red, a {{key:End}} u najvišu. Čitači ekrana i dalje čuju svaku poruku, i u komandnoj liniji od jednog reda.

{{ui:CadCraft}} › {{ui:Komandna linija}} ima iste izbore: {{ui:Zakačena pri dnu}} ili {{ui:Lebdeća}}, {{ui:Prikazani redovi istorije}} (0 do 12) i {{ui:Standardna visina}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ih postavlja iz komandne linije. Mesto i visina se čuvaju za CadCraft u ovom pregledaču zajedno sa ostatkom rasporeda, pa ih sačuvano radno okruženje nosi sa sobom; {{ui:Opšte}} › {{ui:Vrati raspored}} ponovo zakači komandnu liniju na njenu standardnu visinu. Na telefonu komandna linija ostaje zakačena sa jednim redom istorije; dugme za istoriju tu takođe radi.

Kada je prozor nizak i provera rasporeda ponudi zbijeniji raspored, njeno {{ui:Da}} takođe pretvara komandnu liniju u jedan red ako je crtež i dalje nizak posle traka sa alatima.

## Gornja oblast

{{ui:CadCraft}} › {{ui:Gornja oblast}}: **Standardna** (početno) ili **Kompaktna**. Kompaktna održava trake iznad crteža malim u svakom stilu menija: nazivi grupa i reči ispod ikona nestaju (opisi i čitači ekrana ih i dalje imaju), a dugmad su zbijenija. Radi sa [redovima trake sa alatima](topic:settings#toolbar-rows): Kompaktna i **1 red** daju crtežu najviše mesta. {{cmd:TOPAREA}} je postavlja.

## Indikator ugla

Šta stoji u uglu crteža:

- **Automatski** (početno): ikona ose na kartici {{ui:Model}} i kocka pogleda na kartici {{ui:3D}}.
- **Ikona ose**: oznaka X i Y u donjem levom uglu kartice {{ui:Model}}, i mala oznaka X, Y i Z na kartici {{ui:3D}}.
- **Kocka pogleda**: kocka u gornjem desnom uglu obe kartice. Na kartici {{ui:Model}} prikazuje crtež odozgo, a klik na drugu stranu, ivicu ili ugao otvara karticu {{ui:3D}} koja gleda odatle. Na 3D kartici se okreće sa pogledom: kliknite da gledate sa strane, prevucite za orbitu, a kućica vraća izometrijski pogled. Vidi [Model u 3D](topic:3d-solids).
- **Nijedan**: ništa u uglu.

Listovi ne prikazuju ni jedno ni drugo.

## Dužina i površina izbora

- **U statusnoj traci** (početno): kada su objekti izabrani, statusna traka prikazuje njihovu ukupnu dužinu i ukupnu površinu zatvorenih. Vidi [Zbirovi izbora](topic:properties-panel#totals-of-a-selection).
- **Sakriveno**: statusna traka ih izostavlja. Svojstva ih i dalje prikazuju za više objekata.

## Mreža, ortogonalno i hvatanja

Ovo nije u dijalogu: dugmad {{ui:Mreža}}, {{ui:Ortogonalno}} i {{ui:Hvatanje}} u statusnoj traci (ili {{key:F7}}, {{key:F8}}, {{key:F3}}) i spisak hvatanja objekata pored njih pamte se kako ih ostavite. Vidi [Hvatanje za tačke na objektima](topic:object-snaps).
