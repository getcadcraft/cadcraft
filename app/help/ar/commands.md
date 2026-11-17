---
title: مرجع الأوامر
summary: كل أمر في برنامج الرسم CadCraft، مع أسمائه المستعارة، والأسئلة التي يطرحها، وخياراته وقيمه الافتراضية.
keywords: الأوامر، الأسماء المستعارة، قائمة الأوامر، المساحة، المحيط، measuregeom، خط، pline، دائرة، قوس، قصّ، إزاحة، dimlinear، كتلة، إدراج، التخطيط، طباعة، تكبير، المساعدة، copyclip، cutclip، pasteclip، pasteorig، copybase، تكرار، selectall
from: 7db2646b
---

اكتب اسم أمر أو اسمًا مستعارًا، ثم اضغط {{key:Enter}} أو {{key:Space}}. لا يهم حجم الأحرف، و`_` أو `-` أو `.` أو `'` في البداية تُتجاهل. اكتب `HELP` (أو `?`) لطباعة قائمة قصيرة بكل الأوامر في سجل سطر الأوامر؛ واضغط {{key:F1}} لهذه المساعدة.

كيفية قراءة الموجّهات: الخيارات بين أقواس مربعة، وتختار أحدها بكتابة أحرفه الكبيرة (`D` لـ Diameter). القيمة الافتراضية بين أقواس زاوية؛ اضغط {{key:Enter}} لقبولها. عندما يُطلب موضع نقطة، يمكنك النقر أو كتابة أي من الصيغ الواردة في [إدخال الإحداثيات والمسافة](topic:coordinate-entry). وعندما يُطلب بُعد، يمكنك كتابة رقم أو النقر على نقطتين.

الضغط على {{key:Enter}} حيث يُطلب نقطة أو كائن ولا توجد قيمة افتراضية ينهي الأمر. {{key:Esc}} يلغيه. وكل ما يفعله الأمر خطوة تراجع واحدة.

## رسم

### LINE

الأسماء المستعارة: `L`. مقاطع مستقيمة، كل منها كائن مستقل.

- `Specify first point` (Enter: البدء من آخر نقطة أعطيتها)
- `Specify next point [Undo]`، يتكرر. بعد مقطعين: `[Undo/Close]`.
- `U` يسحب آخر مقطع، و`C` يغلق إلى النقطة الأولى وينهي. Enter ينهي.

### PLINE

الأسماء المستعارة: `PL`. خط متعدد واحد من مقاطع خطية وأقواس.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close بعد وجود مقطعين)
- `A` يتحول إلى أقواس: `Specify endpoint of arc [Line/CLose/Undo]`. كل قوس يتابع مماسيًا للمقطع السابق. `L` يعود إلى الخطوط، و`CL` يغلق بقوس.
- Enter ينهي؛ ويبقى الخط المتعدد مفتوحًا.

### CIRCLE

الأسماء المستعارة: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`؛ و`D` يسأل `Specify diameter of circle`.
- `2P`: طرفا قطر. `3P`: ثلاث نقاط على الدائرة.
- `T` (وكذلك الأمر `TTR`، و{{ui:Draw}} › {{ui:More}} › {{ui:دائرة: مماس، مماس، نصف قطر}}): `Specify point on object for first tangent of circle`، ثم الثانية، ثم نصف القطر (Enter: الأخير). الدائرة تلمس الكائنين (خطوطًا أو أقواسًا أو دوائر أو مقاطع خط متعدد، وكذلك داخل الكتل)؛ ومن بين الدوائر التي تلمسهما، تُختار الأقرب إلى نقاطك. تظهر `Circle does not exist` عندما لا تناسب أي دائرة.
- `TTT` (أو {{ui:Draw}} › {{ui:More}} › {{ui:دائرة: مماس، مماس، مماس}}): ثلاثة كائنات؛ الدائرة التي تلمس الثلاثة، الأقرب إلى نقاطك (ثلاثة خطوط تعطي الدائرة الداخلية أو إحدى الخارجية، حسب موضع النقر).

### ARC

الأسماء المستعارة: `A`.

- `Specify start point of arc [Center]`، `Specify second point of arc`، `Specify end point of arc`: قوس يمر بثلاث نقاط.
- `C`: `Specify center point of arc`، `Specify start point of arc`، `Specify end point of arc`. يدور القوس عكس اتجاه عقارب الساعة من البداية إلى النهاية.

### RECTANG

الأسماء المستعارة: `REC`، `RECTANGLE`. خط متعدد مغلق.

- `Specify first corner point`، `Specify other corner point`. اكتب `@width,height` للزاوية الثانية.

### POLYGON

الأسماء المستعارة: `POL`. مضلّع منتظم كخط متعدد مغلق.

- `Enter number of sides <4>` (من 3 إلى 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: انقر أو اكتب نقطة؛ مسافتها تحدد الحجم واتجاهها يدير المضلّع.

### ELLIPSE

الأسماء المستعارة: `EL`.

- `Specify axis endpoint of ellipse [Center]`، `Specify other endpoint of axis`، `Specify distance to other axis`
- `C`: `Specify center of ellipse`، `Specify endpoint of axis`، ثم المسافة إلى المحور الآخر.
- `I` (`Isocircle`، يعمل فقط أثناء تشغيل {{cmd:ISODRAFT}}): المركز ثم نصف القطر أو `Diameter`: القطع الناقص الذي تظهر عليه الدائرة في المستوى الأيزومتري الحالي.

### HATCH

الأسماء المستعارة: `H`، `BH`، `BHATCH`؛ أو {{ui:Hatch}} في شريط الأدوات. يطبع النقشة الحالية والمقياس والزاوية أولًا.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`، يتكرر (`Undo` بعد وجود منطقة): كل نقرة تضيف المنطقة المغلقة حولها، مع الأشكال المغلقة داخلها كجزر. Enter ينشئ تهشيرًا واحدًا لكل ذلك.
- `S`: `Select closed objects` (خطوط متعددة مغلقة، دوائر، قطع ناقص مغلقة).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): تكون التعبئة تدرجًا بدل النقشة. انظر {{cmd:GRADIENT}} لأسئلته.

انظر [التهشير وتعبئة المناطق](topic:hatch).

### GRADIENT

الأسماء المستعارة: `GD`. يملأ منطقة بتدرّج لونين أو لون واحد. يسأل عن التدرج أولًا، ثم يتابع كما يفعل {{cmd:HATCH}} (`Pick internal point`، و`S` للكائنات المغلقة، وEnter للإنهاء).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`، يتكرر؛ ويطبع التدرج كما هو الآن في كل مرة.
- `T`: `LINEAR`، `CYLINDER`، `SPHERICAL`، `HEMISPHERICAL`، `CURVED`، أو أحدها مقلوبًا (`INVCYLINDER`، `INVSPHERICAL`، `INVHEMISPHERICAL`، `INVCURVED`). تكفي الحروف الأولى.
- `O`: لون واحد، ثم درجته من 0 إلى 1 (0 يظلله إلى الأسود، و0.5 هو اللون نفسه، و1 يفتحه إلى الأبيض). `TW`: اللون الأول واللون الثاني. اللون رقم من 1 إلى 255، أو ثلاثة أرقام مثل `255,128,0`، أو `#rrggbb`.
- `A`: الزاوية التي يسير بها التدرج. `C`: مركز Yes أو No (No يحرك منتصف التدرج إلى أحد الجانبين).
- يرفض لونًا أو نوعًا لا يعرفه، ودرجة خارج 0 إلى 1.

{{cmd:HATCHEDIT}} `G` وخصائص (Gradient) تغيّر التدرج لاحقًا، أو تحوّل أي تهشير إلى تدرج. يُرسم التدرج على الشاشة ويُطبع. DWG 2004 وما بعده يحفظه كتهشير تدرج حقيقي؛ أما DXF 2000 وDWG 2000 فيحفظانه لـ CadCraft، وترى البرامج الأخرى تعبئة مصمتة باللون الأول.

### HATCHGENERATEBOUNDARY

الأسماء المستعارة: `HGB`. يعيد إنشاء الحد من تهشير فقد حده. `Select hatches` (أو حددها أولًا)، ثم `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- يصبح كل حلقة في التهشير خطًا متعددًا مغلقًا على طبقة التهشير؛ وتبقى الخطوط المتعددة الجديدة محددة. تتحول الحافة المنحنية إلى المقاطع المستقيمة القصيرة التي يحتفظ بها التهشير.
- مع Yes يتبع التهشير حده الجديد، كما يفعل التهشير المنشأ بواسطة {{cmd:HATCH}}. خطوة تراجع واحدة.
- يذكر ذلك عندما لا يكون قد تم تحديد تهشير.

### POINT

الأسماء المستعارة: `PO`؛ أو {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. كائنات نقطة، نقطة لكل نقرة، حتى Enter.

- `Specify a point`

### XLINE

الأسماء المستعارة: `XL`؛ أو {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. خطوط إنشاء لا نهائية في الاتجاهين. انظر [خطوط الإنشاء والأشعة](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`، ثم `Specify through point` لكل خط، حتى Enter.
- `A`: `Enter angle of construction line [Reference] <0>`؛ و`R` يسأل `Select a line object` أولًا.
- `B`: `Specify angle vertex point`، `Specify angle start point`، ثم `Specify angle end point` لكل خط.
- `O`: `Specify offset distance [Through] <Through>`، ثم `Select a line object` و`Specify side to offset` (أو `Specify through point`) لكل خط.

### RAY

لا توجد أسماء مستعارة؛ أو {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`، ثم `Specify through point` لكل شعاع، حتى Enter.

### TEXT

الأسماء المستعارة: `DT`، `DTEXT`؛ أو {{ui:Text}} في شريط الأدوات. نص سطر واحد؛ كل سطر كائن مستقل.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`، ثم `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`، يتكرر: كل Enter يبدأ السطر التالي تحته. Enter على سطر فارغ ينهي. {{key:Space}} يكتب مسافة هنا.

### DIVIDE

الاسم المختصر: `DIV`. {{cmd:DIVIDE}} يضع علامات على خط أو قوس أو دائرة أو خط متعدد أو Spline أو قطع ناقص تقسمه إلى أجزاء متساوية. التقط الكائن، ثم أعطِ عدد الأجزاء (من 2 إلى 32767). الكائن المفتوح يحصل على علامة أقل من عدد الأجزاء؛ والمغلق يحصل على علامة عند بدايته أيضًا. لا يُقطع الكائن نفسه. العلامات نقاط؛ و`Block` يطلب بدلًا من ذلك كتلة من هذا الرسم، وهل تدور لتتبع الكائن. تُقاس الأطوال على Spline والقطع الناقص بأوتار قصيرة. يرفض النص والتهشير وغيرها من الكائنات التي لا طول لها.

### MEASURE

الاسم المختصر: `ME`. {{cmd:MEASURE}} يضع علامة كل طول معطى على طول خط أو قوس أو دائرة أو خط متعدد أو Spline أو قطع ناقص، بدءًا من الطرف الأقرب إلى نقطة التقاطك (والكائن المغلق: من بدايته). أعطِ الطول بكتابته أو بنقطتين. الطرف البعيد للكائن المفتوح لا يحصل على علامة. `Block` يضع كتلة عند كل علامة بدلًا من نقطة. يرفض طولًا يساوي 0، أو أطول من الكائن، أو طولًا يجعل العلامات أكثر من 32767.

### BOUNDARY

الأسماء المختصرة: `BO`، `BPOLY`. {{cmd:BOUNDARY}} يصنع خطًا متعددًا مغلقًا حول المنطقة التي تحتوي النقطة التي تلتقطها، من أي خطوط وأقواس ودوائر وخطوط متعددة ومنحنيات تحيط بها على الشاشة. الأجزاء الواقعة على قوس أو دائرة تعود كمقاطع أقواس؛ وأجزاء القطع الناقص وSpline تعود كمقاطع مستقيمة قصيرة. مع تشغيل `Islands` (وهو إعداد البداية) تحصل كل منطقة مغلقة داخلها على خط متعدد خاص بها. استمر في التقاط النقاط؛ وEnter ينهي. تبقى الكائنات التي تحدد المنطقة كما هي. يذكر ذلك عندما لا توجد منطقة مغلقة تحتوي النقطة.

### BLEND

{{cmd:BLEND}} يرسم منحنى Spline بين طرفي منحنيين مفتوحين. التقط كل منحنى قرب الطرف المراد وصله. `CONtinuity` يختار `Tangent` (يخرج المنحنى ويصل على طول المنحنيين) أو `Smooth` (يتبع أيضًا الانحناء الذي عندهما عند الطرفين)؛ والاختيار يُحفظ للجلسة. لا يتغير المنحنيان. يرفض الكائنات المغلقة والطرفين اللذين يلتقيان أصلًا.

### REGION

الاسم المختصر: `REG`. {{cmd:REGION}} يحوّل الكائنات المغلقة إلى مناطق: مساحات مسطحة يمكن وصلها وقصّها وقياسها. حدد دوائر أو خطوطًا متعددة مغلقة أو قطعًا ناقصة مغلقة أو Spline مغلقة، أو خطوطًا وأقواسًا وخطوطًا متعددة مفتوحة تغلق حلقة طرفًا بطرف؛ كل حلقة تصبح منطقة واحدة وتحل محل الكائنات التي جاءت منها. تبقى الأقواس أقواسًا؛ وتصبح القطع الناقصة وSpline مقاطع مستقيمة قصيرة. ما ليس مغلقًا ولا يغلق حلقة يبقى كما هو، ويُذكر عدده. في الرسم، المنطقة خط متعدد مغلق أو أكثر مجمّعة كمجموعة بلا اسم، فتحدد النقرة المنطقة كلها، والنسخة منطقة مستقلة؛ أما البرامج الأخرى التي تفتح الملف فترى خطوطًا متعددة مغلقة.

مع وجود مناطق في الرسم، تعمل {{cmd:UNION}} و{{cmd:SUBTRACT}} و{{cmd:INTERSECT}} على علامة التبويب ثنائية الأبعاد على المناطق: `UNION` يصل المناطق المحددة في واحدة (المناطق المتفرقة تصبح منطقة واحدة ذات عدة محيطات)، و`SUBTRACT` يسأل عن المناطق المطروح منها ثم المناطق المراد طرحها (تبقى الفتحة جزءًا من المنطقة)، و`INTERSECT` يُبقي المساحة التي تشترك فيها كلها. كل منها يذكر مساحة الناتج وهو خطوة تراجع واحدة. ترفض إذا لم يبق شيء أو لا يوجد مشترك. في علامة التبويب ثلاثية الأبعاد، وفي رسم بلا مناطق، تعمل الأوامر نفسها على المجسمات كما كانت.

## تعديل

الأسماء المستعارة: `MT`، `T`؛ أو {{ui:Paragraph}} في شريط الأدوات. نص فقرة يلتف عند عرض محدد، يُكتب في مكانه.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: العرض بين الركنين هو المكان الذي يلتف عنده النص. `H` يسأل `Specify height`، و`J` يسأل `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`، و`L` يسأل `Enter line spacing factor (0.25 to 4)`، و`R` يسأل `Specify rotation angle`، و`W` يسأل `Specify width (0 for no wrapping)` ويتخطى الركن الثاني.
- بعد ذلك يفتح مربع على الرسم: اكتب، واضغط {{key:Enter}} لفقرة جديدة، و{{key:Mod+Enter}} أو نقرة خارجه لإنهاء الكتابة، و{{key:Esc}} للإلغاء. شريطه يضبط الارتفاع وتباعد الأسطر والعرض والمحاذاة. انظر [إضافة النص والتسميات](topic:text#write-a-note-that-wraps).

### TEXTEDIT

الأسماء المستعارة: `ED`، `DDEDIT`؛ أو انقر نقرًا مزدوجًا على نص. `Select a text to edit`، يتكرر حتى {{key:Enter}}: كل نص يُفتح في المربع نفسه. إذا بدأ الأمر على نص محدد أو نقر عليه نقرًا مزدوجًا، يحرر ذلك النص فقط وينتهي.

### ERASE

الأسماء المستعارة: `E`، `DELETE`؛ أو اضغط {{key:Delete}} مع تحديد كائنات.

- `Select objects` (يُتخطى عندما تكون الكائنات محددة بالفعل)

### MOVE

الاسم المختصر: `M`.

- `Select objects`
- `Specify base point [Displacement]`، `Specify second point`
- `D`: `Specify displacement`، يُكتب كـ `dx,dy`.

### COPY

الأسماء المختصرة: `CO`، `CP`. ينسخ بعدد المرات التي تعطي فيها نقاطًا.

يضع `Array` عند موجّه النقطة الثانية صفًا دفعة واحدة: أعطِ عدد العناصر (الأصلي يُحسب واحدًا)، ثم النقطة التي تذهب إليها النسخة الأولى؛ وتتبعها الباقي بالتباعد نفسه. `Fit` يجعل تلك النقطة مكان آخر نسخة بدلًا من ذلك، مع توزيع الباقي بينهما بالتساوي.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`، يتكرر حتى Enter. `U` يسحب آخر نسخة.

### ROTATE

الاسم المختصر: `RO`.

- `Select objects`، `Specify base point`
- `Specify rotation angle <last angle>`: بالدرجات، والموجب عكس عقارب الساعة؛ أو انقر نقطة لتدوير الكائن نحوها.

### SCALE

الاسم المختصر: `SC`.

- `Select objects`، `Specify base point`
- `Specify scale factor`: اكتب معاملًا مثل `0.5` أو `2`. النقطة التي تنقرها تعطي مسافتها عن نقطة الأساس معاملًا.

### MIRROR

الاسم المختصر: `MI`.

- `Select objects`
- `Specify first point of mirror line`، `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

الاسم المختصر: `AL`؛ أو {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Select objects`
- `Specify first source point`، `Specify first destination point`
- `Specify second source point (Enter to continue)`، `Specify second destination point`
- `Specify third source point (Enter to continue)`، `Specify third destination point`
- مع زوجين: `Scale objects based on alignment points? [Yes/No] <N>`

انظر [محاذاة الكائنات](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (أو التحديد)، `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`، `To [Selection/First/Last/Point] <Selection>`؛ و`P` يسأل عن النقطة. يبقى التحديد.

### DISTRIBUTE

- `Select objects` (ثلاثة على الأقل)، `Distribute [Horizontally/Vertically] <Horizontally>`، `Space evenly [Centers/Gaps] <Gaps>`. الطرفان الخارجيان يبقيان؛ ويبقى التحديد.

### ALIGNPANEL

الاسم المختصر: `ALP`؛ أو {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. يفتح اللوحة التي تشغّل ALIGNTO وDISTRIBUTE بالنقر.

### LASER

الاسم المختصر: `LASERCUT`؛ أو {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. يفتح لوحة الليزر فوق الرسم: ما تفعله كل طبقة (قطع، أو خدش، أو نقش، أو تعبئة، أو صورة)، والمعاينة، وشفرة GRBL G-code للحفظ، والتأطير والإرسال عبر Web Serial. انظر [إرسال رسم إلى الليزر](topic:laser-cutting).

### STRETCH

الاسم المختصر: `S`؛ أو {{ui:Stretch}}. `Select objects to stretch`: اسحب نوافذ متقاطعة (أو اكتب `C`) فوق الأطراف لتنقلها. `Specify base point [Displacement]`، `Specify second point`. النقاط داخل النوافذ تتحرك: أطراف الخطوط، ورؤوس الخطوط المتعددة (تحتفظ مقاطع الأقواس بارتفاعها)، ونقاط الأبعاد؛ أما الدوائر والقطع الناقصة والنص والنقاط والكتل فتتحرك كاملة إذا كان مركزها أو نقطة إدراجها داخل النافذة. التحديد الذي تم قبل الأمر يحتفظ بالنوافذ المتقاطعة (والاسوات) التي أنشأته، فتُمدّ بالطريقة نفسها. بدون نافذة تتحرك الكائنات كاملة.

### ARRAY، ARRAYRECT، ARRAYPOLAR

الاسم المختصر: `AR`؛ أو {{ui:Array}}. `Select objects`، ثم `Enter array type [Rectangular/POlar] <Rectangular>` (لـ ARRAY فقط).

- Rectangular يبدأ بـ 4 أعمدة × 3 صفوف، بتباعد 1.5 ضعف حجم الكائنات، ويظهر كمعاينة. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` يسأل عن الأعمدة والصفوف، و`S` المسافات بين الأعمدة وبين الصفوف (السالب يذهب يسارًا أو لأسفل)، و`COL` و`R` كل منهما لاتجاه واحد.
- Polar يسأل `Specify center point of array`، ويبدأ بـ 6 عناصر تدور كلها حول المركز، مع دوران. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` العناصر، و`F` زاوية التعبئة (+ عكس عقارب الساعة، − مع عقاربها)، و`ROT` Yes أو No.
- {{key:Enter}} (eXit) ينشئ النسخ ككائنات عادية. خطوة تراجع واحدة.
- `AS` (ASsociative) يبدّل بين نسخ عادية ومصفوفة تبقى قابلة للتحرير: كائن واحد تغيّره لاحقًا بواسطة {{cmd:ARRAYEDIT}}، من مقابضه أو من الخصائص. الاختيار يُتذكر ({{cmd:ARRAYASSOCIATIVITY}})؛ ويبدأ بالنسخ العادية.

### ARRAYPATH

نسخ على طول منحنى. `Select objects`، ثم `Select path curve`: خط أو قوس أو دائرة أو قطع ناقص أو خط متعدد أو Spline (ليس أحد الكائنات التي تُصفّ). يبدأ المسار من طرفه الأقرب إلى الكائنات، والعنصر الأول هو الكائنات في مكانها.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`، مع معاينة. `M`: `Divide` يوزع العناصر بالتساوي على المسار كله، و`Measure` يضع واحدًا كل مسافة معينة. `I`: عدد العناصر (مع Measure، الصفر يعني بقدر ما يتسع؛ والعدد الذي يتجاوز نهاية المسار يُحصر فيما يتسع). `SP`: المسافة بين العناصر على المسار (يحوّل إلى Measure). `AL`: Yes يدير كل عنصر ليتبع المسار، وNo يُبقيه منتصبًا.
- `AS` كما في {{cmd:ARRAY}}. مع تشغيله تحتفظ المصفوفة بنسختها الخاصة من شكل المسار: تعديل منحنى المسار لاحقًا لا يحرك العناصر.
- يرفض مسارًا ليس منحنى، وعنصرًا واحدًا.

### ARRAYEDIT

يغيّر مصفوفة أُنشئت بالخيار ASsociative. `Select array` (أو حددها أولًا). يطبع ما هي عليه المصفوفة الآن، ثم يسأل حتى {{key:Enter}}:

- Rectangular: `COL` الأعمدة وتباعدها، و`R` الصفوف وتباعدها، و`A` الزاوية التي تسير بها الأعمدة.
- Polar: `I` العناصر، و`F` زاوية التعبئة، و`ROT` تدوير العناصر Yes أو No.
- Path: `M` Divide أو Measure، و`I` العناصر، و`SP` التباعد، و`AL` المحاذاة مع المسار.
- `S` (Source) يفتح الكائنات التي تكررها المصفوفة، وحدها، كما في محرّر الكتل. ارسم وحرّر هناك؛ و{{cmd:ARRAYCLOSE}} يحفظ أو يتجاهل، وتتبعه كل العناصر.
- `REP` (REPlace): `Select replacement objects`، `Specify base point of the replacement objects`، ثم انقر العناصر المراد استبدالها، و{{key:Enter}}. تُظهر تلك العناصر الاستبدال بدلًا من ذلك؛ وكائنات الاستبدال تغادر الرسم وتعيش داخل المصفوفة. `RES` (RESet) يُظهر كائنات المصدر في كل عنصر من جديد.
- كل تغيير خطوة تراجع واحدة. يرفض النسخ العادية، ومرجع كتلة عادي، ومصفوفة على طبقة مقفلة.

الأرقام نفسها موجودة في الخصائص تحت Array، ولها مقابض: نقطة الأساس تحركها، والمقبض عند العنصر الثاني يضبط التباعد، والمقبض بعد آخر عنصر يضبط العدد (القطبية: العنصر الثاني يضبط عدد العناصر، والأخير يضبط زاوية التعبئة). {{cmd:EXPLODE}} يعيد المصفوفة إلى نسخ عادية.

### ARRAYCLOSE

ينهي {{cmd:ARRAYEDIT}} للمصدر: `Save the changes to the array's source objects? [Save/Discard] <Save>`. يذكر ذلك عندما لا تكون كائنات مصدر لأي مصفوفة مفتوحة. و{{cmd:BCLOSE}} يفعل الشيء نفسه.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. يضبط ما تبدأ عليه {{cmd:ARRAY}} وARRAYRECT وARRAYPOLAR و{{cmd:ARRAYPATH}}؛ وخيارها `AS` يغيّر الإعداد نفسه. يُتذكر في هذا المتصفح.

### OFFSET

الاسم المختصر: `O`. خطوط وأقواس ودوائر وخطوط متعددة.

عندما ينتقل خط متعدد إلى الخارج وتتباعد مقاطعه المستقيمة عند زاوية، يحدد {{cmd:OFFSETGAPTYPE}} كيف تُغلق الفجوة.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`، ثم `Specify point on side to offset` (أو مع Through: `Specify through point`)، يتكرر حتى Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: كيف يغلق {{cmd:OFFSET}} الفجوات عند الزوايا الخارجية لخط متعدد. `0` يمدّ المقاطع حتى تلتقي (وهو إعداد البداية)، و`1` يصلها بقوس حول الزاوية القديمة، و`2` بقطع مستقيم. الزوايا الداخلية ومقاطع الأقواس لا تتأثر. يُحفظ لهذه الجلسة.

### EXTRIM

{{cmd:EXTRIM}} يقصّ كل شيء على جانب واحد من حافة. اختر حافة القطع (خطًا أو قوسًا أو دائرة أو خطًا متعددًا أو قطعًا ناقصًا أو Spline أو خط إنشاء)، ثم التقط نقطة على الجانب المراد تنظيفه: كل خط وقوس ودائرة وخط متعدد وخط إنشاء يعبر الحافة يفقد جزأه على ذلك الجانب، من الحافة. أثناء اختيار الجانب تتبع الأجزاء التي ستذهب المؤشر. بالنسبة لحافة مغلقة، الجانبان هما الداخل والخارج. الكائنات التي تلامس الحافة فقط، والنص والتهشير وSpline والقطع الناقصة التي تعبرها، تبقى كما هي. خطوة تراجع واحدة.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: كيف يبدأ {{cmd:TRIM}} و{{cmd:EXTEND}}. `1` سريع: كل كائن حافة قطع أو حد. `0` قياسي: يسألان عن الحواف أولًا. وأيضًا `(setvar "TRIMEXTENDMODE" 0)` في LISP.

### TRIM

الاسم المختصر: `TR`. يطبع `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` أولًا. في الوضع السريع كل كائن مرئي حافة قطع، والكائن الذي لا يعبره شيء يُحذف؛ وفي الوضع القياسي يسأل `Select cutting edges (Enter = every object)` أولًا ولا يقطع إلا عندها.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`، يتكرر: انقر القطعة المراد إزالتها (تظهر رمادية ومنقطة أثناء وقوف المؤشر عليها)، أو اسحب مسارًا عبر عدة قطع (تذهب كلها في خطوة واحدة)، أو انقر نقطتين فارغتين لسياج بينهما. {{key:Shift}} يمدّ بدلًا من ذلك. `T` يختار حواف القطع (في الوضع القياسي)، و`F` يسأل عن نقاط السياج، و`C` زاويتي نافذة (تذهب القطع الواقعة جزئيًا داخلها)، و`O` يسأل `Enter a trim mode option [Quick/Standard]`، و`E` يسأل `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE)، و`R` يحذف الكائنات التي تحددها، و`U` يتراجع عن آخر التقاط أو سحب. Enter ينهي. انظر [القصّ والتمديد](topic:trim-and-extend).

- النقر على تهشير يقصّ التهشير: حواف القطع تقسم المنطقة المهشرة، وتؤخذ القطعة التي نقرتها (ولا يبقى أي خط مرسوم مكانها). يحتفظ التهشير بنقشته أو تدرجه؛ والتهشير المرتبط بحده لا يبقى مرتبطًا بعد ذلك، لأنه لم يعد يملؤه. يُذكر ذلك عندما لا تقسم أي حافة قطع التهشير هناك، أو عندما تكون النقرة خارج التهشير، أو عندما لا يبقى شيء (استخدم {{cmd:ERASE}}). المسار أو السياج المسحوب لا يقصّ التهشير.

### EXTEND

الاسم المختصر: `EX`. هو TRIM بالعكس: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. النقرة تطيل الطرف الأقرب إليها حتى الحد التالي؛ والمسار أو السياج المسحوب يطيل كل كائن يعبره؛ و{{key:Shift}} يقصّ. `B` يختار حواف الحد (في الوضع القياسي). الوضع والحافة مشتركان مع TRIM.

### LINKVIEWS

الاسم المختصر: `SYNCVIEWS`؛ أو {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}، أو أيقونة الربط على تبويبات الرسم. `Link the panes' views [ON/OFF]` (Enter يبدّل الحالة الأخرى): أثناء التشغيل، أي تحريك أو تكبير في اللوح النشط يحرك كل لوح يعرض النوع نفسه من الفضاء. انظر [تقسيم الشاشة](topic:split-screen).

### OPENIN3D

لا توجد أسماء مستعارة؛ أو {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} حيث يقبل تطبيق النمذجة ثلاثية الأبعاد الرسم المسلَّم إليه. يفتحه هناك في تبويب جديد، كملف DWG (لا يُرفع شيء). إذا منع المتصفح التبويب، يذكر ذلك.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: ما يرسمه الضغط والسحب على مكان فارغ. هو نفسه الإعداد الإعدادات › CadCraft › السحب لتحديد. انظر [التحديد بالاسو](topic:lasso-selection).

### FILLET

الاسم المختصر: `F`. خطوط وأقواس ودوائر وخطوط متعددة. يطبع `Current settings: Mode = TRIM, Radius = 0` أولًا.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` يسأل `Specify fillet radius <last>`. `T` يسأل `Enter Trim mode option [Trim/No trim]`: مع No trim تبقى الكائنات كما هي ويُضاف القوس فقط.
  - `M` يبقي الأمر قائمًا لزوايا أخرى حتى {{key:Enter}}؛ و`U` يتراجع عن آخر زاوية دون ترك الأمر.
  - `P` يسأل `Select 2D polyline [Radius]` ويدوّر كل زاوية يلتقي فيها مقطعان مستقيمان. التدويرات الموجودة تُستبدل بنصف القطر الجديد؛ ونصف القطر 0 يزيلها. الزوايا التي تكون أضلاعها قصيرة جدًا لنصف القطر تُترك وتُحسب.
- `Select second object or shift-select to apply corner [Radius]`. اضغط {{key:Shift}} أثناء النقر لزاوية حادة، مهما كان نصف القطر.

انقر كل كائن على الجزء الذي تريد إبقاءه. الخطان اللذان لا يلتقيان يُمدان. الخطان المتوازيان يحصلان على نصف دائرة عبر الفجوة، عند طرف الخط الأول الأقرب إلى نقرتك. الدائرة لا تُقطع أبدًا. مقطعان متجاوران من خط متعدد واحد يحصلان على القوس داخل الخط المتعدد؛ والخط المتعدد وكائن آخر يعملان عندما يقع القطع على الجزء الأول أو الأخير من الخط المتعدد.

### CHAMFER

الاسم المختصر: `CHA`. الخطوط والمقاطع المستقيمة للخطوط المتعددة. يطبع المسافات الحالية (أو الطول والزاوية) أولًا.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` يسأل `Specify first chamfer distance <last>` و`Specify second chamfer distance <the first>`: الأولى تُقطع من الخط الأول الذي تلتقطه، والثانية من الآخر.
  - `A` يسأل `Specify chamfer length on the first line` و`Specify chamfer angle from the first line`.
  - `E` (mEthod) يختار أي الطريقتين يستخدم الشطف التالي. `T` و`M` و`U` و`P` تعمل كما في {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+نقرة تجعل الزاوية حادة.

المسافة الأطول من الخط تُرفض (`Distance is too large.`).

### BREAK وBREAKATPOINT

الاسم المختصر: `BR`. `Select object` (حيث تنقر هو النقطة الأولى)، `Specify second break point [First point]`؛ و`F` يسأل `Specify first break point` و`Specify second break point`. الجزء الواقع بينهما يُحذف؛ على الدائرة، عكس عقارب الساعة من النقطة الأولى. يسأل BREAKATPOINT `Specify break point` ويقسم الكائن إلى قسمين عندها (ليس دائرة).

### LENGTHEN

الاسم المختصر: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: التقاط يطبع `Current length` (وزاوية القوس المحصورة) ويسأل مرة أخرى. `DE` يسأل `Enter delta length (negative shortens) [Angle]`، و`P` يسأل `Enter percentage length`، و`T` يسأل `Specify total length [Angle]`، و`DY` يسحب. ثم `Select an object to change [Undo]`، يتكرر: يتحرك الطرف الأقرب إلى النقرة. للخطوط والأقواس والخطوط المتعددة المفتوحة.

### JOIN

الاسم المختصر: `J`. `Select objects to join`. الخطوط والأقواس والخطوط المتعددة المفتوحة التي تلتقي طرفًا بطرف تصبح خطوطًا متعددة (مغلقة عندما تُغلق السلسلة)؛ والخطوط على استقامة واحدة تصبح خطًا واحدًا؛ والأقواس من دائرة واحدة تصبح قوسًا واحدًا أو الدائرة. يذكر السجل كم كائنًا وُصل وكم لم يُوصل.

### MATCHPROP

الأسماء المستعارة: `MA`، `PAINTER`. `Select source object`، ثم `Select destination objects [Settings]` و{{key:Enter}}. ينسخ الطبقة واللون، وبين كائنات من النوع نفسه يعيد ارتفاع النص وعرضه، وأحجام الأبعاد، أو نقشة التهشير. `S` يسأل `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`، يتكرر حتى {{key:Enter}}؛ والاختيار يُتذكر للجلسة.

### EXPLODE

الاسم المختصر: `X`. الخطوط المتعددة تصبح خطوطًا وأقواسًا، ومراجع الكتل تصبح كائناتها، والأبعاد تصبح خطوطًا ورؤوس أسهم ونصًا. المصفوفة القابلة للتحرير ({{cmd:ARRAYEDIT}}) تصبح نسخًا عادية لكائناتها.

- `Select objects`

### GROUP

الاسم المختصر: `G`. {{cmd:GROUP}} يعطي الكائنات المحددة اسمًا مشتركًا. حدد الكائنات، ثم اكتب اسمًا (بلا مسافات؛ و`?` يسرد المجموعات؛ وEnter ينشئ مجموعة بلا اسم)، ووصفًا اختياريًا للمجموعة المسماة. من ذلك الحين، النقر على أحدها، أو نافذة تأخذ أحدها، يحدد كلها، فتتحرك وتُنسخ وتُمحى معًا؛ ويبقى كل كائن كائنًا مستقلًا. يمكن أن يكون الكائن في عدة مجموعات. نسخة مجموعة كاملة تصبح مجموعة جديدة بلا اسم؛ ونسخة عضو واحد وحده تنضم إلى المجموعة. المجموعات تنتمي إلى الفضاء الذي أُنشئت فيه (النموذج أو ورقة). تبقى محفوظة عند الحفظ كـ DWG أو DXF وإعادة فتح الملف في CadCraft؛ وملفات DXF 2000 تحملها أيضًا ككائنات مجموعة للبرامج الأخرى، والمجموعات المنشأة في برنامج آخر تُقرأ عند فتح DXF أو DWG.

### UNGROUP

{{cmd:UNGROUP}} يفكّ المجموعات: حدد كائنات من المجموعات (تُفكّ كل مجموعة تنتمي إليها)، أو اكتب `Name` واسم المجموعة. تبقى الكائنات في الرسم. خطوة تراجع واحدة تعيد المجموعات.

### GROUPEDIT

{{cmd:GROUPEDIT}} يغيّر مجموعة واحدة. التقط أحد كائناتها، أو `Name` واسمها؛ والمجموعة المحددة بالفعل تُؤخذ كما هي. ثم: `Add` كائنات (تُلتقط واحدًا واحدًا، لا مجموعة مجموعة)، و`Remove` كائنات، و`REName` للمجموعة، أو تغيير `Description` لها، أو ضبط `Selectable` (هل النقر على كائن واحد يحدد المجموعة كاملة). `eXit` أو Enter ينهي. المجموعة التي لا يبقى فيها كائن تزول.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: مع `1` (إعداد البداية) النقر أو النافذة على كائن مجمّع يحدد المجموعة كاملة؛ ومع `0` الكائنات المفردة، فتستطيع تحرير عضو واحد. يُحفظ لهذه الجلسة.

## الحافظة

حافظة CadCraft الخاصة به: تعمل داخل الرسم، وبين الرسوم، وبين تبويبات CadCraft في هذا المتصفح. انظر [النسخ واللصق والتكرار](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}، أو {{ui:Copy}} في مجموعة {{ui:Edit}}. ينسخ الكائنات إلى الحافظة، مع الكتل والطبقات التي تستخدمها. تبقى الكائنات محددة.

- `Select objects to copy` (يُتخطى عندما تكون الكائنات محددة بالفعل)

### CUTCLIP

{{key:Mod+X}}، أو {{ui:Cut}} في قائمة {{ui:More}}. ينسخ الكائنات إلى الحافظة، ثم يمحوها (خطوة تراجع واحدة).

- `Select objects to cut` (يُتخطى عندما تكون الكائنات محددة بالفعل)

### COPYBASE

ينسخ الكائنات إلى الحافظة مع نقطة أساس تلتقطها؛ واللصق يضع تلك النقطة في المكان.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}، أو {{ui:Paste}} في مجموعة {{ui:Edit}}. النسخة تتبع المؤشر، معلّقة من الركن السفلي الأيسر لامتداداتها (أو من مركزها، أو من نقطة `COPYBASE`؛ انظر [إعدادات CadCraft](topic:settings)).

- `Specify insertion point`

الكائنات الملصوقة تصبح محددة. الكتلة التي يملكها الرسم بالفعل تحت الاسم نفسه تحتفظ بتعريف هذا الرسم.

عندما تكون منطقة نُسخت في MarkupCraft أحدث مما نسخه CadCraft (وعمرها أقل من 6 ساعات)، فإن {{key:Mod+V}} وPASTECLIP يلصقان تلك المنطقة بدلًا من ذلك: انظر PASTEAREA.

### PASTEAREA

الاسم المختصر: `PAREA`. {{ui:Paste a copied area}} في قائمة {{ui:More}}. يلصق منطقة نُسخت بواسطة {{ui:Copy area}} في MarkupCraft كصورة بحجمها الحقيقي. انظر [الصور في الرسم](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (فقط إذا لم يكن للورقة مقياس رسم): رقم، أو {{key:Enter}} لحجم الورقة، أو `P`، ثم `First point on the pasted area`، و`Second point on the pasted area` والمسافة الحقيقية بينهما.

### PASTEORIG

{{key:Mod+Shift+V}}، أو {{ui:Paste in place}} في قائمة {{ui:More}}. يلصق في الإحداثيات التي نُسخت منها الكائنات. لا يسأل شيئًا.

### DUPLICATE

الاسم المختصر: `DUP`. {{key:Mod+D}}، أو {{ui:Duplicate and move}} في قائمة {{ui:More}}. نسخة من الكائنات تتحرك مع المؤشر من مكانها الحالي؛ و{{key:Esc}} لا يترك شيئًا. لا يستخدم الحافظة.

- `Select objects to duplicate` (يُتخطى عندما تكون الكائنات محددة بالفعل)
- `Specify where the copy goes (Esc leaves nothing)`: انقر، أو اكتب نقطة، أو `@dx,dy` (من حيث كان المؤشر)، أو مسافة نحو المؤشر.

### SELECT

يسأل `Select objects` (مع كل الخيارات أدناه) ويترك ما اخترته محددًا، للأمر التالي أو لـ `P` لاحقًا.

### QSELECT

الاسم المختصر: `QS`. في المتصفح، حوار {{ui:Quick select}} (انظر [تحديد الكائنات](topic:select-objects#select-by-a-rule-quick-select)). بدونه، يسأل سطر الأوامر `Enter object type`، و`Enter property`، و`Enter operator [=/<>/>/</*/Select all] <=>`، و`Enter value`. المطابقات تصبح التحديد.

### SELECTSIMILAR

الاسم المختصر: `SIM`. `Select objects [SEttings]` (أو التحديد الحالي): يحدد كل كائن من النوع نفسه، والطبقة واللون نفسهما (واسم الكتلة ونقشة التهشير). `SE` يسأل `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`، يتكرر حتى {{key:Enter}}.

### FIND

لا توجد أسماء مستعارة؛ أو {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. في المتصفح، حوار {{ui:Find and replace}} (انظر [إضافة النص والتسميات](topic:text#find-and-replace-words)). بدونه: `Enter text to find`، ثم `Enter replacement text (Enter: select what is found)`. يبحث في النص وقيم السمات ونص الأبعاد، في علامة التبويب المفتوحة أو في التحديد.

### SELECTALL وDESELECT

`SELECTALL` (الاسم المستعار `AI_SELALL`، {{key:Mod+A}}) يحدد كل كائن يمكن تحريره في علامة التبويب المفتوحة. `DESELECT` (الأسماء المستعارة `AI_DESELECT`، `SELECTNONE`؛ أو {{key:Esc}}) يمسح التحديد.

## الأبعاد

### DIMLINEAR

الأسماء المستعارة: `DLI`، `DIMLIN`. المسافة الأفقية أو العمودية.

- `Specify first extension line origin [Select object]` (Enter أو `S`: `Select object to dimension`، ثم انقر خطًا أو قوسًا أو دائرة أو مقطعًا من خط متعدد)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` يسأل عن النص (`<>` هي القيمة المقاسة)، و`H` و`V` تثبتان الاتجاه، و`R` يسأل `Specify angle of dimension line <0>`.

### DIMALIGNED

الأسماء المستعارة: `DAL`، `DIMALI`. المسافة الحقيقية بين نقطتين.

- الأصول كما في {{cmd:DIMLINEAR}}، ثم `Specify dimension line location [Text]`.

### DIMANGULAR

الأسماء المستعارة: `DAN`، `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- القوس: زاويته. الدائرة: `Specify second angle endpoint`. الخط: `Select second line`. Enter: `Specify angle vertex`، `Specify first angle endpoint`، `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: انقر داخل الزاوية لقياسها.

### DIMRADIUS وDIMDIAMETER

الأسماء المستعارة: `DRA`، `DIMRAD`؛ `DDI`، `DIMDIA`.

- `Select arc or circle`، ثم `Specify dimension line location [Text]`.

### DIMCONTINUE

الأسماء المستعارة: `DCO`، `DIMCONT`. يتابع من آخر بُعد خطي أو محاذٍ تم إنشاؤه (أو يسأل `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`، يتكرر حتى Enter.

### DIMBASELINE

الأسماء المستعارة: `DBA`، `DIMBASE`. مثل {{cmd:DIMCONTINUE}}، لكن كل بُعد يبدأ من الأصل الأول ويتراكم أبعد إلى الخارج.

### DIMORDINATE

الأسماء المستعارة: `DOR`، `DIMORD`. `Specify feature location`، ثم `Specify leader endpoint [Xdatum/Ydatum/Text]`. يكتب المسافة التي تبعدها الميزة عن أصل UCS على طول X أو Y، على خط إرشاد: خط إرشاد يتجه غالبًا إلى أعلى أو أسفل يقرأ X، والذي يتجه جانبيًا يقرأ Y؛ و`Xdatum` و`Ydatum` يثبتان ذلك. اضبط الأصل أولًا بواسطة {{cmd:UCS}} (بدونه يكون 0,0 للرسم). المقابض تحرك الميزة والأصل ونهاية خط الإرشاد، والقيمة تتبعها. يُحفظ كبُعد ترتيب حقيقي في DWG وDXF. يرفض نهاية خط الإرشاد على الميزة نفسها.

### DIMARC

الاسم المختصر: `DAR`. `Select arc or polyline arc segment`، ثم `Specify arc length dimension location [Text]`. يقيس على طول القوس (لا الوتر) ويكتب رمز القوس قبل القيمة. يرفض الدائرة الكاملة، والخط، والمقطع المستقيم من الخط المتعدد. يحتفظ DWG به كبُعد طول قوس؛ ويحتفظ DXF به كبُعد زاوي مع الطول كنصه، ويفتحه CadCraft كبُعد طول قوس مرة أخرى.

### DIMJOGGED

الأسماء المختصرة: `DJO`، `JOG`. `Select arc or circle`، `Specify center location override`، `Specify jog location`. بُعد نصف قطر لمنحنٍ يكون مركزه بعيدًا أو خارج الورقة: يبدأ خط البُعد من النقطة التي تعطيها بدلًا من المركز، مع كسر فيه، ويكتب نصف القطر الحقيقي. يحتفظ DWG به كبُعد نصف قطر مكسور؛ ويحتفظ DXF به كبُعد نصف قطر، ويفتحه CadCraft مكسورًا مرة أخرى.

### DIMJOGLINE

الاسم المختصر: `DJL`. `Select dimension to add jog [Remove]`، ثم `Specify jog location (or press Enter)`. يضع رمز كسر على خط بُعد خطي أو محاذٍ، ليبيّن أن المسافة غير مرسومة بمقياس صحيح؛ ولا تتغير القيمة. `Remove` يزيله. يرفض الأنواع الأخرى من الأبعاد.

### QDIM

لا توجد أسماء مستعارة. `Select geometry to dimension`، ثم `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. يُبعد عدة كائنات بخطوة واحدة، من أطراف الخطوط ومقاطع الخطوط المتعددة، ومن مراكز الدوائر والأقواس، والنقاط ومراجع الكتل. الموضع فوق الكائنات أو تحتها يقيس عبرها، والموضع بجانبها يقيس صعودًا. `Continuous` يسلسل النقاط، و`Baseline` يقيس الكل من الأولى، و`Staggered` يتداخل الأزواج من الوسط إلى الخارج، و`Ordinate` يعطي كل نقطة مسافتها عن المرجع (`datumPoint` يلتقط مرجعًا جديدًا)، و`Radius` و`Diameter` يُبعدان كل دائرة وقوس تلتقطه. يُتذكر الوضع. كل ما ينشئه خطوة تراجع واحدة. يذكر ذلك عندما تكون هناك أقل من نقطتين، أو لا توجد أقواس أو دوائر لـ Radius وDiameter.

### DIMBREAK

الاسم المختصر: `DBREAK`. `Select dimensions to add or remove breaks`، ثم `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` يترك فجوة في خطوط البُعد والامتداد حيثما تعبرها كائنات أخرى، ويعيد حسابها عندما تتحرك تلك الكائنات أو البُعد. `Manual` (بُعد واحد) يسأل عن نقطتين ويترك فجوة بينهما. `Remove` يزيل كل الفجوات. الفجوة 1.5 ضعف ارتفاع نص البُعد.

### DIMSPACE

لا توجد أسماء مستعارة. `Select base dimension`، `Select dimensions to space`، `Enter spacing value or Auto <Auto>`. يحرك خطوط الأبعاد الخطية والمحاذية المتوازية (أو الزاوية حول الرأس نفسه) لتصبح على المسافة نفسها، مقيسة من البُعد الأساس، كل منها على الجانب الذي هو عليه. `0` يصفّها على محاذاة الأساس، و`Auto` يساوي ضعف ارتفاع نص البُعد الأساس. الأبعاد غير المتوازية مع الأساس تُترك كما هي.

### DIMINSPECT

لا توجد أسماء مستعارة. `Select dimensions`، `Inspection frame shape [Round/Angular/None/remove] <Round>`، `Enter label`، `Enter inspection rate <100%>`. يرسم إطارًا حول القيمة مع تسمية قبلها ومعدل الفحص بعدها. `remove` يزيل الإطار. نص التفاوت يبقى مع القيمة.

### DIMOVERRIDE

الأسماء المستعارة: `DOV`، `DIMOVER`. `Enter dimension variable name to override or Clear`، `Enter new value for …`، مرة أخرى حتى Enter، ثم `Select dimensions`. يغيّر هذه الإعدادات على الأبعاد المحددة فقط؛ ولا يتغير نمط البُعد. يقبل المتغيرات التي هي رقم أو مفتاح تشغيل (`DIMTXT`، `DIMASZ`، `DIMSCALE`، `DIMDEC`، `DIMSE1` …). `Clear` يعيد الأبعاد المحددة إلى نمطها. يرفض اسمًا ليس من هذه المتغيرات وقيمة لا تقبلها.

### DIMREASSOCIATE

الأسماء المستعارة: `DRE`، `DIMREASSOC`. `Select dimensions`، ثم لكل بُعد أصول خطوط امتداده (`Specify first extension line origin on an object`: يلتقط طرفًا أو منتصف خط، أو ركن خط متعدد، أو مركزًا؛ وEnter يُبقي تلك النقطة حرة)، أو لبُعد نصف القطر أو القطر أو نصف القطر المكسور أو طول القوس `Select arc or circle`. يُربط البُعد بتلك الكائنات: عندما تتحرك أو تتغير أحجامها يتبعها ويعيد القياس في خطوة التراجع نفسها. تحريك نقطة مرتبطة يدويًا، أو محو الكائن، ينهي الارتباط. يُحفظ الارتباط في DWG وDXF 2000 كبيانات خاصة بـ CadCraft؛ وترى البرامج الأخرى بُعدًا عاديًا.

### DIMDISASSOCIATE

الأسماء المستعارة: `DDA`، `DIMDISASSOC`. `Select dimensions`. يحررها من الكائنات التي ترتبط بها؛ ولا يتحرك شيء.

### CENTERMARK

الأسماء المستعارة: `CM`، `DIMCENTER`، `DCE`. `Select circle or arc to add center mark`، يتكرر حتى Enter. يرسم صليبًا عند المركز وأربعة خطوط مركزية تمتد إلى ما بعد المنحنى قليلًا (نوع الخط CENTER)، كخطوط عادية على الطبقة الحالية؛ وتُحجم حسب حجم السهم والمقياس الكلي لإعدادات البُعد الحالية، وتُدار مع UCS. لا تتبع الدائرة إذا تحركت.

### CENTERLINE

الاسم المختصر: `CL`. `Select first line`، `Select second line`. يرسم خطًا في منتصف المسافة بين خطين (على المنصّف إذا التقيا)، أطول قليلًا منهما، بنوع الخط CENTER. خط عادي: لا يتبع الخطين.

### DIMSCALE وDIMTXT وDIMASZ وDIMDEC وDIMGAP وDIMEXE وDIMEXO

لا توجد أسماء مستعارة. كل منها يسأل `Enter new value for … <current>` ويضبط ذلك الحجم للأبعاد **الجديدة**: المقياس الكلي، وارتفاع النص، وحجم السهم، والمنازل العشرية (حتى 8)، والمسافة حول النص، والامتداد خارج خط البُعد، والإزاحة عن الأصل. انظر [ضبط أحجام الأبعاد](topic:dimension-settings).

### DIMLUNIT

إعداد البُعد: صيغة الطول للأبعاد الجديدة فقط (1 علمي، 2 عشري، 3 هندسي، 4 معماري، 5 كسري).

### DIMSTYLE وإ-DIMSTYLE

الأسماء المستعارة: `DST`، `DDIM`، `D`. مدير أنماط الأبعاد: {{ui:Set current}}، {{ui:New…}}، {{ui:Modify…}}، {{ui:Rename…}}، {{ui:Delete}}، {{ui:Compare…}}، {{ui:Apply to selected}}. `-DIMSTYLE` في سطر الأوامر: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. انظر [ضبط أحجام الأبعاد](topic:dimension-settings#named-dimension-styles).

### DIMEDIT وDIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`، ثم الأبعاد (أو المحددة من قبل). New يسأل عن النص (`<>` = القياس)؛ وRotate يسأل عن زاوية (0 يعيد النص)؛ وOblique يسأل عن زاوية خطوط الامتداد من محور X (Enter = لا شيء؛ للأبعاد الخطية والمحاذية فقط). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. انظر [ضبط أحجام الأبعاد](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

الاسم المختصر: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`، أو مع أبعاد محددة `Units in the text of the selected dimensions`. يكتب الطول المقاس بتلك الوحدة مع الوحدة بعده (DIMLFAC ولاحقة DIMPOST)؛ و`D` يعود إلى وحدات الرسم. انظر [الأبعاد بالمليمتر أو السنتيمتر أو المتر أو الكيلومتر](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

الاسم المختصر: `RC`. يطبع `Arc length: … Type: …`، ثم `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular يسأل `Specify opposite corner`؛ وPolygonal `Specify next point (Enter closes the cloud) [Undo]`؛ وFreehand يتبع المؤشر حتى نقرة أو {{key:Enter}}؛ و`O` يسأل `Select object` و`Reverse direction? [Yes/No] <N>` ويحول الكائن إلى السحابة. `A` يسأل `Specify the length of each arc`. و`R` و`P` و`F` تختار النوع للسحابة التالية. النتيجة خط متعدد مغلق من الأقواس.

### MLEADER

الأسماء المستعارة: `MLD`؛ أو {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`، `Specify leader landing location`، ثم النص في المربع في مكانه (أو، بدونه، `Enter text (an empty line ends)`). `Block` يسأل عن اسم كتلة أولًا، والخط المتعدد يعرض تلك الكتلة بدلًا من النص. المزيد من خطوط الإرشاد: {{cmd:MLEADEREDIT}}. يُحفظ كخط متعدد حقيقي في DWG؛ ويحتفظ DXF بالخطوط ورأس السهم والنص التي يرسمها.

### MLEADEREDIT

الاسم المختصر: `MLE`. `Select a multileader`، ثم `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: كل نقطة تضيف خط إرشاد من رأس سهم جديد إلى المكان نفسه، حتى Enter. `Remove leaders` يزيل خط الإرشاد الذي تنقره (يحتفظ الخط المتعدد بواحد على الأقل). `Block content` يسأل عن اسم كتلة ويعرضها بدلًا من النص (ويُسأل عن سماتها)؛ و`Text content` يعيد النص. لكل خط إرشاد مقبضه. يحتفظ DWG بكل خطوط الإرشاد والكتلة في خط متعدد واحد.

### MLEADERALIGN

الاسم المختصر: `MLA`. `Select multileaders`، ثم `Select multileader to align to [Distribute/Spacing/Use current spacing]` و`Specify direction`. ينقل أماكن هبوط الخطوط المتعددة الأخرى (ونصوصها أو كتلها) إلى الخط الذي يمر بمكان هبوط الخط الملتقط في ذلك الاتجاه؛ وتبقى رؤوس الأسهم حيث تشير. `Spacing` يجعلها أيضًا على مسافات متساوية؛ و`Distribute` يسأل عن نقطتين ويوزعها بالتساوي بينهما. يحتاج إلى خطين متعددين على الأقل.

### MLEADERCOLLECT

الاسم المختصر: `MLC`. `Select multileaders`، ثم `Specify collected multileader location [Vertical/Horizontal]` (Enter يُبقي مكان الأول). يصنع خطًا متعددًا واحدًا من عدة خطوط: محتوى الكتل يذهب إلى كتلة جديدة تحوي كل الكتل جنبًا إلى جنب أو واحدة تحت الأخرى؛ ومحتوى النص يصبح ملاحظة واحدة بسطر لكل نص. الخط المتعدد الأول يحتفظ بخطوط إرشاده؛ والباقي يُزال. يرفض الخليط من محتوى النص ومحتوى الكتل.

### TABLE

الاسم المختصر: `TB`؛ أو {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. ينشئ جدولًا: كائن واحد تنقله وتنسخه وتديره وتحجمه وتطبعه كأي كائن آخر، وخلاياه محفوظة كبيانات.

- `Number of data rows or [Paste/File/Style] <3>`، ثم `Number of columns <3>`، و`Text height` و`Top left corner of the table`. يحصل الجدول على صف عنوان (خلية مدمجة واحدة) وصف رأس فوق صفوف البيانات.
- `P`: جدول من خلايا جدول بيانات في الحافظة (نص بين كل خلية وأخرى جدولة). الضغط على {{key:Ctrl+V}} مع مثل هذه الخلايا في الحافظة يفعل الشيء نفسه، إلا إذا كانت نسخة CadCraft نفسها أحدث (أو إذا لم يستطع CadCraft التمييز: عندها يلصق نسخته ويذكر ذلك). `F`: جدول من ملف `.csv` أو ملف مفصول بالجدولة. الصف الأول يصبح صف الرأس؛ وعرض الأعمدة يلائم النص.
- `S`: اختر نمط الجدول لهذا الجدول (انظر {{cmd:TABLESTYLE}}).
- يرفض عدد صفوف أو أعمدة ليس عددًا صحيحًا، وعددًا من الخلايا يزيد على ما يتسع له الجدول (2000 صف، 200 عمود، 40000 خلية).
- {{cmd:EXPLODE}} يحوّل الجدول إلى خطوط ونص. يُحفظ الجدول في DWG ككائن جدول حقيقي تستطيع البرامج الأخرى تحريره؛ ويُحفظ في DXF ككتلة ترسمه، ويفتحه CadCraft كجدول مرة أخرى.

### TABLEDIT

الأسماء المستعارة: `TABLEEDIT`، `TABEDIT`؛ أو انقر نقرًا مزدوجًا على خلية. يحرر جدولًا.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. انقر خلية، أو مع تحديد جدول اكتب اسمها (`B3`: العمود B، الصف 3؛ صف العنوان هو الصف 1). في المتصفح يفتح مربع فوق الخلية: {{key:Enter}} يُبقي النص، و{{key:Tab}} ينتقل إلى الخلية التالية، و{{key:Alt+Enter}} يبدأ سطرًا جديدًا، و{{key:Esc}} يترك الخلية كما كانت.
- النص الذي يبدأ بـ `=` معادلة: `=A3+B3`، `=B3*C3`، `=Sum(B3:B9)`، `=Average(B3:B9)`، `=Count(B3:B9)`، `=Min(…)`، `=Max(…)`، مع `+ - * / ^`، والأقواس، ودوال مثل `sqrt` و`round`. الخلية تعرض القيمة؛ والمعادلة التي تسمي خليتها هي، أو خلية خارج الجدول، أو خلية بلا رقم، تعرض `####` ويذكر سطر الأوامر السبب.
- `R` / `C`: `Insert` أو `Delete` للصفوف أو الأعمدة عند خلية تلتقطها (كم، وأعلى أو أسفل، ويسار أو يمين). المعادلات تتبع الخلايا التي تسميها.
- `S`: عرض العمود وارتفاع الصف. لا ينخفض الصف عن حاجة نصه أبدًا. الجدول المحدد له مقبض على حافة كل عمود وكل صف.
- `M`: دمج من خلية ملتقطة إلى أخرى؛ `U`: فك الدمج. `A`: المحاذاة (`TL` أعلى اليسار … `MC` وسط المركز … `BR` أسفل اليمين). `H`: ارتفاع نص هذه الخلية (0 = ارتفاع النمط). `K`: اجعل الصف عنوانًا، أو رأسًا، أو صف بيانات. `CL`: يفرغ الخلية.
- يرفض جدولًا على طبقة مقفلة، وحذف كل الصفوف أو الأعمدة، ودمجًا يقطع خلية مدمجة أخرى إلى نصفين.

### TABLESTYLE

الاسم المختصر: `TS`. يسرد أنماط الجداول مع عدد الجداول التي تستخدم كلًا منها، ثم `Table style: [New/Set/Edit/Delete/Apply]`.

يحمل النمط ارتفاعات نص صف العنوان والرأس والبيانات، ومحاذاتها، وهامش الخلية، والحدود التي تُرسم (الخارجية، وبين الصفوف، وبين الأعمدة).

- `N` ينشئ نمطًا من الحالي ويجعله حاليًا؛ و`S` يضبط النمط الحالي (الجداول الجديدة تأخذه)؛ و`E` يحرر نمطًا: الجداول التي تستخدمه تُعاد رسمها؛ و`A` يعطي الجداول المحددة النمط الحالي؛ و`D` يحذف نمطًا (ليس Standard، ولا الحالي؛ والجداول التي استخدمته تحتفظ بمظهرها).
- تُحفظ الأنماط مع الرسم (DWG وDXF).

### TABLEEXPORT

يحفظ ما يعرضه الجدول كملف CSV (المعادلة بقيمتها). `Select a table`، أو حدده أولًا. خلايا النص التي تبدأ بـ `=` أو `+` أو `-` أو `@` تأخذ `'` في بدايتها حتى لا يُنفّذها برنامج الجداول.

### TABLEPASTE

الاسم المستعار: `PASTETABLE`. ينشئ جدولًا من خلايا جدول بيانات في الحافظة، ثم يسأل عن ركنه العلوي الأيسر. الشيء نفسه مثل {{cmd:TABLE}} › `Paste`.

### DATALINK

الاسم المختصر: `DL`. `Data link: [New/List/Remove] <New>`. `N` يسأل عن ملف CSV، ويضع جدولًا منه، ويتذكر اسم الملف؛ و`L` يسرد الروابط مع ملفاتها وحجمها ووقت قراءتها وعدد الجداول التي تستخدمها؛ و`R` يزيل رابطًا (تبقى جداوله جداولًا عادية).

### DATALINKUPDATE

الاسم المختصر: `DLU`. يعيد قراءة ملف رابط بيانات ويعيد ملء الجداول المرتبطة به (تُضاف الصفوف والأعمدة أو تُحذف لتطابق). المتصفح لا يفتح ملفًا بنفسه، لذلك يطلب منك اختيار الملف من جديد. مع عدة روابط يسأل أيها.

### FIELD

يضع حقلًا في الرسم: نص يحسب نفسه بنفسه. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: الآن، أو تاريخ الحفظ أو الإنشاء أو الطباعة المحفوظ، وصيغة (`yyyy-MM-dd`، `d MMMM yyyy`، `HH:mm`). `F`: اسم الملف، مع امتداده أو بدونه. `S`: رقم الورقة، أو عنوانها، أو عدد الأوراق. `P`: خاصية رسم بالاسم (انظر {{cmd:DWGPROPS}}). `O`: التقط كائنًا، ثم ما تقرؤه (المساحة، والطول، والمحيط، ونصف القطر، والقطر، والطبقة، والاسم، وx، وy، والنص، والدوران، واللون)، وعدد المنازل العشرية. `E`: صيغة. `C`: نص بأكواد مكتوبة كما هي، مثل `Sheet %<sheetnumber>% of %<sheetcount>%`.
- ثم `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: النص الملتقط يُضاف إليه الحقل بعد ما يحتويه؛ وخلية الجدول كذلك؛ ومرجع الكتلة يسأل عن السمة؛ و{{key:Enter}} يسأل عن ارتفاع ونقطة لنص جديد.
- على الشاشة يكون للحقل خلفية رمادية فاتحة؛ والطباعة وPDF لا يظهرانها أبدًا. الكتابة فوق نص الحقل يدويًا تنهيه. الحقل الذي لا يمكن حسابه يعرض `####`.
- حقل الكائن يجد كائنه بالمفتاح الذي يحفظه CadCraft على الكائنات (الإعدادات › CadCraft › ملفات قابلة للدمج)؛ ومع إيقاف المفاتيح يرفض.

### UPDATEFIELD

الأسماء المستعارة: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` يضبط متى تتحدث الحقول وحدها: اكتب حروف `O` للفتح، و`S` للحفظ، و`P` للطباعة، و`R` لإعادة البناء (الأربعة كلها للبداية)، أو `NONE`.

### DWGPROPS

الأسماء المستعارة: `DRAWINGPROPS`. يسرد خصائص الرسم، ثم `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. الستة الأولى هي التي تُظهرها لوحة {{ui:Drawing details}}؛ و`U` يضيف اسمك وقيمتك، و`R` يزيل واحدًا. الحقول تقرؤها (`%<prop:title>%`، `%<prop:Client>%`) وتتبعها فورًا. يرفض اسمًا مخصصًا يكون أحد الأسماء المدمجة أو يحتوي `%` أو `<` أو `>` أو علامة اقتباس أو شرطة مائلة عكسية.

## البارامتري

انظر [تقييد الرسم](topic:constraints) و[استخدام المعاملات والمعادلات](topic:parameters). القيود تعمل على علامة التبويب {{ui:Model}}.

### GEOMCONSTRAINT وأوامر GC

الاسم المستعار `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`، ثم موجّهات ذلك الأمر.

- {{cmd:GCHORIZONTAL}}، {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}، {{cmd:GCPERPENDICULAR}}، {{cmd:GCCOLLINEAR}}، {{cmd:GCCONCENTRIC}}، {{cmd:GCEQUAL}}، {{cmd:GCTANGENT}}: `Select first object`، `Select second object` (الثاني يتحرك).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`، `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`، `Select second object`، `Select symmetry line`.

### DIMCONSTRAINT وأوامر DC

الاسم المستعار `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}، {{cmd:DCHORIZONTAL}}، {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`، `Specify second constraint point`، `Specify dimension line location`، `Dimension text <d1=40>` (رقم، أو تعبير، أو `name=expression`).
- {{cmd:DCALIGNED}}: كما سبق، مع `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}، {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`، `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN، DELCONSTRAINT، CONSTRAINTBAR، DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` يسأل عن تفاوتات المسافة والزاوية.
- {{cmd:DELCONSTRAINT}} (الاسم المستعار `DELCON`): `Select objects`؛ تذهب قيودها.
- {{cmd:CONSTRAINTBAR}} (الاسم المستعار `CBAR`): `Select objects [Showall/Hideall]`، ثم `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS وإ-PARAMETERS

{{cmd:PARAMETERS}} (الأسماء المستعارة `PAR`، `PARAM`) يفتح لوحة {{ui:Parameters}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

الاسم المستعار `SWMACRO`. ينزّل ماكروًا (‏.swb) يعيد بناء النموذج كمخطط واحد مقيّد في SolidWorks. انظر [نقل المخططات من وإلى نمذجات الأجزاء الأخرى](topic:solidworks-sketches).

## الكتل

### ANNOSCALE

الاسم المستعار: `CANNOSCALE`. يذكر مقياس التوضيح للرسم وعدد الكائنات التوضيحية فيه، ثم يسأل `New annotation scale`: اكتب `1:50` أو `1:100` أو `2:1` أو رقمًا مجردًا (`50` تعني 1:50) أو اسم أحد مقاييس الرسم الخاصة به. كل نص وبُعد توضيحي يُعاد تحجيمه ليُطبع بالحجم نفسه عند المقياس الجديد، في خطوة تراجع واحدة؛ الكائنات غير التوضيحية تُترك كما هي، وكذلك الكائن الذي يحتفظ بقائمة مقاييس لا تحتوي المقياس الجديد ({{cmd:OBJECTSCALE}}). انظر [الوحدات والأوراق والمقاييس](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

الاسم المستعار: `OBJSCALE`. `Select annotative objects`، ثم `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. النص والبُعد التوضيحي يحتفظان بقائمة مقاييس توضيح. `Add` و`Delete` يسألان عن مقياس (`1:50`، `2:1`، رقم مجرد، أو اسم أحد مقاييس الرسم)؛ و`Current scale` يضيف مقياس توضيح الرسم؛ و`List` يطبع مقاييس كل كائن. منفذ العرض الذي يقع مقياسه في قائمة كائن يعرضه بالحجم الذي يطبع ارتفاع ورقته عند ذلك المقياس، على الشاشة وفي الطبعات. لا يمكن حذف المقياس الأخير. الكائنات غير التوضيحية تُستبعد: فعّل Annotative في الخصائص أولًا. تُحفظ القوائم في DWG وDXF كبيانات خاصة بـ CadCraft. انظر [الوحدات والأوراق والمقاييس](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

الاسم المستعار: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. عند التشغيل (كما يبدأ الرسم): يظهر الكائن التوضيحي أيضًا في منفذ عرض أو في النموذج، مقياسه ليس في قائمته، بالحجم الذي له. عند الإيقاف: لا يظهر هناك، ولا يمكن التقاطه في النموذج. التبديل خطوة تراجع واحدة؛ ولا يُحفظ في الملف.

### SCALELISTEDIT

الاسم المستعار: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` حتى {{key:Enter}}. Add: `Scale name`، `Paper units`، `Drawing units`. Edit وDelete يسألان عن اسم المقياس. مقاييس الرسم الخاصة تنضم إلى قوائم مقاييس منفذ العرض والطباعة، وتُحفظ مع الرسم. انظر [الوحدات والأوراق والمقاييس](topic:units-papers-scales#scales).

### SPLINE وSPLINEDIT وPEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: نقاط يمر بها المنحنى؛ `Close` و`Undo`، ثم `Start tangent` و`End tangent` (نقطة، أو {{key:Enter}}). Method › Control vertices يسأل عن درجة (من 1 إلى 5) ويرسم من مضلّع تحكم. Object يحوّل الخطوط المتعددة إلى Spline يمر برؤوسها. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`؛ وFit data `[Add/Delete/Move/Purge/Tangents/eXit]`؛ وEdit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`، و`M` لعدة كائنات؛ والخطوط والأقواس وSpline تُعرض كخطوط متعددة أولًا. انظر [المنحنيات والخطوط المتعددة](topic:splines).

### BLOCK

الأسماء المستعارة: `B`، `BMAKE`.

- `Enter block name`. إذا كان موجودًا: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. تُستبدل بمرجع واحد للكتلة الجديدة.

### WBLOCK

الأسماء المستعارة: `W`، `-WBLOCK`. يكتب كتلة أو بعض الكائنات أو الرسم كله كملف DWG أو DXF جديد. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (تصبح أصل الرسم الجديد)، `Select objects`، ثم `File format [DWG/DXF/R12 DXF]` و`File name for the new drawing`، ثم `What to do with the objects [Retain/Convert to block/Delete]`. Convert يستبدلها بمرجع واحد لكتلة باسم الملف؛ وDelete يزيلها.
- **Block**: `Block to write out`. كائنات الكتلة نفسها، ونقطة أساسها أصل لها، بما فيها الكتل المتداخلة.
- **Entire drawing**: كل كائن في فضاء النموذج. لا تُكتب الأوراق؛ استخدم {{cmd:SAVEAS}} لنسخة تحتفظ بها.

الملف الجديد يحتوي فقط على الطبقات وأنواع الخطوط وأنماط النص والأبعاد والكتل التي تستخدمها كائناته، ووحدات الرسم. إصدار DWG هو الذي استخدمه {{cmd:SAVEAS}} آخر مرة. في المتصفح يُنزَّل الملف؛ وفي Studio يفتح حوار الحفظ.

### ATTDEF

الأسماء المستعارة: `ATT`، `DDATTDEF`، `-ATTDEF`؛ أو {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. يطبع الأوضاع، ثم `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`، و`Enter attribute tag name`، و`Enter attribute prompt`، و`Enter default attribute value` (`Enter attribute value` عند Constant)، و`Specify start point of text`، و`Specify text height`، و`Specify rotation angle of text`. {{cmd:BLOCK}} يأخذ تعريفات السمات إلى الكتلة.

### EATTEDIT وATTEDIT

`EATTEDIT` (`DDATTE`، أو انقر نقرًا مزدوجًا على مرجع فيه سمات؛ {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`، ثم حوار {{ui:Edit attributes}}. `ATTEDIT` (`ATE`، `-ATTEDIT`): المرجع نفسه، ثم `<prompt> (<TAG>) <value>` لكل سمة؛ و{{key:Enter}} يُبقي القيمة. انظر [السمات](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. القيم تُحفظ؛ السمات الجديدة تأخذ قيمتها الافتراضية، والمحذوفة تذهب، وتُعاد المواضع.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. الحوار: الكتلة، والسمات (الوسم، والمطالبة، والقيمة الافتراضية، والأوضاع، والترتيب)، و{{ui:Update the references (values kept)}}، و{{ui:Apply}}.

### REFEDIT وREFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (أو التحديد). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`؛ و{{ui:Save the block}} و{{ui:Discard}} في الشريط يفعلان الشيء نفسه. التحرير كله خطوة تراجع واحدة. انظر [السمات](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT وBCLOSE

`BE`؛ أو {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` يفتح محرّر الكتل. يسأل `BCLOSE` `Close the block editor on "…" [Save/Discard] <Save>`؛ و{{ui:Save block}} و{{ui:Discard changes}} في الشريط يفعلان الشيء نفسه. كل ما يُعمل في المحرّر خطوة تراجع واحدة.

### VIEWBASE

الاسم المستعار: `FLATSHOT`. منظر مسطح ثنائي الأبعاد للمجسمات في علامة التبويب ثلاثية الأبعاد: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`، `Hidden lines [Show/Hide]`، مقياس (`1:20`، `2:1`؛ و{{key:Enter}} يأخذ المقياس الذي يلائم الورقة)، ثم مركز المنظر. مرجع كتلة واحد، والحواف المرئية على VIEW-VISIBLE، والمخفية منقطة على VIEW-HIDDEN. انظر [المناظر المسطحة على ورقة](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

الأسماء المستعارة: `-PUBLISH`؛ أو {{ui:All sheets in one PDF}} في حوار {{ui:Plot to PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} يطبع كل الأوراق، و`S` يسأل عن أسماء مفصولة بفواصل. ملف PDF واحد، وصفحة وإشارة مرجعية لكل ورقة. انظر [كل الأوراق في ملف PDF واحد](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

الأسماء المستعارة: `SSM`، `SHEETSETMANAGER`. ينقلك إلى قسم {{ui:Sheet set}} في اللوحة اليسرى: أوراق من رسوم كثيرة، مرقّمة ومعنونة، وكتل عناوينها معبأة من المجموعة، وتُنشر كملف PDF واحد. انظر [مجموعات الأوراق](topic:sheet-sets).

### XATTACH وXREF

{{cmd:XATTACH}} (`XA`): اختر DWG أو DXF، ثم نقطة إدراجه. {{cmd:XREF}} (`XR`، `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`؛ مع أكثر من رابط واحد، التقط أحد مراجعه أو اكتب `N` واسمه. انظر [الرسوم المرتبطة](topic:files#linked-drawings-external-references).

### COUNT

الاسم المستعار: `BCOUNT`؛ أو {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: الالتقاط يحدد ويعد كل مراجع تلك الكتلة في هذا الفضاء؛ و{{key:Enter}} أو `A` يسرد كلها؛ و`E` ثم `C` (عدّ) أو `A` (سمات) ينزّل CSV. انظر [عدّ الكتل وتصدير جدول](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

الأسماء المستعارة: `I`، `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (لا يهم حجم الأحرف). `F` يسأل عن DWG أو DXF، ثم الرسم كله أو إحدى كتله؛ واسم مستخدم من قبل يسأل {{ui:Keep existing}} أو {{ui:Rename}}. `L` يفتح لوحة المكتبة.
- `Specify insertion point [Scale/Rotate]`. `S` يسأل `Specify scale factor`، و`R` يسأل `Specify rotation angle`؛ وكلاهما يُتذكر.
- عندما تقف الكتلة بجانب كائنات تتكرر في مكان آخر دونها، يذكر سطر عدد الأماكن المقترحة، ويضاف إلى الموجّه `suGgested`: `G` يعرضها؛ انقر قرب واحد لوضع الكتلة هناك، و`A` للكل، و{{key:Enter}} للعودة. تأخذ دوران جيرانها وقيمها الافتراضية للسمات. الرسوم التي تزيد على 20000 كائن في الفضاء المفتوح لا تُفحص.
- ثم `Enter <prompt> (<TAG>) <default>` لكل سمة تطلبها الكتلة. انظر [سمات الكتلة](topic:attributes).

### LIBRARY

الاسم المستعار: `LIB`. يفتح لوحة المكتبة: وضع العناصر، والتحقق من التحديثات، وأرصدة المكتبة. بلا أسئلة. انظر [الإدراج من ملف أو المكتبة](topic:insert-from-file-and-library).

### STEELMEMBER

الاسم المستعار: `SMEMBER`؛ أو {{ui:3D member}} في تبويب {{ui:Standard}} للمكتبة. `Section size <W12x26>` (كما يسردها التبويب)، ثم `Start point [Column]` و`End point`: عضو مجسم في علامة التبويب ثلاثية الأبعاد بين النقطتين، يستقر على الأرض. `C` يسأل عن نقطة قاعدة العمود وارتفاعه. خطوة تراجع واحدة. انظر [وضع المقاطع الفولاذية والأجزاء القياسية](topic:steel-and-standard-parts).

### PARTSLIST

الاسم المستعار: `PLIST`. `Top left corner of the parts list`، ثم `Text height <2.5>`: يرسم جدولًا لكل جزء قياسي ومقطع فولاذي موضوع من المكتبة (أرقام البنود، والكمية، والجزء، والمعيار، والمقاس، والطول، والمادة، والكتلة). خطوة تراجع واحدة. انظر [وضع المقاطع الفولاذية والأجزاء القياسية](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

الاسم المختصر: `PU`. يزيل تعريفات الكتل التي لا يستخدمها شيء. بلا أسئلة.

### DELBLOCKS

أو {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: التقط مرجع كتلة، أو `N` لقائمة الكتل مع مرشّح (اختر عدة)، أو `X` / {{key:Enter}} للإنهاء. يُحذف كل مرجع، في النموذج وفي كل ورقة وداخل الكتل الأخرى، ثم التعريف؛ ويذكر سطر الأوامر ما حُذف وما تعذّر حذفه. الكتل بلا اسم والرسوم المرتبطة لا تُعرض. يعود الموجّه للكتلة التالية؛ والأمر كله خطوة تراجع واحدة.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} يلصق ما نسخته ({{cmd:COPYCLIP}}، {{cmd:COPYBASE}}) ككتلة واحدة: التقط نقطة الإدراج، فيذهب إليها مرجع واحد لكتلة جديدة، محددًا. تأخذ الكتلة اسمًا خاصًا بها (`A$C` ورقم)؛ و{{cmd:RENAME}} يعطيها اسمك. خطوة تراجع واحدة تزيل المرجع والكتلة.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} يسأل عن الكتلة المراد استبدالها والكتلة التي تحل محلها (`?` يسرد الكتل)، ثم يغيّر كل مرجع في النموذج وفي كل ورقة وداخل الكتل الأخرى. كل مرجع يحتفظ بمكانه ومقياسه ودورانه وطبقته وقيم السمات التي تملكها الكتلتان؛ والسمات التي تملكها الكتلة الجديدة وحدها تبدأ بقيمها الافتراضية، ويخبرك بالقيم التي أُسقطت. عندما لا يستخدم شيء الكتلة القديمة، يعرض إزالتها. يرفض الرسوم المرتبطة واستبدالًا يضع كتلة داخل نفسها. خطوة تراجع واحدة.

### MINSERT

{{cmd:MINSERT}} يضع كتلة في صفوف وأعمدة: اسم الكتلة، ونقطة الإدراج، والمقياس، والدوران، وعدد الصفوف والأعمدة، والمسافات بينها. تدور المجموعة كلها مع الدوران. كل عنصر مرجع مستقل (10000 كحد أقصى)، فيمكن نقل أي منها أو مسحه لاحقًا.

### BLOCKSPALETTE

الاسم المستعار: `BLOCKSPAL`؛ أو {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. يعرض لوحة {{ui:Blocks}} مع المؤشر في مرشّحها. لكل كتلة صورة صغيرة؛ والأحدث وضعًا أولًا. الزران بجانب المرشح يبدّلان بين قائمة وشبكة من الصور. انقر صورة (أو {{ui:Insert}}) لوضع الكتلة بواسطة {{cmd:INSERT}}، أو اسحبها إلى الرسم لوضعها حيث تُسقطها.

تحت القائمة، {{ui:Libraries}}: {{ui:Add a drawing}} يأخذ ملف DWG أو DXF خاصًا بك ويسرد كتله مع صورها، والرسم كله ككتلة واحدة. وضع إحداها ينسخ تعريفها (والكتل المتداخلة فيها، وطبقاتها) إلى هذا الرسم، كما يفعل الخيار `File` في {{cmd:INSERT}}؛ الكتلة الموجودة هنا بالتعريف نفسه تُستخدم بلا سؤال، والكتلة نفسها الاسم لكن المختلفة التعريف تسأل {{ui:Keep existing}} أو {{ui:Rename}}. في المتصفح يبقى الملف حتى تُغلق الصفحة. وفي CadCraft Studio، {{ui:Add a folder}} يسرد الرسوم في مجلد، ويُفتح كل منها عند النقر عليه، وتُتذكر الملفات والمجلدات. الحرف x الصغير يزيل مكتبة من القائمة؛ ولا يُمس الملف. المكتبة المشتركة {{ui:Library}} شيء مختلف: انظر [الإدراج من ملف أو المكتبة](topic:insert-from-file-and-library).

### BCONVERT

أو {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. يجد الهندسة المتكررة ويحوّل كل نسخة إلى مرجع لكتلة واحدة.

- `Select the objects that repeat, or [Block]`: كائنات نسخة واحدة. `B` يسمّي كتلة موجودة بدلًا من ذلك، لإيجاد النسخ المتفرقة لكائناتها.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M` و`S` و`P` تبدّل ما يُحسب نسخة؛ و{{key:Enter}} يبحث. الإعدادات تُتذكر.
- `Name for the new block <Block1>`، ثم `Specify the block's base point` ({{key:Enter}} يأخذ الركن السفلي الأيسر للتحديد).
- يذكر كم مجموعة أخرى من الكائنات لها الهندسة نفسها، ويبرز كل ما سيستبدله، ويسأل `Yes/No`.

النسخة هي الكائنات نفسها منقولة ومدارة بأي زاوية (ومعكوسة أو محجّمة بمعامل واحد عند تشغيلهما): لكل كائن نظيره، ضمن جزء من مليون من حجم التحديد. كل مرجع يأخذ دورانه ومقياسه (والمعكوس يأخذ مقياس Y سالبًا)، والطبقة التي تشترك فيها كائناته. الكائنات على طبقات مقفلة تُترك وتُحسب. يبحث في فضاء الرسم المفتوح (النموذج أو الورقة المفتوحة). البحث الكبير جدًا يتوقف عند حد عمل ويذكر ذلك. خطوة تراجع واحدة.

### BSEARCH

أو {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: جزء من اسم كتلة، أو نمط بـ `*` و`?`. يسرد كل كتلة مع مراجعها هنا وفي الرسم كله.
- `A`: قيمة سمة، أو `TAG=value`. يسرد الكتل التي تحمل مراجعها تلك القيمة، مع القيم التي وُجدت. السمات الثابتة تُحسب.
- `G`: حدد كائنات، أو مرجع كتلة واحدًا، وتُسرد الكتل التي يتشابه شكلها بنسبة 85% على الأقل، الأفضل أولًا. لا يُحسب الحجم والدوران والانعكاس. المقياس يقارن المسافات بين نقاط موزعة على الحدود، فيجد الأشباه؛ استخدم {{cmd:BCONVERT}} لإيجاد النسخ المطابقة تمامًا.

المراجع الموجودة في الفضاء المفتوح تُحدد، جاهزة للأمر التالي.

### BREPLACE

أو {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` يستبدل مراجع الكتل التي تحددها بالكتلة التي تسميها؛ و`A` يسأل عن كتلة وبديلها ويغيّر كل مرجع، كما يفعل {{cmd:BLOCKREPLACE}} (الشيفرة نفسها). كل مرجع يحتفظ بمكانه ومقياسه ودورانه وطبقته وقيم السمات التي تملكها الكتلتان؛ والقيم التي لا مكان لها في الكتلة الجديدة تُسقط ويُذكر ذلك. `?` يسرد الكتل. خطوة تراجع واحدة.

### DATAEXTRACTION

الأسماء المستعارة: `EATTEXT`، `DX`؛ أو {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. يسرد الكتل وسماتها وخصائص الكائنات كجدول أو ملف CSV.

- يعمل على التحديد، أو يسأل `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` عندما يحمل التحديد الاثنين. الكتل بلا اسم والجداول وقوائم المواد لا تُسرد أبدًا.
- يطبع الأعمدة التي يمكن الاختيار منها (الاسم، والنوع، والطبقة، وX، وY، والدوران، والمقياس، والطول، والمساحة، واللون، ونوع الخط، والفضاء، ووحدة لكل وسم سمة)، ثم `Columns, by name or number with commas between`. {{key:Enter}} يأخذ المعلَّمة بنجمة: الاسم وكل سمة للكتل؛ والنوع والطبقة والطول للكائنات.
- `Put identical rows together with a count? [Yes/No] <Yes>`، ثم `Put the list in a: [Table/Csv] <Table>`. الجدول جدول عادي ({{cmd:TABLEDIT}} يحرره)، وليس حيًا: أعد تشغيل الأمر عندما يتغير الرسم.
- يرفض عمودًا ليس في القائمة. الجدول يتسع لـ 1999 صف بيانات؛ وملف CSV يتسع لها كلها.

### COUNTTABLE

يعد مراجع الكتل في التحديد (أو في الفضاء المفتوح) ويضع العدد في جدول (`Block`، `Count`) أو ملف CSV. للعدّ الذي يتبع الرسم بنفسه انظر {{cmd:BOMTABLE}}.

## الأوراق والطباعة

### LAYOUT

الأسماء المستعارة: `LO`، `NEWLAYOUT`؛ أو زر {{ui:+}} أسفل الرسم. ورقة جديدة بإطار وكتلة عنوان ومنفذ عرض واحد، على ISO A3 (أو Tabloid للرسوم بالبوصة أو القدم). بلا أسئلة.

### MVIEW

الاسم المستعار: `MV`. على الورقة فقط ({{cmd:VPORTS}} على الورقة يفعل الشيء نفسه).

- `Specify corner of viewport [Polygonal/Object]`، `Specify opposite corner`. يُظهر منفذ العرض النموذج كله بمقياس قياسي.
- `P` (Polygonal): انقر أركان المخطط (`Undo`، `Close`)، و{{key:Enter}} عند الانتهاء. يرفض أقل من ثلاثة أركان.
- `O` (Object): `Select a closed object for the viewport's outline`: خط متعدد مغلق، أو دائرة، أو قطع ناقص على الورقة. يأخذ المنفذ شكله (المنحنيات كمقاطع مستقيمة قصيرة)؛ ويبقى الكائن كما كان. يرفض كائنًا غير مغلق.

### VPCLIP

يقصّ منفذ عرض موجود على الورقة. `Select viewport to clip` (أو حدده أولًا)، ثم `Select the object to clip to [Polygonal/Delete]`:

- انقر خطًا متعددًا مغلقًا أو دائرة أو قطعًا ناقصًا، أو {{key:Enter}} (أو `P`) لتنقر أركان مضلّع.
- `D` (Delete، ويُعرض عندما يكون المنفذ مقصوصًا) يجعله مستطيلًا مرة أخرى: الصندوق حول المخطط الذي كان له.
- ما يعرضه المنفذ لا يتحرك على الورق، ومقياسه يبقى. يُرسم النموذج ويُطبع داخل المخطط فقط، والإطار يتبعه. خطوة تراجع واحدة.
- المنفذ المقصوص له مقبض عند كل ركن من مخططه، إلى جانب مركزه وأركان صندوقه الأربعة (سحب ركن الصندوق يمد المخطط معه). تُظهر الخصائص Outline: Rectangle، أو Clipped مع عدد الأركان.
- ملفات DWG وDXF 2000 تحفظ المخطط لـ CadCraft؛ والبرامج الأخرى تفتح المنفذ كالمستطيل المحيط به؛ وDXF R12 يحفظ المستطيل فقط.
- على تبويب النموذج يذكر أن المنافذ تكون على الأوراق.

### VPORTS

الاسم المستعار: `VIEWPORTS`. {{cmd:SPLIT}} هو الشيء نفسه من الورقة أيضًا، وكذلك {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}، و{{ui:Split stacked}}، و{{ui:Four panes}}، و{{ui:One pane}} تشغّله. على النموذج: `Enter number of panes [SIngle/2/3/4] <3>`؛ `2` يسأل `[Horizontal/Vertical] <Vertical>` (Vertical = جنبًا إلى جنب)، و`3` يسأل `[Left/Right] <Right>` (أين يذهب اللوح الكبير). كل لوح يحتفظ بمنظره وفضائه؛ والنقرة تجعل اللوح نشطًا. على الورقة هو {{cmd:MVIEW}}. انظر [تقسيم الشاشة](topic:split-screen).

### VPVIEW

لا توجد أسماء مستعارة. على الورقة فقط.

- `Select viewport` (يُتخطى إذا كان أحدها محددًا)، ثم على النموذج: `Specify first corner of the window to show`، `Specify opposite corner`.

### UCS

لا توجد أسماء مستعارة. نظام إحداثيات خاص بك؛ وليس تعديلًا. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: نقطة تصبح أصلًا جديدًا، ثم `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: الأصل، ونقطة على المحور X الموجب، ونقطة على الجانب Y الموجب. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` واسم. يدور المنظر حتى يصبح محور X الجديد أفقيًا. انظر [إدارة المنظر واستخدام إحداثياتك الخاصة](topic:ucs-and-turned-view).

### PLAN

لا توجد أسماء مستعارة. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: يدير منظر اللوح النشط حتى يصبح محور X لـ UCS (أو للعالم) أفقيًا. لا شيء في الرسم يتحرك.

### TURNLEFT وTURNRIGHT وTURNWORLD

لا توجد أسماء مستعارة؛ أو {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}، {{ui:Turn view 90° right}}، {{ui:Back to world}}. الشيء نفسه مثل `UCS Z -90`، و`UCS Z 90`، و`UCS W`، ويتبعها المنظر.

### VPLAYER

لا توجد أسماء مستعارة. على الورقة، أو داخل منفذ عرض. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`، و`T`، و`R` تسأل عن أسماء الطبقات (مفصولة بفواصل، مع البدل `*` و`?`)، ثم منافذ `[All/Select/Current] <Current>`؛ وReset يعيد كل طبقة إلى إعداد "مجمّدة في المنافذ الجديدة"؛ و`V` يضبط ذلك الإعداد (`[Frozen/Thawed]`) الذي يستخدمه {{cmd:MVIEW}}. `?` يسرد الطبقات المجمدة في المنفذ الحالي. عمود المنفذ في لوحة الطبقات يفعل الشيء نفسه لمنفذ واحد. انظر [تجميد طبقة في منفذ واحد](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

الأسماء المستعارة: `MS`؛ أو انقر نقرًا مزدوجًا داخل منفذ العرض. على الورقة فقط. العمل على النموذج عبر منفذ عرض: المحدد، أو الوحيد على الورقة، أو `Click inside the viewport to work in`. التحريك والتكبير داخله يغيّران منظر المنفذ (المنفذ المقفل العرض يحتفظ بمنظره وتتحرك الورقة بدلًا من ذلك)؛ والمنظر الجديد يُكتب كخطوة تراجع واحدة. انظر [العمل على النموذج عبر منفذ عرض](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

الأسماء المستعارة: `PS`؛ أو انقر نقرًا مزدوجًا خارج منفذ العرض، أو انقر تبويبًا أسفل الرسم. العودة إلى الورقة.

### PLOT

الأسماء المستعارة: `PRINT`، `PUBLISH`، `EXPORTPDF`؛ أو {{key:Mod+P}}. يفتح حوار {{ui:Plot to PDF}}. انظر [الطباعة إلى PDF](topic:plot-pdf).

### PLOTSTYLES

الأسماء المستعارة: `STYLESMANAGER`، `PSTABLES`؛ أو {{ui:Edit tables…}} في حوار {{ui:Plot to PDF}}. يفتح {{ui:Plot style tables}}: ما تُطبع به كل لون (لون، ورمادي، وحبر، وسماكة خط)، ويُحفظ مع الرسم. انظر [جداول أنماط الطباعة](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} ينقل الكائنات بين الورقة والنموذج عبر منفذ عرض، مع تحجيمها وإدارتها لتبدو متطابقة من الجهة الأخرى. على الورقة، حدد الكائنات فتذهب إلى النموذج (التقط المنفذ عندما تحتوي الورقة على أكثر من واحد). أثناء العمل على النموذج عبر منفذ عرض ({{cmd:MSPACE}})، تأتي الكائنات المحددة إلى الورقة. يذكر كم مرة أصبحت أكبر أو أصغر. منافذ العرض تبقى على ورقتها. خطوة تراجع واحدة.

### ISODRAFT

{{cmd:ISODRAFT}} يشغّل الرسم الأيزومتري `ON` أو يوقفه `OFF`، أو ينتقل مباشرة إلى المستوى `Left` أو `Top` أو `Right`. أثناء تشغيله: Ortho ({{key:F8}}) يبقي الخطوط على محوري المستوى (اليسار: 90° و150°؛ الأعلى: 30° و150°؛ اليمين: 30° و90°)، والتتبع القطبي ({{key:F10}}) يتبع المحاور نفسها، والالتقاط بالشبكة ({{key:F9}}) يستخدم الشبكة الأيزومترية، والشبكة ({{key:F7}}) تُرسم بخطوط عند 30° و90° و150°. يكتسب {{cmd:ELLIPSE}} الخيار `Isocircle`: أعطِ مركزًا ونصف قطر (أو `Diameter`) فيرسم القطع الناقص الذي تظهر عليه الدائرة في المستوى الحالي. الرسم يبقى مسطحًا: هذه أدوات لرسم منظر تصويري، لا نموذج ثلاثي الأبعاد. الإعداد للجلسة الحالية ولا يُحفظ في الملف.

### ISOPLANE

{{cmd:ISOPLANE}} يختار المستوى الذي يعمل عليه الرسم الأيزومتري: `Left` أو `Top` أو `Right`. Enter ينتقل إلى المستوى التالي. أثناء تشغيل الرسم الأيزومتري، {{key:F5}} يفعل الشيء نفسه في منتصف أمر؛ وأثناء إيقافه، يُترك {{key:F5}} للمتصفح.

## الاستعلام

### CAL

يطبع قيمة حساب، كما تُقرأ في أي مكان تُكتب فيه طولًا.

- `Expression`: اكتبه، مثلًا `12'6"+3/4"` أو `(24'-0")/3`، واضغط {{key:Enter}}. يطبع CadCraft `= 12'-6 3/4"   (150.75 drawing units)`. انظر [الحساب في قيمة مكتوبة](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

الاسم المستعار: `DI`؛ أو {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`، `Specify second point`. يطبع المسافة والزاوية والفرق في X والفرق في Y.

### AREA

الاسم المستعار: `AA`؛ أو {{ui:View}} › {{ui:More}} › {{ui:Area}}. يطبع المساحة والمحيط.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - انقر أو اكتب أركانًا؛ عند `Specify next point (Enter closes) [Undo]` اضغط {{key:Enter}} لإغلاق المخطط. `U` يسحب آخر ركن.
  - {{key:Enter}} أو `O`، ثم `Select object`: دائرة (تطبع محيطها)، أو قطع ناقص، أو خط متعدد (المفتوح يُغلق بخط مستقيم لحساب المساحة، ويُطبع طوله)، أو تهشير (الثقوب تُطرح).
  - `A` (Add area) و`S` (Subtract area) يحفظان مجموعًا جاريًا: يبدأ الموجّه بـ `(ADD mode)` أو `(SUBTRACT mode)`، وتُضاف كل مساحة أو تُطرح، ويُطبع `Total area = …` بعد كل واحدة. في هذين الوضعين يلتقط `O` الكائنات حتى {{key:Enter}}، وEnter عند الموجّه الأول ينهي الأمر.

### MEASUREGEOM

الاسم المستعار: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`؛ بعد كل قياس يسأل من جديد، والافتراضي `eXit`.

`Quick` يقيس حول المؤشر أثناء تحريكه: المسافة إلى أقرب كائن على اليمين، وأعلى، ويسار، وأسفل (على محاور UCS الحالي)، وتُرسم أثناء الحركة، والزاوية حيث يكون جاران منهما مستقيمين ويلتقيان. النقرة تكتب المسافات الأربع، والعرض والارتفاع الصافيين، والزوايا في السجل؛ وEnter يعود إلى الخيارات. يقرأ ما على الشاشة.

- `D`: نقطتان، كما في {{cmd:DIST}}.
- `R`: `Select arc or circle`؛ يطبع نصف القطر والقطر.
- `A`: قوس (زاويته المحصورة)، ثم خط وخط ثانٍ (الزاوية بينهما، نحو طرفيهما البعيدين)، أو {{key:Enter}} ثم ثلاث نقاط (الرأس، ثم الطرفان).
- `AR`: كما في {{cmd:AREA}}، مساحة واحدة.

### ID

لا توجد أسماء مستعارة. `Specify point`؛ يطبع إحداثييه X وY.

### LIST

الأسماء المستعارة: `LI`، `LS`. `Select objects`؛ يطبع نوع كل كائن وطبقته وقياساته الرئيسية.

### MASSPROP

{{cmd:MASSPROP}} يعطي خصائص مقطع المناطق والكائنات المغلقة التي تحددها، مجتمعة: المساحة، والمحيط، وصندوق الحدود، والمركز الهندسي، وعزوم القصور حول محوري X وY المارين بالأصل، وناتج القصور، وأنصاف أقطار الدوران، والعزوم نفسها حول المركز الهندسي، والعزوم الرئيسية مع اتجاهات محاورها. الثقوب في المنطقة تُحسب ثقوبًا. الأرقام بوحدات الرسم، ودقيقة للمخططات المكونة من خطوط وأقواس؛ والقطع الناقصة وSpline تُقاس كمقاطع مستقيمة قصيرة، ويُذكر ذلك. بعد التقرير يسأل إن كنت تريد كتابته في ملف نصي. الكائنات غير المغلقة تُستبعد، ويُذكر عددها.

## العرض والملف والأخرى

### ZOOM

الأسماء المستعارة: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. انقر ركنين للنافذة. `E` أو `A` أو Enter: الرسم كله.
- `P` (Previous، أو {{ui:Previous}} في شريط الأدوات) يعود إلى المنظر السابق، حتى 10 مناظر لكل تبويب؛ وسلسلة خطوات عجلة الفأرة أو تحريك واحد تُحسب منظرًا واحدًا.
- رقم مثل `2` أو `2x` أو `0.5x` (أو `S` ثم الرقم) يكبّر أو يصغّر بذلك المعامل حول منتصف الشاشة.
- `C` يسأل `Specify center point` و`Enter height or magnification (nX)`.

### PDFATTACH وPDFIMPORT وأوامر PDF

الأسماء المستعارة: `PDFATT` لـ {{cmd:PDFATTACH}}، و`PDFIM` لـ {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} يضع صفحة PDF تحت الرسم (الملف، والصفحة، ونقطة الإدراج، والمقياس، والدوران)؛ و{{cmd:PDFIMPORT}} يحوّل خطوط الصفحة ومنحنياتها وتعبئاتها ونصها إلى كائنات رسم على طبقات تُسمّى باسم PDF، بالحجم الحقيقي، أو بمقياس مكتوب، أو محجّمًا من نقطتين ومسافة حقيقية. {{cmd:PDFCLIP}} يقصّ الخلفية، و{{cmd:PDFADJUST}} يضبط البهتان والتباين وأحادية اللون أو يطفئها، و{{cmd:PDFLAYERS}} يبدّل طبقات PDF نفسه، و{{cmd:PDF}} يعطي CadCraft الملفات التي تستخدمها خلفيات الرسم من جديد. انظر [خلفيات PDF](topic:pdf-underlay).

### AUTOCOMPLETE

الاسم المستعار: `AUTOC`. الإكمال التلقائي للرسم: بدون أمر يعمل، يظهر شبح رمادي يبيّن ما تقوله أنماط الرسم نفسه عن الخطوة التالية. {{cmd:AUTOCOMPLETE}} يشغّله `On` أو يوقفه `Off` (وأيضًا الإعدادات › CadCraft)، أو `Show` يعرض ما سيقترحه الآن. **Tab** يرسم الشبح كخطوة تراجع واحدة، و**Esc** يُخفيه حتى يتغير الرسم. يجد ثلاثة أشياء في أحدث الكائنات: النسخة التالية من شيء رُسم مرتين أو أكثر بخطوة متساوية (أعمدة، ودرجات سلم، وارتفاعات وأنصاف)، والخطوات التالية لدرج من خط متعدد، والضلع الناقص لغرفة أو سلسلة جدران. في منتصف {{cmd:LINE}} أو {{cmd:PLINE}} يكون الشبح **النقطة التالية**: الخطوة التالية للدرج (ارتفاع، ثم نائم، ثم ارتفاع…)، أو الركن الرابع لمستطيل، أو النقطة التي تغلقه، أو خطوة متساوية أخرى. قرّب المؤشر منه واضغط **Tab** كأنك نقرت هناك؛ ثم تابع أو اضغط Enter. يُحسب على هذا الحاسوب بقواعد، بلا نموذج.

### AUTOSHEET

الاسم المختصر: `ASH`. أوراق ترتّب نفسها. {{cmd:AUTOSHEET}} يأخذ أجزاء الرسم (مناظرك المسماة، أو الأجزاء المنفصلة للنموذج، أو النموذج كله)، ويختار حجم ورق (أو الذي تعطيه)، ويعطي كل جزء مقياسًا قياسيًا (مقياس واحد للكل، أو الأكبر الذي يتسع له كل جزء)، ويضع المناظر في صفوف على أوراق جديدة، مع كتلة عنوان وتعليق (الاسم والمقياس) تحت كل منظر. ما لا يتسع في ورقة واحدة يحصل على ورقة خاصة به. خطوة تراجع واحدة. يُحسب على هذا الحاسوب بقواعد، بلا نموذج.

### PHOTOSKETCH

الاسم المختصر: `PSK`. تحويل صورة رسم يدوي إلى رسم. اختر صورة (JPEG أو PNG أو TIFF) لرسم يدوي على ورقة. {{cmd:PHOTOSKETCH}} يجد زوايا الورقة الأربع، ويقوّم المنظور، ويأخذ حجم الورقة الذي تسميه (`Paper`، أو أقرب حجم قياسي) و`Scale` للرسم (1 : n)، ثم يتتبع خطوط القلم إلى خطوط وأقواس ودوائر، مع طبقة لكل لون قلم (أسود، وأحمر، وأزرق، وأخضر). إذا لم يجد حافة الورقة، يأخذ الصورة كلها كورقة ويذكر ذلك. الكتابة تُستبعد. خطوة تراجع واحدة. يُنفَّذ على هذا الحاسوب بمعالجة صور كلاسيكية، بلا نموذج، ولا يُرسل شيء إلى أي مكان. انظر أيضًا أوامر الرسم الممسوح.

### AUTODIM

الاسم المختصر: `ADIM`. وضع الأبعاد تلقائيًا حسب القواعد. {{cmd:AUTODIM}} يبعّد الكائنات المحددة (أو الرسم كله) من مستوياتها وحوافها الشاقولية: سلسلة أبعاد على الجوانب التي تختارها (`Sides`)، وبُعد كلي واحد خارجها، وعرض كل فتحة (فجوة بين خطوط جدار على استقامة واحدة)، وقطر لكل حجم من الثقوب، ومع `Grid` التباعد بين خطوط الشبكة. البُعد الموجود أصلًا لا يُعمل من جديد. خطوة تراجع واحدة. يُحسب على هذا الحاسوب بقواعد، بلا نموذج.

### GRIDMOVE

الاسم المختصر: `GM`. تحريك خط شبكة يحمل المجموعة. {{cmd:GRIDMOVE}} ينقل خط شبكة (خطًا على طبقة اسمها يذكر grid أو axis) وما يتعلق به: الجدران التي لها طرف على الخط تُمد لتتبعه، والجدران على طوله تتحرك كاملة، والأعمدة (مراجع كتل ودوائر على الخط)، وفقاعته ووسمه يتحركان، والأبعاد التي تقع نقاطها عليه تقيس التباعد الجديد. أعطِ نقطتين (يُحسب الجزء العابر للخط فقط) أو `Distance`. خطوة تراجع واحدة تعيد كل شيء. يُنفَّذ بالقواعد على هذا الحاسوب.

### DETAILS

الاسم المختصر: `DET`. تفاصيل تجدك. {{cmd:DETAILS}} يحتفظ بتفاصيل شركتك الخاصة: `Add` يضع كتلة من هذا الرسم في القائمة، و`List` و`Remove` تديران القائمة، و`Find` يرتب التفاصيل لما هو محدد (أو لما رسمته أخيرًا) بحسب الكلمات في طبقاته وأسماء كتله ونقشات تهشيره وملاحظاته، مقارنةً باسم كل تفصيلة وملاحظاتها، فتجد مثلًا تفصيل رأس النافذة تفصيل عتبتك. التقط رقمًا ونقطة لوضعه. مع تشغيل `Hint` (وأيضًا الإعدادات › CadCraft)، تحديد شيء تطابقه تفصيلة يضع سطرًا واحدًا في شريط الحالة. القائمة محفوظة في هذا المتصفح، على هذا الحاسوب، وهي القائمة التي تُبحث فيها. `Share` يضعها في مجلد المستندات أيضًا (`.cadcraft/firm-details.json`، مع رسم كل كتلة): `Pull` يضيف ما لدى فريقك ولا تملكه، و`Push` يضيف ما تملكه ولا يملكه فريقك، و`Both` يفعل الاثنين، ولا يُحذف شيء من أي جانب. افتح مجلد المستندات أولًا ({{cmd:DOCUMENTS}})؛ وعندما يكون ذلك المجلد مجلد خطة Team Cloud، يشترك الفريق كله في قائمة واحدة. عنصر تفصيل في لوحة المكتبة فيه زر **إضافة إلى تفاصيل شركتي** يضعه في القائمة نفسها. يُنفَّذ بالكلمات على هذا الحاسوب، بلا نموذج.

### SKETCHFIX

الاسم المختصر: `SKF`. الرسوم بالقلم تصبح هندسة دقيقة. اضغط واسحب خطة حرة واحدة في كل مرة (قلم أو فأرة أو إصبع)، ثم Enter. كل خطة تُقرأ كخط أو دائرة أو قوس أو مستطيل أو خط متعدد: الخطوط القريبة من الأفقي والشاقولي تُجعل أفقية وشاقولية تمامًا، والخطة الدائرية المغلقة تصبح دائرة، والخطة المغلقة ذات أربع زوايا قائمة تصبح مستطيلًا، وأطراف الخطط تُسحب معًا وإلى الأطراف الموجودة في الرسم. خطوة تراجع واحدة. يُنفَّذ بالقواعد على هذا الحاسوب، بلا نموذج.

### SCANATTACH وأوامر الرسم الممسوح

الأسماء المستعارة: `SCA` لـ {{cmd:SCANATTACH}}، و`SCS` لـ {{cmd:SCANSCALE}}، و`SCL` لـ {{cmd:SCANALIGN}}، و`SCD` لـ {{cmd:SCANDESKEW}}، و`SCC` لـ {{cmd:SCANCLEAN}}، و`SCR` لـ {{cmd:SCANCROP}}، و`SCE` لـ {{cmd:SCANERASE}}، و`SCT` لـ {{cmd:SCANTRACE}}، و`SCI` لـ {{cmd:SCANINFO}}؛ و{{cmd:RASTERSNAP}} لا اسم مستعار له. تعمل على صورة، وكل منها خطوة تراجع واحدة. {{cmd:SCANATTACH}} يدرج PNG أو JPEG أو TIFF (صفحة واحدة أو الكل) أو صفحة PDF تكون صورة. {{cmd:SCANSCALE}} يحجّم الورقة من نقطتين تلتقطهما والمسافة الحقيقية. {{cmd:SCANALIGN}} ينقلها ويديرها على نقطتين (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} يطبع زاوية الخطوط الطويلة للورقة ويديرها بعد `Accept` أو إعطاء `Value`. {{cmd:SCANCLEAN}} يحوّلها إلى أبيض وأسود (`Threshold` Auto/Adaptive/Level، و`Specks`) و`Run`. {{cmd:SCANCROP}} يُبقي نافذة. {{cmd:SCANERASE}} يمحو `Rectangle` أو `Polygon` أو `Lasso`. {{cmd:SCANTRACE}} يتتبع الخطوط والأقواس إلى طبقة جديدة (`Tolerance`، `Window`، `Arcs`، `Leftovers`، `Run`) ويذكر ما وجده وما تركه صورة نقطية. {{cmd:SCANINFO}} يسرد الملف الأصلي والخطوات. {{cmd:RASTERSNAP}} يشغّل التقاط الخطوط للأوراق الممسوحة أو يوقفه. انظر موضوع الرسوم الممسوحة والتتبع.

### REGEN وREGENALL

الاسم المستعار: `RE` لـ {{cmd:REGEN}}، و`REA` لـ {{cmd:REGENALL}}. يعيد بناء ما يُرسم على الشاشة من الرسم: {{cmd:REGEN}} التبويب الذي تنظر إليه (على الورقة، يعيد بناء النموذج الذي تعرضه منافذها أيضًا)، و{{cmd:REGENALL}} كل التبويبات، وكل لوح من تقسيم الشاشة، وكل رسم مفتوح. استخدمهما عندما تبدو الصورة قديمة بعد تغيير برمجي أو كبير جدًا، أو بعد تعديل من مساعد؛ الرسم نفسه لا يُمس، فلا شيء يُتراجع عنه.

### NAMEDVIEW

الأسماء المستعارة: `NV`، `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`، ثم اسم المنظر. `S` يحفظ المنظر على الشاشة، و`W` نافذة تلتقطها، و`R` يعرض منظرًا محفوظًا، و`D` يحذف واحدًا، و`?` يسرد مناظر هذا التبويب. الحفظ باسم موجود يستبدله؛ وكل تغيير خطوة تراجع واحدة. المناظر تنتمي إلى التبويب الذي حُفظت فيه. ملفات DWG وDXF تحتفظ بها (جدول VIEW)؛ ومناظر الورقة تعود إلى الورقة الأولى، لأن الملف لا يذكر أيها.

### UNDO وREDO

الاسم المستعار: `U` لـ {{cmd:UNDO}}؛ و{{cmd:REDO}} لا اسم مستعار له. وأيضًا {{key:Mod+Z}} و{{key:Mod+Y}}.

### LAYER

الاسم المستعار: `LA`. ينتقل إلى لوحة {{ui:Layers}}.

### LINETYPE وLWEIGHT وLTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer` أو `ByBlock` أو اسم (`?` يسردها: Continuous، ونوع الرسم الخاص، وDASHED، وHIDDEN، وCENTER، وPHANTOM، وDOT، وDASHDOT، وBORDER، وDIVIDE مع أحجامها `2` (نصف) و`X2` (ضعف)). {{cmd:LWEIGHT}} (`LW`): سماكة الخط للكائنات الجديدة بالمليمتر، أو `ByLayer`، أو `ByBlock`، أو `Default`. {{cmd:LTSCALE}} (`LTS`): مقياس نوع الخط للرسم (قابل للتراجع). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` وهو نفسه زر {{ui:LWT}} في شريط الحالة. انظر [سماكات الخطوط وأنواع الخطوط](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME وLAYMRG وLAYDEL

{{cmd:RENAME}} (`-RENAME`، `REN`): `Enter object type to rename [LAyer/Block]`، `Enter old name`، ثم الاسم الجديد؛ والكائنات أو المراجع تتبعه. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` حتى {{key:Enter}}، ثم `Select object on target layer or [Name]` و`Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`، ثم `Y`: تذهب الطبقة وكل كائن عليها (لا الطبقة 0، ولا DEFPOINTS، ولا الطبقة الحالية). كل أمر خطوة تراجع واحدة. انظر [تنظيم الرسم بالطبقات](topic:layers#rename-merge-and-delete-layers).

### LAYISO وLAYUNISO وLAYOFF وLAYFRZ وLAYMCUR وLAYON وLAYTHW

الطبقات بالتقاط الكائنات؛ وأيضًا في قائمة {{ui:Tools}} في لوحة {{ui:Layers}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`، ثم {{key:Enter}}: تُطفأ كل طبقة أخرى. {{cmd:LAYUNISO}} يعيدها. {{cmd:LAYOFF}} و{{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (أو frozen)، مرارًا؛ و`U` يسحب آخر واحد، و{{key:Enter}} ينهي. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} يشغّل كل الطبقات، و{{cmd:LAYTHW}} يذيب تجميد كل الطبقات. كل أمر خطوة تراجع واحدة. انظر [تنظيم الرسم بالطبقات](topic:layers#work-on-layers-by-picking-objects).

### NEW وOPEN وSAVE وSAVEAS وDXFOUT

{{cmd:NEW}} يبدأ رسمًا فارغًا، و{{cmd:OPEN}} يفتح DWG أو DXF، كل منهما في تبويبه فوق الرسم (يُستخدم رسم جديد لم يُمس بدلًا من تبويب جديد). إغلاق تبويب فيه تغييرات غير محفوظة يسأل أولًا. انظر [تقسيم الشاشة](topic:split-screen).

{{cmd:SAVE}} (الاسم المستعار `QSAVE`، وأيضًا {{key:Mod+S}}) ينزّل نسخة بصيغة الرسم: DWG إذا فُتح من DWG، وDXF إذا فُتح من DXF. الرسم الجديد يستخدم الصيغة التي اخترتها آخر مرة في Save as في هذا المتصفح، وإلا DWG.

{{cmd:SAVEAS}} (وأيضًا {{key:Mod+Shift+S}}) يفتح حوار {{ui:Save a copy as}}: اختر {{ui:DWG}} (وإصداره {{ui:Version}})، أو {{ui:DXF R12}}، أو {{ui:DXF 2000}}، ثم {{ui:Save}}. الاختيار يبقى لهذا الرسم وللرسوم الجديدة في هذا المتصفح.

{{cmd:DXFOUT}} ينزّل دائمًا نسخة DXF R12، دون تغيير الصيغة التي يستخدمها {{cmd:SAVE}}.

انظر [الملفات: ما الذي يُفتح وما الذي يُحفظ](topic:files#saving).

### TOUR

الاسم المستعار: `TUTORIAL`. يبدأ من جديد الجولة المكونة من ست خطوات لأول رسم. انظر [البدء](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

الاسم المستعار: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. انظر [الإعدادات](topic:settings#toolbar-position).

### COMMANDLINE

الاسم المستعار: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: يثبّت سطر الأوامر أو يجعله عائمًا، أو يجعله سطرًا واحدًا، أو يسأل كم سطرًا من السجل يُعرض (من 0 إلى 12)، أو يفتح السجل. انظر [الإعدادات](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: الأشرطة فوق الرسم كما كانت، أو مضغوطة. انظر [الإعدادات](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: الخطوة التي تصطف عندها خطوط التتبع القطبي {{ui:Polar}} (أكبر من 0، وحتى 180). تُحفظ في هذا المتصفح.

### UNITS

الاسم المستعار: `UN`. كيفية كتابة الأطوال وإدخالها.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural وFractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. والباقي: `Enter number of decimal places (0 to 8)`.

الأبعاد الجديدة تتبعه. خطوة تراجع واحدة. وهو نفسه {{ui:Length format}} و{{ui:Precision}} في {{ui:Current settings}}؛ انظر [الأقدام والبوصات](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

الاسم المختصر: `GDS`. يعرض تخطيط دائرة متكاملة (ملف تدفق GDSII): تجربة مختبرية، للعرض والقياس فقط.

- يأخذ منتقي الملفات ملف `.gds`؛ ومع عدة خلايا عليا، `Enter the top cell to draw`.
- تصبح كل طبقة ونوع بيانات طبقة رسم (`GDS 1`، `GDS 2/5`)، وتوضع المراجع والمصفوفات مسطحة، بوحدة المستخدم في الملف (عادةً ميكرومتر). خطوة تراجع واحدة. لا يُحاكى شيء ولا يُفحص، ولا يُكتب الملف مرة أخرى.

### DIAGRAM

الأسماء المستعارة: `TEXTDIAGRAM`، `T2D`. مخطط من نص.

- المربع يأخذ النص (أو سطرًا واحدًا مع `;` بين العبارات في سطر الأوامر): مخطط تدفق Mermaid، أو مخطط مكونات PlantUML، أو D2، أو قائمة من-إلى.
- `Specify the top left corner of the diagram`، ثم `Specify the text height`.

الكتل والوصلات كائنات عادية على الطبقة `Diagram`، وتُحدد عندما ينتهي الأمر. خطوة تراجع واحدة. انظر [رسم مخطط من نص](topic:text-to-diagram).

### OLELIST

الاسم المستعار: `OLES`. كائنات OLE التي يحملها DWG ولا يستطيع CadCraft وضعها بنفسه.

- يسرد كل واحد: رقمه ونوعه وحجمه، وهل حفظ صورة.
- `Enter an option [Place/eXit] <eXit>`: Place يسأل عن الرقم، والركن السفلي الأيسر، والعرض، ويرسم إطارًا بالصورة. خطوة تراجع واحدة؛ والكائن المحفوظ لا يتغير. انظر [الصور](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

الاسم المستعار: `SHX`. خطوط SHX الخاصة بك.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} يقرأ كل ملف `.shx` في مجلد (في CadCraft Studio؛ من جديد عند كل بدء)، و{{ui:Files}} يأخذ ملفات تلتقطها (في المتصفح)، و{{ui:Reverse}} يرتب حروف خط واحد من الأخير إلى الأول. أنماط النص التي تسمي خطًا محملًا تُرسم به. انظر [رسم النص بخطوط SHX الخاصة بك](topic:shx-fonts).

### LIMITS

حجم الرسم المقصود.

- `Specify lower left corner or [ON/OFF] <current>`: نقطة، أو `ON`، أو `OFF`.
- `Specify upper right corner <current>`.

الشبكة تملأ الحدود، و{{cmd:ZOOM}} All يعرضها، ومع تشغيلها ترفض نقطة خارجها (`**Outside limits`). خطوة تراجع واحدة؛ تُحفظ في DWG وDXF. انظر [ضبط حدود الرسم](topic:drawing-limits).

### AUNITS

الاسم المستعار: `ANGUNITS`. كيفية عرض الزوايا وإدخالها.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`، أو للنوعين الآخرين `Enter precision` (0 درجة، و2 دقيقة، و4 ثانية، و5 إلى 8 منازل من الثانية).

خطوة تراجع واحدة؛ تُحفظ في DWG وDXF. وهو نفسه {{ui:Angle format}} في {{ui:Current settings}}. انظر [إدخال الاتجاهات والزوايا وعرضها](topic:bearings-and-angles).

### APPLOAD

الأسماء المستعارة: `AP`؛ أو {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. حوار {{ui:Load applications}}: تحميل روتينات `.lsp` وملفات حوار `.dcl`، وإلغاء تحميلها، وإعادة تحميلها من السجل، وحزمة البدء. أوامر الروتين `(defun c:NAME …)` تعمل بعد ذلك كأي أمر آخر. انظر [تحميل التطبيقات](topic:load-applications) و[تشغيل روتينات LISP](topic:run-lisp).

### ALIASEDIT وREINIT

{{cmd:ALIASEDIT}} (أو {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) يفتح ملف الأسماء المستعارة الخاص بك (أسطر `ALIAS, *COMMAND`)؛ و{{ui:Save}} يطبقه. {{cmd:REINIT}} يطبقه من جديد. انظر [تحرير الأسماء المستعارة للأوامر](topic:command-aliases).

### LISPEDIT

الاسم المستعار: `VLIDE`؛ أو {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. يفتح محرّر LISP، نافذة تبقى مفتوحة بجانب الرسم.

- النص: أرقام الأسطر، ويُعلَّم قوس المقابلة للقوس عند المؤشر (بالأحمر إذا لم يكن له مقابل)، و{{key:Enter}} يزيح السطر الجديد تحت القوس المفتوح، و{{key:Tab}} يكتب مسافتين، و{{key:Esc}} يترك النص.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): يقرأ كل صيغة، كما يفعل {{cmd:APPLOAD}} بالملف، ويجعل أوامر `c:` متاحة. الملف يظهر في قائمة {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): يقيّم الصيغ المحددة، أو الصيغة التي يقع فيها المؤشر.
- {{ui:Stop}}: ينهي روتينًا يعمل.
- {{ui:Console}}: ما طبعه الروتين، وكل خطأ مع سطره؛ انقر خطأ للذهاب إليه. يُنفَّذ النص صيغة عليا واحدة في كل مرة، لذا السطر هو سطر الصيغة، أو داخلها السطر الذي يستدعي الدالة التي يسميها الخطأ.
- {{ui:New}}، {{ui:Open}}، {{ui:Save}} ({{key:Ctrl+S}}): ملف `.lsp`. النص محفوظ أيضًا في هذا المتصفح، فإغلاق النافذة لا يفقده.
- بجانب النص: الدوال التي يعرّفها الروتين، والدوال التي يستدعيها ولا يملكها هذا LISP بعد، والدوال التي يستدعيها ولا تُعرَّف فيه ولا هي مدمجة، والقوائم الكاملة لما هو مبني وما ليس كذلك.

النص الذي فيه قوس لا يُغلق، أو سلسلة نصية لا تنتهي، لا يُنفَّذ: يُسمّى السطر. لا يوجد مصحح خطوة بخطوة، ولا نقاط توقف، ولا نافذة مراقبة. انظر [تشغيل روتينات LISP](topic:run-lisp).

### HELP

الاسم المستعار: `?`. يطبع كل أمر، وأسماءه المستعارة، ووصفًا من سطر واحد في سجل سطر الأوامر. لا يفتح هذه المساعدة: اضغط {{key:F1}} أو انقر {{ui:Help}} لذلك.

## تحديد الكائنات

عند أي موجّه `Select objects`: انقر الكائنات، وارسم نوافذ (من اليسار إلى اليمين) وتقاطعات (من اليمين إلى اليسار) بنقرتين، أو اضغط واسحب لاسو ({{key:Space}} أثناء السحب: نافذة، أو تقاطع، أو سياج)، و{{key:Shift}}+نقرة للإزالة، واضغط {{key:Enter}} للإنهاء. ويمكنك كتابة `ALL` (كل شيء)، و`L` (آخر كائن)، و`P` (السابق: ما استخدمه الأمر الأخير)، و`F` (السياج: الكائنات التي يعبرها خط من النقاط؛ و`U` يسحب نقطة)، و`W` (نافذة)، و`C` (تقاطع)، و`R` (وضع الإزالة: كل نقرة تُخرج كائنًا؛ ويقرأ الموجّه `Remove objects`)، و`A` (إضافة من جديد). `?` يسردها. لا تظهر في الموجّه. {{key:Tab}} فوق كائنات متراكبة يبرز الكائن التالي؛ انقر لالتقاطه. انظر [تحديد الكائنات](topic:select-objects).

### ACCESS

الاسم المستعار: `AX`. الرسم بدون رؤية. {{cmd:ACCESS}} يشغّل الوصول أو يوقفه (`On`، `Off`) ويبدّل أصوات الالتقاط (`Sound`) والأوامر المنطوقة (`Voice`)؛ ويذكر الحالة أولًا. مع تشغيل الوصول، يُنطق كل أمر ونتيجة عبر قارئ الشاشة، ولمنطقة الرسم مؤشر لوحة مفاتيح. موضوع المساعدة "الرسم بدون رؤية" يحوي المفاتيح.

### DESCRIBE

الاسم المختصر: `DESC`. يقول ما يحتويه الرسم: كم كائنًا، ومن أي نوع، وما حجمه، وكم طبقة، وما المحدد. يقرأ فقط؛ ولا يغيّر شيئًا.

### WHEREAMI

الاسم المختصر: `WHERE`. يقول أين يقع المؤشر، بوحدات الرسم.

### NEARBY

يقول ما يقع قرب المؤشر، الأقرب أولًا، ولكلٍّ منه مسافته والجانب الذي هو عليه.

### SAYSEL

يقول ما هو محدد، جملة واحدة لكل كائن (طول الخط وأطرافه وزاويته؛ ونصف قطر الدائرة ومركزها؛ والنص كما هو مكتوب).

### VOICE

يشغّل الأوامر المنطوقة أو يوقفها. تُتعرّف على هذا الحاسوب؛ وحيث لا يستطيع المتصفح ذلك، يبقى الصوت متوقفًا إلا إذا اخترت خدمة المتصفح عبر الإنترنت من الإعدادات.

### TOUCHCROSSHAIR

الاسم المختصر: `TCX`. الصليب المزاح للرسم بالإصبع، حتى لا يحجب طرف الإصبع النقطة التي تلتقطها. عند تشغيله، إصبع واحد على الرسم لا يلتقط: بل يحرك صليبًا يقع فوق الإصبع وإلى جانب منه. الالتقاطات وتتبع الكائنات تتبع الصليب. رفع الإصبع لا يلتقط شيئًا ويترك الصليب في مكانه. للالتقاط، اضغط زر {{ui:Click}} في ركن الرسم، أو انقر أي مكان على الرسم بإصبع ثانٍ. أمسك {{ui:Click}} أثناء تحريك الإصبع الآخر للسحب (نافذة تحديد، أو لاسو، أو مقبض). الإصبع المضغوط ساكنًا، أو زر {{ui:Enter}}، هو Enter. الإصبعان يحركان ويكبّران كما كان. قرب الحافة السفلية والحافة الجانبية البعيدة يقترب الصليب من الإصبع، فيمكن الوصول إلى كل أجزاء الرسم. القلم والفأرة يلتقطان مباشرة دائمًا.

{{cmd:TOUCHCROSSHAIR}} يذكر الحالة ويسأل `ON`، `OFF`، `Auto` (يعمل فقط حيث الإصبع هو المؤشر الوحيد، فيكون مغلقًا على حاسوب بفأرة)، و`Distance` (كم يبعد الصليب عن الإصبع، من 24 إلى 240 بكسل)، أو `Side` (`Left`: إلى أعلى ويسار، لليد اليمنى؛ و`Right` لليد اليسرى؛ والأزرار تنتقل إلى الركن الآخر). الخيارات نفسها في الإعدادات › CadCraft، وعلى جهاز بشاشة لمس يحوي شريط الحالة مفتاح {{ui:Offset crosshair}}. تُحفظ الخيارات في هذا المتصفح.

### WHOHAS

يقول من فتح رسمًا. في CadCraft Studio على الحاسوب، فتح DWG أو DXF يكتب ملف قفل صغيرًا بجانبه (`Plan.dwg.cclock`: من، ومنذ متى، وأي إصدار)، ويحدّثه كل دقيقة ما دام الرسم مفتوحًا، ويزيله عند إغلاق الرسم. فتح رسم يفتحه شخص آخر يقول من هو ومنذ متى، ويعرض {{ui:Open read-only}} (فيطلب الحفظ اسمًا جديدًا)، و{{ui:Open anyway}} (يُبلَّغ الشخص الآخر عند تحديثه التالي)، أو {{ui:Cancel}}. الحفظ فوق ملف يفتحه شخص آخر يسأل أولًا. القفل الذي لم يُحدَّث خلال خمس دقائق يُعتبر قديمًا: إما أن النسخة الأخرى أُغلقت دون حفظ، أو أن الحاسوب في وضع السكون.

{{cmd:WHOHAS}} يسأل `Current` (الرسم المفتوح)، و`File` (التقط واحدًا)، و`FOlder` (التقط مجلدًا: يُسرد كل رسم فيه مفتوح في مكان ما)، و`Path` (اكتب مسارًا كاملًا)، أو `Name` (الاسم الذي يراه الآخرون؛ واسم حسابك عندما تكون مسجّل الدخول). Studio يصل فقط إلى المجلدات التي اخترتها: للرسم المفتوح من مجلد لم يُختر أبدًا يذكر مرة واحدة أنه لا يستطيع تسجيل الرسم كمفتوح؛ و`FOlder` يختار المجلد، والأقفال تعمل هناك من ذلك الحين. القفل ملاحظة للناس، وليس حاجزًا: برنامج آخر ما زال يستطيع كتابة الملف. في المتصفح لا توجد مجلدات لتُفحص، والأمر يقول ذلك.

### OVERKILL

يحذف الكائنات المكررة، ويرتب الخطوط والأقواس المتداخلة، للرسوم التي تصل ممتلئة بخطوط مزدوجة. `Select objects to clean up`، و{{key:Enter}}، ثم {{key:Enter}} مرة أخرى للتنظيف بالإعدادات المعروضة، أو غيّر واحدًا أولًا:

- `Tolerance`: مدى تقارب إحداثيين ليُعدّا متطابقين (0.000001 للبداية؛ و0 يعني المتطابقين تمامًا).
- `Ignore`: الخصائص التي يجوز أن تختلف بين كائنين متشابهين في غيرها. اكتب اسمًا لتبديله: `Color`، `LAyer`، `LType`، `ltScale`، `LWeight`، `THickness`، `TRansparency`، أو `None` / `All`. {{key:Enter}} عند الانتهاء.
- `Overlap`: تشغيل أو إيقاف. عند التشغيل، الخطوط المتداخلة على استقامة واحدة تصبح خطًا واحدًا (والخط الواقع داخل آخر يُحذف ببساطة)، والأقواس المتداخلة على دائرة واحدة تصبح قوسًا واحدًا؛ والأقواس التي تكمل دورة كاملة تصبح دائرة، والقوس الواقع على دائرة يُحذف.
- `Ends`: تشغيل أو إيقاف. عند التشغيل، الخطوط على استقامة واحدة والأقواس على دائرة واحدة التي تلتقي طرفًا بطرف فقط تصبح قطعة واحدة.

كل نوع من الكائنات يُفحص للتكرار: كائنان مكرران عندما تتطابق هندستهما ضمن التفاوت، وتتطابق طبقتهما ولونهما ونوع خطهما ومقياس نوع خطهما وسماكتهما وسمكهما وشفافيتهما وارتفاعهما (ناقصًا ما تتجاهله). والخطوط والخطوط المتعددة المفتوحة تتطابق أيضًا عندما تُرسم في الاتجاه المعاكس. الكائن الأول في ترتيب الرسم يبقى ويحتفظ بخصائصه. يذكر الأمر كم كائنًا فُحص وكم حُذف: مكررات، وقطع متداخلة دُمجت، وقطع وُصلت طرفًا بطرف. {{cmd:UNDO}} واحد يعيد كل شيء. الإعدادات تبقى حتى تغلق نافذة الرسم.

يترك دون مساس: الكائنات على طبقات مقفلة، والكائنات المخفية. لا يدمج الخطوط ذات الارتفاع (Z) (المكررات التامة منها تُحذف)، ولا يمس المقاطع داخل الخط المتعدد (لا تُقلَّص)، ولا الخط الواقع على مقطع خط متعدد، ولا الخط المتعدد المغلق المرسوم في الاتجاه المعاكس.

### DRAWORDER

يغيّر الكائنات التي تُرسم في المقدمة. `Select objects to re-order`، و{{key:Enter}}، ثم `Above objects`، `Under objects`، `Front`، أو `Back` ({{key:Enter}} = `Back`). `Above objects` و`Under objects` يسألان عن كائنات مرجعية: يذهب التحديد مباشرة أمام أقربها إلى المقدمة، أو خلف أبعدها. الكائنات المحددة تحتفظ بترتيبها بينها. خطوة تراجع واحدة. يُحفظ الترتيب مع الرسم في DWG وDXF، وهو الترتيب الذي تُكتب به الكائنات.

على الشاشة يرسم CadCraft التعبئات (التهشيرات المصمتة، والخطوط المتعددة العريضة، والأقنعة) أولًا، ثم الخطوط، ثم النص، فيُقرأ النص دائمًا فوق التعبئة؛ ويظهر ترتيب الرسم بين الكائنات المعبأة وبين الصور. البرامج الأخرى التي تفتح الملف ترسم كل كائن بالترتيب المحفوظ.

### TEXTTOFRONT

يقدّم النص والأبعاد والخطوط الإرشادية إلى المقدمة على كل شيء آخر في الفضاء المفتوح: `Text`، `Dimensions`، `Leaders` أو `All` ({{key:Enter}} = `All`). خطوة تراجع واحدة. يذكر ذلك عندما لا يوجد شيء من ذلك، أو عندما تكون في المقدمة أصلًا.

### HATCHTOBACK

يرسل كل تهشير في الفضاء المفتوح خلف كل شيء آخر، فلا تغطي التعبئات الخطوط والنص في الملف المحفوظ. بلا موجّهات. خطوة تراجع واحدة.

### ISOLATEOBJECTS

الاسم المستعار: `ISOLATE`. يُظهر الكائنات المحددة فقط: كل شيء آخر في الفضاء المفتوح يختفي حتى {{cmd:UNISOLATEOBJECTS}}. على خلاف {{cmd:LAYISO}}، يعمل على الكائنات التي تلتقطها، مهما كانت طبقاتها، ولا يغيّر أي طبقة. الكائنات المخفية لا تُرسم، ولا تُلتقط، ولا تُلتقط بها الالتقاطات، ولا يُكبَّر عليها، ولا تُطبع؛ والأوامر التي تأخذ `ALL` تتجاوزها. ما ترسمه والكائنات معزولة يظهر كالمعتاد.

هذا للجلسة فقط: لا شيء منه يُحفظ مع الرسم، وليس خطوة تراجع، وعند فتح الرسم من جديد يظهر كل شيء. وبينما الكائنات مخفية يعرض شريط الحالة زرًا برقمها؛ انقر عليه لإظهارها من جديد.

### HIDEOBJECTS

يخفي الكائنات المحددة حتى {{cmd:UNISOLATEOBJECTS}}. القواعد نفسها كـ {{cmd:ISOLATEOBJECTS}}: للجلسة فقط، لا تُحفظ، وليست خطوة تراجع.

### UNISOLATEOBJECTS

الأسماء المستعارة: `UNISOLATE`، `UNHIDE`. يُظهر من جديد كل كائن أخفاه {{cmd:ISOLATEOBJECTS}} أو {{cmd:HIDEOBJECTS}}، ويذكر كم عاد منها.

### LAYLOCKFADE

يضبط كيف تبدو الكائنات على الطبقات المقفلة، وهل تصل إليها النقرة. يذكر الحالة الحالية، ثم يأخذ:

- عددًا من 0 إلى 90: مقدار البهتان بالمئة (50 للبداية). 0 يوقف البهتان.
- `ON` أو `OFF`: تشغيل البهتان أو إيقافه مع الاحتفاظ بمقداره.
- `Pick`، ثم `Yes` أو `No`: هل يجوز للنقرة أن تحدد كائنات على طبقات مقفلة أثناء عدم تشغيل أي أمر؟ `No` (الافتراضي): لا يمكن التقاطها أبدًا. `Yes`: النقرة أو النافذة تحددها ليتمكن {{ui:Properties}} من عرضها؛ ولا تزال غير قابلة للتغيير، و`Select objects` الخاص بالأمر لا يأخذها أبدًا.

التقاطات الكائنات تجد الكائنات على الطبقات المقفلة في الحالتين. الطبعات لا تُبهت أبدًا. الإعدادان لك أنت، لا للرسم، وهما أيضًا في {{ui:Settings}} تحت {{ui:Locked layers}}.

### BURST

يفكك مراجع الكتل ويحتفظ بما تقوله سماتها. `Select block references to burst`، و{{key:Enter}}: كل مرجع يُستبدل بكائنات الكتلة، وقيمة كل سمة مرئية تصبح نصًا عاديًا على طبقة تلك السمة الخاصة (السمة على الطبقة 0 تهبط على طبقة المرجع، كبقية كائنات الكتلة على الطبقة 0). السمات غير المرئية تُسقط. الكتلة داخل الكتلة تبقى مرجع كتلة. خطوة تراجع واحدة؛ ويذكر عدد المراجع التي فُككت وقيم السمات التي تحولت نصًا.

يرفض رسمًا مرتبطًا بالاسم (اربطه أولًا، أو انسخ منه بـ {{cmd:NCOPY}})، ويترك الكائنات المحددة الأخرى كما هي. بالنسبة لمراجع الكتل، يعطي {{cmd:EXPLODE}} الكائنات نفسها؛ أما {{cmd:BURST}} فيتناول مراجع الكتل فقط ويحسب نص السمات.

### TXT2MTXT

الاسم المستعار: `T2M`. يصل النصوص أحادية السطر في نص فقرة واحد. `Select single-line text to join`، و{{key:Enter}}، ثم `Paragraph` (تتصل الأسطر ويلتف النص عند عرض أعرض سطر) أو `Lines` (يبقى كل نص سطرًا مستقلًا)؛ و{{key:Enter}} يأخذ الخيار المستخدم أخيرًا. الأسطر ترتّب من الأعلى إلى الأسفل، ثم من اليسار إلى اليمين، على اتجاه النص الأعلى. الفقرة تتدلى من الركن العلوي الأيسر للنص الأعلى، وتأخذ ارتفاعه ودورانه ونمطه وطبقته ولونه. خطوة تراجع واحدة.

النص الذي هو نص فقرة من قبل، والنص الفارغ، والكائنات الأخرى في التحديد تُترك كما هي، ويذكر الأمر عددها.

### NCOPY

ينسخ كائنات من مرجع كتلة أو رسم مرتبط إلى الرسم دون تفكيك أي شيء. `Pick an object inside a block reference or a linked drawing`: الكائن الأقرب إلى النقرة يُنسخ حيث يظهر، مهما كان عمق الكتل؛ التقط المزيد، ثم {{key:Enter}}. ثم `Base point to move the copies`: {{key:Enter}} يترك النسخ في مكانها، أو أعطِ نقطة أساس ونقطة ثانية. الأمر كله خطوة تراجع واحدة.

النسخة تأخذ الطبقة التي تظهر عليها: الكائن على الطبقة 0 داخل كتلة يهبط على طبقة المرجع الذي كان فيه، واللون ByBlock يصبح لون ذلك المرجع. من رسم مرتبط، الطبقة `Plan|Walls` تصبح `Plan$0$Walls` (الاسم الذي يعطيه الرابط)، وتُصنع بلون الطبقة المرتبطة ونوع خطها وسماكتها. قيمة السمة تُنسخ كنص. مراجع الكتل على الطبقات المقفلة لا يمكن التقاطها.

### FLATTEN

يضبط الارتفاع (Z) والسماكة للكائنات المحددة على 0. `Select objects to flatten`، و{{key:Enter}}. يسطّح أيضًا الكائنات داخل تعريفات الكتل التي يستخدمها التحديد (والكتل داخل تلك)، فيتغير كل مرجع لتلك الكتل؛ والرسوم المرتبطة تبقى كما هي. خطوة تراجع واحدة؛ يذكر عدد الكائنات التي تغيّرت، ويقول ذلك عندما لا يكون لأي منها ارتفاع أو سماكة.

ما يحتفظ به CadCraft من البعد الثالث في الرسم ثنائي الأبعاد هو: ارتفاع على الدوائر والأقواس والقطع الناقصة والنقاط والنص ومراجع الكتل والتهشيرات وخطوط الإرشاد والخطوط المتعددة (منسوبها)، وارتفاع عند كل طرف للخط، وسماكة على الخطوط والدوائر والأقواس والخطوط المتعددة والنقاط والنص، كما كانت في الملف. {{cmd:FLATTEN}} يمسح هذه بالذات. لا يمس المجسمات في علامة التبويب ثلاثية الأبعاد، ولا الأوجه ثلاثية الأبعاد أو المجسمات، والكائن المرسوم في مستوى مائل كان قد أُعيد إلى مستوى الرسم عند فتح الملف.

### BREAKLINE

يرسم خطًا برمز كسر، لمنظر مقطوع قصيرًا. يذكر الحجم والامتداد الحاليين، ثم `First point of the break line` (أو `Size` / `Extension` لتغييرهما أولًا)، و`Second point`، و`Where the break symbol sits`: انقر على امتداد الخط، أو {{key:Enter}} للمنتصف. النتيجة خط متعدد واحد على الطبقة الحالية: الخط، يمتد بعد كل نقطة بالامتداد، مع خطة على شكل Z بارتفاع الحجم ونصف طوله.

`Size` و`Extension` يُتذكران كإعداداتك (الحجم يبدأ بضعف ارتفاع نص البُعد مضروبًا في المقياس الكلي للبُعد؛ والامتداد يبدأ بنصف الحجم). {{key:Enter}} يكرر الأمر.

### AUDIT

يفحص الرسم المفتوح بحثًا عن تلف ويصلحه. {{cmd:AUDIT}} ينظر في كل كائن في النموذج، وعلى الأوراق، وداخل الكتل، وفي جدول الطبقات، ويسرد ما يجده حسب النوع:

- أرقام غير منتهية أو كبيرة بشكل غير معقول؛
- كائنات بلا حجم: خط بلا طول، ودائرة بلا نصف قطر، وخط متعدد بلا رأس، ونص بلا حروف أو ارتفاع، ومرجع كتلة بمقياس صفر؛
- كائنات على طبقة غير موجودة في الرسم؛ ومراجع إلى كتلة غير موجودة؛ وأسماء أنماط نص وأبعاد وأنواع خطوط غير موجودة في الرسم؛
- كتل تحتوي على نفسها، مباشرة أو عبر كتل أخرى؛
- كائنات تشترك في معرّف أو مفتاح أو مقبض ملف؛
- أبعاد بلا النقاط التي تُقاس منها، وتهشيرات لا يكون حدها مخططًا مغلقًا.

ثم يسأل `Fix them? [Yes/No]`. `No` لا يغيّر شيئًا. `Yes` يصلح كل شيء في خطوة تراجع واحدة: ما لا يمكن رسمه يُزال (أرقام سيئة، وبلا حجم، وكتلة مفقودة، وبُعد معطوب، وتهشير بلا حد صالح، والمرجع الذي يغلق حلقة كتل)؛ والطبقة المفقودة تُنشأ؛ وأسماء الأنماط وأنواع الخطوط غير المعروفة تعود إلى الافتراضيات؛ والمفتاح المشترك يُستبدل. يطبع عدد الكائنات التي أُزيلت وعدد التي أُصلحت. النتائج نفسها تظهر في لوحة المشكلات، ولكل منها {{ui:Repair}} خاص بها.

لا يرفض شيئًا، لكنه يفحص فقط ما يرسمه CadCraft نفسه: البيانات المحفوظة لبرامج أخرى (المجسمات ثلاثية الأبعاد، وكائنات OLE) لا تُفتح.

### RECOVER

يفتح DXF أو DWG تالفًا. {{cmd:RECOVER}} يسأل عن الملف، ويقرأ ما يمكن قراءته بدلًا من رفض الملف، ويسرد ما تخطّاه أو افترضه، ثم يفحص الرسم ويصلحه كما يفعل {{cmd:AUDIT}} مع `Yes`.

- DXF: الأسطر التي ليست جزءًا من زوج رمز وقيمة تُتخطى حتى تستقيم الأزواج من جديد؛ والقسم الذي لا نهاية له يُغلق؛ والملف المقطوع يُقرأ حتى موضع القطع؛ وDXF الثنائي المقطوع يُقرأ حتى آخر قيمة كاملة فيه. عندما لا يُقرأ قسم أو كتلة أو كائن، يُترك ويُسمّى، وتستمر القراءة بعده.
- DWG: الكائنات التي تفشل في فحوصها أو لا يمكن فك ترميزها تُترك، وتُعاد بناء قائمة الكائنات المفقودة بالمرور على بيانات الكائنات.

الملف على القرص لا يتغير. الرسم المستعاد يُفتح غير محفوظ: احفظه باسم جديد. الملف الذي لا يمكن قراءة أي شيء منه يُرفض، مع السبب.

### LEGACYTEXT

يحوّل النص المكتوب بخطوط فيتنامية قديمة ذات 8 بتات إلى Unicode. الأسماء المختصرة `TEXTTOUNICODE` و`VNTEXT`.

الرسوم الفيتنامية القديمة تحفظ نصها كحروف غربية لا يحوّلها إلى فيتنامية إلا الخط: نص TCVN3 في خطوط ABC (‏`.VnTime`، `.VnArial`، والخطوط ذات الحروف الكبيرة التي تنتهي أسماؤها بـ `H`)، ونص VNI في خطوط VNI (`VNI-Times`). CadCraft يعرض هذا النص كما يُقرأ حال فتح الرسم، حسب خط نمط النص، أو خط الكائن، أو خط مقطع داخل نص الفقرة؛ والملف ما زال يحتوي الحروف القديمة.

{{cmd:LEGACYTEXT}} يذكر كم نصًا وجده في كل ترميز ويسأل `Convert … to Unicode?`. `Yes` يعيد كتابة كل نص (النموذج، والأوراق، والكتل، وقيم السمات وتعريفاتها)، ويعطي أنماط النص خطًا Unicode (Times New Roman أو Arial أو Courier New حسب نوع الخط القديم)، في خطوة تراجع واحدة. التنسيق داخل نص الفقرة يبقى.

عندما لا يستخدم نص أي خط معروف (نمط نص فقد اسم خطه)، يسأل `Read selected texts as [Tcvn3/Vni/None]`: اختر الترميز، وحدد النصوص. النص الذي هو Unicode أصلًا يُترك. نصوص تجاوزات الأبعاد ونص الخطوط الإرشادية المتعددة لا تُحوَّل.
