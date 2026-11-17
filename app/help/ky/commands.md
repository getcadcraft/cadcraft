---
title: Буйруктардын маалымдамасы
summary: CadCraft чийме куралындагы ар бир буйрук, анын псевдонимдери, берилүүчү суроолор, варианттары жана демейкилери.
keywords: буйруктар, псевдонимдер, буйруктар тизмеси, аянт, периметр, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Буйрук аты же псевдоним терип {{key:Enter}} же {{key:Space}} басыңыз. Регистр маанисиз, жана баштаркы `_`, `-`, `.` же `'` эске алынбайт. `HELP` (же `?`) терсеңиз, буйрук саптын тарыхында ар бир буйруктун кыска тизмеси басылып чыгат; бул жардамды ачуу үчүн {{key:F1}} басыңыз.

Суроолорду кантип окуу керек: варианттар квадрат кашаада турат, ал эми аларды баш тамгалары менен терип тандайсыз (`D` (Диаметр үчүн)). Демейки маани бурч кашаада турат; аны кабыл алуу үчүн {{key:Enter}} басыңыз. Чекит сурралганда, [Координат жана аралыкты киргизүү](topic:coordinate-entry) бөлүмүндөгү форматтардын бирин чыкылдатсаңыз же терсеңиз болот. Аралык сурралганда, санды терсеңиз же эки чекитти чыкылдатсаңыз болот.

Чекит же объект талап кылынганда, демейки жок болсо, {{key:Enter}} басканда буйрук аяктайт. {{key:Esc}} аны жокко чыгарат. Буйрук эмне кылганына карабастан, бир {{ui:Артка кайтаруу}} кадамы болот.

## Тартуу

### LINE

Псевдонимдер: `L`. Түз кесиндилер, ар бири өз объекти.

- `Specify first point` (Enter: акыркы берилген чекиттен баштоо)
- `Specify next point [Undo]`, кайталанат. Эки кесиндиден кийин: `[Undo/Close]`.
- `U` акыркы кесиндини артка кайтарат, `C` биринчи чекитке туташтырып аяктатат. Enter аяктатат.

### PLINE

Псевдонимдер: `PL`. Сызык жана жаа кесиндилеринен турган бир полилиния.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (эки кесинди болгондо Close)
- `A` жааларга которот: `Specify endpoint of arc [Line/CLose/Undo]`. Ар бир жаа алдындагы кесиндиге жанаша улантылат. `L` сызыктарга кайтат, `CL` жаа менен туташтырат.
- Enter аяктатат; полилиния ачык калат.

### CIRCLE

Псевдонимдер: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` `Specify diameter of circle` сурайт.
- `2P`: диаметрдин эки учу. `3P`: айлананын үч чекити.
- `T` (ошондой эле `TTR` буйругу жана {{ui:Тартуу}} › {{ui:Дагы}} › {{ui:Айлана: Жанама, Жанама, Радиус}}): `Specify point on object for first tangent of circle`, андан кийин экинчиси, андан кийин радиус (Enter: акыркысы). Айлана эки объектке тийет (сызыктар, жаалар, айланалар, полилиния кесиндилери, блоктордун ичинде да); тийгендердин ичинен сиз басканга эң жакыны. Туура келбесе, «Айлана жок» деп билдирет.
- `TTT` (же {{ui:Тартуу}} › {{ui:Дагы}} › {{ui:Айлана: Жанама, Жанама, Жанама}}): үч объект; үчөөнө тийген айлана, сиз басканыңыздын жакыны (үч сызык ичкы же сырткы айланаларды берет, кайда басканыңызга жараша).

### ARC

Псевдонимдер: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: үч чекит аркылуу жаа.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Жаа баштан аягына саат жебесине каршы жүрөт.

### RECTANG

Псевдонимдер: `REC`, `RECTANGLE`. Жабык полилиния.

- `Specify first corner point`, `Specify other corner point`. Экинчи бурч үчүн `@width,height` терсеңиз болот.

### POLYGON

Псевдонимдер: `POL`. Туура көп бурчтук, жабык полилиния катары.

- `Enter number of sides <4>` (3төн 1024кө чейин)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: чекитти басыңыз же терсеңиз; анын аралыгы өлчөмдү, багыты көп бурчтукту бурат.

### ELLIPSE

Псевдонимдер: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, андан кийин экинчи огка чейинки аралык.

### HATCH

Псевдонимдер: `H`, `BH`, `BHATCH`; же куралдар тилкесинде {{ui:Штриховка}}. Адегенде учурдагы үлгүнү, масштабды жана бурчту басып чыгарат.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, кайталанат (`Undo` аянт бар болгондо): ар бир чыкылдатуу айланасындагы жабык аймакты кошот, ичиндеги жабык фигуралар аралдар катары. Enter бардыгынан бир штриховка жасайт.
- `S`: `Select closed objects` (жабык полилиниялар, айланалар, жабык эллипстер).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.

Караңыз [Штриховка жана толтуруу аймактары](topic:hatch).

### POINT

Псевдонимдер: `PO`; же {{ui:Тартуу}} › {{ui:Дагы}} › {{ui:Чекит}}. Чекит объекттери, ар бир чыкылдатууда бирөө, Enter басканга чейин.

- `Specify a point`

### XLINE

Псевдонимдер: `XL`; же {{ui:Тартуу}} › {{ui:Дагы}} › {{ui:Курулуш сызыгы}}. Курулуш сызыктары, эки тарапка чексиз. Караңыз [Курулуш сызыктары жана нурлар](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, андан кийин ар бир сызык үчүн `Specify through point`, Enter басканга чейин.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` алдын ала `Select a line object` сурайт.
- `B`: `Specify angle vertex point`, `Specify angle start point`, андан кийин ар бир сызык үчүн `Specify angle end point`.
- `O`: `Specify offset distance [Through] <Through>`, андан кийин ар бир сызык үчүн `Select a line object` жана `Specify side to offset` (же `Specify through point`).

### RAY

Псевдонимдер жок; же {{ui:Тартуу}} › {{ui:Дагы}} › {{ui:Нур}}. `Specify start point`, андан кийин ар бир нур үчүн `Specify through point`, Enter басканга чейин.

### TEXT

Псевдонимдер: `DT`, `DTEXT`; же куралдар тилкесинде {{ui:Текст}}. Бир сап текст; ар бир сап өз объекти.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, андан кийин `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, кайталанат: ар бир Enter астындагы кийинки сапты баштайт. Бош сапта Enter аяктатат. {{key:Space}} бул жерде боштук жазат.

## Өзгөртүү

Псевдонимдер: `MT`, `T`; же куралдар тилкесинде {{ui:Абзац}}. Туурасына чейин орогон абзац тексти, ордунда терилген.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: эки бурчтун ортосундагы туурасы текстти орой турган жери. `H` `Specify height` сурайт, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)`, экинчи бурчту өткөрүп жиберет.
- Андан кийин чийменеде кутуча ачылат: терип, жаңы абзац үчүн {{key:Enter}}, бүтүрүү үчүн {{key:Mod+Enter}} же сыртты басуу, жокко чыгаруу үчүн {{key:Esc}}. Анын тилкеси бийиктикти, сап аралыгын, туурасын жана тегиздөөнү коёт. Караңыз [Текст жана белгилерди кошуу](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Псевдонимдер: `ED`, `DDEDIT`; же текстти эки жолу басыңыз. `Select a text to edit`, {{key:Enter}} басканга чейин кайталанат: ар бири ошол эле кутуча менен ачылат. Тандалган же эки жолу басылган текстте башталса, ал гана түзөлүп бүтөт.
### ERASE

Псевдонимдер: `E`, `DELETE`; же объекттер тандалганда {{key:Delete}} басыңыз.

- `Select objects` (объекттер буга чейин тандалса өткөрүлөт)

### MOVE

Псевдонимдер: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, `dx,dy` түрүндө терилет.

### COPY

Псевдонимдер: `CO`, `CP`. Сиз канча чекит берсеңиз, ошончо көчүрмө жасайт.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, Enter басканга чейин кайталанат. `U` акыркы көчүрмөнү артка кайтарат.

### ROTATE

Псевдонимдер: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: градус менен, саат жебесине каршы оң; же бурулчу чекитти чыкылдатыңыз.

### SCALE

Псевдонимдер: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: `0.5` же `2` сыяктуу фактор терип. Чыкылдатылган чекиттин базалык чекиттен аралыгы фактор катары.

### MIRROR

Псевдонимдер: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Псевдонимдер: `AL`; же {{ui:Өзгөртүү}} › {{ui:Дагы}} › {{ui:Тегиздөө}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Эки жупта: `Scale objects based on alignment points? [Yes/No] <N>`

Караңыз [Объекттерди тегиздөө](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (же тандоо), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` чекит сурайт. Тандоо калат.

### DISTRIBUTE

- `Select objects` (кеминде үч), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Сырткы эки калат; тандоо калат.

### ALIGNPANEL

Псевдонимдер: `ALP`; же {{ui:Өзгөртүү}} › {{ui:Дагы}} › {{ui:Тегиздөө жана бөлүштүрүү}}. ALIGNTO жана DISTRIBUTE чыкылдатуу менен иштеткен панелди ачат.

### LASER

Псевдонимдер: `LASERCUT`; же {{ui:Көрүнүш}} › {{ui:Дагы}} › {{ui:Лазер…}}. Чийменин үстүнөн Лазер панелин ачат: ар бир катмар эмне кыларын (кесүү, сызуу, гравировка, толтуруу, сүрөт), алдын ала көрүү, сактоо үчүн GRBL G-code, жана Web Serial аркылуу алкактоо жана жөнөтүү. Караңыз [Чийменени лазерге жөнөтүү](topic:laser-cutting).

### STRETCH

Псевдонимдер: `S`; же {{ui:Созуу}}. `Select objects to stretch`: жылдыруу үчүн учтарга кесилген терезелерди сүйрөңүз (же `C` терип). `Specify base point [Displacement]`, `Specify second point`. Терезелердин ичиндеги чекиттер жылат: сызык учтары, полилиния чекиттери (жаа кесиндилери бийиктигин сактайт), өлчөм чекиттери; айланалар, эллипстер, текст, чекиттер жана блоктор борбору же киргизүү чекити ичинде болсо бүтүндөй жылат. Буйруктан мурун тандоо кылган терезелерди (жана арканды) сактайт, ошондуктан алар ошол эле жол менен созулат. Терезесиз объекттер бүтүндөй жылат.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Псевдонимдер: `AR`; же {{ui:Массив}}. `Select objects`, андан кийин `Enter array type [Rectangular/POlar] <Rectangular>` (ARRAY гана).

- Rectangular 4 мамыча × 3 катар менен башталат, объекттердин өлчөмүнүн 1.5 эсе аралыгында, алдын ала көрүнүш катары. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` мамычаларды жана катарларды, `S` мамычалар жана катарлар ортосундагы аралыктарды сурайт (терс болсо солго же төмөнкү жакка), `COL` жана `R` ар бир багыт үчүн бирден.
- Polar `Specify center point of array` сурайт, башында 6 элемент тегерек менен, бурулган. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` элементтер, `F` толтуруу бурчу (+ саат жебесине каршы, − саат жебесине), `ROT` Yes же No.
- {{key:Enter}} (eXit) жөнөкөй объекттер катары көчүрмөлөрдү жасайт. Бир {{ui:Артка кайтаруу}} кадамы.

### OFFSET

Псевдонимдер: `O`. Сызыктар, жаалар, айланалар жана полилиниялар.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, андан кийин `Specify point on side to offset` (же Through менен, `Specify through point`), Enter басканга чейин кайталанат.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: {{cmd:TRIM}} жана {{cmd:EXTEND}} кантип башталат. `1` Quick (Тез): ар бир объект кесүүчү кыр же чек. `0` Standard (Стандарттуу): адегенде четтерди сурайт. LISPте `(setvar "TRIMEXTENDMODE" 0)` да.

### TRIM

Псевдонимдер: `TR`. Адегенде `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` басып чыгарат. Quick режимде ар бир көрүнгөн объект кесүүчү кыр, ал эми эч нерсе кесилбеген объект өчүрүлөт; Standard режимде алгач `Select cutting edges (Enter = every object)` сурайт жана ошолордо гана кесет.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, кайталанат: алып салуучу бөлүктү басыңыз (көрсөткүч анын үстүндө турганда боз жана пунктир көрүнөт), бир нече бөлүктөн өтүүчү жолду сүйрөңүз (бардыгы бир кадамда), же арасына тосмо үчүн эки бош жерди басыңыз. {{key:Shift}} анын ордуна узартат. `T` кесүүчү кырларды тандайт (Standard режим), `F` тосмо чекиттерин сурайт, `C` эки терезе бурчу (ичинде жарым-жартылай болгон бөлүктөр кетет), `O` `Enter a trim mode option [Quick/Standard]` сурайт, `E` `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE) сурайт, `R` тандаган объекттерди өчүрөт, `U` акыркы тандоону же сүйрөөнү артка кайтарат. Enter аяктатат. Караңыз [Кесүү жана узартуу](topic:trim-and-extend).

### EXTEND

Псевдонимдер: `EX`. TRIM менен тескерисинче бирдей: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Чыкылдатуу учунун жакынкысын кийинки чекке чейин узартат; сүйрөлгөн жол же тосмо ал өткөн ар бир объектти узартат; {{key:Shift}} кесет. `B` чек четтерин тандайт (Standard режим). Mode жана Edge TRIM менен бөлүшүлөт.

### LINKVIEWS

Псевдонимдер: `SYNCVIEWS`; же {{ui:Көрүнүш}} › {{ui:Дагы}} › {{ui:Терезелердин көрүнүштөрүн байлоо}}, же чийменелердин өтмөктөрүндөгү шилтеме сүрөтчөсү. `Link the panes' views [ON/OFF]` (Enter башка абалды алат): күйгүзүлгөндө, активдүү панелдеги панорама же чоңойтуу ошол эле түрдөгү мейкиндикти көрсөткөн ар бир панелди жылдырат. Караңыз [Экранды бөлүү](topic:split-screen).

### OPENIN3D

Псевдонимдер жок; же {{ui:Көрүнүш}} › {{ui:Дагы}} › {{ui:ModelCraft'та ачуу}} — 3D моделдөө колдонмосу өткөрүлгөн чийменени кабыл алат. Ал жерде жаңы өтмөктө DWG катары ачат (эч нерсе жүктөлбөйт). Браузер өтмөктү бөгөттөсө, ал муну айтат.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: бош жерде басып сүйрөгөндө эмне чийилет. Бул Жөндөөлөр › CadCraft › Тандоо үчүн сүйрөө менен бирдей. Караңыз [Аркан менен тандоо](topic:lasso-selection).

### FILLET

Псевдонимдер: `F`. Сызыктар, жаалар, айланалар жана полилиниялар. Адегенде `Current settings: Mode = TRIM, Radius = 0` басып чыгарат.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` `Specify fillet radius <last>` сурайт. `T` `Enter Trim mode option [Trim/No trim]` сурайт: No trim менен объекттер мурдагыдай калат, жана жаа гана кошулат.
  - `M` буйрукту дагы бурчтар үчүн {{key:Enter}} басканга чейин улантат; `U` акыркы бурчту буйрукту таштабай артка кайтарат.
  - `P` `Select 2D polyline [Radius]` сурайт жана эки түз кесинди туш келген ар бир бурчту айлантат. Буга чейин бар тегерек бурчтар жаңы радиус менен алмашат; радиус 0 аларды алып салат. Капталдары радиуска карата тым кыска болгон бурчтар калат жана саналат.
- `Select second object or shift-select to apply corner [Radius]`. Курч бурч үчүн, радиусуна карабастан, басканда {{key:Shift}} кармаңыз.

Чыкылдатуу сиз сактагыңыз келген бөлүккө туш келиши керек. Туш келбеген эки сызык узартылат. Параллель эки сызыкка алардын ортосундагы боштукта жарым айлана, сиз басканга эң жакын биринчи сызыктын учунда чыгат. Айлана эч качан кесилбейт. Бир полилиниянын бири-бирине тийген эки кесиндисинде жаа полилиниянын ичинде; полилиния менен башка объект, кесүү полилиниянын биринчи же акыркы кесиндисине тийсе иштейт.

### CHAMFER

Псевдонимдер: `CHA`. Сызыктар жана полилиниялардын түз кесиндилери. Адегенде учурдагы аралыктарды (же узундук жана бурчту) басып чыгарат.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` `Specify first chamfer distance <last>` жана `Specify second chamfer distance <the first>` сурайт: биринчиси сиз тандаган биринчи сызыктан, экинчиси башкасынан кесилет.
  - `A` `Specify chamfer length on the first line` жана `Specify chamfer angle from the first line` сурайт.
  - `E` (mEthod) кийинки фаска экөөнүн кайсынысын колдонорун тандайт. `T`, `M`, `U` жана `P` {{cmd:FILLET}} сыяктуу иштейт.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+чыкылдатуу курч бурч жасайт.

Сызыктан узунураак аралык четке кагылат (`Distance is too large.`).

### BREAK and BREAKATPOINT

Псевдонимдер: `BR`. `Select object` (басканыңыз биринчи чекит болот), `Specify second break point [First point]`; `F` `Specify first break point` жана `Specify second break point` сурайт. Ортосу жоголот; айланада биринчи чекиттен саат жебесине каршы. BREAKATPOINT `Specify break point` сурайт жана ошол чекитте объектти эки бөлүккө бөлөт (айлана эмес).

### LENGTHEN

Псевдонимдер: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: басуу `Current length` басып чыгарат (жаанын ичилген бурчу) жана кайра сурайт. `DE` `Enter delta length (negative shortens) [Angle]` сурайт, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` сүйрөйт. Андан кийин `Select an object to change [Undo]`, кайталанат: басканга эң жакын учу жылат. Сызыктар, жаалар жана ачык полилиниялар.

### JOIN

Псевдонимдер: `J`. `Select objects to join`. Учу-учу менен туташкан сызыктар, жаалар жана ачык полилиниялар полилинияларга айланат (чынжыр жабылса, жабык); бир сызыкта жаткан сызыктар бир сызыкка айланат; бир айланадан болгон жаалар бир жаага же айланага айланат. Тарыхта канча объект кошулганы жана канчасы кошулбаганы айтылат.

### MATCHPROP

Псевдонимдер: `MA`, `PAINTER`. `Select source object`, андан кийин `Select destination objects [Settings]` жана {{key:Enter}}. Катмарды жана түстү көчүрөт, ал эми бир түрдөгү объекттер арасында текст бийиктиги жана туурасын, өлчөм өлчөмдөрүн же штриховка үлгүсүн. `S` `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` сурайт, {{key:Enter}} басканга чейин кайталанат; тандоо сеанс үчүн эсте калат.

### EXPLODE

Псевдонимдер: `X`. Полилиниялар сызык жана жааларга, блок шилтемелери өз объекттерине, өлчөмдөр сызыктарга, жебелерге жана текстке айланат.

- `Select objects`

## Алмашуу буфери

CadCraft'тын өз алмашуу буфери: ал чийменеде, чиймелердин ортосунда жана бул браузердеги CadCraft өтмөктөрүнүн ортосунда иштейт. Караңыз [Көчүрүү, чаптоо жана көчүрмө жасоо](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, же {{ui:Түзөтүү}} тобундагы {{ui:Көчүрүү}}. Объекттерди блоктор жана катмарлар менен кошо алмашуу буферине көчүрөт. Объекттер тандалган бойдон калат.

- `Select objects to copy` (объекттер буга чейин тандалса өткөрүлөт)

### CUTCLIP

{{key:Mod+X}}, же {{ui:Дагы}} менюсундагы {{ui:Кесүү}}. Объекттерди алмашуу буферине көчүрөт, андан кийин өчүрөт (бир Артка кайтаруу кадамы).

- `Select objects to cut` (объекттер буга чейин тандалса өткөрүлөт)

### COPYBASE

Тандаган базалык чекит менен объекттерди алмашуу буферине көчүрөт; чаптоодо ошол чекит жайгаштырылат.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, же {{ui:Түзөтүү}} тобундагы {{ui:Чаптоо}}. Көчүрмө курсордун артынан жүрөт, анын кеңейиш тик бурчтугунун төмөнкү сол бурчунан илинип (же борборунан, же `COPYBASE` чекитинен; караңыз [CadCraft жөндөөлөрү](topic:settings)).

- `Specify insertion point`

Чапталган объекттер тандалат. Чийменеде ошол эле ат менен блок бар болсо, ал бул чийменедеги аныктаманы сактайт.

Эгер MarkupCraft'та көчүрүлгөн аймак CadCraft көчүргөндөн жаңыраак болсо (жана 6 сааттан кичине болсо), {{key:Mod+V}} жана `PASTECLIP` анын ордуна ошол аймакты чаптайт: караңыз `PASTEAREA`.

### PASTEAREA

Псевдонимдер: `PAREA`. {{ui:Көчүрүлгөн аймакты чаптоо}} {{ui:Дагы}} менюсунда. MarkupCraft'та {{ui:Аймакты көчүрүү}} менен көчүрүлгөн аймакты чыныгы өлчөмүндө сүрөт катары чаптайт. Караңыз [Чийменедеги сүрөттөр](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (барактын масштабы жок болсо гана): сан, {{key:Enter}} кагаз өлчөмү үчүн, же `P`, андан кийин `First point on the pasted area`, `Second point on the pasted area` жана алардын чыныгы аралыгы.

### PASTEORIG

{{key:Mod+Shift+V}}, же {{ui:Дагы}} менюсундагы {{ui:Ордунда чаптоо}}. Объекттер көчүрүлгөн координаттарга чапталат. Эч нерсе сурабайт.

### DUPLICATE

Псевдонимдер: `DUP`. {{key:Mod+D}}, же {{ui:Дагы}} менюсундагы {{ui:Көчүрмөсүн жасап жылдыруу}}. Объекттердин көчүрмөсү, турган жеринен курсор менен жылат; {{key:Esc}} эч нерсе калтырбайт. Алмашуу буферин колдонбойт.

- `Select objects to duplicate` (объекттер буга чейин тандалса өткөрүлөт)
- `Specify where the copy goes (Esc leaves nothing)`: чыкылдатуу, чекитти терүү, `@dx,dy` (курсор турган жерден), же курсорго карай аралык.

### SELECT

`Select objects` сурайт (төмөндөгү бардык варианттар менен) жана тандаганыңызды калтырат, кийинки буйрук үчүн же кийинчерээк `P` үчүн.

### QSELECT

Псевдонимдер: `QS`. Браузерде {{ui:Тез тандоо}} диалогу (караңыз [Объекттерди тандоо](topic:select-objects#select-by-a-rule-quick-select)). Ал жок болсо, буйрук сабында `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` жана `Enter value` сурайт. Дал келгендер тандоо болот.

### SELECTSIMILAR

Псевдонимдер: `SIM`. `Select objects [SEttings]` (же учурдагы тандоо): ошол эле түр, катмар жана түстөгү ар бир объектти тандайт (блок аты жана штриховка үлгүсү да). `SE` `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` сурайт, {{key:Enter}} басканга чейин кайталанат.

### FIND

Псевдонимдер жок; же {{ui:Түзөтүү}} › {{ui:Дагы}} › {{ui:Табуу жана алмаштыруу}}. Браузерде {{ui:Табуу жана алмаштыруу}} диалогу (караңыз [Текст жана белгилерди кошуу](topic:text#find-and-replace-words)). Ал жок болсо: `Enter text to find`, андан кийин `Enter replacement text (Enter: select what is found)`. Текстте, атрибут маанилеринде жана өлчөм тексттеринде, ачык өтмөктө же тандоодо издейт.

### SELECTALL and DESELECT

`SELECTALL` (псевдоним `AI_SELALL`, {{key:Mod+A}}) ачык өтмөктө түзөтүүгө болгон ар бир объектти тандайт. `DESELECT` (псевдонимдер `AI_DESELECT`, `SELECTNONE`; же {{key:Esc}}) тандоону тазалайт.

## Өлчөмдөр

### DIMLINEAR

Псевдонимдер: `DLI`, `DIMLIN`. Горизонталдык же вертикалдык аралык.

- `Specify first extension line origin [Select object]` (Enter же `S`: `Select object to dimension`, андан кийин сызыкты, жааны, айланаканы же полилиния кесиндисин басыңыз)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` текст сурайт (`<>` — өлчөнгөн маани), `H` жана `V` багытты бекитет, `R` `Specify angle of dimension line <0>` сурайт.

### DIMALIGNED

Псевдонимдер: `DAL`, `DIMALI`. Эки чекиттин ортосундагы чыныгы аралык.

- Башталыштар {{cmd:DIMLINEAR}} сыяктуу, андан кийин `Specify dimension line location [Text]`.

### DIMANGULAR

Псевдонимдер: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Жаа: анын бурчу. Айлана: `Specify second angle endpoint`. Сызык: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: өлчөө үчүн бурчтун ичин басыңыз.

### DIMRADIUS and DIMDIAMETER

Псевдонимдер: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, андан кийин `Specify dimension line location [Text]`.

### DIMCONTINUE

Псевдонимдер: `DCO`, `DIMCONT`. Акыркы сызыктуу же туураланган өлчөмдөн улантат (же `Select linear or aligned dimension` сурайт).

- `Specify second extension line origin [Undo]`, Enter басканга чейин кайталанат.

### DIMBASELINE

Псевдонимдер: `DBA`, `DIMBASE`. {{cmd:DIMCONTINUE}} сыяктуу, бирок ар бир өлчөм биринчи башталыштан баштап, андан ары жайгашат.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Псевдонимдер жок. Ар бири `Enter new value for … <current>` сурайт жана ошол өлчөмдү **жаңы** өлчөмдөр үчүн коёт: жалпы масштаб, текст бийиктиги, жебе өлчөмү, ондук орундар (8ге чейин), текст тегерегиндеги аралык, өлчөм сызыгынан тышкары узартуу, башталыштан жылыш. Караңыз [Өлчөмдөрдүн өлчөмдөрүн коюу](topic:dimension-settings).

### DIMLUNIT

Өлчөм жөндөөсү: жаңы өлчөмдөрдүн гана формат (1 илимий, 2 ондук, 3 инженердик, 4 архитектуралык, 5 бөлчөк).

### DIMSTYLE and -DIMSTYLE

Псевдонимдер: `DST`, `DDIM`, `D`. Өлчөм стилдеринин башкармасы: {{ui:Учурдагыны коюу}}, {{ui:Жаңы…}}, {{ui:Өзгөртүү…}}, {{ui:Атын өзгөртүү…}}, {{ui:Өчүрүү}}, {{ui:Салыштыруу…}}, {{ui:Тандалгандарга колдонуу}}. Буйрук сабындагы `-DIMSTYLE`: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Караңыз [Өлчөм стилдерин коюу](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, андан кийин өлчөмдөр (же алдын ала тандалгандар). New текст сурайт (`<>` = өлчөм); Rotate бурч; Oblique — өлчөм сызыктарынын бурчу X огуна карата (Enter = жок; сызыктуу жана туураланган өлчөмдөр гана). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Караңыз [Өлчөм текстин жана узартуу сызыктарын өзгөртүү](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Псевдонимдер: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, же тандалган өлчөмдөр менен `Units in the text of the selected dimensions`. Өлчөнгөн узундукту ал бирдикте, бирдиктен кийин жазат (DIMLFAC жана DIMPOST суффикси); `D` чийменин бирдиктерине кайтарат. Караңыз [Өлчөмдөр mm, cm, m же km менен](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Псевдонимдер: `RC`. `Arc length: … Type: …` басып чыгарат, андан кийин `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular `Specify opposite corner` сурайт; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand басканга же {{key:Enter}} басканга чейин курсорду ээрчийт; `O` `Select object` жана `Reverse direction? [Yes/No] <N>` сурайт жана объектти булутка айландырат. `A` `Specify the length of each arc` сурайт. `R`, `P` жана `F` кийинки булут үчүн түрүн тандайт. Натыйжа — жааларадан турган жабык полилиния.

### MLEADER

Псевдонимдер: `MLD`; же {{ui:Жетектөө}}. `Specify leader arrowhead location [Arrowhead size/Landing distance]`, `Specify leader landing location`, андан кийин текст ордундагы кутучада (же ал жок болсо, `Enter text (an empty line ends)`). DWGде чыныгы көп жетектөө катары сакталат; DXF өзү чийген сызыктарды, жебени жана текстти сактайт.

## Параметрлик

Караңыз [Чийменени чектөө](topic:constraints) жана [Параметрлерди жана теңдемелерди колдонуу](topic:parameters). Чектөөлөр {{ui:Модель}} өтмөгүндө иштейт.

### GEOMCONSTRAINT and the GC commands

Псевдоним `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, андан кийин ал буйруктун суроолору.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (экинчиси жылат).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT and the DC commands

Псевдоним `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (сан, туюнтма же `name=expression`).
- {{cmd:DCALIGNED}}: окшош, `[Object/Point & line/2Lines]` менен.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` аралык жана бурч толеранттуулугун сурайт.
- {{cmd:DELCONSTRAINT}} (псевдоним `DELCON`): `Select objects`; алардын чектөөлөрү кетет.
- {{cmd:CONSTRAINTBAR}} (псевдоним `CBAR`): `Select objects [Showall/Hideall]`, андан кийин `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (псевдонимдер `PAR`, `PARAM`) {{ui:Параметрлер}} панелин ачат. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Псевдоним `SWMACRO`. SolidWorks'та модельди бир чектелген эскиз катары кайра жасаган макро (.swb) жүктөйт. Караңыз [Эскиздерди башка деталдоочу куралдарга көчүрүү жана кайтаруу](topic:solidworks-sketches).

## Блоктор

### ANNOSCALE

Псевдонимдер: `CANNOSCALE`. Чийменин аннотациялык масштабын жана ал канча аннотациялык объект камтыганын айтат, андан кийин `New annotation scale` сурайт: `1:50`, `1:100`, `2:1`, жалаң сан (`50` — 1:50) же чийменин өз масштабдарынын аты терилет. Ар бир аннотациялык текст жана өлчөм жаңы масштабда ошол эле өлчөмдө басылышы үчүн өлчөмү өзгөртүлөт, бир Артка кайтаруу кадамында; аннотациялык эмес объекттерге тийилбейт. Караңыз [Бирдиктер, барактар жана масштабдар](topic:units-papers-scales#annotate-by-scale).

### SCALELISTEDIT

Псевдонимдер: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]`, {{key:Enter}} басканга чейин. Кошуу: `Scale name`, `Paper units`, `Drawing units`. Түзөтүү жана Өчүрүү масштабдын атын сурайт. Чийменин өз масштабдары көрүнүш терезесинин жана басма масштабдарынын тизмелерине кошулат жана чийме менен сакталат. Караңыз [Бирдиктер, барактар жана масштабдар](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: ийри өтүүчү чекиттер; `Close`, `Undo`, андан кийин `Start tangent` жана `End tangent` (чекит же {{key:Enter}}). Method › Control vertices даражаны (1ден 5ке чейин) сурайт жана башкаруу көп бурчтугунан тартат. Object полилинияларды алардын чекиттери аркылуу сплайнга айландырат. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` бир нече объект үчүн; сызыктар, жаалар жана сплайндар адегенде полилиния катары сунушталат. Караңыз [Сплайндар жана полилиниялар](topic:splines).

### BLOCK

Псевдонимдер: `B`, `BMAKE`.

- `Enter block name`. Ал бар болсо: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Алар жаңы блокко бир шилтеме менен алмашат.

### WBLOCK

Псевдонимдер: `W`, `-WBLOCK`. Блокту, айрым объекттерди же бүтүн чийменени жаңы DWG же DXF файл катары жазат. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ал жаңы чийменин башталышы болот), `Select objects`, андан кийин `File format [DWG/DXF/R12 DXF]` жана `File name for the new drawing`, андан кийин `What to do with the objects [Retain/Convert to block/Delete]`. Convert аларды файлдын аты менен блокко бир шилтеме менен алмаштырат; Delete өчүрөт.
- **Block**: `Block to write out`. Блоктун өз объекттери, анын базалык чекити башталыш катары, ичинде жайгашкан блоктор менен кошо.
- **Entire drawing**: модель мейкиндигиндеги ар бир объект. Барактар жазылбайт; аларды сактаган көчүрмө үчүн {{cmd:SAVEAS}} колдонуңуз.

Жаңы файлда гана анын объекттери колдонгон катмарлар, сызык түрлөрү, текст жана өлчөм стилдери жана блоктор, жана чийменин бирдиктери болот. DWG версиясы — {{cmd:SAVEAS}} акыркы колдонгон версия. Браузерде файл жүктөлөт; Studio'да сактоо диалогу ачылат.

### ATTDEF

Псевдонимдер: `ATT`, `DDATTDEF`, `-ATTDEF`; же {{ui:Блоктор}} › {{ui:Дагы}} › {{ui:Атрибутту аныктоо}}. Режимдерди басып чыгарат, андан кийин `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (константа болсо `Enter attribute value`), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} атрибут аныктамаларын блокко алат.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, же атрибуттуу шилтемени эки жолу басыңыз; {{ui:Блоктор}} › {{ui:Дагы}} › {{ui:Атрибуттарды түзөтүү}}): `Select a block reference with attributes`, андан кийин {{ui:Атрибуттарды түзөтүү}} диалогу. `ATTEDIT` (`ATE`, `-ATTEDIT`): ошол эле шилтеме, андан кийин ар бир атрибут үчүн `<prompt> (<TAG>) <value>`; {{key:Enter}} маанини сактайт. Караңыз [Атрибуттар](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Маанилер сакталат; жаңы атрибуттар демейкисин алат, алынгандар кетет, орундар калыбына келет.

### BATTMAN

{{ui:Блоктор}} › {{ui:Дагы}} › {{ui:Атрибуттарды башкаруу}}. Диалог: блок, атрибуттар (тег, суроо, демейки, режимдер, тартип), {{ui:Шилтемелерди жаңыртуу (маанилер сакталат)}}, {{ui:Колдонуу}}.

### REFEDIT and REFCLOSE

{{ui:Блоктор}} › {{ui:Дагы}} › {{ui:Жеринде түзөтүү}}. `REFEDIT`: `Select the block reference to edit in place` (же тандоо). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; панелдин {{ui:Блокту сактоо}} жана {{ui:Таштоо}} баскычтары ошону кылат. Бүтүн түзөтүү бир Артка кайтаруу кадамы. Караңыз [Атрибуттар](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT and BCLOSE

`BE`; же {{ui:Блоктор}} › {{ui:Дагы}} › {{ui:Блокту оңдоо}}. `Enter block name to edit <the selected reference's block>` блок редакторун ачат. `BCLOSE` `Close the block editor on "…" [Save/Discard] <Save>` сурайт; баннердеги {{ui:Блокту сактоо}} жана {{ui:Өзгөртүүлөрдү таштоо}} ошону кылат. Редакторго кылган ар бир нерсе бир Артка кайтаруу кадамы.

### VIEWBASE

Псевдоним: `FLATSHOT`. 3D өтмөктөгү катуу денелердин тегиз 2D көрүнүшү: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, масштаб (`1:20`, `2:1`; {{key:Enter}} барактын ылайыгын алат), андан кийин көрүнүштүн борбору. Бир блок шилтемеси, көрүнгөн четтер VIEW-VISIBLE, жашыруун пунктир VIEW-HIDDENде. Караңыз [Барактагы тегиз көрүнүштөр](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Псевдонимдер: `-PUBLISH`; же {{ui:PDF'ке басып чыгаруу}} диалогундагы {{ui:Бардык барактар бир PDF файлында}}. `Sheets to plot [All/Some]`: {{key:Enter}} бардык барактарды басат, `S` аттарды үтүр менен бөлүп сурайт. Бир PDF, ар бир барак үчүн бет жана закладка. Караңыз [Бардык барактар бир PDF'те](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Псевдонимдер: `SSM`, `SHEETSETMANAGER`. Сол панелдеги {{ui:Барак топтому}} бөлүмүнө алып барат: көп чийменелердеги барактар, номерленген жана аталган, титул блоктору топтомдон толтурулуп, бир PDF катары басылган. Караңыз [Барактар топтому](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): DWG же DXF тандап, андан кийин анын киргизүү чекити. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; бир нече шилтеме болсо, анын шилтемелеринин бирин тандаңыз же `N` терип аты. Караңыз [Туташтырылган чийменелер](topic:files#linked-drawings-external-references).

### COUNT

Псевдоним: `BCOUNT`; же {{ui:Блоктор}} › {{ui:Дагы}} › {{ui:Блокторду саноо}}. `Select a block reference to count, or [All/Export] (Enter: All)`: басуу ошол блоктун бардык шилтемелерин ушул мейкиндикте тандайт жана саноо; {{key:Enter}} же `A` баарын тизмелейт; `E`, андан кийин `C` (саноо) же `A` (атрибуттар) CSV жүктөйт. Караңыз [Блокторду саноо жана график экспорттоо](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Псевдонимдер: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (регистр маанисиз). `F` DWG же DXF сурайт, андан кийин бүтүн чийменени же анын блоктордун бирин; буга чейин колдонулган ат `Keep existing` же `Rename` сурайт. `L` китепкана панелин ачат.
- `Specify insertion point [Scale/Rotate]`. `S` `Specify scale factor`, `R` `Specify rotation angle` сурайт; экөө тең эсте калат.
- Андан кийин блок сураган ар бир атрибут үчүн `Enter <prompt> (<TAG>) <default>`. Караңыз [Блок атрибуттары](topic:attributes).

### LIBRARY

Псевдонимдер: `LIB`. Китепкана панелин ачат: нерселерди жайгаштыруу, жаңыртууларды текшерүү, китепкананын кредиттери. Суроо жок. Караңыз [Файлдан же китепканадан киргизүү](topic:insert-from-file-and-library).

### STEELMEMBER

Псевдонимдер: `SMEMBER`; же китепкананын {{ui:Стандарттуу}} өтмөгүндөгү {{ui:3D элемент}}. `Section size <W12x26>` (өтмөк тизмелеген түрүндө), андан кийин `Start point [Column]` жана `End point`: эки чекиттин ортосунда 3D өтмөктө жерде турган катуу элемент. `C` тирөөчтүн базалык чекитин жана бийиктигин сурайт. Бир Артка кайтаруу кадамы. Караңыз [Болот кесимдерди жана стандарттуу деталдарды коюу](topic:steel-and-standard-parts).

### PARTSLIST

Псевдонимдер: `PLIST`. `Top left corner of the parts list`, андан кийин `Text height <2.5>`: китепканадан коюлган ар бир стандарттуу деталь жана болот кесимдин таблицасын тартат (позиция номерлери, саны, деталь, стандарт, өлчөм, узундук, материал, масса). Бир Артка кайтаруу кадамы. Караңыз [Болот кесимдерди жана стандарттуу деталдарды коюу](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Псевдонимдер: `PU`. Эч ким колдонбогон блок аныктамаларын алып салат. Суроо жок.

### DELBLOCKS

Же {{ui:Блоктор}} › {{ui:Дагы}} › {{ui:Блокторду өчүрүү}}. `Select block to delete [Name/eXit]`: блок шилтемесин басыңыз, же тизме үчүн `N` (чыпкасы менен, бир нечесин тандоого болот), же аяктатуу үчүн `X` / {{key:Enter}}. Ар бир шилтеме кетет — моделдеги, ар бир барактагы жана башка блоктордун ичиндеги — андан кийин аныктама, жана буйрук сабы эмнени өчүрүлгөнүн жана эмнени өчүрө албаганын айтат. Аты жок блоктор жана туташтырылган чийменелер сунушталбайт. Кийинки блок үчүн суроо кайтып келет; бүтүн буйрук бир Артка кайтаруу кадамы.

## Барактар жана басып чыгаруу

### LAYOUT

Псевдонимдер: `LO`, `NEWLAYOUT`; же чийменин астындагы {{ui:+}} баскычы. Чек, титул блогу жана бир көрүнүш терезеси менен жаңы барак, ISO A3де (же дюйм же футтагы чийменелер үчүн Tabloid). Суроо жок.

### MVIEW

Псевдонимдер: `MV`. Барактын үстүндө гана ({{cmd:VPORTS}} барактагы да ошону кылат).

- `Specify corner of viewport`, `Specify opposite corner`. Көрүнүш терезеси бүтүн моделди стандарттуу масштабда көрсөтөт.

### VPORTS

Псевдонимдер: `VIEWPORTS`. {{cmd:SPLIT}} барактан да ошол эле; ал эми {{ui:Көрүнүш}} › {{ui:Дагы}} › {{ui:Капталдан бөлүү}}, {{ui:Үстүнөн бөлүү}}, {{ui:Төрт терезе}}, {{ui:Бир терезе}} аны иштетет. Моделде: `Enter number of panes [SIngle/2/3/4] <3>`; `2` `[Horizontal/Vertical] <Vertical>` сурайт (Vertical = капталдан капталга), `3` `[Left/Right] <Right>` сурайт (чоң панель кайда). Ар бир панель өз көрүнүшүн жана мейкиндигин сактайт; чыкылдатуу панелди активдүү кылат. Барактагы ал {{cmd:MVIEW}}. Караңыз [Экранды бөлүү](topic:split-screen).

### VPVIEW

Псевдонимдер жок. Барактын үстүндө гана.

- `Select viewport` (тандалса өткөрүлөт), андан кийин моделде: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Псевдонимдер жок. Өз координаттар системасы; түзөтүү эмес. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: чекит жаңы башталыш, андан кийин `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: башталыш, оң X огундагы чекит, оң-Y тарабындагы чекит. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` жана аты. Көрүнүш жаңы X огу тегиз болуп бурулат. Караңыз [Көрүнүштү буруу жана өз координаттарыңызды колдонуу](topic:ucs-and-turned-view).

### PLAN

Псевдонимдер жок. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: активдүү панелдин көрүнүшүн UCSтин X огу (же дүйнөнүкү) тегиз болгондой кылып бурат. Чийменеде эч нерсе жылбайт.

### TURNLEFT, TURNRIGHT, TURNWORLD

Псевдонимдер жок; же {{ui:Көрүнүш}} › {{ui:Дагы}} › {{ui:Көрүнүштү 90° солго буруу}}, {{ui:Көрүнүштү 90° оңго буруу}}, {{ui:Дүйнөгө кайтуу}}. `UCS Z -90`, `UCS Z 90` жана `UCS W` менен бирдей, көрүнүш ээрчип.

### VPLAYER

Псевдонимдер жок. Барактын үстүндө же көрүнүш терезесинин ичинде. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` катмар аттарын сурайт (үтүрлөр, `*` жана `?` белгилери), андан кийин `[All/Select/Current] <Current>` көрүнүш терезелери; Reset ар бир катмарды "жаңы көрүнүш терезелеринде туңдулган" демейкисине кайтарат; `V` ошол демейкини коёт (`[Frozen/Thawed]`), ал {{cmd:MVIEW}} колдонот. `?` учурдагы көрүнүш терезесинде туңдулган катмарларды тизмелейт. Катмарлар панелинин көрүнүш терезеси тилкеси ошону бир терезе үчүн кылат. Караңыз [Катмарды бир көрүнүш терезесинде туңдуруу](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Псевдонимдер: `MS`; же көрүнүш терезесинин ичине эки жолу басыңыз. Барактын үстүндө гана. Көрүнүш терезеси аркылуу моделде иштөө: тандалган, барактагы жалгыз же `Click inside the viewport to work in`. Ичинде панорамалоо жана чоңойтуу көрүнүш терезесинин көрүнүшүн өзгөртөт (көрсөткүчү кулпуланган терезе аны сактайт жана барак жылат); жаңы көрүнүш бир Артка кайтаруу кадамы. Караңыз [Көрүнүш терезеси аркылуу модельде иштөө](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Псевдонимдер: `PS`; же көрүнүш терезесинин сыртына эки жолу басыңыз, же чийменин астындагы өтмөктү басыңыз. Баракка кайтуу.

### PLOT

Псевдонимдер: `PRINT`, `PUBLISH`, `EXPORTPDF`; же {{key:Mod+P}}. {{ui:PDF'ке басып чыгаруу}} диалогун ачат. Караңыз [PDFке басып чыгаруу](topic:plot-pdf).

### PLOTSTYLES

Псевдонимдер: `STYLESMANAGER`, `PSTABLES`; же {{ui:PDF'ке басып чыгаруу}} диалогундагы {{ui:Таблицаларды өзгөртүү…}}. {{ui:Басма стилинин таблицалары}} ачылат: ар бир түс кандай басылышы (түс, боз, сыя, сызыктын жоондугу), чийменеде сакталат. Караңыз [Басма стилинин таблицалары](topic:plot-pdf#plot-style-tables).

## Суроо

### CAL

Эсептөөнүн маанисин басып чыгарат, узундук терилгендей каалаган жерде окулат.

- `Expression`: аны терип, мисалы `12'6"+3/4"` же `(24'-0")/3`, жана {{key:Enter}} басыңыз. CadCraft `= 12'-6 3/4"   (150.75 drawing units)` деп басып чыгарат. Караңыз [Терилген маанидеги арифметика](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Псевдонимдер: `DI`; же {{ui:Көрүнүш}} › {{ui:Дагы}} › {{ui:Аралыкты өлчөө}}.

- `Specify first point`, `Specify second point`. Аралыкты, бурчту, Delta X жана Delta Yти басып чыгарат.

### AREA

Псевдонимдер: `AA`; же {{ui:Көрүнүш}} › {{ui:Дагы}} › {{ui:Аянт}}. Аянт жана периметрди басып чыгарат.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Бурчтарды басыңыз же терсеңиз; `Specify next point (Enter closes) [Undo]` тушунда контурду жабуу үчүн {{key:Enter}} басыңыз. `U` акыркы бурчту артка кайтарат.
  - {{key:Enter}} же `O`, андан кийин `Select object`: айлана (анын айланасын басып чыгарат), эллипс, полилиния (ачык болсо аянт үчүн түз сызык менен жабылат, жана анын узундугу басылат) же штриховка (тешиктер алынат).
  - `A` (Add area) жана `S` (Subtract area) жалпы суммасын сактайт: сурам `(ADD mode)` же `(SUBTRACT mode)` менен башталат, ар бир аянт кошулат же алынат, жана ар бирден кийин `Total area = …` басылат. Бул режимдерде `O` {{key:Enter}} басканга чейин объекттерди тандайт, ал эми биринчи суроодогу {{key:Enter}} буйрукту аяктатат.

### MEASUREGEOM

Псевдонимдер: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; ар бир өлчөмдөн кийин кайра сурайт, демейки `eXit`.

- `D`: эки чекит, {{cmd:DIST}} сыяктуу.
- `R`: `Select arc or circle`; радиусту жана диаметрди басып чыгарат.
- `A`: жаа (анын камтылган бурчу), сызык жана андан кийин экинчи сызык (алардын ортосундагы бурч, алыскы учтарына карай), же {{key:Enter}} жана үч чекит (чокусу, андан кийин эки учу).
- `AR`: {{cmd:AREA}} сыяктуу, бир аянт.

### ID

Псевдонимдер жок. `Specify point`; анын X жана Y маанилерин басып чыгарат.

### LIST

Псевдонимдер: `LI`, `LS`. `Select objects`; ар бир объекттин түрүн, катмарын жана негизги өлчөмдөрүн басып чыгарат.

## Көрүнүш, файл жана башка

### ZOOM

Псевдонимдер: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Терезе үчүн эки бурчту басыңыз. `E`, `A` же Enter: бүтүн чийме.
- `P` (Previous, же куралдар тилкесиндеги {{ui:Мурунку}}) мурунку көрүнүшкө кайтарат, өтмөк үчүн 10го чейин көрүнүш; дөңгөлөктүн бир катар кадамдары же бир панорама бир көрүнүш эсептелет.
- `2`, `2x` же `0.5x` сыяктуу сан (же `S`, андан кийин сан) экрандын ортосунан ошол фактор менен чоңойтат же кичирейтет.
- `C` `Specify center point` жана `Enter height or magnification (nX)` сурайт.

### PDFATTACH, PDFIMPORT and the PDF commands

Псевдонимдер: `PDFATT` {{cmd:PDFATTACH}} үчүн, `PDFIM` {{cmd:PDFIMPORT}} үчүн. {{cmd:PDFATTACH}} PDF бетин чийменин астына коёт (файл, бет, киргизүү чекити, масштаб, айлануу); {{cmd:PDFIMPORT}} беттин сызыктарын, ийрилерин, толтууларын жана текстин PDF аты менен аталган катмарлардагы чийменин объекттерине айлантат, чыныгы өлчөмдө, терилген масштабда же эки чекит жана чыныгы аралык боюнча. {{cmd:PDFCLIP}} астындагы жапкычты кыркат, {{cmd:PDFADJUST}} өчүрөт, контраст, монохромдуу кылат же өчүрөт, {{cmd:PDFLAYERS}} PDFтин өз катмарларын которот, ал эми {{cmd:PDF}} чийменин астындагыларга кайра керектүү файлдарды берет. Караңыз [PDF астындагылар](topic:pdf-underlay).

### AUTOCOMPLETE

Псевдоним: `AUTOC`. Чийменин автотолтуруусу: буйрук иштебеген учурда, кулгун көлөкө чийменеңиздин өз үлгүлөрү кийинки эмнени айтарын көрсөтөт. {{cmd:AUTOCOMPLETE}} аны `On` же `Off` (ошондой эле Жөндөөлөр › CadCraft) кылат же азыр эмнени сунуш кылаарын `Show` кылат. **Tab** көлөкөнү бир Артка кайтаруу кадамы катары тартат, **Esc** чийме өзгөрмөйүнчө аны четке кагат. Ал эң жаңы объекттерден үч нерсени табат: эки же андан көп жолу тартылган нерсенин кийинки көчүрмөсүн жуп кадамда (муун, мамыча, тепкичтин тик жана тегиз), полилиния тепкичинин кийинки кадамдарын жана бөлмөнүн же дубалдын чынжырынын жетишпеген капталын. {{cmd:LINE}} же {{cmd:PLINE}} учурунда көлөкө **кийинки чекит**: тепкичтин кийинки кадамы (тик, тегиз, тик…), тик бурчтуктун төртүнчү бурчу, аны жапкан чекит же дагы бир тең кадам. Курсорду ага жакындатып **Tab** басыңыз, чыкылдатканыңыздай; улантыңыз же Enter басыңыз. Бул компьютерде эрежелер менен эсептелет, модель жок.

### AUTOSHEET

Псевдоним: `ASH`. Өз алдынча жайгашкан барактар. {{cmd:AUTOSHEET}} чийменин бөлүктөрүн алат (сиздин аталган көрүнүштөрүңүз, же модельдин өз бөлүктөрү, же бүтүн модель), кагаз өлчөмүн тандайт (же сиз берген), ар бир бөлүккө стандарттуу масштаб берет (бардыгына бир масштаб, же ар бирине чоңу) жана көрүнүштөрдү жаңы барактарда катарлар менен, ар биринин астында аталыш жана титул блогу (аты жана масштаб) менен жайгаштырат. Бир баракка батпагандар өз барагын алат. Бир Артка кайтаруу кадамы. Бул компьютерде эрежелер менен эсептелет, модель жок.

### PHOTOSKETCH

Псевдоним: `PSK`. Фото эскизден чийменеге. Кагаз барактагы колдо тартылган эскиздин фотосун (JPEG, PNG же TIFF) тандаңыз. {{cmd:PHOTOSKETCH}} барактын төрт бурчун табат, перспективаны түзөтөт, сиз атаган кагаз өлчөмүн (`Paper`, же жакын стандарттуусун) жана эскиздин `Scale` (1 : n) алат, андан кийин калем сызыктарын сызыктарга, жааларга жана айланаларга ийрилейт, ар бир калем түсү үчүн катмар (кара, кызыл, көк, жашыл). Эгер кагаздын четин таба албаса, бүтүн фотону барак катары алат жана муну айтат. Жазуулар калып калат. Бир Артка кайтаруу кадамы. Бул компьютерде классикалык сүрөт иштетүү менен, модель жок, эч нерсе жөнөтүлбөйт. Ошондой эле сканерленген чийме буйруктарын караңыз.

### AUTODIM

Псевдоним: `ADIM`. Эрежелер менен автоматтык өлчөө. {{cmd:AUTODIM}} тандалган объекттерди (же бүтүн чийменени) алардын деңгээли жана тик четтери боюнча өлчөйт: сиз тандаган капталдар боюнча өлчөмдөр чынжыры (`Sides`), анын сыртындагы бир жалпы өлчөм, ар бир ачылыштын туурасы (сызыктары бир сызыкта жаткан дубалдардын ортосундагы аралык), тешиктин ар бир өлчөмүнүн диаметри, жана `Grid` менен тор сызыктарынын ортосундагы аралык. Буга чейин бар өлчөм кайра жасалбайт. Бир Артка кайтаруу кадамы. Бул компьютерде эрежелер менен эсептелет.

### GRIDMOVE

Псевдоним: `GM`. Тор сызыгын жылдыруу топтомду жылдырат. {{cmd:GRIDMOVE}} тор сызыгын (аты grid же axis деп аталган катмардагы сызык) жана ага илинген нерселерди жылдырат: сызыкта учу бар дубалдар аны ээрчиш үчүн созулат, анын бойунда жаткан дубалдар бүтүндөй жылат, колонналар (сызыкта блок шилтемелери жана айланалар), анын көпүкчөсү жана белгиси жылат, ал эми чекиттери ага туш келген өлчөмдөр жаңы аралыкты өлчөйт. Эки чекит (сызык аркылуу гана бөлүгү эсептелет) же `Distance` бериңиз. Бир Артка кайтаруу кадамы баарын кайтарат. Бул компьютерде эрежелер менен аткарылат.

### DETAILS

Псевдоним: `DET`. Сизди тапкан деталдар. {{cmd:DETAILS}} фирмаңыздын өз деталдарын сактайт: `Add` бул чийменедеги блокту тизмеге кошот, `List` жана `Remove` аны башкарат, `Find` тандалган нерсе (же акыркы чийгениңиз) үчүн деталдарды катмарлардагы сөздөр, блок аттары, штриховка үлгүлөрү жана эскертмелер боюнча, ар бир деталдын аты жана эскертмелери менен салыштырып ирети менен жайгаштырат; мисалы, "терезенин үстү" деген суроо "терезенин төшөгүнүн жапкычын" табат. Деталды жайгаштыруу үчүн номерин жана чекитин тандаңыз. `Hint` күйгүзүлгөндө (Жөндөөлөр › CadCraft менен да), деталь туш келген нерсени тандасаңыз, статус тилкесинде бир сап пайда болот. Тизме ушул браузерде, бул компьютерде сакталат, жана издөө ошол тизме боюнча. `Share` аны Documents папкаңызга да коёт (`.cadcraft/firm-details.json`, ар бир блоктун чийменеси менен): `Pull` командаңызда бар, сизде жок нерсени кошот, `Push` сизде бар, аларда жок нерсени кошот, `Both` экөөнү тең жасайт, жана эч нерсе эки жактан тең өчпөйт. Documents папкасын алды менен ачыңыз ({{cmd:DOCUMENTS}}); ал папка Team Cloud Plan папкасы болсо, бүтүн команда бир тизмени бөлүшөт. Библиотека панелиндеги деталь нерсесинде **Фирмамдын деталдарына кошуу** баскычы бар, ал аны ошол тизмеге коёт. Бул компьютерде сөздөр менен эсептелет, модель жок.

### SKETCHFIX

Псевдоним: `SKF`. Калем эскиздери так геометрияга айланат. Бир эркин штрихту басып сүйрөңүз (калем, чычкан же манжа), андан кийин Enter. Ар бир штрих сызык, айлана, жаа, тик бурчтук же полилиния катары окулат: дээрлик тегиз жана тик сызыктар так тегиз жана тик кылынат, жабык тегерек штрих айланага айланат, төрт туура бурчтуу бурчу бар жабык штрих тик бурчтукка, штрихтердин учтары тартылып, чийменедеги учтарга тартылат. Бир Артка кайтаруу кадамы. Бул компьютерде эрежелер менен аткарылат, модель жок.

### SCANATTACH and the scanned-drawing commands

Псевдонимдер: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}}да псевдоним жок. Алар сүрөт менен иштейт, ар бири бир Артка кайтаруу кадамы. {{cmd:SCANATTACH}} PNG, JPEG, TIFF (бир бет же бардыгы) же сүрөт болгон PDF бетин киргизет. {{cmd:SCANSCALE}} барактын масштабын эки тандалган чекит жана чыныгы аралык менен коёт. {{cmd:SCANALIGN}} аны эки чекитке жылдырат жана бурат (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} барактын узун сызыктарынын бурчун көрсөтөт жана `Accept` же `Value` бергенден кийин баракты бурат. {{cmd:SCANCLEAN}} аны кара-ак кылат (`Threshold` Auto/Adaptive/Level, `Specks`) жана `Run`. {{cmd:SCANCROP}} терезени калтырат. {{cmd:SCANERASE}} `Rectangle`, `Polygon` же `Lasso` өчүрөт. {{cmd:SCANTRACE}} сызыктарды жана жааларды жаңы катмарга ийрилейт (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) жана тапканын жана растр бойдон калтырганын билдирет. {{cmd:SCANINFO}} баштапкы файлды жана кадамдарды тизмелейт. {{cmd:RASTERSNAP}} сканерленген барактардын сызыктарына илинүүнү On же Off кылат. Караңыз сканерленген чийме жана трассировка темасы.

### REGEN and REGENALL

Псевдонимдер: `RE` {{cmd:REGEN}} үчүн, `REA` {{cmd:REGENALL}} үчүн. Чийменеден экрандагыны кайра түзүү: {{cmd:REGEN}} — сиз караган өтмөк (барактын үстүндө, анын көрүнүш терезелери көрсөткөн модель да), {{cmd:REGENALL}} — ар бир өтмөк, ар бир бөлүнгөн панель жана ар бир ачык чийме. Скрипттелген же өтө чоң өзгөртүүдөн кийин сүрөт эски көрүнсө, же жардамчы чийменени өзгөрткөндө колдонуңуз; чийменин өзүн ээлебейт, ошондуктан кайтаруу керек эмес.

### NAMEDVIEW

Псевдонимдер: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, андан кийин көрүнүштүн аты. `S` экрандагы көрүнүштү, `W` сиз тандаган терезени сактайт, `R` сакталган көрүнүштү көрсөтөт, `D` бирин өчүрөт, `?` ушул өтмөктүн көрүнүштөрүн тизмелейт. Аты бар көрүнүштү сактоо аны алмаштырат; ар бир өзгөртүү бир Артка кайтаруу кадамы. Көрүнүштөр аларды сактаган өтмөккө таандык. DWG жана DXF файлдары аларды сактайт (VIEW таблицасы); барактын көрүнүштөрү биринчи барактын үстүнө кайтат, анткени файл кайсынысы экенин айтпайт.

### UNDO and REDO

Псевдонимдер: `U` {{cmd:UNDO}} үчүн; {{cmd:REDO}}да псевдоним жок. Ошондой эле {{key:Mod+Z}} жана {{key:Mod+Y}}.

### LAYER

Псевдонимдер: `LA`. {{ui:Катмарлар}} панелине алып барат.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` же аты (`?` тизмелейт: Continuous, чийменин өз сызыктары, жана DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE, алардын `2` (жарым) жана `X2` (эки эсе) өлчөмдөрү менен). {{cmd:LWEIGHT}} (`LW`): жаңы объекттер үчүн сызыктын жоондугу мм менен, же `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): чийменин сызык түрүнүн масштабы (Артка кайтарылат). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — статус тилкесиндеги {{ui:LWT}} баскычы менен бирдей. Караңыз [Сызыктын жоондугу жана сызык түрлөрү](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, андан кийин жаңы ат; объекттер же шилтемелер ээрчийт. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` {{key:Enter}} басканга чейин, андан кийин `Select object on target layer or [Name]` жана `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, андан кийин `Y`: катмар жана анда бардык объекттер кетет (0 катмар, DEFPOINTS же учурдагы катмар эмес). Ар бири бир Артка кайтаруу кадамы. Караңыз [Чийменени катмарлар менен уюштуруу](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Катмарлар объекттерди тандоо менен; ошондой эле {{ui:Катмарлар}} панелинин {{ui:Куралдар}} менюсунда. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, андан кийин {{key:Enter}}: калган бардык катмарлар өчүрүлөт. {{cmd:LAYUNISO}} аларды кайра күйгүзөт. {{cmd:LAYOFF}} жана {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (же туңдурулган), кайра-кайра; `U` акыркысын артка кайтарат, {{key:Enter}} аяктатат. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} бардык катмарларды күйгүзөт, {{cmd:LAYTHW}} бардык катмарларды туңдуудан чыгарат. Ар бир буйрук бир Артка кайтаруу кадамы. Караңыз [Катмарлар менен иштөө: объекттерди тандоо](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} бош чийменени баштайт, {{cmd:OPEN}} DWG же DXF ачат, ар бири чийменин үстүндөгү өз өтмөгүндө (өзгөртүлгөн жаңы чийме жаңы өтмөктүн ордуна колдонулат). Сакталбаган өзгөртүүсү бар өтмөктү жапканда, суроо берилет. Караңыз [Экранды бөлүү](topic:split-screen).

{{cmd:SAVE}} (псевдоним `QSAVE`, ошондой эле {{key:Mod+S}}) чийменени анын форматында көчүрмө катары жүктөйт: DWG эгер DWGден ачылса, DXF эгер DXFтен болсо. Жаңы чийме бул браузерде акыркы Башкача сактоодо тандалган форматты колдонот, эгер жок болсо DWG.

{{cmd:SAVEAS}} (ошондой эле {{key:Mod+Shift+S}}) {{ui:Көчүрмөнү башкача сактоо}} диалогун ачат: {{ui:DWG}} (жана анын {{ui:Версия}}сын), {{ui:DXF R12}} же {{ui:DXF 2000}} тандап, андан кийин {{ui:Сактоо}}. Тандоо ушул чийменеге жана бул браузердеги жаңы чийменелерге калат.

{{cmd:DXFOUT}} ар дайым DXF R12 көчүрмөсүн жүктөйт, {{cmd:SAVE}} колдонгон форматты өзгөртпөй.

Караңыз [Файлдар: эмне ачылат, эмне сакталат](topic:files#saving).

### TOUR

Псевдонимдер: `TUTORIAL`. Алты кадамдуу биринчи чийме турун кайра баштайт. Караңыз [Баштоо](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Псевдонимдер: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Караңыз [Жөндөөлөр](topic:settings#toolbar-position).

### COMMANDLINE

Псевдонимдер: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: буйрук сабын кармакка бекитет же калкытат, бир сапка айландырат, көрсөтүлүүчү тарых саптарынын санын сурайт (0дөн 12ге чейин), же тарыхты ачат. Караңыз [Жөндөөлөр](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: чийменин үстүнкү тилкелери мурдагыдай же ыкчам. Караңыз [Жөндөөлөр](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: {{ui:Полярдык}} изилдөө сызыктары тегизделген кадам (0дөн чоңураак, 180ге чейин). Бул браузерде сакталат.

### UNITS

Псевдонимдер: `UN`. Узундуктар кантип жазылат жана терилет.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural жана Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 же 256)`. Калгандары: `Enter number of decimal places (0 to 8)`.

Жаңы өлчөмдөр ага ылайык келет. Бир Артка кайтаруу кадамы. {{ui:Учурдагы жөндөөлөр}} ичиндеги {{ui:Узундук форматы}} жана {{ui:Тактык}} менен бирдей; караңыз [Футтар жана дюймдар](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Псевдонимдер: `GDS`. IC макетин көрүү (GDSII агым файлы): лаборатория тажрыйбасы, көрүү жана өлчөө үчүн гана.

- Файл тандагыч `.gds` файлын алат; бир нече башкы клетка болсо, `Enter the top cell to draw`.
- Ар бир катмар жана маалымат түрү чийменин катмарына айланат (`GDS 1`, `GDS 2/5`), шилтемелер жана массивдер жалпак жайгаштырылат, файлдын колдонуучу бирдигинде (көбүнчө микрометрлер). Бир Артка кайтаруу кадамы. Эч нерсе симуляцияланбайт же текшерилбейт жана файл кайра жазылбайт.

### DIAGRAM

Псевдонимдер: `TEXTDIAGRAM`, `T2D`. Тексттен диаграмма.

- Кутуга текст алынат (же буйрук сабында `;` менен бөлүнгөн бир сап): Mermaid агым диаграммасы, PlantUML компоненттик диаграммасы, D2 же баштан-аяктын тизмеси.
- `Specify the top left corner of the diagram`, андан кийин `Specify the text height`.

Блоктор жана туташтыргычтар `Diagram` катмарында кадимки объекттер, аяктаганда тандалат. Бир Артка кайтаруу кадамы. Караңыз [Тексттен диаграмма тартуу](topic:text-to-diagram).

### OLELIST

Псевдонимдер: `OLES`. DWG алып жүргөн, CadCraft өзү жайгаштыра албаган OLE объекттери.

- Ар бирин тизмелейт: номер, түр, өлчөм, сүрөт сакталганбы.
- `Enter an option [Place/eXit] <eXit>`: Place номерди, сол төмөнкү бурчту жана туурасын сурайт жана сүрөт менен рамка тартат. Бир Артка кайтаруу кадамы; сакталган объект өзгөрбөйт. Караңыз [Сүрөттөр](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Псевдонимдер: `SHX`. Өз SHX шрифттериңиз.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Папка}} папкадагы ар бир `.shx` файлын окуйт (CadCraft Studio; ар бир баштоодо кайра), {{ui:Файлдар}} тандалган файлдарды алат (браузер), {{ui:Тескери (R)}} бир шрифттин тамгаларын акыркысынан баштап жайгаштырат. Жүктөлгөн шрифтти аталган текст стилдери ошол шрифт менен чийилет. Караңыз [Чийменеде өз SHX шрифттериңизди колдонуу](topic:shx-fonts).

### LIMITS

Чийме кандай чоң болушу керек.

- `Specify lower left corner or [ON/OFF] <current>`: чекит, `ON` же `OFF`.
- `Specify upper right corner <current>`.

Тор чектерди толтурат, {{cmd:ZOOM}} All аларды көрсөтөт, жана чектер ON болсо, сырткы чекит четке кагылат (`**Outside limits`). Бир Артка кайтаруу кадамы; DWG жана DXFте сакталат. Караңыз [Чийменин чектерин коюу](topic:drawing-limits).

### AUNITS

Псевдонимдер: `ANGUNITS`. Бурчтар кантип көрсөтүлөт жана терилет.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, же башка экөөнө `Enter precision` (0 градус, 2 минута, 4 секунда, секундга 5тен 8ге чейин ондук).

Бир Артка кайтаруу кадамы; DWG жана DXFте сакталат. {{ui:Учурдагы жөндөөлөр}} ичиндеги {{ui:Бурчтун форматы}} менен бирдей. Караңыз [Багыттар жана бурчтарды терүү жана көрсөтүү](topic:bearings-and-angles).

### APPLOAD

Псевдонимдер: `AP`; же {{ui:Көрүнүш}} › {{ui:Дагы}} › {{ui:Колдонмолорду жүктөө…}}. {{ui:Колдонмолорду жүктөө}} диалогу: `.lsp` программаларын жана `.dcl` диалог файлдарын жүктөө, аларды бошотуу, тарыхтан кайра жүктөө, жана Баштапкы топтом. Программанын `(defun c:NAME …)` буйруктары башка буйруктар сыяктуу иштейт. Караңыз [Колдонмолорду жүктөө](topic:load-applications) жана [LISP программаларын иштетүү](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (же {{ui:Көрүнүш}} › {{ui:Дагы}} › {{ui:Псевдонимдерди түзөтүү…}}) сиздин псевдонимдер файлын (`ALIAS, *COMMAND` саптары) ачат; {{ui:Сактоо}} аны колдонот. {{cmd:REINIT}} аны кайра колдонот. Караңыз [Буйрук псевдонимдерин түзөтүү](topic:command-aliases).

### HELP

Псевдонимдер: `?`. Ар бир буйрукту, анын псевдонимдерин жана бир сап сүрөттөмөсүн буйрук сабынын тарыхында басып чыгарат. Бул жардамды ачпайт: ал үчүн {{key:F1}} басыңыз же {{ui:Жардам}} баскычын чыкылдатыңыз.

## Объекттерди тандоо суроосу

Ар бир `Select objects` суроосунда: объекттерди басыңыз, терезелерди (солдон оңго) жана кесилиштерди (оңдон солго) эки чыкылдатуу менен тартыңыз, же арканды басып сүйрөңүз ({{key:Space}} сүйрөп жатканда: терезе, кесилиш, тосмо), алып салуу үчүн {{key:Shift}}+чыкылдатуу, жана аяктоо үчүн {{key:Enter}} басыңыз. Ошондой эле `ALL` (баары), `L` (акыркы объект), `P` (Previous: акыркы буйрук колдонгон нерсе), `F` (Fence: чекиттер катары сызык кескен объекттер; `U` чекитти артка кайтарат), `W` (Window), `C` (Crossing), `R` (Remove режими: басканлар объекттерди алып салат; суроо `Remove objects` деп окулат) жана `A` (Add again) терсеңиз болот. `?` аларды тизмелейт. Алар суроодо көрсөтүлбөйт. Бири-бирине кирген объекттердин үстүнөн {{key:Tab}} кийинкисин белгилейт; аны тандоо үчүн чыкылдатыңыз. Караңыз [Объекттерди тандоо](topic:select-objects).

### ACCESS

Псевдоним: `AX`. Көзсүз чийүү. {{cmd:ACCESS}} Access'ти күйгүзөт же өчүрөт (`On`, `Off`) жана илиштирүү үндөрүн (`Sound`) жана айтылуучу буйруктарды (`Voice`) которот; алды менен абалын айтат. Access күйгүзүлгөндө, ар бир буйрук жана натыйжа экран окуучуңуз аркылуу айтылат жана чийменин аймагында баскычтоп курсору болот. "Көзсүз чийүү" жардам темасында ачкычтар бар.

### DESCRIBE

Псевдоним: `DESC`. Чийменеде эмне бар экенин айтуу: канча объект, кандай түр, кандай чоң, канча катмар, эмне тандалган. Окуйт гана; эч нерсени өзгөртпөйт.

### WHEREAMI

Псевдоним: `WHERE`. Курсор кайда экенин айтуу, чийменин бирдигинде.

### NEARBY

Курсордун жанында эмне бар экенин айтуу, эң жакыны биринчи, ар бири аралыгы жана жагы менен.

### SAYSEL

Тандалганды айтуу, ар бир объект үчүн бир сүйлөм (сызыктын узундугу, учтары жана бурчу; айланын радиусу жана борбору; текст жазылгандай).

### VOICE

Айтылуучу буйруктарды күйгүзүү же өчүрүү. Алар бул компьютерде таанылат; браузер муну кыла албаган жерде, Жөндөөлөрдө браузердин онлайн кызматын тандамайынча, үн өчүк бойдон калат.
