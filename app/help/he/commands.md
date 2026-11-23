---
title: מדריך פקודות
summary: כל פקודה ביישום השרטוט של CadCraft, עם הכינויים שלה, השאלות שהיא שואלת, האפשרויות וברירות המחדל שלה.
keywords: פקודות, כינויים, רשימת פקודות, שטח, היקף, measuregeom, קו, pline, מעגל, קשת, חיתוך, היסט, dimlinear, בלוק, insert, פריסה, הדפסה, זום, עזרה, copyclip, cutclip, pasteclip, pasteorig, copybase, שכפול, selectall
from: 979ffe3b
---

הקלידו שם פקודה או כינוי ולחצו {{key:Enter}} או {{key:Space}}. אותיות גדולות וקטנות אינן משנות, ו-`_`, `-`, `.` או `'` בתחילת השורה מתעלמים מהם. הקלידו `HELP` (או `?`) כדי להדפיס בהיסטוריית שורת הפקודה רשימה קצרה של כל הפקודות; הקישו {{key:F1}} לעזרה הזאת.

איך לקרוא את ההנחיות: אפשרויות מופיעות בסוגריים מרובעים, ובוחרים באחת על ידי הקלדת האותיות הגדולות שלה (`D` עבור Diameter). ברירת מחדל מופיעה בסוגריים משולשים; הקישו {{key:Enter}} כדי לקבל אותה. במקום שמבקשים נקודה, אפשר ללחוץ או להקליד כל אחד מהפורמטים ב[הזנת קואורדינטות ומרחקים](topic:coordinate-entry). במקום שמבקשים מרחק, אפשר להקליד מספר או ללחוץ על שתי נקודות.

הקשה על {{key:Enter}} במקום שנדרש נקודה או עצם, ואין בו ברירת מחדל, מסיימת את הפקודה. {{key:Esc}} מבטל אותה. כל מה שהפקודה עשתה הוא צעד ביטול אחד.

## ציור

### LINE

כינויים: `L`. קטעים ישרים, כל אחד עצם משלו.

- `Specify first point` (Enter: מתחיל מהנקודה האחרונה שנתתם)
- `Specify next point [Undo]`, חוזרת. אחרי שני קטעים: `[Undo/Close]`.
- `U` מבטל את הקטע האחרון, `C` סוגר לנקודה הראשונה ומסיים. Enter מסיים.

### PLINE

כינויים: `PL`. פוליליין אחד של קטעי קו וקשת.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close אחרי שני קטעים)
- `A` עובר לקשתות: `Specify endpoint of arc [Line/CLose/Undo]`. כל קשת ממשיכה משיקה לקטע שלפניה. `L` חוזר לקווים, `CL` סוגר בקשת.
- Enter מסיים; הפוליליין נשאר פתוח.

### CIRCLE

כינויים: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` שואל `Specify diameter of circle`.
- `2P`: שני קצוות של קוטר. `3P`: שלוש נקודות על המעגל.
- `T` (גם הפקודה `TTR`, ו-{{ui:ציור}} › {{ui:עוד}} › {{ui:מעגל: משיק, משיק, רדיוס}}): `Specify point on object for first tangent of circle`, אחר כך השני, ואז הרדיוס (Enter: האחרון). המעגל נוגע בשני העצמים (קווים, קשתות, מעגלים, קטעי פוליליין, וגם בתוך בלוקים); מבין המעגלים שנוגעים בשניהם, נבחר זה שנוגע הכי קרוב ללחיצות שלכם. "Circle does not exist" כשאין מעגל מתאים.
- `TTT` (או {{ui:ציור}} › {{ui:עוד}} › {{ui:מעגל: משיק, משיק, משיק}}): שלושה עצמים; המעגל שנוגע בכולם, הקרוב ביותר ללחיצות שלכם (שלושה קווים נותנים את המעגל הפנימי או אחד חיצוני, לפי המקום שבו לוחצים).

### ARC

כינויים: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: קשת שעוברת דרך שלוש נקודות.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. הקשת עוברת נגד כיוון השעון מהתחלה לסוף.

### RECTANG

כינויים: `REC`, `RECTANGLE`. פוליליין סגור.

- `Specify first corner point`, `Specify other corner point`. הקלידו `@width,height` לפינה השנייה.

### POLYGON

כינויים: `POL`. מצולע משוכלל כפוליליין סגור.

- `Enter number of sides <4>` (3 עד 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: לחצו או הקלידו נקודה; המרחק קובע את הגודל, והכיוון מסובב את המצולע.

### ELLIPSE

כינויים: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, ואז המרחק לציר השני.
- `I` (`Isocircle`, רק כש-{{cmd:ISODRAFT}} פועל): מרכז, ואז רדיוס או `Diameter`: האליפסה שמעגל נראה בה במישור האיזומטרי הנוכחי.

### HATCH

כינויים: `H`, `BH`, `BHATCH`; או {{ui:קווקוו}} בסרגל הכלים. מדפיס קודם את הדוגמה, קנה המידה והזווית הנוכחיים.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, חוזר (`Undo` אחרי שיש שטח אחד): כל לחיצה מוסיפה את השטח הסגור סביבה, עם הצורות הסגורות שבתוכו כאיים. Enter יוצר קווקוו אחד מכולם.
- `S`: `Select closed objects` (פוליליינים סגורים, מעגלים, אליפסות סגורות).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (מעבר צבעים): המילוי הוא מעבר צבעים במקום דוגמה. ראו {{cmd:GRADIENT}} לשאלות שלו.

ראו [קווקוו ומילוי שטחים](topic:hatch).

### GRADIENT

כינויים: `GD`. ממלא שטח במעבר צבעים של צבע אחד או שניים. הוא שואל קודם את מעבר הצבעים, ואז ממשיך כמו {{cmd:HATCH}} (`Pick internal point`, `S` לעצמים סגורים, {{key:Enter}} לסיום).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, חוזר; בכל פעם הוא מדפיס את מעבר הצבעים כפי שהוא עכשיו.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, או אחד מהם הפוך (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). מספיקות האותיות הראשונות.
- `O`: צבע אחד, ואז הגוון שלו מ-0 עד 1 (0 מכהה לשחור, 0.5 הוא הצבע עצמו, 1 מבהיר ללבן). `TW`: הצבע הראשון והשני. צבע הוא מספר מ-1 עד 255, שלושה מספרים כמו `255,128,0`, או `#rrggbb`.
- `A`: הזווית שבה מעבר הצבעים רץ. `C`: ממורכז Yes או No (No מזיז את אמצע מעבר הצבעים לצד אחד).
- הוא דוחה צבע או סוג שאינו מוכר, וגוון מחוץ ל-0 עד 1.

{{cmd:HATCHEDIT}} `G` ו-{{ui:מאפיינים}} (Gradient) משנים מעבר צבעים אחר כך, או הופכים כל קווקוו למעבר צבעים. מעבר צבעים מצויר על המסך ומודפס. DWG 2004 ומאוחר יותר שומרים אותו כקווקוו מעבר צבעים אמיתי; DXF 2000 ו-DWG 2000 שומרים אותו עבור CadCraft, ותוכנות אחרות רואות מילוי אחיד בצבע הראשון.

### HATCHGENERATEBOUNDARY

כינויים: `HGB`. יוצר מחדש את הגבול מקווקוו שאיבד אותו. `Select hatches` (או בוחרים אותם קודם), ואז `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- כל לולאה של הקווקוו הופכת לפוליליין סגור בשכבה של הקווקוו; הפוליליינים החדשים נשארים נבחרים. קצה מעוקל חוזר כקטעים ישרים קצרים שהקווקוו שומר.
- עם Yes הקווקוו עוקב אחרי הגבול החדש שלו, כמו קווקוו שנוצר עם {{cmd:HATCH}}. צעד ביטול אחד.
- היא אומרת זאת כשלא נבחר קווקוו.

### POINT

כינויים: `PO`; או {{ui:ציור}} › {{ui:עוד}} › {{ui:נקודה}}. עצמי נקודה, אחת לכל לחיצה, עד Enter.

- `Specify a point`

### XLINE

כינויים: `XL`; או {{ui:ציור}} › {{ui:עוד}} › {{ui:קו בנייה}}. קווי בנייה, אינסופיים לשני הכיוונים. ראו [קווי בנייה וקרניים](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, ואז `Specify through point` לכל קו, עד Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` שואל קודם `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, ואז `Specify angle end point` לכל קו.
- `O`: `Specify offset distance [Through] <Through>`, ואז `Select a line object` ו-`Specify side to offset` (או `Specify through point`) לכל קו.

### RAY

ללא כינויים; או {{ui:ציור}} › {{ui:עוד}} › {{ui:קרן}}. `Specify start point`, ואז `Specify through point` לכל קרן, עד Enter.

### TEXT

כינויים: `DT`, `DTEXT`; או {{ui:טקסט}} בסרגל הכלים. טקסט בשורה אחת; כל שורה היא עצם משלה.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, ואז `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, חוזר: כל Enter מתחיל את השורה הבאה מתחת. Enter בשורה ריקה מסיים. {{key:Space}} מקליד רווח כאן.

### DIVIDE

כינויים: `DIV`. {{cmd:DIVIDE}} מציב סימנים על קו, קשת, מעגל, פוליליין, ספליין או אליפסה, שחותכים אותו לחלקים שווים. בוחרים את העצם, ואז נותנים את מספר החלקים (2 עד 32767). לעצם פתוח יש סימן אחד פחות מחלקים; לעצם סגור יש סימן גם בהתחלה. העצם עצמו אינו נחתך. הסימנים הם נקודות; `Block` מבקש במקום זאת בלוק של השרטוט הזה, ואם הוא מסתובב כדי לעקוב אחרי העצם. אורכים לאורך ספליינים ואליפסות נמדדים לאורך קטעי מיתר קצרים. היא דוחה טקסט, קווקווים ועצמים אחרים שאין להם אורך.

### MEASURE

כינויים: `ME`. {{cmd:MEASURE}} מציב סימן בכל אורך נתון לאורך קו, קשת, מעגל, פוליליין, ספליין או אליפסה, ומתחיל לספור מהקצה הקרוב למקום שבו בחרתם (עצם סגור: מההתחלה שלו). נותנים את האורך על ידי הקלדה או על ידי שתי נקודות. לקצה הרחוק של עצם פתוח אין סימן. `Block` מציב בלוק בכל סימן במקום נקודה. היא דוחה אורך של 0, אורך ארוך מהעצם, ואורך שייצר יותר מ-32767 סימנים.

### BOUNDARY

כינויים: `BO`, `BPOLY`. {{cmd:BOUNDARY}} יוצר פוליליין סגור סביב השטח שמכיל את הנקודה שבחרתם, מכל הקווים, הקשתות, המעגלים, הפוליליינים והעקומות שמגבילים אותו על המסך. חלקים שנמצאים על קשת או מעגל חוזרים כקטעי קשת; חלקים של אליפסות וספליינים חוזרים כקטעים ישרים קצרים. עם `Islands` פעיל (הגדרת ההתחלה), כל שטח סגור שבתוכו מקבל גם הוא פוליליין משלו. המשיכו ללחוץ על נקודות; Enter מסיים. העצמים שמגבילים את השטח נשארים כמו שהם. היא אומרת זאת כשאין שטח סגור שמכיל את הנקודה.

### BLEND

{{cmd:BLEND}} מצייר ספליין בין הקצוות של שתי עקומות פתוחות. לחצו על כל עקומה קרוב לקצה שרוצים לחבר. `CONtinuity` בוחר `Tangent` (הספליין יוצא ומגיע לאורך שתי העקומות) או `Smooth` (הוא גם מתעקם באותו אופן שבו הן מתעקמות בקצוות); הבחירה נשמרת לסשן. שתי העקומות לא משתנות. היא דוחה עצמים סגורים ושני קצוות שכבר נפגשים.

### REGION

כינויים: `REG`. {{cmd:REGION}} הופך עצמים סגורים לאזורים: שטחים שטוחים שאפשר לחבר, לחתוך ולמדוד. בוחרים מעגלים, פוליליינים סגורים, אליפסות סגורות או ספליינים סגורים, או קווים, קשתות ופוליליינים פתוחים שסוגרים לולאה קצה לקצה; כל לולאה הופכת לאזור אחד ומחליפה את העצמים שממנה נוצרה. קשתות נשארות קשתות; אליפסות וספליינים הופכים לקטעים ישרים קצרים. מה שאינו סגור ואינו סוגר לולאה נשאר כמו שהוא, וההודעה אומרת כמה. בשרטוט, אזור הוא פוליליין סגור אחד או יותר שמוחזקים יחד כקבוצה ללא שם, כך שלחיצה בוחרת את כל האזור, ועותק הוא אזור משלו; תוכנות אחרות שפותחות את הקובץ רואות פוליליינים סגורים.

כשיש אזורים בשרטוט, {{cmd:UNION}}, {{cmd:SUBTRACT}} ו-{{cmd:INTERSECT}} בלשונית 2D עובדים על אזורים: `UNION` מחבר את האזורים שנבחרו לאחד (אזורים שנפרדים הופכים לאזור אחד של כמה מתארים), `SUBTRACT` שואל את האזורים שממנהם מחסירים ואז את אלה שמוציאים (חור נשאר חלק מהאזור), `INTERSECT` שומר את השטח שכולם חולקים. כל אחד מציג את שטח התוצאה ומהווה צעד ביטול אחד. הם מסרבים כשלא יישאר דבר או כשאין שטח משותף. בלשונית התלת-ממד, ובשרטוט בלי אזורים, אותן הפקודות פועלות על גופים מוצקים כמו קודם.

## שינוי

כינויים: `MT`, `T`; או {{ui:פסקה}} בסרגל הכלים. טקסט פסקה שנשבר לרוחב, מוקלד במקום.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: הרוחב בין שתי הפינות הוא המקום שבו הטקסט נשבר. `H` שואל `Specify height`, `J` שואל `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` שואל `Enter line spacing factor (0.25 to 4)`, `R` שואל `Specify rotation angle`, `W` שואל `Specify width (0 for no wrapping)` ומדלג על הפינה השנייה.
- ואז תיבה נפתחת על השרטוט: מקלידים, {{key:Enter}} לפסקה חדשה, {{key:Mod+Enter}} או לחיצה מחוץ לה לסיום, {{key:Esc}} לביטול. הפס שלה קובע גובה, רווח שורות, רוחב ויישור. ראו [הוספת טקסט ותוויות](topic:text#write-a-note-that-wraps).

### TEXTEDIT

כינויים: `ED`, `DDEDIT`; או לחיצה כפולה על טקסט. `Select a text to edit`, חוזר עד {{key:Enter}}: כל אחד נפתח באותה תיבה. כשמתחילים על טקסט שנבחר או שנלחץ פעמיים, הוא עורך את אותו טקסט ומסיים.

### ERASE

כינויים: `E`, `DELETE`; או {{key:Delete}} עם עצמים נבחרים.

- `Select objects` (מדולג כשכבר נבחרו עצמים)

### MOVE

כינויים: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, מוקלד כ-`dx,dy`.

### COPY

כינויים: `CO`, `CP`. מעתיק כמה פעמים שתתנו נקודות.

`Array` בהנחיית הנקודה השנייה מכין שורה בבת אחת: נותנים את מספר הפריטים (המקורי נספר כאחד), ואז את הנקודה שבה העותק הראשון מונח; האחרים באים באותו מרווח. `Fit` עושה מהנקודה הזאת את מקום העותק האחרון במקום, והאחרים מתפזרים באופן שווה ביניהם.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, חוזר עד Enter. `U` מבטל את העותק האחרון.

### ROTATE

כינויים: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: מעלות, חיובי נגד כיוון השעון; או לחצו נקודה כדי לסובב לכיוונה.

### SCALE

כינויים: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: הקלידו גורם כמו `0.5` או `2`. נקודה שנלחצה נותנת את מרחקה מנקודת הבסיס כגורם.

### MIRROR

כינויים: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

כינויים: `AL`; או {{ui:שינוי}} › {{ui:עוד}} › {{ui:יישור}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- עם שני זוגות: `Scale objects based on alignment points? [Yes/No] <N>`

ראו [יישור עצמים](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (או הבחירה), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` שואל את הנקודה. הבחירה נשארת.

### DISTRIBUTE

- `Select objects` (לפחות שלושה), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. השניים החיצוניים נשארים; הבחירה נשארת.

### ALIGNPANEL

כינויים: `ALP`; או {{ui:שינוי}} › {{ui:עוד}} › {{ui:יישור וחלוקה}}. פותח את החלונית שמפעילה ALIGNTO ו-DISTRIBUTE בלחיצות.

### LASER

כינויים: `LASERCUT`; או {{ui:תצוגה}} › {{ui:עוד}} › {{ui:לייזר…}}. פותח את חלונית הלייזר מעל השרטוט: מה כל שכבה עושה (חיתוך, חריטה, חריטה, מילוי, תמונה), התצוגה המקדימה, קוד G של GRBL לשמירה, וסימון ושליחה דרך Web Serial. ראו [שליחת שרטוט ללייזר](topic:laser-cutting).

### STRETCH

כינויים: `S`; או {{ui:מתיחה}}. `Select objects to stretch`: גוררים חלונות חוצים (או מקלידים `C`) על הקצוות כדי להזיז. `Specify base point [Displacement]`, `Specify second point`. נקודות שבתוך החלונות זזות: קצוות של קווים, קודקודי פוליליין (קטעי קשת שומרים על גובהם), נקודות מידה; מעגלים, אליפסות, טקסט, נקודות ובלוקים זזים כולם כשהמרכז או נקודת ההכנסה שלהם בתוך החלון. בחירה שנעשתה לפני הפקודה שומרת על החלונות החוצים (והלאסו) שיצרו אותה, כך שהם מותחים באותו אופן. בלי חלון, העצמים זזים כולם.

### ARRAY, ARRAYRECT, ARRAYPOLAR

כינויים: `AR`; או {{ui:מערך}}. `Select objects`, ואז `Enter array type [Rectangular/POlar] <Rectangular>` (ב-ARRAY בלבד).

- Rectangular מתחיל ב-4 עמודות × 3 שורות, במרווח של פי 1.5 מגודל העצמים, מוצג כתצוגה מקדימה. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` שואל עמודות ושורות, `S` את המרחקים בין עמודות ובין שורות (שלילי הולך שמאלה או למטה), `COL` ו-`R` כיוון אחד כל אחד.
- Polar שואל `Specify center point of array`, מתחיל ב-6 פריטים לאורך כל ההיקף, ומסובב. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` פריטים, `F` הזווית למילוי (+ נגד כיוון השעון, − עם כיוון השעון), `ROT` Yes או No.
- {{key:Enter}} (eXit) יוצר את העותקים, כעצמים רגילים. צעד ביטול אחד.
- `AS` (ASsociative) עובר בין עותקים רגילים לבין מערך שנשאר ניתן לעריכה: עצם אחד שתשנו אחר כך עם {{cmd:ARRAYEDIT}}, בידיות שלו או במאפיינים. הבחירה נזכרת ({{cmd:ARRAYASSOCIATIVITY}}); היא מתחילה בעותקים רגילים.

### ARRAYPATH

עותקים לאורך עקומה. `Select objects`, ואז `Select path curve`: קו, קשת, מעגל, אליפסה, פוליליין או ספליין (לא אחד מהעצמים שמערכים). הנתיב מתחיל בקצה שקרוב יותר לעצמים, והפריט הראשון הוא העצמים במקומם.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, עם תצוגה מקדימה. `M`: `Divide` מפזר את הפריטים באופן שווה על כל הנתיב, `Measure` מציב אחד כל מרחק נתון לאורכו. `I`: מספר הפריטים (עם Measure, 0 פירושו כמה שנכנסים; מספר מעבר לקצה הנתיב נשאר במה שנכנס). `SP`: המרחק בין פריטים לאורך הנתיב (עובר ל-Measure). `AL`: Yes מסובב כל פריט לעקוב אחרי הנתיב, No משאיר אותם זקופים.
- `AS` כמו ב-{{cmd:ARRAY}}. כשהוא פעיל, המערך שומר עותק משלו של צורת הנתיב: עריכה של עקומת הנתיב אחר כך לא מזיזה את הפריטים.
- היא דוחה נתיב שאינו עקומה, ופריט אחד.

### ARRAYEDIT

משנה מערך שנוצר עם ASsociative. `Select array` (או בוחרים אותו קודם). היא מדפיסה מה המערך עכשיו, ואז שואלת עד {{key:Enter}}:

- Rectangular: `COL` עמודות והמרווח שלהן, `R` שורות והמרווח שלהן, `A` הזווית שהעמודות רצות בה.
- Polar: `I` פריטים, `F` זווית המילוי, `ROT` לסובב פריטים Yes או No.
- Path: `M` Divide או Measure, `I` פריטים, `SP` מרווח, `AL` ליישר עם הנתיב.
- `S` (Source) פותח את העצמים שהמערך חוזר עליהם, לבד, כמו עורך הבלוקים. צייר ונערך שם; {{cmd:ARRAYCLOSE}} שומר או מבטל, וכל פריט עוקב.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, ואז לוחצים על הפריטים להחלפה, {{key:Enter}}. הפריטים האלה מציגים את התחליף במקומם; עצמי התחליף יוצאים מהשרטוט וחיים בתוך המערך. `RES` (RESet) מציג שוב את העצמים המקוריים בכל פריט.
- כל שינוי הוא צעד ביטול אחד. היא דוחה עותקים רגילים, הפניית בלוק רגילה, ומערך על שכבה נעולה.

המספרים האלה נמצאים גם במאפיינים תחת Array, ולמערך יש ידיות: נקודת הבסיס שלו מזיזה אותו, הידית על הפריט השני קובעת את המרווח, הידית שאחרי הפריט האחרון קובעת את הספירה (פולארי: הפריט השני קובע כמה פריטים, והפריט האחרון את זווית המילוי). {{cmd:EXPLODE}} הופך מערך חזרה לעותקים רגילים.

### ARRAYCLOSE

מסיים את {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. היא אומרת זאת כשאין עצמי מקור פתוחים של מערך. {{cmd:BCLOSE}} עושה אותו דבר.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. קובע מה {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ו-{{cmd:ARRAYPATH}} מתחילים בו; האפשרות שלהם `AS` משנה את אותה הגדרה. נזכר בדפדפן הזה.

### OFFSET

כינויים: `O`. קווים, קשתות, מעגלים ופוליליינים.

במקום שבו פוליליין זז החוצה והקטעים הישרים שלו נפרדים בפינה, {{cmd:OFFSETGAPTYPE}} קובע איך הפער נסגר.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, ואז `Specify point on side to offset` (או, עם Through, `Specify through point`), חוזר עד Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: איך {{cmd:OFFSET}} סוגר את הפערים בפינות החיצוניות של פוליליין. `0` מאריך את הקטעים עד שהם נפגשים (הגדרת ההתחלה), `1` מחבר אותם בקשת סביב הפינה הישנה, `2` בחיתוך ישר. פינות פנימיות וקטעי קשת לא מושפעים. נשמר לסשן הזה.

### EXTRIM

{{cmd:EXTRIM}} חותך הכול בצד אחד של קצה. בוחרים את קצה החיתוך (קו, קשת, מעגל, פוליליין, אליפסה, ספליין או קו בנייה), ואז נקודה בצד שרוצים לנקות: כל קו, קשת, מעגל, פוליליין וקו בנייה שחוצה את הקצה מאבד את החלק שלו בצד הזה, מהקצה ואילך. בזמן שבוחרים את הצד, החלקים שייעלמו עוקבים אחרי הסמן. לקצה סגור הצדדים הם פנים וחוץ. עצמים שרק נוגעים בקצה, וטקסט, קווקווים, ספליינים ואליפסות שחוצים אותו, נשארים כמו שהם. צעד ביטול אחד.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: איך {{cmd:TRIM}} ו-{{cmd:EXTEND}} מתחילים. `1` מהיר: כל עצם הוא קצה חיתוך או גבול. `0` רגיל: הם שואלים קודם את הקצוות. גם `(setvar "TRIMEXTENDMODE" 0)` ב-LISP.

### TRIM

כינויים: `TR`. מדפיס קודם `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. במצב מהיר כל עצם נראה הוא קצה חיתוך, ועצם שאף דבר אינו חוצה אותו נמחק; במצב רגיל היא שואלת קודם `Select cutting edges (Enter = every object)` וחותכת רק בהם.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, חוזר: לוחצים על החלק להסרה (הוא מופיע אפור ומקווקו כשהסמן נח עליו), גוררים נתיב דרך כמה חלקים (כולם יוצאים בצעד אחד), או לוחצים על שני מקומות ריקים לגדר ביניהם. {{key:Shift}} מאריך במקום. `T` בוחר קצוות חיתוך (במצב רגיל), `F` שואל נקודות גדר, `C` שני פינות חלון (חלקים שנמצאים בחלקם בתוכו נכללים), `O` שואל `Enter a trim mode option [Quick/Standard]`, `E` שואל `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` מוחק עצמים שתבחרו, `U` מבטל את הבחירה או הגרירה האחרונה. Enter מסיים. ראו [חיתוך והארכה](topic:trim-and-extend).

- לחיצה על קווקוו חותכת את הקווקוו: קצוות החיתוך מפצלים את השטח המקווקו, והחלק שלחצתם עליו מוסר (לא נשאר קו מתאר מצויר במקום שבו היה). הקווקוו שומר על הדוגמה או מעבר הצבעים שלו; קווקוו שהיה מקושר לגבולו אינו מקושר אחר כך, כי הוא כבר אינו ממלא אותו. ההודעה אומרת זאת כשאף קצה חיתוך אינו מפצל את הקווקוו שם, כשהלחיצה מחוץ לקווקוו, וכשלא יישאר דבר (השתמשו אז ב-{{cmd:ERASE}}). גרירת נתיב או גדר אינה חותכת קווקוו.

### EXTEND

כינויים: `EX`. זהה ל-TRIM בכיוון ההפוך: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. לחיצה מאריכה את הקצה הקרוב אליה עד הגבול הבא; נתיב או גדר שנגררו מאריכים כל עצם שהם חוצים; {{key:Shift}} חותך. `B` בוחר קצוות גבול (במצב רגיל). מצב וקצה משותפים עם TRIM.

### LINKVIEWS

כינויים: `SYNCVIEWS`; או {{ui:תצוגה}} › {{ui:עוד}} › {{ui:קישור התצוגות של החלונות}}, או סמל הקישור בלשוניות השרטוט. `Link the panes' views [ON/OFF]` (Enter עובר למצב השני): כשהוא פעיל, הזזה או זום בחלון הפעיל מזיזים כל חלון שמציג את אותו סוג מרחב. ראו [פיצול המסך](topic:split-screen).

### OPENIN3D

ללא כינויים; או {{ui:תצוגה}} › {{ui:עוד}} › {{ui:פתיחה ב-ModelCraft}} כשאפליקציית המידול התלת-ממדי מקבלת שרטוט שהועבר אליה. פותחת אותו שם בלשונית חדשה, כ-DWG (שום דבר לא מועלה). אם הדפדפן חוסם את הלשונית, ההודעה אומרת זאת.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: מה לחיצה וגרירה על מקום ריק מציירים. זהה להגדרות › CadCraft › {{ui:גרירה לבחירה}}. ראו [בחירה בלאסו](topic:lasso-selection).

### FILLET

כינויים: `F`. קווים, קשתות, מעגלים ופוליליינים. מדפיס קודם `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` שואל `Specify fillet radius <last>`. `T` שואל `Enter Trim mode option [Trim/No trim]`: עם No trim העצמים נשארים כמו שהם, ורק הקשת מתווספת.
  - `M` משאיר את הפקודה פעילה לפינות נוספות עד {{key:Enter}}; `U` מבטל את הפינה האחרונה בלי לצאת מהפקודה.
  - `P` שואל `Select 2D polyline [Radius]` ומעגל כל פינה שבה שני קטעים ישרים נפגשים. עיגולי פינה שכבר יש לו מוחלפים ברדיוס החדש; רדיוס 0 מסיר אותם. פינות שהצלעות שלהן קצרות מדי לרדיוס נשארות ונספרות.
- `Select second object or shift-select to apply corner [Radius]`. החזיקו {{key:Shift}} בזמן הלחיצה לפינה חדה, לא משנה הרדיוס.

לחצו על כל עצם על החלק שרוצים לשמור. שני קווים שלא נפגשים מוארכים. שני קווים מקבילים מקבלים חצי מעגל על פני הפער, בקצה הקו הראשון הקרוב ללחיצה שלכם. מעגל לעולם אינו נחתך. שני קטעים של אותו פוליליין שכנים מקבלים את הקשת בתוך הפוליליין; פוליליין ועצם אחר עובדים כשהחיתוך נוחת על הקטע הראשון או האחרון של הפוליליין.

### CHAMFER

כינויים: `CHA`. קווים והקטעים הישרים של פוליליינים. מדפיס קודם את המרחקים (או האורך והזווית) הנוכחיים.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` שואל `Specify first chamfer distance <last>` ו-`Specify second chamfer distance <the first>`: הראשון נחתך מהקו הראשון שבחרתם, השני מהקו האחר.
  - `A` שואל `Specify chamfer length on the first line` ו-`Specify chamfer angle from the first line`.
  - `E` (mEthod) בוחר איזה משני אלה הפיזור הבא משתמש בו. `T`, `M`, `U` ו-`P` עובדים כמו ב-{{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+לחיצה יוצרת פינה חדה.

מרחק ארוך מהקו נדחה (`Distance is too large.`).

### BREAK ו-BREAKATPOINT

כינויים: `BR`. `Select object` (איפה שלוחצים זו הנקודה הראשונה), `Specify second break point [First point]`; `F` שואל `Specify first break point` ו-`Specify second break point`. החלק שביניהם נעלם; במעגל, נגד כיוון השעון מהנקודה הראשונה. BREAKATPOINT שואל `Specify break point` ומפצל את העצם לשניים שם (לא מעגל).

### LENGTHEN

כינויים: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: לחיצה מדפיסה `Current length` (ואת הזווית הכלולה של קשת) ושואלת שוב. `DE` שואל `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` מאפשר גרירה. ואז `Select an object to change [Undo]`, חוזר: הקצה הקרוב ללחיצה זז. קווים, קשתות ופוליליינים פתוחים.

### JOIN

כינויים: `J`. `Select objects to join`. קווים, קשתות ופוליליינים פתוחים שנפגשים קצה לקצה הופכים לפוליליינים (סגורים כשהשרשרת נסגרת); קווים על קו אחד הופכים לקו אחד; קשתות של מעגל אחד הופכות לקשת אחת או למעגל. ההיסטוריה אומרת כמה עצמים חוברו וכמה לא.

### MATCHPROP

כינויים: `MA`, `PAINTER`. `Select source object`, ואז `Select destination objects [Settings]` ו-{{key:Enter}}. מעתיק שכבה וצבע, ובין עצמים מאותו סוג גם גובה ורוחב טקסט, גודלי מידה או דוגמת קווקוו. `S` שואל `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, חוזר עד {{key:Enter}}; הבחירה נזכרת לסשן.

### EXPLODE

כינויים: `X`. פוליליינים הופכים לקווים וקשתות, הפניות בלוק הופכות לעצמים שלהן, מידות הופכות לקווים, לחצי חץ ולטקסט. מערך שנשאר ניתן לעריכה ({{cmd:ARRAYEDIT}}) הופך לעותקים רגילים של העצמים שלו.

- `Select objects`

### GROUP

כינויים: `G`. {{cmd:GROUP}} נותן לעצמים שנבחרו שם משותף. בוחרים את העצמים, ואז מקלידים שם (בלי רווחים; `?` מציג את הקבוצות; Enter יוצר קבוצה בלי שם) ואחר כך, לקבוצה בעלת שם, תיאור אופציונלי. מכאן ואילך לחיצה על אחד מהם, או חלון שתופס אחד, בוחר את כולם, כך שהם זזים, מועתקים ונמחקים יחד; כל עצם הוא עדיין עצם משלו. עצם יכול להיות בכמה קבוצות. עותק של קבוצה שלמה הוא קבוצה חדשה בלי שם; עותק של חבר אחד בלבד מצטרף לקבוצה. קבוצות שייכות למרחב שבו נוצרו (המודל או גיליון). הן נשמרות כשמשמרים כ-DWG או DXF ופותחים את הקובץ שוב ב-CadCraft; קבצי DXF 2000 נושאים אותן גם כעצמי קבוצה לתוכנות אחרות, וקבוצות שנוצרו בתוכנה אחרת נקראות כשפותחים DXF או DWG.

### UNGROUP

{{cmd:UNGROUP}} מפרק קבוצות: בוחרים עצמים מהקבוצות (כל קבוצה שהם שייכים אליה מתפרקת), או מקלידים `Name` ואת שם הקבוצה. העצמים נשארים בשרטוט. צעד ביטול אחד מחזיר את הקבוצות.

### GROUPEDIT

{{cmd:GROUPEDIT}} משנה קבוצה אחת. לוחצים על אחד מהעצמים שלה, או מקלידים `Name` ואת שמה; קבוצה שכבר נבחרה נלקחת כמו שהיא. ואז: `Add` עצמים (נבחרים אחד אחד, לא קבוצה אחרי קבוצה), `Remove` עצמים, `REName` את הקבוצה, לשנות את `Description` שלה, או להגדיר `Selectable` (האם לחיצה על עצם אחד בוחרת את הקבוצה כולה). `eXit` או Enter מסיים. קבוצה בלי עצמים נעלמת.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: עם `1` (הגדרת ההתחלה) לחיצה או חלון על עצם בקבוצה בוחרים את כל הקבוצה; עם `0` עצמים בודדים, כך שאפשר לערוך חבר אחד. נשמר לסשן הזה.

## לוח גזירים

לוח הגזירים של CadCraft עצמו: הוא עובד בתוך שרטוט, בין שרטוטים ובין לשוניות CadCraft בדפדפן הזה. ראו [העתקה, הדבקה ושכפול](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, או {{ui:העתקה}} בקבוצה {{ui:עריכה}}. מעתיק עצמים ללוח הגזירים, יחד עם הבלוקים והשכבות שהם משתמשים בהם. העצמים נשארים נבחרים.

- `Select objects to copy` (מדולג כשכבר נבחרו עצמים)

### CUTCLIP

{{key:Mod+X}}, או {{ui:גזירה}} בתפריט {{ui:עוד}}. מעתיק עצמים ללוח הגזירים, ואז מוחק אותם (צעד ביטול אחד).

- `Select objects to cut` (מדולג כשכבר נבחרו עצמים)

### COPYBASE

מעתיק עצמים ללוח הגזירים עם נקודת בסיס שאתם בוחרים; הדבקה מציבה את הנקודה הזאת.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, או {{ui:הדבקה}} בקבוצה {{ui:עריכה}}. העותק עוקב אחרי הסמן, תלוי מהפינה התחתונה השמאלית של המלבן החוסם שלו (או מהמרכז, או מנקודת `COPYBASE`; ראו [הגדרות CadCraft](topic:settings)).

- `Specify insertion point`

העצמים שהודבקו נבחרים. בלוק שכבר קיים בשרטוט תחת אותו שם שומר על ההגדרה של השרטוט הזה.

כשאזור שהועתק ב-MarkupCraft חדש יותר ממה ש-CadCraft העתיק (ופחות משש שעות), {{key:Mod+V}} ו-`PASTECLIP` מדביקים את האזור במקום זאת: ראו `PASTEAREA`.

### PASTEAREA

כינויים: `PAREA`. {{ui:הדבקת אזור מועתק}} בתפריט {{ui:עוד}}. מדביק אזור שהועתק עם {{ui:העתקת אזור}} ב-MarkupCraft כתמונה בגודלו האמיתי. ראו [תמונות בשרטוט](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (רק כשלגיליון לא היה קנה מידה של שרטוט): מספר, {{key:Enter}} לגודל הנייר, או `P`, ואז `First point on the pasted area`, `Second point on the pasted area` והמרחק האמיתי ביניהן.

### PASTEORIG

{{key:Mod+Shift+V}}, או {{ui:הדבקה במקום}} בתפריט {{ui:עוד}}. מדביק בקואורדינטות שממנו העצמים הועתקו. לא שואל דבר.

### DUPLICATE

כינויים: `DUP`. {{key:Mod+D}}, או {{ui:שכפול והזזה}} בתפריט {{ui:עוד}}. עותק של העצמים זז עם הסמן מהמקום שבו הם נמצאים; {{key:Esc}} לא משאיר דבר. אינו משתמש בלוח הגזירים.

- `Select objects to duplicate` (מדולג כשכבר נבחרו עצמים)
- `Specify where the copy goes (Esc leaves nothing)`: לחיצה, הקלדת נקודה, `@dx,dy` (מהמקום שבו היה הסמן), או מרחק לכיוון הסמן.

### SELECT

שואל `Select objects` (עם כל האפשרויות למטה) ומשאיר את מה שבחרתם נבחר, לפקודה הבאה או ל-`P` מאוחר יותר.

### QSELECT

כינויים: `QS`. בדפדפן, תיבת הדו-שיח {{ui:בחירה מהירה}} (ראו [בחירת עצמים](topic:select-objects#select-by-a-rule-quick-select)). בלעדיה, שורת הפקודה שואלת `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` ו-`Enter value`. ההתאמות הופכות לבחירה.

### SELECTSIMILAR

כינויים: `SIM`. `Select objects [SEttings]` (או הבחירה הנוכחית): בוחר כל עצם מאותו סוג, עם אותה שכבה וצבע (ושם בלוק, דוגמת קווקוו). `SE` שואל `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, חוזר עד {{key:Enter}}.

### FIND

ללא כינויים; או {{ui:עריכה}} › {{ui:עוד}} › {{ui:חיפוש והחלפה}}. בדפדפן, תיבת הדו-שיח {{ui:חיפוש והחלפה}} (ראו [הוספת טקסט ותוויות](topic:text#find-and-replace-words)). בלעדיה: `Enter text to find`, ואז `Enter replacement text (Enter: select what is found)`. מחפש בטקסט, בערכי תכונות ובטקסט מידה, בלשונית הפתוחה או בבחירה.

### SELECTALL ו-DESELECT

`SELECTALL` (כינוי `AI_SELALL`, {{key:Mod+A}}) בוחר כל עצם שאפשר לערוך בלשונית הפתוחה. `DESELECT` (כינויים `AI_DESELECT`, `SELECTNONE`; או {{key:Esc}}) מנקה את הבחירה.

## מידות

### DIMLINEAR

כינויים: `DLI`, `DIMLIN`. מרחק אופקי או אנכי.

- `Specify first extension line origin [Select object]` (Enter או `S`: `Select object to dimension`, ואז לוחצים על קטע של קו, קשת, מעגל או פוליליין)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` שואל טקסט (`<>` הוא הערך הנמדד), `H` ו-`V` קובעים את הכיוון, `R` שואל `Specify angle of dimension line <0>`.

### DIMALIGNED

כינויים: `DAL`, `DIMALI`. המרחק האמיתי בין שתי נקודות.

- נקודות המוצא כמו ב-{{cmd:DIMLINEAR}}, ואז `Specify dimension line location [Text]`.

### DIMANGULAR

כינויים: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- קשת: הזווית שלה. מעגל: `Specify second angle endpoint`. קו: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: לחצו בתוך הזווית כדי למדוד.

### DIMRADIUS ו-DIMDIAMETER

כינויים: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, ואז `Specify dimension line location [Text]`.

### DIMCONTINUE

כינויים: `DCO`, `DIMCONT`. ממשיך מהמידה הליניארית או המיושרת האחרונה שנעשתה (או שואל `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, חוזר עד Enter.

### DIMBASELINE

כינויים: `DBA`, `DIMBASE`. כמו {{cmd:DIMCONTINUE}}, אבל כל מידה מתחילה מנקודת המוצא הראשונה ומוערמת רחוק יותר החוצה.

### DIMORDINATE

כינויים: `DOR`, `DIMORD`. `Specify feature location`, ואז `Specify leader endpoint [Xdatum/Ydatum/Text]`. כותב כמה רחוק המאפיין מראשית ה-UCS לאורך X או לאורך Y, על מובילה: מובילה שעולה או יורדת בעיקר נקראת X, מובילה שרצה הצידה נקראת Y; `Xdatum` ו-`Ydatum` קובעים איזו. קבעו את הראשית קודם עם {{cmd:UCS}} (בלי אחת, היא נקודת 0,0 של השרטוט). ידיות מזיזות את המאפיין, את הראשית ואת קצה המובילה, והערך עוקב. נשמר כמידת ordinate אמיתית ב-DWG וב-DXF. דוחה קצה מובילה על המאפיין עצמו.

### DIMARC

כינויים: `DAR`. `Select arc or polyline arc segment`, ואז `Specify arc length dimension location [Text]`. מודד לאורך הקשת (לא המיתר) וכותב את סמל הקשת לפני הערך. דוחה מעגל שלם, קו או קטע ישר של פוליליין. DWG שומר אותה כמידת אורך קשת; DXF שומר אותה כמידה זוויתית עם האורך כטקסט שלה, ו-CadCraft פותח אותה שוב כמידת אורך קשת.

### DIMJOGGED

כינויים: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. מידת רדיוס לעקומה שהמרכז שלה רחוק או מחוץ לגיליון: קו המידה מתחיל בנקודה שנתתם במקום במרכז, עם קפיצה בתוכו, ועדיין כותב את הרדיוס האמיתי. DWG שומר אותה כמידת רדיוס עם קפיצה; DXF שומר אותה כמידת רדיוס, ו-CadCraft פותח אותה שוב עם קפיצה.

### DIMJOGLINE

כינויים: `DJL`. `Select dimension to add jog [Remove]`, ואז `Specify jog location (or press Enter)`. מציב סמל קפיצה על הקו של מידה ליניארית או מיושרת, כדי להראות שהמרחק אינו מצויר בקנה מידה; הערך לא משתנה. `Remove` מסיר אותו. דוחה סוגים אחרים של מידות.

### QDIM

ללא כינויים. `Select geometry to dimension`, ואז `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. מודד כמה עצמים בצעד אחד, מקצוות של קווים וקטעי פוליליין, ממרכזים של מעגלים וקשתות, מנקודות ומהפניות בלוק. מיקום מעל או מתחת לעצמים מודד לרוחב, מיקום לידם מודד למעלה. `Continuous` משרשר את הנקודות, `Baseline` מודד הכול מהראשונה, `Staggered` מקנן זוגות מהאמצע החוצה, `Ordinate` נותן לכל נקודה את המרחק שלה מנקודת הייחוס (`datumPoint` בוחר חדשה), `Radius` ו-`Diameter` מודדים כל מעגל וקשת שנבחרו. המצב נזכר. כל מה שהיא יוצרת הוא צעד ביטול אחד. היא מודיעה כשיש פחות משתי נקודות, או אין קשתות או מעגלים עבור Radius ו-Diameter.

### DIMBREAK

כינויים: `DBREAK`. `Select dimensions to add or remove breaks`, ואז `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` משאיר רווח בקווי המידה והעזר בכל מקום שעצם אחר חוצה אותם, ומחשב את הרווחים מחדש כשהעצמים האלה או המידה זזים. `Manual` (מידה אחת) שואל שתי נקודות ומשאיר רווח ביניהן. `Remove` מסיר כל רווח. הרווח הוא פי 1.5 מגובה הטקסט של המידה.

### DIMSPACE

ללא כינויים. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. מזיז את קווי המידה של מידות ליניאריות ומיושרות מקבילות (או זוויתיות סביב אותו קודקוד) כך שיעמדו במרחק זהה זה מזה, נמדד מהמידה הבסיסית, כל אחת בצד שבו היא נמצאת. `0` מיישר אותן עם הבסיס; `Auto` הוא פי שניים מגובה הטקסט של המידה הבסיסית. מידות שאינן מקבילות לבסיס נשארות כמו שהן.

### DIMINSPECT

ללא כינויים. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. מצייר מסגרת סביב הערך עם תווית לפניו ושיעור הבדיקה אחריו. `remove` מסיר את המסגרת. טקסט הסבילות נשאר עם הערך.

### DIMOVERRIDE

כינויים: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, שוב עד Enter, ואז `Select dimensions`. משנה את ההגדרות האלה רק במידות שנבחרו; סגנון המידה אינו משתנה. לוקח את המשתנים שהם מספר או מתג (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` מחזיר את המידות שנבחרו לסגנון שלהן. דוחה שם שאינו משתנה כזה וערך שאינו יכול לקבל.

### DIMREASSOCIATE

כינויים: `DRE`, `DIMREASSOC`. `Select dimensions`, ואז לכל אחת את נקודות המוצא של קווי העזר שלה (`Specify first extension line origin on an object`: נעיצה לקצה או לאמצע של קו, לפינה של פוליליין, למרכז; Enter משאיר את הנקודה חופשית), או למידת רדיוס, קוטר, רדיוס עם קפיצה או אורך קשת `Select arc or circle`. המידה נקשרת אז לעצמים האלה: כשהם זזים או משתנים בגודל, היא עוקבת באותו צעד ביטול ונמדדת מחדש. הזזה ידנית של נקודה קשורה, או מחיקת העצם, מסיימת את הקשר. הקשר נשמר ב-DWG וב-DXF 2000 כנתוני CadCraft עצמו; תוכנות אחרות רואות מידה רגילה.

### DIMDISASSOCIATE

כינויים: `DDA`, `DIMDISASSOC`. `Select dimensions`. משחרר אותן מהעצמים שהן קשורות אליהם; שום דבר לא זז.

### CENTERMARK

כינויים: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, שוב עד Enter. מצייר צלב במרכז וארבעה קווי מרכז עד מעבר לעקומה במעט (סוג הקו CENTER), כקווים רגילים בשכבה הנוכחית; בגודל לפי גודל החץ וקנה המידה הכללי של הגדרות המידה הנוכחיות, ומסובב עם ה-UCS. הם אינם עוקבים אחרי המעגל אם הוא זז.

### CENTERLINE

כינויים: `CL`. `Select first line`, `Select second line`. מצייר קו באמצע בין שני קווים (לאורך חוצה הזווית כשהם נפגשים), מעט ארוך מהם, בסוג הקו CENTER. קו רגיל: הוא אינו עוקב אחרי שני הקווים.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

ללא כינויים. כל אחת שואלת `Enter new value for … <current>` וקובעת את הגודל הזה למידות **חדשות**: קנה מידה כללי, גובה טקסט, גודל חץ, ספרות עשרוניות (עד 8), רווח סביב הטקסט, הארכה מעבר לקו המידה, היסט מהנקודה. ראו [קביעת גדלי מידות](topic:dimension-settings).

### DIMLUNIT

הגדרת מידה: הפורמט של מידות חדשות בלבד (1 מדעי, 2 עשרוני, 3 הנדסי, 4 אדריכלי, 5 שבר).

### DIMSTYLE ו-DIMSTYLE עם מקף

כינויים: `DST`, `DDIM`, `D`. מנהל סגנוני המידה: {{ui:קביעה כנוכחית}}, {{ui:חדש…}}, {{ui:שינוי…}}, {{ui:שינוי שם…}}, {{ui:מחיקה}}, {{ui:השוואה…}}, {{ui:החלה על הבחירה}}. `-DIMSTYLE` בשורת הפקודה: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. ראו [קביעת גדלי מידות](topic:dimension-settings#named-dimension-styles).

### DIMEDIT ו-DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, ואז המידות (או אלה שכבר נבחרו). New שואל את הטקסט (`<>` = המדידה); Rotate שואל זווית (0 מחזיר את הטקסט); Oblique שואל את הזווית של קווי העזר מציר X (Enter = ללא; למידות ליניאריות ומיושרות בלבד). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. ראו [קביעת גדלי מידות](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

כינויים: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, או עם מידות נבחרות `Units in the text of the selected dimensions`. כותבת את האורך הנמדד ביחידה הזאת עם היחידה אחריו (DIMLFAC וסיומת DIMPOST); `D` חוזר ליחידות השרטוט. ראו [מידות במ"מ, ס"מ, מ' או ק"מ](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

כינויים: `RC`. מדפיס `Arc length: … Type: …`, ואז `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular שואל `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand עוקב אחרי הסמן עד לחיצה או {{key:Enter}}; `O` שואל `Select object` ו-`Reverse direction? [Yes/No] <N>` והופך את העצם לענן. `A` שואל `Specify the length of each arc`. `R`, `P` ו-`F` בוחרים את הסוג לענן הבא. התוצאה היא פוליליין סגור של קשתות.

### MLEADER

כינויים: `MLD`; או {{ui:קו הפניה}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, ואז הטקסט בתיבה במקום (או, בלעדיה, `Enter text (an empty line ends)`). `Block` שואל שם בלוק קודם, והמובילה המרובה מציגה את הבלוק במקום טקסט. קווי מובילה נוספים: {{cmd:MLEADEREDIT}}. נשמר כמובילה מרובה אמיתית ב-DWG; DXF שומר את הקווים, החץ והטקסט שהיא מצייר.

### MLEADEREDIT

כינויים: `MLE`. `Select a multileader`, ואז `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: כל נקודה מוסיפה קו מובילה מחץ חדש לאותו נחיתה, עד Enter. `Remove leaders` מסיר אז את קו המובילה שלחצתם עליו (מובילה מרובה שומרת לפחות אחד). `Block content` שואל שם בלוק ומציג אותו במקום הטקסט (התכונות שלו נשאלות); `Text content` מחזיר טקסט. לכל קו מובילה יש ידית משלו. DWG שומר כל קו מובילה והבלוק במובילה מרובה אחת.

### MLEADERALIGN

כינויים: `MLA`. `Select multileaders`, ואז `Select multileader to align to [Distribute/Spacing/Use current spacing]` ו-`Specify direction`. מזיז את הנחיתות של המובילות האחרות (והטקסט או הבלוק שלהן) אל הקו שעובר דרך הנחיתה של זו שבחרתם, בכיוון הזה; ראשי החצים נשארים כמו שהם מצביעים. `Spacing` מעמיד אותן גם במרחק שווה זו מזו; `Distribute` שואל שתי נקודות ומפזר אותן באופן שווה ביניהן. צריך לפחות שתי מובילות מרובות.

### MLEADERCOLLECT

כינויים: `MLC`. `Select multileaders`, ואז `Specify collected multileader location [Vertical/Horizontal]` (Enter משאיר את המקום של הראשונה). יוצר מובילה מרובה אחת מכמה: תוכן הבלוקים נכנס לבלוק חדש שמחזיק את כולם זה לצד זה או זה מתחת לזה; תוכן טקסט הופך להערה אחת עם שורה לכל אחד. הראשונה שומרת על קווי המובילה שלה; האחרות נמחקות. דוחה ערבוב של תוכן טקסט ותוכן בלוק.

### TABLE

כינויים: `TB`; או {{ui:הערות}} › {{ui:עוד}} › {{ui:טבלה}}. יוצר טבלה: עצם אחד שמזיזים, מעתיקים, מסובבים, משנים קנה מידה ומדפיסים כמו כל עצם אחר, עם התאים שלו שמורים כנתונים.

- `Number of data rows or [Paste/File/Style] <3>`, ואז `Number of columns <3>`, `Text height` ו-`Top left corner of the table`. לטבלה יש שורת כותרת (תא ממוזג אחד) ושורת כותרות-עליונות מעל שורות הנתונים.
- `P`: טבלה מתאי גיליון אלקטרוני בלוח הגזירים (טקסט עם טאב בין התאים). לחיצה על {{key:Ctrl+V}} עם תאים כאלה בלוח הגזירים עושה את אותו דבר, אלא אם העותק של CadCraft עצמו חדש יותר (או ש-CadCraft אינו יכול לדעת: אז הוא מדביק את העותק שלו ואומר זאת). `F`: טבלה מקובץ `.csv` או מקובץ מופרד בטאב. השורה הראשונה הופכת לשורת הכותרות; רוחבי העמודות מתאימים לטקסט.
- `S`: בוחר את סגנון הטבלה לטבלה הזאת (ראו {{cmd:TABLESTYLE}}).
- היא דוחה מספר שורות או עמודות שאינו מספר שלם, ויותר תאים ממה שטבלה מחזיקה (2,000 שורות, 200 עמודות, 40,000 תאים).
- {{cmd:EXPLODE}} הופך טבלה לקווים וטקסט. כשנשמרת כ-DWG, טבלה היא עצם טבלה אמיתי שתוכנות אחרות יכולות לערוך; כשנשמרת כ-DXF היא בלוק שמצייר אותה, ו-CadCraft פותח אותה שוב כטבלה.

### TABLEDIT

כינויים: `TABLEEDIT`, `TABEDIT`; או לחיצה כפולה על תא. עורך טבלה.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. לוחצים על תא, או עם טבלה נבחרת מקלידים את שמו (`B3`: עמודה B, שורה 3; שורת הכותרת היא שורה 1). בדפדפן נפתחת תיבה מעל התא: {{key:Enter}} שומר את הטקסט, {{key:Tab}} עובר לתא הבא, {{key:Alt+Enter}} מתחיל שורה חדשה, {{key:Esc}} משאיר את התא כמו שהיה.
- טקסט שמתחיל ב-`=` הוא נוסחה: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, עם `+ - * / ^`, סוגריים ופונקציות כמו `sqrt` ו-`round`. התא מציג את הערך; נוסחה שמציינת את התא שלה, תא מחוץ לטבלה או תא בלי מספר מציגה `####` ושורת הפקודה אומרת למה.
- `R` / `C`: `Insert` או `Delete` שורות או עמודות בתא שנבחר (כמה, ולמעלה או למטה, שמאלה או ימינה). נוסחאות עוקבות אחרי התאים שהן מציינות.
- `S`: הרוחב של העמודה והגובה של השורה. שורה לעולם אינה נמוכה ממה שהטקסט שלה צריך. לטבלה נבחרת יש גם ידית על כל קצה של עמודה ושל שורה.
- `M`: ממזג מתא שנבחר אחד לתא אחר; `U`: מבטל מיזוג. `A`: יישור (`TL` שמאל-עליון … `MC` אמצע-מרכז … `BR` ימין-תחתון). `H`: גובה הטקסט של התא הזה (0 = של הסגנון). `K`: הופך את השורה לכותרת, לכותרת-עליונה או לשורת נתונים. `CL`: מרוקן את התא.
- היא דוחה טבלה על שכבה נעולה, מחיקת כל השורות או העמודות, ומיזוג שהיה חותך תא ממוזג אחר לשניים.

### TABLESTYLE

כינויים: `TS`. מציג את סגנונות הטבלה עם מספר הטבלאות שכל אחד משמש בו, ואז `Table style: [New/Set/Edit/Delete/Apply]`.

- סגנון מחזיק את גובה הטקסט והיישור של שורות הכותרת, כותרת-העליונה והנתונים, השוליים של התא, ואילו גבולות נמשכים (חיצוניים, בין שורות, בין עמודות).
- `N` יוצר סגנון מהנוכחי ומפוך אותו לנוכחי; `S` קובע את הסגנון הנוכחי (טבלאות חדשות לוקחות אותו); `E` עורך אחד: טבלאות שמשתמשות בו מצוירות מחדש; `A` נותן לטבלאות שנבחרו את הסגנון הנוכחי; `D` מוחק אחד (לא Standard, לא הנוכחי; טבלאות שהשתמשו בו שומרות על המראה שלהן).
- הסגנונות נשמרים עם השרטוט (DWG ו-DXF).

### TABLEEXPORT

שומר את מה שהטבלה מציגה כקובץ CSV (נוסחה כערך שלה). `Select a table`, או בוחרים אחת קודם. תאי טקסט שמתחילים ב-`=`, `+`, `-` או `@` מקבלים `'` בתחילתם, כך שגיליון אלקטרוני לא יריץ אותם.

### TABLEPASTE

כינויים: `PASTETABLE`. יוצר טבלה מתאי גיליון אלקטרוני בלוח הגזירים, ואז שואל את הפינה השמאלית-עליונה שלה. זהה ל-{{cmd:TABLE}} › `Paste`.

### DATALINK

כינויים: `DL`. `Data link: [New/List/Remove] <New>`. `N` שואל קובץ CSV, מציב טבלה ממנו וזוכר את שם הקובץ; `L` מציג את הקישורים עם הקובץ שלהם, הגודל, מתי נקרא וכמה טבלאות משתמשות בו; `R` מסיר קישור (הטבלאות שלו נשארות טבלאות רגילות).

### DATALINKUPDATE

כינויים: `DLU`. קורא שוב את הקובץ של קישור נתונים וממלא מחדש את הטבלאות המקושרות אליו (שורות ועמודות מתווספות או מוסרות כדי להתאים). דפדפן אינו יכול לפתוח קובץ בעצמו, ולכן הוא מבקש ממכם לבחור את הקובץ שוב. עם כמה קישורים הוא שואל איזה.

### FIELD

שם שדה בשרטוט: טקסט שמחשב את עצמו. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: עכשיו, או התאריך השמור, שנוצר או שהודפס, ותבנית (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: שם הקובץ, עם או בלי הסיומת. `S`: מספר הגיליון, הכותרת שלו, או כמה גיליונות יש. `P`: תכונה של השרטוט לפי שם (ראו {{cmd:DWGPROPS}}). `O`: בוחרים עצם, ואז מה לקרוא (שטח, אורך, היקף, רדיוס, קוטר, שכבה, שם, x, y, טקסט, סיבוב, צבע) והספרות העשרוניות. `E`: נוסחה. `C`: טקסט עם קודים שמוקלדים כמו שהם, כמו `Sheet %<sheetnumber>% of %<sheetcount>%`.
- אחר כך `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: טקסט שנבחר מקבל את השדה אחרי מה שהוא מכיל; תא טבלה באותו אופן; הפניית בלוק שואלת איזו תכונה; {{key:Enter}} שואל גובה ונקודה לטקסט חדש.
- על המסך לשדה יש רקע אפור בהיר; הדפסה ו-PDF לעולם אינם מציגים אותו. הקלדה ידנית על טקסט של שדה מסיימת את השדה. שדה שאי אפשר לחשב מציג `####`.
- השדה של עצם מוצא אותו לפי המפתח ש-CadCraft שומר על עצמים (הגדרות › CadCraft › קבצים ידידותיים למיזוג); עם מפתחות כבויים הוא דוחה.

### UPDATEFIELD

כינויים: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` קובע מתי שדות מתעדכנים לבד: מקלידים את האותיות של `O` open, `S` save, `P` plot, `R` regen (כולן להתחלה), או `NONE`.

### DWGPROPS

כינויים: `DRAWINGPROPS`. מציג את מאפייני השרטוט, ואז `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. ששת הראשונים הם אלה שחלונית {{ui:פרטי השרטוט}} מציגה; `U` מוסיף שם וערך משלכם, `R` מסיר אחד. שדות קוראים אותם (`%<prop:title>%`, `%<prop:Client>%`) ועוקבים מיד. היא דוחה שם מותאם שהוא אחד מהמובנים או שמכיל `%`, `<`, `>`, מירכאות או לוכסן הפוך.

## פרמטרי

ראו [בנייה של שרטוט עם אילוצים](topic:constraints) ו[שימוש בפרמטרים ובמשוואות](topic:parameters). אילוצים עובדים בלשונית {{ui:מודל}}.

### GEOMCONSTRAINT ופקודות GC

כינוי `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, ואז ההנחיות של אותה פקודה.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (השני זז).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT ופקודות DC

כינוי `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (מספר, ביטוי, או `name=expression`).
- {{cmd:DCALIGNED}}: כמו למעלה, עם `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` שואל את סבילות המרחק והזווית.
- {{cmd:DELCONSTRAINT}} (כינוי `DELCON`): `Select objects`; האילוצים שלהם נעלמים.
- {{cmd:CONSTRAINTBAR}} (כינוי `CBAR`): `Select objects [Showall/Hideall]`, ואז `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS ו-PARAMETERS עם מקף

{{cmd:PARAMETERS}} (כינויים `PAR`, `PARAM`) פותח את חלונית {{ui:פרמטרים}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

כינוי `SWMACRO`. מוריד מאקרו (.swb) שבונה מחדש את המודל כסקיצה אחת עם אילוצים ב-SolidWorks. ראו [העברת סקיצות אל מודלרים של חלקים אחרים ומהם](topic:solidworks-sketches).

## בלוקים

### ANNOSCALE

כינויים: `CANNOSCALE`. אומרת את קנה מידה ההערות של השרטוט ומספר העצמים בעלי קנה מידה הערות שיש בו, ואז שואלת `New annotation scale`: מקלידים `1:50`, `1:100`, `2:1`, מספר בודד (`50` הוא 1:50) או שם של אחד מקני המידה של השרטוט. כל טקסט ומידה בעלי קנה מידה הערות מוקטנים או מוגדלים כך שיודפסו באותו גודל בקנה המידה החדש, בצעד ביטול אחד; עצמים שאינם בעלי קנה מידה הערות נשארים כמו שהם, וכך גם עצם ששומר רשימה של קני מידה בלי החדש ({{cmd:OBJECTSCALE}}). ראו [יחידות, נייר וקני מידה](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

כינויים: `OBJSCALE`. `Select annotative objects`, ואז `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. לטקסט או מידה בעלי קנה מידה הערות יש רשימה של קני מידה. `Add` ו-`Delete` שואלים קנה מידה (`1:50`, `2:1`, מספר בודד, או שם של אחד מקני המידה של השרטוט); `Current scale` מוסיף את קנה מידה ההערות של השרטוט; `List` מדפיס את קני המידה של כל עצם. חלון תצוגה שקנה המידה שלו ברשימת העצם מציג את העצם בגודל שמדפיס את גובה הנייר שלו בקנה המידה הזה, על המסך ובהדפסות. לא ניתן למחוק את קנה המידה האחרון. עצמים שאינם בעלי קנה מידה הערות נשארים בחוץ: הפעילו קודם {{ui:בעל קנה מידה הערות}} במאפיינים. הרשימות נשמרות ב-DWG וב-DXF כנתונים של CadCraft עצמו. ראו [יחידות, נייר וקני מידה](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

כינויים: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. ON (כשהשרטוט מתחיל): עצם בעל קנה מידה הערות מוצג גם בחלון תצוגה או במודל שקנה המידה שלו אינו ברשימה, בגודל שיש לו. OFF: הוא אינו מוצג שם, ואי אפשר לבחור בו במודל. המתג הוא צעד ביטול אחד; הוא אינו נשמר בקובץ.

### SCALELISTEDIT

כינויים: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` עד {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit ו-Delete שואלים את שם קנה המידה. קני המידה של השרטוט מצטרפים לרשימות קני המידה של חלון התצוגה וההדפסה, ונשמרים עם השרטוט. ראו [יחידות, נייר וקני מידה](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT ו-PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: נקודות שהעקומה עוברת דרכן; `Close`, `Undo`, ואז `Start tangent` ו-`End tangent` (נקודה, או {{key:Enter}}). Method › Control vertices שואל מעלה (1 עד 5) ומצייר ממצולע בקרה. Object הופך פוליליינים לספליינים שעוברים דרך הקודקודים שלהם. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` לכמה עצמים; קווים, קשתות וספליינים מוצעים כפוליליינים קודם. ראו [ספליינים ופוליליינים](topic:splines).

### BLOCK

כינויים: `B`, `BMAKE`.

- `Enter block name`. אם הוא קיים: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. הם מוחלפים בהפניה אחת לבלוק החדש.

### WBLOCK

כינויים: `W`, `-WBLOCK`. כותב בלוק, כמה עצמים או את כל השרטוט לקובץ DWG או DXF חדש. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (הוא הופך לראשית השרטוט החדש), `Select objects`, ואז `File format [DWG/DXF/R12 DXF]` ו-`File name for the new drawing`, ואז `What to do with the objects [Retain/Convert to block/Delete]`. Convert מחליף אותם בהפניה אחת לבלוק בשם הקובץ; Delete מוחק אותם.
- **Block**: `Block to write out`. העצמים של הבלוק עצמו, עם נקודת הבסיס שלו כראשית, כולל בלוקים מקוננים.
- **Entire drawing**: כל עצם במרחב המודל. גיליונות אינם נכתבים; השתמשו ב-{{cmd:SAVEAS}} לעותק ששומר עליהם.

הקובץ החדש מכיל רק את השכבות, סוגי הקו, סגנונות הטקסט והמידות והבלוקים שהעצמים שלו משתמשים בהם, ואת יחידות השרטוט. הגרסה של DWG היא זו ש-{{cmd:SAVEAS}} השתמש בה לאחרונה. בדפדפן הקובץ מורד; ב-Studio חלון השמירה נפתח.

### ATTDEF

כינויים: `ATT`, `DDATTDEF`, `-ATTDEF`; או {{ui:בלוקים}} › {{ui:עוד}} › {{ui:הגדרת תכונה}}. מדפיס את המצבים, ואז `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` כשהוא קבוע), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} לוקח הגדרות תכונה לתוך הבלוק.

### EATTEDIT ו-ATTEDIT

`EATTEDIT` (`DDATTE`, או לחיצה כפולה על הפניה עם תכונות; {{ui:בלוקים}} › {{ui:עוד}} › {{ui:עריכת תכונות}}): `Select a block reference with attributes`, ואז תיבת הדו-שיח {{ui:עריכת תכונות}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): אותה הפניה, ואז `<prompt> (<TAG>) <value>` לכל תכונה; {{key:Enter}} שומר ערך. ראו [תכונות](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. ערכים נשמרים; לתכונות חדשות יש ברירת מחדל, תכונות שהוסרו נעלמות, והמיקומים מאופסים.

### BATTMAN

{{ui:בלוקים}} › {{ui:עוד}} › {{ui:מנהל תכונות}}. תיבת הדו-שיח: בלוק, תכונות (תג, הנחיה, ברירת מחדל, מצבים, סדר), {{ui:עדכון ההפניות (הערכים נשמרים)}}, {{ui:החלה}}.

### REFEDIT ו-REFCLOSE

{{ui:בלוקים}} › {{ui:עוד}} › {{ui:עריכה במקום}}. `REFEDIT`: `Select the block reference to edit in place` (או הבחירה). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:שמירת הבלוק}} ו-{{ui:ביטול}} בסרגל עושים אותו דבר. כל העריכה היא צעד ביטול אחד. ראו [תכונות](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: האם הלחץ של קו עט קובע את רוחב הקו של מה ש-{{cmd:SKETCHFIX}} ו-{{cmd:SKETCHLIVE}} יוצרים (פעיל בהתחלה). ראו [סקיצה בעט](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

כינוי: `OFFSTD`. אומר איזה תקן משרדי תקף לשרטוט הזה ומאיפה הוא בא: הרשומה של השרטוט עצמו, התקן המשותף של הצוות שלכם, או מדיניות ברירת המחדל שלכם (גבהי טקסט `all.anno.*`); בלעדיהם, הגדלים של התוכנה עצמה. `[Import/Layers/Title block/Clear/eXit]`: `Import` קורא קובץ `cc-office-standard` .json (הרשומה ש-SuperCad ו-BimCraft כותבים) לשרטוט הזה, ונשמר איתו ב-DWG וב-DXF; `Layers` מוסיף את השכבות של המשרד שחסרות לשרטוט, בצעד ביטול אחד, ולעולם אינו מסיר שכבה; `Title block` מציג את השדות של המשרד עם הערכים של השרטוט הזה; `Clear` מסיר את הרשומה של השרטוט. גבהי טקסט ומידות בעלי קנה מידה הערות עוקבים אחרי התקן התקף. ראו [יחידות, נייר וקני מידה](topic:units-papers-scales).

### BPARAMS

כינויים: `BPM`, `BLOCKPARAMS`. פותח את מנהל הפרמטרים עבור הבלוק בעורך הבלוקים, בלוק ההפניה הנבחרת, או הבלוק שתציינו (`Block name`): פרמטרים עם נוסחאות, כמה פרמטרי נראות עם המצבים שלהם, והערכים והמצבים של ההפניה הנבחרת. ראו [הפרמטרים ומצבי הנראות שלכם](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` עושה את אותו דבר בשורת הפקודה: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT ו-BCLOSE

`BE`; או {{ui:בלוקים}} › {{ui:עוד}} › {{ui:עריכת בלוק}}. `Enter block name to edit <the selected reference's block>` פותח את עורך הבלוקים. `BCLOSE` שואל `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:שמירת הבלוק}} ו-{{ui:ביטול השינויים}} בסרגל העליון עושים אותו דבר. כל מה שנעשה בעורך הוא צעד ביטול אחד.

### VIEWBASE

כינוי: `FLATSHOT`. תצוגה דו-ממדית שטוחה של הגופים בלשונית התלת-ממד: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, קנה מידה (`1:20`, `2:1`; {{key:Enter}} לוקח את זה שמתאים לגיליון), ואז מרכז התצוגה. הפניית בלוק אחת; קצוות נראים על VIEW-VISIBLE, נסתרים מקווקווים על VIEW-HIDDEN. ראו [תצוגות שטוחות על גיליון](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

כינויים: `-PUBLISH`; או {{ui:כל הגיליונות ב-PDF אחד}} בתיבת הדו-שיח {{ui:הדפסה ל-PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} מדפיס כל גיליון, `S` שואל שמות מופרדים בפסיקים. קובץ PDF אחד, עמוד וסימניה לכל גיליון. ראו [כל הגיליונות בקובץ PDF אחד](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

כינויים: `SSM`, `SHEETSETMANAGER`. מביא אתכם לקטע {{ui:סט גיליונות}} בחלונית השמאלית: גיליונות מכמה שרטוטים, ממוספרים וממוינים, בלוק הכותרת שלהם מלא מהסט, ומודפסים כקובץ PDF אחד. ראו [סטים של גיליונות](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): בוחרים DWG או DXF, ואז את נקודת ההכנסה שלו. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; עם יותר מקישור אחד, בוחרים אחת מההפניות שלו, או מקלידים `N` ואת שמה. ראו [שרטוטים מקושרים](topic:files#linked-drawings-external-references).

### COUNT

כינויים: `BCOUNT`; או {{ui:בלוקים}} › {{ui:עוד}} › {{ui:ספירת בלוקים}}. `Select a block reference to count, or [All/Export] (Enter: All)`: לחיצה בוחרת וסופרת כל הפניה של אותו בלוק במרחב הזה; {{key:Enter}} או `A` מציגים את כולם; `E` ואז `C` (ספירות) או `A` (תכונות) מוריד CSV. ראו [ספירת בלוקים ויצוא לוח](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

כינויים: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (אותיות גדולות וקטנות אינן משנות). `F` שואל DWG או DXF, ואז את כל השרטוט או אחד מהבלוקים שלו; שם שכבר בשימוש שואל {{ui:שמירת הקיים}} או {{ui:שינוי שם}}. `L` פותח את חלונית הספרייה.
- `Specify insertion point [Scale/Rotate]`. `S` שואל `Specify scale factor`, `R` שואל `Specify rotation angle`; שניהם נזכרים.
- כשהבלוק כבר עומד ליד עצמים שחוזרים במקומות אחרים בלי אותו, שורה אומרת כמה מקומות מוצעים, וההנחיה מקבלת `suGgested`: `G` מציג אותם; לחצו קרוב לאחד כדי להציב שם את הבלוק, `A` לכולם, {{key:Enter}} לחזרה. הם לוקחים את הסיבוב של השכנים ואת ערכי ברירת המחדל של התכונות. שרטוטים מעל 20,000 עצמים במרחב הפתוח אינם נסרקים.
- ואז `Enter <prompt> (<TAG>) <default>` לכל תכונה שהבלוק מבקש. ראו [תכונות בלוק](topic:attributes).

### LIBRARY

כינויים: `LIB`. פותח את חלונית הספרייה: מציבים פריטים, בודקים עדכונים, קרדיטים של הספרייה. בלי שאלות. ראו [הוספה מקובץ או מהספרייה](topic:insert-from-file-and-library).

### STEELMEMBER

כינויים: `SMEMBER`; או {{ui:אלמנט תלת-ממדי}} בלשונית {{ui:רגיל}} של הספרייה. `Section size <W12x26>` (כמו שהלשונית מציגה), ואז `Start point [Column]` ו-`End point`: אלמנט מוצק בלשונית התלת-ממד בין שתי הנקודות, יושב על הקרקע. `C` שואל את נקודת הבסיס של העמוד וגובהו. צעד ביטול אחד. ראו [הצבת פרופילי פלדה וחלקים סטנדרטיים](topic:steel-and-standard-parts).

### PARTSLIST

כינויים: `PLIST`. `Top left corner of the parts list`, ואז `Text height <2.5>`: מצייר טבלה של כל חלק סטנדרטי וכל פרופיל פלדה שהוצבו מהספרייה (מספרי פריטים, כמות, חלק, תקן, גודל, אורך, חומר, מסה). צעד ביטול אחד. ראו [הצבת פרופילי פלדה וחלקים סטנדרטיים](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

כינויים: `PU`. מסיר הגדרות בלוק שאף דבר אינו משתמש בהן. בלי שאלות.

### DELBLOCKS

או {{ui:בלוקים}} › {{ui:עוד}} › {{ui:מחיקת בלוקים}}. `Select block to delete [Name/eXit]`: בוחרים הפניית בלוק, או `N` לרשימת הבלוקים עם סינון (בוחרים כמה), או `X` / {{key:Enter}} לסיום. כל הפניה יוצאת (במודל, בכל גיליון ובתוך בלוקים אחרים) ואז ההגדרה, ושורת הפקודה אומרת מה נמחק ומה לא. בלוקים בלי שם ושרטוטים מקושרים אינם מוצעים. ההנחיה חוזרת לבלוק הבא; כל הפקודה היא צעד ביטול אחד.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} מדביק את מה שהעתקתם ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) כבלוק אחד: בוחרים נקודת הכנסה, והפניה אחת לבלוק חדש מונחת שם, נבחרת. לבלוק יש שם משלו (`A$C` ומספר); {{cmd:RENAME}} נותן לו את שלכם. צעד ביטול אחד מסיר את ההפניה והבלוק.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} שואל את הבלוק להחלפה ואת הבלוק שיבוא במקומו (`?` מציג את הבלוקים), ואז משנה כל הפניה במודל, בכל גיליון ובתוך בלוקים אחרים. כל הפניה שומרת על מקומה, קנה המידה, הסיבוב, השכבה וערכי התכונות שקיימות בשני הבלוקים; תכונות שרק הבלוק החדש מכיל מתחילות בברירות המחדל שלהן, והיא מודיעה אילו ערכים נמחקו. כשאיש כבר אינו משתמש בבלוק הישן, היא מציעה להסיר אותו. היא דוחה קישורי שרטוטים ותחליף שהיה מכניס בלוק לתוך עצמו. צעד ביטול אחד.

### MINSERT

{{cmd:MINSERT}} מציב בלוק בשורות ובעמודות: שם הבלוק, נקודת ההכנסה, קנה המידה, הסיבוב, מספר השורות והעמודות, והמרווחים ביניהן. הסט כולו מסתובב עם הסיבוב. כל אחד הוא הפניה משלו (עד 10,000), כך שאפשר להזיז או למחוק כל אחד מהם אחר כך.

### BLOCKSPALETTE

כינויים: `BLOCKSPAL`; או {{ui:בלוקים}} › {{ui:עוד}} › {{ui:חלונית בלוקים}}. מציג את חלונית {{ui:בלוקים}} עם הסמן בתיבת הסינון שלה. לכל בלוק יש תמונה קטנה; אלה שהוצבו לאחרונה מופיעים ראשונים. שני הלחצנים ליד הסינון מחליפים בין רשימה לרשת של תמונות. לחצו על תמונה (או על {{ui:הוספה}}) כדי להציב את הבלוק עם {{cmd:INSERT}}, או גררו אותה אל השרטוט כדי להציב אותו במקום שבו משחררים.

{{ui:ספריות}}, מתחת לרשימה: {{ui:הוספת שרטוט}} לוקח קובץ DWG או DXF משלכם ומציג את הבלוקים שלו עם תמונות, וכל השרטוט כבלוק אחד. הצבת אחד מהם מעתיקה את ההגדרה שלו (ואת הבלוקים שהוא מקונן, ואת השכבות שלהם) לשרטוט הזה, כמו האפשרות `File` של {{cmd:INSERT}}; בלוק שכבר קיים כאן עם אותה הגדרה משמש בלי שאלה, ובלוק באותו שם שונה שואל {{ui:שמירת הקיים}} או {{ui:שינוי שם}}. בדפדפן הקובץ נשאר עד שהדף נסגר. ב-CadCraft Studio {{ui:הוספת תיקייה}} מציג את השרטוטים שבתיקייה, כל אחד נפתח כשלוחצים עליו, והקבצים והתיקיות נזכרים. ה-x הקטן מסיר ספרייה מהרשימה; הקובץ עצמו לא נגע בו. הספרייה המשותפת {{ui:ספרייה}} דבר אחר: ראו [הוספה מקובץ או מהספרייה](topic:insert-from-file-and-library).

### BCONVERT

או {{ui:בלוקים}} › {{ui:עוד}} › {{ui:המרת חזרות לבלוקים}}. מוצא גיאומטריה שחוזרת, והופך כל עותק להפניה לבלוק אחד.

- `Select the objects that repeat, or [Block]`: העצמים של עותק אחד. `B` מציין בלוק קיים במקום, כדי למצוא עותקים רופפים של העצמים שלו.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` ו-`P` משנים מה נחשב עותק; {{key:Enter}} מחפש. ההגדרות נזכרות.
- `Name for the new block <Block1>`, ואז `Specify the block's base point` ({{key:Enter}} לוקח את הפינה השמאלית-תחתונה של הבחירה).
- היא אומרת כמה קבוצות עצמים אחרות הן אותה גיאומטריה, מדגישה כל מה שהיא הייתה מחליפה, ושואלת `Yes/No`.

עותק הוא אותם עצמים מוזזים ומסובבים בכל זווית (ומוקטנים או מוגדלים או מושתקפים בגורם אחד, כשאלה פעילים): כל עצם חייב להיות לו מקבילה, עד מיליונית מגודל הבחירה. לכל הפניה יש סיבוב וקנה מידה משלה (עותק מושתק מקבל קנה מידה Y שלילי), והשכבה שהעצמים שלה חולקים. עצמים על שכבות נעולות נשארים כמו שהם, ונספרים. היא מחפשת במרחב הפתוח (המודל או הגיליון הפתוח). חיפוש גדול מאוד נעצר במגבלת עבודה ואומר זאת. צעד ביטול אחד.

### BSEARCH

או {{ui:בלוקים}} › {{ui:עוד}} › {{ui:חיפוש בלוקים}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: חלק משם בלוק, או דפוס עם `*` ו-`?`. מציג כל בלוק עם ההפניות שלו כאן ובכל השרטוט.
- `A`: ערך תכונה, או `TAG=value`. מציג את הבלוקים שההפניות שלהם מכילות אותו, עם הערכים שנמצאו. תכונות קבועות נספרות.
- `G`: בוחרים עצמים, או הפניית בלוק אחת, והבלוקים שהצורה שלהם דומה לפחות ב-85% מוצגים, הטוב ביותר ראשון. גודל, סיבוב והשתקפות אינם נספרים. המדידה משווה את המרחקים בין נקודות שמפוזרות לאורך קווי המתאר, כך שהיא מוצאת דומים; השתמשו ב-{{cmd:BCONVERT}} כדי למצוא עותקים מדויקים.

ההפניות שנמצאו במרחב הפתוח נבחרות, מוכנות לפקודה הבאה.

### BREPLACE

או {{ui:בלוקים}} › {{ui:עוד}} › {{ui:החלפת בלוקים}}. `Replace [Selected/All]`: `S` מחליף את הפניות הבלוק שבחרתם בבלוק שציינתם; `A` שואל בלוק ותחליף שלו, ומשנה כל הפניה, כמו {{cmd:BLOCKREPLACE}} (אותו קוד). הפניה שומרת על מקומה, קנה המידה, הסיבוב, השכבה וערכי התכונות שקיימות בשני הבלוקים; ערכים שלבלוק החדש אין להם מקום אליו נמחקים ומצוינים. `?` מציג את הבלוקים. צעד ביטול אחד.

### DATAEXTRACTION

כינויים: `EATTEXT`, `DX`; או {{ui:בלוקים}} › {{ui:עוד}} › {{ui:חילוץ נתונים}}. מציג בלוקים, התכונות שלהם ומאפייני העצמים כטבלה או כקובץ CSV.

- פועל על הבחירה, או שואל `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` כשבבחירה יש שניהם. בלוקים בלי שם, טבלאות וכתבי כמויות אינם מופיעים לעולם.
- היא מדפיסה את העמודות לבחירה (שם, סוג, שכבה, X, Y, סיבוב, קנה מידה, אורך, שטח, צבע, סוג קו, מרחב, ואחת לכל תג תכונה), ואז `Columns, by name or number with commas between`. {{key:Enter}} לוקח את אלה עם הכוכבית: השם וכל התכונות לבלוקים; סוג, שכבה ואורך לעצמים.
- `Put identical rows together with a count? [Yes/No] <Yes>`, ואז `Put the list in a: [Table/Csv] <Table>`. טבלה היא טבלה רגילה ({{cmd:TABLEDIT}} עורך אותה) והיא אינה חיה: הריצו שוב את הפקודה כשהשרטוט משתנה.
- היא דוחה עמודה שאינה ברשימה. טבלה מחזיקה 1,999 שורות נתונים; קובץ CSV לוקח את כולן.

### COUNTTABLE

סופר את הפניות הבלוק של הבחירה (או של המרחב הפתוח) ושם את הספירות בטבלה (`Block`, `Count`) או בקובץ CSV. לספירה שעוקבת אחרי השרטוט לבד ראו {{cmd:BOMTABLE}}.

## גיליונות והדפסה

### LAYOUT

כינויים: `LO`, `NEWLAYOUT`; או לחצן {{ui:+}} מתחת לשרטוט. גיליון חדש עם מסגרת, בלוק כותרת וחלון תצוגה אחד, על ISO A3 (או Tabloid לשרטוטים באינץ' או ברגל). בלי שאלות.

### MVIEW

כינויים: `MV`. בגיליון בלבד ({{cmd:VPORTS}} על גיליון עושה אותו דבר).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. חלון התצוגה מציג את כל המודל בקנה מידה סטנדרטי.
- `P` (Polygonal): לוחצים על הפינות של קו המתאר (`Undo`, `Close`), {{key:Enter}} כשמסיימים. היא דוחה פחות משלוש פינות.
- `O` (Object): `Select a closed object for the viewport's outline`: פוליליין סגור, מעגל או אליפסה על הגיליון. חלון התצוגה לוקח את הצורה שלו (עקומות כקטעים ישרים קצרים); העצם נשאר כמו שהיה. היא דוחה עצם שאינו סגור.

### VPCLIP

חותך חלון תצוגה שכבר על הגיליון. `Select viewport to clip` (או בוחרים אותו קודם), ואז `Select the object to clip to [Polygonal/Delete]`:

- לחצו על פוליליין סגור, מעגל או אליפסה, או {{key:Enter}} (או `P`) כדי ללחוץ על הפינות של מצולע.
- `D` (Delete, מוצע כשחלון התצוגה חתוך) הופך אותו שוב למלבן: התיבה סביב קו המתאר שהיה לו.
- מה שחלון התצוגה מציג אינו זז על הנייר, וקנה המידה שלו נשאר. המודל מצויר ומודפס רק בתוך קו המתאר, והמסגרת עוקבת אחריו. צעד ביטול אחד.
- לחלון תצוגה חתוך יש ידית על כל פינה של קו המתאר שלו, בנוסף למרכז ולארבע הפינות של התיבה שלו (גרירת פינת תיבה מותחת את קו המתאר איתה). המאפיינים מציגים Outline: Rectangle, או Clipped עם מספר הפינות.
- קובצי DWG ו-DXF 2000 שומרים את קו המתאר עבור CadCraft. תוכנות אחרות פותחות את חלון התצוגה כמלבן שסביבו; DXF R12 שומר רק את המלבן.
- בלשונית המודל היא אומרת שחלונות תצוגה נמצאים בגיליונות.

### VPORTS

כינויים: `VIEWPORTS`. {{cmd:SPLIT}} הוא אותו דבר גם מגיליון, ו-{{ui:תצוגה}} › {{ui:עוד}} › {{ui:פיצול זה לצד זה}}, {{ui:פיצול אחד מעל השני}}, {{ui:ארבעה חלונות}}, {{ui:חלון אחד}} מפעילים אותו. במודל: `Enter number of panes [SIngle/2/3/4] <3>`; `2` שואל `[Horizontal/Vertical] <Vertical>` (Vertical = זה לצד זה), `3` שואל `[Left/Right] <Right>` (איפה החלון הגדול). לכל חלון יש תצוגה ומרחב משלו; לחיצה הופכת חלון לפעיל. בגיליון זו {{cmd:MVIEW}}. ראו [פיצול המסך](topic:split-screen).

### VPVIEW

ללא כינויים. בגיליון בלבד.

- `Select viewport` (מדולג אם נבחר אחד), ואז במודל: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

ללא כינויים. מערכת קואורדינטות משלכם; זו לא עריכה. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: נקודה היא ראשית חדשה, ואז `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: ראשית, נקודה על חצי ציר X החיובי, נקודה בצד Y החיובי. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` ושם. התצוגה מסתובבת כך שציר X החדש ישר. ראו [סיבוב התצוגה ושימוש בקואורדינטות משלכם](topic:ucs-and-turned-view).

### PLAN

ללא כינויים. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: מסובב את התצוגה של החלון הפעיל כך שציר ה-X של ה-UCS (או של העולם) ישר. שום דבר בשרטוט לא זז.

### TURNLEFT, TURNRIGHT, TURNWORLD

ללא כינויים; או {{ui:תצוגה}} › {{ui:עוד}} › {{ui:הסתובבו את התצוגה 90° שמאלה}}, {{ui:הסתובבו את התצוגה 90° ימינה}}, {{ui:חזרה לעולם}}. זהה ל-`UCS Z -90`, `UCS Z 90` ו-`UCS W`, והתצוגה עוקבת.

### VPLAYER

ללא כינויים. בגיליון, או בתוך חלון תצוגה. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` שואלים שמות שכבות (מופרדים בפסיקים, עם תווי כוכבית ושאלה), ואז חלונות `[All/Select/Current] <Current>`; Reset מחזיר כל שכבה לברירת המחדל שלה של "קפוא בחלונות חדשים"; `V` קובע את ברירת המחדל הזאת (`[Frozen/Thawed]`), שבה {{cmd:MVIEW}} משתמש. `?` מציג את השכבות שקפואות בחלון התצוגה הנוכחי. עמודת החלונות בחלונית השכבות עושה את אותו דבר לחלון אחד. ראו [הקפאת שכבה בחלון תצוגה אחד](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

כינויים: `MS`; או לחיצה כפולה בתוך חלון תצוגה. בגיליון בלבד. עובדים על המודל דרך חלון תצוגה: הנבחר, היחיד בגיליון, או `Click inside the viewport to work in`. הזזה וזום בתוכו משנים את התצוגה של החלון (חלון שנעול לתצוגה שומר עליה, והגיליון זז במקום זאת); התצוגה החדשה נכתבת כצעד ביטול אחד. ראו [עבודה על המודל דרך חלון תצוגה](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

כינויים: `PS`; או לחיצה כפולה מחוץ לחלון התצוגה, או לחיצה על לשונית מתחת לשרטוט. חוזר לגיליון.

### PLOT

כינויים: `PRINT`, `PUBLISH`, `EXPORTPDF`; או {{key:Mod+P}}. פותח את תיבת הדו-שיח {{ui:הדפסה ל-PDF}}. ראו [הדפסה ל-PDF](topic:plot-pdf).

### PLOTSTYLES

כינויים: `STYLESMANAGER`, `PSTABLES`; או {{ui:עריכת טבלאות…}} בתיבת הדו-שיח {{ui:הדפסה ל-PDF}}. פותח את {{ui:טבלאות סגנון הדפסה}}: מה כל צבע מודפס כ-(צבע, אפור, דיו, רוחב קו), נשמר עם השרטוט. ראו [טבלאות סגנון הדפסה](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} מזיז עצמים בין גיליון למודל דרך חלון תצוגה, מוקטנים או מוגדלים ומסובבים כך שייראו זהים מהצד השני. על גיליון בוחרים עצמים והם עוברים למודל (בוחרים את חלון התצוגה כשלגיליון יש יותר מאחד). בזמן עבודה על המודל דרך חלון תצוגה ({{cmd:MSPACE}}), העצמים שנבחרו באים לגיליון. היא אומרת פי כמה הם נעשו גדולים או קטנים יותר. חלונות תצוגה נשארים על הגיליון שלהם. צעד ביטול אחד.

### ISODRAFT

{{cmd:ISODRAFT}} מפעיל או מכבה שרטוט איזומטרי `ON` או `OFF`, או עובר ישירות למישור `Left`, `Top` או `Right`. כשהוא פועל: Ortho ({{key:F8}}) שומר קווים לאורך שני הצירים של המישור (שמאל: 90° ו-150°; עליון: 30° ו-150°; ימין: 30° ו-90°), מעקב קוטבי ({{key:F10}}) עוקב אחרי אותם צירים, נעיצה לרשת ({{key:F9}}) משתמשת ברשת האיזומטרית, והרשת ({{key:F7}}) מצוירת בקווים של 30°, 90° ו-150°. {{cmd:ELLIPSE}} מקבל `Isocircle`: נותנים מרכז ורדיוס (או `Diameter`), והוא מצייר את האליפסה שמעגל נראה בה במישור הנוכחי. השרטוט נשאר שטוח: אלה עזרים לציור תצוגה תמונתית, לא מודל תלת-ממדי. ההגדרה לסשן הזה ואינה נשמרת בקובץ.

### ISOPLANE

{{cmd:ISOPLANE}} בוחר את המישור שעליו השרטוט האיזומטרי עובד: `Left`, `Top` או `Right`. Enter עובר למישור הבא. כשהשרטוט האיזומטרי פועל, {{key:F5}} עושה את אותו דבר באמצע פקודה; כשהוא כבוי, {{key:F5}} נשאר לדפדפן.

## שאילתות

### CAL

מדפיס את הערך של חישוב, כפי שהוא נקרא בכל מקום שמקלידים אורך.

- `Expression`: מקלידים אותו, למשל `12'6"+3/4"` או `(24'-0")/3`, ולוחצים {{key:Enter}}. CadCraft מדפיס `= 12'-6 3/4"   (150.75 drawing units)`. ראו [חשבון בערך שהוקלד](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

כינויים: `DI`; או {{ui:תצוגה}} › {{ui:עוד}} › {{ui:מדידת מרחק}}.

- `Specify first point`, `Specify second point`. מדפיס מרחק, זווית, Delta X ו-Delta Y.

### AREA

כינויים: `AA`; או {{ui:תצוגה}} › {{ui:עוד}} › {{ui:שטח}}. מדפיס שטח והיקף.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - לחצו או הקלידו פינות; ב-`Specify next point (Enter closes) [Undo]` לחצו {{key:Enter}} כדי לסגור את קו המתאר. `U` מבטל את הפינה האחרונה.
  - {{key:Enter}} או `O`, ואז `Select object`: מעגל (מדפיס את ההיקף), אליפסה, פוליליין (פתוח נסגר בקו ישר לצורך השטח, והאורך שלו מודפס), או קווקוו (חורים נגרעים).
  - `A` (Add area) ו-`S` (Subtract area) שומרים על סכום רץ: ההנחיה מתחילה ב-`(ADD mode)` או `(SUBTRACT mode)`, כל שטח מתווסף או מוחסר, ו-`Total area = …` מודפס אחרי כל אחד. במצבים האלה `O` בוחר עצמים עד {{key:Enter}}, ו-{{key:Enter}} בהנחיה הראשונה מסיים את הפקודה.

### MEASUREGEOM

כינויים: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; אחרי כל מדידה היא שואלת שוב, כש-`eXit` הוא ברירת המחדל.

`Quick` מודד סביב הסמן כשאתם מזיזים אותו: המרחק לעצם הקרוב ביותר ימינה, מעלה, שמאלה ולמטה (לאורך צירי ה-UCS הנוכחי), מצויר תוך כדי, והזווית במקום שבו שניים מהשכנים ישרים ונפגשים. לחיצה כותבת את ארבעת המרחקים, הרוחב והגובה הנקיים והזוויות להיסטוריה; Enter חוזר לאפשרויות. היא קוראת את מה שעל המסך.

- `D`: שתי נקודות, כמו {{cmd:DIST}}.
- `R`: `Select arc or circle`; מדפיס את הרדיוס והקוטר.
- `A`: קשת (הזווית הכלולה שלה), קו ואז קו שני (הזווית ביניהם, לכיוון הקצוות הרחוקים שלהם), או {{key:Enter}} ושלוש נקודות (קודקוד, ואז שני הקצוות).
- `AR`: כמו {{cmd:AREA}}, שטח אחד.

### ID

ללא כינויים. `Specify point`; מדפיס את ה-X וה-Y שלה.

### LIST

כינויים: `LI`, `LS`. `Select objects`; מדפיס את הסוג, השכבה והמידות העיקריות של כל עצם.

### MASSPROP

{{cmd:MASSPROP}} נותן את מאפייני החתך של האזורים והעצמים הסגורים שבחרתם, יחד: שטח, היקף, מלבן חוסם, מרכז כובד, מומנטי אינרציה סביב צירי X ו-Y דרך הראשית, מכפלת האינרציה, רדיוסי ג'יירציה, אותם מומנטים סביב מרכז הכובד, והמומנטים העיקריים עם הכיוונים של צירי העיקר שלהם. חורים באזור נספרים כחורים. הנתונים ביחידות שרטוט, ומדויקים לקווי מתאר שנוצרו מקווים וקשתות; אליפסות וספליינים נמדדים כקטעים ישרים קצרים, והיא אומרת זאת. אחרי הדוח היא שואלת אם לכתוב אותו לקובץ טקסט. עצמים שאינם סגורים מושמטים, והיא אומרת כמה.

## תצוגה, קובץ ואחרות

### ZOOM

כינויים: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. לחצו על שתי פינות לחלון. `E`, `A` או Enter: השרטוט כולו.
- `P` (Previous, או {{ui:קודם}} בסרגל הכלים) חוזר לתצוגה שלפניה, עד 10 תצוגות בכל לשונית; רצף של צעדי גלגלת או הזזה אחת נספרים כתצוגה אחת.
- מספר כמו `2`, `2x` או `0.5x` (או `S` ואז המספר) מגדיל או מקטין בגורם הזה סביב מרכז המסך.
- `C` שואל `Specify center point` ו-`Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT והפקודות של PDF

כינויים: `PDFATT` עבור {{cmd:PDFATTACH}}, `PDFIM` עבור {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} מציב עמוד PDF מתחת לשרטוט (קובץ, עמוד, נקודת הכנסה, קנה מידה, סיבוב); {{cmd:PDFIMPORT}} הופך קווים, עקומות, מילויים וטקסט של עמוד לעצמי שרטוט בשכבות שנקראות על שם ה-PDF, בגודל אמיתי, בקנה מידה שתקלידו, או בקנה מידה משתי נקודות ומרחק אמיתי. {{cmd:PDFCLIP}} חותך תחתית, {{cmd:PDFADJUST}} קובע מחליש, ניגודיות, מונוכרום או מכבה אותה, {{cmd:PDFLAYERS}} מחליף את השכבות של ה-PDF, ו-{{cmd:PDF}} נותן ל-CadCraft שוב את הקבצים שהתחתיות של השרטוט משתמשות בהם. ראו [תחתיות PDF](topic:pdf-underlay).

### AUTOCOMPLETE

כינויים: `AUTOC`. השלמה אוטומטית בשרטוט: כשאף פקודה לא פועלת, רפאי אפור מראה מה הדפוסים של השרטוט אומרים שבא. {{cmd:AUTOCOMPLETE}} מפעיל אותו `On` או מכבה `Off` (או הגדרות › CadCraft), או `Show` מציג מה הוא היה מציע עכשיו. **Tab** מצייר את הרפאי כצעד ביטול אחד, **Esc** מבטל אותו עד שהשרטוט משתנה. הוא מוצא שלושה דברים בעצמים החדשים ביותר: העותק הבא של משהו שצויר פעמיים או יותר בצעד שווה (עמודים, עמודות, מדרגה של מדרגות ושלבים), הצעדים הבאים של מדרגות של פוליליין, והצד החסר של חדר או שרשרת קירות. באמצע {{cmd:LINE}} או {{cmd:PLINE}} הרפאי הוא **הנקודה הבאה**: הצעד הבא של מדרגות (שלב, מדרגה, שלב…), הפינה הרביעית של מלבן, הנקודה שסוגרת אותו, או צעד שווה נוסף. הביאו את הסמן קרוב אליו והקישו **Tab**, כאילו לחצתם שם; המשיכו או הקישו Enter. מחושב במחשב הזה לפי כללים, בלי מודל.

### AUTOSHEET

כינוי: `ASH`. גיליונות שמסדרים את עצמם. {{cmd:AUTOSHEET}} לוקח את חלקי השרטוט (התצוגות הקרויות שלכם, או החלקים הנפרדים של המודל, או כל המודל), בוחר גודל נייר (או את זה שתתנו), נותן לכל חלק קנה מידה סטנדרטי (קנה מידה אחד לכולם, או הגדול ביותר שכל אחד יכול לקבל), ומציב את התצוגות בשורות על גיליונות חדשים עם בלוק כותרת וכיתוב (שם וקנה מידה) מתחת לכל אחת. מה שלא נכנס לגיליון אחד מקבל גיליון משלו. צעד ביטול אחד. מחושב במחשב הזה לפי כללים, בלי מודל.

### PHOTOSKETCH

כינוי: `PSK`. ממיר תמונה של סקיצה לשרטוט. בוחרים תמונה (JPEG, PNG או TIFF) של סקיצה ביד על דף נייר. {{cmd:PHOTOSKETCH}} מוצא את ארבע הפינות של הדף, מיישר את הפרספקטיבה, לוקח את גודל הנייר ששמתם (`Paper`, או הקרוב ביותר הסטנדרטי) ואת `Scale` של הסקיצה (1 : n), ואז מעתיק את קווי העט לקווים, קשתות ומעגלים, שכבה לכל צבע עט (שחור, אדום, כחול, ירוק). אם אינו מוצא את קצה הדף הוא לוקח את כל התמונה כגיליון ואומר זאת. כתב יד לא מועתק. צעד ביטול אחד. נעשה במחשב הזה בעיבוד תמונה קלאסי, בלי מודל, ובלי לשלוח דבר לשום מקום. ראו גם את פקודות השרטוט הסרוק.

### AUTODIM

כינוי: `ADIM`. מידות אוטומטיות לפי כללים. {{cmd:AUTODIM}} מודד את העצמים שנבחרו (או את כל השרטוט) מהקצוות הישרים והאנכיים שלהם: שרשרת מידות לאורך הצדדים שתבחרו (`Sides`), מידה כללית אחת מחוצה לה, הרוחב של כל פתח (מרווח בין קווי קיר ישרים), קוטר לכל גודל של חור, ועם `Grid` המרווח בין קווי רשת. מידה שכבר קיימת לא נעשית שוב. צעד ביטול אחד. מחושב במחשב הזה לפי כללים, בלי מודל.

### GRIDMOVE

כינוי: `GM`. הזזת קו רשת מביאה איתה את הסט. {{cmd:GRIDMOVE}} מזיז קו רשת (קו בשכבה ששמה מכיל grid או axis) ומה שתלוי בו: קירות שיש להם קצה על הקו נמתחים כדי לעקוב אחריו, קירות לאורכו זזים כולם, עמודות (הפניות בלוק ומעגלים על הקו), הבועה והתווית שלו זזים, ומידות שהנקודות שלהן יושבות עליו מודדות את המרווח החדש. תנו שתי נקודות (נספר רק החלק החוצה את הקו) או `Distance`. צעד ביטול אחד מחזיר הכול. נעשה לפי כללים במחשב הזה.

### DETAILS

כינוי: `DET`. פרטים שמוצאים אתכם. {{cmd:DETAILS}} שומר את הפרטים של המשרד שלכם: `Add` מניח בלוק של השרטוט הזה ברשימה, `List` ו-`Remove` מנהלים אותה, `Find` מדרג אותם לפי מה שנבחר (או לפי מה שציירתם לאחרונה) לפי המילים בשכבות שלו, בשמות הבלוקים, בדוגמאות הקווקוו ובהערות, מול השם וההערות של כל פרט, כך שפרט חלון מוצא את הפס הנגרר שלכם. בחרו מספר ונקודה כדי להציב אותו. כש-`Hint` פעיל (וגם בהגדרות › CadCraft), בחירה של משהו שפרט תואם מציגה שורה אחת בשורת המצב. הרשימה נשמרת בדפדפן הזה, על המחשב הזה, והיא הרשימה שמחפשים בה. `Share` שם אותה גם בתיקיית המסמכים שלכם (`.cadcraft/firm-details.json`, עם השרטוט של כל בלוק): `Pull` מוסיף את מה שלצוות שלכם יש ולכם אין, `Push` מוסיף את מה שיש לכם ולהם אין, `Both` עושה את שניהם, ואף פעם לא מוחקים דבר מאף צד. פתחו קודם את תיקיית המסמכים ({{cmd:DOCUMENTS}}); כשהתיקייה היא תיקיית Team Cloud Plan, כל הצוות חולק רשימה אחת. פריט פרט בחלונית הספרייה כולל כפתור **Add to my firm's details** שמכניס אותו לאותה רשימה. מחושב במחשב הזה לפי מילים, בלי מודל.

### SKETCHFIX

כינוי: `SKF`. סקיצות עט הופכות לגיאומטריה מדויקת. לוחצים וגוררים קו אחד ביד חופשית בכל פעם (עט, עכבר או אצבע), ואז Enter. כל קו נקרא כקו, מעגל, קשת, מלבן או פוליליין: קווים כמעט אופקיים ואנכיים נעשים אופקיים ואנכיים בדיוק, קו סגור ועגול הופך למעגל, קו סגור עם ארבע פינות ישרות למלבן, והקצוות של הקווים נמשכים יחד ואל הקצוות שכבר בשרטוט. צעד ביטול אחד. מחושב במחשב הזה לפי כללים, בלי מודל.

### SCANATTACH והפקודות של השרטוט הסרוק

כינויים: `SCA` ל-{{cmd:SCANATTACH}}, `SCS` ל-{{cmd:SCANSCALE}}, `SCL` ל-{{cmd:SCANALIGN}}, `SCD` ל-{{cmd:SCANDESKEW}}, `SCC` ל-{{cmd:SCANCLEAN}}, `SCR` ל-{{cmd:SCANCROP}}, `SCE` ל-{{cmd:SCANERASE}}, `SCT` ל-{{cmd:SCANTRACE}}, `SCI` ל-{{cmd:SCANINFO}}; ל-{{cmd:RASTERSNAP}} אין כינוי. הן עובדות על תמונה, צעד ביטול אחד כל אחת. {{cmd:SCANATTACH}} מציב PNG, JPEG, TIFF (עמוד אחד או כולם) או עמוד PDF שהוא תמונה. {{cmd:SCANSCALE}} משנה את קנה המידה של הגיליון משתי נקודות שנבחרו והמרחק האמיתי. {{cmd:SCANALIGN}} מזיז ומסובב אותו על שתי נקודות (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} מציג את הזווית של הקווים הארוכים של הגיליון ומסובב אותו אחרי ש-`Accept` או נותנים `Value`. {{cmd:SCANCLEAN}} הופך אותו לשחור-לבן (`Threshold` Auto/Adaptive/Level, `Specks`) ו-`Run`. {{cmd:SCANCROP}} שומר חלון אחד. {{cmd:SCANERASE}} מוחק `Rectangle`, `Polygon` או `Lasso`. {{cmd:SCANTRACE}} מעתיק קווים וקשתות לשכבה חדשה (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) ומדווח מה מצא ומה השאיר כרסטר. {{cmd:SCANINFO}} מציג את הקובץ המקורי והצעדים. {{cmd:RASTERSNAP}} מפעיל או מכבה נעיצה לקווי הגיליונות הסרוקים, On או Off. ראו את הנושא שרטוט סרוק ועקיבה.

### REGEN ו-REGENALL

כינויים: `RE` עבור {{cmd:REGEN}}, `REA` עבור {{cmd:REGENALL}}. בונה מחדש את מה שמצויר על המסך מהשרטוט: {{cmd:REGEN}} את הלשונית שאתם מסתכלים עליה (בגיליון, גם המודל שחלונות התצוגה שלו מציגים), {{cmd:REGENALL}} כל לשונית, כל חלון מפוצל ושרטוט פתוח. השתמשו בהם כשהתמונה נראית ישנה אחרי שינוי מתוסרט או גדול מאוד, או כשעוזר ערך את השרטוט; השרטוט עצמו אינו נוגע בו, כך שאין מה לבטל.

### NAMEDVIEW

כינויים: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, ואז שם התצוגה. `S` שומר את התצוגה שעל המסך, `W` חלון שבוחרים, `R` מציג תצוגה שמורה, `D` מוחק אחת, `?` מציג את התצוגות של הלשונית הזאת. שמירה בשם קיים מחליפה אותו; כל שינוי הוא צעד ביטול אחד. תצוגות שייכות ללשונית שבה נשמרו. קובצי DWG ו-DXF שומרים אותן (טבלת VIEW); תצוגות של גיליון חוזרות בגיליון הראשון, כי הקובץ אינו אומר איזה.

### UNDO ו-REDO

כינויים: `U` עבור {{cmd:UNDO}}; ל-{{cmd:REDO}} אין כינוי. גם {{key:Mod+Z}} ו-{{key:Mod+Y}}.

### LAYER

כינויים: `LA`. קופץ לחלונית {{ui:שכבות}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` או שם (`?` מציג: Continuous, הסוגים של השרטוט, ו-DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE עם גדלי `2` (חצי) ו-`X2` (כפול)). {{cmd:LWEIGHT}} (`LW`): רוחב הקו לעצמים חדשים במ"מ, או `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): קנה מידה של סוגי הקו בשרטוט (ניתן לביטול). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — כמו הלחצן {{ui:LWT}} בשורת המצב. ראו [רוחבי קו וסוגי קו](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, ואז השם החדש; עצמים או הפניות עוקבים. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` עד {{key:Enter}}, ואז `Select object on target layer or [Name]` ו-`Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, ואז `Y`: השכבה וכל עצם עליה יוצאים (לא שכבה 0, DEFPOINTS או השכבה הנוכחית). צעד ביטול אחד לכל אחד. ראו [ארגון שרטוט בשכבות](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

שכבות על ידי בחירת עצמים; גם בתפריט {{ui:כלים}} של חלונית {{ui:שכבות}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, ואז {{key:Enter}}: כל שכבה אחרת כבויה. {{cmd:LAYUNISO}} מדליק אותן שוב. {{cmd:LAYOFF}} ו-{{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (או יוקפא), שוב ושוב; `U` מבטל את האחרון, {{key:Enter}} מסיים. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} מדליק כל שכבה, {{cmd:LAYTHW}} מפשיר כל שכבה. כל פקודה היא צעד ביטול אחד. ראו [ארגון שרטוט בשכבות](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} מתחיל שרטוט ריק ו-{{cmd:OPEN}} פותח DWG או DXF, כל אחד בלשונית משלו מעל השרטוט (לשונית חדשה שלא נגעתם בה משמשת במקום לשונית חדשה). סגירת לשונית עם שינויים שלא נשמרו שואלת קודם. ראו [פיצול המסך](topic:split-screen).

{{cmd:SAVE}} (כינוי `QSAVE`, וגם {{key:Mod+S}}) מוריד עותק בפורמט של השרטוט: DWG אם נפתח מ-DWG, DXF אם מ-DXF. שרטוט חדש משתמש בפורמט שנבחר לאחרונה ב-Save as בדפדפן הזה, אחרת DWG.

{{cmd:SAVEAS}} (וגם {{key:Mod+Shift+S}}) פותח את תיבת הדו-שיח {{ui:שמירת עותק בשם}}: בוחרים {{ui:DWG}} (ואת {{ui:גרסה}} שלו), {{ui:DXF R12}} או {{ui:DXF 2000}}, ואז {{ui:שמירה}}. הבחירה נשארת לשרטוט הזה ולשרטוטים חדשים בדפדפן הזה.

{{cmd:DXFOUT}} מוריד תמיד עותק DXF R12, בלי לשנות את הפורמט ש-{{cmd:SAVE}} משתמש בו.

ראו [קבצים: מה נפתח, מה נשמר](topic:files#saving).

### TOUR

כינויים: `TUTORIAL`. מתחיל שוב את הסיור של שישה צעדים לשרטוט הראשון. ראו [תחילת העבודה](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

כינויים: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. ראו [הגדרות](topic:settings#toolbar-position).

### COMMANDLINE

כינויים: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: מעגן או מציף את שורת הפקודה, הופך אותה לשורה אחת, שואל כמה שורות היסטוריה להציג (0 עד 12), או פותח את ההיסטוריה. ראו [הגדרות](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: הפסים מעל השרטוט כמו שהיו, או קומפקטיים. ראו [הגדרות](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: הצעד שבו חלונית {{ui:Polar}} עוקבת (יותר מ-0, עד 180). נשמר בדפדפן הזה.

### UNITS

כינויים: `UN`. איך אורכים נכתבים ומוקלדים.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural ו-Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. האחרים: `Enter number of decimal places (0 to 8)`.

מידות חדשות עוקבות אחריו. צעד ביטול אחד. זהה ל-{{ui:פורמט אורך}} ו-{{ui:דיוק}} ב-{{ui:הגדרות נוכחיות}}; ראו [רגל ואינץ'](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

כינויים: `GDS`. מציג פריסת IC (קובץ זרם GDSII): ניסוי מעבדה, לצפייה ומדידה בלבד.

- בורר קבצים לוקח קובץ `.gds`; עם כמה תאים עליונים, `Enter the top cell to draw`.
- כל שכבה וסוג נתונים הופכים לשכבת שרטוט (`GDS 1`, `GDS 2/5`), הפניות ומערכים מונחים שטוחים, ביחידת המשתמש של הקובץ (בדרך כלל מיקרומטר). צעד ביטול אחד. שום דבר לא מדומה או נבדק, והקובץ אינו נכתב בחזרה.

### DIAGRAM

כינויים: `TEXTDIAGRAM`, `T2D`. תרשים מטקסט.

- תיבה לוקחת את הטקסט (או שורה אחת עם `;` בין הצהרות בשורת הפקודה): תרשים זרימה של Mermaid, תרשים רכיבים של PlantUML, D2 או רשימת מ-עד.
- `Specify the top left corner of the diagram`, ואז `Specify the text height`.

הבלוקים והחיבורים הם עצמים רגילים בשכבה `Diagram`, והם נבחרים כשהפקודה מסתיימת. צעד ביטול אחד. ראו [ציור תרשים מטקסט](topic:text-to-diagram).

### OLELIST

כינויים: `OLES`. עצמי OLE ששרטוט DWG נושא, ש-CadCraft לא יכול להציב בעצמו.

- מציג כל אחד: מספר, סוג, גודל, והאם נשמרה תמונה שלו.
- `Enter an option [Place/eXit] <eXit>`: Place שואל את המספר, את הפינה השמאלית-תחתונה ואת הרוחב, ומצייר מסגרת עם התמונה. צעד ביטול אחד; העצם השמור אינו משתנה. ראו [תמונות](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

כינויים: `SHX`. גופני SHX משלכם.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:תיקייה}} קורא כל קובץ `.shx` בתיקייה (CadCraft Studio; שוב בכל הפעלה), {{ui:קבצים}} לוקח קבצים שנבחרו (הדפדפן), {{ui:היפוך}} מסדר את האותיות של גופן אחד מהאחרונה לראשונה. סגנונות טקסט ששמם גופן שנטען מציירים בו. ראו [ציור טקסט בגופני SHX משלכם](topic:shx-fonts).

### LIMITS

כמה גדול השרטוט אמור להיות.

- `Specify lower left corner or [ON/OFF] <current>`: נקודה, `ON` או `OFF`.
- `Specify upper right corner <current>`.

הרשת ממלאת את הגבולות, {{cmd:ZOOM}} הכול מציג אותם, ועם הגבולות ON נקודה מחוצה להם נדחית (`**Outside limits`). צעד ביטול אחד; נשמר ב-DWG וב-DXF. ראו [הגדרת גבולות השרטוט](topic:drawing-limits).

### AUNITS

כינויים: `ANGUNITS`. איך זוויות מוצגות ומוקלדות.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, או לשתי האחרות `Enter precision` (0 מעלות, 2 דקות, 4 שניות, 5 עד 8 ספרות של שנייה).

צעד ביטול אחד; נשמר ב-DWG וב-DXF. זהה ל-{{ui:פורמט זווית}} ב-{{ui:הגדרות נוכחיות}}. ראו [הקלדה והצגה של כיוונים וזוויות](topic:bearings-and-angles).

### APPLOAD

כינויים: `AP`; או {{ui:תצוגה}} › {{ui:עוד}} › {{ui:טעינת יישום…}}. תיבת הדו-שיח {{ui:טעינת יישומים}}: טוענים שגרות `.lsp` וקובצי דיאלוג `.dcl`, מפרקים אותם, טוענים שוב מהיסטוריה, וחבילת ההפעלה. פקודות `(defun c:NAME …)` של שגרה עובדות אחר כך כמו כל פקודה אחרת. ראו [טעינת יישומים](topic:load-applications) ו[הרצת שגרות LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (או {{ui:תצוגה}} › {{ui:עוד}} › {{ui:עריכת כינויים…}}) פותח את קובץ הכינויים שלכם (שורות `ALIAS, *COMMAND`); {{ui:שמירה}} מחיל אותו. {{cmd:REINIT}} מחיל אותו שוב. ראו [עריכת כינויי פקודות](topic:command-aliases).

### OPTIONKEYS

כינויים: `OPTKEYS`; או {{ui:הגדרות}} › {{ui:CadCraft}} › {{ui:אותיות אפשרויות}} › {{ui:עריכה…}}. פותח את קובץ אותיות האפשרויות שלכם (שורות `COMMAND.OPTION, LETTERS`, כמו `ARRAY.PO, P`); {{ui:שמירה}} מחיל אותו ו-{{cmd:REINIT}} מחיל אותו שוב. ראו [מתן אותיות משלכם לאפשרויות פקודה](topic:option-letters).

### LISPEDIT

כינויים: `VLIDE`; או {{ui:תצוגה}} › {{ui:עוד}} › {{ui:עורך LISP}}. פותח את עורך ה-LISP, חלון שנשאר פתוח לצד השרטוט.

- הטקסט: מספרי שורות, השותף של הסוגריים ליד הסמן מסומן (באדום כשאין לו), {{key:Enter}} מזיז את השורה החדשה פנימה מתחת לסוגר הפותח, {{key:Tab}} מקליד שני רווחים, {{key:Esc}} עוזב את הטקסט.
- {{ui:טעינה לתוך השרטוט}} ({{key:Ctrl+Shift+Enter}}): קורא כל טופס, כמו ש-{{cmd:APPLOAD}} עושה עם הקובץ, ויוצר את פקודות ה-`c:` שלו. הקובץ מופיע ברשימה של {{cmd:APPLOAD}}.
- {{ui:הרצת הבחירה}} ({{key:Ctrl+Enter}}): מבצע את הטפסים שנבחרו, או את הטופס שבו הסמן.
- {{ui:עצירה}}: מסיים שגרה שרצה.
- {{ui:קונסולה}}: מה שהשגרה הדפיסה, וכל שגיאה עם השורה שלה; לחצו על שגיאה כדי להגיע אליה. הטקסט רץ טופס ברמה עליונה בכל פעם, כך שהשורה היא של הטופס, או בתוכו השורה שקוראת לפונקציה שהשגיאה מציינת.
- {{ui:חדש}}, {{ui:פתיחה}}, {{ui:שמירה}} ({{key:Ctrl+S}}): קובץ `.lsp`. הטקסט נשמר גם בדפדפן הזה, כך שסגירת החלון לא מאבדת אותו.
- ליד הטקסט: הפונקציות שהשגרה מגדירה, אלה שהיא קוראת ו-LISP הזה עדיין אין לו, אלה שהיא קוראת ואינן מוגדרות בה ואינן מובנות, והרשימות המלאות של מה שמובנה ומה לא.

טקסט עם סוגר שאינו נסגר, או מחרוזת שלא מסתיימת, אינו רץ: השורה נקראת בשמה. אין מנפה באגים צעד אחר צעד, נקודות עצירה, או חלון מעקב. ראו [הרצת שגרות LISP](topic:run-lisp).

### HELP

כינויים: `?`. מדפיס כל פקודה, את הכינויים שלה ותיאור של שורה אחת בהיסטוריית שורת הפקודה. היא אינה פותחת את העזרה הזאת: הקישו {{key:F1}} או לחצו על {{ui:עזרה}} בשביל זה.

## הנחיית בחירת עצמים

בכל הנחיית `Select objects`: לוחצים על עצמים, מציירים חלונות (משמאל לימין) וחוצים (מימין לשמאל) בשתי לחיצות, או לוחצים וגוררים לאסו ({{key:Space}} בזמן הגרירה: חלון, חוצה, גדר), {{key:Shift}}+לחיצה להסרה, ולוחצים {{key:Enter}} לסיום. אפשר גם להקליד `ALL` (הכול), `L` (העצם האחרון), `P` (Previous: מה שהפקודה האחרונה השתמשה בו), `F` (Fence: עצמים שקו של נקודות חוצה; `U` מבטל נקודה), `W` (Window), `C` (Crossing), `R` (מצב הסרה: לחיצות מוציאות עצמים; ההנחיה אומרת `Remove objects`) ו-`A` (Add שוב). `?` מציג אותם. הם אינם מוצגים בהנחיה. {{key:Tab}} מעל עצמים חופפים מדגיש את הבא; לחצו כדי לבחור אותו. ראו [בחירת עצמים](topic:select-objects).

### ACCESS

כינוי: `AX`. שרטוט ללא ראייה. {{cmd:ACCESS}} מפעיל או מכבה את הנגישות (`On`, `Off`) ומחליף צלילי נעיצה (`Sound`) ופקודות מדוברות (`Voice`); הוא אומר את המצב קודם. כשהנגישות פועלת, כל פקודה ותוצאה נאמרות דרך קורא המסך שלכם, ולאזור השרטוט יש סמן מקלדת. נושא העזרה "שרטוט ללא ראייה" מכיל את המקשים.

### DESCRIBE

כינוי: `DESC`. אומר מה השרטוט מכיל: כמה עצמים, מאיזה סוג, באיזה גודל, כמה שכבות, מה נבחר. קורא בלבד; לא משנה דבר.

### WHEREAMI

כינוי: `WHERE`. אומר איפה הסמן נמצא, ביחידות השרטוט.

### NEARBY

אומר מה נמצא קרוב לסמן, הקרוב ביותר ראשון, כל אחד עם המרחק שלו והצד שבו הוא נמצא.

### SAYSEL

אומר מה נבחר, משפט אחד לכל עצם (אורך קו, קצוות וזווית; רדיוס מעגל ומרכזו; טקסט כפי שהוא כתוב).

### VOICE

מפעיל או מכבה פקודות מדוברות. הן מזוהות במחשב הזה; איפה שהדפדפן לא יכול לעשות זאת, הקול נשאר כבוי אלא אם בחרתם בשירות המקוון של הדפדפן בהגדרות.

### TOUCHCROSSHAIR

כינוי: `TCX`. הצלב המוזז לשרטוט באצבע, כדי שקצה האצבע לא יכסה את הנקודה שבוחרים. כשהוא פועל, אצבע אחת על השרטוט לא בוחרת: היא מזיזה צלב שיושב מעל האצבע ולצדה. נעיצות לאובייקטים ומעקב עוקבים אחרי הצלב. הרמת האצבע אינה בוחרת דבר, והצלב נשאר במקומו. כדי לבחור, לחצו על הלחצן {{ui:לחיצה}} בפינת השרטוט, או הקישו בכל מקום בשרטוט באצבע שנייה. החזיקו את {{ui:לחיצה}} בזמן שאתם מזיזים את האצבע השנייה כדי לגרור (חלון בחירה, לאסו, ידית). אצבע שמוחזקת בלי זזה, או לחצן {{ui:Enter}}, הם Enter. שתי אצבעות מזיזות ומגדילות כרגיל. ליד הקצה התחתון וקצה הצד הרחוק, הצלב מתקרב אל האצבע, כך שכל חלק של השרטוט אפשר להגיע אליו. עט ועכבר תמיד בוחרים ישירות.

{{cmd:TOUCHCROSSHAIR}} אומר את המצב ושואל `ON`, `OFF`, `Auto` (פועל רק איפה שאצבע היא המצביעה היחידה, כך שהוא כבוי במחשב עם עכבר), `Distance` (כמה רחוק הצלב יושב מהאצבע, 24 עד 240 פיקסלים) או `Side` (`Left`: למעלה ושמאלה, ליד היד הימנית; `Right` ליד היד השמאלית; הלחצנים עוברים לפינה האחרת). אותן בחירות נמצאות ב-הגדרות › CadCraft, ובמכשיר עם מסך מגע יש בשורת המצב מתג {{ui:צלב הכוונה מוזז}}. הבחירות נשמרות בדפדפן הזה.

### WHOHAS

אומר מי פתח שרטוט. ב-CadCraft Studio במחשב, פתיחת DWG או DXF כותבת קובץ נעילה קטן לצדו (`Plan.dwg.cclock`: מי, מאז מתי, איזו גרסה), מרעננת אותו כל דקה בזמן שהשרטוט פתוח, ומסירה אותו כשהשרטוט נסגר. פתיחת שרטוט שאדם אחר פתח אומרת מי ומאז מתי, ומציעה {{ui:פתיחה לקריאה בלבד}} (השמירה אז מבקשת שם חדש), {{ui:פתיחה בכל זאת}} (האדם האחר מקבל הודעה ברענון הבא שלו) או {{ui:ביטול}}. שמירה מעל קובץ שמישהו אחר פתח שואלת קודם. נעילה שלא רועננה חמש דקות נחשבת מיושנת: העותק האחר נסגר בלי לשמור, או שהמחשב במצב שינה.

{{cmd:WHOHAS}} שואל `Current` (השרטוט הפתוח), `File` (בחירה), `FOlder` (בחירת תיקייה: כל שרטוט בה שפתוח איפשהו מוצג), `Path` (הקלדת נתיב מלא) או `Name` (השם שאחרים רואים; שם החשבון שלכם כשאתם מחוברים). Studio יכול להגיע רק לתיקיות שבחרתם: לשרטוט שנפתח מתיקייה שמעולם לא נבחרה הוא אומר פעם אחת שאינו יכול לרשום את השרטוט כפתוח; `FOlder` בוחר את התיקייה, והנעילות עובדות שם מאז. הנעילה היא הערה לאנשים, לא מחסום: תוכנה אחרת עדיין יכולה לכתוב את הקובץ. בדפדפן אין תיקיות לחפש בהן, והפקודה אומרת זאת.

### OVERKILL

מוחק עצמים כפולים ומסדר קווים וקשתות שחופפים, לשרטוטים שמגיעים מלאים בקווים כפולים. `Select objects to clean up`, {{key:Enter}}, ואז {{key:Enter}} שוב כדי לנקות עם ההגדרות המוצגות, או לשנות אחת קודם:

- `Tolerance`: כמה קרובות שתי קואורדינטות חייבות להיות כדי להיחשב זהות (0.000001 בהתחלה; 0 פירושו זהה בדיוק).
- `Ignore`: מאפיינים שעשויים להיות שונים בין שני עצמים שאחרת זהים. מקלידים שם כדי להחליף: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, או `None` / `All`. {{key:Enter}} כשמסיימים.
- `Overlap`: פעיל או כבוי. כשהוא פעיל, קווים על קו ישר אחד שחופפים הופכים לקו אחד (קו שנמצא בתוך אחר פשוט נמחק), וקשתות על מעגל אחד שחופפות הופכות לקשת אחת; קשתות שסוגרות סיבוב שלם הופכות למעגל, וקשת שנמצאת על מעגל נמחקת.
- `Ends`: פעיל או כבוי. כשהוא פעיל, קווים על קו ישר אחד וקשתות על מעגל אחד שנוגעים רק קצה לקצה הופכים לחתיכה אחת.

כל סוג של עצם נבדק לכפילויות: שני עצמים הם כפולים כשהגיאומטריה שלהם זהה בתוך הסבילות, והשכבה, הצבע, סוג הקו, קנה המידה של סוג הקו, רוחב הקו, העובי, השקיפות והגובה שלהם תואמים (פחות אלה שהתעלמתם מהם). קווים ופוליליינים פתוחים מתאימים גם כשהם מצוירים בכיוון ההפוך. הפקודה מדווחת כמה עצמים נבדקו ונמחקו: כפולים, קטעים חופפים שמוזגו, וקטעים שחוברו קצה לקצה. {{cmd:UNDO}} אחד מחזיר הכול. ההגדרות נשארות עד שסוגרים את חלון השרטוט.

היא משאירה בשקט: עצמים על {{ui:שכבות נעולות}} ועצמים נסתרים. היא אינה ממזגת קווים בעלי גובה (Z) (כפולים מדויקים שלהם עדיין יוצאים), והיא אינה נוגעת בקטעים בתוך פוליליין (הם אינם מדוללים), בקו שנמצא על קטע של פוליליין, או בפוליליין סגור שצויר בכיוון ההפוך.

### DRAWORDER

משנה אילו עצמים מצוירים מלפנים. `Select objects to re-order`, {{key:Enter}}, ואז `Above objects`, `Under objects`, `Front` או `Back` ({{key:Enter}} = `Back`). `Above objects` ו-`Under objects` שואלים את עצמי ההתייחסות: הבחירה נכנסת ממש מלפני החזיתי מביניהם, או ממש מאחורי האחורי מביניהם. העצמים שנבחרו שומרים על הסדר שלהם ביניהם. צעד ביטול אחד. הסדר נשמר עם השרטוט ב-DWG וב-DXF, שם הוא הסדר שבו העצמים נכתבים.

על המסך כל עצם מצויר לפי סדר השרטוט, כפי שתוכנות אחרות שפותחות את הקובץ מציירות אותו: קווקוו מלא, פוליליין רחב או מסכת טקסט מכסים את הקווים והטקסט שמאחוריהם, ומה שמלפנים מכסה אותו. במקום שקו חוצה טקסט, שניהם נראים. תמונות ודפי PDF מצורפים נשארים מתחת לקווים. בשרטוט גדול מאוד שבו מילויים וקווים חופפים ומתחלפים יותר מ-256 פעמים, 256 הראשונים שומרים על הסדר שלהם, והשאר מציירים את המילויים שלהם מתחת לקווים, כדי שציור מחדש יישאר מהיר.

### TEXTTOFRONT

מביא את כל הטקסט, המידות והמובילות לחזית, לפני כל השאר במרחב הפתוח: `Text`, `Dimensions`, `Leaders` או `All` ({{key:Enter}} = `All`). צעד ביטול אחד. אומרת זאת כשאין כאלה, או כשהם כבר בחזית.

### HATCHTOBACK

שולח כל קווקוו של המרחב הפתוח מאחורי כל השאר, כך שמילויים מפסיקים לכסות קווים וטקסט בקובץ השמור. בלי שאלות. צעד ביטול אחד.

### ISOLATEOBJECTS

כינוי: `ISOLATE`. מציג רק את העצמים שנבחרו: כל השאר במרחב הפתוח יוצא מהעין עד {{cmd:UNISOLATEOBJECTS}}. בשונה מ-{{cmd:LAYISO}}, היא עובדת על העצמים שאתם בוחרים, בלי קשר לשכבות שלהם, ואינה משנה שכבה. עצמים נסתרים אינם מצוירים, נבחרים, נינעצים, מותאמים בזום או מודפסים, ופקודות שלוקחות `ALL` מדלגות עליהם. מה שאתם מציירים בזמן שעצמים מבודדים מוצג כרגיל.

זה לסשן בלבד: שום דבר לא נשמר עם השרטוט, זה אינו צעד ביטול, ופתיחה מחדש של השרטוט מציגה הכול. כשעצמים מוסתרים שורת המצב מציגה לחצן עם המספר שלהם; לחצו עליו כדי להציג אותם שוב.

### HIDEOBJECTS

מסתיר את העצמים שנבחרו עד {{cmd:UNISOLATEOBJECTS}}. אותם כללים כמו {{cmd:ISOLATEOBJECTS}}: לסשן בלבד, לא נשמר, לא צעד ביטול.

### UNISOLATEOBJECTS

כינויים: `UNISOLATE`, `UNHIDE`. מציג שוב כל עצם שהוסתר על ידי {{cmd:ISOLATEOBJECTS}} או {{cmd:HIDEOBJECTS}}, ואומר כמה חזרו.

### LAYLOCKFADE

קובע איך עצמים על שכבות נעולות נראים, ואם לחיצה מגיעה אליהם. היא אומרת את המצב הנוכחי, ואז לוקחת:

- מספר מ-0 עד 90: כמות הדהייה באחוזים (50 בהתחלה). 0 מכבה את הדהייה.
- `ON` או `OFF`: דהייה פעילה או כבויה, והכמות נשמרת.
- `Pick`, ואז `Yes` או `No`: האם לחיצה יכולה לבחור עצמים על שכבות נעולות כשאין פקודה פועלת? `No` (ברירת המחדל): אי אפשר לבחור בהם כלל. `Yes`: לחיצה או חלון בוחרים אותם כדי ש-{{ui:מאפיינים}} יוכל להציג אותם; עדיין אי אפשר לשנות אותם, ו-`Select objects` של פקודה אינו לוקח אותם לעולם.

נעיצות לעצמים מוצאות עצמים על שכבות נעולות בכל מקרה. הדפסות לעולם אינן דהויות. שתי ההגדרות הן שלכם, לא של השרטוט, וגם מופיעות ב-{{ui:הגדרות}} תחת {{ui:שכבות נעולות}}.

### BURST

מפרק הפניות בלוק ושומר על מה שהתכונות שלהן אומרות. `Select block references to burst`, {{key:Enter}}: כל הפניה מוחלפת בעצמי הבלוק, וכל ערך של תכונה נראית הופך לטקסט רגיל בשכבה של אותה תכונה (תכונה על שכבה 0 נוחתת בשכבת ההפניה, כמו שאר עצמי הבלוק על שכבה 0). תכונות בלתי נראות נמחקות. בלוק בתוך הבלוק נשאר הפניית בלוק. צעד ביטול אחד; היא מדווחת כמה הפניות פורקו וכמה ערכי תכונות הפכו לטקסט.

היא דוחה שרטוט מקושר בשמו (קשרו אותו קודם, או העתיקו ממנו עם {{cmd:NCOPY}}), ומשאירה עצמים אחרים שנבחרו כמו שהם. להפניות בלוק, {{cmd:EXPLODE}} נותן את אותם עצמים; {{cmd:BURST}} לוקח רק הפניות בלוק וסופר את טקסט התכונות.

### TXT2MTXT

כינוי: `T2M`. מחבר טקסטים בשורה אחת לטקסט פסקה אחד. `Select single-line text to join`, {{key:Enter}}, ואז `Paragraph` (השורות נמשכות יחד ונשברות ברוחב השורה הרחבה ביותר) או `Lines` (כל טקסט נשאר שורה משלו); {{key:Enter}} לוקח את זה שנעשה בו שימוש לאחרונה. השורות מסודרות מלמעלה למטה, ואז משמאל לימין, לאורך כיוון הטקסט העליון. הפסקה תלויה מהפינה השמאלית-עליונה של הטקסט העליון, ולוקחת את הגובה, הסיבוב, הסגנון, השכבה והצבע שלו. צעד ביטול אחד.

טקסט שכבר הוא טקסט פסקה, טקסט ריק ועצמים אחרים בבחירה נשארים כמו שהם, והפקודה אומרת כמה.

### NCOPY

מעתיק עצמים מתוך הפניית בלוק או שרטוט מקושר לשרטוט, בלי לפרק דבר. `Pick an object inside a block reference or a linked drawing`: העצם הקרוב ללחיצה מועתק במקום שבו הוא מופיע, עד כמה רמות בלוק הוא יושב; לוחצים עוד, ואז {{key:Enter}}. ואז `Base point to move the copies`: {{key:Enter}} משאיר אותם במקום, או נותנים נקודת בסיס ונקודה שנייה. כל הפקודה היא צעד ביטול אחד.

עותק לוקח את השכבה שבה הוא מופיע: עצם על שכבה 0 בתוך בלוק נוחת על השכבה של ההפניה שבה ישב, וצבע ByBlock הופך לצבע של אותה הפניה. משרטוט מקושר, שכבה `Plan|Walls` הופכת ל-`Plan$0$Walls` (השם שהקישור נותן לה), ונוצרת עם הצבע, סוג הקו ורוחב הקו של השכבה המקושרת. ערך תכונה מועתק כטקסט. הפניות בלוק על שכבות נעולות אי אפשר לבחור.

### FLATTEN

קובע את הגובה (Z) ואת העובי של העצמים שנבחרו ל-0. `Select objects to flatten`, {{key:Enter}}. הפקודה מישרה גם את העצמים בתוך הגדרות הבלוק שהבחירה משתמשת בהם (ואת הבלוקים שבתוכם), כך שכל הפניה לבלוקים האלה משתנה; שרטוטים מקושרים נשארים כמו שהם. צעד ביטול אחד; היא מדווחת כמה עצמים השתנו, ואומרת כשלאף אחד לא היה גובה או עובי.

מה ש-CadCraft שומר מהממד השלישי בשרטוט דו-ממדי הוא: גובה על מעגלים, קשתות, אליפסות, נקודות, טקסט, הפניות בלוק, קווקווים, מובילות ופוליליינים (הגובה שלהם), גובה בכל קצה של קו, ועובי על קווים, מעגלים, קשתות, פוליליינים, נקודות וטקסט, כפי שהקובץ החזיק אותם. {{cmd:FLATTEN}} מנקה בדיוק את אלה. היא אינה נוגעת במודל התלת-ממדי שבלשונית התלת-ממד, בפאות תלת-ממדיות או בגופים מוצקים, ועצם שצויר במישור נטוי כבר הובא למישור השרטוט כשהקובץ נפתח.

### BREAKLINE

מצייר קו עם סמל שבירה, לחתך של תצוגה שנחתכה קצרה. היא אומרת את הגודל הנוכחי ואת ההמשך, ואז `First point of the break line` (או `Size` / `Extension` כדי לשנותם קודם), `Second point`, ו-`Where the break symbol sits`: לחצו לאורך הקו, או {{key:Enter}} לאמצע. התוצאה היא פוליליין אחד בשכבה הנוכחית: הקו, שעובר מעבר לכל נקודה במרחק ההמשך, עם קו בצורת Z בגודל הגובה שלו וחצי מאורכו.

`Size` ו-`Extension` נזכרים כהגדרות שלכם (הגודל מתחיל בפי שניים מגובה הטקסט של המידה כפול גורם קנה המידה של המידה; ההמשך בחצי מהגודל). {{key:Enter}} מריץ את הפקודה שוב.

### AUDIT

בודק את השרטוט הפתוח אם יש בו נזק ומתקן אותו. {{cmd:AUDIT}} בוחן כל עצם במודל, בגיליונות ובתוך בלוקים, וגם את טבלת השכבות, ומפרט מה נמצא לפי סוג:

- מספרים שאינם סופיים או גדולים בצורה מגוחכת;
- עצמים ללא גודל: קו באורך 0, מעגל ללא רדיוס, פוליליין עם נקודה אחת, טקסט בלי אותיות או גובה, הפניית בלוק בקנה מידה 0;
- עצמים על שכבה שאין לשרטוט; הפניות לבלוק שאינו שם; שמות של סגנוני טקסט ומידות ושמות סוגי קו שאינם בשרטוט;
- בלוקים שמכילים את עצמם, ישירות או דרך בלוקים אחרים;
- עצמים ששותפים למזהה, למפתח או ל-file handle;
- מידות בלי הנקודות שהן נמדדות מהן, וקווקווים שהגבול שלהם אינו קו מתאר סגור.

ואז היא שואלת `Fix them? [Yes/No]`. `No` אינו משנה דבר. `Yes` מתקן הכול בצעד ביטול אחד: מה שאי אפשר לצייר מוסר (מספרים גרועים, ללא גודל, בלוק חסר, מידה שבורה, קווקוו בלי גבול שמיש, ההפניה שסוגרת מעגל של בלוקים); שכבה חסרה נוצרת; שמות סגנונות וסוגי קו לא מוכרים חוזרים לברירות המחדל; מפתח משותף מוחלף. היא מדפיסה כמה עצמים הוסרו וכמה תוקנו. אותם ממצאים מופיעים בחלונית הבעיות, כל אחד עם {{ui:תיקון}} משלו.

היא אינה דוחה דבר, אבל בודקת רק מה ש-CadCraft עצמו מצייר: נתונים ששמורים לתוכנות אחרות (גופים תלת-ממדיים, עצמי OLE) אינם נפתחים.

### RECOVER

פותח DXF או DWG פגום. {{cmd:RECOVER}} שואל את הקובץ, קורא מה שאפשר לקרוא במקום לסרב לקובץ, מציג מה דולג או הונח, ואז בודק ומתקן את השרטוט כמו {{cmd:AUDIT}} עם `Yes`.

- DXF: שורות שאינן חלק מזוג קוד וערך מדולגות עד שהזוגות מתיישרים שוב; מדור בלי סוף נסגר; קובץ שנקטע נקרא עד הקטע; DXF בינארי שנקטע נקרא עד הערך השלם האחרון. כשמדור, בלוק או עצם עדיין לא נקראים, הם מושמטים ונקראים בשמם, והקריאה ממשיכה הלאה.
- DWG: עצמים שנכשלים בבדיקות שלהם או שאי אפשר לפענח מושמטים, ורשימת עצמים שאבדה נבנית מחדש על ידי מעבר על נתוני העצמים.

הקובץ על הדיסק אינו משתנה. השרטוט המשוחזר נפתח בלי שמירה: שמרו אותו בשם חדש. קובץ שממנו אי אפשר לקרוא דבר בכלל נדחה, והסיבה מוצגת.

### LEGACYTEXT

ממיר טקסט שהוקלד בגופנים ויאטנמיים ישנים בני 8 סיביות ל-Unicode. שמות קצרים: `TEXTTOUNICODE` ו-`VNTEXT`.

שרטוטים ויאטנמיים ישנים מחזיקים את הטקסט שלהם כתווים מערביים שרק הגופן הופך לוויאטנמית: טקסט TCVN3 בגופני ABC (`.VnTime`, `.VnArial`, והגופנים באותיות גדולות ששמם מסתיים ב-`H`), וטקסט VNI בגופני VNI (`VNI-Times`). CadCraft מציג טקסט כזה כפי שהוא נקרא ברגע שהשרטוט נפתח, לפי הגופן של סגנון הטקסט, של העצם, או של קטע בתוך טקסט פסקה; הקובץ עדיין מחזיק את התווים הישנים.

{{cmd:LEGACYTEXT}} אומר כמה טקסטים נמצאו בכל קידוד ושואל `Convert … to Unicode?`. `Yes` כותב מחדש כל אחד (מודל, גיליונות, בלוקים, ערכי תכונות והגדרות) ונותן לסגנונות הטקסט גופן Unicode (Times New Roman, Arial או Courier New לפי סוג הגופן הישן), בצעד ביטול אחד. עיצוב בתוך טקסט פסקה נשמר.

כשאף טקסט אינו משתמש בגופן מוכר (סגנון שאיבד את שם הגופן שלו), היא שואלת `Read selected texts as [Tcvn3/Vni/None]`: בוחרים את הקידוד ואת הטקסטים. טקסט שכבר ב-Unicode נשאר כמו שהוא. טקסט עקיף של מידה ותוכן מובילה מרובה אינם מומרים.
