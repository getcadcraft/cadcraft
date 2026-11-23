---
title: Postavke aplikacije CadCraft
summary: Postavke koje pripadaju aplikaciji za crtanje: veličina kursora, gdje zalijepljena kopija visi od kursora, šta klik radi s odabirom, koliko redova koristi traka s alatima, gdje je komandna linija i koliko je visoka, kompaktno gornje područje i indikator ugla.
keywords: komandna linija, plutajuća komandna linija, pluta, prikači, jedna linija, f2, historija komandi, commandline, cmdline, toparea, gornje područje, kompaktno, cursorsize, kursor preko cijelog ekrana, kursor od ivice do ivice, redovi trake s alatima, prikaz trake s alatima, ctrl f1, postavke, preferencije, opcije, indikator ugla, kocka pogleda, ikona ose, ucs ikona, kursor, nišan, kutija za biranje, tačka zalijepljivanja, osnovna tačka, klik na objekte, odabir, pickadd, shift, vrati
from: ae1a81db
---

Otvorite {{ui:Postavke}} preko zupčanika na traci aplikacije ili {{key:Mod+,}}. Prvi jezičak, {{ui:CadCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži one koje dijele sve aplikacije porodice (tema, veličina teksta i širine panela, izgled i redoslijed trake s alatima). Postavke aplikacije CadCraft postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj pregledač ih pamti. {{ui:Vrati postavke aplikacije CadCraft}} vraća svaku na početak.

## Kursor

**Mali**, **Srednji** (početni), **Veliki** ili **Preko cijelog ekrana**: veličina nišana i kutije za biranje u crtežu. Veća kutija za biranje bira objekte i sa nešto veće udaljenosti, što pomaže na ekranu osjetljivom na dodir ili u vrlo finom crtežu.

**Preko cijelog ekrana** pokreće dvije linije nišana od ivice do ivice crteža, i kad nijedna naredba nije pokrenuta, pa možete okom provjeriti da se dvije stvari poklapaju preko cijelog pogleda. Kad je pogled podijeljen, linije ostaju u oknu u kojem radite. Isto kao CURSORSIZE 100 u AutoCAD-u: ukucajte {{cmd:CURSORSIZE}} i 100 za preko cijelog ekrana; manji broj bira najbližu veličinu (ispod 5 Mali, 5 do 9 Srednji, 10 do 99 Veliki).

## Tačka zalijepljivanja

Gdje zalijepljena kopija visi od kursora nakon {{key:Mod+V}} ({{cmd:PASTECLIP}}), dok ne kliknete:

- **Donji lijevi ugao** (početni): donji lijevi ugao opsega kopiranih objekata, kao u AutoCAD-u.
- **Centar**: sredina njihovog opsega. Korisno za postavljanje simbola na oko.

Kopija napravljena s `COPYBASE` uvijek visi od osnovne tačke koju ste izabrali. {{ui:Zalijepi na mjesto}} ({{key:Mod+Shift+V}}) ignoriše ovu postavku: zadržava originalne koordinate. Pogledajte [Kopiranje, lijepljenje i dupliranje](topic:copy-paste).

## Klik na objekte

Šta klik u crtežu radi s odabirom kad nijedna naredba nije pokrenuta:

- **Dodaje odabiru** (početni): svaki klik ili prozor dodaje objekte; {{key:Shift}}+klik, ili {{key:Shift}}+prozor, ih izbacuje.
- **Zamjenjuje odabir**: klik ili prozor bira samo ono što obuhvati. {{key:Shift}}+klik dodaje objekat, ili izbacuje onaj koji je već odabran; {{key:Shift}}+prozor dodaje.

Kod upita `Select objects:` unutar naredbe, klikovi uvijek dodaju (a {{key:Shift}} uklanja), bez obzira na ovu postavku. Pogledajte [Odabir objekata](topic:select-objects).

## Klik na prazno mjesto

Šta klik gdje nema objekta radi kad nijedna naredba nije pokrenuta. U oba slučaja pokreće prozor za odabir (drugi klik ga završava).

- **Briše odabir** (početni): ono što je bilo odabrano se pušta. Držite {{key:Shift}} dok klikate da ga zadržite.
- **Zadržava odabir**: odabir ostaje, kao u drugim programima za crtanje; prozor mu dodaje. Pritisnite {{key:Esc}} da obrišete odabir.

## Prevlačenje za odabir

Šta pritisak i prevlačenje na praznom mjestu crtaju:

- **Lasso** (početni): slobodna kontura. Ako prvo idete udesno, bira se sve što je u potpunosti unutra; ako prvo idete ulijevo, bira se sve što dodiruje. {{key:Space}} dok prevlačite prebacuje između prozora, ukrštanja i ograde.
- **Pravougaonik**: kutija, kao što klik i drugi klik crtaju.

{{cmd:LASSOMODE}} `1` ili `0` postavlja isto. Pogledajte [Odabir lasom](topic:lasso-selection).

## Prevlačenje za obrezivanje i produžavanje

Šta pritisak na praznom mjestu i prevlačenje rade u {{cmd:TRIM}} i {{cmd:EXTEND}}:

- **Putanja** (početni): slobodna putanja; svaki dio koji prelazi bude se obrezuje (ili produžuje).
- **Prozor**: kutija; svaki dio koji dodiruje bude se obrezuje, kao što radi opcija `C`.

Pogledajte [Obrezivanje i produžavanje](topic:trim-and-extend).

## Položaj trake s alatima

{{ui:CadCraft}} › {{ui:Položaj trake s alatima}}: **Gore** (početni, kako je uvijek bilo), **Dolje**, **Lijevo** ili **Desno**. Lijevo ili desno, grupe alata slažu se u kolonu koja se pomjera kad je viša od prozora, a dugmad se prelamaju u dva ili tri reda. Izbor se čuva s vašim postavkama, a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ga postavlja iz komandne linije. {{ui:Opšte}} › {{ui:Vrati raspored}} vraća traku s alatima na vrh.

Trake stilova menija nalaze se unutar trake s alatima i pomjeraju se s njom, ali je stil {{ui:Traka}} napravljen da ide preko vrha ili dna: sa strane dobija usku kolonu koja se pomjera. Na telefonu traka s alatima ostaje tamo gdje je smjesti raspored za telefon.

## Redovi trake s alatima

Koliko redova koriste alati iznad crteža, u traci s alatima CadCraft-a i u stilovima {{ui:Klasični nacrt}} i {{ui:Traka}}:

- **Prelomi da stane** (početni): alati se prelamaju prema širini prozora.
- **2 reda**: najviše dva reda. Kad se alati prelamaju na dva reda ili manje pri ovoj širini, samo se prelamaju; inače stoje u dva reda koja se pomjeraju u stranu.
- **1 red**: jedna linija koja se pomjera u stranu, što crtežu daje najviše prostora.

{{key:Shift+Ctrl+F1}} prolazi kroz sva tri, a {{cmd:TOOLBARROWS}} postavlja jedan. Šta dugmad prikazuju (ikone i tekst, samo ikone ili samo tekst) je postavka {{ui:Opšte}} › {{ui:Traka s alatima}}; {{key:Ctrl+F1}} prolazi kroz nju, a {{cmd:TOOLBAR}} je postavlja.

## Komandna linija

Komandna linija može ostati prikačena ispod crteža, kao uvijek, ili lebdjeti preko njega, i može biti tanka koliko jedna linija.

- **Učinite je plutajućom.** Prevucite hvataljku na njenom lijevom kraju u crtež, ili izaberite {{ui:Lebdi preko crteža}} u njenom meniju {{ui:Opcije komandne linije}} (tri tačke na desnom kraju). Ponovo prevucite hvataljku da je pomjerite; njeno mjesto se čuva kad se prozor promijeni. Prevucite njenu desnu ivicu da je učinite širom ili užom. Spustite je na statusnu traku, ili izaberite {{ui:Prikači na dno}}, da je ponovo prikačite.
- **Učinite je tanjom ili višom.** Prevucite njenu gornju ivicu: svaki korak je jedna linija historije. Do nule linija je **komandna linija od jedne linije**: samo upit i ono što ukucate, a nova poruka se pojavi iznad na trenutak. Dvostruki klik na gornju ivicu prebacuje između jedne linije i visine koju ste imali.
- **Historija.** {{key:F2}}, ili dugme sata na komandnoj liniji ({{ui:Historija komandi (F2)}}), otvara cijelu historiju iznad linije (ispod nje kad linija lebdi blizu vrha prozora). Kucanje i dalje ide u komandnu liniju; {{key:PageUp}} i {{key:PageDown}} pomjeraju historiju, a {{key:Esc}}, {{key:F2}} ili klik negdje drugo je zatvara. Vaš taster na F2 ima prednost nad ovim.
- **S tastature.** Hvataljka je dugme: kad je ona u fokusu, strelice pomjeraju plutajuću komandnu liniju (sa {{key:Shift}}, u većim koracima); {{key:Up}} učini prikačenu plutajućom, a {{key:Down}} na donjoj ivici je prikači. Gornja ivica je razdjelnik: {{key:Up}} i {{key:Down}} dodaju ili uzimaju jednu liniju, {{key:Home}} je pretvara u jednu liniju, a {{key:End}} u najvišu. Čitači ekrana i dalje čuju svaku poruku, i u komandnoj liniji od jedne linije.

{{ui:CadCraft}} › {{ui:Komandna linija}} ima iste izbore: {{ui:Prikačena na dnu}} ili {{ui:Pluta}}, {{ui:Prikazane linije historije}} (0 do 12) i {{ui:Standardna visina}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ih postavlja iz komandne linije. Mjesto i visina čuvaju se za CadCraft u ovom pregledaču zajedno s ostatkom rasporeda, pa ih sačuvano radno okruženje nosi sa sobom; {{ui:Opšte}} › {{ui:Vrati raspored}} ponovo prikači komandnu liniju na njenu standardnu visinu. Na telefonu komandna linija ostaje prikačena s jednom linijom historije; dugme historije tamo takođe radi.

{{ui:CadCraft}} › {{ui:Slova opcija}} čuva slova koja ste izabrali za opcije naredbi: {{ui:Uredi…}} otvara datoteku, {{ui:Uvezi…}} je zamjenjuje datotekom koju izaberete, a {{ui:Izvezi}} je čuva. Pogledajte [Dodijelite opcijama naredbi vlastita slova](topic:option-letters).

Kad je prozor nizak i provjera rasporeda nudi gušći raspored, njeno {{ui:Da}} takođe pretvara komandnu liniju u jednu liniju ako je crtež i dalje kratak nakon traka s alatima.

## Gornje područje

{{ui:CadCraft}} › {{ui:Gornje područje}}: **Standardno** (početno) ili **Kompaktno**. Kompaktno održava trake iznad crteža malim u svakom stilu menija: nazivi grupa i riječi ispod ikona nestaju (opisi i čitači ekrana i dalje ih imaju), a dugmad su stisnutija. Radi s [Redovima trake s alatima](topic:settings#toolbar-rows): Kompaktno i **1 red** ostavljaju crtežu najviše prostora. {{cmd:TOPAREA}} to postavlja.

## Indikator ugla

Šta stoji u uglu crteža:

- **Automatski** (početni): ikona ose na kartici {{ui:Model}} i kocka pogleda na kartici {{ui:3D}}.
- **Ikona ose**: oznaka X i Y u donjem lijevom uglu kartice {{ui:Model}}, i mala oznaka X, Y i Z na kartici {{ui:3D}}.
- **Kocka pogleda**: kocka u gornjem desnom uglu obje kartice. Na kartici {{ui:Model}} prikazuje crtež odozgo, a klik na drugu stranu, ivicu ili ugao otvara karticu {{ui:3D}} gledajući odatle. Na 3D kartici okreće se s pogledom: kliknite da gledate sa strane, prevucite da orbitirate, a kuća vraća izometrijski pogled. Pogledajte [Model u 3D](topic:3d-solids).
- **Nijedno**: ništa u uglu.

Listovi ne prikazuju nijedno.

## Dužina i površina odabira

- **U statusnoj traci** (početno): kad su objekti odabrani, statusna traka prikazuje njihovu ukupnu dužinu i ukupnu površinu zatvorenih. Pogledajte [Zbirovi odabira](topic:properties-panel#totals-of-a-selection).
- **Sakriveno**: statusna traka ih izostavlja. Svojstva ih i dalje prikazuju za više objekata.

## Mreža, Ortogonalno i hvatanja

Ovo nije u dijalogu: dugmad {{ui:Mreža}}, {{ui:Ortogonalno}} i {{ui:Hvatanje}} u statusnoj traci (ili {{key:F7}}, {{key:F8}}, {{key:F3}}) i spisak hvatanja objekata pored njih pamte se kako ih ostavite. Pogledajte [Hvatanje za tačke na objektima](topic:object-snaps).
