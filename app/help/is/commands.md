---
title: Skipanahandbók
summary: Allar skipanir í CadCraft teikniforritinu, með styttum heitum, spurningunum sem þær spyrja, valkostum þeirra og sjálfgildum.
keywords: skipanir, stytt heiti, skipanalisti, flatarmál, ummál, measuregeom, lína, pline, hringur, bogi, klippa, offset, dimlinear, blokk, insert, útlit, prenta, aðdráttur, hjálp, copyclip, cutclip, pasteclip, pasteorig, copybase, afrita, velja allt
from: 7db2646b
---

Sláðu inn heiti skipunar eða stytt heiti og ýttu á {{key:Enter}} eða {{key:Space}}. Hástafir skipta ekki máli, og fremstu `_`, `-`, `.` eða `'` eru hunsuð. Sláðu inn `HELP` (eða `?`) til að prenta stuttan lista yfir allar skipanir í skipanalínusögunni; ýttu á {{key:F1}} fyrir þessa hjálp.

Hvernig lesa á spurningarnar: valkostir eru í hornklofum, og þú velur einn með því að slá inn hástafina hans (`D` fyrir þvermál). Sjálfgildi er í oddklofum; ýttu á {{key:Enter}} til að samþykkja það. Þar sem beðið er um punkt geturðu smellt eða slegið inn hvaða snið sem er í [Hnit- og fjarlægðarinnslætti](topic:coordinate-entry). Þar sem beðið er um fjarlægð geturðu slegið inn tölu eða smellt á tvo punkta.

Ef ýtt er á {{key:Enter}} þar sem krafist er punkts eða hlutar, og enginn sjálfgefinn kostur er til, lýkur skipuninni. {{key:Esc}} hættir henni. Allt sem skipun gerir er eitt afturköllunarskref.

## Teikna

### LINE

Stytt heiti: `L`. Beinir hlutar, hver sinn eigin hlutur.

- `Specify first point` (Enter: byrja frá síðasta punkti sem þú gafst)
- `Specify next point [Undo]`, endurtekið. Eftir tvo hluta: `[Undo/Close]`.
- `U` tekur síðasta hlutann til baka, `C` lokar að fyrsta punkti og lýkur. Enter lýkur.

### PLINE

Stytt heiti: `PL`. Ein fjöllína úr línu- og bogahlutum.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close þegar það eru tveir hlutar)
- `A` skiptir yfir í boga: `Specify endpoint of arc [Line/CLose/Undo]`. Hver bogi heldur áfram snertilega við hlutann á undan. `L` fer aftur í línur, `CL` lokar með boga.
- Enter lýkur; fjöllínan helst opin.

### CIRCLE

Stytt heiti: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` spyr `Specify diameter of circle`.
- `2P`: tveir endar þvermáls. `3P`: þrír punktar á hringnum.
- `T` (líka skipunin `TTR`, og {{ui:Teikna}} › {{ui:Meira}} › {{ui:Hringur: Snertill, snertill, radíus}}): `Specify point on object for first tangent of circle`, síðan sá annar, og síðan radíusinn (Enter: síðasti). Hringurinn snertir báða hlutina (línur, boga, hringi, hluta fjöllínu, líka inni í blokkum); af þeim hringjum sem gera það er valinn sá sem snertir næst valpunktunum þínum. „Circle does not exist“ þegar enginn passar.
- `TTT` (eða {{ui:Teikna}} › {{ui:Meira}} › {{ui:Hringur: Snertill, snertill, snertill}}): þrír hlutir; hringurinn sem snertir alla þrjá, sá sem er næst valpunktunum þínum (þrjár línur gefa innri hring eða ytri hring, eftir því hvar þú velur).

### ARC

Stytt heiti: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: bogi í gegnum þrjá punkta.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Bogi fer rangsælis frá byrjun til enda.

### RECTANG

Stytt heiti: `REC`, `RECTANGLE`. Lokuð fjöllína.

- `Specify first corner point`, `Specify other corner point`. Sláðu inn `@width,height` fyrir annað hornið.

### POLYGON

Stytt heiti: `POL`. Reglulegur marghyrningur sem lokuð fjöllína.

- `Enter number of sides <4>` (3 til 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: smelltu eða sláðu inn punkt; fjarlægð hans ákvarðar stærðina og stefna hans snýr marghyrningnum.

### ELLIPSE

Stytt heiti: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, síðan fjarlægðin að hinum ásnum.
- `I` (`Isocircle`, aðeins meðan {{cmd:ISODRAFT}} er kveikt): miðja, síðan radíus eða `Diameter`: sporbaugurinn sem hringur birtist sem á núverandi samsætu plani.

### HATCH

Stytt heiti: `H`, `BH`, `BHATCH`; eða {{ui:Skygging}} á verkfærastikunni. Prentar fyrst núverandi mynstur, kvarða og horn.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, endurtekið (`Undo` þegar svæði er komið): hver smellur bætir við lokaða svæðinu í kringum hann, með lokuðum formum innan þess sem eyjar. Enter býr til eina skyggingu úr þeim öllum.
- `S`: `Select closed objects` (lokaðar fjöllínur, hringir, lokaðir sporbaugar).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): fyllingin er litstigull í stað mynsturs. Sjá {{cmd:GRADIENT}} fyrir spurningar þess.

Sjá [Skygging og fylling svæða](topic:hatch).

### GRADIENT

Stytt heiti: `GD`. Fyllir svæði með litstigli úr einum eða tveimur litum. Hann spyr fyrst um litstigulinn, og heldur síðan áfram eins og {{cmd:HATCH}} gerir (`Pick internal point`, `S` fyrir lokaða hluti, {{key:Enter}} til að ljúka).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, endurtekið; hann prentar litstigulinn eins og hann er núna í hvert skipti.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, eða einn þeirra snúinn við (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Fyrstu stafirnir duga.
- `O`: einn litur, síðan tónn hans frá 0 til 1 (0 dekkir hann í svart, 0,5 er liturinn sjálfur, 1 ljósar hann í hvítt). `TW`: fyrsti og annar liturinn. Litur er tala frá 1 til 255, þrjár tölur eins og `255,128,0`, eða `#rrggbb`.
- `A`: hornið sem litstigullinn liggur í. `C`: centered Yes eða No (No færir miðju litstigulsins til annarrar hliðar).
- Hann hafnar lit eða gerð sem hann þekkir ekki, og tóni utan 0 til 1.

{{cmd:HATCHEDIT}} `G` og Properties (Gradient) breyta litstigli síðar, eða gera hvaða skyggingu sem er að litstigli. Litstigull er teiknaður á skjáinn og prentaður. DWG 2004 og nýrri geyma hann sem raunverulega litstigulskyggingu; DXF 2000 og DWG 2000 geyma hann fyrir CadCraft, og önnur forrit sjá samfellda fyllingu í fyrsta litnum.

### HATCHGENERATEBOUNDARY

Stytt heiti: `HGB`. Býr afmörkunina til aftur úr skyggingu sem missti hana. `Select hatches` (eða veldu þær fyrst), síðan `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Sérhver lykkja skyggingarinnar verður lokuð fjöllína á lagi skyggingarinnar; nýju fjöllínurnar eru skildar valdar. Bogin brún kemur til baka sem stuttir beinir hlutar sem skyggingin geymir.
- Með Yes fylgir skyggingin nýju afmörkuninni, eins og skygging sem búin er til með {{cmd:HATCH}} gerir. Eitt afturköllunarskref.
- Hún segir til um það þegar engin skygging var valin.

### POINT

Stytt heiti: `PO`; eða {{ui:Teikna}} › {{ui:Meira}} › {{ui:Punktur}}. Punkthlutir, einn fyrir hvern smell, þar til Enter.

- `Specify a point`

### XLINE

Stytt heiti: `XL`; eða {{ui:Teikna}} › {{ui:Meira}} › {{ui:Smíðalína}}. Smíðalínur, endalausar í báðar áttir. Sjá [Smíðalínur og geislar](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, síðan `Specify through point` fyrir hverja línu, þar til Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` spyr fyrst `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, síðan `Specify angle end point` fyrir hverja línu.
- `O`: `Specify offset distance [Through] <Through>`, síðan `Select a line object` og `Specify side to offset` (eða `Specify through point`) fyrir hverja línu.

### RAY

Engin stytt heiti; eða {{ui:Teikna}} › {{ui:Meira}} › {{ui:Geisli}}. `Specify start point`, síðan `Specify through point` fyrir hvern geisla, þar til Enter.

### TEXT

Stytt heiti: `DT`, `DTEXT`; eða {{ui:Texti}} á verkfærastikunni. Einlínutexti; hver lína er sinn eigin hlutur.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, síðan `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, endurtekið: hver Enter byrjar næstu línu fyrir neðan. Enter á tómri línu lýkur. {{key:Space}} skrifar bil hér.

### DIVIDE

Stytt heiti: `DIV`. {{cmd:DIVIDE}} setur merki á línu, boga, hring, fjöllínu, spline eða sporbaug sem skera hann í jafna hluta. Veldu hlutinn og gefðu upp fjölda hluta (2 til 32767). Opinn hlutur fær einu merki færra en hlutarnir eru; lokaður fær merki líka á upphafspunktinn. Hluturinn sjálfur er ekki skorinn. Merkin eru punktar; `Block` spyr í staðinn um blokk úr þessari teikningu og hvort hún snýst til að fylgja hlutnum. Lengdir eftir splines og sporbaugum eru mældar eftir stuttum strengjum. Hún hafnar texta, skyggingum og öðrum hlutum sem hafa enga lengd.

### MEASURE

Stytt heiti: `ME`. {{cmd:MEASURE}} setur merki á hverri gefinni lengd meðfram línu, boga, hring, fjöllínu, spline eða sporbaug, og telur frá þeim enda sem þú valdir nær (lokaður hlutur: frá upphafspunkti hans). Gefðu lengdina með því að slá hana inn eða með tveimur punktum. Fjarlægari endi opins hlutar fær ekkert merki. `Block` setur blokk á hvert merki í stað punkts. Hún hafnar lengd 0, lengd sem er lengri en hluturinn, og lengd sem myndi búa til fleiri en 32767 merki.

### BOUNDARY

Stytt heiti: `BO`, `BPOLY`. {{cmd:BOUNDARY}} býr til lokaða fjöllínu utan um svæðið sem punkturinn sem þú velur er í, úr þeim línum, bogum, hringjum, fjöllínum og ferlum sem afmarka það á skjánum. Hlutir sem liggja á boga eða hring koma aftur sem bogahlutar; bútar af sporbaugum og splines koma aftur sem stuttir beinir hlutar. Með `Islands` kveikt (upphafsstillingin) fær hvert lokað svæði innan þess líka sína eigin fjöllínu. Haltu áfram að velja punkta; Enter lýkur. Hlutirnir sem afmarka svæðið haldast óbreyttir. Hún segir til um það þegar enginn lokaður flötur er á punktinum.

### BLEND

{{cmd:BLEND}} teiknar spline á milli enda tveggja opinna sveigna. Veldu hverja sveigju nálægt þeim enda sem á að tengja. `CONtinuity` velur `Tangent` (splineið fer af stað og kemur inn eftir báðum sveigjum) eða `Smooth` (það beygir líka eins og þær beygja á endunum); valið helst fyrir þessa lotu. Sveigjurnar tvær breytast ekki. Hún hafnar lokuðum hlutum og tveimur endum sem þegar mætast.

### REGION

Stytt heiti: `REG`. {{cmd:REGION}} breytir lokuðum hlutum í fleti (svæði) sem þú getur tengt, skorið og mælt. Veldu hringi, lokaðar fjöllínur, lokaða sporbauga eða lokaða splines, eða línur, boga og opnar fjöllínur sem loka lykkju enda við enda; hver lykkja verður eitt svæði og kemur í stað hlutanna sem hún kom úr. Bogar haldast bogar; sporbaugar og splines verða að stuttum beinum hlutum. Það sem er ekki lokað og lokar engri lykkju er látið vera, og hún segir hve margir hlutir það eru. Í teikningunni er svæði ein eða fleiri lokaðar fjöllínur sem eru haldnar saman sem ónefndur hópur, svo smellur velur allt svæðið og afrit er svæði út af fyrir sig; önnur forrit sem opna skrána sjá lokaðar fjöllínur.

Með svæðum í teikningunni vinna {{cmd:UNION}}, {{cmd:SUBTRACT}} og {{cmd:INTERSECT}} á 2D-flipanum á svæðum: `UNION` sameinar valin svæði í eitt (svæði sem eru í sundur verða eitt svæði með mörgum útlínum), `SUBTRACT` spyr fyrst um þau svæði sem draga á frá og síðan þau sem á að taka í burtu (gat helst hluti svæðisins), `INTERSECT` heldur flatarmálinu sem þau eiga öll sameiginlegt. Hver þeirra segir flatarmál niðurstöðunnar og er eitt afturköllunarskref. Þær hafna þegar ekkert yrði eftir eða ekkert er sameiginlegt. Á 3D-flipanum, og í teikningu án svæða, virka sömu skipanir á föst form eins og áður.

## Breyta

### MTEXT

Stytt heiti: `MT`, `T`; eða {{ui:Málsgrein}} á verkfærastikunni. Málsgreinatexti sem lendir í breidd og er skrifaður á staðnum.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: breiddin yfir hornin tvö er þar sem textinn brotnar. `H` spyr `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` og sleppir öðru horninu.
- Síðan opnast reitur á teikningunni: skrifaðu, {{key:Enter}} fyrir nýja málsgrein, {{key:Mod+Enter}} eða smelltu utan við til að ljúka, {{key:Esc}} til að hætta við. Stikan hans stillir hæð, línubil, breidd og jöfnun. Sjá [Bættu við texta og merkingum](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Stytt heiti: `ED`, `DDEDIT`; eða tvísmelltu á texta. `Select a text to edit`, endurtekið þar til {{key:Enter}}: hver opnast í sama reit. Sé hún ræst á völdum eða tvísmelltum texta breytir hún honum og lýkur.

### ERASE

Stytt heiti: `E`, `DELETE`; eða ýttu á {{key:Delete}} með völdum hlutum.

- `Select objects` (sleppt þegar hlutir eru þegar valdir)

### MOVE

Stytt heiti: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, slegið inn sem `dx,dy`.

### COPY

Stytt heiti: `CO`, `CP`. Afritar eins oft og þú gefur punkta.

`Array` við spurninguna um annan punkt býr til röð í einu lagi: gefðu upp fjölda atriða (upprunalegi telst sem eitt), síðan punktinn þar sem fyrsta afritið fer; hin fylgja með sama bili. `Fit` gerir þann punkt að stað síðasta afritsins í staðinn, og hin dreifast jafnt þar á milli.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, endurtekið þar til Enter. `U` tekur síðasta afritið til baka.

### ROTATE

Stytt heiti: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: gráður, jákvætt rangsælis; eða smelltu á punkt til að snúa í átt að honum.

### SCALE

Stytt heiti: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: slærð inn stuðul eins og `0.5` eða `2`. Smellur á punkt gefur fjarlægð hans frá grunnpunktinum sem stuðulinn.

### MIRROR

Stytt heiti: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Stytt heiti: `AL`; eða {{ui:Breyta}} › {{ui:Meira}} › {{ui:Jafna}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Með tveimur pörum: `Scale objects based on alignment points? [Yes/No] <N>`

Sjá [Jafna hluti](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (eða valið), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` spyr um punktinn. Valið helst.

### DISTRIBUTE

- `Select objects` (að minnsta kosti þrír), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Tveir ytri haldast; valið helst.

### ALIGNPANEL

Stytt heiti: `ALP`; eða {{ui:Breyta}} › {{ui:Meira}} › {{ui:Jöfnun og dreifing}}. Opnar gluggann sem keyrir ALIGNTO og DISTRIBUTE með smellum.

### LASER

Stytt heiti: `LASERCUT`; eða {{ui:Sýn}} › {{ui:Meira}} › {{ui:Leysir…}}. Opnar Leysigluggann yfir teikningunni: hvað hvert lag gerir (skera, rispa, grafa, fylla, mynd), forskoðunina, GRBL G-code til að vista, og ramma og senda um Web Serial. Sjá [Senda teikningu í leysi](topic:laser-cutting).

### STRETCH

Stytt heiti: `S`; eða {{ui:Teygja}}. `Select objects to stretch`: dragðu krossglugga (eða slærð inn `C`) yfir endana til að færa. `Specify base point [Displacement]`, `Specify second point`. Punktar innan glugganna færast: línuendar, hnitpunktar fjöllína (bogahlutar halda hæð sinni), málsetningarpunktar; hringir, sporbaugar, texti, punktar og blokkir færast í heild þegar miðja þeirra eða innsetningarpunktur er innan. Val sem gert er áður en skipunin er ræst heldur krossgluggunum (og lassóunum) sem bjuggu það til, svo þeir teygja á sama hátt. Án glugga færast hlutirnir í heild.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Stytt heiti: `AR`; eða {{ui:Fylki}}. `Select objects`, síðan `Enter array type [Rectangular/POlar] <Rectangular>` (aðeins ARRAY).

- Rectangular byrjar með 4 dálkum × 3 röðum, með bili sem er 1,5 sinnum stærð hlutanna, sýnt sem forskoðun. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` spyr um dálka og raðir, `S` bilin á milli dálka og á milli raða (neikvætt fer til vinstri eða niður), `COL` og `R` hvort um sig í eina átt.
- Polar spyr `Specify center point of array`, byrjar með 6 atriðum allan hringinn, snúin. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` atriði, `F` hornið sem fylla skal (+ rangsælis, − réttsælis), `ROT` Yes eða No.
- {{key:Enter}} (eXit) býr til afritin sem venjulega hluti. Eitt afturköllunarskref.
- `AS` (ASsociative) skiptir á milli venjulegra afrita og fylkis sem helst breytanlegt: einn hlutur sem þú breytir síðar með {{cmd:ARRAYEDIT}}, með gripum hans eða í Properties. Valið er munað ({{cmd:ARRAYASSOCIATIVITY}}); það byrjar á venjulegum afritum.

### ARRAYPATH

Afrit meðfram sveigju. `Select objects`, síðan `Select path curve`: lína, boga, hringur, sporbaugur, fjöllína eða spline (ekki einn af hlutunum sem verið er að raða). Brautin byrjar við þann enda sem er nær hlutunum, og fyrsta atriðið eru hlutirnir þar sem þeir eru.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, með forskoðun. `M`: `Divide` dreifir atriðunum jafnt yfir alla brautina, `Measure` setur eitt á hverja gefna lengd eftir henni. `I`: fjöldi atriða (með Measure þýðir 0 eins mörg og komast fyrir; tala umfram enda brautarinnar er bundin við það sem kemst fyrir). `SP`: bilið milli atriða eftir brautinni (skiptir yfir í Measure). `AL`: Yes snýr hverju atriði þannig að það fylgi brautinni, No heldur þeim uppréttum.
- `AS` eins og í {{cmd:ARRAY}}. Með honum kveiktum geymir fylkið sitt eigið afrit af lögun brautarinnar: breyting á brautarsveiginni síðar færir ekki atriðin.
- Hún hafnar braut sem er ekki sveigja, og einu atriði.

### ARRAYEDIT

Breytir fylki sem búið var til með ASsociative. `Select array` (eða veldu það fyrst). Hún prentar hvernig fylkið er núna, og spyr síðan þar til {{key:Enter}}:

- Rectangular: `COL` dálkar og bil þeirra, `R` raðir og bil þeirra, `A` hornið sem dálkarnir liggja í.
- Polar: `I` atriði, `F` fyllingarhornið, `ROT` snúa atriðum Yes eða No.
- Path: `M` Divide eða Measure, `I` atriði, `SP` bil, `AL` jöfnun við brautina.
- `S` (Source) opnar hlutina sem fylkið endurtekur, sjálfstætt, eins og blokkaritillinn. Teiknaðu og breyttu þar; {{cmd:ARRAYCLOSE}} vistar eða hendir, og hvert atriði fylgir.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, síðan smellirðu á atriðin sem á að skipta út, og {{key:Enter}}. Þau atriði sýna skiptihlutinn í staðinn; skiptihlutirnir fara úr teikningunni og lifa í fylkinu. `RES` (RESet) sýnir upprunahlutina í hverju atriði aftur.
- Sérhver breyting er eitt afturköllunarskref. Hún hafnar venjulegum afritum, venjulegri blokkartilvísun og fylki á læstu lagi.

Sömu tölur eru í Properties undir Array, og fylkið hefur grip: grunnpunkturinn færir það, gripið á öðru atriðinu stillir bilið, gripið fyrir aftan síðasta atriðið stillir fjöldann (polar: annað atriðið stillir hve mörg atriði eru, síðasta atriðið fyllingarhornið). {{cmd:EXPLODE}} breytir fylki aftur í venjuleg afrit.

### ARRAYCLOSE

Lýkur {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Hún segir til um það þegar engir upprunahlutir fylkis eru opnir. {{cmd:BCLOSE}} gerir það sama.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Stillir hvað {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR og {{cmd:ARRAYPATH}} byrja á; valkosturinn þeirra `AS` breytir sömu stillingu. Munað í þessum vafra.

### OFFSET

Stytt heiti: `O`. Línur, bogar, hringir og fjöllínur.

Þar sem fjöllína færist út á við og beinu hlutar hennar skiljast í sundur í horni, ákveður {{cmd:OFFSETGAPTYPE}} hvernig bilið er lokað.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, síðan `Specify point on side to offset` (eða, með Through, `Specify through point`), endurtekið þar til Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: hvernig {{cmd:OFFSET}} lokar bilunum í ytri hornum fjöllínu. `0` framlengir hlutana þar til þeir mætast (upphafsstillingin), `1` tengir þá með boga um gamla hornið, `2` með beinum skurði. Innri horn og bogahlutar eru ekki fyrir áhrifum. Haldist fyrir þessa lotu.

### EXTRIM

{{cmd:EXTRIM}} klippir allt á annarri hlið brúnar. Veldu skurðarbrúnina (línu, boga, hring, fjöllínu, sporbaug, spline eða smíðalínu), og síðan punkt á þeirri hlið sem á að hreinsa: sérhver lína, bogi, hringur, fjöllína og smíðalína sem sker brúnina missir hlutann sinn á þeirri hlið, þar sem hann byrjar við brúnina. Meðan þú velur hliðina fylgja hlutirnir sem færu bendlinum. Fyrir lokaða brún eru hliðarnar innan og utan. Hlutir sem aðeins snerta brúnina, og texti, skyggingar, splines og sporbaugar sem krossa hana, haldast óbreyttir. Eitt afturköllunarskref.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: hvernig {{cmd:TRIM}} og {{cmd:EXTEND}} byrja. `1` Quick: sérhver hlutur er skurðarbrún eða mörk. `0` Standard: þær spyrja fyrst um brúnirnar. Einnig `(setvar "TRIMEXTENDMODE" 0)` í LISP.

### TRIM

Stytt heiti: `TR`. Prentar fyrst `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. Í Quick-stillingu er sérhver sýnilegur hlutur skurðarbrún, og hlutur sem ekkert sker er eyddur; í Standard-stillingu spyr hún fyrst `Select cutting edges (Enter = every object)` og klippir aðeins við þær.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, endurtekið: smelltu á bútinn sem á að fjarlægja (hann verður grár og strikaður meðan bendillinn hvílir á honum), dragðu braut í gegnum nokkra búta (allir fara í einu skrefi), eða smelltu á tvo tóma staði fyrir girðingu á milli þeirra. {{key:Shift}} framlengir í staðinn. `T` velur skurðarbrúnir (Standard-stilling), `F` spyr um punkta girðingar, `C` tvö horn glugga (bútar sem eru að hluta inni fara), `O` spyr `Enter a trim mode option [Quick/Standard]`, `E` spyr `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` eyðir hlutum sem þú velur, `U` afturkallar síðasta val eða drátt. Enter lýkur. Sjá [Klippa og framlengja](topic:trim-and-extend).

- Smellur á skyggingu klippir skygginguna: skurðarbrúnirnar skipta skyggða svæðinu, og bútinn sem þú smelltir á er tekinn í burtu (engin teiknuð útlína verður eftir þar sem hann var). Skyggingin heldur mynstri sínu eða litstigli; skygging sem var tengd afmörkun sinni er ekki tengd eftir á, því hún fyllir hana ekki lengur. Hún segir til um það þegar engin skurðarbrún skiptir skyggingunni þar, þegar smellurinn er utan skyggingarinnar, og þegar ekkert yrði eftir (notaðu {{cmd:ERASE}}). Braut eða girðing sem er dregin klippir ekki skyggingar.

### EXTEND

Stytt heiti: `EX`. Eins og TRIM í öfuga átt: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Smellur lengir þann enda sem er næst honum að næstu mörkum; dregin braut eða girðing lengir sérhvern hlut sem hún sker; {{key:Shift}} klippir. `B` velur mörk (Standard-stillingu). Mode og Edge eru sameiginleg með TRIM.

### LINKVIEWS

Stytt heiti: `SYNCVIEWS`; eða {{ui:Sýn}} › {{ui:Meira}} › {{ui:Tengja sýn rúðanna}}, eða tengitáknið á teikniflipunum. `Link the panes' views [ON/OFF]` (Enter tekur hitt ástandið): meðan það er kveikt færir hliðrun eða aðdráttur í virku rúðunni sérhverja rúðu sem sýnir sömu tegund rýmis. Sjá [Skipta skjánum](topic:split-screen).

### OPENIN3D

Engin stytt heiti; eða {{ui:Sýn}} › {{ui:Meira}} › {{ui:Opna í ModelCraft}} þar sem 3D-líkanaforritið tekur við afhentri teikningu. Opnar hana þar í nýjum flipa, sem DWG (ekkert er hlaðið upp). Ef vafrinn lokar fyrir flipann segir hún það.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: hvað ýtt og dregið á auðan stað teiknar. Sama og Stillingar › CadCraft › Dragging to select. Sjá [Lassóval](topic:lasso-selection).

### FILLET

Stytt heiti: `F`. Línur, bogar, hringir og fjöllínur. Prentar fyrst `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` spyr `Specify fillet radius <last>`. `T` spyr `Enter Trim mode option [Trim/No trim]`: með No trim haldast hlutirnir eins og þeir eru og aðeins boginn bætist við.
  - `M` heldur skipuninni gangandi fyrir fleiri horn þar til {{key:Enter}}; `U` tekur síðasta hornið til baka án þess að yfirgefa skipunina.
  - `P` spyr `Select 2D polyline [Radius]` og rúnar hvert horn þar sem tveir beinir hlutar mætast. Ávalar sem fjöllínan hefur þegar eru skipt út fyrir nýja radíusinn; radíus 0 fjarlægir þá. Horn sem hliðar eru of stuttar fyrir radíusinn eru látin vera og talin.
- `Select second object or shift-select to apply corner [Radius]`. Haltu {{key:Shift}} inni meðan þú smellir fyrir skarpt horn, hver sem radíusinn er.

Smelltu á hvern hlut á þeim hluta sem þú vilt halda. Tvær línur sem mætast ekki eru framlengdar. Tvær samsíða línur fá hálfhring yfir bilið, við enda fyrstu línunnar sem er næst smellinum þínum. Hringur er aldrei skorinn. Tveir hlutar sömu fjöllínu sem liggja hlið við hlið fá bogann inni í fjöllínunni; fjöllína og annar hlutur virka þegar skurðurinn lendir á fyrsta eða síðasta hluta fjöllínunnar.

### CHAMFER

Stytt heiti: `CHA`. Línur og beinir hlutar fjöllína. Prentar fyrst núverandi fjarlægðir (eða lengd og horn).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` spyr `Specify first chamfer distance <last>` og `Specify second chamfer distance <the first>`: sú fyrsta er skorin af fyrstu línunni sem þú velur, sú síðari af hinni.
  - `A` spyr `Specify chamfer length on the first line` og `Specify chamfer angle from the first line`.
  - `E` (mEthod) velur hvora af þessum tveimur næsta skálun notar. `T`, `M`, `U` og `P` virka eins og í {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+smellur gerir skarpt horn.

Fjarlægð sem er lengri en línan er hafnað (`Distance is too large.`).

### BREAK og BREAKATPOINT

Stytt heiti: `BR`. `Select object` (þar sem þú smellir er fyrsti punkturinn), `Specify second break point [First point]`; `F` spyr `Specify first break point` og `Specify second break point`. Bilið á milli fer; á hring, rangsælis frá fyrsta punkti. BREAKATPOINT spyr `Specify break point` og skiptir hlutnum í tvennt þar (ekki hring).

### LENGTHEN

Stytt heiti: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: smellur prentar `Current length` (og innhornið ef um boga er að ræða) og spyr aftur. `DE` spyr `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` dregur. Síðan `Select an object to change [Undo]`, endurtekið: endinn sem er næst smellinum færist. Línur, bogar og opnar fjöllínur.

### JOIN

Stytt heiti: `J`. `Select objects to join`. Línur, bogar og opnar fjöllínur sem mætast enda við enda verða að fjöllínum (lokuðum þegar keðjan lokast); línur á sömu línu verða að einni línu; bogar á sama hring verða að einum boga eða hringnum. Sagan segir hve margir hlutir tengdust og hve margir ekki.

### MATCHPROP

Stytt heiti: `MA`, `PAINTER`. `Select source object`, síðan `Select destination objects [Settings]` og {{key:Enter}}. Afritar lag og lit, og milli hluta af sömu gerð textahæð og breidd, málsetningastærðir eða mynstur skyggingar. `S` spyr `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, endurtekið þar til {{key:Enter}}; valið helst fyrir þessa lotu.

### EXPLODE

Stytt heiti: `X`. Fjöllínur verða að línum og bogum, blokkartilvísanir verða að hlutum sínum, málsetningar verða að línum, örvaoddum og texta. Fylki sem helst breytanlegt ({{cmd:ARRAYEDIT}}) verður að venjulegum afritum af hlutum sínum.

- `Select objects`

### GROUP

Stytt heiti: `G`. {{cmd:GROUP}} gefur völdum hlutum nafn sem þeir deila. Veldu hlutina, sláðu síðan inn nafn (ekkert bil; `?` listar hópana; Enter býr til ónefndan hóp) og, fyrir nefndan hóp, valfrjálsa lýsingu. Frá þeim tíma velur smellur á einn þeirra, eða gluggi sem tekur einn þeirra, þá alla, svo þeir færast, afritast og eyðast saman; hver hlutur er samt sinn eigin hlutur. Hlutur getur verið í nokkrum hópum. Afrit af öllum hópnum er nýr ónefndur hópur; afrit af einum meðlim eitt og sér gengur í hópinn. Hópar tilheyra rýminu sem þeir voru búnir til í (líkaninu eða blaði). Þeir haldast þegar þú vistar sem DWG eða DXF og opnar skrána aftur í CadCraft; DXF 2000-skrár bera þá líka sem hópahluti fyrir önnur forrit, og hópar sem búnir voru til í öðru forriti eru lesnir þegar DXF eða DWG er opnuð.

### UNGROUP

{{cmd:UNGROUP}} tekur hópa í sundur: veldu hluti úr hópunum (hver hópur sem þeir eru í er tekinn í sundur) eða slærð inn `Name` og nafn hópsins. Hlutirnir haldast í teikningunni. Eitt afturköllunarskref skilar hópunum aftur.

### GROUPEDIT

{{cmd:GROUPEDIT}} breytir einum hópi. Veldu einn af hlutum hans, eða `Name` og nafn hans; hópur sem þegar er valinn er tekinn eins og hann er. Síðan: `Add` hlutir (valdir einn í einu, ekki hópur fyrir hóp), `Remove` hlutir, `REName` hópinn, breyta `Description` hans, eða stilla `Selectable` (hvort smellur á einn hlut velur allan hópinn). `eXit` eða Enter lýkur. Hópur án hluta er horfinn.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: með `1` (upphafsstillingin) velur smellur eða gluggi á hópuðum hlut allan hópinn; með `0` velst einstakur hlutur, svo þú getir breytt einum meðlim. Haldist fyrir þessa lotu.

## Klippiborð

Eigið klippiborð CadCraft: það virkar innan teikningar, á milli teikninga og á milli CadCraft-flipa í þessum vafra. Sjá [Afrita, líma og tvöfalda](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, eða {{ui:Afrita}} í hópnum {{ui:Breyta}}. Afritar hluti á klippiborðið, ásamt blokkunum og lögunum sem þeir nota. Hlutirnir haldast valdir.

- `Select objects to copy` (sleppt þegar hlutir eru þegar valdir)

### CUTCLIP

{{key:Mod+X}}, eða {{ui:Klippa}} í valmyndinni {{ui:Meira}}. Afritar hluti á klippiborðið og eyðir þeim síðan (eitt afturköllunarskref).

- `Select objects to cut` (sleppt þegar hlutir eru þegar valdir)

### COPYBASE

Afritar hluti á klippiborðið með grunnpunkti sem þú velur; límingin setur þann punkt þar sem hann á að vera.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, eða {{ui:Líma}} í hópnum {{ui:Breyta}}. Afritið fylgir bendlinum, og hangir frá neðra vinstra horni útmarka sinna (eða miðju þeirra, eða grunnpunkti {{cmd:COPYBASE}}; sjá [CadCraft-stillingar](topic:settings)).

- `Specify insertion point`

Límdu hlutirnir eru valdir. Blokk sem teikningin hefur þegar undir sama heiti heldur skilgreiningu þessarar teikningar.

Þegar svæði sem afritað var í MarkupCraft er nýrra en það sem CadCraft afritaði (og er yngra en 6 klukkustunda gamalt), límir {{key:Mod+V}} og `PASTECLIP` það svæði í staðinn: sjá `PASTEAREA`.

### PASTEAREA

Stytt heiti: `PAREA`. {{ui:Líma afritað svæði}} í valmyndinni {{ui:Meira}}. Límir svæði sem afritað var með {{ui:Afrita svæði}} í MarkupCraft sem mynd í réttri stærð. Sjá [Myndir í teikningu](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (aðeins þegar blaðið hafði enga teikningarkvarða): tala, {{key:Enter}} fyrir pappírsstærðina, eða `P`, síðan `First point on the pasted area`, `Second point on the pasted area` og raunveruleg fjarlægð þeirra.

### PASTEORIG

{{key:Mod+Shift+V}}, eða {{ui:Líma á sama stað}} í valmyndinni {{ui:Meira}}. Límir á þeim hnitum sem hlutirnir voru afritaðir af. Spyr einskis.

### DUPLICATE

Stytt heiti: `DUP`. {{key:Mod+D}}, eða {{ui:Tvöfalda og færa}} í valmyndinni {{ui:Meira}}. Afrit af hlutunum fylgir bendlinum frá þeim stað sem þeir eru á; {{key:Esc}} skilur ekkert eftir. Notar ekki klippiborðið.

- `Select objects to duplicate` (sleppt þegar hlutir eru þegar valdir)
- `Specify where the copy goes (Esc leaves nothing)`: smelltu, sláðu inn punkt, `@dx,dy` (frá þeim stað sem bendillinn var á), eða fjarlægð í átt að bendlinum.

### SELECT

Spyr `Select objects` (með öllum valkostunum hér fyrir neðan) og skilur eftir það sem þú valdir valið, fyrir næstu skipun eða fyrir `P` síðar.

### QSELECT

Stytt heiti: `QS`. Í vafranum er það {{ui:Hraðval}}-glugginn (sjá [Velja hluti](topic:select-objects#select-by-a-rule-quick-select)). Án hans spyr skipanalínan `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` og `Enter value`. Samsvarandi hlutir verða valið.

### SELECTSIMILAR

Stytt heiti: `SIM`. `Select objects [SEttings]` (eða núverandi valið): velur sérhvern hlut af sömu gerð með sama lagi og lit (og heiti blokkar, mynstri skyggingar). `SE` spyr `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, endurtekið þar til {{key:Enter}}.

### FIND

Engin stytt heiti; eða {{ui:Breyta}} › {{ui:Meira}} › {{ui:Leita og skipta út}}. Í vafranum er það glugginn {{ui:Leita og skipta út}} (sjá [Bættu við texta og merkingum](topic:text#find-and-replace-words)). Án hans: `Enter text to find`, síðan `Enter replacement text (Enter: select what is found)`. Leitar í texta, eigindagildum og málsetningartexta, á opna flipanum eða í valinu.

### SELECTALL og DESELECT

`SELECTALL` (stytt heiti `AI_SELALL`, {{key:Mod+A}}) velur sérhvern hlut sem þú getur breytt á opna flipanum. `DESELECT` (stytt heiti `AI_DESELECT`, `SELECTNONE`; eða {{key:Esc}}) hreinsar valið.

## Málsetningar

### DIMLINEAR

Stytt heiti: `DLI`, `DIMLIN`. Lárétt eða lóðrétt fjarlægð.

- `Specify first extension line origin [Select object]` (Enter eða `S`: `Select object to dimension`, síðan smellirðu á línu, boga, hring eða hluta fjöllínu)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` spyr um texta (`<>` er mælda gildið), `H` og `V` festa stefnuna, `R` spyr `Specify angle of dimension line <0>`.

### DIMALIGNED

Stytt heiti: `DAL`, `DIMALI`. Sönn fjarlægð milli tveggja punkta.

- Upphafspunktarnir eins og í {{cmd:DIMLINEAR}}, síðan `Specify dimension line location [Text]`.

### DIMANGULAR

Stytt heiti: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Bogi: innhornið hans. Hringur: `Specify second angle endpoint`. Lína: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: smelltu innan hornsins sem á að mæla.

### DIMRADIUS og DIMDIAMETER

Stytt heiti: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, síðan `Specify dimension line location [Text]`.

### DIMCONTINUE

Stytt heiti: `DCO`, `DIMCONT`. Heldur áfram frá síðustu línulegu eða jafnaðri málsetningu sem gerð var (eða spyr `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, endurtekið þar til Enter.

### DIMBASELINE

Stytt heiti: `DBA`, `DIMBASE`. Eins og {{cmd:DIMCONTINUE}}, en sérhver málsetning byrjar á fyrsta upphafspunktinum og er staflað lengra út.

### DIMORDINATE

Stytt heiti: `DOR`, `DIMORD`. `Specify feature location`, síðan `Specify leader endpoint [Xdatum/Ydatum/Text]`. Skrifar hve langt eiginleikinn er frá upphafspunkti UCS eftir X eða Y, á vísi: vísir sem liggur mestmegnis upp eða niður les X, en sá sem liggur til hliðar les Y; `Xdatum` og `Ydatum` festa hvort. Stilltu upphafspunktinn fyrst með {{cmd:UCS}} (án hans er það 0,0 teikningarinnar). Gripin færa eiginleikann, upphafspunktinn og endann á vísinum, og gildið fylgir. Vistuð sem raunveruleg hnitamálsetning í DWG og DXF. Hafnar vísisenda á eiginleikanum sjálfum.

### DIMARC

Stytt heiti: `DAR`. `Select arc or polyline arc segment`, síðan `Specify arc length dimension location [Text]`. Mælir eftir boganum (ekki strengnum) og skrifar bogatáknið fyrir framan gildið. Hafnar heilum hring, línu eða beinum hluta fjöllínu. DWG geymir hana sem málsetningu bogalengdar; DXF geymir hana sem hornmálsetningu með lengdinni sem texta, og CadCraft opnar hana aftur sem málsetningu bogalengdar.

### DIMJOGGED

Stytt heiti: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Radíusmálsetning fyrir feril sem miðjan er langt í burtu frá eða utan blaðsins: málsetningarlínan byrjar á þeim punkti sem þú gefur í stað miðjunnar, með broti í sér, og sýnir samt rétta radíusinn. DWG geymir hana sem brotna radíusmálsetningu; DXF geymir hana sem radíusmálsetningu, og CadCraft opnar hana aftur brotna.

### DIMJOGLINE

Stytt heiti: `DJL`. `Select dimension to add jog [Remove]`, síðan `Specify jog location (or press Enter)`. Setur brotatákn á línu línulegrar eða jafnaðrar málsetningar, til að sýna að fjarlægðin er ekki teiknuð í réttum mælikvarða; gildið breytist ekki. `Remove` tekur það af. Hafnar öðrum gerðum málsetninga.

### QDIM

Engin stytt heiti. `Select geometry to dimension`, síðan `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Málsetur marga hluti í einu skrefi, frá endum lína og hlutum fjöllína, miðjum hringja og boga, punktum og blokkartilvísunum. Staða fyrir ofan eða neðan hlutina mælir yfir þá, og staða til hliðar mælir upp. `Continuous` tengir punktana í keðju, `Baseline` mælir þá alla frá þeim fyrsta, `Staggered` raðar pörum inn frá miðjunni út, `Ordinate` gefur hverjum punkti fjarlægð sína frá gagnapunktinum (`datumPoint` velur nýjan), og `Radius` og `Diameter` málsetja hvern hring og boga sem valinn er. Stillingin er munuð. Allt sem hún býr til er eitt afturköllunarskref. Hún segir til um það þegar færri en tveir punktar eru, eða engir bogar eða hringir fyrir Radius og Diameter.

### DIMBREAK

Stytt heiti: `DBREAK`. `Select dimensions to add or remove breaks`, síðan `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` skilur eftir bil í málsetningar- og framlengingarlínum hvar sem annar hlutur sker þær, og reiknar bilin út aftur þegar þeir eða málsetningin hreyfast. `Manual` (ein málsetning) spyr um tvo punkta og skilur eftir bil á milli þeirra. `Remove` tekur öll bil af. Bilið er 1,5 sinnum textahæð málsetningarinnar.

### DIMSPACE

Engin stytt heiti. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Færir málsetningarlínur samsíða línulegra og jafnaðra málsetninga (eða hornmálsetninga um sama hornpunkt) svo þær séu jafnlangt hvor frá annarri, mælt frá grunnmálsetningunni, hver þeim megin sem hún er. `0` raðar þeim upp við grunnmálsetninguna; `Auto` er tvöfalt textahæð grunnmálsetningarinnar. Málsetningar sem eru ekki samsíða grunnmálsetningunni eru látnar vera.

### DIMINSPECT

Engin stytt heiti. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Teiknar ramma utan um gildið með merkimiða á undan og skoðunartíðninni á eftir. `remove` tekur rammann af. Vikmörk haldast með gildinu.

### DIMOVERRIDE

Stytt heiti: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, aftur þar til Enter, og síðan `Select dimensions`. Breytir þeim stillingum á völdum málsetningum eingöngu; málsetningarstíllinn breytist ekki. Tekur þær breytur sem eru tala eða rofi (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` setur völdu málsetningarnar aftur á stílinn sinn. Hafnar heiti sem er ekki slík breyta og gildi sem hún getur ekki tekið.

### DIMREASSOCIATE

Stytt heiti: `DRE`, `DIMREASSOC`. `Select dimensions`, síðan fyrir hverja þeirra framlengingarlínupunkta hennar (`Specify first extension line origin on an object`: smellur á enda eða miðju línu, horn fjöllínu, miðju; {{key:Enter}} heldur þeim punkti lausum), eða fyrir radíus-, þvermáls-, brotna radíus- eða bogalengdarmálsetningu `Select arc or circle`. Málsetningin er síðan tengd þessum hlutum: þegar þeir hreyfast eða breyta stærð fylgir hún í sama afturköllunarskrefi og mælir aftur. Ef þú færir tengdan punkt með hendi, eða eyðir hlutnum, rofnar tengingin. Tengingin er vistuð í DWG og DXF 2000 sem eigin gögn CadCraft; önnur forrit sjá venjulega málsetningu.

### DIMDISASSOCIATE

Stytt heiti: `DDA`, `DIMDISASSOC`. `Select dimensions`. Losar þær frá hlutunum sem þær eru tengdar við; ekkert færist.

### CENTERMARK

Stytt heiti: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, aftur þar til Enter. Teiknar kross í miðjunni og fjórar miðlínur rétt út fyrir sveigjuna (línutegundin CENTER), sem venjulegar línur á núverandi lagi; stærðin fer eftir örvastærð og heildarkvarða núverandi málsetningarstillinga, og snýst með UCS. Þær fylgja ekki hringnum ef hann hreyfist.

### CENTERLINE

Stytt heiti: `CL`. `Select first line`, `Select second line`. Teiknar línu á miðri leið milli tveggja lína (eftir helmingslínunni þegar þær mætast), aðeins lengri en þær, í línutegundinni CENTER. Venjuleg lína: hún fylgir ekki línunum tveimur.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Engin stytt heiti. Hver spyr `Enter new value for … <current>` og stillir þá stærð fyrir **nýjar** málsetningar: heildarkvarða, textahæð, stærð örva, aukastafi (allt að 8), bil í kringum textann, framlengingu út fyrir málsetningarlínuna, frávik frá upphafspunkti. Sjá [Stilla stærðir málsetninga](topic:dimension-settings).

### DIMLUNIT

Málsetningarstilling: lengdarsnið nýrra málsetninga eingöngu (1 vísindalegt, 2 tugabrot, 3 verkfræðilegt, 4 byggingarlistarlegt, 5 brot).

### DIMSTYLE og -DIMSTYLE

Stytt heiti: `DST`, `DDIM`, `D`. Stjórnandi málsetningarstíla: {{ui:Setja sem núverandi}}, {{ui:Nýr…}}, {{ui:Breyta…}}, {{ui:Endurnefna…}}, {{ui:Eyða}}, {{ui:Bera saman…}}, {{ui:Beita á valið}}. `-DIMSTYLE` á skipanalínunni: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Sjá [Stilla stærðir málsetninga](topic:dimension-settings#named-dimension-styles).

### DIMEDIT og DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, síðan málsetningarnar (eða þær sem þegar eru valdar). New spyr um textann (`<>` = mælingin); Rotate um horn (0 setur textann aftur á sinn stað); Oblique um horn framlengingarlínanna frá X-ásnum (Enter = ekkert; aðeins línulegar og jafnaðar málsetningar). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Sjá [Stilla stærðir málsetninga](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Stytt heiti: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, eða með völdum málsetningum `Units in the text of the selected dimensions`. Skrifar mældu lengdina í þeirri einingu með einingunni á eftir (DIMLFAC og DIMPOST-viðskeyti); `D` fer aftur í einingar teikningarinnar. Sjá [Málsetningar í mm, cm, m eða km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Stytt heiti: `RC`. Prentar `Arc length: … Type: …`, síðan `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular spyr `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand fylgir bendlinum þar til smellur eða {{key:Enter}}; `O` spyr `Select object` og `Reverse direction? [Yes/No] <N>` og breytir hlutnum í skýið. `A` spyr `Specify the length of each arc`. `R`, `P` og `F` velja gerðina fyrir næsta ský. Útkoman er lokuð fjöllína úr bogum.

### MLEADER

Stytt heiti: `MLD`; eða {{ui:Vísir}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, síðan textinn í reitnum á staðnum (eða, án hans, `Enter text (an empty line ends)`). `Block` spyr fyrst um heiti blokkar og fjölvísirinn sýnir þá blokk í stað texta. Fleiri vísilínur: {{cmd:MLEADEREDIT}}. Vistað sem raunverulegur fjölvísir í DWG; DXF geymir vísilínurnar, örvaoddinn og textann sem hún teiknar.

### MLEADEREDIT

Stytt heiti: `MLE`. `Select a multileader`, síðan `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: hver punktur bætir við vísilínu frá nýjum örvaoddi að sama lendingarstað, þar til Enter. `Remove leaders` tekur síðan af vísilínuna sem þú smellir á (fjölvísir heldur að minnsta kosti einni). `Block content` spyr um heiti blokkar og sýnir hana í stað textans (eigindirnar hennar eru spurðar um); `Text content` setur textann aftur. Sérhver vísilína hefur sitt eigið grip. DWG geymir hverja vísilínu og blokkina í einum fjölvísi.

### MLEADERALIGN

Stytt heiti: `MLA`. `Select multileaders`, síðan `Select multileader to align to [Distribute/Spacing/Use current spacing]` og `Specify direction`. Færir lendingar hinna fjölvísanna (og texta þeirra eða blokk) yfir á línuna sem fer í gegnum lendingu þess sem var valinn í þeirri átt; örvaoddarnir haldast þar sem þeir benda. `Spacing` setur þá líka í jafna fjarlægð hvern frá öðrum; `Distribute` spyr um tvo punkta og dreifir þeim jafnt þar á milli. Þarf að minnsta kosti tvo fjölvísa.

### MLEADERCOLLECT

Stytt heiti: `MLC`. `Select multileaders`, síðan `Specify collected multileader location [Vertical/Horizontal]` (Enter heldur stað þess fyrsta). Býr til einn fjölvísi úr nokkrum: blokkarinnihald fer í nýja blokk sem heldur þeim öllum hlið við hlið eða hverjum undir öðrum; textainnihald verður ein athugasemd með línu fyrir hvern. Fyrsti fjölvísirinn heldur vísilínum sínum; hinir eru fjarlægðir. Hafnar blöndu af texta og blokkarinnihaldi.

### TABLE

Stytt heiti: `TB`; eða {{ui:Merkja}} › {{ui:Meira}} › {{ui:Tafla}}. Býr til töflu: einn hlut sem þú færir, afritar, snýrð, skalar og prentar eins og hvern annan, með reitunum geymdum sem gögn.

- `Number of data rows or [Paste/File/Style] <3>`, síðan `Number of columns <3>`, `Text height` og `Top left corner of the table`. Taflan fær titilröð (einn sameinaðan reit) og hausröð fyrir ofan gagnaraðirnar.
- `P`: tafla úr reitum í töflureikni á klippiborðinu (texti með tabúlu á milli reita). Að ýta á {{key:Ctrl+V}} með slíka reiti á klippiborðinu gerir það sama, nema afrit CadCraft sé nýrra (eða CadCraft geti ekki greint það: þá límir það sitt eigið afrit og segir það). `F`: tafla úr `.csv`- eða tabúluaðgreindri skrá. Fyrsta línan verður hausröðin; breiddir dálka passa textanum.
- `S`: velur töflustílinn fyrir þessa töflu (sjá {{cmd:TABLESTYLE}}).
- Hún hafnar fjölda raða eða dálka sem er ekki heil tala, og fleiri reitum en tafla rúmar (2.000 raðir, 200 dálkar, 40.000 reitir).
- {{cmd:EXPLODE}} breytir töflu í línur og texta. Vistuð sem DWG er taflan raunverulegur töfluhlutur sem önnur forrit geta breytt; vistuð sem DXF er hún blokk sem teiknar hana, og CadCraft opnar hana aftur sem töflu.

### TABLEDIT

Stytt heiti: `TABLEEDIT`, `TABEDIT`; eða tvísmelltu á reit. Breytir töflu.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Smelltu á reit, eða þegar tafla er valin, sláðu inn nafn hennar (`B3`: dálkur B, röð 3; titilröðin er röð 1). Í vafranum opnast reitur yfir reitnum: {{key:Enter}} heldur textanum, {{key:Tab}} fer í næsta reit, {{key:Alt+Enter}} byrjar nýja línu, {{key:Esc}} skilur reitinn eftir eins og hann var.
- Texti sem byrjar á `=` er formúla: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, með `+ - * / ^`, sviga og föllum eins og `sqrt` og `round`. Reiturinn sýnir gildið; formúla sem vísar í eigin reit, reit utan töflunnar eða reit án tölu sýnir `####` og skipanalínan segir hvers vegna.
- `R` / `C`: `Insert` eða `Delete` raðir eða dálka við valinn reit (hve margir, og fyrir ofan eða neðan, vinstra eða hægra megin). Formúlur fylgja þeim reitum sem þær vísa í.
- `S`: breidd dálksins og hæð raðarinnar. Röð er aldrei lægri en textinn hennar þarfnast. Valin tafla er einnig með grip á brún hvers dálks og hverrar raðar.
- `M`: sameina frá einum völdum reit að öðrum; `U`: taka sundur. `A`: jöfnun (`TL` efst til vinstri … `MC` miðja miðju … `BR` neðst til hægri). `H`: eigin textahæð þessa reits (0 = hæð stílsins). `K`: gerir röðina að titil-, haus- eða gagnaröð. `CL`: tæmir reitinn.
- Hún hafnar töflu á læstu lagi, að eyða öllum röðum eða dálkum, og sameiningu sem myndi skera annan sameinaðan reit í tvennt.

### TABLESTYLE

Stytt heiti: `TS`. Listar töflustílana með fjölda taflna sem nota hvern, og síðan `Table style: [New/Set/Edit/Delete/Apply]`.

- Stíll geymir textahæð og jöfnun titil-, haus- og gagnaraða, reitaspássíuna, og hvaða jaðrar eru teiknaðir (ytri, á milli raða, á milli dálka).
- `N` býr til stíl út frá núverandi stíl og gerir hann að núverandi stíl; `S` setur núverandi stíl (nýjar töflur taka hann); `E` breytir einum: töflur sem nota hann eru teiknaðar aftur; `A` gefur völdum töflum núverandi stíl; `D` eyðir einum (ekki Standard, ekki núverandi; töflur sem notuðu hann halda útliti sínu).
- Stílar eru vistaðir með teikningunni (DWG og DXF).

### TABLEEXPORT

Vistar það sem tafla sýnir sem CSV-skrá (formúla sem gildi sitt). `Select a table`, eða veldu töflu fyrst. Textareitir sem byrja á `=`, `+`, `-` eða `@` fá fremstu `'` svo töflureiknir keyri þá ekki.

### TABLEPASTE

Stytt heiti: `PASTETABLE`. Býr til töflu úr reitum í töflureikni á klippiborðinu, og spyr síðan um efra vinstra horn hennar. Það sama og {{cmd:TABLE}} › `Paste`.

### DATALINK

Stytt heiti: `DL`. `Data link: [New/List/Remove] <New>`. `N` spyr um CSV-skrá, setur inn töflu úr henni og man heiti skrárinnar; `L` listar tengslin með skrá sinni, stærð, hvenær hún var lesin og hve margar töflur nota hana; `R` fjarlægir tengil (töflur hans verða venjulegar töflur).

### DATALINKUPDATE

Stytt heiti: `DLU`. Les skrá gagnatengils aftur og fyllir aftur töflurnar sem tengdar eru við hana (raðir og dálkar bætast við eða fjarlægjast til samræmis). Vafri getur ekki opnað skrá af sjálfsdáðum, svo hann spyr þig að velja skrána aftur. Ef tenglarnir eru margir spyr hann hvern á að nota.

### FIELD

Setur reit inn í teikninguna: texta sem reiknar sig sjálfur út. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: núna, eða vistuð, búin til eða prentuð dagsetning, og snið (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: skráarheitið, með eða án endingarinnar. `S`: númer blaðsins, titill þess, eða hve mörg blöð eru. `P`: eiginleiki teikningar eftir heiti (sjá {{cmd:DWGPROPS}}). `O`: velur hlut, og síðan hvað á að lesa (flatarmál, lengd, ummál, radíus, þvermál, lag, heiti, x, y, texti, snúningur, litur) og aukastafina. `E`: formúla. `C`: texti með skipunum skrifuðum eins og þær eru, eins og `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Síðan `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: valinn texti fær reitinn bætt við á eftir því sem hann hefur; sama gildir um töfluhólf; blokkartilvísun spyr hvaða eigind; {{key:Enter}} spyr um hæð og punkt fyrir nýjan texta.
- Á skjánum er reitur með ljósgráum bakgrunni; prentun og PDF hafa hann aldrei. Ef þú skrifar yfir texta reitsins með hendi endar reiturinn. Reitur sem ekki er hægt að reikna út sýnir `####`.
- Hlutareitur finnur hlut sinn með lyklinum sem CadCraft geymir á hlutunum (Stillingar › CadCraft › Merge-friendly files); með lyklum slökkt hafnar hann.

### UPDATEFIELD

Stytt heiti: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` stillir hvenær reitir uppfærast af sjálfu sér: skrifaðu stafina `O` open, `S` save, `P` plot, `R` regen (allir fjórir til að byrja með), eða `NONE`.

### DWGPROPS

Stytt heiti: `DRAWINGPROPS`. Listar eiginleika teikningarinnar, síðan `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Fyrstu sex eru þeir sem spjaldið {{ui:Eiginleikar teikningar}} sýnir; `U` bætir við þínu eigin nafni og gildi, `R` fjarlægir eitt. Reitir lesa þá (`%<prop:title>%`, `%<prop:Client>%`) og fylgja strax. Hún hafnar eigin heiti sem er eitt af innbyggðu heitunum eða inniheldur `%`, `<`, `>`, gæsalöpp eða öfugan skástrik.

## Parametrískt

Sjá [Þvinga teikningu](topic:constraints) og [Nota breytur og jöfnur](topic:parameters). Þvinganir virka á flipanum {{ui:Líkan}}.

### GEOMCONSTRAINT og GC-skipanirnar

Stytt heiti `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, síðan spurningar þeirrar skipunar.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (sá seinni færist).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT og DC-skipanirnar

Stytt heiti `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (tala, segð, eða `name=expression`).
- {{cmd:DCALIGNED}}: eins og að ofan, með `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` spyr um vikmörk fjarlægðar og horns.
- {{cmd:DELCONSTRAINT}} (stytt heiti `DELCON`): `Select objects`; þvinganir þeirra fara.
- {{cmd:CONSTRAINTBAR}} (stytt heiti `CBAR`): `Select objects [Showall/Hideall]`, síðan `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS og -PARAMETERS

{{cmd:PARAMETERS}} (stytt heiti `PAR`, `PARAM`) opnar spjaldið {{ui:Breytur}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Stytt heiti `SWMACRO`. Hleður niður þjóvi (.swb) sem endurbyggir líkanið sem eina þvingaða skissu í SolidWorks. Sjá [Færa skissur til og frá öðrum hlutateiknurum](topic:solidworks-sketches).

## Blokkir

### ANNOSCALE

Stytt heiti: `CANNOSCALE`. Segir skýringarkvarða teikningarinnar og hve marga skýringarhluti hún geymir, og spyr síðan `New annotation scale`: slærð inn `1:50`, `1:100`, `2:1`, bara tölu (`50` er 1:50) eða heiti eins af eigin kvörðum teikningarinnar. Sérhver skýringartexti og málsetning er stækkuð eða minnkuð svo hún prentist í sömu stærð á nýja kvarðanum, í einu afturköllunarskrefi; hlutir sem eru ekki skýringarhlutir eru látnir vera, og eins hlutur sem heldur lista yfir kvarða án nýja kvarðans ({{cmd:OBJECTSCALE}}). Sjá [Einingar, blöð og kvarðar](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Stytt heiti: `OBJSCALE`. `Select annotative objects`, síðan `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Skýringartexti eða málsetning geymir lista yfir skýringarkvarða. `Add` og `Delete` spyrja um kvarða (`1:50`, `2:1`, bara tölu, eða heiti eins af eigin kvörðum teikningarinnar); `Current scale` bætir við skýringarkvarða teikningarinnar; `List` prentar kvarða hvers hlutar. Sýnigluggi sem hefur kvarða hlutarins á lista sýnir hann í þeirri stærð sem prentar pappírshæð hans á þeim kvarða, á skjánum og í prentun. Síðasta kvarðann er ekki hægt að eyða. Hlutir sem eru ekki skýringarhlutir eru skildir eftir: kveiktu fyrst á Annotative í Properties. Listarnir eru vistaðir í DWG og DXF sem eigin gögn CadCraft. Sjá [Einingar, blöð og kvarðar](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Stytt heiti: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Kveikt (eins og teikning byrjar): skýringarhlutur birtist líka í sýnigluggu, eða í líkaninu, þar sem kvarði hans er ekki á listanum, í þeirri stærð sem hann hefur. Slökkt: hann birtist þar ekki og ekki er hægt að velja hann í líkaninu. Rofinn er eitt afturköllunarskref; hann er ekki geymdur í skránni.

### SCALELISTEDIT

Stytt heiti: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` þar til {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit og Delete spyrja um heiti kvarðans. Eigin kvarðar teikningarinnar bætast í kvarðalista sýnigluggans og prentunar og eru vistaðir með teikningunni. Sjá [Einingar, blöð og kvarðar](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT og PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: punktar sem ferillinn fer í gegnum; `Close`, `Undo`, síðan `Start tangent` og `End tangent` (punktur, eða {{key:Enter}}). Method › Control vertices spyr um gráðu (1 til 5) og teiknar út frá stjórnmarghyrningi. Object breytir fjöllínum í splines í gegnum hnitpunktana þeirra. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` fyrir nokkra hluti; línur, bogar og splines eru fyrst boðnir sem fjöllínur. Sjá [Splines og fjöllínur](topic:splines).

### BLOCK

Stytt heiti: `B`, `BMAKE`.

- `Enter block name`. Ef hún er til: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Þeir eru skipt út fyrir eina tilvísun í nýju blokkina.

### WBLOCK

Stytt heiti: `W`, `-WBLOCK`. Skrifar blokk, nokkra hluti eða alla teikninguna í nýja DWG- eða DXF-skrá. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (hann verður upphafspunktur nýju teikningarinnar), `Select objects`, síðan `File format [DWG/DXF/R12 DXF]` og `File name for the new drawing`, og síðan `What to do with the objects [Retain/Convert to block/Delete]`. Convert skiptir þeim út fyrir eina tilvísun í blokk með heiti skráarinnar; Delete fjarlægir þá.
- **Block**: `Block to write out`. Eigin hlutir blokkarinnar, með grunnpunkti hennar sem upphafspunkti, líka innbyggðar blokkir.
- **Entire drawing**: sérhver hlutur í líkanrýminu. Blöð eru ekki skrifuð; notaðu {{cmd:SAVEAS}} fyrir afrit sem heldur þeim.

Nýja skráin geymir aðeins lögin, línutegundirnar, texta- og málsetningastílana og blokkirnar sem hlutirnir hennar nota, og einingar teikningarinnar. Útgáfa DWG er sú sem {{cmd:SAVEAS}} notaði síðast. Í vafranum er skráin sótt; í Studio opnast vistunarglugginn.

### ATTDEF

Stytt heiti: `ATT`, `DDATTDEF`, `-ATTDEF`; eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Skilgreina eigind}}. Prentar stillingarnar, síðan `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` ef fasti), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} tekur eigindaskilgreiningarnar inn í blokkina.

### EATTEDIT og ATTEDIT

`EATTEDIT` (`DDATTE`, eða tvísmelltu á tilvísun með eigindum; {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Breyta eigindum}}): `Select a block reference with attributes`, síðan glugginn {{ui:Breyta eigindum}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): sama tilvísun, síðan `<prompt> (<TAG>) <value>` fyrir hverja eigind; {{key:Enter}} heldur gildi. Sjá [Eigindir](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Gildi haldast; nýjar eigindir fá sjálfgildi sitt, fjarlægðar fara, staðsetningar endurstillast.

### BATTMAN

{{ui:Blokkir}} › {{ui:Meira}} › {{ui:Eigindastjóri}}. Glugginn: blokkin, eigindirnar (merki, spurning, sjálfgildi, stillingar, röð), {{ui:Uppfæra tilvísanir (gildi haldast)}}, {{ui:Nota}}.

### REFEDIT og REFCLOSE

{{ui:Blokkir}} › {{ui:Meira}} › {{ui:Breyta á staðnum}}. `REFEDIT`: `Select the block reference to edit in place` (eða valið). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Vista blokkina}} og {{ui:Henda}} á stikunni gera það sama. Öll breytingin er eitt afturköllunarskref. Sjá [Eigindir](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT og BCLOSE

`BE`; eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Breyta blokk}}. `Enter block name to edit <the selected reference's block>` opnar blokkaritilinn. `BCLOSE` spyr `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Vista blokk}} og {{ui:Henda breytingum}} í borðanum gera það sama. Allt sem gert er í ritlinum er eitt afturköllunarskref.

### VIEWBASE

Stytt heiti: `FLATSHOT`. Flöt 2D-sýn af föstu formunum á 3D-flipanum: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, kvarði (`1:20`, `2:1`; {{key:Enter}} tekur þann sem passar blaðinu), síðan miðja sýnarinnar. Ein blokkartilvísun, sýnilegar brúnir á VIEW-VISIBLE, faldar brúnir strikaðar á VIEW-HIDDEN. Sjá [Flatar sýnir á blaði](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Stytt heiti: `-PUBLISH`; eða {{ui:Öll blöð í einni PDF}} í glugganum {{ui:Prenta í PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} prentar öll blöð, `S` spyr um heiti aðskilin með kommum. Ein PDF-skrá, síða og bókamerki fyrir hvert blað. Sjá [Öll blöð í einni PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Stytt heiti: `SSM`, `SHEETSETMANAGER`. Fer með þig í hlutann {{ui:Blaðasett}} í vinstra spjaldinu: blöð úr mörgum teikningum, númeruð og titluð, titilreitir þeirra fylltir út úr settinu, birt sem ein PDF-skrá. Sjá [Blaðasett](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): veldu DWG- eða DXF-skrá, síðan innsetningarpunkt hennar. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; með fleiri en einum tengli velurðu eina af tilvísunum hans eða slærð inn `N` og heiti hennar. Sjá [Tengdar teikningar](topic:files#linked-drawings-external-references).

### COUNT

Stytt heiti: `BCOUNT`; eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Telja blokkir}}. `Select a block reference to count, or [All/Export] (Enter: All)`: smellur velur og telur sérhverja tilvísun í þá blokk í þessu rými; {{key:Enter}} eða `A` listar þær allar; `E` og síðan `C` (fjöldi) eða `A` (eigindir) hleður niður CSV-skrá. Sjá [Telja blokkir og flytja út áætlun](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Stytt heiti: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (hástafir skipta ekki máli). `F` spyr um DWG- eða DXF-skrá, og síðan alla teikninguna eða eina af blokkum hennar; heiti sem þegar er notað spyr um {{ui:Halda núverandi}} eða {{ui:Endurnefna}}. `L` opnar safnspjaldið.
- `Specify insertion point [Scale/Rotate]`. `S` spyr `Specify scale factor`, `R` spyr `Specify rotation angle`; hvort tveggja er munað.
- Þegar blokkin stendur þegar við hliðina á hlutum sem endurtaka sig annars staðar án hennar, segir lína hve margir staðir eru stungnir upp á, og spurningin fær `suGgested`: `G` sýnir þá; smelltu nálægt einum til að setja blokkina þar, `A` fyrir alla, {{key:Enter}} til að fara til baka. Þeir taka snúning nágrannanna og sjálfgildi eigindanna. Teikningar með meira en 20.000 hlutum í opna rýminu eru ekki leitaðar.
- Síðan `Enter <prompt> (<TAG>) <default>` fyrir hverja eigind sem blokkin spyr um. Sjá [Blokkareigindir](topic:attributes).

### LIBRARY

Stytt heiti: `LIB`. Opnar safnspjaldið: setja inn hluti, athuga uppfærslur, þakkir safnsins. Engar spurningar. Sjá [Setja inn úr skrá eða safninu](topic:insert-from-file-and-library).

### STEELMEMBER

Stytt heiti: `SMEMBER`; eða {{ui:3D-bitahluti}} á flipanum {{ui:Staðlaður (S)}} í safninu. `Section size <W12x26>` (eins og flipinn skráir það), síðan `Start point [Column]` og `End point`: fastur bjálki á 3D-flipanum á milli punktanna tveggja, á jörðinni. `C` spyr um grunnpunkt súlunnar og hæð hennar. Eitt afturköllunarskref. Sjá [Setja stálsnið og staðlaða hluti](topic:steel-and-standard-parts).

### PARTSLIST

Stytt heiti: `PLIST`. `Top left corner of the parts list`, síðan `Text height <2.5>`: teiknar töflu yfir sérhvern staðlaðan hlut og stálsnið sem sett er úr safninu (hlutanúmer, magn, hlutur, staðall, stærð, lengd, efni, massi). Eitt afturköllunarskref. Sjá [Setja stálsnið og staðlaða hluti](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Stytt heiti: `PU`. Fjarlægir blokkarskilgreiningar sem ekkert notar. Engar spurningar.

### DELBLOCKS

Eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Eyða blokkum}}. `Select block to delete [Name/eXit]`: veldu blokkartilvísun, eða `N` fyrir lista yfir blokkir með síu (veldu nokkrar), eða `X` / {{key:Enter}} til að ljúka. Sérhver tilvísun fer — í líkaninu, á hverju blaði og innan annarra blokka — og síðan skilgreiningin, og skipanalínan segir hvað var eytt og hvað ekki tókst. Ónefndar blokkir og tengdar teikningar eru ekki boðnar. Spurningin kemur aftur fyrir næstu blokk; öll skipunin er eitt afturköllunarskref.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} límir það sem þú afritaðir ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) sem eina blokk: veldu innsetningarpunktinn og þangað fer ein tilvísun í nýja blokk, valin. Blokkin fær eigið heiti (`A$C` og tala); {{cmd:RENAME}} gefur henni þitt. Eitt afturköllunarskref fjarlægir tilvísunina og blokkina.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} spyr um blokkina sem á að skipta út og blokkina sem á að setja í staðinn (`?` listar blokkirnar), og breytir síðan sérhverri tilvísun í líkaninu, á hverju blaði og innan annarra blokka. Hver tilvísun heldur stað sínum, kvarða, snúningi, lagi og gildum eigindanna sem báðar blokkirnar hafa; eigindir sem aðeins nýja blokkin hefur byrja á sjálfgildum sínum, og hún segir þér hvaða gildi féllu niður. Þegar ekkert notar gömlu blokkina lengur býðst að fjarlægja hana. Hún hafnar tengdum teikningum og skiptiblokk sem setti blokk inn í sjálfa sig. Eitt afturköllunarskref.

### MINSERT

{{cmd:MINSERT}} setur blokk í raðir og dálka: heiti blokkar, innsetningarpunktur, kvarði, snúningur, fjöldi raða og dálka, og bilin á milli þeirra. Allt settið snýst með snúningnum. Hver og ein er sín eigin tilvísun (10.000 í mesta lagi), svo hægt er að færa eða eyða hverri þeirra síðar.

### BLOCKSPALETTE

Stytt heiti: `BLOCKSPAL`; eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Blocks panel}}. Sýnir {{ui:Blokkir}}-spjaldið með bendilinn í síunni. Hver blokk hefur litla mynd; þær sem síðast voru settar eru fyrstar. Tveir hnappar við síuna skipta á milli lista og rastar af myndum. Smelltu á mynd (eða {{ui:Setja inn}}) til að setja blokkina með {{cmd:INSERT}}, eða dragðu hana á teikninguna til að setja hana þar sem þú sleppir henni.

{{ui:Libraries}}, undir listanum: {{ui:Add a drawing}} tekur DWG- eða DXF-skrá sem þú átt og skráir blokkir hennar með myndum, og alla teikninguna sem eina blokk. Þegar þú setur eina þeirra er skilgreining hennar (og blokkirnar sem hún hreiðrar, og lög þeirra) afrituð inn í þessa teikningu, eins og valkosturinn `File` í {{cmd:INSERT}} gerir; blokk sem er þegar hér með sömu skilgreiningu er notuð án spurningar, en sú sem heitir eins og er ólík spyr {{ui:Halda núverandi}} eða {{ui:Endurnefna}}. Í vafra helst skráin þar til síðan lokast. Í CadCraft Studio listar {{ui:Add a folder}} teikningarnar í möppu, hver opnuð þegar þú smellir á hana, og skrár og möppur eru munaðar. Litla x-ið fjarlægir safn af listanum; skráin er ekki snert. Sameiginlega {{ui:Library}} er annað mál: sjá [Setja inn úr skrá eða safninu](topic:insert-from-file-and-library).

### BCONVERT

Eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Convert repeats to blocks}}. Finnur rúmfræði sem endurtekur sig og breytir sérhverju afriti í tilvísun í eina blokk.

- `Select the objects that repeat, or [Block]`: hlutirnir í einu afriti. `B` nefnir þess í stað blokk sem fyrir er, til að finna laus afrit af hlutum hennar.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` og `P` skipta um hvað telst afrit; {{key:Enter}} leitar. Stillingarnar eru munaðar.
- `Name for the new block <Block1>`, síðan `Specify the block's base point` ({{key:Enter}} tekur neðra vinstra horn valsins).
- Hún segir hve mörg önnur sett hluta eru sama rúmfræði, dregur fram allt sem hún myndi skipta út og spyr `Yes/No`.

Afrit er sömu hlutirnir færðir og snúnir í hvaða horn sem er (og speglaðir eða skalaðir með einum stuðli þegar það er kveikt): sérhver hlutur verður að eiga sinn hliðstæðu, innan einnar milljónustu af stærð valsins. Hver tilvísun fær sinn snúning og kvarða (speglaðri fær neikvæðan Y-kvarða), og lagið sem hlutirnir deildu. Hlutir á læstum lögum eru látnir vera og taldir. Hún leitar í opna rýminu (líkaninu eða opna blaðinu). Mjög stór leit stöðvast við vinnumörk og segir það. Eitt afturköllunarskref.

### BSEARCH

Eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: hluti úr blokkarheiti, eða mynstur með `*` og `?`. Listar hverja blokk með tilvísunum sínum hér og í allri teikningunni.
- `A`: eigindagildi, eða `TAG=value`. Listar blokkirnar sem tilvísanir þeirra halda, með gildunum sem fundust. Fastar eigindir teljast.
- `G`: veldu hluti, eða eina blokkartilvísun, og blokkirnar sem eru að minnsta kosti 85% líkar eru skráðar, best fyrst. Stærð, snúningur og speglun telja ekki. Mælingin ber saman fjarlægðir milli punkta sem dreifast eftir útlínunum, svo hún finnur líka eftirlíkingar; notaðu {{cmd:BCONVERT}} til að finna nákvæm afrit.

Tilvísanirnar sem finnast í opna rýminu eru valdar, tilbúnar fyrir næstu skipun.

### BREPLACE

Eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` skiptir út blokkartilvísunum sem þú velur fyrir blokkina sem þú nefnir; `A` spyr um blokk og skiptiblokk hennar og breytir sérhverri tilvísun, eins og {{cmd:BLOCKREPLACE}} gerir (sami kóði). Tilvísun heldur stað sínum, kvarða, snúningi, lagi og gildum eigindanna sem báðar blokkirnar hafa; gildi sem nýja blokkin hefur ekki pláss fyrir falla niður og eru nefnd. `?` listar blokkirnar. Eitt afturköllunarskref.

### DATAEXTRACTION

Stytt heiti: `EATTEXT`, `DX`; eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Data extraction}}. Listar blokkir, eigindir þeirra og eiginleika hluta sem töflu eða CSV-skrá.

- Vinnur á valinu, eða spyr `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` þegar valið hefur hvort tveggja. Ónefndar blokkir, töflur og efnislistar eru aldrei skráðir.
- Hún prentar dálkana sem hægt er að velja (heiti, gerð, lag, X, Y, snúningur, kvarði, lengd, flatarmál, litur, línutegund, rými, og einn fyrir hvert eigindamerki), síðan `Columns, by name or number with commas between`. {{key:Enter}} tekur þá sem eru merktir með stjörnu: heitið og sérhverja eigind fyrir blokkir; gerð, lag og lengd fyrir hluti.
- `Put identical rows together with a count? [Yes/No] <Yes>`, síðan `Put the list in a: [Table/Csv] <Table>`. Tafla er venjuleg tafla ({{cmd:TABLEDIT}} breytir henni) og er ekki lifandi: keyrðu skipunina aftur þegar teikningin breytist.
- Hún hafnar dálki sem er ekki á listanum. Tafla geymir 1.999 gagnaraðir; CSV-skrá tekur þær allar.

### COUNTTABLE

Telur blokkartilvísanir í valinu (eða í opna rýminu) og setur fjöldann í töflu (`Block`, `Count`) eða CSV-skrá. Fyrir fjölda sem fylgir teikningunni sjálfkrafa sjá {{cmd:BOMTABLE}}.

## Blöð og prentun

### LAYOUT

Stytt heiti: `LO`, `NEWLAYOUT`; eða {{ui:+}}-hnappurinn undir teikningunni. Nýtt blað með ramma, titilreit og einum sýnigluggu, á ISO A3 (eða Tabloid fyrir teikningar í tommum eða fetum). Engar spurningar.

### MVIEW

Stytt heiti: `MV`. Aðeins á blaði ({{cmd:VPORTS}} á blaði gerir það sama).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Sýnigluggi sýnir allt líkanið í staðlaðum kvarða.
- `P` (Polygonal): smelltu á hornin á útlínunni (`Undo`, `Close`), {{key:Enter}} þegar búið. Hafnar færri en þremur hornum.
- `O` (Object): `Select a closed object for the viewport's outline`: lokuð fjöllína, hringur eða sporbaugur á blaðinu. Sýnigluggi tekur lögun hans (bogar sem stuttir beinir hlutar); hluturinn er látinn vera eins og hann var. Hafnar hlut sem er ekki lokaður.

### VPCLIP

Klippir sýnigluggu sem er þegar á blaðinu. `Select viewport to clip` (eða veldu hann fyrst), síðan `Select the object to clip to [Polygonal/Delete]`:

- Smelltu á lokaða fjöllínu, hring eða sporbaug, eða {{key:Enter}} (eða `P`) til að smella á horn marghyrnings.
- `D` (Delete, boðið þegar sýnigluggi er klipptur) gerir hann aftur að rétthyrningi: kassanum utan um útlínuna sem hann hafði.
- Það sem sýnigluggi sýnir færist ekki á pappírnum og kvarðinn hans helst. Líkanið er teiknað og prentað aðeins innan útlínunnar, og rammin fylgir henni. Eitt afturköllunarskref.
- Klipptur sýnigluggi hefur grip á hverju horni útlínunnar, auk miðju sinnar og fjögurra horna kassans (að draga horn kassans teygir útlínuna með því). Properties sýnir Outline: Rectangle, eða Clipped með fjölda horna.
- DWG- og DXF 2000-skrár geyma útlínuna fyrir CadCraft. Önnur forrit opna sýnigluggann sem rétthyrninginn utan um hana; DXF R12 geymir aðeins rétthyrninginn.
- Á líkanflipanum segir hún að sýnigluggar séu á blöðum.

### VPORTS

Stytt heiti: `VIEWPORTS`. {{cmd:SPLIT}} er það sama af blaði líka, og {{ui:Sýn}} › {{ui:Meira}} › {{ui:Skipta hlið við hlið}}, {{ui:Skipta lóðrétt}}, {{ui:Fjórar rúður}}, {{ui:Ein rúða}} keyra hana. Á líkaninu: `Enter number of panes [SIngle/2/3/4] <3>`; `2` spyr `[Horizontal/Vertical] <Vertical>` (Vertical = hlið við hlið), `3` spyr `[Left/Right] <Right>` (hvar stóra rúðan fer). Hver rúða heldur eigin sýn og rými; smellur gerir rúðu virka. Á blaði er það {{cmd:MVIEW}}. Sjá [Skipta skjánum](topic:split-screen).

### VPVIEW

Engin stytt heiti. Aðeins á blaði.

- `Select viewport` (sleppt ef einn er valinn), síðan á líkaninu: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Engin stytt heiti. Hnitakerfi sem þú átt sjálf; ekki breyting. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: punktur er nýr upphafspunktur, síðan `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: upphafspunktur, punktur á jákvæða X-ásnum, punktur á jákvæðu Y-hliðinni. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` og heiti. Sýnin snýst svo nýi X-ásinn sé lárétt. Sjá [Snúa sýninni og nota eigin hnit](topic:ucs-and-turned-view).

### PLAN

Engin stytt heiti. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: snýr sýn virku rúðunnar svo X-ás UCS (eða heimsins) sé lárétt. Ekkert í teikningunni færist.

### TURNLEFT, TURNRIGHT, TURNWORLD

Engin stytt heiti; eða {{ui:Sýn}} › {{ui:Meira}} › {{ui:Snúa sýn 90° til vinstri}}, {{ui:Snúa sýn 90° til hægri}}, {{ui:Til baka í heiminn}}. Það sama og `UCS Z -90`, `UCS Z 90` og `UCS W`, með sýninni á eftir.

### VPLAYER

Engin stytt heiti. Á blaði, eða inni í sýnigluggu. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` spyrja um heiti laga (með kommum og `*` og `?` sem stafasköpum), síðan `[All/Select/Current] <Current>` sýnigluggar; Reset setur hvert lag aftur á sjálfgildi sitt „frosið í nýjum sýnigluggum“; `V` stillir það sjálfgildi (`[Frozen/Thawed]`), sem {{cmd:MVIEW}} notar. `?` listar lögin sem eru fryst í núverandi sýnigluggu. Dálkurinn fyrir sýnigluggana í Lagaglugganum gerir það sama fyrir einn sýnigluggu. Sjá [Frysta lag í einum sýnigluggu](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Stytt heiti: `MS`; eða tvísmelltu inni í sýnigluggu. Aðeins á blaði. Vinna á líkaninu í gegnum sýnigluggu: þann sem er valinn, þann eina á blaðinu, eða `Click inside the viewport to work in`. Hliðrun og aðdráttur inni í honum breyta sýn sýnigluggans (sá sem er læstur á skjánum heldur henni og blaðið hreyfist í staðinn); nýja sýnin er skráð sem eitt afturköllunarskref. Sjá [Vinna á líkaninu í gegnum sýnigluggu](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Stytt heiti: `PS`; eða tvísmelltu utan sýnigluggans, eða smelltu á flipa undir teikningunni. Aftur á blaðið.

### PLOT

Stytt heiti: `PRINT`, `PUBLISH`, `EXPORTPDF`; eða {{key:Mod+P}}. Opnar gluggann {{ui:Prenta í PDF}}. Sjá [Prenta í PDF](topic:plot-pdf).

### PLOTSTYLES

Stytt heiti: `STYLESMANAGER`, `PSTABLES`; eða {{ui:Breyta töflum…}} í glugganum {{ui:Prenta í PDF}}. Opnar {{ui:Prentstílstöflur}}: hvað hver litur prentast sem (litur, grár, blek, línuþykkt), geymt með teikningunni. Sjá [Prentstílstöflur](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} færir hluti á milli blaðs og líkansins í gegnum sýnigluggu, skalaða og snúna svo þeir líti eins út frá hinni hliðinni. Á blaði velurðu hluti og þeir fara í líkanið (veldu sýnigluggann þegar blaðið hefur fleiri en einn). Meðan þú vinnur á líkaninu í gegnum sýnigluggu ({{cmd:MSPACE}}) fara valdir hlutir á blaðið. Hún segir hve margfalt stærri eða minni þeir urðu. Sýnigluggar haldast á sínu blaði. Eitt afturköllunarskref.

### ISODRAFT

{{cmd:ISODRAFT}} kveikir eða slekkur á samsætri teikningu `ON` eða `OFF`, eða fer beint á planið `Left`, `Top` eða `Right`. Meðan hún er kveikt: Ortho ({{key:F8}}) heldur línum á ásum planssins tveimur (vinstri: 90° og 150°; efra: 30° og 150°; hægra: 30° og 90°), skáhornsrakning ({{key:F10}}) fylgir sömu ásum, smellur á ristina ({{key:F9}}) notar samsæta ristina, og ristin ({{key:F7}}) er teiknuð með línum í 30°, 90° og 150°. {{cmd:ELLIPSE}} fær `Isocircle`: gefðu miðju og radíus (eða `Diameter`) og hún teiknar sporbauginn sem hringur birtist sem á núverandi plani. Teikningin er áfram flöt: þetta eru hjálpartæki til að teikna myndræna sýn, ekki 3D-líkan. Stillingin gildir fyrir þessa lotu og er ekki vistuð í skránni.

### ISOPLANE

{{cmd:ISOPLANE}} velur planið sem samsæt teikning vinnur á: `Left`, `Top` eða `Right`. Enter fer á næsta plan. Meðan samsæt teikning er kveikt gerir {{key:F5}} það sama í miðri skipun; meðan hún er slökkt er {{key:F5}} látið í vafranum.

## Fyrirspurnir

### CAL

Prentar niðurstöðu útreiknings, eins og hann væri lesinn hvar sem lengd er slegin inn.

- `Expression`: slærðu hann inn, til dæmis `12'6"+3/4"` eða `(24'-0")/3`, og ýttu á {{key:Enter}}. CadCraft prentar `= 12'-6 3/4"   (150.75 drawing units)`. Sjá [Reiknireikningur í innslegnu gildi](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Stytt heiti: `DI`; eða {{ui:Sýn}} › {{ui:Meira}} › {{ui:Mæla fjarlægð}}.

- `Specify first point`, `Specify second point`. Prentar fjarlægð, horn, Delta X og Delta Y.

### AREA

Stytt heiti: `AA`; eða {{ui:Sýn}} › {{ui:Meira}} › {{ui:Flatarmál}}. Prentar flatarmál og ummál.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Smelltu eða slærð inn horn; við `Specify next point (Enter closes) [Undo]` ýtirðu á {{key:Enter}} til að loka útlínunni. `U` tekur síðasta hornið til baka.
  - {{key:Enter}} eða `O`, síðan `Select object`: hringur (prentar ummál hans), sporbaugur, fjöllína (opin fjöllína er lokuð með beinni línu fyrir flatarmálið, og lengd hennar er prentuð), eða skygging (göt eru dregin frá).
  - `A` (Add area) og `S` (Subtract area) halda samanlagðri tölu: spurningin byrjar á `(ADD mode)` eða `(SUBTRACT mode)`, hvert flatarmál er lagt við eða tekið frá, og `Total area = …` er prentað eftir hvert. Í þessum stillingum velur `O` hluti þar til {{key:Enter}}, og {{key:Enter}} við fyrstu spurninguna lýkur skipuninni.

### MEASUREGEOM

Stytt heiti: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; eftir hverja mælingu spyr hún aftur, með `eXit` sem sjálfgildi.

`Quick` mælir í kringum bendilinn þegar þú færir hann: fjarlægðina að næsta hlut til hægri, ofan, vinstri og neðan (eftir ásum núverandi UCS), teiknuð eftir því sem þú ferð, og hornið þar sem tveir af þessum nágrönnum eru beinir og mætast. Smellur skrifar fjórar fjarlægðirnar, lausa breidd og hæð og hornin í söguna; Enter fer aftur í valkostina. Hún les það sem er á skjánum.

- `D`: tveir punktar, eins og {{cmd:DIST}}.
- `R`: `Select arc or circle`; prentar radíus og þvermál.
- `A`: bogi (innhornið hans), lína og síðan önnur lína (hornið á milli þeirra, í átt að fjarlægari endum þeirra), eða {{key:Enter}} og þrír punktar (hornpunktur, síðan endarnir tveir).
- `AR`: eins og {{cmd:AREA}}, eitt flatarmál.

### ID

Engin stytt heiti. `Specify point`; prentar X og Y.

### LIST

Stytt heiti: `LI`, `LS`. `Select objects`; prentar gerð, lag og helstu mál hvers hlutar.

### MASSPROP

{{cmd:MASSPROP}} gefur þversniðseiginleika svæðanna og lokuðu hlutanna sem þú velur, teknum saman: flatarmál, ummál, afmörkunarkassa, miðju, tregðuvægi um X- og Y-ása í gegnum upphafspunktinn, tregðuafurðina, snúningsradíusa, sömu vægi um miðjuna, og aðalvægin ásamt stefnu aðalásanna. Göt í svæði teljast göt. Tölurnar eru í einingum teikningarinnar og nákvæmar fyrir útlínur úr línum og bogum; sporbaugar og splines eru mældir sem stuttir beinir hlutar, og það er sagt. Eftir skýrsluna spyr hún hvort skrifa eigi hana í textaskrá. Hlutir sem eru ekki lokaðir eru skildir eftir, og hún segir hve margir það eru.

## Sýn, skrá og annað

### ZOOM

Stytt heiti: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Smelltu á tvö horn fyrir glugga. `E`, `A` eða Enter: öll teikningin.
- `P` (Previous, eða {{ui:Fyrri}} á verkfærastikunni) fer aftur í sýnina á undan, allt að 10 sýnum á flipa; röð af hjólsmellum eða einni hliðrun telst sem ein sýn.
- Tala eins og `2`, `2x` eða `0.5x` (eða `S` og síðan talan) þysjar inn eða út um þennan stuðul í miðju skjásins.
- `C` spyr `Specify center point` og `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT og PDF-skipanirnar

Stytt heiti: `PDFATT` fyrir {{cmd:PDFATTACH}}, `PDFIM` fyrir {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} setur PDF-síðu undir teikninguna (skrá, síða, innsetningarpunktur, kvarði, snúningur); {{cmd:PDFIMPORT}} breytir línum, boga, fyllingum og texta síðu í hluti teikningarinnar á lögum sem heita eftir PDF-skránni, í raunverulegri stærð, eftir slegnum kvarða, eða skölduð út frá tveimur punktum og raunverulegri fjarlægð. {{cmd:PDFCLIP}} klippir undirlögn, {{cmd:PDFADJUST}} stillir dofnun, andstæðu, einlitun eða slekkur á henni, {{cmd:PDFLAYERS}} kveikir og slekkur á eigin lögum PDF-skrárinnar, og {{cmd:PDF}} gefur CadCraft skrárnar sem undirlagnir teikningar nota aftur. Sjá [PDF-undirlagnir](topic:pdf-underlay).

### AUTOCOMPLETE

Stytt heiti: `AUTOC`. Sjálfvirk útfylling í teikningu: þegar engin skipun er í gangi sýnir grá draugamynd hvað mynstur teikningarinnar segja að komi næst. {{cmd:AUTOCOMPLETE}} kveikir á henni `On` eða slekkur `Off` (líka í Stillingar › CadCraft) eða `Show`ar hvað hún myndi stinga upp á núna. **Tab** teiknar draugann sem eitt afturköllunarskref, **Esc** hafnar honum þar til teikningin breytist. Hún finnur þrennt í nýjustu hlutunum: næsta afrit af einhverju sem er teiknað tvisvar eða oftar í jöfnu skrefi (vegghlaðar, súlur, stigaáhætta og trappa), næstu skref í fjöllínustiga, og vantandi hlið herbergis eða veggjakeðju. Í miðri {{cmd:LINE}} eða {{cmd:PLINE}} er draugurinn **næsti punktur**: næsta skref stiga (áhætta, trappa, áhætta…), fjórða horn rétthyrnings, punkturinn sem lokar honum, eða eitt skref í viðbót af sama bili. Færðu bendilinn nálægt honum og ýttu á **Tab**, eins og þú hefðir smellt þar; haltu áfram eða ýttu á Enter. Reiknað á þessari tölvu eftir reglum, án líkans.

### AUTOSHEET

Stytt heiti: `ASH`. Blöð sem skipuleggja sig sjálf. {{cmd:AUTOSHEET}} tekur hluta teikningarinnar (nefndu sýnirnar þínar, eða aðskilda hluta líkansins, eða allt líkanið), velur pappírsstærð (eða þá sem þú gefur), gefur hverjum hluta staðlaðan kvarða (einn kvarða fyrir alla, eða þann stærsta sem hver getur tekið) og raðar sýnunum í raðir á nýjum blöðum með titilreit og yfirskrift (heiti og kvarði) undir hverri. Það sem kemst ekki á eitt blað fær sitt eigið blað. Eitt afturköllunarskref. Reiknað á þessari tölvu eftir reglum, án líkans.

### PHOTOSKETCH

Stytt heiti: `PSK`. Ljósmynd af skissu yfir í teikningu. Veldu ljósmynd (JPEG, PNG eða TIFF) af handskissu á blaði. {{cmd:PHOTOSKETCH}} finnur fjögur horn blaðsins, réttir úr perspektífinu, tekur pappírsstærðina sem þú nefnir (`Paper`, eða þá næsta staðlaða) og `Scale` skissunnar (1 : n), og rekur síðan pennalínurnar í línur, boga og hringi, með lagi fyrir hvern pennalit (svartur, rauður, blár, grænn). Ef hún finnur ekki jaðar blaðsins tekur hún alla ljósmyndina sem blaðið og segir það. Texti er skilinn eftir. Eitt afturköllunarskref. Unnið á þessari tölvu með klassískri myndvinnslu, án líkans, og ekkert sent neitt. Sjá einnig skipanirnar fyrir skannaðar teikningar.

### AUTODIM

Stytt heiti: `ADIM`. Sjálfvirk málsetning eftir reglum. {{cmd:AUTODIM}} málsetur valda hluti (eða alla teikninguna) út frá hæðar- og lóðréttum jöðrum þeirra: keðja málsetninga eftir þeim hliðum sem þú velur (`Sides`), ein heildarmálsetning utan hennar, breidd hvers op (bil á milli samlínulegra veggjalína), þvermál fyrir hverja stærð gata, og með `Grid` bilið á milli ristlína. Málsetning sem þegar er til verður ekki gerð aftur. Eitt afturköllunarskref. Reiknað á þessari tölvu eftir reglum, án líkans.

### GRIDMOVE

Stytt heiti: `GM`. Að færa ristlínu dregur settið með sér. {{cmd:GRIDMOVE}} færir ristlínu (línu á lagi sem heitir grid eða axis) og það sem hangir á henni: veggir sem enda á línunni teygjast til að fylgja henni, veggir meðfram henni færast í heild, súlur (blokkartilvísanir og hringir á línunni), hringurinn og merkið færast, og málsetningar sem punktar sitja á mæla nýja bilið. Gefðu tvo punkta (aðeins hlutinn þvert á línuna telur) eða `Distance`. Eitt afturköllunarskref tekur allt til baka. Unnið eftir reglum á þessari tölvu.

### DETAILS

Stytt heiti: `DET`. Smáatriði sem finna þig. {{cmd:DETAILS}} geymir eigin smáatriði fyrirtækisins þíns: `Add` setur blokk úr þessari teikningu á listann, `List` og `Remove` stjórna honum, og `Find` raðar þeim fyrir það sem er valið (eða fyrir það sem þú teiknaðir síðast) eftir orðunum á lögum þess, heitum blokka, skyggingamynstrum og athugasemdum, borið saman við heiti og athugasemdir hvers smáatriðis, svo gluggahaus finnur skjöldinn þinn. Veldu númer og punkt til að setja það. Með `Hint` kveikt (líka í Stillingar › CadCraft) setur val á hlut sem smáatriði passar við eina línu á stöðustikuna. Listinn er geymdur í þessum vafra, á þessari tölvu, og það er þessi listi sem er leitað í. `Share` setur hann líka í Skjalamöppuna þína (`.cadcraft/firm-details.json`, með teikningu hverrar blokkar): `Pull` bætir við því sem teymið þitt á og þú átt ekki, `Push` bætir við því sem þú átt og þau eiga ekki, `Both` gerir hvort tveggja, og ekkert er nokkurn tíma fjarlægt af hvorri hlið. Opnaðu Skjalamöppuna fyrst ({{cmd:DOCUMENTS}}); þegar sú mappa er mappa Team Cloud Plan deilir allt teymið einum lista. Smáatriðishlutur í safnspjaldinu er með hnappinn **Add to my firm's details** sem setur hann á sama lista. Unnið eftir orðum á þessari tölvu, án líkans.

### SKETCHFIX

Stytt heiti: `SKF`. Pennaskissur verða nákvæm rúmfræði. Ýttu og dragðu eina handfrjálsa stroku í einu (penni, mús eða fingur), og síðan Enter. Hver stroka er lesin sem lína, hringur, bogi, rétthyrningur eða fjöllína: næstum lárétt og lóðrétt línur verða nákvæmlega láréttar og lóðréttar, lokuð hringlaga stroka verður hringur, lokuð stroka með fjórum rétthyrndum hornum verður rétthyrningur, og endar strokanna eru dregnir saman og á endana sem þegar eru í teikningunni. Eitt afturköllunarskref. Unnið eftir reglum á þessari tölvu, án líkans.

### SCANATTACH og skipanir fyrir skannaðar teikningar

Stytt heiti: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} hefur enga. Þær vinna á mynd, eitt afturköllunarskref hver. {{cmd:SCANATTACH}} setur inn PNG, JPEG, TIFF (ein síða eða allar) eða PDF-síðu sem er mynd. {{cmd:SCANSCALE}} skalar blaðið út frá tveimur völdum punktum og raunverulegri fjarlægð. {{cmd:SCANALIGN}} færir og snýr því á tvo punkta (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} sýnir hornið á löngu línum blaðsins og snýr blaðinu þegar þú `Accept` eða gefur `Value`. {{cmd:SCANCLEAN}} gerir það svart-hvítt (`Threshold` Auto/Adaptive/Level, `Specks`) og `Run`. {{cmd:SCANCROP}} heldur glugga. {{cmd:SCANERASE}} eyðir `Rectangle`, `Polygon` eða `Lasso`. {{cmd:SCANTRACE}} rekur línur og boga á nýtt lag (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) og segir hvað fannst og hvað var skilið eftir sem raster. {{cmd:SCANINFO}} listar upprunalegu skrána og skrefin. {{cmd:RASTERSNAP}} kveikir eða slekkur á smellingu að línum skannaðra blaða. Sjá efnið Skannaðar teikningar og rakning.

### REGEN og REGENALL

Stytt heiti: `RE` fyrir {{cmd:REGEN}}, `REA` fyrir {{cmd:REGENALL}}. Endurbyggir það sem er teiknað á skjánum úr teikningunni: {{cmd:REGEN}} flipann sem þú sérð (á blaði líka líkanið sem sýnigluggar þess sýna), {{cmd:REGENALL}} alla flipa, sérhverja rúðu skiptaskjásins og sérhverja opna teikningu. Notaðu þær þegar myndin virðist úrelt eftir handrita- eða mjög stóra breytingu, eða þegar aðstoðarmaður breytti teikningunni; teikningin sjálf er ekki snert, svo ekkert er hægt að afturkalla.

### NAMEDVIEW

Stytt heiti: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, síðan heiti sýnarinnar. `S` vistar sýnina á skjánum, `W` glugga sem þú velur, `R` sýnir vistaða sýn, `D` eyðir einni, `?` listar sýnirnar á þessum flipa. Ef vistað er undir heiti sem þegar er til kemur sú nýja í staðinn; sérhver breyting er eitt afturköllunarskref. Sýnir tilheyra flipanum sem þær voru vistaðar á. DWG- og DXF-skrár geyma þær (VIEW-töfluna); sýnir blaðs koma aftur á fyrsta blaðinu, þar sem skráin segir ekki hvaða blað það var.

### UNDO og REDO

Stytt heiti: `U` fyrir {{cmd:UNDO}}; {{cmd:REDO}} hefur ekkert. Einnig {{key:Mod+Z}} og {{key:Mod+Y}}.

### LAYER

Stytt heiti: `LA`. Hoppar í spjaldið {{ui:Lög}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` eða heiti (`?` listar þær: Continuous, línutegundir teikningarinnar, og DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE með stærðunum `2` (hálf) og `X2` (tvöföld)). {{cmd:LWEIGHT}} (`LW`): línuþykktin fyrir nýja hluti í mm, eða `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): kvarði línutegunda teikningarinnar (afturkallanlegur). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — sama og {{ui:LWT}}-hnappurinn á stöðustikunni. Sjá [Línuþykktir og línutegundir](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, síðan nýja heitið; hlutir eða tilvísanir fylgja. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` þar til {{key:Enter}}, síðan `Select object on target layer or [Name]` og `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, síðan `Y`: lagið og sérhver hlutur á því fara (ekki lag 0, DEFPOINTS eða núverandi lag). Eitt afturköllunarskref hver. Sjá [Skipuleggja teikningu með lögum](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lög með því að velja hluti; einnig í valmyndinni {{ui:Verkfæri}} í spjaldinu {{ui:Lög}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, síðan {{key:Enter}}: öll önnur lög slökkva. {{cmd:LAYUNISO}} kveikir þau aftur. {{cmd:LAYOFF}} og {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (eða frozen), aftur og aftur; `U` tekur síðasta til baka, {{key:Enter}} lýkur. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} kveikir á öllum lögum, {{cmd:LAYTHW}} afþíðir öll lög. Sérhver skipun er eitt afturköllunarskref. Sjá [Skipuleggja teikningu með lögum](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} byrjar tóma teikningu og {{cmd:OPEN}} opnar DWG eða DXF, hvort í sínum flipa yfir teikningunni (ónotuð ný teikning er notuð í stað nýs flipa). Ef flipi með óvistuðum breytingum er lokaður spyr hún fyrst. Sjá [Skipta skjánum](topic:split-screen).

{{cmd:SAVE}} (stytt heiti `QSAVE`, og líka {{key:Mod+S}}) hleður niður afriti á sniði teikningarinnar: DWG ef hún var opnuð úr DWG, DXF ef úr DXF. Ný teikning notar það snið sem var síðast valið í Vista sem í þessum vafra, annars DWG.

{{cmd:SAVEAS}} (líka {{key:Mod+Shift+S}}) opnar gluggann {{ui:Vista afrit sem}}: veldu {{ui:DWG}} (og {{ui:Útgáfa}} þess), {{ui:DXF R12}} eða {{ui:DXF 2000}}, og síðan {{ui:Vista}}. Valið festist við þessa teikningu og nýjar teikningar í þessum vafra.

{{cmd:DXFOUT}} hleður alltaf niður DXF R12-afriti, án þess að breyta sniðinu sem {{cmd:SAVE}} notar.

Sjá [Skrár: hvað opnast, hvað vistast](topic:files#saving).

### TOUR

Stytt heiti: `TUTORIAL`. Ræsir sex skrefa ferðina í fyrstu teikningu aftur. Sjá [Byrjun](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Stytt heiti: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Sjá [Stillingar](topic:settings#toolbar-position).

### COMMANDLINE

Stytt heiti: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: festir eða losar skipanalínuna, gerir hana að einni línu, spyr hve margar sögulínur á að sýna (0 til 12), eða opnar söguna. Sjá [Stillingar](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: stikurnar fyrir ofan teikninguna eins og þær voru, eða þjappaðar. Sjá [Stillingar](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: skrefið sem skautrakning {{ui:Polar}} stillir sig eftir (meira en 0, upp í 180). Geymt í þessum vafra.

### UNITS

Stytt heiti: `UN`. Hvernig lengdir eru skrifaðar og slegnar inn.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural og Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 eða 256)`. Hinar: `Enter number of decimal places (0 to 8)`.

Nýjar málsetningar fylgja því. Eitt afturköllunarskref. Sama og {{ui:Lengdarsnið}} og {{ui:Nákvæmni}} í {{ui:Núverandi stillingar}}; sjá [Fet og tommur](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Stytt heiti: `GDS`. Skoðar IC-útlit (GDSII-straumskrá): rannsóknartilraun, aðeins til skoðunar og mælinga.

- Skráavelja tekur `.gds`-skrá; með nokkrum efstu frumum: `Enter the top cell to draw`.
- Sérhvert lag og gagnagerð verður lag í teikningunni (`GDS 1`, `GDS 2/5`), tilvísanir og fylki eru sett flöt, í notendaeiningu skráarinnar (venjulega míkrómetrar). Eitt afturköllunarskref. Ekkert er hermt eða athugað og skráin er ekki skrifuð til baka.

### DIAGRAM

Stytt heiti: `TEXTDIAGRAM`, `T2D`. Skýringarmynd úr texta.

- Reitur tekur textann (eða eina línu með `;` á milli fullyrðinga á skipanalínunni): Mermaid-flæðirit, PlantUML-íhlutaskýringarmynd, D2 eða frá-til-listi.
- `Specify the top left corner of the diagram`, síðan `Specify the text height`.

Blokkir og tengingar eru venjulegir hlutir á laginu `Diagram`, valdir þegar henni lýkur. Eitt afturköllunarskref. Sjá [Teikna skýringarmynd úr texta](topic:text-to-diagram).

### OLELIST

Stytt heiti: `OLES`. OLE-hlutirnir sem DWG geymir og CadCraft getur ekki sett inn sjálft.

- Listar hvern og einn: númer, gerð, stærð, og hvort hann vistaði mynd.
- `Enter an option [Place/eXit] <eXit>`: Place spyr um númerið, neðra vinstra hornið og breiddina, og teiknar ramma með myndinni. Eitt afturköllunarskref; geymda hlutnum er ekki breytt. Sjá [Myndir](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Stytt heiti: `SHX`. Eigin SHX-leturgerðir.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Mappa}} les sérhverja `.shx` í möppu (CadCraft Studio; aftur við hverja ræsingu), {{ui:Skrár}} tekur valdar skrár (vafrinn), {{ui:Snúa við (R)}} raðar stöfum einnar leturgerðar síðasta fyrst. Textastílar sem nefna hlaðna leturgerð teikna í henni. Sjá [Teikna texta í eigin SHX-leturgerðum](topic:shx-fonts).

### LIMITS

Hversu stór teikningin á að vera.

- `Specify lower left corner or [ON/OFF] <current>`: punktur, `ON` eða `OFF`.
- `Specify upper right corner <current>`.

Ristin fyllir mörkin, {{cmd:ZOOM}} All sýnir þau, og með mörkunum ON er punktur utan þeirra hafnaður (`**Outside limits`). Eitt afturköllunarskref; vistað í DWG og DXF. Sjá [Stilla mörk teikningarinnar](topic:drawing-limits).

### AUNITS

Stytt heiti: `ANGUNITS`. Hvernig horn eru sýnd og slegin inn.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, eða fyrir hina tvo `Enter precision` (0 gráður, 2 mínútur, 4 sekúndur, 5 til 8 aukastafir sekúndu).

Eitt afturköllunarskref; vistað í DWG og DXF. Sama og {{ui:Horna snið}} í {{ui:Núverandi stillingar}}. Sjá [Slá inn og sýna stefnur og horn](topic:bearings-and-angles).

### APPLOAD

Stytt heiti: `AP`; eða {{ui:Sýn}} › {{ui:Meira}} › {{ui:Hlaða forriti…}}. Glugginn {{ui:Hlaða forritum}}: hleður `.lsp`-rútínum og `.dcl`-viðmótsskrám, losar þær, hleður þeim aftur úr sögunni, og ræsisvítunni. Skipanir `(defun c:NAME …)` rútínu virka síðan eins og aðrar skipanir. Sjá [Hlaða forritum](topic:load-applications) og [Keyra LISP-rútínur](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (eða {{ui:Sýn}} › {{ui:Meira}} › {{ui:Breyta skammnöfnum…}}) opnar skammnafnaskrána þína (línur `ALIAS, *COMMAND`); {{ui:Vista}} beitir henni. {{cmd:REINIT}} beitir henni aftur. Sjá [Breyta skammnöfnum skipana](topic:command-aliases).

### LISPEDIT

Stytt heiti: `VLIDE`; eða {{ui:Sýn}} › {{ui:Meira}} › {{ui:LISP editor}}. Opnar LISP-ritilinn, glugga sem helst opinn við hlið teikningarinnar.

- Textinn: línunúmer, félagi sviganna við bendilinn er merktur (rauður ef hann er enginn), {{key:Enter}} inndregur nýju línuna undir opna sviganum, {{key:Tab}} skrifar tvö bil, {{key:Esc}} yfirgefur textann.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): les hvert form, eins og {{cmd:APPLOAD}} gerir með skránni, og býr til `c:`-skipanir hennar. Skráin birtist í lista {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): metur valdu formin, eða formið sem bendillinn er í.
- {{ui:Stöðva}}: lýkur rútínu sem er í gangi.
- {{ui:Console}}: það sem rútínan prentaði, og hver villa með línunni sinni; smelltu á villu til að fara þangað. Textinn er keyrður eitt efsta stigs form í einu, svo línan er línan í forminu, eða inni í því línan sem kallar á fallið sem villan nefnir.
- {{ui:Ný}}, {{ui:Opna}}, {{ui:Vista}} ({{key:Ctrl+S}}): `.lsp`-skrá. Textinn er einnig geymdur í þessum vafra, svo lokun gluggans glatar honum ekki.
- Við hliðina á textanum: föllin sem rútínan skilgreinir, þau sem hún kallar á og þetta LISP hefur ekki enn, þau sem hún kallar á og eru hvorki skilgreind í henni né innbyggð, og heildarlistarnir yfir það sem er innbyggt og hvað ekki.

Texti með sviga sem aldrei er lokað, eða streng sem aldrei endar, er ekki keyrður: línan er nefnd. Það er enginn skrefaleitari, enginn stöðvunarpunktur eða vaktgluggi. Sjá [Keyra LISP-rútínur](topic:run-lisp).

### HELP

Stytt heiti: `?`. Prentar sérhverja skipun, styttu heiti hennar og eina línu lýsingu í skipanalínusögunni. Hún opnar ekki þessa hjálp: ýttu á {{key:F1}} eða smelltu á {{ui:Hjálp}} fyrir það.

## Spurning um val á hlutum

Við sérhverja spurningu `Select objects`: smelltu á hluti, dragðu glugga (frá vinstri til hægri) og krossglugga (frá hægri til vinstri) með tveimur smellum, eða ýttu á og dragðu lasso ({{key:Space}} meðan dregið er: gluggi, krossgluggi, girðing), {{key:Shift}}+smellur til að fjarlægja, og ýttu á {{key:Enter}} til að ljúka. Þú getur líka slegið inn `ALL` (allt), `L` (síðasta hlut), `P` (Previous: það sem síðasta skipun notaði), `F` (Fence: hluti sem lína punkta sker; `U` tekur punkt til baka), `W` (Window), `C` (Crossing), `R` (Remove mode: smellir taka hluti út; spurningin segir `Remove objects`) og `A` (Add again). `?` listar þá. Þeir eru ekki sýndir í spurningunni. {{key:Tab}} yfir hluti sem skarast dregur fram þann næsta; smelltu til að velja hann. Sjá [Velja hluti](topic:select-objects).

### ACCESS

Stytt heiti: `AX`. Teikna án sjónar. {{cmd:ACCESS}} kveikir eða slekkur á aðgengi (`On`, `Off`) og skiptir smellhljóðum (`Sound`) og talaðum skipunum (`Voice`); hún segir fyrst hver staðan er. Með aðgengi kveikt er sérhver skipun og niðurstaða lesin upp í gegnum skjálesarann og teiknisvæðið er með lyklaborðsbendil. Hjálparefnið „Teikna án sjónar“ hefur takkana.

### DESCRIBE

Stytt heiti: `DESC`. Segir hvað teikningin hefur: hve marga hluti, af hvaða tegund, hve stór, hve mörg lög, hvað er valið. Les aðeins; breytir engu.

### WHEREAMI

Stytt heiti: `WHERE`. Segir hvar bendillinn er, í einingum teikningarinnar.

### NEARBY

Segir hvað liggur nálægt bendlinum, það næsta fyrst, og sérhvað með fjarlægð sinni og hliðinni sem það er á.

### SAYSEL

Segir hvað er valið, ein setning fyrir hvern hlut (lengd, endar og horn línu; radíus og miðja hrings; texti eins og hann er skrifaður).

### VOICE

Kveikir eða slekkur á töluðum skipunum. Þær eru greindar á þessari tölvu; þar sem vafrinn getur ekki það helst talað slökkt nema þú veljir netþjónustu vafrans í Stillingum.

### TOUCHCROSSHAIR

Stytt heiti: `TCX`. Forskiptur krossbendill fyrir teikningu með fingri, svo fingurgómurinn hylji ekki punktinn sem þú velur. Meðan hann er kveiktur velur einn fingur á teikningunni ekki: hann færir krossbendil sem situr fyrir ofan fingurinn og til hliðar. Smellir á hluti og rakning fylgja krossbendlinum. Að lyfta fingrinum velur ekkert og skilur krossbendilinn eftir þar sem hann er. Til að velja ýtirðu á hnappinn {{ui:Click}} í horni teikningarinnar, eða snertir hvar sem er á teikningunni með öðrum fingri. Haltu {{ui:Click}} inni meðan þú hreyfir hinn fingurinn til að draga (gluggi til valsins, lasso, grip). Fingur sem haldið er kyrrum, eða hnappurinn {{ui:Enter}}, er Enter. Tveir fingur hliðra og þysja eins og áður. Nálægt neðri brún og fjarlægari hlið krossbendillinn þrengist að fingrinum, svo hægt sé að ná öllum hlutum teikningarinnar. Penni og mús velja alltaf beint.

{{cmd:TOUCHCROSSHAIR}} segir stöðuna og spyr `ON`, `OFF`, `Auto` (kveikt aðeins þar sem fingur er eini bendillinn, svo hann er slökktur á tölvu með mús), `Distance` (hve langt krossbendillinn situr frá fingrinum, 24 til 240 pixlar) eða `Side` (`Left`: upp og til vinstri, fyrir hægri hönd; `Right` fyrir vinstri hönd; hnapparnir fara í hitt hornið). Sömu valkostir eru í Stillingar › CadCraft, og á tæki með snertiskjá hefur stöðustikan {{ui:Offset crosshair}}-rofa. Valið er geymt í þessum vafra.

### WHOHAS

Segir hver hefur teikningu opna. Í CadCraft Studio á tölvu skrifar opnun DWG eða DXF litla læsiskrá við hlið hennar (`Plan.dwg.cclock`: hver, síðan hvenær, hvaða útgáfa), endurnýjar hana á hverri mínútu meðan teikningin er opin og fjarlægir hana þegar teikningin er lokuð. Að opna teikningu sem einhver annar hefur opna segir hver það er og síðan hvenær, og býður {{ui:Open read-only}} (Vista biður þá um nýtt heiti), {{ui:Open anyway}} (hinn aðilinn fær vitneskju við næstu endurnýjun), eða {{ui:Hætta við}}. Að vista yfir skrá sem einhver annar hefur opna spyr fyrst. Læsing sem ekki hefur verið endurnýjuð í fimm mínútur er sögð úrelt: hitt eintakið lokaðist án þess að vista, eða tölvan er í svefni.

{{cmd:WHOHAS}} spyr `Current` (opna teikningin), `File` (veldu eina), `FOlder` (veldu möppu: hver teikning í henni sem er opin einhvers staðar er skráð), `Path` (sláðu inn fulla slóð) eða `Name` (heitið sem aðrir sjá; reikningsheitið þitt þegar þú ert skráður inn). Studio nær aðeins í möppur sem þú hefur valið: fyrir teikningu sem opnuð var úr möppu sem var aldrei valin segir hún einu sinni að hún geti ekki skráð teikninguna sem opna; `FOlder` velur möppuna, og læsingar virka þar upp frá því. Læsingin er minnismiði fyrir fólk, ekki hindrun: annað forrit getur enn skrifað skrána. Í vafra eru engar möppur til að leita í, og skipunin segir það.

### OVERKILL

Eyðir tvíteknum hlutum og snyrtir skarandi línur og boga, fyrir teikningar sem berast fullar af tvöföldum línuverki. `Select objects to clean up`, {{key:Enter}}, síðan {{key:Enter}} aftur til að hreinsa með stillingunum sem sýndar eru, eða breyta einni fyrst:

- `Tolerance`: hve nálægt tvö hnit þurfa að vera til að teljast þau sömu (0.000001 í upphafi; 0 þýðir nákvæmlega eins).
- `Ignore`: eiginleikar sem mega vera ólíkir milli tveggja hluta sem eru annars eins. Slærð inn heiti til að kveikja: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, eða `None` / `All`. {{key:Enter}} þegar búið.
- `Overlap`: kveikt eða slökkt. Kveikt: línur á einni beinni línu sem skarast verða að einni línu (lína sem liggur inni í annarri er einfaldlega eydd), og bogar á einum hring sem skarast verða að einum boga; bogar sem loka heilum hring verða hringur, og bogi sem liggur á hring er eyddur.
- `Ends`: kveikt eða slökkt. Kveikt: línur á einni beinni línu og bogar á einum hring sem snertast aðeins enda við enda verða að einum bút.

Sérhver tegund hluta er athuguð með tilliti til tvíteknings: tveir hlutir eru tvíteknir þegar rúmfræði þeirra er sú sama innan skekkjumarkanna og lag þeirra, litur, línutegund, kvarði línutegundar, línuþykkt, þykkt, gegnsæi og hæð passa (að frádregnum þeim sem þú hunsar). Línur og opnar fjöllínur passa líka þegar þær eru teiknaðar í öfuga átt. Fyrsti hluturinn í teiknröðinni helst og heldur sínum eiginleikum. Skipunin segir hve marga hluti hún athugaði og eyddi: tvíteknir, skarandi bútar sameinaðir, bútar tengdir enda við enda. Eitt {{cmd:UNDO}} tekur allt til baka. Stillingarnar gilda þar til þú lokar teikniglugganum.

Hún skilur eftir: hluti á læstum lögum og falda hluti. Hún sameinar ekki línur með hæð (Z) (nákvæm tvíverknaður þeirra fer samt), og hún snertir ekki hluta inni í fjöllínu (þeir eru ekki þynntir), ekki línu sem liggur á hluta fjöllínu, og ekki lokaða fjöllínu sem er teiknuð í öfuga átt.

### DRAWORDER

Breytir hvaða hlutir eru teiknaðir fremst. `Select objects to re-order`, {{key:Enter}}, síðan `Above objects`, `Under objects`, `Front` eða `Back` ({{key:Enter}} = `Back`). `Above objects` og `Under objects` spyrja um viðmiðunarhlutina: valið fer rétt fyrir framan þann fremsta þeirra, eða rétt á bak við þann aftasta. Valdir hlutir halda sinni röð innbyrðis. Eitt afturköllunarskref. Röðin er vistuð með teikningunni í DWG og DXF, þar sem hún er sú röð sem hlutirnir eru skrifaðir í.

Á skjánum teiknar CadCraft fyllta fleti (samfelldar skyggingar, breiðar fjöllínur, grímur) fyrst, síðan línuverk, síðan texta, svo texti er alltaf lesinn yfir fyllingu; teiknröðin sýnir sig meðal fylltra hluta og meðal mynda. Önnur forrit sem opna skrána teikna alla hluti í vistaðri röð.

### TEXTTOFRONT

Færir texta, málsetningar og vísa fram fyrir allt annað í opna rýminu: `Text`, `Dimensions`, `Leaders` eða `All` ({{key:Enter}} = `All`). Eitt afturköllunarskref. Segir til um það þegar enginn er, eða þegar þeir eru þegar fremst.

### HATCHTOBACK

Sendir sérhverja skyggingu í opna rýminu aftast, á bak við allt annað, svo fyllingar hylji ekki línuverk og texta í vistuðu skránni. Engar spurningar. Eitt afturköllunarskref.

### ISOLATEOBJECTS

Stytt heiti: `ISOLATE`. Sýnir aðeins valda hluti: allt annað í opna rýminu hverfur úr augsýn þar til {{cmd:UNISOLATEOBJECTS}}. Ólíkt {{cmd:LAYISO}} vinnur hún á hlutunum sem þú velur, hver sem lögin þeirra eru, og breytir engu lagi. Faldir hlutir eru ekki teiknaðir, valdir, smelltir á, þysjaðir að eða prentaðir, og skipanir sem taka `ALL` sleppa þeim. Það sem þú teiknar meðan hlutir eru einangraðir birtist eins og venjulega.

Þetta gildir aðeins fyrir þessa lotu: ekkert um það er vistað með teikningunni, það er ekki afturköllunarskref, og þegar teikningin er opnuð aftur sést allt. Meðan hlutir eru faldir sýnir stöðustikan hnapp með fjölda þeirra; smelltu á hann til að sýna þá aftur.

### HIDEOBJECTS

Felur valda hluti þar til {{cmd:UNISOLATEOBJECTS}}. Sömu reglur og {{cmd:ISOLATEOBJECTS}}: aðeins fyrir þessa lotu, ekki vistað, ekki afturköllunarskref.

### UNISOLATEOBJECTS

Stytt heiti: `UNISOLATE`, `UNHIDE`. Sýnir aftur alla hluti sem {{cmd:ISOLATEOBJECTS}} eða {{cmd:HIDEOBJECTS}} faldi, og segir hve margir komu aftur.

### LAYLOCKFADE

Stillir hvernig hlutir á læstum lögum líta út og hvort smellur nær til þeirra. Hún segir núverandi stöðu og tekur síðan:

- tölu frá 0 til 90: dofnunarhlutfallið í prósentum (50 í upphafi). 0 slekkur á dofnun.
- `ON` eða `OFF`: dofnun kveikt eða slökkt, og hlutfallið helst.
- `Pick`, síðan `Yes` eða `No`: má smellur velja hluti á læstum lögum meðan engin skipun er í gangi? `No` (sjálfgildið): þeir eru alls ekki valdir. `Yes`: smellur eða gluggi velur þá svo {{ui:Eiginleikar}} geti sýnt þá; þeir er samt ekki hægt að breyta, og eigin `Select objects` skipunar tekur þá aldrei.

Smellifestingar á hlutum finna hluti á læstum lögum hvort sem er. Prentanir eru aldrei dofnaðar. Báðar stillingarnar eru þínar, ekki teikningarinnar, og eru líka í {{ui:Stillingar}} undir {{ui:Locked layers}}.

### BURST

Sundrar blokkartilvísunum og heldur því sem eigindirnar segja. `Select block references to burst`, {{key:Enter}}: hver tilvísun er skipt út fyrir hluti blokkarinnar, og gildi hverrar sýnilegrar eigindar verður venjulegur texti á lagi eigindarinnar (eigind á lagi 0 lendir á lagi tilvísunarinnar, eins og aðrir hlutir blokkarinnar á lagi 0). Ósýnilegar eigindir falla niður. Blokk inni í blokkinni helst blokkartilvísun. Eitt afturköllunarskref; hún segir hve margar tilvísanir voru sundraðar og hve mörg eigindagildi urðu að texta.

Hún hafnar tengdri teikningu með nafni (tengdu hana fyrst, eða afritaðu úr henni með {{cmd:NCOPY}}), og lætur aðra valda hluti vera. Fyrir blokkartilvísanir gefur {{cmd:EXPLODE}} sömu hluti; {{cmd:BURST}} tekur aðeins blokkartilvísanir og telur eigindartextann.

### TXT2MTXT

Stytt heiti: `T2M`. Tengir einlínutexta í einn málsgreinartexta. `Select single-line text to join`, {{key:Enter}}, síðan `Paragraph` (línurnar renna saman og brotna við breidd breiðustu línunnar) eða `Lines` (hver texti helst sín eigin lína); {{key:Enter}} tekur þann sem var notaður síðast. Línurnar eru raðaðar ofan frá og niður, og síðan frá vinstri til hægri, eftir stefnu efsta textans. Málsgreinin hangir frá efra vinstra horni efsta textans og tekur hæð hans, snúning, stíl, lag og lit. Eitt afturköllunarskref.

Texti sem þegar er málsgreinartexti, tómur texti og aðrir hlutir í valinu eru látnir vera, og skipunin segir hve margir það eru.

### NCOPY

Afritar hluti úr blokkartilvísun eða tengdri teikningu inn í teikninguna, án þess að sundra neinu. `Pick an object inside a block reference or a linked drawing`: hluturinn næst smellinum er afritaður þar sem hann sést, sama hve djúpt í blokkum hann er; veldu fleiri, síðan {{key:Enter}}. Næst `Base point to move the copies`: {{key:Enter}} skilur þá eftir á sínum stað, eða gefðu grunnpunkt og annan punkt. Öll skipunin er eitt afturköllunarskref.

Afrit tekur lagið sem það sést á: hlutur á lagi 0 inni í blokk lendir á lagi tilvísunarinnar sem hann var í, og ByBlock-litur verður lit þeirrar tilvísunar. Úr tengdri teikningu verður lagið `Plan|Walls` að `Plan$0$Walls` (heitinu sem tengillinn gefur því), búið til með lit, línutegund og línuþykkt tengda lagsins. Gildi eigindar er afritað sem texti. Blokkartilvísanir á læstum lögum er ekki hægt að velja.

### FLATTEN

Setur hæð (Z) og þykkt valdra hluta í 0. `Select objects to flatten`, {{key:Enter}}. Hún flatar líka hluti inni í blokkarskilgreiningunum sem valið notar (og blokkir inni í þeim), svo sérhver tilvísun í þær blokkir breytist; tengdar teikningar eru látnar vera. Eitt afturköllunarskref; hún segir hve margir hlutir breyttust, og segir það þegar enginn hafði hæð eða þykkt.

Það sem CadCraft geymir af þriðju víddinni í 2D-teikningu er: hæð á hringjum, bogum, sporbaugum, punktum, texta, blokkartilvísunum, skyggingum, vísum og fjöllínum (upphækkun þeirra), hæð á hvorum enda línu, og þykkt á línum, hringjum, bogum, fjöllínum, punktum og texta, eins og skráin hafði þá. {{cmd:FLATTEN}} hreinsar nákvæmlega þetta. Hún snertir ekki 3D-líkanið á 3D-flipanum, 3D-fleti eða föst form, og hlut sem teiknaður er í hallandi plani var þegar færður inn í teikniplanið þegar skráin var opnuð.

### BREAKLINE

Teiknar línu með brotatákni, fyrir sýn sem er skorin stutt. Hún segir núverandi stærð og framlengingu, síðan `First point of the break line` (eða `Size` / `Extension` til að breyta þeim fyrst), `Second point`, og `Where the break symbol sits`: smelltu eftir línunni, eða ýttu á {{key:Enter}} fyrir miðjuna. Útkoman er ein fjöllína á núverandi lagi: línan, sem gengur framhjá hvorum punkti um framlenginguna, með Z-laga strik sem er jafnhátt stærðinni og hálf jafnlangt.

`Size` og `Extension` eru munuð sem stillingarnar þínar (stærðin byrjar í tvöföldu textahæð málsetningar sinnum málsetningarkvarðanum; framlengingin í helmingi stærðarinnar). {{key:Enter}} endurtekur skipunina.

### AUDIT

Athugar opnu teikninguna með tilliti til skemmda og lagar þær. {{cmd:AUDIT}} lítur á sérhvern hlut í líkaninu, á blöðunum og inni í blokkum, og á lagatöfluna, og listar það sem hún finnur eftir tegund:

- tölur sem eru ekki endanlegar eða afar stórar;
- hluti án stærðar: lína án lengdar, hringur án radíuss, fjöllína með einn punkt, texti án stafa eða hæðar, blokkartilvísun með núllkvarða;
- hluti á lagi sem teikningin hefur ekki; tilvísanir í blokk sem er ekki til; heiti texta- og málsetningastíla og línutegunda sem eru ekki í teikningunni;
- blokkir sem innihalda sjálfa sig, beint eða í gegnum aðrar blokkir;
- hluti sem deila auðkenni, lykli eða skráartilvísun;
- málsetningar án punktanna sem þær eru mældar frá, og skyggingar þar sem afmörkunin er ekki lokuð útlína.

Síðan spyr hún `Fix them? [Yes/No]`. `No` breytir engu. `Yes` lagar allt í einu afturköllunarskrefi: það sem ekki er hægt að teikna er fjarlægt (ógild tölur, enginn stærð, vantandi blokk, biluð málsetning, skygging án nothæfrar afmörkunar, tilvísunin sem lokar hringrás blokka); vantandi lag er búið til; óþekkt heiti stíla og línutegunda fara aftur í sjálfgildi; sameiginlegur lykill er skiptur út. Hún prentar hve margir hlutir voru fjarlægðir og hve margir lagfærðir. Sömu niðurstöður birtast í spjaldinu {{ui:Problems}}, hver með sinn eigin {{ui:Repair}}.

Hún hafnar engu, en hún athugar aðeins það sem CadCraft sjálft teiknar: gögn sem geymd eru fyrir önnur forrit (3D-föst form, OLE-hluti) eru ekki opnuð.

### RECOVER

Opnar skemmda DXF eða DWG. {{cmd:RECOVER}} spyr um skrána, les það sem hægt er að lesa í stað þess að hafna skránni, listar það sem hún sleppti eða gerði ráð fyrir, og athugar síðan og lagar teikninguna eins og {{cmd:AUDIT}} gerir með `Yes`.

- DXF: línur sem eru ekki hluti af kóða- og gildapari eru sleppt þar til pörin passa aftur; hluti án endis er lokaður; skrá sem er skorin stutt er lesin upp að skurðinum; tvíundar-DXF sem er skorin stutt er lesin upp að síðasta heila gildi. Þegar hluti, blokk eða hlutur er enn ólesanlegur er hann skilinn eftir og nefndur, og lesturinn heldur áfram framhjá honum.
- DWG: hlutir sem standast ekki athuganir sínar eða er ekki hægt að afkóða eru skildir eftir, og týndum hlutalista er endurbyggður með því að ganga í gegnum hlutagögnin.

Skráin á disknum breytist ekki. Endurheimta teikningin opnast óvistuð: vistaðu hana undir nýju heiti. Skrá sem ekkert af er hægt að lesa er hafnað, með ástæðunni.

### LEGACYTEXT

Breytir texta sem skrifaður var með gömlum 8-bita víetnömskum leturgerðum í Unicode. Stytt heiti `TEXTTOUNICODE` og `VNTEXT`.

Eldri víetnömsk teikningar geyma texta sinn sem vestræna stafi sem aðeins leturgerðin breytir í víetnömsku: TCVN3-texti í ABC-leturgerðunum (`.VnTime`, `.VnArial`, og hástafaleturgerðirnar sem enda á `H`), og VNI-texti í VNI-leturgerðunum (`VNI-Times`). CadCraft sýnir slíkan texta eins og hann les sig um leið og teikningin er opnuð, eftir leturgerð textastílsins, hlutarins eða bútsins í málsgreinartexta; skráin geymir enn gömlu stafina.

{{cmd:LEGACYTEXT}} segir hve marga texta hún fann í hverri kóðun og spyr `Convert … to Unicode?`. `Yes` skrifar alla upp á nýtt (líkan, blöð, blokkir, eigindagildi og skilgreiningar) og gefur textastílunum Unicode-leturgerð (Times New Roman, Arial eða Courier New eftir gerð gömlu leturgerðarinnar), í einu afturköllunarskrefi. Snið inni í málsgreinartexta er varðveitt.

Þegar enginn texti notar þekkta leturgerð (stíll sem missti heiti leturgerðarinnar), spyr hún `Read selected texts as [Tcvn3/Vni/None]`: veldu kóðunina og veldu textana. Texti sem er þegar í Unicode er látinn vera. Yfirskrifaður málsetningartexti og texti fjölvísa er ekki breytt.
