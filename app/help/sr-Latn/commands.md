---
title: Referenca komandi
summary: Svaka komanda u aplikaciji za crtanje CadCraft, sa njenim skraćenicama, pitanjima koja postavlja, opcijama i podrazumevanim vrednostima.
keywords: komande, skraćenice, spisak komandi, površina, obim, measuregeom, linija, pline, krug, luk, pokrati, ofset, dimlinear, blok, umetni, raspored, štampaj, zum, pomoć, copyclip, cutclip, pasteclip, pasteorig, copybase, dupliraj, selectall
from: 979ffe3b
---

Ukucajte naziv komande ili skraćenicu i pritisnite {{key:Enter}} ili {{key:Space}}. Velika i mala slova nisu bitna, a početni `_`, `-`, `.` ili `'` se ignoriše. Ukucajte `HELP` (ili `?`) da odštampate kratak spisak svih komandi u istoriji komandne linije; pritisnite {{key:F1}} za ovo uputstvo.

Kako čitati upite: opcije su u uglastim zagradama, a biramo jednu tako što ukucamo njena velika slova (`D` za Prečnik). Podrazumevana vrednost je u ugaonim zagradama; pritisnite {{key:Enter}} da je prihvatite. Gde se traži tačka, možete kliknuti ili ukucati bilo koji od formata iz [Unos koordinata i rastojanja](topic:coordinate-entry). Gde se traži rastojanje, možete ukucati broj ili kliknuti dve tačke.

Pritisak na {{key:Enter}} tamo gde se traži tačka ili objekat, a nema podrazumevane vrednosti, završava komandu. {{key:Esc}} je otkazuje. Šta god komanda uradi je jedan korak opozivanja.

## Crtanje

### LINE

Skraćenica: `L`. Prave duži, svaka je sopstveni objekat.

- `Specify first point` (Enter: počni od poslednje tačke koju ste zadali)
- `Specify next point [Undo]`, ponavlja se. Posle dva segmenta: `[Undo/Close]`.
- `U` vraća poslednji segment, `C` zatvara do prve tačke i završava. Enter završava.

### PLINE

Skraćenica: `PL`. Jedna polilinija segmenata linija i lukova.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close kada ima dva segmenta)
- `A` prelazi na lukove: `Specify endpoint of arc [Line/CLose/Undo]`. Svaki luk nastavlja tangentno na prethodni segment. `L` se vraća na linije, `CL` zatvara lukom.
- Enter završava; polilinija ostaje otvorena.

### CIRCLE

Skraćenica: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` pita `Specify diameter of circle`.
- `2P`: dva kraja prečnika. `3P`: tri tačke na krugu.
- `T` (takođe komanda `TTR`, i {{ui:Crtanje}} › {{ui:Više}} › {{ui:Krug: Tangenta, Tangenta, Poluprečnik}}): `Specify point on object for first tangent of circle`, zatim druga, pa poluprečnik (Enter: poslednji). Krug dodiruje oba objekta (linije, lukove, krugove, segmente polilinije, takođe unutar blokova); od krugova koji to rade, bira onaj koji dodiruje najbliže vašim izborima. "Circle does not exist" kada nijedan ne odgovara.
- `TTT` (ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Krug: Tangenta, Tangenta, Tangenta}}): tri objekta; krug koji dodiruje sva tri, najbliži vašim izborima (tri linije daju unutrašnji krug ili spoljašnji, zavisno od toga gde birate).

### ARC

Skraćenica: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: luk kroz tri tačke.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Luk ide suprotno kazaljci na satu od početka do kraja.

### RECTANG

Skraćenica: `REC`, `RECTANGLE`. Zatvorena polilinija.

- `Specify first corner point`, `Specify other corner point`. Ukucajte `@width,height` za drugi ugao.

### POLYGON

Skraćenica: `POL`. Pravilan poligon kao zatvorena polilinija.

- `Enter number of sides <4>` (3 do 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: kliknite ili ukucajte tačku; njeno rastojanje određuje veličinu, a njen pravac okreće poligon.

### ELLIPSE

Skraćenica: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, zatim rastojanje do druge ose.
- `I` (`Isocircle`, samo dok je {{cmd:ISODRAFT}} uključeno): centar, zatim poluprečnik ili `Diameter`: elipsa koju krug prikazuje na tekućoj izometrijskoj ravni.

### HATCH

Skraćenica: `H`, `BH`, `BHATCH`; ili {{ui:Šrafura}} na alatnoj traci. Najpre štampa tekući šablon, razmeru i ugao.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, ponavlja se (`Undo` kada postoji površina): svaki klik dodaje zatvorenu površinu oko njega, sa zatvorenim oblicima unutra kao ostrvima. Enter pravi jednu šrafuru od svih njih.
- `S`: `Select closed objects` (zatvorene polilinije, krugovi, zatvorene elipse).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): ispuna je gradijent umesto šablona. Vidi {{cmd:GRADIENT}} za njegova pitanja.

Vidi [Šrafura i ispuna površina](topic:hatch).

### GRADIENT

Skraćenica: `GD`. Ispunjava površinu gradijentom jedne ili dve boje. Najpre pita za gradijent, pa nastavlja kao {{cmd:HATCH}} (`Pick internal point`, `S` za zatvorene objekte, {{key:Enter}} za kraj).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, ponavlja se; svaki put štampa gradijent kakav je sada.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ili jedan od njih obrnut (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Prvih nekoliko slova je dovoljno.
- `O`: jedna boja, zatim njena nijansa od 0 do 1 (0 je zatamnjuje do crne, 0.5 je sama boja, 1 je izbeljuje do bele). `TW`: prva i druga boja. Boja je broj od 1 do 255, tri broja kao `255,128,0`, ili `#rrggbb`.
- `A`: ugao pod kojim ide gradijent. `C`: centriran Yes ili No (No pomera središte gradijenta u jednu stranu).
- Odbija boju ili vrstu koju ne poznaje, i nijansu van opsega 0 do 1.

{{cmd:HATCHEDIT}} `G` i Svojstva (Gradijent) kasnije menjaju gradijent, ili pretvaraju bilo koju šrafuru u gradijent. Gradijent se crta na ekranu i štampa. DWG 2004 i noviji ga čuvaju kao pravu gradijentnu šrafuru; DXF 2000 i DWG 2000 ga čuvaju za CadCraft, a drugi programi vide punu ispunu prvom bojom.

### HATCHGENERATEBOUNDARY

Skraćenica: `HGB`. Ponovo pravi granicu iz šrafure koja ju je izgubila. `Select hatches` (ili ih izaberite prvo), zatim `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Svaka petlja šrafure postaje zatvorena polilinija na sloju šrafure; nove polilinije ostaju izabrane. Zakrivljena ivica se vraća kao kratki pravi delovi koje šrafura zadržava.
- Sa Yes šrafura prati svoju novu granicu, kao šrafura napravljena sa {{cmd:HATCH}}. Jedan korak opozivanja.
- Kaže to kada nije izabrana šrafura.

### POINT

Skraćenica: `PO`; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Tačka}}. Objekti tačke, jedan po kliku, dok ne pritisnete Enter.

- `Specify a point`

### XLINE

Skraćenica: `XL`; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Pomoćna linija}}. Pomoćne linije, bez kraja u oba smera. Vidi [Pomoćne linije i zrake](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, zatim `Specify through point` za svaku liniju, dok ne pritisnete Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` najpre pita `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, zatim `Specify angle end point` za svaku liniju.
- `O`: `Specify offset distance [Through] <Through>`, zatim `Select a line object` i `Specify side to offset` (ili `Specify through point`) za svaku liniju.

### RAY

Bez skraćenice; ili {{ui:Crtanje}} › {{ui:Više}} › {{ui:Zraka}}. `Specify start point`, zatim `Specify through point` za svaku zraku, dok ne pritisnete Enter.

### TEXT

Skraćenica: `DT`, `DTEXT`; ili {{ui:Tekst}} na alatnoj traci. Tekst u jednom redu; svaki red je sopstveni objekat.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, zatim `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, ponavlja se: svaki Enter započinje sledeći red ispod. Enter na praznom redu završava. {{key:Space}} ovde kuca razmak.

### DIVIDE

Skraćenica: `DIV`. {{cmd:DIVIDE}} stavlja oznake na liniju, luk, krug, polilinju, spline ili elipsu koje je seku na jednake delove. Izaberite objekat, zatim zadajte broj delova (2 do 32767). Otvoreni objekat dobija jednu oznaku manje od delova; zatvoreni dobija oznaku i na početku. Sam objekat se ne seče. Oznake su tačke; `Block` umesto toga traži blok ovog crteža i da li se okreće da prati objekat. Dužine duž splajnova i elipsi se mere kratkim tetivama. Odbija tekst, šrafure i druge objekte koji nemaju dužinu.

### MEASURE

Skraćenica: `ME`. {{cmd:MEASURE}} stavlja oznaku na svaku zadatu dužinu duž linije, luka, kruga, polilinije, splajna ili elipse, brojeći od kraja najbližeg vašem izboru (zatvoren objekat: od njegovog početka). Dužinu zadajte ukucavanjem ili sa dve tačke. Daleki kraj otvorenog objekta ne dobija oznaku. `Block` postavlja blok na svaku oznaku umesto tačke. Odbija dužinu 0, onu koja je veća od objekta, i onu koja bi napravila više od 32767 oznaka.

### BOUNDARY

Skraćenica: `BO`, `BPOLY`. {{cmd:BOUNDARY}} pravi zatvorenu polilinju oko površine u kojoj je tačka koju birate, od svih linija, lukova, krugova, polilinija i krivih koje je omeđuju na ekranu. Delovi koji leže na luku ili krugu vraćaju se kao segmenti luka; delovi elipsi i splajnova vraćaju se kao kratki pravi segmenti. Sa uključenim `Islands` (početna postavka) svaka zatvorena površina unutar nje dobija sopstvenu polilinju. Nastavite da birate tačke; Enter završava. Objekti koji omeđuju površinu ostaju kakvi jesu. Kaže to kada nijedna zatvorena površina ne sadrži tačku.

### BLEND

{{cmd:BLEND}} crta splajn između krajeva dve otvorene krive. Izaberite svaku krivu blizu kraja koji spajate. `CONtinuity` bira `Tangent` (splajn polazi i stiže duž obe krive) ili `Smooth` (takođe savija se kako se one savijaju na krajevima); izbor se zadržava za sesiju. Dve krive se ne menjaju. Odbija zatvorene objekte i dva kraja koja se već sastaju.

### REGION

Skraćenica: `REG`. {{cmd:REGION}} pretvara zatvorene objekte u regije: ravne oblasti koje možete spajati, seći i meriti. Izaberite krugove, zatvorene polilinije, zatvorene elipse ili zatvorene splajnove, ili linije, lukove i otvorene polilinije koje se zatvaraju petljom kraj-do-kraja; svaka petlja postaje jedna regija i zamenjuje objekte od kojih je nastala. Lukovi ostaju lukovi; elipse i splajnovi postaju kratki pravi segmenti. Ono što nije zatvoreno i ne zatvara petlju ostaje kakvo je, i kaže koliko je. U crtežu je regija jedna ili više zatvorenih polilinija držanih zajedno kao neimenovana grupa, pa klik bira celu regiju, a kopija je regija za sebe; drugi programi koji otvore datoteku vide zatvorene polilinije.

Sa regijama u crtežu, {{cmd:UNION}}, {{cmd:SUBTRACT}} i {{cmd:INTERSECT}} na kartici 2D rade nad regijama: `UNION` spaja izabrane regije u jednu (regije koje su odvojene postaju jedna regija sa više obrisa), `SUBTRACT` pita regije od kojih se oduzima, pa one koje se oduzimaju (rupa ostaje deo regije), `INTERSECT` zadržava površinu koju sve dele. Svaka kaže površinu rezultata i jedan je korak opozivanja. Odbijaju kada ništa ne bi ostalo ili kada ništa nije zajedničko. Na kartici 3D, i u crtežu bez regija, iste komande rade nad telima kao i pre.

## Izmena

### MTEXT

Skraćenica: `MT`, `T`; ili {{ui:Pasus}} na alatnoj traci. Pasusni tekst koji se prelama na širinu, kuca se na mestu.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: širina između dva ugla je mesto gde se tekst prelama. `H` pita `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` i preskače drugi ugao.
- Zatim se na crtežu otvara polje: kucajte, {{key:Enter}} za novi pasus, {{key:Mod+Enter}} ili klik van njega da završite, {{key:Esc}} da otkažete. Njegova traka postavlja visinu, razmak redova, širinu i poravnanje. Vidi [Dodavanje teksta i oznaka](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Skraćenica: `ED`, `DDEDIT`; ili dvostruki klik na tekst. `Select a text to edit`, ponavlja se dok ne pritisnete {{key:Enter}}: svaki se otvara u istom polju. Pokrenut na izabranom ili dvostruko kliknutom tekstu, menja taj jedan i završava.

### ERASE

Skraćenica: `E`, `DELETE`; ili pritisnite {{key:Delete}} sa izabranim objektima.

- `Select objects` (preskače se kada su objekti već izabrani)

### MOVE

Skraćenica: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, ukucano kao `dx,dy`.

### COPY

Skraćenica: `CO`, `CP`. Kopira onoliko puta koliko zadate tačaka.

`Array` na upitu za drugu tačku pravi red odjednom: zadajte broj stavki (originalna se računa kao jedna), zatim tačku gde ide prva kopija; ostale slede na istom razmaku. `Fit` umesto toga čini tu tačku mestom poslednje kopije, sa ostalima ravnomerno raspoređenim između.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, ponavlja se dok ne pritisnete Enter. `U` vraća poslednju kopiju.

### ROTATE

Skraćenica: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: stepeni, pozitivno suprotno kazaljci na satu; ili kliknite tačku da okrenete ka njoj.

### SCALE

Skraćenica: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: ukucajte faktor, na primer `0.5` ili `2`. Kliknuta tačka daje svoje rastojanje od osnovne tačke kao faktor.

### MIRROR

Skraćenica: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Skraćenica: `AL`; ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Poravnaj}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Sa dva para: `Scale objects based on alignment points? [Yes/No] <N>`

Vidi [Poravnavanje objekata](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (ili izbor), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` pita za tačku. Izbor ostaje.

### DISTRIBUTE

- `Select objects` (najmanje tri), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Dve spoljne ostaju; izbor ostaje.

### ALIGNPANEL

Skraćenica: `ALP`; ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Poravnaj i raspodeli}}. Otvara panel koji pokreće ALIGNTO i DISTRIBUTE klikovima.

### LASER

Skraćenica: `LASERCUT`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}}. Otvara panel Laser nad crtežom: šta svaki sloj radi (seci, ogrebi, graviraj, popuni, slika), pregled, GRBL G-kod za čuvanje, i uokvirivanje i slanje preko Web Serial. Vidi [Pošaljite crtež laseru](topic:laser-cutting).

### STRETCH

Skraćenica: `S`; ili {{ui:Istegni}}. `Select objects to stretch`: prevucite ukrštene prozore (ili ukucajte `C`) preko krajeva da pomerite. `Specify base point [Displacement]`, `Specify second point`. Tačke unutar prozora se pomeraju: krajevi linija, temena polilinije (segmenti luka zadržavaju svoju visinu), tačke kota; krugovi, elipse, tekst, tačke i blokovi se pomeraju celi kada je njihov centar ili tačka umetanja unutra. Izbor napravljen pre komande zadržava ukrštene prozore (i omče) koji su ga napravili, pa se rastežu na isti način. Bez prozora, objekti se pomeraju celi.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Skraćenica: `AR`; ili {{ui:Niz}}. `Select objects`, zatim `Enter array type [Rectangular/POlar] <Rectangular>` (samo ARRAY).

- Pravougaono počinje sa 4 kolone × 3 reda, razmak je 1.5 puta veličina objekata, prikazano kao pregled. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pita kolone i redove, `S` rastojanja između kolona i između redova (negativno ide levo ili dole), `COL` i `R` po jedan pravac.
- Polarno pita `Specify center point of array`, počinje sa 6 stavki po celom krugu, okrenuto. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` stavke, `F` ugao za popunjavanje (+ suprotno kazaljci, − u smeru kazaljke), `ROT` Yes ili No.
- {{key:Enter}} (eXit) pravi kopije, kao obične objekte. Jedan korak opozivanja.
- `AS` (ASsociative) prebacuje između običnih kopija i niza koji ostaje izmenljiv: jedan objekat koji menjate kasnije sa {{cmd:ARRAYEDIT}}, preko njegovih hvatača ili u Svojstvima. Izbor se pamti ({{cmd:ARRAYASSOCIATIVITY}}); počinje sa običnim kopijama.

### ARRAYPATH

Kopije duž krive. `Select objects`, zatim `Select path curve`: linija, luk, krug, elipsa, polilinija ili splajn (ne jedan od objekata koji se umnožavaju). Putanja počinje od svog kraja bližeg objektima, a prva stavka su objekti tamo gde jesu.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, sa pregledom. `M`: `Divide` ravnomerno raspoređuje stavke duž cele putanje, `Measure` stavlja po jednu na zadato rastojanje. `I`: broj stavki (sa Measure, 0 znači koliko stane; broj preko kraja putanje se svodi na ono što stane). `SP`: rastojanje između stavki duž putanje (prelazi na Measure). `AL`: Yes okreće svaku stavku da prati putanju, No ih ostavlja uspravne.
- `AS` kao u {{cmd:ARRAY}}. Sa uključenim, niz zadržava sopstvenu kopiju oblika putanje: naknadna izmena krive putanje ne pomera stavke.
- Odbija putanju koja nije kriva, i jednu stavku.

### ARRAYEDIT

Menja niz napravljen sa ASsociative. `Select array` (ili ga izaberite prvo). Štampa šta je niz sada, zatim pita dok ne pritisnete {{key:Enter}}:

- Pravougaono: `COL` kolone i njihov razmak, `R` redovi i njihov razmak, `A` ugao pod kojim idu kolone.
- Polarno: `I` stavke, `F` ugao popunjavanja, `ROT` okreće stavke Yes ili No.
- Putanja: `M` Divide ili Measure, `I` stavke, `SP` razmak, `AL` poravnaj sa putanjom.
- `S` (Source) otvara objekte koje niz ponavlja, same, kao urednik blokova. Crtajte i menjajte tamo; {{cmd:ARRAYCLOSE}} čuva ili odbacuje, i svaka stavka prati.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, zatim kliknite stavke koje zamenjujete, {{key:Enter}}. Te stavke sada prikazuju zamenu; objekti zamene napuštaju crtež i žive u nizu. `RES` (RESet) ponovo prikazuje izvorne objekte u svakoj stavci.
- Svaka promena je jedan korak opozivanja. Odbija obične kopije, običnu referencu bloka i niz na zaključanom sloju.

Isti brojevi su u Svojstvima pod Niz, a niz ima hvatače: njegova osnovna tačka ga pomera, hvatač na drugoj stavki postavlja razmak, hvatač iza poslednje stavke postavlja broj (kod polarnog: druga stavka postavlja koliko ima stavki, poslednja ugao popunjavanja). {{cmd:EXPLODE}} vraća niz u obične kopije.

### ARRAYCLOSE

Završava {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Kaže to kada nijedni izvorni objekti niza nisu otvoreni. {{cmd:BCLOSE}} radi isto.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Postavlja šta {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR i {{cmd:ARRAYPATH}} počinju sa; njihova opcija `AS` menja istu postavku. Pamti se u ovom pregledaču.

### OFFSET

Skraćenica: `O`. Linije, lukovi, krugovi i polilinije.

Kada se polilinija širi navolje i njeni pravi segmenti se razdvoje na uglu, {{cmd:OFFSETGAPTYPE}} odlučuje kako se razmak zatvara.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, zatim `Specify point on side to offset` (ili, sa Through, `Specify through point`), ponavlja se dok ne pritisnete Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: kako {{cmd:OFFSET}} zatvara razmake na spoljnim uglovima polilinije. `0` produžava segmente dok se ne sretnu (početna postavka), `1` ih spaja lukom oko starog ugla, `2` pravim sečenjem. Unutrašnji uglovi i segmenti luka se ne menjaju. Zadržava se za ovu sesiju.

### EXTRIM

{{cmd:EXTRIM}} skraćuje sve sa jedne strane ivice. Izaberite rezni objekat (liniju, luk, krug, polilinju, elipsu, splajn ili pomoćnu liniju), zatim tačku na strani koju treba očistiti: svaka linija, luk, krug, polilinija i pomoćna linija koja seče ivicu gubi svoj deo sa te strane, počev od ivice. Dok birate stranu, delovi koji bi otišli prate pokazivač. Za zatvorenu ivicu strane su unutra i spolja. Objekti koji samo dodiruju ivicu, kao i tekst, šrafure, splajnovi i elipse koji je seku, ostaju kakvi jesu. Jedan korak opozivanja.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: kako {{cmd:TRIM}} i {{cmd:EXTEND}} počinju. `1` Brzo: svaki objekat je rezna ivica ili granica. `0` Standardno: najpre pitaju za ivice. Takođe `(setvar "TRIMEXTENDMODE" 0)` u LISP-u.

### TRIM

Skraćenica: `TR`. Najpre štampa `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. U brzom režimu svaki vidljivi objekat je rezna ivica, a objekat koji ništa ne seče se briše; u standardnom režimu najpre pita `Select cutting edges (Enter = every object)` i seče samo na tim ivicama.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, ponavlja se: kliknite deo koji uklanjate (postaje siv i isprekidan dok pokazivač miruje na njemu), prevucite putanju kroz više delova (svi idu u jednom koraku), ili kliknite dve prazne tačke za ogradu između njih. {{key:Shift}} produžava umesto toga. `T` bira rezne ivice (standardni režim), `F` pita tačke ograde, `C` dva ugla prozora (delovi delimično unutra idu), `O` pita `Enter a trim mode option [Quick/Standard]`, `E` pita `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` briše objekte koje izaberete, `U` opoziva poslednji izbor ili prevlačenje. Enter završava. Vidi [Skraćivanje i produženje](topic:trim-and-extend).

- Klik na šrafuru seče šrafuru: rezne ivice dele našrafiranu površinu, a deo na koji ste kliknuli se uklanja (ne ostaje nacrtan obris na tom mestu). Šrafura zadržava svoj šablon ili gradijent; šrafura koja je bila povezana sa svojom granicom posle nije povezana, jer je više ne ispunjava. Kaže to kada nijedna rezna ivica ne seče šrafuru na tom mestu, kada je klik van šrafure, i kada ništa ne bi ostalo (koristite {{cmd:ERASE}}). Prevučena putanja ili ograda ne seče šrafure.

### EXTEND

Skraćenica: `EX`. Isto što i TRIM, obrnuto: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Klik produžava kraj koji je najbliži do sledeće granice; prevučena putanja ili ograda produžava svaki objekat koji prelazi; {{key:Shift}} skraćuje. `B` bira granične ivice (standardni režim). Mode i Edge se dele sa TRIM.

### LINKVIEWS

Skraćenica: `SYNCVIEWS`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Poveži poglede okana}}, ili ikona veze na karticama crteža. `Link the panes' views [ON/OFF]` (Enter uzima drugo stanje): dok je uključeno, pomeranje ili zum u aktivnom oknu pomera svako okno koje prikazuje istu vrstu prostora. Vidi [Podelite ekran](topic:split-screen).

### OPENIN3D

Bez skraćenice; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Otvori u ModelCraft}} gde aplikacija za 3D modelovanje prihvata predati crtež. Otvara ga tamo u novoj kartici, kao DWG (ništa se ne šalje). Ako pregledač blokira karticu, to kaže.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: šta pritisak i prevlačenje na praznom mestu crtaju. Isto kao Podešavanja › CadCraft › Prevlačenje za izbor. Vidi [Izbor omčom](topic:lasso-selection).

### FILLET

Skraćenica: `F`. Linije, lukovi, krugovi i polilinije. Najpre štampa `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` pita `Specify fillet radius <last>`. `T` pita `Enter Trim mode option [Trim/No trim]`: sa No trim objekti ostaju kakvi jesu i dodaje se samo luk.
  - `M` drži komandu za još uglova dok ne pritisnete {{key:Enter}}; `U` vraća poslednji ugao bez napuštanja komande.
  - `P` pita `Select 2D polyline [Radius]` i zaobljava svaki ugao gde se sretnu dva prava segmenta. Zaobljenja koja već ima zamenjuju se novim poluprečnikom; poluprečnik 0 ih uklanja. Uglovi čije su stranice prekratke za poluprečnik ostaju i broje se.
- `Select second object or shift-select to apply corner [Radius]`. Držite {{key:Shift}} dok klikćete za oštar ugao, bez obzira na poluprečnik.

Kliknite svaki objekat na delu koji želite da zadržite. Dve linije koje se ne sastaju se produžavaju. Dve paralelne linije dobijaju polukrug preko razmaka, na kraju prve linije najbližem vašem klika. Krug se nikada ne seče. Dva susedna segmenta jedne polilinije dobijaju luk unutar polilinije; polilinija i drugi objekat rade kada rez pada na prvi ili poslednji segment polilinije.

### CHAMFER

Skraćenica: `CHA`. Linije i pravi segmenti polilinija. Najpre štampa tekuća rastojanja (ili dužinu i ugao).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` pita `Specify first chamfer distance <last>` i `Specify second chamfer distance <the first>`: prvo se seče sa prve linije koju birate, drugo sa druge.
  - `A` pita `Specify chamfer length on the first line` i `Specify chamfer angle from the first line`.
  - `E` (mEthod) bira koje od dva koristi sledeći skos. `T`, `M`, `U` i `P` rade kao u {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klik pravi oštar ugao.

Rastojanje duže od linije se odbija (`Distance is too large.`).

### BREAK i BREAKATPOINT

Skraćenica: `BR`. `Select object` (gde kliknete je prva tačka), `Specify second break point [First point]`; `F` pita `Specify first break point` i `Specify second break point`. Deo između njih ide; na krugu, suprotno kazaljci na satu od prve tačke. BREAKATPOINT pita `Specify break point` i deli objekat na dva dela tamo (ne na krugu).

### LENGTHEN

Skraćenica: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: izbor štampa `Current length` (i uključeni ugao luka) i ponovo pita. `DE` pita `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` prevlači. Zatim `Select an object to change [Undo]`, ponavlja se: pomera se kraj najbliži kliku. Linije, lukovi i otvorene polilinije.

### JOIN

Skraćenica: `J`. `Select objects to join`. Linije, lukovi i otvorene polilinije koje se sretaju kraj uz kraj postaju polilinije (zatvorene kad se lanac zatvori); linije na jednoj liniji postaju jedna linija; lukovi jednog kruga postaju jedan luk ili krug. Istorija kaže koliko je objekata spojeno, a koliko nije.

### MATCHPROP

Skraćenica: `MA`, `PAINTER`. `Select source object`, zatim `Select destination objects [Settings]` i {{key:Enter}}. Kopira sloj i boju, a između objekata iste vrste visinu i širinu teksta, veličine kota ili šablon šrafure. `S` pita `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, ponavlja se dok ne pritisnete {{key:Enter}}; izbor se pamti za sesiju.

### EXPLODE

Skraćenica: `X`. Polilinije postaju linije i lukovi, reference blokova postaju svoji objekti, kote postaju linije, strelice i tekst. Niz koji ostaje izmenljiv ({{cmd:ARRAYEDIT}}) postaje obične kopije svojih objekata.

- `Select objects`

### GROUP

Skraćenica: `G`. {{cmd:GROUP}} daje izabranim objektima naziv koji dele. Izaberite objekte, zatim ukucajte naziv (bez razmaka; `?` navodi grupe; Enter pravi neimenovanu grupu) i, za imenovanu grupu, opcioni opis. Od tada klik na jedan od njih, ili prozor koji obuhvati jedan, bira sve njih, pa se zajedno pomeraju, kopiraju i brišu; svaki objekat je i dalje sopstveni objekat. Objekat može biti u više grupa. Kopija cele grupe je nova neimenovana grupa; kopija jednog člana sama za sebe pridružuje se grupi. Grupe pripadaju prostoru u kome su napravljene (model ili list). Čuvaju se kada sačuvate kao DWG ili DXF i ponovo otvorite datoteku u CadCraft-u; DXF 2000 datoteke takođe nose grupe kao objekte grupa za druge programe, a grupe napravljene u drugom programu se čitaju kada se otvori DXF ili DWG.

### UNGROUP

{{cmd:UNGROUP}} rastavlja grupe: izaberite objekte grupa (svaka grupa u kojoj su rastavlja se) ili ukucajte `Name` i naziv grupe. Objekti ostaju u crtežu. Jedan korak opozivanja vraća grupe.

### GROUPEDIT

{{cmd:GROUPEDIT}} menja jednu grupu. Izaberite jedan od njenih objekata, ili `Name` i njen naziv; grupa koja je već izabrana se uzima kakva jeste. Zatim: `Add` objekte (birani jedan po jedan, a ne grupu po grupu), `Remove` objekte, `REName` grupu, promenite njen `Description`, ili postavite `Selectable` (da li klik na jedan objekat bira celu grupu). `eXit` ili Enter završava. Grupa bez preostalih objekata nestaje.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: sa `1` (početna postavka) klik ili prozor na grupisanom objektu bira celu njegovu grupu; sa `0` pojedinačne objekte, pa možete menjati jedan član. Zadržava se za ovu sesiju.

## Klipbord

Sopstveni klipbord CadCraft-a: radi unutar crteža, između crteža i između kartica CadCraft-a u ovom pregledaču. Vidi [Kopiranje, lepljenje i dupliranje](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ili {{ui:Kopiraj}} u grupi {{ui:Uređivanje}}. Kopira objekte u klipbord, sa blokovima i slojevima koje koriste. Objekti ostaju izabrani.

- `Select objects to copy` (preskače se kada su objekti već izabrani)

### CUTCLIP

{{key:Mod+X}}, ili {{ui:Iseci}} u meniju {{ui:Više}}. Kopira objekte u klipbord, pa ih briše (jedan korak opozivanja).

- `Select objects to cut` (preskače se kada su objekti već izabrani)

### COPYBASE

Kopira objekte u klipbord sa osnovnom tačkom koju izaberete; lepljenje postavlja tu tačku.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, ili {{ui:Nalepi}} u grupi {{ui:Uređivanje}}. Kopija prati kursor, visi od donjeg levog ugla svog opsega (ili od centra, ili od tačke `COPYBASE`; vidi [Podešavanja CadCraft-a](topic:settings)).

- `Specify insertion point`

Nalepljeni objekti su izabrani. Blok koji crtež već ima pod istim nazivom zadržava definiciju ovog crteža.

Kada je oblast kopirana u MarkupCraft novija od onoga što je CadCraft kopirao (i mlađa od 6 sati), {{key:Mod+V}} i `PASTECLIP` lepe tu oblast umesto toga: vidi `PASTEAREA`.

### PASTEAREA

Skraćenica: `PAREA`. {{ui:Nalepi kopirano područje}} u meniju {{ui:Više}}. Lepi oblast kopiranu sa {{ui:Kopiraj područje}} u MarkupCraft kao sliku u njenoj pravoj veličini. Vidi [Slike u crtežu](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (samo kada list nije imao razmeru crteža): broj, {{key:Enter}} za veličinu papira, ili `P`, zatim `First point on the pasted area`, `Second point on the pasted area` i njihovo pravo rastojanje.

### PASTEORIG

{{key:Mod+Shift+V}}, ili {{ui:Nalepi na mesto}} u meniju {{ui:Više}}. Lepi na koordinatama sa kojih su objekti kopirani. Ništa ne pita.

### DUPLICATE

Skraćenica: `DUP`. {{key:Mod+D}}, ili {{ui:Dupliraj i pomeri}} u meniju {{ui:Više}}. Kopija objekata se pomera sa pokazivačem od mesta gde je; {{key:Esc}} ne ostavlja ništa. Ne koristi klipbord.

- `Select objects to duplicate` (preskače se kada su objekti već izabrani)
- `Specify where the copy goes (Esc leaves nothing)`: kliknite, ukucajte tačku, `@dx,dy` (od mesta gde je bio pokazivač), ili rastojanje ka kursoru.

### SELECT

Pita `Select objects` (sa svim opcijama ispod) i ostavlja izabrano što ste izabrali, za sledeću komandu ili za `P` kasnije.

### QSELECT

Skraćenica: `QS`. U pregledaču, dijalog {{ui:Brzi izbor}} (vidi [Izbor objekata](topic:select-objects#select-by-a-rule-quick-select)). Bez njega, komandna linija pita `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` i `Enter value`. Poklapanja postaju izbor.

### SELECTSIMILAR

Skraćenica: `SIM`. `Select objects [SEttings]` (ili trenutni izbor): bira svaki objekat iste vrste sa istim slojem i bojom (i nazivom bloka, šablonom šrafure). `SE` pita `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, ponavlja se dok ne pritisnete {{key:Enter}}.

### FIND

Bez skraćenice; ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Pronađi i zameni}}. U pregledaču, dijalog {{ui:Pronađi i zameni}} (vidi [Dodavanje teksta i oznaka](topic:text#find-and-replace-words)). Bez njega: `Enter text to find`, zatim `Enter replacement text (Enter: select what is found)`. Traži u tekstu, vrednostima atributa i tekstu kota, na otvorenoj kartici ili u izboru.

### SELECTALL i DESELECT

`SELECTALL` (skraćenica `AI_SELALL`, {{key:Mod+A}}) bira svaki objekat koji možete menjati na otvorenoj kartici. `DESELECT` (skraćenice `AI_DESELECT`, `SELECTNONE`; ili {{key:Esc}}) briše izbor.

## Kote

### DIMLINEAR

Skraćenica: `DLI`, `DIMLIN`. Vodoravna ili uspravna udaljenost.

- `Specify first extension line origin [Select object]` (Enter ili `S`: `Select object to dimension`, zatim kliknite liniju, luk, krug ili segment polilinije)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` pita za tekst (`<>` je izmerena vrednost), `H` i `V` fiksiraju pravac, `R` pita `Specify angle of dimension line <0>`.

### DIMALIGNED

Skraćenica: `DAL`, `DIMALI`. Prava udaljenost između dve tačke.

- Početne tačke kao u {{cmd:DIMLINEAR}}, zatim `Specify dimension line location [Text]`.

### DIMANGULAR

Skraćenica: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Luk: njegov ugao. Krug: `Specify second angle endpoint`. Linija: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: kliknite unutar ugla koji merite.

### DIMRADIUS i DIMDIAMETER

Skraćenica: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, zatim `Specify dimension line location [Text]`.

### DIMCONTINUE

Skraćenica: `DCO`, `DIMCONT`. Nastavlja od poslednje linearne ili poravnate kote (ili pita `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, ponavlja se dok ne pritisnete Enter.

### DIMBASELINE

Skraćenica: `DBA`, `DIMBASE`. Isto kao {{cmd:DIMCONTINUE}}, ali svaka kota počinje od prve početne tačke i slaže se dalje napolje.

### DIMORDINATE

Skraćenica: `DOR`, `DIMORD`. `Specify feature location`, zatim `Specify leader endpoint [Xdatum/Ydatum/Text]`. Piše koliko je element udaljen od početka UCS-a duž X ili duž Y, na vodilici: vodilica koja ide uglavnom gore ili dole čita X, ona koja ide postrance čita Y; `Xdatum` i `Ydatum` to fiksiraju. Prvo postavite početak sa {{cmd:UCS}} (bez njega je to 0,0 crteža). Hvatači pomeraju element, početak i kraj vodilice, a vrednost prati. Čuva se kao prava koordinatna kota u DWG i DXF. Odbija kraj vodilice na samom elementu.

### DIMARC

Skraćenica: `DAR`. `Select arc or polyline arc segment`, zatim `Specify arc length dimension location [Text]`. Meri duž luka (ne tetive) i piše simbol luka pre vrednosti. Odbija pun krug, liniju ili pravi segment polilinije. DWG je čuva kao kotu dužine luka; DXF je čuva kao uglovnu kotu sa dužinom kao tekstom, a CadCraft je ponovo otvara kao kotu dužine luka.

### DIMJOGGED

Skraćenica: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Kota poluprečnika za krivu čiji je centar daleko ili van lista: linija kote počinje od tačke koju date umesto centra, sa prelomom u njoj, i i dalje piše pravi poluprečnik. DWG je čuva kao kotu poluprečnika sa prelomom; DXF je čuva kao kotu poluprečnika, a CadCraft je ponovo otvara sa prelomom.

### DIMJOGLINE

Skraćenica: `DJL`. `Select dimension to add jog [Remove]`, zatim `Specify jog location (or press Enter)`. Stavlja simbol preloma na liniju linearne ili poravnate kote, da pokaže da rastojanje nije nacrtano u razmeri; vrednost se ne menja. `Remove` ga skida. Odbija druge vrste kota.

### QDIM

Bez skraćenica. `Select geometry to dimension`, zatim `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Kotira više objekata u jednom koraku, od krajeva linija i segmenata polilinija, centara krugova i lukova, tačaka i referenci blokova. Položaj iznad ili ispod objekata meri preko, a položaj pored njih meri gore. `Continuous` lančano povezuje tačke, `Baseline` meri sve od prve, `Staggered` ugnježdava parove od sredine ka napolje, `Ordinate` daje svakoj tački njeno rastojanje od datuma (`datumPoint` bira novi), `Radius` i `Diameter` kotiraju svaki krug i luk koji izaberete. Režim se pamti. Sve što napravi je jedan korak opozivanja. Kaže to kada ima manje od dve tačke, ili nema lukova ili krugova za Radius i Diameter.

### DIMBREAK

Skraćenica: `DBREAK`. `Select dimensions to add or remove breaks`, zatim `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` ostavlja razmak u liniji kote i linijama produženja tamo gde god drugi objekat preseca, i ponovo ga izračunava kada se ti objekti ili kota pomere. `Manual` (jedna kota) pita dve tačke i ostavlja razmak između njih. `Remove` skida sve razmake. Razmak je 1.5 puta visina teksta kote.

### DIMSPACE

Bez skraćenica. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Pomera linije kota paralelnih linearnih i poravnatih kota (ili uglovnih oko istog temena) tako da stoje na istom rastojanju, računato od osnovne kote, svaka sa strane na kojoj je. `0` ih poravnava sa osnovnom; `Auto` je dvostruka visina teksta osnovne kote. Kote koje nisu paralelne osnovnoj ostaju netaknute.

### DIMINSPECT

Bez skraćenica. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Crta okvir oko vrednosti sa oznakom ispred i stopom inspekcije posle nje. `remove` skida okvir. Tekst tolerancije ostaje uz vrednost.

### DIMOVERRIDE

Skraćenica: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, ponavlja se dok ne pritisnete Enter, zatim `Select dimensions`. Menja te postavke samo na izabranim kotama; stil kote se ne menja. Prihvata promenljive koje su broj ili prekidač (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` vraća izabrane kote na njihov stil. Odbija naziv koji nije takva promenljiva i vrednost koju ne može da primi.

### DIMREASSOCIATE

Skraćenica: `DRE`, `DIMREASSOC`. `Select dimensions`, zatim za svaku njene početne tačke linija produženja (`Specify first extension line origin on an object`: hvata se za kraj ili sredinu linije, teme polilinije, centar; Enter ostavlja tu tačku slobodnom), ili za kotu poluprečnika, prečnika, kotu poluprečnika sa prelomom ili dužine luka `Select arc or circle`. Kota se zatim vezuje za te objekte: kada se oni pomere ili promene veličinu, kota prati u istom koraku opozivanja i ponovo meri. Ručno pomeranje vezane tačke, ili brisanje objekta, prekida tu vezu. Veza se čuva u DWG i DXF 2000 kao sopstveni podaci CadCraft-a; drugi programi vide običnu kotu.

### DIMDISASSOCIATE

Skraćenica: `DDA`, `DIMDISASSOC`. `Select dimensions`. Oslobađa ih od objekata za koje su vezane; ništa se ne pomera.

### CENTERMARK

Skraćenica: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, ponavlja se dok ne pritisnete Enter. Crta krst u centru i četiri središnje linije do malo iza krive (tip linije CENTER), kao obične linije na tekućem sloju; veličina prati veličinu strelice i opštu razmeru tekućih podešavanja kote, okrenuto sa UCS. Ne prate krug ako se on pomeri.

### CENTERLINE

Skraćenica: `CL`. `Select first line`, `Select second line`. Crta liniju na pola puta između dve linije (duž simetrale kada se sretnu), malo dužu od njih, u tipu linije CENTER. Obična linija: ne prati dve linije.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Bez skraćenica. Svaka pita `Enter new value for … <current>` i postavlja tu veličinu za **nove** kote: opšta razmera, visina teksta, veličina strelice, decimalna mesta (do 8), razmak oko teksta, produženje preko linije kote, pomak od početka. Vidi [Postavljanje veličina kota](topic:dimension-settings).

### DIMLUNIT

Podešavanje kote: format samo novih kota (1 naučni, 2 decimalni, 3 inženjerski, 4 arhitektonski, 5 razlomak).

### DIMSTYLE i -DIMSTYLE

Skraćenica: `DST`, `DDIM`, `D`. Upravljač stilovima kota: {{ui:Postavi tekući}}, {{ui:Novo…}}, {{ui:Izmeni…}}, {{ui:Preimenuj…}}, {{ui:Obriši}}, {{ui:Uporedi…}}, {{ui:Primeni na izabrane}}. `-DIMSTYLE` u komandnoj liniji: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Vidi [Postavljanje veličina kota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT i DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, zatim kote (ili one koje su već izabrane). New pita za tekst (`<>` = izmerena vrednost); Rotate za ugao (0 vraća tekst na mesto); Oblique za ugao linija produženja od X ose (Enter = nijedan; samo linearne i poravnate kote). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Vidi [Postavljanje veličina kota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Skraćenica: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, ili sa izabranim kotama `Units in the text of the selected dimensions`. Piše izmerenu dužinu u toj jedinici, sa jedinicom iza nje (DIMLFAC i DIMPOST sufiks); `D` se vraća na jedinice crteža. Vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Skraćenica: `RC`. Štampa `Arc length: … Type: …`, zatim `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular pita `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand prati pokazivač dok ne kliknete ili ne pritisnete {{key:Enter}}; `O` pita `Select object` i `Reverse direction? [Yes/No] <N>` i pretvara objekat u oblak. `A` pita `Specify the length of each arc`. `R`, `P` i `F` biraju vrstu za sledeći oblak. Rezultat je zatvorena polilinija lukova.

### MLEADER

Skraćenica: `MLD`; ili {{ui:Vodilica}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, zatim tekst u polju na mestu (ili, bez njega, `Enter text (an empty line ends)`). `Block` najpre pita naziv bloka, a višestruka vodilica prikazuje taj blok umesto teksta. Više linija vodilice: {{cmd:MLEADEREDIT}}. Čuva se kao prava višestruka vodilica u DWG; DXF čuva linije, strelicu i tekst koje crta.

### MLEADEREDIT

Skraćenica: `MLE`. `Select a multileader`, zatim `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: svaka tačka dodaje liniju vodilice od nove strelice do istog mesta sletanja, dok ne pritisnete Enter. `Remove leaders` zatim uklanja liniju vodilice na koju kliknete (višestruka vodilica zadržava najmanje jednu). `Block content` pita naziv bloka i prikazuje taj blok umesto teksta (njegovi atributi se pitaju); `Text content` vraća tekst. Svaka linija vodilice ima sopstveni hvatač. DWG čuva svaku liniju vodilice i blok u jednoj višestrukoj vodilici.

### MLEADERALIGN

Skraćenica: `MLA`. `Select multileaders`, zatim `Select multileader to align to [Distribute/Spacing/Use current spacing]` i `Specify direction`. Pomera mesta sletanja ostalih višestrukih vodilica (i njihov tekst ili blok) na liniju kroz mesto sletanja izabrane u tom pravcu; strelice ostaju tamo gde pokazuju. `Spacing` im takođe daje jednak međusobni razmak; `Distribute` pita dve tačke i ravnomerno ih raspoređuje između njih. Potrebne su najmanje dve višestruke vodilice.

### MLEADERCOLLECT

Skraćenica: `MLC`. `Select multileaders`, zatim `Specify collected multileader location [Vertical/Horizontal]` (Enter zadržava mesto prve). Pravi jednu višestruku vodilicu od nekoliko: sadržaj blokova ide u novi blok koji drži svaki blok postavljen uz drugi ili jedan ispod drugog; sadržaj teksta postaje jedna beleška sa redom za svaki. Prva višestruka vodilica zadržava svoje linije vodilice; ostale se uklanjaju. Odbija mešavinu sadržaja teksta i bloka.

### TABLE

Skraćenica: `TB`; ili {{ui:Beleške}} › {{ui:Više}} › {{ui:Tabela}}. Pravi tabelu: jedan objekat koji pomerate, kopirate, okrećete, razmeravate i štampate kao svaki drugi, sa ćelijama koje se čuvaju kao podaci.

- `Number of data rows or [Paste/File/Style] <3>`, zatim `Number of columns <3>`, `Text height` i `Top left corner of the table`. Tabela dobija red naslova (jedna spojena ćelija) i red zaglavlja iznad redova podataka.
- `P`: tabela iz ćelija tabele na klipbordu (tekst sa tabulatorom između ćelija). Pritisak na {{key:Ctrl+V}} sa takvim ćelijama na klipbordu radi isto, osim ako CadCraft-ova sopstvena kopija nije novija (ili CadCraft ne može da kaže: tada lepi sopstvenu kopiju i to kaže). `F`: tabela iz datoteke `.csv` ili datoteke sa tabulatorima. Prvi red postaje red zaglavlja; širine kolona se prilagođavaju tekstu.
- `S`: bira stil tabele za ovu tabelu (vidi {{cmd:TABLESTYLE}}).
- Odbija broj redova ili kolona koji nije ceo broj, i više ćelija nego što tabela može da drži (2.000 redova, 200 kolona, 40.000 ćelija).
- {{cmd:EXPLODE}} pretvara tabelu u linije i tekst. Sačuvana kao DWG, tabela je prava tabela koju drugi programi mogu menjati; sačuvana kao DXF je blok koji je crta, a CadCraft je ponovo otvara kao tabelu.

### TABLEDIT

Skraćenica: `TABLEEDIT`, `TABEDIT`; ili dvostruki klik na ćeliju. Menja tabelu.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Kliknite ćeliju, ili sa izabranom tabelom ukucajte njen naziv (`B3`: kolona B, red 3; red naslova je red 1). U pregledaču se otvara polje preko ćelije: {{key:Enter}} zadržava tekst, {{key:Tab}} ide na sledeću ćeliju, {{key:Alt+Enter}} započinje novi red, {{key:Esc}} ostavlja ćeliju kakva je bila.
- Tekst koji počinje sa `=` je formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, sa `+ - * / ^`, zagradama i funkcijama kao `sqrt` i `round`. Ćelija prikazuje vrednost; formula koja imenuje sopstvenu ćeliju, ćeliju van tabele ili ćeliju bez broja prikazuje `####`, a komandna linija kaže zašto.
- `R` / `C`: `Insert` ili `Delete` redova ili kolona na izabranoj ćeliji (koliko, i iznad ili ispod, levo ili desno). Formule prate ćelije koje imenuju.
- `S`: širina kolone i visina reda. Red nikada nije niži od svog teksta. Izabrana tabela ima i hvatač na ivici svake kolone i svakog reda.
- `M`: spaja od jedne izabrane ćelije do druge; `U`: razdvaja. `A`: poravnanje (`TL` gore levo … `MC` sredina centar … `BR` dole desno). `H`: sopstvena visina teksta ove ćelije (0 = iz stila). `K`: pravi red naslovom, zaglavljem ili redom podataka. `CL`: prazni ćeliju.
- Odbija tabelu na zaključanom sloju, brisanje svakog reda ili kolone, i spajanje koje bi presekla drugu spojenu ćeliju na dva dela.

### TABLESTYLE

Skraćenica: `TS`. Navodi stilove tabela sa brojem tabela koje svaki koristi, zatim `Table style: [New/Set/Edit/Delete/Apply]`.

- Stil drži visinu teksta i poravnanje redova naslova, zaglavlja i podataka, margine ćelija, i koje se ivice crtaju (spoljne, između redova, između kolona).
- `N` pravi stil od tekućeg i postavlja ga kao tekući; `S` postavlja tekući stil (nove tabele ga preuzimaju); `E` menja jedan: tabele koje ga koriste se ponovo crtaju; `A` daje izabranim tabelama tekući stil; `D` briše jedan (ne Standard, ne tekući; tabele koje su ga koristile zadržavaju svoj izgled).
- Stilovi se čuvaju sa crtežom (DWG i DXF).

### TABLEEXPORT

Čuva ono što tabela prikazuje kao CSV datoteku (formula kao svoju vrednost). `Select a table`, ili je izaberite prvo. Tekstualne ćelije koje počinju sa `=`, `+`, `-` ili `@` dobijaju vodeće `'` da ih tabela ne bi izvršila.

### TABLEPASTE

Skraćenica: `PASTETABLE`. Pravi tabelu od ćelija tabele na klipbordu, zatim pita gornji levi ugao. Isto kao {{cmd:TABLE}} › `Paste`.

### DATALINK

Skraćenica: `DL`. `Data link: [New/List/Remove] <New>`. `N` pita CSV datoteku, postavlja tabelu iz nje i pamti naziv datoteke; `L` navodi veze sa njihovom datotekom, veličinom, vremenom kada je pročitana i koliko tabela je koristi; `R` uklanja vezu (njene tabele ostaju obične tabele).

### DATALINKUPDATE

Skraćenica: `DLU`. Ponovo čita datoteku veze podataka i ponovo puni tabele vezane za nju (redovi i kolone se dodaju ili uklanjaju da se poklope). Pregledač ne može sam da otvori datoteku, pa traži da ponovo izaberete datoteku. Sa više veza pita koju.

### FIELD

Stavlja polje u crtež: tekst koji se sam računa. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: sada, ili sačuvan, napravljen ili štampan datum, i format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: naziv datoteke, sa ili bez nastavka. `S`: broj lista, njegov naslov, ili koliko listova ima. `P`: svojstvo crteža po nazivu (vidi {{cmd:DWGPROPS}}). `O`: izaberite objekat, zatim šta se čita (površina, dužina, obim, poluprečnik, prečnik, sloj, naziv, x, y, tekst, rotacija, boja) i decimale. `E`: formula. `C`: tekst sa kodovima ukucanim kakvi jesu, kao `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Zatim `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: izabrani tekst dobija polje dodato posle onoga što sadrži; ćelija tabele isto; referenca bloka pita koji atribut; {{key:Enter}} pita visinu i tačku za novi tekst.
- Na ekranu polje ima svetlosivu pozadinu; štampa i PDF je nikada nemaju. Ručno kucanje preko teksta polja završava polje. Polje koje ne može da se izračuna prikazuje `####`.
- Objektno polje pronalazi svoj objekat po ključu koji CadCraft čuva na objektima (Podešavanja › CadCraft › Datoteke pogodne za spajanje); sa isključenim ključevima odbija.

### UPDATEFIELD

Skraćenica: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` postavlja kada se polja sama ažuriraju: ukucajte slova `O` open, `S` save, `P` plot, `R` regen (sva četiri na početku), ili `NONE`.

### DWGPROPS

Skraćenica: `DRAWINGPROPS`. Navodi svojstva crteža, zatim `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Prvih šest su ona koja prikazuje panel {{ui:Podaci o crtežu}}; `U` dodaje vaš naziv i vrednost, `R` uklanja jedan. Polja ih čitaju (`%<prop:title>%`, `%<prop:Client>%`) i prate odmah. Odbija prilagođeni naziv koji je jedan od ugrađenih ili sadrži `%`, `<`, `>`, navodnik ili obrnutu kosu crtu.

## Parametarski

Vidi [Ograničavanje crteža](topic:constraints) i [Korišćenje parametara i jednačina](topic:parameters). Ograničenja rade na kartici {{ui:Model}}.

### GEOMCONSTRAINT i komande GC

Skraćenica `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, zatim upiti te komande.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (drugi se pomera).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT i komande DC

Skraćenica `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (broj, izraz, ili `name=expression`).
- {{cmd:DCALIGNED}}: kao gore, sa `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` pita tolerancije rastojanja i ugla.
- {{cmd:DELCONSTRAINT}} (skraćenica `DELCON`): `Select objects`; njihova ograničenja odlaze.
- {{cmd:CONSTRAINTBAR}} (skraćenica `CBAR`): `Select objects [Showall/Hideall]`, zatim `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS i -PARAMETERS

{{cmd:PARAMETERS}} (skraćenice `PAR`, `PARAM`) otvara panel {{ui:Parametri}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Skraćenica `SWMACRO`. Preuzima makro (.swb) koji ponovo gradi model kao jednu ograničenu skicu u SolidWorks-u. Vidi [Prebacivanje skica u druge modelere delova i iz njih](topic:solidworks-sketches).

## Blokovi

### ANNOSCALE

Skraćenica: `CANNOSCALE`. Kaže anotativnu razmeru crteža i koliko anotativnih objekata sadrži, zatim pita `New annotation scale`: ukucajte `1:50`, `1:100`, `2:1`, goli broj (`50` je 1:50) ili naziv jedne od sopstvenih razmera crteža. Svaki anotativni tekst i kota se razmeravaju da se štampaju u istoj veličini u novoj razmeri, u jednom koraku opozivanja; objekti koji nisu anotativni ostaju netaknuti, a tako i objekat koji zadržava spisak razmera bez nove ({{cmd:OBJECTSCALE}}). Vidi [Jedinice, formati papira i razmere](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Skraćenica: `OBJSCALE`. `Select annotative objects`, zatim `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Anotativni tekst ili kota zadržava spisak anotativnih razmera. `Add` i `Delete` pitaju razmeru (`1:50`, `2:1`, goli broj, ili naziv jedne od sopstvenih razmera crteža); `Current scale` dodaje anotativnu razmeru crteža; `List` štampa razmere svakog objekta. Prozor pogleda čija je razmera na spisku objekta prikazuje objekat u veličini koja štampa njegovu visinu na papiru u toj razmeri, na ekranu i u štampi. Poslednja razmera ne može da se obriše. Objekti koji nisu anotativni se izostavljaju: prvo uključite Anotativno u Svojstvima. Spiskovi se čuvaju u DWG i DXF kao sopstveni podaci CadCraft-a. Vidi [Jedinice, formati papira i razmere](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Skraćenica: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Uključeno (kako crtež počinje): anotativni objekat se prikazuje i u prozoru pogleda, ili u modelu, čija razmera nije na njegovom spisku, u veličini koju ima. Isključeno: tamo se ne prikazuje, i ne može se izabrati u modelu. Prekidač je jedan korak opozivanja; ne čuva se u datoteci.

### SCALELISTEDIT

Skraćenica: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` dok ne pritisnete {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit i Delete pitaju naziv razmere. Sopstvene razmere crteža ulaze u spiskove razmera prozora pogleda i štampe i čuvaju se sa crtežom. Vidi [Jedinice, formati papira i razmere](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT i PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: tačke kroz koje kriva prolazi; `Close`, `Undo`, zatim `Start tangent` i `End tangent` (tačka, ili {{key:Enter}}). Method › Control vertices pita stepen (1 do 5) i crta iz kontrolnog poligona. Object pretvara polilinije u splajnove kroz njihova temena. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` za više objekata; linije, lukovi i splajnovi se najpre nude kao polilinije. Vidi [Splajnovi i polilinije](topic:splines).

### BLOCK

Skraćenica: `B`, `BMAKE`.

- `Enter block name`. Ako postoji: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Zamenjuju se jednom referencom na novi blok.

### WBLOCK

Skraćenica: `W`, `-WBLOCK`. Zapisuje blok, neke objekte ili ceo crtež kao novu DWG ili DXF datoteku. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (postaje početak novog crteža), `Select objects`, zatim `File format [DWG/DXF/R12 DXF]` i `File name for the new drawing`, pa `What to do with the objects [Retain/Convert to block/Delete]`. Convert ih zamenjuje jednom referencom na blok nazvan po datoteci; Delete ih uklanja.
- **Block**: `Block to write out`. Sopstveni objekti bloka, sa njegovom osnovnom tačkom kao početkom, ugnježdeni blokovi uključeni.
- **Entire drawing**: svaki objekat u prostoru modela. Listovi se ne zapisuju; za kopiju koja ih zadržava koristite {{cmd:SAVEAS}}.

Nova datoteka sadrži samo slojeve, tipove linija, stilove teksta i kota, i blokove koje koriste njeni objekti, i jedinice crteža. Verzija DWG-a je ona koju je {{cmd:SAVEAS}} poslednji put koristio. U pregledaču se datoteka preuzima; u Studiju se otvara dijalog za čuvanje.

### ATTDEF

Skraćenica: `ATT`, `DDATTDEF`, `-ATTDEF`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Definiši atribut}}. Štampa režime, zatim `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` kada je konstantan), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} uzima definicije atributa u blok.

### EATTEDIT i ATTEDIT

`EATTEDIT` (`DDATTE`, ili dvostruki klik na referencu sa atributima; {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi atribute}}): `Select a block reference with attributes`, zatim dijalog {{ui:Uredi atribute}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): ista referenca, zatim `<prompt> (<TAG>) <value>` za svaki atribut; {{key:Enter}} zadržava vrednost. Vidi [Atributi](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Vrednosti se zadržavaju; novi atributi dobijaju podrazumevanu vrednost, uklonjeni odlaze, a postavljanje se resetuje.

### BATTMAN

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Upravljač atributima}}. Dijalog: blok, atributi (oznaka, upit, podrazumevano, režimi, redosled), {{ui:Ažuriraj reference (vrednosti se čuvaju)}}, {{ui:Primeni}}.

### REFEDIT i REFCLOSE

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi na mestu}}. `REFEDIT`: `Select the block reference to edit in place` (ili izbor). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Sačuvaj blok}} i {{ui:Odbaci}} na traci rade isto. Cela izmena je jedan korak opozivanja. Vidi [Atributi](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: da li pritisak poteza olovke postavlja debljinu linije onoga što {{cmd:SKETCHFIX}} i {{cmd:SKETCHLIVE}} prave (uključeno na početku). Vidi [Skicirajte olovkom](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Skraćenica: `OFFSTD`. Kaže koji kancelarijski standard važi za ovaj crtež i odakle dolazi: sopstveni zapis crteža, zajednički standard vašeg tima, ili vaša Podrazumevana pravila (visine teksta `all.anno.*`); bez njih, sopstvene veličine programa. `[Import/Layers/Title block/Clear/eXit]`: `Import` čita `cc-office-standard` .json (zapis koji pišu SuperCad i BimCraft) u ovaj crtež, čuva se sa njim u DWG i DXF; `Layers` dodaje kancelarijske slojeve koje crtež nema, u jednom koraku opozivanja, i nikada ne uklanja nijedan; `Title block` navodi polja kancelarije sa sopstvenim vrednostima ovog crteža; `Clear` uklanja sopstveni zapis crteža. Visine anotativnog teksta i kota prate važeći standard. Vidi [Jedinice, formati papira i razmere](topic:units-papers-scales).

### BPARAMS

Skraćenica: `BPM`, `BLOCKPARAMS`. Otvara upravljač parametrima za blok u uredniku blokova, blok izabrane reference, ili blok koji navedete (`Block name`): parametri sa formulama, više parametara vidljivosti sa njihovim stanjima, i sopstvene vrednosti i stanja izabrane reference. Vidi [Vaši parametri i stanja vidljivosti](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` radi isto u komandnoj liniji: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT i BCLOSE

`BE`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Izmeni blok}}. `Enter block name to edit <the selected reference's block>` otvara urednik blokova. `BCLOSE` pita `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Sačuvaj blok}} i {{ui:Odbaci izmene}} na traci rade isto. Sve urađeno u uredniku je jedan korak opozivanja.

### VIEWBASE

Skraćenica: `FLATSHOT`. Ravan 2D prikaz tela na kartici 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, razmera (`1:20`, `2:1`; {{key:Enter}} uzima onu koja stane na list), zatim središte prikaza. Jedna referenca bloka, vidljive ivice na VIEW-VISIBLE, skrivene isprekidane na VIEW-HIDDEN. Vidi [Ravni prikazi na listu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Skraćenica: `-PUBLISH`; ili {{ui:Svi listovi u jednom PDF-u}} u dijalogu {{ui:Štampaj u PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} štampa svaki list, `S` pita nazive razdvojene zarezima. Jedan PDF, stranica i obeleživač po listu. Vidi [Svi listovi u jednom PDF-u](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Skraćenica: `SSM`, `SHEETSETMANAGER`. Vodi vas do odeljka {{ui:Skup listova}} levog panela: listovi iz mnogih crteža, numerisani i naslovljeni, njihovi naslovni blokovi popunjeni iz skupa, objavljeni kao jedan PDF. Vidi [Skupovi listova](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): izaberite DWG ili DXF, zatim tačku umetanja. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; sa više veza izaberite jednu od njihovih referenci ili ukucajte `N` i njen naziv. Vidi [Povezani crteži](topic:files#linked-drawings-external-references).

### COUNT

Skraćenica: `BCOUNT`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Prebroj blokove}}. `Select a block reference to count, or [All/Export] (Enter: All)`: izbor bira i broji svaku referencu tog bloka u ovom prostoru; {{key:Enter}} ili `A` navodi sve; `E` zatim `C` (brojevi) ili `A` (atributi) preuzima CSV. Vidi [Brojanje blokova i izvoz tabele](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Skraćenica: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (velika i mala slova nisu bitna). `F` pita DWG ili DXF, zatim ceo crtež ili jedan od njegovih blokova; naziv koji je već u upotrebi pita {{ui:Zadrži postojeće}} ili {{ui:Preimenuj}}. `L` otvara panel biblioteke.
- `Specify insertion point [Scale/Rotate]`. `S` pita `Specify scale factor`, `R` pita `Specify rotation angle`; oba se pamte.
- Kada blok već stoji pored objekata koji se ponavljaju drugde bez njega, jedan red kaže koliko mesta se predlaže, a upit dobija `suGgested`: `G` ih prikazuje; kliknite blizu jednog da postavite blok tamo, `A` za sva, {{key:Enter}} za povratak. Preuzimaju rotaciju svojih suseda i podrazumevane vrednosti atributa. Crteži sa više od 20.000 objekata u otvorenom prostoru se ne pretražuju.
- Zatim `Enter <prompt> (<TAG>) <default>` za svaki atribut koji blok traži. Vidi [Atributi bloka](topic:attributes).

### LIBRARY

Skraćenica: `LIB`. Otvara panel biblioteke: postavljanje stavki, provera ažuriranja, zasluge biblioteke. Bez pitanja. Vidi [Umetanje iz datoteke ili biblioteke](topic:insert-from-file-and-library).

### STEELMEMBER

Skraćenica: `SMEMBER`; ili {{ui:3D element}} na kartici {{ui:Standardni}} biblioteke. `Section size <W12x26>` (kako je navodi kartica), zatim `Start point [Column]` i `End point`: čvrst element na kartici 3D između dve tačke, koji stoji na zemlji. `C` pita osnovnu tačku stuba i njegovu visinu. Jedan korak opozivanja. Vidi [Postavljanje čeličnih profila i standardnih delova](topic:steel-and-standard-parts).

### PARTSLIST

Skraćenica: `PLIST`. `Top left corner of the parts list`, zatim `Text height <2.5>`: crta tabelu svakog standardnog dela i čeličnog profila postavljenog iz biblioteke (brojevi stavki, količina, deo, standard, veličina, dužina, materijal, masa). Jedan korak opozivanja. Vidi [Postavljanje čeličnih profila i standardnih delova](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Skraćenica: `PU`. Uklanja definicije blokova koje ništa ne koristi. Bez pitanja.

### DELBLOCKS

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Obriši blokove}}. `Select block to delete [Name/eXit]`: kliknite referencu bloka, ili `N` za spisak blokova sa filterom (izaberite više), ili `X` / {{key:Enter}} za kraj. Svaka referenca odlazi — u modelu, na svakom listu i unutar drugih blokova — zatim definicija, a komandna linija kaže šta je obrisano, a šta nije. Neimenovani blokovi i povezani crteži se ne nude. Upit se vraća za sledeći blok; cela komanda je jedan korak opozivanja.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} lepi ono što ste kopirali ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) kao jedan blok: izaberite tačku umetanja i tamo ide jedna referenca na novi blok, izabrana. Blok dobija sopstveni naziv (`A$C` i broj); {{cmd:RENAME}} mu daje vaš. Jedan korak opozivanja uklanja referencu i blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pita blok koji se zamenjuje i blok koji ide na njegovo mesto (`?` navodi blokove), zatim menja svaku referencu u modelu, na svakom listu i unutar drugih blokova. Svaka referenca zadržava mesto, razmeru, rotaciju, sloj i vrednosti atributa koje oba bloka imaju; atributi koje ima samo novi blok počinju sa podrazumevanim vrednostima, a kaže vam koje vrednosti su odbačene. Kada ništa više ne koristi stari blok, nudi da ga ukloni. Odbija povezane crteže i zamenu koja bi stavila blok unutar samog sebe. Jedan korak opozivanja.

### MINSERT

{{cmd:MINSERT}} postavlja blok u redove i kolone: naziv bloka, tačka umetanja, razmera, rotacija, broj redova i kolona, i rastojanja između njih. Ceo skup se okreće sa rotacijom. Svaki je sopstvena referenca (najviše 10.000), pa se bilo koji može pomeriti ili obrisati posle.

### BLOCKSPALETTE

Skraćenica: `BLOCKSPAL`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Panel Blokovi}}. Prikazuje panel {{ui:Blokovi}} sa kursorom u njegovom filteru. Svaki blok ima malu sliku; oni najskorije postavljeni dolaze prvi. Dva dugmeta pored filtera prebacuju između spiska i mreže slika. Kliknite sliku (ili {{ui:Umetni}}) da postavite blok sa {{cmd:INSERT}}, ili je prevucite na crtež da je postavite gde je ispustite.

{{ui:Biblioteke}}, ispod spiska: {{ui:Dodaj crtež}} uzima sopstvenu DWG ili DXF datoteku i navodi njene blokove sa slikama, a ceo crtež kao jedan blok. Postavljanje jednog kopira njegovu definiciju (i blokove koje ugnježdava, i njihove slojeve) u ovaj crtež, kao što to radi opcija `File` komande {{cmd:INSERT}}; blok koji je već ovde sa istom definicijom koristi se bez pitanja, a onaj istog naziva koji se razlikuje pita {{ui:Zadrži postojeće}} ili {{ui:Preimenuj}}. U pregledaču datoteka ostaje dok se stranica ne zatvori. U CadCraft Studio-u {{ui:Dodaj fasciklu}} navodi crteže u fascikli, a svaki se otvara kad kliknete na njega, a datoteke i fascikle se pamte. Mali x uklanja biblioteku sa spiska; datoteka se ne dira. Zajednička {{ui:Biblioteka}} je nešto drugo: vidi [Umetanje iz datoteke ili biblioteke](topic:insert-from-file-and-library).

### BCONVERT

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Pretvori ponavljanja u blokove}}. Nalazi geometriju koja se ponavlja i pretvara svaku kopiju u referencu na jedan blok.

- `Select the objects that repeat, or [Block]`: objekti jedne kopije. `B` umesto toga imenuje postojeći blok, da nađe slobodne kopije njegovih objekata.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` i `P` menjaju šta se računa kao kopija; {{key:Enter}} pretražuje. Postavke se pamte.
- `Name for the new block <Block1>`, zatim `Specify the block's base point` ({{key:Enter}} uzima donji levi ugao izbora).
- Kaže koliko drugih skupova objekata je ista geometrija, ističe sve što bi zamenio, i pita `Yes/No`.

Kopija su isti objekti pomereni i okrenuti za bilo koji ugao (i ogledalski ili razmerani za jedan faktor kada su ti uključeni): svaki objekat mora imati svoj par, u granicama milioniti deo veličine izbora. Svaka referenca dobija sopstvenu rotaciju i razmeru (ogledalska ima negativnu Y razmeru), i sloj koji su objekti delili. Objekti na zaključanim slojevima se ne diraju i broje se. Pretražuje otvoreni prostor (model ili otvoreni list). Vrlo velika pretraga staje na granici rada i to kaže. Jedan korak opozivanja.

### BSEARCH

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Pronađi blokove}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: deo naziva bloka, ili šablon sa `*` i `?`. Navodi svaki blok sa njegovim referencama ovde i u celom crtežu.
- `A`: vrednost atributa, ili `TAG=value`. Navodi blokove čije reference je drže, sa nađenim vrednostima. Konstantni atributi se računaju.
- `G`: izaberite objekte, ili jednu referencu bloka, i navode se blokovi čiji je oblik najmanje 85% sličan, najbolji prvi. Veličina, rotacija i ogledalo se ne računaju. Mera poredi rastojanja između tačaka raspoređenih duž obrisa, pa nalazi slične oblike; za tačne kopije koristite {{cmd:BCONVERT}}.

Reference nađene u otvorenom prostoru se biraju, spremne za sledeću komandu.

### BREPLACE

Ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Zameni blokove}}. `Replace [Selected/All]`: `S` zamenjuje reference blokova koje izaberete blokom koji imenujete; `A` pita blok i njegovu zamenu i menja svaku referencu, kao što to radi {{cmd:BLOCKREPLACE}} (isti kod). Referenca zadržava mesto, razmeru, rotaciju, sloj i vrednosti atributa koje oba bloka imaju; vrednosti za koje novi blok nema mesto se odbacuju i navode. `?` navodi blokove. Jedan korak opozivanja.

### DATAEXTRACTION

Skraćenica: `EATTEXT`, `DX`; ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Izdvajanje podataka}}. Navodi blokove, njihove atribute i svojstva objekata kao tabelu ili CSV datoteku.

- Radi nad izborom, ili pita `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` kada izbor sadrži oboje. Neimenovani blokovi, tabele i specifikacije materijala se nikada ne navode.
- Štampa kolone koje možete izabrati (naziv, vrsta, sloj, X, Y, rotacija, razmera, dužina, površina, boja, tip linije, prostor, i po jedna za svaku oznaku atributa), zatim `Columns, by name or number with commas between`. {{key:Enter}} uzima označene: naziv i svaki atribut za blokove; vrstu, sloj i dužinu za objekte.
- `Put identical rows together with a count? [Yes/No] <Yes>`, zatim `Put the list in a: [Table/Csv] <Table>`. Tabela je obična tabela ({{cmd:TABLEDIT}} je menja) i nije živa: pokrenite komandu ponovo kada se crtež promeni.
- Odbija kolonu koje nema na spisku. Tabela drži 1.999 redova podataka; CSV datoteka ih prima sve.

### COUNTTABLE

Broji reference blokova izbora (ili otvorenog prostora) i stavlja brojeve u tabelu (`Block`, `Count`) ili CSV datoteku. Za broj koji sam prati crtež vidi {{cmd:BOMTABLE}}.

## Listovi i štampanje

### LAYOUT

Skraćenica: `LO`, `NEWLAYOUT`; ili dugme {{ui:+}} ispod crteža. Novi list sa okvirom, naslovnim blokom i jednim prozorom pogleda, na ISO A3 (ili Tabloid za crteže u inčima ili stopama). Bez pitanja.

### MVIEW

Skraćenica: `MV`. Samo na listu ({{cmd:VPORTS}} na listu radi isto).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Prozor pogleda prikazuje ceo model u standardnoj razmeri.
- `P` (Polygonal): kliknite temena obrisa (`Undo`, `Close`), {{key:Enter}} kada završite. Odbija manje od tri temena.
- `O` (Object): `Select a closed object for the viewport's outline`: zatvorena polilinija, krug ili elipsa na listu. Prozor pogleda preuzima njen oblik (krive kao kratki pravi delovi); objekat ostaje kakav je. Odbija objekat koji nije zatvoren.

### VPCLIP

Seče prozor pogleda koji je već na listu. `Select viewport to clip` (ili ga izaberite prvo), zatim `Select the object to clip to [Polygonal/Delete]`:

- Kliknite zatvorenu polilinju, krug ili elipsu, ili {{key:Enter}} (ili `P`) da kliknete temena poligona.
- `D` (Delete, nudi se kada je prozor pogleda isečen) ponovo ga pravi pravougaonikom: okvir oko obrisa koji je imao.
- Ono što prozor pogleda prikazuje se ne pomera na papiru, i njegova razmera ostaje. Model se crta i štampa samo unutar obrisa, a ivica prati. Jedan korak opozivanja.
- Isečen prozor pogleda ima hvatač na svakom temenu svog obrisa, pored svog centra i četiri ugla okvira (prevlačenje ugla okvira rasteže i obris). Svojstva prikazuju Obris: Pravougaonik, ili Isečen sa brojem temena.
- Datoteke DWG i DXF 2000 zadržavaju obris za CadCraft. Drugi programi otvaraju prozor pogleda kao pravougaonik oko njega; DXF R12 zadržava samo pravougaonik.
- Na kartici modela kaže da su prozori pogleda na listovima.

### VPORTS

Skraćenica: `VIEWPORTS`. {{cmd:SPLIT}} je isto i sa lista, a {{ui:Pogled}} › {{ui:Više}} › {{ui:Podeli jedno pored drugog}}, {{ui:Podeli jedno iznad drugog}}, {{ui:Četiri okna}}, {{ui:Jedno okno}} to pokreću. Na modelu: `Enter number of panes [SIngle/2/3/4] <3>`; `2` pita `[Horizontal/Vertical] <Vertical>` (Vertical = jedno pored drugog), `3` pita `[Left/Right] <Right>` (gde ide veliko okno). Svako okno zadržava sopstveni prikaz i prostor; klik čini okno aktivnim. Na listu je to {{cmd:MVIEW}}. Vidi [Podelite ekran](topic:split-screen).

### VPVIEW

Bez skraćenica. Samo na listu.

- `Select viewport` (preskače se ako je jedan izabran), zatim na modelu: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Bez skraćenica. Koordinatni sistem po vašem izboru; nije izmena. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: tačka je novi početak, zatim `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: početak, tačka na pozitivnoj X osi, tačka na pozitivnoj Y strani. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` i naziv. Prikaz se okreće tako da je nova X osa vodoravna. Vidi [Okretanje prikaza i korišćenje sopstvenih koordinata](topic:ucs-and-turned-view).

### PLAN

Bez skraćenica. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: okreće prikaz aktivnog okna tako da je X osa UCS-a (ili sveta) vodoravna. Ništa u crtežu se ne pomera.

### TURNLEFT, TURNRIGHT, TURNWORLD

Bez skraćenica; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Okreni pogled 90° ulevo}}, {{ui:Okreni pogled 90° udesno}}, {{ui:Nazad na svet}}. Isto kao `UCS Z -90`, `UCS Z 90` i `UCS W`, a prikaz prati.

### VPLAYER

Bez skraćenica. Na listu ili unutar prozora pogleda. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` pitaju nazive slojeva (zarezi, `*` i `?` kao džokeri), zatim `[All/Select/Current] <Current>` prozore pogleda; Reset vraća svaki sloj na njegovu podrazumevanu vrednost „zamrznut u novim prozorima“; `V` postavlja tu podrazumevanu vrednost (`[Frozen/Thawed]`), koju koristi {{cmd:MVIEW}}. `?` navodi slojeve zamrznute u tekućem prozoru pogleda. Kolona prozora pogleda u panelu Slojevi radi isto za jedan prozor. Vidi [Zamrzavanje sloja u jednom prozoru pogleda](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Skraćenica: `MS`; ili dvostruki klik unutar prozora pogleda. Samo na listu. Rad na modelu kroz prozor pogleda: izabrani, jedini na listu, ili `Click inside the viewport to work in`. Pomeranje i zum unutra menjaju prikaz prozora pogleda (prozor sa zaključanim prikazom ga zadržava, a list se pomera umesto toga); novi prikaz se upisuje kao jedan korak opozivanja. Vidi [Rad na modelu kroz prozor pogleda](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Skraćenica: `PS`; ili dvostruki klik van prozora pogleda, ili klik na karticu ispod crteža. Nazad na list.

### PLOT

Skraćenica: `PRINT`, `PUBLISH`, `EXPORTPDF`; ili {{key:Mod+P}}. Otvara dijalog {{ui:Štampaj u PDF}}. Vidi [Štampa u PDF](topic:plot-pdf).

### PLOTSTYLES

Skraćenica: `STYLESMANAGER`, `PSTABLES`; ili {{ui:Uredi tabele…}} u dijalogu {{ui:Štampaj u PDF}}. Otvara {{ui:Tabele stilova štampanja}}: šta svaka boja štampa kao (boja, siva, mastilo, debljina linije), čuva se sa crtežom. Vidi [Tabele stilova štampanja](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} pomera objekte između lista i modela kroz prozor pogleda, razmerene i okrenute da izgledaju isto sa druge strane. Na listu izaberite objekte i oni idu u model (izaberite prozor pogleda kada list ima više njih). Dok radite na modelu kroz prozor pogleda ({{cmd:MSPACE}}), izabrani objekti dolaze na list. Kaže koliko su puta postali veći ili manji. Prozori pogleda ostaju na svom listu. Jedan korak opozivanja.

### ISODRAFT

{{cmd:ISODRAFT}} uključuje ili isključuje izometrijsko crtanje `ON` ili `OFF`, ili ide direktno na ravan `Left`, `Top` ili `Right`. Dok je uključeno: Ortogonalno ({{key:F8}}) drži linije duž dve ose ravni (levo: 90° i 150°; gore: 30° i 150°; desno: 30° i 90°), polarno praćenje ({{key:F10}}) prati iste ose, hvatanje za mrežu ({{key:F9}}) koristi izometrijsku mrežu, a mreža ({{key:F7}}) se crta linijama pod 30°, 90° i 150°. {{cmd:ELLIPSE}} dobija `Isocircle`: zadajte centar i poluprečnik (ili `Diameter`) i crta elipsu koju krug prikazuje na tekućoj ravni. Crtež ostaje ravan: ovo su pomagala za crtanje slikovitog prikaza, a ne 3D model. Postavka važi za ovu sesiju i ne čuva se u datoteci.

### ISOPLANE

{{cmd:ISOPLANE}} bira ravan na kojoj radi izometrijsko crtanje: `Left`, `Top` ili `Right`. Enter prelazi na sledeću. Dok je izometrijsko crtanje uključeno, {{key:F5}} radi isto usred komande; dok je isključeno, {{key:F5}} se prepušta pregledaču.

## Ispitivanje

### CAL

Štampa vrednost računice, kao što bi se čitala bilo gde gde se unosi dužina.

- `Expression`: ukucajte je, na primer `12'6"+3/4"` ili `(24'-0")/3`, i pritisnite {{key:Enter}}. CadCraft štampa `= 12'-6 3/4"   (150.75 drawing units)`. Vidi [Aritmetika u unetoj vrednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Skraćenica: `DI`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Izmeri rastojanje}}.

- `Specify first point`, `Specify second point`. Štampa rastojanje, ugao, Delta X i Delta Y.

### AREA

Skraćenica: `AA`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Površina}}. Štampa površinu i obim.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Kliknite ili ukucajte uglove; na `Specify next point (Enter closes) [Undo]` pritisnite {{key:Enter}} da zatvorite obris. `U` vraća poslednji ugao.
  - {{key:Enter}} ili `O`, zatim `Select object`: krug (štampa obim), elipsa, polilinija (otvorena se za površinu zatvara pravom linijom, a njena dužina se štampa) ili šrafura (rupe se oduzimaju).
  - `A` (Add area) i `S` (Subtract area) čuvaju tekući zbir: upit počinje sa `(ADD mode)` ili `(SUBTRACT mode)`, svaka površina se dodaje ili oduzima, i `Total area = …` se štampa posle svake. U ovim režimima `O` bira objekte dok ne pritisnete {{key:Enter}}, a {{key:Enter}} na prvom upitu završava komandu.

### MEASUREGEOM

Skraćenica: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; posle svakog merenja ponovo pita, sa `eXit` kao podrazumevanom vrednošću.

`Quick` meri oko pokazivača dok ga pomerate: rastojanje do najbližeg objekta desno, gore, levo i dole (duž osa tekućeg UCS-a), crtano dok idete, i ugao gde se dva od tih suseda prave i sastaju. Klik upisuje četiri rastojanja, čistu širinu i visinu i uglove u istoriju; Enter vraća na opcije. Čita šta je na ekranu.

- `D`: dve tačke, kao {{cmd:DIST}}.
- `R`: `Select arc or circle`; štampa poluprečnik i prečnik.
- `A`: luk (njegov obuhvaćeni ugao), linija, zatim druga linija (ugao između njih, prema njihovim dalekim krajevima), ili {{key:Enter}} i tri tačke (teme, zatim dva kraja).
- `AR`: kao {{cmd:AREA}}, jedna površina.

### ID

Bez skraćenica. `Specify point`; štampa njen X i Y.

### LIST

Skraćenica: `LI`, `LS`. `Select objects`; štampa vrstu, sloj i glavne mere svakog objekta.

### MASSPROP

{{cmd:MASSPROP}} daje svojstva preseka regija i zatvorenih objekata koje izaberete, uzetih zajedno: površina, obim, granični okvir, težište, momenti inercije oko X i Y osa koje prolaze kroz početak, proizvod inercije, poluprečnici inercije, isti momenti oko težišta, i glavni momenti sa pravcima njihovih osa. Rupe u regiji se računaju kao rupe. Brojevi su u jedinicama crteža i tačni za obrise sastavljene od linija i lukova; elipse i splajnovi se mere kao kratki pravi segmenti, i to kaže. Posle izveštaja pita da li da ga upiše u tekstualnu datoteku. Objekti koji nisu zatvoreni se izostavljaju, a kaže koliko ih je.

## Prikaz, datoteka i ostalo

### ZOOM

Skraćenica: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Kliknite dva ugla za prozor. `E`, `A` ili Enter: ceo crtež.
- `P` (Previous, ili {{ui:Prethodni}} na alatnoj traci) vraća na prethodni prikaz, do 10 prikaza po kartici; niz koraka točkića ili jedno pomeranje računa se kao jedan prikaz.
- Broj kao `2`, `2x` ili `0.5x` (ili `S` pa broj) uvećava ili umanjuje za taj faktor oko središta ekrana.
- `C` pita `Specify center point` i `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT i PDF komande

Skraćenice: `PDFATT` za {{cmd:PDFATTACH}}, `PDFIM` za {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} postavlja PDF stranu ispod crteža (datoteka, strana, tačka umetanja, razmera, rotacija); {{cmd:PDFIMPORT}} pretvara linije, krive, ispune i tekst strane u objekte crteža na slojevima nazvanim po PDF-u, u pravoj veličini, u zadatoj razmeri, ili razmeravane po dve tačke i pravom rastojanju. {{cmd:PDFCLIP}} seče podlogu, {{cmd:PDFADJUST}} postavlja zamućenje, kontrast, monohromatsko ili je isključuje, {{cmd:PDFLAYERS}} uključuje i isključuje sopstvene slojeve PDF-a, a {{cmd:PDF}} ponovo daje CadCraft-u datoteke koje podloge crteža koriste. Vidi [PDF podloge](topic:pdf-underlay).

### AUTOCOMPLETE

Skraćenica: `AUTOC`. Automatsko dovršavanje crteža: kada nijedna komanda nije pokrenuta, sivi duh pokazuje šta uzorci vašeg crteža kažu da dolazi. {{cmd:AUTOCOMPLETE}} ga uključuje `On` ili isključuje `Off` (takođe Podešavanja › CadCraft) ili `Show` prikazuje šta bi sada predložio. **Tab** crta duh kao jedan korak opozivanja, **Esc** ga odbacuje dok se crtež ne promeni. Nalazi tri stvari u najnovijim objektima: sledeću kopiju nečega nacrtanog dva ili više puta na parnom koraku (stubovi, kolone, visina i gazište stepenica), sledeće korake stepeničaste polilinije, i nedostajuću stranu sobe ili lanca zidova. Usred {{cmd:LINE}} ili {{cmd:PLINE}} duh je **sledeća tačka**: sledeći korak stepenica (visina, gazište, visina…), četvrti ugao pravougaonika, tačka koja ga zatvara, ili još jedan jednak korak. Približite kursor i pritisnite **Tab**, kao da ste kliknuli tamo; nastavite ili pritisnite Enter. Računa se na ovom računaru pravilima, bez modela.

### AUTOSHEET

Skraćenica: `ASH`. Listovi koji se sami slažu. {{cmd:AUTOSHEET}} uzima delove crteža (vaše imenovane prikaze, ili odvojene delove modela, ili ceo model), bira veličinu papira (ili onu koju date), daje svakom delu standardnu razmeru (jednu za sve, ili najveću koju može da primi) i stavlja prikaze u redove na nove listove sa naslovnim blokom i natpisom (naziv i razmera) ispod svakog. Što ne stane na jedan list dobija sopstveni list. Jedan korak opozivanja. Računa se na ovom računaru pravilima, bez modela.

### PHOTOSKETCH

Skraćenica: `PSK`. Fotografija skice u crtež. Izaberite fotografiju (JPEG, PNG ili TIFF) ručne skice na listu papira. {{cmd:PHOTOSKETCH}} pronalazi četiri ugla lista, ispravlja perspektivu, uzima veličinu papira koju navedete (`Paper`, ili najbližu standardnu) i `Scale` skice (1 : n), zatim prati linije olovke u linije, lukove i krugove, sa slojem za svaku boju olovke (crna, crvena, plava, zelena). Ako ne može da nađe ivicu papira, uzima celu fotografiju kao list i to kaže. Slova se izostavljaju. Jedan korak opozivanja. Radi na ovom računaru uz klasičnu obradu slika, bez modela, bez slanja bilo čega. Vidi i komande skeniranih crteža.

### AUTODIM

Skraćenica: `ADIM`. Automatsko kotiranje po pravilima. {{cmd:AUTODIM}} kotira izabrane objekte (ili ceo crtež) iz njihovih ravnih i uspravnih ivica: lanac kota duž strana koje izaberete (`Sides`), jedna ukupna kota izvan njega, širina svakog otvora (razmak između kolinearnih linija zida), prečnik za svaku veličinu rupe, i sa `Grid` razmak između linija mreže. Kota koja već postoji se ne pravi ponovo. Jedan korak opozivanja. Računa se na ovom računaru pravilima, bez modela.

### GRIDMOVE

Skraćenica: `GM`. Pomeranje linije mreže nosi skup. {{cmd:GRIDMOVE}} pomera liniju mreže (liniju na sloju čiji naziv kaže grid ili axis) i ono što visi na njoj: zidovi sa krajem na liniji se rastežu da je prate, zidovi duž nje se pomeraju celi, stubovi (reference blokova i krugovi na liniji), njen mehur i oznaka se pomeraju, a kote čije tačke leže na njoj mere novi razmak. Zadajte dve tačke (računa se samo deo preko linije) ili `Distance`. Jedan korak opozivanja vraća sve. Računa se na ovom računaru pravilima.

### DETAILS

Skraćenica: `DET`. Detalji koji vas pronalaze. {{cmd:DETAILS}} čuva sopstvene detalje vaše firme: `Add` stavlja blok ovog crteža na spisak, `List` i `Remove` ga upravljaju, `Find` rangira ih za ono što je izabrano (ili za ono što ste poslednje nacrtali) po rečima na njegovim slojevima, nazivima blokova, šablonima šrafure i napomenama naspram naziva i napomena svakog detalja, tako da prozorski nadvratnik nalazi vaš okapni lim. Izaberite broj i tačku da ga postavite. Sa uključenim `Hint` (takođe Podešavanja › CadCraft), izbor nečega što detalj poklapa stavlja jedan red u statusnu traku. Spisak se čuva u ovom pregledaču, na ovom računaru, i taj spisak se pretražuje. `Share` ga stavlja i u vašu fasciklu Dokumenti (`.cadcraft/firm-details.json`, sa crtežom svakog bloka): `Pull` dodaje ono što vaš tim ima a vi nemate, `Push` dodaje ono što vi imate a oni nemaju, `Both` radi oba, i ništa se nikada ne uklanja ni sa jedne strane. Prvo otvorite fasciklu Dokumenti ({{cmd:DOCUMENTS}}); kada je ta fascikla fascikla Team Cloud Plan, ceo tim deli jedan spisak. Stavka detalja u panelu Biblioteka ima dugme **Dodaj u detalje moje firme** koje je stavlja na isti spisak. Računa se na ovom računaru rečima, bez modela.

### SKETCHFIX

Skraćenica: `SKF`. Skice olovkom postaju precizna geometrija. Pritisnite i prevucite jedan slobodan potez u jednom trenutku (olovka, miš ili prst), zatim Enter. Svaki potez se čita kao linija, krug, luk, pravougaonik ili polilinija: skoro vodoravne i uspravne linije postaju tačno vodoravne i uspravne, zatvoren okrugao potez postaje krug, zatvoren potez sa četiri prava ugla pravougaonik, a krajevi poteza se povlače zajedno i na krajeve koji su već u crtežu. Jedan korak opozivanja. Računa se na ovom računaru pravilima, bez modela.

### SCANATTACH i komande skeniranog crteža

Skraćenice: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nema skraćenicu. Rade nad slikom, po jedan korak opozivanja. {{cmd:SCANATTACH}} umeće PNG, JPEG, TIFF (jednu ili sve strane) ili PDF stranu koja je slika. {{cmd:SCANSCALE}} razmerava list po dve izabrane tačke i pravom rastojanju. {{cmd:SCANALIGN}} pomera i okreće ga na dve tačke (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} prikazuje ugao dugih linija lista i okreće list kada `Accept` ili zadate `Value`. {{cmd:SCANCLEAN}} ga pretvara u crno-belo (`Threshold` Auto/Adaptive/Level, `Specks`) i `Run`. {{cmd:SCANCROP}} zadržava prozor. {{cmd:SCANERASE}} briše `Rectangle`, `Polygon` ili `Lasso`. {{cmd:SCANTRACE}} prati linije i lukove na novi sloj (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) i javlja šta je našao i šta je ostavio kao raster. {{cmd:SCANINFO}} navodi originalnu datoteku i korake. {{cmd:RASTERSNAP}} uključuje ili isključuje hvatanje za linije skeniranih listova (On ili Off). Vidi temu Skenirani crteži i praćenje.

### REGEN i REGENALL

Skraćenice: `RE` za {{cmd:REGEN}}, `REA` za {{cmd:REGENALL}}. Ponovo gradi ono što je nacrtano na ekranu iz crteža: {{cmd:REGEN}} karticu koju gledate (na listu, i model koji njegovi prozori pogleda prikazuju), {{cmd:REGENALL}} svaku karticu, svako okno podeljenog ekrana i svaki otvoren crtež. Koristite ih kada slika izgleda zastarelo posle skriptovane ili vrlo velike promene, ili kada ju je asistent izmenio; sam crtež se ne dira, pa nema šta da se opozove.

### NAMEDVIEW

Skraćenica: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, zatim naziv prikaza. `S` čuva prikaz na ekranu, `W` prozor koji birate, `R` prikazuje sačuvani prikaz, `D` briše jedan, `?` navodi prikaze ove kartice. Čuvanje pod postojećim nazivom ga zamenjuje; svaka promena je jedan korak opozivanja. Prikazi pripadaju kartici na kojoj su sačuvani. DWG i DXF datoteke ih čuvaju (tabela VIEW); prikazi lista se vraćaju na prvi list, jer datoteka ne kaže kome pripadaju.

### UNDO i REDO

Skraćenica: `U` za {{cmd:UNDO}}; {{cmd:REDO}} nema skraćenicu. Takođe {{key:Mod+Z}} i {{key:Mod+Y}}.

### LAYER

Skraćenica: `LA`. Skače na panel {{ui:Slojevi}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` ili naziv (`?` ih navodi: Continuous, sopstveni tipovi crteža, i DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE sa njihovim veličinama `2` (polovina) i `X2` (dvostruko)). {{cmd:LWEIGHT}} (`LW`): debljina linije za nove objekte u mm, ili `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): razmera tipa linije crteža (sa opozivom). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — isto što i dugme {{ui:LWT}} u statusnoj traci. Vidi [Debljine linija i tipovi linija](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, zatim novi naziv; objekti ili reference prate. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` dok ne pritisnete {{key:Enter}}, zatim `Select object on target layer or [Name]` i `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, zatim `Y`: sloj i svaki objekat na njemu odlaze (ne sloj 0, DEFPOINTS ili tekući sloj). Jedan korak opozivanja za svaku. Vidi [Organizacija crteža slojevima](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Slojevi biranjem objekata; takođe u meniju {{ui:Alatke}} panela {{ui:Slojevi}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, zatim {{key:Enter}}: svaki drugi sloj se isključuje. {{cmd:LAYUNISO}} ih ponovo uključuje. {{cmd:LAYOFF}} i {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (ili zamrznut), iznova; `U` vraća poslednji, {{key:Enter}} završava. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} uključuje svaki sloj, {{cmd:LAYTHW}} odmrzava svaki sloj. Svaka komanda je jedan korak opozivanja. Vidi [Organizacija crteža slojevima](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} pravi prazan crtež, a {{cmd:OPEN}} otvara DWG ili DXF, svaki na sopstvenoj kartici iznad crteža (neizmenjen novi crtež se koristi umesto nove kartice). Zatvaranje kartice sa nesačuvanim izmenama prvo pita. Vidi [Podelite ekran](topic:split-screen).

{{cmd:SAVE}} (skraćenica `QSAVE`, takođe {{key:Mod+S}}) preuzima kopiju u formatu crteža: DWG ako je otvoren iz DWG-a, DXF ako iz DXF-a. Novi crtež koristi format poslednji izabran u Sačuvaj kao u ovom pregledaču, inače DWG.

{{cmd:SAVEAS}} (takođe {{key:Mod+Shift+S}}) otvara dijalog {{ui:Sačuvaj kopiju kao}}: izaberite {{ui:DWG}} (i njegovu {{ui:Verziju}}), {{ui:DXF R12}} ili {{ui:DXF 2000}}, zatim {{ui:Sačuvaj}}. Izbor ostaje za ovaj crtež i za nove crteže u ovom pregledaču.

{{cmd:DXFOUT}} uvek preuzima kopiju DXF R12, bez menjanja formata koji koristi {{cmd:SAVE}}.

Vidi [Datoteke: šta se otvara, šta se čuva](topic:files#saving).

### TOUR

Skraćenica: `TUTORIAL`. Ponovo pokreće šestorazredni obilazak prvog crteža. Vidi [Početak rada](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Skraćenica: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Vidi [Podešavanja](topic:settings#toolbar-position).

### COMMANDLINE

Skraćenica: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: zakači ili učini lebdećom komandnu liniju, pravi je jednim redom, pita koliko redova istorije da prikaže (0 do 12), ili otvara istoriju. Vidi [Podešavanja](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: trake iznad crteža kakve su bile, ili kompaktne. Vidi [Podešavanja](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: korak na koji se poravnavaju linije {{ui:Polarno}} praćenja (više od 0, do 180). Zadržava se u ovom pregledaču.

### UNITS

Skraćenica: `UN`. Kako se dužine zapisuju i unose.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Arhitektonski i Razlomak: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Ostali: `Enter number of decimal places (0 to 8)`.

Nove kote ga prate. Jedan korak opozivanja. Isto kao {{ui:Format dužine}} i {{ui:Preciznost}} u {{ui:Trenutna podešavanja}}; vidi [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Skraćenica: `GDS`. Pregled IC rasporeda (GDSII datoteka toka): laboratorijski test, samo za pregled i merenje.

- Birač datoteke uzima datoteku `.gds`; sa više vršnih ćelija, `Enter the top cell to draw`.
- Svaki sloj i tip podataka postaje sloj crteža (`GDS 1`, `GDS 2/5`), reference i nizovi se postavljaju ravno, u korisničkoj jedinici datoteke (obično mikrometri). Jedan korak opozivanja. Ništa se ne simulira ni proverava, i datoteka se ne upisuje nazad.

### DIAGRAM

Skraćenica: `TEXTDIAGRAM`, `T2D`. Dijagram iz teksta.

- Okvir uzima tekst (ili jedan red sa `;` između iskaza u komandnoj liniji): Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili spisak od-do.
- `Specify the top left corner of the diagram`, zatim `Specify the text height`.

Blokovi i veze su obični objekti na sloju `Diagram`, izabrani kada se završi. Jedan korak opozivanja. Vidi [Crtanje dijagrama iz teksta](topic:text-to-diagram).

### OLELIST

Skraćenica: `OLES`. OLE objekti koje DWG nosi a CadCraft ne može sam da postavi.

- Navodi svaki: broj, vrstu, veličinu, da li je sačuvao sliku.
- `Enter an option [Place/eXit] <eXit>`: Place pita broj, donji levi ugao i širinu, i crta okvir sa slikom. Jedan korak opozivanja; sačuvani objekat se ne menja. Vidi [Slike](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Skraćenica: `SHX`. Sopstveni SHX fontovi.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} čita svaki `.shx` u fascikli (CadCraft Studio; ponovo pri svakom pokretanju), {{ui:Files}} uzima izabrane datoteke (pregledač), {{ui:Reverse}} postavlja slova jednog fonta od poslednjeg ka prvom. Stilovi teksta koji navode učitan font crtaju se njime. Vidi [Crtanje teksta vašim SHX fontovima](topic:shx-fonts).

### LIMITS

Kolika crtež treba da bude.

- `Specify lower left corner or [ON/OFF] <current>`: tačka, `ON` ili `OFF`.
- `Specify upper right corner <current>`.

Mreža ispunjava granice, {{cmd:ZOOM}} All ih prikazuje, a sa uključenim granicama tačka van njih se odbija (`**Outside limits`). Jedan korak opozivanja; čuva se u DWG i DXF. Vidi [Postavljanje granica crteža](topic:drawing-limits).

### AUNITS

Skraćenica: `ANGUNITS`. Kako se uglovi prikazuju i unose.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ili za ostala dva `Enter precision` (0 stepeni, 2 minuta, 4 sekunde, 5 do 8 decimala sekunde).

Jedan korak opozivanja; čuva se u DWG i DXF. Isto kao {{ui:Format ugla}} u {{ui:Trenutna podešavanja}}. Vidi [Unos i prikaz pravaca i uglova](topic:bearings-and-angles).

### APPLOAD

Skraćenica: `AP`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Učitaj aplikaciju…}}. Dijalog {{ui:Učitaj aplikacije}}: učitava `.lsp` rutine i `.dcl` datoteke dijaloga, uklanja ih, ponovo ih učitava iz istorije i Startni paket. Komande `(defun c:NAME …)` rutine tada rade kao svaka druga. Vidi [Učitavanje aplikacija](topic:load-applications) i [Pokretanje LISP rutina](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Izmeni skraćenice…}}) otvara vašu datoteku skraćenica (redovi `ALIAS, *COMMAND`); {{ui:Sačuvaj}} je primenjuje. {{cmd:REINIT}} je ponovo primenjuje. Vidi [Izmeni skraćenice komandi](topic:command-aliases).

### OPTIONKEYS

Skraćenica: `OPTKEYS`; ili {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Slova opcija}} › {{ui:Uredi…}}. Otvara vašu datoteku slova opcija (redovi `COMMAND.OPTION, LETTERS`, kao `ARRAY.PO, P`); {{ui:Sačuvaj}} je primenjuje, a {{cmd:REINIT}} je ponovo primenjuje. Vidi [Dajte opcijama komandi sopstvena slova](topic:option-letters).

### LISPEDIT

Skraćenica: `VLIDE`; ili {{ui:Pogled}} › {{ui:Više}} › {{ui:LISP uređivač}}. Otvara LISP uređivač, prozor koji ostaje otvoren pored crteža.

- Tekst: brojevi redova, par zagrade na kursoru obeležen (crveno kada ga nema), {{key:Enter}} uvlači novi red ispod otvorene zagrade, {{key:Tab}} kuca dva razmaka, {{key:Esc}} napušta tekst.
- {{ui:Učitaj u crtež}} ({{key:Ctrl+Shift+Enter}}): čita svaki oblik, kao što {{cmd:APPLOAD}} radi sa datotekom, i pravi njene `c:` komande. Datoteka se pojavljuje na spisku {{cmd:APPLOAD}}.
- {{ui:Pokreni izbor}} ({{key:Ctrl+Enter}}): izvršava izabrane oblike, ili oblik u kome je kursor.
- {{ui:Zaustavi}}: prekida rutinu koja radi.
- {{ui:Konzola}}: šta je rutina štampala, i svaka greška sa njenim redom; kliknite grešku da odete tamo. Tekst se izvršava jedan oblik najvišeg nivoa u isto vreme, pa je red onaj od oblika, ili unutar njega red koji poziva funkciju koju greška navodi.
- {{ui:Novo}}, {{ui:Otvori}}, {{ui:Sačuvaj}} ({{key:Ctrl+S}}): datoteka `.lsp`. Tekst se takođe čuva u ovom pregledaču, pa zatvaranje prozora ne gubi ga.
- Pored teksta: funkcije koje rutina definiše, one koje poziva a ovaj LISP još nema, one koje poziva a koje nisu ni definisane u njoj ni ugrađene, i potpuni spiskovi onoga što je ugrađeno a što nije.

Tekst sa zagradom koja nikada ne bude zatvorena, ili niskom koja se nikada ne završi, se ne izvršava: naziva se red. Nema korak-po-korak otklanjača grešaka, prekidnih tačaka ni prozora za praćenje. Vidi [Pokretanje LISP rutina](topic:run-lisp).

### HELP

Skraćenica: `?`. Štampa svaku komandu, njene skraćenice i jedan red opisa u istoriji komandne linije. Ne otvara ovo uputstvo: za to pritisnite {{key:F1}} ili kliknite {{ui:Pomoć}}.

## Upit za izbor objekata

Na svakom upitu `Select objects`: kliknite objekte, prevucite prozore (sleva udesno) i ukrštanja (zdesna ulevo) dvama klikovima, ili pritisnite i prevucite omču ({{key:Space}} dok prevlačite: prozor, ukrštanje, ograda), {{key:Shift}}+klik za uklanjanje, i pritisnite {{key:Enter}} za kraj. Možete ukucati i `ALL` (sve), `L` (poslednji objekat), `P` (Prethodni: ono što je koristila poslednja komanda), `F` (Fence: objekti koje prelazi linija tačaka; `U` vraća tačku), `W` (Window), `C` (Crossing), `R` (režim uklanjanja: izbori izbacuju objekte; upit kaže `Remove objects`) i `A` (Add again). `?` ih navodi. Nisu prikazani u upitu. {{key:Tab}} preko preklapajućih objekata ističe sledeći; kliknite da ga izaberete. Vidi [Izbor objekata](topic:select-objects).

### ACCESS

Skraćenica: `AX`. Crtanje bez vida. {{cmd:ACCESS}} uključuje ili isključuje pristup (`On`, `Off`) i menja zvuke hvatanja (`Sound`) i izgovorene komande (`Voice`); najpre kaže stanje. Kada je pristup uključen, svaka komanda i rezultat se izgovaraju preko čitača ekrana, a površina crteža ima tastaturni kursor. Tema pomoći „Crtanje bez vida“ ima tastere.

### DESCRIBE

Skraćenica: `DESC`. Kaže šta crtež sadrži: koliko objekata, koje vrste, koliko su veliki, koliko ima slojeva, šta je izabrano. Samo čita; ništa ne menja.

### WHEREAMI

Skraćenica: `WHERE`. Kaže gde je kursor, u jedinicama crteža.

### NEARBY

Kaže šta leži blizu kursora, najbliže prvo, svaki sa svojim rastojanjem i stranom na kojoj je.

### SAYSEL

Kaže šta je izabrano, jedna rečenica po objektu (dužina linije, krajevi i ugao; poluprečnik kruga i centar; tekst kako je napisan).

### VOICE

Uključuje ili isključuje izgovorene komande. Prepoznaju se na ovom računaru; tamo gde pregledač to ne može, glas ostaje isključen dok ne izaberete onlajn uslugu pregledača u Podešavanjima.

### TOUCHCROSSHAIR

Skraćenica: `TCX`. Ukršteni kursor sa pomakom za crtanje prstom, da vrh prsta ne prekriva tačku koju birate. Dok je uključeno, jedan prst na crtežu ne bira: pomera ukršteni kursor koji stoji iznad prsta i sa jedne strane. Hvatanja objekata i praćenje prate ukršteni kursor. Podizanje prsta ništa ne bira i ostavlja ukršteni kursor gde je. Da birate, pritisnite dugme {{ui:Klik}} u uglu crteža, ili dodirnite bilo gde na crtežu drugim prstom. Držite {{ui:Klik}} dok pomerate drugi prst da prevlačite (prozor izbora, omču, hvatač). Prst pritisnut i zadržan mirno, ili dugme {{ui:Enter}}, je Enter. Dva prsta pomeraju i zumiraju kao ranije. Blizu donje ivice i daleke bočne ivice, ukršteni kursor se približava prstu, pa se svaki deo crteža može dohvatiti. Olovka i miš uvek biraju direktno.

{{cmd:TOUCHCROSSHAIR}} kaže stanje i pita `ON`, `OFF`, `Auto` (uključeno samo tamo gde je prst jedini pokazivač, pa je isključeno na računaru sa mišem), `Distance` (koliko je ukršteni kursor udaljen od prsta, od 24 do 240 piksela) ili `Side` (`Left`: gore i levo, za desnu ruku; `Right` za levu ruku; dugmad prelaze na drugi ugao). Isti izbori su u Podešavanja › CadCraft, a na uređaju sa ekranom osetljivim na dodir statusna traka ima prekidač {{ui:Pomak ukrštenog kursora}}. Izbori se čuvaju u ovom pregledaču.

### WHOHAS

Kaže ko ima crtež otvoren. U CadCraft Studio-u na računaru, otvaranje DWG ili DXF piše malu datoteku zaključavanja pored njega (`Plan.dwg.cclock`: ko, od kada, koja verzija), osvežava je svakog minuta dok je crtež otvoren, i uklanja je kada se crtež zatvori. Otvaranje crteža koji neko drugi ima otvoren kaže ko i od kada, i nudi {{ui:Open read-only}} (Save tada traži novi naziv), {{ui:Open anyway}} (druga osoba se obaveštava pri sledećem osvežavanju) ili {{ui:Cancel}}. Čuvanje preko datoteke koju neko drugi ima otvorenu prvo pita. Zaključavanje koje nije osveženo pet minuta smatra se zastarelim: druga kopija se zatvorila bez čuvanja ili je računar u režimu spavanja.

{{cmd:WHOHAS}} pita `Current` (otvoreni crtež), `File` (izaberite jedan), `FOlder` (izaberite fasciklu: navodi svaki crtež u njoj koji je negde otvoren), `Path` (ukucajte pun put) ili `Name` (ime koje drugi vide; vaše ime na nalogu kada ste prijavljeni). Studio može da pristupi samo fasciklama koje ste izabrali: za crtež otvoren iz fascikle koja nikada nije izabrana kaže jednom da ne može da zabeleži crtež kao otvoren; `FOlder` bira fasciklu, i zaključavanja tamo rade od tada. Zaključavanje je beleška za ljude, a ne prepreka: drugi program i dalje može da upiše datoteku. U pregledaču nema fascikli za pregled, pa komanda to kaže.

### OVERKILL

Briše duple objekte i sređuje preklapajuće linije i lukove, za crteže koji stignu puni udvostručenih linija. `Select objects to clean up`, {{key:Enter}}, zatim {{key:Enter}} ponovo da očistite sa prikazanim postavkama, ili prvo promenite jednu:

- `Tolerance`: koliko blizu moraju dve koordinate biti da se računaju kao iste (0.000001 na početku; 0 znači potpuno isto).
- `Ignore`: svojstva koja mogu da se razlikuju između dva inače ista objekta. Ukucajte naziv da ga prebacite: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ili `None` / `All`. {{key:Enter}} kada završite.
- `Overlap`: uključeno ili isključeno. Kada je uključeno, linije na jednoj pravoj koje se preklapaju postaju jedna linija (linija koja leži unutar druge jednostavno se briše), a lukovi na jednom krugu koji se preklapaju postaju jedan luk; lukovi koji zatvaraju pun obrt postaju krug, a luk koji leži na krugu se briše.
- `Ends`: uključeno ili isključeno. Kada je uključeno, linije na jednoj pravoj i lukovi na jednom krugu koji se samo dodiruju kraj uz kraj postaju jedan deo.

Svaka vrsta objekta se proverava na duplikate: dva objekta su duplikati kada je njihova geometrija ista u granicama tolerancije i kada se njihov sloj, boja, tip linije, razmera tipa linije, debljina linije, debljina, prozirnost i visina poklapaju (umanjeno za one koje ignorišete). Linije i otvorene polilinije se poklapaju i kada su nacrtane u suprotnom smeru. Prvi objekat u redosledu crtanja ostaje i zadržava sopstvena svojstva. Komanda javlja koliko je objekata proverila i obrisala: duplikate, preklapajuće delove spojene, delove spojene kraj-do-kraja. Jedan {{cmd:UNDO}} vraća sve. Postavke važe dok ne zatvorite prozor crteža.

Ostavlja netaknute: objekte na zaključanim slojevima i skrivene objekte. Ne spaja linije sa visinom (Z) (tačni duplikati tih ipak odlaze), i ne dira segmente unutar polilinije (ne proređuju se), liniju koja leži na segmentu polilinije, i zatvorenu polilinju nacrtanu u suprotnom smeru.

### DRAWORDER

Menja koji objekti se crtaju napred. `Select objects to re-order`, {{key:Enter}}, zatim `Above objects`, `Under objects`, `Front` ili `Back` ({{key:Enter}} = `Back`). `Above objects` i `Under objects` pitaju referentne objekte: izbor ide odmah ispred najprednijeg od njih, ili odmah iza najzadnijeg. Izabrani objekti zadržavaju svoj međusobni redosled. Jedan korak opozivanja. Redosled se čuva sa crtežom u DWG i DXF, gde je to redosled kojim se objekti upisuju.

Na ekranu se svaki objekat crta po redosledu crteža, kao što drugi programi koji otvore datoteku crtaju: čvrsta šrafura, široka polilinija ili maska teksta prekriva linije i tekst iza sebe, a ono što je ispred nje ih prekriva. Gde linija seče tekst, vide se oba. Slike i priložene PDF strane ostaju ispod linija. U vrlo velikom crtežu gde se ispune i linije preklapaju i smenjuju više od 256 puta, prvih 256 zadržavaju redosled, a ostale crtaju svoje ispune ispod linija, pa ponovno crtanje ostaje brzo.

### TEXTTOFRONT

Dovodi tekst, kote i vodilice ispred svega ostalog u otvorenom prostoru: `Text`, `Dimensions`, `Leaders` ili `All` ({{key:Enter}} = `All`). Jedan korak opozivanja. Kaže to kada toga nema, ili kada je već na prednjoj strani.

### HATCHTOBACK

Šalje svaku šrafuru otvorenog prostora iza svega ostalog, tako da ispune prestaju da prekrivaju linije i tekst u sačuvanoj datoteci. Bez pitanja. Jedan korak opozivanja.

### ISOLATEOBJECTS

Skraćenica: `ISOLATE`. Prikazuje samo izabrane objekte: sve drugo u otvorenom prostoru izlazi iz vida dok ne pokrenete {{cmd:UNISOLATEOBJECTS}}. Za razliku od {{cmd:LAYISO}}, radi nad objektima koje birate, bez obzira na njihove slojeve, i ne menja nijedan sloj. Skriveni objekti se ne crtaju, ne biraju, ne hvataju, ne zumiraju i ne štampaju, a komande koje uzimaju `ALL` ih preskaču. Ono što crtate dok su objekti izolovani prikazuje se uobičajeno.

Ovo važi samo za sesiju: ništa o tome se ne čuva sa crtežom, nije korak opozivanja, i ponovno otvaranje crteža prikazuje sve. Dok su objekti skriveni, statusna traka prikazuje dugme sa njihovim brojem; kliknite ga da ih ponovo prikažete.

### HIDEOBJECTS

Sakriva izabrane objekte dok ne pokrenete {{cmd:UNISOLATEOBJECTS}}. Ista pravila kao kod {{cmd:ISOLATEOBJECTS}}: samo za sesiju, ne čuva se, nije korak opozivanja.

### UNISOLATEOBJECTS

Skraćenica: `UNISOLATE`, `UNHIDE`. Ponovo prikazuje svaki objekat sakriven sa {{cmd:ISOLATEOBJECTS}} ili {{cmd:HIDEOBJECTS}}, i kaže koliko se vratilo.

### LAYLOCKFADE

Postavlja kako objekti na zaključanim slojevima izgledaju i da li klik do njih dopire. Kaže tekuće stanje, zatim prihvata:

- broj od 0 do 90: iznos zamućenja u procentima (50 na početku). 0 isključuje zamućenje.
- `ON` ili `OFF`: zamućenje uključeno ili isključeno, uz zadržavanje iznosa.
- `Pick`, zatim `Yes` ili `No`: da li klik može da izabere objekte na zaključanim slojevima dok nijedna komanda nije pokrenuta? `No` (podrazumevano): ne mogu se birati uopšte. `Yes`: klik ili prozor ih bira da bi {{ui:Svojstva}} mogla da ih prikažu; i dalje se ne mogu menjati, a `Select objects` komande nikada ih ne uzima.

Hvatanja objekata pronalaze objekte na zaključanim slojevima u oba slučaja. Štampe se nikada ne zamućuju. Obe postavke su vaše, a ne crtežove, i nalaze se i u {{ui:Podešavanja}} pod {{ui:Zaključani slojevi}}.

### BURST

Razbija reference blokova i zadržava ono što kažu njihovi atributi. `Select block references to burst`, {{key:Enter}}: svaka referenca se zamenjuje objektima bloka, a vrednost svakog vidljivog atributa postaje običan tekst na sopstvenom sloju tog atributa (atribut na sloju 0 pada na sloj reference, kao i ostali objekti bloka na sloju 0). Nevidljivi atributi se odbacuju. Blok unutar bloka ostaje referenca bloka. Jedan korak opozivanja; javlja koliko je referenci razbijeno i koliko je vrednosti atributa pretvoreno u tekst.

Odbija povezani crtež po nazivu (prvo ga vežite, ili kopirajte iz njega sa {{cmd:NCOPY}}), i ostavlja netaknute druge izabrane objekte. Za reference blokova {{cmd:EXPLODE}} daje iste objekte; {{cmd:BURST}} uzima samo reference blokova i broji tekst atributa.

### TXT2MTXT

Skraćenica: `T2M`. Spaja tekstove u jednom redu u jedan pasusni tekst. `Select single-line text to join`, {{key:Enter}}, zatim `Paragraph` (redovi se spajaju i prelamaju po širini najšireg reda) ili `Lines` (svaki tekst ostaje sopstveni red); {{key:Enter}} uzima onaj korišćen poslednji. Redovi se poređaju odozgo nadole, zatim sleva udesno, duž pravca gornjeg teksta. Pasus visi od gornjeg levog ugla gornjeg teksta i preuzima njegovu visinu, rotaciju, stil, sloj i boju. Jedan korak opozivanja.

Tekst koji je već pasusni, prazan tekst i drugi objekti u izboru se ostavljaju netaknuti, a komanda kaže koliko ih je.

### NCOPY

Kopira objekte iz reference bloka ili povezanog crteža u crtež, bez razbijanja ičega. `Pick an object inside a block reference or a linked drawing`: objekat najbliži kliku se kopira tamo gde se vidi, koliko god blokova duboko da je; birajte još, zatim {{key:Enter}}. Sledeće `Base point to move the copies`: {{key:Enter}} ih ostavlja na mestu, ili zadajte osnovnu tačku i drugu tačku. Cela komanda je jedan korak opozivanja.

Kopija uzima sloj na kome se vidi: objekat na sloju 0 unutar bloka pada na sloj reference u kojoj je sedeo, a ByBlock boja postaje boja te reference. Iz povezanog crteža, sloj `Plan|Walls` postaje `Plan$0$Walls` (naziv koji veza daje), napravljen sa bojom, tipom linije i debljinom linije povezanog sloja. Vrednost atributa se kopira kao tekst. Reference blokova na zaključanim slojevima se ne mogu birati.

### FLATTEN

Postavlja visinu (Z) i debljinu izabranih objekata na 0. `Select objects to flatten`, {{key:Enter}}. Takođe spljoštava objekte unutar definicija blokova koje izbor koristi (i blokove unutar njih), pa se svaka referenca tih blokova menja; povezani crteži se ostavljaju kakvi jesu. Jedan korak opozivanja; javlja koliko je objekata promenjeno, i kaže to kada nijedan nije imao visinu ili debljinu.

Ono što CadCraft zadržava od treće dimenzije u 2D crtežu je: visina na krugovima, lukovima, elipsama, tačkama, tekstu, referencama blokova, šrafurama, vodilicama i polilinijama (njihova kota), visina na svakom kraju linije, i debljina na linijama, krugovima, lukovima, polilinijama, tačkama i tekstu, onako kako ih je datoteka imala. {{cmd:FLATTEN}} briše upravo te. Ne dira 3D model na kartici 3D, 3D površine ili tela, a objekat nacrtan u nagnutoj ravni već je doveden u ravan crteža kada je datoteka otvorena.

### BREAKLINE

Crta liniju sa simbolom preloma, za prikaz koji je kratko presečen. Kaže tekuću veličinu i produženje, zatim `First point of the break line` (ili `Size` / `Extension` da ih prvo promenite), `Second point`, i `Where the break symbol sits`: kliknite duž linije, ili {{key:Enter}} za sredinu. Rezultat je jedna polilinija na tekućem sloju: linija, koja prelazi svaku tačku za produženje, sa crtom u obliku slova Z visokom kao veličina i upola kraćom.

`Size` i `Extension` se pamte kao vaša podešavanja (veličina počinje kao dvostruka visina teksta kote pomnožena opštom razmerom kote; produženje kao polovina veličine). {{key:Enter}} ponavlja komandu.

### AUDIT

Proverava otvoreni crtež za oštećenja i popravlja ih. {{cmd:AUDIT}} gleda svaki objekat u modelu, na listovima i unutar blokova, i tabelu slojeva, i navodi šta nađe po vrsti:

- brojevi koji nisu konačni ili su apsurdno veliki;
- objekti bez veličine: linija bez dužine, krug bez poluprečnika, polilinija sa jednim temenom, tekst bez slova ili visine, referenca bloka nulte razmere;
- objekti na sloju koji crtež nema; reference na blok koji nije tu; nazivi stilova teksta i kota i nazivi tipova linija koji nisu u crtežu;
- blokovi koji sadrže sami sebe, direktno ili kroz druge blokove;
- objekti koji dele identifikator, ključ ili datotečnu oznaku;
- kote bez tačaka od kojih se mere, i šrafure čija granica nije zatvoren obris.

Zatim pita `Fix them? [Yes/No]`. `No` ne menja ništa. `Yes` popravlja sve u jednom koraku opozivanja: uklanja se ono što ne može da se nacrta (loši brojevi, bez veličine, nedostajući blok, pokvarena kota, šrafura bez upotrebljive granice, referenca koja zatvara krug blokova); nedostajući sloj se pravi; nepoznati nazivi stilova i tipova linija vraćaju se na podrazumevane; zajednički ključ se zamenjuje. Štampa koliko je objekata uklonjeno i koliko popravljeno. Isti nalazi se pojavljuju u panelu Problemi, svaki sa sopstvenim {{ui:Popravi}}.

Ništa ne odbija, ali proverava samo ono što CadCraft sam crta: podaci sačuvani za druge programe (3D tela, OLE objekti) se ne otvaraju.

### RECOVER

Otvara oštećen DXF ili DWG. {{cmd:RECOVER}} pita za datoteku, čita ono što može da se pročita umesto da odbije datoteku, navodi šta je preskočeno ili pretpostavljeno, zatim proverava i popravlja crtež kao što to {{cmd:AUDIT}} radi sa `Yes`.

- DXF: linije koje nisu deo para koda i vrednosti se preskaču dok parovi ponovo ne budu poravnati; odeljak bez kraja se zatvara; datoteka koja je odsečena čita se do mesta odsecanja; binarni DXF koji je odsečen čita se do poslednje cele vrednosti. Kada odeljak, blok ili objekat i dalje ne može da se pročita, izostavlja se i imenuje se, a čitanje ide dalje pored njega.
- DWG: objekti koji ne prolaze svoje provere ili se ne mogu dekodirati se izostavljaju, a izgubljena lista objekata se ponovo gradi obilaskom podataka objekata.

Datoteka na disku se ne menja. Oporavljeni crtež se otvara nesačuvan: sačuvajte ga pod novim nazivom. Datoteka iz koje ništa uopšte ne može da se pročita se odbija, uz razlog.

### LEGACYTEXT

Pretvara tekst ukucan starim 8-bitnim vijetnamskim fontovima u Unicode. Kratki nazivi `TEXTTOUNICODE` i `VNTEXT`.

Stariji vijetnamski crteži čuvaju tekst kao zapadne znakove koje tek font pretvara u vijetnamski: TCVN3 tekst u ABC fontovima (`.VnTime`, `.VnArial`, i fontovi velikih slova čiji nazivi se završavaju na `H`), a VNI tekst u VNI fontovima (`VNI-Times`). CadCraft prikazuje takav tekst kako se čita čim se crtež otvori, po fontu njegovog stila teksta, objekta, ili segmenta unutar pasusnog teksta; datoteka i dalje sadrži stare znake.

{{cmd:LEGACYTEXT}} kaže koliko je tekstova nađeno u svakom kodiranju i pita `Convert … to Unicode?`. `Yes` prepisuje svaki (model, listove, blokove, vrednosti i definicije atributa), i daje stilovima teksta Unicode font (Times New Roman, Arial ili Courier New, prema vrsti starog fonta), u jednom koraku opozivanja. Oblikovanje unutar pasusnog teksta se zadržava.

Kada nijedan tekst ne koristi poznat font (stil koji je izgubio naziv fonta), pita `Read selected texts as [Tcvn3/Vni/None]`: izaberite kodiranje i izaberite tekstove. Tekst koji je već Unicode ostaje netaknut. Nadjačavanja teksta kote i tekst višestruke vodilice se ne pretvaraju.
