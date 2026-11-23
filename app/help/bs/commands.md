---
title: Referenca naredbi
summary: Svaka naredba u aplikaciji za crtanje CadCraft, sa njenim kratkim nazivima, pitanjima koja postavlja, opcijama i zadanim vrijednostima.
keywords: naredbe, skraćenice, spisak naredbi, površina, obim, measuregeom, linija, pline, krug, luk, skrati, ofset, dimlinear, blok, umetni, raspored, štampa, zum, pomoć, copyclip, cutclip, pasteclip, pasteorig, copybase, dupliraj, selectall
from: 979ffe3b
---

Ukucajte naziv naredbe ili skraćenicu i pritisnite {{key:Enter}} ili {{key:Space}}. Velika i mala slova nisu bitna, a početni `_`, `-`, `.` ili `'` se ignoriše. Ukucajte `HELP` (ili `?`) da ispišete kratak spisak svake naredbe u historiji komandne linije; pritisnite {{key:F1}} za ovu pomoć.

Kako čitati upite: opcije su u uglastim zagradama, a birate jednu tako što ukucate njena velika slova (`D` za Diameter). Zadana vrijednost je u ugaonim zagradama; pritisnite {{key:Enter}} da je prihvatite. Gdje se traži tačka, možete kliknuti ili ukucati bilo koji od formata iz [Unos koordinata i udaljenosti](topic:coordinate-entry). Gdje se traži udaljenost, možete ukucati broj ili kliknuti dvije tačke.

Pritisak na {{key:Enter}} gdje se traži tačka ili objekat, a nema zadane vrijednosti, završava naredbu. {{key:Esc}} je otkazuje. Šta god naredba uradi, to je jedan korak poništavanja.

## Crtanje

### LINE

Kratki nazivi: `L`. Prave dionice, svaka je sopstveni objekat.

- `Specify first point` (Enter: počni od posljednje tačke koju ste zadali)
- `Specify next point [Undo]`, ponavlja se. Poslije dva segmenta: `[Undo/Close]`.
- `U` vraća posljednji segment, `C` zatvara do prve tačke i završava. Enter završava.

### PLINE

Kratki nazivi: `PL`. Jedna polilinija od linijskih i lučnih segmenata.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Zatvori kad postoje dva segmenta)
- `A` prelazi na lukove: `Specify endpoint of arc [Line/CLose/Undo]`. Svaki luk se nastavlja tangentno na prethodni segment. `L` vraća na linije, `CL` zatvara lukom.
- Enter završava; polilinija ostaje otvorena.

### CIRCLE

Kratki nazivi: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` pita `Specify diameter of circle`.
- `2P`: dva kraja prečnika. `3P`: tri tačke na krugu.
- `T` (također naredba `TTR`, i {{ui:Crtanje}} › {{ui:Više}} › {{ui:Krug: Tan, Tan, Poluprečnik}}): `Specify point on object for first tangent of circle`, zatim drugi, pa poluprečnik (Enter: posljednji). Krug dodiruje oba objekta (linije, lukove, krugove, segmente polilinije, također unutar blokova); od krugova koji to rade bira se onaj koji dodiruje najbliže vašim izborima. „Circle does not exist“ kad nijedan ne odgovara.
- `TTT` (ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Krug: Tan, Tan, Tan}}): tri objekta; krug koji dodiruje sva tri, najbliži vašim izborima (tri linije daju unutrašnji krug ili vanjski, zavisno od toga gdje birate).

### ARC

Kratki nazivi: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: luk kroz tri tačke.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Luk ide suprotno kazaljci na satu od početka do kraja.

### RECTANG

Kratki nazivi: `REC`, `RECTANGLE`. Zatvorena polilinija.

- `Specify first corner point`, `Specify other corner point`. Za drugi ugao ukucajte `@width,height`.

### POLYGON

Kratki nazivi: `POL`. Pravilan poligon kao zatvorena polilinija.

- `Enter number of sides <4>` (3 do 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: kliknite ili ukucajte tačku; njena udaljenost postavlja veličinu, a njen smjer okreće poligon.

### ELLIPSE

Kratki nazivi: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, zatim udaljenost do druge ose.
- `I` (`Isocircle`, samo dok je {{cmd:ISODRAFT}} uključen): centar, zatim poluprečnik ili `Diameter`: elipsa koju krug prikazuje na tekućoj izometrijskoj ravni.

### HATCH

Kratki nazivi: `H`, `BH`, `BHATCH`; ili {{ui:Šrafura}} na traci s alatima. Prvo ispisuje tekući uzorak, razmjeru i ugao.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, ponavlja se (`Undo` kad postoji područje): svaki klik dodaje zatvoreno područje oko sebe, sa zatvorenim oblicima unutra kao ostrvima. Enter pravi jednu šrafuru od svih njih.
- `S`: `Select closed objects` (zatvorene polilinije, krugovi, zatvorene elipse).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradijent): ispuna je gradijent umjesto uzorka. Pogledajte {{cmd:GRADIENT}} za njegova pitanja.

Pogledajte [Šrafura i područja ispune](topic:hatch).

### GRADIENT

Kratki nazivi: `GD`. Ispunjava područje gradijentom jedne ili dvije boje. Prvo pita gradijent, pa nastavlja kao {{cmd:HATCH}} (`Pick internal point`, `S` za zatvorene objekte, {{key:Enter}} za završetak).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, ponavlja se; svaki put ispisuje gradijent kakav je sada.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ili jedan od njih obrnut (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Prva slova su dovoljna.
- `O`: jedna boja, zatim njena nijansa od 0 do 1 (0 je zasjenjuje do crne, 0.5 je sama boja, 1 je izbjeljuje do bijele). `TW`: prva i druga boja. Boja je broj od 1 do 255, tri broja kao `255,128,0`, ili `#rrggbb`.
- `A`: ugao pod kojim gradijent ide. `C`: centrirano Yes ili No (No pomjera sredinu gradijenta na jednu stranu).
- Odbija boju ili vrstu koju ne poznaje, i nijansu van 0 do 1.

{{cmd:HATCHEDIT}} `G` i Svojstva (Gradijent) kasnije mijenjaju gradijent, ili pretvaraju bilo koju šrafuru u njega. Gradijent se crta na ekranu i štampa. DWG 2004 i kasnije čuvaju ga kao pravu gradijent šrafuru; DXF 2000 i DWG 2000 ga čuvaju za CadCraft, a drugi programi vide punu ispunu prvom bojom.

### HATCHGENERATEBOUNDARY

Kratki nazivi: `HGB`. Ponovo pravi granicu od šrafure koja ju je izgubila. `Select hatches` (ili ih prvo odaberite), zatim `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Svaka petlja šrafure postaje zatvorena polilinija na sloju šrafure; nove polilinije ostaju odabrane. Zakrivljena ivica vraća se kao kratki pravi komadi koje šrafura zadržava.
- Uz Yes šrafura prati svoju novu granicu, kao šrafura napravljena s {{cmd:HATCH}}. Jedan korak poništavanja.
- Kaže to kad nijedna šrafura nije odabrana.

### POINT

Kratki nazivi: `PO`; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Tačka}}. Objekti tačaka, po jedan za svaki klik, dok ne pritisnete Enter.

- `Specify a point`

### XLINE

Kratki nazivi: `XL`; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Pomoćna linija}}. Pomoćne linije, beskonačne u oba smjera. Pogledajte [Pomoćne linije i zrake](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, zatim `Specify through point` za svaku liniju, dok ne pritisnete Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` prvo pita `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, zatim `Specify angle end point` za svaku liniju.
- `O`: `Specify offset distance [Through] <Through>`, zatim `Select a line object` i `Specify side to offset` (ili `Specify through point`) za svaku liniju.

### RAY

Nema kratkih naziva; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Zraka}}. `Specify start point`, zatim `Specify through point` za svaku zraku, dok ne pritisnete Enter.

### TEXT

Kratki nazivi: `DT`, `DTEXT`; ili {{ui:Tekst}} na traci s alatima. Tekst u jednom redu; svaki red je sopstveni objekat.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, zatim `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, ponavlja se: svaki Enter počinje sljedeći red ispod. Enter na praznom redu završava. {{key:Space}} ovdje ukucava razmak.

### DIVIDE

Kratki naziv: `DIV`. {{cmd:DIVIDE}} postavlja oznake na liniju, luk, krug, polilinju, spline ili elipsu koje je dijele na jednake dijelove. Izaberite objekat, zatim zadajte broj dijelova (2 do 32767). Otvoreni objekat dobija jednu oznaku manje od dijelova; zatvoreni dobija oznaku i na početku. Sam objekat se ne reže. Oznake su tačke; `Block` umjesto toga traži blok ovog crteža i da li se okreće da prati objekat. Dužine duž splinova i elipsi mjere se po kratkim tetivama. Odbija tekst, šrafure i druge objekte koji nemaju dužinu.

### MEASURE

Kratki naziv: `ME`. {{cmd:MEASURE}} postavlja oznaku na svakoj zadanoj dužini duž linije, luka, kruga, polilinije, spline ili elipse, računajući od kraja najbližeg mjestu gdje ste kliknuli (zatvoreni objekat: od njegovog početka). Dužinu zadajete ukucavanjem ili dvjema tačkama. Daleki kraj otvorenog objekta ne dobija oznaku. `Block` postavlja blok na svaku oznaku umjesto tačke. Odbija dužinu 0, dužinu veću od objekta i onu koja bi napravila više od 32767 oznaka.

### BOUNDARY

Kratki nazivi: `BO`, `BPOLY`. {{cmd:BOUNDARY}} pravi zatvorenu polilinju oko područja u kojem je tačka koju birate, od linija, lukova, krugova, polilinija i krivih koje ga ograničavaju na ekranu. Dijelovi koji leže na luku ili krugu vraćaju se kao lučni segmenti; dijelovi elipsa i splinova vraćaju se kao kratki pravi segmenti. Uz `Islands` uključeno (početna postavka), svako zatvoreno područje unutra dobija takođe svoju polilinju. Nastavite birati tačke; Enter završava. Objekti koji ograničavaju područje ostaju kakvi jesu. Kaže to kad nijedno zatvoreno područje ne sadrži tačku.

### BLEND

{{cmd:BLEND}} crta spline između krajeva dvije otvorene krive. Birajte svaku krivu blizu kraja koji spajate. `CONtinuity` bira `Tangent` (spline polazi i dolazi duž obje krive) ili `Smooth` (također prati kako se one savijaju na krajevima); izbor se zadržava za sesiju. Dvije krive se ne mijenjaju. Odbija zatvorene objekte i dva kraja koja se već sastaju.

### REGION

Kratki naziv: `REG`. {{cmd:REGION}} pretvara zatvorene objekte u regije: ravna područja koja možete spajati, rezati i mjeriti. Odaberite krugove, zatvorene polilinije, zatvorene elipse ili zatvorene splinove, ili linije, lukove i otvorene polilinije koje se zatvaraju u petlju kraj-na-kraj; svaka petlja postaje jedna regija i zamjenjuje objekte od kojih je nastala. Lukovi ostaju lukovi; elipse i splinovi postaju kratki pravi segmenti. Ono što nije zatvoreno i ne zatvara nijednu petlju ostaje kakvo jeste, a kaže koliko je takvih. U crtežu je regija jedna ili više zatvorenih polilinija držanih zajedno kao grupa bez naziva, pa klik bira cijelu regiju, a kopija je regija za sebe; drugi programi koji otvore datoteku vide zatvorene polilinije.

Kad u crtežu ima regija, {{cmd:UNION}}, {{cmd:SUBTRACT}} i {{cmd:INTERSECT}} na kartici 2D rade s regijama: `UNION` spaja odabrane regije u jednu (regije koje su odvojene postaju jedna regija s više kontura), `SUBTRACT` pita regije od kojih se oduzima, pa one koje se oduzimaju (rupa ostaje dio regije), a `INTERSECT` zadržava područje koje sve dijele. Svaka javlja površinu rezultata i jedan je korak poništavanja. Odbijaju kad ništa ne bi ostalo ili ništa nije zajedničko. Na kartici 3D, i u crtežu bez regija, iste naredbe rade na tijelima kao prije.

## Izmjena

Kratki nazivi: `MT`, `T`; ili {{ui:Pasus}} na traci s alatima. Tekst pasusa koji se prelama na širinu, ukucava se na mjestu.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: širina između dva ugla je mjesto gdje se tekst prelama. `H` pita `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` i preskače drugi ugao.
- Zatim se na crtežu otvara okvir: ukucavajte, {{key:Enter}} za novi pasus, {{key:Mod+Enter}} ili klik van okvira za završetak, {{key:Esc}} za otkazivanje. Njegova traka postavlja visinu, razmak redova, širinu i poravnanje. Pogledajte [Dodavanje teksta i oznaka](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Kratki nazivi: `ED`, `DDEDIT`; ili dvaput kliknite tekst. `Select a text to edit`, ponavlja se do {{key:Enter}}: svaki se otvara u istom okviru. Pokrenut na odabranom ili dvaput kliknutom tekstu, uređuje njega i završava.

### ERASE

Kratki nazivi: `E`, `DELETE`; ili pritisnite {{key:Delete}} s odabranim objektima.

- `Select objects` (preskače se kad su objekti već odabrani)

### MOVE

Kratki nazivi: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, ukucano kao `dx,dy`.

### COPY

Kratki nazivi: `CO`, `CP`. Pravi kopije koliko puta zadate tačke.

`Array` na upitu za drugu tačku pravi red odjednom: zadajte broj stavki (original se računa kao jedan), zatim tačku gdje ide prva kopija; ostale slijede na istom razmaku. `Fit` umjesto toga čini tu tačku mjestom posljednje kopije, a ostale se ravnomjerno raspoređuju između.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, ponavlja se do Enter. `U` poništava posljednju kopiju.

### ROTATE

Kratki nazivi: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: stepeni, pozitivno suprotno kazaljci na satu; ili kliknite tačku da okrenete prema njoj.

### SCALE

Kratki nazivi: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: ukucajte faktor kao `0.5` ili `2`. Kliknuta tačka daje svoju udaljenost od osnovne tačke kao faktor.

### MIRROR

Kratki nazivi: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Kratki nazivi: `AL`; ili {{ui:Izmjena}} › {{ui:Više}} › {{ui:Poravnaj}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Uz dva para: `Scale objects based on alignment points? [Yes/No] <N>`

Pogledajte [Poravnavanje objekata](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (ili odabir), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` pita za tačku. Odabir ostaje.

### DISTRIBUTE

- `Select objects` (najmanje tri), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Spoljašnja dva ostaju; odabir ostaje.

### ALIGNPANEL

Kratki nazivi: `ALP`; ili {{ui:Izmjena}} › {{ui:Više}} › {{ui:Poravnaj i raspodijeli}}. Otvara panel koji pokreće ALIGNTO i DISTRIBUTE klikovima.

### LASER

Kratki nazivi: `LASERCUT`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}}. Otvara panel Laser preko crteža: šta svaki sloj radi (sječenje, rezanje crte, graviranje, ispuna, slika), pregled, GRBL G-kod za spašavanje, i uokvirivanje i slanje preko Web Serial. Pogledajte [Slanje crteža laseru](topic:laser-cutting).

### STRETCH

Kratki nazivi: `S`; ili {{ui:Rastegni}}. `Select objects to stretch`: prevucite ukrštene prozore (ili ukucajte `C`) preko krajeva da pomjerate. `Specify base point [Displacement]`, `Specify second point`. Tačke unutar prozora se pomjeraju: krajevi linija, temena polilinija (lučni segmenti zadržavaju svoju visinu), tačke kota; krugovi, elipse, tekst, tačke i blokovi pomjeraju se cijeli kad je njihov centar ili tačka umetanja unutra. Odabir napravljen prije naredbe zadržava ukrštene prozore (i lasso) koji su ga napravili, pa se rastežu na isti način. Bez prozora, objekti se pomjeraju cijeli.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Kratki nazivi: `AR`; ili {{ui:Niz}}. `Select objects`, zatim `Enter array type [Rectangular/POlar] <Rectangular>` (samo za ARRAY).

- Pravougaoni počinje sa 4 kolone × 3 reda, razmak 1.5 puta veći od veličine objekata, prikazan kao pregled. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pita kolone i redove, `S` razmake između kolona i između redova (negativno ide lijevo ili dolje), `COL` i `R` po jedan smjer.
- Polarni pita `Specify center point of array`, počinje sa 6 stavki sve oko, zakrenuto. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` stavke, `F` ugao koji se popunjava (+ suprotno kazaljci, − u smjeru kazaljke), `ROT` Yes ili No.
- {{key:Enter}} (eXit) pravi kopije, kao obične objekte. Jedan korak poništavanja.
- `AS` (ASsociative) prebacuje između običnih kopija i niza koji ostaje uređiv: jedan objekat koji kasnije mijenjate s {{cmd:ARRAYEDIT}}, preko hvataljki ili u Svojstvima. Izbor se pamti ({{cmd:ARRAYASSOCIATIVITY}}); počinje s običnim kopijama.

### ARRAYPATH

Kopije duž krive. `Select objects`, zatim `Select path curve`: linija, luk, krug, elipsa, polilinija ili spline (ne jedan od objekata koji se nizaju). Putanja počinje na svom kraju bližem objektima, a prva stavka su objekti tamo gdje jesu.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, sa pregledom. `M`: `Divide` raspoređuje stavke ravnomjerno duž cijele putanje, `Measure` postavlja jednu na svaki zadani razmak duž nje. `I`: broj stavki (uz Measure, 0 znači koliko stane; broj iza kraja putanje svodi se na ono što stane). `SP`: razmak između stavki duž putanje (prebacuje na Measure). `AL`: Yes okreće svaku stavku da prati putanju, No ih ostavlja uspravne.
- `AS` kao u {{cmd:ARRAY}}. Kad je uključeno, niz zadržava svoju kopiju oblika putanje: kasnija izmjena krive putanje ne pomjera stavke.
- Odbija putanju koja nije kriva, i jednu stavku.

### ARRAYEDIT

Mijenja niz napravljen s ASsociative. `Select array` (ili ga prvo odaberite). Ispisuje kakav je niz sada, zatim pita dok ne pritisnete {{key:Enter}}:

- Pravougaoni: `COL` kolone i njihov razmak, `R` redovi i njihov razmak, `A` ugao pod kojim idu kolone.
- Polarni: `I` stavke, `F` ugao popune, `ROT` okreće stavke Yes ili No.
- Putanja: `M` Divide ili Measure, `I` stavke, `SP` razmak, `AL` poravnanje s putanjom.
- `S` (Source) otvara objekte koje niz ponavlja, same za sebe, kao uređivač blokova. Crtajte i mijenjajte tamo; {{cmd:ARRAYCLOSE}} spašava ili odbacuje, a svaka stavka prati.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, zatim kliknite stavke za zamjenu, {{key:Enter}}. Te stavke sada prikazuju zamjenu; objekti zamjene napuštaju crtež i žive u nizu. `RES` (RESet) ponovo prikazuje izvorne objekte u svakoj stavci.
- Svaka promjena je jedan korak poništavanja. Odbija obične kopije, običnu referencu bloka i niz na zaključanom sloju.

Isti brojevi su u Svojstvima pod Niz, a niz ima hvataljke: njegova osnovna tačka ga pomjera, hvataljka na drugoj stavki postavlja razmak, hvataljka iza posljednje stavke postavlja broj (polarni: druga stavka postavlja koliko stavki, posljednja ugao popune). {{cmd:EXPLODE}} vraća niz u obične kopije.

### ARRAYCLOSE

Završava {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Kaže to kad nijedni izvorni objekti niza nisu otvoreni. {{cmd:BCLOSE}} radi isto.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Postavlja s čim {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR i {{cmd:ARRAYPATH}} počinju; njihova opcija `AS` mijenja istu postavku. Pamti se u ovom pregledaču.

### OFFSET

Kratki nazivi: `O`. Linije, lukovi, krugovi i polilinije.

Kad se polilinija pomjera naružu i njeni pravi segmenti se razdvoje na uglu, {{cmd:OFFSETGAPTYPE}} odlučuje kako se razmak zatvara.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, zatim `Specify point on side to offset` (ili, uz Through, `Specify through point`), ponavlja se do Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: kako {{cmd:OFFSET}} zatvara razmake na spoljašnjim uglovima polilinije. `0` produžava segmente dok se ne sretnu (početna postavka), `1` ih spaja lukom oko starog ugla, `2` ravnim rezom. Unutrašnji uglovi i lučni segmenti nisu pogođeni. Čuva se za ovu sesiju.

### EXTRIM

{{cmd:EXTRIM}} obrezuje sve s jedne strane ivice. Izaberite rubnu ivicu (liniju, luk, krug, polilinju, elipsu, spline ili pomoćnu liniju), zatim tačku na strani koju čistite: svaka linija, luk, krug, polilinija i pomoćna linija koja siječe ivicu gubi svoj dio s te strane, gdje počinje od ivice. Dok birate stranu, dijelovi koji bi nestali prate pokazivač. Za zatvorenu ivicu strane su unutrašnja i spoljašnja. Objekti koji samo dodiruju ivicu, kao i tekst, šrafure, splinovi i elipse koji je sijeku, ostaju kakvi jesu. Jedan korak poništavanja.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: kako {{cmd:TRIM}} i {{cmd:EXTEND}} počinju. `1` Quick: svaki objekat je rubna ivica ili granica. `0` Standard: prvo pitaju za ivice. Također `(setvar "TRIMEXTENDMODE" 0)` u LISP-u.

### TRIM

Kratki nazivi: `TR`. Prvo ispisuje `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. U režimu Quick svaki vidljivi objekat je rubna ivica, a objekat koji ništa ne sijeku se briše; u režimu Standard prvo pita `Select cutting edges (Enter = every object)` i sječe samo na tim ivicama.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, ponavlja se: kliknite dio koji se uklanja (prikazuje se sivo i isprekidano dok pokazivač stoji na njemu), prevucite putanju kroz nekoliko dijelova (svi idu u jednom koraku), ili kliknite dvije prazne tačke za ogradu između njih. {{key:Shift}} produžava umjesto toga. `T` bira rubne ivice (režim Standard), `F` pita tačke ograde, `C` dva ugla prozora (dijelovi koji su djelimično unutra idu), `O` pita `Enter a trim mode option [Quick/Standard]`, `E` pita `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` briše objekte koje izaberete, `U` poništava posljednji izbor ili prevlačenje. Enter završava. Pogledajte [Obrezivanje i produžavanje](topic:trim-and-extend).

- Klik na šrafuru je obrezuje: rubne ivice dijele ispunjeno područje, a dio na kojem ste kliknuli se uklanja (ne ostaje nacrtana kontura tamo gdje je bio). Šrafura zadržava svoj uzorak ili gradijent; šrafura koja je bila povezana sa svojom granicom poslije više nije povezana, jer je više ne ispunjava. Kaže to kad nijedna rubna ivica ne dijeli šrafuru tamo, kad je klik van šrafure, i kad ništa ne bi ostalo (koristite {{cmd:ERASE}}). Prevučena putanja ili ograda ne seče šrafure.

### EXTEND

Kratki nazivi: `EX`. Isto što TRIM, obrnuto: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Klik produžava kraj koji je najbliži do sljedeće granice; prevučena putanja ili ograda produžava svaki objekat koji sijeku; {{key:Shift}} obrezuje. `B` bira granične ivice (režim Standard). Mode i Edge su zajednički s TRIM.

### LINKVIEWS

Kratki nazivi: `SYNCVIEWS`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Poveži poglede okana}}, ili ikona veze na karticama crteža. `Link the panes' views [ON/OFF]` (Enter uzima drugo stanje): dok je uključeno, pomjeranje ili zumiranje u aktivnom oknu pomjera svako okno koje prikazuje istu vrstu prostora. Pogledajte [Podjela ekrana](topic:split-screen).

### OPENIN3D

Nema kratkih naziva; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Otvori u ModelCraft}} gdje aplikacija za 3D modeliranje preuzima predati crtež. Otvara ga tamo u novoj kartici, kao DWG (ništa se ne šalje). Ako pregledač blokira karticu, kaže to.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: šta pritisak i prevlačenje na praznom mjestu crtaju. Isto kao Postavke › CadCraft › Prevlačenje za odabir. Pogledajte [Odabir lasom](topic:lasso-selection).

### FILLET

Kratki nazivi: `F`. Linije, lukovi, krugovi i polilinije. Prvo ispisuje `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` pita `Specify fillet radius <last>`. `T` pita `Enter Trim mode option [Trim/No trim]`: uz No trim objekti ostaju kakvi jesu i dodaje se samo luk.
  - `M` drži naredbu za više uglova do {{key:Enter}}; `U` poništava posljednji ugao, ne napuštajući naredbu.
  - `P` pita `Select 2D polyline [Radius]` i zaokružuje svaki ugao gdje se dva prava segmenta sastaju. Zaobljenja koja već ima zamjenjuju se novim poluprečnikom; poluprečnik 0 ih uklanja. Uglovi čije su stranice prekratke za poluprečnik ostaju i broje se.
- `Select second object or shift-select to apply corner [Radius]`. Držite {{key:Shift}} dok klikate za oštar ugao, bez obzira na poluprečnik.

Kliknite svaki objekat na dijelu koji želite zadržati. Dvije linije koje se ne sastaju se produže. Dvije paralelne linije dobijaju polukrug preko razmaka, na kraju prve linije najbližem vašem kliku. Krug se nikad ne reže. Dva susjedna segmenta jedne polilinije dobijaju luk unutar polilinije; polilinija i drugi objekat rade kad rez padne na prvi ili posljednji segment polilinije.

### CHAMFER

Kratki nazivi: `CHA`. Linije i pravi segmenti polilinija. Prvo ispisuje tekuće udaljenosti (ili dužinu i ugao).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` pita `Specify first chamfer distance <last>` i `Specify second chamfer distance <the first>`: prva se odsijeca s prve linije koju birate, druga s druge.
  - `A` pita `Specify chamfer length on the first line` i `Specify chamfer angle from the first line`.
  - `E` (mEthod) bira koju od dvije sljedeća kosina koristi. `T`, `M`, `U` i `P` rade kao u {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klik pravi oštar ugao.

Udaljenost duža od linije se odbija (`Distance is too large.`).

### BREAK i BREAKATPOINT

Kratki nazivi: `BR`. `Select object` (gdje kliknete je prva tačka), `Specify second break point [First point]`; `F` pita `Specify first break point` i `Specify second break point`. Dio između njih se uklanja; na krugu, suprotno kazaljci od prve tačke. BREAKATPOINT pita `Specify break point` i dijeli objekat u dva na toj tački (ne krug).

### LENGTHEN

Kratki nazivi: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: izbor ispisuje `Current length` (i uključeni ugao luka) i ponovo pita. `DE` pita `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` prevlačenje. Zatim `Select an object to change [Undo]`, ponavlja se: kraj najbliži klikom se pomjera. Linije, lukovi i otvorene polilinije.

### JOIN

Kratki nazivi: `J`. `Select objects to join`. Linije, lukovi i otvorene polilinije koje se sastaju kraj na kraj postaju polilinije (zatvorene kad se lanac zatvori); linije na jednoj liniji postaju jedna linija; lukovi jednog kruga postaju jedan luk ili krug. Historija kaže koliko je objekata spojeno, a koliko nije.

### MATCHPROP

Kratki nazivi: `MA`, `PAINTER`. `Select source object`, zatim `Select destination objects [Settings]` i {{key:Enter}}. Kopira sloj i boju, a između objekata iste vrste visinu i širinu teksta, veličine kota ili uzorak šrafure. `S` pita `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, ponavlja se do {{key:Enter}}; izbor se pamti za sesiju.

### EXPLODE

Kratki nazivi: `X`. Polilinije postaju linije i lukovi, reference blokova postaju svoji objekti, kote postaju linije, strelice i tekst. Niz koji ostaje uređiv ({{cmd:ARRAYEDIT}}) postaje obične kopije svojih objekata.

- `Select objects`

### GROUP

Kratki nazivi: `G`. {{cmd:GROUP}} daje odabranim objektima naziv koji dijele. Odaberite objekte, zatim ukucajte naziv (bez razmaka; `?` navodi grupe; Enter pravi grupu bez naziva) i, za imenovanu grupu, opcioni opis. Od tada klik na jedan od njih, ili prozor koji obuhvati jedan, bira sve njih, pa se pomjeraju, kopiraju i brišu zajedno; svaki objekat je i dalje sopstveni objekat. Objekat može biti u nekoliko grupa. Kopija cijele grupe je nova grupa bez naziva; kopija jednog člana sam za sebe pridružuje se grupi. Grupe pripadaju prostoru u kojem su napravljene (model ili list). Čuvaju se kad spasite kao DWG ili DXF i ponovo otvorite datoteku u CadCraft-u; DXF 2000 datoteke nose ih i kao objekte grupa za druge programe, a grupe napravljene u drugom programu se čitaju kad se otvori DXF ili DWG.

### UNGROUP

{{cmd:UNGROUP}} rastavlja grupe: odaberite objekte grupa (svaka grupa u kojoj su se rastavlja) ili ukucajte `Name` i naziv grupe. Objekti ostaju u crtežu. Jedan korak poništavanja vraća grupe.

### GROUPEDIT

{{cmd:GROUPEDIT}} mijenja jednu grupu. Izaberite jedan njen objekat, ili `Name` i njen naziv; grupa koja je već odabrana uzima se kakva jeste. Zatim: `Add` objekte (birani jedan po jedan, ne grupu po grupu), `Remove` objekte, `REName` grupu, mijenja `Description`, ili postavlja `Selectable` (da li klik na jedan objekat bira cijelu grupu). `eXit` ili Enter završava. Grupa bez objekata više ne postoji.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: uz `1` (početna postavka) klik ili prozor na objektu u grupi bira cijelu grupu; uz `0` pojedinačni objekti, pa možete urediti jednog člana. Čuva se za ovu sesiju.

## Međuspremnik

CadCraft-ov vlastiti međuspremnik: radi unutar crteža, između crteža i između kartica CadCraft-a u ovom pregledaču. Pogledajte [Kopiranje, lijepljenje i dupliranje](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ili {{ui:Kopiraj}} u grupi {{ui:Uređivanje}}. Kopira objekte u međuspremnik, sa blokovima i slojevima koje koriste. Objekti ostaju odabrani.

- `Select objects to copy` (preskače se kad su objekti već odabrani)

### CUTCLIP

{{key:Mod+X}}, ili {{ui:Izreži}} u meniju {{ui:Više}}. Kopira objekte u međuspremnik, zatim ih briše (jedan korak poništavanja).

- `Select objects to cut` (preskače se kad su objekti već odabrani)

### COPYBASE

Kopira objekte u međuspremnik s osnovnom tačkom koju birate; lijepljenje postavlja tu tačku.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, ili {{ui:Zalijepi}} u grupi {{ui:Uređivanje}}. Kopija prati kursor, visi s donjeg lijevog ugla svog opsega (ili sa njegovog centra, ili s tačke `COPYBASE`; vidi [Postavke aplikacije CadCraft](topic:settings)).

- `Specify insertion point`

Zalijepljeni objekti su odabrani. Blok koji crtež već ima pod istim nazivom zadržava definiciju ovog crteža. Kad je područje kopirano u MarkupCraft novije od onoga što je CadCraft kopirao (i mlađe od 6 sati), {{key:Mod+V}} i `PASTECLIP` umjesto toga lijepe to područje: pogledajte `PASTEAREA`.

### PASTEAREA

Kratki nazivi: `PAREA`. {{ui:Zalijepi kopirano područje}} u meniju {{ui:Više}}. Lijepi područje kopirano u MarkupCraft s {{ui:Kopiraj područje}} kao sliku u njegovoj pravoj veličini. Pogledajte [Slike u crtežu](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (samo kad list nije imao razmjeru crteža): broj, {{key:Enter}} za veličinu papira, ili `P`, zatim `First point on the pasted area`, `Second point on the pasted area` i njihova prava udaljenost.

### PASTEORIG

{{key:Mod+Shift+V}}, ili {{ui:Zalijepi na mjesto}} u meniju {{ui:Više}}. Lijepi na koordinatama s kojih su objekti kopirani. Ne pita ništa.

### DUPLICATE

Kratki nazivi: `DUP`. {{key:Mod+D}}, ili {{ui:Dupliraj i pomjeri}} u meniju {{ui:Više}}. Kopija objekata prati pokazivač od mjesta gdje je; {{key:Esc}} ne ostavlja ništa. Ne koristi međuspremnik.

- `Select objects to duplicate` (preskače se kad su objekti već odabrani)
- `Specify where the copy goes (Esc leaves nothing)`: kliknite, ukucajte tačku, `@dx,dy` (od mjesta gdje je bio pokazivač), ili udaljenost prema kursoru.

### SELECT

Pita `Select objects` (sa svim opcijama ispod) i ostavlja izabrano odabrano, za sljedeću naredbu ili za `P` kasnije.

### QSELECT

Kratki nazivi: `QS`. U pregledaču, dijalog {{ui:Brzi odabir}} (vidi [Odabir objekata](topic:select-objects#select-by-a-rule-quick-select)). Bez njega, komandna linija pita `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` i `Enter value`. Podudaranja postaju odabir.

### SELECTSIMILAR

Kratki nazivi: `SIM`. `Select objects [SEttings]` (ili trenutni odabir): bira svaki objekat iste vrste, sa istim slojem i bojom (i nazivom bloka, uzorkom šrafure). `SE` pita `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, ponavlja se do {{key:Enter}}.

### FIND

Nema kratkih naziva; ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Pronađi i zamijeni}}. U pregledaču, dijalog {{ui:Pronađi i zamijeni}} (vidi [Dodavanje teksta i oznaka](topic:text#find-and-replace-words)). Bez njega: `Enter text to find`, zatim `Enter replacement text (Enter: select what is found)`. Traži u tekstu, vrijednostima atributa i tekstu kote, na otvorenoj kartici ili u odabiru.

### SELECTALL i DESELECT

`SELECTALL` (kratki naziv `AI_SELALL`, {{key:Mod+A}}) bira svaki objekat koji možete uređivati na otvorenoj kartici. `DESELECT` (kratki nazivi `AI_DESELECT`, `SELECTNONE`; ili {{key:Esc}}) briše odabir.

## Kote

### DIMLINEAR

Kratki nazivi: `DLI`, `DIMLIN`. Horizontalna ili vertikalna udaljenost.

- `Specify first extension line origin [Select object]` (Enter ili `S`: `Select object to dimension`, zatim kliknite liniju, luk, krug ili segment polilinije)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` pita za tekst (`<>` je izmjerena vrijednost), `H` i `V` fiksiraju smjer, `R` pita `Specify angle of dimension line <0>`.

### DIMALIGNED

Kratki nazivi: `DAL`, `DIMALI`. Stvarna udaljenost između dvije tačke.

- Početne tačke kao u {{cmd:DIMLINEAR}}, zatim `Specify dimension line location [Text]`.

### DIMANGULAR

Kratki nazivi: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Luk: njegov ugao. Krug: `Specify second angle endpoint`. Linija: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: kliknite unutar ugla koji mjerite.

### DIMRADIUS i DIMDIAMETER

Kratki nazivi: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, zatim `Specify dimension line location [Text]`.

### DIMCONTINUE

Kratki nazivi: `DCO`, `DIMCONT`. Nastavlja od posljednje napravljene linearne ili poravnate kote (ili pita `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, ponavlja se do Enter.

### DIMBASELINE

Kratki nazivi: `DBA`, `DIMBASE`. Kao {{cmd:DIMCONTINUE}}, ali svaka kota kreće od prve početne tačke i naslaže se dalje van.

### DIMORDINATE

Kratki nazivi: `DOR`, `DIMORD`. `Specify feature location`, zatim `Specify leader endpoint [Xdatum/Ydatum/Text]`. Ispisuje koliko je karakteristika udaljena od početka UCS duž X ili Y, na vodilici: vodilica koja ide uglavnom gore ili dolje čita se kao X, ona koja ide ukoso čita se kao Y; `Xdatum` i `Ydatum` to fiksiraju. Prvo postavite početak pomoću {{cmd:UCS}} (bez njega je to 0,0 crteža). Hvataljke pomjeraju karakteristiku, početak i kraj vodilice, a vrijednost prati. Čuva se kao prava ordinatna kota u DWG i DXF. Odbija kraj vodilice na samoj karakteristici.

### DIMARC

Kratki nazivi: `DAR`. `Select arc or polyline arc segment`, zatim `Specify arc length dimension location [Text]`. Mjeri duž luka (ne tetive) i ispisuje simbol luka ispred vrijednosti. Odbija puni krug, liniju ili pravi segment polilinije. DWG je čuva kao kotu dužine luka; DXF je čuva kao ugaonu kotu s dužinom kao tekstom, a CadCraft je ponovo otvara kao kotu dužine luka.

### DIMJOGGED

Kratki nazivi: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Kota poluprečnika za krivu čiji je centar daleko ili van lista: linija kote počinje od tačke koju zadajete umjesto centra, sa prelomom u sebi, i i dalje ispisuje pravi poluprečnik. DWG je čuva kao kotu poluprečnika s prelomom; DXF je čuva kao kotu poluprečnika, a CadCraft je ponovo otvara s prelomom.

### DIMJOGLINE

Kratki nazivi: `DJL`. `Select dimension to add jog [Remove]`, zatim `Specify jog location (or press Enter)`. Stavlja simbol preloma na liniju linearne ili poravnate kote, da pokaže da udaljenost nije nacrtana u razmjeri; vrijednost se ne mijenja. `Remove` ga skida. Odbija druge vrste kota.

### QDIM

Nema kratkih naziva. `Select geometry to dimension`, zatim `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Kotira nekoliko objekata u jednom koraku, od krajeva linija i segmenata polilinija, centara krugova i lukova, tačaka i referenci blokova. Položaj iznad ili ispod objekata mjeri preko njih, a položaj pored njih mjeri gore. `Continuous` povezuje tačke u lanac, `Baseline` mjeri sve od prve, `Staggered` gnijezdi parove od sredine prema van, `Ordinate` daje svakoj tački njenu udaljenost od datuma (`datumPoint` bira novi), `Radius` i `Diameter` kotiraju svaki krug i luk koji izaberete. Režim se pamti. Sve što napravi je jedan korak poništavanja. Javlja kad ima manje od dvije tačke, ili nema lukova ili krugova za Radius i Diameter.

### DIMBREAK

Kratki nazivi: `DBREAK`. `Select dimensions to add or remove breaks`, zatim `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` ostavlja prazninu u liniji kote i produžnim linijama gdje god neki drugi objekat sijeku, i ponovo je računa kad se ti objekti ili kota pomjere. `Manual` (jedna kota) pita dvije tačke i ostavlja prazninu između njih. `Remove` uklanja sve praznine. Praznina je 1.5 puta veća od visine teksta kote.

### DIMSPACE

Nema kratkih naziva. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Pomjera linije kota paralelnih linearnih i poravnatih kota (ili uglovnih oko istog temena) tako da stoje na istom razmaku, mjereno od bazne kote, svaka na strani na kojoj jeste. `0` ih poravnava s osnovnom; `Auto` je dvostruka visina teksta bazne kote. Kote koje nisu paralelne s osnovnom ostaju netaknute.

### DIMINSPECT

Nema kratkih naziva. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Crta okvir oko vrijednosti sa oznakom ispred i stopom inspekcije poslije. `remove` skida okvir. Tekst tolerancije ostaje uz vrijednost.

### DIMOVERRIDE

Kratki nazivi: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, ponovo dok ne pritisnete Enter, zatim `Select dimensions`. Mijenja te postavke samo na odabranim kotama; stil kote se ne mijenja. Prihvata varijable koje su broj ili prekidač (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` vraća odabrane kote na njihov stil. Odbija naziv koji nije takva varijabla i vrijednost koju ne može primiti.

### DIMREASSOCIATE

Kratki nazivi: `DRE`, `DIMREASSOC`. `Select dimensions`, zatim za svaku njene početne tačke produžnih linija (`Specify first extension line origin on an object`: hvata se za kraj ili sredinu linije, temeno polilinije, centar; Enter ostavlja tačku slobodnom), ili za kotu poluprečnika, prečnika, prelomljenog poluprečnika ili dužine luka `Select arc or circle`. Kota je zatim vezana za te objekte: kad se oni pomjere ili promijene veličinu, ona prati u istom koraku poništavanja i ponovo mjeri. Ručno pomjerena vezana tačka, ili brisanje objekta, prekida tu vezu. Veza se čuva u DWG i DXF 2000 kao sopstveni podaci CadCraft-a; drugi programi vide običnu kotu.

### DIMDISASSOCIATE

Kratki nazivi: `DDA`, `DIMDISASSOC`. `Select dimensions`. Oslobađa ih od objekata za koje su vezane; ništa se ne pomjera.

### CENTERMARK

Kratki nazivi: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, ponovo dok ne pritisnete Enter. Crta krst u centru i četiri središnje linije do tačno iza krive (vrsta linije CENTER), kao obične linije na tekućem sloju; veličina se računa iz veličine strelice i ukupne razmjere tekućih postavki kote, a okreće se s UCS. Ne prate krug ako se on pomjeri.

### CENTERLINE

Kratki nazivi: `CL`. `Select first line`, `Select second line`. Crta liniju na pola puta između dvije linije (duž simetrale kad se sastaju), malo dužu od njih, vrste CENTER. Obična linija: ne prati te dvije linije.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Nema kratkih naziva. Svaka pita `Enter new value for … <current>` i postavlja tu veličinu za **nove** kote: ukupnu razmjeru, visinu teksta, veličinu strelice, decimalna mjesta (do 8), razmak oko teksta, produženje preko linije kote, odmak od početka. Pogledajte [Postavljanje veličina kota](topic:dimension-settings).

### DIMLUNIT

Postavka kote: format samo novih kota (1 naučni, 2 decimalni, 3 inženjerski, 4 arhitektonski, 5 razlomački).

### DIMSTYLE i -DIMSTYLE

Kratki nazivi: `DST`, `DDIM`, `D`. Upravljač stilovima kota: {{ui:Postavi trenutno}}, {{ui:Novi…}}, {{ui:Izmijeni…}}, {{ui:Preimenuj…}}, {{ui:Obriši}}, {{ui:Uporedi…}}, {{ui:Primijeni na izabrano}}. `-DIMSTYLE` u komandnoj liniji: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Pogledajte [Postavljanje veličina kota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT i DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, zatim kote (ili one koje su već odabrane). New pita tekst (`<>` = izmjerena vrijednost); Rotate ugao (0 vraća tekst); Oblique ugao produžnih linija od X ose (Enter = nijedan; samo linearne i poravnate kote). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Pogledajte [Postavljanje veličina kota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Kratki nazivi: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, ili, uz odabrane kote, `Units in the text of the selected dimensions`. Ispisuje izmjerenu dužinu u toj jedinici s jedinicom iza nje (DIMLFAC i DIMPOST sufiks); `D` vraća na jedinice crteža. Pogledajte [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Kratki nazivi: `RC`. Ispisuje `Arc length: … Type: …`, zatim `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular pita `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand prati pokazivač do klika ili {{key:Enter}}; `O` pita `Select object` i `Reverse direction? [Yes/No] <N>` i pretvara objekat u oblak. `A` pita `Specify the length of each arc`. `R`, `P` i `F` biraju vrstu za sljedeći oblak. Rezultat je zatvorena polilinija lukova.

### MLEADER

Kratki nazivi: `MLD`; ili {{ui:Vodilica}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, zatim tekst u okviru na mjestu (ili, bez njega, `Enter text (an empty line ends)`). `Block` najprije pita naziv bloka, a višestruka vodilica prikazuje taj blok umjesto teksta. Još linija vodilice: {{cmd:MLEADEREDIT}}. Čuva se kao prava višestruka vodilica u DWG; DXF čuva linije, strelicu i tekst koje crta.

### MLEADEREDIT

Kratki nazivi: `MLE`. `Select a multileader`, zatim `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: svaka tačka dodaje liniju vodilice od nove strelice do istog mjesta spuštanja, dok ne pritisnete Enter. `Remove leaders` zatim uklanja liniju vodilice koju kliknete (višestruka vodilica zadržava najmanje jednu). `Block content` pita naziv bloka i prikazuje taj blok umjesto teksta (pitaju se njegovi atributi); `Text content` vraća tekst. Svaka linija vodilice ima svoju hvataljku. DWG čuva svaku liniju vodilice i blok u jednoj višestrukoj vodilici.

### MLEADERALIGN

Kratki nazivi: `MLA`. `Select multileaders`, zatim `Select multileader to align to [Distribute/Spacing/Use current spacing]` i `Specify direction`. Pomjera mjesta spuštanja ostalih višestrukih vodilica (i njihov tekst ili blok) na liniju kroz mjesto spuštanja izabrane u tom smjeru; strelice ostaju tamo gdje pokazuju. `Spacing` ih takođe postavlja na jednak razmak; `Distribute` pita dvije tačke i ravnomjerno ih raspoređuje između. Potrebne su najmanje dvije višestruke vodilice.

### MLEADERCOLLECT

Kratki nazivi: `MLC`. `Select multileaders`, zatim `Specify collected multileader location [Vertical/Horizontal]` (Enter zadržava mjesto prve). Pravi jednu višestruku vodilicu od nekoliko: sadržaj blokova ide u novi blok koji drži svaki blok jedan pored drugog ili jedan ispod drugog; sadržaj teksta postaje jedna napomena s redom za svaki. Prva višestruka vodilica zadržava svoje linije vodilice; ostale se uklanjaju. Odbija mješavinu teksta i sadržaja blokova.

### TABLE

Kratki nazivi: `TB`; ili {{ui:Anotacije}} › {{ui:Više}} › {{ui:Tabela}}. Pravi tabelu: jedan objekat koji pomjerate, kopirate, rotirate, skalirate i štampate kao svaki drugi, sa ćelijama koje se čuvaju kao podaci.

- `Number of data rows or [Paste/File/Style] <3>`, zatim `Number of columns <3>`, `Text height` i `Top left corner of the table`. Tabela dobija red naslova (jedna spojena ćelija) i red zaglavlja iznad redova podataka.
- `P`: tabela iz ćelija tabele na međuspremniku (tekst s tabulatorom između ćelija). Pritisak na {{key:Ctrl+V}} kad su takve ćelije na međuspremniku radi isto, osim ako je CadCraft-ova vlastita kopija novija (ili CadCraft ne može da razluči: tada lijepi svoju kopiju i to kaže). `F`: tabela iz datoteke `.csv` ili datoteke s tabulatorima. Prvi red postaje red zaglavlja; širine kolona prilagođavaju se tekstu.
- `S`: bira stil tabele za ovu tabelu (vidi {{cmd:TABLESTYLE}}).
- Odbija broj redova ili kolona koji nije cijeli broj, i više ćelija nego što tabela može da drži (2.000 redova, 200 kolona, 40.000 ćelija).
- {{cmd:EXPLODE}} pretvara tabelu u linije i tekst. Sačuvana kao DWG tabela je prava tabela koju drugi programi mogu uređivati; sačuvana kao DXF je blok koji je crta, a CadCraft je ponovo otvara kao tabelu.

### TABLEDIT

Kratki nazivi: `TABLEEDIT`, `TABEDIT`; ili dvaput kliknite ćeliju. Uređuje tabelu.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Kliknite ćeliju, ili, s odabranom tabelom, ukucajte njen naziv (`B3`: kolona B, red 3; red naslova je red 1). U pregledaču se preko ćelije otvara okvir: {{key:Enter}} zadržava tekst, {{key:Tab}} ide na sljedeću ćeliju, {{key:Alt+Enter}} počinje novi red, {{key:Esc}} ostavlja ćeliju kakva je bila.
- Tekst koji počinje sa `=` je formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, sa `+ - * / ^`, zagradama i funkcijama kao `sqrt` i `round`. Ćelija prikazuje vrijednost; formula koja imenuje sopstvenu ćeliju, ćeliju van tabele ili ćeliju bez broja prikazuje `####`, a komandna linija kaže zašto.
- `R` / `C`: `Insert` ili `Delete` redova ili kolona kod izabrane ćelije (koliko, i iznad ili ispod, lijevo ili desno). Formule prate ćelije koje imenuju.
- `S`: širina kolone i visina reda. Red nikad nije niži od svog teksta. Odabrana tabela ima i hvataljku na ivici svake kolone i svakog reda.
- `M`: spaja od jedne izabrane ćelije do druge; `U`: razdvaja. `A`: poravnanje (`TL` gore lijevo … `MC` sredina centar … `BR` dolje desno). `H`: sopstvena visina teksta ove ćelije (0 = iz stila). `K`: red postaje naslov, zaglavlje ili red podataka. `CL`: prazni ćeliju.
- Odbija tabelu na zaključanom sloju, brisanje svakog reda ili kolone, i spajanje koje bi presjeklo drugu spojenu ćeliju na dva dijela.

### TABLESTYLE

Kratki nazivi: `TS`. Navodi stilove tabela sa brojem tabela koje koristi svaki, zatim `Table style: [New/Set/Edit/Delete/Apply]`.

- Stil čuva visinu teksta i poravnanje redova naslova, zaglavlja i podataka, razmak ćelija, i koje ivice se crtaju (spoljašnje, između redova, između kolona).
- `N` pravi stil od tekućeg i postavlja ga tekućim; `S` postavlja tekući stil (nove tabele ga preuzimaju); `E` uređuje jedan: tabele koje ga koriste ponovo se crtaju; `A` daje odabranim tabelama tekući stil; `D` briše jedan (ne Standard, ne tekući; tabele koje su ga koristile zadržavaju svoj izgled).
- Stilovi se čuvaju u crtežu (DWG i DXF).

### TABLEEXPORT

Čuva ono što tabela prikazuje kao CSV datoteku (formula kao svoju vrijednost). `Select a table`, ili je prvo odaberite. Tekstualne ćelije koje počinju sa `=`, `+`, `-` ili `@` dobijaju vodeći `'` da ih tabelarni program ne izvrši.

### TABLEPASTE

Kratki nazivi: `PASTETABLE`. Pravi tabelu iz ćelija tabele na međuspremniku, zatim pita gornji lijevi ugao. Isto što {{cmd:TABLE}} › `Paste`.

### DATALINK

Kratki nazivi: `DL`. `Data link: [New/List/Remove] <New>`. `N` pita CSV datoteku, postavlja tabelu iz nje i pamti naziv datoteke; `L` navodi veze sa njihovom datotekom, veličinom, vremenom čitanja i brojem tabela koje ih koriste; `R` uklanja vezu (njene tabele ostaju obične tabele).

### DATALINKUPDATE

Kratki nazivi: `DLU`. Ponovo čita datoteku veze podataka i ponovo puni tabele vezane za nju (redovi i kolone se dodaju ili uklanjaju da odgovaraju). Pregledač ne može sam otvoriti datoteku, pa traži da ponovo izaberete datoteku. Uz više veza pita koju.

### FIELD

Stavlja polje u crtež: tekst koji sam računa. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: sada, ili sačuvani, kreirani ili odštampani datum, i format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: naziv datoteke, sa ili bez nastavka. `S`: broj lista, njegov naziv, ili koliko ima listova. `P`: svojstvo crteža po nazivu (vidi {{cmd:DWGPROPS}}). `O`: izaberite objekat, zatim šta da se čita (površina, dužina, obim, poluprečnik, prečnik, sloj, naziv, x, y, tekst, rotacija, boja) i decimale. `E`: formula. `C`: tekst sa kodovima ukucanim kako jesu, kao `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Zatim `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: odabrani tekst dobija polje dodano poslije onoga što sadrži; ćelija tabele isto; referenca bloka pita koji atribut; {{key:Enter}} pita visinu i tačku za novi tekst.
- Na ekranu polje ima svijetlosivu pozadinu; štampa i PDF je nikad nemaju. Ručno ukucavanje preko teksta polja ga završava. Polje koje se ne može izračunati prikazuje `####`.
- Polje objekta pronalazi svoj objekat preko ključa koji CadCraft čuva na objektima (Postavke › CadCraft › Datoteke pogodne za spajanje); uz isključene ključeve odbija.

### UPDATEFIELD

Kratki nazivi: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` postavlja kad se polja sama ažuriraju: ukucajte slova `O` open, `S` save, `P` plot, `R` regen (sva četiri u početku), ili `NONE`.

### DWGPROPS

Kratki nazivi: `DRAWINGPROPS`. Navodi svojstva crteža, zatim `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Prvih šest su ona koja prikazuje panel {{ui:Detalji crteža}}; `U` dodaje vlastiti naziv i vrijednost, `R` uklanja jedan. Polja ih čitaju (`%<prop:title>%`, `%<prop:Client>%`) i prate odmah. Odbija vlastiti naziv koji je jedan od ugrađenih ili sadrži `%`, `<`, `>`, navodnik ili kosu crtu unazad.

## Parametarski

Pogledajte [Ograničavanje crteža](topic:constraints) i [Korištenje parametara i jednačina](topic:parameters). Ograničenja rade na kartici {{ui:Model}}.

### GEOMCONSTRAINT i GC naredbe

Kratki naziv `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, zatim upiti te naredbe.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (drugi se pomjera).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT i DC naredbe

Kratki naziv `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (broj, izraz ili `name=expression`).
- {{cmd:DCALIGNED}}: kao gore, s `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` pita tolerancije udaljenosti i ugla.
- {{cmd:DELCONSTRAINT}} (kratki naziv `DELCON`): `Select objects`; njihova ograničenja nestaju.
- {{cmd:CONSTRAINTBAR}} (kratki naziv `CBAR`): `Select objects [Showall/Hideall]`, zatim `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS i -PARAMETERS

{{cmd:PARAMETERS}} (kratki nazivi `PAR`, `PARAM`) otvara panel {{ui:Parametri}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Kratki naziv `SWMACRO`. Preuzima makro (.swb) koji ponovo gradi model kao jednu ograničenu skicu u SolidWorks-u. Pogledajte [Premještanje skica u i iz drugih modelara dijelova](topic:solidworks-sketches).

## Blokovi

### ANNOSCALE

Kratki nazivi: `CANNOSCALE`. Kaže anotacijsku razmjeru crteža i koliko anotativnih objekata sadrži, zatim pita `New annotation scale`: ukucajte `1:50`, `1:100`, `2:1`, goli broj (`50` je 1:50) ili naziv jedne od sopstvenih razmjera crteža. Svaki anotativni tekst i kota se mijenja tako da se štampa u istoj veličini na novoj razmjeri, u jednom koraku poništavanja; objekti koji nisu anotativni se ostavljaju, kao i objekat koji ima spisak razmjera bez nove ({{cmd:OBJECTSCALE}}). Pogledajte [Jedinice, papiri i razmjere](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Kratki nazivi: `OBJSCALE`. `Select annotative objects`, zatim `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Anotativni tekst ili kota čuva spisak anotacijskih razmjera. `Add` i `Delete` pitaju razmjeru (`1:50`, `2:1`, goli broj, ili naziv jedne od sopstvenih razmjera crteža); `Current scale` dodaje anotacijsku razmjeru crteža; `List` ispisuje razmjere svakog objekta. Prikaz čija je razmjera na spisku objekta prikazuje objekat u veličini koja štampa njegovu visinu na papiru na toj razmjeri, na ekranu i u štampi. Posljednja razmjera se ne može obrisati. Objekti koji nisu anotativni se izostavljaju: prvo uključite Anotativno u Svojstvima. Spisci se čuvaju u DWG i DXF kao vlastiti podaci CadCraft-a. Pogledajte [Jedinice, papiri i razmjere](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Kratki nazivi: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Uključeno (kako crtež počinje): anotativni objekat se prikazuje i u prikazu, ili u modelu, čija razmjera nije na njegovom spisku, u veličini koju ima. Isključeno: nije prikazan tamo i ne može se odabrati u modelu. Prekidač je jedan korak poništavanja; ne čuva se u datoteci.

### SCALELISTEDIT

Kratki nazivi: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` do {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit i Delete pitaju naziv razmjere. Sopstvene razmjere crteža ulaze u spiskove razmjera prikaza i štampe i čuvaju se s crtežom. Pogledajte [Jedinice, papiri i razmjere](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT i PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: tačke kroz koje kriva prolazi, `Close`, `Undo`, zatim `Start tangent` i `End tangent` (tačka, ili {{key:Enter}}). Method › Control vertices pita stepen (1 do 5) i crta iz kontrolnog poligona. Object pretvara polilinije u splinove kroz njihova temena. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` za nekoliko objekata; linije, lukovi i splinovi se prvo nude kao polilinije. Pogledajte [Splinovi i polilinije](topic:splines).

### BLOCK

Kratki nazivi: `B`, `BMAKE`.

- `Enter block name`. Ako postoji: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Zamjenjuju se jednom referencom na novi blok.

### WBLOCK

Kratki nazivi: `W`, `-WBLOCK`. Upisuje blok, neke objekte ili cijeli crtež kao novu DWG ili DXF datoteku. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (postaje početak novog crteža), `Select objects`, zatim `File format [DWG/DXF/R12 DXF]` i `File name for the new drawing`, pa `What to do with the objects [Retain/Convert to block/Delete]`. Convert ih zamjenjuje jednom referencom na blok s nazivom datoteke; Delete ih uklanja.
- **Block**: `Block to write out`. Sopstveni objekti bloka, s njegovom osnovnom tačkom kao početkom, uključujući ugnježdene blokove.
- **Entire drawing**: svaki objekat u modelskom prostoru. Listovi se ne upisuju; koristite {{cmd:SAVEAS}} za kopiju koja ih zadržava.

Nova datoteka sadrži samo slojeve, vrste linija, stilove teksta i kota i blokove koje koriste njeni objekti, i jedinice crteža. Verzija DWG je ona koju je {{cmd:SAVEAS}} posljednji put koristio. U pregledaču se datoteka preuzima; u Studiju se otvara dijalog za čuvanje.

### ATTDEF

Kratki nazivi: `ATT`, `DDATTDEF`, `-ATTDEF`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Definiši atribut}}. Ispisuje načine, zatim `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` kad je konstanta), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} uzima definicije atributa u blok.

### EATTEDIT i ATTEDIT

`EATTEDIT` (`DDATTE`, ili dvaput kliknite referencu s atributima; {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi atribute}}): `Select a block reference with attributes`, zatim dijalog {{ui:Uredi atribute}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): ista referenca, zatim `<prompt> (<TAG>) <value>` za svaki atribut; {{key:Enter}} zadržava vrijednost. Pogledajte [Atributi](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Vrijednosti se čuvaju; novi atributi dobijaju svoju zadanu vrijednost, uklonjeni nestaju, pozicije se vraćaju.

### BATTMAN

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Upravljač atributima}}. Dijalog: blok, atributi (oznaka, upit, zadana vrijednost, načini, redoslijed), {{ui:Ažuriraj reference (vrijednosti zadržane)}}, {{ui:Primijeni}}.

### REFEDIT i REFCLOSE

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi na mjestu}}. `REFEDIT`: `Select the block reference to edit in place` (ili odabir). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Snimi blok}} i {{ui:Odbaci}} na traci rade isto. Cijela izmjena je jedan korak poništavanja. Pogledajte [Atributi](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: da li pritisak poteza olovke postavlja debljinu linije onoga što prave {{cmd:SKETCHFIX}} i {{cmd:SKETCHLIVE}} (na početku uključeno). Pogledajte [Skiciranje olovkom](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Kratki naziv `OFFSTD`. Kaže koji standard kancelarije važi za ovaj crtež i odakle dolazi: sopstveni zapis crteža, zajednički standard vašeg tima, ili vaše Zadane politike (visine teksta `all.anno.*`); bez njih, veličine samog programa. `[Import/Layers/Title block/Clear/eXit]`: `Import` čita `cc-office-standard` .json (zapis koji pišu SuperCad i BimCraft) u ovaj crtež, spašen s njim u DWG i DXF; `Layers` dodaje kancelarijske slojeve koje crtež nema, u jednom koraku poništavanja, i nikad ne uklanja nijedan; `Title block` navodi polja kancelarije s vrijednostima ovog crteža; `Clear` uklanja sopstveni zapis crteža. Visine anotativnog teksta i kota prate važeći standard. Pogledajte [Jedinice, papiri i razmjere](topic:units-papers-scales).

### BPARAMS

Kratki nazivi: `BPM`, `BLOCKPARAMS`. Otvara upravljač parametrima za blok u uređivaču blokova, blok izabrane reference, ili blok koji navedete (`Block name`): parametri s formulama, više parametara vidljivosti s njihovim stanjima, i sopstvene vrijednosti i stanja izabrane reference. Pogledajte [Vaši vlastiti parametri i stanja vidljivosti](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` radi isto u komandnoj liniji: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT i BCLOSE

`BE`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi blok}}. `Enter block name to edit <the selected reference's block>` otvara uređivač blokova. `BCLOSE` pita `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Snimi blok}} i {{ui:Odbaci promjene}} na traci rade isto. Sve urađeno u uređivaču je jedan korak poništavanja.

### VIEWBASE

Kratki naziv: `FLATSHOT`. Ravan 2D pogled tijela na kartici 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, razmjera (`1:20`, `2:1`; {{key:Enter}} uzima onu koja stane na list), zatim centar pogleda. Jedna referenca bloka, vidljive ivice na VIEW-VISIBLE, skrivene isprekidane na VIEW-HIDDEN. Pogledajte [Ravni pogledi na listu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Kratki nazivi: `-PUBLISH`; ili {{ui:Svi listovi u jednom PDF-u}} u dijalogu {{ui:Štampaj u PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} štampa svaki list, `S` pita nazive odvojene zarezima. Jedan PDF, stranica i zabilješka po listu. Pogledajte [Svaki list u jednom PDF-u](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Kratki nazivi: `SSM`, `SHEETSETMANAGER`. Vodi vas do odjeljka {{ui:Set listova}} u lijevom panelu: listovi iz mnogo crteža, numerisani i imenovani, s naslovnim blokovima koje set popunjava, objavljeni kao jedan PDF. Pogledajte [Setovi listova](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): izaberite DWG ili DXF, zatim tačku umetanja. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; uz više veza, izaberite jednu njenu referencu ili ukucajte `N` i njen naziv. Pogledajte [Povezani crteži](topic:files#linked-drawings-external-references).

### COUNT

Kratki nazivi: `BCOUNT`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Prebroj blokove}}. `Select a block reference to count, or [All/Export] (Enter: All)`: izbor bira i broji svaku referencu tog bloka u ovom prostoru; {{key:Enter}} ili `A` navodi sve; `E` zatim `C` (brojevi) ili `A` (atributi) preuzima CSV. Pogledajte [Prebrojavanje blokova i izvoz rasporeda](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Kratki nazivi: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (velika i mala slova nisu bitna). `F` pita DWG ili DXF, zatim cijeli crtež ili jedan od njegovih blokova; naziv koji je već u upotrebi pita {{ui:Zadrži postojeće}} ili {{ui:Preimenuj}}. `L` otvara panel biblioteke.
- `Specify insertion point [Scale/Rotate]`. `S` pita `Specify scale factor`, `R` pita `Specify rotation angle`; oboje se pamti.
- Kad blok već stoji pored objekata koji se ponavljaju drugdje bez njega, red kaže koliko mjesta se predlaže, a upit dobija `suGgested`: `G` ih prikazuje; kliknite blizu jednog da postavite blok tamo, `A` za sva, {{key:Enter}} za povratak. Preuzimaju rotaciju svojih susjeda i zadane vrijednosti atributa. Crteži s više od 20.000 objekata u otvorenom prostoru se ne pretražuju.
- Zatim `Enter <prompt> (<TAG>) <default>` za svaki atribut koji blok traži. Pogledajte [Atributi bloka](topic:attributes).

### LIBRARY

Kratki nazivi: `LIB`. Otvara panel biblioteke: postavljanje stavki, provjera ažuriranja, zasluge biblioteke. Bez pitanja. Pogledajte [Umetanje iz datoteke ili biblioteke](topic:insert-from-file-and-library).

### STEELMEMBER

Kratki nazivi: `SMEMBER`; ili {{ui:3D element}} na kartici {{ui:Standardni}} biblioteke. `Section size <W12x26>` (kako ga kartica navodi), zatim `Start point [Column]` i `End point`: čvrsti element na kartici 3D između dvije tačke, na tlu. `C` pita osnovnu tačku stuba i njegovu visinu. Jedan korak poništavanja. Pogledajte [Postavljanje čeličnih profila i standardnih dijelova](topic:steel-and-standard-parts).

### PARTSLIST

Kratki nazivi: `PLIST`. `Top left corner of the parts list`, zatim `Text height <2.5>`: crta tabelu svakog standardnog dijela i čeličnog presjeka postavljenog iz biblioteke (brojevi stavki, količina, dio, standard, veličina, dužina, materijal, masa). Jedan korak poništavanja. Pogledajte [Postavljanje čeličnih profila i standardnih dijelova](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Kratki nazivi: `PU`. Uklanja definicije blokova koje ništa ne koristi. Bez pitanja.

### DELBLOCKS

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Obriši blokove}}. `Select block to delete [Name/eXit]`: izaberite referencu bloka, ili `N` za spisak blokova sa filterom (birate nekoliko), ili `X` / {{key:Enter}} za završetak. Svaka referenca odlazi — u modelu, na svakom listu i unutar drugih blokova — zatim definicija, a komandna linija kaže šta je obrisano, a šta nije. Blokovi bez naziva i povezani crteži se ne nude. Upit se vraća za sljedeći blok; cijela naredba je jedan korak poništavanja.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} lijepi ono što ste kopirali ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) kao jedan blok: izaberite tačku umetanja i tamo ide jedna referenca na novi blok, odabrana. Blok dobija sopstveni naziv (`A$C` i broj); {{cmd:RENAME}} mu daje vaš. Jedan korak poništavanja uklanja referencu i blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pita blok koji se zamjenjuje i blok koji ide na njegovo mjesto (`?` navodi blokove), zatim mijenja svaku referencu u modelu, na svakom listu i unutar drugih blokova. Svaka referenca zadržava mjesto, razmjeru, rotaciju, sloj i vrijednosti atributa koje oba bloka imaju; atributi koje ima samo novi blok počinju sa zadanim vrijednostima, a kaže vam koje vrijednosti su odbačene. Kad ništa više ne koristi stari blok, nudi da ga ukloni. Odbija povezane crteže i zamjenu koja bi stavila blok unutar samog sebe. Jedan korak poništavanja.

### MINSERT

{{cmd:MINSERT}} postavlja blok u redove i kolone: naziv bloka, tačka umetanja, razmjera, rotacija, broj redova i kolona, i razmaci između njih. Cijeli skup se okreće s rotacijom. Svaki je sopstvena referenca (najviše 10.000), pa se bilo koji može pomjeriti ili obrisati poslije.

### BLOCKSPALETTE

Kratki nazivi: `BLOCKSPAL`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Panel Blokovi}}. Prikazuje panel {{ui:Blokovi}} s kursorom u njegovom filteru. Svaki blok ima malu sliku; najnedavnije postavljeni dolaze prvi. Dva dugmeta pored filtera prebacuju između spiska i mreže slika. Kliknite sliku (ili {{ui:Umetni}}) da postavite blok s {{cmd:INSERT}}, ili ga prevucite na crtež da ga postavite gdje ga spustite.

{{ui:Biblioteke}}, ispod spiska: {{ui:Dodaj crtež}} uzima vlastitu DWG ili DXF datoteku i navodi njene blokove sa slikama, a cijeli crtež kao jedan blok. Postavljanje jednog kopira njegovu definiciju (i blokove koje ugnježđuje, i njihove slojeve) u ovaj crtež, kao što radi opcija `File` naredbe {{cmd:INSERT}}; blok koji je već ovdje s istom definicijom koristi se bez pitanja, a onaj istog naziva koji se razlikuje pita {{ui:Zadrži postojeće}} ili {{ui:Preimenuj}}. U pregledaču datoteka ostaje dok se stranica ne zatvori. U CadCraft Studio {{ui:Dodaj fasciklu}} navodi crteže u fascikli, svaki se otvara kad kliknete na njega, a datoteke i fascikle se pamte. Mali x uklanja biblioteku s spiska; datoteka se ne dira. Zajednička {{ui:Biblioteka}} je nešto drugo: pogledajte [Umetanje iz datoteke ili biblioteke](topic:insert-from-file-and-library).

### BCONVERT

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Pretvori ponavljanja u blokove}}. Pronalazi geometriju koja se ponavlja i pretvara svaku kopiju u referencu jednog bloka.

- `Select the objects that repeat, or [Block]`: objekti jedne kopije. `B` umjesto toga imenuje postojeći blok, da nađe rasute kopije njegovih objekata.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` i `P` mijenjaju šta se računa kao kopija; {{key:Enter}} pretražuje. Postavke se pamte.
- `Name for the new block <Block1>`, zatim `Specify the block's base point` ({{key:Enter}} uzima donji lijevi ugao odabira).
- Kaže koliko je drugih skupova objekata iste geometrije, ističe sve što bi zamijenio, i pita `Yes/No`.

Kopija su isti objekti pomjereni i okrenuti pod bilo kojim uglom (i zrcaljeni ili skalirani jednim faktorom kad su te opcije uključene): svaki objekat mora imati svoj par, unutar milionitog dijela veličine odabira. Svaka referenca dobija svoju rotaciju i razmjeru (zrcaljena dobija negativnu Y razmjeru), i sloj koji su njeni objekti dijelili. Objekti na zaključanim slojevima ostaju netaknuti i broje se. Pretražuje otvoreni prostor (model ili otvoren list). Vrlo velika pretraga staje na granici rada i to kaže. Jedan korak poništavanja.

### BSEARCH

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Pronađi blokove}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: dio naziva bloka, ili uzorak sa `*` i `?`. Navodi svaki blok s njegovim referencama ovdje i u cijelom crtežu.
- `A`: vrijednost atributa, ili `TAG=value`. Navodi blokove čije reference je drže, s nađenim vrijednostima. Konstantni atributi se računaju.
- `G`: odaberite objekte, ili jednu referencu bloka, i navode se blokovi čiji je oblik najmanje 85% sličan, najbolji prvi. Veličina, rotacija i zrcaljenje se ne računaju. Mjera poredi udaljenosti između tačaka raspoređenih duž obrisa, pa pronalazi slične; za tačne kopije koristite {{cmd:BCONVERT}}.

Reference nađene u otvorenom prostoru se odabiru, spremne za sljedeću naredbu.

### BREPLACE

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Zamijeni blokove}}. `Replace [Selected/All]`: `S` zamjenjuje odabrane reference blokova blokom koji navedete; `A` pita blok i njegovu zamjenu i mijenja svaku referencu, kao što radi {{cmd:BLOCKREPLACE}} (isti kod). Referenca zadržava mjesto, razmjeru, rotaciju, sloj i vrijednosti atributa koje oba bloka imaju; vrijednosti za koje novi blok nema mjesto se odbacuju i navode. `?` navodi blokove. Jedan korak poništavanja.

### DATAEXTRACTION

Kratki nazivi: `EATTEXT`, `DX`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Izvlačenje podataka}}. Navodi blokove, njihove atribute i svojstva objekata kao tabelu ili CSV datoteku.

- Radi nad odabirom, ili pita `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` kad odabir sadrži oboje. Blokovi bez naziva, tabele i sastavnice se nikad ne navode.
- Ispisuje kolone iz kojih birate (naziv, vrsta, sloj, X, Y, rotacija, razmjera, dužina, površina, boja, vrsta linije, prostor, i po jedna za svaku oznaku atributa), zatim `Columns, by name or number with commas between`. {{key:Enter}} uzima označene: naziv i svaki atribut za blokove; vrstu, sloj i dužinu za objekte.
- `Put identical rows together with a count? [Yes/No] <Yes>`, zatim `Put the list in a: [Table/Csv] <Table>`. Tabela je obična tabela ({{cmd:TABLEDIT}} je uređuje) i nije živa: pokrenite naredbu ponovo kad se crtež promijeni.
- Odbija kolonu koje nema na spisku. Tabela drži 1.999 redova podataka; CSV datoteka prima sve.

### COUNTTABLE

Broji reference blokova u odabiru (ili u otvorenom prostoru) i stavlja brojeve u tabelu (`Block`, `Count`) ili CSV datoteku. Za broj koji prati crtež sam pogledajte {{cmd:BOMTABLE}}.

## Listovi i štampa

### LAYOUT

Kratki nazivi: `LO`, `NEWLAYOUT`; ili dugme {{ui:+}} ispod crteža. Novi list s okvirom, naslovnim blokom i jednim prikazom, na ISO A3 (ili Tabloid za crteže u inčima ili stopama). Bez pitanja.

### MVIEW

Kratki nazivi: `MV`. Samo na listu ({{cmd:VPORTS}} na listu radi isto).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Prikaz pokazuje cijeli model na standardnoj razmjeri.
- `P` (Polygonal): kliknite temena konture (`Undo`, `Close`), {{key:Enter}} kad završite. Odbija manje od tri temena.
- `O` (Object): `Select a closed object for the viewport's outline`: zatvorena polilinija, krug ili elipsa na listu. Prikaz preuzima njen oblik (krivine kao kratki pravi dijelovi); objekat ostaje kakav je bio. Odbija objekat koji nije zatvoren.

### VPCLIP

Obrezuje prikaz koji je već na listu. `Select viewport to clip` (ili ga prvo odaberite), zatim `Select the object to clip to [Polygonal/Delete]`:

- Kliknite zatvorenu polilinju, krug ili elipsu, ili {{key:Enter}} (ili `P`) da kliknete temena poligona.
- `D` (Delete, nudi se kad je prikaz obrezan) ga ponovo pravi pravougaonikom: kutija oko konture koju je imao.
- Ono što prikaz pokazuje ne mijenja se na papiru, i njegova razmjera ostaje. Model se crta i štampa samo unutar konture, a okvir je prati. Jedan korak poništavanja.
- Obrezani prikaz ima hvataljku na svakom temenu svoje konture, osim centra i četiri ugla svoje kutije (prevlačenje ugla kutije rasteže konturu s njim). Svojstva pokazuju Obris: Pravougaonik, ili Obrezan s brojem temena.
- DWG i DXF 2000 datoteke čuvaju konturu za CadCraft. Drugi programi otvaraju prikaz kao pravougaonik oko nje; DXF R12 čuva samo pravougaonik.
- Na kartici modela kaže da su prikazi na listovima.

### VPORTS

Kratki nazivi: `VIEWPORTS`. {{cmd:SPLIT}} je isto i s lista, a {{ui:Pogled}} › {{ui:Više}} › {{ui:Podijeli jedno pored drugog}}, {{ui:Podijeli jedno iznad drugog}}, {{ui:Četiri okna}}, {{ui:Jedno okno}} to pokreću. Na modelu: `Enter number of panes [SIngle/2/3/4] <3>`; `2` pita `[Horizontal/Vertical] <Vertical>` (Vertical = jedno pored drugog), `3` pita `[Left/Right] <Right>` (gdje ide veliko okno). Svako okno zadržava svoj pogled i prostor; klik čini okno aktivnim. Na listu je to {{cmd:MVIEW}}. Pogledajte [Podjela ekrana](topic:split-screen).

### VPVIEW

Nema kratkih naziva. Samo na listu.

- `Select viewport` (preskače se ako je jedan odabran), zatim na modelu: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Nema kratkih naziva. Vaš sopstveni koordinatni sistem; nije izmjena. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: tačka je novi početak, zatim `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: početak, tačka na pozitivnoj X osi, tačka na pozitivnoj strani Y. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` i naziv. Pogled se okreće tako da je nova X osa vodoravna. Pogledajte [Okretanje pogleda i korištenje sopstvenih koordinata](topic:ucs-and-turned-view).

### PLAN

Nema kratkih naziva. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: okreće pogled aktivnog okna tako da je X osa UCS (ili svijeta) vodoravna. Ništa u crtežu se ne pomjera.

### TURNLEFT, TURNRIGHT, TURNWORLD

Nema kratkih naziva; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Okreni pogled 90° ulijevo}}, {{ui:Okreni pogled 90° udesno}}, {{ui:Nazad na svijet}}. Isto što `UCS Z -90`, `UCS Z 90` i `UCS W`, s pogledom koji prati.

### VPLAYER

Nema kratkih naziva. Na listu ili unutar prikaza. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` pitaju nazive slojeva (zarezi, `*` i `?` zamjenski znakovi), zatim prikaze `[All/Select/Current] <Current>`; Reset vraća svaki sloj na njegovo zadano stanje „zamrznut u novim prikazima“; `V` postavlja to zadano (`[Frozen/Thawed]`), koje koristi {{cmd:MVIEW}}. `?` navodi slojeve zamrznute u tekućem prikazu. Kolona prikaza u panelu Slojevi radi isto za jedan prikaz. Pogledajte [Zamrzavanje sloja u jednom prikazu](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Kratki nazivi: `MS`; ili dvaput kliknite unutar prikaza. Samo na listu. Radi na modelu kroz prikaz: onaj koji je odabran, jedini na listu, ili `Click inside the viewport to work in`. Pomjeranje i zumiranje unutra mijenjaju pogled prikaza (prikaz zaključan za ekran ga zadržava, a list se pomjera); novi pogled se upisuje kao jedan korak poništavanja. Pogledajte [Rad na modelu kroz prikaz](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Kratki nazivi: `PS`; ili dvaput kliknite van prikaza, ili kliknite karticu ispod crteža. Vraća na list.

### PLOT

Kratki nazivi: `PRINT`, `PUBLISH`, `EXPORTPDF`; ili {{key:Mod+P}}. Otvara dijalog {{ui:Štampaj u PDF}}. Pogledajte [Štampa u PDF](topic:plot-pdf).

### PLOTSTYLES

Kratki nazivi: `STYLESMANAGER`, `PSTABLES`; ili {{ui:Uredi tabele…}} u dijalogu {{ui:Štampaj u PDF}}. Otvara {{ui:Tabele stilova štampe}}: šta svaka boja štampa kao (boja, siva, tinta, debljina linije), čuva se s crtežom. Pogledajte [Tabele stilova štampe](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} pomjera objekte između lista i modela kroz prikaz, skalirane i okrenute da izgledaju isto s druge strane. Na listu, odaberite objekte i oni idu u model (izaberite prikaz kad ih ima više). Dok radite na modelu kroz prikaz ({{cmd:MSPACE}}), odabrani objekti dolaze na list. Kaže koliko su puta postali veći ili manji. Prikazi ostaju na svom listu. Jedan korak poništavanja.

### ISODRAFT

{{cmd:ISODRAFT}} uključuje ili isključuje izometrijsko crtanje `ON` ili `OFF`, ili ide direktno na ravan `Left`, `Top` ili `Right`. Dok je uključeno: Ortho ({{key:F8}}) drži linije duž dvije ose ravni (lijevo: 90° i 150°; gore: 30° i 150°; desno: 30° i 90°), praćenje po polarnom uglu ({{key:F10}}) prati iste ose, hvatanje za mrežu ({{key:F9}}) koristi izometrijsku mrežu, a mreža ({{key:F7}}) se crta linijama pod 30°, 90° i 150°. {{cmd:ELLIPSE}} dobija `Isocircle`: zadajte centar i poluprečnik (ili `Diameter`) i crta elipsu koju krug prikazuje na tekućoj ravni. Crtež ostaje ravan: ovo su pomagala za crtanje slikovitog pogleda, a ne 3D model. Postavka je za ovu sesiju i ne čuva se u datoteci.

### ISOPLANE

{{cmd:ISOPLANE}} bira ravan na kojoj radi izometrijsko crtanje: `Left`, `Top` ili `Right`. Enter prelazi na sljedeću ravan. Dok je izometrijsko crtanje uključeno, {{key:F5}} radi isto usred naredbe; dok je isključeno, {{key:F5}} prepušta pregledaču.

## Upiti

### CAL

Ispisuje vrijednost proračuna, kao što bi se čitala bilo gdje gdje se ukucava dužina.

- `Expression`: ukucajte je, na primjer `12'6"+3/4"` ili `(24'-0")/3`, i pritisnite {{key:Enter}}. CadCraft ispisuje `= 12'-6 3/4"   (150.75 drawing units)`. Pogledajte [Aritmetika u ukucanoj vrijednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Kratki nazivi: `DI`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Izmjeri razmak}}.

- `Specify first point`, `Specify second point`. Ispisuje udaljenost, ugao, Delta X i Delta Y.

### AREA

Kratki nazivi: `AA`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Površina}}. Ispisuje površinu i obim.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Kliknite ili ukucajte uglove; kod `Specify next point (Enter closes) [Undo]` pritisnite {{key:Enter}} da zatvorite konturu. `U` poništava posljednji ugao.
  - {{key:Enter}} ili `O`, zatim `Select object`: krug (ispisuje obim kružnice), elipsa, polilinija (otvorena se zatvara pravom linijom za površinu, a njena dužina se ispisuje) ili šrafura (rupe se oduzimaju).
  - `A` (Add area) i `S` (Subtract area) čuvaju tekući zbir: upit počinje s `(ADD mode)` ili `(SUBTRACT mode)`, svako područje se dodaje ili oduzima, a `Total area = …` se ispisuje poslije svakog. U tim načinima `O` bira objekte do {{key:Enter}}, a {{key:Enter}} na prvom upitu završava naredbu.

### MEASUREGEOM

Kratki nazivi: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; poslije svakog mjerenja pita ponovo, a `eXit` je zadan.

`Quick` mjeri oko pokazivača dok ga pomjerate: udaljenost do najbližeg objekta desno, gore, lijevo i dolje (duž osa tekućeg UCS), nacrtana dok idete, i ugao gdje se dva od tih susjeda pravo sastaju. Klik upisuje četiri udaljenosti, čistu širinu i visinu i uglove u historiju; Enter vraća na opcije. Čita ono što je na ekranu.

- `D`: dvije tačke, kao {{cmd:DIST}}.
- `R`: `Select arc or circle`; ispisuje poluprečnik i prečnik.
- `A`: luk (njegov uključeni ugao), linija, zatim druga linija (ugao između njih, prema njihovim dalekim krajevima), ili {{key:Enter}} i tri tačke (teme, zatim dva kraja).
- `AR`: kao {{cmd:AREA}}, jedna površina.

### ID

Nema kratkih naziva. `Specify point`; ispisuje njen X i Y.

### LIST

Kratki nazivi: `LI`, `LS`. `Select objects`; ispisuje vrstu, sloj i glavne mjere svakog objekta.

### MASSPROP

{{cmd:MASSPROP}} daje svojstva presjeka regija i zatvorenih objekata koje birate, uzetih zajedno: površinu, obim, granični okvir, centroid, momente inercije oko X i Y osa kroz početak, proizvod inercije, radijuse inercije, iste momente oko centroida, i glavne momente s pravcima njihovih osa. Rupe u regiji računaju se kao rupe. Brojevi su u jedinicama crteža i tačni za konture od linija i lukova; elipse i splinovi se mjere kao kratki pravi segmenti, i to kaže. Poslije izvještaja pita da li da ga upiše u tekstualnu datoteku. Objekti koji nisu zatvoreni se izostavljaju, i kaže koliko ih je.

## Prikaz, datoteka i ostalo

### ZOOM

Kratki nazivi: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Kliknite dva ugla za prozor. `E`, `A` ili Enter: cijeli crtež.
- `P` (Previous, ili {{ui:Prethodni}} na traci s alatima) vraća na prethodni pogled, do 10 pogleda po kartici; niz koraka točkića ili jedno pomjeranje broji se kao jedan pogled.
- Broj kao `2`, `2x` ili `0.5x` (ili `S` pa broj) uvećava ili umanjuje za taj faktor oko sredine ekrana.
- `C` pita `Specify center point` i `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT i PDF naredbe

Kratki nazivi: `PDFATT` za {{cmd:PDFATTACH}}, `PDFIM` za {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} stavlja stranicu PDF-a ispod crteža (datoteka, stranica, tačka umetanja, razmjera, rotacija); {{cmd:PDFIMPORT}} pretvara linije, krive, ispune i tekst stranice u objekte crteža na slojevima nazvanim po PDF-u, u pravoj veličini, u unesenoj razmjeri, ili skalirane iz dvije tačke i prave udaljenosti. {{cmd:PDFCLIP}} obrezuje podlogu, {{cmd:PDFADJUST}} postavlja stišavanje, kontrast, monohromno ili je isključuje, {{cmd:PDFLAYERS}} uključuje ili isključuje slojeve samog PDF-a, a {{cmd:PDF}} ponovo daje CadCraft-u datoteke koje koriste podloge crteža. Pogledajte [PDF podloge](topic:pdf-underlay).

### AUTOCOMPLETE

Kratki nazivi: `AUTOC`. Automatsko dovršavanje crteža: kad nijedna naredba nije pokrenuta, sivi duh pokazuje šta uzorci vašeg crteža kažu da dolazi. {{cmd:AUTOCOMPLETE}} ga uključuje `On` ili isključuje `Off` (također Postavke › CadCraft) ili `Show` prikazuje šta bi sada predložio. **Tab** crta duha kao jedan korak poništavanja, **Esc** ga odbacuje dok se crtež ne promijeni. Nalazi tri stvari u najnovijim objektima: sljedeću kopiju nečega nacrtanog dvaput ili više puta na ravnom koraku (stubovi, stepenik stepenica i gazište), sljedeće korake stepenica od polilinije, i nedostajuću stranu sobe ili lanca zidova. Usred {{cmd:LINE}} ili {{cmd:PLINE}} duh je **sljedeća tačka**: sljedeći korak stepenica (gazište, stupanj, gazište…), četvrti ugao pravougaonika, tačka koja ga zatvara, ili još jedan jednak korak. Dovedite kursor blizu i pritisnite **Tab**, kao da ste kliknuli tamo; nastavite ili pritisnite Enter. Računa se na ovom računaru po pravilima, bez modela.

### AUTOSHEET

Kratki nazivi: `ASH`. Listovi koji se sami slažu. {{cmd:AUTOSHEET}} uzima dijelove crteža (vaše imenovane poglede, ili zasebne dijelove modela, ili cijeli model), bira veličinu papira (ili onu koju date), daje svakom dijelu standardnu razmjeru (jednu za sve, ili najveću koju svaki može) i stavlja poglede u redove na nove listove, sa naslovnim blokom i natpisom (naziv i razmjera) ispod svakog. Što ne stane na jedan list dobija svoj list. Jedan korak poništavanja. Računa se na ovom računaru po pravilima, bez modela.

### PHOTOSKETCH

Kratki nazivi: `PSK`. Fotografija skice u crtež. Izaberite fotografiju (JPEG, PNG ili TIFF) ruke skice na listu papira. {{cmd:PHOTOSKETCH}} nalazi četiri ugla lista, ispravlja perspektivu, uzima veličinu papira koju navedete (`Paper`, ili najbližu standardnu) i `Scale` skice (1 : n), zatim ocrtava linije olovke u linije, lukove i krugove, sa slojem za svaku boju olovke (crna, crvena, plava, zelena). Ako ne može da nađe ivicu papira, uzima cijelu fotografiju kao list i to kaže. Natpisi se izostavljaju. Jedan korak poništavanja. Radi na ovom računaru klasičnom obradom slika, bez modela, ništa se ne šalje. Pogledajte i naredbe za skenirane crteže.

### AUTODIM

Kratki nazivi: `ADIM`. Automatsko kotiranje po pravilima. {{cmd:AUTODIM}} kotira odabrane objekte (ili cijeli crtež) prema njihovim ravnim i uspravnim ivicama: lanac kota duž stranica koje izaberete (`Sides`), jednu ukupnu kotu izvan njega, širinu svakog otvora (razmak između kolinearnih linija zida), promjer za svaku veličinu rupe, i uz `Grid` razmak između linija mreže. Kota koja je već tu ne pravi se ponovo. Jedan korak poništavanja. Računa se na ovom računaru po pravilima, bez modela.

### GRIDMOVE

Kratki nazivi: `GM`. Pomjeranje linije mreže nosi cijeli skup. {{cmd:GRIDMOVE}} pomjera liniju mreže (liniju na sloju čiji naziv kaže grid ili axis) i ono što visi na njoj: zidovi s krajem na liniji se rastežu da je prate, zidovi duž nje se pomjeraju cijeli, stubovi (reference blokova i krugovi na liniji), njen balon i oznaka se pomjeraju, a kote čije tačke leže na njoj mjere novi razmak. Dajte dvije tačke (računa se samo dio preko linije) ili `Distance`. Jedan korak poništavanja vraća sve. Radi po pravilima na ovom računaru.

### DETAILS

Kratki nazivi: `DET`. Detalji koji vas pronalaze. {{cmd:DETAILS}} čuva detalje vaše firme: `Add` stavlja blok ovog crteža na spisak, `List` i `Remove` ga upravljaju, a `Find` ih rangira za ono što je odabrano (ili za ono što ste posljednje nacrtali) prema riječima na slojevima, nazivima blokova, uzorcima šrafure i napomenama, u poređenju s nazivom i napomenama svakog detalja, pa prozor-glava nalazi vaše flaširanje parapeta. Izaberite broj i tačku da ga postavite. Uz uključeno `Hint` (također Postavke › CadCraft), odabir nečega što detalj odgovara ispisuje jednu liniju u statusnoj traci. Spisak se čuva u ovom pregledaču, na ovom računaru, i taj spisak se pretražuje. `Share` ga stavlja i u vašu fasciklu Dokumenti (`.cadcraft/firm-details.json`, s crtežom svakog bloka): `Pull` dodaje ono što ima vaš tim a vi nemate, `Push` dodaje ono što imate a oni nemaju, `Both` radi oboje, i ništa se ne uklanja ni s jedne strane. Prvo otvorite fasciklu Dokumenti ({{cmd:DOCUMENTS}}); kad je ta fascikla fascikla Team Cloud Plan, cijeli tim dijeli jedan spisak. Stavka detalja u panelu Biblioteka ima dugme **Dodaj u detalje moje firme** koje je stavlja na isti spisak. Računa se na ovom računaru po riječima, bez modela.

### SKETCHFIX

Kratki nazivi: `SKF`. Skice olovkom postaju precizna geometrija. Pritisnite i prevucite jedan slobodan potez odjednom (olovka, miš ili prst), zatim Enter. Svaki potez se čita kao linija, krug, luk, pravougaonik ili polilinija: skoro vodoravne i uspravne linije postaju tačno vodoravne i uspravne, zatvoren okrugao potez postaje krug, zatvoren potez s četiri prava ugla postaje pravougaonik, a krajevi poteza se privlače zajedno i na krajeve koji su već u crtežu. Jedan korak poništavanja. Računa se na ovom računaru po pravilima, bez modela.

### SCANATTACH i naredbe skeniranih crteža

Kratki nazivi: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nema nijedan. Rade na slici, jedan korak poništavanja svaka. {{cmd:SCANATTACH}} umeće PNG, JPEG, TIFF (jednu ili sve stranice) ili PDF stranicu koja je slika. {{cmd:SCANSCALE}} skalira list iz dvije odabrane tačke i prave udaljenosti. {{cmd:SCANALIGN}} pomjera i okreće ga na dvije tačke (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} prikazuje ugao dugih linija lista i okreće list kad `Accept` ili date `Value`. {{cmd:SCANCLEAN}} ga pravi crno-bijelim (`Threshold` Auto/Adaptive/Level, `Specks`) i `Run`. {{cmd:SCANCROP}} zadržava prozor. {{cmd:SCANERASE}} briše `Rectangle`, `Polygon` ili `Lasso`. {{cmd:SCANTRACE}} ocrtava linije i lukove na novi sloj (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) i javlja šta je našla i šta je ostavila kao raster. {{cmd:SCANINFO}} navodi originalnu datoteku i korake. {{cmd:RASTERSNAP}} uključuje ili isključuje hvatanje za linije skeniranih listova. Pogledajte temu Skenirani crteži i ocrtavanje.

### REGEN i REGENALL

Kratki nazivi: `RE` za {{cmd:REGEN}}, `REA` za {{cmd:REGENALL}}. Ponovo gradi ono što je nacrtano na ekranu iz crteža: {{cmd:REGEN}} karticu koju gledate (na listu, i model koji njeni prikazi pokazuju), {{cmd:REGENALL}} svaku karticu, svako okno podijeljenog ekrana i svaki otvoreni crtež. Koristite ih kad slika izgleda zastarjelo poslije skriptirane ili vrlo velike promjene, ili kad je pomoćnik uređivao crtež; sam crtež se ne dira, pa nema šta da se poništi.

### NAMEDVIEW

Kratki nazivi: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, zatim naziv pogleda. `S` spašava pogled na ekranu, `W` prozor koji izaberete, `R` prikazuje sačuvani pogled, `D` briše jedan, `?` navodi poglede ove kartice. Spašavanje pod postojećim nazivom ga zamjenjuje; svaka promjena je jedan korak poništavanja. Pogledi pripadaju kartici na kojoj su sačuvani. DWG i DXF datoteke ih čuvaju (tabela VIEW); pogledi lista se vraćaju na prvi list, jer datoteka ne kaže kojem pripadaju.

### UNDO i REDO

Kratki nazivi: `U` za {{cmd:UNDO}}; {{cmd:REDO}} nema. Također {{key:Mod+Z}} i {{key:Mod+Y}}.

### LAYER

Kratki nazivi: `LA`. Prebacuje na panel {{ui:Slojevi}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` ili naziv (`?` navodi ih: Continuous, one crteža, i DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE sa njihovim veličinama `2` (polovina) i `X2` (dvostruko)). {{cmd:LWEIGHT}} (`LW`): debljina linije za nove objekte u mm, ili `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): razmjera vrste linije crteža (poništiva). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — isto što dugme {{ui:LWT}} u statusnoj traci. Pogledajte [Debljine linija i vrste linija](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, zatim novi naziv; objekti ili reference slijede. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` do {{key:Enter}}, zatim `Select object on target layer or [Name]` i `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, zatim `Y`: sloj i svaki objekat na njemu odlaze (ne sloj 0, DEFPOINTS ili tekući sloj). Jedan korak poništavanja svaka. Pogledajte [Organizacija crteža pomoću slojeva](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Slojevi biranjem objekata; također u meniju {{ui:Alati}} panela {{ui:Slojevi}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, zatim {{key:Enter}}: svi ostali slojevi se isključuju. {{cmd:LAYUNISO}} ih ponovo uključuje. {{cmd:LAYOFF}} i {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (ili zamrznut), iznova; `U` poništava posljednji, {{key:Enter}} završava. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} uključuje svaki sloj, {{cmd:LAYTHW}} odmrzava svaki sloj. Svaka naredba je jedan korak poništavanja. Pogledajte [Organizacija crteža pomoću slojeva](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} počinje prazan crtež, a {{cmd:OPEN}} otvara DWG ili DXF, svaki u svojoj kartici preko crteža (nekorišteni novi crtež se koristi umjesto nove kartice). Zatvaranje kartice s nespašenim promjenama pita prvo. Pogledajte [Podjela ekrana](topic:split-screen).

{{cmd:SAVE}} (kratki naziv `QSAVE`, također {{key:Mod+S}}) preuzima kopiju u formatu crteža: DWG ako je otvoren iz DWG, DXF ako je iz DXF. Novi crtež koristi format posljednje izabran u Spasi kao u ovom pregledaču, inače DWG.

{{cmd:SAVEAS}} (također {{key:Mod+Shift+S}}) otvara dijalog {{ui:Spasi kopiju kao}}: izaberite {{ui:DWG}} (i njegovu {{ui:Verziju}}), {{ui:DXF R12}} ili {{ui:DXF 2000}}, zatim {{ui:Spasi}}. Izbor ostaje za ovaj crtež i za nove crteže u ovom pregledaču.

{{cmd:DXFOUT}} uvijek preuzima kopiju DXF R12, bez mijenjanja formata koji koristi {{cmd:SAVE}}.

Pogledajte [Datoteke: šta se otvara, šta se čuva](topic:files#saving).

### TOUR

Kratki nazivi: `TUTORIAL`. Ponovo pokreće šestorazredni uvod u prvi crtež. Pogledajte [Početak rada](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Kratki nazivi: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Pogledajte [Postavke](topic:settings#toolbar-position).

### COMMANDLINE

Kratki nazivi: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: prikači ili učini plutajućom komandnu liniju, pretvori je u jednu liniju, pita koliko linija historije da prikazuje (0 do 12), ili otvara historiju. Pogledajte [Postavke](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: trake iznad crteža kakve su bile, ili kompaktne. Pogledajte [Postavke](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: korak na koji se poravnavaju linije {{ui:Polar}} praćenja (više od 0, do 180). Čuva se u ovom pregledaču.

### UNITS

Kratki nazivi: `UN`. Kako se dužine pišu i ukucavaju.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural i Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Ostali: `Enter number of decimal places (0 to 8)`.

Nove kote ga prate. Jedan korak poništavanja. Isto što {{ui:Format dužine}} i {{ui:Preciznost}} u {{ui:Trenutne postavke}}; pogledajte [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Kratki nazivi: `GDS`. Pregled IC rasporeda (GDSII stream datoteka): laboratorijska proba, samo za pregled i mjerenje.

- Birač datoteka uzima datoteku `.gds`; uz više glavnih ćelija, `Enter the top cell to draw`.
- Svaki sloj i tip podataka postaje sloj crteža (`GDS 1`, `GDS 2/5`), reference i nizovi se postavljaju ravno, u korisničkoj jedinici datoteke (obično mikrometri). Jedan korak poništavanja. Ništa se ne simulira i ne provjerava, a datoteka se ne upisuje nazad.

### DIAGRAM

Kratki nazivi: `TEXTDIAGRAM`, `T2D`. Dijagram iz teksta.

- Okvir prima tekst (ili jedan red s `;` između iskaza u komandnoj liniji): Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili spisak od-do.
- `Specify the top left corner of the diagram`, zatim `Specify the text height`.

Blokovi i spojnice su obični objekti na sloju `Diagram`, odabrani kad se završi. Jedan korak poništavanja. Pogledajte [Crtanje dijagrama iz teksta](topic:text-to-diagram).

### OLELIST

Kratki nazivi: `OLES`. OLE objekti koje DWG nosi a CadCraft ih ne može sam postaviti.

- Navodi svaki: broj, vrsta, veličina, da li je sačuvao sliku.
- `Enter an option [Place/eXit] <eXit>`: Place pita broj, donji lijevi ugao i širinu, i crta okvir sa slikom. Jedan korak poništavanja; sačuvani objekat se ne mijenja. Pogledajte [Slike](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Kratki nazivi: `SHX`. Vaši sopstveni SHX fontovi.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Fascikla}} čita svaki `.shx` u fascikli (CadCraft Studio; ponovo pri svakom pokretanju), {{ui:Datoteke}} uzima izabrane datoteke (pregledač), {{ui:Obrnuto}} slaže slova jednog fonta od zadnjeg prema prvom. Stilovi teksta koji imenuju učitani font crtaju se u njemu. Pogledajte [Crtanje teksta vlastitim SHX fontovima](topic:shx-fonts).

### LIMITS

Koliko je veliki crtež predviđen da bude.

- `Specify lower left corner or [ON/OFF] <current>`: tačka, `ON` ili `OFF`.
- `Specify upper right corner <current>`.

Mreža ispunjava granice, {{cmd:ZOOM}} All ih prikazuje, a uz uključene granice tačka van njih se odbija (`**Outside limits`). Jedan korak poništavanja; čuva se u DWG i DXF. Pogledajte [Postavljanje granica crteža](topic:drawing-limits).

### AUNITS

Kratki nazivi: `ANGUNITS`. Kako se uglovi prikazuju i ukucavaju.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ili za druga dva `Enter precision` (0 stepeni, 2 minute, 4 sekunde, 5 do 8 decimala sekunde).

Jedan korak poništavanja; čuva se u DWG i DXF. Isto što {{ui:Format ugla}} u {{ui:Trenutne postavke}}. Pogledajte [Ukucavanje i prikaz azimuta i uglova](topic:bearings-and-angles).

### APPLOAD

Kratki nazivi: `AP`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Učitaj aplikaciju…}}. Dijalog {{ui:Učitaj aplikacije}}: učitava `.lsp` rutine i `.dcl` datoteke dijaloga, uklanja ih, ponovo učitava iz historije, i Startup Suite. Naredbe `(defun c:NAME …)` iz rutine onda rade kao svaka druga. Pogledajte [Učitavanje aplikacija](topic:load-applications) i [Pokretanje LISP rutina](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Uredi skraćenice…}}) otvara vašu datoteku skraćenica (redovi `ALIAS, *COMMAND`); {{ui:Spasi}} je primjenjuje. {{cmd:REINIT}} je ponovo primjenjuje. Pogledajte [Uredi skraćenice naredbi](topic:command-aliases).

### OPTIONKEYS

Kratki nazivi: `OPTKEYS`; ili {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Slova opcija}} › {{ui:Uredi…}}. Otvara vašu datoteku slova opcija (redovi `COMMAND.OPTION, LETTERS`, kao `ARRAY.PO, P`); {{ui:Spasi}} je primjenjuje, a {{cmd:REINIT}} je ponovo primjenjuje. Pogledajte [Dodijelite opcijama naredbi vlastita slova](topic:option-letters).

### LISPEDIT

Kratki nazivi: `VLIDE`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:LISP editor}}. Otvara LISP uređivač, prozor koji ostaje otvoren pored crteža.

- Tekst: brojevi redova, partner zagrade kod kursora označen (crveno kad ga nema), {{key:Enter}} uvlači novi red ispod otvorene zagrade, {{key:Tab}} ukucava dva razmaka, {{key:Esc}} napušta tekst.
- {{ui:Učitaj u crtež}} ({{key:Ctrl+Shift+Enter}}): čita svaki oblik, kao što {{cmd:APPLOAD}} radi s datotekom, i pravi njene `c:` naredbe. Datoteka se pojavljuje u spisku {{cmd:APPLOAD}}.
- {{ui:Pokreni odabir}} ({{key:Ctrl+Enter}}): izvršava odabrane oblike, ili oblik u kojem je kursor.
- {{ui:Zaustavi}}: prekida rutinu koja se izvršava.
- {{ui:Konzola}}: što je rutina ispisala, i svaka greška s redom; kliknite grešku da odete tamo. Tekst se izvršava jedan oblik najvišeg nivoa u isto vrijeme, pa je red onaj od oblika, ili unutar njega red koji poziva funkciju koju greška imenuje.
- {{ui:Novi}}, {{ui:Otvori}}, {{ui:Spasi}} ({{key:Ctrl+S}}): datoteka `.lsp`. Tekst se takođe čuva u ovom pregledaču, pa zatvaranje prozora ne gubi ga.
- Uz tekst: funkcije koje rutina definiše, one koje poziva a ovaj LISP još nema, one koje poziva a nisu definisane u njoj niti ugrađene, i potpune liste onoga što je ugrađeno i što nije.

Tekst sa zagradom koja se nikad ne zatvara, ili stringom koji se nikad ne završava, se ne izvršava: kaže se red. Nema korak-po-korak debagera, prekidnih tačaka ni prozora za praćenje. Pogledajte [Pokretanje LISP rutina](topic:run-lisp).

### HELP

Kratki nazivi: `?`. Ispisuje svaku naredbu, njene kratke nazive i jednolinijski opis u historiji komandne linije. Ne otvara ovu pomoć: za nju pritisnite {{key:F1}} ili kliknite {{ui:Pomoć}}.

## Upit za odabir objekata

Na svakom upitu `Select objects`: kliknite objekte, prevucite prozore (lijevo na desno) i ukrštene prozore (desno na lijevo) dvama klikovima, ili pritisnite i prevucite lasso ({{key:Space}} dok prevlačite: prozor, ukrštanje, ograda), {{key:Shift}}+klik za uklanjanje, i pritisnite {{key:Enter}} za završetak. Također možete ukucati `ALL` (sve), `L` (posljednji objekat), `P` (Prethodni: ono što je posljednja naredba koristila), `F` (Fence: objekti koje siječe linija tačaka; `U` poništava tačku), `W` (Window), `C` (Crossing), `R` (Remove mode: izbori uzimaju objekte; upit kaže `Remove objects`) i `A` (Add again). `?` navodi ih. Ne prikazuju se u upitu. {{key:Tab}} preko objekata koji se preklapaju označava sljedeći; kliknite da ga izaberete. Pogledajte [Odabir objekata](topic:select-objects).

### ACCESS

Kratki nazivi: `AX`. Crtanje bez vida. {{cmd:ACCESS}} uključuje ili isključuje pristup (`On`, `Off`) i prebacuje zvukove hvatanja (`Sound`) i glasovne naredbe (`Voice`); prvo kaže stanje. Uz uključen pristup, svaka naredba i rezultat se izgovaraju preko vašeg čitača ekrana, a područje crteža ima kursor s tastature. Tema pomoći „Crtanje bez vida“ navodi tastere.

### DESCRIBE

Kratki nazivi: `DESC`. Kaže šta crtež sadrži: koliko objekata, koje vrste, kako veliko, koliko slojeva, šta je odabrano. Samo čita; ništa ne mijenja.

### WHEREAMI

Kratki nazivi: `WHERE`. Kaže gdje je kursor, u jedinicama crteža.

### NEARBY

Kaže šta je blizu kursora, najbliže prvo, svaki sa svojom udaljenošću i stranom na kojoj je.

### SAYSEL

Kaže šta je odabrano, jedna rečenica po objektu (dužina linije, krajevi i ugao; poluprečnik kruga i centar; tekst kako je napisan).

### VOICE

Uključuje ili isključuje izgovorene naredbe. Prepoznaju se na ovom računaru; gdje pregledač to ne može, glas ostaje isključen dok ne izaberete online uslugu pregledača u Postavkama.

### TOUCHCROSSHAIR

Kratki nazivi: `TCX`. Nišan s pomakom za crtanje prstom, da vrh prsta ne pokriva tačku koju birate. Dok je uključen, jedan prst na crtežu ne bira: pomjera nišan koji je iznad prsta i pored njega. Snap i praćenje prate nišan. Podizanje prsta ništa ne bira i ostavlja nišan gdje jeste. Za biranje pritisnite dugme {{ui:Klik}} u uglu crteža, ili dodirnite bilo gdje na crtežu drugim prstom. Držite {{ui:Klik}} dok pomjerate drugi prst za prevlačenje (prozor odabira, lasso, hvataljka). Prst koji stoji nepomično pritisnut, ili dugme {{ui:Enter}}, je Enter. Dva prsta i dalje pomjeraju i zumiraju. Blizu donje ivice i ivice s druge strane nišan se zbija prema prstu, tako da svaki dio crteža može da se dosegne. Olovka i miš uvijek biraju direktno.

{{cmd:TOUCHCROSSHAIR}} kaže stanje i pita `ON`, `OFF`, `Auto` (uključeno samo gdje je prst jedini pokazivač, pa je isključeno na računaru s mišem), `Distance` (koliko je nišan udaljen od prsta, 24 do 240 piksela) ili `Side` (`Left`: gore i lijevo, za desnu ruku; `Right` za lijevu; dugmad prelaze na drugi ugao). Iste izbore nalaze se u Postavke › CadCraft, a na uređaju s ekranom osjetljivim na dodir statusna traka ima prekidač {{ui:Ukršteni kursor s pomakom}}. Izbori se čuvaju u ovom pregledaču.

### WHOHAS

Kaže ko ima crtež otvoren. U CadCraft Studio na računaru, otvaranje DWG ili DXF piše malu datoteku zaključavanja pored njega (`Plan.dwg.cclock`: ko, od kad, koja verzija), osvježava je svake minute dok je crtež otvoren, i uklanja je pri zatvaranju crteža. Otvaranje crteža koji neko drugi ima otvoren kaže ko i od kad, i nudi {{ui:Otvori samo za čitanje}} (Spasi tada traži novi naziv), {{ui:Otvori ipak}} (druga osoba se obavještava pri sljedećem osvježavanju) ili {{ui:Otkaži}}. Spašavanje preko datoteke koju neko drugi ima otvorenu prvo pita. Zaključavanje koje nije osvježeno pet minuta smatra se zastarjelim: druga kopija se zatvorila bez spašavanja ili je računar u stanju mirovanja.

{{cmd:WHOHAS}} pita `Current` (otvoreni crtež), `File` (izaberite jedan), `FOlder` (izaberite fasciklu: navode se svi crteži u njoj koji su negdje otvoreni), `Path` (ukucajte pun put) ili `Name` (ime koje drugi vide; vaš naziv računa kad ste prijavljeni). Studio može da pristupa samo fasciklama koje ste izabrali: za crtež otvoren iz fascikle koja nikad nije izabrana, javi jednom da ne može da zabilježi crtež kao otvoren; `FOlder` bira fasciklu, a zaključavanja tamo rade od tada. Zaključavanje je napomena za ljude, a ne prepreka: drugi program i dalje može pisati u datoteku. U pregledaču nema fascikli u kojima bi se tražilo, i naredba to kaže.

### OVERKILL

Briše duple objekte i sređuje preklapajuće linije i lukove, za crteže koji stignu puni udvostručenih linija. `Select objects to clean up`, {{key:Enter}}, zatim {{key:Enter}} opet da očistite sa prikazanim postavkama, ili promijenite jednu prvo:

- `Tolerance`: koliko dvije koordinate moraju biti bliske da se računaju kao iste (0.000001 na početku; 0 znači tačno isto).
- `Ignore`: svojstva koja mogu biti različita između dva objekta koji su inače isti. Ukucajte naziv da ga uključite: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ili `None` / `All`. {{key:Enter}} kad završite.
- `Overlap`: uključeno ili isključeno. Uključeno, linije duž jedne prave koje se preklapaju postaju jedna linija (linija koja leži unutar druge jednostavno se briše), a lukovi na jednom krugu koji se preklapaju postaju jedan luk; lukovi koji zatvaraju puni obrt postaju krug, a luk koji leži na krugu se briše.
- `Ends`: uključeno ili isključeno. Uključeno, linije duž jedne prave i lukovi na jednom krugu koji se dodiruju samo kraj na kraj postaju jedan komad.

Svaka vrsta objekta se provjerava na duplikate: dva objekta su duplikati kad je njihova geometrija ista unutar tolerancije, a sloj, boja, vrsta linije, razmjera vrste linije, debljina linije, debljina, prozirnost i visina se poklapaju (manje ono što ignorišete). Linije i otvorene polilinije poklapaju se i kad su nacrtane u suprotnom smjeru. Prvi objekat u redoslijedu crtanja ostaje i zadržava svoja svojstva. Naredba javlja koliko je objekata provjerila i obrisala: duplikate, preklapajuće dijelove spojene, dijelove spojene kraj na kraj. Jedan {{cmd:UNDO}} vraća sve. Postavke traju dok ne zatvorite prozor crteža.

Ostavlja netaknute: objekte na zaključanim slojevima i skrivene objekte. Ne spaja linije s visinom (Z) (tačni duplikati se ipak brišu), i ne dira segmente unutar polilinije (ne proređuju se), liniju koja leži na segmentu polilinije, ni zatvorenu polilinju nacrtanu u suprotnom smjeru.

### DRAWORDER

Mijenja koji objekti se crtaju ispred. `Select objects to re-order`, {{key:Enter}}, zatim `Above objects`, `Under objects`, `Front` ili `Back` ({{key:Enter}} = `Back`). `Above objects` i `Under objects` pitaju referentne objekte: odabir ide odmah ispred najprednjeg od njih, ili odmah iza najzadnjeg. Odabrani objekti zadržavaju svoj redoslijed među sobom. Jedan korak poništavanja. Redoslijed se čuva s crtežom u DWG i DXF, gdje je to redoslijed kojim se objekti upisuju.

Na ekranu se svaki objekat crta po redoslijedu crteža, kao što ga drugi programi crtaju kad otvore datoteku: puna šrafura, široka polilinija ili maska teksta prekriva linije i tekst iza nje, a ono što je ispred nje prekriva nju. Tamo gdje linija siječe tekst, vide se oba. Slike i priloženi PDF listovi ostaju ispod linija. U vrlo velikom crtežu čije se ispune i linije preklapaju i smjenjuju više od 256 puta, prvih 256 zadržavaju svoj redoslijed, a ostale crtaju svoje ispune ispod linija, da crtanje ostane brzo.

### TEXTTOFRONT

Dovodi tekst, kote i vodilice ispred svega ostalog u otvorenom prostoru: `Text`, `Dimensions`, `Leaders` ili `All` ({{key:Enter}} = `All`). Jedan korak poništavanja. Kaže to kad ih nema, ili kad su već na vrhu.

### HATCHTOBACK

Šalje svaku šrafuru otvorenog prostora iza svega ostalog, pa ispune prestaju da prekrivaju linije i tekst u sačuvanoj datoteci. Bez pitanja. Jedan korak poništavanja.

### ISOLATEOBJECTS

Kratki nazivi: `ISOLATE`. Prikazuje samo odabrane objekte: sve drugo u otvorenom prostoru izlazi iz vida do {{cmd:UNISOLATEOBJECTS}}. Za razliku od {{cmd:LAYISO}}, radi na objektima koje birate, bez obzira na njihove slojeve, i ne mijenja nijedan sloj. Skriveni objekti se ne crtaju, ne biraju, ne hvataju, ne zumiraju i ne štampaju, a naredbe koje uzimaju `ALL` ih preskaču. Ono što crtate dok su objekti izolovani prikazuje se kao obično.

Ovo važi samo za sesiju: ništa o tome se ne čuva u crtežu, nije korak poništavanja, a ponovno otvaranje crteža sve prikazuje. Dok su objekti skriveni, statusna traka prikazuje dugme s njihovim brojem; kliknite ga da ih ponovo prikažete.

### HIDEOBJECTS

Sakriva odabrane objekte do {{cmd:UNISOLATEOBJECTS}}. Ista pravila kao {{cmd:ISOLATEOBJECTS}}: samo za sesiju, ne čuva se, nije korak poništavanja.

### UNISOLATEOBJECTS

Kratki nazivi: `UNISOLATE`, `UNHIDE`. Ponovo prikazuje svaki objekat skriven s {{cmd:ISOLATEOBJECTS}} ili {{cmd:HIDEOBJECTS}}, i kaže koliko se vratilo.

### LAYLOCKFADE

Postavlja kako objekti na zaključanim slojevima izgledaju i da li klik dopire do njih. Kaže tekuće stanje, zatim prima:

- broj od 0 do 90: iznos slabljenja u procentima (50 na početku). 0 isključuje slabljenje.
- `ON` ili `OFF`: slabljenje uključeno ili isključeno, uz zadržavanje iznosa.
- `Pick`, zatim `Yes` ili `No`: može li klik odabrati objekte na zaključanim slojevima dok nijedna naredba nije pokrenuta? `No` (zadano): ne mogu se birati uopšte. `Yes`: klik ili prozor ih odabiru da bi Svojstva mogla da ih prikažu; i dalje se ne mogu mijenjati, a `Select objects` naredbe ih nikad ne uzimaju.

Hvatanja objekata nalaze objekte na zaključanim slojevima u oba slučaja. Štampa se nikad ne slabi. Obe postavke su vaše, ne crteža, i takođe su u {{ui:Postavke}} pod {{ui:Zaključani slojevi}}.

### BURST

Razlaže reference blokova i zadržava ono što njihovi atributi kažu. `Select block references to burst`, {{key:Enter}}: svaka referenca se zamjenjuje objektima bloka, a vrijednost svakog vidljivog atributa postaje obični tekst na sloju tog atributa (atribut na sloju 0 ide na sloj reference, kao ostali objekti bloka na sloju 0). Nevidljivi atributi se odbacuju. Blok unutar bloka ostaje referenca bloka. Jedan korak poništavanja; javlja koliko je referenci razloženo i koliko je vrijednosti atributa pretvoreno u tekst.

Odbija povezani crtež po nazivu (prvo ga vežite, ili kopirajte iz njega s {{cmd:NCOPY}}), i ostavlja druge odabrane objekte netaknutim. Za reference blokova {{cmd:EXPLODE}} daje iste objekte; {{cmd:BURST}} uzima samo reference blokova i broji tekst atributa.

### TXT2MTXT

Kratki nazivi: `T2M`. Spaja tekstove u jednom redu u jedan tekst pasusa. `Select single-line text to join`, {{key:Enter}}, zatim `Paragraph` (redovi se spajaju i prelamaju po širini najšireg reda) ili `Lines` (svaki tekst ostaje svoj red); {{key:Enter}} uzima onaj koji je posljednji korišten. Redovi se poredaju odozgo nadole, zatim slijeva nadesno, duž smjera gornjeg teksta. Pasus visi od gornjeg lijevog ugla gornjeg teksta i preuzima njegovu visinu, rotaciju, stil, sloj i boju. Jedan korak poništavanja.

Tekst koji je već tekst pasusa, prazan tekst i drugi objekti u odabiru ostaju netaknuti, a naredba kaže koliko ih je.

### NCOPY

Kopira objekte iz reference bloka ili povezanog crteža u crtež, bez razlaganja bilo čega. `Pick an object inside a block reference or a linked drawing`: objekat najbliži vašem izboru kopira se tamo gdje se vidi, koliko god blokova duboko sjedio; izaberite još, zatim {{key:Enter}}. Zatim `Base point to move the copies`: {{key:Enter}} ih ostavlja na mjestu, ili zadajte osnovnu tačku i drugu tačku. Cijela naredba je jedan korak poništavanja.

Kopija uzima sloj na kojem se vidi: objekat na sloju 0 unutar bloka dobija sloj reference u kojoj je sjedio, a ByBlock boja postaje boja te reference. Iz povezanog crteža, sloj `Plan|Walls` postaje `Plan$0$Walls` (naziv koji daje veza), napravljen s bojom, vrstom linije i debljinom povezanog sloja. Vrijednost atributa se kopira kao tekst. Reference blokova na zaključanim slojevima ne mogu se birati.

### FLATTEN

Postavlja visinu (Z) i debljinu odabranih objekata na 0. `Select objects to flatten`, {{key:Enter}}. Takođe spljošti objekte unutar definicija blokova koje odabir koristi (i blokove unutar njih), pa se svaka referenca tih blokova mijenja; povezani crteži ostaju kakvi jesu. Jedan korak poništavanja; javlja koliko je objekata promijenjeno, i kaže kad nijedan nije imao visinu ni debljinu.

Ono što CadCraft čuva od treće dimenzije u 2D crtežu je: visina na krugovima, lukovima, elipsama, tačkama, tekstu, referencama blokova, šrafurama, vodilicama i polilinijama (njihova kota), visina na svakom kraju linije, i debljina na linijama, krugovima, lukovima, polilinijama, tačkama i tekstu, onako kako ih je datoteka imala. {{cmd:FLATTEN}} briše upravo to. Ne dira 3D model na kartici 3D, 3D površi ili tijela, a objekat nacrtan u nagnutoj ravni već je bio doveden u ravan crteža kad je datoteka otvorena.

### BREAKLINE

Crta liniju sa simbolom prekida, za pogled koji je presječen. Kaže tekuću veličinu i produženje, zatim `First point of the break line` (ili `Size` / `Extension` da ih prvo promijenite), `Second point`, i `Where the break symbol sits`: kliknite duž linije, ili {{key:Enter}} za sredinu. Rezultat je jedna polilinija na tekućem sloju: linija, koja prelazi svaku tačku za produženje, sa Z-oblim potezom visokim koliko je veličina i upola manjim po dužini.

`Size` i `Extension` se pamte kao vaše postavke (veličina počinje kao dvostruka visina teksta kote puta ukupna razmjera kote; produženje je pola veličine). {{key:Enter}} ponavlja naredbu.

### AUDIT

Provjerava otvoreni crtež radi oštećenja i popravlja ga. {{cmd:AUDIT}} gleda svaki objekat u modelu, na listovima i unutar blokova, i tabelu slojeva, i navodi šta je našao po vrsti:

- brojeve koji nisu konačni ili su apsurdno veliki;
- objekte bez veličine: liniju bez dužine, krug bez poluprečnika, polilinju s jednim temenom, tekst bez slova ili visine, referencu bloka s nultom razmjerom;
- objekte na sloju kojeg crtež nema; reference na blok koji ne postoji; nazive stilova teksta i kota, i nazive vrsta linija koji nisu u crtežu;
- blokove koji sadrže sami sebe, direktno ili preko drugih blokova;
- objekte koji dijele isti ID, ključ ili datotečni oznaku;
- kote bez tačaka od kojih se mjere, i šrafure čija granica nije zatvorena kontura.

Zatim pita `Fix them? [Yes/No]`. `No` ništa ne mijenja. `Yes` popravlja sve u jednom koraku poništavanja: ono što se ne može nacrtati se uklanja (loši brojevi, nema veličine, nedostaje blok, pokvarena kota, šrafura bez upotrebljive granice, referenca koja zatvara krug blokova); nedostajući sloj se pravi; nepoznati nazivi stilova i vrsta linija vraćaju se na zadane; dijeljeni ključ se zamjenjuje. Ispisuje koliko je objekata uklonjeno, a koliko popravljeno. Isti nalazi pojavljuju se u panelu Problemi, svaki sa sopstvenim {{ui:Popravi}}.

Ne odbija ništa, ali provjerava samo ono što CadCraft sam crta: podaci sačuvani za druge programe (3D tijela, OLE objekti) se ne otvaraju.

### RECOVER

Otvara oštećenu DXF ili DWG datoteku. {{cmd:RECOVER}} pita datoteku, čita ono što se može pročitati umjesto da odbije datoteku, navodi šta je preskočeno ili pretpostavljeno, zatim provjerava i popravlja crtež kao {{cmd:AUDIT}} s `Yes`.

- DXF: linije koje nisu dio para koda i vrijednosti preskaču se dok se parovi ne poravnaju; odjeljak bez kraja se zatvara; datoteka koja je odsječena čita se do mjesta odsijecanja; binarna DXF datoteka koja je odsječena čita se do posljednje cjelovite vrijednosti. Kad odjeljak, blok ili objekat i dalje ne može da se pročita, izostavlja se i imenuje, a čitanje ide dalje.
- DWG: objekti koji ne prolaze svoje provjere ili ne mogu da se dekodiraju se izostavljaju, a izgubljeni spisak objekata se obnavlja prolaskom kroz podatke objekata.

Datoteka na disku se ne mijenja. Oporavljeni crtež se otvara nespašen: spasite ga pod novim nazivom. Datoteka iz koje se ništa ne može pročitati se odbija, uz razlog.

### LEGACYTEXT

Pretvara tekst ukucan starim 8-bitnim vijetnamskim fontovima u Unicode. Kratki nazivi `TEXTTOUNICODE` i `VNTEXT`.

Stariji vijetnamski crteži čuvaju tekst kao zapadne znakove koje samo font pretvara u vijetnamski: TCVN3 tekst u ABC fontovima (`.VnTime`, `.VnArial`, i fontovi velikih slova čiji nazivi se završavaju na `H`), i VNI tekst u VNI fontovima (`VNI-Times`). CadCraft prikazuje takav tekst kako se čita čim se crtež otvori, po fontu njegovog stila teksta, objekta ili dijela unutar teksta pasusa; datoteka i dalje sadrži stare znakove.

{{cmd:LEGACYTEXT}} kaže koliko je tekstova nađeno u svakom kodiranju i pita `Convert … to Unicode?`. `Yes` prepisuje svaki (model, listovi, blokovi, vrijednosti i definicije atributa), a stilovima teksta daje Unicode font (Times New Roman, Arial ili Courier New prema vrsti starog fonta), u jednom koraku poništavanja. Oblikovanje unutar teksta pasusa se zadržava.

Kad nijedan tekst ne koristi poznati font (stil koji je izgubio naziv fonta), pita `Read selected texts as [Tcvn3/Vni/None]`: izaberite kodiranje i odaberite tekstove. Tekst koji je već Unicode ostaje netaknut. Tekst zamjene kote i tekst višestruke vodilice se ne pretvaraju.
