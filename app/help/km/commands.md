---
title: ឯកសារយោងពាក្យបញ្ជា
summary: ពាក្យបញ្ជាទាំងអស់នៃកម្មវិធីគូរ CadCraft ជាមួយឈ្មោះខ្លី សំណួរដែលវាសួរ ជម្រើស និងតម្លៃលំនាំដើម។
keywords: ពាក្យបញ្ជា, ឈ្មោះខ្លី, បញ្ជីពាក្យបញ្ជា, ផ្ទៃក្រឡា, បរិមាត្រ, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

វាយឈ្មោះពាក្យបញ្ជា ឬឈ្មោះខ្លី ហើយចុច {{key:Enter}} ឬ {{key:Space}}។ ភាពធំតូចមិនសំខាន់ ហើយ `_`, `-`, `.` ឬ `'` នៅដើមត្រូវបានមិនអើពើ។ វាយ `HELP` (ឬ `?`) ដើម្បីបង្ហាញបញ្ជីខ្លីនៃពាក្យបញ្ជាទាំងអស់នៅក្នុងប្រវត្តិបន្ទាត់បញ្ជា; ចុច {{key:F1}} សម្រាប់ជំនួយនេះ។

របៀបអានសំណួរ៖ ជម្រើសនៅក្នុងវង់ក្រចកការ៉េ ហើយអ្នកជ្រើសមួយដោយវាយអក្សរធំរបស់វា (`D` សម្រាប់អង្កត់ផ្ចិត)។ តម្លៃលំនាំដើមនៅក្នុងវង់ក្រចកមុំ; ចុច {{key:Enter}} ដើម្បីទទួលយកវា។ ពេលចំណុចត្រូវបានសួរ អ្នកអាចចុច ឬវាយទម្រង់ណាមួយនៃ [ការបញ្ចូលកូអរដោនេ និងចម្ងាយ](topic:coordinate-entry)។ ពេលចម្ងាយត្រូវបានសួរ អ្នកអាចវាយលេខ ឬចុចចំណុចពីរ។

ការចុច {{key:Enter}} ពេលចំណុច ឬវត្ថុត្រូវបានតម្រូវ ហើយគ្មានលំនាំដើម បញ្ចប់ពាក្យបញ្ជា។ {{key:Esc}} បោះបង់វា។ អ្វីដែលពាក្យបញ្ជាធ្វើគឺជាជំហានមិនធ្វើវិញមួយ។

## គូរ

### LINE

ឈ្មោះខ្លី៖ `L`។ ផ្នែកត្រង់ នីមួយៗជាវត្ថុរបស់វា។

- `Specify first point` (Enter៖ ចាប់ផ្ដើមពីចំណុចចុងក្រោយដែលអ្នកបានផ្ដល់)
- `Specify next point [Undo]` ដដែលៗ។ បន្ទាប់ពីផ្នែកពីរ៖ `[Undo/Close]`។
- `U` យកផ្នែកចុងក្រោយមកវិញ `C` បិទទៅចំណុចទីមួយ ហើយបញ្ចប់។ Enter បញ្ចប់។

### PLINE

ឈ្មោះខ្លី៖ `PL`។ ប៉ូលីឡាញមួយនៃផ្នែកបន្ទាត់ និងធ្នូ។

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close នៅពេលមានពីរផ្នែក)
- `A` ប្ដូរទៅធ្នូ៖ `Specify endpoint of arc [Line/CLose/Undo]`។ ធ្នូនីមួយៗបន្តតាមប៉ះនឹងផ្នែកមុនវា។ `L` ត្រឡប់ទៅបន្ទាត់ `CL` បិទជាមួយធ្នូ។
- Enter បញ្ចប់; ប៉ូលីឡាញនៅតែបើក។

### CIRCLE

ឈ្មោះខ្លី៖ `C`។

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` សួរ `Specify diameter of circle`។
- `2P`៖ ចុងទាំងពីរនៃអង្កត់ផ្ចិតមួយ។ `3P`៖ ចំណុចបីនៅលើរង្វង់។
- `T` (ក៏ពាក្យបញ្ជា `TTR` និង {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}})៖ `Specify point on object for first tangent of circle`, ទីពីរ, បន្ទាប់មកកាំ (Enter៖ ចុងក្រោយ)។ រង្វង់ប៉ះវត្ថុទាំងពីរ (បន្ទាត់ ធ្នូ រង្វង់ ផ្នែកប៉ូលីឡាញ ក៏នៅក្នុងប្លុកផងដែរ); ក្នុងចំណោមរង្វង់ដែលប៉ះ រង្វង់ដែលប៉ះនៅជិតការជ្រើសរបស់អ្នកបំផុត។ "Circle does not exist" នៅពេលគ្មានអ្វីសម។
- `TTT` (ឬ {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}})៖ វត្ថុបី; រង្វង់ដែលប៉ះទាំងបី ជិតការជ្រើសរបស់អ្នកបំផុត (បន្ទាត់បីផ្ដល់រង្វង់ខាងក្នុង ឬខាងក្រៅ អាស្រ័យលើកន្លែងដែលអ្នកជ្រើស)។

### ARC

ឈ្មោះខ្លី៖ `A`។

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`៖ ធ្នូឆ្លងកាត់បីចំណុច។
- `C`៖ `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`។ ធ្នូដំណើរការច្រាសទ្រនិចនាឡិកាពីចាប់ផ្ដើមទៅចុង។

### RECTANG

ឈ្មោះខ្លី៖ `REC`, `RECTANGLE`។ ប៉ូលីឡាញបិទ។

- `Specify first corner point`, `Specify other corner point`។ វាយ `@width,height` សម្រាប់ជ្រុងទីពីរ។

### POLYGON

ឈ្មោះខ្លី៖ `POL`។ ពហុកោណធម្មតាជាប៉ូលីឡាញបិទ។

- `Enter number of sides <4>` (3 ដល់ 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`៖ ចុច ឬវាយចំណុចមួយ; ចម្ងាយរបស់វាកំណត់ទំហំ ហើយទិសដៅរបស់វាបង្វិលពហុកោណ។

### ELLIPSE

ឈ្មោះខ្លី៖ `EL`។

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`៖ `Specify center of ellipse`, `Specify endpoint of axis`, បន្ទាប់មកចម្ងាយទៅអ័ក្សផ្សេង។
- `I` (`Isocircle` ពេល {{cmd:ISODRAFT}} បើកប៉ុណ្ណោះ)៖ ចំកណ្ដាល បន្ទាប់មកកាំ ឬ `Diameter`៖ អេលីប្សដែលរង្វង់បង្ហាញលើយន្តហោះ isometric បច្ចុប្បន្ន។

### HATCH

ឈ្មោះខ្លី៖ `H`, `BH`, `BHATCH`; ឬ {{ui:Hatch}} នៅរបារឧបករណ៍។ បង្ហាញលំនាំ មាត្រដ្ឋាន និងមុំបច្ចុប្បន្នជាមុនសិន។

- `Pick internal point [Select objects/Pattern/SCale/Angle]` ដដែលៗ (`Undo` ពេលមានតំបន់មួយ)៖ ចុចនីមួយៗបន្ថែមតំបន់បិទដែលនៅជុំវិញវា ជាមួយរូបរាងបិទដែលនៅខាងក្នុងជាកោះ។ Enter ធ្វើហាច់មួយពីពួកវាទាំងអស់។
- `S`៖ `Select closed objects` (ប៉ូលីឡាញបិទ រង្វង់ អេលីប្សបិទ)។
- `P`៖ `Enter a pattern name, SOLID, or ? for the list <current>`។ `SC`៖ `Specify pattern scale`។ `A`៖ `Specify pattern angle`។
- `G` (Gradient)៖ ការបំពេញជាជម្រាលជំនួសលំនាំ។ សូមមើល {{cmd:GRADIENT}} សម្រាប់សំណួររបស់វា។

សូមមើល [ហាច់ និងតំបន់បំពេញ](topic:hatch)។

### GRADIENT

ឈ្មោះខ្លី៖ `GD`។ បំពេញតំបន់ដោយជម្រាលនៃពណ៌មួយ ឬពីរ។ វាសួរជម្រាលជាមុនសិន បន្ទាប់មកដំណើរការដូច {{cmd:HATCH}} (`Pick internal point`, `S` សម្រាប់វត្ថុបិទ, {{key:Enter}} ដើម្បីបញ្ចប់)។

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>` ដដែលៗ; វាបង្ហាញជម្រាលដូចដែលវាស្ថិតនៅឥឡូវ រាល់ពេល។
- `T`៖ `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ឬមួយក្នុងចំណោមពួកវាដែលបញ្ច្រាស (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`)។ អក្សរដំបូងគឺគ្រប់គ្រាន់។
- `O`៖ ពណ៌មួយ បន្ទាប់មកភាពស្រាលពី 0 ដល់ 1 (0 ធ្វើឱ្យងងឹតទៅខ្មៅ 0.5 គឺពណ៌ខ្លួនវា 1 ធ្វើឱ្យស្រាលទៅស)។ `TW`៖ ពណ៌ទីមួយ និងទីពីរ។ ពណ៌គឺជាលេខពី 1 ដល់ 255, លេខបីដូចជា `255,128,0`, ឬ `#rrggbb`។
- `A`៖ មុំដែលជម្រាលដំណើរការ។ `C`៖ កណ្ដាល Yes ឬ No (No ផ្លាស់ទីកណ្ដាលនៃជម្រាលទៅម្ខាង)។
- វាបដិសេធពណ៌ ឬប្រភេទដែលវាមិនស្គាល់ ហើយភាពស្រាលនៅក្រៅ 0 ដល់ 1។

{{cmd:HATCHEDIT}} `G` និង Properties (Gradient) ផ្លាស់ប្ដូរជម្រាលក្រោយ ឬប្ដូរហាច់ណាមួយឱ្យទៅជាជម្រាល។ ជម្រាលត្រូវបានគូរលើអេក្រង់ និងបោះពុម្ព។ DWG 2004 ឡើងទៅរក្សាវាជាហាច់ជម្រាលពិត; DXF 2000 និង DWG 2000 រក្សាវាសម្រាប់ CadCraft ហើយកម្មវិធីផ្សេងឃើញការបំពេញរឹងក្នុងពណ៌ទីមួយ។

### HATCHGENERATEBOUNDARY

ឈ្មោះខ្លី៖ `HGB`។ បង្កើតព្រំដែនឡើងវិញពីហាច់ដែលបាត់វា។ `Select hatches` (ឬជ្រើសវាជាមុនសិន), បន្ទាប់មក `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`។

- រង្វិលនីមួយៗនៃហាច់ក្លាយជាប៉ូលីឡាញបិទនៅលើស្រទាប់របស់ហាច់; ប៉ូលីឡាញថ្មីនៅតែជ្រើស។ ផ្នែកកោងត្រឡប់មកជាផ្នែកត្រង់ខ្លីៗដែលហាច់រក្សា។
- ជាមួយ Yes ហាច់ដើរតាមព្រំដែនថ្មីរបស់វា ដូចហាច់ដែលធ្វើជាមួយ {{cmd:HATCH}}។ ជំហានមិនធ្វើវិញមួយ។
- វានិយាយដូច្នេះនៅពេលគ្មានហាច់ត្រូវបានជ្រើស។

### POINT

ឈ្មោះខ្លី៖ `PO`; ឬ {{ui:Draw}} › {{ui:More}} › {{ui:Point}}។ វត្ថុចំណុច មួយក្នុងមួយចុច រហូតដល់ Enter។

- `Specify a point`

### XLINE

ឈ្មោះខ្លី៖ `XL`; ឬ {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}។ បន្ទាត់ជំនួយ គ្មានទីបញ្ចប់ទាំងពីរខាង។ សូមមើល [បន្ទាត់ជំនួយ និងកាំរស្មី](topic:construction-lines)។

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, បន្ទាប់មក `Specify through point` សម្រាប់បន្ទាត់នីមួយៗ រហូតដល់ Enter។
- `A`៖ `Enter angle of construction line [Reference] <0>`; `R` សួរ `Select a line object` ជាមុនសិន។
- `B`៖ `Specify angle vertex point`, `Specify angle start point`, បន្ទាប់មក `Specify angle end point` សម្រាប់បន្ទាត់នីមួយៗ។
- `O`៖ `Specify offset distance [Through] <Through>`, បន្ទាប់មក `Select a line object` និង `Specify side to offset` (ឬ `Specify through point`) សម្រាប់បន្ទាត់នីមួយៗ។

### RAY

គ្មានឈ្មោះខ្លី; ឬ {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}។ `Specify start point`, បន្ទាប់មក `Specify through point` សម្រាប់កាំរស្មីនីមួយៗ រហូតដល់ Enter។

### TEXT

ឈ្មោះខ្លី៖ `DT`, `DTEXT`; ឬ {{ui:Text}} នៅរបារឧបករណ៍។ អត្ថបទមួយបន្ទាត់; បន្ទាត់នីមួយៗជាវត្ថុរបស់វា។

- `Specify start point of text [Justify]`
- `J`៖ `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, បន្ទាប់មក `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text` ដដែលៗ៖ Enter នីមួយៗចាប់ផ្ដើមបន្ទាត់បន្ទាប់ខាងក្រោម។ Enter នៅបន្ទាត់ទទេបញ្ចប់។ {{key:Space}} វាយដកឃ្លានៅទីនេះ។

### DIVIDE

ឈ្មោះខ្លី៖ `DIV`។ {{cmd:DIVIDE}} ដាក់សញ្ញានៅលើបន្ទាត់ ធ្នូ រង្វង់ ប៉ូលីឡាញ spline ឬអេលីប្ស ដែលកាត់វាជាផ្នែកស្មើគ្នា។ ជ្រើសវត្ថុ បន្ទាប់មកផ្ដល់ចំនួនផ្នែក (2 ដល់ 32767)។ វត្ថុបើកទទួលសញ្ញាមួយតិចជាងផ្នែក; វត្ថុបិទទទួលសញ្ញានៅចំណុចចាប់ផ្ដើមផងដែរ។ វត្ថុខ្លួនវាមិនត្រូវបានកាត់ឡើយ។ សញ្ញាគឺជាចំណុច; `Block` សួរប្លុកនៃគំនូរប្លង់នេះជំនួសវិញ និងថាតើវាបង្វិលដើម្បីដើរតាមវត្ថុឬអត់។ ប្រវែងតាមខ្សែ spline និង ellipse ត្រូវបានវាស់តាមបន្ទាត់ខ្លី។ វាបដិសេធអត្ថបទ ហាច់ និងវត្ថុផ្សេងដែលគ្មានប្រវែង។

### MEASURE

ឈ្មោះខ្លី៖ `ME`។ {{cmd:MEASURE}} ដាក់សញ្ញានៅគ្រប់ប្រវែងដែលបានផ្ដល់តាមបន្ទាត់ ធ្នូ រង្វង់ ប៉ូលីឡាញ spline ឬអេលីប្ស ដោយរាប់ពីចុងដែលនៅជិតកន្លែងដែលអ្នកបានជ្រើស (វត្ថុបិទ៖ ពីចំណុចចាប់ផ្ដើមរបស់វា)។ ផ្ដល់ប្រវែងដោយវាយវា ឬដោយចំណុចពីរ។ ចុងឆ្ងាយនៃវត្ថុបើកមិនទទួលសញ្ញាទេ។ `Block` ដាក់ប្លុកនៅសញ្ញានីមួយៗជំនួសចំណុច។ វាបដិសេធប្រវែង 0, ប្រវែងដែលវែងជាងវត្ថុ, និងប្រវែងដែលនឹងធ្វើឱ្យសញ្ញាលើសពី 32767។

### BOUNDARY

ឈ្មោះខ្លី៖ `BO`, `BPOLY`។ {{cmd:BOUNDARY}} ធ្វើប៉ូលីឡាញបិទជុំវិញតំបន់ដែលមានចំណុចដែលអ្នកជ្រើស ពីបន្ទាត់ ធ្នូ រង្វង់ ប៉ូលីឡាញ និងខ្សែកោងណាមួយដែលព្យួរវា នៅលើអេក្រង់។ ផ្នែកដែលនៅលើធ្នូ ឬរង្វង់ ត្រឡប់មកជាផ្នែកធ្នូ; ផ្នែកនៃអេលីប្ស និងខ្សែ spline ត្រឡប់មកជាផ្នែកត្រង់ខ្លី។ ជាមួយ `Islands` បើក (ការកំណត់ចាប់ផ្ដើម) តំបន់បិទនីមួយៗនៅខាងក្នុងវាក៏ទទួលប៉ូលីឡាញរបស់វាផងដែរ។ បន្តចុចចំណុច; Enter បញ្ចប់។ វត្ថុដែលព្យួរតំបន់នៅដដែល។ វានិយាយដូច្នេះនៅពេលគ្មានតំបន់បិទណាមួយមានចំណុចនោះ។

### BLEND

{{cmd:BLEND}} គូរខ្សែ spline រវាងចុងនៃខ្សែកោងបើកពីរ។ ចុចខ្សែកោងនីមួយៗនៅជិតចុងដែលត្រូវភ្ជាប់។ `CONtinuity` ជ្រើស `Tangent` (spline ចាកចេញ និងមកដល់តាមខ្សែកោងទាំងពីរ) ឬ `Smooth` (វាក៏កោងតាមរបៀបដែលពួកវាកោងនៅចុងផងដែរ); ជម្រើសនេះត្រូវបានរក្សាសម្រាប់ session។ ខ្សែកោងទាំងពីរមិនផ្លាស់ប្ដូរទេ។ វាបដិសេធវត្ថុបិទ និងចុងពីរដែលជួបគ្នារួចហើយ។

### REGION

ឈ្មោះខ្លី៖ `REG`។ {{cmd:REGION}} បំប្លែងវត្ថុបិទទៅជាតំបន់៖ តំបន់រាបស្មើដែលអ្នកអាចភ្ជាប់ កាត់ និងវាស់បាន។ ជ្រើសរង្វង់ ប៉ូលីឡាញបិទ អេលីប្សបិទ ឬ spline បិទ ឬបន្ទាត់ ធ្នូ និងប៉ូលីឡាញបើកដែលបិទរង្វិលចុងដល់ចុង; រង្វិលនីមួយៗក្លាយជាតំបន់មួយ ហើយជំនួសវត្ថុដែលវាមកពី។ ធ្នូនៅតែជាធ្នូ; អេលីប្ស និង spline ក្លាយជាផ្នែកត្រង់ខ្លី។ អ្វីដែលមិនបិទ ហើយមិនបិទរង្វិលណាមួយ ត្រូវបានទុកនៅដដែល ហើយវានិយាយប៉ុន្មាន។ នៅក្នុងគំនូរប្លង់ តំបន់គឺជាប៉ូលីឡាញបិទមួយ ឬច្រើនដែលភ្ជាប់ជាក្រុមគ្មានឈ្មោះ ដូច្នេះការចុចមួយជ្រើសតំបន់ទាំងមូល ហើយច្បាប់ចម្លងគឺជាតំបន់ថ្មីរបស់វា; កម្មវិធីផ្សេងដែលបើកឯកសារឃើញប៉ូលីឡាញបិទ។

នៅពេលមានតំបន់ក្នុងគំនូរប្លង់ {{cmd:UNION}}, {{cmd:SUBTRACT}} និង {{cmd:INTERSECT}} នៅផ្ទាំង 2D ធ្វើការលើតំបន់៖ `UNION` បញ្ចូលតំបន់ដែលបានជ្រើសទៅជាមួយ (តំបន់ដែលនៅដាច់ដោយឡែកក្លាយជាតំបន់មួយដែលមានរូបរាងច្រើន) `SUBTRACT` សួរតំបន់ដែលត្រូវដកចេញពី បន្ទាប់មកតំបន់ដែលត្រូវយកចេញ (រន្ធនៅតែជាផ្នែកនៃតំបន់) `INTERSECT` រក្សាតំបន់ដែលពួកវាទាំងអស់ចែករំលែក។ ពួកវានីមួយៗនិយាយផ្ទៃក្រឡានៃលទ្ធផល ហើយជាជំហានមិនធ្វើវិញមួយ។ ពួកវាបដិសេធនៅពេលមិនមានអ្វីនៅសល់ ឬគ្មានអ្វីចែករំលែក។ នៅផ្ទាំង 3D និងក្នុងគំនូរប្លង់ដែលគ្មានតំបន់ ពាក្យបញ្ជាដូចគ្នាធ្វើការលើវត្ថុរឹងដូចពីមុន។

## កែប្រែ

ឈ្មោះខ្លី៖ `MT`, `T`; ឬ {{ui:Paragraph}} នៅរបារឧបករណ៍។ អត្ថបទកថាខណ្ឌដែលរុំទៅទទឹងមួយ វាយនៅកន្លែង។

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`៖ ទទឹងឆ្លងកាត់ជ្រុងទាំងពីរគឺជាកន្លែងដែលអត្ថបទរុំ។ `H` សួរ `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` ហើយរំលងជ្រុងទីពីរ។
- បន្ទាប់មកប្រអប់មួយបើកនៅលើគំនូរប្លង់៖ វាយ, {{key:Enter}} សម្រាប់កថាខណ្ឌថ្មី, {{key:Mod+Enter}} ឬចុចខាងក្រៅដើម្បីបញ្ចប់, {{key:Esc}} ដើម្បីបោះបង់។ របាររបស់វាកំណត់កម្ពស់ ចន្លោះបន្ទាត់ ទទឹង និងការតម្រឹម។ សូមមើល [បន្ថែមអត្ថបទ និងស្លាក](topic:text#write-a-note-that-wraps)។

### TEXTEDIT

ឈ្មោះខ្លី៖ `ED`, `DDEDIT`; ឬចុចពីរដងលើអត្ថបទ។ `Select a text to edit` ដដែលៗរហូតដល់ {{key:Enter}}៖ នីមួយៗបើកក្នុងប្រអប់ដូចគ្នា។ ចាប់ផ្ដើមនៅលើអត្ថបទដែលបានជ្រើស ឬចុចពីរដង វាកែអត្ថបទនោះ ហើយបញ្ចប់។
### ERASE

ឈ្មោះខ្លី៖ `E`, `DELETE`; ឬចុច {{key:Delete}} នៅពេលវត្ថុត្រូវបានជ្រើស។

- `Select objects` (ត្រូវបានរំលងនៅពេលវត្ថុត្រូវបានជ្រើសរួចហើយ)

### MOVE

ឈ្មោះខ្លី៖ `M`។

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`៖ `Specify displacement` ដែលវាយជា `dx,dy`។

### COPY

ឈ្មោះខ្លី៖ `CO`, `CP`។ ចម្លងចំនួនដងដូចដែលអ្នកផ្ដល់ចំណុច។

`Array` នៅចំណុចទីពីរធ្វើជួរមួយក្នុងមួយដង៖ ផ្ដល់ចំនួនធាតុ (ដើមរាប់ជាមួយ) បន្ទាប់មកចំណុចដែលច្បាប់ចម្លងទីមួយទៅ; ផ្សេងទៀតដើរតាមចន្លោះដូចគ្នា។ `Fit` ធ្វើឱ្យចំណុចនោះជាកន្លែងនៃច្បាប់ចម្លងចុងក្រោយជំនួសវិញ ជាមួយផ្សេងទៀតបានចែកស្មើគ្នាចន្លោះ។

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]` ដដែលៗរហូតដល់ Enter។ `U` យកច្បាប់ចម្លងចុងក្រោយមកវិញ។

### ROTATE

ឈ្មោះខ្លី៖ `RO`។

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`៖ ដឺក្រេ វិជ្ជមានច្រាសទ្រនិចនាឡិកា; ឬចុចចំណុចមួយដើម្បីបង្វិលទៅវា។

### SCALE

ឈ្មោះខ្លី៖ `SC`។

- `Select objects`, `Specify base point`
- `Specify scale factor`៖ វាយកត្តាដូចជា `0.5` ឬ `2`។ ចំណុចដែលបានចុចផ្ដល់ចម្ងាយពីចំណុចមូលដ្ឋានជាកត្តា។

### MIRROR

ឈ្មោះខ្លី៖ `MI`។

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

ឈ្មោះខ្លី៖ `AL`; ឬ {{ui:Modify}} › {{ui:More}} › {{ui:Align}}។

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- ជាមួយគូពីរ៖ `Scale objects based on alignment points? [Yes/No] <N>`

សូមមើល [តម្រឹមវត្ថុ](topic:modify-objects#align-objects)។

### ALIGNTO

- `Select objects` (ឬការជ្រើស), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` សួរចំណុច។ ការជ្រើសនៅដដែល។

### DISTRIBUTE

- `Select objects` (យ៉ាងតិចបី), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`។ ពីរខាងក្រៅនៅដដែល; ការជ្រើសនៅដដែល។

### ALIGNPANEL

ឈ្មោះខ្លី៖ `ALP`; ឬ {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}។ បើកផ្ទាំងដែលដំណើរការ ALIGNTO និង DISTRIBUTE ដោយការចុច។

### LASER

ឈ្មោះខ្លី៖ `LASERCUT`; ឬ {{ui:View}} › {{ui:More}} › {{ui:Laser…}}។ បើកផ្ទាំង Laser នៅលើគំនូរប្លង់៖ ស្រទាប់នីមួយៗធ្វើអ្វី (កាត់ ស្លាក ឆ្លាក់ បំពេញ រូបភាព) ការមើលជាមុន G-code GRBL ដើម្បីរក្សាទុក ហើយការតាំងស៊ុម និងការផ្ញើតាម Web Serial។ សូមមើល [ផ្ញើគំនូរប្លង់ទៅម៉ាស៊ីនកាត់ឡាស៊ែរ](topic:laser-cutting)។

### STRETCH

ឈ្មោះខ្លី៖ `S`; ឬ {{ui:Stretch}}។ `Select objects to stretch`៖ អូសបង្អួចឆ្លងកាត់ (ឬវាយ `C`) នៅលើចុងដើម្បីផ្លាស់ទី។ `Specify base point [Displacement]`, `Specify second point`។ ចំណុចនៅខាងក្នុងបង្អួចផ្លាស់ទី៖ ចុងបន្ទាត់ ចំណុចប៉ូលីឡាញ (ផ្នែកធ្នូរក្សាកម្ពស់របស់ពួកវា) ចំណុចវិមាត្រ; រង្វង់ អេលីប្ស អត្ថបទ ចំណុច និងប្លុកផ្លាស់ទីទាំងមូលនៅពេលចំកណ្ដាល ឬចំណុចបញ្ចូលរបស់ពួកវានៅខាងក្នុង។ ការជ្រើសមុនពាក្យបញ្ជារក្សាបង្អួចឆ្លងកាត់ (និងខ្សែអួស) ដែលបានធ្វើវា ដូច្នេះពួកវាលាតតាមរបៀបដូចគ្នា។ បើគ្មានបង្អួច វត្ថុផ្លាស់ទីទាំងមូល។

### ARRAY, ARRAYRECT, ARRAYPOLAR

ឈ្មោះខ្លី៖ `AR`; ឬ {{ui:Array}}។ `Select objects` ហើយបន្ទាប់មក `Enter array type [Rectangular/POlar] <Rectangular>` (ARRAY ប៉ុណ្ណោះ)។

- Rectangular ចាប់ផ្ដើមនៅ 4 ជួរឈរ × 3 ជួរដេក ចន្លោះ 1.5 ដងនៃទំហំវត្ថុ ដែលបង្ហាញជាការមើលជាមុន។ `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` សួរជួរឈរ និងជួរដេក, `S` ចម្ងាយរវាងជួរឈរ និងជួរដេក (អវិជ្ជមានទៅឆ្វេង ឬចុះក្រោម), `COL` និង `R` នីមួយៗសម្រាប់ទិសដៅមួយ។
- Polar សួរ `Specify center point of array`, ចាប់ផ្ដើមនៅ 6 ធាតុជុំវិញទាំងមូល បង្វិល។ `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` ធាតុ, `F` មុំដែលត្រូវបំពេញ (+ ច្រាសទ្រនិចនាឡិកា − ទ្រនិចនាឡិកា), `ROT` Yes ឬ No។
- {{key:Enter}} (eXit) ធ្វើច្បាប់ចម្លង ជាវត្ថុធម្មតា។ ជំហានមិនធ្វើវិញមួយ។
- `AS` (ASsociative) ប្ដូររវាងច្បាប់ចម្លងធម្មតា និងអារ៉ាយដែលនៅកែបាន៖ វត្ថុមួយដែលអ្នកផ្លាស់ប្ដូរក្រោយមកជាមួយ {{cmd:ARRAYEDIT}}, ដោយ grips ឬនៅ Properties។ ការជ្រើសត្រូវបានចងចាំ ({{cmd:ARRAYASSOCIATIVITY}}); វាចាប់ផ្ដើមនៅច្បាប់ចម្លងធម្មតា។

### ARRAYPATH

ច្បាប់ចម្លងតាមខ្សែកោង។ `Select objects`, បន្ទាប់មក `Select path curve`៖ បន្ទាត់ ធ្នូ រង្វង់ អេលីប្ស ប៉ូលីឡាញ ឬ spline (មិនមែនវត្ថុមួយដែលកំពុងត្រូវបានធ្វើអារ៉ាយ)។ ផ្លូវចាប់ផ្ដើមនៅចុងរបស់វាដែលនៅជិតវត្ថុ ហើយធាតុទីមួយគឺវត្ថុនៅកន្លែងដែលវាស្ថិតនៅ។

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>` ជាមួយការមើលជាមុន។ `M`៖ `Divide` ចែកធាតុស្មើគ្នាលើផ្លូវទាំងមូល, `Measure` ដាក់មួយនៅគ្រប់ចម្ងាយជាច្រើនតាមវា។ `I`៖ ចំនួនធាតុ (ជាមួយ Measure 0 មានន័យថាច្រើនតាមដែលអាចសម); ចំនួនធំលើសចុងផ្លូវត្រូវបានកាន់ទៅអ្វីដែលសម។ `SP`៖ ចម្ងាយរវាងធាតុតាមផ្លូវ (ប្ដូរទៅ Measure)។ `AL`៖ Yes បង្វិលធាតុនីមួយៗឱ្យដើរតាមផ្លូវ, No រក្សាពួកវាឈរ។
- `AS` ដូចក្នុង {{cmd:ARRAY}}។ ជាមួយវាបើក អារ៉ាយរក្សាច្បាប់ចម្លងរបស់ខ្លួននៃរាងផ្លូវ៖ កែខ្សែកោងផ្លូវក្រោយមកមិនផ្លាស់ទីធាតុទេ។
- វាបដិសេធផ្លូវដែលមិនមែនជាខ្សែកោង និងធាតុមួយ។

### ARRAYEDIT

ផ្លាស់ប្ដូរអារ៉ាយដែលធ្វើជាមួយ ASsociative។ `Select array` (ឬជ្រើសវាជាមុនសិន)។ វាបង្ហាញអ្វីដែលអារ៉ាយជាឥឡូវ បន្ទាប់មកសួររហូតដល់ {{key:Enter}}៖

- Rectangular៖ `COL` ជួរឈរ និងចន្លោះរបស់វា, `R` ជួរដេក និងចន្លោះរបស់វា, `A` មុំដែលជួរឈរដំណើរការ។
- Polar៖ `I` ធាតុ, `F` មុំបំពេញ, `ROT` បង្វិលធាតុ Yes ឬ No។
- Path៖ `M` Divide ឬ Measure, `I` ធាតុ, `SP` ចន្លោះ, `AL` តម្រឹមជាមួយផ្លូវ។
- `S` (Source) បើកវត្ថុដែលអារ៉ាយធ្វើម្ដងទៀត ដោយខ្លួនឯង ដូចកម្មវិធីកែសម្រួលប្លុក។ គូរ និងកែនៅទីនោះ; {{cmd:ARRAYCLOSE}} រក្សាទុក ឬបោះបង់ ហើយធាតុនីមួយៗដើរតាម។
- `REP` (REPlace)៖ `Select replacement objects`, `Specify base point of the replacement objects`, បន្ទាប់មកចុចធាតុដើម្បីជំនួស, {{key:Enter}}។ ធាតុទាំងនោះបង្ហាញការជំនួសវិញ; វត្ថុជំនួសចេញពីគំនូរប្លង់ ហើយរស់នៅក្នុងអារ៉ាយ។ `RES` (RESet) បង្ហាញវត្ថុប្រភពក្នុងធាតុនីមួយៗម្ដងទៀត។
- ការផ្លាស់ប្ដូរនីមួយៗគឺជាជំហានមិនធ្វើវិញមួយ។ វាបដិសេធច្បាប់ចម្លងធម្មតា យោងប្លុកធម្មតា និងអារ៉ាយនៅលើស្រទាប់ដែលចាក់សោ។

លេខដូចគ្នាមាននៅ Properties ក្រោម Array ហើយអារ៉ាយមាន grips៖ ចំណុចមូលដ្ឋានរបស់វាផ្លាស់ទីវា, grip នៅធាតុទីពីរកំណត់ចន្លោះ, grip លើសពីធាតុចុងក្រោយកំណត់ចំនួន (polar៖ ធាតុទីពីរកំណត់ថាតើមានធាតុប៉ុន្មាន ធាតុចុងក្រោយកំណត់មុំបំពេញ)។ {{cmd:EXPLODE}} បំប្លែងអារ៉ាយទៅជាច្បាប់ចម្លងធម្មតាវិញ។

### ARRAYCLOSE

បញ្ចប់ {{cmd:ARRAYEDIT}} Source៖ `Save the changes to the array's source objects? [Save/Discard] <Save>`។ វានិយាយដូច្នេះនៅពេលគ្មានវត្ថុប្រភពអារ៉ាយណាបើក។ {{cmd:BCLOSE}} ធ្វើដូចគ្នា។

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`។ កំណត់អ្វីដែល {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR និង {{cmd:ARRAYPATH}} ចាប់ផ្ដើមនៅ; ជម្រើស `AS` របស់ពួកវាផ្លាស់ប្ដូរការកំណត់ដូចគ្នា។ ចងចាំនៅកម្មវិធីរុករកនេះ។

### OFFSET

ឈ្មោះខ្លី៖ `O`។ បន្ទាត់ ធ្នូ រង្វង់ និងប៉ូលីឡាញ។

នៅពេលប៉ូលីឡាញផ្លាស់ទីទៅក្រៅ ហើយផ្នែកត្រង់របស់វាបែកចេញនៅជ្រុង {{cmd:OFFSETGAPTYPE}} កំណត់ថាតើចន្លោះត្រូវបានបិទយ៉ាងដូចម្ដេច។

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, បន្ទាប់មក `Specify point on side to offset` (ឬ ជាមួយ Through, `Specify through point`), ដដែលៗរហូតដល់ Enter។

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`៖ របៀបដែល {{cmd:OFFSET}} បិទចន្លោះនៅជ្រុងខាងក្រៅនៃប៉ូលីឡាញ។ `0` បន្លាយផ្នែកដរាបណាពួកវាជួប (ការកំណត់ចាប់ផ្ដើម), `1` ភ្ជាប់ពួកវាជាមួយធ្នូជុំវិញជ្រុងចាស់, `2` ជាមួយការកាត់ត្រង់។ ធ្នូខាងក្នុង និងផ្នែកធ្នូមិនត្រូវបានប៉ះពាល់ឡើយ។ រក្សាសម្រាប់ session នេះ។

### EXTRIM

{{cmd:EXTRIM}} កាត់គ្រប់អ្វីនៅម្ខាងនៃគែមមួយ។ ជ្រើសគែមកាត់ (បន្ទាត់ ធ្នូ រង្វង់ ប៉ូលីឡាញ អេលីប្ស spline ឬបន្ទាត់ជំនួយ) បន្ទាប់មកចុចចំណុចមួយនៅលើចំហៀងដែលត្រូវសម្អាត៖ បន្ទាត់ ធ្នូ រង្វង់ ប៉ូលីឡាញ និងបន្ទាត់ជំនួយនីមួយៗដែលឆ្លងកាត់គែមបាត់ផ្នែករបស់វានៅចំហៀងនោះ ដែលវាចាប់ផ្ដើមនៅគែម។ ខណៈអ្នកជ្រើសចំហៀង ផ្នែកដែលនឹងត្រូវបាត់ដើរតាមសញ្ញាកណ្ដុរ។ សម្រាប់គែមបិទ ចំហៀងគឺខាងក្នុង និងខាងក្រៅ។ វត្ថុដែលគ្រាន់តែប៉ះគែម និងអត្ថបទ ការហាច់ spline និងអេលីប្សដែលឆ្លងកាត់វា នៅដដែល។ ជំហានមិនធ្វើវិញមួយ។

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`៖ របៀបដែល {{cmd:TRIM}} និង {{cmd:EXTEND}} ចាប់ផ្ដើម។ `1` Quick៖ វត្ថុគ្រប់ប្រភេទជាគែមកាត់ ឬព្រំដែន។ `0` Standard៖ ពួកវាសួរគែមជាមុនសិន។ ក៏ `(setvar "TRIMEXTENDMODE" 0)` ក្នុង LISP។

### TRIM

ឈ្មោះខ្លី៖ `TR`។ បង្ហាញ `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` ជាមុនសិន។ នៅ Quick mode វត្ថុដែលមើលឃើញគ្រប់ប្រភេទជាគែមកាត់ ហើយវត្ថុដែលគ្មានអ្វីកាត់ត្រូវបានលុប; នៅ Standard mode វាសួរ `Select cutting edges (Enter = every object)` ជាមុនសិន ហើយកាត់តែនៅគែមទាំងនោះ។

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]` ដដែលៗ៖ ចុចផ្នែកដែលត្រូវយកចេញ (វាបង្ហាញពណ៌ប្រផេះ និងដាច់ៗខណៈកណ្ដុរនៅលើវា), អូសផ្លូវឆ្លងកាត់ផ្នែកជាច្រើន (ទាំងអស់ចូលក្នុងជំហានមួយ), ឬចុចពីរកន្លែងទទេសម្រាប់ fence រវាងពួកវា។ {{key:Shift}} បន្លាយជំនួស។ `T` ជ្រើសគែមកាត់ (Standard mode), `F` សួរចំណុច fence, `C` ជ្រុងពីរនៃបង្អួច (ផ្នែកដែលនៅខាងក្នុងមួយផ្នែកនៅទីនោះ), `O` សួរ `Enter a trim mode option [Quick/Standard]`, `E` សួរ `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` លុបវត្ថុដែលអ្នកជ្រើស, `U` មិនធ្វើវិញការជ្រើស ឬអូសចុងក្រោយ។ Enter បញ្ចប់។ សូមមើល [កាត់ និងបន្លាយ](topic:trim-and-extend)។

- ការចុចលើហាច់កាត់ហាច់៖ គែមកាត់បំបែកតំបន់ដែលមានហាច់ ហើយផ្នែកដែលអ្នកចុចត្រូវបានយកចេញ (គ្មានបន្ទាត់ព្រំដែនដែលបានគូរនៅទីដែលវាធ្លាប់នៅទេ)។ ហាច់រក្សាលំនាំ ឬជម្រាលរបស់វា; ហាច់ដែលត្រូវបានភ្ជាប់ទៅព្រំដែនរបស់វា មិនត្រូវបានភ្ជាប់បន្ទាប់ពីនោះទៀតទេ ព្រោះវាលែងបំពេញវា។ វានិយាយដូច្នេះនៅពេលគ្មានគែមកាត់ណាបំបែកហាច់នៅទីនោះ នៅពេលចុចនៅក្រៅហាច់ និងនៅពេលគ្មានអ្វីនៅសល់ (ប្រើ {{cmd:ERASE}})។ ផ្លូវ ឬ fence ដែលបានអូសមិនកាត់ហាច់ទេ។

### EXTEND

ឈ្មោះខ្លី៖ `EX`។ ដូចគ្នានឹង TRIM ដោយបញ្ច្រាស៖ `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`។ ចុចមួយបន្លាយចុងដែលនៅជិតវាទៅព្រំដែនបន្ទាប់; ផ្លូវ ឬ fence ដែលបានអូសបន្លាយវត្ថុគ្រប់ទាំងអស់ដែលវាឆ្លងកាត់; {{key:Shift}} កាត់។ `B` ជ្រើសគែមព្រំដែន (Standard mode)។ Mode និង Edge ត្រូវបានចែករំលែកជាមួយ TRIM។

### LINKVIEWS

ឈ្មោះខ្លី៖ `SYNCVIEWS`; ឬ {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, ឬរូបតំណាងភ្ជាប់នៅលើផ្ទាំងគំនូរប្លង់។ `Link the panes' views [ON/OFF]` (Enter យកស្ថានភាពផ្សេង)៖ ខណៈពេលបើក ការផ្លាស់ទី ឬ zoom ក្នុងផ្ទាំងសកម្ម ផ្លាស់ទីគ្រប់ផ្ទាំងដែលបង្ហាញប្រភេទលំហដូចគ្នា។ សូមមើល [បំបែកអេក្រង់](topic:split-screen)។

### OPENIN3D

គ្មានឈ្មោះខ្លី; ឬ {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} ដែលកម្មវិធីធ្វើគំរូ 3D យកគំនូរប្លង់ដែលបានប្រគល់។ បើកវានៅទីនោះក្នុងផ្ទាំងថ្មី ជា DWG (គ្មានអ្វីត្រូវបានផ្ទុកឡើង)។ បើកម្មវិធីរុករកទប់ផ្ទាំង វានិយាយដូច្នេះ។

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`៖ អ្វីដែលការចុច និងអូសលើកន្លែងទទេគូរ។ ដូចគ្នានឹង Settings › CadCraft › Dragging to select។ សូមមើល [ការជ្រើសខ្សែអួស](topic:lasso-selection)។

### FILLET

ឈ្មោះខ្លី៖ `F`។ បន្ទាត់ ធ្នូ រង្វង់ និងប៉ូលីឡាញ។ បង្ហាញ `Current settings: Mode = TRIM, Radius = 0` ជាមុនសិន។

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` សួរ `Specify fillet radius <last>`។ `T` សួរ `Enter Trim mode option [Trim/No trim]`៖ ជាមួយ No trim វត្ថុនៅដដែល ហើយធ្នូត្រូវបានបន្ថែមប៉ុណ្ណោះ។
  - `M` រក្សាពាក្យបញ្ជាឱ្យដំណើរការសម្រាប់ជ្រុងច្រើនរហូតដល់ {{key:Enter}}; `U` យកជ្រុងចុងក្រោយមកវិញដោយមិនចាកចេញពីពាក្យបញ្ជា។
  - `P` សួរ `Select 2D polyline [Radius]` ហើយបង្គត់ជ្រុងនីមួយៗដែលផ្នែកត្រង់ពីរជួបគ្នា។ ធ្នូដែលមានរួចហើយត្រូវបានជំនួសដោយកាំថ្មី; កាំ 0 យកវាចេញ។ ជ្រុងដែលចំហៀងរបស់វាខ្លីពេកសម្រាប់កាំត្រូវបានទុក ហើយរាប់។
- `Select second object or shift-select to apply corner [Radius]`។ សង្កត់ {{key:Shift}} ពេលចុចសម្រាប់ជ្រុងមុត មិនថាកាំប៉ុនណាទេ។

ចុចវត្ថុនីមួយៗនៅលើផ្នែកដែលអ្នកចង់រក្សា។ បន្ទាត់ពីរដែលមិនជួបត្រូវបានបន្លាយ។ បន្ទាត់ស្របពីរទទួលពាក់កណ្ដាលរង្វង់ឆ្លងកាត់ចន្លោះ នៅចុងនៃបន្ទាត់ទីមួយដែលនៅជិតការចុចរបស់អ្នក។ រង្វង់មិនដែលត្រូវបានកាត់ឡើយ។ ផ្នែកពីរនៃប៉ូលីឡាញតែមួយដែលនៅជាប់គ្នាទទួលធ្នូនៅខាងក្នុងប៉ូលីឡាញ; ប៉ូលីឡាញ និងវត្ថុផ្សេងដំណើរការនៅពេលការកាត់ធ្លាក់លើផ្នែកដំបូង ឬចុងក្រោយនៃប៉ូលីឡាញ។

### CHAMFER

ឈ្មោះខ្លី៖ `CHA`។ បន្ទាត់ និងផ្នែកត្រង់នៃប៉ូលីឡាញ។ បង្ហាញចម្ងាយបច្ចុប្បន្ន (ឬប្រវែង និងមុំ) ជាមុនសិន។

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` សួរ `Specify first chamfer distance <last>` និង `Specify second chamfer distance <the first>`៖ ទីមួយត្រូវបានកាត់ពីបន្ទាត់ទីមួយដែលអ្នកជ្រើស ទីពីរពីមួយទៀត។
  - `A` សួរ `Specify chamfer length on the first line` និង `Specify chamfer angle from the first line`។
  - `E` (mEthod) ជ្រើសថាតើក្នុងពីររបៀប ការ chamfer បន្ទាប់ប្រើមួយណា។ `T`, `M`, `U` និង `P` ដំណើរការដូចក្នុង {{cmd:FILLET}}។
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`។ {{key:Shift}}+ចុច ធ្វើជ្រុងមុត។

ចម្ងាយដែលវែងជាងបន្ទាត់ត្រូវបានបដិសេធ (`Distance is too large.`)។

### BREAK និង BREAKATPOINT

ឈ្មោះខ្លី៖ `BR`។ `Select object` (កន្លែងដែលអ្នកចុចគឺជាចំណុចទីមួយ), `Specify second break point [First point]`; `F` សួរ `Specify first break point` និង `Specify second break point`។ ផ្នែករវាងពួកវាត្រូវបានយកចេញ; លើរង្វង់ ច្រាសទ្រនិចនាឡិកាពីចំណុចទីមួយ។ BREAKATPOINT សួរ `Specify break point` ហើយបំបែកវត្ថុជាពីរនៅទីនោះ (មិនមែនរង្វង់ទេ)។

### LENGTHEN

ឈ្មោះខ្លី៖ `LEN`។ `Select an object to measure [DElta/Percent/Total/DYnamic]`៖ ការចុចបង្ហាញ `Current length` (និងមុំរួមនៃធ្នូ) ហើយសួរម្ដងទៀត។ `DE` សួរ `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` អូស។ បន្ទាប់មក `Select an object to change [Undo]` ដដែលៗ៖ ចុងដែលនៅជិតការចុចផ្លាស់ទី។ បន្ទាត់ ធ្នូ និងប៉ូលីឡាញបើក។

### JOIN

ឈ្មោះខ្លី៖ `J`។ `Select objects to join`។ បន្ទាត់ ធ្នូ និងប៉ូលីឡាញបើកដែលជួបចុងដល់ចុង ក្លាយជាប៉ូលីឡាញ (បិទនៅពេលខ្សែបិទ); បន្ទាត់នៅលើបន្ទាត់តែមួយក្លាយជាបន្ទាត់មួយ; ធ្នូនៃរង្វង់តែមួយក្លាយជាធ្នូមួយ ឬរង្វង់។ ប្រវត្តិនិយាយថាវត្ថុប៉ុន្មានបានភ្ជាប់ និងប៉ុន្មានមិនបាន។

### MATCHPROP

ឈ្មោះខ្លី៖ `MA`, `PAINTER`។ `Select source object`, បន្ទាប់មក `Select destination objects [Settings]` និង {{key:Enter}}។ ចម្លងស្រទាប់ និងពណ៌ ហើយរវាងវត្ថុប្រភេទដូចគ្នា កម្ពស់ និងទទឹងអត្ថបទ ទំហំវិមាត្រ ឬលំនាំហាច់។ `S` សួរ `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` ដដែលៗរហូតដល់ {{key:Enter}}; ជម្រើសត្រូវបានចងចាំសម្រាប់ session។

### EXPLODE

ឈ្មោះខ្លី៖ `X`។ ប៉ូលីឡាញក្លាយជាបន្ទាត់ និងធ្នូ យោងប្លុកក្លាយជាវត្ថុរបស់ពួកវា វិមាត្រក្លាយជាបន្ទាត់ ក្បាលព្រួញ និងអត្ថបទ។ អារ៉ាយដែលនៅកែបាន ({{cmd:ARRAYEDIT}}) ក្លាយជាច្បាប់ចម្លងធម្មតានៃវត្ថុរបស់វា។

- `Select objects`

### GROUP

ឈ្មោះខ្លី៖ `G`។ {{cmd:GROUP}} ផ្ដល់ឈ្មោះដែលវត្ថុដែលបានជ្រើសចែករំលែក។ ជ្រើសវត្ថុ បន្ទាប់មកវាយឈ្មោះ (គ្មានដកឃ្លា; `?` បញ្ជីក្រុម; Enter ធ្វើក្រុមគ្មានឈ្មោះ) និងសម្រាប់ក្រុមមានឈ្មោះ ការពិពណ៌នាតាមចិត្ត។ ចាប់ពីពេលនោះ ការចុចលើមួយនៃពួកវា ឬបង្អួចដែលយកមួយ ជ្រើសពួកវាទាំងអស់ ដូច្នេះពួកវាផ្លាស់ទី ចម្លង និងលុបជាមួយគ្នា; វត្ថុនីមួយៗនៅតែជាវត្ថុរបស់ខ្លួន។ វត្ថុអាចនៅក្នុងក្រុមជាច្រើន។ ច្បាប់ចម្លងនៃក្រុមទាំងមូលជាក្រុមគ្មានឈ្មោះថ្មី; ច្បាប់ចម្លងនៃសមាជិកមួយតែឯងចូលទៅក្នុងក្រុម។ ក្រុមជាកម្មសិទ្ធិរបស់លំហដែលពួកវាត្រូវបានធ្វើ (ម៉ូដែល ឬសន្លឹក)។ ពួកវាត្រូវបានរក្សានៅពេលអ្នករក្សាទុកជា DWG ឬ DXF ហើយបើកឯកសារម្ដងទៀតក្នុង CadCraft; ឯកសារ DXF 2000 ក៏ផ្ទុកពួកវាជាវត្ថុក្រុមសម្រាប់កម្មវិធីផ្សេងដែរ ហើយក្រុមដែលបានធ្វើនៅកម្មវិធីផ្សេងត្រូវបានអានពេលបើក DXF ឬ DWG។

### UNGROUP

{{cmd:UNGROUP}} យកក្រុមចេញ៖ ជ្រើសវត្ថុនៃក្រុម (ក្រុមនីមួយៗដែលពួកវានៅត្រូវបានយកចេញ) ឬវាយ `Name` និងឈ្មោះក្រុម។ វត្ថុនៅតែនៅក្នុងគំនូរប្លង់។ ជំហានមិនធ្វើវិញមួយនាំក្រុមត្រឡប់មកវិញ។

### GROUPEDIT

{{cmd:GROUPEDIT}} ផ្លាស់ប្ដូរក្រុមមួយ។ ចុចវត្ថុមួយនៃវា ឬ `Name` និងឈ្មោះរបស់វា; ក្រុមដែលបានជ្រើសរួចហើយត្រូវបានយកដូចដែលវាជា។ បន្ទាប់មក៖ `Add` វត្ថុ (ជ្រើសមួយម្ដងមួយ មិនមែនក្រុមម្ដងមួយ), `Remove` វត្ថុ, `REName` ក្រុម, ផ្លាស់ប្ដូរ `Description` របស់វា ឬកំណត់ `Selectable` (ថាតើការចុចលើវត្ថុមួយជ្រើសក្រុមទាំងមូល)។ `eXit` ឬ Enter បញ្ចប់។ ក្រុមដែលគ្មានវត្ថុនៅសល់ត្រូវបានបាត់។

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`៖ ជាមួយ `1` (ការកំណត់ចាប់ផ្ដើម) ការចុច ឬបង្អួចលើវត្ថុក្នុងក្រុមជ្រើសក្រុមទាំងមូល; ជាមួយ `0` វត្ថុតែមួយ ដូច្នេះអ្នកអាចកែសមាជិកមួយ។ រក្សាសម្រាប់ session នេះ។

## ក្លីបបត

ក្លីបបតរបស់ CadCraft ផ្ទាល់៖ វាដំណើរការក្នុងគំនូរប្លង់ រវាងគំនូរប្លង់ និងរវាងផ្ទាំង CadCraft ក្នុងកម្មវិធីរុករកនេះ។ សូមមើល [ចម្លង បិទភ្ជាប់ និងថតចម្លង](topic:copy-paste)។

### COPYCLIP

{{key:Mod+C}}, ឬ {{ui:Copy}} នៅក្រុម {{ui:Edit}}។ ចម្លងវត្ថុទៅក្លីបបត ជាមួយប្លុក និងស្រទាប់ដែលវាប្រើ។ វត្ថុនៅតែត្រូវបានជ្រើស។

- `Select objects to copy` (ត្រូវបានរំលងនៅពេលវត្ថុត្រូវបានជ្រើសរួចហើយ)

### CUTCLIP

{{key:Mod+X}}, ឬ {{ui:Cut}} នៅម៉ឺនុយ {{ui:More}}។ ចម្លងវត្ថុទៅក្លីបបត បន្ទាប់មកលុបវា (ជំហានមិនធ្វើវិញមួយ)។

- `Select objects to cut` (ត្រូវបានរំលងនៅពេលវត្ថុត្រូវបានជ្រើសរួចហើយ)

### COPYBASE

ចម្លងវត្ថុទៅក្លីបបតជាមួយចំណុចមូលដ្ឋានដែលអ្នកជ្រើស; ការបិទភ្ជាប់ដាក់ចំណុចនោះ។

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, ឬ {{ui:Paste}} នៅក្រុម {{ui:Edit}}។ ច្បាប់ចម្លងតាមសញ្ញាកណ្ដុរ ព្យួរពីជ្រុងក្រោមខាងឆ្វេងនៃព្រំដែនរបស់វា (ឬកណ្ដាលរបស់វា ឬចំណុច `COPYBASE`; សូមមើល [ការកំណត់ CadCraft](topic:settings))។

- `Specify insertion point`

វត្ថុដែលបានបិទភ្ជាប់ត្រូវបានជ្រើស។ ប្លុកដែលគំនូរប្លង់មានរួចហើយក្រោមឈ្មោះដូចគ្នា រក្សានិយមន័យរបស់គំនូរប្លង់នេះ។

នៅពេលតំបន់ដែលបានចម្លងក្នុង MarkupCraft ថ្មីជាងអ្វីដែល CadCraft បានចម្លង (ហើយតិចជាង 6 ម៉ោង) {{key:Mod+V}} និង `PASTECLIP` បិទភ្ជាប់តំបន់នោះវិញ៖ សូមមើល `PASTEAREA`។

### PASTEAREA

ឈ្មោះខ្លី៖ `PAREA`។ {{ui:Paste a copied area}} នៅម៉ឺនុយ {{ui:More}}។ បិទភ្ជាប់តំបន់ដែលបានចម្លងជាមួយ {{ui:Copy area}} ក្នុង MarkupCraft ជារូបភាពនៅទំហំពិតរបស់វា។ សូមមើល [រូបភាពក្នុងគំនូរប្លង់](topic:pictures)។

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (តែនៅពេលសន្លឹកមិនមានមាត្រដ្ឋានគំនូរប្លង់): លេខ, {{key:Enter}} សម្រាប់ទំហំក្រដាស, ឬ `P`, បន្ទាប់មក `First point on the pasted area`, `Second point on the pasted area` និងចម្ងាយពិតរបស់ពួកវា។

### PASTEORIG

{{key:Mod+Shift+V}}, ឬ {{ui:Paste in place}} នៅម៉ឺនុយ {{ui:More}}។ បិទភ្ជាប់នៅកូអរដោនេដែលវត្ថុត្រូវបានចម្លងពី។ មិនសួរអ្វីឡើយ។

### DUPLICATE

ឈ្មោះខ្លី៖ `DUP`។ {{key:Mod+D}}, ឬ {{ui:Duplicate and move}} នៅម៉ឺនុយ {{ui:More}}។ ច្បាប់ចម្លងនៃវត្ថុផ្លាស់ទីជាមួយសញ្ញាកណ្ដុរពីកន្លែងដែលវាស្ថិតនៅ; {{key:Esc}} មិនទុកអ្វីឡើយ។ មិនប្រើក្លីបបតទេ។

- `Select objects to duplicate` (ត្រូវបានរំលងនៅពេលវត្ថុត្រូវបានជ្រើសរួចហើយ)
- `Specify where the copy goes (Esc leaves nothing)`៖ ចុច, វាយចំណុច, `@dx,dy` (ពីកន្លែងដែលសញ្ញាកណ្ដុរនៅ), ឬចម្ងាយឆ្ពោះទៅកូសមីស។

### SELECT

សួរ `Select objects` (ជាមួយជម្រើសទាំងអស់ខាងក្រោម) ហើយទុកអ្វីដែលអ្នកជ្រើសនៅតែជ្រើសសម្រាប់ពាក្យបញ្ជាបន្ទាប់ ឬសម្រាប់ `P` នៅពេលក្រោយ។

### QSELECT

ឈ្មោះខ្លី៖ `QS`។ នៅក្នុងកម្មវិធីរុករក ប្រអប់ {{ui:Quick select}} (សូមមើល [ជ្រើសវត្ថុ](topic:select-objects#select-by-a-rule-quick-select))។ ដោយគ្មានវា បន្ទាត់បញ្ជាសួរ `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` និង `Enter value`។ ការផ្គូផ្គងក្លាយជាការជ្រើសរើស។

### SELECTSIMILAR

ឈ្មោះខ្លី៖ `SIM`។ `Select objects [SEttings]` (ឬការជ្រើសបច្ចុប្បន្ន)៖ ជ្រើសវត្ថុគ្រប់ប្រភេទដូចគ្នាដែលមានស្រទាប់ និងពណ៌ដូចគ្នា (និងឈ្មោះប្លុក លំនាំហាច់)។ `SE` សួរ `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` ដដែលៗរហូតដល់ {{key:Enter}}។

### FIND

គ្មានឈ្មោះខ្លី; ឬ {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}។ នៅក្នុងកម្មវិធីរុករក ប្រអប់ {{ui:Find and replace}} (សូមមើល [បន្ថែមអត្ថបទ និងស្លាក](topic:text#find-and-replace-words))។ ដោយគ្មានវា៖ `Enter text to find`, បន្ទាប់មក `Enter replacement text (Enter: select what is found)`។ មើលក្នុងអត្ថបទ តម្លៃគុណលក្ខណៈ និងអត្ថបទវិមាត្រ នៅផ្ទាំងដែលបើក ឬក្នុងការជ្រើសរើស។

### SELECTALL និង DESELECT

`SELECTALL` (ឈ្មោះខ្លី `AI_SELALL`, {{key:Mod+A}}) ជ្រើសវត្ថុទាំងអស់ដែលអ្នកអាចកែនៅលើផ្ទាំងបើក។ `DESELECT` (ឈ្មោះខ្លី `AI_DESELECT`, `SELECTNONE`; ឬ {{key:Esc}}) សម្អាតការជ្រើសរើស។

## វិមាត្រ

### DIMLINEAR

ឈ្មោះខ្លី៖ `DLI`, `DIMLIN`។ ចម្ងាយផ្ដេក ឬបញ្ឈរ។

- `Specify first extension line origin [Select object]` (Enter ឬ `S`៖ `Select object to dimension`, បន្ទាប់មកចុចផ្នែកបន្ទាត់ ធ្នូ រង្វង់ ឬប៉ូលីឡាញ)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`។ `T` សួរអត្ថបទ (`<>` គឺជាតម្លៃដែលវាស់), `H` និង `V` កំណត់ទិសដៅ, `R` សួរ `Specify angle of dimension line <0>`។

### DIMALIGNED

ឈ្មោះខ្លី៖ `DAL`, `DIMALI`។ ចម្ងាយពិតរវាងចំណុចពីរ។

- ប្រភពដូចក្នុង {{cmd:DIMLINEAR}} បន្ទាប់មក `Specify dimension line location [Text]`។

### DIMANGULAR

ឈ្មោះខ្លី៖ `DAN`, `DIMANG`។

- `Select arc, circle or line, or Enter for a vertex`
- ធ្នូ៖ មុំរបស់វា។ រង្វង់៖ `Specify second angle endpoint`។ បន្ទាត់៖ `Select second line`។ Enter៖ `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`។
- `Specify dimension line location [Text]`៖ ចុចខាងក្នុងមុំដើម្បីវាស់។

### DIMRADIUS និង DIMDIAMETER

ឈ្មោះខ្លី៖ `DRA`, `DIMRAD`; `DDI`, `DIMDIA`។

- `Select arc or circle`, បន្ទាប់មក `Specify dimension line location [Text]`។

### DIMCONTINUE

ឈ្មោះខ្លី៖ `DCO`, `DIMCONT`។ បន្តពីវិមាត្រលីនេអ៊ែរ ឬតម្រឹមចុងក្រោយដែលបានធ្វើ (ឬសួរ `Select linear or aligned dimension`)។

- `Specify second extension line origin [Undo]` ដដែលៗរហូតដល់ Enter។

### DIMBASELINE

ឈ្មោះខ្លី៖ `DBA`, `DIMBASE`។ ដូច {{cmd:DIMCONTINUE}} ប៉ុន្តែវិមាត្រនីមួយៗចាប់ផ្ដើមពីប្រភពទីមួយ ហើយត្រូវបានដាក់ឱ្យឆ្ងាយជាងមុន។

### DIMORDINATE

ឈ្មោះខ្លី៖ `DOR`, `DIMORD`។ `Specify feature location`, បន្ទាប់មក `Specify leader endpoint [Xdatum/Ydatum/Text]`។ សរសេរចម្ងាយដែលលក្ខណៈពិសេសនៅពីប្រភពរបស់ UCS តាម X ឬ Y នៅលើខ្សែចង្អុល៖ ខ្សែចង្អុលដែលដំណើរការភាគច្រើនឡើង ឬចុះ អានជា X ហើយមួយដែលដំណើរការចំហៀង អានជា Y; `Xdatum` និង `Ydatum` កំណត់ថាមួយណា។ កំណត់ប្រភពជាមុនសិនជាមួយ {{cmd:UCS}} (ដោយគ្មានវា វាជា 0,0 របស់គំនូរប្លង់)។ Grips ផ្លាស់ទីលក្ខណៈពិសេស ប្រភព និងចុងខ្សែចង្អុល ហើយតម្លៃដើរតាម។ រក្សាទុកជាវិមាត្រលំដាប់ពិតក្នុង DWG និង DXF។ បដិសេធចុងខ្សែចង្អុលនៅលើលក្ខណៈពិសេសខ្លួនវា។

### DIMARC

ឈ្មោះខ្លី៖ `DAR`។ `Select arc or polyline arc segment`, បន្ទាប់មក `Specify arc length dimension location [Text]`។ វាស់តាមធ្នូ (មិនមែនជាខ្សែ) ហើយសរសេរនិមិត្តសញ្ញាធ្នូមុនតម្លៃ។ បដិសេធរង្វង់ពេញ បន្ទាត់ ឬផ្នែកប៉ូលីឡាញត្រង់។ DWG រក្សាវាជាវិមាត្រប្រវែងធ្នូ; DXF រក្សាវាជាវិមាត្រមុំជាមួយប្រវែងជាអត្ថបទរបស់វា ហើយ CadCraft បើកវាម្ដងទៀតជាវិមាត្រប្រវែងធ្នូ។

### DIMJOGGED

ឈ្មោះខ្លី៖ `DJO`, `JOG`។ `Select arc or circle`, `Specify center location override`, `Specify jog location`។ វិមាត្រកាំសម្រាប់ខ្សែកោងដែលចំកណ្ដាលនៅឆ្ងាយ ឬក្រៅសន្លឹក៖ បន្ទាត់វិមាត្រចាប់ផ្ដើមនៅចំណុចដែលអ្នកផ្ដល់ជំនួសកណ្ដាល ជាមួយការបត់នៅក្នុងវា ហើយនៅតែសរសេរកាំពិត។ DWG រក្សាវាជាវិមាត្រកាំបត់; DXF រក្សាវាជាវិមាត្រកាំ ហើយ CadCraft បើកវាម្ដងទៀតដែលបត់។

### DIMJOGLINE

ឈ្មោះខ្លី៖ `DJL`។ `Select dimension to add jog [Remove]`, បន្ទាប់មក `Specify jog location (or press Enter)`។ ដាក់និមិត្តសញ្ញាបត់លើបន្ទាត់នៃវិមាត្រលីនេអ៊ែរ ឬតម្រឹម ដើម្បីបង្ហាញថាចម្ងាយមិនត្រូវបានគូរតាមមាត្រដ្ឋាន; តម្លៃមិនផ្លាស់ប្ដូរ។ `Remove` យកវាចេញ។ បដិសេធប្រភេទវិមាត្រផ្សេង។

### QDIM

គ្មានឈ្មោះខ្លី។ `Select geometry to dimension`, បន្ទាប់មក `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`។ វិមាត្រវត្ថុច្រើនក្នុងជំហានមួយ ពីចុងបន្ទាត់ និងផ្នែកប៉ូលីឡាញ ចំកណ្ដាលរង្វង់ និងធ្នូ ចំណុច និងយោងប្លុក។ ទីតាំងពីលើ ឬក្រោមវត្ថុវាស់ឆ្លងកាត់ ទីតាំងនៅចំហៀងវាស់ឡើង។ `Continuous` ភ្ជាប់ចំណុច `Baseline` វាស់ទាំងអស់ពីទីមួយ `Staggered` ដាក់គូពីកណ្ដាលចេញមក `Ordinate` ផ្ដល់ចម្ងាយនីមួយៗនៃចំណុចពីដាតាំ (`datumPoint` ជ្រើសថ្មី) `Radius` និង `Diameter` វិមាត្រគ្រប់រង្វង់ និងធ្នូដែលបានជ្រើស។ របៀបត្រូវបានចងចាំ។ អ្វីៗទាំងអស់ដែលវាធ្វើគឺជាជំហានមិនធ្វើវិញមួយ។ វានិយាយដូច្នេះនៅពេលមានចំណុចតិចជាងពីរ ឬគ្មានធ្នូ ឬរង្វង់សម្រាប់ Radius និង Diameter។

### DIMBREAK

ឈ្មោះខ្លី៖ `DBREAK`។ `Select dimensions to add or remove breaks`, បន្ទាប់មក `Break where other objects cross [Auto/Manual/Remove] <Auto>`។ `Auto` ទុកចន្លោះក្នុងខ្សែវិមាត្រ និងខ្សែបន្ថែមកន្លែងណាដែលវត្ថុផ្សេងឆ្លងកាត់ ហើយគណនាចន្លោះទាំងនោះឡើងវិញ នៅពេលវត្ថុទាំងនោះ ឬវិមាត្រផ្លាស់ទី។ `Manual` (វិមាត្រមួយ) សួរចំណុចពីរ ហើយទុកចន្លោះរវាងពួកវា។ `Remove` យកចន្លោះទាំងអស់ចេញ។ ចន្លោះគឺ 1.5 ដងនៃកម្ពស់អត្ថបទវិមាត្រ។

### DIMSPACE

គ្មានឈ្មោះខ្លី។ `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`។ ផ្លាស់ទីខ្សែវិមាត្រនៃវិមាត្រលីនេអ៊ែរ និងតម្រឹមស្រប (ឬមុំនៅកំពូលដូចគ្នា) ដូច្នេះពួកវាស្ថិតនៅចម្ងាយដូចគ្នាពីគ្នា ដោយរាប់ពីវិមាត្រមូលដ្ឋាន ម្នាក់ៗនៅចំហៀងដែលវាស្ថិត។ `0` តម្រឹមពួកវាជាមួយមូលដ្ឋាន; `Auto` គឺជាពីរដងនៃកម្ពស់អត្ថបទនៃវិមាត្រមូលដ្ឋាន។ វិមាត្រដែលមិនស្របទៅមូលដ្ឋានត្រូវបានទុកចោល។

### DIMINSPECT

គ្មានឈ្មោះខ្លី។ `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`។ គូរស៊ុមជុំវិញតម្លៃជាមួយស្លាកនៅពីមុខវា និងអត្រាត្រួតពិនិត្យនៅក្រោយវា។ `remove` យកស៊ុមចេញ។ អត្ថបទធ្លាក់ចុះនៅជាមួយតម្លៃ។

### DIMOVERRIDE

ឈ្មោះខ្លី៖ `DOV`, `DIMOVER`។ `Enter dimension variable name to override or Clear`, `Enter new value for …`, ម្ដងទៀតរហូតដល់ Enter, បន្ទាប់មក `Select dimensions`។ ផ្លាស់ប្ដូរការកំណត់ទាំងនោះនៅលើវិមាត្រដែលបានជ្រើសតែប៉ុណ្ណោះ; រចនាប័ទ្មវិមាត្រមិនផ្លាស់ប្ដូរឡើយ។ យកអថេរដែលជាលេខ ឬប៊ូតុងបើកបិទ (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …)។ `Clear` ដាក់វិមាត្រដែលបានជ្រើសត្រឡប់ទៅរចនាប័ទ្មវិញ។ បដិសេធឈ្មោះដែលមិនមែនជាអថេរបែបនេះ និងតម្លៃដែលវាមិនអាចទទួលបាន។

### DIMREASSOCIATE

ឈ្មោះខ្លី៖ `DRE`, `DIMREASSOC`។ `Select dimensions`, បន្ទាប់មកសម្រាប់នីមួយៗ ប្រភពខ្សែបន្ថែមរបស់វា (`Specify first extension line origin on an object`៖ ចាប់ជាប់ទៅចុង ឬកណ្ដាលនៃបន្ទាត់ ជ្រុងប៉ូលីឡាញ ចំកណ្ដាល; Enter រក្សាចំណុចនោះឱ្យនៅដោយឯករាជ្យ), ឬសម្រាប់កាំ អង្កត់ផ្ចិត កាំបត់ ឬវិមាត្រប្រវែងធ្នូ `Select arc or circle`។ វិមាត្រនោះត្រូវបានចងទៅវត្ថុទាំងនោះ៖ ពេលពួកវាផ្លាស់ទី ឬផ្លាស់ប្ដូរទំហំ វាដើរតាម ក្នុងជំហានមិនធ្វើវិញដូចគ្នា ហើយវាស់ឡើងវិញ។ ការផ្លាស់ទីចំណុចដែលបានចងដោយដៃ ឬលុបវត្ថុ បញ្ចប់ការចងនោះ។ ការចងត្រូវបានរក្សាក្នុង DWG និង DXF 2000 ជាទិន្នន័យផ្ទាល់របស់ CadCraft; កម្មវិធីផ្សេងឃើញវិមាត្រធម្មតា។

### DIMDISASSOCIATE

ឈ្មោះខ្លី៖ `DDA`, `DIMDISASSOC`។ `Select dimensions`។ ដោះពួកវាចេញពីវត្ថុដែលពួកវាចងទៅ; គ្មានអ្វីផ្លាស់ទីឡើយ។

### CENTERMARK

ឈ្មោះខ្លី៖ `CM`, `DIMCENTER`, `DCE`។ `Select circle or arc to add center mark`, ម្ដងទៀតរហូតដល់ Enter។ គូរឈើឆ្កាងនៅកណ្ដាល និងបន្ទាត់កណ្ដាលបួនទៅមិនឆ្ងាយពីខ្សែកោង (ប្រភេទបន្ទាត់ CENTER), ជាបន្ទាត់ធម្មតានៅលើស្រទាប់បច្ចុប្បន្ន; ធ្វើទំហំពីទំហំព្រួញ និងមាត្រដ្ឋានទាំងមូលនៃការកំណត់វិមាត្របច្ចុប្បន្ន បង្វិលជាមួយ UCS។ ពួកវាមិនដើរតាមរង្វង់ទេ ប្រសិនបើវាផ្លាស់ទី។

### CENTERLINE

ឈ្មោះខ្លី៖ `CL`។ `Select first line`, `Select second line`។ គូរបន្ទាត់នៅកណ្ដាលរវាងបន្ទាត់ពីរ (តាម bisector នៅពេលពួកវាជួប) ដែលវែងបន្តិចជាងពួកវា ក្នុងប្រភេទបន្ទាត់ CENTER។ បន្ទាត់ធម្មតា៖ វាមិនដើរតាមបន្ទាត់ទាំងពីរទេ។

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

គ្មានឈ្មោះខ្លី។ នីមួយៗសួរ `Enter new value for … <current>` ហើយកំណត់ទំហំនោះសម្រាប់វិមាត្រ**ថ្មី**៖ មាត្រដ្ឋានទាំងមូល កម្ពស់អត្ថបទ ទំហំព្រួញ ខ្ទង់ទសភាគ (ដល់ 8) ចន្លោះជុំវិញអត្ថបទ ផ្លាស់ទៅលើខ្សែវិមាត្រ អុហ្វសិតពីប្រភព។ សូមមើល [កំណត់ទំហំវិមាត្រ](topic:dimension-settings)។

### DIMLUNIT

ការកំណត់វិមាត្រ៖ ទម្រង់នៃវិមាត្រថ្មីតែប៉ុណ្ណោះ (1 វិទ្យាសាស្ត្រ, 2 ទសភាគ, 3 វិស្វកម្ម, 4 ស្ថាបត្យកម្ម, 5 ប្រភាគ)។

### DIMSTYLE និង -DIMSTYLE

ឈ្មោះខ្លី៖ `DST`, `DDIM`, `D`។ កម្មវិធីគ្រប់គ្រងរចនាប័ទ្មវិមាត្រ៖ {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}។ `-DIMSTYLE` នៅបន្ទាត់បញ្ជា៖ `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`។ សូមមើល [កំណត់ទំហំវិមាត្រ](topic:dimension-settings#named-dimension-styles)។

### DIMEDIT និង DIMTEDIT

`DIMEDIT` (`DED`)៖ `Dimension edit [Home/New/Rotate/Oblique] <Home>`, បន្ទាប់មកវិមាត្រ (ឬអ្វីដែលបានជ្រើសរួចហើយ)។ New សួរអត្ថបទ (`<>` = ការវាស់); Rotate សម្រាប់មុំ (0 ដាក់អត្ថបទត្រឡប់ទៅវិញ); Oblique សម្រាប់មុំនៃខ្សែបន្ថែមពីអ័ក្ស X (Enter = គ្មាន; វិមាត្រលីនេអ៊ែរ និងតម្រឹមប៉ុណ្ណោះ)។ `DIMTEDIT` (`DIMTED`)៖ `Dimension text [Left/Right/Center/Home/Angle] <Center>`។ សូមមើល [កំណត់ទំហំវិមាត្រ](topic:dimension-settings#change-dimension-text-and-extension-lines)។

### DIMTEXTUNIT

ឈ្មោះខ្លី៖ `DTU`។ `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, ឬជាមួយវិមាត្រដែលបានជ្រើស `Units in the text of the selected dimensions`។ សរសេរប្រវែងដែលវាស់ជាឯកតានោះ ជាមួយឯកតាបន្ទាប់ពីវា (DIMLFAC និងបន្ទាប់បន្សំ DIMPOST); `D` ត្រឡប់ទៅឯកតាគំនូរប្លង់។ សូមមើល [វិមាត្រជា mm, cm, m ឬ km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)។

### REVCLOUD

ឈ្មោះខ្លី៖ `RC`។ បង្ហាញ `Arc length: … Type: …`, បន្ទាប់មក `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`។ Rectangular សួរ `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand តាមសញ្ញាកណ្ដុររហូតដល់ការចុច ឬ {{key:Enter}}; `O` សួរ `Select object` និង `Reverse direction? [Yes/No] <N>` ហើយបំប្លែងវត្ថុទៅជាពពក។ `A` សួរ `Specify the length of each arc`។ `R`, `P` និង `F` ជ្រើសប្រភេទសម្រាប់ពពកបន្ទាប់។ លទ្ធផលគឺជាប៉ូលីឡាញបិទនៃធ្នូ។

### MLEADER

ឈ្មោះខ្លី៖ `MLD`; ឬ {{ui:Leader}}។ `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, បន្ទាប់មកអត្ថបទនៅក្នុងប្រអប់នៅកន្លែង (ឬបើគ្មានវា `Enter text (an empty line ends)`)។ `Block` សួរឈ្មោះប្លុកជាមុនសិន ហើយ multileader បង្ហាញប្លុកនោះជំនួសអត្ថបទ។ ខ្សែចង្អុលបន្ថែម៖ {{cmd:MLEADEREDIT}}។ រក្សាទុកជា multileader ពិតក្នុង DWG; DXF រក្សាខ្សែ ព្រួញ និងអត្ថបទដែលវាគូរ។

### MLEADEREDIT

ឈ្មោះខ្លី៖ `MLE`។ `Select a multileader`, បន្ទាប់មក `Specify leader arrowhead location [Remove leaders/Block content/Text content]`៖ ចំណុចនីមួយៗបន្ថែមខ្សែចង្អុលពីព្រួញថ្មីទៅចុងដូចគ្នា រហូតដល់ Enter។ `Remove leaders` បន្ទាប់មកយកខ្សែចង្អុលដែលអ្នកចុចចេញ (multileader រក្សាយ៉ាងហោចមួយ)។ `Block content` សួរឈ្មោះប្លុក ហើយបង្ហាញប្លុកនោះជំនួសអត្ថបទ (គុណលក្ខណៈរបស់វាត្រូវបានសួរ); `Text content` ដាក់អត្ថបទត្រឡប់មកវិញ។ ខ្សែចង្អុលនីមួយៗមាន grip របស់ខ្លួន។ DWG រក្សាខ្សែចង្អុលនិងប្លុកគ្រប់ទាំងអស់ក្នុង multileader មួយ។

### MLEADERALIGN

ឈ្មោះខ្លី៖ `MLA`។ `Select multileaders`, បន្ទាប់មក `Select multileader to align to [Distribute/Spacing/Use current spacing]` និង `Specify direction`។ ផ្លាស់ទីចុង landing របស់ multileader ផ្សេង (និងអត្ថបទ ឬប្លុករបស់ពួកវា) ទៅលើបន្ទាត់ឆ្លងកាត់ landing របស់មួយដែលបានជ្រើសក្នុងទិសដៅនោះ; ព្រួញនៅតែជាកន្លែងដែលពួកវាចង្អុល។ `Spacing` ក៏កំណត់ពួកវាឱ្យមានចម្ងាយស្មើគ្នា; `Distribute` សួរចំណុចពីរ ហើយចែកពួកវាស្មើគ្នារវាង។ ត្រូវការ multileader យ៉ាងហោចពីរ។

### MLEADERCOLLECT

ឈ្មោះខ្លី៖ `MLC`។ `Select multileaders`, បន្ទាប់មក `Specify collected multileader location [Vertical/Horizontal]` (Enter រក្សាកន្លែងរបស់ទីមួយ)។ ធ្វើ multileader មួយចេញពីច្រើន៖ ខ្លឹមសារប្លុកចូលក្នុងប្លុកថ្មីដែលកាន់ទាំងអស់ជាប់គ្នា ឬមួយក្រោមមួយ; ខ្លឹមសារអត្ថបទក្លាយជាកំណត់ចំណាំមួយជាមួយបន្ទាត់សម្រាប់នីមួយៗ។ multileader ទីមួយរក្សាខ្សែចង្អុលរបស់វា; ផ្សេងទៀតត្រូវបានយកចេញ។ បដិសេធការលាយអត្ថបទ និងខ្លឹមសារប្លុក។

### TABLE

ឈ្មោះខ្លី៖ `TB`; ឬ {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}។ ធ្វើតារាង៖ វត្ថុមួយដែលអ្នកផ្លាស់ទី ចម្លង បង្វិល ធ្វើមាត្រដ្ឋាន និងបោះពុម្ពដូចវត្ថុផ្សេងទៀត ជាមួយក្រឡារបស់វាដែលរក្សាជាទិន្នន័យ។

- `Number of data rows or [Paste/File/Style] <3>`, បន្ទាប់មក `Number of columns <3>`, `Text height` និង `Top left corner of the table`។ តារាងទទួលបានជួរចំណងជើង (ក្រឡាបញ្ចូលគ្នាមួយ) និងជួរក្បាលនៅពីលើជួរទិន្នន័យ។
- `P`៖ តារាងពីក្រឡាសៀវភៅគណនានៅក្លីបបត (អត្ថបទជាមួយ tab រវាងក្រឡា)។ ការចុច {{key:Ctrl+V}} ជាមួយក្រឡាបែបនេះនៅក្លីបបតធ្វើដូចគ្នា លុះត្រាតែច្បាប់ចម្លងរបស់ CadCraft ផ្ទាល់ថ្មីជាង (ឬ CadCraft មិនអាចប្រាប់បាន៖ បន្ទាប់មកវាបិទភ្ជាប់ច្បាប់ចម្លងរបស់ខ្លួន ហើយនិយាយដូច្នេះ)។ `F`៖ តារាងពីឯកសារ `.csv` ឬដែលបំបែកដោយ tab។ ជួរទីមួយក្លាយជាជួរក្បាល; ទទឹងជួរឈរសមនឹងអត្ថបទ។
- `S`៖ ជ្រើសរចនាប័ទ្មតារាងសម្រាប់តារាងនេះ (សូមមើល {{cmd:TABLESTYLE}})។
- វាបដិសេធចំនួនជួរ ឬជួរឈរដែលមិនមែនជាចំនួនគត់ ហើយក្រឡាច្រើនជាងដែលតារាងអាចផ្ទុក (2,000 ជួរ, 200 ជួរឈរ, 40,000 ក្រឡា)។
- {{cmd:EXPLODE}} បំប្លែងតារាងទៅជាបន្ទាត់ និងអត្ថបទ។ រក្សាទុកជា DWG តារាងគឺជាវត្ថុតារាងពិតដែលកម្មវិធីផ្សេងអាចកែបាន; រក្សាទុកជា DXF វាជាប្លុកដែលគូរវា ហើយ CadCraft បើកវាម្ដងទៀតជាតារាង។

### TABLEDIT

ឈ្មោះខ្លី៖ `TABLEEDIT`, `TABEDIT`; ឬចុចពីរដងលើក្រឡា។ កែតារាង។

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`។ ចុចក្រឡាមួយ ឬជាមួយតារាងដែលបានជ្រើស វាយឈ្មោះរបស់វា (`B3`៖ ជួរឈរ B, ជួរដេក 3; ជួរចំណងជើងគឺជាជួរ 1)។ នៅក្នុងកម្មវិធីរុករក ប្រអប់មួយបើកលើក្រឡា៖ {{key:Enter}} រក្សាអត្ថបទ, {{key:Tab}} ទៅក្រឡាបន្ទាប់, {{key:Alt+Enter}} ចាប់ផ្ដើមបន្ទាត់ថ្មី, {{key:Esc}} ទុកក្រឡាដូចដែលវាធ្លាប់។
- អត្ថបទដែលចាប់ផ្ដើមដោយ `=` គឺជារូបមន្ត៖ `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, ជាមួយ `+ - * / ^`, វង់ក្រចក និងអនុគមន៍ដូចជា `sqrt` និង `round`។ ក្រឡាបង្ហាញតម្លៃ; រូបមន្តដែលដាក់ឈ្មោះក្រឡារបស់ខ្លួន ក្រឡាក្រៅតារាង ឬក្រឡាគ្មានលេខ បង្ហាញ `####` ហើយបន្ទាត់បញ្ជានិយាយមូលហេតុ។
- `R` / `C`៖ `Insert` ឬ `Delete` ជួរ ឬជួរឈរនៅក្រឡាដែលបានជ្រើស (ប៉ុន្មាន និងនៅខាងលើ ឬខាងក្រោម ឆ្វេង ឬស្ដាំ)។ រូបមន្តដើរតាមក្រឡាដែលពួកវាដាក់ឈ្មោះ។
- `S`៖ ទទឹងជួរឈរ និងកម្ពស់ជួរដេក។ ជួរដេកមិនដែលទាបជាងអត្ថបទរបស់វាត្រូវការឡើយ។ តារាងដែលបានជ្រើសក៏មាន grip នៅគែមនៃជួរឈរនីមួយៗ និងជួរដេកនីមួយៗ។
- `M`៖ បញ្ចូលគ្នាពីក្រឡាមួយដែលបានជ្រើសទៅមួយទៀត; `U`៖ ដោះការបញ្ចូលគ្នា។ `A`៖ ការតម្រឹម (`TL` លើឆ្វេង … `MC` កណ្ដាលកណ្ដាល … `BR` ក្រោមស្ដាំ)។ `H`៖ កម្ពស់អត្ថបទផ្ទាល់ខ្លួនរបស់ក្រឡានេះ (0 = របស់រចនាប័ទ្ម)។ `K`៖ ធ្វើឱ្យជួរដេកជាចំណងជើង ក្បាល ឬទិន្នន័យ។ `CL`៖ លុបខ្លឹមសារក្រឡា។
- វាបដិសេធតារាងនៅលើស្រទាប់ដែលចាក់សោ ការលុបជួរ ឬជួរឈរទាំងអស់ និងការបញ្ចូលគ្នាដែលនឹងកាត់ក្រឡាបញ្ចូលគ្នាមួយទៀតជាពីរ។

### TABLESTYLE

ឈ្មោះខ្លី៖ `TS`។ បញ្ជីរចនាប័ទ្មតារាងជាមួយចំនួនតារាងដែលប្រើនីមួយៗ បន្ទាប់មក `Table style: [New/Set/Edit/Delete/Apply]`។

- រចនាប័ទ្មមួយមានកម្ពស់អត្ថបទ និងការតម្រឹមនៃជួរចំណងជើង ក្បាល និងទិន្នន័យ ចន្លោះគែមក្រឡា និងបន្ទាត់ព្រំដែនណាដែលត្រូវបានគូរ (ខាងក្រៅ ចន្លោះជួរ ចន្លោះជួរឈរ)។
- `N` ធ្វើរចនាប័ទ្មពីបច្ចុប្បន្ន ហើយធ្វើឱ្យវាជាបច្ចុប្បន្ន; `S` កំណត់រចនាប័ទ្មបច្ចុប្បន្ន (តារាងថ្មីយកវា); `E` កែមួយ៖ តារាងដែលប្រើវាត្រូវបានគូរឡើងវិញ; `A` ផ្ដល់តារាងដែលបានជ្រើសនូវរចនាប័ទ្មបច្ចុប្បន្ន; `D` លុបមួយ (មិនមែន Standard, មិនមែនបច្ចុប្បន្ន; តារាងដែលប្រើវារក្សារូបរាងរបស់ពួកវា)។
- រចនាប័ទ្មត្រូវបានរក្សាជាមួយគំនូរប្លង់ (DWG និង DXF)។

### TABLEEXPORT

រក្សាទុកអ្វីដែលតារាងបង្ហាញជាឯកសារ CSV (រូបមន្តជាតម្លៃរបស់វា)។ `Select a table`, ឬជ្រើសមួយជាមុនសិន។ អត្ថបទក្រឡាដែលចាប់ផ្ដើមដោយ `=`, `+`, `-` ឬ `@` ទទួលបាន `'` នៅមុខ ដូច្នេះក្រឡាសៀវភៅគណនាមិនដំណើរការពួកវា។

### TABLEPASTE

ឈ្មោះខ្លី៖ `PASTETABLE`។ ធ្វើតារាងពីក្រឡាសៀវភៅគណនានៅក្លីបបត បន្ទាប់មកសួរចំណុចជ្រុងខាងលើខាងឆ្វេងរបស់វា។ ដូច {{cmd:TABLE}} › `Paste`។

### DATALINK

ឈ្មោះខ្លី៖ `DL`។ `Data link: [New/List/Remove] <New>`។ `N` សួរឯកសារ CSV ដាក់តារាងនៃវា ហើយចងចាំឈ្មោះឯកសារ; `L` បញ្ជីតំណភ្ជាប់ជាមួយឯកសារ ទំហំ ពេលដែលវាត្រូវបានអាន និងចំនួនតារាងដែលប្រើ; `R` យកតំណភ្ជាប់ចេញ (តារាងរបស់វានៅដដែលជាតារាងធម្មតា)។

### DATALINKUPDATE

ឈ្មោះខ្លី៖ `DLU`។ អានឯកសារនៃ data link ម្ដងទៀត ហើយបំពេញតារាងដែលភ្ជាប់ទៅវាឡើងវិញ (ជួរ និងជួរឈរត្រូវបានបន្ថែម ឬយកចេញដើម្បីឱ្យត្រូវគ្នា)។ កម្មវិធីរុករកមិនអាចបើកឯកសារដោយខ្លួនឯងបានទេ ដូច្នេះវាសួរអ្នកឱ្យជ្រើសឯកសារម្ដងទៀត។ ជាមួយតំណភ្ជាប់ជាច្រើន វាសួរថាមួយណា។

### FIELD

ដាក់វាលក្នុងគំនូរប្លង់៖ អត្ថបទដែលគណនាខ្លួនវាផ្ទាល់។ `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`៖

- `D`៖ ឥឡូវនេះ ឬកាលបរិច្ឆេទដែលបានរក្សា បង្កើត ឬបោះពុម្ព និងទម្រង់ (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`)។ `F`៖ ឈ្មោះឯកសារ ជាមួយ ឬគ្មានផ្នែកបន្ថែមរបស់វា។ `S`៖ លេខសន្លឹក ចំណងជើងរបស់វា ឬចំនួនសន្លឹកសរុប។ `P`៖ លក្ខណៈសម្បត្តិគំនូរប្លង់ដោយឈ្មោះ (សូមមើល {{cmd:DWGPROPS}})។ `O`៖ ជ្រើសវត្ថុ បន្ទាប់មកអ្វីដែលត្រូវអាន (ផ្ទៃក្រឡា ប្រវែង បរិមាត្រ កាំ អង្កត់ផ្ចិត ស្រទាប់ ឈ្មោះ x y អត្ថបទ ការបង្វិល ពណ៌) និងខ្ទង់ទសភាគ។ `E`៖ រូបមន្ត។ `C`៖ អត្ថបទជាមួយកូដដែលវាយដូចដែលវាស្ថិត ដូចជា `Sheet %<sheetnumber>% of %<sheetcount>%`។
- បន្ទាប់មក `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`៖ អត្ថបទដែលបានជ្រើសទទួលវាលបន្ថែមបន្ទាប់ពីអ្វីដែលវាមាន; ក្រឡាតារាងដូចគ្នា; យោងប្លុកសួរថាគុណលក្ខណៈមួយណា; {{key:Enter}} សួរកម្ពស់ និងចំណុចសម្រាប់អត្ថបទថ្មី។
- នៅលើអេក្រង់ វាលមានផ្ទៃខាងក្រោយពណ៌ប្រផេះស្រាល; ការបោះពុម្ព និង PDF មិនមានវាឡើយ។ វាយជាន់លើអត្ថបទវាលដោយដៃបញ្ចប់វាល។ វាលដែលមិនអាចគណនាបានបង្ហាញ `####`។
- វាលរបស់វត្ថុរកវត្ថុរបស់ខ្លួនតាមគន្លឹះដែល CadCraft រក្សាលើវត្ថុ (Settings › CadCraft › Merge-friendly files); ជាមួយគន្លឹះបិទ វាបដិសេធ។

### UPDATEFIELD

ឈ្មោះខ្លី៖ `UPDATEFIELDS`។ `Select the objects whose fields to update (Enter: every field) or [Settings]`។ `S` កំណត់ពេលវាលធ្វើបច្ចុប្បន្នភាពដោយខ្លួនឯង៖ វាយអក្សរនៃ `O` open, `S` save, `P` plot, `R` regen (ទាំងបួនដើម្បីចាប់ផ្ដើម) ឬ `NONE`។

### DWGPROPS

ឈ្មោះខ្លី៖ `DRAWINGPROPS`។ បញ្ជីលក្ខណៈសម្បត្តិគំនូរប្លង់ បន្ទាប់មក `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`។ ប្រាំមួយដំបូងគឺជាអ្វីដែលផ្ទាំង {{ui:Drawing details}} បង្ហាញ; `U` បន្ថែមឈ្មោះ និងតម្លៃរបស់អ្នក, `R` យកមួយចេញ។ វាលអានពួកវា (`%<prop:title>%`, `%<prop:Client>%`) ហើយដើរតាមភ្លាមៗ។ វាបដិសេធឈ្មោះតាមចិត្តដែលជាឈ្មោះមួយក្នុងចំណោមឈ្មោះដែលមានស្រាប់ ឬមាន `%`, `<`, `>`, សញ្ញាសម្រង់ ឬ backslash។

## ប៉ារ៉ាម៉ែត្រ

សូមមើល [បង្ខាំគំនូរប្លង់](topic:constraints) និង [ប្រើប៉ារ៉ាម៉ែត្រ និងសមីការ](topic:parameters)។ ការរឹតបន្តឹងធ្វើការនៅផ្ទាំង {{ui:Model}}។

### GEOMCONSTRAINT និងពាក្យបញ្ជា GC

ឈ្មោះខ្លី `GCON`៖ `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, បន្ទាប់មកសំណួររបស់ពាក្យបញ្ជានោះ។

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}៖ `Select an object [2Points] <2Points>`។
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}៖ `Select first object`, `Select second object` (វត្ថុទីពីរផ្លាស់ទី)។
- {{cmd:GCCOINCIDENT}}៖ `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`។
- {{cmd:GCFIX}}៖ `Select point [Object] <Object>`។
- {{cmd:GCSYMMETRIC}}៖ `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`។

### DIMCONSTRAINT និងពាក្យបញ្ជា DC

ឈ្មោះខ្លី `DCON`៖ `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`។

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}៖ `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (លេខ កន្សោម ឬ `name=expression`)។
- {{cmd:DCALIGNED}}៖ ដូចខាងលើ ជាមួយ `[Object/Point & line/2Lines]`។
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}៖ `Select arc or circle`។ {{cmd:DCANGULAR}}៖ `Select first line or arc`, `Select second line`។
- {{cmd:DCCONVERT}}៖ `Select dimensions to convert`។

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}៖ `Select objects [Settings]`។ `S` សួរចម្ងាយ និងមុំអត់ធ្មត់។
- {{cmd:DELCONSTRAINT}} (ឈ្មោះខ្លី `DELCON`)៖ `Select objects`; ការរឹតបន្តឹងរបស់ពួកវាត្រូវបានយកចេញ។
- {{cmd:CONSTRAINTBAR}} (ឈ្មោះខ្លី `CBAR`)៖ `Select objects [Showall/Hideall]`, បន្ទាប់មក `[Show/Hide]`។
- {{cmd:DCDISPLAY}}៖ `Enter an option [Show/Hide]`។

### PARAMETERS និង -PARAMETERS

{{cmd:PARAMETERS}} (ឈ្មោះខ្លី `PAR`, `PARAM`) បើកផ្ទាំង {{ui:Parameters}}។ `-PARAMETERS`៖ `Enter an option [New/Edit/Rename/Delete/?] <?>`។

### SWBOUT

ឈ្មោះខ្លី `SWMACRO`។ ទាញយកម៉ាក្រូ (.swb) ដែលបង្កើតម៉ូដែលឡើងវិញជាគំនូរព្រាងតែមួយដែលបានរឹតបន្តឹងនៅ SolidWorks។ សូមមើល [ផ្លាស់ទីគំនូរព្រាងទៅ និងពីម៉ូឌីឡឺផ្នែកផ្សេង](topic:solidworks-sketches)។

## ប្លុក

### ANNOSCALE

ឈ្មោះខ្លី៖ `CANNOSCALE`។ និយាយមាត្រដ្ឋានការកត់សម្គាល់របស់គំនូរប្លង់ និងចំនួនវត្ថុការកត់សម្គាល់ដែលវាមាន បន្ទាប់មកសួរ `New annotation scale`៖ វាយ `1:50`, `1:100`, `2:1`, លេខទទេ (`50` គឺ 1:50) ឬឈ្មោះរបស់មាត្រដ្ឋានរបស់គំនូរប្លង់។ អក្សរ និងវិមាត្រការកត់សម្គាល់ទាំងអស់ត្រូវបានធ្វើទំហំឡើងវិញ ដូច្នេះវាបោះពុម្ពទំហំដូចគ្នានៅមាត្រដ្ឋានថ្មី ក្នុងជំហានមិនធ្វើវិញមួយ; វត្ថុដែលមិនមែនជាការកត់សម្គាល់ត្រូវបានទុកចោល ហើយក៏ដូចវត្ថុដែលរក្សាបញ្ជីមាត្រដ្ឋានដោយគ្មានមាត្រដ្ឋានថ្មី ({{cmd:OBJECTSCALE}})។ សូមមើល [ឯកតា ក្រដាស និងមាត្រដ្ឋាន](topic:units-papers-scales#annotate-by-scale)។

### OBJECTSCALE

ឈ្មោះខ្លី៖ `OBJSCALE`។ `Select annotative objects`, បន្ទាប់មក `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`។ អក្សរ ឬវិមាត្រការកត់សម្គាល់រក្សាបញ្ជីមាត្រដ្ឋានការកត់សម្គាល់។ `Add` និង `Delete` សួរមាត្រដ្ឋាន (`1:50`, `2:1`, លេខទទេ ឬឈ្មោះមាត្រដ្ឋានផ្ទាល់របស់គំនូរប្លង់)។ `Current scale` បន្ថែមមាត្រដ្ឋានការកត់សម្គាល់របស់គំនូរប្លង់; `List` បោះពុម្ពមាត្រដ្ឋានរបស់វត្ថុនីមួយៗ។ ផ្ទាំងមើលដែលមាត្រដ្ឋានស្ថិតក្នុងបញ្ជីរបស់វត្ថុ បង្ហាញវត្ថុនៅទំហំដែលបោះពុម្ពកម្ពស់ក្រដាសរបស់វានៅមាត្រដ្ឋាននោះ លើអេក្រង់ និងក្នុងការបោះពុម្ព។ មាត្រដ្ឋានចុងក្រោយមិនអាចលុបបានទេ។ វត្ថុដែលមិនមែនជាការកត់សម្គាល់ត្រូវបានចេញ៖ បើក Annotative នៅ Properties ជាមុនសិន។ បញ្ជីត្រូវបានរក្សាក្នុង DWG និង DXF ជាទិន្នន័យផ្ទាល់របស់ CadCraft។ សូមមើល [ឯកតា ក្រដាស និងមាត្រដ្ឋាន](topic:units-papers-scales#annotate-by-scale)។

### ANNOALLVISIBLE

ឈ្មោះខ្លី៖ `ANNOALL`។ `Show annotative objects at all scales [ON/OFF]`។ បើក (ដូចគំនូរប្លង់ចាប់ផ្ដើម): វត្ថុការកត់សម្គាល់ក៏បង្ហាញនៅផ្ទាំងមើល ឬក្នុងម៉ូដែល ដែលមាត្រដ្ឋានរបស់វាមិនស្ថិតក្នុងបញ្ជីរបស់វា នៅទំហំដែលវាមាន។ បិទ: វាមិនបង្ហាញនៅទីនោះ ហើយមិនអាចជ្រើសក្នុងម៉ូដែល។ ការប្ដូរនេះគឺជាជំហានមិនធ្វើវិញមួយ; វាមិនត្រូវបានរក្សាក្នុងឯកសារទេ។

### SCALELISTEDIT

ឈ្មោះខ្លី៖ `SCALELIST`។ `Scale list [Add/Edit/Delete/List/Reset]` រហូតដល់ {{key:Enter}}។ Add៖ `Scale name`, `Paper units`, `Drawing units`។ Edit និង Delete សួរឈ្មោះមាត្រដ្ឋាន។ មាត្រដ្ឋានផ្ទាល់របស់គំនូរប្លង់ចូលក្នុងបញ្ជីមាត្រដ្ឋានផ្ទាំងមើល និងការបោះពុម្ព ហើយត្រូវបានរក្សាជាមួយគំនូរប្លង់។ សូមមើល [ឯកតា ក្រដាស និងមាត្រដ្ឋាន](topic:units-papers-scales#scales)។

### SPLINE, SPLINEDIT និង PEDIT

`SPLINE` (`SPL`)៖ `First point of the spline [Method/Object] (Fit points)`។ Fit៖ ចំណុចដែលខ្សែកោងឆ្លងកាត់; `Close`, `Undo`, បន្ទាប់មក `Start tangent` និង `End tangent` (ចំណុច ឬ {{key:Enter}})។ Method › Control vertices សួរដឺក្រេ (1 ដល់ 5) ហើយគូរពីពហុកោណគ្រប់គ្រង។ Object បំប្លែងប៉ូលីឡាញទៅជា spline ឆ្លងកាត់ចំណុចកំពូលរបស់វា។ `SPLINEDIT` (`SPE`)៖ `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`។ `PEDIT` (`PE`)៖ `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` សម្រាប់វត្ថុច្រើន; បន្ទាត់ ធ្នូ និង spline ត្រូវបានផ្ដល់ជាប៉ូលីឡាញជាមុនសិន។ សូមមើល [Splines និង polylines](topic:splines)។

### BLOCK

ឈ្មោះខ្លី៖ `B`, `BMAKE`។

- `Enter block name`។ ប្រសិនបើវាមានរួច៖ `Block "…" already exists. Redefine it? [Yes/No] <N>`។
- `Specify insertion base point`
- `Select objects`។ ពួកវាត្រូវបានជំនួសដោយយោងមួយទៅប្លុកថ្មី។

### WBLOCK

ឈ្មោះខ្លី៖ `W`, `-WBLOCK`។ សរសេរប្លុក វត្ថុមួយចំនួន ឬគំនូរប្លង់ទាំងមូលជាឯកសារ DWG ឬ DXF ថ្មី។ `WBLOCK source [Block/Entire drawing/Objects] <Objects>`៖

- **Objects**៖ `Specify insertion base point` (វាក្លាយជាចំណុចដើមនៃគំនូរប្លង់ថ្មី), `Select objects`, បន្ទាប់មក `File format [DWG/DXF/R12 DXF]` និង `File name for the new drawing`, បន្ទាប់មក `What to do with the objects [Retain/Convert to block/Delete]`។ Convert ជំនួសពួកវាដោយយោងមួយទៅប្លុកនៃឈ្មោះឯកសារ; Delete លុបពួកវា។
- **Block**៖ `Block to write out`។ វត្ថុផ្ទាល់របស់ប្លុក ជាមួយចំណុចមូលដ្ឋានរបស់វាជាចំណុចដើម រួមទាំងប្លុកដែលនៅខាងក្នុង។
- **Entire drawing**៖ វត្ថុទាំងអស់នៅក្នុងលំហម៉ូដែល។ សន្លឹកមិនត្រូវបានសរសេរទេ; ប្រើ {{cmd:SAVEAS}} សម្រាប់ច្បាប់ចម្លងដែលរក្សាសន្លឹក។

ឯកសារថ្មីមានតែស្រទាប់ ប្រភេទបន្ទាត់ អត្ថបទ និងរចនាប័ទ្មវិមាត្រ និងប្លុកដែលវត្ថុរបស់វាប្រើ ព្រមទាំងឯកតារបស់គំនូរប្លង់។ កំណែនៃ DWG គឺជាកំណែដែល {{cmd:SAVEAS}} ប្រើចុងក្រោយ។ នៅក្នុងកម្មវិធីរុករក ឯកសារទាញយក; នៅ Studio ប្រអប់រក្សាទុកបើក។

### ATTDEF

ឈ្មោះខ្លី៖ `ATT`, `DDATTDEF`, `-ATTDEF`; ឬ {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}។ បង្ហាញមុខងារ បន្ទាប់មក `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` នៅពេលថេរ), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`។ {{cmd:BLOCK}} យកនិយមន័យគុណលក្ខណៈចូលក្នុងប្លុក។

### EATTEDIT និង ATTEDIT

`EATTEDIT` (`DDATTE`, ឬចុចពីរដងលើយោងដែលមានគុណលក្ខណៈ; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}})៖ `Select a block reference with attributes`, បន្ទាប់មកប្រអប់ {{ui:Edit attributes}}។ `ATTEDIT` (`ATE`, `-ATTEDIT`)៖ យោងដូចគ្នា បន្ទាប់មក `<prompt> (<TAG>) <value>` សម្រាប់គុណលក្ខណៈនីមួយៗ; {{key:Enter}} រក្សាតម្លៃ។ សូមមើល [គុណលក្ខណៈ](topic:attributes#see-and-change-the-values)។

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`។ តម្លៃត្រូវបានរក្សា; គុណលក្ខណៈថ្មីទទួលលំនាំដើមរបស់វា គុណលក្ខណៈដែលបានយកចេញត្រូវបានបាត់ ការដាក់ទីតាំងត្រូវបានកំណត់ឡើងវិញ។

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}។ ប្រអប់៖ ប្លុក គុណលក្ខណៈ (ស្លាក ការសួរ លំនាំដើម មុខងារ លំដាប់), {{ui:Update the references (values kept)}}, {{ui:Apply}}។

### REFEDIT និង REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}។ `REFEDIT`៖ `Select the block reference to edit in place` (ឬការជ្រើសរើស)។ `REFCLOSE`៖ `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Save the block}} និង {{ui:Discard}} នៅរបារធ្វើដូចគ្នា។ ការកែទាំងមូលគឺជាជំហានមិនធ្វើវិញមួយ។ សូមមើល [គុណលក្ខណៈ](topic:attributes#edit-a-title-block-where-it-is-refedit)។

### PENPRESSURE

`[ON/OFF]`៖ ថាតើសម្ពាធនៃការគូរប៊ិចកំណត់ទម្ងន់បន្ទាត់នៃអ្វីដែល {{cmd:SKETCHFIX}} និង {{cmd:SKETCHLIVE}} ធ្វើ (បើកដំបូង)។ សូមមើល [គូរស្គែចដោយប៊ិច](topic:sketch-with-a-pen#pressure-sets-the-lineweight)។

### OFFICESTANDARD

ឈ្មោះខ្លី៖ `OFFSTD`។ និយាយថាស្ដង់ដារការិយាល័យមួយណាមានប្រសិទ្ធភាពសម្រាប់គំនូរប្លង់នេះ ហើយមកពីណា៖ កំណត់ត្រារបស់គំនូរប្លង់ផ្ទាល់, ស្ដង់ដាររួមរបស់ក្រុមអ្នក, ឬ Default Policies របស់អ្នក (កម្ពស់អក្សរ `all.anno.*`); បើគ្មាន ទំហំផ្ទាល់របស់កម្មវិធី។ `[Import/Layers/Title block/Clear/eXit]`៖ `Import` អាន `cc-office-standard` .json (កំណត់ត្រាដែល SuperCad និង BimCraft សរសេរ) ចូលក្នុងគំនូរប្លង់នេះ ហើយរក្សាទុកជាមួយវាក្នុង DWG និង DXF; `Layers` បន្ថែមស្រទាប់ការិយាល័យដែលគំនូរប្លង់ខ្វះ ក្នុងជំហានមិនធ្វើវិញមួយ ហើយមិនដែលយកមួយចេញឡើយ; `Title block` បញ្ជីវាលការិយាល័យជាមួយតម្លៃផ្ទាល់របស់គំនូរប្លង់នេះ; `Clear` យកកំណត់ត្រាផ្ទាល់របស់គំនូរប្លង់ចេញ។ កម្ពស់អក្សរ និងវិមាត្រការកត់សម្គាល់ធ្វើតាមស្ដង់ដារដែលមានប្រសិទ្ធភាព។ សូមមើល [ឯកតា ក្រដាស និងមាត្រដ្ឋាន](topic:units-papers-scales)។

### BPARAMS

ឈ្មោះខ្លី៖ `BPM`, `BLOCKPARAMS`។ បើកកម្មវិធីគ្រប់គ្រងប៉ារ៉ាមែត្រសម្រាប់ប្លុកនៅក្នុងកម្មវិធីកែសម្រួលប្លុក ប្លុកនៃយោងដែលបានជ្រើស ឬប្លុកដែលអ្នកដាក់ឈ្មោះ (`Block name`)៖ ប៉ារ៉ាមែត្រជាមួយរូបមន្ត ប៉ារ៉ាមែត្រការមើលឃើញជាច្រើនជាមួយស្ថានភាពរបស់ពួកវា និងតម្លៃ និងស្ថានភាពផ្ទាល់របស់យោងដែលបានជ្រើស។ សូមមើល [ប៉ារ៉ាមែត្ររបស់អ្នក និងស្ថានភាពការមើលឃើញ](topic:dynamic-blocks#your-own-parameters-and-visibility-states)។ `-BPARAMS` ធ្វើដូចគ្នានៅបន្ទាត់បញ្ជា៖ `[Parameter/Visibility/State/Assign/Reference/Done]`។

### BEDIT និង BCLOSE

`BE`; ឬ {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}។ `Enter block name to edit <the selected reference's block>` បើកកម្មវិធីកែសម្រួលប្លុក។ `BCLOSE` សួរ `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Save block}} និង {{ui:Discard changes}} នៅរបារធ្វើដូចគ្នា។ អ្វីដែលធ្វើក្នុងកម្មវិធីកែសម្រួលគឺជាជំហានមិនធ្វើវិញមួយ។

### VIEWBASE

ឈ្មោះខ្លី៖ `FLATSHOT`។ ទិដ្ឋភាព 2D រាបនៃវត្ថុរឹងនៅផ្ទាំង 3D៖ `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, មាត្រដ្ឋាន (`1:20`, `2:1`; {{key:Enter}} យកមួយដែលសមនឹងសន្លឹក), បន្ទាប់មកចំកណ្ដាលនៃទិដ្ឋភាព។ យោងប្លុកមួយ គែមដែលមើលឃើញនៅលើ VIEW-VISIBLE, គែមលាក់ដាច់ៗនៅលើ VIEW-HIDDEN។ សូមមើល [ទិដ្ឋភាពរាបនៅលើសន្លឹក](topic:3d-solids#flat-views-on-a-sheet)។

### PUBLISH

ឈ្មោះខ្លី៖ `-PUBLISH`; ឬ {{ui:All sheets in one PDF}} នៅប្រអប់ {{ui:Plot to PDF}}។ `Sheets to plot [All/Some]`៖ {{key:Enter}} បោះពុម្ពសន្លឹកគ្រប់ទាំងអស់, `S` សួរឈ្មោះដែលបំបែកដោយក្បៀស។ PDF មួយ ទំព័រ និងចំណាំមួយនៅសន្លឹកនីមួយៗ។ សូមមើល [សន្លឹកទាំងអស់នៅក្នុង PDF មួយ](topic:plot-pdf#every-sheet-in-one-pdf)។

### SHEETSET

ឈ្មោះខ្លី៖ `SSM`, `SHEETSETMANAGER`។ នាំអ្នកទៅផ្នែក {{ui:Sheet set}} នៃផ្ទាំងខាងឆ្វេង៖ សន្លឹកពីគំនូរប្លង់ជាច្រើន ដាក់លេខ និងដាក់ចំណងជើង ប្លុកចំណងជើងរបស់ពួកវាបំពេញពីសំណុំ បោះពុម្ពជា PDF មួយ។ សូមមើល [សំណុំសន្លឹក](topic:sheet-sets)។

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`)៖ ជ្រើស DWG ឬ DXF បន្ទាប់មកចំណុចបញ្ចូលរបស់វា។ {{cmd:XREF}} (`XR`, `-XREF`)៖ `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; ជាមួយតំណភ្ជាប់ច្រើនជាងមួយ ជ្រើសយោងមួយរបស់វា ឬវាយ `N` និងឈ្មោះរបស់វា។ សូមមើល [គំនូរប្លង់ដែលភ្ជាប់](topic:files#linked-drawings-external-references)។

### COUNT

ឈ្មោះខ្លី៖ `BCOUNT`; ឬ {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}។ `Select a block reference to count, or [All/Export] (Enter: All)`៖ ការចុចមួយជ្រើស និងរាប់យោងគ្រប់ប្រភេទនៃប្លុកនោះនៅក្នុងលំហនេះ; {{key:Enter}} ឬ `A` បញ្ជីទាំងអស់; `E` បន្ទាប់មក `C` (ការរាប់) ឬ `A` (គុណលក្ខណៈ) ទាញយក CSV។ សូមមើល [រាប់ប្លុក និងនាំចេញតារាង](topic:blocks#count-blocks-and-export-a-schedule)។

### INSERT

ឈ្មោះខ្លី៖ `I`, `DDINSERT`។

- `Enter block name or [File/Library] <last block>` (ភាពធំតូចមិនសំខាន់)។ `F` សួរ DWG ឬ DXF, បន្ទាប់មកទាំងគំនូរប្លង់ទាំងមូល ឬប្លុកមួយរបស់វា; ឈ្មោះដែលបានប្រើរួចហើយសួរ {{ui:Keep existing}} ឬ {{ui:Rename}}។ `L` បើកផ្ទាំងបណ្ណាល័យ។
- `Specify insertion point [Scale/Rotate]`។ `S` សួរ `Specify scale factor`, `R` សួរ `Specify rotation angle`; ទាំងពីរត្រូវបានចងចាំ។
- នៅពេលប្លុកមានរួចហើយនៅជាប់នឹងវត្ថុដែលដដែលនៅកន្លែងផ្សេងដោយគ្មានវា បន្ទាត់មួយនិយាយថាមានកន្លែងប៉ុន្មានត្រូវបានណែនាំ ហើយសញ្ញាបន្ថែម `suGgested`: `G` បង្ហាញវា; ចុចនៅជិតមួយដើម្បីដាក់ប្លុកនៅទីនោះ, `A` សម្រាប់ទាំងអស់, {{key:Enter}} ត្រឡប់ទៅវិញ។ ពួកវាទទួលការបង្វិលរបស់អ្នកជិតខាង និងតម្លៃគុណលក្ខណៈលំនាំដើម។ គំនូរប្លង់ដែលមានវត្ថុលើសពី 20,000 នៅលំហបើក មិនត្រូវបានស្វែងរកទេ។
- បន្ទាប់មក `Enter <prompt> (<TAG>) <default>` សម្រាប់គុណលក្ខណៈនីមួយៗដែលប្លុកសួរ។ សូមមើល [គុណលក្ខណៈប្លុក](topic:attributes)។

### LIBRARY

ឈ្មោះខ្លី៖ `LIB`។ បើកផ្ទាំងបណ្ណាល័យ៖ ដាក់ធាតុ ពិនិត្យការធ្វើបច្ចុប្បន្នភាព ការផ្តល់គុណបណ្ណាល័យ។ គ្មានសំណួរ។ សូមមើល [បញ្ចូលពីឯកសារ ឬបណ្ណាល័យ](topic:insert-from-file-and-library)។

### STEELMEMBER

ឈ្មោះខ្លី៖ `SMEMBER`; ឬ {{ui:3D member}} នៅផ្ទាំង {{ui:Standard}} របស់បណ្ណាល័យ។ `Section size <W12x26>` (ដូចផ្ទាំងបញ្ជី), បន្ទាប់មក `Start point [Column]` និង `End point`៖ សមាជិកដែករឹងនៅផ្ទាំង 3D រវាងចំណុចទាំងពីរ ដែលអង្គុយលើដី។ `C` សួរចំណុចមូលដ្ឋាន និងកម្ពស់របស់សសរ។ ជំហានមិនធ្វើវិញមួយ។ សូមមើល [ដាក់ផ្នែកដែក និងគ្រឿងបន្លាស់ស្ដង់ដារ](topic:steel-and-standard-parts)។

### PARTSLIST

ឈ្មោះខ្លី៖ `PLIST`។ `Top left corner of the parts list`, បន្ទាប់មក `Text height <2.5>`៖ គូរតារាងនៃគ្រឿងស្តង់ដារ និងផ្នែកដែកទាំងអស់ដែលដាក់ពីបណ្ណាល័យ (លេខធាតុ បរិមាណ ផ្នែក ស្ដង់ដារ ទំហំ ប្រវែង សម្ភារៈ ម៉ាស)។ ជំហានមិនធ្វើវិញមួយ។ សូមមើល [ដាក់ផ្នែកដែក និងគ្រឿងបន្លាស់ស្ដង់ដារ](topic:steel-and-standard-parts#make-a-parts-list)។

### PURGE

ឈ្មោះខ្លី៖ `PU`។ យកនិយមន័យប្លុកដែលគ្មានអ្វីប្រើចេញ។ គ្មានសំណួរ។

### DELBLOCKS

ឬ {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}។ `Select block to delete [Name/eXit]`៖ ចុចយោងប្លុក ឬ `N` សម្រាប់បញ្ជីប្លុកជាមួយតម្រង (ជ្រើសច្រើន) ឬ `X` / {{key:Enter}} ដើម្បីបញ្ចប់។ យោងនីមួយៗត្រូវបានយកចេញ — ក្នុងម៉ូដែល នៅគ្រប់សន្លឹក និងនៅខាងក្នុងប្លុកផ្សេង — បន្ទាប់មកនិយមន័យ ហើយបន្ទាត់បញ្ជានិយាយអ្វីដែលត្រូវបានលុប និងអ្វីដែលមិនអាច។ ប្លុកគ្មានឈ្មោះ និងឯកសារភ្ជាប់មិនត្រូវបានផ្ដល់ជូនទេ។ សំណួរត្រឡប់មកសម្រាប់ប្លុកបន្ទាប់; ពាក្យបញ្ជាទាំងមូលគឺជាជំហានមិនធ្វើវិញមួយ។

### PASTEBLOCK

{{cmd:PASTEBLOCK}} បិទភ្ជាប់អ្វីដែលអ្នកបានចម្លង ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) ជាប្លុកមួយ៖ ជ្រើសចំណុចបញ្ចូល ហើយយោងមួយទៅប្លុកថ្មីទៅកន្លែងនោះ ដែលត្រូវបានជ្រើស។ ប្លុកទទួលឈ្មោះរបស់ខ្លួន (`A$C` និងលេខ); {{cmd:RENAME}} ផ្ដល់ឈ្មោះរបស់អ្នក។ ជំហានមិនធ្វើវិញមួយយកយោង និងប្លុកចេញ។

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} សួរប្លុកដែលត្រូវជំនួស និងប្លុកដែលត្រូវដាក់ជំនួស (`?` បញ្ជីប្លុក) បន្ទាប់មកផ្លាស់ប្ដូរយោងនីមួយៗក្នុងម៉ូដែល នៅគ្រប់សន្លឹក និងនៅខាងក្នុងប្លុកផ្សេង។ យោងនីមួយៗរក្សាទីតាំង មាត្រដ្ឋាន ការបង្វិល ស្រទាប់ និងតម្លៃគុណលក្ខណៈដែលប្លុកទាំងពីរមាន; គុណលក្ខណៈដែលប្លុកថ្មីមានតែវាចាប់ផ្ដើមនៅលំនាំដើមរបស់ពួកវា ហើយវាប្រាប់អ្នកថាតម្លៃមួយណាត្រូវបានលុប។ នៅពេលគ្មានអ្វីប្រើប្លុកចាស់ទៀត វាផ្ដល់ឱ្យយកវាចេញ។ វាបដិសេធឯកសារភ្ជាប់ និងការជំនួសដែលនឹងដាក់ប្លុកនៅក្នុងខ្លួនវា។ ជំហានមិនធ្វើវិញមួយ។

### MINSERT

{{cmd:MINSERT}} ដាក់ប្លុកជាជួរ និងជួរឈរ៖ ឈ្មោះប្លុក ចំណុចបញ្ចូល មាត្រដ្ឋាន ការបង្វិល ចំនួនជួរ និងជួរឈរ និងចម្ងាយរវាងពួកវា។ ឈុតទាំងមូលបង្វិលជាមួយការបង្វិល។ នីមួយៗជាយោងរបស់ខ្លួន (10,000 អតិបរមា) ដូច្នេះអ្វីមួយក្នុងចំណោមពួកវាអាចផ្លាស់ទី ឬលុបបាន បន្ទាប់ពីនោះ។

### BLOCKSPALETTE

ឈ្មោះខ្លី៖ `BLOCKSPAL`; ឬ {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}។ បង្ហាញផ្ទាំង {{ui:Blocks}} ជាមួយសញ្ញាកណ្ដុរនៅក្នុងតម្រងរបស់វា។ ប្លុកនីមួយៗមានរូបតូចមួយ; ដែលត្រូវបានដាក់ថ្មីបំផុតមកមុន។ ប៊ូតុងពីរនៅក្បែរតម្រងប្ដូររវាងបញ្ជី និងក្រឡាចត្រង្គរូបភាព។ ចុចរូបភាព (ឬ {{ui:Insert}}) ដើម្បីដាក់ប្លុកជាមួយ {{cmd:INSERT}}, ឬអូសវាទៅលើគំនូរប្លង់ ដើម្បីដាក់វានៅកន្លែងដែលអ្នកទម្លាក់វា។

{{ui:Libraries}}, នៅក្រោមបញ្ជី៖ {{ui:Add a drawing}} យកឯកសារ DWG ឬ DXF របស់អ្នកផ្ទាល់ ហើយបញ្ជីប្លុករបស់វាជាមួយរូបភាព ហើយគំនូរប្លង់ទាំងមូលជាប្លុកមួយ។ ការដាក់ប្លុកមួយចម្លងនិយមន័យរបស់វា (និងប្លុកដែលវាសម្ងាត់ និងស្រទាប់របស់ពួកវា) ចូលទៅក្នុងគំនូរប្លង់នេះ ដូចជាជម្រើស `File` របស់ {{cmd:INSERT}}; ប្លុកដែលមានរួចហើយនៅទីនេះជាមួយនិយមន័យដូចគ្នាត្រូវបានប្រើដោយគ្មានសំណួរ, មួយដែលមានឈ្មោះដូចគ្នាតែខុសគ្នាសួរ {{ui:Keep existing}} ឬ {{ui:Rename}}។ នៅក្នុងកម្មវិធីរុករក ឯកសារនៅដដែលរហូតដល់ទំព័របិទ។ នៅក្នុង CadCraft Studio {{ui:Add a folder}} បញ្ជីគំនូរប្លង់នៅក្នុងថតមួយ ដែលនីមួយៗបើកនៅពេលអ្នកចុច; ឯកសារ និងថតត្រូវបានចងចាំ។ x តូចយកបណ្ណាល័យចេញពីបញ្ជី; ឯកសារមិនត្រូវបានប៉ះពាល់ឡើយ។ បណ្ណាល័យ {{ui:Library}} ដែលចែករំលែកគឺជារឿងផ្សេង៖ សូមមើល [បញ្ចូលពីឯកសារ ឬបណ្ណាល័យ](topic:insert-from-file-and-library)។

### BCONVERT

ឬ {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}។ រកឃើញធរណីមាត្រដែលដដែល ហើយបំប្លែងច្បាប់ចម្លងនីមួយៗទៅជាយោងទៅប្លុកមួយ។

- `Select the objects that repeat, or [Block]`៖ វត្ថុនៃច្បាប់ចម្លងមួយ។ `B` ដាក់ឈ្មោះប្លុកដែលមានរួចហើយជំនួសវិញ ដើម្បីរកច្បាប់ចម្លងដាច់ដោយឡែកនៃវត្ថុរបស់វា។
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`៖ `M`, `S` និង `P` ប្ដូរអ្វីដែលរាប់ជាច្បាប់ចម្លង; {{key:Enter}} ស្វែងរក។ ការកំណត់ត្រូវបានចងចាំ។
- `Name for the new block <Block1>`, បន្ទាប់មក `Specify the block's base point` ({{key:Enter}} យកជ្រុងក្រោមខាងឆ្វេងនៃការជ្រើស)។
- វានិយាយថាមានឈុតវត្ថុដដែលប៉ុន្មានដែលជាធរណីមាត្រដូចគ្នា ដាក់ពន្លឺលើអ្វីទាំងអស់ដែលវានឹងជំនួស ហើយសួរ `Yes/No`។

ច្បាប់ចម្លងគឺជាវត្ថុដូចគ្នាដែលផ្លាស់ទី និងបង្វិលដោយមុំណាក៏បាន (ហើយបញ្ច្រាស ឬធ្វើមាត្រដ្ឋានដោយកត្តាមួយនៅពេលដែលពួកវាបើក)៖ វត្ថុនីមួយៗត្រូវតែមានគូរបស់វា ក្នុងកម្រិតមួយលានភាគនៃទំហំនៃការជ្រើស។ យោងនីមួយៗទទួលការបង្វិល និងមាត្រដ្ឋានរបស់ខ្លួន (ដែលបានបញ្ច្រាសមានមាត្រដ្ឋាន Y អវិជ្ជមាន) ហើយស្រទាប់ដែលវត្ថុរបស់វាចែករំលែក។ វត្ថុនៅលើស្រទាប់ដែលចាក់សោត្រូវបានទុកចោល ហើយរាប់។ វាស្វែងរកលំហបើក (ម៉ូដែល ឬសន្លឹកបើក)។ ការស្វែងរកដ៏ធំណាស់ឈប់នៅដែនកំណត់ការងារ ហើយនិយាយដូច្នេះ។ ជំហានមិនធ្វើវិញមួយ។

### BSEARCH

ឬ {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}។ `Find blocks by [Name/Attribute/Geometry] <Name>`៖

- `N`៖ ផ្នែកនៃឈ្មោះប្លុក ឬលំនាំជាមួយ `*` និង `?`។ បញ្ជីនីមួយៗនៃប្លុកជាមួយយោងរបស់វានៅទីនេះ និងក្នុងគំនូរប្លង់ទាំងមូល។
- `A`៖ តម្លៃគុណលក្ខណៈ ឬ `TAG=value`។ បញ្ជីប្លុកដែលយោងរបស់ពួកវាមានវា ជាមួយតម្លៃដែលបានរក។ គុណលក្ខណៈថេររាប់។
- `G`៖ ជ្រើសវត្ថុ ឬយោងប្លុកមួយ ហើយប្លុកដែលរូបរាងស្ទើរដូចគ្នាយ៉ាងតិច 85% ត្រូវបានបញ្ជី ដោយល្អបំផុតមុន។ ទំហំ ការបង្វិល និងការឆ្លុះមិនរាប់។ ការវាស់ប្រៀបធៀបចម្ងាយរវាងចំណុចដែលប្រាក់ប្រាក់ទៅពាសពេញតាមព្រំដែន ដូច្នេះវារកឃើញរូបដូច; ប្រើ {{cmd:BCONVERT}} ដើម្បីរកច្បាប់ចម្លងពិតប្រាកដ។

យោងដែលរកឃើញនៅលំហបើកត្រូវបានជ្រើស ត្រៀមសម្រាប់ពាក្យបញ្ជាបន្ទាប់។

### BREPLACE

ឬ {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}។ `Replace [Selected/All]`៖ `S` ជំនួសយោងប្លុកដែលអ្នកជ្រើសដោយប្លុកដែលអ្នកដាក់ឈ្មោះ; `A` សួរប្លុក និងការជំនួសរបស់វា ហើយផ្លាស់ប្ដូរយោងនីមួយៗ ដូច {{cmd:BLOCKREPLACE}} ធ្វើ (កូដដូចគ្នា)។ យោងរក្សាទីតាំង មាត្រដ្ឋាន ការបង្វិល ស្រទាប់ និងតម្លៃគុណលក្ខណៈដែលប្លុកទាំងពីរមាន; តម្លៃដែលប្លុកថ្មីគ្មានកន្លែងសម្រាប់ត្រូវបានលុប ហើយដាក់ឈ្មោះ។ `?` បញ្ជីប្លុក។ ជំហានមិនធ្វើវិញមួយ។

### DATAEXTRACTION

ឈ្មោះខ្លី៖ `EATTEXT`, `DX`; ឬ {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}។ បញ្ជីប្លុក គុណលក្ខណៈ និងលក្ខណៈសម្បត្តិវត្ថុជាតារាង ឬឯកសារ CSV។

- ដំណើរការលើការជ្រើសរើស ឬសួរ `Select objects (Enter: everything in this space)`។
- `List: [Blocks/Objects/All]` នៅពេលការជ្រើសមានទាំងពីរ។ ប្លុកគ្មានឈ្មោះ តារាង និងបញ្ជីសម្ភារៈមិនត្រូវបានបញ្ជីឡើយ។
- វាបោះពុម្ពជួរឈរដែលអាចជ្រើសបាន (ឈ្មោះ ប្រភេទ ស្រទាប់ X Y ការបង្វិល មាត្រដ្ឋាន ប្រវែង ផ្ទៃក្រឡា ពណ៌ ប្រភេទបន្ទាត់ លំហ និងមួយសម្រាប់ស្លាកគុណលក្ខណៈនីមួយៗ) បន្ទាប់មក `Columns, by name or number with commas between`។ {{key:Enter}} យកជួរដែលមានផ្កាយ៖ ឈ្មោះ និងគុណលក្ខណៈទាំងអស់សម្រាប់ប្លុក; ប្រភេទ ស្រទាប់ និងប្រវែងសម្រាប់វត្ថុ។
- `Put identical rows together with a count? [Yes/No] <Yes>`, បន្ទាប់មក `Put the list in a: [Table/Csv] <Table>`។ តារាងគឺជាតារាងធម្មតា ({{cmd:TABLEDIT}} កែវា) ហើយមិនមានជីវិត៖ ដំណើរការពាក្យបញ្ជាម្ដងទៀតនៅពេលគំនូរប្លង់ផ្លាស់ប្ដូរ។
- វាបដិសេធជួរឈរដែលមិននៅក្នុងបញ្ជី។ តារាងមានទិន្នន័យ 1,999 ជួរ; ឯកសារ CSV យកវាទាំងអស់។

### COUNTTABLE

រាប់យោងប្លុកនៃការជ្រើស (ឬនៃលំហបើក) ហើយដាក់ការរាប់ក្នុងតារាង (`Block`, `Count`) ឬឯកសារ CSV។ សម្រាប់ការរាប់ដែលដើរតាមគំនូរប្លង់ដោយខ្លួនឯង សូមមើល {{cmd:BOMTABLE}}។

## សន្លឹក និងការបោះពុម្ព

### LAYOUT

ឈ្មោះខ្លី៖ `LO`, `NEWLAYOUT`; ឬប៊ូតុង {{ui:+}} នៅក្រោមគំនូរប្លង់។ សន្លឹកថ្មីជាមួយព្រំដែន ប្លុកចំណងជើង និងផ្ទាំងមើលមួយ នៅ ISO A3 (ឬ Tabloid សម្រាប់គំនូរប្លង់ជាអ៊ីញ ឬហ្វីត)។ គ្មានសំណួរ។

### MVIEW

ឈ្មោះខ្លី៖ `MV`។ នៅលើសន្លឹកតែប៉ុណ្ណោះ ({{cmd:VPORTS}} នៅលើសន្លឹកធ្វើដូចគ្នា)។

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`។ ផ្ទាំងមើលបង្ហាញម៉ូដែលទាំងមូលនៅមាត្រដ្ឋានស្ដង់ដារ។
- `P` (Polygonal)៖ ចុចជ្រុងនៃព្រំដែន (`Undo`, `Close`), {{key:Enter}} នៅពេលរួចរាល់។ វាបដិសេធជ្រុងតិចជាងបី។
- `O` (Object)៖ `Select a closed object for the viewport's outline`៖ ប៉ូលីឡាញបិទ រង្វង់ ឬអេលីប្សនៅលើសន្លឹក។ ផ្ទាំងមើលយករូបរាងរបស់វា (ខ្សែកោងជាបំណែកត្រង់ខ្លី); វត្ថុនៅដដែលដូចដែលវាធ្លាប់។ វាបដិសេធវត្ថុដែលមិនបិទ។

### VPCLIP

កាត់ផ្ទាំងមើលដែលមាននៅលើសន្លឹករួចហើយ។ `Select viewport to clip` (ឬជ្រើសវាជាមុនសិន), បន្ទាប់មក `Select the object to clip to [Polygonal/Delete]`៖

- ចុចប៉ូលីឡាញបិទ រង្វង់ ឬអេលីប្ស ឬ {{key:Enter}} (ឬ `P`) ដើម្បីចុចជ្រុងនៃពហុកោណ។
- `D` (Delete, ផ្តល់ជូនពេលផ្ទាំងមើលត្រូវបានកាត់) ធ្វើឱ្យវាជាចតុកោណម្ដងទៀត៖ ប្រអប់ជុំវិញព្រំដែនដែលវាមាន។
- អ្វីដែលផ្ទាំងមើលបង្ហាញមិនផ្លាស់ទីលើក្រដាសទេ ហើយមាត្រដ្ឋានរបស់វានៅដដែល។ ម៉ូដែលត្រូវបានគូរ និងបោះពុម្ពតែនៅខាងក្នុងព្រំដែនប៉ុណ្ណោះ ហើយគែមដើរតាមវា។ ជំហានមិនធ្វើវិញមួយ។
- ផ្ទាំងមើលដែលត្រូវបានកាត់មាន grip នៅជ្រុងនីមួយៗនៃព្រំដែនរបស់វា បន្ថែមលើចំកណ្ដាល និងជ្រុងទាំងបួននៃប្រអប់របស់វា (ការអូសជ្រុងប្រអប់លាតព្រំដែនជាមួយវា)។ Properties បង្ហាញ Outline៖ Rectangle, ឬ Clipped ជាមួយចំនួនជ្រុង។
- ឯកសារ DWG និង DXF 2000 រក្សាព្រំដែនសម្រាប់ CadCraft។ កម្មវិធីផ្សេងបើកផ្ទាំងមើលជាចតុកោណដែលនៅជុំវិញវា; DXF R12 រក្សាតែចតុកោណ។
- នៅផ្ទាំងម៉ូដែលវានិយាយថាផ្ទាំងមើលស្ថិតនៅលើសន្លឹក។

### VPORTS

ឈ្មោះខ្លី៖ `VIEWPORTS`។ {{cmd:SPLIT}} ដូចគ្នាពីសន្លឹកដែរ ហើយ {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} ដំណើរការវា។ នៅម៉ូដែល៖ `Enter number of panes [SIngle/2/3/4] <3>`; `2` សួរ `[Horizontal/Vertical] <Vertical>` (Vertical = ចំហៀងគ្នា), `3` សួរ `[Left/Right] <Right>` (ផ្ទាំងធំទៅកន្លែងណា)។ ផ្ទាំងនីមួយៗរក្សាទិដ្ឋភាព និងលំហរបស់ខ្លួន; ការចុចធ្វើឱ្យផ្ទាំងសកម្ម។ នៅលើសន្លឹកវាជា {{cmd:MVIEW}}។ សូមមើល [បំបែកអេក្រង់](topic:split-screen)។

### VPVIEW

គ្មានឈ្មោះខ្លី។ នៅលើសន្លឹកតែប៉ុណ្ណោះ។

- `Select viewport` (រំលងនៅពេលមួយត្រូវបានជ្រើស), បន្ទាប់មកនៅម៉ូដែល៖ `Specify first corner of the window to show`, `Specify opposite corner`។

### UCS

គ្មានឈ្មោះខ្លី។ ប្រព័ន្ធកូអរដោនេរបស់អ្នកផ្ទាល់; មិនមែនការកែទេ។ `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`៖ ចំណុចគឺជាចំណុចដើមថ្មី, បន្ទាប់មក `Specify point on X-axis (Enter keeps the angle)`។ `Z`៖ `Specify rotation angle about Z axis <90>`។ `3`៖ ចំណុចដើម ចំណុចលើអ័ក្ស X វិជ្ជមាន ចំណុចនៅចំហៀង Y វិជ្ជមាន។ `OB`៖ `Select object to align UCS`។ `NA`៖ `[Restore/Save/Delete/?]` និងឈ្មោះ។ ទិដ្ឋភាពបង្វិលដូច្នេះអ័ក្ស X ថ្មីស្ថិតក្នុងកម្រិត។ សូមមើល [បង្វិលទិដ្ឋភាព និងប្រើកូអរដោនេរបស់អ្នក](topic:ucs-and-turned-view)។

### PLAN

គ្មានឈ្មោះខ្លី។ `Enter an option [Current ucs/Ucs/World] <Current ucs>`៖ បង្វិលទិដ្ឋភាពនៃផ្ទាំងសកម្ម ដូច្នេះអ័ក្ស X របស់ UCS (ឬរបស់ពិភពលោក) ស្ថិតក្នុងកម្រិត។ គ្មានអ្វីក្នុងគំនូរប្លង់ផ្លាស់ទីទេ។

### TURNLEFT, TURNRIGHT, TURNWORLD

គ្មានឈ្មោះខ្លី; ឬ {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}។ ដូចគ្នានឹង `UCS Z -90`, `UCS Z 90` និង `UCS W`, ជាមួយទិដ្ឋភាពដើរតាម។

### VPLAYER

គ្មានឈ្មោះខ្លី។ នៅលើសន្លឹក ឬនៅខាងក្នុងផ្ទាំងមើល។ `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`៖ `F`, `T`, `R` សួរឈ្មោះស្រទាប់ (ក្បៀស `*` និង `?` ជាតួតំណាង), បន្ទាប់មក `[All/Select/Current] <Current>` ផ្ទាំងមើល; Reset ដាក់ស្រទាប់នីមួយៗត្រឡប់ទៅលំនាំដើម "frozen in new viewports" របស់វា; `V` កំណត់លំនាំដើមនោះ (`[Frozen/Thawed]`) ដែល {{cmd:MVIEW}} ប្រើ។ `?` បញ្ជីស្រទាប់ដែលផ្អាកនៅក្នុងផ្ទាំងមើលបច្ចុប្បន្ន។ ជួរផ្ទាំងមើលនៃផ្ទាំងស្រទាប់ធ្វើដូចគ្នាសម្រាប់ផ្ទាំងមើលមួយ។ សូមមើល [ផ្អាកស្រទាប់នៅក្នុងផ្ទាំងមើលមួយ](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport)។

### MSPACE

ឈ្មោះខ្លី៖ `MS`; ឬចុចពីរដងនៅខាងក្នុងផ្ទាំងមើល។ នៅលើសន្លឹកតែប៉ុណ្ណោះ។ ធ្វើការលើម៉ូដែលតាមរយៈផ្ទាំងមើល៖ ដែលបានជ្រើស ដែលតែមួយនៅលើសន្លឹក ឬ `Click inside the viewport to work in`។ ការផ្លាស់ទី និង zoom នៅខាងក្នុងផ្លាស់ប្ដូរទិដ្ឋភាពរបស់ផ្ទាំងមើល (ផ្ទាំងដែលចាក់សោការបង្ហាញរក្សាវា ហើយសន្លឹកផ្លាស់ទីជំនួស); ទិដ្ឋភាពថ្មីត្រូវបានសរសេរជាជំហានមិនធ្វើវិញមួយ។ សូមមើល [ធ្វើការលើម៉ូដែលតាមរយៈផ្ទាំងមើល](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)។

### PSPACE

ឈ្មោះខ្លី៖ `PS`; ឬចុចពីរដងនៅខាងក្រៅផ្ទាំងមើល ឬចុចផ្ទាំងនៅក្រោមគំនូរប្លង់។ ត្រឡប់ទៅសន្លឹក។

### PLOT

ឈ្មោះខ្លី៖ `PRINT`, `PUBLISH`, `EXPORTPDF`; ឬ {{key:Mod+P}}។ បើកប្រអប់ {{ui:Plot to PDF}}។ សូមមើល [បោះពុម្ពទៅ PDF](topic:plot-pdf)។

### PLOTSTYLES

ឈ្មោះខ្លី៖ `STYLESMANAGER`, `PSTABLES`; ឬ {{ui:Edit tables…}} នៅប្រអប់ {{ui:Plot to PDF}}។ បើក {{ui:Plot style tables}}៖ អ្វីដែលពណ៌នីមួយៗបោះពុម្ព (ពណ៌ ប្រផេះ ទឹកអ៊ីញ ទម្ងន់បន្ទាត់) រក្សាជាមួយគំនូរប្លង់។ សូមមើល [តារាងរចនាប័ទ្មបោះពុម្ព](topic:plot-pdf#plot-style-tables)។

### CHSPACE

{{cmd:CHSPACE}} ផ្លាស់ទីវត្ថុរវាងសន្លឹក និងម៉ូដែលតាមរយៈផ្ទាំងមើល ធ្វើមាត្រដ្ឋាន និងបង្វិលដូច្នេះពួកវាមើលទៅដូចគ្នាពីម្ខាងទៀត។ នៅលើសន្លឹក ជ្រើសវត្ថុ ហើយពួកវាទៅម៉ូដែល (ជ្រើសផ្ទាំងមើលនៅពេលសន្លឹកមានច្រើនជាងមួយ)។ ខណៈពេលអ្នកធ្វើការលើម៉ូដែលតាមរយៈផ្ទាំងមើល ({{cmd:MSPACE}}) វត្ថុដែលបានជ្រើសមកសន្លឹក។ វានិយាយថាពួកវាធំ ឬតូចជាងប៉ុន្មានដង។ ផ្ទាំងមើលនៅលើសន្លឹករបស់ពួកវា។ ជំហានមិនធ្វើវិញមួយ។

### ISODRAFT

{{cmd:ISODRAFT}} បើក ឬបិទការគូរ isometric `ON` ឬ `OFF`, ឬចូលត្រង់ទៅយន្តហោះ `Left`, `Top` ឬ `Right`។ ពេលវាបើក៖ Ortho ({{key:F8}}) រក្សាបន្ទាត់លើអ័ក្សពីរនៃយន្តហោះ (ឆ្វេង៖ 90° និង 150°; លើ៖ 30° និង 150°; ស្ដាំ៖ 30° និង 90°), polar tracking ({{key:F10}}) ធ្វើតាមអ័ក្សដូចគ្នា, ចាប់ជាប់ក្រឡាចត្រង្គ ({{key:F9}}) ប្រើក្រឡាចត្រង្គ isometric, ហើយក្រឡាចត្រង្គ ({{key:F7}}) ត្រូវបានគូរជាមួយបន្ទាត់នៅ 30°, 90° និង 150°។ {{cmd:ELLIPSE}} ទទួល `Isocircle`៖ ផ្ដល់ចំកណ្ដាល និងកាំ (ឬ `Diameter`) ហើយវាគូរអេលីប្សដែលរង្វង់បង្ហាញនៅលើយន្តហោះបច្ចុប្បន្ន។ គំនូរប្លង់នៅតែរាបស្មើ៖ ទាំងនេះជាជំនួយសម្រាប់គូរទិដ្ឋភាពរូបភាព មិនមែនម៉ូដែល 3D ទេ។ ការកំណត់គឺសម្រាប់ session នេះ ហើយមិនត្រូវបានរក្សាក្នុងឯកសារទេ។

### ISOPLANE

{{cmd:ISOPLANE}} ជ្រើសយន្តហោះដែលការគូរ isometric ធ្វើការលើ៖ `Left`, `Top` ឬ `Right`។ Enter ទៅយន្តហោះបន្ទាប់។ ពេលការគូរ isometric បើក {{key:F5}} ធ្វើដូចគ្នានៅកណ្ដាលពាក្យបញ្ជា; ពេលវាបិទ {{key:F5}} ត្រូវបានទុកឱ្យកម្មវិធីរុករក។

## សំណួរ

### CAL

បោះពុម្ពតម្លៃនៃការគណនា ដូចវាត្រូវបានអានគ្រប់ទីកន្លែងដែលប្រវែងត្រូវបានវាយ។

- `Expression`៖ វាយវា ឧទាហរណ៍ `12'6"+3/4"` ឬ `(24'-0")/3` ហើយចុច {{key:Enter}}។ CadCraft បោះពុម្ព `= 12'-6 3/4"   (150.75 drawing units)`។ សូមមើល [ការគណនាក្នុងតម្លៃដែលវាយ](topic:coordinate-entry#arithmetic-in-a-typed-value)។

### DIST

ឈ្មោះខ្លី៖ `DI`; ឬ {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}។

- `Specify first point`, `Specify second point`។ បោះពុម្ពចម្ងាយ មុំ ΔX និង ΔY។

### AREA

ឈ្មោះខ្លី៖ `AA`; ឬ {{ui:View}} › {{ui:More}} › {{ui:Area}}។ បោះពុម្ពផ្ទៃក្រឡា និងបរិមាត្រ។

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - ចុច ឬវាយជ្រុង; នៅ `Specify next point (Enter closes) [Undo]` ចុច {{key:Enter}} ដើម្បីបិទព្រំដែន។ `U` យកជ្រុងចុងក្រោយមកវិញ។
  - {{key:Enter}} ឬ `O`, បន្ទាប់មក `Select object`៖ រង្វង់ (បោះពុម្ពបរិមាត្ររបស់វា) អេលីប្ស ប៉ូលីឡាញ (ប៉ូលីឡាញបើកត្រូវបានបិទដោយបន្ទាត់ត្រង់សម្រាប់ផ្ទៃក្រឡា ហើយប្រវែងរបស់វាត្រូវបានបោះពុម្ព) ឬហាច់ (រន្ធត្រូវបានយកចេញ)។
  - `A` (Add area) និង `S` (Subtract area) រក្សាផលបូកដំណើរការ៖ ការណែនាំចាប់ផ្ដើមដោយ `(ADD mode)` ឬ `(SUBTRACT mode)`, តំបន់នីមួយៗត្រូវបានបន្ថែម ឬដក, ហើយ `Total area = …` ត្រូវបានបោះពុម្ពបន្ទាប់ពីនីមួយៗ។ នៅក្នុងរបៀបទាំងនេះ `O` ជ្រើសវត្ថុរហូតដល់ {{key:Enter}}, ហើយ {{key:Enter}} នៅការណែនាំទីមួយបញ្ចប់ពាក្យបញ្ជា។

### MEASUREGEOM

ឈ្មោះខ្លី៖ `MEA`។ `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; បន្ទាប់ពីការវាស់នីមួយៗ វាសួរម្ដងទៀត ជាមួយ `eXit` ជាលំនាំដើម។

`Quick` វាស់ជុំវិញកណ្ដុរនៅពេលអ្នកផ្លាស់ទីវា៖ ចម្ងាយទៅវត្ថុជិតបំផុតនៅខាងស្ដាំ ខាងលើ ខាងឆ្វេង និងខាងក្រោម (តាមអ័ក្សនៃ UCS បច្ចុប្បន្ន) គូរខណៈអ្នកធ្វើ; និងមុំកន្លែងដែលអ្នកជិតខាងពីរនៃទាំងនោះត្រង់ និងជួបគ្នា។ ការចុចមួយសរសេរចម្ងាយទាំងបួន ទទឹង និងកម្ពស់ជាក់ច្បាស់ និងមុំទៅប្រវត្តិ; Enter ត្រឡប់ទៅជម្រើស។ វាអានអ្វីដែលនៅលើអេក្រង់។

- `D`៖ ចំណុចពីរ ដូច {{cmd:DIST}}។
- `R`៖ `Select arc or circle`; បោះពុម្ពកាំ និងអង្កត់ផ្ចិត។
- `A`៖ ធ្នូ (មុំរួមរបស់វា), បន្ទាត់ និងបន្ទាប់មកបន្ទាត់ទីពីរ (មុំរវាងពួកវា ឆ្ពោះទៅចុងឆ្ងាយរបស់ពួកវា) ឬ {{key:Enter}} និងចំណុចបី (ចំនុចកំពូល បន្ទាប់មកចុងទាំងពីរ)។
- `AR`៖ ដូច {{cmd:AREA}} ផ្ទៃក្រឡាមួយ។

### ID

គ្មានឈ្មោះខ្លី។ `Specify point`; បោះពុម្ព X និង Y របស់វា។

### LIST

ឈ្មោះខ្លី៖ `LI`, `LS`។ `Select objects`; បោះពុម្ពប្រភេទ ស្រទាប់ និងការវាស់ចម្បងនៃវត្ថុនីមួយៗ។

### MASSPROP

{{cmd:MASSPROP}} ផ្ដល់លក្ខណៈសម្បត្តិផ្នែកនៃតំបន់ និងវត្ថុបិទដែលអ្នកជ្រើស ដោយរួមគ្នា៖ ផ្ទៃក្រឡា បរិមាត្រ ប្រអប់ព្រំដែន ចំណុចកណ្ដាល ម៉ូម៉ង់នៃភាពរឹងជុំវិញអ័ក្ស X និង Y ឆ្លងកាត់ប្រភព ផលគុណនៃភាពរឹង ចម្ងាយ gyration ម៉ូម៉ង់ដូចគ្នាជុំវិញចំណុចកណ្ដាល និងម៉ូម៉ង់ចម្បងជាមួយទិសដៅនៃអ័ក្សរបស់ពួកវា។ រន្ធនៅក្នុងតំបន់រាប់ជារន្ធ។ តួលេខគឺជាឯកតាគំនូរប្លង់ ហើយត្រឹមត្រូវសម្រាប់ព្រំដែនដែលធ្វើពីបន្ទាត់ និងធ្នូ; អេលីប្ស និង spline ត្រូវបានវាស់ជាផ្នែកត្រង់ខ្លី ហើយវានិយាយដូច្នេះ។ បន្ទាប់ពីរបាយការណ៍ វាសួរថាតើត្រូវសរសេរវាទៅឯកសារអក្សរឬអត់។ វត្ថុដែលមិនបិទត្រូវបានទុកចោល ហើយវានិយាយប៉ុន្មាន។

## ទិដ្ឋភាព ឯកសារ និងផ្សេងទៀត

### ZOOM

ឈ្មោះខ្លី៖ `Z`។

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`។ ចុចជ្រុងពីរសម្រាប់បង្អួច។ `E`, `A` ឬ Enter៖ គំនូរប្លង់ទាំងមូល។
- `P` (Previous, ឬ {{ui:Previous}} នៅរបារឧបករណ៍) ត្រឡប់ទៅទិដ្ឋភាពមុន រហូតដល់ 10 ទិដ្ឋភាពក្នុងមួយផ្ទាំង; ការដើរជាជំហានកង់ ឬការផ្លាស់ទីមួយ រាប់ជាទិដ្ឋភាពមួយ។
- លេខដូចជា `2`, `2x` ឬ `0.5x` (ឬ `S` ហើយបន្ទាប់មកលេខ) ធ្វើ zoom ចូល ឬចេញដោយកត្តានោះ ជុំវិញកណ្ដាលអេក្រង់។
- `C` សួរ `Specify center point` និង `Enter height or magnification (nX)`។

### PDFATTACH, PDFIMPORT និងពាក្យបញ្ជា PDF

ឈ្មោះខ្លី៖ `PDFATT` សម្រាប់ {{cmd:PDFATTACH}}, `PDFIM` សម្រាប់ {{cmd:PDFIMPORT}}។ {{cmd:PDFATTACH}} ដាក់ទំព័រ PDF នៅក្រោមគំនូរប្លង់ (ឯកសារ ទំព័រ ចំណុចបញ្ចូល មាត្រដ្ឋាន ការបង្វិល); {{cmd:PDFIMPORT}} បំប្លែងបន្ទាត់ ខ្សែកោង ការបំពេញ និងអត្ថបទនៃទំព័រទៅជាវត្ថុគំនូរប្លង់នៅលើស្រទាប់ដែលដាក់ឈ្មោះតាម PDF នៅទំហំពិត មាត្រដ្ឋានដែលបានវាយ ឬធ្វើមាត្រដ្ឋានពីចំណុចពីរ និងចម្ងាយពិត។ {{cmd:PDFCLIP}} កាត់ underlay, {{cmd:PDFADJUST}} កំណត់ការព្រាល ភាពផ្ទុយ ឯកពណ៌ ឬបិទវា, {{cmd:PDFLAYERS}} បើក ឬបិទស្រទាប់របស់ PDF ខ្លួនវា, ហើយ {{cmd:PDF}} ផ្ដល់ឱ្យ CadCraft នូវឯកសារដែល underlay របស់គំនូរប្លង់ប្រើម្ដងទៀត។ សូមមើល [PDF underlays](topic:pdf-underlay)។

### AUTOCOMPLETE

ឈ្មោះខ្លី៖ `AUTOC`។ ការបំពេញស្វ័យប្រវត្តិនៃគំនូរប្លង់៖ ពេលគ្មានពាក្យបញ្ជាកំពុងដំណើរការ ស្រមោលពណ៌ប្រផេះបង្ហាញអ្វីដែលលំនាំនៃគំនូរប្លង់របស់អ្នកនិយាយថាមកបន្ទាប់។ {{cmd:AUTOCOMPLETE}} បើក `On` ឬបិទ `Off` (ក៏ Settings › CadCraft) ឬ `Show` អ្វីដែលវានឹងណែនាំឥឡូវនេះ។ **Tab** គូរស្រមោលជាជំហានមិនធ្វើវិញមួយ, **Esc** បដិសេធវារហូតដល់គំនូរប្លង់ផ្លាស់ប្ដូរ។ វារកឃើញបីយ៉ាងនៅក្នុងវត្ថុថ្មីបំផុត៖ ច្បាប់ចម្លងបន្ទាប់នៃអ្វីមួយដែលគូរពីរដង ឬច្រើនជាងនេះ ជាជំហានស្មើ (សសរ ជួរឈរ ការដាក់ និងការដឹកជញ្ជូនជណ្ដើរ), ជំហានបន្ទាប់នៃជណ្ដើរប៉ូលីឡាញ, និងចំហៀងដែលបាត់នៃបន្ទប់ ឬច្រវាក់ជញ្ជាំង។ នៅកណ្ដាល {{cmd:LINE}} ឬ {{cmd:PLINE}} ស្រមោលគឺ**ចំណុចបន្ទាប់**៖ ជំហានបន្ទាប់នៃជណ្ដើរ (ការដាក់ ការដឹកជញ្ជូន ការដាក់...), ជ្រុងទីបួននៃចតុកោណ ចំណុចដែលបិទវា ឬជំហានស្មើមួយទៀត។ ដាក់សញ្ញាកណ្ដុរនៅជិតវា ហើយចុច **Tab** ដូចជាអ្នកបានចុចនៅទីនោះ; បន្តឬចុច Enter។ ធ្វើដោយច្បាប់នៅលើកុំព្យូទ័រនេះ គ្មានគំរូ។

### AUTOSHEET

ឈ្មោះខ្លី៖ `ASH`។ សន្លឹកដែលរៀបចំខ្លួនឯង។ {{cmd:AUTOSHEET}} យកផ្នែកនៃគំនូរប្លង់ (ទិដ្ឋភាពដែលមានឈ្មោះរបស់អ្នក ឬផ្នែកដាច់ដោយឡែកនៃម៉ូដែល ឬម៉ូដែលទាំងមូល), ជ្រើសទំហំក្រដាស (ឬមួយដែលអ្នកផ្ដល់), ផ្ដល់មាត្រដ្ឋានស្ដង់ដារដល់ផ្នែកនីមួយៗ (មាត្រដ្ឋានមួយសម្រាប់ទាំងអស់ ឬធំបំផុតដែលនីមួយៗអាចយក) ហើយដាក់ទិដ្ឋភាពជាជួរនៅលើសន្លឹកថ្មីជាមួយប្លុកចំណងជើង និងចំណងជើងរង (ឈ្មោះ និងមាត្រដ្ឋាន) នៅក្រោមនីមួយៗ។ អ្វីដែលមិនសមនឹងសន្លឹកមួយ ទទួលសន្លឹករបស់ខ្លួន។ ជំហានមិនធ្វើវិញមួយ។ ធ្វើដោយច្បាប់នៅលើកុំព្យូទ័រនេះ គ្មានគំរូ។

### PHOTOSKETCH

ឈ្មោះខ្លី៖ `PSK`។ រូបថតស្គែចទៅជាគំនូរប្លង់។ ជ្រើសរូបថត (JPEG, PNG ឬ TIFF) នៃការគូរដៃលើសន្លឹកក្រដាស។ {{cmd:PHOTOSKETCH}} ស្វែងរកជ្រុងទាំងបួននៃសន្លឹក ធ្វើឱ្យទស្សនីយភាពត្រង់ យកទំហំក្រដាសដែលអ្នកដាក់ឈ្មោះ (`Paper` ឬមួយដែលជិតបំផុត) និង `Scale` នៃការគូរ (1 : n) បន្ទាប់មកតាមដានខ្សែប៊ិចទៅជាបន្ទាត់ ធ្នូ និងរង្វង់ ជាមួយស្រទាប់សម្រាប់ពណ៌ប៊ិចនីមួយៗ (ខ្មៅ ក្រហម ខៀវ បៃតង)។ ប្រសិនបើវាមិនអាចរកគែមក្រដាសបាន វាយករូបថតទាំងមូលជាសន្លឹក ហើយនិយាយដូច្នេះ។ អក្សរត្រូវបានទុកចោល។ ជំហានមិនធ្វើវិញមួយ។ ធ្វើនៅលើកុំព្យូទ័រនេះដោយដំណើរការរូបភាពបែបបុរាណ គ្មានគំរូ គ្មានអ្វីត្រូវបានផ្ញើទៅទីណាទេ។ សូមមើលពាក្យបញ្ជាគំនូរប្លង់ដែលបានស្កេនផងដែរ។

### AUTODIM

ឈ្មោះខ្លី៖ `ADIM`។ វិមាត្រស្វ័យប្រវត្តិតាមច្បាប់។ {{cmd:AUTODIM}} វាស់វត្ថុដែលបានជ្រើស (ឬគំនូរប្លង់ទាំងមូល) ពីគែមកម្រិត និងបញ្ឈររបស់វា៖ ខ្សែវិមាត្រតាមចំហៀងដែលអ្នកជ្រើស (`Sides`), វិមាត្រទាំងមូលមួយនៅខាងក្រៅវា, ទទឹងនៃការបើកនីមួយៗ (ចន្លោះរវាងបន្ទាត់ជញ្ជាំងត្រង់គ្នា), អង្កត់ផ្ចិតសម្រាប់ទំហំរន្ធនីមួយៗ ហើយជាមួយ `Grid` ចន្លោះរវាងបន្ទាត់ក្រឡាចត្រង្គ។ វិមាត្រដែលមានរួចហើយមិនត្រូវបានធ្វើឡើងវិញទេ។ ជំហានមិនធ្វើវិញមួយ។ ធ្វើដោយច្បាប់នៅលើកុំព្យូទ័រនេះ គ្មានគំរូ។

### GRIDMOVE

ឈ្មោះខ្លី៖ `GM`។ ការផ្លាស់ទីបន្ទាត់ក្រឡាចត្រង្គនាំសំណុំទាំងមូលទៅតាម។ {{cmd:GRIDMOVE}} ផ្លាស់ទីបន្ទាត់ក្រឡាចត្រង្គ (បន្ទាត់នៅលើស្រទាប់ដែលឈ្មោះនិយាយ grid ឬ axis) និងអ្វីដែលព្យួរលើវា៖ ជញ្ជាំងដែលមានចុងនៅលើបន្ទាត់លាតដើម្បីដើរតាមវា ជញ្ជាំងតាមវាផ្លាស់ទីទាំងមូល សសរ (ប្លុកយោង និងរង្វង់នៅលើបន្ទាត់) ផ្ទាំងរង្វង់ និងស្លាករបស់វាផ្លាស់ទី ហើយវិមាត្រដែលចំណុចរបស់ពួកវានៅលើវាវាស់ចន្លោះថ្មី។ ផ្ដល់ចំណុចពីរ (មានតែផ្នែកឆ្លងកាត់បន្ទាត់ដែលរាប់) ឬ `Distance`។ ជំហានមិនធ្វើវិញមួយយកវាទាំងអស់ត្រឡប់មកវិញ។ ធ្វើដោយច្បាប់នៅលើកុំព្យូទ័រនេះ។

### DETAILS

ឈ្មោះខ្លី៖ `DET`។ ព័ត៌មានលម្អិតដែលរកឯងបាន។ {{cmd:DETAILS}} រក្សាព័ត៌មានលម្អិតផ្ទាល់របស់ក្រុមហ៊ុនអ្នក៖ `Add` ដាក់ប្លុកនៃគំនូរប្លង់នេះក្នុងបញ្ជី, `List` និង `Remove` គ្រប់គ្រងវា, `Find` ដាក់លំដាប់ពួកវាសម្រាប់អ្វីដែលបានជ្រើស (ឬអ្វីដែលអ្នកបានគូរចុងក្រោយ) តាមពាក្យនៅលើស្រទាប់របស់វា ឈ្មោះប្លុក ទម្រង់ហាច់ និងកំណត់ចំណាំ ប្រៀបធៀបនឹងឈ្មោះ និងកំណត់ចំណាំនៃព័ត៌មានលម្អិតនីមួយៗ ដូច្នេះក្បាលបង្អួចរកឃើញខ្នប់ឆ្ពោះទៅការលាបដែករបស់អ្នក។ ជ្រើសលេខ និងចំណុចមួយដើម្បីដាក់វា។ ជាមួយ `Hint` បើក (ក៏ Settings › CadCraft) ការជ្រើសអ្វីមួយដែលព័ត៌មានលម្អិតផ្គូផ្គងបានដាក់បន្ទាត់មួយនៅរបារស្ថានភាព។ បញ្ជីត្រូវបានរក្សានៅកម្មវិធីរុករកនេះ លើកុំព្យូទ័រនេះ ហើយបញ្ជីនោះជាអ្វីដែលត្រូវបានស្វែងរក។ `Share` ដាក់វានៅក្នុងថតឯកសាររបស់អ្នកផងដែរ (`.cadcraft/firm-details.json`, ជាមួយគំនូរប្លង់របស់ប្លុកនីមួយៗ)៖ `Pull` បន្ថែមអ្វីដែលក្រុមមាន ហើយអ្នកខ្វះ, `Push` បន្ថែមអ្វីដែលអ្នកមាន ហើយពួកគេខ្វះ, `Both` ធ្វើទាំងពីរ, ហើយមិនមានអ្វីត្រូវបានយកចេញពីម្ខាងទេ។ ដំបូងបើកថតឯកសារ ({{cmd:DOCUMENTS}}); នៅពេលថតនោះជាថត Team Cloud Plan, ក្រុមទាំងមូលចែករំលែកបញ្ជីមួយ។ ធាតុព័ត៌មានលម្អិតនៅផ្ទាំងបណ្ណាល័យមានប៊ូតុង **Add to my firm's details** ដែលដាក់វាក្នុងបញ្ជីដូចគ្នា។ ធ្វើដោយច្បាប់ដោយពាក្យនៅលើកុំព្យូទ័រនេះ គ្មានគំរូ។

### SKETCHFIX

ឈ្មោះខ្លី៖ `SKF`។ គំនូរដៃទៅជាធរណីមាត្រច្បាស់លាស់។ ចុច និងអូសខ្សែដៃសេរីមួយម្ដងមួយ (ប៊ិច កណ្ដុរ ឬម្រាមដៃ) បន្ទាប់មក Enter។ ខ្សែនីមួយៗត្រូវបានអានជាបន្ទាត់ រង្វង់ ធ្នូ ចតុកោណ ឬប៉ូលីឡាញ៖ បន្ទាត់ស្ទើរផ្ដេក និងបញ្ឈរត្រូវបានធ្វើឱ្យផ្ដេក និងបញ្ឈរពិតប្រាកដ, ខ្សែមូលបិទក្លាយជារង្វង់, ខ្សែបិទជាមួយជ្រុងកាត់ត្រង់បួនក្លាយជាចតុកោណ ហើយចុងនៃខ្សែត្រូវបានទាញចូលគ្នា និងទៅចុងដែលមាននៅក្នុងគំនូរប្លង់រួចហើយ។ ជំហានមិនធ្វើវិញមួយ។ ធ្វើដោយច្បាប់នៅលើកុំព្យូទ័រនេះ គ្មានគំរូ។

### SCANATTACH និងពាក្យបញ្ជាគំនូរប្លង់ដែលបានស្កេន

ឈ្មោះខ្លី៖ `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} គ្មាន។ ពួកវាធ្វើការលើរូបភាព ជំហានមិនធ្វើវិញមួយនីមួយៗ។ {{cmd:SCANATTACH}} បញ្ចូល PNG, JPEG, TIFF (ទំព័រមួយ ឬទាំងអស់) ឬទំព័រ PDF ដែលជារូបភាព។ {{cmd:SCANSCALE}} ធ្វើមាត្រដ្ឋានសន្លឹកពីចំណុចពីរដែលបានជ្រើស និងចម្ងាយពិត។ {{cmd:SCANALIGN}} ផ្លាស់ទី និងបង្វិលវាទៅចំណុចពីរ (`Scale the sheet to fit` Yes/No)។ {{cmd:SCANDESKEW}} បង្ហាញមុំនៃបន្ទាត់វែងនៃសន្លឹក ហើយបង្វិលសន្លឹកនៅពេលអ្នក `Accept` ឬផ្ដល់ `Value`។ {{cmd:SCANCLEAN}} ធ្វើឱ្យវាជាខ្មៅ និងស (`Threshold` Auto/Adaptive/Level, `Specks`) និង `Run`។ {{cmd:SCANCROP}} រក្សាបង្អួច។ {{cmd:SCANERASE}} លុប `Rectangle`, `Polygon` ឬ `Lasso`។ {{cmd:SCANTRACE}} តាមដានបន្ទាត់ និងធ្នូទៅលើស្រទាប់ថ្មី (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) ហើយរាយការណ៍អ្វីដែលវារកឃើញ និងអ្វីដែលវាបានទុកជារាស្ដ្រ។ {{cmd:SCANINFO}} បញ្ជីឯកសារដើម និងជំហាន។ {{cmd:RASTERSNAP}} បើក ឬបិទការចាប់ជាប់ទៅបន្ទាត់នៃសន្លឹកដែលបានស្កេន។ សូមមើលប្រធានបទ Scanned drawings and the trace។

### REGEN និង REGENALL

ឈ្មោះខ្លី៖ `RE` សម្រាប់ {{cmd:REGEN}}, `REA` សម្រាប់ {{cmd:REGENALL}}។ សាងសង់ឡើងវិញនូវអ្វីដែលគូរនៅលើអេក្រង់ពីគំនូរប្លង់៖ {{cmd:REGEN}} ផ្ទាំងដែលអ្នកកំពុងមើល (នៅលើសន្លឹក ម៉ូដែលដែលផ្ទាំងមើលរបស់វាបង្ហាញផងដែរ), {{cmd:REGENALL}} ផ្ទាំងទាំងអស់ ផ្ទាំងបំបែកអេក្រង់ទាំងអស់ និងគំនូរប្លង់បើកទាំងអស់។ ប្រើពួកវានៅពេលរូបភាពមើលទៅចាស់បន្ទាប់ពីការផ្លាស់ប្ដូរដោយស្គ្រីប ឬធំខ្លាំង ឬជំនួយបានកែគំនូរប្លង់; គំនូរប្លង់ខ្លួនវាមិនត្រូវបានប៉ះពាល់ឡើយ ដូច្នេះគ្មានអ្វីត្រូវមិនធ្វើវិញទេ។

### NAMEDVIEW

ឈ្មោះខ្លី៖ `NV`, `VIEWS`។ `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, បន្ទាប់មកឈ្មោះទិដ្ឋភាព។ `S` រក្សាទុកទិដ្ឋភាពនៅលើអេក្រង់, `W` បង្អួចដែលអ្នកជ្រើស, `R` បង្ហាញទិដ្ឋភាពដែលបានរក្សាទុក, `D` លុបមួយ, `?` បញ្ជីទិដ្ឋភាពនៃផ្ទាំងនេះ។ រក្សាទុកក្រោមឈ្មោះដែលមានរួចហើយជំនួសវា; ការផ្លាស់ប្ដូរនីមួយៗគឺជាជំហានមិនធ្វើវិញមួយ។ ទិដ្ឋភាពជារបស់ផ្ទាំងដែលពួកវាត្រូវបានរក្សាទុក។ DWG និង DXF រក្សាទុកពួកវា (តារាង VIEW); ទិដ្ឋភាពនៃសន្លឹកត្រឡប់មកលើសន្លឹកទីមួយវិញ ព្រោះឯកសារមិននិយាយថាមួយណា។

### UNDO និង REDO

ឈ្មោះខ្លី៖ `U` សម្រាប់ {{cmd:UNDO}}; {{cmd:REDO}} គ្មាន។ ក៏ {{key:Mod+Z}} និង {{key:Mod+Y}}។

### LAYER

ឈ្មោះខ្លី៖ `LA`។ ទៅកាន់ផ្ទាំង {{ui:Layers}}។

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`)៖ `Enter linetype for new objects` — `ByLayer`, `ByBlock` ឬឈ្មោះ (`?` បញ្ជីពួកវា៖ Continuous, របស់គំនូរប្លង់ និង DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE ជាមួយទំហំ `2` (ពាក់កណ្ដាល) និង `X2` (ទ្វេ))។ {{cmd:LWEIGHT}} (`LW`)៖ ទម្ងន់បន្ទាត់សម្រាប់វត្ថុថ្មីជា mm ឬ `ByLayer`, `ByBlock`, `Default`។ {{cmd:LTSCALE}} (`LTS`)៖ មាត្រដ្ឋានប្រភេទបន្ទាត់របស់គំនូរប្លង់ (អាចត្រឡប់វិញបាន)។ {{cmd:LWDISPLAY}} (`LWT`)៖ `Show lineweights [ON/OFF]` — ដូចគ្នានឹងប៊ូតុង {{ui:LWT}} នៅរបារស្ថានភាព។ សូមមើល [ទម្ងន់បន្ទាត់ និងប្រភេទបន្ទាត់](topic:units-papers-scales#line-weights-and-linetypes)។

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`)៖ `Enter object type to rename [LAyer/Block]`, `Enter old name`, បន្ទាប់មកឈ្មោះថ្មី; វត្ថុ ឬយោងធ្វើតាម។ {{cmd:LAYMRG}}៖ `Select object on layer to merge or [Name]` រហូតដល់ {{key:Enter}}, បន្ទាប់មក `Select object on target layer or [Name]` និង `Y`។ {{cmd:LAYDEL}}៖ `Select object on layer to delete or [Name]`, បន្ទាប់មក `Y`៖ ស្រទាប់ និងវត្ថុទាំងអស់នៅលើវាត្រូវបាត់ (មិនមែនស្រទាប់ 0, DEFPOINTS ឬស្រទាប់បច្ចុប្បន្នទេ)។ ជំហានមិនធ្វើវិញមួយនីមួយៗ។ សូមមើល [រៀបចំគំនូរប្លង់ជាមួយស្រទាប់](topic:layers#rename-merge-and-delete-layers)។

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

ស្រទាប់ដោយការជ្រើសវត្ថុ; ក៏នៅម៉ឺនុយ {{ui:Tools}} របស់ផ្ទាំង {{ui:Layers}}។ {{cmd:LAYISO}}៖ `Select objects on the layer(s) to be isolated`, បន្ទាប់មក {{key:Enter}}៖ ស្រទាប់ផ្សេងទាំងអស់ត្រូវបានបិទ។ {{cmd:LAYUNISO}} បើកវាឡើងវិញ។ {{cmd:LAYOFF}} និង {{cmd:LAYFRZ}}៖ `Select an object on the layer to be turned off` (ឬ frozen), ដដែលៗ; `U` យកមួយចុងក្រោយមកវិញ, {{key:Enter}} បញ្ចប់។ {{cmd:LAYMCUR}}៖ `Select object whose layer will become current`។ {{cmd:LAYON}} បើកស្រទាប់ទាំងអស់, {{cmd:LAYTHW}} ផ្អាកស្រទាប់ទាំងអស់។ ពាក្យបញ្ជានីមួយៗគឺជាជំហានមិនធ្វើវិញមួយ។ សូមមើល [រៀបចំគំនូរប្លង់ជាមួយស្រទាប់](topic:layers#work-on-layers-by-picking-objects)។

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} ចាប់ផ្ដើមគំនូរប្លង់ទទេ ហើយ {{cmd:OPEN}} បើក DWG ឬ DXF, នីមួយៗនៅក្នុងផ្ទាំងរបស់ខ្លួនលើគំនូរប្លង់ (គំនូរប្លង់ថ្មីដែលមិនបានប្រើត្រូវបានប្រើជំនួសផ្ទាំងថ្មី)។ បិទផ្ទាំងដែលមានការផ្លាស់ប្ដូរមិនទាន់រក្សាទុកសួរមុនសិន។ សូមមើល [បំបែកអេក្រង់](topic:split-screen)។

{{cmd:SAVE}} (ឈ្មោះខ្លី `QSAVE`, ក៏ {{key:Mod+S}}) ទាញយកច្បាប់ចម្លងក្នុងទម្រង់របស់គំនូរប្លង់៖ DWG បើវាបើកពី DWG, DXF បើពី DXF។ គំនូរប្លង់ថ្មីប្រើទម្រង់ដែលបានជ្រើសចុងក្រោយក្នុង Save as ក្នុងកម្មវិធីរុករកនេះ បើមិនដូច្នេះទេ DWG។

{{cmd:SAVEAS}} (ក៏ {{key:Mod+Shift+S}}) បើកប្រអប់ {{ui:Save a copy as}}៖ ជ្រើស {{ui:DWG}} (និង {{ui:Version}} របស់វា), {{ui:DXF R12}} ឬ {{ui:DXF 2000}}, បន្ទាប់មក {{ui:Save}}។ ការជ្រើសនេះនៅដដែលសម្រាប់គំនូរប្លង់នេះ និងសម្រាប់គំនូរប្លង់ថ្មីក្នុងកម្មវិធីរុករកនេះ។

{{cmd:DXFOUT}} ទាញយកច្បាប់ចម្លង DXF R12 ជានិច្ច ដោយមិនផ្លាស់ប្ដូរទម្រង់ដែល {{cmd:SAVE}} ប្រើ។

សូមមើល [ឯកសារ៖ អ្វីដែលបើក អ្វីដែលរក្សាទុក](topic:files#saving)។

### TOUR

ឈ្មោះខ្លី៖ `TUTORIAL`។ ចាប់ផ្ដើមដំណើរកម្សាន្តគំនូរដំបូងប្រាំមួយជំហានម្ដងទៀត។ សូមមើល [ការចាប់ផ្ដើម](topic:getting-started#prefer-to-be-guided)។

### TOOLBARDOCK

ឈ្មោះខ្លី៖ `TBDOCK`។ `Toolbar position [Top/Bottom/Left/Right]`។ សូមមើល [ការកំណត់](topic:settings#toolbar-position)។

### COMMANDLINE

ឈ្មោះខ្លី៖ `CMDLINE`។ `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`៖ ភ្ជាប់ ឬធ្វើឱ្យបន្ទាត់បញ្ជាអណ្តែត, ធ្វើវាជាមួយបន្ទាត់, សួរចំនួនបន្ទាត់ប្រវត្តិដែលត្រូវបង្ហាញ (0 ដល់ 12), ឬបើកប្រវត្តិ។ សូមមើល [ការកំណត់](topic:settings#command-line)។

### TOPAREA

`Top area [Standard/Compact]`៖ របារនៅខាងលើគំនូរប្លង់ដូចដែលវាធ្លាប់, ឬតូច។ សូមមើល [ការកំណត់](topic:settings#top-area)។

### POLARANG

`Enter polar angle step in degrees <90>`៖ ជំហានដែល {{ui:Polar}} tracking បន្ទាត់ខ្លួនឯងតាម (ច្រើនជាង 0, ដល់ 180)។ រក្សានៅកម្មវិធីរុករកនេះ។

### UNITS

ឈ្មោះខ្លី៖ `UN`។ របៀបដែលប្រវែងត្រូវបានសរសេរ និងវាយ។

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural និង Fractional៖ `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`។ ផ្សេងទៀត៖ `Enter number of decimal places (0 to 8)`។

វិមាត្រថ្មីអនុវត្តតាម។ ជំហានមិនធ្វើវិញមួយ។ ដូចគ្នានឹង {{ui:Length format}} និង {{ui:Precision}} នៅ {{ui:Current settings}}; សូមមើល [ហ្វីត និងអ៊ីញ្ច](topic:units-papers-scales#feet-and-inches-and-fractions)។

### GDSIN

ឈ្មោះខ្លី៖ `GDS`។ មើលប្លង់ IC (ឯកសារ GDSII stream)៖ lab spike, សម្រាប់មើល និងវាស់តែប៉ុណ្ណោះ។

- ឧបករណ៍ជ្រើសឯកសារយក ឯកសារ `.gds`; ជាមួយកោសិកាកំពូលច្រើន `Enter the top cell to draw`។
- ស្រទាប់ និងប្រភេទទិន្នន័យនីមួយៗក្លាយជាស្រទាប់គំនូរប្លង់ (`GDS 1`, `GDS 2/5`), យោង និងអារ៉ាយត្រូវបានដាក់ផ្ដេក ក្នុងឯកតាអ្នកប្រើរបស់ឯកសារ (ជាធម្មតាម៉ៃក្រូម៉ែត្រ)។ ជំហានមិនធ្វើវិញមួយ។ គ្មានអ្វីត្រូវបានក្លែងធ្វើ ឬពិនិត្យ ហើយឯកសារមិនត្រូវបានសរសេរត្រឡប់ទេ។

### DIAGRAM

ឈ្មោះខ្លី៖ `TEXTDIAGRAM`, `T2D`។ ដ្យាក្រាមពីអត្ថបទ។

- ប្រអប់មួយយកអត្ថបទ (ឬមួយបន្ទាត់ជាមួយ `;` រវាងសេចក្តីថ្លែង នៅបន្ទាត់បញ្ជា)៖ ដ្យាក្រាមលំហូរ Mermaid ដ្យាក្រាមសមាសធាតុ PlantUML D2 ឬបញ្ជីពី-ទៅ។
- `Specify the top left corner of the diagram`, បន្ទាប់មក `Specify the text height`។

ប្លុក និងការភ្ជាប់ជាវត្ថុធម្មតានៅលើស្រទាប់ `Diagram`, ដែលត្រូវបានជ្រើសនៅពេលវាបញ្ចប់។ ជំហានមិនធ្វើវិញមួយ។ សូមមើល [គូរដ្យាក្រាមពីអត្ថបទ](topic:text-to-diagram)។

### OLELIST

ឈ្មោះខ្លី៖ `OLES`។ វត្ថុ OLE ដែល DWG កាន់ ដែល CadCraft មិនអាចដាក់ដោយខ្លួនវាផ្ទាល់។

- បញ្ជីនីមួយៗ៖ លេខ ប្រភេទ ទំហំ ថាតើវារក្សារូបភាពឬអត់។
- `Enter an option [Place/eXit] <eXit>`៖ Place សួរលេខ ចុងក្រោមខាងឆ្វេង និងទទឹង ហើយគូរស៊ុមជាមួយរូបភាព។ ជំហានមិនធ្វើវិញមួយ; វត្ថុដែលបានរក្សាមិនផ្លាស់ប្ដូរ។ សូមមើល [រូបភាព](topic:pictures#objects-from-other-programs-ole)។

### SHXFONTS

ឈ្មោះខ្លី៖ `SHX`។ ពុម្ពអក្សរ SHX របស់អ្នក។

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} អានគ្រប់ `.shx` នៅក្នុងថតមួយ (CadCraft Studio; ម្ដងទៀតនៅចាប់ផ្ដើមនីមួយៗ), {{ui:Files}} យកឯកសារដែលបានជ្រើស (កម្មវិធីរុករក), {{ui:Reverse}} ដាក់អក្សរនៃពុម្ពអក្សរមួយចុងក្រោយ ដំបូងបង្អស់។ រចនាប័ទ្មអត្ថបទដែលដាក់ឈ្មោះពុម្ពអក្សរដែលបានផ្ទុកគូរជាវា។ សូមមើល [គូរអត្ថបទជាមួយពុម្ពអក្សរ SHX របស់អ្នក](topic:shx-fonts)។

### LIMITS

ទំហំរបស់គំនូរប្លង់ដែលត្រូវមានរបស់វា។

- `Specify lower left corner or [ON/OFF] <current>`៖ ចំណុចមួយ, `ON` ឬ `OFF`។
- `Specify upper right corner <current>`។

ក្រឡាចត្រង្គបំពេញដែនកំណត់, {{cmd:ZOOM}} All បង្ហាញពួកវា, ហើយជាមួយដែនកំណត់ ON ចំណុចនៅក្រៅត្រូវបានបដិសេធ (`**Outside limits`)។ ជំហានមិនធ្វើវិញមួយ; រក្សាក្នុង DWG និង DXF។ សូមមើល [កំណត់ដែនកំណត់គំនូរប្លង់](topic:drawing-limits)។

### AUNITS

ឈ្មោះខ្លី៖ `ANGUNITS`។ របៀបដែលមុំត្រូវបានបង្ហាញ និងវាយ។

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ឬសម្រាប់ពីរផ្សេងទៀត `Enter precision` (0 ដឺក្រេ, 2 នាទី, 4 វិនាទី, 5 ដល់ 8 ខ្ទង់ទសភាគនៃវិនាទី)។

ជំហានមិនធ្វើវិញមួយ; រក្សាក្នុង DWG និង DXF។ ដូចគ្នានឹង {{ui:Angle format}} នៅ {{ui:Current settings}}។ សូមមើល [វាយ និងបង្ហាញទិសដៅ និងមុំ](topic:bearings-and-angles)។

### APPLOAD

ឈ្មោះខ្លី៖ `AP`; ឬ {{ui:View}} › {{ui:More}} › {{ui:Load application…}}។ ប្រអប់ {{ui:Load applications}}៖ ផ្ទុក routine `.lsp` និងឯកសារ dialog `.dcl`, ដកចេញ, ផ្ទុកឡើងវិញពីប្រវត្តិ និង Startup Suite។ ពាក្យបញ្ជា `(defun c:NAME …)` របស់ routine ដំណើរការដូចពាក្យបញ្ជាផ្សេងទៀត។ សូមមើល [ផ្ទុកកម្មវិធី](topic:load-applications) និង [ដំណើរការ routine LISP](topic:run-lisp)។

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ឬ {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) បើកឯកសារឈ្មោះខ្លីរបស់អ្នក (បន្ទាត់ `ALIAS, *COMMAND`); {{ui:Save}} អនុវត្តវា។ {{cmd:REINIT}} អនុវត្តវាម្ដងទៀត។ សូមមើល [កែសម្រួលឈ្មោះខ្លីពាក្យបញ្ជា](topic:command-aliases)។

### OPTIONKEYS

ឈ្មោះខ្លី៖ `OPTKEYS`; ឬ {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} › {{ui:Edit…}}។ បើកឯកសារអក្សរជម្រើសរបស់អ្នក (បន្ទាត់ `COMMAND.OPTION, LETTERS` ដូចជា `ARRAY.PO, P`); {{ui:Save}} អនុវត្តវា ហើយ {{cmd:REINIT}} អនុវត្តវាម្ដងទៀត។ សូមមើល [ផ្ដល់អក្សររបស់អ្នកសម្រាប់ជម្រើសពាក្យបញ្ជា](topic:option-letters)។

### LISPEDIT

ឈ្មោះខ្លី៖ `VLIDE`; ឬ {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}។ បើកកម្មវិធីកែ LISP ដែលជាបង្អួចដែលនៅបើកក្បែរគំនូរប្លង់។

- អត្ថបទ៖ លេខបន្ទាត់ ដៃគូនៃវង់ក្រចកនៅកន្លែងសញ្ញាចុចត្រូវបានសម្គាល់ (ក្រហមនៅពេលគ្មាន), {{key:Enter}} ចូលចិត្តបន្ទាត់ថ្មីនៅក្រោមវង់ក្រចកបើក, {{key:Tab}} វាយដកឃ្លាពីរ, {{key:Esc}} ចាកចេញពីអត្ថបទ។
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}})៖ អានគ្រប់ទម្រង់ ដូច {{cmd:APPLOAD}} ធ្វើជាមួយឯកសារ ហើយធ្វើពាក្យបញ្ជា `c:` របស់វា។ ឯកសារបង្ហាញនៅបញ្ជីរបស់ {{cmd:APPLOAD}}។
- {{ui:Run selection}} ({{key:Ctrl+Enter}})៖ វាយតម្លៃទម្រង់ដែលបានជ្រើស ឬទម្រង់ដែលសញ្ញាកណ្ដុរនៅក្នុង។
- {{ui:Stop}}៖ បញ្ចប់ routine ដែលកំពុងដំណើរការ។
- {{ui:Console}}៖ អ្វីដែល routine បានបោះពុម្ព និងកំហុសនីមួយៗជាមួយបន្ទាត់របស់វា; ចុចកំហុសដើម្បីទៅទីនោះ។ អត្ថបទដំណើរការមួយទម្រង់ថ្នាក់កំពូលក្នុងមួយដង ដូច្នេះបន្ទាត់គឺរបស់ទម្រង់ ឬនៅខាងក្នុងវា បន្ទាត់ដែលហៅអនុគមន៍ដែលកំហុសដាក់ឈ្មោះ។
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}})៖ ឯកសារ `.lsp`។ អត្ថបទនៅតែត្រូវបានរក្សាក្នុងកម្មវិធីរុករកនេះ ដូច្នេះការបិទបង្អួចមិនបាត់វា។
- នៅក្បែរអត្ថបទ៖ អនុគមន៍ដែល routine កំណត់ អ្វីដែលវាហៅ ដែល LISP នេះមិនទាន់មាន, អ្វីដែលវាហៅ ដែលមិនកំណត់នៅក្នុងវា ឬមិនមែនជាស្ថាបត្យកម្មមួយ, និងបញ្ជីពេញលេញនៃអ្វីដែលបានបង្កើត និងអ្វីដែលមិនទាន់។

អត្ថបទដែលមានវង់ក្រចកដែលមិនបិទ ឬខ្សែអក្សរដែលមិនចប់ មិនត្រូវបានដំណើរការទេ៖ បន្ទាត់ត្រូវបានដាក់ឈ្មោះ។ គ្មានកម្មវិធីបំបាត់កំហុសជាជំហានៗ គ្មានចំណុចបញ្ឈប់ ឬបង្អួចមើលទេ។ សូមមើល [ដំណើរការ routine LISP](topic:run-lisp)។

### HELP

ឈ្មោះខ្លី៖ `?`។ បោះពុម្ពពាក្យបញ្ជានីមួយៗ ឈ្មោះខ្លីរបស់វា និងការពិពណ៌នាមួយបន្ទាត់ក្នុងប្រវត្តិបន្ទាត់បញ្ជា។ វាមិនបើកជំនួយនេះទេ៖ ចុច {{key:F1}} ឬចុច {{ui:Help}} សម្រាប់វា។

## ផ្នែកសំណួរជ្រើសវត្ថុ

នៅ `Select objects` ណាមួយ៖ ចុចវត្ថុ គូរបង្អួច (ពីឆ្វេងទៅស្ដាំ) និងការឆ្លងកាត់ (ពីស្ដាំទៅឆ្វេង) ជាមួយការចុចពីរ ឬចុច និងអូសខ្សែអួស ({{key:Space}} ពេលកំពុងអូស៖ បង្អួច ឆ្លងកាត់ fence), {{key:Shift}}+ចុច ដើម្បីយកចេញ, ហើយចុច {{key:Enter}} ដើម្បីបញ្ចប់។ អ្នកក៏អាចវាយ `ALL` (ទាំងអស់), `L` (វត្ថុចុងក្រោយ), `P` (Previous៖ អ្វីដែលពាក្យបញ្ជាចុងក្រោយប្រើ), `F` (Fence៖ វត្ថុដែលខ្សែនៃចំណុចឆ្លងកាត់; `U` យកចំណុចមកវិញ), `W` (Window), `C` (Crossing), `R` (របៀបយកចេញ៖ ការជ្រើសយកវត្ថុចេញ; សំណួរអានថា `Remove objects`) និង `A` (Add again)។ `?` បញ្ជីពួកវា។ ពួកវាមិនបង្ហាញនៅក្នុងសំណួរទេ។ {{key:Tab}} លើវត្ថុដែលត្រួតគ្នា បន្លិចវត្ថុបន្ទាប់; ចុចដើម្បីជ្រើសវា។ សូមមើល [ជ្រើសវត្ថុ](topic:select-objects)។

### ACCESS

ឈ្មោះខ្លី៖ `AX`។ គូរដោយគ្មានការមើលឃើញ។ {{cmd:ACCESS}} បើក ឬបិទ Access (`On`, `Off`) ហើយប្ដូរសំឡេងចាប់ជាប់ (`Sound`) និងពាក្យបញ្ជាដែលនិយាយ (`Voice`); វានិយាយស្ថានភាពជាមុនសិន។ ពេល Access បើក ពាក្យបញ្ជា និងលទ្ធផលគ្រប់ទាំងអស់ត្រូវបាននិយាយតាមអ្នកអានអេក្រង់របស់អ្នក ហើយតំបន់គំនូរប្លង់មានទស្សន៍ទ្រនិចក្ដារចុច។ ប្រធានបទជំនួយ "Draft without sight" មានគន្លឹះ។

### DESCRIBE

ឈ្មោះខ្លី៖ `DESC`។ និយាយអ្វីដែលគំនូរប្លង់មាន៖ វត្ថុប៉ុន្មាន ប្រភេទអ្វី ទំហំប៉ុណ្ណា ស្រទាប់ប៉ុន្មាន អ្វីដែលបានជ្រើស។ អានតែ; មិនផ្លាស់ប្ដូរអ្វីទេ។

### WHEREAMI

ឈ្មោះខ្លី៖ `WHERE`។ និយាយថាសញ្ញាកណ្ដុរនៅទីណា ជាឯកតាគំនូរប្លង់។

### NEARBY

និយាយអ្វីដែលនៅជិតសញ្ញាកណ្ដុរ ជិតបំផុតមុនគេ ម្នាក់ៗជាមួយចម្ងាយ និងចំហៀងដែលវាស្ថិតនៅ។

### SAYSEL

និយាយអ្វីដែលបានជ្រើស ម្ដងមួយប្រយោគក្នុងមួយវត្ថុ (ប្រវែងបន្ទាត់ ចុង និងមុំ; កាំ និងចំកណ្ដាលរង្វង់; អត្ថបទដូចដែលវាសរសេរ)។

### VOICE

បើក ឬបិទពាក្យបញ្ជាដែលនិយាយ។ ពួកវាត្រូវបានស្គាល់នៅលើកុំព្យូទ័រនេះ; ក្នុងកន្លែងដែលកម្មវិធីរុករកមិនអាចធ្វើបាន សំឡេងនៅបិទ លុះត្រាតែអ្នកជ្រើសសេវាអនឡាញរបស់កម្មវិធីរុករកនៅក្នុងការកំណត់។

### TOUCHCROSSHAIR

ឈ្មោះខ្លី៖ `TCX`។ កូសមីសដែលបានផ្លាស់ទីសម្រាប់គូរដោយម្រាមដៃ ដូច្នេះចុងម្រាមដៃមិនគ្របដណ្ដប់ចំណុចដែលអ្នកជ្រើស។ ខណៈពេលវាបើក ម្រាមដៃមួយនៅលើគំនូរប្លង់មិនជ្រើសទេ៖ វាផ្លាស់ទីកូសមីសដែលនៅពីលើម្រាមដៃ និងចំហៀងមួយ។ ការចាប់ជាប់វត្ថុ និងការតាមដានដើរតាមកូសមីស។ ការលើកម្រាមដៃឡើងមិនជ្រើសអ្វីទេ ហើយទុកកូសមីសនៅកន្លែងរបស់វា។ ដើម្បីជ្រើស ចុចប៊ូតុង {{ui:Click}} នៅជ្រុងនៃគំនូរប្លង់ ឬប៉ះកន្លែងណាមួយនៅលើគំនូរប្លង់ដោយម្រាមដៃទីពីរ។ សង្កត់ {{ui:Click}} ខណៈអ្នកផ្លាស់ទីម្រាមដៃផ្សេងដើម្បីអូស (បង្អួចជ្រើស ខ្សែអួស ឬចុង)។ ម្រាមដៃដែលសង្កត់ និងនៅស្ងៀម ឬប៊ូតុង {{ui:Enter}} គឺជា Enter។ ម្រាមដៃពីរ pan និង zoom ដូចពីមុន។ នៅជិតគែមខាងក្រោម និងគែមឆ្ងាយ កូសមីសខិតទៅម្រាមដៃ ដូច្នេះគ្រប់ផ្នែកនៃគំនូរប្លង់អាចទៅដល់។ ប៊ិច និងកណ្ដុរតែងតែជ្រើសដោយផ្ទាល់។

{{cmd:TOUCHCROSSHAIR}} និយាយស្ថានភាព ហើយសួរ `ON`, `OFF`, `Auto` (បើកតែកន្លែងដែលម្រាមដៃជាតួចង្អុលតែមួយ ដូច្នេះវាបិទនៅលើកុំព្យូទ័រដែលមានកណ្ដុរ), `Distance` (កូសមីសនៅចម្ងាយប៉ុន្មានពីម្រាមដៃ 24 ដល់ 240 ភីកសែល) ឬ `Side` (`Left`៖ ឡើងលើ និងទៅឆ្វេង សម្រាប់ដៃស្ដាំ; `Right` សម្រាប់ដៃឆ្វេង; ប៊ូតុងផ្លាស់ទៅជ្រុងផ្សេង)។ ជម្រើសដូចគ្នាមាននៅ Settings › CadCraft, ហើយនៅលើឧបករណ៍ដែលមានអេក្រង់ប៉ះ របារស្ថានភាពមានប៊ូតុង {{ui:Offset crosshair}}។ ជម្រើសត្រូវបានរក្សានៅកម្មវិធីរុករកនេះ។

### WHOHAS

និយាយថាអ្នកណាកំពុងបើកគំនូរប្លង់។ នៅក្នុង CadCraft Studio លើកុំព្យូទ័រ ការបើក DWG ឬ DXF សរសេរឯកសារចាក់សោតូចមួយនៅក្បែរវា (`Plan.dwg.cclock`៖ អ្នកណា តាំងពីពេលណា កំណែណា), ធ្វើឱ្យវាស្រស់ទុកមួយនាទីម្ដង ខណៈគំនូរប្លង់បើក ហើយយកវាចេញនៅពេលបិទ។ ការបើកគំនូរប្លង់ដែលអ្នកដទៃបើក និយាយថាអ្នកណា និងតាំងពីពេលណា ហើយផ្ដល់ {{ui:Open read-only}} (បន្ទាប់មក Save សួរឈ្មោះថ្មី), {{ui:Open anyway}} (អ្នកផ្សេងត្រូវបានប្រាប់នៅការធ្វើឱ្យស្រស់ក្រោយរបស់ពួកគេ) ឬ {{ui:Cancel}}។ ការរក្សាទុកលើឯកសារដែលអ្នកដទៃបើកសួរមុនសិន។ ការចាក់សោដែលមិនបានធ្វើឱ្យស្រស់ក្នុងប្រាំនាទីត្រូវបាននិយាយថាចាស់៖ ច្បាប់ចម្លងផ្សេងបានបិទដោយមិនរក្សាទុក ឬកុំព្យូទ័រគេង។

{{cmd:WHOHAS}} សួរ `Current` (គំនូរប្លង់បើក), `File` (ជ្រើសមួយ), `FOlder` (ជ្រើសថត៖ គំនូរប្លង់ទាំងអស់ក្នុងនោះដែលបើកនៅកន្លែងណាមួយត្រូវបានបញ្ជី), `Path` (វាយផ្លូវពេញ) ឬ `Name` (ឈ្មោះដែលអ្នកដទៃឃើញ; ឈ្មោះគណនីរបស់អ្នកពេលអ្នកចូល)។ Studio អាចទៅដល់តែថតដែលអ្នកបានជ្រើសប៉ុណ្ណោះ; សម្រាប់គំនូរប្លង់ដែលបើកពីថតដែលមិនដែលត្រូវបានជ្រើស វានិយាយម្ដងថាវាមិនអាចកត់សម្គាល់គំនូរប្លង់ថាបើកបានទេ; `FOlder` ជ្រើសថត ហើយការចាក់សោធ្វើការនៅទីនោះចាប់ពីពេលនោះ។ ការចាក់សោគឺជាកំណត់ហេតុសម្រាប់មនុស្ស មិនមែនជារបាំងឡើយ៖ កម្មវិធីផ្សេងអាចនៅតែសរសេរឯកសារ។ នៅក្នុងកម្មវិធីរុករក គ្មានថតដើម្បីមើលទេ ហើយពាក្យបញ្ជានិយាយដូច្នេះ។

### OVERKILL

លុបវត្ថុស្ទួន ហើយរៀបចំបន្ទាត់ និងធ្នូដែលត្រួតគ្នា សម្រាប់គំនូរប្លង់ដែលមកដល់ពេញដោយបន្ទាត់ស្ទួន។ `Select objects to clean up`, {{key:Enter}}, បន្ទាប់មក {{key:Enter}} ម្ដងទៀតដើម្បីសម្អាតជាមួយការកំណត់ដែលបង្ហាញ ឬប្ដូរមួយជាមុន៖

- `Tolerance`៖ ចំណុចពីរត្រូវនៅជិតប៉ុនណាទើបរាប់ជាដូចគ្នា (0.000001 ដំបូង; 0 មានន័យថាដូចគ្នាពិតប្រាកដ)។
- `Ignore`៖ លក្ខណៈសម្បត្តិដែលអាចខុសគ្នារវាងវត្ថុពីរដែលដូចគ្នាផ្សេងទៀត។ វាយឈ្មោះដើម្បីប្ដូរ៖ `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ឬ `None` / `All`។ {{key:Enter}} នៅពេលរួចរាល់។
- `Overlap`៖ បើក ឬបិទ។ បើក បន្ទាត់នៅលើបន្ទាត់ត្រង់តែមួយដែលត្រួតគ្នា ក្លាយជាបន្ទាត់មួយ (បន្ទាត់ដែលនៅខាងក្នុងបន្ទាត់ផ្សេងត្រូវបានលុបសាមញ្ញ) ហើយធ្នូនៅលើរង្វង់តែមួយដែលត្រួតគ្នា ក្លាយជាធ្នូមួយ; ធ្នូដែលបិទវិលពេញមួយជុំ ក្លាយជារង្វង់ ហើយធ្នូដែលនៅលើរង្វង់ត្រូវបានលុប។
- `Ends`៖ បើក ឬបិទ។ បើក បន្ទាត់នៅលើបន្ទាត់ត្រង់តែមួយ និងធ្នូនៅលើរង្វង់តែមួយ ដែលប៉ះត្រឹមចុងដល់ចុង ក្លាយជាផ្នែកមួយ។

វត្ថុនីមួយៗនៃប្រភេទត្រូវបានពិនិត្យសម្រាប់ស្ទួន៖ វត្ថុពីរជាស្ទួនពេលធរណីមាត្ររបស់វាដូចគ្នាក្នុងកម្រិតអនុញ្ញាត ហើយស្រទាប់ ពណ៌ ប្រភេទបន្ទាត់ មាត្រដ្ឋានប្រភេទបន្ទាត់ ទម្ងន់បន្ទាត់ កម្រាស់ ភាពថ្លា និងកម្ពស់របស់ពួកវាត្រូវគ្នា (ដកអ្វីដែលអ្នកបានមិនអើពើ)។ បន្ទាត់ និងប៉ូលីឡាញបើកក៏ត្រូវគ្នានៅពេលគូរបញ្ច្រាសផងដែរ។ វត្ថុដំបូងក្នុងលំដាប់គូរនៅដដែល ហើយរក្សាលក្ខណៈសម្បត្តិរបស់ខ្លួន។ ពាក្យបញ្ជារាយការណ៍ថាវាបានត្រួតពិនិត្យវត្ថុប៉ុន្មាន និងលុបប៉ុន្មាន៖ ស្ទួន ផ្នែកត្រួតគ្នាដែលបានបញ្ចូលគ្នា ផ្នែកដែលបានភ្ជាប់ចុងដល់ចុង។ {{cmd:UNDO}} មួយយកវាទាំងអស់ត្រឡប់មកវិញ។ ការកំណត់នៅដដែលរហូតដល់អ្នកបិទបង្អួចគំនូរប្លង់។

វាទុកចោល៖ វត្ថុនៅលើស្រទាប់ដែលចាក់សោ និងវត្ថុលាក់។ វាមិនបញ្ចូលបន្ទាត់ដែលមានកម្ពស់ (Z) (ច្បាប់ចម្លងពិតប្រាកដនៃពួកវានៅតែត្រូវបានយកចេញ) ហើយវាមិនប៉ះផ្នែកនៅក្នុងប៉ូលីឡាញ (ពួកវាមិនត្រូវបានកាត់ស្រាល) បន្ទាត់ដែលនៅលើផ្នែកប៉ូលីឡាញ ឬប៉ូលីឡាញបិទដែលគូរបញ្ច្រាស។

### DRAWORDER

ផ្លាស់ប្ដូរវត្ថុណាដែលគូរនៅមុខ។ `Select objects to re-order`, {{key:Enter}}, បន្ទាប់មក `Above objects`, `Under objects`, `Front` ឬ `Back` ({{key:Enter}} = `Back`)។ `Above objects` និង `Under objects` សួរវត្ថុយោង៖ ការជ្រើសទៅមុខ​ផ្ទាល់នៃវត្ថុយោងដែលនៅមុខបំផុតក្នុងចំណោមពួកវា ឬនៅក្រោយ​ផ្ទាល់នៃវត្ថុយោងដែលនៅក្រោយបំផុត។ វត្ថុដែលបានជ្រើសរក្សាលំដាប់របស់ខ្លួនក្នុងចំណោមពួកវា។ ជំហានមិនធ្វើវិញមួយ។ លំដាប់ត្រូវបានរក្សាជាមួយគំនូរប្លង់ក្នុង DWG និង DXF ដែលជាលំដាប់ដែលវត្ថុត្រូវបានសរសេរ។

នៅលើអេក្រង់ វត្ថុនីមួយៗត្រូវបានគូរតាមលំដាប់របស់គំនូរប្លង់ ដូចកម្មវិធីផ្សេងដែលបើកឯកសារគូរវា៖ ហាច់រឹង ប៉ូលីឡាញទូលាយ ឬម៉ាស់អត្ថបទគ្របលើបន្ទាត់ និងអត្ថបទដែលនៅពីក្រោយវា ហើយអ្វីដែលនៅមុខវាគ្របលើវា។ កន្លែងដែលបន្ទាត់ប្រសព្វអត្ថបទ ទាំងពីរបង្ហាញ។ រូបភាព និងទំព័រ PDF ដែលភ្ជាប់នៅក្រោមបន្ទាត់។ នៅក្នុងគំនូរប្លង់ធំណាស់ ដែលការបំពេញ និងបន្ទាត់ត្រួតគ្នា ហើយជំនួសគ្នាច្រើនជាង 256 ដង ទីមួយ 256 រក្សាលំដាប់របស់ពួកវា ហើយដែលនៅសល់គូរការបំពេញរបស់ពួកវានៅក្រោមបន្ទាត់ ដូច្នេះការគូរឡើងវិញនៅតែលឿន។

### TEXTTOFRONT

នាំអត្ថបទ វិមាត្រ និងខ្សែចង្អុលមកមុខអ្វីផ្សេងទាំងអស់នៅលំហបើក៖ `Text`, `Dimensions`, `Leaders` ឬ `All` ({{key:Enter}} = `All`)។ ជំហានមិនធ្វើវិញមួយ។ វានិយាយដូច្នេះនៅពេលគ្មានអ្វីនៅ ឬនៅពេលពួកវានៅមុខរួចហើយ។

### HATCHTOBACK

ផ្ញើហាច់ទាំងអស់នៃលំហបើកទៅក្រោយអ្វីផ្សេងទាំងអស់ ដូច្នេះការបំពេញឈប់គ្របបន្ទាត់ និងអត្ថបទនៅក្នុងឯកសារដែលបានរក្សាទុក។ គ្មានសំណួរ។ ជំហានមិនធ្វើវិញមួយ។

### ISOLATEOBJECTS

ឈ្មោះខ្លី៖ `ISOLATE`។ បង្ហាញតែវត្ថុដែលបានជ្រើស; អ្វីៗផ្សេងទៀតនៅក្នុងលំហនេះចេញពីការមើលរហូតដល់ {{cmd:UNISOLATEOBJECTS}}។ មិនដូច {{cmd:LAYISO}} វាធ្វើការលើវត្ថុដែលអ្នកជ្រើស មិនថាស្រទាប់របស់ពួកវាជាអ្វីឡើយ ហើយមិនផ្លាស់ប្ដូរស្រទាប់ណាមួយឡើយ។ វត្ថុដែលលាក់មិនត្រូវបានគូរ ជ្រើស ចាប់ជាប់ zoom ឬបោះពុម្ពទេ ហើយពាក្យបញ្ជាដែលយក `ALL` រំលងពួកវា។ អ្វីដែលអ្នកគូរខណៈវត្ថុត្រូវបានដាច់ដោយឡែក បង្ហាញដូចធម្មតា។

នេះសម្រាប់ session តែប៉ុណ្ណោះ៖ គ្មានអ្វីពាក់ព័ន្ធនឹងវាត្រូវបានរក្សាជាមួយគំនូរប្លង់ទេ វាមិនមែនជាជំហានមិនធ្វើវិញទេ ហើយការបើកគំនូរប្លង់ម្ដងទៀតបង្ហាញអ្វីៗទាំងអស់។ ខណៈវត្ថុត្រូវបានលាក់ របារស្ថានភាពបង្ហាញប៊ូតុងដែលមានចំនួនរបស់វា; ចុចវាដើម្បីបង្ហាញពួកវាម្ដងទៀត។

### HIDEOBJECTS

លាក់វត្ថុដែលបានជ្រើសរហូតដល់ {{cmd:UNISOLATEOBJECTS}}។ ច្បាប់ដូចគ្នានឹង {{cmd:ISOLATEOBJECTS}}៖ សម្រាប់ session តែប៉ុណ្ណោះ មិនត្រូវបានរក្សា មិនមែនជាជំហានមិនធ្វើវិញ។

### UNISOLATEOBJECTS

ឈ្មោះខ្លី៖ `UNISOLATE`, `UNHIDE`។ បង្ហាញវត្ថុទាំងអស់ដែលត្រូវបានលាក់ដោយ {{cmd:ISOLATEOBJECTS}} ឬ {{cmd:HIDEOBJECTS}} ម្ដងទៀត ហើយនិយាយថាប៉ុន្មានបានត្រឡប់មកវិញ។

### LAYLOCKFADE

កំណត់ថាវត្ថុនៅលើស្រទាប់ដែលចាក់សោមើលទៅយ៉ាងណា ហើយថាតើការចុចឈានដល់ពួកវាឬអត់។ វានិយាយស្ថានភាពបច្ចុប្បន្ន បន្ទាប់មកយក៖

- លេខពី 0 ដល់ 90៖ បរិមាណព្រាលជាភាគរយ (50 ដំបូង)។ 0 បិទការព្រាល។
- `ON` ឬ `OFF`៖ បើក ឬបិទការព្រាល រក្សាបរិមាណ។
- `Pick` បន្ទាប់មក `Yes` ឬ `No`៖ តើការចុចអាចជ្រើសវត្ថុនៅលើស្រទាប់ចាក់សោពេលគ្មានពាក្យបញ្ជាកំពុងដំណើរការឬទេ? `No` (លំនាំដើម)៖ ពួកវាមិនអាចជ្រើសបានទាល់តែសោះ។ `Yes`៖ ការចុច ឬបង្អួចជ្រើសពួកវា ដូច្នេះ{{ui:Properties}} អាចបង្ហាញពួកវា; ពួកវានៅតែមិនអាចផ្លាស់ប្ដូរបាន ហើយ `Select objects` របស់ពាក្យបញ្ជាផ្ទាល់មិនយកពួកវាឡើយ។

ការចាប់ជាប់វត្ថុរកវត្ថុនៅលើស្រទាប់ចាក់សោក្នុងវិធីណាក៏ដោយ។ ការបោះពុម្ពមិនត្រូវបានព្រាលឡើយ។ ការកំណត់ទាំងពីរជារបស់អ្នក មិនមែនរបស់គំនូរប្លង់ទេ ហើយក៏នៅក្នុង {{ui:Settings}} ក្រោម {{ui:Locked layers}} ផងដែរ។

### BURST

ផ្ចាញ់យោងប្លុក ហើយរក្សាអ្វីដែលគុណលក្ខណៈរបស់វានិយាយ។ `Select block references to burst`, {{key:Enter}}៖ យោងនីមួយៗត្រូវបានជំនួសដោយវត្ថុនៃប្លុក ហើយតម្លៃគុណលក្ខណៈដែលមើលឃើញនីមួយៗក្លាយជាអត្ថបទសាមញ្ញនៅលើស្រទាប់របស់គុណលក្ខណៈនោះ (គុណលក្ខណៈនៅស្រទាប់ 0 ធ្លាក់លើស្រទាប់របស់យោង ដូចវត្ថុផ្សេងនៃប្លុកនៅស្រទាប់ 0)។ គុណលក្ខណៈមិនមើលឃើញត្រូវបានលុប។ ប្លុកនៅខាងក្នុងប្លុកនៅជាយោងប្លុក។ ជំហានមិនធ្វើវិញមួយ; វារាយការណ៍ថាយោងប៉ុន្មានត្រូវបានផ្ចាញ់ និងតម្លៃគុណលក្ខណៈប៉ុន្មានត្រូវបានប្ដូរទៅជាអត្ថបទ។

វាបដិសេធគំនូរប្លង់ដែលភ្ជាប់ដោយឈ្មោះ (ភ្ជាប់វាជាមុនសិន ឬចម្លងពីវាជាមួយ {{cmd:NCOPY}})។ វាទុកវត្ថុដែលបានជ្រើសផ្សេងទៀតចោល។ សម្រាប់យោងប្លុក {{cmd:EXPLODE}} ផ្ដល់វត្ថុដូចគ្នា; {{cmd:BURST}} យកតែយោងប្លុកប៉ុណ្ណោះ ហើយរាប់អត្ថបទគុណលក្ខណៈ។

### TXT2MTXT

ឈ្មោះខ្លី៖ `T2M`។ បញ្ចូលអត្ថបទមួយបន្ទាត់ទៅជាអត្ថបទកថាខណ្ឌមួយ។ `Select single-line text to join`, {{key:Enter}}, បន្ទាប់មក `Paragraph` (បន្ទាត់ត្រូវបានភ្ជាប់ ហើយរុំទៅទទឹងនៃបន្ទាត់ធំបំផុត) ឬ `Lines` (អត្ថបទនីមួយៗនៅជាបន្ទាត់របស់ខ្លួន); {{key:Enter}} យកមួយដែលបានប្រើចុងក្រោយ។ បន្ទាត់ត្រូវបានតម្រៀបពីលើចុះក្រោម បន្ទាប់មកពីឆ្វេងទៅស្ដាំ តាមទិសដៅនៃអត្ថបទលើ។ កថាខណ្ឌព្យួរពីជ្រុងលើខាងឆ្វេងនៃអត្ថបទលើ ហើយយកកម្ពស់ ការបង្វិល រចនាប័ទ្ម ស្រទាប់ និងពណ៌របស់វា។ ជំហានមិនធ្វើវិញមួយ។

អត្ថបទដែលជាអត្ថបទកថាខណ្ឌរួចហើយ អត្ថបទទទេ និងវត្ថុផ្សេងក្នុងការជ្រើស ត្រូវបានទុកចោល ហើយពាក្យបញ្ជានិយាយប៉ុន្មាន។

### NCOPY

ចម្លងវត្ថុចេញពីយោងប្លុក ឬគំនូរប្លង់ដែលភ្ជាប់ ចូលទៅក្នុងគំនូរប្លង់ ដោយមិនបំបែកអ្វីឡើយ។ `Pick an object inside a block reference or a linked drawing`៖ វត្ថុដែលនៅជិតការជ្រើសបំផុតត្រូវបានចម្លងកន្លែងដែលវាបង្ហាញ មិនថាវានៅជម្រៅប៉ុនណានៃប្លុកនោះទេ; ជ្រើសបន្ថែម បន្ទាប់មក {{key:Enter}}។ បន្ទាប់ `Base point to move the copies`៖ {{key:Enter}} ទុកពួកវានៅកន្លែង ឬផ្ដល់ចំណុចមូលដ្ឋាន និងចំណុចទីពីរ។ ពាក្យបញ្ជាទាំងមូលគឺជាជំហានមិនធ្វើវិញមួយ។

ច្បាប់ចម្លងយកស្រទាប់ដែលវាបង្ហាញនៅលើ៖ វត្ថុនៅស្រទាប់ 0 នៅខាងក្នុងប្លុក ធ្លាក់ទៅស្រទាប់នៃយោងដែលវាស្ថិតនៅ ហើយពណ៌ ByBlock ក្លាយជាពណ៌របស់យោងនោះ។ ពីគំនូរប្លង់ដែលភ្ជាប់ ស្រទាប់ `Plan|Walls` ក្លាយជា `Plan$0$Walls` (ឈ្មោះដែលការភ្ជាប់ផ្ដល់)។ ត្រូវបានធ្វើជាមួយពណ៌ ប្រភេទបន្ទាត់ និងទម្ងន់បន្ទាត់របស់ស្រទាប់ភ្ជាប់។ តម្លៃរបស់គុណលក្ខណៈត្រូវបានចម្លងជាអត្ថបទ។ យោងប្លុកនៅលើស្រទាប់ចាក់សោមិនអាចជ្រើសបានទេ។

### FLATTEN

កំណត់កម្ពស់ (Z) និងកម្រាស់នៃវត្ថុដែលបានជ្រើសទៅ 0។ `Select objects to flatten`, {{key:Enter}}។ វាក៏ធ្វើឱ្យវត្ថុនៅក្នុងនិយមន័យប្លុកដែលការជ្រើសប្រើ (និងប្លុកនៅខាងក្នុងទាំងនោះ) រាបស្មើផងដែរ ដូច្នេះយោងទាំងអស់ទៅប្លុកទាំងនោះផ្លាស់ប្ដូរ; ភ្ជាប់គំនូរប្លង់ត្រូវបានទុកដូចដែលវាស្ថិត។ ជំហានមិនធ្វើវិញមួយ; វារាយការណ៍ថាវត្ថុប៉ុន្មានបានផ្លាស់ប្ដូរ ហើយនិយាយដូច្នេះនៅពេលគ្មានអ្វីមានកម្ពស់ ឬកម្រាស់។

អ្វីដែល CadCraft រក្សាពីវិមាត្រទីបីនៅក្នុងគំនូរប្លង់ 2D គឺ៖ កម្ពស់នៅលើរង្វង់ ធ្នូ អេលីប្ស ចំណុច អត្ថបទ យោងប្លុក ហាច់ ខ្សែចង្អុល និងប៉ូលីឡាញ (កម្ពស់របស់ពួកវា), កម្ពស់នៅចុងនីមួយៗនៃបន្ទាត់, និងកម្រាស់នៅលើបន្ទាត់ រង្វង់ ធ្នូ ប៉ូលីឡាញ ចំណុច និងអត្ថបទ ដូចដែលឯកសារមាន។ {{cmd:FLATTEN}} សម្អាតពួកវាឱ្យត្រឹមត្រូវ។ វាមិនប៉ះម៉ូដែល 3D នៅផ្ទាំង 3D, ផ្ទៃ 3D ឬវត្ថុរឹងទេ; ហើយវត្ថុដែលគូរក្នុងយន្តហោះទំនោរត្រូវបាននាំចូលទៅក្នុងយន្តហោះគំនូរប្លង់រួចហើយនៅពេលឯកសារត្រូវបានបើក។

### BREAKLINE

គូរបន្ទាត់ជាមួយនិមិត្តសញ្ញាបំបែក សម្រាប់ទិដ្ឋភាពដែលត្រូវបានកាត់ខ្លី។ វានិយាយទំហំ និងការលាតបច្ចុប្បន្ន បន្ទាប់មក `First point of the break line` (ឬ `Size` / `Extension` ដើម្បីផ្លាស់ប្ដូរវាជាមុនសិន), `Second point`, និង `Where the break symbol sits`៖ ចុចតាមបន្ទាត់ ឬ {{key:Enter}} សម្រាប់កណ្ដាល។ លទ្ធផលគឺជាប៉ូលីឡាញមួយនៅលើស្រទាប់បច្ចុប្បន្ន៖ បន្ទាត់ ដែលលាតហួសចំណុចនីមួយៗតាមការលាត ជាមួយខ្សែ Z ដែលមានកម្ពស់ដូចទំហំ ហើយវែងពាក់កណ្ដាល។

`Size` និង `Extension` ត្រូវបានចងចាំជាការកំណត់របស់អ្នក (ទំហំចាប់ផ្ដើមនៅពីរដងនៃកម្ពស់អត្ថបទវិមាត្រ គុណនឹងមាត្រដ្ឋានវិមាត្រ; ការលាតនៅពាក់កណ្ដាលទំហំ)។ {{key:Enter}} ធ្វើម្ដងទៀតនូវពាក្យបញ្ជា។

### AUDIT

ពិនិត្យគំនូរប្លង់ដែលបើកសម្រាប់ការខូច ហើយជួសជុលវា។ {{cmd:AUDIT}} មើលវត្ថុនីមួយៗក្នុងម៉ូដែល នៅលើសន្លឹក និងនៅខាងក្នុងប្លុក ហើយតារាងស្រទាប់ ហើយបញ្ជីអ្វីដែលវារកឃើញតាមប្រភេទ៖

- លេខដែលមិនមែនជាចំនួនកំណត់ ឬធំដោយមិនសមហេតុផល;
- វត្ថុដែលគ្មានទំហំ៖ បន្ទាត់ដែលគ្មានប្រវែង រង្វង់ដែលគ្មានកាំ ប៉ូលីឡាញដែលមានកន្លែងតែមួយ អត្ថបទដែលគ្មានអក្សរ ឬកម្ពស់ យោងប្លុកដែលមានមាត្រដ្ឋានសូន្យ;
- វត្ថុនៅលើស្រទាប់ដែលគំនូរប្លង់មិនមាន; យោងទៅប្លុកដែលមិននៅ; ឈ្មោះរចនាប័ទ្មអត្ថបទ និងវិមាត្រ និងឈ្មោះប្រភេទបន្ទាត់ដែលមិននៅក្នុងគំនូរប្លង់;
- ប្លុកដែលមានខ្លួនវា ដោយផ្ទាល់ ឬតាមរយៈប្លុកផ្សេង;
- វត្ថុដែលចែករំលែកលេខសម្គាល់ កូដ ឬលេខឯកសារ;
- វិមាត្រដែលគ្មានចំណុចដែលវាស់ពី និងហាច់ដែលព្រំដែនរបស់វាមិនមែនជារូបរាងបិទ។

បន្ទាប់មកវាសួរ `Fix them? [Yes/No]`។ `No` មិនផ្លាស់ប្ដូរអ្វីទេ។ `Yes` ជួសជុលអ្វីៗទាំងអស់ក្នុងជំហានមិនធ្វើវិញមួយ៖ អ្វីដែលមិនអាចគូរបានត្រូវបានយកចេញ (លេខមិនល្អ ឥតទំហំ ប្លុកដែលបាត់ វិមាត្រខូច ហាច់ដែលគ្មានព្រំដែនប្រើបាន យោងដែលបិទរង្វង់នៃប្លុក); ស្រទាប់ដែលបាត់ត្រូវបានបង្កើត; ឈ្មោះរចនាប័ទ្ម និងប្រភេទបន្ទាត់ដែលមិនស្គាល់ត្រឡប់ទៅលំនាំដើម; កូដដែលចែករំលែកត្រូវបានជំនួស។ វាបោះពុម្ពថាតើវត្ថុប៉ុន្មានត្រូវបានយកចេញ និងប៉ុន្មានត្រូវបានជួសជុល។ ការរកឃើញដូចគ្នាក៏បង្ហាញនៅផ្ទាំងបញ្ហា ម្ដងម្នាក់ៗជាមួយ {{ui:Repair}} របស់វា។

វាមិនបដិសេធអ្វីឡើយ ប៉ុន្តែវាពិនិត្យតែអ្វីដែល CadCraft ខ្លួនវាគូរប៉ុណ្ណោះ៖ ទិន្នន័យដែលរក្សាសម្រាប់កម្មវិធីផ្សេង (វត្ថុរឹង 3D, វត្ថុ OLE) មិនត្រូវបានបើក។

### RECOVER

បើកឯកសារ DXF ឬ DWG ដែលខូច។ {{cmd:RECOVER}} សួរឯកសារ អានអ្វីដែលអាចអាន ជំនួសឱ្យការបដិសេធឯកសារ បញ្ជីអ្វីដែលវារំលង ឬបានសន្មត់ បន្ទាប់មកពិនិត្យ និងជួសជុលគំនូរប្លង់ដូចដែល {{cmd:AUDIT}} ធ្វើជាមួយ `Yes`។

- DXF៖ បន្ទាត់ដែលមិនមែនជាផ្នែកនៃគូកូដ និងតម្លៃ ត្រូវបានរំលងរហូតដល់គូទាំងនោះត្រូវគ្នាម្ដងទៀត; ផ្នែកដែលមិនមានទីបញ្ចប់ ត្រូវបានបិទ; ឯកសារដែលកាត់ខ្លី ត្រូវបានអានរហូតដល់ចំណុចកាត់; ឯកសារ DXF ទ្វេដែលកាត់ខ្លី ត្រូវបានអានរហូតដល់តម្លៃទាំងមូលចុងក្រោយរបស់វា។ នៅពេលផ្នែក ប្លុក ឬវត្ថុនៅតែមិនអាចអានបាន វាត្រូវបានទុកចោល ហើយដាក់ឈ្មោះ ហើយការអានបន្តទៅពីវា។
- DWG៖ វត្ថុដែលមិនឆ្លងកាត់ការត្រួតពិនិត្យ ឬមិនអាចឌិកូដបាន ត្រូវបានទុកចោល ហើយបញ្ជីវត្ថុដែលបានបាត់ត្រូវបានសាងសង់ឡើងវិញ ដោយដើរតាមទិន្នន័យវត្ថុ។

ឯកសារនៅលើថាសមិនត្រូវបានផ្លាស់ប្ដូរឡើយ។ គំនូរប្លង់ដែលបានស្ដារឡើងវិញបើកដោយមិនបានរក្សាទុក៖ រក្សាទុកវាក្រោមឈ្មោះថ្មី។ ឯកសារដែលមិនអាចអានអ្វីបានសោះ ត្រូវបានបដិសេធ ជាមួយមូលហេតុ។

### LEGACYTEXT

បំប្លែងអត្ថបទដែលវាយជាមួយពុម្ពអក្សរវៀតណាម 8 ប៊ីតចាស់ទៅជា Unicode។ ឈ្មោះខ្លី `TEXTTOUNICODE` និង `VNTEXT`។

គំនូរប្លង់វៀតណាមចាស់ទុកអត្ថបទរបស់ពួកវាជាតួអក្សរលោកខាងលើដែលមានតែពុម្ពអក្សរប៉ុណ្ណោះដែលប្ដូរជាវៀតណាម៖ អត្ថបទ TCVN3 នៅក្នុងពុម្ពអក្សរ ABC (`.VnTime`, `.VnArial` និងពុម្ពអក្សរអក្សរធំដែលឈ្មោះបញ្ចប់ដោយ `H`), និងអត្ថបទ VNI នៅក្នុងពុម្ពអក្សរ VNI (`VNI-Times`)។ CadCraft បង្ហាញអត្ថបទបែបនេះដូចដែលវាអាន ភ្លាមៗពេលគំនូរប្លង់បើក តាមពុម្ពអក្សរនៃរចនាប័ទ្មអត្ថបទរបស់វា វត្ថុរបស់វា ឬផ្នែកមួយនៅក្នុងអត្ថបទកថាខណ្ឌ; ឯកសារនៅតែមានតួអក្សរចាស់។

{{cmd:LEGACYTEXT}} និយាយថាតើអត្ថបទប៉ុន្មានត្រូវបានរកឃើញនៅក្នុងការអ៊ិនកូដនីមួយៗ ហើយសួរ `Convert … to Unicode?`។ `Yes` សរសេរឡើងវិញនូវអ្វីៗទាំងអស់ (ម៉ូដែល សន្លឹក ប្លុក តម្លៃគុណលក្ខណៈ និងនិយមន័យ) ហើយផ្ដល់ឱ្យរចនាប័ទ្មអត្ថបទនូវពុម្ពអក្សរ Unicode (Times New Roman, Arial ឬ Courier New តាមប្រភេទពុម្ពអក្សរចាស់) ក្នុងជំហានមិនធ្វើវិញមួយ។ ទម្រង់នៅក្នុងអត្ថបទកថាខណ្ឌត្រូវបានរក្សា។

នៅពេលគ្មានអត្ថបទណាប្រើពុម្ពអក្សរដែលស្គាល់ (រចនាប័ទ្មដែលបានបាត់ឈ្មោះពុម្ពអក្សររបស់វា) វាសួរ `Read selected texts as [Tcvn3/Vni/None]`៖ ជ្រើសការអ៊ិនកូដ ហើយជ្រើសអត្ថបទ។ អត្ថបទដែលជា Unicode រួចហើយត្រូវបានទុកចោល។ ការជំនួសអត្ថបទវិមាត្រ និងអត្ថបទពហុខ្សែចង្អុលមិនត្រូវបានបំប្លែងឡើយ។
