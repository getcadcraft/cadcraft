---
title: Tixraaca amarrada
summary: Dhammaan amarrada barnaamijka naqshadaynta CadCraft, magacyadooda gaaban, su'aalaha ay weydiiso, ikhtiyaarradooda iyo qiimayaasha caadiga ah.
keywords: amarro, magacyo gaaban, liiska amarrada, aag, perimeter, measuregeom, xariiq, pline, goobo, qaanso, gooy, offset, dimlinear, bloog, insert, layout, plot, weynee, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Qor magaca amarka ama magaca gaaban oo riix {{key:Enter}} ama {{key:Space}}. Xarfaha weyn iyo yar ma muhiimka, `_`, `-`, `.` ama `'` ee hore waa la iska indha tirayaa. Qor `HELP` (ama `?`) si aad u daabacdo liis gaaban oo dhammaan amarrada ah taariikhda khadka amarka; riix {{key:F1}} si aad u aragto caawintan.

Sida loo akhriyo weydiimaha: ikhtiyaarrada waxay ku jiraan xidho laba-geesood, mid ka mid ahna waxaad doortaa adigoo qoraya xarfaha weyn (`D` ee Diameter). Caadiga ah waxa lagu jiraa xidho xagal; riix {{key:Enter}} si aad u aqbasho. Meel barta la weydiisto, waxaad riixi kartaa ama qori mid kasta oo ka mid ah qaababka ku jira [Isku-xidhka iyo gelinta masaafada](topic:coordinate-entry). Meel masaafo la weydiisto, waxaad qori kartaa lambar ama riixi laba barood.

Marka {{key:Enter}} lagu riixo meel barab ama walax loo baahan yahay, oo aan caadi lahayn, amarku wuu dhammaadaa. {{key:Esc}} wuu joojiyaa. Wixii amarku sameeyay waa hal tallaabo oo ka noqo.

## Sawir

### LINE

Magacyada gaaban: `L`. Qaybo toosan, mid kasta walax u gaar ah.

- `Specify first point` (Enter: ka bilow barta aad ugu dambeyn siisay)
- `Specify next point [Undo]`, ku celi. Laba qaybood ka dib: `[Undo/Close]`.
- `U` wuxuu qaadaa qaybta ugu dambeysay, `C` wuxuu ku xiraa barta kowaad oo wuu dhammaadaa. Enter wuu dhammaadaa.

### PLINE

Magacyada gaaban: `PL`. Hal polilayn oo qaybo khad iyo qaansoo ah.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close marka laba qayb la gaaro)
- `A` wuxuu u beddelaa qaansooyin: `Specify endpoint of arc [Line/CLose/Undo]`. Qaanso kasta wuxuu raacaa qaybta ka horreysa tangent ahaan. `L` wuxuu ku laabanayaa khadadka, `CL` wuxuu ku xiraa qaansadii.
- Enter wuu dhammaadaa; polilaynku wuu furan yahay.

### CIRCLE

Magacyada gaaban: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` wuxuu weydiiyaa `Specify diameter of circle`.
- `2P`: laba dhammaad oo dhexroor. `3P`: saddex barood oo goobada ku yaal.
- `T` (sidoo kale amarka `TTR`, iyo {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, kadibna kan labaad, kadibna nuuf-dhexroorka (Enter: kii ugu dambeeyay). Goobadu waxay taabanaysaa labada walax (khadad, qaansooyin, goobooyin, qaybo polilayn, sidoo kale gudaha bloogyada); kuwa taabanaya midkood, kan ugu dhow barashadaada. "Circle does not exist" marka midna ku habboonayn.
- `TTT` (ama {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): saddex walax; goobada taabanaysa saddexdeeda, kan ugu dhow barashadaada (saddex khad waxay bixiyaan goobada gudaha ama mid dibadda, iyadoo ku xidhan meesha aad riixdo).

### ARC

Magacyada gaaban: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: qaanso saddex barood ku dhex mara.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Qaansadu waxay socotaa saacadda ka soo horjeedda laga bilaabo bilowga ilaa dhammaadka.

### RECTANG

Magacyada gaaban: `REC`, `RECTANGLE`. Polilayn xidhan.

- `Specify first corner point`, `Specify other corner point`. Qor `@width,height` geeska labaad.

### POLYGON

Magacyada gaaban: `POL`. Polygon caadi ah oo polilayn xidhan ah.

- `Enter number of sides <4>` (3 ilaa 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: riix ama qor barab; masaafadeeda waxay dejisaa cabbirka, jihadeeduna waxay leexisaa polygon-ka.

### ELLIPSE

Magacyada gaaban: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, kadibna masaafada dhidibka kale.
- `I` (`Isocircle`, kaliya intii {{cmd:ISODRAFT}} shidan tahay): dhexe, kadibna nuuf-dhexroor ama `Diameter`: ellipse-ka goobo u muuqda diyaaradda isometric-ka hadda.

### HATCH

Magacyada gaaban: `H`, `BH`, `BHATCH`; ama {{ui:Hatch}} qalabka. Marka hore wuxuu daabacaa qaabka hadda, miisaanka iyo xagalka.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, ku celi (`Undo` marka aag jirto): riix kasta wuxuu ku daraa aagga xidhan ee ku wareegsan, iyo walxaha xidhan ee gudaha ku jira sidoo kale sida islands. Enter wuxuu sameeyaa hal hatch oo ka mid ah dhammaantood.
- `S`: `Select closed objects` (polilaynno xidhan, goobooyin, ellipse-yo xidhan).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): buuxinta waa midab-kala-bax halkii ay ka ahaan lahayd qaab. Eeg {{cmd:GRADIENT}} su'aalahooda.

Eeg [Hatch iyo aagagga buuxinta](topic:hatch).

### GRADIENT

Magacyada gaaban: `GD`. Aagga ku buuxi midab-kala-bax hal ama laba midab. Marka hore midab-kala-baxa ayay weydiisaa, kadibna waxay sii socotaa sida {{cmd:HATCH}} (`Pick internal point`, `S` walxaha xidhan, {{key:Enter}} si loo dhammeeyo).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, ku celi; mar kasta wuxuu daabacaa midab-kala-baxa sida hadda yahay.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ama mid ka mid ah oo rogan (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Xarfaha hore ayaa ku filan.
- `O`: hal midab, kadibna tiribkiisa 0 ilaa 1 (0 wuxuu ka dhigaa madow, 0.5 waa midabka laftiisa, 1 wuxuu ka dhigaa cad). `TW`: midabka kowaad iyo labaad. Midab waa lambar 1 ilaa 255, saddex lambar sida `255,128,0`, ama `#rrggbb`.
- `A`: xagalka uu midab-kala-baxu socdo. `C`: centered Yes ama No (No wuxuu dhexda midab-kala-baxa u wareejiyaa dhinac).
- Waa diidaa midab ama nooc aan la garanayn, iyo tiribka aan ka dhexeyn 0 ilaa 1.

{{cmd:HATCHEDIT}} `G` iyo Properties (Gradient) waxay wax ka beddelaan midab-kala-bax markii dambe, ama hatch kasta waxay ka dhigaan midab-kala-bax. Midab-kala-baxu waa la sawiraa shaashadda oo waa la daabacaa. DWG 2004 iyo kuwa dambe waxay ku hayaan sida hatch midab-kala-bax run ah; DXF 2000 iyo DWG 2000 waxay u hayaan CadCraft, barnaamijyada kale waxay arkaan buuxin adag midabka kowaad.

### HATCHGENERATEBOUNDARY

Magacyada gaaban: `HGB`. Dib ayuu u sameeyaa xadka polilaynta hatch-ka lumiyay. `Select hatches` (ama dooro marka hore), kadibna `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Qaybta kasta ee hatch-ka waxay noqotaa polilayn xidhan oo lakabka hatch-ka ku jira; polilaynnada cusub waa la doortaa. Geesta qallooca ah waxay ku soo laabanaysaa qaybo toosan oo gaaban oo hatch-ku haysto.
- Yes ayaa hatch-ka ka dhigaa inuu raaco xadkiisa cusub, sida hatch la sameeyay {{cmd:HATCH}} oo kale. Hal tallaabo oo ka noqo.
- Wuu sheegaa marka hatch aan la dooran.

### POINT

Magacyada gaaban: `PO`; ama {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Walaxda barta, mid kasta riix kasta, ilaa Enter.

- `Specify a point`

### XLINE

Magacyada gaaban: `XL`; ama {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Khadad dhismo, labo dhinacba aan dhammaad lahayn. Eeg [Khadadka dhismaha iyo shucaacyada](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, kadibna `Specify through point` khad kasta, ilaa Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` marka hore wuxuu weydiiyaa `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, kadibna `Specify angle end point` khad kasta.
- `O`: `Specify offset distance [Through] <Through>`, kadibna `Select a line object` iyo `Specify side to offset` (ama `Specify through point`) khad kasta.

### RAY

Ma leh magac gaban; ama {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`, kadibna `Specify through point` shucaac kasta, ilaa Enter.

### TEXT

Magacyada gaaban: `DT`, `DTEXT`; ama {{ui:Text}} qalabka. Qoraal hal khad; xariiq kasta waa walax u gaar ah.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, kadibna `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, ku celi: Enter kasta wuxuu bilaabaa xariiq cusub hoosta. Enter khad madhan ayuu joojiyaa. {{key:Space}} halkan wuxuu qoraa meel bannaan.

### DIVIDE

Magacyada gaaban: `DIV`. {{cmd:DIVIDE}} wuxuu dhigaa calaamado xariiq, qaanso, goobo, polilayn, spline ama ellipse ku jaraya qaybo siman. Walaxda dooro, kadibna tirada qaybaha (2 ilaa 32767). Walax furan waxay heshaa hal calaamad ka yar qaybaha; mid xidhan waxay heshaa calaamad bilowgeeda kaga. Walaxda lafteeda ma jaraysa. Calaamadaha waa barab; `Block` wuxuu weydiiyaa bloog naqshaddan halkii, iyo haddii uu leexdo si uu u raaco walaxda. Dherarka khadadka spline iyo ellipse-yada waxaa lagu cabbiraa chords gaaban. Qoraalka, xarriijinta iyo walxaha aan dherar lahayn way diidaa.

### MEASURE

Magacyada gaaban: `ME`. {{cmd:MEASURE}} wuxuu dhigaa calaamad kasta dherar la siiyay khadka, qaansada, goobada, polilaynta, spline-ka ama ellipse-ka, isagoo ka bilaabaya dhammaadka ugu dhow meesha aad doorateen (object xidhan: laga bilaabo bilowgiisa). Dherarka qor adigoo qorayo ama laba barood riixaya. Dhammaadka fog ee walax furan calaamad ma helo. `Block` wuxuu bloog ku dhigaa calaamad kasta halkii barab. Waa diidaa dherar 0 ah, mid walaxda ka dheer, iyo mid ka dhigi lahaa in ka badan 32767 calaamad.

### BOUNDARY

Magacyada gaaban: `BO`, `BPOLY`. {{cmd:BOUNDARY}} wuxuu sameeyaa polilayn xidhan oo ku wareegsan aagga barta aad doorato, oo ka kooban khadadka, qaansooyinka, goobooyinka, polilaynnada iyo curve-yada ee dhinaca shaashadda ku xidhan. Qaybaha ku yaal qaanso ama goobo waxay soo laabanayaan qaybo qaanso; qaybaha ellipse-yada iyo splines-ka waxay soo laabanayaan qaybo toosan oo gaaban. Marka `Islands` shido (dejinta bilowga), aag xidhan kasta oo gudaha ku jira ayaa iyana polilayn u gaar ah helaysa. Barab riix; Enter wuu dhammaadaa. Walxaha xadka sameeya way ka ilaaliyaan sida ay yihiin. Wuu sheegaa marka aag xidhan barta ku jirin.

### BLEND

{{cmd:BLEND}} wuxuu sawiraa spline u dhexeeya dhammaadyada laba curve oo furan. Curve kasta dhinaca dhammaadka u dhow dooro si aad isku xidho. `CONtinuity` wuxuu doortaa `Tangent` (spline-ku wuxuu ka baxaa oo wuxuu ku imaanayaa labada curve-ba ku socda) ama `Smooth` (sidoo kale wuxuu u foororaa sida ay u foororaan dhammaadyada); doorashadaas waa la ilaalinayaa fadhigan. Labada curve-ba ma beddelmaan. Wuu diidaa walaxda xidhan iyo laba dhammaad oo horay isu kulmay.

### REGION

Magacyada gaaban: `REG`. {{cmd:REGION}} wuxuu walaxda xidhan u beddelaa gobollo: aagag siman oo aad isku dari karto, jarto oo aad cabbiri karto. Dooro goobooyin, polilaynno xidhan, ellipse-yo xidhan, ama spline-yo xidhan, ama khadad, qaansooyin iyo polilaynno furan oo loop xidha dhammaad-ilaa-dhammaad; loop kasta wuxuu noqdaa hal gobol oo wuxuu beddelaa walaxdii uu ka soo baxay. Qaansooyinku qaanso ayay sii joogsadaan; ellipse-yada iyo splines-ka waxay noqdaan qaybo toosan oo gaaban. Waxa xidhan ma ahayn oo loop ma xidhin waa sidii uu yahay, waana sheegaa tirada. Naqshadda gudaheeda gobol waa hal ama dhowr polilayn xidhan oo koox aan magac lahayn ah, sidaas darteed riix kasta wuxuu doortaa gobolka oo dhan, nuqulkuna waa gobol gaar ah; barnaamijyada kale ee furaya faylka waxay arkaan polilaynno xidhan.

Marka naqshadda ku jiraan gobollo, {{cmd:UNION}}, {{cmd:SUBTRACT}} iyo {{cmd:INTERSECT}} ee tab-ka 2D ayaa ka shaqeeya gobollada: `UNION` wuxuu isku xidhaa gobollada la doortay hal gobol (gobollada kala jira waxay noqdaan hal gobol oo dhowr dhidibbo ah), `SUBTRACT` wuxuu weydiiyaa gobollada laga jaray kadibna kuwa la jarayo (godku waa qayb ka mid ah gobolka), `INTERSECT` wuxuu hayaa aagga ay dhammaantood wadaagaan. Mid kasta wuxuu sheegaa aagga natiijada wuuna hal tallaabo oo ka noqo. Waa diidaan marka wax aan la hayn ama aan wax la wadaagin. Tab-ka 3D iyo naqshad aan gobol lahayn, isla amarradan waxay ka shaqeeyaan jirmaallada sidii hore.

## Beddel

Magacyada gaaban: `MT`, `T`; ama {{ui:Paragraph}} qalabka. Qoraal fiqrad oo ballac loo wareejiyo, halkaas lagu qoro.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: ballaca laba geesoodka ka dhexeeya waa halka qoraalku ku duubmo. `H` wuxuu weydiiyaa `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` wuuna dhaafaa geeska labaad.
- Ka dib sanduuq ayaa furma naqshadda dusha: qor, {{key:Enter}} fiqrad cusub, {{key:Mod+Enter}} ama riix dibadda si aad u dhamayso, {{key:Esc}} si aad u joojiso. Bar-kiisa wuxuu dejiyaa dherarka, masaafada khadadka, ballaca iyo isku-toosinta. Eeg [Ku dar qoraal iyo calaamado](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Magacyada gaaban: `ED`, `DDEDIT`; ama laba jeer riix qoraal. `Select a text to edit`, ku celi ilaa {{key:Enter}}: mid kasta wuxuu furmaa sanduuq isku mid ah. Haddii la bilaabo qoraal la doortay ama laba jeer la riixay, wuxuu tafatiraa oo kaliya kaas wuuna dhammaadaa.

### ERASE

Magacyada gaaban: `E`, `DELETE`; ama riix {{key:Delete}} walax la doortay.

- `Select objects` (ka tagta marka walax horay loo doortay)

### MOVE

Magacyada gaaban: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, oo lagu qoro sida `dx,dy`.

### COPY

Magacyada gaaban: `CO`, `CP`. Nuqul inta jeer aad siiso barab.

`Array` barta labaad ee weydiinta wuxuu sameeyaa safaf hal mar: siiso tirada walaxda (asalka wuxuu tiriyaa hal), kadibna barta nuqulka koowaad uu ku yaal; kuwa kale ayaa raacaya isla masaafada. `Fit` wuxuu ka dhigaa bartaas meesha nuqulka ugu dambeeya, kuwa kale si siman ayay ugu kala fidaan intooda ka dhexeysa.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, ku celi ilaa Enter. `U` wuxuu qaadaa nuqulka ugu dambeeya.

### ROTATE

Magacyada gaaban: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: darajooyin, saacadda ka soo horjeedda ayaa togan; ama riix barab si aad ugu leexiso.

### SCALE

Magacyada gaaban: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: qor factor sida `0.5` ama `2`. Barab la riixay wuxuu siinayaa masaafadeeda ka saldhigga inay tahay factor-ka.

### MIRROR

Magacyada gaaban: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Magacyada gaaban: `AL`; ama {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Laba lammaane: `Scale objects based on alignment points? [Yes/No] <N>`

Eeg [Isku toosi walaxda](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (ama xulashada), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` wuxuu weydiiyaa barta. Xulashadu way joogsanaysaa.

### DISTRIBUTE

- `Select objects` (ugu yaraan saddex), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Labada dibadda ah way joogsanayaan; xulashadu way joogsanaysaa.

### ALIGNPANEL

Magacyada gaaban: `ALP`; ama {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Wuxuu furaa guddiga ku shaqeeya ALIGNTO iyo DISTRIBUTE riix-kasta.

### LASER

Magacyada gaaban: `LASERCUT`; ama {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Wuxuu furaa guddiga Laser naqshadda dul-mar: waxa lakabkii kasta sameeya (jar, qoro, xardhid, buuxi, sawir), horudhaca, G-code GRBL ee lagu kaydiyo, iyo qaabaynta iyo dirista Web Serial. Eeg [Naqshad u dir laser](topic:laser-cutting).

### STRETCH

Magacyada gaaban: `S`; ama {{ui:Stretch}}. `Select objects to stretch`: jiid daaqado isku-gudub dhammaadyada (ama qor `C`) si aad u guurto. `Specify base point [Displacement]`, `Specify second point`. Barabaha daaqadaha gudaha ku jira way guuraan: dhammaadyada khadka, geesaha polilayn (qaybaha qaansada waxay ilaaliyaan dhererkooda), barabaha cabbirka; goobooyinka, ellipse-yada, qoraalka, barabaha iyo bloogyada oo dhan way guuraan haddii dhexdooda ama barta geliska ay gudaha ku jirto. Xulasho horay loo sameeyay wuxuu ilaaliyaa daaqadaha (iyo lasso-yada) ee sameeyay, si ay isku siyaabo u fidaan. Daaqad la'aan, walaxdu waa oo dhan ayay guuraan.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Magacyada gaaban: `AR`; ama {{ui:Array}}. `Select objects`, kadibna `Enter array type [Rectangular/POlar] <Rectangular>` (ARRAY oo keliya).

- Rectangular wuxuu bilaabaa 4 tiir × 3 safaf, isagoo u dhexeeya 1.5 jeer cabbirka walaxda, wuxuuna muujiyaa horudhac. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` wuxuu weydiiyaa tiirarka iyo safafka, `S` masaafooyinka tiirarka iyo safafka dhexdooda (togan wuxuu u dhaqaaqaa bidix ama hoos), `COL` iyo `R` jihada mid kasta.
- Polar wuxuu weydiiyaa `Specify center point of array`, wuxuu bilaabaa 6 shay oo dhan wareeg, wuuna leexan yahay. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` shayada, `F` xagalka la buuxinayo (+ saacadda ka soo horjeedda, − saacadda la socota), `ROT` Yes ama No.
- {{key:Enter}} (eXit) wuxuu sameeyaa nuqullada, sida walaxda fudud. Hal tallaabo oo ka noqo.
- `AS` (ASsociative) wuxuu u beddelaa nuqul fudud iyo kooxda wax laga beddeli karo: hal shay oo aad markii dambe ku beddeli karto {{cmd:ARRAYEDIT}}, grip-kiisa ama Properties. Doorashada waa la xasuustaa ({{cmd:ARRAYASSOCIATIVITY}}); waxay ku bilaabataa nuqullo fudud.

### ARRAYPATH

Nuqullo dhinac curve ah. `Select objects`, kadibna `Select path curve`: xariiq, qaanso, goobo, ellipse, polilayn ama spline (ma aha mid ka mid ah walxaha la nuqlaynayo). Waddadu waxay ka bilaabataa dhammaadkeeda ugu dhow walaxda, shayga koowaadna waa walaxda meesha ay joogto.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, oo leh horudhac. `M`: `Divide` wuxuu kala faafiyaa shayada waddada oo dhan si siman, `Measure` wuxuu dhigaa mid kasta masaafo ka dib. `I`: tirada shayada (Measure ah, 0 macnaheedu waa inta ku habboonaato; tiro ka badan dhererka waddada waa la xaddidaa). `SP`: masaafada u dhexaysa shayada waddada dhexdeeda (wuxuu u beddelaa Measure). `AL`: Yes wuxuu leexiyaa shay kasta si uu u raaco waddada, No wuxuu ilaaliyaa kuwa toosan.
- `AS` sida {{cmd:ARRAY}}. Marka uu shidan yahay, kooxdu waxay ilaalisaa nuqul u gaar ah oo qaabka waddada ah: wax laga beddelo curve-ka waddada dambe ma dhaqaajinayo shayada.
- Waa diidaa waddo aan curve ahayn, iyo shay keliya.

### ARRAYEDIT

Wax ka beddela kooxda nuqulka loo sameeyay ASsociative. `Select array` (ama dooro marka hore). Wuxuu daabacaa waxa kooxdu hadda tahay, kadibna wuu weydiisaa ilaa {{key:Enter}}:

- Rectangular: `COL` tiirarka iyo masaafadooda, `R` safafka iyo masaafadooda, `A` xagalka tiirarka.
- Polar: `I` shayada, `F` xagalka buuxinta, `ROT` leexi shayada Yes ama No.
- Path: `M` Divide ama Measure, `I` shayada, `SP` masaafada, `AL` isku-toosinta waddada.
- `S` (Source) wuxuu furaa walaxda kooxdu ku celinayso, keligeed, sida tafatiraha bloogga. Halkaas sawir oo tafatir; {{cmd:ARRAYCLOSE}} wuu kaydiyaa ama wuu iska tuurayaa, shay kasta ayaa raacaya.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, kadibna riix shayada la beddelayo, {{key:Enter}}. Shayadaas waxay muujinayaan beddelka; walaxda beddelka naqshadda ka baxaysa waxayna ku noolaanaysaa kooxda. `RES` (RESet) wuxuu dib u muujiyaa walaxda asalka ah shay kasta.
- Isbeddel kasta waa hal tallaabo oo ka noqo. Waa diidaa nuqullada fudud, tixraac bloog oo fudud, iyo kooxda lakab xidhan ku jirta.

Isla tirooyinka waxaa ku jira Properties hoosta Array, kooxduna waxay leedahay grips: barta saldhigga ayaa guurisa, grip-ka shayga labaad wuxuu dejiyaa masaafada, grip-ka ka dambeeya shayga ugu dambeeya wuxuu dejiyaa tirada (polar: shayga labaad wuxuu dejiyaa tirada shayada, shayga ugu dambeeya xagalka buuxinta). {{cmd:EXPLODE}} wuxuu kooxda u beddelaa nuqullo fudud.

### ARRAYCLOSE

Dhammaysiiya {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Wuu sheegaa marka walax asal ah oo kooxda ah aan la furin. {{cmd:BCLOSE}} wuxuu sameeyaa isla shay.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Wuxuu dejiyaa waxa {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR iyo {{cmd:ARRAYPATH}} ku bilaabanayaan; ikhtiyaarkooda `AS` isla dejinta ayuu beddelaa. Browser-kan ayaa lagu xasuustaa.

### OFFSET

Magacyada gaaban: `O`. Xariiqyo, qaansooyin, goobooyin iyo polilaynno.

Halka polilaynku ka bax dibadda oo qaybaha toosan ay ka kala go'aan geesta, {{cmd:OFFSETGAPTYPE}} wuxuu go'aaminayaa sida furaha loo xidho.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, kadibna `Specify point on side to offset` (ama, Through ah, `Specify through point`), ku celi ilaa Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: sida {{cmd:OFFSET}} u xidho furaha geesaha dibadda ee polilayn. `0` wuxuu fidiyaa qaybaha ilaa ay isku kulmaan (dejinta bilowga), `1` wuxuu ku xidhaa qaanso geeska hore ku wareegsan, `2` wuxuu ku xidhaa jar toosan. Geesaha gudaha iyo qaybaha qaansada ma saameeyaan. Fadhigan waa la ilaalinayaa.

### EXTRIM

{{cmd:EXTRIM}} wuxuu gooyaa wax kasta oo dhinac geesta ka mid ah. Dooro geesta gooyga (xariiq, qaanso, goobo, polilayn, ellipse, spline ama khad dhismo), kadibna dooro barab dhinaca la nadiifinayo: khad, qaanso, goobo, polilayn iyo khad dhismo oo geesta gudbaya ayaa lumiya qaybtooda dhinacaas, halkaas oo ay ka bilaabanayso geesta. Intii aad dhinaca doorayso, qaybaha tagi doona ayaa raacaya taabiyaha. Geesta xidhan dhinacyadooda waa gudaha iyo dibadda. Walxaha kaliya geesta taabanaya, iyo qoraalka, xarriijinta, splines-ka iyo ellipse-yada geesta gudbaya, way joogsadaan sida ay yihiin. Hal tallaabo oo ka noqo.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: sida {{cmd:TRIM}} iyo {{cmd:EXTEND}} u bilowdaan. `1` Quick: walax kasta waa geesta gooyga ama xadka. `0` Standard: marka hore geesaha ayay weydiistaan. Sidoo kale `(setvar "TRIMEXTENDMODE" 0)` LISP-ka.

### TRIM

Magacyada gaaban: `TR`. Marka hore wuxuu daabacaa `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. Quick mode-ka, walax kasta oo muuqda waa geesta gooyga, walax aan wax gudbin waa la tirtiraa; Standard mode-ka marka hore wuxuu weydiiyaa `Select cutting edges (Enter = every object)` oo wuxuu gooyaa oo keliya kuwaas.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, ku celi: riix qaybta la rabo in la saaro (waxay muuqataa cadcad oo dhaadhaacan intii taabiyuhu ku nasan yahay), jiid waddo dhowr qaybood ku dhex mara (dhammaan waa hal tallaabo), ama riix laba meel banaan si aad u samayso derbi u dhexeeya. {{key:Shift}} wuxuu fidiyaa halkii. `T` wuxuu doortaa geesaha gooyga (Standard mode), `F` wuxuu weydiiyaa barta derbiga, `C` laba geesood oo daaqad (qaybaha qayb ku jira way gooyan), `O` wuxuu weydiiyaa `Enter a trim mode option [Quick/Standard]`, `E` wuxuu weydiiyaa `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` wuxuu tirtiraa walxaha aad doorato, `U` wuxuu ka noqdaa doorashada ama jiidista ugu dambeysay. Enter wuu dhammaadaa. Eeg [Jar iyo fidin](topic:trim-and-extend).

- Riix xarriijin ayaa xarriijinta gooya: geesaha gooyga ayaa aagga xarriijinta ah kala qaybiya, qaybtii aad riixday waa la qaadaa (ma jiro xariiq la rasamay oo ku hadhaysa meeshii). Xarriijinta waxay hayaan qaabkeeda ama midab-kala-baxeeda; xarriijin lagu xidhay xadkeeda waxay ka noqotaa mid aan xidhnayn, sababtoo ah ma buuxinayso mar kale. Waxay sheegaa marka geesta gooyga ma kala qaybin xarriijinta meeshaas, marka riixdu xarriijin ka baxdo, iyo marka wax aan hadhin (isticmaal {{cmd:ERASE}}). Waddo la jiiday ama derbi ma gooyo xarriijinta.

### EXTEND

Magacyada gaaban: `EX`. Sida TRIM oo lagu rogay: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Riix kasta wuxuu dheereeyaa dhammaadka u dhow xadka ku xiga; waddo la jiiday ama derbi wuxuu dheereeyaa walax kasta oo gudbaya; {{key:Shift}} wuxuu gooyaa. `B` wuxuu doortaa geesaha xadka (Standard mode). Mode iyo Edge waa la wadaagaa TRIM.

### LINKVIEWS

Magacyada gaaban: `SYNCVIEWS`; ama {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, ama calaamadda xidhidhka tabka naqshadda. `Link the panes' views [ON/OFF]` (Enter wuxuu qaadaa xaaladda kale): intii uu shidan yahay, pan ama zoom qaybta firfircoon wuxuu dhaqdhaqaaqaa qayb kasta oo muujinaysa isla nooca meesha. Eeg [Shaashadda kala qaybi](topic:split-screen).

### OPENIN3D

Ma leh magac gaban; ama {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} halkaas oo barnaamijka naqshadaynta 3D uu qaado naqshad la gudbiyay. Halkaas taab cusub buu ku furaa sida DWG (wax lama soo rarin). Haddii browser-ku xidho taabka, wuu sheegaa.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: wuxuu go'aaminayaa waxa riix oo jiidista meel banaan ku sawirto. Waa isku mid Settings › CadCraft › Dragging to select. Eeg [Xulashada lasso](topic:lasso-selection).

### FILLET

Magacyada gaaban: `F`. Xariiqyo, qaansooyin, goobooyin iyo polilaynno. Marka hore wuxuu daabacaa `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` wuxuu weydiiyaa `Specify fillet radius <last>`. `T` wuxuu weydiiyaa `Enter Trim mode option [Trim/No trim]`: No trim ah, walaxdu way ilaalinayaan sida ay yihiin oo qaanso keliya ayaa lagu daraa.
  - `M` amarka wuu sii socdaa geesaha dheeraad ah ilaa {{key:Enter}}; `U` wuxuu qaadaa geeska ugu dambeeyay adigoo ka soo baxayo amarka.
  - `P` wuxuu weydiiyaa `Select 2D polyline [Radius]` wuxuuna wareegayaa geesaha kasta oo laba qayb toosan kulma. Fillets-ka hore u jiray waa la beddelaa nuuf-dhexroorka cusub; nuuf-dhexroor 0 ahi ayaa ka saaraa. Geesaha dhererka qaybahooda ku filan maaha waa la tegaa oo la tiriyaa.
- `Select second object or shift-select to apply corner [Radius]`. Hay {{key:Shift}} markaad riixayso geesta sax ah, nuuf-dhexroor kasta.

Riix walax kasta qaybta aad rabto inaad ilaaliso. Laba khad oo aan kulmin ayaa la fidiyaa. Laba khad isku-tooska ah waxay helaan nus goobo ah dhexda furaha, dhammaadka khadka kowaad ee u dhow riixdaada. Goobada looma gooyo. Laba qayb oo hal polilayn ah oo isku xiga waxay helaan qaanso ku jirta polilaynta; polilayn iyo walax kale waa shaqeeyaan marka jarku ku dhaco qaybta kowaad ama ugu dambeysay ee polilaynta.

### CHAMFER

Magacyada gaaban: `CHA`. Khadad iyo qaybaha toosan ee polilaynnada. Marka hore wuxuu daabacaa masaafooyinka hadda (ama dherar iyo xagal).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` wuxuu weydiiyaa `Specify first chamfer distance <last>` iyo `Specify second chamfer distance <the first>`: kan kowaad waxa laga jaraa khadka kowaad ee aad doorato, kan labaad kan kale.
  - `A` wuxuu weydiiyaa `Specify chamfer length on the first line` iyo `Specify chamfer angle from the first line`.
  - `E` (mEthod) wuxuu doortaa midka labadood ee jeexa xiga isticmaalayso. `T`, `M`, `U` iyo `P` waxay u shaqeeyaan sida {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+riix wuxuu sameeyaa geesta sax ah.

Masaafo ka dheer khadka waa la diidaa (`Distance is too large.`).

### BREAK and BREAKATPOINT

Magacyada gaaban: `BR`. `Select object` (meesha aad riixdo waa barta kowaad), `Specify second break point [First point]`; `F` wuxuu weydiiyaa `Specify first break point` iyo `Specify second break point`. Qaybta u dhexaysa way baxdaa; goobo ahaan, saacadda ka soo horjeedda laga bilaabo barta kowaad. BREAKATPOINT wuxuu weydiiyaa `Specify break point` wuuna walaxda laba qeyb ka dhigaa barta (ma aha goobo).

### LENGTHEN

Magacyada gaaban: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: riix kasta wuxuu daabacaa `Current length` (iyo xagalka ay qaanso ku leedahay) kadibna wuu mar kale weydiiyaa. `DE` wuxuu weydiiyaa `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` wuu jiidaa. Kadibna `Select an object to change [Undo]`, ku celi: dhammaadka u dhow riixdaada ayaa guuraa. Khadad, qaansooyin iyo polilaynno furan.

### JOIN

Magacyada gaaban: `J`. `Select objects to join`. Khadad, qaansooyin iyo polilaynno furan oo kulma dhammaad-ilaa-dhammaad waxay noqdaan polilaynno (xidhan haddii silsiladu xidho); khadad isku-tooska ah waxay noqdaan hal khad; qaansooyin goobo isku mid ah waxay noqdaan hal qaanso ama goobo. Taariikhdu wuxuu sheegaa inta walax ay isku xidhan yihiin iyo inta aan xidhmin.

### MATCHPROP

Magacyada gaaban: `MA`, `PAINTER`. `Select source object`, kadibna `Select destination objects [Settings]` iyo {{key:Enter}}. Wuxuu koobiyeeyaa lakabka iyo midabka, iyo walaxaha isku nooc ah dhererka qoraalka iyo ballaca, cabbirrada cabbirka, ama qaabka hatch-ka. `S` wuxuu weydiiyaa `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, ku celi ilaa {{key:Enter}}; doorashada waa la xasuustaa fadhigan.

### EXPLODE

Magacyada gaaban: `X`. Polilaynnada waxay noqdaan xariiqyo iyo qaansooyin, tixraacyada bloogga waxay noqdaan walaxdoodii, cabbirrada waxay noqdaan khadad, madaxyo iyo qoraal. Kooxda wax laga beddeli karo ({{cmd:ARRAYEDIT}}) waxay noqotaa nuqullo fudud oo walaxdeeda ah.

- `Select objects`

### GROUP

Magacyada gaaban: `G`. {{cmd:GROUP}} wuxuu walaxda la doortay u bixiyaa magac ay wadaagaan. Walaxda dooro, kadibna qor magac (aan meel bannaan lahayn; `?` wuxuu liistaa kooxaha; Enter wuxuu sameeyaa koox aan magac lahayn) iyo, kooxda magacaysan, sharaxaad ikhtiyaari ah. Laga bilaabo markaas, riix mid ka mid ah, ama daaqad qaadanaysa mid, dhammaantood ayay doortaa, sidaas darteed way guuraan, nuqulaan oo tirtiraan wada; walax kasta weli waa walax u gaar ah. Walax waxay ku jiri kartaa koox dhowr ah. Nuqulka koox oo dhan waa koox aan magac lahayn cusub; nuqulka hal xubin oo keligeed wuxuu ku biiraa kooxda. Kooxdu waxay leedahay meesha ay ku samaysmeen (moodeelka ama xaashiga). Waa la ilaalinayaa markaad DWG ama DXF ku kaydiso oo mar kale CadCraft ku furto; faylalka DXF 2000 waxay sidoo kale yeelan walxo kooxeed barnaamijyada kale, kooxaha barnaamij kale lagu sameeyay waa la akhriyaa marka DXF ama DWG la furo.

### UNGROUP

{{cmd:UNGROUP}} wuxuu kooxaha ka kala furaa: dooro walaxda kooxaha (kooxda kasta ee ku jirta waa laga kala furayaa) ama qor `Name` iyo magaca kooxda. Walaxdu waxay ku sii jiraan naqshadda. Hal tallaabo oo ka noqo wuxuu soo celinayaa kooxaha.

### GROUPEDIT

{{cmd:GROUPEDIT}} wuxuu beddelaa hal koox. Riix mid ka mid ah walxaheeda, ama `Name` iyo magacooda; koox horay loo doortay waxaa la qaadaa sidii ay tahay. Kadibna: `Add` walxo (mid mid la doorto, koox koox ma aha), `Remove` walxo, `REName` kooxda, beddel `Description`, ama deji `Selectable` (riix mid ka mid ah walaxda intuu kooxda oo dhan doorto mise maya). `eXit` ama Enter wuu dhammaadaa. Koox aan walxo kale lahayn waa baabbi'maysaa.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1` (dejinta bilowga) riix ama daaqad walax koox ku jirta wuxuu doortaa koox oo dhan; `0` walax keliya, si aad mid xubinteeda u tafatirto. Fadhigan waa la ilaalinayaa.

## Clipboard

Clipboard-ka CadCraft-ka: wuxuu ka shaqeeyaa naqshad gudaheeda, naqshadaha dhexdooda iyo tabbada CadCraft ee browser-kan. Eeg [Koobiyee, dheji iyo nuqul](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ama {{ui:Copy}} koox {{ui:Edit}} gudaheeda. Walaxda ku koobiyee clipboard-ka, oo bloogyada iyo lakabyada ay isticmaalaan. Walaxdu way ku sii jiraan la doortay.

- `Select objects to copy` (ka tagta marka walax horay loo doortay)

### CUTCLIP

{{key:Mod+X}}, ama {{ui:Cut}} menu-ga {{ui:More}}. Walaxda ku koobiyee clipboard-ka, kadibna tirtir (hal tallaabo oo ka noqo).

- `Select objects to cut` (ka tagta marka walax horay loo doortay)

### COPYBASE

Walaxda ku koobiyee clipboard-ka barta saldhig aad doorato; dhejinta bartaas ayaa meeshay dhigta.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, ama {{ui:Paste}} koox {{ui:Edit}} gudaheeda. Nuqulku wuxuu raacaa kursoorka, isagoo ka xiran geeska hoose-bidix ee xadkiisa (ama dhexdiisa, ama barta COPYBASE; eeg [Dejinta CadCraft](topic:settings)).

- `Specify insertion point`

Walaxda la dhejiyay way la doortaa. Bloog naqshaddu horay u leedahay magac isku mid ah wuxuu hayaa qeexitaanka naqshaddan.

Marka aagga laga koobiyeeyay MarkupCraft uu ka cusub yahay waxa CadCraft koobiyeeyay (oo ka yar 6 saac), {{key:Mod+V}} iyo `PASTECLIP` waxay ku dhejinayaan aagga oo kale: eeg `PASTEAREA`.

### PASTEAREA

Magacyada gaaban: `PAREA`. {{ui:Paste a copied area}} menu-ga {{ui:More}}. Wuxuu ku dhejiyaa aag laga koobiyeeyay MarkupCraft {{ui:Copy area}} sida sawir cabbirkiisa run ah. Eeg [Sawirrada naqshadda gudaheeda](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (kaliya marka xaashigu aanu lahayn miisaan naqshad): lambar, {{key:Enter}} cabbirka warqadda, ama `P`, kadibna `First point on the pasted area`, `Second point on the pasted area` iyo masaafadooda run ah.

### PASTEORIG

{{key:Mod+Shift+V}}, ama {{ui:Paste in place}} menu-ga {{ui:More}}. Wuxuu ku dhejiyaa isku-xidhka laga koobiyeeyay walaxda. Ma weydiiso waxba.

### DUPLICATE

Magacyada gaaban: `DUP`. {{key:Mod+D}}, ama {{ui:Duplicate and move}} menu-ga {{ui:More}}. Nuqul walaxda ayaa taabiyaha la socda meesha ay ka bilaabanayso; {{key:Esc}} waxba ma dhigo. Clipboard-ka ma isticmaalo.

- `Select objects to duplicate` (ka tagta marka walax horay loo doortay)
- `Specify where the copy goes (Esc leaves nothing)`: riix, qor barab, `@dx,dy` (meesha taabiyuhu joogay ka bilaabmaysa), ama masaafo ku socota kursoorka.

### SELECT

Weydiinaya `Select objects` (iyo ikhtiyaarrada hoose oo dhan) oo wuxuu ka tagaa waxa aad doorteen la doortay, amarka xiga ama `P` markii dambe.

### QSELECT

Magacyada gaaban: `QS`. Browser-ka, {{ui:Quick select}} wada-hadalka (eeg [Dooro walaxda](topic:select-objects#select-by-a-rule-quick-select)). Iyada oo aan la isticmaalin, khadka amarku wuxuu weydiiyaa `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` iyo `Enter value`. Kuwa lagu waafaqay waxay noqdaan xulashada.

### SELECTSIMILAR

Magacyada gaaban: `SIM`. `Select objects [SEttings]` (ama xulashada hadda jirta): wuxuu doortaa walax kasta oo nooc isku mid ah, lakab iyo midab isku mid ah (iyo magaca bloogga, qaabka hatch-ka). `SE` wuxuu weydiiyaa `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, ku celi ilaa {{key:Enter}}.

### FIND

Ma leh magac gaban; ama {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. Browser-ka, wada-hadalka {{ui:Find and replace}} (eeg [Ku dar qoraal iyo calaamado](topic:text#find-and-replace-words)). Iyada oo aan la isticmaalin: `Enter text to find`, kadibna `Enter replacement text (Enter: select what is found)`. Wuxuu raadiyaa qoraalka, qiimayaasha sifooyinka iyo qoraalka cabbirka, taabka furan ama xulashada.

### SELECTALL and DESELECT

`SELECTALL` (magacyada gaaban `AI_SELALL`, {{key:Mod+A}}) wuxuu doortaa walax kasta oo tafatiri karto taabka furan. `DESELECT` (magacyada gaaban `AI_DESELECT`, `SELECTNONE`; ama {{key:Esc}}) wuxuu nadiifiyaa xulashada.

## Cabbirro

### DIMLINEAR

Magacyada gaaban: `DLI`, `DIMLIN`. Masaafada toosan ama toosan-u-taagan.

- `Specify first extension line origin [Select object]` (Enter ama `S`: `Select object to dimension`, kadibna riix khad, qaanso, goobo ama qayb polilayn)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` wuxuu weydiiyaa qoraal (`<>` waa qiimaha la cabbiray), `H` iyo `V` jihada way go'aaminayaan, `R` wuxuu weydiiyaa `Specify angle of dimension line <0>`.

### DIMALIGNED

Magacyada gaaban: `DAL`, `DIMALI`. Masaafada dhabta ah ee u dhexeysa laba barood.

- Bilowga sida {{cmd:DIMLINEAR}}, kadibna `Specify dimension line location [Text]`.

### DIMANGULAR

Magacyada gaaban: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Qaanso: xagalkeeda. Goobo: `Specify second angle endpoint`. Khad: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: riix gudaha xagalka aad cabbirayso.

### DIMRADIUS and DIMDIAMETER

Magacyada gaaban: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, kadibna `Specify dimension line location [Text]`.

### DIMCONTINUE

Magacyada gaaban: `DCO`, `DIMCONT`. Wuxuu ka sii socdaa cabbirka khadka ama isku toosan ee ugu dambeeyay la sameeyay (ama wuxuu weydiiyaa `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, ku celi ilaa Enter.

### DIMBASELINE

Magacyada gaaban: `DBA`, `DIMBASE`. Sida {{cmd:DIMCONTINUE}}, laakiin cabbir kasta wuxuu ka bilaabmaa bilowga kowaad wuuna sare u kala kacaa.

### DIMORDINATE

Magacyada gaaban: `DOR`, `DIMORD`. `Specify feature location`, kadibna `Specify leader endpoint [Xdatum/Ydatum/Text]`. Wuxuu qoraa sida barta uga fog tahay bilowga UCS ee X ama Y, khadka hoggaanka ku jira: hoggaan ku socda sare ama hoos wuxuu akhriyaa X, kan dhinac u socda wuxuu akhriyaa Y; `Xdatum` iyo `Ydatum` ayaa go'aaminaya. Bilowga marka hore deji {{cmd:UCS}} (aanu lahayn, waa 0,0 naqshadda). Grips-ka ayaa guurinaya barta, bilowga iyo dhammaadka hoggaanka, qiimuhuna wuu raacaa. DWG iyo DXF waxay kaydiyaan sida cabbir isku-xidh dhab ah. Diidaa dhammaadka hoggaanka oo barta laftiisa ku jira.

### DIMARC

Magacyada gaaban: `DAR`. `Select arc or polyline arc segment`, kadibna `Specify arc length dimension location [Text]`. Wuxuu cabbiraa dhererka qaansada (ma aha xadka toosan) wuuna qorayaa calaamadda qaansada qiimaha ka hor. Waa diidaa goobo buuxda, khad, ama qayb polilayn toosan. DWG wuxuu ku hayaa sida cabbirka dhererka qaansada; DXF wuxuu ku hayaa sida cabbir xagal qoraalkiisu yahay dherarka, CadCraft wuxuu mar kale ku furaa sida cabbirka dhererka qaansada.

### DIMJOGGED

Magacyada gaaban: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Cabbir nuuf-dhexroor curve-ka dhexdiisa ay fog tahay ama ka baxday xaashiga: khadka cabbirka wuxuu ka bilaabmaa barta aad siiso halkii dhexda, jog ku jira, wuuna weli qorayaa nuuf-dhexroorka run ah. DWG wuxuu ku hayaa sida cabbir nuuf-dhexroor jogged ah; DXF wuxuu ku hayaa sida cabbir nuuf-dhexroor, CadCraft wuxuu mar kale ku furaa jogged.

### DIMJOGLINE

Magacyada gaaban: `DJL`. `Select dimension to add jog [Remove]`, kadibna `Specify jog location (or press Enter)`. Calaamadda jog-ga ayuu ku dhigaa khadka cabbir toosan ama isku toosan, si loo muujiyo masaafada aan miisaan lagu sawirin; qiimuhu ma beddelo. `Remove` ayaa ka saara. Noocyada kale ee cabbirka waa diidaa.

### QDIM

Ma leh magac gaban. `Select geometry to dimension`, kadibna `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Walxo badan hal tallaabo ayuu cabbiraa, dhammaadyada khadadka iyo qaybaha polilayn, dhexda goobooyinka iyo qaansooyinka, barabaha iyo tixraacyada bloogga. Meel kor ama hoos walxaha ah wuxuu cabbiraa dhinac-dhinac, meel dhinacooda ahna wuxuu cabbiraa sare. `Continuous` wuxuu silsiladeeyaa barabaha, `Baseline` wuxuu dhammaantood ka cabbiraa kii kowaad, `Staggered` wuxuu iska dhigaa lammaanaha dhexdooda ka bilaabmaya, `Ordinate` wuxuu siiyaa barta kasta masaafadeeda ka datum-ka (`datumPoint` wuxuu doortaa mid cusub), `Radius` iyo `Diameter` wuxuu cabbiraa goobo kasta iyo qaanso la doortay. Qaabka waa la xasuustaa. Waxa uu sameeyo oo dhan waa hal tallaabo oo ka noqo. Wuu sheegaa marka barab ka yar laba, ama goobo iyo qaanso aan lahayn Radius iyo Diameter.

### DIMBREAK

Magacyada gaaban: `DBREAK`. `Select dimensions to add or remove breaks`, kadibna `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` wuxuu ka dhigaa furaha khadadka cabbirka iyo kordhinta meel kasta oo walax kale ka gudbeyso, wuuna dib u xisaabiyaa markii walxahaas ama cabbirku dhaqaaqo. `Manual` (hal cabbir) wuxuu weydiiyaa laba barood oo wuxuu dhigaa furaha u dhexeeya. `Remove` wuxuu ka saaraa furaha oo dhan. Furaha waa 1.5 jeer dherer qoraalka cabbirka.

### DIMSPACE

Ma leh magac gaban. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Wuxuu dhaqaajiyaa khadadka cabbirka ee cabbirrada toosan ee isku-tooska ah (ama xagal ah oo isku dhibic ah) si ay isku masaafo ugu jiraan, oo laga tiriyo cabbirka saldhigga, mid kasta dhinaca uu ku yaal. `0` wuxuu u toosiyaa saldhigga; `Auto` waa laba jeer dherer qoraalka cabbirka saldhigga. Cabbirrada aan isku-tooska ahayn saldhigga waa la tegaa.

### DIMINSPECT

Ma leh magac gaban. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Wuxuu sawiraa fraam ku wareegsan qiimaha oo calaamad hortiisa ku leh iyo heerka hubinta ka dambeeya. `remove` wuxuu ka saaraa fraamka. Qoraalka tolerance-ka qiimaha ayuu la socdaa.

### DIMOVERRIDE

Magacyada gaaban: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, ilaa Enter mar kale, kadibna `Select dimensions`. Dejimahaas oo keliya cabbirrada la doortay ayuu beddelaa; qaabka cabbirka lama beddelo. Wuxuu qaataa doorsoomayaasha lambar ama beddelka ah (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` wuxuu soo celiyaa cabbirrada la doortay qaabkooda. Magac aan doorsoomaha cabbirka ahayn iyo qiime aan ku habboonayn waa diidaa.

### DIMREASSOCIATE

Magacyada gaaban: `DRE`, `DIMREASSOC`. `Select dimensions`, kadibna kala kala barabaha khadka cabbirka kasta (`Specify first extension line origin on an object`: ku dhaw dhammaad ama dhexda khad, geesta polilayn, dhexda; Enter wuxuu ka dhigaa barta xor), ama goobo iyo qaanso cabbir ah `Select arc or circle`. Cabbirka ayaa markaas la xidhaa walaxdaas: markay dhaqaaqaan ama beddelaan cabbir, wuu raacaa oo dib u cabbiraa hal tallaabo oo ka noqo. Barta la xidhay si gacanta ah u dhaqdhaqaaqa ama walaxda la tirtiro ayaa xidhiidhka joojiya. Xidhiidhka waxaa lagu kaydiyaa DWG iyo DXF 2000 sida xogta CadCraft-ka; barnaamijyada kale waxay arkaan cabbir caadi ah.

### DIMDISASSOCIATE

Magacyada gaaban: `DDA`, `DIMDISASSOC`. `Select dimensions`. Waxay ka xoraysaa walxaha ay ku xiran yihiin; waxba ma dhaqaajiyo.

### CENTERMARK

Magacyada gaaban: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, ku celi ilaa Enter. Wuxuu sawiraa calaamad xaashi dhexda ah iyo afar khad dhexe oo ilaa wax yar ka dambeeya curve-ka (nooca khadka CENTER), sida khadad caadi ah lakabka hadda; cabbirka waxaa lagu qaadaa cabbirka fallaadha iyo miisaanka guud ee dejinta cabbirka hadda, waxaana loo leexiyaa UCS. Ma raacaan goobada haddii ay dhaqaaqdo.

### CENTERLINE

Magacyada gaaban: `CL`. `Select first line`, `Select second line`. Wuxuu sawiraa khad dhexda u dhexaysa laba khad (dhidibka bisector-ka haddii ay kulmaan), wax yar ka dheer intii ay yihiin, nooca khadka CENTER. Khad caadi ah: ma raacayo labada khad.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ma leh magac gaban. Mid kasta wuxuu weydiiyaa `Enter new value for … <current>` wuxuuna dejiyaa cabbirkaas cabbirrada **cusub**: miisaanka guud, dherer qoraalka, cabbirka fallaadha, booska tobanleyda (ilaa 8), furaha ku wareegsan qoraalka, kordhinta ka baxsan khadka cabbirka, ka sii fogaanshaha bilowga. Eeg [Deji cabbirrada cabbirka](topic:dimension-settings).

### DIMLUNIT

Dejinta cabbirka: qaabka dherarka cabbirrada cusub oo keliya (1 sayniska, 2 tobanle, 3 injineerka, 4 naqshadda dhismaha, 5 jajab).

### DIMSTYLE and -DIMSTYLE

Magacyada gaaban: `DST`, `DDIM`, `D`. Maareeyaha qaabka cabbirka: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` khadka amarka: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Eeg [Deji cabbirrada cabbirka](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, kadibna cabbirrada (ama kuwa horay loo doortay). New wuxuu weydiiyaa qoraalka (`<>` = cabbirka); Rotate xagal (0 wuxuu soo celinayaa qoraalka); Oblique xagalka khadadka kordhinta ee X (Enter = ma jiro; khadka iyo isku toosan oo keliya). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Eeg [Deji cabbirrada cabbirka](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Magacyada gaaban: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, ama markii cabbirro la doortay `Units in the text of the selected dimensions`. Wuxuu qoraa dherarka la cabbiray unuggaas, unugga ku dhex jira (DIMLFAC iyo DIMPOST suffix); `D` wuxuu ku laabtaa unugyada naqshadda. Eeg [Cabbirrada mm, cm, m ama km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Magacyada gaaban: `RC`. Wuxuu daabacaa `Arc length: … Type: …`, kadibna `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular wuxuu weydiiyaa `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand wuxuu raacaa taabiyaha ilaa riix ama {{key:Enter}}; `O` wuxuu weydiiyaa `Select object` iyo `Reverse direction? [Yes/No] <N>` wuxuuna walaxda u beddelaa daruur. `A` wuxuu weydiiyaa `Specify the length of each arc`. `R`, `P` iyo `F` waxay doortaan nooca daruurta xigta. Natiijadu waa polilayn xidhan oo qaanso ah.

### MLEADER

Magacyada gaaban: `MLD`; ama {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, kadibna qoraalka sanduuqa meeshiisa (ama, haddii uusan jirin, `Enter text (an empty line ends)`). `Block` wuxuu marka hore weydiiyaa magaca bloogga, multileader-kuna wuxuu muujiyaa bloogga halkii qoraalka. Khad hoggaan dheeraad ah: {{cmd:MLEADEREDIT}}. DWG wuxuu kaydiyaa sida multileader run ah; DXF wuxuu hayaa khadadka, madaxa fallaadha iyo qoraalka uu sawiro.

### MLEADEREDIT

Magacyada gaaban: `MLE`. `Select a multileader`, kadibna `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: barab kasta wuxuu ku daraa khad hoggaan madaxa fallaad cusub ilaa isla landing-ka, ilaa Enter. `Remove leaders` wuxuu ka saaraa khadka hoggaanka aad riixdo (multileader-ku waa inuu ugu yaraan hal khad haystaa). `Block content` wuxuu weydiiyaa magaca bloogga oo muujiyaa bloogga halkii qoraalka (sifooyinkiisa ayaa la weydiinayaa); `Text content` wuxuu soo celinayaa qoraalka. Khad hoggaan kasta wuxuu leeyahay grip u gaar ah. DWG wuxuu hayaa khad hoggaan kasta iyo bloogga hal multileader gudaheeda.

### MLEADERALIGN

Magacyada gaaban: `MLA`. `Select multileaders`, kadibna `Select multileader to align to [Distribute/Spacing/Use current spacing]` iyo `Specify direction`. Wuxuu guurinayaa landing-yada multileader-yada kale (iyo qoraalkooda ama bloogooda) ilaa khadka ka soo marta landing-ka mid aad doorateen jihadaas; madaxa fallaadhu meeshii ay u tilmaamayso ayuu joogsanayaa. `Spacing` wuxuu dejiyaa masaafo isku mid ah, `Distribute` wuxuu weydiiyaa laba barood oo wuu u kala qaybiyaa dhexdooda si siman. Waxay u baahan tahay ugu yaraan laba multileader.

### MLEADERCOLLECT

Magacyada gaaban: `MLC`. `Select multileaders`, kadibna `Specify collected multileader location [Vertical/Horizontal]` (Enter wuxuu ilaalinayaa meeshii kowaadka). Wuxuu sameeyaa hal multileader laga soo ururiyay dhowr: bloogyadooda waxay galaan bloog cusub oo hal ah oo dhinac-dhinac ama hoos-hoos ah; qoraalka wuxuu noqdaa hal fiiro oo khad kasta leh. Multileader-ka kowaad wuxuu ilaalinayaa khadadka hoggaanka; kuwa kale waa la tirtiraa. Qoraal iyo bloog isku dhex jira waa la diidaa.

### TABLE

Magacyada gaaban: `TB`; ama {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Samee jadwal: hal walax oo aad guurin karto, nuqli karto, wareejin karto, cabbiri karto, iyo daabaci karto sida walax kasta, unugyadeeduna waxay ku kaydsan yihiin xog.

- `Number of data rows or [Paste/File/Style] <3>`, kadibna `Number of columns <3>`, `Text height` iyo `Top left corner of the table`. Jadwalku wuxuu helaa safka cinwaanka (hal unug oo la isku daray) iyo safka madax-ka ah ee ka sarreeya safafka xogta.
- `P`: jadwal unugyada spreadsheet-ka clipboard-ka (qoraal tab ku kala go'an unug kasta). {{key:Ctrl+V}} oo leh unugyadaas clipboard-ka ayaa sidaas samaysa, mooyaane haddii nuqulka CadCraft-ka uu ka cusub yahay (ama CadCraft ma garan karo: markaas wuxuu dhejiyaa nuqulkiisa wuuna sheegaa). `F`: jadwal fayl `.csv` ah ama fayl tab-ku kala go'an. Safka kowaad wuxuu noqdaa safka madax-ka; ballacyada tiirarka ayaa ku habboonaada qoraalka.
- `S`: dooro qaabka jadwalka jadwalkan (eeg {{cmd:TABLESTYLE}}).
- Waa diidaa tiro safaf ama tiir oo aan tiro dhan ahayn, iyo unugyo ka badan intii jadwal qaadan karo (2,000 safaf, 200 tiir, 40,000 unug).
- {{cmd:EXPLODE}} wuxuu jadwalka u beddelaa khadad iyo qoraal. Marka DWG lagu kaydiyo jadwalku waa walax jadwal run ah oo barnaamijyada kale wax ka beddeli karaan; DXF lagu kaydiyo waa bloog oo sawira, CadCraft wuxuu mar kale ku furaa sida jadwal.

### TABLEDIT

Magacyada gaaban: `TABLEEDIT`, `TABEDIT`; ama laba jeer riix unug. Tafatir jadwal.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Riix unug, ama intii jadwal la doortay magaciisa qor (`B3`: tiirka B, safka 3; safka cinwaanka waa safka 1). Browser-ka sanduuq ayaa ku furmaa unugga: {{key:Enter}} wuxuu hayaa qoraalka, {{key:Tab}} wuxuu aadaa unugga xiga, {{key:Alt+Enter}} wuxuu bilaabaa khad cusub, {{key:Esc}} wuxuu unugga uga tagaa sida ay ahayd.
- Qoraal ku bilaabma `=` waa formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, oo leh `+ - * / ^`, qawsyo iyo function-yo sida `sqrt` iyo `round`. Unuggu wuxuu muujinayaa qiimaha; formula oo magaca unugga isaga magacaysa, unug ka baxsan jadwalka ama unug aan tiro ku jirin, wuxuu muujinayaa `####` oo khadka amarku wuxuu sheegaa sababta.
- `R` / `C`: `Insert` ama `Delete` safaf ama tiir unug la doortay (inta, iyo kor ama hoos, bidix ama midig). Formulas-ku waxay raacaan unugyada ay magacaystaan.
- `S`: ballaca tiirka iyo dherarka safka. Safku ma hoos u dhigi karo dherarka qoraalkiisa. Jadwal la doortay wuxuu sidoo kale leeyahay grip ku yaal geesaha tiir kasta iyo safka kasta.
- `M`: isku dar laga bilaabo unug la doortay ilaa kan kale; `U`: ka saar isku-darka. `A`: isku-toosinta (`TL` bidix sare … `MC` dhexe dhexe … `BR` hoose midig). `H`: dherarka qoraalka unugga (0 = qaabka). `K`: ka dhig safka cinwaan, madax ama xog. `CL`: unugga faari.
- Waa diidaa jadwal lakabka xidhan ku jira, safaf ama tiir oo dhan tirtira, iyo isku-dar unugyo kale laba u gooya.

### TABLESTYLE

Magacyada gaaban: `TS`. Wuxuu liistaa qaababka jadwalka iyo tirada jadwal kasta isticmaalayso, kadibna `Table style: [New/Set/Edit/Delete/Apply]`.

- Qaabku wuxuu hayaa dherarka qoraalka iyo isku-toosinta safka cinwaanka, madax-ka iyo xogta, margin-ka unugga iyo xuduudaha la muujinayo (dibada, u dhexeeya safafka, u dhexeeya tiirarka).
- `N` wuxuu sameeyaa qaab ka soo jeeda kan hadda jira oo ka dhigaa hadda; `S` wuxuu dejiyaa qaabka hadda (jadwallada cusub way qaataan); `E` wuu tafatiraa mid: jadwallada isticmaalaya way dib u sawirmaan; `A` wuxuu jadwallada la doortay siiyaa qaabka hadda; `D` wuu tirtiraa mid (ma aha Standard, ma aha kan hadda; jadwallada isticmaalay way hayaan muuqaalkooda).
- Qaababka waa la kaydiyaa naqshadda (DWG iyo DXF).

### TABLEEXPORT

Wuxuu kaydiyaa waxa jadwalku muujiyo fayl CSV ah (formula sida qiimaheeda). `Select a table`, ama dooro mid marka hore. Qoraalka unugyada ku bilaabma `=`, `+`, `-` ama `@` waxay helaan `'` hor-marka ah si spreadsheet-ku uusan u fulin.

### TABLEPASTE

Magacyada gaaban: `PASTETABLE`. Wuxuu sameeyaa jadwal unugyada spreadsheet-ka clipboard-ka, kadibna wuxuu weydiiyaa geeska sare ee bidix. Waa sidii {{cmd:TABLE}} › `Paste`.

### DATALINK

Magacyada gaaban: `DL`. `Data link: [New/List/Remove] <New>`. `N` wuxuu weydiiyaa fayl CSV, wuxuu dhigaa jadwal ka dhashay, wuxuuna xasuustaa magaca faylka; `L` wuxuu liistaa xiriirrada faylkooda, cabbirka, markii la akhriyay iyo tirada jadwallada isticmaalaya; `R` wuxuu ka saaraa xiriir (jadwallada way hadhaan sida jadwal caadi ah).

### DATALINKUPDATE

Magacyada gaaban: `DLU`. Mar kale wuxuu akhriyaa faylka xiriirka xogta wuxuuna dib u buuxiyaa jadwallada xiran (safaf iyo tiirar ayaa lagu daraa ama laga saaraa si ay u waafaqaan). Browser-ku ma furi karo fayl isaga keligiis, sidaas darteed wuxuu weydiinayaa inaad mar kale doorato faylka. Xiriiro badan marka uu weydiiyo kan aad doorato.

### FIELD

Wuxuu geliyaa goob naqshadda gudaheeda: qoraal iyo qiime u shaqeeya laftiisa. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: hadda, ama taariikhda la kaydiyay, la sameeyay ama la daabacay, iyo qaab (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: magaca faylka, oo leh ama aan lahayn kordhintiisa. `S`: lambarka xaashiga, cinwaankiisa, ama inta xaashi ee jira. `P`: guryaha naqshadda magacooda (eeg {{cmd:DWGPROPS}}). `O`: dooro walax, kadibna waxa la akhrinayo (aagga, dherarka, perimeter-ka, nuuf-dhexroorka, dhexroorka, lakabka, magaca, x, y, qoraalka, wareejinta, midabka) iyo tobanleyda. `E`: formula. `C`: qoraal leh koodyo sida ay u qoran yihiin, sida `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Kadibna `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: qoraal la doortay ayaa field lagu daraa wixii ku jira ka dambeeya; unug jadwal sidoo kale; tixraac bloog wuxuu weydiiyaa sifada; {{key:Enter}} wuxuu weydiiyaa dherar iyo barab qoraal cusub.
- Shaashadda field-ku wuxuu leeyahay asal midab-khafiif ah; daabacaadda iyo PDF-ku waligood ma leeyihiin. Qoraalka field-ka oo gacanta lagu qoro wuu joojiyaa field-ka. Field aan la xisaabin karin wuxuu muujiyaa `####`.
- Field-ka walaxda wuxuu helaa walaxdaas furaha CadCraft ku hayo walaxda (Settings › CadCraft › Merge-friendly files); furayaasha la damiyay marka uu diidaa.

### UPDATEFIELD

Magacyada gaaban: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` wuxuu dejiyaa goorta fields-ka iyaga ayaa isku cusboonaysiiya: qor xarfaha `O` open, `S` save, `P` plot, `R` regen (dhammaan afarta si aad u bilowdo), ama `NONE`.

### DWGPROPS

Magacyada gaaban: `DRAWINGPROPS`. Wuxuu liistaa guryaha naqshadda, kadibna `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Lix kowaad waa kuwa panel-ka {{ui:Drawing details}} muujiyo; `U` wuxuu ku daraa magacaaga iyo qiimahaaga, `R` wuxuu ka saaraa mid. Goobaha ayaa akhrisa (`%<prop:title>%`, `%<prop:Client>%`) wayna raacaan isla markiiba. Waa diidaa magac gaar ah oo ah mid dhismihii ah ama leh `%`, `<`, `>`, xigasho ama reverse slash.

## Parametric

Eeg [Xannibi naqshadda](topic:constraints) iyo [Isticmaal halbeegyo iyo isla-siminno](topic:parameters). Xannibaadyadu waxay ka shaqeeyaan tab-ka {{ui:Model}}.

### GEOMCONSTRAINT and the GC commands

Magacyada gaaban `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, kadibna weydiimaha amarkaas.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (kan labaad ayaa dhaqaaqa).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT and the DC commands

Magacyada gaaban `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (lambar, isla-simin, ama `name=expression`).
- {{cmd:DCALIGNED}}: sida sare, oo leh `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` wuxuu weydiiyaa dulqaadka masaafada iyo xagalka.
- {{cmd:DELCONSTRAINT}} (magacyada gaaban `DELCON`): `Select objects`; xannibaadyadooda way baxaan.
- {{cmd:CONSTRAINTBAR}} (magacyada gaaban `CBAR`): `Select objects [Showall/Hideall]`, kadibna `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (magacyada gaaban `PAR`, `PARAM`) wuxuu furaa guddiga {{ui:Parameters}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Magacyada gaaban `SWMACRO`. Wuxuu soo dejiyaa macro (.swb) oo moodeelka dib u dhisa hal sawir xannibaysan oo SolidWorks ku jira. Eeg [Sawirrada u gudbi qaybeeyayaasha kale ee qaybaha](topic:solidworks-sketches).

## Bloogyo

### ANNOSCALE

Magacyada gaaban: `CANNOSCALE`. Wuxuu sheegaa miisaanka calaamaynta naqshadda iyo inta walax calaamaysan ee ay leedahay, kadibna wuxuu weydiiyaa `New annotation scale`: qor `1:50`, `1:100`, `2:1`, lambar kaliya (`50` waa 1:50) ama magaca mid ka mid ah miisaanada naqshadda gaarka ah. Qoraal kasta oo calaamaysan iyo cabbir kasta ayaa la beddelaa si uu u daabacmo isku cabbir miisaanka cusub, hal tallaabo oo ka noqo; walxaha aan calaamaysan ahayn way joogsadaan, sidaas waxaa la sameeyaa walax oo liis miisaan ka hayso oo aan kan cusub ku jirin ({{cmd:OBJECTSCALE}}). Eeg [Cutubyada, warqadaha iyo miisaannada](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Magacyada gaaban: `OBJSCALE`. `Select annotative objects`, kadibna `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Qoraal ama cabbir calaamaysan wuxuu hayaa liis miisaanada calaamaynta. `Add` iyo `Delete` waxay weydiiyaan miisaan (`1:50`, `2:1`, lambar kaliya, ama magaca mid ka mid ah miisaanada naqshadda gaarka ah); `Current scale` wuxuu ku daraa miisaanka calaamaynta naqshadda; `List` wuxuu daabacaa miisaanada walax kasta. Daaqad kasta oo miisaankeedu ku jiro liiska walax wuxuu muujiyaa walaxda cabbirka uu daabacayo dhererka warqadda miisaankaas, shaashadda iyo daabacaadda labadaba. Miisaanka dambe lama tirtiri karo. Walaxda aan calaamaysan ahayn waa laga reebay: ka hor shid Annotative Properties. Liisaska waxaa lagu kaydiyaa DWG iyo DXF sida xogta CadCraft. Eeg [Cutubyada, warqadaha iyo miisaannada](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Magacyada gaaban: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. ON (sidii naqshad bilaabanayso): walax calaamaysan waxay sidoo kale muujisaa daaqad muuqaal ama moodeelka, oo miisaankeedu liiskeeda ku jirin, cabbirka ay leedahay. OFF: halkaas lama muujinayo, moodeelka ma la dooran karo. Doorashadu waa hal tallaabo oo ka noqo; faylka ma lagu kaydiyo.

### SCALELISTEDIT

Magacyada gaaban: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` ilaa {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit iyo Delete waxay weydiiyaan magaca miisaanka. Miisaanada naqshadda gaarka ah waxay ku biiraan liisaska miisaanka daaqadda iyo daabacaadda, waana la kaydiyaa naqshadda. Eeg [Cutubyada, warqadaha iyo miisaannada](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: dhibcaha curve-ku dhex maro; `Close`, `Undo`, kadibna `Start tangent` iyo `End tangent` (barab, ama {{key:Enter}}). Method › Control vertices wuxuu weydiiyaa darajo (1 ilaa 5) wuuna sawiraa xagga polygon-ka xakameynta. Object wuxuu polilaynnada u beddelaa splines dhibcahooda dhexdooda. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` walxo badan; xariiqyo, qaansooyin iyo splines waa la siiyaa sida polilaynno marka hore. Eeg [Splines iyo polilaynno](topic:splines).

### BLOCK

Magacyada gaaban: `B`, `BMAKE`.

- `Enter block name`. Haddii uu jiro: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Waa la beddelayaa hal tixraac oo bloog cusub.

### WBLOCK

Magacyada gaaban: `W`, `-WBLOCK`. Wuxuu qoraa bloog, walxo qaar ama naqshadda oo dhan fayl DWG ama DXF cusub. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (waxay noqonaysaa bilowga naqshadda cusub), `Select objects`, kadibna `File format [DWG/DXF/R12 DXF]` iyo `File name for the new drawing`, kadibna `What to do with the objects [Retain/Convert to block/Delete]`. Convert wuxuu beddelaa iyaga hal tixraac oo bloog magaca faylka leh; Delete wuu tirtiraa.
- **Block**: `Block to write out`. Walaxda bloogga iyo barta saldhigiisa bilowga, bloogyada ku jira sidoo kale.
- **Entire drawing**: walax kasta oo moodeelka ku jira. Xaashiyada lama qorayo; isticmaal {{cmd:SAVEAS}} nuqul ay xaashiyada ilaalinayso.

Faylka cusub wuxuu ku jiraa kaliya lakabyada, noocyada xariiqda, qoraalka iyo qaababka cabbirka iyo bloogyada walaxdiisa isticmaasho, iyo unugyada naqshadda. Noocyada DWG waa kan {{cmd:SAVEAS}} ugu dambeyn isticmaashay. Browser-ka faylku wuu soo dejiyaa; Studio-ga daaqadda kaydinta ayaa furta.

### ATTDEF

Magacyada gaaban: `ATT`, `DDATTDEF`, `-ATTDEF`; ama {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Wuxuu daabacaa modes-ka, kadibna `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` marka constant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} wuxuu qeexitaannada sifooyinka geliyaa bloogga.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, ama laba jeer riix tixraac leh sifooyin; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, kadibna sanduuqa {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): isla tixraaca, kadibna `<prompt> (<TAG>) <value>` sifo kasta; {{key:Enter}} wuxuu ilaaliyaa qiimaha. Eeg [Sifooyinka](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Qiimayaasha way ilaalinayaan; sifooyinka cusub waxay helaan qiimahooda caadiga ah, kuwa la saaray way baxaan, meelaha waa dib loo dejiyaa.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. Sanduuqa: bloogga, sifooyinka (calaamad, weydiin, qiime caadi ah, modes, ajiga), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT and REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (ama xulashada). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; badhanka bar-ka {{ui:Save the block}} iyo {{ui:Discard}} isla shayga ayay sameeyaan. Tafatirka oo dhan waa hal tallaabo oo ka noqo. Eeg [Sifooyinka](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT and BCLOSE

`BE`; ama {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` wuxuu furaa tafatiraha bloogga. `BCLOSE` wuxuu weydiiyaa `Close the block editor on "…" [Save/Discard] <Save>`; badhanka {{ui:Save block}} iyo {{ui:Discard changes}} ee bannaanka isla shayga ayay sameeyaan. Wax kasta oo tafatiraha lagu sameeyo waa hal tallaabo oo ka noqo.

### VIEWBASE

Magacyada gaaban: `FLATSHOT`. Muuqaal 2D siman oo jirmaallada tab-ka 3D ah: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, miisaan (`1:20`, `2:1`; {{key:Enter}} wuxuu qaadaa kan xaashiga ku habboon), kadibna dhexda muuqaalka. Hal tixraac bloog, geesaha la arko VIEW-VISIBLE, kuwa qarsan ee dashed VIEW-HIDDEN. Eeg [Muuqaalada siman xaashiga](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Magacyada gaaban: `-PUBLISH`; ama {{ui:All sheets in one PDF}} wada-hadalka {{ui:Plot to PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} wuxuu daabacaa xaashi kasta, `S` wuxuu weydiiyaa magacyada oo kala go'ay comma. PDF hal ah, bog iyo calaamad bog kasta. Eeg [Xaashi kasta PDF hal ah](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Magacyada gaaban: `SSM`, `SHEETSETMANAGER`. Wuxuu kugu geeyaa qaybta {{ui:Sheet set}} ee panel-ka bidix: xaashiyo naqshado badan, lambar leh, cinwaan leh, bloogyada cinwaankooda oo laga buuxiyo kooxda, lagu daabacaa PDF hal ah. Eeg [Kooxaha xaashiyada](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): dooro DWG ama DXF, kadibna barta geliska. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; xiriir ka badan hal ah, dooro mid tixraacyadiisa ama qor `N` iyo magiciisa. Eeg [Naqshadaha xidhan](topic:files#linked-drawings-external-references).

### COUNT

Magacyada gaaban: `BCOUNT`; ama {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: riix wuxuu doortaa oo tiriyaa tixraac kasta oo bloogaas meeshan; {{key:Enter}} ama `A` wuxuu liistaa dhammaantood; `E` kadibna `C` (tiro) ama `A` (sifooyin) wuxuu soo dejiyaa CSV. Eeg [Tiri bloogyada oo dhoofi jadwal](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Magacyada gaaban: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (xarfaha weyn iyo yar ma muhiimka). `F` wuxuu weydiiyaa DWG ama DXF, kadibna naqshadda oo dhan ama mid bloogyadeeda; magac horay loo isticmaalay wuxuu weydiiyaa {{ui:Keep existing}} ama {{ui:Rename}}. `L` wuxuu furaa guddiga maktabadda.
- `Specify insertion point [Scale/Rotate]`. `S` wuxuu weydiiyaa `Specify scale factor`, `R` wuxuu weydiiyaa `Specify rotation angle`; labaduba way xasuustaa.
- Marka bloogga uu hore ugu jiro walxo ku dhow oo ku celcelin kale naqshadda kuwa aan bloog ahayn, safka wuxuu sheegaa inta meelood oo la soo jeediyay, weydiinta waxay helaysaa `suGgested`: `G` wuxuu muujiyaa; riix meel ku dhow si aad bloogga halkaas u dhigto, `A` dhammaantood, {{key:Enter}} si aad dib ugu noqoto. Waxay qaataan jihada deriskooda iyo qiimaha sifooyinka caadiga ah. Naqshadaha ka badan 20,000 walax meesha furan lama baarin.
- Kadibna `Enter <prompt> (<TAG>) <default>` sifo kasta oo bloogu weydiisto. Eeg [Sifooyinka bloogga](topic:attributes).

### LIBRARY

Magacyada gaaban: `LIB`. Wuxuu furaa guddiga maktabadda: geli walxaha, hubi cusboonaysiinta, kreditiyada maktabadda. Su'aal ma weydiiso. Eeg [Ka geli fayl ama maktabadda](topic:insert-from-file-and-library).

### STEELMEMBER

Magacyada gaaban: `SMEMBER`; ama {{ui:3D member}} tab-ka {{ui:Standard}} ee maktabadda. `Section size <W12x26>` (sida tab-ku liistaa), kadibna `Start point [Column]` iyo `End point`: xubin bir ah oo jirmaal ah tab-ka 3D ah laba barood u dhexeeya, dhulka saaran. `C` wuxuu weydiiyaa barta saldhigga tiirka iyo dherareka. Hal tallaabo oo ka noqo. Eeg [Dhig qaybaha biraha iyo qaybaha caadiga ah](topic:steel-and-standard-parts).

### PARTSLIST

Magacyada gaaban: `PLIST`. `Top left corner of the parts list`, kadibna `Text height <2.5>`: jadwal qayb kasta oo caadi ah iyo qaybta birta laga geliyay maktabadda (lambarrada, tirada, qaybta, standard-ka, cabbirka, dherarka, alaabta, miisaanka). Hal tallaabo oo ka noqo. Eeg [Dhig qaybaha biraha iyo qaybaha caadiga ah](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Magacyada gaaban: `PU`. Wuxuu ka saaraa qeexitaannada bloogyada aan wax lagu isticmaalin. Su'aal ma weydiiso.

### DELBLOCKS

Ama {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: riix tixraac bloog, ama `N` liiska bloogyada oo shaandhayn (dooro dhowr), ama `X` / {{key:Enter}} si aad u dhammayso. Tixraac kasta way baxaa — moodeelka, xaashi kasta iyo gudaha bloogyada kale — kadibna qeexitaanka, amarka ayaa sheegaa waxa la tirtiray iyo waxa aan la tirtirin. Bloogyada magac aan lahayn iyo naqshadaha xidhan lama bixiyo. Weydiintu way soo noqotaa bloogga xiga; amarka oo dhan waa hal tallaabo oo ka noqo.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} wuxuu ku dhejiyaa waxa aad koobiyeeysay ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) hal bloog ahaan: dooro barta geliska waxaana halkaas yimaada hal tixraac oo bloog cusub, la doortay. Bloogga magac u gaar ah buu helaa (`A$C` iyo lambar); {{cmd:RENAME}} wuxuu siinayaa magacaaga. Hal tallaabo oo ka noqo wuxuu tirtiraa tixraaca iyo bloogga.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} wuxuu weydiiyaa bloogga la beddelayo iyo bloogga halkiisa la geliyo (`?` wuxuu liistaa bloogyada), kadibna wuxuu beddelaa tixraac kasta moodeelka, xaashi kasta iyo gudaha bloogyada kale. Tixraac kasta wuxuu ilaalinayaa meeshiisa, miisaankiisa, wareejintiisa, lakabkiisa iyo qiimayaasha sifooyinka labada bloogba leeyihiin; sifooyinka bloogga cusub oo keliya leh waxay ku bilaabmaan qiimahooda caadiga ah, wuuna sheegaa qiimayaasha la tirtiray. Markii aan wax bloogga hore isticmaalin, wuxuu bixiyaa inuu ka saaro. Waa diidaa xiriirrada naqshadaha iyo beddel bloog ku dhex jira bloog kale. Hal tallaabo oo ka noqo.

### MINSERT

{{cmd:MINSERT}} wuxuu geliyaa bloog safaf iyo tiiro: magaca bloogga, barta geliska, miisaanka, wareejinta, tirada safafka iyo tiiradaha, iyo masaafooyinka u dhexeeya. Waxa oo dhan wuu leexdaa wareejinta. Mid kasta waa tixraac u gaar ah (ugu badnaan 10,000), sidaas darteed midkasta waa la guuri karaa ama tirtiri karaa markii dambe.

### BLOCKSPALETTE

Magacyada gaaban: `BLOCKSPAL`; ama {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Wuxuu muujiyaa guddiga {{ui:Blocks}} oo kursoorku ku jiro shaandhadeeda. Bloog kasta wuxuu leeyahay sawir yar; kuwa ugu dambeeyay la geliyay ayaa marka hore yimaada. Laba badhanka ku xiga shaandhadda waxay u beddelaan liis iyo shabakad sawirro. Riix sawir (ama {{ui:Insert}}) si aad bloogga ugu geliso {{cmd:INSERT}}, ama jiid naqshadda ku dheji meesha aad daadiso.

{{ui:Libraries}}, liiska hoose: {{ui:Add a drawing}} wuxuu qaataa fayl DWG ama DXF oo aad leedahay, wuxuuna liisanayaa bloogyadiisa sawirro leh, iyo naqshadda oo dhan hal bloog ahaan. Geliska mid kasta waxay koobiyeysaa qeexitaankeeda (iyo bloogyada ku jira iyo lakabyadooda) naqshaddan, sida ikhtiyaarka `File` ee {{cmd:INSERT}}; bloog horay halkan ugu jira oo isku qeexitaan leh waa la isticmaalaa iyada oo aan su'aal la weydiin, midka magac isku mid ah laakiin kala duwan wuxuu weydiiyaa {{ui:Keep existing}} ama {{ui:Rename}}. Browser-ka faylku wuu joogaa ilaa bogga la xidho. CadCraft Studio-ga {{ui:Add a folder}} wuxuu liisanayaa naqshadaha galka, kuwa kasta waa la furayaa marka aad riixdo, faylalka iyo galalka waa la xasuustaa. Calaamadda yar x wuxuu ka saaraa maktabad liiska ka, faylka lama taaban. Maktabadda la wadaago {{ui:Library}} waa wax kale: eeg [Ka geli fayl ama maktabadda](topic:insert-from-file-and-library).

### BCONVERT

Ama {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Wuxuu helaa joometri soo noqnoqda oo nuqul kasta u beddelaa tixraac hal bloog.

- `Select the objects that repeat, or [Block]`: walxaha hal nuqul. `B` wuxuu magacaa bloog jira halkii, si uu u helo nuqullo kala go'an oo walxaheeda ah.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` iyo `P` waxay beddelaan waxa loo tiriyo nuqul; {{key:Enter}} wuu raadiyaa. Dejimaha waa la xasuustaa.
- `Name for the new block <Block1>`, kadibna `Specify the block's base point` ({{key:Enter}} wuxuu qaataa geeska hoose-bidix ee xulashada).
- Wuxuu sheegaa inta kale ee walxaha isku joometri ah, wuxuu iftiimiyaa wixii uu beddeli doono, wuxuuna weydiinayaa `Yes/No`.

Nuqul waa walaxda isku mid ah oo la wareejiyay oo la leexiyay xagal kasta (iyo muraayad ama miisaan hal factor ah marka ay shidan yihiin): walax kasta waa inuu lahaadaa dhiggeeda, ilaa hal boqolkiiba hal milyan oo cabbirka xulashada. Tixraac kasta wuxuu helaa wareejintiisa iyo miisaankiisa (kan muraayadda ahna Y miisaan taban), iyo lakabka walaxdiisa wadaaga. Walaxda lakabyada xidhan waa la tagayaa, waana la tiriyaa. Wuxuu baaraa meesha furan (moodeelka ama xaashiga furan). Baaris aad u weyn ayaa joojisa xadka shaqada wuuna sheegaa. Hal tallaabo oo ka noqo.

### BSEARCH

Ama {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: qayb magaca bloogga, ama qaab leh `*` iyo `?`. Wuxuu liisanayaa bloog kasta oo tixraacyadiisa halkan iyo naqshadda oo dhan ku jira.
- `A`: qiime sifo, ama `TAG=value`. Wuxuu liisanayaa bloogyada tixraacyadooda hayaan, iyo qiimayaasha la helay. Sifooyinka joogtada ah way tirinayaan.
- `G`: dooro walxo, ama hal tixraac bloog, bloogyada qaabkooda ugu yaraan 85% isku mid ah ayaa la liisanayaa, kan ugu wanaagsan marka hore. Cabbirka, wareejinta iyo muraayadda ma tiriyaan. Cabbirku wuxuu isbarbar dhigaa masaafooyinka barabaha ku kala firidhsan geesaha, sidaas darteed wuxuu helaa ku-egyaanshaha; si aad u hesho nuqullo sax ah u isticmaal {{cmd:BCONVERT}}.

Tixraacyada laga helay meesha furan waa la doortaa, diyaar u ah amarka xiga.

### BREPLACE

Ama {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` wuxuu beddelaa tixraacyada bloogga aad doorato bloogga aad magacowdo; `A` wuxuu weydiiyaa bloog iyo beddelkiisa oo wuxuu beddelaa tixraac kasta, sida {{cmd:BLOCKREPLACE}} (isla koodka). Tixraac kasta wuxuu ilaalinayaa meeshiisa, miisaankiisa, wareejintiisa, lakabkiisa iyo qiimayaasha sifooyinka labada bloogba leeyihiin; qiimayaasha bloogga cusub meel u leh ma jiraan waa la tirtiraa oo magaca la siiyaa. `?` wuxuu liistaa bloogyada. Hal tallaabo oo ka noqo.

### DATAEXTRACTION

Magacyada gaaban: `EATTEXT`, `DX`; ama {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Wuxuu liisanayaa bloogyada, sifooyinkooda iyo guryaha walaxda jadwal ama fayl CSV ah.

- Wuxuu shaqeeyaa xulashada, ama wuxuu weydiinayaa `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` marka xulashadu labadaba ku jiraan. Bloogyada magac aan lahayn, jadwallada iyo jadwallada alaabta waa lama liisanayo.
- Wuxuu daabacaa tiirarka la dooran karo (magaca, nooca, lakabka, X, Y, wareejinta, miisaanka, dherarka, aagga, midabka, nooca xariiqda, meesha, iyo mid kasta oo sifo tag ah), kadibna `Columns, by name or number with commas between`. {{key:Enter}} wuxuu qaataa kuwa calaamadaysan: magaca iyo sifo kasta bloogyada; nooca, lakabka iyo dherarka walxaha.
- `Put identical rows together with a count? [Yes/No] <Yes>`, kadibna `Put the list in a: [Table/Csv] <Table>`. Jadwal waa jadwal caadi ah ({{cmd:TABLEDIT}} ayaa tafatira) ma aha mid tooska ah: amarka mar kale shid naqshadda ka dib markii ay isbeddesho.
- Waa diidaa tiir aan liiska ku jirin. Jadwal wuxuu hayaa 1,999 safaf xog; faylka CSV wuxuu qaadaa dhammaantood.

### COUNTTABLE

Wuxuu tiriyaa tixraacyada bloogga xulashada (ama meesha furan) wuxuuna tirooyinka ku dhigaa jadwal (`Block`, `Count`) ama fayl CSV. Tiro raacaysa naqshadda gaardiisa eeg {{cmd:BOMTABLE}}.

## Xaashiyada iyo daabacaadda

### LAYOUT

Magacyada gaaban: `LO`, `NEWLAYOUT`; ama badhanka {{ui:+}} hoosta naqshadda. Xaashi cusub oo xuduud, bloog cinwaan iyo hal daaqad muuqaal leh, ISO A3 (ama Tabloid naqshadaha inji ama fiit). Su'aal ma weydiiso.

### MVIEW

Magacyada gaaban: `MV`. Xaashiga keliya ({{cmd:VPORTS}} xaashiga wuxuu sameeyaa isku mid).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Daaqadda muuqaalku wuxuu muujinayaa moodeelka oo dhan miisaan caadi ah.
- `P` (Polygonal): riix geesaha dibada (`Undo`, `Close`), {{key:Enter}} markii aad dhammayso. Wuu diidaa wixii ka yar saddex geeso.
- `O` (Object): `Select a closed object for the viewport's outline`: polilayn xidhan, goobo ama ellipse xaashiga ku jira. Daaqadda qaabkeeda ayuu qaataa (qalloocyada sida qaybo toosan oo gaaban); walaxda way joogsataa sida ay tahay. Walax aan xidhnayn waa diidaa.

### VPCLIP

Wuxuu jaraa daaqad muuqaal oo horay xaashiga ku jirta. `Select viewport to clip` (ama dooro marka hore), kadibna `Select the object to clip to [Polygonal/Delete]`:

- Riix polilayn xidhan, goobo ama ellipse, ama {{key:Enter}} (ama `P`) si aad geesaha polygon-ka u riixdo.
- `D` (Delete, la siiyaa marka daaqadda la jaray) wuxuu dib u ka dhigaa afar-geesood: sanduuqa ku wareegsan qaabkii ay hore u lahayd.
- Waxa daaqaddu muujinayso ma dhaqdhaqaaqo xaashiga, miisaankeedana wuu joogaa. Moodeelka waxaa lagu sawiraa oo lagu daabacaa kaliya gudaha qaabka, xuduudduna wuu raacaa. Hal tallaabo oo ka noqo.
- Daaqadda la jaray waxay leedahay grip geesta kasta oo qaabkeeda ah, oo ka sokow dhexdeeda iyo afar geesood sanduuqeeda (jiidista geesta sanduuqa waxay fidinaysaa qaabka). Properties wuxuu muujiyaa Outline: Rectangle, ama Clipped oo leh tirada geesaha.
- Faylalka DWG iyo DXF 2000 waxay ilaalinayaan qaabka CadCraft-ka. Barnaamijyada kale waxay furaan daaqadda sida afar-geesood ku wareegsan; DXF R12 wuxuu ilaalinayaa afar-geesood keliya.
- Tab-ka moodeelka wuxuu sheegaa in daaqadaha ay xaashiyada ku jiraan.

### VPORTS

Magacyada gaaban: `VIEWPORTS`. {{cmd:SPLIT}} isku mid ayuu yahay xaashi ka sidoo kale, {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} ayaa sameeya. Moodeelka: `Enter number of panes [SIngle/2/3/4] <3>`; `2` wuxuu weydiiyaa `[Horizontal/Vertical] <Vertical>` (Vertical = dhinac-dhinac), `3` wuxuu weydiiyaa `[Left/Right] <Right>` (meesha qaybta weyn ku taal). Qayb kasta waxay ilaalisaa muuqaalkeeda iyo meeshaheeda; riix wuxuu qayb ka dhigaa firfircoon. Xaashiga waa {{cmd:MVIEW}}. Eeg [Shaashadda kala qaybi](topic:split-screen).

### VPVIEW

Ma leh magac gaban. Xaashiga keliya.

- `Select viewport` (ka tagta haddii mid la doortay), kadibna moodeelka: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Ma leh magac gaban. Nidaam isku-xidhka oo adiga u gaar ah; ma aha tafatir. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: barab waa bilow cusub, kadibna `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: bilow, barab dhidibka X togan, barab dhinaca Y togan. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` iyo magac. Muuqaalku wuu leexdaa si dhidibka X cusub uu u toosan yahay. Eeg [Muuqaalka leexi oo isticmaal isku-xidhkaaga](topic:ucs-and-turned-view).

### PLAN

Ma leh magac gaban. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: wuxuu leexinayaa muuqaalka daaqadda firfircoon si dhidibka X ee UCS (ama adduunka) uu u toosan yahay. Waxba naqshadda kuma guurayo.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ma leh magac gaban; ama {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Waa isku mid sida `UCS Z -90`, `UCS Z 90` iyo `UCS W`, muuqaalkuna wuu raacaa.

### VPLAYER

Ma leh magac gaban. Xaashiga, ama gudaha daaqadda muuqaal. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` waxay weydiiyaan magacyada lakabyada (comma, `*` iyo `?` wildcards), kadibna daaqadaha `[All/Select/Current] <Current>`; Reset wuxuu lakabka kasta dib ugu celinayaa caadigiisa "qabsan daaqadaha cusub"; `V` wuxuu dejiyaa caadigaas (`[Frozen/Thawed]`), kaas oo {{cmd:MVIEW}} isticmaalo. `?` wuxuu liistaa lakabyada qabsan daaqadda hadda. Tiirka daaqadda ee guddiga Lakabyada isla shayga ayuu u sameeyaa daaqad keliya. Eeg [Qabso lakab daaqad keliya](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Magacyada gaaban: `MS`; ama laba jeer riix gudaha daaqadda. Xaashiga keliya. Ka shaqee moodeelka daaqad ka mid ah: tan la doortay, tan keliya ee xaashiga, ama `Click inside the viewport to work in`. Dhaqdhaqaaqa iyo weyneynta gudaha waxay beddelaan muuqaalka daaqadda (daaqad qufulan ayaa ilaalisa, xaashina wuu dhaqaaqaa); muuqaalka cusub waa hal tallaabo oo ka noqo. Eeg [Ka shaqee moodeelka daaqad ka mid ah](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Magacyada gaaban: `PS`; ama laba jeer riix dibadda daaqadda, ama riix tab hoosta naqshadda. Dib ugu noqo xaashiga.

### PLOT

Magacyada gaaban: `PRINT`, `PUBLISH`, `EXPORTPDF`; ama {{key:Mod+P}}. Wuxuu furaa wada-hadalka {{ui:Plot to PDF}}. Eeg [Daabac PDF](topic:plot-pdf).

### PLOTSTYLES

Magacyada gaaban: `STYLESMANAGER`, `PSTABLES`; ama {{ui:Edit tables…}} wada-hadalka {{ui:Plot to PDF}}. Wuxuu furaa {{ui:Plot style tables}}: waxa midab kasta u daabacaa (midabka, cadcad, tiro, culeyska xariiqda), naqshadda lala kaydiyo. Eeg [Jadwalada qaabka daabacaadda](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} wuxuu walaxda u wareejiyaa xaashi iyo moodeelka daaqad muuqaal kaga yimid, si ay isku mid u eegaan dhinaca kale. Xaashi ku jira, dooro walxo oo waa u tagaan moodeelka (dooro daaqadda marka xaashigu ka badan yahay mid). Intii aad ka shaqeynayso moodeelka daaqad muuqaal ({{cmd:MSPACE}}), walaxda la doortay waxay u iman doonaan xaashiga. Waxay sheegaa inta ay ka weyn ama ka yar ay noqdeen. Daaqadaha waxay joogaan xaashigooda. Hal tallaabo oo ka noqo.

### ISODRAFT

{{cmd:ISODRAFT}} wuxuu shidaa ama damiyaa naqshadeynta isometric `ON` ama `OFF`, ama si toos ah ayuu u gudbaa diyaaradda `Left`, `Top` ama `Right`. Intii ay shidan tahay: Ortho ({{key:F8}}) wuxuu xariiqyada ku haya labada dhidib ee diyaaradda (left: 90° iyo 150°; top: 30° iyo 150°; right: 30° iyo 90°), raadinta polar ({{key:F10}}) wuxuu raacaa isla dhidibyada, qabashada shabakadda ({{key:F9}}) wuxuu isticmaalaa shabakadda isometric-ka, shabakadda ({{key:F7}}) waxa lagu sawiraa khadad 30°, 90° iyo 150°. {{cmd:ELLIPSE}} wuxuu helaa `Isocircle`: bixi dhexe iyo nuuf-dhexroor (ama `Diameter`), wuxuu sawiraa ellipse-ka goobo u muuqda diyaaradda hadda. Naqshaddu waa siman tahay: kuwani waa caawimaad sawirka muuqaalka, ma aha moodeel 3D. Dejintu waa fadhigan waana aan lagu kaydin faylka.

### ISOPLANE

{{cmd:ISOPLANE}} wuxuu doortaa diyaaradda naqshadeynta isometric-ku ku shaqeyso: `Left`, `Top` ama `Right`. Enter wuxuu gudbaa diyaaradda xigta. Intii naqshadeynta isometric-ku shidan tahay, {{key:F5}} isla waxa sameeya amarka dhexdiisa; intii ay damaysan tahay, {{key:F5}} browser-ka ayaa leh.

## Baaris

### CAL

Wuxuu daabacaa qiimaha xisaab, sida loo akhrin doono meel kasta oo dherar lagu qoro.

- `Expression`: qor, tusaale ahaan `12'6"+3/4"` ama `(24'-0")/3`, kadibna riix {{key:Enter}}. CadCraft wuxuu daabacaa `= 12'-6 3/4"   (150.75 drawing units)`. Eeg [Xisaabinta qiimaha la qoro](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Magacyada gaaban: `DI`; ama {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`, `Specify second point`. Wuxuu daabacaa masaafada, xagalka, Delta X iyo Delta Y.

### AREA

Magacyada gaaban: `AA`; ama {{ui:View}} › {{ui:More}} › {{ui:Area}}. Wuxuu daabacaa aagga iyo perimeter-ka.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Riix ama qor geesaha; marka `Specify next point (Enter closes) [Undo]` riix {{key:Enter}} si aad u xidho xadka. `U` wuxuu qaadaa geeska ugu dambeeyay.
  - {{key:Enter}} ama `O`, kadibna `Select object`: goobo (wuxuu daabacaa wareegga), ellipse, polilayn (furan waxaa lagu xidhaa khad toosan aagga, dherarkeeda ayaa la daabacaa), ama hatch (godadka waa la jaraa).
  - `A` (Add area) iyo `S` (Subtract area) waxay hayaan wadar socota: weydiintu wuxuu bilaabmaa `(ADD mode)` ama `(SUBTRACT mode)`, aag kasta waa la kordhiyaa ama laga jaraa, `Total area = …` wuu daabacaa kadib kasta. Qaabkan `O` wuxuu doortaa walxo ilaa {{key:Enter}}, {{key:Enter}} weydiinta koowaad wuxuu dhammeeyaa amarka.

### MEASUREGEOM

Magacyada gaaban: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; kadib cabbir kasta wuu mar kale weydiiyaa, `eXit` waa caadiga.

`Quick` wuxuu cabbiraa wareegga taabiyaha markaad dhaqdhaqaaqayso: masaafada walaxda ugu dhow midig, sare, bidix iyo hoose (dhidibyada UCS-ka hadda), oo la sawiro intaad socoto, iyo xagalka halka laba ka mid ah deriskan ay toosan yihiin oo kulmaan. Riix wuxuu qoraa afar masaafo, ballaca iyo dherarka cad, iyo xagalka taariikhda; Enter wuxuu ku laabanayaa xulashooyinka. Waxa shaashadda ku jira ayuu akhrinayaa.

- `D`: laba barood, sida {{cmd:DIST}}.
- `R`: `Select arc or circle`; wuxuu daabacaa nuuf-dhexroorka iyo dhexroorka.
- `A`: qaanso (xagalkeeda ku jira), khad kadibna khad labaad (xagalka u dhexeeya, dhammaadyadooda fog ee ugu dhow), ama {{key:Enter}} iyo saddex barood (geeska, kadibna labada dhammaad).
- `AR`: sida {{cmd:AREA}}, hal aag.

### ID

Ma leh magac gaban. `Specify point`; wuxuu daabacaa X iyo Y-keeda.

### LIST

Magacyada gaaban: `LI`, `LS`. `Select objects`; wuxuu daabacaa nooca walax kasta, lakabkeeda iyo cabbirrada ugu muhiimsan.

### MASSPROP

{{cmd:MASSPROP}} wuxuu siinayaa guryaha qaybta gobollada iyo walxaha xidhan ee aad doorato, oo wada la qaado: aagga, perimeter-ka, sanduuqa xadka, dhexda, daqiiqadaha inertia ee dhidibka X iyo Y ee mar dhexe, wax-soo-saarka inertia, nuuf-dhexroorka gyration, daqiiqadaha isku mid ah ee dhexda, iyo daqiiqadaha ugu muhiimsan iyo jihooyinkooda. Godadka gobol gudihiisa waa godad. Tirooyinku waa unugyada naqshadda, waxay sax yihiin dhidibyo ay khadad iyo qaansooyin ka samaysmaan; ellipse-yada iyo splines-ka waxay lagu cabbiraa qaybo toosan oo gaaban, wuuna sheegaa. Warbixinta ka dib wuxuu weydiiyaa inuu fayl qoraal ah ku qoro. Walaxda aan xidhnayn waa laga reebay, wuuna sheegaa tirada.

## Muuqaal, fayl iyo kuwa kale

### ZOOM

Magacyada gaaban: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Riix laba geesood daaqad ahaan. `E`, `A` ama Enter: naqshadda oo dhan.
- `P` (Previous, ama {{ui:Previous}} qalabka) wuxuu ku laabanayaa muuqaalka ka horeeya, ilaa 10 muuqaal taab kasta; silsilad wheel-ka ama hal pan waa hal muuqaal.
- Lambar sida `2`, `2x` ama `0.5x` (ama `S` kadibna lambarka) wuxuu weynaysaa ama yaraynayaa factor-ka aadka ah dhexda shaashadda.
- `C` wuxuu weydiiyaa `Specify center point` iyo `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT and the PDF commands

Magacyada gaaban: `PDFATT` {{cmd:PDFATTACH}} ahaan, `PDFIM` {{cmd:PDFIMPORT}} ahaan. {{cmd:PDFATTACH}} wuxuu bogga PDF ku dhigaa naqshadda hoosteeda (faylka, bogga, barta geliska, miisaanka, wareejinta); {{cmd:PDFIMPORT}} wuxuu bogga PDF-ka khadadkiisa, buuxinteeda iyo qoraalkiisa u beddelaa walxo naqshadeed oo lakabyo magacoodu PDF-ka ku salaysan yahay, miisaanka run ah, miisaan la qoro, ama miisaan laba barood iyo masaafo run ah. {{cmd:PDFCLIP}} wuxuu jaraa underlay-ga, {{cmd:PDFADJUST}} wuxuu dejiyaa ifidda, kala-duwanaanshaha, midab-madowga ama wuu damaa, {{cmd:PDFLAYERS}} wuxuu shidaa ama damiyaa lakabyada PDF-ka, {{cmd:PDF}} wuxuu CadCraft-ka siiyaa faylalka underlay-yada naqshaddu isticmaasho mar kale. Eeg [Underlay-yada PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Magacyada gaaban: `AUTOC`. Dhamaystirka naqshadda: amar aan socon, cad oo ifayso ayaa muujinaya waxa qaababka naqshaddaada ay sheegayaan inuu iman doono. {{cmd:AUTOCOMPLETE}} wuxuu shidaa `On` ama damiyaa `Off` (sidoo kale Settings › CadCraft) ama wuxuu `Show` waxa uu soo jeedinayo hadda. **Tab** wuxuu sawiraa ifka hal tallaabo oo ka noqo, **Esc** wuu iska tuuraa ilaa naqshaddu isbeddesho. Waxa uu helaa saddex waxyaabood walxaha ugu cusub: nuqulka xiga ee wax laga sameeyay laba jeer ama ka badan masaafo isku mid ah (tiirar, tiirarka, qaadadka sallaalka iyo bidixda), tallaabooyinka xiga ee jaranka polilayn, iyo dhinaca maqan ee qolka ama silsiladda derbiga. Dhexda {{cmd:LINE}} ama {{cmd:PLINE}} ifku waa **barta xigta**: tallaabada xigta ee jaranka (sallaalka, dhinaca, sallaalka…), geeska afraad ee afar-geesood, barta xidha, ama tallaabo isku mid ah oo kale. Kursoorka u soo dhow ku dhaji oo riix **Tab**, sida haddii aad halkaas riixday; sii wad ama riix Enter. Kuwaan kooxdan computer-kan ayaa lagu xisaabiyaa xeerar, iyada oo aan model la isticmaalin.

### AUTOSHEET

Magacyada gaaban: `ASH`. Xaashiyo isaga naftooda habeeya. {{cmd:AUTOSHEET}} wuxuu qaataa qaybaha naqshadda (muuqaalladaada magacaysan, ama qaybaha gaarka ah ee moodeelka, ama moodeelka oo dhan), wuxuu doortaa cabbirka warqadda (ama kan aad siiso), wuxuu siiyaa qayb kasta miisaan caadi ah (hal miisaan dhammaan, ama kan ugu weyn ee kasta qaadi karto), wuxuuna muuqaalada ku dhigaa safaf xaashiyo cusub ah oo leh bloog cinwaan iyo caption (magaca iyo miisaanka) hoosteeda. Waxa aan ku habboon xaashi keliya wuxuu helaa xaashi u gaar ah. Hal tallaabo oo ka noqo. Computer-kan ayaa lagu xisaabiyaa xeerar, iyada oo aan model la isticmaalin.

### PHOTOSKETCH

Magacyada gaaban: `PSK`. Sawirka sawir-gacmeed ilaa naqshad. Dooro sawir (JPEG, PNG ama TIFF) oo sawir-gacmeed warqad ah. {{cmd:PHOTOSKETCH}} wuxuu helaa afarta geesood ee xaashiga, wuxuu toosiyaa aragga, wuxuu qaataa cabbirka warqadda aad magacowdo (`Paper`, ama mid caadi ah oo ugu dhow), iyo `Scale` ee sawirka (1 : n), kadibna wuxuu raadaa khadadka qalinka khadad, qaanso iyo goobooyin, lakab kasta midabka qalinka (madow, casaan, buluug, cagaar). Haddii uusan helin geeska warqadda, wuxuu qaataa sawirka oo dhan xaashi, wuuna sheegaa. Qorista waa laga reebay. Hal tallaabo oo ka noqo. Computer-kan ayaa lagu sameeyaa habaynta sawirka caadiga ah, model la'aan, wax meel kale lama diro.

### AUTODIM

Magacyada gaaban: `ADIM`. Cabbir otomaatig ah xeerarka. {{cmd:AUTODIM}} wuxuu cabbiraa walxaha la doortay (ama naqshadda oo dhan) heerkooda iyo geeskooda toosan: silsilad cabbirro dhinacyada aad doorato (`Sides`), hal cabbir guud dibadda, ballaca furaha kasta (masaafada u dhexeysa khadadka derbiga isku-tooska ah), dhexroor godad kasta oo cabbir u gaar ah, iyo `Grid` markii ay shidan tahay masaafada khadadka shabakadda. Cabbir horay jirtay looma sameeyo mar kale. Hal tallaabo oo ka noqo. Computer-kan ayaa lagu xisaabiyaa xeerar, iyada oo aan model la isticmaalin.

### GRIDMOVE

Magacyada gaaban: `GM`. Khad shabakad guurinta wuxuu qaadaa kooxda. {{cmd:GRIDMOVE}} wuxuu guurinayaa khad shabakad (khad lakab magaciisu leeyahay grid ama axis) iyo waxa ku xirmaya: derbiyada geesta ku dhammaanaya khadka way fidmaan si ay u raacaan, derbiyada ku dhex socda way guuraan oo dhan, tiirarka (tixraacyada bloogga iyo goobooyinka khadka ku jira), bubble-ka iyo calaamaddiisa way guuraan, cabbirrada barahoodu khadka ku jiro way cabbiraan masaafada cusub. Labo barood sii (qayb keliya oo khadka dhex mara ayaa tiriya) ama `Distance`. Hal tallaabo oo ka noqo wuxuu soo celinayaa dhammaantood. Computer-kan ayaa lagu sameeyaa xeerar.

### DETAILS

Magacyada gaaban: `DET`. Faahfaahin ku raadiya adigaa. {{cmd:DETAILS}} wuxuu ilaalinayaa faahfaahinta gaarka ah ee shirkadaada: `Add` wuxuu liiska ku daraa bloog naqshaddan, `List` iyo `Remove` way maareeyaan, `Find` wuxuu u kala sareeyaa waxa la doortay (ama waxa aad dhawaan sawirtay) iyada oo la eegayo ereyada lakabyada, magacyada bloogyada, qaababka hatch-ka iyo qoraalada oo lagu barbar dhigayo magaca iyo qoraalada faahfaahin kasta, sidaas darteed madaxa daaqada wuxuu helaa qaabka dhibaatada. Lambar iyo barab dooro si aad u dhigto. Haddii `Hint` la shido (sidoo kale Settings › CadCraft), wax faahfaahin la mid ah taariikhda ayaa ku muuqda bar-ka xaaladda. Liiska wuxuu ku kaydsan yahay browser-kan, computer-kan, liistaas ayaa la baadho. `Share` wuxuu ku dhigaa Documents folder-kaaga sidoo kale (`.cadcraft/firm-details.json`, bloog kasta naqshaddiisa): `Pull` wuxuu ku daraa waxa kooxdaada haysa oo adiga aanad haysan, `Push` wuxuu ku daraa waxa adiga haysa oo iyaga aanay haysan, `Both` labadaba, mana jirto wax laga saaro labada dhinacba. Marka hore fur Documents folder ({{cmd:DOCUMENTS}}); markii galkaas uu yahay galka Team Cloud Plan, kooxda oo dhan liiska ayay wada-wadaagaan. Shayga faahfaahinta ee guddiga Maktabadda wuxuu leeyahay badhanka **Ku dar faahfaahinta shirkadayda** oo ku dhiga liiska isku mid ah. Computer-kan ayaa lagu sameeyaa ereyo, iyada oo aan model la isticmaalin.

### SKETCHFIX

Magacyada gaaban: `SKF`. Sawirrada qalinka waxay noqdaan joometri sax ah. Riix oo jiid hal jiid gacan-sawir mar, (qalin, mouse ama farta), kadibna Enter. Jiid kasta waxa loo akhriyaa xariiq, goobo, qaanso, afar-geesood ama polilayn: khadad qiiso ku dhow iyo kuwa toosan waxay noqdaan kuwo sax ah oo toosan; jiid xidhan oo wareegsan waxay noqotaa goobo, jiid xidhan oo leh afar geeso xagal sax ah waxay noqotaa afar-geesood, dhammaadyada jiidyada waa la isku soo ururiyaa oo ku dhejiyaa dhammaadyada naqshadda ku jira. Hal tallaabo oo ka noqo. Computer-kan ayaa lagu sameeyaa xeerar, model la'aan.

### SCANATTACH and the scanned-drawing commands

Magacyada gaaban: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} ma leh. Sawir ayay ku shaqeeyaan, hal tallaabo oo ka noqo mid kasta. {{cmd:SCANATTACH}} wuxuu geliyaa PNG, JPEG, TIFF (hal bog ama dhammaan) ama bog PDF oo sawir ah. {{cmd:SCANSCALE}} wuxuu xaashiga miisaan u sameeyaa laba barood la doortay iyo masaafada run ah. {{cmd:SCANALIGN}} wuxuu u guurinayaa oo leexinayaa labada barood (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} wuxuu muujinayaa xagalka khadadka dheer ee xaashiga oo leexiya xaashiga markii aad `Accept` ama `Value` bixiso. {{cmd:SCANCLEAN}} wuxuu ka dhigaa madow iyo cad (`Threshold` Auto/Adaptive/Level, `Specks`) kadibna `Run`. {{cmd:SCANCROP}} wuxuu hayaa daaqad. {{cmd:SCANERASE}} wuxuu tirtiraa `Rectangle`, `Polygon` ama `Lasso`. {{cmd:SCANTRACE}} wuxuu raadiyaa khadad iyo qaansooyin lakab cusub (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) wuxuuna sheegaa waxa helay iyo waxa raster ahaan uu ka tagay. {{cmd:SCANINFO}} wuxuu liistaa faylka asalka ah iyo tallaabooyinka. {{cmd:RASTERSNAP}} wuxuu shidaa ama damiyaa qabashada khadadka xaashiyada skaanka. Eeg mawduuca Naqshadaha skaanka iyo raadinta.

### REGEN and REGENALL

Magacyada gaaban: `RE` {{cmd:REGEN}} ahaan, `REA` {{cmd:REGENALL}} ahaan. Dib u dhis waxa shaashadda lagu sawiray naqshadda: {{cmd:REGEN}} tab-ka aad eegayso (xaashiga, moodeelka ay daaqadaha muujinayaan sidoo kale), {{cmd:REGENALL}} taab kasta, qayb kasta oo shaashadda kala qaybsan iyo naqshad furan kasta. Isticmaal markii sawirku duugoobo kadib isbeddel script ah ama aad weyn, ama caawiye wax ka beddelay naqshadda; naqshadda laftiisa lama taaban, sidaas darteed waxba laguma noqon karo.

### NAMEDVIEW

Magacyada gaaban: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, kadibna magaca muuqaalka. `S` wuxuu kaydiyaa muuqaalka shaashadda, `W` daaqad aad doorato, `R` wuxuu muujiyaa muuqaal la kaydiyay, `D` wuu tirtiraa, `?` wuxuu liistaa muuqaalada taabkan. Magac jira hore dib ugu qoristu wuu beddelaa; isbeddel kasta waa hal tallaabo oo ka noqo. Muuqaalada waxay leeyihiin taabka ay ku kaydsan yihiin; faylalka DWG iyo DXF way ilaaliyaan (miiska VIEW); muuqaalada xaashi ayaa ku soo laabanaya xaashiga koowaad, sababtoo ah faylku ma sheego kan.

### UNDO and REDO

Magacyada gaaban: `U` {{cmd:UNDO}} ahaan; {{cmd:REDO}} ma leh. Sidoo kale {{key:Mod+Z}} iyo {{key:Mod+Y}}.

### LAYER

Magacyada gaaban: `LA`. Wuxuu gudbiyaa guddiga {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` ama magac (`?` wuxuu liistaa: Continuous, kuwa naqshadda, iyo DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE oo leh cabbirrada `2` (bar) iyo `X2` (laba jeer)). {{cmd:LWEIGHT}} (`LW`): culeyska xariiqda walaxda cusub mm ahaan, ama `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): miisaanka nooca xariiqda naqshadda (hal tallaabo oo ka noqo). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — waa isku mid badhanka {{ui:LWT}} ee bar-ka xaaladda. Eeg [Culeyska xariiqda iyo noocyada xariiqda](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, kadibna magaca cusub; walaxda ama tixraacyada way raacaan. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` ilaa {{key:Enter}}, kadibna `Select object on target layer or [Name]` iyo `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, kadibna `Y`: lakabka iyo walax kasta oo ku jirta way baxaan (ma aha layer 0, DEFPOINTS ama lakabka hadda). Hal tallaabo oo ka noqo mid kasta. Eeg [Habee naqshadda lakabyada](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lakabyada walxaha la doortay; sidoo kale guddiga {{ui:Layers}} ee menu-ga {{ui:Tools}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, kadibna {{key:Enter}}: lakab kasta oo kale wuu damaa. {{cmd:LAYUNISO}} wuu dib u shidaa. {{cmd:LAYOFF}} iyo {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (ama qabso), mar iyo mar; `U` wuxuu qaadaa midkii ugu dambeeyay, {{key:Enter}} wuu dhammaadaa. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} wuxuu shidaa lakab kasta, {{cmd:LAYTHW}} wuxuu dhalaalayaa lakab kasta. Amar kasta waa hal tallaabo oo ka noqo. Eeg [Habee naqshadda lakabyada](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} wuxuu bilaabaa naqshad madhan, {{cmd:OPEN}} wuxuu furaa DWG ama DXF, mid kastaa taabkiisa (naqshad cusub oo aan la taabin ayaa la isticmaalaa halkii taab cusub). Taab leh isbeddel aan la kaydin markii la xiro ayaa marka hore weydiinaya. Eeg [Shaashadda kala qaybi](topic:split-screen).

{{cmd:SAVE}} (magaca gaban `QSAVE`, sidoo kale {{key:Mod+S}}) wuxuu soo dejiyaa nuqul qaabka naqshadda: DWG haddii laga furay DWG, DXF haddii laga furay DXF. Naqshad cusub wuxuu isticmaalaa qaabkii ugu dambeeyay ee laga doortay Save as browser-kan, haddii kale DWG.

{{cmd:SAVEAS}} (sidoo kale {{key:Mod+Shift+S}}) wuxuu furaa wada-hadalka {{ui:Save a copy as}}: dooro {{ui:DWG}} (iyo {{ui:Version}}), {{ui:DXF R12}} ama {{ui:DXF 2000}}, kadibna {{ui:Save}}. Doorashadu waa ka hadhaa naqshaddan iyo naqshadaha cusub ee browser-kan.

{{cmd:DXFOUT}} mar walba wuxuu soo dejiyaa nuqul DXF R12 ah, isagoo aan beddelin qaabka {{cmd:SAVE}} isticmaasho.

Eeg [Faylalka: waxa furma, waxa kaydsamo](topic:files#saving).

### TOUR

Magacyada gaaban: `TUTORIAL`. Wuxuu bilaabaa socdaalka lix tallaabo ee naqshadda koowaad mar kale. Eeg [Bilaabid](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Magacyada gaaban: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Eeg [Dejinta](topic:settings#toolbar-position).

### COMMANDLINE

Magacyada gaaban: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: wuxuu ku xidhaa ama ka dhigaa mid xabbad ah khadka amarka, ka dhigaa hal khad, wuxuu weydiiyaa inta khadka taariikhda la muujinayo (0 ilaa 12), ama wuxuu furaa taariikhda. Eeg [Dejinta](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: bar-yada sare ee naqshadda sida ay ahaayeen, ama kooban. Eeg [Dejinta](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: tallaabada xagal polar ee khadadka {{ui:Polar}} raadiyaan (ka weyn 0, ilaa 180). Browser-kan ayaa lagu xasuustaa.

### UNITS

Magacyada gaaban: `UN`. Sida dherarka loo qoro oo loo qoro.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural iyo Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 ama 256)`. Kuwa kale: `Enter number of decimal places (0 to 8)`.

Cabbirrada cusub way raacaan. Hal tallaabo oo ka noqo. Waa isku mid {{ui:Length format}} iyo {{ui:Precision}} ee {{ui:Current settings}}; eeg [Fiit iyo inji](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Magacyada gaaban: `GDS`. Eeg IC layout (fayl GDSII stream): lab spike, ujeedadu waa eegista iyo cabbirka oo keliya.

- Doorasho faylka wuxuu aqbalaa fayl `.gds`; haddii dhowr top cell ka jiraan, `Enter the top cell to draw`.
- Lakab kasta iyo nooca xogta waxay noqdaan lakab naqshadeed (`GDS 1`, `GDS 2/5`), tixraacyada iyo arrays-ka waa la dhigaa siman, unugga isticmaalaha faylka (badanaa micrometres). Hal tallaabo oo ka noqo. Waxba lama simuleeyo ama hubiyo, faylkana lama qoro.

### DIAGRAM

Magacyada gaaban: `TEXTDIAGRAM`, `T2D`. Jaantar qoraal ka.

- Sanduuq qoraalka qaataa (ama hal khad oo leh `;` u dhexeeya beyanaadyada khadka amarka): Mermaid flowchart, PlantUML component diagram, D2 ama liis ka-ilaa-ka ah.
- `Specify the top left corner of the diagram`, kadibna `Specify the text height`.

Bloogyada iyo xiriiriyayaasha walxo caadi ah ayaa ku jira lakabka `Diagram`, markii uu dhammaado waa la doortaa. Hal tallaabo oo ka noqo. Eeg [Jaantarka qoraal ka sawir](topic:text-to-diagram).

### OLELIST

Magacyada gaaban: `OLES`. Walaxda OLE ee DWG qaadaa oo CadCraft aan lagu geli karin keligiis.

- Mid mid wuu liisanayaa: lambarka, nooca, cabbirka, haddii uu kaydiyay sawir.
- `Enter an option [Place/eXit] <eXit>`: Place wuxuu weydiiyaa lambarka, geeska hoose-bidix iyo ballaca, kadibna wuxuu sawiraa fraam sawirka ku jira. Hal tallaabo oo ka noqo; walaxda la kaydiyay lama beddelo. Eeg [Sawirrada](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Magacyada gaaban: `SHX`. Farshaxanadaada SHX.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} wuxuu akhrinayaa `.shx` kasta oo galka ku jira (CadCraft Studio; mar kasta bilowga), {{ui:Files}} wuxuu qaataa faylal la doortay (browser-ka), {{ui:Reverse}} wuxuu dejiyaa xarfaha farshaxan keliya dambe-hore. Qaababka qoraalka ee magacyada farshaxanada la soo rarnay waxay ku sawiraan. Eeg [Qoraal ku sawir farshaxanadaada SHX](topic:shx-fonts).

### LIMITS

Naqshadda sida weyn ay tahay loo qorsheeyay.

- `Specify lower left corner or [ON/OFF] <current>`: barab, `ON` ama `OFF`.
- `Specify upper right corner <current>`.

Shabakaddu waxay buuxisaa xadadka, {{cmd:ZOOM}} All wuxuu muujiyaa, xadadka ON ahaan, barab ka baxsan waa la diidaa (`**Outside limits`). Hal tallaabo oo ka noqo; DWG iyo DXF ayuu kaydiyaa. Eeg [Deji xadadka naqshadda](topic:drawing-limits).

### AUNITS

Magacyada gaaban: `ANGUNITS`. Sida xagasha loo muujiyo oo loo qoro.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ama labada kale `Enter precision` (0 darajo, 2 daqiiqo, 4 ilbiriqsi, 5 ilaa 8 tobanle oo ilbiriqsi).

Hal tallaabo oo ka noqo; DWG iyo DXF ayuu kaydiyaa. Isku mid {{ui:Angle format}} ee {{ui:Current settings}}. Eeg [Qor oo muuji jihooyinka iyo xagalka](topic:bearings-and-angles).

### APPLOAD

Magacyada gaaban: `AP`; ama {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. Wada-hadalka {{ui:Load applications}}: soo rar `.lsp` habraacyada iyo `.dcl` faylalka wada-hadalka, iska saar, dib u soo rar taariikhda, iyo Startup Suite. Amarrada `(defun c:NAME …)` ee habraacu sameeyo waxay u shaqeeyaan sida amarrada kale. Eeg [Soo rar codsiyada](topic:load-applications) iyo [Socod habraacyada LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ama {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) wuxuu furaa faylkaaga magacyada gaaban (khadad `ALIAS, *COMMAND`); {{ui:Save}} wuxuu dhaqmiyaa. {{cmd:REINIT}} mar kale wuu dhaqmiyaa. Eeg [Wax ka beddel magacyada gaaban ee amarrada](topic:command-aliases).

### LISPEDIT

Magacyada gaaban: `VLIDE`; ama {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Wuxuu furaa tafatiraha LISP, daaqad ku sii jirta dhinaca naqshadda.

- Qoraalka: lambarrada khadka, lammaanaha qawsiga ee kursoorka ku jira ayaa lagu calaamadeeyaa (casaan haddii aanu lahayn), {{key:Enter}} wuxuu soo xidhaa khadka cusub qawsiga furan ee hoostiisa, {{key:Tab}} wuxuu qoraa laba meel bannaan, {{key:Esc}} wuxuu ka baxaa qoraalka.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): wuxuu akhrinayaa qaab kasta, sida {{cmd:APPLOAD}} faylka uu sameeyo, wuxuuna sameeyaa amarradooda `c:`. Faylku wuxuu ka muuqdaa liiska {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): wuxuu fuliyaa qaababka la doortay, ama qaabka kursoorku ku jiro.
- {{ui:Stop}}: wuxuu joojiyaa habraac socda.
- {{ui:Console}}: waxa habraacu daabacay, iyo qalad kasta khadkiisa; riix qalad si aad u gudbto. Qoraalku wuxuu fuliyaa hal qaab sare mar, sidaas darteed khadku waa qaabkaas, ama gudahiisa khadka wicitaanka shaqada uu qaladku magacowdo.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): fayl `.lsp`. Qoraalku sidoo kale browser-kan ayaa lagu kaydiyaa, sidaas darteed daaqadda xidhida ma lumiyo.
- Dhinaca qoraalka: shaashadaha uu habraacu qeexay, kuwa uu wiiciyo oo LISP-kan weli ma haysto, kuwa uu wiiciyo oo aan ku qeexnayn ama lagu dhisin, iyo liisaska buuxa ee waxa la dhisay iyo waxa aan la dhisin.

Qoraal qawsi aan la xidhin, ama xarig aan dhammaad lahayn, lama fulin: khadka ayaa la magacaabaa. Ma jiro debugger tallaabo-tallaabo ah, breakpoints ama daaqad watch ah. Eeg [Socod habraacyada LISP](topic:run-lisp).

### HELP

Magacyada gaaban: `?`. Wuxuu daabacaa amarka kasta, magacyadooda gaaban iyo sharaxaad hal khad ah taariikhda khadka amarka. Ma furo caawintan: riix {{key:F1}} ama riix {{ui:Help}} taas.

## Weydiinta doorashada walaxda

Weydiinta `Select objects` kasta: riix walxo, jiid daaqado (bidix ilaa midig) iyo isku-gudubyo (midig ilaa bidix) laba riix, ama riix oo jiid lasso ({{key:Space}} intii aad jiidayso: daaqad, isku-gudub, derbi), {{key:Shift}}+riix si aad u ka saarto, kadibna {{key:Enter}} si aad u dhammayso. Waxa kale oo aad qori kartaa `ALL` (wax kasta), `L` (walaxda ugu dambeysay), `P` (Previous: waxa amarka ugu dambeeyay isticmaalay), `F` (Fence: walaxda ay ku gudubto khad barab), `W` (Window), `C` (Crossing), `R` (Remove mode: riix waxaa laga saaraa walax; weydiintu wuxuu akhrinayaa `Remove objects`) iyo `A` (Add again). `?` wuxuu liistaa. Lama muujiyo weydiinta. {{key:Tab}} walxaha isku dul-saaran wuxuu iftiimiyaa kan xiga; riix si aad u doorato. Eeg [Doorashada walaxda](topic:select-objects).

### ACCESS

Magacyada gaaban: `AX`. Naqshadeynta aan aragga lahayn. {{cmd:ACCESS}} wuxuu shidaa ama damiyaa Access (`On`, `Off`) wuxuuna beddelaa codadka qabashada (`Sound`) iyo amarrada codka (`Voice`); marka hore wuu sheegaa xaaladda. Access markii uu shidan yahay, amar kasta iyo natiijo kasta waxa lagu hadlaa akhrinta shaashadda, qaybta naqshadda waxay leedahay kursoor kiiboodh. Mawduuca caawinta "Naqshadeynta aan aragga lahayn" wuxuu leeyahay furayaasha.

### DESCRIBE

Magacyada gaaban: `DESC`. Sheeg waxa naqshaddu ku jiro: walax intee le'eg, nooce maxay yihiin, cabbirkoodu intee le'eg yahay, lakab intee le'eg, maxaa la doortay. Akhri keliya; waxba ma beddelo.

### WHEREAMI

Magacyada gaaban: `WHERE`. Sheeg meesha kursoorku joogo, unugyada naqshadda.

### NEARBY

Sheeg waxa kursoorka ku dhow, kii ugu dhow marka hore, mid kastaa masaafadiisa iyo dhinaca uu ku yaal.

### SAYSEL

Sheeg waxa la doortay, mid kasta hal jumlad (dherarka khadka, dhammaadyada iyo xagalka; dhexroorka goobada iyo dhexda; qoraalka sida uu qoran yahay).

### VOICE

Shid ama dami amarrada la hadlo. Computer-kan ayaa lagu aqoonsadaa; halkii browser-ku aanu ku samayn karin, codku wuu damaa ilaa aad dooratid adeegga online ee browser-ka Settings-ka.

### TOUCHCROSSHAIR

Magacyada gaaban: `TCX`. Xarriiqda kala-fogaanta ee naqshadaynta farta, si ay farta aan u qarin barta aad doorato. Intii uu shidan yahay, hal farta naqshadda ku taabata ma doorto: waxay dhaqaajinaysaa xarriiqda ka sarraysa farta oo dhinac ka. Qabashada iyo raadinta waxay raacaan xarriiqda. Farta ka qaadista ma doorto wax wuxuuna ka tagaa xarriiqda meeshii ay joogto. Si aad u doorato, riix badhanka {{ui:Click}} ee geeska naqshadda, ama taabo meel kasta naqshadda farta labaad. Hay {{ui:Click}} intaad dhaqaajinayso farta kale si aad u jiido (daaqad xulasho, lasso, grip). Farta la hayo oo aan dhaqaajin, ama badhanka {{ui:Enter}}, waa Enter. Laba farood waa pan iyo zoom sida hore. Qaybta hoose iyo qaybta dhinaca fog ee dambe xarriiqdu waxay u soo dhowaataa farta, si qayb kasta oo naqshadda ah la gaari karo. Qalinka iyo mouse-ku had iyo jeer si toos ah ayay u doortaan.

{{cmd:TOUCHCROSSHAIR}} wuxuu sheegaa xaaladda wuxuuna weydiinayaa `ON`, `OFF`, `Auto` (oo keliya meelaha farta kaliya tahay mu'ashirka, sidaas darteed way damaysaa computer-ka mouse-ku ku jiro), `Distance` (inta ay xarriiqdu farta ka fogaatay, 24 ilaa 240 pixel) ama `Side` (`Left`: sare iyo bidix, gacanta midig; `Right` gacanta bidix; badhamada way u guurayaan geeska kale). Isla doorashooyinka waxay ku jiraan Settings › CadCraft, aaladda shaashadda taabta leh bar-ka xaaladda waxay leedahay wiishka {{ui:Offset crosshair}}. Doorashooyinka browser-kan ayaa lagu hayaa.

### WHOHAS

Wuxuu sheegaa cidda naqshad furtay. CadCraft Studio computer-ka, markii la furayo DWG ama DXF wuxuu ku qoraa fayl quful yar oo dhinaceeda (`Plan.dwg.cclock`: cidda, tan iyo goorta, noocee), wuxuu cusboonaysiiyaa daqiiqad kasta intii naqshaddu furan tahay, wuuna tirtiraa markii la xiro. Markii la furo naqshad uu qof kale furay, wuxuu sheegaa cidda iyo tan iyo goorta, wuxuuna soo jeedinayaa {{ui:Open read-only}} (Save ka dib magac cusub ayuu weydiinayaa), {{ui:Open anyway}} (qofka kale wuxuu helayaa cusboonaysiinta xigta) ama {{ui:Cancel}}. Faylka qof kale furay ku qorista weydiinta ayaa hore. Quful aan la cusboonaysiin shan daqiiqo waxaa lagu sheegaa stale: nuqulka kale wuu xiray iyada oo aan la kaydin ama computer-ku wuu seexday.

{{cmd:WHOHAS}} wuxuu weydiinayaa `Current` (naqshadda furan), `File` (dooro mid), `FOlder` (dooro galka: naqshad kasta oo ku jirta furan meel ka mid ah ayaa la liisanayaa), `Path` (qor jid buuxa), ama `Name` (magaca kuwa kale arkaan; magaca akoonkaaga markaad soo gasho). Studio waxay gaari kartaa galalka kaliya aad dooratay: naqshad laga furay gal aan la dooran karin wuxuu hal mar sheegaa inuusan naqshadda ku qori karin inay furan tahay; `FOlder` wuxuu doortaa galka, kadibna quflku wuu shaqeeyaa meeshaas. Quful waa qoraal dadka u ah, ma aha derbi: barnaamij kale wali wuu qori karaa faylka. Browser-ka galal ma jiraan oo amarku wuu sheegaa.

### OVERKILL

Wuxuu tirtiraa walaxda isku mid ah wuuna nadiifiyaa khadad iyo qaansooyin isku dul-socda, naqshadaha la yimaadda xarriiqyo labo ah. `Select objects to clean up`, {{key:Enter}}, kadibna {{key:Enter}} mar kale si aad u nadiifiso iyada oo dejinta la muujinayo, ama mid marka hore beddel:

- `Tolerance`: sida ay u dhow yihiin laba qiime si ay isku mid u tirin (0.000001 bilowga; 0 macnaheedu waa isku mid si sax ah).
- `Ignore`: guryaha laba walax oo isku mid ah laakiin kala duwan ka dhex jiri kara. Magac qor si aad u beddesho: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ama `None` / `All`. {{key:Enter}} markii aad dhammayso.
- `Overlap`: shid ama dami. Markii uu shidan yahay, khadad isku mid ah oo dul-socda waxay noqdaan hal khad (khad ku jira khad kale waa la tirtiraa), qaansooyin dul-socda isla goobo waxay noqdaan hal qaanso; qaansooyin wareeg buuxa xidha waxay noqdaan goobo, qaanso ku jirta goobo waa la tirtiraa.
- `Ends`: shid ama dami. Markii uu shidan yahay, khadad isku mid ah iyo qaansooyin isla goobo ah oo kaliya dhammaad-ilaa-dhammaad isku taabanaya waxay noqdaan hal qayb.

Nooc walax kasta waa la hubiyaa nuqul u eg; laba walax waa nuqul marka joometrigoodu isku mid yahay dulqaadka gudihiisa, lakabkooduna, midabkooduna, nooca xariiqdooda, cabbirka nooca xariiqda, ballaca xariiqda, qaroodda, hufnaanta iyo dhererka isku mid yihiin (ka sokow kuwa aad ka tagtay). Khadad iyo polilaynno furan waxay sidoo kale isku mid yihiin marka lagu sawiro dhinac kale. Walaxda ka horreysa ee habka sawirka waa ay joogtaa, waxayna hayaa guryaheeda. Amarku wuxuu sheegaa inta walax ee uu hubiyay iyo inta uu tirtiray: nuqullo, qaybo isku dul-saaray oo la isku daray, qaybo dhammaad-ilaa-dhammaad lagu xidhay. Hal {{cmd:UNDO}} wuxuu soo celinayaa dhammaantood. Dejintu waxay joogtaa ilaa aad xirto daaqadda naqshadda.

Waxba ma taabto: walxaha lakabyada xidhan iyo walxaha qarsan. Ma isku dhejiso xariiqyada leh qaro (Z) (nuqullada saxda ah ee ay leeyihiin way tirtiraan), kuma taabto qaybaha khadka gudaha polilayn (ma yaraanayaan), iyo khadka ku jira qayb polilayn, iyo polilayn xidhan oo dib ugu jiidday.

### DRAWORDER

Wuxuu beddelaa walaxda la rasamayo hore. `Select objects to re-order`, {{key:Enter}}, kadibna `Above objects`, `Under objects`, `Front` ama `Back` ({{key:Enter}} = `Back`). `Above objects` iyo `Under objects` waxay weydiiyaan walaxda tixraaca: xulashadu waxay u gashaa hortiisa midka ugu horreeya ee ka mid ah, ama gadaashiisa midka ugu dambeeya. Walaxda la doortay waxay ilaalinayaan nidaamkooda ka dhexeeya. Hal tallaabo oo ka noqo. Nidaamka waa la kaydiyaa naqshadda DWG iyo DXF, halkaas oo uu yahay nidaamka walaxda loo qoro.

Shaashadda CadCraft wuxuu marka hore sawiraa aagagga buuxa (hatch-yada adag, polilaynno ballaaran, masks), kadibna khadadka, kadibna qoraalka, sidaas darteed qoraalku had iyo jeer wuxuu ka akhrin karaa buuxin; nidaamka sawirku wuxuu muuqdaa walxaha buuxan iyo sawirrada. Barnaamijyada kale ee furaya faylka wuxuu sawiraan walax kasta nidaamka la kaydiyay.

### TEXTTOFRONT

Qoraalka, cabbirrada iyo hoggaanka keenaysa hortiisa wax kasta oo kale meesha furan: `Text`, `Dimensions`, `Leaders` ama `All` ({{key:Enter}} = `All`). Hal tallaabo oo ka noqo. Wuu sheegaa marka aanu jirin, ama horay hortiisa ay ku jiraan.

### HATCHTOBACK

Dir hatch kasta oo meesha furan wax kasta gadaashiisa, si buuxinta ay u joojiso inay qarinayso khadadka iyo qoraalka faylka kaydsan. Weydiin ma jiro. Hal tallaabo oo ka noqo.

### ISOLATEOBJECTS

Magacyada gaaban: `ISOLATE`. Kaliya walaxda la doortay muuji: wax kasta oo kale meesha furan ayaa ka baxa aragga ilaa {{cmd:UNISOLATEOBJECTS}}. {{cmd:LAYISO}} ka duwan, waxay ka shaqeysaa walxaha aad doorato, lakabkoodu ha ahaadee, wax lakabka beddelo ma jiro. Walxaha qarsan lama sawiro, lama doorto, qabasho lama helo, weyn lama dhigo, ama lama daabacо, amarrada qaadaya `ALL` way dhaafaan. Waxa aad sawirto intii walaxdu la isoleeyay ayaa muuqda sida caadiga ah.

Tani waa fadhiga keliya: waxba kuma kaydsanto naqshadda, ma aha tallaabo oo ka noqo, naqshadda mar kale furtaana wax kasta ayuu muujinayaa. Intii walxo qarsan yihiin bar-ka xaaladda wuxuu muujiyaa badhan leh tiradooda; riix si aad mar kale u muujiso.

### HIDEOBJECTS

Wuxuu qariyaa walaxda la doortay ilaa {{cmd:UNISOLATEOBJECTS}}. Isla xeerarka {{cmd:ISOLATEOBJECTS}}: fadhiga keliya, lama kaydiyo, ma aha tallaabo oo ka noqo.

### UNISOLATEOBJECTS

Magacyada gaaban: `UNISOLATE`, `UNHIDE`. Mar kale wuxuu muujiyaa walax kasta oo {{cmd:ISOLATEOBJECTS}} ama {{cmd:HIDEOBJECTS}} qariyay, wuxuuna sheegaa inta soo noqotay.

### LAYLOCKFADE

Wuxuu dejiyaa sida walaxda lakabyada xidhan u muuqdaan iyo haddii riix ay gaari karto. Wuxuu sheegaa xaaladda hadda, kadibna wuxuu qaataa:

- lambar 0 ilaa 90: inta ifidda boqolkiiba (50 bilowga). 0 wuxuu damiyaa ifidda.
- `ON` ama `OFF`: shid ama dami ifidda, tiradeeda ilaalinta.
- `Pick`, kadibna `Yes` ama `No`: ma riix wuxuu doorti karaa walxaha lakabyada xidhan intii amar aan socon? `No` (caadiga): lama doorto gabi ahaanba. `Yes`: riix ama daaqad ayaa doorta si ay Properties u muujiyaan; weli lama beddeli karo, `Select objects` amar kasta ma qaadana.

Barabaha qabashada walxaha waxay helaan walxaha lakabyada xidhan labadaba. Daabacaadu had iyo jeer ma ifiyo. Labada dejimba waa kuwaaga, ma aha kuwa naqshadda, waxaana sidoo kale ku jira {{ui:Settings}} hoosta {{ui:Locked layers}}.

### BURST

Wuxuu kala jabaa tixraacyada bloogga, wuxuuna ilaaliyaa waxa sifooyinkoodu sheegayaan. `Select block references to burst`, {{key:Enter}}: tixraac kasta waxa lagu beddelaa walxaha bloogga, qiime kasta oo sifo muuqata wuxuu noqdaa qoraal caadi ah lakabka sifadaas u gaar ah (sifo lakabka 0 ku jirta waxay gaartaa lakabka tixraaca, sida walaxda kale ee bloogga ee lakabka 0). Sifooyinka aan muuqan waa la tirtiraa. Bloog bloog gudaha ku jira wuxuu ahaan doonaa tixraac bloog. Hal tallaabo oo ka noqo; wuxuu sheegaa tixraacyada la kala jabay iyo qiimayaasha sifooyinka loo beddelay qoraal.

Wuu diidaa naqshad xidhan magacyada (ku dhig adigoo horay u furaya, ama ka koobiyee {{cmd:NCOPY}}), wuxuuna ka tagaa walxaha kale ee la doortay. Tixraacyada bloogga {{cmd:EXPLODE}} wuxuu siiyaa isku walax; {{cmd:BURST}} waxa uu qaataa tixraacyada bloogga oo keliya wuxuuna tirinayaa qoraalka sifada.

### TXT2MTXT

Magacyada gaaban: `T2M`. Wuxuu isku xidhaa qoraalada hal khadka ah qoraal fiqrad ah. `Select single-line text to join`, {{key:Enter}}, kadibna `Paragraph` (khadadku waxay isku dhex mari doonaan oo qaybaan ballaca khadka ugu ballaaran) ama `Lines` (qoraal kasta wuxuu ahaan doonaa khad u gaar ah); {{key:Enter}} wuxuu qaataa midka la isticmaalay ugu dambeeyay. Khadadka waxaa lagu dalbaa kor ilaa hoos, kadibna bidix ilaa midig, iyadoo raacaysa jihada qoraalka sare. Fiqraddu waxay ka dhex dhacdaa geeska kore ee bidix ee qoraalka sare, waxayna qaadaa dherarkiisa, wareejintiisa, qaabkiisa, lakabkiisa iyo midabkiisa. Hal tallaabo oo ka noqo.

Qoraalka hore u ah fiqrad, qoraalka madhan iyo walxaha kale ee xulashada ku jira way joogsadaan, amarkuna wuxuu sheegaa inta ay tahay.

### NCOPY

Wuxuu nuqlaa walaxda tixraaca bloogga ama naqshadda xidhan naqshadda gudaheeda, iyada oo aan wax la kala jabin. `Pick an object inside a block reference or a linked drawing`: walaxda ugu dhow riixdaada ayaa lagu nuqlaa meesha ay ka muuqato, iyada oo aan loo eegin inta bloog ee ay ku qoto dheer tahay; riix mid kale, kadibna {{key:Enter}}. Ka dib `Base point to move the copies`: {{key:Enter}} wuxuu ka tagaa meeshooda, ama bixi barta saldhigga iyo barta labaad. Amarka oo dhan waa hal tallaabo oo ka noqo.

Nuqul kasta wuxuu qaataa lakabka uu ka muuqdo: walax lakabka 0 ku jirta bloog gudihiisa waxay gaartaa lakabka tixraaca ay ku jirtay, midabka ByBlock wuxuu noqdaa midabka tixraacaas. Naqshad xidhan ka, lakabka `Plan|Walls` wuxuu noqdaa `Plan$0$Walls` (magaca xiriirka siiyay), oo lagu sameeyay midabka, nooca xariiqda iyo culeyska xariiqda lakabkaas xidhan. Qiimaha sifada waxaa loo nuqlaa qoraal. Tixraacyada bloogga ee lakabyada xidhan lama dooran karo.

### FLATTEN

Wuxuu dejiyaa dherarka (Z) iyo qaroodda walaxda la doortay 0. `Select objects to flatten`, {{key:Enter}}. Waxa kale oo uu fidsanayaa walaxda ku jirta qeexitaannada bloogyada xulashadu isticmaasho (iyo bloogyada gudahooda), sidaas darteed tixraac kasta oo bloogyadaas wuu beddelaa; naqshadaha xidhan waa la tegaa sida ay yihiin. Hal tallaabo oo ka noqo; wuxuu sheegaa inta walax la beddelay, wuuna sheegaa marka aan dherar ama qaro lahayn.

Waxa CadCraft ilaaliya ee cabbirka saddexaad naqshad 2D ah waa: dherar goobooyinka, qaansooyinka, ellipse-yada, barabaha, qoraalka, tixraacyada bloogga, hatch-ka, hoggaanka iyo polilaynnada (sare-ka ama elevation-kooda), dherar dhammaad kasta khadka, iyo qaro khadadka, goobooyinka, qaansooyinka, polilaynnada, barabaha iyo qoraalka, sida faylku u haystay. {{cmd:FLATTEN}} wuxuu saxda ka saaraa kuwaas oo keliya. Ma taabto modelka 3D ee tab-ka 3D, face-yada 3D ama jirmaallada, walax ku jirta diyaarad janjeeran oo hore loo keenay diyaarada naqshadda markii faylka la furay.

### BREAKLINE

Wuxuu sawiraa xariiq calaamad jejeb ah, muuqaal gaaban oo la gooyay. Wuxuu sheegaa cabbirka hadda iyo kordhinta, kadibna `First point of the break line` (ama `Size` / `Extension` si marka hore ay u beddelaan), `Second point`, iyo `Where the break symbol sits`: riix khadka dhexdiisa, ama {{key:Enter}} dhexda. Natiijadu waa hal polilayn lakabka hadda: khadka, oo ka dhex maraya barta kasta kordhinta, leh xariiq Z-qaab ah oo dherarkeedu u dhigan yahay cabbirka oo nus ka dheer.

`Size` iyo `Extension` waa la xasuustaa sidii dejintaadii (cabbirka wuxuu bilaabaa laba jeer dherarka qoraalka cabbirka marka uu miisaan cabbirka; kordhintu nus cabbirka). {{key:Enter}} wuxuu soo celinayaa amarka.

### AUDIT

Wuxuu hubiyaa naqshadda furan in ay dhaawac ka jirto oo wuu hagaajiyaa. {{cmd:AUDIT}} wuxuu eegaa walax kasta oo moodeelka ku jirta, xaashiyada iyo bloogyada gudihiisa, iyo miiska lakabyada, wuxuuna liistaa waxa uu helay nooca ahaaneed:

- tirooyin aan dhamaad lahayn ama aad u weyn;
- walxo aan cabbir lahayn: khad aan dherar lahayn, goobo aan nuuf-dhexroor lahayn, polilayn leh hal meel, qoraal aan xaraf ama dherar lahayn, tixraac bloog oo miisaan eber ah;
- walax lakab aanu naqshaddu lahayn; tixraacyo bloog aan jirin; magacyada qoraalka iyo qaababka cabbirka iyo nooca xariiqda aan naqshadda ku jirin;
- bloogyo naftooda ku jira, si toos ah ama bloog bloog kale marka loo maro;
- walxo aqoonsi, furaha ama faylka wadaagaan;
- cabbirro aan barabkii ay ka cabbiraan lahayn, iyo hatch-yo ay xadkoodu aan qaab xidhan ahayn.

Kadibna wuxuu weydiinayaa `Fix them? [Yes/No]`. `No` waxba ma beddelo. `Yes` wuxuu wax walba hagaajiyaa hal tallaabo oo ka noqo: waxa aan la sawiri karin waa la tirtiraa (tirooyin xun, cabbir la'aan, bloog maqan, cabbir jabsan, hatch aan xad wax ku ool ahayn, tixraaca goobo bloogyada wareegsan ku xidha); lakab maqan waa la sameeyaa; magacyada qaabka iyo nooca xariiqda aan la garanayn waxay dib ugu noqdaan caadiga ah; furaha wadaagga waa la beddelaa. Waxay daabacaa inta walax la tirtiray iyo inta la hagaajiyay. Isla natiijooyinka ayaa muuqda guddiga Dhibaatooyinka, mid kastaa leh {{ui:Repair}} gaar ah.

Waxba ma diido, laakiin wuxuu hubiyaa oo keliya waxa CadCraft-ka laftiisa sawiro: xogta loo kaydiyay barnaamijyada kale (jirmaallada 3D, walxaha OLE) lama furo.

### RECOVER

Wuxuu furaa DXF ama DWG dhaawacmay. {{cmd:RECOVER}} wuxuu weydiiyaa faylka, wuxuu akhriyaa waxa la akhrin karo halkii uu diidi lahaa faylka, wuxuu liistaa waxa uu ka boodey ama malaynayay, kadibna wuu hubiyaa oo hagaajiyaa naqshadda sida {{cmd:AUDIT}} sameeyo `Yes`.

- DXF: khadadka aan qayb ka ahayn lambar-qiime ah waa la boodaa ilaa ay mar kale isku khaseeyaan; qaybta aan dhammaad lahayn waa la xidhaa; faylka la jarey waxa la akhriyaa ilaa jarka; DXF binary-ga la jarey waxa la akhriyaa ilaa qiimaha dhammaystiran ee ugu dambeeya. Marka qayb, bloog ama walax weli la akhrin karin, waa la dhaafaa oo magaca la sheegaa, akhrintuna waxay sii socotaa dhinacdeeda.
- DWG: walxaha ku guuldareystay hubinta ama aan la furi karin waa la dhaafaa, liiska walxaha la waayay waa dib loo dhisaa iyada oo la maraayo xogta walxaha.

Faylka diskada ku jira ma beddelo. Naqshadda la soo kabsaday waxay furmaysaa iyadoo aan la kaydin: u kaydi magac cusub. Faylka aan wax laga akhrin karin ole waa la diidaa, sababtana waa la sheegaa.

### LEGACYTEXT

Wuxuu u beddelaa qoraalka lagu qoray farshaxanada Vietnam-ka ee 8-bit-ka hore Unicode. Magacyada gaaban `TEXTTOUNICODE` iyo `VNTEXT`.

Naqshadaha Vietnam-ka ee hore qoraalkooda waxay ku qoran yihiin xarfo Galbeed ah oo kaliya farshaxanku Vietnam ka dhigo: qoraalka TCVN3 ee farshaxanada ABC (`.VnTime`, `.VnArial`, iyo farshaxanada xarfaha weyn ee magacyadooda ku dhammaada `H`), iyo qoraalka VNI ee farshaxanada VNI (`VNI-Times`). CadCraft wuxuu muujiyaa qoraalkaas sida uu u akhrinayo markii naqshadda la furo, iyadoo farshaxanka qaabka qoraalka, walaxda, ama shaqada qoraalka fiqrad ku jira ku salaysan; faylku wali wuxuu hayaa xarfaha hore.

{{cmd:LEGACYTEXT}} wuxuu sheegaa inta qoraal ee uu helay nooc kasta, kadibna wuxuu weydiinayaa `Convert … to Unicode?`. `Yes` wuxuu dib u qoraa midkoodba (moodeelka, xaashiyada, bloogyada, qiimayaasha sifooyinka iyo qeexitaannadooda) wuxuuna siiyaa qaababka qoraalka farshaxan Unicode (Times New Roman, Arial ama Courier New sida nooca farshaxanka hore), hal tallaabo oo ka noqo. Qaabaynta gudaha qoraalka fiqrad waa la ilaalinayaa.

Marka uusan qoraal kasta isticmaalin farshaxan la aqoonsan karo (qaab lumiyay magaciisa farshaxanka), wuxuu weydiinayaa `Read selected texts as [Tcvn3/Vni/None]`: dooro nooca qoraalka oo dooro qoraalka. Qoraalka horay u ah Unicode ma beddelo. Qoraalka cabbirka iyo qoraalka hoggaanka bloogga ma beddelmaan.
