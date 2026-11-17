---
title: Sanggunian ng command
summary: Bawat command sa CadCraft drafting app, kasama ang mga alias nito, ang mga tanong na itinatanong nito, mga opsyon at default.
keywords: mga command, mga alias, listahan ng command, area, perimeter, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

I-type ang pangalan ng command o alias at pindutin ang {{key:Enter}} o {{key:Space}}. Hindi mahalaga ang malaki o maliit na letra, at hindi pinapansin ang nangungunang `_`, `-`, `.` o `'`. I-type ang `HELP` (o `?`) para mag-print ng maikling listahan ng bawat command sa command line history; pindutin ang {{key:F1}} para sa help na ito.

Paano basahin ang mga prompt: nasa square bracket ang mga opsyon, at pinipili mo ang isa sa pag-type ng malalaking letra nito (`D` para sa Diameter). Nasa angle bracket ang default; pindutin ang {{key:Enter}} para tanggapin ito. Kung saan hinihingi ang punto, maaari kang mag-click o mag-type ng alinman sa mga format sa [Pagpasok ng coordinate at distansya](topic:coordinate-entry). Kung saan hinihingi ang distansya, maaari kang mag-type ng numero o mag-click ng dalawang punto.

Ang pagpindot sa {{key:Enter}} kung saan kailangan ang punto o object, at walang default, ay tinatapos ang command. Kinakansela ito ng {{key:Esc}}. Anumang ginawa ng command ay isang undo step.

## Draw

### LINE

Aliases: `L`. Mga tuwid na segment, bawat isa ay sariling object.

- `Specify first point` (Enter: magsimula mula sa huling punto na ibinigay mo)
- `Specify next point [Undo]`, inuulit. Pagkatapos ng dalawang segment: `[Undo/Close]`.
- Binabawi ng `U` ang huling segment, isinasara ng `C` sa unang punto at tinatapos. Tinatapos ng Enter.

### PLINE

Aliases: `PL`. Isang polyline ng linya at arko na segment.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close kapag may dalawang segment na)
- Lumilipat ang `A` sa arko: `Specify endpoint of arc [Line/CLose/Undo]`. Bawat arko ay nagpapatuloy na tangent sa naunang segment. Bumabalik ang `L` sa linya, nagsasara ang `CL` gamit ang arko.
- Tinatapos ng Enter; nananatiling bukas ang polyline.

### CIRCLE

Aliases: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; ang `D` ay nagtatanong ng `Specify diameter of circle`.
- `2P`: dalawang dulo ng isang diameter. `3P`: tatlong punto sa bilog.
- `T` (ang command na `TTR` din, at {{ui:Draw}} › {{ui:More}} › {{ui:Bilog: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, ang pangalawa, pagkatapos ang radius (Enter: ang huli). Hinahawakan ng bilog ang dalawang object (linya, arko, bilog, segment ng polyline, pati sa loob ng mga block); sa mga bilog na ganoon, ang isa na pinakamalapit sa iyong pinili. "Circle does not exist" kapag walang akma.
- `TTT` (o {{ui:Draw}} › {{ui:More}} › {{ui:Bilog: Tan, Tan, Tan}}): tatlong object; ang bilog na humahawak sa lahat ng tatlo, ang pinakamalapit sa iyong pinili (tatlong linya ay nagbibigay ng panloob na bilog o panlabas, depende kung saan ka pumili).

### ARC

Aliases: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: isang arko sa tatlong punto.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Tumatakbo ang arko nang counterclockwise mula start hanggang end.

### RECTANG

Aliases: `REC`, `RECTANGLE`. Isang saradong polyline.

- `Specify first corner point`, `Specify other corner point`. I-type ang `@width,height` para sa ikalawang sulok.

### POLYGON

Aliases: `POL`. Isang regular na polygon bilang saradong polyline.

- `Enter number of sides <4>` (3 hanggang 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: i-click o i-type ang punto; ang distansya nito ang nagtatakda ng laki, at ang direksyon nito ang nagpipihit ng polygon.

### ELLIPSE

Aliases: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, pagkatapos ang distansya sa kabilang axis.
- `I` (`Isocircle`, habang naka-on lang ang {{cmd:ISODRAFT}}): center, pagkatapos radius o `Diameter`: ang ellipse na ipinapakita ng bilog sa kasalukuyang isometric plane.

### HATCH

Aliases: `H`, `BH`, `BHATCH`; o {{ui:Hatch}} sa toolbar. Unang iniimprenta ang kasalukuyang pattern, scale at anggulo.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, inuulit (`Undo` kapag may lugar na): bawat click ay nagdaragdag ng saradong lugar sa paligid nito, kasama ang mga saradong hugis sa loob bilang island. Gumagawa ang Enter ng isang hatch ng lahat ng ito.
- `S`: `Select closed objects` (saradong polyline, bilog, saradong ellipse).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): ang fill ay gradient sa halip na pattern. Tingnan ang {{cmd:GRADIENT}} para sa mga tanong nito.

Tingnan ang [Hatch at fill area](topic:hatch).

### GRADIENT

Aliases: `GD`. Pinupuno ang lugar ng gradient ng isa o dalawang kulay. Unang tinatanong ang gradient, pagkatapos ay nagpapatuloy gaya ng ginagawa ng {{cmd:HATCH}} (`Pick internal point`, `S` para sa saradong object, {{key:Enter}} para tapusin).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, inuulit; ini-print nito ang gradient ayon sa kasalukuyang ayos bawat pagkakataon.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, o isa sa mga ito na baligtad (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Sapat na ang mga unang letra.
- `O`: isang kulay, pagkatapos ang tint nito mula 0 hanggang 1 (0 ay ginagawa itong itim, 0.5 ang mismong kulay, 1 ay ginagawang puti). `TW`: ang una at ang pangalawang kulay. Ang kulay ay numero mula 1 hanggang 255, tatlong numero gaya ng `255,128,0`, o `#rrggbb`.
- `A`: ang anggulo kung saan tumatakbo ang gradient. `C`: centered Yes o No (ang No ay inililipat ang gitna ng gradient sa isang tabi).
- Tumatanggi ito sa kulay o uri na hindi nito kilala, at sa tint na nasa labas ng 0 hanggang 1.

Ang {{cmd:HATCHEDIT}} `G` at Properties (Gradient) ay nagbabago ng gradient sa susunod, o ginagawang gradient ang anumang hatch. Iginuguhit at iniimprenta ang gradient. Pinapanatili ito ng DWG 2004 at pataas bilang tunay na gradient hatch; pinapanatili ito ng DXF 2000 at DWG 2000 para sa CadCraft, at ang ibang programa ay nakakakita ng solid fill sa unang kulay.

### HATCHGENERATEBOUNDARY

Aliases: `HGB`. Muling ginagawa ang boundary mula sa hatch na nawala ito. `Select hatches` (o piliin muna sila), pagkatapos `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Bawat loop ng hatch ay nagiging saradong polyline sa layer ng hatch; ang mga bagong polyline ay nananatiling napili. Ang kurbadong gilid ay bumabalik bilang maiikling tuwid na piraso na pinapanatili ng hatch.
- Sa Yes, susunod ang hatch sa bagong boundary nito, gaya ng hatch na ginawa gamit ang {{cmd:HATCH}}. Isang undo step.
- Sinasabi nito kapag walang hatch na napili.

### POINT

Aliases: `PO`; o {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Mga point object, isa sa bawat click, hanggang Enter.

- `Specify a point`

### XLINE

Aliases: `XL`; o {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Mga construction line, walang hanggan sa magkabilang direksyon. Tingnan ang [Construction line at ray](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, pagkatapos `Specify through point` para sa bawat linya, hanggang Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; ang `R` ay nagtatanong muna ng `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, pagkatapos `Specify angle end point` para sa bawat linya.
- `O`: `Specify offset distance [Through] <Through>`, pagkatapos `Select a line object` at `Specify side to offset` (o `Specify through point`) para sa bawat linya.

### RAY

Walang alias; o {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`, pagkatapos `Specify through point` para sa bawat ray, hanggang Enter.

### TEXT

Aliases: `DT`, `DTEXT`; o {{ui:Teksto}} sa toolbar. Single-line text; bawat linya ay sariling object.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, pagkatapos `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, inuulit: bawat Enter ay nagsisimula ng susunod na linya sa ibaba. Ang Enter sa walang lamang linya ay tinatapos. Ang {{key:Space}} ay nagta-type ng espasyo rito.

### DIVIDE

Alias: `DIV`. Ang {{cmd:DIVIDE}} ay naglalagay ng mga marka sa linya, arko, bilog, polyline, spline o ellipse na humahati dito sa pantay na bahagi. Piliin ang object, pagkatapos ibigay ang bilang ng bahagi (2 hanggang 32767). Ang bukas na object ay may isang marka na mas kaunti kaysa sa bahagi; ang saradong object ay may marka rin sa simula nito. Hindi pinuputol ang object mismo. Ang mga marka ay punto; ang `Block` ay humihingi ng block ng drawing na ito sa halip, at kung iikot ito para sumunod sa object. Ang haba sa kahabaan ng spline at ellipse ay sinusukat sa maiikling chord. Tumatanggi ito sa text, hatch at iba pang object na walang haba.

### MEASURE

Alias: `ME`. Ang {{cmd:MEASURE}} ay naglalagay ng marka sa bawat ibinigay na haba sa kahabaan ng linya, arko, bilog, polyline, spline o ellipse, binibilang mula sa dulong pinakamalapit sa lugar na pinili mo (ang saradong object: mula sa simula nito). Ibigay ang haba sa pag-type nito o sa pamamagitan ng dalawang punto. Ang malayong dulo ng bukas na object ay walang marka. Inilalagay ng `Block` ang block sa bawat marka sa halip na punto. Tumatanggi ito sa haba na 0, sa haba na mas mahaba kaysa sa object, at sa haba na gagawa ng higit sa 32767 marka.

### BOUNDARY

Aliases: `BO`, `BPOLY`. Ang {{cmd:BOUNDARY}} ay gumagawa ng saradong polyline sa paligid ng lugar na kinaroroonan ng punto na pinili mo, mula sa anumang linya, arko, bilog, polyline at kurba na naglilimita rito sa screen. Ang mga piraso na nasa arko o bilog ay bumabalik bilang segment ng arko; ang mga piraso ng ellipse at spline ay bumabalik bilang maiikling tuwid na segment. Kapag naka-on ang `Islands` (ang panimulang setting), bawat saradong lugar sa loob nito ay may sariling polyline din. Patuloy na pumili ng punto; tinatapos ng Enter. Nananatili ang mga object na naglilimita sa lugar kung ano sila. Sinasabi nito kapag walang saradong lugar na nasa punto.

### BLEND

Ang {{cmd:BLEND}} ay gumuguhit ng spline sa pagitan ng mga dulo ng dalawang bukas na kurba. Piliin ang bawat kurba malapit sa dulong pagdurugtungan. Pinipili ng `CONtinuity` ang `Tangent` (umaalis at dumarating ang spline ayon sa parehong kurba) o `Smooth` (binabaluktot din nito ayon sa paraan ng pagbaluktot nila sa mga dulo); nananatili ang pinili para sa session. Hindi nababago ang dalawang kurba. Tumatanggi ito sa saradong object at sa dalawang dulo na nagtatagpo na.

### REGION

Alias: `REG`. Ginagawang region ng {{cmd:REGION}} ang mga saradong object: mga flat na lugar na maaari mong pagdugtungin, putulin at sukatin. Pumili ng mga bilog, saradong polyline, saradong ellipse o saradong spline, o mga linya, arko at bukas na polyline na nagsasara ng loop dulo sa dulo; bawat loop ay nagiging isang region at pumapalit sa mga object na pinanggalingan nito. Nananatiling arko ang mga arko; ang ellipse at spline ay nagiging maiikling tuwid na segment. Ang hindi saradong bagay na hindi rin nagsasara ng loop ay nananatili kung ano ito, at sinasabi kung ilan. Sa drawing, ang region ay isa o higit pang saradong polyline na pinagsama-sama bilang hindi pinangalanang group, kaya ang pag-click ay pumipili ng buong region at ang kopya ay region sa sarili nitong karapatan; nakikita ng ibang programa na nagbubukas ng file ang mga saradong polyline.

Kapag may region sa drawing, gumagana ang {{cmd:UNION}}, {{cmd:SUBTRACT}} at {{cmd:INTERSECT}} sa 2D tab sa mga region: pinagsasama ng `UNION` ang mga napiling region sa isa (ang mga region na magkahiwalay ay nagiging isang region ng ilang outline), ang `SUBTRACT` ay humihingi ng mga region na aalisan at pagkatapos ang mga aalisin (nananatiling bahagi ng region ang butas), ang `INTERSECT` ay pinapanatili ang lugar na pinagsasaluhan nila. Bawat isa ay nagsasabi ng lawak ng resulta at isang undo step. Tumatanggi sila kapag walang matitira o walang pinagsasaluhan. Sa 3D tab, at sa drawing na walang region, gumagana pa rin ang parehong command sa mga solid gaya dati.

## Modify


Aliases: `MT`, `T`; o {{ui:Paragraph}} sa toolbar. Paragraph text na bumabalot sa isang lapad, tinype sa lugar.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: ang lapad sa pagitan ng dalawang sulok ang kung saan bumabalot ang text. Hihingiin ng `H` ang `Specify height`, ng `J` ang `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, ng `L` ang `Enter line spacing factor (0.25 to 4)`, ng `R` ang `Specify rotation angle`, ng `W` ang `Specify width (0 for no wrapping)` at lalaktawan ang ikalawang sulok.
- Pagkatapos, may kahon na magbubukas sa drawing: mag-type, {{key:Enter}} para sa bagong paragraph, {{key:Mod+Enter}} o click sa labas para tapusin, {{key:Esc}} para kanselahin. Ang bar nito ay nagtatakda ng taas, line spacing, lapad at justification. Tingnan ang [Magdagdag ng text at label](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliases: `ED`, `DDEDIT`; o i-double-click ang text. `Select a text to edit`, inuulit hanggang {{key:Enter}}: bawat isa ay bumubukas sa parehong kahon. Kapag sinimulan sa napiling o na-double-click na text, ini-edit nito ang isang iyon at tinatapos.
### ERASE

Aliases: `E`, `DELETE`; o pindutin ang {{key:Delete}} habang may napiling object.

- `Select objects` (nilalaktawan kapag napili na ang mga object)

### MOVE

Aliases: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, tinype bilang `dx,dy`.

### COPY

Aliases: `CO`, `CP`. Kopya nang kasing dami ng punto na ibibigay mo.

Ang `Array` sa prompt ng ikalawang punto ay gumagawa ng isang hilera nang sabay-sabay: ibigay ang bilang ng item (ang orihinal ay binibilang na isa), pagkatapos ang punto kung saan pupunta ang unang kopya; susunod ang iba sa parehong spacing. Ang `Fit` ay ginagawang lugar ng huling kopya ang puntong iyon, at pantay na kakalat ang iba sa pagitan.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, inuulit hanggang Enter. Binabawi ng `U` ang huling kopya.

### ROTATE

Aliases: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: degree, positibo ang counterclockwise; o i-click ang punto para ipihit patungo rito.

### SCALE

Aliases: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: i-type ang factor gaya ng `0.5` o `2`. Ang punto na na-click ay nagbibigay ng distansya nito mula sa base point bilang factor.

### MIRROR

Aliases: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Aliases: `AL`; o {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Sa dalawang pares: `Scale objects based on alignment points? [Yes/No] <N>`

Tingnan ang [I-align ang mga object](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (o ang selection), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; hihingiin ng `P` ang punto. Nananatili ang selection.

### DISTRIBUTE

- `Select objects` (hindi bababa sa tatlo), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Nananatili ang dalawang panlabas; nananatili ang selection.

### ALIGNPANEL

Aliases: `ALP`; o {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Binubuksan ang panel na nagpapatakbo ng ALIGNTO at DISTRIBUTE sa pamamagitan ng click.

### LASER

Aliases: `LASERCUT`; o {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Binubuksan ang Laser panel sa ibabaw ng drawing: ano ang ginagawa ng bawat layer (cut, score, engrave, fill, picture), ang preview, GRBL G-code na sine-save, at framing at pagpapadala sa pamamagitan ng Web Serial. Tingnan ang [Magpadala ng drawing sa laser](topic:laser-cutting).

### STRETCH

Aliases: `S`; o {{ui:Stretch}}. `Select objects to stretch`: i-drag ang crossing window (o i-type ang `C`) sa ibabaw ng mga dulo para ilipat. `Specify base point [Displacement]`, `Specify second point`. Ang mga punto sa loob ng window ay gumagalaw: mga dulo ng linya, vertex ng polyline (pinapanatili ng segment ng arko ang taas nito), mga punto ng dimension; ang bilog, ellipse, text, point at block ay gumagalaw nang buo kapag nasa loob ang center o insertion point nila. Ang selection na ginawa bago ang command ay nagpapanatili ng crossing window (at lasso) na gumawa nito, kaya iniuunat nila sa parehong paraan. Kung walang window, buong gumagalaw ang mga object.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliases: `AR`; o {{ui:Array}}. `Select objects`, pagkatapos `Enter array type [Rectangular/POlar] <Rectangular>` (ARRAY lamang).

- Nagsisimula ang Rectangular sa 4 column × 3 hilera, may spacing na 1.5 beses ng laki ng mga object, ipinapakita bilang preview. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: ang `COU` ay nagtatanong ng column at hilera, ang `S` ng mga distansya sa pagitan ng column at sa pagitan ng hilera (ang negatibo ay pakaliwa o pababa), ang `COL` at `R` ng isang direksyon bawat isa.
- Ang Polar ay nagtatanong ng `Specify center point of array`, nagsisimula sa 6 na item sa buong paligid, nakaikot. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` ang mga item, `F` ang anggulo na pupunuin (+ counterclockwise, − clockwise), `ROT` ang Yes o No.
- Ang {{key:Enter}} (eXit) ay gumagawa ng mga kopya bilang simpleng object. Isang undo step.
- Ang `AS` (ASsociative) ay lumilipat sa pagitan ng simpleng kopya at array na nananatiling maa-edit: isang object na babaguhin mo sa susunod gamit ang {{cmd:ARRAYEDIT}}, sa pamamagitan ng mga grip nito o sa Properties. Naaalala ang pinili ({{cmd:ARRAYASSOCIATIVITY}}); nagsisimula ito sa simpleng kopya.

### ARRAYPATH

Mga kopya sa kahabaan ng kurba. `Select objects`, pagkatapos `Select path curve`: isang linya, arko, bilog, ellipse, polyline o spline (hindi isa sa mga object na ina-array). Nagsisimula ang path sa dulo nitong mas malapit sa mga object, at ang unang item ay ang mga object kung nasaan sila.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, may preview. `M`: ang `Divide` ay ikinakalat ang mga item nang pantay sa buong path, ang `Measure` ay naglalagay ng isa tuwing ganito kalayo sa kahabaan nito. `I`: ang bilang ng item (sa Measure, ang 0 ay nangangahulugang kasing dami ng kasya; ang bilang na lampas sa dulo ng path ay pinapantay sa kasya). `SP`: ang distansya sa pagitan ng mga item sa kahabaan ng path (lumilipat sa Measure). `AL`: ang Yes ay ipinipihit ang bawat item para sumunod sa path, ang No ay pinapanatiling patayo.
- `AS` gaya sa {{cmd:ARRAY}}. Kapag naka-on ito, ang array ay nagtatago ng sarili nitong kopya ng hugis ng path: ang pag-edit sa path curve pagkatapos ay hindi gumagalaw sa mga item.
- Tumatanggi ito sa path na hindi kurba, at sa isang item.

### ARRAYEDIT

Binabago ang array na ginawa gamit ang ASsociative. `Select array` (o piliin muna ito). Ini-print nito kung ano ang array ngayon, pagkatapos nagtatanong hanggang {{key:Enter}}:

- Rectangular: `COL` ang mga column at ang spacing nila, `R` ang mga hilera at ang spacing nila, `A` ang anggulo kung saan tumatakbo ang mga column.
- Polar: `I` ang mga item, `F` ang fill angle, `ROT` ang rotate items na Yes o No.
- Path: `M` Divide o Measure, `I` ang mga item, `SP` ang spacing, `AL` ang pag-align sa path.
- `S` (Source) ay nagbubukas ng mga object na inuulit ng array, nang mag-isa, gaya ng block editor. Gumuhit at mag-edit doon; ang {{cmd:ARRAYCLOSE}} ay nagse-save o nagtatapon, at susunod ang bawat item.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, pagkatapos i-click ang mga item na papalitan, {{key:Enter}}. Ipinapakita ng mga item na iyon ang kapalit sa halip; ang mga kapalit na object ay umaalis sa drawing at nabubuhay sa loob ng array. Ibinabalik ng `RES` (RESet) ang mga source object sa bawat item.
- Bawat pagbabago ay isang undo step. Tumatanggi ito sa simpleng kopya, sa simpleng block reference at sa array na nasa naka-lock na layer.

Ang parehong numero ay nasa Properties sa ilalim ng Array, at ang array ay may mga grip: ang base point nito ang naglilipat dito, ang grip sa ikalawang item ang nagtatakda ng spacing, ang grip lampas sa huling item ang nagtatakda ng bilang (polar: ang ikalawang item ang nagtatakda kung ilang item, ang huling item ang fill angle). Ang {{cmd:EXPLODE}} ay nagbabalik ng array sa simpleng kopya.

### ARRAYCLOSE

Tinatapos ang {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Sinasabi nito kapag walang bukas na source object ng array. Ganoon din ang ginagawa ng {{cmd:BCLOSE}}.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Itinatakda kung saan nagsisimula ang {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR at {{cmd:ARRAYPATH}}; binabago ng opsyon nilang `AS` ang parehong setting. Naaalala sa browser na ito.

### OFFSET

Aliases: `O`. Mga linya, arko, bilog at polyline.

Kapag lumilipat palabas ang polyline at humihiwalay ang mga tuwid na segment nito sa isang sulok, tinutukoy ng {{cmd:OFFSETGAPTYPE}} kung paano isasara ang puwang.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, pagkatapos `Specify point on side to offset` (o, sa Through, `Specify through point`), inuulit hanggang Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: paano isinasara ng {{cmd:OFFSET}} ang mga puwang sa panlabas na sulok ng polyline. Ang `0` ay pinapahaba ang mga segment hanggang magtagpo (ang panimulang setting), ang `1` ay pinagdurugtong sila gamit ang arko sa paligid ng lumang sulok, ang `2` gamit ang tuwid na putol. Hindi naapektuhan ang mga panloob na sulok at mga segment ng arko. Nananatili para sa session na ito.

### EXTRIM

Ang {{cmd:EXTRIM}} ay nagpuputol ng lahat sa isang gilid ng edge. Piliin ang cutting edge (linya, arko, bilog, polyline, ellipse, spline o construction line), pagkatapos pumili ng punto sa gilid na lilinisin: bawat linya, arko, bilog, polyline at construction line na tumatawid sa edge ay nawawala ang bahagi nito sa gilid na iyon, kung saan ito nagsisimula sa edge. Habang pinipili mo ang gilid, ang mga piraso na mawawala ay sumusunod sa pointer. Para sa saradong edge, ang mga gilid ay loob at labas. Ang mga object na nakadikit lang sa edge, at ang text, hatch, spline at ellipse na tumatawid dito, ay nananatili. Isang undo step.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: paano nagsisimula ang {{cmd:TRIM}} at {{cmd:EXTEND}}. Ang `1` Quick: bawat object ay cutting edge o boundary. Ang `0` Standard: hihingiin muna nila ang mga edge. Gayundin ang `(setvar "TRIMEXTENDMODE" 0)` sa LISP.

### TRIM

Aliases: `TR`. Unang ini-print ang `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. Sa Quick mode, bawat nakikitang object ay cutting edge, at ang object na walang tumatawid ay binubura; sa Standard mode, unang nagtatanong ang `Select cutting edges (Enter = every object)` at pinuputol lang sa mga iyon.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, inuulit: i-click ang piraso na aalisin (nagiging kulay abo at nakadash habang nakapatong ang pointer dito), i-drag ang path sa ilang piraso (lahat ay napupunta sa isang hakbang), o i-click ang dalawang bakanteng lugar para sa fence sa pagitan nila. Ang {{key:Shift}} ay nagpapahaba sa halip. Pumipili ang `T` ng cutting edge (Standard mode), hinihingi ng `F` ang fence point, ng `C` ang dalawang sulok ng window (ang mga piraso na bahagyang nasa loob ay mapupunta), ng `O` ang `Enter a trim mode option [Quick/Standard]`, ng `E` ang `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), ang `R` ay bumubura ng mga object na pipiliin mo, ang `U` ay binabawi ang huling pinili o i-drag. Tinatapos ng Enter. Tingnan ang [Trim at extend](topic:trim-and-extend).

- Ang pag-click sa hatch ay pumuputol sa hatch: hinahati ng cutting edge ang hatched na lugar, at ang piraso na na-click mo ay inaalis (walang iginuhit na outline na naiiwan sa dating lugar). Pinapanatili ng hatch ang pattern o gradient nito; ang hatch na naka-link sa boundary nito ay hindi na naka-link pagkatapos, dahil hindi na nito pinupuno ang boundary. Sinasabi nito kapag walang cutting edge na naghahati sa hatch doon, kapag nasa labas ng hatch ang click, at kapag walang matitira (gamitin ang {{cmd:ERASE}}). Ang dragged path o fence ay hindi pumuputol sa hatch.

### EXTEND

Aliases: `EX`. Kapareho ng TRIM pero baligtad: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Ang click ay nagpapahaba ng dulong pinakamalapit dito hanggang sa susunod na boundary; ang dragged path o fence ay nagpapahaba ng bawat object na tinatawid nito; ang {{key:Shift}} ay nagpuputol. Ang `B` ay pumipili ng boundary edge (Standard mode). Ibinabahagi ang Mode at Edge sa TRIM.

### LINKVIEWS

Aliases: `SYNCVIEWS`; o {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, o ang link icon sa mga tab ng drawing. `Link the panes' views [ON/OFF]` (Enter ang lumilipat sa kabilang estado): habang naka-on, ang pan o zoom sa aktibong pane ay gumagalaw sa bawat pane na nagpapakita ng parehong uri ng space. Tingnan ang [Hatiin ang screen](topic:split-screen).

### OPENIN3D

Walang alias; o {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} kung saan tinatanggap ng 3D modeling app ang ibinigay na drawing. Binubuksan ito roon sa bagong tab, bilang DWG (walang ina-upload). Kung hinaharangan ng browser ang tab, sinasabi nito.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: ang iginuguhit kapag pinindot at dinrag sa bakanteng lugar. Kapareho ng Settings › CadCraft › Dragging to select. Tingnan ang [Lasso selection](topic:lasso-selection).

### FILLET

Aliases: `F`. Mga linya, arko, bilog at polyline. Unang ini-print ang `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - Ang `R` ay nagtatanong ng `Specify fillet radius <last>`. Ang `T` ay nagtatanong ng `Enter Trim mode option [Trim/No trim]`: sa No trim, nananatili ang mga object gaya ng dati at idinadagdag lang ang arko.
  - Ang `M` ay nagpapatuloy ng command para sa mas maraming sulok hanggang {{key:Enter}}; binabawi ng `U` ang huling sulok nang hindi lumalabas sa command.
  - Ang `P` ay nagtatanong ng `Select 2D polyline [Radius]` at nagbibilog sa bawat sulok kung saan nagtatagpo ang dalawang tuwid na segment. Ang mga fillet na mayroon na ay pinapalitan ng bagong radius; ang radius 0 ay inaalis sila. Ang mga sulok na masyadong maiksi ang gilid para sa radius ay naiiwan at binibilang.
- `Select second object or shift-select to apply corner [Radius]`. Hawakan ang {{key:Shift}} habang nag-click para sa matalim na sulok, anuman ang radius.

I-click ang bawat object sa bahaging gusto mong panatilihin. Ang dalawang linyang hindi nagtatagpo ay pinapahaba. Ang dalawang magkahanay na linya ay nakakakuha ng kalahating bilog sa puwang, sa dulo ng unang linya na pinakamalapit sa click mo. Hindi pinuputol ang bilog kailanman. Ang dalawang segment ng isang polyline na magkatabi ay nakakakuha ng arko sa loob ng polyline; ang polyline at ibang object ay gumagana kapag ang putol ay tumama sa unang o huling segment ng polyline.

### CHAMFER

Aliases: `CHA`. Mga linya at ang tuwid na segment ng polyline. Unang ini-print ang kasalukuyang distansya (o haba at anggulo).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - Ang `D` ay nagtatanong ng `Specify first chamfer distance <last>` at `Specify second chamfer distance <the first>`: ang una ay pinuputol mula sa unang linya na pipiliin mo, ang pangalawa mula sa kabila.
  - Ang `A` ay nagtatanong ng `Specify chamfer length on the first line` at `Specify chamfer angle from the first line`.
  - Ang `E` (mEthod) ay pumipili kung alin sa dalawa ang gagamitin ng susunod na chamfer. Ang `T`, `M`, `U` at `P` ay gumagana gaya sa {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. Ang {{key:Shift}}+click ay gumagawa ng matalim na sulok.

Tumatanggi kapag mas mahaba ang distansya kaysa sa linya (`Distance is too large.`).

### BREAK at BREAKATPOINT

Aliases: `BR`. `Select object` (kung saan ka nag-click ay ang unang punto), `Specify second break point [First point]`; ang `F` ay nagtatanong ng `Specify first break point` at `Specify second break point`. Ang bahaging nasa pagitan ay nawawala; sa bilog, counter-clockwise mula sa unang punto. Ang BREAKATPOINT ay nagtatanong ng `Specify break point` at hinahati ang object sa dalawa roon (hindi bilog).

### LENGTHEN

Aliases: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: ang pagpili ay nagpi-print ng `Current length` (at ang kasamang anggulo ng arko) at nagtatanong muli. Ang `DE` ay nagtatanong ng `Enter delta length (negative shortens) [Angle]`, ang `P` ng `Enter percentage length`, ang `T` ng `Specify total length [Angle]`, ang `DY` ay nagda-drag. Pagkatapos, `Select an object to change [Undo]`, inuulit: ang dulong pinakamalapit sa click ang gumagalaw. Mga linya, arko at bukas na polyline.

### JOIN

Aliases: `J`. `Select objects to join`. Ang mga linya, arko at bukas na polyline na nagtatagpo dulo sa dulo ay nagiging polyline (sarado kapag nagsara ang kadena); ang mga linya sa iisang tuwid na linya ay nagiging isang linya; ang mga arko ng iisang bilog ay nagiging isang arko o ang bilog. Sinasabi ng history kung ilang object ang nadugtong at ilan ang hindi.

### MATCHPROP

Aliases: `MA`, `PAINTER`. `Select source object`, pagkatapos `Select destination objects [Settings]` at {{key:Enter}}. Kinokopya ang layer at kulay, at sa pagitan ng mga object na magkapareho ang uri, ang taas at lapad ng text, ang laki ng dimension, o ang pattern ng hatch. Ang `S` ay nagtatanong ng `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, inuulit hanggang {{key:Enter}}; naaalala ang pinili para sa session.

### EXPLODE

Aliases: `X`. Ang mga polyline ay nagiging linya at arko, ang block reference ay nagiging sarili nilang mga object, ang dimension ay nagiging linya, arrowhead at text. Ang array na nananatiling maa-edit ({{cmd:ARRAYEDIT}}) ay nagiging simpleng kopya ng mga object nito.

- `Select objects`

### GROUP

Alias: `G`. Binibigyan ng {{cmd:GROUP}} ang mga napiling object ng pangalang pareho nila. Piliin ang mga object, pagkatapos i-type ang pangalan (walang espasyo; ang `?` ay naglilista ng mga group; ang Enter ay gumagawa ng unnamed group) at, para sa pinangalanang group, opsyonal na description. Mula noon, ang click sa isa sa kanila, o window na kumukuha ng isa, ay pipili na sa lahat, kaya sabay silang gumagalaw, kinokopya at binubura; sarili pa rin nitong object ang bawat isa. Ang isang object ay maaaring nasa maraming group. Ang kopya ng buong group ay bagong unnamed group; ang kopya ng isang miyembro lang ay sumasama sa group. Nabibilang ang mga group sa space kung saan sila ginawa (ang model o sheet). Nananatili sila kapag nag-save ka bilang DWG o DXF at binuksan muli ang file sa CadCraft; ang mga DXF 2000 file ay nagdadala rin ng mga ito bilang group object para sa ibang programa, at ang mga group na ginawa sa ibang programa ay binabasa kapag binuksan ang DXF o DWG.

### UNGROUP

{{cmd:UNGROUP}} ay bumubuwag ng mga group: pumili ng mga object ng mga group (bawat group na kinabibilangan nila ay mabubuwag) o i-type ang `Name` at ang pangalan ng group. Nananatili ang mga object sa drawing. Ibinabalik ng isang undo step ang mga group.

### GROUPEDIT

{{cmd:GROUPEDIT}} ay nagbabago ng isang group. I-pick ang isa sa mga object nito, o `Name` at ang pangalan nito; ang group na napili na ay tinatanggap gaya ng dati. Pagkatapos: `Add` ng mga object (isa-isang pinipili, hindi group sa group), `Remove` ng mga object, `REName` sa group, baguhin ang `Description` nito, o itakda ang `Selectable` (kung ang click sa isang object ay pumipili sa buong group). Tinatapos ng `eXit` o Enter. Ang group na walang natitirang object ay mawawala.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: sa `1` (ang panimulang setting), ang click o window sa naka-group na object ay pumipili ng buong group; sa `0`, isang object lang, para ma-edit ang isang miyembro. Nananatili para sa session na ito.

## Clipboard

Clipboard ng CadCraft mismo: gumagana ito sa loob ng isang drawing, sa pagitan ng mga drawing at sa pagitan ng mga tab ng CadCraft sa browser na ito. Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, o {{ui:Copy}} sa grupong {{ui:Edit}}. Kinokopya ang mga object sa clipboard, kasama ang mga block at layer na ginagamit nila. Nananatiling napili ang mga object.

- `Select objects to copy` (nilalaktawan kapag napili na ang mga object)

### CUTCLIP

{{key:Mod+X}}, o {{ui:Cut}} sa menu na {{ui:More}}. Kinokopya ang mga object sa clipboard, pagkatapos binubura ang mga ito (isang undo step).

- `Select objects to cut` (nilalaktawan kapag napili na ang mga object)

### COPYBASE

Kinokopya ang mga object sa clipboard na may base point na pipiliin mo; ang pag-paste ay naglalagay sa puntong iyon.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, o {{ui:Paste}} sa grupong {{ui:Edit}}. Sumusunod ang kopya sa cursor, nakabitin mula sa ibabang-kaliwang sulok ng sukat nito (o sa center nito, o sa punto ng `COPYBASE`; tingnan ang [Mga setting ng CadCraft](topic:settings)).

- `Specify insertion point`

Napipili ang mga na-paste na object. Ang block na mayroon na ang drawing sa ilalim ng parehong pangalan ay pinapanatili ang definition ng drawing na ito.

Kapag mas bago ang area na kinopya sa MarkupCraft kaysa sa kinopya ng CadCraft (at mas mababa sa 6 na oras ang edad), ang {{key:Mod+V}} at `PASTECLIP` ay sa halip ang nagpe-paste ng area na iyon: tingnan ang `PASTEAREA`.

### PASTEAREA

Aliases: `PAREA`. {{ui:Paste a copied area}} sa menu na {{ui:More}}. Nagpe-paste ng area na kinopya gamit ang {{ui:Kopyahin ang area}} sa MarkupCraft bilang larawan sa totoong laki nito. Tingnan ang [Mga larawan sa drawing](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (kapag walang scale ng drawing ang sheet): isang numero, {{key:Enter}} para sa laki ng papel, o `P`, pagkatapos `First point on the pasted area`, `Second point on the pasted area` at ang totoong distansya nila.

### PASTEORIG

{{key:Mod+Shift+V}}, o {{ui:Paste in place}} sa menu na {{ui:More}}. Nagpe-paste sa mga coordinate kung saan kinopya ang mga object. Walang tinatanong.

### DUPLICATE

Aliases: `DUP`. {{key:Mod+D}}, o {{ui:Duplicate and move}} sa menu na {{ui:More}}. Ang kopya ng mga object ay gumagalaw kasabay ng pointer mula sa kinalalagyan nito; ang {{key:Esc}} ay walang iiwan. Hindi ginagamit ang clipboard.

- `Select objects to duplicate` (nilalaktawan kapag napili na ang mga object)
- `Specify where the copy goes (Esc leaves nothing)`: i-click, i-type ang punto, `@dx,dy` (mula kung nasaan ang pointer), o isang distansya patungo sa cursor.

### SELECT

Nagtatanong ng `Select objects` (kasama ang bawat opsyon sa ibaba) at iniiwang napili ang pinili mo, para sa susunod na command o para sa `P` mamaya.

### QSELECT

Aliases: `QS`. Sa browser, ang dialog na {{ui:Quick select}} (tingnan ang [Pumili ng mga object](topic:select-objects#select-by-a-rule-quick-select)). Kung wala ito, tinatanong ng command line ang `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` at `Enter value`. Ang mga tugma ay nagiging selection.

### SELECTSIMILAR

Aliases: `SIM`. `Select objects [SEttings]` (o ang kasalukuyang selection): pumipili ng bawat object na magkapareho ang uri, layer at kulay (at pangalan ng block, pattern ng hatch). Ang `SE` ay nagtatanong ng `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, inuulit hanggang {{key:Enter}}.

### FIND

Walang alias; o {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. Sa browser, ang dialog na {{ui:Find and replace}} (tingnan ang [Magdagdag ng text at label](topic:text#find-and-replace-words)). Kung wala ito: `Enter text to find`, pagkatapos `Enter replacement text (Enter: select what is found)`. Naghahanap sa text, value ng attribute at text ng dimension, sa bukas na tab o sa selection.

### SELECTALL at DESELECT

Ang `SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) ay pumipili ng bawat object na maaari mong i-edit sa bukas na tab. Ang `DESELECT` (aliases `AI_DESELECT`, `SELECTNONE`; o {{key:Esc}}) ay binubura ang selection.

## Dimensions

### DIMLINEAR

Aliases: `DLI`, `DIMLIN`. Pahalang o patayong distansya.

- `Specify first extension line origin [Select object]` (Enter o `S`: `Select object to dimension`, pagkatapos i-click ang linya, arko, bilog o segment ng polyline)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. Ang `T` ay nagtatanong ng text (ang `<>` ay ang sinukat na value), ang `H` at `V` ay nagtatakda ng direksyon, ang `R` ay nagtatanong ng `Specify angle of dimension line <0>`.

### DIMALIGNED

Aliases: `DAL`, `DIMALI`. Ang totoong distansya sa pagitan ng dalawang punto.

- Mga origin gaya sa {{cmd:DIMLINEAR}}, pagkatapos `Specify dimension line location [Text]`.

### DIMANGULAR

Aliases: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Arko: ang anggulo nito. Bilog: `Specify second angle endpoint`. Linya: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: i-click sa loob ng anggulo para sukatin.

### DIMRADIUS at DIMDIAMETER

Aliases: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, pagkatapos `Specify dimension line location [Text]`.

### DIMCONTINUE

Aliases: `DCO`, `DIMCONT`. Nagpapatuloy mula sa huling linear o aligned dimension na nagawa (o nagtatanong ng `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, inuulit hanggang Enter.

### DIMBASELINE

Aliases: `DBA`, `DIMBASE`. Gaya ng {{cmd:DIMCONTINUE}}, pero bawat dimension ay nagsisimula sa unang origin at nakasalansan nang mas malayo palabas.

### DIMORDINATE

Aliases: `DOR`, `DIMORD`. `Specify feature location`, pagkatapos `Specify leader endpoint [Xdatum/Ydatum/Text]`. Isinusulat kung gaano kalayo ang feature mula sa origin ng UCS sa X o sa Y, sa isang leader: ang leader na tumatakbong karamihan pataas o pababa ay bumabasa ng X, ang tumatakbong gilid ay bumabasa ng Y; itinatakda ng `Xdatum` at `Ydatum` kung alin. Itakda muna ang origin gamit ang {{cmd:UCS}} (kung wala, ang 0,0 ng drawing). Ang mga grip ang gumagalaw sa feature, sa origin at sa dulo ng leader, at sumusunod ang value. Sine-save bilang tunay na ordinate dimension sa DWG at DXF. Tumatanggi sa dulo ng leader na nasa mismong feature.

### DIMARC

Aliases: `DAR`. `Select arc or polyline arc segment`, pagkatapos `Specify arc length dimension location [Text]`. Sinusukat sa kahabaan ng arko (hindi ang chord) at isinusulat ang simbolo ng arko bago ang value. Tumatanggi sa buong bilog, linya o tuwid na segment ng polyline. Iniingatan ng DWG ito bilang arc length dimension; iniingatan ito ng DXF bilang angular dimension na may haba bilang text nito, at muling binubuksan ito ng CadCraft bilang arc length dimension.

### DIMJOGGED

Aliases: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Radius dimension para sa kurbang malayo ang center o nasa labas ng sheet: nagsisimula ang dimension line sa punto na ibibigay mo sa halip na center, may jog dito, at isinusulat pa rin ang totoong radius. Iniingatan ng DWG ito bilang jogged radius dimension; iniingatan ito ng DXF bilang radius dimension, at muling binubuksan ito ng CadCraft na may jog.

### DIMJOGLINE

Aliases: `DJL`. `Select dimension to add jog [Remove]`, pagkatapos `Specify jog location (or press Enter)`. Naglalagay ng jog symbol sa linya ng linear o aligned dimension, para ipakitang hindi iginuhit sa tamang sukat ang distansya; hindi nagbabago ang value. Inaalis ito ng `Remove`. Tumatanggi sa ibang uri ng dimension.

### QDIM

Walang alias. `Select geometry to dimension`, pagkatapos `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Nagdi-dimension ng ilang object sa iisang hakbang, mula sa mga dulo ng linya at segment ng polyline, sentro ng bilog at arko, punto at block reference. Ang posisyon sa itaas o ibaba ng mga object ay sumusukat nang pahalang, ang nasa tabi nila ay sumusukat pataas. Ang `Continuous` ay nagdudugtong sa mga punto, ang `Baseline` ay sinusukat lahat mula sa una, ang `Staggered` ay nagpapares mula sa gitna palabas, ang `Ordinate` ay binibigyan ang bawat punto ng distansya mula sa datum (ang `datumPoint` ay pumipili ng bago), ang `Radius` at `Diameter` ay nagdi-dimension sa bawat bilog at arko na pinili. Naaalala ang mode. Lahat ng ginawa nito ay isang undo step. Sinasabi nito kapag wala pang dalawang punto, o walang arko o bilog para sa Radius at Diameter.

### DIMBREAK

Aliases: `DBREAK`. `Select dimensions to add or remove breaks`, pagkatapos `Break where other objects cross [Auto/Manual/Remove] <Auto>`. Ang `Auto` ay nag-iiwan ng puwang sa dimension at extension line saanman tumawid ang ibang object sa mga ito, at muling kinakalkula ang mga puwang kapag gumalaw ang mga object o ang dimension. Ang `Manual` (isang dimension) ay nagtatanong ng dalawang punto at nag-iiwan ng puwang sa pagitan nila. Ang `Remove` ay tinatanggal ang lahat ng puwang. Ang puwang ay 1.5 beses ng taas ng text ng dimension.

### DIMSPACE

Walang alias. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Inililipat ang dimension line ng magkakahanay na linear at aligned dimension (o angular sa parehong vertex) para magkapareho ang distansya nila, binibilang mula sa base dimension, bawat isa sa sariling panig. Ang `0` ay pinapantay sila sa base; ang `Auto` ay dalawang beses ng taas ng text ng base dimension. Hindi ginagalaw ang mga dimension na hindi magkahanay sa base.

### DIMINSPECT

Walang alias. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Gumuguhit ng frame sa paligid ng value na may label sa unahan nito at ang inspection rate sa hulihan. Inaalis ng `remove` ang frame. Nananatili ang tolerance text kasama ng value.

### DIMOVERRIDE

Aliases: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, muli hanggang Enter, pagkatapos `Select dimensions`. Binabago ang mga setting na iyon sa mga napiling dimension lang; hindi nababago ang dimension style. Tinatanggap ang mga variable na numero o switch (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). Ibinabalik ng `Clear` ang mga napiling dimension sa kanilang style. Tumatanggi sa pangalan na hindi ganoong variable at sa value na hindi nito tatanggapin.

### DIMREASSOCIATE

Aliases: `DRE`, `DIMREASSOC`. `Select dimensions`, pagkatapos para sa bawat isa ang extension line origin nila (`Specify first extension line origin on an object`: mag-snap sa dulo o gitna ng linya, sulok ng polyline, center; ang Enter ay nag-iiwan ng libreng punto), o para sa radius, diameter, jogged radius o arc length dimension, `Select arc or circle`. Pagkatapos ay nakatali ang dimension sa mga object na iyon: kapag gumalaw sila o nagbago ang laki, susunod ito sa parehong undo step at muling susukat. Ang paggalaw ng nakatali na punto nang manu-mano, o ang pagbura sa object, ay nagtatapos sa tali. Naka-save ang tali sa DWG at DXF 2000 bilang sariling data ng CadCraft; ang ibang programa ay nakakakita ng karaniwang dimension.

### DIMDISASSOCIATE

Aliases: `DDA`, `DIMDISASSOC`. `Select dimensions`. Pinapalaya sila mula sa mga object na nakatali sa kanila; walang gumagalaw.

### CENTERMARK

Aliases: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, muli hanggang Enter. Gumuguhit ng krus sa center at apat na center line na lampas nang kaunti sa kurba (linetype CENTER), bilang simpleng linya sa kasalukuyang layer; ang laki ay mula sa arrow size at overall scale ng kasalukuyang setting ng dimension, ipinipihit gamit ang UCS. Hindi sila sumusunod sa bilog kung gumalaw ito.

### CENTERLINE

Aliases: `CL`. `Select first line`, `Select second line`. Gumuguhit ng linya sa gitna ng dalawang linya (kasama ang bisector kapag nagtatagpo sila), bahagyang mas mahaba kaysa sa mga ito, sa linetype CENTER. Simpleng linya ito: hindi ito sumusunod sa dalawang linya.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Walang alias. Bawat isa ay nagtatanong ng `Enter new value for … <current>` at itinatakda ang sukat na iyon para sa **mga bagong** dimension: pangkalahatang scale, taas ng text, laki ng arrow, decimal places (hanggang 8), puwang sa paligid ng text, extension lampas sa dimension line, offset mula sa origin. Tingnan ang [Itakda ang sukat ng dimension](topic:dimension-settings).

### DIMLUNIT

Setting ng dimension: ang format ng mga bagong dimension lang (1 scientific, 2 decimal, 3 engineering, 4 architectural, 5 fractional).

### DIMSTYLE at -DIMSTYLE

Aliases: `DST`, `DDIM`, `D`. Ang tagapamahala ng dimension style: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` sa command line: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Tingnan ang [Itakda ang sukat ng dimension](topic:dimension-settings#named-dimension-styles).

### DIMEDIT at DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, pagkatapos ang mga dimension (o ang mga napili na). Ang New ay nagtatanong ng text (`<>` = ang sukat); ang Rotate ng anggulo (0 ay ibinabalik ang text); ang Oblique ng anggulo ng extension line mula sa X axis (Enter = wala; linear at aligned lamang na dimension). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Tingnan ang [Itakda ang sukat ng dimension](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliases: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, o kapag may napiling dimension, `Units in the text of the selected dimensions`. Isinusulat ang sinukat na haba sa unit na iyon kasama ang unit pagkatapos nito (DIMLFAC at DIMPOST suffix); ang `D` ay bumabalik sa drawing units. Tingnan ang [Mga dimension sa mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliases: `RC`. Nagpi-print ng `Arc length: … Type: …`, pagkatapos `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Ang Rectangular ay nagtatanong ng `Specify opposite corner`; ang Polygonal ng `Specify next point (Enter closes the cloud) [Undo]`; ang Freehand ay sumusunod sa pointer hanggang click o {{key:Enter}}; ang `O` ay nagtatanong ng `Select object` at `Reverse direction? [Yes/No] <N>` at ginagawang cloud ang object. Ang `A` ay nagtatanong ng `Specify the length of each arc`. Ang `R`, `P` at `F` ay pumipili ng uri para sa susunod na cloud. Ang resulta ay saradong polyline ng mga arko.

### MLEADER

Aliases: `MLD`; o {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, pagkatapos ang text sa in-place na kahon (o, kung wala ito, `Enter text (an empty line ends)`). Ang `Block` ay nagtatanong muna ng pangalan ng block at ipinapakita ng multileader ang block na iyon sa halip na text. Mas maraming leader line: {{cmd:MLEADEREDIT}}. Sine-save bilang tunay na multileader sa DWG; ang DXF ay nag-iingat ng mga linya, arrowhead at text na iginuhit nito.

### MLEADEREDIT

Aliases: `MLE`. `Select a multileader`, pagkatapos `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: bawat punto ay nagdaragdag ng leader line mula sa bagong arrowhead papunta sa parehong landing, hanggang Enter. Ang `Remove leaders` ay inaalis ang leader line na i-click mo (nananatili ang multileader na may kahit isa). Ang `Block content` ay nagtatanong ng pangalan ng block at ipinapakita ang block na iyon sa halip na text (hinihingi ang mga attribute nito); ibinabalik ng `Text content` ang text. Bawat leader line ay may sariling grip. Iniingatan ng DWG ang bawat leader line at ang block sa iisang multileader.

### MLEADERALIGN

Aliases: `MLA`. `Select multileaders`, pagkatapos `Select multileader to align to [Distribute/Spacing/Use current spacing]` at `Specify direction`. Inililipat ang mga landing ng iba pang multileader (at ang text o block nila) sa linyang dumaraan sa landing ng napiling isa sa direksyong iyon; nananatili sa kanilang tinuturo ang mga arrowhead. Ang `Spacing` ay nagtatakda rin ng pantay na distansya sa pagitan nila; ang `Distribute` ay nagtatanong ng dalawang punto at ikinakalat sila nang pantay sa pagitan. Kailangan ng hindi bababa sa dalawang multileader.

### MLEADERCOLLECT

Aliases: `MLC`. `Select multileaders`, pagkatapos `Specify collected multileader location [Vertical/Horizontal]` (ang Enter ay pinapanatili ang lugar ng una). Gumagawa ng isang multileader mula sa ilan: ang block content ay napupunta sa bagong block na may hawak ng bawat block nang magkatabi o isa sa ilalim ng isa; ang text content ay nagiging isang tala na may linya para sa bawat isa. Pinapanatili ng unang multileader ang mga leader line nito; inaalis ang iba. Tumatanggi sa halo ng text at block content.

### TABLE

Aliases: `TB`; o {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Gumagawa ng table: isang object na maaari mong ilipat, kopyahin, ipihit, i-scale at i-plot gaya ng iba, na may mga cell na naka-imbak bilang data.

- `Number of data rows or [Paste/File/Style] <3>`, pagkatapos `Number of columns <3>`, `Text height` at `Top left corner of the table`. Ang table ay may title row (isang merged cell) at header row sa itaas ng mga data row.
- `P`: table mula sa mga cell ng spreadsheet sa clipboard (text na may tab sa pagitan ng mga cell). Ang pagpindot sa {{key:Ctrl+V}} kapag may ganoong cell sa clipboard ay gumagawa ng pareho, maliban kung mas bago ang sariling kopya ng CadCraft (o hindi matukoy ng CadCraft: pagkatapos ay ipe-paste nito ang sarili nitong kopya at sasabihin ito). `F`: table mula sa `.csv` o tab-separated na file. Ang unang hilera ay nagiging header row; kasya ang lapad ng column sa text.
- `S`: piliin ang table style para sa table na ito (tingnan ang {{cmd:TABLESTYLE}}).
- Tumatanggi sa bilang ng hilera o column na hindi buong numero, at sa mas maraming cell kaysa kasya sa isang table (2,000 hilera, 200 column, 40,000 cell).
- Ginagawang linya at text ng {{cmd:EXPLODE}} ang table. Kapag sine-save bilang DWG, tunay na table object ang table na maaaring i-edit ng ibang programa; kapag sine-save bilang DXF, ito ay block na gumuguhit dito, at muling binubuksan ito ng CadCraft bilang table.

### TABLEDIT

Aliases: `TABLEEDIT`, `TABEDIT`; o i-double-click ang cell. Nag-e-edit ng table.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. I-click ang cell, o kapag may napiling table, i-type ang pangalan nito (`B3`: column B, hilera 3; ang title row ay hilera 1). Sa browser, may kahon na bubukas sa ibabaw ng cell: ang {{key:Enter}} ay nagpapanatili ng text, ang {{key:Tab}} ay pupunta sa susunod na cell, ang {{key:Alt+Enter}} ay nagsisimula ng bagong linya, ang {{key:Esc}} ay iniiwan ang cell gaya ng dati.
- Ang text na nagsisimula sa `=` ay formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, may `+ - * / ^`, mga bracket at function gaya ng `sqrt` at `round`. Ipinapakita ng cell ang value; ang formula na nagbabanggit ng sarili nitong cell, cell sa labas ng table, o cell na walang numero ay nagpapakita ng `####` at sinasabi ng command line kung bakit.
- `R` / `C`: `Insert` o `Delete` ng mga hilera o column sa napiling cell (ilan, at sa itaas o ibaba, kaliwa o kanan). Sumusunod ang mga formula sa mga cell na binabanggit nila.
- `S`: ang lapad ng column at taas ng hilera. Hindi kailanman mas mababa ang hilera kaysa sa kailangan ng text nito. Ang napiling table ay mayroon ding grip sa gilid ng bawat column at bawat hilera.
- `M`: i-merge mula sa isang napiling cell hanggang sa isa pa; `U`: unmerge. `A`: alignment (`TL` kaliwang itaas … `MC` gitnang sentro … `BR` kanang ibaba). `H`: sariling taas ng text ng cell na ito (0 = ang style). `K`: gawing title, header o data row ang hilera. `CL`: burahin ang laman ng cell.
- Tumatanggi sa table sa naka-lock na layer, sa pagbura ng bawat hilera o column, at sa merge na puputol sa ibang merged cell sa dalawa.

### TABLESTYLE

Aliases: `TS`. Inililista ang mga table style kasama kung ilang table ang gumagamit ng bawat isa, pagkatapos `Table style: [New/Set/Edit/Delete/Apply]`.

- Ang style ay naglalaman ng taas at alignment ng text ng title, header at data row, ang cell margin, at aling border ang iginuguhit (labas, sa pagitan ng hilera, sa pagitan ng column).
- `N` ay gumagawa ng style mula sa kasalukuyan at ginagawa itong kasalukuyan; `S` ang nagtatakda ng kasalukuyang style (ang mga bagong table ay kumukuha nito); `E` ang nag-e-edit ng isa: ang mga table na gumagamit nito ay iginuguhit muli; `A` ay nagbibigay ng kasalukuyang style sa mga napiling table; `D` ay nagtatanggal ng isa (hindi Standard, hindi ang kasalukuyan; ang mga table na gumamit nito ay nananatili ang itsura).
- Naka-save ang mga style kasama ng drawing (DWG at DXF).

### TABLEEXPORT

Sine-save ang ipinapakita ng table bilang CSV file (ang formula bilang value nito). `Select a table`, o piliin muna ito. Ang mga text cell na nagsisimula sa `=`, `+`, `-` o `@` ay nakakakuha ng nangungunang `'` para hindi ito patakbuhin ng spreadsheet.

### TABLEPASTE

Aliases: `PASTETABLE`. Gumagawa ng table mula sa mga cell ng spreadsheet sa clipboard, pagkatapos tinatanong ang sulok nitong kaliwang-itaas. Kapareho ng {{cmd:TABLE}} › `Paste`.

### DATALINK

Aliases: `DL`. `Data link: [New/List/Remove] <New>`. Ang `N` ay nagtatanong ng CSV file, naglalagay ng table nito at naaalala ang pangalan ng file; ang `L` ay naglilista ng mga link kasama ang file, laki, kailan ito nabasa at ilan ang table na gumagamit; ang `R` ay nag-aalis ng link (nananatili ang mga table nito bilang simpleng table).

### DATALINKUPDATE

Aliases: `DLU`. Binabasa muli ang file ng data link at pinupuno muli ang mga table na naka-link dito (idinadagdag o inaalis ang mga hilera at column para tumugma). Hindi makakabukas ng file nang mag-isa ang browser, kaya hihingin nito na piliin mo muli ang file. Kapag may ilang link, tinatanong nito kung alin.

### FIELD

Naglalagay ng field sa drawing: text na kusang kinakalkula ang sarili. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: ngayon, o ang na-save, na-create o na-plot na petsa, at format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: ang pangalan ng file, may o walang extension. `S`: ang numero ng sheet, ang title nito, o ilan ang sheet. `P`: isang property ng drawing ayon sa pangalan (tingnan ang {{cmd:DWGPROPS}}). `O`: pumili ng object, pagkatapos kung ano ang babasahin (area, length, perimeter, radius, diameter, layer, name, x, y, text, rotation, color) at ang mga decimal. `E`: isang formula. `C`: isang text na may mga code na tinype nang ganoon, gaya ng `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Pagkatapos `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: ang napiling text ay dinadagdagan ng field pagkatapos ng nilalaman nito; ganoon din ang cell ng table; ang block reference ay nagtatanong kung aling attribute; ang {{key:Enter}} ay nagtatanong ng taas at punto para sa bagong text.
- Sa screen, may magaan na kulay abong background ang field; hindi ito kailanman nasa plot at PDF. Ang pag-type sa ibabaw ng text ng field nang manu-mano ay tinatapos ang field. Ang field na hindi makalkula ay nagpapakita ng `####`.
- Hinahanap ng field ng object ang object nito sa pamamagitan ng susi na itinatago ng CadCraft sa mga object (Settings › CadCraft › Merge-friendly files); kapag naka-off ang mga susi, tumatanggi ito.

### UPDATEFIELD

Aliases: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. Ang `S` ay nagtatakda kung kailan kusang mag-a-update ang mga field: i-type ang mga letra ng `O` open, `S` save, `P` plot, `R` regen (lahat ng apat para magsimula), o `NONE`.

### DWGPROPS

Aliases: `DRAWINGPROPS`. Inililista ang mga property ng drawing, pagkatapos `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Ang unang anim ay ang ipinapakita ng panel na {{ui:Drawing details}}; idinadagdag ng `U` ang sarili mong pangalan at value, inaalis ng `R` ang isa. Binabasa sila ng mga field (`%<prop:title>%`, `%<prop:Client>%`) at sumusunod agad. Tumatanggi sa custom na pangalan na isa sa mga built-in o naglalaman ng `%`, `<`, `>`, quote o backslash.

## Parametric

Tingnan ang [I-constrain ang drawing](topic:constraints) at [Gamitin ang parameter at equation](topic:parameters). Gumagana ang mga constraint sa tab na {{ui:Model}}.

### GEOMCONSTRAINT at ang mga GC command

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, pagkatapos ang mga prompt ng command na iyon.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (ang pangalawa ang gumagalaw).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT at ang mga DC command

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (numero, expression, o `name=expression`).
- {{cmd:DCALIGNED}}: gaya ng nasa itaas, may `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. Ang `S` ay nagtatanong ng distance at angle tolerance.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; mawawala ang kanilang mga constraint.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, pagkatapos `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS at -PARAMETERS

Ang {{cmd:PARAMETERS}} (aliases `PAR`, `PARAM`) ay nagbubukas ng panel na {{ui:Parameters}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Nagda-download ng macro (.swb) na muling bumubuo ng model bilang iisang constrained sketch sa SolidWorks. Tingnan ang [Ilipat ang mga sketch papunta at mula sa ibang part modeler](topic:solidworks-sketches).

## Blocks

### ANNOSCALE

Aliases: `CANNOSCALE`. Sinasabi ang annotation scale ng drawing at kung ilang annotative object ang nilalaman nito, pagkatapos nagtatanong ng `New annotation scale`: i-type ang `1:50`, `1:100`, `2:1`, isang payak na numero (ang `50` ay 1:50) o ang pangalan ng isa sa sariling scale ng drawing. Bawat annotative text at dimension ay nire-resize para mag-print sa parehong laki sa bagong scale, sa isang undo step; ang mga object na hindi annotative ay nananatili, gayundin ang object na may listahan ng scale na walang bagong scale ({{cmd:OBJECTSCALE}}). Tingnan ang [Mga unit, papel at scale](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliases: `OBJSCALE`. `Select annotative objects`, pagkatapos `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Ang annotative text o dimension ay may listahan ng annotation scale. Ang `Add` at `Delete` ay nagtatanong ng scale (`1:50`, `2:1`, payak na numero, o pangalan ng isa sa sariling scale ng drawing); ang `Current scale` ay nagdaragdag ng annotation scale ng drawing; ang `List` ay nagpi-print ng mga scale ng bawat object. Ang viewport na ang scale ay nasa listahan ng object ay ipinapakita ang object sa laking nagpi-print ng taas nito sa papel sa scale na iyon, sa screen at sa plot. Hindi maaaring burahin ang huling scale. Hindi kasama ang mga object na hindi annotative: i-on muna ang Annotative sa Properties. Naka-save ang mga listahan sa DWG at DXF bilang sariling data ng CadCraft. Tingnan ang [Mga unit, papel at scale](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliases: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Kapag naka-on (gaya ng pagsisimula ng drawing): ang annotative object ay ipinapakita rin sa viewport, o sa model, na ang scale ay wala sa listahan nito, sa laking mayroon ito. Kapag naka-off: hindi ito ipinapakita roon, at hindi ito mapipili sa model. Isang undo step ang pagpalit; hindi ito naka-save sa file.

### SCALELISTEDIT

Aliases: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` hanggang {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Ang Edit at Delete ay nagtatanong ng pangalan ng scale. Ang sariling scale ng drawing ay sumasali sa listahan ng scale ng viewport at plot, at naka-save kasama ng drawing. Tingnan ang [Mga unit, papel at scale](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT at PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: mga punto na dinadaanan ng kurba; `Close`, `Undo`, pagkatapos `Start tangent` at `End tangent` (isang punto, o {{key:Enter}}). Ang Method › Control vertices ay nagtatanong ng degree (1 hanggang 5) at gumuguhit mula sa control polygon. Ang Object ay ginagawang spline ang mga polyline sa pamamagitan ng kanilang vertex. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, ang `M` para sa ilang object; ang mga linya, arko at spline ay iniaalok muna bilang polyline. Tingnan ang [Spline at polyline](topic:splines).

### BLOCK

Aliases: `B`, `BMAKE`.

- `Enter block name`. Kung mayroon na: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Papalitan sila ng iisang reference sa bagong block.

### WBLOCK

Aliases: `W`, `-WBLOCK`. Isinusulat ang isang block, ilang object o ang buong drawing bilang bagong DWG o DXF file. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ito ang magiging origin ng bagong drawing), `Select objects`, pagkatapos `File format [DWG/DXF/R12 DXF]` at `File name for the new drawing`, pagkatapos `What to do with the objects [Retain/Convert to block/Delete]`. Pinapalitan ng Convert ang mga ito ng iisang reference sa block na may pangalan ng file; inaalis sila ng Delete.
- **Block**: `Block to write out`. Ang sariling mga object ng block, ang base point nito ang origin, kasama ang mga nakapaloob na block.
- **Entire drawing**: bawat object sa model space. Hindi isinusulat ang mga sheet; gamitin ang {{cmd:SAVEAS}} para sa kopyang nagpapanatili sa mga ito.

Ang bagong file ay naglalaman lang ng mga layer, linetype, text at dimension style at block na ginagamit ng mga object nito, at ang unit ng drawing. Ang bersyon ng DWG ay ang huling ginamit ng {{cmd:SAVEAS}}. Sa browser, nagda-download ang file; sa Studio, bumubukas ang save dialog.

### ATTDEF

Aliases: `ATT`, `DDATTDEF`, `-ATTDEF`; o {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Ini-print ang mga mode, pagkatapos `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` kapag constant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. Dinadala ng {{cmd:BLOCK}} ang mga attribute definition sa block.

### EATTEDIT at ATTEDIT

`EATTEDIT` (`DDATTE`, o i-double-click ang reference na may attribute; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, pagkatapos ang dialog na {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): ang parehong reference, pagkatapos `<prompt> (<TAG>) <value>` para sa bawat attribute; ang {{key:Enter}} ay nagpapanatili ng value. Tingnan ang [Mga attribute](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Napapanatili ang mga value; ang mga bagong attribute ay nakakakuha ng default nila, ang mga inalis ay mawawala, nire-reset ang mga posisyon.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. Ang dialog: block, mga attribute (tag, prompt, default, mode, pagkakasunod), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT at REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (o ang selection). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; ang {{ui:Save the block}} at {{ui:Discard}} sa bar ay gumagawa ng parehong bagay. Ang buong pag-edit ay isang undo step. Tingnan ang [Mga attribute](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT at BCLOSE

`BE`; o {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` ay nagbubukas ng block editor. Ang `BCLOSE` ay nagtatanong ng `Close the block editor on "…" [Save/Discard] <Save>`; ang {{ui:Save block}} at {{ui:Discard changes}} sa banner ay gumagawa ng parehong bagay. Ang lahat ng ginawa sa editor ay isang undo step.

### VIEWBASE

Alias: `FLATSHOT`. Isang flat na 2D view ng mga solid sa 3D tab: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, isang scale (`1:20`, `2:1`; ang {{key:Enter}} ay kumukuha ng nababagay sa sheet), pagkatapos ang center ng view. Isang block reference, ang nakikitang gilid sa VIEW-VISIBLE, ang nakatagong gilid ay nakadash sa VIEW-HIDDEN. Tingnan ang [Mga flat view sa sheet](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliases: `-PUBLISH`; o {{ui:All sheets in one PDF}} sa dialog na {{ui:Plot to PDF}}. `Sheets to plot [All/Some]`: ang {{key:Enter}} ay nagpa-plot ng bawat sheet, ang `S` ay nagtatanong ng mga pangalan na pinaghihiwalay ng kuwit. Isang PDF, isang pahina at isang bookmark bawat sheet. Tingnan ang [Bawat sheet sa isang PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliases: `SSM`, `SHEETSETMANAGER`. Dinadala ka sa seksyong {{ui:Sheet set}} ng kaliwang panel: mga sheet mula sa maraming drawing, may numero at pamagat, ang kanilang title block ay pinupunan mula sa set, at nilalathala bilang iisang PDF. Tingnan ang [Sheet set](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): pumili ng DWG o DXF, pagkatapos ang insertion point nito. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; kapag higit sa isang link, pumili ng isa sa mga reference nito o i-type ang `N` at ang pangalan nito. Tingnan ang [Mga naka-link na drawing](topic:files#linked-drawings-external-references).

### COUNT

Aliases: `BCOUNT`; o {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: ang pagpili ay pumipili at nagbibilang ng bawat reference ng block na iyon sa space na ito; ang {{key:Enter}} o `A` ay naglilista ng lahat; ang `E` pagkatapos `C` (bilang) o `A` (attribute) ay nagda-download ng CSV. Tingnan ang [Bilangin ang block at mag-export ng schedule](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliases: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (hindi mahalaga ang letra). Ang `F` ay humihingi ng DWG o DXF, pagkatapos ang buong drawing o isa sa mga block nito; ang pangalang nagamit na ay nagtatanong ng {{ui:Keep existing}} o {{ui:Rename}}. Ang `L` ay nagbubukas ng library panel.
- `Specify insertion point [Scale/Rotate]`. Ang `S` ay nagtatanong ng `Specify scale factor`, ang `R` ng `Specify rotation angle`; parehong naaalala.
- Kapag nakatayo na ang block sa tabi ng mga object na paulit-ulit sa ibang lugar nang wala ito, may linyang nagsasabi kung ilang lugar ang iminumungkahi at nadadagdagan ng `suGgested` ang prompt: ang `G` ay nagpapakita sa mga ito; i-click malapit sa isa para ilagay doon ang block, ang `A` para sa lahat, {{key:Enter}} para bumalik. Kinukuha nila ang rotation ng kanilang mga katabi at ang default na value ng attribute. Hindi hinahanap ang mga drawing na may higit sa 20,000 object sa bukas na space.
- Pagkatapos `Enter <prompt> (<TAG>) <default>` para sa bawat attribute na hinihingi ng block. Tingnan ang [Mga attribute ng block](topic:attributes).

### LIBRARY

Aliases: `LIB`. Binubuksan ang library panel: maglagay ng mga item, mag-check ng update, credits ng library. Walang tanong. Tingnan ang [Mag-insert mula sa file o library](topic:insert-from-file-and-library).

### STEELMEMBER

Aliases: `SMEMBER`; o {{ui:3D member}} sa tab na {{ui:Standard}} ng library. `Section size <W12x26>` (gaya ng nakalista sa tab), pagkatapos `Start point [Column]` at `End point`: isang solid member sa 3D tab sa pagitan ng dalawang punto, nakapatong sa lupa. Ang `C` ay nagtatanong ng base point ng column at taas nito. Isang undo step. Tingnan ang [Maglagay ng steel section at standard part](topic:steel-and-standard-parts).

### PARTSLIST

Aliases: `PLIST`. `Top left corner of the parts list`, pagkatapos `Text height <2.5>`: gumuguhit ng table ng bawat standard part at steel section na inilagay mula sa library (item number, dami, part, standard, laki, haba, materyal, masa). Isang undo step. Tingnan ang [Maglagay ng steel section at standard part](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliases: `PU`. Inaalis ang mga block definition na walang gumagamit. Walang tanong.

### DELBLOCKS

O {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: pumili ng block reference, o `N` para sa listahan ng mga block na may filter (pumili ng ilan), o `X` / {{key:Enter}} para tapusin. Mawawala ang bawat reference — sa model, sa bawat sheet at sa loob ng ibang block — at pagkatapos ang definition, at sinasabi ng command line kung ano ang nabura at kung ano ang hindi. Hindi inaalok ang mga unnamed block at naka-link na drawing. Bumabalik ang prompt para sa susunod na block; ang buong command ay isang undo step.

### PASTEBLOCK

Ang {{cmd:PASTEBLOCK}} ay nagpe-paste ng kinopya mo ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) bilang iisang block: piliin ang insertion point at isang reference sa bagong block ang ilalagay doon, napili. Makakakuha ang block ng sariling pangalan (`A$C` at numero); ibinibigay ng {{cmd:RENAME}} ang sa iyo. Inaalis ng isang undo step ang reference at ang block.

### BLOCKREPLACE

Ang {{cmd:BLOCKREPLACE}} ay nagtatanong ng block na papalitan at ng block na ilalagay sa lugar nito (ang `?` ay naglilista ng mga block), pagkatapos binabago ang bawat reference sa model, sa bawat sheet at sa loob ng ibang block. Pinapanatili ng bawat reference ang lugar, scale, rotation, layer at ang mga value ng attribute na mayroon ang parehong block; ang mga attribute na sa bagong block lang ay nagsisimula sa kanilang default, at sinasabi nito kung aling value ang nawala. Kapag wala nang gumagamit sa lumang block, nag-aalok itong alisin ito. Tumatanggi sa mga naka-link na drawing at sa kapalit na magpapasok ng block sa sarili nito. Isang undo step.

### MINSERT

Ang {{cmd:MINSERT}} ay naglalagay ng block sa mga hilera at column: pangalan ng block, insertion point, scale, rotation, bilang ng hilera at column, at ang distansya sa pagitan nila. Ang buong set ay ipinipihit ng rotation. Bawat isa ay sariling reference (10,000 sa pinakamarami), kaya maaaring ilipat o burahin ang alinman pagkatapos.

### BLOCKSPALETTE

Aliases: `BLOCKSPAL`; o {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Ipinapakita ang panel na {{ui:Blocks}} na nasa filter ang cursor. Bawat block ay may maliit na larawan; ang pinakahuling nailagay ang nauuna. Ang dalawang button sa tabi ng filter ay lumilipat sa pagitan ng listahan at grid ng mga larawan. I-click ang larawan (o {{ui:Insert}}) para ilagay ang block gamit ang {{cmd:INSERT}}, o i-drag ito sa drawing para ilagay kung saan mo ito ibinagsak.

{{ui:Libraries}}, sa ilalim ng listahan: ang {{ui:Add a drawing}} ay kumukuha ng sarili mong DWG o DXF file at naglilista ng mga block nito na may larawan, at ang buong drawing bilang iisang block. Ang paglalagay ng isa ay kinokopya ang definition nito (at ang mga block na nakapaloob dito, at ang layer nila) sa drawing na ito, gaya ng opsyong `File` ng {{cmd:INSERT}}; ang block na nasa drawing na ito na may parehong definition ay ginagamit nang walang tanong; ang may parehong pangalan pero magkaiba ay nagtatanong ng {{ui:Keep existing}} o {{ui:Rename}}. Sa browser, nananatili ang file hanggang magsara ang pahina. Sa CadCraft Studio, ang {{ui:Add a folder}} ay naglilista ng mga drawing sa folder, bawat isa ay nabubuksan kapag na-click mo; naaalala ang mga file at folder. Inaalis ng maliit na x ang library sa listahan; hindi ginagalaw ang file. Ang ibinabahaging {{ui:Library}} ay ibang bagay: tingnan ang [Mag-insert mula sa file o library](topic:insert-from-file-and-library).

### BCONVERT

O {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Hinahanap ang geometry na paulit-ulit at ginagawang reference sa iisang block ang bawat kopya.

- `Select the objects that repeat, or [Block]`: ang mga object ng isang kopya. Ang `B` ay pumipili ng umiiral na block sa halip, para hanapin ang mga kalat na kopya ng mga object nito.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: ang `M`, `S` at `P` ay nagpapalit kung ano ang binibilang na kopya; ang {{key:Enter}} ay naghahanap. Naaalala ang mga setting.
- `Name for the new block <Block1>`, pagkatapos `Specify the block's base point` ({{key:Enter}} ang kumukuha sa ibabang-kaliwang sulok ng selection).
- Sinasabi nito kung ilan ang ibang set ng object na pareho ang geometry, itinatampok ang lahat ng papalitan nito, at nagtatanong ng `Yes/No`.

Ang kopya ay parehong mga object na inilipat at ipinihit sa anumang anggulo (at sinalamin o sinukat sa iisang factor kapag naka-on ang mga iyon): dapat may katumbas ang bawat object, hanggang sa isang milyonesimo ng laki ng selection. Bawat reference ay may sariling rotation at scale (ang salamin ay negatibong Y scale), at ang layer na pinagsaluhan ng mga object nito. Ang mga object sa naka-lock na layer ay hindi ginagalaw at binibilang. Naghahanap ito sa bukas na space (ang model o bukas na sheet). Ang napakalaking paghahanap ay humihinto sa work limit at sinasabi ito. Isang undo step.

### BSEARCH

O {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: bahagi ng pangalan ng block, o pattern na may `*` at `?`. Inililista ang bawat block kasama ang mga reference nito dito at sa buong drawing.
- `A`: value ng attribute, o `TAG=value`. Inililista ang mga block na ang reference ay may hawak nito, kasama ang mga value na nakita. Ang constant na attribute ay binibilang.
- `G`: pumili ng mga object, o isang block reference, at ililista ang mga block na halos magkapareho ang hugis (at least 85%), pinakamalapit muna. Hindi binibilang ang laki, rotation at mirroring. Ang sukat ay naghahambing ng mga distansya sa pagitan ng mga punto na nakakalat sa kahabaan ng mga outline, kaya nakikita nito ang mga magkamukha; gamitin ang {{cmd:BCONVERT}} para sa eksaktong kopya.

Ang mga reference na nakita sa bukas na space ay napipili, handa para sa susunod na command.

### BREPLACE

O {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: pinapalitan ng `S` ang mga block reference na pipiliin mo ng block na pangangalanan mo; ang `A` ay nagtatanong ng block at ng kapalit nito at binabago ang bawat reference, gaya ng ginagawa ng {{cmd:BLOCKREPLACE}} (parehong code). Pinapanatili ng reference ang lugar, scale, rotation, layer at ang mga value ng attribute na mayroon ang parehong block; ang mga value na walang lugar sa bagong block ay inaalis at pinangalanan. Ang `?` ay naglilista ng mga block. Isang undo step.

### DATAEXTRACTION

Aliases: `EATTEXT`, `DX`; o {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Naglilista ng mga block, ng kanilang mga attribute at property ng object bilang table o CSV file.

- Gumagana sa selection, o nagtatanong ng `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` kapag ang selection ay may pareho. Ang mga unnamed block, table at bill of materials ay hindi kailanman nililista.
- Ini-print nito ang mga column na mapipili (pangalan, uri, layer, X, Y, rotation, scale, length, area, color, linetype, space, at isa bawat attribute tag), pagkatapos `Columns, by name or number with commas between`. Ang {{key:Enter}} ay kumukuha ng mga may bituin: ang pangalan at bawat attribute para sa mga block; ang uri, layer at haba para sa mga object.
- `Put identical rows together with a count? [Yes/No] <Yes>`, pagkatapos `Put the list in a: [Table/Csv] <Table>`. Ang table ay karaniwang table ({{cmd:TABLEDIT}} ang nag-e-edit dito) at hindi live: patakbuhin muli ang command kapag nagbago ang drawing.
- Tumatanggi sa column na wala sa listahan. Ang table ay may hawak na 1,999 na data row; kinukuha ng CSV file ang lahat.

### COUNTTABLE

Binibilang ang block reference ng selection (o ng bukas na space) at inilalagay ang mga bilang sa table (`Block`, `Count`) o sa CSV file. Para sa bilang na kusang sumusunod sa drawing, tingnan ang {{cmd:BOMTABLE}}.

## Sheet at plotting

### LAYOUT

Aliases: `LO`, `NEWLAYOUT`; o ang button na {{ui:+}} sa ilalim ng drawing. Isang bagong sheet na may hangganan, title block at isang viewport, sa ISO A3 (o Tabloid para sa mga drawing sa pulgada o talampakan). Walang tanong.

### MVIEW

Aliases: `MV`. Sa sheet lamang ({{cmd:VPORTS}} sa sheet ay pareho ang ginagawa).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Ipinapakita ng viewport ang buong model sa standard na scale.
- `P` (Polygonal): i-click ang mga sulok ng outline (`Undo`, `Close`), {{key:Enter}} kapag tapos. Tumatanggi kapag mas kakaunti sa tatlong sulok.
- `O` (Object): `Select a closed object for the viewport's outline`: isang saradong polyline, bilog o ellipse sa sheet. Kinukuha ng viewport ang hugis nito (ang kurba bilang maiikling tuwid na piraso); nananatili ang object gaya ng dati. Tumatanggi sa object na hindi saradong.

### VPCLIP

Pinuputol ang viewport na nasa sheet na. `Select viewport to clip` (o piliin muna ito), pagkatapos `Select the object to clip to [Polygonal/Delete]`:

- I-click ang saradong polyline, bilog o ellipse, o {{key:Enter}} (o `P`) para i-click ang mga sulok ng polygon.
- Ang `D` (Delete, inaalok kapag naputol na ang viewport) ay ginagawa itong rectangle muli: ang kahon sa paligid ng outline na mayroon ito.
- Hindi gumagalaw sa papel ang ipinapakita ng viewport, at nananatili ang scale nito. Iginuguhit at naiimprenta lang ang model sa loob ng outline, at sumusunod ang hangganan. Isang undo step.
- Ang naputol na viewport ay may grip sa bawat sulok ng outline nito, bukod sa center at apat na sulok ng kahon nito (ang pag-drag sa sulok ng kahon ay nag-uunat ng outline kasama nito). Ipinapakita ng Properties ang Outline: Rectangle, o Clipped kasama ang bilang ng sulok.
- Iniingatan ng mga DWG at DXF 2000 file ang outline para sa CadCraft. Binubuksan ng ibang programa ang viewport bilang rectangle sa paligid nito; ang DXF R12 ay nag-iingat lang ng rectangle.
- Sa model tab, sinasabi nito na nasa sheet ang mga viewport.

### VPORTS

Aliases: `VIEWPORTS`. Ang {{cmd:SPLIT}} ay pareho rin mula sa sheet, at ang {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} ang nagpapatakbo nito. Sa model: `Enter number of panes [SIngle/2/3/4] <3>`; ang `2` ay nagtatanong ng `[Horizontal/Vertical] <Vertical>` (Vertical = magkatabi), ang `3` ay nagtatanong ng `[Left/Right] <Right>` (kung saan mapupunta ang malaking pane). Bawat pane ay nagpapanatili ng sariling view at space; ang pag-click ay gumagawa ng aktibong pane. Sa sheet, ito ay {{cmd:MVIEW}}. Tingnan ang [Hatiin ang screen](topic:split-screen).

### VPVIEW

Walang alias. Sa sheet lamang.

- `Select viewport` (nilalaktawan kapag may napili na), pagkatapos sa model: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Walang alias. Sariling coordinate system; hindi ito pag-e-edit. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: ang punto ay bagong origin, pagkatapos `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origin, isang punto sa positibong X axis, isang punto sa positibong-Y na panig. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` at isang pangalan. Ipinapihit ang view para maging pahalang ang bagong X axis. Tingnan ang [Ipihit ang view at gamitin ang sarili mong coordinate](topic:ucs-and-turned-view).

### PLAN

Walang alias. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: ipinipihit ang view ng aktibong pane para maging pahalang ang X axis ng UCS (o ng world). Walang gumagalaw sa drawing.

### TURNLEFT, TURNRIGHT, TURNWORLD

Walang alias; o {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Kapareho ng `UCS Z -90`, `UCS Z 90` at `UCS W`, na sumusunod ang view.

### VPLAYER

Walang alias. Sa sheet, o sa loob ng viewport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: ang `F`, `T`, `R` ay nagtatanong ng mga pangalan ng layer (kuwit, at wildcard na `*` at `?`), pagkatapos `[All/Select/Current] <Current>` na viewport; ibinabalik ng Reset ang bawat layer sa default nitong "frozen in new viewports"; itinatakda ng `V` ang default na iyon (`[Frozen/Thawed]`), na ginagamit ng {{cmd:MVIEW}}. Ang `?` ay naglilista ng mga layer na naka-freeze sa kasalukuyang viewport. Ang column ng viewport sa Layers panel ay gumagawa ng parehong bagay para sa isang viewport. Tingnan ang [I-freeze ang layer sa isang viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliases: `MS`; o i-double-click sa loob ng viewport. Sa sheet lamang. Gumawa sa model sa pamamagitan ng viewport: ang napili, ang nag-iisa sa sheet, o `Click inside the viewport to work in`. Ang pan at zoom sa loob nito ay nagbabago sa view ng viewport (ang naka-lock sa display ay nananatili ito at gumagalaw ang sheet sa halip); ang bagong view ay isinusulat bilang isang undo step. Tingnan ang [Magtrabaho sa model sa pamamagitan ng viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliases: `PS`; o i-double-click sa labas ng viewport, o i-click ang tab sa ilalim ng drawing. Bumabalik sa sheet.

### PLOT

Aliases: `PRINT`, `PUBLISH`, `EXPORTPDF`; o {{key:Mod+P}}. Binubuksan ang dialog na {{ui:Plot to PDF}}. Tingnan ang [Plot sa PDF](topic:plot-pdf).

### PLOTSTYLES

Aliases: `STYLESMANAGER`, `PSTABLES`; o {{ui:Edit tables…}} sa dialog na {{ui:Plot to PDF}}. Binubuksan ang {{ui:Plot style tables}}: kung ano ang iimprenta ng bawat kulay (kulay, gray, ink, lineweight), naka-save kasama ng drawing. Tingnan ang [Plot style table](topic:plot-pdf#plot-style-tables).

### CHSPACE

Ang {{cmd:CHSPACE}} ay naglilipat ng mga object sa pagitan ng sheet at model sa pamamagitan ng viewport, sinusukat at ipinipihit para magmukhang pareho mula sa kabilang panig. Sa sheet, pumili ng mga object at mapupunta sila sa model (piliin ang viewport kapag higit sa isa ang sheet). Habang nagtatrabaho ka sa model sa pamamagitan ng viewport ({{cmd:MSPACE}}), ang mga napiling object ay mapupunta sa sheet. Sinasabi nito kung ilang beses na mas malaki o mas maliit sila naging. Nananatili sa sheet nila ang mga viewport. Isang undo step.

### ISODRAFT

Ang {{cmd:ISODRAFT}} ay nagpapalit ng isometric drafting sa `ON` o `OFF`, o diretso sa `Left`, `Top` o `Right` plane. Habang naka-on: pinapanatili ng Ortho ({{key:F8}}) ang mga linya sa dalawang axis ng plane (left: 90° at 150°; top: 30° at 150°; right: 30° at 90°), sumusunod ang polar tracking ({{key:F10}}) sa parehong axis, ang snap to grid ({{key:F9}}) ay gumagamit ng isometric na grid, at iginuguhit ang grid ({{key:F7}}) na may linya sa 30°, 90° at 150°. Nakakakuha ang {{cmd:ELLIPSE}} ng `Isocircle`: magbigay ng center at radius (o `Diameter`) at iguguhit nito ang ellipse na ipinapakita ng bilog sa kasalukuyang plane. Nananatiling flat ang drawing: mga tulong ito sa pagguhit ng pictorial na view, hindi 3D model. Para sa session na ito ang setting at hindi naka-save sa file.

### ISOPLANE

Ang {{cmd:ISOPLANE}} ay pumipili ng plane kung saan gumagana ang isometric drafting: `Left`, `Top` o `Right`. Ang Enter ay pupunta sa susunod na plane. Habang naka-on ang isometric drafting, ang {{key:F5}} ay gumagawa ng parehong bagay sa gitna ng command; kapag naka-off, iniiwan ang {{key:F5}} sa browser.

## Inquiry

### CAL

Ipinapakita ang value ng kalkulasyon, gaya ng pagbabasa nito kahit saan na tinatype ang haba.

- `Expression`: i-type, halimbawa `12'6"+3/4"` o `(24'-0")/3`, at pindutin ang {{key:Enter}}. Ipi-print ng CadCraft ang `= 12'-6 3/4"   (150.75 drawing units)`. Tingnan ang [Aritmetika sa tinype na value](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliases: `DI`; o {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`, `Specify second point`. Ini-print ang distansya, anggulo, Delta X at Delta Y.

### AREA

Aliases: `AA`; o {{ui:View}} › {{ui:More}} › {{ui:Area}}. Ini-print ang lawak at perimeter.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - I-click o i-type ang mga sulok; sa `Specify next point (Enter closes) [Undo]`, pindutin ang {{key:Enter}} para isara ang outline. Binabawi ng `U` ang huling sulok.
  - {{key:Enter}} o `O`, pagkatapos `Select object`: isang bilog (ipi-print ang circumference nito), isang ellipse, isang polyline (ang bukas ay isinasara ng tuwid na linya para sa lawak, at ipi-print ang haba nito), o isang hatch (inaalis ang mga butas).
  - Ang `A` (Add area) at `S` (Subtract area) ay nagpapanatili ng tuloy-tuloy na kabuuan: nagsisimula ang prompt sa `(ADD mode)` o `(SUBTRACT mode)`, bawat lawak ay idinadagdag o inaalis, at ipinapakita ang `Total area = …` pagkatapos ng bawat isa. Sa mga mode na ito, pumipili ang `O` ng mga object hanggang {{key:Enter}}, at ang {{key:Enter}} sa unang prompt ay tinatapos ang command.

### MEASUREGEOM

Aliases: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; pagkatapos ng bawat sukat, nagtatanong muli, at ang default ay `eXit`.

Sinusukat ng `Quick` ang paligid ng pointer habang inililipat mo ito: ang distansya sa pinakamalapit na object sa kanan, itaas, kaliwa at ibaba (sa kahabaan ng axis ng kasalukuyang UCS), iginuguhit habang gumagalaw; at ang anggulo kung saan ang dalawa sa mga kapitbahay na iyon ay tuwid at nagtatagpo. Ang click ay nagsusulat ng apat na distansya, ang malinaw na lapad at taas at ang mga anggulo sa history; ang Enter ay bumabalik sa mga opsyon. Binabasa nito kung ano ang nasa screen.

- `D`: dalawang punto, gaya ng {{cmd:DIST}}.
- `R`: `Select arc or circle`; ini-print ang radius at diameter.
- `A`: isang arko (kasamang anggulo nito), isang linya at pagkatapos ang pangalawang linya (ang anggulo sa pagitan nila, patungo sa malayong dulo nila), o {{key:Enter}} at tatlong punto (vertex, pagkatapos ang dalawang dulo).
- `AR`: gaya ng {{cmd:AREA}}, isang lawak.

### ID

Walang alias. `Specify point`; ini-print ang X at Y nito.

### LIST

Aliases: `LI`, `LS`. `Select objects`; ini-print ang uri, layer at mga pangunahing sukat ng bawat object.

### MASSPROP

Ibinibigay ng {{cmd:MASSPROP}} ang section property ng mga region at saradong object na pipiliin mo, pinagsama: lawak, perimeter, bounding box, centroid, moment of inertia sa paligid ng X at Y axis na dumaraan sa origin, product ng inertia, radius ng gyration, ang parehong moment sa paligid ng centroid, at ang pangunahing moment kasama ang direksyon ng mga axis nito. Ang mga butas sa region ay binibilang bilang butas. Ang mga figure ay nasa drawing unit at eksakto para sa outline na gawa sa linya at arko; ang ellipse at spline ay sinusukat bilang maiikling tuwid na segment, at sinasabi nito iyon. Pagkatapos ng report, nagtatanong ito kung isusulat sa text file. Ang mga object na hindi saradong ay hindi kasama, at sinasabi nito kung ilan.

## View, file at iba pa

### ZOOM

Aliases: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. I-click ang dalawang sulok para sa window. `E`, `A` o Enter: ang buong drawing.
- `P` (Previous, o {{ui:Previous}} sa toolbar) ay bumabalik sa naunang view, hanggang 10 view bawat tab; ang sunod-sunod na wheel step o isang pan ay binibilang bilang isang view.
- Ang numero gaya ng `2`, `2x` o `0.5x` (o `S` at pagkatapos ang numero) ay nagza-zoom in o out ayon sa factor na iyon sa gitna ng screen.
- `C` ay nagtatanong ng `Specify center point` at `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT at ang mga PDF command

Aliases: `PDFATT` para sa {{cmd:PDFATTACH}}, `PDFIM` para sa {{cmd:PDFIMPORT}}. Naglalagay ang {{cmd:PDFATTACH}} ng PDF page sa ilalim ng drawing (file, page, insertion point, scale, rotation); ginagawang drawing object ng {{cmd:PDFIMPORT}} ang linya, kurba, fill at text ng isang page sa mga layer na ipinangalan sa PDF, sa totoong laki, sa typed na scale, o sinusukat mula sa dalawang punto at totoong distansya. Pinuputol ng {{cmd:PDFCLIP}} ang underlay, itinatakda ng {{cmd:PDFADJUST}} ang fade, contrast, monochrome o pinapatay ito, ini-on o i-off ng {{cmd:PDFLAYERS}} ang sariling layer ng PDF, at ibinibigay ulit ng {{cmd:PDF}} sa CadCraft ang mga file na ginagamit ng underlay ng drawing. Tingnan ang [PDF underlay](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Drawing autocomplete: kapag walang tumatakbong command, may kulay abong multo na nagpapakita kung ano ang sinasabi ng sariling pattern ng drawing na susunod. Ang {{cmd:AUTOCOMPLETE}} ay nagpapalit nito sa `On` o `Off` (o sa Settings › CadCraft) o `Show`s kung ano ang imumungkahi nito ngayon. Ang **Tab** ay gumuguhit sa multo bilang isang undo step, ang **Esc** ay itinatago ito hanggang magbago ang drawing. Naghahanap ito ng tatlong bagay sa pinakabagong object: ang susunod na kopya ng isang bagay na iginuhit nang dalawang beses o higit pa sa pantay na hakbang (stud, column, riser at tread ng hagdan), ang susunod na hakbang ng polyline na hagdan, at ang nawawalang gilid ng kuwarto o kadena ng pader. Sa gitna ng {{cmd:LINE}} o {{cmd:PLINE}}, ang multo ay ang **next point**: ang susunod na hakbang ng hagdan (riser, tread, riser…), ang ikaapat na sulok ng rectangle, ang punto na nagsasara nito, o isa pang pantay na hakbang. Ilapit ang cursor dito at pindutin ang **Tab**, na parang nag-click ka roon; magpatuloy o pindutin ang Enter. Kinakalkula ito sa computer na ito gamit ang mga patakaran, nang walang model.

### AUTOSHEET

Alias: `ASH`. Mga sheet na kusang nag-aayos ng sarili. Kinukuha ng {{cmd:AUTOSHEET}} ang mga piraso ng drawing (ang mga pinangalanan mong view, o ang hiwalay na piraso ng model, o ang buong model), pumipili ng laki ng papel (o ang ibibigay mo), binibigyan ang bawat piraso ng standard na scale (iisang scale para sa lahat, o ang pinakamalaking kaya ng bawat isa) at inilalagay ang mga view sa mga hilera sa mga bagong sheet, na may title block at caption (pangalan at scale) sa ilalim ng bawat isa. Ang hindi kasya sa iisang sheet ay makakakuha ng sariling sheet. Isang undo step. Kinakalkula sa computer na ito gamit ang mga patakaran, nang walang model.

### PHOTOSKETCH

Alias: `PSK`. Litrato ng sketch tungo sa drawing. Pumili ng litrato (JPEG, PNG o TIFF) ng hand sketch sa papel. Hinahanap ng {{cmd:PHOTOSKETCH}} ang apat na sulok ng papel, itinutuwid ang perspektiba, kinukuha ang laki ng papel na itinakda mo (`Paper`, o ang pinakamalapit na standard) at ang `Scale` ng sketch (1 : n), pagkatapos ini-trace ang mga linya ng panulat tungo sa linya, arko at bilog, na may layer para sa bawat kulay ng panulat (black, red, blue, green). Kapag hindi nito mahanap ang gilid ng papel, kukunin nito ang buong litrato bilang sheet at sasabihin ito. Hindi kasama ang sulat-kamay. Isang undo step. Ginagawa sa computer na ito gamit ang klasikong image processing, walang model, walang ipinapadalang kahit saan. Tingnan din ang mga command ng na-scan na drawing.

### AUTODIM

Alias: `ADIM`. Awtomatikong dimension ayon sa patakaran. Dinidimension ng {{cmd:AUTODIM}} ang mga napiling object (o ang buong drawing) mula sa kanilang level at plumb edge: isang kadena ng dimension sa mga gilid na pipiliin mo (`Sides`), isang pangkalahatang dimension sa labas nito, ang lapad ng bawat opening (puwang sa pagitan ng magkakalinyang linya ng pader), diameter para sa bawat laki ng butas, at may `Grid` ang spacing ng mga grid line. Hindi na ginagawa ang dimension na naroon na. Isang undo step. Kinakalkula sa computer na ito gamit ang mga patakaran.

### GRIDMOVE

Alias: `GM`. Ang paggalaw ng grid line ay nagdadala ng set. Inililipat ng {{cmd:GRIDMOVE}} ang isang grid line (linyang nasa layer na ang pangalan ay nagsasabing grid o axis) at ang nakasabit dito: ang mga pader na may dulo sa linya ay nag-uunat para sumunod dito, ang mga pader sa kahabaan nito ay gumagalaw nang buo, ang mga column (block reference at bilog sa linya), ang bubble at tag nito ay gumagalaw, at ang mga dimension na ang punto ay nasa linya ay sumusukat ng bagong spacing. Magbigay ng dalawang punto (ang bahaging nasa kabila ng linya lang ang binibilang) o `Distance`. Ibinabalik ng isang undo step ang lahat. Ginagawa ayon sa mga patakaran sa computer na ito.

### DETAILS

Alias: `DET`. Mga detalyeng humahanap sa iyo. Pinananatili ng {{cmd:DETAILS}} ang sariling mga detalye ng firm ninyo: ang `Add` ay naglalagay ng block ng drawing na ito sa listahan, pinamamahalaan ito ng `List` at `Remove`, at niraranggo ng `Find` ang mga ito para sa napili (o para sa huling iginuhit mo) ayon sa mga salita sa mga layer, pangalan ng block, pattern ng hatch at tala nito laban sa pangalan at tala ng bawat detalye, kaya ang window head ay makakahanap ng sill flashing mo. Pumili ng numero at punto para ilagay ito. Kapag naka-on ang `Hint` (at gayundin sa Settings › CadCraft), ang pagpili ng bagay na tugma sa isang detalye ay naglalagay ng isang linya sa status bar. Naka-save ang listahan sa browser na ito, sa computer na ito, at ang listahang iyon ang hinahanap. Inilalagay ng `Share` ito sa iyong Documents folder din (`.cadcraft/firm-details.json`, kasama ang drawing ng bawat block): ang `Pull` ay nagdadagdag ng mayroon ang team mo at wala ka, ang `Push` ay nagdadagdag ng mayroon ka at wala sila, ang `Both` ay ginagawa ang dalawa, at walang inaalis mula sa alinmang panig. Buksan muna ang Documents folder ({{cmd:DOCUMENTS}}); kapag ang folder na iyon ay folder ng Team Cloud Plan, iisang listahan ang ibinabahagi ng buong team. Ang detalyeng item sa Library panel ay may button na **Add to my firm's details** na inilalagay ito sa parehong listahan. Ginagawa ayon sa mga salita sa computer na ito, walang model.

### SKETCHFIX

Alias: `SKF`. Ang sketch ng panulat ay nagiging tumpak na geometry. Pindutin at i-drag ang isang freehand stroke sa bawat pagkakataon (panulat, mouse o daliri), pagkatapos Enter. Ang bawat stroke ay binabasa bilang linya, bilog, arko, rectangle o polyline: ang halos pahalang at patayong linya ay ginagawang eksaktong pahalang at patayo, ang saradong bilog na stroke ay nagiging bilog, ang saradong stroke na may apat na tamang-anggulong sulok ay nagiging rectangle, at ang mga dulo ng stroke ay hinihila nang magkasama at papunta sa mga dulong nasa drawing na. Isang undo step. Ginagawa ayon sa mga patakaran sa computer na ito, walang model.

### SCANATTACH at ang mga command ng na-scan na drawing

Aliases: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; ang {{cmd:RASTERSNAP}} ay walang alias. Gumagana sila sa larawan, isang undo step bawat isa. Ipinapasok ng {{cmd:SCANATTACH}} ang PNG, JPEG, TIFF (isang page o lahat) o PDF page na larawan. Ang {{cmd:SCANSCALE}} ay nag-i-scale sa sheet mula sa dalawang napiling punto at totoong distansya. Ang {{cmd:SCANALIGN}} ay gumagalaw at nagpapaikot nito sa dalawang punto (`Scale the sheet to fit` Yes/No). Ang {{cmd:SCANDESKEW}} ay nagpapakita ng anggulo ng mahahabang linya ng sheet at pinipihit ang sheet kapag `Accept` mo o nagbigay ka ng `Value`. Ginagawa ng {{cmd:SCANCLEAN}} itong itim at puti (`Threshold` Auto/Adaptive/Level, `Specks`) at `Run`. Pinapanatili ng {{cmd:SCANCROP}} ang isang window. Binubura ng {{cmd:SCANERASE}} ang `Rectangle`, `Polygon` o `Lasso`. Ini-trace ng {{cmd:SCANTRACE}} ang mga linya at arko sa bagong layer (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) at iniuulat kung ano ang nakita nito at kung ano ang iniwan nitong raster. Inililista ng {{cmd:SCANINFO}} ang orihinal na file at ang mga hakbang. Ang {{cmd:RASTERSNAP}} ay nagpapalit ng snapping sa mga linya ng na-scan na sheet sa On o Off. Tingnan ang paksang Scanned drawings and the trace.

### REGEN at REGENALL

Aliases: `RE` para sa {{cmd:REGEN}}, `REA` para sa {{cmd:REGENALL}}. Muling binubuo ang iginuhit sa screen mula sa drawing: ang {{cmd:REGEN}} ang tab na tinitingnan mo (sa sheet, ipinapakita rin ang model na ipinapakita ng mga viewport nito), ang {{cmd:REGENALL}} ang bawat tab, bawat pane ng split-screen at bawat bukas na drawing. Gamitin ang mga ito kapag mukhang luma ang larawan pagkatapos ng script o napakalaking pagbabago, o kapag binago ng assistant ang drawing; hindi nagagalaw ang mismong drawing, kaya walang dapat i-undo.

### NAMEDVIEW

Aliases: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, pagkatapos ang pangalan ng view. Sine-save ng `S` ang view sa screen, ang `W` ay isang window na pipiliin mo, ang `R` ay nagpapakita ng naka-save na view, ang `D` ay nagbubura ng isa, ang `?` ay naglilista ng mga view ng tab na ito. Ang pag-save sa umiiral nang pangalan ay pumapalit dito; bawat pagbabago ay isang undo step. Nabibilang ang mga view sa tab kung saan sila na-save. Iniingatan ng mga DWG at DXF file ang mga ito (ang VIEW table); ang mga view ng sheet ay bumabalik sa unang sheet, dahil hindi sinasabi ng file kung alin.

### UNDO at REDO

Aliases: `U` para sa {{cmd:UNDO}}; ang {{cmd:REDO}} ay walang alias. Gayundin ang {{key:Mod+Z}} at {{key:Mod+Y}}.

### LAYER

Aliases: `LA`. Dinadala sa panel na {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` o isang pangalan (ang `?` ay naglilista: Continuous, ang sariling linetype ng drawing, at DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE kasama ang laki nila na `2` (kalahati) at `X2` (doble)). {{cmd:LWEIGHT}} (`LW`): ang lineweight para sa mga bagong object sa mm, o `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): ang linetype scale ng drawing (maaaring i-undo). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — kapareho ng button na {{ui:LWT}} sa status bar. Tingnan ang [Lineweight at linetype](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, pagkatapos ang bagong pangalan; sumusunod ang mga object o reference. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` hanggang {{key:Enter}}, pagkatapos `Select object on target layer or [Name]` at `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, pagkatapos `Y`: mawawala ang layer at bawat object dito (hindi ang layer 0, DEFPOINTS o ang kasalukuyang layer). Isang undo step bawat isa. Tingnan ang [Ayusin ang drawing gamit ang mga layer](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Mga layer sa pamamagitan ng pagpili ng mga object; nasa menu na {{ui:Tools}} ng {{ui:Layers}} panel din. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, pagkatapos {{key:Enter}}: lahat ng ibang layer ay mapapatay. Ibinabalik ng {{cmd:LAYUNISO}} ang mga ito. {{cmd:LAYOFF}} at {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (o frozen), paulit-ulit; binabawi ng `U` ang huli, tinatapos ng {{key:Enter}}. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. Ang {{cmd:LAYON}} ay ini-on ang bawat layer, ang {{cmd:LAYTHW}} ay tinatanggal ang freeze sa bawat layer. Isang undo step ang bawat command. Tingnan ang [Ayusin ang drawing gamit ang mga layer](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

Sinisimulan ng {{cmd:NEW}} ang walang lamang drawing at binubuksan ng {{cmd:OPEN}} ang DWG o DXF, bawat isa sa sariling tab sa ibabaw ng drawing (ang hindi ginalaw na bagong drawing ay ginagamit sa halip na bagong tab). Ang pagsasara ng tab na may hindi na-save na pagbabago ay nagtatanong muna. Tingnan ang [Hatiin ang screen](topic:split-screen).

Ang {{cmd:SAVE}} (alias `QSAVE`, at {{key:Mod+S}}) ay nagda-download ng kopya sa format ng drawing: DWG kung galing sa DWG, DXF kung galing sa DXF. Ang bagong drawing ay gumagamit ng format na huling pinili sa Save as sa browser na ito, kung hindi ay DWG.

Ang {{cmd:SAVEAS}} (at {{key:Mod+Shift+S}}) ay nagbubukas ng dialog na {{ui:Save a copy as}}: piliin ang {{ui:DWG}} (at ang {{ui:Version}} nito), {{ui:DXF R12}} o {{ui:DXF 2000}}, pagkatapos {{ui:Save}}. Nananatili ang pinili para sa drawing na ito at para sa mga bagong drawing sa browser na ito.

Ang {{cmd:DXFOUT}} ay laging nagda-download ng kopyang DXF R12, nang hindi binabago ang format na ginagamit ng {{cmd:SAVE}}.

Tingnan ang [Mga file: ano ang nagbubukas, ano ang nagsi-save](topic:files#saving).

### TOUR

Aliases: `TUTORIAL`. Sinisimulan muli ang anim na hakbang na tour ng unang drawing. Tingnan ang [Pagsisimula](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliases: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Tingnan ang [Mga setting](topic:settings#toolbar-position).

### COMMANDLINE

Aliases: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: dini-dock o nilulutang ang command line, ginagawang isang linya, nagtatanong kung ilang history line ang ipapakita (0 hanggang 12), o binubuksan ang history. Tingnan ang [Mga setting](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: ang mga bar sa itaas ng drawing gaya ng dati, o compact. Tingnan ang [Mga setting](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: ang hakbang kung saan nagla-line up ang polar tracking lines ({{ui:Polar}}) (higit sa 0, hanggang 180). Naka-save sa browser na ito.

### UNITS

Aliases: `UN`. Paano isinusulat at tinatype ang haba.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural at Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Ang iba: `Enter number of decimal places (0 to 8)`.

Sinusunod ito ng mga bagong dimension. Isang undo step. Kapareho ng {{ui:Length format}} at {{ui:Precision}} sa {{ui:Current settings}}; tingnan ang [Feet at inches](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliases: `GDS`. Tingnan ang IC layout (GDSII stream file): lab spike, para sa pagtingin at pagsukat lamang.

- Kumukuha ang file picker ng `.gds` file; kapag may ilang top cell, `Enter the top cell to draw`.
- Bawat layer at datatype ay nagiging drawing layer (`GDS 1`, `GDS 2/5`), ang reference at array ay inilalagay nang flat, sa user unit ng file (karaniwang micrometre). Isang undo step. Walang sinisimulate o sinusuri at hindi isinusulat pabalik ang file.

### DIAGRAM

Aliases: `TEXTDIAGRAM`, `T2D`. Diagram mula sa text.

- Ang kahon ay tumatanggap ng text (o isang linya na may `;` sa pagitan ng mga statement sa command line): isang Mermaid flowchart, PlantUML component diagram, D2 o from-to list.
- `Specify the top left corner of the diagram`, pagkatapos `Specify the text height`.

Ang mga block at connector ay mga ordinaryong object sa layer na `Diagram`, napipili kapag natapos. Isang undo step. Tingnan ang [Gumuhit ng diagram mula sa text](topic:text-to-diagram).

### OLELIST

Aliases: `OLES`. Ang mga OLE object na dala ng DWG na hindi kayang ilagay ng CadCraft nang mag-isa.

- Inililista ang bawat isa: numero, uri, laki, at kung nakapag-save ng larawan.
- `Enter an option [Place/eXit] <eXit>`: ang Place ay nagtatanong ng numero, ang ibabang-kaliwang sulok at ang lapad, at gumuguhit ng frame na may larawan. Isang undo step; hindi nababago ang naka-keep na object. Tingnan ang [Mga larawan](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliases: `SHX`. Sarili mong SHX font.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

Binabasa ng {{ui:Folder}} ang bawat `.shx` sa isang folder (CadCraft Studio; muli sa bawat pagsisimula), kinukuha ng {{ui:Files}} ang mga napiling file (ang browser), ang {{ui:Reverse}} ay naglalatag ng mga letra ng isang font mula sa huli papuntang una. Ang mga text style na nagbabanggit ng nai-load na font ay gumuguhit gamit ito. Tingnan ang [Gumuhit ng text sa sarili mong SHX font](topic:shx-fonts).

### LIMITS

Gaano kalaki ang nilalayong sukat ng drawing.

- `Specify lower left corner or [ON/OFF] <current>`: isang punto, `ON` o `OFF`.
- `Specify upper right corner <current>`.

Pinupuno ng grid ang limits, ipinapakita ng {{cmd:ZOOM}} All ang mga ito, at kapag naka-ON ang limits, tinatanggihan ang punto sa labas (`**Outside limits`). Isang undo step; naka-save sa DWG at DXF. Tingnan ang [Itakda ang limits ng drawing](topic:drawing-limits).

### AUNITS

Aliases: `ANGUNITS`. Paano ipinapakita at tinatype ang mga anggulo.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, o para sa iba pang dalawa `Enter precision` (0 degree, 2 minuto, 4 segundo, 5 hanggang 8 decimal ng segundo).

Isang undo step; naka-save sa DWG at DXF. Kapareho ng {{ui:Angle format}} sa {{ui:Current settings}}. Tingnan ang [I-type at ipakita ang bearing at anggulo](topic:bearings-and-angles).

### APPLOAD

Aliases: `AP`; o {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. Ang dialog na {{ui:Load applications}}: mag-load ng `.lsp` routine at `.dcl` dialog file, mag-unload ng mga ito, i-load muli mula sa history, at ang Startup Suite. Gumagana na parang ibang command ang `(defun c:NAME …)` ng routine. Tingnan ang [Mag-load ng application](topic:load-applications) at [Patakbuhin ang LISP routine](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (o {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) ay nagbubukas ng aliases file mo (mga linyang `ALIAS, *COMMAND`); ina-apply ito ng {{ui:Save}}. Muling ina-apply ito ng {{cmd:REINIT}}. Tingnan ang [I-edit ang alias ng command](topic:command-aliases).

### LISPEDIT

Aliases: `VLIDE`; o {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Binubuksan ang LISP editor, isang window na nananatiling bukas sa tabi ng drawing.

- Ang text: mga numero ng linya, minamarkahan ang katapat na panaklong sa cursor (pula kapag wala), ang {{key:Enter}} ay nag-i-indent ng bagong linya sa ilalim ng bukas na panaklong, ang {{key:Tab}} ay nagta-type ng dalawang espasyo, ang {{key:Esc}} ay umaalis sa text.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): binabasa ang bawat form, gaya ng ginagawa ng {{cmd:APPLOAD}} sa file, at ginagawa ang mga `c:` command nito. Lumalabas ang file sa listahan ng {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): sinusuri ang mga napiling form, o ang form na nasa cursor.
- {{ui:Stop}}: tinatapos ang routine na tumatakbo.
- {{ui:Console}}: ang nai-print ng routine, at bawat error kasama ang linya nito; i-click ang error para pumunta roon. Tumatakbo ang text isang top-level form sa bawat pagkakataon, kaya ang linya ay sa form, o sa loob nito ang linyang tumatawag sa function na binanggit ng error.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): isang `.lsp` file. Naka-save din ang text sa browser na ito, kaya hindi nawawala ang laman kapag isinara ang window.
- Sa tabi ng text: ang mga function na tinutukoy ng routine, ang mga tinatawag nito na wala pa sa LISP na ito, ang mga tinatawag nito na wala sa loob nito at wala ring built-in, at ang buong listahan ng kung ano ang naka-built at hindi.

Ang text na may panaklong na hindi kailanman nagsasara, o string na hindi natatapos, ay hindi tatakbuhin: pinangalanan ang linya. Walang step-by-step debugger, breakpoint o watch window. Tingnan ang [Patakbuhin ang LISP routine](topic:run-lisp).

### HELP

Aliases: `?`. Ini-print ang bawat command, ang mga alias nito at isang linyang paglalarawan sa command line history. Hindi nito binubuksan ang help na ito: pindutin ang {{key:F1}} o i-click ang {{ui:Help}} para doon.

## Prompt na Select objects

Sa anumang prompt na `Select objects`: i-click ang mga object, mag-drawing ng window (kaliwa papuntang kanan) at crossing (kanan papuntang kaliwa) sa pamamagitan ng dalawang click, o pindutin at i-drag ang lasso ({{key:Space}} habang nagda-drag: window, crossing, fence), {{key:Shift}}+click para alisin, at pindutin ang {{key:Enter}} para tapusin. Maaari ka ring mag-type ng `ALL` (lahat), `L` (ang huling object), `P` (Previous: ang ginamit ng huling command), `F` (Fence: mga object na tinatawid ng linya ng mga punto; binabawi ng `U` ang punto), `W` (Window), `C` (Crossing), `R` (Remove mode: inaalis ng pagpili ang mga object; ang prompt ay nagsasabing `Remove objects`) at `A` (Add muli). Ang `?` ay naglilista ng mga ito. Hindi ipinapakita ang mga ito sa prompt. Ang {{key:Tab}} sa ibabaw ng magkakapatong na object ay nagha-highlight sa susunod; i-click para piliin ito. Tingnan ang [Pumili ng mga object](topic:select-objects).

### ACCESS

Alias: `AX`. Drafting nang walang paningin. Ang {{cmd:ACCESS}} ay nagpapa-on o nagpapa-off ng Access (`On`, `Off`) at nagpapalit ng snap sound (`Sound`) at voice command (`Voice`); sinasabi muna nito ang estado. Kapag naka-on ang Access, bawat command at resulta ay binibigkas ng iyong screen reader at may keyboard cursor ang drawing area. May mga key ang help topic na "Draft without sight".

### DESCRIBE

Alias: `DESC`. Sinasabi kung ano ang laman ng drawing: ilang object, anong uri, gaano kalaki, ilang layer, ano ang napili. Nagbabasa lamang; walang binabago.

### WHEREAMI

Alias: `WHERE`. Sinasabi kung nasaan ang cursor, sa mga unit ng drawing.

### NEARBY

Sinasabi kung ano ang nasa malapit sa cursor, pinakamalapit muna, bawat isa kasama ang distansya nito at ang side kung saan ito nakalagay.

### SAYSEL

Sinasabi kung ano ang napili, isang pangungusap bawat object (haba ng linya, mga dulo at anggulo; radius at center ng bilog; text gaya ng nakasulat).

### VOICE

I-on o i-off ang binibigkas na command. Kinikilala sila sa computer na ito; kapag hindi ito kayang gawin ng browser, nananatiling off ang voice maliban kung pipiliin mo ang online service ng browser sa Settings.

### TOUCHCROSSHAIR

Alias: `TCX`. Ang offset crosshair para sa drafting gamit ang daliri, para hindi matakpan ng dulo ng daliri ang punto na pinipili mo. Habang naka-on ito, ang isang daliri sa drawing ay hindi pumipili: gumagalaw ito ng crosshair na nasa itaas ng daliri at sa isang tabi. Sumusunod ang object snap at tracking sa crosshair. Ang pag-angat ng daliri ay walang pinipili at iniiwan ang crosshair kung saan ito. Para pumili, pindutin ang button na {{ui:Click}} sa sulok ng drawing, o mag-tap kahit saan sa drawing gamit ang pangalawang daliri. Pindutin ang {{ui:Click}} habang gumagalaw ang kabilang daliri para mag-drag (selection window, lasso, grip). Ang daliring pinindot at hindi gumagalaw, o ang button na {{ui:Enter}}, ay Enter. Dalawang daliri ang nagpa-pan at nag-zoom gaya ng dati. Malapit sa ibabang gilid at sa malayong gilid, lumalapit ang crosshair sa daliri para maabot ang bawat bahagi ng drawing. Ang panulat at mouse ay laging pumipili nang direkta.

Ang {{cmd:TOUCHCROSSHAIR}} ay nagsasabi ng estado at nagtatanong ng `ON`, `OFF`, `Auto` (naka-on lang kung ang daliri ang tanging pointer, kaya naka-off sa computer na may mouse), `Distance` (gaano kalayo ang crosshair sa daliri, 24 hanggang 240 pixel) o `Side` (`Left`: pataas at pakaliwa, para sa kanang kamay; `Right` para sa kaliwang kamay; lilipat ang mga button sa kabilang sulok). Nasa Settings › CadCraft din ang parehong pagpipilian, at sa device na may touch screen, may switch na {{ui:Offset crosshair}} ang status bar. Naka-save ang mga pinili sa browser na ito.

### WHOHAS

Sinasabi kung sino ang may bukas na drawing. Sa CadCraft Studio sa computer, ang pagbubukas ng DWG o DXF ay nagsusulat ng maliit na lock file sa tabi nito (`Plan.dwg.cclock`: sino, mula kailan, aling bersyon), nire-refresh ito kada minuto habang bukas ang drawing, at inaalis ito kapag sarado ang drawing. Ang pagbubukas ng drawing na bukas ng ibang tao ay sinasabi kung sino at mula kailan, at nag-aalok ng {{ui:Open read-only}} (pagkatapos ay hihingi ang Save ng bagong pangalan), {{ui:Open anyway}} (aabisuhan ang ibang tao sa susunod nilang refresh) o {{ui:Cancel}}. Ang pag-save sa ibabaw ng file na bukas ng ibang tao ay nagtatanong muna. Ang lock na hindi na-refresh sa loob ng limang minuto ay sinasabing stale: nagsara ang ibang kopya nang hindi nagse-save o natutulog ang computer.

Nagtatanong ang {{cmd:WHOHAS}} ng `Current` (ang bukas na drawing), `File` (pumili ng isa), `FOlder` (pumili ng folder: nakalista ang bawat drawing dito na bukas kahit saan), `Path` (mag-type ng buong path) o `Name` (ang pangalang nakikita ng iba; ang pangalan ng account mo kapag naka-sign in ka). Ang Studio ay makakaabot lang sa mga folder na pinili mo: para sa drawing na binuksan mula sa folder na hindi kailanman pinili, sasabihin nitong minsan na hindi nito maitatala ang drawing bilang bukas; pinipili ng `FOlder` ang folder, at mula noon, gumagana ang mga lock doon. Ang lock ay paalala para sa mga tao, hindi harang: maaari pa ring isulat ng ibang programa ang file. Sa browser, walang folder na titingnan, at sinasabi ito ng command.

### OVERKILL

Binubura ang mga duplicate na object at inaayos ang nagkakapatong na linya at arko, para sa mga drawing na dumating na puno ng dobleng linework. `Select objects to clean up`, {{key:Enter}}, pagkatapos {{key:Enter}} muli para linisin gamit ang mga setting na nakikita, o baguhin muna ang isa:

- `Tolerance`: gaano kalapit dapat ang dalawang coordinate para ituring na pareho (0.000001 sa simula; ang 0 ay eksaktong pareho lang).
- `Ignore`: mga property na maaaring magkaiba sa pagitan ng dalawang object na kung hindi ay pareho. I-type ang pangalan para ilipat: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, o `None` / `All`. {{key:Enter}} kapag tapos.
- `Overlap`: on o off. Kapag naka-on, ang mga linyang nasa iisang tuwid na linya na nagkakapatong ay nagiging isang linya (ang linyang nasa loob ng isa pa ay basta binubura), at ang mga arko sa iisang bilog na nagkakapatong ay nagiging isang arko; ang mga arko na bumubuo ng buong ikot ay nagiging bilog, at ang arkong nasa bilog ay binubura.
- `Ends`: on o off. Kapag naka-on, ang mga linya sa iisang tuwid na linya at mga arko sa iisang bilog na nagdurugtong lang dulo sa dulo ay nagiging isang piraso.

Bawat uri ng object ay sinusuri para sa duplicate: dalawang object ay duplicate kapag pareho ang geometry sa loob ng tolerance at magkapareho ang layer, kulay, linetype, linetype scale, lineweight, kapal, transparency at taas (maliban sa mga iniwan mong hindi isinasama). Ang mga linya at bukas na polyline ay itinutugma rin kapag iginuhit sa kabilang direksyon. Nananatili ang unang object sa draw order at pinapanatili ang sarili nitong property. Ini-report ng command kung ilang object ang sinuri at binura: duplicate, mga nagkakapatong na piraso na pinagsama, mga piraso na nadugtong dulo sa dulo. Ang isang {{cmd:UNDO}} ay binabawi ang lahat. Tumatagal ang mga setting hanggang isara mo ang window ng drawing.

Hindi nito ginagalaw: ang mga object sa naka-lock na layer at mga nakatagong object. Hindi nito pinagsasama ang mga linyang may taas (Z) (ang eksaktong duplicate nila ay nawawala pa rin), at hindi nito ginagalaw ang mga segment sa loob ng polyline (hindi sila pinapayat), ang linyang nakapatong sa segment ng polyline, at ang saradong polyline na iginuhit sa kabilang direksyon.

### DRAWORDER

Binabago kung aling mga object ang iginuguhit sa harap. `Select objects to re-order`, {{key:Enter}}, pagkatapos `Above objects`, `Under objects`, `Front` o `Back` ({{key:Enter}} = `Back`). Ang `Above objects` at `Under objects` ay nagtatanong ng reference object: ang selection ay mapupunta nang direkta sa harap ng pinakaharap sa mga iyon, o direkta sa likod ng pinakalikod. Pinapanatili ng mga napiling object ang sarili nilang pagkakasunod sa isa't isa. Isang undo step. Naka-save ang pagkakasunod kasama ng drawing sa DWG at DXF, kung saan ito ang pagkakasunod kung paano isinusulat ang mga object.

Sa screen, unang iginuguhit ng CadCraft ang mga punong lugar (solid hatch, malapad na polyline, mask), pagkatapos ang linework, pagkatapos ang text, kaya laging nababasa ang text sa ibabaw ng fill; ang draw order ay nakikita sa mga punong object at sa mga larawan. Ang ibang programa na nagbubukas ng file ay gumuguhit ng bawat object ayon sa naka-save na pagkakasunod.

### TEXTTOFRONT

Dinadala ang text, dimension at leader sa harap ng lahat ng iba sa bukas na space: `Text`, `Dimensions`, `Leaders` o `All` ({{key:Enter}} = `All`). Isang undo step. Sinasabi nito kapag wala, o kapag nasa harap na sila.

### HATCHTOBACK

Ipinapadala ang bawat hatch ng bukas na space sa likod ng lahat ng iba, para hindi na matakpan ng fill ang linework at text sa naka-save na file. Walang prompt. Isang undo step.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Ipinapakita lang ang mga napiling object: lahat ng iba sa bukas na space ay nawawala sa paningin hanggang {{cmd:UNISOLATEOBJECTS}}. Hindi gaya ng {{cmd:LAYISO}}, gumagana ito sa mga object na pipiliin mo, anuman ang layer nila, at walang binabago sa layer. Ang mga nakatagong object ay hindi iginuguhit, pinipili, sina-snap, zoom-an o ipinaplot, at nilalampasan sila ng mga command na tumatanggap ng `ALL`. Ang anumang iginuguhit mo habang may isolated na object ay ipinapakita gaya ng dati.

Para lang ito sa session: walang nakasave tungkol dito kasama ng drawing, hindi ito isang undo step, at ang muling pagbubukas ng drawing ay nagpapakita ng lahat. Habang may nakatagong object, nagpapakita ang status bar ng button na may bilang nila; i-click ito para ipakitang muli sila.

### HIDEOBJECTS

Itinatago ang mga napiling object hanggang {{cmd:UNISOLATEOBJECTS}}. Parehong patakaran ng {{cmd:ISOLATEOBJECTS}}: para sa session lamang, hindi naka-save, hindi isang undo step.

### UNISOLATEOBJECTS

Aliases: `UNISOLATE`, `UNHIDE`. Ipinapakita muli ang bawat object na itinago ng {{cmd:ISOLATEOBJECTS}} o {{cmd:HIDEOBJECTS}}, at sinasabi kung ilan ang bumalik.

### LAYLOCKFADE

Itinatakda kung paano tumitingin ang mga object sa naka-lock na layer at kung maaabot sila ng click. Sinasabi nito ang kasalukuyang estado, pagkatapos tumatanggap ng:

- isang numero mula 0 hanggang 90: ang dami ng fade sa porsyento (50 sa simula). Ang 0 ay pinapatay ang fade.
- `ON` o `OFF`: naka-on o naka-off ang fade, pinananatili ang dami.
- `Pick`, pagkatapos `Yes` o `No`: maaari bang pumili ang click ng mga object sa naka-lock na layer habang walang tumatakbong command? Ang `No` (ang default): hindi sila mapipili kahit kailan. Ang `Yes`: pinipili ng click o window sila para maipakita sila ng {{ui:Properties}}; hindi pa rin sila mababago, at ang sariling `Select objects` ng command ay hindi kailanman kukuha sa kanila.

Nakikita ng object snap ang mga object sa naka-lock na layer alinman. Hindi kailanman nagfa-fade ang mga plot. Ang dalawang setting ay sa iyo, hindi sa drawing, at nasa {{ui:Settings}} din sa ilalim ng {{ui:Locked layers}}.

### BURST

Pinapasabog ang mga block reference at pinapanatili ang sinasabi ng kanilang mga attribute. `Select block references to burst`, {{key:Enter}}: bawat reference ay papalitan ng mga object ng block, at ang value ng bawat nakikitang attribute ay nagiging plain text sa sariling layer ng attribute na iyon (ang attribute sa layer 0 ay napupunta sa layer ng reference, gaya ng iba pang object ng block sa layer 0). Ang mga nakatagong attribute ay inaalis. Ang block sa loob ng block ay nananatiling block reference. Isang undo step; ini-report nito ang mga reference na na-burst at ang mga value ng attribute na naging text.

Tumatanggi ito sa naka-link na drawing ayon sa pangalan (i-bind muna ito, o kopyahin mula rito gamit ang {{cmd:NCOPY}}), at iniiwan ang ibang napiling object. Para sa block reference, ang {{cmd:EXPLODE}} ay nagbibigay ng parehong object; ang {{cmd:BURST}} ay tumatanggap lamang ng block reference at binibilang ang text ng attribute.

### TXT2MTXT

Alias: `T2M`. Pinagdurugtong ang single-line text sa iisang paragraph text. `Select single-line text to join`, {{key:Enter}}, pagkatapos `Paragraph` (nagtatakbuhan ang mga linya at bumabalot sa lapad ng pinakamalapad na linya) o `Lines` (bawat text ay nananatiling sariling linya); ang {{key:Enter}} ay kumukuha sa huling ginamit. Ang mga linya ay inaayos mula itaas pababa, pagkatapos kaliwa pakanan, ayon sa direksyon ng itaas na text. Ang paragraph ay nakabitin mula sa kaliwang-itaas na sulok ng itaas na text at kinukuha ang taas, rotation, style, layer at kulay nito. Isang undo step.

Ang text na paragraph na na-text, ang blankong text at iba pang object sa selection ay nananatili, at sinasabi ng command kung ilan.

### NCOPY

Kumokopya ng mga object mula sa block reference o naka-link na drawing papunta sa drawing, nang hindi sinisira ang anuman. `Pick an object inside a block reference or a linked drawing`: ang object na pinakamalapit sa pinili ay kinokopya kung saan ito nakikita, gaano man kalalim sa mga block; pumili pa, pagkatapos {{key:Enter}}. Susunod, `Base point to move the copies`: ang {{key:Enter}} ay iniiwan ang mga ito sa kinalalagyan, o magbigay ng base point at pangalawang punto. Ang buong command ay isang undo step.

Kinukuha ng kopya ang layer kung saan ito nakikita: ang object sa layer 0 sa loob ng block ay napupunta sa layer ng reference na kinalalagyan nito, at ang ByBlock na kulay ay nagiging kulay ng reference na iyon. Mula sa naka-link na drawing, ang layer na `Plan|Walls` ay nagiging `Plan$0$Walls` (ang pangalang ibinibigay ng link), na ginawa gamit ang kulay, linetype at lineweight ng naka-link na layer. Ang value ng attribute ay kinokopya bilang text. Ang block reference sa naka-lock na layer ay hindi maaaring piliin.

### FLATTEN

Itinatakda ang taas (Z) at kapal ng mga napiling object sa 0. `Select objects to flatten`, {{key:Enter}}. Pinapa-flatten din nito ang mga object sa loob ng block definition na ginagamit ng selection (at ang mga block sa loob nila), para magbago ang bawat reference sa mga block na iyon; ang naka-link na drawing ay hindi ginagalaw. Isang undo step; ini-report nito kung ilang object ang nagbago, at sinasabi kapag wala sa mga ito ang may taas o kapal.

Ang iniingatan ng CadCraft mula sa ikatlong dimensyon sa 2D drawing ay: taas sa bilog, arko, ellipse, point, text, block reference, hatch, leader at polyline (ang elevation nila), taas sa bawat dulo ng linya, at kapal sa linya, bilog, arko, polyline, point at text, gaya ng nasa file. Tinatanggal ng {{cmd:FLATTEN}} ang eksaktong mga iyon. Hindi nito ginagalaw ang 3D model sa 3D tab, 3D face o solid, at ang object na iginuhit sa nakatagilid na plane ay naibalik na sa drawing plane nang buksan ang file.

### BREAKLINE

Gumuguhit ng linya na may break symbol, para sa view na pinutol nang maikli. Sinasabi nito ang kasalukuyang laki at extension, pagkatapos `First point of the break line` (o `Size` / `Extension` para baguhin muna ang mga ito), `Second point`, at `Where the break symbol sits`: i-click sa kahabaan ng linya, o {{key:Enter}} para sa gitna. Ang resulta ay isang polyline sa kasalukuyang layer: ang linya, na lumalampas sa bawat punto ng extension, na may stroke na hugis-Z na kasing-taas ng size at kalahati ang haba.

Naaalala ang `Size` at `Extension` bilang mga setting mo (ang size ay nagsisimula sa dalawang beses ng taas ng text ng dimension na pinarami ng dimension scale; ang extension ay kalahati ng size). Inuulit ng {{key:Enter}} ang command.

### AUDIT

Sinusuri ang bukas na drawing para sa pinsala at inaayos ito. Tinitingnan ng {{cmd:AUDIT}} ang bawat object sa model, sa mga sheet at sa loob ng mga block, at ang layer table, at inililista ang nahanap nito ayon sa uri:

- mga numerong hindi finite o napakalaki;
- mga object na walang sukat: linyang walang haba, bilog na walang radius, polyline na may isang punto, text na walang letra o taas, block reference na zero ang scale;
- object sa layer na wala sa drawing; reference sa block na wala; mga pangalan ng text at dimension style at linetype na wala sa drawing;
- mga block na naglalaman ng sarili nila, direkta o sa pamamagitan ng ibang block;
- mga object na nagbabahagi ng id, key o file handle;
- mga dimension na walang mga punto na sinusukatan, at mga hatch na ang boundary ay hindi saradong outline.

Pagkatapos, nagtatanong ito ng `Fix them? [Yes/No]`. Ang `No` ay walang binabago. Ang `Yes` ay inaayos ang lahat sa isang undo step: ang hindi kayang iguhit ay inaalis (masamang numero, walang sukat, nawawalang block, sirang dimension, hatch na walang magamit na boundary, ang reference na nagsasara ng ikot ng mga block); ang nawawalang layer ay ginagawa; ang hindi kilalang pangalan ng style at linetype ay ibinabalik sa default; ang shared key ay pinapalitan. Ini-print nito kung ilang object ang inalis at ilan ang naayos. Ang parehong nahanap ay lumalabas sa Problems panel, bawat isa may sariling {{ui:Repair}}.

Hindi ito tumatanggi sa anuman, pero sinusuri lang nito ang mga iginuguhit ng CadCraft mismo: ang data na itinatago para sa ibang programa (3D solid, OLE object) ay hindi binubuksan.

### RECOVER

Binubuksan ang sirang DXF o DWG. Ang {{cmd:RECOVER}} ay nagtatanong ng file, binabasa ang mababasa sa halip na tanggihan ang file, inililista ang nilaktawan o ipinalagay nito, pagkatapos sinusuri at inaayos ang drawing gaya ng ginagawa ng {{cmd:AUDIT}} sa `Yes`.

- DXF: nilalaktawan ang mga linyang hindi bahagi ng code at value pair hanggang muling magkasunod-sunod ang mga pair; isinasara ang section na walang dulo; ang file na naputol ay binabasa hanggang sa putol; ang binary DXF na naputol ay binabasa hanggang sa huling buong value nito. Kapag hindi pa rin mabasa ang isang section, block o object, iniiwan ito at pinangalanan, at nagpapatuloy ang pagbabasa lampas dito.
- DWG: ang mga object na bigo sa kanilang pagsusuri o hindi ma-decode ay iniiwan, at ang nawalang listahan ng object ay binubuo muli sa pamamagitan ng pag-scan sa object data.

Hindi binabago ang file sa disk. Ang nabawing drawing ay nagbubukas na hindi na-save: i-save ito sa bagong pangalan. Ang file na walang anumang mababasa ay tinatanggihan, kasama ang dahilan.

### LEGACYTEXT

Ginagawang Unicode ang text na na-type sa mga lumang 8-bit na Vietnamese na font. Mga maikling pangalan: `TEXTTOUNICODE` at `VNTEXT`.

Ang mga lumang drawing ng Vietnamese ay nag-iimbak ng text nila bilang mga Western na karakter na ginagawa lang na Vietnamese ng font: TCVN3 na text sa ABC font (`.VnTime`, `.VnArial`, at ang mga upper-case na font na ang pangalan ay nagtatapos sa `H`), at VNI na text sa VNI font (`VNI-Times`). Ipinapakita ng CadCraft ang ganitong text gaya ng pagbasa nito sa sandaling mabuksan ang drawing, ayon sa font ng text style nito, ng object, o ng bahagi ng paragraph text; ang file ay nananatiling may lumang karakter.

Sinasabi ng {{cmd:LEGACYTEXT}} kung ilang text ang nahanap nito sa bawat encoding at nagtatanong ng `Convert … to Unicode?`. Ang `Yes` ay isinusulat muli ang bawat isa (model, sheet, block, value at definition ng attribute) at binibigyan ang mga text style ng Unicode na font (Times New Roman, Arial o Courier New ayon sa uri ng lumang font), sa isang undo step. Nananatili ang formatting sa loob ng paragraph text.

Kapag walang text ang gumagamit ng kilalang font (style na nawalan ng pangalan ng font), nagtatanong ito ng `Read selected texts as [Tcvn3/Vni/None]`: piliin ang encoding at piliin ang mga text. Ang text na Unicode na ay iniiwan. Ang text override ng dimension at text ng multileader ay hindi kinokonberte.
