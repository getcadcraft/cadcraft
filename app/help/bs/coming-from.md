---
title: Prelazak sa drugog softvera za nacrte
summary: Kako poznate naredbe, tipke i navike odgovaraju u CadCraftu, te razlike koje zbune iskusne crtače.
keywords: prelazak, razlike, migracija, navike, skraćenice, dinamički unos, pickfirst, pickadd, qsave, saveas, spasi kao, mtext, ctb, polarno praćenje, xref, tipkovni prečaci, poznato, copyclip, pasteclip, pasteorig, copybase, međuspremnik
from: b58688e7
---

Ako poznaješ AutoCAD ili program izgrađen na istom modelu, većina onoga što znaš radi i ovdje: komandna linija, skraćenice poput `L`, `C`, `TR` i `O`, Enter ili Space za ponavljanje, selekcija prozorom i ukrštanjem, hvatanje objekata na F3, Ortogonalno na F8, prostor modela s listovima i prozorima prikaza. Ova stranica navodi šta se direktno preslikava, a zatim razlike koje iznenade. Pročitaj i drugi dio čak i ako prvi samo prelistaš.

## Šta se direktno preslikava

| Navika | U CadCraftu |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Iste naredbe, iste skraćenice |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Isto |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Iste naredbe za kote |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` kucano u komandnoj liniji | Isto, za nove kote |
| `B` za pravljenje bloka, `I` za umetanje, `PU` za čišćenje | Isto (čišćenje uklanja samo nekorištene blokove) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` pa `E` ili `W` | Isto |
| Kucanje `_LINE` ili `-LAYER` iz skripte ili navike | Vodeći `_`, `-`, `.` ili `'` se ignoriše |
| Enter ili Space na praznom upitu ponavlja posljednju naredbu | Isto |
| Esc otkazuje; Esc opet briše odabir | Isto |
| `@dx,dy`, `@d<a`, uneseni uglovi suprotno od smjera kazaljke od istoka | Isto |
| Prozor s lijeva na desno, ukrštanje s desna na lijevo, klik-klik; pritisni i prevuci za lasso, Space mijenja prozor / ukrštanje / ogradu (LASSOMODE) | Isto |
| Prvo odaberi, pa naredba (imenica-glagol) | Isto; završena naredba briše odabir |
| `ALL` i `L` na upitu Odaberi objekte | Isto |
| Shift+klik uklanja iz odabira | Isto. Postavke mogu učiniti da klik umjesto toga zamijeni odabir, kao PICKADD 0: vidi [Postavke CadCraft-a](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Iste naredbe i tipke; lijepljenje postavlja kopiju po njenom donjem lijevom uglu, kao PASTECLIP |
| F3 hvatanje objekata, F7 mreža, F8 Ortogonalno | Iste tipke |
| Dvostruki klik na točkić za zum na sve | Isto |
| Ogledani tekst ostaje čitljiv | Isto (kao MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Isto; na Macu radi i Command |

[Referenca naredbi](topic:commands) navodi svaku naredbu i skraćenicu.

:::tip
Ako ti se sviđa traka AutoCAD-a, izaberi stil menija {{ui:Klasični nacrt}} u {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Meniji, tipke i miš}}: kartice Početna, Umetanje, Anotacija, Parametarski, Pogled, Upravljanje i Izlaz preko iste komandne linije, srednje dugme pomjera pogled, a desni klik je Enter. Vidi [Meniji, tipke i miš](topic:menus-keys-and-mouse).
:::

[Mapa naredbi](topic:command-map) navodi svaku naredbu CadCraft-a s kratkim nazivima, a [pregled](topic:cheat-sheet) 40 naredbi koje ćeš najviše koristiti (i kao jednostrana PDF datoteka).

## Razlike zbog kojih se ljudi spotaknu

### Upisane tačke su apsolutne

Uz uključen dinamički unos, drugi program tretira upisano `100,0` za drugu tačku kao relativno. **Komandna linija CadCraft-a to ne radi:** tamo je `x,y` uvijek mjereno od ishodišta. Uz {{ui:Dyn}} ({{key:F12}}) uključen, koristi njegova polja: udaljenost, {{key:Tab}}, ugao. Upiši `@100,0` za „100 desno od posljednje tačke”, ili pomjeri unakrsni kursor kako treba i upiši goli `100`.

### Shift preskače hvatanje; ne uključuje ortogonalno

Držanje Shift-a dok klikneš ignoriše hvatanje objekata za taj klik. Ne prebacuje privremeno Ortogonalno. Koristi F8 ili dugme {{ui:Ortogonalno}}.

### Desni klik je uvijek Enter

Nema kontekstnog menija. Desni klik u crtežu je Enter: završava naredbu, završava odabir ili ponavlja posljednju naredbu. Tokom pomjeranja hvataljkama ili okvira za odabir, otkazuje. Prevuci desnim dugmetom da pomjeriš pogled.

### Bez pomjeranja razmakom

Space je Enter, pa držanje Space-a i prevlačenje ne pomjera pogled. Pomjeraj srednjim ili desnim dugmetom, ili umanji pa vrati zum točkićem na drugom mjestu.

### Skrati i produži

Skrati i Produži počinju u Brzom režimu: svaki vidljivi objekat je rezna ivica ili granica, dio ispod pokazivača pokazuje šta će nestati, prevučena putanja skraćuje svaki dio koji prelazi, a objekat koji ništa ne prelazi se briše. {{key:Shift}} prebacuje između skraćivanja i produživanja. `O` prelazi u Standardni režim (prvo izaberi ivice), `F` i `C` su ograda (F) i ukrštanje (C), `E` je EDGEMODE, `R` briše. Nema opcije `P` (Projekcija): CadCraft skraćuje u ravni crteža.

### Zaobljenje i skošenje

{{cmd:FILLET}} i {{cmd:CHAMFER}} imaju opcije koje poznaješ: Poništi (U), Polilinija (P), Poluprečnik (R) (ili Udaljenost (D), Ugao (A) i Metoda (E)), Skrati (T) i Više (M), i {{key:Shift}}+klik za oštar ugao. Zaobljenje između polilinije i linije dodaje luk kao zaseban objekat umjesto da ga spoji u polilniju, a uglovi polilinije uz segment luka ostaju kakvi jesu.

### Paragrafni tekst i tekst u jednom redu

`T`, `MT` i `MTEXT` su paragrafni tekst upisan na mjestu, sa širinom, razmakom redova i poravnanjem; `DT` i `DTEXT` su tekst u jednom redu, kako ga poznaješ. Nema stilova teksta ni kolona, i još ne možeš upisivati formatiranje u tekstu (podebljano, složeni razlomci); formatiranje koje dolazi iz datoteke se čuva, crta i snima (vidi [Dodaj tekst i oznake](topic:text#formatting-inside-paragraph-text-from-other-programs)). Sve se crta fontom u stilu Helvetica.

### Snimanje znači „preuzmi kopiju”

{{key:Mod+S}}, `SAVE` i `QSAVE` preuzimaju kopiju u formatu crteža: DWG koji si otvorio snima se kao DWG, DXF kao DXF. U pregledaču se ništa ne prepisuje na mjestu, a otvorene datoteke se nikad ne mijenjaju. U CadCraft Studiju, {{key:Mod+S}} upisuje nazad u datoteku koju si otvorio.

`SAVEAS` ({{key:Mod+Shift+S}}) je mali dijalog, a ne pregledač datoteka: izaberi {{ui:DWG}} (s njegovom {{ui:Verzija}}, AutoCAD 2000 do 2018), {{ui:DXF R12}} ili {{ui:DXF 2000}} i klikni {{ui:Spasi}}. Pregledač odlučuje gdje ide preuzimanje. `DXFOUT` uvijek preuzima DXF R12.

DWG koji si otvorio snima se u verziji u kojoj je došao; novi crtež se snima u formatu AutoCAD 2000, osim ako ne izabereš drugi. Listovi, kote i obrasci šrafure se čuvaju. Vidi [Datoteke: šta se otvara, šta se snima](topic:files#saving).

### Slojevi: jednostavnije

- Svaka promjena sloja (uključi, zamrzni, zaključaj, boja, štampa, vrsta linije, debljina, tekući sloj) je jedan korak za {{ui:Poništi}}.
- Isključivanje i zamrzavanje imaju isti efekat u CadCraft-u.
- Slojevi koje crtež zamrzava u jednom prozoru prikaza ostaju zamrznuti tamo: na ekranu, u štampi i kad ga snimiš kao DWG ili DXF.
- Prozor prikaza koji prikazuje sloj u vlastitoj boji, vrsti linije, debljini ili prozirnosti to zadržava na ekranu, u štampi i u snimljenom DWG-u (DXF zadržava vlastite postavke sloja; snimanje to kaže). Mijenjanje toga po prozoru prikaza još nije izgrađeno.
- Nema upravljača svojstvima slojeva ni stanja slojeva; {{cmd:RENAME}}, {{cmd:LAYMRG}} i {{cmd:LAYDEL}} preimenuju, spajaju i brišu slojeve. Vrste linija i debljine se postavljaju u desnom panelu (vidi [Debljine linija i vrste linija](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} i {{cmd:LAYMCUR}} rade biranjem.
- Snimanje u DXF R12 piše nazive slojeva velikim slovima. DWG ih čuva kako si ih upisao.

### Stilovi kota

`DIMSTYLE` otvara upravljač imenovanim stilovima (novi, izmijeni, postavi tekući, uporedi, primijeni). `DIMSCALE` i ostale postavke i dalje mijenjaju ono što nove kote koriste, a svaka kota zadržava vlastite veličine, koje možeš promijeniti i u panelu Svojstva. Tekući stil se ne čuva u datoteci. Kote slijede format dužine crteža (decimalno, ili stope i inči s {{cmd:UNITS}}), ili vlastiti {{ui:Format}}. Vidi [Postavi veličine kota](topic:dimension-settings).

### Štampanje je jednostavnije

Tabele stilova štampe rade po boji, kao CTB datoteke: Monochrome, Boja i Nijanse sive su ugrađene, možeš napraviti svoje, a svaki list čuva svoju tabelu. Čitanje CTB datoteka je izgrađeno prema objavljenom opisu i isprobano je samo na datotekama koje smo sami napravili; imenovane tabele stilova štampe (STB) i postavke stranice još nisu izgrađene. Linije se štampaju debljinom linije, ostalo jednom širinom pera. Listovi se štampaju u 1:1 na vlastitom papiru; model se štampa u izabranoj ili prilagođenoj razmjeri. Vidi [Štampanje u PDF](topic:plot-pdf).

### Rad unutar prozora prikaza

Kao što poznaješ: dvostruki klik unutar prozora prikaza (ili upiši {{cmd:MSPACE}}) radi na modelu kroz njega, a dvostruki klik izvan njega (ili {{cmd:PSPACE}}) vraća na list. Unutra, pomjeranje i zum mijenjaju ono što prozor prikazuje, osim ako je prikaz zaključan; tada pomjeraju list. Klik na karticu ispod crteža također izlazi iz prozora prikaza. Vidi [Radi na modelu kroz prozor prikaza](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Praćenje i dinamički unos da, hvatanje za mrežu još ne

Mreža je samo za gledanje; tačke se ne hvataju za nju (nema režima hvatanja F9). Polarno praćenje ({{key:F10}}, korak postavljen s {{cmd:POLARANG}}) i praćenje hvatanja objekata ({{key:F11}}: zadrži se na tački hvatanja da je dohvatiš) rade kako poznaješ; vidi [Hvatanje za objekte](topic:object-snaps#polar-tracking). Dinamički unos ({{key:F12}}) prikazuje udaljenost i ugao (ili X i Y) uz unakrsni kursor; vidi [Unos koordinata i udaljenosti](topic:coordinate-entry#dynamic-input).

### Stope i inči

Izaberi {{ui:Format dužine}} {{ui:Arhitektonski}} ili {{ui:Inženjerski}} (ili ukucaj {{cmd:UNITS}}), i upisuj dužine kako poznaješ: `12'6"`, `12'6-1/2"`. Koristi crticu, a ne razmak, ispred razlomka: {{key:Space}} je {{key:Enter}}. Postavi i {{ui:Jedinice}} na {{ui:Inči}}, kako bi listovi i štampe nudili arhitektonske razmjere. Format se čuva u snimljenim DWG i DXF datotekama. Vidi [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopiranje i lijepljenje ostaju unutar CadCraft-a

{{key:Mod+C}}, {{key:Mod+X}} i {{key:Mod+V}} kopiraju, režu i lijepe objekte unutar crteža, između crteža i između CadCraft kartica u istom pregledaču. Međuspremnik je CadCraft-ov vlastiti: ne možeš lijepiti CadCraft objekte u drugi program, niti objekte iz drugog programa u CadCraft. Lijepljenje iz crteža u drugim jedinicama ne mijenja razmjeru: poslije koristi {{cmd:SCALE}}. {{key:Mod+D}} je duplikat koji se pomjera s pokazivačem, dodatak CadCraft-a. Vidi [Kopiraj, zalijepi i dupliraj](topic:copy-paste).

### Tipke pregledača koje ne možeš koristiti

Web stranica ne može uzeti {{key:Mod+N}}, {{key:Mod+W}} ili {{key:Mod+T}} iz pregledača: one otvaraju i zatvaraju prozore i kartice. Koristi dugme {{ui:Nova}} ili ukucaj `NEW`. Vidi [Tipke, miševi i trackpad](common:keys).

## Naredbe koje možda tražiš, a ovdje još nisu

{{cmd:TABLE}} nije izgrađena. Kucanje javlja „Nepoznata naredba”. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} i {{cmd:XREF}} jesu.) [Još nije izgrađeno](topic:not-built-yet) navodi šta raditi umjesto toga danas.
