---
title: Referenca naredbi
summary: Svaka naredba u aplikaciji za nacrt CadCraft, sa svojim skraćenicama, pitanjima koja postavlja, opcijama i podrazumijevanim vrijednostima.
keywords: naredbe, skraćenice, spisak naredbi, površina, obim, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Unesi naziv naredbe ili skraćenicu i pritisni {{key:Enter}} ili {{key:Space}}. Velika i mala slova nisu bitna, a vodeći `_`, `-`, `.` ili `'` se ignoriše. Upiši `HELP` (ili `?`) da u historiji komandne linije ispišeš kratak spisak svake naredbe; pritisni {{key:F1}} za ovu pomoć.

Kako čitati upite: opcije su u uglastim zagradama, a biraš jednu tako što upišeš njena velika slova (`D` za Prečnik). Podrazumijevana vrijednost je u ugaonim zagradama; pritisni {{key:Enter}} da je prihvatiš. Gdje se traži tačka, možeš kliknuti ili upisati bilo koji od formata iz [Unos koordinata i udaljenosti](topic:coordinate-entry). Gdje se traži udaljenost, možeš upisati broj ili kliknuti dvije tačke.

Pritisak na {{key:Enter}} tamo gdje se traži tačka ili objekat, a nema podrazumijevane vrijednosti, završava naredbu. {{key:Esc}} je otkazuje. Šta god naredba uradi, to je jedan korak za {{ui:Poništi}}.

## Crtanje

### LINE

Skraćenice: `L`. Ravni segmenti, svaki kao zaseban objekat.

- `Zadaj prvu tačku` (Enter: počni od posljednje tačke koju si zadao)
- `Zadaj sljedeću tačku [Poništi (U)]`, ponavlja se. Nakon dva segmenta: `[Poništi (U)/Zatvori (C)]`.
- `U` vraća posljednji segment, `C` zatvara do prve tačke i završava. Enter završava.

### PLINE

Skraćenice: `PL`. Jedna polilinija od segmenata linija i lukova.

- `Zadaj početnu tačku`
- `Zadaj sljedeću tačku [Luk (A)/Zatvori (C)/Poništi (U)]` (Zatvori kad postoje dva segmenta)
- `A` prebacuje na lukove: `Zadaj krajnju tačku luka [Linija (L)/Zatvori (CL)/Poništi (U)]`. Svaki luk nastavlja tangentno na prethodni segment. `L` vraća na linije, `CL` zatvara lukom.
- Enter završava; polilinija ostaje otvorena.

### CIRCLE

Skraćenice: `C`.

- `Zadaj centralnu tačku kruga [3P/2P/Ttr (tan tan poluprečnik)]`
- `Zadaj poluprečnik kruga [Prečnik (D)] <posljednji poluprečnik>`; `D` traži `Zadaj prečnik kruga`.
- `2P`: dvije krajnje tačke prečnika. `3P`: tri tačke na krugu.
- `T` (također naredba `TTR`, i {{ui:Crtanje}} › {{ui:Više}} › {{ui:Krug: Tan, Tan, Poluprečnik}}): `Zadaj tačku na objektu za prvu tangentu kruga`, zatim drugu, pa poluprečnik (Enter: posljednji). Krug dodiruje oba objekta (linije, lukove, krugove, segmente polilinije, također unutar blokova); od krugova koji to rade, onaj koji dodiruje najbliže tvojim izborima. „Krug ne postoji” kad nijedan ne odgovara.
- `TTT` (ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Krug: Tan, Tan, Tan}}): tri objekta; krug koji dodiruje sva tri, najbliži tvojim izborima (tri linije daju unutrašnji krug ili vanjski, zavisno od toga gdje biraš).

### ARC

Skraćenice: `A`.

- `Zadaj početnu tačku luka [Centar (C)]`, `Zadaj drugu tačku luka`, `Zadaj krajnju tačku luka`: luk kroz tri tačke.
- `C`: `Zadaj centralnu tačku luka`, `Zadaj početnu tačku luka`, `Zadaj krajnju tačku luka`. Luk ide suprotno od smjera kazaljke na satu, od početka do kraja.

### RECTANG

Skraćenice: `REC`, `RECTANGLE`. Zatvorena polilinija.

- `Zadaj prvu tačku ugla`, `Zadaj drugu tačku ugla`. Upiši `@širina,visina` za drugi ugao.

### POLYGON

Skraćenice: `POL`. Pravilan poligon kao zatvorena polilinija.

- `Unesi broj stranica <4>` (3 do 1024)
- `Zadaj centar poligona`
- `Unesi opciju [Upisan u krug (I)/Opisan oko kruga (C)] <I>`
- `Zadaj poluprečnik kruga`: klikni ili upiši tačku; njena udaljenost određuje veličinu, a smjer okreće poligon.

### ELLIPSE

Skraćenice: `EL`.

- `Zadaj krajnju tačku ose elipse [Centar (C)]`, `Zadaj drugu krajnju tačku ose`, `Zadaj udaljenost do druge ose`
- `C`: `Zadaj centar elipse`, `Zadaj krajnju tačku ose`, zatim udaljenost do druge ose.

### HATCH

Skraćenice: `H`, `BH`, `BHATCH`; ili {{ui:Šrafura}} na traci alata. Prvo ispisuje tekući obrazac, razmjeru i ugao.

- `Odaberi unutrašnju tačku [Odaberi objekte (S)/Obrazac (P)/Razmjera (SC)/Ugao (A)]`, ponavlja se (`Poništi (U)` kad postoji površina): svaki klik dodaje zatvorenu površinu oko njega, sa zatvorenim oblicima unutra kao ostrvima. Enter pravi jednu šrafuru od svih.
- `S`: `Odaberi zatvorene objekte` (zatvorene polilinije, krugovi, zatvorene elipse).
- `P`: `Unesi naziv obrasca, SOLID, ili ? za spisak <tekući>`. `SC`: `Zadaj razmjeru obrasca`. `A`: `Zadaj ugao obrasca`.

Vidi [Šrafura i ispuna površina](topic:hatch).

### POINT

Skraćenice: `PO`; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Tačka}}. Objekti tačaka, jedan po kliku, dok ne pritisneš Enter.

- `Zadaj tačku`

### XLINE

Skraćenice: `XL`; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Pomoćna linija}}. Pomoćne linije, beskonačne u oba smjera. Vidi [Pomoćne linije i zrake](topic:construction-lines).

- `Zadaj tačku [Hor/Ver/Ang/Bisect/Offset]`, zatim `Zadaj tačku kroz koju prolazi` za svaku liniju, dok ne Enter.
- `A`: `Unesi ugao pomoćne linije [Referenca] <0>`; `R` prvo traži `Odaberi objekat linije`.
- `B`: `Zadaj tačku vrha ugla`, `Zadaj početnu tačku ugla`, zatim `Zadaj krajnju tačku ugla` za svaku liniju.
- `O`: `Zadaj udaljenost pomaka [Kroz (T)] <Kroz>`, zatim `Odaberi objekat linije` i `Zadaj stranu za pomak` (ili `Zadaj tačku kroz koju prolazi`) za svaku liniju.

### RAY

Nema skraćenica; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Zraka}}. `Zadaj početnu tačku`, zatim `Zadaj tačku kroz koju prolazi` za svaku zraku, dok ne Enter.

### TEXT

Skraćenice: `DT`, `DTEXT`; ili {{ui:Tekst}} na traci alata. Tekst u jednom redu; svaki red je zaseban objekat.

- `Zadaj početnu tačku teksta [Poravnanje (J)]`
- `J`: `Unesi opciju [Lijevo/Centar/Desno (R)/Sredina (M)/TL/MC] <L>`, zatim `Zadaj tačku umetanja teksta`
- `Zadaj visinu <tekuća visina teksta>`
- `Zadaj ugao rotacije teksta <0>`
- `Unesi tekst`, ponavlja se: svaki Enter počinje sljedeći red ispod. Enter na praznom redu završava. {{key:Space}} ovdje upisuje razmak.

## Izmjena

Skraćenice: `MT`, `T`; ili {{ui:Pasus}} na traci alata. Paragrafni tekst koji se prelama na širinu, upisan na mjestu.

- `Zadaj prvi ugao`
- `Zadaj suprotni ugao [Visina (H)/Poravnanje (J)/Razmak redova (L)/Rotacija (R)/Širina (W)]`: širina između dva ugla je mjesto gdje se tekst prelama. `H` traži `Zadaj visinu`, `J` `Unesi poravnanje [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Unesi faktor razmaka redova (0.25 do 4)`, `R` `Zadaj ugao rotacije`, `W` `Zadaj širinu (0 za bez prelamanja)` i preskače drugi ugao.
- Zatim se na crtežu otvara okvir: upiši tekst, {{key:Enter}} za novi paragraf, {{key:Mod+Enter}} ili klik izvan okvira za završetak, {{key:Esc}} za otkazivanje. Njegova traka postavlja visinu, razmak redova, širinu i poravnanje. Vidi [Dodaj tekst i oznake](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Skraćenice: `ED`, `DDEDIT`; ili dvostruki klik na tekst. `Odaberi tekst za uređivanje`, ponavlja se do {{key:Enter}}: svaki se otvara u istom okviru. Pokrenut na odabranom ili dvaput kliknutom tekstu, uređuje taj i završava.

### ERASE

Skraćenice: `E`, `DELETE`; ili pritisni {{key:Delete}} s odabranim objektima.

- `Odaberi objekte` (preskače se kad su objekti već odabrani)

### MOVE

Skraćenice: `M`.

- `Odaberi objekte`
- `Zadaj osnovnu tačku [Pomjeranje (D)]`, `Zadaj drugu tačku`
- `D`: `Zadaj pomjeranje`, upisano kao `dx,dy`.

### COPY

Skraćenice: `CO`, `CP`. Kopira onoliko puta koliko zadaš tačaka.

- `Odaberi objekte`
- `Zadaj osnovnu tačku [Pomjeranje (D)]`
- `Zadaj drugu tačku [Poništi (U)]`, ponavlja se do Enter. `U` vraća posljednju kopiju.

### ROTATE

Skraćenice: `RO`.

- `Odaberi objekte`, `Zadaj osnovnu tačku`
- `Zadaj ugao rotacije <posljednji ugao>`: stepeni, pozitivno suprotno od smjera kazaljke; ili klikni tačku da rotiraš prema njoj.

### SCALE

Skraćenice: `SC`.

- `Odaberi objekte`, `Zadaj osnovnu tačku`
- `Zadaj faktor razmjere`: upiši faktor, na primjer `0.5` ili `2`. Kliknuta tačka daje svoju udaljenost od osnovne tačke kao faktor.

### MIRROR

Skraćenice: `MI`.

- `Odaberi objekte`
- `Zadaj prvu tačku ose ogledanja`, `Zadaj drugu tačku ose ogledanja`
- `Obrisati izvorne objekte? [Da (Y)/Ne (N)] <N>`

### ALIGN

Skraćenice: `AL`; ili {{ui:Izmjena}} › {{ui:Više}} › {{ui:Poravnaj}}.

- `Odaberi objekte`
- `Zadaj prvu izvornu tačku`, `Zadaj prvu odredišnu tačku`
- `Zadaj drugu izvornu tačku (Enter za nastavak)`, `Zadaj drugu odredišnu tačku`
- `Zadaj treću izvornu tačku (Enter za nastavak)`, `Zadaj treću odredišnu tačku`
- Uz dva para: `Skalirati objekte na osnovu tačaka poravnanja? [Da (Y)/Ne (N)] <N>`

Vidi [Poravnaj objekte](topic:modify-objects#align-objects).

### ALIGNTO

- `Odaberi objekte` (ili odabir), `Poravnaj [Lijevo/Centar (C)/Desno (R)/Vrh (T)/Sredina (M)/Dno (B)] <Lijevo>`, `Na [Odabir (S)/Prvi (F)/Posljednji (L)/Tačka (P)] <Odabir>`; `P` traži tačku. Odabir ostaje.

### DISTRIBUTE

- `Odaberi objekte` (najmanje tri), `Raspodijeli [Horizontalno/Vertikalno] <Horizontalno>`, `Razmjesti jednako [Centri (C)/Razmaci (G)] <Razmaci>`. Spoljašnja dva ostaju; odabir ostaje.

### ALIGNPANEL

Skraćenice: `ALP`; ili {{ui:Izmjena}} › {{ui:Više}} › {{ui:Poravnaj i raspodijeli}}. Otvara panel koji pokreće ALIGNTO i DISTRIBUTE klikovima.

### LASER

Skraćenice: `LASERCUT`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}}. Otvara panel Laser preko crteža: šta svaki sloj radi (rezanje, urezivanje, graviranje, ispuna, slika), pregled, GRBL G-kod za snimanje, te uokvirivanje i slanje preko Web Serial-a. Vidi [Pošalji crtež na laser](topic:laser-cutting).

### STRETCH

Skraćenice: `S`; ili {{ui:Rastegni}}. `Odaberi objekte za rastezanje`: prevuci ukrštajuće prozore (ili upiši `C`) preko krajeva da pomjeriš. `Zadaj osnovnu tačku [Pomjeranje (D)]`, `Zadaj drugu tačku`. Tačke unutar prozora se pomjeraju: krajevi linija, temena polilinije (segmenti lukova zadržavaju svoju visinu), tačke kota; krugovi, elipse, tekst, tačke i blokovi se pomjeraju cijeli kad su njihov centar ili tačka umetanja unutra. Odabir napravljen prije naredbe zadržava ukrštajuće prozore (i lasso) koji su ga napravili, pa ih rastežu na isti način. Bez prozora, objekti se pomjeraju cijeli.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Skraćenice: `AR`; ili {{ui:Niz}}. `Odaberi objekte`, zatim `Unesi tip niza [Pravougaoni (R)/Polarni (PO)] <Pravougaoni (R)>` (samo ARRAY).

- Pravougaoni počinje s 4 kolone × 3 reda, razmak 1.5 puta veći od veličine objekata, prikazan kao pregled. `Unesi opciju [Broj (COU)/Razmak (S)/Kolone (COL)/Redovi (R)/Izlaz (X)] <X>`: `COU` traži kolone i redove, `S` razmake između kolona i između redova (negativno ide lijevo ili dolje), `COL` i `R` po jedan smjer.
- Polarni traži `Zadaj centralnu tačku niza`, počinje sa 6 stavki sve oko, rotirano. `Unesi opciju [Stavke (I)/Ugao popune (F)/Rotiraj stavke (ROT)/Izlaz (X)] <X>`: `I` stavke, `F` ugao za popunu (+ suprotno od smjera kazaljke, − u smjeru kazaljke), `ROT` Da ili Ne.
- {{key:Enter}} (Izlaz) pravi kopije, kao obične objekte. Jedan korak za {{ui:Poništi}}.

### OFFSET

Skraćenice: `O`. Linije, lukovi, krugovi i polilinije.

- `Zadaj udaljenost pomaka [Kroz (T)] <posljednja udaljenost, ili Kroz>`
- `Odaberi objekat za pomak`, zatim `Zadaj tačku sa strane za pomak` (ili, s Kroz, `Zadaj tačku kroz koju prolazi`), ponavlja se do Enter.

### TRIMEXTENDMODE

- `Unesi novu vrijednost za TRIMEXTENDMODE (1 Brzi, 0 Standardni)`: kako {{cmd:TRIM}} i {{cmd:EXTEND}} počinju. `1` Brzi: svaki objekat je rezna ivica ili granica. `0` Standardni: prvo traže ivice. Također `(setvar "TRIMEXTENDMODE" 0)` u LISP-u.

### TRIM

Skraćenice: `TR`. Prvo ispisuje `Tekuće postavke: Brzi režim (TRIMEXTENDMODE 1), ivice: bez produženja, prevlačenje crta putanju`. U brzom režimu svaki vidljivi objekat je rezna ivica, a objekat koji ništa ne siječe se briše; u standardnom režimu prvo pita `Odaberi rezne ivice (Enter = svaki objekat)` i siječe samo na njima.

- `Odaberi objekat za skraćivanje ili shift-odaberi za produživanje [Rezne ivice (T)/Ograda (F)/Ukrštanje (C)/Režim (O)/Ivica (E)/Brisanje (R)/Poništi (U)]`, ponavlja se: klikni dio za uklanjanje (prikazuje se sivo i crtkano dok pokazivač miruje na njemu), prevuci putanju kroz više dijelova (svi odlaze u jednom koraku), ili klikni dva prazna mjesta za ogradu između njih. {{key:Shift}} umjesto toga produžava. `T` bira rezne ivice (standardni režim), `F` traži tačke ograde, `C` dva ugla prozora (dijelovi djelimično unutra odlaze), `O` traži `Unesi opciju režima skraćivanja [Brzi/Standardni]`, `E` traži `Unesi režim produženja implicitne ivice [Produži/Ne produži]` (EDGEMODE), `R` briše objekte koje odabereš, `U` poništava posljednji izbor ili prevlačenje. Enter završava. Vidi [Skraćivanje i produživanje](topic:trim-and-extend).

### EXTEND

Skraćenice: `EX`. Isto kao TRIM obrnuto: `Odaberi objekat za produživanje ili shift-odaberi za skraćivanje [Granične ivice (B)/Ograda (F)/Ukrštanje (C)/Režim (O)/Ivica (E)/Poništi (U)]`. Klik produžava kraj najbliži njemu do sljedeće granice; prevučena putanja ili ograda produžava svaki objekat koji prelazi; {{key:Shift}} skraćuje. `B` bira granične ivice (standardni režim). Režim i Ivica su zajednički s TRIM.

### LINKVIEWS

Skraćenice: `SYNCVIEWS`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Poveži poglede okana}}, ili ikona veze na karticama crteža. `Poveži poglede okana [ON/OFF]` (Enter uzima drugo stanje): dok je uključeno, pomjeranje ili zum u aktivnom oknu pomjera svako okno koje prikazuje istu vrstu prostora. Vidi [Podijeli ekran](topic:split-screen).

### OPENIN3D

Nema skraćenica; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Otvori u ModelCraft}}, gdje aplikacija za 3D modeliranje preuzima predani crtež. Otvara ga tamo u novoj kartici, kao DWG (ništa se ne otprema). Ako pregledač blokira karticu, to javlja.

### LASSOMODE

`Unesi novu vrijednost za LASSOMODE (1 = lasso, 0 = pravougaonik)`: šta pritisak i prevlačenje na praznom mjestu crtaju. Isto kao Postavke › CadCraft › Prevlačenje za odabir. Vidi [Lasso odabir](topic:lasso-selection).

### FILLET

Skraćenice: `F`. Linije, lukovi, krugovi i polilinije. Prvo ispisuje `Tekuće postavke: Režim = TRIM, Poluprečnik = 0`.

- `Odaberi prvi objekat [Poništi (U)/Polilinija (P)/Poluprečnik (R)/Skrati (T)/Više (M)]`
  - `R` traži `Zadaj poluprečnik zaobljenja <posljednji>`. `T` traži `Unesi opciju režima skraćivanja [Skrati (T)/Bez skraćivanja (N)]`: uz Bez skraćivanja objekti ostaju kakvi jesu i dodaje se samo luk.
  - `M` ostavlja naredbu aktivnom za još uglova do {{key:Enter}}; `U` vraća posljednji ugao bez napuštanja naredbe.
  - `P` traži `Odaberi 2D polilinju [Poluprečnik (R)]` i zaobljava svaki ugao gdje se sastaju dva ravna segmenta. Zaobljenja koja već ima zamjenjuju se novim poluprečnikom; poluprečnik 0 ih uklanja. Uglovi čiji su krakovi prekratki za poluprečnik ostaju i broje se.
- `Odaberi drugi objekat ili shift-odaberi za primjenu ugla [Poluprečnik (R)]`. Drži {{key:Shift}} dok klikneš za oštar ugao, bez obzira na poluprečnik.

Klikni svaki objekat na dijelu koji želiš zadržati. Dvije linije koje se ne sastaju se produžavaju. Dvije paralelne linije dobijaju polukrug preko razmaka, na kraju prve linije najbližem tvom kliku. Krug se nikad ne siječe. Dva susjedna segmenta jedne polilinije dobijaju luk unutar polilinije; polilinija i drugi objekat rade kad rez padne na prvi ili posljednji segment polilinije.

### CHAMFER

Skraćenice: `CHA`. Linije i ravni segmenti polilinija. Prvo ispisuje tekuće udaljenosti (ili dužinu i ugao).

- `Odaberi prvu liniju [Poništi (U)/Polilinija (P)/Udaljenost (D)/Ugao (A)/Skrati (T)/Metoda (E)/Više (M)]`
  - `D` traži `Zadaj prvu udaljenost skošenja <posljednja>` i `Zadaj drugu udaljenost skošenja <prva>`: prva se odsijeca s prve linije koju izabereš, druga s druge.
  - `A` traži `Zadaj dužinu skošenja na prvoj liniji` i `Zadaj ugao skošenja od prve linije`.
  - `E` (Metoda) bira koje od dva koristi sljedeće skošenje. `T`, `M`, `U` i `P` rade kao u {{cmd:FILLET}}.
- `Odaberi drugu liniju ili shift-odaberi za primjenu ugla [Udaljenost (D)/Ugao (A)/Metoda (E)]`. {{key:Shift}}+klik pravi oštar ugao.

Udaljenost duža od linije se odbija (`Udaljenost je prevelika.`).

### BREAK i BREAKATPOINT

Skraćenice: `BR`. `Odaberi objekat` (mjesto gdje klikneš je prva tačka), `Zadaj drugu tačku loma [Prva tačka (F)]`; `F` traži `Zadaj prvu tačku loma` i `Zadaj drugu tačku loma`. Dio između odlazi; na krugu, suprotno od smjera kazaljke od prve tačke. BREAKATPOINT traži `Zadaj tačku loma` i dijeli objekat na dva u toj tački (ne krug).

### LENGTHEN

Skraćenice: `LEN`. `Odaberi objekat za mjerenje [Razlika (DE)/Procenat (P)/Ukupno (T)/Dinamički (DY)]`: pick ispisuje `Trenutna dužina` (i obuhvaćeni ugao luka) i pita ponovo. `DE` traži `Unesi promjenu dužine (negativno skraćuje) [Ugao (A)]`, `P` `Unesi procenat dužine`, `T` `Zadaj ukupnu dužinu [Ugao (A)]`, `DY` prevlači. Zatim `Odaberi objekat za promjenu [Poništi (U)]`, ponavlja se: mijenja se kraj najbliži kliku. Linije, lukovi i otvorene polilinije.

### JOIN

Skraćenice: `J`. `Odaberi objekte za spajanje`. Linije, lukovi i otvorene polilinije koje se sastaju kraj do kraja postaju polilinije (zatvorene kad se lanac zatvori); linije na jednoj liniji postaju jedna linija; lukovi jednog kruga postaju jedan luk ili krug. Historija kaže koliko je objekata spojeno, a koliko nije.

### MATCHPROP

Skraćenice: `MA`, `PAINTER`. `Odaberi izvorni objekat`, zatim `Odaberi odredišne objekte [Postavke (SE)]` i {{key:Enter}}. Kopira sloj i boju, a između objekata iste vrste visinu i širinu teksta, veličine kota ili obrazac šrafure. `S` traži `Uključi ili isključi svojstvo [Boja (C)/Sloj (LA)/Tekst (T)/Kota (D)/Šrafura (H)]`, ponavlja se do {{key:Enter}}; izbor se pamti za sesiju.

### EXPLODE

Skraćenice: `X`. Polilinije postaju linije i lukovi, reference blokova postaju svoji objekti, kote postaju linije, strelice i tekst.

- `Odaberi objekte`

## Međuspremnik

CadCraft-ov vlastiti međuspremnik: radi unutar crteža, između crteža i između CadCraft kartica u ovom pregledaču. Vidi [Kopiraj, zalijepi i dupliraj](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ili {{ui:Kopiraj}} u grupi {{ui:Uređivanje}}. Kopira objekte u međuspremnik, s blokovima i slojevima koje koriste. Objekti ostaju odabrani.

- `Odaberi objekte za kopiranje` (preskače se kad su objekti već odabrani)

### CUTCLIP

{{key:Mod+X}}, ili {{ui:Izreži}} u meniju {{ui:Više}}. Kopira objekte u međuspremnik, zatim ih briše (jedan korak za {{ui:Poništi}}).

- `Odaberi objekte za rezanje` (preskače se kad su objekti već odabrani)

### COPYBASE

Kopira objekte u međuspremnik s osnovnom tačkom koju izabereš; lijepljenje postavlja tu tačku.

- `Zadaj osnovnu tačku`
- `Odaberi objekte za kopiranje`

### PASTECLIP

{{key:Mod+V}}, ili {{ui:Zalijepi}} u grupi {{ui:Uređivanje}}. Kopija prati kursor, visi od donjeg lijevog ugla svojih granica (ili od njenog centra, ili od tačke `COPYBASE`; vidi [Postavke CadCraft-a](topic:settings)).

- `Zadaj tačku umetanja`

Zalijepljeni objekti su odabrani. Blok koji crtež već ima pod istim nazivom zadržava definiciju ovog crteža.

Kad je područje kopirano u MarkupCraft-u novije od onoga što je CadCraft kopirao (i staro manje od 6 sati), {{key:Mod+V}} i `PASTECLIP` umjesto toga lijepe to područje: vidi `PASTEAREA`.

### PASTEAREA

Skraćenice: `PAREA`. {{ui:Zalijepi kopirano područje}} u meniju {{ui:Više}}. Lijepi područje kopirano s {{ui:Kopiraj područje}} u MarkupCraft-u kao sliku u stvarnoj veličini. Vidi [Slike u crtežu](topic:pictures).

- `Zadaj donji lijevi ugao kopiranog područja`
- `Skaliraj njegovu veličinu papira za (100 za list 1:100; Tačke: dvije tačke na njemu i njihova stvarna udaljenost) [Tačke (P)] <1>` (samo kad list nije imao razmjeru crteža): broj, {{key:Enter}} za veličinu papira, ili `P`, zatim `Prva tačka na zalijepljenom području`, `Druga tačka na zalijepljenom području` i njihova stvarna udaljenost.

### PASTEORIG

{{key:Mod+Shift+V}}, ili {{ui:Zalijepi na mjesto}} u meniju {{ui:Više}}. Lijepi na koordinatama s kojih su objekti kopirani. Ne pita ništa.

### DUPLICATE

Skraćenice: `DUP`. {{key:Mod+D}}, ili {{ui:Dupliraj i pomjeri}} u meniju {{ui:Više}}. Kopija objekata se pomjera s pokazivačem od mjesta gdje je; {{key:Esc}} ne ostavlja ništa. Ne koristi međuspremnik.

- `Odaberi objekte za dupliranje` (preskače se kad su objekti već odabrani)
- `Zadaj gdje ide kopija (Esc ne ostavlja ništa)`: klikni, upiši tačku, `@dx,dy` (od mjesta gdje je bio pokazivač), ili udaljenost prema kursoru.

### SELECT

Pita `Odaberi objekte` (sa svim opcijama ispod) i ostavlja izabrano odabranim, za sljedeću naredbu ili za kasnije `P`.

### QSELECT

Skraćenice: `QS`. U pregledaču, dijalog {{ui:Brzi odabir}} (vidi [Odaberi objekte](topic:select-objects#select-by-a-rule-quick-select)). Bez njega, komandna linija pita `Unesi tip objekta`, `Unesi svojstvo`, `Unesi operator [=/<>/>/</*/Odaberi sve] <=>` i `Unesi vrijednost`. Poklapanja postaju odabir.

### SELECTSIMILAR

Skraćenice: `SIM`. `Odaberi objekte [Postavke (SE)]` (ili tekući odabir): odabire svaki objekat istog tipa s istim slojem i bojom (i nazivom bloka, obrascem šrafure). `SE` traži `Uključi ili isključi svojstvo [Sloj (LA)/Boja (CO)/Naziv (NA)/Obrazac (PA)/Visina (HE)]`, ponavlja se do {{key:Enter}}.

### FIND

Nema skraćenica; ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Pronađi i zamijeni}}. U pregledaču, dijalog {{ui:Pronađi i zamijeni}} (vidi [Dodaj tekst i oznake](topic:text#find-and-replace-words)). Bez njega: `Unesi tekst za traženje`, zatim `Unesi tekst za zamjenu (Enter: odaberi ono što je pronađeno)`. Traži u tekstu, vrijednostima atributa i tekstu kota, na otvorenoj kartici ili u odabiru.

### SELECTALL i DESELECT

`SELECTALL` (skraćenica `AI_SELALL`, {{key:Mod+A}}) odabire svaki objekat koji možeš uređivati na otvorenoj kartici. `DESELECT` (skraćenice `AI_DESELECT`, `SELECTNONE`; ili {{key:Esc}}) briše odabir.

## Kote

### DIMLINEAR

Skraćenice: `DLI`, `DIMLIN`. Horizontalna ili vertikalna udaljenost.

- `Zadaj početak prve pomoćne linije [Odaberi objekat (S)]` (Enter ili `S`: `Odaberi objekat za kotiranje`, zatim klikni liniju, luk, krug ili segment polilinije)
- `Zadaj početak druge pomoćne linije`
- `Zadaj mjesto linije kote [Tekst/Horizontalno/Vertikalno/Rotirano]`. `T` traži tekst (`<>` je izmjerena vrijednost), `H` i `V` fiksiraju smjer, `R` traži `Zadaj ugao linije kote <0>`.

### DIMALIGNED

Skraćenice: `DAL`, `DIMALI`. Stvarna udaljenost između dvije tačke.

- Početci kao u {{cmd:DIMLINEAR}}, zatim `Zadaj mjesto linije kote [Tekst]`.

### DIMANGULAR

Skraćenice: `DAN`, `DIMANG`.

- `Odaberi luk, krug ili liniju, ili Enter za vrh`
- Luk: njegov ugao. Krug: `Zadaj drugu krajnju tačku ugla`. Linija: `Odaberi drugu liniju`. Enter: `Zadaj vrh ugla`, `Zadaj prvu krajnju tačku ugla`, `Zadaj drugu krajnju tačku ugla`.
- `Zadaj mjesto linije kote [Tekst]`: klikni unutar ugla koji mjeriš.

### DIMRADIUS i DIMDIAMETER

Skraćenice: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Odaberi luk ili krug`, zatim `Zadaj mjesto linije kote [Tekst]`.

### DIMCONTINUE

Skraćenice: `DCO`, `DIMCONT`. Nastavlja od posljednje linearne ili poravnate kote (ili pita `Odaberi linearnu ili poravnatu kotu`).

- `Zadaj drugi početak pomoćne linije [Poništi (U)]`, ponavlja se do Enter.

### DIMBASELINE

Skraćenice: `DBA`, `DIMBASE`. Kao {{cmd:DIMCONTINUE}}, ali svaka kota počinje od prvog početka i slaže se dalje van.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Nema skraćenica. Svaka pita `Unesi novu vrijednost za … <tekuća>` i postavlja tu veličinu za **nove** kote: ukupna razmjera, visina teksta, veličina strelice, decimalna mjesta (do 8), razmak oko teksta, produžetak preko linije kote, pomak od ishodišta. Vidi [Postavi veličine kota](topic:dimension-settings).

### DIMLUNIT

Postavka kote: samo format novih kota (1 naučni, 2 decimalni, 3 inženjerski, 4 arhitektonski, 5 razlomački).

### DIMSTYLE i -DIMSTYLE

Skraćenice: `DST`, `DDIM`, `D`. Upravljač stilovima kota: {{ui:Postavi trenutno}}, {{ui:Novi…}}, {{ui:Izmijeni…}}, {{ui:Preimenuj…}}, {{ui:Izbriši}}, {{ui:Uporedi…}}, {{ui:Primijeni na izabrano}}. `-DIMSTYLE` u komandnoj liniji: `Stil kote [Vrati (R)/Spasi (S)/Izbriši (D)/Primijeni (A)/Uporedi (C)/Preimenuj (N)/Spisak (L)]`. Vidi [Postavi veličine kota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT i DIMTEDIT

`DIMEDIT` (`DED`): `Uređivanje kote [Početak (H)/Novi (N)/Rotiraj (R)/Kosi (O)] <Početak (H)>`, zatim kote (ili one koje su već odabrane). Novi traži tekst (`<>` = mjerenje); Rotiraj za ugao (0 vraća tekst); Kosi za ugao pomoćnih linija od X ose (Enter = nijedan; samo linearne i poravnate kote). `DIMTEDIT` (`DIMTED`): `Tekst kote [Lijevo (L)/Desno (R)/Centar (C)/Početak (H)/Ugao (A)] <Centar (C)>`. Vidi [Postavi veličine kota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Skraćenice: `DTU`. `Jedinice u tekstu novih kota [Jedinice crteža (D)/mm/cm/m/km]`, ili, s odabranim kotama, `Jedinice u tekstu odabranih kota`. Zapisuje izmjerenu dužinu u toj jedinici, s jedinicom iza nje (DIMLFAC i DIMPOST sufiks); `D` vraća na jedinice crteža. Vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Skraćenice: `RC`. Ispisuje `Dužina luka: … Tip: …`, zatim `Zadaj prvu tačku [Dužina luka (A)/Objekat (O)/Pravougaono (R)/Poligonalno (P)/Slobodno (F)]`. Pravougaono traži `Zadaj suprotni ugao`; Poligonalno `Zadaj sljedeću tačku (Enter zatvara oblak) [Poništi (U)]`; Slobodno prati pokazivač dok ne klikneš ili {{key:Enter}}; `O` traži `Odaberi objekat` i `Obrnuti smjer? [Da (Y)/Ne (N)] <N>` i pretvara objekat u oblak. `A` traži `Zadaj dužinu svakog luka`. `R`, `P` i `F` biraju tip za sljedeći oblak. Rezultat je zatvorena polilinija od lukova.

### MLEADER

Skraćenice: `MLD`; ili {{ui:Vodilica}}. `Zadaj mjesto strelice vodilice [Veličina strelice/Razmak slijetanja]`, `Zadaj mjesto slijetanja vodilice`, zatim tekst u okviru na mjestu (ili, bez njega, `Unesi tekst (prazan red završava)`). Snima se kao pravi višestruki vodič u DWG; DXF zadržava linije, strelicu i tekst koje crta.

## Parametarski

Vidi [Ograniči crtež](topic:constraints) i [Koristi parametre i jednačine](topic:parameters). Ograničenja rade na kartici {{ui:Model}}.

### GEOMCONSTRAINT i GC naredbe

Skraćenica `GCON`: `Unesi tip ograničenja [Horizontalno/Vertikalno/Normalno (P)/Paralelno (PA)/Tangenta (T)/Podudarno (CO)/Koncentrično (CON)/Kolinearno (COL)/Simetrično (S)/Jednako (E)/Fiksiraj (F)] <Horizontalno>`, zatim upiti te naredbe.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Odaberi objekat [2 tačke (2P)] <2 tačke (2P)>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Odaberi prvi objekat`, `Odaberi drugi objekat` (drugi se pomjera).
- {{cmd:GCCOINCIDENT}}: `Odaberi prvu tačku [Objekat/Automatski] <Objekat>`, `Odaberi drugu tačku [Objekat] <Objekat>`.
- {{cmd:GCFIX}}: `Odaberi tačku [Objekat] <Objekat>`.
- {{cmd:GCSYMMETRIC}}: `Odaberi prvi objekat [2 tačke (2P)] <2 tačke (2P)>`, `Odaberi drugi objekat`, `Odaberi liniju simetrije`.

### DIMCONSTRAINT i DC naredbe

Skraćenica `DCON`: `Odaberi dimenziju za pretvaranje [Linearno (LI)/Horizontalno (H)/Vertikalno (V)/Poravnato (AL)/Ugaono (AN)/Radijalno (R)/Prečnik (D)/Pretvori (C)] <Poravnato (AL)>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Zadaj prvu tačku ograničenja [Objekat] <Objekat>`, `Zadaj drugu tačku ograničenja`, `Zadaj mjesto linije kote`, `Tekst kote <d1=40>` (broj, izraz, ili `naziv=izraz`).
- {{cmd:DCALIGNED}}: kao gore, s `[Objekat/Tačka i linija/2 linije]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Odaberi luk ili krug`. {{cmd:DCANGULAR}}: `Odaberi prvu liniju ili luk`, `Odaberi drugu liniju`.
- {{cmd:DCCONVERT}}: `Odaberi kote za pretvaranje`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Odaberi objekte [Postavke (S)]`. `S` traži tolerancije udaljenosti i ugla.
- {{cmd:DELCONSTRAINT}} (skraćenica `DELCON`): `Odaberi objekte`; njihova ograničenja odlaze.
- {{cmd:CONSTRAINTBAR}} (skraćenica `CBAR`): `Odaberi objekte [Prikaži sve/Sakrij sve]`, zatim `[Prikaži/Sakrij]`.
- {{cmd:DCDISPLAY}}: `Unesi opciju [Prikaži/Sakrij]`.

### PARAMETERS i -PARAMETERS

{{cmd:PARAMETERS}} (skraćenice `PAR`, `PARAM`) otvara panel {{ui:Parametri}}. `-PARAMETERS`: `Unesi opciju [Novi (N)/Uredi (E)/Preimenuj (R)/Izbriši (D)/?] <?>`.

### SWBOUT

Skraćenica `SWMACRO`. Preuzima makro (.swb) koji u SolidWorks-u gradi model kao jednu ograničenu skicu. Vidi [Premještanje skica u druge programe za modeliranje dijelova i iz njih](topic:solidworks-sketches).

## Blokovi

### ANNOSCALE

Skraćenice: `CANNOSCALE`. Kaže razmjeru anotacija crteža i koliko anotativnih objekata sadrži, zatim pita `Nova razmjera anotacija`: upiši `1:50`, `1:100`, `2:1`, goli broj (`50` je 1:50) ili naziv jedne od razmjera crteža. Svaki anotativni tekst i kota se mijenjaju tako da se štampaju u istoj veličini na novoj razmjeri, u jednom koraku za {{ui:Poništi}}; objekti koji nisu anotativni ostaju netaknuti. Vidi [Jedinice, papiri i razmjere](topic:units-papers-scales#annotate-by-scale).

### SCALELISTEDIT

Skraćenice: `SCALELIST`. `Spisak razmjera [Dodaj (A)/Uredi (E)/Izbriši (D)/Spisak (L)/Resetuj (R)]` do {{key:Enter}}. Dodaj: `Naziv razmjere`, `Jedinice papira`, `Jedinice crteža`. Uredi i Izbriši traže naziv razmjere. Razmjere crteža pridružuju se spiskovima razmjera prozora prikaza i štampe i čuvaju se s crtežom. Vidi [Jedinice, papiri i razmjere](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT i PEDIT

`SPLINE` (`SPL`): `Prva tačka splajna [Metoda (M)/Objekat (O)] (Tačke prilagođavanja)`. Prilagođavanje: tačke kroz koje kriva prolazi; `Zatvori`, `Poništi`, zatim `Početna tangenta` i `Krajnja tangenta` (tačka, ili {{key:Enter}}). Metoda › Kontrolna temena traži stepen (1 do 5) i crta iz kontrolnog poligona. Objekat pretvara polilinije u splajnove kroz njihova temena. `SPLINEDIT` (`SPE`): `[Podaci prilagođavanja/Uredi teme/pretvori u polilinija (P)/Otvori ili zatvori (O)/Obrni/Poništi (U)/Izlaz (X)]`; Podaci prilagođavanja `[Dodaj/Obriši/Pomjeri/Očisti/Tangente/Izlaz (X)]`; Uredi teme `[Dodaj kontrolnu tačku/Pomjeri/Težina/Izlaz (X)]`. `PEDIT` (`PE`): `[Zatvori/Otvori/Spoji/Širina/Prilagodi/Splajn/Ukloni krivinu/Generiši vrstu linije/Obrni/Poništi (U)/Izlaz (X)]`, `M` za više objekata; linije, lukovi i splajnovi se prvo nude kao polilinije. Vidi [Splajnovi i polilinije](topic:splines).

### BLOCK

Skraćenice: `B`, `BMAKE`.

- `Unesi naziv bloka`. Ako postoji: `Blok "…" već postoji. Redefinisati ga? [Da (Y)/Ne (N)] <N>`.
- `Zadaj osnovnu tačku umetanja`
- `Odaberi objekte`. Zamjenjuju se jednom referencom na novi blok.

### WBLOCK

Skraćenice: `W`, `-WBLOCK`. Upisuje blok, neke objekte ili cijeli crtež kao novu DWG ili DXF datoteku. `Izvor WBLOCK [Blok/Cijeli crtež (E)/Objekti] <Objekti>`:

- **Objekti**: `Zadaj osnovnu tačku umetanja` (postaje ishodište novog crteža), `Odaberi objekte`, zatim `Format datoteke [DWG/DXF/R12 DXF]` i `Naziv datoteke za novi crtež`, zatim `Šta uraditi s objektima [Zadrži (R)/Pretvori u blok (C)/Obriši (D)]`. Pretvori zamjenjuje ih jednom referencom na blok s nazivom datoteke; Obriši ih uklanja.
- **Blok**: `Blok za upisivanje`. Vlastiti objekti bloka, s njegovom osnovnom tačkom kao ishodištem, uključujući ugniježđene blokove.
- **Cijeli crtež**: svaki objekat u prostoru modela. Listovi se ne upisuju; koristi {{cmd:SAVEAS}} za kopiju koja ih zadržava.

Nova datoteka sadrži samo slojeve, vrste linija, stilove teksta i kota i blokove koje njeni objekti koriste, te jedinice crteža. Verzija DWG-a je ona koju je {{cmd:SAVEAS}} posljednji put koristio. U pregledaču se datoteka preuzima; u Studiju se otvara dijalog za snimanje.

### ATTDEF

Skraćenice: `ATT`, `DDATTDEF`, `-ATTDEF`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Definiši atribut}}. Ispisuje režime, zatim `Unesi opciju za promjenu (Enter kad završiš) [Nevidljivo (I)/Konstantno (C)/Unaprijed (P)]`, `Unesi naziv oznake atributa`, `Unesi upit za atribut`, `Unesi podrazumijevanu vrijednost atributa` (`Unesi vrijednost atributa` kad je konstantan), `Zadaj početnu tačku teksta`, `Zadaj visinu teksta`, `Zadaj ugao rotacije teksta`. {{cmd:BLOCK}} uzima definicije atributa u blok.

### EATTEDIT i ATTEDIT

`EATTEDIT` (`DDATTE`, ili dvostruki klik na referencu s atributima; {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi atribute}}): `Odaberi referencu bloka s atributima`, zatim dijalog {{ui:Uredi atribute}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): ista referenca, zatim `<upit> (<OZNAKA>) <vrijednost>` za svaki atribut; {{key:Enter}} zadržava vrijednost. Vidi [Atributi](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Ažuriraj atribute referenci kojeg bloka [Naziv (N)/Odaberi (S)/Svi (A)] <Odaberi>`. Vrijednosti se zadržavaju; novi atributi dobijaju svoju podrazumijevanu vrijednost, uklonjeni odlaze, a položaji se resetuju.

### BATTMAN

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Upravljač atributima}}. Dijalog: blok, atributi (oznaka, upit, podrazumijevano, režimi, redoslijed), {{ui:Ažuriraj reference (vrijednosti zadržane)}}, {{ui:Primijeni}}.

### REFEDIT i REFCLOSE

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi na mjestu}}. `REFEDIT`: `Odaberi referencu bloka za uređivanje na mjestu` (ili odabir). `REFCLOSE`: `Snimi promjene za "…" [Spasi/Odbaci] <Spasi>`; trake {{ui:Spasi blok}} i {{ui:Odbaci}} rade isto. Cijela izmjena je jedan korak za {{ui:Poništi}}. Vidi [Atributi](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT i BCLOSE

`BE`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi blok}}. `Unesi naziv bloka za uređivanje <blok odabrane reference>` otvara uređivač blokova. `BCLOSE` pita `Zatvori uređivač blokova na "…" [Spasi/Odbaci] <Spasi>`; traka {{ui:Snimi blok}} i {{ui:Odbaci promjene}} rade isto. Sve urađeno u uređivaču je jedan korak za {{ui:Poništi}}.

### VIEWBASE

Skraćenice: `FLATSHOT`. Ravan 2D pogled na tijela na 3D kartici: `Pogled [Sprijeda (F)/Odozgo (T)/Desno (R)/Lijevo/Pozadi (BA)/Odozdo (BO)/Izometrija]`, `Skrivene linije [Prikaži/Sakrij]`, razmjera (`1:20`, `2:1`; {{key:Enter}} uzima onu koja stane na list), zatim središte pogleda. Jedna referenca bloka, vidljive ivice na VIEW-VISIBLE, skrivene crtkane na VIEW-HIDDEN. Vidi [Ravni pogledi na listu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Skraćenice: `-PUBLISH`; ili {{ui:Svi listovi u jednom PDF-u}} u dijalogu {{ui:Štampaj u PDF}}. `Listovi za štampanje [Svi (A)/Neki (S)]`: {{key:Enter}} štampa svaki list, `S` traži nazive odvojene zarezima. Jedan PDF, stranica i oznaka za svaki list. Vidi [Svi listovi u jednom PDF-u](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Skraćenice: `SSM`, `SHEETSETMANAGER`. Vodi te do odjeljka {{ui:Set listova}} lijevog panela: listovi iz više crteža, numerisani i naslovljeni, njihovi naslovni blokovi popunjeni iz seta, objavljeni kao jedan PDF. Vidi [Setovi listova](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): izaberi DWG ili DXF, zatim njegovu tačku umetanja. {{cmd:XREF}} (`XR`, `-XREF`): `Povezani crteži [?/Prikači (A)/Ponovo učitaj (R)/Veži (B)/Odvoji (D)] (Enter: ?)`; s više veza, izaberi jednu od njihovih referenci ili upiši `N` i njen naziv. Vidi [Povezani crteži](topic:files#linked-drawings-external-references).

### COUNT

Skraćenice: `BCOUNT`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Prebroj blokove}}. `Odaberi referencu bloka za brojanje, ili [Svi (A)/Izvoz (E)] (Enter: Svi)`: klik odabire i broji svaku referencu tog bloka u ovom prostoru; {{key:Enter}} ili `A` navodi sve; `E` zatim `C` (broji) ili `A` (atributi) preuzima CSV. Vidi [Prebroj blokove i izvezi specifikaciju](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Skraćenice: `I`, `DDINSERT`.

- `Unesi naziv bloka ili [Datoteka (F)/Biblioteka (L)] <posljednji blok>` (velika i mala slova nisu bitna). `F` traži DWG ili DXF, zatim cijeli crtež ili jedan od njegovih blokova; naziv koji je već u upotrebi traži {{ui:Zadrži postojeće}} ili {{ui:Preimenuj}}. `L` otvara panel biblioteke.
- `Zadaj tačku umetanja [Razmjera (S)/Rotiraj (R)]`. `S` traži `Zadaj faktor razmjere`, `R` traži `Zadaj ugao rotacije`; oba se pamte.
- Zatim `Unesi <upit> (<OZNAKA>) <podrazumijevano>` za svaki atribut koji blok traži. Vidi [Atributi bloka](topic:attributes).

### LIBRARY

Skraćenice: `LIB`. Otvara panel biblioteke: stavlja stavke, provjerava ažuriranja, zasluge biblioteke. Bez pitanja. Vidi [Umetni iz datoteke ili biblioteke](topic:insert-from-file-and-library).

### STEELMEMBER

Skraćenice: `SMEMBER`; ili {{ui:3D element}} na kartici {{ui:Standardni}} biblioteke. `Veličina profila <W12x26>` (kako je kartica navodi), zatim `Početna tačka [Stub (C)]` i `Krajnja tačka`: čvrsti element na 3D kartici između dvije tačke, koji stoji na zemlji. `C` traži osnovnu tačku stuba i njegovu visinu. Jedan korak za {{ui:Poništi}}. Vidi [Postavi čelične profile i standardne dijelove](topic:steel-and-standard-parts).

### PARTSLIST

Skraćenice: `PLIST`. `Gornji lijevi ugao spiska dijelova`, zatim `Visina teksta <2.5>`: crta tabelu svakog standardnog dijela i čeličnog profila postavljenog iz biblioteke (brojevi stavki, količina, dio, standard, veličina, dužina, materijal, masa). Jedan korak za {{ui:Poništi}}. Vidi [Postavi čelične profile i standardne dijelove](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Skraćenice: `PU`. Uklanja definicije blokova koje ništa ne koristi. Bez pitanja.

### DELBLOCKS

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Obriši blokove}}. `Odaberi blok za brisanje [Naziv/Izlaz (X)]`: klikni referencu bloka, ili `N` za spisak blokova s filterom (izaberi više), ili `X` / {{key:Enter}} za kraj. Svaka referenca odlazi — u modelu, na svakom listu i unutar drugih blokova — zatim definicija, a komandna linija kaže šta je obrisano, a šta nije. Neimenovani blokovi i povezani crteži se ne nude. Upit se vraća za sljedeći blok; cijela naredba je jedan korak za {{ui:Poništi}}.

## Listovi i štampanje

### LAYOUT

Skraćenice: `LO`, `NEWLAYOUT`; ili dugme {{ui:+}} ispod crteža. Novi list s okvirom, naslovnim blokom i jednim prozorom prikaza, na ISO A3 (ili Tabloid za crteže u inčima ili stopama). Bez pitanja.

### MVIEW

Skraćenice: `MV`. Samo na listu ({{cmd:VPORTS}} na listu radi isto).

- `Zadaj ugao prozora prikaza`, `Zadaj suprotni ugao`. Prozor prikaza prikazuje cijeli model u standardnoj razmjeri.

### VPORTS

Skraćenice: `VIEWPORTS`. {{cmd:SPLIT}} je isto i s lista, a {{ui:Pogled}} › {{ui:Više}} › {{ui:Podijeli jedno pored drugog}}, {{ui:Podijeli jedno iznad drugog}}, {{ui:Četiri okna}}, {{ui:Jedno okno}} to pokreću. Na modelu: `Unesi broj okana [Jedno (SI)/2/3/4] <3>`; `2` traži `[Horizontalno/Vertikalno] <Vertikalno>` (Vertikalno = jedno pored drugog), `3` traži `[Lijevo/Desno] <Desno>` (gdje ide veliko okno). Svako okno zadržava svoj pogled i prostor; klik čini okno aktivnim. Na listu je to {{cmd:MVIEW}}. Vidi [Podijeli ekran](topic:split-screen).

### VPVIEW

Nema skraćenica. Samo na listu.

- `Odaberi prozor prikaza` (preskače se ako je jedan odabran), zatim na modelu: `Zadaj prvi ugao prozora za prikaz`, `Zadaj suprotni ugao`.

### UCS

Nema skraćenica. Koordinatni sistem po mjeri; nije izmjena. `Zadaj ishodište UCS-a [Imenovano (NA)/Objekat (OB)/Prethodni/Svijet (W)/Z/3 tačke (3)] <Svijet (W)>`: tačka je novo ishodište, zatim `Zadaj tačku na X osi (Enter zadržava ugao)`. `Z`: `Zadaj ugao rotacije oko Z ose <90>`. `3`: ishodište, tačka na pozitivnoj X osi, tačka na pozitivnoj Y strani. `OB`: `Odaberi objekat za poravnanje UCS-a`. `NA`: `[Vrati/Spasi/Izbriši/?]` i naziv. Pogled se okreće tako da nova X osa bude ravna. Vidi [Okreni pogled i koristi vlastite koordinate](topic:ucs-and-turned-view).

### PLAN

Nema skraćenica. `Unesi opciju [Tekući ucs/Ucs/Svijet] <Tekući ucs>`: okreće pogled aktivnog okna tako da X osa UCS-a (ili svijeta) bude ravna. Ništa u crtežu se ne pomjera.

### TURNLEFT, TURNRIGHT, TURNWORLD

Nema skraćenica; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Okreni pogled 90° ulijevo}}, {{ui:Okreni pogled 90° udesno}}, {{ui:Nazad na svijet}}. Isto kao `UCS Z -90`, `UCS Z 90` i `UCS W`, s pogledom koji slijedi.

### VPLAYER

Nema skraćenica. Na listu ili unutar prozora prikaza. `Unesi opciju [?/Zamrzni (F)/Odmrzni (T)/Resetuj (R)/Vpvisdflt]`: `F`, `T`, `R` traže nazive slojeva (zarezi, `*` i `?` zamjenski znakovi), zatim `[Svi/Odabrani/Tekući] <Tekući>` prozore prikaza; Resetuj vraća svaki sloj na njegovu zadanu vrijednost „zamrznut u novim prozorima”; `V` postavlja tu zadanu vrijednost (`[Zamrznuto/Odmrznuto]`), koju koristi {{cmd:MVIEW}}. `?` navodi slojeve zamrznute u tekućem prozoru prikaza. Kolona prozora prikaza u panelu Slojevi radi isto za jedan prozor. Vidi [Zamrzni sloj u jednom prozoru prikaza](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Skraćenice: `MS`; ili dvostruki klik unutar prozora prikaza. Samo na listu. Radi na modelu kroz prozor prikaza: onaj odabrani, jedini na listu, ili `Klikni unutar prozora prikaza za rad u njemu`. Pomjeranje i zum unutra mijenjaju pogled prozora (prozor sa zaključanim prikazom to zadržava, a list se pomjera); novi pogled se upisuje kao jedan korak za {{ui:Poništi}}. Vidi [Radi na modelu kroz prozor prikaza](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Skraćenice: `PS`; ili dvostruki klik izvan prozora prikaza, ili klik na karticu ispod crteža. Vraća na list.

### PLOT

Skraćenice: `PRINT`, `PUBLISH`, `EXPORTPDF`; ili {{key:Mod+P}}. Otvara dijalog {{ui:Štampaj u PDF}}. Vidi [Štampanje u PDF](topic:plot-pdf).

### PLOTSTYLES

Skraćenice: `STYLESMANAGER`, `PSTABLES`; ili {{ui:Uredi tabele…}} u dijalogu {{ui:Štampaj u PDF}}. Otvara {{ui:Tabele stilova štampe}}: kako se svaka boja štampa (boja, siva, tinta, debljina linije), čuva se s crtežom. Vidi [Tabele stilova štampe](topic:plot-pdf#plot-style-tables).

## Upiti

### CAL

Ispisuje vrijednost proračuna, kako bi bila pročitana bilo gdje gdje se upisuje dužina.

- `Izraz`: upiši ga, na primjer `12'6"+3/4"` ili `(24'-0")/3`, i pritisni {{key:Enter}}. CadCraft ispisuje `= 12'-6 3/4"   (150.75 jedinica crteža)`. Vidi [Računanje u upisanoj vrijednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Skraćenice: `DI`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Izmjeri razmak}}.

- `Zadaj prvu tačku`, `Zadaj drugu tačku`. Ispisuje udaljenost, ugao, Delta X i Delta Y.

### AREA

Skraćenice: `AA`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Površina}}. Ispisuje površinu i obim.

- `Zadaj prvi ugao [Objekat/Dodaj površinu (A)/Oduzmi površinu (S)] <Objekat>`
  - Klikni ili upiši uglove; na `Zadaj sljedeću tačku (Enter zatvara) [Poništi (U)]` pritisni {{key:Enter}} da zatvoriš obris. `U` vraća posljednji ugao.
  - {{key:Enter}} ili `O`, zatim `Odaberi objekat`: krug (ispisuje njegov obim), elipsa, polilinija (otvorena se zatvara pravom linijom za površinu, a njena dužina se ispisuje) ili šrafura (rupe se oduzimaju).
  - `A` (Dodaj površinu) i `S` (Oduzmi površinu) čuvaju tekući zbir: upit počinje s `(režim DODAJ)` ili `(režim ODUZMI)`, svaka površina se dodaje ili oduzima, i `Ukupna površina = …` se ispisuje poslije svake. U ovim režimima `O` bira objekte do {{key:Enter}}, a {{key:Enter}} na prvom upitu završava naredbu.

### MEASUREGEOM

Skraćenice: `MEA`. `Unesi opciju [Udaljenost (D)/Poluprečnik (R)/Ugao (A)/Površina (AR)] <Udaljenost>`; nakon svakog mjerenja pita ponovo, a podrazumijevano je `Izlaz (X)`.

- `D`: dvije tačke, kao {{cmd:DIST}}.
- `R`: `Odaberi luk ili krug`; ispisuje poluprečnik i prečnik.
- `A`: luk (njegov obuhvaćeni ugao), linija pa druga linija (ugao između njih, prema njihovim dalekim krajevima), ili {{key:Enter}} i tri tačke (vrh, zatim dva kraja).
- `AR`: kao {{cmd:AREA}}, jedna površina.

### ID

Nema skraćenica. `Zadaj tačku`; ispisuje njene X i Y.

### LIST

Skraćenice: `LI`, `LS`. `Odaberi objekte`; ispisuje tip svakog objekta, sloj i glavna mjerenja.

## Pogled, datoteka i ostalo

### ZOOM

Skraćenice: `Z`.

- `Zadaj ugao prozora, unesi faktor razmjere (nX) [Obuhvat (E)/Sve (A)/Prozor (W)/Prethodni (P)/Razmjera (S)/Centar (C)]`. Klikni dva ugla za prozor. `E`, `A` ili Enter: cijeli crtež.
- `P` (Prethodni, ili {{ui:Prethodni}} na traci alata) vraća na prethodni pogled, do 10 pogleda po kartici; niz koraka točkića ili jedno pomjeranje broji se kao jedan pogled.
- Broj kao `2`, `2x` ili `0.5x` (ili `S` pa broj) zumira unutra ili van za taj faktor oko sredine ekrana.
- `C` traži `Zadaj tačku centra` i `Unesi visinu ili uvećanje (nX)`.

### PDFATTACH, PDFIMPORT i PDF naredbe

Skraćenice: `PDFATT` za {{cmd:PDFATTACH}}, `PDFIM` za {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} stavlja stranicu PDF-a kao podlogu ispod crteža (datoteka, stranica, tačka umetanja, razmjera, rotacija); {{cmd:PDFIMPORT}} pretvara linije, krive, ispune i tekst stranice u objekte crteža na slojevima nazvanim po PDF-u, u stvarnoj veličini, u upisanoj razmjeri, ili skaliranim iz dvije tačke i stvarne udaljenosti. {{cmd:PDFCLIP}} isijeca podlogu, {{cmd:PDFADJUST}} postavlja izbljeđivanje, kontrast, monohromatski prikaz ili je isključuje, {{cmd:PDFLAYERS}} uključuje i isključuje slojeve PDF-a, a {{cmd:PDF}} ponovo daje CadCraft-u datoteke koje podloge crteža koriste. Vidi [PDF podloge](topic:pdf-underlay).

### AUTOCOMPLETE

Skraćenice: `AUTOC`. Automatsko dovršavanje crteža: kad nijedna naredba nije aktivna, siva sjenka pokazuje šta obrasci tvog crteža kažu da slijedi. {{cmd:AUTOCOMPLETE}} ga uključuje (`Uključi`) ili isključuje (`Isključi`) (također Postavke › CadCraft) ili (`Prikaži`) prikazuje šta bi predložio sada. **Tab** crta sjenku kao jedan korak za {{ui:Poništi}}, **Esc** je odbacuje dok se crtež ne promijeni. Pronalazi tri stvari u najnovijim objektima: sljedeću kopiju nečega nacrtanog dva puta ili češće na jednakom koraku (stubovi, ukućani, stepenik: visine i gazovi), sljedeće korake stepeništa u polilniji, i nedostajuću stranu prostorije ili lanca zidova. Usred {{cmd:LINE}} ili {{cmd:PLINE}} sjenka je **sljedeća tačka**: sljedeći korak stepenika (visina, gaz, visina…), četvrti ugao pravougaonika, tačka koja ga zatvara, ili još jedan jednak korak. Približi kursor i pritisni **Tab**, kao da si kliknuo tamo; nastavi ili pritisni Enter. Računa se na ovom računaru pravilima, bez modela.

### AUTOSHEET

Skraćenice: `ASH`. Listovi koji se sami raspoređuju. {{cmd:AUTOSHEET}} uzima dijelove crteža (tvoje imenovane poglede, ili zasebne dijelove modela, ili cijeli model), bira veličinu papira (ili onu koju daš), daje svakom dijelu standardnu razmjeru (jednu za sve, ili najveću koju svaki može da primi) i raspoređuje poglede u redovima na novim listovima s naslovnim blokom i natpisom (naziv i razmjera) ispod svakog. Što ne stane na jedan list dobija svoj list. Jedan korak za {{ui:Poništi}}. Računa se na ovom računaru pravilima, bez modela.

### PHOTOSKETCH

Skraćenice: `PSK`. Skica fotografije u crtež. Izaberi fotografiju (JPEG, PNG ili TIFF) ručne skice na listu papira. {{cmd:PHOTOSKETCH}} nalazi četiri ugla lista, ispravlja perspektivu, uzima veličinu papira koju imenuješ (`Paper`, ili najbližu standardnu) i `Scale` skice (1 : n), zatim prati linije olovke u linije, lukove i krugove, s slojem za svaku boju olovke (crna, crvena, plava, zelena). Ako ne može naći ivicu papira, uzima cijelu fotografiju kao list i to kaže. Natpisi se ostavljaju. Jedan korak za {{ui:Poništi}}. Radi na ovom računaru klasičnom obradom slika, bez modela; ništa se nigdje ne šalje. Vidi i naredbe za skenirane crteže.

### AUTODIM

Skraćenice: `ADIM`. Automatsko kotiranje po pravilima. {{cmd:AUTODIM}} kotira odabrane objekte (ili cijeli crtež) iz njihovih nivoa i vertikalnih ivica: lanac kota duž stranica koje izabereš (`Sides`), jedna ukupna kota izvan njega, širina svakog otvora (razmak između kolinearnih linija zida), prečnik za svaku veličinu rupe, i uz `Grid` razmak između linija mreže. Kota koja već postoji ne pravi se ponovo. Jedan korak za {{ui:Poništi}}. Računa se na ovom računaru pravilima, bez modela.

### GRIDMOVE

Skraćenice: `GM`. Pomjeranje linije mreže nosi skup. {{cmd:GRIDMOVE}} pomjera liniju mreže (liniju na sloju čiji naziv kaže grid ili axis) i ono što na njoj visi: zidovi s krajem na liniji se rastežu da je slijede, zidovi duž nje se pomjeraju cijeli, stubovi (reference blokova i krugovi na liniji), njen mjehur i oznaka se pomjeraju, a kote čije tačke leže na njoj mjere novi razmak. Daj dvije tačke (računa se samo dio preko linije) ili `Distance`. Jedan korak za {{ui:Poništi}} vraća sve. Radi po pravilima na ovom računaru.

### DETAILS

Skraćenice: `DET`. Detalji koji te pronalaze. {{cmd:DETAILS}} čuva detalje tvoje firme: `Add` stavlja blok ovog crteža na spisak, `List` i `Remove` ga upravljaju, a `Find` ih rangira za ono što je odabrano (ili za ono što si posljednje nacrtao) prema riječima na njegovim slojevima, nazivima blokova, obrascima šrafure i napomenama, u odnosu na naziv i napomene svakog detalja; tako prozor glave pronalazi tvoj detalj za oblaganje parapeta. Izaberi broj i tačku da ga postaviš. S uključenim `Hint` (također Postavke › CadCraft), odabir nečega što odgovara detalju stavlja jednu liniju u statusnu traku. Spisak se čuva u ovom pregledaču, na ovom računaru, i taj spisak se pretražuje. `Share` ga stavlja i u tvoju fasciklu Dokumenti (`.cadcraft/firm-details.json`, s crtežom svakog bloka): `Pull` dodaje što tvoj tim ima a ti nemaš, `Push` dodaje što ti imaš a oni nemaju, `Both` radi oboje, i ništa se nikad ne uklanja s bilo koje strane. Prvo otvori fasciklu Dokumenti ({{cmd:DOCUMENTS}}); kad je ta fascikla fascikla Team Cloud Plan-a, cijeli tim dijeli jedan spisak. Stavka detalja u panelu Biblioteka ima dugme **Dodaj u detalje moje firme** koje je stavlja na isti spisak. Radi na ovom računaru riječima, bez modela.

### SKETCHFIX

Skraćenice: `SKF`. Olovkine skice postaju precizna geometrija. Pritisni i prevuci jedan slobodan potez odjednom (olovka, miš ili prst), zatim Enter. Svaki potez se čita kao linija, krug, luk, pravougaonik ili polilinija: skoro vodoravne i uspravne linije postaju tačno vodoravne i uspravne, zatvoren okrugao potez postaje krug, zatvoren potez s četiri pravena ugla pravougaonik, a krajevi poteza se povlače zajedno i na krajeve koji već postoje u crtežu. Jedan korak za {{ui:Poništi}}. Računa se na ovom računaru pravilima, bez modela.

### SCANATTACH i naredbe skeniranog crteža

Skraćenice: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nema. Rade na slici, jedan korak za {{ui:Poništi}} svaka. {{cmd:SCANATTACH}} umeće PNG, JPEG, TIFF (jednu ili sve stranice) ili PDF stranicu koja je slika. {{cmd:SCANSCALE}} skalira list iz dvije izabrane tačke i stvarne udaljenosti. {{cmd:SCANALIGN}} pomjera i okreće ga na dvije tačke (`Scale the sheet to fit` Da/Ne). {{cmd:SCANDESKEW}} prikazuje ugao dugih linija lista i okreće list kad daš `Accept` ili `Value`. {{cmd:SCANCLEAN}} ga pretvara u crno-bijelo (`Threshold` Auto/Adaptive/Level, `Specks`) i `Run`. {{cmd:SCANCROP}} zadržava prozor. {{cmd:SCANERASE}} briše `Rectangle`, `Polygon` ili `Lasso`. {{cmd:SCANTRACE}} prati linije i lukove na novi sloj (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) i javlja šta je našao i šta je ostavio kao raster. {{cmd:SCANINFO}} navodi originalnu datoteku i korake. {{cmd:RASTERSNAP}} uključuje ili isključuje hvatanje za linije skeniranih listova (On ili Off). Vidi temu Skenirani crteži i praćenje.

### REGEN i REGENALL

Skraćenice: `RE` za {{cmd:REGEN}}, `REA` za {{cmd:REGENALL}}. Ponovo gradi ono što je nacrtano na ekranu iz crteža: {{cmd:REGEN}} karticu koju gledaš (na listu, i model koji njegovi prozori prikazuju), {{cmd:REGENALL}} svaku karticu, svaki panel podijeljenog ekrana i svaki otvoreni crtež. Koristi ih kad slika izgleda zastarjelo poslije skriptirane ili vrlo velike promjene, ili kad je pomoćnik uređivao crtež; sam crtež se ne dira, pa nema šta poništiti.

### NAMEDVIEW

Skraćenice: `NV`, `VIEWS`. `Unesi opciju [?/Vrati (R)/Spasi (S)/Prozor (W)/Izbriši (D)] <Vrati (R)>`, zatim naziv pogleda. `S` snima pogled na ekranu, `W` prozor koji izabereš, `R` prikazuje snimljeni pogled, `D` briše jedan, `?` navodi poglede ove kartice. Snimanje pod postojećim nazivom ga zamjenjuje; svaka promjena je jedan korak za {{ui:Poništi}}. Pogledi pripadaju kartici na kojoj su snimljeni. DWG i DXF datoteke ih čuvaju (tabela VIEW); pogledi listova se vraćaju na prvi list, jer datoteka ne kaže kojem pripadaju.

### UNDO i REDO

Skraćenice: `U` za {{cmd:UNDO}}; {{cmd:REDO}} nema. Također {{key:Mod+Z}} i {{key:Mod+Y}}.

### LAYER

Skraćenice: `LA`. Skače na panel {{ui:Slojevi}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Unesi vrstu linije za nove objekte` — `ByLayer` (po sloju), `ByBlock` (po bloku) ili naziv (`?` ih navodi: Continuous, crteža vlastite, i DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE, s njihovim veličinama `2` (polovina) i `X2` (dvostruko)). {{cmd:LWEIGHT}} (`LW`): debljina linije za nove objekte u mm, ili `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): razmjera vrsta linija crteža (može se poništiti). {{cmd:LWDISPLAY}} (`LWT`): `Prikaži debljine linija [ON/OFF]` — isto što i dugme {{ui:LWT}} u statusnoj traci. Vidi [Debljine linija i vrste linija](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Unesi tip objekta za preimenovanje [Sloj (LA)/Blok]`, `Unesi stari naziv`, zatim novi naziv; objekti ili reference slijede. {{cmd:LAYMRG}}: `Odaberi objekat na sloju za spajanje ili [Naziv]` dok {{key:Enter}}, zatim `Odaberi objekat na ciljnom sloju ili [Naziv]` i `Y`. {{cmd:LAYDEL}}: `Odaberi objekat na sloju za brisanje ili [Naziv]`, zatim `Y`: sloj i svaki objekat na njemu odlaze (ne sloj 0, DEFPOINTS ni tekući sloj). Jedan korak za {{ui:Poništi}} svaki. Vidi [Organizuj crtež pomoću slojeva](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Slojevi biranjem objekata; također u meniju {{ui:Alati}} panela {{ui:Slojevi}}. {{cmd:LAYISO}}: `Odaberi objekte na sloju(evima) koji se izoluju`, zatim {{key:Enter}}: svi ostali slojevi se isključuju. {{cmd:LAYUNISO}} ih ponovo uključuje. {{cmd:LAYOFF}} i {{cmd:LAYFRZ}}: `Odaberi objekat na sloju koji se isključuje` (ili zamrzava), uvijek iznova; `U` vraća posljednji, {{key:Enter}} završava. {{cmd:LAYMCUR}}: `Odaberi objekat čiji sloj postaje tekući`. {{cmd:LAYON}} uključuje svaki sloj, {{cmd:LAYTHW}} odmrzava svaki sloj. Svaka naredba je jedan korak za {{ui:Poništi}}. Vidi [Organizuj crtež pomoću slojeva](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} pokreće prazan crtež, a {{cmd:OPEN}} otvara DWG ili DXF, svaki na svojoj kartici iznad crteža (nekorišten novi crtež se koristi umjesto nove kartice). Zatvaranje kartice s nesnimljenim promjenama prvo pita. Vidi [Podijeli ekran](topic:split-screen).

{{cmd:SAVE}} (skraćenica `QSAVE`, također {{key:Mod+S}}) preuzima kopiju u formatu crteža: DWG ako je otvoren iz DWG-a, DXF ako iz DXF-a. Novi crtež koristi format posljednje izabran u Spasi kao u ovom pregledaču, inače DWG.

{{cmd:SAVEAS}} (također {{key:Mod+Shift+S}}) otvara dijalog {{ui:Spasi kopiju kao}}: izaberi {{ui:DWG}} (i njegovu {{ui:Verziju}}), {{ui:DXF R12}} ili {{ui:DXF 2000}}, zatim {{ui:Spasi}}. Izbor ostaje za ovaj crtež i za nove crteže u ovom pregledaču.

{{cmd:DXFOUT}} uvijek preuzima kopiju DXF R12, bez mijenjanja formata koji koristi {{cmd:SAVE}}.

Vidi [Datoteke: šta se otvara, šta se snima](topic:files#saving).

### TOUR

Skraćenice: `TUTORIAL`. Ponovo pokreće šestostepenu turu prvog crteža. Vidi [Početak rada](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Skraćenice: `TBDOCK`. `Položaj trake [Gore/Dolje/Lijevo/Desno]`. Vidi [Postavke](topic:settings#toolbar-position).

### COMMANDLINE

Skraćenice: `CMDLINE`. `Komandna linija [Učvršćena dolje/Lebdeća/Jedan red/Prikazani redovi historije/Historija naredbi (F2)]`: učvršćuje ili pušta da lebdi komandnu liniju, pravi je jednim redom, pita koliko redova historije prikazati (0 do 12), ili otvara historiju. Vidi [Postavke](topic:settings#command-line).

### TOPAREA

`Gornja traka [Standardna/Kompaktna]`: trake iznad crteža kakve su bile, ili kompaktne. Vidi [Postavke](topic:settings#top-area).

### POLARANG

`Unesi korak polarnog ugla u stepenima <90>`: korak po kojem se linije polarnog praćenja {{ui:Polar}} poravnavaju (više od 0, do 180). Čuva se u ovom pregledaču.

### UNITS

Skraćenice: `UN`. Kako se dužine pišu i unose.

- `Unesi format dužine [Naučni/Decimalni/Inženjerski/Arhitektonski/Razlomački] <tekući>`
- Arhitektonski i Razlomački: `Unesi nazivnik najmanjeg razlomka za prikaz (1, 2, 4, 8, 16, 32, 64, 128 ili 256)`. Ostali: `Unesi broj decimalnih mjesta (0 do 8)`.

Nove kote ga slijede. Jedan korak za {{ui:Poništi}}. Isto kao {{ui:Format dužine}} i {{ui:Preciznost}} u {{ui:Trenutne postavke}}; vidi [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Skraćenice: `GDS`. Prikazuje IC raspored (GDSII stream datoteku): laboratorijski test, samo za gledanje i mjerenje.

- Birač datoteka uzima `.gds` datoteku; s više gornjih ćelija, `Unesi gornju ćeliju za crtanje`.
- Svaki sloj i tip podataka postaje sloj crteža (`GDS 1`, `GDS 2/5`), reference i nizovi se postavljaju ravno, u korisničkoj jedinici datoteke (obično mikrometri). Jedan korak za {{ui:Poništi}}. Ništa se ne simulira ili provjerava, a datoteka se ne vraća.

### DIAGRAM

Skraćenice: `TEXTDIAGRAM`, `T2D`. Dijagram iz teksta.

- Okvir prima tekst (ili jedan red s `;` između iskaza u komandnoj liniji): Mermaid tok, PlantUML dijagram komponenti, D2 ili spisak od-do.
- `Zadaj gornji lijevi ugao dijagrama`, zatim `Zadaj visinu teksta`.

Blokovi i veze su obični objekti na sloju `Diagram`, odabrani kad završi. Jedan korak za {{ui:Poništi}}. Vidi [Nacrtaj dijagram iz teksta](topic:text-to-diagram).

### OLELIST

Skraćenice: `OLES`. OLE objekti koje DWG nosi a CadCraft ih ne može sam postaviti.

- Navodi svaki: broj, tip, veličinu, da li je snimio sliku.
- `Unesi opciju [Postavi (P)/Izlaz (X)] <Izlaz (X)>`: Postavi traži broj, donji lijevi ugao i širinu, i crta okvir sa slikom. Jedan korak za {{ui:Poništi}}; sačuvani objekat se ne mijenja. Vidi [Slike](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Skraćenice: `SHX`. Tvoji vlastiti SHX fontovi.

- `Unesi opciju SHX fonta [Fascikla/Datoteke/Spisak/Ukloni/Obrni/Očisti] <Spisak>`

{{ui:Fascikla}} čita svaki `.shx` u fascikli (CadCraft Studio; ponovo pri svakom pokretanju), {{ui:Datoteke}} uzima izabrane datoteke (pregledač), {{ui:Obrni}} slaže slova jednog fonta od posljednjeg ka prvom. Stilovi teksta koji navode učitani font crtaju njime. Vidi [Crtaj tekst vlastitim SHX fontovima](topic:shx-fonts).

### LIMITS

Kolika je crtež zamišljen da bude.

- `Zadaj donji lijevi ugao ili [ON/OFF] <tekući>`: tačka, `ON` ili `OFF`.
- `Zadaj gornji desni ugao <tekući>`.

Mreža popunjava granice, {{cmd:ZOOM}} Sve ih prikazuje, a kad su granice ON, tačka van njih se odbija (`**Izvan granica**`). Jedan korak za {{ui:Poništi}}; čuva se u DWG i DXF. Vidi [Postavi granice crteža](topic:drawing-limits).

### AUNITS

Skraćenice: `ANGUNITS`. Kako se uglovi prikazuju i unose.

- `Unesi format ugla [Decimalni stepeni/Stepeni-minute-sekunde/Geodetski azimuti] <tekući>`
- `Unesi broj decimalnih mjesta (0 do 8)`, ili za druga dva `Unesi preciznost` (0 stepeni, 2 minute, 4 sekunde, 5 do 8 decimala sekunde).

Jedan korak za {{ui:Poništi}}; čuva se u DWG i DXF. Isto kao {{ui:Format ugla}} u {{ui:Trenutne postavke}}. Vidi [Unos i prikaz azimuta i uglova](topic:bearings-and-angles).

### APPLOAD

Skraćenice: `AP`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Učitaj aplikaciju…}}. Dijalog {{ui:Učitaj aplikacije}}: učitava `.lsp` rutine i `.dcl` datoteke dijaloga, uklanja ih, ponovo ih učitava iz historije, i Startup Suite. `(defun c:NAME …)` naredbe rutine tada rade kao bilo koja druga. Vidi [Učitaj aplikacije](topic:load-applications) i [Pokreni LISP rutine](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Uredi skraćenice…}}) otvara tvoju datoteku skraćenica (redovi `ALIAS, *COMMAND`); {{ui:Spasi}} je primjenjuje. {{cmd:REINIT}} je ponovo primjenjuje. Vidi [Uredi skraćenice naredbi](topic:command-aliases).

### HELP

Skraćenice: `?`. Ispisuje svaku naredbu, njene skraćenice i jednoredni opis u historiji komandne linije. Ne otvara ovu pomoć: pritisni {{key:F1}} ili klikni {{ui:Pomoć}} za to.

## Upit za odabir objekata

Na svakom upitu `Odaberi objekte`: klikni objekte, nacrtaj prozore (s lijeva na desno) i ukrštanja (s desna na lijevo) s dva klika, ili pritisni i prevuci lasso ({{key:Space}} dok prevlačiš: prozor, ukrštanje, ograda), {{key:Shift}}+klik za uklanjanje, i pritisni {{key:Enter}} da završiš. Također možeš upisati `ALL` (sve), `L` (posljednji objekat), `P` (Prethodni: ono što je posljednja naredba koristila), `F` (Ograda: objekti koje siječe linija tačaka; `U` vraća tačku), `W` (Prozor), `C` (Ukrštanje), `R` (Režim uklanjanja: izbori uklanjaju objekte; upit glasi `Ukloni objekte`) i `A` (Ponovo dodaj). `?` ih navodi. Nisu prikazani u upitu. {{key:Tab}} preko preklapajućih objekata označava sljedeći; klikni da ga izabereš. Vidi [Odaberi objekte](topic:select-objects).

### ACCESS

Skraćenica: `AX`. Crtanje bez vida. {{cmd:ACCESS}} uključuje (`On`) ili isključuje (`Off`) Access i mijenja zvukove hvatanja (`Sound`) i glasovne naredbe (`Voice`); prvo kaže stanje. Kad je Access uključen, svaka naredba i rezultat se izgovaraju kroz tvoj čitač ekrana, a područje crteža ima tastaturni kursor. Tema pomoći „Crtanje bez vida” sadrži tipke.

### DESCRIBE

Skraćenica: `DESC`. Kaže šta crtež sadrži: koliko objekata, koje vrste, kako velik, koliko slojeva, šta je odabrano. Samo čita; ništa ne mijenja.

### WHEREAMI

Skraćenica: `WHERE`. Kaže gdje je kursor, u jedinicama crteža.

### NEARBY

Kaže šta leži blizu kursora, najbliže prvo, svaki s udaljenošću i stranom na kojoj je.

### SAYSEL

Kaže šta je odabrano, po jednu rečenicu za svaki objekat (dužina linije, krajevi i ugao; poluprečnik i centar kruga; tekst kako je napisan).

### VOICE

Uključuje ili isključuje izgovorene naredbe. Prepoznaju se na ovom računaru; gdje pregledač to ne može, glas ostaje isključen, osim ako ne izabereš online servis pregledača u Postavkama.
