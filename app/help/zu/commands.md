---
title: Ireferensi yemiyalo
summary: Yonke imiyalo esohlelweni lokudweba i-CadCraft, nama-alias ayo, imibuzo eyibuzayo, izinketho nezinkomba zokuzenzela.
keywords: imiyalo, ama-alias, uhlu lwemiyalo, indawo, umjikelezo, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, usizo, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Thayipha igama lomyalo noma i-alias bese ucindezela {{key:Enter}} noma {{key:Space}}. Akubalulekile ukuthi kusetshenziswe ama-capital noma amancane, futhi `_`, `-`, `.` noma `'` okuphambili kuyanakwa. Thayipha `HELP` (noma `?`) ukuze uphrinte uhlu olufushane lwazo zonke imiyalo emlandweni womugqa womyalo; cindezela {{key:F1}} ukuze uthole lo usizo.

Ukufunda izimemo: izinketho zisemabhaketini esikwele, futhi ukhetha enye ngokuthayipha izinhlamvu zayo ezinkulu (`D` for Diameter). Isilinganiso esizenzakalelayo sisemabhaketini aphakathi; cindezela {{key:Enter}} ukuyamukela. Lapho kucelwa iphoyinti, ungachofoza noma uthayiphe noma yimuphi wamafomethi kwi-[Ukufakwa kwamaphoyinti nebanga](topic:coordinate-entry). Lapho kucelwa ibanga, ungathayipha inombolo noma uchofoze amaphoyinti amabili.

Lapho kucelwa iphoyinti noma into, futhi kungekho isilinganiso sokuzenzela, ukucindezela {{key:Enter}} kuqeda umyalo. {{key:Esc}} uyawukhansela. Noma yini umyalo owenzile iyinyathelo elilodwa lokuhlehlisa.

## Dweba

### LINE

Ama-alias: `L`. Izingxenye ezigobile, ngayinye iyinto yayo.

- `Specify first point` (Enter: qala ngephoyinti lokugcina onikeze lona)
- `Specify next point [Undo]`, iphindwa. Ngemva kwezingxenye ezimbili: `[Undo/Close]`.
- `U` ithatha ingxenye yokugcina, `C` ivala iye ephoyinteni lokuqala iphele. {{key:Enter}} iyaphela.

### PLINE

Ama-alias: `PL`. Ipholilayini eyodwa yezingxenye zomugqa nezomnsalo.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close uma sekunezingxenye ezimbili)
- `A` ishintshela kumansalo: `Specify endpoint of arc [Line/CLose/Undo]`. Umnsalo ngamunye uqhubeka ngokuthinta ingxenye edlule. `L` ibuyela kumigqa, `CL` ivala ngomnsalo.
- {{key:Enter}} iyaphela; ipholilayini ihlala ivulekile.

### CIRCLE

Ama-alias: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` ibuza `Specify diameter of circle`.
- `2P`: amaphethelo amabili edayamitha. `3P`: amaphoyinti amathathu endilingeni.
- `T` (futhi umyalo `TTR`, kanye ne-{{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, bese eyesibili, bese irediyasi (Enter: eyokugcina). Indilinga ithinta izinto ezimbili (imigqa, amansalo, izindilinga, izingxenye zepholilayini, nangaphakathi kwamabhulokhi); phakathi kwalezo ezithintayo, eyeduze kakhulu nokukhetha kwakho. "Circle does not exist" uma kungekho okulingana.
- `TTT` (noma {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): izinto ezintathu; indilinga ethinta zonke ezintathu, eseduze kakhulu nokukhetha kwakho (imigqa emithathu inikeza indilinga yangaphakathi noma eyangaphandle, kuye ngokuthi ukhetha kuphi).

### ARC

Ama-alias: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: umnsalo udlula emaphoyinteni amathathu.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Umnsalo uhamba ngokuphambene nokuhamba kwewashi kusukela ekuqaleni kuya ekupheleni.

### RECTANG

Ama-alias: `REC`, `RECTANGLE`. Ipholilayini evaliwe.

- `Specify first corner point`, `Specify other corner point`. Thayipha `@width,height` ukuze uthole ikhona yesibili.

### POLYGON

Ama-alias: `POL`. Ipholigoni ejwayelekile njengepholilayini evaliwe.

- `Enter number of sides <4>` (3 kuya ku-1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: chofoza noma uthayiphe iphoyinti; ubude bayo bunquma usayizi, nendlela yalo ijikisa ipholigoni.

### ELLIPSE

Ama-alias: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, bese ibanga kuya ku-eksisi yesibili.
- `I` (`Isocircle`, kuphela lapho {{cmd:ISODRAFT}} ivuliwe): isikhungo, bese irediyasi noma `Diameter`: i-elipse indilinga ebonakala ngayo endizeni ye-isometric yamanje.

### HATCH

Ama-alias: `H`, `BH`, `BHATCH`; noma {{ui:Hatch}} kwibha yamathuluzi. Iphrinta kuqala iphethini yamanje, isikali nekona.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, iphindwa (`Undo` uma sekukhona indawo): ngamunye ukuchofoza wengeza indawo evaliwe ezungezile, nezimo ezivaliwe ngaphakathi njengezihlumela. Enter yenza i-hatch eyodwa kuzo zonke.
- `S`: `Select closed objects` (amapholilayini avaliwe, izindilinga, ama-elipse avaliwe).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): ukugcwaliswa kuba i-gradient esikhundleni sephethini. Bona {{cmd:GRADIENT}} ngemibuzo yayo.

Bona [Imigqa yokufiphaza nezindawo ezigcwaliswayo](topic:hatch).

### GRADIENT

Ama-alias: `GD`. Igcwalisa indawo nge-gradient yemibala eyodwa noma emibili. Ibuza i-gradient kuqala, bese iqhubeka njenge-{{cmd:HATCH}} (`Pick internal point`, `S` yezinto ezivaliwe, {{key:Enter}} ukuqeda).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, iphindwa; ibonisa i-gradient njengoba imi khona ngalo lonke ukuphindwa.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, noma enye yazo ijikisiwe (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Izinhlamvu zokuqala ziyanele.
- `O`: umbala owodwa, bese ukukhanya kwawo kusuka ku-0 kuya ku-1 (0 kuwenza mnyama, 0.5 umbala uqobo, 1 uwenza mhlophe). `TW`: umbala wokuqala nowesibili. Umbala ungunombolo ku-1 kuya ku-255, izinombolo ezintathu ezifana ne-`255,128,0`, noma `#rrggbb`.
- `A`: i-engeli i-gradient eqhuba kuyo. `C`: centered Yes or No (No ihambisa maphakathi ye-gradient ngakolunye uhlangothi).
- Yenqaba umbala noma uhlobo olungaziwa, nokukhanya okungaphandle kuka-0 kuya ku-1.

{{cmd:HATCHEDIT}} `G` ne-Properties (Gradient) zishintsha i-gradient kamuva, noma zenze noma yiyiphi i-hatch ibe yi-gradient. I-gradient iyadwetshwa esikrinini futhi iyashicilelwa. I-DWG 2004 nakamuva iyigcina njenge-gradient hatch yangempela; i-DXF 2000 ne-DWG 2000 iyigcina ye-CadCraft, nezinye izinhlelo zibona ukugcwaliswa okuqinile ngombala wokuqala.

### HATCHGENERATEBOUNDARY

Ama-alias: `HGB`. Yenza umngcele kabusha kusuka ku-hatch elahlekelwe yiwo. `Select hatches` (noma uzikhethele kuqala), bese `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Lonke iluphu ye-hatch iba ipholilayini evaliwe esendaweni yayo ye-hatch; amapholilayini amasha ashiywa ekhethiwe. Umphetho ogobile ubuyela njengezingcezu ezimfushane zomugqa ezigcinwa yi-hatch.
- Ngo-Yes i-hatch ilandela umngcele wayo omusha, njengoba kwenza i-hatch eyenziwe nge-{{cmd:HATCH}}. Inyathelo elilodwa lokuhlehlisa.
- Iyasho uma kungakhethwanga hatch.

### POINT

Ama-alias: `PO`; noma {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Izinto zephoyinti, eyodwa ngokuchofoza, kuze kube yilapho {{key:Enter}}.

- `Specify a point`

### XLINE

Ama-alias: `XL`; noma {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Imigqa yokwakha, engapheli ngakolunye nakolunye uhlangothi. Bona [Imigqa yokwakha namakhonco](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, bese `Specify through point` ngomugqa ngamunye, kuze kube yilapho {{key:Enter}}.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` ibuza `Select a line object` kuqala.
- `B`: `Specify angle vertex point`, `Specify angle start point`, bese `Specify angle end point` ngomugqa ngamunye.
- `O`: `Specify offset distance [Through] <Through>`, bese `Select a line object` kanye ne-`Specify side to offset` (noma `Specify through point`) ngomugqa ngamunye.

### RAY

Awukho ama-alias; noma {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`, bese `Specify through point` ngomsebe ngamunye, kuze kube yilapho {{key:Enter}}.

### TEXT

Ama-alias: `DT`, `DTEXT`; noma {{ui:Text}} kwibha yamathuluzi. Umbhalo womugqa owodwa; ngumugqa ngamunye uyinto yawo.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, bese `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, iphindwa: ngamunye {{key:Enter}} iqala umugqa olandelayo ngaphansi. {{key:Enter}} emugqeni ongenalutho iyaphela. {{key:Space}} ithayipha isikhala lapha.

### DIVIDE

Ama-alias: `DIV`. {{cmd:DIVIDE}} ibeka izimaki omugqeni, ku-arc, indilinga, ipholilayini, i-spline noma i-elipse, ezehlukanisa ibe izingxenye ezilinganayo. Khetha into, bese unikeza inani lezingxenye (2 kuya ku-32767). Into evulekile ithola isimaki esisodwa ngaphansi kwezingxenye; into evaliwe ithola nesimaki ekuqaleni kwayo. Into ngokwayo ayinqunywa. Izimaki ziyamaphoyinti; `Block` ibuza ibhulokhi yalo mdwebo esikhundleni salokho nokuthi iyaguquka yini ukulandela into. Izinde ezingu-spline namaelipse zilinganiswa ngezingxenye ezimfushane. Yenqaba umbhalo, ama-hatch nezinye izinto ezingenabude.

### MEASURE

Ama-alias: `ME`. {{cmd:MEASURE}} ibeka isimaki ngayo yonke indlela enikezwe ngayo ku-line, arc, circle, polyline, spline noma ellipse, ibala ukusuka emphethelweni oseduze kakhulu lapho ukhethe khona (into evaliwe: kusukela ekuqaleni kwayo). Nikeza ubude ngokuthayipha noma ngamaphoyinti amabili. Umphetho okude wento evulekile awutholli simaki. `Block` ibeka ibhulokhi ku-simaki ngamunye esikhundleni sephoyinti. Yenqaba ubude be-0, obude obudlula into, nobuzokwenza izimaki ezingaphezu kuka-32767.

### BOUNDARY

Ama-alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} yenza ipholilayini evaliwe ezungeze indawo equkethe iphoyinti oliKhethile, kusuka kunoma imigqa, amansalo, izindilinga, amapholilayini nemigqa egobile ezungeze kusikrini. Izingcezu ezilele ku-arc noma indilinga zibuya njengezingxenye zomnsalo; izingcezu zama-elipse nama-spline zibuya njengezingxenye zomugqa ezimfushane. Uma i-`Islands` ivuliwe (izilungiselelo zokuqala), ngayinye indawo evaliwe ngaphakathi nayo ithola ipholilayini yayo. Qhubeka ukhetha amaphoyinti; {{key:Enter}} iyaphela. Izinto ezivala indawo azishintshwa. Iyasho uma akukho ndawo evaliwe equkethe iphoyinti.

### BLEND

{{cmd:BLEND}} idweba i-spline phakathi kwamaphethelo amagobolo amabili avulekile. Chofoza ngamunye igobolo eduze komphetho okufanele uxhumane. `CONtinuity` ikhetha `Tangent` (i-spline ishiya futhi ifike ilandela zombili amagobolo) noma `Smooth` (iphinda ibhenke njengoba zibhenka emaphethelweni); ukukhetha kugcinwa kulo sesheni. Amagobolo amabili awashintshwa. Yenqaba izinto ezivaliwe nemiphetho emibili esevele ihlangene.

### REGION

Ama-alias: `REG`. {{cmd:REGION}} iguqula izinto ezivaliwe ibe yizifunda: izindawo ezingqingqile ongazixhuma, ozinqume, uzilinganise. Khetha izindilinga, amapholilayini avaliwe, ama-elipse avaliwe noma ama-spline avaliwe, noma imigqa, amansalo noma amapholilayini avulekile avala ilophu ngokuphelela; ngalowo luphu kuba yisifunda esisodwa esithatha indawo yezinto ezivela kuzo. Amansalo ahlala engamansalo; ama-elipse nama-spline aba izingxenye zomugqa ezimfushane. Okungavaliwe futhi okungavali luphu kushiywa njalo, futhi kuyasho ukuthi kangaki. Emdwebweni isifunda ingapholilayini evaliwe eyodwa noma eminingi ebanjwe ndawonye njengeqembu elingenagama, ngakho ukuchofoza kukhetha isifunda sonke, futhi ikhophi iyisifunda sayo; ezinye izinhlelo ezivula ifayela zibona amapholilayini avaliwe.

Uma kunezifunda emdwebweni, {{cmd:UNION}}, {{cmd:SUBTRACT}} ne-{{cmd:INTERSECT}} ethebeni le-2D zisebenza ngezifunda: `UNION` ihlanganisa izifunda ezikhethiwe zibe eyodwa (izifunda ezihlukene ziba isifunda esinezilinganiso eziningi), `SUBTRACT` ibuza izifunda okufanele kususwe kuzo bese izifunda ezizosuswa (imbobo ihlala ingxenye yesifunda), `INTERSECT` igcina indawo abayabelana ngayo. Ngayinye iyasho indawo yomphumela futhi iyinyathelo elilodwa lokuhlehlisa. Ziyenqaba uma kungasali lutho noma kungekho okwabelanwayo. Ethebeni le-3D, nasemdwebweni ongenazifunda, imiyalo efanayo isebenza kusalido njengakuqala.

## Guqula

Ama-alias: `MT`, `T`; noma {{ui:Paragraph}} kwibha yamathuluzi. Umbhalo wesigaba ophelelela ububanzi, othayiphwa endaweni yawo.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: ububanzi phakathi kwamakhona amabili yilapho umbhalo uphelela khona. `H` ibuza `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` iyaphuthelwa ikhona yesibili.
- Bese kuvula ibhokisi edwetsheni: thayipha, {{key:Enter}} ngesigaba esisha, {{key:Mod+Enter}} noma ukuchofoza ngaphandle ukuqeda, {{key:Esc}} ukukhansela. Ibha yayo ibeka ukuphakama, ukuma kwemigqa, ububanzi nokuhlelwa. Bona [Engeza umbhalo nezimpawu](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Ama-alias: `ED`, `DDEDIT`; noma chofoza kabili umbhalo. `Select a text to edit`, iphindwa kuze kube yilapho {{key:Enter}}: ngamunye uvula ebhokisini elifanayo. Uma iqalwa kumbhalo okhethiwe noma ochofozwe kabili, uhlela lowo bese uyaphela.

### ERASE

Ama-alias: `E`, `DELETE`; noma cindezela {{key:Delete}} lapho izinto zikhethiwe.

- `Select objects` (iyadlulwa uma izinto sezikhethiwe)

### MOVE

Ama-alias: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, uthayiphwa njenge `dx,dy`.

### COPY

Ama-alias: `CO`, `CP`. Ikopisha izikhathi eziningi njengoba unikeza amaphoyinti.

`Array` kumyalo wephoyinti lesibili wenza umugqa ngesikhathi esisodwa: nikeza inani lezinto (ukuqala kubalwa njengeyodwa), bese iphoyinti lapho ikhophi yokuqala iya khona; ezinye zilandela ngokuphana okufanayo. `Fit` yenza leliphoyinti libe yindawo yekhophi yokugcina, nezinye zisakazwe ngokulinganayo phakathi.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, iphindwa kuze kube yilapho {{key:Enter}}. `U` ithatha ikhophi yokugcina.

### ROTATE

Ama-alias: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: amadigri, ahanjiswe ngokuphambene nokuhamba kwewashi; noma chofoza iphoyinti ukuze ujikise kulo.

### SCALE

Ama-alias: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: thayipha isici njengo `0.5` noma `2`. Iphoyinti olichofoziwe linikeza ibanga lalo kusuka kuphoyinti lesisekelo njengesici.

### MIRROR

Ama-alias: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Ama-alias: `AL`; noma {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Ngamaphera amabili: `Scale objects based on alignment points? [Yes/No] <N>`

Bona [Hlanganisa izinto](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (noma ukukhetha okukhona), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` ibuza iphoyinti. Ukukhetha kuyahlala.

### DISTRIBUTE

- `Select objects` (okungenani ezintathu), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Ezimbili ezingaphandle ziyahlala; ukukhetha kuyahlala.

### ALIGNPANEL

Ama-alias: `ALP`; noma {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Ivula ipaneli eyenza i-ALIGNTO ne-DISTRIBUTE ngokuchofoza.

### LASER

Ama-alias: `LASERCUT`; noma {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Ivula ipaneli ye-Laser phezu komdwebo: ingani ilayini ngalinye elenzayo (sika, shaya, bhala, gcwalisa, isithombe), ukubuka kuqala, i-G-code ye-GRBL yokulondoloza, nokufakela nokuthumela nge-Web Serial. Bona [Thumela umdwebo kulaser](topic:laser-cutting).

### STRETCH

Ama-alias: `S`; noma {{ui:Stretch}}. `Select objects to stretch`: hudula amawindi adlula (noma uthayiphe `C`) phezu kwamaphethelo ukuze uwahambise. `Specify base point [Displacement]`, `Specify second point`. Amaphoyinti angaphakathi emawindini ayahamba: amaphethelo emigqa, izimpande zepholilayini (izingxenye zomnsalo zigcina ukuphakama kwazo), amaphoyinti esilinganiso; izindilinga, ama-elipse, umbhalo, amaphoyinti namabhulokhi ahamba ngokuphelele uma isikhungo sawo noma iphoyinti lokufaka lingaphakathi. Ukukhetha okwenziwe ngaphambi komyalo kugcina amawindi adlulayo (nama-lasso) akwenzayo, ngakho aselula ngendlela efanayo. Ngaphandle kwewindi, izinto zihamba ngokuphelele.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Ama-alias: `AR`; noma {{ui:Array}}. `Select objects`, bese `Enter array type [Rectangular/POlar] <Rectangular>` (ARRAY kuphela).

- Rectangular iqala ngamakholomu ayi-4 × imigqa emi-3, ibanga lalo lingamagama ayi-1.5 wosayizi wezinto, iboniswa njengombukiso. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` ibuza amakholomu nemigqa, `S` ibanga phakathi kwamakholomu nephakathi kwemigqa (okungalungile kuya kwesobunxele noma phansi), `COL` no `R` ukuqondisa kwenye ngayinye.
- Polar ibuza `Specify center point of array`, iqala ngezinto eziyi-6 zonke ezizungezile, ijikisiwe. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` izinto, `F` i-engeli yokugcwalisa (+ ngokuphambene nokuhamba kwewashi, − ngokuhamba kwewashi), `ROT` Yes noma No.
- {{key:Enter}} (eXit) yenza amakhophi, njengezinto ezijwayelekile. Inyathelo elilodwa lokuhlehlisa.
- `AS` (ASsociative) ishintsha phakathi kwamakhophi ajwayelekile nendilinga ehlala ihleleka: into eyodwa oyiguqula kamuva nge-{{cmd:ARRAYEDIT}}, ngamaphethelo ayo noma ku-Properties. Ukukhetha kuyakhunjulwa ({{cmd:ARRAYASSOCIATIVITY}}); iqala ngamakhophi ajwayelekile.

### ARRAYPATH

Ikopisha ngaphansi kwegobolo. `Select objects`, bese `Select path curve`: umugqa, i-arc, indilinga, i-elipse, ipholilayini noma i-spline (hhayi enye yezinto ezi-arrayiwe). Indlela iqala ekuphetheni kwayo okusondele ezintweni, futhi into yokuqala iyizinto lapho zikhona.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, nombukiso. `M`: `Divide` isakaza izinto ngokulinganayo kuyo yonke indlela, `Measure` ibeka eyodwa njalo ngebanga elithile kuyo. `I`: inani lezinto (ngeMeasure, 0 kusho njengoba kwanele); inombolo edlula ukuphela kwendlela ibanjwe kulokho okwanele. `SP`: ibanga phakathi kwezinto ngaphansi kwendlela (ishintshela ku-Measure). `AL`: Yes iphendula ngayinye ilandele indlela, No igcina zimi ngqo.
- `AS` njengakwi-{{cmd:ARRAY}}. Uma ivuliwe, i-array igcina ikhophi yayo yendlela: ukuhlela igobolo lendlela kamuva akushintshi izinto.
- Yenqaba indlela engesiyo igobolo, nento eyodwa.

### ARRAYEDIT

Ishintsha i-array eyenziwe nge-ASsociative. `Select array` (noma uyikhethele kuqala). Iphrinta ukuthi i-array imi kanjani manje, bese ibuza kuze kube yilapho {{key:Enter}}:

- Rectangular: `COL` amakholomu nebanga lawo, `R` imigqa nebanga layo, `A` i-engeli amakholomu ahamba kuyo.
- Polar: `I` izinto, `F` i-engeli yokugcwalisa, `ROT` ukujikisa izinto Yes noma No.
- Path: `M` Divide noma Measure, `I` izinto, `SP` ibanga, `AL` ukuhlanganisa nendlela.
- `S` (Source) ivula izinto i-array eziphindayo, zodwa, njengomhleli webhulokhi. Dweba bese uhlela lapho; {{cmd:ARRAYCLOSE}} iyalondoloza noma iyalahla, bese zonke izinto zilandela.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, bese uchofoza izinto ezizoshintshwa, {{key:Enter}}. Lezo zinto zibonisa okushintshwayo esikhundleni salokho; izinto zokushintsha ziyashiya umdwebo bese ziphila ku-array. `RES` (RESet) ibonisa izinto zomthombo kuzo zonke izinto futhi.
- Ushintsho ngalinye yinyathelo elilodwa lokuhlehlisa. Iyenqaba amakhophi ajwayelekile, ireferensi yebhulokhi evamile nendilinga esigabeni esikhiyiwe.

Izinombolo ezifanayo zisezakhiweni ngaphansi kwe-Array, nendilinga inamaphethelo: iphoyinti layo lesisekelo liyihambisa, iphethelo kwinto yesibili libeka ibanga, iphethelo elingaphezu kwento yokugcina libeka inani (polar: into yesibili ibeka izinto eziningi, into yokugcina i-engeli yokugcwalisa). {{cmd:EXPLODE}} iguqula i-array ibe amakhophi ajwayelekile.

### ARRAYCLOSE

Iqeda i-{{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Iyasho uma kungavulekile izinto zomthombo zanoma yiyiphi i-array. {{cmd:BCLOSE}} yenza okufanayo.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Ibeka lokho okuqala ngakho {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR kanye {{cmd:ARRAYPATH}}; inketho yazo `AS` ishintsha lesi silungiselelo. Ikhunjulwa kulesi siphequluli.

### OFFSET

Ama-alias: `O`. Imigqa, ama-arc, izindilinga namapholilayini.

Lapho ipholilayini ihamba ngaphandle futhi izingxenye zayo ezigobile zihlukana ekhoneni, i-{{cmd:OFFSETGAPTYPE}} inquma ukuthi ukhala luvalwa kanjani.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, bese `Specify point on side to offset` (noma, ne-Through, `Specify through point`), iphindwa kuze kube yilapho {{key:Enter}}.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: indlela {{cmd:OFFSET}} evala ngayo izikhala ezikhoneni ezingaphandle zepholilayini. `0` yelula izingxenye kuze kuhlangane (izilungiselelo zokuqala), `1` ziwuxhuma ngomnsalo ozungeze ikhona elidala, `2` ngokusika okuqondile. Amakhona angaphakathi namasegimenti ama-arc akuthintwa. Igcinwa kulesi sesheni.

### EXTRIM

{{cmd:EXTRIM}} isika konke ohlangothini oluyodwa lwemphetho. Khetha umphetho wokusika (umugqa, arc, indilinga, ipholilayini, i-elipse, i-spline noma umugqa wokwakha), bese ukhetha iphoyinti ohlangothini okufanele kukhishwe: yonke imigqa, ama-arc, izindilinga, amapholilayini nemigqa yokwakha edlula emphethelweni ilahlekelwa yingxenye yayo ohlangothini lwalowo, lapho iqala khona emphethelweni. Ngenkathi ukhetha uhlangothi, izingxenye ezizosuswa zilandela isikhombi. Ngomphetho ovaliwe izinhlangothi ziyingaphakathi nangaphandle. Izinto ezithinta umphetho kuphela, nombhalo, ama-hatch, ama-spline nama-elipse adlula kuwo, ziyashiywa njengazo. Inyathelo elilodwa lokuhlehlisa.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: indlela {{cmd:TRIM}} ne-{{cmd:EXTEND}} eqala ngayo. `1` Quick: yonke into iyimphetho yokusika noma umngcele. `0` Standard: zibuza imiphetho kuqala. Futhi `(setvar "TRIMEXTENDMODE" 0)` ku-LISP.

### TRIM

Ama-alias: `TR`. Iphrinta `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` kuqala. Kwi-Quick mode yonke into ebonakalayo iyimphetho yokusika, futhi into engadluliwe lutho ibhalwa; kwi-Standard mode ibuza `Select cutting edges (Enter = every object)` kuqala bese isika kuphela kulezo.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, iphindwa: chofoza ingcezu oyisusayo (ibonakala igreyi futhi idashiwe lapho isikhombi siphumule kuyo), hudula indlela edlula izingcezu eziningi (zonke ziya esinyathelweni esisodwa), noma uchofoze amaphoyinti amabili angenalutho ukuze uthole ifensi phakathi kwawo. {{key:Shift}} yelula esikhundleni salokho. `T` ikhetha imiphetho yokusika (Standard mode), `F` ibuza amaphoyinti efensi, `C` amakhona amabili ewindi (izingcezu ezingaphakathi ngokuphakathi ziyahamba), `O` ibuza `Enter a trim mode option [Quick/Standard]`, `E` ibuza `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` isula izinto ozikhethile, `U` ihlehlisa ukukhetha okwedlule noma ukuhudula. {{key:Enter}} iyaphela. Bona [Sika nelula](topic:trim-and-extend).

- Ukuchofoza i-hatch kusika i-hatch: imiphetho yokusika ihlukanisa indawo ehlatshiwe, bese ingxenye oyichofozile iyasuswa (ayikho imugqa oqoshiwe ohlala lapho ibiyikhona). I-hatch igcina iphethini yayo noma i-gradient yayo; i-hatch ebiyixhunywe emngceleni wayo ayisaxhunywa emuva kwalokho, ngoba ayisagcwalisi wona. Iyasho uma imiphetho yokusika ingahlukanisi i-hatch lapho, uma ukuchofoza kungaphandle kwe-hatch, nalapho kungasala lutho (sebenzisa {{cmd:ERASE}}). Indlela noma ifensi ehudulwayo ayisiki ama-hatch.

### EXTEND

Ama-alias: `EX`. Okufanayo ne-TRIM ngaphambili: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Ukuchofoza kwelula ukuphela okusondele kuso emngceleni olandelayo; indlela noma ifensi ehudulwayo yelula yonke into edlula kuyo; {{key:Shift}} isika. `B` ikhetha imiphetho yomngcele (Standard mode). I-Mode ne-Edge zabelwana ne-TRIM.

### LINKVIEWS

Ama-alias: `SYNCVIEWS`; noma {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, noma isithonjana sesixhumanisi emathebhini womdwebo. `Link the panes' views [ON/OFF]` ({{key:Enter}} ithatha esinye isimo): uma kuvuliwe, ukuhamba noma ukushintsha isikali kwiphaneli esebenzayo kuhambisa wonke amaphaneli abonisa uhlobo olufanayo lwesikhala. Bona [Hlukanisa isikrini](topic:split-screen).

### OPENIN3D

Awukho ama-alias; noma {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} lapho uhlelo lokumodela ngo-3D lwamukela umdwebo owunikezwe. Ulivula lapho ethebeni elisha njenge-DWG (akukho okulayishwayo). Uma isiphequluli sivimbela ithebhu, iyasho lokho.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: okudwetshwa uma ucindezela futhi uhudula endaweni engenalutho. Okufanayo ne-Settings › CadCraft › Dragging to select. Bona [Ukukhetha nge-lasso](topic:lasso-selection).

### FILLET

Ama-alias: `F`. Imigqa, ama-arc, izindilinga namapholilayini. Iphrinta `Current settings: Mode = TRIM, Radius = 0` kuqala.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` ibuza `Specify fillet radius <last>`. `T` ibuza `Enter Trim mode option [Trim/No trim]`: uma kuthi No trim izinto zishiya njengazo futhi ama-arc kuphela engezwa.
  - `M` igcina umyalo usebenza amakhona amaningi kuze kube yilapho {{key:Enter}}; `U` ihlehlisa ikhona lokugcina ngaphandle kokushiya umyalo.
  - `P` ibuza `Select 2D polyline [Radius]` futhi igoqa ikhona ngalinye lapho izingxenye ezimbili zomugqa ziyahlangana. I-fillet esevele iyo ishintshwa yirediyasi emisha; irediyasi 0 iyasisusa. Amakhona okungenzeka ngezingxenye ezimfushane kakhulu ngerediyasi ashiywa futhi abalwe.
- `Select second object or shift-select to apply corner [Radius]`. Bamba {{key:Shift}} ngenkathi uchofoza ukuze uthole ikhona elibukhali, noma ngabe iyiphi irediyasi.

Chofoza into ngayinye engxenyeni oyifunayo ukugcina. Imigqa ebingahlanganisi iyelulwa. Imigqa emibili ehambisana ithola uhhafu wesiyingi ngaphesheya kwesikhala, ekupheleni komugqa wokuqala oseduze kakhulu nokuchofoza kwakho. Indilinga ayikaze isikwe. Izingxenye ezimbili zepholilayini eyodwa ezihlangene zithola umnsalo ngaphakathi kwepholilayini; ipholilayini nento enye ziyasebenza uma ukusika kuwela esegimenteni lokuqala noma lokugcina lepholilayini.

### CHAMFER

Ama-alias: `CHA`. Imigqa namasegimenti omugqa wamapholilayini. Iphrinta izibalo zamanje (noma ubude nengeli) kuqala.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` ibuza `Specify first chamfer distance <last>` ne-`Specify second chamfer distance <the first>`: okokuqala kusikwa emgqeni wokuqala owukhethayo, okwesibili komunye umugqa.
  - `A` ibuza `Specify chamfer length on the first line` ne-`Specify chamfer angle from the first line`.
  - `E` (mEthod) ikhetha ukuthi yiphi kwezimbili i-chamfer elandelayo izosebenzisa. `T`, `M`, `U` no `P` zisebenza njengakwi-{{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+chofoza yenza ikhona elibukhali.

Ibanga elidlula umugqa liyenqatshwa (`Distance is too large.`).

### BREAK and BREAKATPOINT

Ama-alias: `BR`. `Select object` (lapho uchofoza khona kuyiphoyinti lokuqala), `Specify second break point [First point]`; `F` ibuza `Specify first break point` ne-`Specify second break point`. Ingxenye phakathi iyasuswa; kwindilinga, ngokuphambene nokuhamba kwewashi kusukela ephoyinteni lokuqala. BREAKATPOINT ibuza `Specify break point` futhi ihlukanisa into ibe ezimbili lapho (hhayi indilinga).

### LENGTHEN

Ama-alias: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: ukukhetha kuphrinta `Current length` (nengeli equkethwe yomnsalo) bese kubuza futhi. `DE` ibuza `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` iyahudula. Bese `Select an object to change [Undo]`, iphindwa: iphethelo elisondele kakhulu kokuchofoza liyanyakaza. Imigqa, ama-arc namapholilayini avulekile.

### JOIN

Ama-alias: `J`. `Select objects to join`. Imigqa, ama-arc namapholilayini avulekile ahlangana ngokuphelela abe amapholilayini (avaliwe uma uchungechunge luvalekile); imigqa esemgqeni owodwa ibe umugqa owodwa; ama-arc endilinganeni eyodwa aba umnsalo owodwa noma indilinga. Umlando utshela ukuthi izinto ezingaki zixhumene nokuthi zingaki ezingaxhumanga.

### MATCHPROP

Ama-alias: `MA`, `PAINTER`. `Select source object`, bese `Select destination objects [Settings]` kanye ne-{{key:Enter}}. Ikopisha ingqimba nombala, futhi phakathi kwezinto zohlobo olufanayo ubude nobubanzi bombhalo, usayizi wezilinganiso, noma iphethini ye-hatch. `S` ibuza `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, iphindwa kuze kube yilapho {{key:Enter}}; ukukhetha kukhunjulwa lolu sesheni.

### EXPLODE

Ama-alias: `X`. Amapholilayini aba imigqa namansalo, izinkomba zamabhulokhi zibe izinto zazo, izilinganiso zibe imigqa, izinhloko zemicibisholo nombhalo. I-array eshintshekayo ({{cmd:ARRAYEDIT}}) iba amakhophi ajwayelekile ezinto zayo.

- `Select objects`

### GROUP

Ama-alias: `G`. {{cmd:GROUP}} inikeza izinto ezikhethiwe igama elabelwana ngalo. Khetha izinto, bese uthayipha igama (akukho izikhala; `?` ibala amaqembu; Enter yenza iqembu elingenagama) futhi, kweqembu elinegama, incazelo engaphoqelekile. Kusukela kulapho, ukuchofoza enye yazo, noma iwindi elithatha enye, kukhetha zonke, ngakho zihamba, zikopishwa futhi zisulwe ndawonye; ngayinye isalokhu iyinto yayo. Into ingaba eqenjini eliningi. Ikhophi yeqembu eliphelele iyiqembu elisha elingenagama; ikhophi yelunga elilodwa lodwa ijoyina iqembu. Amaqembu ayabe esikhaleni alenziwe kuso (imodeli noma ishidi). Agcinwa uma ulondoloza njenge-DWG noma i-DXF uphinde uvule ifayela ku-CadCraft; amafayela e-DXF 2000 aphinde ayathwala njengezinto zeqembu zezinye izinhlelo, namaqembu akwenziwe kwenye inhlelo ayafundwa uma i-DXF noma i-DWG ivuliwe.

### UNGROUP

{{cmd:UNGROUP}} ihlukanisa amaqembu: khetha izinto zamaqembu (liqembu ngalinye elingena kulo lihlukaniswa) noma thayipha `Name` negama leqembu. Izinto zihlala emdwebweni. Inyathelo elilodwa lokuhlehlisa libuyisa amaqembu.

### GROUPEDIT

{{cmd:GROUPEDIT}} ishintsha iqembu elilodwa. Khetha enye yezinto zalo, noma `Name` negama layo; iqembu elisevele likhethiwe lithathwa njengalo. Bese: `Add` izinto (zikhethwa ngayinye, hhayi iqembu ngeqembu), `Remove` izinto, `REName` iqembu, shintsha `Description` yalo, noma beka `Selectable` (ukuthi ukuchofoza enye into kukhetha iqembu lonke yini). `eXit` noma Enter iyaphela. Iqembu elingenazinto ezisele liyanyamalala.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: ngo-`1` (izilungiselelo zokuqala) ukuchofoza noma iwindi kwento equkethwe eqembu kukhetha lonke iqembu; ngo-`0` izinto zodwa, ukuze ukwazi ukuhlela elilodwa. Igcinwa kulesi sesheni.

## Ibhodi lokopisha

Ibhodi lokopisha lee-CadCraft: lisebenza ngaphakathi komdwebo, phakathi kwemidwebo nasemathebhini e-CadCraft kulesi siphequluli. Bona [Kopisha, namathisela nephinda](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, noma {{ui:Copy}} kweqembu le-{{ui:Edit}}. Ikopisha izinto ebhodini lokopisha, namabhulokhi nezingqimba ezisetshenziswa yizo. Izinto zihlala zikhethiwe.

- `Select objects to copy` (iyadlulwa uma izinto sezikhethiwe)

### CUTCLIP

{{key:Mod+X}}, noma {{ui:Cut}} kwimenyu ye-{{ui:More}}. Ikopisha izinto ebhodini lokopisha, bese iziSusa (inyathelo elilodwa lokuhlehlisa).

- `Select objects to cut` (iyadlulwa uma izinto sezikhethiwe)

### COPYBASE

Ikopisha izinto ebhodini lokopisha ngephoyinti lesisekelo oliKhethile; ukunamathisela kubeka leliphoyinti.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, noma {{ui:Paste}} kweqembu le-{{ui:Edit}}. Ikhophi ilandela isikhombi, ilenga kusukela ekhoneni elingezansi kwesobunxele lendawo yayo (noma esikhungweni sayo, noma kuphoyinti le-`COPYBASE`; bona [Izilungiselelo ze-CadCraft](topic:settings)).

- `Specify insertion point`

Izinto ezinamathiselwe zikhethiwe. Ibhulokhi emdwebweni esevele inalo igama elifanayo igcina inkcazo yalo mdwebo.

Uma indawo ekopishwe ku-MarkupCraft isimusha kunalokho i-CadCraft ekopishile (futhi isneyithuba amahora ayi-6), i-{{key:Mod+V}} ne-`PASTECLIP` zinamathisela leyo ndawo esikhundleni salokho: bona `PASTEAREA`.

### PASTEAREA

Ama-alias: `PAREA`. {{ui:Paste a copied area}} kwimenyu ye-{{ui:More}}. Inamathisela indawo ekopishwe nge-{{ui:Copy area}} ku-MarkupCraft njengesithombe ngosayizi wayo wangempela. Bona [Izithombe emdwebweni](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (kuphela uma ishidi lalingenaso isikali somdwebo): inombolo, {{key:Enter}} ngosayizi wephepha, noma `P`, bese `First point on the pasted area`, `Second point on the pasted area` nebanga lawo langempela.

### PASTEORIG

{{key:Mod+Shift+V}}, noma {{ui:Paste in place}} kwimenyu ye-{{ui:More}}. Inamathisela ezindaweni ezigxilwe kuzo izinto ezakopishwa kuzo. Ayibuzi lutho.

### DUPLICATE

Ama-alias: `DUP`. {{key:Mod+D}}, noma {{ui:Duplicate and move}} kwimenyu ye-{{ui:More}}. Ikhophi yezinto ihamba nesikhombi kusukela lapho ikhona; {{key:Esc}} ayishiyi lutho. Ayisebenzisi ibhodi lokopisha.

- `Select objects to duplicate` (iyadlulwa uma izinto sezikhethiwe)
- `Specify where the copy goes (Esc leaves nothing)`: chofoza, thayipha iphoyinti, `@dx,dy` (kusukela lapho isikhombi sasikhona), noma ibanga elisiya ecaleni kwesikhombi.

### SELECT

Ibuza `Select objects` (nazo zonke izinketho ezingezansi) futhi igcina okukhethile okukhethwe kukho, ngomyalo olandelayo noma ye-`P` kamuva.

### QSELECT

Ama-alias: `QS`. Kusiphequluli, ingxoxo ye-{{ui:Quick select}} (bona [Khetha izinto](topic:select-objects#select-by-a-rule-quick-select)). Ngaphandle kwayo, umugqa womyalo ubuza `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` kanye ne-`Enter value`. Okufanayo kuba ukukhetha.

### SELECTSIMILAR

Ama-alias: `SIM`. `Select objects [SEttings]` (noma ukukhetha kwamanje): ikhetha yonke into yohlobo olufanayo nengqimba nombala ofanayo (negama lebhulokhi, iphethini ye-hatch). `SE` ibuza `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, iphindwa kuze kube yilapho {{key:Enter}}.

### FIND

Awukho ama-alias; noma {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. Kusiphequluli, ingxoxo ye-{{ui:Find and replace}} (bona [Engeza umbhalo nezimpawu](topic:text#find-and-replace-words)). Ngaphandle kwayo: `Enter text to find`, bese `Enter replacement text (Enter: select what is found)`. Ibheka emBhalweni, emaphrosesi amanani nakumbhalo wezilinganiso, ethebeni elivulekile noma ekukhethweni.

### SELECTALL and DESELECT

`SELECTALL` (i-alias `AI_SELALL`, {{key:Mod+A}}) ikhetha yonke into ongayihlela ethebeni elivulekile. `DESELECT` (ama-alias `AI_DESELECT`, `SELECTNONE`; noma {{key:Esc}}) isula ukukhetha.

## Izilinganiso

### DIMLINEAR

Ama-alias: `DLI`, `DIMLIN`. Ibanga elinqamulayo noma elithe tha.

- `Specify first extension line origin [Select object]` (Enter noma `S`: `Select object to dimension`, bese uchofoza umugqa, i-arc, indilinga noma ingxenye yepholilayini)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` ibuza umbhalo (`<>` ingumnani olinganisiwe), `H` no `V` ilungisa ukuqondisa, `R` ibuza `Specify angle of dimension line <0>`.

### DIMALIGNED

Ama-alias: `DAL`, `DIMALI`. Ibanga langempela phakathi kwamaphoyinti amabili.

- Amaphoyinti okuqala njengakwi-{{cmd:DIMLINEAR}}, bese `Specify dimension line location [Text]`.

### DIMANGULAR

Ama-alias: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- I-arc: engeli yayo. Indilinga: `Specify second angle endpoint`. Umugqa: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: chofoza ngaphakathi kwengeli ofuna ukuyilinganisa.

### DIMRADIUS and DIMDIAMETER

Ama-alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, bese `Specify dimension line location [Text]`.

### DIMCONTINUE

Ama-alias: `DCO`, `DIMCONT`. Iqhubeka kusukela esilinganisweni sokugcina somugqa noma esihambisanayo esenziwe (noma ibuze `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, iphindwa kuze kube yilapho {{key:Enter}}.

### DIMBASELINE

Ama-alias: `DBA`, `DIMBASE`. Njengo-{{cmd:DIMCONTINUE}}, kodwa zonke izilinganiso ziqala kusukela ekuqaleni kokuqala futhi zihlala zikhulile ngaphandle.

### DIMORDINATE

Ama-alias: `DOR`, `DIMORD`. `Specify feature location`, bese `Specify leader endpoint [Xdatum/Ydatum/Text]`. Ibhala ukuthi into ikude kangakanani nomsuka we-UCS ngokuhamba kuX noma kuY, emugqeni oqondisayo: umugqa okhuphuka noma wehla kakhulu ufunda X, owomugqa ohamba ngebhodwe ufunda Y; i-`Xdatum` ne-`Ydatum` zilungisa lokho. Beka umsuka kuqala nge-{{cmd:UCS}} (ngaphandle kwawo kuba ngu-0,0 womdwebo). Amaphethelo ahambisa into, umsuka nokuphela komugqa oqondisayo, nenani liyalandela. Igcinwa njengesilinganiso sangempela se-ordinate ku-DWG ne-DXF. Yenqaba ukuphela komugqa oqondisayo esicini ngokwaso.

### DIMARC

Ama-alias: `DAR`. `Select arc or polyline arc segment`, bese `Specify arc length dimension location [Text]`. Ilinganisa ngomugqa wegobolo (hhayi ngentambo) ibhale uphawu lomnsalo ngaphambi kwenani. Yenqaba indilinga egcwele, umugqa noma ingxenye yepholilayini eqondile. I-DWG iyigcina njengesilinganiso sobude bomnsalo; i-DXF iyigcina njengesilinganiso sengeli nobude njengombhalo waso, futhi i-CadCraft iyivula futhi njengesilinganiso sobude bomnsalo.

### DIMJOGGED

Ama-alias: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Isilinganiso serediyasi segobolo esisikhungo sayo sikude noma siphumile esithombeni: umugqa wesilinganiso uqala endaweni oyinikezayo esikhundleni sesikhungo, unegobolo phakathi, futhi usabhala irediyasi yangempela. I-DWG iyigcina njengesilinganiso serediyasi esinegobolo; i-DXF iyigcina njengesilinganiso serediyasi, futhi i-CadCraft iyivula inegobolo futhi.

### DIMJOGLINE

Ama-alias: `DJL`. `Select dimension to add jog [Remove]`, bese `Specify jog location (or press Enter)`. Ibeka uphawu lwegobolo emugqeni wesilinganiso somugqa noma ohambisanayo, ukukhombisa ukuthi ibanga aliboniswa ngesikali; inani alishintshi. `Remove` iyalisusa. Yenqaba ezinye izinhlobo zesilinganiso.

### QDIM

Awukho ama-alias. `Select geometry to dimension`, bese `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Ilinganisa izinto eziningi ngesinyathelo esisodwa, kusukela emaphethelweni emigqa namasegimenti epholilayini, phakathi kwezindilinga nama-arc, amaphoyinti nezinkomba zamabhulokhi. Indawo ephezulu noma ephansi kwezinto ilinganisa ngokuwela, eseceleni ilinganisa phezulu. `Continuous` ixhuma amaphoyinti, `Baseline` ilinganisa konke kusukela kokuqala, `Staggered` yakha izibhangqwana kusukela phakathi ziphuma, `Ordinate` ipha ibanga ngalinye lephoyinti kusukela kwi-datum (`datumPoint` ikhetha enye), `Radius` ne-`Diameter` zilinganisa zonke izindilinga nama-arc akhethiwe. Imodi iyakhunjulwa. Konke okudalwayo kuyinyathelo elilodwa lokuhlehlisa. Iyasho uma kunezinto ezingaphansi kwezimbili, noma akukho ama-arc noma izindilinga ze-Radius ne-Diameter.

### DIMBREAK

Ama-alias: `DBREAK`. `Select dimensions to add or remove breaks`, bese `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` ishiya isikhala emugqeni wesilinganiso nasemigqeni yokwelula lapho into enye ihamba khona, futhi iyaphinda ibale izikhala lapho lezo zinto noma isilinganiso sihamba. `Manual` (isilinganiso esisodwa) ibuza amaphoyinti amabili futhi ishiye isikhala phakathi kwawo. `Remove` isusa zonke izikhala. Isikhala singama-1.5 wobude bombhalo wesilinganiso.

### DIMSPACE

Awukho ama-alias. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Ihambisa imigqa yezilinganiso ezihambisana zomugqa nezihambisanayo (noma ezingeni ngokuhlanganiswa kwenhlangano) ukuze zibe phakathi kwebanga elilinganayo, ibalwe kusukela kwisilinganiso sesisekelo, ngayinye ohlangothini lwayo. `0` izilungisa ngokuhambisana nesisekelo; `Auto` ingokabili kobude bombhalo wesilinganiso sesisekelo. Izilinganiso ezingahambisani nesisekelo ziyashiywa.

### DIMINSPECT

Awukho ama-alias. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Idweba uhlaka ozungeze inani, nelebula phambili kwalo nezinga lokuhlola lingemuva kwalo. `remove` iyalisusa uhlaka. Umbhalo wokubekezelela uhlala nenani.

### DIMOVERRIDE

Ama-alias: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, kuze kube yilapho Enter, bese `Select dimensions`. Ishintsha lezo zilungiselelo kuzilinganiso ezikhethiwe kuphela; isitayela sesilinganiso asishintshwa. Ithatha izinto eziguquguqukayo ezingunombolo noma iswishi (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` ibuyisela izilinganiso ezikhethiwe esitayelweni sazo. Yenqaba igama elingesiyo into enjalo nenani elingalamukelwa.

### DIMREASSOCIATE

Ama-alias: `DRE`, `DIMREASSOC`. `Select dimensions`, bese ngayinye amaphethelo ayo okwelula (`Specify first extension line origin on an object`: bamba ekugcineni noma esikhungweni somugqa, ekhoneni lepholilayini, ekhungweni; i-Enter igcina leliphoyinti likhululekile), noma ngerediyasi, idayamitha, serediyasi enegobolo noma isilinganiso sobude bomnsalo `Select arc or circle`. Isilinganiso sesibe sixhunywe lezo zinto: zihamba noma zishintsha usayizi, sihamba nazo ngokuphindaphinda, bese siphinda silinganise. Ukuhambisa iphoyinti exhunyiwe ngesandla, noma ukususa into, kuphelisa lokho kuxhumana. Lokuxhumana kugcinwa ku-DWG ne-DXF 2000 njengedatha ye-CadCraft; ezinye izinhlelo zibona isilinganiso sejwayelekile.

### DIMDISASSOCIATE

Ama-alias: `DDA`, `DIMDISASSOC`. `Select dimensions`. Ibakhulula ezintweni abaxhunywe kuzo; akukho nto ehamba.

### CENTERMARK

Ama-alias: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, kuze kube yilapho Enter. Idweba uphawu lwesikhungo olunamigqa emine yesikhungo eya ngaphesheya kwegobolo (uhlobo lomugqa CENTER), njengemigqa esengqimbeni yamanje; ilinganiswa ngosayizi wensonga nesikali sesilinganiso samanje, ijikiswa nge-UCS. Ayilandeli indilinga uma ihamba.

### CENTERLINE

Ama-alias: `CL`. `Select first line`, `Select second line`. Idweba umugqa phakathi kwemigqa emibili (ngomugqa wokuhlukanisa uma ihlangana), eside kancane kunalapho bekunjalo, ngohlobo lomugqa CENTER. Umugqa ojwayelekile: awulandeli imigqa emibili.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Awukho ama-alias. Ngayinye ibuza `Enter new value for … <current>` futhi ibeka lowo usayizi wezilinganiso **ezintsha**: isikali sonke, ukuphakama kombhalo, usayizi wensonga, izinombolo zamadesimali (kuze kube ku-8), igebe elizungeze umbhalo, ukweqa umugqa wezilinganiso, ukuhamba ukusuka kumsuka. Bona [Setha usayizi wezilinganiso](topic:dimension-settings).

### DIMLUNIT

Isilungiselelo sezilinganiso: ifomethi yezilinganiso ezintsha kuphela (1 scientific, 2 decimal, 3 engineering, 4 architectural, 5 fractional).

### DIMSTYLE and -DIMSTYLE

Ama-alias: `DST`, `DDIM`, `D`. Umphathi wesitayela sezilinganiso: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` kumugqa womyalo: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Bona [Setha usayizi wezilinganiso](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, bese izilinganiso (noma ezikhethwe kakade). New ibuza umbhalo (`<>` = ukulinganisa); Rotate ibuza i-engeli (0 ibuyisela umbhalo); Oblique ibuza i-engeli yemigqa yokwelula kwi-eksisi ye-X (Enter = akukho; izilinganiso ezilinganayo nezihambisanayo kuphela). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Bona [Setha usayizi wezilinganiso](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Ama-alias: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, noma uma izilinganiso zikhethiwe `Units in the text of the selected dimensions`. Ibhala ubude olulinganisiwe ngalowo yunithi nayunithi ilandela (DIMLFAC nesijobelelo se-DIMPOST); `D` ibuyela ezinyunithini zomdwebo. Bona [Izilinganiso ku-mm, cm, m noma km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Ama-alias: `RC`. Iphrinta `Arc length: … Type: …`, bese `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular ibuza `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand ilandela isikhombi kuze kube yilapho kuchofozwa noma {{key:Enter}}; `O` ibuza `Select object` ne-`Reverse direction? [Yes/No] <N>` futhi iguqule into ibe ifu. `A` ibuza `Specify the length of each arc`. `R`, `P` no `F` zikhetha uhlobo lwefu elilandelayo. Umphumela uyipholilayini evaliwe yama-arc.

### MLEADER

Ama-alias: `MLD`; noma {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, bese umbhalo ebhokisini elisendaweni (noma, ngaphandle kwalo, `Enter text (an empty line ends)`). `Block` ibuza igama lebhulokhi kuqala, futhi i-multileader ibonisa leyo bhulokhi esikhundleni sombhalo. Imigqa eqondisayo eminingi: {{cmd:MLEADEREDIT}}. Igcinwa njengo-multileader wangempela ku-DWG; i-DXF igcina imigqa, inhloko nombhalo wayo.

### MLEADEREDIT

Ama-alias: `MLE`. `Select a multileader`, bese `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: iphoyinti ngalinye lengeza umugqa oqondisayo kusuka enhlokweni entsha iye endaweni efanayo yokufika, kuze kube yilapho {{key:Enter}}. `Remove leaders` bese isusa umugqa oqondisayo ochofozile (i-multileader igcina okungenani eyodwa). `Block content` ibuza igama lebhulokhi bese ibonisa leyo bhulokhi esikhundleni sombhalo (izici zayo zibuzwa); `Text content` ibuyisela umbhalo. Umugqa ngamunye oqondisayo unesibambi sawo. I-DWG igcina yonke imigqa eqondisayo nebhulokhi ku-multileader eyodwa.

### MLEADERALIGN

Ama-alias: `MLA`. `Select multileaders`, bese `Select multileader to align to [Distribute/Spacing/Use current spacing]` kanye ne-`Specify direction`. Ihambisa izindawo zokufika zama-multileader amanye (nombhalo noma ibhulokhi yawo) zibe emugqeni odlula endaweni yokufika yalowo okhethiwe ngalolo qondiso; izinhloko zihlala lapho zibheke khona. `Spacing` futhi ibeka ibanga elilinganayo phakathi kwawo; `Distribute` ibuza amaphoyinti amabili futhi ibasakaza ngokulinganayo phakathi. Idinga okungenani ama-multileader amabili.

### MLEADERCOLLECT

Ama-alias: `MLC`. `Select multileaders`, bese `Specify collected multileader location [Vertical/Horizontal]` (Enter igcina indawo yokuqala). Yenza i-multileader eyodwa kwezinhlanu: okuqukethwe yibhulokhi kungena ebhulokhini entsha equkethe zonke izinhlobo ngokuhlangana ngokuhlangana noma phezu kwenye; okuqukethwe ngumbhalo kuba inothi elilodwa nomugqa ngamunye. I-multileader yokuqala igcina imigqa yayo eqondisayo; ezinye ziyasuswa. Yenqaba ukuxuba umbhalo nokuqukethwe kwebhulokhi.

### TABLE

Ama-alias: `TB`; noma {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Yenza ithebula: into eyodwa oyihambisayo, oyikopisha, oyijikisayo, oyishintshela isikali futhi oyiphrinta njenganoma yiyiphi enye, namaseli ayo agcinwa njengedatha.

- `Number of data rows or [Paste/File/Style] <3>`, bese `Number of columns <3>`, `Text height` no `Top left corner of the table`. Ithebula lithola umugqa wesihloko (iseli elilodwa elihlanganisiwe) nomugqa wekhanda phezu komigqa yedatha.
- `P`: ithebula kusuka emaselini eshidi lokusebenza ebhodini lokopisha (umbhalo nethebhu phakathi kwamaseli). Ukucindezela {{key:Ctrl+V}} uma kukhona amaseli anjalo ebhodini lokopisha kwenza okufanayo, ngaphandle uma ikhophi yeCadCraft iyintsha (noma i-CadCraft ingakwazi ukutshela: khona-ke inamathisela ikhophi yayo futhi iyasho lokho). `F`: ithebula elivela kwifayela le-`.csv` noma eliqhelelanisiwe ngethebhu. Umugqa wokuqala uba umugqa wekhanda; ububanzi bamakholomu buyalingana nombhalo.
- `S`: khetha isitayela sethebula lalo (bona {{cmd:TABLESTYLE}}).
- Iyenqaba inani lemigqa noma lamakholomu elingesiyo inombolo ephelele, namaseli amaningi kakhulu ethebula elingalingana nawo (2,000 imigqa, 200 amakholomu, 40,000 amaseli).
- {{cmd:EXPLODE}} iguqula ithebula libe imigqa nombhalo. Igcinwa njengo-DWG yinto yethebula yangempela abanye abahleli bangayihlela; igcinwa njengo-DXF iyibhulokhi elidwetsha lona, futhi i-CadCraft iyivula njengethebula futhi.

### TABLEDIT

Ama-alias: `TABLEEDIT`, `TABEDIT`; noma chofoza kabili iseli. Ihlela ithebula.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Chofoza iseli, noma ngethebula elikhethiwe uthayiphe igama layo (`B3`: ikholomu B, umugqa 3; umugqa wesihloko ungumugqa 1). Esiphequluli kuvula ibhokisi phezu kweseli: {{key:Enter}} igcina umbhalo, {{key:Tab}} iya kwiseli elilandelayo, {{key:Alt+Enter}} iqala umugqa omusha, {{key:Esc}} ishiya iseli njengalo bekunjalo.
- Umbhalo oqala nge-`=` uyifomula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, nge-`+ - * / ^`, amabhrakede nemisebenzi efana ne-`sqrt` ne-`round`. Iseli libonisa inani; ifomula eyibiza iseli layo, iseli elingaphandle kwethebula noma iseli elingenaso inombolo ibonisa `####` futhi umugqa womyalo utshela ukuthi kungani.
- `R` / `C`: `Insert` noma `Delete` imigqa noma amakholomu kuseli elikhethiwe (kangaki, nokuthi phezulu noma ngaphansi, ngakwesobunxele noma ngakwesokudla). Izifomula zilandela amaseli abizwa kuzo.
- `S`: ububanzi bekholomu nokuphakama komugqa. Umugqa awusoze ube mncane kunombhalo wawo. Ithebula elikhethiwe linesibambi kumaphethelo ngamunye wekholomu nomugqa ngamunye.
- `M`: hlanganisa kusukela eselini elikhethiwe kuya kwelinye; `U`: hlukanisa. `A`: ukuhlelwa (`TL` phezulu kwesobunxele … `MC` phakathi … `BR` phansi kwesokudla). `H`: ukuphakama kombhalo weseli lalo (0 = eyesitayela). `K`: yenza umugqa ube umugqa wesihloko, wekhanda noma wedatha. `CL`: hlanza iseli.
- Yenqaba ithebula esigabeni esikhiyiwe, ukususa yonke imigqa noma amakholomu, nokuhlanganisa okungasika iseli elihlanganisiwe lesibili sibe yizingxenye ezimbili.

### TABLESTYLE

Ama-alias: `TS`. Ibala izitayela zethebula kanye nokuthi zingaki izithebula ezisebenzisa ngayinye, bese `Table style: [New/Set/Edit/Delete/Apply]`.

- Isitayela sigcina ukuphakama nokuhlelwa kombhalo womugqa wesihloko, womugqa wekhanda nomugqa wedatha, umbelethe weseli, nemiphetho edwetshwayo (ephandle, phakathi komigqa, phakathi kwamakholomu).
- `N` yenza isitayela ngokusuka kwesamanje futhi siyenze samanje; `S` ibeka isitayela samanje (amathebula amasha asithatha); `E` iyahlela esisodwa: amathebula asisebenzisayo ayadwetshwa kabusha; `A` ibeka isitayela samanje kumathebula akhethiwe; `D` isusa esisodwa (hhayi i-Standard, hhayi okwamanje; amathebula ayesisebenzisa agcina imbonakalo yawo).
- Izitayela zigcinwa nomdwebo (DWG ne-DXF).

### TABLEEXPORT

Igcina okubonisa ithebula njengefayela le-CSV (ifomula njengenani layo). `Select a table`, noma uyikhethele kuqala. Amaseli emibhalo aqala nge-`=`, `+`, `-` noma `@` athola i-`'` ekuqaleni ukuze i-spreadsheet ingawasebenzisi.

### TABLEPASTE

Ama-alias: `PASTETABLE`. Yenza ithebula kusuka emaselini eshidi lokusebenza ebhodini lokopisha, bese ibuza ikhona lakhona elingenhla kwesobunxele. Okufanayo ne-{{cmd:TABLE}} › `Paste`.

### DATALINK

Ama-alias: `DL`. `Data link: [New/List/Remove] <New>`. `N` ibuza ifayela le-CSV, ibeka ithebula kulo futhi ikhumbule igama lefayela; `L` ibala izixhumanisi ngefayela lazo, usayizi, isikhathi lapho zafundwa nokuthi zingaki izithebula ezisebenzisa; `R` isusa isixhumanisi (amathebula azo ahlala njengamathebula ajwayelekile).

### DATALINKUPDATE

Ama-alias: `DLU`. Ifunda kabusha ifayela lesixhumanisi sedatha futhi igcwalisa kabusha amathebula axhunywe kulo (imigqa namakholomu ayengezwa noma asuswe ukuze ahambisane). Isiphequluli asikwazi ukuvula ifayela ngokwaso, ngakho ikucela ukuthi ukhethe ifayela futhi. Uma kunezixhumanisi eziningi, iyabuza ukuthi yiphi.

### FIELD

Ibeka insimu emdwebweni: umbhalo oziqhubela wona ngokuzenzakalela. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: manje, noma usuku olulondoloziwe, olusungulwe noma olushicilelwe, nefomethi (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: igama lefayela, nangaphandle kwesandiso noma nakho. `S`: inombolo yeshidi, isihloko salo, noma izingaki amashidi akhona. `P`: impahla yomdwebo ngegama (bona {{cmd:DWGPROPS}}). `O`: khetha into, bese ufunda okufanele (indawo, ubude, umjikelezo, irediyasi, idayamitha, ingqimba, igama, x, y, umbhalo, ukujikeleza, umbala) nezinhlamvu zamadesimali. `E`: ifomula. `C`: umbhalo onezinkhomba ezithayipha njengoba zinjalo, njengo `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Bese `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: umbhalo okhethiwe uthola insimu eyengezwa ngemva kwalokho okuqukethe; iseli lethebula kanjalo; ireferensi yebhulokhi ibuza isici; {{key:Enter}} ibuza ukuphakama namaphoyinti wombhalo omusha.
- Esikrinini insimu inesisekelo esikhanyayo esinsundu; ukuphrinta nePDF akukaze kube nayo. Ukuthayipha phezu kombhalo wensimu ngesandla kuyiphelisa. Insimu engenakubalwa ibonisa `####`.
- Insimu yento ithola into yayo ngokhiye oyigcina i-CadCraft ezintweni (Settings › CadCraft › Merge-friendly files); uma okhiye bevaliwe iyenqaba.

### UPDATEFIELD

Ama-alias: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` ibeka lapho izinsimu zibuyekezwa khona ngokwazo: thayipha izinhlamvu ze-`O` open, `S` save, `P` plot, `R` regen (zonke ezine ukuqala), noma `NONE`.

### DWGPROPS

Ama-alias: `DRAWINGPROPS`. Ibala impahla yomdwebo, bese `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Eyokuqala eyisithupha iyona ePaneli le-{{ui:Drawing details}}; `U` yengeza igama lakho nenani lakho, `R` isusa okukodwa. Izinsimu ziyafunda (`%<prop:title>%`, `%<prop:Client>%`) futhi zilandela ngokushesha. Yenqaba igama lesici elingelo lenziwe ngaphakathi noma eliqukethe `%`, `<`, `>`, icwecwe noma isilanda.

## Ukulinganiswa

Bona [Hlola umdwebo](topic:constraints) kanye [Sebenzisa amapharamitha nezibalo](topic:parameters). Ukuvinjwa kusebenza ethebeni le-{{ui:Model}}.

### GEOMCONSTRAINT and the GC commands

Ama-alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, bese izicelo zalowo myalo.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (okwesibili uyahamba).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT and the DC commands

Ama-alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (inombolo, isibalo, noma `name=expression`).
- {{cmd:DCALIGNED}}: njengalapho ngenhla, ne-`[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` ibuza ukubekezelela kwebanga nengeli.
- {{cmd:DELCONSTRAINT}} (i-alias `DELCON`): `Select objects`; izivinjelo zazo ziyanyamalala.
- {{cmd:CONSTRAINTBAR}} (i-alias `CBAR`): `Select objects [Showall/Hideall]`, bese `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (ama-alias `PAR`, `PARAM`) ivula ipaneli le-{{ui:Parameters}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

I-alias `SWMACRO`. Ilanda i-macro (.swb) eyakha kabusha imodeli njengeskethi eyodwa evinjiwe ku-SolidWorks. Bona [Hambisa amaskethi aya nokusuka kwabanye abenzi bezingxenye ze-part](topic:solidworks-sketches).

## Amabhulokhi

### ANNOSCALE

Ama-alias: `CANNOSCALE`. Ichaza isikali sokuchaza somdwebo nokuthi ubamba izinto ezingaki ezichazayo, bese `New annotation scale`: thayipha `1:50`, `1:100`, `2:1`, inombolo eyodwa (`50` ingu-1:50) noma igama lesinye sezikali zomdwebo. Yonke into ebhalwe ichaza futhi yonke isilinganiso sichazayo siyashintshwa usayizi ukuze siphrinte ngosayizi ofanayo ngesikali esisha, ngesinyathelo esisodwa sokuhlehlisa; izinto ezingachazi azishintshwa, nento egcina uhlu lwezikali ngaphandle kwalesi esisha ({{cmd:OBJECTSCALE}}). Bona [Amayunithi, amaphepha nezikali](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Ama-alias: `OBJSCALE`. `Select annotative objects`, bese `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Umbhalo noma isilinganiso sokuchaza sigcina uhlu lwezikali zokuchaza. `Add` ne-`Delete` zibuza isikali (`1:50`, `2:1`, inombolo eyodwa, noma igama lesinye sezikali zomdwebo); `Current scale` yengeza isikali sokuchaza somdwebo; `List` iphrinta izikali zento ngayinye. Iviewport esikalini sayo esikhona ohlwini lwento ibonisa into ngosayizi okhiqiza ukuphakama kwayo ephepheni ngalesi sikali, esikrinini nakumashicilelo. Isikali sokugcina asikwazi ukususwa. Izinto ezingachazi ziyashiywa ngaphandle: vula i-Annotative ku-Properties kuqala. Izinhlu zigcinwa ku-DWG ne-DXF njengedatha ye-CadCraft. Bona [Amayunithi, amaphepha nezikali](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Ama-alias: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Ivuliwe (njengoba umdwebo uqala): into echazayo nayo ibonakala kwiviewport, noma kumodeli, esikalini esingekho ohlwini lwayo, ngosayizi enawo. Ivaliwe: ayibonakali khona, futhi ayikwazi ukukhethwa kumodeli. Isiswitshi siyinyathelo elilodwa lokuhlehlisa; asigcinwa efayeleni.

### SCALELISTEDIT

Ama-alias: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` kuze kube yilapho {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit ne-Delete zibuza igama lesikali. Izikali zomdwebo zijoyina uhlu lwezikali ze-viewport nezokushicilela futhi zigcinwa nomdwebo. Bona [Amayunithi, amaphepha nezikali](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: amaphoyinti igobolo elidlula kuwo; `Close`, `Undo`, bese `Start tangent` ne-`End tangent` (iphoyinti, noma {{key:Enter}}). Method › Control vertices ibuza iziga (1 kuya ku-5) futhi idwetsha kusukela ku-polygon yokulawula. Object iguqula amapholilayini abe ama-spline adlula emaphethelweni awo. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` yezinto eziningi; imigqa, ama-arc nama-spline kuqala kunikezwa njengamapholilayini. Bona [Ama-spline namapholilayini](topic:splines).

### BLOCK

Ama-alias: `B`, `BMAKE`.

- `Enter block name`. Uma likhona: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Ziyashintshwa zibe yisethulo esisodwa seblokhi elisha.

### WBLOCK

Ama-alias: `W`, `-WBLOCK`. Ibhala ibhulokhi, izinto ezithile noma wonke umdwebo njengefayela elisha le-DWG noma le-DXF. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ibe ngumsuka womdwebo omusha), `Select objects`, bese `File format [DWG/DXF/R12 DXF]` ne-`File name for the new drawing`, bese `What to do with the objects [Retain/Convert to block/Delete]`. I-Convert ishintsha zibe isethulo esisodwa seblokhi legama lefayela; i-Delete iyazisusa.
- **Block**: `Block to write out`. Izinto zalo ebhulokhini, nephoyinti lalo lesisekelo njengomsuka, kubandakanya namabhulokhi aphakathi.
- **Entire drawing**: yonke into esikhaleni semodeli. Amashidi awabhalwa; sebenzisa {{cmd:SAVEAS}} ukuthola ikhophi egcina wona.

Ifayela elisha liqukethe kuphela izingqimba, uhlobo lomugqa, izitayela zombhalo nezilinganiso, namabhulokhi ezinto zalo ezisetshenziswa, nezinyunithi zomdwebo. Inguqulo ye-DWG yile {{cmd:SAVEAS}} eyisebenzisile ekugcineni. Esiphequluli ifayela liyalandwa; ku-Studio kuvula ingxoxo yokulondoloza.

### ATTDEF

Ama-alias: `ATT`, `DDATTDEF`, `-ATTDEF`; noma {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Iphrinta izimo, bese `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` uma kuqinile), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. I-{{cmd:BLOCK}} ithatha izichazi zezici ibe ibhulokhi.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, noma chofoza kabili ireferensi enezici; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, bese ingxoxo ye-{{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): ireferensi efanayo, bese `<prompt> (<TAG>) <value>` ngesici ngasinye; {{key:Enter}} igcina inani. Bona [Izici](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Amanani agcinwe; izici ezintsha zithola ukuzenzela kwazo, ezisusiwe ziyanyamalala, izindawo zibuyiselwa.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. Ingxoxo: ibhulokhi, izici (ithegi, isicelo, okuzenzelayo, izimo, ukuhleleka), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT and REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (noma ukukhetha). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Save the block}} ne-{{ui:Discard}} kwibha zenza okufanayo. Konke ukuhlela kuyinyathelo elilodwa lokuhlehlisa. Bona [Izici](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT and BCLOSE

`BE`; noma {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` ivula umhleli webhulokhi. `BCLOSE` ibuza `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Save block}} ne-{{ui:Discard changes}} esigxotsheni zenza okufanayo. Konke okwenziwe kumhleli kuyinyathelo elilodwa lokuhlehlisa.

### VIEWBASE

Ama-alias: `FLATSHOT`. Ukubuka okuthe tha kwe-2D kwezinto eziqinile kwethebhu le-3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, isikali (`1:20`, `2:1`; {{key:Enter}} ithatha esifaka ishidi), bese isikhungo sokubuka. Isethulo esisodwa sebhulokhi, imiphetho ebonakalayo ku-VIEW-VISIBLE, eyefihliwe idashiwe ku-VIEW-HIDDEN. Bona [Ukubuka okuthe tha emashidini](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Ama-alias: `-PUBLISH`; noma {{ui:All sheets in one PDF}} kwingxoxo ye-{{ui:Plot to PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} ishicilela wonke amashidi, `S` ibuza amagama ahlukaniswe ngamakhoma. I-PDF eyodwa, ikhasi nesikhombisi-ndawo ngeshidi ngalinye. Bona [Wonke amashidi kuyi-PDF eyodwa](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Ama-alias: `SSM`, `SHEETSETMANAGER`. Ikuyisa esigabeni se-{{ui:Sheet set}} sepaneli yangakwesobunxele: amashidi emidwebo eminingi, abalwe futhi anesihloko, amabhulokhi wawo esihloko agcwaliswa esethini, ashicilelwe njenge-PDF eyodwa. Bona [Amasethi amashidi](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): khetha i-DWG noma i-DXF, bese iphoyinti lokufaka. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; uma kunezixhumanisi ezingaphezu kwesisodwa, khetha enye yezireferensi zayo noma thayipha `N` negama layo. Bona [Imidwebo exhunyiwe](topic:files#linked-drawings-external-references).

### COUNT

Ama-alias: `BCOUNT`; noma {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: ukukhetha kukhetha futhi kubale yonke ireferensi yalelo bhulokhi kulesi sikhala; {{key:Enter}} noma `A` zibala zonke; `E` bese `C` (izibalo) noma `A` (izici) zilanda i-CSV. Bona [Bala amabhulokhi nokukhipha ishidi lezinto](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Ama-alias: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (akubalulekile ukuthi kusetshenziswe ama-capital). `F` ibuza i-DWG noma i-DXF, bese umdwebo wonke noma enye yamabhulokhi ayo; igama elisetshenzisiwe libuza {{ui:Keep existing}} noma {{ui:Rename}}. `L` ivula ipaneli yomtapo.
- `Specify insertion point [Scale/Rotate]`. `S` ibuza `Specify scale factor`, `R` ibuza `Specify rotation angle`; kokubili kuyakhunjulwa.
- Uma ibhulokhi isivele iseduze kwezinto eziphindaphinda kwenye indawo ngaphandle kwayo, umugqa uyasho ukuthi izindawo ezingaki zincomiwe futhi isicelo sithola `suGgested`: `G` iyazibonisa; chofoza eduze kwenye ukuze ubeke ibhulokhi lapho, `A` yazo zonke, {{key:Enter}} ukubuyela emuva. Zithatha ukujikeleza kwabamakhelwane bazo nezinani zezici ezizenzakalelayo. Imidwebo engaphezu kwezinto ezingu-20,000 esikhaleni esivulekile ayisesakwa.
- Bese `Enter <prompt> (<TAG>) <default>` ngesici ngasinye ibhulokhi elisicelayo. Bona [Izici zebhulokhi](topic:attributes).

### LIBRARY

Ama-alias: `LIB`. Ivula ipaneli yomtapo: ibeka izinto, ihlola izibuyekezo, izikweletu zomtapo. Awukho imibuzo. Bona [Faka kusuka kufayela noma emtapweni](topic:insert-from-file-and-library).

### STEELMEMBER

Ama-alias: `SMEMBER`; noma {{ui:3D member}} kwithebhu ye-{{ui:Standard}} yomtapo. `Section size <W12x26>` (njengoba ithebhu iyilanda), bese `Start point [Column]` ne-`End point`: ilunga eliqinile ethebeni le-3D phakathi kwamaphoyinti amabili, lihlezi phansi. `C` ibuza iphoyinti lesisekelo lekholomu nobude bayo. Inyathelo elilodwa lokuhlehlisa. Bona [Beka izigaba zensimbi nezingxenye ezijwayelekile](topic:steel-and-standard-parts).

### PARTSLIST

Ama-alias: `PLIST`. `Top left corner of the parts list`, bese `Text height <2.5>`: idweba ithebula lazo zonke izingxenye ezijwayelekile nezigaba zensimbi ezibekwe kusuka emtapweni (izinombolo zezinto, inani, ingxenye, isitandadi, usayizi, ubude, impahla, ubunzima). Inyathelo elilodwa lokuhlehlisa. Bona [Beka izigaba zensimbi nezingxenye ezijwayelekile](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Ama-alias: `PU`. Isusa izichasiso zamabhulokhi okungasetshenziswa yilutho. Awukho imibuzo.

### DELBLOCKS

Noma {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: chofoza ireferensi yebhulokhi, noma `N` ukuthola uhlu lwamabhulokhi ngesihlungo (khetha abaningi), noma `X` / {{key:Enter}} ukuqeda. Yonke ireferensi iyasuswa — kumodeli, kuwo wonke amashidi nangaphakathi kwamanye amabhulokhi — bese isichasiso, bese umugqa womyalo utshela ukuthi yini esusiwe nokuthi yini engakwazanga. Amabhulokhi angenamagama namadwala axhunyiwe awanikezwa. Umyalo uyabuya ebhulokhini elilandelayo; umyalo wonke uyinyathelo elilodwa lokuhlehlisa.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} inamathisela okukopishile ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) njengebhulokhi elilodwa: khetha iphoyinti lokufaka nesethulo esisodwa sebhulokhi elisha liya khona, sikhethiwe. Ibhulokhi linegama layo (`A$C` nenombolo); {{cmd:RENAME}} inikeza elakho. Inyathelo elilodwa lokuhlehlisa lisusa isethulo nebhulokhi.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} ibuza ibhulokhi elizoshintshwa nebhulokhi elizobekwa esikhundleni salo (`?` ibala amabhulokhi), bese ishintsha yonke ireferensi emodelini, kuwo wonke amashidi nangaphakathi kwamanye amabhulokhi. Ireferensi ngayinye igcina indawo yayo, isikali, ukujikeleza, ingqimba nezinani zezici amabhulokhi omabili anazo; izici ibhulokhi elisha kuphela elinazo ziqala ngezinani zazo ezizenzakalelayo, futhi ikutshela ukuthi yiziphi izinani ezilahliwe. Uma kungasasetshenziswa lutho ibhulokhi elidala, iyakunika ukuyisusa. Yenqaba imidwebo exhunyiwe nokushintshwa okuzofaka ibhulokhi ngaphakathi kwalo. Inyathelo elilodwa lokuhlehlisa.

### MINSERT

{{cmd:MINSERT}} ibeka ibhulokhi emigqeni namakholomu: igama lebhulokhi, iphoyinti lokufaka, isikali, ukujikeleza, inani lemigqa namakholomu, namabanga phakathi kwawo. Isethi yonke ijikeleza nokujikeleza. Ngayinye iyireferensi yayo, (ama-10,000 ngokuphezulu), ngakho ilowo nalowo ungahanjiswa noma asulwe ngemva kwalokho.

### BLOCKSPALETTE

Ama-alias: `BLOCKSPAL`; noma {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Ibonisa ipaneli ye-{{ui:Blocks}} nesikhombi esisehlungweni sayo. Ibhulokhi ngayinye inesithombe esincane; eyafakwa muva nje iyiphuma phambili. Izinkinobho ezimbili eduze kwesihlungo ziguqula phakathi kuhlu negridi yezithombe. Chofoza isithombe (noma i-{{ui:Insert}}) ukubeka ibhulokhi nge-{{cmd:INSERT}}, noma yidonse emdwebweni ukuze ibekwe lapho oyilahla khona.

{{ui:Libraries}}, ngaphansi kohlu: {{ui:Add a drawing}} ithatha ifayela le-DWG noma le-DXF lakho futhi ilanda amabhulokhi alo ngezithombe, nomdwebo wonke njengebhulokhi eyodwa. Ukubeka okukodwa kukopisha inkcazo yalo (namabhulokhi aphindeke kuwo nezingqimba zawo) kulo mdwebo, njengoba ukhetho lwe-`File` lwe-{{cmd:INSERT}} lwenza; ibhulokhi elisevele lilapha ngenkcazo efanayo lisetshenziswa ngaphandle kombuzo, owehlukile ngegama elifanayo ubuza {{ui:Keep existing}} noma {{ui:Rename}}. Esiphequluli ifayela lihlala kuze kuvale ikhasi. Ku-CadCraft Studio {{ui:Add a folder}} ilanda imidwebo efolda, ngayinye ivulwa uma uyichofoza, namafayela nezifolda ziyakhunjulwa. Ukhamba olumncane lususa umtapo ohlwini; ifayela alithintwa. I-{{ui:Library}} ejwayelekile yinto ehlukile: bona [Faka kusuka kufayela noma emtapweni](topic:insert-from-file-and-library).

### BCONVERT

Noma {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Ithola ijiyomethri ephindaphindayo iyiguqule yonke ikhophi ibe yireferensi yebhulokhi eyodwa.

- `Select the objects that repeat, or [Block]`: izinto zekhophi eyodwa. `B` iqamba ibhulokhi elikhona kunalokho, ukuthola amakhophi ahlukene ezinto zalo.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` no `P` ziguqula okubalwa njengekhophi; {{key:Enter}} iyasesha. Izilungiselelo ziyakhunjulwa.
- `Name for the new block <Block1>`, bese `Specify the block's base point` ({{key:Enter}} ithatha ikhona lesobunxele elingezansi kokukhethwa).
- Ibika ukuthi zingaki ezinye izethi zezinto ezinejiyomethri efanayo, ikhombisa konke okuzoshintshwa, bese ibuza `Yes/No`.

Ikhophi iyizinto ezifanayo ezinyakaziswe futhi zajikelezwa ngangaso noma yiyiphi i-engeli (futhi zibonakale ngesibonakude noma zishintshwe isikali ngesici esisodwa uma zivuliwe): into ngayinye kufanele ibe nencuphe yayo, ngaphakathi kwe-millionth yosayizi wokukhethwa. Ireferensi ngayinye ithola ukujikeleza nesikali sayo (eyibonakude inesikali sika-Y esingalungile), nengqimba izinto zayo zazo abayabelana ngayo. Izinto ezisezingqimbeni ezikhiyiwe ziyashiywa futhi zibalwe. Isesha esikhaleni esivulekile (imodeli noma ishidi elivulekile). Ukusesha okukhulu kakhulu kuyama emkhawulweni womsebenzi futhi kuyasho lokho. Inyathelo elilodwa lokuhlehlisa.

### BSEARCH

Noma {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: ingxenye yegama lebhulokhi, noma iphethini nge-`*` ne-`?`. Ibala ibhulokhi ngalinye nezethulo zalo lapha nasemdwebeni wonke.
- `A`: inani lesici, noma `TAG=value`. Ibala amabhulokhi ezethulo zawo ezinaso, ngamanani atholakele. Izici ezingaguquki ziyabalwa.
- `G`: khetha izinto, noma ireferensi eyodwa yebhulokhi, bese amabhulokhi okufanana nawo ngokungenani ngama-85% ayabalwa, eyona phezulu. Usayizi, ukujikeleza nokubonakudwa akubalwa. Isilinganiso siqhathanisa amabanga phakathi kwamaphoyinti ahlakazeke ezinkomeni, ngakho sithola okufanayo; sebenzisa {{cmd:BCONVERT}} ukuthola amakhophi ngokuphelele.

Izethulo ezitholakele esikhaleni esivulekile zikhethiwe, zilungele umyalo olandelayo.

### BREPLACE

Noma {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` ishintsha izethulo zamabhulokhi okukhethile ngebhulokhi olitshela; `A` ibuza ibhulokhi nokushintsha kwalo bese iguqula yonke ireferensi, njengoba {{cmd:BLOCKREPLACE}} yenza (ikhodi efanayo). Ireferensi igcina indawo yayo, isikali, ukujikeleza, ingqimba nezinani zezici amabhulokhi omabili anazo; izinani ibhulokhi elisha lingenaso indawo yazo ziyalahlwa futhi ziyabizwa. `?` ibala amabhulokhi. Inyathelo elilodwa lokuhlehlisa.

### DATAEXTRACTION

Ama-alias: `EATTEXT`, `DX`; noma {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Ibala amabhulokhi, izici zawo nezakhiwo zezinto njengethebula noma njengefayela le-CSV.

- Isebenza ngokukhethwa, noma ibuza `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` uma ukukhethwa kubamba kokubili. Amabhulokhi angenamagama, amathebula nezinkomba zezinto zokuthenga aze anganikwa.
- Iphrinta izikholomu ongakhetha kuzo (igama, uhlobo, ingqimba, X, Y, ukujikeleza, isikali, ubude, indawo, umbala, uhlobo lomugqa, isikhala, nesisodwa ngethegi ngayinye yesici), bese `Columns, by name or number with commas between`. {{key:Enter}} ithatha ezinkanyezini: igama nazo zonke izici zamabhulokhi; uhlobo, ingqimba nobude zezinto.
- `Put identical rows together with a count? [Yes/No] <Yes>`, bese `Put the list in a: [Table/Csv] <Table>`. Ithebula liyithebula ejwayelekile ({{cmd:TABLEDIT}} iyalihlela) futhi alisebenzi ngokuphilayo: phinda umyalo uma umdwebo ushintsha.
- Iyenqaba ikholomu elingekho ohlwini. Ithebula libamba imigqa yedatha engu-1,999; ifayela le-CSV libamba zonke.

### COUNTTABLE

Ibala izethulo zamabhulokhi zokukhethwa (noma zesikhala esivulekile) bese ifaka izinani ethebhulini (`Block`, `Count`) noma efayeleni le-CSV. Ukubala okulandela umdwebo ngokwako, bona {{cmd:BOMTABLE}}.

## Amashidi nokushicilela

### LAYOUT

Ama-alias: `LO`, `NEWLAYOUT`; noma inkinobho ye-{{ui:+}} ngaphansi komdwebo. Ishidi elisha linomngcele, ibhulokhi yesihloko kanye neviewport eyodwa, ku-ISO A3 (noma i-Tabloid yemidwebo ngamayintshi noma amafithi). Awukho imibuzo.

### MVIEW

Ama-alias: `MV`. Ishidi kuphela ({{cmd:VPORTS}} ishidi naleyo yenza okufanayo).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. I-viewport ibonisa imodeli yonke ngesikali esijwayelekile.
- `P` (Polygonal): chofoza amakhona womngcele (`Undo`, `Close`), {{key:Enter}} lapho ukuqeda. Yenqaba amakhona angaphansi kwamathathu.
- `O` (Object): `Select a closed object for the viewport's outline`: ipholilayini evaliwe, indilinga noma i-elipse ephepheni. I-viewport ithatha isimo sayo (amajika ahlanganiswa njengezingcezu ezimfushane zomugqa); into ihlala njengoba yayinjalo. Yenqaba into engavaliwe.

### VPCLIP

Isika i-viewport esevele ephepheni. `Select viewport to clip` (noma uyikhethele kuqala), bese `Select the object to clip to [Polygonal/Delete]`:

- Chofoza ipholilayini evaliwe, indilinga noma i-elipse, noma {{key:Enter}} (noma `P`) ukuchofoza amakhona wepholigoni.
- `D` (Delete, inikezwa uma i-viewport isikiwe) iyenza ibe yirektangele futhi: ibhokisi elizungeze umngcele ebewunawo.
- Okubonakalayo ku-viewport akuhambi ephepheni, nesikali sayo sihlala. Imodeli idwetshwa futhi ishicilelwe ngaphakathi komngcele kuphela, nomngcele ulandela. Inyathelo elilodwa lokuhlehlisa.
- I-viewport esikiwe inesibambi ekhoneni ngalinye lomngcele wayo, ngaphezu kwesikhungo sayo namakhona amane ebhokisi layo (ukuhudula ikhona lebhokisi kwelula umngcele nalo). Ithebhu ye-Properties ibonisa Outline: Rectangle, noma Clipped nenani lamakhona.
- Amafayela e-DWG ne-DXF 2000 agcina umngcele ngenxa ye-CadCraft. Ezinye izinhlelo zivula i-viewport njengerektangele elizungezile; i-DXF R12 igcina irektangele kuphela.
- Ethebhu yemodeli iyasho ukuthi ama-viewport akwamashidi.

### VPORTS

Ama-alias: `VIEWPORTS`. {{cmd:SPLIT}} iyafana nalapha kusuka ekshidini, futhi {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} zenza kanjalo. Kumodeli: `Enter number of panes [SIngle/2/3/4] <3>`; `2` ibuza `[Horizontal/Vertical] <Vertical>` (Vertical = ngakolunye nakolunye uhlangothi), `3` ibuza `[Left/Right] <Right>` (lapho iphaneli enkulu ihlala khona). Iphaneli ngayinye igcina ukubuka kwayo nesikhala sayo; ukuchofoza kwenza iphaneli isebenzayo. Kushidi kuyi-{{cmd:MVIEW}}. Bona [Hlukanisa isikrini](topic:split-screen).

### VPVIEW

Awukho ama-alias. Ishidi kuphela.

- `Select viewport` (iyadlulwa uma ikhethiwe), bese kumodeli: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Awukho ama-alias. Uhlelo lwamaphoyinti lwakho; akuwona ukuhlela. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: iphoyinti libe umsuka omusha, bese `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: umsuka, iphoyinti eleceleni elihle le-X, iphoyinti ohlangothini olumhle lwe-Y. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` negama. Ukubuka kuyajikeleza ukuze i-eksisi entsha ye-X ibe ngaphansi. Bona [Jikelezisa ukubuka usebenzise amaphoyinti akho](topic:ucs-and-turned-view).

### PLAN

Awukho ama-alias. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: ijikelezisa ukubuka kwephaneli esebenzayo ukuze i-eksisi ye-X ye-UCS (noma eyomhlaba) ibe ngaphansi. Akukho okunyakazayo emdwebweni.

### TURNLEFT, TURNRIGHT, TURNWORLD

Awukho ama-alias; noma {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Okufanayo kwe-`UCS Z -90`, `UCS Z 90` ne-`UCS W`, nokubuka kuyalandela.

### VPLAYER

Awukho ama-alias. Ishidi, noma ngaphakathi kwe-viewport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` zibuza amagama wezingqimba (ukhamba, `*` ne-`?` njengamasimu okusesha), bese `[All/Select/Current] <Current>` ama-viewport; Reset ibuyisela ingqimba ngayinye esimweni sayo sokuzenzela sokuqandisa ama-viewport amasha; `V` ibeka leso simo sokuzenzela (`[Frozen/Thawed]`), okusetshenziswa yi-{{cmd:MVIEW}}. `?` ibala izingqimba ezikhenywe kwi-viewport yamanje. Ikholomu ye-viewport yephaneli yezingqimba yenza okufanayo kwi-viewport eyodwa. Bona [Qandisa ingqimba kwi-viewport eyodwa](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Ama-alias: `MS`; noma chofoza kabili ngaphakathi kwe-viewport. Ishidi kuphela. Sebenza kumodeli nge-viewport: leyo ekhethiwe, eyodwa kuphela kushidi, noma `Click inside the viewport to work in`. Ukuhamba nokushintsha isikali ngaphakathi kushintsha ukubuka kwe-viewport (eyodwa egcinwe ngesikrini yona igcina kona futhi ishidi lihamba esikhundleni salokho); ukubuka okusha kubhalwa njengenyathelo elilodwa lokuhlehlisa. Bona [Sebenza kumodeli nge-viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Ama-alias: `PS`; noma chofoza kabili ngaphandle kwe-viewport, noma chofoza ithebhu ngaphansi komdwebo. Ibuyela ekshidini.

### PLOT

Ama-alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; noma {{key:Mod+P}}. Ivula ingxoxo ye-{{ui:Plot to PDF}}. Bona [Shicilela ku-PDF](topic:plot-pdf).

### PLOTSTYLES

Ama-alias: `STYLESMANAGER`, `PSTABLES`; noma {{ui:Edit tables…}} kwingxoxo ye-{{ui:Plot to PDF}}. Ivula i-{{ui:Plot style tables}}: umbala ngamunye usho ukuthi ushicilelwa njani (umbala, igrey, inki, ububanzi bomugqa), ugcinwe nomdwebo. Bona [Amathebula esitayela sokushicilela](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} ihambisa izinto phakathi kweshidi nemodeli nge-viewport, zishintshwe isikali futhi zijikelezwe ukuze zibukeke zifana zivela ngakolunye uhlangothi. Ekshidini, khetha izinto zihamba zibe emodelini (khetha i-viewport uma ishidi linengaphezu kwelilodwa). Uma usebenza kumodeli nge-viewport ({{cmd:MSPACE}}), izinto ezikhethiwe ziza ekshidini. Iyasho ukuthi zibe kangakanani ezinkulu noma ezincane. Ama-viewport ahlala ekshidini lawo. Inyathelo elilodwa lokuhlehlisa.

### ISODRAFT

{{cmd:ISODRAFT}} ivula noma ivala ukudweba kwe-isometric `ON` noma `OFF`, noma ifaka ngqo endizeni `Left`, `Top` noma `Right`. Uma ivuliwe: i-Ortho ({{key:F8}}) igcina imigqa ku-eksisi ezimbili zendiza (kwesobunxele: 90° no-150°; phezulu: 30° no-150°; kwesokunene: 30° no-90°), i-polar tracking ({{key:F10}}) ilandela ama-eksisi afanayo, i-snap to grid ({{key:F9}}) isebenzisa igridi ye-isometric, negridi ({{key:F7}}) idwetshwa ngemigqa ye-30°, 90° no-150°. Ihlelo lika-{{cmd:ELLIPSE}} lithola `Isocircle`: nikeza isikhungo nerediyasi (noma `Diameter`) bese idweba i-elipse indilinga ebonakala ngayo endizeni yamanje. Umdwebo uhlala uyindiza: lezi zisiza ukudweba umbono wesithombe, hhayi imodeli ye-3D. Isilungiselelo sesesheni yalo kuphela futhi asigcinwa efayeleni.

### ISOPLANE

{{cmd:ISOPLANE}} ikhetha indiza ukudweba kwe-isometric okusebenza kuyo: `Left`, `Top` noma `Right`. Enter iya endizeni elandelayo. Uma ukudweba kwe-isometric kuvuliwe, {{key:F5}} yenza okufanayo phakathi komyalo; uma kuvaliwe, {{key:F5}} ishiywa isiphequluli.

## Imibuzo

### CAL

Iphrinta inani lokubalwa, njengoba lifundeka noma yikuphi lapho ubude bufakwa khona.

- `Expression`: thayipha, isibonelo `12'6"+3/4"` noma `(24'-0")/3`, bese ucindezela {{key:Enter}}. I-CadCraft iphrinta `= 12'-6 3/4"   (150.75 drawing units)`. Bona [Ukubalwa okuphathelene nenani elithayiphiwe](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Ama-alias: `DI`; noma {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`, `Specify second point`. Iphrinta ibanga, i-engeli, i-Delta X ne-Delta Y.

### AREA

Ama-alias: `AA`; noma {{ui:View}} › {{ui:More}} › {{ui:Area}}. Iphrinta indawo nomjikelezo.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Chofoza noma uthayiphe amakhona; ku-`Specify next point (Enter closes) [Undo]` cindezela {{key:Enter}} ukuvala umugqa wangaphandle. `U` ihlehlisa ikhona lokugcina.
  - {{key:Enter}} noma `O`, bese `Select object`: indilinga (iphrinta umjikelezo wayo), i-elipse, ipholilayini (evulekile ivalwa umugqa oqondile ngenjongo yendawo, futhi ubude bayo buyaphrintwa) noma i-hatch (izimbobo ziyasuswa).
  - `A` (Add area) ne-`S` (Subtract area) zigcina isamba esiqhubekayo: isicelo siqala nge-`(ADD mode)` noma `(SUBTRACT mode)`, indawo ngayinye iyengezwa noma isuswe, bese `Total area = …` iphrintwa ngemva kwayo ngayinye. Kulezi zimo `O` ikhetha izinto kuze kube yilapho {{key:Enter}}, futhi {{key:Enter}} esicelweni sokuqala iyaphelisa umyalo.

### MEASUREGEOM

Ama-alias: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; ngemva kokulinganisa ngakunye ibuza futhi, nge-`eXit` njengokuzenzakalela.

`Quick` ilinganisa maduze nesikhombi njengoba usihambisa: ibanga lento eseduze kakhulu ngakwesokudla, phezulu, ngakwesobunxele nangaphansi (ngamaeksisi e-UCS yamanje), eludweni njengoba uhamba, nengeli lapho zimbili zalezo zikhelwane zigxilile futhi zihlangana. Ukuchofoza kubhala amabanga amane, ububanzi nobude obucacile nezingeli emlandweni; {{key:Enter}} ibuyela ezinketho. Ifunda okukusikrini.

- `D`: amaphoyinti amabili, njengakwi-{{cmd:DIST}}.
- `R`: `Select arc or circle`; iphrinta irediyasi nedayamitha.
- `A`: i-arc (engeli yayo ehlanganisiwe), umugqa bese kuba umugqa wesibili (i-engeli phakathi kwawo, ngakolunye lwezindawo ezikude), noma {{key:Enter}} namaphoyinti amathathu (isiqongo, bese amaphethelo amabili).
- `AR`: njengakwi-{{cmd:AREA}}, indawo eyodwa.

### ID

Awukho ama-alias. `Specify point`; iphrinta i-X ne-Y yalo.

### LIST

Ama-alias: `LI`, `LS`. `Select objects`; iphrinta uhlobo lwento ngayinye, ingqimba nezilinganiso zayo eziyinhloko.

### MASSPROP

{{cmd:MASSPROP}} inikeza izakhiwo zesigaba zezifunda nezinto ezivaliwe ozikhethile, zithathwe ndawonye: indawo, umjikelezo, ibhokisi elibamba, i-centroid, izinkonzo zokuhamba ngokuzungeza ama-eksisi e-X ne-Y ngokudlula kumsuka, umkhiqizo wokuhamba, izinhlamvu zokuphathwa, izinkonzo ezifanayo ngokuzungeza i-centroid, nezinkonzo eziyinhloko nezikhombisa zama-eksisi azo. Izimbobo ezisesifundeni zibalwa njengezimbobo. Izibalo zisemayunithini womdwebo futhi zinembile lapho amakhonco akhiwe ngemigqa namansalo; ama-elipse nama-spline alinganiswa njengezingcezu ezimfushane zomugqa, futhi ikusho lokho. Ngemva kombiko ibuza ukuthi ufuna ukuyibhala efayeleni lombhalo. Izinto ezingavaliwe ziyashiywa, futhi kuyasho ukuthi zingaki.

## Ukubuka, ifayela nokunye

### ZOOM

Ama-alias: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Chofoza amakhona amabili ewindi. `E`, `A` noma Enter: umdwebo wonke.
- `P` (Previous, noma {{ui:Previous}} kwibha yamathuluzi) ibuyela ekubukeni okwedlule, kuze kufike ku-10 ukubuka ithebhu ngayinye; uchungechunge lwezinyathelo zevili noma enye ukuhamba kubalwa njengokubuka okukodwa.
- Inombolo efana ne-`2`, `2x` noma `0.5x` (noma `S` bese inombolo) isondeza noma ikhulise ngalelo sici emaphakathi kwesikrini.
- `C` ibuza `Specify center point` ne-`Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT and the PDF commands

Ama-alias: `PDFATT` ye-{{cmd:PDFATTACH}}, `PDFIM` ye-{{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} ibeka ikhasi le-PDF ngaphansi komdwebo (ifayela, ikhasi, iphoyinti lokufaka, isikali, ukujikeleza); {{cmd:PDFIMPORT}} iguqula imigqa, amajika, ukugcwaliswa nombhalo wekhasi ibe izinto zomdwebo ezingqimbeni ezibizwa ngegama le-PDF, ngosayizi wangempela, ngesikali esibhalwe, noma ishintshwe isikali kusukela ezindaweni ezimbili nebanga langempela. I-{{cmd:PDFCLIP}} isika ingaphansi, i-{{cmd:PDFADJUST}} ibeka ukufiphala, ukuqhathanisa, ukumnyama nokumhlophe noma iyavala, i-{{cmd:PDFLAYERS}} ishintsha izingqimba ze-PDF, futhi i-{{cmd:PDF}} inikeza i-CadCraft amafayela ezingaphansi zomdwebo asebenzisa futhi. Bona [Izingaphansi ze-PDF](topic:pdf-underlay).

### AUTOCOMPLETE

I-alias: `AUTOC`. Ukugcwalisa okuzenzakalelayo komdwebo: lapho akukho myalo osebenza, isithunzi esingu-grey sibonisa ukuthi amaphethini omdwebo wakho athi yini elandelayo. {{cmd:AUTOCOMPLETE}} ilivula `On` noma ilivala `Off` (futhi Settings › CadCraft) noma `Show`s ukuthi lizophakamisa yini manje. **Tab** idweba isithunzi njengenyathelo elilodwa lokuhlehlisa, **Esc** iyasicasula kuze kushintshe umdwebo. Ithola izinto ezintathu ezintsha kakhulu: ikhophi elandelayo yento edwetshwe kabili noma ngaphezulu ngesinyathelo esilinganayo (izinduku, amakholomu, i-riser nethread yesitebhisi), izinyathelo elilandelayo lepholilayini yesitebhisi, nohlangothi olusilelayo lwegumbi noma uchungechunge lwenamacala. Phakathi kwe-{{cmd:LINE}} noma {{cmd:PLINE}} isithunzi siyiphoyinti elilandelayo: inyathelo elilandelayo lesitebhisi (i-riser, i-tread, i-riser…), ikhona lesine lerektangele, iphoyinti elilivalayo, noma esinye isinyathelo esilinganayo. Yisa isikhombi eduze kwalo bese ucindezela **Tab**, njengokuthi uchofoze khona; qhubeka noma cindezela Enter. Kusetshenziswa kulo khompyutha ngemithetho, akukho imodeli.

### AUTOSHEET

I-alias: `ASH`. Amashidi azilungiselela wona. {{cmd:AUTOSHEET}} ithatha izingxenye zomdwebo (imibono yakho eqanjiwe, noma izingxenye ezihlukene zemodeli, noma yonke imodeli), ikhetha usayizi wephepha (noma eyinikezayo), inikeza ingxenye ngayinye isikali esijwayelekile (isikali esisodwa sonke, noma eyona enkulu ingayithatha), bese ibeka imibono ngemigqa emishini emisha enebhulokhi yesihloko nesihloko (igama nesikali) ngaphansi kwayo ngayinye. Okungafaki eshidini elilodwa kuthola ishidi lalo. Inyathelo elilodwa lokuhlehlisa. Kusetshenziswa kulo khompyutha ngemithetho, akukho imodeli.

### PHOTOSKETCH

I-alias: `PSK`. Isithombe sokudweba sibe yijiyomethri yomdwebo. Khetha isithombe (JPEG, PNG noma TIFF) somdwebo wesandla ephepheni. {{cmd:PHOTOSKETCH}} ithola amakhona amane ephepha, ilungise umbono, ithatha usayizi wephepha olitshela (`Paper`, noma ophelele eduze kakhulu) nesikali sokudweba (1 : n), bese ilandela imigqa yepeni ibe imigqa, amansalo nezindilinga, ingqimba ngombala ngamunye wepeni (black, red, blue, green). Uma kungatholakali umphetho wephepha, ithatha isithombe sonke njengeshidi futhi iyasho lokho. Okulotshiwe kuyashiywa. Inyathelo elilodwa lokuhlehlisa. Kwenziwa kule kompyutha ngokucubungula izithombe okungokwesiko, akukho modeli, akukho okuthunyelwa noma yiphi indawo. Bona futhi imiyalo yomdwebo oskeniwe.

### AUTODIM

I-alias: `ADIM`. Ukulinganisa okuzenzakalelayo ngemithetho. {{cmd:AUTODIM}} ilinganisa izinto ezikhethiwe (noma umdwebo wonke) ngezinga lazo nemiphetho eqondile: ukulandelana kwezilinganiso ezinhlangothini ozikhethile (`Sides`), isilinganiso esisodwa esiphelele ngaphandle kwazo, ububanzi bokuvulwa ngakunye (igebe phakathi komigqa yodonga elihlanganisiwe), idayamitha yosayizi ngamunye wesimbobo, nokuthi `Grid` ibanga phakathi kwemigqa yegridi. Isilinganiso esikhona kakade asisenziwa futhi. Inyathelo elilodwa lokuhlehlisa. Kusetshenziswa kulo khompyutha ngemithetho, akukho modeli.

### GRIDMOVE

I-alias: `GM`. Ukuhamba komugqa wegridi kuthwala isethi. {{cmd:GRIDMOVE}} ihambisa umugqa wegridi (umugqa ongqimbeni enegama elithi grid noma axis) nalokho okuwuxhomele: izindonga ezinesiphetho emugqeni ziyelula zilandele, izindonga ezihamba nawo ziyahamba ngokuphelele, amakholomu (izethulo zamabhulokhi nezindilinga emugqeni), ibhamuza nethegi yawo ayahamba, nezilinganiso ezinamaphoyinti ayo emugqeni zilinganisa ibanga elisha. Nikeza amaphoyinti amabili (kubalwa ingxenye ephuma emugqeni kuphela) noma `Distance`. Inyathelo elilodwa lokuhlehlisa liphindisela konke. Kwenziwa ngemithetho kule kompyutha.

### DETAILS

I-alias: `DET`. Imininingwane ethola wena. {{cmd:DETAILS}} igcina imininingwane yenkampani yakho: `Add` ibeka ibhulokhi yalo mdwebo ohlwini, `List` ne-`Remove` ziphatha lona, `Find` ilinganisa izinto ngokukhethwa (noma ngalokho okudwetshe kugcina) ngamagama ezingqimbeni zazo, amagama amabhulokhi, amaphethiini ye-hatch nezinkomba ngokumelene negama nezinkomba zomininingwane ngayinye, ukuze i-window head ithole i-sill flashing yakho. Khetha inombolo nephoyinti ukuze uyibeke. Ngo-`Hint` ivuliwe (futhi Settings › CadCraft), ukukhetha into eyiqhathanisayo nemininingwane kubeka umugqa owodwa kubha yesimo. Uhlu lugcinwa kulesi siphequluli, kule kompyutha, futhi lolo luhlu yilona olusesha. `Share` iyilethe nakufolda yakho yamadokhumenti futhi (`.cadcraft/firm-details.json`, nomdwebo wombhalo ngamunye webhulokhi): `Pull` yengeza lokho iqembu lakho elinakho nawe ungakunaki, `Push` yengeza lokho onakho abangakunaki, `Both` yenza kokubili, futhi akukho okususwa kuzo zombili izinhlangothi. Qala uvule ifolda yamadokhumenti ({{cmd:DOCUMENTS}}); uma leyo folda iyifolda ye-Team Cloud Plan, iqembu lonke lisebenzisa uhlu olulodwa. Into yemininingwane kwipaneli yoMtapo inqamu le-**Add to my firm's details** elibeka kulolo luhlu olufanayo. Kwenziwa kule kompyutha ngamagama, akukho modeli.

### SKETCHFIX

I-alias: `SKF`. Imidwebo yepeni ibe ijiyomethri echanekile. Cindezela uhudule isiteroko esisodwa sokuzikhetha ngakunye (ipeni, imausi noma umunwe), bese Enter. Isiteroko ngasinye sifundwa njengomugqa, indilinga, i-arc, irektangele noma ipholilayini: imigqa esondele ezindaweni ezilinganayo nezimile yenziwa ilingane ngempela futhi imile, indilinga evaliwe ejikelezayo iba indilinga, isiteroko esivaliwe esinamakhona ane aqondile irektangele, nemiphetho yezisteroko ihlanganiswa futhi iphakanyiswe ibe emaphethelweni asekhona kumdwebo. Inyathelo elilodwa lokuhlehlisa. Kwenziwa kule kompyutha ngemithetho, akukho modeli.

### SCANATTACH and the scanned-drawing commands

Ama-alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} ayinalo. Zisebenza esithombeni, inyathelo elilodwa lokuhlehlisa ngalinye. {{cmd:SCANATTACH}} ifaka i-PNG, i-JPEG, i-TIFF (ikhasi elilodwa noma wonke) noma ikhasi le-PDF elingesithombe. {{cmd:SCANSCALE}} ishintsha isikali seshidi kusukela emaphoyinteni amabili akhethiwe nebanga langempela. {{cmd:SCANALIGN}} ihambisa futhi ijikeleze lona ukuze lilingane namaphoyinti amabili (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} ibonisa i-engeli yemigqa emide yeshidi futhi ijikeleza ishidi kanye uma uthi `Accept` noma unikeza `Value`. {{cmd:SCANCLEAN}} imenza mnyama nomhlophe (`Threshold` Auto/Adaptive/Level, `Specks`) bese `Run`. {{cmd:SCANCROP}} igcina iwindi. {{cmd:SCANERASE}} isula `Rectangle`, `Polygon` noma `Lasso`. {{cmd:SCANTRACE}} ilandela imigqa namansalo ibe ingqimba entsha (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) futhi ibika lokho ebeyitholile nalokho eyishiye njenge-raster. {{cmd:SCANINFO}} ibala ifayela lokuqala nezinyathelo. {{cmd:RASTERSNAP}} ivula noma ivala ukubamba imigqa yamashidi askeniwe. Bona isihloko esithi Imidwebo eskeniwe nokulandelwa.

### REGEN and REGENALL

Ama-alias: `RE` ye-{{cmd:REGEN}}, `REA` ye-{{cmd:REGENALL}}. Yakha kabusha okudweshwe esikrinini kusukela emdwebweni: {{cmd:REGEN}} ithebhu olibukayo (ekshidini, imodeli ama-viewport alo nawo abonisa nawo), {{cmd:REGENALL}} onke amathebhu, zonke izimpaneli zesikrini ezihlukaniswe, nemidwebo yonke evuliwe. Zisebenzise uma isithombe sibonakala sidala ngemva kokushintsha okukhulu okubhalwe ngomhlahlandlela noma okungokwamasu, noma umsizi ehlele umdwebo; umdwebo ngokwawo awuthintwa, ngakho akukho okuzohlehliswa.

### NAMEDVIEW

Ama-alias: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, bese igama lokubuka. `S` igcina ukubuka okusesikrinini, `W` iwindi oliKhethile, `R` ibonisa ukubuka okugciniwe, `D` isula okukodwa, `?` ibala izibuko zalelo thebhu. Ukugcina ngegama elikhona kuyalishintsha; ngalinye ushintsho yinyathelo elilodwa lokuhlehlisa. Ukubuka kuyabelwa ithebhu ngayinye egcinwe kuyo. Amafayela e-DWG ne-DXF ayagcina (ithebula le-VIEW); izibuko zeshidi ziyabuya ekshidini lokuqala, ngoba ifayela alisho ukuthi yiliphi.

### UNDO and REDO

Ama-alias: `U` ye-{{cmd:UNDO}}; i-{{cmd:REDO}} ayinalo. Futhi {{key:Mod+Z}} no {{key:Mod+Y}}.

### LAYER

Ama-alias: `LA`. Ikuyisa ku-{{ui:Layers}} ipaneli.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` noma igama (`?` ibala: Continuous, okwomdwebo, nama-DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE nosayizi wabo `2` (uhhafu) no `X2` (kabili)). {{cmd:LWEIGHT}} (`LW`): ububanzi bomugqa wezinto ezintsha ngo-mm, noma `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): isikali sohlobo lomugqa womdwebo (siyahlehlisheka). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — okufanayo nenkinobho ye-{{ui:LWT}} kwibha yesimo. Bona [Ububanzi bomugqa nohlobo lomugqa](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, bese igama elisha; izinto noma izethulo ziyalandela. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` kuze kube yilapho {{key:Enter}}, bese `Select object on target layer or [Name]` kanye ne-`Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, bese `Y`: ingqimba kanye nakho konke okuyo kuyanyamalala (hhayi ingqimba 0, DEFPOINTS noma ingqimba yamanje). Inyathelo elilodwa lokuhlehlisa ngalinye. Bona [Hlela umdwebo ngezingqimba](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Izingqimba ngokukhetha izinto; futhi kwi-{{ui:Tools}} menu yephaneli ye-{{ui:Layers}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, bese {{key:Enter}}: zonke ezinye izingqimba zicimwa. {{cmd:LAYUNISO}} iyazivula zibuye. {{cmd:LAYOFF}} ne-{{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (noma efriziwe), njalo nje; `U` ihlehlisa okokugcina, {{key:Enter}} iyaphela. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} ivula zonke izingqimba, {{cmd:LAYTHW}} inyibilikisa zonke izingqimba. Umyalo ngamunye yinyathelo elilodwa lokuhlehlisa. Bona [Hlela umdwebo ngezingqimba](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} iqala umdwebo oyize futhi {{cmd:OPEN}} ivula i-DWG noma i-DXF, ngayinye ethebhini layo phezu komdwebo (umdwebo omusha ongakahlelwa usetshenziswa esikhundleni sethebhu entsha). Ukuvala ithebhu enezinguquko ezingalondolozwanga kubuza kuqala. Bona [Hlukanisa isikrini](topic:split-screen).

{{cmd:SAVE}} (i-alias `QSAVE`, nango {{key:Mod+S}}) ilanda ikhophi ngefomethi yomdwebo: i-DWG uma kuvulwe kwi-DWG, i-DXF uma kuvulwe kwi-DXF. Umdwebo omusha usebenzisa ifomethi okukhethwe ekugcineni ku-Save as kulesi siphequluli, kungenjalo i-DWG.

{{cmd:SAVEAS}} (futhi {{key:Mod+Shift+S}}) ivula ingxoxo ye-{{ui:Save a copy as}}: khetha {{ui:DWG}} (nenguqulo yayo, {{ui:Version}}), {{ui:DXF R12}} noma {{ui:DXF 2000}}, bese {{ui:Save}}. Ukukhetha kuyahlala kulo mdwebo nakumidwebo emisha kulesi siphequluli.

{{cmd:DXFOUT}} ilanda ikhophi ye-DXF R12 njalo, ingashintshi ifomethi {{cmd:SAVE}} isebenzisa.

Bona [Amafayela: avulekayo, alondolozekayo](topic:files#saving).

### TOUR

Ama-alias: `TUTORIAL`. Iqala uhambo lwezinyathelo eziyisithupha lomdwebo wokuqala futhi. Bona [Ukuqala](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Ama-alias: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Bona [Izilungiselelo](topic:settings#toolbar-position).

### COMMANDLINE

Ama-alias: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: ifaka noma ikhulula umugqa womyalo, uwenza mugqa owodwa, ibuza imigqa emingaki yomlando oyibonisayo (0 kuya ku-12), noma ivula umlando. Bona [Izilungiselelo](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: amabha phezu komdwebo njengoba ayenjalo, noma akhanyisiwe. Bona [Izilungiselelo](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: isinyathelo i-{{ui:Polar}} yokulandela kuso imigqa (ngaphezu kwe-0, kuya ku-180). Igcinwa kulesi siphequluli.

### UNITS

Ama-alias: `UN`. Indlela amabanga abhalwa ngayo nathayipha ngayo.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural ne-Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Ezinye: `Enter number of decimal places (0 to 8)`.

Izilinganiso ezintsha zilandela lokho. Inyathelo elilodwa lokuhlehlisa. Njengo-{{ui:Length format}} ne-{{ui:Precision}} kwi-{{ui:Current settings}}; bona [Amafidi namadayimane](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Ama-alias: `GDS`. Buka ukuhlelwa kwe-IC (ifayela le-GDSII stream): i-spike yelabhorethri, ukubuka nokulinganisa kuphela.

- Isikhethi sefayela sithatha ifayela le-`.gds`; uma kunamaseli amaningi aphezulu, `Enter the top cell to draw`.
- Yonke ingqimba nohlobo lwedatha iba ingqimba yomdwebo (`GDS 1`, `GDS 2/5`), izinkomba namalungu zibekwa zibe bhodwe, ngeyunithi yomsebenzisi yefayela (ngokuvamile ma-micrometre). Inyathelo elilodwa lokuhlehlisa. Akukho okulingiswayo noma okuhlolwayo, nefayela alibhalwa futhi.

### DIAGRAM

Ama-alias: `TEXTDIAGRAM`, `T2D`. Idayagremu evela kumbhalo.

- Ibhokisi lithatha umbhalo (noma umugqa owodwa nge-`;` phakathi kwezitatimende kumugqa womyalo): i-Mermaid flowchart, idayagremu yengxenye ye-PlantUML, D2 noma uhlu lokusuka-kuya.
- `Specify the top left corner of the diagram`, bese `Specify the text height`.

Izinto nezixhumanisi zizinto ezijwayelekile ngqingqeni ethi `Diagram`, zikhethwa lapho kuphela. Inyathelo elilodwa lokuhlehlisa. Bona [Dweba idayagremu kusuka kumbhalo](topic:text-to-diagram).

### OLELIST

Ama-alias: `OLES`. Izinto ze-OLE e-DWG ethwele zona i-CadCraft engazibeka yona.

- Ibala ngayinye: inombolo, uhlobo, usayizi, noma igcine isithombe.
- `Enter an option [Place/eXit] <eXit>`: Place ibuza inombolo, ikhona lesobunxele elingezansi nobubanzi, bese idweba uhlaka nesithombe. Inyathelo elilodwa lokuhlehlisa; into egciniwe ayishintshwa. Bona [Izithombe](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Ama-alias: `SHX`. Amafonti akho e-SHX.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} ifunda i-`.shx` ngayinye efolda (CadCraft Studio; futhi ekuqaleni ngakunye), {{ui:Files}} ithatha amafayela akhethiwe (isiphequluli), {{ui:Reverse}} ibeka izinhlamvu zefonti eyodwa ngokuphambene, okokugcina kuqala. Izitayela zombhalo ezibiza ifonti elayishiwe zidweba ngayo. Bona [Dweba umbhalo ngamafonti akho e-SHX](topic:shx-fonts).

### LIMITS

Umdwebo kufanele ube mkhulu kangakanani.

- `Specify lower left corner or [ON/OFF] <current>`: iphoyinti, `ON` noma `OFF`.
- `Specify upper right corner <current>`.

Igridi igcwalisa imikhawulo, {{cmd:ZOOM}} All iyabakhombisa, futhi nge-ON ephoyinti elingaphandle liyenqatshwa (`**Outside limits`). Inyathelo elilodwa lokuhlehlisa; igcinwa ku-DWG ne-DXF. Bona [Setha imikhawulo yomdwebo](topic:drawing-limits).

### AUNITS

Ama-alias: `ANGUNITS`. Indlela izingeli ezibonakala ngayo nethayipha ngayo.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, noma ezimbili ezinye `Enter precision` (0 amadigri, 2 amaminithi, 4 amasekhondi, 5 kuya ku-8 wamadesimali amasekhondi).

Inyathelo elilodwa lokuhlehlisa; igcinwa ku-DWG ne-DXF. Njengo-{{ui:Angle format}} kwi-{{ui:Current settings}}. Bona [Thayipha nibonise izinkomba nezingeli](topic:bearings-and-angles).

### APPLOAD

Ama-alias: `AP`; noma {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. Ingxoxo ye-{{ui:Load applications}}: layisha izinhlelo ze-`.lsp` nemifayela yengxoxo ye-`.dcl`, zikhiphe, uzilayishe futhi emlandweni, nalo Ihlelo lokuqala. Imisebenzi ye-`(defun c:NAME …)` yesinhlelo isisebenza njengayo yonke enye imiyalo. Bona [Layisha izinhlelo](topic:load-applications) no [Qalisa imisebenzi ye-LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (noma {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) ivula ifayela lakho lama-alias (imigqa `ALIAS, *COMMAND`); {{ui:Save}} iyasebenzisa. {{cmd:REINIT}} iyasebenzisa futhi. Bona [Hlela ama-alias emyalweni](topic:command-aliases).

### LISPEDIT

Ama-alias: `VLIDE`; noma {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Ivula umhleli we-LISP, iwindi elihlala livuliwe eduze komdwebo.

- Umbhalo: izinombolo zemigqa, owayo ibhulaketi elisemgqeni wesikhombi limakwe (libomvu uma lingenalo), {{key:Enter}} ifaka umugqa omusha ngaphansi kwebhulaketi elivulekile, {{key:Tab}} ithayipha izikhala ezimbili, {{key:Esc}} ishiya umbhalo.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): ifunda zonke izakhiwo, njengoba {{cmd:APPLOAD}} yenza ngefayela, bese yenza imiyalo yayo `c:`. Ifayela libonakala ohlwini lwe-{{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): ihlola izakhiwo ezikhethiwe, noma isakhiwo okuqukethe kuso isikhombi.
- {{ui:Stop}}: iyeka uhlelo olusebenza.
- {{ui:Console}}: okuphrintwe uhlelo, nephutha ngalinye nomugqa walo; chofoza iphutha ukuze uye kulo. Umbhalo uyasebenza isakhiwo esisodwa esiphezulu ngesikhathi, ngakho umugqa uwumugqa wesakhiwo, noma ngaphakathi kwaso umugqa obiza umsebenzi iphutha elibiza igama lawo.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): ifayela le-`.lsp`. Umbhalo nawo ugcinwa kulesi siphequluli, ngakho ukuvala iwindi akulahlwa.
- Ngasembhalweni: imisebenzi uhlelo olukuchazayo, leyo elibiza engakaze ibe khona kule LISP, leyo elibiza engachazwanga kuyo futhi engakhiwe ngaphakathi, nohlu oluphelele lwalokho okwakhiwe nalokho okungakakhiwa.

Umbhalo onebhulaketi elingakaze livalwe, noma inkamba engakaze iphele, awusebenzi: umugqa uyabizwa ngegama. Akukho i-debugger yesinyathelo ngesinyathelo, amabhrekhpoyinti noma iwindi lokubuka. Bona [Qalisa uhlelo lwe-LISP](topic:run-lisp).

### HELP

Ama-alias: `?`. Iphrinta yonke imiyalo, ama-alias ayo nencazelo emugqeni owodwa emlandweni womugqa womyalo. Ayivuli lo usizo: cindezela {{key:F1}} noma chofoza {{ui:Help}} ukuze ukwenze lokho.

## Isicelo sokukhetha izinto

Kunoma yisiphi isicelo se-`Select objects`: chofoza izinto, dweba amawindi (kwesobunxele kuya kwesokunene) nezindlela ezidlula (kwesokunene kuya kwesobunxele) ngokuchofoza kabili, noma cindezela uhudule i-lasso ({{key:Space}} ngenkathi uhudula: iwindi, indlela edlula, ifensi), {{key:Shift}}+chofoza ukususa, bese ucindezela {{key:Enter}} ukuqeda. Ungathayipha futhi `ALL` (konke), `L` (into yokugcina), `P` (Previous: okusetshenziswe yimyalo wokugcina), `F` (Fence: izinto umugqa wamaphoyinti odlula kuwo; `U` ihlehlisa iphoyinti), `W` (Window), `C` (Crossing), `R` (Remove mode: ukukhetha kususa izinto; isicelo sifunda `Remove objects`) no `A` (Add again). `?` ibala zona. Azibonakali esicelweni. {{key:Tab}} ngaphezu kwezinto ezihlanganayo iqaqa into elandelayo; chofoza ukuyikhetha. Bona [Khetha izinto](topic:select-objects).

### ACCESS

I-alias: `AX`. Ukudweba ngaphandle kokubona. {{cmd:ACCESS}} ivula noma ivala i-Access (`On`, `Off`) futhi iguqula imisindo yokubamba (`Sound`) nemiyalo yezwi (`Voice`); iyasho isimo kuqala. Lapho i-Access ivuliwe, yonke imiyalo nemiphumela ikhulunywa ngesisebenzi sesikrini futhi indawo yomdwebo inesikhombi sekhibhodi. Isihloko sosizo esithi "Draft without sight" sinezinkinobho.

### DESCRIBE

I-alias: `DESC`. Tshela ukuthi umdwebo unani: izinto ezingaki, zohlobo luni, zikhulu kangakanani, izingqimba ezingaki, okukhethiwe. Ifunda kuphela; ayishintshi lutho.

### WHEREAMI

I-alias: `WHERE`. Tshela ukuthi isikhombi siphi, ngamayunithi omdwebo.

### NEARBY

Tshela okuseduze kwesikhombi, okuseduze kakhulu kuqala, ngakunye nebanga lakho nohlangothi olukuso.

### SAYSEL

Tshela okukhethiwe, isigwebo esisodwa ngento ngayinye (ubude womugqa, amaphethelo nengeli; ububanzi besikhungo sendilinga; umbhalo njengoba ubhalwe).

### VOICE

Vula noma uvale imiyalo ekhulunywayo. Iyaziwa kule kompyutha; lapho isiphequluli singenza lokho, izwi lihlala livaliwe ngaphandle uma ukhetha isevisi ye-inthanethi yesiphequluli kuma-Settings.

### TOUCHCROSSHAIR

I-alias: `TCX`. Ikhosi ephambukile yokudweba ngomunwe, ukuze ithipha yomunwe ingamboziwe iphoyinti okhetha lona. Lapho ivuliwe, umunwe oyodwa ohlangothini lomdwebo awukhethi: uhambisa ikhosi ehlala phezu komunwe nasohlangothini oluthile. Okulandelwa yizinto nokuzingela kulandela ikhosi. Ukuphakamisa umunwe akukhethi lutho futhi kushiya ikhosi lapho ikhona. Ukuze ukhethe, cindezela inkinobho ye-{{ui:Click}} ekhoneni lomdwebo, noma thinta noma yiphi indawo ohlangothini ngomunwe wesibili. Bamba i-{{ui:Click}} ngenkathi uhambisa omunye umunwe ukuze uhudule (iwindi lokukhetha, i-lasso, i-grip). Umunwe obanjwe ukhona, noma inkinobho ye-{{ui:Enter}}, ibe yi-Enter. Iminwe emibili iyahamba futhi isondeze njengakuqala. Eduze komphetho ophansi nomphetho ohlangothini olude, ikhosi iyasondela emunweni, ukuze zonke izingxenye zomdwebo zifinyeleleke. Ipeni nemausi bahlala bekhetha ngqo.

{{cmd:TOUCHCROSSHAIR}} itshela isimo bese ibuza `ON`, `OFF`, `Auto` (ivulwa kuphela lapho umunwe uyisikhombi esisodwa, ngakho ivaliwe kukhompyutha enemausi), `Distance` (ikhosi ihlezi kangakanani kusuka emunweni, ama-pixel angu-24 kuya kwangu-240) noma `Side` (`Left`: phezulu nakwesobunxele, ngesandla sokunene; `Right` ngesandla sokhohlo; izinkinobho zihamba ziye kwenye ikhona). Okukhethwa okufanayo kusezilungiselelweni ze-CadCraft, nakudivayisi enesikrini esithintekayo ibha yesimo inaswishi ye-{{ui:Offset crosshair}}. Okukhethiwe kugcinwa kulesi siphequluli.

### WHOHAS

Itshela ukuthi ubani oyidwebele umdwebo ovulekile. Ku-CadCraft Studio kukhompyutha, ukuvula i-DWG noma i-DXF kubhala ifayela elincane lokukhiya ngaphansi kwayo (`Plan.dwg.cclock`: ubani, kusukela nini, yiyiphi inguqulo), luvuselele njalo umzuzu ngamunye lapho umdwebo uvuliwe, futhi luyasusa lapho umdwebo uvalwa. Ukuvula umdwebo umuntu omunye akuvulile kutshela ukuthi ngubani nokusukela nini, bese kunikeza {{ui:Open read-only}} (Save bese icela igama elisha), {{ui:Open anyway}} (omunye umuntu utshelwa ngokuvuselelwa kwakhe okulandelayo) noma {{ui:Cancel}}. Ukulondoloza phezu kwefayela umuntu omunye asevele eliviliwe kubuza kuqala. Ukukhiya okungakavuselelwa imizuzu emihlanu kuthiwa kuyadlula isikhathi: ikhophi yangaphambili ivaliwe ngaphandle kokulondoloza noma ikhompyutha ilele.

{{cmd:WHOHAS}} ibuza `Current` (umdwebo ovulekile), `File` (khetha esisodwa), `FOlder` (khetha ifolda: yonke imidwebo kuyo evulwe kwenye indawo ilandiwe), `Path` (thayipha indlela ephelele) noma `Name` (igama abanye ababona; igama lakho le-akhawunti uma ungene ngemvume). Studio ingafinyelela kuphela amafolda owakhethile: kumdwebo ovulwe efolda engakaze ikhethwe ithi kanye ukuthi ayikwazi ukubhala ukuthi umdwebo uvuliwe; i-`FOlder` ikhetha ifolda, futhi okokukhiya kuyasebenza khona kusukela lapho. Ukukhiya kuyinothi kubantu, hhayi isithiyo: enye inhlelo ingabhala phezu kwefayela. Esiphequluli akukho mafolda okungabheka kuwo, futhi umyalo uyasho lokho.

### OVERKILL

Isusa izinto eziphindaphindiwe futhi ilungise imigqa namansalo ayingqubuzanayo, kumidwebo efika igcwele imigqa ephindwe kabili. `Select objects to clean up`, {{key:Enter}}, bese {{key:Enter}} futhi ukuhlanza ngezilungiselelo ezibonisiwe, noma shintsha okukodwa kuqala:

- `Tolerance`: izindawo ezimbili kumele zibe kufupi kangakanani ukuze zibalwe njengezifanayo (0.000001 ukuqala nakho; 0 kusho okufanayo ngokuphelele).
- `Ignore`: izakhiwo ezingahluka phakathi kwezinto ezimbili ezifana ngokunye. Thayipha igama ukuze uyishintshe: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, noma `None` / `All`. {{key:Enter}} lapho uqedile.
- `Overlap`: vula noma vala. Uma kuvuliwe, imigqa esemgqeni owodwa oqondile ehlanganayo iba umugqa owodwa (umugqa ongaphakathi komunye ususwa nje), namansalo esindilingeni eyodwa ahlanganayo abe umnsalo owodwa; amansalo avala ujikeleze ngokugcwele aba indilinga, nomnsalo oyindilinga esuswa.
- `Ends`: vula noma vala. Uma kuvuliwe, imigqa esemgqeni owodwa oqondile nama-arc esindilingeni eyodwa ahlangana nje ngamaphethelo abe yingcezu eyodwa.

Uhlobo ngalunye lwento luhlolwa ukuze kutholakale okuphindwayo: izinto zimbili ziphindiwe uma ijiyomethri yazo ifana ngaphakathi kokubekezelelwa nengqimba, umbala, uhlobo lomugqa, isikali sohlobo lomugqa, ububanzi bomugqa, ubukhulu, ukukhanya nobude kuyafana (ngaphandle kwalezo ozinakayo). Imigqa namapholilayini avulekile nawo ayafana uma edwetshwe ngendlela ephambene. Into yokuqala kuleli odidi ihlala futhi igcina izakhiwo zayo. Umyalo ubika ukuthi uhlole izinto ezingaki futhi ususile ezingaki: okuphindwayo, izingxenye ezihlanganisiwe ezihlanganisiwe, nezingxenye ezixhunyiwe ngokuphelela. I-{{cmd:UNDO}} eyodwa iyakubuyisela konke. Izilungiselelo ziyahlala kuze kuvalwe iwindi lomdwebo.

Ishiya: izinto ezisezingqimbeni ezikhiyiwe nezinto ezifihliwe. Ayihlanganisi imigqa enobubanzi (Z) (amakhophi aphelele awo ayasuswa nokho), futhi ayithinti izingxenye ngaphakathi kwepholilayini (azinciphi), umugqa ongaphezu kwesegimenti sepholilayini, nepholilayini evaliwe edwetshwe ngendlela ephambene.

### DRAWORDER

Iguqula izinto ezidwetshwa phambili. `Select objects to re-order`, {{key:Enter}}, bese `Above objects`, `Under objects`, `Front` noma `Back` ({{key:Enter}} = `Back`). `Above objects` ne-`Under objects` zibuza izinto zesisekelo: ukukhethwa kuya phambili ngqo phambi kwezingaphambili kakhulu kuzo, noma ngemuva ngqo kwezingasemuva kakhulu. Izinto ezikhethiwe zigcina ihlelo lazo phakathi kwazo. Inyathelo elilodwa lokuhlehlisa. Ihlelo ligcinwa nomdwebo ku-DWG ne-DXF, lapho kuyihlelo izinto ezibhalwa ngalo.

Ekuboneni CadCraft idweba izindawo ezigxishiwe (ama-hatch aqinile, amapholilayini abanzi, izimbobo) kuqala, bese imigqa, bese umbhalo, ngakho umbhalo uhlale ungaphezu kokugcwaliswa; ihlelo lokudweba livela phakathi kwezinto ezigcwalisiwe nezithombe. Ezinye izinhlelo ezivula ifayela zidweba zonke izinto ngohlelo olugciniwe.

### TEXTTOFRONT

Ibeka umbhalo, izilinganiso namamaki ngaphambi kwakho konke okunye esikhaleni esivulekile: `Text`, `Dimensions`, `Leaders` noma `All` ({{key:Enter}} = `All`). Inyathelo elilodwa lokuhlehlisa. Iyasho uma kungekho lutho, noma uma sebephambili.

### HATCHTOBACK

Ithumela zonke ama-hatch esikhaleni esivulekile ngemuva kwakho konke okunye, ukuze ukugcwalisa kungasagqugquzeli imigqa nombhalo ekugcineni kwefayela. Awukho imibuzo. Inyathelo elilodwa lokuhlehlisa.

### ISOLATEOBJECTS

I-alias: `ISOLATE`. Ibonisa izinto ezikhethiwe kuphela: konke okunye esikhaleni esivulekile kuyanyamalala kuze kube yi-{{cmd:UNISOLATEOBJECTS}}. Ngokungafani ne-{{cmd:LAYISO}} isebenza ngezinto ozikhethile, noma zingaziphi izingqimba zazo, futhi ayishintshi zingqimba. Izinto ezifihliwe aziboniswa, aziqokwa, aziphathwa, azisondelelwa noma ashicilelwa, nemiyalo ethatha i-`ALL` iziyeqa. Lokho odweba ngenkathi izinto zihlukaniswe ubonakala njengoba bekuvele.

Lokhu kusebenzela isesheni kuphela: akukho okugcinwa ngakho nomdwebo, akuyona inyathelo lokuhlehlisa, futhi ukuvula umdwebo futhi kubonisa konke. Lapho izinto zifihliwe, ibha yesimo iboniswa inkinobho enenombolo yazo; chofoza ukuze uzibuyisele.

### HIDEOBJECTS

Ifihla izinto ezikhethiwe kuze kube yi-{{cmd:UNISOLATEOBJECTS}}. Izinqubomgomo ezifanayo ne-{{cmd:ISOLATEOBJECTS}}: kwesesheni kuphela, akugcinwa, akuyona inyathelo lokuhlehlisa.

### UNISOLATEOBJECTS

Ama-alias: `UNISOLATE`, `UNHIDE`. Ibonisa futhi zonke izinto ezifihlwe yi-{{cmd:ISOLATEOBJECTS}} noma i-{{cmd:HIDEOBJECTS}}, futhi iyasho ukuthi zibuyile zingaki.

### LAYLOCKFADE

Isetha ukuthi izinto ezisezingqimbeni ezikhiyiwe zibukeka kanjani nokuthi ukuchofoza kuyazifinyelela yini. Itshela isimo samanje bese ithatha:

- inombolo evela ku-0 kuya ku-90: inani lokufiphala ngamaphesenti (50 ukuqala nakho). 0 ivala ukufiphala.
- `ON` noma `OFF`: ukufiphala kuvuliwe noma kuvaliwe, kugcina inani.
- `Pick`, bese `Yes` noma `No`: ukuchofoza kungakhetha izinto ezisezingqimbeni ezikhiyiwe yini ngenkathi kungasebenzi myalo? `No` (okuzenzakalelayo): azikwazi ukukhethwa nhlobo. `Yes`: ukuchofoza noma iwindi kuyazikhetha ukuze i-{{ui:Properties}} ikwazi ukuzibonisa; zisengalungiswa, nomyalo wokukhetha `Select objects` awuzithathi.

Ukubamba kwezinto kuthola izinto ezisezingqimbeni ezikhiyiwe nokho; izinhlobo ezishicilelwayo azikaze zifiphale. Lezi zilungiselelo zakho, hhayi zomdwebo, futhi zisemaSettings phansi kwe-{{ui:Locked layers}}.

### BURST

Iqhuma amabhulokhi nokugcina okusho izici zawo. `Select block references to burst`, {{key:Enter}}: ireferensi ngayinye ithathelwa indawo izinto zebhulokhi, nenani lesici ngasinye elibonakalayo lishintshwa libe umbhalo owodwa ongqimbeni yesici ngasinye (isici esisengqimbeni 0 sigcina ingqimba yalo mbhalo ireferensi yayo, njengezinye izinto zebhulokhi ezisengqimbeni 0). Izici ezingabonakali ziyasuswa. Ibhulokhi eliphakathi kwebhulokhi lihlala liyireferensi yebhulokhi. Inyathelo elilodwa lokuhlehlisa; ibika izireferensi eziqhunyiwe nezinani zezici eziguqulwe zaba umbhalo.

Yenqaba imidwebo exhunyiwe ngegama (yiboshe kuqala, noma ukopishe kuyo nge-{{cmd:NCOPY}}), futhi ishiya ezinye izinto ezikhethiwe zodwa. Ezireferensi zamabhulokhi i-{{cmd:EXPLODE}} inikeza izinto ezifanayo; i-{{cmd:BURST}} ithatha izireferensi zamabhulokhi kuphela futhi ibale umbhalo wezici.

### TXT2MTXT

I-alias: `T2M`. Ixhumanisa imibhalo yomugqa owodwa ibe yisigaba esisodwa sombhalo. `Select single-line text to join`, {{key:Enter}}, bese `Paragraph` (imigqa ihlanganiswa futhi iphelele ububanzi bomugqa omkhulu kakhulu) noma `Lines` (umbhalo ngamunye uhlala umugqa wawo); {{key:Enter}} ithatha esasetshenziswa okokugcina. Imigqa ihlelwa phezulu kuya phansi, bese kwesobunxele kuya kwesokunene, ngokuqondiswa kombhalo ongaphezulu. Isigaba sihlala kwikhona elingaphezulu lesobunxele lombhalo ophezulu futhi sithatha ukuphakama, ukujikeleza, isitayela, ingqimba nombala wawo. Inyathelo elilodwa lokuhlehlisa.

Umbhalo osuvele uyisigaba, umbhalo ongenalutho nezinye izinto ezikhethwe ziyashiywa, futhi umyalo uyasho ukuthi zingaki.

### NCOPY

Ikopisha izinto kusuka kureferensi yebhulokhi noma emdwebeni oxhunyiwe ibe emdwebweni, ngaphandle kokuqhuma noma yini. `Pick an object inside a block reference or a linked drawing`: into eseduze kwalokho okuchofoziwe ikopishwa lapho ibonakala khona, kungakhathaliseki ukuthi igxile ngaphansi kwamabhulokhi amangaki; khetha okunye, bese {{key:Enter}}. Okulandelayo `Base point to move the copies`: {{key:Enter}} ibashiya endaweni yabo, noma nikeza iphoyinti lesisekelo nephoyinti lesibili. Umyalo wonke yinyathelo elilodwa lokuhlehlisa.

Ikhophi ithatha ingqimba lapho ibonakala khona: into ongqimbeni 0 ngaphakathi kwebhulokhi ifika ingqimba yereferensi eyayisiyo, nombala we-ByBlock uba umbala walowo mbhalo. Kumdwebo oxhunyiwe, ingqimba `Plan|Walls` iba `Plan$0$Walls` (igama lokuboshwa okunikeza lona), eyenziwa ngombala, uhlobo lomugqa nokuqina komugqa wengqimba exhunyiwe. Inani lesici likopishwa njengombhalo. Izireferensi zamabhulokhi ezisezingqimbeni ezikhiyiwe azikwazi ukukhethwa.

### FLATTEN

Isetha ukuphakama (Z) nobukhulu bezinto ezikhethiwe ibe ngu-0. `Select objects to flatten`, {{key:Enter}}. Iphinde ilinganise izinto ezingaphakathi kwezincazelo zamabhulokhi okusetshenziswa ukukhethwa (nalawo angaphakathi kwalawo), ngakho yonke ireferensi yalawo mabhulokhi iyashintsha; imidwebo exhunyiwe ishiywa njengoba injalo. Inyathelo elilodwa lokuhlehlisa; ibika ukuthi izinto ezingaki eziguquliwe, futhi iyasho uma zingekho ezinokuphakama noma ubukhulu.

Okugcinwa yi-CadCraft kwesilinganiso sesithathu kumdwebo wesi-2D yilokhu: ukuphakama kumasekhethi, ama-arc, ama-elipse, amaphoyinti, umbhalo, izireferensi zamabhulokhi, ama-hatch, amamaki nama-polyline (ukuphakama kwawo), ukuphakama ekuphelweni ngakunye komugqa, nobukhulu emigqeni, ezindilingeni, ema-arc, ezinhlwini, emaphoyinteni nombhalweni, njengoba ifayela linazo. I-{{cmd:FLATTEN}} isula kuphela lezo. Ayithinti imodeli ye-3D kwithebhu ye-3D, ubuso be-3D noma izinto eziqinile, futhi into edwetshwe endizeni ethambekile ivele isiswe endizeni yomdwebo lapho ifayela livulwa.

### BREAKLINE

Idweba umugqa unophawu lokuqhekeka, ngombono oqhekezwe ufushane. Itshela usayizi wamanje nokwelulwa, bese `First point of the break line` (noma `Size` / `Extension` ukuwashintsha kuqala), `Second point`, ne-`Where the break symbol sits`: chofoza emugqeni, noma {{key:Enter}} ukuze uphakathi. Umphumela uyipholilayini eyodwa ongqimbeni yamanje: umugqa, uhamba ngaphesheya kwephoyinti ngalinye ngokwelulwa, nomugqa we-Z ophakamile njengosayizi nohhafu wobude bawo.

`Size` ne-`Extension` zikhunjulwa njengezilungiselelo zakho (usayizi uqala ngamaphindwe amabili wokuphakama kombhalo wezilinganiso kuphindaphindwe isikali sezilinganiso; ukwelulwa kuqala kuyingxenye yesine yosayizi). {{key:Enter}} iphinda umyalo.

### AUDIT

Ihlola umdwebo ovulekile ukuthola umonakalo bese iyawulungisa. {{cmd:AUDIT}} ibheka yonke into emodelini, emashidini nangaphakathi kwamabhulokhi, nethebula lezingqimba, bese ibala okuthola ngohlobo: 

- izinombolo ezingaphelele noma ezinkulu kakhulu;
- izinto ezingenabukhulu: umugqa ongenabude, indilinga engenarediyasi, ipholilayini enendawo eyodwa, umbhalo ongenamagama noma ukuphakama, isethulo sebhulokhi esinesikali esingu-zero;
- izinto ezisezingqimbeni umdwebo ongenazo, izinkomba zamabhulokhi angekho; amagama wesitayela sombhalo nezilinganiso namagama ohlobo lomugqa angekho emdwebweni;
- amabhulokhi aqukethe ngokwawo, ngqo noma ngokudlula kwamanye amabhulokhi;
- izinto ezabelana ngesikhombi, ukhiye noma i-file handle efanayo;
- izilinganiso ezingenawo amaphoyinti okulinganiswa kuwo, nama-hatch angenawo umngcele ovaliwe.

Bese ibuza `Fix them? [Yes/No]`. `No` ayishintshi lutho. `Yes` ilungisa konke ngenyathelo elilodwa lokuhlehlisa: okungeke kudwetshwe kuyasuswa (izinani ezimbi, akukho bukhulu, ibhulokhi elilahlekile, isilinganiso esonakele, i-hatch engenawo umngcele osebenzayo, isethulo esivala indilinga yamabhulokhi); ingqimba eyelahlekile iyadalwa; amagama wesitayela nohlobo lomugqa angaziwa abuyela ezizenzakalelayo; ukhiye oyabelwanwa uyashintshwa. Ibhala ukuthi izinto ezingaki ezisusiwe nokuthi ezingaki ezilungisiwe. Okutholakele okufanayo kuvela kuphaneli ye-Problems, ngayinye nge-{{ui:Repair}} yayo.

Ayenqabi lutho, kepha ihlola kuphela okudwetshwa yi-CadCraft ngokwayo: idatha egcinelwa ezinye izinhlelo (izinto eziqinile ze-3D, izinto ze-OLE) ayivulwa.

### RECOVER

Ivula i-DXF noma i-DWG elimele. {{cmd:RECOVER}} icela ifayela, ifunda okungafundeka esikhundleni sokwenqaba, ibala okwadlulwa noma okuthathwa, bese ihlola futhi ilungise umdwebo njengoba i-{{cmd:AUDIT}} yenza ngo-`Yes`.

- DXF: imigqa engeyona ingxenye yekhodi nenani ayidlulwa ize amapheya ahlelelane futhi; isigaba esingenasiphetho sivalwa; ifayela eliqunyiwe lifundwa kuze kufike lapho eliqunyiwe khona; i-DXF ye-binary equnyiwe ifundwa kuze kufike ekugcineni kwenani eliphelele. Uma isigaba, ibhulokhi noma into ingasafundeki, iyasuswa futhi ibizwe ngegama, futhi ukufunda kuqhubeka ngaphesheya kwayo.
- DWG: izinto ezingadlula ukuhlolwa kwazo noma ezingakwazi ukuhunyushwa ziyashiywa, futhi uhlu lwezinto oluzilahlile lwakhiwa kabusha ngokuhamba phakathi kwedatha yezinto.

Ifayela ediskini aliguquki. Umdwebo olutholiwe uvula ungalondolozwanga: uligcine ngegama elisha. Ifayela lapho okungafundwa khona lutho lwenqatshwa, nesizathu sitshelwa.

### LEGACYTEXT

Iguqula umbhalo obhalwe ngamafonti amadala e-Vietnamese ayi-8-bit ukuze abe yi-Unicode. Amagama amafushane `TEXTTOUNICODE` ne-`VNTEXT`.

Imidwebo yakudala yesiVietnamese igcina umbhalo wayo njengezinhlamvu zesiNtshonalanga okuthi ifonti kuphela ilishintsha libe isiVietnamese: umbhalo we-TCVN3 kumafonti e-ABC (`.VnTime`, `.VnArial`, namafonti amakhulu amagama ayo aphela nge-`H`), nombhalo we-VNI kumafonti e-VNI (`VNI-Times`). I-CadCraft ibonisa lo mbhalo njengoba uyafundeka uma umdwebo uvulwa, ngefonti yesitayela sombhalo wawo, yento, noma ngocingo ngaphakathi kombhalo wesigaba; ifayela lisagcina izinhlamvu zakudala.

{{cmd:LEGACYTEXT}} itshela ukuthi yatholakala imibhalo emingaki ngohlelo ngalunye lokubhala bese ibuza `Convert … to Unicode?`. `Yes` iphindela wonke (imodeli, amashidi, amabhulokhi, izinani zezici nezincazelo) futhi inika izitayela zombhalo ifonti ye-Unicode (Times New Roman, Arial noma Courier New ngohlobo lwefonti yakudala), ngenyathelo elilodwa lokuhlehlisa. Ukwakheka ngaphakathi kombhalo wesigaba kuyagcinwa.

Lapho akukho mbhalo osebenzisa ifonti eyaziwayo (isitayela esilahlekelwe igama lefonti), ibuza `Read selected texts as [Tcvn3/Vni/None]`: khetha uhlelo lokubhala bese ukhetha imibhalo. Umbhalo osuvele uyi-Unicode uyashiywa. Ukugcekelwa kwezilinganiso zombhalo nombhalo we-multileader akuguqulwa.
