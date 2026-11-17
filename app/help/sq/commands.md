---
title: Referenca e komandave
summary: Çdo komandë në aplikacionin e vizatimit CadCraft, me shkurtesat, pyetjet që bën, opsionet dhe parazgjedhjet e saj.
keywords: komandat, alias, lista e komandave, sipërfaqe, perimetër, measuregeom, vijë, pline, rreth, hark, shkurto, ofset, dimlinear, bllok, insert, layout, printim, zmadhim, ndihmë, copyclip, cutclip, pasteclip, pasteorig, copybase, dublo, selectall
from: 7db2646b
---

Shkruaj emrin e një komande ose një alias dhe shtyp {{key:Enter}} ose {{key:Space}}. Shkronjat e vogla/të mëdha nuk kanë rëndësi, dhe një `_`, `-`, `.` ose `'` në fillim injorohet. Shkruaj `HELP` (ose `?`) për të shfaqur një listë të shkurtër të çdo komande në historikun e rreshtit të komandave; shtyp {{key:F1}} për këtë ndihmë.

Si lexohen kërkesat: opsionet janë në kllapa katrore, dhe zgjedh një duke shkruar shkronjat e saj të mëdha (`D` për Diametër). Një parazgjedhje është në kllapa këndore; shtyp {{key:Enter}} për ta pranuar. Aty ku kërkohet një pikë, mund të klikosh ose të shkruash çdo format nga [Hyrja e koordinatave dhe distancave](topic:coordinate-entry). Aty ku kërkohet një distancë, mund të shkruash një numër ose të klikosh dy pika.

Shtyp {{key:Enter}} aty ku kërkohet një pikë ose një objekt, dhe nuk ka parazgjedhje, për të përfunduar komandën. {{key:Esc}} e anulon. Çfarëdo që ka bërë një komandë është një hap zhbërjeje.

## Vizato

### LINE

Aliasi: `L`. Segmente të drejta, secili objekt i vetvetes.

- `Specify first point` (Enter: nis nga pika e fundit që dhe)
- `Specify next point [Undo]`, e përsëritur. Pas dy segmentesh: `[Undo/Close]`.
- `U` heq segmentin e fundit, `C` mbyll te pika e parë dhe përfundon. Enter përfundon.

### PLINE

Aliasi: `PL`. Një polivijë me segmente vije dhe harqesh.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close pasi ka dy segmente)
- `A` kalon në harqe: `Specify endpoint of arc [Line/CLose/Undo]`. Çdo hark vazhdon tangjent me segmentin para tij. `L` kthehet te vijat, `CL` mbyll me një hark.
- Enter përfundon; polivija mbetet e hapur.

### CIRCLE

Aliasi: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` pyet `Specify diameter of circle`.
- `2P`: dy skajet e një diametri. `3P`: tre pika në rreth.
- `T` (edhe komanda `TTR`, dhe {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Rreth: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, pastaj të dytën, pastaj rrezen (Enter: e fundit). Rrethi prek të dy objektet (vija, harqe, rrathë, segmente polivijash, edhe brenda blloqeve); nga rrathët që e bëjnë këtë, ai që prek më afër pikave të tua. "Circle does not exist" kur asnjë nuk përshtatet.
- `TTT` (ose {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Rreth: Tan, Tan, Tan}}): tre objekte; rrethi që i prek të tre, më afër pikave të tua (tri vija japin rrethin e brendshëm ose një të jashtëm, varësisht se ku klikon).

### ARC

Aliasi: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: një hark nëpër tre pika.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Harku shkon në drejtim kundër akrepave të orës nga fillimi te fundi.

### RECTANG

Aliasi: `REC`, `RECTANGLE`. Një polivijë e mbyllur.

- `Specify first corner point`, `Specify other corner point`. Shkruaj `@width,height` për cepin e dytë.

### POLYGON

Aliasi: `POL`. Një shumëkëndësh i rregullt si polivijë e mbyllur.

- `Enter number of sides <4>` (3 deri 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: kliko ose shkruaj një pikë; distanca e saj vendos madhësinë dhe drejtimi e rrotullon shumëkëndëshin.

### ELLIPSE

Aliasi: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, pastaj distanca te boshti tjetër.
- `I` (`Isocircle`, vetëm ndërsa {{cmd:ISODRAFT}} është i ndezur): qendra, pastaj rrezja ose `Diameter`: elipsi që një rreth shfaqet si në planin izometrik aktual.

### HATCH

Aliasi: `H`, `BH`, `BHATCH`; ose {{ui:Vijëzim}} në shirit. Shfaq fillimisht modelin, shkallën dhe këndin aktual.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, e përsëritur (`Undo` pasi të ketë një zonë): çdo klikim shton zonën e mbyllur rreth tij, me format e mbyllura brenda si ishuj. Enter bën një vijëzim nga të gjitha.
- `S`: `Select closed objects` (polivija të mbyllura, rrathë, elipse të mbyllura).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): mbushja është një gradient në vend të një modeli. Shih {{cmd:GRADIENT}} për pyetjet e tij.

Shih [Vijëzimi dhe zonat e mbushura](topic:hatch).

### GRADIENT

Aliasi: `GD`. Mbush një zonë me një gradient prej një ose dy ngjyrash. Pyet fillimisht për gradientin, pastaj vazhdon si {{cmd:HATCH}} (`Pick internal point`, `S` për objekte të mbyllura, {{key:Enter}} për të përfunduar).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, e përsëritur; çdo herë shfaq gradientin siç është tani.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ose një prej tyre i kthyer (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Shkronjat e para mjaftojnë.
- `O`: një ngjyrë, pastaj nuanca e saj nga 0 në 1 (0 e bën të zezë, 0.5 është vetë ngjyra, 1 e bën të bardhë). `TW`: ngjyra e parë dhe e dytë. Një ngjyrë është një numër nga 1 në 255, tre numra si `255,128,0`, ose `#rrggbb`.
- `A`: këndi ku shtrihet gradienti. `C`: Centered Yes ose No (No e zhvendos mesin e gradientit në një anë).
- Refuzon një ngjyrë ose lloj që nuk njeh, dhe një nuancë jashtë 0 deri 1.

{{cmd:HATCHEDIT}} `G` dhe Vetitë (Gradient) ndryshojnë më vonë një gradient, ose e kthejnë çdo vijëzim në një të tillë. Një gradient vizatohet në ekran dhe printohet. DWG 2004 dhe më vonë e ruajnë si një vijëzim gradient të vërtetë; DXF 2000 dhe DWG 2000 e ruajnë për CadCraft, dhe programet e tjera shohin një mbushje të ngurtë në ngjyrën e parë.

### HATCHGENERATEBOUNDARY

Aliasi: `HGB`. Bën sërish kufirin nga një vijëzim që e ka humbur. `Select hatches` (ose zgjidhi më parë), pastaj `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Çdo lak i vijëzimit bëhet një polivijë e mbyllur në shtresën e vijëzimit; polivijet e reja mbeten të përzgjedhura. Një skaj i lakuar kthehet si copa të shkurtra të drejta që mban vijëzimi.
- Me Yes vijëzimi ndjek kufirin e ri, si një vijëzim i bërë me {{cmd:HATCH}}. Një hap zhbërjeje.
- Thotë kur nuk është zgjedhur asnjë vijëzim.

### POINT

Aliasi: `PO`; ose {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Pikë}}. Objekte pikë, një për klikim, deri te Enter.

- `Specify a point`

### XLINE

Aliasi: `XL`; ose {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Vijë ndihmëse}}. Vija ndërtimi, pa fund në të dy anët. Shih [Vijat ndihmëse dhe rrezet](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, pastaj `Specify through point` për çdo vijë, deri te Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` pyet fillimisht `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, pastaj `Specify angle end point` për çdo vijë.
- `O`: `Specify offset distance [Through] <Through>`, pastaj `Select a line object` dhe `Specify side to offset` (ose `Specify through point`) për çdo vijë.

### RAY

Pa alias; ose {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Rreze}}. `Specify start point`, pastaj `Specify through point` për çdo rreze, deri te Enter.

### TEXT

Aliasi: `DT`, `DTEXT`; ose {{ui:Tekst}} në shirit. Tekst në një rresht; çdo rresht është objekt i vetvetes.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, pastaj `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, e përsëritur: çdo Enter fillon rreshtin tjetër poshtë. Enter në një rresht bosh përfundon. {{key:Space}} shkruan një hapësirë këtu.

### DIVIDE

Aliasi: `DIV`. {{cmd:DIVIDE}} vendos shenja në një vijë, hark, rreth, polivijë, spline ose elips që e presin atë në pjesë të barabarta. Zgjidh objektin, pastaj jep numrin e pjesëve (2 deri 32767). Një objekt i hapur merr një shenjë më pak se pjesët; një i mbyllur merr një shenjë edhe në fillim të tij. Vetë objekti nuk prehet. Shenjat janë pika; `Block` kërkon në vend një bllok të këtij vizatimi dhe nëse ai rrotullohet për të ndjekur objektin. Gjatësitë përgjatë splineve dhe elipseve matën me korda të shkurtra. Refuzon tekstin, vijëzimet dhe objektet e tjera që nuk kanë gjatësi.

### MEASURE

Aliasi: `ME`. {{cmd:MEASURE}} vendos një shenjë në çdo gjatësi të dhënë përgjatë një vije, harku, rrethi, polivijeje, splinei ose elipsi, duke numëruar nga skaji më afër ku klikove (një objekt i mbyllur: nga fillimi i tij). Jep gjatësinë duke e shkruar ose me dy pika. Skaji i largët i një objekti të hapur nuk merr shenjë. `Block` vendos një bllok në çdo shenjë në vend të një pike. Refuzon një gjatësi 0, një më të gjatë se objekti, dhe një që do të bënte më shumë se 32767 shenja.

### BOUNDARY

Aliasi: `BO`, `BPOLY`. {{cmd:BOUNDARY}} bën një polivijë të mbyllur rreth zonës që mban pika që zgjedh, nga çdo vijë, hark, rreth, polivijë dhe kurbë që e kufizojnë në ekran. Pjesët që shtrihen në një hark ose rreth kthehen si segmente harku; pjesët e elipseve dhe splineve kthehen si segmente të shkurtra të drejta. Me `Islands` të ndezur (cilësimi fillestar) çdo zonë e mbyllur brenda saj merr edhe një polivijë të vetën. Vazhdo të zgjedhësh pika; Enter përfundon. Objektet që kufizojnë zonën lihen siç janë. Thotë kur asnjë zonë e mbyllur nuk mban pikën.

### BLEND

{{cmd:BLEND}} vizaton një spline midis skajeve të dy kurbave të hapura. Zgjidh çdo kurbë afër skajit që do të lidhësh. `CONtinuity` zgjedh `Tangent` (spline del dhe arrin përgjatë të dy kurbave) ose `Smooth` (përkul edhe në mënyrën se si përkulen te skajet); zgjedhja mbahet për sesionin. Dy kurbat nuk ndryshohen. Refuzon objekte të mbyllura dhe dy skaje që tashmë takohen.

### REGION

Aliasi: `REG`. {{cmd:REGION}} kthen objektet e mbyllura në rajone: zona të sheshta që mund t'i bashkosh, prish dhe mat. Zgjidh rrathë, polivija të mbyllura, elipse të mbyllura ose spline të mbyllura, ose vija, harqe dhe polivija të hapura që mbyllin një lak skaj më skaj; çdo lak bëhet një rajon i vetëm dhe zëvendëson objektet nga të cilat erdhi. Harqet mbeten harqe; elipset dhe splinet bëhen segmente të shkurtra të drejta. Ajo që nuk është e mbyllur dhe nuk mbyll asnjë lak mbetet siç është, dhe thotë sa janë. Në vizatim një rajon është një ose më shumë polivija të mbyllura të mbajtura së bashku si grup pa emër, kështu që një klikim zgjedh të gjithë rajonin, dhe një kopje është rajon i vetin; programet e tjera që hapin skedarin shohin polivija të mbyllura.

Me rajone në vizatim, {{cmd:UNION}}, {{cmd:SUBTRACT}} dhe {{cmd:INTERSECT}} në skedën 2D punojnë me rajone: `UNION` bashkon rajonet e zgjedhura në një (rajonet që janë larg njëri-tjetrit bëhen një rajon me disa kontura), `SUBTRACT` pyet për rajonet nga të cilët zbritet, pastaj ato që hiqen (një vrimë mbetet pjesë e rajonit), `INTERSECT` mban zonën që kanë të gjithë të përbashkët. Secila thotë sipërfaqen e rezultatit dhe është një hap zhbërjeje. Refuzojnë kur nuk do të mbetej asgjë ose nuk ka asgjë të përbashkët. Në skedën 3D, dhe në një vizatim pa rajone, të njëjtat komanda punojnë me trupa të ngurtë si më parë.

## Ndrysho

### MTEXT

Aliasi: `MT`, `T`; ose {{ui:Paragraf}} në shirit. Tekst paragrafi që përshtatet me një gjerësi, i shkruar në vend.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: gjerësia përgjatë dy cepave është ku teksti mbështjellet. `H` pyet `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` dhe kalon cepin e dytë.
- Pastaj hapet një kuti mbi vizatim: shkruaj, {{key:Enter}} për paragraf të ri, {{key:Mod+Enter}} ose një klikim jashtë për të përfunduar, {{key:Esc}} për të anuluar. Shiriti i saj cakton lartësinë, hapësirën e rreshtave, gjerësinë dhe drejtimin. Shih [Shto tekst dhe etiketa](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliasi: `ED`, `DDEDIT`; ose kliko dy herë mbi një tekst. `Select a text to edit`, e përsëritur deri te {{key:Enter}}: çdo tekst hapet në të njëjtën kuti. Filluar mbi një tekst të përzgjedhur ose me klikim të dyfishtë, redakton atë dhe mbaron.

### ERASE

Aliasi: `E`, `DELETE`; ose shtyp {{key:Delete}} me objekte të përzgjedhura.

- `Select objects` (anashkalohet kur objektet janë tashmë të përzgjedhura)

### MOVE

Aliasi: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, shkruar si `dx,dy`.

### COPY

Aliasi: `CO`, `CP`. Kopjon aq herë sa jep pika.

`Array` te kërkesa për pikën e dytë bën një rresht menjëherë: jep numrin e artikujve (origjinali llogaritet si një), pastaj pikën ku shkon kopja e parë; të tjerat ndjekin me të njëjtën hapësirë. `Fit` e bën atë pikën e kopjes së fundit, me të tjerat të shpërndara njëtrajtësisht midis tyre.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, e përsëritur deri te Enter. `U` heq kopjen e fundit.

### ROTATE

Aliasi: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: gradë, pozitive në drejtim kundër akrepave të orës; ose kliko një pikë për të rrotulluar drejt saj.

### SCALE

Aliasi: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: shkruaj një faktor si `0.5` ose `2`. Një pikë e klikuar jep distancën e saj nga pika bazë si faktor.

### MIRROR

Aliasi: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Aliasi: `AL`; ose {{ui:Ndrysho}} › {{ui:Më shumë}} › {{ui:Përputh}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Me dy çifte: `Scale objects based on alignment points? [Yes/No] <N>`

Shih [Përputh objektet](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (ose përzgjedhja), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` kërkon pikën. Përzgjedhja mbetet.

### DISTRIBUTE

- `Select objects` (të paktën tre), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Të dy skajet mbeten; përzgjedhja mbetet.

### ALIGNPANEL

Aliasi: `ALP`; ose {{ui:Ndrysho}} › {{ui:Më shumë}} › {{ui:Përputh dhe shpërndaj}}. Hap panelin që nxjerr ALIGNTO dhe DISTRIBUTE me klikime.

### LASER

Aliasi: `LASERCUT`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Lazer…}}. Hap panelin Lazer mbi vizatim: çfarë bën çdo shtresë (prerje, vijë, gravim, mbushje, figurë), pamja paraprake, G-code GRBL për t'u ruajtur, dhe kornizimi dhe dërgimi nëpërmjet Web Serial. Shih [Dërgo një vizatim te lazeri](topic:laser-cutting).

### STRETCH

Aliasi: `S`; ose {{ui:Shtrij}}. `Select objects to stretch`: tërhiq dritare kryqëzuese (ose shkruaj `C`) mbi skajet për të lëvizur. `Specify base point [Displacement]`, `Specify second point`. Pikat brenda dritareve lëvizin: skajet e vijave, kulmet e polivijeve (segmentet harqe mbajnë lartësinë e tyre), pikat e përmasave; rrathët, elipset, teksti, pikat dhe blloqet lëvizin tërësisht kur qendra ose pika e futjes është brenda. Një përzgjedhje e bërë para komandës mban dritaret kryqëzuese (dhe lasso-t) që e bënë, që t'i shtrijë në të njëjtën mënyrë. Pa dritare, objektet lëvizin të tërë.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliasi: `AR`; ose {{ui:Grup}}. `Select objects`, pastaj `Enter array type [Rectangular/POlar] <Rectangular>` (vetëm ARRAY).

- Rectangular fillon me 4 kolona × 3 rreshta, me hapësirë 1.5 herë madhësia e objekteve, shfaqur si pamje paraprake. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pyet kolonat dhe rreshtat, `S` distancat midis kolonave dhe midis rreshtave (negative shkon majtas ose poshtë), `COL` dhe `R` nga një drejtim.
- Polar pyet `Specify center point of array`, fillon me 6 artikuj rreth gjithë rrethit, të rrotulluar. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` artikujt, `F` këndi për t'u mbushur (+ kundër akrepave, − sipas akrepave), `ROT` Yes ose No.
- {{key:Enter}} (eXit) bën kopjet, si objekte të thjeshta. Një hap zhbërjeje.
- `AS` (ASsociative) kalon midis kopjeve të thjeshta dhe një grupi që mbetet i redaktueshëm: një objekt që e ndryshon më vonë me {{cmd:ARRAYEDIT}}, me kapëset ose te Vetitë. Zgjedhja mbahet mend ({{cmd:ARRAYASSOCIATIVITY}}); fillon me kopje të thjeshta.

### ARRAYPATH

Kopje përgjatë një kurbe. `Select objects`, pastaj `Select path curve`: një vijë, hark, rreth, elips, polivijë ose spline (jo një nga objektet që po grupohen). Shtegu fillon nga skaji i tij më afër objekteve, dhe artikulli i parë është objektet aty ku janë.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, me pamje paraprake. `M`: `Divide` shpërndan artikujt njëtrajtësisht përgjatë gjithë shtegut, `Measure` vendos një në çdo distancë të caktuar. `I`: numri i artikujve (me Measure, 0 do të thotë sa të ngjajnë); një numër më i madh se fundi i shtegut kufizohet në sa ngjan. `SP`: distanca midis artikujve përgjatë shtegut (kalon në Measure). `AL`: Yes e kthen çdo artikull që të ndjekë shtegun, No i mban drejt.
- `AS` si te {{cmd:ARRAY}}. Me të ndezur, grupi mban kopjen e vet të formës së shtegut: ndryshimi i kurbës së shtegut më vonë nuk i lëviz artikujt.
- Refuzon një shteg që nuk është kurbë, dhe një artikull.

### ARRAYEDIT

Ndryshon një grup të bërë me ASsociative. `Select array` (ose zgjidhe më parë). Shfaq se si është tani grupi, pastaj pyet deri te {{key:Enter}}:

- Rectangular: `COL` kolonat dhe hapësirën e tyre, `R` rreshtat dhe hapësirën e tyre, `A` këndi ku shtrihen kolonat.
- Polar: `I` artikujt, `F` këndi i mbushjes, `ROT` rrotullo artikujt Yes ose No.
- Path: `M` Divide ose Measure, `I` artikujt, `SP` hapësira, `AL` vendos në linjë me shtegun.
- `S` (Source) hap objektet që përsërit grupi, veç e veç, si redaktori i blloqeve. Vizato dhe ndrysho aty; {{cmd:ARRAYCLOSE}} ruan ose hedh, dhe çdo artikull ndjek.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, pastaj kliko artikujt që do të zëvendësohen, {{key:Enter}}. Ata artikuj tregojnë zëvendësuesin; objektet zëvendësuese largohen nga vizatimi dhe jetojnë në grup. `RES` (RESet) tregon sërish objektet burimore në çdo artikull.
- Çdo ndryshim është një hap zhbërjeje. Refuzon kopjet e thjeshta, një referencë blloku të thjeshtë dhe një grup në një shtresë të kyçur.

Të njëjtat numra janë te Vetitë te Grup, dhe grupi ka kapëse: pika e tij bazë e lëviz, kapëza te artikulli i dytë cakton hapësirën, kapëza pas artikullit të fundit cakton numrin (polar: artikulli i dytë cakton sa artikuj, artikulli i fundit këndin e mbushjes). {{cmd:EXPLODE}} e kthen grupin në kopje të thjeshta.

### ARRAYCLOSE

Mbyll {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Thotë kur nuk është e hapur asnjë objekt burimor grupi. {{cmd:BCLOSE}} bën të njëjtën gjë.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Cakton nga çfarë fillojnë {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR dhe {{cmd:ARRAYPATH}}; opsioni i tyre `AS` ndryshon të njëjtin cilësim. Mbahet mend në këtë shfletues.

### OFFSET

Aliasi: `O`. Vija, harqe, rrathë dhe polivija.

Aty ku një polivijë lëviz nga jashtë dhe segmentet e saj të drejta ndahen në një cep, {{cmd:OFFSETGAPTYPE}} vendos si mbyllet hapësira.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, pastaj `Specify point on side to offset` (ose, me Through, `Specify through point`), e përsëritur deri te Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: si mbyll {{cmd:OFFSET}} hapësirat te cepat e jashtme të një polivije. `0` zgjat segmentet deri sa takohen (cilësimi fillestar), `1` i bashkon me një hark rreth cepit të vjetër, `2` me një prerje të drejtë. Cepat e brendshëm dhe segmentet harqe nuk preken. Mbahet për këtë sesion.

### EXTRIM

{{cmd:EXTRIM}} shkurton çdo gjë në një anë të një skaji. Zgjidh skajin prerës (një vijë, hark, rreth, polivijë, elips, spline ose vijë ndërtimi), pastaj zgjidh një pikë në anën që do të pastrohet: çdo vijë, hark, rreth, polivijë dhe vijë ndërtimi që kryqëzon skajin humbet pjesën e vet në atë anë, ku fillon te skaji. Ndërsa zgjedh anën, pjesët që do të largohen ndjekin treguesin. Për një skaj të mbyllur anët janë brenda dhe jashtë. Objektet që vetëm prekin skajin, dhe teksti, vijëzimet, splinet dhe elipset që e kryqëzojnë, lihen siç janë. Një hap zhbërjeje.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: si fillojnë {{cmd:TRIM}} dhe {{cmd:EXTEND}}. `1` Quick: çdo objekt është skaj prerës ose kufi. `0` Standard: pyesin fillimisht për skajet. Gjithashtu `(setvar "TRIMEXTENDMODE" 0)` në LISP.

### TRIM

Aliasi: `TR`. Shfaq fillimisht `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. Në modalitetin Quick çdo objekt i dukshëm është skaj prerës, dhe një objekt që asgjë nuk e kryqëzon fshihet; në modalitetin Standard pyet fillimisht `Select cutting edges (Enter = every object)` dhe pret vetëm aty.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, e përsëritur: kliko copën për ta hequr (shfaqet gri dhe me vija kur treguesi qëndron mbi të), tërhiq një shteg nëpër disa pjesë (të gjitha në një hap), ose kliko dy vende boshe për një gardh midis tyre. {{key:Shift}} zgjat në vend të kësaj. `T` zgjedh skajet prerëse (modaliteti Standard), `F` pyet pikat e gardhit, `C` dy cepa dritareje (pjesët brenda pjesërisht shkojnë), `O` pyet `Enter a trim mode option [Quick/Standard]`, `E` pyet `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` fshin objektet që zgjedh, `U` zhbën zgjedhjen ose tërheqjen e fundit. Enter përfundon. Shih [Shkurto dhe zgjat](topic:trim-and-extend).
- Një klikim mbi një vijëzim e pret atë: skajet prerëse e ndajnë zonën e vijëzuar, dhe pjesa ku klikove hiqet (nuk mbetet asnjë kontur i vizatuar aty ku ishte). Vijëzimi mban modelin ose gradientin e vet; një vijëzim që ishte i lidhur me kufirin e vet nuk është më i lidhur pas kësaj, sepse nuk e mbush më. Thotë kur asnjë skaj prerës nuk e ndan vijëzimin aty, kur klikimi është jashtë vijëzimit, dhe kur nuk do të mbetej asgjë (përdor {{cmd:ERASE}}). Një shteg ose gardh i tërhequr nuk pret vijëzimet.

### EXTEND

Aliasi: `EX`. Njëlloj si TRIM, por nga ana tjetër: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Një klikim zgjat skajin më të afërt deri te kufiri i radhës; një shteg ose gardh i tërhequr zgjat çdo objekt që kryqëzon; {{key:Shift}} shkurton. `B` zgjedh skajet kufi (modaliteti Standard). Mode dhe Edge ndahen me TRIM.

### LINKVIEWS

Aliasi: `SYNCVIEWS`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Lidh pamjet e paneleve}}, ose ikona e lidhjes në skedat e vizatimit. `Link the panes' views [ON/OFF]` (Enter e kalon në gjendjen tjetër): ndërsa është e ndezur, një lëvizje ose zmadhim në panelin aktiv lëviz çdo panel që tregon të njëjtin lloj hapësire. Shih [Ndaj ekranin](topic:split-screen).

### OPENIN3D

Pa alias; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Hap në ModelCraft}} ku aplikacioni i modelimit 3D pranon një vizatim të dorëzuar. E hap atje në një skedë të re, si DWG (asgjë nuk ngarkohet). Nëse shfletuesi bllokon skedën, e thotë.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: çfarë vizaton shtypja dhe tërheqja mbi një vend bosh. E njëjta gjë me Cilësimet › CadCraft › Tërhiq për të zgjedhur. Shih [Zgjedhja me lasso](topic:lasso-selection).

### FILLET

Aliasi: `F`. Vija, harqe, rrathë dhe polivija. Shfaq fillimisht `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` pyet `Specify fillet radius <last>`. `T` pyet `Enter Trim mode option [Trim/No trim]`: me No trim objektet mbeten siç janë dhe shtohet vetëm harku.
  - `M` e mban komandën për më shumë cepa deri te {{key:Enter}}; `U` heq cepin e fundit pa dalë nga komanda.
  - `P` pyet `Select 2D polyline [Radius]` dhe rrumbullakos çdo cep ku takohen dy segmente të drejta. Rrumbullakimet që ka tashmë zëvendësohen nga rreze e re; rreze 0 i heq. Cepat ku anët janë shumë të shkurtra për rrezen mbeten dhe numërohen.
- `Select second object or shift-select to apply corner [Radius]`. Mbaj {{key:Shift}} ndërsa klikon për një cep të mprehtë, pavarësisht nga rrezja.

Kliko çdo objekt te pjesa që do të mbash. Dy vija që nuk takohen zgjaten. Dy vija paralele marrin një gjysmërreth nëpër hapësirë, te skaji i vijës së parë më afër klikimit tënd. Një rreth nuk pritet kurrë. Dy segmente të së njëjtës polivijë pranë njëri-tjetrit marrin harkun brenda polivijës; një polivijë dhe një objekt tjetër punojnë kur prerja bie te segmenti i parë ose i fundit i polivijës.

### CHAMFER

Aliasi: `CHA`. Vija dhe segmentet e drejta të polivijeve. Shfaq fillimisht distancat aktuale (ose gjatësinë dhe këndin).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` pyet `Specify first chamfer distance <last>` dhe `Specify second chamfer distance <the first>`: e para pritet nga vija e parë që zgjedh, e dyta nga tjetra.
  - `A` pyet `Specify chamfer length on the first line` dhe `Specify chamfer angle from the first line`.
  - `E` (mEthod) zgjedh cilën nga dy përdor prerja e radhës. `T`, `M`, `U` dhe `P` punojnë si te {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klikim bën një cep të mprehtë.

Një distancë më e gjatë se vija refuzohet (`Distance is too large.`).

### BREAK dhe BREAKATPOINT

Aliasi: `BR`. `Select object` (aty ku klikon është pika e parë), `Specify second break point [First point]`; `F` pyet `Specify first break point` dhe `Specify second break point`. Pjesa ndërmjet hiqet; te një rreth, në drejtim kundër akrepave nga pika e parë. BREAKATPOINT pyet `Specify break point` dhe e ndan objektin në dy aty (jo një rreth).

### LENGTHEN

Aliasi: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: një zgjedhje shfaq `Current length` (dhe këndin e përfshirë të një harku) dhe pyet sërish. `DE` pyet `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` tërheq. Pastaj `Select an object to change [Undo]`, e përsëritur: fundi më afër klikimit lëviz. Vija, harqe dhe polivija të hapura.

### JOIN

Aliasi: `J`. `Select objects to join`. Vijat, harqet dhe polivijat e hapura që takohen skaj më skaj bëhen polivija (të mbyllura kur zinxhiri mbyllet); vijat në të njëjtën drejtëz bëhen një vijë; harqet e të njëjtit rreth bëhen një hark ose rrethi. Historiku thotë sa objekte u bashkuan dhe sa nuk u bashkuan.

### MATCHPROP

Aliasi: `MA`, `PAINTER`. `Select source object`, pastaj `Select destination objects [Settings]` dhe {{key:Enter}}. Kopjon shtresën dhe ngjyrën, dhe midis objekteve të të njëjtit lloj lartësinë dhe gjerësinë e tekstit, madhësitë e përmasave, ose modelin e vijëzimit. `S` pyet `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, e përsëritur deri te {{key:Enter}}; zgjedhja mbahet për sesionin.

### EXPLODE

Aliasi: `X`. Polivijat bëhen vija dhe harqe, referencat e blloqeve bëhen objektet e tyre, përmasat bëhen vija, koka shigjetash dhe tekst. Një grup që mbetet i redaktueshëm ({{cmd:ARRAYEDIT}}) bëhet kopje të thjeshta të objekteve të tij.

- `Select objects`

### GROUP

Aliasi: `G`. {{cmd:GROUP}} i jep objekteve të përzgjedhura një emër të përbashkët. Zgjidh objektet, pastaj shkruaj një emër (pa hapësira; `?` liston grupet; Enter bën një grup pa emër) dhe, për një grup me emër, një përshkrim opsional. Që tani një klikim mbi një prej tyre, ose një dritare që përfshin një, i përzgjedh të gjithë, kështu që lëvizin, kopjohen dhe fshihen bashkë; çdo objekt mbetet objekti i vetes. Një objekt mund të jetë në disa grupe. Kopja e një grupi të tërë është një grup i ri pa emër; kopja e një anëtari vetëm bashkohet me grupin. Grupet i përkasin hapësirës ku u bënë (modeli ose një fletë). Ruhen kur ruan si DWG ose DXF dhe hap sërish skedarin në CadCraft; skedarët DXF 2000 i mbajnë edhe si objekte grupi për programet e tjera, dhe grupet e bëra në një program tjetër lexohen kur hapet një DXF ose DWG.

### UNGROUP

{{cmd:UNGROUP}} i çmonton grupet: zgjidh objekte të grupeve (çdo grup në të cilin janë çmontohet) ose shkruaj `Name` dhe emrin e grupit. Objektet mbeten në vizatim. Një hap zhbërjeje i kthen grupet.

### GROUPEDIT

{{cmd:GROUPEDIT}} ndryshon një grup. Zgjidh një nga objektet e tij, ose `Name` dhe emrin e tij; një grup që është tashmë i përzgjedhur merret ashtu siç është. Pastaj: `Add` objekte (të zgjedhura një nga një, jo grup pas grupi), `Remove` objekte, `REName` grupin, ndrysho `Description`-n e tij, ose cakto `Selectable` (nëse një klikim mbi një objekt përzgjedh të gjithë grupin). `eXit` ose Enter përfundon. Një grup pa asnjë objekt është zhdukur.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: me `1` (cilësimi fillestar) një klikim ose dritare mbi një objekt të grupuar përzgjedh të gjithë grupin; me `0` objekte të vetme, që të redaktosh një anëtar. Mbahet për këtë sesion.

## Kujtesa e ndërmjetme

Kujtesa e ndërmjetme e CadCraft-it: punon brenda një vizatimi, midis vizatimeve dhe midis skedave të CadCraft-it në këtë shfletues. Shih [Kopjo, ngjit dhe dublo](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ose {{ui:Kopjo}} në grupin {{ui:Redakto}}. Kopjon objektet në kujtesën e ndërmjetme, me blloqet dhe shtresat që përdorin. Objektet mbeten të përzgjedhura.

- `Select objects to copy` (anashkalohet kur objektet janë tashmë të përzgjedhura)

### CUTCLIP

{{key:Mod+X}}, ose {{ui:Prit}} në menynë {{ui:Më shumë}}. Kopjon objektet në kujtesën e ndërmjetme, pastaj i fshin (një hap zhbërjeje).

- `Select objects to cut` (anashkalohet kur objektet janë tashmë të përzgjedhura)

### COPYBASE

Kopjon objektet në kujtesën e ndërmjetme me një pikë bazë që zgjedh; ngjitja e vendos atë pikë.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, ose {{ui:Ngjit}} në grupin {{ui:Redakto}}. Kopja ndjek kursorin, duke u varur nga cepi i poshtëm-majtas i kufijve të saj (ose nga qendra e saj, ose nga pika e COPYBASE; shih [Cilësimet e CadCraft](topic:settings)).

- `Specify insertion point`

Objektet e ngjitura janë të përzgjedhura. Një bllok që vizatimi e ka tashmë me të njëjtin emër mban përkufizimin e këtij vizatimi.

Kur një zonë e kopjuar në MarkupCraft është më e re se ajo që kopjoi CadCraft (dhe më pak se 6 orë e vjetër), {{key:Mod+V}} dhe `PASTECLIP` e ngjisin atë zonë: shih `PASTEAREA`.

### PASTEAREA

Aliasi: `PAREA`. {{ui:Ngjit një zonë të kopjuar}} në menynë {{ui:Më shumë}}. Ngjit një zonë të kopjuar me {{ui:Kopjo zonën}} në MarkupCraft si figurë në madhësinë e saj reale. Shih [Figurat në një vizatim](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (vetëm kur fleta nuk kishte shkallë vizatimi): një numër, {{key:Enter}} për madhësinë e letrës, ose `P`, pastaj `First point on the pasted area`, `Second point on the pasted area` dhe distanca e tyre reale.

### PASTEORIG

{{key:Mod+Shift+V}}, ose {{ui:Ngjit në vend}} në menynë {{ui:Më shumë}}. Ngjit në koordinatat nga ku u kopjuan objektet. Nuk pyet asgjë.

### DUPLICATE

Aliasi: `DUP`. {{key:Mod+D}}, ose {{ui:Dublo dhe zhvendos}} në menynë {{ui:Më shumë}}. Një kopje e objekteve lëviz me treguesin nga vendi ku janë; {{key:Esc}} nuk lë asgjë. Nuk e përdor kujtesën e ndërmjetme.

- `Select objects to duplicate` (anashkalohet kur objektet janë tashmë të përzgjedhura)
- `Specify where the copy goes (Esc leaves nothing)`: kliko, shkruaj një pikë, `@dx,dy` (nga aty ku ishte treguesi), ose një distancë drejt kursorit.

### SELECT

Pyet `Select objects` (me çdo opsion më poshtë) dhe lë atë që zgjodhe të përzgjedhur, për komandën pasuese ose për `P` më vonë.

### QSELECT

Aliasi: `QS`. Në shfletues, dialogu {{ui:Përzgjedhje e shpejtë}} (shih [Zgjidh objektet](topic:select-objects#select-by-a-rule-quick-select)). Pa të, rreshti i komandave pyet `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` dhe `Enter value`. Përputhjet bëhen përzgjedhja.

### SELECTSIMILAR

Aliasi: `SIM`. `Select objects [SEttings]` (ose përzgjedhja aktuale): zgjedh çdo objekt të të njëjtit lloj me të njëjtën shtresë dhe ngjyrë (dhe emrin e bllokut, modelin e vijëzimit). `SE` pyet `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, e përsëritur deri te {{key:Enter}}.

### FIND

Pa alias; ose {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Gjej dhe zëvendëso}}. Në shfletues, dialogu {{ui:Gjej dhe zëvendëso}} (shih [Shto tekst dhe etiketa](topic:text#find-and-replace-words)). Pa të: `Enter text to find`, pastaj `Enter replacement text (Enter: select what is found)`. Kërkon në tekst, vlera atributesh dhe tekst përmasash, në skedën e hapur ose në përzgjedhje.

### SELECTALL dhe DESELECT

`SELECTALL` (aliasi `AI_SELALL`, {{key:Mod+A}}) zgjedh çdo objekt që mund ta redaktosh në skedën e hapur. `DESELECT` (aliaset `AI_DESELECT`, `SELECTNONE`; ose {{key:Esc}}) pastron përzgjedhjen.

## Përmasat

### DIMLINEAR

Aliasi: `DLI`, `DIMLIN`. Distancë horizontale ose vertikale.

- `Specify first extension line origin [Select object]` (Enter ose `S`: `Select object to dimension`, pastaj kliko një segment vije, harku, rrethi ose polivijeje)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` pyet për tekst (`<>` është vlera e matur), `H` dhe `V` caktojnë drejtimin, `R` pyet `Specify angle of dimension line <0>`.

### DIMALIGNED

Aliasi: `DAL`, `DIMALI`. Distanca reale midis dy pikave.

- Origjinat si te {{cmd:DIMLINEAR}}, pastaj `Specify dimension line location [Text]`.

### DIMANGULAR

Aliasi: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Hark: këndi i tij. Rreth: `Specify second angle endpoint`. Vijë: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: kliko brenda këndit për ta matur.

### DIMRADIUS dhe DIMDIAMETER

Aliasi: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, pastaj `Specify dimension line location [Text]`.

### DIMCONTINUE

Aliasi: `DCO`, `DIMCONT`. Vazhdon nga përmasa e fundit lineare ose e drejtuar e bërë (ose pyet `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, e përsëritur deri te Enter.

### DIMBASELINE

Aliasi: `DBA`, `DIMBASE`. Njëlloj si {{cmd:DIMCONTINUE}}, por çdo përmasë nis nga origjina e parë dhe renditet më larg.

### DIMORDINATE

Aliasi: `DOR`, `DIMORD`. `Specify feature location`, pastaj `Specify leader endpoint [Xdatum/Ydatum/Text]`. Shkruan sa larg është elementi nga origjina e UCS përgjatë X ose Y, në një udhëheqës: një udhëheqës që shkon kryesisht lart ose poshtë lexohet X, një që shkon anash lexohet Y; `Xdatum` dhe `Ydatum` e caktojnë cilin. Cakto fillimisht origjinën me {{cmd:UCS}} (pa një, është 0,0 i vizatimit). Kapëzat lëvizin elementin, origjinën dhe fundin e udhëheqësit, dhe vlera ndjek. Ruhet si përmasë ordinate e vërtetë në DWG dhe DXF. Refuzon një fund udhëheqësi mbi vetë elementin.

### DIMARC

Aliasi: `DAR`. `Select arc or polyline arc segment`, pastaj `Specify arc length dimension location [Text]`. Mat përgjatë harkut (jo kordës) dhe shkruan simbolin e harkut përpara vlerës. Refuzon një rreth të plotë, një vijë ose një segment të drejtë polivijeje. Një DWG e ruan si përmasë gjatësie harku; një DXF e ruan si përmasë këndore me gjatësinë si tekst, dhe CadCraft e hap sërish si përmasë gjatësie harku.

### DIMJOGGED

Aliasi: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Një përmasë rrezeje për një kurbë, qendra e së cilës është larg ose jashtë fletës: vija e përmasës fillon te pika që jep në vend të qendrës, me një thyerje në të, dhe akoma shkruan rrezen e vërtetë. Një DWG e ruan si përmasë rrezeje e thyer; një DXF e ruan si përmasë rrezeje, dhe CadCraft e hap sërish të thyer.

### DIMJOGLINE

Aliasi: `DJL`. `Select dimension to add jog [Remove]`, pastaj `Specify jog location (or press Enter)`. Vendos një simbol thyerjeje në vijën e një përmase lineare ose të drejtuar, për të treguar që distanca nuk është vizatuar në shkallë; vlera nuk ndryshon. `Remove` e heq. Refuzon lloje të tjera përmasash.

### QDIM

Pa alias. `Select geometry to dimension`, pastaj `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Përmason disa objekte në një hap, nga skajet e vijave dhe segmenteve të polivijeve, qendrat e rrathëve dhe harqeve, pikat dhe referencat e blloqeve. Një pozicion mbi ose nën objekte mat përtej, një pozicion anash mat lart. `Continuous` lidh pikat në zinxhir, `Baseline` mat të gjitha nga e para, `Staggered` vendos çifte nga mesi nga jashtë, `Ordinate` i jep çdo pike distancën e saj nga baza (`datumPoint` zgjedh një të re), `Radius` dhe `Diameter` përmasojnë çdo rreth dhe hark që zgjidhet. Mënyra mbahet mend. Gjithçka që bën është një hap zhbërjeje. Thotë kur janë më pak se dy pika, ose kur nuk ka harqe ose rrathë për Radius dhe Diameter.

### DIMBREAK

Aliasi: `DBREAK`. `Select dimensions to add or remove breaks`, pastaj `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` lë një hapësirë në vijat e përmasës dhe të zgjatimit aty ku kryqëzohet një objekt tjetër, dhe i llogarit sërish hapësirat kur ato objekte ose përmasa lëvizin. `Manual` (një përmasë) pyet dy pika dhe lë një hapësirë midis tyre. `Remove` heq çdo hapësirë. Hapësira është 1.5 herë lartësia e tekstit të përmasës.

### DIMSPACE

Pa alias. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Lëviz vijat e përmasave lineare dhe të drejtuara paralele (ose këndore rreth të njëjtës kulm) që të jenë në të njëjtën distancë njëra nga tjetra, të matura nga përmasa bazë, secila në anën ku është. `0` i radhit me bazën; `Auto` është dyfishi i lartësisë së tekstit të përmasës bazë. Përmasat që nuk janë paralele me bazën lihen rehat.

### DIMINSPECT

Pa alias. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Vizaton një kornizë rreth vlerës me një etiketë përpara saj dhe normën e inspektimit pas saj. `remove` heq kornizën. Teksti i tolerancës qëndron me vlerën.

### DIMOVERRIDE

Aliasi: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, sërish deri te Enter, pastaj `Select dimensions`. Ndryshon ato cilësime vetëm te përmasat e përzgjedhura; stili i përmasës nuk ndryshon. Merr variablat që janë numër ose ndërprerës (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` i kthen përmasat e përzgjedhura te stili i tyre. Refuzon një emër që nuk është një variabël e tillë dhe një vlerë që nuk mund ta marrë.

### DIMREASSOCIATE

Aliasi: `DRE`, `DIMREASSOC`. `Select dimensions`, pastaj për secilën origjinat e vijave të zgjatimit të saj (`Specify first extension line origin on an object`: kap te një skaj ose mes të një vije, kulm polivijeje, qendër; Enter e mban pikën të lirë), ose për një përmasë rrezeje, diametri, rreze të thyer ose gjatësie harku `Select arc or circle`. Përmasa lidhet pastaj me ato objekte: kur ata lëvizin ose ndryshojnë madhësi ndjek në të njëjtin hap zhbërjeje dhe matet sërish. Lëvizja dorazi e një pike të lidhur, ose fshirja e objektit, e këput lidhjen. Lidhja ruhet në DWG dhe DXF 2000 si të dhënat e vetë CadCraft; programet e tjera shohin një përmasë të zakonshme.

### DIMDISASSOCIATE

Aliasi: `DDA`, `DIMDISASSOC`. `Select dimensions`. I liron nga objektet me të cilat janë lidhur; asgjë nuk lëviz.

### CENTERMARK

Aliasi: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, sërish deri te Enter. Vizaton një kryq në qendër dhe katër vija qendre deri pak përtej kurbës (lloji i vijës CENTER), si vija të zakonshme në shtresën aktuale; madhësia nga madhësia e shigjetës dhe shkalla e përgjithshme e cilësimeve aktuale të përmasave, i kthyer me UCS. Nuk ndjekin rrethin nëse ai lëviz.

### CENTERLINE

Aliasi: `CL`. `Select first line`, `Select second line`. Vizaton një vijë në mes të dy vijave (përgjatë bisektorit kur takohen), pak më të gjatë se ato, në llojin e vijës CENTER. Një vijë e thjeshtë: nuk ndjek dy vijat.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Pa alias. Çdo një pyet `Enter new value for … <current>` dhe cakton atë madhësi për përmasa **të reja**: shkallën e përgjithshme, lartësinë e tekstit, madhësinë e shigjetës, vende dhjetore (deri në 8), hapësirën rreth tekstit, zgjatimin përtej vijës së përmasës, zhvendosjen nga origjina. Shih [Cakto madhësitë e përmasave](topic:dimension-settings).

### DIMLUNIT

Cilësim përmasash: formati i përmasave të reja vetëm (1 shkencor, 2 dhjetor, 3 inxhinierik, 4 arkitektonik, 5 thyesor).

### DIMSTYLE dhe -DIMSTYLE

Aliasi: `DST`, `DDIM`, `D`. Menaxheri i stileve të përmasave: {{ui:Cakto aktualen}}, {{ui:E re…}}, {{ui:Modifiko…}}, {{ui:Riemëro…}}, {{ui:Fshi}}, {{ui:Krahaso…}}, {{ui:Apliko te të zgjedhurat}}. `-DIMSTYLE` në rreshtin e komandave: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Shih [Cakto madhësitë e përmasave](topic:dimension-settings#named-dimension-styles).

### DIMEDIT dhe DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, pastaj përmasat (ose ato që janë tashmë të zgjedhura). New pyet për tekstin (`<>` = matja); Rotate për një kënd (0 e kthen tekstin); Oblique për këndin e vijave të zgjatimit nga boshti X (Enter = asnjë; vetëm përmasat lineare dhe të drejtuara). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Shih [Cakto madhësitë e përmasave](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliasi: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, ose me përmasa të zgjedhura `Units in the text of the selected dimensions`. Shkruan gjatësinë e matur në atë njësi me njësinë pas saj (DIMLFAC dhe një mbaresë DIMPOST); `D` kthehet te njësitë e vizatimit. Shih [Përmasat në mm, cm, m ose km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliasi: `RC`. Shfaq `Arc length: … Type: …`, pastaj `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular pyet `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand ndjek treguesin deri te një klikim ose {{key:Enter}}; `O` pyet `Select object` dhe `Reverse direction? [Yes/No] <N>` dhe e kthen objektin në re. `A` pyet `Specify the length of each arc`. `R`, `P` dhe `F` zgjedhin llojin për retë e radhës. Rezultati është një polivijë e mbyllur me harqe.

### MLEADER

Aliasi: `MLD`; ose {{ui:Udhëheqës}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, pastaj teksti në kutinë në vend (ose, pa të, `Enter text (an empty line ends)`). `Block` pyet fillimisht emrin e një bloku dhe udhëheqësi i shumëfishtë e tregon atë bllok në vend të tekstit. Më shumë vija udhëheqëse: {{cmd:MLEADEREDIT}}. Ruhet si udhëheqës i shumëfishtë i vërtetë në DWG; DXF e mban vijat, kokën e shigjetës dhe tekstin që vizaton.

### MLEADEREDIT

Aliasi: `MLE`. `Select a multileader`, pastaj `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: çdo pikë shton një vijë udhëheqëse nga një kokë e re shigjete te i njëjti vend ulje, deri te Enter. `Remove leaders` heq pastaj vijën udhëheqëse ku klikon (një udhëheqës i shumëfishtë mban të paktën një). `Block content` pyet një emër bllok dhe e tregon atë në vend të tekstit (atributet e tij kërkohen); `Text content` e kthen tekstin. Çdo vijë udhëheqëse ka kapësen e vet. Një DWG i mban të gjitha vijat udhëheqëse dhe bllokun në një udhëheqës të shumëfishtë.

### MLEADERALIGN

Aliasi: `MLA`. `Select multileaders`, pastaj `Select multileader to align to [Distribute/Spacing/Use current spacing]` dhe `Specify direction`. Zhvendos vendet e ulje të udhëheqësve të tjerë (dhe tekstin ose bllokun e tyre) në vijën që kalon nëpër vendin ulje të atij të zgjedhur, në atë drejtim; kokat e shigjetave mbeten ku tregojnë. `Spacing` u jep gjithashtu distancë të barabartë; `Distribute` pyet dy pika dhe i shpërndan njëtrajtësisht midis tyre. Duhen të paktën dy udhëheqës të shumëfishtë.

### MLEADERCOLLECT

Aliasi: `MLC`. `Select multileaders`, pastaj `Specify collected multileader location [Vertical/Horizontal]` (Enter mban vendin e të parit). Bën një udhëheqës të shumëfishtë nga disa: përmbajtja e blloqeve shkon në një bllok të ri që mban çdo bllok anash ose njëri nën tjetrin; përmbajtja e tekstit bëhet një shënim me një rresht për çdo tekst. Udhëheqësi i parë mban vijat e veta; të tjerët hiqen. Refuzon një përzierje teksti dhe blloku.

### TABLE

Aliasi: `TB`; ose {{ui:Shëno}} › {{ui:Më shumë}} › {{ui:Tabelë}}. Bën një tabelë: një objekt që lëviz, kopjohet, rrotullohet, shkallëzohet dhe printohet si çdo objekt tjetër, me qelizat e saj të mbajtura si të dhëna.

- `Number of data rows or [Paste/File/Style] <3>`, pastaj `Number of columns <3>`, `Text height` dhe `Top left corner of the table`. Tabela merr një rresht titulli (një qelizë e bashkuar) dhe një rresht koke mbi rreshtat e të dhënave.
- `P`: një tabelë nga qelizat e fletëllogaritësit në kujtesën e ndërmjetme (tekst me një tab midis qelizave). Shtypja e {{key:Ctrl+V}} me qeliza të tilla në kujtesë bën të njëjtën gjë, përveçse kur kopja e CadCraft-it është më e re (ose kur CadCraft nuk mund ta dallojë: atëherë ngjit kopjen e vet dhe e thotë). `F`: një tabelë nga një skedar `.csv` ose i ndarë me tab. Rreshti i parë bëhet rreshti i kokës; gjerësitë e kolonave përshtaten me tekstin.
- `S`: zgjidh stilin e tabelës për këtë tabelë (shih {{cmd:TABLESTYLE}}).
- Refuzon një numër rreshtash ose kolonash që nuk është numër i plotë, dhe më shumë qeliza sesa mban një tabelë (2,000 rreshta, 200 kolona, 40,000 qeliza).
- {{cmd:EXPLODE}} e kthen tabelën në vija dhe tekst. E ruajtur si DWG tabela është një objekt i vërtetë tabele që programet e tjera mund ta redaktojnë; e ruajtur si DXF është një bllok që e vizaton, dhe CadCraft e hap sërish si tabelë.

### TABLEDIT

Aliasi: `TABLEEDIT`, `TABEDIT`; ose kliko dy herë një qelizë. Redakton një tabelë.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Kliko një qelizë, ose me një tabelë të zgjedhur shkruaj emrin e saj (`B3`: kolona B, rreshti 3; rreshti i titullit është rreshti 1). Në shfletues hapet një kuti mbi qelizë: {{key:Enter}} e mban tekstin, {{key:Tab}} shkon te qeliza tjetër, {{key:Alt+Enter}} fillon një rresht të ri, {{key:Esc}} e lë qelizën siç ishte.
- Një tekst që fillon me `=` është formulë: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, me `+ - * / ^`, kllapa dhe funksione si `sqrt` dhe `round`. Qeliza shfaq vlerën; një formulë që e emëron vetë qelizën, një qelizë jashtë tabelës ose një qelizë pa numër shfaq `####` dhe rreshti i komandave thotë pse.
- `R` / `C`: `Insert` ose `Delete` rreshta ose kolona te një qelizë e zgjedhur (sa, dhe mbi ose nën, majtas ose djathtas). Formulat ndjekin qelizat që emërtojnë.
- `S`: gjerësia e kolonës dhe lartësia e rreshtit. Një rresht nuk është kurrë më i ulët se sa do tekstit të vet. Një tabelë e zgjedhur ka gjithashtu një kapëse në skajin e çdo kolone dhe çdo rreshti.
- `M`: bashko nga një qelizë e zgjedhur te një tjetër; `U`: shkëput. `A`: drejtimi (`TL` lart majtas … `MC` mes qendër … `BR` poshtë djathtas). `H`: lartësia e tekstit të kësaj qelize (0 = e stilit). `K`: bën rreshtin titull, kokë ose të dhënash. `CL`: boshatis qelizën.
- Refuzon një tabelë në një shtresë të kyçur, fshirjen e çdo rreshti ose kolone, dhe një bashkim që do të priste në dy një qelizë tjetër të bashkuar.

### TABLESTYLE

Aliasi: `TS`. Liston stilet e tabelave me sa tabela përdor secili, pastaj `Table style: [New/Set/Edit/Delete/Apply]`.

- Një stil mban lartësinë e tekstit dhe drejtimin e rreshtave të titullit, kokës dhe të dhënave, margjinën e qelizës, dhe cilat kufij vizatohen (të jashtëm, midis rreshtave, midis kolonave).
- `N` bën një stil nga ai aktual dhe e bën aktual; `S` cakton stilin aktual (tabelat e reja e marrin); `E` redakton një: tabelat që e përdorin rivizatohen; `A` i jep stilin aktual tabelave të zgjedhura; `D` fshin një (jo Standard, jo aktualin; tabelat që e përdornin mbajnë pamjen e tyre).
- Stilet ruhen me vizatimin (DWG dhe DXF).

### TABLEEXPORT

Ruan atë që tregon një tabelë si skedar CSV (një formulë si vlerën e saj). `Select a table`, ose zgjidhe më parë. Qelizat tekst që fillojnë me `=`, `+`, `-` ose `@` marrin një `'` përpara, që një fletëllogaritës të mos i ekzekutojë.

### TABLEPASTE

Aliasi: `PASTETABLE`. Bën një tabelë nga qelizat e fletëllogaritësit në kujtesën e ndërmjetme, pastaj pyet cepin e saj lart-majtas. Njëlloj si {{cmd:TABLE}} › `Paste`.

### DATALINK

Aliasi: `DL`. `Data link: [New/List/Remove] <New>`. `N` pyet për një skedar CSV, vendos një tabelë të tij dhe mban mend emrin e skedarit; `L` liston lidhjet me skedarin e tyre, madhësinë, kur është lexuar dhe sa tabela e përdorin; `R` heq një lidhje (tabelat e saj mbeten tabela të thjeshta).

### DATALINKUPDATE

Aliasi: `DLU`. Lexon sërish skedarin e një lidhjeje të dhënash dhe rimbush tabelat e lidhura me të (rreshtat dhe kolonat shtohen ose hiqen që të përputhen). Një shfletues nuk mund ta hapë vetë një skedar, kështu që kërkon të zgjedhësh sërish skedarin. Me disa lidhje pyet cilën.

### FIELD

Vendos një fushë në vizatim: tekst që llogaritet vetë. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: tani, ose data e ruajtur, e krijuar ose e printuar, dhe një format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: emri i skedarit, me ose pa shtesën e tij. `S`: numri i fletës, titulli i saj, ose sa fleta ka. `P`: një veti e vizatimit sipas emrit (shih {{cmd:DWGPROPS}}). `O`: zgjidh një objekt, pastaj çfarë të lexohet (sipërfaqja, gjatësia, perimetri, rrezja, diametri, shtresa, emri, x, y, teksti, rrotullimi, ngjyra) dhe vendet dhjetore. `E`: një formulë. `C`: një tekst me kode të shkruara siç janë, si `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Pastaj `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: një tekst i zgjedhur merr fushën e shtuar pas asaj që mban; një qelizë tabele njëlloj; një referencë blloku pyet cilin atribut; {{key:Enter}} pyet një lartësi dhe një pikë për një tekst të ri.
- Në ekran një fushë ka sfond gri të hapët; një printim dhe një PDF nuk e kanë kurrë. Shkrimi me dorë mbi tekstin e një fushe e përfundon fushën. Një fushë që nuk mund të llogaritet shfaq `####`.
- Fusha e një objekti e gjen objektin e vet me çelësin që CadCraft mban mbi objektet (Cilësimet › CadCraft › Skedarë të lehtë për bashkim); me çelësat të fikur refuzon.

### UPDATEFIELD

Aliasi: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` cakton kur fushat përditësohen vetë: shkruaj shkronjat e `O` open, `S` save, `P` plot, `R` regen (të katër për të nisur), ose `NONE`.

### DWGPROPS

Aliasi: `DRAWINGPROPS`. Liston vetitë e vizatimit, pastaj `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Gjashtë të parat janë ato që shfaq paneli {{ui:Detajet e vizatimit}}; `U` shton emrin dhe vlerën tuaj, `R` heq një të tillë. Fushat i lexojnë (`%<prop:title>%`, `%<prop:Client>%`) dhe ndjekin menjëherë. Refuzon një emër të personalizuar që është një nga të integruarat ose që mban `%`, `<`, `>`, thonjëza ose një prerje të kundërt.

## Parametrike

Shih [Kufizo një vizatim](topic:constraints) dhe [Përdor parametra dhe ekuacione](topic:parameters). Lidhjet punojnë te skeda {{ui:Modeli}}.

### GEOMCONSTRAINT dhe komandat GC

Aliasi `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, pastaj kërkesat e asaj komande.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (i dyti lëviz).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT dhe komandat DC

Aliasi `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (një numër, një shprehje, ose `name=expression`).
- {{cmd:DCALIGNED}}: si më sipër, me `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` pyet tolerancat e distancës dhe të këndit.
- {{cmd:DELCONSTRAINT}} (aliasi `DELCON`): `Select objects`; lidhjet e tyre shkojnë.
- {{cmd:CONSTRAINTBAR}} (aliasi `CBAR`): `Select objects [Showall/Hideall]`, pastaj `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS dhe -PARAMETERS

{{cmd:PARAMETERS}} (aliaset `PAR`, `PARAM`) hap panelin {{ui:Parametrat}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Aliasi `SWMACRO`. Shkarkon një makro (.swb) që rindërton modelin si një skicë të vetme me lidhje në SolidWorks. Shih [Zhvendos skicat te dhe nga modeluesit e tjerë të pjesëve](topic:solidworks-sketches).

## Blloqet

### ANNOSCALE

Aliasi: `CANNOSCALE`. Thotë shkallën e anotimit të vizatimit dhe sa objekte të anotuara mban, pastaj pyet `New annotation scale`: shkruaj `1:50`, `1:100`, `2:1`, një numër të thjeshtë (`50` është 1:50) ose emrin e një nga shkallët e vetë vizatimit. Çdo tekst dhe përmasë e anotuar ndryshon madhësinë që të printohet në të njëjtën madhësi në shkallën e re, në një hap zhbërjeje; objektet që nuk janë të anotuara lihen rehat, dhe edhe ai që mban një listë shkallësh pa atë të re ({{cmd:OBJECTSCALE}}). Shih [Njësitë, letrat dhe shkallët](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliasi: `OBJSCALE`. `Select annotative objects`, pastaj `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Një tekst ose përmasë e anotuar mban një listë shkallësh anotimi. `Add` dhe `Delete` pyesin një shkallë (`1:50`, `2:1`, një numër i thjeshtë, ose emri i një shkalle të vetë vizatimit); `Current scale` shton shkallën e anotimit të vizatimit; `List` shfaq shkallët e çdo objekti. Një pamje shkalla e së cilës është në listën e një objekti e shfaq atë në madhësinë që printon lartësinë e tij të letrës në atë shkallë, në ekran dhe në printime. Shkalla e fundit s'mund të fshihet. Objektet që nuk janë të anotuara lihen jashtë: ndiz Annotative te Vetitë fillimisht. Listat ruhen në DWG dhe DXF si të dhënat e vetë CadCraft. Shih [Njësitë, letrat dhe shkallët](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliasi: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Në ON (siç nis një vizatim): një objekt i anotuar shfaqet gjithashtu në një pamje, ose në model, shkalla e të cilit nuk është në listën e tij, në madhësinë që ka. Në OFF: nuk shfaqet atje, dhe nuk mund të zgjidhet në model. Ndërrimi është një hap zhbërjeje; nuk ruhet në skedar.

### SCALELISTEDIT

Aliasi: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` deri te {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit dhe Delete pyesin emrin e shkallës. Shkallët e vetë vizatimit bashkohen me listat e shkallëve të pamjes dhe printimit dhe ruhen me vizatimin. Shih [Njësitë, letrat dhe shkallët](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT dhe PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: pika nëpër të cilat kalon kurba; `Close`, `Undo`, pastaj `Start tangent` dhe `End tangent` (një pikë, ose {{key:Enter}}). Method › Control vertices pyet një shkallë (1 deri 5) dhe vizaton nga një poligon kontrolli. Object kthen polivijet në spline nëpër kulmet e tyre. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` për disa objekte; vijat, harqet dhe splinet ofrohen si polivija fillimisht. Shih [Splinet dhe polivijet](topic:splines).

### BLOCK

Aliasi: `B`, `BMAKE`.

- `Enter block name`. Nëse ekziston: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Zëvendësohen nga një referencë e vetme te blloku i ri.

### WBLOCK

Aliasi: `W`, `-WBLOCK`. Shkruan një bllok, disa objekte ose të gjithë vizatimin si një DWG ose DXF të re. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (bëhet origjina e vizatimit të ri), `Select objects`, pastaj `File format [DWG/DXF/R12 DXF]` dhe `File name for the new drawing`, pastaj `What to do with the objects [Retain/Convert to block/Delete]`. Convert i zëvendëson me një referencë të vetme te një bllok me emrin e skedarit; Delete i heq.
- **Block**: `Block to write out`. Objektet e vetë bllokut, me pikën e tij bazë si origjinë, edhe blloqet e futura.
- **Entire drawing**: çdo objekt në hapësirën e modelit. Fletët nuk shkruhen; përdor {{cmd:SAVEAS}} për një kopje që i mban ato.

Skedari i ri mban vetëm shtresat, llojet e vijave, stilet e tekstit dhe përmasave dhe blloqet që përdorin objektet e tij, dhe njësitë e vizatimit. Versioni i një DWG është ai që përdori {{cmd:SAVEAS}} për herën e fundit. Në shfletues skedari shkarkohet; në Studio hapet dialogu i ruajtjes.

### ATTDEF

Aliasi: `ATT`, `DDATTDEF`, `-ATTDEF`; ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Përcakto atributin}}. Shfaq mënyrat, pastaj `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` kur është konstante), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} i merr përcaktimet e atributeve në bllok.

### EATTEDIT dhe ATTEDIT

`EATTEDIT` (`DDATTE`, ose kliko dy herë një referencë me atribute; {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Ndrysho atributet}}): `Select a block reference with attributes`, pastaj dialogu {{ui:Ndrysho atributet}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): e njëjta referencë, pastaj `<prompt> (<TAG>) <value>` për çdo atribut; {{key:Enter}} e mban vlerën. Shih [Atributet](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Vlerat ruhen; atributet e reja marrin parazgjedhjen e tyre, ato të hequra largohen, vendosjet rivendosen.

### BATTMAN

{{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Menaxheri i atributeve}}. Dialogu: blloku, atributet (etiketa, kërkesa, parazgjedhja, mënyrat, rendi), {{ui:Përditëso referencat (vlerat ruhen)}}, {{ui:Zbato}}.

### REFEDIT dhe REFCLOSE

{{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Ndrysho në vend}}. `REFEDIT`: `Select the block reference to edit in place` (ose përzgjedhjen). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Ruaj bllokun}} dhe {{ui:Hidh}} te shiriti bëjnë të njëjtën gjë. E tërë redaktimi është një hap zhbërjeje. Shih [Atributet](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT dhe BCLOSE

`BE`; ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Redakto bllokun}}. `Enter block name to edit <the selected reference's block>` hap redaktorin e blloqeve. `BCLOSE` pyet `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Ruaj bllokun}} dhe {{ui:Hidh ndryshimet}} te banderola bëjnë të njëjtën gjë. Çdo gjë e bërë në redaktor është një hap zhbërjeje.

### VIEWBASE

Aliasi: `FLATSHOT`. Një pamje 2D e sheshtë e trupave në skedën 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, një shkallë (`1:20`, `2:1`; {{key:Enter}} merr atë që përshtatet me fletën), pastaj qendra e pamjes. Një referencë blloku e vetme, skajet e dukshme në VIEW-VISIBLE, ato të fshehura me vija të ndërprera në VIEW-HIDDEN. Shih [Pamje të sheshta në një fletë](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliasi: `-PUBLISH`; ose {{ui:Të gjitha fletët në një PDF}} te dialogu {{ui:Nxirr në PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} printon çdo fletë, `S` pyet emrat e ndarë me presje. Një PDF, një faqe dhe një shenjues për fletë. Shih [Çdo fletë në një PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliasi: `SSM`, `SHEETSETMANAGER`. Të çon te seksioni {{ui:Grup fletësh}} të panelit të majtë: fletë nga shumë vizatime, të numëruara dhe të titulluara, blloqet e titullit të tyre të plotësuara nga grupi, të publikuara si një PDF. Shih [Grupet e fletëve](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): zgjidh një DWG ose DXF, pastaj pikën e futjes së tij. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; me më shumë se një lidhje, zgjidh një nga referencat e saj ose shkruaj `N` dhe emrin e saj. Shih [Vizatime të lidhura](topic:files#linked-drawings-external-references).

### COUNT

Aliasi: `BCOUNT`; ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Numëro blloqet}}. `Select a block reference to count, or [All/Export] (Enter: All)`: një zgjedhje zgjedh dhe numëron çdo referencë të atij bllok në këtë hapësirë; {{key:Enter}} ose `A` i liston të gjitha; `E` pastaj `C` (numrat) ose `A` (atributet) shkarkon një CSV. Shih [Numëro blloqet dhe eksporto një tabelë](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliasi: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (shkronjat e vogla/të mëdha nuk kanë rëndësi). `F` pyet për një DWG ose DXF, pastaj të gjithë vizatimin ose një nga blloqet e tij; një emër që përdoret tashmë pyet {{ui:Mbaj ekzistuesit}} ose {{ui:Riemëro}}. `L` hap panelin e bibliotekës.
- `Specify insertion point [Scale/Rotate]`. `S` pyet `Specify scale factor`, `R` pyet `Specify rotation angle`; të dyja mbahen mend.
- Kur blloku tashmë qëndron pranë objekteve që përsëriten gjetkë pa të, një rresht thotë sa vende sugjerohen dhe kërkesa merr `suGgested`: `G` i shfaq; kliko afër një prej tyre për ta vendosur atje, `A` për të gjitha, {{key:Enter}} për t'u kthyer. Marrin rrotullimin e fqinjëve dhe vlerat e parazgjedhura të atributeve. Vizatimet me mbi 20,000 objekte në hapësirën e hapur nuk kërkohen.
- Pastaj `Enter <prompt> (<TAG>) <default>` për çdo atribut që kërkon blloku. Shih [Atributet e blloqeve](topic:attributes).

### LIBRARY

Aliasi: `LIB`. Hap panelin e bibliotekës: vendos elementë, kontrollo për përditësime, kreditet e bibliotekës. Pa pyetje. Shih [Fut nga një skedar ose biblioteka](topic:insert-from-file-and-library).

### STEELMEMBER

Aliasi: `SMEMBER`; ose {{ui:Element 3D}} te skeda {{ui:Standard}} e bibliotekës. `Section size <W12x26>` (siç e liston skeda), pastaj `Start point [Column]` dhe `End point`: një element i ngurtë në skedën 3D midis dy pikave, i ulur në tokë. `C` pyet pikën bazë të kolonës dhe lartësinë e saj. Një hap zhbërjeje. Shih [Vendos profile çeliku dhe pjesë standarde](topic:steel-and-standard-parts).

### PARTSLIST

Aliasi: `PLIST`. `Top left corner of the parts list`, pastaj `Text height <2.5>`: vizaton një tabelë të çdo pjese standarde dhe profili çeliku të vendosur nga biblioteka (numrat e artikujve, sasia, pjesa, standardi, madhësia, gjatësia, materiali, masa). Një hap zhbërjeje. Shih [Vendos profile çeliku dhe pjesë standarde](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliasi: `PU`. Heq përkufizimet e blloqeve që nuk përdor askush. Pa pyetje.

### DELBLOCKS

Ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Fshi blloqe}}. `Select block to delete [Name/eXit]`: kliko një referencë blloku, ose `N` për listën e blloqeve me filtër (zgjidh disa), ose `X` / {{key:Enter}} për të përfunduar. Çdo referencë shkon — në model, në çdo fletë dhe brenda blloqeve të tjerë — dhe pastaj përkufizimi, dhe rreshti i komandave thotë çfarë u fshi dhe çfarë nuk u fshi. Blloqet pa emër dhe vizatimet e lidhura nuk ofrohen. Kërkesa kthehet për bllokun e radhës; e tërë komanda është një hap zhbërjeje.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} ngjit atë që kopjove ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) si një bllok të vetëm: zgjidh pikën e futjes dhe aty shkon një referencë e vetme te një bllok i ri, e përzgjedhur. Blloku merr një emër të vetin (`A$C` dhe një numër); {{cmd:RENAME}} i jep emrin tënd. Një hap zhbërjeje heq referencën dhe bllokun.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pyet bllokun që do të zëvendësohet dhe bllokun që do të vendoset në vend të tij (`?` liston blloqet), pastaj ndryshon çdo referencë në model, në çdo fletë dhe brenda blloqeve të tjerë. Çdo referencë mban vendin, shkallën, rrotullimin, shtresën dhe vlerat e atributeve që kanë të dy blloqet; atributet që ka vetëm blloku i ri fillojnë me parazgjedhjet e tyre, dhe thotë cilat vlera u hodhën. Kur askush nuk e përdor më bllokun e vjetër, ofron ta heqë. Refuzon vizatimet e lidhura dhe një zëvendësues që do të vendoste një bllok brenda vetes. Një hap zhbërjeje.

### MINSERT

{{cmd:MINSERT}} vendos një bllok në rreshta dhe kolona: emri i bllokut, pika e futjes, shkalla, rrotullimi, numri i rreshtave dhe kolonave, dhe distancat midis tyre. I gjithë grupi rrotullohet me rrotullimin. Çdo një është referencë e vetes (deri 10,000), kështu që çdo prej tyre mund të lëvizet ose fshihet më vonë.

### BLOCKSPALETTE

Aliasi: `BLOCKSPAL`; ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Paneli i blloqeve}}. Shfaq panelin {{ui:Blloqe}} me kursorin në filtrin e tij. Çdo bllok ka një foto të vogël; ato të vendosura më së fundi vijnë të parat. Dy butonat pranë filtrit ndërrojnë midis një liste dhe një rrjeti fotosh. Kliko një foto (ose {{ui:Fut}}) për të vendosur bllokun me {{cmd:INSERT}}, ose tërhiqe mbi vizatim për ta vendosur aty ku e lë.

{{ui:Libraries}}, nën listë: {{ui:Add a drawing}} merr një skedar DWG ose DXF tënd dhe lista blloqet e tij me foto, dhe të gjithë vizatimin si një bllok. Vendosja e një blloku kopjon përkufizimin e tij (dhe blloqet që futet, dhe shtresat e tyre) në këtë vizatim, si bën opsioni `File` i {{cmd:INSERT}}; një bllok që është tashmë këtu me të njëjtin përkufizim përdoret pa pyetje, një me të njëjtin emër që ndryshon pyet {{ui:Mbaj ekzistuesit}} ose {{ui:Riemëro}}. Në një shfletues skedari mbetet deri sa mbyllet faqja. Në CadCraft Studio {{ui:Add a folder}} liston vizatimet në një dosje, secili hapet kur klikon mbi të, dhe skedarët dhe dosjet mbahen mend. Shenja e vogël x heq një bibliotekë nga lista; skedari nuk prekët. {{ui:Biblioteka}} e përbashkët është diçka tjetër: shih [Fut nga një skedar ose biblioteka](topic:insert-from-file-and-library).

### BCONVERT

Ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Convert repeats to blocks}}. Gjen gjeometri që përsëritet dhe e kthen çdo kopje në një referencë të një blloku të vetëm.

- `Select the objects that repeat, or [Block]`: objektet e një kopjeje. `B` emëron në vend një bllok ekzistues, për të gjetur kopje të lira të objekteve të tij.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` dhe `P` ndërrojnë çfarë llogaritet si kopje; {{key:Enter}} kërkon. Cilësimet mbahen mend.
- `Name for the new block <Block1>`, pastaj `Specify the block's base point` ({{key:Enter}} merr cepin e poshtëm majtas të përzgjedhjes).
- Thotë sa grupe të tjera objektesh janë e njëjta gjeometri, nxjerr në pah gjithçka që do të zëvendësonte, dhe pyet `Yes/No`.

Një kopje është e njëjta gjë e zhvendosur dhe e rrotulluar me çfarëdo kënd (dhe pasqyruar ose shkallëzuar me një faktor të vetëm kur janë të ndezur): çdo objekt duhet të ketë pjesën e vet, brenda një milionëshi të madhësisë së përzgjedhjes. Çdo referencë merr rrotullimin dhe shkallën e vet (një e pasqyruar një shkallë Y negative), dhe shtresën që kishin objektet e saj të përbashkët. Objektet në shtresa të kyçura lihen rehat dhe numërohen. Kërkon në hapësirën e hapur (modelin ose fletën e hapur). Një kërkim shumë i madh ndalet në një kufi pune dhe e thotë. Një hap zhbërjeje.

### BSEARCH

Ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: një pjesë e emrit të bllokut, ose një model me `*` dhe `?`. Liston çdo bllok me referencat e tij këtu dhe në të gjithë vizatimin.
- `A`: një vlerë atributi, ose `TAG=value`. Liston blloqet referencat e të cilëve e mbajnë atë, me vlerat e gjetura. Atributet konstante llogariten.
- `G`: zgjidh objekte, ose një referencë blloku, dhe listohen blloqet me formë të paktën 85% të ngjashme, më të mirët e para. Madhësia, rrotullimi dhe pasqyrimi nuk llogariten. Matja krahason distancat midis pikave të shpërndara përgjatë kontureve, kështu që gjen të ngjashëm; për kopje të sakta përdor {{cmd:BCONVERT}}.

Referencat e gjetura në hapësirën e hapur përzgjidhen, gati për komandën pasuese.

### BREPLACE

Ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` zëvendëson referencat e blloqeve që zgjedh me bllokun që emëron; `A` pyet një bllok dhe zëvendësuesin e tij dhe ndryshon çdo referencë, si bën {{cmd:BLOCKREPLACE}} (i njëjti kod). Një referencë mban vendin, shkallën, rrotullimin, shtresën dhe vlerat e atributeve që kanë të dy blloqet; vlerat që blloku i ri nuk ka vend për to hidhen dhe emërtohen. `?` liston blloqet. Një hap zhbërjeje.

### DATAEXTRACTION

Aliasi: `EATTEXT`, `DX`; ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Data extraction}}. Liston blloqet, atributet e tyre dhe vetitë e objekteve si tabelë ose skedar CSV.

- Punon në përzgjedhje, ose pyet `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` kur përzgjedhja mban të dyja. Blloqet pa emër, tabelat dhe listat e materialeve nuk listohen kurrë.
- Shfaq kolonat që mund të zgjedhësh (emri, lloji, shtresa, X, Y, rrotullimi, shkalla, gjatësia, sipërfaqja, ngjyra, lloji i vijës, hapësira, dhe një për çdo etiketë atributi), pastaj `Columns, by name or number with commas between`. {{key:Enter}} merr ato me yll: emrin dhe çdo atribut për blloqet; llojin, shtresën dhe gjatësinë për objektet.
- `Put identical rows together with a count? [Yes/No] <Yes>`, pastaj `Put the list in a: [Table/Csv] <Table>`. Një tabelë është tabelë e zakonshme ({{cmd:TABLEDIT}} e redakton) dhe nuk është e gjallë: ekzekuto komandën sërish kur vizatimi ndryshon.
- Refuzon një kolonë që nuk është në listë. Një tabelë mban 1,999 rreshta të dhënash; një skedar CSV i merr të gjithë.

### COUNTTABLE

Numëron referencat e blloqeve të përzgjedhjes (ose të hapësirës së hapur) dhe vendos numrat në një tabelë (`Block`, `Count`) ose një skedar CSV. Për një numërim që ndjek vetë vizatimin shih {{cmd:BOMTABLE}}.

## Fletët dhe printimi

### LAYOUT

Aliasi: `LO`, `NEWLAYOUT`; ose butoni {{ui:+}} nën vizatim. Një fletë e re me kufi, bllok titulli dhe një pamje të vetme, në ISO A3 (ose Tabloid për vizatime në inç ose këmbë). Pa pyetje.

### MVIEW

Aliasi: `MV`. Vetëm në një fletë ({{cmd:VPORTS}} në një fletë bën të njëjtën gjë).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Pamja tregon të gjithë modelin në një shkallë standarde.
- `P` (Polygonal): kliko cepat e konturit (`Undo`, `Close`), {{key:Enter}} kur ke mbaruar. Refuzon më pak se tre cepa.
- `O` (Object): `Select a closed object for the viewport's outline`: një polivijë e mbyllur, një rreth ose një elips në fletë. Pamja merr formën e tij (kurbat si copa të shkurtra të drejta); objekti mbetet siç ishte. Refuzon një objekt që nuk është i mbyllur.

### VPCLIP

Pret një pamje që është tashmë në fletë. `Select viewport to clip` (ose zgjidhe më parë), pastaj `Select the object to clip to [Polygonal/Delete]`:

- Kliko një polivijë, rreth ose elips të mbyllur, ose {{key:Enter}} (ose `P`) për të klikuar cepat e një shumëkëndëshi.
- `D` (Delete, ofrohet kur pamja është e prerë) e bën sërish drejtkëndësh: kutia rreth konturit që kishte.
- Ajo që tregon pamja nuk lëviz në letër, dhe shkalla e saj mbetet. Modeli vizatohet dhe printohet vetëm brenda konturit, dhe kufiri ndjek atë. Një hap zhbërjeje.
- Një pamje e prerë ka një kapëse në çdo cep të konturit të saj, përveç qendrës dhe katër cepave të kutisë së saj (tërheqja e një cepi të kutisë shtrin konturin me të). Vetitë shfaqin Outline: Rectangle, ose Clipped me numrin e cepave.
- Skedarët DWG dhe DXF 2000 e mbajnë konturin për CadCraft. Programet e tjera e hapin pamjen si drejtkëndëshin rreth saj; DXF R12 mban vetëm drejtkëndëshin.
- Te skeda e modelit thotë se pamjet janë në fletë.

### VPORTS

Aliasi: `VIEWPORTS`. {{cmd:SPLIT}} është e njëjta gjë edhe nga një fletë, dhe {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} e ekzekutojnë. Në model: `Enter number of panes [SIngle/2/3/4] <3>`; `2` pyet `[Horizontal/Vertical] <Vertical>` (Vertical = anash), `3` pyet `[Left/Right] <Right>` (ku shkon paneli i madh). Çdo panel mban pamjen dhe hapësirën e vet; një klikim e bën panelin aktiv. Në një fletë është {{cmd:MVIEW}}. Shih [Ndaj ekranin](topic:split-screen).

### VPVIEW

Pa alias. Vetëm në një fletë.

- `Select viewport` (anashkalohet nëse një është e zgjedhur), pastaj në model: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Pa alias. Një sistem koordinatash i yti; jo një redaktim. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: një pikë është origjinë e re, pastaj `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origjina, një pikë në boshtin X pozitiv, një pikë në anën Y pozitive. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` dhe një emër. Pamja kthehet që boshti i ri X të jetë horizontal. Shih [Kthe pamjen dhe përdor koordinatat e tua](topic:ucs-and-turned-view).

### PLAN

Pa alias. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: kthen pamjen e panelit aktiv që boshti X i UCS (ose i botës) të jetë horizontal. Asgjë në vizatim nuk lëviz.

### TURNLEFT, TURNRIGHT, TURNWORLD

Pa alias; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Njëlloj si `UCS Z -90`, `UCS Z 90` dhe `UCS W`, me pamjen që ndjek.

### VPLAYER

Pa alias. Në një fletë, ose brenda një pamjeje. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` pyesin emrat e shtresave (me presje, me shkronja wildcard `*` dhe `?`), pastaj `[All/Select/Current] <Current>` pamjet; Reset e kthen çdo shtresë te parazgjedhja "e ngrirë në pamjet e reja"; `V` cakton atë parazgjedhje (`[Frozen/Thawed]`), që përdor {{cmd:MVIEW}}. `?` liston shtresat e ngrira në pamjen aktuale. Kolona e pamjes te paneli i Shtresave bën të njëjtën gjë për një pamje. Shih [Ngrij një shtresë në një pamje](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliasi: `MS`; ose kliko dy herë brenda një pamjeje. Vetëm në një fletë. Punon në model përmes një pamjeje: pamja e zgjedhur, e vetmja në fletë, ose `Click inside the viewport to work in`. Lëvizja dhe zmadhimi brenda ndryshojnë pamjen e panelit (një e kyçur sipas ekranit e mban atë dhe fleta lëviz në vend të saj); pamja e re shkruhet si një hap zhbërjeje. Shih [Punon në model përmes një pamjeje](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliasi: `PS`; ose kliko dy herë jashtë pamjes, ose kliko një skedë nën vizatim. Kthehet te fleta.

### PLOT

Aliasi: `PRINT`, `PUBLISH`, `EXPORTPDF`; ose {{key:Mod+P}}. Hap dialogun {{ui:Nxirr në PDF}}. Shih [Printo në PDF](topic:plot-pdf).

### PLOTSTYLES

Aliasi: `STYLESMANAGER`, `PSTABLES`; ose {{ui:Redakto tabelat…}} te dialogu {{ui:Nxirr në PDF}}. Hap {{ui:Tabelat e stilit të printimit}}: çfarë printon çdo ngjyrë (ngjyrë, gri, bojë, trashësi vije), e ruajtur me vizatimin. Shih [Tabelat e stilit të printimit](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} lëviz objektet midis një fletë dhe modelit përmes një pamjeje, të shkallëzuara dhe të rrotulluara që të duken njëlloj nga ana tjetër. Në një fletë, zgjidh objektet dhe shkojnë te modeli (zgjidh pamjen kur fleta ka më shumë se një). Ndërsa punon në model përmes një pamjeje ({{cmd:MSPACE}}), objektet e zgjedhura vijnë te fleta. Thotë sa herë më të mëdhenj ose më të vegjël u bënë. Pamjet mbeten në fletën e tyre. Një hap zhbërjeje.

### ISODRAFT

{{cmd:ISODRAFT}} e kthen vizatimin izometrik `ON` ose `OFF`, ose shkon drejt e në planin `Left`, `Top` ose `Right`. Ndërsa është i ndezur: Ortho ({{key:F8}}) mban vijat sipas dy boshteve të planit (majtas: 90° dhe 150°; sipër: 30° dhe 150°; djathtas: 30° dhe 90°), gjurmimi polar ({{key:F10}}) ndjek të njëjtët boshte, kapja te rrjeti ({{key:F9}}) përdor rrjetin izometrik, dhe rrjeti ({{key:F7}}) vizatohet me vija në 30°, 90° dhe 150°. {{cmd:ELLIPSE}} fiton `Isocircle`: jep një qendër dhe një rreze (ose `Diameter`) dhe vizaton elipsin që një rreth shfaqet si në planin aktual. Vizatimi mbetet i sheshtë: këto janë ndihma për vizatimin e një pamjeje piktoriale, jo një model 3D. Cilësimi është për këtë sesion dhe nuk ruhet në skedar.

### ISOPLANE

{{cmd:ISOPLANE}} zgjedh planin ku punon vizatimi izometrik: `Left`, `Top` ose `Right`. Enter shkon te plani tjetër. Ndërsa vizatimi izometrik është i ndezur, {{key:F5}} bën të njëjtën gjë në mes të një komande; ndërsa është i fikur, {{key:F5}} i lihet shfletuesit.

## Pyetje

### CAL

Shfaq vlerën e një llogaritjeje, siç lexohet kudo ku shkruhet një gjatësi.

- `Expression`: shkruaje, për shembull `12'6"+3/4"` ose `(24'-0")/3`, dhe shtyp {{key:Enter}}. CadCraft shfaq `= 12'-6 3/4"   (150.75 drawing units)`. Shih [Aritmetika në një vlerë të shkruar](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliasi: `DI`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Mat distancën}}.

- `Specify first point`, `Specify second point`. Shfaq distancën, këndin, Delta X dhe Delta Y.

### AREA

Aliasi: `AA`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Sipërfaqja}}. Shfaq sipërfaqen dhe perimetrin.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Kliko ose shkruaj cepa; te `Specify next point (Enter closes) [Undo]` shtyp {{key:Enter}} për të mbyllur konturin. `U` heq cepin e fundit.
  - {{key:Enter}} ose `O`, pastaj `Select object`: një rreth (shfaq perimetrin e tij), një elips, një polivijë (një e hapur mbyllet me një vijë të drejtë për sipërfaqen, dhe gjatësia e saj shfaqet), ose një vijëzim (vrimat hiqen).
  - `A` (Add area) dhe `S` (Subtract area) mbajnë një totalë rrjedhëse: kërkesa fillon me `(ADD mode)` ose `(SUBTRACT mode)`, çdo sipërfaqe shtohet ose hiqet, dhe `Total area = …` shfaqet pas çdo njërës. Në këto mënyra `O` zgjedh objekte deri te {{key:Enter}}, dhe {{key:Enter}} te kërkesa e parë e mbyll komandën.

### MEASUREGEOM

Aliasi: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; pas çdo matjeje pyet sërish, me `eXit` si parazgjedhje.

`Quick` mat rreth treguesit ndërsa e lëviz: distancën deri te objekti më i afërt në të djathtë, lart, majtas dhe poshtë (sipas boshteve të UCS aktuale), e vizatuar ndërsa shkon, dhe këndin ku dy nga ato fqinjë janë të drejtë dhe takohen. Një klikim shkruan në histori të katër distancat, gjerësinë dhe lartësinë e lirë dhe këndet; Enter kthehet te opsionet. Lexon atë që është në ekran.

- `D`: dy pika, si {{cmd:DIST}}.
- `R`: `Select arc or circle`; shfaq rrezen dhe diametrin.
- `A`: një hark (këndi i tij i përfshirë), ose një vijë dhe pastaj një vijë e dytë (këndi midis tyre, nga drejt skajeve të largëta), ose {{key:Enter}} dhe tre pika (kulmi, pastaj dy skajet).
- `AR`: si {{cmd:AREA}}, një sipërfaqe.

### ID

Pa alias. `Specify point`; shfaq X dhe Y të tij.

### LIST

Aliasi: `LI`, `LS`. `Select objects`; shfaq llojin, shtresën dhe matjet kryesore të çdo objekti.

### MASSPROP

{{cmd:MASSPROP}} jep vetitë e seksionit të rajoneve dhe objekteve të mbyllura që zgjedh, së bashku: sipërfaqja, perimetri, kutia kufizuese, qendra, momentet e inercisë rreth boshteve X dhe Y që kalojnë nga origjina, produkti i inercisë, rrezet e xhirimit, të njëjtat momente rreth qendrës, dhe momentet kryesore me drejtimet e boshteve të tyre. Vrimat në një rajon numërohen si vrima. Shifrat janë në njësi vizatimi dhe të sakta për kontura të bëra nga vija dhe harqe; elipset dhe splinet matën si segmente të shkurtra të drejta, dhe e thotë këtë. Pas raportit pyet nëse ta shkruajë në një skedar teksti. Objektet që nuk janë të mbyllura lihen jashtë, dhe thotë sa janë.

## Pamja, skedari dhe të tjera

### ZOOM

Aliasi: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Kliko dy cepa për një dritare. `E`, `A` ose Enter: i gjithë vizatimi.
- `P` (Previous, ose {{ui:Paraprake}} në shirit) kthehet te pamja para, deri në 10 pamje për skedë; një seri hapash të rrotës ose një lëvizje numërohen si një pamje.
- Një numër si `2`, `2x` ose `0.5x` (ose `S` dhe pastaj numri) zmadhon ose zvogëlon me atë faktor rreth mesit të ekranit.
- `C` pyet `Specify center point` dhe `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT dhe komandat PDF

Aliasi: `PDFATT` për {{cmd:PDFATTACH}}, `PDFIM` për {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} vendos një faqe PDF nën vizatim (skedari, faqja, pika e futjes, shkalla, rrotullimi); {{cmd:PDFIMPORT}} i kthen vijat, kurbat, mbushjet dhe tekstin e një faqeje në objekte vizatimi në shtresa të emërtuara sipas PDF-së, në madhësinë reale, një shkallë të shkruar, ose të shkallëzuar nga dy pika dhe një distancë reale. {{cmd:PDFCLIP}} pret një nënshtresë, {{cmd:PDFADJUST}} cakton zbehjen, kontrastin, monokromin ose e fik, {{cmd:PDFLAYERS}} ndërron shtresat e vetë PDF-së, dhe {{cmd:PDF}} i jep CadCraft-it sërish skedarët që përdorin nënshtresat e vizatimit. Shih [Nënshtresat PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Aliasi: `AUTOC`. Plotësim automatik i vizatimit: pa një komandë që punon, një fantazmë gri tregon çfarë thonë modelet e vetë vizatimit se vjen më pas. {{cmd:AUTOCOMPLETE}} e ndez `On` ose e fik `Off` (edhe Cilësimet › CadCraft), ose `Show` çfarë do të sugjeronte tani. **Tab** vizaton fantazmën si një hap zhbërjeje, **Esc** e heq deri sa ndryshon vizatimi. Gjen tre gjëra në objektet më të reja: kopjen e radhës të diçkaje të vizatuar dy herë ose më shumë me një hap të barabartë (kollona, një shkallë e një shkallëtoreje), hapat e radhës të një shkallëtoreje polivijë, dhe anën që mungon të një dhome ose zinxhiri muri. Në mes të {{cmd:LINE}} ose {{cmd:PLINE}} fantazma është **pika e radhës**: hapi i radhës i një shkallëtoreje (lartësia, shkalla, lartësia…), kulmi i katërt i një drejtkëndëshi, pika që e mbyll, ose edhe një hap i barabartë tjetër. Sill kursorin pranë saj dhe shtyp **Tab**, sikur të kishe klikuar atje; vazhdo ose shtyp Enter. Llogaritet në këtë kompjuter me rregulla, pa model.

### AUTOSHEET

Aliasi: `ASH`. Fletë që shtrohen vetë. {{cmd:AUTOSHEET}} i merr pjesët e vizatimit (pamjet e tua të emërtuara, ose pjesët e veçanta të modelit, ose të gjithë modelin), zgjedh një madhësi letre (ose atë që jep ti), i jep çdo pjese një shkallë standarde (një shkallë për të gjitha, ose më të madhen që mund të marrë secila) dhe i vendos pamjet në rreshta në fleta të reja me një bllok titulli dhe një titull (emri dhe shkalla) nën secilën. Ajo që nuk përshtatet në një fletë merr një fletë të vetën. Një hap zhbërjeje. Llogaritet në këtë kompjuter me rregulla, pa model.

### PHOTOSKETCH

Aliasi: `PSK`. Skicë foto në vizatim. Zgjidh një foto (JPEG, PNG ose TIFF) të një skice me dorë në një fletë letre. {{cmd:PHOTOSKETCH}} gjen katër cepat e fletës, drejton perspektivën, merr madhësinë e letrës që jep ti (`Paper`, ose më të afërtën standarde) dhe `Scale` të skicës (1 : n), pastaj i gjurmon vijat e stilolapsit në vija, harqe dhe rrathë, me një shtresë për çdo ngjyrë stilolapsi (e zezë, e kuqe, blu, jeshile). Nëse nuk gjen skajin e letrës, e merr të gjithë fotografinë si fletë dhe e thotë. Shkrimi lihet jashtë. Një hap zhbërjeje. Bëhet në këtë kompjuter me përpunim klasik imazhi, pa model, pa dërguar asgjë askund. Shih edhe komandat e vizatimeve të skanuara.

### AUTODIM

Aliasi: `ADIM`. Përmasim automatik sipas rregullash. {{cmd:AUTODIM}} i përmason objektet e zgjedhura (ose gjithë vizatimin) nga niveli dhe skajet vertikale: një zinxhir përmasash përgjatë anëve që zgjedh (`Sides`), një përmasë e përgjithshme jashtë tij, gjerësia e çdo hapjeje (një hapësirë midis vijave të murit në një drejtëz), një diametër për çdo madhësi vrime, dhe me `Grid` distancën midis vijave të rrjetit. Një përmasë që është tashmë aty nuk bëhet sërish. Një hap zhbërjeje. Llogaritet në këtë kompjuter me rregulla, pa model.

### GRIDMOVE

Aliasi: `GM`. Lëvizja e një vije rrjeti sjell grupin. {{cmd:GRIDMOVE}} lëviz një vijë rrjeti (një vijë në një shtresë emri i së cilës thotë grid ose axis) dhe atë që varet prej saj: muret me një skaj mbi vijë shtrihen për ta ndjekur, muret përgjatë saj lëvizin të tërë, kolonat (referenca blloqesh dhe rrathë mbi vijë), flluska dhe etiketa e saj lëvizin, dhe përmasat që pikat e tyre janë mbi të matin distancën e re. Jep dy pika (vetëm pjesa përtej vijës numërohet) ose `Distance`. Një hap zhbërjeje e kthen gjithë. Bëhet me rregulla në këtë kompjuter.

### DETAILS

Aliasi: `DET`. Detaje që të gjejnë ty. {{cmd:DETAILS}} mban detajet e firmës suaj: `Add` vendos një bllok të këtij vizatimi në listë, `List` dhe `Remove` e menaxhojnë, dhe `Find` i renditë për atë që është zgjedhur (ose për atë që vizatove së fundi) sipas fjalëve në shtresat e tij, emrat e blloqeve, modelet e vijëzimit dhe shënimet, krahasuar me emrin dhe shënimet e çdo detaji, kështu që një kokë dritareje gjen flashingun e pragut tënd. Zgjidh një numër dhe një pikë për ta vendosur. Me {{ui:Sugjerim}} të ndezur (edhe Cilësimet › CadCraft), zgjedhja e diçkaje që përputhet me një detaj vendos një rresht në shiritin e gjendjes. Lista mbahet në këtë shfletues, në këtë kompjuter, dhe ajo është lista që kërkohet. `Share` e vendos edhe në dosjen tënde Dokumente (`.cadcraft/firm-details.json`, me vizatimin e çdo blloku): `Pull` shton atë që ka ekipi yt dhe ti nuk ke, `Push` shton atë që ke ti dhe ata nuk kanë, `Both` bën të dyja, dhe asgjë nuk hiqet kurrë nga asnjë anë. Hap së pari dosjen Dokumente ({{cmd:DOCUMENTS}}); kur ajo dosje është një dosje e Team Cloud Plan, i gjithë ekipi ndan një listë. Një artikull detaji te paneli i Bibliotekës ka një buton **Add to my firm's details** që e vendos në të njëjtën listë. Bëhet me fjalë në këtë kompjuter, pa model.

### SKETCHFIX

Aliasi: `SKF`. Skicat me stilolaps bëhen gjeometri e saktë. Shtyp dhe tërhiq një goditje me dorë të lirë në një kohë (stilolaps, miu ose gishti), pastaj Enter. Çdo goditje lexohet si një vijë, rreth, hark, drejtkëndësh ose polivijë: vijat pothuajse horizontale dhe vertikale bëhen saktësisht të tilla, një goditje e mbyllur e rrumbullakët bëhet rreth, një goditje e mbyllur me katër cepa të drejtë bëhet drejtkëndësh, dhe skajet e goditjeve tërhiqen së bashku dhe mbi skajet që janë tashmë në vizatim. Një hap zhbërjeje. Bëhet me rregulla në këtë kompjuter, pa model.

### SCANATTACH dhe komandat e vizatimeve të skanuara

Aliasi: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nuk ka. Punojnë mbi një figurë, një hap zhbërjeje secila. {{cmd:SCANATTACH}} fut një PNG, JPEG, TIFF (një faqe ose të gjitha) ose një faqe PDF që është figurë. {{cmd:SCANSCALE}} e shkallëzon fletën nga dy pika të zgjedhura dhe distanca reale. {{cmd:SCANALIGN}} e zhvendos dhe e rrotullon mbi dy pika (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} tregon këndin e vijave të gjata të fletës dhe e rrotullon fletën pasi të `Accept` ose të japësh një `Value`. {{cmd:SCANCLEAN}} e bën bardhë e zi (`Threshold` Auto/Adaptive/Level, `Specks`) dhe `Run`. {{cmd:SCANCROP}} mban një dritare. {{cmd:SCANERASE}} fshin një `Rectangle`, `Polygon` ose `Lasso`. {{cmd:SCANTRACE}} gjurmon vija dhe harqe në një shtresë të re (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) dhe raporton çfarë gjeti dhe çfarë la si raster. {{cmd:SCANINFO}} liston skedarin origjinal dhe hapat. {{cmd:RASTERSNAP}} e ndez ose e fik kapjen te vijat e fletëve të skanuara. Shih temën Vizatimet e skanuara dhe gjurmimi.

### REGEN dhe REGENALL

Aliasi: `RE` për {{cmd:REGEN}}, `REA` për {{cmd:REGENALL}}. Rindërton nga vizatimi atë që vizatohet në ekran: {{cmd:REGEN}} skedën që po shikon (në një fletë, edhe modelin që shfaqin pamjet e saj), {{cmd:REGENALL}} çdo skedë, çdo panel të ekranit të ndarë dhe çdo vizatim të hapur. Përdore kur figura duket e vjetëruar pas një ndryshimi të skriptuar ose shumë të madh, ose kur e ka redaktuar një asistent; vetë vizatimi nuk preket, kështu që nuk ka çfarë të zhbëhet.

### NAMEDVIEW

Aliasi: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, pastaj emri i pamjes. `S` ruan pamjen në ekran, `W` një dritare që zgjedh, `R` shfaq një pamje të ruajtur, `D` fshin një, `?` liston pamjet e kësaj skede. Ruajtja me një emër ekzistues e zëvendëson; çdo ndryshim është një hap zhbërjeje. Pamjet i përkasin skedës ku u ruajtën. Skedarët DWG dhe DXF i mbajnë (tabela VIEW); pamjet e një fletë kthehen te fleta e parë, sepse skedari nuk thotë cilës fletë i përkisnin.

### UNDO dhe REDO

Aliasi: `U` për {{cmd:UNDO}}; {{cmd:REDO}} nuk ka. Gjithashtu {{key:Mod+Z}} dhe {{key:Mod+Y}}.

### LAYER

Aliasi: `LA`. Të çon te paneli {{ui:Shtresat}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` ose një emër (`?` i liston: Continuous, ato të vizatimit, dhe DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE me madhësitë `2` (gjysmë) dhe `X2` (dyfish)). {{cmd:LWEIGHT}} (`LW`): trashësia e vijës për objektet e reja në mm, ose `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): shkalla e llojit të vijës së vizatimit (me zhbërje). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — e njëjta gjë si butoni {{ui:LWT}} në shiritin e gjendjes. Shih [Trashësitë dhe llojet e vijave](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, pastaj emri i ri; objektet ose referencat ndjekin. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` deri te {{key:Enter}}, pastaj `Select object on target layer or [Name]` dhe `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, pastaj `Y`: shtresa dhe çdo objekt mbi të shkojnë (jo shtresa 0, DEFPOINTS ose shtresa aktuale). Një hap zhbërjeje secila. Shih [Organizo një vizatim me shtresa](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Shtresat me zgjedhjen e objekteve; edhe te menyja {{ui:Mjetet}} e panelit {{ui:Shtresat}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, pastaj {{key:Enter}}: çdo shtresë tjetër fiket. {{cmd:LAYUNISO}} i ndez sërish. {{cmd:LAYOFF}} dhe {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (ose të ngrihet), përsëri e përsëri; `U` heq të fundit, {{key:Enter}} përfundon. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} ndez çdo shtresë, {{cmd:LAYTHW}} shkri çdo shtresë. Çdo komandë është një hap zhbërjeje. Shih [Organizo një vizatim me shtresa](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} nis një vizatim bosh dhe {{cmd:OPEN}} hap një DWG ose DXF, secili në skedën e vet mbi vizatimin (një vizatim i ri i paprekur përdoret në vend të një skede të re). Mbyllja e një skede me ndryshime të paruajtura pyet së pari. Shih [Ndaj ekranin](topic:split-screen).

{{cmd:SAVE}} (aliasi `QSAVE`, edhe {{key:Mod+S}}) shkarkon një kopje në formatin e vizatimit: DWG nëse u hap nga një DWG, DXF nëse nga një DXF. Një vizatim i ri përdor formatin e zgjedhur së fundi te Ruaj si në këtë shfletues, përndryshe DWG.

{{cmd:SAVEAS}} (edhe {{key:Mod+Shift+S}}) hap dialogun {{ui:Ruaj një kopje si}}: zgjidh {{ui:DWG}} (dhe {{ui:Version}}-in e tij), {{ui:DXF R12}} ose {{ui:DXF 2000}}, pastaj {{ui:Ruaj}}. Zgjedhja qëndron për këtë vizatim dhe për vizatimet e reja në këtë shfletues.

{{cmd:DXFOUT}} shkarkon gjithmonë një kopje DXF R12, pa e ndryshuar formatin që përdor {{cmd:SAVE}}.

Shih [Skedarët: çfarë hapet, çfarë ruhet](topic:files#saving).

### TOUR

Aliasi: `TUTORIAL`. Nis përsëri turin gjashtë-hapash të vizatimit të parë. Shih [Fillimi](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliasi: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Shih [Cilësimet](topic:settings#toolbar-position).

### COMMANDLINE

Aliasi: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: lidh ose lëviz rreshtin e komandave, e bën një rresht, pyet sa rreshta historiku të shfaqen (0 deri 12), ose hap historikun. Shih [Cilësimet](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: shiritat mbi vizatim ashtu siç ishin, ose kompakt. Shih [Cilësimet](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: hapi në të cilin gjurmimi {{ui:Polar}} rreshtohet (më shumë se 0, deri 180). Mbahet në këtë shfletues.

### UNITS

Aliasi: `UN`. Si shkruhen dhe shkruhen gjatësitë.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural dhe Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Të tjerat: `Enter number of decimal places (0 to 8)`.

Përmasat e reja e ndjekin. Një hap zhbërjeje. Njëlloj si {{ui:Formati i gjatësisë}} dhe {{ui:Saktësia}} te {{ui:Cilësimet aktuale}}; shih [Këmbë dhe inç](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliasi: `GDS`. Shiko një layout IC (një skedar GDSII stream): provë laboratori, vetëm për shikim dhe matje.

- Një zgjedhës skedari merr një skedar `.gds`; me disa qeliza kryesore, `Enter the top cell to draw`.
- Çdo shtresë dhe lloj të dhënash bëhet një shtresë vizatimi (`GDS 1`, `GDS 2/5`); referencat dhe grupet vendosen të sheshta, në njësinë e përdoruesit të skedarit (zakonisht mikrometra). Një hap zhbërjeje. Asgjë nuk simulohet ose kontrollohet, dhe skedari nuk shkruhet përsëri.

### DIAGRAM

Aliasi: `TEXTDIAGRAM`, `T2D`. Një diagram nga tekst.

- Një kuti merr tekstin (ose një rresht me `;` midis deklaratave në rreshtin e komandave): një flowchart Mermaid, një diagram komponentësh PlantUML, D2 ose një listë nga-në.
- `Specify the top left corner of the diagram`, pastaj `Specify the text height`.
- Bllokët dhe lidhësit janë objekte të zakonshme në shtresën `Diagram`, të zgjedhura kur mbaron. Një hap zhbërjeje. Shih [Vizato një diagram nga tekst](topic:text-to-diagram).

### OLELIST

Aliasi: `OLES`. Objektet OLE që mban një DWG dhe që CadCraft nuk mund t'i vendosë vetë.

- Liston secilin: numri, lloji, madhësia, nëse ka ruajtur një figurë.
- `Enter an option [Place/eXit] <eXit>`: Place pyet numrin, cepin poshtë-majtas dhe gjerësinë, dhe vizaton një kornizë me figurën. Një hap zhbërjeje; objekti i ruajtur nuk ndryshohet. Shih [Figurat](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliasi: `SHX`. Fontet e tua SHX.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} lexon çdo `.shx` në një dosje (CadCraft Studio; përsëri në çdo nisje), {{ui:Files}} merr skedarë të zgjedhur (shfletuesi), {{ui:Reverse}} shtron shkronjat e një fonti me të fundit të parat. Stilet e tekstit që emërojnë një font të ngarkuar vizatojnë me të. Shih [Vizato tekst me fontet e tua SHX](topic:shx-fonts).

### LIMITS

Sa i madh është synimi i vizatimit.

- `Specify lower left corner or [ON/OFF] <current>`: një pikë, `ON` ose `OFF`.
- `Specify upper right corner <current>`.

Rrjeti mbush kufijtë, {{cmd:ZOOM}} All i shfaq, dhe me kufijtë ON një pikë jashtë refuzohet (`**Outside limits`). Një hap zhbërjeje; ruhet në DWG dhe DXF. Shih [Cakto kufijtë e vizatimit](topic:drawing-limits).

### AUNITS

Aliasi: `ANGUNITS`. Si shfaqen dhe shkruhen këndet.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ose për dy të tjerat `Enter precision` (0 gradë, 2 minuta, 4 sekonda, 5 deri 8 dhjetore të sekondës).

Një hap zhbërjeje; ruhet në DWG dhe DXF. Njëlloj si {{ui:Formati i këndit}} te {{ui:Cilësimet aktuale}}. Shih [Shkruaj dhe shfaq azimutet dhe këndet](topic:bearings-and-angles).

### APPLOAD

Aliasi: `AP`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Ngarko aplikacion…}}. Dialogu {{ui:Ngarko aplikacione}}: ngarko rutina `.lsp` dhe skedarë dialogu `.dcl`, shkarkoi, ngarkoi sërish nga historiku, dhe Startup Suite. Komandat `(defun c:NAME …)` të një rutine punojnë pastaj si çdo tjetër. Shih [Ngarko aplikacione](topic:load-applications) dhe [Ekzekuto rutina LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Redakto aliaset…}}) hap skedarin tënd të aliaseve (rreshtat `ALIAS, *COMMAND`); {{ui:Ruaj}} e zbaton. {{cmd:REINIT}} e zbaton sërish. Shih [Redakto aliaset e komandave](topic:command-aliases).

### LISPEDIT

Aliasi: `VLIDE`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:LISP editor}}. Hap redaktorin LISP, një dritare që mbetet e hapur pranë vizatimit.

- Teksti: numrat e rreshtave, pjesa tjetër e kllapës te kursori shënohet (e kuqe kur nuk ka), {{key:Enter}} shkon rreshtin e ri nën kllapën e hapur, {{key:Tab}} shkruan dy hapësira, {{key:Esc}} e lë tekstin.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): lexon çdo formë, si bën {{cmd:APPLOAD}} me skedarin, dhe bën komandat e saj `c:`. Skedari shfaqet në listën e {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): vlerëson format e përzgjedhura, ose formën ku është kursori.
- {{ui:Stop}}: ndalon një rutinë që po ekzekutohet.
- {{ui:Console}}: çfarë shtypi rutina, dhe çdo gabim me rreshtin e vet; kliko një gabim për të shkuar atje. Teksti ekzekutohet një formë e nivelit të lartë në një kohë, kështu që rreshti është i formës, ose brenda saj rreshti që thërret funksionin që emëron gabimi.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): një skedar `.lsp`. Teksti mbahet edhe në këtë shfletues, kështu që mbyllja e dritares nuk e humb atë.
- Pranë tekstit: funksionet që përcakton rutina, ato që thërret dhe që ky LISP s'i ka ende, ato që thërret dhe nuk janë as të përcaktuara në të as të integruara, dhe listat e plota të asaj që është integruar dhe asaj që nuk është.

Një tekst me një kllapë që s'mbyllet kurrë, ose një varg që s'mbaron kurrë, nuk ekzekutohet: rreshti emërohet. Nuk ka debugger hap-pas-hapi, pika ndërprerjeje ose dritare vrojtimi. Shih [Ekzekuto rutina LISP](topic:run-lisp).

### HELP

Aliasi: `?`. Shfaq çdo komandë, aliaset e saj dhe një përshkrim me një rresht në historikun e rreshtit të komandave. Nuk e hap këtë ndihmë: shtyp {{key:F1}} ose kliko {{ui:Ndihmë}} për atë.

## Kërkesa e zgjedhjes së objekteve

Te çdo kërkesë `Select objects`: kliko objekte, tërhiq dritare (nga e majta në të djathtë) dhe kryqëzime (nga e djathta në të majtë) me dy klikime, ose shtyp dhe tërhiq një lasso ({{key:Space}} gjatë tërheqjes: dritare, kryqëzim, gardh), {{key:Shift}}+klikim për të hequr, dhe shtyp {{key:Enter}} për të përfunduar. Mund të shkruash gjithashtu `ALL` (çdo gjë), `L` (objekti i fundit), `P` (Previous: çfarë përdori komanda e fundit), `F` (Fence: objektet që kryqëzon një vijë pikash; `U` heq një pikë), `W` (Window), `C` (Crossing), `R` (mënyra Remove: klikimet heqin objekte; kërkesa thotë `Remove objects`) dhe `A` (Add përsëri). `?` i liston. Nuk shfaqen te kërkesa. {{key:Tab}} mbi objekte që mbivendosen nxjerr në pah të ardhshmin; kliko për ta zgjedhur. Shih [Zgjidh objektet](topic:select-objects).

### ACCESS

Aliasi: `AX`. Vizato pa shikim. {{cmd:ACCESS}} e ndez ose e fik Access (`On`, `Off`) dhe ndërron tingujt e kapjes (`Sound`) dhe komandat me zë (`Voice`); fillimisht thotë gjendjen. Me Access të ndezur, çdo komandë dhe rezultat lexohet me lexuesin e ekranit dhe zona e vizatimit ka një kursor tastiere. Tema e ndihmës "Vizato pa shikim" ka tastet.

### DESCRIBE

Aliasi: `DESC`. Thotë çfarë mban vizatimi: sa objekte, çfarë lloji, sa i madh, sa shtresa, çfarë është përzgjedhur. Vetëm lexon; nuk ndryshon asgjë.

### WHEREAMI

Aliasi: `WHERE`. Thotë ku është kursori, në njësitë e vizatimit.

### NEARBY

Thotë çfarë është afër kursorit, më i afërti i pari, secili me distancën e vet dhe anën ku ndodhet.

### SAYSEL

Thotë çfarë është përzgjedhur, një fjali për çdo objekt (gjatësia e vijës, skajet dhe këndi; rrezja dhe qendra e rrethit; teksti siç është shkruar).

### VOICE

Ndez ose fik komandat me zë. Njihen në këtë kompjuter; aty ku shfletuesi nuk e bën këtë, zëri mbetet i fikur, përveçse nëse zgjedh shërbimin online të shfletuesit te Cilësimet.

### TOUCHCROSSHAIR

Aliasi: `TCX`. Kryqi i zhvendosur për vizatim me gisht, që maja e gishtit të mos e mbulojë pikën që zgjedh. Ndërsa është i ndezur, një gisht mbi vizatim nuk zgjedh: lëviz një kryq që ndodhet mbi gishtin dhe anash tij. Kapja e objekteve dhe gjurmimi ndjekin kryqin. Heqja e gishtit nuk zgjedh asgjë dhe e lë kryqin aty ku është. Për të zgjedhur, shtyp butonin {{ui:Click}} në cepin e vizatimit, ose prek kudo në vizatim me gisht të dytë. Mbaj {{ui:Click}} ndërsa lëviz gishtin tjetër për të tërhequr (një dritare zgjedhjeje, një lasso, një kapëse). Një gisht i mbajtur i palëvizur, ose butoni {{ui:Enter}}, është Enter. Dy gishtat lëvizin dhe zmadhojnë si më parë. Pranë skajit të poshtëm dhe skajit anësor të largët, kryqi i afrohet gishtit, kështu që çdo pjesë e vizatimit mund të arrihet. Një stilolaps dhe miu zgjedhin drejtpërdrejt.

{{cmd:TOUCHCROSSHAIR}} thotë gjendjen dhe pyet `ON`, `OFF`, `Auto` (vetëm aty ku gishti është treguesi i vetëm, kështu që fiket në një kompjuter me miu), `Distance` (sa larg ndodhet kryqi nga gishti, 24 deri 240 piksela) ose `Side` (`Left`: lart dhe majtas, për dorën e djathtë; `Right` për dorën e majtë; butonat shkojnë në cepin tjetër). Të njëjtat zgjedhje janë te Cilësimet › CadCraft, dhe në një pajisje me ekran prekës shiriti i gjendjes ka një çelës {{ui:Offset crosshair}}. Zgjedhjet mbahen në këtë shfletues.

### WHOHAS

Thotë kush ka hapur një vizatim. Në CadCraft Studio në një kompjuter, hapja e një DWG ose DXF shkruan një skedar të vogël kyçjeje pranë tij (`Plan.dwg.cclock`: kush, që kur, cilës version), e rifreskon çdo minutë ndërsa vizatimi është i hapur, dhe e heq kur mbyllet vizatimi. Hapja e një vizatimi që e ka hapur dikush tjetër thotë kush dhe që kur, dhe ofron {{ui:Open read-only}} (Ruaj pastaj kërkon një emër të ri), {{ui:Open anyway}} (personi tjetër njoftohet te rifreskimi i tij i radhës) ose {{ui:Cancel}}. Ruajtja mbi një skedar që e ka hapur dikush tjetër pyet së pari. Një kyçje që nuk është rifreskuar për pesë minuta thuhet e vjetëruar: kopja tjetër u mbyll pa u ruajtur, ose kompjuteri është në gjumë.

{{cmd:WHOHAS}} pyet `Current` (vizatimi i hapur), `File` (zgjidh një), `FOlder` (zgjidh një dosje: çdo vizatim në të që është i hapur diku listohet), `Path` (shkruaj një shteg të plotë) ose `Name` (emri që shohin të tjerët; emri i llogarisë sate kur je i futur). Studio mund të arrijë vetëm dosje që ke zgjedhur ti: për një vizatim të hapur nga një dosje që s'u zgjodh kurrë, thotë një herë që s'mund ta shënojë vizatimin si të hapur; `FOlder` zgjedh dosjen, dhe kyçjet punojnë atje që nga ai çast. Kyçja është një shënim për njerëzit, jo një pengesë: një program tjetër mund ta shkruajë akoma skedarin. Në një shfletues s'ka dosje për të parë, dhe komanda e thotë këtë.

### OVERKILL

Fshin objekte të dyfishta dhe rregullon vijat dhe harqet që mbivendosen, për vizatime që vijnë plot me vija të dyfishta. `Select objects to clean up`, {{key:Enter}}, pastaj {{key:Enter}} sërish për të pastruar me cilësimet e shfaqura, ose ndrysho një më parë:

- `Tolerance`: sa afër duhet të jenë dy koordinata për t'u numëruar si e njëjta (0.000001 për të nisur; 0 do të thotë saktësisht e njëjta).
- `Ignore`: veti që mund të ndryshojnë midis dy objekteve që janë ndryshe të njëjta. Shkruaj një emër për ta ndërruar: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ose `None` / `All`. {{key:Enter}} kur ke mbaruar.
- `Overlap`: on ose off. Me on, vijat në një drejtëz që mbivendosen bëhen një vijë (një vijë që ndodhet brenda një tjetre fshihet thjesht), dhe harqet e një rrethi që mbivendosen bëhen një hark; harqet që mbyllin një rrotullim të plotë bëhen rreth, dhe një hark që ndodhet në një rreth fshihet.
- `Ends`: on ose off. Me on, vijat në një drejtëz dhe harqet në një rreth që prekin vetëm skaj më skaj bëhen një copë.

Çdo lloj objekti kontrollohet për dyfishime: dy objekte janë të dyfishta kur gjeometria e tyre është e njëjtë brenda tolerancës dhe shtresa, ngjyra, lloji i vijës, shkalla e llojit, trashësia e vijës, trashësia, transparenca dhe lartësia e tyre përputhen (pa ato që injoron). Vijat dhe polivijet e hapura përputhen edhe kur janë vizatuar në drejtim të kundërt. Objekti i parë në renditjen e vizatimit mbetet dhe mban vetitë e veta. Komanda raporton sa objekte kontrolloi dhe fshiu: dyfishime, copa të mbivendosura të bashkuara, copa të bashkuara skaj më skaj. Një {{cmd:UNDO}} i kthen të gjitha. Cilësimet mbeten deri sa mbyll dritaren e vizatimit.

Lë në pace: objektet në shtresa të kyçura dhe objektet e fshehura. Nuk bashkon vija me lartësi (Z) (dyfishimet e saktë të tyre fshihen ende), dhe nuk prek segmentet brenda një polivijeje (nuk hollohen), një vijë që shtrihet mbi segmentin e një polivijeje, dhe një polivijë e mbyllur e vizatuar në drejtim të kundërt.

### DRAWORDER

Ndryshon cilat objekte vizatohen përpara. `Select objects to re-order`, {{key:Enter}}, pastaj `Above objects`, `Under objects`, `Front` ose `Back` ({{key:Enter}} = `Back`). `Above objects` dhe `Under objects` pyesin objektet referencë: përzgjedhja shkon menjëherë përpara më të përparshmit prej tyre, ose menjëherë pas më të pasmit. Objektet e zgjedhura mbajnë rendin e tyre midis tyre. Një hap zhbërjeje. Rendi ruhet me vizatimin në DWG dhe DXF, ku është rendi me të cilin shkruhen objektet.

Në ekran CadCraft vizaton fillimisht zonat e mbushura (vijëzimet e ngurta, polivijet e gjera, maskat), pastaj vijat, pastaj tekstin, kështu që teksti lexohet gjithmonë mbi një mbushje; rendi i vizatimit shfaqet midis objekteve të mbushura dhe midis figurave. Programet e tjera që hapin skedarin vizatojnë çdo objekt sipas rendit të ruajtur.

### TEXTTOFRONT

Sjell tekstin, përmasat dhe udhëheqësit përpara çdo gjëje tjetër në hapësirën e hapur: `Text`, `Dimensions`, `Leaders` ose `All` ({{key:Enter}} = `All`). Një hap zhbërjeje. Thotë kur nuk ka asnjë, ose kur janë tashmë në krye.

### HATCHTOBACK

Dërgon çdo vijëzim të hapësirës së hapur pas çdo gjëje tjetër, që mbushjet të mos mbulojnë më vijat dhe tekstin në skedarin e ruajtur. Pa pyetje. Një hap zhbërjeje.

### ISOLATEOBJECTS

Aliasi: `ISOLATE`. Shfaq vetëm objektet e përzgjedhura: gjithçka tjetër në hapësirën e hapur del nga shikimi deri te {{cmd:UNISOLATEOBJECTS}}. Ndryshe nga {{cmd:LAYISO}}, punon mbi objektet që zgjedh, kudo që janë shtresat e tyre, dhe nuk ndryshon asnjë shtresë. Objektet e fshehura nuk vizatohen, nuk zgjidhen, nuk kapen, nuk zmadhohen dhe nuk printohen, dhe komandat që pranojnë `ALL` i kalojnë anash. Ç'vizaton ndërsa objektet janë të izoluara shfaqet si zakonisht.

Kjo është vetëm për sesionin: asgjë për të nuk ruhet me vizatimin, nuk është një hap zhbërjeje, dhe rihapja e vizatimit shfaq gjithçka. Ndërsa objektet janë të fshehura, shiriti i gjendjes shfaq një buton me numrin e tyre; kliko për t'i shfaqur sërish.

### HIDEOBJECTS

Fsheh objektet e përzgjedhura deri te {{cmd:UNISOLATEOBJECTS}}. Të njëjtat rregulla si {{cmd:ISOLATEOBJECTS}}: vetëm për sesionin, jo i ruajtur, jo një hap zhbërjeje.

### UNISOLATEOBJECTS

Aliasi: `UNISOLATE`, `UNHIDE`. Shfaq sërish çdo objekt të fshehur nga {{cmd:ISOLATEOBJECTS}} ose {{cmd:HIDEOBJECTS}}, dhe thotë sa u kthyen.

### LAYLOCKFADE

Cakton si duken objektet në shtresa të kyçura dhe nëse një klikim i arrin. Thotë gjendjen aktuale, pastaj pranon:

- një numër nga 0 në 90: sasia e zbehjes në përqind (50 për të nisur). 0 e fik zbehjen.
- `ON` ose `OFF`: zbehja ndezur ose fikur, duke e mbajtur sasinë.
- `Pick`, pastaj `Yes` ose `No`: a mund një klikim të zgjedhë objekte në shtresa të kyçura kur nuk po punon ndonjë komandë? `No` (parazgjedhja): nuk mund të zgjidhen fare. `Yes`: një klikim ose dritare i zgjedh, që {{ui:Vetitë}} t'i shfaqë; prapë nuk mund të ndryshohen, dhe `Select objects` i një komande nuk i merr kurrë.

Kapja e objekteve i gjen objektet në shtresa të kyçura në çdo rast. Printimet nuk zbehen kurrë. Të dy cilësimet janë të tuajat, jo të vizatimit, dhe janë edhe te {{ui:Cilësimet}} nën {{ui:Locked layers}}.

### BURST

Shpërthen referencat e blloqeve dhe mban atë që thonë atributet e tyre. `Select block references to burst`, {{key:Enter}}: çdo referencë zëvendësohet nga objektet e bllokut, dhe çdo vlerë e dukshme e atributit bëhet tekst i thjeshtë në shtresën e vetë atributit (një atribut në shtresën 0 bie në shtresën e referencës, si objektet e tjera të bllokut në shtresën 0). Atributet e fshehur hidhen. Një bllok brenda bllokut mbetet referencë blloku. Një hap zhbërjeje; raporton referencat e shpërthyera dhe vlerat e atributeve të kthyera në tekst.

Refuzon një vizatim të lidhur me emër (lidhe më parë, ose kopjo prej tij me {{cmd:NCOPY}}), dhe lë rehat objektet e tjera të zgjedhura. Për referencat e blloqeve {{cmd:EXPLODE}} jep të njëjtat objekte; {{cmd:BURST}} merr vetëm referenca blloqesh dhe numëron tekstin e atributeve.

### TXT2MTXT

Aliasi: `T2M`. Bashkon tekste me një rresht në një tekst paragrafi. `Select single-line text to join`, {{key:Enter}}, pastaj `Paragraph` (rreshtat rrjedhin bashkë dhe mbështjellen sipas gjerësisë së rreshtit më të gjerë) ose `Lines` (çdo tekst mbetet një rresht i vetin); {{key:Enter}} merr atë të përdorurin së fundi. Rreshtat renditen nga lart poshtë, pastaj nga e majta në të djathtë, sipas drejtimit të tekstit të sipërm. Paragrafi varet nga cepi lart-majtas i tekstit të sipërm dhe merr lartësinë, rrotullimin, stilin, shtresën dhe ngjyrën e tij. Një hap zhbërjeje.

Teksti që është tashmë paragraf, teksti bosh dhe objektet e tjera në përzgjedhje lihen rehat, dhe komanda thotë sa.

### NCOPY

Kopjon objekte nga një referencë blloku ose një vizatim i lidhur në vizatim, pa thyer asgjë. `Pick an object inside a block reference or a linked drawing`: objekti më afër klikimit kopjohet aty ku shfaqet, sado thellë në blloqe të jetë; kliko më shumë, pastaj {{key:Enter}}. Pastaj `Base point to move the copies`: {{key:Enter}} i lë në vend, ose jep një pikë bazë dhe një pikë të dytë. E tërë komanda është një hap zhbërjeje.

Një kopje merr shtresën në të cilën shfaqet: një objekt në shtresën 0 brenda një blloku bie në shtresën e referencës ku ishte, dhe një ngjyrë ByBlock bëhet ngjyra e asaj reference. Nga një vizatim i lidhur, shtresa `Plan|Walls` bëhet `Plan$0$Walls` (emri që jep lidhja), e bërë me ngjyrën, llojin e vijës dhe trashësinë e shtresës së lidhur. Vlera e një atributi kopjohet si tekst. Referencat e blloqeve në shtresa të kyçura nuk mund të zgjidhen.

### FLATTEN

Vendos lartësinë (Z) dhe trashësinë e objekteve të zgjedhura në 0. `Select objects to flatten`, {{key:Enter}}. Gjithashtu i sheshton objektet brenda përkufizimeve të blloqeve që përdor përzgjedhja (dhe blloqet brenda tyre), kështu që çdo referencë e atyre blloqeve ndryshon; vizatimet e lidhura lihen siç janë. Një hap zhbërjeje; raporton sa objekte u ndryshuan, dhe thotë kur asnjë nuk kishte lartësi ose trashësi.

Ajo që CadCraft mban nga dimensioni i tretë në një vizatim 2D është: një lartësi te rrathët, harqet, elipset, pikat, teksti, referencat e blloqeve, vijëzimet, udhëheqësit dhe polivijet (kota e tyre), një lartësi në çdo skaj të një vije, dhe një trashësi te vijat, rrathët, harqet, polivijet, pikat dhe teksti, ashtu siç i kishte skedari. {{cmd:FLATTEN}} pastron saktësisht ato. Nuk prek modelin 3D të skedës 3D, faqet ose trupat 3D, dhe një objekt i vizatuar në një plan të pjerrët u soll tashmë në planin e vizatimit kur u hap skedari.

### BREAKLINE

Vizaton një vijë me simbol prerjeje, për një pamje që është prerë e shkurtër. Thotë madhësinë dhe zgjatimin aktual, pastaj `First point of the break line` (ose `Size` / `Extension` për t'i ndryshuar më parë), `Second point`, dhe `Where the break symbol sits`: kliko përgjatë vijës, ose {{key:Enter}} për mesin. Rezultati është një polivijë e vetme në shtresën aktuale: vija, që del pas çdo pike me zgjatimin, me një vijë në formën Z aq të lartë sa madhësia dhe gjysmë aq e gjatë.

`Size` dhe `Extension` mbahen mend si cilësimet e tua (madhësia nis si dyfishi i lartësisë së tekstit të përmasës herë shkalla e përmasës; zgjatimi gjysma e madhësisë). {{key:Enter}} e përsërit komandën.

### AUDIT

Kontrollon vizatimin e hapur për dëmtime dhe i riparon. {{cmd:AUDIT}} shikon çdo objekt në model, në fletë dhe brenda blloqeve, dhe tabelën e shtresave, dhe liston çfarë gjen sipas llojit:

- numra që nuk janë të fundëm ose janë shumë të mëdhenj;
- objekte pa madhësi: një vijë pa gjatësi, një rreth pa rreze, një polivijë me një pikë, tekst pa shkronja ose lartësi, një referencë blloku me shkallë zero;
- objekte në një shtresë që vizatimi nuk e ka; referenca te një bllok që nuk ekziston; emra stilesh teksti dhe përmasash dhe emra llojesh vijash që nuk janë në vizatim;
- blloqe që përmbajnë veten, drejtpërdrejt ose përmes blloqeve të tjerë;
- objekte që ndajnë një ID, një çelës ose një dorezë skedari;
- përmasa pa pikat nga të cilat matën, dhe vijëzime kufiri i të cilave nuk është kontur i mbyllur.

Pastaj pyet `Fix them? [Yes/No]`. `No` s'ndryshon asgjë. `Yes` i riparon të gjitha në një hap zhbërjeje: çfarë s'mund të vizatohet hiqet (vlera të këqija, pa madhësi, bllok që mungon, përmasë e prishur, vijëzim pa kufi të përdorshëm, referenca që mbyll një rreth blloqesh); një shtresë që mungon bëhet; emrat e panjohur të stileve dhe llojeve të vijave kthehen te parazgjedhjet; një çelës i përbashkët zëvendësohet. Thotë sa objekte u hoqën dhe sa u riparuan. Të njëjtat gjetje shfaqen te paneli i Problemeve, secila me {{ui:Repair}} të vet.

Nuk refuzon asgjë, por kontrollon vetëm atë që vetë CadCraft vizaton: të dhënat e mbajtura për programe të tjera (trupat 3D, objektet OLE) nuk hapen.

### RECOVER

Hap një DXF ose DWG të dëmtuar. {{cmd:RECOVER}} kërkon skedarin, lexon çfarë mund të lexohet në vend që ta refuzojë skedarin, liston çfarë kaloi ose supozoi, pastaj kontrollon dhe riparon vizatimin si bën {{cmd:AUDIT}} me `Yes`.

- DXF: rreshtat që nuk janë pjesë e një çifti kod dhe vlerë kalohen deri sa çiftet të rreshtohen sërish; një seksion pa fund mbyllet; një skedar i shkurtuar lexohet deri te prerja; një DXF binar i shkurtuar lexohet deri te vlera e tij e fundit e plotë. Kur një seksion, bllok ose objekt akoma s'mund të lexohet, lihet jashtë dhe emërtohet, dhe leximi vazhdon përtej tij.
- DWG: objektet që s'kalojnë kontrollet e tyre ose s'mund të dekodohen lihen jashtë, dhe një listë objektesh e humbur rindërtohet duke ecur nëpër të dhënat e objekteve.

Skedari në disk nuk ndryshon. Vizatimi i rikuperuar hapet i paruajtur: ruaje me një emër të ri. Një skedar nga i cili nuk mund të lexohet asgjë refuzohet, me arsyen.

### LEGACYTEXT

Shndërron tekstin e shkruar me fonte të vjetra vietnameze 8-bit në Unicode. Emrat e shkurtër `TEXTTOUNICODE` dhe `VNTEXT`.

Vizatimet e vjetra vietnameze i mbajnë tekstet e tyre si karaktere perëndimore që vetëm fonti i kthen në vietnamisht: tekst TCVN3 në fontet ABC (`.VnTime`, `.VnArial`, dhe fontet me shkronja të mëdha që emrat e tyre përfundojnë me `H`), dhe tekst VNI në fontet VNI (`VNI-Times`). CadCraft e shfaq një tekst të tillë siç lexohet sapo hapet vizatimi, sipas fontit të stilit të tij, të objektit, ose të një pjese brenda tekstit paragraf; skedari ende mban karakteret e vjetra.

{{cmd:LEGACYTEXT}} thotë sa tekste gjeti në secilën kodim dhe pyet `Convert … to Unicode?`. `Yes` rishkruan çdo një (modelin, fletët, blloqet, vlerat dhe përcaktimet e atributeve), dhe i jep stileve të tekstit një font Unicode (Times New Roman, Arial ose Courier New sipas llojit të fontit të vjetër), në një hap zhbërjeje. Formatimi brenda tekstit paragraf mbetet.

Kur asnjë tekst s'përdor një font të njohur (një stil që ka humbur emrin e fontit), pyet `Read selected texts as [Tcvn3/Vni/None]`: zgjidh kodimin dhe zgjidh tekstet. Teksti që është tashmë Unicode lihet rehat. Tekstet e përmasave të mbishkruara dhe tekstet e udhëheqësve të shumëfishtë nuk shndërrohen.
