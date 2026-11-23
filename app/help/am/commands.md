---
title: የትዕዛዝ ማጣቀሻ
summary: በCadCraft ረቂቅ መተግበሪያ ያለ እያንዳንዱ ትዕዛዝ ከተለዋጭ ስሞቹ፣ ከሚጠይቃቸው ጥያቄዎች፣ ከአማራጮቹና ከነባሪዎቹ ጋር።
keywords: ትዕዛዞች, ተለዋጭ ስሞች, የትዕዛዝ ዝርዝር, ስፋት, ዙሪያ, measuregeom, መስመር, pline, ክብ, ቅስት, trim, offset, dimlinear, ብሎክ, insert, አቀማመጥ, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

የትዕዛዝ ስም ወይም ተለዋጭ ስም ይጻፉ እና {{key:Enter}} ወይም {{key:Space}} ይጫኑ። ፊደል ትልቅ ወይም ትንሽ መሆኑ ምንም አይለውጥም፣ እና በፊት ያለ `_`፣ `-`፣ `.` ወይም `'` ችላ ይባላል። በትዕዛዝ መስመሩ ታሪክ ውስጥ የሁሉንም ትዕዛዞች አጭር ዝርዝር ለማተም `HELP` (ወይም `?`) ይጻፉ፤ ይህን እገዛ ለማየት {{key:F1}} ይጫኑ።

ጥያቄዎቹን እንዴት እንደሚያነቡ፦ አማራጮች በካሬ ቅንፍ ውስጥ ናቸው፣ እና አንዱን ለመምረጥ ትልልቅ ፊደሎቹን ይጻፉ (ለዲያሜትር `D`)። ነባሪው በሾለ ቅንፍ ውስጥ ነው፤ ለመቀበል {{key:Enter}} ይጫኑ። ነጥብ በሚጠየቅበት ቦታ ጠቅ ማድረግ ወይም በ[የመጋጠሚያ እና ርቀት ግቤት](topic:coordinate-entry) ውስጥ ያሉትን ማንኛውንም ቅርጸቶች መጻፍ ይችላሉ። ርቀት በሚጠየቅበት ቦታ ቁጥር መጻፍ ወይም ሁለት ነጥቦችን ጠቅ ማድረግ ይችላሉ።

ነጥብ ወይም ነገር በሚያስፈልግበት ቦታ {{key:Enter}} ቢጫኑ፣ እና ነባሪ ከሌለ፣ ትዕዛዙ ይጠናቀቃል። {{key:Esc}} ይሰርዘዋል። ትዕዛዙ ያደረገው ሁሉ አንድ የቀልብስ ደረጃ ነው።

## ይሳሉ

### LINE

ተለዋጭ ስሞች፦ `L`። ቀጥ ያሉ ክፍሎች፣ እያንዳንዳቸው የራሳቸው ነገር።

- `Specify first point` (Enter፦ ከመጨረሻ የሰጡት ነጥብ ጀምር)
- `Specify next point [Undo]`፣ ተደግሞ። ከሁለት ክፍሎች በኋላ፦ `[Undo/Close]`።
- `U` የመጨረሻውን ክፍል ይመልሳል፣ `C` ወደ መጀመሪያው ነጥብ ዘግቶ ይጨርሳል። Enter ይጨርሳል።

### PLINE

ተለዋጭ ስሞች፦ `PL`። ከመስመርና ቅስት ክፍሎች የተሠራ አንድ ፖሊላይን።

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (ሁለት ክፍሎች ሲኖሩ Close)
- `A` ወደ ቅስቶች ይቀይራል፦ `Specify endpoint of arc [Line/CLose/Undo]`። እያንዳንዱ ቅስት ከቀደመው ክፍል ጋር ታንጀንት ሆኖ ይቀጥላል። `L` ወደ መስመሮች ይመልሳል፣ `CL` በቅስት ይዘጋል።
- Enter ይጨርሳል፤ ፖሊላይኑ ክፍት ይቀራል።

### CIRCLE

ተለዋጭ ስሞች፦ `C`።

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`፤ `D` `Specify diameter of circle` ብሎ ይጠይቃል።
- `2P`፦ የዲያሜትር ሁለት ጫፎች። `3P`፦ በክቡ ላይ ሦስት ነጥቦች።
- `T` (እንዲሁም ትዕዛዙ `TTR`፣ እና {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}})፦ `Specify point on object for first tangent of circle`፣ ከዚያ ሁለተኛው፣ ከዚያ ራዲየሱ (Enter፦ የመጨረሻው)። ክቡ ሁለቱንም ነገሮች ይነካል (መስመሮች፣ ቅስቶች፣ ክቦች፣ የፖሊላይን ክፍሎች፣ በብሎኮች ውስጥም)፤ ከሚነኩት ክቦች የመረጡትን ይነካው የቀረበው ይሆናል። ምንም ካልተስማማ "Circle does not exist" ይላል።
- `TTT` (ወይም {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}})፦ ሦስት ነገሮች፤ ሦስቱንም የሚነካው ክብ፣ ከመረጡት ቅርብ (ሦስት መስመሮች ውስጣዊ ክብ ወይም ውጫዊ ክብ ይሰጣሉ፣ በየት እንደሚመርጡ ይወሰናል)።

### ARC

ተለዋጭ ስሞች፦ `A`።

- `Specify start point of arc [Center]`፣ `Specify second point of arc`፣ `Specify end point of arc`፦ በሦስት ነጥቦች በኩል ቅስት።
- `C`፦ `Specify center point of arc`፣ `Specify start point of arc`፣ `Specify end point of arc`። ቅስቱ ከመነሻ እስከ መጨረሻ ሰዓት ተቃራኒ አቅጣጫ ይሄዳል።

### RECTANG

ተለዋጭ ስሞች፦ `REC`፣ `RECTANGLE`። ዝግ ፖሊላይን።

- `Specify first corner point`፣ `Specify other corner point`። ለሁለተኛው ማዕዘን `@width,height` ይጻፉ።

### POLYGON

ተለዋጭ ስሞች፦ `POL`። መደበኛ ፖሊጎን እንደ ዝግ ፖሊላይን።

- `Enter number of sides <4>` (3 እስከ 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`፦ ጠቅ ያድርጉ ወይም ነጥብ ይጻፉ፤ ርቀቱ መጠኑን ይወስናል፣ አቅጣጫው ፖሊጎኑን ያዞራል።

### ELLIPSE

ተለዋጭ ስሞች፦ `EL`።

- `Specify axis endpoint of ellipse [Center]`፣ `Specify other endpoint of axis`፣ `Specify distance to other axis`
- `C`፦ `Specify center of ellipse`፣ `Specify endpoint of axis`፣ ከዚያ ወደ ሌላው ዘንግ ያለው ርቀት።
- `I` (`Isocircle`፣ {{cmd:ISODRAFT}} በርቶ ሲሆን ብቻ)፦ ማዕከል፣ ከዚያ ራዲየስ ወይም `Diameter`፦ ክብ በአሁኑ ኢሶሜትሪክ አውሮፕላን ላይ የሚታይበት ኤሊፕስ።

### HATCH

ተለዋጭ ስሞች፦ `H`፣ `BH`፣ `BHATCH`፤ ወይም በመሳሪያ አሞሌው {{ui:Hatch}}። መጀመሪያ የአሁኑን ጥለት፣ ስኬልና አንግል ያትማል።

- `Pick internal point [Select objects/Pattern/SCale/Angle]`፣ ተደግሞ (`Undo` አንድ ቦታ ካለ)፦ እያንዳንዱ ጠቅታ ዙሪያውን ዝግ ቦታ ይጨምራል፣ ውስጡ ያሉት ዝግ ቅርጾች እንደ ደሴቶች። Enter ሁሉንም ወደ አንድ ሀች ያደርጋል።
- `S`፦ `Select closed objects` (ዝግ ፖሊላይኖች፣ ክቦች፣ ዝግ ኤሊፕሶች)።
- `P`፦ `Enter a pattern name, SOLID, or ? for the list <current>`። `SC`፦ `Specify pattern scale`። `A`፦ `Specify pattern angle`።
- `G` (Gradient)፦ መሙላቱ ጥለት ሳይሆን ግራዲየንት ነው። ጥያቄዎቹን በ{{cmd:GRADIENT}} ይመልከቱ።

ይመልከቱ [ሀች እና የመሙያ ቦታዎች](topic:hatch)።

### GRADIENT

ተለዋጭ ስሞች፦ `GD`። ቦታን በአንድ ወይም በሁለት ቀለሞች ግራዲየንት ይሞላል። መጀመሪያ ግራዲየንቱን ይጠይቃል፣ ከዚያ {{cmd:HATCH}} እንደሚያደርገው ይቀጥላል (`Pick internal point`፣ ዝግ ነገሮች ለ`S`፣ {{key:Enter}} ለመጨረስ)።

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`፣ ተደግሞ፤ ግራዲየንቱን አሁን ባለበት ሁኔታ በእያንዳንዱ ጊዜ ያትማል።
- `T`፦ `LINEAR`፣ `CYLINDER`፣ `SPHERICAL`፣ `HEMISPHERICAL`፣ `CURVED`፣ ወይም ከእነሱ አንዱ ተገልብጦ (`INVCYLINDER`፣ `INVSPHERICAL`፣ `INVHEMISPHERICAL`፣ `INVCURVED`)። የመጀመሪያ ፊደሎቹ ይበቃሉ።
- `O`፦ አንድ ቀለም፣ ከዚያ ደብዘዝ ከ0 እስከ 1። `TW`፦ የመጀመሪያው እና ሁለተኛው ቀለም። ቀለም ከ1 እስከ 255 ቁጥር፣ እንደ `255,128,0` ሦስት ቁጥሮች፣ ወይም `#rrggbb` ነው። (0 ወደ ጥቁር ያጨልማል፣ 0.5 ቀለሙ ራሱ ነው፣ 1 ወደ ነጭ ይነጣል።)
- `A`፦ ግራዲየንቱ የሚሄድበት አንግል። `C`፦ መሃል ላይ ይሁን ወይም አይሁን (No መሃሉን ወደ አንድ ጎን ያንቀሳቅሳል)።
- የማያውቀውን ቀለም ወይም ዓይነት፣ እና ከ0 እስከ 1 ውጭ ያለ ደብዘዝ ውድቅ ያደርጋል።

{{cmd:HATCHEDIT}} `G` እና Properties (Gradient) ግራዲየንቱን በኋላ ይለውጣሉ፣ ወይም ማንኛውንም ሀች ወደ ግራዲየንት ይለውጣሉ። ግራዲየንት በማያ ገጹ ላይ ይሳላል እና ይታተማል። DWG 2004 እና ከዚያ በኋላ እውነተኛ ግራዲየንት ሀች አድርገው ያቆዩታል፤ DXF 2000 እና DWG 2000 ለCadCraft ያቆዩታል፣ ሌሎች ፕሮግራሞች ግን በመጀመሪያው ቀለም ጠንካራ መሙላት ያያሉ።

### HATCHGENERATEBOUNDARY

ተለዋጭ ስሞች፦ `HGB`። ድንበሩን ከሀች ዳግም ይሠራል፣ ከእሱ ጋር የተገናኘ ወይም ያልተገናኘ። `Select hatches` (ወይም አስቀድመው ይምረጡ)፣ ከዚያ `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`።

- የሀቹ እያንዳንዱ ዙር በሀቹ ንብርብር ላይ ዝግ ፖሊላይን ይሆናል፤ አዲሶቹ ፖሊላይኖች ይመረጣሉ። የተጠማዘዘ ጠርዝ ሀቹ የሚይዛቸው አጭር ቀጥ ያሉ ክፍሎች ሆኖ ይመለሳል።
- በ Yes ሀቹ እንደ {{cmd:HATCH}} የሠራው ሀች ሁሉ አዲሱን ድንበሩን ይከተላል። አንድ የቀልብስ ደረጃ።
- ምንም ሀች ካልተመረጠ ይናገራል።

### POINT

ተለዋጭ ስሞች፦ `PO`፤ ወይም {{ui:Draw}} › {{ui:More}} › {{ui:Point}}። የነጥብ ነገሮች፣ በእያንዳንዱ ጠቅታ አንድ፣ Enter እስኪጫን ድረስ።

- `Specify a point`

### XLINE

ተለዋጭ ስሞች፦ `XL`፤ ወይም {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}። የግንባታ መስመሮች፣ በሁለቱም አቅጣጫ ወሰን የሌላቸው። [የግንባታ መስመሮችና ጨረሮች](topic:construction-lines) ይመልከቱ።

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`፣ ከዚያ `Specify through point` ለእያንዳንዱ መስመር፣ Enter እስኪጫን ድረስ።
- `A`፦ `Enter angle of construction line [Reference] <0>`፤ `R` መጀመሪያ `Select a line object` ብሎ ይጠይቃል።
- `B`፦ `Specify angle vertex point`፣ `Specify angle start point`፣ ከዚያ ለእያንዳንዱ መስመር `Specify angle end point`።
- `O`፦ `Specify offset distance [Through] <Through>`፣ ከዚያ ለእያንዳንዱ መስመር `Select a line object` እና `Specify side to offset` (ወይም `Specify through point`)።

### RAY

ተለዋጭ ስሞች የሉትም፤ ወይም {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}። `Specify start point`፣ ከዚያ ለእያንዳንዱ ጨረር `Specify through point`፣ Enter እስኪጫን ድረስ።

### TEXT

ተለዋጭ ስሞች፦ `DT`፣ `DTEXT`፤ ወይም በመሳሪያ አሞሌው {{ui:Text}}። ነጠላ መስመር ጽሑፍ፤ እያንዳንዱ መስመር የራሱ ነገር ነው።

- `Specify start point of text [Justify]`
- `J`፦ `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`፣ ከዚያ `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`፣ ተደግሞ፦ እያንዳንዱ Enter ከታች ያለውን ቀጣይ መስመር ይጀምራል። ባዶ መስመር ላይ Enter ይጨርሳል። {{key:Space}} እዚህ ክፍተት ይጽፋል።

### DIVIDE

ተለዋጭ ስሞች፦ `DIV`። {{cmd:DIVIDE}} በመስመር፣ ቅስት፣ ክብ፣ ፖሊላይን፣ ስፕላይን ወይም ኤሊፕስ ላይ እኩል ክፍሎች የሚቆርጡ ምልክቶች ያስቀምጣል። ነገሩን ይምረጡ፣ ከዚያ የክፍሎቹን ብዛት ይስጡ (2 እስከ 32767)። ክፍት ነገር ከክፍሎቹ ያነሰ አንድ ምልክት ያገኛል፤ ዝግ ነገር ደግሞ በመጀመሪያውም ላይ ምልክት ያገኛል። ነገሩ ራሱ አይቆረጥም። ምልክቶቹ ነጥቦች ናቸው፤ `Block` ከዚህ ንድፍ ብሎክ ይጠይቃል በምትኩ፣ እና ነገሩን ተከትሎ ይዞር እንደሆነ። በስፕላይኖችና ኤሊፕሶች ርዝመቶች አጭር ቾርዶች ላይ ይለካሉ። ጽሑፍን፣ ሀችን እና ርዝመት የሌላቸውን ሌሎች ነገሮችን ውድቅ ያደርጋል።

### MEASURE

ተለዋጭ ስሞች፦ `ME`። {{cmd:MEASURE}} በመስመር፣ ቅስት፣ ክብ፣ ፖሊላይን፣ ስፕላይን ወይም ኤሊፕስ ላይ በተሰጠው ርዝመት ምልክት ያስቀምጣል፣ ከመረጡበት ቅርብ ጫፍ ይቆጠራል (ዝግ ነገር፦ ከመነሻው)። ርዝመቱን ይጻፉ ወይም በሁለት ነጥቦች ይስጡ። የክፍት ነገር ሩቅ ጫፍ ምልክት አያገኝም። `Block` በእያንዳንዱ ምልክት ነጥብ ፋንታ ብሎክ ያስቀምጣል። ርዝመት 0፣ ከነገሩ የሚበልጥ፣ ወይም ከ32767 በላይ ምልክቶች የሚያደርግ ርዝመት ውድቅ ያደርጋል።

### BOUNDARY

ተለዋጭ ስሞች፦ `BO`፣ `BPOLY`። {{cmd:BOUNDARY}} የመረጡትን ነጥብ የያዘውን ቦታ ዙሪያ ዝግ ፖሊላይን ይሠራል፤ በማያ ገጹ ላይ ድንበሩን የሚሠሩ መስመሮች፣ ቅስቶች፣ ክቦች፣ ፖሊላይኖችና ኩርባዎች ይጠቀማል። በቅስት ወይም ክብ ላይ ያሉ ቁራጮች ወደ ቅስት ክፍሎች ይመለሳሉ፤ የኤሊፕሶችና የስፕላይኖች ቁራጮች ደግሞ አጭር ቀጥ ያሉ ክፍሎች ይሆናሉ። `Islands` ሲበራ (የመጀመሪያው ቅንብር) በውስጡ ያለ እያንዳንዱ ዝግ ቦታ የራሱ ፖሊላይን ያገኛል። ነጥቦችን መምረጥዎን ይቀጥሉ፤ Enter ይጨርሳል። ቦታውን የሚሠሩት ነገሮች እንደነበሩ ይቀራሉ። ነጥቡን የያዘ ዝግ ቦታ ከሌለ ይናገራል።

### BLEND

{{cmd:BLEND}} በሁለት ክፍት ኩርባዎች ጫፎች መካከል ስፕላይን ይስላል። ለመገናኘት እያንዳንዱን ኩርባ በጫፉ አጠገብ ይምረጡ። `CONtinuity` `Tangent` (ስፕላይኑ በሁለቱም ኩርባዎች አቅጣጫ ይወጣል እና ይገባል) ወይም `Smooth` (በጫፎቹ ላይ የሚታጠፉበትን አቅጣጫም ይከተላል) ይመርጣል፤ ምርጫው ለክፍለ ጊዜው ይቀራል። ሁለቱ ኩርባዎች አይለወጡም። ዝግ ነገሮችንና ቀድሞውንም የሚገናኙ ሁለት ጫፎችን ይከለክላል።

### REGION

ተለዋጭ ስሞች፦ `REG`። {{cmd:REGION}} ዝግ ነገሮችን ወደ ክልሎች ይቀይራል፦ ሊያያዙ፣ ሊቆረጡና ሊለኩ የሚችሉ ጠፍጣፋ ቦታዎች። ክቦችን፣ ዝግ ፖሊላይኖችን፣ ዝግ ኤሊፕሶችን ወይም ዝግ ስፕላይኖችን፣ ወይም ጫፍ ለጫፍ ዙር የሚዘጉ መስመሮችን፣ ቅስቶችን እና ክፍት ፖሊላይኖችን ይምረጡ፤ እያንዳንዱ ዙር አንድ ክልል ይሆናል እና ከመጣበት ነገሮች ይተካል። ቅስቶች ቅስት ሆነው ይቀራሉ፤ ኤሊፕሶችና ስፕላይኖች አጭር ቀጥ ያሉ ክፍሎች ይሆናሉ። ዝግ ያልሆነና ምንም ዙር የማይዘጋ ነገር እንዳለ ይቀራል፣ እና ስንት እንደሆነ ይናገራል። በንድፉ ውስጥ ክልል በአንድ ስም የሌለው ቡድን የተያዙ አንድ ወይም ብዙ ዝግ ፖሊላይኖች ነው፤ ስለዚህ አንድ ጠቅታ ሙሉውን ክልል ይመርጣል፣ እና ቅጂው የራሱ ክልል ይሆናል። ፋይሉን የሚከፍቱ ሌሎች ፕሮግራሞች ዝግ ፖሊላይኖችን ያያሉ።

ክልሎች በንድፉ ሲኖሩ፣ በ2D ትር ላይ {{cmd:UNION}}፣ {{cmd:SUBTRACT}} እና {{cmd:INTERSECT}} በክልሎች ላይ ይሠራሉ፦ `UNION` የተመረጡ ክልሎችን ወደ አንድ ያያይዛል (የተለያዩ ክልሎች ብዙ ውጫዊ ቅርጾች ያሉት አንድ ክልል ይሆናሉ)፣ `SUBTRACT` የሚቀነሱበትን ክልሎች ከዚያም የሚወሰዱትን ይጠይቃል (ቀዳዳ የክልሉ ክፍል ሆኖ ይቀራል)፣ `INTERSECT` ሁሉም የሚጋሩትን ቦታ ያቆያል። እያንዳንዳቸው የውጤቱን ቦታ ይናገራሉ እና አንድ የቀልብስ ደረጃ ናቸው። ምንም ካልቀረ ወይም ምንም ካልተጋራ ይከለክላሉ። በ3D ትር ላይ፣ እና ምንም ክልል በሌለበት ንድፍ ውስጥ፣ ተመሳሳዩ ትዕዛዞች አስቀድመው እንደነበረው በጠጣሮች ላይ ይሠራሉ።

## ቀይር

### MTEXT

ተለዋጭ ስሞች፦ `MT`፣ `T`፤ ወይም በመሳሪያ አሞሌው {{ui:Paragraph}}። ወደ ስፋት የሚጠቀለል የአንቀጽ ጽሑፍ፣ በቦታው የሚጻፍ።

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`፦ በሁለቱ ማዕዘኖች መካከል ያለው ስፋት ጽሑፉ የሚጠቀለልበት ነው። `H` `Specify height` ይጠይቃል፣ `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`፣ `L` `Enter line spacing factor (0.25 to 4)`፣ `R` `Specify rotation angle`፣ `W` `Specify width (0 for no wrapping)` እና ሁለተኛውን ማዕዘን ይዘላል።
- ከዚያ በንድፉ ላይ ሳጥን ይከፈታል፦ ጻፉ፣ {{key:Enter}} አዲስ አንቀጽ፣ {{key:Mod+Enter}} ወይም ውጭ ጠቅታ ይጨርሳል፣ {{key:Esc}} ይሰርዛል። አሞሌው ቁመቱን፣ የመስመር ክፍተቱን፣ ስፋቱን እና አሰላለፉን ያዘጋጃል። [ጽሑፍና መለያዎችን ጨምር](topic:text#write-a-note-that-wraps) ይመልከቱ።

### TEXTEDIT

ተለዋጭ ስሞች፦ `ED`፣ `DDEDIT`፤ ወይም ጽሑፉ ላይ ድርብ ጠቅ ያድርጉ። `Select a text to edit`፣ ተደግሞ እስከ {{key:Enter}}፦ እያንዳንዱ በተመሳሳይ ሳጥን ይከፈታል። በተመረጠ ወይም በድርብ ጠቅ በተደረገ ጽሑፍ ላይ ከጀመሩ፣ ያንን ብቻ ያርማል እና ይጨርሳል።

### ERASE

ተለዋጭ ስሞች፦ `E`፣ `DELETE`፤ ወይም ነገሮች ተመርጠው {{key:Delete}} ይጫኑ።

- `Select objects` (ነገሮች አስቀድመው ከተመረጡ ይዘላል)

### MOVE

ተለዋጭ ስሞች፦ `M`።

- `Select objects`
- `Specify base point [Displacement]`፣ `Specify second point`
- `D`፦ `Specify displacement`፣ እንደ `dx,dy` ተጽፎ።

### COPY

ተለዋጭ ስሞች፦ `CO`፣ `CP`። ነጥቦችን እንደሰጡ ብዙ ጊዜ ይገለበጣል።

`Array` በሁለተኛው ነጥብ ጥያቄ ላይ በአንድ ጊዜ ረድፍ ይሠራል፦ የንጥሎቹን ብዛት (የመጀመሪያው እንደ አንድ ይቆጠራል) ይስጡ፣ ከዚያ የመጀመሪያው ቅጂ የሚሄድበት ነጥብ፤ ሌሎቹ በተመሳሳይ ክፍተት ይከተላሉ። `Fit` ያንን ነጥብ በምትኩ የመጨረሻው ቅጂ ቦታ ያደርገዋል፣ ሌሎቹ መካከል እኩል ይሰራጫሉ።

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`፣ Enter እስኪጫን ድረስ ተደግሞ። `U` የመጨረሻውን ቅጂ ይመልሳል።

### ROTATE

ተለዋጭ ስሞች፦ `RO`።

- `Select objects`፣ `Specify base point`
- `Specify rotation angle <last angle>`፦ በዲግሪ፣ ሰዓት ተቃራኒ አዎንታዊ፤ ወይም ወደ እሱ ለማዞር ነጥብ ጠቅ ያድርጉ።

### SCALE

ተለዋጭ ስሞች፦ `SC`።

- `Select objects`፣ `Specify base point`
- `Specify scale factor`፦ እንደ `0.5` ወይም `2` ያለ ፋክተር ይጻፉ። የተጠቀሰ ነጥብ ከመሠረቱ ያለው ርቀቱ ፋክተር ይሆናል።

### MIRROR

ተለዋጭ ስሞች፦ `MI`።

- `Select objects`
- `Specify first point of mirror line`፣ `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

ተለዋጭ ስሞች፦ `AL`፤ ወይም {{ui:Modify}} › {{ui:More}} › {{ui:Align}}።

- `Select objects`
- `Specify first source point`፣ `Specify first destination point`
- `Specify second source point (Enter to continue)`፣ `Specify second destination point`
- `Specify third source point (Enter to continue)`፣ `Specify third destination point`
- በሁለት ጥንዶች፦ `Scale objects based on alignment points? [Yes/No] <N>`

[ነገሮችን አሰልፍ](topic:modify-objects#align-objects) ይመልከቱ።

### ALIGNTO

- `Select objects` (ወይም ምርጫው)፣ `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`፣ `To [Selection/First/Last/Point] <Selection>`፤ `P` ነጥቡን ይጠይቃል። ምርጫው ይቀራል።

### DISTRIBUTE

- `Select objects` (ቢያንስ ሦስት)፣ `Distribute [Horizontally/Vertically] <Horizontally>`፣ `Space evenly [Centers/Gaps] <Gaps>`። ውጫዊዎቹ ሁለቱ ይቀራሉ፤ ምርጫው ይቀራል።

### ALIGNPANEL

ተለዋጭ ስሞች፦ `ALP`፤ ወይም {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}። ALIGNTO እና DISTRIBUTE በጠቅታ የሚያሂደውን ፓነል ይከፍታል።

### LASER

ተለዋጭ ስሞች፦ `LASERCUT`፤ ወይም {{ui:View}} › {{ui:More}} › {{ui:Laser…}}። የLaser ፓነልን በንድፉ ላይ ይከፍታል፦ እያንዳንዱ ንብርብር ምን እንደሚያደርግ (መቁረጥ፣ መቅረጽ፣ ማቃጠል፣ መሙላት፣ ስዕል)፣ ቅድመ እይታው፣ ለማስቀመጥ GRBL G-code፣ እና በWeb Serial ማቀፍና መላክ። [ንድፍን ለሌዘር ላክ](topic:laser-cutting) ይመልከቱ።

### STRETCH

ተለዋጭ ስሞች፦ `S`፤ ወይም {{ui:Stretch}}። `Select objects to stretch`፦ ጫፎቹ ላይ የሚያቋርጡ መስኮቶችን ጎትቱ (ወይም `C` ጻፉ) ለማንቀሳቀስ። `Specify base point [Displacement]`፣ `Specify second point`። በመስኮቶቹ ውስጥ ያሉ ነጥቦች ይንቀሳቀሳሉ፦ የመስመር ጫፎች፣ የፖሊላይን ጫፎች (የቅስት ክፍሎች ቁመታቸውን ይጠብቃሉ)፣ የልኬት ነጥቦች፤ ክቦች፣ ኤሊፕሶች፣ ጽሑፍ፣ ነጥቦችና ብሎኮች ማዕከላቸው ወይም ማስገቢያ ነጥባቸው በውስጥ ከሆነ ሙሉ በሙሉ ይንቀሳቀሳሉ። ከትዕዛዙ በፊት የተደረገ ምርጫ የሠሩትን መስኮቶችና ላስሶዎች ይይዛል፣ ስለዚህ ያንኑ መንገድ ይዘረጋሉ። መስኮት ከሌለ ነገሮቹ ሙሉ ይንቀሳቀሳሉ።

### ARRAY, ARRAYRECT, ARRAYPOLAR

ተለዋጭ ስሞች፦ `AR`፤ ወይም {{ui:Array}}። `Select objects`፣ ከዚያ `Enter array type [Rectangular/POlar] <Rectangular>` (ARRAY ብቻ)።

- Rectangular በ4 አምዶች × 3 ረድፎች ይጀምራል፣ በነገሮቹ መጠን 1.5 እጥፍ ክፍተት፣ እንደ ቅድመ እይታ ይታያል። `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`፦ `COU` አምዶችንና ረድፎችን፣ `S` በአምዶችና በረድፎች መካከል ያለውን ርቀት ይጠይቃል (አሉታዊ ግራ ወይም ታች ይሄዳል)፤ `COL` እና `R` በእያንዳንዱ አንድ አቅጣጫ።
- Polar `Specify center point of array` ይጠይቃል፣ በ6 ንጥሎች ዙሪያውን ሁሉ ይጀምራል፣ ተዞሯል። `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`፦ `I` ንጥሎች፣ `F` የሚሞላው አንግል (+ ሰዓት ተቃራኒ፣ − ሰዓት)፣ `ROT` Yes ወይም No።
- {{key:Enter}} (eXit) ቅጂዎቹን እንደ ተራ ነገሮች ያደርጋል። አንድ የቀልብስ ደረጃ።
- `AS` (ASsociative) ተራ ቅጂዎችና በኋላ በ{{cmd:ARRAYEDIT}} ወይም በProperties ወይም በመያዣዎቹ የሚቀየር ድርድር መካከል ይቀያይራል። ምርጫው ይታወሳል ({{cmd:ARRAYASSOCIATIVITY}})፤ በተራ ቅጂዎች ይጀምራል።

### ARRAYPATH

በኩርባ ላይ ቅጂዎች። `Select objects`፣ ከዚያ `Select path curve`፦ መስመር፣ ቅስት፣ ክብ፣ ኤሊፕስ፣ ፖሊላይን ወይም ስፕላይን (ድርድር የሚደረገው ነገር አይደለም)። መንገዱ ከነገሮቹ ቅርብ ጫፉ ይጀምራል፣ እና የመጀመሪያው ንጥል ነገሮቹ ባሉበት ነው።

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`፣ ከቅድመ እይታ ጋር። `M`፦ `Divide` ንጥሎቹን በመንገዱ ሙሉ እኩል ያሰራጫል፣ `Measure` በእያንዳንዱ የተወሰነ ርቀት አንድ ያስቀምጣል። `I`፦ የንጥሎች ብዛት (በMeasure፣ 0 ማለት የሚገቡት ሁሉ ማለት ነው፤ ከመንገዱ በላይ ያለ ቁጥር ወደ የሚገባው ይገደባል)። `SP`፦ በመንገዱ ላይ በንጥሎች መካከል ያለ ርቀት (Measure ያደርጋል)። `AL`፦ Yes እያንዳንዱ ንጥል መንገዱን ተከትሎ እንዲዞር፣ No ቀጥ እንዲሉ።
- `AS` እንደ {{cmd:ARRAY}}። ሲበራ ድርድሩ የመንገዱን ቅርጽ የራሱ ቅጂ ይይዛል፦ ኩርባውን በኋላ ማረም ንጥሎቹን አያንቀሳቅስም።
- ኩርባ ያልሆነን መንገድ እና አንድ ንጥልን ውድቅ ያደርጋል።

### ARRAYEDIT

ከASsociative ጋር የተሠራ ድርድርን ይለውጣል። `Select array` (ወይም አስቀድመው ይምረጡ)። አሁን ምን እንደሆነ ያትማል፣ ከዚያ {{key:Enter}} እስኪጫን ድረስ ይጠይቃል፦

- Rectangular፦ `COL` አምዶቹና ክፍተታቸው፣ `R` ረድፎቹና ክፍተታቸው፣ `A` አምዶቹ የሚሄዱበት አንግል።
- Polar፦ `I` ንጥሎች፣ `F` የመሙያ አንግል፣ `ROT` ንጥሎችን ማዞር Yes ወይም No።
- Path፦ `M` Divide ወይም Measure፣ `I` ንጥሎች፣ `SP` ክፍተት፣ `AL` ከመንገዱ ጋር ማስተካከል።
- `S` (Source) ድርድሩ የሚደግማቸውን ነገሮች እራሳቸውን ይከፍታል፣ በብሎክ አርታኢው እንደሚሆነው። እዚያ ይሳሉና ያርሙ፤ {{cmd:ARRAYCLOSE}} ያስቀምጣል ወይም ይሰርዛል፣ እና እያንዳንዱ ንጥል ይከተላል።
- `REP` (REPlace)፦ `Select replacement objects`፣ `Specify base point of the replacement objects`፣ ከዚያ የሚተኩትን ንጥሎች ጠቅ ያድርጉ፣ {{key:Enter}}። እነዚያ ንጥሎች በምትኩ ተተኪውን ያሳያሉ፤ ተተኪዎቹ ነገሮች ከንድፉ ይወጣሉ እና በድርድሩ ውስጥ ይኖራሉ። `RES` (RESet) በእያንዳንዱ ንጥል ውስጥ የመጀመሪያዎቹን ምንጭ ነገሮች እንደገና ያሳያል።
- እያንዳንዱ ለውጥ አንድ የቀልብስ ደረጃ ነው። ተራ ቅጂዎችን፣ ተራ የብሎክ ማጣቀሻን እና በተቆለፈ ንብርብር ላይ ያለ ድርድርን ውድቅ ያደርጋል።

ተመሳሳዮቹ ቁጥሮች በProperties ውስጥ በArray ስር ናቸው፣ እና ድርድሩ መያዣዎች አሉት፦ መሠረት ነጥቡ ያንቀሳቅሰዋል፣ በሁለተኛው ንጥል ያለው መያዣ ክፍተቱን ያዘጋጃል፣ ከመጨረሻው ንጥል ባሻገር ያለው መያዣ ብዛቱን ያዘጋጃል (polar፦ ሁለተኛው ንጥል ስንት ንጥሎች፣ የመጨረሻው ንጥል የመሙያ አንግል)። {{cmd:EXPLODE}} ድርድሩን ወደ ተራ ቅጂዎች ይመልሰዋል።

### ARRAYCLOSE

ለ{{cmd:ARRAYEDIT}} ምንጭ ማረምን ያበቃል፦ `Save the changes to the array's source objects? [Save/Discard] <Save>`። ምንም የድርድር ምንጭ ነገሮች ካልተከፈቱ ይናገራል። {{cmd:BCLOSE}} ተመሳሳይ ነገር ያደርጋል።

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`። {{cmd:ARRAY}}፣ ARRAYRECT፣ ARRAYPOLAR እና {{cmd:ARRAYPATH}} በምን እንደሚጀምሩ ያዘጋጃል፤ የነሱ አማራጭ `AS` ያንኑ ቅንብር ይለውጣል። በዚህ አሳሽ ይታወሳል።

### OFFSET

ተለዋጭ ስሞች፦ `O`። መስመሮች፣ ቅስቶች፣ ክቦችና ፖሊላይኖች።

ፖሊላይን ወደ ውጭ ሲንቀሳቀስ ቀጥ ያሉ ክፍሎቹ በማዕዘን ሲለያዩ፣ {{cmd:OFFSETGAPTYPE}} ክፍተቱ እንዴት እንደሚዘጋ ይወስናል።

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`፣ ከዚያ `Specify point on side to offset` (ወይም በThrough፣ `Specify through point`)፣ Enter እስኪጫን ድረስ ተደግሞ።

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`፦ {{cmd:OFFSET}} በፖሊላይን ውጫዊ ማዕዘኖች ያሉ ክፍተቶችን እንዴት እንደሚዘጋ። `0` ክፍሎቹን እስኪገናኙ ያራዝማል (የመጀመሪያው ቅንብር)፣ `1` በድሮው ማዕዘን ዙሪያ ቅስት ያያይዛል፣ `2` ቀጥ ያለ መቁረጥ ያያይዛል። የውስጥ ማዕዘኖችና የቅስት ክፍሎች አይነኩም። ለዚህ ክፍለ ጊዜ ይቀመጣል።

### EXTRIM

{{cmd:EXTRIM}} በአንድ ጠርዝ በአንድ ጎን ያለውን ሁሉ ይቆርጣል። የመቁረጫውን ጠርዝ (መስመር፣ ቅስት፣ ክብ፣ ፖሊላይን፣ ኤሊፕስ፣ ስፕላይን ወይም የግንባታ መስመር) ይምረጡ፣ ከዚያ ለማጽዳት ጎን ላይ ነጥብ ይምረጡ፦ ጠርዙን የሚያቋርጥ እያንዳንዱ መስመር፣ ቅስት፣ ክብ፣ ፖሊላይን እና የግንባታ መስመር በዚያ ጎን ያለውን ክፍሉን ያጣል፣ እዚያም ከጠርዙ ይጀምራል። ጎኑን እየመረጡ ሳሉ የሚጠፉት ቁራጮች ጠቋሚውን ይከተላሉ። የተዘጋ ጠርዝ ከሆነ ጎኖቹ ውስጥና ውጭ ናቸው። ጠርዙን ብቻ የሚነኩ ነገሮች፣ እና ጽሑፍ፣ ሀች፣ ስፕላይንና ኤሊፕስ የሚያቋርጡት፣ እንዳሉ ይቀራሉ። አንድ የቀልብስ ደረጃ።

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`፦ {{cmd:TRIM}} እና {{cmd:EXTEND}} እንዴት እንደሚጀምሩ። `1` ፈጣን፦ እያንዳንዱ ነገር መቁረጫ ጠርዝ ወይም ድንበር ነው። `0` መደበኛ፦ በመጀመሪያ ጠርዞቹን ይጠይቃሉ። እንዲሁም `(setvar "TRIMEXTENDMODE" 0)` በLISP ውስጥ።

### TRIM

ተለዋጭ ስሞች፦ `TR`። መጀመሪያ `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` ያትማል። በፈጣን ሁነታ እያንዳንዱ የሚታይ ነገር መቁረጫ ጠርዝ ነው፣ እና ምንም የማያቋርጠው ነገር ይሰረዛል፤ በመደበኛ ሁነታ መጀመሪያ `Select cutting edges (Enter = every object)` ብሎ ይጠይቃል እና በእነዚያ ላይ ብቻ ይቆርጣል።

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`፣ ተደግሞ፦ የሚወገደውን ቁራጭ ጠቅ ያድርጉ (ጠቋሚው ላይ ሲያርፍ ግራጫና ሰረዝ ሆኖ ይታያል)፣ መንገድ በብዙ ቁራጮች በኩል ይጎትቱ (ሁሉም በአንድ እርምጃ ይሄዳሉ)፣ ወይም በመካከላቸው አጥር ለማድረግ ሁለት ባዶ ቦታዎች ጠቅ ያድርጉ። {{key:Shift}} ይልቁንስ ያራዝማል። `T` የመቁረጫ ጠርዞችን ይመርጣል (መደበኛ ሁነታ)፣ `F` የአጥር ነጥቦችን ይጠይቃል፣ `C` ሁለት የመስኮት ማዕዘኖችን (ከፊል ውስጥ ያሉ ቁራጮች ይሄዳሉ)፣ `O` `Enter a trim mode option [Quick/Standard]` ይጠይቃል፣ `E` `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE)፣ `R` የመረጧቸውን ነገሮች ይሰርዛል፣ `U` የመጨረሻውን ምርጫ ወይም ጎትት ይቀለብሳል። Enter ይጨርሳል። [መቁረጥና ማራዘም](topic:trim-and-extend) ይመልከቱ።

- በሀች ላይ ጠቅ ማድረግ ሀቹን ይቆርጣል፦ የመቁረጫ ጠርዞቹ የተሞላውን ቦታ ይከፍላሉ፣ እና የጠቅታዎ ቁራጭ ይወሰዳል (በቦታው የተሳለ ንድፍ አይቀርም)። ሀቹ ጥለቱን ወይም ግራዲየንቱን ይይዛል፤ ከድንበሩ ጋር የተገናኘ ሀች ከዚያ በኋላ አይገናኝም፣ ምክንያቱም ከእንግዲህ አይሞላውም። በዚያ ጠርዝ ሀቹን የማይከፍል ከሆነ፣ ጠቅታው ከሀቹ ውጭ ከሆነ፣ ወይም ምንም ነገር ካልቀረ ይናገራል (በ{{cmd:ERASE}} ይጠቀሙ)። የተጎተተ መንገድ ወይም አጥር ሀችን አይቆርጠውም።

### EXTEND

ተለዋጭ ስሞች፦ `EX`። ከTRIM ጋር ተቃራኒው ነው፦ `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`። ጠቅ ማድረግ ከእሱ ቅርብ ጫፉን ወደ ቀጣዩ ድንበር ያራዝማል፤ የተጎተተ መንገድ ወይም አጥር የሚያቋርጠውን እያንዳንዱን ነገር ያራዝማል፤ {{key:Shift}} ይቆርጣል። `B` ድንበር ጠርዞችን ይመርጣል (መደበኛ ሁነታ)። Mode እና Edge ከTRIM ጋር ይጋራሉ።

### LINKVIEWS

ተለዋጭ ስሞች፦ `SYNCVIEWS`፤ ወይም {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}፣ ወይም በንድፍ ትሮቹ ላይ ያለው የአገናኝ አዶ። `Link the panes' views [ON/OFF]` (Enter ሌላውን ሁኔታ ይወስዳል)፦ ሲበራ፣ በገባሪው መስኮት መንቀሳቀስ ወይም ማጉላት ተመሳሳይ ዓይነት ቦታ የሚያሳየውን ሁሉንም መስኮቶች ያንቀሳቅሳል። [ማያ ገጹን ክፈል](topic:split-screen) ይመልከቱ።

### OPENIN3D

ተለዋጭ ስሞች የሉትም፤ ወይም {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} 3D ሞዴሊንግ መተግበሪያው የተሰጠውን ንድፍ የሚቀበልበት። እዚያ በአዲስ ትር እንደ DWG ይከፍታል (ምንም አይሰቀልም)። አሳሹ ትሩን ከከለከለ ይናገራል።

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`፦ በባዶ ቦታ ላይ ተጭኖ መጎተት ምን እንደሚስል። ከ Settings › CadCraft › Dragging to select ጋር አንድ ነው። [ላስሶ ምርጫ](topic:lasso-selection) ይመልከቱ።

### FILLET

ተለዋጭ ስሞች፦ `F`። መስመሮች፣ ቅስቶች፣ ክቦችና ፖሊላይኖች። መጀመሪያ `Current settings: Mode = TRIM, Radius = 0` ያትማል።

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` `Specify fillet radius <last>` ይጠይቃል። `T` `Enter Trim mode option [Trim/No trim]` ይጠይቃል፦ No trim ከሆነ ነገሮቹ እንደነበሩ ይቀራሉ እና ቅስቱ ብቻ ይጨመራል።
  - `M` ለተጨማሪ ማዕዘኖች ትዕዛዙን እስከ {{key:Enter}} ያቆየዋል፤ `U` የመጨረሻውን ማዕዘን ከትዕዛዙ ሳይወጡ ይመልሳል።
  - `P` `Select 2D polyline [Radius]` ብሎ ይጠይቃል እና ሁለት ቀጥ ያሉ ክፍሎች የሚገናኙበትን እያንዳንዱን ማዕዘን ያዞራል። ቀድሞ ያሉ ፊሌቶች በአዲሱ ራዲየስ ይተካሉ፤ ራዲየስ 0 ያስወግዳቸዋል። ጎኖቻቸው ለራዲየሱ አጭር የሆኑ ማዕዘኖች ሳይነኩ ይቀራሉ እና ይቆጠራሉ።
- `Select second object or shift-select to apply corner [Radius]`። ለሾለ ማዕዘን፣ ራዲየሱ ምንም ቢሆን፣ ጠቅ ሲያደርጉ {{key:Shift}} ይያዙ።

እያንዳንዱን ነገር ማቆየት በሚፈልጉት ክፍል ላይ ጠቅ ያድርጉ። የማይገናኙ ሁለት መስመሮች ይራዘማሉ። ሁለት ትይዩ መስመሮች በክፍተቱ ላይ ግማሽ ክብ ያገኛሉ፣ ጠቅታዎ ቅርብ በሆነው የመጀመሪያው መስመር ጫፍ። ክብ ፈጽሞ አይቆረጥም። በአንድ ፖሊላይን ውስጥ ጎን ለጎን ያሉ ሁለት ክፍሎች ቅስቱን በፖሊላይኑ ውስጥ ያገኛሉ፤ ፖሊላይንና ሌላ ነገር የሚሠሩት መቁረጡ በፖሊላይኑ የመጀመሪያ ወይም የመጨረሻ ክፍል ላይ ሲያርፍ ነው።

### CHAMFER

ተለዋጭ ስሞች፦ `CHA`። መስመሮችና የፖሊላይን ቀጥ ያሉ ክፍሎች። መጀመሪያ የአሁኑን ርቀቶች (ወይም ርዝመትና አንግል) ያትማል።

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` `Specify first chamfer distance <last>` እና `Specify second chamfer distance <the first>` ይጠይቃል፦ የመጀመሪያው ከመረጡት የመጀመሪያው መስመር ይቆረጣል፣ ሁለተኛው ከሌላው።
  - `A` `Specify chamfer length on the first line` እና `Specify chamfer angle from the first line` ይጠይቃል።
  - `E` (mEthod) ቀጣዩ ቻምፈር ከሁለቱ የትኛውን እንደሚጠቀም ይመርጣል። `T`፣ `M`፣ `U` እና `P` እንደ {{cmd:FILLET}} ይሠራሉ።
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`። {{key:Shift}}+ጠቅታ ሾለ ማዕዘን ያደርጋል።

ከመስመሩ የሚበልጥ ርቀት ውድቅ ይደረጋል (`Distance is too large.`)።

### BREAK እና BREAKATPOINT

ተለዋጭ ስሞች፦ `BR`። `Select object` (የጠቅታዎ ቦታ የመጀመሪያው ነጥብ ነው)፣ `Specify second break point [First point]`፤ `F` `Specify first break point` እና `Specify second break point` ይጠይቃል። በመካከሉ ያለው ክፍል ይወገዳል፤ በክብ ላይ፣ ከመጀመሪያው ነጥብ ሰዓት ተቃራኒ። BREAKATPOINT `Specify break point` ብሎ ይጠይቃል እና ነገሩን በዚያ ነጥብ ሁለት ያደርገዋል (ክብ አይደለም)።

### LENGTHEN

ተለዋጭ ስሞች፦ `LEN`። `Select an object to measure [DElta/Percent/Total/DYnamic]`፦ ምርጫ `Current length` (እና የቅስት የተካተተ አንግል) ያትማል እና እንደገና ይጠይቃል። `DE` `Enter delta length (negative shortens) [Angle]` ይጠይቃል፣ `P` `Enter percentage length`፣ `T` `Specify total length [Angle]`፣ `DY` ይጎትታል። ከዚያ `Select an object to change [Undo]` ተደግሞ፦ ጠቅታው ቅርብ ጫፍ ይንቀሳቀሳል። መስመሮች፣ ቅስቶችና ክፍት ፖሊላይኖች።

### JOIN

ተለዋጭ ስሞች፦ `J`። `Select objects to join`። ጫፍ ለጫፍ የሚገናኙ መስመሮች፣ ቅስቶችና ክፍት ፖሊላይኖች ፖሊላይን ይሆናሉ (ሰንሰለቱ ሲዘጋ ዝግ ይሆናል)፤ በአንድ መስመር ላይ ያሉ መስመሮች አንድ መስመር ይሆናሉ፤ የአንድ ክብ ቅስቶች አንድ ቅስት ወይም ክብ ይሆናሉ። ታሪኩ ስንት ነገሮች እንደተያያዙ እና ስንቱ እንዳልተያያዙ ይናገራል።

### MATCHPROP

ተለዋጭ ስሞች፦ `MA`፣ `PAINTER`። `Select source object`፣ ከዚያ `Select destination objects [Settings]` እና {{key:Enter}}። ንብርብርና ቀለም ይገለበጣሉ፤ እንዲሁም በተመሳሳይ ዓይነት ነገሮች መካከል የጽሑፍ ቁመትና ወርድ፣ የልኬቶች መጠኖች ወይም የሀች ጥለት። `S` `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` ይጠይቃል፣ ተደግሞ እስከ {{key:Enter}}፤ ምርጫው ለክፍለ ጊዜው ይታወሳል።

### EXPLODE

ተለዋጭ ስሞች፦ `X`። ፖሊላይኖች ወደ መስመሮችና ቅስቶች ይሆናሉ፣ የብሎክ ማጣቀሻዎች ወደ ነገሮቻቸው፣ ልኬቶች ወደ መስመሮች፣ የቀስት ጭንቅላቶችና ጽሑፍ። ሊስተካከል የሚችል ድርድር ({{cmd:ARRAYEDIT}}) ወደ ተራ የነገሩ ቅጂዎች ይሆናል።

- `Select objects`

### GROUP

ተለዋጭ ስሞች፦ `G`። {{cmd:GROUP}} ለተመረጡት ነገሮች የሚጋሩት ስም ይሰጣል። ነገሮቹን ይምረጡ፣ ከዚያ ስም ይጻፉ (ክፍተት የሌለው፤ `?` ቡድኖቹን ይዘረዝራል፤ Enter ስም የሌለው ቡድን ይሠራል)፣ እና ለተሰየመ ቡድን አማራጭ መግለጫ። ከዚያ በኋላ በአንዱ ላይ ጠቅ ማድረግ፣ ወይም አንዱን የሚወስድ መስኮት፣ ሁሉንም ይመርጣል፤ ስለዚህ አብረው ይንቀሳቀሳሉ፣ ይገለበጣሉ እና ይሰረዛሉ፤ እያንዳንዱ ነገር አሁንም የራሱ ነገር ነው። አንድ ነገር በበርካታ ቡድኖች ውስጥ ሊሆን ይችላል። የአንድ ሙሉ ቡድን ቅጂ አዲስ ስም የሌለው ቡድን ይሆናል፤ የአንድ አባል ቅጂ ብቻውን ወደ ቡድኑ ይገባል። ቡድኖች ባሉበት ቦታ (ሞዴሉ ወይም ሉህ) ይኖራሉ። እንደ DWG ወይም DXF ሲያስቀምጡ ይቀመጣሉ እና ፋይሉን በCadCraft ዳግም ሲከፍቱ ይታወሳሉ፤ DXF 2000 ፋይሎች ለሌሎች ፕሮግራሞች እንደ ቡድን ነገሮች ይይዟቸዋል፣ እና በሌላ ፕሮግራም የተሠሩ ቡድኖች DXF ወይም DWG ሲከፈት ይነበባሉ።

### UNGROUP

{{cmd:UNGROUP}} ቡድኖችን ይፈታል፦ የቡድኖቹን ነገሮች ይምረጡ (የያዟቸው እያንዳንዱ ቡድን ይፈታል)፣ ወይም `Name` እና የቡድኑን ስም ይጻፉ። ነገሮቹ በንድፉ ውስጥ ይቀራሉ። አንድ የቀልብስ ደረጃ ቡድኖቹን ይመልሳል።

### GROUPEDIT

{{cmd:GROUPEDIT}} አንድ ቡድን ይለውጣል። ከነገሮቹ አንዱን ይምረጡ፣ ወይም `Name` እና ስሙን፤ አስቀድሞ የተመረጠ ቡድን እንዳለ ይወሰዳል። ከዚያ፦ ነገሮችን `Add` (አንድ በአንድ ይመረጣሉ፣ ቡድን በቡድን አይደለም)፣ ነገሮችን `Remove`፣ ቡድኑን `REName`፣ `Description` ይቀይሩ፣ ወይም `Selectable` ያዘጋጁ (ጠቅታ አንድ ነገር ላይ ቢሆን ሙሉውን ቡድን ይመርጥ እንደሆነ)። `eXit` ወይም Enter ይጨርሳል። ምንም ነገር ያልቀረበት ቡድን ይጠፋል።

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`፦ በ`1` (የመጀመሪያው ቅንብር) በቡድን ነገር ላይ ጠቅታ ወይም መስኮት ሙሉ ቡድኑን ይመርጣል፤ በ`0` ነጠላ ነገሮች፣ አንድ አባል ለማረም። ለዚህ ክፍለ ጊዜ ይቀመጣል።

## ቅንጥብ ሰሌዳ

የCadCraft የራሱ ቅንጥብ ሰሌዳ፦ በንድፍ ውስጥ፣ በንድፎች መካከል እና በዚህ አሳሽ ባሉ CadCraft ትሮች መካከል ይሠራል። [ቅዳ፣ ለጥፍና አባዛ](topic:copy-paste) ይመልከቱ።

### COPYCLIP

{{key:Mod+C}}፣ ወይም በ{{ui:Edit}} ቡድን ውስጥ {{ui:Copy}}። ነገሮችን ከሚጠቀሙባቸው ብሎኮችና ንብርብሮች ጋር ወደ ቅንጥብ ሰሌዳ ይቀዳል። ነገሮቹ እንደተመረጡ ይቆያሉ።

- `Select objects to copy` (ነገሮች አስቀድመው ከተመረጡ ይዘላል)

### CUTCLIP

{{key:Mod+X}}፣ ወይም በ{{ui:More}} ምናሌ ውስጥ {{ui:Cut}}። ነገሮችን ወደ ቅንጥብ ሰሌዳ ይቀዳል፣ ከዚያ ያጠፋቸዋል (አንድ የቀልብስ ደረጃ)።

- `Select objects to cut` (ነገሮች አስቀድመው ከተመረጡ ይዘላል)

### COPYBASE

ነገሮችን ወደ ቅንጥብ ሰሌዳ በመረጡት መሠረት ነጥብ ይቀዳል፤ ለጥፍ ያ ነጥብ የሚቀመጥበት ነው።

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}፣ ወይም በ{{ui:Edit}} ቡድን ውስጥ {{ui:Paste}}። ቅጂው ከጠቋሚው ይከተላል፣ ከታችኛው ግራ ጥግ (ወይም ከመሃሉ፣ ወይም ከ`COPYBASE` ነጥቡ) ይንጠለጠላል፤ [የCadCraft ቅንብሮች](topic:settings) ይመልከቱ።

- `Specify insertion point`

የተለጠፉት ነገሮች ይመረጣሉ። ንድፉ አስቀድሞ ያለው ብሎክ በዚያ ስም ካለ የዚህን ንድፍ ትርጓሜ ይይዛል።

በMarkupCraft የተቀዳ ቦታ ከCadCraft ከተቀዳው አዲስ ከሆነ (እና ከ6 ሰዓት ያነሰ ከሆነ)፣ {{key:Mod+V}} እና `PASTECLIP` ያንን ቦታ በምትኩ ይለጥፋሉ፦ `PASTEAREA`ን ይመልከቱ።

### PASTEAREA

ተለዋጭ ስሞች፦ `PAREA`። {{ui:Paste a copied area}} በ{{ui:More}} ምናሌ ውስጥ። በMarkupCraft በ{{ui:Copy area}} የተቀዳ ቦታን በእውነተኛ መጠኑ እንደ ስዕል ይለጥፋል። [በንድፍ ውስጥ ያሉ ስዕሎች](topic:pictures) ይመልከቱ።

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (ሉሁ የንድፍ ስኬል ከሌለው ብቻ)፦ ቁጥር፣ የወረቀት መጠኑ {{key:Enter}}፣ ወይም `P`፣ ከዚያ `First point on the pasted area`፣ `Second point on the pasted area` እና ትክክለኛ ርቀታቸው።

### PASTEORIG

{{key:Mod+Shift+V}}፣ ወይም በ{{ui:More}} ምናሌ ውስጥ {{ui:Paste in place}}። ነገሮቹ ከተቀዱበት መጋጠሚያዎች ይለጠፋል። ምንም አይጠይቅም።

### DUPLICATE

ተለዋጭ ስሞች፦ `DUP`። {{key:Mod+D}}፣ ወይም በ{{ui:More}} ምናሌ ውስጥ {{ui:Duplicate and move}}። የነገሮች ቅጂ ከመገኛቸው ከጠቋሚው ጋር ይንቀሳቀሳል፤ {{key:Esc}} ምንም አይተውም። የቅንጥብ ሰሌዳውን አይጠቀምም።

- `Select objects to duplicate` (ነገሮች አስቀድመው ከተመረጡ ይዘላል)
- `Specify where the copy goes (Esc leaves nothing)`፦ ጠቅ ያድርጉ፣ ነጥብ ይጻፉ፣ `@dx,dy` (ጠቋሚው ከነበረበት)፣ ወይም ወደ ጠቋሚው ያለ ርቀት።

### SELECT

`Select objects` ብሎ ይጠይቃል (ከታች ያሉትን አማራጮች ሁሉ ጋር) እና የመረጡትን ይመረጣል ለሚቀጥለው ትዕዛዝ ወይም ለኋላ `P`።

### QSELECT

ተለዋጭ ስሞች፦ `QS`። በአሳሹ ውስጥ፣ {{ui:Quick select}} መስኮት ([ነገሮችን ምረጥ](topic:select-objects#select-by-a-rule-quick-select) ይመልከቱ)። ከሌለ የትዕዛዝ መስመሩ `Enter object type`፣ `Enter property`፣ `Enter operator [=/<>/>/</*/Select all] <=>` እና `Enter value` ይጠይቃል። ተዛማጆቹ ምርጫ ይሆናሉ።

### SELECTSIMILAR

ተለዋጭ ስሞች፦ `SIM`። `Select objects [SEttings]` (ወይም ያለው ምርጫ)፦ ተመሳሳይ ዓይነት፣ ንብርብርና ቀለም ያለውን እያንዳንዱን ነገር ይመርጣል (እና የብሎክ ስም፣ የሀች ጥለት)። `SE` `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` ይጠይቃል፣ ተደግሞ እስከ {{key:Enter}}።

### FIND

ተለዋጭ ስሞች የሉትም፤ ወይም {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}። በአሳሹ፣ {{ui:Find and replace}} መስኮት ([ጽሑፍና መለያዎችን ጨምር](topic:text#find-and-replace-words) ይመልከቱ)። ከሌለ፦ `Enter text to find`፣ ከዚያ `Enter replacement text (Enter: select what is found)`። በጽሑፍ፣ በባህሪ እሴቶችና በልኬት ጽሑፍ ውስጥ በክፍት ትሩ ወይም በምርጫው ይፈልጋል።

### SELECTALL እና DESELECT

`SELECTALL` (ተለዋጭ ስም `AI_SELALL`፣ {{key:Mod+A}}) በክፍት ትሩ ላይ ማረም የምትችሉትን እያንዳንዱን ነገር ይመርጣል። `DESELECT` (ተለዋጭ ስሞች `AI_DESELECT`፣ `SELECTNONE`፤ ወይም {{key:Esc}}) ምርጫውን ያጠራል።

## ልኬቶች

### DIMLINEAR

ተለዋጭ ስሞች፦ `DLI`፣ `DIMLIN`። አግድም ወይም ቀጥ ያለ ርቀት።

- `Specify first extension line origin [Select object]` (Enter ወይም `S`፦ `Select object to dimension`፣ ከዚያ መስመር፣ ቅስት፣ ክብ ወይም የፖሊላይን ክፍል ጠቅ ያድርጉ)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`። `T` ጽሑፍ ይጠይቃል (`<>` የተለካው እሴት ነው)፣ `H` እና `V` አቅጣጫውን ያስተካክላሉ፣ `R` `Specify angle of dimension line <0>` ይጠይቃል።

### DIMALIGNED

ተለዋጭ ስሞች፦ `DAL`፣ `DIMALI`። በሁለት ነጥቦች መካከል እውነተኛ ርቀት።

- መነሻዎቹ እንደ {{cmd:DIMLINEAR}}፣ ከዚያ `Specify dimension line location [Text]`።

### DIMANGULAR

ተለዋጭ ስሞች፦ `DAN`፣ `DIMANG`።

- `Select arc, circle or line, or Enter for a vertex`
- ቅስት፦ አንግሉ። ክብ፦ `Specify second angle endpoint`። መስመር፦ `Select second line`። Enter፦ `Specify angle vertex`፣ `Specify first angle endpoint`፣ `Specify second angle endpoint`።
- `Specify dimension line location [Text]`፦ ለመለካት አንግሉ ውስጥ ጠቅ ያድርጉ።

### DIMRADIUS እና DIMDIAMETER

ተለዋጭ ስሞች፦ `DRA`፣ `DIMRAD`፤ `DDI`፣ `DIMDIA`።

- `Select arc or circle`፣ ከዚያ `Specify dimension line location [Text]`።

### DIMCONTINUE

ተለዋጭ ስሞች፦ `DCO`፣ `DIMCONT`። ከተሠራው የመጨረሻ መስመራዊ ወይም አሰላለፍ ልኬት ይቀጥላል (ወይም `Select linear or aligned dimension` ብሎ ይጠይቃል)።

- `Specify second extension line origin [Undo]`፣ Enter እስኪጫን ድረስ ተደግሞ።

### DIMBASELINE

ተለዋጭ ስሞች፦ `DBA`፣ `DIMBASE`። እንደ {{cmd:DIMCONTINUE}}፣ ግን እያንዳንዱ ልኬት ከመጀመሪያው መነሻ ይጀምራል እና ይበልጥ ወደ ውጭ ይደራረባል።

### DIMORDINATE

ተለዋጭ ስሞች፦ `DOR`፣ `DIMORD`። `Specify feature location`፣ ከዚያ `Specify leader endpoint [Xdatum/Ydatum/Text]`። ባህሪው ከUCS መነሻ በX ወይም Y ምን ያህል እንደሚርቅ በመሪ መስመር ላይ ይጽፋል፦ በአብዛኛው ወደ ላይ ወይም ወደ ታች የሚሄድ መሪ X ያነባል፣ በጎን የሚሄድ Y ያነባል፤ `Xdatum` እና `Ydatum` የትኛው እንደሆነ ያስተካክላሉ። መነሻውን መጀመሪያ በ{{cmd:UCS}} ያዘጋጁ (ከሌለ የንድፉ 0,0 ነው)። መያዣዎች ባህሪውን፣ መነሻውንና የመሪውን ጫፍ ያንቀሳቅሳሉ፣ እና እሴቱ ይከተላል። በDWG እና DXF እንደ እውነተኛ መጋጠሚያ ልኬት ይቀመጣል። በባህሪው ላይ ያለ የመሪ ጫፍ ውድቅ ይደረጋል።

### DIMARC

ተለዋጭ ስሞች፦ `DAR`። `Select arc or polyline arc segment`፣ ከዚያ `Specify arc length dimension location [Text]`። በቅስቱ ላይ (በኮርድ ሳይሆን) ይለካል እና የቅስት ምልክቱን ከእሴቱ በፊት ይጽፋል። ሙሉ ክብን፣ መስመርን ወይም ቀጥ ያለ የፖሊላይን ክፍልን ውድቅ ያደርጋል። DWG እንደ የቅስት ርዝመት ልኬት ያቆየዋል፤ DXF እንደ አንግላዊ ልኬት ከርዝመቱ እንደ ጽሑፉ ያቆየዋል፣ እና CadCraft እንደገና እንደ የቅስት ርዝመት ልኬት ይከፍታል።

### DIMJOGGED

ተለዋጭ ስሞች፦ `DJO`፣ `JOG`። `Select arc or circle`፣ `Specify center location override`፣ `Specify jog location`። ማዕከሉ ሩቅ ወይም ከሉሁ ውጭ ለሆነ ኩርባ ራዲየስ ልኬት፦ የልኬቱ መስመር ከማዕከሉ ይልቅ በሰጡት ነጥብ ይጀምራል፣ በውስጡ ዝበራ ይዞ፣ እና አሁንም እውነተኛውን ራዲየስ ይጽፋል። DWG እንደ የተዘበራረቀ ራዲየስ ልኬት ያቆየዋል፤ DXF እንደ ራዲየስ ልኬት ያቆየዋል፣ እና CadCraft እንደገና የተዘበራረቀ አድርጎ ይከፍታል።

### DIMJOGLINE

ተለዋጭ ስሞች፦ `DJL`። `Select dimension to add jog [Remove]`፣ ከዚያ `Specify jog location (or press Enter)`። በመስመራዊ ወይም አሰላለፍ ልኬት መስመር ላይ የዝበራ ምልክት ያስቀምጣል፣ ርቀቱ በስኬል እንዳልተሳለ ለማሳየት፤ እሴቱ አይለወጥም። `Remove` ያነሳዋል። ሌሎች የልኬት ዓይነቶችን ውድቅ ያደርጋል።

### QDIM

ተለዋጭ ስሞች የሉትም። `Select geometry to dimension`፣ ከዚያ `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`። በአንድ እርምጃ ብዙ ነገሮችን ይለካል፣ ከመስመሮችና ከፖሊላይን ክፍሎች ጫፎች፣ ከክቦችና ቅስቶች ማዕከሎች፣ ከነጥቦችና ከብሎክ ማጣቀሻዎች። ከነገሮቹ በላይም ሆነ በታች ያለ ቦታ ተሻግሮ ይለካል፤ ከጎናቸው ያለው ወደ ላይ ይለካል። `Continuous` ነጥቦቹን ያያይዛል፣ `Baseline` ሁሉንም ከመጀመሪያው ይለካል፣ `Staggered` ጥንዶችን ከመሃል ወደ ውጭ ያስቀምጣል፣ `Ordinate` እያንዳንዱ ነጥብ ከመነሻው ያለውን ርቀት ይሰጣል (`datumPoint` አዲስ መነሻ ይመርጣል)፣ `Radius` እና `Diameter` የተመረጠውን እያንዳንዱን ክብና ቅስት ይለካሉ። ሁነታው ይታወሳል። የሚሠራው ሁሉ አንድ የቀልብስ ደረጃ ነው። ከሁለት ነጥብ ያነሱ፣ ወይም ለRadius እና Diameter ቅስት ወይም ክብ ከሌለ ይናገራል።

### DIMBREAK

ተለዋጭ ስሞች፦ `DBREAK`። `Select dimensions to add or remove breaks`፣ ከዚያ `Break where other objects cross [Auto/Manual/Remove] <Auto>`። `Auto` ሌሎች ነገሮች በሚያቋርጡበት የልኬቱና የማራዘሚያ መስመሮች ላይ ክፍተት ይተዋል፣ እና እነዚያ ነገሮች ወይም ልኬቱ ሲንቀሳቀሱ ክፍተቶቹን እንደገና ያሰላል። `Manual` (አንድ ልኬት) ሁለት ነጥቦችን ይጠይቃል እና በመካከላቸው ክፍተት ይተዋል። `Remove` ሁሉንም ክፍተቶች ያስወግዳል። ክፍተቱ የልኬቱ የጽሑፍ ቁመት 1.5 እጥፍ ነው።

### DIMSPACE

ተለዋጭ ስሞች የሉትም። `Select base dimension`፣ `Select dimensions to space`፣ `Enter spacing value or Auto <Auto>`። የትይዩ መስመራዊና አሰላለፍ ልኬቶችን መስመሮች (ወይም ከአንድ ጫፍ አንግላዊ ልኬቶችን) ያንቀሳቅሳል ስለዚህ እኩል ርቀት ይሆናሉ፣ ከመሠረቱ ልኬት እየተቆጠረ፣ እያንዳንዱ በሚገኝበት ጎን። `0` ከመሠረቱ ጋር ያሰልፋቸዋል፤ `Auto` የመሠረቱ ልኬት የጽሑፍ ቁመት እጥፍ ነው። ከመሠረቱ ትይዩ ያልሆኑ ልኬቶች አይነኩም።

### DIMINSPECT

ተለዋጭ ስሞች የሉትም። `Select dimensions`፣ `Inspection frame shape [Round/Angular/None/remove] <Round>`፣ `Enter label`፣ `Enter inspection rate <100%>`። በእሴቱ ዙሪያ ፍሬም ከፊቱ መለያ እና ከኋላው የፍተሻ መጠን ጋር ይስላል። `remove` ፍሬሙን ያወርዳል። የመቻቻል ጽሑፍ ከእሴቱ ጋር ይቀራል።

### DIMOVERRIDE

ተለዋጭ ስሞች፦ `DOV`፣ `DIMOVER`። `Enter dimension variable name to override or Clear`፣ `Enter new value for …`፣ እንደገና እስኪ Enter፣ ከዚያ `Select dimensions`። እነዚያን ቅንብሮች በተመረጡት ልኬቶች ላይ ብቻ ይለውጣል፤ የልኬት ስታይሉ አይለወጥም። ቁጥር ወይም መቀያየሪያ የሆኑትን ተለዋዋጮች ይወስዳል (`DIMTXT`፣ `DIMASZ`፣ `DIMSCALE`፣ `DIMDEC`፣ `DIMSE1` …)። `Clear` የተመረጡትን ልኬቶች ወደ ስታይላቸው ይመልሳል። እንደዚህ ተለዋዋጭ ያልሆነን ስም እና ሊወስደው የማይችለውን እሴት ውድቅ ያደርጋል።

### DIMREASSOCIATE

ተለዋጭ ስሞች፦ `DRE`፣ `DIMREASSOC`። `Select dimensions`፣ ከዚያ ለእያንዳንዱ የማራዘሚያ መስመር መነሻዎቹ (`Specify first extension line origin on an object`፦ በመስመር ጫፍ ወይም መሃል፣ በፖሊላይን ማዕዘን፣ በማዕከል ላይ ይያዛል፤ Enter ነጥቡን ነጻ ይተዋል)፣ ወይም ለራዲየስ፣ ዲያሜትር፣ የተዘበራረቀ ራዲየስ ወይም የቅስት ርዝመት ልኬት `Select arc or circle`። ልኬቱ ከእነዚያ ነገሮች ጋር ይታሰራል፦ ሲንቀሳቀሱ ወይም መጠናቸው ሲቀየር በተመሳሳይ የቀልብስ ደረጃ ይከተላል እና እንደገና ይለካል። የታሰረን ነጥብ በእጅ ማንቀሳቀስ ወይም ነገሩን ማጥፋት ትስስሩን ያቆማል። ትስስሩ በDWG እና DXF 2000 እንደ CadCraft የራሱ ውሂብ ይቀመጣል፤ ሌሎች ፕሮግራሞች ተራ ልኬት ያያሉ።

### DIMDISASSOCIATE

ተለዋጭ ስሞች፦ `DDA`፣ `DIMDISASSOC`። `Select dimensions`። ከተሳሰሩባቸው ነገሮች ነጻ ያወጣቸዋል፤ ምንም አይንቀሳቀስም።

### CENTERMARK

ተለዋጭ ስሞች፦ `CM`፣ `DIMCENTER`፣ `DCE`። `Select circle or arc to add center mark`፣ Enter እስኪጫን ድረስ ተደግሞ። በማዕከሉ መስቀልና ከጠመዝማዛው ትንሽ ባሻገር አራት የማዕከል መስመሮችን (የመስመር ዓይነት CENTER) ይስላል፣ እንደ ተራ መስመሮች በወቅታዊው ንብርብር ላይ፤ ከአሁኑ ልኬት ቅንብር የቀስት መጠንና አጠቃላይ ስኬል ይለካል፣ በUCS ይዞራል። ክቡ ቢንቀሳቀስ አይከተሏቸውም።

### CENTERLINE

ተለዋጭ ስሞች፦ `CL`። `Select first line`፣ `Select second line`። በሁለት መስመሮች መካከል መስመር ይስላል (ሲገናኙ በመከፋፈያው)፣ ከነሱ ትንሽ ረዘም ያለ፣ በመስመር ዓይነት CENTER። ተራ መስመር ነው፤ ሁለቱን መስመሮች አይከተልም።

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

ተለዋጭ ስሞች የሉትም። እያንዳንዱ `Enter new value for … <current>` ብሎ ይጠይቃል እና ያንን መጠን ለ**አዲስ** ልኬቶች ያዘጋጃል፦ አጠቃላይ ስኬል፣ የጽሑፍ ቁመት፣ የቀስት መጠን፣ የአስርዮሽ ቦታዎች (እስከ 8)፣ በጽሑፉ ዙሪያ ክፍተት፣ ከልኬት መስመሩ ያለፈ ማራዘሚያ፣ ከመነሻው ማካካሻ። [የልኬት መጠኖችን አዘጋጅ](topic:dimension-settings) ይመልከቱ።

### DIMLUNIT

የልኬት ቅንብር፦ የአዲስ ልኬቶች የርዝመት ቅርጸት ብቻ (1 ሳይንሳዊ፣ 2 አስርዮሽ፣ 3 ኢንጂነሪንግ፣ 4 አርኪቴክቸራል፣ 5 ክፍልፋይ)።

### DIMSTYLE እና -DIMSTYLE

ተለዋጭ ስሞች፦ `DST`፣ `DDIM`፣ `D`። የልኬት ስታይል አስተዳዳሪ፦ {{ui:Set current}}፣ {{ui:New…}}፣ {{ui:Modify…}}፣ {{ui:Rename…}}፣ {{ui:Delete}}፣ {{ui:Compare…}}፣ {{ui:Apply to selected}}። በትዕዛዝ መስመሩ `-DIMSTYLE`፦ `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`። [የልኬት መጠኖችን አዘጋጅ](topic:dimension-settings#named-dimension-styles) ይመልከቱ።

### DIMEDIT እና DIMTEDIT

`DIMEDIT` (`DED`)፦ `Dimension edit [Home/New/Rotate/Oblique] <Home>`፣ ከዚያ ልኬቶቹ (ወይም አስቀድመው የተመረጡት)። New ጽሑፍ ይጠይቃል (`<>` = የተለካው)፤ Rotate አንግል ይጠይቃል (0 ጽሑፉን ይመልሳል)፤ Oblique የማራዘሚያ መስመሮቹን አንግል ከX ዘንግ ይጠይቃል (Enter = የለም፤ መስመራዊና አሰላለፍ ልኬቶች ብቻ)። `DIMTEDIT` (`DIMTED`)፦ `Dimension text [Left/Right/Center/Home/Angle] <Center>`። [የልኬት መጠኖችን አዘጋጅ](topic:dimension-settings#change-dimension-text-and-extension-lines) ይመልከቱ።

### DIMTEXTUNIT

ተለዋጭ ስሞች፦ `DTU`። `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`፣ ወይም ልኬቶች ሲመረጡ `Units in the text of the selected dimensions`። የተለካውን ርዝመት በዚያ አሃድ ይጽፋል፣ አሃዱም ከኋላው (DIMLFAC እና DIMPOST ቅጥያ)፤ `D` ወደ ንድፉ አሃዶች ይመልሳል። [በሚሊሜትር፣ ሴንቲሜትር፣ ሜትር ወይም ኪሎሜትር ልኬቶች](topic:dimension-settings#dimensions-in-mm-cm-m-or-km) ይመልከቱ።

### REVCLOUD

ተለዋጭ ስሞች፦ `RC`። `Arc length: … Type: …` ያትማል፣ ከዚያ `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`። Rectangular `Specify opposite corner` ይጠይቃል፤ Polygonal `Specify next point (Enter closes the cloud) [Undo]`፤ Freehand ጠቋሚውን እስከ ጠቅታ ወይም {{key:Enter}} ይከተላል፤ `O` `Select object` እና `Reverse direction? [Yes/No] <N>` ይጠይቃል እና ነገሩን ወደ ደመና ይቀይራል። `A` `Specify the length of each arc` ይጠይቃል። `R`፣ `P` እና `F` ለሚቀጥለው ደመና ዓይነቱን ይመርጣሉ። ውጤቱ የቅስት ዝግ ፖሊላይን ነው።

### MLEADER

ተለዋጭ ስሞች፦ `MLD`፤ ወይም {{ui:Leader}}። `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`፣ `Specify leader landing location`፣ ከዚያ በቦታው ሳጥን ውስጥ ጽሑፉ (ወይም ያለዚያ `Enter text (an empty line ends)`)። `Block` መጀመሪያ የብሎክ ስም ይጠይቃል እና ባለብዙ መሪው ጽሑፉ ፋንታ ያንን ብሎክ ያሳያል። ተጨማሪ የመሪ መስመሮች፦ {{cmd:MLEADEREDIT}}። በDWG እንደ እውነተኛ ባለብዙ መሪ ይቀመጣል፤ DXF የሳለውን መስመሮች፣ የቀስት ጭንቅላትና ጽሑፍ ይይዛል።

### MLEADEREDIT

ተለዋጭ ስሞች፦ `MLE`። `Select a multileader`፣ ከዚያ `Specify leader arrowhead location [Remove leaders/Block content/Text content]`፦ እያንዳንዱ ነጥብ ከአዲስ የቀስት ጭንቅላት ወደ ተመሳሳዩ ማረፊያ የመሪ መስመር ያክላል፣ እስከ Enter። `Remove leaders` ከዚያ ጠቅ የሚያደርጉትን የመሪ መስመር ያነሳል (ባለብዙ መሪ ቢያንስ አንድ ይይዛል)። `Block content` የብሎክ ስም ይጠይቃል እና ያንን ብሎክ ከጽሑፉ ፋንታ ያሳያል (ባህሪያቱ ይጠየቃሉ)፤ `Text content` ጽሑፉን ይመልሳል። እያንዳንዱ የመሪ መስመር የራሱ መያዣ አለው። DWG እያንዳንዱን የመሪ መስመር እና ብሎኩን በአንድ ባለብዙ መሪ ይይዛል።

### MLEADERALIGN

ተለዋጭ ስሞች፦ `MLA`። `Select multileaders`፣ ከዚያ `Select multileader to align to [Distribute/Spacing/Use current spacing]` እና `Specify direction`። የሌሎቹን ባለብዙ መሪዎች ማረፊያዎች (እና ጽሑፋቸውን ወይም ብሎካቸውን) በተመረጠው ማረፊያ በኩል ባለው መስመር ላይ ያንቀሳቅሳል በዚያ አቅጣጫ፤ የቀስት ጭንቅላቶቹ ወደሚጠቁሙበት ይቀራሉ። `Spacing` በተመሳሳይ ርቀት እኩል ያደርጋቸዋል፤ `Distribute` ሁለት ነጥቦች ይጠይቃል እና በመካከላቸው እኩል ያሰራጫቸዋል። ቢያንስ ሁለት ባለብዙ መሪዎች ያስፈልጋሉ።

### MLEADERCOLLECT

ተለዋጭ ስሞች፦ `MLC`። `Select multileaders`፣ ከዚያ `Specify collected multileader location [Vertical/Horizontal]` (Enter የመጀመሪያው ያለበትን ቦታ ያቆያል)። ከብዙዎች አንድ ባለብዙ መሪ ይሠራል፦ የብሎክ ይዘት ሁሉንም ጎን ለጎን ወይም አንዱን ከሌላው በታች የሚይዝ አዲስ ብሎክ ይሆናል፤ የጽሑፍ ይዘት ለእያንዳንዱ መስመር ያለው አንድ ማስታወሻ ይሆናል። የመጀመሪያው ባለብዙ መሪ መሪ መስመሮቹን ያቆያል፤ ሌሎቹ ይወገዳሉ። የጽሑፍና የብሎክ ይዘት ድብልቅ ውድቅ ይደረጋል።

### TABLE

ተለዋጭ ስሞች፦ `TB`፤ ወይም {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}። ሰንጠረዥ ይሠራል፦ አንድ ነገር ሆኖ እንደማንኛውም ነገር የሚያንቀሳቅሱት፣ የሚገለብጡት፣ የሚያዞሩት፣ የሚያስፉት እና የሚያትሙት፣ ሕዋሶቹም እንደ መረጃ ተይዘው።

- `Number of data rows or [Paste/File/Style] <3>`፣ ከዚያ `Number of columns <3>`፣ `Text height` እና `Top left corner of the table`። ሰንጠረዡ የርዕስ ረድፍ (አንድ የተዋሃደ ሕዋስ) እና ከመረጃ ረድፎቹ በላይ ርዕስ ረድፍ ያገኛል።
- `P`፦ ከቅንጥብ ሰሌዳ የስፕሬድሺት ሕዋሶች ሰንጠረዥ (ጽሑፍ በሕዋሶች መካከል ታብ ያለው)። ከዚህ ዓይነት ሕዋሶች ጋር {{key:Ctrl+V}} መጫን ተመሳሳይ ያደርጋል፣ CadCraft የራሱ ቅጂ አዲስ ካልሆነ በቀር (ወይም CadCraft መለየት ካልቻለ፦ የራሱን ቅጂ ለጥፎ ይናገራል)። `F`፦ ከ`.csv` ወይም ከታብ የተለየ ፋይል ሰንጠረዥ። የመጀመሪያው ረድፍ የርዕስ ረድፍ ይሆናል፤ የአምድ ወርዶች ጽሑፉን ይገጥማሉ።
- `S`፦ ለዚህ ሰንጠረዥ የሰንጠረዥ ስታይል ይመርጣል ([{{cmd:TABLESTYLE}}] ይመልከቱ)።
- ሙሉ ያልሆነ የረድፍ ወይም የአምድ ብዛት፣ እና ሰንጠረዥ ከሚይዘው በላይ ሕዋሶች (2,000 ረድፎች፣ 200 አምዶች፣ 40,000 ሕዋሶች) ውድቅ ያደርጋል።
- {{cmd:EXPLODE}} ሰንጠረዥን ወደ መስመሮችና ጽሑፍ ይለውጠዋል። በDWG ሲቀመጥ ሰንጠረዥ ሌሎች ፕሮግራሞች ሊያስተካክሉት የሚችሉት እውነተኛ የሰንጠረዥ ነገር ነው፤ በDXF ሲቀመጥ እሱን የሚስል ብሎክ ነው፣ እና CadCraft እንደገና ሰንጠረዥ አድርጎ ይከፍተዋል።

### TABLEDIT

ተለዋጭ ስሞች፦ `TABLEEDIT`፣ `TABEDIT`፤ ወይም ሕዋሱ ላይ ድርብ ጠቅ ያድርጉ። ሰንጠረዥ ያርማል።

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`። ሕዋስ ጠቅ ያድርጉ፣ ወይም ሰንጠረዡ ሲመረጥ ስሙን ይጻፉ (`B3`፦ አምድ B፣ ረድፍ 3፤ የርዕስ ረድፉ ረድፍ 1 ነው)። በአሳሹ ሕዋሱ ላይ ሳጥን ይከፈታል፦ {{key:Enter}} ጽሑፉን ያቆያል፣ {{key:Tab}} ወደ ቀጣዩ ሕዋስ ይሄዳል፣ {{key:Alt+Enter}} አዲስ መስመር ይጀምራል፣ {{key:Esc}} ሕዋሱን እንደነበረ ይተዋል።
- በ`=` የሚጀምር ጽሑፍ ቀመር ነው፦ `=A3+B3`፣ `=B3*C3`፣ `=Sum(B3:B9)`፣ `=Average(B3:B9)`፣ `=Count(B3:B9)`፣ `=Min(…)`፣ `=Max(…)`፣ በ `+ - * / ^`፣ ቅንፎችና እንደ `sqrt` እና `round` ያሉ ተግባራት። ሕዋሱ እሴቱን ያሳያል፤ ራሱን የሚጠቅስ ቀመር፣ ከሰንጠረዡ ውጭ ያለ ሕዋስ፣ ወይም ቁጥር የሌለው ሕዋስ `####` ያሳያል እና የትዕዛዝ መስመሩ ለምን እንደሆነ ይናገራል።
- `R` / `C`፦ በተመረጠ ሕዋስ `Insert` ወይም `Delete` ረድፎችን ወይም አምዶችን (ስንት፣ እና ከላይ ወይም ከታች፣ ግራ ወይም ቀኝ)። ቀመሮች የሚጠቅሷቸውን ሕዋሶች ይከተላሉ።
- `S`፦ የአምዱ ወርድና የረድፉ ቁመት። ረድፍ ከጽሑፉ በታች ዝቅ አይልም። የተመረጠ ሰንጠረዥ በእያንዳንዱ አምድና ረድፍ ጠርዝ ላይ መያዣ ይኖረዋል።
- `M`፦ ከአንድ ሕዋስ ወደ ሌላ ያዋህዱ፤ `U`፦ መለያየት። `A`፦ አሰላለፍ (`TL` ላይ ግራ … `MC` መሃል … `BR` ታች ቀኝ)። `H`፦ የዚህ ሕዋስ የራሱ የጽሑፍ ቁመት (0 = የስታይሉ)። `K`፦ ረድፉን ርዕስ፣ ርዕስ ረድፍ ወይም የመረጃ ረድፍ ያድርጉ። `CL`፦ ሕዋሱን ባዶ ያድርጉ።
- በተቆለፈ ንብርብር ላይ ያለ ሰንጠረዥ፣ ሁሉንም ረድፎች ወይም አምዶች መሰረዝ፣ እና ሌላ የተዋሃደ ሕዋስን በሁለት የሚቆርጥ ውህደት ውድቅ ያደርጋል።

### TABLESTYLE

ተለዋጭ ስሞች፦ `TS`። የሰንጠረዥ ስታይሎችን ከስንት ሰንጠረዦች እንደሚጠቀሙባቸው ጋር ይዘረዝራል፣ ከዚያ `Table style: [New/Set/Edit/Delete/Apply]`።

- ስታይሉ የርዕስ፣ ርዕስ ረድፍና የመረጃ ረድፎች የጽሑፍ ቁመትና አሰላለፍ፣ የሕዋስ ህዳግ፣ እና የትኞቹ ድንበሮች እንደሚሳሉ (ውጫዊ፣ ረድፎች መካከል፣ አምዶች መካከል) ይይዛል።
- `N` ከወቅታዊው አንድ ስታይል ይሠራል እና ወቅታዊ ያደርገዋል፤ `S` ወቅታዊውን ስታይል ያዘጋጃል (አዳዲስ ሰንጠረዦች ይወስዱታል)፤ `E` አንዱን ያርማል፦ የሚጠቀሙ ሰንጠረዦች ይሳላሉ፤ `A` የተመረጡ ሰንጠረዦችን የአሁኑን ስታይል ይሰጣል፤ `D` ይሰርዛል (Standard አይደለም፣ ወቅታዊም አይደለም፤ የተጠቀሙባቸው ሰንጠረዦች መልካቸውን ይጠብቃሉ)።
- ስታይሎች በንድፉ ይቀመጣሉ (DWG እና DXF)።

### TABLEEXPORT

ሰንጠረዡ የሚያሳየውን እንደ CSV ፋይል ያስቀምጣል (ቀመር እንደ ዋጋው)። `Select a table` ወይም አስቀድመው ይምረጡት። ከ`=`፣ `+`፣ `-` ወይም `@` የሚጀምሩ የጽሑፍ ሕዋሶች ስፕሬድሺቱ እንዳያስኬዳቸው ቀዳሚ `'` ያገኛሉ።

### TABLEPASTE

ተለዋጭ ስሞች፦ `PASTETABLE`። ከቅንጥብ ሰሌዳ የስፕሬድሺት ሕዋሶች ሰንጠረዥ ይሠራል፣ ከዚያ የላይኛው ግራ ጥግ ይጠይቃል። እንደ {{cmd:TABLE}} › `Paste` ተመሳሳይ ነው።

### DATALINK

ተለዋጭ ስሞች፦ `DL`። `Data link: [New/List/Remove] <New>`። `N` የCSV ፋይል ይጠይቃል፣ ሰንጠረዥ ከእሱ ያስቀምጣል እና የፋይሉን ስም ያስታውሳል። `L` ማገናኛዎቹን ከፋይላቸው፣ ከመጠናቸው፣ መቼ እንደተነበቡ እና ስንት ሰንጠረዦች እንደሚጠቀሙባቸው ጋር ይዘረዝራል። `R` ማገናኛውን ያስወግዳል (ሰንጠረዦቹ ተራ ሰንጠረዦች ሆነው ይቀራሉ)።

### DATALINKUPDATE

ተለዋጭ ስሞች፦ `DLU`። የውሂብ ማገናኛውን ፋይል እንደገና ያነባል እና ከእሱ ጋር የተገናኙ ሰንጠረዦችን ይሞላል (ረድፎችና አምዶች ከእሱ ጋር እንዲዛመዱ ይጨመራሉ ወይም ይወገዳሉ)። አሳሽ ፋይል በራሱ መክፈት ስለማይችል ፋይሉን እንደገና እንዲመርጡ ይጠይቃል። ብዙ ማገናኛዎች ካሉ የትኛውን እንደሆነ ይጠይቃል።

### FIELD

በንድፉ ውስጥ መስክ ያስቀምጣል፦ ራሱ የሚሰላ ጽሑፍ። `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`፦

- `D`፦ አሁን፣ ወይም የተቀመጠ፣ የተፈጠረ ወይም የታተመ ቀን፣ እና ቅርጸት (`yyyy-MM-dd`፣ `d MMMM yyyy`፣ `HH:mm`)። `F`፦ የፋይሉ ስም፣ ቅጥያው ባለውም ሆነ ሳይኖር። `S`፦ የሉሁ ቁጥር፣ ርዕሱ፣ ወይም ስንት ሉሆች እንዳሉ። `P`፦ የንድፍ ባህሪ በስም ([{{cmd:DWGPROPS}}] ይመልከቱ)። `O`፦ ነገር ይምረጡ፣ ከዚያ ምን እንደሚነበብ (ስፋት፣ ርዝመት፣ ዙሪያ፣ ራዲየስ፣ ዲያሜትር፣ ንብርብር፣ ስም፣ x፣ y፣ ጽሑፍ፣ ሽክርክሪት፣ ቀለም) እና የአስርዮሽ ቦታዎች። `E`፦ ቀመር። `C`፦ ጽሑፍ እንደተጻፈ የኮዶች ያሉበት፣ ለምሳሌ `Sheet %<sheetnumber>% of %<sheetcount>%`።
- ከዚያ `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`፦ የተመረጠ ጽሑፍ መስኩ ከያዘው በኋላ ይጨመራል፤ ሕዋስም እንዲሁ፤ ባህሪያት ያለው የብሎክ ማጣቀሻ የትኛውን ባህሪ እንደሚጠይቅ ይጠይቃል፤ {{key:Enter}} ለአዲስ ጽሑፍ ቁመትና ነጥብ ይጠይቃል።
- በማያ ገጹ ላይ መስክ ቀላል ግራጫ ዳራ አለው፤ ህትመቱና PDFው ፈጽሞ የለውም። በመስኩ ጽሑፍ ላይ በእጅ መጻፍ መስኩን ያበቃል። ሊሰላ የማይችል መስክ `####` ያሳያል።
- የነገር መስክ ነገሩን በCadCraft ነገሮች ላይ በሚያስቀምጠው ቁልፍ ያገኛል (ቅንብሮች › CadCraft › ለውህደት ተስማሚ ፋይሎች)፤ ቁልፎች ጠፍተው ሲሆኑ ውድቅ ያደርጋል።

### UPDATEFIELD

ተለዋጭ ስሞች፦ `UPDATEFIELDS`። `Select the objects whose fields to update (Enter: every field) or [Settings]`። `S` መስኮቹ በራሳቸው መቼ እንደሚዘምኑ ያዘጋጃል፦ የ`O` (ክፈት)፣ `S` (አስቀምጥ)፣ `P` (ህትመት)፣ `R` (regen) ፊደሎችን ይጻፉ (ለመጀመሪያው አራቱም)፣ ወይም `NONE`።

### DWGPROPS

ተለዋጭ ስሞች፦ `DRAWINGPROPS`። የንድፉን ባህሪያት ይዘረዝራል፣ ከዚያ `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`። የመጀመሪያዎቹ ስድስቱ በ{{ui:Drawing details}} ፓነል የሚታዩት ናቸው፤ `U` የራስዎን ስምና እሴት ይጨምራል፣ `R` አንዱን ያስወግዳል። መስኮች ያነቧቸዋል (`%<prop:title>%`፣ `%<prop:Client>%`) እና ወዲያው ይከተላሉ። ከተገነቡት ስሞች አንዱ የሆነን ወይም `%`፣ `<`፣ `>`፣ ጥቅስ ወይም የኋላ ሰረዝ የያዘን ብጁ ስም ውድቅ ያደርጋል።

## ፓራሜትሪክ

[ንድፍን ገድብ](topic:constraints) እና [መለኪያዎችንና እኩልታዎችን ተጠቀም](topic:parameters) ይመልከቱ። ገደቦች በ{{ui:Model}} ትር ላይ ይሠራሉ።

### GEOMCONSTRAINT እና የGC ትዕዛዞች

ተለዋጭ ስም `GCON`፦ `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`፣ ከዚያ የዚያ ትዕዛዝ ጥያቄዎች።

- {{cmd:GCHORIZONTAL}}፣ {{cmd:GCVERTICAL}}፦ `Select an object [2Points] <2Points>`።
- {{cmd:GCPARALLEL}}፣ {{cmd:GCPERPENDICULAR}}፣ {{cmd:GCCOLLINEAR}}፣ {{cmd:GCCONCENTRIC}}፣ {{cmd:GCEQUAL}}፣ {{cmd:GCTANGENT}}፦ `Select first object`፣ `Select second object` (ሁለተኛው ይንቀሳቀሳል)።
- {{cmd:GCCOINCIDENT}}፦ `Select first point [Object/Autoconstrain] <Object>`፣ `Select second point [Object] <Object>`።
- {{cmd:GCFIX}}፦ `Select point [Object] <Object>`።
- {{cmd:GCSYMMETRIC}}፦ `Select first object [2Points] <2Points>`፣ `Select second object`፣ `Select symmetry line`።

### DIMCONSTRAINT እና የDC ትዕዛዞች

ተለዋጭ ስም `DCON`፦ `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`።

- {{cmd:DCLINEAR}}፣ {{cmd:DCHORIZONTAL}}፣ {{cmd:DCVERTICAL}}፦ `Specify first constraint point [Object] <Object>`፣ `Specify second constraint point`፣ `Specify dimension line location`፣ `Dimension text <d1=40>` (ቁጥር፣ ቀመር፣ ወይም `name=expression`)።
- {{cmd:DCALIGNED}}፦ ከላይ እንደሆነ፣ ከ`[Object/Point & line/2Lines]` ጋር።
- {{cmd:DCRADIUS}}፣ {{cmd:DCDIAMETER}}፦ `Select arc or circle`። {{cmd:DCANGULAR}}፦ `Select first line or arc`፣ `Select second line`።
- {{cmd:DCCONVERT}}፦ `Select dimensions to convert`።

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}፦ `Select objects [Settings]`። `S` የርቀትና የአንግል መቻቻሎችን ይጠይቃል።
- {{cmd:DELCONSTRAINT}} (ተለዋጭ ስም `DELCON`)፦ `Select objects`፤ ገደቦቻቸው ይጠፋሉ።
- {{cmd:CONSTRAINTBAR}} (ተለዋጭ ስም `CBAR`)፦ `Select objects [Showall/Hideall]`፣ ከዚያ `[Show/Hide]`።
- {{cmd:DCDISPLAY}}፦ `Enter an option [Show/Hide]`።

### PARAMETERS እና -PARAMETERS

{{cmd:PARAMETERS}} (ተለዋጭ ስሞች `PAR`፣ `PARAM`) የ{{ui:Parameters}} ፓነልን ይከፍታል። `-PARAMETERS`፦ `Enter an option [New/Edit/Rename/Delete/?] <?>`።

### SWBOUT

ተለዋጭ ስም `SWMACRO`። በSolidWorks ሞዴሉን እንደ አንድ የተገደበ ረቂቅ የሚገነባ ማክሮ (.swb) ያወርዳል። [ረቂቆችን ወደ ሌሎች የክፍል ሞዴሎች አንቀሳቅስና ከእነሱ አምጣ](topic:solidworks-sketches) ይመልከቱ።

## ብሎኮች

### ANNOSCALE

ተለዋጭ ስሞች፦ `CANNOSCALE`። የንድፉን የማብራሪያ ስኬልና ስንት የማብራሪያ ነገሮች እንዳሉት ይናገራል፣ ከዚያ `New annotation scale` ብሎ ይጠይቃል፦ `1:50`፣ `1:100`፣ `2:1`፣ ባዶ ቁጥር (`50` ማለት 1:50)፣ ወይም የንድፉ ከራሳቸው ስኬሎች አንዱ ስም ይጻፉ። እያንዳንዱ የማብራሪያ ጽሑፍና ልኬት በአዲሱ ስኬል ላይ ተመሳሳይ መጠን እንዲታተም ይስተካከላል፣ በአንድ የቀልብስ ደረጃ። የማብራሪያ ያልሆኑ ነገሮች አይነኩም፣ እንዲሁም አዲሱን ስኬል የማይዘረዝር ስኬል ዝርዝር የያዘ ነገር አይነካም ({{cmd:OBJECTSCALE}})። [ስኬሎችና ወረቀቶች](topic:units-papers-scales#annotate-by-scale) ይመልከቱ።

### OBJECTSCALE

ተለዋጭ ስሞች፦ `OBJSCALE`። `Select annotative objects`፣ ከዚያ `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`። የማብራሪያ ጽሑፍ ወይም ልኬት የማብራሪያ ስኬሎች ዝርዝር ይይዛል። `Add` እና `Delete` ስኬል ይጠይቃሉ (`1:50`፣ `2:1`፣ ባዶ ቁጥር፣ ወይም የንድፉ ከራሳቸው ስኬሎች አንዱ ስም)፤ `Current scale` የንድፉን የማብራሪያ ስኬል ይጨምራል፤ `List` የእያንዳንዱን ነገር ስኬሎች ያትማል። የእይታ መስኮት ስኬሉ በነገሩ ዝርዝር ውስጥ ከሆነ፣ ነገሩን በዚያ ስኬል ወረቀት ቁመቱን የሚያትመውን መጠን ያሳየዋል፣ በማያ ገጹና በህትመቶች ላይ። የመጨረሻው ስኬል ሊሰረዝ አይችልም። የማብራሪያ ያልሆኑ ነገሮች ይቀራሉ፦ በመጀመሪያ በProperties ውስጥ Annotative ያብሩ። ዝርዝሮቹ በDWG እና DXF እንደ CadCraft የራሱ ውሂብ ይቀመጣሉ። [ስኬሎችና ወረቀቶች](topic:units-papers-scales#annotate-by-scale) ይመልከቱ።

### ANNOALLVISIBLE

ተለዋጭ ስሞች፦ `ANNOALL`። `Show annotative objects at all scales [ON/OFF]`። ON (ንድፍ ሲጀምር)፦ የማብራሪያ ነገር ዝርዝሩ ውስጥ ያልሆነ ስኬል ባለ የእይታ መስኮት፣ ወይም በሞዴሉ፣ በያለው መጠን ይታያል። OFF፦ እዚያ አይታይም፣ እና በሞዴሉ ውስጥ መምረጥ አይቻልም። መቀያየሪያው አንድ የቀልብስ ደረጃ ነው፤ በፋይሉ ውስጥ አይቀመጥም።

### SCALELISTEDIT

ተለዋጭ ስሞች፦ `SCALELIST`። `Scale list [Add/Edit/Delete/List/Reset]` እስከ {{key:Enter}}። Add፦ `Scale name`፣ `Paper units`፣ `Drawing units`። Edit እና Delete የስኬሉን ስም ይጠይቃሉ። የንድፉ የራሳቸው ስኬሎች ወደ የእይታ መስኮትና የህትመት ስኬል ዝርዝሮች ይገባሉ እና ከንድፉ ጋር ይቀመጣሉ። [ስኬሎችና ወረቀቶች](topic:units-papers-scales#scales) ይመልከቱ።

### SPLINE, SPLINEDIT እና PEDIT

`SPLINE` (`SPL`)፦ `First point of the spline [Method/Object] (Fit points)`። Fit፦ ኩርባው የሚያልፍባቸው ነጥቦች፣ ከዚያ `Close`፣ `Undo`፣ ከዚያ `Start tangent` እና `End tangent` (ነጥብ ወይም {{key:Enter}})። Method › Control vertices ዲግሪ (1 እስከ 5) ይጠይቃል እና ከቁጥጥር ፖሊጎን ይስላል። Object ፖሊላይኖችን በጫፎቻቸው በኩል ወደ ስፕላይኖች ይቀይራል። `SPLINEDIT` (`SPE`)፦ `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`፤ Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`፤ Edit vertex `[Add control point/Move/Weight/eXit]`። `PEDIT` (`PE`)፦ `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`፣ `M` ለበርካታ ነገሮች፤ መስመሮች፣ ቅስቶችና ስፕላይኖች መጀመሪያ እንደ ፖሊላይኖች ይቀርባሉ። [ፖሊላይኖችና ስፕላይኖች](topic:splines) ይመልከቱ።

### BLOCK

ተለዋጭ ስሞች፦ `B`፣ `BMAKE`።

- `Enter block name`። ካለ፦ `Block "…" already exists. Redefine it? [Yes/No] <N>`።
- `Specify insertion base point`
- `Select objects`። በአንድ አዲስ ብሎክ ማጣቀሻ ይተካሉ።

### WBLOCK

ተለዋጭ ስሞች፦ `W`፣ `-WBLOCK`። ብሎክ፣ አንዳንድ ነገሮች ወይም ሙሉው ንድፍ ወደ አዲስ DWG ወይም DXF ፋይል ይጽፋል። `WBLOCK source [Block/Entire drawing/Objects] <Objects>`፦

- **Objects**፦ `Specify insertion base point` (የአዲሱ ንድፍ መነሻ ይሆናል)፣ `Select objects`፣ ከዚያ `File format [DWG/DXF/R12 DXF]` እና `File name for the new drawing`፣ ከዚያ `What to do with the objects [Retain/Convert to block/Delete]`። Convert በአንድ የፋይሉ ስም ብሎክ ማጣቀሻ ይተካቸዋል፤ Delete ያስወግዳቸዋል።
- **Block**፦ `Block to write out`። የብሎኩ የራሳቸው ነገሮች፣ መሠረት ነጥቡ እንደ መነሻ፣ ውስጥ ያሉ ብሎኮችንም ጨምሮ።
- **Entire drawing**፦ በሞዴል ቦታ ያለ እያንዳንዱ ነገር። ሉሆች አይጻፉም፤ ሉሆቹን የሚያቆይ ቅጂ ከፈለጉ {{cmd:SAVEAS}} ይጠቀሙ።

አዲሱ ፋይል ነገሮቹ የሚጠቀሙባቸውን ንብርብሮች፣ የመስመር ዓይነቶች፣ ጽሑፍና የልኬት ስታይሎች፣ ብሎኮችና የንድፉን አሃዶች ብቻ ይይዛል። የDWG ስሪት {{cmd:SAVEAS}} የመጨረሻ የተጠቀመበት ነው። በአሳሹ ፋይሉ ይወርዳል፤ በStudio የማስቀመጫ መስኮት ይከፈታል።

### ATTDEF

ተለዋጭ ስሞች፦ `ATT`፣ `DDATTDEF`፣ `-ATTDEF`፤ ወይም {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}። ሁነታዎቹን ያትማል፣ ከዚያ `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`፣ `Enter attribute tag name`፣ `Enter attribute prompt`፣ `Enter default attribute value` (ቋሚ ሲሆን `Enter attribute value`)፣ `Specify start point of text`፣ `Specify text height`፣ `Specify rotation angle of text`። {{cmd:BLOCK}} የባህሪ ትርጓሜዎቹን ወደ ብሎኩ ይወስዳል።

### EATTEDIT እና ATTEDIT

`EATTEDIT` (`DDATTE`፣ ወይም ባህሪ ያለውን ማጣቀሻ ድርብ ጠቅ፤ {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}})፦ `Select a block reference with attributes`፣ ከዚያ የ{{ui:Edit attributes}} መስኮት። `ATTEDIT` (`ATE`፣ `-ATTEDIT`)፦ ያው ማጣቀሻ፣ ከዚያ ለእያንዳንዱ ባህሪ `<prompt> (<TAG>) <value>`፤ {{key:Enter}} እሴቱን ያቆያል። [ባህሪያት](topic:attributes#see-and-change-the-values) ይመልከቱ።

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`። እሴቶች ይቀራሉ፤ አዳዲስ ባህሪያት ነባሪያቸውን ያገኛሉ፣ የተወገዱት ይጠፋሉ፣ ቦታዎች ዳግም ይጀመራሉ።

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}። መስኮቱ፦ ብሎኩ፣ ባህሪያቱ (መለያ፣ ጥያቄ፣ ነባሪ፣ ሁነታዎች፣ ቅደም ተከተል)፣ {{ui:Update the references (values kept)}}፣ {{ui:Apply}}።

### REFEDIT እና REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}። `REFEDIT`፦ `Select the block reference to edit in place` (ወይም ምርጫው)። `REFCLOSE`፦ `Save the changes to "…" [Save/Discard] <Save>`፤ የሰንደቅ ዓላማው {{ui:Save the block}} እና {{ui:Discard}} ተመሳሳይ ያደርጋሉ። አጠቃላይ አርትዖቱ አንድ የቀልብስ ደረጃ ነው። [ባህሪያት](topic:attributes#edit-a-title-block-where-it-is-refedit) ይመልከቱ።

### PENPRESSURE

`[ON/OFF]`፦ የብዕር ምት ግፊት በ{{cmd:SKETCHFIX}} እና {{cmd:SKETCHLIVE}} የሚሠሩትን የመስመር ውፍረት ያዘጋጅ እንደሆነ (መጀመሪያ በርቷል)። [በብዕር ይሳሉ](topic:sketch-with-a-pen#pressure-sets-the-lineweight) ይመልከቱ።

### OFFICESTANDARD

ተለዋጭ ስም `OFFSTD`። ለዚህ ንድፍ የሚሠራው የቢሮ ደረጃ የትኛው እንደሆነና ከየት እንደሚመጣ ይናገራል፦ የንድፉ የራሱ መዝገብ፣ የቡድንዎ የተጋራ፣ ወይም የእርስዎ Default Policies (የጽሑፍ ቁመቶች `all.anno.*`)፤ ምንም ከሌለ የፕሮግራሙ ራሱ መጠኖች። `[Import/Layers/Title block/Clear/eXit]`፦ `Import` የ`cc-office-standard` .json (SuperCad እና BimCraft የሚጽፉትን መዝገብ) ወደዚህ ንድፍ ያነባል፣ ከእሱ ጋር በDWG እና DXF ይቀመጣል፤ `Layers` ንድፉ የሌለውን የቢሮ ንብርብሮች በአንድ የቀልብስ ደረጃ ይጨምራል፣ እና አንድንም አያስወግድም፤ `Title block` የቢሮውን መስኮቶች ከዚህ ንድፍ የራሱ እሴቶች ጋር ይዘረዝራል፤ `Clear` የንድፉን የራሱ መዝገብ ያስወግዳል። የማብራሪያ ጽሑፍና ልኬት ቁመቶች የሚሠራውን ደረጃ ይከተላሉ። [ስኬሎችና ወረቀቶች](topic:units-papers-scales) ይመልከቱ።

### BPARAMS

ተለዋጭ ስሞች፦ `BPM`፣ `BLOCKPARAMS`። በብሎክ አርታኢው ላለው ብሎክ፣ ለተመረጠው ማጣቀሻ ብሎክ፣ ወይም ለሰየሙት ብሎክ (`Block name`) የመለኪያዎች አስተዳዳሪን ይከፍታል፦ ቀመሮች ያላቸው መለኪያዎች፣ ከሁኔታዎቻቸው ጋር በርካታ የታይነት መለኪያዎች፣ እና የተመረጠው ማጣቀሻ የራሱ እሴቶችና ሁኔታዎች። [የራስዎ መለኪያዎችና የታይነት ሁኔታዎች](topic:dynamic-blocks#your-own-parameters-and-visibility-states) ይመልከቱ። `-BPARAMS` ተመሳሳዩን በትዕዛዝ መስመሩ ያደርጋል፦ `[Parameter/Visibility/State/Assign/Reference/Done]`።

### BEDIT እና BCLOSE

`BE`፤ ወይም {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}። `Enter block name to edit <the selected reference's block>` የብሎክ አርታኢውን ይከፍታል። `BCLOSE` `Close the block editor on "…" [Save/Discard] <Save>` ብሎ ይጠይቃል፤ የሰንደቅ ዓላማው {{ui:Save block}} እና {{ui:Discard changes}} ተመሳሳይ ያደርጋሉ። በአርታኢው የተሠራ ሁሉ አንድ የቀልብስ ደረጃ ነው።

### VIEWBASE

ተለዋጭ ስም `FLATSHOT`። በ3D ትሩ ላይ ያሉ ጠጣሮች ጠፍጣፋ 2D እይታ፦ `View [Front/Top/Right/Left/BAck/BOttom/Iso]`፣ `Hidden lines [Show/Hide]`፣ ስኬል (`1:20`፣ `2:1`፤ {{key:Enter}} ለሉሁ የሚስማማውን ይወስዳል)፣ ከዚያ የእይታው ማዕከል። አንድ ብሎክ ማጣቀሻ፣ የሚታዩት ጠርዞች በVIEW-VISIBLE ላይ፣ የተደበቁት ደግሞ በVIEW-HIDDEN ላይ ሰረዝ። [በሉህ ላይ ጠፍጣፋ እይታዎች](topic:3d-solids#flat-views-on-a-sheet) ይመልከቱ።

### PUBLISH

ተለዋጭ ስሞች፦ `-PUBLISH`፤ ወይም በ{{ui:Plot to PDF}} መስኮት ውስጥ {{ui:All sheets in one PDF}}። `Sheets to plot [All/Some]`፦ {{key:Enter}} እያንዳንዱን ሉህ ያትማል፣ `S` በኮማ የተለዩ ስሞች ይጠይቃል። አንድ PDF፣ ለእያንዳንዱ ሉህ ገጽና ዕልባት። [በአንድ PDF ያሉ ሁሉም ሉሆች](topic:plot-pdf#every-sheet-in-one-pdf) ይመልከቱ።

### SHEETSET

ተለዋጭ ስሞች፦ `SSM`፣ `SHEETSETMANAGER`። ወደ የግራ ፓነሉ {{ui:Sheet set}} ክፍል ያመጣዎታል፦ ከብዙ ንድፎች ሉሆች፣ ተቆጥረውና ርዕስ ተሰጥተው፣ የርዕስ ማገጃዎቻቸው ከስብስቡ ተሞልተው፣ በአንድ PDF ታትመዋል። [የሉሆች ስብስቦች](topic:sheet-sets) ይመልከቱ።

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`)፦ DWG ወይም DXF ይምረጡ፣ ከዚያ የማስገቢያ ነጥቡ። {{cmd:XREF}} (`XR`፣ `-XREF`)፦ `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`፤ ከአንድ በላይ ማገናኛ ካለ ማጣቀሻውን ይምረጡ፣ ወይም `N` ብለው ስሙን ይጻፉ። [የተገናኙ ንድፎች](topic:files#linked-drawings-external-references) ይመልከቱ።

### COUNT

ተለዋጭ ስሞች፦ `BCOUNT`፤ ወይም {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}። `Select a block reference to count, or [All/Export] (Enter: All)`፦ ምርጫ የዚያን ብሎክ በዚህ ቦታ ያሉ ማጣቀሻዎች ሁሉ ይመርጣል እና ይቆጥራል፤ {{key:Enter}} ወይም `A` ሁሉንም ይዘረዝራል፤ `E` ከዚያ `C` (ብዛቶች) ወይም `A` (ባህሪያት) CSV ያወርዳል። [ብሎኮችን ቁጠርና ሰንጠረዥ ላክ](topic:blocks#count-blocks-and-export-a-schedule) ይመልከቱ።

### INSERT

ተለዋጭ ስሞች፦ `I`፣ `DDINSERT`።

- `Enter block name or [File/Library] <last block>` (ፊደሉ ግድ የለውም)። `F` DWG ወይም DXF ይጠይቃል፣ ከዚያ ሙሉው ንድፍ ወይም ከብሎኮቹ አንዱ፤ ቀድሞ የዋለ ስም {{ui:Keep existing}} ወይም {{ui:Rename}} ይጠይቃል። `L` የቤተ-መጻሕፍት ፓነሉን ይከፍታል።
- `Specify insertion point [Scale/Rotate]`። `S` `Specify scale factor` ይጠይቃል፣ `R` `Specify rotation angle` ይጠይቃል፤ ሁለቱም ይታወሳሉ።
- ብሎኩ ቀድሞ ከነገሮች ጎን ቆሞ ሲሆን እና እነዚያ ነገሮች ያለ እሱ በሌላ ቦታ ሲደጋገሙ፣ መስመር ስንት ቦታዎች እንደሚጠቁሙ ይናገራል እና ጥያቄው `suGgested` ያገኛል፦ `G` ያሳያቸዋል፤ ብሎኩን ለማስቀመጥ ከአንዱ አጠገብ ጠቅ ያድርጉ፤ `A` ሁሉንም፤ {{key:Enter}} ወደ ኋላ። ከጎረቤቶቻቸው ሽክርክሪት እና ነባሪ የባህሪ እሴቶች ይወስዳሉ። በክፍት ቦታ ከ20,000 በላይ ነገሮች ያሉባቸው ንድፎች አይፈለጉም።
- ከዚያ ብሎኩ ለሚጠይቀው እያንዳንዱ ባህሪ `Enter <prompt> (<TAG>) <default>`። [የብሎክ ባህሪያት](topic:attributes) ይመልከቱ።

### LIBRARY

ተለዋጭ ስሞች፦ `LIB`። የቤተ-መጻሕፍት ፓነሉን ይከፍታል፦ ነገሮችን አስገባ፣ ዝማኔዎችን ፈልግ፣ የቤተ-መጻሕፍት ክሬዲቶች። ጥያቄ የለም። [ከፋይል ወይም ከቤተ-መጻሕፍት አስገባ](topic:insert-from-file-and-library) ይመልከቱ።

### STEELMEMBER

ተለዋጭ ስሞች፦ `SMEMBER`፤ ወይም የቤተ-መጻሕፍቱ {{ui:Standard}} ትር ላይ {{ui:3D member}}። `Section size <W12x26>` (ትሩ እንደዘረዘረው)፣ ከዚያ `Start point [Column]` እና `End point`፦ በሁለቱ ነጥቦች መካከል በ3D ትሩ ላይ መሬት ላይ የተቀመጠ ጠጣር አባል። `C` የአምዱን መሠረት ነጥብና ቁመቱን ይጠይቃል። አንድ የቀልብስ ደረጃ። [የብረት ክፍሎችንና መደበኛ ክፍሎችን አስቀምጡ](topic:steel-and-standard-parts) ይመልከቱ።

### PARTSLIST

ተለዋጭ ስሞች፦ `PLIST`። `Top left corner of the parts list`፣ ከዚያ `Text height <2.5>`፦ ከቤተ-መጻሕፍት የተቀመጠ እያንዳንዱን መደበኛ ክፍልና የብረት ክፍል ሰንጠረዥ ይስላል (የነገር ቁጥሮች፣ ብዛት፣ ክፍል፣ መደበኛ፣ መጠን፣ ርዝመት፣ ቁሳቁስ፣ ክብደት)። አንድ የቀልብስ ደረጃ። [የብረት ክፍሎችንና መደበኛ ክፍሎችን አስቀምጡ](topic:steel-and-standard-parts#make-a-parts-list) ይመልከቱ።

### PURGE

ተለዋጭ ስሞች፦ `PU`። ምንም የማይጠቀምባቸውን የብሎክ ትርጓሜዎች ያስወግዳል። ጥያቄ የለም።

### DELBLOCKS

ወይም {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}። `Select block to delete [Name/eXit]`፦ የብሎክ ማጣቀሻ ይምረጡ፣ ወይም `N` ለብሎኮች ዝርዝር በማጣሪያ (ብዙ ይምረጡ)፣ ወይም `X` / {{key:Enter}} ለመጨረስ። እያንዳንዱ ማጣቀሻ ይሄዳል፦ በሞዴሉ፣ በእያንዳንዱ ሉህ ላይ እና በሌሎች ብሎኮች ውስጥ፤ ከዚያ ትርጓሜው፤ የትዕዛዝ መስመሩ ምን እንደተሰረዘና ምን መሰረዝ እንዳልተቻለ ይናገራል። ስም የሌላቸው ብሎኮችና የተገናኙ ንድፎች አይቀርቡም። ጥያቄው ለቀጣዩ ብሎክ ይመለሳል፤ መላው ትዕዛዝ አንድ የቀልብስ ደረጃ ነው።

### PASTEBLOCK

{{cmd:PASTEBLOCK}} የቀዱትን ({{cmd:COPYCLIP}}፣ {{cmd:COPYBASE}}) እንደ አንድ ብሎክ ይለጥፋል፦ የማስገቢያ ነጥቡን ይምረጡ እና ወደ አዲስ ብሎክ አንድ ማጣቀሻ እዚያ ይሄዳል፣ ተመርጦ። ብሎኩ የራሱ ስም ያገኛል (`A$C` እና ቁጥር)፤ {{cmd:RENAME}} የእርስዎን ይሰጠዋል። አንድ የቀልብስ ደረጃ ማጣቀሻውንና ብሎኩን ያስወግዳል።

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} የሚተካውን ብሎክና በቦታው የሚገባውን ብሎክ ይጠይቃል (`?` ብሎኮቹን ይዘረዝራል)፣ ከዚያ በሞዴሉ፣ በእያንዳንዱ ሉህ ላይና በሌሎች ብሎኮች ውስጥ ያለውን እያንዳንዱን ማጣቀሻ ይለውጣል። እያንዳንዱ ማጣቀሻ ቦታው፣ ስኬሉ፣ ሽክርክሪቱ፣ ንብርብሩና ሁለቱም ብሎኮች ያሏቸው የባህሪ እሴቶች ይቀራሉ፤ አዲሱ ብሎክ ብቻ ያለው ባህሪ በነባሪዎቹ ይጀምራል፣ እና የጠፉትን እሴቶች ይነግርዎታል። የድሮው ብሎክ ከእንግዲህ ጥቅም ላይ ካልዋለ ለማስወገድ ይጠይቃል። የተገናኙ ንድፎችንና ብሎክ ራሱን ውስጥ የሚያስቀምጥ ተተኪ ውድቅ ያደርጋል። አንድ የቀልብስ ደረጃ።

### MINSERT

{{cmd:MINSERT}} ብሎክን በረድፎችና አምዶች ያስቀምጣል፦ የብሎክ ስም፣ የማስገቢያ ነጥብ፣ ስኬል፣ ሽክርክሪት፣ የረድፎችና የአምዶች ብዛት፣ እና በመካከላቸው ያለው ርቀት። ሙሉው ስብስብ በሽክርክሪቱ ይዞራል። እያንዳንዱ የራሱ ማጣቀሻ ነው (እስከ 10,000)፣ ስለዚህ ማንኛውም ሊንቀሳቀስ ወይም ሊሰረዝ ይችላል።

### BLOCKSPALETTE

ተለዋጭ ስሞች፦ `BLOCKSPAL`፤ ወይም {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}። የብሎኮች ፓነሉን ከጠቋሚው በማጣሪያው ውስጥ ያሳያል። እያንዳንዱ ብሎክ ትንሽ ምስል አለው፤ በቅርብ ጊዜ የተቀመጡት መጀመሪያ። ከማጣሪያው ጎን ያሉት ሁለት ቁልፎች በዝርዝርና በምስሎች ፍርግርግ መካከል ይቀያይራሉ። ብሎኩን ለማስቀመጥ በ{{cmd:INSERT}} ምስሉን ጠቅ ያድርጉ (ወይም {{ui:Insert}})፣ ወይም ወደ ንድፉ ይጎትቱት፣ ወደጣሉበት ቦታ እንዲገባ።

ከዝርዙ በታች {{ui:Libraries}}፦ {{ui:Add a drawing}} የራስዎን DWG ወይም DXF ፋይል ይወስዳል እና ብሎኮቹን በምስል ይዘረዝራል፣ እና ሙሉው ንድፍ እንደ አንድ ብሎክ። አንዱን ማስቀመጥ ትርጓሜውን (እና የሚጎጉበትን ብሎኮችና ንብርብሮቻቸውን) ወደዚህ ንድፍ ይገለብጣል፣ {{cmd:INSERT}}'s `File` አማራጭ እንደሚያደርገው። እዚህ ያለ ብሎክ በተመሳሳይ ትርጓሜ ካለ ያለ ጥያቄ ይጠቀማል፤ በተመሳሳይ ስም የተለየ ትርጓሜ ካለ {{ui:Keep existing}} ወይም {{ui:Rename}} ይጠይቃል። በአሳሽ ውስጥ ፋይሉ ገጹ እስኪዘጋ ድረስ ይቆያል። በCadCraft Studio {{ui:Add a folder}} በአቃፊ ውስጥ ያሉ ንድፎችን ይዘረዝራል፣ እያንዳንዱ ሲጫኑ ይከፈታል፤ ፋይሎቹና አቃፊዎቹ ይታወሳሉ። ትንሹ x ቤተ-መጻሕፍቱን ከዝርዝሩ ያስወግዳል፤ ፋይሉ አይነካም። የሚጋራው {{ui:Library}} የተለየ ነገር ነው፤ [ከፋይል ወይም ከቤተ-መጻሕፍት አስገባ](topic:insert-from-file-and-library) ይመልከቱ።

### BCONVERT

ወይም {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}። የሚደጋገም ጂኦሜትሪ ያገኛል እና እያንዳንዱን ቅጂ ወደ አንድ ብሎክ ማጣቀሻ ይለውጣል።

- `Select the objects that repeat, or [Block]`፦ የአንድ ቅጂ ነገሮች። `B` በምትኩ ያለ ብሎክ ስም ይሰጣል፣ የነገሮቹን የተበተኑ ቅጂዎች ለማግኘት።
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`፦ `M`፣ `S` እና `P` ቅጂ ምን እንደሚቆጠር ይቀይራሉ፤ {{key:Enter}} ይፈልጋል። ቅንብሮቹ ይታወሳሉ።
- `Name for the new block <Block1>`፣ ከዚያ `Specify the block's base point` ({{key:Enter}} የምርጫውን የታችኛው ግራ ጥግ ይወስዳል)።
- ምን ያህል ሌሎች የነገሮች ስብስቦች ተመሳሳይ ጂኦሜትሪ እንዳላቸው ይናገራል፣ የሚተካውን ሁሉ ያደምቃል፣ እና `Yes/No` ይጠይቃል።

ቅጂ ተመሳሳይ ነገሮች ናቸው፣ በማንኛውም አንግል የተንቀሳቀሱ እና የተዞሩ (እና በአንድ ፋክተር ሲበሩ የተገለበጡ ወይም የተሰፉ)፤ እያንዳንዱ ነገር የራሱ አቻ ሊኖረው ይገባል፣ ከምርጫው መጠን አንድ ሚሊዮንኛ ውስጥ። እያንዳንዱ ማጣቀሻ የራሱ ሽክርክሪትና ስኬል ያገኛል (የተገለበጠው አሉታዊ Y ስኬል ያገኛል)፣ እና ነገሮቹ የጋሩት ንብርብር። በተቆለፉ ንብርብሮች ያሉ ነገሮች ይተዋሉ እና ይቆጠራሉ። ክፍት ቦታውን ይፈልጋል (ሞዴሉ ወይም የተከፈተው ሉህ)። በጣም ትልቅ ፍለጋ በሥራ ገደብ ይቆማል እና ይናገራል። አንድ የቀልብስ ደረጃ።

### BSEARCH

ወይም {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}። `Find blocks by [Name/Attribute/Geometry] <Name>`፦

- `N`፦ የብሎክ ስም ክፍል፣ ወይም `*` እና `?` ያለ ጥለት። እያንዳንዱን ብሎክ በዚህ ያሉ እና በንድፉ ያሉ ማጣቀሻዎቹ ጋር ይዘረዝራል።
- `A`፦ የባህሪ እሴት፣ ወይም `TAG=value`። ማጣቀሻዎቻቸው የያዙትን ብሎኮች ከተገኙት እሴቶች ጋር ይዘረዝራል። ቋሚ ባህሪያት ይቆጠራሉ።
- `G`፦ ነገሮችን ወይም አንድ ብሎክ ማጣቀሻ ይምረጡ፣ ቅርጻቸው ቢያንስ 85% የሚመሳሰል ብሎኮች ይዘረዘራሉ፣ ምርጡ መጀመሪያ። መጠን፣ ሽክርክሪትና መገልበጥ አይቆጠሩም። መለኪያው በመግለጫዎቹ ዙሪያ ያሉ ነጥቦች መካከል ያለውን ርቀት ያወዳድራል፣ ስለዚህ መሰል ነገሮችን ያገኛል፤ ትክክለኛ ቅጂዎችን ለማግኘት {{cmd:BCONVERT}} ይጠቀሙ።

በክፍት ቦታ የተገኙ ማጣቀሻዎች ይመረጣሉ፣ ለቀጣዩ ትዕዛዝ ዝግጁ።

### BREPLACE

ወይም {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}። `Replace [Selected/All]`፦ `S` የመረጧቸውን የብሎክ ማጣቀሻዎች በሰየሙት ብሎክ ይተካል፤ `A` ብሎኩንና ተተኪውን ይጠይቃል እና እያንዳንዱን ማጣቀሻ ይለውጣል፣ {{cmd:BLOCKREPLACE}} እንደሚያደርገው (ተመሳሳይ ኮድ)። ማጣቀሻ ቦታው፣ ስኬሉ፣ ሽክርክሪቱ፣ ንብርብሩና ሁለቱም ብሎኮች ያሏቸው የባህሪ እሴቶች ይቀራሉ፤ አዲሱ ብሎክ ቦታ የሌላቸው እሴቶች ይጣላሉ እና ይሰየማሉ። `?` ብሎኮቹን ይዘረዝራል። አንድ የቀልብስ ደረጃ።

### DATAEXTRACTION

ተለዋጭ ስሞች፦ `EATTEXT`፣ `DX`፤ ወይም {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}። ብሎኮችን፣ ባህሪያቸውንና የነገር ባህሪያቸውን እንደ ሰንጠረዥ ወይም CSV ፋይል ይዘረዝራል።

- በምርጫው ይሠራል፣ ወይም `Select objects (Enter: everything in this space)` ብሎ ይጠይቃል።
- ምርጫው ሁለቱንም ሲይዝ `List: [Blocks/Objects/All]`። ስም የሌላቸው ብሎኮች፣ ሰንጠረዦችና የቁሳቁስ ዝርዝሮች በፍጹም አይዘረዙም።
- የሚመረጡትን ዓምዶች (ስም፣ ዓይነት፣ ንብርብር፣ X፣ Y፣ ሽክርክሪት፣ ስኬል፣ ርዝመት፣ ስፋት፣ ቀለም፣ የመስመር ዓይነት፣ ቦታ፣ እና ለእያንዳንዱ የባህሪ መለያ አንድ) ያትማል፣ ከዚያ `Columns, by name or number with commas between`። {{key:Enter}} የኮከብ ምልክት የተደረገባቸውን ይወስዳል፦ ለብሎኮች ስም እና ሁሉም ባህሪያት፤ ለነገሮች ዓይነት፣ ንብርብርና ርዝመት።
- `Put identical rows together with a count? [Yes/No] <Yes>`፣ ከዚያ `Put the list in a: [Table/Csv] <Table>`። ሰንጠረዥ ተራ ሰንጠረዥ ነው ({{cmd:TABLEDIT}} ያርመዋል) እና ቀጥታ አይደለም፤ ንድፉ ከተለወጠ ትዕዛዙን ዳግም ያሂዱ።
- በዝርዝሩ ውስጥ የሌለን ዓምድ ይከለክላል። ሰንጠረዥ 1,999 የመረጃ ረድፎችን ይይዛል፤ CSV ፋይል ሁሉንም ይወስዳል።

### COUNTTABLE

የምርጫውን የብሎክ ማጣቀሻዎች (ወይም የክፍት ቦታውን) ይቆጥራል እና ብዛቶቹን በሰንጠረዥ (`Block`፣ `Count`) ወይም CSV ፋይል ያስቀምጣል። ንድፉን ተከትሎ በራሱ የሚለወጥ ቆጠራ ከፈለጉ {{cmd:BOMTABLE}} ይመልከቱ።

## ሉሆችና ማተም

### LAYOUT

ተለዋጭ ስሞች፦ `LO`፣ `NEWLAYOUT`፤ ወይም ከንድፉ በታች ያለው {{ui:+}} ቁልፍ። ድንበር፣ የርዕስ ማገጃ እና አንድ የእይታ መስኮት ያለው አዲስ ሉህ፣ በISO A3 (ወይም ለኢንች ወይም ጫማ ንድፎች Tabloid)። ጥያቄ የለም።

### MVIEW

ተለዋጭ ስሞች፦ `MV`። በሉህ ላይ ብቻ ({{cmd:VPORTS}} በሉህ ላይ ተመሳሳይ ያደርጋል)።

- `Specify corner of viewport [Polygonal/Object]`፣ `Specify opposite corner`። የእይታ መስኮቱ ሙሉውን ሞዴል በመደበኛ ስኬል ያሳያል።
- `P` (Polygonal)፦ የቅርጹን ማዕዘኖች ጠቅ ያድርጉ (`Undo`፣ `Close`)፣ {{key:Enter}} ሲጨርሱ። ከሦስት ያነሱ ማዕዘኖችን ውድቅ ያደርጋል።
- `O` (Object)፦ `Select a closed object for the viewport's outline`፦ በሉሁ ላይ ዝግ ፖሊላይን፣ ክብ ወይም ኤሊፕስ። የእይታ መስኮቱ ቅርጹን ይወስዳል (ኩርባዎች አጭር ቀጥ ያሉ ክፍሎች ይሆናሉ)፤ ነገሩ እንደነበረ ይቀራል። ዝግ ያልሆነን ነገር ውድቅ ያደርጋል።

### VPCLIP

ቀድሞ በሉሁ ላይ ያለ የእይታ መስኮት ይቆርጣል። `Select viewport to clip` (ወይም አስቀድመው ይምረጡ)፣ ከዚያ `Select the object to clip to [Polygonal/Delete]`፦

- ዝግ ፖሊላይን፣ ክብ ወይም ኤሊፕስ ጠቅ ያድርጉ፣ ወይም {{key:Enter}} (ወይም `P`) ለፖሊጎን ማዕዘኖች ጠቅታ።
- `D` (Delete፣ የእይታ መስኮቱ ሲቆረጥ ይቀርባል) ዳግም ሬክታንግል ያደርገዋል፦ ያዘበት ቅርጽ ዙሪያ ያለ ሳጥን።
- የእይታ መስኮቱ በወረቀቱ ላይ አያንቀሳቅስም፣ ስኬሉም ይቀራል። ሞዴሉ በቅርጹ ውስጥ ብቻ ይሳላል እና ይታተማል፣ ድንበሩም ይከተለዋል። አንድ የቀልብስ ደረጃ።
- የተቆረጠ የእይታ መስኮት በቅርጹ እያንዳንዱ ማዕዘን ላይ መያዣ አለው፣ ከመሃሉና ከሳጥኑ አራት ማዕዘኖች በተጨማሪ (የሳጥን ማዕዘን መጎተት ቅርጹን አብሮ ያሰፋል)። Properties Outline: Rectangle ወይም Clipped ከማዕዘኖች ብዛት ጋር ያሳያል።
- DWG እና DXF 2000 ፋይሎች ቅርጹን ለCadCraft ያቆያሉ። ሌሎች ፕሮግራሞች የእይታ መስኮቱን በዙሪያው ያለ ሬክታንግል አድርገው ይከፍቱታል፤ DXF R12 ሬክታንግሉን ብቻ ያቆያል።
- በሞዴል ትሩ ላይ የእይታ መስኮቶች በሉሆች ላይ እንደሆኑ ይናገራል።

### VPORTS

ተለዋጭ ስሞች፦ `VIEWPORTS`። {{cmd:SPLIT}} ከሉህም እንዲሁ ተመሳሳይ ነው፤ እና {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}፣ {{ui:Split stacked}}፣ {{ui:Four panes}}፣ {{ui:One pane}} ይሠራሉ። በሞዴሉ ላይ፦ `Enter number of panes [SIngle/2/3/4] <3>`፤ `2` `[Horizontal/Vertical] <Vertical>` ይጠይቃል (Vertical = ጎን ለጎን)፣ `3` `[Left/Right] <Right>` ይጠይቃል (ትልቁ መስኮት የሚሄድበት)። እያንዳንዱ መስኮት የራሱን እይታና ቦታ ያቆያል፤ ጠቅታ መስኮቱን ገባሪ ያደርጋል። በሉህ ላይ {{cmd:MVIEW}} ነው። [ማያ ገጹን ክፈል](topic:split-screen) ይመልከቱ።

### VPVIEW

ተለዋጭ ስሞች የሉትም። በሉህ ላይ ብቻ።

- `Select viewport` (አንድ ከተመረጠ ይዘላል)፣ ከዚያ በሞዴሉ ላይ፦ `Specify first corner of the window to show`፣ `Specify opposite corner`።

### UCS

ተለዋጭ ስሞች የሉትም። የራስዎ መጋጠሚያ ስርዓት፤ ማረም አይደለም። `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`፦ ነጥብ አዲስ መነሻ ነው፣ ከዚያ `Specify point on X-axis (Enter keeps the angle)`። `Z`፦ `Specify rotation angle about Z axis <90>`። `3`፦ መነሻ፣ በአዎንታዊ X ዘንግ ላይ ነጥብ፣ በአዎንታዊ Y ጎን ላይ ነጥብ። `OB`፦ `Select object to align UCS`። `NA`፦ `[Restore/Save/Delete/?]` እና ስም። እይታው አዲሱ X ዘንግ ደረጃ እንዲሆን ይዞራል። [እይታን አዙርና የራስዎን መጋጠሚያዎች ተጠቀም](topic:ucs-and-turned-view) ይመልከቱ።

### PLAN

ተለዋጭ ስሞች የሉትም። `Enter an option [Current ucs/Ucs/World] <Current ucs>`፦ የገባሪው መስኮት እይታ የUCS X ዘንግ (ወይም የዓለሙ) ደረጃ እንዲሆን ይዞራል። በንድፉ ውስጥ ምንም አይንቀሳቀስም።

### TURNLEFT, TURNRIGHT, TURNWORLD

ተለዋጭ ስሞች የሉትም፤ ወይም {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}፣ {{ui:Turn view 90° right}}፣ {{ui:Back to world}}። ከ`UCS Z -90`፣ `UCS Z 90` እና `UCS W` ጋር ተመሳሳይ ነው፣ እይታው ይከተላል።

### VPLAYER

ተለዋጭ ስሞች የሉትም። በሉህ ላይ፣ ወይም በእይታ መስኮት ውስጥ። `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`፦ `F`፣ `T`፣ `R` የንብርብር ስሞችን ይጠይቃሉ (በኮማ፣ `*` እና `?` ምልክቶች)፣ ከዚያ `[All/Select/Current] <Current>` እይታዎች፤ Reset እያንዳንዱን ንብርብር ወደ "በአዲስ መስኮቶች ተቀዝቅዟል" ነባሪው ይመልሳል፤ `V` ያንን ነባሪ ያዘጋጃል (`[Frozen/Thawed]`)፣ {{cmd:MVIEW}} የሚጠቀምበት። `?` በወቅታዊው መስኮት የቀዘቀዙትን ንብርብሮች ይዘረዝራል። የንብርብሮች ፓነሉ የእይታ መስኮት አምድ ለአንድ መስኮት ተመሳሳይ ያደርጋል። [በአንድ እይታ መስኮት ንብርብር አቀዝቅዝ](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport) ይመልከቱ።

### MSPACE

ተለዋጭ ስሞች፦ `MS`፤ ወይም በእይታ መስኮቱ ውስጥ ድርብ ጠቅ። በሉህ ላይ ብቻ። በእይታ መስኮት በኩል በሞዴሉ ላይ ይሠራል፦ የተመረጠው፣ በሉሁ ላይ ብቸኛው፣ ወይም `Click inside the viewport to work in`። ውስጥ ማንቀሳቀስና ማጉላት የእይታ መስኮቱን እይታ ይለውጣል (ማሳያው የተቆለፈ ከሆነ ይቆያል እና ሉሁ ይንቀሳቀሳል)፤ አዲሱ እይታ አንድ የቀልብስ ደረጃ ነው። [በእይታ መስኮት በኩል በሞዴሉ ላይ ሥሩ](topic:sheets-and-viewports#work-on-the-model-through-a-viewport) ይመልከቱ።

### PSPACE

ተለዋጭ ስሞች፦ `PS`፤ ወይም ከእይታ መስኮቱ ውጭ ድርብ ጠቅ፣ ወይም በንድፉ ስር ያለ ትር ጠቅ። ወደ ሉሁ ይመለሳል።

### PLOT

ተለዋጭ ስሞች፦ `PRINT`፣ `PUBLISH`፣ `EXPORTPDF`፤ ወይም {{key:Mod+P}}። የ{{ui:Plot to PDF}} መስኮትን ይከፍታል። [ወደ PDF ያትም](topic:plot-pdf) ይመልከቱ።

### PLOTSTYLES

ተለዋጭ ስሞች፦ `STYLESMANAGER`፣ `PSTABLES`፤ ወይም በ{{ui:Plot to PDF}} መስኮት ውስጥ {{ui:Edit tables…}}። {{ui:Plot style tables}} ይከፍታል፦ እያንዳንዱ ቀለም እንደ ምን እንደሚታተም (ቀለም፣ ግራጫ፣ ቀለም፣ የመስመር ውፍረት)፣ ከንድፉ ጋር ይቀመጣል። [የፕሎት ስታይል ሰንጠረዦች](topic:plot-pdf#plot-style-tables) ይመልከቱ።

### CHSPACE

{{cmd:CHSPACE}} ነገሮችን በእይታ መስኮት በኩል በሉሁና በሞዴሉ መካከል ያንቀሳቅሳል፣ ከሌላው ወገን ተመሳሳይ እንዲመስሉ ተስተካክለው እና ተዞረው። በሉሁ ላይ ነገሮችን ይምረጡ እና ወደ ሞዴሉ ይሄዳሉ (ሉሁ ብዙ ካለው የእይታ መስኮቱን ይምረጡ)። በእይታ መስኮት በኩል በሞዴሉ ላይ ሲሠሩ ({{cmd:MSPACE}})፣ የተመረጡት ነገሮች ወደ ሉሁ ይመጣሉ። ምን ያህል ጊዜ እንደ ትልቅ ወይም ትንሽ እንደሆኑ ይናገራል። የእይታ መስኮቶች በሉሃቸው ላይ ይቀራሉ። አንድ የቀልብስ ደረጃ።

### ISODRAFT

{{cmd:ISODRAFT}} ኢሶሜትሪክ ረቂቅን `ON` ወይም `OFF` ያደርጋል፣ ወይም በቀጥታ `Left`፣ `Top` ወይም `Right` አውሮፕላን ላይ ያስቀምጣል። በርቶ ሳለ፦ Ortho ({{key:F8}}) መስመሮችን በአውሮፕላኑ ሁለት ዘንጎች ይይዛል (ግራ፦ 90° እና 150°፤ ላይ፦ 30° እና 150°፤ ቀኝ፦ 30° እና 90°)፣ የፖላር መከታተያ ({{key:F10}}) እነዚያን ዘንጎች ይከተላል፣ ፍርግርግ ላይ ስናፕ ({{key:F9}}) ኢሶሜትሪክ ፍርግርግ ይጠቀማል፣ እና ፍርግርግ ({{key:F7}}) በ30°፣ 90° እና 150° መስመሮች ይሳላል። {{cmd:ELLIPSE}} `Isocircle` ያገኛል፦ ማዕከልና ራዲየስ (ወይም `Diameter`) ይስጡ፣ እና ክብ በአሁኑ አውሮፕላን ላይ የሚታይበትን ኤሊፕስ ይስላል። ንድፉ ጠፍጣፋ ይቀራል፦ እነዚህ የፒክቶሪያል እይታ ለመሳል ረዳቶች ናቸው፣ የ3D ሞዴል አይደሉም። ቅንብሩ ለዚህ ክፍለ ጊዜ ነው እና በፋይሉ ውስጥ አይቀመጥም።

### ISOPLANE

{{cmd:ISOPLANE}} ኢሶሜትሪክ ረቂቅ የሚሠራበትን አውሮፕላን ይመርጣል፦ `Left`፣ `Top` ወይም `Right`። Enter ወደ ቀጣዩ ይሄዳል። ኢሶሜትሪክ ረቂቅ በርቶ ሳለ {{key:F5}} በትዕዛዝ መሃል ተመሳሳይ ያደርጋል፤ ጠፍቶ ሳለ {{key:F5}} ለአሳሹ ይቀራል።

## ፍተሻ

### CAL

የስሌት እሴቱን ያትማል፣ በማንኛውም ርዝመት በሚጻፍበት ቦታ እንደሚነበበው።

- `Expression`፦ ይጻፉ፣ ለምሳሌ `12'6"+3/4"` ወይም `(24'-0")/3`፣ እና {{key:Enter}} ይጫኑ። CadCraft `= 12'-6 3/4"   (150.75 drawing units)` ያትማል። [በተጻፈ እሴት ውስጥ ሂሳብ](topic:coordinate-entry#arithmetic-in-a-typed-value) ይመልከቱ።

### DIST

ተለዋጭ ስሞች፦ `DI`፤ ወይም {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}።

- `Specify first point`፣ `Specify second point`። ርቀት፣ አንግል፣ Delta X እና Delta Y ያትማል።

### AREA

ተለዋጭ ስሞች፦ `AA`፤ ወይም {{ui:View}} › {{ui:More}} › {{ui:Area}}። ስፋቱንና ዙሪያውን ያትማል።

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - ማዕዘኖች ጠቅ ያድርጉ ወይም ይጻፉ፤ በ`Specify next point (Enter closes) [Undo]` {{key:Enter}} ዝርዝሩን ይዘጋል። `U` የመጨረሻውን ማዕዘን ይመልሳል።
  - {{key:Enter}} ወይም `O`፣ ከዚያ `Select object`፦ ክብ (ዙሪያውን ያትማል)፣ ኤሊፕስ፣ ፖሊላይን (ክፍት ከሆነ በቀጥታ መስመር ለቦታ ይዘጋል፣ ርዝመቱ ይታተማል) ወይም ሀች (ቀዳዳዎች ይቀነሳሉ)።
  - `A` (Add area) እና `S` (Subtract area) ሩጫ ድምር ያቆያሉ፦ ጥያቄው በ`(ADD mode)` ወይም `(SUBTRACT mode)` ይጀምራል፣ እያንዳንዱ ቦታ ይጨመራል ወይም ይቀነሳል፣ እና `Total area = …` ከእያንዳንዱ በኋላ ይታተማል። በእነዚህ ሁነታዎች `O` ነገሮችን እስከ {{key:Enter}} ይመርጣል፣ እና በመጀመሪያው ጥያቄ ላይ {{key:Enter}} ትዕዛዙን ያበቃል።

### MEASUREGEOM

ተለዋጭ ስሞች፦ `MEA`። `Enter an option [Distance/Radius/Angle/ARea] <Distance>`፤ ከእያንዳንዱ መለካት በኋላ እንደገና ይጠይቃል፣ `eXit` ነባሪው ነው።

`Quick` ጠቋሚውን ሲያንቀሳቅሱ በጠቋሚው ዙሪያ ይለካል፦ ከቅርቡ ነገር ወደ ቀኝ፣ ላይ፣ ግራ እና ታች ያለው ርቀት (በአሁኑ UCS ዘንጎች)፣ እየሄዱ ሲሳል፣ እና ሁለት ጎረቤቶች ቀጥ ብለው ሲገናኙ አንግሉ። አንድ ጠቅታ አራቱን ርቀቶች፣ ግልጽ ስፋትና ቁመት እና አንግሎቹን ወደ ታሪኩ ይጽፋል፤ Enter ወደ አማራጮቹ ይመልሳል። በእይታው ላይ ያለውን ያነባል።

- `D`፦ ሁለት ነጥቦች፣ እንደ {{cmd:DIST}}።
- `R`፦ `Select arc or circle`፤ ራዲየሱንና ዲያሜትሩን ያትማል።
- `A`፦ ቅስት (የተካተተ አንግሉ)፣ ወይም መስመር እና ከዚያ ሁለተኛ መስመር (በመካከላቸው አንግል፣ ወደ ሩቅ ጫፎቻቸው)፣ ወይም {{key:Enter}} እና ሦስት ነጥቦች (ማዕዘን፣ ከዚያ ሁለቱ ጫፎች)።
- `AR`፦ እንደ {{cmd:AREA}}፣ አንድ ቦታ።

### ID

ተለዋጭ ስሞች የሉትም። `Specify point`፤ X እና Y ያትማል።

### LIST

ተለዋጭ ስሞች፦ `LI`፣ `LS`። `Select objects`፤ የእያንዳንዱን ነገር ዓይነት፣ ንብርብርና ዋና መለኪያዎች ያትማል።

### MASSPROP

{{cmd:MASSPROP}} የተመረጡት ክልሎችና ዝግ ነገሮች የክፍል ባህሪያትን አንድ ላይ ይሰጣል፦ ቦታ፣ ዙሪያ፣ የማሳሪያ ሳጥን፣ ሴንትሮይድ፣ በመነሻ በኩል በX እና Y ዘንጎች ዙሪያ ያለ ሞመንት፣ የኢንርቲያ ምርት፣ የመዞሪያ ራዲየሶች፣ በሴንትሮይድ ያሉ ተመሳሳዮቹ ሞመንቶች፣ እና ዋና ሞመንቶቹ ከዘንጎቻቸው አቅጣጫ ጋር። በክልሎቹ ውስጥ ያሉ ቀዳዳዎች እንደ ቀዳዳዎች ይቆጠራሉ። ቁጥሮቹ በንድፍ አሃዶች ናቸው፣ እና ከመስመሮችና ቅስቶች ለተሠሩ ዝርዝሮች ትክክል ናቸው፤ ኤሊፕሶችና ስፕላይኖች እንደ አጭር ቀጥ ያሉ ክፍሎች ይለካሉ፣ እና እንደሆነ ይናገራል። ሪፖርቱ ከቀረበ በኋላ ወደ ጽሑፍ ፋይል ይጽፍ እንደሆነ ይጠይቃል። ዝግ ያልሆኑ ነገሮች ይተዋሉ፣ እና ስንት እንደሆኑ ይናገራል።

## እይታ፣ ፋይል እና ሌሎች

### ZOOM

ተለዋጭ ስሞች፦ `Z`።

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`። ለመስኮት ሁለት ማዕዘኖች ጠቅ ያድርጉ። `E`፣ `A` ወይም Enter፦ ሙሉው ንድፍ።
- `P` (Previous፣ ወይም በመሳሪያ አሞሌው {{ui:Previous}}) ወደ በፊቱ እይታ ይመለሳል፣ በትር እስከ 10 እይታዎች ድረስ፤ የተከታታይ የዊል እርምጃዎች ወይም አንድ ማንቀሳቀስ እንደ አንድ እይታ ይቆጠራሉ።
- እንደ `2`፣ `2x` ወይም `0.5x` ያለ ቁጥር (ወይም `S` እና ቁጥሩ) በማያ ገጹ መሃል ዙሪያ በዚያ ፋክተር ያጉላል ወይም ያሳንሳል።
- `C` `Specify center point` እና `Enter height or magnification (nX)` ይጠይቃል።

### PDFATTACH, PDFIMPORT እና የPDF ትዕዛዞች

ተለዋጭ ስሞች፦ `PDFATT` ለ{{cmd:PDFATTACH}}፣ `PDFIM` ለ{{cmd:PDFIMPORT}}። {{cmd:PDFATTACH}} የPDF ገጽ በንድፉ ስር ያስቀምጣል (ፋይል፣ ገጽ፣ ማስገቢያ ነጥብ፣ ስኬል፣ ሽክርክሪት)፤ {{cmd:PDFIMPORT}} የገጹን መስመሮች፣ ኩርባዎች፣ መሙላቶችና ጽሑፍ በPDF ስም በተሰየሙ ንብርብሮች ላይ ወደ ንድፍ ነገሮች ይቀይራል፣ እውነተኛ መጠን፣ የተጻፈ ስኬል፣ ወይም ከሁለት ነጥቦችና እውነተኛ ርቀት ይሰፋል። {{cmd:PDFCLIP}} ዝቅተኛ ንብርብርን ይቆርጣል፣ {{cmd:PDFADJUST}} ደብዝዝ፣ ንፅፅር፣ ሞኖክሮም ያዘጋጃል ወይም ያጠፋል፣ {{cmd:PDFLAYERS}} የPDF የራሱን ንብርብሮች ያበራል ወይም ያጠፋል፣ እና {{cmd:PDF}} የንድፉ ዝቅተኛ ንብርብሮች የሚጠቀሙባቸውን ፋይሎች ዳግም ይሰጣል። [PDF ዝቅተኛ ንብርብሮች](topic:pdf-underlay) ይመልከቱ።

### AUTOCOMPLETE

ተለዋጭ ስሞች፦ `AUTOC`። የንድፍ ራስ-ማጠናቀቅ፦ ምንም ትዕዛዝ ሳይሠራ፣ ግራጫ ጥላ የንድፉ ጥለቶች ቀጥሎ ምን እንደሆነ ይናገራሉ የሚለውን ያሳያል። {{cmd:AUTOCOMPLETE}} `On` ወይም `Off` ያደርጋል (እንዲሁም ቅንብሮች › CadCraft)፣ ወይም አሁን ምን እንደሚጠቁም `Show` ያሳያል። **Tab** ጥላውን እንደ አንድ የቀልብስ ደረጃ ይስላል፤ **Esc** ንድፉ እስኪለወጥ ድረስ ያሰናብታል። በአዳዲሶቹ ነገሮች ውስጥ ሦስት ነገሮችን ያገኛል፦ ሁለት ጊዜና ከዚያ በላይ በእኩል ርምጃ የተሳለ ነገር ቀጣዩ ቅጂ (ስቱዶች፣ አምዶች፣ የደረጃ ሪዘርና ትሬድ)፣ የፖሊላይን ደረጃ ቀጣይ እርምጃዎች፣ እና የክፍል ወይም የግድግዳ ሰንሰለት የጎደለ ጎን። በ{{cmd:LINE}} ወይም {{cmd:PLINE}} መሃል ጥላው **ቀጣዩ ነጥብ** ነው፦ የደረጃው ቀጣይ እርምጃ (ሪዘር፣ ትሬድ፣ ሪዘር…)፣ የአራት ማዕዘኑ አራተኛ ጥግ፣ የሚዘጋው ነጥብ፣ ወይም አንድ ተጨማሪ እኩል እርምጃ። ጠቋሚውን ወደ እሱ ቅረቡና **Tab** ይጫኑ፣ እዚያ ጠቅ እንዳደረጉ፤ ቀጥለው ወይም Enter ይጫኑ። በዚህ ኮምፒውተር በህጎች የሚሠራ፣ ያለ ሞዴል።

### AUTOSHEET

ተለዋጭ ስሞች፦ `ASH`። ራሳቸውን የሚያደራጁ ሉሆች። {{cmd:AUTOSHEET}} የንድፉን ቁራጮች (የተሰየሙ እይታዎችዎን፣ ወይም የሞዴሉን የተለዩ ቁራጮች፣ ወይም ሙሉውን ሞዴል) ይወስዳል፣ የወረቀት መጠን (ወይም የሰጡትን) ይመርጣል፣ ለእያንዳንዱ ቁራጭ መደበኛ ስኬል ይሰጣል (ለሁሉም አንድ ስኬል፣ ወይም እያንዳንዱ የሚቀበለውን ትልቁን)፣ እና እይታዎቹን በረድፍ በአዲስ ሉሆች ላይ ከርዕስ ማገጃና ከታች ከስምና ስኬል መግለጫ ጋር ያስቀምጣል። በአንድ ሉህ የማይገባ ይሁን በራሱ ሉህ ያገኛል። አንድ የቀልብስ ደረጃ። በዚህ ኮምፒውተር በህጎች የሚሠራ፣ ያለ ሞዴል።

### PHOTOSKETCH

ተለዋጭ ስሞች፦ `PSK`። የረቂቅ ፎቶ ወደ ንድፍ። የእጅ ረቂቅ ፎቶ (JPEG፣ PNG ወይም TIFF) በወረቀት ላይ ይምረጡ። {{cmd:PHOTOSKETCH}} የወረቀቱን አራት ማዕዘኖች ያገኛል፣ ፐርስፔክቲቩን ያስተካክላል፣ የሰጡትን የወረቀት መጠን (`Paper`፣ ወይም ቅርቡ መደበኛ) እና የረቂቁን `Scale` (1 : n) ይወስዳል፣ ከዚያ የብዕር መስመሮቹን ወደ መስመሮች፣ ቅስቶችና ክቦች ይቀይራል፣ ለእያንዳንዱ የብዕር ቀለም (ጥቁር፣ ቀይ፣ ሰማያዊ፣ አረንጓዴ) ንብርብር። የወረቀቱን ጠርዝ ማግኘት ካልቻለ ሙሉውን ፎቶ እንደ ሉህ ይወስዳል እና ይናገራል። ፊደላት አይካተቱም። አንድ የቀልብስ ደረጃ። በዚህ ኮምፒውተር በክላሲክ የምስል ሂደት፣ ያለ ሞዴል፣ ምንም ወደ የትም አይላክም። የተቃኙ ንድፎች ትዕዛዞችንም ይመልከቱ።

### AUTODIM

ተለዋጭ ስሞች፦ `ADIM`። በህጎች በራስ-ሰር ልኬት። {{cmd:AUTODIM}} የተመረጡ ነገሮችን (ወይም ሙሉውን ንድፍ) ከደረጃና ቀጥ ካሉ ጠርዞቻቸው ይለካል፦ በመረጡት ጎኖች ላይ ያሉ ልኬቶች ሰንሰለት (`Sides`)፣ ከውጭው አንድ አጠቃላይ ልኬት፣ የእያንዳንዱ መክፈቻ ወርድ (በመስመር ላይ ባሉ የግድግዳ መስመሮች መካከል ያለ ክፍተት)፣ ለእያንዳንዱ የቀዳዳ መጠን ዲያሜትር፣ እና `Grid` ሲኖር የፍርግርግ መስመሮች ክፍተት። አስቀድሞ ያለ ልኬት ዳግም አይሠራም። አንድ የቀልብስ ደረጃ። በዚህ ኮምፒውተር በህጎች የሚሠራ፣ ያለ ሞዴል።

### GRIDMOVE

ተለዋጭ ስሞች፦ `GM`። የፍርግርግ መስመር መንቀሳቀስ ስብስቡን ይሸከማል። {{cmd:GRIDMOVE}} የፍርግርግ መስመር (በስሙ grid ወይም axis የሚል ንብርብር ላይ ያለ መስመር) እና በላዩ የተሰቀለውን ያንቀሳቅሳል፦ በመስመሩ ላይ ጫፍ ያላቸው ግድግዳዎች ይዘረጋሉ፣ በእሱ ላይ የሚሄዱ ግድግዳዎች ሙሉ ይንቀሳቀሳሉ፣ አምዶች (በመስመሩ ላይ ያሉ የብሎክ ማጣቀሻዎችና ክቦች)፣ ቡብሉና መለያው ይንቀሳቀሳሉ፣ በመስመሩ ላይ ነጥቦች ያሏቸው ልኬቶች አዲሱን ክፍተት ይለካሉ። ሁለት ነጥቦች (መስመሩን የሚያቋርጠው ክፍል ብቻ ይቆጠራል) ወይም `Distance` ይስጡ። አንድ የቀልብስ ደረጃ ሁሉንም ይመልሳል። በዚህ ኮምፒውተር በህጎች ይሠራል።

### DETAILS

ተለዋጭ ስሞች፦ `DET`። የሚያገኙዎት ዝርዝሮች። {{cmd:DETAILS}} የድርጅትዎን የራሱ ዝርዝሮች ይይዛል፦ `Add` የዚህን ንድፍ ብሎክ ወደ ዝርዝሩ ያስገባል፣ `List` እና `Remove` ያስተዳድራሉ፣ `Find` ለተመረጠው (ወይም ለመጨረሻ የሳሉት) በንብርብሮቹ ላይ ባሉ ቃላት፣ በብሎክ ስሞች፣ በሀች ጥለቶችና በማስታወሻዎች ደረጃ ይሰጣቸዋል ከእያንዳንዱ ዝርዝር ስምና ማስታወሻ ጋር በማነጻጸር፤ ስለዚህ የመስኮት ራስ የሽፋን መስኮት ሽፋን ያገኛል። ቁጥር እና ነጥብ ይምረጡ ለማስቀመጥ። `Hint` ሲበራ (ቅንብሮች › CadCraft ላይም)፣ ዝርዝሩ የሚዛመደውን ነገር መምረጥ በሁኔታ አሞሌው አንድ መስመር ያስቀምጣል። ዝርዝሩ በዚህ አሳሽ፣ በዚህ ኮምፒውተር ላይ ይቀመጣል፤ የሚፈለገው ይህ ዝርዝር ነው። `Share` በDocuments አቃፊዎ ውስጥም ያስቀምጠዋል (`.cadcraft/firm-details.json`፣ ከእያንዳንዱ ብሎክ ንድፍ ጋር)፦ `Pull` ቡድንዎ ያለውንና እርስዎ የሌሉዎትን ይጨምራል፣ `Push` እርስዎ ያሉትንና እነሱ የሌሉትን ይጨምራል፣ `Both` ሁለቱንም ያደርጋል፣ እና ከሁለቱም ወገን ምንም አይወገድም። መጀመሪያ የDocuments አቃፊውን ይክፈቱ ({{cmd:DOCUMENTS}})፤ ያ አቃፊ የTeam Cloud Plan አቃፊ ሲሆን ሙሉ ቡድኑ አንድ ዝርዝር ይጋራል። በStudio ፓነሉ ውስጥ ያለ የዝርዝር ነገር **Add to my firm's details** ቁልፍ አለው፤ ወደ ተመሳሳይ ዝርዝር ያስገባል። በዚህ ኮምፒውተር በቃላት የሚሠራ፣ ያለ ሞዴል።

### SKETCHFIX

ተለዋጭ ስሞች፦ `SKF`። የብዕር ረቂቆች ትክክለኛ ጂኦሜትሪ ይሆናሉ። በአንድ ጊዜ አንድ በነጻ የሆነ ምት ይጫኑና ይጎትቱ (ብዕር፣ መዳፊት ወይም ጣት)፣ ከዚያ Enter። እያንዳንዱ ምት እንደ መስመር፣ ክብ፣ ቅስት፣ ሬክታንግል ወይም ፖሊላይን ይነበባል፦ ደረጃ እና ቀጥ ያሉ መስመሮች በትክክል ደረጃና ቀጥ ይሆናሉ፣ የተዘጋ ክብ ምት ክብ ይሆናል፣ በአራት ቀኝ ማዕዘኖች የተዘጋ ምት ሬክታንግል ይሆናል፣ እና የምቶቹ ጫፎች አብረው ይሳባሉ እና በንድፉ ውስጥ ባሉት ጫፎች ላይ ይቆማሉ። አንድ የቀልብስ ደረጃ። በዚህ ኮምፒውተር በህጎች የሚሠራ፣ ያለ ሞዴል።

### SCANATTACH እና የተቃኙ ንድፍ ትዕዛዞች

ተለዋጭ ስሞች፦ `SCA` ለ{{cmd:SCANATTACH}}፣ `SCS` ለ{{cmd:SCANSCALE}}፣ `SCL` ለ{{cmd:SCANALIGN}}፣ `SCD` ለ{{cmd:SCANDESKEW}}፣ `SCC` ለ{{cmd:SCANCLEAN}}፣ `SCR` ለ{{cmd:SCANCROP}}፣ `SCE` ለ{{cmd:SCANERASE}}፣ `SCT` ለ{{cmd:SCANTRACE}}፣ `SCI` ለ{{cmd:SCANINFO}}፤ {{cmd:RASTERSNAP}} ተለዋጭ ስም የለውም። በስዕል ላይ ይሠራሉ፣ እያንዳንዳቸው አንድ የቀልብስ ደረጃ። {{cmd:SCANATTACH}} PNG፣ JPEG፣ TIFF (አንድ ገጽ ወይም ሁሉም) ወይም ስዕል የሆነ የPDF ገጽ ያስገባል። {{cmd:SCANSCALE}} ሉሁን ከሁለት በተመረጡ ነጥቦችና እውነተኛ ርቀት ያሰፋል። {{cmd:SCANALIGN}} ወደ ሁለት ነጥቦች ያንቀሳቅሰዋል እና ያዞረዋል (`Scale the sheet to fit` Yes/No)። {{cmd:SCANDESKEW}} የሉሁን ረጃጅም መስመሮች አንግል ያሳያል እና `Accept` ወይም `Value` ከሰጡ በኋላ ሉሁን ያዞረዋል። {{cmd:SCANCLEAN}} ጥቁርና ነጭ ያደርገዋል (`Threshold` Auto/Adaptive/Level፣ `Specks`) እና `Run`። {{cmd:SCANCROP}} መስኮት ያቆያል። {{cmd:SCANERASE}} `Rectangle`፣ `Polygon` ወይም `Lasso` ያጠፋል። {{cmd:SCANTRACE}} መስመሮችንና ቅስቶችን በአዲስ ንብርብር ላይ ይከታተላል (`Tolerance`፣ `Window`፣ `Arcs`፣ `Leftovers`፣ `Run`) እና ያገኘውን እና እንደ ራስተር የተወውን ይናገራል። {{cmd:SCANINFO}} የመጀመሪያውን ፋይል እና እርምጃዎቹን ይዘረዝራል። {{cmd:RASTERSNAP}} ስናፕን ወደ የተቃኙ ሉሆች መስመሮች On ወይም Off ያደርጋል። [የተቃኙ ንድፎችና ትሬስ](topic:scanned-drawings) ይመልከቱ።

### REGEN እና REGENALL

ተለዋጭ ስሞች፦ `RE` ለ{{cmd:REGEN}}፣ `REA` ለ{{cmd:REGENALL}}። በማያ ገጹ ላይ ያለውን ከንድፉ እንደገና ይገነባል፦ {{cmd:REGEN}} የሚመለከቱትን ትር (በሉሁ ላይ ያሉ እይታ መስኮቶቹ የሚያሳዩትን ሞዴልም ጭምር)፣ {{cmd:REGENALL}} እያንዳንዱን ትር፣ እያንዳንዱን የተከፈለ ማያ መስኮት እና እያንዳንዱን ክፍት ንድፍ። ስክሪፕት ያለው ወይም በጣም ትልቅ ለውጥ ወይም ረዳት ንድፉን ካረመው በኋላ ስዕሉ ያረጀ ሲመስል ይጠቀሙባቸው፤ ንድፉ ራሱ አይነካም፣ ስለዚህ የሚቀለበስ ነገር የለም።

### NAMEDVIEW

ተለዋጭ ስሞች፦ `NV`፣ `VIEWS`። `Enter an option [?/Restore/Save/Window/Delete] <Restore>`፣ ከዚያ የእይታው ስም። `S` በማያ ገጹ ያለውን እይታ ያስቀምጣል፣ `W` እርስዎ የሚመርጡትን መስኮት፣ `R` የተቀመጠ እይታ ያሳያል፣ `D` ያጠፋል፣ `?` የዚህን ትር እይታዎች ይዘረዝራል። ባለ ስም ስር ማስቀመጥ ይተካዋል፤ እያንዳንዱ ለውጥ አንድ የቀልብስ ደረጃ ነው። እይታዎች የተቀመጡበትን ትር ይሆናሉ። DWG እና DXF ፋይሎች ያቆዩዋቸዋል (የVIEW ሰንጠረዥ)፤ የሉሆች እይታዎች በመጀመሪያው ሉህ ላይ ይመለሳሉ፣ ምክንያቱም ፋይሉ የትኛው እንደሆነ አይናገርም።

### UNDO እና REDO

ተለዋጭ ስሞች፦ `U` ለ{{cmd:UNDO}}፤ {{cmd:REDO}} ተለዋጭ ስም የለውም። እንዲሁም {{key:Mod+Z}} እና {{key:Mod+Y}}።

### LAYER

ተለዋጭ ስሞች፦ `LA`። ወደ {{ui:Layers}} ፓነል ይሄዳል።

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`)፦ `Enter linetype for new objects` — `ByLayer`፣ `ByBlock` ወይም ስም (`?` ዝርዝሩን ያሳያል፦ Continuous፣ የንድፉ የራሱ፣ እና DASHED፣ HIDDEN፣ CENTER፣ PHANTOM፣ DOT፣ DASHDOT፣ BORDER፣ DIVIDE ከ`2` (ግማሽ) እና `X2` (ድርብ) መጠኖቻቸው ጋር)። {{cmd:LWEIGHT}} (`LW`)፦ ለአዳዲስ ነገሮች የመስመር ውፍረት በሚሊሜትር፣ ወይም `ByLayer`፣ `ByBlock`፣ `Default`። {{cmd:LTSCALE}} (`LTS`)፦ የንድፉ የመስመር ዓይነት ስኬል (ሊቀለበስ የሚችል)። {{cmd:LWDISPLAY}} (`LWT`)፦ `Show lineweights [ON/OFF]`፤ እንደ በሁኔታ አሞሌው ያለው {{ui:LWT}} ቁልፍ። [የመስመር ውፍረቶችና የመስመር ዓይነቶች](topic:units-papers-scales#line-weights-and-linetypes) ይመልከቱ።

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`፣ `REN`)፦ `Enter object type to rename [LAyer/Block]`፣ `Enter old name`፣ ከዚያ አዲሱ ስም፤ ነገሮች ወይም ማጣቀሻዎች ይከተላሉ። {{cmd:LAYMRG}}፦ `Select object on layer to merge or [Name]` እስከ {{key:Enter}}፣ ከዚያ `Select object on target layer or [Name]` እና `Y`። {{cmd:LAYDEL}}፦ `Select object on layer to delete or [Name]`፣ ከዚያ `Y`፦ ንብርብሩና በላዩ ያለ እያንዳንዱ ነገር ይሄዳሉ (ንብርብር 0፣ DEFPOINTS ወይም ወቅታዊው አይደለም)። እያንዳንዳቸው አንድ የቀልብስ ደረጃ። [ንድፍን በንብርብሮች አደራጁ](topic:layers#rename-merge-and-delete-layers) ይመልከቱ።

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

በነገሮች በመምረጥ ያሉ ንብርብሮች፤ በ{{ui:Layers}} ፓነል {{ui:Tools}} ምናሌ ውስጥም አሉ። {{cmd:LAYISO}}፦ `Select objects on the layer(s) to be isolated`፣ ከዚያ {{key:Enter}}፦ ሌሎቹ ሁሉም ንብርብሮች ይጠፋሉ። {{cmd:LAYUNISO}} መልሰው ያበራቸዋል። {{cmd:LAYOFF}} እና {{cmd:LAYFRZ}}፦ `Select an object on the layer to be turned off` (ወይም ለመቀዝቀዝ)፣ ደጋግሞ፤ `U` የመጨረሻውን ይመልሳል፣ {{key:Enter}} ይጨርሳል። {{cmd:LAYMCUR}}፦ `Select object whose layer will become current`። {{cmd:LAYON}} ሁሉንም ንብርብሮች ያበራል፣ {{cmd:LAYTHW}} ሁሉንም ያቀልጣል። እያንዳንዱ ትዕዛዝ አንድ የቀልብስ ደረጃ ነው። [ንድፍን በንብርብሮች አደራጁ](topic:layers#work-on-layers-by-picking-objects) ይመልከቱ።

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} ባዶ ንድፍ ይጀምራል፣ እና {{cmd:OPEN}} DWG ወይም DXF ይከፍታል፣ እያንዳንዳቸው በራሳቸው ትር ላይ (ያልተነካ አዲስ ንድፍ ካለ ያንን ይጠቀማል እንጂ አዲስ ትር አይከፍትም)። ያልተቀመጡ ለውጦች ያሉት ትር ሲዘጋ መጀመሪያ ይጠይቃል። [ማያ ገጹን ክፈል](topic:split-screen) ይመልከቱ።

{{cmd:SAVE}} (ተለዋጭ ስም `QSAVE`፣ እንዲሁም {{key:Mod+S}}) የንድፉን ቅጂ በቅርጸቱ ያወርዳል፦ ከDWG ከተከፈተ DWG፣ ከDXF ከተከፈተ DXF። አዲስ ንድፍ በአሳሹ በSave as ከመረጡት የመጨረሻ ቅርጸት ይጠቀማል፤ አለበለዚያ DWG።

{{cmd:SAVEAS}} (እንዲሁም {{key:Mod+Shift+S}}) የ{{ui:Save a copy as}} መስኮት ይከፍታል፦ {{ui:DWG}} (እና {{ui:Version}}) ይምረጡ፣ {{ui:DXF R12}} ወይም {{ui:DXF 2000}}፣ ከዚያ {{ui:Save}}። ምርጫው ለዚህ ንድፍ እና ለዚህ አሳሽ አዲስ ንድፎች ይቆያል።

{{cmd:DXFOUT}} ሁልጊዜ የDXF R12 ቅጂ ያወርዳል፣ {{cmd:SAVE}} የሚጠቀመውን ቅርጸት ሳይለውጥ።

[ፋይሎች፦ ምን ይከፈታል፣ ምን ይቀመጣል](topic:files#saving) ይመልከቱ።

### TOUR

ተለዋጭ ስሞች፦ `TUTORIAL`። የስድስት እርምጃ የመጀመሪያ ንድፍ ጉብኝቱን እንደገና ይጀምራል። [መጀመር](topic:getting-started#prefer-to-be-guided) ይመልከቱ።

### TOOLBARDOCK

ተለዋጭ ስሞች፦ `TBDOCK`። `Toolbar position [Top/Bottom/Left/Right]`። [ቅንብሮች](topic:settings#toolbar-position) ይመልከቱ።

### COMMANDLINE

ተለዋጭ ስሞች፦ `CMDLINE`። `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`፦ የትዕዛዝ መስመሩን ይጣብቃል ወይም ይንሳፈፋል፣ ወደ አንድ መስመር ያደርገዋል፣ ስንት የታሪክ መስመሮች እንደሚታዩ (0 እስከ 12) ይጠይቃል፣ ወይም ታሪኩን ይከፍታል። [ቅንብሮች](topic:settings#command-line) ይመልከቱ።

### TOPAREA

`Top area [Standard/Compact]`፦ ከንድፉ በላይ ያሉት አሞሌዎች እንደነበሩ፣ ወይም የታመቁ። [ቅንብሮች](topic:settings#top-area) ይመልከቱ።

### POLARANG

`Enter polar angle step in degrees <90>`፦ የ{{ui:Polar}} መከታተያ መስመሮች የሚሰለፉበት ደረጃ (ከ0 በላይ፣ እስከ 180)። በዚህ አሳሽ ይቀመጣል።

### UNITS

ተለዋጭ ስሞች፦ `UN`። ርዝመቶች እንዴት እንደሚጻፉና እንደሚጻፉ።

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural እና Fractional፦ `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`። ሌሎቹ፦ `Enter number of decimal places (0 to 8)`።

አዲሶቹ ልኬቶች ይከተሉታል። አንድ የቀልብስ ደረጃ። ከ{{ui:Current settings}} ውስጥ {{ui:Length format}} እና {{ui:Precision}} ጋር ተመሳሳይ ነው፤ [ጫማና ኢንች](topic:units-papers-scales#feet-and-inches-and-fractions) ይመልከቱ።

### GDSIN

ተለዋጭ ስሞች፦ `GDS`። የIC አቀማመጥ (GDSII ዥረት ፋይል) ይመልከቱ፦ የላብ ሙከራ፣ ለመመልከትና ለመለካት ብቻ።

- የፋይል መራጭ `.gds` ፋይል ይወስዳል፤ በብዙ ከፍተኛ ሴሎች፣ `Enter the top cell to draw`።
- እያንዳንዱ ንብርብርና የመረጃ ዓይነት የንድፍ ንብርብር ይሆናል (`GDS 1`፣ `GDS 2/5`)፣ ማጣቀሻዎችና ድርድሮች ጠፍጣፋ ይቀመጣሉ፣ በፋይሉ የተጠቃሚ አሃድ (ብዙውን ጊዜ ማይክሮሜትር)። አንድ የቀልብስ ደረጃ። ምንም አይታሰብም ወይም አይፈተሽም፣ ፋይሉም ተመልሶ አይጻፍም።

### DIAGRAM

ተለዋጭ ስሞች፦ `TEXTDIAGRAM`፣ `T2D`። ዲያግራም ከጽሑፍ።

- ሳጥን ጽሑፉን ይወስዳል (ወይም በትዕዛዝ መስመሩ ላይ በ`;` የተለዩ ዓረፍተ ነገሮች አንድ መስመር)፦ የMermaid ፍሰት ገበታ፣ የPlantUML የአካል ክፍሎች ዲያግራም፣ D2 ወይም ከ-ወደ ዝርዝር።
- `Specify the top left corner of the diagram`፣ ከዚያ `Specify the text height`።

ብሎኮችና ማገናኛዎች በ`Diagram` ንብርብር ላይ ተራ ነገሮች ናቸው፣ ሲያበቃ ይመረጣሉ። አንድ የቀልብስ ደረጃ። [ከጽሑፍ ዲያግራም ይሳሉ](topic:text-to-diagram) ይመልከቱ።

### OLELIST

ተለዋጭ ስሞች፦ `OLES`። በDWG ያሉ፣ CadCraft በራሱ ማስቀመጥ የማይችላቸው የOLE ነገሮች።

- እያንዳንዱን ይዘረዝራል፦ ቁጥር፣ ዓይነት፣ መጠን፣ ስዕል ያስቀመጠ እንደሆነ።
- `Enter an option [Place/eXit] <eXit>`፦ Place ቁጥሩን፣ የታችኛውን ግራ ጥግ እና ወርዱን ይጠይቃል፣ እና ፍሬም ከስዕሉ ጋር ይስላል። አንድ የቀልብስ ደረጃ፤ የተያዘው ነገር አይለወጥም። [ስዕሎች](topic:pictures#objects-from-other-programs-ole) ይመልከቱ።

### SHXFONTS

ተለዋጭ ስሞች፦ `SHX`። የራስዎ SHX ቅርጸ-ቁምፊዎች።

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} በአቃፊ ውስጥ ያለ እያንዳንዱን `.shx` ያነባል (CadCraft Studio፤ በእያንዳንዱ ጅምር ዳግም)፣ {{ui:Files}} የተመረጡ ፋይሎችን ይወስዳል (አሳሹ)፣ {{ui:Reverse}} የአንድ ቅርጸ-ቁምፊ ፊደሎችን ከመጨረሻው ወደ መጀመሪያ ያዘጋጃል። የተጫነ ቅርጸ-ቁምፊ የሚሰይሙ የጽሑፍ ስታይሎች በእሱ ይሳላሉ። [በራስዎ SHX ቅርጸ-ቁምፊዎች ጽሑፍ ይሳሉ](topic:shx-fonts) ይመልከቱ።

### LIMITS

ንድፉ ምን ያህል ትልቅ እንዲሆን እንደታቀደ።

- `Specify lower left corner or [ON/OFF] <current>`፦ ነጥብ፣ `ON` ወይም `OFF`።
- `Specify upper right corner <current>`።

ፍርግርግ ገደቦቹን ይሞላል፣ {{cmd:ZOOM}} All እነሱን ያሳያል፣ እና ገደቦቹ ON ሲሆኑ ውጭ ያለ ነጥብ ውድቅ ነው (`**Outside limits`)። አንድ የቀልብስ ደረጃ፤ በDWG እና DXF ይቀመጣል። [የንድፉን ገደቦች አዘጋጁ](topic:drawing-limits) ይመልከቱ።

### AUNITS

ተለዋጭ ስሞች፦ `ANGUNITS`። አንግሎች እንዴት እንደሚታዩና እንደሚጻፉ።

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`፣ ወይም ለሌሎቹ ሁለት `Enter precision` (0 ዲግሪ፣ 2 ደቂቃ፣ 4 ሰከንድ፣ 5 እስከ 8 የሰከንድ አስርዮሾች)።

አንድ የቀልብስ ደረጃ፤ በDWG እና DXF ይቀመጣል። በ{{ui:Current settings}} ውስጥ ካለው {{ui:Angle format}} ጋር ተመሳሳይ ነው። [ቤሪንጎችንና አንግሎችን ጻፉና አሳዩ](topic:bearings-and-angles) ይመልከቱ።

### APPLOAD

ተለዋጭ ስሞች፦ `AP`፤ ወይም {{ui:View}} › {{ui:More}} › {{ui:Load application…}}። የ{{ui:Load applications}} መስኮት፦ የ`.lsp` ሩቲኖችንና የ`.dcl` የንግግር ፋይሎችን ጫን፣ አውርድ፣ ከታሪኩ ዳግም ጫን፣ እና Startup Suite። የሩቲኑ `(defun c:NAME …)` ትዕዛዞች እንደማንኛውም ይሠራሉ። [መተግበሪያዎችን ጫን](topic:load-applications) እና [LISP ሩቲኖችን አሂድ](topic:run-lisp) ይመልከቱ።

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ወይም {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) የተለዋጭ ስሞች ፋይልዎን (`ALIAS, *COMMAND` መስመሮች) ይከፍታል፤ {{ui:Save}} ይተገብረዋል። {{cmd:REINIT}} እንደገና ይተገብረዋል። [የትዕዛዝ ተለዋጭ ስሞችን አርትዕ](topic:command-aliases) ይመልከቱ።

### OPTIONKEYS

ተለዋጭ ስሞች፦ `OPTKEYS`፤ ወይም {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} › {{ui:Edit…}}። የአማራጭ ፊደሎች ፋይልዎን (`COMMAND.OPTION, LETTERS` መስመሮች፣ እንደ `ARRAY.PO, P`) ይከፍታል፤ {{ui:Save}} ይተገብረዋል፣ እና {{cmd:REINIT}} እንደገና ይተገብረዋል። [ለትዕዛዝ አማራጮች የራስዎን ፊደሎች ስጡ](topic:option-letters) ይመልከቱ።

### LISPEDIT

ተለዋጭ ስሞች፦ `VLIDE`፤ ወይም {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}። የLISP አርታኢውን ይከፍታል፣ ከንድፉ ጎን የሚቆይ መስኮት።

- ጽሑፉ፦ የመስመር ቁጥሮች፣ በጠቋሚው ያለው ቅንፍ ጓደኛው ይታያል (ከሌለው በቀይ)፣ {{key:Enter}} አዲሱን መስመር ከክፍት ቅንፍ በታች ያስገባል፣ {{key:Tab}} ሁለት ክፍተቶችን ይጽፋል፣ {{key:Esc}} ጽሑፉን ይተዋል።
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}})፦ ሁሉንም ቅጾች ያነባል፣ {{cmd:APPLOAD}} በፋይሉ እንደሚያደርገው፣ እና የ`c:` ትዕዛዞቹን ያደርጋቸዋል። ፋይሉ በ{{cmd:APPLOAD}} ዝርዝር ውስጥ ይታያል።
- {{ui:Run selection}} ({{key:Ctrl+Enter}})፦ የተመረጡትን ቅጾች፣ ወይም ጠቋሚው ያለበትን ቅጽ ያሂዳል።
- {{ui:Stop}}፦ በሂደት ያለ ሩቲን ያቆማል።
- {{ui:Console}}፦ ሩቲኑ ያተመው፣ እና እያንዳንዱ ስህተት ከመስመሩ ጋር፤ ስህተቱን ጠቅ ያድርጉ ወደዚያ ለመሄድ። ጽሑፉ በአንድ ከፍተኛ ደረጃ ቅጽ በአንድ ጊዜ ይሠራል፣ ስለዚህ መስመሩ የቅጹ ነው፣ ወይም በውስጡ ስህተቱ የሚጠራውን ተግባር የሚጠራው መስመር።
- {{ui:New}}፣ {{ui:Open}}፣ {{ui:Save}} ({{key:Ctrl+S}})፦ የ`.lsp` ፋይል። ጽሑፉ በዚህ አሳሽም ይቀመጣል፣ ስለዚህ መስኮቱን መዝጋት ጽሑፉን አያጠፋም።
- በጽሑፉ አጠገብ፦ ሩቲኑ የሚገልጻቸው ተግባራት፣ ይህ LISP ገና የሌለውን የሚጠራቸው፣ በውስጡ ያልተገለጹም ያልተገነቡም የሆኑ የሚጠራቸው፣ እና የተገነባውና ያልተገነባው ሙሉ ዝርዝሮች።

ያልተዘጋ ቅንፍ ወይም የማያልቅ ሕብረቁምፊ ያለው ጽሑፍ አይሠራም፤ መስመሩ ይጠቀሳል። በደረጃ የሚሄድ አራሚ፣ ማቆሚያዎች ወይም መመልከቻ መስኮት የለም። [LISP ሩቲኖችን አሂድ](topic:run-lisp) ይመልከቱ።

### HELP

ተለዋጭ ስሞች፦ `?`። እያንዳንዱን ትዕዛዝ፣ ተለዋጭ ስሞቹንና የአንድ መስመር መግለጫውን በትዕዛዝ መስመሩ ታሪክ ውስጥ ያትማል። ይህን እገዛ አይከፍትም፤ ለዚያ {{key:F1}} ይጫኑ ወይም {{ui:Help}} ላይ ጠቅ ያድርጉ።

## የ Select objects ጥያቄ

በማንኛውም `Select objects` ጥያቄ፦ ነገሮችን ጠቅ ያድርጉ፣ መስኮቶችን (ከግራ ወደ ቀኝ) እና መሻገሪያዎችን (ከቀኝ ወደ ግራ) በሁለት ጠቅታዎች ይሳሉ፣ ወይም ላስሶ ይጫኑና ይጎትቱ ({{key:Space}} በመጎተት ላይ፦ መስኮት፣ መሻገሪያ፣ አጥር)፣ {{key:Shift}}+ጠቅ ለማስወገድ፣ እና {{key:Enter}} ለመጨረስ። እንዲሁም `ALL` (ሁሉም)፣ `L` (የመጨረሻው ነገር)፣ `P` (ቀዳሚ፦ የመጨረሻው ትዕዛዝ የተጠቀመው)፣ `F` (አጥር፦ የነጥቦች መስመር የሚያቋርጣቸው ነገሮች፤ `U` ነጥብ ይመልሳል)፣ `W` (መስኮት)፣ `C` (መሻገሪያ)፣ `R` (የማስወገጃ ሁነታ፦ ምርጫዎች ነገሮችን ያወጣሉ፤ ጥያቄው `Remove objects` ይላል) እና `A` (እንደገና ጨምር) መጻፍ ይችላሉ። `?` ዝርዝራቸውን ያሳያል። በጥያቄው ላይ አይታዩም። {{key:Tab}} የተደራረቡ ነገሮች ላይ ቀጣዩን ያደምቃል፤ ለመምረጥ ጠቅ ያድርጉ። [ነገሮችን ምረጥ](topic:select-objects) ይመልከቱ።

### ACCESS

ተለዋጭ ስም `AX`። ያለ እይታ ረቂቅ። {{cmd:ACCESS}} ያለ እይታ ረቂቅን ያበራል ወይም ያጠፋል (`On`፣ `Off`)፣ እና የስናፕ ድምጾችን (`Sound`) እና የድምጽ ትዕዛዞችን (`Voice`) ይቀይራል፤ መጀመሪያ ሁኔታውን ይናገራል። ያለ እይታ ረቂቅ ሲበራ ያንዳንዱ ትዕዛዝና ውጤት በስክሪን አንባቢዎ ይነገራል እና የንድፍ ቦታው የቁልፍ ሰሌዳ ጠቋሚ አለው። የእገዛ ርዕሱ "ያለ እይታ ረቂቅ" ቁልፎቹን ይዟል።

### DESCRIBE

ተለዋጭ ስም `DESC`። ንድፉ የሚይዘውን ተናገር፦ ስንት ነገሮች፣ ምን ዓይነት፣ ምን ያህል ትልቅ፣ ስንት ንብርብሮች፣ ምን እንደተመረጠ። ያነባል ብቻ፤ ምንም አይለውጥም።

### WHEREAMI

ተለዋጭ ስም `WHERE`። ጠቋሚው የት እንዳለ በንድፉ አሃዶች ተናገር።

### NEARBY

ከጠቋሚው አጠገብ ያለውን ተናገር፣ በቅርብ መጀመሪያ፣ እያንዳንዱ ከርቀቱና ከሚገኝበት ጎን ጋር።

### SAYSEL

ተመርጦ ያለውን ተናገር፣ ለእያንዳንዱ ነገር አንድ ዓረፍተ ነገር (የመስመር ርዝመት፣ ጫፎችና አንግል፤ የክብ ራዲየስና ማዕከል፤ ጽሑፍ እንደተጻፈ)።

### VOICE

በንግግር የሚሰጡ ትዕዛዞችን አብራ ወይም አጥፋ። በዚህ ኮምፒውተር ይታወቃሉ፤ አሳሹ ይህን ማድረግ በማይችልበት ቦታ፣ በቅንብሮች ውስጥ የአሳሹን የመስመር ላይ አገልግሎት እስካልመረጡ ድረስ ድምጽ ጠፍቶ ይቆያል።

### TOUCHCROSSHAIR

ተለዋጭ ስም `TCX`። ለጣት ረቂቅ የተዛወረ መስቀለኛ ጠቋሚ፣ ጣቱ የመረጠውን ነጥብ እንዳይሸፍን። ሲበራ በንድፉ ላይ አንድ ጣት አይመርጥም፤ ከጣቱ በላይና ጎን የሚቀመጥ መስቀለኛ ጠቋሚ ያንቀሳቅሳል። የነገር ስናፖችና መከታተያ መስቀለኛ ጠቋሚውን ይከተላሉ። ጣቱን ማንሳት ምንም አይመርጥም እና መስቀለኛ ጠቋሚው በዚያ ይቀራል። ለመምረጥ፣ በንድፉ ጥግ ላይ ያለውን {{ui:Click}} ቁልፍ ይጫኑ፣ ወይም በሁለተኛ ጣት በንድፉ ላይ ይንኩ። ሌላውን ጣት ሲያንቀሳቅሱ {{ui:Click}} ይያዙ ለመጎተት (የመምረጫ መስኮት፣ ላስሶ፣ መያዣ)። አንድ ጣት ተጭኖ ሳይንቀሳቀስ ሲቆይ፣ ወይም {{ui:Enter}} ቁልፍ፣ Enter ነው። ሁለት ጣቶች እንደበፊቱ ያንሸራትታሉ እና ያጉላሉ። ከንድፉ ታች ጠርዝና ከሩቅ ጎን ጠርዝ አጠገብ መስቀለኛ ጠቋሚው ወደ ጣቱ ይጠጋል፣ ስለዚህ የንድፉ ማንኛውም ክፍል ሊደረስበት ይችላል። ብዕርና መዳፊት ሁልጊዜ በቀጥታ ይመርጣሉ።

{{cmd:TOUCHCROSSHAIR}} ሁኔታውን ይናገራል እና `ON`፣ `OFF`፣ `Auto` (ጣት ብቸኛ ጠቋሚ ሲሆን ብቻ በርቷል፤ ስለዚህ መዳፊት ባለው ኮምፒውተር ጠፍቷል)፣ `Distance` (መስቀለኛ ጠቋሚው ከጣቱ ምን ያህል እንደሚርቅ፣ 24 እስከ 240 ፒክስል) ወይም `Side` (`Left`፦ ወደ ላይና ወደ ግራ፣ ለቀኝ እጅ፤ `Right` ለግራ እጅ፤ ቁልፎቹ ወደ ሌላው ጥግ ይሄዳሉ) ይጠይቃል። ተመሳሳዮቹ ምርጫዎች በቅንብሮች › CadCraft ውስጥ ናቸው፣ እና በንክኪ ማያ ገጽ ያለው መሣሪያ ላይ የሁኔታ አሞሌው {{ui:Offset crosshair}} መቀያየሪያ አለው። ምርጫዎቹ በዚህ አሳሽ ይቀመጣሉ።

### WHOHAS

ንድፍ ማን እንደከፈተው ይናገራል። በCadCraft Studio ኮምፒውተር ላይ፣ DWG ወይም DXF ሲከፈት ከጎኑ ትንሽ የመቆለፊያ ፋይል (`Plan.dwg.cclock`፦ ማን፣ ከመቼ ጀምሮ፣ የየትኛው ስሪት) ይጽፋል፣ ንድፉ ክፍት እስካለ ድረስ በየደቂቃው ያድሰዋል፣ እና ንድፉ ሲዘጋ ያስወግደዋል። ሌላ ሰው የከፈተውን ንድፍ መክፈት ማን እንደሆነና ከመቼ ጀምሮ እንደሆነ ይነግርዎታል፣ እና {{ui:Open read-only}} (ከዚያ ማስቀመጥ አዲስ ስም ይጠይቃል)፣ {{ui:Open anyway}} (ሌላው ሰው በቀጣዩ ማደስ ይነገረዋል)፣ ወይም {{ui:Cancel}} ይሰጣል። ሌላ ሰው የከፈተውን ፋይል ላይ መጻፍ መጀመሪያ ይጠይቃል። ለአምስት ደቂቃ ያልታደሰ መቆለፊያ ያረጀ ይባላል፦ የሌላው ቅጂ ሳያስቀምጥ ዘግቷል ወይም ኮምፒውተሩ ተኝቷል።

{{cmd:WHOHAS}} `Current` (የተከፈተው ንድፍ)፣ `File` (ይምረጡ)፣ `FOlder` (አቃፊ ይምረጡ፦ ክፍት የሆነ እያንዳንዱ ንድፍ በዚያ ይዘረዘራል)፣ `Path` (ሙሉ ዱካ ይጻፉ) ወይም `Name` (ሌሎች የሚያዩት ስም፤ በመለያዎ ሲገቡ የመለያዎ ስም) ይጠይቃል። Studio ለመረጡዋቸው አቃፊዎች ብቻ መድረስ ይችላል፤ ከአቃፊ ያልተመረጠ ቦታ የተከፈተ ንድፍ ከሆነ አንድ ጊዜ ክፍት እንደሆነ ማስታወስ እንደማይችል ይናገራል፤ `FOlder` አቃፊውን ይመርጣል፣ እና ከዚያ በኋላ መቆለፊያዎቹ እዚያ ይሠራሉ። መቆለፊያው ለሰዎች ማስታወሻ ነው እንጂ እንቅፋት አይደለም፤ ሌላ ፕሮግራም አሁንም ፋይሉን ሊጽፍ ይችላል። በአሳሽ ውስጥ አቃፊዎች የሉም፣ ትዕዛዙም ይናገራል።

### OVERKILL

የተባዙ ነገሮችን ይሰርዛል እና መደራረብ ያላቸውን መስመሮችና ቅስቶች ያስተካክላል፤ በእጥፍ መስመር በተሞሉ ንድፎች። `Select objects to clean up`፣ {{key:Enter}}፣ ከዚያ ያሳዩትን ቅንብሮች ለማጽዳት እንደገና {{key:Enter}}፣ ወይም መጀመሪያ አንዱን ይቀይሩ፦

- `Tolerance`፦ ሁለት መጋጠሚያዎች አንድ ለመሆን ምን ያህል መቅረብ እንዳለባቸው (በመጀመሪያ 0.000001፤ 0 ማለት ትክክል ተመሳሳይ ማለት ነው)።
- `Ignore`፦ ሌላ ቢሆኑም ሁለት ነገሮች ሊለያዩባቸው የሚችሉ ባህሪያት። ለመቀያየር ስም ይጻፉ፦ `Color`፣ `LAyer`፣ `LType`፣ `ltScale`፣ `LWeight`፣ `THickness`፣ `TRansparency`፣ ወይም `None` / `All`። ሲጨርሱ {{key:Enter}}።
- `Overlap`፦ በርቶ ወይም ጠፍቶ። ሲበራ በአንድ ቀጥ መስመር ላይ የሚደራረቡ መስመሮች አንድ መስመር ይሆናሉ (ሌላ ውስጥ የተኛ መስመር በቀላሉ ይሰረዛል)፣ እና በአንድ ክብ ላይ የሚደራረቡ ቅስቶች አንድ ቅስት ይሆናሉ፤ ሙሉ ዙር የሚዘጉ ቅስቶች ክብ ይሆናሉ፣ እና በክብ ላይ የተኛ ቅስት ይሰረዛል።
- `Ends`፦ በርቶ ወይም ጠፍቶ። ሲበራ በአንድ ቀጥ መስመር ላይ ያሉ መስመሮችና በአንድ ክብ ላይ ያሉ ቅስቶች ጫፍ ለጫፍ ብቻ የሚነኩ ከሆነ አንድ ቁራጭ ይሆናሉ።

እያንዳንዱ የነገር ዓይነት ለተባዮች ይፈተሻል፦ ሁለት ነገሮች ጂኦሜትሪያቸው በመቻቻሉ ውስጥ አንድ ከሆነና ንብርብራቸው፣ ቀለማቸው፣ የመስመር ዓይነታቸው፣ የመስመር ዓይነት ስኬላቸው፣ የመስመር ውፍረታቸው፣ ውፍረታቸው፣ ግልጽነታቸው እና ቁመታቸው (ያ ችላ ያሉት ካልሆኑ በቀር) ከተጣጣሙ ተባዮች ናቸው። መስመሮችና ክፍት ፖሊላይኖች በተገላቢጦሽ ቢሳሉም ይዛመዳሉ። የመጀመሪያው ነገር በስዕሉ ቅደም ተከተል ይቆያል እና የራሱን ባህሪያት ይይዛል። ትዕዛዙ የፈተሸውን ነገር ቁጥርና የሰረዘውን ይናገራል፦ ተባዮች፣ የተዋሃዱ መደራረቦች፣ ጫፍ ለጫፍ የተያያዙ ቁራጮች። አንድ {{cmd:UNDO}} ሁሉንም ይመልሳል። ቅንብሮቹ የንድፍ መስኮቱን እስኪዘጉ ድረስ ይቆያሉ።

የሚተወው፦ በተቆለፉ ንብርብሮች ያሉ ነገሮችና የተደበቁ ነገሮች። ቁመት (Z) ያላቸውን መስመሮች አያዋህድም (በትክክል የተባዙት ግን ይሰረዛሉ)፣ እና በፖሊላይን ውስጥ ያሉ ክፍሎችን አይነካም (አይቀጠኑም)፣ በፖሊላይን ክፍል ላይ የተኛ መስመርን፣ እና በተገላቢጦሽ የተሳለ ዝግ ፖሊላይን አይነካም።

### DRAWORDER

ከፊት የሚሳሉትን ነገሮች ይለውጣል። `Select objects to re-order`፣ {{key:Enter}}፣ ከዚያ `Above objects`፣ `Under objects`፣ `Front` ወይም `Back` ({{key:Enter}} = `Back`)። `Above objects` እና `Under objects` የማጣቀሻ ነገሮችን ይጠይቃሉ፦ ምርጫው ከፊት ከሚሆኑት የፊቱ ቅርብ ይሄዳል፣ ወይም ከኋላ ከሚሆኑት የኋላው ቅርብ ይሄዳል። የተመረጡት ነገሮች በራሳቸው መካከል የራሳቸውን ቅደም ተከተል ይይዛሉ። አንድ የቀልብስ ደረጃ። ቅደም ተከተሉ በDWG እና DXF ከንድፉ ጋር ይቀመጣል፣ ነገሮቹ የሚጻፉበት ቅደም ተከተል ሆኖ።

በማያ ገጹ ላይ እያንዳንዱ ነገር በንድፉ ቅደም ተከተል ይሳላል፣ ፋይሉን እንደሚከፍቱ ሌሎች ፕሮግራሞች እንደሚስሉት፦ ጠንካራ ሀች፣ ሰፊ ፖሊላይን ወይም የጽሑፍ ጭንብል ከኋላው ያለውን መስመርና ጽሑፍ ይሸፍናል፣ እና ከፊቱ ያለው ይሸፍነዋል። መስመር ከጽሑፍ ጋር ሲገናኝ ሁለቱም ይታያሉ። በጣም ትልቅ ንድፍ ውስጥ ሙሌቶቹና መስመሮቹ 256 ጊዜ በላይ ሲደራረቡና ሲፈራረቁ፣ የመጀመሪያዎቹ 256 ቅደም ተከተላቸውን ይጠብቃሉ፣ ቀሪዎቹ ሙሌቶች ከመስመሮቹ ስር ይሳላሉ፣ ስለዚህ እንደገና መሳል ፈጣን ይቀራል።

### TEXTTOFRONT

ጽሑፍን፣ ልኬቶችንና መሪዎችን በክፍት ቦታው ከሌላው ሁሉ ፊት ያመጣል፦ `Text`፣ `Dimensions`፣ `Leaders` ወይም `All` ({{key:Enter}} = `All`)። አንድ የቀልብስ ደረጃ። ምንም ከሌለ፣ ወይም አስቀድመው ከፊት ከሆኑ ይናገራል።

### HATCHTOBACK

በክፍት ቦታው ያለውን እያንዳንዱን ሀች ከሌላው ሁሉ ጀርባ ይልካል፣ ሙሌቶች በተቀመጠው ፋይል ውስጥ መስመሮችንና ጽሑፍን እንዳይሸፍኑ። ጥያቄ የለም። አንድ የቀልብስ ደረጃ።

### ISOLATEOBJECTS

ተለዋጭ ስም `ISOLATE`። የተመረጡትን ነገሮች ብቻ ያሳያል፤ ሌላው ሁሉ በዚህ ቦታ እስከ {{cmd:UNISOLATEOBJECTS}} ድረስ ከእይታ ይወጣል። {{cmd:LAYISO}} እንዳለው ሳይሆን የሚመርጧቸውን ነገሮች ያለ ንብርብራቸው ይሠራል፣ እና ምንም ንብርብር አይለውጥም። የተደበቁ ነገሮች አይሳሉም፣ አይመረጡም፣ ስናፕ አይደረግባቸውም፣ አይጠጉም አይታተሙም፣ እና `ALL` የሚወስዱ ትዕዛዞች ያልፏቸዋል። ነገሮቹ ተነጥለው ሳሉ የሚስሉት እንደተለመደው ይታያል።

ለክፍለ ጊዜው ብቻ ነው፦ ምንም በንድፉ አይቀመጥም፣ የቀልብስ ደረጃ አይደለም፣ ንድፉን ዳግም መክፈት ሁሉንም ያሳያል። ነገሮች ሲደበቁ የሁኔታ አሞሌው ቁጥራቸውን የያዘ ቁልፍ ያሳያል፤ እንደገና ለማሳየት ጠቅ ያድርጉት።

### HIDEOBJECTS

የተመረጡትን ነገሮች እስከ {{cmd:UNISOLATEOBJECTS}} ድረስ ይደብቃል። ከ{{cmd:ISOLATEOBJECTS}} ጋር ያው ህጎች፦ ለክፍለ ጊዜው ብቻ፣ አይቀመጥም፣ የቀልብስ ደረጃ አይደለም።

### UNISOLATEOBJECTS

ተለዋጭ ስሞች፦ `UNISOLATE`፣ `UNHIDE`። በ{{cmd:ISOLATEOBJECTS}} ወይም {{cmd:HIDEOBJECTS}} የተደበቀውን እያንዳንዱን ነገር እንደገና ያሳያል፣ እና ስንቱ እንደተመለሰ ይናገራል።

### LAYLOCKFADE

በተቆለፉ ንብርብሮች ላይ ያሉ ነገሮች እንዴት እንደሚታዩና ጠቅታ ሊደርስባቸው እንደሚችል ያዘጋጃል። አሁን ያለውን ሁኔታ ይናገራል፣ ከዚያ ይወስዳል፦

- ከ0 እስከ 90 ያለ ቁጥር፦ የደብዘዝ መጠን በመቶ (በመጀመሪያ 50)። 0 ደብዘዙን ያጠፋል።
- `ON` ወይም `OFF`፦ ደብዘዝ በርቶ ወይም ጠፍቶ፣ መጠኑን እንደያዘ።
- `Pick`፣ ከዚያ `Yes` ወይም `No`፦ በትዕዛዝ ባልሆነበት ጊዜ ጠቅታ በተቆለፉ ንብርብሮች ላይ ነገሮችን ይመርጥ እንደሆነ? `No` (ነባሪ)፦ በፍጹም አይመረጡም። `Yes`፦ ጠቅታ ወይም መስኮት ይመርጣቸዋል፣ {{ui:Properties}} እንዲያሳያቸው፤ አሁንም አይለወጡም፣ እና የትዕዛዝ የራሱ `Select objects` በጭራሽ አይወስዳቸውም።

የነገር ስናፖች በሁለቱም ሁኔታ ነገሮችን በተቆለፉ ንብርብሮች ላይ ያገኛሉ። ህትመቶች ፈጽሞ አይደበዘዙም። ሁለቱም ቅንብሮች የእርስዎ ናቸው፣ የንድፉ አይደሉም፤ እና በ{{ui:Settings}} ውስጥ {{ui:Locked layers}} ስር ናቸው።

### BURST

የብሎክ ማጣቀሻዎችን ይፈነዳል እና ባህሪያቸው የሚሉትን ይይዛል። `Select block references to burst`፣ {{key:Enter}}፦ እያንዳንዱ ማጣቀሻ በብሎኩ ነገሮች ይተካል፣ እና የእያንዳንዱ የሚታይ ባህሪ እሴት በዚያ ባህሪ የራሱ ንብርብር ላይ ቀላል ጽሑፍ ይሆናል (በንብርብር 0 ያለ ባህሪ ከማጣቀሻው ንብርብር ላይ ይወድቃል፣ እንደ ብሎኩ ሌሎች ነገሮች በንብርብር 0)። የማይታዩ ባህሪዎች ይጣላሉ። በብሎኩ ውስጥ ያለ ብሎክ ብሎክ ማጣቀሻ ሆኖ ይቀራል። አንድ የቀልብስ ደረጃ፤ የፈነዱትን ማጣቀሻዎች እና ወደ ጽሑፍ የተቀየሩትን የባህሪ እሴቶች ይናገራል።

የተገናኘ ንድፍን በስሙ ውድቅ ያደርጋል (መጀመሪያ ያስራሉ፣ ወይም {{cmd:NCOPY}} በመጠቀም ይቅዱ)፣ እና ሌሎች የተመረጡ ነገሮችን ይተዋል። ለብሎክ ማጣቀሻዎች {{cmd:EXPLODE}} ተመሳሳይ ነገሮችን ይሰጣል፤ {{cmd:BURST}} ብሎክ ማጣቀሻዎችን ብቻ ይወስዳል እና የባህሪ ጽሑፉን ይቆጥራል።

### TXT2MTXT

ተለዋጭ ስም `T2M`። ነጠላ መስመር ጽሑፎችን ወደ አንድ የአንቀጽ ጽሑፍ ያያይዛል። `Select single-line text to join`፣ {{key:Enter}}፣ ከዚያ `Paragraph` (መስመሮቹ ይሮጣሉ እና በሰፋ መስመር ወርድ ይጠቀለላሉ) ወይም `Lines` (እያንዳንዱ ጽሑፍ የራሱ መስመር ይቆያል)፤ {{key:Enter}} የመጨረሻውን የተጠቀመበትን ይወስዳል። መስመሮቹ ከላይ ወደ ታች፣ ከዚያ ከግራ ወደ ቀኝ፣ በላይኛው ጽሑፍ አቅጣጫ ይደረደራሉ። አንቀጹ ከላይኛው ጽሑፍ የላይኛው ግራ ጥግ ይንጠለጠላል፣ እና ቁመቱን፣ ሽክርክሪቱን፣ ስታይሉን፣ ንብርብሩንና ቀለሙን ይወስዳል። አንድ የቀልብስ ደረጃ።

ቀድሞ የአንቀጽ ጽሑፍ የሆነ፣ ባዶ ጽሑፍና ሌሎች በምርጫው ያሉ ነገሮች ይተዋሉ፣ እና ትዕዛዙ ስንቱ እንደሆነ ይናገራል።

### NCOPY

ነገሮችን ከብሎክ ማጣቀሻ ወይም ከተገናኘ ንድፍ ወደ ንድፉ ይቀዳል፣ ምንም ሳይፈነዳ። `Pick an object inside a block reference or a linked drawing`፦ ጠቅታው ቅርብ የሆነው ነገር ሲታይ በሚገኝበት ቦታ ይቀዳል፣ በስንት ብሎኮች ጥልቅ ቢሆንም፤ ተጨማሪ ይምረጡ፣ ከዚያ {{key:Enter}}። ቀጥሎ `Base point to move the copies`፦ {{key:Enter}} በቦታቸው ያስቀምጣቸዋል፣ ወይም መሠረት ነጥብና ሁለተኛ ነጥብ ይስጡ። መላው ትዕዛዝ አንድ የቀልብስ ደረጃ ነው።

ቅጂ የሚታይበትን ንብርብር ይወስዳል፦ በብሎክ ውስጥ በንብርብር 0 ያለ ነገር ወደ ያ ማጣቀሻ የነበረበት ንብርብር ይወድቃል፣ እና በ ByBlock ቀለም ቀለሙ የዚያ ማጣቀሻ ይሆናል። ከተገናኘ ንድፍ ንብርብር `Plan|Walls` `Plan$0$Walls` ይሆናል (የማገናኛው የሚሰጠው ስም)፣ ከተገናኘው ንብርብር ቀለም፣ የመስመር ዓይነትና የመስመር ውፍረት ጋር። የባህሪ እሴት እንደ ጽሑፍ ይቀዳል። በተቆለፉ ንብርብሮች ያሉ የብሎክ ማጣቀሻዎች ሊመረጡ አይችሉም።

### FLATTEN

የተመረጡት ነገሮች ቁመት (Z) እና ውፍረት ወደ 0 ያዘጋጃል። `Select objects to flatten`፣ {{key:Enter}}። የምርጫው የሚጠቀምባቸውን ብሎኮች ትርጓሜዎች ውስጥ ያሉ ነገሮችንም (እና በእነሱ ውስጥ ያሉ ብሎኮችን) ያስተካክላል፣ ስለዚህ የእነዚያ ብሎኮች እያንዳንዱ ማጣቀሻ ይለወጣል፤ የተገናኙ ንድፎች እንደነበሩ ይቀራሉ። አንድ የቀልብስ ደረጃ፤ ስንት ነገሮች እንደተለወጡ ይናገራል፣ እና ምንም ቁመት ወይም ውፍረት ካልነበራቸው ይናገራል።

በ2D ንድፍ ውስጥ CadCraft ከሦስተኛው ልኬት ምን እንደሚይዝ፦ በክቦች፣ ቅስቶች፣ ኤሊፕሶች፣ ነጥቦች፣ ጽሑፍ፣ ብሎክ ማጣቀሻዎች፣ ሀችዎች፣ መሪዎችና ፖሊላይኖች ላይ ቁመት (ከፍታቸው)፣ በእያንዳንዱ የመስመር ጫፍ ላይ ቁመት፣ እና በመስመሮች፣ ክቦች፣ ቅስቶች፣ ፖሊላይኖች፣ ነጥቦችና ጽሑፍ ላይ ውፍረት፣ ፋይሉ እንደነበረ። {{cmd:FLATTEN}} እነዚያን በትክክል ያጸዳል። በ3D ትሩ ላይ ያለውን 3D ሞዴል፣ 3D ፊቶችን ወይም ጠጣሮችን አይነካም፤ በዘንበል ያለ አውሮፕላን የተሳለ ነገር ፋይሉ ሲከፈት ቀድሞውኑ ወደ ንድፉ አውሮፕላን ተቀይሯል።

### BREAKLINE

የመስበሪያ ምልክት ያለው መስመር ይስላል፣ ለተቆረጠ እይታ። አሁን ያለውን መጠንና ማራዘሚያ ይናገራል፣ ከዚያ `First point of the break line` (ወይም መጀመሪያ ለመቀየር `Size` / `Extension`)፣ `Second point`፣ እና `Where the break symbol sits`፦ በመስመሩ ላይ ጠቅ ያድርጉ፣ ወይም መሃል ለ {{key:Enter}}። ውጤቱ በአሁኑ ንብርብር ላይ አንድ ፖሊላይን ነው፦ መስመሩ፣ እያንዳንዱ ነጥብ ማራዘሚያ ያህል ያልፋል፣ መጠኑ ያህል ቁመት ያለው እና ግማሽ ርዝመት ያለው የZ ቅርጽ ምት ጋር።

`Size` እና `Extension` እንደ ቅንብሮችዎ ይታወሳሉ (መጠኑ በመጀመሪያ የልኬት የጽሑፍ ቁመት እጥፍ በልኬት ስኬል ነው፤ ማራዘሚያው የመጠኑ ግማሽ)። {{key:Enter}} ትዕዛዙን ይደግማል።

### AUDIT

ንድፉን ለጉዳት ይፈትሻል እና ይጠግነዋል። {{cmd:AUDIT}} በሞዴሉ፣ በሉሆቹና በብሎኮች ውስጥ ያለውን እያንዳንዱን ነገር፣ እንዲሁም የንብርብሩን ሰንጠረዥ ይመለከታል፣ እና ያገኘውን በዓይነት ይዘረዝራል፦

- ቁጥሮች ውስን ያልሆኑ ወይም እጅግ ትልቅ የሆኑ፤
- መጠን የሌላቸው ነገሮች፦ ርዝመት የሌለው መስመር፣ ራዲየስ የሌለው ክብ፣ አንድ ቦታ ብቻ ያለው ፖሊላይን፣ ፊደል የሌለው ወይም ቁመት የሌለው ጽሑፍ፣ ዜሮ ስኬል ያለው ብሎክ ማጣቀሻ፤
- ንድፉ የሌለው ንብርብር ላይ ያሉ ነገሮች፣ የሌለ ብሎክ ማጣቀሻዎች፣ በንድፉ ውስጥ የሌሉ የጽሑፍና የልኬት ስታይል ስሞች እና የመስመር ዓይነት ስሞች፤
- ራሳቸውን የያዙ ብሎኮች፣ በቀጥታ ወይም በሌሎች ብሎኮች በኩል፤
- መለያ፣ ቁልፍ ወይም የፋይል እጀታ የሚጋሩ ነገሮች፤
- ከሚለኩባቸው ነጥቦች የሌላቸው ልኬቶች፣ እና ድንበሩ የዝግ ዝርዝር ያልሆነ ሀችዎች።

ከዚያ `Fix them? [Yes/No]` ብሎ ይጠይቃል። `No` ምንም አይለውጥም። `Yes` ሁሉንም በአንድ የቀልብስ ደረጃ ይጠግናል፦ ሊሳል የማይችለው ይወገዳል (መጥፎ ቁጥሮች፣ መጠን የሌለው፣ የጠፋ ብሎክ፣ የተበላሸ ልኬት፣ ጠቃሚ ድንበር የሌለው ሀች፣ የብሎኮች ክብን የሚዘጋ ማጣቀሻ)፤ የጠፋ ንብርብር ይፈጠራል፤ ያልታወቁ የስታይል እና የመስመር ዓይነት ስሞች ወደ ነባሪዎቻቸው ይመለሳሉ፤ የተጋራ ቁልፍ ይተካል። ስንት ነገሮች እንደተወገዱ እና ስንቱ እንደተጠገነ ያትማል። ተመሳሳይ ግኝቶች በችግሮች ፓነል ላይ ይታያሉ፣ እያንዳንዱ የራሱ {{ui:Repair}} ይዞ።

ምንም አይከለክልም፤ ነገር ግን CadCraft ራሱ የሚስለውን ብቻ ይፈትሻል፤ ለሌሎች ፕሮግራሞች የተቀመጠ ውሂብ (3D ጠጣሮች፣ OLE ነገሮች) አይከፈትም።

### RECOVER

የተበላሸ DXF ወይም DWG ይከፍታል። {{cmd:RECOVER}} ፋይሉን ይጠይቃል፣ ሊነበብ የሚችለውን ያነባል ፋይሉን ከመከልከል ይልቅ፣ የዘለለውን ወይም የገመተውን ይዘረዝራል፣ ከዚያ ንድፉን {{cmd:AUDIT}} በ`Yes` እንደሚያደርገው ይፈትሻል እና ይጠግነዋል።

- DXF፦ ከኮድና ዋጋ ጥንድ አካል ያልሆኑ መስመሮች ጥንዶቹ እንደገና እስኪሰለፉ ድረስ ይዘላሉ፤ መጨረሻ የሌለው ክፍል ይዘጋል፤ የተቆረጠ ፋይል እስከተቆረጠበት ይነበባል፤ የተቆረጠ ሁለትዮሽ DXF እስከ መጨረሻው ሙሉ ዋጋው ይነበባል። ክፍል፣ ብሎክ ወይም ነገር አሁንም ማንበብ ካልተቻለ ይቀራል እና በስሙ ይጠቀሳል፣ ንባቡም ያልፈዋል።
- DWG፦ ፍተሻቸውን የማያልፉ ወይም ዲኮድ ማድረግ የማይቻሉ ነገሮች ይቀራሉ፣ እና የጠፋ የነገሮች ዝርዝር በነገሮቹ ውሂብ በእግር በመሄድ ይገነባል።

በዲስክ ላይ ያለው ፋይል አይለወጥም። የተመለሰው ንድፍ ያለመቀመጥ ይከፈታል፦ በአዲስ ስም ያስቀምጡት። ምንም ሊነበብ የማይችል ፋይል በምክንያቱ ይከለከላል።

### LEGACYTEXT

በድሮ ባለ 8-ቢት የቬትናምኛ ቅርጸ-ቁምፊዎች የተጻፈ ጽሑፍን ወደ Unicode ይቀይራል። አጭር ስሞች `TEXTTOUNICODE` እና `VNTEXT`።

የቆዩ የቬትናምኛ ንድፎች ጽሑፋቸውን በምዕራባውያን ፊደሎች ይይዛሉ፤ ቅርጸ-ቁምፊው ብቻ ወደ ቬትናምኛ ይቀይራቸዋል፦ TCVN3 ጽሑፍ በ ABC ቅርጸ-ቁምፊዎች (`.VnTime`፣ `.VnArial`፣ እና ስማቸው በ`H` የሚያልቅ ትልቅ-ፊደል ቅርጸ-ቁምፊዎች)፣ እና VNI ጽሑፍ በ VNI ቅርጸ-ቁምፊዎች (`VNI-Times`)። CadCraft እንደ ጽሑፉ ቅርጸ-ቁምፊ፣ የነገሩ ወይም በአንቀጽ ጽሑፍ ውስጥ ባለ የቅርጸት ክፍል ቅርጸ-ቁምፊ ንድፉ እንደተከፈተ ያነበበውን እንደሚያሳየው ያሳያል፤ ፋይሉ ግን የድሮውን ፊደሎች ይይዛል።

{{cmd:LEGACYTEXT}} በእያንዳንዱ ኢንኮዲንግ ስንት ጽሑፎች እንዳገኘ ይናገራል እና `Convert … to Unicode?` ብሎ ይጠይቃል። `Yes` እያንዳንዱን ይጽፋል (ሞዴል፣ ሉሆች፣ ብሎኮች፣ የባህሪ እሴቶችና ትርጓሜዎች)፣ እና የጽሑፍ ስታይሎችን የUnicode ቅርጸ-ቁምፊ ይሰጣቸዋል (Times New Roman፣ Arial ወይም Courier New በድሮው ቅርጸ-ቁምፊ ዓይነት)፣ በአንድ የቀልብስ ደረጃ። በአንቀጽ ጽሑፍ ውስጥ ያለ ቅርጸት ይቀራል።

ጽሑፍ የሚጠቀምበት የታወቀ ቅርጸ-ቁምፊ በሌለበት ጊዜ (ቅርጸ-ቁምፊ ስሙን ያጣ ስታይል)፣ `Read selected texts as [Tcvn3/Vni/None]` ብሎ ይጠይቃል፦ ኢንኮዲንግ ይምረጡና ጽሑፎቹን ይምረጡ። ቀድሞ Unicode የሆነ ጽሑፍ ይቀራል። የልኬት ጽሑፍ መሻሪያዎችና የብዙ መሪ ጽሑፍ አይለወጡም።
