---
title: Podešavanja CadCraft-a
summary: Podešavanja aplikacije za crtanje: veličina kursora, mesto gde kopija visi od kursora, šta klik radi sa izborom, koliko redova koristi traka sa alatkama, gde je komandna linija i koliko je visoka, kompaktna gornja oblast i indikator ugla.
keywords: komandna linija, lebdeća komandna linija, zakači, jedan red, f2, istorija komandi, commandline, cmdline, toparea, gornja oblast, kompaktno, cursorsize, ukršteni kursor preko celog ekrana, kursor preko celog ekrana, do ivice, redovi trake sa alatkama, prikaz trake sa alatkama, ctrl f1, podešavanja, opcije, indikator ugla, kocka pogleda, ikona osa, ikona UCS, kursor, ukršteni kursor, kvadrat za izbor, tačka lepljenja, osnovna tačka, klik na objekte, izbor, pickadd, shift, vrati
from: ae1a81db
---

Otvorite {{ui:Podešavanja}} zupčanikom na traci aplikacije ili sa {{key:Mod+,}}. Prva kartica, {{ui:CadCraft}}, sadrži podešavanja koja pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži ona koja dele sve aplikacije porodice (tema, veličina teksta i širina panela, izgled i redosled trake sa alatkama). Podešavanja CadCraft-a postoje samo u aplikaciji: menjate ih ovde, a ovaj pregledač ih pamti. {{ui:Vrati podešavanja CadCraft-a}} vraća svako od njih na početno stanje.

## Kursor

**Malo**, **Srednje** (početno), **Veliko** ili **Ceo ekran**: veličina ukrštenog kursora i kvadrata za izbor u crtežu. Veći kvadrat za izbor bira objekte i sa malo veće daljine, što pomaže na ekranu osetljivom na dodir ili u vrlo finom crtežu.

**Ceo ekran** pruža dve linije ukrštenog kursora od ivice do ivice crteža, i kada nijedna komanda nije pokrenuta, pa možete golim okom proveriti da li se dve stvari poklapaju preko celog prikaza. Kada je prikaz podeljen, linije ostaju u oknu u kome radite. Isto kao {{cmd:CURSORSIZE}} 100 u AutoCAD-u: ukucajte {{cmd:CURSORSIZE}} i 100 za ceo ekran; manji broj bira najbližu veličinu (ispod 5 Malo, 5 do 9 Srednje, 10 do 99 Veliko).

## Tačka lepljenja

Gde kopija visi od kursora posle {{key:Mod+V}} ({{cmd:PASTECLIP}}), dok ne kliknete:

- **Donji levi ugao** (početno): donji levi ugao opsega kopiranih objekata, kao u AutoCAD-u.
- **Centar**: sredina njihovog opsega. Zgodno za postavljanje simbola na oko.

Kopija napravljena sa `COPYBASE` uvek visi od osnovne tačke koju ste izabrali. {{ui:Nalepi na mesto}} ({{key:Mod+Shift+V}}) ignoriše ovo podešavanje: zadržava prvobitne koordinate. Vidi [Kopiranje, lepljenje i dupliranje](topic:copy-paste).

## Klik na objekte

Šta klik u crtežu radi sa izborom kada nijedna komanda nije pokrenuta:

- **Dodaje u izbor** (početno): svaki klik ili prozor dodaje objekte; {{key:Shift}}+klik, ili {{key:Shift}}+prozor, ih izbacuje.
- **Zamenjuje izbor**: klik ili prozor bira samo ono što obuhvati. {{key:Shift}}+klik dodaje objekat, ili izbacuje onaj koji je već izabran; {{key:Shift}}+prozor dodaje.

Na upitu `Select objects:` unutar komande, klikovi uvek dodaju (a {{key:Shift}} uklanja), šta god ovo podešavanje kaže. Vidi [Izbor objekata](topic:select-objects).

## Klik na prazno mesto

Šta klik gde nema objekta radi kada nijedna komanda nije pokrenuta. U oba slučaja pokreće prozor za izbor (drugi klik ga završava).

- **Briše izbor** (početno): ono što je bilo izabrano se pušta. Držite {{key:Shift}} dok kliknete da zadržite izbor.
- **Zadržava izbor**: izbor ostaje, kao u drugim programima za crtanje; prozor se dodaje njemu. Pritisnite {{key:Esc}} da obrišete izbor.

## Prevlačenje za izbor

Šta pritisak i prevlačenje na praznom mestu crtaju:

- **Omča** (početno): slobodno nacrtan obris. Ako prvo idete udesno, bira se sve što je potpuno unutra; ako prvo idete ulevo, bira se sve što obuhvati. {{key:Space}} dok prevlačite menja između prozora, ukrštanja i ograde.
- **Pravougaonik**: okvir, kao što klik i drugi klik crtaju.

{{cmd:LASSOMODE}} `1` ili `0` postavlja isto. Vidi [Izbor omčom](topic:lasso-selection).

## Prevlačenje za skraćivanje i produženje

Šta pritisak na praznom mestu i prevlačenje rade u {{cmd:TRIM}} i {{cmd:EXTEND}}:

- **Putanja** (početno): slobodno nacrtana putanja; svaki deo koji prelazi biće skraćen (ili produžen).
- **Prozor**: okvir; svaki deo koji dodiruje biće skraćen, kao što radi opcija `C`.

Vidi [Skraćivanje i produženje](topic:trim-and-extend).

## Položaj trake sa alatkama

{{ui:CadCraft}} › {{ui:Položaj trake sa alatkama}}: **Gore** (početno, kako je oduvek bilo), **Dole**, **Levo** ili **Desno**. Levo ili desno, grupe alata se slažu u kolonu koja se pomera kada je viša od prozora, a dugmad se prelamaju po dva ili tri u redu. Izbor se čuva sa vašim podešavanjima, a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ga postavlja iz komandne linije. {{ui:Opšte}} › {{ui:Vrati raspored}} vraća traku na vrh.

Trake stilova menija se nalaze u traci sa alatkama i pomeraju se s njom, ali je stil {{ui:Traka}} napravljen da se pruža preko vrha ili dna: na strani dobija usku kolonu koja se pomera. Na telefonu traka ostaje tamo gde je smesti telefonski raspored.

## Redovi trake sa alatkama

Koliko redova koriste alati iznad crteža, u traci CadCraft-a i u stilovima {{ui:Crtanje klasično}} i {{ui:Traka}}:

- **Prelomi da stane** (početno): alati se prelamaju prema širini prozora.
- **2 reda**: najviše dva reda. Kada se alati prelome u dva reda ili manje pri ovoj širini, samo se prelamaju; inače stoje u dva reda koji se pomeraju u stranu.
- **1 red**: jedan red koji se pomera u stranu, što crtežu daje najviše prostora.

{{key:Shift+Ctrl+F1}} prolazi kroz sva tri, a {{cmd:TOOLBARROWS}} postavlja jedan. Šta dugmad prikazuju (ikone i tekst, samo ikone ili samo tekst) je podešavanje {{ui:Opšte}} › {{ui:Traka sa alatkama}}; {{key:Ctrl+F1}} prolazi kroz njih, a {{cmd:TOOLBAR}} postavlja jedno.

## Komandna linija

Komandna linija može ostati zakačena ispod crteža, kao što je uvek bila, ili lebdeti preko njega, i može biti tanka koliko jedan red.

- **Učinite je lebdećom.** Prevucite hvatač na njenom levom kraju u crtež, ili izaberite {{ui:Lebdi preko crteža}} u njenom meniju {{ui:Opcije komandne linije}} (tri tačke na desnom kraju). Ponovo prevucite hvatač da je pomerite; njeno mesto se zadržava kada se prozor promeni. Prevucite njenu desnu ivicu da je učinite širom ili užom. Spustite je na statusnu traku, ili izaberite {{ui:Zakači pri dnu}}, da je ponovo zakačite.
- **Učinite je tanjom ili višom.** Prevucite njenu gornju ivicu: svaki korak je jedan red istorije. Do nula redova ona je **komandna linija od jednog reda**: samo upit i ono što kucate, a nova poruka se kratko prikaže iznad nje. Dvostruki klik na gornju ivicu prelazi između jednog reda i visine koju ste imali.
- **Istorija.** {{key:F2}}, ili dugme sata na komandnoj liniji ({{ui:Istorija komandi (F2)}}), otvara celu istoriju iznad linije (ispod nje kada lebdi blizu vrha prozora). Kucanje i dalje ide u komandnu liniju; {{key:PageUp}} i {{key:PageDown}} pomeraju istoriju, a {{key:Esc}}, {{key:F2}} ili klik negde drugde je zatvara. Vaš tasteri na F2 ima prednost nad ovim.
- **Sa tastature.** Hvatač je dugme: kada je fokusiran, strelice pomeraju lebdeću komandnu liniju (sa {{key:Shift}}, većim koracima); {{key:Up}} učini zakačenu lebdećom, a {{key:Down}} na donjoj ivici je zakači. Gornja ivica je razdelnik: {{key:Up}} i {{key:Down}} dodaju ili oduzimaju red, {{key:Home}} je pravi u jedan red, {{key:End}} najviša. Čitači ekrana i dalje čuju svaku poruku, i u komandnoj liniji od jednog reda.

{{ui:CadCraft}} › {{ui:Komandna linija}} ima iste izbore: {{ui:Zakačena pri dnu}} ili {{ui:Lebdeća}}, {{ui:Prikazani redovi istorije}} (0 do 12) i {{ui:Standardna visina}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ih postavlja iz komandne linije. Mesto i visina se čuvaju za CadCraft u ovom pregledaču, zajedno sa ostatkom rasporeda, pa ih sačuvano radno okruženje nosi sa sobom; {{ui:Opšte}} › {{ui:Vrati raspored}} zakači komandnu liniju na njenu standardnu visinu. Na telefonu komandna linija ostaje zakačena sa jednim redom istorije; dugme istorije tamo takođe radi.

{{ui:CadCraft}} › {{ui:Slova opcija}} čuva slova koja ste izabrali za opcije komandi: {{ui:Uredi…}} otvara datoteku, {{ui:Uvezi…}} je zamenjuje datotekom koju izaberete, a {{ui:Izvezi}} je čuva. Vidi [Dajte opcijama komandi sopstvena slova](topic:option-letters).

Kada je prozor nizak, a provera rasporeda predloži gušći raspored, njeno {{ui:Da}} takođe pretvara komandnu liniju u jedan red ako je crtež i dalje kratak posle traka sa alatkama.

## Gornja oblast

{{ui:CadCraft}} › {{ui:Gornja oblast}}: **Standardna** (početno) ili **Kompaktna**. Kompaktna čini trake iznad crteža malim u svakom stilu menija: nazivi grupa i reči ispod ikona nestaju (opisi i čitači ekrana ih i dalje imaju), a dugmad su gušća. Radi zajedno sa [Redovi trake sa alatkama](topic:settings#toolbar-rows): Kompaktna i **1 red** ostavljaju crtežu najviše prostora. {{cmd:TOPAREA}} postavlja ovo.

## Indikator ugla

Šta sedi u uglu crteža:

- **Automatski** (početno): ikona osa na kartici {{ui:Model}} i kocka pogleda na kartici {{ui:3D}}.
- **Ikona osa**: oznaka X i Y u donjem levom uglu kartice {{ui:Model}}, i mala oznaka X, Y i Z na kartici 3D.
- **Kocka pogleda**: kocka u gornjem desnom uglu obe kartice. Na kartici {{ui:Model}} prikazuje crtež odozgo, a klik na drugu stranu, ivicu ili ugao otvara karticu {{ui:3D}} koja gleda odatle. Na 3D kartici se okreće sa pogledom: kliknite da gledate sa strane, prevucite da orbitirate, a kuća vraća izometrijski pogled. Vidi [Model u 3D](topic:3d-solids).
- **Nijedna**: ništa u uglu.

Listovi ne prikazuju nijedno.

## Dužina i površina izbora

- **U statusnoj traci** (početno): kada su objekti izabrani, statusna traka prikazuje njihovu ukupnu dužinu i ukupnu površinu zatvorenih. Vidi [Zbirovi izbora](topic:properties-panel#totals-of-a-selection).
- **Skriveno**: statusna traka ih izostavlja. Svojstva i dalje prikazuju za više objekata.

## Mreža, ortogonalno i hvatanja

Ovo nije u dijalogu: dugmad {{ui:Mreža}}, {{ui:Ortogonalno}} i {{ui:Hvatanje}} u statusnoj traci (ili {{key:F7}}, {{key:F8}}, {{key:F3}}) i spisak hvatanja objekata pored njih pamte se kada ih ostavite. Vidi [Hvatanje za tačke na objektima](topic:object-snaps).
