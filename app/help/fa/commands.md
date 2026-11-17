---
title: مرجع فرمان‌ها
summary: هر فرمان در برنامهٔ نقشه‌کشی CadCraft، با نام‌های مستعارش، پرسش‌هایی که مطرح می‌کند، گزینه‌ها و مقادیر پیش‌فرض.
keywords: فرمان‌ها، نام‌های مستعار، فهرست فرمان، مساحت، محیط، measuregeom، line، pline، circle، arc، trim، offset، dimlinear، block، insert، layout، plot، zoom، help، copyclip، cutclip، pasteclip، pasteorig، copybase، duplicate، selectall
from: 7db2646b
---

نام فرمان یا نام مستعار را تایپ کنید و {{key:Enter}} یا {{key:Space}} را بزنید. حروف بزرگ و کوچک فرقی ندارد، و `_`، `-`، `.` یا `'` در ابتدای آن نادیده گرفته می‌شود. `HELP` (یا `?`) را تایپ کنید تا فهرست کوتاهی از همهٔ فرمان‌ها در تاریخچهٔ خط فرمان چاپ شود؛ برای این راهنما {{key:F1}} را بزنید.

نحوهٔ خواندن پیام‌ها: گزینه‌ها داخل کروشه هستند و با تایپ حروف بزرگشان انتخاب می‌شوند (`D` برای Diameter). مقدار پیش‌فرض داخل پرانتز زاویه‌ای است؛ برای پذیرفتن آن {{key:Enter}} را بزنید. هرجا نقطه خواسته شود، می‌توانید کلیک کنید یا هر یک از قالب‌های [ورود مختصات و فاصله](topic:coordinate-entry) را تایپ کنید. هرجا فاصله خواسته شود، می‌توانید یک عدد تایپ کنید یا دو نقطه کلیک کنید.

فشردن {{key:Enter}} در جایی که نقطه یا شیء لازم است و مقدار پیش‌فرضی وجود ندارد، فرمان را پایان می‌دهد. {{key:Esc}} آن را لغو می‌کند. هر کاری که یک فرمان انجام دهد، یک مرحلهٔ واگرد است.

## رسم

### LINE

نام‌های مستعار: `L`. قطعه‌های مستقیم، هر کدام شیء جداگانه.

- `Specify first point` (Enter: شروع از آخرین نقطه‌ای که داده‌اید)
- `Specify next point [Undo]`، تکرار می‌شود. پس از دو قطعه: `[Undo/Close]`.
- `U` آخرین قطعه را برمی‌گرداند، `C` به نقطهٔ اول می‌بندد و پایان می‌دهد. Enter پایان می‌دهد.

### PLINE

نام‌های مستعار: `PL`. یک پلی‌لاین از قطعه‌های خط و کمان.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close وقتی دو قطعه وجود داشته باشد)
- `A` به کمان می‌رود: `Specify endpoint of arc [Line/CLose/Undo]`. هر کمان به‌صورت مماس به قطعهٔ قبلی ادامه می‌یابد. `L` به خط برمی‌گردد، `CL` با یک کمان می‌بندد.
- Enter پایان می‌دهد؛ پلی‌لاین باز می‌ماند.

### CIRCLE

نام‌های مستعار: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`؛ `D` پرسش `Specify diameter of circle` را می‌پرسد.
- `2P`: دو انتهای یک قطر. `3P`: سه نقطه روی دایره.
- `T` (همچنین فرمان `TTR` و {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`، سپس مماس دوم، سپس شعاع (Enter: آخرین مقدار). دایره بر هر دو شیء (خط، کمان، دایره، قطعه‌های پلی‌لاین، و همچنین داخل بلوک‌ها) مماس است؛ از میان دایره‌هایی که این کار را می‌کنند، آنی که نزدیک‌ترین انتخاب‌های شماست. وقتی هیچ‌کدام جور درنیاید "Circle does not exist" نشان داده می‌شود.
- `TTT` (یا {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): سه شیء؛ دایره‌ای که بر هر سه مماس است و نزدیک‌ترین به انتخاب‌های شماست (سه خط، دایرهٔ درونی یا یکی بیرونی می‌دهد، بسته به جایی که انتخاب می‌کنید).

### ARC

نام‌های مستعار: `A`.

- `Specify start point of arc [Center]`، `Specify second point of arc`، `Specify end point of arc`: کمانی از میان سه نقطه.
- `C`: `Specify center point of arc`، `Specify start point of arc`، `Specify end point of arc`. کمان از نقطهٔ شروع تا پایان پادساعتگرد می‌رود.

### RECTANG

نام‌های مستعار: `REC`، `RECTANGLE`. یک پلی‌لاین بسته.

- `Specify first corner point`، `Specify other corner point`. برای گوشهٔ دوم `@width,height` را تایپ کنید.

### POLYGON

نام‌های مستعار: `POL`. یک چندضلعی منظم به‌صورت پلی‌لاین بسته.

- `Enter number of sides <4>` (3 تا 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: یک نقطه کلیک کنید یا تایپ کنید؛ فاصله‌اش اندازه را تعیین می‌کند و جهتش چندضلعی را می‌چرخاند.

### ELLIPSE

نام‌های مستعار: `EL`.

- `Specify axis endpoint of ellipse [Center]`، `Specify other endpoint of axis`، `Specify distance to other axis`
- `C`: `Specify center of ellipse`، `Specify endpoint of axis`، سپس فاصله تا محور دیگر.
- `I` (`Isocircle`، فقط وقتی {{cmd:ISODRAFT}} روشن است): مرکز، سپس شعاع یا `Diameter`: بیضی‌ای که یک دایره روی صفحهٔ ایزومتریک فعلی به‌نظر می‌رسد.

### HATCH

نام‌های مستعار: `H`، `BH`، `BHATCH`؛ یا {{ui:Hatch}} روی نوار ابزار. ابتدا الگو، مقیاس و زاویهٔ فعلی را چاپ می‌کند.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`، تکرار می‌شود (`Undo` وقتی یک ناحیه وجود داشته باشد): هر کلیک ناحیهٔ بستهٔ اطرافش را اضافه می‌کند، با اشکال بستهٔ داخلش به‌عنوان جزیره. Enter یک هاشور از همه می‌سازد.
- `S`: `Select closed objects` (پلی‌لاین‌های بسته، دایره‌ها، بیضی‌های بسته).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): پرشدگی به‌جای الگو یک گرادیان است. برای پرسش‌هایش {{cmd:GRADIENT}} را ببینید.

See [هاشور و پر کردن نواحی](topic:hatch).

### GRADIENT

نام‌های مستعار: `GD`. ناحیه را با گرادیان یک یا دو رنگ پر می‌کند. ابتدا گرادیان را می‌پرسد، سپس مانند {{cmd:HATCH}} ادامه می‌دهد (`Pick internal point`، `S` برای اشیای بسته، {{key:Enter}} برای پایان).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`، تکرار می‌شود؛ هر بار گرادیان را همان‌طور که اکنون است چاپ می‌کند.
- `T`: `LINEAR`، `CYLINDER`، `SPHERICAL`، `HEMISPHERICAL`، `CURVED`، یا یکی از آن‌ها وارونه (`INVCYLINDER`، `INVSPHERICAL`، `INVHEMISPHERICAL`، `INVCURVED`). حروف اول کافی است.
- `O`: یک رنگ، سپس میزان روشنی‌اش از 0 تا 1 (0 آن را تا سیاه تیره می‌کند، 0.5 خود رنگ است، 1 آن را تا سفید روشن می‌کند). `TW`: رنگ اول و رنگ دوم. رنگ عددی از 1 تا 255، سه عدد مانند `255,128,0`، یا `#rrggbb` است.
- `A`: زاویه‌ای که گرادیان در آن جریان دارد. `C`: مرکزی بله یا خیر (خیر وسط گرادیان را به یک طرف می‌برد).
- رنگ یا نوعی را که نمی‌شناسد، و میزان روشنی‌ای بیرون از 0 تا 1 را رد می‌کند.

{{cmd:HATCHEDIT}} با `G` و Properties (Gradient) بعداً گرادیان را تغییر می‌دهند، یا هر هاشوری را به گرادیان تبدیل می‌کنند. گرادیان روی صفحه کشیده و چاپ می‌شود. DWG 2004 و جدیدتر آن را به‌صورت یک هاشور گرادیان واقعی نگه می‌دارند؛ DXF 2000 و DWG 2000 آن را برای CadCraft نگه می‌دارند، و برنامه‌های دیگر یک پرشدگی تک‌رنگ با رنگ اول می‌بینند.

### HATCHGENERATEBOUNDARY

نام‌های مستعار: `HGB`. مرز را دوباره از یک هاشوری که آن را از دست داده بسازد. `Select hatches` (یا اول آن‌ها را انتخاب کنید)، سپس `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- هر حلقهٔ هاشور به یک پلی‌لاین بسته روی لایهٔ هاشور تبدیل می‌شود؛ پلی‌لاین‌های جدید انتخاب باقی می‌مانند. یک لبهٔ منحنی به قطعه‌های مستقیم کوتاهی برمی‌گردد که هاشور نگه می‌دارد.
- با Yes، هاشور مانند هاشوری که با {{cmd:HATCH}} ساخته شده، مرز تازه‌اش را دنبال می‌کند. یک مرحلهٔ واگرد.
- وقتی هاشوری انتخاب نشده باشد، این را اعلام می‌کند.

### POINT

نام‌های مستعار: `PO`؛ یا {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. اشیای نقطه‌ای، هر کلیک یکی، تا Enter.

- `Specify a point`

### XLINE

نام‌های مستعار: `XL`؛ یا {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. خط‌های ساختاری، بی‌پایان به هر دو جهت. See [خط‌های ساختاری و پرتوها](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`، سپس `Specify through point` برای هر خط، تا Enter.
- `A`: `Enter angle of construction line [Reference] <0>`؛ `R` ابتدا `Select a line object` را می‌پرسد.
- `B`: `Specify angle vertex point`، `Specify angle start point`، سپس `Specify angle end point` برای هر خط.
- `O`: `Specify offset distance [Through] <Through>`، سپس `Select a line object` و `Specify side to offset` (یا `Specify through point`) برای هر خط.

### RAY

بدون نام مستعار؛ یا {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`، سپس `Specify through point` برای هر پرتو، تا Enter.

### TEXT

نام‌های مستعار: `DT`، `DTEXT`؛ یا {{ui:Text}} روی نوار ابزار. متن تک‌خطی؛ هر خط شیء جداگانه‌ای است.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`، سپس `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`، تکرار می‌شود: هر Enter خط بعدی را زیر آن شروع می‌کند. Enter روی خط خالی پایان می‌دهد. {{key:Space}} اینجا یک فاصله تایپ می‌کند.

### DIVIDE

نام‌های مستعار: `DIV`. {{cmd:DIVIDE}} نشانه‌هایی روی یک خط، کمان، دایره، پلی‌لاین، اسپلاین یا بیضی می‌گذارد که آن را به بخش‌های برابر تقسیم می‌کند. شیء را انتخاب کنید، سپس تعداد بخش‌ها را بدهید (2 تا 32767). شیء باز یک نشانهٔ کمتر از تعداد بخش‌ها می‌گیرد؛ شیء بسته یک نشانه هم روی شروعش می‌گیرد. خود شیء بریده نمی‌شود. نشانه‌ها نقطه‌اند؛ `Block` به‌جای آن یک بلوک از همین نقشه می‌خواهد و می‌پرسد آیا با شیء بچرخد. طول روی اسپلاین‌ها و بیضی‌ها در امتداد وترهای کوتاه اندازه‌گیری می‌شود. متن، هاشور و اشیای دیگری را که طول ندارند نمی‌پذیرد.

### MEASURE

نام‌های مستعار: `ME`. {{cmd:MEASURE}} در هر طول داده‌شده یک نشانه روی یک خط، کمان، دایره، پلی‌لاین، اسپلاین یا بیضی می‌گذارد، از انتهایی که به آن نزدیک‌تر است شمارش می‌کند (شیء بسته: از شروعش). طول را با تایپ یا با دو نقطه بدهید. انتهای دور شیء باز نشانه‌ای نمی‌گیرد. `Block` به‌جای یک نقطه، یک بلوک در هر نشانه قرار می‌دهد. طول 0، طولی بلندتر از شیء، و طولی که بیش از 32767 نشانه بسازد را نمی‌پذیرد.

### BOUNDARY

نام‌های مستعار: `BO`، `BPOLY`. {{cmd:BOUNDARY}} یک پلی‌لاین بسته به دور ناحیه‌ای می‌سازد که نقطهٔ انتخاب‌شده در آن است، از هر خط، کمان، دایره، پلی‌لاین و منحنی‌ای که روی صفحه آن را محدود می‌کنند. قطعه‌هایی که روی کمان یا دایره‌اند، به‌صورت قطعه‌های کمانی برمی‌گردند؛ قطعه‌های بیضی‌ها و اسپلاین‌ها به قطعه‌های مستقیم کوتاه تبدیل می‌شوند. با `Islands` روشن (تنظیم شروع)، هر ناحیهٔ بستهٔ داخلش هم پلی‌لاین خودش را می‌گیرد. نقطه‌ها را انتخاب کنید؛ Enter پایان می‌دهد. اشیایی که ناحیه را محدود می‌کنند بدون تغییر می‌مانند. وقتی ناحیهٔ بسته‌ای آن نقطه را دربرنگیرد، این را اعلام می‌کند.

### BLEND

{{cmd:BLEND}} یک اسپلاین میان انتهای دو منحنی باز می‌کشد. هر منحنی را نزدیک انتهایی که باید وصل شود انتخاب کنید. `CONtinuity` بین `Tangent` (اسپلاین هر دو منحنی را در امتدادشان ترک و وارد می‌کند) و `Smooth` (همچنین خمی را که آن‌ها در انتهایشان دارند دنبال می‌کند) انتخاب می‌کند؛ این انتخاب برای نشست نگه داشته می‌شود. دو منحنی تغییر نمی‌کنند. اشیای بسته و دو انتهایی که از پیش به هم رسیده‌اند را نمی‌پذیرد.

### REGION

نام‌های مستعار: `REG`. {{cmd:REGION}} اشیای بسته را به ناحیه تبدیل می‌کند: نواحی تختی که می‌توان آن‌ها را پیوست، برش و اندازه‌گیری کرد. دایره، پلی‌لاین بسته، بیضی بسته یا اسپلاین بسته، یا خط، کمان و پلی‌لاین بازی را که انتها به انتها یک حلقه را می‌بندند انتخاب کنید؛ هر حلقه یک ناحیه می‌شود و جایگزین اشیایی که از آن آمده‌اند می‌شود. کمان‌ها کمان می‌مانند؛ بیضی‌ها و اسپلاین‌ها به قطعه‌های مستقیم کوتاه تبدیل می‌شوند. آنچه بسته نیست و حلقه‌ای نمی‌بندد دست‌نخورده می‌ماند، و تعدادش اعلام می‌شود. در نقشه، یک ناحیه یک یا چند پلی‌لاین بسته است که به‌صورت یک گروه بی‌نام کنار هم نگه داشته شده‌اند؛ پس یک کلیک کل ناحیه را انتخاب می‌کند و یک کپی، ناحیهٔ جداگانه‌ای است؛ برنامه‌های دیگری که فایل را باز می‌کنند، پلی‌لاین‌های بسته می‌بینند.

وقتی ناحیه در نقشه باشد، {{cmd:UNION}}، {{cmd:SUBTRACT}} و {{cmd:INTERSECT}} در زبانهٔ 2D روی ناحیه‌ها کار می‌کنند: `UNION` ناحیه‌های انتخاب‌شده را به یکی می‌پیوندد (ناحیه‌هایی که جدا هستند یک ناحیه با چند محیط می‌شوند)، `SUBTRACT` ناحیه‌هایی را که از آن‌ها کم شود و سپس ناحیه‌هایی را که کم می‌شوند می‌پرسد (یک سوراخ جزئی از ناحیه می‌ماند)، `INTERSECT` ناحیه مشترک همهٔ آن‌ها را نگه می‌دارد. هر کدام مساحت نتیجه را اعلام می‌کند و یک مرحلهٔ واگرد است. وقتی چیزی باقی نماند یا چیزی مشترک نباشد، رد می‌کنند. در زبانهٔ 3D، و در نقشه‌ای بدون ناحیه، همان فرمان‌ها مانند قبل روی جسم‌های توپر کار می‌کنند.

## اصلاح

نام‌های مستعار: `MT`، `T`؛ یا {{ui:Paragraph}} روی نوار ابزار. متن چندخطی که در یک عرض شکسته می‌شود، در محل تایپ می‌شود.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: عرض بین دو گوشه جایی است که متن می‌شکند. `H` پرسش `Specify height` را می‌پرسد، `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`، `L` `Enter line spacing factor (0.25 to 4)`، `R` `Specify rotation angle`، `W` `Specify width (0 for no wrapping)` و گوشهٔ دوم را رد می‌کند.
- سپس یک کادر روی نقشه باز می‌شود: تایپ کنید، {{key:Enter}} برای پاراگراف جدید، {{key:Mod+Enter}} یا کلیک بیرون کادر برای پایان، {{key:Esc}} برای لغو. نوار آن ارتفاع، فاصلهٔ خطوط، عرض و تراز را تنظیم می‌کند. See [افزودن متن و برچسب](topic:text#write-a-note-that-wraps).

### TEXTEDIT

نام‌های مستعار: `ED`، `DDEDIT`؛ یا دوبار کلیک روی یک متن. `Select a text to edit`، تکرار می‌شود تا {{key:Enter}}: هر متن در همان کادر باز می‌شود. اگر روی متن انتخاب‌شده یا دوبار کلیک‌شده شروع شود، همان را ویرایش می‌کند و پایان می‌یابد.

### ERASE

نام‌های مستعار: `E`، `DELETE`؛ یا وقتی اشیا انتخاب شده‌اند {{key:Delete}} را بزنید.

- `Select objects` (وقتی اشیا از پیش انتخاب شده‌اند، رد می‌شود)

### MOVE

نام‌های مستعار: `M`.

- `Select objects`
- `Specify base point [Displacement]`، `Specify second point`
- `D`: `Specify displacement`، که به شکل `dx,dy` تایپ می‌شود.

### COPY

نام‌های مستعار: `CO`، `CP`. هر چند بار که نقطه می‌دهید کپی می‌کند.

`Array` در پرسش نقطهٔ دوم یک سطر را یک‌جا می‌سازد: تعداد آیتم‌ها را بدهید (اصلی یکی حساب می‌شود)، سپس نقطه‌ای که کپی اول در آن می‌آید؛ بقیه با همان فاصله می‌آیند. `Fit` آن نقطه را محل کپی آخر می‌کند و بقیه به‌طور یکنواخت بین آن‌ها پخش می‌شوند.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`، تکرار تا Enter. `U` آخرین کپی را برمی‌گرداند.

### ROTATE

نام‌های مستعار: `RO`.

- `Select objects`، `Specify base point`
- `Specify rotation angle <last angle>`: بر حسب درجه، مثبت پادساعتگرد؛ یا یک نقطه کلیک کنید تا به سمت آن بچرخد.

### SCALE

نام‌های مستعار: `SC`.

- `Select objects`، `Specify base point`
- `Specify scale factor`: یک ضریب مانند `0.5` یا `2` تایپ کنید. نقطهٔ کلیک‌شده فاصله‌اش از نقطهٔ مبنا را به‌عنوان ضریب می‌دهد.

### MIRROR

نام‌های مستعار: `MI`.

- `Select objects`
- `Specify first point of mirror line`، `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

نام‌های مستعار: `AL`؛ یا {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Select objects`
- `Specify first source point`، `Specify first destination point`
- `Specify second source point (Enter to continue)`، `Specify second destination point`
- `Specify third source point (Enter to continue)`، `Specify third destination point`
- با دو جفت: `Scale objects based on alignment points? [Yes/No] <N>`

See [تراز کردن اشیا](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (یا انتخاب فعلی)، `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`، `To [Selection/First/Last/Point] <Selection>`؛ `P` نقطه را می‌پرسد. انتخاب می‌ماند.

### DISTRIBUTE

- `Select objects` (دست‌کم سه تا)، `Distribute [Horizontally/Vertically] <Horizontally>`، `Space evenly [Centers/Gaps] <Gaps>`. دو شیء بیرونی می‌مانند؛ انتخاب می‌ماند.

### ALIGNPANEL

نام‌های مستعار: `ALP`؛ یا {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. پنلی را باز می‌کند که ALIGNTO و DISTRIBUTE را با کلیک اجرا می‌کند.

### LASER

نام‌های مستعار: `LASERCUT`؛ یا {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. پنل Laser را روی نقشه باز می‌کند: کار هر لایه (برش، خط‌زنی، حکاکی، پر کردن، تصویر)، پیش‌نمایش، G-code از نوع GRBL برای ذخیره، و قاب‌بندی و ارسال از طریق Web Serial. See [ارسال نقشه به دستگاه لیزری](topic:laser-cutting).

### STRETCH

نام‌های مستعار: `S`؛ یا {{ui:Stretch}}. `Select objects to stretch`: پنجره‌های عبوری را روی انتها بکشید (یا `C` تایپ کنید) تا جابه‌جا شوند. `Specify base point [Displacement]`، `Specify second point`. نقاط داخل پنجره‌ها جابه‌جا می‌شوند: انتهای خط‌ها، رأس‌های پلی‌لاین (قطعه‌های کمانی ارتفاعشان را نگه می‌دارند)، نقاط اندازه‌گذاری؛ دایره‌ها، بیضی‌ها، متن، نقطه‌ها و بلوک‌ها وقتی مرکز یا نقطهٔ درجشان داخل پنجره باشد، به‌طور کامل جابه‌جا می‌شوند. انتخابی که پیش از فرمان ساخته شده، پنجره‌های عبوری (و کمندها) را که آن را ساخته‌اند نگه می‌دارد تا به همان شکل بکشند. بدون پنجره، اشیا به‌طور کامل جابه‌جا می‌شوند.

### ARRAY، ARRAYRECT، ARRAYPOLAR

نام‌های مستعار: `AR`؛ یا {{ui:Array}}. `Select objects`، سپس `Enter array type [Rectangular/POlar] <Rectangular>` (فقط ARRAY).

- مستطیلی از 4 ستون × 3 سطر شروع می‌شود، با فاصلهٔ 1.5 برابر اندازهٔ اشیا، به‌صورت پیش‌نمایش. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` تعداد ستون‌ها و سطرها را می‌پرسد، `S` فاصله‌ها بین ستون‌ها و بین سطرها را (منفی به چپ یا پایین می‌رود)، `COL` و `R` هر کدام یک جهت را.
- قطبی `Specify center point of array` را می‌پرسد، با 6 آیتم که دور تا دور می‌چرخند. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` آیتم‌ها، `F` زاویهٔ پر کردن (+ پادساعتگرد، − ساعتگرد)، `ROT` بله یا خیر.
- {{key:Enter}} (eXit) کپی‌ها را به‌صورت اشیای ساده می‌سازد. یک مرحلهٔ واگرد.
- `AS` (ASsociative) بین کپی‌های ساده و آرایه‌ای که قابل ویرایش می‌ماند جابه‌جا می‌شود: یک شیء که بعداً با {{cmd:ARRAYEDIT}} با دستگیره‌ها یا در Properties تغییرش می‌دهید. انتخاب به‌یاد سپرده می‌شود ({{cmd:ARRAYASSOCIATIVITY}})؛ با کپی‌های ساده شروع می‌کند.

### ARRAYPATH

کپی در امتداد یک منحنی. `Select objects`، سپس `Select path curve`: یک خط، کمان، دایره، بیضی، پلی‌لاین یا اسپلاین (نه یکی از اشیایی که آرایه می‌شوند). مسیر از انتهایی که به اشیا نزدیک‌تر است شروع می‌شود، و آیتم اول همان اشیایی است که اکنون هستند.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`، با پیش‌نمایش. `M`: `Divide` آیتم‌ها را به‌طور یکنواخت روی کل مسیر پخش می‌کند، `Measure` هر چند فاصله روی مسیر یکی قرار می‌دهد. `I`: تعداد آیتم‌ها (با Measure، 0 یعنی هرچه جا شود؛ عددی بیش از انتهای مسیر به آنچه جا می‌شود محدود می‌شود). `SP`: فاصلهٔ آیتم‌ها در امتداد مسیر (به Measure می‌رود). `AL`: بله یعنی هر آیتم مطابق مسیر می‌چرخد، خیر یعنی عمودی می‌ماند.
- `AS` مانند {{cmd:ARRAY}}. وقتی روشن است، آرایه نسخهٔ خودش از شکل مسیر را نگه می‌دارد: ویرایش بعدی منحنی مسیر، آیتم‌ها را جابه‌جا نمی‌کند.
- مسیری را که منحنی نیست و یک آیتم را نمی‌پذیرد.

### ARRAYEDIT

تغییر یک آرایه‌ای که با ASsociative ساخته شده. `Select array` (یا اول آن را انتخاب کنید). وضعیت فعلی آرایه را چاپ می‌کند، سپس تا {{key:Enter}} می‌پرسد:

- مستطیلی: `COL` ستون‌ها و فاصله‌شان، `R` سطرها و فاصله‌شان، `A` زاویه‌ای که ستون‌ها در آن جریان دارند.
- قطبی: `I` آیتم‌ها، `F` زاویهٔ پر کردن، `ROT` چرخش آیتم‌ها بله یا خیر.
- مسیر: `M` Divide یا Measure، `I` آیتم‌ها، `SP` فاصله، `AL` هم‌راستا با مسیر.
- `S` (Source) اشیایی را که آرایه تکرار می‌کند، جداگانه باز می‌کند، مانند ویرایشگر بلوک. آنجا بکشید و ویرایش کنید؛ {{cmd:ARRAYCLOSE}} ذخیره یا صرف‌نظر می‌کند، و همهٔ آیتم‌ها دنبال می‌کنند.
- `REP` (REPlace): `Select replacement objects`، `Specify base point of the replacement objects`، سپس آیتم‌هایی را که باید عوض شوند کلیک کنید، و {{key:Enter}}. آن آیتم‌ها به‌جای خودشان جایگزین را نشان می‌دهند؛ اشیای جایگزین از نقشه خارج می‌شوند و در آرایه زندگی می‌کنند. `RES` (RESet) اشیای منبع را در همهٔ آیتم‌ها دوباره نشان می‌دهد.
- هر تغییر یک مرحلهٔ واگرد است. کپی‌های ساده، ارجاع بلوک ساده و آرایه‌ای روی لایهٔ قفل‌شده را رد می‌کند.

همین عددها در Properties زیر Array هستند، و آرایه دستگیره دارد: نقطهٔ مبنایش آن را جابه‌جا می‌کند، دستگیرهٔ آیتم دوم فاصله را تعیین می‌کند، دستگیرهٔ بعد از آیتم آخر تعداد را (در قطبی: آیتم دوم تعداد آیتم‌ها، آیتم آخر زاویهٔ پر کردن را). {{cmd:EXPLODE}} آرایه را به کپی‌های ساده برمی‌گرداند.

### ARRAYCLOSE

پایان دادن به ویرایش Source در {{cmd:ARRAYEDIT}}: `Save the changes to the array's source objects? [Save/Discard] <Save>`. وقتی هیچ اشیای منبع آرایه‌ای باز نباشد، این را اعلام می‌کند. {{cmd:BCLOSE}} همین کار را می‌کند.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. تعیین می‌کند {{cmd:ARRAY}}، ARRAYRECT، ARRAYPOLAR و {{cmd:ARRAYPATH}} با چه چیزی شروع کنند؛ گزینهٔ `AS` آن‌ها همین تنظیم را تغییر می‌دهد. در همین مرورگر به‌یاد سپرده می‌شود.

### OFFSET

نام‌های مستعار: `O`. خط‌ها، کمان‌ها، دایره‌ها و پلی‌لاین‌ها.

وقتی پلی‌لاین به بیرون حرکت می‌کند و قطعه‌های مستقیمش در یک گوشه از هم جدا می‌شوند، {{cmd:OFFSETGAPTYPE}} تعیین می‌کند شکاف چگونه بسته شود.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`، سپس `Specify point on side to offset` (یا، با Through، `Specify through point`)، تکرار تا Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: نحوهٔ بستن شکاف‌ها توسط {{cmd:OFFSET}} در گوشه‌های بیرونی یک پلی‌لاین. `0` قطعه‌ها را امتداد می‌دهد تا به هم برسند (تنظیم شروع)، `1` آن‌ها را با کمانی به دور گوشهٔ قدیمی وصل می‌کند، `2` با یک برش مستقیم. گوشه‌های داخلی و قطعه‌های کمانی تحت تأثیر نیستند. برای این نشست نگه داشته می‌شود.

### EXTRIM

{{cmd:EXTRIM}} هر چیزی را در یک طرف یک لبه برش می‌دهد. لبهٔ برش را انتخاب کنید (خط، کمان، دایره، پلی‌لاین، بیضی، اسپلاین یا خط ساختاری)، سپس نقطه‌ای روی طرفی که باید پاک شود انتخاب کنید: هر خط، کمان، دایره، پلی‌لاین و خط ساختاری که از لبه عبور می‌کند، بخش آن طرف را از دست می‌دهد و از خود لبه شروع می‌شود. وقتی طرف را انتخاب می‌کنید، قطعه‌هایی که حذف می‌شوند دنبال نشانگر حرکت می‌کنند. برای لبهٔ بسته، طرف‌ها داخل و بیرون هستند. اشیایی که فقط لبه را لمس می‌کنند، و متن، هاشور، اسپلاین و بیضی‌هایی که از آن عبور می‌کنند، دست‌نخورده می‌مانند. یک مرحلهٔ واگرد.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: نحوهٔ شروع {{cmd:TRIM}} و {{cmd:EXTEND}}. `1` Quick: هر شیء یک لبهٔ برش یا مرز است. `0` Standard: ابتدا لبه‌ها را می‌پرسند. همچنین `(setvar "TRIMEXTENDMODE" 0)` در LISP.

### TRIM

نام‌های مستعار: `TR`. ابتدا `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` را چاپ می‌کند. در حالت Quick هر شیء قابل‌مشاهده یک لبهٔ برش است، و شیئی که چیزی از آن عبور نمی‌کند پاک می‌شود؛ در حالت Standard ابتدا `Select cutting edges (Enter = every object)` را می‌پرسد و فقط در آن‌ها برش می‌زند.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`، تکرار: قطعه‌ای را که باید حذف شود کلیک کنید (وقتی نشانگر روی آن است خاکستری و خط‌چین نشان داده می‌شود)، یک مسیر از چند قطعه بکشید (همه در یک مرحله می‌روند)، یا دو نقطهٔ خالی کلیک کنید تا یک حصار بین آن‌ها ساخته شود. {{key:Shift}} به‌جای برش امتداد می‌دهد. `T` لبه‌های برش را انتخاب می‌کند (حالت Standard)، `F` نقاط حصار را می‌پرسد، `C` دو گوشهٔ پنجره (قطعه‌هایی که تا حدی داخلش هستند می‌روند)، `O` پرسش `Enter a trim mode option [Quick/Standard]` را، `E` پرسش `Enter an implied edge extension mode [Extend/No extend]` را (EDGEMODE)، `R` اشیای انتخاب‌شده را پاک می‌کند، `U` آخرین انتخاب یا کشیدن را برمی‌گرداند. Enter پایان می‌دهد. See [برش و امتداد](topic:trim-and-extend).

- کلیک روی هاشور آن را برش می‌دهد: لبه‌های برش ناحیهٔ هاشورخورده را می‌شکنند و قطعه‌ای که کلیک کرده‌اید برداشته می‌شود (هیچ خط رسم‌شده‌ای در محل قبلی‌اش باقی نمی‌ماند). هاشور الگو یا گرادیانش را نگه می‌دارد؛ هاشوری که به مرزش پیوند داشته، بعد از آن پیوند ندارد، چون دیگر آن را پر نمی‌کند. وقتی هیچ لبه‌ای هاشور را آنجا نشکند، وقتی کلیک روی هاشور نیست، و وقتی چیزی باقی نماند (از {{cmd:ERASE}} استفاده کنید) این را اعلام می‌کند. مسیر یا حصار کشیده‌شده هاشور را برش نمی‌دهد.

### EXTEND

نام‌های مستعار: `EX`. همان TRIM با جهت برعکس: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. یک کلیک نزدیک‌ترین انتها را تا مرز بعدی بلند می‌کند؛ یک مسیر یا حصار کشیده‌شده هر شیئی را که عبور می‌کند بلند می‌کند؛ {{key:Shift}} برش می‌دهد. `B` لبه‌های مرزی را انتخاب می‌کند (حالت Standard). Mode و Edge با TRIM مشترک هستند.

### LINKVIEWS

نام‌های مستعار: `SYNCVIEWS`؛ یا {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}، یا آیکون پیوند روی زبانه‌های نقشه. `Link the panes' views [ON/OFF]` (Enter وضعیت دیگر را می‌گیرد): وقتی روشن است، پن یا زوم در پنجرهٔ فعال هر پنجره‌ای را که همان نوع فضا را نشان می‌دهد جابه‌جا می‌کند. See [تقسیم صفحه](topic:split-screen).

### OPENIN3D

بدون نام مستعار؛ یا {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} جایی که برنامهٔ مدل‌سازی سه‌بعدی نقشهٔ واگذارشده را می‌پذیرد. آن را در آنجا، در یک زبانهٔ جدید، به‌صورت DWG باز می‌کند (چیزی بارگذاری نمی‌شود). اگر مرورگر زبانه را مسدود کند، این را اعلام می‌کند.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: آنچه فشردن و کشیدن روی یک نقطهٔ خالی می‌کشد. همان است که در تنظیمات › CadCraft › Dragging to select است. See [انتخاب با کمند](topic:lasso-selection).

### FILLET

نام‌های مستعار: `F`. خط‌ها، کمان‌ها، دایره‌ها و پلی‌لاین‌ها. ابتدا `Current settings: Mode = TRIM, Radius = 0` را چاپ می‌کند.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` پرسش `Specify fillet radius <last>` را می‌پرسد. `T` پرسش `Enter Trim mode option [Trim/No trim]` را: با No trim، اشیا جای خودشان می‌مانند و فقط کمان اضافه می‌شود.
  - `M` فرمان را برای گوشه‌های بیشتر ادامه می‌دهد تا {{key:Enter}}؛ `U` آخرین گوشه را بدون خروج از فرمان برمی‌گرداند.
  - `P` پرسش `Select 2D polyline [Radius]` را می‌پرسد و هر گوشه‌ای را که دو قطعهٔ مستقیم به هم می‌رسند گرد می‌کند. گردهایی که از پیش دارد با شعاع جدید جایگزین می‌شوند؛ شعاع 0 آن‌ها را برمی‌دارد. گوشه‌هایی که طول ضلعشان برای شعاع کوتاه است رها و شمرده می‌شوند.
- `Select second object or shift-select to apply corner [Radius]`. برای گوشهٔ تیز، هنگام کلیک {{key:Shift}} را نگه دارید، هرچه شعاع باشد.

روی بخشی از هر شیء که می‌خواهید نگه دارید کلیک کنید. دو خطی که به هم نمی‌رسند امتداد داده می‌شوند. دو خط موازی یک نیم‌دایره روی شکاف می‌گیرند، در انتهای خط اول که نزدیک کلیک شماست. دایره هرگز بریده نمی‌شود. دو قطعهٔ کنار هم از یک پلی‌لاین کمان را داخل پلی‌لاین می‌گیرند؛ یک پلی‌لاین و شیء دیگر وقتی کار می‌کند که برش روی اولین یا آخرین قطعهٔ پلی‌لاین بیفتد.

### CHAMFER

نام‌های مستعار: `CHA`. خط‌ها و قطعه‌های مستقیم پلی‌لاین‌ها. ابتدا فاصله‌های فعلی (یا طول و زاویه) را چاپ می‌کند.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` پرسش‌های `Specify first chamfer distance <last>` و `Specify second chamfer distance <the first>` را می‌پرسد: اولی از خط اولی که انتخاب می‌کنید بریده می‌شود، دومی از خط دیگر.
  - `A` پرسش‌های `Specify chamfer length on the first line` و `Specify chamfer angle from the first line` را می‌پرسد.
  - `E` (mEthod) انتخاب می‌کند کدام‌یک از این دو برای پخ بعدی به کار رود. `T`، `M`، `U` و `P` مانند {{cmd:FILLET}} کار می‌کنند.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+کلیک یک گوشهٔ تیز می‌سازد.

فاصله‌ای که از خط بلندتر باشد رد می‌شود (`Distance is too large.`).

### BREAK و BREAKATPOINT

نام‌های مستعار: `BR`. `Select object` (جایی که کلیک می‌کنید نقطهٔ اول است)، `Specify second break point [First point]`؛ `F` پرسش‌های `Specify first break point` و `Specify second break point` را می‌پرسد. بخش میانی حذف می‌شود؛ روی دایره، پادساعتگرد از نقطهٔ اول. BREAKATPOINT پرسش `Specify break point` را می‌پرسد و شیء را در آنجا به دو بخش تقسیم می‌کند (دایره نه).

### LENGTHEN

نام‌های مستعار: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: یک انتخاب `Current length` (و زاویهٔ محصورشدهٔ کمان) را چاپ می‌کند و دوباره می‌پرسد. `DE` پرسش `Enter delta length (negative shortens) [Angle]` را، `P` پرسش `Enter percentage length` را، `T` پرسش `Specify total length [Angle]` را، `DY` کشیدن را. سپس `Select an object to change [Undo]`، تکرار: انتهایی که به کلیک نزدیک‌تر است جابه‌جا می‌شود. خط‌ها، کمان‌ها و پلی‌لاین‌های باز.

### JOIN

نام‌های مستعار: `J`. `Select objects to join`. خط‌ها، کمان‌ها و پلی‌لاین‌های بازی که انتها به انتها به هم می‌رسند به پلی‌لاین تبدیل می‌شوند (بسته وقتی زنجیره بسته شود)؛ خط‌های روی یک خط، یک خط می‌شوند؛ کمان‌های یک دایره، یک کمان یا خود دایره. تاریخچه می‌گوید چند شیء به هم پیوستند و چند شیء نپیوستند.

### MATCHPROP

نام‌های مستعار: `MA`، `PAINTER`. `Select source object`، سپس `Select destination objects [Settings]` و {{key:Enter}}. لایه و رنگ را کپی می‌کند، و بین اشیای همان نوع ارتفاع و عرض متن، اندازه‌های اندازه‌گذاری، یا الگوی هاشور را. `S` پرسش `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` را می‌پرسد، تکرار تا {{key:Enter}}؛ انتخاب برای نشست به‌یاد سپرده می‌شود.

### EXPLODE

نام‌های مستعار: `X`. پلی‌لاین‌ها به خط و کمان، ارجاع‌های بلوک به اشیای خودشان، و اندازه‌گذاری‌ها به خط، نوک پیکان و متن تبدیل می‌شوند. آرایهٔ قابل ویرایش ({{cmd:ARRAYEDIT}}) به کپی‌های ساده از اشیایش تبدیل می‌شود.

- `Select objects`

### GROUP

نام مستعار: `G`. {{cmd:GROUP}} به اشیای انتخاب‌شده یک نام مشترک می‌دهد. اشیا را انتخاب کنید، سپس یک نام تایپ کنید (بدون فاصله؛ `?` گروه‌ها را فهرست می‌کند؛ Enter یک گروه بی‌نام می‌سازد) و برای گروه نام‌دار، یک توضیح اختیاری. از آن به بعد کلیک روی یکی از آن‌ها، یا پنجره‌ای که یکی از آن‌ها را بگیرد، همهٔ آن‌ها را انتخاب می‌کند، پس با هم جابه‌جا، کپی و پاک می‌شوند؛ هر شیء همچنان شیء جداگانه‌ای است. یک شیء می‌تواند در چند گروه باشد. کپی از کل یک گروه، گروه بی‌نام جدیدی است؛ کپی از یک عضو به‌تنهایی، به گروه می‌پیوندد. گروه‌ها متعلق به فضایی هستند که در آن ساخته شده‌اند (مدل یا یک برگه). وقتی به‌صورت DWG یا DXF ذخیره کنید و دوباره در CadCraft باز کنید، نگه داشته می‌شوند؛ فایل‌های DXF 2000 آن‌ها را به‌عنوان اشیای گروه برای برنامه‌های دیگر هم دارند، و گروه‌های ساخته‌شده در برنامهٔ دیگر هنگام باز کردن DXF یا DWG خوانده می‌شوند.

### UNGROUP

{{cmd:UNGROUP}} گروه‌ها را جدا می‌کند: اشیای گروه‌ها را انتخاب کنید (هر گروهی که در آن‌ها هستند جدا می‌شود) یا `Name` و نام گروه را تایپ کنید. اشیا در نقشه می‌مانند. یک مرحلهٔ واگرد گروه‌ها را برمی‌گرداند.

### GROUPEDIT

{{cmd:GROUPEDIT}} یک گروه را تغییر می‌دهد. یکی از اشیایش را انتخاب کنید، یا `Name` و نامش را بدهید؛ گروهی که از پیش انتخاب شده همان‌طور که هست گرفته می‌شود. سپس: `Add` اشیا (یکی‌یکی انتخاب می‌شوند، نه گروه به گروه)، `Remove` اشیا، `REName` گروه، تغییر `Description`، یا تنظیم `Selectable` (اینکه کلیک روی یک شیء کل گروه را انتخاب کند). `eXit` یا Enter پایان می‌دهد. گروهی که هیچ شیئی ندارد از بین می‌رود.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: با `1` (تنظیم شروع) کلیک یا پنجره روی یک شیء گروه‌بندی‌شده کل گروهش را انتخاب می‌کند؛ با `0` اشیای منفرد، تا بتوانید یک عضو را ویرایش کنید. برای این نشست نگه داشته می‌شود.

## کلیپ‌بورد

کلیپ‌بورد خود CadCraft: در یک نقشه، بین نقشه‌ها، و بین زبانه‌های CadCraft در همین مرورگر کار می‌کند. See [کپی، چسباندن و تکثیر](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}، یا {{ui:Copy}} در گروه {{ui:Edit}}. اشیا را به کلیپ‌بورد می‌برد، همراه با بلوک‌ها و لایه‌هایی که استفاده می‌کنند. اشیا انتخاب می‌مانند.

- `Select objects to copy` (وقتی اشیا از پیش انتخاب شده‌اند، رد می‌شود)

### CUTCLIP

{{key:Mod+X}}، یا {{ui:Cut}} در منوی {{ui:More}}. اشیا را به کلیپ‌بورد کپی می‌کند، سپس آن‌ها را پاک می‌کند (یک مرحلهٔ واگرد).

- `Select objects to cut` (وقتی اشیا از پیش انتخاب شده‌اند، رد می‌شود)

### COPYBASE

اشیا را به کلیپ‌بورد کپی می‌کند با یک نقطهٔ مبنا که انتخاب می‌کنید؛ چسباندن آن نقطه را قرار می‌دهد.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}، یا {{ui:Paste}} در گروه {{ui:Edit}}. کپی با نشانگر حرکت می‌کند و از گوشهٔ پایین‌چپ محدوده‌اش آویزان است (یا از مرکزش، یا از نقطهٔ `COPYBASE`؛ See [تنظیمات CadCraft](topic:settings)).

- `Specify insertion point`

اشیای چسبانده‌شده انتخاب می‌شوند. اگر بلوکی با همان نام از پیش در نقشه باشد، تعریف همین نقشه را نگه می‌دارد.

وقتی ناحیه‌ای که در MarkupCraft کپی شده جدیدتر از آن چیزی است که CadCraft کپی کرده (و کمتر از 6 ساعت پیش است)، {{key:Mod+V}} و `PASTECLIP` همان ناحیه را می‌چسبانند: See `PASTEAREA`.

### PASTEAREA

نام‌های مستعار: `PAREA`. {{ui:Paste a copied area}} در منوی {{ui:More}}. ناحیه‌ای را که با {{ui:Copy area}} در MarkupCraft کپی شده، به‌صورت تصویر در اندازهٔ واقعی‌اش می‌چسباند. See [تصاویر در نقشه](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (فقط وقتی برگه مقیاس نقشه نداشته): یک عدد، {{key:Enter}} برای اندازهٔ کاغذ، یا `P`، سپس `First point on the pasted area`، `Second point on the pasted area` و فاصلهٔ واقعی‌شان.

### PASTEORIG

{{key:Mod+Shift+V}}، یا {{ui:Paste in place}} در منوی {{ui:More}}. در مختصاتی که اشیا از آن کپی شده‌اند می‌چسباند. چیزی نمی‌پرسد.

### DUPLICATE

نام‌های مستعار: `DUP`. {{key:Mod+D}}، یا {{ui:Duplicate and move}} در منوی {{ui:More}}. کپی اشیا از جایی که هستند با نشانگر حرکت می‌کند؛ {{key:Esc}} هیچ چیزی باقی نمی‌گذارد. از کلیپ‌بورد استفاده نمی‌کند.

- `Select objects to duplicate` (وقتی اشیا از پیش انتخاب شده‌اند، رد می‌شود)
- `Specify where the copy goes (Esc leaves nothing)`: کلیک کنید، یک نقطه تایپ کنید، `@dx,dy` (از جایی که نشانگر بود)، یا یک فاصله به سمت نشانگر.

### SELECT

`Select objects` را می‌پرسد (با همهٔ گزینه‌های زیر) و آنچه را انتخاب کرده‌اید انتخاب‌شده نگه می‌دارد، برای فرمان بعدی یا برای `P` بعداً.

### QSELECT

نام‌های مستعار: `QS`. در مرورگر، کادر گفتگوی {{ui:Quick select}} (See [انتخاب اشیا](topic:select-objects#select-by-a-rule-quick-select)). بدون آن، خط فرمان `Enter object type`، `Enter property`، `Enter operator [=/<>/>/</*/Select all] <=>` و `Enter value` را می‌پرسد. موارد منطبق، انتخاب می‌شوند.

### SELECTSIMILAR

نام‌های مستعار: `SIM`. `Select objects [SEttings]` (یا انتخاب فعلی): هر شیئی از همان نوع با همان لایه و رنگ را انتخاب می‌کند (و نام بلوک و الگوی هاشور را). `SE` پرسش `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` را می‌پرسد، تکرار تا {{key:Enter}}.

### FIND

بدون نام مستعار؛ یا {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. در مرورگر، کادر گفتگوی {{ui:Find and replace}} (See [افزودن متن و برچسب](topic:text#find-and-replace-words)). بدون آن: `Enter text to find`، سپس `Enter replacement text (Enter: select what is found)`. در متن، مقادیر ویژگی و متن اندازه‌گذاری، روی زبانهٔ باز یا در انتخاب جستجو می‌کند.

### SELECTALL و DESELECT

`SELECTALL` (نام مستعار `AI_SELALL`، {{key:Mod+A}}) همهٔ اشیایی را که روی زبانهٔ باز می‌توانید ویرایش کنید انتخاب می‌کند. `DESELECT` (نام‌های مستعار `AI_DESELECT`، `SELECTNONE`؛ یا {{key:Esc}}) انتخاب را پاک می‌کند.

## اندازه‌گذاری

### DIMLINEAR

نام‌های مستعار: `DLI`، `DIMLIN`. فاصلهٔ افقی یا عمودی.

- `Specify first extension line origin [Select object]` (Enter یا `S`: `Select object to dimension`، سپس کلیک روی یک خط، کمان، دایره یا قطعهٔ پلی‌لاین)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` متن را می‌پرسد (`<>` مقدار اندازه‌گیری‌شده است)، `H` و `V` جهت را ثابت می‌کنند، `R` پرسش `Specify angle of dimension line <0>` را می‌پرسد.

### DIMALIGNED

نام‌های مستعار: `DAL`، `DIMALI`. فاصلهٔ واقعی بین دو نقطه.

- مبدأها مانند {{cmd:DIMLINEAR}}، سپس `Specify dimension line location [Text]`.

### DIMANGULAR

نام‌های مستعار: `DAN`، `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- کمان: زاویه‌اش. دایره: `Specify second angle endpoint`. خط: `Select second line`. Enter: `Specify angle vertex`، `Specify first angle endpoint`، `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: داخل زاویه‌ای که می‌خواهید اندازه بگیرید کلیک کنید.

### DIMRADIUS و DIMDIAMETER

نام‌های مستعار: `DRA`، `DIMRAD`؛ `DDI`، `DIMDIA`.

- `Select arc or circle`، سپس `Specify dimension line location [Text]`.

### DIMCONTINUE

نام‌های مستعار: `DCO`، `DIMCONT`. از آخرین اندازهٔ خطی یا هم‌تراز ساخته‌شده ادامه می‌دهد (یا `Select linear or aligned dimension` را می‌پرسد).

- `Specify second extension line origin [Undo]`، تکرار تا Enter.

### DIMBASELINE

نام‌های مستعار: `DBA`، `DIMBASE`. مانند {{cmd:DIMCONTINUE}}، با این تفاوت که هر اندازه از مبدأ اول شروع می‌شود و دورتر روی هم قرار می‌گیرد.

### DIMORDINATE

نام‌های مستعار: `DOR`، `DIMORD`. `Specify feature location`، سپس `Specify leader endpoint [Xdatum/Ydatum/Text]`. فاصلهٔ X یا Y یک نقطه را از مبدأ UCS، روی یک خط راهنما، می‌نویسد: خط راهنمایی که بیشتر بالا یا پایین می‌رود X می‌خواند، و آنی که بیشتر به پهلو می‌رود Y می‌خواند؛ `Xdatum` و `Ydatum` تعیین می‌کنند کدام. ابتدا مبدأ را با {{cmd:UCS}} تنظیم کنید (بدون آن، مبدأ 0,0 نقشه است). دستگیره‌ها نقطه، مبدأ و انتهای خط راهنما را جابه‌جا می‌کنند، و مقدار دنبال می‌کند. در DWG و DXF به‌صورت یک اندازهٔ مختصاتی واقعی ذخیره می‌شود. انتهای خط راهنما را روی خود نقطه رد می‌کند.

### DIMARC

نام‌های مستعار: `DAR`. `Select arc or polyline arc segment`، سپس `Specify arc length dimension location [Text]`. طول را در امتداد کمان (نه وتر) اندازه می‌گیرد و نماد کمان را پیش از مقدار می‌نویسد. دایرهٔ کامل، خط یا قطعهٔ مستقیم پلی‌لاین را رد می‌کند. DWG آن را به‌صورت اندازهٔ طول کمان نگه می‌دارد؛ DXF آن را به‌صورت اندازهٔ زاویه‌ای با طول به‌عنوان متن نگه می‌دارد، و CadCraft آن را دوباره به‌صورت اندازهٔ طول کمان باز می‌کند.

### DIMJOGGED

نام‌های مستعار: `DJO`، `JOG`. `Select arc or circle`، `Specify center location override`، `Specify jog location`. اندازهٔ شعاع برای منحنی‌ای که مرکزش دور یا خارج از برگه است: خط اندازه از نقطه‌ای که می‌دهید شروع می‌شود، نه از مرکز، با یک شکستگی در آن، و همچنان شعاع واقعی را می‌نویسد. DWG آن را به‌صورت اندازهٔ شعاع شکسته نگه می‌دارد؛ DXF آن را به‌صورت اندازهٔ شعاع نگه می‌دارد، و CadCraft آن را دوباره شکسته باز می‌کند.

### DIMJOGLINE

نام‌های مستعار: `DJL`. `Select dimension to add jog [Remove]`، سپس `Specify jog location (or press Enter)`. یک نماد شکستگی روی خط اندازهٔ خطی یا هم‌تراز می‌گذارد، تا نشان دهد فاصله با مقیاس کشیده نشده؛ مقدار تغییر نمی‌کند. `Remove` آن را برمی‌دارد. انواع دیگر اندازه را رد می‌کند.

### QDIM

بدون نام مستعار. `Select geometry to dimension`، سپس `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. چند شیء را در یک مرحله اندازه می‌گیرد، از انتهای خط‌ها و قطعه‌های پلی‌لاین، مرکز دایره‌ها و کمان‌ها، نقطه‌ها و ارجاع بلوک‌ها. موقعیتی بالا یا پایین اشیا، به‌صورت عرضی اندازه می‌گیرد؛ موقعیتی کنارشان، به‌صورت طولی. `Continuous` نقاط را زنجیره می‌کند، `Baseline` همه را از اولی اندازه می‌گیرد، `Staggered` جفت‌ها را از وسط به بیرون تو در تو قرار می‌دهد، `Ordinate` فاصلهٔ هر نقطه را از مبدأ می‌دهد (`datumPoint` یکی تازه انتخاب می‌کند)، `Radius` و `Diameter` هر دایره و کمان انتخاب‌شده را اندازه می‌گیرند. حالت به‌یاد سپرده می‌شود. هرچه می‌سازد یک مرحلهٔ واگرد است. وقتی کمتر از دو نقطه باشد، یا برای Radius و Diameter کمانی یا دایره‌ای نباشد، این را اعلام می‌کند.

### DIMBREAK

نام‌های مستعار: `DBREAK`. `Select dimensions to add or remove breaks`، سپس `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` در خط اندازه و خط‌های رابط جایی که شیء دیگری از آن‌ها عبور می‌کند شکاف می‌گذارد، و وقتی آن اشیا یا اندازه جابه‌جا شوند، شکاف‌ها را دوباره حساب می‌کند. `Manual` (یک اندازه) دو نقطه می‌خواهد و بین آن‌ها شکاف می‌گذارد. `Remove` همهٔ شکاف‌ها را برمی‌دارد. شکاف 1.5 برابر ارتفاع متن اندازه است.

### DIMSPACE

بدون نام مستعار. `Select base dimension`، `Select dimensions to space`، `Enter spacing value or Auto <Auto>`. خط‌های اندازهٔ اندازه‌گذاری‌های خطی و هم‌تراز موازی (یا زاویه‌ای‌های حول یک رأس) را جابه‌جا می‌کند تا فاصلهٔ یکسانی داشته باشند، از اندازهٔ مبنا شمرده شده، هر کدام در طرفی که هست. `0` آن‌ها را با مبنا هم‌راستا می‌کند؛ `Auto` دو برابر ارتفاع متن اندازهٔ مبنا است. اندازه‌هایی که با مبنا موازی نیستند دست‌نخورده می‌مانند.

### DIMINSPECT

بدون نام مستعار. `Select dimensions`، `Inspection frame shape [Round/Angular/None/remove] <Round>`، `Enter label`، `Enter inspection rate <100%>`. دور مقدار قابی با یک برچسب قبل از آن و میزان بازرسی بعد از آن می‌کشد. `remove` قاب را برمی‌دارد. متن تلرانس با مقدار می‌ماند.

### DIMOVERRIDE

نام‌های مستعار: `DOV`، `DIMOVER`. `Enter dimension variable name to override or Clear`، `Enter new value for …`، تا Enter تکرار می‌شود، سپس `Select dimensions`. این تنظیمات را فقط روی اندازه‌های انتخاب‌شده تغییر می‌دهد؛ سبک اندازه تغییر نمی‌کند. متغیرهایی را که عدد یا کلید روشن/خاموش هستند می‌پذیرد (`DIMTXT`، `DIMASZ`، `DIMSCALE`، `DIMDEC`، `DIMSE1` …). `Clear` اندازه‌های انتخاب‌شده را به سبکشان برمی‌گرداند. نامی را که چنین متغیری نیست و مقداری را که نمی‌پذیرد رد می‌کند.

### DIMREASSOCIATE

نام‌های مستعار: `DRE`، `DIMREASSOC`. `Select dimensions`، سپس برای هر کدام مبدأهای خط رابطش (`Specify first extension line origin on an object`: به انتها یا وسط یک خط، رأس پلی‌لاین یا مرکز اسنپ می‌شود؛ Enter آن نقطه را آزاد نگه می‌دارد)، یا برای اندازهٔ شعاع، قطر، شعاع شکسته یا طول کمان `Select arc or circle`. سپس اندازه به آن اشیا بسته می‌شود: وقتی جابه‌جا شوند یا اندازه‌شان عوض شود، در همان مرحلهٔ واگرد دنبال می‌کند و دوباره اندازه می‌گیرد. جابه‌جا کردن دستی یک نقطهٔ بسته، یا پاک کردن شیء، این بستگی را پایان می‌دهد. این بستگی در DWG و DXF 2000 به‌عنوان داده‌های خاص CadCraft ذخیره می‌شود؛ برنامه‌های دیگر یک اندازه‌گذاری معمولی می‌بینند.

### DIMDISASSOCIATE

نام‌های مستعار: `DDA`، `DIMDISASSOC`. `Select dimensions`. آن‌ها را از اشیایی که به آن‌ها بسته‌اند آزاد می‌کند؛ چیزی جابه‌جا نمی‌شود.

### CENTERMARK

نام‌های مستعار: `CM`، `DIMCENTER`، `DCE`. `Select circle or arc to add center mark`، تکرار تا Enter. صلیبی در مرکز و چهار خط مرکزی تا کمی فراتر از منحنی می‌کشد (نوع خط CENTER)، به‌صورت خط‌های ساده روی لایهٔ فعلی؛ اندازه‌اش از اندازهٔ پیکان و مقیاس کلی تنظیمات اندازه‌گذاری فعلی گرفته می‌شود و با UCS می‌چرخد. اگر دایره جابه‌جا شود، دنبالش نمی‌کند.

### CENTERLINE

نام‌های مستعار: `CL`. `Select first line`، `Select second line`. خطی در وسط دو خط می‌کشد (در امتداد نیم‌ساز وقتی به هم می‌رسند)، کمی بلندتر از آن‌ها، با نوع خط CENTER. خطی ساده است: دنبال آن دو خط نمی‌رود.

### DIMSCALE، DIMTXT، DIMASZ، DIMDEC، DIMGAP، DIMEXE، DIMEXO

بدون نام مستعار. هر کدام `Enter new value for … <current>` را می‌پرسد و آن اندازه را برای اندازه‌گذاری‌های **جدید** تنظیم می‌کند: مقیاس کلی، ارتفاع متن، اندازهٔ پیکان، تعداد ارقام اعشار (تا 8)، فاصلهٔ دور متن، امتداد فراتر از خط اندازه، فاصله از مبدأ. See [تنظیم اندازهٔ اندازه‌گذاری](topic:dimension-settings).

### DIMLUNIT

تنظیم اندازه‌گذاری: فقط قالب اندازه‌گذاری‌های جدید (1 علمی، 2 اعشاری، 3 مهندسی، 4 معماری، 5 کسری).

### DIMSTYLE و -DIMSTYLE

نام‌های مستعار: `DST`، `DDIM`، `D`. مدیر سبک اندازه‌گذاری: {{ui:Set current}}، {{ui:New…}}، {{ui:Modify…}}، {{ui:Rename…}}، {{ui:Delete}}، {{ui:Compare…}}، {{ui:Apply to selected}}. `-DIMSTYLE` در خط فرمان: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. See [تنظیم اندازهٔ اندازه‌گذاری](topic:dimension-settings#named-dimension-styles).

### DIMEDIT و DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`، سپس اندازه‌ها (یا آن‌هایی که از پیش انتخاب شده‌اند). New متن را می‌پرسد (`<>` = اندازه‌گیری)؛ Rotate یک زاویه می‌پرسد (0 متن را برمی‌گرداند)؛ Oblique زاویهٔ خط‌های رابط نسبت به محور X را می‌پرسد (Enter = هیچ؛ فقط برای اندازه‌های خطی و هم‌تراز). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. See [تنظیم اندازهٔ اندازه‌گذاری](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

نام مستعار: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`، یا وقتی اندازه‌ها انتخاب شده‌اند `Units in the text of the selected dimensions`. طول اندازه‌گیری‌شده را در آن واحد می‌نویسد با واحد بعد از آن (DIMLFAC و پسوند DIMPOST)؛ `D` به واحدهای نقشه برمی‌گردد. See [اندازه‌گذاری بر حسب mm، cm، m یا km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

نام‌های مستعار: `RC`. `Arc length: … Type: …` را چاپ می‌کند، سپس `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular `Specify opposite corner` را می‌پرسد؛ Polygonal `Specify next point (Enter closes the cloud) [Undo]`؛ Freehand تا یک کلیک یا {{key:Enter}} نشانگر را دنبال می‌کند؛ `O` پرسش `Select object` و `Reverse direction? [Yes/No] <N>` را می‌پرسد و شیء را به ابر تبدیل می‌کند. `A` پرسش `Specify the length of each arc` را می‌پرسد. `R`، `P` و `F` نوع ابر بعدی را انتخاب می‌کنند. نتیجه یک پلی‌لاین بستهٔ کمانی است.

### MLEADER

نام‌های مستعار: `MLD`؛ یا {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`، `Specify leader landing location`، سپس متن در کادر در محل (یا، بدون آن، `Enter text (an empty line ends)`). `Block` ابتدا نام بلوک را می‌پرسد و چندخط راهنما به‌جای متن آن بلوک را نشان می‌دهد. خط‌های راهنمای بیشتر: {{cmd:MLEADEREDIT}}. در DWG به‌صورت یک چندخط راهنمای واقعی نگه داشته می‌شود؛ DXF خط‌ها، نوک پیکان و متنی را که رسم کرده نگه می‌دارد.

### MLEADEREDIT

نام‌های مستعار: `MLE`. `Select a multileader`، سپس `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: هر نقطه یک خط راهنما از یک نوک پیکان تازه به همان محل فرود اضافه می‌کند، تا Enter. `Remove leaders` سپس خط راهنمایی را که کلیک می‌کنید برمی‌دارد (یک چندخط راهنما دست‌کم یکی نگه می‌دارد). `Block content` نام بلوک را می‌پرسد و آن بلوک را به‌جای متن نشان می‌دهد (ویژگی‌هایش پرسیده می‌شوند)؛ `Text content` متن را برمی‌گرداند. هر خط راهنما دستگیرهٔ خودش را دارد. یک DWG همهٔ خط‌های راهنما و بلوک را در یک چندخط راهنما نگه می‌دارد.

### MLEADERALIGN

نام‌های مستعار: `MLA`. `Select multileaders`، سپس `Select multileader to align to [Distribute/Spacing/Use current spacing]` و `Specify direction`. محل فرود بقیهٔ چندخط‌های راهنما (و متن یا بلوکشان) را روی خطی که از فرود آنی که انتخاب کرده‌اید در آن جهت می‌گذرد جابه‌جا می‌کند؛ نوک پیکان‌ها همان‌جا که اشاره می‌کنند می‌مانند. `Spacing` فاصلهٔ برابر هم می‌دهد؛ `Distribute` دو نقطه می‌پرسد و آن‌ها را بین آن دو به‌طور یکنواخت پخش می‌کند. دست‌کم دو چندخط راهنما لازم است.

### MLEADERCOLLECT

نام‌های مستعار: `MLC`. `Select multileaders`، سپس `Specify collected multileader location [Vertical/Horizontal]` (Enter جای اولی را نگه می‌دارد). از چند چندخط راهنما یکی می‌سازد: محتوای بلوک به بلوک تازه‌ای می‌رود که همه را کنار هم یا زیر هم نگه می‌دارد؛ محتوای متن یک یادداشت می‌شود با یک خط برای هر کدام. چندخط راهنمای اول خط‌های راهنمایش را نگه می‌دارد؛ بقیه برداشته می‌شوند. ترکیب متن و بلوک را رد می‌کند.

### TABLE

نام‌های مستعار: `TB`؛ یا {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. یک جدول می‌سازد: یک شیء که مانند هر شیء دیگری جابه‌جا، کپی، دوران، مقیاس و پلات می‌شود، با خانه‌هایی که به‌صورت داده نگه داشته می‌شوند.

- `Number of data rows or [Paste/File/Style] <3>`، سپس `Number of columns <3>`، `Text height` و `Top left corner of the table`. جدول یک سطر عنوان (یک خانهٔ ادغام‌شده) و یک سطر سرستون بالای سطرهای داده می‌گیرد.
- `P`: جدول از خانه‌های صفحه‌گسترده روی کلیپ‌بورد (متن با یک تب بین خانه‌ها). فشردن {{key:Ctrl+V}} وقتی چنین خانه‌هایی روی کلیپ‌بورد باشد همین کار را می‌کند، مگر اینکه کپی خود CadCraft جدیدتر باشد (یا CadCraft نتواند تشخیص دهد: آنگاه کپی خودش را می‌چسباند و این را می‌گوید). `F`: جدول از یک فایل `.csv` یا فایل جداشده با تب. سطر اول سرستون می‌شود؛ عرض ستون‌ها با متن جور می‌شود.
- `S`: انتخاب سبک جدول برای این جدول (See {{cmd:TABLESTYLE}}).
- تعداد سطر یا ستونی که عدد صحیح نیست، و خانه‌هایی بیش از آنچه یک جدول جا دارد (2,000 سطر، 200 ستون، 40,000 خانه) را رد می‌کند.
- {{cmd:EXPLODE}} جدول را به خط و متن تبدیل می‌کند. در DWG جدول یک شیء جدول واقعی است که برنامه‌های دیگر می‌توانند ویرایشش کنند؛ در DXF یک بلوک است که آن را می‌کشد، و CadCraft آن را دوباره به‌صورت جدول باز می‌کند.

### TABLEDIT

نام‌های مستعار: `TABLEEDIT`، `TABEDIT`؛ یا دوبار کلیک روی یک خانه. یک جدول را ویرایش می‌کند.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. یک خانه را کلیک کنید، یا وقتی جدولی انتخاب شده نامش را تایپ کنید (`B3`: ستون B، سطر 3؛ سطر عنوان سطر 1 است). در مرورگر یک کادر روی خانه باز می‌شود: {{key:Enter}} متن را نگه می‌دارد، {{key:Tab}} به خانهٔ بعدی می‌رود، {{key:Alt+Enter}} یک خط تازه شروع می‌کند، {{key:Esc}} خانه را همان‌طور که بود رها می‌کند.
- متنی که با `=` شروع شود یک فرمول است: `=A3+B3`، `=B3*C3`، `=Sum(B3:B9)`، `=Average(B3:B9)`، `=Count(B3:B9)`، `=Min(…)`، `=Max(…)`، با `+ - * / ^`، پرانتز و توابعی مانند `sqrt` و `round`. خانه مقدار را نشان می‌دهد؛ فرمولی که به خانهٔ خودش ارجاع دهد، به خانه‌ای بیرون جدول یا به خانه‌ای بدون عدد اشاره کند، `####` نشان می‌دهد و خط فرمان دلیلش را می‌گوید.
- `R` / `C`: `Insert` یا `Delete` سطرها یا ستون‌ها در یک خانهٔ انتخاب‌شده (چندتا، و بالا یا پایین، چپ یا راست). فرمول‌ها خانه‌هایی را که نام می‌برند دنبال می‌کنند.
- `S`: عرض ستون و ارتفاع سطر. سطر هرگز کمتر از آنچه متنش نیاز دارد نیست. یک جدول انتخاب‌شده روی لبهٔ هر ستون و هر سطر یک دستگیره هم دارد.
- `M`: ادغام از یک خانهٔ انتخاب‌شده تا خانهٔ دیگر؛ `U`: جدا کردن ادغام. `A`: تراز (`TL` بالا‌چپ … `MC` وسط‌مرکز … `BR` پایین‌راست). `H`: ارتفاع متن همین خانه (0 = ارتفاع سبک). `K`: سطر را عنوان، سرستون یا سطر داده کنید. `CL`: خانه را خالی می‌کند.
- جدولی را که روی لایهٔ قفل‌شده است، پاک کردن همهٔ سطرها یا ستون‌ها، و ادغامی که یک خانهٔ ادغام‌شدهٔ دیگر را نصف کند، رد می‌کند.

### TABLESTYLE

نام‌های مستعار: `TS`. سبک‌های جدول را همراه با تعداد جدول‌هایی که از هر کدام استفاده می‌کنند فهرست می‌کند، سپس `Table style: [New/Set/Edit/Delete/Apply]`.

- یک سبک ارتفاع متن و تراز، حاشیه و کادر سطرهای عنوان، سرستون و داده را نگه می‌دارد، و اینکه کدام کادرها کشیده شوند (بیرونی، بین سطرها، بین ستون‌ها).
- `N` سبکی از سبک فعلی می‌سازد و آن را فعلی می‌کند؛ `S` سبک فعلی را تنظیم می‌کند (جدول‌های تازه آن را می‌گیرند)؛ `E` یکی را ویرایش می‌کند: جدول‌هایی که از آن استفاده می‌کنند دوباره کشیده می‌شوند؛ `A` سبک فعلی را به جدول‌های انتخاب‌شده می‌دهد؛ `D` یکی را حذف می‌کند (نه Standard، نه سبک فعلی؛ جدول‌هایی که از آن استفاده می‌کردند ظاهرشان را نگه می‌دارند).
- سبک‌ها با نقشه ذخیره می‌شوند (DWG و DXF).

### TABLEEXPORT

آنچه جدول نشان می‌دهد را به‌صورت فایل CSV ذخیره می‌کند (یک فرمول به‌صورت مقدارش). `Select a table`، یا اول یکی را انتخاب کنید. خانه‌های متنی که با `=`، `+`، `-` یا `@` شروع می‌شوند یک `'` اول می‌گیرند تا صفحه‌گسترده آن‌ها را اجرا نکند.

### TABLEPASTE

نام‌های مستعار: `PASTETABLE`. از خانه‌های صفحه‌گسترده روی کلیپ‌بورد یک جدول می‌سازد، سپس گوشهٔ بالا‌چپش را می‌پرسد. مانند {{cmd:TABLE}} › `Paste` است.

### DATALINK

نام‌های مستعار: `DL`. `Data link: [New/List/Remove] <New>`. `N` یک فایل CSV می‌خواهد، جدولی از آن می‌گذارد و نام فایل را به‌یاد می‌سپارد؛ `L` پیوندها را با فایل، اندازه، زمان آخرین خواندن و تعداد جدول‌هایی که از آن استفاده می‌کنند فهرست می‌کند؛ `R` یک پیوند را برمی‌دارد (جدول‌هایش به جدول ساده تبدیل می‌شوند).

### DATALINKUPDATE

نام‌های مستعار: `DLU`. فایل یک پیوند داده را دوباره می‌خواند و جدول‌های متصل به آن را دوباره پر می‌کند (سطرها و ستون‌ها اضافه یا حذف می‌شوند تا جور شوند). مرورگر نمی‌تواند خودش فایلی را باز کند، پس دوباره فایل را انتخاب کنید می‌خواهد. وقتی چند پیوند هست، می‌پرسد کدام.

### FIELD

یک فیلد در نقشه می‌گذارد: متنی که خودش را محاسبه می‌کند. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: اکنون، یا تاریخ ذخیره، ساخت یا پلات، و یک قالب (`yyyy-MM-dd`، `d MMMM yyyy`، `HH:mm`). `F`: نام فایل، با یا بدون پسوند. `S`: شمارهٔ برگه، عنوانش، یا تعداد برگه‌ها. `P`: یک خاصیت نقشه با نام (See {{cmd:DWGPROPS}}). `O`: یک شیء را انتخاب کنید، سپس آنچه باید خوانده شود (مساحت، طول، محیط، شعاع، قطر، لایه، نام، x، y، متن، دوران، رنگ) و تعداد اعشار. `E`: یک فرمول. `C`: متنی با کدهایی که همان‌طور که هستند تایپ شده‌اند، مانند `Sheet %<sheetnumber>% of %<sheetcount>%`.
- سپس `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: متنی که انتخاب می‌کنید فیلد را بعد از محتوایش می‌گیرد؛ خانهٔ جدول همین‌طور؛ ارجاع بلوک نمی‌پرسد کدام ویژگی؛ {{key:Enter}} یک ارتفاع و نقطه برای متن تازه می‌پرسد.
- روی صفحه، فیلد پس‌زمینهٔ خاکستری روشن دارد؛ پلات و PDF هرگز آن را ندارند. تایپ روی متن فیلد با دست، فیلد را پایان می‌دهد. فیلدی که نتوان آن را محاسبه کرد `####` نشان می‌دهد.
- فیلد یک شیء، شیء خود را با کلیدی پیدا می‌کند که CadCraft روی اشیا نگه می‌دارد (تنظیمات › CadCraft › Merge-friendly files)؛ وقتی کلیدها خاموش باشند، رد می‌کند.

### UPDATEFIELD

نام‌های مستعار: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` تعیین می‌کند فیلدها کی خودشان به‌روز شوند: حروف `O` باز کردن، `S` ذخیره، `P` پلات، `R` بازسازی (هر چهار تا برای شروع)، یا `NONE` را تایپ کنید.

### DWGPROPS

نام‌های مستعار: `DRAWINGPROPS`. خواص نقشه را فهرست می‌کند، سپس `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. شش مورد اول همان‌هایی هستند که پنل {{ui:Drawing details}} نشان می‌دهد؛ `U` نام و مقدار خودتان را اضافه می‌کند، `R` یکی را برمی‌دارد. فیلدها آن‌ها را می‌خوانند (`%<prop:title>%`، `%<prop:Client>%`) و فوراً دنبال می‌کنند. نامی را که یکی از نام‌های آماده است یا `%`، `<`، `>`، گیومه یا بک‌اسلش دارد رد می‌کند.

## پارامتری

See [قیددار کردن نقشه](topic:constraints) و [استفاده از پارامترها و معادلات](topic:parameters). قیدها روی زبانهٔ {{ui:Model}} کار می‌کنند.

### GEOMCONSTRAINT و فرمان‌های GC

نام مستعار `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`، سپس پرسش‌های همان فرمان.

- {{cmd:GCHORIZONTAL}}، {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}، {{cmd:GCPERPENDICULAR}}، {{cmd:GCCOLLINEAR}}، {{cmd:GCCONCENTRIC}}، {{cmd:GCEQUAL}}، {{cmd:GCTANGENT}}: `Select first object`، `Select second object` (دومی جابه‌جا می‌شود).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`، `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`، `Select second object`، `Select symmetry line`.

### DIMCONSTRAINT و فرمان‌های DC

نام مستعار `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}، {{cmd:DCHORIZONTAL}}، {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`، `Specify second constraint point`، `Specify dimension line location`، `Dimension text <d1=40>` (یک عدد، یک عبارت، یا `name=expression`).
- {{cmd:DCALIGNED}}: مانند بالا، با `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}، {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`، `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN، DELCONSTRAINT، CONSTRAINTBAR، DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` تلرانس فاصله و زاویه را می‌پرسد.
- {{cmd:DELCONSTRAINT}} (نام مستعار `DELCON`): `Select objects`؛ قیدهایشان حذف می‌شود.
- {{cmd:CONSTRAINTBAR}} (نام مستعار `CBAR`): `Select objects [Showall/Hideall]`، سپس `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS و -PARAMETERS

{{cmd:PARAMETERS}} (نام‌های مستعار `PAR`، `PARAM`) پنل {{ui:Parameters}} را باز می‌کند. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

نام مستعار `SWMACRO`. یک ماکرو (‎.swb) بارگیری می‌کند که مدل را در SolidWorks به‌صورت یک اسکچ قیددار بازسازی می‌کند. See [انتقال اسکچ‌ها به و از دیگر مدل‌سازهای قطعه](topic:solidworks-sketches).

## بلوک‌ها

### ANNOSCALE

نام‌های مستعار: `CANNOSCALE`. مقیاس حاشیه‌نویسی نقشه و تعداد اشیای حاشیه‌نویسی‌پذیرش را می‌گوید، سپس `New annotation scale` را می‌پرسد: `1:50`، `1:100`، `2:1`، یک عدد تنها (`50` یعنی 1:50) یا نام یکی از مقیاس‌های خود نقشه را تایپ کنید. هر متن و اندازه‌گذاری حاشیه‌نویسی‌پذیر طوری تغییر اندازه می‌دهد که در مقیاس جدید در همان اندازهٔ چاپی باشد، در یک مرحلهٔ واگرد؛ اشیایی که حاشیه‌نویسی‌پذیر نیستند دست‌نخورده می‌مانند، و همچنین شیئی که فهرست مقیاس‌هایی دارد که مقیاس جدید در آن نیست ({{cmd:OBJECTSCALE}}). See [واحدها، کاغذها و مقیاس‌ها](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

نام‌های مستعار: `OBJSCALE`. `Select annotative objects`، سپس `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. یک متن یا اندازه‌گذاری حاشیه‌نویسی‌پذیر فهرستی از مقیاس‌های حاشیه‌نویسی نگه می‌دارد. `Add` و `Delete` یک مقیاس می‌پرسند (`1:50`، `2:1`، یک عدد تنها، یا نام یکی از مقیاس‌های خود نقشه)؛ `Current scale` مقیاس حاشیه‌نویسی نقشه را اضافه می‌کند؛ `List` مقیاس‌های هر شیء را چاپ می‌کند. نمای‌پورتی که مقیاسش در فهرست یک شیء است، آن را در اندازه‌ای نشان می‌دهد که ارتفاع چاپی‌اش را در آن مقیاس چاپ می‌کند، روی صفحه و در پلات‌ها. آخرین مقیاس قابل حذف نیست. اشیایی که حاشیه‌نویسی‌پذیر نیستند کنار گذاشته می‌شوند: اول Annotative را در Properties روشن کنید. فهرست‌ها در DWG و DXF به‌عنوان داده‌های خاص CadCraft ذخیره می‌شوند. See [واحدها، کاغذها و مقیاس‌ها](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

نام‌های مستعار: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. روشن (وقتی نقشه شروع می‌شود): یک شیء حاشیه‌نویسی‌پذیر در هر نمای‌پورت یا مدلی که مقیاسش در فهرست آن نیست نیز، با اندازهٔ خودش نشان داده می‌شود. خاموش: آنجا نشان داده نمی‌شود و در مدل نمی‌توان انتخابش کرد. کلید یک مرحلهٔ واگرد است؛ در فایل نگه داشته نمی‌شود.

### SCALELISTEDIT

نام‌های مستعار: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` تا {{key:Enter}}. Add: `Scale name`، `Paper units`، `Drawing units`. Edit و Delete نام مقیاس را می‌پرسند. مقیاس‌های خود نقشه به فهرست‌های مقیاس نمای‌پورت و پلات اضافه می‌شوند و با نقشه ذخیره می‌شوند. See [واحدها، کاغذها و مقیاس‌ها](topic:units-papers-scales#scales).

### SPLINE، SPLINEDIT و PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: نقاطی که منحنی از آن‌ها می‌گذرد؛ `Close`، `Undo`، سپس `Start tangent` و `End tangent` (یک نقطه، یا {{key:Enter}}). Method › Control vertices درجه (1 تا 5) می‌پرسد و از یک چندضلعی کنترل می‌کشد. Object پلی‌لاین‌ها را از میان رأس‌هایشان به اسپلاین تبدیل می‌کند. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`؛ Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`؛ Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`، `M` برای چند شیء؛ خط‌ها، کمان‌ها و اسپلاین‌ها ابتدا به‌عنوان پلی‌لاین پیشنهاد می‌شوند. See [اسپلاین‌ها و پلی‌لاین‌ها](topic:splines).

### BLOCK

نام‌های مستعار: `B`، `BMAKE`.

- `Enter block name`. اگر وجود داشته باشد: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. جایشان با یک ارجاع به بلوک تازه می‌آید.

### WBLOCK

نام‌های مستعار: `W`، `-WBLOCK`. یک بلوک، چند شیء یا کل نقشه را در یک فایل تازهٔ DWG یا DXF می‌نویسد. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (مبدأ نقشهٔ تازه می‌شود)، `Select objects`، سپس `File format [DWG/DXF/R12 DXF]` و `File name for the new drawing`، سپس `What to do with the objects [Retain/Convert to block/Delete]`. Convert آن‌ها را با یک ارجاع به بلوکی به نام فایل جایگزین می‌کند؛ Delete آن‌ها را برمی‌دارد.
- **Block**: `Block to write out`. اشیای خود بلوک، با نقطهٔ مبنایش به‌عنوان مبدأ، شامل بلوک‌های تودرتو.
- **Entire drawing**: هر شیئی در فضای مدل. برگه‌ها نوشته نمی‌شوند؛ برای نسخه‌ای که آن‌ها را نگه می‌دارد از {{cmd:SAVEAS}} استفاده کنید.

فایل تازه فقط لایه‌ها، نوع خط‌ها، سبک‌های متن و اندازه‌گذاری و بلوک‌هایی را دارد که اشیایش استفاده می‌کنند، و واحدهای نقشه را. نسخهٔ یک DWG همان نسخه‌ای است که {{cmd:SAVEAS}} آخر بار استفاده کرده است. در مرورگر فایل بارگیری می‌شود؛ در Studio پنجرهٔ ذخیره باز می‌شود.

### ATTDEF

نام‌های مستعار: `ATT`، `DDATTDEF`، `-ATTDEF`؛ یا {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. حالت‌ها را چاپ می‌کند، سپس `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`، `Enter attribute tag name`، `Enter attribute prompt`، `Enter default attribute value` (`Enter attribute value` وقتی ثابت باشد)، `Specify start point of text`، `Specify text height`، `Specify rotation angle of text` را می‌پرسد. {{cmd:BLOCK}} تعریف‌های ویژگی را به داخل بلوک می‌برد.

### EATTEDIT و ATTEDIT

`EATTEDIT` (`DDATTE`، یا دوبار کلیک روی یک ارجاع با ویژگی؛ {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`، سپس کادر گفتگوی {{ui:Edit attributes}}. `ATTEDIT` (`ATE`، `-ATTEDIT`): همان ارجاع، سپس `<prompt> (<TAG>) <value>` برای هر ویژگی؛ {{key:Enter}} مقدار را نگه می‌دارد. See [ویژگی‌ها](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. مقادیر نگه داشته می‌شوند؛ ویژگی‌های تازه مقدار پیش‌فرضشان را می‌گیرند، ویژگی‌های حذف‌شده می‌روند، جای‌گذاری‌ها بازنشانی می‌شوند.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. کادر گفتگو: بلوک، ویژگی‌ها (برچسب، پرسش، پیش‌فرض، حالت‌ها، ترتیب)، {{ui:Update the references (values kept)}}، {{ui:Apply}}.

### REFEDIT و REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (یا انتخاب فعلی). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`؛ دکمه‌های {{ui:Save the block}} و {{ui:Discard}} روی نوار همین کار را می‌کنند. کل ویرایش یک مرحلهٔ واگرد است. See [ویژگی‌ها](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT و BCLOSE

`BE`؛ یا {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` ویرایشگر بلوک را باز می‌کند. `BCLOSE` می‌پرسد `Close the block editor on "…" [Save/Discard] <Save>`؛ دکمه‌های {{ui:Save block}} و {{ui:Discard changes}} روی نوار همین کار را می‌کنند. هر کاری که در ویرایشگر انجام شود یک مرحلهٔ واگرد است.

### VIEWBASE

نام مستعار: `FLATSHOT`. یک نمای دوبعدی تخت از جسم‌های زبانهٔ 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`، `Hidden lines [Show/Hide]`، یک مقیاس (`1:20`، `2:1`؛ {{key:Enter}} آن را می‌گیرد که در برگه جا شود)، سپس مرکز نما. یک ارجاع بلوک؛ لبه‌های دیده‌شده روی VIEW-VISIBLE، و لبه‌های پنهان خط‌چین روی VIEW-HIDDEN. See [نماهای تخت روی برگه](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

نام‌های مستعار: `-PUBLISH`؛ یا {{ui:All sheets in one PDF}} در کادر گفتگوی {{ui:Plot to PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} همهٔ برگه‌ها را پلات می‌کند، `S` نام‌هایی را که با کاما جدا شده‌اند می‌خواهد. یک PDF، با یک صفحه و یک نشانک برای هر برگه. See [همهٔ برگه‌ها در یک PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

نام‌های مستعار: `SSM`، `SHEETSETMANAGER`. شما را به بخش {{ui:Sheet set}} در پنل چپ می‌برد: برگه‌هایی از نقشه‌های متعدد، شماره‌گذاری‌شده و عنوان‌گذاری‌شده، با جدول‌های مشخصات نقشه‌شان که از مجموعه پر شده، و منتشرشده در یک PDF. See [مجموعه‌های برگه](topic:sheet-sets).

### XATTACH، XREF

{{cmd:XATTACH}} (`XA`): یک DWG یا DXF را انتخاب کنید، سپس نقطهٔ درجش. {{cmd:XREF}} (`XR`، `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`؛ با بیش از یک پیوند، یکی از ارجاعاتش را انتخاب کنید یا `N` و نامش را تایپ کنید. See [نقشه‌های پیوندی](topic:files#linked-drawings-external-references).

### COUNT

نام‌های مستعار: `BCOUNT`؛ یا {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: با یک کلیک، همهٔ ارجاع‌های آن بلوک در این فضا انتخاب و شمرده می‌شوند؛ {{key:Enter}} یا `A` همه را فهرست می‌کند؛ `E` سپس `C` (شمارش‌ها) یا `A` (ویژگی‌ها) یک CSV بارگیری می‌کند. See [شمارش بلوک‌ها و خروجی یک جدول زمانی](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

نام‌های مستعار: `I`، `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (حروف بزرگ و کوچک فرقی ندارد). `F` یک DWG یا DXF می‌خواهد، سپس کل نقشه یا یکی از بلوک‌هایش؛ نامی که از پیش استفاده شده {{ui:Keep existing}} یا {{ui:Rename}} می‌پرسد. `L` پنل کتابخانه را باز می‌کند.
- `Specify insertion point [Scale/Rotate]`. `S` پرسش `Specify scale factor` را، `R` پرسش `Specify rotation angle` را می‌پرسد؛ هر دو به‌یاد سپرده می‌شوند.
- وقتی بلوک از پیش کنار اشیایی باشد که بدون آن جاهای دیگری تکرار می‌شوند، یک خط تعداد جاهای پیشنهادی را می‌گوید و پرسش `suGgested` را اضافه می‌کند: `G` آن‌ها را نشان می‌دهد؛ نزدیک یکی کلیک کنید تا بلوک آنجا قرار گیرد، `A` برای همهٔ آن‌ها، {{key:Enter}} برای بازگشت. آن‌ها دوران همسایه‌ها و مقادیر پیش‌فرض ویژگی را می‌گیرند. نقشه‌هایی با بیش از 20,000 شیء در فضای باز جستجو نمی‌شوند.
- سپس برای هر ویژگی که بلوک می‌خواهد `Enter <prompt> (<TAG>) <default>`. See [ویژگی‌های بلوک](topic:attributes).

### LIBRARY

نام‌های مستعار: `LIB`. پنل کتابخانه را باز می‌کند: قراردادن موارد، بررسی به‌روزرسانی‌ها، اعتبارات کتابخانه. پرسشی ندارد. See [درج از فایل یا کتابخانه](topic:insert-from-file-and-library).

### STEELMEMBER

نام‌های مستعار: `SMEMBER`؛ یا {{ui:3D member}} روی زبانهٔ {{ui:Standard}} کتابخانه. `Section size <W12x26>` (همان‌طور که زبانه فهرست می‌کند)، سپس `Start point [Column]` و `End point`: یک عضو جامد روی زبانهٔ 3D بین دو نقطه، روی زمین. `C` نقطهٔ مبنای ستون و ارتفاعش را می‌پرسد. یک مرحلهٔ واگرد. See [قراردادن مقاطع فولادی و قطعات استاندارد](topic:steel-and-standard-parts).

### PARTSLIST

نام‌های مستعار: `PLIST`. `Top left corner of the parts list`، سپس `Text height <2.5>`: جدولی از هر قطعهٔ استاندارد و مقطع فولادی که از کتابخانه قرار داده شده می‌کشد (شماره‌های قطعه، تعداد، قطعه، استاندارد، اندازه، طول، مصالح، جرم). یک مرحلهٔ واگرد. See [قراردادن مقاطع فولادی و قطعات استاندارد](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

نام‌های مستعار: `PU`. تعریف بلوک‌هایی را که هیچ چیز از آن‌ها استفاده نمی‌کند حذف می‌کند. پرسشی ندارد.

### DELBLOCKS

یا {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: یک ارجاع بلوک را انتخاب کنید، یا `N` برای فهرست بلوک‌ها با یک فیلتر (چند تا را می‌توان انتخاب کرد)، یا `X` / {{key:Enter}} برای پایان. همهٔ ارجاع‌ها می‌روند — در مدل، روی هر برگه و داخل بلوک‌های دیگر — و سپس تعریف؛ خط فرمان می‌گوید چه چیزی حذف شد و چه چیزی نشد. بلوک‌های بی‌نام و نقشه‌های پیوندی پیشنهاد نمی‌شوند. پرسش برای بلوک بعدی برمی‌گردد؛ کل فرمان یک مرحلهٔ واگرد است.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} آنچه را کپی کرده‌اید ({{cmd:COPYCLIP}}، {{cmd:COPYBASE}}) به‌عنوان یک بلوک می‌چسباند: نقطهٔ درج را انتخاب کنید، و یک ارجاع به بلوک تازه آنجا می‌آید، انتخاب‌شده. بلوک نام خودش را می‌گیرد (`A$C` و یک عدد)؛ {{cmd:RENAME}} نام شما را به آن می‌دهد. یک مرحلهٔ واگرد هم ارجاع و هم بلوک را برمی‌دارد.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} بلوکی را که باید عوض شود و بلوکی را که به جایش می‌آید می‌پرسد (`?` بلوک‌ها را فهرست می‌کند)، سپس هر ارجاع را در مدل، روی هر برگه و داخل بلوک‌های دیگر تغییر می‌دهد. هر ارجاع جای خود، مقیاس، دوران، لایه و مقادیر ویژگی‌هایی را که هر دو بلوک دارند نگه می‌دارد؛ ویژگی‌هایی که فقط بلوک جدید دارد، از پیش‌فرض خود شروع می‌کنند، و به شما می‌گوید کدام مقادیر حذف شدند. وقتی دیگر چیزی از بلوک قدیمی استفاده نکند، پیشنهاد حذفش را می‌دهد. نقشه‌های پیوندی و جایگزینی را که بلوکی را داخل خودش می‌گذارد رد می‌کند. یک مرحلهٔ واگرد.

### MINSERT

{{cmd:MINSERT}} یک بلوک را در سطرها و ستون‌ها می‌گذارد: نام بلوک، نقطهٔ درج، مقیاس، دوران، تعداد سطرها و ستون‌ها، و فاصله‌هایشان. کل مجموعه با دوران می‌چرخد. هر کدام ارجاع جداگانه‌ای است (حداکثر 10,000)، پس بعداً می‌توان هر کدام را جابه‌جا یا پاک کرد.

### BLOCKSPALETTE

نام‌های مستعار: `BLOCKSPAL`؛ یا {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. پنل {{ui:Blocks}} را با نشانگر در فیلترش نشان می‌دهد. هر بلوک یک تصویر کوچک دارد؛ آن‌هایی که اخیراً قرار داده شده‌اند اول می‌آیند. دو دکمهٔ کنار فیلتر بین فهرست و شبکهٔ تصاویر جابه‌جا می‌شوند. روی یک تصویر کلیک کنید (یا {{ui:Insert}}) تا بلوک با {{cmd:INSERT}} قرار گیرد، یا آن را روی نقشه بکشید تا همان‌جا که رها می‌کنید قرار گیرد.

{{ui:Libraries}}، زیر فهرست: {{ui:Add a drawing}} یک فایل DWG یا DXF از خودتان می‌گیرد و بلوک‌هایش را با تصویر فهرست می‌کند، و کل نقشه را به‌عنوان یک بلوک. قراردادن یکی، تعریف آن (و بلوک‌هایی که در خود دارد و لایه‌هایشان) را مانند گزینهٔ `File` در {{cmd:INSERT}} به این نقشه کپی می‌کند؛ بلوکی که از پیش همین‌جا با همان تعریف است بی‌پرسش به کار می‌رود، و بلوکی هم‌نام اما متفاوت {{ui:Keep existing}} یا {{ui:Rename}} می‌پرسد. در مرورگر فایل تا بسته شدن صفحه می‌ماند. در CadCraft Studio {{ui:Add a folder}} فایل‌های یک پوشه را فهرست می‌کند، که هر کدام با کلیک باز می‌شود؛ فایل‌ها و پوشه‌ها به‌یاد سپرده می‌شوند. علامت کوچک x کتابخانه را از فهرست برمی‌دارد؛ فایل دست‌نخورده می‌ماند. {{ui:Library}} مشترک چیز دیگری است: See [درج از فایل یا کتابخانه](topic:insert-from-file-and-library).

### BCONVERT

یا {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. هندسه‌ای را که تکرار می‌شود پیدا می‌کند و هر کپی را به ارجاعی به یک بلوک تبدیل می‌کند.

- `Select the objects that repeat, or [Block]`: اشیای یک کپی. `B` به‌جایش یک بلوک موجود را نام می‌برد، برای پیدا کردن کپی‌های پراکندهٔ اشیای آن.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`، `S` و `P` تعیین می‌کنند چه چیزی کپی حساب شود؛ {{key:Enter}} جستجو می‌کند. تنظیمات به‌یاد سپرده می‌شوند.
- `Name for the new block <Block1>`، سپس `Specify the block's base point` ({{key:Enter}} گوشهٔ پایین‌چپ انتخاب را می‌گیرد).
- می‌گوید چند مجموعهٔ دیگر از اشیا همان هندسه‌اند، هر چیزی را که جایگزین می‌کند هایلایت می‌کند، و `Yes/No` می‌پرسد.

یک کپی همان اشیایی است که جابه‌جا و با هر زاویه چرخانده شده‌اند (و اگر قرینه یا مقیاس روشن باشند، با یک ضریب قرینه یا مقیاس شده‌اند): هر شیء باید همتایش را داشته باشد، با دقت یک‌میلیونیِ اندازهٔ انتخاب. هر ارجاع دوران و مقیاس خودش را می‌گیرد (ارجاع قرینه‌شده مقیاس Y منفی)، و لایه‌ای را که اشیایش مشترک داشتند. اشیای روی لایه‌های قفل‌شده دست‌نخورده می‌مانند و شمرده می‌شوند. فضای باز را جستجو می‌کند (مدل یا برگهٔ باز). جستجوی بسیار بزرگ در یک حد کاری متوقف می‌شود و این را می‌گوید. یک مرحلهٔ واگرد.

### BSEARCH

یا {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: بخشی از نام بلوک، یا یک الگو با `*` و `?`. هر بلوک را با ارجاعاتش در اینجا و در کل نقشه فهرست می‌کند.
- `A`: مقداری از یک ویژگی، یا `TAG=value`. بلوک‌هایی را فهرست می‌کند که ارجاعاتشان آن را دارند، با مقادیر پیداشده. ویژگی‌های ثابت هم حساب می‌شوند.
- `G`: اشیا یا یک ارجاع بلوک را انتخاب کنید، و بلوک‌هایی که شکلشان دست‌کم 85٪ شبیه است به ترتیب بهترین فهرست می‌شوند. اندازه، دوران و قرینه‌سازی حساب نمی‌شوند. این سنجش فاصله‌های بین نقاطی را که روی خطوط پراکنده‌اند مقایسه می‌کند، پس شبیه‌ها را پیدا می‌کند؛ برای کپی‌های دقیق از {{cmd:BCONVERT}} استفاده کنید.

ارجاع‌های پیداشده در فضای باز انتخاب می‌شوند، آماده برای فرمان بعدی.

### BREPLACE

یا {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` ارجاع‌های بلوک انتخاب‌شده را با بلوکی که نام می‌برید عوض می‌کند؛ `A` یک بلوک و جایگزینش را می‌پرسد و هر ارجاع را تغییر می‌دهد، همان‌طور که {{cmd:BLOCKREPLACE}} می‌کند (همان کد). یک ارجاع جای خود، مقیاس، دوران، لایه و مقادیر ویژگی‌هایی را که هر دو بلوک دارند نگه می‌دارد؛ مقادیری که بلوک جدید جایی برایشان ندارد حذف و نام‌گذاری می‌شوند. `?` بلوک‌ها را فهرست می‌کند. یک مرحلهٔ واگرد.

### DATAEXTRACTION

نام‌های مستعار: `EATTEXT`، `DX`؛ یا {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. بلوک‌ها، ویژگی‌ها و خواص اشیایشان را به‌صورت جدول یا فایل CSV فهرست می‌کند.

- روی انتخاب کار می‌کند، یا `Select objects (Enter: everything in this space)` می‌پرسد.
- وقتی انتخاب هر دو را داشته باشد، `List: [Blocks/Objects/All]`. بلوک‌های بی‌نام، جدول‌ها و فهرست‌های مصالح هرگز فهرست نمی‌شوند.
- ستون‌هایی را که می‌توان انتخاب کرد چاپ می‌کند (نام، نوع، لایه، X، Y، دوران، مقیاس، طول، مساحت، رنگ، نوع خط، فضا، و یکی برای هر برچسب ویژگی)، سپس `Columns, by name or number with commas between`. {{key:Enter}} ستاره‌دارها را می‌گیرد: برای بلوک‌ها نام و همهٔ ویژگی‌ها؛ برای اشیا نوع، لایه و طول.
- `Put identical rows together with a count? [Yes/No] <Yes>`، سپس `Put the list in a: [Table/Csv] <Table>`. جدول یک جدول معمولی است ({{cmd:TABLEDIT}} آن را ویرایش می‌کند) و زنده نیست: وقتی نقشه تغییر کند فرمان را دوباره اجرا کنید.
- ستونی را که در فهرست نیست رد می‌کند. یک جدول 1,999 سطر داده دارد؛ یک فایل CSV همهٔ آن‌ها را می‌گیرد.

### COUNTTABLE

ارجاع‌های بلوک انتخاب (یا فضای باز) را می‌شمارد و شمارش‌ها را در یک جدول (`Block`، `Count`) یا فایل CSV می‌گذارد. برای شماری که خودش با نقشه دنبال کند، {{cmd:BOMTABLE}} را ببینید.

## برگه‌ها و پلات

### LAYOUT

نام‌های مستعار: `LO`، `NEWLAYOUT`؛ یا دکمهٔ {{ui:+}} زیر نقشه. یک برگهٔ تازه با حاشیه، جدول مشخصات نقشه و یک نمای‌پورت، روی ISO A3 (یا Tabloid برای نقشه‌هایی با اینچ یا فوت). پرسشی ندارد.

### MVIEW

نام‌های مستعار: `MV`. فقط روی برگه ({{cmd:VPORTS}} روی برگه همین کار را می‌کند).

- `Specify corner of viewport [Polygonal/Object]`، `Specify opposite corner`. نمای‌پورت کل مدل را در یک مقیاس استاندارد نشان می‌دهد.
- `P` (Polygonal): گوشه‌های طرح را کلیک کنید (`Undo`، `Close`)، {{key:Enter}} وقتی تمام شد. کمتر از سه گوشه را رد می‌کند.
- `O` (Object): `Select a closed object for the viewport's outline`: یک پلی‌لاین بسته، دایره یا بیضی روی برگه. نمای‌پورت شکل آن را می‌گیرد (منحنی‌ها به قطعه‌های مستقیم کوتاه)؛ شیء همان‌طور که بود می‌ماند. شیء بسته‌ای نیست را رد می‌کند.

### VPCLIP

یک نمای‌پورت که از پیش روی برگه است را برش می‌دهد. `Select viewport to clip` (یا اول آن را انتخاب کنید)، سپس `Select the object to clip to [Polygonal/Delete]`:

- یک پلی‌لاین بسته، دایره یا بیضی کلیک کنید، یا {{key:Enter}} (یا `P`) برای کلیک گوشه‌های یک چندضلعی.
- `D` (Delete، وقتی نمای‌پورت برش خورده پیشنهاد می‌شود) آن را دوباره مستطیل می‌کند: جعبهٔ دور طرحی که داشت.
- آنچه نمای‌پورت نشان می‌دهد روی کاغذ جابه‌جا نمی‌شود، و مقیاسش می‌ماند. مدل فقط داخل طرح کشیده و چاپ می‌شود، و مرز آن را دنبال می‌کند. یک مرحلهٔ واگرد.
- نمای‌پورت برش‌خورده در هر گوشهٔ طرحش یک دستگیره دارد، علاوه بر مرکز و چهار گوشهٔ جعبه‌اش (کشیدن گوشهٔ جعبه طرح را با خود می‌کشد). Properties یا Outline: Rectangle، یا Clipped را با تعداد گوشه‌ها نشان می‌دهد.
- فایل‌های DWG و DXF 2000 طرح را برای CadCraft نگه می‌دارند. برنامه‌های دیگر نمای‌پورت را به‌صورت مستطیل دورش باز می‌کنند؛ DXF R12 فقط مستطیل را نگه می‌دارد.
- روی زبانهٔ مدل این را می‌گوید که نمای‌پورت‌ها روی برگه‌اند.

### VPORTS

نام‌های مستعار: `VIEWPORTS`. {{cmd:SPLIT}} همین کار را از روی برگه هم می‌کند، و {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}، {{ui:Split stacked}}، {{ui:Four panes}}، {{ui:One pane}} آن را اجرا می‌کنند. روی مدل: `Enter number of panes [SIngle/2/3/4] <3>`؛ `2` می‌پرسد `[Horizontal/Vertical] <Vertical>` (Vertical = کنار هم)، `3` می‌پرسد `[Left/Right] <Right>` (پنجرهٔ بزرگ کجا باشد). هر پنجره نمای و فضای خودش را نگه می‌دارد؛ یک کلیک پنجره را فعال می‌کند. روی برگه همان {{cmd:MVIEW}} است. See [تقسیم صفحه](topic:split-screen).

### VPVIEW

بدون نام مستعار. فقط روی برگه.

- `Select viewport` (اگر یکی انتخاب شده باشد رد می‌شود)، سپس روی مدل: `Specify first corner of the window to show`، `Specify opposite corner`.

### UCS

بدون نام مستعار. یک دستگاه مختصات از خودتان؛ ویرایش نیست. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: یک نقطه مبدأ تازه است، سپس `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: مبدأ، یک نقطه روی محور X مثبت، یک نقطه در سمت Y مثبت. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` و یک نام. نما می‌چرخد تا محور X تازه افقی شود. See [چرخاندن نما و استفاده از مختصات خودتان](topic:ucs-and-turned-view).

### PLAN

بدون نام مستعار. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: نمای پنجرهٔ فعال را می‌چرخاند تا محور X مربوط به UCS (یا جهان) افقی شود. هیچ چیزی در نقشه جابه‌جا نمی‌شود.

### TURNLEFT، TURNRIGHT، TURNWORLD

بدون نام مستعار؛ یا {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}، {{ui:Turn view 90° right}}، {{ui:Back to world}}. همان `UCS Z -90`، `UCS Z 90` و `UCS W` است، با نمایی که دنبال می‌کند.

### VPLAYER

بدون نام مستعار. روی برگه، یا داخل یک نمای‌پورت. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`، `T`، `R` نام لایه‌ها را می‌پرسند (با کاما، و کاراکترهای عام `*` و `?`)، سپس `[All/Select/Current] <Current>` نمای‌پورت‌ها؛ Reset هر لایه را به پیش‌فرض "فریز در نمای‌پورت‌های تازه" برمی‌گرداند؛ `V` آن پیش‌فرض را تنظیم می‌کند (`[Frozen/Thawed]`)، که {{cmd:MVIEW}} به کار می‌برد. `?` لایه‌های فریزشده در نمای‌پورت فعلی را فهرست می‌کند. ستون نمای‌پورت در پنل لایه‌ها همین کار را برای یک نمای‌پورت می‌کند. See [فریز یک لایه در یک نمای‌پورت](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

نام‌های مستعار: `MS`؛ یا دوبار کلیک درون یک نمای‌پورت. فقط روی برگه. کار روی مدل از طریق یک نمای‌پورت: همان که انتخاب شده، تنها نمای‌پورت روی برگه، یا `Click inside the viewport to work in`. پن و زوم داخلش نمای نمای‌پورت را تغییر می‌دهد (نمای‌پورتی که نمایشش قفل است آن را نگه می‌دارد و برگه جابه‌جا می‌شود)؛ نمای تازه یک مرحلهٔ واگرد است. See [کار روی مدل از طریق یک نمای‌پورت](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

نام‌های مستعار: `PS`؛ یا دوبار کلیک بیرون نمای‌پورت، یا کلیک روی یک زبانه زیر نقشه. بازگشت به برگه.

### PLOT

نام‌های مستعار: `PRINT`، `PUBLISH`، `EXPORTPDF`؛ یا {{key:Mod+P}}. کادر گفتگوی {{ui:Plot to PDF}} را باز می‌کند. See [پلات به PDF](topic:plot-pdf).

### PLOTSTYLES

نام‌های مستعار: `STYLESMANAGER`، `PSTABLES`؛ یا {{ui:Edit tables…}} در کادر گفتگوی {{ui:Plot to PDF}}. {{ui:Plot style tables}} را باز می‌کند: هر رنگ به‌صورت چه چاپ شود (رنگ، خاکستری، جوهر، ضخامت خط)، با نقشه نگه داشته می‌شود. See [جدول‌های سبک پلات](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} اشیا را بین یک برگه و مدل از طریق یک نمای‌پورت جابه‌جا می‌کند، مقیاس و دوران می‌یابند تا از طرف دیگر یکسان دیده شوند. روی یک برگه، اشیا را انتخاب کنید تا به مدل بروند (وقتی برگه بیش از یک نمای‌پورت دارد، نمای‌پورت را انتخاب کنید). وقتی روی مدل از طریق یک نمای‌پورت کار می‌کنید ({{cmd:MSPACE}})، اشیای انتخاب‌شده به برگه می‌آیند. می‌گوید چند بار بزرگ‌تر یا کوچک‌تر شده‌اند. نمای‌پورت‌ها روی برگهٔ خودشان می‌مانند. یک مرحلهٔ واگرد.

### ISODRAFT

{{cmd:ISODRAFT}} نقشه‌کشی ایزومتریک را `ON` یا `OFF` می‌کند، یا مستقیم روی صفحهٔ `Left`، `Top` یا `Right` می‌برد. وقتی روشن است: Ortho ({{key:F8}}) خط‌ها را در امتداد دو محور صفحه نگه می‌دارد (چپ: 90° و 150°؛ بالا: 30° و 150°؛ راست: 30° و 90°)، ردیابی قطبی ({{key:F10}}) همان محورها را دنبال می‌کند، اسنپ به شبکه ({{key:F9}}) از شبکهٔ ایزومتریک استفاده می‌کند، و شبکه ({{key:F7}}) با خط‌هایی در 30°، 90° و 150° کشیده می‌شود. {{cmd:ELLIPSE}} گزینهٔ `Isocircle` پیدا می‌کند: یک مرکز و یک شعاع (یا `Diameter`) بدهید تا بیضی‌ای را بکشد که یک دایره روی صفحهٔ فعلی به‌نظر می‌رسد. نقشه تخت می‌ماند: اینها کمک‌هایی برای کشیدن یک نمای تصویری‌اند، نه یک مدل سه‌بعدی. تنظیم برای این نشست است و در فایل ذخیره نمی‌شود.

### ISOPLANE

{{cmd:ISOPLANE}} صفحه‌ای را که نقشه‌کشی ایزومتریک روی آن کار می‌کند انتخاب می‌کند: `Left`، `Top` یا `Right`. Enter به صفحهٔ بعدی می‌رود. وقتی نقشه‌کشی ایزومتریک روشن است، {{key:F5}} وسط یک فرمان همین کار را می‌کند؛ وقتی خاموش است، {{key:F5}} به مرورگر واگذار می‌شود.

## استعلام

### CAL

نتیجهٔ یک محاسبه را چاپ می‌کند، همان‌طور که در هر جا که طولی تایپ می‌شود خوانده می‌شود.

- `Expression`: آن را تایپ کنید، برای نمونه `12'6"+3/4"` یا `(24'-0")/3`، و {{key:Enter}} را بزنید. CadCraft چاپ می‌کند `= 12'-6 3/4"   (150.75 drawing units)`. See [محاسبهٔ حسابی در یک مقدار تایپ‌شده](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

نام‌های مستعار: `DI`؛ یا {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`، `Specify second point`. فاصله، زاویه، Delta X و Delta Y را چاپ می‌کند.

### AREA

نام‌های مستعار: `AA`؛ یا {{ui:View}} › {{ui:More}} › {{ui:Area}}. مساحت و محیط را چاپ می‌کند.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - گوشه‌ها را کلیک کنید یا تایپ کنید؛ در `Specify next point (Enter closes) [Undo]` برای بستن طرح {{key:Enter}} را بزنید. `U` آخرین گوشه را برمی‌گرداند.
  - {{key:Enter}} یا `O`، سپس `Select object`: یک دایره (محیطش را چاپ می‌کند)، یک بیضی، یک پلی‌لاین (پلی‌لاین باز برای مساحت با یک خط راست بسته می‌شود و طولش چاپ می‌شود)، یا یک هاشور (سوراخ‌ها کم می‌شوند).
  - `A` (Add area) و `S` (Subtract area) مجموع جاری را نگه می‌دارند: پرسش با `(ADD mode)` یا `(SUBTRACT mode)` شروع می‌شود، هر مساحت اضافه یا کم می‌شود، و پس از هر کدام `Total area = …` چاپ می‌شود. در این حالت‌ها `O` تا {{key:Enter}} شیء انتخاب می‌کند، و {{key:Enter}} در اولین پرسش فرمان را پایان می‌دهد.

### MEASUREGEOM

نام‌های مستعار: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`؛ پس از هر اندازه‌گیری دوباره می‌پرسد، با `eXit` به‌عنوان پیش‌فرض.

`Quick` دور نشانگر اندازه می‌گیرد وقتی آن را حرکت می‌دهید: فاصله تا نزدیک‌ترین شیء به راست، بالا، چپ و پایین (در امتداد محورهای UCS فعلی)، که همزمان کشیده می‌شود، و زاویه‌ای که در آن دو همسایه مستقیم‌اند و به هم می‌رسند. یک کلیک چهار فاصله، عرض و ارتفاع خالی و زاویه‌ها را در تاریخچه می‌نویسد؛ Enter به گزینه‌ها برمی‌گردد. آنچه روی صفحه است را می‌خواند.

- `D`: دو نقطه، مانند {{cmd:DIST}}.
- `R`: `Select arc or circle`؛ شعاع و قطر را چاپ می‌کند.
- `A`: یک کمان (زاویهٔ محصورشده‌اش)، یک خط و سپس یک خط دوم (زاویهٔ بین آن‌ها، به‌سوی انتهای دورشان)، یا {{key:Enter}} و سه نقطه (رأس، سپس دو انتها).
- `AR`: مانند {{cmd:AREA}}، یک مساحت.

### ID

بدون نام مستعار. `Specify point`؛ X و Y آن را چاپ می‌کند.

### LIST

نام‌های مستعار: `LI`، `LS`. `Select objects`؛ نوع، لایه و اندازه‌های اصلی هر شیء را چاپ می‌کند.

### MASSPROP

{{cmd:MASSPROP}} خواص مقطع ناحیه‌ها و اشیای بسته‌ای را که انتخاب می‌کنید، با هم، می‌دهد: مساحت، محیط، جعبهٔ محیطی، مرکز ثقل، گشتاورهای اینرسی حول محورهای X و Y از مبدأ، حاصل‌ضرب اینرسی، شعاع‌های ژیراسیون، همان گشتاورها حول مرکز ثقل، و گشتاورهای اصلی با جهت محورهایشان. سوراخ‌ها در یک ناحیه، سوراخ حساب می‌شوند. ارقام بر حسب واحدهای نقشه‌اند و برای طرح‌هایی از خط و کمان دقیق‌اند؛ بیضی‌ها و اسپلاین‌ها به‌صورت قطعه‌های مستقیم کوتاه اندازه‌گیری می‌شوند، و این را می‌گوید. پس از گزارش، می‌پرسد آیا در یک فایل متنی نوشته شود. اشیای بسته‌ای نیستند کنار گذاشته می‌شوند و تعدادشان اعلام می‌شود.

## نما، فایل و دیگر

### ZOOM

نام‌های مستعار: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. برای یک پنجره دو گوشه کلیک کنید. `E`، `A` یا Enter: کل نقشه.
- `P` (Previous، یا {{ui:Previous}} روی نوار ابزار) به نمای قبلی برمی‌گردد، تا 10 نما برای هر زبانه؛ یک دسته چرخش چرخ ماوس یا یک پن یک نما حساب می‌شود.
- عددی مانند `2`، `2x` یا `0.5x` (یا `S` و سپس عدد) با آن ضریب و حول وسط صفحه بزرگ‌نمایی یا کوچک‌نمایی می‌کند.
- `C` پرسش `Specify center point` و `Enter height or magnification (nX)` را می‌پرسد.

### PDFATTACH، PDFIMPORT و فرمان‌های PDF

نام‌های مستعار: `PDFATT` برای {{cmd:PDFATTACH}}، `PDFIM` برای {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} یک صفحهٔ PDF را زیر نقشه می‌گذارد (فایل، صفحه، نقطهٔ درج، مقیاس، دوران)؛ {{cmd:PDFIMPORT}} خط‌ها، منحنی‌ها، پرشدگی‌ها و متن یک صفحه را به اشیای نقشه روی لایه‌هایی با نام PDF تبدیل می‌کند، در اندازهٔ واقعی، با مقیاس تایپ‌شده، یا مقیاس‌شده از دو نقطه و یک فاصلهٔ واقعی. {{cmd:PDFCLIP}} یک زیرلایه را برش می‌دهد، {{cmd:PDFADJUST}} کم‌رنگی، کنتراست، تک‌رنگی را تنظیم می‌کند یا آن را خاموش می‌کند، {{cmd:PDFLAYERS}} لایه‌های خود PDF را روشن و خاموش می‌کند، و {{cmd:PDF}} فایل‌هایی را که زیرلایه‌های نقشه استفاده می‌کنند دوباره به CadCraft می‌دهد. See [زیرلایه‌های PDF](topic:pdf-underlay).

### AUTOCOMPLETE

نام مستعار: `AUTOC`. تکمیل خودکار نقشه: وقتی هیچ فرمانی اجرا نمی‌شود، یک شبح خاکستری نشان می‌دهد که الگوهای خود نقشه می‌گویند بعد از آن چه می‌آید. {{cmd:AUTOCOMPLETE}} آن را `On` یا `Off` می‌کند (همچنین تنظیمات › CadCraft) یا آنچه را اکنون پیشنهاد می‌دهد `Show` می‌کند. **Tab** شبح را به‌عنوان یک مرحلهٔ واگرد می‌کشد، **Esc** آن را تا تغییر نقشه کنار می‌گذارد. در تازه‌ترین اشیا سه چیز را پیدا می‌کند: کپی بعدی چیزی که دوبار یا بیشتر با یک گام یکنواخت کشیده شده (ستون‌های کوچک، ستون‌ها، ریسر و تردِ یک پله)، قطعه‌های بعدی یک پله‌ی پلی‌لاینی، و ضلع گم‌شدهٔ یک اتاق یا زنجیرهٔ دیوار. وسط {{cmd:LINE}} یا {{cmd:PLINE}} شبح **نقطهٔ بعدی** است: گام بعدی یک پله (ریسر، تِرد، ریسر…)، گوشهٔ چهارم یک مستطیل، نقطه‌ای که آن را می‌بندد، یا یک گام برابر دیگر. نشانگر را نزدیک آن ببرید و **Tab** را بزنید، انگار آنجا کلیک کرده‌اید؛ ادامه دهید یا Enter بزنید. با قاعده روی همین رایانه و بدون هیچ مدلی محاسبه می‌شود.

### AUTOSHEET

نام مستعار: `ASH`. برگه‌هایی که خودشان چیده می‌شوند. {{cmd:AUTOSHEET}} قطعه‌های نقشه (نماهای نام‌دار شما، یا قطعه‌های جدای مدل، یا کل مدل) را برمی‌دارد، اندازهٔ کاغذ را انتخاب می‌کند (یا همان را که می‌دهید)، به هر قطعه یک مقیاس استاندارد می‌دهد (یک مقیاس برای همه، یا بزرگ‌ترین مقیاسی که هر کدام می‌پذیرد)، و نماها را در سطرهایی روی برگه‌های تازه با جدول مشخصات نقشه و یک شرح (نام و مقیاس) زیر هر کدام قرار می‌دهد. آنچه روی یک برگه جا نمی‌شود برگهٔ خودش را می‌گیرد. یک مرحلهٔ واگرد. با قاعده روی همین رایانه و بدون هیچ مدلی محاسبه می‌شود.

### PHOTOSKETCH

نام مستعار: `PSK`. تبدیل عکس طرح به نقشه. یک عکس (JPEG، PNG یا TIFF) از یک طرح دستی روی کاغذ انتخاب کنید. {{cmd:PHOTOSKETCH}} چهار گوشهٔ برگه را پیدا می‌کند، پرسپکتیو را صاف می‌کند، اندازهٔ کاغذی را که نام می‌برید (`Paper`، یا نزدیک‌ترین استاندارد) و `Scale` طرح (1 : n) را می‌گیرد، سپس خط‌های قلم را به خط، کمان و دایره تبدیل می‌کند، با یک لایه برای هر رنگ قلم (سیاه، قرمز، آبی، سبز). اگر لبهٔ کاغذ را پیدا نکند، کل عکس را به‌عنوان برگه می‌گیرد و این را می‌گوید. متن کنار گذاشته می‌شود. یک مرحلهٔ واگرد. با پردازش کلاسیک تصویر روی همین رایانه انجام می‌شود، بدون هیچ مدلی، و چیزی به جایی فرستاده نمی‌شود. همچنین دستورات اسکن نقشه را ببینید.

### AUTODIM

نام مستعار: `ADIM`. اندازه‌گذاری خودکار بر اساس قواعد. {{cmd:AUTODIM}} اشیای انتخاب‌شده (یا کل نقشه) را از سطح و لبه‌های قائمشان اندازه می‌گذارد: زنجیره‌ای از اندازه‌ها در امتداد اضلاعی که انتخاب می‌کنید (`Sides`)، یک اندازهٔ کلی بیرون آن، عرض هر بازشو (فاصله بین خط‌های دیوار هم‌راستا)، قطر برای هر اندازهٔ سوراخ، و با `Grid` فاصلهٔ خط‌های شبکه. اندازه‌ای که از پیش هست دوباره ساخته نمی‌شود. یک مرحلهٔ واگرد. با قاعده روی همین رایانه و بدون هیچ مدلی محاسبه می‌شود.

### GRIDMOVE

نام مستعار: `GM`. جابه‌جایی یک خط شبکه، مجموعه را با خود می‌برد. {{cmd:GRIDMOVE}} یک خط شبکه (خطی روی لایه‌ای که نامش grid یا axis دارد) و آنچه به آن آویزان است را جابه‌جا می‌کند: دیوارهایی که یک انتهایشان روی خط است برای دنبال کردنش کشیده می‌شوند، دیوارهای در امتداد آن به‌طور کامل جابه‌جا می‌شوند، ستون‌ها (ارجاع بلوک و دایره‌های روی خط)، حباب و برچسبش جابه‌جا می‌شوند، و اندازه‌گذاری‌هایی که نقاطشان روی آن است فاصلهٔ جدید را اندازه می‌گیرند. دو نقطه بدهید (فقط بخشی که از خط عبور می‌کند حساب می‌شود) یا `Distance`. یک مرحلهٔ واگرد همه‌چیز را برمی‌گرداند. با قاعده روی همین رایانه انجام می‌شود.

### DETAILS

نام مستعار: `DET`. جزئیاتی که خودشان شما را پیدا می‌کنند. {{cmd:DETAILS}} جزئیات خاص شرکت شما را نگه می‌دارد: `Add` یک بلوک از این نقشه را به فهرست می‌افزاید، `List` و `Remove` آن را مدیریت می‌کنند، و `Find` آن‌ها را برای آنچه انتخاب شده (یا آنچه آخر کشیده‌اید) رتبه‌بندی می‌کند، با مقایسهٔ کلمات روی لایه‌ها، نام بلوک‌ها، الگوهای هاشور و یادداشت‌ها با نام و یادداشت هر جزئیات، تا مثلاً سرپوش پنجره به ورق آب‌بند سردر شما برسد. یک شماره و یک نقطه انتخاب کنید تا قرار گیرد. وقتی `Hint` روشن باشد (همچنین تنظیمات › CadCraft)، انتخاب چیزی که یک جزئیات با آن جور است یک خط در نوار وضعیت می‌گذارد. فهرست در همین مرورگر، روی همین رایانه نگه داشته می‌شود، و همان فهرستی است که جستجو می‌شود. `Share` آن را در پوشهٔ Documents شما هم می‌گذارد (`.cadcraft/firm-details.json`، با نقشهٔ هر بلوک): `Pull` آنچه تیم شما دارد و شما ندارید اضافه می‌کند، `Push` آنچه شما دارید و آن‌ها ندارند اضافه می‌کند، `Both` هر دو را انجام می‌دهد، و هیچ‌چیز از هیچ طرفی حذف نمی‌شود. اول پوشهٔ Documents را باز کنید ({{cmd:DOCUMENTS}})؛ وقتی آن پوشه، پوشهٔ یک Team Cloud Plan باشد، کل تیم یک فهرست مشترک دارد. یک مورد جزئیات در پنل Library یک دکمهٔ **Add to my firm's details** دارد که آن را در همان فهرست می‌گذارد. با قاعده و با واژه‌ها روی همین رایانه و بدون هیچ مدلی محاسبه می‌شود.

### SKETCHFIX

نام مستعار: `SKF`. طرح‌های قلمی به هندسهٔ دقیق تبدیل می‌شوند. یک خط دست‌آزاد را در یک زمان فشار دهید و بکشید (قلم، ماوس یا انگشت)، سپس Enter. هر خط به‌صورت خط، دایره، کمان، مستطیل یا پلی‌لاین خوانده می‌شود: خط‌های تقریباً افقی و قائم دقیقاً افقی و قائم می‌شوند، یک خط گرد بسته تبدیل به دایره، یک خط بسته با چهار گوشهٔ قائم تبدیل به مستطیل می‌شود، و انتهای خط‌ها به هم و به انتهاهایی که در نقشه هست کشیده می‌شوند. یک مرحلهٔ واگرد. با قاعده روی همین رایانه و بدون هیچ مدلی محاسبه می‌شود.

### SCANATTACH و دستورات نقشهٔ اسکن‌شده

نام‌های مستعار: `SCA` برای {{cmd:SCANATTACH}}، `SCS` برای {{cmd:SCANSCALE}}، `SCL` برای {{cmd:SCANALIGN}}، `SCD` برای {{cmd:SCANDESKEW}}، `SCC` برای {{cmd:SCANCLEAN}}، `SCR` برای {{cmd:SCANCROP}}، `SCE` برای {{cmd:SCANERASE}}، `SCT` برای {{cmd:SCANTRACE}}، `SCI` برای {{cmd:SCANINFO}}؛ {{cmd:RASTERSNAP}} نام مستعار ندارد. روی یک تصویر کار می‌کنند، هر کدام یک مرحلهٔ واگرد. {{cmd:SCANATTACH}} یک PNG، JPEG، TIFF (یک صفحه یا همه) یا یک صفحهٔ PDF که تصویر است را درج می‌کند. {{cmd:SCANSCALE}} برگه را از دو نقطهٔ انتخاب‌شده و فاصلهٔ واقعی مقیاس می‌کند. {{cmd:SCANALIGN}} آن را روی دو نقطه جابه‌جا و می‌چرخاند (`Scale the sheet to fit` بله/خیر). {{cmd:SCANDESKEW}} زاویهٔ خط‌های بلند برگه را نشان می‌دهد و برگه را وقتی `Accept` یا یک `Value` بدهید می‌چرخاند. {{cmd:SCANCLEAN}} آن را سیاه‌و‌سفید می‌کند (`Threshold` Auto/Adaptive/Level، `Specks`) و `Run`. {{cmd:SCANCROP}} یک پنجره نگه می‌دارد. {{cmd:SCANERASE}} یک `Rectangle`، `Polygon` یا `Lasso` را پاک می‌کند. {{cmd:SCANTRACE}} خط‌ها و کمان‌ها را روی یک لایهٔ جدید ردیابی می‌کند (`Tolerance`، `Window`، `Arcs`، `Leftovers`، `Run`) و گزارش می‌دهد چه پیدا کرده و چه را به‌صورت رستر گذاشته است. {{cmd:SCANINFO}} فایل اصلی و مراحل را فهرست می‌کند. {{cmd:RASTERSNAP}} اسنپ به خط‌های برگه‌های اسکن‌شده را روشن یا خاموش می‌کند. See the topic Scanned drawings and the trace.

### REGEN و REGENALL

نام‌های مستعار: `RE` برای {{cmd:REGEN}}، `REA` برای {{cmd:REGENALL}}. آنچه روی صفحه از روی نقشه کشیده شده را دوباره می‌سازد: {{cmd:REGEN}} زبانهٔ مورد نگاه شما (روی برگه، مدلی را هم که نمای‌پورت‌ها نشان می‌دهند)، {{cmd:REGENALL}} همهٔ زبانه‌ها، همهٔ پنجره‌های تقسیم صفحه و همهٔ نقشه‌های باز. وقتی تصویر بعد از یک تغییر خودکار یا خیلی بزرگ کهنه به‌نظر می‌رسد، یا یک دستیار نقشه را ویرایش کرده، از آن‌ها استفاده کنید؛ خود نقشه دست‌نخورده می‌ماند، پس چیزی برای واگرد نیست.

### NAMEDVIEW

نام‌های مستعار: `NV`، `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`، سپس نام نما. `S` نمای روی صفحه را ذخیره می‌کند، `W` یک پنجره که انتخاب می‌کنید، `R` یک نمای ذخیره‌شده را نشان می‌دهد، `D` یکی را حذف می‌کند، `?` نماهای این زبانه را فهرست می‌کند. ذخیره با نامی که از پیش هست آن را جایگزین می‌کند؛ هر تغییر یک مرحلهٔ واگرد است. نماها متعلق به زبانه‌ای هستند که روی آن ذخیره شده‌اند. فایل‌های DWG و DXF آن‌ها را نگه می‌دارند (جدول VIEW)؛ نماهای یک برگه روی برگهٔ اول برمی‌گردند، چون فایل نمی‌گوید کدام است.

### UNDO و REDO

نام مستعار `U` برای {{cmd:UNDO}}؛ {{cmd:REDO}} نام مستعار ندارد. همچنین {{key:Mod+Z}} و {{key:Mod+Y}}.

### LAYER

نام مستعار: `LA`. به پنل {{ui:Layers}} می‌پرد.

### LINETYPE، LWEIGHT، LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`، `ByBlock` یا یک نام (`?` آن‌ها را فهرست می‌کند: Continuous، نوع‌های خود نقشه، و DASHED، HIDDEN، CENTER، PHANTOM، DOT، DASHDOT، BORDER، DIVIDE با اندازه‌های `2` (نصف) و `X2` (دوبرابر)). {{cmd:LWEIGHT}} (`LW`): ضخامت خط برای اشیای جدید بر حسب mm، یا `ByLayer`، `ByBlock`، `Default`. {{cmd:LTSCALE}} (`LTS`): مقیاس نوع خط نقشه (قابل واگرد). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — همان دکمهٔ {{ui:LWT}} در نوار وضعیت. See [ضخامت خط و نوع خط](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME، LAYMRG، LAYDEL

{{cmd:RENAME}} (`-RENAME`، `REN`): `Enter object type to rename [LAyer/Block]`، `Enter old name`، سپس نام تازه؛ اشیا یا ارجاع‌ها دنبال می‌کنند. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` تا {{key:Enter}}، سپس `Select object on target layer or [Name]` و `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`، سپس `Y`: لایه و هر شیء روی آن می‌روند (لایهٔ 0، DEFPOINTS یا لایهٔ فعلی نه). هر کدام یک مرحلهٔ واگرد. See [سازمان‌دهی نقشه با لایه‌ها](topic:layers#rename-merge-and-delete-layers).

### LAYISO، LAYUNISO، LAYOFF، LAYFRZ، LAYMCUR، LAYON، LAYTHW

لایه‌ها با انتخاب اشیا؛ همچنین در منوی {{ui:Tools}} پنل {{ui:Layers}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`، سپس {{key:Enter}}: هر لایهٔ دیگر خاموش می‌شود. {{cmd:LAYUNISO}} آن‌ها را دوباره روشن می‌کند. {{cmd:LAYOFF}} و {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (یا فریز شود)، بارها؛ `U` آخرین را برمی‌گرداند، {{key:Enter}} پایان می‌دهد. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} همهٔ لایه‌ها را روشن می‌کند، {{cmd:LAYTHW}} همهٔ لایه‌ها را از فریز خارج می‌کند. هر فرمان یک مرحلهٔ واگرد است. See [سازمان‌دهی نقشه با لایه‌ها](topic:layers#work-on-layers-by-picking-objects).

### NEW، OPEN، SAVE، SAVEAS، DXFOUT

{{cmd:NEW}} یک نقشهٔ خالی شروع می‌کند و {{cmd:OPEN}} یک DWG یا DXF را باز می‌کند، هرکدام در زبانهٔ خودش روی نقشه (یک نقشهٔ تازهٔ دست‌نخورده به‌جای زبانهٔ جدید استفاده می‌شود). بستن زبانه‌ای با تغییرات ذخیره‌نشده اول می‌پرسد. See [تقسیم صفحه](topic:split-screen).

{{cmd:SAVE}} (نام مستعار `QSAVE`، همچنین {{key:Mod+S}}) یک نسخه را با قالب نقشه بارگیری می‌کند: DWG اگر از DWG باز شده، DXF اگر از DXF. نقشهٔ تازه قالبی را که آخرین بار در Save as در همین مرورگر انتخاب شده، می‌گیرد، وگرنه DWG.

{{cmd:SAVEAS}} (همچنین {{key:Mod+Shift+S}}) کادر گفتگوی {{ui:Save a copy as}} را باز می‌کند: {{ui:DWG}} (و {{ui:Version}} آن)، {{ui:DXF R12}} یا {{ui:DXF 2000}} را انتخاب کنید، سپس {{ui:Save}}. انتخاب برای این نقشه و برای نقشه‌های تازه در همین مرورگر می‌ماند.

{{cmd:DXFOUT}} همیشه یک نسخهٔ DXF R12 بارگیری می‌کند، بدون تغییر قالبی که {{cmd:SAVE}} استفاده می‌کند.

See [فایل‌ها: چه باز می‌شود، چه ذخیره می‌شود](topic:files#saving).

### TOUR

نام‌های مستعار: `TUTORIAL`. گشت شش‌مرحله‌ای اولین نقشه را دوباره شروع می‌کند. See [شروع کار](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

نام‌های مستعار: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. See [تنظیمات](topic:settings#toolbar-position).

### COMMANDLINE

نام‌های مستعار: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: خط فرمان را می‌چسباند یا شناور می‌کند، آن را یک‌خطی می‌کند، می‌پرسد چند خط تاریخچه نشان داده شود (0 تا 12)، یا تاریخچه را باز می‌کند. See [تنظیمات](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: نوارهای بالای نقشه همان‌طور که بودند، یا فشرده. See [تنظیمات](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: گامی که ردیابی {{ui:Polar}} روی آن قرار می‌گیرد (بیشتر از 0، تا 180). در همین مرورگر نگه داشته می‌شود.

### UNITS

نام‌های مستعار: `UN`. چگونگی نوشتن و تایپ طول‌ها.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural و Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. بقیه: `Enter number of decimal places (0 to 8)`.

اندازه‌گذاری‌های جدید از آن پیروی می‌کنند. یک مرحلهٔ واگرد. همان {{ui:Length format}} و {{ui:Precision}} در {{ui:Current settings}} است؛ See [فوت و اینچ](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

نام‌های مستعار: `GDS`. مشاهدهٔ طرح IC (یک فایل جریان GDSII): آزمایش نمونه، فقط برای مشاهده و اندازه‌گیری.

- یک انتخاب‌گر فایل یک فایل `.gds` می‌گیرد؛ با چند سلول بالایی، `Enter the top cell to draw`.
- هر لایه و نوع داده یک لایهٔ نقشه می‌شود (`GDS 1`، `GDS 2/5`)، ارجاع‌ها و آرایه‌ها به‌صورت تخت، در واحد کاربر فایل (معمولاً میکرومتر) قرار می‌گیرند. یک مرحلهٔ واگرد. چیزی شبیه‌سازی یا بررسی نمی‌شود و فایل به آن برگردانده نمی‌شود.

### DIAGRAM

نام‌های مستعار: `TEXTDIAGRAM`، `T2D`. یک نمودار از متن.

- یک کادر متن را می‌گیرد (یا یک خط با `;` بین گزاره‌ها در خط فرمان): یک نمودار جریانی Mermaid، یک نمودار مؤلفهٔ PlantUML، D2 یا یک فهرست از-به.
- `Specify the top left corner of the diagram`، سپس `Specify the text height`.

بلوک‌ها و اتصال‌دهنده‌ها اشیای عادی روی لایهٔ `Diagram` هستند که وقتی پایان یابد انتخاب می‌شوند. یک مرحلهٔ واگرد. See [کشیدن نمودار از متن](topic:text-to-diagram).

### OLELIST

نام‌های مستعار: `OLES`. اشیای OLE که یک DWG دارد و CadCraft خودش نمی‌تواند آن‌ها را قرار دهد.

- هر کدام را فهرست می‌کند: شماره، نوع، اندازه، اینکه تصویری ذخیره کرده یا نه.
- `Enter an option [Place/eXit] <eXit>`: Place شماره، گوشهٔ پایین‌چپ و عرض را می‌پرسد و یک قاب با تصویر می‌کشد. یک مرحلهٔ واگرد؛ شیء نگه‌داشته‌شده تغییر نمی‌کند. See [تصاویر](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

نام‌های مستعار: `SHX`. قلم‌های SHX خودتان.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} هر فایل `.shx` را در یک پوشه می‌خواند (CadCraft Studio؛ در هر شروع دوباره)، {{ui:Files}} فایل‌های انتخاب‌شده را می‌گیرد (مرورگر)، {{ui:Reverse}} حروف یک قلم را از آخر به اول می‌چیند. سبک‌های متنی که قلم بارگذاری‌شده‌ای را نام می‌برند با آن می‌کشند. See [متن را با قلم‌های SHX خودتان بکشید](topic:shx-fonts).

### LIMITS

نقشه چقدر بزرگ قرار است باشد.

- `Specify lower left corner or [ON/OFF] <current>`: یک نقطه، `ON` یا `OFF`.
- `Specify upper right corner <current>`.

شبکه حدود را پر می‌کند، {{cmd:ZOOM}} All آن‌ها را نشان می‌دهد، و وقتی حدود ON باشند نقطهٔ بیرون پذیرفته نمی‌شود (`**Outside limits`). یک مرحلهٔ واگرد؛ در DWG و DXF ذخیره می‌شود. See [تنظیم حدود نقشه](topic:drawing-limits).

### AUNITS

نام‌های مستعار: `ANGUNITS`. چگونگی نمایش و تایپ زاویه‌ها.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`، یا برای دو مورد دیگر `Enter precision` (0 درجه، 2 دقیقه، 4 ثانیه، 5 تا 8 رقم اعشار ثانیه).

یک مرحلهٔ واگرد؛ در DWG و DXF ذخیره می‌شود. همان {{ui:Angle format}} در {{ui:Current settings}} است. See [تایپ و نمایش سمت‌ها و زاویه‌ها](topic:bearings-and-angles).

### APPLOAD

نام‌های مستعار: `AP`؛ یا {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. کادر گفتگوی {{ui:Load applications}}: روال‌های `.lsp` و فایل‌های کادر گفتگوی `.dcl` را بارگذاری، تخلیه، و از تاریخچه دوباره بارگذاری کنید، و مجموعهٔ راه‌اندازی. فرمان‌های `(defun c:NAME …)` یک روال مانند هر فرمان دیگری کار می‌کنند. See [بارگذاری برنامه‌ها](topic:load-applications) و [اجرای روال‌های LISP](topic:run-lisp).

### ALIASEDIT، REINIT

{{cmd:ALIASEDIT}} (یا {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) فایل نام‌های مستعار شما را باز می‌کند (خطوط `ALIAS, *COMMAND`)؛ {{ui:Save}} آن را اعمال می‌کند. {{cmd:REINIT}} دوباره اعمال می‌کند. See [ویرایش نام‌های مستعار فرمان](topic:command-aliases).

### LISPEDIT

نام‌های مستعار: `VLIDE`؛ یا {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. ویرایشگر LISP را باز می‌کند، پنجره‌ای که کنار نقشه باز می‌ماند.

- متن: شماره‌های خط، جفت پرانتز زیر نشانگر علامت می‌خورد (قرمز وقتی جفتی ندارد)، {{key:Enter}} خط تازه را زیر پرانتز باز تورفته می‌کند، {{key:Tab}} دو فاصله تایپ می‌کند، {{key:Esc}} از متن خارج می‌شود.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): همهٔ فرم‌ها را می‌خواند، همان‌طور که {{cmd:APPLOAD}} با فایل می‌کند، و فرمان‌های `c:` آن را می‌سازد. فایل در فهرست {{cmd:APPLOAD}} نشان داده می‌شود.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): فرم‌های انتخاب‌شده، یا فرمی را که نشانگر در آن است ارزیابی می‌کند.
- {{ui:Stop}}: یک روال در حال اجرا را پایان می‌دهد.
- {{ui:Console}}: آنچه روال چاپ کرده و هر خطا با شماره خطش؛ روی یک خطا کلیک کنید تا به آنجا بروید. متن یک فرم سطح بالا را هر بار اجرا می‌کند، پس خط همان فرم است، یا اگر داخل آن باشد، خطی که تابع نام‌برده در خطا را صدا می‌زند.
- {{ui:New}}، {{ui:Open}}، {{ui:Save}} ({{key:Ctrl+S}}): یک فایل `.lsp`. متن همچنین در همین مرورگر نگه داشته می‌شود، پس بستن پنجره آن را از دست نمی‌دهد.
- کنار متن: توابعی که روال تعریف می‌کند، آن‌هایی که صدا می‌زند و این LISP هنوز ندارد، آن‌هایی که نه در آن تعریف شده‌اند و نه داخلی‌اند، و فهرست کامل آنچه ساخته شده و آنچه نشده است.

متنی که پرانتزش بسته نشده، یا رشته‌ای که تمام نمی‌شود اجرا نمی‌شود: خط آن نام برده می‌شود. هیچ اشکال‌زدای گام‌به‌گام، نقطهٔ توقف یا پنجرهٔ دیدهبان وجود ندارد. See [اجرای روال‌های LISP](topic:run-lisp).

### HELP

نام‌های مستعار: `?`. هر فرمان، نام‌های مستعارش و یک توضیح یک‌خطی را در تاریخچهٔ خط فرمان چاپ می‌کند. این راهنما را باز نمی‌کند: برای آن {{key:F1}} را بزنید یا روی {{ui:Help}} کلیک کنید.

## پیام انتخاب اشیا

در هر پیام `Select objects`: روی اشیا کلیک کنید، پنجره‌ها را (از چپ به راست) و پنجره‌های عبوری را (از راست به چپ) با دو کلیک بکشید، یا یک کمند را فشار داده و بکشید ({{key:Space}} هنگام کشیدن: پنجره، عبوری، حصار)، {{key:Shift}}+کلیک برای برداشتن، و {{key:Enter}} برای پایان. همچنین می‌توانید `ALL` (همه چیز)، `L` (آخرین شیء)، `P` (Previous: آنچه فرمان قبلی استفاده کرده)، `F` (Fence: اشیایی که یک خط از نقاط از آن‌ها عبور می‌کند؛ `U` آخرین نقطه را برمی‌دارد)، `W` (Window)، `C` (Crossing)، `R` (حالت Remove: انتخاب‌ها اشیا را بیرون می‌برند؛ پیام `Remove objects` می‌شود) و `A` (Add again) را تایپ کنید. `?` همهٔ آن‌ها را فهرست می‌کند. در پیام نشان داده نمی‌شوند. {{key:Tab}} روی اشیای روی هم، شیء بعدی را هایلایت می‌کند؛ برای انتخابش کلیک کنید. See [انتخاب اشیا](topic:select-objects).

### ACCESS

نام مستعار: `AX`. نقشه‌کشی بدون دیدن. {{cmd:ACCESS}} حالت Access را روشن یا خاموش می‌کند (`On`، `Off`) و صداهای اسنپ (`Sound`) و فرمان‌های گفتاری (`Voice`) را تغییر می‌دهد؛ اول وضعیت را می‌گوید. وقتی Access روشن است، هر فرمان و نتیجه از طریق صفحه‌خوان بیان می‌شود و ناحیهٔ نقشه یک نشانگر صفحه‌کلید دارد. موضوع راهنمای "Draft without sight" کلیدها را دارد.

### DESCRIBE

نام مستعار: `DESC`. گفتن آنچه نقشه دارد: چند شیء، از چه نوعی، چه اندازه‌ای، چند لایه، و چه چیزی انتخاب شده. فقط می‌خواند؛ چیزی را تغییر نمی‌دهد.

### WHEREAMI

نام مستعار: `WHERE`. گفتن محل نشانگر، بر حسب واحدهای نقشه.

### NEARBY

گفتن آنچه نزدیک نشانگر است، نزدیک‌ترین اول، هرکدام با فاصله و طرفی که در آن است.

### SAYSEL

گفتن آنچه انتخاب شده، یک جمله برای هر شیء (طول خط، انتها و زاویه؛ شعاع و مرکز دایره؛ متن همان‌طور که نوشته شده).

### VOICE

روشن یا خاموش کردن فرمان‌های گفتاری. روی این رایانه شناسایی می‌شوند؛ جایی که مرورگر نتواند این کار را کند، صدا خاموش می‌ماند مگر اینکه سرویس آنلاین مرورگر را در تنظیمات انتخاب کنید.

### TOUCHCROSSHAIR

نام مستعار: `TCX`. صلیب نشانگر افست برای نقشه‌کشی با انگشت، تا نوک انگشت نقطهٔ انتخابی را نپوشاند. وقتی روشن است، یک انگشت روی نقشه انتخاب نمی‌کند: صلیبی را حرکت می‌دهد که بالای انگشت و کنار آن قرار دارد. اسنپ‌های شیء و ردیابی صلیب را دنبال می‌کنند. برداشتن انگشت چیزی انتخاب نمی‌کند و صلیب را همان‌جا می‌گذارد. برای انتخاب، دکمهٔ {{ui:Click}} در گوشهٔ نقشه را فشار دهید، یا با انگشت دوم جایی از نقشه ضربه بزنید. هنگام حرکت انگشت دیگر، {{ui:Click}} را نگه دارید تا بکشید (پنجرهٔ انتخاب، کمند، دستگیره). انگشتی که ثابت نگه داشته شود، یا دکمهٔ {{ui:Enter}}، همان Enter است. دو انگشت مانند قبل پن و زوم می‌کنند. نزدیک لبهٔ پایین و لبهٔ دور، صلیب به انگشت نزدیک می‌شود تا هر بخش نقشه قابل دسترسی باشد. قلم و ماوس همیشه مستقیم انتخاب می‌کنند.

{{cmd:TOUCHCROSSHAIR}} وضعیت را می‌گوید و `ON`، `OFF`، `Auto` (فقط جایی که انگشت تنها اشاره‌گر است، پس روی رایانه با ماوس خاموش است)، `Distance` (فاصلهٔ صلیب از انگشت، 24 تا 240 پیکسل) یا `Side` (`Left`: بالا و چپ، برای دست راست؛ `Right` برای دست چپ؛ دکمه‌ها به گوشهٔ دیگر می‌روند) را می‌پرسد. همین انتخاب‌ها در تنظیمات › CadCraft هستند، و روی دستگاهی با صفحهٔ لمسی، نوار وضعیت یک کلید {{ui:Offset crosshair}} دارد. انتخاب‌ها در همین مرورگر نگه داشته می‌شوند.

### WHOHAS

می‌گوید چه کسی یک نقشه را باز دارد. در CadCraft Studio روی یک رایانه، باز کردن یک DWG یا DXF کنارش یک فایل قفل کوچک می‌نویسد (`Plan.dwg.cclock`: چه کسی، از چه زمانی، کدام نسخه)، هر یک دقیقه تازه می‌کند تا وقتی نقشه باز است، و هنگام بستن نقشه آن را برمی‌دارد. باز کردن نقشه‌ای که شخص دیگری باز دارد می‌گوید چه کسی و از چه زمانی، و {{ui:Open read-only}} (سپس Save یک نام تازه می‌خواهد)، {{ui:Open anyway}} (آن شخص در تازه‌سازی بعدی‌اش خبردار می‌شود) یا {{ui:Cancel}} را پیشنهاد می‌کند. ذخیره روی فایلی که کس دیگری باز دارد، اول می‌پرسد. قفلی که پنج دقیقه تازه نشده باشد، کهنه تلقی می‌شود: نسخهٔ دیگر بدون ذخیره بسته شده، یا رایانه خواب است.

{{cmd:WHOHAS}} می‌پرسد `Current` (نقشهٔ باز)، `File` (یکی را انتخاب کنید)، `FOlder` (یک پوشه را انتخاب کنید: هر نقشه‌ای در آن که جایی باز است فهرست می‌شود)، `Path` (یک مسیر کامل تایپ کنید) یا `Name` (نامی که دیگران می‌بینند؛ نام حساب شما وقتی وارد شده‌اید). Studio فقط به پوشه‌هایی که شما انتخاب کرده‌اید دسترسی دارد: برای نقشه‌ای که از پوشه‌ای باز شده که هرگز انتخاب نشده، یک بار می‌گوید که نمی‌تواند نقشه را باز بودن ثبت کند؛ `FOlder` پوشه را انتخاب می‌کند، و قفل‌ها از آن به بعد آنجا کار می‌کنند. قفل یادداشتی برای مردم است، نه مانع: برنامهٔ دیگری هنوز می‌تواند فایل را بنویسد. در مرورگر پوشه‌ای برای نگاه کردن وجود ندارد، و فرمان این را می‌گوید.

### OVERKILL

اشیای تکراری را پاک می‌کند و خط‌ها و کمان‌های هم‌پوشان را مرتب می‌کند، برای نقشه‌هایی که با خطوط دوبله می‌رسند. `Select objects to clean up`، {{key:Enter}}، سپس دوباره {{key:Enter}} تا با تنظیمات نشان‌داده‌شده پاک‌سازی کند، یا یکی را اول تغییر دهید:

- `Tolerance`: دو مختصات چقدر نزدیک باشند تا یکسان حساب شوند (0.000001 برای شروع؛ 0 یعنی دقیقاً یکسان).
- `Ignore`: خواصی که ممکن است بین دو شیء که در غیر این صورت یکسان‌اند فرق کنند. یک نام تایپ کنید تا روشن شود: `Color`، `LAyer`، `LType`، `ltScale`، `LWeight`، `THickness`، `TRansparency`، یا `None` / `All`. {{key:Enter}} وقتی تمام شد.
- `Overlap`: روشن یا خاموش. وقتی روشن است، خط‌های روی یک خط راست که هم‌پوشانی دارند یک خط می‌شوند (خطی که داخل خط دیگری است ساده حذف می‌شود)، و کمان‌های روی یک دایره که هم‌پوشانی دارند یک کمان می‌شوند؛ کمان‌هایی که یک دور کامل را می‌بندند دایره می‌شوند، و کمانی که روی یک دایره است حذف می‌شود.
- `Ends`: روشن یا خاموش. وقتی روشن است، خط‌های روی یک خط راست و کمان‌های روی یک دایره که فقط انتها به انتها به هم می‌رسند یک قطعه می‌شوند.

هر نوع شیء برای تکراری بودن بررسی می‌شود: دو شیء تکراری‌اند وقتی هندسه‌شان در حد رواداری یکسان باشد و لایه، رنگ، نوع خط، مقیاس نوع خط، ضخامت خط، ضخامت، شفافیت و ارتفاع‌شان یکی باشد (منهای مواردی که نادیده گرفته‌اید). خط‌ها و پلی‌لاین‌های باز هم وقتی برعکس کشیده شده باشند تطبیق می‌کنند. فرمان تعداد اشیای بررسی‌شده و حذف‌شده را گزارش می‌دهد: تکراری‌ها، قطعه‌های هم‌پوشانی که ادغام شدند، قطعه‌های انتها به انتها که پیوستند. یک {{cmd:UNDO}} همه را برمی‌گرداند. تنظیمات تا بستن پنجرهٔ نقشه باقی می‌مانند.

اشیای روی لایه‌های قفل‌شده و اشیای پنهان را دست‌نخورده می‌گذارد. خط‌هایی با ارتفاع (Z) را ادغام نمی‌کند (تکراری‌های دقیقشان هنوز حذف می‌شوند)، و قطعه‌های داخل یک پلی‌لاین را لمس نمی‌کند (نازک نمی‌شوند)، و خطی که روی قطعهٔ پلی‌لاین قرار دارد، و پلی‌لاین بسته‌ای که برعکس کشیده شده را.

### DRAWORDER

تغییر می‌دهد کدام اشیا جلوتر کشیده شوند. `Select objects to re-order`، {{key:Enter}}، سپس `Above objects`، `Under objects`، `Front` یا `Back` ({{key:Enter}} = `Back`). `Above objects` و `Under objects` اشیای مرجع را می‌پرسند: انتخاب درست جلوی جلوترین آن‌ها، یا درست پشت عقب‌ترین‌شان می‌رود. اشیای انتخاب‌شده ترتیب خودشان را بین خودشان نگه می‌دارند. یک مرحلهٔ واگرد. ترتیب در DWG و DXF با نقشه ذخیره می‌شود، که همان ترتیبی است که اشیا نوشته می‌شوند.

روی صفحه، CadCraft نواحی پرشده (هاشورهای جامد، پلی‌لاین‌های پهن، ماسک‌ها) را اول می‌کشد، سپس خطوط، سپس متن، تا متن همیشه روی پرشدگی خوانده شود؛ ترتیب ترسیم بین اشیای پرشده و بین تصاویر دیده می‌شود. برنامه‌های دیگری که فایل را باز می‌کنند، هر شیء را به ترتیب ذخیره‌شده می‌کشند.

### TEXTTOFRONT

متن، اندازه‌گذاری و خط‌های راهنما را جلوی همه چیز دیگر در فضای باز می‌آورد: `Text`، `Dimensions`، `Leaders` یا `All` ({{key:Enter}} = `All`). یک مرحلهٔ واگرد. وقتی چیزی نباشد، یا از پیش در جلو باشند، این را می‌گوید.

### HATCHTOBACK

هر هاشور در فضای باز را پشت همه چیز دیگر می‌فرستد، تا پرشدگی‌ها خطوط و متن را در فایل ذخیره‌شده نپوشانند. بدون پرسش. یک مرحلهٔ واگرد.

### ISOLATEOBJECTS

نام مستعار: `ISOLATE`. فقط اشیای انتخاب‌شده را نشان می‌دهد: هر چیز دیگر در فضای باز تا {{cmd:UNISOLATEOBJECTS}} از دید خارج می‌شود. برخلاف {{cmd:LAYISO}} روی اشیایی که انتخاب می‌کنید کار می‌کند، با هر لایه‌ای که داشته باشند، و هیچ لایه‌ای را تغییر نمی‌دهد. اشیای پنهان کشیده، انتخاب، اسنپ، زوم یا پلات نمی‌شوند، و فرمان‌هایی که `ALL` می‌گیرند از آن‌ها عبور می‌کنند. آنچه وقتی اشیا جداسازی شده‌اند می‌کشید، مانند همیشه نشان داده می‌شود.

این فقط برای همین نشست است: هیچ‌چیزی از آن با نقشه ذخیره نمی‌شود، یک مرحلهٔ واگرد نیست، و باز کردن دوبارهٔ نقشه همه‌چیز را نشان می‌دهد. وقتی اشیایی پنهان‌اند، نوار وضعیت دکمه‌ای با تعدادشان نشان می‌دهد؛ برای نمایش دوباره روی آن کلیک کنید.

### HIDEOBJECTS

اشیای انتخاب‌شده را تا {{cmd:UNISOLATEOBJECTS}} پنهان می‌کند. همان قواعد {{cmd:ISOLATEOBJECTS}}: فقط برای نشست، ذخیره نمی‌شود، یک مرحلهٔ واگرد نیست.

### UNISOLATEOBJECTS

نام‌های مستعار: `UNISOLATE`، `UNHIDE`. هر شیئی را که {{cmd:ISOLATEOBJECTS}} یا {{cmd:HIDEOBJECTS}} پنهان کرده دوباره نشان می‌دهد، و می‌گوید چندتا برگشتند.

### LAYLOCKFADE

تنظیم می‌کند اشیای روی لایه‌های قفل‌شده چگونه دیده شوند و آیا کلیک به آن‌ها می‌رسد. وضعیت فعلی را می‌گوید، سپس می‌گیرد:

- عددی از 0 تا 90: میزان کم‌رنگی بر حسب درصد (50 برای شروع). 0 کم‌رنگی را خاموش می‌کند.
- `ON` یا `OFF`: کم‌رنگی روشن یا خاموش، با حفظ میزان.
- `Pick`، سپس `Yes` یا `No`: آیا کلیک وقتی فرمانی اجرا نمی‌شود می‌تواند اشیای روی لایه‌های قفل‌شده را انتخاب کند؟ `No` (پیش‌فرض): اصلاً نمی‌توان آن‌ها را انتخاب کرد. `Yes`: کلیک یا پنجره آن‌ها را انتخاب می‌کند تا {{ui:Properties}} بتواند نشانشان دهد؛ همچنان نمی‌توان تغییرشان داد، و پرسش `Select objects` خود یک فرمان هرگز آن‌ها را نمی‌گیرد.

اسنپ‌های شیء در هر دو حالت اشیای روی لایه‌های قفل‌شده را پیدا می‌کنند. پلات‌ها هرگز کم‌رنگ نمی‌شوند. هر دو تنظیم از آن شما هستند، نه از نقشه، و در {{ui:Settings}} زیر {{ui:Locked layers}} هم هستند.

### BURST

ارجاع‌های بلوک را تجزیه می‌کند و آنچه ویژگی‌هایشان می‌گویند نگه می‌دارد. `Select block references to burst`، {{key:Enter}}: هر ارجاع با اشیای بلوک جایگزین می‌شود، و مقدار هر ویژگی قابل‌مشاهده به متن ساده روی لایهٔ همان ویژگی تبدیل می‌شود (ویژگی روی لایهٔ 0 روی لایهٔ ارجاع می‌افتد، مانند بقیهٔ اشیای بلوک روی لایهٔ 0). ویژگی‌های نامرئی حذف می‌شوند. بلوکی که داخل بلوک است، ارجاع بلوک باقی می‌ماند. یک مرحلهٔ واگرد؛ تعداد ارجاع‌های تجزیه‌شده و مقادیر ویژگی‌های تبدیل‌شده به متن را گزارش می‌دهد.

ارجاع به نقشهٔ پیوندی را با نام رد می‌کند (ابتدا آن را الحاق کنید، یا با {{cmd:NCOPY}} از آن کپی کنید)، و اشیای انتخاب‌شدهٔ دیگر را دست‌نخورده می‌گذارد. برای ارجاع‌های بلوک، {{cmd:EXPLODE}} همان اشیا را می‌دهد؛ {{cmd:BURST}} فقط ارجاع‌های بلوک را می‌گیرد و متن ویژگی را می‌شمارد.

### TXT2MTXT

نام مستعار: `T2M`. متن‌های تک‌خطی را به یک متن چندخطی تبدیل می‌کند. `Select single-line text to join`، {{key:Enter}}، سپس `Paragraph` (خط‌ها به هم می‌پیوندند و در عرض پهن‌ترین خط می‌شکنند) یا `Lines` (هر متن خط جداگانه‌ای می‌ماند)؛ {{key:Enter}} آخرین استفاده‌شده را می‌گیرد. خط‌ها از بالا به پایین، و سپس از چپ به راست، در امتداد جهت متن بالایی مرتب می‌شوند. پاراگراف از گوشهٔ بالا‌چپ متن بالایی آویزان است و ارتفاع، دوران، سبک، لایه و رنگ آن را می‌گیرد. یک مرحلهٔ واگرد.

متنی که از پیش متن چندخطی است، متن خالی و اشیای دیگر در انتخاب دست‌نخورده می‌مانند، و فرمان تعدادشان را می‌گوید.

### NCOPY

اشیا را از یک ارجاع بلوک یا نقشهٔ پیوندی به داخل نقشه کپی می‌کند، بدون تجزیهٔ هیچ‌چیز. `Pick an object inside a block reference or a linked drawing`: شیئی که نزدیک انتخاب شماست، همان‌جا که دیده می‌شود کپی می‌شود، هرقدر هم که در بلوک‌ها عمیق باشد؛ بیشتر انتخاب کنید، سپس {{key:Enter}}. سپس `Base point to move the copies`: {{key:Enter}} آن‌ها را سر جایشان می‌گذارد، یا یک نقطهٔ مبنا و یک نقطهٔ دوم بدهید. کل فرمان یک مرحلهٔ واگرد است.

کپی لایه‌ای را می‌گیرد که روی آن دیده می‌شود: شیئی روی لایهٔ 0 داخل بلوک، روی لایهٔ ارجاعی که در آن بود می‌افتد، و رنگ ByBlock رنگ آن ارجاع می‌شود. از یک نقشهٔ پیوندی، لایهٔ `Plan|Walls` می‌شود `Plan$0$Walls` (نامی که پیوند به آن می‌دهد)، با رنگ، نوع خط و ضخامت لایهٔ پیوندی. مقدار یک ویژگی به‌صورت متن کپی می‌شود. ارجاع‌های بلوک روی لایه‌های قفل‌شده را نمی‌توان انتخاب کرد.

### FLATTEN

ارتفاع (Z) و ضخامت اشیای انتخاب‌شده را به 0 می‌برد. `Select objects to flatten`، {{key:Enter}}. اشیای داخل تعریف بلوک‌هایی را که انتخاب استفاده می‌کند (و بلوک‌های داخل آن‌ها) هم مسطح می‌کند، پس هر ارجاع به آن بلوک‌ها تغییر می‌کند؛ نقشه‌های پیوندی دست‌نخورده می‌مانند. یک مرحلهٔ واگرد؛ گزارش می‌دهد چند شیء تغییر کرد، و می‌گوید وقتی هیچ‌کدام ارتفاع یا ضخامت نداشتند.

آنچه CadCraft از بعد سوم در نقشهٔ دوبعدی نگه می‌دارد: ارتفاع روی دایره‌ها، کمان‌ها، بیضی‌ها، نقطه‌ها، متن، ارجاع بلوک، هاشورها، خط‌های راهنما و پلی‌لاین‌ها (ارتفاعشان یا همان ارتفاع)، ارتفاع در هر انتهای خط، و ضخامت روی خط‌ها، دایره‌ها، کمان‌ها، پلی‌لاین‌ها، نقطه‌ها و متن، همان‌طور که فایل داشت. {{cmd:FLATTEN}} دقیقاً همان‌ها را پاک می‌کند. به مدل سه‌بعدی روی زبانهٔ 3D، وجه‌ها یا جسم‌های سه‌بعدی دست نمی‌زند، و شیئی که در یک صفحهٔ کج کشیده شده از پیش، وقتی فایل باز شد به صفحهٔ نقشه آورده شده بود.

### BREAKLINE

خطی با نماد شکست می‌کشد، برای نمایی که کوتاه بریده شده. اندازه و امتداد فعلی را می‌گوید، سپس `First point of the break line` (یا `Size` / `Extension` برای تغییر آن‌ها پیش از آن)، `Second point`، و `Where the break symbol sits`: در امتداد خط کلیک کنید، یا {{key:Enter}} برای وسط. نتیجه یک پلی‌لاین روی لایهٔ فعلی است: خط، که از هر نقطه به اندازهٔ امتداد فراتر می‌رود، با یک خط Z‌شکل به اندازهٔ همان اندازه و نصف طولش.

`Size` و `Extension` به‌عنوان تنظیمات شما به‌یاد سپرده می‌شوند (اندازه از دوبرابر ارتفاع متن اندازه‌گذاری ضربدر مقیاس اندازه‌گذاری شروع می‌شود؛ امتداد از نصف اندازه). {{key:Enter}} فرمان را تکرار می‌کند.

### AUDIT

نقشهٔ باز را از نظر آسیب بررسی و تعمیر می‌کند. {{cmd:AUDIT}} هر شیء در مدل، روی برگه‌ها و داخل بلوک‌ها و جدول لایه‌ها را بررسی می‌کند، و آنچه پیدا می‌کند را بر اساس نوع فهرست می‌کند:

- عددهایی که نامتناهی نیستند یا به‌طرز مضحکی بزرگ‌اند؛
- اشیای بدون اندازه: خط با طول صفر، دایره با شعاع صفر، پلی‌لاین با یک رأس، متنی بدون حرف یا ارتفاع، ارجاع بلوک با مقیاس صفر؛
- اشیایی روی لایه‌ای که نقشه ندارد؛ ارجاع به بلوکی که وجود ندارد؛ نام‌های سبک متن و اندازه‌گذاری و نام‌های نوع خطی که در نقشه نیستند؛
- بلوک‌هایی که خودشان را دربرمی‌گیرند، مستقیم یا از طریق بلوک‌های دیگر؛
- اشیایی که شناسه، کلید یا دستگیرهٔ فایل مشترک دارند؛
- اندازه‌گذاری‌هایی که نقاطی را که از آن‌ها اندازه گرفته‌اند ندارند، و هاشورهایی که مرزشان طرح بسته نیست.

سپس می‌پرسد `Fix them? [Yes/No]`. `No` چیزی را تغییر نمی‌دهد. `Yes` همه‌چیز را در یک مرحلهٔ واگرد تعمیر می‌کند: آنچه نمی‌توان کشید برداشته می‌شود (عددهای بد، بی‌اندازه، بلوک گم‌شده، اندازه‌گذاری خراب، هاشوری بدون مرز قابل استفاده، ارجاعی که حلقهٔ بلوک‌ها را می‌بندد)؛ لایه‌ای که گم شده ساخته می‌شود؛ نام‌های ناشناختهٔ سبک و نوع خط به پیش‌فرض برمی‌گردند؛ کلید مشترک جایگزین می‌شود. تعداد اشیای برداشته‌شده و تعمیرشده را چاپ می‌کند. همین یافته‌ها در پنل Problems ظاهر می‌شوند، هرکدام با {{ui:Repair}} خودش.

هیچ‌چیز را رد نمی‌کند، اما فقط آنچه خود CadCraft می‌کشد را بررسی می‌کند: داده‌هایی که برای برنامه‌های دیگر نگه داشته شده (جسم‌های سه‌بعدی، اشیای OLE) باز نمی‌شوند.

### RECOVER

یک DXF یا DWG آسیب‌دیده را باز می‌کند. {{cmd:RECOVER}} فایل را می‌پرسد، آنچه را می‌توان خواند می‌خواند به‌جای رد کردن فایل، آنچه رد شد یا فرض شد را فهرست می‌کند، سپس نقشه را مانند {{cmd:AUDIT}} با `Yes` بررسی و تعمیر می‌کند.

- DXF: خط‌هایی که بخشی از یک جفت کد و مقدار نیستند رد می‌شوند تا جفت‌ها دوباره جور شوند؛ بخشی که پایان ندارد بسته می‌شود؛ فایلی که کوتاه بریده شده تا همان بریدگی خوانده می‌شود؛ DXF باینری که کوتاه بریده شده تا آخرین مقدار کامل خوانده می‌شود. وقتی بخشی، بلوکی یا شیئی هنوز خوانده نشود، کنار گذاشته و نام برده می‌شود و خواندن از آن گذر می‌کند.
- DWG: اشیایی که بررسی‌هایشان جور درنمی‌آید یا رمزگشایی نمی‌شوند کنار گذاشته می‌شوند، و فهرست گم‌شدهٔ اشیا از روی داده‌های شیء بازسازی می‌شود.

فایل روی دیسک تغییر نمی‌کند. نقشهٔ بازیابی‌شده ذخیره‌نشده باز می‌شود: آن را با نام تازه ذخیره کنید. فایلی که هیچ‌چیزی از آن خوانده نشود، با دلیلش رد می‌شود.

### LEGACYTEXT

متن تایپ‌شده با قلم‌های قدیمی ویتنامی 8 بیتی را به Unicode تبدیل می‌کند. نام‌های کوتاه `TEXTTOUNICODE` و `VNTEXT`.

نقشه‌های قدیمی ویتنامی متنشان را به‌صورت نویسه‌های لاتین نگه می‌دارند که فقط قلم آن‌ها را به ویتنامی تبدیل می‌کند: متن TCVN3 در قلم‌های ABC (`.VnTime`، `.VnArial`، و قلم‌های حروف بزرگ که نامشان به `H` ختم می‌شود)، و متن VNI در قلم‌های VNI (`VNI-Times`). CadCraft چنین متنی را به‌محض باز شدن نقشه همان‌طور که خوانده می‌شود نشان می‌دهد، با قلم سبک متنش، شیء، یا یک بخش از متن چندخطی؛ فایل هنوز نویسه‌های قدیمی را دارد.

{{cmd:LEGACYTEXT}} می‌گوید در هر رمزگذاری چند متن پیدا کرده و می‌پرسد `Convert … to Unicode?`. `Yes` همه را بازنویسی می‌کند (مدل، برگه‌ها، بلوک‌ها، مقادیر و تعریف ویژگی‌ها) و به سبک‌های متن یک قلم Unicode می‌دهد (Times New Roman، Arial یا Courier New بسته به نوع قلم قدیمی)، در یک مرحلهٔ واگرد. قالب‌بندی داخل متن چندخطی نگه داشته می‌شود.

وقتی هیچ متنی از یک قلم شناخته‌شده استفاده نکند (سبکی که نام قلمش را از دست داده)، `Read selected texts as [Tcvn3/Vni/None]` را می‌پرسد: رمزگذاری را انتخاب کنید و متن‌ها را انتخاب کنید. متنی که از پیش Unicode است دست‌نخورده می‌ماند. تعریف‌های متنی اندازه‌گذاری و متن خط راهنمای چندگانه تبدیل نمی‌شوند.
