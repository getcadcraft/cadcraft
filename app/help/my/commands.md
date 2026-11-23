---
title: Command ကိုးကားချက်
summary: CadCraft drafting app ရှိ command တိုင်း၊ ၎င်း၏ alias များ၊ မေးသော မေးခွန်းများ၊ ရွေးချယ်စရာများနှင့် မူလတန်ဖိုးများ။
keywords: command များ, alias များ, command စာရင်း, area, perimeter, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

Command အမည် သို့မဟုတ် alias ကို ရိုက်ပြီး {{key:Enter}} သို့မဟုတ် {{key:Space}} ကို နှိပ်။ အက္ခရာအကြီးအသေး အရေးမကြီး၊ ရှေ့က `_`၊ `-`၊ `.` သို့မဟုတ် `'` ကို လျစ်လျူရှု။ Command line history တွင် command အားလုံး၏ တိုတောင်းသော စာရင်းကို ထုတ်ရန် `HELP` (သို့မဟုတ် `?`) ကို ရိုက်; ဤအကူအညီကို ဖွင့်ရန် {{key:F1}} ကို နှိပ်။

Prompt များကို ဘယ်လို ဖတ်မလဲ: ရွေးချယ်စရာများသည် စတုရန်းကွင်းတွင်ရှိပြီး သင်သည် ၎င်း၏ အကြီးစာလုံးများကို ရိုက်၍ ရွေး (`D` က Diameter)။ မူလတန်ဖိုးသည် ထောင့်ကွင်းတွင်ရှိ၊ လက်ခံရန် {{key:Enter}} ကို နှိပ်။ Point တောင်းသော နေရာတွင် နှိပ်နိုင်ပြီး [Coordinate and distance entry](topic:coordinate-entry) တွင်ဖော်ပြထားသော ပုံစံများထဲမှ မည်သည့်ပုံစံမဆို ရိုက်နိုင်။ အကွာအဝေး တောင်းသော နေရာတွင် ဂဏန်းရိုက်နိုင်၊ သို့မဟုတ် point နှစ်ခု နှိပ်နိုင်။

Point သို့မဟုတ် object တောင်းသော နေရာတွင် မူလတန်ဖိုး မရှိဘဲ {{key:Enter}} ကို နှိပ်လျှင် command ပြီးဆုံး။ {{key:Esc}} က ပယ်ဖျက်။ Command တစ်ခု ပြုလုပ်သည့်အရာ အားလုံးသည် undo အဆင့် တစ်ခု။

## ဆွဲခြင်း

### LINE

Alias: `L`။ မျဉ်းဖြောင့် အပိုင်းများ၊ တစ်ခုစီ ကိုယ်ပိုင် object။

- `Specify first point` (Enter: နောက်ဆုံး ပေးထားသော point မှ စ)
- `Specify next point [Undo]` ကို ထပ်ခါထပ်ခါ။ အပိုင်းနှစ်ခုပြီးနောက်: `[Undo/Close]`။
- `U` က နောက်ဆုံးအပိုင်းကို ပြန်ယူ၊ `C` က ပထမ point သို့ ပိတ်ပြီး ဆုံး။ Enter က ဆုံး။

### PLINE

Alias: `PL`။ မျဉ်းနှင့် arc အပိုင်းများ၏ polyline တစ်ခု။

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (အပိုင်းနှစ်ခု ရှိပြီးနောက် Close)
- `A` က arc သို့ ပြောင်း: `Specify endpoint of arc [Line/CLose/Undo]`။ Arc တစ်ခုစီသည် ရှေ့အပိုင်းနှင့် tangent ဆက်။ `L` က မျဉ်းသို့ ပြန်၊ `CL` က arc ဖြင့် ပိတ်။
- Enter က ဆုံး; polyline သည် ဖွင့်ထားဆဲ။

### CIRCLE

Alias: `C`။

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` က `Specify diameter of circle` ကို မေးသည်။
- `2P`: diameter ၏ အဆုံးနှစ်ခု။ `3P`: circle ပေါ်ရှိ point သုံးခု။
- `T` (command `TTR` ကိုလည်း၊ နှင့် {{ui:ဆွဲရန်}} › {{ui:နောက်ထပ်}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`၊ ဒုတိယ၊ ထို့နောက် radius (Enter: နောက်ဆုံး တစ်ခု)။ Circle သည် object နှစ်ခုစလုံး (line၊ arc၊ circle၊ polyline အပိုင်း၊ block အတွင်းပါ) ကို ထိသည်; ထိသည့် circle များအနက် သင်နှိပ်သည့်နေရာနှင့် အနီးဆုံးကို။ ကိုက်သည် မရှိလျှင် "Circle does not exist"။
- `TTT` (သို့မဟုတ် {{ui:ဆွဲရန်}} › {{ui:နောက်ထပ်}} › {{ui:Circle: Tan, Tan, Tan}}): object သုံးခု; အားလုံးကို ထိသော circle၊ သင်နှိပ်သည့်နေရာနှင့် အနီးဆုံး (line သုံးခုက သင်နှိပ်သည့်နေရာပေါ် မူတည်၍ အတွင်း သို့မဟုတ် အပြင် circle)။

### ARC

Alias: `A`။

- `Specify start point of arc [Center]`၊ `Specify second point of arc`၊ `Specify end point of arc`: point သုံးခုဖြတ်သော arc။
- `C`: `Specify center point of arc`၊ `Specify start point of arc`၊ `Specify end point of arc`။ Arc သည် start မှ end သို့ နာရီလက်တံ ဆန့်ကျင်ဘက် လည်။

### RECTANG

Alias: `REC`၊ `RECTANGLE`။ ပိတ်ထားသော polyline။

- `Specify first corner point`၊ `Specify other corner point`။ ဒုတိယထောင့်အတွက် `@width,height` ရိုက်။

### POLYGON

Alias: `POL`။ ပိတ်ထားသော polyline အဖြစ် regular polygon။

- `Enter number of sides <4>` (3 မှ 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: နှိပ်သို့မဟုတ် point ရိုက်; အကွာအဝေးက အရွယ်၊ ဦးတည်ချက်က polygon ကို လှည့်။

### ELLIPSE

Alias: `EL`။

- `Specify axis endpoint of ellipse [Center]`၊ `Specify other endpoint of axis`၊ `Specify distance to other axis`
- `C`: `Specify center of ellipse`၊ `Specify endpoint of axis`၊ ထို့နောက် အခြား axis ၏ အကွာအဝေး။
- `I` (`Isocircle`၊ {{cmd:ISODRAFT}} ဖွင့်ထားစဉ်သာ): center၊ ထို့နောက် radius သို့မဟုတ် `Diameter`: လက်ရှိ isometric plane ပေါ်တွင် circle တစ်ခု ပေါ်ပုံ ellipse။

### HATCH

Alias: `H`၊ `BH`၊ `BHATCH`; သို့မဟုတ် toolbar ရှိ {{ui:Hatch}}။ ပထမဆုံး လက်ရှိ pattern၊ scale နှင့် angle ကို ပြ။

- `Pick internal point [Select objects/Pattern/SCale/Angle]` ကို ထပ်ခါထပ်ခါ (`Undo` ဧရိယာတစ်ခု ရှိပြီးနောက်): click တိုင်းက ၎င်းပတ်လည် ပိတ်ထားသော ဧရိယာကို ထည့်၊ အတွင်းရှိ ပိတ်ထား ပုံသဏ္ဍာန်များကို island အဖြစ်။ Enter က အားလုံးကို hatch တစ်ခုတည်း ပြုလုပ်။
- `S`: `Select closed objects` (ပိတ်ထားသော polyline၊ circle၊ ပိတ်ထား ellipse)။
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`။ `SC`: `Specify pattern scale`။ `A`: `Specify pattern angle`။
- `G` (Gradient): ဖြည့်သည် pattern အစား gradient။ ၎င်း၏ မေးခွန်းများအတွက် {{cmd:GRADIENT}} ကို ကြည့်။

See [Hatch နှင့် ဖြည့်ရန် ဧရိယာများ](topic:hatch)။

### GRADIENT

Alias: `GD`။ ဧရိယာတစ်ခုကို အရောင်တစ်ခု သို့မဟုတ် နှစ်ခု gradient ဖြင့် ဖြည့်။ Gradient ကို ဦးစွာ မေး၊ ထို့နောက် {{cmd:HATCH}} ကဲ့သို့ ဆက် (`Pick internal point`၊ ပိတ်ထား object အတွက် `S`၊ ပြီးရန် {{key:Enter}})။

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>` ကို ထပ်ခါထပ်ခါ; ယခု gradient ကို ပြ။
- `T`: `LINEAR`၊ `CYLINDER`၊ `SPHERICAL`၊ `HEMISPHERICAL`၊ `CURVED` သို့မဟုတ် ၎င်းတို့ထဲမှ တစ်ခု ပြောင်းပြန် (`INVCYLINDER`၊ `INVSPHERICAL`၊ `INVHEMISPHERICAL`၊ `INVCURVED`)။ ရှေ့အက္ခရာများ လုံလောက်။
- `O`: အရောင်တစ်ခု၊ ထို့နောက် 0 မှ 1 အထိ အရိပ် (0 က အနက်၊ 0.5 က အရောင်ကိုယ်တိုင်၊ 1 က ဖြူ)။ `TW`: ပထမ နှင့် ဒုတိယ အရောင်။ အရောင်သည် 1 မှ 255 အကြား နံပါတ်၊ `255,128,0` ကဲ့သို့ ဂဏန်းသုံးခု၊ သို့မဟုတ် `#rrggbb`။
- `A`: gradient လည်ပတ်သော ထောင့်။ `C`: centered Yes သို့မဟုတ် No (No က gradient ၏ အလယ်ကို တစ်ဘက်သို့ ရွှေ့)။
- မသိသော အရောင် သို့မဟုတ် အမျိုးအစားကို၊ 0 မှ 1 ပြင်ပ အရိပ်ကို ငြင်းပယ်။

{{cmd:HATCHEDIT}} `G` နှင့် Properties (Gradient) က နောက်ပိုင်း gradient ကို ပြောင်း၊ သို့မဟုတ် hatch မည်သည့်အရာကိုမဆို gradient ပြုလုပ်။ Gradient ကို screen နှင့် plot တွင် ပြ။ DWG 2004 နှင့် နောက်ပိုင်းတွင် gradient hatch အမှန်အဖြစ် ထိန်း၊ DXF 2000 နှင့် DWG 2000 တွင် CadCraft အတွက် ထိန်း၊ အခြား program များက ပထမအရောင်ဖြင့် solid fill ကို မြင်။

### HATCHGENERATEBOUNDARY

Alias: `HGB`။ ဆုံးရှုံးသွားသော hatch မှ boundary ကို ပြန်ပြုလုပ်။ `Select hatches` (သို့မဟုတ် ရွေးပြီးသား)၊ ထို့နောက် `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`။

- Hatch ၏ loop တစ်ခုစီသည် hatch ၏ layer ပေါ်ရှိ ပိတ်ထား polyline တစ်ခု ဖြစ်လာ၊ polyline အသစ်များကို ရွေးထားဆဲ။ ကွေးသော ဘေးများသည် hatch ထိန်းထားသော တိုတိုမျဉ်းဖြောင့်အပိုင်းများအဖြစ် ပြန်လာ။
- Yes ဖြင့် hatch သည် {{cmd:HATCH}} ဖြင့် ပြုလုပ်ထားသည်ကဲ့သို့ boundary အသစ်ကို လိုက်။ Undo အဆင့် တစ်ခု။
- Hatch မရွေးထားလျှင် ထိုသို့ ပြော။

### POINT

Alias: `PO`; သို့မဟုတ် {{ui:ဆွဲရန်}} › {{ui:နောက်ထပ်}} › {{ui:အမှတ်}}။ Point object များ၊ နှိပ်တိုင်း တစ်ခု၊ Enter အထိ။

- `Specify a point`

### XLINE

Alias: `XL`; သို့မဟုတ် {{ui:ဆွဲရန်}} › {{ui:နောက်ထပ်}} › {{ui:တည်ဆောက်ရေး မျဉ်း}}။ အဆုံးမရှိ နှစ်ဖက်စလုံး construction line များ။ See [Construction line နှင့် ray များ](topic:construction-lines)။

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`၊ ထို့နောက် line တိုင်းအတွက် `Specify through point`၊ Enter အထိ။
- `A`: `Enter angle of construction line [Reference] <0>`; `R` က `Select a line object` ကို ရှေ့ဦးစွာ မေး။
- `B`: `Specify angle vertex point`၊ `Specify angle start point`၊ ထို့နောက် line တိုင်းအတွက် `Specify angle end point`။
- `O`: `Specify offset distance [Through] <Through>`၊ ထို့နောက် line တိုင်းအတွက် `Select a line object` နှင့် `Specify side to offset` (သို့မဟုတ် `Specify through point`)။

### RAY

Alias မရှိ; သို့မဟုတ် {{ui:ဆွဲရန်}} › {{ui:နောက်ထပ်}} › {{ui:Ray}}။ `Specify start point`၊ ထို့နောက် ray တိုင်းအတွက် `Specify through point`၊ Enter အထိ။

### TEXT

Alias: `DT`၊ `DTEXT`; သို့မဟုတ် toolbar ရှိ {{ui:စာသား}}။ Line တစ်ကြောင်း စာသား; line တစ်ခုစီ ကိုယ်ပိုင် object။

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`၊ ထို့နောက် `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text` ကို ထပ်ခါထပ်ခါ: Enter တိုင်း နောက် line ကို အောက်တွင် စ။ Enter ကို အလွတ် line တွင် နှိပ်လျှင် ဆုံး။ {{key:Space}} က ဤနေရာတွင် space ရိုက်။

### DIVIDE

Alias: `DIV`။ {{cmd:DIVIDE}} သည် line၊ arc၊ circle၊ polyline၊ spline သို့မဟုတ် ellipse ပေါ်တွင် အမှတ်များ ထား၊ ညီမျှသော အပိုင်းများ ဖြစ်စေ။ Object ကို ရွေး၊ ထို့နောက် အပိုင်းအရေအတွက် (2 မှ 32767)။ ဖွင့်ထား object သည် အပိုင်းများထက် အမှတ်တစ်ခု နည်း၊ ပိတ်ထားသော object တွင် စတင်သည့် အမှတ်လည် ပါ။ Object ကို မဖြတ်။ အမှတ်များသည် point များ၊ `Block` ဖြင့် ဤ drawing ၏ block ကို မေးပြီး object ကို လိုက်ရန် လှည့်မလား မေး။ Spline နှင့် ellipse တွင် အရှည်ကို တိုတောင်းသော chord များဖြင့် တိုင်း။ စာသား၊ hatch နှင့် အရှည်မရှိသော အခြား object များကို ငြင်းပယ်။

### MEASURE

Alias: `ME`။ {{cmd:MEASURE}} သည် line၊ arc၊ circle၊ polyline၊ spline သို့မဟုတ် ellipse တလျှောက် ပေးသော အရှည်တစ်ခုစီတွင် အမှတ်တစ်ခု ထား၊ သင်နှိပ်သော အဆုံးနားမှ ရေတွက် (ပိတ်ထား object: ၎င်း၏ အစမှ)။ အရှည်ကို ရိုက်ခြင်း သို့မဟုတ် point နှစ်ခုဖြင့် ပေး။ ဖွင့်ထား object ၏ အဝေးဆုံးအဆုံးတွင် အမှတ် မရှိ။ `Block` က အမှတ်ရှိ နေရာတိုင်းတွင် point အစား block ထားသည်။ အရှည် 0၊ object ထက် ရှည်သော အရှည်၊ သို့မဟုတ် အမှတ် 32767 ထက် ပိုဖြစ်စေမည့် အရှည်ကို ငြင်းပယ်။

### BOUNDARY

Alias: `BO`၊ `BPOLY`။ {{cmd:BOUNDARY}} သည် သင်နှိပ်သော point ပါဝင်သော ဧရိယာပတ်လည် ပိတ်ထား polyline ပြုလုပ်၊ ဖန်သားပြင်ပေါ် ၎င်းကို ကန့်သတ်သော line၊ arc၊ circle၊ polyline နှင့် curve များမှ။ Arc ပေါ်ရှိ အပိုင်းများသည် arc အပိုင်းအဖြစ် ပြန်လာ; ellipse နှင့် spline အပိုင်းများသည် တိုတို မျဉ်းဖြောင့်အပိုင်းအဖြစ် ပြန်လာ။ `Islands` ဖွင့်ထား (စတင်ချိန်) တွင် အတွင်းရှိ ပိတ်ထား ဧရိယာတိုင်းလည်း ၎င်း၏ polyline ရ။ Point ရွေးဆက်လုပ်; Enter က ဆုံး။ ဧရိယာကို ကန့်သတ်သော object များကို ကိုယ်ပိုင် အခြေအနေအတိုင်း ထား။ Point ကိုကိုင်သော ပိတ်ထား ဧရိယာ မရှိလျှင် ထိုသို့ ပြော။

### BLEND

{{cmd:BLEND}} သည် ဖွင့်ထား curve နှစ်ခု၏ ဆုံးများကြား spline ဆွဲ။ ပေါင်းရန် အဆုံးနားတွင် curve တစ်ခုစီကို ရွေး။ `CONtinuity` က `Tangent` (spline က curve နှစ်ခုလုံး၏ ဦးတည်ချက်ကို ထွက် ရောက်) သို့မဟုတ် `Smooth` (ဆုံးတွင် ကွေးသည့်ပုံကိုပါ လိုက်) ကို ရွေး၊ ရွေးချယ်မှုကို session အတွက် ထိန်း။ Curve နှစ်ခု မပြောင်း။ ပိတ်ထား object များနှင့် ဆုံနှင့် ရှိပြီးသား ဆုံ နှစ်ခုကို ငြင်းပယ်။

### REGION

Alias: `REG`။ {{cmd:REGION}} သည် ပိတ်ထား object များကို region များ (ပေါင်း၊ ဖြတ်နှင့် တိုင်းနိုင်သော ဧရိယာ) အဖြစ် ပြောင်း။ Circle၊ ပိတ်ထား polyline၊ ပိတ်ထား ellipse သို့မဟုတ် ပိတ်ထား spline များ၊ သို့မဟုတ် ဆုံးချင်း ပိတ်ဖွဲ့သော line၊ arc နှင့် ဖွင့်ထား polyline များကို ရွေး; loop တစ်ခုစီသည် region တစ်ခု ဖြစ်ပြီး ၎င်းမှ ဆင်းသက်လာသည့် object များကို အစားထိုး။ Arc များ arc အဖြစ်ကျန်; ellipse နှင့် spline များ တိုတို မျဉ်းဖြောင့်များ ဖြစ်လာ။ ပိတ်မနေပြီး loop မပိတ်သော အရာများ ကိုယ်ပိုင်အတိုင်း ကျန်ပြီး အရေအတွက်ကို ပြော။ Drawing တွင် region တစ်ခုသည် ပိတ်ထား polyline တစ်ခု သို့မဟုတ် တစ်ခုထက်ပို၊ အမည်မဲ့ group တစ်ခုအဖြစ် ထားထား၊ ထို့ကြောင့် နှိပ်လျှင် region တစ်ခုလုံး ရွေး၍ ကော်ပီသည် ကိုယ်ပိုင် region ဖြစ်; အခြား program များက ဖိုင်ကို ဖွင့်လျှင် ပိတ်ထား polyline များ မြင်။

Drawing တွင် region များ ရှိသည့်အခါ 2D tab ရှိ {{cmd:UNION}}၊ {{cmd:SUBTRACT}} နှင့် {{cmd:INTERSECT}} သည် region များပေါ် အလုပ်လုပ်: `UNION` က ရွေးထား region များကို တစ်ခုသို့ ပေါင်း (ခွဲနေသော region များက region တစ်ခုတွင် outline ပေါင်းများ ဖြစ်လာ)၊ `SUBTRACT` က နုတ်မည့် region များနှင့် နုတ်ခံရမည့် region များကို မေး (အပေါက်သည် region ၏ အစိတ်အပိုင်းအဖြစ် ကျန်)၊ `INTERSECT` က အားလုံး ဘုံရှိသော ဧရိယာကို ထိန်း။ တစ်ခုစီက ရလဒ်၏ ဧရိယာကို ပြော၊ undo အဆင့် တစ်ခု။ ဘာမျှ ကျန်မည် မဟုတ်လျှင် သို့မဟုတ် ဘုံ မရှိလျှင် ငြင်းပယ်။ 3D tab တွင်နှင့် region မရှိသော drawing တွင် တူညီသော command များသည် ယခင်အတိုင်း solid များပေါ် အလုပ်လုပ်။

## ပြင်ဆင်ခြင်း

### MTEXT

Alias: `MT`၊ `T`; သို့မဟုတ် toolbar ရှိ {{ui:စာပိုဒ်}}။ အကျယ်သို့ ခေါက်သော paragraph စာသား၊ နေရာတွင် ရိုက်။

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: ထောင့်နှစ်ခုကြား အကျယ်သည် စာသား ခေါက်သော နေရာ။ `H` က `Specify height` ကို မေး၊ `J` က `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`၊ `L` က `Enter line spacing factor (0.25 to 4)`၊ `R` က `Specify rotation angle`၊ `W` က `Specify width (0 for no wrapping)` ကို မေး ပြီး ဒုတိယထောင့်ကို ကျော်။
- ထို့နောက် ပုံဆွဲပေါ် box ဖွင့်; ရိုက်၊ paragraph သစ်အတွက် {{key:Enter}}၊ ပြီးဆုံးရန် {{key:Mod+Enter}} သို့မဟုတ် အပြင်ကို နှိပ်၊ ပယ်ရန် {{key:Esc}}။ ၎င်း၏ bar က အမြင့်၊ လိုင်းကွာဟချက်၊ အကျယ်နှင့် ညှိနှိုင်းမှု ကို သတ်မှတ်။ See [စာသားနှင့် label ထည့်ခြင်း](topic:text#write-a-note-that-wraps)။

### TEXTEDIT

Alias: `ED`၊ `DDEDIT`; သို့မဟုတ် စာသားကို နှစ်ချက်နှိပ်။ `Select a text to edit` ကို {{key:Enter}} အထိ ထပ်ခါထပ်ခါ: တစ်ခုစီ တူညီသော box တွင် ဖွင့်။ ရွေးထား သို့မဟုတ် နှစ်ချက်နှိပ်ထားသော စာသားပေါ်မှ စလျှင် ထိုတစ်ခုကို တည်းဖြတ်ပြီး ဆုံး။

### ERASE

Alias: `E`၊ `DELETE`; သို့မဟုတ် object ရွေးထားစဉ် {{key:Delete}} ကို နှိပ်။

- `Select objects` (object ရွေးထားပြီးဖြစ်လျှင် ကျော်)

### MOVE

Alias: `M`။

- `Select objects`
- `Specify base point [Displacement]`၊ `Specify second point`
- `D`: `Specify displacement`၊ `dx,dy` ပုံစံဖြင့် ရိုက်။

### COPY

Alias: `CO`၊ `CP`။ Point ပေးသလောက် ကော်ပီများ။

`Array` ကို ဒုတိယ point prompt တွင် ရိုက်လျှင် တစ်ကြိမ်တည်း အတန်းတစ်ခု ပြုလုပ်: အရေအတွက် (မူရင်းကို တစ်ခုလို ရေတွက်)၊ ထို့နောက် ပထမကော်ပီ သွားရမည့် point၊ အခြားတွေက အကွာအဝေးတူဖြင့် လိုက်။ `Fit` က ထို point ကို နောက်ဆုံး ကော်ပီ၏ နေရာ ပြု၊ အခြား ကော်ပီများကို ကြားတွင် ညီညီ ခွဲ။

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]` ကို Enter အထိ ထပ်ခါထပ်ခါ။ `U` က နောက်ဆုံး ကော်ပီကို ပြန်ယူ။

### ROTATE

Alias: `RO`။

- `Select objects`၊ `Specify base point`
- `Specify rotation angle <last angle>`: ဒီဂရီ၊ နာရီလက်တံ ဆန့်ကျင်ဘက် အပြုသဘော; သို့မဟုတ် point တစ်ခုကို နှိပ်ပြီး ၎င်းဆီသို့ လှည့်။

### SCALE

Alias: `SC`။

- `Select objects`၊ `Specify base point`
- `Specify scale factor`: `0.5` သို့မဟုတ် `2` ကဲ့သို့ factor ရိုက်။ နှိပ်သော point သည် base point မှ အကွာအဝေးကို factor အဖြစ် ပေး။

### MIRROR

Alias: `MI`။

- `Select objects`
- `Specify first point of mirror line`၊ `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Alias: `AL`; သို့မဟုတ် {{ui:ပြင်ဆင်ရန်}} › {{ui:နောက်ထပ်}} › {{ui:ညှိရန်}}။

- `Select objects`
- `Specify first source point`၊ `Specify first destination point`
- `Specify second source point (Enter to continue)`၊ `Specify second destination point`
- `Specify third source point (Enter to continue)`၊ `Specify third destination point`
- Pair နှစ်ခုဖြင့်: `Scale objects based on alignment points? [Yes/No] <N>`

See [Align objects](topic:modify-objects#align-objects)။

### ALIGNTO

- `Select objects` (သို့မဟုတ် ရွေးချယ်မှု)၊ `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`၊ `To [Selection/First/Last/Point] <Selection>`; `P` က point ကို မေး။ ရွေးချယ်မှု ကျန်။

### DISTRIBUTE

- `Select objects` (အနည်းဆုံး သုံးခု)၊ `Distribute [Horizontally/Vertically] <Horizontally>`၊ `Space evenly [Centers/Gaps] <Gaps>`။ အပြင်ဆုံး နှစ်ခု ကျန်; ရွေးချယ်မှု ကျန်။

### ALIGNPANEL

Alias: `ALP`; သို့မဟုတ် {{ui:ပြင်ဆင်ရန်}} › {{ui:နောက်ထပ်}} › {{ui:ညှိနှင့် ဖြန့်ဝေရန်}}။ နှိပ်မှုဖြင့် ALIGNTO နှင့် DISTRIBUTE ကို လုပ်သော panel ကို ဖွင့်။

### LASER

Alias: `LASERCUT`; သို့မဟုတ် {{ui:အမြင်}} › {{ui:နောက်ထပ်}} › {{ui:Laser…}}။ Drawing အပေါ် Laser panel ဖွင့်: layer တစ်ခုစီ ဘာလုပ်သလဲ (cut၊ score၊ engrave၊ fill၊ picture)၊ preview၊ သိမ်းရန် GRBL G-code၊ နှင့် Web Serial ဖြင့် framing နှင့် ပို့ခြင်း။ See [drawing ကို laser သို့ ပို့ခြင်း](topic:laser-cutting)။

### STRETCH

Alias: `S`; သို့မဟုတ် {{ui:Stretch}}။ `Select objects to stretch`: ဆုံးများပေါ် crossing window များ ဆွဲ (သို့မဟုတ် `C` ရိုက်) ရွှေ့ရန်။ `Specify base point [Displacement]`၊ `Specify second point`။ Window အတွင်း point များ ရွေ့: line ဆုံး၊ polyline ထောင့် (arc အပိုင်းများ အမြင့် ထိန်း)၊ dimension point များ; circle၊ ellipse၊ စာသား၊ point နှင့် block များက ၎င်းတို့၏ center သို့မဟုတ် insertion point window အတွင်းရှိပါက အပြည့် ရွေ့။ Command မတိုင်မီ ရွေးထားသော ရွေးချယ်မှုသည် ၎င်းကို ဖန်တီးခဲ့သော crossing window များ (နှင့် lasso များ) ကို ထိန်း၊ ထို့ကြောင့် တူညီစွာ ဆန့်။ Window မရှိလျှင် object များ အပြည့် ရွေ့။

### ARRAY၊ ARRAYRECT၊ ARRAYPOLAR

Alias: `AR`; သို့မဟုတ် {{ui:Array}}။ `Select objects`၊ ထို့နောက် `Enter array type [Rectangular/POlar] <Rectangular>` (ARRAY အတွက်သာ)။

- Rectangular က 4 ကော်လံ × 3 အတန်းဖြင့် စတင်၊ object အရွယ်၏ 1.5 ဆ အကွာအဝေး၊ preview အဖြစ် ပြ။ `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` က ကော်လံနှင့် အတန်းကို မေး၊ `S` က ကော်လံများကြား နှင့် အတန်းများကြား အကွာအဝေး (အနုတ်က ဘယ် သို့မဟုတ် အောက်သို့)၊ `COL` နှင့် `R` တစ်ခုစီ ဦးတည်ချက်တစ်ခု။
- Polar က `Specify center point of array` ကို မေး၊ items 6 ခု ပတ်လည်ပြည့်အောင် စတင်၊ လှည့်ထား။ `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` items၊ `F` ဖြည့်ရမည့် ထောင့် (+ နာရီလက်တံ ဆန့်ကျင်ဘက်၊ − နာရီလက်တံအတိုင်း)၊ `ROT` Yes သို့မဟုတ် No။
- {{key:Enter}} (eXit) က ကော်ပီများကို ရိုးရိုး object အဖြစ် ပြုလုပ်။ Undo အဆင့် တစ်ခု။
- `AS` (ASsociative) က ရိုးရိုး ကော်ပီများနှင့် နောက်ပိုင်း {{cmd:ARRAYEDIT}} ဖြင့် ပြင်နိုင်သော array တစ်ခု အကြား ပြောင်း: object တစ်ခု၊ ၎င်း၏ grip များ သို့မဟုတ် Properties ဖြင့်။ ရွေးချယ်မှု မှတ်ထား ({{cmd:ARRAYASSOCIATIVITY}}); စတင်ချိန်တွင် ရိုးရိုး ကော်ပီများ။

### ARRAYPATH

Curve တလျှောက် ကော်ပီများ။ `Select objects`၊ ထို့နောက် `Select path curve`: line၊ arc၊ circle၊ ellipse၊ polyline သို့မဟုတ် spline (array လုပ်နေသော object မဟုတ်ပါ)။ လမ်းကြောင်းသည် object နှင့် နီးသော အဆုံးမှ စ၊ ပထမ item သည် object များ ရှိရာနေရာ။

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`၊ preview ဖြင့်။ `M`: `Divide` က items များကို လမ်းကြောင်းတစ်လျှောက် ညီညီ ဝေ၊ `Measure` က တစ်ခုကို ဝေးလေးလေး ထားသည်။ `I`: items အရေအတွက် (Measure တွင် 0 က ကိုက်သလောက်အများဆုံး၊ လမ်းကြောင်းအဆုံးကျော် အရေအတွက်ကို ကိုက်အောင် ထိန်း)။ `SP`: items အကြား အကွာအဝေး လမ်းကြောင်းတလျှောက် (Measure သို့ ပြောင်း)။ `AL`: Yes က item တစ်ခုစီ လမ်းကြောင်းကို လိုက်လှည့်၊ No က ထောင်မတ်ထား။
- `AS` သည် {{cmd:ARRAY}} ၌ကဲ့သို့။ ဖွင့်ထားလျှင် array သည် လမ်းကြောင်း ပုံသဏ္ဍာန်၏ ကိုယ်ပိုင် ကော်ပီကို ထိန်း; နောက်ပိုင်း လမ်းကြောင်း curve ကို တည်းဖြတ်သော်လည်း items မရွေ့။
- လမ်းကြောင်း မဟုတ်သော လမ်းကြောင်းနှင့် item တစ်ခုတည်းကို ငြင်းပယ်။

### ARRAYEDIT

`AS` (ASsociative) ဖြင့် ပြုလုပ်ထားသော array ကို ပြောင်း။ `Select array` (သို့မဟုတ် ရွေးပြီး)။ Array ယခု ဘာဖြစ်သလဲ ပြပြီး {{key:Enter}} အထိ မေး:

- Rectangular: `COL` ကော်လံနှင့် ၎င်းတို့ကြား အကွာအဝေး၊ `R` အတန်းနှင့် ၎င်းတို့ကြား အကွာအဝေး၊ `A` ကော်လံများ လည်ပတ်သော ထောင့်။
- Polar: `I` items၊ `F` fill angle၊ `ROT` items လှည့်မလား Yes သို့မဟုတ် No။
- Path: `M` Divide သို့မဟုတ် Measure၊ `I` items၊ `SP` အကွာအဝေး၊ `AL` လမ်းကြောင်းနှင့် ညှိ။
- `S` (Source) က array က ထပ်ခါထပ်ခါ ပြုလုပ်သော object များကို ကိုယ်ပိုင်အတိုင်း ဖွင့်၊ block editor ကဲ့သို့။ ထိုနေရာတွင် ဆွဲ၊ တည်းဖြတ်; {{cmd:ARRAYCLOSE}} က သိမ်း သို့မဟုတ် ပယ်၊ item တိုင်း လိုက်။
- `REP` (REPlace): `Select replacement objects`၊ `Specify base point of the replacement objects`၊ ထို့နောက် အစားထိုးမည့် items များကို နှိပ်၊ {{key:Enter}}။ ထို items များက အစားထိုးမှုကို ပြ; အစားထိုး object များသည် drawing မှ ထွက်ပြီး array အတွင်း နေ။ `RES` (RESet) က source object များကို item တိုင်းတွင် ပြန်ပြ။
- ပြောင်းလဲမှုတိုင်း undo အဆင့် တစ်ခု။ ရိုးရိုး ကော်ပီများ၊ ရိုးရိုး block reference နှင့် locked layer ရှိ array ကို ငြင်းပယ်။

တူညီသော နံပါတ်များကို Properties ၏ Array အောက်တွင် ပြ၊ array တွင် grip များ ရှိ: base point က ရွှေ့၊ ဒုတိယ item ရှိ grip က အကွာအဝေး သတ်မှတ်၊ နောက်ဆုံး item ကျော်ရှိ grip က အရေအတွက် သတ်မှတ် (polar: ဒုတိယ item က items အရေအတွက်၊ နောက်ဆုံး item က fill angle)။ {{cmd:EXPLODE}} က array ကို ရိုးရိုး ကော်ပီ သို့ ပြန်။

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} Source ကို ပိတ်: `Save the changes to the array's source objects? [Save/Discard] <Save>`။ Array source object ဖွင့်မနေလျှင် ထိုသို့ ပြော။ {{cmd:BCLOSE}} ကလည်း အတူတူ လုပ်။

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`။ {{cmd:ARRAY}}၊ ARRAYRECT၊ ARRAYPOLAR နှင့် {{cmd:ARRAYPATH}} စတင်သော အရာကို သတ်မှတ်; ၎င်းတို့၏ `AS` ရွေးချယ်စရာက တူညီသော ဆက်တင်ကို ပြောင်း။ ဤ browser တွင် မှတ်ထား။

### OFFSET

Alias: `O`။ Line၊ arc၊ circle နှင့် polyline။

Polyline တစ်ခု အပြင်ဘက်သို့ ရွေ့ပြီး ၎င်း၏ မျဉ်းဖြောင့် အပိုင်းများ ထောင့်တစ်ခုတွင် ခွဲထွက်သည့်အခါ {{cmd:OFFSETGAPTYPE}} က gap ကို မည်သို့ ပိတ်ရမလဲ ဆုံးဖြတ်။

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`၊ ထို့နောက် `Specify point on side to offset` (သို့မဟုတ် Through ဖြင့် `Specify through point`)၊ Enter အထိ ထပ်ခါထပ်ခါ။

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: {{cmd:OFFSET}} က polyline ၏ အပြင်ထောင့်များ၏ gap များကို မည်သို့ ပိတ်သလဲ။ `0` က ဆုံတွေ့သည်အထိ အပိုင်းများ ဆန့် (စတင်ချိန် ဆက်တင်)၊ `1` က ပြောင်းထောင့်ပတ်လည် arc ဖြင့် ချိတ်၊ `2` က မျဉ်းဖြတ်ဖြင့် ချိတ်။ အတွင်းထောင့်များနှင့် arc အပိုင်းများ မထိခိုက်။ ဤ session အတွက် ထိန်း။

### EXTRIM

{{cmd:EXTRIM}} သည် edge တစ်ခု၏ တစ်ဘက်ရှိ အရာအားလုံးကို ညှပ်။ Cutting edge (line၊ arc၊ circle၊ polyline၊ ellipse၊ spline သို့မဟုတ် construction line) ကို ရွေး၊ ထို့နောက် ရှင်းလင်းရမည့် ဘက်ရှိ point တစ်ခု ရွေး: edge ကို ဖြတ်သော line၊ arc၊ circle၊ polyline နှင့် construction line တိုင်းသည် edge တွင် စသော ထို ဘက်ရှိ အပိုင်းကို ဆုံးရှုံး။ ဘက်ကို ရွေးနေစဉ် ဆုံးရှုံးမည့် အပိုင်းများသည် pointer ကို လိုက်။ ပိတ်ထား edge အတွက် ဘက်များသည် အတွင်းနှင့် အပြင်။ Edge ကို တို့သော object များ၊ ဖြတ်ထားသော စာသား၊ hatch၊ spline နှင့် ellipse များကို ထားခဲ့။ Undo အဆင့် တစ်ခု။

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: {{cmd:TRIM}} နှင့် {{cmd:EXTEND}} မည်သို့ စမလဲ။ `1` Quick: object တိုင်း cutting edge သို့မဟုတ် boundary။ `0` Standard: edge များကို အရင်မေး။ LISP တွင် `(setvar "TRIMEXTENDMODE" 0)` ဖြစ်လည်း ရ။

### TRIM

Alias: `TR`။ ပထမ `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` ကို ပြ။ Quick mode တွင် မြင်ရသော object တိုင်း cutting edge ဖြစ်၊ ဘာမျှ မဖြတ်သော object ကို ဖျက်; Standard mode တွင် `Select cutting edges (Enter = every object)` ကို ဦးစွာ မေး၊ ထိုနေရာတွင်သာ ဖြတ်။

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]` ကို ထပ်ခါထပ်ခါ: ဖယ်ရှားမည့် အပိုင်းကို နှိပ် (pointer ကိုင်ထားစဉ် မီးခိုးရောင် ပြတ်ထား ပြ)၊ အပိုင်းများစွာကို လမ်းကြောင်းဖြင့် ဆွဲ (အားလုံး တစ်ဆင့်တည်း)၊ သို့မဟုတ် ကြားတွင် fence အတွက် အလွတ်နေရာ နှစ်ခုကို နှိပ်။ {{key:Shift}} က ရှည်ချဲ့။ `T` က cutting edge ရွေး (Standard mode)၊ `F` က fence point များ မေး၊ `C` က window ထောင့်နှစ်ခု (အစိတ်အပိုင်းတစ်စိတ်တစ်ပိုင်း ပါဝင်သည့်အပိုင်းများ ပါ)၊ `O` က `Enter a trim mode option [Quick/Standard]` မေး၊ `E` က `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE) မေး၊ `R` က ရွေးသော object များ ဖျက်၊ `U` က နောက်ဆုံး ရွေး သို့မဟုတ် ဆွဲမှုကို ပြန်ယူ။ Enter က ဆုံး။ See [ညှပ်ခြင်းနှင့် ရှည်ချဲ့ခြင်း](topic:trim-and-extend)။

- Hatch ပေါ် နှိပ်လျှင် hatch ကို ဖြတ်: cutting edge များသည် hatch ဧရိယာကို ခွဲ၊ သင်နှိပ်သော အပိုင်းကို ဖယ်ရှား (ဆွဲထား outline မကျန်တော့)။ Hatch သည် pattern သို့မဟုတ် gradient ကို ထိန်း; boundary နှင့် ချိတ်ထားသော hatch သည် နောက်ပိုင်း ချိတ်ဆက်မှု မရှိ၊ ၎င်းမှာ ဖြည့်ခြင်း မရှိတော့သောကြောင့်ဖြစ်သည်။ Cutting edge မခွဲသော၊ နှိပ်မှုသည် hatch ပေါ်မရှိသော၊ သို့မဟုတ် ဘာမျှ မကျန်လာသော အခါ ထိုသို့ ပြော (ဖျက်ရန် {{cmd:ERASE}} ကို သုံး)။ ဆွဲထားသော လမ်းကြောင်း သို့မဟုတ် fence သည် hatch ကို မဖြတ်။

### EXTEND

Alias: `EX`။ TRIM နှင့် ပြောင်းပြန် ဖြစ်သော အတူတူ: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`။ နှိပ်သည့်အခါ အနီးဆုံး အဆုံးကို နောက်ဆုံး boundary အထိ ရှည်စေ၊ ဆွဲထားသော လမ်းကြောင်း သို့မဟုတ် fence သည် ဖြတ်သွားသော object တိုင်းကို ရှည်စေ; {{key:Shift}} က ညှပ်။ `B` က boundary edge ရွေး (Standard mode)။ Mode နှင့် Edge သည် TRIM နှင့် မျှဝေ။

### LINKVIEWS

Alias: `SYNCVIEWS`; သို့မဟုတ် {{ui:အမြင်}} › {{ui:နောက်ထပ်}} › {{ui:အပိုင်းများ၏ မြင်ကွင်းကို ချိတ်ဆက်ရန်}}၊ သို့မဟုတ် drawing tab များပေါ်ရှိ link icon။ `Link the panes' views [ON/OFF]` (Enter က အခြားအခြေအနေ): ON ဖြစ်စဉ် active pane ၏ pan သို့မဟုတ် zoom က အမျိုးအစား တူ space ကို ပြသော pane အားလုံးကို ရွှေ့။ See [မျက်နှာပြင် ခွဲခြင်း](topic:split-screen)။

### OPENIN3D

Alias မရှိ; သို့မဟုတ် {{ui:အမြင်}} › {{ui:နောက်ထပ်}} › {{ui:Open in ModelCraft}} ၊ 3D modeling app က ပေးလွှဲသော drawing ကို လက်ခံသည်နေရာ။ DWG အဖြစ် tab အသစ်တွင် ထိုနေရာတွင် ဖွင့် (ဘာမျှ upload မလုပ်)။ Browser က tab ကို ပိတ်ထားလျှင် ထိုသို့ ပြော။

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: ဗလာနေရာပေါ် ဖိ၍ ဆွဲလျှင် ဆွဲသည်။ Settings › CadCraft › Dragging to select နှင့် တူ။ See [Lasso ဖြင့် ရွေးခြင်း](topic:lasso-selection)။

### FILLET

Alias: `F`။ Line၊ arc၊ circle နှင့် polyline။ ပထမ `Current settings: Mode = TRIM, Radius = 0` ကို ပြ။

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` က `Specify fillet radius <last>` ကို မေး။ `T` က `Enter Trim mode option [Trim/No trim]` ကို မေး: No trim ဖြင့် object များ ကိုယ်ပိုင်အတိုင်း ထား၊ arc ကိုသာ ထည့်။
  - `M` က Enter အထိ ထောင့်ပိုများအတွက် command ကို ဆက်ထား; `U` က command မထွက်ဘဲ နောက်ဆုံး ထောင့်ကို ပြန်ယူ။
  - `P` က `Select 2D polyline [Radius]` ကို မေး၊ ဖွင့်ထား မျဉ်းဖြောင့် အပိုင်းနှစ်ခု ဆုံသော ထောင့်တိုင်း ကို ပတ်။ ယခုရှိပြီးသား fillet များကို radius အသစ်ဖြင့် အစားထိုး; radius 0 ဖြင့် ဖယ်။ Radius အတွက် အပိုင်းများ တိုလွန်းသော ထောင့်များကို ထားခဲ့ပြီး ရေတွက်။
- `Select second object or shift-select to apply corner [Radius]`။ ထောင့်ချွန်အတွက် ဘယ် radius ဖြစ်စေ {{key:Shift}} ကိုဖိ၍ နှိပ်။

ထိန်းထားလိုသော အစိတ်အပိုင်းပေါ်တွင် object တစ်ခုစီကို နှိပ်။ မဆုံသော line နှစ်ခုကို ရှည်စေ။ နှစ်ခု ဘောင်ညီညီ line များက ပထမ line ၏ သင့်နှိပ်ချက်နှင့် အနီးဆုံး အဆုံးတွင် အကွာအဝေးကို ဖြတ်သော အဝိုင်းတစ်ဝက် ရ။ Circle ကို ဘယ်တော့မှ မဖြတ်။ Polyline တစ်ခု၏ ကပ်လျက် အပိုင်းနှစ်ခုသည် polyline အတွင်း arc ရ; polyline နှင့် အခြား object သည် ဖြတ်ချက် polyline ၏ ပထမ သို့မဟုတ် နောက်ဆုံး အပိုင်းတွင် ကျလျှင် အလုပ်လုပ်။

### CHAMFER

Alias: `CHA`။ Line နှင့် polyline ၏ မျဉ်းဖြောင့် အပိုင်းများ။ လက်ရှိအကွာအဝေး (သို့မဟုတ် အရှည်နှင့် ထောင့်) ကို ဦးစွာ ပြ။

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` က `Specify first chamfer distance <last>` နှင့် `Specify second chamfer distance <the first>` ကို မေး: ပထမကို သင်ရွေးသော ပထမ line မှ ဖြတ်၊ ဒုတိယကို အခြားမှ ဖြတ်။
  - `A` က `Specify chamfer length on the first line` နှင့် `Specify chamfer angle from the first line` ကို မေး။
  - `E` (mEthod) က နောက် chamfer က နှစ်ခုအနက် ဘယ်ဟာ သုံးမလဲ ရွေး။ `T`၊ `M`၊ `U` နှင့် `P` တို့သည် {{cmd:FILLET}} ကဲ့သို့ အလုပ်လုပ်။
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`။ {{key:Shift}}+click က ထောင့်ချွန်။

အကွာအဝေးသည် line ထက် ရှည်လျှင် ငြင်းပယ် (`Distance is too large.`)။

### BREAK နှင့် BREAKATPOINT

Alias: `BR`။ `Select object` (နှိပ်သည့်နေရာသည် ပထမ point)၊ `Specify second break point [First point]`; `F` က `Specify first break point` နှင့် `Specify second break point` ကို မေး။ ကြားရှိ အပိုင်းကို ဖယ်၊ circle တွင် ပထမ point မှ နာရီလက်တံ ဆန့်ကျင်ဘက်။ BREAKATPOINT က `Specify break point` ကို မေးပြီး object ကို ထို point တွင် နှစ်ပိုင်း ခွဲ (circle မဟုတ်)။

### LENGTHEN

Alias: `LEN`။ `Select an object to measure [DElta/Percent/Total/DYnamic]`: နှိပ်လျှင် `Current length` (နှင့် arc ၏ ပါဝင်သော ထောင့်) ကို ပြပြီး နောက်တစ်ကြိမ် မေး။ `DE` က `Enter delta length (negative shortens) [Angle]`၊ `P` က `Enter percentage length`၊ `T` က `Specify total length [Angle]`၊ `DY` က ဆွဲ။ ထို့နောက် `Select an object to change [Undo]` ကို ထပ်ခါထပ်ခါ: နှိပ်သော အဆုံးနားရှိ အဆုံးရွှေ့။ Line၊ arc နှင့် ဖွင့်ထား polyline။

### JOIN

Alias: `J`။ `Select objects to join`။ ဆုံးချင်း ဆုံသော line၊ arc နှင့် ဖွင့်ထား polyline များ polyline (ကွင်းပိတ်သည့်အခါ ပိတ်) ဖြစ်လာ; တစ်ကြောင်းတည်းရှိ line များ line တစ်ခု; တစ်ပတ်တည်း arc များ arc တစ်ခု သို့မဟုတ် circle ဖြစ်လာ။ မှတ်တမ်းက ပေါင်းခဲ့သော object အရေအတွက်နှင့် မပေါင်းသည့် အရေအတွက်ကို ပြော။

### MATCHPROP

Alias: `MA`၊ `PAINTER`။ `Select source object`၊ ထို့နောက် `Select destination objects [Settings]` နှင့် {{key:Enter}}။ Layer နှင့် အရောင်ကို ကူး၊ အမျိုးအစားတူ object များကြား စာသားအမြင့်နှင့် အကျယ်၊ dimension အရွယ်အစား သို့မဟုတ် hatch pattern ကို ကူး။ `S` က `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` ကို Enter အထိ ထပ်ခါထပ်ခါ မေး; ရွေးချယ်မှုကို session အတွက် မှတ်ထား။

### EXPLODE

Alias: `X`။ Polyline များ line နှင့် arc ဖြစ်၊ block reference များ ၎င်းတို့၏ object ဖြစ်၊ dimension များ line၊ arrowhead နှင့် စာသား ဖြစ်။ Array ကို ပြင်နိုင် ({{cmd:ARRAYEDIT}}) ရိုးရိုး ကော်ပီ ဖြစ်လာ။

- `Select objects`

### GROUP

Alias: `G`။ {{cmd:GROUP}} သည် ရွေးထားသော object များကို ဝေမျှသော အမည် ပေး။ Object များ ရွေး၊ ထို့နောက် အမည်ရိုက် (နေရာလွတ်မရှိ၊ `?` က group များကို စာရင်း၊ Enter က အမည်မဲ့ group)၊ နှင့် အမည်ပေးထား group အတွက် ရွေးချယ်ခွင့်ရှိ ဖော်ပြချက်။ ထို့နောက် ၎င်းတို့ထဲမှ တစ်ခုကို နှိပ်လျှင် သို့မဟုတ် ၎င်းတို့ထဲမှ တစ်ခုကို ယူသော window ဆွဲလျှင် အားလုံး ရွေး၊ ထို့ကြောင့် အတူရွှေ့၊ ကော်ပီ၊ ဖျက်။ Object တစ်ခုစီ ကိုယ်ပိုင် object ဖြစ်ဆဲ။ Object တစ်ခုသည် group များစွာတွင် ရှိနိုင်။ Group တစ်ခုလုံး၏ ကော်ပီသည် အမည်မဲ့ group အသစ်; group ၏ အဖွဲ့ဝင်တစ်ခု၏ ကော်ပီသည် group တွင် ပါဝင်။ Group များသည် ဖန်တီးခဲ့သော space (model သို့မဟုတ် sheet) ပိုင်ဆိုင်။ DWG သို့မဟုတ် DXF အဖြစ် သိမ်းပြီး CadCraft တွင် ပြန်ဖွင့်လျှင် ထိန်းထား; DXF 2000 ဖိုင်များက group object အဖြစ် အခြား program များအတွက်လည်း ယူဆောင်; အခြား program တွင် ပြုလုပ်ထား group များကို DXF သို့မဟုတ် DWG ဖွင့်သည့်အခါ ဖတ်။

### UNGROUP

{{cmd:UNGROUP}} သည် group များကို ခွဲ: group ၏ object များကို ရွေး (ပါဝင်သော group တိုင်း ခွဲ)၊ သို့မဟုတ် `Name` နှင့် group ၏ အမည်ကို ရိုက်။ Object များ drawing တွင် ကျန်။ Undo အဆင့် တစ်ခုဖြင့် group များ ပြန်ရ။

### GROUPEDIT

{{cmd:GROUPEDIT}} သည် group တစ်ခုကို ပြောင်း။ ၎င်း၏ object တစ်ခုကို ရွေး၊ သို့မဟုတ် `Name` နှင့် ၎င်း၏အမည်ကို ရိုက်; ရွေးပြီးသား group ကို ရှိသည်အတိုင်း ယူ။ ထို့နောက်: `Add` object များ (တစ်ခုချင်း ရွေး၊ group တစ်ခုချင်း မဟုတ်)၊ `Remove` object များ၊ group ကို `REName`၊ `Description` ပြော၊ သို့မဟုတ် `Selectable` (object တစ်ခုကို နှိပ်လျှင် group တစ်ခုလုံး ရွေးမရွေး) ကို သတ်မှတ်။ `eXit` သို့မဟုတ် Enter က ဆုံး။ Object မကျန်တော့သော group သည် ပျောက်။

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1` (စတင်ချိန် ဆက်တင်) ဖြင့် group ထဲ object ကို နှိပ်လျှင် သို့မဟုတ် window ဖြင့် group တစ်ခုလုံး ရွေး; `0` ဖြင့် object တစ်ခုချင်း၊ ထို့ကြောင့် အဖွဲ့ဝင်တစ်ခုကို တည်းဖြတ်နိုင်။ ဤ session အတွက် ထိန်း။

## Clipboard

CadCraft ၏ကိုယ်ပိုင် clipboard: drawing တစ်ခုအတွင်း၊ drawing များကြား နှင့် ဤ browser ရှိ CadCraft tab များကြား အလုပ်လုပ်။ See [ကူးခြင်း၊ ကူးထည့်ခြင်းနှင့် ပွားခြင်း](topic:copy-paste)။

### COPYCLIP

{{key:Mod+C}}၊ သို့မဟုတ် {{ui:ကူးရန်}} ကို {{ui:တည်းဖြတ်ရန်}} အုပ်စုတွင်။ Object များကို clipboard သို့ ကူး၊ သုံးထားသော block များနှင့် layer များပါ။ Object များ ရွေးထားဆဲ။

- `Select objects to copy` (object ရွေးပြီးသားဖြစ်လျှင် ကျော်)

### CUTCLIP

{{key:Mod+X}}၊ သို့မဟုတ် {{ui:နောက်ထပ်}} မီနူးရှိ {{ui:ဖြတ်ရန်}}။ Object များကို clipboard သို့ ကူးပြီး ဖျက် (undo အဆင့် တစ်ခု)။

- `Select objects to cut` (object ရွေးပြီးသားဖြစ်လျှင် ကျော်)

### COPYBASE

Object များကို သင်ရွေးသော base point ဖြင့် clipboard သို့ ကူး; ကူးထည့်သည့်အခါ ထို point ကို နေရာချ။

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}၊ သို့မဟုတ် {{ui:တည်းဖြတ်ရန်}} အုပ်စုရှိ {{ui:ကူးထည့်ရန်}}။ ကော်ပီက cursor ကို လိုက်၊ ၎င်း၏ extents ၏ ဘယ်အောက်ထောင့်မှ ချိတ်ကပ် (သို့မဟုတ် center၊ သို့မဟုတ် `COPYBASE` point; see [CadCraft ဆက်တင်များ](topic:settings))။

- `Specify insertion point`

ကူးထည့်ထားသော object များ ရွေးထား။ Drawing တွင် အမည်တူ block ရှိပြီးသားဆိုလျှင် ဤ drawing ၏ အဓိပ္ပာယ်ဖွင့်ဆိုချက်ကို ထိန်း။

MarkupCraft တွင် ကူးထားသော ဧရိယာသည် CadCraft ကူးထားသည်ထက် အသစ်ပြီး (နှင့် 6 နာရီအတွင်း) ဖြစ်လျှင် {{key:Mod+V}} နှင့် `PASTECLIP` က ထိုဧရိယာကို ကူးထည့်သည်: `PASTEAREA` ကို ကြည့်။

### PASTEAREA

Alias: `PAREA`။ {{ui:ကူးထားသော နေရာကို ကူးထည့်ရန်}} ကို {{ui:နောက်ထပ်}} မီနူးတွင်။ MarkupCraft တွင် {{ui:ဧရိယာ ကူးရန်}} ဖြင့် ကူးထားသော ဧရိယာကို အမှန်အရွယ်ဖြင့် ပုံအဖြစ် ကူးထည့်။ See [drawing ထဲရှိ ပုံများ](topic:pictures)။

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (sheet တွင် drawing scale မရှိသောအခါသာ): ဂဏန်းတစ်ခု၊ {{key:Enter}} က စာရွက်အရွယ်အတွက်၊ သို့မဟုတ် `P`၊ ထို့နောက် `First point on the pasted area`၊ `Second point on the pasted area` နှင့် ၎င်းတို့၏ အမှန်အကွာအဝေး။

### PASTEORIG

{{key:Mod+Shift+V}}၊ သို့မဟုတ် {{ui:နောက်ထပ်}} မီနူးရှိ {{ui:နေရာတွင် ကူးထည့်ရန်}}။ Object များ ကူးခဲ့သော coordinate များတွင် ကူးထည့်။ ဘာမျှ မမေး။

### DUPLICATE

Alias: `DUP`။ {{key:Mod+D}}၊ သို့မဟုတ် {{ui:နောက်ထပ်}} မီနူးရှိ {{ui:ပွားပြီး ရွှေ့ရန်}}။ Object များ၏ ကော်ပီသည် ၎င်းရှိနေသည့်နေရာမှ pointer နှင့်အတူ ရွေ့; {{key:Esc}} က ဘာမျှ မထား။ Clipboard ကို မသုံး။

- `Select objects to duplicate` (object ရွေးပြီးသားဖြစ်လျှင် ကျော်)
- `Specify where the copy goes (Esc leaves nothing)`: နှိပ်၊ point ရိုက်၊ `@dx,dy` (pointer ရှိသည့်နေရာမှ)၊ သို့မဟုတ် ကာဆာဆီသို့ အကွာအဝေး။

### SELECT

`Select objects` (အောက်ပါ ရွေးချယ်မှု အားလုံးနှင့်) မေးပြီး သင်ရွေးသည်များကို နောက် command အတွက် သို့မဟုတ် နောက်ပိုင်း `P` အတွက် ရွေးထားဆဲ ထား။

### QSELECT

Alias: `QS`။ Browser တွင် {{ui:အမြန်ရွေး}} dialog (see [အရာဝတ္ထုများ ရွေးခြင်း](topic:select-objects#select-by-a-rule-quick-select))။ သို့မဟုတ် command line က `Enter object type`၊ `Enter property`၊ `Enter operator [=/<>/>/</*/Select all] <=>` နှင့် `Enter value` ကို မေး။ ကိုက်သည်များ ရွေးထားမှု ဖြစ်လာ။

### SELECTSIMILAR

Alias: `SIM`။ `Select objects [SEttings]` (သို့မဟုတ် လက်ရှိ ရွေးချယ်မှု): အမျိုးအစား၊ layer နှင့် အရောင် တူသော object အားလုံးကို ရွေး (နှင့် block အမည်၊ hatch pattern)။ `SE` က `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` ကို Enter အထိ ထပ်ခါထပ်ခါ မေး။

### FIND

Alias မရှိ; သို့မဟုတ် {{ui:တည်းဖြတ်ရန်}} › {{ui:နောက်ထပ်}} › {{ui:ရှာဖွေပြီး အစားထိုးရန်}}။ Browser တွင် {{ui:ရှာဖွေပြီး အစားထိုးရန်}} dialog (see [စာသားနှင့် label ထည့်ခြင်း](topic:text#find-and-replace-words))။ မရှိလျှင်: `Enter text to find`၊ ထို့နောက် `Enter replacement text (Enter: select what is found)`။ စာသား၊ attribute တန်ဖိုးနှင့် dimension စာသားတွင် ရှာ၊ ဖွင့်ထား tab သို့မဟုတ် ရွေးချယ်မှုတွင်။

### SELECTALL နှင့် DESELECT

`SELECTALL` (alias `AI_SELALL`၊ {{key:Mod+A}}) က ဖွင့်ထား tab ပေါ်တွင် တည်းဖြတ်နိုင်သော object အားလုံးကို ရွေး။ `DESELECT` (alias `AI_DESELECT`၊ `SELECTNONE`၊ သို့မဟုတ် {{key:Esc}}) က ရွေးချယ်မှုကို ရှင်း။

## အတိုင်းအတာများ

### DIMLINEAR

Alias: `DLI`၊ `DIMLIN`။ အလျားလိုက် သို့မဟုတ် ဒေါင်လိုက် အကွာအဝေး။

- `Specify first extension line origin [Select object]` (Enter သို့မဟုတ် `S`: `Select object to dimension`၊ ထို့နောက် line၊ arc၊ circle သို့မဟုတ် polyline အပိုင်း တစ်ခုကို နှိပ်)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`။ `T` က စာသား မေး (`<>` က တိုင်းထားသော တန်ဖိုး)၊ `H` နှင့် `V` က ဦးတည်ချက် ပြင်၊ `R` က `Specify angle of dimension line <0>` ကို မေး။

### DIMALIGNED

Alias: `DAL`၊ `DIMALI`။ Point နှစ်ခုကြား အမှန်တကယ် အကွာအဝေး။

- Origin များ {{cmd:DIMLINEAR}} ကဲ့သို့၊ ထို့နောက် `Specify dimension line location [Text]`။

### DIMANGULAR

Alias: `DAN`၊ `DIMANG`။

- `Select arc, circle or line, or Enter for a vertex`
- Arc: ၎င်း၏ ထောင့်။ Circle: `Specify second angle endpoint`။ Line: `Select second line`။ Enter: `Specify angle vertex`၊ `Specify first angle endpoint`၊ `Specify second angle endpoint`။
- `Specify dimension line location [Text]`: တိုင်းမည့် ထောင့်အတွင်း နှိပ်။

### DIMRADIUS နှင့် DIMDIAMETER

Alias: `DRA`၊ `DIMRAD`; `DDI`၊ `DIMDIA`။

- `Select arc or circle`၊ ထို့နောက် `Specify dimension line location [Text]`။

### DIMCONTINUE

Alias: `DCO`၊ `DIMCONT`။ ပြုလုပ်ထားသော နောက်ဆုံး linear သို့မဟုတ် aligned dimension မှ ဆက် (သို့မဟုတ် `Select linear or aligned dimension` ကို မေး)။

- `Specify second extension line origin [Undo]` ကို Enter အထိ ထပ်ခါထပ်ခါ။

### DIMBASELINE

Alias: `DBA`၊ `DIMBASE`။ {{cmd:DIMCONTINUE}} နှင့် ဆင်တူ၊ သို့သော် dimension တိုင်း ပထမ origin မှ စ၍ ပိုအပြင်ဘက်တွင် ထပ်။

### DIMORDINATE

Alias: `DOR`၊ `DIMORD`။ `Specify feature location` ထို့နောက် `Specify leader endpoint [Xdatum/Ydatum/Text]`။ Feature သည် UCS origin မှ X သို့မဟုတ် Y ဘက်တလျှောက် အကွာအဝေးကို leader ပေါ် ရေး: အထက် သို့မဟုတ် အောက် ပိုသော leader က X ဖတ်၊ ဘေးသို့ ပိုသော leader က Y ဖတ်; `Xdatum` နှင့် `Ydatum` က ဘယ်ဟာ ဖြစ်ရမလဲ ပြင်။ ဦးစွာ origin ကို {{cmd:UCS}} ဖြင့် သတ်မှတ် (မရှိလျှင် drawing ၏ 0,0)။ Grip များက feature၊ origin နှင့် leader ၏အဆုံးကို ရွှေ့၊ တန်ဖိုးက လိုက်။ DWG နှင့် DXF တွင် အမှန်တကယ် ordinate dimension အဖြစ် သိမ်း။ Feature ပေါ်ရှိ leader အဆုံးကို ငြင်းပယ်။

### DIMARC

Alias: `DAR`။ `Select arc or polyline arc segment`၊ ထို့နောက် `Specify arc length dimension location [Text]`။ Arc တလျှောက် (chord မဟုတ်) တိုင်းပြီး တန်ဖိုးရှေ့တွင် arc symbol ရေး။ Circle အပြည့်၊ line သို့မဟုတ် မျဉ်းဖြောင့် polyline အပိုင်းကို ငြင်းပယ်။ DWG သည် arc length dimension အဖြစ် ထိန်း; DXF သည် angular dimension အဖြစ် ထိန်း၊ အရှည်ကို စာသားအဖြစ်; CadCraft က arc length dimension အဖြစ် ပြန်ဖွင့်။

### DIMJOGGED

Alias: `DJO`၊ `JOG`။ `Select arc or circle`၊ `Specify center location override`၊ `Specify jog location`။ Center ဝေးသည် သို့မဟုတ် sheet ပြင်ပ ရှိသော curve အတွက် radius dimension: dimension line သည် center အစား သင်ပေးသော point မှ စ၍ jog တစ်ခုပါ၊ သို့သော် အမှန်တကယ် radius ကို ရေးဆဲ။ DWG သည် jogged radius dimension အဖြစ် ထိန်း; DXF သည် radius dimension အဖြစ် ထိန်း၊ CadCraft က jogged အဖြစ် ပြန်ဖွင့်။

### DIMJOGLINE

Alias: `DJL`။ `Select dimension to add jog [Remove]`၊ ထို့နောက် `Specify jog location (or press Enter)`။ Linear သို့မဟုတ် aligned dimension ၏ line ပေါ် jog symbol ထည့်၊ အကွာအဝေး scale အတိုင်း မဆွဲကြောင်း ပြ; တန်ဖိုး မပြောင်း။ `Remove` က ဖယ်။ အခြား dimension အမျိုးအစားကို ငြင်းပယ်။

### QDIM

Alias မရှိ။ `Select geometry to dimension`၊ ထို့နောက် `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`။ Object အများအပြားကို တစ်ဆင့်တည်း dimension: line နှင့် polyline အပိုင်းများ၏ အဆုံး၊ circle နှင့် arc များ၏ center၊ point များ နှင့် block reference များမှ။ Object များ၏ အပေါ် သို့မဟုတ် အောက် ရာထားသော အနေအထားသည် ဖြတ်တိုင်း၊ ဘေးရာထားသော အနေအထားသည် အထက်တိုင်း။ `Continuous` က point များကို ချိတ်၊ `Baseline` က အားလုံးကို ပထမ မှ တိုင်း၊ `Staggered` က အလယ်မှ အပြင်သို့ အတွဲများ ခွဲ၊ `Ordinate` က point တိုင်း datum မှ အကွာအဝေး (`datumPoint` က datum အသစ် ရွေး)၊ `Radius` နှင့် `Diameter` က နှိပ်သော circle နှင့် arc တိုင်းကို dimension။ မုဒ်ကို မှတ်ထား။ ပြုလုပ်သည့်အရာအားလုံး undo အဆင့် တစ်ခု။ Point နှစ်ခုထက်နည်းလျှင် သို့မဟုတ် Radius နှင့် Diameter အတွက် arc သို့မဟုတ် circle မရှိလျှင် ထိုသို့ ပြော။

### DIMBREAK

Alias: `DBREAK`။ `Select dimensions to add or remove breaks`၊ ထို့နောက် `Break where other objects cross [Auto/Manual/Remove] <Auto>`။ `Auto` က အခြား object များ ဖြတ်သော နေရာတိုင်းတွင် dimension နှင့် extension line ၌ gap ထား၊ ထို object များ သို့မဟုတ် dimension ရွှေ့လျှင် gap ကို ပြန်တွက်။ `Manual` (dimension တစ်ခု) က point နှစ်ခုမေး၊ ထိုကြားတွင် gap ထား။ `Remove` က gap အားလုံး ဖယ်။ Gap သည် dimension ၏ စာသားအမြင့်၏ 1.5 ဆ။

### DIMSPACE

Alias မရှိ။ `Select base dimension`၊ `Select dimensions to space`၊ `Enter spacing value or Auto <Auto>`။ Parallel linear နှင့် aligned dimension များ (သို့မဟုတ် တူညီ vertex ၏ angular dimension များ) ၏ dimension line များကို အကွာအဝေး တူအောင် ရွှေ့၊ base dimension မှ တိုင်း၊ ၎င်း၏ဘက်တွင်ရှိသည်ဘက်စီ။ `0` က base နှင့် တန်းညီ၊ `Auto` က base dimension ၏ စာသားအမြင့်၏ နှစ်ဆ။ Base နှင့် ပြိုင်မဟုတ်သော dimension များကို ကိုယ်ပိုင်အတိုင်း ထား။

### DIMINSPECT

Alias မရှိ။ `Select dimensions`၊ `Inspection frame shape [Round/Angular/None/remove] <Round>`၊ `Enter label`၊ `Enter inspection rate <100%>`။ တန်ဖိုးပတ်လည် frame ဆွဲ၊ ရှေ့တွင် label၊ နောက်တွင် inspection rate။ `remove` က frame ဖယ်။ Tolerance စာသားသည် တန်ဖိုးနှင့်အတူ ကျန်။

### DIMOVERRIDE

Alias: `DOV`၊ `DIMOVER`။ `Enter dimension variable name to override or Clear`၊ `Enter new value for …`၊ Enter အထိ ထပ်ခါထပ်ခါ၊ ထို့နောက် `Select dimensions`။ ရွေးထားသော dimension များပေါ်တွင်သာ ထိုဆက်တင်များ ပြောင်း; dimension style မပြောင်း။ ဂဏန်း သို့မဟုတ် ခလုတ်ဖြစ်သော variable များကို ယူ (`DIMTXT`၊ `DIMASZ`၊ `DIMSCALE`၊ `DIMDEC`၊ `DIMSE1` …)။ `Clear` က ရွေးထား dimension များကို style သို့ ပြန်ထား။ ထို variable မဟုတ်သော နာမည်နှင့် မယူနိုင်သော တန်ဖိုးကို ငြင်းပယ်။

### DIMREASSOCIATE

Alias: `DRE`၊ `DIMREASSOC`။ `Select dimensions`၊ ထို့နောက် တစ်ခုစီအတွက် ၎င်း၏ extension line origin များ (`Specify first extension line origin on an object`: line ၏ အဆုံး သို့မဟုတ် အလယ်၊ polyline ထောင့်၊ center သို့ snap; Enter က point ကို လွတ်ထား)၊ သို့မဟုတ် radius၊ diameter၊ jogged radius သို့မဟုတ် arc length dimension အတွက် `Select arc or circle`။ ထို့နောက် dimension သည် ထို object များနှင့် ချိတ်၊ ၎င်းတို့ ရွှေ့သို့မဟုတ် အရွယ်ပြောင်းလျှင် တူညီသော undo အဆင့်တွင် လိုက်ပြီး ထပ်တိုင်း။ ချိတ်ထားသော point ကို လက်ဖြင့် ရွှေ့ခြင်း သို့မဟုတ် object ကို ဖျက်ခြင်းက ချိတ်ဆက်မှု ပြတ်။ ချိတ်ဆက်မှုကို DWG နှင့် DXF 2000 တွင် CadCraft ၏ကိုယ်ပိုင် data အဖြစ် သိမ်း; အခြား program များက ပုံမှန် dimension တစ်ခုအဖြစ် မြင်။

### DIMDISASSOCIATE

Alias: `DDA`၊ `DIMDISASSOC`။ `Select dimensions`။ ချိတ်ထားသော object များမှ လွတ်စေ; ဘာမျှ မရွေ့။

### CENTERMARK

Alias: `CM`၊ `DIMCENTER`၊ `DCE`။ `Select circle or arc to add center mark`၊ Enter အထိ ထပ်ခါထပ်ခါ။ Center တွင် ကန့်ဖြတ် ပုံနှင့် curve အပြင် ထိ center line လေးခု (linetype CENTER)၊ လက်ရှိ layer ပေါ် ရိုးရိုး line များအဖြစ်; လက်ရှိ dimension ဆက်တင်များ၏ arrow size နှင့် overall scale မှ အရွယ်ညှိ၊ UCS ဖြင့် လှည့်။ Circle ရွှေ့လျှင် လိုက်ခြင်း မရှိ။

### CENTERLINE

Alias: `CL`။ `Select first line`၊ `Select second line`။ Line နှစ်ခုကြား အလယ်တွင် line တစ်ကြောင်း (ဆုံလျှင် bisector တလျှောက်)၊ ၎င်းတို့ထက် အနည်းငယ် ရှည်၊ linetype CENTER ဖြင့်။ ရိုးရိုး line တစ်ခု: line နှစ်ခုကို မလိုက်။

### DIMSCALE၊ DIMTXT၊ DIMASZ၊ DIMDEC၊ DIMGAP၊ DIMEXE၊ DIMEXO

Alias မရှိ။ တစ်ခုစီက `Enter new value for … <current>` ကို မေး၊ ထို အရွယ်ကို **အသစ်** dimension များအတွက် သတ်မှတ်: overall scale၊ စာသားအမြင့်၊ arrow size၊ ဒသမနေရာ (8 အထိ)၊ စာသား ဝန်းကျင် gap၊ dimension line ကျော် extension၊ origin မှ offset။ See [dimension အရွယ်အစားများ သတ်မှတ်ခြင်း](topic:dimension-settings)။

### DIMLUNIT

Dimension ဆက်တင်: အသစ် dimension များ၏ format သာ (1 scientific၊ 2 decimal၊ 3 engineering၊ 4 architectural၊ 5 fractional)။

### DIMSTYLE နှင့် -DIMSTYLE

Alias: `DST`၊ `DDIM`၊ `D`။ Dimension style manager: {{ui:လက်ရှိအဖြစ် သတ်မှတ်ရန်}}၊ {{ui:အသစ်…}}၊ {{ui:ပြင်ရန်…}}၊ {{ui:အမည်ပြောင်းရန်…}}၊ {{ui:ဖျက်ရန်}}၊ {{ui:နှိုင်းယှဉ်ရန်…}}၊ {{ui:ရွေးထားသည်များသို့ သက်ရောက်ရန်}}။ Command line တွင် `-DIMSTYLE`: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`။ See [dimension အရွယ်အစားများ သတ်မှတ်ခြင်း](topic:dimension-settings#named-dimension-styles)။

### DIMEDIT နှင့် DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`၊ ထို့နောက် dimension များ (သို့မဟုတ် ရွေးပြီးသားများ)။ New က စာသား မေး (`<>` = တိုင်းတန်ဖိုး)၊ Rotate က ထောင့်မေး (0 က စာသားကို ပြန်ထား)၊ Oblique က extension line ၏ X axis မှ ထောင့် (Enter = မရှိ၊ linear နှင့် aligned dimension များတွင်သာ)။ `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`။ See [dimension အရွယ်အစားများ သတ်မှတ်ခြင်း](topic:dimension-settings#change-dimension-text-and-extension-lines)။

### DIMTEXTUNIT

Alias: `DTU`။ `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`၊ သို့မဟုတ် dimension ရွေးထားစဉ် `Units in the text of the selected dimensions`။ တိုင်းထားသော အရှည်ကို ထို unit ဖြင့် ရေး၊ unit ကို နောက်တွင် ရေး (DIMLFAC နှင့် DIMPOST suffix); `D` က drawing unit သို့ ပြန်။ See [dimension များကို mm၊ cm၊ m သို့မဟုတ် km ဖြင့်](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)။

### REVCLOUD

Alias: `RC`။ `Arc length: … Type: …` ကို ပြပြီး `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`။ Rectangular က `Specify opposite corner` ကို မေး; Polygonal က `Specify next point (Enter closes the cloud) [Undo]`; Freehand က နှိပ်သည် သို့မဟုတ် {{key:Enter}} အထိ pointer ကို လိုက်; `O` က `Select object` နှင့် `Reverse direction? [Yes/No] <N>` ကို မေးပြီး object ကို cloud ပြောင်း။ `A` က `Specify the length of each arc` ကို မေး။ `R`၊ `P` နှင့် `F` က နောက် cloud အတွက် အမျိုးအစား ရွေး။ ရလဒ်သည် arc များ၏ ပိတ်ထား polyline တစ်ခု။

### MLEADER

Alias: `MLD`; သို့မဟုတ် {{ui:Leader}}။ `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`၊ `Specify leader landing location`၊ ထို့နောက် in-place box တွင် စာသား (သို့မဟုတ် ၎င်းမရှိလျှင် `Enter text (an empty line ends)`)။ `Block` က ဘလောက်အမည်ကို ဦးစွာ မေး၊ multileader က စာသားအစား ထိုဘလောက်ကို ပြ။ Leader line နောက်ထပ်များ: {{cmd:MLEADEREDIT}}။ DWG တွင် တကယ့် multileader အဖြစ် သိမ်း; DXF က ဆွဲထားသော line၊ arrowhead နှင့် စာသားကို ထိန်း။

### MLEADEREDIT

Alias: `MLE`။ `Select a multileader`၊ ထို့နောက် `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: point တိုင်းက arrowhead အသစ်မှ ဆင်းသက်သော leader line တစ်ခုကို landing တူအတွက် ထည့်၊ Enter အထိ။ `Remove leaders` က နှိပ်သော leader line ကို ဖယ် (multileader သည် အနည်းဆုံး တစ်ခု ထိန်း)။ `Block content` က ဘလောက်အမည် မေး၊ စာသားအစား ထိုဘလောက်ကို ပြ (attribute များ မေး)။ `Text content` က စာသား ပြန်ထား။ Leader line တစ်ခုစီ ကိုယ်ပိုင် grip ရှိ။ DWG သည် leader line အားလုံးနှင့် ဘလောက်ကို multileader တစ်ခုတည်းတွင် ထိန်း။

### MLEADERALIGN

Alias: `MLA`။ `Select multileaders`၊ ထို့နောက် `Select multileader to align to [Distribute/Spacing/Use current spacing]` နှင့် `Specify direction`။ အခြား multileader များ၏ landing (နှင့် ၎င်းတို့၏ စာသား သို့မဟုတ် ဘလောက်) ကို ရွေးထားသော တစ်ခု၏ landing ကို ဖြတ်သော ဦးတည်ချက် line ပေါ် ရွှေ့; arrowhead များက ညွှန်ထားရာတွင်ပင်ရှိ။ `Spacing` က ညီညီ အကွာအဝေးလည်း ပေး၊ `Distribute` က point နှစ်ခု မေး၊ ထိုကြားတွင် ညီညီ ဝေ။ Multileader အနည်းဆုံး နှစ်ခု လို။

### MLEADERCOLLECT

Alias: `MLC`။ `Select multileaders`၊ ထို့နောက် `Specify collected multileader location [Vertical/Horizontal]` (Enter က ပထမတစ်ခု၏ နေရာကို ထိန်း)။ Multileader များစွာမှ တစ်ခု ပြုလုပ်: block content များသည် ဘလောက်အသစ်တစ်ခုထဲ ထည့်၊ ထိုဘလောက်က ဘေးချင်း သို့မဟုတ် အောက်တစ်ခုစီ ထား; text content များသည် မှတ်ချက်တစ်ခုဖြစ်လာ၊ လိုင်းတစ်ခုစီ။ ပထမ multileader က leader line များကို ထိန်း; အခြားများကို ဖယ်။ စာသားနှင့် block content ကို ရောမရ။

### TABLE

Alias: `TB`; သို့မဟုတ် {{ui:မှတ်ချက်ရေးရန်}} › {{ui:နောက်ထပ်}} › {{ui:ဇယား}}။ Table ပြု: ရွှေ့၊ ကော်ပီ၊ လှည့်၊ scale နှင့် plot လုပ်နိုင်သော object တစ်ခု၊ ဆဲလ်များ ဒေတာအဖြစ် ထိန်း။

- `Number of data rows or [Paste/File/Style] <3>`၊ ထို့နောက် `Number of columns <3>`၊ `Text height` နှင့် `Top left corner of the table`။ Table တွင် title အတန်း (ဆဲလ်တစ်ခု ပေါင်း) နှင့် data အတန်းများ အပေါ်တွင် header အတန်းတစ်ခု ရ။
- `P`: clipboard ရှိ spreadsheet ဆဲလ်များမှ table (ဆဲလ်များကြား tab ပါသော စာသား)။ Clipboard တွင် ထိုဆဲလ်များရှိစဉ် {{key:Ctrl+V}} ကို နှိပ်လျှင် တူညီ၊ CadCraft ၏ကိုယ်ပိုင် ကော်ပီ အသစ်မဖြစ်သည့်အခါ (သို့မဟုတ် CadCraft မပြောနိုင်သည့်အခါ: ထိုအခါ ကိုယ်ပိုင် ကော်ပီကို ကူးထည့်ပြီး ထိုသို့ ပြော)။ `F`: `.csv` သို့မဟုတ် tab ခွဲထားသော ဖိုင်မှ table။ ပထမအတန်းသည် header အတန်း၊ ကော်လံအကျယ်သည် စာသားနှင့် ကိုက်။
- `S`: ဤ table အတွက် table style ရွေး (see {{cmd:TABLESTYLE}})။
- အတန်း သို့မဟုတ် ကော်လံ အရေအတွက် ပြည့်စုံသော ဂဏန်းမဟုတ်လျှင် ငြင်းပယ်၊ table တစ်ခုတွင် ထည့်ရန် မှန်သည်ထက် ဆဲလ်များ ပိုလျှင် ငြင်းပယ် (အတန်း 2,000၊ ကော်လံ 200၊ ဆဲလ် 40,000)။
- {{cmd:EXPLODE}} က table ကို လိုင်းနှင့် စာသား ပြောင်း။ DWG အဖြစ် သိမ်းလျှင် table သည် အခြား program များက တည်းဖြတ်နိုင်သော table object တစ်ခု; DXF အဖြစ် သိမ်းလျှင် ၎င်းကို ဆွဲသော block ဖြစ်ပြီး CadCraft က table အဖြစ် ပြန်ဖွင့်။

### TABLEDIT

Alias: `TABLEEDIT`၊ `TABEDIT`; သို့မဟုတ် ဆဲလ်ကို နှစ်ချက်နှိပ်။ Table တည်းဖြတ်။

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`။ ဆဲလ်ကို နှိပ်၊ သို့မဟုတ် table ရွေးပြီးလျှင် ၎င်း၏အမည် ရိုက် (`B3`: ကော်လံ B၊ အတန်း 3; title အတန်းသည် အတန်း 1)။ Browser တွင် ဆဲလ်ပေါ် box ဖွင့်: {{key:Enter}} က စာသားကို ထိန်း၊ {{key:Tab}} က ဆဲလ်နောက်တစ်ခုသို့၊ {{key:Alt+Enter}} က လိုင်းသစ်၊ {{key:Esc}} က ဆဲလ်ကို မူလအတိုင်း ထား။
- `=` ဖြင့် စသော စာသားသည် formula: `=A3+B3`၊ `=B3*C3`၊ `=Sum(B3:B9)`၊ `=Average(B3:B9)`၊ `=Count(B3:B9)`၊ `=Min(…)`၊ `=Max(…)`၊ `+ - * / ^`၊ ကွင်းများနှင့် `sqrt` နှင့် `round` ကဲ့သို့ function များဖြင့်။ ဆဲလ်က တန်ဖိုးကို ပြ; ကိုယ်ပိုင်ဆဲလ်ကို ရည်ညွှန်းသော၊ table ပြင်ပ ဆဲလ်ကို ရည်ညွှန်းသော၊ သို့မဟုတ် ဂဏန်းမပါသော ဆဲလ်ကို ရည်ညွှန်းသော formula က `####` ပြ၊ command line က အကြောင်းပြ။
- `R` / `C`: ဆဲလ်ကို နှိပ်၍ `Insert` သို့မဟုတ် `Delete` အတန်း သို့မဟုတ် ကော်လံ (ဘယ်နှစ်ခု၊ အပေါ် သို့မဟုတ် အောက်၊ ဘယ် သို့မဟုတ် ညာ)။ Formula များသည် ၎င်းတို့ ရည်ညွှန်းသော ဆဲလ်များကို လိုက်။
- `S`: ကော်လံ၏ အကျယ်နှင့် အတန်း၏ အမြင့်။ အတန်းသည် စာသား လိုအပ်သည်ထက် ဘယ်တော့မှ နိမ့်မ။ Table ရွေးထားလျှင် ကော်လံ နှင့် အတန်း ၏ အစွန်းတိုင်းတွင် grip ရှိ။
- `M`: ဆဲလ်တစ်ခုမှ နောက်တစ်ခုသို့ ပေါင်း; `U`: ပေါင်းမှု ဖယ်။ `A`: ညှိနှိုင်းမှု (`TL` ဘယ်အပေါ် … `MC` အလယ်အလယ် … `BR` ညာအောက်)။ `H`: ဤဆဲလ်၏ ကိုယ်ပိုင် စာသားအမြင့် (0 = style)။ `K`: အတန်းကို title၊ header သို့မဟုတ် data အတန်း ပြု။ `CL`: ဆဲလ်ကို ရှင်း။
- Locked layer ရှိ table၊ ကော်လံ သို့မဟုတ် အတန်း အားလုံး ဖျက်ခြင်း၊ နှင့် အခြား ပေါင်းထားသော ဆဲလ်ကို နှစ်ပိုင်းခွဲမည့် ပေါင်းခြင်းကို ငြင်းပယ်။

### TABLESTYLE

Alias: `TS`။ Table style များကို စာရင်းပြ၊ သုံးသော table အရေအတွက်တစ်ခုစီနှင့်အတူ၊ ထို့နောက် `Table style: [New/Set/Edit/Delete/Apply]`။

- Style တစ်ခုသည် title၊ header နှင့် data အတန်းများအတွက် စာသားအမြင့်နှင့် ညှိနှိုင်းမှု၊ ဆဲလ် margin၊ နှင့် မည်သည့် border များ ဆွဲမလဲ (အပြင်၊ အတန်းကြား၊ ကော်လံကြား) ကို ထားသည်။
- `N` က လက်ရှိမှ style ပြု၍ လက်ရှိအဖြစ် ပြု; `S` က လက်ရှိ style ကို သတ်မှတ် (table အသစ်များ ယူ); `E` က တည်းဖြတ်: ထို style ကို သုံးသော table များကို ပြန်ဆွဲ; `A` က ရွေးထားသော table များကို လက်ရှိ style ပေး; `D` က တစ်ခု ဖျက် (Standard မဟုတ်၊ လက်ရှိ မဟုတ်; ထို style ကို သုံးခဲ့သော table များ ၎င်းတို့၏ ပုံစံ ထိန်း)။
- Style များကို drawing (DWG နှင့် DXF) တွင် သိမ်း။

### TABLEEXPORT

Table ပြသသည်ကို CSV ဖိုင်အဖြစ် သိမ်း (formula ကို တန်ဖိုးအဖြစ်)။ `Select a table`၊ သို့မဟုတ် ဦးစွာ ရွေး။ `=`၊ `+`၊ `-` သို့မဟုတ် `@` ဖြင့် စသော စာသားဆဲလ်များတွင် ရှေ့ `'` ထည့်၍ spreadsheet က မ run အောင်။

### TABLEPASTE

Alias: `PASTETABLE`။ Clipboard ရှိ spreadsheet ဆဲလ်များမှ table ပြု၊ ထို့နောက် ၎င်း၏ ဘယ်အပေါ်ထောင့်ကို မေး။ {{cmd:TABLE}} › `Paste` နှင့် တူ။

### DATALINK

Alias: `DL`။ `Data link: [New/List/Remove] <New>`။ `N` က CSV ဖိုင် မေး၊ ၎င်း၏ table တစ်ခု နေရာချ၊ ဖိုင်အမည်ကို မှတ်; `L` က link များကို ဖိုင်၊ အရွယ်၊ ဖတ်ခဲ့သည့်အချိန်၊ table အရေအတွက်ဖြင့် စာရင်း; `R` က link ကို ဖယ် (ထို table များ ရိုးရိုး table အဖြစ် ကျန်)။

### DATALINKUPDATE

Alias: `DLU`။ Data link ၏ ဖိုင်ကို ထပ်ဖတ်ပြီး ၎င်းနှင့် ချိတ်ထားသော table များကို ပြန်ဖြည့် (အတန်းနှင့် ကော်လံများကို ကိုက်ညီအောင် ထည့် သို့မဟုတ် ဖယ်)။ Browser က ဖိုင်ကို ကိုယ်တိုင် မဖွင့်နိုင်သဖြင့် ဖိုင်ကို ထပ်ရွေးရန် မေး။ Link အများအပြားရှိလျှင် မည်သည်ကို မေးသည်။

### FIELD

Drawing တွင် field ထည့်: အလိုအလျောက် တွက်ထားသော စာသား။ `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: ယခု သို့မဟုတ် သိမ်း၊ ဖန်တီး၊ plot ထုတ်သော ရက်စွဲ၊ နှင့် format (`yyyy-MM-dd`၊ `d MMMM yyyy`၊ `HH:mm`)။ `F`: ဖိုင်အမည်၊ extension ပါ သို့မဟုတ် မပါ။ `S`: sheet နံပါတ်၊ ခေါင်းစဉ် သို့မဟုတ် sheet စုစုပေါင်း အရေအတွက်။ `P`: drawing property ကို နာမည်ဖြင့် ({{cmd:DWGPROPS}} ကို ကြည့်)။ `O`: object ရွေး၊ ထို့နောက် ဖတ်ရမည့်အရာ (ဧရိယာ၊ အရှည်၊ perimeter၊ radius၊ diameter၊ layer၊ နာမည်၊ x၊ y၊ စာသား၊ rotation၊ အရောင်) နှင့် ဒသမ။ `E`: formula။ `C`: ကုဒ်များပါသော စာသား ရိုက်ထား ဥပမာ `Sheet %<sheetnumber>% of %<sheetcount>%`။
- ထို့နောက် `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: ရွေးသော စာသားကို field ထည့် ၎င်း၏ နောက်တွင်; table ဆဲလ်လည်း အလားတူ; attribute ပါ block reference က မည်သည့် attribute မေး; {{key:Enter}} က စာသားအသစ် အတွက် အမြင့်နှင့် point ကို မေး။
- ဖန်သားပြင်တွင် field သည် မီးခိုးအလင်း နောက်ခံ; plot နှင့် PDF တွင် ဘယ်တော့မှ မပါ။ Field ၏ စာသားကို လက်ဖြင့် ရိုက်ထပ်လျှင် field ပြီး။ တွက်မရသော field က `####` ပြ။
- Object ၏ field သည် CadCraft က object ပေါ်ထားသော key (ဆက်တင်များ › CadCraft › Merge-friendly files) ဖြင့် object ကို ရှာ; key များ ပိတ်ထားလျှင် ငြင်းပယ်။

### UPDATEFIELD

Alias: `UPDATEFIELDS`။ `Select the objects whose fields to update (Enter: every field) or [Settings]`။ `S` က field များ အလိုအလျောက် ပြောင်းသည့်အချိန် သတ်မှတ်: `O` open၊ `S` save၊ `P` plot၊ `R` regen အက္ခရာများ (စတင်ချိန်တွင် လေးခုစလုံး) သို့မဟုတ် `NONE`။

### DWGPROPS

Alias: `DRAWINGPROPS`။ Drawing ၏ property များ စာရင်း၊ ထို့နောက် `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`။ ပထမ ခုနစ်ခုသည် {{ui:Drawing details}} panel တွင် ပြသည်များ; `U` က သင့်ကိုယ်ပိုင် နာမည်နှင့် တန်ဖိုး ထည့်၊ `R` က တစ်ခုကို ဖယ်။ Field များ ၎င်းတို့ကို ဖတ် (`%<prop:title>%`၊ `%<prop:Client>%`) ပြီး ချက်ချင်း လိုက်။ ပါဝင်ပြီးသား နာမည်ဖြစ်သော သို့မဟုတ် `%`၊ `<`၊ `>`၊ quote သို့မဟုတ် backslash ပါသော custom နာမည်ကို ငြင်းပယ်။

## Parametric

See [drawing ကို constrain လုပ်ခြင်း](topic:constraints) နှင့် [parameter နှင့် equation များ သုံးခြင်း](topic:parameters)။ Constraint များသည် {{ui:Model}} tab ပေါ် အလုပ်လုပ်။

### GEOMCONSTRAINT နှင့် GC command များ

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`၊ ထို့နောက် ထို command ၏ prompt များ။

- {{cmd:GCHORIZONTAL}}၊ {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`။
- {{cmd:GCPARALLEL}}၊ {{cmd:GCPERPENDICULAR}}၊ {{cmd:GCCOLLINEAR}}၊ {{cmd:GCCONCENTRIC}}၊ {{cmd:GCEQUAL}}၊ {{cmd:GCTANGENT}}: `Select first object`၊ `Select second object` (ဒုတိယသည် ရွေ့)။
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`၊ `Select second point [Object] <Object>`။
- {{cmd:GCFIX}}: `Select point [Object] <Object>`။
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`၊ `Select second object`၊ `Select symmetry line`။

### DIMCONSTRAINT နှင့် DC command များ

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`။

- {{cmd:DCLINEAR}}၊ {{cmd:DCHORIZONTAL}}၊ {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`၊ `Specify second constraint point`၊ `Specify dimension line location`၊ `Dimension text <d1=40>` (ဂဏန်း၊ expression၊ သို့မဟုတ် `name=expression`)။
- {{cmd:DCALIGNED}}: အထက်ပါအတိုင်း၊ `[Object/Point & line/2Lines]` ဖြင့်။
- {{cmd:DCRADIUS}}၊ {{cmd:DCDIAMETER}}: `Select arc or circle`။ {{cmd:DCANGULAR}}: `Select first line or arc`၊ `Select second line`။
- {{cmd:DCCONVERT}}: `Select dimensions to convert`။

### AUTOCONSTRAIN၊ DELCONSTRAINT၊ CONSTRAINTBAR၊ DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`။ `S` က distance နှင့် angle tolerance များ မေး။
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`၊ ၎င်းတို့၏ constraint များ ပျောက်။
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`၊ ထို့နောက် `[Show/Hide]`။
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`။

### PARAMETERS နှင့် -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`၊ `PARAM`) က {{ui:Parameters}} panel ဖွင့်။ `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`။

### SWBOUT

Alias `SWMACRO`။ SolidWorks တွင် model ကို constrained sketch တစ်ခုအဖြစ် ပြန်ဆောက်သော macro (.swb) ကို ဒေါင်းလုဒ်။ See [အခြား part modeler များသို့ နှင့် မှ sketch ရွှေ့ခြင်း](topic:solidworks-sketches)။

## Block များ

### ANNOSCALE

Alias: `CANNOSCALE`။ Drawing ၏ annotation scale နှင့် annotative object အရေအတွက်ကို ပြော၊ ထို့နောက် `New annotation scale` ကို မေး: `1:50`၊ `1:100`၊ `2:1`၊ ဂဏန်းတစ်ခု (`50` က 1:50)၊ သို့မဟုတ် drawing ၏ ကိုယ်ပိုင် scale တစ်ခု၏ နာမည်ရိုက်။ Annotative စာသားနှင့် dimension တိုင်းကို scale အသစ်တွင် တူညီသော အရွယ်ဖြင့် print ထွက်အောင် အရွယ်ပြောင်း၊ undo အဆင့် တစ်ခု; annotative မဟုတ်သော object များကို မထိ၊ scale စာရင်းရှိ scale အသစ် မပါသော object ([OBJECTSCALE](topic:units-papers-scales#annotate-by-scale)) ကိုလည်း မထိ။ See [Units၊ papers နှင့် scale များ](topic:units-papers-scales#annotate-by-scale)။

### OBJECTSCALE

Alias: `OBJSCALE`။ `Select annotative objects`၊ ထို့နောက် `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`။ Annotative စာသား သို့မဟုတ် dimension တစ်ခုသည် annotation scale စာရင်းကို ထိန်း။ `Add` နှင့် `Delete` က scale မေး (`1:50`၊ `2:1`၊ ဂဏန်း၊ သို့မဟုတ် drawing ၏ ကိုယ်ပိုင် scale နာမည်); `Current scale` က drawing ၏ annotation scale ကို ထည့်; `List` က object တစ်ခုစီ၏ scale များကို ပြ။ Object ၏ စာရင်းတွင် scale ရှိသော viewport သည် ထို scale ၏ paper height ကို print ထုတ်သော အရွယ်ဖြင့် object ကို ပြ၊ မျက်နှာပြင်နှင့် plot တွင်။ နောက်ဆုံး scale ကို ဖျက်၍ မရ။ Annotative မဟုတ်သော object များကို ချန်ထား: ဦးစွာ Properties တွင် Annotative ကို ဖွင့်။ စာရင်းများကို DWG နှင့် DXF တွင် CadCraft ၏ကိုယ်ပိုင် data အဖြစ် သိမ်း။ See [Units၊ papers နှင့် scale များ](topic:units-papers-scales#annotate-by-scale)။

### ANNOALLVISIBLE

Alias: `ANNOALL`။ `Show annotative objects at all scales [ON/OFF]`။ ON (drawing စတင်ချိန် ဖြစ်သည့်အတိုင်း): annotative object သည် စာရင်းတွင် မပါသော scale ရှိ viewport သို့မဟုတ် model တွင်လည်း ၎င်း ရှိသော အရွယ်ဖြင့် ပြ။ OFF: ထိုနေရာတွင် မပြ၊ model တွင် ရွေး၍ မရ။ ခလုတ်သည် undo အဆင့် တစ်ခု; ဖိုင်တွင် မသိမ်း။

### SCALELISTEDIT

Alias: `SCALELIST`။ `Scale list [Add/Edit/Delete/List/Reset]` ကို Enter အထိ။ Add: `Scale name`၊ `Paper units`၊ `Drawing units`။ Edit နှင့် Delete က scale ၏ နာမည် မေး။ Drawing ၏ ကိုယ်ပိုင် scale များ viewport နှင့် plot scale စာရင်းထဲ ဝင်၊ drawing နှင့်အတူ သိမ်း။ See [Units၊ papers နှင့် scale များ](topic:units-papers-scales#scales)။

### SPLINE၊ SPLINEDIT နှင့် PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`။ Fit: curve ဖြတ်သွား point များ၊ `Close`၊ `Undo`၊ ထို့နောက် `Start tangent` နှင့် `End tangent` (point တစ်ခု၊ သို့မဟုတ် {{key:Enter}})။ Method › Control vertices က degree (1 မှ 5) မေးပြီး control polygon မှ ဆွဲ။ Object က polyline များ ၏ vertex များမှတဆင့် spline ပြောင်း။ `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`။ `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`၊ object အများအပြားအတွက် `M`; line၊ arc နှင့် spline များကို ဦးစွာ polyline အဖြစ် ပေး။ See [Spline နှင့် polyline](topic:splines)။

### BLOCK

Alias: `B`၊ `BMAKE`။

- `Enter block name`။ ရှိပြီးသားဆိုလျှင်: `Block "…" already exists. Redefine it? [Yes/No] <N>`။
- `Specify insertion base point`
- `Select objects`။ ၎င်းတို့ကို ဘလောက်အသစ်၏ reference တစ်ခုဖြင့် အစားထိုး။

### WBLOCK

Alias: `W`၊ `-WBLOCK`။ ဘလောက်၊ object အချို့ သို့မဟုတ် drawing အပြည့်ကို DWG သို့မဟုတ် DXF ဖိုင်အသစ်အဖြစ် ရေး။ `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ဖိုင်အသစ်၏ origin ဖြစ်လာ)၊ `Select objects`၊ ထို့နောက် `File format [DWG/DXF/R12 DXF]` နှင့် `File name for the new drawing`၊ ထို့နောက် `What to do with the objects [Retain/Convert to block/Delete]`။ Convert က ၎င်းတို့ကို ဖိုင်အမည်ရှိ ဘလောက်တစ်ခု၏ reference တစ်ခုဖြင့် အစားထိုး; Delete က ဖျက်။
- **Block**: `Block to write out`။ ဘလောက်၏ ကိုယ်ပိုင် object များ၊ ၎င်း၏ base point သည် origin၊ nested ဘလောက်များပါ။
- **Entire drawing**: model space ရှိ object အားလုံး။ Sheet များကို မရေး; sheet ပါသော ကော်ပီအတွက် {{cmd:SAVEAS}} ကို သုံး။

ဖိုင်အသစ်တွင် ၎င်း၏ object များ သုံးသော layer၊ linetype၊ စာသားနှင့် dimension style များနှင့် ဘလောက်များ၊ နှင့် drawing ၏ unit များကိုသာ ပါ။ DWG ၏ ဗားရှင်းသည် {{cmd:SAVEAS}} နောက်ဆုံး သုံးခဲ့သည်။ Browser တွင် ဖိုင်ကို ဒေါင်းလုဒ်; Studio တွင် သိမ်းဆည်းရန် dialog ဖွင့်။

### ATTDEF

Alias: `ATT`၊ `DDATTDEF`၊ `-ATTDEF`; သို့မဟုတ် {{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:အက်ထရီဗျူတ် သတ်မှတ်ရန်}}။ Mode များကို ပြ၊ ထို့နောက် `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`၊ `Enter attribute tag name`၊ `Enter attribute prompt`၊ `Enter default attribute value` (constant ဖြစ်လျှင် `Enter attribute value`)၊ `Specify start point of text`၊ `Specify text height`၊ `Specify rotation angle of text`။ {{cmd:BLOCK}} က attribute သတ်မှတ်ချက်များကို ဘလောက်ထဲ ယူ။

### EATTEDIT နှင့် ATTEDIT

`EATTEDIT` (`DDATTE`၊ သို့မဟုတ် attribute ပါ reference ကို နှစ်ချက်နှိပ်၊ {{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:အရည်အချင်းများ တည်းဖြတ်ရန်}}): `Select a block reference with attributes`၊ ထို့နောက် {{ui:အရည်အချင်းများ တည်းဖြတ်ရန်}} dialog။ `ATTEDIT` (`ATE`၊ `-ATTEDIT`): တူညီသော reference၊ ထို့နောက် attribute တစ်ခုစီအတွက် `<prompt> (<TAG>) <value>`; {{key:Enter}} က တန်ဖိုးကို ထိန်း။ See [Attribute များ](topic:attributes#see-and-change-the-values)။

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`။ တန်ဖိုးများ ထိန်း; attribute အသစ်များ default ရ၊ ဖယ်ထားသည်များ ပျောက်၊ နေရာများ ပြန်သတ်မှတ်။

### BATTMAN

{{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:အက်ထရီဗျူ့ မန်နေဂျာ}}။ Dialog: block၊ attribute များ (tag၊ prompt၊ default၊ mode၊ အစီအစဉ်)၊ {{ui:ကိုးကားချက်များကို အပ်ဒိတ်လုပ်ရန် (တန်ဖိုးများ ထိန်းသိမ်းထား)}}၊ {{ui:အသုံးပြုရန်}}။

### REFEDIT နှင့် REFCLOSE

{{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:နေရာတွင် တည်းဖြတ်ရန်}}။ `REFEDIT`: `Select the block reference to edit in place` (သို့မဟုတ် ရွေးထားသည်)။ `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; bar ရှိ {{ui:block ကို သိမ်းရန်}} နှင့် {{ui:ပယ်ရန်}} က တူညီ။ တည်းဖြတ်မှု တစ်ခုလုံး undo အဆင့် တစ်ခု။ See [Attribute များ](topic:attributes#edit-a-title-block-where-it-is-refedit)။

### PENPRESSURE

`[ON/OFF]`: ဘောပင်ဖိအားက {{cmd:SKETCHFIX}} နှင့် {{cmd:SKETCHLIVE}} ထုတ်သည်များ၏ lineweight ကို သတ်မှတ်ခြင်း ရှိ/မရှိ (စတင်ချိန် ဖွင့်)။ See [ဘောပင်ဖြင့် ပုံဖော်ခြင်း](topic:sketch-with-a-pen#pressure-sets-the-lineweight)။

### OFFICESTANDARD

Alias: `OFFSTD`။ ဤ drawing အတွက် အသုံးဝင်သော office standard ကို ပြော၊ ၎င်း မည်သည်နေရာမှ လာသလဲ: drawing ၏ ကိုယ်ပိုင် record၊ သင့်အဖွဲ့၏ မျှဝေ standard၊ သို့မဟုတ် Default Policies (စာသားအမြင့် `all.anno.*`); မရှိလျှင် program ၏ ကိုယ်ပိုင် အရွယ်။ `[Import/Layers/Title block/Clear/eXit]`: `Import` က `cc-office-standard` .json (SuperCad နှင့် BimCraft ရေးသော record) ကို ဤ drawing သို့ ဖတ်၊ DWG နှင့် DXF တွင် ၎င်းနှင့်အတူ သိမ်း; `Layers` က drawing တွင် မရှိသော office layer များကို ထည့်၊ undo အဆင့် တစ်ခုတွင်၊ ဘယ်တော့မှ ဖယ်မ; `Title block` က office ၏ field များကို ဤ drawing ၏ ကိုယ်ပိုင် တန်ဖိုးဖြင့် စာရင်း; `Clear` က drawing ၏ ကိုယ်ပိုင် record ကို ဖယ်။ Annotative စာသားနှင့် dimension အမြင့်များ အသုံးဝင်သော standard ကို လိုက်။ See [Units၊ papers နှင့် scale များ](topic:units-papers-scales)။

### BPARAMS

Alias: `BPM`၊ `BLOCKPARAMS`။ Block editor ရှိ ဘလောက်၊ ရွေးထားသော reference ၏ ဘလောက်၊ သို့မဟုတ် သင်နာမည်ပေးသော ဘလောက် (`Block name`) အတွက် Parameters manager ဖွင့်: formula ပါသော parameter များ၊ state များပါသော visibility parameter အများအပြား၊ နှင့် ရွေးထားသော reference ၏ ကိုယ်ပိုင် တန်ဖိုးနှင့် state များ။ See [ကိုယ်ပိုင် parameter နှင့် visibility state များ](topic:dynamic-blocks#your-own-parameters-and-visibility-states)။ `-BPARAMS` က command line တွင် တူညီ: `[Parameter/Visibility/State/Assign/Reference/Done]`။

### BEDIT နှင့် BCLOSE

`BE`; သို့မဟုတ် {{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:ဘလောက် တည်းဖြတ်ရန်}}။ `Enter block name to edit <the selected reference's block>` က block editor ဖွင့်။ `BCLOSE` က `Close the block editor on "…" [Save/Discard] <Save>` ကို မေး; banner ရှိ {{ui:ဘလောက် သိမ်းရန်}} နှင့် {{ui:ပြောင်းလဲမှု ပယ်ရန်}} က တူညီ။ Editor တွင် ပြုသည်အားလုံး undo အဆင့် တစ်ခု။

### VIEWBASE

Alias: `FLATSHOT`။ 3D tab ရှိ solid များ၏ flat 2D view: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`၊ `Hidden lines [Show/Hide]`၊ scale (`1:20`၊ `2:1`; {{key:Enter}} က sheet နှင့် ကိုက်သည်ကို ယူ)၊ ထို့နောက် view ၏ center။ ဘလောက် reference တစ်ခု၊ မြင်ရသော ဆုံးများ VIEW-VISIBLE တွင်၊ ဝှက်ထားသော ဆုံးများ VIEW-HIDDEN တွင် dashed။ See [sheet ပေါ် flat view များ](topic:3d-solids#flat-views-on-a-sheet)။

### PUBLISH

Alias: `-PUBLISH`; သို့မဟုတ် {{ui:Plot to PDF}} dialog ရှိ {{ui:စာရွက်အားလုံး PDF တစ်ခုတည်းအဖြစ်}}။ `Sheets to plot [All/Some]`: {{key:Enter}} က sheet အားလုံးကို plot၊ `S` က နာမည်များ (ကော်မာဖြင့်ခွဲ) မေး။ PDF တစ်ခု၊ sheet တစ်ခုအတွက် စာမျက်နှာနှင့် bookmark။ See [PDF တစ်ခုတည်းတွင် sheet အားလုံး](topic:plot-pdf#every-sheet-in-one-pdf)။

### SHEETSET

Alias: `SSM`၊ `SHEETSETMANAGER`။ ဘယ်ဘက် panel ရှိ {{ui:Sheet set}} အပိုင်းသို့ သင့်ကို ယူသွား: drawing အများအပြားမှ sheet များ၊ နံပါတ်နှင့် ခေါင်းစဉ်ပေး၊ title block များကို set မှ ဖြည့်၊ PDF တစ်ခုတည်းအဖြစ် publish။ See [Sheet set များ](topic:sheet-sets)။

### XATTACH၊ XREF

{{cmd:XATTACH}} (`XA`): DWG သို့မဟုတ် DXF ရွေး၊ ထို့နောက် insertion point။ {{cmd:XREF}} (`XR`၊ `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; link တစ်ခုထက်ပို ရှိလျှင် reference တစ်ခုကို ရွေး သို့မဟုတ် `N` နှင့် ၎င်း၏ နာမည်။ See [Linked drawing များ](topic:files#linked-drawings-external-references)။

### COUNT

Alias: `BCOUNT`; သို့မဟုတ် {{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:ဘလောက်များ ရေတွက်ရန်}}။ `Select a block reference to count, or [All/Export] (Enter: All)`: pick က ထို space ရှိ ထို block ၏ reference အားလုံးကို ရွေး၍ ရေတွက်; {{key:Enter}} သို့မဟုတ် `A` က အားလုံးကို စာရင်း; `E` ထို့နောက် `C` (ရေတွက်) သို့မဟုတ် `A` (attribute) က CSV ဒေါင်းလုဒ်။ See [ဘလောက်များ ရေတွက်ပြီး schedule ထုတ်ခြင်း](topic:blocks#count-blocks-and-export-a-schedule)။

### INSERT

Alias: `I`၊ `DDINSERT`။

- `Enter block name or [File/Library] <last block>` (အက္ခရာအကြီးအသေး အရေးမကြီး)။ `F` က DWG သို့မဟုတ် DXF မေး၊ ထို့နောက် drawing အပြည့် သို့မဟုတ် ဘလောက်တစ်ခု; ရှိပြီးသား အမည်ဆိုလျှင် {{ui:ရှိပြီးသားကို ထားရန်}} သို့မဟုတ် {{ui:အမည်ပြောင်းရန်}} ကို မေး။ `L` က library panel ဖွင့်။
- `Specify insertion point [Scale/Rotate]`။ `S` က `Specify scale factor` ကို မေး၊ `R` က `Specify rotation angle` ကို မေး; နှစ်ခုစလုံး မှတ်ထား။
- ဘလောက်က ထပ်နေသော object များနှင့် ဘေးချင်း ရှိပြီး ထိုကိုယ်တိုင်မပါဘဲ အရာတစ်ခု ထပ်နေလျှင် အကြောင်းတစ်ကြောင်း နေရာ အရေအတွက် အကြံပြုသည်ကို ပြ၊ prompt တွင် `suGgested` ထည့်: `G` က ပြ; နီးသော နေရာကို နှိပ်လျှင် ဘလောက် ထိုနေရာ၌ ထား၊ `A` က အားလုံး၊ {{key:Enter}} က နောက်သို့။ ၎င်းတို့က ပတ်ဝန်းကျင် rotation နှင့် default attribute တန်ဖိုးများ ယူ။ Open space တွင် object 20,000 ကျော်ရှိသော drawing ကို မရှာ။
- ထို့နောက် ဘလောက်က မေးသော attribute တိုင်းအတွက် `Enter <prompt> (<TAG>) <default>`။ See [ဘလောက် attribute များ](topic:attributes)။

### LIBRARY

Alias: `LIB`။ Library panel ဖွင့်: item များ နေရာချ၊ update စစ်၊ library credit များ။ မေးခွန်းမရှိ။ See [ဖိုင် သို့မဟုတ် library မှ သွင်းခြင်း](topic:insert-from-file-and-library)။

### STEELMEMBER

Alias: `SMEMBER`; သို့မဟုတ် library ၏ {{ui:Standard}} tab ရှိ {{ui:3D member}}။ `Section size <W12x26>` (tab ၏ စာရင်းအတိုင်း)၊ ထို့နောက် `Start point [Column]` နှင့် `End point`: 3D tab ပေါ် ဆုံး နှစ်ခုကြား solid member၊ မြေပေါ်တွင်။ `C` က ကော်လံ၏ base point နှင့် အမြင့် မေး။ Undo အဆင့် တစ်ခု။ See [steel section နှင့် standard part များ နေရာချခြင်း](topic:steel-and-standard-parts)။

### PARTSLIST

Alias: `PLIST`။ `Top left corner of the parts list`၊ ထို့နောက် `Text height <2.5>`: library မှ နေရာချထားသော standard part နှင့် steel section တိုင်း၏ table (item နံပါတ်၊ အရေအတွက်၊ part၊ standard၊ အရွယ်၊ အရှည်၊ ပစ္စည်း၊ mass)။ Undo အဆင့် တစ်ခု။ See [steel section နှင့် standard part များ နေရာချခြင်း](topic:steel-and-standard-parts#make-a-parts-list)။

### PURGE

Alias: `PU`။ ဘယ်သူမှ မသုံးသော block definition များ ဖယ်။ မေးခွန်းမရှိ။

### DELBLOCKS

{{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:Block များ ဖျက်ရန်}}။ `Select block to delete [Name/eXit]`: block reference ရွေး၊ သို့မဟုတ် `N` အတွက် filter ဖြင့် ဘလောက်များ စာရင်း (အများအပြား ရွေး)၊ `X` / {{key:Enter}} က ဆုံး။ Reference အားလုံး ပျက် (model၊ sheet အားလုံး နှင့် အခြား block များအတွင်း) ထို့နောက် definition; command line က ဖျက်ခဲ့သည်နှင့် မဖျက်နိုင်သည်များကို ပြော။ Unnamed block နှင့် linked drawing များကို မပေး။ Prompt က နောက်ဘလောက်အတွက် ပြန်လာ; command တစ်ခုလုံး undo အဆင့် တစ်ခု။

### PASTEBLOCK

{{cmd:PASTEBLOCK}} သည် သင်ကူးထားသည် ({{cmd:COPYCLIP}}၊ {{cmd:COPYBASE}}) ကို block တစ်ခုအဖြစ် ကူးထည့်: insertion point ရွေး၊ block အသစ်တစ်ခုသို့ reference တစ်ခု ထို နေရာ၌ ရွေးထား။ ဘလောက်က ကိုယ်ပိုင် နာမည် (`A$C` နှင့် နံပါတ်) ရ; {{cmd:RENAME}} ဖြင့် သင့်နာမည် ပေး။ Undo အဆင့် တစ်ခုက reference နှင့် ဘလောက်ကို ဖယ်။

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} က အစားထိုးမည့် ဘလောက်နှင့် ၎င်း၏နေရာတွင် ထားမည့် ဘလောက်ကို မေး (`?` က ဘလောက်များ စာရင်း)၊ ထို့နောက် model၊ sheet အားလုံး နှင့် အခြား block များအတွင်း reference တိုင်းကို ပြောင်း။ Reference တစ်ခုစီသည် ၎င်း၏ နေရာ၊ scale၊ rotation၊ layer နှင့် ဘလောက်နှစ်ခုစလုံး၏ attribute တန်ဖိုးများကို ထိန်း; ဘလောက်အသစ်တွင်သာ ရှိသော attribute များသည် default ဖြင့် စ၊ ဘယ်တန်ဖိုးများ ပျောက်သည်ကို ပြော။ ဟောင်းဘလောက်ကို ဘယ်သူမှ မသုံးတော့လျှင် ဖယ်ရန် ကမ်းလှမ်း။ Linked drawing များကို ငြင်းပယ်၊ ဘလောက်ကိုယ်တိုင် အတွင်းဝင်သော အစားထိုးမှုကိုလည်း ငြင်းပယ်။ Undo အဆင့် တစ်ခု။

### MINSERT

{{cmd:MINSERT}} သည် ဘလောက်ကို အတန်းနှင့် ကော်လံ ဖြင့် နေရာချ: ဘလောက်အမည်၊ insertion point၊ scale၊ rotation၊ အတန်းနှင့် ကော်လံ အရေအတွက်၊ နှင့် ၎င်းတို့ကြား အကွာအဝေး။ အစုအဝေးတစ်ခုလုံး rotation ဖြင့် လှည့်။ တစ်ခုစီသည် ကိုယ်ပိုင် reference (10,000 အထိ)၊ ထို့ကြောင့် နောက်ပိုင်း တစ်ခုခုကို ရွှေ့ သို့မဟုတ် ဖျက်နိုင်။

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; သို့မဟုတ် {{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:Blocks panel}}။ Cursor ကို filter တွင်ထားပြီး {{ui:ဘလောက်များ}} panel ကို ပြ။ ဘလောက်တိုင်းတွင် ပုံငယ်တစ်ခု; နောက်ဆုံး နေရာချထားသည်များ ရှေ့ဆုံး။ Filter ဘေးရှိ ခလုတ်နှစ်ခုက စာရင်းနှင့် ပုံဂရစ်ကြား ပြောင်း။ ပုံတစ်ခုကို နှိပ် (သို့မဟုတ် {{ui:သွင်းရန်}}) ဘလောက်ကို {{cmd:INSERT}} ဖြင့် နေရာချ၊ သို့မဟုတ် drawing ပေါ် ဆွဲချ ဖြတ်ချနေရာတွင်။

စာရင်းအောက်ရှိ {{ui:စာကြည့်တိုက်များ}}: {{ui:drawing ထည့်ရန်}} က ကိုယ်ပိုင် DWG သို့မဟုတ် DXF ဖိုင်တစ်ခုကို ယူ၊ ၎င်း၏ဘလောက်များကို ပုံများနှင့်အတူ စာရင်းပြ၊ drawing တစ်ခုလုံးကို ဘလောက်တစ်ခုအဖြစ်လည်း။ ဘလောက်တစ်ခု နေရာချသည့်အခါ ၎င်း၏ definition (နှင့် ၎င်းအတွင်း ဘလောက်များနှင့် layer များ) ကို ဤ drawing သို့ {{cmd:INSERT}} ၏ `File` ရွေးချယ်မှုကဲ့သို့ ကူး; ဤနေရာတွင် ရှိပြီးသား တူညီသော definition ဖြင့် ဘလောက်ကို မေးမရဘဲ သုံး၊ အမည်တူ မတူညီသောဆိုလျှင် {{ui:ရှိပြီးသားကို ထားရန်}} သို့မဟုတ် {{ui:အမည်ပြောင်းရန်}} ကို မေး။ Browser တွင် ဖိုင်သည် စာမျက်နှာ ပိတ်သည်အထိ ရှိ။ CadCraft Studio တွင် {{ui:ဖိုဒါ ထည့်ရန်}} က ဖိုင်တွဲရှိ drawing များကို စာရင်း၊ နှိပ်သည့်အခါ ဖွင့်၊ ဖိုင်နှင့် ဖိုင်တွဲများ မှတ်ထား။ ခလုတ်အသေး x သည် စာရင်းမှ စာကြည့်တိုက် ဖယ်၊ ဖိုင်ကို မထိ။ မျှဝေ {{ui:စာကြည့်တိုက်}} သည် အခြားအရာ: See [ဖိုင် သို့မဟုတ် library မှ သွင်းခြင်း](topic:insert-from-file-and-library)။

### BCONVERT

{{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:ထပ်နေသည်များကို ဘလောက်အဖြစ် ပြောင်းရန်}}။ ထပ်နေသော ဂျီအိုမေတြီကို ရှာ၊ ကော်ပီတိုင်းကို ဘလောက်တစ်ခု၏ reference အဖြစ် ပြောင်း။

- `Select the objects that repeat, or [Block]`: ကော်ပီတစ်ခု၏ object များ။ `B` က ရှိပြီးသား ဘလောက်တစ်ခုအစား၊ ၎င်း၏ object များ၏ loose ကော်ပီများ ရှာ။
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`၊ `S` နှင့် `P` က ကော်ပီ၏ အရေးပါသည်များကို ပြောင်း; {{key:Enter}} က ရှာ။ ရွေးချယ်မှုများ မှတ်ထား။
- `Name for the new block <Block1>`၊ ထို့နောက် `Specify the block's base point` ({{key:Enter}} က ရွေးချယ်မှု၏ ဘယ်အောက်ထောင့်)။
- အခြား object အစုအဝေး မည်မျှ ဂျီအိုမေတြီတူ ဆိုသည်ကို ပြော၊ အစားထိုးမည့် အရာအားလုံး မီးမောင်းထိုး၊ `Yes/No` မေး။

ကော်ပီ ဆိုသည်မှာ object များ ရွှေ့၊ ထောင့်တိုင်း လှည့်ထားသည့် တူညီ object များ (ဖွင့်ထားလျှင် ဖော်ပြထားသော factor ဖြင့် မှန်ပြောင်း သို့မဟုတ် scale လုပ်ထား); object တိုင်းတွင် ၎င်း၏ တူညီသော ကိစ္စ ရှိရမည်၊ ရွေးချယ်မှု၏ အရွယ်၏ သန်းတစ်ပုံအတွင်း။ Reference တစ်ခုစီ ကိုယ်ပိုင် rotation နှင့် scale (မှန်ပြောင်းထားလျှင် Y scale နုတ်); objects များ ဝေမျှသော layer ကို ယူ။ Locked layer ရှိ object များ ကိုယ်ပိုင်အတိုင်း ထား၊ ရေတွက်ပြ။ Open space (model သို့မဟုတ် ဖွင့်ထား sheet) ကို ရှာ။ အလွန်ကြီးသော ရှာမှုသည် အလုပ်ကန့်သတ်ချက်တွင် ရပ်ပြီး ထိုသို့ ပြော။ Undo အဆင့် တစ်ခု။

### BSEARCH

{{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:ဘလောက်များ ရှာရန်}}။ `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: ဘလောက်နာမည်၏ အစိတ်အပိုင်း၊ သို့မဟုတ် `*` နှင့် `?` ပါသော pattern။ ဘလောက်တစ်ခုစီကို ဤနေရာနှင့် drawing တစ်ခုလုံးရှိ reference များနှင့်အတူ စာရင်း။
- `A`: attribute တန်ဖိုး၊ သို့မဟုတ် `TAG=value`။ Reference များ ၎င်းကို ထိန်းသော ဘလောက်များကို တွေ့ထားသော တန်ဖိုးများဖြင့် စာရင်း။ Constant attribute များ ထည့်။
- `G`: object များ သို့မဟုတ် block reference တစ်ခု ရွေး၊ ပုံသဏ္ဍာန် အနည်းဆုံး 85% တူသော ဘလောက်များကို အကောင်းဆုံး ဦးစွာ စာရင်း။ အရွယ်အစား၊ rotation နှင့် mirror မစဉ်းစား။ တိုင်းတာမှုသည် outline တလျှောက် ပြန့်ကျဲသော point များကြား အကွာအဝေးများကို နှိုင်းယှဉ်၊ ထို့ကြောင့် တူညီသော ပုံစံများကို ရှာ; တိကျသော ကော်ပီများ ရှာရန် {{cmd:BCONVERT}} ကို သုံး။

Open space တွင် တွေ့သော reference များကို ရွေးထားပြီး နောက် command အတွက် အဆင်သင့်။

### BREPLACE

{{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:ဘလောက်များ အစားထိုးရန်}}။ `Replace [Selected/All]`: `S` က ရွေးထားသော block reference များကို သင်အမည်ပေးသော ဘလောက်ဖြင့် အစားထိုး; `A` က ဘလောက်နှင့် ၎င်း၏ အစားထိုးမှုကို မေး၊ reference တိုင်းကို {{cmd:BLOCKREPLACE}} ကဲ့သို့ ပြောင်း (code တူ)။ Reference သည် ၎င်း၏ နေရာ၊ scale၊ rotation၊ layer နှင့် ဘလောက်နှစ်ခုစလုံး၏ attribute တန်ဖိုးများကို ထိန်း; ဘလောက်အသစ်တွင် နေရာမရှိသော တန်ဖိုးများ ပယ်ပြီး ပြော။ `?` က ဘလောက်များ စာရင်း။ Undo အဆင့် တစ်ခု။

### DATAEXTRACTION

Alias: `EATTEXT`၊ `DX`; သို့မဟုတ် {{ui:ဘလောက်များ}} › {{ui:နောက်ထပ်}} › {{ui:Data ထုတ်ယူခြင်း}}။ ဘလောက်များ၊ attribute များနှင့် object property များကို table သို့မဟုတ် CSV ဖိုင်အဖြစ် စာရင်း။

- ရွေးချယ်မှုပေါ် အလုပ်လုပ်၊ သို့မဟုတ် `Select objects (Enter: everything in this space)` ကို မေး။
- ရွေးချယ်မှုတွင် နှစ်ခုလုံးပါလျှင် `List: [Blocks/Objects/All]`။ အမည်မဲ့ ဘလောက်များ၊ table များနှင့် bill of materials များကို ဘယ်တော့မှ မစာရင်း။
- ရွေးနိုင်သော ကော်လံများကို ပြ (နာမည်၊ အမျိုးအစား၊ layer၊ X၊ Y၊ rotation၊ scale၊ အရှည်၊ ဧရိယာ၊ အရောင်၊ linetype၊ space နှင့် attribute tag တစ်ခုစီ)၊ ထို့နောက် `Columns, by name or number with commas between`။ {{key:Enter}} က ကြယ်ပွင့်ပါသော ရွေးချယ်မှုကို ယူ: ဘလောက်များအတွက် နာမည်နှင့် attribute အားလုံး; object များအတွက် အမျိုးအစား၊ layer နှင့် အရှည်။
- `Put identical rows together with a count? [Yes/No] <Yes>`၊ ထို့နောက် `Put the list in a: [Table/Csv] <Table>`။ Table သည် ပုံမှန် table ({{cmd:TABLEDIT}} က တည်းဖြတ်) ဖြစ်ပြီး live မဟုတ်; drawing ပြောင်းပြီးနောက် command ကို ပြန်လုပ်။
- ထိုစာရင်းတွင် မပါသော ကော်လံကို ငြင်းပယ်။ Table သည် ဒေတာအတန်း 1,999 ထိ; CSV ဖိုင်သည် အားလုံးကို ယူ။

### COUNTTABLE

ရွေးထားသည် (သို့မဟုတ် open space) ၏ block reference များကို ရေတွက်ပြီး ရေတွက်မှုများကို table (`Block`၊ `Count`) သို့မဟုတ် CSV ဖိုင်တွင် ထား။ Drawing နောက်က ကိုယ်တိုင် လိုက်သော ရေတွက်မှုအတွက် {{cmd:BOMTABLE}} ကို ကြည့်။

## Sheet နှင့် plot ထုတ်ခြင်း

### LAYOUT

Alias: `LO`၊ `NEWLAYOUT`; သို့မဟုတ် drawing အောက်ရှိ {{ui:+}} ခလုတ်။ Border၊ title block နှင့် viewport တစ်ခုပါသော sheet အသစ်၊ ISO A3 (သို့မဟုတ် inch သို့မဟုတ် feet drawing များအတွက် Tabloid)။ မေးခွန်းမရှိ။

### MVIEW

Alias: `MV`။ Sheet ပေါ်တွင်သာ ({{cmd:VPORTS}} sheet ပေါ်တွင် တူညီ)။

- `Specify corner of viewport [Polygonal/Object]`၊ `Specify opposite corner`။ Viewport က standard scale ဖြင့် model တစ်ခုလုံး ပြ။
- `P` (Polygonal): outline ၏ ထောင့်များကို နှိပ် (`Undo`၊ `Close`), {{key:Enter}} ကို ပြီးသောအခါ။ ထောင့် သုံးခုထက်နည်းလျှင် ငြင်းပယ်။
- `O` (Object): `Select a closed object for the viewport's outline`: sheet ပေါ်ရှိ ပိတ်ထား polyline၊ circle သို့မဟုတ် ellipse။ Viewport သည် ၎င်း၏ပုံသဏ္ဍာန်ယူ (မျဉ်းကွေးများသည် တိုတို မျဉ်းဖြောင့်အပိုင်းများ); object က မပြောင်း။ ပိတ်ထားမှ မဟုတ်သော object ကို ငြင်းပယ်။

### VPCLIP

Sheet ပေါ် ရှိပြီးသား viewport ကို clip။ `Select viewport to clip` (သို့မဟုတ် ဦးစွာ ရွေး)၊ ထို့နောက် `Select the object to clip to [Polygonal/Delete]`:

- ပိတ်ထား polyline၊ circle သို့မဟုတ် ellipse ကို နှိပ်၊ သို့မဟုတ် {{key:Enter}} (သို့မဟုတ် `P`) ဖြင့် polygon ထောင့်များကို နှိပ်။
- `D` (Delete၊ viewport clip ပါသည့်အခါ ပေး) က စတုဂံအဖြစ် ပြန်ပြ၊ ၎င်းတွင် ရှိသည့် outline ပတ်လည် ဘောင်။
- Viewport ပြသသည်မှာ စာရွက်ပေါ်မှ မရွှေ့၊ scale ထိန်း။ Model ကို outline အတွင်းသာ ဆွဲ၊ plot၊ နှင့် ဘောင်က လိုက်။ Undo အဆင့် တစ်ခု။
- Clip ထားသော viewport တွင် outline ၏ ထောင့်တိုင်းတွင် grip၊ center နှင့် ဘောင်၏ ထောင့်လေးခုအပြင်။ (ဘောင်ထောင့်ကို ဆွဲလျှင် outline ကို ဆန့်လိုက်)။ Properties က Outline: Rectangle၊ သို့မဟုတ် Clipped နှင့် ထောင့်အရေအတွက်ကို ပြ။
- DWG နှင့် DXF 2000 ဖိုင်များက outline ကို CadCraft အတွက် ထိန်း။ အခြား program များက viewport ကို ပတ်လည်ရှိ စတုဂံအဖြစ် ဖွင့်; DXF R12 က စတုဂံကိုသာ ထိန်း။
- Model tab တွင် viewport များသည် sheet ပေါ် ရှိကြောင်း ပြော။

### VPORTS

Alias: `VIEWPORTS`။ {{cmd:SPLIT}} သည် sheet မှလည်း တူညီ၊ ထို့အပြင် {{ui:အမြင်}} › {{ui:နောက်ထပ်}} › {{ui:ဘေးချင်းကပ် ခွဲရန်}}၊ {{ui:အထပ်လိုက် ခွဲရန်}}၊ {{ui:အပိုင်း လေးခု}}၊ {{ui:အပိုင်းတစ်ခု}} တို့က run။ Model ပေါ်: `Enter number of panes [SIngle/2/3/4] <3>`; `2` က `[Horizontal/Vertical] <Vertical>` (Vertical = ဘေးချင်း)၊ `3` က `[Left/Right] <Right>` (ကြီးသော pane ကို ဘယ်တွင်)။ Pane တစ်ခုစီက ကိုယ်ပိုင် view နှင့် space ထိန်း; နှိပ်လျှင် pane သည် active ဖြစ်။ Sheet ပေါ်တွင် {{cmd:MVIEW}}။ See [မျက်နှာပြင် ခွဲခြင်း](topic:split-screen)။

### VPVIEW

Alias မရှိ။ Sheet ပေါ်တွင်သာ။

- `Select viewport` (ရွေးပြီးသားဆိုလျှင် ကျော်)၊ ထို့နောက် model ပေါ်: `Specify first corner of the window to show`၊ `Specify opposite corner`။

### UCS

Alias မရှိ။ သင့်ကိုယ်ပိုင် coordinate system; ပြင်ဆင်ခြင်း မဟုတ်။ `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: point က origin အသစ်၊ ထို့နောက် `Specify point on X-axis (Enter keeps the angle)`။ `Z`: `Specify rotation angle about Z axis <90>`။ `3`: origin၊ X axis အပေါ် point တစ်ခု၊ Y ၏ အပေါ်ဘက် point တစ်ခု။ `OB`: `Select object to align UCS`။ `NA`: `[Restore/Save/Delete/?]` နှင့် နာမည်။ X axis အသစ် ညီအောင် view လှည့်။ See [view လှည့်ခြင်းနှင့် ကိုယ်ပိုင် coordinate များ သုံးခြင်း](topic:ucs-and-turned-view)။

### PLAN

Alias မရှိ။ `Enter an option [Current ucs/Ucs/World] <Current ucs>`: ဖွင့်ထား pane ၏ view ကို UCS ၏ X axis (သို့မဟုတ် world ၏) ညီအောင် လှည့်။ Drawing ဘာမျှ မရွေ့။

### TURNLEFT၊ TURNRIGHT၊ TURNWORLD

Alias မရှိ; သို့မဟုတ် {{ui:အမြင်}} › {{ui:နောက်ထပ်}} › {{ui:မြင်ကွင်းကို 90° ဘယ်သို့ လှည့်ရန်}}၊ {{ui:မြင်ကွင်းကို 90° ညာသို့ လှည့်ရန်}}၊ {{ui:ကမ္ဘာသို့ ပြန်ရန်}}။ `UCS Z -90`၊ `UCS Z 90` နှင့် `UCS W` နှင့် တူ၊ view လိုက်။

### VPLAYER

Alias မရှိ။ Sheet ပေါ် သို့မဟုတ် viewport အတွင်း။ `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`၊ `T`၊ `R` က layer နာမည်များ (ကော်မာ၊ `*` နှင့် `?` wildcard) မေး၊ ထို့နောက် `[All/Select/Current] <Current>` viewport များ; Reset က layer တစ်ခုစီကို "frozen in new viewports" default သို့ ပြန်ထား; `V` က ထို default ကို သတ်မှတ် (`[Frozen/Thawed]`) ဖြင့် {{cmd:MVIEW}} သုံး။ `?` က လက်ရှိ viewport တွင် freeze ထားသော layer များကို ပြ။ Layers panel ၏ viewport ကော်လံက viewport တစ်ခုအတွက် တူညီ။ See [viewport တစ်ခုတွင် layer freeze လုပ်ခြင်း](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport)။

### MSPACE

Alias: `MS`; သို့မဟုတ် viewport အတွင်း နှစ်ချက်နှိပ်။ Sheet ပေါ်တွင်သာ။ Viewport မှတဆင့် model ပေါ် အလုပ်လုပ်: ရွေးထားတစ်ခု၊ sheet ပေါ် တစ်ခုတည်း၊ သို့မဟုတ် `Click inside the viewport to work in`။ အတွင်း pan နှင့် zoom က viewport ၏ view ကို ပြောင်း (display-locked တစ်ခုက ထိန်း၊ sheet က ရွေ့); view အသစ်ကို undo အဆင့် တစ်ခုအဖြစ် ရေး။ See [viewport မှတဆင့် model ပေါ်တွင် အလုပ်လုပ်ခြင်း](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)။

### PSPACE

Alias: `PS`; သို့မဟုတ် viewport ပြင်ပ နှစ်ချက်နှိပ်၊ သို့မဟုတ် drawing အောက်ရှိ tab ကို နှိပ်။ Sheet သို့ ပြန်။

### PLOT

Alias: `PRINT`၊ `PUBLISH`၊ `EXPORTPDF`; သို့မဟုတ် {{key:Mod+P}}။ {{ui:PDF သို့ ပလော့ရန်}} dialog ဖွင့်။ See [PDF သို့ plot](topic:plot-pdf)။

### PLOTSTYLES

Alias: `STYLESMANAGER`၊ `PSTABLES`; သို့မဟုတ် {{ui:PDF သို့ ပလော့ရန်}} dialog ရှိ {{ui:ဇယားများကို တည်းဖြတ်…}}။ {{ui:Plot style ဇယားများ}} ဖွင့်: အရောင်တစ်ခုစီ ဘာအဖြစ် print ထွက်မလဲ (color၊ gray၊ ink၊ lineweight)၊ drawing နှင့်အတူ ထိန်း။ See [Plot style ဇယားများ](topic:plot-pdf#plot-style-tables)။

### CHSPACE

{{cmd:CHSPACE}} သည် sheet နှင့် model ကြား viewport မှတဆင့် object များကို ရွှေ့၊ တခြားဘက်မှ ကြည့်လျှင် တူညီပုံ ပေါ်အောင် scale နှင့် လှည့်။ Sheet ပေါ်တွင် object ရွေး၊ model သို့ သွား (sheet တွင် viewport များစွာရှိလျှင် viewport ရွေး)။ Viewport မှတဆင့် model ပေါ်တွင် အလုပ်လုပ်စဉ် ({{cmd:MSPACE}}) ရွေးထားသော object များ sheet သို့ လာ။ ဘယ်လောက် ကြီး သို့မဟုတ် သေးလာသလဲ ပြော။ Viewport များ၏ sheet တွင် ကျန်။ Undo အဆင့် တစ်ခု။

### ISODRAFT

{{cmd:ISODRAFT}} က isometric drafting ကို `ON` သို့မဟုတ် `OFF` ပြု၊ သို့မဟုတ် `Left`၊ `Top` သို့မဟုတ် `Right` plane သို့ တိုက်ရိုက်ရောက်။ ဖွင့်ထားစဉ်: Ortho ({{key:F8}}) က plane ၏ axis နှစ်ခုကို လိုက်ထား (left: 90° နှင့် 150°; top: 30° နှင့် 150°; right: 30° နှင့် 90°)၊ polar tracking ({{key:F10}}) က axis တူ လိုက်၊ grid snap ({{key:F9}}) က isometric grid သုံး၊ grid ({{key:F7}}) က 30°၊ 90° နှင့် 150° line များဖြင့် ဆွဲ။ {{cmd:ELLIPSE}} က `Isocircle` ရ: center နှင့် radius (သို့မဟုတ် `Diameter`) ပေးလျှင် လက်ရှိ plane ပေါ် circle ပေါ်ပုံ ellipse ဆွဲ။ Drawing သည် ပြားနေဆဲ: ဤနေရာ သည် ပုံစံ ပုံဆွဲရန် အကူအညီများ၊ 3D model မဟုတ်။ ဆက်တင်သည် ဤ session အတွက်ဖြစ်၍ ဖိုင်တွင် မသိမ်း။

### ISOPLANE

{{cmd:ISOPLANE}} သည် isometric drafting ဆွဲမည့် plane ကို ရွေး: `Left`၊ `Top` သို့မဟုတ် `Right`။ Enter က နောက် plane သို့။ Isometric drafting ဖွင့်ထားစဉ် {{key:F5}} သည် command အလယ်တွင် တူညီစွာ လုပ်၊ ပိတ်ထားစဉ် {{key:F5}} ကို browser သို့ ထား။

## စစ်ဆေးခြင်း

### CAL

Alias မရှိ။ တွက်ချက်မှု၏ တန်ဖိုးကို ပြ၊ အရှည်ရိုက်နိုင်သည့်နေရာ မည်သည့်နေရာတွင်မဆို ရိုက်သည့်အတိုင်း။

- `Expression`: ရိုက်၊ ဥပမာ `12'6"+3/4"` သို့မဟုတ် `(24'-0")/3`၊ ထို့နောက် {{key:Enter}} ကို နှိပ်။ CadCraft က `= 12'-6 3/4"   (150.75 drawing units)` ကို ပြ။ See [ရိုက်ထားသော တန်ဖိုးအတွင်း ပေါင်းနှုတ်ခြင်း](topic:coordinate-entry#arithmetic-in-a-typed-value)။

### DIST

Alias: `DI`; သို့မဟုတ် {{ui:အမြင်}} › {{ui:နောက်ထပ်}} › {{ui:အကွာအဝေး တိုင်းရန်}}။

- `Specify first point`၊ `Specify second point`။ အကွာအဝေး၊ ထောင့်၊ Delta X နှင့် Delta Y ကို ပြ။

### AREA

Alias: `AA`; သို့မဟုတ် {{ui:အမြင်}} › {{ui:နောက်ထပ်}} › {{ui:ဧရိယာ}}။ ဧရိယာနှင့် perimeter ကို ပြ။

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - ထောင့်များကို နှိပ် သို့မဟုတ် ရိုက်; `Specify next point (Enter closes) [Undo]` တွင် {{key:Enter}} ကို နှိပ်၍ outline ပိတ်။ `U` က နောက်ဆုံး ထောင့်ကို ပြန်ယူ။
  - {{key:Enter}} သို့မဟုတ် `O`၊ ထို့နောက် `Select object`: circle (ပတ်လည်အရှည် ပြ)၊ ellipse၊ polyline (ဖွင့်ထားလျှင် ဧရိယာအတွက် မျဉ်းဖြောင့်ဖြင့် ပိတ်၊ အရှည်ပြ)၊ သို့မဟုတ် hatch (အပေါက်များ ဖယ်)။
  - `A` (Add area) နှင့် `S` (Subtract area) က running total ကို ထိန်း: prompt သည် `(ADD mode)` သို့မဟုတ် `(SUBTRACT mode)` ဖြင့် စ၊ ဧရိယာတိုင်းကို ပေါင်း သို့မဟုတ် နုတ်၊ `Total area = …` ကို အကြိမ်တိုင်း ပြ။ ဤမုဒ်များတွင် `O` က Enter အထိ object ရွေး၊ ပထမ prompt တွင် {{key:Enter}} က command ကို ပြီး။

### MEASUREGEOM

Alias: `MEA`။ `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; တိုင်းတာတိုင်းနောက် ထပ်မေး၊ `eXit` က မူလ။

`Quick` က pointer ကို ရွှေ့နေစဉ် ၎င်းပတ်လည် တိုင်းတာ: နီးဆုံး object ၏ ညာ၊ အပေါ်၊ ဘယ်နှင့် အောက်သို့ အကွာအဝေး (လက်ရှိ UCS ၏ axis များအတိုင်း)၊ သွားလာစဉ် ဆွဲ၊ နှင့် အိမ်နီးချင်းနှစ်ခု ဖြောင့်ပြီး တွေ့သော ထောင့်။ နှိပ်လျှင် အကွာအဝေးလေးခု၊ ရှင်း အကျယ်နှင့် အမြင့်၊ နှင့် ထောင့်များကို မှတ်တမ်းသို့ ရေး; Enter က options သို့ ပြန်။ ဖန်သားပြင်ပေါ်ရှိသည်ကို ဖတ်။

- `D`: point နှစ်ခု၊ {{cmd:DIST}} ကဲ့သို့။
- `R`: `Select arc or circle`; radius နှင့် diameter ကို ပြ။
- `A`: arc (ပါဝင်သော ထောင့်)၊ line တစ်ခုနှင့် ဒုတိယ line (နှစ်ခုကြား ထောင့်၊ ၎င်းတို့၏ ဝေးသော အဆုံးဘက်)၊ သို့မဟုတ် {{key:Enter}} နှင့် point သုံးခု (vertex၊ ထို့နောက် အဆုံးနှစ်ခု)။
- `AR`: {{cmd:AREA}} ကဲ့သို့၊ ဧရိယာတစ်ခု။

### ID

Alias မရှိ။ `Specify point`; X နှင့် Y ကို ပြ။

### LIST

Alias: `LI`၊ `LS`။ `Select objects`; object တစ်ခုစီ၏ အမျိုးအစား၊ layer နှင့် အဓိက တိုင်းတာမှုများကို ပြ။

### MASSPROP

{{cmd:MASSPROP}} သည် သင်ရွေးသော region များနှင့် ပိတ်ထား object များ၏ section property များကို ပေး: ဧရိယာ၊ perimeter၊ bounding box၊ centroid၊ X နှင့် Y axis များကို origin ဖြတ်၍ moment များ၊ product of inertia၊ radii of gyration၊ centroid ကို ဖြတ်သော အလားတူ moment များ၊ နှင့် principal moment များနှင့် ၎င်းတို့၏ axis ဦးတည်ချက်များ။ Region အတွင်း အပေါက်များ အပေါက်အဖြစ် ရေတွက်။ တန်ဖိုးများ drawing unit ဖြင့်၊ line နှင့် arc ဖြင့် ပုံသဏ္ဍာန် အတွက် အတိအကျ; ellipse နှင့် spline များကို တိုတို မျဉ်းဖြောင့်အပိုင်းအဖြစ် တိုင်း၊ ထို့ကြောင့် ထိုသို့ ပြော။ Report ပြီးနောက် စာသားဖိုင်သို့ ရေးမလား မေး။ ပိတ်မနေသော object များကို ချန်၊ အရေအတွက် ပြော။

## ကြည့်ရှု၊ ဖိုင်နှင့် အခြား

### ZOOM

Alias: `Z`။

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`။ Window အတွက် ထောင့်နှစ်ခု နှိပ်။ `E`၊ `A` သို့မဟုတ် Enter: drawing အပြည့်။
- `P` (Previous၊ သို့မဟုတ် toolbar ရှိ {{ui:ယခင်}}) က ယခင် view သို့ ပြန်၊ tab တစ်ခုအတွက် view 10 အထိ; wheel အဆင့်များ တစ်ကြိမ် သို့မဟုတ် pan တစ်ကြိမ်သည် view တစ်ခု ရေတွက်။
- `2`၊ `2x` သို့မဟုတ် `0.5x` ကဲ့သို့ ဂဏန်း (သို့မဟုတ် `S` နှင့် ဂဏန်း) က မျက်နှာပြင် အလယ်ဝန်းကျင် ထို factor ဖြင့် zoom in သို့မဟုတ် out။
- `C` က `Specify center point` နှင့် `Enter height or magnification (nX)` ကို မေး။

### PDFATTACH၊ PDFIMPORT နှင့် PDF command များ

Alias: `PDFATT` {{cmd:PDFATTACH}} အတွက်၊ `PDFIM` {{cmd:PDFIMPORT}} အတွက်။ {{cmd:PDFATTACH}} က PDF စာမျက်နှာကို drawing အောက် underlay ထား (ဖိုင်၊ စာမျက်နှာ၊ insertion point၊ scale၊ rotation); {{cmd:PDFIMPORT}} က စာမျက်နှာ၏ line၊ curve၊ fill နှင့် စာသားကို layer များအဖြစ် (PDF အမည်အတိုင်း) drawing object များ၊ အမှန်အရွယ်၊ ရိုက်ထားသော scale၊ သို့မဟုတ် အမှန်အကွာအဝေးနှင့် point နှစ်ခုမှ scale ပြု။ {{cmd:PDFCLIP}} က underlay ကို clip၊ {{cmd:PDFADJUST}} က မှိန်၊ contrast၊ monochrome ထား သို့မဟုတ် ပိတ်၊ {{cmd:PDFLAYERS}} က PDF ၏ layer များကို ဖွင့်/ပိတ်၊ နှင့် {{cmd:PDF}} က drawing ၏ underlay များ သုံးသော ဖိုင်များကို ပြန်ပေး။ See [PDF underlay](topic:pdf-underlay)။

### AUTOCOMPLETE

Alias: `AUTOC`။ Drawing autocomplete: command မလည်ပတ်ချိန်တွင် မီးခိုးရောင် ghost က drawing ၏ ကိုယ်ပိုင် pattern များ နောက်ဖြစ်လာမည့်အရာကို ပြ။ {{cmd:AUTOCOMPLETE}} က `On` သို့မဟုတ် `Off` (သို့မဟုတ် ဆက်တင်များ › CadCraft) ပြု သို့မဟုတ် ယခု အကြံပြုမည်ကို `Show` ပြ။ **Tab** က ghost ကို undo အဆင့် တစ်ခုအဖြစ် ဆွဲ၊ **Esc** က drawing ပြောင်းသည်အထိ ဖယ်။ အသစ်ဆုံး object များတွင် သုံးခု ရှာ: အဆင့် တူညီဖြင့် နှစ်ကြိမ် သို့မဟုတ် ပိုဆွဲထားသော အရာ၏ နောက်ကော်ပီ (တိုင်၊ ကော်လံ၊ stair ၏ riser နှင့် tread)၊ polyline stair ၏ နောက်အဆင့်များ၊ နှင့် အခန်း သို့မဟုတ် နံရံ ကွင်း၏ ပျောက်နေသော ဘေး။ {{cmd:LINE}} သို့မဟုတ် {{cmd:PLINE}} အလယ်တွင် ghost သည် **နောက် point**: stair ၏ နောက်အဆင့် (riser၊ tread၊ riser…)၊ စတုဂံ၏ စတုတ္ထ ထောင့်၊ ၎င်းကို ပိတ်သော point၊ သို့မဟုတ် နောက်တစ်ခု ညီညီ အဆင့်။ ကာဆာကို အနီး ယူ၍ **Tab** ကို နှိပ်၊ နှိပ်ခဲ့သကဲ့သို့; ဆက်လုပ် သို့မဟုတ် Enter ကို နှိပ်။ ဤကွန်ပျူတာပေါ်တွင် စည်းမျဉ်းဖြင့် တွက်၊ မော်ဒယ် မရှိ။

### AUTOSHEET

Alias: `ASH`။ Sheet များကို ကိုယ်တိုင် layout ချ။ {{cmd:AUTOSHEET}} သည် drawing ၏ အပိုင်းများ (သင့် named view များ၊ သို့မဟုတ် model ၏ သီးခြား အပိုင်းများ၊ သို့မဟုတ် model တစ်ခုလုံး) ကို ယူ၊ paper အရွယ် (သို့မဟုတ် သင်ပေးသည်) ရွေး၊ အပိုင်းတိုင်းကို standard scale (scale တစ်ခုတည်း၊ သို့မဟုတ် တစ်ခုစီ ယူနိုင်သော အကြီးဆုံး) ပေး၊ view များကို sheet အသစ်များပေါ် အတန်းအလိုက် title block နှင့် အောက်ရှိ caption (နာမည်နှင့် scale) ဖြင့် နေရာချ။ Sheet တစ်ခုတွင် မကိုက်သည်ကို sheet ကိုယ်ပိုင်ဖြင့် ရ။ Undo အဆင့် တစ်ခု။ ဤကွန်ပျူတာပေါ်တွင် စည်းမျဉ်းဖြင့် တွက်၊ မော်ဒယ် မရှိ။

### PHOTOSKETCH

Alias: `PSK`။ ဓာတ်ပုံ ဘောပင်ပုံဆွဲ။ လက်ရေးပုံ ပါသော စက္ကူစာရွက်ပုံ (JPEG၊ PNG သို့မဟုတ် TIFF) ရွေး။ {{cmd:PHOTOSKETCH}} က စာရွက်၏ ထောင့်လေးခုကို ရှာ၊ perspective ဖြောင့်၊ သင်ပေးသော စာရွက်အရွယ် (`Paper`၊ သို့မဟုတ် အနီးဆုံး standard) နှင့် ပုံ၏ `Scale` (1 : n) ကို ယူ၊ ထို့နောက် ဘောပင်မျဉ်းများကို line၊ arc နှင့် circle အဖြစ် trace၊ ဘောပင်အရောင်တစ်ခုစီ (black၊ red၊ blue၊ green) အတွက် layer တစ်ခု။ စာရွက်အစွန်းကို မတွေ့လျှင် ဓာတ်ပုံတစ်ခုလုံးကို sheet အဖြစ် ယူ၊ ထိုသို့ ပြော။ စာလုံးများကို ထားခဲ့။ Undo အဆင့် တစ်ခု။ ဤကွန်ပျူတာပေါ် classic image processing ဖြင့် ပြု၊ မော်ဒယ် မရှိ၊ ဘယ်နေရာမှ မပို့။ Scanned drawing command များကိုလည်း ကြည့်။

### AUTODIM

Alias: `ADIM`။ စည်းမျဉ်းဖြင့် auto-dimension။ {{cmd:AUTODIM}} သည် ရွေးထားသော object များ (သို့မဟုတ် drawing တစ်ခုလုံး) ကို ၎င်းတို့၏ အဆင့်နှင့် ဒေါင်လိုက်ဘေးများမှ dimension ပေး: သင်ရွေးသော ဘက် (`Sides`) တလျှောက် dimension chain၊ ပြင်ပ overall dimension တစ်ခု၊ opening တစ်ခုစီ၏ အကျယ် (collinear နံရံ line များကြား gap)၊ hole အရွယ်တစ်ခုစီအတွက် diameter၊ နှင့် `Grid` ဖြင့် grid line များကြား spacing။ ရှိပြီးသား dimension ကို ထပ်မလုပ်။ Undo အဆင့် တစ်ခု။ ဤကွန်ပျူတာပေါ်တွင် စည်းမျဉ်းဖြင့် တွက်၊ မော်ဒယ် မရှိ။

### GRIDMOVE

Alias: `GM`။ Grid line ရွှေ့လျှင် အပိုင်းများ လိုက်။ {{cmd:GRIDMOVE}} သည် grid line (layer အမည်တွင် grid သို့မဟုတ် axis ပါသော layer ပေါ်ရှိ line) နှင့် ၎င်းပေါ်ချိတ်ထားသည်များကို ရွှေ့: line ပေါ် အဆုံးရှိ နံရံများ ဆန့်လိုက်၊ လိုင်းတလျှောက် နံရံများ အပြည့် ရွေ့၊ ကော်လံများ (line ပေါ်ရှိ block reference များနှင့် circle များ)၊ ၎င်း၏ bubble နှင့် tag ရွေ့၊ နှင့် point များ line ပေါ်ရှိ dimension များ spacing အသစ် တိုင်း။ Point နှစ်ခုပေး (line ကို ဖြတ်သော အပိုင်းသာ ရေတွက်) သို့မဟုတ် `Distance`။ Undo အဆင့် တစ်ခုက အားလုံးပြန်ဖျက်။ ဤကွန်ပျူတာပေါ် စည်းမျဉ်းဖြင့် ပြု။

### DETAILS

Alias: `DET`။ သင့်ကုမ္ပဏီကိုယ်ပိုင် details များကို တွေ့ရှိ။ {{cmd:DETAILS}} သည် သင့်ကုမ္ပဏီ၏ ကိုယ်ပိုင် details များကို ထိန်း: `Add` က drawing ၏ block ကို စာရင်းတွင် ထည့်၊ `List` နှင့် `Remove` က စီမံ၊ `Find` က ရွေးထား (သို့မဟုတ် နောက်ဆုံး ဆွဲခဲ့သည်) အတွက် layer၊ block အမည်၊ hatch pattern နှင့် မှတ်ချက်များမှ စကားလုံးများကို detail တစ်ခုစီ၏ အမည်နှင့် မှတ်ချက်များနှင့် နှိုင်းယှဉ်၍ အဆင့်သတ်မှတ်၊ ဥပမာ window head က သင့် sill flashing ကို ရှာ။ နံပါတ်နှင့် point ရွေး နေရာချ။ `Hint` ဖွင့်ထား (ဆက်တင်များ › CadCraft တွင်လည်း) ဖြင့် detail နှင့် ကိုက်ညီသော ရွေးချယ်မှုက status bar တွင် စာကြောင်းတစ်ကြောင်း ပြ။ စာရင်းကို ဤ browser တွင်၊ ဤကွန်ပျူတာပေါ် မှတ်; ရှာသည့်စာရင်းမှာ ထိုအရာ။ `Share` က ၎င်းကို သင့် Documents ဖိုင်တွဲ ({{cmd:DOCUMENTS}} ဖြင့် ဦးစွာ ဖွင့်ထား၊ `.cadcraft/firm-details.json`၊ block တစ်ခုစီ၏ drawing ပါ) တွင်လည်း ထား: `Pull` က အဖွဲ့တွင်ရှိသည် သင့်တွင် မရှိသည်ကို ထည့်၊ `Push` က သင့်တွင်ရှိသည် ထိုတို့တွင် မရှိသည်ကို ထည့်၊ `Both` ၏ နှစ်ခုစလုံး၊ နှင့် နှစ်ဖက်မှ မည်သည့်အရာမျှ ဖယ်မ။ Team Cloud Plan ဖိုင်တွဲဖြစ်လျှင် အဖွဲ့အားလုံး စာရင်းတစ်ခုကို မျှဝေ။ Library panel ရှိ detail item တွင် **Add to my firm's details** ခလုတ် ရှိ၊ ထို စာရင်းတွင် ထည့်။ ဤကွန်ပျူတာပေါ်တွင် စကားလုံးဖြင့် စည်းမျဉ်း၊ မော်ဒယ် မရှိ။

### SKETCHFIX

Alias: `SKF`။ ဘောပင်ပုံဆွဲချက်များ တိကျသော geometry ဖြစ်လာ။ တစ်ကြိမ်တစ်ခု လက်ဖြင့် stroke ကို ဖိ၍ ဆွဲ (ဘောပင်၊ မောက်စ် သို့မဟုတ် လက်ချောင်း)၊ ထို့နောက် Enter။ Stroke တစ်ခုစီကို line၊ circle၊ arc၊ စတုဂံ သို့မဟုတ် polyline အဖြစ် ဖတ်: ဖြောင့်ဖြောင့်နီးသော line နှင့် ထောင်မတ်နီးသော line များကို တိတိကျကျ ဖြောင့်ဖြောင့်၊ ထောင်မတ် ပြု၊ ပိတ်ထား ဝိုင်းသော stroke သည် circle၊ ထောင့်မှန် လေးခုပါ ပိတ်ထား stroke သည် စတုဂံ၊ နှင့် stroke ၏ ဆုံးများကို ပေါင်းပြီး drawing တွင် ရှိပြီးသား ဆုံးပေါ်သို့ ဆွဲ။ Undo အဆင့် တစ်ခု။ ဤကွန်ပျူတာပေါ် စည်းမျဉ်းဖြင့် ပြု၊ မော်ဒယ် မရှိ။

### SCANATTACH နှင့် scan drawing command များ

Alias: `SCA` {{cmd:SCANATTACH}}၊ `SCS` {{cmd:SCANSCALE}}၊ `SCL` {{cmd:SCANALIGN}}၊ `SCD` {{cmd:SCANDESKEW}}၊ `SCC` {{cmd:SCANCLEAN}}၊ `SCR` {{cmd:SCANCROP}}၊ `SCE` {{cmd:SCANERASE}}၊ `SCT` {{cmd:SCANTRACE}}၊ `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} တွင် alias မရှိ။ ပုံတစ်ခုပေါ် အလုပ်လုပ်၊ တစ်ခုစီ undo အဆင့် တစ်ခု။ {{cmd:SCANATTACH}} က PNG၊ JPEG၊ TIFF (စာမျက်နှာတစ်ခု သို့မဟုတ် အားလုံး) သို့မဟုတ် ပုံဖြစ်သော PDF စာမျက်နှာ ထည့်။ {{cmd:SCANSCALE}} က point နှစ်ခုနှင့် အမှန်အကွာအဝေးဖြင့် စာရွက်ကို scale။ {{cmd:SCANALIGN}} က စာရွက်ကို point နှစ်ခုသို့ ရွှေ့ လှည့်ပြီး (`Scale the sheet to fit` Yes/No) ရွေးလျှင် scale။ {{cmd:SCANDESKEW}} က စာရွက်၏ ရှည်သော line များ ထောင့်ကို ပြ၊ `Accept` သို့မဟုတ် `Value` ပေးလျှင် စာရွက်ကို လှည့်။ {{cmd:SCANCLEAN}} က အဖြူအမည်း ပြု (`Threshold` Auto/Adaptive/Level၊ `Specks`) ပြီး `Run`။ {{cmd:SCANCROP}} က window ကို ထိန်း။ {{cmd:SCANERASE}} က `Rectangle`၊ `Polygon` သို့မဟုတ် `Lasso` ကို ဖျက်။ {{cmd:SCANTRACE}} က lines နှင့် arc များကို layer အသစ်တွင် trace (`Tolerance`၊ `Window`၊ `Arcs`၊ `Leftovers`၊ `Run`) နှင့် တွေ့သည်နှင့် raster အဖြစ် ကျန်သည်များကို ပြော။ {{cmd:SCANINFO}} က မူလဖိုင်နှင့် အဆင့်များကို စာရင်း။ {{cmd:RASTERSNAP}} က scanned sheet ၏ line များသို့ snap ကို On သို့မဟုတ် Off ပြု။ See the topic Scanned drawings and the trace။

### REGEN နှင့် REGENALL

Alias: `RE` {{cmd:REGEN}} အတွက်၊ `REA` {{cmd:REGENALL}} အတွက်။ ဖန်သားပြင်ပေါ်ရှိ drawing ကို drawing မှ ပြန်တည်ဆောက်: {{cmd:REGEN}} က ကြည့်နေသော tab (sheet ပေါ်ဆိုလျှင် viewport များ ပြသော model ပါ)၊ {{cmd:REGENALL}} က tab အားလုံး၊ pane အားလုံးနှင့် ဖွင့်ထား drawing အားလုံး။ Script သို့မဟုတ် အလွန်ကြီးသော ပြောင်းလဲမှုအပြီး ပုံ ဟောင်းနေလျှင် ၊ သို့မဟုတ် assistant က drawing ကို တည်းဖြတ်ခဲ့လျှင် သုံး; drawing ကို မထိ၊ ထို့ကြောင့် undo လိုမရှိ။

### NAMEDVIEW

Alias: `NV`၊ `VIEWS`။ `Enter an option [?/Restore/Save/Window/Delete] <Restore>`၊ ထို့နောက် view ၏ နာမည်။ `S` က ဖန်သားပြင် view ကို သိမ်း၊ `W` က သင်ရွေးသော window ကို၊ `R` က သိမ်းထား view ကို ပြ၊ `D` က တစ်ခု ဖျက်၊ `?` က tab ၏ view များကို စာရင်း။ ရှိပြီးသား နာမည်ဖြင့် သိမ်းလျှင် အစားထိုး; ပြောင်းလဲမှုတိုင်း undo အဆင့် တစ်ခု။ View များသည် သိမ်းခဲ့သော tab ပိုင်ဆိုင်။ DWG နှင့် DXF ဖိုင်များက ထိန်း (VIEW table); sheet ၏ view များ ပထမ sheet တွင် ပြန်ပေါ်၊ ဖိုင်က ဘယ်ဟာလဲ မပြောသောကြောင့်။

### UNDO နှင့် REDO

Alias: `U` {{cmd:UNDO}} အတွက်; {{cmd:REDO}} တွင် alias မရှိ။ {{key:Mod+Z}} နှင့် {{key:Mod+Y}} လည်း ရ။

### LAYER

Alias: `LA`။ {{ui:လေယာများ}} panel သို့ ရောက်။

### LINETYPE၊ LWEIGHT၊ LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`၊ `ByBlock` သို့မဟုတ် နာမည် (`?` က စာရင်း: Continuous၊ drawing ၏ ကိုယ်ပိုင်၊ နှင့် DASHED၊ HIDDEN၊ CENTER၊ PHANTOM၊ DOT၊ DASHDOT၊ BORDER၊ DIVIDE ၎င်းတို့၏ `2` (တဝက်) နှင့် `X2` (နှစ်ဆ) အရွယ်များဖြင့်)။ {{cmd:LWEIGHT}} (`LW`): object အသစ်များအတွက် lineweight mm ဖြင့်၊ သို့မဟုတ် `ByLayer`၊ `ByBlock`၊ `Default`။ {{cmd:LTSCALE}} (`LTS`): drawing ၏ linetype scale (undo လုပ်နိုင်)။ {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — status bar ရှိ {{ui:LWT}} ခလုတ်နှင့် တူ။ See [မျဉ်းအထူနှင့် linetype များ](topic:units-papers-scales#line-weights-and-linetypes)။

### RENAME၊ LAYMRG၊ LAYDEL

{{cmd:RENAME}} (`-RENAME`၊ `REN`): `Enter object type to rename [LAyer/Block]`၊ `Enter old name`၊ ထို့နောက် နာမည်အသစ်; object များ သို့မဟုတ် reference များ လိုက်။ {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` ကို {{key:Enter}} အထိ၊ ထို့နောက် `Select object on target layer or [Name]` နှင့် `Y`။ {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`၊ ထို့နောက် `Y`: layer နှင့် ၎င်းပေါ်ရှိ object အားလုံး ပျောက် (layer 0၊ DEFPOINTS သို့မဟုတ် current layer မဟုတ်)။ Command တစ်ခုစီ undo အဆင့် တစ်ခု။ See [Layer များဖြင့် drawing စီစဉ်ခြင်း](topic:layers#rename-merge-and-delete-layers)။

### LAYISO၊ LAYUNISO၊ LAYOFF၊ LAYFRZ၊ LAYMCUR၊ LAYON၊ LAYTHW

Object ရွေး၍ layer များ; {{ui:လေယာများ}} panel ၏ {{ui:ကိရိယာများ}} မီနူးတွင်လည်း ရ။ {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`၊ ထို့နောက် {{key:Enter}}: အခြား layer တိုင်း ပိတ်။ {{cmd:LAYUNISO}} က ပြန်ဖွင့်။ {{cmd:LAYOFF}} နှင့် {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (သို့မဟုတ် frozen)၊ ထပ်ခါထပ်ခါ; `U` က နောက်ဆုံး ပြန်ယူ၊ {{key:Enter}} က ဆုံး။ {{cmd:LAYMCUR}}: `Select object whose layer will become current`။ {{cmd:LAYON}} က layer အားလုံး ဖွင့်၊ {{cmd:LAYTHW}} က layer အားလုံး thaw။ Command တစ်ခုစီ undo အဆင့် တစ်ခု။ See [Layer များဖြင့် drawing စီစဉ်ခြင်း](topic:layers#work-on-layers-by-picking-objects)။

### NEW၊ OPEN၊ SAVE၊ SAVEAS၊ DXFOUT

{{cmd:NEW}} က drawing အလွတ်အသစ်၊ {{cmd:OPEN}} က DWG သို့မဟုတ် DXF ဖွင့်၊ တစ်ခုစီ ကိုယ်ပိုင် tab တွင် drawing အပေါ်တွင် (ပြောင်းလဲမှု မရှိသော drawing အသစ်ကို tab အသစ်အစား သုံး)။ မသိမ်းရသေးသော ပြောင်းလဲမှုရှိ tab ကို ပိတ်လျှင် ဦးစွာ မေး။ See [မျက်နှာပြင် ခွဲခြင်း](topic:split-screen)။

{{cmd:SAVE}} (alias `QSAVE`၊ {{key:Mod+S}} လည်း) က drawing ၏ format ဖြင့် မိတ္တူကို ဒေါင်းလုဒ်: DWG ဖြင့် ဖွင့်ထားလျှင် DWG၊ DXF ဖြင့် ဖွင့်ထားလျှင် DXF။ Drawing အသစ်သည် ဤ browser တွင် Save as ၏ နောက်ဆုံး ရွေးချယ်ထားသော format ကို သုံး၊ မဟုတ်လျှင် DWG။

{{cmd:SAVEAS}} (နှင့် {{key:Mod+Shift+S}}) က {{ui:မိတ္တူအဖြစ် သိမ်းရန်}} dialog ဖွင့်: {{ui:DWG}} (နှင့် {{ui:ဗားရှင်း}}) ရွေး၊ {{ui:DXF R12}} သို့မဟုတ် {{ui:DXF 2000}}၊ ထို့နောက် {{ui:သိမ်းရန်}}။ ရွေးချယ်မှုသည် ဤ drawing နှင့် ဤ browser ရှိ drawing အသစ်များအတွက် ကျန်။

{{cmd:DXFOUT}} သည် {{cmd:SAVE}} သုံးသော format ကို မပြောင်းဘဲ အမြဲ DXF R12 မိတ္တူကို ဒေါင်းလုဒ်။

See [ဖိုင်များ: ဘာဖွင့်နိုင်၊ ဘာသိမ်းနိုင်](topic:files#saving)။

### TOUR

Alias: `TUTORIAL`။ ပထမ drawing ခြေလှမ်း ခြောက်ဆင့် tour ကို ပြန်စ။ See [စတင်ခြင်း](topic:getting-started#prefer-to-be-guided)။

### TOOLBARDOCK

Alias: `TBDOCK`။ `Toolbar position [Top/Bottom/Left/Right]`။ See [ဆက်တင်များ](topic:settings#toolbar-position)။

### COMMANDLINE

Alias: `CMDLINE`။ `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: command line ကို ချိတ်၊ မျော၊ လိုင်းတစ်ခုတည်း ပြု၊ ပြသမည့် history လိုင်း အရေအတွက် (0 မှ 12) မေး၊ သို့မဟုတ် history ဖွင့်။ See [ဆက်တင်များ](topic:settings#command-line)။

### TOPAREA

`Top area [Standard/Compact]`: drawing အပေါ် bar များကို မူလအတိုင်း သို့မဟုတ် compact။ See [ဆက်တင်များ](topic:settings#top-area)။

### POLARANG

`Enter polar angle step in degrees <90>`: {{ui:Polar}} tracking line များ ညီအောင် ခြေလှမ်း (0 ထက်ကြီး၊ 180 အထိ)။ ဤ browser တွင် မှတ်ထား။

### UNITS

Alias: `UN`။ Length ကို မည်သို့ ရေးနှင့် ရိုက်။

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural နှင့် Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`။ အခြားများ: `Enter number of decimal places (0 to 8)`။

Dimension အသစ်များက ၎င်းကို လိုက်။ Undo အဆင့် တစ်ခု။ {{ui:လက်ရှိ ဆက်တင်များ}} ရှိ {{ui:အရှည် ပုံစံ}} နှင့် {{ui:တိကျမှု}} နှင့် တူ; See [ပေနှင့် လက်မ](topic:units-papers-scales#feet-and-inches-and-fractions)။

### GDSIN

Alias: `GDS`။ IC layout (GDSII stream ဖိုင်) ကို ကြည့်: lab spike၊ ကြည့်ရန်နှင့် တိုင်းရန်သာ။

- ဖိုင်ရွေးကိရိယာက `.gds` ဖိုင် ယူ; top cell အများအပြားရှိလျှင် `Enter the top cell to draw`။
- Layer နှင့် datatype တိုင်းသည် drawing layer (`GDS 1`၊ `GDS 2/5`) ဖြစ်၊ reference များနှင့် array များကို flat ထား၊ ဖိုင်၏ user unit (များသောအားဖြင့် မိုက်ခရိုမီတာ)။ Undo အဆင့် တစ်ခု။ ဘာမျှ simulate၊ စစ်ဆေးခြင်း မရှိ၊ ဖိုင်ကို ပြန်မရေး။

### DIAGRAM

Alias: `TEXTDIAGRAM`၊ `T2D`။ စာသားမှ diagram။

- ဘောက်စ်က စာသားကို ယူ (သို့မဟုတ် command line တွင် `;` ဖြင့် ခွဲထား statement တစ်ကြောင်း): Mermaid flowchart၊ PlantUML component diagram၊ D2 သို့မဟုတ် from-to စာရင်း။
- `Specify the top left corner of the diagram`၊ ထို့နောက် `Specify the text height`။

Block များနှင့် connector များသည် `Diagram` layer ပေါ် ရိုးရိုး object များ၊ ပြီးသည့်အခါ ရွေးထား။ Undo အဆင့် တစ်ခု။ See [စာသားမှ diagram ဆွဲခြင်း](topic:text-to-diagram)။

### OLELIST

Alias: `OLES`။ DWG က သယ်ဆောင်သော၊ CadCraft မိမိဘာသာ နေရာမချနိုင်သော OLE object များ။

- တစ်ခုစီ စာရင်း: နံပါတ်၊ အမျိုးအစား၊ အရွယ်၊ ပုံ သိမ်းထားလား။
- `Enter an option [Place/eXit] <eXit>`: Place က နံပါတ်၊ ဘယ်အောက်ထောင့်နှင့် အကျယ် မေး၊ ပုံနှင့်အတူ ဘောင်ဆွဲ။ Undo အဆင့် တစ်ခု; ထိန်းထား object ကို မပြောင်း။ See [ပုံများ](topic:pictures#objects-from-other-programs-ole)။

### SHXFONTS

Alias: `SHX`။ သင့်ကိုယ်ပိုင် SHX font များ။

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} က ဖိုင်တွဲတစ်ခုရှိ `.shx` တိုင်းကို ဖတ် (CadCraft Studio၊ start တိုင်း ထပ်ဖတ်)၊ {{ui:Files}} က ရွေးထား ဖိုင်များ (browser)၊ {{ui:Reverse}} က font တစ်ခု၏ အက္ခရာများကို နောက်ဆုံးမှ ပထမသို့ ခင်း။ Load လုပ်ထား font ကို အမည်ပေးထား text style များ ထို font ဖြင့် ဆွဲ။ See [ကိုယ်ပိုင် SHX font ဖြင့် စာသား ဆွဲခြင်း](topic:shx-fonts)။

### LIMITS

Drawing ၏ အရွယ်အစား ရည်ရွယ်ချက်။

- `Specify lower left corner or [ON/OFF] <current>`: point၊ `ON` သို့မဟုတ် `OFF`။
- `Specify upper right corner <current>`။

Grid သည် limit များကို ဖြည့်၊ {{cmd:ZOOM}} All က ပြ၊ ON ဖြစ်စဉ် ပြင်ပ point ကို ငြင်းပယ် (`**Outside limits`)။ Undo အဆင့် တစ်ခု; DWG နှင့် DXF တွင် သိမ်း။ See [drawing limit များ သတ်မှတ်ခြင်း](topic:drawing-limits)။

### AUNITS

Alias: `ANGUNITS`။ ထောင့်များ ပြပုံနှင့် ရိုက်ပုံ။

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`၊ သို့မဟုတ် အခြား နှစ်ခုအတွက် `Enter precision` (0 ဒီဂရီ၊ 2 မိနစ်၊ 4 စက္ကန့်၊ စက္ကန့်၏ ဒဿမ 5 မှ 8)။

Undo အဆင့် တစ်ခု; DWG နှင့် DXF တွင် သိမ်း။ {{ui:လက်ရှိ ဆက်တင်များ}} ရှိ {{ui:ထောင့် ပုံစံ}} နှင့် တူ။ See [bearing နှင့် ထောင့်များ ရိုက်ပြခြင်း](topic:bearings-and-angles)။

### APPLOAD

Alias: `AP`; သို့မဟုတ် {{ui:အမြင်}} › {{ui:နောက်ထပ်}} › {{ui:အက်ပ် တင်ရန်…}}။ {{ui:အက်ပလီကေးရှင်းများ တင်ရန်}} dialog: `.lsp` routine နှင့် `.dcl` dialog ဖိုင်များ တင်၊ ဖယ်၊ history မှ ပြန်တင်၊ နှင့် Startup Suite။ Routine ၏ `(defun c:NAME …)` command များက အခြား command တစ်ခုလို အလုပ်လုပ်။ See [Application များ တင်ခြင်း](topic:load-applications) နှင့် [LISP routine များ run ခြင်း](topic:run-lisp)။

### ALIASEDIT၊ REINIT

{{cmd:ALIASEDIT}} (သို့မဟုတ် {{ui:အမြင်}} › {{ui:နောက်ထပ်}} › {{ui:Alias များ တည်းဖြတ်ရန်…}}) က သင့် alias ဖိုင် (`ALIAS, *COMMAND` အတန်းများ) ကို ဖွင့်; {{ui:သိမ်းရန်}} က ကျင့်သုံး။ {{cmd:REINIT}} က ထပ်ကျင့်သုံး။ See [command alias များ တည်းဖြတ်ရန်](topic:command-aliases)။

### OPTIONKEYS

Alias: `OPTKEYS`; သို့မဟုတ် {{ui:ဆက်တင်များ}} › {{ui:CadCraft}} › {{ui:ရွေးချယ်စရာ အက္ခရာများ}} › {{ui:တည်းဖြတ်…}}။ သင့် option letter ဖိုင် (`COMMAND.OPTION, LETTERS` အတန်းများ၊ ဥပမာ `ARRAY.PO, P`) ဖွင့်; {{ui:သိမ်းရန်}} က ကျင့်သုံး၊ {{cmd:REINIT}} က ထပ်ကျင့်သုံး။ See [command ရွေးချယ်စရာများကို ကိုယ်ပိုင် အက္ခရာ ပေးရန်](topic:option-letters)။

### LISPEDIT

Alias: `VLIDE`; သို့မဟုတ် {{ui:အမြင်}} › {{ui:နောက်ထပ်}} › {{ui:LISP အယ်ဒီတာ}}။ LISP editor ဖွင့်၊ drawing ဘေး ဆက်ရှိသော window။

- စာသား: လိုင်းနံပါတ်များ၊ ကာဆာရှိ ကွင်း၏ ဘက်ဖော်ပါ (မရှိလျှင် အနီ)၊ {{key:Enter}} က လိုင်းသစ်ကို ဖွင့်ထား ကွင်းအောက်တွင် indent၊ {{key:Tab}} က space နှစ်ခု၊ {{key:Esc}} က စာသားမှ ထွက်။
- {{ui:ပုံဆွဲထဲသို့ Load လုပ်ရန်}} ({{key:Ctrl+Shift+Enter}}): APPLOAD က ဖိုင်ဖြင့် လုပ်သကဲ့သို့ ပုံစံတိုင်းကို ဖတ်၊ `c:` command များ ပြု။ ဖိုင်က {{cmd:APPLOAD}} ၏ စာရင်းတွင် ပေါ်။
- {{ui:ရွေးထားသည်ကို လည်ပတ်ရန်}} ({{key:Ctrl+Enter}}): ရွေးထားသော form များ၊ သို့မဟုတ် cursor ရှိ form ကို အကဲဖြတ်။
- {{ui:ရပ်ရန်}}: အလုပ်လုပ်နေသော routine ကို ရပ်။
- {{ui:ကွန်ဆိုး}}: routine က ပုံနှိပ်ခဲ့သည်များ၊ error တိုင်းကို လိုင်းနှင့်အတူ; error ကို နှိပ်လျှင် ထိုနေရာသို့ သွား။ စာသားကို top-level form တစ်ခုချင်း run၊ ထို့ကြောင့် လိုင်းသည် form ၏၊ သို့မဟုတ် ၎င်းအတွင်း error က အမည်ပေးသော function ကို ခေါ်သော လိုင်း။
- {{ui:အသစ်}}၊ {{ui:ဖွင့်ရန်}}၊ {{ui:သိမ်းရန်}} ({{key:Ctrl+S}}): `.lsp` ဖိုင်။ စာသားကို ဤ browser တွင် ထားသဖြင့် window ပိတ်လျှင် ဆုံးရှုံးမ။
- စာသားဘေး: routine က သတ်မှတ်ထားသော function များ၊ ၎င်းခေါ်သော်လည်း ဤ LISP တွင် မရှိသေးသော function များ၊ ၎င်းခေါ်သော်လည်း ၎င်း သတ်မှတ်ခြင်း သို့မဟုတ် built-in မဟုတ်သော function များ၊ နှင့် built in နှင့် မပါသော အပြည့်စာရင်းများ။

ကွင်းပိတ်မထားသော သို့မဟုတ် string ပိတ်မထားသော စာသားကို မ run; လိုင်းကို အမည်ပေး။ အဆင့်လိုက် debugger၊ breakpoint သို့မဟုတ် watch window မရှိ။ See [LISP routine များ run ခြင်း](topic:run-lisp)။

### HELP

Alias: `?`။ command အားလုံး၊ alias များနှင့် တစ်ကြောင်းတည်း ဖော်ပြချက်ကို command line history တွင် ပြ။ ဤအကူအညီကို မဖွင့်; {{key:F1}} သို့မဟုတ် {{ui:အကူအညီ}} ကို နှိပ်။

## Select objects prompt

`Select objects` prompt မည်သည့်နေရာတွင်မဆို: object များ နှိပ်၊ window (ဘယ်မှ ညာ) နှင့် crossing (ညာမှ ဘယ်) ကို နှိပ်နှစ်ချက်ဖြင့် ဆွဲ၊ သို့မဟုတ် lasso ဆွဲ ({{key:Space}} ဆွဲစဉ်: window၊ crossing၊ fence)၊ ဖယ်ရန် {{key:Shift}}+click၊ ပြီးဆုံးရန် {{key:Enter}}။ `ALL` (အားလုံး)၊ `L` (နောက်ဆုံး object)၊ `P` (Previous: နောက်ဆုံး command သုံးခဲ့သည်)၊ `F` (Fence: line ဖြတ်သော point များ၊ `U` က point ကို ပြန်ယူ)၊ `W` (Window)၊ `C` (Crossing)၊ `R` (Remove mode: ရွေးချက်က object ဖယ်၊ prompt က `Remove objects`)၊ နှင့် `A` (Add again) ကို ရိုက်လည်း ရ။ `?` က စာရင်း။ Prompt တွင် မပြ။ {{key:Tab}} က ထပ်နေသော object များကို အနီးဆုံး ကိုမီးမောင်းထိုး၊ နှိပ်ရွေး။ See [အရာဝတ္ထုများ ရွေးခြင်း](topic:select-objects)။

### ACCESS

Alias: `AX`။ Drafting without sight။ {{cmd:ACCESS}} က Access ကို ဖွင့်/ပိတ် (`On`၊ `Off`) နှင့် snap အသံ (`Sound`) နှင့် အသံ command များ (`Voice`) ကို ပြောင်း; ပြောင်းခင် အခြေအနေကို ပြော။ Access ဖွင့်ထားလျှင် command နှင့် ရလဒ်တိုင်းကို သင့်မျက်နှာပြင် ဖတ်စက်ဖြင့် ပြော၊ ပုံဆွဲ နေရာတွင် ကီးဘုတ် cursor ရှိ။ "Draft without sight" အကူအညီ topic တွင် ကီးများ ရှိ။

### DESCRIBE

Alias: `DESC`။ Drawing ၌ ဘာရှိသလဲ ပြော: object အရေအတွက်၊ အမျိုးအစား၊ အရွယ်အစား၊ layer အရေအတွက်၊ ရွေးထားသည်များ။ ဖတ်ရုံသာ; ဘာမျှ မပြောင်း။

### WHEREAMI

Alias: `WHERE`။ Cursor ရှိ နေရာကို drawing ၏ unit ဖြင့် ပြော။

### NEARBY

Cursor အနီး ရှိသည်ကို အနီးဆုံးဦးစွာ ပြော၊ တစ်ခုစီ အကွာအဝေးနှင့် ဘယ်ဘက်ဖြစ်သည်ဖြင့်။

### SAYSEL

ရွေးထားသည်ကို ပြော၊ object တစ်ခုစီအတွက် စာကြောင်းတစ်ကြောင်း (line အရှည်၊ ဆုံးများနှင့် ထောင့်; circle radius နှင့် center; စာသား ရေးထားသည့်အတိုင်း)။

### VOICE

ပြောသော command များကို ဖွင့်/ပိတ်။ ဤကွန်ပျူတာပေါ်တွင် အသိအမှတ်ပြု; browser က ထိုသို့ မလုပ်နိုင်လျှင် Settings တွင် browser ၏ online ဝန်ဆောင်မှုကို ရွေးမှ အသံ ပိတ်ထား။

### TOUCHCROSSHAIR

Alias: `TCX`။ လက်ချောင်းဖြင့် ဆွဲရန် offset crosshair၊ လက်ချောင်းရဲ့ ထိပ်က ရွေးသည့် point ကို မဖုံးအောင်။ ဖွင့်ထားစဉ် drawing ပေါ် လက်ချောင်းတစ်ချောင်းက မရွေး; ၎င်းကို အပေါ်နှင့် ဘေးတွင် crosshair ကို ရွှေ့။ Object snap နှင့် tracking က crosshair ကို လိုက်။ လက်ချောင်းကို ဖယ်လျှင် ဘာမျှ မရွေး၊ crosshair က ထိုနေရာတွင် ကျန်။ ရွေးရန် drawing ၏ ထောင့်ရှိ {{ui:နှိပ်ရန်}} ခလုတ်ကို နှိပ်၊ သို့မဟုတ် ဒုတိယလက်ချောင်းဖြင့် drawing ပေါ်ရာတွင် တို့။ အခြားလက်ချောင်းကို ရွှေ့နေစဉ် {{ui:နှိပ်ရန်}} ကို ဖိထား (selection window၊ lasso၊ grip)။ လက်ချောင်းကို နှိပ်ဖိထား၍ အသစ်မရွေ့ဘဲ ထားလျှင် သို့မဟုတ် {{ui:Enter}} ခလုတ်သည် Enter ဖြစ်။ လက်ချောင်းနှစ်ချောင်းက pan နှင့် zoom ပြန်ပြု။ ဘေးအောက်နှင့် ဝေးဘက်အစွန်းအနီးတွင် crosshair က လက်ချောင်းသို့ ပိတ်ဝင်၊ drawing ၏ နေရာတိုင်း ရောက်နိုင်အောင်။ ဘောပင် နှင့် မောက်စ်က အမြဲ တိုက်ရိုက် ရွေး။

{{cmd:TOUCHCROSSHAIR}} က အခြေအနေကို ပြော၊ `ON`၊ `OFF`၊ `Auto` (လက်ချောင်းသည် တစ်ခုတည်း pointer ဖြစ်သည့်နေရာသာ ဖွင့်၊ ထို့ကြောင့် မောက်စ်ရှိ ကွန်ပျူတာတွင် ပိတ်)၊ `Distance` (crosshair က လက်ချောင်းမှ ဘယ်လောက် ဝေးမလဲ၊ 24 မှ 240 pixel)၊ သို့မဟုတ် `Side` (`Left`: အပေါ်နှင့် ဘယ်ဘက်၊ လက်ယာလက်အတွက်; `Right` ဘယ်လက်အတွက်; ခလုတ်များက အခြားထောင့်သို့ ရွေ့) ကို မေး။ ရွေးချယ်မှုတူ CadCraft ၏ ဆက်တင်များတွင်လည်း ရ၊ touch screen ပါသော ကိရိယာတွင် status bar မှာ {{ui:Offset crosshair}} ခလုတ် ရှိ။ ရွေးချယ်မှုများကို ဤ browser တွင် ထိန်း။

### WHOHAS

Drawing ကို ဘယ်သူဖွင့်ထားသလဲ ပြော။ CadCraft Studio ကွန်ပျူတာပေါ်တွင် DWG သို့မဟုတ် DXF ဖွင့်လျှင် ၎င်းနားတွင် lock ဖိုင်ငယ် (`Plan.dwg.cclock`: ဘယ်သူ၊ ဘယ်အချိန်ကစ၍၊ ဘယ် version) ရေး၊ drawing ဖွင့်နေစဉ် မိနစ်တိုင်း ပြန်လတ်၊ ပိတ်လျှင် ဖယ်။ အခြားသူ ဖွင့်ထားသော drawing ဖွင့်လျှင် ဘယ်သူ၊ ဘယ်အချိန်ကစ၍ ပြ၊ {{ui:ဖတ်သာ ဖွင့်ရန်}} ({{ui:သိမ်းရန်}} က အမည်အသစ် မေးသည်)၊ {{ui:ဆက်ဖွင့်ရန်}} (အခြားသူက နောက် refresh တွင် သိ) သို့မဟုတ် {{ui:ပယ်ဖျက်ရန်}}။ အခြားသူ ဖွင့်ထားသော ဖိုင်ကို အစားထိုး သိမ်းလျှင် ဦးစွာ မေး။ ငါးမိနစ် refresh မလုပ်သော lock ကို stale ဟု ပြော: အခြား မိတ္တူက သိမ်းမရဘဲ ပိတ်သွားသည် သို့မဟုတ် ကွန်ပျူတာ အိပ်နေသည်။

{{cmd:WHOHAS}} က `Current` (ဖွင့်ထား drawing)၊ `File` (ရွေး)၊ `FOlder` (ဖိုင်တွဲ ရွေး: ဖွင့်ထား drawing အားလုံး ပြ)၊ `Path` (path အပြည့် ရိုက်)၊ သို့မဟုတ် `Name` (အခြားသူများ မြင်သော နာမည်; အကောင့်ဝင်ထားလျှင် အကောင့်အမည်) ကို မေး။ Studio က သင်ရွေးထားသော ဖိုင်တွဲများကိုသာ ဝင်နိုင်; ရွေးထားခြင်း မရှိဘဲ ဖွင့်ထား drawing အတွက် တစ်ကြိမ် ထို drawing ကို ဖွင့်ထားကြောင်း မှတ်လို့ မရကြောင်း ပြော; `FOlder` က ဖိုင်တွဲရွေး၊ ထိုအချိန်မှ ထို ဖိုင်တွဲတွင် lock များ အလုပ်လုပ်။ Lock သည် လူများအတွက် မှတ်ချက်ဖြစ်၍ အတားအဆီး မဟုတ်; အခြား program က ဖိုင်ကို ရေးနိုင်။ Browser တွင် ဖိုင်တွဲ မရှိ၊ command က ထိုသို့ ပြော။

### OVERKILL

ထပ်နေသော object များကို ဖျက်၊ ထပ်နေသော line နှင့် arc များကို သန့်ရှင်းစေ၊ ထပ်ပွား linework ဖြင့် ရောက်လာသော drawing အတွက်။ `Select objects to clean up`၊ {{key:Enter}}၊ ထို့နောက် ပြထား ဆက်တင်များဖြင့် သန့်ရှင်းရန် {{key:Enter}} နောက်တစ်ကြိမ်၊ သို့မဟုတ် ဦးစွာ တစ်ခု ပြောင်း:

- `Tolerance`: ကိုက်ညီသည်ဟု သတ်မှတ်ရန် နှစ်ခုသော coordinate များ အနီးရှိရမည် (0.000001 စတင်ချိန်; 0 = တိတိကျကျ တူရမည်)။
- `Ignore`: အခြား သဘောတူသော object များ ကွဲနိုင်သော property များ။ နာမည် ရိုက်ပြောင်း: `Color`၊ `LAyer`၊ `LType`၊ `ltScale`၊ `LWeight`၊ `THickness`၊ `TRansparency` သို့မဟုတ် `None` / `All`။ {{key:Enter}} ပြီးလျှင်။
- `Overlap`: on သို့မဟုတ် off။ On ဖြင့် တစ်ကြောင်းတည်း ဆွဲထားသော ထပ်နေသော line များ line တစ်ခု ဖြစ်၊ အခြား line တွင် ရှိသော line ကို ဖျက်; circle တစ်ခုတည်းပေါ်ရှိ ထပ်နေသော arc များ arc တစ်ခု; တစ်ပတ်ပြည့်ပိတ်သော arc များ circle ဖြစ်၊ circle ပေါ်ရှိ arc ကို ဖျက်။
- `Ends`: on သို့မဟုတ် off။ On ဖြင့် ဆုံးချင်းသာ ထိနေသော တစ်ကြောင်းတည်း line များနှင့် circle တစ်ခုတည်း arc များ အပိုင်းတစ်ခု ဖြစ်။

Object အမျိုးအစားတိုင်း ထပ်နေမှုအတွက် စစ်; object နှစ်ခု ထပ်နေသည်ဟု သတ်မှတ်ရန် ဂျီအိုမေတြီ tolerance အတွင်း တူပြီး layer၊ အရောင်၊ linetype၊ linetype scale၊ lineweight၊ thickness၊ transparency နှင့် height တူရမည် (သင်ကျော်သည်များ ဖယ်ထား)။ Line နှင့် ဖွင့်ထား polyline များသည် ပြောင်းပြန် ဆွဲလျှင်လည်း ကိုက်ညီ။ Draw order ရှိ ပထမ object ကျန်ပြီး ကိုယ်ပိုင် property များ ထိန်း။ Command က စစ်ဆေးသော object အရေအတွက်၊ ဖျက်သော အရေအတွက်ကို ပြော: ထပ်နေသည်များ၊ ပေါင်းထားသော overlap အပိုင်းများ၊ အဆုံးချင်း ဆက်ထားသော အပိုင်းများ။ {{cmd:UNDO}} တစ်ခုက အားလုံးပြန်။ ဆက်တင်များသည် drawing window ပိတ်သည်အထိ ကြာ။

ထားခဲ့သည်: locked layer ရှိ object များနှင့် ဝှက်ထားသော object များ။ Height (Z) ရှိ line များကို ပေါင်းမ (တိတိကျကျ ထပ်ပွားသည်များ ဖျက်)၊ polyline အတွင်း အပိုင်းများ (ပါးလျမ်ရန် မဖြတ်)၊ polyline ၏ အပိုင်းပေါ်ရှိ line၊ နှင့် ပြောင်းပြန် ဆွဲထားသော ပိတ်ထား polyline ကို မထိ။

### DRAWORDER

Object များ၏ ရှေ့-နောက် ဆွဲအစီအစဉ်ကို ပြောင်း။ `Select objects to re-order`၊ {{key:Enter}}၊ ထို့နောက် `Above objects`၊ `Under objects`၊ `Front` သို့မဟုတ် `Back` ({{key:Enter}} = `Back`)။ `Above objects` နှင့် `Under objects` က ကိုးကား object များ မေး: ရွေးထားသည်များ ရှေ့ဆုံးကိုးကားမှ ရှေ့ရှိ ရှေ့ဆုံးတွင် ဆက်၊ သို့မဟုတ် နောက်ဆုံးကိုးကား နောက်ဘက်ရှိ နောက်ဆုံးတွင် ဆက်။ ရွေးထားသော object များသည် ၎င်းတို့အကြား ၎င်း၏ အစီအစဉ်ကို ထိန်း။ Undo အဆင့် တစ်ခု။ အစီအစဉ်ကို DWG နှင့် DXF တွင် drawing နှင့်အတူ သိမ်း၊ object များ ရေးသော အစီအစဉ်အတိုင်း။

မျက်နှာပြင်ပေါ် object တိုင်းကို drawing ၏ အစီအစဉ်ဖြင့် ဆွဲ၊ ဖိုင်ကို ဖွင့်သော အခြား program များက ဆွဲသည့်အတိုင်း: hatch အပြည့်၊ အကျယ် polyline သို့မဟုတ် စာသား mask က နောက်ရှိ လိုင်းနှင့် စာသားကို ဖုံး၊ ရှေ့ရှိ အရာက ဖုံး။ လိုင်းတစ်ကြောင်း စာသားကို ဖြတ်သည့်နေရာတွင် နှစ်ခုစလုံး ပေါ်။ ပုံများနှင့် ချိတ်ထားသော PDF စာမျက်နှာများ linework အောက်တွင် ရှိ။ Fill နှင့် linework ထပ်နေ၍ အကြိမ် 256 ကျော် ဆက်ကြိမ်ဖြစ်သော အလွန်ကြီးသော drawing တွင် ပထမ 256 က အစီအစဉ် ထိန်း၊ ကျန်တာ၏ fill များကို line အောက်တွင် ဆွဲ၊ ထို့ကြောင့် ပြန်ဆွဲခြင်း မြန်။

### TEXTTOFRONT

Open space ရှိ အခြားအရာအားလုံး၏ ရှေ့သို့ စာသား၊ dimension နှင့် leader များ ယူ: `Text`၊ `Dimensions`၊ `Leaders` သို့မဟုတ် `All` ({{key:Enter}} = `All`)။ Undo အဆင့် တစ်ခု။ မရှိလျှင် သို့မဟုတ် ရှေ့တွင် ရှိပြီးသားဆိုလျှင် ထိုသို့ ပြော။

### HATCHTOBACK

Open space ရှိ hatch အားလုံးကို အခြားအရာအားလုံး၏ နောက်သို့ ပို့၊ ဖိုင်တွင် သိမ်းချိန် fill များက linework နှင့် စာသားကို မဖုံးအောင်။ Prompt မရှိ။ Undo အဆင့် တစ်ခု။

### ISOLATEOBJECTS

Alias: `ISOLATE`။ ရွေးထားသော object များသာ ပြ; ကျန်တာအားလုံး UNISOLATEOBJECTS အထိ မြင်ကွင်းမှ ပျောက်။ {{cmd:LAYISO}} နှင့် မတူ၊ ၎င်းသည် သင်ရွေးသော object များပေါ် အလုပ်လုပ်၊ layer အတွက် ဘာမျှ မပြောင်း။ ဝှက်ထား object များကို ဆွဲ၊ ရွေး၊ snap၊ zoom၊ သို့မဟုတ် plot မလုပ်၊ နှင့် `ALL` ယူသော command များက ၎င်းတို့ကို ကျော်။ Object များ isolate ဖြစ်စဉ် ဆွဲသည်များ ပုံမှန်အတိုင်း ပြ။

ဤ session အတွက်သာ၊ ဘာမျှ drawing နှင့်အတူ မသိမ်း၊ undo အဆင့် မဟုတ်၊ drawing ကို ပြန်ဖွင့်လျှင် အားလုံးပြ။ Object များ ဝှက်နေစဉ် status bar တွင် ၎င်းတို့၏ နံပါတ်ပါသော ခလုတ်တစ်ခု ပြ; နှိပ်လျှင် ပြန်ပြ။

### HIDEOBJECTS

ရွေးထားသော object များကို UNISOLATEOBJECTS အထိ ဝှက်။ ISOLATEOBJECTS နှင့် တူညီသော စည်းမျဉ်း: session အတွက်သာ၊ မသိမ်း၊ undo အဆင့် မဟုတ်။

### UNISOLATEOBJECTS

Alias: `UNISOLATE`၊ `UNHIDE`။ ISOLATEOBJECTS သို့မဟုတ် HIDEOBJECTS ဖြင့် ဝှက်ထားသော object အားလုံးကို ပြန်ပြ၊ ပြန်လာသော အရေအတွက်ကို ပြော။

### LAYLOCKFADE

Locked layer ပေါ် object များ မည်သို့ ပေါ်မလဲ၊ နှိပ်သည် ရောက်/မရောက်ကို သတ်မှတ်။ လက်ရှိ အခြေအနေကို ပြော၊ ထို့နောက် ယူ:

- 0 မှ 90 ကြား ဂဏန်း: ရာခိုင်နှုန်း အရိပ် (စတင်ချိန် 50)။ 0 က အရိပ်ပိတ်။
- `ON` သို့မဟုတ် `OFF`: အရိပ်ဖွင့်/ပိတ်၊ ပမာဏ ထိန်း။
- `Pick`၊ ထို့နောက် `Yes` သို့မဟုတ် `No`: command မလည်ပတ်ချိန်တွင် locked layer ရှိ object များကို နှိပ်သော်လည်း ရွေးနိုင်သလား? `No` (မူလ): ရွေး၍ မရ။ `Yes`: နှိပ် သို့မဟုတ် window က ၎င်းတို့ကို ရွေး၊ {{ui:ဂုဏ်သတ္တိများ}} က ပြနိုင်; ပြောင်း၍ မရ၊ command ၏ `Select objects` က ဘယ်တော့မှ မယူ။

Object snap က locked layer ရှိ object များကို နှစ်နည်းလုံး ရှာ။ Plot များကို ဘယ်တော့မှ မမှိန်။ ဆက်တင်နှစ်ခုစလုံး သင်၏ ဖြစ်၍ drawing ၏ မဟုတ်၊ {{ui:ဆက်တင်များ}} အောက်ရှိ {{ui:Locked layers}} တွင်လည်း ရှိ။

### BURST

Block reference များကို explode ပြီး attribute များ ပြောသည်ကို ထိန်း။ `Select block references to burst`၊ {{key:Enter}}: reference တစ်ခုစီကို ဘလောက် object များဖြင့် အစားထိုး၊ မြင်ရသော attribute တစ်ခုစီ၏ တန်ဖိုးက ထို attribute ၏ ကိုယ်ပိုင် layer ပေါ် ရိုးရိုး စာသား ဖြစ်လာ (layer 0 ရှိ attribute သည် reference ၏ layer သို့ ရောက်၊ ဘလောက်၏ အခြား layer 0 object များ ကဲ့သို့)။ မမြင်ရ attribute များ ပျောက်။ ဘလောက်တစ်ခုအတွင်း ဘလောက်သည် block reference ဖြစ်ဆဲ။ Undo အဆင့် တစ်ခု; ပြောင်းထားသော reference အရေအတွက်နှင့် attribute တန်ဖိုး စာသား အရေအတွက်ကို ပြော။

Linked drawing ကို နာမည်ဖြင့် ငြင်းပယ် (ဦးစွာ bind လုပ်၊ သို့မဟုတ် {{cmd:NCOPY}} ဖြင့် ကူး)၊ ရွေးထားသည့် အခြား object များကို ကိုယ်ပိုင်အတိုင်း ထား။ Block reference အတွက် {{cmd:EXPLODE}} က တူညီ object များ ပေး; {{cmd:BURST}} သည် block reference များကိုသာ ယူ၍ attribute စာသားကို ရေတွက်။

### TXT2MTXT

Alias: `T2M`။ Single-line စာသားများကို paragraph စာသားတစ်ခုအဖြစ် ပေါင်း။ `Select single-line text to join`၊ {{key:Enter}}၊ ထို့နောက် `Paragraph` (လိုင်းများ ပေါင်း၍ အကျယ်ဆုံးလိုင်း၏ အကျယ်ဖြင့် ခေါက်) သို့မဟုတ် `Lines` (စာသားတစ်ခုစီ ကိုယ်ပိုင် လိုင်းအဖြစ် ထား); {{key:Enter}} က နောက်ဆုံး သုံးသည်ကို ယူ။ လိုင်းများကို အပေါ်မှ အောက်၊ ထို့နောက် ဘယ်မှ ညာ၊ အပေါ်စာသား၏ ဦးတည်ချက်တလျှောက် စီ။ Paragraph သည် အပေါ်စာသား၏ ဘယ်အပေါ်ထောင့်မှ ချိတ်၊ ၎င်း၏ အမြင့်၊ rotation၊ style၊ layer နှင့် အရောင်ကို ယူ။ Undo အဆင့် တစ်ခု။

ရွေးချယ်မှုထဲ paragraph စာသား ရှိပြီးသားဖြစ်သော စာသား၊ အလွတ်စာသား နှင့် အခြား object များကို ကိုယ်ပိုင်အတိုင်း ထား၊ command က မည်မျှဆိုသည်ကို ပြော။

### NCOPY

Block reference သို့မဟုတ် linked drawing မှ object များကို explode မလုပ်ဘဲ drawing သို့ ကူး။ `Pick an object inside a block reference or a linked drawing`: pick နှင့် အနီးဆုံး object ကို ၎င်းပေါ်သည်နေရာတွင် ကူး၊ အဘယ်မျှ ဘလောက်နက်လည်း; နောက်ထပ် pick ပြီး {{key:Enter}}။ နောက် `Base point to move the copies`: {{key:Enter}} က နေရာ၌ ထား၊ သို့မဟုတ် base point နှင့် ဒုတိယ point ပေး။ Command တစ်ခုလုံး undo အဆင့် တစ်ခု။

ကော်ပီသည် ပေါ်သည့် layer ကို ယူ: ဘလောက်အတွင်း layer 0 object သည် ၎င်းနေသော reference ၏ layer သို့ ရောက်၊ ByBlock အရောင်သည် ထို reference ၏ အရောင် ဖြစ်လာ။ Linked drawing မှ layer `Plan|Walls` သည် `Plan$0$Walls` ဖြစ်လာ (link က ပေးသော နာမည်)၊ linked layer ၏ အရောင်၊ linetype နှင့် lineweight ဖြင့် ပြု။ Attribute ၏ တန်ဖိုးကို စာသားအဖြစ် ကူး။ Locked layer ရှိ block reference များကို ရွေး၍ မရ။

### FLATTEN

ရွေးထားသော object များ၏ height (Z) နှင့် thickness ကို 0 ထား။ `Select objects to flatten`၊ {{key:Enter}}။ ရွေးချယ်မှုသုံးသော block definition များအတွင်း object များကိုလည်း (နှင့် ထို block များအတွင်း block များ) ပြန်ပြ၊ ထို့ကြောင့် ထို block များ၏ reference တိုင်း ပြောင်း; linked drawing များကို မထိ။ Undo အဆင့် တစ်ခု; ပြောင်းလဲခဲ့သော object အရေအတွက်ကို ပြော၊ height သို့မဟုတ် thickness မရှိခဲ့လျှင် ထိုသို့ ပြော။

2D drawing တွင် CadCraft က တတိယ dimension ကိုထိန်းထားသည်မှာ: circle၊ arc၊ ellipse၊ point၊ စာသား၊ block reference၊ hatch၊ leader နှင့် polyline တွင် height (ဆိုလိုသည်မှာ elevation)၊ line ၏ ဆုံးတိုင်းတွင် height၊ နှင့် line၊ circle၊ arc၊ polyline၊ point နှင့် စာသားတွင် thickness၊ ဖိုင်တွင်ရှိသည့်အတိုင်း။ {{cmd:FLATTEN}} က ထိုအရာများကိုသာ ရှင်း။ 3D tab ရှိ 3D model၊ 3D face သို့မဟုတ် solid များကို မထိ၊ tilted plane ရှိ object ကို ဖိုင်ဖွင့်ချိန်က drawing plane သို့ ယူပြီးသား။

### BREAKLINE

Break သင်္ကေတပါသော line တစ်ကြောင်း ဆွဲ၊ အတို ဖြတ်ထားသော view အတွက်။ လက်ရှိ အရွယ်နှင့် ကျော်ထွက်ကို ပြော၊ ထို့နောက် `First point of the break line` (သို့မဟုတ် `Size` / `Extension` ကို ဦးစွာ ပြောင်း)၊ `Second point`၊ နှင့် `Where the break symbol sits`: line တလျှောက် နှိပ်၊ သို့မဟုတ် အလယ်အတွက် {{key:Enter}}။ ရလဒ်သည် လက်ရှိ layer ပေါ် polyline တစ်ခု: line သည် ပေးထားသော point တစ်ခုစီကို extension အတိုင်း ကျော်၊ Z ပုံစံ stroke ပါ အရွယ်ရှိ၊ ထိုအရွယ်၏ တဝက်အရှည်။

`Size` နှင့် `Extension` ကို သင်၏ ဆက်တင်အဖြစ် မှတ်ထား (အရွယ်သည် dimension စာသားအမြင့် နှစ်ဆ၏ dimension scale ဖြင့် မြှောက်၊ extension သည် အရွယ်၏ တဝက်)။ {{key:Enter}} က command ကို ထပ်။

### AUDIT

ဖွင့်ထား drawing ကို ပျက်စီးမှုအတွက် စစ်ပြီး ပြင်။ {{cmd:AUDIT}} သည် model ရှိ object တိုင်း၊ sheet များနှင့် block အတွင်း၊ နှင့် layer table ကို ကြည့်၊ တွေ့သည်များကို အမျိုးအစားအလိုက် စာရင်း:

- finite မဟုတ်သော သို့မဟုတ် အလွန်ကြီးသော ဂဏန်းများ;
- အရွယ်မရှိသော object များ: အရှည်မရှိသော line၊ radius မရှိ circle၊ အမှတ်တစ်ခုတည်း polyline၊ အက္ခရာ သို့မဟုတ် အမြင့် မရှိသော စာသား၊ scale 0 ရှိ block reference;
- drawing တွင် မရှိသော layer ပေါ် object များ; မရှိသော block သို့ reference များ; drawing တွင် မရှိသော text နှင့် dimension style နာမည်များနှင့် linetype နာမည်များ;
- တိုက်ရိုက် သို့မဟုတ် အခြား block များမှတဆင့် ကိုယ်တိုင် ပါဝင်သော block များ;
- id၊ key သို့မဟုတ် file handle တူ object များ;
- တိုင်းတာထားသော point မရှိသော dimension များ၊ နှင့် ပိတ်ထား outline မဟုတ်သော boundary ရှိ hatch များ။

ထို့နောက် `Fix them? [Yes/No]` ကို မေး။ `No` က ဘာမျှ မပြောင်း။ `Yes` က အားလုံးကို undo အဆင့် တစ်ခုဖြင့် ပြင်: ဆွဲ၍ မရသည်များကို ဖယ် (မကောင်းသော ဂဏန်း၊ အရွယ်မရှိ၊ block မရှိ၊ dimension ပျက်၊ သုံးနိုင်သော boundary မရှိ hatch၊ ဘလောက်များ၏ ပိတ်ထား ကွင်းကို ပိတ်သော reference); layer မရှိလျှင် ဖန်တီး; မသိသော style နှင့် linetype နာမည်များကို default သို့; ဝေမျှထားသော key ကို အစားထိုး။ ဖယ်ရှားခဲ့သော object အရေအတွက်နှင့် ပြင်ခဲ့သော အရေအတွက်ကို ပြ။ တူညီသော တွေ့ချက်များ Problems panel တွင် ပြ၊ ၎င်းတို့တစ်ခုစီတွင် ကိုယ်ပိုင် {{ui:ပြုပြင်ရန်}} ရှိ။

ဘာမျှ ငြင်းပယ်ခြင်း မရှိ၊ သို့သော် CadCraft ကိုယ်တိုင် ဆွဲသည်ကိုသာ စစ်; အခြား program များအတွက် သိမ်းထားသော ဒေတာ (3D solid များ၊ OLE object များ) ကို မဖွင့်။

### RECOVER

ပျက်စီးနေသော DXF သို့မဟုတ် DWG ကို ဖွင့်။ {{cmd:RECOVER}} က ဖိုင်ကို မေး၊ ဖတ်နိုင်သည်ကို ဖတ် ဖတ်မရသည်ကို ငြင်းမပယ်ဘဲ၊ ကျော်ခဲ့သော သို့မဟုတ် ယူဆထားသည်များကို စာရင်း၊ ထို့နောက် {{cmd:AUDIT}} လုပ်သကဲ့သို့ `Yes` ဖြင့် စစ်ပြီး ပြင်။

- DXF: code နှင့် value တွဲ မဟုတ်သော လိုင်းများကို တွဲ ပြန်ကိုက်သည်အထိ ကျော်; အဆုံးမရှိသော section ကို ပိတ်; ဖြတ်ထားသော ဖိုင်ကို ဖြတ်ထားသည်အထိ ဖတ်; ဖြတ်ထား binary DXF ကို နောက်ဆုံး ပြည့်စုံသော တန်ဖိုးအထိ ဖတ်။ Section၊ block သို့မဟုတ် object ကို ဖတ်၍ မရသေးလျှင် ထုတ်ပစ်၍ အမည်ပေး၊ ဖတ်ခြင်းကို ဆက်လုပ်။
- DWG: စစ်ဆေးမှု မအောင်သော သို့မဟုတ် decode မလုပ်နိုင်သော object များကို ထုတ်ပစ်၊ ဆုံးရှုံးထားသော object စာရင်းကို object ဒေတာ လျှောက်လှမ်း၍ ပြန်တည်ဆောက်။

ဖိုင်ပေါ်ရှိ ဖိုင်ကို မပြောင်း။ ပြန်ရလာသော drawing သည် မသိမ်းရသေးဘဲ ဖွင့်; အမည်သစ်ဖြင့် သိမ်း။ ဘာမျှ ဖတ်၍ မရသော ဖိုင်ကို အကြောင်းပြ၍ ငြင်းပယ်။

### LEGACYTEXT

အဟောင်း 8-bit Vietnamese font ဖြင့် ရိုက်ထားသော စာသားကို Unicode သို့ ပြော။ Alias `TEXTTOUNICODE` နှင့် `VNTEXT`။

Vietnamese drawing အဟောင်းများသည် ၎င်းတို့၏ စာသားကို အနောက်တိုင်း အက္ခရာများအဖြစ် ထား၊ font က သာ Vietnamese ဖြစ်စေသည်: TCVN3 စာသားကို ABC font များ (`.VnTime`၊ `.VnArial`၊ နှင့် အမည်များ `H` ဖြင့် အဆုံးသတ်သော အကြီးစာလုံး font များ)၊ ထို့နောက် VNI စာသားကို VNI font များ (`VNI-Times`)။ CadCraft က ဖိုင်ဖွင့်စဉ် ဖတ်သည့်အတိုင်း ထိုစာသားကို ပြ၊ ၎င်း၏ text style ၏ font၊ object ၏ font၊ သို့မဟုတ် paragraph စာသား အတွင်း run ၏ font ဖြင့်; ဖိုင်တွင် အဟောင်း အက္ခရာများ ရှိ ဆဲ။

{{cmd:LEGACYTEXT}} က encoding တစ်ခုစီဖြင့် စာသား အရေအတွက်ကို ပြပြီး `Convert … to Unicode?` ကို မေး။ `Yes` က တစ်ခုစီကို ပြန်ရေး (model၊ sheet၊ block၊ attribute တန်ဖိုးများနှင့် definition များ)၊ text style များကို Unicode font (Times New Roman၊ Arial သို့မဟုတ် Courier New ဟောင်း font အမျိုးအစားအလိုက်) ပေး၊ undo အဆင့် တစ်ခုတည်း။ Paragraph စာသား အတွင်း ဖော်မတ်ကို ထိန်း။

သိသော font ကိုသုံးသော စာသား မရှိသည့်အခါ (font နာမည် ပျောက်သော style) `Read selected texts as [Tcvn3/Vni/None]` ကို မေး: encoding ရွေး၊ စာသား ရွေး။ Unicode ဖြစ်ပြီးသား စာသားကို ထားခဲ့။ Dimension စာသား override နှင့် multileader စာသားကို မပြောင်း။
