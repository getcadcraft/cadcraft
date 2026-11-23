---
title: Käsuviide
summary: Iga käsk CadCrafti joonistusrakenduses koos aliastega, küsimustega, valikute ja vaikeväärtustega.
keywords: käsud, aliased, käsuloend, pindala, ümbermõõt, measuregeom, joon, pline, ring, kaar, lõika, nihe, dimlinear, plokk, lisa, paigutus, plot, zoom, abi, copyclip, cutclip, pasteclip, pasteorig, copybase, dubleeri, selectall
from: 979ffe3b
---

Sisesta käsu nimi või alias ja vajuta {{key:Enter}} või {{key:Space}}. Suur- ja väiketähtedel pole vahet ning alguses olev `_`, `-`, `.` või `'` ignoreeritakse. Sisesta `HELP` (või `?`), et printida käsurea ajaloosse lühike loend kõigist käskudest; vajuta {{key:F1}}, et avada see abi.

Kuidas loeda küsimusi: valikud on nurksulgudes ja valid ühe, sisestades selle suured tähed (`D` tähendab Diameter). Vaikimisi väärtus on nurksulgudes; kinnitamiseks vajuta {{key:Enter}}. Kui küsitakse punkti, võid klõpsata või sisestada ükskõik millises vormingus, mis on loetletud jaotises [Koordinaatide ja kauguste sisestamine](topic:coordinate-entry). Kui küsitakse kaugust, võid sisestada arvu või klõpsata kaks punkti.

Kui küsitakse punkti või objekti ja vaikeväärtust pole, siis {{key:Enter}} vajutamine lõpetab käsu. {{key:Esc}} tühistab selle. Mida käsk tegi, on üks tagasivõtmise samm.

## Joonista

### LINE

Aliased: `L`. Sirged lõigud, igaüks oma objektina.

- `Specify first point` (Enter: alusta viimasest antud punktist)
- `Specify next point [Undo]`, korduv. Pärast kahte lõiku: `[Undo/Close]`.
- `U` võtab viimase lõigu tagasi, `C` sulgeb esimese punktini ja lõpetab. Enter lõpetab.

### PLINE

Aliased: `PL`. Üks polyjoon sirgetest ja kaarelõikudest.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close, kui on kaks lõiku)
- `A` lülitub kaartele: `Specify endpoint of arc [Line/CLose/Undo]`. Iga kaar jätkub puutujana eelmisele lõigule. `L` läheb tagasi joontele, `CL` sulgeb kaarega.
- Enter lõpetab; polyjoon jääb avatuks.

### CIRCLE

Aliased: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` küsib `Specify diameter of circle`.
- `2P`: läbimõõdu kaks otspunkti. `3P`: kolm punkti ringil.
- `T` (ka käsk `TTR`, ja {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, siis teine, siis raadius (Enter: viimane). Ring puudutab mõlemat objekti (jooned, kaared, ringid, polyjoone lõigud, ka plokkide sees); nendest ringidest, mis puudutavad, on lähim sinu valikutele. „Circle does not exist”, kui ükski ei sobi.
- `TTT` (või {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): kolm objekti; ring, mis puudutab kõiki kolme, lähim sinu valikutele (kolm joont annavad sisemise või välimise ringi, sõltuvalt sellest, kuhu klõpsad).

### ARC

Aliased: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: kaar läbi kolme punkti.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Kaar kulgeb vastupäeva algusest lõpuni.

### RECTANG

Aliased: `REC`, `RECTANGLE`. Suletud polyjoon.

- `Specify first corner point`, `Specify other corner point`. Teise nurga jaoks sisesta `@width,height`.

### POLYGON

Aliased: `POL`. Korrapärane hulknurk suletud polyjoonena.

- `Enter number of sides <4>` (3 kuni 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: klõpsa või sisesta punkt; selle kaugus määrab suuruse ja selle suund pöörab hulknurka.

### ELLIPSE

Aliased: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, siis kaugus teise teljeni.
- `I` (`Isocircle`, ainult kui {{cmd:ISODRAFT}} on sees): keskpunkt, siis raadius või `Diameter`: ellips, mida ring näitab praegusel isomeetrilisel tasandil.

### HATCH

Aliased: `H`, `BH`, `BHATCH`; või {{ui:Hatch}} tööriistaribal. Prindib kõigepealt praeguse mustri, mõõtkava ja nurga.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, korduv (`Undo`, kui on juba ala): iga klõps lisab ümbritseva suletud ala, selle sees olevad suletud kujundid on saared. Enter teeb kõigist ühe viirutuse.
- `S`: `Select closed objects` (suletud polyjooned, ringid, suletud ellipsid).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): täide on gradient, mitte muster. Vt {{cmd:GRADIENT}}, et näha selle küsimusi.

Vt [Viirutus ja täidetavad alad](topic:hatch).

### GRADIENT

Aliased: `GD`. Täidab ala ühe või kahe värvi gradiendiga. Esmalt küsib gradienti, siis jätkab nagu {{cmd:HATCH}} (`Pick internal point`, `S` suletud objektide jaoks, {{key:Enter}} lõpetamiseks).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, korduv; igal korral prindib gradiendi sellisena, nagu see praegu on.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` või üks neist pööratult (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Esimesed tähed on piisavad.
- `O`: üks värv, siis selle toon 0 kuni 1 (0 tumendab mustaks, 0,5 on värv ise, 1 valgendab valgeks). `TW`: esimene ja teine värv. Värv on arv 1 kuni 255, kolm arvu nagu `255,128,0`, või `#rrggbb`.
- `A`: nurk, mille all gradient kulgeb. `C`: keskel Yes või No (No nihutab gradiendi keskkoha ühele poole).
- Keeldub tundmatust värvist või tüübist ning toonist väljaspool 0 kuni 1.

{{cmd:HATCHEDIT}} `G` ja Atribuudid (Gradient) muudavad gradienti hiljem või muudavad mis tahes viirutuse gradiendiks. Gradient joonistatakse ekraanile ja prinditakse. DWG 2004 ja hilisemad hoiavad seda tõelise gradiendiviirutusena; DXF 2000 ja DWG 2000 hoiavad seda CadCrafti jaoks, ja teised programmid näevad täitena esimese värvi ühtlast täidet.

### HATCHGENERATEBOUNDARY

Aliased: `HGB`. Teeb piirjoone uuesti viirutusest, mis selle kaotas. `Select hatches` (või vali need enne), siis `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Iga viirutuse silmus muutub suletud polyjooneks viirutuse kihil; uued polyjooned jäävad valituks. Kumer serv tuleb tagasi lühikeste sirgete tükkidena, mida viirutus hoiab.
- Yes korral viirutus järgib oma uut piirjoont, nagu {{cmd:HATCH}}-iga tehtud viirutus. Üks tagasivõtmise samm.
- Kui viirutust ei valitud, ütleb seda.

### POINT

Aliased: `PO`; või {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Punktiobjektid, üks iga klõpsu kohta, kuni Enter.

- `Specify a point`

### XLINE

Aliased: `XL`; või {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Konstruktsioonijooned, lõputud mõlemas suunas. Vt [Konstruktsioonijooned ja kiired](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, siis `Specify through point` iga joone jaoks, kuni Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` küsib kõigepealt `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, siis `Specify angle end point` iga joone jaoks.
- `O`: `Specify offset distance [Through] <Through>`, siis `Select a line object` ja `Specify side to offset` (või `Specify through point`) iga joone jaoks.

### RAY

Aliased puuduvad; või {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`, siis `Specify through point` iga kiire jaoks, kuni Enter.

### TEXT

Aliased: `DT`, `DTEXT`; või {{ui:Text}} tööriistaribal. Üherealine tekst; iga rida on oma objekt.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, siis `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, korduv: iga Enter alustab järgmist rida allpool. Tühjal real Enter lõpetab. {{key:Space}} sisestab siin tühiku.

### DIVIDE

Aliased: `DIV`. {{cmd:DIVIDE}} paneb joonele, kaarele, ringile, polyjoonele, splainile või ellipsile märgid, mis lõikavad selle võrdseteks osadeks. Vali objekt, siis anna osade arv (2 kuni 32767). Avatud objektil on üks märk vähem kui osi; suletud objektil on märk ka alguses. Objekt ise ei lõigata. Märgid on punktid; `Block` küsib selle asemel selle joonise plokki ja seda, kas see pöördub objektiga kaasa. Pikkused splainidel ja ellipsidel mõõdetakse lühikeste kõõlude järgi. Keeldub tekstist, viirutustest ja muudest objektidest, millel pole pikkust.

### MEASURE

Aliased: `ME`. {{cmd:MEASURE}} paneb märgi iga antud pikkuse järel joone, kaare, ringi, polyjoone, splaini või ellipsi kohal, alates otsast, mis on sinu klõpsust lähim (suletud objekt: algusest). Anna pikkus sisestades või kahe punktiga. Avatud objekti kaugem ots märki ei saa. `Block` paneb märgi asemel iga märgi juurde ploki. Keeldub pikkusest 0, pikkusest, mis on pikem kui objekt, ja sellest, mis teeks üle 32767 märgi.

### BOUNDARY

Aliased: `BO`, `BPOLY`. {{cmd:BOUNDARY}} teeb suletud polyjoone selle ala ümber, kus on punkt, mille valid, mis tahes joontest, kaartest, ringidest, polyjoonidest ja kõveratest ekraanil. Kaartel lebavad tükid tulevad tagasi kaarelõikudena; ellipside ja splainide tükid tulevad tagasi lühikeste sirgete lõikudena. Kui `Islands` on sisse lülitatud (algseade), saab iga selle sees oleva suletud ala ka oma polyjoone. Jätka punktide valimist; Enter lõpetab. Piirjooned, mis ala piiravad, jäetakse nii, nagu nad on. Kui ükski suletud ala punkti ei sisalda, ütleb seda.

### BLEND

{{cmd:BLEND}} joonistab splaini kahe avatud kõvera otste vahel. Vali iga kõver lähedalt otsale, mida ühendada. `CONtinuity` valib `Tangent` (splain lahkub ja saabub mõlema kõvera järgi) või `Smooth` (see kõverdub ka sellest, kuidas nad otstes kõverduvad); valik jääb sessiooniks meelde. Kaks kõverat ei muutu. Keeldub suletud objektidest ja kahest otsast, mis juba kohtuvad.

### REGION

Aliased: `REG`. {{cmd:REGION}} muudab suletud objektid piirkondadeks: lamedateks aladeks, mida saab ühendada, lõigata ja mõõta. Vali ringid, suletud polyjooned, suletud ellipsid või suletud splainid, või jooned, kaared ja avatud polyjooned, mis sulgevad silmuse otsast otsani; iga silmus muutub üheks piirkonnaks ja asendab objektid, millest see tuli. Kaared jäävad kaarteks; ellipsid ja splainid muutuvad lühikesteks sirgeteks lõikudeks. Mis pole suletud ega moodusta silmust, jäetakse nii, nagu see on, ja ütleb, mitu. Joonisel on piirkond üks või mitu suletud polyjoont, mis on hoitud kokku nimeta rühmana, nii et klõps valib kogu piirkonna ja koopia on oma piirkond; teised programmid, mis faili avavad, näevad suletud polyjooni.

Kui joonisel on piirkonnad, töötavad {{cmd:UNION}}, {{cmd:SUBTRACT}} ja {{cmd:INTERSECT}} vahelehel 2D piirkondadega: `UNION` ühendab valitud piirkonnad üheks (piirkonnad, mis on eraldi, muutuvad üheks piirkonnaks mitme kontuuriga); `SUBTRACT` küsib piirkonnad, millest lahutada, ja siis need, mida ära võtta (auk jääb piirkonna osaks); `INTERSECT` jätab alles ala, mis neil kõigil on ühine. Iga ütleb tulemuse pindala ja on üks tagasivõtmise samm. Need keelduvad, kui midagi ei jääks alles või midagi pole ühine. Vahelehel 3D ja joonisel, kus piirkondi pole, töötavad samad käsud nagu varem tahkistel.

## Muuda

Aliased: `MT`, `T`; või {{ui:Paragraph}} tööriistaribal. Lõigutekst, mis murdub laiuseks, kirjutatud kohapeal.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: kahe nurga vaheline laius on koht, kus tekst murdub. `H` küsib `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` ja jätab teise nurga vahele.
- Siis avaneb joonisel kast: kirjuta, {{key:Enter}} uue lõigu jaoks, {{key:Mod+Enter}} või klõps väljaspool lõpetab, {{key:Esc}} tühistab. Tema riba määrab kõrguse, rea vahe, laiuse ja joonduse. Vt [Lisa tekst ja sildid](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliased: `ED`, `DDEDIT`; või topeltklõps tekstil. `Select a text to edit`, korduv kuni {{key:Enter}}: igaüks avaneb samas kastis. Kui käivitatakse valitud või topeltklõpsatud tekstil, muudab see ainult seda ja lõpeb.

### ERASE

Aliased: `E`, `DELETE`; või vajuta {{key:Delete}}, kui objektid on valitud.

- `Select objects` (vahele jäetakse, kui objektid on juba valitud)

### MOVE

Aliased: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, sisestatuna kui `dx,dy`.

### COPY

Aliased: `CO`, `CP`. Kopeerib nii mitu korda, kui annad punkte.

`Array` teise punkti küsimuses teeb ühe korraga rea: anna üksuste arv (algne loetakse üheks), siis punkt, kuhu esimene koopia läheb; teised järgivad samas vahes. `Fit` teeb selle punkti hoopis viimase koopia kohaks, ja teised laotatakse vahele ühtlaselt.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, korduv kuni Enter. `U` võtab viimase koopia tagasi.

### ROTATE

Aliased: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: kraadides, vastupäeva positiivne; või klõpsa punkt, et pöörata selle poole.

### SCALE

Aliased: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: sisesta tegur, näiteks `0.5` või `2`. Klõpsatud punkt annab oma kauguse baaspunktist teguriks.

### MIRROR

Aliased: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Aliased: `AL`; või {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Kahe paari korral: `Scale objects based on alignment points? [Yes/No] <N>`

Vt [Joonda objektid](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (või valik), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` küsib punkti. Valik jääb valituks.

### DISTRIBUTE

- `Select objects` (vähemalt kolm), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Välimised kaks jäävad paigale; valik jääb valituks.

### ALIGNPANEL

Aliased: `ALP`; või {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Avab paneeli, mis käivitab ALIGNTO ja DISTRIBUTE klõpsudega.

### LASER

Aliased: `LASERCUT`; või {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Avab joonise kohal paneeli Laser: mida iga kiht teeb (lõika, joonista, graveeri, täida, pilt), eelvaate, GRBL G-koodi salvestamiseks ja raamimise ning saatmise Web Serial kaudu. Vt [Saada joonis lasrile](topic:laser-cutting).

### STRETCH

Aliased: `S`; või {{ui:Stretch}}. `Select objects to stretch`: lohista ristaknaid (või sisesta `C`) üle otste, et liigutada. `Specify base point [Displacement]`, `Specify second point`. Aknade sees olevad punktid liiguvad: joonte otsad, polyjoone tipud (kaarelõigud säilitavad oma kõrguse), mõõdupunktid; ringid, ellipsid, tekst, punktid ja plokid liiguvad tervikuna, kui nende keskpunkt või sisestuspunkt on sees. Enne käsku tehtud valik säilitab ristaknad (ja lassod), mis selle tegid, nii et need venivad samamoodi. Ilma aknata objektid liiguvad tervikuna.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliased: `AR`; või {{ui:Array}}. `Select objects`, siis `Enter array type [Rectangular/POlar] <Rectangular>` (ainult ARRAY).

- Rectangular algab 4 veergu × 3 rida, vahega 1,5 korda objektide suurusest, näidatakse eelvaates. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` küsib veerud ja read, `S` veergude vahelise ja ridade vahelise kauguse (negatiivne läheb vasakule või alla), `COL` ja `R` ühe suuna kumbki.
- Polar küsib `Specify center point of array`, algab 6 üksuse ringiga ümber, pööratuna. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` üksused, `F` täitenurk (+ vastupäeva, − päripäeva), `ROT` Yes või No.
- {{key:Enter}} (eXit) teeb koopiad tavaliste objektidena. Üks tagasivõtmise samm.
- `AS` (ASsociative) lülitub tavaliste koopiate ja massiivi vahel, mida saab hiljem muuta: üks objekt, mida muudad hiljem {{cmd:ARRAYEDIT}}-iga, oma käepidemete või Atribuutide kaudu. Valik jääb meelde ({{cmd:ARRAYASSOCIATIVITY}}); algab tavaliste koopiatega.

### ARRAYPATH

Koopiad mööda kõverat. `Select objects`, siis `Select path curve`: joon, kaar, ring, ellips, polyjoon või splain (mitte üks objektidest, mida massiivistatakse). Rada algab selle otsast, mis on objektidele lähem, ja esimene üksus on objektid seal, kus nad on.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, eelvaatega. `M`: `Divide` laotab üksused ühtlaselt kogu raja peale, `Measure` paneb ühe iga nii kaugele. `I`: üksuste arv (Measure korral tähendab 0 nii palju, kui mahub; arv üle raja lõpu piirdub sellega, mis mahub). `SP`: vahe üksuste vahel mööda rada (lülitub Measure'ile). `AL`: Yes pöörab iga üksuse raja järgi, No hoiab need püstisena.
- `AS` nagu {{cmd:ARRAY}}-s. Kui see on sees, hoiab massiiv oma koopiat raja kujust: pärast kõvera muutmist ei liigu üksused.
- Keeldub rajast, mis pole kõver, ja ühest üksusest.

### ARRAYEDIT

Muudab massiivi, mis on tehtud ASsociative'iga. `Select array` (või vali see enne). Prindib, milline massiiv praegu on, ja küsib kuni {{key:Enter}}:

- Rectangular: `COL` veerud ja nende vahe, `R` read ja nende vahe, `A` nurk, mille all veerud kulgevad.
- Polar: `I` üksused, `F` täitenurk, `ROT` pööra üksusi Yes või No.
- Path: `M` Divide või Measure, `I` üksused, `SP` vahe, `AL` joonda rajaga.
- `S` (Source) avab objektid, mida massiiv kordab, eraldi, nagu plokiredaktor. Joonista ja muuda seal; {{cmd:ARRAYCLOSE}} salvestab või loobub, ja iga üksus järgib.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, siis klõpsa üksused, mida asendada, {{key:Enter}}. Need üksused näitavad nüüd asendust; asendusobjektid lahkuvad joonisest ja elavad massiivis. `RES` (RESet) näitab kõigis üksustes uuesti lähteobjekte.
- Iga muudatus on üks tagasivõtmise samm. Keeldub tavalistest koopiatest, tavalisest plokiviitest ja massiivist lukustatud kihil.

Samad arvud on paneelis Atribuudid all Array ning massiivil on käepidemed: selle baaspunkt liigutab seda, käepide teise üksuse juures määrab vahe, käepide pärast viimast üksust määrab arvu (polaar: teine üksus määrab, mitu üksust, viimane üksus täitenurga). {{cmd:EXPLODE}} muudab massiivi tagasi tavalisteks koopiateks.

### ARRAYCLOSE

Lõpetab {{cmd:ARRAYEDIT}} Source'i: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Ütleb seda, kui ühegi massiivi lähteobjektid pole avatud. {{cmd:BCLOSE}} teeb sama.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Määrab, millega {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ja {{cmd:ARRAYPATH}} alustavad; nende valik `AS` muudab sama seadet. Jääb meelde selles brauseris.

### OFFSET

Aliased: `O`. Jooned, kaared, ringid ja polyjooned.

Kui polyjoon liigub väljapoole ja selle sirged lõigud tulevad nurgas lahku, otsustab {{cmd:OFFSETGAPTYPE}}, kuidas lünk suletakse.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, siis `Specify point on side to offset` (või, koos Through'ga, `Specify through point`), korduv kuni Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: kuidas {{cmd:OFFSET}} sulgeb lüngad polyjoone välisnurkades. `0` pikendab lõike, kuni need kohtuvad (algseade), `1` ühendab need kaarega vana nurga ümber, `2` sirge lõikega. Sisenurki ja kaarelõike see ei puuduta. Jääb selleks sessiooniks.

### EXTRIM

{{cmd:EXTRIM}} lõikab kõik ühel pool serva. Vali lõikeserv (joon, kaar, ring, polyjoon, ellips, splain või konstruktsioonijoon), siis klõpsa punkt küljel, mida puhastada: iga joon, kaar, ring, polyjoon ja konstruktsioonijoon, mis serva ristub, kaotab selle külje osa, kust see serva juurest algab. Kui sa valid külge, liiguvad need tükid, mis kaoksid, kursori järgi. Suletud serva korral on pooled sees ja väljas. Objektid, mis serva ainult puudutavad, ning tekst, viirutused, splainid ja ellipsid, mis seda ületavad, jäetakse nii, nagu nad on. Üks tagasivõtmise samm.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: kuidas {{cmd:TRIM}} ja {{cmd:EXTEND}} alustavad. `1` Quick: iga objekt on lõikeserv või piir. `0` Standard: nad küsivad esmalt servi. Ka `(setvar "TRIMEXTENDMODE" 0)` LISP-is.

### TRIM

Aliased: `TR`. Prindib kõigepealt `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. Quick režiimis on iga nähtav objekt lõikeserv ja objekt, mida miski ei ristu, kustutatakse; Standard režiimis küsib see kõigepealt `Select cutting edges (Enter = every object)` ja lõikab ainult nendes kohtades.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, korduv: klõpsa eemaldatav tükk (see muutub halliks ja katkendlikuks, kui kursor on selle peal), lohista rada läbi mitme tüki (kõik lähevad ühe sammuga), või klõpsa kaks tühja kohta vahelise piirdeaia jaoks. {{key:Shift}} pikendab selle asemel. `T` valib lõikeservad (Standard režiim), `F` küsib piirdeaia punkte, `C` kaks aknanurka (osaliselt sees olevad tükid lähevad), `O` küsib `Enter a trim mode option [Quick/Standard]`, `E` küsib `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` kustutab objektid, mille valid, `U` võtab tagasi viimase valiku või lohistamise. Enter lõpetab. Vt [Lõika ja pikenda](topic:trim-and-extend).

- Klõps viirutusel lõikab viirutuse: lõikeservad jagavad viirutatud ala ja klõpsatud tükk eemaldatakse (joonistatud piirjoont ei jää sinna, kus see oli). Viirutus säilitab oma mustri või gradiendi; viirutus, mis oli oma piirjoonega seotud, pole pärast seda enam seotud, sest see ei täida seda enam. Ütleb, kui sel kohal ükski lõikeserv viirutust ei jaga, kui klõps on viirutusest väljas, ja kui midagi ei jääks alles (kasuta {{cmd:ERASE}}). Lohistatud rada või piirdeaed ei lõika viirutusi.

### EXTEND

Aliased: `EX`. Sama mis TRIM vastupidi: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Klõps pikendab objekti lähimat otsa järgmise piirjooneni; lohistatud rada või piirdeaed pikendab kõiki objekte, mida see ristub; {{key:Shift}} lõikab. `B` valib piirjooned (Standard režiim). Mode ja Edge on TRIM-iga ühised.

### LINKVIEWS

Aliased: `SYNCVIEWS`; või {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, või lingi ikoon joonise vahelehtedel. `Link the panes' views [ON/OFF]` (Enter võtab teise oleku): kui see on sees, liigutab aktiivse paani nihutus või suum kõiki paane, mis näitavad sama tüüpi ruumi. Vt [Jaga ekraan](topic:split-screen).

### OPENIN3D

Aliased puuduvad; või {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}}, kus 3D-modelleerimise rakendus võtab üleantud joonise vastu. Avab selle seal uuel vahelehel DWG-na (midagi ei laadita üles). Kui brauser vahelehe blokeerib, ütleb seda.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: mida joonistab vajutamine ja lohistamine tühjal kohal. Sama mis Sätted › CadCraft › Lohistamine valimiseks. Vt [Lasso-valik](topic:lasso-selection).

### FILLET

Aliased: `F`. Jooned, kaared, ringid ja polyjooned. Prindib kõigepealt `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` küsib `Specify fillet radius <last>`. `T` küsib `Enter Trim mode option [Trim/No trim]`: valikuga No trim jäävad objektid nii, nagu nad on, ja lisatakse ainult kaar.
  - `M` hoiab käsku töös rohkemate nurkade jaoks kuni {{key:Enter}}; `U` võtab viimase nurga tagasi, jättes käsu pooleli.
  - `P` küsib `Select 2D polyline [Radius]` ja ümardab iga nurga, kus kaks sirget lõiku kohtuvad. Juba olemasolevad ümardused asendatakse uue raadiusega; raadius 0 eemaldab need. Nurgad, mille küljed on raadiuse jaoks liiga lühikesed, jäetakse ja loetakse.
- `Select second object or shift-select to apply corner [Radius]`. Hoia {{key:Shift}} all klõpsates teravaks nurgaks, olenemata raadiusest.

Klõpsa iga objekti sellel osal, mida tahad alles hoida. Kaks joont, mis ei kohtu, pikendatakse. Kaks paralleelset joont saavad lünga üle poolringi selle joone otsas, mis on sinu klõpsule lähim. Ring ei lõigata kunagi. Kaks ühe polyjoone kõrvuti olevat lõiku saavad kaare polyjoone sees; polyjoon ja muu objekt töötavad, kui lõige tabab polyjoone esimest või viimast lõiku.

### CHAMFER

Aliased: `CHA`. Jooned ja polyjoonte sirged lõigud. Prindib kõigepealt praegused kaugused (või pikkuse ja nurga).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` küsib `Specify first chamfer distance <last>` ja `Specify second chamfer distance <the first>`: esimene lõigatakse esimesest joonest, mille valid, teine teisest.
  - `A` küsib `Specify chamfer length on the first line` ja `Specify chamfer angle from the first line`.
  - `E` (mEthod) valib, kumba kahest järgmine faas kasutab. `T`, `M`, `U` ja `P` töötavad nagu {{cmd:FILLET}}-s.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klõps teeb teravnurga.

Kaugus, mis on pikem kui joon, lükatakse tagasi (`Distance is too large.`).

### BREAK ja BREAKATPOINT

Aliased: `BR`. `Select object` (kuhu klõpsad, on esimene punkt), `Specify second break point [First point]`; `F` küsib `Specify first break point` ja `Specify second break point`. Osa nende vahel kaob; ringil vastupäeva algpunktist. BREAKATPOINT küsib `Specify break point` ja jagab objekti selles punktis kaheks (mitte ringil).

### LENGTHEN

Aliased: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: klõps prindib `Current length` (ja kaare sisenurga) ja küsib uuesti. `DE` küsib `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` lohistab. Siis `Select an object to change [Undo]`, korduv: liigub klõpsule lähim ots. Jooned, kaared ja avatud polyjooned.

### JOIN

Aliased: `J`. `Select objects to join`. Jooned, kaared ja avatud polyjooned, mis kohtuvad otsast otsani, muutuvad polyjoonteks (suletud, kui ahel sulgub); ühel joonel olevad jooned muutuvad üheks joooneks; ühe ringi kaared muutuvad üheks kaareks või ringiks. Ajalugu ütleb, mitu objekti ühendati ja mitu mitte.

### MATCHPROP

Aliased: `MA`, `PAINTER`. `Select source object`, siis `Select destination objects [Settings]` ja {{key:Enter}}. Kopeerib kihi ja värvi ning samat tüüpi objektide vahel teksti kõrguse ja laiuse, mõõtude suurused või viirutuse mustri. `S` küsib `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, korduv kuni {{key:Enter}}; valik jääb sessiooniks meelde.

### EXPLODE

Aliased: `X`. Polyjooned muutuvad joonteks ja kaarteks, plokiviited muutuvad oma objektideks, mõõdud muutuvad joonteks, noolepeadeks ja tekstiks. Massiiv, mis jääb muudetavaks ({{cmd:ARRAYEDIT}}), muutub tavalisteks koopiateks oma objektidest.

- `Select objects`

### GROUP

Aliased: `G`. {{cmd:GROUP}} annab valitud objektidele nime, mida nad jagavad. Vali objektid, siis sisesta nimi (ilma tühikuta; `?` loetleb rühmad; Enter teeb nimeta rühma) ja nimega rühma puhul valikuline kirjeldus. Edaspidi valib klõps ühel neist või aken, mis ühe haarab, need kõik, nii et need liiguvad, kopeeruvad ja kustutatakse koos; iga objekt on siiski oma objekt. Objekt võib olla mitmes rühmas. Terve rühma koopia on uus nimeta rühm; ühe liikme koopia üksi liitub rühmaga. Rühmad kuuluvad ruumile, kus need tehti (mudel või leht). Need säilivad, kui salvestad DWG või DXF-ina ja avad faili uuesti CadCraftis; DXF 2000 failid kannavad neid ka rühmaobjektidena teistele programmidele, ja teistes programmides tehtud rühmad loetakse, kui DXF või DWG avatakse.

### UNGROUP

{{cmd:UNGROUP}} võtab rühmad lahti: vali rühmade objektid (iga rühm, milles nad on, võetakse lahti) või kirjuta `Name` ja rühma nimi. Objektid jäävad joonisele. Üks tagasivõtmise samm toob rühmad tagasi.

### GROUPEDIT

{{cmd:GROUPEDIT}} muudab ühte rühma. Vali üks tema objektidest või `Name` ja tema nimi; rühm, mis on juba valitud, võetakse sellisena, nagu ta on. Siis: `Add` objektid (valitakse ükshaaval, mitte rühmade kaupa), `Remove` objektid, `REName` rühma, muuda `Description`'it või määra `Selectable` (kas klõps ühele objektile valib kogu rühma). `eXit` või Enter lõpetab. Rühm ilma objektideta kaob.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: valikuga `1` (algseade) valib klõps või aken rühmitatud objekti pealt kogu rühma; valikuga `0` üksikuid objekte, nii et saad muuta ühte liiget. Jääb selleks sessiooniks.

## Lõikelaud

CadCrafti oma lõikelaud: see töötab ühe joonise sees, joonise vahel ja CadCrafti vahelehtede vahel selles brauseris. Vt [Kopeeri, kleebi ja dubleeri](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, või {{ui:Copy}} rühmas {{ui:Edit}}. Kopeerib objektid lõikelauale koos plokkide ja kihtidega, mida need kasutavad. Objektid jäävad valituks.

- `Select objects to copy` (vahele jäetakse, kui objektid on juba valitud)

### CUTCLIP

{{key:Mod+X}}, või {{ui:Cut}} menüüs {{ui:More}}. Kopeerib objektid lõikelauale ja kustutab need siis (üks tagasivõtmise samm).

- `Select objects to cut` (vahele jäetakse, kui objektid on juba valitud)

### COPYBASE

Kopeerib objektid lõikelauale baaspunktiga, mille valid; kleepimisel paigutatakse see punkt.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, või {{ui:Paste}} rühmas {{ui:Edit}}. Koopia järgib kursorit, rippudes selle ulatuse alumisest vasakust nurgast (või selle keskpunktist, või punktist `COPYBASE`; vt [CadCrafti sätted](topic:settings)).

- `Specify insertion point`

Kleebitud objektid on valitud. Plokk, mis joonisel juba on sama nimega, säilitab selle joonise definitsiooni.

Kui MarkupCraftis kopeeritud ala on uuem kui see, mida CadCraft kopeeris (ja vähem kui 6 tundi vana), kleebib {{key:Mod+V}} ja `PASTECLIP` selle ala: vt `PASTEAREA`.

### PASTEAREA

Aliased: `PAREA`. {{ui:Paste a copied area}} menüüs {{ui:More}}. Kleebib ala, mis on MarkupCraftis kopeeritud nupuga {{ui:Copy area}}, pildina oma tõelises suuruses. Vt [Pildid joonisel](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (ainult siis, kui lehel polnud joonise mõõtkava): number, {{key:Enter}} paberi suuruse jaoks või `P`, siis `First point on the pasted area`, `Second point on the pasted area` ja nende tegelik kaugus.

### PASTEORIG

{{key:Mod+Shift+V}}, või {{ui:Paste in place}} menüüs {{ui:More}}. Kleebib koordinaatidesse, kust objektid kopeeriti. Ei küsi midagi.

### DUPLICATE

Aliased: `DUP`. {{key:Mod+D}}, või {{ui:Duplicate and move}} menüüs {{ui:More}}. Objektide koopia liigub koos osutajaga sealt, kus see on; {{key:Esc}} ei jäta midagi. Ei kasuta lõikelauda.

- `Select objects to duplicate` (vahele jäetakse, kui objektid on juba valitud)
- `Specify where the copy goes (Esc leaves nothing)`: klõpsa, sisesta punkt, `@dx,dy` (sealt, kus osuti oli), või kaugus kursori suunas.

### SELECT

Küsib `Select objects` (kõigi allpool olevate valikutega) ja jätab valitud asjad valituks järgmise käsu jaoks või hilisemaks `P`-ks.

### QSELECT

Aliased: `QS`. Brauseris dialoog {{ui:Quick select}} (vt [Objektide valimine](topic:select-objects#select-by-a-rule-quick-select)). Ilma selleta küsib käsurida `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` ja `Enter value`. Vasted saavad valiku.

### SELECTSIMILAR

Aliased: `SIM`. `Select objects [SEttings]` (või praegune valik): valib iga sama tüüpi objekti, millel on sama kiht ja värv (ja plokinimi, viirutusmuster). `SE` küsib `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, korduv kuni {{key:Enter}}.

### FIND

Aliased puuduvad; või {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. Brauseris dialoog {{ui:Find and replace}} (vt [Lisa tekst ja sildid](topic:text#find-and-replace-words)). Ilma selleta: `Enter text to find`, siis `Enter replacement text (Enter: select what is found)`. Otsib tekstist, atribuutide väärtustest ja mõõdu tekstist, avatud vahelehel või valikus.

### SELECTALL ja DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) valib kõik objektid, mida saab avatud vahelehel muuta. `DESELECT` (aliased `AI_DESELECT`, `SELECTNONE`; või {{key:Esc}}) tühjendab valiku.

## Mõõdud

### DIMLINEAR

Aliased: `DLI`, `DIMLIN`. Horisontaalne või vertikaalne kaugus.

- `Specify first extension line origin [Select object]` (Enter või `S`: `Select object to dimension`, siis klõpsa joon, kaar, ring või polyjoone lõik)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` küsib teksti (`<>` on mõõdetud väärtus), `H` ja `V` määravad suuna, `R` küsib `Specify angle of dimension line <0>`.

### DIMALIGNED

Aliased: `DAL`, `DIMALI`. Kahe punkti vaheline tõeline kaugus.

- Alguspunktid nagu {{cmd:DIMLINEAR}}-s, siis `Specify dimension line location [Text]`.

### DIMANGULAR

Aliased: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Kaar: selle nurk. Ring: `Specify second angle endpoint`. Joon: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: klõpsa nurga sees, mida mõõta.

### DIMRADIUS ja DIMDIAMETER

Aliased: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, siis `Specify dimension line location [Text]`.

### DIMCONTINUE

Aliased: `DCO`, `DIMCONT`. Jätkab viimasest tehtud lineaarsest või joondatud mõõdust (või küsib `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, korduv kuni Enter.

### DIMBASELINE

Aliased: `DBA`, `DIMBASE`. Nagu {{cmd:DIMCONTINUE}}, aga iga mõõt algab esimesest alguspunktist ja on kaugemale virnastatud.

### DIMORDINATE

Aliased: `DOR`, `DIMORD`. `Specify feature location`, siis `Specify leader endpoint [Xdatum/Ydatum/Text]`. Kirjutab, kui kaugel objekt on UCS-i alguspunktist mööda X või Y juhikul: juhik, mis kulgeb enamasti üles või alla, loeb X-i, see, mis kulgeb külgsuunas, loeb Y-d; `Xdatum` ja `Ydatum` määravad, mis on. Alguspunkti määra enne {{cmd:UCS}}-iga (ilma selleta on see joonise 0,0). Käepidemed liigutavad objekti, alguspunkti ja juhiku otsa, ning väärtus järgib. Salvestatakse DWG-s ja DXF-is tõelise ordinaatmõõduna. Keeldub juhiku otsast objektil endal.

### DIMARC

Aliased: `DAR`. `Select arc or polyline arc segment`, siis `Specify arc length dimension location [Text]`. Mõõdab mööda kaart (mitte kõõlu) ja kirjutab kaare sümboli väärtuse ette. Keeldub täisringist, joonest või sirgest polyjoone lõigust. DWG hoiab seda kaare pikkuse mõõduna; DXF hoiab seda nurkmõõduna, mille tekstiks on pikkus, ja CadCraft avab selle uuesti kaare pikkuse mõõduna.

### DIMJOGGED

Aliased: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Raadiusmõõt kõverale, mille keskpunkt on kaugel või lehe väljaspool: mõõtejoon algab punktist, mille annad, mitte keskpunktist, ja selles on murd, ja see kirjutab ikka tõelise raadiuse. DWG hoiab seda murdunud raadiusmõõduna; DXF hoiab seda raadiusmõõduna, ja CadCraft avab selle uuesti murdununa.

### DIMJOGLINE

Aliased: `DJL`. `Select dimension to add jog [Remove]`, siis `Specify jog location (or press Enter)`. Paneb murdesümboli lineaarse või joondatud mõõdu joonele, et näidata, et kaugust ei ole mõõtkavas joonistatud; väärtus ei muutu. `Remove` eemaldab selle. Keeldub muudest mõõtude liikidest.

### QDIM

Aliased puuduvad. `Select geometry to dimension`, siis `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Mõõdab mitut objekti ühe sammuga: joonte ja polyjoonte lõikude otstest, ringide ja kaarte keskpunktidest, punktidest ja plokiviidetest. Asend objektide kohal või all mõõdab üle, asend nende kõrval mõõdab üles. `Continuous` ahelab punktid, `Baseline` mõõdab kõik esimesest, `Staggered` pesitseb paarid keskelt väljapoole, `Ordinate` annab igale punktile tema kauguse andmepunktist (`datumPoint` valib uue), `Radius` ja `Diameter` mõõdavad iga valitud ringi ja kaare. Režiim jääb meelde. Kõik, mida see teeb, on üks tagasivõtmise samm. Ütleb, kui on vähem kui kaks punkti või ringe ja kaari pole Radius ja Diameter jaoks.

### DIMBREAK

Aliased: `DBREAK`. `Select dimensions to add or remove breaks`, siis `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` jätab mõõte- ja pikendusjoonte sisse lünga kõikjale, kus mõni muu objekt neid ristub, ja arvutab lüngad uuesti, kui need objektid või mõõt liiguvad. `Manual` (ühe mõõdu puhul) küsib kaks punkti ja jätab nende vahele lünga. `Remove` eemaldab kõik lüngad. Lünk on 1,5 korda mõõdu teksti kõrgus.

### DIMSPACE

Aliased puuduvad. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Liigutab paralleelsete lineaarsete ja joondatud mõõtude mõõtejooni (või nurkmõõtude, mis on samast tipust) nii, et need on ühtlaselt vahega, loetuna baasmõõdust, igaüks sellel pool, kus ta asub. `0` joondab need baasmõõduga; `Auto` on kaks korda baasmõõdu teksti kõrgus. Mõõdud, mis ei ole baasiga paralleelsed, jäetakse nii, nagu nad on.

### DIMINSPECT

Aliased puuduvad. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Joonistab raami väärtuse ümber, sildiga ette ja kontrollimise määraga taha. `remove` eemaldab raami. Tolerantsitekst jääb väärtusega koos.

### DIMOVERRIDE

Aliased: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, uuesti kuni Enter, siis `Select dimensions`. Muudab need seaded ainult valitud mõõtudel; mõõdustiili ei muudeta. Võtab muutujad, mis on arv või lüliti (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` paneb valitud mõõdud tagasi nende stiilile. Keeldub nimest, mis pole selline muutuja, ja väärtusest, mida see ei võta.

### DIMREASSOCIATE

Aliased: `DRE`, `DIMREASSOC`. `Select dimensions`, siis iga mõõdu kohta selle pikendusjoonte alguspunktid (`Specify first extension line origin on an object`: püüa otsa või joone keskkohale, polyjoone nurgale, keskpunktile; Enter jätab selle punkti vabaks), või raadiuse, läbimõõdu, murdunud raadiuse või kaare pikkuse mõõdu puhul `Select arc or circle`. Mõõt seotakse siis nende objektidega: kui need liiguvad või muudavad suurust, järgib see samas tagasivõtmise sammus ja mõõdab uuesti. Seotud punkti käsitsi liigutamine või objekti kustutamine lõpetab seose. Seos salvestatakse DWG-s ja DXF 2000-s CadCrafti oma andmetena; teised programmid näevad tavalist mõõtu.

### DIMDISASSOCIATE

Aliased: `DDA`, `DIMDISASSOC`. `Select dimensions`. Vabastab need objektidest, millega nad on seotud; midagi ei liigu.

### CENTERMARK

Aliased: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, uuesti kuni Enter. Joonistab risti keskele ja neli keskjoont kuni kõvera taha (joontüüp CENTER), tavaliste joontena praegusel kihil; suurus tuleb praeguste mõõtmise seadete noole suurusest ja üldisest mõõtkavast; pöördub UCS-iga. Need ei järgi ringi, kui see liigub.

### CENTERLINE

Aliased: `CL`. `Select first line`, `Select second line`. Joonistab joone kahe joone vahele keskel (lõikumisel poolitajale), natuke pikemana kui need on, joontüübis CENTER. Tavaline joon: see ei järgi kahte joont.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Aliased puuduvad. Igaüks küsib `Enter new value for … <current>` ja määrab selle suuruse **uutele** mõõtudele: üldine mõõtkava, teksti kõrgus, noole suurus, kümnendkohad (kuni 8), vahe teksti ümber, pikendus mõõtejoonest kaugemale, nihe alguspunktist. Vt [Mõõtmise suurused](topic:dimension-settings).

### DIMLUNIT

Mõõtmise seade: uute mõõtude pikkuse vorming ainult (1 teaduslik, 2 kümnend, 3 tehniline, 4 arhitektuuriline, 5 murdarv).

### DIMSTYLE ja -DIMSTYLE

Aliased: `DST`, `DDIM`, `D`. Mõõdustiili haldur: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` käsureal: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Vt [Mõõtmise suurused](topic:dimension-settings#named-dimension-styles).

### DIMEDIT ja DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, siis mõõdud (või need, mis on juba valitud). New küsib teksti (`<>` = mõõt); Rotate nurka (0 paneb teksti tagasi); Oblique pikendusjoonte nurka X-teljest (Enter = puudub; ainult lineaarsed ja joondatud mõõdud). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Vt [Mõõtmise suurused](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliased: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, või valitud mõõtude korral `Units in the text of the selected dimensions`. Kirjutab mõõdetud pikkuse selles ühikus, ühiku pärast (DIMLFAC ja DIMPOST järelliide); `D` läheb tagasi joonise ühikutele. Vt [Mõõdud mm, cm, m või km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliased: `RC`. Prindib `Arc length: … Type: …`, siis `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular küsib `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand järgib osutajat kuni klõpsuni või {{key:Enter}}; `O` küsib `Select object` ja `Reverse direction? [Yes/No] <N>` ja muudab objekti pilveks. `A` küsib `Specify the length of each arc`. `R`, `P` ja `F` valivad tüübi järgmisele pilvele. Tulemus on suletud polyjoon kaartest.

### MLEADER

Aliased: `MLD`; või {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, siis tekst kohapealses kastis (või ilma selleta, `Enter text (an empty line ends)`). `Block` küsib kõigepealt ploki nime ja mitmikjuhik näitab seda plokki teksti asemel. Rohkem juhtjooni: {{cmd:MLEADEREDIT}}. Salvestatakse DWG-s tõelise mitmikjuhikuna; DXF hoiab juhtjooni, noolepead ja teksti, mille see joonistab.

### MLEADEREDIT

Aliased: `MLE`. `Select a multileader`, siis `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: iga punkt lisab juhtjoone uuest noolepeast samasse maandumiskohta, kuni Enter. `Remove leaders` eemaldab juhtjoone, millele klõpsad (mitmikjuhik jätab vähemalt ühe). `Block content` küsib plokinime ja näitab seda plokki teksti asemel (küsitakse selle atribuute); `Text content` paneb teksti tagasi. Igal juhtjoonel on oma käepide. DWG hoiab kõiki juhtjooni ja plokki ühes mitmikjuhikus.

### MLEADERALIGN

Aliased: `MLA`. `Select multileaders`, siis `Select multileader to align to [Distribute/Spacing/Use current spacing]` ja `Specify direction`. Liigutab teiste mitmikjuhikute maandumiskohti (ja nende teksti või plokki) joonele, mis läbib valitud mitmikjuhiku maandumiskoha selles suunas; noolepead jäävad sinna, kus nad osutavad. `Spacing` seab need ka võrdsele vahele; `Distribute` küsib kaks punkti ja jaotab need nende vahel ühtlaselt. Vajab vähemalt kahte mitmikjuhikut.

### MLEADERCOLLECT

Aliased: `MLC`. `Select multileaders`, siis `Specify collected multileader location [Vertical/Horizontal]` (Enter jätab esimese koha alles). Teeb mitu mitmikjuhikut üheks: plokisisu läheb uude plokki, mis hoiab kõiki kõrvuti või üksteise all; tekstisisu muutub üheks märkuseks, igal real oma joon. Esimene mitmikjuhik säilitab oma juhtjooned; teised eemaldatakse. Keeldub teksti ja ploki segust.

### TABLE

Aliased: `TB`; või {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Teeb tabeli: üks objekt, mida liigutad, kopeerid, pöörad, skaleerid ja prindid nagu iga teist, ja lahtrid on hoitud andmetena.

- `Number of data rows or [Paste/File/Style] <3>`, siis `Number of columns <3>`, `Text height` ja `Top left corner of the table`. Tabelil on pealkirjarida (üks ühendatud lahter) ja päisrida andmeridade kohal.
- `P`: tabel tabelarvutuse lahtritest lõikelaual (tekst, kus lahtrite vahel on tabulaator). Vajutus {{key:Ctrl+V}}, kui lõikelaual on sellised lahtrid, teeb sama, välja arvatud juhul, kui CadCrafti oma koopia on uuem (või kui CadCraft ei oska öelda: siis kleebib see oma koopia ja ütleb seda). `F`: tabel failist `.csv` või tabeldusega eraldatud failist. Esimesest reast saab päis; veergude laiused sobituvad teksti järgi.
- `S`: vali selle tabeli tabelistiil (vt {{cmd:TABLESTYLE}}).
- Keeldub reamäärast või veerust, mis ei ole täisarv, ja rohkematest lahtritest, kui tabel mahutab (2000 rida, 200 veergu, 40 000 lahtrit).
- {{cmd:EXPLODE}} muudab tabeli joonteks ja tekstiks. DWG-na salvestatult on tabel tõeline tabeliobjekt, mida teised programmid saavad muuta; DXF-ina salvestatult on see plokk, mis seda joonistab, ja CadCraft avab selle uuesti tabelina.

### TABLEDIT

Aliased: `TABLEEDIT`, `TABEDIT`; või topeltklõps lahtril. Muudab tabelit.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Klõpsa lahtrit, või kui tabel on valitud, sisesta selle nimi (`B3`: veerg B, rida 3; pealkirjarida on rida 1). Brauseris avaneb kast lahtri kohal: {{key:Enter}} jätab teksti alles, {{key:Tab}} läheb järgmisesse lahtrisse, {{key:Alt+Enter}} alustab uut rida, {{key:Esc}} jätab lahtri nii, nagu see oli.
- Tekst, mis algab `=`-ga, on valem: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, koos `+ - * / ^`, sulgude ja funktsioonidega nagu `sqrt` ja `round`. Lahter näitab väärtust; valem, mis nimetab oma lahtrit, tabelist välja jäävat lahtrit või lahtrit ilma arvuta näitab `####` ja käsurida ütleb põhjuse.
- `R` / `C`: `Insert` või `Delete` ridu või veerge valitud lahtri juures (mitu, ja kas üleval või all, vasakul või paremal). Valemid järgivad lahtreid, mida nad nimetavad.
- `S`: veeru laius ja rea kõrgus. Rida ei ole kunagi madalam, kui tema tekst nõuab. Valitud tabelil on käepide iga veeru ja iga rea servas.
- `M`: ühenda ühest valitud lahtrist teiseni; `U`: eemalda ühendus. `A`: joondus (`TL` ülal vasakul … `MC` keskel keskel … `BR` all paremal). `H`: selle lahtri oma teksti kõrgus (0 = stiili oma). `K`: määra rida pealkirjaks, päiseks või andmereaks. `CL`: tühjendab lahtri.
- Keeldub tabelist lukustatud kihil, kõigi ridade või veergude kustutamisest ja ühendusest, mis lõikaks teise ühendatud lahtri kaheks.

### TABLESTYLE

Aliased: `TS`. Loetleb tabelistiilid koos sellega, mitu tabelit igaüks kasutab, siis `Table style: [New/Set/Edit/Delete/Apply]`.

- Stiil hoiab pealkirja-, päise- ja andmeridade teksti kõrgust ja joondust, lahtri veerist ja seda, millised jooned on joonistatud (välimised, ridade vahel, veergude vahel).
- `N` teeb stiili praegusest ja muudab selle praeguseks; `S` määrab praeguse stiili (uued tabelid võtavad selle); `E` muudab ühte: tabelid, mis seda kasutavad, joonistatakse uuesti; `A` annab valitud tabelitele praeguse stiili; `D` kustutab ühe (mitte Standard, mitte praegune; tabelid, mis seda kasutasid, säilitavad oma ilme).
- Stiilid salvestatakse koos joonisega (DWG ja DXF).

### TABLEEXPORT

Salvestab, mida tabel näitab, CSV-failina (valem väärtusena). `Select a table` või vali see enne. Tekstilahtrid, mis algavad `=`, `+`, `-` või `@`, saavad ette `'`, et tabelarvutus neid ei käivitaks.

### TABLEPASTE

Aliased: `PASTETABLE`. Teeb tabeli tabelarvutuse lahtritest lõikelaual, siis küsib selle vasakut ülemist nurka. Sama mis {{cmd:TABLE}} › `Paste`.

### DATALINK

Aliased: `DL`. `Data link: [New/List/Remove] <New>`. `N` küsib CSV-faili, paigutab selle tabeli ja mäletab faili nime; `L` loetleb seosed koos failiga, suuruse, lugemise aja ja tabelite arvuga; `R` eemaldab seose (tema tabelid jäävad tavalisteks tabeliteks).

### DATALINKUPDATE

Aliased: `DLU`. Loeb andmeseose faili uuesti ja täidab selle seotud tabelid uuesti (read ja veerud lisatakse või eemaldatakse, et sobituda). Brauser ei saa faili ise avada, nii et see palub sul faili uuesti valida. Mitme seose korral küsib, millist.

### FIELD

Paneb joonisele välja: tekst, mis arvutab ise. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: praegu või salvestatud, loodud või prinditud kuupäev, ja vorming (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: failinimi, laiendiga või ilma. `S`: lehe number, selle pealkiri või mitu lehte on. `P`: joonise omadus nime järgi (vt {{cmd:DWGPROPS}}). `O`: vali objekt, siis mida lugeda (pindala, pikkus, ümbermõõt, raadius, läbimõõt, kiht, nimi, x, y, tekst, pöörde nurk, värv) ja kümnendkohad. `E`: valem. `C`: tekst koodidega, nagu need on sisestatud, näiteks `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Siis `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: valitud tekstile lisatakse väli pärast seda, mis seal on; tabelilahtrile samamoodi; ploki viide küsib, milline atribuut; {{key:Enter}} küsib uue teksti kõrgust ja punkti.
- Ekraanil on väljal helehall taust; prindil ja PDF-is seda kunagi ei ole. Käsitsi teksti üle kirjutamine lõpetab välja. Väli, mida ei saa arvutada, näitab `####`.
- Objekti väli leiab oma objekti CadCrafti objektidele hoitud võtme järgi (Sätted › CadCraft › Ühendamisesõbralikud failid); kui võtmed on välja lülitatud, keeldub.

### UPDATEFIELD

Aliased: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` määrab, millal väljad iseenesest uuenevad: kirjuta `O` (open), `S` (save), `P` (plot), `R` (regen) tähed, kõik neli algseisuna, või `NONE`.

### DWGPROPS

Aliased: `DRAWINGPROPS`. Loetleb joonise omadused, siis `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Esimesed kuus on need, mida paneel {{ui:Drawing details}} näitab; `U` lisab sinu enda nime ja väärtuse, `R` eemaldab ühe. Väljad loevad neid (`%<prop:title>%`, `%<prop:Client>%`) ja järgivad kohe. Keeldub kohandatud nimest, mis on üks sisseehitatud nimedest või sisaldab `%`, `<`, `>`, jutumärki või kaldkriipsu.

## Parameetriline

Vt [Joonise piiramine](topic:constraints) ja [Parameetrite ja võrrandite kasutamine](topic:parameters). Piirangud töötavad vahelehel {{ui:Model}}.

### GEOMCONSTRAINT ja GC-käsud

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, siis selle käsu küsimused.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (teine liigub).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT ja DC-käsud

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (arv, avaldis või `nimi=avaldis`).
- {{cmd:DCALIGNED}}: nagu eespool, koos `[Object/Point & line/2Lines]`-ga.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` küsib kauguse ja nurga tolerantse.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; nende piirangud kaovad.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, siis `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS ja -PARAMETERS

{{cmd:PARAMETERS}} (aliased `PAR`, `PARAM`) avab paneeli {{ui:Parameters}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Laadib alla makro (.swb), mis ehitab mudeli SolidWorksis uuesti ühe piiratud visandina. Vt [Teisalda visandid teistesse detailimodelleerijatesse ja neist](topic:solidworks-sketches).

## Plokid

### ANNOSCALE

Aliased: `CANNOSCALE`. Ütleb joonise annotatsioonimõõtkava ja selle annotatiivsete objektide arvu ning küsib `New annotation scale`: sisesta `1:50`, `1:100`, `2:1`, paljas arv (`50` on 1:50) või joonise enda mõõtkava nimi. Iga annotatiivne tekst ja mõõt muudetakse nii, et see prinditakse uues mõõtkavas samas suuruses, ühe tagasivõtmise sammuga; objekte, mis pole annotatiivsed, ei puudutata, samuti mitte objekti, mis hoiab mõõtkavade loendit ilma uueta ({{cmd:OBJECTSCALE}}). Vt [Ühikud, paberid ja mõõtkavad](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliased: `OBJSCALE`. `Select annotative objects`, siis `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Annotatiivne tekst või mõõt hoiab annotatsioonimõõtkavade loendit. `Add` ja `Delete` küsivad mõõtkava (`1:50`, `2:1`, paljas arv või joonise enda mõõtkava nimi); `Current scale` lisab joonise annotatsioonimõõtkava; `List` prindib iga objekti mõõtkavad. Vaateaken, mille mõõtkava on objekti loendis, näitab objekti suuruses, mis prindib selle paberikõrguse selles mõõtkavas, ekraanil ja prindis. Viimast mõõtkava ei saa kustutada. Objekte, mis pole annotatiivsed, ei arvestata: pane enne Annotatiivne sisse paneelis Atribuudid. Loendid salvestatakse DWG-s ja DXF-is CadCrafti oma andmetena. Vt [Ühikud, paberid ja mõõtkavad](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliased: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Sees (nii alustab joonis): annotatiivne objekt näitub ka vaateaknas või mudelis, mille mõõtkava ei ole tema loendis, oma suuruses. Väljas: seda seal ei näidata ega saa mudelis valida. Lüliti on üks tagasivõtmise samm; ta ei salvestu koos failiga.

### SCALELISTEDIT

Aliased: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` kuni {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit ja Delete küsivad mõõtkava nime. Joonise enda mõõtkavad lähevad vaateakna ja printimise mõõtkavade loenditesse ning salvestatakse koos joonisega. Vt [Ühikud, paberid ja mõõtkavad](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT ja PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: punktid, mida kõver läbib; `Close`, `Undo`, siis `Start tangent` ja `End tangent` (punkt või {{key:Enter}}). Method › Control vertices küsib astme (1 kuni 5) ja joonistab juhtpolügoonist. Object muudab polyjooned splainideks läbi nende tippude. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` mitme objekti jaoks; jooned, kaared ja splainid pakutakse esmalt polyjoonteks. Vt [Splainid ja polyjooned](topic:splines).

### BLOCK

Aliased: `B`, `BMAKE`.

- `Enter block name`. Kui see on olemas: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Need asendatakse ühe viitega uuele plokile.

### WBLOCK

Aliased: `W`, `-WBLOCK`. Kirjutab ploki, mõned objektid või kogu joonise uude DWG- või DXF-faili. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (sellest saab uue joonise alguspunkt), `Select objects`, siis `File format [DWG/DXF/R12 DXF]` ja `File name for the new drawing`, siis `What to do with the objects [Retain/Convert to block/Delete]`. Convert asendab need ühe viitega, mis viitab plokile faili nimega; Delete eemaldab need.
- **Block**: `Block to write out`. Ploki enda objektid, selle baaspunkt on alguspunktiks, sealhulgas pesastatud plokid.
- **Entire drawing**: iga objekt mudeliruumis. Lehti ei kirjutata; kasuta {{cmd:SAVEAS}}, kui tahad koopiat, mis neid säilitab.

Uus fail sisaldab ainult kihte, joontüüpe, teksti- ja mõõtmisstiile ning plokke, mida selle objektid kasutavad, ja joonise ühikuid. DWG versioon on see, mida {{cmd:SAVEAS}} viimati kasutas. Brauseris laaditakse fail alla; Studios avaneb salvestusdialoog.

### ATTDEF

Aliased: `ATT`, `DDATTDEF`, `-ATTDEF`; või {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Prindib režiimid, siis `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value`, kui konstantne), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} võtab atribuudi määratlused plokki.

### EATTEDIT ja ATTEDIT

`EATTEDIT` (`DDATTE`, või topeltklõps viitel, millel on atribuudid; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, siis dialoog {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): sama viide, siis `<prompt> (<TAG>) <value>` iga atribuudi jaoks; {{key:Enter}} jätab väärtuse. Vt [Atribuudid](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Väärtused säilivad; uued atribuudid saavad oma vaikeväärtuse, eemaldatud kaovad, paigutused lähtestatakse.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. Dialoog: plokk, atribuudid (silt, küsimus, vaikeväärtus, režiimid, järjekord), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT ja REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (või valik). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; riba {{ui:Save the block}} ja {{ui:Discard}} teevad sama. Kogu muudatus on üks tagasivõtmise samm. Vt [Atribuudid](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: kas pliiatsitriigi rõhk määrab joonepaksuse sellele, mida {{cmd:SKETCHFIX}} ja {{cmd:SKETCHLIVE}} teevad (algselt sees). Vt [Visandamine pliiatsiga](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Ütleb, milline kontoristandard selle joonise jaoks kehtib ja kust see tuleb: joonise enda kirje, sinu meeskonna jagatud standard või sinu Vaikepoliitikad (tekstikõrgused `all.anno.*`); kui ühtegi pole, siis programmi enda suurused. `[Import/Layers/Title block/Clear/eXit]`: `Import` loeb `cc-office-standard` .json-faili (kirje, mida SuperCad ja BimCraft kirjutavad) sellesse joonisesse, salvestatuna koos sellega DWG- ja DXF-is; `Layers` lisab kontorikihid, mida joonisel pole, ühe tagasivõtmise sammuga, ja ei eemalda kunagi ühtegi; `Title block` loetleb kontori väljad selle joonise enda väärtustega; `Clear` eemaldab joonise enda kirje. Annotatiivse teksti ja mõõtude kõrgused järgivad kehtivat standardit. Vt [Ühikud, paberid ja mõõtkavad](topic:units-papers-scales).

### BPARAMS

Aliased: `BPM`, `BLOCKPARAMS`. Avab parameetrihalduri plokile plokiredaktoris, valitud viite plokile või plokile, mille nimetad (`Block name`): valemitega parameetrid, mitu nähtavusparameetrit koos nende olekutega ja valitud viite enda väärtused ja olekud. Vt [Sinu enda parameetrid ja nähtavusolekud](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` teeb sama käsureal: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT ja BCLOSE

`BE`; või {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` avab plokiredaktori. `BCLOSE` küsib `Close the block editor on "…" [Save/Discard] <Save>`; lipul olev {{ui:Save block}} ja {{ui:Discard changes}} teevad sama. Kõik redaktoris tehtu on üks tagasivõtmise samm.

### VIEWBASE

Alias: `FLATSHOT`. Tahkiste lame 2D-vaade vahelehel 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, mõõtkava (`1:20`, `2:1`; {{key:Enter}} võtab selle, mis sobib lehele), siis vaate keskpunkt. Üks plokiviide, nähtavad servad VIEW-VISIBLE kihil, peidetud katkendlikult VIEW-HIDDEN kihil. Vt [Lamedad vaated lehel](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliased: `-PUBLISH`; või {{ui:All sheets in one PDF}} dialoogis {{ui:Plot to PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} prindib iga lehe, `S` küsib komadega eraldatud nimed. Üks PDF, lehekülg ja järjehoidja iga lehe kohta. Vt [Kõik lehed ühes PDF-is](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliased: `SSM`, `SHEETSETMANAGER`. Viib sind vasakpaneeli jaotisse {{ui:Sheet set}}: lehed paljudest joonistest, nummerdatud ja pealkirjastatud, nende tiitelplokid täidetud komplektist, avaldatud ühe PDF-ina. Vt [Lehtede komplektid](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): vali DWG või DXF, siis selle sisestuspunkt. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; kui linke on mitu, vali üks nende viidetest või sisesta `N` ja selle nimi. Vt [Seotud joonised](topic:files#linked-drawings-external-references).

### COUNT

Aliased: `BCOUNT`; või {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: valik valib ja loeb iga selle ploki viite selles ruumis; {{key:Enter}} või `A` loetleb need kõik; `E`, siis `C` (loendused) või `A` (atribuudid) laeb alla CSV-faili. Vt [Loenda plokid ja ekspordi graafik](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliased: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (suur- ja väiketähtedel pole vahet). `F` küsib DWG või DXF, siis kogu joonist või ühte selle plokkidest; juba kasutatud nimi küsib {{ui:Keep existing}} või {{ui:Rename}}. `L` avab teegi paneeli.
- `Specify insertion point [Scale/Rotate]`. `S` küsib `Specify scale factor`, `R` küsib `Specify rotation angle`; mõlemad jäävad meelde.
- Kui plokk juba seisab objektide kõrval, mis kordavad end mujal ilma selleta, ütleb rida, mitu kohta soovitatakse, ja küsimus saab juurde `suGgested`: `G` näitab neid; klõpsa ühele lähedal, et plokk sinna panna; `A` kõigi jaoks; {{key:Enter}} tagasi. Need võtavad naabrite pöörde ja atribuutide vaikeväärtused. Joonised üle 20 000 objekti avatud ruumis ei otsita läbi.
- Siis `Enter <prompt> (<TAG>) <default>` iga atribuudi jaoks, mida plokk küsib. Vt [Plokkide atribuudid](topic:attributes).

### LIBRARY

Aliased: `LIB`. Avab teegi paneeli: paiguta objekte, otsi uuendusi, teegi autorid. Küsimusi ei ole. Vt [Lisa failist või teegist](topic:insert-from-file-and-library).

### STEELMEMBER

Aliased: `SMEMBER`; või {{ui:3D member}} teegi vahelehel {{ui:Standard}}. `Section size <W12x26>` (nagu vaheleht seda loetleb), siis `Start point [Column]` ja `End point`: tahke element 3D-vahelehel kahe punkti vahel, toetudes maapinnale. `C` küsib samba alusepunkti ja selle kõrgust. Üks tagasivõtmise samm. Vt [Paiguta terasprofiilid ja standardosad](topic:steel-and-standard-parts).

### PARTSLIST

Aliased: `PLIST`. `Top left corner of the parts list`, siis `Text height <2.5>`: joonistab tabeli iga standardosa ja terasprofiili kohta, mis on teegist paigutatud (osanumbrid, kogus, osa, standard, suurus, pikkus, materjal, mass). Üks tagasivõtmise samm. Vt [Paiguta terasprofiilid ja standardosad](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliased: `PU`. Eemaldab plokkide definitsioonid, mida ükski ei kasuta. Küsimusi ei ole.

### DELBLOCKS

Või {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: vali plokiviide, või `N` plokkide loendi jaoks filtriga (vali mitu), või `X` / {{key:Enter}} lõpetamiseks. Iga viide kaob — mudelist, igal lehel ja teistes plokkides — ja siis definitsioon, ja käsurida ütleb, mis kustutati ja mis ei õnnestunud. Nimeta plokke ja seotud joonised ei pakuta. Küsimus tuleb tagasi järgmise ploki jaoks; kogu käsk on üks tagasivõtmise samm.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} kleebib, mida kopeerisid ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), ühe plokina: vali sisestuspunkt ja sinna läheb üks viide uuele plokile, valituna. Plokil on oma nimi (`A$C` ja number); {{cmd:RENAME}} annab sulle oma. Üks tagasivõtmise samm eemaldab viite ja ploki.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} küsib, milline plokk asendada ja milline plokk selle asemele panna (`?` loetleb plokid), siis muudab iga viite mudelis, igal lehel ja teistes plokkides. Iga viide säilitab oma koha, mõõtkava, pöörde, kihi ja atribuutide väärtused, mis on mõlemal plokil; ainult uuel plokil olevad atribuudid algavad vaikeväärtustest ning ta ütleb, millised väärtused kaotati. Kui vana plokki enam ei kasutata, pakub ta selle eemaldamist. Keeldub seotud joonistest ja asendajast, mis paneks ploki iseenda sisse. Üks tagasivõtmise samm.

### MINSERT

{{cmd:MINSERT}} paigutab ploki ridadesse ja veergudesse: plokinimi, sisestuspunkt, mõõtkava, pööre, ridade ja veergude arv ning nendevaheline kaugus. Kogu hulk pöördub pöördega kaasa. Iga üks on oma viide (kuni 10 000), nii et mis tahes neist saab hiljem liigutada või kustutada.

### BLOCKSPALETTE

Aliased: `BLOCKSPAL`; või {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Näitab paneeli {{ui:Blocks}} koos kursoriga filtris. Igal plokil on väike pilt; viimati paigutatud on esimesed. Kaks nuppu filtri kõrval vahetavad loendi ja piltide ruudustiku vahel. Klõpsa pildil (või {{ui:Insert}}), et paigutada plokk käsuga {{cmd:INSERT}}, või lohista see joonisele, et paigutada see sinna, kuhu lased.

{{ui:Libraries}} all loendi all: {{ui:Add a drawing}} võtab sinu enda DWG- või DXF-faili ja loetleb selle plokid piltidega ning kogu joonise ühe plokina. Ühe paigutamine kopeerib selle definitsiooni (ja pesastatud plokid ja nende kihid) sellesse joonisesse, nagu {{cmd:INSERT}} valik `File` teeb; plokk, mis on siin juba sama definitsiooniga, kasutatakse küsimata; sama nimega, aga erineva definitsiooniga küsib {{ui:Keep existing}} või {{ui:Rename}}. Brauseris jääb fail alles, kuni leht suletakse. CadCraft Studios lisab {{ui:Add a folder}} kausta joonised, igaüks avatakse, kui klõpsad; failid ja kaustad jäetakse meelde. Väike x eemaldab teegi loendist; faili ei puututa. Jagatud {{ui:Library}} on hoopis teine asi: vt [Lisa failist või teegist](topic:insert-from-file-and-library).

### BCONVERT

Või {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Leiab korduva geomeetria ja muudab iga koopia viiteks ühele plokile.

- `Select the objects that repeat, or [Block]`: ühe koopia objektid. `B` nimetab selle asemel olemasoleva ploki, et leida selle objektide lahtised koopiad.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` ja `P` lülitavad, mis loetakse koopiaks; {{key:Enter}} otsib. Seaded jäävad meelde.
- `Name for the new block <Block1>`, siis `Specify the block's base point` ({{key:Enter}} võtab valiku alumise vasaku nurga).
- Ütleb, mitu muud objektikomplekti on sama geomeetriaga, tõstab esile kõik, mida see asendaks, ja küsib `Yes/No`.

Koopia on samad objektid, nihutatud ja pööratud mis tahes nurga võrra (ja peegeldatud või skaleeritud ühe teguriga, kui need on sees): iga objekt peab oma vastet, valiku suuruse miljondiku täpsusega. Igal viitel on oma pööre ja mõõtkava (peegeldatud viitel negatiivne Y-mõõtkava) ja kiht, mida selle objektid jagasid. Lukustatud kihtidel olevaid objekte ei puututa ja loetakse. Otsitakse avatud ruumis (mudel või avatud leht). Väga suur otsing peatub töölimiidi juures ja ütleb seda. Üks tagasivõtmise samm.

### BSEARCH

Või {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: osa ploki nimest või muster märkidega `*` ja `?`. Loetleb iga ploki koos selle viidetega siin ja kogu joonises.
- `A`: atribuudi väärtus või `TAG=value`. Loetleb plokid, mille viidetel see on, koos leitud väärtustega. Konstantsed atribuudid loetakse.
- `G`: vali objektid või üks plokiviide, ja loetletakse plokid, mille kuju on vähemalt 85% sarnane, parim esimesena. Mõõtkava, pööre ja peegeldus ei lähe arvesse. Mõõt võrdleb piirjoontel laotatud punktide vahelisi kaugusi, nii et leitakse sarnased; täpsete koopiate leidmiseks kasuta {{cmd:BCONVERT}}-i.

Avatud ruumis leitud viited valitakse järgmise käsu jaoks.

### BREPLACE

Või {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` asendab valitud plokiviited plokiga, mille nimetad; `A` küsib ploki ja selle asendaja ning muudab iga viite, nagu {{cmd:BLOCKREPLACE}} teeb (sama kood). Viide säilitab oma koha, mõõtkava, pöörde, kihi ja mõlemal plokil olevate atribuutide väärtused; väärtused, mille uuel plokil kohta pole, kaovad ja nimetatakse. `?` loetleb plokid. Üks tagasivõtmise samm.

### DATAEXTRACTION

Aliased: `EATTEXT`, `DX`; või {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Loetleb plokid, nende atribuudid ja objektide omadused tabelina või CSV-failina.

- Töötab valiku kohta või küsib `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]`, kui valikus on mõlemad. Nimeta plokke, tabeleid ja materjalinimekirju ei loetleta kunagi.
- Prindib veerud, mille vahel valida (nimi, tüüp, kiht, X, Y, pööre, mõõtkava, pikkus, pindala, värv, joontüüp, ruum ja üks iga atribuudi sildi kohta), siis `Columns, by name or number with commas between`. {{key:Enter}} võtab tärniga märgitud: plokkide puhul nime ja iga atribuudi; objektide puhul tüübi, kihi ja pikkuse.
- `Put identical rows together with a count? [Yes/No] <Yes>`, siis `Put the list in a: [Table/Csv] <Table>`. Tabel on tavaline tabel ({{cmd:TABLEDIT}} muudab seda) ja see ei ole elav: käivita käsk uuesti, kui joonis muutub.
- Keeldub veerust, mida loendis pole. Tabel hoiab 1999 andmerida; CSV-fail võtab need kõik.

### COUNTTABLE

Loeb valiku (või avatud ruumi) plokiviiteid ja paneb loendused tabelisse (`Block`, `Count`) või CSV-faili. Loenduse jaoks, mis järgib joonist ise, vt {{cmd:BOMTABLE}}.

## Lehed ja printimine

### LAYOUT

Aliased: `LO`, `NEWLAYOUT`; või {{ui:+}} nupp joonise all. Uus leht piirjoone, tiitelploki ja ühe vaateaknaga, ISO A3 formaadis (või Tabloid joonistele tollides või jalgades). Küsimusi ei ole.

### MVIEW

Aliased: `MV`. Ainult lehel ({{cmd:VPORTS}} lehel teeb sama).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Vaateaken näitab kogu mudelit standardses mõõtkavas.
- `P` (Polygonal): klõpsa piirjoone nurki (`Undo`, `Close`), {{key:Enter}}, kui valmis. Keeldub vähem kui kolmest nurgast.
- `O` (Object): `Select a closed object for the viewport's outline`: suletud polyjoon, ring või ellips lehel. Vaateaken võtab selle kuju (kumerad jooned lühikeste sirgetena); objekt jääb nii, nagu oli. Keeldub objektist, mis pole suletud.

### VPCLIP

Lõikab vaateakna, mis on juba lehel. `Select viewport to clip` (või vali see enne), siis `Select the object to clip to [Polygonal/Delete]`:

- Klõpsa suletud polyjoont, ringi või ellipsit, või {{key:Enter}} (või `P`), et klõpsata hulknurga nurki.
- `D` (Delete, pakutakse, kui vaateaken on lõigatud) muudab selle uuesti ristkülikuks: kasti, mis ümbritses varasemat piirjoont.
- Mida vaateaken paberil näitab, ei liigu ja tema mõõtkava jääb samaks. Mudelit joonistatakse ja prinditakse ainult piirjoone sees ning piir järgib seda. Üks tagasivõtmise samm.
- Lõigatud vaateaknal on käepide iga piirjoone nurga juures lisaks keskpunktile ja kasti nelja nurgale (kasti nurga lohistamine venitab ka piirjoont). Atribuudid näitavad Outline: Rectangle või Clipped koos nurkade arvuga.
- DWG ja DXF 2000 failid hoiavad piirjoone CadCrafti jaoks. Teised programmid avavad vaateakna selle ümber oleva ristkülikuna; DXF R12 hoiab ainult ristkülikut.
- Mudeli vahelehel ütleb, et vaateaknad on lehtedel.

### VPORTS

Aliased: `VIEWPORTS`. {{cmd:SPLIT}} on sama ka lehelt, ning {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} käivitavad selle. Mudelil: `Enter number of panes [SIngle/2/3/4] <3>`; `2` küsib `[Horizontal/Vertical] <Vertical>` (Vertical = kõrvuti), `3` küsib `[Left/Right] <Right>` (kuhu suur paan läheb). Iga paan hoiab oma vaadet ja ruumi; klõps teeb paani aktiivseks. Lehel on see {{cmd:MVIEW}}. Vt [Jaga ekraan](topic:split-screen).

### VPVIEW

Aliased puuduvad. Ainult lehel.

- `Select viewport` (vahele jäetakse, kui üks on valitud), siis mudelil: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Aliased puuduvad. Sinu enda koordinaatsüsteem; mitte muutmine. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: punkt on uus alguspunkt, siis `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: alguspunkt, punkt positiivsel X-teljel, punkt positiivse Y poolel. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` ja nimi. Vaade pöördub nii, et uus X-telg on horisontaalne. Vt [Pööra vaadet ja kasuta oma koordinaate](topic:ucs-and-turned-view).

### PLAN

Aliased puuduvad. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: pöörab aktiivse paani vaadet nii, et UCS-i X-telg (või maailma oma) on horisontaalne. Joonisel miski ei liigu.

### TURNLEFT, TURNRIGHT, TURNWORLD

Aliased puuduvad; või {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Sama mis `UCS Z -90`, `UCS Z 90` ja `UCS W`, koos vaatega, mis järgib.

### VPLAYER

Aliased puuduvad. Lehel või vaateakna sees. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` küsivad kihtide nimesid (komad, `*` ja `?` jokkmärgid), siis `[All/Select/Current] <Current>` vaateaknaid; Reset paneb iga kihi tagasi selle vaikimisi „külmutatud uutes vaateaknates” olekusse; `V` määrab selle vaikeväärtuse (`[Frozen/Thawed]`), mida {{cmd:MVIEW}} kasutab. `?` loetleb kihid, mis on praeguses vaateaknas külmutatud. Kihtide paneeli vaateakna veerg teeb sama ühe vaateakna jaoks. Vt [Külmuta kiht ühes vaateaknas](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliased: `MS`; või topeltklõps vaateaknas. Ainult lehel. Töötab mudeliga vaateakna kaudu: valitud, ainuke lehel või `Click inside the viewport to work in`. Nihutamine ja suumimine seal muudavad vaateakna vaadet (lukustatud vaade jääb samaks ja hoopis leht liigub); uus vaade salvestatakse ühe tagasivõtmise sammuna. Vt [Töötle mudelit vaateakna kaudu](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliased: `PS`; või topeltklõps väljaspool vaateaknat, või klõps joonise all olevale vahelehele. Tagasi lehele.

### PLOT

Aliased: `PRINT`, `PUBLISH`, `EXPORTPDF`; või {{key:Mod+P}}. Avab dialoogi {{ui:Plot to PDF}}. Vt [Prindi PDF-iks](topic:plot-pdf).

### PLOTSTYLES

Aliased: `STYLESMANAGER`, `PSTABLES`; või {{ui:Edit tables…}} dialoogis {{ui:Plot to PDF}}. Avab {{ui:Plot style tables}}: mida iga värv prindib (värv, hall, tint, joonepaksus), hoitud koos joonisega. Vt [Printimisstiilide tabelid](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} liigutab objekte lehe ja mudeli vahel vaateakna kaudu, skaleeritult ja pööratult, nii et need näevad teiselt poolt samasugused välja. Lehel vali objektid ja need lähevad mudelisse (vali vaateaken, kui lehel on mitu). Kui töötad mudeliga vaateakna kaudu ({{cmd:MSPACE}}), tulevad valitud objektid lehele. Ütleb, mitu korda need suuremaks või väiksemaks said. Vaateaknad jäävad oma lehele. Üks tagasivõtmise samm.

### ISODRAFT

{{cmd:ISODRAFT}} lülitab isomeetrilise joonistamise `ON` või `OFF`-i või läheb otse tasandile `Left`, `Top` või `Right`. Kui see on sees: Ortho ({{key:F8}}) hoiab jooni mööda tasandi kahte telge (vasak: 90° ja 150°; ülemine: 30° ja 150°; parem: 30° ja 90°), polaarne jälgimine ({{key:F10}}) järgib samu telgi, püüdmine ruudustikule ({{key:F9}}) kasutab isomeetrilist ruudustikku ja ruudustik ({{key:F7}}) joonistatakse joontega 30°, 90° ja 150°. {{cmd:ELLIPSE}} saab `Isocircle`: anna keskpunkt ja raadius (või `Diameter`) ja see joonistab ellipsi, mida ring näitab praegusel tasandil. Joonis jääb lamedaks: need on abivahendid pildilise vaate joonistamiseks, mitte 3D-mudel. Seade kehtib selle sessiooni jaoks ja ei salvestu faili.

### ISOPLANE

{{cmd:ISOPLANE}} valib tasandi, millel isomeetriline joonistamine töötab: `Left`, `Top` või `Right`. Enter läheb järgmisele tasandile. Kui isomeetriline joonistamine on sees, teeb {{key:F5}} sama käsu keskel; kui see on väljas, jääb {{key:F5}} brauserile.

## Päringud

### CAL

Prindib arvutuse väärtuse, nagu seda loetakse igal pool, kuhu pikkust sisestatakse.

- `Expression`: sisesta see, näiteks `12'6"+3/4"` või `(24'-0")/3`, ja vajuta {{key:Enter}}. CadCraft prindib `= 12'-6 3/4"   (150.75 drawing units)`. Vt [Aritmeetika sisestatud väärtuses](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliased: `DI`; või {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`, `Specify second point`. Prindib kauguse, nurga, Delta X ja Delta Y.

### AREA

Aliased: `AA`; või {{ui:View}} › {{ui:More}} › {{ui:Area}}. Prindib pindala ja ümbermõõdu.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Klõpsa või sisesta nurgad; kui küsitakse `Specify next point (Enter closes) [Undo]`, vajuta {{key:Enter}}, et piirjoon sulgeda. `U` võtab viimase nurga tagasi.
  - {{key:Enter}} või `O`, siis `Select object`: ring (prindib ümbermõõdu), ellips, polyjoon (avatud sulgetakse pindala jaoks sirge joonega ja selle pikkus prinditakse) või viirutus (augud lahutatakse).
  - `A` (Add area) ja `S` (Subtract area) hoiavad jooksvat summat: küsimus algab `(ADD mode)` või `(SUBTRACT mode)`, iga ala lisatakse või lahutatakse ning pärast iga `Total area = …` prinditakse. Nendes režiimides valib `O` objekte kuni {{key:Enter}}, ja {{key:Enter}} esimeses küsimuses lõpetab käsu.

### MEASUREGEOM

Aliased: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; pärast iga mõõtmist küsib uuesti, vaikimisi `eXit`.

`Quick` mõõdab kursori ümber, kui seda liigutad: kauguse lähima objektini paremale, üles, vasakule ja alla (mööda praeguse UCS-i telgi), joonistatud sammudes, ja nurga, kus kaks neist naabritest on sirged ja kohtuvad. Klõps kirjutab neli kaugust, selge laiuse ja kõrguse ning nurgad ajalukku; Enter läheb tagasi valikutesse. See loeb, mis on ekraanil.

- `D`: kaks punkti, nagu {{cmd:DIST}}.
- `R`: `Select arc or circle`; prindib raadiuse ja läbimõõdu.
- `A`: kaar (tema sisenurk), joon ja siis teine joon (nurk nende vahel, nende kaugemate otste suunas), või {{key:Enter}} ja kolm punkti (tipp, siis kaks otsa).
- `AR`: nagu {{cmd:AREA}}, üks ala.

### ID

Aliased puuduvad. `Specify point`; prindib selle X ja Y.

### LIST

Aliased: `LI`, `LS`. `Select objects`; prindib iga objekti tüübi, kihi ja peamised mõõtmed.

### MASSPROP

{{cmd:MASSPROP}} annab valitud piirkondade ja suletud objektide lõigu omadused koos: pindala, ümbermõõt, piirdekast, raskuskese, inertsimomendid X- ja Y-telje suhtes läbi alguspunkti, inertsiprodukt, inertsiraadiused, samad momendid raskuskeskme suhtes ja põhimomendid koos nende telgede suunaga. Piirkondade augud loetakse aukudeks. Arvud on joonise ühikutes ja täpsed ridade ja kaartega piiratud piirjoonte puhul; ellipsid ja splainid mõõdetakse lühikeste sirgete lõikudena, ja ta ütleb seda. Pärast aruannet küsib ta, kas see kirjutada tekstifaili. Mitte-suletud objektid jäetakse välja, ja ta ütleb, mitu.

## Vaade, fail ja muu

### ZOOM

Aliased: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Aknaks klõpsa kaks nurka. `E`, `A` või Enter: kogu joonis.
- `P` (Previous, või {{ui:Previous}} tööriistaribal) läheb tagasi eelmisele vaatele, kuni 10 vaateni vahelehel; rida hiireratta samme või üks nihutus loetakse ühe vaatena.
- Arv nagu `2`, `2x` või `0.5x` (või `S` ja siis arv) suumib sisse või välja selle teguriga ekraani keskme ümber.
- `C` küsib `Specify center point` ja `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT ja PDF-käsud

Aliased: `PDFATT` käsule {{cmd:PDFATTACH}}, `PDFIM` käsule {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} paneb PDF-lehe joonise alla (fail, leht, sisestuspunkt, mõõtkava, pööre); {{cmd:PDFIMPORT}} muudab lehe jooned, kõverad, täited ja tekstid joonise objektideks kihtidel, mis on nimetatud PDF-i järgi, tõelises suuruses, sisestatud mõõtkavas või skaleerituna kahest punktist ja tegelikust kaugusest. {{cmd:PDFCLIP}} lõikab alusjoonise, {{cmd:PDFADJUST}} seab tuhmuse, kontrasti, monokroomi või lülitab selle välja, {{cmd:PDFLAYERS}} lülitab PDF-i enda kihid, ja {{cmd:PDF}} annab CadCrafti failid, mida joonise alusjoonised kasutavad. Vt [PDF-alusjoonised](topic:pdf-underlay).

### AUTOCOMPLETE

Aliased: `AUTOC`. Joonise automaatlõpetus: kui ükski käsk ei tööta, näitab hall kummitus, mida joonise enda mustrid ütlevad järgmiseks. {{cmd:AUTOCOMPLETE}} lülitab selle `On` või `Off` (ka Sätted › CadCraft) või `Show`'b, mida see praegu soovitaks. **Tab** joonistab kummituse ühe tagasivõtmise sammuna, **Esc** lükkab tagasi kuni joonis muutub. See leiab kolm asja viimastest objektidest: järgmise koopia asjast, mis on joonistatud kaks või enam korda ühtlase sammuga (postid, veerud, trepi tõus ja astmepind), järgmised sammud polyjoone trepist ja puuduva külje toa või seinaahela jaoks. {{cmd:LINE}} või {{cmd:PLINE}} keskel on kummitus **järgmine punkt**: trepi järgmine samm (tõus, astmepind, tõus…), ristküliku neljas nurk, punkt, mis seda sulgeb, või veel üks võrdne samm. Too kursor selle lähedale ja vajuta **Tab**, nagu oleksid seal klõpsanud; jätka või vajuta Enter. Arvutatakse selles arvutis reeglite järgi, mudelita.

### AUTOSHEET

Aliased: `ASH`. Lehed, mis paigutavad end ise. {{cmd:AUTOSHEET}} võtab joonise osad (sinu nimega vaated, või mudeli eraldi osad, või kogu mudeli), valib paberi suuruse (või selle, mille annad), annab igale osale standardse mõõtkava (üks kõigile või suurim, mida iga osa võib võtta) ja paigutab vaated ridadena uutele lehtedele tiitelploki ja pealkirjaga (nimi ja mõõtkava) iga all. Mis ühele lehele ei mahu, saab oma lehe. Üks tagasivõtmise samm. Arvutatakse selles arvutis reeglite järgi, mudelita.

### PHOTOSKETCH

Aliased: `PSK`. Visandi foto joonisele. Vali foto (JPEG, PNG või TIFF) käsitsi visandist paberilehel. {{cmd:PHOTOSKETCH}} leiab lehe neli nurka, sirgendab perspektiivi, võtab paberi suuruse, mille nimetad (`Paper`, või lähim standardne), ja visandi `Scale` (1 : n), siis jälgib pliiatsijooned joonteks, kaareks ja ringideks, iga pliiatsivärvi (must, punane, sinine, roheline) jaoks oma kiht. Kui see ei leia paberi serva, võtab kogu foto lehena ja ütleb seda. Kirjaviisi ei jälgita. Üks tagasivõtmise samm. Tehakse selles arvutis klassikalise pildi töötlusega, mudelita, ja midagi ei saadeta kuhugi. Vt ka skaneeritud joonise käsud.

### AUTODIM

Aliased: `ADIM`. Automaatne mõõtmine reeglite järgi. {{cmd:AUTODIM}} mõõdab valitud objekte (või kogu joonist) nende tasaste ja püstsete servade järgi: mõõtude ahel mööda külgi, mille valid (`Sides`), üks üldmõõt selle taga, iga ava laius (lünk ühel joonel olevate seinajoonte vahel), läbimõõt igale augu suurusele ja `Grid` korral ruudustiku joonte vahe. Mõõtu, mis on juba olemas, ei tehta uuesti. Üks tagasivõtmise samm. Arvutatakse selles arvutis reeglite järgi, mudelita.

### GRIDMOVE

Aliased: `GM`. Ruudustiku joone liigutamine viib kaasa kogumi. {{cmd:GRIDMOVE}} liigutab ruudustiku joont (joont kihil, mille nimi ütleb grid või axis) ja selle küljes rippuvat: seinad, mille üks ots on joonel, venivad selle järgi, joone kõrval olevad seinad liiguvad tervikuna, veerud (plokiviited ja ringid joonel), selle mullike ja silt liiguvad, ja mõõdud, mille punktid on joonel, mõõdavad uut vahet. Anna kaks punkti (arvestatakse ainult joonest üle käiv osa) või `Distance`. Üks tagasivõtmise samm võtab kõik tagasi. Tehakse selles arvutis reeglite järgi.

### DETAILS

Aliased: `DET`. Detailid, mis leiavad sinu üles. {{cmd:DETAILS}} hoiab sinu firma enda detaile: `Add` paneb joonise ploki nimekirja, `List` ja `Remove` haldavad seda, `Find` järjestab need valitud (või viimati joonistatu) järgi sõnade järgi kihtidel, plokinimedes, viirutusmustrites ja märkustes, võrreldes iga detaili nime ja märkustega, nii et akna pealis leiab sinu aknalauaplekkimise. Vali number ja punkt, et paigutada. Kui `Hint` on sees (ka Sätted › CadCraft), rida staatusribal ütleb, kui valitud asi sobib detailiga. Nimekiri hoitakse selles brauseris, selles arvutis, ja see on nimekiri, mida otsitakse. `Share` paneb selle ka sinu kausta Dokumendid (`.cadcraft/firm-details.json`, koos iga ploki joonisega): `Pull` lisab, mis su meeskonnal on ja sul pole, `Push` lisab, mis sul on ja neil pole, `Both` teeb mõlemat, ja midagi ei eemaldata kummastki poolest kunagi. Ava enne kaust Dokumendid ({{cmd:DOCUMENTS}}); kui see kaust on Team Cloud Plan kaust, jagab terve meeskond ühte nimekirja. Detaili kirje paneelis Teek on nupp **Lisa minu firma detailidesse**, mis paneb selle samasse nimekirja. Tehakse selles arvutis sõnade järgi, mudelita.

### SKETCHFIX

Aliased: `SKF`. Pliiatsivisandid muutuvad täpseks geomeetriaks. Vajuta ja lohista üks vabakäe joon korraga (pliiats, hiir või sõrm), siis Enter. Iga joon loetakse joonena, ringi, kaarena, ristkülikuna või polyjoonena: peaaegu tasased ja püstised jooned tehakse täpselt tasaseks ja püstiseks, suletud ümmargune joon muutub ringiks, suletud joon nelja täisnurgaga nurgaga ristkülikuks, ja joonte otsad tõmmatakse kokku ja joonisel olevate otste peale. Üks tagasivõtmise samm. Tehakse selles arvutis reeglite järgi, mudelita.

### SCANATTACH ja skaneeritud joonise käsud

Aliased: `SCA` käsule {{cmd:SCANATTACH}}, `SCS` käsule {{cmd:SCANSCALE}}, `SCL` käsule {{cmd:SCANALIGN}}, `SCD` käsule {{cmd:SCANDESKEW}}, `SCC` käsule {{cmd:SCANCLEAN}}, `SCR` käsule {{cmd:SCANCROP}}, `SCE` käsule {{cmd:SCANERASE}}, `SCT` käsule {{cmd:SCANTRACE}}, `SCI` käsule {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}}-il aliast ei ole. Need töötavad pildil, iga üks on üks tagasivõtmise samm. {{cmd:SCANATTACH}} lisab PNG, JPEG, TIFF (üks leht või kõik) või PDF-lehe, mis on pilt. {{cmd:SCANSCALE}} skaleerib lehe kahe valitud punkti ja tõelise kauguse järgi. {{cmd:SCANALIGN}} liigutab ja pöörab selle kahele punktile (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} näitab lehe pikkade joonte nurka ja pöörab lehe, kui sa `Accept`'id või annad `Value`. {{cmd:SCANCLEAN}} muudab selle mustvalgeks (`Threshold` Auto/Adaptive/Level, `Specks`) ja `Run`. {{cmd:SCANCROP}} hoiab akna. {{cmd:SCANERASE}} kustutab `Rectangle`, `Polygon` või `Lasso`. {{cmd:SCANTRACE}} jälgib jooned ja kaared uuele kihile (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) ja ütleb, mida ta leidis ning mida jättis rasterina. {{cmd:SCANINFO}} loetleb algfaili ja sammud. {{cmd:RASTERSNAP}} lülitab püüdmise skaneeritud lehtede joontele sisse või välja. Vt teema Skaneeritud joonised ja jälgimine.

### REGEN ja REGENALL

Aliased: `RE` käsule {{cmd:REGEN}}, `REA` käsule {{cmd:REGENALL}}. Ehitab uuesti ekraanil joonistatu joonisest: {{cmd:REGEN}} vaadatava vahelehe (lehel ka mudeli, mida selle vaateaknad näitavad), {{cmd:REGENALL}} kõik vahelehed, iga jagatud ekraani paani ja iga avatud joonise. Kasuta neid, kui pilt tundub vananenud pärast skriptitud või väga suurt muudatust, või kui assistent muutis joonist; joonist ennast ei puudutata, nii et tagasi pole midagi võtta.

### NAMEDVIEW

Aliased: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, siis vaate nimi. `S` salvestab ekraanil oleva vaate, `W` akna, mille valid, `R` näitab salvestatud vaadet, `D` kustutab ühe, `?` loetleb selle vahelehe vaated. Olemasoleva nime all salvestamine asendab selle; iga muudatus on üks tagasivõtmise samm. Vaated kuuluvad vahelehele, millel nad salvestati. DWG- ja DXF-failid hoiavad neid (tabel VIEW); lehe vaated tulevad tagasi esimesele lehele, kuna fail ei ütle, millisele.

### UNDO ja REDO

Aliased: `U` käsule {{cmd:UNDO}}; {{cmd:REDO}}-l aliast ei ole. Ka {{key:Mod+Z}} ja {{key:Mod+Y}}.

### LAYER

Aliased: `LA`. Viib paneelile {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` või nimi (`?` loetleb need: Continuous, joonise enda omad ja DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE koos nende suurustega `2` (pool) ja `X2` (kahekordne)). {{cmd:LWEIGHT}} (`LW`): uute objektide joonepaksus mm-des või `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): joonise joontüübi mõõtkava (tagasivõetav). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — sama mis nupp {{ui:LWT}} staatusribal. Vt [Joonepaksused ja joontüübid](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, siis uus nimi; objektid või viited järgivad. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` kuni {{key:Enter}}, siis `Select object on target layer or [Name]` ja `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, siis `Y`: kiht ja kõik sellel olevad objektid kaovad (mitte kiht 0, DEFPOINTS ega praegune kiht). Iga üks on üks tagasivõtmise samm. Vt [Korralda joonist kihtidega](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Kihid objekte valides; ka paneeli {{ui:Layers}} menüüs {{ui:Tools}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, siis {{key:Enter}}: iga teine kiht läheb välja. {{cmd:LAYUNISO}} lülitab need tagasi sisse. {{cmd:LAYOFF}} ja {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (või külmutatud), ikka ja jälle; `U` võtab viimase tagasi, {{key:Enter}} lõpetab. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} lülitab kõik kihid sisse, {{cmd:LAYTHW}} sulatab kõik kihid. Iga käsk on üks tagasivõtmise samm. Vt [Korralda joonist kihtidega](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} alustab tühja joonist ja {{cmd:OPEN}} avab DWG või DXF, kumbki omal vahelehel joonise kohal (puutumata uus joonis kasutatakse uue vahelehe asemel). Vahelehe sulgemisel salvestamata muudatustega küsitakse esmalt. Vt [Jaga ekraan](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, ka {{key:Mod+S}}) laadib alla koopia joonise vormingus: DWG, kui see avati DWG-st, DXF, kui DXF-ist. Uus joonis kasutab selles brauseris viimati valitud vormingut dialoogis Salvesta nimega, muidu DWG.

{{cmd:SAVEAS}} (ka {{key:Mod+Shift+S}}) avab dialoogi {{ui:Save a copy as}}: vali {{ui:DWG}} (ja selle {{ui:Version}}), {{ui:DXF R12}} või {{ui:DXF 2000}}, siis {{ui:Save}}. Valik jääb selle joonise ja selles brauseris uute joonise jaoks.

{{cmd:DXFOUT}} laadib alati alla DXF R12 koopia, muutmata vormingut, mida {{cmd:SAVE}} kasutab.

Vt [Failid: mis avaneb, mis salvestub](topic:files#saving).

### TOUR

Aliased: `TUTORIAL`. Käivitab kuueastmelise esimese joonise tuuri uuesti. Vt [Alustamine](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliased: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Vt [Sätted](topic:settings#toolbar-position).

### COMMANDLINE

Aliased: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: dokib või hõljutab käsurea, teeb sellest ühe rea, küsib, mitu ajaloo rida näidata (0 kuni 12), või avab ajaloo. Vt [Sätted](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: joonise kohal olevad ribad nii, nagu need olid, või kompaktsed. Vt [Sätted](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: samm, mille kohta {{ui:Polar}} jälgimise jooned joonduvad (rohkem kui 0, kuni 180). Jääb selles brauseris meelde.

### UNITS

Aliased: `UN`. Kuidas pikkused kirjutatakse ja sisestatakse.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural ja Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 või 256)`. Teistel: `Enter number of decimal places (0 to 8)`.

Uued mõõdud järgivad seda. Üks tagasivõtmise samm. Sama mis {{ui:Length format}} ja {{ui:Precision}} dialoogis {{ui:Current settings}}; vt [Jalad ja tollid](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliased: `GDS`. Vaatab IC-paigutust (GDSII-voofail): labori katse, ainult vaatamiseks ja mõõtmiseks.

- Failivalija võtab `.gds`-faili; mitme ülemise lahtri korral `Enter the top cell to draw`.
- Iga kiht ja andmetüüp muutub joonise kihiks (`GDS 1`, `GDS 2/5`), viited ja massiivid paigutatakse lamedalt, failis oleva kasutajaühiku järgi (tavaliselt mikromeetrid). Üks tagasivõtmise samm. Midagi ei simuleerita ega kontrollita ja faili ei kirjutata tagasi.

### DIAGRAM

Aliased: `TEXTDIAGRAM`, `T2D`. Tekstist diagramm.

- Kast võtab teksti (või ühe rea, kus lausete vahel on `;` käsureal): Mermaid-voodiagramm, PlantUML komponentdiagramm, D2 või alust-sihtkohani loend.
- `Specify the top left corner of the diagram`, siis `Specify the text height`.

Plokid ja ühendused on tavalised objektid kihil `Diagram`, valitud, kui käsk lõpeb. Üks tagasivõtmise samm. Vt [Diagrammi joonistamine tekstist](topic:text-to-diagram).

### OLELIST

Aliased: `OLES`. DWG-s olevad OLE-objektid, mida CadCraft ise ei saa paigutada.

- Loetleb iga ühe: number, tüüp, suurus, kas see salvestas pildi.
- `Enter an option [Place/eXit] <eXit>`: Place küsib numbri, vasaku alumise nurga ja laiuse ning joonistab raami pildiga. Üks tagasivõtmise samm; hoitud objekt ei muutu. Vt [Pildid](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliased: `SHX`. Sinu enda SHX-fondid.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} loeb iga `.shx`-faili kaustast (CadCraft Studio; iga käivitusega uuesti), {{ui:Files}} võtab valitud failid (brauser), {{ui:Reverse}} paigutab ühe fondi tähed viimasest esimeseni. Tekstistiilid, mis nimetavad laetud fonti, joonistavad selles. Vt [Joonista tekst oma SHX-fontides](topic:shx-fonts).

### LIMITS

Kui suur joonis on mõeldud olema.

- `Specify lower left corner or [ON/OFF] <current>`: punkt, `ON` või `OFF`.
- `Specify upper right corner <current>`.

Ruudustik täidab piirid, {{cmd:ZOOM}} All näitab neid, ja kui need on ON, lükatakse väljaspool olev punkt tagasi (`**Outside limits`). Üks tagasivõtmise samm; salvestatakse DWG-s ja DXF-is. Vt [Joonise piiride määramine](topic:drawing-limits).

### AUNITS

Aliased: `ANGUNITS`. Kuidas nurki näidatakse ja sisestatakse.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, või kahe teise korral `Enter precision` (0 kraadi, 2 minutit, 4 sekundit, 5 kuni 8 kümnendkohta sekundis).

Üks tagasivõtmise samm; salvestatakse DWG-s ja DXF-is. Sama mis {{ui:Angle format}} dialoogis {{ui:Current settings}}. Vt [Sisesta ja näita kompassisuundi ja nurki](topic:bearings-and-angles).

### APPLOAD

Aliased: `AP`; või {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. Dialoog {{ui:Load applications}}: lae `.lsp`-rutiinid ja `.dcl`-dialoogifailid, eemalda need, laadi uuesti ajaloost, ja käivituskomplekt. Rutiini `(defun c:NAME …)` käsud töötavad siis nagu iga teine. Vt [Laadi rakendused](topic:load-applications) ja [Käivita LISP-rutiine](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (või {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) avab sinu aliasefaili (`ALIAS, *COMMAND` read); {{ui:Save}} rakendab selle. {{cmd:REINIT}} rakendab selle uuesti. Vt [Muuda käsualiaseid](topic:command-aliases).

### OPTIONKEYS

Aliased: `OPTKEYS`; või {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} › {{ui:Edit…}}. Avab sinu suvandite tähtede faili (`COMMAND.OPTION, LETTERS` read, näiteks `ARRAY.PO, P`); {{ui:Save}} rakendab selle ja {{cmd:REINIT}} rakendab uuesti. Vt [Anna käsu suvanditele oma tähed](topic:option-letters).

### LISPEDIT

Aliased: `VLIDE`; või {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Avab LISP-redaktori, akna, mis jääb joonise kõrvale lahti.

- Tekst: reanumbrid, kursori juures oleva sulu paar on märgitud (punaselt, kui paari pole), {{key:Enter}} taandab uue rea avatud sulu alla, {{key:Tab}} kirjutab kaks tühikut, {{key:Esc}} lahkub tekstist.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): loeb iga vormi, nagu {{cmd:APPLOAD}} teeb failiga, ja teeb selle `c:` käsud. Fail ilmub {{cmd:APPLOAD}} loendisse.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): hindab valitud vorme või vormi, kus kursor on.
- {{ui:Stop}}: lõpetab töötava rutiini.
- {{ui:Console}}: mida rutiin printis ja iga viga koos reaga; klõpsa vealt, et sinna minna. Teksti jooksutatakse ühe ülemise taseme vormi kaupa, nii et rida on vormi oma või selle sees see rida, mis kutsub funktsiooni, mille viga nimetab.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): `.lsp`-fail. Tekst hoitakse ka selles brauseris, nii et akna sulgemine ei kaota seda.
- Teksti kõrval: funktsioonid, mida rutiin defineerib, need, mida ta kutsub, mida see LISP veel ei oma, need, mida ta kutsub ja mis pole defineeritud ega sisseehitatud, ning täielikud loendid sellest, mis on sisse ehitatud ja mis mitte.

Tekst, mille sulg pole kunagi suletud või string ei lõpe, ei käivitu: ütleb rea. Sammu-sammult silurit, murdepunkte ega jälgimisakent ei ole. Vt [Käivita LISP-rutiine](topic:run-lisp).

### HELP

Aliased: `?`. Prindib iga käsu, nende aliased ja ühe rea kirjelduse käsurea ajalukku. See ei ava seda abi: selleks vajuta {{key:F1}} või klõpsa {{ui:Help}}.

## Objektide valimise küsimus

Igal küsimusel `Select objects`: klõpsa objekte, joonista aknaid (vasakult paremale) ja ristaknaid (paremalt vasakule) kahe klõpsuga, või vajuta ja lohista lasso ({{key:Space}} lohistamise ajal: aken, risttaak, piirdeaed), {{key:Shift}}+klõps eemaldamiseks, ja vajuta {{key:Enter}} lõpetamiseks. Võid sisestada ka `ALL` (kõik), `L` (viimane objekt), `P` (Previous: see, mida viimane käsk kasutas), `F` (Fence: objektid, mida punktide joon ristub; `U` võtab punkti tagasi), `W` (Window), `C` (Crossing), `R` (Remove režiim: klõpsud eemaldavad objekte; küsimus ütleb `Remove objects`) ja `A` (Add again). `?` loetleb need. Neid ei näidata küsimuses. {{key:Tab}} kattuvate objektide peal tõstab esile järgmise; klõpsa, et see valida. Vt [Objektide valimine](topic:select-objects).

### ACCESS

Alias: `AX`. Joonistamine ilma nägemiseta. {{cmd:ACCESS}} lülitab juurdepääsu sisse või välja (`On`, `Off`) ning lülitab püüdmise helid (`Sound`) ja kõneldud käsud (`Voice`); enne ütleb oleku. Kui juurdepääs on sees, öeldakse iga käsk ja tulemus ekraanilugeja kaudu ja joonistusalal on klaviatuurikursor. Abiteemas „Joonistamine ilma nägemiseta” on klahvid.

### DESCRIBE

Alias: `DESC`. Ütleb, mis joonisel on: mitu objekti, mis liiki, kui suured, mitu kihti, mis on valitud. Ainult loeb; ei muuda midagi.

### WHEREAMI

Alias: `WHERE`. Ütleb, kus kursor on, joonise ühikutes.

### NEARBY

Ütleb, mis on kursori lähedal, lähim esimesena, igaühel oma kaugus ja külg, millel ta on.

### SAYSEL

Ütleb, mis on valitud, iga objekti kohta üks lause (joone pikkus, otsad ja nurk; ringi raadius ja keskpunkt; tekst nagu see on kirjutatud).

### VOICE

Lülitab kõneldud käsud sisse või välja. Need tuvastatakse selles arvutis; kui brauser seda teha ei saa, jääb hääl välja, kuni valid Sätetest brauseri veebiteenuse.

### TOUCHCROSSHAIR

Alias: `TCX`. Nihutatud ristik sõrmega joonistamiseks, nii et sõrmeots ei kata punkti, mille valid. Kui see on sees, ei vali üks sõrm joonistusel midagi: see liigutab ristikut, mis asub sõrmest ülal ja ühel küljel. Objektipüüdmised ja jälgimine järgivad ristikut. Sõrme tõstmine ei vali midagi ja jätab ristiku sinna, kus ta on. Valimiseks vajuta nupp {{ui:Click}} joonise nurgas või puuduta joonist teise sõrmega. Hoia {{ui:Click}} all, kui liigutad teist sõrme, et lohistada (valikuaken, lasso, käepide). Sõrm, mida hoitakse liikumatult all, või nupp {{ui:Enter}} on Enter. Kaks sõrme liigutavad ja suumivad nagu varem. Alumise serva ja kaugema külje lähedal tuleb ristik sõrmele lähemale, nii et joonise iga osa on kättesaadav. Pliiats ja hiir valivad alati otse.

{{cmd:TOUCHCROSSHAIR}} ütleb oleku ja küsib `ON`, `OFF`, `Auto` (sees ainult seal, kus sõrm on ainus osuti, nii et hiirega arvutis see on väljas), `Distance` (kui kaugel ristik sõrmest on, 24 kuni 240 pikslit) või `Side` (`Left`: üles ja vasakule, paremakäele; `Right` vasakukäele; nupud lähevad teise nurka). Samad valikud on Sätted › CadCraft juures, ja puuteekraaniga seadmel on staatusribal lüliti {{ui:Offset crosshair}}. Valikud jäävad selles brauseris meelde.

### WHOHAS

Ütleb, kellel joonis on avatud. CadCraft Studios arvutis kirjutab DWG või DXF avamine selle kõrvale väikese lukufaili (`Plan.dwg.cclock`: kes, alates millal, milline versioon), uuendab seda iga minut, kuni joonis on avatud, ja eemaldab selle joonise sulgemisel. Kui avad joonise, mida keegi teine on avanud, ütleb, kes ja alates millal, ning pakub {{ui:Open read-only}} (salvestamisel küsitakse uut nime), {{ui:Open anyway}} (teine inimene saab teada oma järgmisel uuendusel) või {{ui:Cancel}}. Faili üle kirjutamine, mida keegi teine on avanud, küsib esmalt. Lukk, mida pole viie minuti jooksul uuendatud, on vananenud: teine koopia suleti salvestamata või arvuti on une režiimis.

{{cmd:WHOHAS}} küsib `Current` (avatud joonis), `File` (vali üks), `FOlder` (vali kaust: iga joonis selles, mis on kuskil avatud, loetletakse), `Path` (sisesta täielik tee) või `Name` (nimi, mida teised näevad; sinu konto nimi, kui oled sisse logitud). Studio pääseb ligi ainult kaustadele, mille oled valinud: joonisele, mis on avatud kaustast, mida pole kunagi valitud, ütleb see korra, et ei saa joonist avatuna märkida; `FOlder` valib kausta ja lukud töötavad seal edaspidi. Lukk on märge inimestele, mitte tõke: teine programm saab faili siiski kirjutada. Brauseris kaustu, kust vaadata, pole, ja käsk ütleb seda.

### OVERKILL

Kustutab dubleeritud objektid ja korrastab kattuvad jooned ja kaared, joonistele, mis tulevad täis topeltjooni. `Select objects to clean up`, {{key:Enter}}, siis uuesti {{key:Enter}}, et puhastada näidatud seadetega, või muuda enne üht:

- `Tolerance`: kui lähedal peavad kaks koordinaati olema, et loeda samaks (algseisuna 0,000001; 0 tähendab täpselt sama).
- `Ignore`: omadused, mis võivad kahel muidu samal objektil erineda. Sisesta nimi, et see lülitada: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency` või `None` / `All`. {{key:Enter}}, kui valmis.
- `Overlap`: sees või väljas. Kui sees, muutuvad ühel sirgel kattuvad jooned üheks joonеks (joon, mis on teise sees, kustutatakse lihtsalt), ja ühel ringil kattuvad kaared muutuvad üheks kaareks; kaared, mis moodustavad täieliku ringi, muutuvad ringiks, ja kaar, mis asub ringil, kustutatakse.
- `Ends`: sees või väljas. Kui sees, muutuvad ühel sirgel olevad jooned ja ühel ringil olevad kaared, mis puudutavad ainult otsast otsani, üheks tükiks.

Iga objektitüüp kontrollitakse dubleerimise suhtes: kaks objekti on dubleeritud, kui nende geomeetria on sama tolerantsi piires ja nende kiht, värv, joontüüp, joontüübi mõõtkava, joonepaksus, paksus, läbipaistvus ja kõrgus ühtivad (vähem need, mida ignoreerid). Jooned ja avatud polyjooned ühtivad ka siis, kui on joonistatud vastupidi. Esimene objekt joonistusjärjekorras jääb alles ja säilitab oma omadused. Käsk teatab, mitu objekti kontrolliti ja kustutati: dubleeritud, kattuvad tükid ühendatud, tükid ühendatud otsast otsa. Üks {{cmd:UNDO}} võtab kõik tagasi. Seaded kehtivad, kuni sulged joonise akna.

See ei puuduta: lukustatud kihtidel olevaid objekte ja peidetud objekte. See ei ühenda jooni kõrgusega (Z) (täpsed dubleerid neist lähevad siiski), ja ei puuduta lõike polyjoone sees (neid ei õhendata), joont polyjoone lõigu peal ega suletud polyjooni, mis on joonistatud vastupidi.

### DRAWORDER

Muudab, millised objektid joonistatakse ees. `Select objects to re-order`, {{key:Enter}}, siis `Above objects`, `Under objects`, `Front` või `Back` ({{key:Enter}} = `Back`). `Above objects` ja `Under objects` küsivad viiteobjektid: valik läheb kohe kõige esimese neist ette või kõige tagumise taha. Valitud objektid säilitavad oma omavahelise järjekorra. Üks tagasivõtmise samm. Järjekord salvestatakse koos joonisega DWG-s ja DXF-is, kus see on järjekord, milles objektid kirjutatakse.

Ekraanil joonistatakse iga objekt joonise järjekorras, nagu teised programmid faili avades seda joonistavad: tahke viirutus, lai polyjoon või tekstimask katab taga olevad jooned ja teksti, ja ees olev katab seda. Kus joon ristub tekstiga, näitatakse mõlemat. Pildid ja lisatud PDF-lehed jäävad joonte alla. Väga suurel joonisel, kus täited ja jooned kattuvad ja vahelduvad rohkem kui 256 korda, säilitavad esimesed 256 oma järjekorra ja ülejäänud joonistavad oma täited joonte alla, et uuesti joonistamine jääks kiireks.

### TEXTTOFRONT

Toob tekstid, mõõdud ja juhikud kõige ette avatud ruumis: `Text`, `Dimensions`, `Leaders` või `All` ({{key:Enter}} = `All`). Üks tagasivõtmise samm. Ütleb, kui seda pole või kui need on juba ees.

### HATCHTOBACK

Saadab kõik avatud ruumi viirutused kõige taha, nii et täited ei kata enam jooni ja teksti salvestatud failis. Küsimusi ei ole. Üks tagasivõtmise samm.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Näitab ainult valitud objekte: kõik muu avatud ruumis läheb nähtamatuks kuni {{cmd:UNISOLATEOBJECTS}}. Erinevalt {{cmd:LAYISO}}-st töötab see objektidel, mille valid, olenemata nende kihtidest, ega muuda ühtegi kihti. Peidetud objekte ei joonistata, ei valita, ei püüta, ei suumita neile ega prindita, ja käsud, mis võtavad `ALL`, jätavad need vahele. See, mida joonistad, kui objektid on isoleeritud, näitub tavaliselt.

See kehtib ainult selle sessiooni jaoks: midagi sellest ei salvestu joonisega, see ei ole tagasivõtmise samm ja joonise uuesti avamisel näidatakse kõike. Kui objektid on peidetud, näitab staatusriba nuppu nende arvuga; klõpsa seda, et need uuesti näidata.

### HIDEOBJECTS

Peidab valitud objektid kuni {{cmd:UNISOLATEOBJECTS}}-ni. Samad reeglid, mis {{cmd:ISOLATEOBJECTS}}-il: ainult selleks sessiooniks, ei salvestu, ei ole tagasivõtmise samm.

### UNISOLATEOBJECTS

Aliased: `UNISOLATE`, `UNHIDE`. Näitab uuesti iga objekti, mille {{cmd:ISOLATEOBJECTS}} või {{cmd:HIDEOBJECTS}} peitis, ja ütleb, mitu tuli tagasi.

### LAYLOCKFADE

Määrab, kuidas lukustatud kihtidel olevad objektid välja näevad ja kas klõps neid kätte saab. See ütleb praeguse oleku ja võtab:

- arvu 0 kuni 90: tuhmumise määr protsentides (algseisuna 50). 0 lülitab tuhmumise välja.
- `ON` või `OFF`: tuhmumine sisse või välja, hoides määra.
- `Pick`, siis `Yes` või `No`: kas klõps võib valida lukustatud kihtidel olevaid objekte, kui ükski käsk ei tööta? `No` (algseade): neid ei saa üldse valida. `Yes`: klõps või aken valib need, et {{ui:Properties}} saaks neid näidata; neid ei saa siiski muuta, ja käsu enda `Select objects` ei võta neid kunagi.

Objektipüüdmised leiavad lukustatud kihtidel olevad objektid igal juhul. Prindid ei tuhmu kunagi. Mõlemad seaded on sinu, mitte joonise, ja on ka seadetes jaotises {{ui:Locked layers}}.

### BURST

Lõhub plokiviited ja säilitab, mida nende atribuudid ütlevad. `Select block references to burst`, {{key:Enter}}: iga viide asendatakse ploki objektidega, ja iga nähtava atribuudi väärtus muutub lihtsaks tekstiks sellel atribuudi enda kihil (atribuut kihil 0 läheb viite kihile, nagu ploki teised objektid kihil 0). Nähtamatud atribuudid kaovad. Plokk ploki sees jääb plokiviiteks. Üks tagasivõtmise samm; käsk ütleb, mitu viidet lõhuti ja mitu atribuudi väärtust muudeti tekstiks.

Keeldub seotud joonisest nime järgi (seo see enne või kopeeri sealt {{cmd:NCOPY}}-ga) ja jätab muud valitud objektid rahule. Plokiviidete puhul annab {{cmd:EXPLODE}} samad objektid; {{cmd:BURST}} võtab ainult plokiviited ja loeb atribuuditeksti.

### TXT2MTXT

Aliased: `T2M`. Ühendab üherealised tekstid üheks lõigutekstiks. `Select single-line text to join`, {{key:Enter}}, siis `Paragraph` (read jooksevad kokku ja murduvad laima rea laiuse järgi) või `Lines` (iga tekst jääb oma reaks); {{key:Enter}} võtab viimati kasutatu. Read järjestatakse ülevalt alla, siis vasakult paremale, mööda ülemise teksti suunda. Lõik ripub ülemise teksti vasakust ülanurgast ja võtab selle kõrguse, pöörde, stiili, kihi ja värvi. Üks tagasivõtmise samm.

Lõigutekst, mis on juba lõigutekst, tühi tekst ja muud objektid valikus jäetakse rahule, ja käsk ütleb, mitu.

### NCOPY

Kopeerib objekte plokiviitest või seotud joonisest joonisesse, ilma et midagi lahti lõhutaks. `Pick an object inside a block reference or a linked drawing`: objekt, mis on valiku lähim, kopeeritakse sinna, kus see näitub, sõltumata sellest, kui sügaval plokis see on; vali veel, siis {{key:Enter}}. Järgmine `Base point to move the copies`: {{key:Enter}} jätab need paika, või anna baaspunkt ja teine punkt. Kogu käsk on üks tagasivõtmise samm.

Koopia võtab kihi, millel see näitub: objekt kihil 0 plokis läheb selle viite kihile, kus ta istus, ja ByBlock värv muutub selle viite värviks. Seotud joonisest kiht `Plan|Walls` muutub `Plan$0$Walls`-iks (nimi, mille seos sellele annab), tehtud seotud kihi värvi, joontüübi ja joonepaksusega. Atribuudi väärtus kopeeritakse tekstina. Lukustatud kihtidel olevaid plokiviiteid ei saa valida.

### FLATTEN

Määrab valitud objektide kõrguse (Z) ja paksuse 0-ks. `Select objects to flatten`, {{key:Enter}}. See lamedab ka objektid plokidefinitsioonides, mida valik kasutab (ja plokid nende sees), nii et iga viide neile plokkidele muutub; seotud joonised jäetakse nii, nagu nad on. Üks tagasivõtmise samm; ta ütleb, mitu objekti muutus, ja ütleb, kui kellelgi polnud kõrgust ega paksust.

Mida CadCraft hoiab kolmandast mõõtmest 2D-joonisel, on: kõrgus ringidel, kaartel, ellipsidel, punktidel, tekstil, plokiviidetel, viirutustel, juhikutel ja polyjoontel (nende kõrgus), kõrgus iga joone igas otsas ning paksus joontel, ringidel, kaartel, polyjoontel, punktidel ja tekstil, nii nagu fail neid sisaldas. {{cmd:FLATTEN}} puhastab täpselt need. See ei puuduta 3D-mudelit vahelehel 3D, 3D-tahke ega tahkisi, ja objekt, mis on joonistatud kaldus tasandis, toodi juba joonise tasandisse, kui fail avati.

### BREAKLINE

Joonistab joone murdesümboliga, lühikese vaate jaoks. Ta ütleb praeguse suuruse ja ulatuse, siis `First point of the break line` (või `Size` / `Extension`, et need enne muuta), `Second point` ja `Where the break symbol sits`: klõpsa mööda joont või {{key:Enter}} keskele. Tulemus on üks polyjoon praegusel kihil: joon, mis ulatub iga punkti taha ulatusega, ja Z-kujuline joon, mis on sama kõrge kui suurus ja poole nii pikk.

`Size` ja `Extension` jäävad meelde sinu seadetena (suurus algab kaks korda mõõdu teksti kõrgusest korrutatuna mõõdu mõõtkavaga; ulatus on pool suurusest). {{key:Enter}} kordab käsku.

### AUDIT

Kontrollib avatud joonist kahjustuste suhtes ja parandab selle. {{cmd:AUDIT}} vaatab iga objekti mudelis, lehtedel ja plokkides, ja kihtide tabelit, ning loetleb leitu liigi järgi:

- arvud, mis pole lõplikud või on täiesti liiga suured;
- objektid ilma suuruseta: nullpikkusega joon, nullraadiusega ring, polyjoon ühe kohaga, tekst ilma tähtede või kõrguseta, nullmõõtkavaga plokiviide;
- objektid kihil, mida joonisel pole; viited plokile, mida pole; tekstide ja mõõtude stiilide nimed ja joontüüpide nimed, mida joonisel pole;
- plokid, mis sisaldavad iseennast, otse või muude plokkide kaudu;
- objektid, mis jagavad ID-d, võtit või failikäepidet;
- mõõdud ilma punktideta, millest need mõõdetakse, ja viirutused, mille piirjoon ei ole suletud kontuur.

Siis küsib ta `Fix them? [Yes/No]`. `No` ei muuda midagi. `Yes` parandab kõik ühe tagasivõtmise sammuga: see, mida ei saa joonistada, eemaldatakse (kehtetud arvud, ilma suuruseta objektid, puuduv plokk, katkine mõõt, viirutus ilma kasutatava piirjooneta, viide, mis sulgeb ploki ringi); puuduv kiht tehakse; tundmatud stiilide ja joontüüpide nimed lähevad tagasi vaikeväärtustele; jagatud võti asendatakse. Ta prindib, kui palju objekte eemaldati ja kui palju parandati. Samad leiud ilmuvad paneelis Probleemid, igaüks oma nupuga {{ui:Repair}}.

Ta ei keeldu millestki, aga kontrollib ainult seda, mida CadCraft ise joonistab: teistele programmidele hoitud andmeid (3D-tahkisid, OLE-objekte) ei avata.

### RECOVER

Avab kahjustatud DXF- või DWG-faili. {{cmd:RECOVER}} küsib faili, loeb, mida saab lugeda, selle asemel et faili tagasi lükata, loetleb, mida jättis vahele või eeldas, ja kontrollib ning parandab joonise nagu {{cmd:AUDIT}} teeb valikuga `Yes`.

- DXF: read, mis ei ole osa koodi- ja väärtuspaarist, jäetakse vahele, kuni paarid taas joonduvad; lõputa lõpetamata lõik suletakse; fail, mis on katki, loetakse kuni katkemiseni; binaarne DXF, mis on katki, loetakse kuni viimase tervikliku väärtuseni. Kui lõik, plokk või objekt siiski ei lähe lugemiseks, jäetakse see välja ja nimetatakse ning lugemine läheb edasi.
- DWG: objektid, mis ei läbi oma kontrolle või mida ei saa dekodeerida, jäetakse välja, ja kadunud objektide loend ehitatakse uuesti objektiandmeid läbides.

Ketast fail ei muutu. Taastatud joonis avaneb salvestamata: salvesta see uue nime all. Fail, millest ei saa midagi lugeda, lükatakse tagasi koos põhjusega.

### LEGACYTEXT

Teisendab vanade 8-bitiste vietnami fontidega kirjutatud teksti Unicode'iks. Lühinimed `TEXTTOUNICODE` ja `VNTEXT`.

Vanad vietnami joonised hoiavad oma teksti läänemärkidena, mida ainult font muudab vietnamikeelseks: TCVN3 tekst ABC-fontides (`.VnTime`, `.VnArial`, ja suurtähtedega fontid, mille nimed lõppevad `H`-ga), ja VNI tekst VNI-fontides (`VNI-Times`). CadCraft näitab sellist teksti loetavalt niipea, kui joonis avatakse, selle tekstistiili, objekti või lõigu sees oleva lõigu fondi järgi; fail hoiab ikka vanu märke.

{{cmd:LEGACYTEXT}} ütleb, mitu teksti ta leidis igas kodeeringus, ja küsib `Convert … to Unicode?`. `Yes` kirjutab iga ühe ümber (mudel, lehed, plokid, atribuutide väärtused ja määratlused) ning annab tekstistiilidele Unicode-fondi (Times New Roman, Arial või Courier New vana fondi liigi järgi), ühe tagasivõtmise sammuga. Vormindus lõigutekstis säilib.

Kui ükski tekst ei kasuta tuntud fonti (stiil, mis on kaotanud oma fondi nime), küsib see `Read selected texts as [Tcvn3/Vni/None]`: vali kodeering ja vali tekstid. Tekst, mis on juba Unicode, jäetakse rahule. Mõõdu teksti üleskirjutused ja mitmikjuhiku tekst ei muudeta.
