---
title: Referenca naredbi
summary: Svaka naredba u aplikaciji za crtanje CadCraft, s kraticama, pitanjima koje postavlja, opcijama i zadanim vrijednostima.
keywords: naredbe, kratice, popis naredbi, površina, opseg, measuregeom, linija, pline, kružnica, luk, skrati, odmakni, dimlinear, blok, umetni, layout, ispis, zumiranje, pomoć, copyclip, cutclip, pasteclip, pasteorig, copybase, dupliciraj, selectall
from: 7db2646b
---

Upišite naziv naredbe ili kraticu i pritisnite {{key:Enter}} ili {{key:Space}}. Velika i mala slova nisu bitna, a početni `_`, `-`, `.` ili `'` se ignorira. Upišite `HELP` (ili `?`) da ispišete kratak popis svih naredbi u povijesti naredbenog retka; pritisnite {{key:F1}} za ovu pomoć.

Kako čitati upite: opcije su u uglatim zagradama, a birate ih tako da upišete njihova velika slova (`D` za Promjer). Zadana vrijednost je u šiljastim zagradama; pritisnite {{key:Enter}} da je prihvatite. Gdje se traži točka, možete kliknuti ili upisati bilo koji od oblika iz [Unos koordinata i udaljenosti](topic:coordinate-entry). Gdje se traži udaljenost, možete upisati broj ili kliknuti dvije točke.

Pritisak na {{key:Enter}} tamo gdje se traži točka ili objekt, a nema zadane vrijednosti, završava naredbu. {{key:Esc}} je otkazuje. Sve što naredba učini je jedan korak poništavanja.

## Crtanje

### LINE

Kratice: `L`. Ravni segmenti, svaki kao zaseban objekt.

- `Specify first point` (Enter: počni od zadnje točke koju ste zadali)
- `Specify next point [Undo]`, ponavlja se. Nakon dva segmenta: `[Undo/Close]`.
- `U` poništava zadnji segment, `C` zatvara do prve točke i završava. Enter završava.

### PLINE

Kratice: `PL`. Jedna polilinija od segmenata linija i lukova.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close kad postoje dva segmenta)
- `A` prelazi na lukove: `Specify endpoint of arc [Line/CLose/Undo]`. Svaki luk se nastavlja tangentno na prethodni segment. `L` vraća na linije, `CL` zatvara lukom.
- Enter završava; polilinija ostaje otvorena.

### CIRCLE

Kratice: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` pita `Specify diameter of circle`.
- `2P`: dva kraja promjera. `3P`: tri točke na kružnici.
- `T` (također naredba `TTR`, i {{ui:Crtanje}} › {{ui:Više}} › {{ui:Kružnica: Tan, Tan, Radijus}}): `Specify point on object for first tangent of circle`, zatim drugu, pa polumjer (Enter: zadnji). Kružnica dodiruje oba objekta (linije, lukove, kružnice, segmente polilinija, također unutar blokova); od onih koje to čine, bira se ona koja dodiruje najbliže vaše odabire. „Circle does not exist” kad nijedna ne odgovara.
- `TTT` (ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Kružnica: Tan, Tan, Tan}}): tri objekta; kružnica koja dodiruje sva tri, najbliža vašim odabirima (tri linije daju unutarnju ili vanjsku kružnicu, ovisno o tome gdje kliknete).

### ARC

Kratice: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: luk kroz tri točke.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Luk ide suprotno od kazaljke na satu od početka do kraja.

### RECTANG

Kratice: `REC`, `RECTANGLE`. Zatvorena polilinija.

- `Specify first corner point`, `Specify other corner point`. Upišite `@width,height` za drugi kut.

### POLYGON

Kratice: `POL`. Pravilni poligon kao zatvorena polilinija.

- `Enter number of sides <4>` (3 do 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: kliknite ili upišite točku; njezina udaljenost određuje veličinu, a smjer okreće poligon.

### ELLIPSE

Kratice: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, zatim udaljenost do druge osi.
- `I` (`Isocircle`, samo dok je {{cmd:ISODRAFT}} uključen): središte, zatim polumjer ili `Diameter`: elipsa koju kružnica prikazuje na trenutnoj izometrijskoj ravnini.

### HATCH

Kratice: `H`, `BH`, `BHATCH`; ili {{ui:Šrafura}} na alatnoj traci. Najprije ispisuje trenutni uzorak, mjerilo i kut.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, ponavlja se (`Undo` kad postoji površina): svaki klik dodaje zatvorenu površinu oko sebe, a zatvoreni oblici unutar nje su otoci. Enter pravi jednu šrafuru od svih njih.
- `S`: `Select closed objects` (zatvorene polilinije, kružnice, zatvorene elipse).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): ispuna je prijelaz umjesto uzorka. Pogledajte {{cmd:GRADIENT}} za njegova pitanja.

Vidi [Šrafura i ispuna površina](topic:hatch).

### GRADIENT

Kratice: `GD`. Ispunjava površinu prijelazom jedne ili dvije boje. Najprije pita za prijelaz, zatim nastavlja kao {{cmd:HATCH}} (`Pick internal point`, `S` za zatvorene objekte, {{key:Enter}} za završetak).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, ponavlja se; svaki put ispisuje prijelaz kakav je sada.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ili jedan od njih obrnut (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Prvih nekoliko slova je dovoljno.
- `O`: jedna boja, zatim njezina nijansa od 0 do 1 (0 je zatamnjuje do crne, 0.5 je sama boja, 1 je izbjeljuje do bijele). `TW`: prva i druga boja. Boja je broj od 1 do 255, tri broja kao `255,128,0`, ili `#rrggbb`.
- `A`: kut pod kojim prijelaz ide. `C`: centrirano Yes ili No (No pomiče sredinu prijelaza na jednu stranu).
- Odbija boju ili vrstu koju ne poznaje i nijansu izvan raspona 0 do 1.

{{cmd:HATCHEDIT}} `G` i Svojstva (Prijelaz) kasnije mijenjaju prijelaz ili bilo koju šrafuru pretvaraju u prijelaz. Prijelaz se crta na zaslonu i ispisuje se. DWG 2004 i noviji ga čuvaju kao pravu šrafuru prijelaza; DXF 2000 i DWG 2000 ga čuvaju za CadCraft, a drugi programi vide punu ispunu prvom bojom.

### HATCHGENERATEBOUNDARY

Kratice: `HGB`. Ponovno pravi rub iz šrafure koja ga je izgubila. `Select hatches` (ili ih prvo odaberite), zatim `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Svaka petlja šrafure postaje zatvorena polilinija na sloju šrafure; nove polilinije ostaju odabrane. Zakrivljeni rub vraća se kao kratki ravni dijelovi koje šrafura zadržava.
- S Yes šrafura prati novi rub, kao šrafura napravljena s {{cmd:HATCH}}. Jedan korak poništavanja.
- Kaže to kad nijedna šrafura nije odabrana.

### POINT

Kratice: `PO`; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Točka}}. Objekti točke, jedan po kliku, dok ne pritisnete Enter.

- `Specify a point`

### XLINE

Kratice: `XL`; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Konstrukcijska linija}}. Konstrukcijske linije, beskonačne u oba smjera. Vidi [Konstrukcijske linije i zrake](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, zatim `Specify through point` za svaku liniju, dok ne pritisnete Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` prvo pita `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, zatim `Specify angle end point` za svaku liniju.
- `O`: `Specify offset distance [Through] <Through>`, zatim `Select a line object` i `Specify side to offset` (ili `Specify through point`) za svaku liniju.

### RAY

Nema kratica; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Zraka}}. `Specify start point`, zatim `Specify through point` za svaku zraku, dok ne pritisnete Enter.

### TEXT

Kratice: `DT`, `DTEXT`; ili {{ui:Tekst}} na alatnoj traci. Jednoredni tekst; svaki redak je zaseban objekt.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, zatim `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, ponavlja se: svaki Enter započinje sljedeći redak ispod. Enter na praznom retku završava. {{key:Space}} ovdje upisuje razmak.

### DIVIDE

Kratica: `DIV`. {{cmd:DIVIDE}} postavlja oznake na liniju, luk, kružnicu, polilinija, spline ili elipsu koje ih dijele na jednake dijelove. Odaberite objekt, zatim zadajte broj dijelova (2 do 32767). Otvoreni objekt dobiva jednu oznaku manje od broja dijelova; zatvoreni dobiva oznaku i na početku. Sam objekt se ne reže. Oznake su točke; `Block` umjesto toga traži blok ovog crteža i pita hoće li se okretati da prati objekt. Duljine duž splinova i elipsa mjere se po kratkim tetivama. Odbija tekst, šrafure i druge objekte koji nemaju duljinu.

### MEASURE

Kratica: `ME`. {{cmd:MEASURE}} postavlja oznaku na svaku zadanu duljinu duž linije, luka, kružnice, polilinije, splinea ili elipse, brojeći od kraja najbližeg mjestu gdje ste kliknuli (zatvoreni objekt: od njegova početka). Duljinu zadajete upisom ili dvjema točkama. Daleki kraj otvorenog objekta ne dobiva oznaku. `Block` postavlja blok na svaku oznaku umjesto točke. Odbija duljinu 0, duljinu veću od objekta i onu koja bi napravila više od 32767 oznaka.

### BOUNDARY

Kratice: `BO`, `BPOLY`. {{cmd:BOUNDARY}} pravi zatvorenu polilinju oko površine u kojoj je točka koju birate, od svih linija, lukova, kružnica, polilinija i krivulja koje je omeđuju na zaslonu. Dijelovi koji leže na luku ili kružnici vraćaju se kao lučni segmenti; dijelovi elipsa i splinova vraćaju se kao kratki ravni segmenti. Uz uključene `Islands` (početna postavka) svaka zatvorena površina unutar nje također dobiva svoju polilinju. Birajte točke dalje; Enter završava. Objekti koji omeđuju površinu ostaju kakvi jesu. Kaže to kad nijedna zatvorena površina ne sadrži točku.

### BLEND

{{cmd:BLEND}} crta spline između krajeva dviju otvorenih krivulja. Odaberite svaku krivulju blizu kraja za spajanje. `CONtinuity` bira `Tangent` (spline polazi i dolazi duž obje krivulje) ili `Smooth` (također prati kako se krivulje savijaju na krajevima); izbor se pamti za sesiju. Dvije krivulje se ne mijenjaju. Odbija zatvorene objekte i dva kraja koji se već spajaju.

### REGION

Kratica: `REG`. {{cmd:REGION}} pretvara zatvorene objekte u regije: ravne površine koje možete spajati, rezati i mjeriti. Odaberite kružnice, zatvorene polilinije, zatvorene elipse ili zatvorene splineove, ili linije, lukove i otvorene polilinije koje kraj do kraja zatvaraju petlju; svaka petlja postaje jedna regija i zamjenjuje objekte iz kojih je nastala. Lukovi ostaju lukovi; elipse i splinovi postaju kratki ravni segmenti. Ono što nije zatvoreno i ne zatvara petlju ostaje kakvo jest, i kaže se koliko je toga. U crtežu je regija jedna ili više zatvorenih polilinija držanih zajedno kao nenaziv grupa, pa klik odabire cijelu regiju, a kopija je regija za sebe; drugi programi koji otvore datoteku vide zatvorene polilinije.

Kad su u crtežu regije, {{cmd:UNION}}, {{cmd:SUBTRACT}} i {{cmd:INTERSECT}} na kartici 2D rade s regijama: `UNION` spaja odabrane regije u jednu (regije koje su odvojene postaju jedna regija s više kontura), `SUBTRACT` pita regije od kojih se oduzima, zatim one koje se oduzimaju (rupa ostaje dio regije), `INTERSECT` zadržava površinu koju sve dijele. Svaka naredba kaže površinu rezultata i jedan je korak poništavanja. Odbijaju kad ništa ne bi ostalo ili ništa nije zajedničko. Na kartici 3D, i u crtežu bez regija, iste naredbe rade s tijelima kao i prije.

## Izmjena

Kratice: `MT`, `T`; ili {{ui:Odlomak}} na alatnoj traci. Tekst odlomka koji se prelama na zadanu širinu, upisuje se na mjestu.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: širina preko dva kuta je mjesto gdje se tekst prelama. `H` pita `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` i preskače drugi kut.
- Zatim se na crtežu otvara okvir: upisujte, {{key:Enter}} za novi odlomak, {{key:Mod+Enter}} ili klik izvan okvira za završetak, {{key:Esc}} za otkazivanje. Njegova traka postavlja visinu, razmak redaka, širinu i poravnanje. Vidi [Dodavanje teksta i oznaka](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Kratice: `ED`, `DDEDIT`; ili dvaput kliknite tekst. `Select a text to edit`, ponavlja se do {{key:Enter}}: svaki se otvara u istom okviru. Pokrenut nad odabranim ili dvaput kliknutim tekstom, uređuje taj jedan i završava.
### ERASE

Kratice: `E`, `DELETE`; ili pritisnite {{key:Delete}} s odabranim objektima.

- `Select objects` (preskače se kad su objekti već odabrani)

### MOVE

Kratice: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, upisano kao `dx,dy`.

### COPY

Kratice: `CO`, `CP`. Kopira onoliko puta koliko zadate točaka.

`Array` na upitu za drugu točku pravi redak odjednom: zadajte broj stavki (izvornik se broji kao jedna), zatim točku gdje ide prva kopija; ostale slijede na istom razmaku. `Fit` umjesto toga čini tu točku mjestom zadnje kopije, a ostale se ravnomjerno raspoređuju između.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, ponavlja se do Enter. `U` poništava zadnju kopiju.

### ROTATE

Kratice: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: stupnjevi, pozitivno suprotno od kazaljke na satu; ili kliknite točku da zakrenete prema njoj.

### SCALE

Kratice: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: upišite faktor kao `0.5` ili `2`. Kliknuta točka daje svoju udaljenost od bazne točke kao faktor.

### MIRROR

Kratice: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Kratice: `AL`; ili {{ui:Izmjena}} › {{ui:Više}} › {{ui:Poravnaj}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Uz dva para: `Scale objects based on alignment points? [Yes/No] <N>`

Vidi [Poravnavanje objekata](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (ili odabir), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` pita za točku. Odabir ostaje.

### DISTRIBUTE

- `Select objects` (najmanje tri), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Vanjska dva ostaju; odabir ostaje.

### ALIGNPANEL

Kratice: `ALP`; ili {{ui:Izmjena}} › {{ui:Više}} › {{ui:Poravnaj i rasporedi}}. Otvara ploču koja pokreće ALIGNTO i DISTRIBUTE klikovima.

### LASER

Kratice: `LASERCUT`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}}. Otvara ploču Laser preko crteža: što koji sloj radi (rez, urez, graviranje, ispuna, slika), pregled, G-kod za GRBL za spremanje, te okvir i slanje preko Web Serial. Vidi [Slanje crteža laseru](topic:laser-cutting).

### STRETCH

Kratice: `S`; ili {{ui:Rastegni}}. `Select objects to stretch`: povucite prozore križanja (ili upišite `C`) preko krajeva za pomicanje. `Specify base point [Displacement]`, `Specify second point`. Točke unutar prozora se pomiču: krajevi linija, vrhovi polilinija (lučni segmenti zadržavaju svoju visinu), točke kota; kružnice, elipse, tekst, točke i blokovi pomiču se cijeli kad su im središte ili točka umetanja unutar prozora. Odabir napravljen prije naredbe zadržava prozore križanja (i lasove) koji su ga napravili, pa se rastežu na isti način. Bez prozora objekti se pomiču cijeli.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Kratice: `AR`; ili {{ui:Niz}}. `Select objects`, zatim `Enter array type [Rectangular/POlar] <Rectangular>` (samo ARRAY).

- Pravokutni počinje s 4 stupca × 3 retka, razmaknut 1.5 puta u odnosu na veličinu objekata, prikazan kao pregled. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pita stupce i retke, `S` razmake između stupaca i između redaka (negativno ide ulijevo ili dolje), `COL` i `R` po jedan smjer.
- Polarni pita `Specify center point of array`, počinje sa 6 stavki po cijelom krugu, zakrenut. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` stavke, `F` kut za ispunu (+ suprotno od kazaljke, − u smjeru kazaljke), `ROT` zakretanje stavki Yes ili No.
- {{key:Enter}} (eXit) pravi kopije, kao obične objekte. Jedan korak poništavanja.
- `AS` (ASsociative) prebacuje između običnih kopija i niza koji ostaje uredljiv: jedan objekt koji kasnije mijenjate s {{cmd:ARRAYEDIT}}, preko njegovih ručki ili u Svojstvima. Izbor se pamti ({{cmd:ARRAYASSOCIATIVITY}}); počinje na običnim kopijama.

### ARRAYPATH

Kopije duž krivulje. `Select objects`, zatim `Select path curve`: linija, luk, kružnica, elipsa, polilinija ili spline (ne jedan od objekata koji se nizaju). Putanja počinje na kraju bližem objektima, a prva stavka su objekti tamo gdje jesu.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, s pregledom. `M`: `Divide` ravnomjerno raspoređuje stavke po cijeloj putanji, `Measure` stavlja jednu svako toliko duž nje. `I`: broj stavki (uz Measure, 0 znači koliko god stane; broj iza kraja putanje svodi se na ono što stane). `SP`: razmak između stavki duž putanje (prebacuje na Measure). `AL`: Yes okreće svaku stavku da prati putanju, No ih drži uspravnima.
- `AS` kao u {{cmd:ARRAY}}. Kad je uključeno, niz čuva vlastitu kopiju oblika putanje: naknadno uređivanje krivulje putanje ne pomiče stavke.
- Odbija putanju koja nije krivulja i jednu stavku.

### ARRAYEDIT

Mijenja niz napravljen s ASsociative. `Select array` (ili ga prvo odaberite). Ispisuje što je niz sada, zatim pita do {{key:Enter}}:

- Pravokutni: `COL` stupce i njihov razmak, `R` retke i njihov razmak, `A` kut pod kojim idu stupci.
- Polarni: `I` stavke, `F` kut ispune, `ROT` zakretanje stavki Yes ili No.
- Putanja: `M` Divide ili Measure, `I` stavke, `SP` razmak, `AL` poravnanje s putanjom.
- `S` (Source) otvara objekte koje niz ponavlja, same za sebe, kao urednik blokova. Crtajte i uređujte tamo; {{cmd:ARRAYCLOSE}} sprema ili odbacuje, a svaka stavka slijedi.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, zatim kliknite stavke koje treba zamijeniti, {{key:Enter}}. Te stavke pokazuju zamjenu umjesto njih; zamjenski objekti napuštaju crtež i žive u nizu. `RES` (RESet) ponovno pokazuje izvorne objekte u svakoj stavki.
- Svaka promjena je jedan korak poništavanja. Odbija obične kopije, običnu referencu bloka i niz na zaključanom sloju.

Iste brojke su u Svojstvima pod Niz, a niz ima ručke: njegova bazna točka ga pomiče, ručka na drugoj stavki postavlja razmak, ručka iza zadnje stavke postavlja broj (kod polarnog: druga stavka postavlja koliko ih ima, a zadnja kut ispune). {{cmd:EXPLODE}} pretvara niz natrag u obične kopije.

### ARRAYCLOSE

Završava {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Kaže to kad nijedni izvorni objekti niza nisu otvoreni. {{cmd:BCLOSE}} radi isto.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Postavlja s čim {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR i {{cmd:ARRAYPATH}} počinju; njihova opcija `AS` mijenja istu postavku. Pamti se u ovom pregledniku.

### OFFSET

Kratice: `O`. Linije, lukovi, kružnice i polilinije.

Gdje se polilinija pomiče prema van, a njezini ravni segmenti se na kutu razmiču, {{cmd:OFFSETGAPTYPE}} odlučuje kako se razmak zatvara.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, zatim `Specify point on side to offset` (ili, uz Through, `Specify through point`), ponavlja se do Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: kako {{cmd:OFFSET}} zatvara razmake na vanjskim kutovima polilinije. `0` produžuje segmente dok se ne sretnu (početna postavka), `1` ih spaja lukom oko starog kuta, `2` ravnim rezom. Unutarnji kutovi i lučni segmenti nisu zahvaćeni. Vrijedi za ovu sesiju.

### EXTRIM

{{cmd:EXTRIM}} skraćuje sve s jedne strane ruba. Odaberite rezni rub (liniju, luk, kružnicu, polilinju, elipsu, spline ili konstrukcijsku liniju), zatim točku na strani koju treba očistiti: svaka linija, luk, kružnica, polilinija i konstrukcijska linija koja prelazi rub gubi svoj dio s te strane, gdje počinje na rubu. Dok birate stranu, dijelovi koji bi nestali prate pokazivač. Za zatvoreni rub strane su unutra i van. Objekti koji samo dodiruju rub, te tekst, šrafure, splinovi i elipse koje ga prelaze, ostaju kakvi jesu. Jedan korak poništavanja.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: kako {{cmd:TRIM}} i {{cmd:EXTEND}} počinju. `1` Quick: svaki objekt je rezni rub ili granica. `0` Standard: prvo pitaju za rubove. Također `(setvar "TRIMEXTENDMODE" 0)` u LISP-u.

### TRIM

Kratice: `TR`. Prvo ispisuje `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. U načinu Quick svaki vidljivi objekt je rezni rub, a objekt koji ništa ne prelazi se briše; u načinu Standard prvo pita `Select cutting edges (Enter = every object)` i reže samo na njima.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, ponavlja se: kliknite dio koji treba ukloniti (prikazuje se sivo i isprekidano dok pokazivač miruje na njemu), povucite putanju kroz nekoliko dijelova (svi idu u jednom koraku), ili kliknite dvije prazne točke za ogradu između njih. {{key:Shift}} umjesto toga produžuje. `T` bira rezne rubove (u načinu Standard), `F` pita točke ograde, `C` dva kuta prozora (dijelovi koji su djelomično unutra također idu), `O` pita `Enter a trim mode option [Quick/Standard]`, `E` pita `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` briše objekte koje odaberete, `U` poništava zadnji odabir ili povlačenje. Enter završava. Vidi [Skraćivanje i produživanje](topic:trim-and-extend).

- Klik na šrafuru reže šrafuru: rezni rubovi dijele šrafiranu površinu, a dio na koji ste kliknuli se uklanja (ne ostaje nacrtani obris na mjestu gdje je bio). Šrafura zadržava svoj uzorak ili prijelaz; šrafura koja je bila povezana sa svojim rubom nakon toga nije povezana, jer više ne ispunjava njega. Kaže se kad nijedan rezni rub ne dijeli šrafuru na tom mjestu, kad je klik izvan šrafure i kad ništa ne bi ostalo (koristite {{cmd:ERASE}}). Povučena putanja ili ograda ne reže šrafure.

### EXTEND

Kratice: `EX`. Isto kao TRIM obrnuto: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Klik produljuje kraj najbliži njemu do sljedećeg graničnog ruba; povučena putanja ili ograda produljuje svaki objekt koji prelazi; {{key:Shift}} skraćuje. `B` bira granične rubove (u načinu Standard). Način i Edge dijele se s TRIM.

### LINKVIEWS

Kratice: `SYNCVIEWS`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Poveži prikaze ploča}}, ili ikona veze na karticama crteža. `Link the panes' views [ON/OFF]` (Enter uzima drugo stanje): dok je uključeno, pomak ili zumiranje u aktivnoj ploči pomiče svaku ploču koja prikazuje istu vrstu prostora. Vidi [Podjela zaslona](topic:split-screen).

### OPENIN3D

Nema kratica; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Otvori u ModelCraftu}} gdje aplikacija za 3D modeliranje preuzima predani crtež. Otvara ga tamo u novoj kartici, kao DWG (ništa se ne učitava). Ako preglednik blokira karticu, to kaže.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: što pritisak i povlačenje na praznom mjestu crtaju. Isto kao Postavke › CadCraft › Povlačenje za odabir. Vidi [Odabir lasom](topic:lasso-selection).

### FILLET

Kratice: `F`. Linije, lukovi, kružnice i polilinije. Najprije ispisuje `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` pita `Specify fillet radius <last>`. `T` pita `Enter Trim mode option [Trim/No trim]`: uz No trim objekti ostaju kakvi jesu, a dodaje se samo luk.
  - `M` nastavlja naredbu za još kutova do {{key:Enter}}; `U` poništava zadnji kut, a da ne napušta naredbu.
  - `P` pita `Select 2D polyline [Radius]` i zaobljuje svaki kut gdje se sastaju dva ravna segmenta. Zaobljenja koja već ima zamjenjuju se novim polumjerom; polumjer 0 ih uklanja. Kutovi čije su stranice prekratke za polumjer ostaju i broje se.
- `Select second object or shift-select to apply corner [Radius]`. Držite {{key:Shift}} dok klikate za oštar kut, bez obzira na polumjer.

Kliknite svaki objekt na dijelu koji želite zadržati. Dvije linije koje se ne sastaju se produljuju. Dvije paralelne linije dobivaju polukrug preko razmaka, na kraju prve linije najbližem vašem kliku. Kružnica se nikad ne reže. Dva susjedna segmenta jedne polilinije dobivaju luk unutar polilinije; polilinija i drugi objekt rade kad rez padne na prvi ili zadnji segment polilinije.

### CHAMFER

Kratice: `CHA`. Linije i ravni segmenti polilinija. Najprije ispisuje trenutne udaljenosti (ili duljinu i kut).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` pita `Specify first chamfer distance <last>` i `Specify second chamfer distance <the first>`: prva se reže s prve linije koju birate, druga s druge.
  - `A` pita `Specify chamfer length on the first line` i `Specify chamfer angle from the first line`.
  - `E` (mEthod) bira koju od dviju sljedeći skos koristi. `T`, `M`, `U` i `P` rade kao u {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klik pravi oštar kut.

Udaljenost duža od linije se odbija (`Distance is too large.`).

### BREAK and BREAKATPOINT

Kratice: `BR`. `Select object` (gdje kliknete je prva točka), `Specify second break point [First point]`; `F` pita `Specify first break point` i `Specify second break point`. Dio između njih se briše; na kružnici, suprotno od kazaljke na satu od prve točke. BREAKATPOINT pita `Specify break point` i dijeli objekt na dva dijela u toj točki (ne kružnicu).

### LENGTHEN

Kratice: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: odabir ispisuje `Current length` (i uključeni kut luka) i ponovno pita. `DE` pita `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` povlači. Zatim `Select an object to change [Undo]`, ponavlja se: kraj najbliži klik pomiče se. Linije, lukovi i otvorene polilinije.

### JOIN

Kratice: `J`. `Select objects to join`. Linije, lukovi i otvorene polilinije koji se sastaju kraj do kraja postaju polilinije (zatvorene kad se lanac zatvori); linije na jednom pravcu postaju jedna linija; lukovi jedne kružnice postaju jedan luk ili kružnica. Povijest kaže koliko je objekata spojeno, a koliko nije.

### MATCHPROP

Kratice: `MA`, `PAINTER`. `Select source object`, zatim `Select destination objects [Settings]` i {{key:Enter}}. Kopira sloj i boju, a među objektima iste vrste visinu i širinu teksta, veličine kota ili uzorak šrafure. `S` pita `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, ponavlja se do {{key:Enter}}; izbor se pamti za sesiju.

### EXPLODE

Kratice: `X`. Polilinije postaju linije i lukovi, referenci blokova postaju njihovi objekti, kote postaju linije, strelice i tekst. Niz koji ostaje uredljiv ({{cmd:ARRAYEDIT}}) postaje obične kopije svojih objekata.

- `Select objects`

### GROUP

Kratica: `G`. {{cmd:GROUP}} daje odabranim objektima ime koje dijele. Odaberite objekte, zatim upišite ime (bez razmaka; `?` navodi grupe; Enter pravi grupu bez imena) i, za imenovanu grupu, izborni opis. Od tada klik na jedan od njih, ili prozor koji ga obuhvaća, odabire sve, pa se zajedno pomiču, kopiraju i brišu; svaki objekt je i dalje zaseban objekt. Objekt može biti u nekoliko grupa. Kopija cijele grupe je nova grupa bez imena; kopija jednog člana sam za sebe pridružuje se grupi. Grupe pripadaju prostoru u kojem su napravljene (modelu ili listu). Čuvaju se kad spremite kao DWG ili DXF i ponovno otvorite datoteku u CadCraftu; datoteke DXF 2000 nose ih i kao objekte grupa za druge programe, a grupe napravljene u drugom programu čitaju se kad se otvori DXF ili DWG.

### UNGROUP

{{cmd:UNGROUP}} rastavlja grupe: odaberite objekte grupa (svaka grupa u kojoj su rastavlja se) ili upišite `Name` i ime grupe. Objekti ostaju u crtežu. Jedan korak poništavanja vraća grupe.

### GROUPEDIT

{{cmd:GROUPEDIT}} mijenja jednu grupu. Kliknite jedan od njezinih objekata, ili upišite `Name` i njezino ime; grupa koja je već odabrana uzima se kakva jest. Zatim: `Add` objekte (birani jedan po jedan, a ne grupu po grupu), `Remove` objekte, `REName` grupu, promijenite joj `Description` ili postavite `Selectable` (hoće li klik na jedan objekt odabrati cijelu grupu). `eXit` ili Enter završava. Grupa bez objekata nestaje.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: uz `1` (početna postavka) klik ili prozor na grupiranom objektu odabire cijelu njegovu grupu; uz `0` pojedinačni objekti, pa možete urediti jednog člana. Vrijedi za ovu sesiju.

## Međuspremnik

Vlastiti međuspremnik CadCraft-a: radi unutar crteža, između crteža i između kartica CadCraft-a u ovom pregledniku. Vidi [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ili {{ui:Kopiraj}} u grupi {{ui:Uređivanje}}. Kopira objekte u međuspremnik, s blokovima i slojevima koje koriste. Objekti ostaju odabrani.

- `Select objects to copy` (preskače se kad su objekti već odabrani)

### CUTCLIP

{{key:Mod+X}}, ili {{ui:Izreži}} u izborniku {{ui:Više}}. Kopira objekte u međuspremnik, zatim ih briše (jedan korak poništavanja).

- `Select objects to cut` (preskače se kad su objekti već odabrani)

### COPYBASE

Kopira objekte u međuspremnik s baznom točkom koju birate; lijepljenje postavlja tu točku.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, ili {{ui:Zalijepi}} u grupi {{ui:Uređivanje}}. Kopija prati kursor, visi o donjem lijevom kutu svog opsega (ili o njegovu središtu, ili o točki {{cmd:COPYBASE}}; vidi [Postavke CadCraft-a](topic:settings)).

- `Specify insertion point`

Zalijepljeni objekti su odabrani. Blok koji crtež već ima pod istim imenom zadržava definiciju ovog crteža.

Kad je područje kopirano u MarkupCraftu novije od onoga što je CadCraft kopirao (i mlađe od 6 sati), {{key:Mod+V}} i `PASTECLIP` umjesto toga lijepe to područje: vidi `PASTEAREA`.

### PASTEAREA

Kratice: `PAREA`. {{ui:Zalijepi kopirano područje}} u izborniku {{ui:Više}}. Lijepi područje kopirano s {{ui:Kopiraj područje}} u MarkupCraftu kao sliku u njegovoj stvarnoj veličini. Vidi [Slike u crtežu](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (samo kad list nije imao mjerilo crteža): broj, {{key:Enter}} za veličinu papira, ili `P`, zatim `First point on the pasted area`, `Second point on the pasted area` i njihova stvarna udaljenost.

### PASTEORIG

{{key:Mod+Shift+V}}, ili {{ui:Zalijepi na isto mjesto}} u izborniku {{ui:Više}}. Lijepi na koordinatama s kojih su objekti kopirani. Ništa ne pita.

### DUPLICATE

Kratice: `DUP`. {{key:Mod+D}}, ili {{ui:Dupliciraj i pomakni}} u izborniku {{ui:Više}}. Kopija objekata se pomiče s pokazivačem od mjesta gdje je; {{key:Esc}} ne ostavlja ništa. Ne koristi međuspremnik.

- `Select objects to duplicate` (preskače se kad su objekti već odabrani)
- `Specify where the copy goes (Esc leaves nothing)`: kliknite, upišite točku, `@dx,dy` (od mjesta gdje je bio pokazivač), ili udaljenost prema kursoru.

### SELECT

Pita `Select objects` (sa svim opcijama u nastavku) i ostavlja odabrano što ste izabrali, za sljedeću naredbu ili za `P` kasnije.

### QSELECT

Kratice: `QS`. U pregledniku, dijaloški okvir {{ui:Brzi odabir}} (vidi [Odabir objekata](topic:select-objects#select-by-a-rule-quick-select)). Bez njega naredbeni redak pita `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` i `Enter value`. Pogoci postaju odabir.

### SELECTSIMILAR

Kratice: `SIM`. `Select objects [SEttings]` (ili trenutni odabir): odabire svaki objekt iste vrste, s istim slojem i bojom (i nazivom bloka, uzorkom šrafure). `SE` pita `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, ponavlja se do {{key:Enter}}.

### FIND

Nema kratica; ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Pronađi i zamijeni}}. U pregledniku, dijaloški okvir {{ui:Pronađi i zamijeni}} (vidi [Dodavanje teksta i oznaka](topic:text#find-and-replace-words)). Bez njega: `Enter text to find`, zatim `Enter replacement text (Enter: select what is found)`. Traži u tekstu, vrijednostima atributa i tekstu kota, na otvorenoj kartici ili u odabiru.

### SELECTALL and DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) odabire svaki objekt koji možete uređivati na otvorenoj kartici. `DESELECT` (aliasi `AI_DESELECT`, `SELECTNONE`; ili {{key:Esc}}) briše odabir.

## Kote

### DIMLINEAR

Kratice: `DLI`, `DIMLIN`. Vodoravna ili okomita udaljenost.

- `Specify first extension line origin [Select object]` (Enter ili `S`: `Select object to dimension`, zatim kliknite segment linije, luka, kružnice ili polilinije)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` pita za tekst (`<>` je izmjerena vrijednost), `H` i `V` fiksiraju smjer, `R` pita `Specify angle of dimension line <0>`.

### DIMALIGNED

Kratice: `DAL`, `DIMALI`. Stvarna udaljenost između dviju točaka.

- Ishodišta kao u {{cmd:DIMLINEAR}}, zatim `Specify dimension line location [Text]`.

### DIMANGULAR

Kratice: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Luk: njegov kut. Kružnica: `Specify second angle endpoint`. Linija: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: kliknite unutar kuta koji mjerite.

### DIMRADIUS and DIMDIAMETER

Kratice: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, zatim `Specify dimension line location [Text]`.

### DIMCONTINUE

Kratice: `DCO`, `DIMCONT`. Nastavlja od zadnje izrađene linearne ili poravnate kote (ili pita `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, ponavlja se do Enter.

### DIMBASELINE

Kratice: `DBA`, `DIMBASE`. Kao {{cmd:DIMCONTINUE}}, ali svaka kota počinje od prvog ishodišta i slaže se dalje van.

### DIMORDINATE

Kratice: `DOR`, `DIMORD`. `Specify feature location`, zatim `Specify leader endpoint [Xdatum/Ydatum/Text]`. Ispisuje koliko je element udaljen od ishodišta UCS-a duž X ili Y, na vodilici: vodilica koja ide uglavnom gore ili dolje čita se kao X, ona koja ide postrance kao Y; `Xdatum` i `Ydatum` to fiksiraju. Prvo postavite ishodište s {{cmd:UCS}} (bez njega je to 0,0 crteža). Ručke pomiču element, ishodište i kraj vodilice, a vrijednost slijedi. Sprema se kao prava kota ordinate u DWG i DXF. Odbija kraj vodilice na samom elementu.

### DIMARC

Kratice: `DAR`. `Select arc or polyline arc segment`, zatim `Specify arc length dimension location [Text]`. Mjeri duž luka (ne tetive) i ispisuje simbol luka ispred vrijednosti. Odbija punu kružnicu, liniju ili ravni segment polilinije. DWG to čuva kao kotu duljine luka; DXF to čuva kao kutnu kotu s duljinom kao tekstom, a CadCraft je ponovno otvara kao kotu duljine luka.

### DIMJOGGED

Kratice: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Kota polumjera za krivulju čije je središte daleko ili izvan lista: mjerna crta počinje od točke koju dajete umjesto od središta, s prijelomom, i i dalje ispisuje stvarni polumjer. DWG to čuva kao kotu polumjera s prijelomom; DXF to čuva kao kotu polumjera, a CadCraft je ponovno otvara s prijelomom.

### DIMJOGLINE

Kratice: `DJL`. `Select dimension to add jog [Remove]`, zatim `Specify jog location (or press Enter)`. Stavlja simbol prijeloma na liniju linearne ili poravnate kote, da pokaže da udaljenost nije nacrtana u mjerilu; vrijednost se ne mijenja. `Remove` ga skida. Odbija druge vrste kota.

### QDIM

Nema kratica. `Select geometry to dimension`, zatim `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Kotira više objekata u jednom koraku, od krajeva linija i segmenata polilinija, središta kružnica i lukova, točaka i referenci blokova. Položaj iznad ili ispod objekata mjeri preko, a onaj sa strane mjeri gore. `Continuous` lančano povezuje točke, `Baseline` mjeri sve od prve, `Staggered` ugnježđuje parove od sredine prema van, `Ordinate` daje svakoj točki njezinu udaljenost od datuma (`datumPoint` bira novi), `Radius` i `Diameter` kotiraju svaku kružnicu i luk koje odaberete. Način se pamti. Sve što napravi je jedan korak poništavanja. Kaže to kad ima manje od dvije točke ili nema lukova ili kružnica za Radius i Diameter.

### DIMBREAK

Kratice: `DBREAK`. `Select dimensions to add or remove breaks`, zatim `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` ostavlja prazninu u mjernim i pomoćnim crtama gdje god ih neki drugi objekt siječe, i ponovno je računa kad se ti objekti ili kota pomaknu. `Manual` (jedna kota) pita dvije točke i ostavlja prazninu između njih. `Remove` uklanja sve praznine. Praznina je 1.5 puta veća od visine teksta kote.

### DIMSPACE

Nema kratica. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Pomiče mjerne crte paralelnih linearnih i poravnatih kota (ili kutnih oko istog vrha) tako da su jednako udaljene, mjereno od bazne kote, svaka na strani na kojoj jest. `0` ih poravnava s bazom; `Auto` je dvostruka visina teksta bazne kote. Kote koje nisu paralelne s bazom ostaju netaknute.

### DIMINSPECT

Nema kratica. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Crta okvir oko vrijednosti s oznakom prije nje i stopom kontrole poslije nje. `remove` skida okvir. Tekst tolerancije ostaje uz vrijednost.

### DIMOVERRIDE

Kratice: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, ponovno dok ne pritisnete Enter, zatim `Select dimensions`. Mijenja te postavke samo na odabranim kotama; stil kote se ne mijenja. Uzima varijable koje su broj ili prekidač (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` vraća odabrane kote na njihov stil. Odbija naziv koji nije takva varijabla i vrijednost koju ne može primiti.

### DIMREASSOCIATE

Kratice: `DRE`, `DIMREASSOC`. `Select dimensions`, zatim za svaku njezine ishodišne točke pomoćnih crta (`Specify first extension line origin on an object`: hvata se za kraj ili sredinu linije, kut polilinije, središte; Enter ostavlja tu točku slobodnom), ili za polumjer, promjer, polumjer s prijelomom ili kotu duljine luka `Select arc or circle`. Kota se zatim veže za te objekte: kad se oni pomaknu ili promijene veličinu, ona ih slijedi u istom koraku poništavanja i ponovno mjeri. Ručno pomicanje vezane točke ili brisanje objekta prekida tu vezu. Veza se sprema u DWG i DXF 2000 kao vlastiti podaci CadCraft-a; drugi programi vide običnu kotu.

### DIMDISASSOCIATE

Kratice: `DDA`, `DIMDISASSOC`. `Select dimensions`. Oslobađa ih od objekata za koje su vezane; ništa se ne pomiče.

### CENTERMARK

Kratice: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, ponovno dok ne pritisnete Enter. Crta križ u središtu i četiri središnje linije do malo iza krivulje (tip linije CENTER), kao obične linije na trenutnom sloju; veličina dolazi iz veličine strelice i ukupnog mjerila trenutnih postavki kota, a okreće se s UCS-om. Ne prate kružnicu ako se ona pomakne.

### CENTERLINE

Kratice: `CL`. `Select first line`, `Select second line`. Crta liniju na pola puta između dviju linija (duž simetrale kad se sastaju), malo dužu od njih, u tipu linije CENTER. Obična linija: ne prati te dvije linije.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Nema kratica. Svaka pita `Enter new value for … <current>` i postavlja tu veličinu za **nove** kote: ukupno mjerilo, visina teksta, veličina strelice, decimalna mjesta (do 8), razmak oko teksta, produženje preko mjerne crte, pomak od ishodišta. Vidi [Postavljanje veličina kota](topic:dimension-settings).

### DIMLUNIT

Postavka kote: oblik duljine samo za nove kote (1 znanstveni, 2 decimalni, 3 inženjerski, 4 arhitektonski, 5 razlomci).

### DIMSTYLE and -DIMSTYLE

Kratice: `DST`, `DDIM`, `D`. Upravitelj stilova kota: {{ui:Postavi aktivno}}, {{ui:Novi…}}, {{ui:Izmijeni…}}, {{ui:Preimenuj…}}, {{ui:Izbriši}}, {{ui:Usporedi…}}, {{ui:Primijeni na odabrano}}. `-DIMSTYLE` u naredbenom retku: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Vidi [Postavljanje veličina kota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, zatim kote (ili one koje su već odabrane). New pita za tekst (`<>` = mjerenje); Rotate za kut (0 vraća tekst na mjesto); Oblique za kut pomoćnih crta od X osi (Enter = bez; samo linearne i poravnate kote). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Vidi [Postavljanje veličina kota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Kratice: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, ili s odabranim kotama `Units in the text of the selected dimensions`. Ispisuje izmjerenu duljinu u toj jedinici s jedinicom iza nje (DIMLFAC i sufiks DIMPOST); `D` vraća na jedinice crteža. Vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Kratice: `RC`. Ispisuje `Arc length: … Type: …`, zatim `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular pita `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand prati pokazivač do klika ili {{key:Enter}}; `O` pita `Select object` i `Reverse direction? [Yes/No] <N>` i pretvara objekt u oblak. `A` pita `Specify the length of each arc`. `R`, `P` i `F` biraju vrstu za sljedeći oblak. Rezultat je zatvorena polilinija lukova.

### MLEADER

Kratice: `MLD`; ili {{ui:Vodilica}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, zatim tekst u okviru na mjestu (ili, bez njega, `Enter text (an empty line ends)`). `Block` najprije pita za naziv bloka, a višestruka vodilica prikazuje taj blok umjesto teksta. Više linija vodilica: {{cmd:MLEADEREDIT}}. Sprema se kao prava višestruka vodilica u DWG; DXF čuva linije, strelicu i tekst koje crta.

### MLEADEREDIT

Kratice: `MLE`. `Select a multileader`, zatim `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: svaka točka dodaje liniju vodilice od nove strelice do istog mjesta sletanja, dok ne pritisnete Enter. `Remove leaders` zatim uklanja liniju vodilice na koju kliknete (višestruka vodilica zadržava barem jednu). `Block content` pita za naziv bloka i prikazuje taj blok umjesto teksta (pitaju se njegovi atributi); `Text content` vraća tekst. Svaka linija vodilice ima vlastitu ručku. DWG čuva svaku liniju vodilice i blok u jednoj višestrukoj vodilici.

### MLEADERALIGN

Kratice: `MLA`. `Select multileaders`, zatim `Select multileader to align to [Distribute/Spacing/Use current spacing]` i `Specify direction`. Pomiče mjesta sletanja ostalih višestrukih vodilica (i njihov tekst ili blok) na pravac kroz mjesto sletanja odabrane u tom smjeru; strelice ostaju tamo gdje pokazuju. `Spacing` ih također postavlja na jednak razmak; `Distribute` pita dvije točke i ravnomjerno ih raspoređuje među njima. Treba barem dvije višestruke vodilice.

### MLEADERCOLLECT

Kratice: `MLC`. `Select multileaders`, zatim `Specify collected multileader location [Vertical/Horizontal]` (Enter zadržava mjesto prve). Pravi jednu višestruku vodilicu od nekoliko: sadržaj bloka ide u novi blok koji drži svaki blok jedan pored drugoga ili jedan ispod drugoga; sadržaj teksta postaje jedna bilješka s retkom za svaki. Prva višestruka vodilica zadržava svoje linije vodilica; ostale se uklanjaju. Odbija miješanje teksta i sadržaja bloka.

### TABLE

Kratice: `TB`; ili {{ui:Bilješke}} › {{ui:Više}} › {{ui:Tablica}}. Pravi tablicu: jedan objekt koji pomičete, kopirate, zakrećete, skalirate i ispisujete kao bilo koji drugi, s ćelijama spremljenim kao podaci.

- `Number of data rows or [Paste/File/Style] <3>`, zatim `Number of columns <3>`, `Text height` i `Top left corner of the table`. Tablica dobiva redak naslova (jednu spojenu ćeliju) i redak zaglavlja iznad redaka podataka.
- `P`: tablica iz ćelija proračunske tablice u međuspremniku (tekst s tabulatorom između ćelija). Pritisak na {{key:Ctrl+V}} s takvim ćelijama u međuspremniku radi isto, osim ako je CadCraftova vlastita kopija novija (ili ako CadCraft ne može razlikovati: tada lijepi vlastitu kopiju i to kaže). `F`: tablica iz datoteke `.csv` ili datoteke odvojene tabulatorom. Prvi redak postaje redak zaglavlja; širine stupaca se prilagođavaju tekstu.
- `S`: odaberite stil tablice za ovu tablicu (vidi {{cmd:TABLESTYLE}}).
- Odbija broj redaka ili stupaca koji nije cijeli broj i više ćelija nego što tablica može imati (2.000 redaka, 200 stupaca, 40.000 ćelija).
- {{cmd:EXPLODE}} pretvara tablicu u linije i tekst. Spremljena kao DWG, tablica je prava tablica koju drugi programi mogu uređivati; spremljena kao DXF to je blok koji je crta, a CadCraft je ponovno otvara kao tablicu.

### TABLEDIT

Kratice: `TABLEEDIT`, `TABEDIT`; ili dvaput kliknite ćeliju. Uređuje tablicu.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Kliknite ćeliju, ili s odabranom tablicom upišite njezin naziv (`B3`: stupac B, redak 3; redak naslova je redak 1). U pregledniku se nad ćelijom otvara okvir: {{key:Enter}} zadržava tekst, {{key:Tab}} ide na sljedeću ćeliju, {{key:Alt+Enter}} počinje novi redak, {{key:Esc}} ostavlja ćeliju kakva je bila.
- Tekst koji počinje s `=` je formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, s `+ - * / ^`, zagradama i funkcijama kao što su `sqrt` i `round`. Ćelija pokazuje vrijednost; formula koja navodi vlastitu ćeliju, ćeliju izvan tablice ili ćeliju bez broja pokazuje `####`, a naredbeni redak kaže zašto.
- `R` / `C`: `Insert` ili `Delete` redaka ili stupaca na odabranoj ćeliji (koliko, i iznad ili ispod, lijevo ili desno). Formule slijede ćelije koje navode.
- `S`: širina stupca i visina retka. Redak nikad nije niži od svog teksta. Odabrana tablica također ima ručku na rubu svakog stupca i retka.
- `M`: spajanje od jedne odabrane ćelije do druge; `U`: razdvajanje. `A`: poravnanje (`TL` gore lijevo … `MC` sredina sredina … `BR` dolje desno). `H`: vlastita visina teksta ove ćelije (0 = onaj iz stila). `K`: pretvara redak u redak naslova, zaglavlja ili podataka. `CL`: prazni ćeliju.
- Odbija tablicu na zaključanom sloju, brisanje svakog retka ili stupca i spajanje koje bi jednu spojenu ćeliju presjeklo na dvoje.

### TABLESTYLE

Kratice: `TS`. Navodi stilove tablica s brojem tablica koje koristi svaki, zatim `Table style: [New/Set/Edit/Delete/Apply]`.

- Stil određuje visinu teksta i poravnanje redaka naslova, zaglavlja i podataka, razmak ćelije i koji se obrubi crtaju (vanjski, između redaka, između stupaca).
- `N` pravi stil iz trenutnog i čini ga aktivnim; `S` postavlja trenutni stil (nove tablice ga preuzimaju); `E` uređuje jedan: tablice koje ga koriste ponovno se crtaju; `A` daje odabranim tablicama trenutni stil; `D` briše jedan (ne Standard, ne trenutni; tablice koje su ga koristile zadržavaju svoj izgled).
- Stilovi se spremaju s crtežom (DWG i DXF).

### TABLEEXPORT

Sprema ono što tablica prikazuje kao datoteku CSV (formula kao svoju vrijednost). `Select a table`, ili je prvo odaberite. Tekstualne ćelije koje počinju s `=`, `+`, `-` ili `@` dobivaju vodeći `'` da ih proračunska tablica ne izvrši.

### TABLEPASTE

Kratica: `PASTETABLE`. Pravi tablicu iz ćelija proračunske tablice u međuspremniku, zatim pita za gornji lijevi kut. Isto kao {{cmd:TABLE}} › `Paste`.

### DATALINK

Kratica: `DL`. `Data link: [New/List/Remove] <New>`. `N` pita za datoteku CSV, postavlja njezinu tablicu i pamti naziv datoteke; `L` navodi veze s njihovom datotekom, veličinom, vremenom čitanja i brojem tablica koje ih koriste; `R` uklanja vezu (njezine tablice ostaju obične tablice).

### DATALINKUPDATE

Kratica: `DLU`. Ponovno čita datoteku veze podataka i ponovno puni tablice vezane uz nju (redci i stupci se dodaju ili uklanjaju da odgovaraju). Preglednik ne može sam otvoriti datoteku, pa traži da ponovno odaberete datoteku. S više veza pita koju.

### FIELD

Stavlja polje u crtež: tekst koji sam izračunava vrijednost. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: sada, ili spremljeni, stvoreni ili ispisani datum, i oblik (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: naziv datoteke, s ili bez nastavka. `S`: broj lista, njegov naslov ili koliko listova ima. `P`: svojstvo crteža po nazivu (vidi {{cmd:DWGPROPS}}). `O`: odaberite objekt, zatim što čitati (površina, duljina, opseg, polumjer, promjer, sloj, naziv, x, y, tekst, zakret, boja) i decimale. `E`: formula. `C`: tekst s kodovima upisanim kao što jesu, npr. `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Zatim `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: odabrani tekst dobiva polje dodano nakon onoga što sadrži; ćelija tablice isto; referenca bloka pita koji atribut; {{key:Enter}} pita visinu i točku za novi tekst.
- Na zaslonu polje ima svijetlosivu pozadinu; ispis i PDF je nikad nemaju. Ručno pisanje preko teksta polja prekida polje. Polje koje se ne može izračunati pokazuje `####`.
- Polje objekta pronalazi svoj objekt po ključu koji CadCraft čuva na objektima (Postavke › CadCraft › Datoteke prilagođene spajanju); s isključenim ključevima odbija.

### UPDATEFIELD

Kratice: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` postavlja kada se polja sama ažuriraju: upišite slova `O` open, `S` save, `P` plot, `R` regen (sva četiri za početak), ili `NONE`.

### DWGPROPS

Kratice: `DRAWINGPROPS`. Navodi svojstva crteža, zatim `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Prvih šest su ona koja prikazuje ploča {{ui:Svojstva crteža}}; `U` dodaje vaš vlastiti naziv i vrijednost, `R` uklanja jedan. Polja ih čitaju (`%<prop:title>%`, `%<prop:Client>%`) i odmah slijede. Odbija vlastiti naziv koji je jedan od ugrađenih ili sadrži `%`, `<`, `>`, navodnik ili obrnutu kosu crtu.

## Parametarski

Vidi [Ograničavanje crteža](topic:constraints) i [Korištenje parametara i jednadžbi](topic:parameters). Ograničenja rade na kartici {{ui:Model}}.

### GEOMCONSTRAINT i naredbe GC

Kratica `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, zatim upiti te naredbe.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (drugi se pomiče).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT i naredbe DC

Kratica `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (broj, izraz, ili `name=expression`).
- {{cmd:DCALIGNED}}: kao gore, s `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` pita tolerancije udaljenosti i kuta.
- {{cmd:DELCONSTRAINT}} (kratica `DELCON`): `Select objects`; njihova ograničenja nestaju.
- {{cmd:CONSTRAINTBAR}} (kratica `CBAR`): `Select objects [Showall/Hideall]`, zatim `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS i -PARAMETERS

{{cmd:PARAMETERS}} (kratice `PAR`, `PARAM`) otvara ploču {{ui:Parametri}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Kratica `SWMACRO`. Preuzima makro (.swb) koji ponovno gradi model kao jednu ograničenu skicu u SolidWorksu. Vidi [Premještanje skica u druge alate za dijelove i iz njih](topic:solidworks-sketches).

## Blokovi

### ANNOSCALE

Kratice: `CANNOSCALE`. Kaže mjerilo anotacija crteža i koliko anotativnih objekata sadrži, zatim pita `New annotation scale`: upišite `1:50`, `1:100`, `2:1`, goli broj (`50` je 1:50) ili naziv jednog od vlastitih mjerila crteža. Svaki anotativni tekst i kota mijenjaju veličinu tako da se isprintaju iste veličine na novom mjerilu, u jednom koraku poništavanja; objekti koji nisu anotativni ostaju netaknuti, kao i objekt koji čuva popis mjerila bez novog ({{cmd:OBJECTSCALE}}). Vidi [Jedinice, papiri i mjerila](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Kratice: `OBJSCALE`. `Select annotative objects`, zatim `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Anotativni tekst ili kota čuva popis mjerila anotacija. `Add` i `Delete` pitaju mjerilo (`1:50`, `2:1`, goli broj ili naziv jednog od vlastitih mjerila crteža); `Current scale` dodaje mjerilo anotacija crteža; `List` ispisuje mjerila svakog objekta. Viewport čije je mjerilo na popisu objekta prikazuje ga u veličini koja ispisuje njegovu visinu na papiru u tom mjerilu, na zaslonu i u ispisima. Zadnje mjerilo se ne može izbrisati. Objekti koji nisu anotativni se izostavljaju: prvo uključite Annotative u Svojstvima. Popisi se spremaju u DWG i DXF kao vlastiti podaci CadCraft-a. Vidi [Jedinice, papiri i mjerila](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Kratice: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Uključeno (kako crtež počinje): anotativni objekt se prikazuje i u viewportu ili u modelu čije mjerilo nije na njegovu popisu, u veličini koju ima. Isključeno: tamo se ne prikazuje i ne može se odabrati u modelu. Prekidač je jedan korak poništavanja; ne čuva se u datoteci.

### SCALELISTEDIT

Kratice: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]`, ponavlja se do {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit i Delete pitaju naziv mjerila. Vlastita mjerila crteža ulaze u popise mjerila viewporta i ispisa i spremaju se s crtežom. Vidi [Jedinice, papiri i mjerila](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: točke kroz koje krivulja prolazi; `Close`, `Undo`, zatim `Start tangent` i `End tangent` (točka, ili {{key:Enter}}). Method › Control vertices pita stupanj (1 do 5) i crta iz kontrolnog poligona. Object pretvara polilinije u splinove kroz njihove vrhove. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` za više objekata; linije, lukovi i splinovi nude se najprije kao polilinije. Vidi [Splinovi i polilinije](topic:splines).

### BLOCK

Kratice: `B`, `BMAKE`.

- `Enter block name`. Ako postoji: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Zamjenjuju se jednom referencom na novi blok.

### WBLOCK

Kratice: `W`, `-WBLOCK`. Zapisuje blok, neke objekte ili cijeli crtež kao novu datoteku DWG ili DXF. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (postaje ishodište novog crteža), `Select objects`, zatim `File format [DWG/DXF/R12 DXF]` i `File name for the new drawing`, zatim `What to do with the objects [Retain/Convert to block/Delete]`. Convert ih zamjenjuje jednom referencom na blok s nazivom datoteke; Delete ih uklanja.
- **Block**: `Block to write out`. Vlastiti objekti bloka, s njegovom baznom točkom kao ishodištem, uključujući ugniježđene blokove.
- **Entire drawing**: svaki objekt u prostoru modela. Listovi se ne zapisuju; za kopiju koja ih zadržava koristite {{cmd:SAVEAS}}.

Nova datoteka sadrži samo slojeve, tipove linija, stilove teksta i kota te blokove koje njezini objekti koriste, i jedinice crteža. Verzija DWG-a je ona koju je {{cmd:SAVEAS}} zadnji put koristio. U pregledniku se datoteka preuzima; u Studiju se otvara dijaloški okvir za spremanje.

### ATTDEF

Kratice: `ATT`, `DDATTDEF`, `-ATTDEF`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Definiraj atribut}}. Ispisuje načine, zatim `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` kad je konstantno), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} uzima definicije atributa u blok.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, ili dvaput kliknite referencu s atributima; {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi atribute}}): `Select a block reference with attributes`, zatim dijaloški okvir {{ui:Uredi atribute}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): ista referenca, zatim `<prompt> (<TAG>) <value>` za svaki atribut; {{key:Enter}} zadržava vrijednost. Vidi [Atributi](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Vrijednosti se zadržavaju; novi atributi dobivaju zadanu vrijednost, uklonjeni odlaze, a položaji se resetiraju.

### BATTMAN

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Upravitelj atributa}}. Dijaloški okvir: blok, atributi (oznaka, upit, zadana vrijednost, načini, redoslijed), {{ui:Ažuriraj reference (vrijednosti zadržane)}}, {{ui:Primijeni}}.

### REFEDIT and REFCLOSE

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi na mjestu}}. `REFEDIT`: `Select the block reference to edit in place` (ili odabir). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Spremi blok}} i {{ui:Odbaci}} na traci rade isto. Cijelo uređivanje je jedan korak poništavanja. Vidi [Atributi](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT and BCLOSE

`BE`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi blok}}. `Enter block name to edit <the selected reference's block>` otvara urednik blokova. `BCLOSE` pita `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Spremi blok}} i {{ui:Odbaci promjene}} na natpisnoj traci rade isto. Sve napravljeno u uredniku je jedan korak poništavanja.

### VIEWBASE

Kratica: `FLATSHOT`. Ravni 2D prikaz tijela na kartici 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, mjerilo (`1:20`, `2:1`; {{key:Enter}} uzima ono koje stane na list), zatim središte prikaza. Jedna referenca bloka, vidljivi rubovi na VIEW-VISIBLE, skriveni isprekidano na VIEW-HIDDEN. Vidi [Ravni prikazi na listu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Kratice: `-PUBLISH`; ili {{ui:Svi listovi u jednom PDF-u}} u dijaloškom okviru {{ui:Ispis u PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} ispisuje svaki list, `S` pita nazive odvojene zarezima. Jedan PDF, stranica i zabilješka za svaki list. Vidi [Svi listovi u jednom PDF-u](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Kratice: `SSM`, `SHEETSETMANAGER`. Dovodi vas do odjeljka {{ui:Skup listova}} na lijevoj ploči: listovi iz mnogo crteža, numerirani i naslovljeni, njihova zaglavlja popunjena iz skupa, objavljeni kao jedan PDF. Vidi [Skupovi listova](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): odaberite DWG ili DXF, zatim njegovu točku umetanja. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; s više veza odaberite jednu njezinu referencu ili upišite `N` i njezino ime. Vidi [Povezani crteži](topic:files#linked-drawings-external-references).

### COUNT

Kratice: `BCOUNT`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Broji blokove}}. `Select a block reference to count, or [All/Export] (Enter: All)`: odabir označava i broji svaku referencu tog bloka u ovom prostoru; {{key:Enter}} ili `A` navodi sve; `E` zatim `C` (brojevi) ili `A` (atributi) preuzima CSV. Vidi [Brojanje blokova i izvoz popisa](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Kratice: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (velika i mala slova nisu bitna). `F` pita DWG ili DXF, zatim cijeli crtež ili jedan njegov blok; naziv koji je već u upotrebi pita {{ui:Zadrži postojeće}} ili {{ui:Preimenuj}}. `L` otvara ploču knjižnice.
- `Specify insertion point [Scale/Rotate]`. `S` pita `Specify scale factor`, `R` pita `Specify rotation angle`; oboje se pamti.
- Kad blok već stoji uz objekte koji se ponavljaju drugdje bez njega, redak kaže koliko je mjesta predloženo, a upit dobiva `suGgested`: `G` ih prikazuje; kliknite blizu jednog da stavite blok tamo, `A` za sve, {{key:Enter}} za povratak. Preuzimaju zakret svojih susjeda i zadane vrijednosti atributa. Crteži s više od 20.000 objekata u otvorenom prostoru se ne pretražuju.
- Zatim `Enter <prompt> (<TAG>) <default>` za svaki atribut koji blok traži. Vidi [Atributi bloka](topic:attributes).

### LIBRARY

Kratice: `LIB`. Otvara ploču knjižnice: postavlja stavke, provjerava ažuriranja, zasluge knjižnice. Bez pitanja. Vidi [Umetanje iz datoteke ili knjižnice](topic:insert-from-file-and-library).

### STEELMEMBER

Kratice: `SMEMBER`; ili {{ui:3D štap}} na kartici {{ui:Standardno}} knjižnice. `Section size <W12x26>` (kako ga kartica navodi), zatim `Start point [Column]` i `End point`: čvrsti štap na kartici 3D između dviju točaka, stoji na tlu. `C` pita bazu stupca i njegovu visinu. Jedan korak poništavanja. Vidi [Postavljanje čeličnih profila i standardnih dijelova](topic:steel-and-standard-parts).

### PARTSLIST

Kratice: `PLIST`. `Top left corner of the parts list`, zatim `Text height <2.5>`: crta tablicu svakog standardnog dijela i čeličnog profila postavljenog iz knjižnice (brojevi stavki, količina, dio, standard, veličina, duljina, materijal, masa). Jedan korak poništavanja. Vidi [Postavljanje čeličnih profila i standardnih dijelova](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Kratice: `PU`. Uklanja definicije blokova koje ništa ne koristi. Bez pitanja.

### DELBLOCKS

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Izbriši blokove}}. `Select block to delete [Name/eXit]`: kliknite referencu bloka, ili `N` za popis blokova s filtrom (birate nekoliko), ili `X` / {{key:Enter}} za kraj. Svaka referenca odlazi — u modelu, na svakom listu i unutar drugih blokova — zatim definicija, a naredbeni redak kaže što je obrisano, a što nije moglo. Nenazvani blokovi i povezani crteži se ne nude. Upit se vraća za sljedeći blok; cijela naredba je jedan korak poništavanja.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} lijepi ono što ste kopirali ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) kao jedan blok: odaberite točku umetanja i na njoj ide jedna referenca na novi blok, odabrana. Blok dobiva vlastiti naziv (`A$C` i broj); {{cmd:RENAME}} mu daje vaš. Jedan korak poništavanja uklanja referencu i blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pita blok za zamjenu i blok koji ide na njegovo mjesto (`?` navodi blokove), zatim mijenja svaku referencu u modelu, na svakom listu i unutar drugih blokova. Svaka referenca zadržava svoje mjesto, mjerilo, zakret, sloj i vrijednosti atributa koje oba bloka imaju; atributi koje ima samo novi blok počinju sa zadanim vrijednostima, a kaže vam koje su vrijednosti odbačene. Kad ništa više ne koristi stari blok, nudi da ga ukloni. Odbija povezane crteže i zamjenu koja bi stavila blok unutar samog sebe. Jedan korak poništavanja.

### MINSERT

{{cmd:MINSERT}} postavlja blok u redove i stupce: naziv bloka, točku umetanja, mjerilo, zakret, broj redaka i stupaca, te razmake među njima. Cijeli skup se zakreće s zakretom. Svaki je zasebna referenca (najviše 10.000), pa se bilo koja može kasnije pomaknuti ili izbrisati.

### BLOCKSPALETTE

Kratice: `BLOCKSPAL`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Blocks panel}}. Prikazuje ploču {{ui:Blokovi}} s kursorom u njezinu filtru. Svaki blok ima malu sliku; onaj postavljen nedavno dolazi prvi. Dva gumba uz filtar prebacuju između popisa i mreže slika. Kliknite sliku (ili {{ui:Umetni}}) da postavite blok s {{cmd:INSERT}}, ili je povucite na crtež da je postavite tamo gdje je ispustite.

{{ui:Libraries}}, ispod popisa: {{ui:Add a drawing}} uzima vlastitu datoteku DWG ili DXF i navodi njezine blokove sa slikama, a cijeli crtež kao jedan blok. Postavljanje jednog kopira njegovu definiciju (i blokove koje ugnježđuje, te njihove slojeve) u ovaj crtež, kao što to radi opcija `File` naredbe {{cmd:INSERT}}; blok koji je već ovdje s istom definicijom koristi se bez pitanja, a onaj istog naziva koji se razlikuje pita {{ui:Zadrži postojeće}} ili {{ui:Preimenuj}}. U pregledniku datoteka ostaje dok se stranica ne zatvori. U CadCraft Studiju {{ui:Add a folder}} navodi crteže u mapi, svaki se otvara kad kliknete na njega, a datoteke i mape se pamte. Mali x uklanja knjižnicu s popisa; datoteka se ne dira. Zajednička {{ui:Library}} je nešto drugo: vidi [Umetanje iz datoteke ili knjižnice](topic:insert-from-file-and-library).

### BCONVERT

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Convert repeats to blocks}}. Pronalazi geometriju koja se ponavlja i pretvara svaku kopiju u referencu na jedan blok.

- `Select the objects that repeat, or [Block]`: objekti jedne kopije. `B` umjesto toga imenuje postojeći blok, da pronađe slobodne kopije njegovih objekata.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` i `P` mijenjaju ono što se računa kao kopija; {{key:Enter}} pretražuje. Postavke se pamte.
- `Name for the new block <Block1>`, zatim `Specify the block's base point` ({{key:Enter}} uzima donji lijevi kut odabira).
- Kaže koliko je drugih skupova objekata iste geometrije, označava sve što bi zamijenio i pita `Yes/No`.

Kopija su isti objekti pomaknuti i zakrenuti bilo kojim kutom (i zrcaljeni ili skalirani jednim faktorom kad su ti uključeni): svaki objekt mora imati svoj par, unutar milijunitog dijela veličine odabira. Svaka referenca dobiva svoj zakret i mjerilo (zrcaljena dobiva negativno mjerilo po Y), i sloj koji su objekti dijelili. Objekti na zaključanim slojevima ostaju netaknuti i broje se. Pretražuje otvoreni prostor (model ili otvoreni list). Vrlo velika pretraga staje na granici rada i kaže to. Jedan korak poništavanja.

### BSEARCH

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Pronađi blokove}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: dio naziva bloka, ili uzorak s `*` i `?`. Navodi svaki blok s njegovim referencama ovdje i u cijelom crtežu.
- `A`: vrijednost atributa, ili `TAG=value`. Navodi blokove čije reference je drže, s pronađenim vrijednostima. Konstantni atributi se broje.
- `G`: odaberite objekte, ili jednu referencu bloka, i navode se blokovi čiji je oblik barem 85% sličan, najbolji prvi. Veličina, zakret i zrcaljenje se ne računaju. Mjerilo uspoređuje udaljenosti među točkama raspoređenim duž obrisa, pa nalazi dvojnike; za točne kopije koristite {{cmd:BCONVERT}}.

Reference pronađene u otvorenom prostoru se odabiru, spremne za sljedeću naredbu.

### BREPLACE

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` zamjenjuje reference blokova koje odaberete blokom koji imenujete; `A` pita za blok i njegovu zamjenu i mijenja svaku referencu, kao što to radi {{cmd:BLOCKREPLACE}} (isti kôd). Referenca zadržava svoje mjesto, mjerilo, zakret, sloj i vrijednosti atributa koje oba bloka imaju; vrijednosti za koje novi blok nema mjesta se odbacuju i navode. `?` navodi blokove. Jedan korak poništavanja.

### DATAEXTRACTION

Kratice: `EATTEXT`, `DX`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Data extraction}}. Navodi blokove, njihove atribute i svojstva objekata kao tablicu ili datoteku CSV.

- Radi nad odabirom, ili pita `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` kad odabir sadrži oboje. Nenazvani blokovi, tablice i sastavnice se nikad ne navode.
- Ispisuje stupce za odabir (naziv, vrsta, sloj, X, Y, zakret, mjerilo, duljina, površina, boja, tip linije, prostor i jedan po oznaci atributa), zatim `Columns, by name or number with commas between`. {{key:Enter}} uzima označene: naziv i svaki atribut za blokove; vrsta, sloj i duljina za objekte.
- `Put identical rows together with a count? [Yes/No] <Yes>`, zatim `Put the list in a: [Table/Csv] <Table>`. Tablica je obična tablica ({{cmd:TABLEDIT}} je uređuje) i nije živa: pokrenite naredbu ponovno kad se crtež promijeni.
- Odbija stupac koji nije na popisu. Tablica drži 1.999 redaka podataka; datoteka CSV ih prima sve.

### COUNTTABLE

Broji reference blokova odabira (ili otvorenog prostora) i stavlja brojeve u tablicu (`Block`, `Count`) ili datoteku CSV. Za brojanje koje samo prati crtež vidi {{cmd:BOMTABLE}}.

## Listovi i ispis

### LAYOUT

Kratice: `LO`, `NEWLAYOUT`; ili gumb {{ui:+}} ispod crteža. Novi list s obrubom, zaglavljem i jednim viewportom, na ISO A3 (ili Tabloid za crteže u inčima ili stopama). Bez pitanja.

### MVIEW

Kratice: `MV`. Samo na listu ({{cmd:VPORTS}} na listu radi isto).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Viewport prikazuje cijeli model u standardnom mjerilu.
- `P` (Polygonal): kliknite kutove obrisa (`Undo`, `Close`), {{key:Enter}} kad završite. Odbija manje od tri kuta.
- `O` (Object): `Select a closed object for the viewport's outline`: zatvorena polilinija, kružnica ili elipsa na listu. Viewport preuzima njezin oblik (krivulje kao kratki ravni dijelovi); objekt ostaje kakav je bio. Odbija objekt koji nije zatvoren.

### VPCLIP

Reže viewport koji je već na listu. `Select viewport to clip` (ili ga prvo odaberite), zatim `Select the object to clip to [Polygonal/Delete]`:

- Kliknite zatvorenu polilinju, kružnicu ili elipsu, ili {{key:Enter}} (ili `P`) da kliknete kutove poligona.
- `D` (Delete, nudi se kad je viewport izrezan) ponovno ga pretvara u pravokutnik: okvir oko obrisa koji je imao.
- Što viewport prikazuje ne miče se na papiru, a njegovo mjerilo ostaje. Model se crta i ispisuje samo unutar obrisa, a rub ga slijedi. Jedan korak poništavanja.
- Izrezani viewport ima ručku na svakom kutu svog obrisa, uz svoje središte i četiri kuta svog okvira (povlačenje kuta okvira rasteže obris s njim). Svojstva prikazuju Outline: Rectangle, ili Clipped s brojem kutova.
- Datoteke DWG i DXF 2000 čuvaju obris za CadCraft. Drugi programi otvaraju viewport kao pravokutnik oko njega; DXF R12 čuva samo pravokutnik.
- Na kartici modela kaže da su viewporti na listovima.

### VPORTS

Kratice: `VIEWPORTS`. {{cmd:SPLIT}} je isto i s lista, a {{ui:Pogled}} › {{ui:Više}} › {{ui:Podijeli jedno do drugog}}, {{ui:Podijeli jedno iznad drugog}}, {{ui:Četiri ploče}}, {{ui:Jedna ploča}} ih pokreću. Na modelu: `Enter number of panes [SIngle/2/3/4] <3>`; `2` pita `[Horizontal/Vertical] <Vertical>` (Vertical = jedno do drugog), `3` pita `[Left/Right] <Right>` (gdje ide velika ploča). Svaka ploča čuva svoj pogled i prostor; klik čini ploču aktivnom. Na listu je to {{cmd:MVIEW}}. Vidi [Podjela zaslona](topic:split-screen).

### VPVIEW

Nema kratica. Samo na listu.

- `Select viewport` (preskače se ako je jedan odabran), zatim na modelu: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Nema kratica. Vaš vlastiti koordinatni sustav; nije uređivanje. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: točka je novo ishodište, zatim `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: ishodište, točka na pozitivnoj X osi, točka na pozitivnoj strani Y. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` i naziv. Prikaz se okreće tako da je nova X os vodoravna. Vidi [Okretanje prikaza i korištenje vlastitih koordinata](topic:ucs-and-turned-view).

### PLAN

Nema kratica. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: okreće pogled aktivne ploče tako da je X os UCS-a (ili svijeta) vodoravna. Ništa u crtežu se ne pomiče.

### TURNLEFT, TURNRIGHT, TURNWORLD

Nema kratica; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Okreni prikaz 90° ulijevo}}, {{ui:Okreni prikaz 90° udesno}}, {{ui:Natrag na svijet}}. Isto kao `UCS Z -90`, `UCS Z 90` i `UCS W`, s pratećim prikazom.

### VPLAYER

Nema kratica. Na listu ili unutar viewporta. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` pitaju nazive slojeva (zarezi, zamjenski znakovi `*` i `?`), zatim viewporte `[All/Select/Current] <Current>`; Reset vraća svaki sloj na njegovu zadanu postavku „zamrznut u novim viewportima”; `V` postavlja tu zadanu (`[Frozen/Thawed]`), koju koristi {{cmd:MVIEW}}. `?` navodi slojeve zamrznute u trenutnom viewportu. Stupac viewporta na ploči Slojevi radi isto za jedan viewport. Vidi [Zamrzavanje sloja u jednom viewportu](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Kratice: `MS`; ili dvaput kliknite unutar viewporta. Samo na listu. Radite na modelu kroz viewport: onaj odabran, jedini na listu, ili `Click inside the viewport to work in`. Pomak i zumiranje unutra mijenjaju pogled viewporta (viewport zaključan za prikaz ga zadržava, a list se pomiče); novi pogled se zapisuje kao jedan korak poništavanja. Vidi [Rad na modelu kroz viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Kratice: `PS`; ili dvaput kliknite izvan viewporta, ili kliknite karticu ispod crteža. Natrag na list.

### PLOT

Kratice: `PRINT`, `PUBLISH`, `EXPORTPDF`; ili {{key:Mod+P}}. Otvara dijaloški okvir {{ui:Ispis u PDF}}. Vidi [Ispis u PDF](topic:plot-pdf).

### PLOTSTYLES

Kratice: `STYLESMANAGER`, `PSTABLES`; ili {{ui:Uredi tablice…}} u dijaloškom okviru {{ui:Ispis u PDF}}. Otvara {{ui:Tablice stilova ispisa}}: kako se svaka boja ispisuje (boja, siva, tinta, debljina linije), čuva se s crtežom. Vidi [Tablice stilova ispisa](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} pomiče objekte između lista i modela kroz viewport, skalirane i zakrenute da izgledaju isto s druge strane. Na listu odaberite objekte i idu u model (odaberite viewport kad list ima više njih). Dok radite na modelu kroz viewport ({{cmd:MSPACE}}), odabrani objekti dolaze na list. Kaže koliko su puta veći ili manji postali. Viewporti ostaju na svom listu. Jedan korak poništavanja.

### ISODRAFT

{{cmd:ISODRAFT}} uključuje ili isključuje izometrijsko crtanje `ON` ili `OFF`, ili izravno prelazi na ravninu `Left`, `Top` ili `Right`. Dok je uključeno: Ortho ({{key:F8}}) drži linije uz dvije osi ravnine (lijeva: 90° i 150°; gornja: 30° i 150°; desna: 30° i 90°), polarno praćenje ({{key:F10}}) slijedi iste osi, hvatanje na mrežu ({{key:F9}}) koristi izometrijsku mrežu, a mreža ({{key:F7}}) se crta linijama pod 30°, 90° i 150°. {{cmd:ELLIPSE}} dobiva `Isocircle`: zadajte središte i polumjer (ili `Diameter`) i crta elipsu koju kružnica prikazuje na trenutnoj ravnini. Crtež ostaje ravan: to su pomagala za crtanje slikovitog prikaza, a ne 3D model. Postavka vrijedi za ovu sesiju i ne sprema se u datoteku.

### ISOPLANE

{{cmd:ISOPLANE}} bira ravninu na kojoj radi izometrijsko crtanje: `Left`, `Top` ili `Right`. Enter prelazi na sljedeću ravninu. Dok je izometrijsko crtanje uključeno, {{key:F5}} radi isto usred naredbe; dok je isključeno, {{key:F5}} prepušta pregledniku.

## Upiti

### CAL

Ispisuje vrijednost izračuna, kako bi bila pročitana bilo gdje gdje se duljina upisuje.

- `Expression`: upišite je, na primjer `12'6"+3/4"` ili `(24'-0")/3`, i pritisnite {{key:Enter}}. CadCraft ispisuje `= 12'-6 3/4"   (150.75 drawing units)`. Vidi [Aritmetika u upisanoj vrijednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Kratica: `DI`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Izmjeri udaljenost}}.

- `Specify first point`, `Specify second point`. Ispisuje udaljenost, kut, Delta X i Delta Y.

### AREA

Kratica: `AA`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Površina}}. Ispisuje površinu i opseg.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Kliknite ili upišite kutove; kod `Specify next point (Enter closes) [Undo]` pritisnite {{key:Enter}} da zatvorite obris. `U` poništava zadnji kut.
  - {{key:Enter}} ili `O`, zatim `Select object`: kružnica (ispisuje opseg), elipsa, polilinija (otvorena se za površinu zatvara ravnom linijom, a njezina duljina se ispisuje) ili šrafura (rupe se oduzimaju).
  - `A` (Add area) i `S` (Subtract area) čuvaju tekući zbroj: upit počinje s `(ADD mode)` ili `(SUBTRACT mode)`, svaka površina se dodaje ili oduzima, i `Total area = …` se ispisuje poslije svake. U tim načinima `O` bira objekte do {{key:Enter}}, a {{key:Enter}} na prvom upitu završava naredbu.

### MEASUREGEOM

Kratica: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; nakon svakog mjerenja ponovno pita, a zadana je `eXit`.

`Quick` mjeri oko pokazivača dok ga pomičete: udaljenost do najbližeg objekta desno, gore, lijevo i dolje (duž osi trenutnog UCS-a), crtano dok idete, i kut gdje su dva od tih susjeda ravna i spajaju se. Klik zapisuje četiri udaljenosti, čistu širinu i visinu te kutove u povijest; Enter vraća na opcije. Čita ono što je na zaslonu.

- `D`: dvije točke, kao {{cmd:DIST}}.
- `R`: `Select arc or circle`; ispisuje polumjer i promjer.
- `A`: luk (njegov uključeni kut), linija i zatim druga linija (kut između njih, prema njihovim dalekim krajevima), ili {{key:Enter}} i tri točke (vrh, zatim dva kraja).
- `AR`: kao {{cmd:AREA}}, jedna površina.

### ID

Nema kratica. `Specify point`; ispisuje njezin X i Y.

### LIST

Kratice: `LI`, `LS`. `Select objects`; ispisuje vrstu, sloj i glavne mjere svakog objekta.

### MASSPROP

{{cmd:MASSPROP}} daje svojstva presjeka regija i zatvorenih objekata koje odaberete, zajedno: površina, opseg, okvir, težište, momenti inercije oko X i Y osi kroz ishodište, produkt inercije, polumjeri inercije, isti momenti oko težišta te glavni momenti s smjerovima njihovih osi. Rupe u regiji se broje kao rupe. Brojke su u jedinicama crteža i točne su za obrise sastavljene od linija i lukova; elipse i splinovi mjere se kao kratki ravni segmenti, i to se kaže. Nakon izvješća pita želite li ga zapisati u tekstualnu datoteku. Objekti koji nisu zatvoreni se izostavljaju, i kaže se koliko ih je.

## Pogled, datoteka i ostalo

### ZOOM

Kratice: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Kliknite dva kuta za prozor. `E`, `A` ili Enter: cijeli crtež.
- `P` (Previous, ili {{ui:Prethodno}} na alatnoj traci) vraća na prethodni pogled, do 10 pogleda po kartici; niz koraka kotačića ili jedno pomicanje broji se kao jedan pogled.
- Broj kao `2`, `2x` ili `0.5x` (ili `S`, pa broj) zumira ili odzumira za taj faktor oko sredine zaslona.
- `C` pita `Specify center point` i `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT and the PDF commands

Kratice: `PDFATT` za {{cmd:PDFATTACH}}, `PDFIM` za {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} stavlja stranicu PDF-a pod crtež (datoteka, stranica, točka umetanja, mjerilo, zakret); {{cmd:PDFIMPORT}} pretvara linije, krivulje, ispune i tekst stranice u objekte crteža na slojevima nazvanim po PDF-u, u stvarnoj veličini, upisanom mjerilu ili skalirano iz dviju točaka i stvarne udaljenosti. {{cmd:PDFCLIP}} reže podlogu, {{cmd:PDFADJUST}} postavlja blijeđenje, kontrast, jednobojno ili je isključuje, {{cmd:PDFLAYERS}} uključuje i isključuje vlastite slojeve PDF-a, a {{cmd:PDF}} daje CadCraftu datoteke koje podloge crteža ponovno koriste. Vidi [PDF podloge](topic:pdf-underlay).

### AUTOCOMPLETE

Kratica: `AUTOC`. Automatsko dovršavanje crteža: kad nijedna naredba ne radi, siva sjena pokazuje što uzorci vašeg crteža kažu da slijedi. {{cmd:AUTOCOMPLETE}} ga uključuje `On` ili isključuje `Off` (također Postavke › CadCraft) ili `Show` prikazuje što bi predložio sada. **Tab** crta sjenu kao jedan korak poništavanja, **Esc** je odbacuje dok se crtež ne promijeni. Pronalazi tri stvari u najnovijim objektima: sljedeću kopiju nečega nacrtanog dvaput ili više puta na jednakom koraku (stupci, stupovi, čelo i gazište stubišta), sljedeće korake stubišta u polilniji, te nedostajuću stranu sobe ili lanca zidova. Usred {{cmd:LINE}} ili {{cmd:PLINE}} sjena je **sljedeća točka**: sljedeći korak stubišta (čelo, gazište, čelo …), četvrti kut pravokutnika, točka koja ga zatvara, ili još jedan jednaki korak. Približite kursor i pritisnite **Tab**, kao da ste tamo kliknuli; nastavite ili pritisnite Enter. Računa se na ovom računalu po pravilima, bez modela.

### AUTOSHEET

Kratica: `ASH`. Listovi koji se sami slažu. {{cmd:AUTOSHEET}} uzima dijelove crteža (vaše imenovane poglede, ili zasebne dijelove modela, ili cijeli model), bira veličinu papira (ili onu koju date), daje svakom dijelu standardno mjerilo (jedno za sve, ili najveće koje svaki može primiti) i smješta poglede u redove na novim listovima, sa zaglavljem i natpisom (naziv i mjerilo) ispod svakog. Što ne stane na jedan list dobiva svoj list. Jedan korak poništavanja. Računa se na ovom računalu po pravilima, bez modela.

### PHOTOSKETCH

Kratica: `PSK`. Fotografija skice u crtež. Odaberite fotografiju (JPEG, PNG ili TIFF) ručne skice na listu papira. {{cmd:PHOTOSKETCH}} nalazi četiri kuta lista, ispravlja perspektivu, uzima veličinu papira koju imenujete (`Paper`, ili najbližu standardnu) i `Scale` skice (1 : n), zatim ocrtava linije olovke u linije, lukove i kružnice, s slojem za svaku boju olovke (crna, crvena, plava, zelena). Ako ne može naći rub papira, uzima cijelu fotografiju kao list i to kaže. Pisanje se izostavlja. Jedan korak poništavanja. Radi na ovom računalu klasičnom obradom slike, bez modela i bez slanja ičega nigdje. Vidi i naredbe za skenirane crteže.

### AUTODIM

Kratica: `ADIM`. Automatsko kotiranje po pravilima. {{cmd:AUTODIM}} kotira odabrane objekte (ili cijeli crtež) prema njihovim vodoravnim i okomitim rubovima: lanac kota uz strane koje birate (`Sides`), jedna ukupna kota izvan njega, širina svakog otvora (razmak između zidnih linija u nizu), promjer za svaku veličinu rupe, i uz `Grid` razmak među linijama mreže. Kota koja je već tu ne pravi se ponovno. Jedan korak poništavanja. Računa se na ovom računalu po pravilima, bez modela.

### GRIDMOVE

Kratica: `GM`. Pomicanje linije mreže nosi cijeli sklop. {{cmd:GRIDMOVE}} pomiče liniju mreže (liniju na sloju čiji naziv kaže grid ili axis) i ono što na njoj visi: zidovi s krajem na liniji rastežu se da je slijede, zidovi uz nju pomiču se cijeli, stupci (referencije blokova i kružnice na liniji), njezin balon i oznaka se pomiču, a kote čije točke sjede na njoj mjere novi razmak. Zadajte dvije točke (broji se samo dio preko linije) ili `Distance`. Jedan korak poništavanja vraća sve. Računa se po pravilima na ovom računalu.

### DETAILS

Kratica: `DET`. Detalji koji nalaze vas. {{cmd:DETAILS}} čuva vlastite detalje vaše tvrtke: `Add` stavlja blok ovog crteža na popis, `List` i `Remove` upravljaju njime, a `Find` ih rangira za ono što je odabrano (ili za ono što ste zadnje nacrtali) prema riječima na njihovim slojevima, nazivima blokova, uzorcima šrafura i bilješkama, u odnosu na naziv i bilješke svakog detalja, pa vaš detalj parapeta nađe vaš detalj prozorskog praga. Odaberite broj i točku da ga postavite. Uz uključen `Hint` (također Postavke › CadCraft), odabir nečega što detalj podudara stavlja jedan redak u statusnu traku. Popis se čuva u ovom pregledniku, na ovom računalu, i taj popis se pretražuje. `Share` ga stavlja i u vašu mapu Dokumenti (`.cadcraft/firm-details.json`, s crtežom svakog bloka): `Pull` dodaje ono što vaš tim ima a vi nemate, `Push` dodaje ono što vi imate a oni nemaju, `Both` radi oboje, a ništa se nikad ne uklanja s nijedne strane. Prvo otvorite mapu Dokumenti ({{cmd:DOCUMENTS}}); kad je ta mapa mapa Team Cloud Plan, cijeli tim dijeli jedan popis. Stavka detalja na ploči Knjižnica ima gumb **Add to my firm's details** koji je stavlja na isti popis. Računa se na ovom računalu po riječima, bez modela.

### SKETCHFIX

Kratica: `SKF`. Skice olovkom postaju precizna geometrija. Pritisnite i povucite jedan slobodnoručni potez odjednom (olovkom, mišem ili prstom), zatim Enter. Svaki potez se čita kao linija, kružnica, luk, pravokutnik ili polilinija: gotovo vodoravne i okomite linije postaju točno vodoravne i okomite, zatvoren okrugao potez postaje kružnica, zatvoren potez s četiri pravokutna kuta postaje pravokutnik, a krajevi poteza se privlače jedan drugome i krajevima koji su već u crtežu. Jedan korak poništavanja. Računa se na ovom računalu po pravilima, bez modela.

### SCANATTACH and the scanned-drawing commands

Kratice: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nema nijednu. Rade na slici, svaka s jednim korakom poništavanja. {{cmd:SCANATTACH}} umeće PNG, JPEG, TIFF (jednu ili sve stranice) ili stranicu PDF-a koja je slika. {{cmd:SCANSCALE}} skalira list iz dviju odabranih točaka i stvarne udaljenosti. {{cmd:SCANALIGN}} ga pomiče i zakreće na dvije točke (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} prikazuje kut dugih linija lista i zakreće list kad `Accept` ili zadate `Value`. {{cmd:SCANCLEAN}} ga pretvara u crno-bijeli (`Threshold` Auto/Adaptive/Level, `Specks`) i `Run`. {{cmd:SCANCROP}} zadržava prozor. {{cmd:SCANERASE}} briše `Rectangle`, `Polygon` ili `Lasso`. {{cmd:SCANTRACE}} ocrtava linije i lukove na novi sloj (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) i kaže što je našao i što je ostavio kao raster. {{cmd:SCANINFO}} navodi izvornu datoteku i korake. {{cmd:RASTERSNAP}} uključuje ili isključuje hvatanje na linije skeniranih listova. Vidi temu Skenirani crteži i ocrtavanje.

### REGEN and REGENALL

Kratice: `RE` za {{cmd:REGEN}}, `REA` za {{cmd:REGENALL}}. Ponovno gradi ono što je nacrtano na zaslonu iz crteža: {{cmd:REGEN}} karticu koju gledate (na listu, i model koji njegovi viewporti prikazuju), {{cmd:REGENALL}} svaku karticu, svaku ploču podijeljenog zaslona i svaki otvoreni crtež. Koristite ih kad slika izgleda zastarjelo nakon skriptirane ili vrlo velike promjene, ili kad ju je pomoćnik uredio; sam crtež se ne dira, pa nema što poništiti.

### NAMEDVIEW

Kratice: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, zatim naziv pogleda. `S` sprema pogled na zaslonu, `W` prozor koji odaberete, `R` prikazuje spremljen pogled, `D` briše jedan, `?` navodi poglede ove kartice. Spremanje pod postojećim nazivom ga zamjenjuje; svaka promjena je jedan korak poništavanja. Pogledi pripadaju kartici na kojoj su spremljeni. DWG i DXF datoteke ih čuvaju (tablica VIEW); pogledi lista se vraćaju na prvi list, jer datoteka ne kaže kojem pripadaju.

### UNDO and REDO

Kratice: `U` za {{cmd:UNDO}}; {{cmd:REDO}} nema nijednu. Također {{key:Mod+Z}} i {{key:Mod+Y}}.

### LAYER

Kratice: `LA`. Skače na ploču {{ui:Slojevi}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` ili naziv (`?` navodi ih: Continuous, one crteža, i DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE s njihovim veličinama `2` (pola) i `X2` (dvostruko)). {{cmd:LWEIGHT}} (`LW`): debljina linije za nove objekte u mm, ili `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): mjerilo tipa linije crteža (s poništavanjem). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — isto kao gumb {{ui:LWT}} u statusnoj traci. Vidi [Debljine linija i tipovi linija](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, zatim novi naziv; objekti ili reference slijede. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` do {{key:Enter}}, zatim `Select object on target layer or [Name]` i `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, zatim `Y`: sloj i svaki objekt na njemu odlaze (ne sloj 0, DEFPOINTS ni trenutni sloj). Jedan korak poništavanja za svaku. Vidi [Organiziranje crteža slojevima](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Slojevi odabirom objekata; također u izborniku {{ui:Alati}} ploče {{ui:Slojevi}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, zatim {{key:Enter}}: svaki drugi sloj se isključuje. {{cmd:LAYUNISO}} ih ponovno uključuje. {{cmd:LAYOFF}} i {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (ili frozen), iznova; `U` poništava zadnji, {{key:Enter}} završava. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} uključuje svaki sloj, {{cmd:LAYTHW}} odmrzava svaki sloj. Svaka naredba je jedan korak poništavanja. Vidi [Organiziranje crteža slojevima](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} počinje prazan crtež, a {{cmd:OPEN}} otvara DWG ili DXF, svaki u vlastitoj kartici iznad crteža (netaknuti novi crtež se koristi umjesto nove kartice). Zatvaranje kartice s nespremljenim promjenama prvo pita. Vidi [Podjela zaslona](topic:split-screen).

{{cmd:SAVE}} (kratica `QSAVE`, također {{key:Mod+S}}) preuzima kopiju u formatu crteža: DWG ako je otvoren iz DWG-a, DXF ako iz DXF-a. Novi crtež koristi format koji je zadnji put odabran u Spremi kao u ovom pregledniku, inače DWG.

{{cmd:SAVEAS}} (također {{key:Mod+Shift+S}}) otvara dijaloški okvir {{ui:Spremi kopiju kao}}: odaberite {{ui:DWG}} (i njegovu {{ui:Verziju}}), {{ui:DXF R12}} ili {{ui:DXF 2000}}, zatim {{ui:Spremi}}. Izbor ostaje za ovaj crtež i za nove crteže u ovom pregledniku.

{{cmd:DXFOUT}} uvijek preuzima kopiju DXF R12, bez mijenjanja formata koji koristi {{cmd:SAVE}}.

Vidi [Datoteke: što se otvara, što sprema](topic:files#saving).

### TOUR

Kratice: `TUTORIAL`. Ponovno pokreće vodič prvog crteža u šest koraka. Vidi [Početak rada](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Kratice: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Vidi [Postavke](topic:settings#toolbar-position).

### COMMANDLINE

Kratice: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: usidrava ili odvaja naredbeni redak, čini ga jednim retkom, pita koliko redaka povijesti prikazati (0 do 12), ili otvara povijest. Vidi [Postavke](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: trake iznad crteža kakve su bile, ili kompaktne. Vidi [Postavke](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: korak na koji se poravnavaju linije {{ui:Polar}} praćenja (više od 0, do 180). Čuva se u ovom pregledniku.

### UNITS

Kratice: `UN`. Kako se duljine zapisuju i upisuju.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural i Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Ostali: `Enter number of decimal places (0 to 8)`.

Nove kote je slijede. Jedan korak poništavanja. Isto kao {{ui:Oblik duljine}} i {{ui:Preciznost}} u {{ui:Trenutne postavke}}; vidi [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Kratice: `GDS`. Prikazuje IC layout (datoteku GDSII toka): laboratorijski eksperiment, samo za pregled i mjerenje.

- Birač datoteka uzima datoteku `.gds`; s više gornjih ćelija, `Enter the top cell to draw`.
- Svaki sloj i vrsta podataka postaje sloj crteža (`GDS 1`, `GDS 2/5`), reference i nizovi se postavljaju ravno, u korisničkoj jedinici datoteke (obično mikrometri). Jedan korak poništavanja. Ništa se ne simulira ni ne provjerava, a datoteka se ne zapisuje natrag.

### DIAGRAM

Kratice: `TEXTDIAGRAM`, `T2D`. Dijagram iz teksta.

- Okvir prima tekst (ili jedan redak s `;` između iskaza u naredbenom retku): Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili popis od–do.
- `Specify the top left corner of the diagram`, zatim `Specify the text height`.

Blokovi i spojnice su obični objekti na sloju `Diagram`, odabrani kad završi. Jedan korak poništavanja. Vidi [Crtanje dijagrama iz teksta](topic:text-to-diagram).

### OLELIST

Kratice: `OLES`. OLE objekti koje DWG nosi, a CadCraft ih sam ne može postaviti.

- Navodi svaki: broj, vrstu, veličinu, je li spremio sliku.
- `Enter an option [Place/eXit] <eXit>`: Place pita broj, donji lijevi kut i širinu, i crta okvir sa slikom. Jedan korak poništavanja; sačuvani objekt se ne mijenja. Vidi [Slike](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Kratice: `SHX`. Vaši vlastiti SHX fontovi.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} čita svaku `.shx` datoteku u mapi (CadCraft Studio; ponovno pri svakom pokretanju), {{ui:Files}} uzima odabrane datoteke (preglednik), {{ui:Reverse}} slaže slova jednog fonta od zadnjeg prema prvom. Stilovi teksta koji navode učitan font crtaju u njemu. Vidi [Crtanje teksta vlastitim SHX fontovima](topic:shx-fonts).

### LIMITS

Kolika je crtež zamišljen da bude.

- `Specify lower left corner or [ON/OFF] <current>`: točka, `ON` ili `OFF`.
- `Specify upper right corner <current>`.

Mreža ispunjava granice, {{cmd:ZOOM}} All ih prikazuje, a uz uključene granice točka izvan njih se odbija (`**Outside limits`). Jedan korak poništavanja; sprema se u DWG i DXF. Vidi [Postavljanje granica crteža](topic:drawing-limits).

### AUNITS

Kratice: `ANGUNITS`. Kako se kutovi prikazuju i upisuju.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ili za druga dva `Enter precision` (0 stupnjeva, 2 minute, 4 sekunde, 5 do 8 decimala sekunde).

Jedan korak poništavanja; sprema se u DWG i DXF. Isto kao {{ui:Oblik kuta}} u {{ui:Trenutne postavke}}. Vidi [Upisivanje i prikazivanje smjerova i kutova](topic:bearings-and-angles).

### APPLOAD

Kratice: `AP`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Učitaj aplikaciju…}}. Dijaloški okvir {{ui:Učitaj aplikacije}}: učitava `.lsp` rutine i `.dcl` datoteke dijaloga, uklanja ih, ponovno ih učitava iz povijesti, te Startup Suite. Naredbe `(defun c:NAME …)` rutine tada rade kao bilo koja druga. Vidi [Učitavanje aplikacija](topic:load-applications) i [Pokretanje LISP rutina](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Uredi aliase…}}) otvara vašu datoteku kratica (retci `ALIAS, *COMMAND`); {{ui:Spremi}} ih primjenjuje. {{cmd:REINIT}} ih primjenjuje ponovno. Vidi [Uređivanje kratica naredbi](topic:command-aliases).

### LISPEDIT

Kratice: `VLIDE`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:LISP editor}}. Otvara LISP urednik, prozor koji ostaje otvoren uz crtež.

- Tekst: brojevi redaka, partner zagrade na kursoru označen (crveno kad ga nema), {{key:Enter}} uvlači novi redak ispod otvorene zagrade, {{key:Tab}} upisuje dva razmaka, {{key:Esc}} napušta tekst.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): čita svaki oblik, kao što {{cmd:APPLOAD}} radi s datotekom, i stvara njegove `c:` naredbe. Datoteka se pojavljuje na popisu {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): izvršava odabrane oblike, ili oblik u kojem je kursor.
- {{ui:Stop}}: završava rutinu koja se izvodi.
- {{ui:Console}}: što je rutina ispisala i svaka pogreška s njezinim retkom; kliknite pogrešku da odete tamo. Tekst se izvodi jedan oblik najviše razine odjednom, pa je redak onaj od oblika, ili unutar njega redak koji poziva funkciju koju pogreška imenuje.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): datoteka `.lsp`. Tekst se također čuva u ovom pregledniku, pa zatvaranje prozora ne gubi ga.
- Pokraj teksta: funkcije koje rutina definira, one koje poziva a koje ovaj LISP još nema, one koje poziva a koje nisu definirane u njoj niti ugrađene, te potpuni popisi onoga što je ugrađeno, a što nije.

Tekst sa zagradom koja se nikad ne zatvara, ili nizom koji nikad ne završava, se ne izvodi: označava se redak. Nema korak-po-korak otklanjača pogrešaka, prekidnih točaka ni prozora za praćenje. Vidi [Pokretanje LISP rutina](topic:run-lisp).

### HELP

Kratice: `?`. Ispisuje svaku naredbu, njezine kratice i jednoredni opis u povijesti naredbenog retka. Ne otvara ovu pomoć: za to pritisnite {{key:F1}} ili kliknite {{ui:Pomoć}}.

## Upit za odabir objekata

Na svakom upitu `Select objects`: kliknite objekte, povucite prozore (slijeva nadesno) i križanja (zdesna nalijevo) s dva klika, ili pritisnite i povucite laso ({{key:Space}} dok povlačite: prozor, križanje, ograda), {{key:Shift}}+klik za uklanjanje, i pritisnite {{key:Enter}} za završetak. Također možete upisati `ALL` (sve), `L` (zadnji objekt), `P` (Previous: ono što je koristila zadnja naredba), `F` (Fence: objekti koje prelazi linija točaka; `U` poništava točku), `W` (Window), `C` (Crossing), `R` (način uklanjanja: odabiri izbacuju objekte; upit glasi `Remove objects`) i `A` (Add again). `?` ih navodi. Ne prikazuju se u upitu. {{key:Tab}} nad preklapajućim objektima označava sljedeći; kliknite da ga odaberete. Vidi [Odabir objekata](topic:select-objects).

### ACCESS

Kratica: `AX`. Crtanje bez vida. {{cmd:ACCESS}} uključuje ili isključuje Access (`On`, `Off`) i mijenja zvukove hvatanja (`Sound`) i glasovne naredbe (`Voice`); prvo kaže stanje. Uz uključen Access, svaka naredba i rezultat se izgovaraju kroz čitač zaslona, a područje crteža ima tipkovnički pokazivač. Tema pomoći „Crtanje bez vida” ima tipke.

### DESCRIBE

Kratica: `DESC`. Kaže što crtež sadrži: koliko objekata, koje vrste, kako velik, koliko slojeva, što je odabrano. Samo čita; ništa ne mijenja.

### WHEREAMI

Kratica: `WHERE`. Kaže gdje je kursor, u jedinicama crteža.

### NEARBY

Kaže što leži blizu kursora, najbliže prvo, svaki s udaljenošću i stranom na kojoj je.

### SAYSEL

Kaže što je odabrano, jedna rečenica po objektu (duljina linije, krajevi i kut; polumjer i središte kružnice; tekst kako je napisan).

### VOICE

Uključuje ili isključuje glasovne naredbe. Prepoznaju se na ovom računalu; gdje preglednik to ne može, glas ostaje isključen osim ako ne odaberete mrežnu uslugu preglednika u Postavkama.

### TOUCHCROSSHAIR

Kratica: `TCX`. Križić s pomakom za crtanje prstom, da vrh prsta ne prekriva točku koju birate. Dok je uključen, jedan prst na crtežu ne odabire: pomiče križić koji je iznad prsta i s jedne strane. Hvatanja objekata i praćenje slijede križić. Podizanje prsta ništa ne odabire i ostavlja križić gdje jest. Za odabir pritisnite gumb {{ui:Click}} u kutu crteža, ili dodirnite bilo gdje na crtežu drugim prstom. Držite {{ui:Click}} dok pomičete drugi prst za povlačenje (prozor odabira, laso, ručka). Prst pritisnut i zadržan miran, ili gumb {{ui:Enter}}, je Enter. Dva prsta pomiču i zumiraju kao i prije. Blizu donjeg ruba i dalekog bočnog ruba križić se približava prstu, pa se svaki dio crteža može doseći. Olovka i miš uvijek odabiru izravno.

{{cmd:TOUCHCROSSHAIR}} kaže stanje i pita `ON`, `OFF`, `Auto` (uključeno samo tamo gdje je prst jedini pokazivač, pa je isključeno na računalu s mišem), `Distance` (koliko je križić udaljen od prsta, 24 do 240 piksela) ili `Side` (`Left`: gore i ulijevo, za desnu ruku; `Right` za lijevu; gumbi se prebacuju u drugi kut). Isti izbori su u Postavke › CadCraft, a na uređaju s dodirnim zaslonom statusna traka ima prekidač {{ui:Offset crosshair}}. Izbori se čuvaju u ovom pregledniku.

### WHOHAS

Kaže tko ima crtež otvoren. U CadCraft Studiju na računalu, otvaranje DWG ili DXF piše malu datoteku zaključavanja uz njega (`Plan.dwg.cclock`: tko, od kad, koja verzija), osvježava je svake minute dok je crtež otvoren i uklanja je kad se crtež zatvori. Otvaranje crteža koji netko drugi ima otvoren kaže tko i od kad, i nudi {{ui:Open read-only}} (Save tada traži novi naziv), {{ui:Open anyway}} (druga osoba se obavijesti pri sljedećem osvježavanju) ili {{ui:Cancel}}. Spremanje preko datoteke koju netko drugi ima otvorenu prvo pita. Zaključavanje koje se nije osvježilo pet minuta kaže se da je zastarjelo: druga kopija se zatvorila bez spremanja ili je računalo u spavanju.

{{cmd:WHOHAS}} pita `Current` (otvoreni crtež), `File` (odaberite jedan), `FOlder` (odaberite mapu: navodi se svaki crtež u njoj koji je negdje otvoren), `Path` (upišite puni put) ili `Name` (ime koje drugi vide; naziv vašeg računa kad ste prijavljeni). Studio može doseći samo mape koje ste odabrali: za crtež otvoren iz mape koja nikad nije odabrana jednom kaže da ne može zabilježiti crtež kao otvoren; `FOlder` bira mapu, a zaključavanja tamo rade od tada. Zaključavanje je podsjetnik za ljude, a ne prepreka: drugi program i dalje može pisati datoteku. U pregledniku nema mapa u kojima bi se gledalo, a naredba to kaže.

### OVERKILL

Briše duple objekte i sređuje preklapajuće linije i lukove, za crteže koji stižu puni udvostručenih linija. `Select objects to clean up`, {{key:Enter}}, zatim opet {{key:Enter}} za čišćenje s prikazanim postavkama, ili promijenite jednu prvo:

- `Tolerance`: koliko blizu dvije koordinate moraju biti da se smatraju istima (0.000001 na početku; 0 znači točno isto).
- `Ignore`: svojstva koja se mogu razlikovati između dva inače ista objekta. Upišite naziv da ga prebacite: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ili `None` / `All`. {{key:Enter}} kad završite.
- `Overlap`: on ili off. Uključeno, linije uz istu ravnu crtu koje se preklapaju postaju jedna linija (linija koja leži unutar druge jednostavno se briše), a lukovi na jednoj kružnici koji se preklapaju postaju jedan luk; lukovi koji zatvaraju puni krug postaju kružnica, a luk koji leži na kružnici se briše.
- `Ends`: on ili off. Uključeno, linije uz istu ravnu crtu i lukovi na jednoj kružnici koji se dodiruju samo kraj do kraja postaju jedan komad.

Svaka vrsta objekta se provjerava za duplikate: dva objekta su duplikati kad su im geometrija ista unutar tolerancije, a sloj, boja, tip linije, mjerilo tipa linije, debljina linije, debljina i prozirnost, te visina se podudaraju (umanjeno za ono što ignorirate). Linije i otvorene polilinije podudaraju se i kad su nacrtane u suprotnom smjeru. Prvi objekt u redoslijedu crtanja ostaje i zadržava svoja svojstva. Naredba izvješćuje koliko je objekata provjerila i izbrisala: duplikate, spojene preklapajuće dijelove, dijelove spojene kraj do kraja. Jedan {{cmd:UNDO}} sve vraća. Postavke traju dok ne zatvorite prozor crteža.

Ostavlja netaknute: objekte na zaključanim slojevima i skrivene objekte. Ne spaja linije s visinom (Z) (točni duplikati njih i dalje odlaze), i ne dira segmente unutar polilinije (ne prorjeđuju se), liniju koja leži na segmentu polilinije, niti zatvorenu polilinju nacrtanu u suprotnom smjeru.

### DRAWORDER

Mijenja koji se objekti crtaju ispred. `Select objects to re-order`, {{key:Enter}}, zatim `Above objects`, `Under objects`, `Front` ili `Back` ({{key:Enter}} = `Back`). `Above objects` i `Under objects` pitaju referentne objekte: odabir ide odmah ispred najprednijeg od njih, ili odmah iza najstražnijeg. Odabrani objekti zadržavaju svoj redoslijed među sobom. Jedan korak poništavanja. Redoslijed se sprema s crtežom u DWG i DXF, gdje je to redoslijed kojim se objekti zapisuju.

Na zaslonu CadCraft crta ispunjene površine (pune šrafure, široke polilinije, maske) prve, zatim linije, zatim tekst, pa tekst uvijek čitate preko ispune; redoslijed crtanja vidi se među ispunjenim objektima i među slikama. Drugi programi koji otvore datoteku crtaju svaki objekt tim spremljenim redoslijedom.

### TEXTTOFRONT

Dovodi tekst, kote i vodilice ispred svega ostalog u otvorenom prostoru: `Text`, `Dimensions`, `Leaders` ili `All` ({{key:Enter}} = `All`). Jedan korak poništavanja. Kaže to kad ih nema, ili kad su već naprijed.

### HATCHTOBACK

Šalje svaku šrafuru otvorenog prostora iza svega ostalog, pa ispune prestaju prekrivati linije i tekst u spremljenoj datoteci. Bez pitanja. Jedan korak poništavanja.

### ISOLATEOBJECTS

Kratica: `ISOLATE`. Prikazuje samo odabrane objekte: sve ostalo u otvorenom prostoru izlazi iz vida do {{cmd:UNISOLATEOBJECTS}}. Za razliku od {{cmd:LAYISO}}, radi s objektima koje birate, bez obzira na njihove slojeve, i ne mijenja nijedan sloj. Skriveni objekti se ne crtaju, ne biraju, ne hvataju, ne zumiraju i ne ispisuju, a naredbe koje uzimaju `ALL` ih preskaču. Ono što nacrtate dok su objekti izolirani prikazuje se kao obično.

Ovo vrijedi samo za sesiju: ništa o tome se ne sprema s crtežom, nije korak poništavanja, a ponovnim otvaranjem crteža sve se prikazuje. Dok su objekti skriveni, statusna traka prikazuje gumb s njihovim brojem; kliknite ga da ih ponovno prikažete.

### HIDEOBJECTS

Skriva odabrane objekte do {{cmd:UNISOLATEOBJECTS}}. Ista pravila kao kod {{cmd:ISOLATEOBJECTS}}: samo za sesiju, ne sprema se, nije korak poništavanja.

### UNISOLATEOBJECTS

Kratice: `UNISOLATE`, `UNHIDE`. Ponovno prikazuje svaki objekt koji je skrio {{cmd:ISOLATEOBJECTS}} ili {{cmd:HIDEOBJECTS}}, i kaže koliko se ih vratilo.

### LAYLOCKFADE

Postavlja kako izgledaju objekti na zaključanim slojevima i može li klik do njih doći. Kaže trenutno stanje, zatim prima:

- broj od 0 do 90: iznos blijeđenja u postocima (50 na početku). 0 isključuje blijeđenje.
- `ON` ili `OFF`: blijeđenje uključeno ili isključeno, uz zadržavanje iznosa.
- `Pick`, zatim `Yes` ili `No`: smije li klik odabrati objekte na zaključanim slojevima dok nijedna naredba ne radi? `No` (zadano): ne mogu se uopće odabrati. `Yes`: klik ili prozor ih odabire da ih {{ui:Svojstva}} mogu prikazati; i dalje se ne mogu mijenjati, a vlastiti `Select objects` naredbe ih nikad ne uzima.

Hvatanje objekata pronalazi objekte na zaključanim slojevima u oba slučaja. Ispisi se nikad ne blijede. Obje postavke su vaše, a ne crteža, i nalaze se i u {{ui:Postavke}} pod {{ui:Locked layers}}.

### BURST

Rastavlja reference blokova i zadržava ono što njihovi atributi kažu. `Select block references to burst`, {{key:Enter}}: svaka referenca se zamjenjuje objektima bloka, a vrijednost svakog vidljivog atributa postaje običan tekst na vlastitom sloju atributa (atribut na sloju 0 ide na sloj reference, kao i ostali objekti bloka na sloju 0). Nevidljivi atributi se odbacuju. Blok unutar bloka ostaje referenca bloka. Jedan korak poništavanja; izvješćuje koliko je referenci rastavljeno i koliko je vrijednosti atributa pretvoreno u tekst.

Odbija povezani crtež po nazivu (prvo ga vežite, ili kopirajte iz njega s {{cmd:NCOPY}}), i ostavlja netaknutim druge odabrane objekte. Za reference blokova {{cmd:EXPLODE}} daje iste objekte; {{cmd:BURST}} uzima samo reference blokova i broji tekst atributa.

### TXT2MTXT

Kratica: `T2M`. Spaja jednoredne tekstove u jedan tekst odlomka. `Select single-line text to join`, {{key:Enter}}, zatim `Paragraph` (redovi se spajaju i prelamaju po širini najšireg reda) ili `Lines` (svaki tekst ostaje svoj redak); {{key:Enter}} uzima zadnji korišten. Redovi su poredani odozgo prema dolje, zatim slijeva nadesno, duž smjera gornjeg teksta. Odlomak visi od gornjeg lijevog kuta gornjeg teksta i preuzima njegovu visinu, zakret, stil, sloj i boju. Jedan korak poništavanja.

Tekst koji je već tekst odlomka, prazan tekst i drugi objekti u odabiru ostaju netaknuti, a naredba kaže koliko ih je.

### NCOPY

Kopira objekte iz reference bloka ili povezanog crteža u crtež, bez rastavljanja ičega. `Pick an object inside a block reference or a linked drawing`: objekt najbliži kliku kopira se tamo gdje se vidi, koliko god blokova duboko stoji; kliknite još, zatim {{key:Enter}}. Zatim `Base point to move the copies`: {{key:Enter}} ih ostavlja na mjestu, ili zadajte baznu točku i drugu točku. Cijela naredba je jedan korak poništavanja.

Kopija uzima sloj na kojem se vidi: objekt na sloju 0 unutar bloka ide na sloj reference u kojoj je sjedio, a boja ByBlock postaje boja te reference. Iz povezanog crteža sloj `Plan|Walls` postaje `Plan$0$Walls` (naziv koji daje veza), izrađen s bojom, tipom linije i debljinom linije povezanog sloja. Vrijednost atributa kopira se kao tekst. Referencije blokova na zaključanim slojevima ne mogu se odabrati.

### FLATTEN

Postavlja visinu (Z) i debljinu odabranih objekata na 0. `Select objects to flatten`, {{key:Enter}}. Također spljošti objekte unutar definicija blokova koje odabir koristi (i blokove unutar njih), pa se svaka referenca na te blokove mijenja; povezani crteži ostaju kakvi jesu. Jedan korak poništavanja; izvješćuje koliko je objekata promijenjeno, i kaže kad nijedan nije imao visinu ili debljinu.

Što CadCraft čuva od treće dimenzije u 2D crtežu: visinu na krugovima, lukovima, elipsama, točkama, tekstu, referencama blokova, šrafurama, vodilicama i polilinijama (njihova kota), visinu na svakom kraju linije, i debljinu na linijama, kružnicama, lukovima, polilinijama, točkama i tekstu, kako ih je datoteka imala. {{cmd:FLATTEN}} briše točno to. Ne dira 3D model na kartici 3D, 3D plohe ili tijela, a objekt nacrtan u nagnutoj ravnini već je doveden u ravninu crteža kad je datoteka otvorena.

### BREAKLINE

Crta liniju sa simbolom prekida, za pogled koji je skraćen. Kaže trenutnu veličinu i produženje, zatim `First point of the break line` (ili `Size` / `Extension` da ih prvo promijenite), `Second point`, i `Where the break symbol sits`: kliknite duž linije, ili {{key:Enter}} za sredinu. Rezultat je jedna polilinija na trenutnom sloju: linija, koja prelazi svaku točku za produženje, sa Z-oblikom poteza visine jednake veličini i upola kraćim.

`Size` i `Extension` pamte se kao vaše postavke (veličina počinje kao dvostruka visina teksta kote puta mjerilo kote; produženje kao polovica veličine). {{key:Enter}} ponavlja naredbu.

### AUDIT

Provjerava otvoreni crtež ima li oštećenja i popravlja ga. {{cmd:AUDIT}} gleda svaki objekt u modelu, na listovima i unutar blokova, te tablicu slojeva, i navodi što je našao po vrsti:

- brojevi koji nisu konačni ili su apsurdno veliki;
- objekti bez veličine: linija bez duljine, kružnica bez polumjera, polilinija s jednim mjestom, tekst bez slova ili visine, referenca bloka s nultim mjerilom;
- objekti na sloju kojeg crtež nema; reference na blok koji ne postoji; nazivi stilova teksta i kota te nazivi tipova linija koji nisu u crtežu;
- blokovi koji sadrže sami sebe, izravno ili preko drugih blokova;
- objekti koji dijele isti identifikator, ključ ili datotečnu oznaku;
- kote bez točaka od kojih se mjere, i šrafure čija granica nije zatvoreni obris.

Zatim pita `Fix them? [Yes/No]`. `No` ništa ne mijenja. `Yes` popravlja sve u jednom koraku poništavanja: ono što se ne može nacrtati se uklanja (loši brojevi, bez veličine, nedostajući blok, pokvarena kota, šrafura bez upotrebljive granice, referenca koja zatvara krug blokova); nedostajući sloj se stvara; nepoznati nazivi stilova i tipova linija vraćaju se na zadane; dijeljeni ključ se zamjenjuje. Ispisuje koliko je objekata uklonjeno, a koliko popravljeno. Isti nalazi pojavljuju se na ploči Problemi, svaki sa svojim {{ui:Repair}}.

Ne odbija ništa, ali provjerava samo ono što CadCraft sam crta: podaci sačuvani za druge programe (3D tijela, OLE objekti) se ne otvaraju.

### RECOVER

Otvara oštećeni DXF ili DWG. {{cmd:RECOVER}} pita datoteku, čita što se može pročitati umjesto da odbije datoteku, navodi što je preskočio ili pretpostavio, zatim provjerava i popravlja crtež kao što {{cmd:AUDIT}} radi s `Yes`.

- DXF: linije koje nisu dio para kod i vrijednost preskaču se dok parovi opet ne budu poredani; odjeljak bez kraja se zatvara; datoteka koja je odrezana čita se do mjesta reza; binarni DXF koji je odrezan čita se do svoje zadnje cjelovite vrijednosti. Kad odjeljak, blok ili objekt i dalje ne može biti pročitan, izostavlja se i imenuje se, a čitanje se nastavlja iza njega.
- DWG: objekti koji ne prolaze svoje provjere ili se ne mogu dekodirati se izostavljaju, a izgubljeni popis objekata se obnavlja prolaskom kroz podatke objekata.

Datoteka na disku se ne mijenja. Oporavljeni crtež se otvara nespremljen: spremite ga pod novim nazivom. Datoteka iz koje se ništa uopće ne može pročitati se odbija, uz razlog.

### LEGACYTEXT

Pretvara tekst upisan starim 8-bitnim vijetnamskim fontovima u Unicode. Kratki nazivi `TEXTTOUNICODE` i `VNTEXT`.

Stariji vijetnamski crteži čuvaju tekst kao zapadne znakove koje samo font pretvara u vijetnamski: TCVN3 tekst u ABC fontovima (`.VnTime`, `.VnArial`, i fontovi s velikim slovima čiji nazivi završavaju na `H`), i VNI tekst u VNI fontovima (`VNI-Times`). CadCraft takav tekst prikazuje čitljivo čim se crtež otvori, prema fontu njegova stila teksta, objekta ili dijela unutar teksta odlomka; datoteka i dalje čuva stare znakove.

{{cmd:LEGACYTEXT}} kaže koliko je tekstova pronašao u svakom kodiranju i pita `Convert … to Unicode?`. `Yes` prepisuje svaki (model, listovi, blokovi, vrijednosti atributa i definicije), a stilovima teksta daje Unicode font (Times New Roman, Arial ili Courier New prema vrsti starog fonta), u jednom koraku poništavanja. Oblikovanje unutar teksta odlomka se čuva.

Kad nijedan tekst ne koristi poznati font (stil koji je izgubio naziv fonta), pita `Read selected texts as [Tcvn3/Vni/None]`: odaberite kodiranje i odaberite tekstove. Tekst koji je već Unicode ostaje netaknut. Nadjačavanja teksta kota i tekst višestrukih vodilica se ne pretvaraju.
