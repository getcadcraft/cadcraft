---
title: کمانڈ حوالہ
summary: CadCraft ڈرافٹنگ ایپ کی ہر کمانڈ، اس کے مختصر ناموں، اس کے سوالات، آپشنز اور ڈیفالٹس کے ساتھ۔
keywords: کمانڈز, ایلیئس, کمانڈ لسٹ, area, perimeter, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

کمانڈ کا نام یا مختصر نام ٹائپ کریں اور {{key:Enter}} یا {{key:Space}} دبائیں۔ حروف کا بڑا یا چھوٹا ہونا فرق نہیں کرتا، اور آغاز میں `_`، `-`، `.` یا `'` نظر انداز ہوتے ہیں۔ کمانڈ لائن کی ہسٹری میں ہر کمانڈ کی مختصر فہرست چھاپنے کے لیے `HELP` (یا `?`) ٹائپ کریں؛ یہ مدد کا صفحہ کھولنے کے لیے {{key:F1}} دبائیں۔

پرامپٹس کیسے پڑھیں: آپشنز چوکور بریکٹ میں ہیں، اور آپ ان کے بڑے حروف ٹائپ کر کے ایک چنتے ہیں (`D` یعنی Diameter)۔ ڈیفالٹ زاویائی بریکٹ میں ہے؛ اسے قبول کرنے کے لیے {{key:Enter}} دبائیں۔ جہاں نقطہ مانگا جائے، آپ کلک کر سکتے ہیں یا [کوآرڈینیٹ اور فاصلہ درج کریں](topic:coordinate-entry) میں کوئی بھی شکل ٹائپ کر سکتے ہیں۔ جہاں فاصلہ مانگا جائے، آپ عدد ٹائپ کر سکتے ہیں یا دو نقطوں پر کلک کر سکتے ہیں۔

جہاں نقطہ یا شے درکار ہو اور کوئی ڈیفالٹ نہ ہو، وہاں {{key:Enter}} دبانے سے کمانڈ ختم ہوتی ہے۔ {{key:Esc}} اسے منسوخ کرتا ہے۔ کمانڈ جو بھی کرے وہ ایک کالعدم مرحلہ ہے۔

## ڈرا

### LINE

مختصر نام: `L`۔ سیدھے حصے، ہر ایک اپنی شے۔

- `Specify first point` (Enter: آخری دیے گئے نقطے سے شروع)
- `Specify next point [Undo]`، بار بار۔ دو حصوں کے بعد: `[Undo/Close]`۔
- `U` آخری حصہ واپس لیتا ہے، `C` پہلے نقطے پر بند کر کے ختم کرتا ہے۔ Enter ختم کرتا ہے۔

### PLINE

مختصر نام: `PL`۔ لکیروں اور قوسوں کے حصوں کی ایک پولی لائن۔

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (دو حصوں کے بعد Close)
- `A` قوسوں پر جاتا ہے: `Specify endpoint of arc [Line/CLose/Undo]`۔ ہر قوس پہلے حصے کے ساتھ مماس جاری رہتی ہے۔ `L` لکیروں پر واپس، `CL` قوس کے ساتھ بند کرتا ہے۔
- Enter ختم کرتا ہے؛ پولی لائن کھلی رہتی ہے۔

### CIRCLE

مختصر نام: `C`۔

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`؛ `D` پوچھتا ہے `Specify diameter of circle`۔
- `2P`: ڈایامیٹر کے دو سرے۔ `3P`: دائرے پر تین نقطے۔
- `T` (یا کمانڈ `TTR`، اور {{ui:ڈرا}} › {{ui:مزید}} › {{ui:دائرہ: مماس، مماس، رداس}}): `Specify point on object for first tangent of circle`، پھر دوسرا، پھر رداس (Enter: آخری)۔ دائرہ دونوں اشیاء کو چھوتا ہے (لکیریں، قوسیں، دائرے، پولی لائن کے حصے، بلاکس کے اندر بھی)؛ جو دائرے یہ کرتے ہیں ان میں سے وہ جو آپ کے نقطوں کے قریب ہو۔ کوئی فٹ نہ ہو تو «Circle does not exist» کہتا ہے۔
- `TTT` (یا {{ui:ڈرا}} › {{ui:مزید}} › {{ui:دائرہ: مماس، مماس، مماس}}): تین اشیاء؛ وہ دائرہ جو تینوں کو چھوئے، آپ کے نقطوں کے قریب (تین لکیریں اندرونی یا بیرونی دائرہ دیتی ہیں، آپ کے کلک پر منحصر)۔

### ARC

مختصر نام: `A`۔

- `Specify start point of arc [Center]`، `Specify second point of arc`، `Specify end point of arc`: تین نقطوں سے قوس۔
- `C`: `Specify center point of arc`، `Specify start point of arc`، `Specify end point of arc`۔ قوس شروع سے اختتام تک خلاف گھڑی چلتی ہے۔

### RECTANG

مختصر نام: `REC`، `RECTANGLE`۔ ایک بند پولی لائن۔

- `Specify first corner point`، `Specify other corner point`۔ دوسرے کونے کے لیے `@width,height` ٹائپ کریں۔

### POLYGON

مختصر نام: `POL`۔ ایک بند پولی لائن کے طور پر باقاعدہ کثیر الاضلاع۔

- `Enter number of sides <4>` (3 تا 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: کلک کریں یا نقطہ ٹائپ کریں؛ اس کا فاصلہ سائز مقرر کرتا ہے اور سمت کثیر الاضلاع کو گھماتی ہے۔

### ELLIPSE

مختصر نام: `EL`۔

- `Specify axis endpoint of ellipse [Center]`، `Specify other endpoint of axis`، `Specify distance to other axis`
- `C`: `Specify center of ellipse`، `Specify endpoint of axis`، پھر دوسرے محور کا فاصلہ۔
- `I` (`Isocircle`، صرف {{cmd:ISODRAFT}} آن ہونے پر): مرکز، پھر رداس یا `Diameter`: وہ بیضہ جو دائرہ موجودہ آئسومیٹرک پلین پر دکھاتا ہے۔

### HATCH

مختصر نام: `H`، `BH`، `BHATCH`؛ یا ٹول بار پر {{ui:ہیچ}}۔ پہلے موجودہ نمونہ، اسکیل اور زاویہ چھاپتا ہے۔

- `Pick internal point [Select objects/Pattern/SCale/Angle]`، بار بار (`Undo` ایک علاقے کے بعد): ہر کلک اس کے گرد بند علاقہ شامل کرتا ہے، اور اس کے اندر کی بند شکلیں جزیرے۔ Enter سب کو ایک ہیچ بناتا ہے۔
- `S`: `Select closed objects` (بند پولی لائنز، دائرے، بند بیضے)۔
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`۔ `SC`: `Specify pattern scale`۔ `A`: `Specify pattern angle`۔
- `G` (Gradient): بھراؤ نمونے کے بجائے گریڈینٹ ہوتا ہے۔ سوالات کے لیے {{cmd:GRADIENT}} دیکھیں۔

دیکھیں [ہیچ اور بھرے ہوئے علاقے](topic:hatch)۔

### GRADIENT

مختصر نام: `GD`۔ ایک یا دو رنگوں کے گریڈینٹ سے علاقہ بھرتا ہے۔ پہلے گریڈینٹ کے سوال پوچھتا ہے، پھر {{cmd:HATCH}} کی طرح آگے بڑھتا ہے (`Pick internal point`، بند اشیاء کے لیے `S`، ختم کرنے کے لیے {{key:Enter}})۔

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`، بار بار؛ ہر بار موجودہ گریڈینٹ چھاپتا ہے۔
- `T`: `LINEAR`، `CYLINDER`، `SPHERICAL`، `HEMISPHERICAL`، `CURVED`، یا ان میں سے کوئی الٹا (`INVCYLINDER`، `INVSPHERICAL`، `INVHEMISPHERICAL`، `INVCURVED`)۔ پہلے حروف کافی ہیں۔
- `O`: ایک رنگ، پھر اس کا ٹنٹ 0 تا 1 (0 سیاہ کرتا ہے، 0.5 خود رنگ، 1 سفید)۔ `TW`: پہلا اور دوسرا رنگ۔ رنگ 1 تا 255 کا عدد، `255,128,0` جیسے تین عدد، یا `#rrggbb` ہے۔
- `A`: گریڈینٹ کا زاویہ۔ `C`: مرکزی Yes یا No (No درمیان کو ایک طرف لے جاتا ہے)۔
- نامعلوم رنگ یا قسم، اور 0 تا 1 سے باہر ٹنٹ رد ہوتے ہیں۔

{{cmd:HATCHEDIT}} `G` اور Properties (Gradient) بعد میں گریڈینٹ بدلتے ہیں، یا کسی بھی ہیچ کو گریڈینٹ بناتے ہیں۔ گریڈینٹ اسکرین اور پلاٹ پر دکھتا ہے۔ DWG 2004 اور بعد کی فائلیں اسے اصل گریڈینٹ ہیچ کے طور پر رکھتی ہیں؛ DXF 2000 اور DWG 2000 CadCraft کے لیے رکھتی ہیں، اور دوسرے پروگرام پہلے رنگ کا ٹھوس بھراؤ دیکھتے ہیں۔

### HATCHGENERATEBOUNDARY

مختصر نام: `HGB`۔ ایک ہیچ سے اس کی حد دوبارہ بناتا ہے، جو ہیچ کا لنک ہو یا نہ ہو۔ `Select hatches` (یا پہلے سے منتخب کریں)، پھر `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`۔

- ہیچ کا ہر لوپ اس کی لیئر پر بند پولی لائن بنتا ہے؛ نئی پولی لائنز منتخب رہتی ہیں۔ منحنی کنارہ ان چھوٹے سیدھے حصوں کے طور پر واپس آتا ہے جو ہیچ رکھتی ہے۔
- Yes کے ساتھ ہیچ اپنی نئی حد کی پیروی کرتی ہے، جیسے {{cmd:HATCH}} سے بنی ہیچ۔ ایک کالعدم مرحلہ۔
- کوئی ہیچ منتخب نہ ہو تو یہ بتاتا ہے۔

### POINT

مختصر نام: `PO`؛ یا {{ui:ڈرا}} › {{ui:مزید}} › {{ui:نقطہ}}۔ ہر کلک پر ایک نقطہ شے، Enter تک۔

- `Specify a point`

### XLINE

مختصر نام: `XL`؛ یا {{ui:ڈرا}} › {{ui:مزید}} › {{ui:کنسٹرکشن لائن}}۔ دونوں طرف لامتناہی کنسٹرکشن لائنز۔ دیکھیں [کنسٹرکشن لائنز اور شعاعیں](topic:construction-lines)۔

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`، پھر ہر لکیر کے لیے `Specify through point`، Enter تک۔
- `A`: `Enter angle of construction line [Reference] <0>`؛ `R` پہلے `Select a line object` پوچھتا ہے۔
- `B`: `Specify angle vertex point`، `Specify angle start point`، پھر ہر لکیر کے لیے `Specify angle end point`۔
- `O`: `Specify offset distance [Through] <Through>`، پھر ہر لکیر کے لیے `Select a line object` اور `Specify side to offset` (یا `Specify through point`)۔

### RAY

کوئی مختصر نام نہیں؛ یا {{ui:ڈرا}} › {{ui:مزید}} › {{ui:شعاع}}۔ `Specify start point`، پھر ہر شعاع کے لیے `Specify through point`، Enter تک۔

### TEXT

مختصر نام: `DT`، `DTEXT`؛ یا ٹول بار پر {{ui:متن}}۔ ایک لائن کا متن؛ ہر لائن اپنی شے۔

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`، پھر `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`، بار بار: ہر Enter اگلی لائن نیچے شروع کرتا ہے۔ خالی لائن پر Enter ختم کرتا ہے۔ {{key:Space}} یہاں خالی جگہ لکھتا ہے۔

### DIVIDE

مختصر نام: `DIV`۔ {{cmd:DIVIDE}} ایک لکیر، قوس، دائرے، پولی لائن، spline یا بیضے پر ایسے نشانات رکھتا ہے جو اسے برابر حصوں میں تقسیم کریں۔ شے چنیں، پھر حصوں کی تعداد دیں (2 تا 32767)۔ کھلی شے کو حصوں سے ایک کم نشان ملتا ہے؛ بند شے کو اس کے آغاز پر بھی نشان ملتا ہے۔ شے خود نہیں کٹتی۔ نشان نقطے ہیں؛ `Block` اس کے بجائے اس ڈرائنگ کا بلاک مانگتا ہے اور پوچھتا ہے کہ وہ شے کے ساتھ گھومے یا نہیں۔ spline اور بیضے کی لمبائیاں چھوٹے کوردوں کے ساتھ ناپی جاتی ہیں۔ ٹیکسٹ، ہیچ اور لمبائی کے بغیر اشیاء رد ہوتی ہیں۔

### MEASURE

مختصر نام: `ME`۔ {{cmd:MEASURE}} کسی لکیر، قوس، دائرے، پولی لائن، spline یا بیضے پر ہر دی گئی لمبائی پر ایک نشان رکھتا ہے، اس سرے سے گنتے ہوئے جو آپ کے کلک کے قریب ہو (بند شے: اس کے آغاز سے)۔ لمبائی ٹائپ کر کے یا دو نقطوں سے دیں۔ کھلی شے کے دور والے سرے پر نشان نہیں ہوتا۔ `Block` ہر نشان پر نقطے کے بجائے بلاک رکھتا ہے۔ 0 کی لمبائی، شے سے لمبی لمبائی، اور 32767 سے زیادہ نشان رد ہوتے ہیں۔

### BOUNDARY

مختصر نام: `BO`، `BPOLY`۔ {{cmd:BOUNDARY}} اس علاقے کے گرد بند پولی لائن بناتا ہے جس میں آپ کا چنا ہوا نقطہ ہے، جو بھی لکیریں، قوسیں، دائرے، پولی لائنز اور منحنی اسکرین پر اسے گھیریں ان سے۔ قوس پر پڑے حصے قوس کے حصے بن کر واپس آتے ہیں؛ بیضوں اور splines کے ٹکڑے چھوٹے سیدھے حصوں میں۔ `Islands` آن ہو (شروع کی ترتیب) تو اس کے اندر ہر بند علاقے کو بھی اپنی پولی لائن ملتی ہے۔ نقطے چنتے رہیں؛ Enter ختم کرتا ہے۔ گھیرنے والی اشیاء جیسی ہیں ویسی رہتی ہیں۔ کوئی بند علاقہ نقطے کو نہ گھیرے تو یہ بتاتا ہے۔

### BLEND

{{cmd:BLEND}} دو کھلے منحنیوں کے سروں کے درمیان ایک spline بناتا ہے۔ جوڑنے کے لیے ہر منحنی کو اس کے سرے کے قریب چنیں۔ `CONtinuity` `Tangent` (spline دونوں منحنیوں کی سمت میں نکلتی اور پہنچتی ہے) یا `Smooth` (وہ ان کا مڑنا بھی لیتی ہے) چنتا ہے؛ یہ انتخاب سیشن کے لیے رہتا ہے۔ دونوں منحنی نہیں بدلتے۔ بند اشیاء اور وہ دو سرے جو پہلے ہی ملتے ہوں رد ہوتے ہیں۔

### REGION

مختصر نام: `REG`۔ {{cmd:REGION}} بند اشیاء کو ریجنز میں بدلتا ہے: ہموار علاقے جنہیں آپ جوڑ، کاٹ اور ناپ سکتے ہیں۔ دائرے، بند پولی لائنز، بند بیضے یا بند splines، یا وہ لکیریں، قوسیں اور کھلی پولی لائنز جو سرے سے سرا ملا کر لوپ بنائیں، چنیں؛ ہر لوپ ایک ریجن بنتا ہے اور اپنی اصل اشیاء کی جگہ لیتا ہے۔ قوسیں قوس رہتی ہیں؛ بیضے اور splines چھوٹے سیدھے حصوں میں۔ جو بند نہ ہو اور کوئی لوپ نہ بنائے وہ ویسا ہی رہتا ہے، اور کمانڈ گنتی بتاتا ہے۔ ڈرائنگ میں ایک ریجن ایک یا زیادہ بند پولی لائنز ہیں جو بے نام گروپ میں ہیں، تو ایک کلک پورا ریجن منتخب کرتا ہے۔

ریجنز ہوں تو 2D ٹیب پر {{cmd:UNION}}، {{cmd:SUBTRACT}} اور {{cmd:INTERSECT}} ریجنز پر کام کرتے ہیں: `UNION` منتخب ریجنز کو ایک کرتا ہے، `SUBTRACT` پہلے وہ ریجنز پوچھتا ہے جن سے گھٹانا ہے اور پھر وہ جو گھٹیں (سوراخ ریجن کا حصہ رہتا ہے)، `INTERSECT` وہ علاقہ رکھتا ہے جو سب مشترک ہو۔ ہر ایک نتیجے کا رقبہ بتاتا ہے اور ایک کالعدم مرحلہ ہے۔ کچھ نہ بچے یا کچھ مشترک نہ ہو تو رد کرتے ہیں۔ 3D ٹیب پر، اور ریجنز کے بغیر ڈرائنگ میں، یہی کمانڈز پہلے کی طرح ٹھوس اشیاء پر کام کرتی ہیں۔

## ترمیم

### MTEXT

مختصر نام: `MT`، `T`؛ یا ٹول بار پر {{ui:پیراگراف}}۔ پیراگراف ٹیکسٹ جو ایک چوڑائی پر لپیٹتا ہے، وہیں ٹائپ کیا جاتا ہے۔

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: دونوں کونوں کے درمیان چوڑائی وہ جگہ ہے جہاں متن لپیٹا جاتا ہے۔ `H` `Specify height` پوچھتا ہے، `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`، `L` `Enter line spacing factor (0.25 to 4)`، `R` `Specify rotation angle`، `W` `Specify width (0 for no wrapping)` اور دوسرا کونا چھوڑ دیتا ہے۔
- پھر ڈرائنگ پر ایک باکس کھلتا ہے: ٹائپ کریں، نیا پیراگراف {{key:Enter}}، ختم کرنے کے لیے {{key:Mod+Enter}} یا باہر کلک، منسوخ کرنے کے لیے {{key:Esc}}۔ اس کی پٹی اونچائی، لائن اسپیسنگ، چوڑائی اور ترتیب مقرر کرتی ہے۔ دیکھیں [متن اور لیبلز شامل کریں](topic:text#write-a-note-that-wraps)۔

### TEXTEDIT

مختصر نام: `ED`، `DDEDIT`؛ یا متن پر ڈبل کلک۔ `Select a text to edit`، Enter تک بار بار: ہر ایک اسی باکس میں کھلتا ہے۔ منتخب یا ڈبل کلک کیے گئے متن پر شروع ہو تو وہ ایک کو بدل کر ختم ہو جاتی ہے۔

### ERASE

مختصر نام: `E`، `DELETE`؛ یا اشیاء منتخب ہوں تو {{key:Delete}} دبائیں۔

- `Select objects` (اگر اشیاء پہلے سے منتخب ہوں تو چھوڑ دیا جاتا ہے)

### MOVE

مختصر نام: `M`۔

- `Select objects`
- `Specify base point [Displacement]`، `Specify second point`
- `D`: `Specify displacement`، `dx,dy` کی شکل میں۔

### COPY

مختصر نام: `CO`، `CP`۔ جتنے نقطے دیں اتنی نقول بناتا ہے۔

`Array` دوسرے نقطے کے پرامپٹ پر ایک قطار ایک بار میں بناتا ہے: اشیاء کی تعداد دیں (اصل ایک گنی جاتی ہے)، پھر وہ نقطہ جہاں پہلی نقل جائے؛ باقی اسی فاصلے پر آتی ہیں۔ `Fit` وہ نقطہ آخری نقل کی جگہ بناتا ہے، اور باقی درمیان میں برابر پھیلتی ہیں۔

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`، Enter تک بار بار۔ `U` آخری نقل واپس لیتا ہے۔

### ROTATE

مختصر نام: `RO`۔

- `Select objects`، `Specify base point`
- `Specify rotation angle <last angle>`: ڈگری، خلاف گھڑی مثبت؛ یا کسی نقطے پر کلک کریں تاکہ اس کی طرف گھومے۔

### SCALE

مختصر نام: `SC`۔

- `Select objects`، `Specify base point`
- `Specify scale factor`: جیسے `0.5` یا `2` لکھیں۔ کلک کیا گیا نقطہ بیس پوائنٹ سے اس کا فاصلہ عامل بنتا ہے۔

### MIRROR

مختصر نام: `MI`۔

- `Select objects`
- `Specify first point of mirror line`، `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

مختصر نام: `AL`؛ یا {{ui:ترمیم}} › {{ui:مزید}} › {{ui:الائن}}۔

- `Select objects`
- `Specify first source point`، `Specify first destination point`
- `Specify second source point (Enter to continue)`، `Specify second destination point`
- `Specify third source point (Enter to continue)`، `Specify third destination point`
- دو جوڑوں کے ساتھ: `Scale objects based on alignment points? [Yes/No] <N>`

دیکھیں [اشیاء کو الائن کریں](topic:modify-objects#align-objects)۔

### ALIGNTO

- `Select objects` (یا موجودہ انتخاب)، `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`، `To [Selection/First/Last/Point] <Selection>`؛ `P` نقطہ پوچھتا ہے۔ انتخاب باقی رہتا ہے۔

### DISTRIBUTE

- `Select objects` (کم از کم تین)، `Distribute [Horizontally/Vertically] <Horizontally>`، `Space evenly [Centers/Gaps] <Gaps>`۔ بیرونی دو وہیں رہتی ہیں؛ انتخاب باقی رہتا ہے۔

### ALIGNPANEL

مختصر نام: `ALP`؛ یا {{ui:ترمیم}} › {{ui:مزید}} › {{ui:Align and distribute}}۔ وہ پینل کھولتا ہے جو کلکس سے ALIGNTO اور DISTRIBUTE چلاتا ہے۔

### LASER

مختصر نام: `LASERCUT`؛ یا {{ui:ویو}} › {{ui:مزید}} › {{ui:لیزر…}}۔ ڈرائنگ کے اوپر Laser پینل کھولتا ہے: ہر لیئر کیا کرتی ہے (کاٹنا، اسکور، اینگریو، بھرنا، تصویر)، پیش منظر، محفوظ کرنے کے لیے GRBL G-code، اور Web Serial پر فریمنگ اور بھیجنا۔ دیکھیں [ڈرائنگ کو لیزر کو بھیجیں](topic:laser-cutting)۔

### STRETCH

مختصر نام: `S`؛ یا {{ui:کھینچیں}}۔ `Select objects to stretch`: سروں پر کراسنگ ونڈوز کھینچیں (یا `C` ٹائپ کریں) تاکہ منتقل ہوں۔ `Specify base point [Displacement]`، `Specify second point`۔ ونڈوز کے اندر کے نقطے منتقل ہوتے ہیں: لکیروں کے سرے، پولی لائن کے راس (قوس کے حصے اپنی اونچائی رکھتے ہیں)، ڈائمینشن کے نقطے؛ دائرے، بیضے، ٹیکسٹ، نقطے اور بلاکس پوری حرکت کرتے ہیں جب ان کا مرکز یا insertion point اندر ہو۔ کمانڈ سے پہلے کا انتخاب اپنی کراسنگ ونڈوز (اور لاسوز) رکھتا ہے، تو وہ اسی طرح کھینچتے ہیں۔ ونڈو کے بغیر اشیاء پوری منتقل ہوتی ہیں۔

### ARRAY، ARRAYRECT، ARRAYPOLAR

مختصر نام: `AR`؛ یا {{ui:Array}}۔ `Select objects`، پھر `Enter array type [Rectangular/POlar] <Rectangular>` (صرف ARRAY)۔

- Rectangular 4 کالم × 3 قطاروں سے شروع ہوتا ہے، اشیاء کے سائز کا 1.5 گنا فاصلہ، پیش منظر کے طور پر۔ `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` کالم اور قطاریں پوچھتا ہے، `S` کالموں اور قطاروں کے درمیان فاصلہ (منفی بائیں یا نیچے جاتا ہے)، `COL` اور `R` ہر سمت ایک۔
- Polar `Specify center point of array` پوچھتا ہے، 6 اشیاء سے شروع، پوری گردش، گھمائی ہوئی۔ `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` اشیاء، `F` بھرنے کا زاویہ (+ خلاف گھڑی، − گھڑی کے رخ)، `ROT` Yes یا No۔
- {{key:Enter}} (eXit) سادہ نقول بناتا ہے۔ ایک کالعدم مرحلہ۔
- `AS` (ASsociative) سادہ نقول اور ایک ایسی ارے کے درمیان بدلتا ہے جو قابلِ ترمیم رہے: ایک شے جسے بعد میں {{cmd:ARRAYEDIT}} سے، اس کی گرپس یا Properties سے بدلیں۔ انتخاب یاد رہتا ہے ({{cmd:ARRAYASSOCIATIVITY}})؛ شروع میں سادہ نقول ہوتی ہیں۔

### ARRAYPATH

کسی منحنی کے ساتھ نقول۔ `Select objects`، پھر `Select path curve`: لکیر، قوس، دائرہ، بیضہ، پولی لائن یا spline (وہ اشیاء نہیں جو ارے کی جا رہی ہیں)۔ راستہ اپنے اس سرے سے شروع ہوتا ہے جو اشیاء کے قریب ہو، اور پہلی شے وہیں ہوتی ہے جہاں وہ ہیں۔

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`، پیش منظر کے ساتھ۔ `M`: `Divide` اشیاء پورے راستے پر برابر پھیلاتا ہے، `Measure` ہر فاصلے پر ایک رکھتا ہے۔ `I`: تعداد (Measure کے ساتھ 0 کا مطلب جتنی فٹ ہوں)، راستے کے آخر سے بڑی تعداد وہیں تک محدود ہوتی ہے۔ `SP`: اشیاء کے درمیان فاصلہ (Measure پر جاتا ہے)۔ `AL`: Yes ہر شے کو راستے کی پیروی میں گھماتا ہے، No سیدھا رکھتا ہے۔
- `AS` جیسا {{cmd:ARRAY}} میں۔ آن ہو تو ارے راستے کی شکل کی اپنی نقل رکھتی ہے: بعد میں راستہ بدلنے سے اشیاء نہیں ہلتیں۔
- غیر منحنی راستہ اور ایک شے رد ہوتے ہیں۔

### ARRAYEDIT

ASsociative سے بنی ارے بدلتا ہے۔ `Select array` (یا پہلے منتخب کریں)۔ موجودہ حالت چھاپتا ہے، پھر {{key:Enter}} تک سوال کرتا ہے:

- Rectangular: `COL` کالم اور ان کا فاصلہ، `R` قطاریں اور ان کا فاصلہ، `A` کالموں کا زاویہ۔
- Polar: `I` اشیاء، `F` بھرنے کا زاویہ، `ROT` Yes یا No۔
- Path: `M` Divide یا Measure، `I` اشیاء، `SP` فاصلہ، `AL` راستے کے ساتھ الائن۔
- `S` (Source) وہ اشیاء کھولتا ہے جنہیں ارے دہراتی ہے، الگ، بلاک ایڈیٹر کی طرح۔ وہاں بنائیں اور بدلیں؛ {{cmd:ARRAYCLOSE}} محفوظ یا ضائع کرتا ہے، اور ہر شے اس کے ساتھ چلتی ہے۔
- `REP` (REPlace): `Select replacement objects`، `Specify base point of the replacement objects`، پھر بدلنے کے لیے اشیاء پر کلک، {{key:Enter}}۔ وہ اشیاء متبادل دکھاتی ہیں؛ متبادل اشیاء ڈرائنگ سے نکل کر ارے میں رہتی ہیں۔ `RES` (RESet) ہر شے میں ماخذ اشیاء دوبارہ دکھاتا ہے۔
- ہر تبدیلی ایک کالعدم مرحلہ ہے۔ سادہ نقول، سادہ بلاک ریفرنس اور لاک لیئر پر ارے رد ہوتے ہیں۔

وہی عدد Properties میں Array کے تحت ہیں، اور ارے کی گرپس ہیں: بیس پوائنٹ اسے منتقل کرتا ہے، دوسری شے کی گرپ فاصلہ مقرر کرتی ہے، آخری شے کے بعد کی گرپ گنتی (Polar: دوسری شے اشیاء کی تعداد، آخری شے بھرنے کا زاویہ)۔ {{cmd:EXPLODE}} ارے کو سادہ نقول میں بدلتا ہے۔

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} Source ختم کرتا ہے: `Save the changes to the array's source objects? [Save/Discard] <Save>`۔ کھلی ماخذ اشیاء نہ ہوں تو یہ بتاتا ہے۔ {{cmd:BCLOSE}} یہی کرتا ہے۔

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`۔ مقرر کرتا ہے کہ {{cmd:ARRAY}}، ARRAYRECT، ARRAYPOLAR اور {{cmd:ARRAYPATH}} کس پر شروع ہوں؛ ان کا آپشن `AS` وہی ترتیب بدلتا ہے۔ اس براؤزر میں یاد رہتا ہے۔

### OFFSET

مختصر نام: `O`۔ لکیریں، قوسیں، دائرے اور پولی لائنز۔

جب پولی لائن باہر کو ہٹے اور اس کے سیدھے حصے ایک کونے پر الگ ہوں، تو {{cmd:OFFSETGAPTYPE}} فیصلہ کرتا ہے کہ خلا کیسے بند ہو۔

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`، پھر `Specify point on side to offset` (یا Through کے ساتھ `Specify through point`)، Enter تک بار بار۔

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: {{cmd:OFFSET}} پولی لائن کے بیرونی کونوں کے خلا کیسے بند کرتا ہے۔ `0` حصے اس وقت تک بڑھاتا ہے جب تک ملیں (شروع کی ترتیب)، `1` پرانے کونے کے گرد قوس سے جوڑتا ہے، `2` سیدھے کٹ سے۔ اندرونی کونے اور قوسی حصے متاثر نہیں ہوتے۔ سیشن کے لیے محفوظ۔

### EXTRIM

{{cmd:EXTRIM}} کسی کنارے کے ایک طرف کی ہر شے ٹرم کرتا ہے۔ کاٹنے والا کنارہ چنیں (لکیر، قوس، دائرہ، پولی لائن، بیضہ، spline یا کنسٹرکشن لائن)، پھر اس طرف ایک نقطہ جو صاف ہو: ہر لکیر، قوس، دائرہ، پولی لائن اور کنسٹرکشن لائن جو کنارے کو قطع کرے اپنا وہ حصہ کھوتی ہے جو اس طرف ہو، جہاں وہ کنارے سے شروع ہوتا ہے۔ طرف چنتے ہوئے جو ٹکڑے جائیں گے وہ پوائنٹر کے ساتھ حرکت کرتے ہیں۔ بند کنارے کے لیے طرفیں اندر اور باہر ہیں۔ صرف چھونے والی اشیاء، اور وہ ٹیکسٹ، ہیچ، splines اور بیضے جو اسے قطع کریں، جیسی ہیں ویسی رہتی ہیں۔ ایک کالعدم مرحلہ۔

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: {{cmd:TRIM}} اور {{cmd:EXTEND}} کیسے شروع ہوں۔ `1` Quick: ہر شے کاٹنے والا کنارہ یا حد ہے۔ `0` Standard: پہلے کنارے مانگتا ہے۔ LISP میں `(setvar "TRIMEXTENDMODE" 0)` بھی۔

### TRIM

مختصر نام: `TR`۔ پہلے `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` چھاپتا ہے۔ Quick موڈ میں ہر نظر آنے والی شے کاٹنے والا کنارہ ہے، اور جسے کوئی شے نہ کاٹے وہ مٹا دی جاتی ہے؛ Standard موڈ میں پہلے `Select cutting edges (Enter = every object)` پوچھتا ہے اور صرف انہی پر کاٹتا ہے۔

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`، بار بار: وہ ٹکڑا کلک کریں جو ہٹانا ہے (جب پوائنٹر اس پر ہو تو وہ خاکستری اور ڈیش دکھتا ہے)، کئی ٹکڑوں کے آر پار راستہ کھینچیں (سب ایک مرحلے میں جاتے ہیں)، یا دو خالی جگہوں پر کلک کر کے ان کے درمیان فینس بنائیں۔ {{key:Shift}} توسیع کرتا ہے۔ `T` کاٹنے والے کنارے چنتا ہے (Standard)، `F` فینس نقطے پوچھتا ہے، `C` دو ونڈو کونے (جزوی اندر والے ٹکڑے جاتے ہیں)، `O` `Enter a trim mode option [Quick/Standard]` پوچھتا ہے، `E` `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE)، `R` منتخب اشیاء مٹاتا ہے، `U` آخری پک یا کھینچنا کالعدم کرتا ہے۔ Enter ختم کرتا ہے۔ دیکھیں [ٹرم اور توسیع](topic:trim-and-extend)۔

- ہیچ پر کلک اسے کاٹتا ہے: کاٹنے والے کنارے بھرے علاقے کو تقسیم کرتے ہیں اور جس ٹکڑے پر کلک ہو وہ ہٹ جاتا ہے (جہاں تھا وہاں کوئی خاکہ نہیں رہتا)۔ ہیچ اپنا نمونہ یا گریڈینٹ رکھتی ہے؛ جو ہیچ اپنی حد سے لنک تھی وہ اب لنک نہیں رہتی، کیونکہ وہ اسے نہیں بھرتی۔ جب کوئی کاٹنے والا کنارہ ہیچ کو نہ بانٹے، پوائنٹر ہیچ پر نہ ہو، یا کچھ نہ بچے، تو یہ بتاتا ہے (کچھ نہ بچے تو {{cmd:ERASE}} استعمال کریں)۔ کھینچا ہوا راستہ یا فینس ہیچ نہیں کاٹتا۔

### EXTEND

مختصر نام: `EX`۔ {{cmd:TRIM}} کا الٹ: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`۔ کلک اس کے قریب والے سرے کو اگلی حد تک لمبا کرتا ہے؛ کھینچا ہوا راستہ یا فینس ہر شے کو لمبا کرتا ہے جسے وہ قطع کرے؛ {{key:Shift}} ٹرم کرتا ہے۔ `B` حد کے کنارے چنتا ہے (Standard)۔ Mode اور Edge TRIM کے ساتھ مشترک ہیں۔

### LINKVIEWS

مختصر نام: `SYNCVIEWS`؛ یا {{ui:ویو}} › {{ui:مزید}} › {{ui:پینز کے ویو کو جوڑیں}}، یا ڈرائنگ ٹیبز پر لنک آئیکن۔ `Link the panes' views [ON/OFF]` (Enter دوسری حالت لیتا ہے): آن ہو تو فعال پین میں پین یا زوم وہ ہر پین منتقل کرتا ہے جو اسی قسم کی اسپیس دکھائے۔ دیکھیں [اسکرین تقسیم کریں](topic:split-screen)۔

### OPENIN3D

کوئی مختصر نام نہیں؛ یا {{ui:ویو}} › {{ui:مزید}} › {{ui:ModelCraft میں کھولیں}} جہاں 3D ماڈلنگ ایپ دی گئی ڈرائنگ لیتی ہے۔ وہاں نئے ٹیب میں DWG کے طور پر کھولتا ہے (کچھ اپ لوڈ نہیں ہوتا)۔ اگر براؤزر ٹیب روکے تو یہ بتاتا ہے۔

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: خالی جگہ پر دبا کر کھینچنے سے کیا بنے۔ وہی جو ترتیبات › CadCraft › دبا کر منتخب کرنا۔ دیکھیں [لاسو سے انتخاب](topic:lasso-selection)۔

### FILLET

مختصر نام: `F`۔ لکیریں، قوسیں، دائرے اور پولی لائنز۔ پہلے `Current settings: Mode = TRIM, Radius = 0` چھاپتا ہے۔

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` `Specify fillet radius <last>` پوچھتا ہے۔ `T` `Enter Trim mode option [Trim/No trim]` پوچھتا ہے: No trim کے ساتھ اشیاء جیسی ہیں ویسی رہتی ہیں اور صرف قوس شامل ہوتی ہے۔
  - `M` Enter تک مزید کونوں کے لیے کمانڈ جاری رکھتا ہے؛ `U` کمانڈ چھوڑے بغیر آخری کونا واپس لیتا ہے۔
  - `P` `Select 2D polyline [Radius]` پوچھتا ہے اور ہر اس کونے کو گول کرتا ہے جہاں دو سیدھے حصے ملیں۔ پہلے سے موجود فلٹس نئے رداس سے بدلتے ہیں؛ رداس 0 انہیں ہٹاتا ہے۔ جن کونوں کے اطراف رداس کے لیے چھوٹے ہوں وہ چھوڑے اور گنے جاتے ہیں۔
- `Select second object or shift-select to apply corner [Radius]`۔ تیز کونے کے لیے کلک کرتے وقت {{key:Shift}} دبائیں، رداس کچھ بھی ہو۔

ہر شے پر وہ حصہ کلک کریں جو آپ رکھنا چاہتے ہیں۔ دو لکیریں جو نہ ملیں انہیں بڑھایا جاتا ہے۔ دو متوازی لکیروں کے درمیان خلا پر نصف دائرہ بنتا ہے، پہلی لکیر کے اس سرے پر جو آپ کے کلک کے قریب ہو۔ دائرہ کبھی نہیں کٹتا۔ ایک پولی لائن کے دو ملحق حصوں پر قوس پولی لائن کے اندر بنتی ہے؛ پولی لائن اور دوسری شے تب کام کرتی ہیں جب کٹ پولی لائن کے پہلے یا آخری حصے پر پڑے۔

### CHAMFER

مختصر نام: `CHA`۔ لکیریں اور پولی لائنز کے سیدھے حصے۔ پہلے موجودہ فاصلے (یا لمبائی اور زاویہ) چھاپتا ہے۔

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D`: `Specify first chamfer distance <last>` اور `Specify second chamfer distance <the first>`: پہلا آپ کی چنی ہوئی پہلی لکیر سے کٹتا ہے، دوسرا دوسری سے۔
  - `A`: `Specify chamfer length on the first line` اور `Specify chamfer angle from the first line`۔
  - `E` (mEthod): اگلے چیمفر کے لیے دونوں میں سے کون سا استعمال ہو۔ `T`، `M`، `U` اور `P` FILLET کی طرح کام کرتے ہیں۔
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`۔ {{key:Shift}}+کلک تیز کونا بناتا ہے۔

لکیر سے لمبا فاصلہ رد ہوتا ہے (`Distance is too large.`)۔

### BREAK اور BREAKATPOINT

مختصر نام: `BR`۔ `Select object` (جہاں آپ کلک کریں وہ پہلا نقطہ ہے)، `Specify second break point [First point]`؛ `F` `Specify first break point` اور `Specify second break point` پوچھتا ہے۔ ان کے درمیان کا حصہ جاتا ہے؛ دائرے پر پہلے نقطے سے خلاف گھڑی۔ BREAKATPOINT `Specify break point` پوچھتا ہے اور وہیں شے کو دو میں توڑتا ہے (دائرہ نہیں)۔

### LENGTHEN

مختصر نام: `LEN`۔ `Select an object to measure [DElta/Percent/Total/DYnamic]`: ایک پک `Current length` چھاپتا ہے (اور قوس کا زاویہ) اور پھر پوچھتا ہے۔ `DE` `Enter delta length (negative shortens) [Angle]` پوچھتا ہے، `P` `Enter percentage length`، `T` `Specify total length [Angle]`، `DY` کھینچنے دیتا ہے۔ پھر `Select an object to change [Undo]`، بار بار: کلک کے قریب والا سرا حرکت کرتا ہے۔ لکیریں، قوسیں اور کھلی پولی لائنز۔

### JOIN

مختصر نام: `J`۔ `Select objects to join`۔ سرے سے سرا ملنے والی لکیریں، قوسیں اور کھلی پولی لائنز پولی لائنز بنتی ہیں (زنجیر بند ہو تو بند)؛ ایک لکیر پر لکیریں ایک لکیر بنتی ہیں؛ ایک دائرے کی قوسیں ایک قوس یا دائرہ بنتی ہیں۔ تاریخ بتاتی ہے کتنی اشیاء جڑیں اور کتنی نہ جڑیں۔

### MATCHPROP

مختصر نام: `MA`، `PAINTER`۔ `Select source object`، پھر `Select destination objects [Settings]` اور {{key:Enter}}۔ لیئر اور رنگ کاپی کرتا ہے، اور ایک ہی قسم کی اشیاء کے درمیان ٹیکسٹ کی اونچائی اور چوڑائی، ڈائمینشن کے سائز، یا ہیچ کا نمونہ۔ `S` `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` پوچھتا ہے، Enter تک بار بار؛ انتخاب سیشن کے لیے یاد رہتا ہے۔

### EXPLODE

مختصر نام: `X`۔ پولی لائنز لکیروں اور قوسوں میں، بلاک ریفرنس اپنی اشیاء میں، ڈائمینشنز لکیروں، ایروہیڈز اور ٹیکسٹ میں بدلتے ہیں۔ ایک قابلِ ترمیم ارے ({{cmd:ARRAYEDIT}}) سادہ نقول بنتی ہے۔

- `Select objects`

### GROUP

مختصر نام: `G`۔ {{cmd:GROUP}} منتخب اشیاء کو ایک مشترک نام دیتا ہے۔ اشیاء چنیں، پھر نام لکھیں (خالی جگہ نہیں؛ `?` گروپس کی فہرست دیتا ہے؛ Enter بے نام گروپ بناتا ہے) اور نام والے گروپ کے لیے، ایک اختیاری تفصیل۔ اس کے بعد ان میں سے کسی ایک پر کلک، یا وہ ونڈو جو ایک کو لے، سب کو منتخب کرتی ہے، تو وہ ایک ساتھ منتقل، نقل اور مٹتی ہیں؛ ہر شے پھر بھی اپنی شے ہے۔ ایک شے کئی گروپس میں ہو سکتی ہے۔ پورے گروپ کی نقل نیا بے نام گروپ ہے؛ ایک رکن کی نقل گروپ میں شامل ہوتی ہے۔ گروپس اس اسپیس سے تعلق رکھتے ہیں جس میں بنے (ماڈل یا شیٹ)۔ DWG یا DXF کے طور پر محفوظ کرنے پر وہ رہتے ہیں اور CadCraft میں دوبارہ کھولنے پر واپس آتے ہیں؛ DXF 2000 فائلیں انہیں دوسرے پروگراموں کے لیے گروپ آبجیکٹس کے طور پر بھی رکھتی ہیں، اور دوسرے پروگراموں کے گروپس کھولنے پر پڑھے جاتے ہیں۔

### UNGROUP

مختصر نام: نہیں۔ {{cmd:UNGROUP}} گروپس الگ کرتا ہے: گروپ کی اشیاء چنیں (جس گروپ میں وہ ہیں وہ الگ ہوتا ہے) یا `Name` ٹائپ کریں اور گروپ کا نام دیں۔ اشیاء ڈرائنگ میں رہتی ہیں۔ ایک کالعدم مرحلہ گروپس واپس لاتا ہے۔

### GROUPEDIT

{{cmd:GROUPEDIT}} ایک گروپ بدلتا ہے۔ اس کی ایک شے چنیں، یا `Name` اور اس کا نام دیں؛ پہلے سے منتخب گروپ جیسا ہے ویسا لیا جاتا ہے۔ پھر: `Add` اشیاء (ایک ایک کر کے، گروپ گروپ نہیں)، `Remove` اشیاء، `REName` گروپ کا نام بدلیں، `Description` بدلیں، یا `Selectable` مقرر کریں (ایک شے پر کلک پورا گروپ منتخب کرے یا نہ کرے)۔ `eXit` یا Enter ختم کرتا ہے۔ جس گروپ میں کوئی شے نہ رہے وہ ختم ہو جاتا ہے۔

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1` (شروع کی ترتیب) میں گروپ کی شے پر کلک یا ونڈو پورا گروپ منتخب کرتی ہے؛ `0` میں الگ اشیاء، تاکہ کسی ایک رکن میں ترمیم ہو۔ سیشن کے لیے یاد رہتا ہے۔

## کلپ بورڈ

CadCraft کا اپنا کلپ بورڈ: یہ ایک ڈرائنگ کے اندر، ڈرائنگز کے درمیان اور اس براؤزر میں CadCraft ٹیبز کے درمیان کام کرتا ہے۔ دیکھیں [کاپی، پیسٹ اور ڈپلیکیٹ](topic:copy-paste)۔

### COPYCLIP

{{key:Mod+C}}، یا {{ui:ترمیم}} گروپ میں {{ui:کاپی}}۔ اشیاء کو کلپ بورڈ پر کاپی کرتا ہے، جن بلاکس اور لیئرز کے ساتھ وہ استعمال ہوتی ہیں۔ اشیاء منتخب رہتی ہیں۔

- `Select objects to copy` (اگر اشیاء پہلے سے منتخب ہوں تو چھوڑ دیا جاتا ہے)

### CUTCLIP

{{key:Mod+X}}، یا {{ui:مزید}} مینو میں {{ui:کاٹیں}}۔ اشیاء کو کلپ بورڈ پر کاپی کرتا ہے، پھر انہیں مٹاتا ہے (ایک کالعدم مرحلہ)۔

- `Select objects to cut` (اگر اشیاء پہلے سے منتخب ہوں تو چھوڑ دیا جاتا ہے)

### COPYBASE

آپ کے چنے ہوئے بیس پوائنٹ کے ساتھ اشیاء کلپ بورڈ پر کاپی کرتا ہے؛ پیسٹ وہ نقطہ رکھتا ہے۔

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}، یا {{ui:ترمیم}} گروپ میں {{ui:چسپاں کریں}}۔ کاپی کرسر کے ساتھ حرکت کرتی ہے، اپنے ایکسٹینٹس کے نچلے بائیں کونے سے لٹکتی ہوئی (یا اس کے مرکز، یا `COPYBASE` کے نقطے سے؛ دیکھیں [CadCraft ترتیبات](topic:settings))۔

- `Specify insertion point`

چسپاں کی گئی اشیاء منتخب رہتی ہیں۔ جو بلاک ڈرائنگ میں پہلے سے اسی نام سے ہے وہ اس ڈرائنگ کی تعریف رکھتا ہے۔

جب MarkupCraft میں کاپی کیا علاقہ CadCraft کی کاپی سے نیا ہو (اور 6 گھنٹے سے کم پرانا)، تو {{key:Mod+V}} اور `PASTECLIP` وہ علاقہ چسپاں کرتے ہیں: دیکھیں `PASTEAREA`۔

### PASTEAREA

مختصر نام: `PAREA`۔ {{ui:More}} مینو میں {{ui:Paste a copied area}}۔ MarkupCraft میں {{ui:Copy area}} سے کاپی کیا گیا علاقہ اپنے اصل سائز پر تصویر کے طور پر چسپاں کرتا ہے۔ دیکھیں [ڈرائنگ میں تصاویر](topic:pictures)۔

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (صرف جب شیٹ کا ڈرائنگ اسکیل نہ ہو): ایک عدد، {{key:Enter}} کاغذ کا سائز، یا `P`، پھر `First point on the pasted area`، `Second point on the pasted area` اور ان کا اصل فاصلہ۔

### PASTEORIG

{{key:Mod+Shift+V}}، یا {{ui:مزید}} مینو میں {{ui:اسی جگہ چسپاں کریں}}۔ اشیاء کو ان کوآرڈینیٹس پر چسپاں کرتا ہے جہاں سے کاپی ہوئیں۔ کچھ نہیں پوچھتا۔

### DUPLICATE

مختصر نام: `DUP`۔ {{key:Mod+D}}، یا {{ui:مزید}} مینو میں {{ui:ڈپلیکیٹ بنائیں اور منتقل کریں}}۔ اشیاء کی نقل پوائنٹر کے ساتھ وہاں سے حرکت کرتی ہے جہاں ہے؛ {{key:Esc}} کچھ نہیں چھوڑتا۔ کلپ بورڈ استعمال نہیں کرتا۔

- `Select objects to duplicate` (اگر اشیاء پہلے سے منتخب ہوں تو چھوڑ دیا جاتا ہے)
- `Specify where the copy goes (Esc leaves nothing)`: کلک کریں، نقطہ ٹائپ کریں، `@dx,dy` (پوائنٹر کی جگہ سے)، یا کرسر کی طرف ایک فاصلہ۔

### SELECT

`Select objects` پوچھتا ہے (نیچے کے ہر آپشن کے ساتھ) اور جو آپ چنیں وہ منتخب رکھتا ہے، اگلی کمانڈ یا بعد میں `P` کے لیے۔

### QSELECT

مختصر نام: `QS`۔ ویب میں، {{ui:فوری منتخب}} ڈائیلاگ (دیکھیں [آبجیکٹ منتخب کریں](topic:select-objects#select-by-a-rule-quick-select))۔ اس کے بغیر کمانڈ لائن `Enter object type`، `Enter property`، `Enter operator [=/<>/>/</*/Select all] <=>` اور `Enter value` پوچھتی ہے۔ ملنے والی اشیاء منتخب ہوتی ہیں۔

### SELECTSIMILAR

مختصر نام: `SIM`۔ `Select objects [SEttings]` (یا موجودہ انتخاب): ایک ہی قسم، ایک ہی لیئر اور رنگ (اور بلاک نام، ہیچ نمونہ) والی ہر شے منتخب کرتا ہے۔ `SE` `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` پوچھتا ہے، Enter تک بار بار۔

### FIND

کوئی مختصر نام نہیں؛ یا {{ui:ترمیم}} › {{ui:مزید}} › {{ui:تلاش اور تبدیل کریں}}۔ ویب میں، {{ui:تلاش اور تبدیل کریں}} ڈائیلاگ (دیکھیں [ٹیکسٹ اور لیبلز شامل کریں](topic:text#find-and-replace-words))۔ اس کے بغیر: `Enter text to find`، پھر `Enter replacement text (Enter: select what is found)`۔ متن، اٹریبیوٹ قدروں اور ڈائمینشن ٹیکسٹ میں، کھلے ٹیب یا انتخاب میں تلاش کرتا ہے۔

### SELECTALL اور DESELECT

`SELECTALL` (مختصر نام `AI_SELALL`، {{key:Mod+A}}) کھلے ٹیب پر ہر وہ شے منتخب کرتا ہے جسے آپ بدل سکیں۔ `DESELECT` (مختصر نام `AI_DESELECT`، `SELECTNONE`؛ یا {{key:Esc}}) انتخاب صاف کرتا ہے۔

## ڈائمینشنز

### DIMLINEAR

مختصر نام: `DLI`، `DIMLIN`۔ افقی یا عمودی فاصلہ۔

- `Specify first extension line origin [Select object]` (Enter یا `S`: `Select object to dimension`، پھر لکیر، قوس، دائرے یا پولی لائن کے حصے پر کلک)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`۔ `T` متن پوچھتا ہے (`<>` ناپی گئی قدر ہے)، `H` اور `V` سمت مقرر کرتے ہیں، `R` `Specify angle of dimension line <0>` پوچھتا ہے۔

### DIMALIGNED

مختصر نام: `DAL`، `DIMALI`۔ دو نقطوں کے درمیان حقیقی فاصلہ۔

- نقطے {{cmd:DIMLINEAR}} کی طرح، پھر `Specify dimension line location [Text]`۔

### DIMANGULAR

مختصر نام: `DAN`، `DIMANG`۔

- `Select arc, circle or line, or Enter for a vertex`
- قوس: اس کا زاویہ۔ دائرہ: `Specify second angle endpoint`۔ لکیر: `Select second line`۔ Enter: `Specify angle vertex`، `Specify first angle endpoint`، `Specify second angle endpoint`۔
- `Specify dimension line location [Text]`: ناپنے کے لیے زاویے کے اندر کلک کریں۔

### DIMRADIUS اور DIMDIAMETER

مختصر نام: `DRA`، `DIMRAD`؛ `DDI`، `DIMDIA`۔

- `Select arc or circle`، پھر `Specify dimension line location [Text]`۔

### DIMCONTINUE

مختصر نام: `DCO`، `DIMCONT`۔ آخری بنائی گئی خطی یا ہم سطر ڈائمینشن سے جاری رکھتا ہے (یا `Select linear or aligned dimension` پوچھتا ہے)۔

- `Specify second extension line origin [Undo]`، Enter تک بار بار۔

### DIMBASELINE

مختصر نام: `DBA`، `DIMBASE`۔ {{cmd:DIMCONTINUE}} کی طرح، لیکن ہر ڈائمینشن پہلے نقطے سے شروع ہوتی ہے اور مزید باہر تہہ ہوتی ہے۔

### DIMORDINATE

مختصر نام: `DOR`، `DIMORD`۔ `Specify feature location`، پھر `Specify leader endpoint [Xdatum/Ydatum/Text]`۔ ایک لیڈر پر لکھتا ہے کہ وہ نقطہ UCS اصل سے X یا Y کے ساتھ کتنا دور ہے: زیادہ تر اوپر یا نیچے جانے والا لیڈر X پڑھتا ہے، سیدھا جانے والا Y؛ `Xdatum` اور `Ydatum` یہ طے کرتے ہیں۔ پہلے {{cmd:UCS}} سے اصل مقرر کریں (ورنہ ڈرائنگ کا 0,0)۔ گرپس نقطہ، اصل اور لیڈر کا سرا منتقل کرتی ہیں، اور قدر ساتھ چلتی ہے۔ DWG اور DXF میں حقیقی ordinate ڈائمینشن کے طور پر محفوظ ہوتی ہے۔ لیڈر کا سرا نقطے پر رد ہوتا ہے۔

### DIMARC

مختصر نام: `DAR`۔ `Select arc or polyline arc segment`، پھر `Specify arc length dimension location [Text]`۔ قوس کے ساتھ ناپتا ہے (وتر کے ساتھ نہیں) اور قیمت سے پہلے قوس کی علامت لکھتا ہے۔ پورا دائرہ، لکیر یا سیدھا پولی لائن حصہ رد ہوتا ہے۔ DWG اسے قوس کی لمبائی کی ڈائمینشن رکھتی ہے؛ DXF اسے زاویائی ڈائمینشن رکھتی ہے جس کا متن لمبائی ہے، اور CadCraft اسے دوبارہ قوس کی لمبائی کی ڈائمینشن کے طور پر کھولتا ہے۔

### DIMJOGGED

مختصر نام: `DJO`، `JOG`۔ `Select arc or circle`، `Specify center location override`، `Specify jog location`۔ ایسے منحنی کے لیے رداس کی ڈائمینشن جس کا مرکز دور یا شیٹ سے باہر ہو: ڈائمینشن لائن مرکز کے بجائے آپ کے دیے نقطے سے شروع ہوتی ہے، اس میں جھکاؤ ہوتا ہے، اور پھر بھی اصل رداس لکھتی ہے۔ DWG اسے جھکی ہوئی رداس ڈائمینشن رکھتی ہے؛ DXF اسے رداس ڈائمینشن رکھتی ہے، اور CadCraft اسے دوبارہ جھکا کر کھولتا ہے۔

### DIMJOGLINE

مختصر نام: `DJL`۔ `Select dimension to add jog [Remove]`، پھر `Specify jog location (or press Enter)`۔ خطی یا ہم سطر ڈائمینشن کی لائن پر جھکاؤ کی علامت رکھتا ہے، تاکہ دکھے کہ فاصلہ اسکیل پر نہیں کھینچا گیا؛ قدر نہیں بدلتی۔ `Remove` اسے ہٹاتا ہے۔ دوسری اقسام کی ڈائمینشنز رد ہوتی ہیں۔

### QDIM

کوئی مختصر نام نہیں۔ `Select geometry to dimension`، پھر `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`۔ ایک قدم میں کئی اشیاء کی ڈائمینشن: لکیروں اور پولی لائن حصوں کے سرے، دائروں اور قوسوں کے مرکز، نقطے اور بلاک ریفرنس۔ اشیاء کے اوپر یا نیچے کی پوزیشن آر پار ناپتی ہے، ان کے پہلو کی پوزیشن اوپر ناپتی ہے۔ `Continuous` نقطوں کو زنجیر کرتا ہے، `Baseline` سب کو پہلے سے ناپتا ہے، `Staggered` درمیان سے باہر کی طرف جوڑے بناتا ہے، `Ordinate` ہر نقطے کو ڈیٹم سے فاصلہ دیتا ہے (`datumPoint` نیا چنتا ہے)، `Radius` اور `Diameter` ہر چنے ہوئے دائرے اور قوس کی ڈائمینشن کرتے ہیں۔ موڈ یاد رہتا ہے۔ جو بنے وہ ایک کالعدم مرحلہ ہے۔ دو سے کم نقطے ہوں، یا Radius اور Diameter کے لیے دائرے اور قوسیں نہ ہوں، تو یہ بتاتا ہے۔

### DIMBREAK

مختصر نام: `DBREAK`۔ `Select dimensions to add or remove breaks`، پھر `Break where other objects cross [Auto/Manual/Remove] <Auto>`۔ `Auto` ڈائمینشن اور توسیعی لکیروں میں ہر اس جگہ خلا چھوڑتا ہے جہاں دوسری شے انہیں قطع کرے، اور جب وہ اشیاء یا ڈائمینشن منتقل ہوں تو خلا دوبارہ طے کرتا ہے۔ `Manual` (ایک ڈائمینشن) دو نقطے پوچھتا ہے اور ان کے درمیان خلا چھوڑتا ہے۔ `Remove` ہر خلا ہٹاتا ہے۔ خلا ڈائمینشن کے ٹیکسٹ کی اونچائی کا 1.5 گنا ہے۔

### DIMSPACE

کوئی مختصر نام نہیں۔ `Select base dimension`، `Select dimensions to space`، `Enter spacing value or Auto <Auto>`۔ متوازی خطی اور ہم سطر ڈائمینشنز (یا ایک ہی راس سے زاویائی) کی ڈائمینشن لائنیں منتقل کرتا ہے تاکہ وہ بنیادی ڈائمینشن سے برابر فاصلے پر ہوں، ہر ایک اپنی طرف۔ `0` انہیں بنیادی کے ساتھ لائن میں لاتا ہے؛ `Auto` بنیادی کے ٹیکسٹ کی اونچائی کا دوگنا ہے۔ بنیادی سے متوازی نہ ہونے والی ڈائمینشنز اپنی جگہ رہتی ہیں۔

### DIMINSPECT

کوئی مختصر نام نہیں۔ `Select dimensions`، `Inspection frame shape [Round/Angular/None/remove] <Round>`، `Enter label`، `Enter inspection rate <100%>`۔ قدر کے گرد فریم بناتا ہے، اس سے پہلے لیبل اور بعد میں معائنے کی شرح کے ساتھ۔ `remove` فریم ہٹاتا ہے۔ ٹالرنس کا متن قدر کے ساتھ رہتا ہے۔

### DIMOVERRIDE

مختصر نام: `DOV`، `DIMOVER`۔ `Enter dimension variable name to override or Clear`، `Enter new value for …`، Enter تک بار بار، پھر `Select dimensions`۔ صرف منتخب ڈائمینشنز کی وہ ترتیبات بدلتا ہے؛ ڈائمینشن اسٹائل نہیں بدلتا۔ وہ ویری ایبلز لیتا ہے جو عدد یا سوئچ ہوں (`DIMTXT`، `DIMASZ`، `DIMSCALE`، `DIMDEC`، `DIMSE1` …)۔ `Clear` منتخب ڈائمینشنز کو ان کے اسٹائل پر واپس کرتا ہے۔ جو نام ایسا ویری ایبل نہ ہو، اور جو قدر وہ نہ لے سکے، رد ہوتے ہیں۔

### DIMREASSOCIATE

مختصر نام: `DRE`، `DIMREASSOC`۔ `Select dimensions`، پھر ہر ایک کے لیے اس کے توسیعی لکیر کے نقطے (`Specify first extension line origin on an object`: کسی سرے یا لکیر کے درمیان، پولی لائن کے کونے، مرکز پر اسنیپ؛ Enter وہ نقطہ آزاد رکھتا ہے)، یا رداس، ڈایامیٹر، جھکے ہوئے رداس یا قوس کی لمبائی کے لیے `Select arc or circle`۔ ڈائمینشن پھر ان اشیاء سے بندھ جاتی ہے: جب وہ منتقل یا تبدیل ہوں تو وہ ایک ہی کالعدم مرحلے میں ساتھ چلتی ہے اور دوبارہ ناپتی ہے۔ کسی بندھے نقطے کو ہاتھ سے منتقل کرنا، یا شے مٹانا یہ بندھن ختم کرتا ہے۔ یہ بندھن DWG اور DXF 2000 میں CadCraft کے اپنے ڈیٹا کے طور پر محفوظ ہوتا ہے؛ دوسرے پروگرام اسے عام ڈائمینشن دیکھتے ہیں۔

### DIMDISASSOCIATE

مختصر نام: `DDA`، `DIMDISASSOC`۔ `Select dimensions`۔ انہیں ان اشیاء سے آزاد کرتا ہے جن سے وہ بندھی ہیں؛ کچھ منتقل نہیں ہوتا۔

### CENTERMARK

مختصر نام: `CM`، `DIMCENTER`، `DCE`۔ `Select circle or arc to add center mark`، Enter تک بار بار۔ مرکز پر ایک صلیب اور منحنی سے کچھ آگے تک چار مرکزی لکیریں (لائن ٹائپ CENTER) بناتا ہے، موجودہ لیئر پر سادہ لکیروں کے طور پر؛ موجودہ ڈائمینشن ترتیبات کے ایرو سائز اور مجموعی اسکیل سے سائز، UCS کے ساتھ گھومتی ہیں۔ دائرہ منتقل ہو تو یہ اس کے ساتھ نہیں چلتیں۔

### CENTERLINE

مختصر نام: `CL`۔ `Select first line`، `Select second line`۔ دو لکیروں کے درمیان ایک لکیر بناتا ہے (جب وہ ملیں تو ان کے دو سمتی کے ساتھ)، ان سے کچھ لمبی، لائن ٹائپ CENTER میں۔ سادہ لکیر ہے: یہ دو لکیروں کے ساتھ نہیں چلتی۔

### DIMSCALE، DIMTXT، DIMASZ، DIMDEC، DIMGAP، DIMEXE، DIMEXO

کوئی مختصر نام نہیں۔ ہر ایک `Enter new value for … <current>` پوچھتا ہے اور **نئی** ڈائمینشنز کے لیے وہ سائز مقرر کرتا ہے: مجموعی اسکیل، ٹیکسٹ کی اونچائی، ایرو سائز، اعشاریہ کے مقامات (8 تک)، ٹیکسٹ کے گرد خلا، ڈائمینشن لائن سے آگے توسیع، اصل نقطے سے آفسیٹ۔ دیکھیں [ڈائمینشن کے سائز مقرر کریں](topic:dimension-settings)۔

### DIMLUNIT

ڈائمینشن ترتیب: صرف نئی ڈائمینشنز کا لمبائی کا فارمیٹ (1 سائنسی، 2 اعشاری، 3 انجینئرنگ، 4 آرکیٹیکچرل، 5 کسری)۔

### DIMSTYLE اور -DIMSTYLE

مختصر نام: `DST`، `DDIM`، `D`۔ ڈائمینشن اسٹائل مینیجر: {{ui:موجودہ مقرر کریں}}، {{ui:نیا…}}، {{ui:ترمیم کریں…}}، {{ui:نام تبدیل کریں…}}، {{ui:حذف کریں}}، {{ui:موازنہ کریں…}}، {{ui:منتخب شدہ پر لاگو کریں}}۔ کمانڈ لائن پر `-DIMSTYLE`: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`۔ دیکھیں [ڈائمینشن کے سائز مقرر کریں](topic:dimension-settings#named-dimension-styles)۔

### DIMEDIT اور DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`، پھر ڈائمینشنز (یا جو پہلے منتخب ہوں)۔ New متن پوچھتا ہے (`<>` = ناپی گئی قدر)؛ Rotate ایک زاویہ (0 متن کو واپس رکھتا ہے)؛ Oblique توسیعی لکیروں کا X محور سے زاویہ (Enter = کوئی نہیں؛ صرف خطی اور ہم سطر ڈائمینشنز)۔ `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`۔ دیکھیں [ڈائمینشن کے سائز مقرر کریں](topic:dimension-settings#change-dimension-text-and-extension-lines)۔

### DIMTEXTUNIT

مختصر نام: `DTU`۔ `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`، یا منتخب ڈائمینشنز کے ساتھ `Units in the text of the selected dimensions`۔ لمبائی اس اکائی میں لکھتا ہے، اس کے بعد اکائی کا نشان (DIMLFAC اور DIMPOST کا لاحقہ)؛ `D` ڈرائنگ کی اکائیوں پر واپس جاتا ہے۔ دیکھیں [mm، cm، m یا km میں ڈائمینشنز](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)۔

### REVCLOUD

مختصر نام: `RC`۔ `Arc length: … Type: …` چھاپتا ہے، پھر `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`۔ Rectangular `Specify opposite corner` پوچھتا ہے؛ Polygonal `Specify next point (Enter closes the cloud) [Undo]`؛ Freehand پوائنٹر کے پیچھے چلتا ہے جب تک کلک یا {{key:Enter}} نہ ہو؛ `O` `Select object` اور `Reverse direction? [Yes/No] <N>` پوچھتا ہے اور شے کو کلاؤڈ بناتا ہے۔ `A` `Specify the length of each arc` پوچھتا ہے۔ `R`، `P` اور `F` اگلے کلاؤڈ کی قسم چنتے ہیں۔ نتیجہ قوسوں کی ایک بند پولی لائن ہے۔

### MLEADER

مختصر نام: `MLD`؛ یا {{ui:Leader}}۔ `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`، `Specify leader landing location`، پھر ان پلیس باکس میں متن (یا اس کے بغیر `Enter text (an empty line ends)`)۔ `Block` پہلے بلاک کا نام پوچھتا ہے اور ملٹی لیڈر متن کے بجائے وہ بلاک دکھاتا ہے۔ مزید لیڈر لائنیں: {{cmd:MLEADEREDIT}}۔ DWG میں حقیقی ملٹی لیڈر کے طور پر محفوظ؛ DXF وہ لائنیں، ایروہیڈ اور متن رکھتا ہے جو یہ بناتا ہے۔

### MLEADEREDIT

مختصر نام: `MLE`۔ `Select a multileader`، پھر `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: ہر نقطہ ایک نئے ایروہیڈ سے اسی لینڈنگ تک لیڈر لائن جوڑتا ہے، Enter تک۔ `Remove leaders` وہ لیڈر لائن ہٹاتا ہے جس پر کلک ہو (ایک ملٹی لیڈر کم از کم ایک رکھتا ہے)۔ `Block content` بلاک کا نام پوچھتا ہے اور متن کے بجائے وہ دکھاتا ہے (اس کے اٹریبیوٹس پوچھے جاتے ہیں)؛ `Text content` متن واپس لاتا ہے۔ ہر لیڈر لائن کی اپنی گرپ ہے۔ DWG ہر لیڈر لائن اور بلاک کو ایک ملٹی لیڈر میں رکھتی ہے۔

### MLEADERALIGN

مختصر نام: `MLA`۔ `Select multileaders`، پھر `Select multileader to align to [Distribute/Spacing/Use current spacing]` اور `Specify direction`۔ دوسرے ملٹی لیڈرز کی لینڈنگز (اور ان کا متن یا بلاک) چنی ہوئی کی لینڈنگ سے اس سمت کی لکیر پر لاتا ہے؛ ایروہیڈز اپنی سمت پر رہتے ہیں۔ `Spacing` برابر فاصلہ بھی دیتا ہے؛ `Distribute` دو نقطے پوچھتا ہے اور ان کے درمیان برابر پھیلاتا ہے۔ کم از کم دو ملٹی لیڈرز درکار ہیں۔

### MLEADERCOLLECT

مختصر نام: `MLC`۔ `Select multileaders`، پھر `Specify collected multileader location [Vertical/Horizontal]` (Enter پہلے کی جگہ رکھتا ہے)۔ کئی سے ایک ملٹی لیڈر بناتا ہے: بلاک مواد ایک نئے بلاک میں جاتا ہے جو ہر بلاک کو ساتھ ساتھ یا ایک کے نیچے ایک رکھتا ہے؛ متن مواد ایک نوٹ بنتا ہے جس کی ہر متن کی لائن ہوتی ہے۔ پہلا ملٹی لیڈر اپنی لیڈر لائنیں رکھتا ہے؛ باقی ہٹ جاتے ہیں۔ متن اور بلاک کا ملاپ رد ہوتا ہے۔

### TABLE

مختصر نام: `TB`؛ یا {{ui:Annotate}} › {{ui:مزید}} › {{ui:Table}}۔ ایک ٹیبل بناتا ہے: ایک شے جسے آپ دوسری اشیاء کی طرح منتقل، نقل، گھما، اسکیل اور پلاٹ کرتے ہیں، اس کے خانے ڈیٹا کے طور پر رہتے ہیں۔

- `Number of data rows or [Paste/File/Style] <3>`، پھر `Number of columns <3>`، `Text height` اور `Top left corner of the table`۔ ٹیبل میں ڈیٹا قطاروں سے اوپر ایک ٹائٹل قطار (ایک ملا ہوا خانہ) اور ہیڈر قطار ہوتی ہے۔
- `P`: کلپ بورڈ پر اسپریڈ شیٹ خانوں سے ٹیبل (خانوں کے درمیان ٹیب کے ساتھ متن)۔ ایسے خانوں کے کلپ بورڈ پر ہوتے ہوئے {{key:Ctrl+V}} بھی یہی کرتا ہے، جب تک CadCraft کی اپنی کاپی نئی نہ ہو (یا CadCraft فرق نہ کر سکے: تب وہ اپنی کاپی چسپاں کرتا ہے اور بتاتا ہے)۔ `F`: `.csv` یا ٹیب سے الگ فائل سے ٹیبل۔ پہلی قطار ہیڈر بنتی ہے؛ کالم کی چوڑائی متن کے مطابق ہوتی ہے۔
- `S`: اس ٹیبل کا ٹیبل اسٹائل چنیں (دیکھیں {{cmd:TABLESTYLE}})۔
- قطاروں یا کالموں کی غیر صحیح تعداد، اور ضرورت سے زیادہ خانے (2,000 قطاریں، 200 کالم، 40,000 خانے) رد ہوتے ہیں۔
- {{cmd:EXPLODE}} ٹیبل کو لکیروں اور متن میں بدلتا ہے۔ DWG میں ٹیبل ایک حقیقی ٹیبل آبجیکٹ ہے جسے دوسرے پروگرام بدل سکتے ہیں؛ DXF میں یہ ایک بلاک ہے جو اسے بناتا ہے، اور CadCraft اسے دوبارہ ٹیبل کے طور پر کھولتا ہے۔

### TABLEDIT

مختصر نام: `TABLEEDIT`، `TABEDIT`؛ یا ڈبل کلک خانے پر۔ ٹیبل میں ترمیم کرتا ہے۔

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`۔ خانے پر کلک کریں، یا ٹیبل منتخب ہو تو اس کا نام ٹائپ کریں (`B3`: کالم B، قطار 3؛ ٹائٹل قطار قطار 1 ہے)۔ ویب میں خانے پر باکس کھلتا ہے: {{key:Enter}} متن رکھتا ہے، {{key:Tab}} اگلے خانے پر جاتا ہے، {{key:Alt+Enter}} نئی لائن شروع کرتا ہے، {{key:Esc}} خانہ پہلے جیسا چھوڑتا ہے۔
- جو متن `=` سے شروع ہو وہ فارمولا ہے: `=A3+B3`، `=B3*C3`، `=Sum(B3:B9)`، `=Average(B3:B9)`، `=Count(B3:B9)`، `=Min(…)`، `=Max(…)`، جن میں `+ - * / ^`، قوسین اور `sqrt` اور `round` جیسے فنکشنز ہیں۔ خانہ قدر دکھاتا ہے؛ جو فارمولا اپنے ہی خانے کا نام لے، ٹیبل سے باہر خانہ لے، یا عدد کے بغیر خانہ لے، وہ `####` دکھاتا ہے اور کمانڈ لائن بتاتی ہے کیوں۔
- `R` / `C`: چنے ہوئے خانے پر `Insert` یا `Delete` قطاریں یا کالم (کتنے، اور اوپر یا نیچے، بائیں یا دائیں)۔ فارمولے اپنے خانوں کے ساتھ چلتے ہیں۔
- `S`: کالم کی چوڑائی اور قطار کی اونچائی۔ قطار اپنے متن سے کم نہیں ہوتی۔ منتخب ٹیبل پر ہر کالم اور قطار کے کنارے پر گرپ ہوتی ہے۔
- `M`: ایک چنے ہوئے خانے سے دوسرے تک ملانا؛ `U`: الگ کرنا۔ `A`: الائنمنٹ (`TL` اوپر بائیں … `MC` درمیان … `BR` نیچے دائیں)۔ `H`: اس خانے کی اپنی ٹیکسٹ اونچائی (0 = اسٹائل کی)۔ `K`: قطار کو ٹائٹل، ہیڈر یا ڈیٹا قطار بنائیں۔ `CL`: خانہ خالی کریں۔
- لاک لیئر پر ٹیبل، ہر قطار یا کالم کو مٹانا، اور ایسا ملانا جو کسی دوسرے ملے ہوئے خانے کو دو حصوں میں کاٹے، رد ہوتے ہیں۔
