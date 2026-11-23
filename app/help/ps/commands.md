---
title: د کمانډونو لارښود
summary: په CadCraft ډرافټینګ اپ کې هره کمانډ، د هغې مستعار نومونه، هغه پوښتنې چې کوي، اختیارونه او ډیفالتونه.
keywords: کمانډونه, مستعار نومونه, د کمانډ لیست, مساحت, محیط, measuregeom, کرښه, pline, دایره, قوس, لنډول, offset, dimlinear, بلاک, insert, layout, plot, زوم, مرسته, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

د کمانډ نوم یا مستعار نوم ولیکئ او {{key:Enter}} یا {{key:Space}} کېکاږئ. د لیکلو بڼه مهمه نده، او د `_`، `-`، `.` یا `'` مخکې نښه نظر ته نه نیول کېږي. `HELP` (یا `?`) ولیکئ ترڅو د کمانډ کرښې تاریخچې کې د هرې کمانډ لنډ لیست چاپ شي؛ {{key:F1}} کېکاږئ ترڅو دا مرسته پرانیزئ.

د پوښتنو لوستل: اختیارونه په مربع کرښو کې دي، او تاسو یو یې د لوی توریو ټایپولو سره غوره کوئ (`D` د Diameter لپاره). ډیفالت په زاویوي کرښو کې دی؛ {{key:Enter}} کېکاږئ ترڅو یې ومنئ. هرچېرې چې ټکی غوښتل کېږي، کلیک کولی شئ یا هر بڼه ټایپ کولی شئ چې په [د همغږۍ او واټن ننوتل](topic:coordinate-entry) کې ښودل شوې. هرچېرې چې واټن غوښتل کېږي، یو شمېره ټایپ کولی شئ یا دوه ټکي کلیک کولی شئ.

کله چې ټکی یا شی غوښتل کېږي، او ډیفالت نشته، {{key:Enter}} کېکاږل کمانډ پای ته رسوي. {{key:Esc}} یې لغوه کوي. هر هغه څه چې کمانډ یې کړي دي یو د بېرته کولو ګام دی.

## رسم

### LINE

مستعار نوم: `L`. مستقیمې قطعې، هره یې خپل شی.

- `Specify first point` (Enter: له هغه وروستي ټکي پیل کوي چې ورکړی وو)
- `Specify next point [Undo]`، تکرار شوی. دوه قطعې وروسته: `[Undo/Close]`.
- `U` وروستۍ قطعه بېرته اخلي، `C` ترڅو لومړي ټکي ته تړي او پای ته رسوي. Enter پای ته رسوي.

### PLINE

مستعار نوم: `PL`. یو پولي لاین د کرښو او قوسونو قطعو سره.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (کله چې دوه قطعې ولري Close)
- `A` قوسونو ته اړوي: `Specify endpoint of arc [Line/CLose/Undo]`. هر قوس د مخکینۍ قطعې سره مماس دوام کوي. `L` بیرته کرښو ته، `CL` قوس سره تړي.
- Enter پای ته رسوي؛ پولي لاین خلاص پاتې کېږي.

### CIRCLE

مستعار نوم: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`؛ `D` پوښتي `Specify diameter of circle`.
- `2P`: د قطر دوه پایونه. `3P`: په دایره درې ټکي.
- `T` (هم کمانډ `TTR`، او {{ui:رسم}} › {{ui:نور}} › {{ui:دایره: مماس، مماس، شعاع}}): `Specify point on object for first tangent of circle`، دویمه، بیا شعاع (Enter: وروستۍ). دایره دواړه شیان (کرښې، قوسونه، دایرې، د پولي لاین قطعې، همدارنګه د بلاکونو دننه) لمس کوي؛ د هغو دایرو له منځه چې دا کار کوي، هغه چې ستاسو ټاکنو ته تر ټولو نږدې وي. کله چې هېڅ ونه برابر شي، "Circle does not exist" ښیي.
- `TTT` (یا {{ui:رسم}} › {{ui:نور}} › {{ui:دایره: مماس، مماس، مماس}}): درې شیان؛ دایره چې ټول درې لمس کوي، ستاسو ټاکنو ته نږدې (درې کرښې داخلي یا بهرنۍ دایره ورکوي، د دې پر بنسټ چې چیرې کلیک کوئ).

### ARC

مستعار نوم: `A`.

- `Specify start point of arc [Center]`، `Specify second point of arc`، `Specify end point of arc`: د درې ټکو له لارې قوس.
- `C`: `Specify center point of arc`، `Specify start point of arc`، `Specify end point of arc`. قوس له پیل څخه تر پایه له ساعت سره مخالف ځي.

### RECTANG

مستعار نومونه: `REC`، `RECTANGLE`. یو تړل شوی پولي لاین.

- `Specify first corner point`، `Specify other corner point`. د دویم کنج لپاره `@width,height` ولیکئ.

### POLYGON

مستعار نوم: `POL`. منظم کثیرالضلع د تړل شوي پولي لاین په توګه.

- `Enter number of sides <4>` (له 3 تر 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: کلیک وکړئ یا ټکی ولیکئ؛ واټن یې اندازه ټاکي او لوري یې کثیرالضلع ګرځوي.

### ELLIPSE

مستعار نوم: `EL`.

- `Specify axis endpoint of ellipse [Center]`، `Specify other endpoint of axis`، `Specify distance to other axis`
- `C`: `Specify center of ellipse`، `Specify endpoint of axis`، بیا د بل محور واټن.
- `I` (`Isocircle`، یوازې کله چې {{cmd:ISODRAFT}} فعال وي): مرکز، بیا شعاع یا `Diameter`: هغه بیضوي چې دایره یې په اوسنۍ آیسومیټریک الوتکه کې ښکاري.

### HATCH

مستعار نومونه: `H`، `BH`، `BHATCH`؛ یا {{ui:هاشور}} په وسیلو بار کې. اوله اوسنی نمونه، پیمانه او زاویه چاپ کوي.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`، تکرار شوی (`Undo` کله چې سیمه وي): هر کلیک د هغې شاوخوا تړلې سیمه اضافه کوي، د هغې دننه تړل شوي شکلونه د ټاپو په توګه. Enter یو هاچ د ټولو لپاره جوړوي.
- `S`: `Select closed objects` (تړل شوي پولي لاینونه، دایرې، تړل شوي بیضوي).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): ډکول ګراډیانټ دی نه نمونه. د پوښتنو لپاره {{cmd:GRADIENT}} وګورئ.

وګورئ [هاشور او ډکې سیمې](topic:hatch).

### GRADIENT

مستعار نوم: `GD`. یوه سیمه د یو یا دوو رنګونو ګراډیانټ سره ډکوي. لومړی ګراډیانټ پوښتي، بیا لکه {{cmd:HATCH}} ادامه ورکوي (`Pick internal point`، `S` د تړلو شیانو لپاره، {{key:Enter}} د پای لپاره).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`، تکرار شوی؛ هر ځل اوسنی ګراډیانټ ښیي.
- `T`: `LINEAR`، `CYLINDER`، `SPHERICAL`، `HEMISPHERICAL`، `CURVED`، یا یو یې معکوس (`INVCYLINDER`، `INVSPHERICAL`، `INVHEMISPHERICAL`، `INVCURVED`). لومړي توري بس دي.
- `O`: یو رنګ، بیا د هغه سیوری له 0 تر 1 پورې (0 تور ته سیوری کوي، 0.5 خپل رنګ دی، 1 سپین ته رنګ کوي). `TW`: لومړی او دویم رنګ. رنګ یو شمېره دی له 1 تر 255، درې شمېرې لکه `255,128,0`، یا `#rrggbb`.
- `A`: زاویه چې ګراډیانټ پرې ځي. `C`: مرکز شوی Yes یا No (No د ګراډیانټ منځ یوې خوا ته لېږدوي).
- هغه رنګ یا ډول چې نه پیژني، او سیوری چې له 0 تر 1 بهر وي، رد کوي.

{{cmd:HATCHEDIT}} `G` او ملکیتونه (Gradient) وروسته ګراډیانټ بدلوي، یا هر هاچ ګراډیانټ جوړوي. ګراډیانټ په سکرین کې رسم او چاپ کېږي. DWG 2004 او نوي هغه د ریښتیني ګراډیانټ هاچ په توګه ساتي؛ DXF 2000 او DWG 2000 یې د CadCraft لپاره ساتي، او نور پروګرامونه یې د لومړي رنګ ډکه سیمه ویني.

### HATCHGENERATEBOUNDARY

مستعار نوم: `HGB`. هغه کرښه بیا جوړوي چې هاچ یې له لاسه ورکړې. `Select hatches` (یا لومړی یې وټاکئ)، بیا `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- د هاچ هر حلقه په هاچ کې د لایې تړل شوی پولي لاین کېږي؛ نوي پولي لاینونه ټاکل پاتې کېږي. منحني څنډه بیرته د لنډو مستقیمو برخو په توګه راځي چې هاچ یې ساتي.
- د Yes سره هاچ نوي خپل کرښې تعقیبوي، لکه هغه هاچ چې {{cmd:HATCH}} یې جوړوي. یو د بېرته کولو ګام.
- کله چې هېڅ هاچ ونه ټاکل شي، دا وایي.

### POINT

مستعار نوم: `PO`؛ یا {{ui:رسم}} › {{ui:نور}} › {{ui:ټکی}}. د ټکو شیان، هر کلیک یو، تر Enter پورې.

- `Specify a point`

### XLINE

مستعار نوم: `XL`؛ یا {{ui:رسم}} › {{ui:نور}} › {{ui:جوړونې کرښه}}. ساختماني کرښې، له دواړو خواوو پای نلري. وګورئ [ساختماني کرښې او نیمې کرښې](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`، بیا `Specify through point` د هرې کرښې لپاره، تر Enter پورې.
- `A`: `Enter angle of construction line [Reference] <0>`؛ `R` لومړی `Select a line object` پوښتي.
- `B`: `Specify angle vertex point`، `Specify angle start point`، بیا `Specify angle end point` د هرې کرښې لپاره.
- `O`: `Specify offset distance [Through] <Through>`، بیا `Select a line object` او `Specify side to offset` (یا `Specify through point`) د هرې کرښې لپاره.

### RAY

مستعار نوم نشته؛ یا {{ui:رسم}} › {{ui:نور}} › {{ui:نیمه کرښه}}. `Specify start point`، بیا `Specify through point` د هرې شعاع لپاره، تر Enter پورې.

### TEXT

مستعار نومونه: `DT`، `DTEXT`؛ یا {{ui:متن}} په وسیلو بار کې. یو کرښې متن؛ هره کرښه خپل شی ده.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`، بیا `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`، تکرار شوی: هر Enter راتلونکی کرښه لاندې پیلوي. Enter په خالي کرښه کې پای ته رسوي. {{key:Space}} دلته یو ځای ټایپوي.

### DIVIDE

مستعار نوم: `DIV`. {{cmd:DIVIDE}} په کرښه، قوس، دایره، پولي لاین، spline یا بیضوي کې نښې ږدي چې په مساوي برخو یې ویشي. شی وټاکئ، بیا د برخو شمېر ورکړئ (له 2 تر 32767). خلاص شی یو نښه له برخو لږ ترلاسه کوي؛ تړل شوی یوه نښه د خپل پیل سره هم ترلاسه کوي. شی پخپله نه ویشل کېږي. نښې ټکي دي؛ `Block` د دې پر ځای د دې نقشې بلاک غواړي او دا چې ایا د شي سره ګرځي. د spline او بیضوي اوږدوالی د لنډو وترونو په اوږدو کې اندازه کېږي. متن، هاچونه او نور شیان چې اوږدوالی نه لري رد کوي.

### MEASURE

مستعار نوم: `ME`. {{cmd:MEASURE}} په کرښه، قوس، دایره، پولي لاین، spline یا بیضوي کې هر ورکړل شوي اوږدوالي ته یو نښه ږدي، د هغه پای څخه شمېرل کېږي چې ستاسو کلیک ته نږدې دی (تړل شوی شی: له پیل څخه). اوږدوالی یا د ټایپولو سره ورکړئ یا د دوو ټکو سره. خلاص شي لیرې پای نښه نه ترلاسه کوي. `Block` په هر نښه کې ټکي پر ځای یو بلاک ږدي. د 0 اوږدوالی، د شي له اوږدوالي ډیر، او هغه چې له 32767 نښو ډیرې نښې جوړوي رد کوي.

### BOUNDARY

مستعار نومونه: `BO`، `BPOLY`. {{cmd:BOUNDARY}} د هغه سیمې شاوخوا یو تړل شوی پولي لاین جوړوي چې هغه ټکی لري چې ټاکئ، له هرې کرښې، قوس، دایرې، پولي لاین او منحني څخه چې په سکرین کې یې محدوده کړې. د قوس یا دایرې سره پیوستې برخې بیرته د قوس قطعې کېږي؛ د بیضوي او spline برخې بیرته لنډې مستقیمې قطعې کېږي. کله چې `Islands` فعال وي (پیل امستنه)، هره تړل شوې سیمه دننه هم خپل پولي لاین ترلاسه کوي. ټکي ټاکل ته دوام ورکړئ؛ Enter پای ته رسوي. هغه شیان چې سیمه محدوده کوي په خپل حال پاتې کېږي. کله چې هېڅ تړل شوې سیمه ټکي ته نږدې نه وي، دا وایي.

### BLEND

{{cmd:BLEND}} د دوو خلاصو منحنیو پایونو ترمنځ spline رسموي. هر منحني د پای سره نږدې وټاکئ چې یوځای شي. `CONtinuity` ټاکي `Tangent` (spline دواړو منحنیو سره مماس پریږدي او ورسېږي) یا `Smooth` (هم د دوی د پیچ سره سم پیچي)؛ انتخاب د ناسته لپاره ساتل کېږي. دوه منحني نه بدلېږي. تړل شوي شیان او دوه پایونه چې دمخه یو ځای کېږي رد کوي.

### REGION

مستعار نوم: `REG`. {{cmd:REGION}} تړل شوي شیان په سیمو (regions) بدلوي: مسطح سیمې چې یوځای، پرې او اندازه کېدای شي. دایرې، تړل شوي پولي لاینونه، تړل شوي بیضوي یا تړل شوي spline، یا کرښې، قوسونه او خلاص پولي لاینونه وټاکئ چې سر په سر یوه حلقه تړي؛ هره حلقه یوه سیمه کېږي او هغه شیان بدلوي چې له هغو راغلي. قوسونه قوسونه پاتې کېږي؛ بیضوي او spline لنډې مستقیمې قطعې کېږي. هغه څه چې تړل شوي نه وي او هېڅ حلقه نه تړي همداسې پاتې کېږي، او دا ښیي څو. په نقشه کې سیمه یو یا ډیر تړل شوي پولي لاینونه دي چې د نامه نه لرونکي ډلې په توګه یوځای ساتل کېږي، نو یو کلیک ټوله سیمه ټاکي او کاپي یې خپله سیمه ده؛ نور پروګرامونه چې فایل پرانیزي تړل شوي پولي لاینونه ویني.

که په نقشه کې سیمې وي، {{cmd:UNION}}، {{cmd:SUBTRACT}} او {{cmd:INTERSECT}} په 2D ټب کې په سیمو کار کوي: `UNION` ټاکل شوې سیمې په یوه کې یوځای کوي (هغه سیمې چې جلا وي یوه سیمه د ډیرو کنډو سره جوړوي)، `SUBTRACT` له هغو سیمو غواړي چې له هغې کم شي او بیا هغه چې لرې شي (سوری د سیمې برخه پاتې کېږي)، `INTERSECT` هغه سیمه ساتي چې ټولې یې شریکې دي. هر یو د پایلې سیمه وایي او یو د بېرته کولو ګام دی. کله چې هېڅ پاتې نه شي یا هېڅ شریک نه وي، رد کوي. په 3D ټب کې، او په نقشه کې چې سیمې نه لري، ورته کمانډونه لکه پخوا په جامدو کار کوي.

## بدلول

### MTEXT

مستعار نومونه: `MT`، `T`؛ یا {{ui:پاراګراف}} په وسیلو بار کې. پراګراف متن چې پلنوالی ته ماتېږي، په ځای کې ټایپ شوی.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: پلنوالی د دوو کنجونو ترمنځ هغه ځای دی چېرې متن ماتېږي. `H` `Specify height` پوښتي، `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`، `L` `Enter line spacing factor (0.25 to 4)`، `R` `Specify rotation angle`، `W` `Specify width (0 for no wrapping)` او دویم کنج پرېږدي.
- بیا په نقشه کې یو بکس پرانیستل کېږي: ټایپ کړئ، {{key:Enter}} نوی پراګراف، {{key:Mod+Enter}} یا بهر کلیک بشپړوي، {{key:Esc}} لغوه کوي. د هغه بار کرښه، پیمانه، پلنوالی او ترتیب ټاکي. وګورئ [متن او نښې اضافه کول](topic:text#write-a-note-that-wraps).

### TEXTEDIT

مستعار نومونه: `ED`، `DDEDIT`؛ یا دوه ځله په متن کلیک وکړئ. `Select a text to edit`، تکرار شوی تر {{key:Enter}} پورې: هر یو په ورته بکس کې پرانیستل کېږي. کله چې د ټاکل شوي یا دوه ځله کلیک شوي متن څخه پیل شي، یوازې هغه سمي او پای ته رسي.

### ERASE

مستعار نومونه: `E`، `DELETE`؛ یا {{key:Delete}} کېکاږئ کله چې شیان ټاکل شوي وي.

- `Select objects` (کله چې شیان دمخه ټاکل شوي وي پریږدل کېږي)

### MOVE

مستعار نوم: `M`.

- `Select objects`
- `Specify base point [Displacement]`، `Specify second point`
- `D`: `Specify displacement`، په `dx,dy` بڼه ټایپ شوی.

### COPY

مستعار نومونه: `CO`، `CP`. هومره ځله کاپي کوي څومره چې ټکي ورکوئ.

د دویم ټکي پوښتنې پر ځای `Array` یو قطار یو ځل جوړوي: د توکو شمېر ورکړئ (اصلي یو شمېرل کېږي)، بیا هغه ټکی چې لومړۍ کاپي ځای نیسي؛ نور په ورته واټن تعقیبوي. `Fit` دا ټکی د وروستۍ کاپي ځای ګرځوي، او نور په مساوي ډول منځ کې ویشل کېږي.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`، تکرار شوی تر Enter پورې. `U` وروستۍ کاپي بېرته اخلي.

### ROTATE

مستعار نوم: `RO`.

- `Select objects`، `Specify base point`
- `Specify rotation angle <last angle>`: درجې، له ساعت سره مخالف مثبت؛ یا یو ټکی کلیک کړئ ترڅو ورته وګرځي.

### SCALE

مستعار نوم: `SC`.

- `Select objects`، `Specify base point`
- `Specify scale factor`: یو فکتور ټایپ کړئ لکه `0.5` یا `2`. کلیک شوی ټکی د بیس ټکي څخه واټن د فکتور په توګه ورکوي.

### MIRROR

مستعار نوم: `MI`.

- `Select objects`
- `Specify first point of mirror line`، `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

مستعار نوم: `AL`؛ یا {{ui:بدلول}} › {{ui:نور}} › {{ui:سمون}}.

- `Select objects`
- `Specify first source point`، `Specify first destination point`
- `Specify second source point (Enter to continue)`، `Specify second destination point`
- `Specify third source point (Enter to continue)`، `Specify third destination point`
- د دوو جوړو سره: `Scale objects based on alignment points? [Yes/No] <N>`

وګورئ [شیان برابرول](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (یا ټاکنه)، `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`، `To [Selection/First/Last/Point] <Selection>`؛ `P` د ټکي غوښتنه کوي. ټاکنه پاتې کېږي.

### DISTRIBUTE

- `Select objects` (لږ تر لږه درې)، `Distribute [Horizontally/Vertically] <Horizontally>`، `Space evenly [Centers/Gaps] <Gaps>`. بهرني دوه پاتې کېږي؛ ټاکنه پاتې کېږي.

### ALIGNPANEL

مستعار نوم: `ALP`؛ یا {{ui:بدلول}} › {{ui:نور}} › {{ui:سمون او ویشل}}. پینل پرانیزي چې ALIGNTO او DISTRIBUTE د کلیکونو سره چلوي.

### LASER

مستعار نوم: `LASERCUT`؛ یا {{ui:لید}} › {{ui:نور}} › {{ui:لیزر…}}. د لیزر پینل د نقشې پر سر پرانیزي: هر لایه څه کوي (کټ، سکور، ایچ، ډکول، انځور)، مخکتنه، د GRBL G-code ساتل، او د Web Serial له لارې چوکاټ او لیږل. وګورئ [نقشه لیزر ته لیږل](topic:laser-cutting).

### STRETCH

مستعار نوم: `S`؛ یا {{ui:کش کول}}. `Select objects to stretch`: پر پایونو کراس کړکۍ کش کړئ (یا `C` ټایپ کړئ) ترڅو حرکت وکړي. `Specify base point [Displacement]`، `Specify second point`. د کړکیو دننه ټکي حرکت کوي: د کرښو پایونه، د پولي لاین رأسونه (د قوس قطعې خپله لوړوالی ساتي)، د اندازې ټکي؛ دایرې، بیضوي، متن، ټکي او بلاکونه کله چې مرکز یا د داخلېدو ټکی دننه وي، ټول حرکت کوي. هغه ټاکنه چې مخکې له کمانډ وشي د هغو کړکیو (او لاسو) ساتي چې جوړې یې کړې، نو په ورته ډول کش کوي. د کړکۍ پرته، شیان ټول حرکت کوي.

### ARRAY، ARRAYRECT، ARRAYPOLAR

مستعار نوم: `AR`؛ یا {{ui:ارې}}. `Select objects`، بیا `Enter array type [Rectangular/POlar] <Rectangular>` (یوازې ARRAY).

- Rectangular په 4 کالمه × 3 قطار پیلېږي، د شیانو د اندازې 1.5 چنده واټن، د مخکتنې په توګه ښودل شوی. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` کالمونه او قطارونه پوښتي، `S` د کالمونو ترمنځ او قطارونو ترمنځ واټنونه (منفي کیڼ یا ښکته ځي)، `COL` او `R` هر یو یوه لوري لپاره.
- Polar پوښتي `Specify center point of array`، په 6 توکو سره په ټوله دایره پیلېږي، ګرځول شوی. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` توکي، `F` زاویه چې ډکېږي (+ له ساعت سره مخالف، − له ساعت سره سم)، `ROT` Yes یا No.
- {{key:Enter}} (eXit) کاپي جوړوي، د ساده شیانو په توګه. یو د بېرته کولو ګام.
- `AS` (ASsociative) د ساده کاپي او یوې ارې ترمنځ بدلوي چې وروسته سمون وړ پاتې کېږي: یو شی چې وروسته یې د {{cmd:ARRAYEDIT}} سره بدلوئ، د خپلو ګریپونو یا ملکیتونو له لارې. ټاکنه یادېږي ({{cmd:ARRAYASSOCIATIVITY}})؛ په ساده کاپي پیلېږي.

### ARRAYPATH

کاپي د منحنۍ په اوږدو کې. `Select objects`، بیا `Select path curve`: یوه کرښه، قوس، دایره، بیضوي، پولي لاین یا spline (د هغو شیانو څخه نه چې ارې یې کېږي). لاره د هغه پای څخه پیلېږي چې شیانو ته نږدې دی، او لومړی توکی هغه شیان دي چېرې چې دي.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`، د مخکتنې سره. `M`: `Divide` توکي په ټوله لاره کې مساوي ویشي، `Measure` هر یو د ځانګړي واټن له مخې ځای کوي. `I`: د توکو شمېر (د Measure سره 0 یعنې د ځای ورسېدونکي؛ د لارې له پای څخه ډیر شمېر د ځای سره محدود کېږي). `SP`: واټن د توکو ترمنځ په لاره کې (Measure ته اړوي). `AL`: Yes هر توکی لاره تعقیبوي، No توکي عمودي ساتي.
- `AS` لکه {{cmd:ARRAY}} کې. د هغې سره فعال، ارې د لارې شکل خپل کاپي ساتي: وروسته د لارې منحني بدلول توکي نه حرکتوي.
- هغه لاره چې منحني نه وي او یو توکی رد کوي.

### ARRAYEDIT

د ارې بدلوي چې AS سره جوړه شوې. `Select array` (یا لومړی یې وټاکئ). هغه څه چې اوس دي چاپ کوي، بیا پوښتي تر {{key:Enter}} پورې:

- Rectangular: `COL` کالمونه او د هغو واټن، `R` قطارونه او د هغو واټن، `A` زاویه چې کالمونه پرې ځي.
- Polar: `I` توکي، `F` د ډکېدو زاویه، `ROT` توکي ګرځول Yes یا No.
- Path: `M` Divide یا Measure، `I` توکي، `SP` واټن، `AL` د لارې سره برابرول.
- `S` (Source) هغه شیان پرانیزي چې ارې تکراروي، په خپل ځان، لکه د بلاک سمونکی. هلته رسم او سمون وکړئ؛ {{cmd:ARRAYCLOSE}} خوندي کوي یا پریږدي، او هر توکی تعقیبوي.
- `REP` (REPlace): `Select replacement objects`، `Specify base point of the replacement objects`، بیا د بدلولو توکي کلیک کړئ، {{key:Enter}}. هغه توکي بدیل ښیي؛ بدیل شیان له نقشې وځي او په ارې کې ژوند کوي. `RES` (RESet) بیرته سرچینې شیان په هر توکي کې ښیي.
- هر بدلون یو د بېرته کولو ګام دی. ساده کاپي، ساده بلاک حواله، او په قفل شوې لایه کې ارې رد کوي.

ورته شمېرې د ملکیتونو په {{ui:ارې}} کې دي، او ارې ګریپونه لري: د بیس ټکی یې حرکت کوي، د دویم توکي ګریپ واټن ټاکي، د وروستي توکي ګریپ شمېره ټاکي (polar: دویم توکي توکو شمېره، وروستی توکی ډکېدونکې زاویه ټاکي). {{cmd:EXPLODE}} ارې بیرته ساده کاپي کوي.

### ARRAYCLOSE

د {{cmd:ARRAYEDIT}} سرچینه پای ته رسوي: `Save the changes to the array's source objects? [Save/Discard] <Save>`. کله چې د ارې سرچینې شیان خلاص نه وي، دا وایي. {{cmd:BCLOSE}} همدا کار کوي.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. ټاکي چې {{cmd:ARRAY}}، ARRAYRECT، ARRAYPOLAR او {{cmd:ARRAYPATH}} پیل کوي؛ د دوی `AS` اختیار همدا ټاکنه بدلوي. په همدې براوزر کې یادېږي.

### OFFSET

مستعار نوم: `O`. کرښې، قوسونه، دایرې او پولي لاینونه.

کله چې پولي لاین بهر حرکت کوي او د هغه مستقیمې قطعې په یوه کنج کې جلا کېږي، {{cmd:OFFSETGAPTYPE}} ټاکي چې ګپ څنګه تړل کېږي.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`، بیا `Specify point on side to offset` (یا، د Through سره، `Specify through point`)، تکرار شوی تر Enter پورې.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: څنګه {{cmd:OFFSET}} د پولي لاین د بهرنیو کنجونو ګپونه تړي. `0` قطعې غځوي تر هغه چې یو بل سره ولګي (پیل امستنه)، `1` یې د زاړه کنج شاوخوا قوس سره یوځای کوي، `2` یې مستقیم پرې کولو سره. داخلي کنجونه او قوس قطعې اغېزمن نه کېږي. د ناسته لپاره ساتل کېږي.

### EXTRIM

{{cmd:EXTRIM}} د یوې څنډې یو اړخ ټول لنډوي. د پرې کولو څنډه وټاکئ (کرښه، قوس، دایره، پولي لاین، بیضوي، spline یا ساختماني کرښه)، بیا د هغه اړخ یوه ټکی وټاکئ چې پاکېږي: هر کرښه، قوس، دایره، پولي لاین او ساختماني کرښه چې څنډه کراس کوي هغه برخه له لاسه ورکوي چې په هغه اړخ ده، چېرې چې له څنډې پیلېږي. کله چې اړخ ټاکئ، هغه برخې چې ورکېږي د اشارې سره ځي. د تړلې څنډې لپاره اړخونه دننه او بهر دي. هغه شیان چې یوازې څنډې ته لمس کوي، او متن، هاچونه، spline او بیضوي چې له هغې تېریږي، همداسې پاتې کېږي. یو د بېرته کولو ګام.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: څنګه {{cmd:TRIM}} او {{cmd:EXTEND}} پیلېږي. `1` Quick: هر شی یوه پرې کولو څنډه یا حد دی. `0` Standard: لومړی څنډې غواړي. همدارنګه `(setvar "TRIMEXTENDMODE" 0)` په LISP کې.

### TRIM

مستعار نوم: `TR`. لومړی `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` چاپ کوي. په Quick حالت کې هر ښکاري شی پرې کولو څنډه ده، او هغه شی چې هېڅ یې کراس نه کوي ړنګېږي؛ په Standard حالت کې لومړی `Select cutting edges (Enter = every object)` پوښتي او یوازې هغه ځایونه پرې کوي.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`، تکرار شوی: هغه ټوټه کلیک کړئ چې لرې شي (کله چې ستاسو اشاره پر دې پروت وي، خړ او ډش ښکاري)، یوه لاره د څو ټوټو له لارې کش کړئ (ټول په یوه ګام کې ځي)، یا دوه تشې ځایونه کلیک کړئ د فینس لپاره ترمنځ یې. {{key:Shift}} اوږدوي. `T` د پرې کولو څنډې غوره کوي (Standard حالت)، `F` د فینس ټکي پوښتي، `C` دوه د کړکۍ کنجونه (هغه ټوټې چې برخه یې دننه وي ځي)، `O` `Enter a trim mode option [Quick/Standard]` پوښتي، `E` `Enter an implied edge extension mode [Extend/No extend]` پوښتي (EDGEMODE)، `R` هغه شیان ړنګوي چې ټاکئ، `U` وروستی انتخاب یا کش بېرته اخلي. Enter پای ته رسوي. وګورئ [پرې کول او اوږدول](topic:trim-and-extend).

- د هاچ پر کلیک هاچ پرې کېږي: د پرې کولو څنډې هاچ شوې سیمه ویشي، او هغه ټوټه چې کلیک شوې لرې کېږي (د کرښې پر ځای کومه ښکاره پاتې نه کېږي). هاچ خپل نمونه یا ګراډیانټ ساتي؛ هغه هاچ چې خپل کرښې ته لینک شوی و، وروسته نه لینک کېږي، ځکه نور هغه نه ډکوي. دا وایي کله چې هېڅ پرې کولو څنډه هاچ ونه ویشي، کله چې کلیک د هاچ څخه بهر وي، او کله چې هېڅ پاتې نه شي (د {{cmd:ERASE}} وکاروئ). لاره یا فینس چې کش شوی هاچ نه پرې کوي.

### EXTEND

مستعار نوم: `EX`. ورته لکه TRIM بل لوري: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. کلیک په یوه شي کې هغه پای چې نږدې یې دی تر راتلونکي حد پورې اوږدوي؛ کش شوې لاره یا فینس هر هغه شی اوږدوي چې کراس کوي؛ {{key:Shift}} پرې کوي. `B` د حد څنډې غوره کوي (Standard حالت). Mode او Edge له TRIM سره شریک دي.

### LINKVIEWS

مستعار نوم: `SYNCVIEWS`؛ یا {{ui:لید}} › {{ui:نور}} › {{ui:د پینونو لیدونه یو ځای کول}}، یا د نقشې په ټبونو کې د لینک نښه. `Link the panes' views [ON/OFF]` (Enter بلې حالت ته اوړي): کله چې فعال وي، په فعاله پین کې حرکت یا زوم هر هغه پین حرکت کوي چې ورته ډول ځای ښيي. وګورئ [سکرین ویشل](topic:split-screen).

### OPENIN3D

هېڅ مستعار نوم نشته؛ یا {{ui:لید}} › {{ui:نور}} › {{ui:په ModelCraft کې پرانیستل}} چېرې چې د 3D ماډلینګ اپ ورکړل شوې نقشه اخلي. دا هلته په نوې ټب کې د DWG په توګه پرانیزي (هېڅ نه اپلوډېږي). که براوزر ټب بند کړي، دا وایي.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: هغه څه چې په تشه ځای کې کش او فشار رسموي. ورته ټاکي لکه امستنې › CadCraft › د ټاکلو لپاره کش کول. وګورئ [د لاسو ټاکنه](topic:lasso-selection).

### FILLET

مستعار نوم: `F`. کرښې، قوسونه، دایرې او پولي لاینونه. لومړی `Current settings: Mode = TRIM, Radius = 0` چاپ کوي.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` `Specify fillet radius <last>` پوښتي. `T` `Enter Trim mode option [Trim/No trim]` پوښتي: په No trim شیان همداسې پاتې کېږي او یوازې قوس اضافه کېږي.
  - `M` کمانډ د نورو کنجونو لپاره تر {{key:Enter}} پورې دوام ورکوي؛ `U` وروستی کنج بې له دې چې کمانډ پریږدي بېرته اخلي.
  - `P` `Select 2D polyline [Radius]` پوښتي او هر کنج ګردوي چیرې چې دوې مستقیمې قطعې یو بل سره ګرځي. هغه ګردونې چې دمخه یې لري د نوي شعاع لخوا ځای نیول کېږي؛ شعاع 0 یې لرې کوي. هغه کنجونه چې خواوې یې د شعاع لپاره ډېرې لنډې دي پرېښودل کېږي او شمېرل کېږي.
- `Select second object or shift-select to apply corner [Radius]`. د تېز کنج لپاره {{key:Shift}} ونیسئ کله چې کلیک کوئ، د شعاع له پامه پرته.

د هغې برخې پر خوا کلیک وکړئ چې ساتل یې غواړئ. دوې کرښې چې سره نه لګېږي اوږدېږي. دوې موازي کرښې د دوی ترمنځ نیم دایره ترلاسه کوي، د لومړۍ کرښې پای ته نږدې چې کلیک یې کړی. دایره هېڅکله نه پرې کېږي. د یوه پولي لاین دوې ګاونډي قطعې د پولي لاین دننه قوس ترلاسه کوي؛ پولي لاین او بل شی هغه وخت کار کوي کله چې پرې کول د پولي لاین په لومړي یا وروستي قطعه ولګي.

### CHAMFER

مستعار نوم: `CHA`. کرښې او د پولي لاینونو مستقیمې قطعې. لومړی اوسني واټنونه (یا اوږدوالی او زاویه) چاپ کوي.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` `Specify first chamfer distance <last>` او `Specify second chamfer distance <the first>` پوښتي: لومړی د لومړۍ کرښې څخه پرې کېږي، دویم د بلې څخه.
  - `A` `Specify chamfer length on the first line` او `Specify chamfer angle from the first line` پوښتي.
  - `E` (mEthod) غوره کوي چې دوه کنجونه بل chamfer کاروي. `T`، `M`، `U` او `P` لکه {{cmd:FILLET}} کار کوي.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+کلیک تېز کنج جوړوي.

د کرښې څخه اوږد واټن رد کېږي (`Distance is too large.`).

### BREAK او BREAKATPOINT

مستعار نوم: `BR`. `Select object` (چیرې کلیک کوئ لومړی ټکی دی)، `Specify second break point [First point]`؛ `F` `Specify first break point` او `Specify second break point` پوښتي. هغه برخه چې منځ کې ده لرې کېږي؛ په دایره کې، له لومړي ټکي څخه له ساعت سره مخالف. BREAKATPOINT `Specify break point` پوښتي او شی هلته دوه برخې کوي (دایره نه).

### LENGTHEN

مستعار نوم: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: یو انتخاب `Current length` (او د قوس شامل زاویه) چاپ کوي او بیا پوښتي. `DE` `Enter delta length (negative shortens) [Angle]` پوښتي، `P` `Enter percentage length`، `T` `Specify total length [Angle]`، `DY` کش کوي. بیا `Select an object to change [Undo]`، تکرار شوی: هغه پای چې کلیک ته نږدې دی حرکت کوي. کرښې، قوسونه او خلاص پولي لاینونه.

### JOIN

مستعار نوم: `J`. `Select objects to join`. کرښې، قوسونه او خلاص پولي لاینونه چې سر په سر یو ځای کېږي پولي لاین کېږي (تړل شوي کله چې زنځیر تړل شي)؛ کرښې په یوه کرښه یوه کرښه کېږي؛ قوسونه د یوې دایرې ترمنځ یو قوس یا دایره کېږي. تاریخچه وایي څو شیان یوځای شول او څو ونه شول.

### MATCHPROP

مستعار نومونه: `MA`، `PAINTER`. `Select source object`، بیا `Select destination objects [Settings]` او {{key:Enter}}. لایه او رنګ کاپي کوي، او د ورته ډول شیانو ترمنځ د متن لوړوالی او پلنوالی، د اندازو اندازې، یا د هاچ نمونه. `S` `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` پوښتي، تکرار شوی تر Enter پورې؛ انتخاب د ناسته لپاره ساتل کېږي.

### EXPLODE

مستعار نوم: `X`. پولي لاینونه کرښې او قوسونه کېږي، بلاک حوالې خپل شیان کېږي، اندازې کرښې، د تیر سرونه او متن کېږي. هغه ارې چې سمېدای شي ({{cmd:ARRAYEDIT}}) ساده کاپي کېږي.

- `Select objects`

### GROUP

مستعار نوم: `G`. {{cmd:GROUP}} ټاکل شوو شیانو ته یو نوم ورکوي چې شریکوي. شیان وټاکئ، بیا نوم ولیکئ (بې ځایه؛ `?` ډلې لیست کوي؛ Enter نا نومول شوې ډله جوړوي) او، د نومول شوې ډلې لپاره، اختیاري تشریح. له هغه وخت وروسته د هغو له یوه کلیک یا کړکۍ چې یو یې نیسي، ټول ټاکل کېږي، نو یوځای حرکت، کاپي او ړنګېږي؛ هر شی خپل شی پاتې کېږي. یو شی کېدای شي په ډیرو ډلو کې وي. د ټولې ډلې کاپي یوه نوې نا نومول شوې ډله ده؛ د یوه غړي یوازینۍ کاپي ډلې ته ورځي. ډلې له هغې ساحې پورې تړلې دي چې په کې جوړې شوې (ماډل یا پاڼه). دا د DWG یا DXF په توګه د خوندي کولو پر مهال ساتل کېږي او بیا په CadCraft کې خلاصېږي؛ DXF 2000 فایلونه یې د نورو پروګرامونو لپاره د ډلې شیانو په توګه هم لري، او په بل پروګرام کې جوړې ډلې کله چې DXF یا DWG پرانیستل شي لوستل کېږي.

### UNGROUP

مستعار نوم نشته. {{cmd:UNGROUP}} ډلې له منځه وړي: د ډلو شیان وټاکئ (هره ډله چې دوی یې لري له منځه ځي) یا `Name` او د ډلې نوم ټایپ کړئ. شیان په نقشه کې پاتې کېږي. یو د بېرته کولو ګام ډلې بیرته راوړي.

### GROUPEDIT

{{cmd:GROUPEDIT}} یوه ډله بدلوي. یو شی یې وټاکئ، یا `Name` او نوم، هغه ډله چې دمخه ټاکل شوې وي لکه څنګه چې ده اخلي. بیا: `Add` شیان (یو په یو، نه ډله په ډله)، `Remove` شیان، ډله `REName`، `Description` بدلول، یا `Selectable` ټاکل (چې یو کلیک ټوله ډله ټاکي که نه). `eXit` یا Enter پای ته رسوي. ډله چې هېڅ شی پکې پاتې نه وي ورکېږي.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: د `1` سره (پیل امستنه) کلیک یا کړکۍ په ډله شوي شي ټوله ډله ټاکي؛ د `0` سره یوازینی شیان، نو تاسو کولی شئ یو غړی سم کړئ. د ناسته لپاره ساتل کېږي.

## کلیپ بورډ

د CadCraft خپل کلیپ بورډ: په یوه نقشه کې، د نقشو ترمنځ او د CadCraft ټبونو ترمنځ په همدې براوزر کې کار کوي. وګورئ [کاپي، سرېښول او نقل](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}، یا {{ui:کاپي کول}} په {{ui:سمون}} ګروپ کې. شیان د کلیپ بورډ ته کاپي کوي، د بلاکونو او لایو سره چې کاروي. شیان ټاکل پاتې کېږي.

- `Select objects to copy` (کله چې شیان دمخه ټاکل شوي وي پریږدل کېږي)

### CUTCLIP

{{key:Mod+X}}، یا {{ui:پرې کول}} په {{ui:نور}} مینو کې. شیان کلیپ بورډ ته کاپي کوي، بیا یې ړنګوي (یو د بېرته کولو ګام).

- `Select objects to cut` (کله چې شیان دمخه ټاکل شوي وي پریږدل کېږي)

### COPYBASE

شیان د یو بیس ټکي سره چې تاسو یې ټاکئ کلیپ بورډ ته کاپي کوي؛ سرېښول هغه ټکی ځای کوي.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}، یا {{ui:سرېښول}} په {{ui:سمون}} ګروپ کې. کاپي د کرسر تعقیبوي، د خپلو پراخوالو ښکته کیڼ کنج څخه ځړي (یا د مرکز، یا `COPYBASE` ټکي څخه؛ وګورئ [د CadCraft امستنې](topic:settings)).

- `Specify insertion point`

سرېښول شوي شیان ټاکل شوي دي. بلاک چې نقشه یې دمخه د ورته نوم سره لري د دې نقشې تعریف ساتي.

کله چې په MarkupCraft کې کاپي شوې سیمه د CadCraft له کاپي شوي څخه نوې وي (او له 6 ساعتو کمه عمر لري)، {{key:Mod+V}} او `PASTECLIP` پر ځای هغه سیمه سرېښي: وګورئ `PASTEAREA`.

### PASTEAREA

مستعار نوم: `PAREA`. {{ui:کاپي شوې ساحه سرېښول}} په {{ui:نور}} مینو کې. هغه سیمه سرېښي چې په MarkupCraft کې د {{ui:د ساحې کاپي کول}} سره کاپي شوې، د انځور په توګه د حقیقي اندازې سره. وګورئ [انځورونه په نقشه کې](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (یوازې کله چې پاڼه د نقشې پیمانه نه درلوده): یوه شمېره، {{key:Enter}} د کاغذ اندازې لپاره، یا `P`، بیا `First point on the pasted area`، `Second point on the pasted area` او د دوی ریښتیني واټن.

### PASTEORIG

{{key:Mod+Shift+V}}، یا {{ui:ځای کې سرېښول}} په {{ui:نور}} مینو کې. هغه ځای ته سرېښي چې شیان له هغه ځای کاپي شوي. هېڅ نه پوښتي.

### DUPLICATE

مستعار نوم: `DUP`. {{key:Mod+D}}، یا {{ui:نقل کول او لېږدول}} په {{ui:نور}} مینو کې. د شیانو یوه کاپي د اشارې سره له هغه ځایه ځي چیرې چې دی؛ {{key:Esc}} هېڅ نه پرېږدي. د کلیپ بورډ کاروي نه.

- `Select objects to duplicate` (کله چې شیان دمخه ټاکل شوي وي پریږدل کېږي)
- `Specify where the copy goes (Esc leaves nothing)`: کلیک وکړئ، ټکی ولیکئ، `@dx,dy` (له هغه ځایه چې اشاره وه)، یا یو واټن د کرسر په لور.

### SELECT

`Select objects` پوښتي (د لاندې ټولو اختیارونو سره) او هغه څه چې ټاکئ ټاکل پاتې کوي، د راتلونکي کمانډ لپاره، یا د وروسته `P` لپاره.

### QSELECT

مستعار نوم: `QS`. په براوزر کې، د {{ui:ګړندی ټاکل}} ډیالوګ (وګورئ [شیان ټاکل](topic:select-objects#select-by-a-rule-quick-select)). پرته له دې، کمانډ کرښه `Enter object type`، `Enter property`، `Enter operator [=/<>/>/</*/Select all] <=>` او `Enter value` پوښتي. ورته شیان ټاکل کېږي.

### SELECTSIMILAR

مستعار نوم: `SIM`. `Select objects [SEttings]` (یا اوسنۍ ټاکنه): هر هغه شی ټاکي چې ورته ډول، لایه او رنګ ولري (او د بلاک نوم، د هاچ نمونه). `SE` `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` پوښتي، تکرار شوی تر {{key:Enter}} پورې.

### FIND

هېڅ مستعار نوم نشته؛ یا {{ui:سمون}} › {{ui:نور}} › {{ui:پلټل او بدلول}}. په براوزر کې، د {{ui:پلټل او بدلول}} ډیالوګ (وګورئ [متن او یادښتونه اضافه کول](topic:text#find-and-replace-words)). پرته له دې: `Enter text to find`، بیا `Enter replacement text (Enter: select what is found)`. په متن، د ځانګړتیا ارزښتونو او د اندازې متن کې ګوري، په خلاص ټب یا ټاکنه کې.

### SELECTALL او DESELECT

`SELECTALL` (مستعار نوم `AI_SELALL`، {{key:Mod+A}}) په خلاص ټب کې هر هغه شی ټاکي چې سمېدای شي. `DESELECT` (مستعار نومونه `AI_DESELECT`، `SELECTNONE`؛ یا {{key:Esc}}) ټاکنه پاکوي.

## اندازې

### DIMLINEAR

مستعار نومونه: `DLI`، `DIMLIN`. افقي یا عمودي واټن.

- `Specify first extension line origin [Select object]` (Enter یا `S`: `Select object to dimension`، بیا یوه کرښه، قوس، دایره یا د پولي لاین قطعه کلیک کړئ)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` متن غواړي (`<>` اندازه شوې ارزښت دی)، `H` او `V` لوری ټاکي، `R` `Specify angle of dimension line <0>` پوښتي.

### DIMALIGNED

مستعار نومونه: `DAL`، `DIMALI`. د دوو ټکو ترمنځ رښتینی واټن.

- مبدأونه لکه {{cmd:DIMLINEAR}}، بیا `Specify dimension line location [Text]`.

### DIMANGULAR

مستعار نومونه: `DAN`، `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- قوس: زاویه یې. دایره: `Specify second angle endpoint`. کرښه: `Select second line`. Enter: `Specify angle vertex`، `Specify first angle endpoint`، `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: د اندازې لپاره په زاویه کې کلیک وکړئ.

### DIMRADIUS او DIMDIAMETER

مستعار نومونه: `DRA`، `DIMRAD`؛ `DDI`، `DIMDIA`.

- `Select arc or circle`، بیا `Specify dimension line location [Text]`.

### DIMCONTINUE

مستعار نومونه: `DCO`، `DIMCONT`. له وروستۍ خطي یا مستقیمې اندازې څخه دوام ورکوي (یا `Select linear or aligned dimension` پوښتي).

- `Specify second extension line origin [Undo]`، تکرار شوی تر Enter پورې.

### DIMBASELINE

مستعار نومونه: `DBA`، `DIMBASE`. ورته لکه {{cmd:DIMCONTINUE}}، مګر هره اندازه له لومړي مبدأ پیلېږي او لا ډېر لرې سټیک کېږي.

### DIMORDINATE

مستعار نومونه: `DOR`، `DIMORD`. `Specify feature location`، بیا `Specify leader endpoint [Xdatum/Ydatum/Text]`. د ټکي واټن د UCS مبدأ څخه په X یا Y محور ولیکي، په یوې لارښوونې کرښې: هغه لارښوونه چې ډیره پورته یا ښکته ده X لولي، هغه چې اړخیزه ده Y لولي؛ `Xdatum` او `Ydatum` یې ټاکي. اول مبدأ د {{cmd:UCS}} سره وټاکئ (له هغه پرته دا د نقشې 0,0 دی). ګریپونه ټکی، مبدأ او د لارښوونې پای حرکت کوي، او ارزښت تعقیبوي. په DWG او DXF کې د ریښتیني ترتیبي اندازې په توګه ساتل کېږي. د لارښوونې پای پر خپل ټکي رد کوي.

### DIMARC

مستعار نوم: `DAR`. `Select arc or polyline arc segment`، بیا `Specify arc length dimension location [Text]`. د قوس په اوږدو کې اندازه کوي (نه وتر) او د ارزښت مخکې د قوس نښه لیکي. بشپړ دایره، کرښه یا مستقیمه پولي لاین قطعه رد کوي. DWG دا د قوس د اوږدوالي اندازه ساتي؛ DXF دا د زاویوي اندازه ساتي چې اوږدوالی یې متن دی، او CadCraft بیا د قوس د اوږدوالي اندازه په توګه پرانیزي.

### DIMJOGGED

مستعار نومونه: `DJO`، `JOG`. `Select arc or circle`، `Specify center location override`، `Specify jog location`. د شعاع اندازه د منحنۍ لپاره چې مرکز یې لرې یا له پاڼې بهر وي: د اندازې کرښه له هغه ټکي پیلېږي چې تاسو یې ورکوئ پرځای د مرکز څخه، د ماتې سره، او بیا هم ریښتینی شعاع لیکي. DWG دا د ماتې شعاع اندازه ساتي؛ DXF دا د شعاع اندازه ساتي، او CadCraft بیا ماته پرانیزي.

### DIMJOGLINE

مستعار نوم: `DJL`. `Select dimension to add jog [Remove]`، بیا `Specify jog location (or press Enter)`. د خطي یا مستقیمې اندازې کرښې ته د ماتې نښه ږدي، چې ښیي واټن په پیمانه نه دی رسم شوی؛ ارزښت نه بدلېږي. `Remove` یې لرې کوي. نور ډولونه رد کوي.

### QDIM

هېڅ مستعار نوم نشته. `Select geometry to dimension`، بیا `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. ډیری شیان په یو ګام کې اندازه کوي، د کرښو او پولي لاین قطعو پایونو څخه، د دایرو او قوسونو مرکزونو څخه، ټکو او بلاک حوالو څخه. د شیانو پورته یا ښکته ځای واټن په پار اندازه کوي، د دوی خوا کې یوه ځای واټن په پورته لوري اندازه کوي. `Continuous` ټکي زنځیر کوي، `Baseline` ټول له لومړي څخه اندازه کوي، `Staggered` جوړې له منځ څخه بهر ځای ږدي، `Ordinate` هر ټکي ته د هغه واټن ورکوي له مبدأ څخه (`datumPoint` نوی ټاکي)، `Radius` او `Diameter` هر دایره او قوس چې وټاکل شي اندازه کوي. حالت یادېږي. هر هغه څه چې جوړوي یو د بېرته کولو ګام دی. کله چې له دوو ټکو کم وي، یا د Radius او Diameter لپاره قوس یا دایره نه وي، دا وایي.

### DIMBREAK

مستعار نوم: `DBREAK`. `Select dimensions to add or remove breaks`، بیا `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` په اندازې او توسیعي کرښو کې هر ځای چې بل شی یې کراس کړي یو ځای پرېږدي، او کله چې هغه شیان یا اندازه حرکت وکړي بیا یې حساب کوي. `Manual` (یوه اندازه) دوه ټکي غواړي او ترمنځ یې ځای پرېږدي. `Remove` ټول ځایونه لرې کوي. ځای د اندازې د متن د لوړوالي 1.5 چنده دی.

### DIMSPACE

هېڅ مستعار نوم نشته. `Select base dimension`، `Select dimensions to space`، `Enter spacing value or Auto <Auto>`. د موازي خطي او مستقیمو اندازو اندازې کرښې حرکت کوي (یا زاویوي د همدې راس په اړه) ترڅو یو شان واټن ولري، له بنسټیزې اندازې شمېرل شوي، هر یو په خپل اړخ کې. `0` یې له بنسټیزې سره یو ځای کوي؛ `Auto` د بنسټیزې اندازې د متن د لوړوالي دوه چنده دی. هغه اندازې چې له بنسټیزې سره موازي نه وي پرېښودل کېږي.

### DIMINSPECT

هېڅ مستعار نوم نشته. `Select dimensions`، `Inspection frame shape [Round/Angular/None/remove] <Round>`، `Enter label`، `Enter inspection rate <100%>`. د ارزښت شاوخوا چوکاټ د مخکښ لیبل او د وروسته تفتیش نرخ سره رسموي. `remove` چوکاټ لرې کوي. د تحمل متن له ارزښت سره پاتې کېږي.

### DIMOVERRIDE

مستعار نومونه: `DOV`، `DIMOVER`. `Enter dimension variable name to override or Clear`، `Enter new value for …`، تر Enter پورې بیا بیا، بیا `Select dimensions`. دا امستنې یوازې په ټاکل شوو اندازو بدلوي؛ د اندازې سټایل نه بدلېږي. شمېرې یا سوئچ یې متغیرونه اخلي (`DIMTXT`، `DIMASZ`، `DIMSCALE`، `DIMDEC`، `DIMSE1` …). `Clear` ټاکل شوې اندازې بیرته خپل سټایل ته ږدي. هغه نوم چې دا ډول متغیر نه وي او هغه ارزښت چې نه منل کېږي رد کوي.

### DIMREASSOCIATE

مستعار نومونه: `DRE`، `DIMREASSOC`. `Select dimensions`، بیا د هرې یوې لپاره د هغې د توسیعي کرښو مبدأ (`Specify first extension line origin on an object`: د پای یا د کرښې منځ، د پولي لاین کنج، یا مرکز ته نیول؛ Enter هغه ټکی آزاد ساتي)، یا د شعاع، قطر، ماته شعاع یا د قوس د اوږدوالي اندازو لپاره `Select arc or circle`. اندازه بیا هغو شیانو پورې تړل کېږي: کله چې حرکت وکړي یا اندازه یې بدله شي، هغه هم تعقیبوي او بیا اندازه کوي، په همدې یو د بېرته کولو ګام کې. د تړل شوي ټکي په لاس حرکت کول، یا شی ړنګول، دا تړل ختموي. تړل په DWG او DXF 2000 کې د CadCraft خپل معلومات په توګه ساتل کېږي؛ نور پروګرامونه یو عادي اندازه ویني.

### DIMDISASSOCIATE

مستعار نومونه: `DDA`، `DIMDISASSOC`. `Select dimensions`. هغه له هغو شیانو ازادوي چې پورې تړلې دي؛ هېڅ نه حرکت کوي.

### CENTERMARK

مستعار نومونه: `CM`، `DIMCENTER`، `DCE`. `Select circle or arc to add center mark`، بیا تر Enter پورې بیا. د مرکز پر ځای کراس او څلور مرکزي کرښې تر منحنۍ ښه بهر رسموي (linetype CENTER)، د ساده کرښو په توګه په اوسنۍ لایه کې؛ د ټاکل شوې اندازې د تیر اندازې او کلي پیمانې له مخې اندازه کېږي، د UCS سره ګرځي. دوی د دایرې حرکت سره نه تعقیبوي.

### CENTERLINE

مستعار نوم: `CL`. `Select first line`، `Select second line`. د دوو کرښو ترمنځ کرښه رسموي (د بیسکټر سره که یو بل سره ولګي)، د دوی له اوږدوالي یو څه اوږده، په linetype CENTER کې. ساده کرښه ده: دوه کرښې نه تعقیبوي.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

هېڅ مستعار نوم نشته. هر یو `Enter new value for … <current>` پوښتي او دا اندازه د **نوو** اندازو لپاره ټاکي: ټوله پیمانه، د متن لوړوالی، د تیر اندازه، اعشاري ځایونه (تر 8 پورې)، فاصله د متن شاوخوا، توسیع د اندازې کرښې هاخوا، افسټ له مبدأ څخه. وګورئ [د اندازو اندازې ټاکل](topic:dimension-settings).

### DIMLUNIT

د اندازې امستنه: د نوو اندازو د بڼې یوازې (1 ساینسي، 2 اعشاري، 3 انجنیري، 4 معماري، 5 کسري).

### DIMSTYLE او -DIMSTYLE

مستعار نومونه: `DST`، `DDIM`، `D`. د اندازو سټایل مدیر: {{ui:اوسنی ټاکل}}، {{ui:نوی…}}، {{ui:بدلول…}}، {{ui:نوم بدلول…}}، {{ui:ړنګول}}، {{ui:پرتله کول…}}، {{ui:ټاکل شویو ته تطبیقول}}. `-DIMSTYLE` د کمانډ کرښې لپاره: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. وګورئ [د اندازو اندازې ټاکل](topic:dimension-settings#named-dimension-styles).

### DIMEDIT او DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`، بیا اندازې (یا هغه چې دمخه ټاکل شوي). New متن غواړي (`<>` = اندازه)؛ Rotate یوه زاویه؛ Oblique د توسیعي کرښو زاویه د X محور څخه (Enter = هېڅ؛ یوازې خطي او مستقیمې اندازې). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. وګورئ [د اندازو اندازې ټاکل](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

مستعار نوم: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`، یا کله چې اندازې ټاکل شوي وي `Units in the text of the selected dimensions`. اوږدوالی په هغه واحد لیکي چې واحد یې وروسته دی (DIMLFAC او DIMPOST ځای نیسي)؛ `D` بیرته د نقشې واحدونو ته. وګورئ [په mm، cm، m یا km کې اندازې](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## نښې او یادښتونه

### REVCLOUD

مستعار نوم: `RC`. `Arc length: … Type: …` چاپ کوي، بیا `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular `Specify opposite corner` پوښتي؛ Polygonal `Specify next point (Enter closes the cloud) [Undo]`؛ Freehand اشاره تعقیبوي تر کلیک یا {{key:Enter}} پورې؛ `O` `Select object` او `Reverse direction? [Yes/No] <N>` پوښتي او شی ورې بدلوي. `A` د هر قوس اوږدوالی پوښتي. `R`، `P` او `F` د راتلونکي ورې ډول ټاکي. پایله یو تړل شوی پولي لاین د قوسونو دی.

### MLEADER

مستعار نوم: `MLD`؛ یا {{ui:مشر}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`، `Specify leader landing location`، بیا متن په ځای کې بکس کې (یا که نه وي، `Enter text (an empty line ends)`). `Block` لومړی د بلاک نوم پوښتي او څو لارښوونې هغه بلاک ښیي پرځای د متن. نورې لارښوونې کرښې: {{cmd:MLEADEREDIT}}. په DWG کې د ریښتیني څو لارښوونې په توګه ساتل کېږي؛ DXF هغه کرښې، ارو او متن ساتي چې دی یې رسموي.

### MLEADEREDIT

مستعار نوم: `MLE`. `Select a multileader`، بیا `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: هر ټکی له نوې ارو څخه هماغه لنډېدونکي ځای ته یوه لارښوونه کرښه اضافه کوي، تر Enter پورې. `Remove leaders` هغه لارښوونه کرښه لرې کوي چې کلیک یې کړی (څو لارښوونې لږ تر لږه یوه ساتي). `Block content` د بلاک نوم پوښتي او هغه بلاک د متن پر ځای ښیي (ځانګړتیاوې یې غوښتل کېږي)؛ `Text content` متن بیرته راوړي. هره لارښوونه کرښه خپل ګریپ لري. په DWG کې هره لارښوونه کرښه او بلاک په یوه څو لارښوونه کې ساتل کېږي.

### MLEADERALIGN

مستعار نوم: `MLA`. `Select multileaders`، بیا `Select multileader to align to [Distribute/Spacing/Use current spacing]` او `Specify direction`. د نورو څو لارښوونو ځایونه (او متن یا بلاک یې) د هغې د ځای له کرښې سره په هغه لوري کې حرکت کوي چې ټاکل شوې؛ ارې یې په ځای پاتې کېږي. `Spacing` یې مساوي واټن هم ورکوي؛ `Distribute` دوه ټکي غواړي او ترمنځ یې مساوي ویشي. لږ تر لږه دوه څو لارښوونې ته اړتیا ده.

### MLEADERCOLLECT

مستعار نوم: `MLC`. `Select multileaders`، بیا `Specify collected multileader location [Vertical/Horizontal]` (Enter د لومړۍ ځای ساتي). له ډیرو یو څو لارښوونې جوړوي: بلاک منځپانګه یو نوي بلاک ته ځي چې ټول یې کېږدي یوځای یا یو تر بل لاندې؛ د متن منځپانګه یو یادښت کېږي د هرې کرښې سره. لومړۍ څو لارښوونه خپلې لارښوونې کرښې ساتي؛ نورې لرې کېږي. د متن او بلاک منځپانګې ګډوله رد کوي.

## جدولونه

### TABLE

مستعار نوم: `TB`؛ یا {{ui:تشریح}} › {{ui:نور}} › {{ui:جدول}}. جدول جوړوي: یو شی چې حرکت، کاپي، ګرځول، پیمانه او چاپ کېږي، د حجرو سره چې د معلوماتو په توګه ساتل کېږي.

- `Number of data rows or [Paste/File/Style] <3>`، بیا `Number of columns <3>`، `Text height` او `Top left corner of the table`. جدول یو سرلیک قطار (یو ګډ حجره) او د معلوماتو قطارونو پورته سرپاڼه قطار ترلاسه کوي.
- `P`: جدول له کلیپ بورډ د سپریډشیټ حجرو څخه (متن د حجرو ترمنځ ټب سره). کله چې ټکي د کلیپ بورډ په ورته حجرو سره وي، {{key:Ctrl+V}} ورته کار کوي، پرته له دې چې د CadCraft خپل کاپي نوی وي (یا CadCraft نشي ویلی: بیا خپل کاپي سرېښي او دا وایي). `F`: جدول له `.csv` یا ټب سره جلا شوي فایل څخه. لومړی قطار سرلیک قطار کېږي؛ د کالمونو پلنوالی متن ته برابرېږي.
- `S`: د دې جدول لپاره د جدول سټایل غوره کوي (وګورئ {{cmd:TABLESTYLE}}).
- هغه قطار یا کالم شمېره چې عدد نه وي، او له جدول څخه ډېرې حجرې ردوي (2,000 قطارونه، 200 کالمونه، 40,000 حجرې).
- {{cmd:EXPLODE}} جدول کرښو او متن ته اړوي. په DWG کې جدول یو ریښتیني جدول شی دی چې نور پروګرامونه یې سمولی شي؛ په DXF کې دا یو بلاک دی چې رسموي، او CadCraft بیا د جدول په توګه پرانیزي.

### TABLEDIT

مستعار نومونه: `TABLEEDIT`، `TABEDIT`؛ یا دوه ځله په حجره کلیک. جدول سموي.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. یوه حجره کلیک کړئ، یا د جدول له ټاکلو سره یې نوم ټایپ کړئ (`B3`: کالم B، قطار 3؛ د سرلیک قطار قطار 1 دی). په براوزر کې بکس د حجرې پر سر پرانیزي: {{key:Enter}} متن ساتي، {{key:Tab}} راتلونکې حجره ته ځي، {{key:Alt+Enter}} نوې کرښه پیلوي، {{key:Esc}} حجره د هغې په حال پریږدي.
- هغه متن چې د `=` سره پیلېږي فورمول دی: `=A3+B3`، `=B3*C3`، `=Sum(B3:B9)`، `=Average(B3:B9)`، `=Count(B3:B9)`، `=Min(…)`، `=Max(…)`، د `+ - * / ^`، قوسونو او فنکشنونو لکه `sqrt` او `round` سره. حجره ارزښت ښیي؛ فورمول چې خپله حجره نوموي، د جدول بهر حجره، یا بې شمېرې حجره ښیي `####` او کمانډ کرښه وایي ولې.
- `R` / `C`: کالمونه یا قطارونه `Insert` یا `Delete` په ټاکل شوې حجره کې (څو، او پورته یا ښکته، ښي یا کیڼ). فورمولونه د هغو حجرو تعقیبوي چې نومي یې.
- `S`: د کالم پلنوالی او د قطار لوړوالی. قطار هېڅکله د متن له اړتیا ټیټ نه وي. ټاکل شوی جدول په هر کالم او قطار کنډ کې هم ګریپ لري.
- `M`: له یوې ټاکل شوې حجرې تر بلې ګډول؛ `U`: ګډول لرې کول. `A`: برابرول (`TL` پورته کیڼ … `MC` منځ منځ … `BR` ښکته ښي). `H`: د دې حجرې خپل د متن لوړوالی (0 = د سټایل). `K`: قطار یو سرلیک، سرپاڼه یا د معلوماتو قطار کول. `CL`: حجره خالي کول.
- په قفل شوې لایه کې جدول، د ټولو قطارونو یا کالمونو ړنګول، او هغه ګډول چې د بل ګډ شوي حجرې دوه ټوټې کړي رد کوي.

### TABLESTYLE

مستعار نوم: `TS`. د جدول سټایلونه لیست کوي د هر یو د کارولو شمېر سره، بیا `Table style: [New/Set/Edit/Delete/Apply]`.

- سټایل د سرلیک، سرپاڼې او معلوماتو قطارونو د متن لوړوالی او برابرول، د حجرې حاشیه، او کومې کنډې ښودل کېږي (بهرنۍ، د قطارونو ترمنځ، د کالمونو ترمنځ) ساتي.
- `N` له اوسني سټایل یو نوی جوړوي او اوسنی یې کوي؛ `S` اوسنی سټایل ټاکي (نوي جدولونه یې اخلي)؛ `E` یو سمي: هغه جدولونه چې کاروي بیا رسمېږي؛ `A` ټاکل شوو جدولونو ته اوسنی سټایل ورکوي؛ `D` یو لرې کوي (نه Standard، نه اوسنی؛ جدولونه چې کاروي خپل بڼه ساتي).
- سټایلونه د نقشې سره ساتل کېږي (DWG او DXF).

### TABLEEXPORT

هغه څه چې جدول یې ښیي د CSV فایل په توګه ساتي (فورمول د خپل ارزښت په توګه). `Select a table`، یا لومړی یو وټاکئ. متن حجرې چې د `=`، `+`، `-` یا `@` سره پیلېږي یو مخکښ `'` ترلاسه کوي ترڅو سپریډشیټ یې ونه چلوي.

### TABLEPASTE

مستعار نوم: `PASTETABLE`. له کلیپ بورډ د سپریډشیټ حجرو څخه جدول جوړوي، بیا د هغې پورتنی کیڼ کنج پوښتي. ورته لکه {{cmd:TABLE}} › `Paste`.

### DATALINK

مستعار نوم: `DL`. `Data link: [New/List/Remove] <New>`. `N` د CSV فایل غواړي، د هغه جدول ځای کوي او د فایل نوم یادوي؛ `L` لینکونه د فایل، اندازې، هغه وخت چې لوستل شوي او څو جدولونه یې کاروي سره لیست کوي؛ `R` لینک لرې کوي (جدولونه یې ساده جدولونه پاتې کېږي).

### DATALINKUPDATE

مستعار نوم: `DLU`. د ډیټا لینک فایل بیا لولي او هغه جدولونه بیا ډکوي چې ورسره تړلي دي (قطارونه او کالمونه د سمون لپاره اضافه یا لرې کېږي). براوزر پخپله فایل نه شي خلاصولی، نو بیا ستاسو څخه فایل غواړي. کله چې ډیر لینکونه وي، پوښتي چې کوم یې.

## ساحې او ځانګړتیاوې

### FIELD

په نقشه کې یوه ساحه ږدي: متن چې پخپله حساب کوي. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: اوس، یا ساتل شوې، جوړ شوې یا پلاټ شوې نېټه، او بڼه (`yyyy-MM-dd`، `d MMMM yyyy`، `HH:mm`). `F`: د فایل نوم، د توسیع سره یا پرته. `S`: د پاڼې شمېره، سرلیک، یا څو پاڼې دي. `P`: د نقشې ملکیت په نوم (وګورئ {{cmd:DWGPROPS}}). `O`: یو شی وټاکئ، بیا څه ولولئ (سیمه، اوږدوالی، محیط، شعاع، قطر، لایه، نوم، x، y، متن، ګرځښت، رنګ) او اعشاري. `E`: فورمول. `C`: متن چې کوډونه یې لکه څنګه چې ټایپ شوي، لکه `Sheet %<sheetnumber>% of %<sheetcount>%`.
- بیا `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: یو ټاکل شوی متن ساحه د هغه څه وروسته اضافه کوي چې لري؛ یوه جدول حجره همداسې؛ د بلاک حواله کې یې د کومې ځانګړتیا پوښتنه کېږي؛ {{key:Enter}} د نوي متن لوړوالی او ټکی غواړي.
- په سکرین کې ساحه ښکاره خړ شا لري؛ چاپ او PDF هېڅکله نه لري. د ساحې متن په لاس ټایپ کول ساحه ختموي. ساحه چې محاسبه نشي `####` ښیي.
- د شی ساحه خپل شی د کلید له لارې موندلی چې CadCraft پر شیانو ساتي (امستنې › CadCraft › د ادغام وړ فایلونه)؛ کلیدونه بند کېدای شي، هغه رد کوي.

### UPDATEFIELD

مستعار نوم: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` ټاکي کله چې ساحې پخپله تازه شي: د `O` (خلاصول)، `S` (خوندي کول)، `P` (چاپ)، `R` (regen) توري ټایپ کړئ (ټول څلور د پیل لپاره)، یا `NONE`.

### DWGPROPS

مستعار نوم: `DRAWINGPROPS`. د نقشې ملکیتونه لیست کوي، بیا `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. لومړي شپږ هغه دي چې {{ui:د نقشې توضیحات}} پینل ښیي؛ `U` ستاسو خپل نوم او ارزښت اضافه کوي، `R` یو لرې کوي. ساحې یې لولي (`%<prop:title>%`، `%<prop:Client>%`) او سمدستي تعقیبوي. هغه خپل نوم رد کوي چې د ساتل شوو نومونو څخه وي یا `%`، `<`، `>`، یو نښه یا بیک‌سلش ولري.

## پارامتریک

وګورئ [نقشه محدودول](topic:constraints) او [پیرامیټرونه او معادلې کارول](topic:parameters). محدودیتونه په {{ui:ماډل}} ټب کې کار کوي.

### GEOMCONSTRAINT او د GC کمانډونه

مستعار نوم `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`، بیا د هغه کمانډ پوښتنې.

- {{cmd:GCHORIZONTAL}}، {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}، {{cmd:GCPERPENDICULAR}}، {{cmd:GCCOLLINEAR}}، {{cmd:GCCONCENTRIC}}، {{cmd:GCEQUAL}}، {{cmd:GCTANGENT}}: `Select first object`، `Select second object` (دویم حرکت کوي).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`، `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`، `Select second object`، `Select symmetry line`.

### DIMCONSTRAINT او د DC کمانډونه

مستعار نوم `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}، {{cmd:DCHORIZONTAL}}، {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`، `Specify second constraint point`، `Specify dimension line location`، `Dimension text <d1=40>` (یوه شمېره، یو فورمول، یا `name=expression`).
- {{cmd:DCALIGNED}}: لکه پورته، د `[Object/Point & line/2Lines]` سره.
- {{cmd:DCRADIUS}}، {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`، `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN، DELCONSTRAINT، CONSTRAINTBAR، DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` د واټن او زاویې تحمل پوښتي.
- {{cmd:DELCONSTRAINT}} (مستعار نوم `DELCON`): `Select objects`؛ د هغو محدودیتونه ړنګېږي.
- {{cmd:CONSTRAINTBAR}} (مستعار نوم `CBAR`): `Select objects [Showall/Hideall]`، بیا `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS او -PARAMETERS

{{cmd:PARAMETERS}} (مستعار نومونه `PAR`، `PARAM`) د {{ui:پارامترونه}} پینل پرانیزي. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

مستعار نوم `SWMACRO`. یو میکرو (.swb) ډاونلوډوي چې ماډل د یوې محدودې سکېچ په توګه په SolidWorks کې بیا جوړوي. وګورئ [سکېچونه نورو برخې جوړونکو ته او له هغو](topic:solidworks-sketches).

## بلاکونه

### ANNOSCALE

مستعار نوم: `CANNOSCALE`. د نقشې د تشریح پیمانه او څو تشریحي شیان لري ښيي، بیا `New annotation scale` پوښتي: `1:50`، `1:100`، `2:1`، یوه ساده شمېره (`50` یعنې 1:50) یا د نقشې د خپلو پیمانو نوم ټایپ کړئ. هر تشریحي متن او اندازه داسې اندازه کېږي چې په نوي پیمانه کې ورته اندازه چاپ شي، په یو د بېرته کولو ګام کې؛ شیان چې تشریحي نه وي همداسې پاتې کېږي، او هغه شی هم چې د پیمانو لیست لري پرته له نوي پیمانې ({{cmd:OBJECTSCALE}}). وګورئ [واحدونه، پاڼې او پیمانې](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

مستعار نوم: `OBJSCALE`. `Select annotative objects`، بیا `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. تشریحي متن یا اندازه د تشریح پیمانو لیست ساتي. `Add` او `Delete` پیمانه پوښتي (`1:50`، `2:1`، یوه ساده شمېره، یا د نقشې د خپلو پیمانو نوم)؛ `Current scale` د نقشې د تشریح پیمانه اضافه کوي؛ `List` د هر شی پیمانې چاپ کوي. viewport چې پیمانه یې د شی په لیست کې وي هغه شی د هغې پیمانې لپاره اندازه ښيي چې په دې پیمانه کې خپل د پاڼې لوړوالی چاپ کوي، په سکرین او چاپ کې. وروستۍ پیمانه نشي ړنګېدای. تشریحي نه شیان پریښودل کېږي: لومړی په ملکیتونو کې تشریحي فعال کړئ. لیستونه د DWG او DXF کې د CadCraft خپل معلومات په توګه ساتل کېږي. وګورئ [واحدونه، پاڼې او پیمانې](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

مستعار نوم: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. ON (لکه چې نقشه پیلېږي): یو تشریحي شی هم په viewport یا ماډل کې ښکاري چې پیمانه یې په لیست کې نه وي، په هغه اندازه چې لري. OFF: هلته نه ښکاري، او په ماډل کې نشي ټاکل کېدای. بدلون یو د بېرته کولو ګام دی؛ په فایل کې نه ساتل کېږي.

### SCALELISTEDIT

مستعار نوم: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` تر {{key:Enter}} پورې. Add: `Scale name`، `Paper units`، `Drawing units`. Edit او Delete د پیمانې نوم غواړي. د نقشې خپلې پیمانې د viewport او چاپ پیمانو لیستونو سره یوځای کېږي او د نقشې سره ساتل کېږي. وګورئ [واحدونه، پاڼې او پیمانې](topic:units-papers-scales#scales).

### SPLINE، SPLINEDIT او PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: ټکي چې منحنی ورڅخه تېریږي؛ `Close`، `Undo`، بیا `Start tangent` او `End tangent` (یو ټکی، یا {{key:Enter}}). Method › Control vertices یو درجه (1 تر 5) پوښتي او د کنټرول کثیرالضلع څخه رسموي. Object پولي لاینونه د رأسونو له لارې spline ته اړوي. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`؛ Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`؛ Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`، `M` د څو شیانو لپاره؛ کرښې، قوسونه او splineونه لومړی د پولي لاینونو په توګه وړاندې کېږي. وګورئ [Splines او پولي لاینونه](topic:splines).

### BLOCK

مستعار نومونه: `B`، `BMAKE`.

- `Enter block name`. که دمخه وي: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. دوی د نوي بلاک یوې حوالې په واسطه ځای نیول کېږي.

### WBLOCK

مستعار نومونه: `W`، `-WBLOCK`. یو بلاک، یو شمېر شیان یا ټوله نقشه د نوي DWG یا DXF فایل په توګه لیکي. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (دا د نوې نقشې مبدأ کېږي)، `Select objects`، بیا `File format [DWG/DXF/R12 DXF]` او `File name for the new drawing`، بیا `What to do with the objects [Retain/Convert to block/Delete]`. Convert یې د فایل نوم په بلاک کې یوې حوالې سره بدلوي؛ Delete یې لرې کوي.
- **Block**: `Block to write out`. د بلاک خپل شیان، د هغه بیس ټکی د مبدأ په توګه، د دننه بلاکونو سره.
- **Entire drawing**: هر شی په ماډل ځای کې. پاڼې نه لیکل کېږي؛ د پاڼو سره کاپي لپاره {{cmd:SAVEAS}} وکاروئ.

نوی فایل یوازې هغه لایې، linetypes، متن او اندازې سټایلونه او بلاکونه لري چې شیان یې کاروي، او د نقشې واحدونه. د DWG بڼه هغه ده چې {{cmd:SAVEAS}} وروستی کاروي. په براوزر کې فایل ډاونلوډېږي؛ په Studio کې د خوندي کولو ډیالوګ پرانیزي.

### ATTDEF

مستعار نومونه: `ATT`، `DDATTDEF`، `-ATTDEF`؛ یا {{ui:بلاکونه}} › {{ui:نور}} › {{ui:ځانګړتیا تعریفول}}. حالتونه چاپ کوي، بیا `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`، `Enter attribute tag name`، `Enter attribute prompt`، `Enter default attribute value` (`Enter attribute value` کله چې ثابت وي)، `Specify start point of text`، `Specify text height`، `Specify rotation angle of text`. {{cmd:BLOCK}} د ځانګړتیا تعریفونه بلاک ته اخلي.

### EATTEDIT او ATTEDIT

`EATTEDIT` (`DDATTE`، یا د ځانګړتیا لرونکي حوالې ته دوه ځله کلیک؛ {{ui:بلاکونه}} › {{ui:نور}} › {{ui:صفتونه سمول}}): `Select a block reference with attributes`، بیا د {{ui:صفتونه سمول}} ډیالوګ. `ATTEDIT` (`ATE`، `-ATTEDIT`): همغه حواله، بیا `<prompt> (<TAG>) <value>` د هرې ځانګړتیا لپاره؛ {{key:Enter}} ارزښت ساتي. وګورئ [ځانګړتیاوې](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. ارزښتونه ساتل کېږي؛ نوي ځانګړتیاوې خپل ډیفالت ترلاسه کوي، لرې شوي ځي، ځایونه بیا تنظیمېږي.

### BATTMAN

{{ui:بلاکونه}} › {{ui:نور}} › {{ui:د صفتونو مدیر}}. ډیالوګ: بلاک، ځانګړتیاوې (نښه، پوښتنه، ډیفالت، حالتونه، ترتیب)، {{ui:حوالې تازه کول (ارزښتونه ساتل)}}، {{ui:پلي کول}}.

### REFEDIT او REFCLOSE

{{ui:بلاکونه}} › {{ui:نور}} › {{ui:په ځای کې سمول}}. `REFEDIT`: `Select the block reference to edit in place` (یا ټاکنه). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`؛ د بار {{ui:بلاک خوندي کول}} او {{ui:پریښودل}} همدا کار کوي. ټول سمون یو د بېرته کولو ګام دی. وګورئ [ځانګړتیاوې](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: دا چې د قلم فشار د SKETCHFIX او SKETCHLIVE جوړ شوي کرښې ضخامت ټاکي (په پیل کې فعال). وګورئ [په قلم سکېچ](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

مستعار نوم: `OFFSTD`. وایي چې د دې نقشې لپاره کومه د دفتر معیار پلي کېږي او له چېرته راځي: د نقشې خپل ریکارډ، ستاسو د ټیم شریک معیار، یا ستاسو Default Policies (د متن لوړوالی `all.anno.*`)؛ که هېڅ نه وي، د پروګرام خپل اندازې. `[Import/Layers/Title block/Clear/eXit]`: `Import` یو `cc-office-standard` .json (هغه ریکارډ چې SuperCad او BimCraft لیکي) په دې نقشه کې لولي، او له هغې سره یې د DWG او DXF کې ساتي؛ `Layers` د دفتر هغه لایې اضافه کوي چې نقشه یې نه لري، په یو د بېرته کولو ګام کې، او هېڅکله هم هیڅ نه لرې کوي؛ `Title block` د دفتر ساحې د دې نقشې د خپلو ارزښتونو سره لیست کوي؛ `Clear` د نقشې خپل ریکارډ لرې کوي. تشریحي متن او اندازې لوړوالی د پلي شوي معیار سره تعقیبوي. وګورئ [واحدونه، پاڼې او پیمانې](topic:units-papers-scales).

### BPARAMS

مستعار نومونه: `BPM`، `BLOCKPARAMS`. د پیرامیټرو مدیر پرانیزي د بلاک لپاره چې په بلاک سمونکي کې دی، د ټاکل شوې حوالې بلاک، یا هغه بلاک چې نوم یې ورکوئ (`Block name`): پیرامیټونه د فورمولونو سره، څو د لیدلو پیرامیټونه د خپلو حالتونو سره، او د ټاکل شوې حوالې خپل ارزښتونه او حالتونه. وګورئ [خپل پیرامیټونه او د لیدلو حالتونه](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` همدا کار په کمانډ کرښه کې کوي: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT او BCLOSE

`BE`؛ یا {{ui:بلاکونه}} › {{ui:نور}} › {{ui:بلاک سمبالول}}. `Enter block name to edit <the selected reference's block>` د بلاک سمونکی پرانیزي. `BCLOSE` `Close the block editor on "…" [Save/Discard] <Save>` پوښتي؛ د بیرغ {{ui:بلاک خوندي کول}} او {{ui:بدلونونه پریښودل}} همدا کار کوي. هر هغه څه چې په سمونکي کې ترسره شي یو د بېرته کولو ګام دی.

### VIEWBASE

مستعار نوم: `FLATSHOT`. د 3D ټب جامدو یو هوار 2D لید: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`، `Hidden lines [Show/Hide]`، پیمانه (`1:20`، `2:1`؛ {{key:Enter}} هغه اخلي چې پاڼې ته برابره وي)، بیا د لید مرکز. یوه بلاک حواله، لیدل کېدونکې کنډې په VIEW-VISIBLE کې، پټې کرښې ډش شوې په VIEW-HIDDEN کې. وګورئ [هوار لیدونه په پاڼه کې](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

مستعار نوم: `-PUBLISH`؛ یا {{ui:ټول شیټونه په یو PDF کې}} په {{ui:PDF ته پلاټ کول}} ډیالوګ کې. `Sheets to plot [All/Some]`: {{key:Enter}} هره پاڼه چاپوي، `S` د نومونو غوښتنه کوي چې په کاما جلا شي. یو PDF، هره پاڼه یو مخ او یو بوک مارک. وګورئ [هرې پاڼې یو PDF کې](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

مستعار نومونه: `SSM`، `SHEETSETMANAGER`. تاسو د کیڼ پینل د {{ui:د پاڼو ټولګه}} برخې ته بیایي: پاڼې له ډیرو نقشو، شمېره شوې او سرلیک شوې، د سرلیک بلاکونه یې له ټولګې ډک شوي، د یو PDF په توګه خپرېږي. وګورئ [د پاڼو ټولګې](topic:sheet-sets).

### XATTACH، XREF

{{cmd:XATTACH}} (`XA`): یو DWG یا DXF وټاکئ، بیا د داخلېدو ټکی. {{cmd:XREF}} (`XR`، `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`؛ که له یوې ډیر لینکونه وي، یوه حواله یې وټاکئ یا `N` ولیکئ او نوم یې. وګورئ [لینک شوې نقشې](topic:files#linked-drawings-external-references).

### COUNT

مستعار نوم: `BCOUNT`؛ یا {{ui:بلاکونه}} › {{ui:نور}} › {{ui:بلاکونه شمېرل}}. `Select a block reference to count, or [All/Export] (Enter: All)`: یو انتخاب هغه بلاک ټاکي او شمېري چې په دې ساحه کې هره حواله یې لري؛ {{key:Enter}} یا `A` ټول لیست کوي؛ `E` بیا `C` (شمېرې) یا `A` (ځانګړتیاوې) CSV ډاونلوډوي. وګورئ [بلاکونه وشمېرئ او یو جدول صادر کړئ](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

مستعار نومونه: `I`، `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (د لیکلو بڼه مهمه نده). `F` د DWG یا DXF غواړي، بیا ټوله نقشه یا یو بلاک یې؛ یو نوم چې دمخه کارېږي {{ui:موجود وساتئ}} یا {{ui:نوم بدلول}} پوښتي. `L` د کتابتون پینل پرانیزي.
- `Specify insertion point [Scale/Rotate]`. `S` `Specify scale factor` پوښتي، `R` `Specify rotation angle` پوښتي؛ دواړه یادېږي.
- کله چې بلاک دمخه د شیانو ترڅنګ ولاړ وي چې بل ځای پرته له دې تکرار شوي، یوه کرښه ښیي څو ځایونه وړاندیز شوي، او پرامپټ `suGgested` اضافه کوي: `G` دوی ښیي؛ یو ته نږدې کلیک وکړئ ترڅو بلاک هلته ځای شي، `A` ټولو لپاره، {{key:Enter}} بیرته. دوی د ګاونډیو ګرځښت او د ځانګړتیا ډیفالت ارزښتونه اخلي. د خلاصې ساحې له 20,000 شیانو ډېر نقشې نه لټول کېږي.
- بیا `Enter <prompt> (<TAG>) <default>` د هرې ځانګړتیا لپاره چې بلاک یې غواړي. وګورئ [د بلاک ځانګړتیاوې](topic:attributes).

### LIBRARY

مستعار نوم: `LIB`. د کتابتون پینل پرانیزي: توکي ځای کول، د تازه کولو وګورئ، د کتابتون کریډیټونه. هېڅ پوښتنه نشته. وګورئ [له فایل یا کتابتون څخه داخلول](topic:insert-from-file-and-library).

### STEELMEMBER

مستعار نومونه: `SMEMBER`؛ یا {{ui:3D غړی}} د کتابتون په {{ui:معیاري}} ټب کې. `Section size <W12x26>` (لکه ټب یې لیست کوي)، بیا `Start point [Column]` او `End point`: په 3D ټب کې د دوو ټکو ترمنځ یو جامد غړی، په ځمکه ناست. `C` د ستون بیس ټکی او د هغه لوړوالی غواړي. یو د بېرته کولو ګام. وګورئ [فولادي برخې او معیاري پرزې ځای کول](topic:steel-and-standard-parts).

### PARTSLIST

مستعار نوم: `PLIST`. `Top left corner of the parts list`، بیا `Text height <2.5>`: د هرې معیاري برخې او فولادي برخې جدول رسموي چې له کتابتون ځای شوې (د توکو شمېرې، مقدار، برخه، معیار، اندازه، اوږدوالی، مواد، کتله). یو د بېرته کولو ګام. وګورئ [فولادي برخې او معیاري پرزې ځای کول](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

مستعار نوم: `PU`. هغه د بلاک تعریفونه لرې کوي چې هېڅ نه کاروي. هېڅ پوښتنه نشته.

### DELBLOCKS

یا {{ui:بلاکونه}} › {{ui:نور}} › {{ui:بلاکونه ړنګ کړئ}}. `Select block to delete [Name/eXit]`: یو بلاک حواله وټاکئ، یا `N` د بلاکونو لیست د فلټر سره (څو غوره کړئ)، یا `X` / {{key:Enter}} پای ته. هره حواله لاړه—په ماډل، په هر پاڼه کې او د نورو بلاکونو دننه—بیا تعریف، او کمانډ کرښه وایي څه ړنګ شول او څه نه شول. نومنځ نه لرونکي بلاکونه او لینک شوې نقشې نه وړاندې کېږي. پرامپټ د راتلونکي بلاک لپاره بیرته راځي؛ ټول کمانډ یو د بېرته کولو ګام دی.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} هغه سرېښي چې تاسو یې کاپي کړې ({{cmd:COPYCLIP}}، {{cmd:COPYBASE}}) د یو بلاک په توګه: د داخلېدو ټکی وټاکئ او یوه حواله د نوي بلاک ته هلته ځي، ټاکل شوې. بلاک خپل نوم اخلي (`A$C` او یو شمېره)؛ {{cmd:RENAME}} ستاسو نوم ورکوي. یو د بېرته کولو ګام حواله او بلاک لرې کوي.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} هغه بلاک غواړي چې بدلېږي او هغه بلاک چې ځای ورته ږدل کېږي (`?` بلاکونه لیست کوي)، بیا هره حواله په ماډل، په هر پاڼه کې او د نورو بلاکونو دننه بدلوي. هره حواله خپل ځای، پیمانه، ګرځښت، لایه او د دواړو بلاکونو د ځانګړتیاو ارزښتونه ساتي؛ هغه ځانګړتیاوې چې یوازې نوی بلاک یې لري په خپل ډیفالت پیلېږي، او دا وایي کوم ارزښتونه ورک شول. کله چې هېڅ شی زوړ بلاک نه کاروي، دا وړاندیز کوي چې لرې یې کړي. د بهرنیو نقشو لینکونه او هغه بدیل چې بلاک په دننه کې ځای نیسي رد کوي. یو د بېرته کولو ګام.

### MINSERT

{{cmd:MINSERT}} یو بلاک په قطارونو او کالمونو کې ځای کوي: د بلاک نوم، داخلېدو ټکی، پیمانه، ګرځښت، د قطارونو او کالمونو شمېر، او ترمنځ یې واټنونه. ټول سیټ د ګرځښت سره ګرځي. هر یو خپله حواله ده (10,000 تر ټولو زیات)، نو هر یو وروسته لېږدول یا ړنګول کېدای شي.

### BLOCKSPALETTE

مستعار نوم: `BLOCKSPAL`؛ یا {{ui:بلاکونه}} › {{ui:نور}} › {{ui:د بلاکونو پینل}}. د {{ui:بلاکونه}} پینل د فلټر کرسر سره ښیي. هر بلاک یو کوچنی انځور لري؛ وروستي ځای شوي لومړي راځي. دوه تڼۍ د فلټر تر څنګ د لیست او د انځورونو ګرډ ترمنځ بدلوي. انځور کلیک کړئ (یا {{ui:داخلول}}) ترڅو بلاک د {{cmd:INSERT}} سره ځای شي، یا هغه نقشې ته کش کړئ ترڅو هلته ځای شي چیرې چې ږدئ.

{{ui:کتابتونونه}}، د لیست لاندې: {{ui:نقشه ور زیاتول}} ستاسو خپل DWG یا DXF فایل اخلي او بلاکونه یې د انځورونو سره لیستوي، او ټوله نقشه د یو بلاک په توګه. کله چې یو یې ځای کړئ، تعریف یې (او د هغې نیول شوي بلاکونه او لایې) د دې نقشې ته کاپي کېږي، لکه د {{cmd:INSERT}} `File` اختیار؛ بلاک چې دمخه دلته وي د ورته تعریف سره پرته له پوښتنې کارېږي، یو د ورته نوم سره چې توپیر ولري {{ui:موجود وساتئ}} یا {{ui:نوم بدلول}} پوښتي. په براوزر کې فایل تر هغې پاتې دی تر څو پاڼه وتړل شي. په CadCraft Studio کې {{ui:فولډر ور زیاتول}} د فولډر نقشې لیستوي، هره یوه کله چې کلیک شي خلاصېږي، او فایلونه او فولډرونه یادېږي. کوچنی x له لیست څخه کتابتون لرې کوي؛ فایل ته لاس نه وهي. ګډ {{ui:کتابتون}} بل شی دی: وګورئ [له فایل یا کتابتون څخه داخلول](topic:insert-from-file-and-library).

### BCONVERT

یا {{ui:بلاکونه}} › {{ui:نور}} › {{ui:تکرارونه بلاکونو ته اړول}}. هغه هندسه موندل چې تکرار کېږي او هر کاپي یې یوې بلاک ته حواله کوي.

- `Select the objects that repeat, or [Block]`: د یوې کاپي شیان. `B` بلکه یو موجود بلاک نوم اخلي، ترڅو د هغه شیانو بې ځایه کاپي ومومي.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`، `S` او `P` بدلوي چې څه د کاپي په توګه شمېرل کېږي؛ {{key:Enter}} لټوي. امستنې یادېږي.
- `Name for the new block <Block1>`، بیا `Specify the block's base point` ({{key:Enter}} د ټاکنې ښکته کیڼ کنج اخلي).
- وایي څو نور شیان ورته هندسه لري، هغه څه روښانه کوي چې یې بدلوي، او `Yes/No` پوښتي.

کاپي هماغه شیان دي چې حرکت شوي او د هرې زاویې سره ګرځول شوي (او انعکاس یا یو فکتور سره پیمانه شوي کله چې فعال وي): هر شی باید خپله برابره ولري، د ټاکنې د اندازې له یوه ملیونمې برخې تر لاسه. هر حواله خپل ګرځښت او پیمانه لري (انعکاس شوی یې منفي Y پیمانه)، او هغه لایه چې شیان یې شریکوي. شیان په قفل شوو لایو کې پرېښودل کېږي او شمېرل کېږي. دا خلاصه ساحه لټوي (ماډل یا خلاصه پاڼه). خورا لوی لټون یو کار حد ته رسېږي او دا وایي. یو د بېرته کولو ګام.

### BSEARCH

یا {{ui:بلاکونه}} › {{ui:نور}} › {{ui:بلاکونه موندل}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: د بلاک نوم یوه برخه، یا د `*` او `?` سره نمونه. هر بلاک د دې ځای او ټولې نقشې د هغې حوالو سره لیستوي.
- `A`: د ځانګړتیا ارزښت، یا `TAG=value`. هغه بلاکونه لیستوي چې حوالې یې دا لري، د موندل شوو ارزښتونو سره. ثابت ځانګړتیاوې شمېرل کېږي.
- `G`: شیان وټاکئ، یا یوه بلاک حواله، او هغه بلاکونه چې شکل یې لږ تر لږه 85% ورته وي لیست کېږي، غوره تر ټولو لومړی. اندازه، ګرځښت او انعکاس نه شمېرل کېږي. اندازه ګیری د هغو ټکو ترمنځ واټنونه پرتله کوي چې د شکلونو په اوږدو کې ځای شوي، نو ورته شیان موندل کېږي؛ د دقیقو کاپیو لپاره {{cmd:BCONVERT}} وکاروئ.

هغه حوالې چې په خلاصه ساحه کې موندل کېږي ټاکل کېږي، د راتلونکي کمانډ لپاره چمتو.

### BREPLACE

یا {{ui:بلاکونه}} › {{ui:نور}} › {{ui:بلاکونه ځای ناستي}}. `Replace [Selected/All]`: `S` هغه بلاک حوالې چې ټاکئ هغه بلاک سره بدلوي چې نوم یې ورکوئ؛ `A` یو بلاک او بدیل یې غواړي او هره حواله بدلوي، لکه {{cmd:BLOCKREPLACE}} (ورته کوډ). حواله خپل ځای، پیمانه، ګرځښت، لایه او د دواړو بلاکونو ځانګړتیاوې ساتي؛ هغه ارزښتونه چې نوی بلاک ځای نه لري ړنګېږي او نومول کېږي. `?` بلاکونه لیست کوي. یو د بېرته کولو ګام.

### DATAEXTRACTION

مستعار نومونه: `EATTEXT`، `DX`؛ یا {{ui:بلاکونه}} › {{ui:نور}} › {{ui:د ډیټا استخراج}}. بلاکونه، ځانګړتیاوې او د شیانو ملکیتونه د جدول یا CSV فایل په توګه لیستوي.

- په ټاکنه کار کوي، یا `Select objects (Enter: everything in this space)` پوښتي.
- `List: [Blocks/Objects/All]` کله چې ټاکنه دواړه ولري. نومنځ نه لرونکي بلاکونه، جدولونه او د توکو بیلونه هېڅکله نه لیستېږي.
- د کالمونو لیست چاپ کوي چې ټاکل کېږي (نوم، ډول، لایه، X، Y، ګرځښت، پیمانه، اوږدوالی، مساحت، رنګ، linetype، ځای، او د هرې ځانګړتیا نښې لپاره یو)، بیا `Columns, by name or number with commas between`. {{key:Enter}} ستوري شوي غوره کوي: نوم او هره ځانګړتیا د بلاکونو لپاره؛ ډول، لایه او اوږدوالی د شیانو لپاره.
- `Put identical rows together with a count? [Yes/No] <Yes>`، بیا `Put the list in a: [Table/Csv] <Table>`. جدول یو عادي جدول دی ({{cmd:TABLEDIT}} یې سمي) او ژوندی نه دی: کمانډ بیا چلوئ کله چې نقشه بدلېږي.
- هغه کالم چې په لیست کې نه وي رد کوي. جدول 1,999 قطارونه معلومات لري؛ CSV فایل ټول اخلي.

### COUNTTABLE

د ټاکنې (یا خلاصې ساحې) د بلاک حوالو شمېرې شمېري او شمېرې په جدول (`Block`، `Count`) یا CSV فایل کې ځای کوي. د شمېرې لپاره چې نقشه پخپله تعقیبوي {{cmd:BOMTABLE}} وګورئ.

## پاڼې او چاپ

### LAYOUT

مستعار نومونه: `LO`، `NEWLAYOUT`؛ یا د نقشې لاندې {{ui:+}} تڼۍ. یوه نوې پاڼه له کرښې، د سرلیک بلاک او یوې viewport سره، په ISO A3 (یا Tabloid د انچ یا فوټ نقشو لپاره). هېڅ پوښتنه نشته.

### MVIEW

مستعار نوم: `MV`. یوازې په پاڼه کې ({{cmd:VPORTS}} په پاڼه کې ورته کار کوي).

- `Specify corner of viewport [Polygonal/Object]`، `Specify opposite corner`. viewport ټول ماډل په معیاري پیمانه ښیي.
- `P` (Polygonal): د بیرون کنجونه کلیک کړئ (`Undo`، `Close`)، {{key:Enter}} کله چې بشپړ وي. له دریو لږ کنجونه رد کوي.
- `O` (Object): `Select a closed object for the viewport's outline`: په پاڼه کې یو تړل شوی پولي لاین، دایره یا بیضوي. viewport د هغې شکل اخلي (منحني لنډې مستقیمې برخې)؛ شی په خپل حال پاتې کېږي. تړل شوی نه شی رد کوي.

### VPCLIP

یوه viewport چې دمخه په پاڼه کې ده پرې کوي. `Select viewport to clip` (یا لومړی یې وټاکئ)، بیا `Select the object to clip to [Polygonal/Delete]`:

- یو تړل شوی پولي لاین، دایره یا بیضوي کلیک کړئ، یا {{key:Enter}} (یا `P`) د کثیرالضلع کنجونو کلیک لپاره.
- `D` (Delete، کله چې viewport پرې شوې وي وړاندې کېږي) بیا یې مستطیل کوي: هغه بکس چې د بیرون شاوخوا وي.
- هغه څه چې viewport ښیي په کاغذ کې نه حرکت کوي، او پیمانه یې پاتې کېږي. ماډل یوازې د بیرون دننه رسم او چاپ کېږي، او کرښه یې تعقیبوي. یو د بېرته کولو ګام.
- پرې شوې viewport د هر کنج لپاره ګریپ لري، د مرکز او د بکس څلورو کنجونو سربېره (د بکس کنج کش کول بیرون هم کش کوي). ملکیتونه Outline: Rectangle یا Clipped د کنجونو شمېر سره ښیي.
- DWG او DXF 2000 فایلونه بیرون د CadCraft لپاره ساتي. نور پروګرامونه viewport د هغې شاوخوا د مستطیل په توګه پرانیزي؛ DXF R12 یوازې مستطیل ساتي.
- په ماډل ټب کې وایي چې viewports په پاڼو کې دي.

### VPORTS

مستعار نوم: `VIEWPORTS`. {{cmd:SPLIT}} له پاڼې هم همدا کار کوي، او {{ui:لید}} › {{ui:نور}} › {{ui:د ځنګ په ځنګ ویشل}}، {{ui:یو پر بل ویشل}}، {{ui:څلور پینونه}}، {{ui:یو پین}} یې چلوي. په ماډل کې: `Enter number of panes [SIngle/2/3/4] <3>`؛ `2` `[Horizontal/Vertical] <Vertical>` پوښتي (Vertical = یو تر بل خوا)، `3` `[Left/Right] <Right>` پوښتي (لوی پین چېرې ځي). هر پین خپل لید او ځای ساتي؛ یو کلیک یو پین فعال کوي. په پاڼه کې دا {{cmd:MVIEW}} دی. وګورئ [سکرین ویشل](topic:split-screen).

### VPVIEW

هېڅ مستعار نوم نشته. یوازې په پاڼه کې.

- `Select viewport` (که یو ټاکل شوی وي پریږدل کېږي)، بیا په ماډل کې: `Specify first corner of the window to show`، `Specify opposite corner`.

### UCS

هېڅ مستعار نوم نشته. ستاسو خپل همغږي سیسټم؛ سمون نه. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: یو ټکی نوی مبدأ دی، بیا `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: مبدأ، یو ټکی په مثبت X محور، یو ټکی د مثبت-Y خوا. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` او یو نوم. لید داسې ګرځي چې نوی X محور افقي وي. وګورئ [لید ګرځول او خپل همغږي](topic:ucs-and-turned-view).

### PLAN

هېڅ مستعار نوم نشته. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: د فعالې پین لید داسې ګرځوي چې د UCS X محور (یا د نړۍ) افقي وي. د نقشې هېڅ نه حرکت کوي.

### TURNLEFT، TURNRIGHT، TURNWORLD

هېڅ مستعار نوم نشته؛ یا {{ui:لید}} › {{ui:نور}} › {{ui:لید 90° کیڼ لور ته ګرځول}}، {{ui:لید 90° ښي لور ته ګرځول}}، {{ui:بیرته نړۍ ته}}. همغه لکه `UCS Z -90`، `UCS Z 90` او `UCS W`، د لید تعقیب سره.

### VPLAYER

هېڅ مستعار نوم نشته. په پاڼه کې، یا په viewport کې. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`، `T`، `R` د لایو نومونه غواړي (کاما، `*` او `?` ورلډ کارډونه)، بیا `[All/Select/Current] <Current>` viewports؛ Reset هره لایه بیرته د "په نوو viewports کې یخ شوې" ډیفالت ته ږدي؛ `V` دا ډیفالت ټاکي (`[Frozen/Thawed]`)، چې {{cmd:MVIEW}} کاروي. `?` هغه لایې لیستوي چې په اوسنۍ viewport کې یخ شوي دي. د لایو پینل viewport کالم همدا کار د یوې viewport لپاره کوي. وګورئ [یوه لایه په یوه viewport کې یخول](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

مستعار نومونه: `MS`؛ یا دوه ځله په viewport کې کلیک. یوازې په پاڼه کې. ماډل د viewport له لارې کار کوي: هغه چې ټاکل شوې، یوازینۍ په پاڼه کې، یا `Click inside the viewport to work in`. پان او زوم په کې د viewport لید بدلوي (یو د display-locked ساتي او پاڼه حرکت کوي)؛ نوی لید یو د بېرته کولو ګام دی. وګورئ [ماډل د viewport له لارې کار کول](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

مستعار نومونه: `PS`؛ یا له viewport بهر دوه ځله کلیک، یا د نقشې لاندې ټب کلیک. بیرته پاڼې ته.

### PLOT

مستعار نومونه: `PRINT`، `PUBLISH`، `EXPORTPDF`؛ یا {{key:Mod+P}}. د {{ui:PDF ته پلاټ کول}} ډیالوګ پرانیزي. وګورئ [PDF ته پلاټ](topic:plot-pdf).

### PLOTSTYLES

مستعار نومونه: `STYLESMANAGER`، `PSTABLES`؛ یا {{ui:جدولونه سمول…}} په {{ui:PDF ته پلاټ کول}} ډیالوګ کې. {{ui:د چاپ سټایل جدولونه}} پرانیزي: هر رنګ څه چاپ کوي (رنګ، خړ، مس، د کرښې ضخامت)، د نقشې سره ساتل کېږي. وګورئ [د چاپ سټایل جدولونه](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} شیان د پاڼې او ماډل ترمنځ د viewport له لارې لېږدوي، پیمانه او ګرځول کېږي ترڅو له بلې خوا ورته ښکاري. په پاڼه کې، شیان وټاکئ او دوی ماډل ته ځي (کله چې پاڼه له یوې ډیر viewport وټاکئ). کله چې د viewport له لارې په ماډل کار کوئ ({{cmd:MSPACE}})، ټاکل شوي شیان پاڼې ته راځي. وایي څو ځله لوی یا وړوکي شول. Viewports په خپله پاڼه پاتې کېږي. یو د بېرته کولو ګام.

### ISODRAFT

{{cmd:ISODRAFT}} د آیسومیټریک ډرافټینګ `ON` یا `OFF` کوي، یا مستقیم `Left`، `Top` یا `Right` الوتکې ته ځي. کله چې فعال وي: Ortho ({{key:F8}}) شیان د الوتکې دوو محورونو سره ساتي (ښی: 90° او 150°؛ پورته: 30° او 150°؛ ښي: 30° او 90°)، polar تعقیب ({{key:F10}}) همغه محورونه تعقیبوي، نیول په شبکه ({{key:F9}}) آیسومیټریک شبکه کاروي، او شبکه ({{key:F7}}) په کرښو کې 30°، 90° او 150° رسمېږي. {{cmd:ELLIPSE}} `Isocircle` ترلاسه کوي: مرکز او شعاع (یا `Diameter`) ورکړئ او هغه بیضوي رسموي چې دایره یې په اوسنۍ الوتکه کې ښیي. نقشه مسطح پاتې کېږي: دا د پیکتوریال لید د رسم مرستې دي، نه د 3D ماډل. امستنه د ناسته لپاره ده او په فایل کې نه ساتل کېږي.

### ISOPLANE

{{cmd:ISOPLANE}} هغه الوتکه ټاکي چې آیسومیټریک ډرافټینګ پرې کار کوي: `Left`، `Top` یا `Right`. Enter راتلونکې الوتکې ته ځي. کله چې آیسومیټریک ډرافټینګ فعال وي، {{key:F5}} همدا کار د کمانډ په منځ کې کوي؛ کله چې بند وي، {{key:F5}} براوزر ته پرېښودل کېږي.

## پوښتنه

### CAL

د یوې محاسبې ارزښت چاپ کوي، لکه څنګه چې هر ځای چې اوږدوالی ټایپ کېږي لوستل کېږي.

- `Expression`: ټایپ یې کړئ، د مثال په توګه `12'6"+3/4"` یا `(24'-0")/3`، او {{key:Enter}} کېکاږئ. CadCraft `= 12'-6 3/4"   (150.75 drawing units)` چاپ کوي. وګورئ [د ټایپ شوي ارزښت حساب](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

مستعار نومونه: `DI`؛ یا {{ui:لید}} › {{ui:نور}} › {{ui:واټن اندازه کول}}.

- `Specify first point`، `Specify second point`. واټن، زاویه، Delta X او Delta Y چاپ کوي.

### AREA

مستعار نومونه: `AA`؛ یا {{ui:لید}} › {{ui:نور}} › {{ui:ساحه}}. مساحت او محیط چاپ کوي.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - کنجونه کلیک یا ټایپ کړئ؛ په `Specify next point (Enter closes) [Undo]` کې {{key:Enter}} کېکاږئ ترڅو کرښه وتړئ. `U` وروستی کنج بېرته اخلي.
  - {{key:Enter}} یا `O`، بیا `Select object`: یوه دایره (محیط یې چاپ کوي)، بیضوي، پولي لاین (خلاص یو د مساحت لپاره په مستقیمه کرښه تړل کېږي، او اوږدوالی یې چاپ کېږي) یا هاچ (سوري لرې کېږي).
  - `A` (Add area) او `S` (Subtract area) روان مجموعه ساتي: پرامپټ `(ADD mode)` یا `(SUBTRACT mode)` سره پیلېږي، هر مساحت جمع یا تفریق کېږي، او `Total area = …` له هر یو وروسته چاپېږي. په دې حالتونو کې `O` شیان تر {{key:Enter}} پورې غواړي، او {{key:Enter}} په لومړي پرامپټ کې کمانډ پای ته رسوي.

### MEASUREGEOM

مستعار نوم: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`؛ د هرې اندازې وروسته بیا پوښتي، د `eXit` ډیفالت سره.

`Quick` ستاسو د اشارې شاوخوا اندازه کوي کله چې حرکت یې کوئ: له نږدې شي تر ښي، پورته، کیڼ او ښکته واټن (د اوسنۍ UCS محورونو په اوږدو کې)، کله چې حرکت کوئ رسموي، او زاویه کله چې دوه د دې ګاونډیانو مستقیم وي او یو بل سره ولګي. یو کلیک څلور واټنونه، واضح پلنوالی او لوړوالی، او زاویې تاریخچې ته لیکي؛ Enter بیرته اختیارونو ته ځي. سکرین لولي.

- `D`: دوه ټکي، لکه {{cmd:DIST}}.
- `R`: `Select arc or circle`؛ شعاع او قطر چاپ کوي.
- `A`: یو قوس (شامل زاویه یې)، یوه کرښه او بیا دویمه کرښه (ترمنځ زاویه، د دوی لرې پایونو په لور)، یا {{key:Enter}} او درې ټکي (راس، بیا دوه پایونه).
- `AR`: لکه {{cmd:AREA}}، یو مساحت.

### ID

هېڅ مستعار نوم نشته. `Specify point`؛ X او Y یې چاپ کوي.

### LIST

مستعار نومونه: `LI`، `LS`. `Select objects`؛ د هرې شي ډول، لایه او اصلي اندازې چاپ کوي.

### MASSPROP

{{cmd:MASSPROP}} د سیمو او تړلو شیانو د برخې ملکیتونه ورکوي چې تاسو یې ټاکئ، یوځای اخیستل شوي: مساحت، محیط، د بکس بیروني، مرکز، د X او Y محورونو په اوږدو کې د مبدأ له لارې لحظې، د جڼې ضرب، د ګردش شعاعونه، همغه لحظې د مرکز شاوخوا، او اصلي لحظې د محورونو سمتونو سره. په سیمه کې سوري سوري حساب کېږي. ارقام په نقشې واحدونو کې دي او د کرښو او قوسونو له جوړ شوو خاکو لپاره دقیق دي؛ بیضوي او spline د لنډو مستقیمو قطعو په توګه اندازه کېږي، او دا وایي. وروسته له راپور څخه پوښتي چې ایا د متن فایل ته یې ولیکي. هغه شیان چې تړل شوي نه وي پرېښودل کېږي، او شمېره یې وایي.

## لید، فایل او نور

### ZOOM

مستعار نومونه: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. د کړکۍ لپاره دوه کنجونه کلیک کړئ. `E`، `A` یا Enter: ټوله نقشه.
- `P` (Previous، یا {{ui:پخوانی (P)}} په وسیلو بار کې) مخکنی لید ته ځي، تر 10 لیدونو پورې په هر ټب کې؛ د موږک د څرخ یوه ډله یا یو پان یو لید شمېرل کېږي.
- یوه شمېره لکه `2`، `2x` یا `0.5x` (یا `S` او بیا شمېره) د سکرین په منځ کې دا فکتور سره زوم کوي یا لرې کوي.
- `C` `Specify center point` او `Enter height or magnification (nX)` پوښتي.

### PDFATTACH، PDFIMPORT او د PDF کمانډونه

مستعار نومونه: `PDFATT` د {{cmd:PDFATTACH}} لپاره، `PDFIM` د {{cmd:PDFIMPORT}} لپاره. {{cmd:PDFATTACH}} یو PDF مخ د نقشې لاندې ږدي (فایل، مخ، داخلېدو ټکی، پیمانه، ګرځښت)؛ {{cmd:PDFIMPORT}} د مخ کرښې، منحنۍ، ډکې سیمې او متن د نقشې شیانو ته اړوي په لایو کې چې د PDF په نوم دي، په ریښتیني اندازه، د ټایپ شوې پیمانې سره، یا له دوو ټکو او ریښتیني واټن څخه پیمانه شوي. {{cmd:PDFCLIP}} لاندې کېښودنه پرې کوي، {{cmd:PDFADJUST}} کم رنګه، کنټراست، تک رنګه ټاکي یا بندوي، {{cmd:PDFLAYERS}} د PDF خپلې لایې فعالوي، او {{cmd:PDF}} بیرته هغه فایلونه ورکوي چې د نقشې لاندې کېښودنې کاروي. وګورئ [د PDF لاندې کېښودنې](topic:pdf-underlay).

### AUTOCOMPLETE

مستعار نوم: `AUTOC`. د نقشې خودکار بشپړول: کله چې هېڅ کمانډ نه چلېږي، یو خړ انځور ښیي چې د نقشې نمونې څه راتلونکي ته وایي. {{cmd:AUTOCOMPLETE}} یې `On` یا `Off` کوي (هم امستنې › CadCraft) یا هغه `Show` کوي چې اوس به وړاندیز کړي. **Tab** انځور د یو بېرته کولو ګام په توګه رسموي، **Esc** یې تر هغه پورې لرې کوي تر څو نقشه بدله شي. دا په تازه شیانو کې درې شیان موندلي: د بل کاپي راتلونکی ځای چې دوه ځله یا ډېر رسم شوی په مساوي ګام (ستنې، ستنې، د پوړ قدم)، د پولي لاین پوړ قدمونه، او د کوټې یا دېوال زنځیر ورک اړخ. د {{cmd:LINE}} یا {{cmd:PLINE}} په منځ کې انځور **راتلونکی ټکی** دی: د پوړ راتلونکی قدم (ریسر، ټرید، ریسر…)، د مستطیل څلورم کنج، هغه ټکی چې تړي، یا یو بل مساوي ګام. ټکي ته نږدې کرسر راولئ او **Tab** کېکاږئ، لکه چې کلیک کړی وي؛ دوام ورکړئ یا Enter کېکاږئ. په دې کمپیوټر کې د قواعدو له مخې کار کوي، پرته له ماډل.

### AUTOSHEET

مستعار نوم: `ASH`. پاڼې چې پخپله ترتیبېږي. {{cmd:AUTOSHEET}} د نقشې ټوټې اخلي (ستاسو نومول شوي لیدونه، یا د ماډل جلا ټوټې، یا ټول ماډل)، د کاغذ اندازه ټاکي (یا هغه چې ورکوئ)، هره ټوټه معیاري پیمانه ورکوي (یوه پیمانه د ټولو لپاره، یا ترې لویه چې ښه شي)، او لیدونه په نوو پاڼو کې په قطارونو کې ځای کوي د سرلیک بلاک او نښو سره (نوم او پیمانه) لاندې. هغه څه چې په یوه پاڼه کې نه ځي خپله پاڼه ترلاسه کوي. یو د بېرته کولو ګام. په دې کمپیوټر کې د قواعدو له مخې کار کوي، پرته له ماډل.

### PHOTOSKETCH

مستعار نوم: `PSK`. د لاس سکېچ انځور نقشې ته. د کاغذ پاڼې پر لاس سکېچ انځور (JPEG، PNG یا TIFF) وټاکئ. {{cmd:PHOTOSKETCH}} د پاڼې څلور کنجونه پیدا کوي، لید سموي، د پاڼې هغه اندازه اخلي چې نوم یې اخلئ (`Paper`، یا تر ټولو نږدې معیاري) او د سکېچ `Scale` (1 : n)، بیا د قلم کرښې په کرښو او قوسونو او دایرو بدلوي، د هر قلم رنګ لپاره یوه لایه (تور، سور، شنه، نیلی). که د پاڼې کنډه ونه موندل شي، ټول انځور د پاڼې په توګه اخلي او دا وایي. لیکنه له منځه ځي. یو د بېرته کولو ګام. په دې کمپیوټر کې د کلاسیک انځور پروسس سره، پرته له ماډل، او هېڅ نه لېږل کېږي. وګورئ همدارنګه د سکین شوو نقشو کمانډونه.

### AUTODIM

مستعار نوم: `ADIM`. په قاعدو اندازه کول. {{cmd:AUTODIM}} ټاکل شوي شیان (یا ټوله نقشه) د هغو لیول او پلمب څنډو له مخې اندازه کوي: د اندازو یو زنځیر د هغو خواوو په اوږدو کې چې غوره کوئ (`Sides`)، یوه ټوله اندازه بهر ترې، د هرې پرانیستې پلنوالی (د مستقیمو دېوال کرښو ترمنځ ګپ)، د سوري هر اندازې قطر، او `Grid` سره د شبکې کرښو ترمنځ واټن. هغه اندازه چې دمخه وي بیا نه جوړېږي. یو د بېرته کولو ګام. په دې کمپیوټر کې د قواعدو له مخې کار کوي، پرته له ماډل.

### GRIDMOVE

مستعار نوم: `GM`. د شبکې کرښه لېږدول هغه څه یوځای. {{cmd:GRIDMOVE}} یو د شبکې کرښه لېږدوي (کرښه چې د لایې نوم یې شبکه یا محور لري) او هغه څه چې پرې ځړي: دېوالونه چې پای یې په کرښه وي غځېږي ترڅو تعقیب کړي، دېوالونه چې ورسره وي ټول حرکت کوي، ستنې (بلاک حوالې او دایرې په کرښه)، د دې حباب او نښه حرکت کوي، او اندازې چې ټکي یې په دې وي نوی واټن اندازه کوي. دوه ټکي ورکړئ (یوازې هغه برخه چې کرښه پرې کوي شمېرل کېږي) یا `Distance`. یو د بېرته کولو ګام ټول بېرته راوړي. په دې کمپیوټر کې د قواعدو له مخې کېږي.

### DETAILS

مستعار نوم: `DET`. هغه تفصیلات چې تاسو ته موندل کېږي. {{cmd:DETAILS}} د خپل فرم خپل تفصیلات ساتي: `Add` د دې نقشې بلاک په لیست کې اچوي، `List` او `Remove` یې سمي، `Find` د هغه څه لپاره چې ټاکل شوي (یا د وروستي ډراف شوي) درجه بندي کوي د هغو لایو، بلاک نومونو، هاچ نمونو او یادښتونو له لارې د هر تفصیل نوم او یادښتونو سره، نو د کړکۍ سر ستاسو د کیلي او ښکته ډیګ خټکي پیدا کوي. یو شمېره او ټکی غوره کړئ ترڅو یې ځای کړئ. کله چې `Hint` (هم امستنې › CadCraft) فعال وي، څه ټاکل چې د تفصیل سره سم وي د حالت بار کې یو کرښه ږدي. لیست په همدې براوزر، په همدې کمپیوټر کې ساتل کېږي، او همدا لیست لټول کېږي. `Share` دا ستاسو د اسنادو فولډر ته هم ږدي (`.cadcraft/firm-details.json`، د هرې بلاک نقشې سره): `Pull` هغه اضافه کوي چې ستاسو ټیم لري او تاسو نه لرئ، `Push` هغه اضافه کوي چې تاسو لرئ او دوی نه، `Both` دواړه کوي، او هېڅ د دواړو لورو څخه نه لرې کېږي. لومړی د اسنادو فولډر خلاص کړئ ({{cmd:DOCUMENTS}})؛ کله چې دا فولډر د Team Cloud Plan فولډر وي، ټول ټیم یوه لیست شریکوي. په کتابتون پینل کې د تفصیل توکی یو **Add to my firm's details** تڼۍ لري چې په همدې لیست کې یې ږدي. په دې کمپیوټر کې د ټکو له لارې کار کوي، پرته له ماډل.

### SKETCHFIX

مستعار نوم: `SKF`. د قلم سکېچونه دقیقه هندسه کیږي. یو ازاد سټروک په یو ځل کش کړئ (قلم، موږک یا ګوته)، بیا Enter. هر سټروک لکه کرښه، دایره، قوس، مستطیل یا پولي لاین لوستل کېږي: نږدې افقي او عمودي کرښې په دقیق ډول افقي او عمودي کېږي، یو تړل شوی ګرد سټروک دایره کېږي، یو تړل شوی سټروک چې څلور ښي زاویې لري مستطیل کېږي، او د سټروکونو پایونه یو ځای او نقشې ته پراته پایونو ته کش کېږي. یو د بېرته کولو ګام. په دې کمپیوټر کې د قواعدو له مخې کار کوي، پرته له ماډل.

### SCANATTACH او د سکین شوو نقشو کمانډونه

مستعار نومونه: `SCA` {{cmd:SCANATTACH}}، `SCS` {{cmd:SCANSCALE}}، `SCL` {{cmd:SCANALIGN}}، `SCD` {{cmd:SCANDESKEW}}، `SCC` {{cmd:SCANCLEAN}}، `SCR` {{cmd:SCANCROP}}، `SCE` {{cmd:SCANERASE}}، `SCT` {{cmd:SCANTRACE}}، `SCI` {{cmd:SCANINFO}}؛ {{cmd:RASTERSNAP}} هېڅ نه لري. دوی پر انځور کار کوي، هر یو یو د بېرته کولو ګام. {{cmd:SCANATTACH}} PNG، JPEG، TIFF (یوه پاڼه یا ټولې) یا د PDF یوه پاڼه چې انځور ده ځای کوي. {{cmd:SCANSCALE}} پاڼه له دوو ټاکل شوو ټکو او ریښتیني واټن سره پیمانه کوي. {{cmd:SCANALIGN}} یې په دوو ټکو حرکت او ګرځوي (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} د پاڼې د اوږدو کرښو زاویه ښیي او پاڼه ګرځوي کله چې `Accept` یا `Value` ورکړئ. {{cmd:SCANCLEAN}} یې تور او سپین کوي (`Threshold` Auto/Adaptive/Level، `Specks`) او `Run`. {{cmd:SCANCROP}} یوه کړکۍ ساتي. {{cmd:SCANERASE}} یو `Rectangle`، `Polygon` یا `Lasso` ړنګوي. {{cmd:SCANTRACE}} کرښې او قوسونه په نوې لایه کې ټریس کوي (`Tolerance`، `Window`، `Arcs`، `Leftovers`، `Run`) او هغه څه وایي چې موندلي او څه چې د raster په توګه پرېښي. {{cmd:SCANINFO}} اصلي فایل او ګامونه لیستوي. {{cmd:RASTERSNAP}} د سکین شوو پاڼو کرښو ته نیول فعالوي یا بندوي. وګورئ د سکین شوو نقشو او ټریس موضوع.

### REGEN او REGENALL

مستعار نومونه: `RE` د {{cmd:REGEN}} لپاره، `REA` د {{cmd:REGENALL}} لپاره. د کرښې بیا جوړول له نقشې څخه چې په سکرین کې رسم شوی: {{cmd:REGEN}} هغه ټب چې وینی (په پاڼه کې، هغه ماډل چې viewports یې ښیي هم)، {{cmd:REGENALL}} هر ټب، هر ویشل شوی پین او هره خلاصه نقشه. کله چې انځور له یوې سکریپټ شوې یا ډېرې لویې بدلون وروسته زوړ ښکاري، یا یو مرستیال نقشه بدله کړې، وکاروئ؛ نقشه پخپله نه بدلېږي، نو د بېرته کولو شی نشته.

### NAMEDVIEW

مستعار نومونه: `NV`، `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`، بیا د لید نوم. `S` په سکرین کې لید خوندي کوي، `W` هغه کړکۍ چې ټاکئ، `R` یو ساتل شوی لید ښیي، `D` یو ړنګوي، `?` د دې ټب لیدونه لیستوي. د موجود نوم لاندې خوندي کول هغه بدلوي؛ هر بدلون یو د بېرته کولو ګام دی. لیدونه د ټب سره تړلي دي چې پکې خوندي شوي. DWG او DXF دوی ساتي (VIEW جدول)؛ د پاڼې لیدونه لومړۍ پاڼې ته بیرته راځي، ځکه فایل نه وایي چې کومه.

### UNDO او REDO

مستعار نوم: `U` د {{cmd:UNDO}} لپاره؛ {{cmd:REDO}} هېڅ نه لري. هم {{key:Mod+Z}} او {{key:Mod+Y}}.

### LAYER

مستعار نوم: `LA`. د {{ui:لایې}} پینل ته ځي.

### LINETYPE، LWEIGHT، LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`، `ByBlock` یا یو نوم (`?` یې لیست کوي: Continuous، د نقشې خپل، او DASHED، HIDDEN، CENTER، PHANTOM، DOT، DASHDOT، BORDER، DIVIDE د `2` (نیمایي) او `X2` (دوه چنده) اندازو سره). {{cmd:LWEIGHT}} (`LW`): د نوو شیانو د کرښې ضخامت په mm، یا `ByLayer`، `ByBlock`، `Default`. {{cmd:LTSCALE}} (`LTS`): د نقشې د linetype پیمانه (د بېرته کولو وړ). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — همغه لکه د حالت بار {{ui:LWT}} تڼۍ. وګورئ [د کرښو ضخامت او linetype](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME، LAYMRG، LAYDEL

{{cmd:RENAME}} (`-RENAME`، `REN`): `Enter object type to rename [LAyer/Block]`، `Enter old name`، بیا نوی نوم؛ شیان یا حوالې تعقیبوي. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` تر {{key:Enter}} پورې، بیا `Select object on target layer or [Name]` او `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`، بیا `Y`: لایه او هر شی چې پکې دی ځي (نه لایه 0، DEFPOINTS یا اوسنۍ لایه). هر یو یو د بېرته کولو ګام دی. وګورئ [نقشه د لایو سره تنظیمول](topic:layers#rename-merge-and-delete-layers).

### LAYISO، LAYUNISO، LAYOFF، LAYFRZ، LAYMCUR، LAYON، LAYTHW

لایې د شیانو په ټاکلو سره؛ همدارنګه د {{ui:لایې}} پینل {{ui:وسایل}} مینو کې. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`، بیا {{key:Enter}}: هره بله لایه بندېږي. {{cmd:LAYUNISO}} بیرته فعالوي. {{cmd:LAYOFF}} او {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (یا یخ شي)، په تکرار؛ `U` وروستی بېرته اخلي، {{key:Enter}} پای ته رسوي. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} هرې لایې ته چالو کوي، {{cmd:LAYTHW}} هرې لایې یخ ماتوي. هر کمانډ یو د بېرته کولو ګام دی. وګورئ [نقشه د لایو سره تنظیمول](topic:layers#work-on-layers-by-picking-objects).

### NEW، OPEN، SAVE، SAVEAS، DXFOUT

{{cmd:NEW}} یوه خالي نقشه پیلوي او {{cmd:OPEN}} یو DWG یا DXF پرانیزي، هر یو په خپل ټب کې په نقشه کې (یو نه بدل شوی نوې نقشه کارول کېږي پرځای د نوي ټب). د بدلونونو سره ټب تړل پوښتنه کوي. وګورئ [سکرین ویشل](topic:split-screen).

{{cmd:SAVE}} (مستعار نوم `QSAVE`، همدارنګه {{key:Mod+S}}) د نقشې په بڼه کې کاپي ډاونلوډوي: DWG که له DWG پرانیستل شوې، DXF که له DXF. نوې نقشه هغه بڼه کاروي چې په دې براوزر کې په {{ui:په بل نوم خوندي کول}} کې وروستی وټاکل شوه، که نه نو DWG.

{{cmd:SAVEAS}} (همدارنګه {{key:Mod+Shift+S}}) د {{ui:یوه کاپي په بل نوم خوندي کړئ}} ډیالوګ پرانیزي: {{ui:DWG}} (او د هغه {{ui:نسخه}}) وټاکئ، {{ui:DXF R12}} یا {{ui:DXF 2000}}، بیا {{ui:خوندي کول}}. انتخاب د دې نقشې لپاره او د دې براوزر نوو نقشو لپاره پاتې کېږي.

{{cmd:DXFOUT}} تل د DXF R12 کاپي ډاونلوډوي، پرته له دې چې {{cmd:SAVE}} بڼه بدله کړي.

وګورئ [فایلونه: څه پرانیزي، څه ساتي](topic:files#saving).

### TOUR

مستعار نوم: `TUTORIAL`. د شپږ ګامه لومړۍ نقشې لیدنه بیا پیلوي. وګورئ [پیل کول](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

مستعار نوم: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. وګورئ [امستنې](topic:settings#toolbar-position).

### COMMANDLINE

مستعار نوم: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: کمانډ کرښه ډاک یا ځړوي، یوه کرښه یې کوي، د ښودلو لپاره د تاریخچې کرښې شمېره پوښتي (0 تر 12)، یا تاریخچه پرانیزي. وګورئ [امستنې](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: د نقشې پورتني بارونه لکه پخوا، یا کمپکټ. وګورئ [امستنې](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: ګام چې {{ui:قطبي}} تعقیب کرښې پکې ترتیبېږي (له 0 ډېر، تر 180 پورې). په همدې براوزر کې ساتل کېږي.

### UNITS

مستعار نوم: `UN`. څنګه اوږدوالی لیکل او ټایپ کېږي.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural او Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. نور: `Enter number of decimal places (0 to 8)`.

نوي اندازې یې تعقیبوي. یو د بېرته کولو ګام. لکه {{ui:د اوږدوالي بڼه}} او {{ui:دقت}} په {{ui:اوسني تنظیمات}} کې؛ وګورئ [فوټ او انچ](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

مستعار نوم: `GDS`. د IC ترتیب لیدل (د GDSII جریان فایل): تجربوي، یوازې د لیدلو او اندازې لپاره.

- یو فایل ټاکونکی `.gds` فایل اخلي؛ که څو سر ټوټې وي، `Enter the top cell to draw`.
- هره لایه او ډیټا ډول د نقشې لایه کېږي (`GDS 1`، `GDS 2/5`)، حوالې او ارې هوار ځای کېږي، د فایل د کاروونکي واحد کې (معمولاً مایکرومتره). یو د بېرته کولو ګام. هېڅ نه سیمولېږي یا ازمویل کېږي، او فایل بیا نه لیکل کېږي.

### DIAGRAM

مستعار نومونه: `TEXTDIAGRAM`، `T2D`. ډیاګرام له متن.

- یو بکس متن اخلي (یا په کمانډ کرښه کې یوه کرښه د `;` سره د بیانونو ترمنځ): Mermaid فلوچارټ، PlantUML د برخو ډیاګرام، D2 یا د له-څخه لیست.
- `Specify the top left corner of the diagram`، بیا `Specify the text height`.

بلاکونه او نښلونکي په لایه `Diagram` کې عادي شیان دي، کله چې پای ته ورسي ټاکل کېږي. یو د بېرته کولو ګام. وګورئ [له متن څخه ډیاګرام رسمول](topic:text-to-diagram).

### OLELIST

مستعار نوم: `OLES`. د OLE شیان چې DWG یې لري او CadCraft یې پخپله نشي ځای کولای.

- هر یو لیستوي: شمېره، ډول، اندازه، که انځور یې ساتلی.
- `Enter an option [Place/eXit] <eXit>`: Place د شمېرې، ښکته کیڼ کنج او پلنوالي غواړي، او یو چوکاټ د انځور سره رسموي. یو د بېرته کولو ګام؛ ساتل شوی شی نه بدلېږي. وګورئ [انځورونه](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

مستعار نوم: `SHX`. ستاسو خپل SHX فونټونه.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:فولډر}} په یوه فولډر کې هر `.shx` لولي (CadCraft Studio؛ په هر پیل کې بیا)، {{ui:فایلونه}} ټاکل شوي فایلونه اخلي (براوزر)، {{ui:معکوس}} د یو فونټ توري له وروستي څخه لومړي ته ترتیبوي. د متن سټایلونه چې د بار شوي فونټ نوم اخلي، په هغه کې رسم کېږي. وګورئ [خپل SHX فونټونو سره متن رسمول](topic:shx-fonts).

### LIMITS

دا څومره لوی نقشه پکار ده.

- `Specify lower left corner or [ON/OFF] <current>`: یو ټکی، `ON` یا `OFF`.
- `Specify upper right corner <current>`.

شبکه د حدودو ډکوي، {{cmd:ZOOM}} All یې ښيي، او کله چې ON وي یو بهرنی ټکی رد کېږي (`**Outside limits`). یو د بېرته کولو ګام؛ په DWG او DXF کې ساتل کېږي. وګورئ [د نقشې حدود ټاکل](topic:drawing-limits).

### AUNITS

مستعار نوم: `ANGUNITS`. څنګه زاویې ښودل کېږي او ټایپ کېږي.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`، یا د نورو دوو لپاره `Enter precision` (0 درجې، 2 دقیقې، 4 ثانیې، 5 تر 8 اعشاري د ثانیې).

یو د بېرته کولو ګام؛ په DWG او DXF کې ساتل کېږي. لکه {{ui:د زاویې بڼه}} په {{ui:اوسني تنظیمات}} کې. وګورئ [بیرینګونه او زاویې ټایپ او ښودل](topic:bearings-and-angles).

### APPLOAD

مستعار نومونه: `AP`؛ یا {{ui:لید}} › {{ui:نور}} › {{ui:اپلیکېشن پورته کول…}}. د {{ui:غوښتنلیکونه بار کړئ}} ډیالوګ: `.lsp` کړنالرې او `.dcl` ډیالوګ فایلونه بار کول، لېږدول، بیا له تاریخچې بار کول، او د پیل سویټ. د کړنالرې `(defun c:NAME …)` کمانډونه لکه نور کار کوي. وګورئ [غوښتنلیکونه بار کول](topic:load-applications) او [LISP کړنالرې چلول](topic:run-lisp).

### ALIASEDIT، REINIT

{{cmd:ALIASEDIT}} (یا {{ui:لید}} › {{ui:نور}} › {{ui:نومونه سمول…}}) خپل د مستعار نومونو فایل پرانیزي (د `ALIAS, *COMMAND` کرښې)؛ {{ui:خوندي کول}} یې پلي کوي. {{cmd:REINIT}} بیا پلي کوي. وګورئ [د کمانډ مستعار نومونه سمول](topic:command-aliases).

### OPTIONKEYS

مستعار نومونه: `OPTKEYS`؛ یا {{ui:امستنې}} › {{ui:CadCraft}} › {{ui:د اختیارونو توري}} › {{ui:سمون…}}. ستاسو د اختیارونو توري فایل پرانیزي (د `COMMAND.OPTION, LETTERS` کرښې، لکه `ARRAY.PO, P`)؛ {{ui:خوندي کول}} یې پلي کوي او {{cmd:REINIT}} بیا پلي کوي. وګورئ [د کمانډ اختیارونو لپاره خپل توري ورکړئ](topic:option-letters).

### LISPEDIT

مستعار نومونه: `VLIDE`؛ یا {{ui:لید}} › {{ui:نور}} › {{ui:LISP مدیر}}. د LISP سمونکی پرانیزي، یوه کړکۍ چې د نقشې ترڅنګ پاتې کېږي.

- متن: د کرښو شمېرې، د پرانیستې قوس ملګری چې د کرسر سره دی روښانه کېږي (سور کله چې نه وي)، {{key:Enter}} نوې کرښه د پرانیستي قوس لاندې تورو کوي، {{key:Tab}} دوه ځایونه ټایپوي، {{key:Esc}} متن پرېږدي.
- {{ui:نقشې ته پورته کول}} ({{key:Ctrl+Shift+Enter}}): هر فورم لولي، لکه {{cmd:APPLOAD}} چې فایل سره کوي، او د `c:` کمانډونه یې جوړوي. فایل د {{cmd:APPLOAD}} په لیست کې ښکاري.
- {{ui:ټاکل شوی چلول}} ({{key:Ctrl+Enter}}): ټاکل شوي فورمونه، یا هغه فورم چې کرسر پکې دی ارزوي.
- {{ui:درېدل}}: هغه کړنالره چې روانه ده ختموي.
- {{ui:کنسول}}: هغه څه چې کړنالره یې چاپ کړي، او هره تېروتنه د کرښې سره؛ د تېروتنې پر کلیک هلته ځئ. متن د یو سر ټاپ فورم په یو وخت کې چلېږي، نو کرښه د فورم ده، یا دننه کرښه چې د تېروتنې نوم یې فنکشن غږوي.
- {{ui:نوی}}، {{ui:پرانیستل}}، {{ui:خوندي کول}} ({{key:Ctrl+S}}): یو `.lsp` فایل. متن همدارنګه په دې براوزر کې ساتل کېږي، نو کړکۍ تړل د متن نه له لاسه ورکوي.
- د متن په څنګ کې: هغه فنکشنونه چې کړنالره یې تعریفوي، هغه چې غږوي او دا LISP لا نه لري، هغه چې غږوي او نه په دې کې تعریف شوي او نه جوړ شوي، او بشپړ لیستونه د هغه څه چې جوړ شوي او څه چې نه دي.

هغه متن چې قوس یې نه بندېږي، یا یو تار چې نه پای ته رسي، نه چلېږي: کرښه نومول کېږي. ګام په ګام ډیبګر، بریکپوینټ یا واچ ونډه نشته. وګورئ [LISP کړنالرې چلول](topic:run-lisp).

### HELP

مستعار نوم: `?`. هر کمانډ، مستعار نومونه او یو کرښه تشریح په کمانډ کرښه کې تاریخچه کې چاپوي. دا دا مرسته نه پرانیزي: {{key:F1}} کېکاږئ یا {{ui:مرسته}} کلیک وکړئ.

## د ټاکنې پرامپټ

`Select objects` په هر پرامپټ کې: شیان کلیک کړئ، کړکۍ (له کیڼ څخه ښي) او کراسونه (له ښي څخه کیڼ) په دوو کلیکونو رسم کړئ، یا لاسو کش کړئ ({{key:Space}} د کش په وخت کې: کړکۍ، کراس، فینس)، {{key:Shift}}+کلیک د لرې کولو لپاره، او {{key:Enter}} کېکاږئ ترڅو بشپړ کړئ. تاسو کولی شئ `ALL` (هر څه)، `L` (وروستی شی)، `P` (Previous: هغه څه چې وروستی کمانډ یې کارولي)، `F` (Fence: شیان چې د ټکو کرښه یې کراس کوي؛ `U` یو ټکی بېرته اخلي)، `W` (Window)، `C` (Crossing)، `R` (Remove mode: ټاکنې شیان لرې کوي؛ پرامپټ `Remove objects` وایي) او `A` (Add again) ټایپ کړئ. `?` یې لیست کوي. دوی د پرامپټ کې نه ښودل کېږي. {{key:Tab}} د یو بل پورې شیان روښانه کوي؛ کلیک وکړئ ترڅو یې وټاکئ. وګورئ [شیان ټاکل](topic:select-objects).

### ACCESS

مستعار نوم: `AX`. له لیدلو پرته ډرافټینګ. {{cmd:ACCESS}} د Access فعالوي یا بندوي (`On`، `Off`)، او د نیولو غږونه (`Sound`) او ویل شوي کمانډونه (`Voice`) بدلوي؛ لومړی یې حالت وایي. کله چې Access فعال وي، هر کمانډ او پایله ستاسو د سکرین لوستونکي له لارې ویل کېږي او د نقشې ساحه یو کیبورډ کرسر لري. د "له لیدلو پرته ډرافټینګ" لارښود کې کیلي شتون لري.

### DESCRIBE

مستعار نوم: `DESC`. ووایه چې نقشه څه لري: څو شیان، د کومې ډول، څومره لوی، څو لایې، او څه ټاکل شوي دي. یوازې لولي؛ هېڅ نه بدلوي.

### WHEREAMI

مستعار نوم: `WHERE`. ووایه چې کرسر چېرته دی، د نقشې په واحدونو کې.

### NEARBY

ووایه چې کرسر ته کوم څه نږدې دي، لومړی نږدې، د هرې واټن او خوا سره.

### SAYSEL

ووایه چې څه ټاکل شوي، هر شی یوه جمله (د کرښې اوږدوالی، پایونه او زاویه؛ د دایرې شعاع او مرکز؛ متن لکه چې لیکل شوی).

### VOICE

ویل شوي کمانډونه فعالول یا بندول. دوی په همدې کمپیوټر کې پیژندل کېږي؛ هغه ځای چې براوزر نه شي کولی، غږ بند پاتې کېږي تر هغې چې د امستنو کې د براوزر آنلاین خدمت غوره نکړئ.

### TOUCHCROSSHAIR

مستعار نوم: `TCX`. د ګوتې سره د ډرافټینګ لپاره افسټ کراس هیر، ترڅو د ګوتې نوک هغه ټکی ونه پټوي چې ټاکئ. کله چې فعال وي، په نقشه کې یوه ګوته نه ټاکي: دا یو کراس هیر حرکت کوي چې د ګوتې پورته او یوې خوا ته ناست دی. د شیانو نیولې او تعقیب د کراس هیر تعقیبوي. د ګوتې پورته کول هېڅ نه ټاکي او کراس هیر پر ځای پرېږدي. د ټاکلو لپاره د نقشې په کنج کې {{ui:Click}} تڼۍ کېکاږئ، یا د دویمې ګوتې سره په نقشه کې هرچېرې ټک وکړئ. د بلې ګوتې د حرکت په وخت کې {{ui:Click}} ونیسئ ترڅو کش کړئ (د ټاکنې کړکۍ، لاسو، ګریپ). یوه ګوته چې ساکنه ونیول شي، یا {{ui:Enter}} تڼۍ، Enter ده. دوې ګوتې لکه پخوا پان او زوم کوي. د نقشې لاندې او لرې څنډو ته نږدې، کراس هیر ګوته ته نږدې کېږي ترڅو د نقشې هر برخه ورسېږي. قلم او موږک تل مستقیم ټاکي.

{{cmd:TOUCHCROSSHAIR}} حالت وایي او `ON`، `OFF`، `Auto` (یوازې هغه ځای چې ګوته یوازینۍ اشاره ده، نو په موږک کمپیوټر کې بند وي)، `Distance` (کراس هیر د ګوتې څخه څومره لرې ناست دی، 24 تر 240 پکسلو پورې) یا `Side` (`Left`: پورته او کیڼ ته، د ښي لاس لپاره؛ `Right` د کیڼ لاس لپاره؛ تڼۍ بلې کنج ته ځي) پوښتي. همدې ټاکنې د امستنو په CadCraft کې دي، او په ټچ سکرین وسیله کې د حالت بار کې د {{ui:افسټ کراس هیر}} سویچ شتون لري. ټاکنې په همدې براوزر کې ساتل کېږي.

### WHOHAS

وایي چې نقشه څوک خلاصه کړې. په CadCraft Studio کې په کمپیوټر، کله چې یو DWG یا DXF پرانیستل شي، د هغې ترڅنګ یو کوچنی د قفل فایل (`Plan.dwg.cclock`: څوک، له کومه وخت، کومه نسخه) لیکل کېږي، هر یوه دقیقه تازه کېږي تر هغه چې نقشه خلاصه وي، او کله چې نقشه تړل شي لرې کېږي. د بل چا خلاصه نقشه پرانیستل وایي چې څوک او له کومه وخت، او {{ui:یوازې د لوستلو لپاره پرانیستل}} (بیا Save نوم غواړي)، {{ui:سره پرانیستل}} (بل شخص په راتلونکي تازه کولو کې خبر کېږي) یا {{ui:لغوه کول}} وړاندې کوي. د بل چا خلاصه فایل باندې ساتل لومړی پوښتنه کوي. هغه قفل چې پنځه دقیقې تازه نه وي زوړ ویل کېږي: بله کاپي بې ساتلو تړل شوې یا کمپیوټر خوب دی.

{{cmd:WHOHAS}} `Current` (خلاصه نقشه)، `File` (یو وټاکئ)، `FOlder` (فولډر وټاکئ: هر خلاصه نقشه پکې لیست کېږي)، `Path` (بشپړه لاره ولیکئ) یا `Name` (نوم چې نور یې ویني؛ کله چې لاګ ان یاست د حساب نوم) پوښتي. Studio یوازې هغه فولډرونه لاس ته راوړلی شي چې تاسو یې غوره کړي؛ د هغه نقشې لپاره چې له هغه فولډر خلاصه شوې چې هېڅکله نه وي غوره شوی، یو ځل وایي چې نشي کولی نقشه خلاصه وښيي؛ `FOlder` فولډر ټاکي، او قفلونه له هغه وخت وروسته هلته کار کوي. قفل د خلکو لپاره یوه یادښت دی، نه یو خنډ: بله برنامه کولی شي لاهم فایل ولیکي. په براوزر کې فولډرونه نشته، او کمانډ دا وایي.

### OVERKILL

مکرر شیان ړنګوي او اورلاپ کرښې او قوسونه پاکوي، د هغو نقشو لپاره چې ډکې د دوه ځله کرښو سره راځي. `Select objects to clean up`، {{key:Enter}}، بیا {{key:Enter}} بیا ترڅو په ښودل شوو امستنو سره پاک کړئ، یا لومړی یو بدل کړئ:

- `Tolerance`: دوه همغږي باید څومره نږدې وي ترڅو یو شان وګڼل شي (په پیل کې 0.000001؛ 0 یعنې په ټوله توګه یو شان).
- `Ignore`: ملکیتونه چې ممکن د دوو شیانو ترمنځ توپیر ولري. یو نوم ټایپ کړئ ترڅو یې بدل کړئ: `Color`، `LAyer`، `LType`، `ltScale`، `LWeight`، `THickness`، `TRansparency`، یا `None` / `All`. کله چې بشپړ شي {{key:Enter}}.
- `Overlap`: فعال یا بند. فعال په حالت کې، هغه کرښې چې په یوه مستقیم خط اورلاپ کوي یوه کرښه کېږي (کرښه چې په بلې کې وي ړنګېږي)، او قوسونه چې په یوه دایره اورلاپ کوي یو قوس کېږي؛ هغه قوسونه چې بشپړ دوران تړي دایره کېږي، او د دایرې پر قوس ځای شوی قوس ړنګېږي.
- `Ends`: فعال یا بند. فعال په حالت کې، کرښې په یوه مستقیم خط او قوسونه په یوې دایرې یوازې سر په سر لګېدلي یو ټوټه کېږي.

هر ډول شی د کاپي لپاره ازمویل کېږي: دوه شیان کله کاپي دي چې هندسه یې د ټولرانس دننه ورته وي او لایه، رنګ، linetype، د linetype پیمانه، د کرښې ضخامت، ضخامت، شفافیت او لوړوالی یې سم وي (لږ هغه چې تاسو یې نادیده نیسئ). کرښې او خلاص پولي لاینونه هم کله ورته ګڼل کېږي چې بل لوري ته رسم شوي وي. په رسم ترتیب کې لومړی شی پاتې کېږي او خپلې ملکیتونه ساتي. کمانډ ښیي څو شیان یې وازمویل او څه ړنګ شول: کاپي، اورلاپ شوې ټوټې یوځای شوې، ټوټې سر په سر یوځای شوې. یو {{cmd:UNDO}} ټول بېرته اخلي. امستنې تر هغې پورې ساتل کېږي ترڅو نقشې کړکۍ وتړئ.

دا پرېږدي: په قفل شوو لایو شیان او پټ شیان. د لوړوالي (Z) لرونکي کرښې نه یوځای کوي (دقیق کاپي یې لاهم ځي)، او د پولي لاین دننه قطعې نه بدلوي (لاغرې نه کېږي)، هغه کرښه چې د پولي لاین د قطعې پر وي، او تړل شوی پولي لاین چې بل لوري ته رسم شوی.

### DRAWORDER

دا بدلوي چې کوم شیان مخ ته رسم کېږي. `Select objects to re-order`، {{key:Enter}}، بیا `Above objects`، `Under objects`، `Front` یا `Back` ({{key:Enter}} = `Back`). `Above objects` او `Under objects` د حوالې شیان غواړي: ټاکنه د هغو مخ ته تر ټولو مخکښ په مخ کې ږدل کېږي، یا د شاته تر ټولو شاته ترې شاته. ټاکل شوي شیان په خپل منځ کې خپل ترتیب ساتي. یو د بېرته کولو ګام. ترتیب د DWG او DXF سره خوندي کېږي، چېرې چې دا هغه ترتیب دی چې شیان په کې لیکل کېږي.

په سکرین کې هر شی د نقشې په ترتیب رسم کېږي، لکه نور پروګرامونه چې فایل پرانیزي: یو جامد هاچ، پراخ پولي لاین یا د متن ماسک هغه کرښې او متن چې شاته دي پټوي، او هغه څه چې مخکې دي یې پټوي. کله چې کرښه متن کراس کړي، دواړه ښکاري. انځورونه او ضمیمه شوي PDF مخونه تل د کرښو لاندې پاتې کېږي. په خورا لوی نقشه کې چېرې چې ډکې سیمې او کرښې له 256 ځله ډېر یو بل سره اوړي، لومړي 256 خپل ترتیب ساتي او پاتې یې ډکې سیمې د کرښو لاندې رسموي، ترڅو بیا رسم چټک پاتې شي.

### TEXTTOFRONT

متن، اندازې او لارښوونې د خلاصې ساحې د نورو هرڅه مخ ته راوړي: `Text`، `Dimensions`، `Leaders` یا `All` ({{key:Enter}} = `All`). یو د بېرته کولو ګام. وایي کله چې هېڅ نه وي، یا دمخه مخ ته وي.

### HATCHTOBACK

د خلاصې ساحې هر هاچ د نورو هرڅه شاته لېږدوي، نو ډکې سیمې د خوندي فایل کې کرښې او متن نه پټوي. هېڅ پوښتنه نشته. یو د بېرته کولو ګام.

### ISOLATEOBJECTS

مستعار نوم: `ISOLATE`. یوازې ټاکل شوي شیان ښيي: هر څه نور په دې ساحه کې تر {{cmd:UNISOLATEOBJECTS}} پورې پټ کېږي. د {{cmd:LAYISO}} برعکس، دا هغه شیان کار کوي چې تاسو یې غوره کوئ، د لایو له پامه پرته، او هېڅ لایه نه بدلوي. پټ شیان نه رسمېږي، نه ټاکل کېږي، نه نیول کېږي، نه زوم کېږي، نه چاپ کېږي، او هغه کمانډونه چې `ALL` اخلي دوی پرېږدي. هغه څه چې د شیانو د جلا کولو پرمهال رسم کوئ، عادي ښکاري.

دا یوازې د ناسته لپاره ده: د دې څخه هېڅ د نقشې سره نه ساتل کېږي، د بېرته کولو ګام نه دی، او نقشه بیا خلاصول ټول ښيي. کله چې شیان پټ وي، د حالت بار یو تڼۍ د شمېرې سره ښیي؛ کلیک یې وکړئ ترڅو بیرته ښکاره شي.

### HIDEOBJECTS

ټاکل شوي شیان تر {{cmd:UNISOLATEOBJECTS}} پورې پټوي. ورته قاعدې لکه {{cmd:ISOLATEOBJECTS}}: یوازې د ناسته لپاره، نه ساتل کېږي، او د بېرته کولو ګام نه دی.

### UNISOLATEOBJECTS

مستعار نومونه: `UNISOLATE`، `UNHIDE`. هر هغه شی بیا ښکاره کوي چې {{cmd:ISOLATEOBJECTS}} یا {{cmd:HIDEOBJECTS}} یې پټ کړی وي، او وایي څو بېرته راغلل.

### LAYLOCKFADE

ټاکي چې په قفل شوو لایو شیان څنګه ښکاري او ایا کلیک دوی ته رسېږي. اوسنی حالت وایي، بیا یو یې اخلي:

- له 0 تر 90 پورې شمېره: د کمزورتیا اندازه په سلنه کې (په پیل کې 50). 0 کمزورتیا بندوي.
- `ON` یا `OFF`: کمزورتیا فعاله یا بنده، اندازه ساتل کېږي.
- `Pick`، بیا `Yes` یا `No`: ایا کلیک کولی شي په قفل شوو لایو کې شیان وټاکي کله چې هېڅ کمانډ نه چلېږي؟ `No` (ډیفالت): نشي ټاکل کېدای. `Yes`: کلیک یا کړکۍ یې وټاکي ترڅو {{ui:ملکیتونه}} وښيي؛ لاهم نه بدلېږي، او د کمانډ خپل `Select objects` هېڅکله نه اخلي.

د نیولو شیان په هرحال په قفل شوو لایو کې پیدا کوي. چاپ هېڅکله کمزوری نه کېږي. دواړه امستنې ستاسو دي، نه د نقشې، او په {{ui:امستنې}} کې د {{ui:قفل شوې لایې}} لاندې هم دي.

### BURST

د بلاک حوالې ټوټې کوي او هغه څه ساتي چې ځانګړتیاوې یې وایي. `Select block references to burst`، {{key:Enter}}: هره حواله د بلاک د شیانو لخوا بدلېږي، او د هرې لیدونکې ځانګړتیا ارزښت د هغې د ځانګړتیا په خپله لایه ساده متن کېږي (لایه 0 کې ځانګړتیا د حوالې لایې ته ځي، لکه د بلاک نور شیان په لایه 0). پټې ځانګړتیاوې ورکېږي. په بلاک کې بلاک پاتې حواله کېږي. یو د بېرته کولو ګام؛ راپور ورکوي چې څو حوالې ټوټه شوې او څو ځانګړتیا ارزښته متن شول.

دا د بهرني نقشې (لینک) حوالې نه مني په نوم (لومړی یې بائنډ کړئ، یا {{cmd:NCOPY}} سره یې کاپي کړئ)، او نور ټاکل شوي شیان نه اخلي. د بلاک حوالو لپاره {{cmd:EXPLODE}} همغه شیان ورکوي؛ {{cmd:BURST}} یوازې بلاک حوالې اخلي او د ځانګړتیا متن شمېري.

### TXT2MTXT

مستعار نوم: `T2M`. یو کرښې متنونه په یو پراګراف متن کې یوځای کوي. `Select single-line text to join`، {{key:Enter}}، بیا `Paragraph` (کرښې یوځای کېږي او د پراخه کرښې په پلنوالي کې ماتېږي) یا `Lines` (هر متن خپله کرښه پاتې کېږي)؛ {{key:Enter}} وروستی کارول شوی اخلي. کرښې له پورته تر ښکته، بیا له کیڼ تر ښي، د پورتنی متن د لارې سره ترتیبېږي. پراګراف د پورتنی متن د پورتنۍ کیڼ کنج څخه ځړېږي او د هغه لوړوالی، ګرځښت، سټایل، لایه او رنګ اخلي. یو د بېرته کولو ګام.

هغه متن چې دمخه پراګراف وي، خالي متن او نور شیان په ټاکنه کې پرېښودل کېږي، او کمانډ شمېره ښیي.

### NCOPY

شیان د بلاک حوالې یا لینک شوې نقشې څخه نقشې ته کاپي کوي، پرته له دې چې هېڅ ټوټه شي. `Pick an object inside a block reference or a linked drawing`: هغه شی چې ټاکنې ته تر ټولو نږدې دی هغه ځای کې کاپي کېږي چې ښکاري، پرته له دې چې څو بلاکونه ژور وي؛ نور وټاکئ، بیا {{key:Enter}}. بیا `Base point to move the copies`: {{key:Enter}} کاپي په خپل ځای پرېږدي، یا بیس ټکی او دویم ټکی ورکړئ. ټول کمانډ یو د بېرته کولو ګام دی.

کاپي هغه لایه اخلي چې ښکاري: په بلاک کې لایه 0 شی د حوالې لایې ته ځي چې ورپکې و، او ByBlock رنګ د هغې حوالې رنګ کېږي. له لینک شوې نقشې، لایه `Plan|Walls` `Plan$0$Walls` کېږي (د لینک ورکړې نوم)، د لینک شوې لایې په رنګ، linetype او ضخامت. د ځانګړتیا ارزښت د متن په توګه کاپي کېږي. په قفل شوو لایو کې بلاک حوالې نشي ټاکل کېدای.

### FLATTEN

د ټاکل شوو شیانو لوړوالی (Z) او ضخامت 0 ټاکي. `Select objects to flatten`، {{key:Enter}}. هغه شیان چې د بلاک تعریفونو کې دي چې ټاکنه کاروي هم هموار کوي (او د هغو بلاکونو دننه بلاکونه)، نو د دې بلاکونو هره حواله بدلېږي؛ لینک شوې نقشې همداسې پاتې کېږي. یو د بېرته کولو ګام؛ راپور ورکوي څو شیان بدل شول، او وایي کله چې هېڅ لوړوالی یا ضخامت نه درلود.

څه چې CadCraft د دریم بعد څخه په 2D نقشه کې ساتي: لوړوالی په دایرو، قوسونو، بیضويو، ټکو، متن، بلاک حوالو، هاچونو، لارښوونو او پولي لاینونو کې (د دوی بلندي)، د هر کرښې هر پای کې لوړوالی، او په کرښو، دایرو، قوسونو، پولي لاینونو، ټکو او متن کې ضخامت، لکه څنګه چې فایل یې درلودل. {{cmd:FLATTEN}} همدا پاکوي. دا د 3D ټب ماډل، 3D مخونه یا جامدې نه بدلوي، او هغه شی چې په مایل الوتکه کې رسم شوی وي دمخه د فایل پرانیستو پر مهال نقشې الوتکې ته راوړل شوی و.

### BREAKLINE

د ماتونې نښې سره کرښه رسموي، د لید لپاره چې لنډ شوی وي. اوسنی اندازه او توسیع وایي، بیا `First point of the break line` (یا `Size` / `Extension` د بدلولو لپاره لومړی)، `Second point`، او `Where the break symbol sits`: د کرښې په اوږدو کې کلیک وکړئ، یا {{key:Enter}} د منځ لپاره. پایله یو پولي لاین دی په اوسنۍ لایه کې: کرښه، د هر ټکي هاخوا د توسیع په اندازه تېرېږي، د Z بڼې ټکی سره چې د اندازې په اندازه لوړ او نیمایي اوږد وي.

`Size` او `Extension` ستاسو د امستنو په توګه یادېږي (اندازه په پیل کې د متن د لوړوالي دوه چنده د اندازې د پیمانې سره؛ توسیع د اندازې نیمایي). {{key:Enter}} کمانډ تکراروي.

### AUDIT

خلاصه نقشه د زیان لپاره ازموي او رغوي. {{cmd:AUDIT}} په ماډل، پاڼو او بلاکونو کې هر شی، او د لایو جدول ګوري، او هغه څه ډول له مخې لیست کوي:

- نه محدود شمېرې یا ډېرې لویې شمېرې؛
- شیان چې اندازه نه لري: بې اوږدوالي کرښه، بې شعاع دایره، یو ټکي پولي لاین، بې توري یا لوړوالي متن، یا صفر پیمانې بلاک حواله؛
- شیان په لایه کې چې نقشه یې نه لري؛ بلاک حوالې چې بلاک نه لري؛ د متن او اندازې سټایل نومونه او linetype نومونه چې په نقشه کې نه دي؛
- بلاکونه چې ځانونه لري، مستقیم یا د نورو بلاکونو له لارې؛
- شیان چې ID، کلید یا فایل handle شریکوي؛
- اندازې چې هغه ټکي نه لري چې له هغو اندازه کېږي، او هاچونه چې پولۍ یې تړل شوې کرښه نه ده.

بیا `Fix them? [Yes/No]` پوښتي. `No` هېڅ نه بدلوي. `Yes` ټول په یو د بېرته کولو ګام کې رغوي: هغه څه چې نشي رسم کېدای لرې کېږي (بد شمېرې، اندازه نه لرونکي، ورکه بلاک، ماتې اندازه، هاچ چې کارېدونکی پولۍ نه لري، هغه حواله چې د بلاکونو حلقه تړي)؛ ورکه لایه جوړېږي؛ نامعلوم سټایل او linetype نومونه بیرته تلواله کېږي؛ شریک کلید بدلېږي. ښیي څو شیان لرې شول او څو رغول شول. همدا موندنې د ستونزو پینل کې هم ښکاري، هر یو د خپل {{ui:سمول}} سره.

هېڅ نه رد کوي، خو یوازې هغه څه ګوري چې CadCraft پخپله رسموي: نور پروګرامونو ته ساتل شوي معلومات (3D جامدې، OLE شیان) نه پرانیستل کېږي.

### RECOVER

زیانمن DXF یا DWG پرانیزي. {{cmd:RECOVER}} فایل غواړي، هغه څه لولي چې لوستل کېدای شي پرځای د فایل رد کولو، هغه څه لیست کوي چې پرېښودل شوي یا اټکل شوي، بیا لکه {{cmd:AUDIT}} چې `Yes` سره کوي، چک او رغوي.

- DXF: هغه کرښې چې د کوډ او ارزښت د جوړې برخه نه وي پرېښودل کېږي ترڅو جوړې بیا سمې شي؛ یوه برخه چې پای نلري تړل کېږي؛ هغه فایل چې لنډ شوی وي تر لنډېدو پورې لوستل کېږي؛ هغه بائنري DXF چې لنډ شوی وي تر خپل وروستي بشپړ ارزښت پورې لوستل کېږي. کله چې برخه، بلاک یا شی لاهم نه لوستل کېږي، پرېښودل کېږي او نومول کېږي، او لوستل تر هغه ور دوام کوي.
- DWG: هغه شیان چې خپلې ازموینې پاسوي یا نشي کوډېدای پرېښودل کېږي، او ورکه شوې شیانو لیست د شیانو معلوماتو په تېرېدو بیا جوړېږي.

په ډیسک کې فایل نه بدلېږي. رغول شوې نقشه نه ساتل شوې خلاصېږي: په نوم یې نوی ساتئ. فایل چې هېڅ ونه لوستل شي رد کېږي، د دلیل سره.

### LEGACYTEXT

زاړه 8-bit ویتنامي فونتونو سره ټایپ شوی متن Unicode ته اړوي. لنډ نومونه `TEXTTOUNICODE` او `VNTEXT`.

زاړه ویتنامي نقشې خپل متن د لویدیځ توریو په توګه ساتي چې یوازې فونټ یې ویتنامي کوي: TCVN3 متن په ABC فونتونو کې (`.VnTime`، `.VnArial`، او لوی توري فونتونه چې نومونه یې په `H` پای مومي)، او VNI متن په VNI فونتونو کې (`VNI-Times`). CadCraft هغه متن داسې ښيي لکه څنګه چې لولي کله چې نقشه خلاصېږي، د متن سټایل، شی یا پراګراف متن د یوې برخې د فونټ له مخې؛ فایل لاهم زاړه توري ساتي.

{{cmd:LEGACYTEXT}} وایي څو متن په هر کوډ کې موندل شول او `Convert … to Unicode?` پوښتي. `Yes` هر یو بیا لیکي (نقشه، پاڼې، بلاکونه، د ځانګړتیا ارزښتونه او تعریفونه)، او متن سټایلونو ته Unicode فونټ ورکوي (Times New Roman، Arial یا Courier New د زاړه فونټ ډول له مخې)، په یو د بېرته کولو ګام کې. د پراګراف متن بڼه ساتل کېږي.

کله چې هېڅ متن معلوم فونټ نه کاروي (سټایل فونټ نوم له لاسه ورکړی)، `Read selected texts as [Tcvn3/Vni/None]` پوښتي: کوډ وټاکئ او متنونه وټاکئ. هغه متن چې دمخه Unicode دی نه بدلېږي. د اندازې متن بدلونونه او د څو لارښوونو متن نه اړول کېږي.
