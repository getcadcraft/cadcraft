---
title: Referenca e komandave
summary: Çdo komandë në aplikacionin e vizatimit CadCraft, me emrat e saj të shkurtër, pyetjet që bën, opsionet dhe parazgjedhjet.
keywords: komanda, aliase, listë komandash, sipërfaqe, perimetër, measuregeom, vijë, pline, rreth, hark, prerje, ofset, dimlinear, bllok, fut, paraqitje, printo, zmadhim, ndihmë, copyclip, cutclip, pasteclip, pasteorig, copybase, dublo, selectall
from: 979ffe3b
---

Shkruaj emrin e një komande ose një alias dhe shtyp {{key:Enter}} ose {{key:Space}}. Shkronjat e mëdha ose të vogla nuk kanë rëndësi, dhe një `_`, `-`, `.` ose `'` në fillim injorohet. Shkruaj `HELP` (ose `?`) për të shfaqur një listë të shkurtër të çdo komande në historikun e rreshtit të komandës; shtyp {{key:F1}} për këtë ndihmë.

Si lexohen kërkesat: opsionet janë në kllapa katrore, dhe zgjedh një duke shkruar shkronjat e tij të mëdha (`D` për Diameter). Një parazgjedhje është në kllapa këndore; shtyp {{key:Enter}} për ta pranuar. Aty ku kërkohet një pikë, mund të klikosh ose të shkruash çdo format nga [Hyrja e koordinatave dhe distancave](topic:coordinate-entry). Aty ku kërkohet një distancë, mund të shkruash një numër ose të klikosh dy pika.

Shtypja e {{key:Enter}} aty ku kërkohet një pikë ose një objekt, dhe nuk ka parazgjedhje, e përfundon komandën. {{key:Esc}} e anulon. Çfarëdo që bëri një komandë është një hap zhbërjeje.

## Vizato

### LINE

Emrat e shkurtër: `L`. Segmente të drejta, secili objekt i vetë.

- `Specify first point` (Enter: nis nga pika e fundit që dhe)
- `Specify next point [Undo]`, e përsëritur. Pas dy segmentesh: `[Undo/Close]`.
- `U` heq segmentin e fundit, `C` mbyll te pika e parë dhe përfundon. Enter përfundon.

### PLINE

Emrat e shkurtër: `PL`. Një polivijë me segmente vije dhe harqe.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close kur ka dy segmente)
- `A` kalon te harqet: `Specify endpoint of arc [Line/CLose/Undo]`. Çdo hark vazhdon tangjent me segmentin para tij. `L` kthehet te vijat, `CL` mbyll me hark.
- Enter përfundon; polivija mbetet e hapur.

### CIRCLE

Emrat e shkurtër: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` pyet `Specify diameter of circle`.
- `2P`: dy skajet e një diametri. `3P`: tre pika në rreth.
- `T` (ose komanda `TTR`, dhe {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Rreth: Tan, Tan, Rreze}}): `Specify point on object for first tangent of circle`, pastaj i dyti, pastaj rreza (Enter: e fundit). Rrethi prek të dy objektet (vija, harqe, rrathë, segmente polivijash, edhe brenda blloqeve); nga rrathët që e bëjnë këtë zgjidhet ai që prek më afër pikave të tua. "Circle does not exist" kur asnjë nuk përshtatet.
- `TTT` (ose {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Rreth: Tan, Tan, Tan}}): tre objekte; rrethi që i prek të tre, më afër pikave të tua (tri vija japin rrethin e brendshëm ose një të jashtëm, varësisht ku klikon).

### ARC

Emrat e shkurtër: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: një hark që kalon nëpër tre pika.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Harku shkon në drejtim të kundërt të akrepave nga fillimi te fundi.

### RECTANG

Emrat e shkurtër: `REC`, `RECTANGLE`. Një polivijë e mbyllur.

- `Specify first corner point`, `Specify other corner point`. Shkruaj `@width,height` për qoshen e dytë.

### POLYGON

Emrat e shkurtër: `POL`. Një shumëkëndësh i rregullt si polivijë e mbyllur.

- `Enter number of sides <4>` (3 deri 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: kliko ose shkruaj një pikë; distanca cakton madhësinë dhe drejtimi e rrotullon shumëkëndëshin.

### ELLIPSE

Emrat e shkurtër: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, pastaj distanca te boshti tjetër.
- `I` (`Isocircle`, vetëm ndërsa {{cmd:ISODRAFT}} është ndezur): qendra, pastaj rrezja ose `Diameter`: elipsi që shfaq një rreth në planin izometrik aktual.

### HATCH

Emrat e shkurtër: `H`, `BH`, `BHATCH`; ose {{ui:Vijëzim}} te shiriti i veglave. Shfaq fillimisht modelin, shkallën dhe këndin aktual.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, e përsëritur (`Undo` kur ka një zonë): çdo klikim shton zonën e mbyllur rreth tij, me format e mbyllura brenda si ishuj. Enter bën një vijëzim nga të gjitha.
- `S`: `Select closed objects` (polivija të mbyllura, rrathë, elipse të mbyllura).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): mbushja është një gradient në vend të modelit. Shih {{cmd:GRADIENT}} për pyetjet e tij.

Shih [Vijëzimi dhe zonat e mbushura](topic:hatch).

### GRADIENT

Emrat e shkurtër: `GD`. Mbush një zonë me gradient të një ose dy ngjyrash. Pyet fillimisht për gradientin, pastaj vazhdon si bën {{cmd:HATCH}} (`Pick internal point`, `S` për objekte të mbyllura, {{key:Enter}} për të përfunduar).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, e përsëritur; çdo herë shfaq gradientin siç është tani.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ose një prej tyre i kthyer (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Shkronjat e para mjaftojnë.
- `O`: një ngjyrë, pastaj nuanca e saj nga 0 deri 1 (0 e bën të zezë, 0.5 është vetë ngjyra, 1 e bën të bardhë). `TW`: ngjyra e parë dhe e dytë. Një ngjyrë është një numër nga 1 deri 255, tre numra si `255,128,0`, ose `#rrggbb`.
- `A`: këndi ku shtrihet gradienti. `C`: qendrore Yes ose No (No e zhvendos mesin e gradientit në një anë).
- Refuzon një ngjyrë ose lloj që nuk njeh, dhe një nuancë jashtë 0 deri 1.

{{cmd:HATCHEDIT}} `G` dhe Vetitë (Gradient) ndryshojnë më vonë një gradient, ose kthejnë çdo vijëzim në një të tillë. Një gradient vizatohet në ekran dhe printohet. DWG 2004 e më vonë e mbajnë si gradient të vërtetë; DXF 2000 dhe DWG 2000 e mbajnë për CadCraft, dhe programet e tjera shohin një mbushje të ngurtë me ngjyrën e parë.

### HATCHGENERATEBOUNDARY

Emrat e shkurtër: `HGB`. Rikrijon kufirin nga një vijëzim që e humbi. `Select hatches` (ose zgjidhi më parë), pastaj `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Çdo lak i vijëzimit bëhet një polivijë e mbyllur në shtresën e vijëzimit; polivijat e reja mbeten të zgjedhura. Një skaj i lakuar kthehet si pjesët e shkurtra të drejta që mban vijëzimi.
- Me Yes vijëzimi ndjek kufirin e ri, si një vijëzim i bërë me {{cmd:HATCH}}. Një hap zhbërjeje.
- Thotë kështu kur nuk u zgjodh asnjë vijëzim.

### POINT

Emrat e shkurtër: `PO`; ose {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Pikë}}. Objekte pike, një për klikim, deri në Enter.

- `Specify a point`

### XLINE

Emrat e shkurtër: `XL`; ose {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Vijë ndihmëse}}. Vija ndihmëse, pa fund në të dyja anët. Shih [Vijat ndihmëse dhe rrezet](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, pastaj `Specify through point` për çdo vijë, deri në Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` pyet `Select a line object` së pari.
- `B`: `Specify angle vertex point`, `Specify angle start point`, pastaj `Specify angle end point` për çdo vijë.
- `O`: `Specify offset distance [Through] <Through>`, pastaj `Select a line object` dhe `Specify side to offset` (ose `Specify through point`) për çdo vijë.

### RAY

Pa emra të shkurtër; ose {{ui:Vizato}} › {{ui:Më shumë}} › {{ui:Rreze}}. `Specify start point`, pastaj `Specify through point` për çdo rreze, deri në Enter.

### TEXT

Emrat e shkurtër: `DT`, `DTEXT`; ose {{ui:Tekst}} te shiriti i veglave. Tekst një rreshti; çdo rresht është objekt i vet.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, pastaj `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, e përsëritur: çdo Enter fillon rreshtin tjetër poshtë. Enter në një rresht bosh përfundon. {{key:Space}} shkruan një hapësirë këtu.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} vendos shenja mbi një vijë, hark, rreth, polivijë, spline ose elips që e presin në pjesë të barabarta. Zgjidh objektin, pastaj jep numrin e pjesëve (2 deri 32767). Një objekt i hapur merr një shenjë më pak se pjesët; një objekt i mbyllur merr një shenjë edhe në fillimin e vet. Vetë objekti nuk pritet. Shenjat janë pika; `Block` kërkon në vend të kësaj një bllok të këtij vizatimi dhe nëse rrotullohet për t'iu përshtatur objektit. Gjatësitë përgjatë splineve dhe elipseve matën me korda të shkurtra. Refuzon tekstin, vijëzimet dhe objektet e tjera pa gjatësi.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} vendos një shenjë çdo gjatësi të dhënë përgjatë një vije, harku, rrethi, polivijeje, spline ose elipse, duke numëruar nga skaji më i afërt me vendin ku klikove (një objekt i mbyllur: nga fillimi i tij). Jepe gjatësinë duke e shkruar ose me dy pika. Skaji i largët i një objekti të hapur nuk merr shenjë. `Block` vendos një bllok në çdo shenjë në vend të një pike. Refuzon një gjatësi 0, një gjatësi më të madhe se objekti, dhe një që do të bënte më shumë se 32767 shenja.

### BOUNDARY

Emrat e shkurtër: `BO`, `BPOLY`. {{cmd:BOUNDARY}} bën një polivijë të mbyllur rreth zonës që mban pikën që zgjedh, nga çdo vijë, hark, rreth, polivijë dhe kurbë që e kufizon në ekran. Pjesët që shtrihen mbi një hark ose rreth kthehen si segmente harku; pjesët e elipseve dhe splinëve kthehen si segmente të shkurtra të drejta. Me `Islands` të ndezur (cilësimi fillestar), çdo zonë e mbyllur brenda saj merr edhe polivijën e vet. Vazhdo të zgjedhësh pika; Enter përfundon. Objektet që e kufizojnë zonën lihen ashtu si janë. Thotë kështu kur asnjë zonë e mbyllur nuk mban pikën.

### BLEND

{{cmd:BLEND}} vizaton një spline midis skajeve të dy kurbave të hapura. Zgjidh çdo kurbë afër skajit që do të bashkosh. `CONtinuity` zgjedh `Tangent` (spline del dhe arrin përgjatë të dy kurbave) ose `Smooth` (ndjek edhe mënyrën si lakohen në skaje); zgjedhja mbahet për sesionin. Dy kurbat nuk ndryshojnë. Refuzon objekte të mbyllura dhe dy skaje që takohen tashmë.

### REGION

Alias: `REG`. {{cmd:REGION}} i kthen objektet e mbyllura në rajone: zona të sheshta që mund t'i bashkosh, prerë dhe matësh. Zgjidh rrathë, polivija të mbyllura, elipse ose spline të mbyllura, ose vija, harqe dhe polivija të hapura që mbyllin një lak skaj më skaj; çdo lak bëhet një rajon i vetëm dhe zëvendëson objektet nga të cilat erdhi. Harqet mbeten harqe; elipset dhe splinet bëhen segmente të shkurtra të drejta. Ç'nuk është i mbyllur dhe nuk mbyll asnjë lak lihet siç është, dhe thotë sa janë. Në vizatim një rajon është një ose më shumë polivija të mbyllura të mbajtura së bashku si një grup pa emër, kështu që një klikim zgjedh tërë rajonin dhe një kopje është një rajon i vetë; programet e tjera që hapin skedarin shohin polivija të mbyllura.

Me rajone në vizatim, {{cmd:UNION}}, {{cmd:SUBTRACT}} dhe {{cmd:INTERSECT}} në skedën 2D punojnë mbi rajone: `UNION` bashkon rajonet e zgjedhura në një (rajonet që janë të ndara bëhen një rajon me disa kontura), `SUBTRACT` kërkon rajonet nga të cilët të zbresë, pastaj ato që heq (një vrimë mbetet pjesë e rajonit), `INTERSECT` mban sipërfaqen që i kanë të gjithë të përbashkët. Çdo komandë thotë sipërfaqen e rezultatit dhe është një hap zhbërjeje. Refuzojnë kur nuk do të mbetej asgjë ose nuk ka asgjë të përbashkët. Në skedën 3D, dhe në një vizatim pa rajone, të njëjtat komanda punojnë mbi trupa të ngurtë si më parë.

## Ndrysho

### MTEXT

Emrat e shkurtër: `MT`, `T`; ose {{ui:Paragraf}} te shiriti i veglave. Tekst paragrafi që rreshtohet në një gjerësi, shkruar në vend.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: gjerësia mes dy qoshe është vendi ku teksti rreshtohet. `H` pyet `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` dhe kalon qoshen e dytë.
- Pastaj hapet një kuti mbi vizatim: shkruaj, {{key:Enter}} për paragraf të ri, {{key:Mod+Enter}} ose një klikim jashtë për të përfunduar, {{key:Esc}} për të anuluar. Shiriti i saj cakton lartësinë, hapësirën e rreshtave, gjerësinë dhe rreshtimin. Shih [Shto tekst dhe etiketa](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Emrat e shkurtër: `ED`, `DDEDIT`; ose kliko dy herë një tekst. `Select a text to edit`, e përsëritur deri në {{key:Enter}}: secili hapet në të njëjtën kuti. I nisur mbi një tekst të zgjedhur ose me dy klikime, redakton atë një dhe përfundon.

### ERASE

Emrat e shkurtër: `E`, `DELETE`; ose shtyp {{key:Delete}} me objekte të zgjedhura.

- `Select objects` (kapërcehet kur objektet janë zgjedhur më parë)

### MOVE

Emrat e shkurtër: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, shkruar si `dx,dy`.

### COPY

Emrat e shkurtër: `CO`, `CP`. Kopjon sa herë jep pika.

`Array` te kërkesa e pikës së dytë bën një rresht në një hap: jep numrin e artikujve (origjinali numërohet si një), pastaj pikën ku shkon kopja e parë; të tjerat ndjekin me të njëjtën hapësirë. `Fit` e bën atë pikë vendin e kopjes së fundit në vend të kësaj, me të tjerat të shpërndara njësoj mes tyre.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, e përsëritur deri në Enter. `U` heq kopjen e fundit.

### ROTATE

Emrat e shkurtër: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: gradë, pozitive në drejtim të kundërt të akrepave; ose kliko një pikë për të rrotulluar drejt saj.

### SCALE

Emrat e shkurtër: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: shkruaj një faktor si `0.5` ose `2`. Një pikë e klikuar i jep distancën e saj nga pika bazë si faktor.

### MIRROR

Emrat e shkurtër: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Emrat e shkurtër: `AL`; ose {{ui:Ndrysho}} › {{ui:Më shumë}} › {{ui:Përputh}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Me dy çifte: `Scale objects based on alignment points? [Yes/No] <N>`

Shih [Përputh objektet](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (ose zgjedhja), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` pyet për pikën. Zgjedhja mbetet.

### DISTRIBUTE

- `Select objects` (të paktën tre), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Dy të jashtmet mbeten; zgjedhja mbetet.

### ALIGNPANEL

Emrat e shkurtër: `ALP`; ose {{ui:Ndrysho}} › {{ui:Më shumë}} › {{ui:Përputh dhe shpërndaj}}. Hap panelin që e ekzekuton ALIGNTO dhe DISTRIBUTE me klikime.

### LASER

Emrat e shkurtër: `LASERCUT`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Lazer…}}. Hap panelin Lazer mbi vizatim: çfarë bën çdo shtresë (prerje, gërvishtje, gdhendje, mbushje, figurë), pamja paraprake, G-code GRBL për t'u ruajtur, dhe kornizimi dhe dërgimi përmes Web Serial. Shih [Dërgo një vizatim te një lazer](topic:laser-cutting).

### STRETCH

Emrat e shkurtër: `S`; ose {{ui:Shtrij}}. `Select objects to stretch`: zvarrit dritare kryqëzuese (ose shkruaj `C`) mbi skajet për të lëvizur. `Specify base point [Displacement]`, `Specify second point`. Pikat brenda dritareve lëvizin: skajet e vijave, kulmet e polivijeve (segmentet harqe mbajnë lartësinë e tyre), pikat e përmasave; rrathët, elipset, teksti, pikat dhe blloqet lëvizin tërë kur qendra ose pika e futjes e tyre është brenda. Një zgjedhje e bërë para komandës mban dritaret kryqëzuese (dhe lasso-t) që e bënë, kështu që shtrijnë në të njëjtën mënyrë. Pa dritare, objektet lëvizin tërë.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Emrat e shkurtër: `AR`; ose {{ui:Grup}}. `Select objects`, pastaj `Enter array type [Rectangular/POlar] <Rectangular>` (vetëm për ARRAY).

- Rectangular fillon me 4 kolona × 3 rreshta, me hapësirë 1.5 herë madhësinë e objekteve, shfaqur si pamje paraprake. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pyet kolonat dhe rreshtat, `S` distancat mes kolonave dhe mes rreshtave (negative shkon majtas ose poshtë), `COL` dhe `R` nga një drejtim secili.
- Polar pyet `Specify center point of array`, fillon me 6 artikuj rreth gjithë rrethit, të rrotulluar. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` artikujt, `F` këndi për t'u mbushur (+ në drejtim të kundërt të akrepave, − në drejtim të akrepave), `ROT` Yes ose No.
- {{key:Enter}} (eXit) bën kopjet, si objekte të thjeshta. Një hap zhbërjeje.
- `AS` (ASsociative) kalon mes kopjeve të thjeshta dhe një grupi që mbetet i redaktueshëm: një objekt që e ndryshon më vonë me {{cmd:ARRAYEDIT}}, me grip-et e tij ose te Vetitë. Zgjedhja mbahet mend ({{cmd:ARRAYASSOCIATIVITY}}); fillon me kopje të thjeshta.

### ARRAYPATH

Kopjon përgjatë një kurbe. `Select objects`, pastaj `Select path curve`: një vijë, hark, rreth, elips, polivijë ose spline (jo një nga objektet që po grupohen). Shtegu nis nga skaji i tij më i afërt me objektet, dhe artikulli i parë janë objektet aty ku janë.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, me pamje paraprake. `M`: `Divide` shpërndan artikujt në mënyrë të barabartë përgjatë gjithë shtegut, `Measure` vendos një në çdo distancë të dhënë. `I`: numri i artikujve (me Measure, 0 do të thotë sa të përshtaten; një numër që kalon fundin e shtegut kufizohet në atë që përshtatet). `SP`: distanca mes artikujve përgjatë shtegut (kalon te Measure). `AL`: Yes e rrotullon çdo artikull që të ndjekë shtegun, No i mban drejtë.
- `AS` si te {{cmd:ARRAY}}. Me të ndezur, grupi mban kopjen e vet të formës së shtegut: ndryshimi i kurbës së shtegut më vonë nuk i lëviz artikujt.
- Refuzon një shteg që nuk është kurbë, dhe një artikull të vetëm.

### ARRAYEDIT

Ndryshon një grup të bërë me ASsociative. `Select array` (ose zgjidhe më parë). Shfaq ç'është grupi tani, pastaj pyet deri në {{key:Enter}}:

- Rectangular: `COL` kolonat dhe hapësirat e tyre, `R` rreshtat dhe hapësirat e tyre, `A` këndi ku shtrihen kolonat.
- Polar: `I` artikujt, `F` këndi i mbushjes, `ROT` rrotullo artikujt Yes ose No.
- Path: `M` Divide ose Measure, `I` artikujt, `SP` hapësira, `AL` përputhu me shtegun.
- `S` (Source) hap objektet që përsërit grupi, veçmas, si redaktuesi i blloqeve. Vizato dhe redakto atje; {{cmd:ARRAYCLOSE}} ruan ose heq, dhe çdo artikull ndjek.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, pastaj kliko artikujt që do të zëvendësohen, {{key:Enter}}. Ata artikuj tregojnë zëvendësimin; objektet zëvendësuese largohen nga vizatimi dhe jetojnë në grup. `RES` (RESet) tregon sërish objektet burimore në çdo artikull.
- Çdo ndryshim është një hap zhbërjeje. Refuzon kopjet e thjeshta, një referencë bllokut të thjeshtë, dhe një grup në një shtresë të kyçur.

Të njëjtat numra janë te Vetitë, nën Grup, dhe grupi ka grip-e: pika bazë e tij e lëviz, grip-i te artikulli i dytë cakton hapësirën, grip-i pas artikullit të fundit cakton numrin (polar: artikulli i dytë cakton sa artikuj, artikulli i fundit këndin e mbushjes). {{cmd:EXPLODE}} e kthen grupin në kopje të thjeshta.

### ARRAYCLOSE

Mbyll {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Thotë kështu kur asnjë objekt burimor i grupit nuk është i hapur. {{cmd:BCLOSE}} bën të njëjtën gjë.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Cakton çfarë fillojnë {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR dhe {{cmd:ARRAYPATH}}; opsioni i tyre `AS` ndryshon të njëjtin cilësim. Mbahet në këtë shfletues.

### OFFSET

Emrat e shkurtër: `O`. Vija, harqe, rrathë dhe polivija.

Kur një polivijë lëviz nga jashtë dhe segmentet e saj të drejta ndahen në një qoshe, {{cmd:OFFSETGAPTYPE}} vendos si mbyllet hapësira.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, pastaj `Specify point on side to offset` (ose, me Through, `Specify through point`), e përsëritur deri në Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: si mbyll {{cmd:OFFSET}} hapësirat te qoshet e jashtme të një polivijeje. `0` zgjat segmentet deri sa takohen (cilësimi fillestar), `1` i bashkon me një hark rreth qoshes së vjetër, `2` me një prerje të drejtë. Qoshet e brendshme dhe segmentet e harqeve nuk preken. Mbahet për këtë sesion.

### EXTRIM

{{cmd:EXTRIM}} pret gjithçka në njërën anë të një skaji. Zgjidh skajin prerës (një vijë, hark, rreth, polivijë, elips, spline ose vijë ndihmëse), pastaj një pikë në anën që do të pastrohet: çdo vijë, hark, rreth, polivijë dhe vijë ndihmëse që kryqëzon skajin humbet pjesën e vet në atë anë, që fillon te skaji. Ndërsa zgjedh anën, pjesët që do të largoheshin ndjekin treguesin. Për një skaj të mbyllur anët janë brenda dhe jashtë. Objektet që vetëm prekin skajin, dhe teksti, vijëzimet, splinet dhe elipset që e kryqëzojnë, lihen ashtu si janë. Një hap zhbërjeje.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: si nisin {{cmd:TRIM}} dhe {{cmd:EXTEND}}. `1` Quick: çdo objekt është skaj prerës ose kufi. `0` Standard: pyesin fillimisht për skajet. Gjithashtu `(setvar "TRIMEXTENDMODE" 0)` në LISP.

### TRIM

Emrat e shkurtër: `TR`. Shfaq fillimisht `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. Në modalitetin Quick çdo objekt i dukshëm është skaj prerës, dhe një objekt që asgjë nuk e kryqëzon fshihet; në modalitetin Standard pyet fillimisht `Select cutting edges (Enter = every object)` dhe pret vetëm aty.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, e përsëritur: kliko pjesën që do të heqësh (shfaqet gri dhe me viza ndërsa treguesi mbetet mbi të), zvarrit një shteg përmes disa pjesësh (të gjitha shkojnë në një hap), ose kliko dy vende boshe për një gardh mes tyre. {{key:Shift}} zgjat në vend të kësaj. `T` zgjedh skajet prerëse (modaliteti Standard), `F` pyet pikat e gardhit, `C` dy qoshe dritareje (pjesët që janë pjesërisht brenda shkojnë), `O` pyet `Enter a trim mode option [Quick/Standard]`, `E` pyet `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` fshin objekte që zgjedh, `U` zhbën zgjedhjen ose zvarritjen e fundit. Enter përfundon. Shih [Prit dhe zgjat](topic:trim-and-extend).

- Një klikim mbi një vijëzim e pret vijëzimin: skajet prerëse ndajnë zonën e vijëzuar, dhe pjesa që klikove hiqet (nuk mbetet asnjë kontur i vizatuar aty ku ishte). Vijëzimi mban modelin ose gradientin e vet; një vijëzim që ishte i lidhur me kufirin e vet nuk është më i lidhur pas kësaj, sepse nuk e mbush më atë. Thotë kështu kur asnjë skaj prerës nuk e ndan vijëzimin aty, kur klikimi është jashtë vijëzimit, dhe kur nuk do të mbetej asgjë (përdor {{cmd:ERASE}}). Një shteg ose gardh i zvarritur nuk pret vijëzimet.

### EXTEND

Emrat e shkurtër: `EX`. E njëjta gjë si TRIM nga ana tjetër: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Një klikim zgjat skajin më të afërt të tij deri te kufiri i radhës; një shteg ose gardh i zvarritur zgjat çdo objekt që kryqëzon; {{key:Shift}} pret. `B` zgjedh skajet kufitare (modaliteti Standard). Mode dhe Edge ndahen me TRIM.

### LINKVIEWS

Emrat e shkurtër: `SYNCVIEWS`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Lidh pamjet e paneleve}}, ose ikona e lidhjes te skedat e vizatimit. `Link the panes' views [ON/OFF]` (Enter zgjedh gjendjen tjetër): ndërsa është e ndezur, një lëvizje ose zmadhim në panelin aktiv lëviz çdo panel që shfaq të njëjtin lloj hapësire. Shih [Ndaje ekranin](topic:split-screen).

### OPENIN3D

Pa emra të shkurtër; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Hap në ModelCraft}} aty ku aplikacioni i modelimit 3D merr një vizatim të dorëzuar. E hap atje në një skedë të re, si DWG (asgjë nuk ngarkohet). Nëse shfletuesi bllokon skedën, e thotë.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: çfarë vizaton shtypja dhe zvarritja në një vend bosh. E njëjta gjë si Settings › CadCraft › Dragging to select. Shih [Zgjedhja me lasso](topic:lasso-selection).

### FILLET

Emrat e shkurtër: `F`. Vija, harqe, rrathë dhe polivija. Shfaq fillimisht `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` pyet `Specify fillet radius <last>`. `T` pyet `Enter Trim mode option [Trim/No trim]`: me No trim objektet mbeten si janë dhe shtohet vetëm harku.
  - `M` e mban komandën për më shumë qoshe deri në {{key:Enter}}; `U` heq qoshen e fundit pa e lënë komandën.
  - `P` pyet `Select 2D polyline [Radius]` dhe rrumbullakos çdo qoshe ku takohen dy segmente të drejta. Rrumbullakimet që ka tashmë zëvendësohen nga rrezja e re; rrezja 0 i heq. Qoshet ku anët janë shumë të shkurtra për rrezen mbeten dhe numërohen.
- `Select second object or shift-select to apply corner [Radius]`. Mbaj {{key:Shift}} ndërsa klikon për një qoshe të mprehtë, çfarëdo rreze.

Kliko çdo objekt në pjesën që do të mbash. Dy vija që nuk takohen zgjatën. Dy vija paralele marrin një gjysmërreth mbi hapësirën, në skajin e vijës së parë më të afërt me klikimin tënd. Një rreth nuk pritet kurrë. Dy segmente të një polivijeje pranë njëri-tjetrit marrin harkun brenda polivijës; një polivijë dhe një objekt tjetër punojnë kur prerja bie mbi segmentin e parë ose të fundit të polivijës.

### CHAMFER

Emrat e shkurtër: `CHA`. Vija dhe segmentet e drejta të polivijeve. Shfaq fillimisht distancat aktuale (ose gjatësinë dhe këndin).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` pyet `Specify first chamfer distance <last>` dhe `Specify second chamfer distance <the first>`: e para pritet nga vija e parë që zgjedh, e dyta nga tjetra.
  - `A` pyet `Specify chamfer length on the first line` dhe `Specify chamfer angle from the first line`.
  - `E` (mEthod) zgjedh cilin nga të dy përdor pjerrësia e radhës. `T`, `M`, `U` dhe `P` punojnë si te {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klikim bën një qoshe të mprehtë.

Një distancë më e gjatë se vija refuzohet (`Distance is too large.`).

### BREAK dhe BREAKATPOINT

Emrat e shkurtër: `BR`. `Select object` (aty ku klikon është pika e parë), `Specify second break point [First point]`; `F` pyet `Specify first break point` dhe `Specify second break point`. Pjesa ndërmjet hiqet; në një rreth, në drejtim të kundërt të akrepave nga pika e parë. BREAKATPOINT pyet `Specify break point` dhe e ndan objektin në dy aty (jo një rreth).

### LENGTHEN

Emrat e shkurtër: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: një zgjedhje shfaq `Current length` (dhe këndin e përfshirë të harkut) dhe pyet përsëri. `DE` pyet `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` zvarrit. Pastaj `Select an object to change [Undo]`, e përsëritur: skaji më i afërt me klikimin lëviz. Vija, harqe dhe polivija të hapura.

### JOIN

Emrat e shkurtër: `J`. `Select objects to join`. Vijat, harqet dhe polivijat e hapura që takohen skaj më skaj bëhen polivija (të mbyllura kur zinxhiri mbyllet); vijat në një vijë bëhen një vijë; harqet e një rrethi bëhen një hark ose rreth. Historiku thotë sa objekte u bashkuan dhe sa nuk u bashkuan.

### MATCHPROP

Emrat e shkurtër: `MA`, `PAINTER`. `Select source object`, pastaj `Select destination objects [Settings]` dhe {{key:Enter}}. Kopjon shtresën dhe ngjyrën, dhe mes objekteve të të njëjtit lloj lartësinë dhe gjerësinë e tekstit, madhësitë e përmasave, ose modelin e vijëzimit. `S` pyet `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, e përsëritur deri në {{key:Enter}}; zgjedhja mbahet për sesionin.

### EXPLODE

Emrat e shkurtër: `X`. Polivijat bëhen vija dhe harqe, referencat e blloqeve bëhen objektet e tyre, përmasat bëhen vija, kokë shigjete dhe tekst. Një grup që mbetet i redaktueshëm ({{cmd:ARRAYEDIT}}) bëhet kopje të thjeshta të objekteve të tij.

- `Select objects`

### GROUP

Emri i shkurtër: `G`. {{cmd:GROUP}} i jep objekteve të zgjedhura një emër që kanë të përbashkët. Zgjidh objektet, pastaj shkruaj një emër (pa hapësira; `?` i liston grupet; Enter bën një grup pa emër) dhe, për një grup të emëruar, një përshkrim opsional. Që nga ajo kohë një klikim mbi një prej tyre, ose një dritare që përfshin një, zgjedh tërë grupin, kështu që lëvizin, kopjohen dhe fshihen bashkë; çdo objekt është akoma objekt i vetë. Një objekt mund të jetë në disa grupe. Kopja e një grupi të tërë është një grup i ri pa emër; kopja e një anëtari të vetëm bashkohet me grupin. Grupet i përkasin hapësirës ku u bënë (modeli ose një fletë). Ruhen kur ruan si DWG ose DXF dhe hap sërish skedarin në CadCraft; skedarët DXF 2000 i mbajnë edhe si objekte grupi për programet e tjera, dhe grupet e bëra në një program tjetër lexohen kur hapet një DXF ose DWG.

### UNGROUP

{{cmd:UNGROUP}} i çmonton grupet: zgjidh objekte të grupeve (çdo grup ku ata janë çmontohet) ose shkruaj `Name` dhe emrin e grupit. Objektet mbeten në vizatim. Një hap zhbërjeje i kthen grupet.

### GROUPEDIT

{{cmd:GROUPEDIT}} ndryshon një grup. Zgjidh një nga objektet e tij, ose `Name` dhe emrin e tij; një grup që është tashmë i zgjedhur merret si është. Pastaj: `Add` objekte (të zgjedhura një nga një, jo grup pas grupi), `Remove` objekte, `REName` grupin, ndrysho `Description`-in e tij, ose cakto `Selectable` (nëse një klikim mbi një objekt zgjedh tërë grupin). `eXit` ose Enter përfundon. Një grup pa asnjë objekt mbetur zhduket.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: me `1` (cilësimi fillestar) një klikim ose dritare mbi një objekt të grupuar zgjedh tërë grupin; me `0` objekte të vetme, që të mund të redaktosh një anëtar. Mbahet për këtë sesion.

## Kujtesa e ndërmjetme

Kujtesa e ndërmjetme e CadCraft: funksionon brenda një vizatimi, midis vizatimeve dhe midis skedave të CadCraft në këtë shfletues. Shih [Kopjo, ngjit dhe dublo](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ose {{ui:Kopjo}} te grupi {{ui:Redakto}}. Kopjon objektet në kujtesën e ndërmjetme, me blloqet dhe shtresat që përdorin. Objektet mbeten të zgjedhura.

- `Select objects to copy` (kapërcehet kur objektet janë zgjedhur më parë)

### CUTCLIP

{{key:Mod+X}}, ose {{ui:Prit}} te menuja {{ui:Më shumë}}. Kopjon objektet në kujtesën e ndërmjetme, pastaj i fshin (një hap zhbërjeje).

- `Select objects to cut` (kapërcehet kur objektet janë zgjedhur më parë)

### COPYBASE

Kopjon objektet në kujtesën e ndërmjetme me një pikë bazë që zgjedh; ngjitja e vendos atë pikë.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, ose {{ui:Ngjit}} te grupi {{ui:Redakto}}. Kopja ndjek kursorin, e varur nga qoshja e poshtme majtas e shtrirjes së saj (ose nga qendra e saj, ose nga pika e `COPYBASE`; shih [Cilësimet e CadCraft](topic:settings)).

- `Specify insertion point`

Objektet e ngjitura zgjidhen. Një bllok që vizatimi e ka tashmë me të njëjtin emër mban përkufizimin e këtij vizatimi.

Kur një zonë e kopjuar në MarkupCraft është më e re se ajo që kopjoi CadCraft (dhe më e re se 6 orë), {{key:Mod+V}} dhe `PASTECLIP` ngjisin atë zonë: shih `PASTEAREA`.

### PASTEAREA

Emrat e shkurtër: `PAREA`. {{ui:Ngjit një zonë të kopjuar}} te menuja {{ui:Më shumë}}. Ngjit një zonë të kopjuar me {{ui:Kopjo zonën}} në MarkupCraft si figurë në madhësinë e saj reale. Shih [Figurat në një vizatim](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (vetëm kur fleta nuk kishte shkallë vizatimi): një numër, {{key:Enter}} për madhësinë e letrës, ose `P`, pastaj `First point on the pasted area`, `Second point on the pasted area` dhe distanca e tyre reale.

### PASTEORIG

{{key:Mod+Shift+V}}, ose {{ui:Ngjit në vend}} te menuja {{ui:Më shumë}}. Ngjit në koordinatat nga ku u kopjuan objektet. Nuk pyet asgjë.

### DUPLICATE

Emrat e shkurtër: `DUP`. {{key:Mod+D}}, ose {{ui:Dublo dhe zhvendos}} te menuja {{ui:Më shumë}}. Një kopje e objekteve lëviz me treguesin nga aty ku është; {{key:Esc}} nuk lë asgjë. Nuk e përdor kujtesën e ndërmjetme.

- `Select objects to duplicate` (kapërcehet kur objektet janë zgjedhur më parë)
- `Specify where the copy goes (Esc leaves nothing)`: kliko, shkruaj një pikë, `@dx,dy` (nga aty ku ishte treguesi), ose një distancë drejt kursorit.

### SELECT

Pyet `Select objects` (me çdo opsion më poshtë) dhe lë atë që zgjodhe të zgjedhur, për komandën tjetër ose për `P` më vonë.

### QSELECT

Emrat e shkurtër: `QS`. Në shfletues, dialogu {{ui:Zgjedhje e shpejtë}} (shih [Zgjidh objektet](topic:select-objects#select-by-a-rule-quick-select)). Pa të, rreshti i komandës pyet `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` dhe `Enter value`. Përputhjet bëhen zgjedhja.

### SELECTSIMILAR

Emrat e shkurtër: `SIM`. `Select objects [SEttings]` (ose zgjedhja aktuale): zgjedh çdo objekt të të njëjtit lloj me të njëjtën shtresë dhe ngjyrë (dhe emrin e bllokut, modelin e vijëzimit). `SE` pyet `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, e përsëritur deri në {{key:Enter}}.

### FIND

Pa emra të shkurtër; ose {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Gjej dhe zëvendëso}}. Në shfletues, dialogu {{ui:Gjej dhe zëvendëso}} (shih [Shto tekst dhe etiketa](topic:text#find-and-replace-words)). Pa të: `Enter text to find`, pastaj `Enter replacement text (Enter: select what is found)`. Kërkon në tekst, vlera atributesh dhe tekst përmase, në skedën e hapur ose në zgjedhje.

### SELECTALL dhe DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) zgjedh çdo objekt që mund ta redaktosh në skedën e hapur. `DESELECT` (aliasët `AI_DESELECT`, `SELECTNONE`; ose {{key:Esc}}) e pastron zgjedhjen.

## Përmasat

### DIMLINEAR

Emrat e shkurtër: `DLI`, `DIMLIN`. Distanca horizontale ose vertikale.

- `Specify first extension line origin [Select object]` (Enter ose `S`: `Select object to dimension`, pastaj kliko një vijë, hark, rreth ose segment polivijeje)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` pyet për tekst (`<>` është vlera e matur), `H` dhe `V` fiksojnë drejtimin, `R` pyet `Specify angle of dimension line <0>`.

### DIMALIGNED

Emrat e shkurtër: `DAL`, `DIMALI`. Distanca reale mes dy pikave.

- Origjinat si te {{cmd:DIMLINEAR}}, pastaj `Specify dimension line location [Text]`.

### DIMANGULAR

Emrat e shkurtër: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Hark: këndi i tij. Rreth: `Specify second angle endpoint`. Vijë: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: kliko brenda këndit për ta matur.

### DIMRADIUS dhe DIMDIAMETER

Emrat e shkurtër: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, pastaj `Specify dimension line location [Text]`.

### DIMCONTINUE

Emrat e shkurtër: `DCO`, `DIMCONT`. Vazhdon nga përmasa e fundit lineare ose e përputhur e bërë (ose pyet `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, e përsëritur deri në Enter.

### DIMBASELINE

Emrat e shkurtër: `DBA`, `DIMBASE`. Si {{cmd:DIMCONTINUE}}, por çdo përmasë nis nga origjina e parë dhe stivoset më larg.

### DIMORDINATE

Emrat e shkurtër: `DOR`, `DIMORD`. `Specify feature location`, pastaj `Specify leader endpoint [Xdatum/Ydatum/Text]`. Shkruan sa larg është elementi nga origjina UCS përgjatë X ose Y, mbi një udhëheqës: një udhëheqës që shkon kryesisht lart ose poshtë lexohet X, një që shkon anash lexohet Y; `Xdatum` dhe `Ydatum` e cakton cilin. Vendose origjinën së pari me {{cmd:UCS}} (pa të është 0,0 i vizatimit). Grip-et lëvizin elementin, origjinën dhe fundin e udhëheqësit, dhe vlera ndjek. Ruhet si përmasë ordinate e vërtetë në DWG dhe DXF. Refuzon një fund udhëheqësi mbi vetë elementin.

### DIMARC

Emrat e shkurtër: `DAR`. `Select arc or polyline arc segment`, pastaj `Specify arc length dimension location [Text]`. Mat përgjatë harkut (jo kordën) dhe shkruan simbolin e harkut para vlerës. Refuzon një rreth të plotë, një vijë ose një segment të drejtë polivijeje. Një DWG e mban si përmasë gjatësie harku; një DXF e mban si përmasë këndore me gjatësinë si tekst, dhe CadCraft e hap sërish si përmasë gjatësie harku.

### DIMJOGGED

Emrat e shkurtër: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Një përmasë rrezeje për një kurbë, qendra e së cilës është larg ose jashtë fletës: vija e përmasës nis te pika që jep ti në vend të qendrës, me një thyerje në të, dhe shkruan rrezen reale. Një DWG e mban si përmasë rrezeje me thyerje; një DXF e mban si përmasë rrezeje, dhe CadCraft e hap sërish me thyerje.

### DIMJOGLINE

Emrat e shkurtër: `DJL`. `Select dimension to add jog [Remove]`, pastaj `Specify jog location (or press Enter)`. Vendos një simbol thyerjeje mbi vijën e një përmase lineare ose të përputhur, për të treguar se distanca nuk është vizatuar në përmasë; vlera nuk ndryshon. `Remove` e heq. Refuzon llojet e tjera të përmasave.

### QDIM

Pa emra të shkurtër. `Select geometry to dimension`, pastaj `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Përmas disa objekte në një hap, nga skajet e vijave dhe segmenteve të polivijave, qendrat e rrathëve dhe harqeve, pikat dhe referencat e blloqeve. Një pozicion mbi ose poshtë objekteve mat tërthorazi, një pozicion anash mat lart. `Continuous` lidh pikat në zinxhir, `Baseline` mat të gjitha nga e para, `Staggered` vendos çifte nga mesi nga jashtë, `Ordinate` i jep çdo pike distancën e saj nga baza (`datumPoint` zgjedh një të re), `Radius` dhe `Diameter` përmasojnë çdo rreth dhe hark të zgjedhur. Mënyra mbahet mend. Gjithçka që bën është një hap zhbërjeje. Thotë kështu kur ka më pak se dy pika, ose asnjë hark ose rreth për Radius dhe Diameter.

### DIMBREAK

Emrat e shkurtër: `DBREAK`. `Select dimensions to add or remove breaks`, pastaj `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` lë një hapësirë në vijat e përmasës dhe të zgjatjes aty ku kryqëzon një objekt tjetër, dhe i llogarit sërish kur ato objekte ose përmasa lëvizin. `Manual` (një përmasë) pyet dy pika dhe lë një hapësirë mes tyre. `Remove` heq çdo hapësirë. Hapësira është 1.5 herë lartësia e tekstit të përmasës.

### DIMSPACE

Pa emra të shkurtër. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Lëviz vijat e përmasave lineare dhe të përputhura paralele (ose ato këndore rreth së njëjtës kulmi) që të jenë në të njëjtën distancë mes tyre, të matura nga përmasa bazë, secila në anën ku është. `0` i vendos në rresht me bazën; `Auto` është dyfishi i lartësisë së tekstit të përmasës bazë. Përmasat që nuk janë paralele me bazën lihen rehat.

### DIMINSPECT

Pa emra të shkurtër. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Vizaton një kornizë rreth vlerës me një etiketë përpara saj dhe normën e kontrollit pas saj. `remove` e heq kornizën. Teksti i tolerancës mbetet me vlerën.

### DIMOVERRIDE

Emrat e shkurtër: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, përsëri deri në Enter, pastaj `Select dimensions`. Ndryshon ato cilësime vetëm te përmasat e zgjedhura; stili i përmasës nuk ndryshohet. Merr variablat që janë numër ose ndërrues (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` i kthen përmasat e zgjedhura te stili i tyre. Refuzon një emër që nuk është një variabël e tillë dhe një vlerë që nuk mund ta marrë.

### DIMREASSOCIATE

Emrat e shkurtër: `DRE`, `DIMREASSOC`. `Select dimensions`, pastaj për secilën nga origjinat e vijës së zgjatjes (`Specify first extension line origin on an object`: kap një fund ose mesin e një vije, një kulm të polivijës, një qendër; Enter e lë pikën të lirë), ose për një përmasë rrezeje, diametri, thyerjeje ose gjatësie harku `Select arc or circle`. Përmasa lidhet pastaj me ato objekte: kur ata lëvizin ose ndryshojnë madhësi ajo ndjek në të njëjtin hap zhbërjeje dhe matet sërish. Zhvendosja me dorë e një pike të lidhur, ose fshirja e objektit, e prish lidhjen. Lidhja ruhet në DWG dhe DXF 2000 si të dhënat e vetë CadCraft; programet e tjera shohin një përmasë të zakonshme.

### DIMDISASSOCIATE

Emrat e shkurtër: `DDA`, `DIMDISASSOC`. `Select dimensions`. I liron nga objektet me të cilat janë lidhur; asgjë nuk lëviz.

### CENTERMARK

Emrat e shkurtër: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, përsëri deri në Enter. Vizaton një kryq në qendër dhe katër vija qendrore deri pak përtej kurbës (lloji i vijës CENTER), si vija të zakonshme në shtresën aktuale; të përmasuara sipas madhësisë së shigjetës dhe shkallës së përgjithshme të cilësimeve aktuale të përmasës, dhe të rrotulluara me UCS. Nuk ndjekin rrethin nëse ai lëviz.

### CENTERLINE

Emrat e shkurtër: `CL`. `Select first line`, `Select second line`. Vizaton një vijë në mes të dy vijave (përgjatë bisektorit kur takohen), pak më e gjatë se ato, në lloj vije CENTER. Një vijë e thjeshtë: nuk ndjek dy vijat.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Pa emra të shkurtër. Secila pyet `Enter new value for … <current>` dhe cakton atë madhësi për përmasat **të reja**: shkallën e përgjithshme, lartësinë e tekstit, madhësinë e shigjetës, vendet dhjetore (deri në 8), hapësirën rreth tekstit, zgjatjen përtej vijës së përmasës, largësinë nga origjina. Shih [Vendos madhësitë e përmasave](topic:dimension-settings).

### DIMLUNIT

Cilësim i përmasës: formati i gjatësisë vetëm për përmasat e reja (1 shkencor, 2 dhjetor, 3 inxhinierik, 4 arkitekturor, 5 thyesor).

### DIMSTYLE dhe -DIMSTYLE

Emrat e shkurtër: `DST`, `DDIM`, `D`. Menaxheri i stileve të përmasave: {{ui:Cakto aktualen}}, {{ui:E re…}}, {{ui:Modifiko…}}, {{ui:Riemëro…}}, {{ui:Fshi}}, {{ui:Krahaso…}}, {{ui:Apliko te të zgjedhurat}}. `-DIMSTYLE` në rreshtin e komandës: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Shih [Vendos madhësitë e përmasave](topic:dimension-settings#named-dimension-styles).

### DIMEDIT dhe DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, pastaj përmasat (ose ato të zgjedhura më parë). New pyet për tekstin (`<>` = matja); Rotate për një kënd (0 e kthen tekstin në vend); Oblique për këndin e vijave të zgjatjes nga boshti X (Enter = asnjë; vetëm përmasat lineare dhe të përputhura). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Shih [Vendos madhësitë e përmasave](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Emrat e shkurtër: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, ose me përmasa të zgjedhura `Units in the text of the selected dimensions`. Shkruan gjatësinë e matur në atë njësi me njësinë pas saj (DIMLFAC dhe një sufiks DIMPOST); `D` kthehet te njësitë e vizatimit. Shih [Përmasat në mm, cm, m ose km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Emrat e shkurtër: `RC`. Shfaq `Arc length: … Type: …`, pastaj `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular pyet `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand ndjek treguesin deri në një klikim ose {{key:Enter}}; `O` pyet `Select object` dhe `Reverse direction? [Yes/No] <N>` dhe e kthen objektin në re. `A` pyet `Specify the length of each arc`. `R`, `P` dhe `F` zgjedhin llojin për retë e radhës. Rezultati është një polivijë e mbyllur me harqe.

### MLEADER

Emrat e shkurtër: `MLD`; ose {{ui:Udhëheqës}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, pastaj teksti në kutinë në vend (ose, pa të, `Enter text (an empty line ends)`). `Block` pyet fillimisht emrin e bllokut dhe udhëheqësi shumëfish e shfaq atë bllok në vend të tekstit. Më shumë vija udhëheqëse: {{cmd:MLEADEREDIT}}. Ruhet si udhëheqës shumëfish i vërtetë në DWG; DXF ruan vijat, shigjetën dhe tekstin që vizaton.

### MLEADEREDIT

Emrat e shkurtër: `MLE`. `Select a multileader`, pastaj `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: çdo pikë shton një vijë udhëheqëse nga një shigjetë e re te i njëjti vend, deri në Enter. `Remove leaders` heq vijën udhëheqëse që klikon (një udhëheqës shumëfish mban të paktën një). `Block content` pyet emrin e bllokut dhe e shfaq atë në vend të tekstit (atributet e tij kërkohen); `Text content` e kthen tekstin. Çdo vijë udhëheqëse ka grip-in e vet. Një DWG i mban të gjitha vijat dhe bllokun në një udhëheqës shumëfish.

### MLEADERALIGN

Emrat e shkurtër: `MLA`. `Select multileaders`, pastaj `Select multileader to align to [Distribute/Spacing/Use current spacing]` dhe `Specify direction`. Lëviz vendet e udhëheqësve të tjerë (dhe tekstin ose blloqet e tyre) mbi vijën që kalon nga vendi i atij të zgjedhur, në atë drejtim; shigjetat mbeten aty ku tregojnë. `Spacing` u jep gjithashtu distancë të barabartë mes tyre; `Distribute` pyet dy pika dhe i shpërndan në mënyrë të barabartë mes tyre. Duhen të paktën dy udhëheqës shumëfish.

### MLEADERCOLLECT

Emrat e shkurtër: `MLC`. `Select multileaders`, pastaj `Specify collected multileader location [Vertical/Horizontal]` (Enter e mban vendin e të parit). Bën një udhëheqës shumëfish nga disa: përmbajtja me bllok shkon në një bllok të ri që mban çdo bllok pranë njëri-tjetrit ose nën njëri-tjetrin; përmbajtja me tekst bëhet një shënim me një rresht për secilin. I pari mban vijat e tij udhëheqëse; të tjerët hiqen. Refuzon një përzierje teksti dhe përmbajtjeje me blloqe.

### TABLE

Emrat e shkurtër: `TB`; ose {{ui:Shëno}} › {{ui:Më shumë}} › {{ui:Tabelë}}. Bën një tabelë: një objekt që lëviz, kopjohet, rrotullohet, shkallëzohet dhe printohet si çdo objekt tjetër, me qelizat e saj të mbajtura si të dhëna.

- `Number of data rows or [Paste/File/Style] <3>`, pastaj `Number of columns <3>`, `Text height` dhe `Top left corner of the table`. Tabela merr një rresht titulli (një qelizë e bashkuar) dhe një rresht kokë mbi rreshtat e të dhënave.
- `P`: një tabelë nga qelizat e një fletëllogaritjeje në kujtesën e ndërmjetme (tekst me një tabulim mes qelizave). Shtypja e {{key:Ctrl+V}} me qeliza të tilla në kujtesën e ndërmjetme bën të njëjtën gjë, përveç nëse kopja e vetë CadCraft është më e re (ose CadCraft nuk mund ta dallojë: atëherë ngjit kopjen e vet dhe e thotë). `F`: një tabelë nga një skedar `.csv` ose i ndarë me tabulim. Rreshti i parë bëhet rreshti i kokës; gjerësitë e kolonave përshtaten me tekstin.
- `S`: zgjidh stilin e tabelës për këtë tabelë (shih {{cmd:TABLESTYLE}}).
- Refuzon një numër rreshtash ose kolonash që nuk është numër i plotë, dhe më shumë qeliza se sa mund të mbajë një tabelë (2,000 rreshta, 200 kolona, 40,000 qeliza).
- {{cmd:EXPLODE}} e kthen tabelën në vija dhe tekst. Ruhet si DWG tabelë është një objekt i vërtetë tabele që programet e tjera mund ta redaktojnë; ruhet si DXF është një bllok që e vizaton, dhe CadCraft e hap sërish si tabelë.

### TABLEDIT

Emrat e shkurtër: `TABLEEDIT`, `TABEDIT`; ose kliko dy herë një qelizë. Redakton një tabelë.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Kliko një qelizë, ose me një tabelë të zgjedhur shkruaj emrin e saj (`B3`: kolona B, rreshti 3; rreshti i titullit është rreshti 1). Në shfletues hapet një kuti mbi qelizë: {{key:Enter}} mban tekstin, {{key:Tab}} kalon te qeliza tjetër, {{key:Alt+Enter}} fillon një rresht të ri, {{key:Esc}} e lë qelizën siç ishte.
- Një tekst që fillon me `=` është formulë: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, me `+ - * / ^`, kllapa dhe funksione si `sqrt` dhe `round`. Qeliza shfaq vlerën; një formulë që emëron qelizën e vet, një qelizë jashtë tabelës ose një qelizë pa numër shfaq `####` dhe rreshti i komandës thotë pse.
- `R` / `C`: `Insert` ose `Delete` rreshta ose kolona te një qelizë e zgjedhur (sa, dhe mbi ose poshtë, majtas ose djathtas). Formulat ndjekin qelizat që emërojnë.
- `S`: gjerësia e kolonës dhe lartësia e rreshtit. Një rresht nuk është kurrë më i ulët se sa kërkon teksti i tij. Një tabelë e zgjedhur ka gjithashtu një grip në skajin e çdo kolone dhe çdo rreshti.
- `M`: bashkon nga një qelizë e zgjedhur te një tjetër; `U`: zbashkon. `A`: rreshtimi (`TL` lart majtas … `MC` mesi qendër … `BR` poshtë djathtas). `H`: lartësia e vetë tekstit të kësaj qelize (0 = e stilit). `K`: e bën rreshtin titull, kokë ose të dhënash. `CL`: zbraz qelizën.
- Refuzon një tabelë në një shtresë të kyçur, fshirjen e çdo rreshti ose kolone, dhe një bashkim që do të priste një qelizë tjetër të bashkuar në dy.

### TABLESTYLE

Emrat e shkurtër: `TS`. Liston stilet e tabelave me sa tabela përdor secili, pastaj `Table style: [New/Set/Edit/Delete/Apply]`.

- Një stil mban lartësinë e tekstit dhe rreshtimin e rreshtave të titullit, kokës dhe të dhënave, margjinën e qelizës, dhe cilat kufij vizatohen (të jashtëm, mes rreshtave, mes kolonave).
- `N` bën një stil nga aktuali dhe e bën atë aktual; `S` cakton stilin aktual (tabelat e reja e marrin); `E` redakton një: tabelat që e përdorin vizatohen sërish; `A` i jep tabelave të zgjedhura stilin aktual; `D` fshin një (jo Standard, jo aktualin; tabelat që e përdornin mbajnë pamjen e tyre).
- Stilet ruhen me vizatimin (DWG dhe DXF).

### TABLEEXPORT

Ruan atë që tregon një tabelë si skedar CSV (një formulë si vlerën e saj). `Select a table`, ose zgjidhe më parë. Qelizat tekst që fillojnë me `=`, `+`, `-` ose `@` marrin një `'` përpara, që një fletëllogaritje të mos i ekzekutojë.

### TABLEPASTE

Emrat e shkurtër: `PASTETABLE`. Bën një tabelë nga qelizat e një fletëllogaritjeje në kujtesën e ndërmjetme, pastaj pyet pikën e saj të sipërme majtas. E njëjta gjë si {{cmd:TABLE}} › `Paste`.

### DATALINK

Emrat e shkurtër: `DL`. `Data link: [New/List/Remove] <New>`. `N` pyet për një skedar CSV, vendos një tabelë të tij dhe mban mend emrin e skedarit; `L` liston lidhjet me skedarin, madhësinë, kur u lexua dhe sa tabela e përdorin; `R` heq një lidhje (tabelat e saj mbeten tabela të thjeshta).

### DATALINKUPDATE

Emrat e shkurtër: `DLU`. Lexon sërish skedarin e një lidhjeje të dhënash dhe i mbush sërish tabelat e lidhura me të (rreshta dhe kolona shtohen ose hiqen që të përputhen). Një shfletues nuk mund të hapë një skedar vetvetiu, prandaj pyet sërish për skedarin. Me disa lidhje pyet cilën.

### FIELD

Vendos një fushë në vizatim: tekst që llogaritet vetvetiu. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: tani, ose data e ruajtur, e krijuar apo e printuar, dhe një format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: emri i skedarit, me ose pa shtesën e tij. `S`: numri i fletës, titulli i saj, ose sa fletë ka. `P`: një veti vizatimi sipas emrit (shih {{cmd:DWGPROPS}}). `O`: zgjidh një objekt, pastaj çfarë të lexohet (sipërfaqja, gjatësia, perimetri, rrezja, diametri, shtresa, emri, x, y, teksti, rrotullimi, ngjyra) dhe vendet dhjetore. `E`: një formulë. `C`: një tekst me kode të shkruara ashtu siç janë, si `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Pastaj `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: një tekst i zgjedhur merr fushën pas asaj që ka; një qelizë tabele njësoj; një referencë blloku pyet cilin atribut; {{key:Enter}} pyet një lartësi dhe një pikë për tekst të ri.
- Në ekran një fushë ka sfond gri të hapur; një printim dhe një PDF nuk e kanë kurrë. Shkrimi mbi tekstin e një fushe me dorë e mbyll fushën. Një fushë që nuk mund të llogaritet shfaq `####`.
- Fusha e një objekti e gjen objektin e vet me çelësin që CadCraft mban mbi objektet (Cilësimet › CadCraft › Skedarë të lehtë për bashkim); me çelësat të fikur refuzon.

### UPDATEFIELD

Emrat e shkurtër: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` cakton kur fushat përditësohen vetvetiu: shkruaj shkronjat e `O` open, `S` save, `P` plot, `R` regen (të katërt në fillim), ose `NONE`.

### DWGPROPS

Emrat e shkurtër: `DRAWINGPROPS`. Liston vetitë e vizatimit, pastaj `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Gjashtë të parat janë ato që shfaq paneli {{ui:Detajet e vizatimit}}; `U` shton emrin dhe vlerën tënde, `R` heq një. Fushat i lexojnë (`%<prop:title>%`, `%<prop:Client>%`) dhe ndjekin menjëherë. Refuzon një emër të personalizuar që është një nga ato të integruara ose që mban `%`, `<`, `>`, një thonjëz ose një vizë prapa.

## Parametrik

Shih [Kufizo një vizatim](topic:constraints) dhe [Përdor parametra dhe ekuacione](topic:parameters). Kufizimet punojnë te skeda {{ui:Modeli}}.

### GEOMCONSTRAINT dhe komandat GC

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, pastaj kërkesat e asaj komande.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (i dyti lëviz).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT dhe komandat DC

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (një numër, një shprehje, ose `name=expression`).
- {{cmd:DCALIGNED}}: si më sipër, me `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` pyet tolerancat e distancës dhe të këndit.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; kufizimet e tyre largohen.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, pastaj `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS dhe -PARAMETERS

{{cmd:PARAMETERS}} (aliasët `PAR`, `PARAM`) hap panelin {{ui:Parametrat}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Shkarkon një makro (.swb) që e ndërton modelin si një skicë të vetme të kufizuar në SolidWorks. Shih [Zhvendos skicat nga dhe te modelues të tjerë pjesësh](topic:solidworks-sketches).

## Blloqe

### ANNOSCALE

Emrat e shkurtër: `CANNOSCALE`. Thotë shkallën e anotimit të vizatimit dhe sa objekte anotative mban, pastaj pyet `New annotation scale`: shkruaj `1:50`, `1:100`, `2:1`, një numër të thjeshtë (`50` është 1:50) ose emrin e një nga shkallët e vizatimit. Çdo tekst dhe përmasë anotative riçmohet që të printohet në të njëjtën madhësi në shkallën e re, në një hap zhbërjeje; objektet që nuk janë anotative lihen rehat, dhe edhe një objekt që mban listë shkallësh pa atë të re ({{cmd:OBJECTSCALE}}). Shih [Njësitë, letra dhe shkallët](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Emrat e shkurtër: `OBJSCALE`. `Select annotative objects`, pastaj `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Një tekst ose përmasë anotative mban një listë shkallësh anotimi. `Add` dhe `Delete` pyesin një shkallë (`1:50`, `2:1`, një numër i thjeshtë, ose emri i një shkalle të vizatimit); `Current scale` shton shkallën e anotimit të vizatimit; `List` shfaq shkallët e çdo objekti. Një pamje ku shkalla është në listën e një objekti e shfaq atë në madhësinë që printon lartësinë e tij të letrës në atë shkallë, në ekran dhe në printime. Shkalla e fundit nuk mund të fshihet. Objektet që nuk janë anotative lihen jashtë: ndiz Anotative te Vetitë më parë. Listat ruhen në DWG dhe DXF si të dhënat e vetë CadCraft. Shih [Njësitë, letra dhe shkallët](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Emrat e shkurtër: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Në ON (siç hapet një vizatim): një objekt anotativ shfaqet edhe në një pamje, ose në model, shkalla e të cilit nuk është në listën e tij, në madhësinë që ka. Në OFF nuk shfaqet atje, dhe nuk mund të zgjidhet në model. Çelësi është një hap zhbërjeje; nuk ruhet në skedar.

### SCALELISTEDIT

Emrat e shkurtër: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` deri në {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit dhe Delete pyesin emrin e shkallës. Shkallët e vetë vizatimit bashkohen me listat e shkallëve të dritareve të pamjes dhe të printimit, dhe ruhen me vizatimin. Shih [Njësitë, letra dhe shkallët](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT dhe PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: pikat nëpër të cilat kalon kurba; `Close`, `Undo`, pastaj `Start tangent` dhe `End tangent` (një pikë, ose {{key:Enter}}). Method › Control vertices pyet një shkallë (1 deri 5) dhe vizaton nga një poligon kontrolli. Object i kthen polivijat në spline nëpër kulmet e tyre. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` për disa objekte; vijat, harqet dhe splinet ofrohen fillimisht si polivija. Shih [Splinet dhe polivijat](topic:splines).

### BLOCK

Emrat e shkurtër: `B`, `BMAKE`.

- `Enter block name`. Nëse ekziston: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Zëvendësohen me një referencë të vetme në bllokun e ri.

### WBLOCK

Emrat e shkurtër: `W`, `-WBLOCK`. Shkruan një bllok, disa objekte ose tërë vizatimin si skedar të ri DWG ose DXF. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (bëhet origjina e vizatimit të ri), `Select objects`, pastaj `File format [DWG/DXF/R12 DXF]` dhe `File name for the new drawing`, pastaj `What to do with the objects [Retain/Convert to block/Delete]`. Convert i zëvendëson me një referencë të vetme te një bllok me emrin e skedarit; Delete i heq.
- **Block**: `Block to write out`. Objektet e vetë blloqut, me pikën e tij bazë si origjinë, edhe blloqet e futura.
- **Entire drawing**: çdo objekt në hapësirën e modelit. Fletët nuk shkruhen; përdor {{cmd:SAVEAS}} për një kopje që i mban ato.

Skedari i ri mban vetëm shtresat, llojet e vijave, stilet e tekstit dhe përmasave dhe blloqet që përdorin objektet e tij, dhe njësitë e vizatimit. Versioni i një DWG është ai që {{cmd:SAVEAS}} përdori së fundi. Në shfletues skedari shkarkohet; në Studio hapet dialogu i ruajtjes.

### ATTDEF

Emrat e shkurtër: `ATT`, `DDATTDEF`, `-ATTDEF`; ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Përcakto atributin}}. Shfaq mënyrat, pastaj `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` kur është konstant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} i merr përkufizimet e atributeve në bllok.

### EATTEDIT dhe ATTEDIT

`EATTEDIT` (`DDATTE`, ose kliko dy herë një referencë me atribute; {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Redakto atributet}}): `Select a block reference with attributes`, pastaj dialogu {{ui:Redakto atributet}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): e njëjta referencë, pastaj `<prompt> (<TAG>) <value>` për çdo atribut; {{key:Enter}} mban një vlerë. Shih [Atributet](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Vlerat mbahen; atributet e rinj marrin parazgjedhjen e tyre, ata të hequr largohen, vendet rivendosen.

### BATTMAN

{{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Menaxheri i atributeve}}. Dialogu: blloku, atributet (etiketa, kërkesa, parazgjedhja, mënyrat, renditja), {{ui:Përditëso referencat (vlerat ruhen)}}, {{ui:Apliko}}.

### REFEDIT dhe REFCLOSE

{{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Ndrysho në vend}}. `REFEDIT`: `Select the block reference to edit in place` (ose zgjedhja). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Ruaj bllokun}} dhe {{ui:Hidh}} te shiriti bëjnë të njëjtën gjë. E gjithë redaktimi është një hap zhbërjeje. Shih [Atributet](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: nëse presioni i një goditjeje stilolapsi cakton trashësinë e vijës së asaj që bëjnë {{cmd:SKETCHFIX}} dhe {{cmd:SKETCHLIVE}} (i ndezur fillimisht). Shih [Skico me stilolaps](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Thotë cili standard zyre është në fuqi për këtë vizatim dhe nga vjen: regjistrimi i vetë vizatimit, standardi i përbashkët i ekipit, ose Default Policies (lartësitë e tekstit `all.anno.*`); pa asnjë, madhësitë e vetë programit. `[Import/Layers/Title block/Clear/eXit]`: `Import` lexon një `cc-office-standard` .json (regjistrimin që shkruajnë SuperCad dhe BimCraft) në këtë vizatim, dhe ruhet me të në DWG dhe DXF; `Layers` shton shtresat e zyrës që i mungojnë vizatimit, në një hap zhbërjeje, dhe nuk heq asnjë; `Title block` liston fushat e zyrës me vlerat e vetë vizatimit; `Clear` heq regjistrimin e vizatimit. Lartësitë e tekstit anotativ dhe të përmasave ndjekin standardin në fuqi. Shih [Njësitë, letra dhe shkallët](topic:units-papers-scales).

### BPARAMS

Emrat e shkurtër: `BPM`, `BLOCKPARAMS`. Hap menaxherin e parametrave për bllokun në redaktuesin e blloqeve, për bllokun e referencës së zgjedhur, ose për bllokun që emërton (`Block name`): parametra me formula, disa parametra dukshmërie me gjendjet e tyre, dhe vlerat dhe gjendjet e vetë referencës së zgjedhur. Shih [Parametrat dhe gjendjet e dukshmërisë të tuat](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` bën të njëjtën gjë në rreshtin e komandës: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT dhe BCLOSE

`BE`; ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Redakto bllokun}}. `Enter block name to edit <the selected reference's block>` hap redaktuesin e blloqeve. `BCLOSE` pyet `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Ruaj bllokun}} dhe {{ui:Hidh ndryshimet}} te shiriti i redaktuesit bëjnë të njëjtën gjë. Gjithçka që bëhet në redaktues është një hap zhbërjeje.

### VIEWBASE

Alias: `FLATSHOT`. Një pamje 2D e sheshtë e trupave të ngurtë te skeda 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, një shkallë (`1:20`, `2:1`; {{key:Enter}} merr atë që përshtatet me fletën), pastaj qendra e pamjes. Një referencë e vetme blloku, skajet e dukshme në VIEW-VISIBLE, ato të fshehura me viza në VIEW-HIDDEN. Shih [Pamje të sheshta në një fletë](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Emrat e shkurtër: `-PUBLISH`; ose {{ui:Të gjitha fletët në një PDF}} te dialogu {{ui:Nxirr në PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} printon çdo fletë, `S` pyet emrat të ndarë me presje. Një PDF, një faqe dhe një shenjues për fletë. Shih [Çdo fletë në një PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Emrat e shkurtër: `SSM`, `SHEETSETMANAGER`. Të çon te seksioni {{ui:Grup fletësh}} i panelit të majtë: fletë nga shumë vizatime, të numëruara dhe me titull, blloqet e tyre të titullit të mbushura nga grupi, të publikuara si një PDF. Shih [Grupet e fletëve](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): zgjidh një DWG ose DXF, pastaj pikën e futjes së tij. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; me më shumë se një lidhje, zgjidh një nga referencat e saj ose shkruaj `N` dhe emrin e saj. Shih [Vizatimet e lidhura](topic:files#linked-drawings-external-references).

### COUNT

Emrat e shkurtër: `BCOUNT`; ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Numëro blloqet}}. `Select a block reference to count, or [All/Export] (Enter: All)`: një klikim zgjedh dhe numëron çdo referencë të atij blloku në këtë hapësirë; {{key:Enter}} ose `A` i liston të gjitha; `E` pastaj `C` (numërimet) ose `A` (atributet) shkarkon një CSV. Shih [Numëro blloqet dhe eksporto një orar](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Emrat e shkurtër: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (shkronjat e mëdha nuk kanë rëndësi). `F` pyet për një DWG ose DXF, pastaj të tërë vizatimin ose një nga blloqet e tij; një emër që përdoret tashmë pyet {{ui:Mbaj ekzistuesit}} ose {{ui:Riemëro}}. `L` hap panelin e bibliotekës.
- `Specify insertion point [Scale/Rotate]`. `S` pyet `Specify scale factor`, `R` pyet `Specify rotation angle`; të dyja mbahen mend.
- Kur blloku tashmë qëndron pranë objekteve që përsëriten gjetkë pa të, një rresht thotë sa vende sugjerohen dhe kërkesa fiton `suGgested`: `G` i shfaq; kliko pranë një prej tyre për ta vendosur atje, `A` për të gjitha, {{key:Enter}} për t'u kthyer. Ata marrin rrotullimin e fqinjëve dhe vlerat parazgjedhje të atributeve. Vizatimet me mbi 20,000 objekte në hapësirën e hapur nuk kërkohen.
- Pastaj `Enter <prompt> (<TAG>) <default>` për çdo atribut që kërkon blloku. Shih [Atributet e blloqeve](topic:attributes).

### LIBRARY

Emrat e shkurtër: `LIB`. Hap panelin e bibliotekës: vendos elemente, kontrollo për përditësime, kredite. Pa pyetje. Shih [Fut nga një skedar ose bibliotekë](topic:insert-from-file-and-library).

### STEELMEMBER

Emrat e shkurtër: `SMEMBER`; ose {{ui:Element 3D}} te skeda {{ui:Standard}} e bibliotekës. `Section size <W12x26>` (siç e liston skeda), pastaj `Start point [Column]` dhe `End point`: një element i ngurtë në skedën 3D mes dy pikave, mbi tokë. `C` pyet pikën bazë të kolonës dhe lartësinë e saj. Një hap zhbërjeje. Shih [Vendos profile çeliku dhe pjesë standarde](topic:steel-and-standard-parts).

### PARTSLIST

Emrat e shkurtër: `PLIST`. `Top left corner of the parts list`, pastaj `Text height <2.5>`: vizaton një tabelë të çdo pjese standarde dhe profili çeliku të vendosur nga Biblioteka (numrat e elementeve, sasia, pjesa, standardi, madhësia, gjatësia, materiali, masa). Një hap zhbërjeje. Shih [Vendos profile çeliku dhe pjesë standarde](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Emrat e shkurtër: `PU`. Heq përkufizimet e blloqeve që askush nuk i përdor. Pa pyetje.

### DELBLOCKS

Ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Fshi blloqe}}. `Select block to delete [Name/eXit]`: zgjidh një referencë blloku, ose `N` për listën e blloqeve me filtër (zgjidh disa), ose `X` / {{key:Enter}} për të përfunduar. Çdo referencë shkon — në model, në çdo fletë dhe brenda blloqeve të tjerë — pastaj përkufizimi, dhe rreshti i komandës thotë çfarë u fshi dhe çfarë nuk u fshi. Blloqet pa emër dhe vizatimet e lidhura nuk ofrohen. Kërkesa kthehet për bllokun e radhës; i tërë komanda është një hap zhbërjeje.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} ngjit atë që kopjove ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) si një bllok: zgjidh pikën e futjes dhe një referencë e një blloku të ri shkon aty, e zgjedhur. Blloku merr një emër të vetin (`A$C` dhe një numër); {{cmd:RENAME}} i jep emrin tënd. Një hap zhbërjeje heq referencën dhe bllokun.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pyet bllokun për t'u zëvendësuar dhe bllokun që vendoset në vend të tij (`?` liston blloqet), pastaj ndryshon çdo referencë në model, në çdo fletë dhe brenda blloqeve të tjerë. Çdo referencë mban vendin, shkallën, rrotullimin, shtresën dhe vlerat e atributeve që kanë të dy blloqet; atributet që ka vetëm blloku i ri fillojnë me parazgjedhjet e tyre, dhe thotë cilat vlera u hodhën. Kur askush nuk e përdor më bllokun e vjetër, ofron ta heqë. Refuzon skedarët e lidhur dhe një zëvendësues që do ta vendoste një bllok brenda vetes. Një hap zhbërjeje.

### MINSERT

{{cmd:MINSERT}} vendos një bllok në rreshta dhe kolona me një herë: emri i bllokut, pika e futjes, shkalla, rrotullimi, numri i rreshtave dhe i kolonave, dhe distancat mes tyre. I tërë grupi rrotullohet me rrotullimin. Çdo njëri është referencë e vet (10,000 më së shumti), kështu që çdo njërin mund ta zhvendosësh ose fshish më vonë.

### BLOCKSPALETTE

Emrat e shkurtër: `BLOCKSPAL`; ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Paneli i blloqeve}}. Shfaq panelin {{ui:Blloqe}} me kursorin në filtrin e tij. Çdo bllok ka një figurë të vogël; ata të vendosur më së fundi vijnë të parët. Dy butonat pranë filtrit ndërrojnë mes listës dhe rrjetës së figurave. Kliko një figurë (ose {{ui:Fut}}) për të vendosur bllokun me {{cmd:INSERT}}, ose zvarrite mbi vizatim për ta vendosur aty ku e lëshon.

{{ui:Bibliotekat}}, nën listë: {{ui:Shto një vizatim}} merr një skedar DWG ose DXF tënd dhe liston blloqet e tij me figura, dhe tërë vizatimin si një bllok. Vendosja e një blloku kopjon përkufizimin e tij (dhe blloqet që përfshin, dhe shtresat e tyre) në këtë vizatim, si bën opsioni `File` i {{cmd:INSERT}}; një bllok që është tashmë këtu me të njëjtin përkufizim përdoret pa pyetje, dhe një me të njëjtin emër por ndryshe pyet {{ui:Mbaj ekzistuesit}} ose {{ui:Riemëro}}. Në një shfletues skedari mbetet deri sa mbyllet faqja. Në CadCraft Studio {{ui:Shto një dosje}} liston vizatimet e një dosjeje, secili hapet kur kliko, dhe skedarët dhe dosjet mbahen mend. X-i i vogël heq një bibliotekë nga lista; skedari nuk preket. Biblioteka e përbashkët {{ui:Biblioteka}} është diçka tjetër: shih [Fut nga një skedar ose bibliotekë](topic:insert-from-file-and-library).

### BCONVERT

Ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Konverto përsëritjet në blloqe}}. Gjen gjeometri që përsëritet dhe e kthen çdo kopje në një referencë të një blloku të vetëm.

- `Select the objects that repeat, or [Block]`: objektet e një kopjeje. `B` emëron në vend të kësaj një bllok ekzistues, për të gjetur kopje të lira të objekteve të tij.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` dhe `P` ndërrojnë çfarë llogaritet si kopje; {{key:Enter}} kërkon. Cilësimet mbahen mend.
- `Name for the new block <Block1>`, pastaj `Specify the block's base point` ({{key:Enter}} merr qoshen e poshtme majtas të zgjedhjes).
- Thotë sa grupe të tjera objektesh janë e njëjta gjeometri, thekson gjithçka që do të zëvendësonte, dhe pyet `Yes/No`.

Një kopje është të njëjtët objekte të zhvendosur dhe të rrotulluar me çdo kënd (dhe të pasqyruar ose të shkallëzuar me një faktor të vetëm kur janë të ndezur): çdo objekt duhet të ketë kundërpjesën e vet, brenda një milionëtë të madhësisë së zgjedhjes. Çdo referencë merr rrotullimin dhe shkallën e vet (një e pasqyruar merr shkallë Y negative), dhe shtresën që ndanin objektet e saj. Objektet në shtresa të kyçura lihen rehat dhe numërohen. Kërkon në hapësirën e hapur (modelin ose fletën e hapur). Një kërkim shumë i madh ndalet te një kufi pune dhe e thotë këtë. Një hap zhbërjeje.

### BSEARCH

Ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Gjej blloqe}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: pjesë e emrit të një blloku, ose një model me `*` dhe `?`. Liston çdo bllok me referencat e tij këtu dhe në tërë vizatimin.
- `A`: një vlerë atributi, ose `TAG=value`. Liston blloqet, referencat e të cilëve e mbajnë, me vlerat e gjetura. Atributet konstante numërohen.
- `G`: zgjidh objekte, ose një referencë blloku, dhe blloqet me formë të paktën 85% të ngjashme listohen, më i miri i pari. Madhësia, rrotullimi dhe pasqyrimi nuk numërohen. Matja krahason distancat mes pikave të shpërndara përgjatë konturit, kështu që gjen ngjashmëri; për kopje të sakta përdor {{cmd:BCONVERT}}.

Referencat e gjetura në hapësirën e hapur zgjidhen, gati për komandën tjetër.

### BREPLACE

Ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Zëvendëso blloqet}}. `Replace [Selected/All]`: `S` zëvendëson referencat e blloqeve që zgjedh me bllokun që emëron; `A` pyet një bllok dhe zëvendësuesin e tij, dhe ndryshon çdo referencë, siç bën {{cmd:BLOCKREPLACE}} (i njëjti kod). Një referencë mban vendin, shkallën, rrotullimin, shtresën dhe vlerat e atributeve që kanë të dy blloqet; vlerat që bllokut të ri nuk i kanë vend bien dhe emërohen. `?` liston blloqet. Një hap zhbërjeje.

### DATAEXTRACTION

Emrat e shkurtër: `EATTEXT`, `DX`; ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Nxjerrja e të dhënave}}. Liston blloqet, atributet e tyre dhe vetitë e objekteve si tabelë ose skedar CSV.

- Punon mbi zgjedhjen, ose pyet `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` kur zgjedhja mban të dyja. Blloqet pa emër, tabelat dhe listat e materialeve nuk listohen kurrë.
- Shfaq kolonat ku mund të zgjedhësh (emri, lloji, shtresa, X, Y, rrotullimi, shkalla, gjatësia, sipërfaqja, ngjyra, lloji i vijës, hapësira, dhe një për çdo etiketë atributi), pastaj `Columns, by name or number with commas between`. {{key:Enter}} merr ato me yll: emrin dhe çdo atribut për blloqet; llojin, shtresën dhe gjatësinë për objektet.
- `Put identical rows together with a count? [Yes/No] <Yes>`, pastaj `Put the list in a: [Table/Csv] <Table>`. Një tabelë është tabelë e zakonshme ({{cmd:TABLEDIT}} e redakton) dhe nuk është e gjallë: ekzekuto komandën sërish kur vizatimi ndryshon.
- Refuzon një kolonë që nuk është në listë. Një tabelë mban 1,999 rreshta të dhënash; një skedar CSV i merr të gjithë.

### COUNTTABLE

Numëron referencat e blloqeve të zgjedhjes (ose të hapësirës së hapur) dhe vendos numërimet në një tabelë (`Block`, `Count`) ose në një skedar CSV. Për një numërim që ndjek vetvetiu vizatimin shih {{cmd:BOMTABLE}}.

## Fletët dhe printimi

### LAYOUT

Emrat e shkurtër: `LO`, `NEWLAYOUT`; ose butoni {{ui:+}} nën vizatim. Një fletë e re me kufi, bllok titulli dhe një dritare pamjeje, në ISO A3 (ose Tabloid për vizatime në inç ose këmbë). Pa pyetje.

### MVIEW

Emrat e shkurtër: `MV`. Vetëm në një fletë ({{cmd:VPORTS}} në një fletë bën të njëjtën gjë).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Dritarja e pamjes tregon tërë modelin në një shkallë standarde.
- `P` (Polygonal): kliko qoshet e konturit (`Undo`, `Close`), {{key:Enter}} kur mbaron. Refuzon më pak se tre qoshe.
- `O` (Object): `Select a closed object for the viewport's outline`: një polivijë e mbyllur, një rreth ose elips në fletë. Dritarja e pamjes e merr formën e tij (kurbat si pjesë të shkurtra të drejta); objekti mbetet ashtu si ishte. Refuzon një objekt që nuk është i mbyllur.

### VPCLIP

Pret një dritare pamjeje që është tashmë në fletë. `Select viewport to clip` (ose zgjidhe më parë), pastaj `Select the object to clip to [Polygonal/Delete]`:

- Kliko një polivijë, rreth ose elips të mbyllur, ose {{key:Enter}} (ose `P`) për të klikuar qoshet e një shumëkëndëshi.
- `D` (Delete, ofrohet kur dritarja është e prerë) e bën sërish drejtkëndësh: kutinë rreth konturit që kishte.
- Ajo që tregon dritarja nuk lëviz në letër, dhe shkalla e saj mbetet. Modeli vizatohet dhe printohet vetëm brenda konturit, dhe kufiri e ndjek. Një hap zhbërjeje.
- Një dritare e prerë ka një grip në çdo qoshe të konturit të saj, përveç qendrës dhe katër qoshe të kutisë së saj (zvarritja e një qoshe kutie e shtrin edhe konturin). Vetitë tregojnë Outline: Rectangle, ose Clipped me numrin e qoshëve.
- Skedarët DWG dhe DXF 2000 e mbajnë konturin për CadCraft. Programet e tjera e hapin dritaren si drejtkëndëshin rreth saj; DXF R12 mban vetëm drejtkëndëshin.
- Në skedën e modelit thotë se dritaret e pamjes janë në fletë.

### VPORTS

Emrat e shkurtër: `VIEWPORTS`. {{cmd:SPLIT}} është e njëjta edhe nga një fletë, dhe {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Ndaj anash për anë}}, {{ui:Ndaj një mbi tjetrin}}, {{ui:Katër panele}}, {{ui:Një panel}} e ekzekutojnë. Te modeli: `Enter number of panes [SIngle/2/3/4] <3>`; `2` pyet `[Horizontal/Vertical] <Vertical>` (Vertical = anash për anë), `3` pyet `[Left/Right] <Right>` (ku shkon paneli i madh). Çdo panel mban pamjen dhe hapësirën e vet; një klikim e bën panelin aktiv. Në një fletë është {{cmd:MVIEW}}. Shih [Ndaje ekranin](topic:split-screen).

### VPVIEW

Pa emra të shkurtër. Vetëm në një fletë.

- `Select viewport` (kapërcehet kur është zgjedhur një), pastaj te modeli: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Pa emra të shkurtër. Një sistem koordinativ i yti; nuk është redaktim. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: një pikë është origjinë e re, pastaj `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origjina, një pikë në boshtin X pozitiv, një pikë në anën Y pozitive. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` dhe një emër. Pamja kthehet që boshti i ri X të jetë horizontal. Shih [Rrotullo pamjen dhe përdor koordinatat e tua](topic:ucs-and-turned-view).

### PLAN

Pa emra të shkurtër. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: rrotullon pamjen e panelit aktiv që boshti X i UCS (ose i botës) të jetë horizontal. Asgjë në vizatim nuk lëviz.

### TURNLEFT, TURNRIGHT, TURNWORLD

Pa emra të shkurtër; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Kthe pamjen 90° majtas}}, {{ui:Kthe pamjen 90° djathtas}}, {{ui:Kthehu te bota}}. Njëlloj si `UCS Z -90`, `UCS Z 90` dhe `UCS W`, me pamjen që ndjek.

### VPLAYER

Pa emra të shkurtër. Në një fletë, ose brenda një dritareje pamjeje. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` pyesin emrat e shtresave (me presje, shenjat `*` dhe `?`), pastaj `[All/Select/Current] <Current>` dritaret e pamjes; Reset e kthen çdo shtresë te parazgjedhja "e ngrirë në dritare të reja"; `V` cakton atë parazgjedhje (`[Frozen/Thawed]`), që e përdor {{cmd:MVIEW}}. `?` liston shtresat e ngrira në dritaren aktuale të pamjes. Kolona e dritareve të pamjes te paneli i Shtresave bën të njëjtën gjë për një dritare. Shih [Ngrij një shtresë në një dritare pamjeje](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Emrat e shkurtër: `MS`; ose dyklik brenda një dritareje pamjeje. Vetëm në një fletë. Punon mbi modelin përmes një dritareje pamjeje: atë të zgjedhur, të vetmen në fletë, ose `Click inside the viewport to work in`. Lëvizja dhe zmadhimi brenda ndryshojnë pamjen e dritares (një e kyçur në ekran e mban atë dhe fleta lëviz në vend), dhe pamja e re shkruhet si një hap zhbërjeje. Shih [Puno mbi modelin përmes një dritareje pamjeje](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Emrat e shkurtër: `PS`; ose dyklik jashtë dritares së pamjes, ose kliko një skedë nën vizatim. Kthehu në fletë.

### PLOT

Emrat e shkurtër: `PRINT`, `PUBLISH`, `EXPORTPDF`; ose {{key:Mod+P}}. Hap dialogun {{ui:Nxirr në PDF}}. Shih [Nxirr në PDF](topic:plot-pdf).

### PLOTSTYLES

Emrat e shkurtër: `STYLESMANAGER`, `PSTABLES`; ose {{ui:Redakto tabelat…}} te dialogu {{ui:Nxirr në PDF}}. Hap {{ui:Tabelat e stilit të printimit}}: si printohet çdo ngjyrë (ngjyrë, gri, bojë, trashësi vije), e mbajtur me vizatimin. Shih [Tabelat e stilit të printimit](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} lëviz objekte mes një fletë dhe modelit përmes një dritareje pamjeje, të shkallëzuara dhe të rrotulluara që të duken njësoj nga ana tjetër. Në një fletë, zgjidh objekte dhe ata shkojnë te modeli (zgjidh dritaren e pamjes kur fleta ka më shumë se një). Ndërsa punon mbi modelin përmes një dritareje pamjeje ({{cmd:MSPACE}}), objektet e zgjedhura vijnë në fletë. Thotë sa herë u bënë më të mëdhenj ose më të vegjël. Dritaret e pamjes mbeten në fletën e tyre. Një hap zhbërjeje.

### ISODRAFT

{{cmd:ISODRAFT}} e ndez ose fik vizatimin izometrik `ON` ose `OFF`, ose shkon drejt e në planin `Left`, `Top` ose `Right`. Ndërsa është e ndezur: Ortho ({{key:F8}}) mban vija përgjatë dy boshteve të planit (majtas: 90° dhe 150°; sipër: 30° dhe 150°; djathtas: 30° dhe 90°), gjurmimi polar ({{key:F10}}) ndjek të njëjtët boshte, kapja te rrjeta ({{key:F9}}) përdor rrjetën izometrike, dhe rrjeta ({{key:F7}}) vizatohet me vija në 30°, 90° dhe 150°. {{cmd:ELLIPSE}} fiton `Isocircle`: jep një qendër dhe një rreze (ose `Diameter`) dhe vizaton elipsin që shfaq një rreth në planin aktual. Vizatimi mbetet i sheshtë: këto janë ndihma për të vizatuar një pamje piktoriale, jo një model 3D. Cilësimi është për këtë sesion dhe nuk ruhet në skedar.

### ISOPLANE

{{cmd:ISOPLANE}} zgjedh planin ku punon vizatimi izometrik: `Left`, `Top` ose `Right`. Enter kalon te plani tjetër. Ndërsa vizatimi izometrik është i ndezur, {{key:F5}} bën të njëjtën gjë në mes të një komande; ndërsa është i fikur, {{key:F5}} i lihet shfletuesit.

## Inspektim

### CAL

Shfaq vlerën e një llogaritjeje, siç lexohet kudo ku shkruhet një gjatësi.

- `Expression`: shkruaje, për shembull `12'6"+3/4"` ose `(24'-0")/3`, dhe shtyp {{key:Enter}}. CadCraft shfaq `= 12'-6 3/4"   (150.75 drawing units)`. Shih [Aritmetika në një vlerë të shkruar](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Emrat e shkurtër: `DI`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Mat distancën}}.

- `Specify first point`, `Specify second point`. Shfaq distancën, këndin, Delta X dhe Delta Y.

### AREA

Emrat e shkurtër: `AA`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Sipërfaqe}}. Shfaq sipërfaqen dhe perimetrin.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Kliko ose shkruaj qoshe; te `Specify next point (Enter closes) [Undo]` shtyp {{key:Enter}} për të mbyllur konturin. `U` heq qoshen e fundit.
  - {{key:Enter}} ose `O`, pastaj `Select object`: një rreth (shfaq perimetrin e tij), një elips, një polivijë (një e hapur mbyllet me një vijë të drejtë për sipërfaqen, dhe gjatësia e saj shfaqet), ose një vijëzim (vrimat hiqen).
  - `A` (Add area) dhe `S` (Subtract area) mbajnë një total të vazhdueshëm: kërkesa fillon me `(ADD mode)` ose `(SUBTRACT mode)`, çdo zonë shtohet ose hiqet, dhe `Total area = …` shfaqet pas çdo zone. Në këto mënyra `O` zgjedh objekte deri në {{key:Enter}}, dhe {{key:Enter}} te kërkesa e parë përfundon komandën.

### MEASUREGEOM

Emrat e shkurtër: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; pas çdo matjeje pyet përsëri, me `eXit` si parazgjedhje.

`Quick` mat rreth treguesit ndërsa e lëviz: distancën deri te objekti më i afërt djathtas, lart, majtas dhe poshtë (sipas boshteve të UCS aktuale), e vizatuar ndërsa shkon, dhe këndin aty ku dy nga ato fqinjë janë të drejtë dhe takohen. Një klikim shkruan katër distancat, gjerësinë dhe lartësinë e lirë dhe këndet në historik; Enter kthehet te opsionet. Lexon ç'është në ekran.

- `D`: dy pika, si {{cmd:DIST}}.
- `R`: `Select arc or circle`; shfaq rrezen dhe diametrin.
- `A`: një hark (këndi i tij i përfshirë), një vijë dhe pastaj një vijë e dytë (këndi mes tyre, drejt skajeve të tyre të largëta), ose {{key:Enter}} dhe tre pika (kulmi, pastaj dy skajet).
- `AR`: si {{cmd:AREA}}, një sipërfaqe.

### ID

Pa emra të shkurtër. `Specify point`; shfaq X dhe Y të saj.

### LIST

Emrat e shkurtër: `LI`, `LS`. `Select objects`; shfaq llojin, shtresën dhe matjet kryesore të çdo objekti.

### MASSPROP

{{cmd:MASSPROP}} jep vetitë e seksionit të rajoneve dhe objekteve të mbyllura që zgjedh, të marra bashkë: sipërfaqja, perimetri, kutia kufitare, qendra e rëndësisë, momentet e inercisë rreth boshteve X dhe Y që kalojnë nga origjina, produkti i inercisë, rrezet e rrotullimit, të njëjtat momente rreth qendrës së rëndësisë, dhe momentet kryesore me drejtimet e boshteve të tyre. Vrimat në një rajon numërohen si vrima. Shifrat janë në njësi vizatimi dhe të sakta për kontura të bëra me vija dhe harqe; elipset dhe splinet matën si segmente të shkurtra të drejta, dhe e thotë këtë. Pas raportit pyet nëse ta shkruajë në një skedar teksti. Objektet që nuk janë të mbyllura lihen jashtë, dhe thotë sa janë.

## Pamja, skedari dhe të tjera

### ZOOM

Emrat e shkurtër: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Kliko dy qoshe për një dritare. `E`, `A` ose Enter: tërë vizatimi.
- `P` (Previous, ose {{ui:Paraprake}} te shiriti i veglave) kthehet te pamja e mëparshme, deri në 10 pamje për skedë; një seri hapash rrote ose një lëvizje numërohet si një pamje.
- Një numër si `2`, `2x` ose `0.5x` (ose `S` dhe pastaj numri) zmadhon ose zvogëlon me atë faktor rreth mesit të ekranit.
- `C` pyet `Specify center point` dhe `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT dhe komandat PDF

Emrat e shkurtër: `PDFATT` për {{cmd:PDFATTACH}}, `PDFIM` për {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} vendos një faqe PDF nën vizatim (skedari, faqja, pika e futjes, shkalla, rrotullimi); {{cmd:PDFIMPORT}} i kthen vijat, kurbat, mbushjet dhe tekstin e një faqeje në objekte vizatimi në shtresa me emrin e PDF-së, në madhësinë reale, në një shkallë të shkruar, ose të shkallëzuar nga dy pika dhe një distancë reale. {{cmd:PDFCLIP}} pret një nënshtresë, {{cmd:PDFADJUST}} cakton zbehjen, kontrastin, monokromin ose e fik, {{cmd:PDFLAYERS}} ndërron shtresat e vetë PDF-së, dhe {{cmd:PDF}} i jep CadCraft sërish skedarët që përdorin nënshtresat e një vizatimi. Shih [Nënshtresat PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Emrat e shkurtër: `AUTOC`. Plotësim automatik i vizatimit: pa komandë që po punon, një hije gri shfaq atë që thonë modelet e vetë vizatimit se vjen më pas. {{cmd:AUTOCOMPLETE}} e ndez `On` ose e fik `Off` (edhe te Cilësimet › CadCraft) ose `Show`-on atë që do të sugjeronte tani. **Tab** vizaton hijen si një hap zhbërjeje, **Esc** e heq deri sa ndryshon vizatimi. Gjen tre gjëra te objektet më të rinj: kopjen tjetër të diçkaje të vizatuar dy herë ose më shumë me një hap të barabartë (kolona, shtylla, rreziku dhe shkalla e shkallëve), hapat tjerë të një shkalle polivijeje, dhe anën që mungon të një dhome ose zinxhiri muresh. Mes {{cmd:LINE}} ose {{cmd:PLINE}} hija është **pika tjetër**: hapi tjetër i një shkalle (rreziku, shkalla, rreziku…), qoshja e katërt e një drejtkëndëshi, pika që e mbyll, ose edhe një hap i barabartë. Afrojë kursorin pranë saj dhe shtyp **Tab**, sikur të kishe klikuar atje; vazhdo ose shtyp Enter. Llogaritet në këtë kompjuter me rregulla, pa model.

### AUTOSHEET

Alias: `ASH`. Fletë që shtrihen vetvetiu. {{cmd:AUTOSHEET}} merr pjesët e vizatimit (pamjet e tua të emërtuara, ose pjesët e veçanta të modelit, ose tërë modelin), zgjedh një madhësi letre (ose atë që jep ti), i jep çdo pjese një shkallë standarde (një shkallë për të gjitha, ose më të madhen që mund të marrë secila) dhe i vendos pamjet në rreshta mbi fleta të reja me një bllok titulli dhe një titull (emri dhe shkalla) nën çdo pamje. Ajo që nuk përshtatet në një fletë merr një fletë të vetën. Një hap zhbërjeje. Llogaritet në këtë kompjuter me rregulla, pa model.

### PHOTOSKETCH

Alias: `PSK`. Foto skice në vizatim. Zgjidh një foto (JPEG, PNG ose TIFF) të një skice dore mbi një fletë letre. {{cmd:PHOTOSKETCH}} gjen katër qoshet e fletës, drejton perspektivën, merr madhësinë e letrës që emëron (`Paper`, ose më të afërtën standarde) dhe `Scale` të skicës (1 : n), pastaj gjurmon vijat e stilolapsit në vija, harqe dhe rrathë, një shtresë për çdo ngjyrë stilolapsi (e zezë, e kuqe, blu, e gjelbër). Nëse nuk e gjen kufirin e letrës, e merr tërë fotografinë si fletë dhe e thotë këtë. Shkrimet lihen jashtë. Një hap zhbërjeje. Bëhet në këtë kompjuter me përpunim klasik të figurave, pa model, pa dërgime askund. Shih edhe komandat e vizatimeve të skanuara.

### AUTODIM

Alias: `ADIM`. Përmasë automatike sipas rregullave. {{cmd:AUTODIM}} përmas objektet e zgjedhura (ose tërë vizatimin) nga skajet e tyre të nivelit dhe të plumbit: një zinxhir përmasash përgjatë anëve që zgjedh (`Sides`), një përmasë e përgjithshme jashtë tij, gjerësia e çdo hapjeje (një hapësirë mes vijave të murit në një drejtim), një diametër për çdo madhësi vrime, dhe me `Grid` hapësirën mes vijave të rrjetës. Një përmasë që është tashmë aty nuk bëhet sërish. Një hap zhbërjeje. Llogaritet në këtë kompjuter me rregulla, pa model.

### GRIDMOVE

Alias: `GM`. Lëvizja e një vije rrjete e merr me vete grupin. {{cmd:GRIDMOVE}} lëviz një vijë rrjete (një vijë në një shtresë që emri i saj thotë grid ose axis) dhe ç'varet prej saj: muret me një skaj mbi vijën shtrihen për ta ndjekur, muret përgjatë saj lëvizin tërë, kolonat (referenca blloqesh dhe rrathë mbi vijën), flluska dhe etiketa e saj lëvizin, dhe përmasat, pikat e të cilave janë mbi të, matin hapësirën e re. Jep dy pika (vetëm pjesa tërthore e vijës llogaritet) ose `Distance`. Një hap zhbërjeje i kthen të gjitha. Bëhet me rregulla në këtë kompjuter.

### DETAILS

Alias: `DET`. Detaje që të gjejnë. {{cmd:DETAILS}} mban detajet e vetë zyrës tënde: `Add` vendos një bllok të këtij vizatimi në listë, `List` dhe `Remove` e menaxhojnë, dhe `Find` i rendit për atë që është zgjedhur (ose për atë që vizatove së fundi) sipas fjalëve në shtresat, emrat e blloqeve, modelet e vijëzimit dhe shënimet e tij, kundrejt emrit dhe shënimeve të çdo detaji; kështu një kokë dritareje gjen flashingun tënd të parapetit. Zgjidh një numër dhe një pikë për ta vendosur. Me `Hint` të ndezur (edhe te Cilësimet › CadCraft), zgjedhja e diçkaje që përputhet me një detaj vendos një rresht në shiritin e statusit. Lista mbahet në këtë shfletues, në këtë kompjuter, dhe kjo listë është ajo që kërkohet. `Share` e vendos edhe në dosjen tënde të Dokumenteve (`.cadcraft/firm-details.json`, me vizatimin e çdo bllok): `Pull` shton atë që ka ekipi yt dhe ti s'e ke, `Push` shton atë që ke ti dhe ata s'e kanë, `Both` bën të dyja, dhe asgjë nuk hiqet nga asnjë anë. Hap fillimisht dosjen e Dokumenteve ({{cmd:DOCUMENTS}}); kur ajo dosje është një dosje Team Cloud Plan, e gjithë ekipi ndan një listë. Një artikull detaj te paneli i Bibliotekës ka një buton **Shto te detajet e zyrës sime** që e vendos në të njëjtën listë. Llogaritet në këtë kompjuter me fjalë, pa model.

### SKETCHFIX

Alias: `SKF`. Skicat me stilolaps bëhen gjeometri e saktë. Shtyp dhe zvarrit një goditje të lirë me dorë një herë, (stilolaps, mi ose gisht), pastaj Enter. Çdo goditje lexohet si vijë, rreth, hark, drejtkëndësh ose polivijë: vijat pothuajse horizontale dhe vertikale bëhen saktësisht të tilla, një goditje e mbyllur e rrumbullakët bëhet rreth, një goditje e mbyllur me katër qoshe kënd të drejtë bëhet drejtkëndësh, dhe skajet e goditjeve tërhiqen bashkë dhe mbi skajet që janë tashmë në vizatim. Një hap zhbërjeje. Llogaritet në këtë kompjuter me rregulla, pa model.

### SCANATTACH dhe komandat e vizatimeve të skanuara

Emrat e shkurtër: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nuk ka. Punojnë mbi një figurë, me një hap zhbërjeje secila. {{cmd:SCANATTACH}} fut një PNG, JPEG, TIFF (një faqe ose të gjitha) ose një faqe PDF që është figurë. {{cmd:SCANSCALE}} e shkallëzon fletën nga dy pika të zgjedhura dhe distanca reale. {{cmd:SCANALIGN}} e lëviz dhe rrotullon mbi dy pika (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} shfaq këndin e vijave të gjata të fletës dhe e rrotullon fletën kur shkruan `Accept` ose një `Value`. {{cmd:SCANCLEAN}} e bën të zezë e të bardhë (`Threshold` Auto/Adaptive/Level, `Specks`) dhe `Run`. {{cmd:SCANCROP}} mban një dritare. {{cmd:SCANERASE}} fshin një `Rectangle`, `Polygon` ose `Lasso`. {{cmd:SCANTRACE}} gjurmon vija dhe harqe në një shtresë të re (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) dhe thotë çfarë gjeti dhe çfarë la si raster. {{cmd:SCANINFO}} liston skedarin origjinal dhe hapat. {{cmd:RASTERSNAP}} e ndez ose fik kapjen te vijat e fletëve të skanuara. Shih temën Vizatimet e skanuara dhe gjurmimi.

### REGEN dhe REGENALL

Emrat e shkurtër: `RE` për {{cmd:REGEN}}, `REA` për {{cmd:REGENALL}}. Ribën ç'vizatohet në ekran nga vizatimi: {{cmd:REGEN}} skedën që po shikon (në një fletë, edhe modelin që shfaqin dritaret e pamjes), {{cmd:REGENALL}} çdo skedë, çdo panel të ekranit të ndarë dhe çdo vizatim të hapur. Përdore kur pamja duket e vjetëruar pas një ndryshimi të skriptuar ose shumë të madh, ose kur një asistent ka redaktuar vizatimin; vetë vizatimi nuk preket, pra nuk ka çfarë të zhbëhet.

### NAMEDVIEW

Emrat e shkurtër: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, pastaj emri i pamjes. `S` ruan pamjen në ekran, `W` një dritare që zgjedh, `R` shfaq një pamje të ruajtur, `D` fshin një, `?` liston pamjet e kësaj skede. Ruajtja me një emër ekzistues e zëvendëson; çdo ndryshim është një hap zhbërjeje. Pamjet i përkasin skedës ku u ruajtën. DWG dhe DXF i mbajnë (tabela VIEW); pamjet e një fletë kthehen te fleta e parë, sepse skedari nuk thotë cilës fletë i përkisnin.

### UNDO dhe REDO

Emrat e shkurtër: `U` për {{cmd:UNDO}}; {{cmd:REDO}} nuk ka. Gjithashtu {{key:Mod+Z}} dhe {{key:Mod+Y}}.

### LAYER

Emrat e shkurtër: `LA`. Të çon te paneli {{ui:Shtresat}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` ose një emër (`?` i liston: Continuous, të vizatimit, dhe DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE me madhësitë e tyre `2` (gjysmë) dhe `X2` (dyfish)). {{cmd:LWEIGHT}} (`LW`): trashësia e vijës për objektet e reja në mm, ose `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): shkalla e llojit të vijës së vizatimit (me zhbërje). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — e njëjta gjë si butoni {{ui:LWT}} në shiritin e statusit. Shih [Trashësitë e vijave dhe llojet e vijave](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, pastaj emri i ri; objektet ose referencat e ndjekin. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` deri në {{key:Enter}}, pastaj `Select object on target layer or [Name]` dhe `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, pastaj `Y`: shtresa dhe çdo objekt mbi të shkojnë (jo shtresa 0, DEFPOINTS ose shtresa aktuale). Një hap zhbërjeje secila. Shih [Organizo një vizatim me shtresa](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Shtresat duke zgjedhur objekte; edhe te menuja {{ui:Mjetet}} e panelit {{ui:Shtresat}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, pastaj {{key:Enter}}: çdo shtresë tjetër fiket. {{cmd:LAYUNISO}} i ndez sërish. {{cmd:LAYOFF}} dhe {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (ose ngrirë), përsëri e përsëri; `U` heq të fundit, {{key:Enter}} përfundon. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} ndez çdo shtresë, {{cmd:LAYTHW}} shkrin çdo shtresë. Çdo komandë është një hap zhbërjeje. Shih [Organizo një vizatim me shtresa](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} nis një vizatim bosh dhe {{cmd:OPEN}} hap një DWG ose DXF, secili në skedën e vet mbi vizatimin (një vizatim i ri i pa prekur përdoret në vend të një skede të re). Mbyllja e një skede me ndryshime të paruajtura pyet së pari. Shih [Ndaje ekranin](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, edhe {{key:Mod+S}}) shkarkon një kopje në formatin e vizatimit: DWG nëse u hap nga një DWG, DXF nëse nga një DXF. Një vizatim i ri përdor formatin e zgjedhur së fundi te Ruaj si në këtë shfletues, përndryshe DWG.

{{cmd:SAVEAS}} (edhe {{key:Mod+Shift+S}}) hap dialogun {{ui:Ruaj një kopje si}}: zgjidh {{ui:DWG}} (dhe {{ui:Version}} e tij), {{ui:DXF R12}} ose {{ui:DXF 2000}}, pastaj {{ui:Ruaj}}. Zgjedhja qëndron për këtë vizatim dhe për vizatimet e rinj në këtë shfletues.

{{cmd:DXFOUT}} shkarkon gjithmonë një kopje DXF R12, pa e ndryshuar formatin që përdor {{cmd:SAVE}}.

Shih [Skedarët: çfarë hapet, çfarë ruhet](topic:files#saving).

### TOUR

Emrat e shkurtër: `TUTORIAL`. Nis përsëri turin gjashtë hapësh të vizatimit të parë. Shih [Fillimi](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Emrat e shkurtër: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Shih [Cilësimet](topic:settings#toolbar-position).

### COMMANDLINE

Emrat e shkurtër: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: ankoron ose lundron rreshtin e komandës, e bën një rresht, pyet sa rreshta historiku të shfaqen (0 deri 12), ose hap historikun. Shih [Cilësimet](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: shiritat mbi vizatim siç ishin, ose kompakt. Shih [Cilësimet](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: hapi në të cilin gjurmojnë vijat {{ui:Polar}} (më shumë se 0, deri në 180). Mbahet në këtë shfletues.

### UNITS

Emrat e shkurtër: `UN`. Si shkruhen dhe shtypen gjatësitë.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural dhe Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Të tjerët: `Enter number of decimal places (0 to 8)`.

Përmasat e reja e ndjekin. Një hap zhbërjeje. Njëlloj si {{ui:Formati i gjatësisë}} dhe {{ui:Saktësia}} te {{ui:Cilësimet aktuale}}; shih [Këmbë dhe inç](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Emrat e shkurtër: `GDS`. Shiko një skemë IC (një skedar rrjedhe GDSII): provë laboratorike, vetëm për shikim dhe matje.

- Një zgjedhës skedari merr një skedar `.gds`; me disa qeliza kryesore, `Enter the top cell to draw`.
- Çdo shtresë dhe llojë të dhënash bëhet shtresë vizatimi (`GDS 1`, `GDS 2/5`), referencat dhe grupet vendosen të sheshta, në njësinë e përdoruesit të skedarit (zakonisht mikrometra). Një hap zhbërjeje. Asgjë nuk simulohet ose kontrollohet, dhe skedari nuk shkruhet përsëri.

### DIAGRAM

Emrat e shkurtër: `TEXTDIAGRAM`, `T2D`. Një diagram nga tekst.

- Një kuti merr tekstin (ose një rresht me `;` midis deklaratave në rreshtin e komandës): një diagram rrjedhe Mermaid, një diagram komponentësh PlantUML, D2 ose një listë nga-te.
- `Specify the top left corner of the diagram`, pastaj `Specify the text height`.

Blloqet dhe lidhjet janë objekte të zakonshme në shtresën `Diagram`, të zgjedhura kur përfundon. Një hap zhbërjeje. Shih [Vizato një diagram nga tekst](topic:text-to-diagram).

### OLELIST

Emrat e shkurtër: `OLES`. Objektet OLE që mban një DWG dhe CadCraft nuk mund t'i vendosë vetë.

- Liston çdo njërin: numrin, llojin, madhësinë, nëse ruajti një figurë.
- `Enter an option [Place/eXit] <eXit>`: Place pyet numrin, qoshen e poshtme majtas dhe gjerësinë, dhe vizaton një kornizë me figurën. Një hap zhbërjeje; objekti i mbajtur nuk ndryshon. Shih [Figurat](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Emrat e shkurtër: `SHX`. Fonte SHX të tua.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Dosja}} lexon çdo `.shx` në një dosje (CadCraft Studio; sërish në çdo nisje), {{ui:Skedarët}} merr skedarë të zgjedhur (shfletuesi), {{ui:Kthe}} vendos shkronjat e një fonti të kundërt, nga e fundit te e para. Stilet e tekstit që emërojnë një font të ngarkuar vizatohen me të. Shih [Vizato tekst me fontet e tua SHX](topic:shx-fonts).

### LIMITS

Sa i madh synon të jetë vizatimi.

- `Specify lower left corner or [ON/OFF] <current>`: një pikë, `ON` ose `OFF`.
- `Specify upper right corner <current>`.

Rrjeta mbush kufijtë, {{cmd:ZOOM}} All i shfaq, dhe me kufijtë ON një pikë jashtë refuzohet (`**Outside limits`). Një hap zhbërjeje; ruhet në DWG dhe DXF. Shih [Vendos kufijtë e vizatimit](topic:drawing-limits).

### AUNITS

Emrat e shkurtër: `ANGUNITS`. Si shfaqen dhe shkruhen këndet.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ose për dy të tjerat `Enter precision` (0 gradë, 2 minuta, 4 sekonda, 5 deri 8 dhjetore të sekondës).

Një hap zhbërjeje; ruhet në DWG dhe DXF. Njëlloj si {{ui:Formati i këndit}} te {{ui:Cilësimet aktuale}}. Shih [Shkruaj dhe shfaq drejtimet dhe këndet](topic:bearings-and-angles).

### APPLOAD

Emrat e shkurtër: `AP`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Ngarko aplikacion…}}. Dialogu {{ui:Ngarko aplikacione}}: ngarko rutina `.lsp` dhe skedarë dialogu `.dcl`, shkarkoji, ngarkoji sërish nga historiku, dhe Startup Suite. Komandat `(defun c:NAME …)` të një rutine punojnë më pas si çdo komandë tjetër. Shih [Ngarko aplikacione](topic:load-applications) dhe [Ekzekuto rutina LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Redakto aliaset…}}) hap skedarin tënd të aliaseve (rreshta `ALIAS, *COMMAND`); {{ui:Ruaj}} e aplikon. {{cmd:REINIT}} e aplikon sërish. Shih [Redakto aliaset e komandave](topic:command-aliases).

### OPTIONKEYS

Emrat e shkurtër: `OPTKEYS`; ose {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Shkronjat e opsioneve}} › {{ui:Redakto…}}. Hap skedarin tënd të shkronjave të opsioneve (rreshta `COMMAND.OPTION, LETTERS`, si `ARRAY.PO, P`); {{ui:Ruaj}} e aplikon dhe {{cmd:REINIT}} e aplikon sërish. Shih [Jep opsioneve të komandave shkronjat e tua](topic:option-letters).

### LISPEDIT

Emrat e shkurtër: `VLIDE`; ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Redaktuesi LISP}}. Hap redaktuesin LISP, një dritare që mbetet e hapur pranë vizatimit.

- Teksti: numra rreshtash, pjesa tjetër e kllapës te kursori shënohet (e kuqe kur nuk ka), {{key:Enter}} zbraz rreshtin e ri nën kllapën e hapur, {{key:Tab}} shkruan dy hapësira, {{key:Esc}} del nga teksti.
- {{ui:Ngarko në vizatim}} ({{key:Ctrl+Shift+Enter}}): lexon çdo formë, ashtu si bën {{cmd:APPLOAD}} me skedarin, dhe krijon komandat e saj `c:`. Skedari shfaqet në listën e {{cmd:APPLOAD}}.
- {{ui:Ekzekuto zgjedhjen}} ({{key:Ctrl+Enter}}): vlerëson format e zgjedhura, ose formën ku është kursori.
- {{ui:Ndalo}}: ndalon një rutinë që po punon.
- {{ui:Konsola}}: çfarë shtypi rutina, dhe çdo gabim me rreshtin e vet; kliko një gabim për të shkuar atje. Teksti ekzekutohet një formë e nivelit të lartë për herë, kështu që rreshti është i formës, ose brenda saj rreshti që thërret funksionin e emëruar nga gabimi.
- {{ui:E re}}, {{ui:Hap}}, {{ui:Ruaj}} ({{key:Ctrl+S}}): një skedar `.lsp`. Teksti mbahet edhe në këtë shfletues, kështu që mbyllja e dritares nuk e humb.
- Pranë tekstit: funksionet që përcakton rutina, ato që thërret dhe që ky LISP nuk i ka ende, ato që thërret dhe nuk janë as të përcaktuara në të, as të integruara, dhe listat e plota të asaj që është e integruar dhe asaj që nuk është.

Një tekst me një kllapë që nuk mbyllet kurrë, ose një varg që nuk mbaron kurrë, nuk ekzekutohet: emërohet rreshti. Nuk ka debugger hap pas hapi, pika ndërprerjeje ose dritare shikimi. Shih [Ekzekuto rutina LISP](topic:run-lisp).

### HELP

Emrat e shkurtër: `?`. Shfaq çdo komandë, aliasët e saj dhe një përshkrim me një rresht në historikun e rreshtit të komandës. Nuk e hap këtë ndihmë: shtyp {{key:F1}} ose kliko {{ui:Ndihmë}} për atë.

## Kërkesa "Select objects"

Te çdo kërkesë `Select objects`: kliko objekte, zvarrit dritare (nga e majta në të djathtë) dhe kryqëzime (nga e djathta në të majtë) me dy klikime, ose shtyp dhe zvarrit një lasso ({{key:Space}} ndërsa zvarrit: dritare, kryqëzim, gardh), {{key:Shift}}+klikim për të hequr, dhe shtyp {{key:Enter}} për të përfunduar. Mund të shkruash edhe `ALL` (gjithçka), `L` (objekti i fundit), `P` (Previous: çfarë përdori komanda e fundit), `F` (Fence: objektet që kryqëzon një vijë pikash; `U` heq një pikë), `W` (Window), `C` (Crossing), `R` (mënyra e heqjes: klikimet heqin objekte; kërkesa thotë `Remove objects`) dhe `A` (Add përsëri). `?` i liston. Nuk shfaqen te kërkesa. {{key:Tab}} mbi objekte që mbivendosen thekson të radhës; kliko për ta zgjedhur. Shih [Zgjidh objektet](topic:select-objects).

### ACCESS

Emrat e shkurtër: `AX`. Vizatim pa shikim. {{cmd:ACCESS}} e ndez ose e fik Access (`On`, `Off`) dhe ndërron tingujt e kapjes (`Sound`) dhe komandat e folura (`Voice`); fillimisht thotë gjendjen. Me Access të ndezur, çdo komandë dhe rezultat lexohet përmes lexuesit tënd të ekranit dhe zona e vizatimit ka një kursor tastiere. Tema e ndihmës "Vizatim pa shikim" ka tastet.

### DESCRIBE

Emrat e shkurtër: `DESC`. Thotë ç'mban vizatimi: sa objekte, çfarë lloji, sa i madh, sa shtresa, ç'është zgjedhur. Vetëm lexon; nuk ndryshon asgjë.

### WHEREAMI

Emrat e shkurtër: `WHERE`. Thotë ku është kursori, në njësitë e vizatimit.

### NEARBY

Thotë çfarë ndodhet afër kursorit, më i afërti i pari, secili me distancën e vet dhe anën ku është.

### SAYSEL

Thotë çfarë është zgjedhur, një fjali për objekt (gjatësia e vijës, skajet dhe këndi; rrezja dhe qendra e rrethit; teksti siç është shkruar).

### VOICE

Ndez ose fik komandat e folura. Njihen në këtë kompjuter; aty ku shfletuesi nuk e bën këtë, zëri mbetet i fikur, përveç nëse zgjedh shërbimin online të shfletuesit te Cilësimet.

### TOUCHCROSSHAIR

Emrat e shkurtër: `TCX`. Kryqëzorja e zhvendosur për vizatim me gisht, që maja e gishtit të mos e mbulojë pikën që zgjedh. Ndërsa është e ndezur, një gisht mbi vizatim nuk zgjedh: lëviz një kryqëzore që ndodhet mbi gishtin dhe në njërën anë. Kapja e objekteve dhe gjurmimi ndjekin kryqëzoren. Ngritja e gishtit nuk zgjedh asgjë dhe e lë kryqëzoren aty ku është. Për të zgjedhur, shtyp butonin {{ui:Click}} në qoshen e vizatimit, ose prek kudo në vizatim me një gisht të dytë. Mbaj {{ui:Click}} ndërsa lëviz gishtin tjetër për të zvarritur (një dritare zgjedhjeje, një lasso, një grip). Një gisht i shtypur dhe i mbajtur ndalur, ose butoni {{ui:Enter}}, është Enter. Dy gishta lëvizin dhe zmadhojnë si më parë. Pranë skajit të poshtëm dhe skajit të largët, kryqëzorja i afrohet gishtit, që çdo pjesë e vizatimit të arrihet. Një stilolaps dhe një mi zgjedhin gjithmonë drejtpërdrejt.

{{cmd:TOUCHCROSSHAIR}} thotë gjendjen dhe pyet `ON`, `OFF`, `Auto` (vetëm aty ku gishti është treguesi i vetëm, kështu që është fikur në një kompjuter me mi), `Distance` (sa larg ndodhet kryqëzorja nga gishti, 24 deri 240 piksela) ose `Side` (`Left`: lart dhe majtas, për dorën e djathtë; `Right` për dorën e majtë; butonat zhvendosen në qoshen tjetër). Të njëjtat zgjedhje janë te Cilësimet › CadCraft, dhe në një pajisje me ekran prekje shiriti i statusit ka një ndërrues {{ui:Kryqëzorja e zhvendosur}}. Zgjedhjet mbahen në këtë shfletues.

### WHOHAS

Thotë kush ka hapur një vizatim. Në CadCraft Studio në një kompjuter, hapja e një DWG ose DXF shkruan një skedar të vogël kyçjeje pranë tij (`Plan.dwg.cclock`: kush, që kur, cilën version), e rifreskon çdo minutë ndërsa vizatimi është i hapur, dhe e heq kur mbyllet vizatimi. Hapja e një vizatimi që e ka hapur dikush tjetër thotë kush dhe që kur, dhe ofron {{ui:Hap vetëm për lexim}} (Ruaj pastaj kërkon një emër të ri), {{ui:Hap gjithsesi}} (personi tjetër njoftohet te rifreskimi i tij i radhës) ose {{ui:Anulo}}. Ruajtja mbi një skedar që dikush tjetër e ka të hapur pyet së pari. Një kyçje që nuk është rifreskuar për pesë minuta thuhet e vjetëruar: kopja tjetër u mbyll pa u ruajtur, ose kompjuteri është në gjumë.

{{cmd:WHOHAS}} pyet `Current` (vizatimi i hapur), `File` (zgjidh një), `FOlder` (zgjidh një dosje: çdo vizatim në të që është i hapur diku listohet), `Path` (shkruaj një shteg të plotë) ose `Name` (emri që shohin të tjerët; emri i llogarisë tënde kur je i futur). Studio mund të arrijë vetëm dosje që ke zgjedhur ti: për një vizatim të hapur nga një dosje që s'u zgjodh kurrë thotë një herë që s'mund ta shënojë si të hapur; `FOlder` zgjedh dosjen, dhe kyçjet punojnë atje që nga ajo kohë. Kyçja është një shënim për njerëzit, jo pengesë: një program tjetër mund akoma ta shkruajë skedarin. Në një shfletues nuk ka dosje për të kërkuar, dhe komanda e thotë këtë.

### OVERKILL

Fshin objekte të dyfishta dhe rregullon vija dhe harqe që mbivendosen, për vizatime që vijnë me vija të dyfishta. `Select objects to clean up`, {{key:Enter}}, pastaj {{key:Enter}} sërish për të pastruar me cilësimet e shfaqura, ose ndrysho një më parë:

- `Tolerance`: sa afër duhet të jenë dy koordinata për të qenë të njëjta (0.000001 fillimisht; 0 do të thotë saktësisht e njëjta gjë).
- `Ignore`: veti që mund të ndryshojnë mes dy objekteve që janë ndryshe të njëjta. Shkruaj një emër për ta ndërruar: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ose `None` / `All`. {{key:Enter}} kur mbaron.
- `Overlap`: ndezur ose fikur. Me të ndezur, vijat përgjatë një vije të drejtë që mbivendosen bëhen një vijë (një vijë që ndodhet brenda një tjetre thjesht fshihet), dhe harqet e një rrethi që mbivendosen bëhen një hark; harqet që mbyllin një rreth të plotë bëhen rreth, dhe një hark që shtrihet mbi një rreth fshihet.
- `Ends`: ndezur ose fikur. Me të ndezur, vijat përgjatë një vije të drejtë dhe harqet e një rrethi që vetëm prekin skaj më skaj bëhen një pjesë.

Çdo lloj objekti kontrollohet për dyfishime: dy objekte janë të dyfishta kur gjeometria e tyre është e njëjtë brenda tolerancës dhe shtresa, ngjyra, lloji i vijës, shkalla e llojit të vijës, trashësia e vijës, trashësia, transparenca dhe lartësia përputhen (më pak ato që injoron). Vijat dhe polivijat e hapura përputhen edhe kur vizatohen nga ana tjetër. Objekti i parë në renditjen e vizatimit mbetet dhe mban vetitë e veta. Komanda thotë sa objekte kontrolloi dhe fshiu: dyfishime, pjesë të mbivendosura të bashkuara, pjesë të bashkuara skaj më skaj. Një {{cmd:UNDO}} i kthen të gjitha. Cilësimet mbahen deri sa mbyll dritaren e vizatimit.

Lë në pajtim: objektet në shtresa të kyçura dhe objektet e fshehura. Nuk bashkon vija me lartësi (Z) (dyfishimet e saktë të tyre akoma shkojnë), dhe nuk prek segmentet brenda një polivijeje (nuk hollohen), një vijë që shtrihet mbi segmentin e një polivijeje, dhe një polivijë e mbyllur e vizatuar nga ana tjetër.

### DRAWORDER

Ndryshon cilët objekte vizatohen përpara. `Select objects to re-order`, {{key:Enter}}, pastaj `Above objects`, `Under objects`, `Front` ose `Back` ({{key:Enter}} = `Back`). `Above objects` dhe `Under objects` pyesin objektet referencë: zgjedhja shkon menjëherë përpara më të përparshmit prej tyre, ose menjëherë prapa më të pasmit. Objektet e zgjedhura mbajnë renditjen e tyre mes tyre. Një hap zhbërjeje. Renditja ruhet me vizatimin në DWG dhe DXF, ku është renditja në të cilën shkruhen objektet.

Në ekran çdo objekt vizatohet sipas renditjes së vizatimit, si e vizatojnë programet e tjera që hapin skedarin: një vijëzim i ngurtë, një polivijë e gjerë ose një maskë teksti mbulon vijat dhe tekstin prapa tij, dhe ajo që është përpara e mbulon. Ku një vijë kryqëzon një tekst, shfaqen të dyja. Figurat dhe nënshtresat PDF të bashkëngjitura mbeten nën vijat. Në një vizatim shumë të madh, ku mbushjet dhe vijat mbivendosen dhe alternojnë më shumë se 256 herë, 256 të parat mbajnë renditjen e tyre, dhe pjesa tjetër vizaton mbushjet nën vija, që rivizatimi të mbetet i shpejtë.

### TEXTTOFRONT

Sjell tekstin, përmasat dhe udhëheqësit përpara çdo gjëje tjetër në hapësirën e hapur: `Text`, `Dimensions`, `Leaders` ose `All` ({{key:Enter}} = `All`). Një hap zhbërjeje. Thotë kështu kur nuk ka asgjë, ose kur janë tashmë përpara.

### HATCHTOBACK

Dërgon çdo vijëzim të hapësirës së hapur prapa çdo gjëje tjetër, që mbushjet të mos mbulojnë më vijat dhe tekstin në skedarin e ruajtur. Pa pyetje. Një hap zhbërjeje.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Shfaq vetëm objektet e zgjedhura: çdo gjë tjetër në hapësirën e hapur zhduket nga shikimi deri te {{cmd:UNISOLATEOBJECTS}}. Ndryshe nga {{cmd:LAYISO}}, punon mbi objektet që zgjedh, çfarëdo që të jenë shtresat e tyre, dhe nuk ndryshon asnjë shtresë. Objektet e fshehura nuk vizatohen, nuk zgjidhen, nuk kapen, nuk zmadhohen dhe nuk printohen, dhe komandat që pranojnë `ALL` i kalojnë anash. Ç'vizaton ndërsa objektet janë të izoluara shfaqet si zakonisht.

Kjo është vetëm për sesionin: asgjë për të nuk ruhet me vizatimin, nuk është një hap zhbërjeje, dhe hapja sërish e vizatimit shfaq çdo gjë. Ndërsa objektet janë të fshehura, shiriti i statusit shfaq një buton me numrin e tyre; kliko për t'i shfaqur sërish.

### HIDEOBJECTS

Fsheh objektet e zgjedhura deri te {{cmd:UNISOLATEOBJECTS}}. Të njëjtat rregulla si {{cmd:ISOLATEOBJECTS}}: vetëm për sesionin, nuk ruhet, nuk është hap zhbërjeje.

### UNISOLATEOBJECTS

Emrat e shkurtër: `UNISOLATE`, `UNHIDE`. Shfaq sërish çdo objekt të fshehur nga {{cmd:ISOLATEOBJECTS}} ose {{cmd:HIDEOBJECTS}}, dhe thotë sa u kthyen.

### LAYLOCKFADE

Cakton si duken objektet në shtresa të kyçura dhe nëse një klikim i arrin. Thotë gjendjen aktuale, pastaj merr:

- një numër nga 0 deri 90: sasia e zbehjes në përqind (50 fillimisht). 0 e fik zbehjen.
- `ON` ose `OFF`: zbehja ndezur ose fikur, duke e mbajtur sasinë.
- `Pick`, pastaj `Yes` ose `No`: a mund një klikim të zgjedhë objekte në shtresa të kyçura kur nuk po punon ndonjë komandë? `No` (parazgjedhja): nuk mund të zgjidhen fare. `Yes`: një klikim ose dritare i zgjedh, që {{ui:Vetitë}} t'i shfaqë; prapë nuk mund të ndryshohen, dhe `Select objects` i vetë një komande nuk i merr kurrë.

Kapja e objekteve i gjen objektet në shtresa të kyçura në çdo rast. Printimet nuk zbehen kurrë. Të dy cilësimet janë tuajat, jo të vizatimit, dhe janë edhe te {{ui:Cilësimet}} nën {{ui:Shtresat e kyçura}}.

### BURST

Shpërthen referencat e blloqeve dhe mban atë që thonë atributet e tyre. `Select block references to burst`, {{key:Enter}}: çdo referencë zëvendësohet me objektet e blloqut, dhe vlera e çdo atributi të dukshëm bëhet tekst i thjeshtë në shtresën e vet të atributit (një atribut në shtresën 0 shkon te shtresa e referencës, si objektet e tjera të blloqut në shtresën 0). Atributet e padukshëm hidhen. Një bllok brenda bllokut mbetet referencë blloku. Një hap zhbërjeje; raporton referencat e shpërthyera dhe vlerat e atributeve të kthyera në tekst.

Refuzon një vizatim të lidhur me emër (lidhe më parë, ose kopjo prej tij me {{cmd:NCOPY}}), dhe lë rehat objektet e tjera të zgjedhura. Për referencat e blloqeve {{cmd:EXPLODE}} jep të njëjtat objekte; {{cmd:BURST}} merr vetëm referenca blloqesh dhe numëron tekstin e atributeve.

### TXT2MTXT

Alias: `T2M`. Bashkon tekste një rreshti në një tekst paragrafi. `Select single-line text to join`, {{key:Enter}}, pastaj `Paragraph` (rreshtat bashkohen dhe rreshtohen sipas gjerësisë së rreshtit më të gjerë) ose `Lines` (çdo tekst mbetet rresht i vet); {{key:Enter}} merr atë të përdorur së fundi. Rreshtat renditen nga lart poshtë, pastaj nga e majta në të djathtë, sipas drejtimit të tekstit të sipërm. Paragrafi varet nga qoshja e sipërme majtas e tekstit të sipërm dhe merr lartësinë, rrotullimin, stilin, shtresën dhe ngjyrën e tij. Një hap zhbërjeje.

Teksti që është tashmë tekst paragrafi, teksti bosh dhe objektet e tjera në zgjedhje lihen rehat, dhe komanda thotë sa.

### NCOPY

Kopjon objekte nga një referencë blloku ose nga një vizatim i lidhur në vizatim, pa thyer asgjë. `Pick an object inside a block reference or a linked drawing`: objekti më afër klikimit kopjohet aty ku shfaqet, sa të thellë qoftë në blloqe; kliko më shumë, pastaj {{key:Enter}}. Pastaj `Base point to move the copies`: {{key:Enter}} i lë në vend, ose jep një pikë bazë dhe një pikë të dytë. E gjithë komanda është një hap zhbërjeje.

Një kopje merr shtresën ku shfaqet: një objekt në shtresën 0 brenda një bllok bie në shtresën e referencës ku ishte, dhe një ngjyrë ByBlock bëhet ngjyra e asaj reference. Nga një vizatim i lidhur, shtresa `Plan|Walls` bëhet `Plan$0$Walls` (emri që jep lidhja), e bërë me ngjyrën, llojin e vijës dhe trashësinë e shtresës së lidhur. Vlera e një atributi kopjohet si tekst. Referencat e blloqeve në shtresa të kyçura nuk mund të zgjidhen.

### FLATTEN

Vendos lartësinë (Z) dhe trashësinë e objekteve të zgjedhura në 0. `Select objects to flatten`, {{key:Enter}}. Gjithashtu sheshon objektet brenda përkufizimeve të blloqeve që përdor zgjedhja (dhe blloqet brenda tyre), kështu që çdo referencë e atyre blloqeve ndryshon; vizatimet e lidhura lihen ashtu si janë. Një hap zhbërjeje; raporton sa objekte ndryshuan, dhe thotë kështu kur asnjë nuk kishte lartësi ose trashësi.

Ajo që mban CadCraft nga dimensioni i tretë në një vizatim 2D është: një lartësi te rrathët, harqet, elipset, pikat, teksti, referencat e blloqeve, vijëzimet, udhëheqësit dhe polivijat (kota e tyre), një lartësi në çdo skaj të vijës, dhe një trashësi te vijat, rrathët, harqet, polivijat, pikat dhe teksti, ashtu si i kishte skedari. {{cmd:FLATTEN}} pastron pikërisht ato. Nuk prek modelin 3D të skedës 3D, faqet ose trupat 3D, dhe një objekt i vizatuar në një plan të prirur ishte sjellë tashmë në planin e vizatimit kur u hap skedari.

### BREAKLINE

Vizaton një vijë me një simbol prerjeje, për një pamje që është prerë e shkurtër. Thotë madhësinë dhe zgjatjen aktuale, pastaj `First point of the break line` (ose `Size` / `Extension` për t'i ndryshuar më parë), `Second point`, dhe `Where the break symbol sits`: kliko përgjatë vijës, ose {{key:Enter}} për mesin. Rezultati është një polivijë e vetme në shtresën aktuale: vija, që kalon çdo pikë me zgjatjen, me një vijë në formë Z sa lartësia e madhësisë dhe gjysma e gjatësisë së saj.

`Size` dhe `Extension` mbahen mend si cilësimet e tua (madhësia fillon në dyfishin e lartësisë së tekstit të përmasës shumëzuar me shkallën e përmasës; zgjatja në gjysmën e madhësisë). {{key:Enter}} e përsërit komandën.

### AUDIT

Kontrollon vizatimin e hapur për dëmtime dhe i rregullon. {{cmd:AUDIT}} shikon çdo objekt në model, në fletë dhe brenda blloqeve, dhe tabelën e shtresave, dhe liston ç'gjen sipas llojit:

- numra që nuk janë të fundëm ose janë shumë të mëdhenj;
- objekte pa madhësi: një vijë pa gjatësi, një rreth pa rreze, një polivijë me një pikë, tekst pa shkronja ose lartësi, një referencë blloku me shkallë zero;
- objekte në një shtresë që vizatimi nuk e ka; referenca të një blloku që nuk ekziston; emra stilesh teksti dhe përmasash, dhe emra llojesh vijash që nuk janë në vizatim;
- blloqe që përmbajnë veten, drejtpërdrejt ose përmes blloqeve të tjerë;
- objekte që ndajnë një id, një çelës ose një dorezë skedari;
- përmasa pa pikat nga të cilat matën, dhe vijëzime, kontura e të cilëve nuk është i mbyllur.

Pastaj pyet `Fix them? [Yes/No]`. `No` nuk ndryshon asgjë. `Yes` rregullon gjithçka në një hap zhbërjeje: ç'nuk mund të vizatohet hiqet (numra të keq, pa madhësi, bllok që mungon, përmasë e prishur, vijëzim pa kufi të përdorshëm, referenca që mbyll një rreth blloqesh); një shtresë që mungon krijohet; emrat e panjohur të stileve dhe llojeve të vijave kthehen te parazgjedhjet; një çelës i përbashkët zëvendësohet. Thotë sa objekte u hoqën dhe sa u rregulluan. Të njëjtat gjetje shfaqen te paneli i Problemeve, secila me {{ui:Ndreq}} të vet.

Nuk refuzon asgjë, por kontrollon vetëm atë që vizaton vetë CadCraft: të dhënat e mbajtura për programe të tjera (trupa 3D, objekte OLE) nuk hapen.

### RECOVER

Hap një DXF ose DWG të dëmtuar. {{cmd:RECOVER}} pyet për skedarin, lexon çfarë mund të lexohet në vend se ta refuzojë, liston ç'kaloi ose supozoi, pastaj kontrollon dhe rregullon vizatimin siç bën {{cmd:AUDIT}} me `Yes`.

- DXF: rreshtat që nuk janë pjesë e një çifti kodi dhe vlere kalohen deri sa çiftet përputhen sërish; një seksion pa fund mbyllet; një skedar që është prerë shkurt lexohet deri te prerja; një DXF binar i prerë shkurt lexohet deri te vlera e fundit e plotë. Kur një seksion, një bllok ose një objekt akoma nuk mund të lexohet, lihet jashtë dhe emërohet, dhe leximi vazhdon përtej tij.
- DWG: objektet që dështojnë kontrollet e tyre ose nuk mund të dekodohen lihen jashtë, dhe një listë objektesh e humbur ndërtohet sërish duke kaluar të dhënat e objekteve.

Skedari në disk nuk ndryshon. Vizatimi i rikuperuar hapet i pa ruajtur: ruaje me një emër të ri. Një skedar nga i cili nuk lexohet asgjë fare refuzohet, me arsyen.

### LEGACYTEXT

Kthen tekstin e shkruar me fonte të vjetra vietnameze 8-bit në Unicode. Emrat e shkurtër `TEXTTOUNICODE` dhe `VNTEXT`.

Vizatimet e vjetra vietnameze i mbajnë tekstet e tyre si karaktere perëndimore që vetëm fonti i kthen në vietnameze: tekst TCVN3 në fontet ABC (`.VnTime`, `.VnArial`, dhe fontet me shkronja të mëdha emrat e të cilave mbarojnë me `H`), dhe tekst VNI në fontet VNI (`VNI-Times`). CadCraft shfaq këtë tekst ashtu si lexohet sapo hapet vizatimi, sipas fontit të stilit të tekstit, të objektit, ose të një pjese brenda tekstit të paragrafit; skedari akoma mban karakteret e vjetra.

{{cmd:LEGACYTEXT}} thotë sa tekste gjeti në secilën koduar dhe pyet `Convert … to Unicode?`. `Yes` i rishkruan të gjitha (modelin, fletët, blloqet, vlerat dhe përkufizimet e atributeve), dhe i jep stileve të tekstit një font Unicode (Times New Roman, Arial ose Courier New sipas llojit të fontit të vjetër), në një hap zhbërjeje. Formatimi brenda tekstit të paragrafit mbahet.

Kur asnjë tekst nuk përdor një font të njohur (një stil që ka humbur emrin e fontit), pyet `Read selected texts as [Tcvn3/Vni/None]`: zgjidh kodimin dhe zgjidh tekstet. Teksti që është tashmë Unicode lihet rehat. Teksti i përmasave të mbishkruar dhe teksti i udhëheqësve shumëfish nuk konvertohen.
