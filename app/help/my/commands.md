---
title: ညွှန်ကြားချက် ကိုးကားချက်
summary: CadCraft ပုံဆွဲအက်ပ်ရှိ ညွှန်ကြားချက်တိုင်းကို ၎င်းတို့၏ alias များ၊ မေးသော မေးခွန်းများ၊ ရွေးချယ်စရာများနှင့် default တန်ဖိုးများဖြင့် ဖော်ပြထားသည်။
keywords: ညွှန်ကြားချက်များ, aliases, ညွှန်ကြားချက် စာရင်း, ဧရိယာ, ပတ်လည်အလျား, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

ညွှန်ကြားချက်အမည် သို့မဟုတ် alias ကို ရိုက်ပြီး {{key:Enter}} သို့မဟုတ် {{key:Space}} ကို နှိပ်ပါ။ အက္ခရာအကြီးအသေး ခြားနားမှု မရှိပါ၊ ရှေ့ဆုံးရှိ `_`, `-`, `.` သို့မဟုတ် `'` ကို လျစ်လျူရှုပါသည်။ `HELP` (သို့မဟုတ် `?`) ကို ရိုက်ပါက command line history တွင် ညွှန်ကြားချက်အားလုံး၏ တိုတောင်းသော စာရင်းကို ထုတ်ပေးပါသည်။ ဤအကူအညီကို ကြည့်ရန် {{key:F1}} ကို နှိပ်ပါ။

Prompt များကို ဖတ်နည်း - ရွေးချယ်စရာများကို square bracket အတွင်း ထည့်ထားပြီး `D` (Diameter) ကဲ့သို့ capital letter များ ရိုက်၍ ရွေးနိုင်ပါသည်။ Default ကို angle bracket အတွင်း ဖော်ပြထားပြီး {{key:Enter}} နှိပ်ပါက လက်ခံပါသည်။ Point တောင်းသည့်နေရာတွင် click လုပ်နိုင်သလို [Coordinate နှင့် distance ထည့်သွင်းခြင်း](topic:coordinate-entry) တွင် ဖော်ပြထားသော format မည်သည့်တစ်ခုမဆို ရိုက်နိုင်ပါသည်။ Distance တောင်းသည့်နေရာတွင် နံပါတ် ရိုက်နိုင်သလို point နှစ်ခု click လုပ်နိုင်ပါသည်။

Point သို့မဟုတ် object လိုအပ်ပြီး default မရှိသည့်နေရာတွင် {{key:Enter}} နှိပ်ပါက command ပြီးဆုံးပါသည်။ {{key:Esc}} က command ကို ပယ်ဖျက်ပါသည်။ Command တစ်ခု လုပ်ဆောင်သမျှသည် undo step တစ်ခု ဖြစ်ပါသည်။

## ဆွဲရန်

### LINE

Alias: `L`။ မျဉ်းဖြောင့် အပိုင်းများ၊ အပိုင်းတစ်ခုစီသည် သီးခြား object ဖြစ်ပါသည်။

- `Specify first point` (Enter: ပေးခဲ့သော နောက်ဆုံး point မှ စတင်ရန်)
- `Specify next point [Undo]`, ထပ်ခါတလဲလဲ။ အပိုင်းနှစ်ခုပြီးနောက် `[Undo/Close]`။
- `U` က နောက်ဆုံးအပိုင်းကို ပြန်ယူပါသည်၊ `C` က ပထမ point သို့ ပိတ်ပြီး ပြီးဆုံးစေပါသည်။ Enter က ပြီးဆုံးစေပါသည်။

### PLINE

Alias: `PL`။ မျဉ်းနှင့် arc အပိုင်းများပါသော polyline တစ်ခု။

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (အပိုင်းနှစ်ခုရှိပြီးနောက် Close)
- `A` က arc သို့ ပြောင်းပါသည်: `Specify endpoint of arc [Line/CLose/Undo]`။ Arc တစ်ခုစီသည် ယခင်အပိုင်းနှင့် tangent ဖြစ်အောင် ဆက်ပါသည်။ `L` က မျဉ်းသို့ ပြန်ပြောင်းပါသည်၊ `CL` က arc ဖြင့် ပိတ်ပါသည်။
- Enter က ပြီးဆုံးစေပါသည်၊ polyline သည် ဖွင့်ထားဆဲ ဖြစ်ပါသည်။

### CIRCLE

Alias: `C`။

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` က `Specify diameter of circle` ကို မေးပါသည်။
- `2P`: အချင်း၏ အဆုံးနှစ်ခု။ `3P`: စက်ဝိုင်းပေါ်ရှိ point သုံးခု။
- `T` (command `TTR` နှင့်လည်း ရပါသည်၊ {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`၊ ဒုတိယ၊ ထို့နောက် radius (Enter: နောက်ဆုံးတန်ဖိုး)။ စက်ဝိုင်းသည် object နှစ်ခုလုံး (မျဉ်း၊ arc၊ စက်ဝိုင်း၊ polyline အပိုင်း၊ ဘလောက်အတွင်းပါ) ကို tangent ဖြစ်အောင် ထိပါသည်၊ ထိသော စက်ဝိုင်းများအနက် သင်ရွေးထားသော နေရာနှင့် အနီးဆုံးကို ရွေးပါသည်။ ကိုက်ညီသော စက်ဝိုင်း မရှိပါက "Circle does not exist" ဟု ပြပါသည်။
- `TTT` (သို့မဟုတ် {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): object သုံးခု၊ သုံးခုစလုံးကို ထိသော စက်ဝိုင်း၊ သင်ရွေးသော နေရာနှင့် အနီးဆုံး (မျဉ်းသုံးခုဆိုလျှင် သင်နှိပ်သော နေရာအလိုက် အတွင်းဘက် သို့မဟုတ် အပြင်ဘက် စက်ဝိုင်း ရပါသည်)။

### ARC

Alias: `A`။

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: point သုံးခုဖြတ်သွားသော arc။
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`။ Arc သည် start မှ end သို့ နာရီလက်တံ ဆန့်ကျင်ဘက် ဦးတည်ချက်ဖြင့် သွားပါသည်။

### RECTANG

Alias: `REC`, `RECTANGLE`။ ပိတ်ထားသော polyline။

- `Specify first corner point`, `Specify other corner point`။ ဒုတိယ corner အတွက် `@width,height` ကို ရိုက်ပါ။

### POLYGON

Alias: `POL`။ ပုံမှန် polygon ကို ပိတ်ထားသော polyline အဖြစ် ဆွဲပါသည်။

- `Enter number of sides <4>` (3 မှ 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: point ကို click သို့မဟုတ် ရိုက်ပါ၊ အကွာအဝေးက အရွယ်အစားကို သတ်မှတ်ပြီး ဦးတည်ချက်က polygon ကို လှည့်ပါသည်။

### ELLIPSE

Alias: `EL`။

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`၊ ထို့နောက် အခြားဝင်ရိုးသို့ အကွာအဝေး။
- `I` (`Isocircle`၊ {{cmd:ISODRAFT}} ဖွင့်ထားစဉ်သာ): center၊ ထို့နောက် radius သို့မဟုတ် `Diameter`: လက်ရှိ isometric plane ပေါ်တွင် စက်ဝိုင်းတစ်ခု ပေါ်ပုံ ellipse။

### HATCH

Alias: `H`, `BH`, `BHATCH`; သို့မဟုတ် toolbar ရှိ {{ui:Hatch}}။ ပထမဆုံး လက်ရှိ pattern၊ scale နှင့် angle ကို ပြပါသည်။

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, ထပ်ခါတလဲလဲ (`Undo` ကို ဧရိယာ ရှိပြီးနောက် ရနိုင်ပါသည်): click တစ်ခုစီက ၎င်းပတ်လည်ရှိ ပိတ်ထားသော ဧရိယာကို ထည့်ပါသည်၊ အတွင်းရှိ ပိတ်ထားသော ပုံသဏ္ဌာန်များကို island အဖြစ် ထားပါသည်။ Enter က ၎င်းတို့အားလုံးကို hatch တစ်ခုတည်း ပြုလုပ်ပါသည်။
- `S`: `Select closed objects` (ပိတ်ထားသော polyline၊ စက်ဝိုင်း၊ ပိတ်ထားသော ellipse)။
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`။ `SC`: `Specify pattern scale`။ `A`: `Specify pattern angle`။
- `G` (Gradient): pattern အစား fill သည် gradient ဖြစ်ပါသည်။ ၎င်း၏ မေးခွန်းများအတွက် {{cmd:GRADIENT}} ကို ကြည့်ပါ။

ကြည့်ရန် [Hatch နှင့် fill ဧရိယာများ](topic:hatch)။

### GRADIENT

Alias: `GD`။ ဧရိယာကို အရောင်တစ်ခု သို့မဟုတ် နှစ်ခုဖြင့် gradient ဖြင့် ဖြည့်ပါသည်။ ပထမဆုံး gradient ကို မေးပြီး၊ ထို့နောက် {{cmd:HATCH}} ကဲ့သို့ ဆက်လုပ်ပါသည် (`Pick internal point`၊ ပိတ်ထားသော object အတွက် `S`၊ ပြီးဆုံးရန် {{key:Enter}})။

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`၊ ထပ်ခါတလဲလဲ၊ ယခုအခါ၏ gradient ကို ပြသပါသည်။
- `T`: `LINEAR`၊ `CYLINDER`၊ `SPHERICAL`၊ `HEMISPHERICAL`၊ `CURVED` သို့မဟုတ် ၎င်းတို့အနက်တစ်ခု ပြောင်းပြန် (`INVCYLINDER`၊ `INVSPHERICAL`၊ `INVHEMISPHERICAL`၊ `INVCURVED`)။ ရှေ့အက္ခရာများ လုံလောက်ပါသည်။
- `O`: အရောင်တစ်ခု၊ ထို့နောက် 0 မှ 1 အတွင်း tint (0 သည် အနက်သို့၊ 0.5 သည် အရောင်ကိုယ်တိုင်၊ 1 သည် အဖြူသို့)။ `TW`: ပထမနှင့် ဒုတိယအရောင်။ အရောင်သည် 1 မှ 255 အတွင်း နံပါတ်၊ `255,128,0` ကဲ့သို့ နံပါတ်သုံးခု၊ သို့မဟုတ် `#rrggbb` ဖြစ်ပါသည်။
- `A`: gradient ဖြတ်သွားသော angle။ `C`: centered Yes သို့မဟုတ် No (No က gradient ၏ အလယ်ကို တစ်ဖက်သို့ ရွှေ့ပါသည်)။
- မသိသော အရောင် သို့မဟုတ် type နှင့် 0 မှ 1 အပြင်ရှိ tint ကို ငြင်းပါသည်။

{{cmd:HATCHEDIT}} `G` နှင့် Properties (Gradient) ဖြင့် နောက်ပိုင်း gradient ကို ပြောင်းနိုင်ပြီး မည်သည့် hatch ကိုမဆို gradient အဖြစ် ပြောင်းနိုင်ပါသည်။ Gradient ကို မျက်နှာပြင်တွင် ဆွဲပြီး plot လည်း ထုတ်ပါသည်။ DWG 2004 နှင့် နောက်ပိုင်းက gradient hatch အစစ်အဖြစ် သိမ်းပါသည်၊ DXF 2000 နှင့် DWG 2000 က CadCraft အတွက် သိမ်းပြီး အခြားပရိုဂရမ်များက ပထမအရောင်ဖြင့် solid fill အဖြစ် မြင်ပါသည်။

### HATCHGENERATEBOUNDARY

Alias: `HGB`။ boundary ကို ဆုံးရှုံးသွားသော hatch မှ ပြန်ပြုလုပ်ပါသည်။ `Select hatches` (သို့မဟုတ် ရှေ့တွင် ရွေးထားပါ)၊ ထို့နောက် `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`။

- Hatch ၏ loop တစ်ခုစီသည် hatch ၏ layer ပေါ်ရှိ ပိတ်ထားသော polyline ဖြစ်လာပါသည်၊ polyline အသစ်များကို ရွေးထားခဲ့ပါသည်။ ကွေးသော edge များသည် hatch ထိန်းသိမ်းထားသော တိုတောင်းသော မျဉ်းဖြောင့်အပိုင်းများအဖြစ် ပြန်ရောက်ပါသည်။
- Yes ဖြင့် {{cmd:HATCH}} ဖြင့် ပြုလုပ်သော hatch ကဲ့သို့ hatch သည် boundary အသစ်ကို လိုက်ပါသည်။ Undo step တစ်ခု။
- Hatch မရွေးထားပါက ထိုသို့ ပြောပါသည်။

### POINT

Alias: `PO`; သို့မဟုတ် {{ui:Draw}} › {{ui:More}} › {{ui:Point}}။ Enter မနှိပ်မချင်း click တစ်ခုစီအတွက် point object။

- `Specify a point`

### XLINE

Alias: `XL`; သို့မဟုတ် {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}။ နှစ်ဖက်စလုံး အဆုံးမရှိသော construction line များ။ ကြည့်ရန် [Construction line နှင့် ray များ](topic:construction-lines)။

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`၊ ထို့နောက် မျဉ်းတစ်ကြောင်းစီအတွက် `Specify through point`၊ Enter အထိ။
- `A`: `Enter angle of construction line [Reference] <0>`; `R` က ဦးစွာ `Select a line object` ကို မေးပါသည်။
- `B`: `Specify angle vertex point`၊ `Specify angle start point`၊ ထို့နောက် မျဉ်းတစ်ကြောင်းစီအတွက် `Specify angle end point`။
- `O`: `Specify offset distance [Through] <Through>`၊ ထို့နောက် မျဉ်းတစ်ကြောင်းစီအတွက် `Select a line object` နှင့် `Specify side to offset` (သို့မဟုတ် `Specify through point`)။

### RAY

Alias မရှိ; သို့မဟုတ် {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}။ `Specify start point`၊ ထို့နောက် ray တစ်ခုစီအတွက် `Specify through point`၊ Enter အထိ။

### TEXT

Alias: `DT`, `DTEXT`; သို့မဟုတ် toolbar ရှိ {{ui:Text}}။ Single-line စာသား၊ စာကြောင်းတစ်ခုစီသည် သီးခြား object ဖြစ်ပါသည်။

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`၊ ထို့နောက် `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`၊ ထပ်ခါတလဲလဲ: Enter တစ်ခုစီက နောက်စာကြောင်းကို အောက်တွင် စတင်ပါသည်။ အလွတ်စာကြောင်းတွင် Enter နှိပ်ပါက ပြီးဆုံးပါသည်။ ဤနေရာတွင် {{key:Space}} က space ရိုက်ပေးပါသည်။

### DIVIDE

Alias: `DIV`။ {{cmd:DIVIDE}} သည် မျဉ်း၊ arc၊ စက်ဝိုင်း၊ polyline၊ spline သို့မဟုတ် ellipse ပေါ်တွင် အပိုင်းအမျိုးမျိုးလိုက် အမှတ်အသားများ ချပါသည်။ Object ကို ရွေးပြီး အပိုင်းအရေအတွက် (2 မှ 32767) ပေးပါ။ ဖွင့်ထားသော object တွင် အပိုင်းထက် အမှတ်အသား တစ်ခုလျော့ပါသည်; ပိတ်ထားသော object တွင် စတင်သည့်နေရာတွင်လည်း အမှတ်အသား ရပါသည်။ Object ကိုယ်တိုင် မဖြတ်ပါ။ အမှတ်အသားများသည် point များ ဖြစ်ပါသည်; `Block` က ဤ drawing ၏ ဘလောက်တစ်ခုကို အစားထိုးပြီး object ကို လိုက်လှည့်မလား မေးပါသည်။ Spline နှင့် ellipse အတွက် အလျားများကို တိုတောင်းသော chord များဖြင့် တိုင်းပါသည်။ စာသား၊ hatch နှင့် အလျားမရှိသော အခြား object များကို ငြင်းပါသည်။

### MEASURE

Alias: `ME`။ {{cmd:MEASURE}} သည် မျဉ်း၊ arc၊ စက်ဝိုင်း၊ polyline၊ spline သို့မဟုတ် ellipse တစ်လျှောက် ပေးထားသော အလျားတစ်ခုစီတွင် အမှတ်အသား ချပါသည်၊ သင် point ထောက်သော နေရာနှင့် အနီးဆုံး အဆုံးမှ စတင်ပါသည် (ပိတ်ထားသော object ဖြစ်လျှင် ၎င်း၏ စတင်သည့်နေရာမှ)။ အလျားကို ရိုက်ထည့်ခြင်း သို့မဟုတ် point နှစ်ခုဖြင့် ပေးပါ။ ဖွင့်ထားသော object ၏ အဝေးဆုံးအဆုံးတွင် အမှတ်အသား မရပါ။ `Block` က point အစား ဘလောက်တစ်ခုကို အမှတ်အသားတိုင်းတွင် ထားပါသည်။ အလျား 0၊ object ထက် ရှည်သော အလျား၊ နှင့် အမှတ်အသား 32767 ကျော်စေမည့် အလျားတို့ကို ငြင်းပါသည်။

### BOUNDARY

Alias: `BO`, `BPOLY`။ {{cmd:BOUNDARY}} သည် သင်ရွေးသော point ပါဝင်သည့် ဧရိယာပတ်လည်တွင် ပိတ်ထားသော polyline တစ်ခု ဖန်တီးပါသည်၊ မျက်နှာပြင်ပေါ်တွင် ဧရိယာကို ဝန်းရံထားသော မျဉ်း၊ arc၊ စက်ဝိုင်း၊ polyline နှင့် curve များမှ ဖန်တီးပါသည်။ Arc သို့မဟုတ် စက်ဝိုင်းပေါ်ရှိ အပိုင်းများသည် arc အပိုင်းများအဖြစ် ပြန်ရောက်ပါသည်; ellipse နှင့် spline အပိုင်းများသည် တိုတောင်းသော မျဉ်းဖြောင့်အပိုင်းများအဖြစ် ပြန်ရောက်ပါသည်။ `Islands` ဖွင့်ထားပါက (စတင်သည့် ဆက်တင်) အတွင်းရှိ ပိတ်ထားသော ဧရိယာတိုင်းသည် polyline ကိုယ်ပိုင် ရပါသည်။ Point ဆက်ရွေးပါ; Enter က ပြီးဆုံးစေပါသည်။ ဧရိယာကို ဝန်းရံထားသော object များသည် မူလအတိုင်း ကျန်ပါသည်။ point ထောက်သည့် ပိတ်ထားသော ဧရိယာ မရှိပါက ထိုသို့ ပြောပါသည်။

### BLEND

{{cmd:BLEND}} သည် ဖွင့်ထားသော curve နှစ်ခု၏ အဆုံးများကြား spline ဆွဲပါသည်။ ချိတ်ဆက်မည့် curve တစ်ခုစီကို အဆုံးအနီးတွင် click လုပ်ပါ။ `CONtinuity` က `Tangent` (spline သည် curve နှစ်ခုလုံးနှင့် tangent ဖြစ်အောင် ထွက်ပြီး ရောက်ပါသည်) သို့မဟုတ် `Smooth` (အဆုံးတွင် ကွေးပုံကိုလည်း လိုက်ပါသည်) ကို ရွေးပါသည်; ရွေးချယ်ချက်ကို session အတွက် သိမ်းထားပါသည်။ Curve နှစ်ခုကို မပြောင်းပါ။ ပိတ်ထားသော object နှင့် ထိပြီးသား အဆုံးနှစ်ခုကို ငြင်းပါသည်။

### REGION

Alias: `REG`။ {{cmd:REGION}} သည် ပိတ်ထားသော object များကို region များအဖြစ် ပြောင်းပါသည်: ပေါင်းနိုင်၊ ဖြတ်နိုင်၊ တိုင်းနိုင်သော ပြားချပ်ချပ် ဧရိယာများ။ စက်ဝိုင်း၊ ပိတ်ထားသော polyline၊ ပိတ်ထားသော ellipse သို့မဟုတ် ပိတ်ထားသော spline ကို ရွေးပါ၊ သို့မဟုတ် အဆုံးမှ အဆုံးသို့ loop ပိတ်သော မျဉ်း၊ arc သို့မဟုတ် ဖွင့်ထားသော polyline များကို ရွေးပါ; loop တစ်ခုစီသည် region တစ်ခု ဖြစ်လာပြီး ၎င်းမှ မူလ object များကို အစားထိုးပါသည်။ Arc များသည် arc အဖြစ် ဆက်ရှိပါသည်; ellipse နှင့် spline များသည် တိုတောင်းသော မျဉ်းဖြောင့်အပိုင်းများ ဖြစ်လာပါသည်။ ပိတ်မထားပြီး loop မပိတ်သော အရာများကို မူလအတိုင်း ထားပြီး ၎င်းတို့အရေအတွက်ကို ပြောပါသည်။ Drawing တွင် region သည် အမည်မပေးထားသော group အဖြစ် ကိုင်ထားသော ပိတ်ထားသော polyline တစ်ခု သို့မဟုတ် ထိုထက်ပိုသော ပိတ်ထားသော polyline ဖြစ်ပါသည်၊ ထို့ကြောင့် click တစ်ချက်က region တစ်ခုလုံးကို ရွေးပြီး ကူးယူခြင်းသည် ကိုယ်ပိုင် region ဖြစ်ပါသည်; ဖိုင်ကို ဖွင့်သော အခြားပရိုဂရမ်များက ပိတ်ထားသော polyline များကို မြင်ပါသည်။

Drawing တွင် region များရှိပါက 2D tab ရှိ {{cmd:UNION}}၊ {{cmd:SUBTRACT}} နှင့် {{cmd:INTERSECT}} တို့သည် region များပေါ်တွင် အလုပ်လုပ်ပါသည်: `UNION` က ရွေးထားသော region များကို တစ်ခုတည်းသို့ ပေါင်းပါသည် (ခွဲခြားနေသော region များသည် outline ပေါင်းစုံပါသော region တစ်ခု ဖြစ်လာပါသည်)၊ `SUBTRACT` က နှုတ်မည့် region များနှင့် နှုတ်ရမည့် region များကို မေးပါသည် (အပေါက်တစ်ခုသည် region ၏ အစိတ်အပိုင်း ဆက်ရှိပါသည်)၊ `INTERSECT` က အားလုံး ဝေမျှထားသော ဧရိယာကို ထိန်းထားပါသည်။ ၎င်းတို့တစ်ခုစီက ရလဒ်ဧရိယာကို ပြောပြပြီး undo step တစ်ခုဖြစ်ပါသည်။ ဘာမှ မကျန်တော့မည့်အခါ သို့မဟုတ် ဝေမျှသော အရာမရှိသည့်အခါ ငြင်းပါသည်။ 3D tab တွင်နှင့် region မရှိသော drawing တွင် တူညီသော command များသည် ယခင်အတိုင်း solid များပေါ်တွင် အလုပ်လုပ်ပါသည်။

## ပြင်ဆင်ရန်

Alias: `MT`, `T`; သို့မဟုတ် toolbar ရှိ {{ui:Paragraph}}။ အကျယ်တစ်ခုသို့ ပတ်ထုတ်သော စာပိုဒ်စာသား၊ နေရာတွင် ရိုက်ထည့်ပါ။

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: corner နှစ်ခုကြား အကျယ်သည် စာသား ပတ်ထုတ်မည့်နေရာ ဖြစ်ပါသည်။ `H` က `Specify height` ကို မေးပါသည်၊ `J` က `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`၊ `L` က `Enter line spacing factor (0.25 to 4)`၊ `R` က `Specify rotation angle`၊ `W` က `Specify width (0 for no wrapping)` ဖြစ်ပြီး ဒုတိယ corner ကို ကျော်ပါသည်။
- ထို့နောက် drawing ပေါ်တွင် box ဖွင့်ပါသည်: ရိုက်ပါ၊ စာပိုဒ်အသစ်အတွက် {{key:Enter}}၊ ပြီးဆုံးရန် {{key:Mod+Enter}} သို့မဟုတ် အပြင်ဘက် click၊ ပယ်ဖျက်ရန် {{key:Esc}}။ ၎င်း၏ bar က height၊ line spacing၊ width နှင့် justification ကို သတ်မှတ်ပါသည်။ ကြည့်ရန် [စာသားနှင့် label ထည့်ခြင်း](topic:text#write-a-note-that-wraps)။

### TEXTEDIT

Alias: `ED`, `DDEDIT`; သို့မဟုတ် စာသားကို double-click။ `Select a text to edit`၊ Enter အထိ ထပ်ခါတလဲလဲ: တစ်ခုစီသည် တူညီသော box တွင် ဖွင့်ပါသည်။ ရွေးထားသော သို့မဟုတ် double-click လုပ်ထားသော စာသားပေါ်တွင် စတင်ပါက ထိုတစ်ခုကိုသာ တည်းဖြတ်ပြီး ပြီးဆုံးပါသည်။
### ERASE

Alias: `E`, `DELETE`; သို့မဟုတ် object ရွေးထားစဉ် {{key:Delete}} ကို နှိပ်ပါ။

- `Select objects` (object ရွေးပြီးသားဖြစ်ပါက ကျော်ပါသည်)

### MOVE

Alias: `M`။

- `Select objects`
- `Specify base point [Displacement]`၊ `Specify second point`
- `D`: `Specify displacement`၊ `dx,dy` ပုံစံဖြင့် ရိုက်ပါ။

### COPY

Alias: `CO`, `CP`။ ပေးသော point အရေအတွက်အတိုင်း ကူးပါသည်။

`Array` ကို ဒုတိယ point prompt တွင် ရိုက်ပါက တစ်ကြိမ်တည်းဖြင့် အတန်းတစ်ခု ဖန်တီးပါသည်: အရေအတွက် (မူလ object ကို တစ်ခုအဖြစ် ရေတွက်သည်) ပေးပါ၊ ထို့နောက် ပထမ ကူးမှုရောက်မည့် point ကို ပေးပါ; အခြားများသည် တူညီသော အကွာအဝေးဖြင့် လိုက်ပါသည်။ `Fit` က ထို point ကို နောက်ဆုံး ကူးမှု၏ နေရာအဖြစ် သတ်မှတ်ပြီး အခြားများကို ကြားတွင် ညီညီမျှမျှ ဖြန့်ပါသည်။

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`၊ Enter အထိ ထပ်ခါတလဲလဲ။ `U` က နောက်ဆုံး ကူးမှုကို ပြန်ယူပါသည်။

### ROTATE

Alias: `RO`။

- `Select objects`၊ `Specify base point`
- `Specify rotation angle <last angle>`: ဒီဂရီ၊ နာရီလက်တံ ဆန့်ကျင်ဘက် အပေါင်း; သို့မဟုတ် ဦးတည်ရာ point ကို click လုပ်ပါ။

### SCALE

Alias: `SC`။

- `Select objects`၊ `Specify base point`
- `Specify scale factor`: `0.5` သို့မဟုတ် `2` ကဲ့သို့ factor ရိုက်ပါ။ Click လုပ်သော point သည် base point မှ အကွာအဝေးကို factor အဖြစ် ပေးပါသည်။

### MIRROR

Alias: `MI`။

- `Select objects`
- `Specify first point of mirror line`၊ `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Alias: `AL`; သို့မဟုတ် {{ui:Modify}} › {{ui:More}} › {{ui:Align}}။

- `Select objects`
- `Specify first source point`၊ `Specify first destination point`
- `Specify second source point (Enter to continue)`၊ `Specify second destination point`
- `Specify third source point (Enter to continue)`၊ `Specify third destination point`
- အတွဲနှစ်တွဲဖြင့်: `Scale objects based on alignment points? [Yes/No] <N>`

ကြည့်ရန် [Object များကို ညှိခြင်း](topic:modify-objects#align-objects)။

### ALIGNTO

- `Select objects` (သို့မဟုတ် ရွေးထားသည်များ)၊ `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`၊ `To [Selection/First/Last/Point] <Selection>`; `P` က point ကို မေးပါသည်။ ရွေးထားမှုကို ဆက်ထားပါသည်။

### DISTRIBUTE

- `Select objects` (အနည်းဆုံး သုံးခု)၊ `Distribute [Horizontally/Vertically] <Horizontally>`၊ `Space evenly [Centers/Gaps] <Gaps>`။ အပြင်ဆုံး နှစ်ခုသည် နေရာတွင် ကျန်ပါသည်; ရွေးထားမှုလည်း ကျန်ပါသည်။

### ALIGNPANEL

Alias: `ALP`; သို့မဟုတ် {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}။ Click ဖြင့် ALIGNTO နှင့် DISTRIBUTE ကို လုပ်ဆောင်သော panel ကို ဖွင့်ပါသည်။

### LASER

Alias: `LASERCUT`; သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:Laser…}}။ Drawing ပေါ်တွင် Laser panel ကို ဖွင့်ပါသည်: layer တစ်ခုစီက ဘာလုပ်သလဲ (cut၊ score၊ engrave၊ fill၊ picture)၊ preview၊ သိမ်းရန် GRBL G-code၊ နှင့် Web Serial ဖြင့် framing နှင့် ပို့ခြင်း။ ကြည့်ရန် [Drawing ကို laser သို့ ပို့ခြင်း](topic:laser-cutting)။

### STRETCH

Alias: `S`; သို့မဟုတ် {{ui:Stretch}}။ `Select objects to stretch`: ဆွဲရန် ဖြတ်ကျော် window များ (သို့မဟုတ် `C` ရိုက်ပါ) ကို အဆုံးများပေါ်တွင် ဖြတ်ဆွဲပါ။ `Specify base point [Displacement]`၊ `Specify second point`။ Window အတွင်းရှိ point များ ရွေ့ပါသည်: မျဉ်း အဆုံးများ၊ polyline vertex များ (arc အပိုင်းများသည် ၎င်းတို့၏ အမြင့်ကို ထိန်းထားပါသည်)၊ dimension point များ; စက်ဝိုင်း၊ ellipse၊ စာသား၊ point နှင့် ဘလောက်များသည် ၎င်းတို့၏ center သို့မဟုတ် insertion point window အတွင်းရှိပါက တစ်ခုလုံး ရွေ့ပါသည်။ Command မတိုင်မီ ပြုလုပ်ထားသော ရွေးထားမှုသည် ၎င်းကို ပြုလုပ်ခဲ့သော ဖြတ်ကျော် window များ (နှင့် lasso များ) ကို ထိန်းထားပြီး တူညီသော နည်းဖြင့် ဆွဲပါသည်။ Window မရှိပါက object များသည် တစ်ခုလုံး ရွေ့ပါသည်။

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; သို့မဟုတ် {{ui:Array}}။ `Select objects`၊ ထို့နောက် `Enter array type [Rectangular/POlar] <Rectangular>` (ARRAY အတွက်သာ)။

- Rectangular က 4 column × 3 row ဖြင့် စတင်ပြီး object အရွယ်အစား၏ 1.5 ဆ ခြားထားကာ preview အဖြစ် ပြပါသည်။ `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` က column နှင့် row များကို မေးပါသည်၊ `S` က column များကြား နှင့် row များကြား အကွာအဝေးများ (အနုတ်ဆိုလျှင် ဘယ် သို့မဟုတ် အောက်သို့)၊ `COL` နှင့် `R` တစ်ခုစီက ဦးတည်ချက်တစ်ခုစီ။
- Polar က `Specify center point of array` ကို မေးပြီး item 6 ခုဖြင့် အပြည့်အဝ လှည့်ကာ စတင်ပါသည်။ `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` items၊ `F` ဖြည့်မည့် angle (+ နာရီလက်တံ ဆန့်ကျင်ဘက်၊ − နာရီလက်တံ အတိုင်း)၊ `ROT` Yes သို့မဟုတ် No။
- {{key:Enter}} (eXit) က ကူးမှုများကို ရိုးရိုး object များအဖြစ် ပြုလုပ်ပါသည်။ Undo step တစ်ခု။
- `AS` (ASsociative) က ရိုးရိုးကူးမှုနှင့် နောက်ပိုင်း တည်းဖြတ်နိုင်သော array ကြား ပြောင်းပါသည်: နောက်ပိုင်း {{cmd:ARRAYEDIT}} ဖြင့် ပြောင်းနိုင်သော object တစ်ခု၊ ၎င်း၏ grip များ သို့မဟုတ် Properties ဖြင့်။ ရွေးချယ်မှုကို မှတ်ထားပါသည် ({{cmd:ARRAYASSOCIATIVITY}}); ရိုးရိုးကူးမှုဖြင့် စတင်ပါသည်။

### ARRAYPATH

Curve တစ်လျှောက် ကူးပါသည်။ `Select objects`၊ ထို့နောက် `Select path curve`: မျဉ်း၊ arc၊ စက်ဝိုင်း၊ ellipse၊ polyline သို့မဟုတ် spline (array ပြုလုပ်နေသော object များထဲမှ တစ်ခုမဟုတ်ရ)။ Path သည် object များနှင့် နီးသော အဆုံးမှ စတင်ပြီး ပထမ item သည် object များ ရှိနေသည့်နေရာတွင် ရှိပါသည်။

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`၊ preview ပါဝင်သည်။ `M`: `Divide` က item များကို path တစ်ခုလုံးပေါ် ညီညီဖြန့်ပါသည်၊ `Measure` က အကွာအဝေးအလိုက် တစ်ခုစီထားပါသည်။ `I`: item အရေအတွက် (Measure ဖြင့် 0 က ကိုက်ညီသလောက်ဟု ဆိုလိုပါသည်; path အဆုံးကျော်သော အရေအတွက်ကို ကိုက်ညီသည့်အထိ ကန့်သတ်ပါသည်)။ `SP`: path တစ်လျှောက် item များကြား အကွာအဝေး (Measure သို့ ပြောင်းပါသည်)။ `AL`: Yes က item တစ်ခုစီကို path ကို လိုက်လှည့်စေပါသည်၊ No က ထောင်မတ်ထားပါသည်။
- {{cmd:ARRAY}} ရှိ `AS` ကဲ့သို့ပင်။ ဖွင့်ထားပါက array သည် path ၏ ပုံသဏ္ဌာန်၏ ကိုယ်ပိုင်မိတ္တူကို ထိန်းထားပါသည်: နောက်ပိုင်း path curve ကို တည်းဖြတ်ခြင်းသည် item များကို မရွှေ့ပါ။
- Curve မဟုတ်သော path နှင့် item တစ်ခုတည်းကို ငြင်းပါသည်။

### ARRAYEDIT

ASsociative ဖြင့် ပြုလုပ်ထားသော array ကို ပြောင်းပါသည်။ `Select array` (သို့မဟုတ် ရှေ့တွင် ရွေးပါ)။ ၎င်းသည် array ယခုဖြစ်နေသည်ကို ပြပြီး Enter အထိ မေးပါသည်:

- Rectangular: `COL` column များနှင့် ၎င်းတို့၏ အကွာအဝေး၊ `R` row များနှင့် ၎င်းတို့၏ အကွာအဝေး၊ `A` column များ ဆန့်သွားသော angle။
- Polar: `I` items၊ `F` fill angle၊ `ROT` rotate items Yes သို့မဟုတ် No။
- Path: `M` Divide သို့မဟုတ် Measure၊ `I` items၊ `SP` spacing၊ `AL` path နှင့် ညှိပါ။
- `S` (Source) က array က ထပ်ခါတလဲလဲ ပြုလုပ်သော object များကို ကိုယ်ပိုင်အဖြစ် ဖွင့်ပါသည်၊ ဘလောက် editor ကဲ့သို့။ ထိုနေရာတွင် ဆွဲပြီး တည်းဖြတ်ပါ; {{cmd:ARRAYCLOSE}} က သိမ်းသည် သို့မဟုတ် ပယ်ဖျက်သည်၊ item တိုင်း လိုက်ပါသည်။
- `REP` (REPlace): `Select replacement objects`၊ `Specify base point of the replacement objects`၊ ထို့နောက် အစားထိုးမည့် item များကို click လုပ်ပြီး {{key:Enter}}။ ထို item များသည် အစားထိုး object ကို အစား ပြသပါသည်; အစားထိုး object များသည် drawing မှ ထွက်သွားပြီး array အတွင်း နေပါသည်။ `RES` (RESet) က item တိုင်းတွင် မူလ source object များကို ပြန်ပြပါသည်။
- ပြောင်းလဲမှု တစ်ခုစီသည် undo step တစ်ခု။ ရိုးရိုးကူးမှုများ၊ ရိုးရိုး block reference နှင့် layer ကို လော့ခ်ချထားသော array ကို ငြင်းပါသည်။

အရေအတွက်တူတူကို Properties ရှိ Array အောက်တွင် ပါသည်၊ array တွင် grip များရှိပြီး base point က ရွှေ့ပါသည်၊ ဒုတိယ item ရှိ grip က အကွာအဝေးကို သတ်မှတ်ပါသည်၊ နောက်ဆုံး item ကျော်ရှိ grip က အရေအတွက်ကို သတ်မှတ်ပါသည် (polar: ဒုတိယ item က item အရေအတွက်ကို၊ နောက်ဆုံး item က fill angle ကို သတ်မှတ်ပါသည်)။ {{cmd:EXPLODE}} က array ကို ရိုးရိုးကူးမှုများအဖြစ် ပြောင်းပါသည်။

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} Source ကို ပိတ်ပါသည်: `Save the changes to the array's source objects? [Save/Discard] <Save>`။ Array ၏ source object များ ဖွင့်ထားခြင်း မရှိပါက ထိုသို့ ပြောပါသည်။ {{cmd:BCLOSE}} လည်း အလားတူ လုပ်ပါသည်။

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`။ {{cmd:ARRAY}}၊ ARRAYRECT၊ ARRAYPOLAR နှင့် {{cmd:ARRAYPATH}} တို့ စတင်သော အခြေအနေကို သတ်မှတ်ပါသည်; `AS` option ဖြင့် တူညီသော setting ကို ပြောင်းပါသည်။ ဤ browser တွင် မှတ်ထားပါသည်။

### OFFSET

Alias: `O`။ မျဉ်း၊ arc၊ စက်ဝိုင်းနှင့် polyline။

Polyline တစ်ခု အပြင်ဘက်သို့ ရွေ့ပြီး ၎င်း၏ မျဉ်းဖြောင့်အပိုင်းများ ထောင့်တစ်ခုတွင် ခွဲထွက်သွားသည့်အခါ {{cmd:OFFSETGAPTYPE}} က ကွာဟချက်ကို မည်သို့ ပိတ်မည်ကို ဆုံးဖြတ်ပါသည်။

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`၊ ထို့နောက် `Specify point on side to offset` (သို့မဟုတ် Through ဖြင့် `Specify through point`)၊ Enter အထိ ထပ်ခါတလဲလဲ။

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: {{cmd:OFFSET}} က polyline ၏ အပြင်ဘက် ထောင့်များရှိ ကွာဟချက်များကို မည်သို့ ပိတ်သလဲ။ `0` က အပိုင်းများကို တွေ့သည်အထိ ဆန့်ပါသည် (စတင်သည့် ဆက်တင်)၊ `1` က ဟောင်းသော ထောင့်ပတ်လည် arc ဖြင့် ချိတ်ပါသည်၊ `2` က မျဉ်းဖြတ်ဖြင့် ချိတ်ပါသည်။ အတွင်းဘက် ထောင့်များနှင့် arc အပိုင်းများကို မထိခိုက်ပါ။ ဤ session အတွက် ထိန်းထားပါသည်။

### EXTRIM

{{cmd:EXTRIM}} သည် edge တစ်ခု၏ တစ်ဘက်ရှိ အရာအားလုံးကို ဖြတ်ပါသည်။ ဖြတ်မည့် edge (မျဉ်း၊ arc၊ စက်ဝိုင်း၊ polyline၊ ellipse၊ spline သို့မဟုတ် construction line) ကို ရွေးပါ၊ ထို့နောက် ရှင်းလင်းမည့် ဘက်ပေါ်ရှိ point ကို ရွေးပါ: edge ကို ဖြတ်ကျော်သော မျဉ်း၊ arc၊ စက်ဝိုင်း၊ polyline နှင့် construction line တိုင်းသည် ထိုဘက်ရှိ အပိုင်းကို ဆုံးရှုံးပြီး edge မှ စတင်ပါသည်။ ဘက်ကို ရွေးနေစဉ် ဖယ်ရှားမည့် အပိုင်းများသည် pointer ကို လိုက်ပါသည်။ ပိတ်ထားသော edge အတွက် ဘက်များသည် အတွင်းနှင့် အပြင် ဖြစ်ပါသည်။ Edge ကို ထိရုံသာ ထိသော object များနှင့် ဖြတ်ကျော်သော စာသား၊ hatch၊ spline နှင့် ellipse များကို မူလအတိုင်း ထားပါသည်။ Undo step တစ်ခု။

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: {{cmd:TRIM}} နှင့် {{cmd:EXTEND}} စတင်ပုံ။ `1` Quick: object တိုင်းသည် ဖြတ်မည့် edge သို့မဟုတ် boundary ဖြစ်ပါသည်။ `0` Standard: edge များကို ဦးစွာ မေးပါသည်။ LISP တွင် `(setvar "TRIMEXTENDMODE" 0)` လည်း ရပါသည်။

### TRIM

Alias: `TR`။ ပထမ `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` ကို ထုတ်ပြပါသည်။ Quick mode တွင် မြင်ရသော object တိုင်းသည် ဖြတ်မည့် edge ဖြစ်ပြီး ဘာမှ မဖြတ်သော object ကို ဖျက်ပါသည်; Standard mode တွင် ဦးစွာ `Select cutting edges (Enter = every object)` ကို မေးပြီး ထို edge များတွင်သာ ဖြတ်ပါသည်။

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`၊ ထပ်ခါတလဲလဲ: ဖယ်ရှားမည့် အပိုင်းကို click လုပ်ပါ (pointer ရပ်နေစဉ် မီးခိုးရောင်နှင့် မျဉ်းကြောင်းဖြင့် ပြပါသည်)၊ အပိုင်းများစွာကို ဖြတ်သွားသော path ကို ဆွဲပါ (အားလုံး တစ်ဆင့်တည်းဖြင့် သွားပါသည်)၊ သို့မဟုတ် ကြားတွင် fence အတွက် ဗလာနေရာနှစ်ခုကို click လုပ်ပါ။ {{key:Shift}} က ဆန့်ရန် ပြောင်းပါသည်။ `T` က ဖြတ်မည့် edge များကို ရွေး (Standard mode)၊ `F` က fence point များကို မေးပါ၊ `C` က window corner နှစ်ခု (တစ်စိတ်တစ်ပိုင်း ထဲရှိ အပိုင်းများ သွားပါသည်)၊ `O` က `Enter a trim mode option [Quick/Standard]` ကို မေးပါ၊ `E` က `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE) ကို မေးပါ၊ `R` က သင်ရွေးသော object များကို ဖျက်ပါ၊ `U` က နောက်ဆုံး pick သို့မဟုတ် ဆွဲမှုကို ပြန်ယူပါသည်။ Enter က ပြီးဆုံးစေပါသည်။ ကြည့်ရန် [ဖြတ်ခြင်းနှင့် ဆန့်ခြင်း](topic:trim-and-extend)။

- Hatch ပေါ်တွင် click လုပ်ခြင်းသည် hatch ကို ဖြတ်ပါသည်: ဖြတ်မည့် edge များက hatch ဧရိယာကို ခွဲပြီး click လုပ်ထားသော အပိုင်းကို ဖယ်ရှားပါသည် (ဆွဲထားသော outline မကျန်ပါ)။ Hatch သည် ၎င်း၏ pattern သို့မဟုတ် gradient ကို ထိန်းထားပါသည်; boundary နှင့် ချိတ်ထားသော hatch သည် နောက်ပိုင်း မချိတ်တော့ပါ၊ ၎င်းသည် boundary ကို မဖြည့်တော့သောကြောင့်ဖြစ်ပါသည်။ ထိုနေရာတွင် hatch ကို ခွဲနိုင်သော ဖြတ်မည့် edge မရှိပါက၊ click သည် hatch ပေါ်တွင် မရှိပါက၊ ဘာမှ မကျန်တော့မည့်အခါ (ဖျက်ရန် {{cmd:ERASE}} ကို သုံးပါ) ထိုသို့ ပြောပါသည်။ ဆွဲထားသော path သို့မဟုတ် fence သည် hatch ကို မဖြတ်ပါ။

### EXTEND

Alias: `EX`။ TRIM ၏ ပြောင်းပြန်ပုံ: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`။ Click တစ်ချက်က နီးသော အဆုံးကို နောက် boundary အထိ ရှည်စေပါသည်; ဆွဲထားသော path သို့မဟုတ် fence က ဖြတ်သော object တိုင်းကို ရှည်စေပါသည်; {{key:Shift}} က ဖြတ်ပါသည်။ `B` က boundary edge များကို ရွေး (Standard mode)။ Mode နှင့် Edge ကို TRIM နှင့် မျှဝေပါသည်။

### LINKVIEWS

Alias: `SYNCVIEWS`; သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}၊ သို့မဟုတ် drawing tab များပေါ်ရှိ link icon။ `Link the panes' views [ON/OFF]` (Enter က အခြား state ကို ယူပါသည်): ဖွင့်ထားစဉ် active pane ရှိ pan သို့မဟုတ် zoom သည် တူညီသော နေရာအမျိုးအစားကို ပြသနေသော pane အားလုံးကို ရွှေ့ပါသည်။ ကြည့်ရန် [မျက်နှာပြင် ခွဲခြင်း](topic:split-screen)။

### OPENIN3D

Alias မရှိ; သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} (3D modeling အက်ပ်က drawing ကို လက်ဆင့်ယူသည့်နေရာ)။ ၎င်းတွင် tab အသစ်တစ်ခုအဖြစ် DWG အဖြစ် ဖွင့်ပါသည် (ဘာမှ upload မလုပ်ပါ)။ Browser က tab ကို ပိတ်ထားပါက ထိုသို့ ပြောပါသည်။

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: ဗလာနေရာပေါ်တွင် နှိပ်ပြီး ဆွဲသည့်အခါ ဆွဲမည့်အရာ။ Settings › CadCraft › Dragging to select နှင့် တူညီပါသည်။ ကြည့်ရန် [Lasso ရွေးခြင်း](topic:lasso-selection)။

### FILLET

Alias: `F`။ မျဉ်း၊ arc၊ စက်ဝိုင်းနှင့် polyline။ ပထမ `Current settings: Mode = TRIM, Radius = 0` ကို ထုတ်ပြပါသည်။

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` က `Specify fillet radius <last>` ကို မေးပါသည်။ `T` က `Enter Trim mode option [Trim/No trim]` ကို မေးပါသည်: No trim ဖြင့် object များ မူလအတိုင်း ကျန်ပြီး arc တစ်ခုသာ ထည့်ပါသည်။
  - `M` က {{key:Enter}} အထိ ထောင့်များ ပိုမိုရွေးရန် command ကို ဆက်ထားပါသည်; `U` က command မထွက်ဘဲ နောက်ဆုံးထောင့်ကို ပြန်ယူပါသည်။
  - `P` က `Select 2D polyline [Radius]` ကို မေးပြီး မျဉ်းဖြောင့်အပိုင်းနှစ်ခု ထိသော ထောင့်တိုင်းကို ပြောင်းပါသည်။ ရှိပြီးသား fillet များကို radius အသစ်ဖြင့် အစားထိုးပါသည်; radius 0 က ဖယ်ရှားပါသည်။ Radius အတွက် ဘေးအလျား တိုလွန်းသော ထောင့်များကို ထားခဲ့ပြီး ရေတွက်ပါသည်။
- `Select second object or shift-select to apply corner [Radius]`။ Sharp ထောင့်အတွက် click လုပ်စဉ် {{key:Shift}} ကိုင်ထားပါ၊ radius မည်သို့ပင်ဖြစ်စေ။

ထိန်းထားလိုသော အစိတ်အပိုင်းပေါ်တွင် object တစ်ခုစီကို click လုပ်ပါ။ မတွေ့သော မျဉ်းနှစ်ကြောင်းကို ဆန့်ပါသည်။ မျဉ်းပြိုင်နှစ်ကြောင်းတွင် ကွာဟချက်တစ်လျှောက် ဝက်စက်ဝိုင်း ရပါသည်၊ သင် click လုပ်သော နေရာနှင့် နီးသော ပထမမျဉ်း၏ အဆုံးတွင်။ စက်ဝိုင်းကို ဘယ်တော့မှ မဖြတ်ပါ။ Polyline တစ်ခု၏ ကပ်လျက် အပိုင်းနှစ်ခုသည် polyline အတွင်းရှိ arc ကို ရပါသည်; polyline နှင့် အခြား object တစ်ခုသည် ဖြတ်ချက်သည် polyline ၏ ပထမ သို့မဟုတ် နောက်ဆုံးအပိုင်းတွင် ကျသည့်အခါ အလုပ်လုပ်ပါသည်။

### CHAMFER

Alias: `CHA`။ မျဉ်းများနှင့် polyline ၏ မျဉ်းဖြောင့်အပိုင်းများ။ ယခုအကွာအဝေး (သို့မဟုတ် အလျားနှင့် angle) ကို ဦးစွာ ထုတ်ပြပါသည်။

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` က `Specify first chamfer distance <last>` နှင့် `Specify second chamfer distance <the first>` ကို မေးပါသည်: ပထမကို သင်ရွေးသော ပထမမျဉ်းမှ ဖြတ်ပြီး ဒုတိယကို အခြားမျဉ်းမှ ဖြတ်ပါသည်။
  - `A` က `Specify chamfer length on the first line` နှင့် `Specify chamfer angle from the first line` ကို မေးပါသည်။
  - `E` (mEthod) က နောက် chamfer က နှစ်ခုအနက် မည်သည်ကို သုံးမလဲ ရွေးပါသည်။ `T`၊ `M`၊ `U` နှင့် `P` တို့သည် {{cmd:FILLET}} နှင့် တူပါသည်။
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`။ {{key:Shift}}+click က sharp ထောင့်ပြုလုပ်ပါသည်။

မျဉ်းထက် ရှည်သော အကွာအဝေးကို ငြင်းပါသည် (`Distance is too large.`)။

### BREAK and BREAKATPOINT

Alias: `BR`။ `Select object` (click လုပ်သော နေရာသည် ပထမ point ဖြစ်ပါသည်)၊ `Specify second break point [First point]`; `F` က `Specify first break point` နှင့် `Specify second break point` ကို မေးပါသည်။ ကြားရှိအပိုင်း ပျောက်သွားပါသည်; စက်ဝိုင်းတွင် ပထမ point မှ နာရီလက်တံ ဆန့်ကျင်ဘက်။ BREAKATPOINT က `Specify break point` ကို မေးပြီး ထို point တွင် object ကို နှစ်ပိုင်းခွဲပါသည် (စက်ဝိုင်းမဟုတ်ပါ)။

### LENGTHEN

Alias: `LEN`။ `Select an object to measure [DElta/Percent/Total/DYnamic]`: pick တစ်ခုက `Current length` (နှင့် arc ၏ ပါဝင်သော angle) ကို ထုတ်ပြပြီး ထပ်မေးပါသည်။ `DE` က `Enter delta length (negative shortens) [Angle]` ကို မေးပါသည်၊ `P` က `Enter percentage length`၊ `T` က `Specify total length [Angle]`၊ `DY` က ဆွဲပါသည်။ ထို့နောက် `Select an object to change [Undo]`၊ ထပ်ခါတလဲလဲ: click နှင့် နီးသော အဆုံးက ရွေ့ပါသည်။ မျဉ်း၊ arc နှင့် ဖွင့်ထားသော polyline။

### JOIN

Alias: `J`။ `Select objects to join`။ အဆုံးမှ အဆုံးသို့ တွေ့သော မျဉ်း၊ arc နှင့် ဖွင့်ထားသော polyline များသည် polyline ဖြစ်လာပါသည် (ကွင်းပိတ်သွားလျှင် ပိတ်ထားသော polyline); တစ်ကြောင်းတည်းရှိ မျဉ်းများသည် မျဉ်းတစ်ကြောင်း ဖြစ်လာပါသည်; စက်ဝိုင်းတစ်ခုတည်းရှိ arc များသည် arc တစ်ခု သို့မဟုတ် စက်ဝိုင်း ဖြစ်လာပါသည်။ သမိုင်းတွင် ဘယ်နှစ်ခု ပေါင်းပြီး ဘယ်နှစ်ခု မပေါင်းနိုင်သည်ကို ပြပါသည်။

### MATCHPROP

Alias: `MA`, `PAINTER`။ `Select source object`၊ ထို့နောက် `Select destination objects [Settings]` နှင့် {{key:Enter}}။ Layer နှင့် အရောင်ကို ကူးပါသည်၊ အမျိုးအစားတူ object များကြား စာသားအမြင့်နှင့် အကျယ်၊ dimension အရွယ်အစားများ သို့မဟုတ် hatch pattern ကို ကူးပါသည်။ `S` က `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` ကို Enter အထိ ထပ်မေးပါသည်; ရွေးချယ်မှုကို session အတွက် မှတ်ထားပါသည်။

### EXPLODE

Alias: `X`။ Polyline များသည် မျဉ်းနှင့် arc ဖြစ်လာပါသည်၊ block reference များသည် ၎င်းတို့၏ object များ ဖြစ်လာပါသည်၊ dimension များသည် မျဉ်း၊ arrowhead နှင့် စာသား ဖြစ်လာပါသည်။ တည်းဖြတ်နိုင်သော array ({{cmd:ARRAYEDIT}}) သည် ၎င်း၏ object များ၏ ရိုးရိုးမိတ္တူများ ဖြစ်လာပါသည်။

- `Select objects`

### GROUP

Alias: `G`။ {{cmd:GROUP}} သည် ရွေးထားသော object များကို ၎င်းတို့ဝေမျှသော အမည်တစ်ခု ပေးပါသည်။ Object များကို ရွေးပြီး အမည်တစ်ခု ရိုက်ပါ (space မပါရ; `?` သည် group များကို စာရင်းပြသည်; Enter က အမည်မပေးသော group ပြုလုပ်ပါသည်) နှင့် အမည်ရှိ group အတွက် ရွေးချယ်ခွင့်ရှိသော ဖော်ပြချက်။ ထို့နောက် ၎င်းတို့တစ်ခုပေါ်တွင် click လုပ်ခြင်း သို့မဟုတ် တစ်ခုကို ယူသော window သည် အားလုံးကို ရွေးပါသည်၊ ထို့ကြောင့် ၎င်းတို့ အတူ ရွှေ့၊ ကူး၊ ဖျက်ပါသည်; object တစ်ခုစီသည် ကိုယ်ပိုင် object ဖြစ်ဆဲ ဖြစ်ပါသည်။ Object တစ်ခုသည် group များစွာတွင် ရှိနိုင်ပါသည်။ Group တစ်ခုလုံး၏ မိတ္တူသည် အမည်မပေးသော group အသစ် ဖြစ်ပါသည်; အဖွဲ့ဝင်တစ်ခု၏ မိတ္တူသည် group ထဲသို့ ဝင်ပါသည်။ Group များသည် ၎င်းတို့ ပြုလုပ်ခဲ့သော နေရာ (model သို့မဟုတ် sheet) ပိုင်ပါသည်။ DWG သို့ သို့မဟုတ် DXF သို့ save as လုပ်ပြီး CadCraft တွင် ပြန်ဖွင့်ပါက ထိန်းထားပါသည်; DXF 2000 ဖိုင်များသည် အခြားပရိုဂရမ်များအတွက် group object အဖြစ်လည်း ပါဝင်ပါသည်၊ အခြားပရိုဂရမ်တွင် ပြုလုပ်ထားသော group များကို DXF သို့ DWG ဖွင့်သည့်အခါ ဖတ်ပါသည်။

### UNGROUP

{{cmd:UNGROUP}} သည် group များကို ခွဲပါသည်: group များ၏ object များကို ရွေးပါ (သင်ရွေးသော object တိုင်း ပါဝင်သည့် group တိုင်း ခွဲခံရပါသည်) သို့မဟုတ် `Name` နှင့် group ၏ အမည်ကို ရိုက်ပါ။ Object များသည် drawing တွင် ကျန်ပါသည်။ Undo step တစ်ခုဖြင့် group များ ပြန်ရပါသည်။

### GROUPEDIT

{{cmd:GROUPEDIT}} သည် group တစ်ခုကို ပြောင်းပါသည်။ ၎င်း၏ object တစ်ခုကို ရွေးပါ၊ သို့မဟုတ် `Name` နှင့် ၎င်း၏အမည်; ရွေးပြီးသား group ကို ယခုအတိုင်း ယူပါသည်။ ထို့နောက်: `Add` object များ (တစ်ခုချင်း ရွေးရသည်၊ group တစ်ခုလုံးဖြင့် မဟုတ်)၊ `Remove` object များ၊ group ကို `REName`၊ ၎င်း၏ `Description` ကို ပြောင်းရန်၊ သို့မဟုတ် `Selectable` ကို သတ်မှတ်ပါ (object တစ်ခုပေါ် click လုပ်သည့်အခါ group တစ်ခုလုံး ရွေးမည်လား)။ `eXit` သို့မဟုတ် Enter က ပြီးဆုံးစေပါသည်။ Object မကျန်တော့သော group သည် ပျောက်သွားပါသည်။

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1` (စတင်သည့် ဆက်တင်) ဖြင့် group ထဲရှိ object ပေါ် click သို့မဟုတ် window သည် group တစ်ခုလုံးကို ရွေးပါသည်; `0` ဖြင့် object တစ်ခုချင်းစီကို ရွေးပါသည်၊ ထို့ကြောင့် အဖွဲ့ဝင်တစ်ခုကို တည်းဖြတ်နိုင်ပါသည်။ Session အတွက် ထိန်းထားပါသည်။

## Clipboard

CadCraft ၏ ကိုယ်ပိုင် clipboard: drawing တစ်ခုအတွင်း၊ drawing များကြား နှင့် ဤ browser ရှိ CadCraft tab များကြား အလုပ်လုပ်ပါသည်။ ကြည့်ရန် [ကူးခြင်း၊ ထည့်ခြင်းနှင့် ပွားခြင်း](topic:copy-paste)။

### COPYCLIP

{{key:Mod+C}}၊ သို့မဟုတ် {{ui:Edit}} group ရှိ {{ui:Copy}}။ Object များကို ၎င်းတို့သုံးထားသော ဘလောက်နှင့် layer များနှင့်အတူ clipboard သို့ ကူးပါသည်။ Object များ ရွေးထားဆဲ ဖြစ်ပါသည်။

- `Select objects to copy` (object ရွေးပြီးသားဖြစ်ပါက ကျော်ပါသည်)

### CUTCLIP

{{key:Mod+X}}၊ သို့မဟုတ် {{ui:More}} menu ရှိ {{ui:Cut}}။ Object များကို clipboard သို့ ကူးပြီး ထို့နောက် ဖျက်ပါသည် (undo step တစ်ခု)။

- `Select objects to cut` (object ရွေးပြီးသားဖြစ်ပါက ကျော်ပါသည်)

### COPYBASE

သင်ရွေးသော base point ဖြင့် object များကို clipboard သို့ ကူးပါသည်; ကူးထည့်သည့်အခါ ထို point ကို နေရာချပါသည်။

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}၊ သို့မဟုတ် {{ui:Edit}} group ရှိ {{ui:Paste}}။ မိတ္တူသည် cursor ကို လိုက်ပါသည်၊ ၎င်း၏ extents ၏ ဘယ်ဘက်အောက်ထောင့်မှ ချိတ်ဆွဲပါသည် (သို့မဟုတ် ၎င်း၏ center၊ သို့မဟုတ် `COPYBASE` point; [CadCraft ဆက်တင်များ](topic:settings) ကို ကြည့်ပါ)။

- `Specify insertion point`

ကူးထည့်ထားသော object များ ရွေးထားပါသည်။ Drawing တွင် တူညီသော အမည်ဖြင့် ဘလောက် ရှိပြီးသားဖြစ်ပါက ဤ drawing ၏ အဓိပ္ပာယ်ကို ထိန်းထားပါသည်။

MarkupCraft တွင် ကူးထားသော နေရာသည် CadCraft ကူးထားသည်ထက် အသစ်ဖြစ်ပြီး (နှင့် ၆ နာရီအတွင်း) ဖြစ်ပါက {{key:Mod+V}} နှင့် `PASTECLIP` က ထိုနေရာကို အစားထည့်ပါသည်: `PASTEAREA` ကို ကြည့်ပါ။

### PASTEAREA

Alias: `PAREA`။ {{ui:Paste a copied area}} ၊ {{ui:More}} menu တွင်။ MarkupCraft တွင် {{ui:Copy area}} ဖြင့် ကူးထားသော နေရာကို မှန်ကန်သော အရွယ်အစားဖြင့် ပုံတစ်ပုံအဖြစ် ထည့်ပါသည်။ [Drawing ထဲရှိ ပုံများ](topic:pictures) ကို ကြည့်ပါ။

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (sheet တွင် drawing scale မရှိသည့်အခါသာ): နံပါတ်တစ်ခု၊ paper အရွယ်အစားအတွက် {{key:Enter}}၊ သို့မဟုတ် `P`၊ ထို့နောက် `First point on the pasted area`၊ `Second point on the pasted area` နှင့် ၎င်းတို့၏ မှန်ကန်သော အကွာအဝေး။

### PASTEORIG

{{key:Mod+Shift+V}}၊ သို့မဟုတ် {{ui:More}} menu ရှိ {{ui:Paste in place}}။ Object များ ကူးခဲ့သော coordinate များတွင် ကူးထည့်ပါသည်။ ဘာမှ မမေးပါ။

### DUPLICATE

Alias: `DUP`။ {{key:Mod+D}}၊ သို့မဟုတ် {{ui:More}} menu ရှိ {{ui:Duplicate and move}}။ Object များ၏ မိတ္တူသည် ရှိနေရာမှ pointer နှင့်အတူ ရွှေ့ပါသည်; {{key:Esc}} က ဘာမှ မထားခဲ့ပါ။ Clipboard ကို မသုံးပါ။

- `Select objects to duplicate` (object ရွေးပြီးသားဖြစ်ပါက ကျော်ပါသည်)
- `Specify where the copy goes (Esc leaves nothing)`: click၊ point ရိုက်ခြင်း၊ `@dx,dy` (pointer ရှိနေရာမှ)၊ သို့မဟုတ် cursor ဆီသို့ အကွာအဝေး။

### SELECT

`Select objects` ကို မေးပြီး (အောက်ပါ option အားလုံးနှင့်) သင်ရွေးသည်များကို ရွေးထားဆဲ ထားပါသည်၊ နောက် command အတွက် သို့မဟုတ် နောက်ပိုင်း `P` အတွက်။

### QSELECT

Alias: `QS`။ Browser တွင် {{ui:Quick select}} dialog ([Object များ ရွေးခြင်း](topic:select-objects#select-by-a-rule-quick-select) ကို ကြည့်ပါ)။ ၎င်းမရှိပါက command line က `Enter object type`၊ `Enter property`၊ `Enter operator [=/<>/>/</*/Select all] <=>` နှင့် `Enter value` ကို မေးပါသည်။ ကိုက်ညီသည်များက ရွေးမှု ဖြစ်လာပါသည်။

### SELECTSIMILAR

Alias: `SIM`။ `Select objects [SEttings]` (သို့မဟုတ် လက်ရှိရွေးမှု): layer နှင့် အရောင်တူ (နှင့် ဘလောက်အမည်၊ hatch pattern) အမျိုးအစားတူ object တိုင်းကို ရွေးပါသည်။ `SE` က `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` ကို Enter အထိ ထပ်မေးပါသည်။

### FIND

Alias မရှိ; သို့မဟုတ် {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}။ Browser တွင် {{ui:Find and replace}} dialog ([စာသားနှင့် label ထည့်ခြင်း](topic:text#find-and-replace-words) ကို ကြည့်ပါ)။ ၎င်းမရှိပါက: `Enter text to find`၊ ထို့နောက် `Enter replacement text (Enter: select what is found)`။ စာသား၊ attribute တန်ဖိုးနှင့် dimension စာသားတွင် ရှာပါသည်၊ ဖွင့်ထားသော tab သို့မဟုတ် ရွေးမှုထဲတွင်။

### SELECTALL and DESELECT

`SELECTALL` (alias `AI_SELALL`၊ {{key:Mod+A}}) က ဖွင့်ထားသော tab ရှိ တည်းဖြတ်နိုင်သော object အားလုံးကို ရွေးပါသည်။ `DESELECT` (alias `AI_DESELECT`၊ `SELECTNONE`၊ သို့မဟုတ် {{key:Esc}}) က ရွေးမှုကို ရှင်းပါသည်။

## Dimensions

### DIMLINEAR

Alias: `DLI`, `DIMLIN`။ အလျား သို့မဟုတ် ဒေါင်လိုက် အကွာအဝေး။

- `Specify first extension line origin [Select object]` (Enter သို့မဟုတ် `S`: `Select object to dimension`၊ ထို့နောက် မျဉ်း၊ arc၊ စက်ဝိုင်း သို့မဟုတ် polyline အပိုင်းကို click)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`။ `T` က စာသား (`<>` သည် တိုင်းထားသော တန်ဖိုး) ကို မေးပါသည်၊ `H` နှင့် `V` က ဦးတည်ချက်ကို သတ်မှတ်ပါသည်၊ `R` က `Specify angle of dimension line <0>` ကို မေးပါသည်။

### DIMALIGNED

Alias: `DAL`, `DIMALI`။ Point နှစ်ခုကြား အမှန်တကယ် အကွာအဝေး။

- Origin များသည် {{cmd:DIMLINEAR}} ကဲ့သို့ပင်၊ ထို့နောက် `Specify dimension line location [Text]`။

### DIMANGULAR

Alias: `DAN`, `DIMANG`။

- `Select arc, circle or line, or Enter for a vertex`
- Arc: ၎င်း၏ angle။ စက်ဝိုင်း: `Specify second angle endpoint`။ မျဉ်း: `Select second line`။ Enter: `Specify angle vertex`၊ `Specify first angle endpoint`၊ `Specify second angle endpoint`။
- `Specify dimension line location [Text]`: တိုင်းမည့် angle အတွင်းတွင် click လုပ်ပါ။

### DIMRADIUS and DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`။

- `Select arc or circle`၊ ထို့နောက် `Specify dimension line location [Text]`။

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`။ နောက်ဆုံး linear သို့မဟုတ် aligned dimension ကို ဆက်လက်လုပ်ပါသည် (သို့မဟုတ် `Select linear or aligned dimension` ကို မေးပါသည်)။

- `Specify second extension line origin [Undo]`၊ Enter အထိ ထပ်ခါတလဲလဲ။

### DIMBASELINE

Alias: `DBA`, `DIMBASE`။ {{cmd:DIMCONTINUE}} နှင့် ဆင်တူသော်လည်း dimension တိုင်းသည် ပထမ origin မှ စတင်ပြီး ပိုအပြင်ဘက်သို့ ပုံစံခွက်ထားပါသည်။

### DIMORDINATE

Alias: `DOR`, `DIMORD`။ `Specify feature location`၊ ထို့နောက် `Specify leader endpoint [Xdatum/Ydatum/Text]`။ Feature သည် UCS origin မှ X သို့မဟုတ် Y ဖြင့် ဘယ်လောက်ဝေးသလဲကို leader တွင် ရေးပါသည်: အများအားဖြင့် အပေါ် သို့မဟုတ် အောက်သို့ သွားသော leader သည် X ကို ဖတ်ပြီး ဘေးသို့ သွားသော leader သည် Y ကို ဖတ်ပါသည်; `Xdatum` နှင့် `Ydatum` က ဘယ်ဘက်ကို သတ်မှတ်ပါသည်။ Origin ကို ဦးစွာ {{cmd:UCS}} ဖြင့် သတ်မှတ်ပါ (မရှိပါက drawing ၏ 0,0)။ Grip များက feature၊ origin နှင့် leader ၏ အဆုံးကို ရွှေ့ပြီး တန်ဖိုးက လိုက်ပါသည်။ DWG နှင့် DXF တွင် ordinate dimension အစစ်အဖြစ် သိမ်းပါသည်။ Feature ပေါ်တွင် leader အဆုံးကို ငြင်းပါသည်။

### DIMARC

Alias: `DAR`။ `Select arc or polyline arc segment`၊ ထို့နောက် `Specify arc length dimension location [Text]`။ Arc ဆုံးရှုံးမှုကို ကွေးပေါ်တွင် တိုင်းပါသည် (chord မဟုတ်ပါ) နှင့် တန်ဖိုးရှေ့တွင် arc သင်္ကေတကို ရေးပါသည်။ စက်ဝိုင်းအပြည့်၊ မျဉ်း သို့မဟုတ် မျဉ်းဖြောင့် polyline အပိုင်းကို ငြင်းပါသည်။ DWG သည် arc length dimension အဖြစ် ထိန်းထားပါသည်; DXF သည် အလျားကို စာသားအဖြစ် ထားသော angular dimension အဖြစ် ထိန်းထားပြီး CadCraft သည် arc length dimension အဖြစ် ပြန်ဖွင့်ပါသည်။

### DIMJOGGED

Alias: `DJO`, `JOG`။ `Select arc or circle`၊ `Specify center location override`၊ `Specify jog location`။ Center က အဝေးဝေးတွင် သို့မဟုတ် စာရွက်အပြင်ရှိသော ကွေးအတွက် radius dimension: dimension line သည် center အစား သင်ပေးသော point မှ စတင်ပြီး ထိုနေရာတွင် jog ပါသည်၊ သို့သော် အမှန်တကယ် radius ကို ဆက်ပြသပါသည်။ DWG သည် jogged radius dimension အဖြစ် ထိန်းထားပါသည်; DXF သည် radius dimension အဖြစ် ထိန်းထားပြီး CadCraft သည် jogged အဖြစ် ပြန်ဖွင့်ပါသည်။

### DIMJOGLINE

Alias: `DJL`။ `Select dimension to add jog [Remove]`၊ ထို့နောက် `Specify jog location (or press Enter)`။ Linear သို့မဟုတ် aligned dimension ၏ မျဉ်းပေါ်တွင် jog သင်္ကေတ ထည့်ပါသည်၊ အကွာအဝေးကို scale အတိုင်း မဆွဲကြောင်း ပြသရန်; တန်ဖိုး မပြောင်းပါ။ `Remove` က ဖယ်ရှားပါသည်။ အခြား dimension အမျိုးအစားများကို ငြင်းပါသည်။

### QDIM

Alias မရှိ။ `Select geometry to dimension`၊ ထို့နောက် `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`။ အခြေခံ အရာများစွာကို တစ်ဆင့်တည်းဖြင့် dimension လုပ်ပါသည်: မျဉ်းနှင့် polyline အပိုင်းများ၏ အဆုံးများ၊ စက်ဝိုင်းနှင့် arc များ၏ center များ၊ point များနှင့် block reference များ။ Object များ၏ အပေါ် သို့မဟုတ် အောက်ရှိ နေရာသည် ဖြတ်ကျော်တိုင်းပြီး ဘေးရှိ နေရာသည် အပေါ်သို့ တိုင်းပါသည်။ `Continuous` က point များကို ချိတ်ပါသည်၊ `Baseline` က အားလုံးကို ပထမမှ တိုင်းပါသည်၊ `Staggered` က အလယ်မှ အပြင်သို့ တစ်စုံစီ ထားပါသည်၊ `Ordinate` က point တစ်ခုစီကို datum မှ အကွာအဝေး ပေးပါသည် (`datumPoint` က datum အသစ်ရွေးပါသည်)၊ `Radius` နှင့် `Diameter` က ရွေးထားသော စက်ဝိုင်းနှင့် arc အားလုံးကို dimension လုပ်ပါသည်။ Mode ကို မှတ်ထားပါသည်။ ပြုလုပ်သမျှ အားလုံးသည် undo step တစ်ခု။ Point နှစ်ခုအောက်သို့မဟုတ် Radius နှင့် Diameter အတွက် arc သို့မဟုတ် စက်ဝိုင်း မရှိပါက ထိုသို့ ပြောပါသည်။

### DIMBREAK

Alias: `DBREAK`။ `Select dimensions to add or remove breaks`၊ ထို့နောက် `Break where other objects cross [Auto/Manual/Remove] <Auto>`။ `Auto` က အခြား object များ ဖြတ်ကျော်သည့်နေရာတိုင်းတွင် dimension နှင့် extension line တွင် ကွာဟချက် ထားပါသည်၊ ထို object များ သို့မဟုတ် dimension ရွေ့သည့်အခါ ကွာဟချက်များကို ပြန်တွက်ပါသည်။ `Manual` (dimension တစ်ခု) က point နှစ်ခုကို မေးပြီး ၎င်းတို့ကြား ကွာဟချက် ထားပါသည်။ `Remove` က ကွာဟချက် အားလုံးကို ဖယ်ရှားပါသည်။ ကွာဟချက်သည် dimension စာသား၏ အမြင့် 1.5 ဆ ဖြစ်ပါသည်။

### DIMSPACE

Alias မရှိ။ `Select base dimension`၊ `Select dimensions to space`၊ `Enter spacing value or Auto <Auto>`။ Parallel linear နှင့် aligned dimension များ (သို့မဟုတ် တူညီသော vertex ပတ်လည် angular dimension များ) ၏ dimension line များကို ရွှေ့ပြီး အခြေခံ dimension မှ စတင်ကာ အကွာအဝေး တူညီစွာ ထားပါသည်၊ ၎င်းတို့ ရှိသော ဘက်တွင်။ `0` က အခြေခံနှင့် ညီညွတ်စေပါသည်; `Auto` က အခြေခံ dimension ၏ စာသားအမြင့်၏ နှစ်ဆ။ အခြေခံနှင့် parallel မဟုတ်သော dimension များကို ထားခဲ့ပါသည်။

### DIMINSPECT

Alias မရှိ။ `Select dimensions`၊ `Inspection frame shape [Round/Angular/None/remove] <Round>`၊ `Enter label`၊ `Enter inspection rate <100%>`။ တန်ဖိုးကို ဝန်းရံ၍ ရှေ့တွင် label နှင့် နောက်တွင် inspection rate ပါသော frame ဆွဲပါသည်။ `remove` က frame ကို ဖယ်ရှားပါသည်။ Tolerance စာသားသည် တန်ဖိုးနှင့်အတူ ကျန်ပါသည်။

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`။ `Enter dimension variable name to override or Clear`၊ `Enter new value for …`၊ Enter အထိ ထပ်ခါတလဲလဲ၊ ထို့နောက် `Select dimensions`။ ရွေးထားသော dimension များအတွက်သာ ထို ဆက်တင်များကို ပြောင်းပါသည်; dimension style မပြောင်းပါ။ နံပါတ် သို့မဟုတ် ခလုတ် ဖြစ်သော variable များကို ယူပါသည် (`DIMTXT`၊ `DIMASZ`၊ `DIMSCALE`၊ `DIMDEC`၊ `DIMSE1` …)။ `Clear` က ရွေးထားသော dimension များကို ၎င်းတို့၏ style သို့ ပြန်ထားပါသည်။ ထို variable မဟုတ်သော အမည်နှင့် ယူနိုင်မည်မဟုတ်သော တန်ဖိုးကို ငြင်းပါသည်။

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`။ `Select dimensions`၊ ထို့နောက် တစ်ခုစီအတွက် ၎င်း၏ extension line origin များ (`Specify first extension line origin on an object`: မျဉ်း၏ အဆုံး သို့မဟုတ် အလယ်၊ polyline ထောင့်၊ center သို့ snap လုပ်ပါ; Enter က ထို point ကို အခမဲ့ ထားပါသည်)၊ သို့မဟုတ် radius၊ diameter၊ jogged radius သို့မဟုတ် arc length dimension အတွက် `Select arc or circle`။ ထို့နောက် dimension သည် ထို object များနှင့် ချိတ်ဆက်ပါသည်: ၎င်းတို့ ရွေ့သည် သို့မဟုတ် အရွယ်အစား ပြောင်းသည့်အခါ တူညီသော undo step တွင် လိုက်ပြီး ပြန်တိုင်းပါသည်။ ချိတ်ထားသော point ကို လက်ဖြင့် ရွေ့ခြင်း သို့မဟုတ် object ကို ဖျက်ခြင်းသည် ထို ချိတ်ဆက်မှုကို ဖြတ်ပါသည်။ ချိတ်ဆက်မှုကို DWG နှင့် DXF 2000 တွင် CadCraft ၏ ကိုယ်ပိုင် data အဖြစ် သိမ်းပါသည်; အခြားပရိုဂရမ်များက ပုံမှန် dimension အဖြစ် မြင်ပါသည်။

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`။ `Select dimensions`။ ချိတ်ထားသော object များမှ လွတ်စေပါသည်; ဘာမှ မရွှေ့ပါ။

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`။ `Select circle or arc to add center mark`၊ Enter အထိ ထပ်ခါတလဲလဲ။ Center တွင် လက်ဝါးကပ်တံ ပုံ ဖြစ်သော ပေါင်းတစ်ခုနှင့် curve ကို အနည်းငယ် ကျော်သွားသော center မျဉ်းလေးကြောင်း ဆွဲပါသည် (linetype CENTER)၊ လက်ရှိ layer ပေါ်ရှိ ရိုးရိုးမျဉ်းများအဖြစ်၊ လက်ရှိ dimension ဆက်တင်များ၏ arrow အရွယ်အစားနှင့် overall scale မှ အရွယ်အစားသတ်မှတ်ပြီး UCS ဖြင့် လှည့်ပါသည်။ စက်ဝိုင်း ရွေ့လျှင် ၎င်းတို့ မလိုက်ပါ။

### CENTERLINE

Alias: `CL`။ `Select first line`၊ `Select second line`။ မျဉ်းနှစ်ကြောင်းကြား အလယ်တွင် မျဉ်းတစ်ကြောင်း ဆွဲပါသည် (ထိုနှစ်ကြောင်း ဆုံသည့်အခါ bisector တစ်လျှောက်)၊ ၎င်းတို့ထက် အနည်းငယ် ရှည်ပြီး linetype CENTER ဖြင့်။ ရိုးရိုးမျဉ်းတစ်ကြောင်း: ၎င်းသည် မျဉ်းနှစ်ကြောင်းကို မလိုက်ပါ။

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Alias မရှိ။ တစ်ခုစီက `Enter new value for … <current>` ကို မေးပြီး **အသစ်** dimension များအတွက် ထိုအရွယ်အစားကို သတ်မှတ်ပါသည်: overall scale၊ စာသားအမြင့်၊ arrow အရွယ်အစား၊ ဒဿမနေရာများ (၈ အထိ)၊ စာသားဝန်းရံ ကွာဟချက်၊ dimension line ကျော်ထွက်သော extension၊ origin မှ offset။ [Dimension အရွယ်အစား သတ်မှတ်ခြင်း](topic:dimension-settings) ကို ကြည့်ပါ။

### DIMLUNIT

Dimension ဆက်တင်: အသစ် dimension များ၏ ပုံစံသာ (1 scientific၊ 2 decimal၊ 3 engineering၊ 4 architectural၊ 5 fractional)။

### DIMSTYLE and -DIMSTYLE

Alias: `DST`, `DDIM`, `D`။ Dimension style manager: {{ui:Set current}}၊ {{ui:New…}}၊ {{ui:Modify…}}၊ {{ui:Rename…}}၊ {{ui:Delete}}၊ {{ui:Compare…}}၊ {{ui:Apply to selected}}။ Command line ရှိ `-DIMSTYLE`: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`။ [Dimension အရွယ်အစား သတ်မှတ်ခြင်း](topic:dimension-settings#named-dimension-styles) ကို ကြည့်ပါ။

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`၊ ထို့နောက် dimension များ (သို့မဟုတ် ရွေးပြီးသားများ)။ New က စာသား (`<>` = တိုင်းတာမှု) ကို မေးပါသည်; Rotate က angle (0 က စာသားကို ပြန်ထားပါသည်); Oblique က X axis မှ extension line ၏ angle (Enter = မရှိ; linear နှင့် aligned dimension များအတွက်သာ)။ `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`။ [Dimension အရွယ်အစား သတ်မှတ်ခြင်း](topic:dimension-settings#change-dimension-text-and-extension-lines) ကို ကြည့်ပါ။

### DIMTEXTUNIT

Alias: `DTU`။ `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`၊ သို့မဟုတ် dimension ရွေးထားစဉ် `Units in the text of the selected dimensions`။ တိုင်းထားသော အလျားကို ထိုယူနစ်ဖြင့် ရေးပြီး နောက်တွင် ယူနစ် ထည့်ပါသည် (DIMLFAC နှင့် DIMPOST suffix); `D` က drawing units သို့ ပြန်သွားပါသည်။ [mm၊ cm၊ m သို့မဟုတ် km ဖြင့် dimension](topic:dimension-settings#dimensions-in-mm-cm-m-or-km) ကို ကြည့်ပါ။

## Parametric

[Drawing ကို constrain လုပ်ခြင်း](topic:constraints) နှင့် [parameter နှင့် equation များ သုံးခြင်း](topic:parameters) ကို ကြည့်ပါ။ Constraint များသည် {{ui:Model}} tab တွင် အလုပ်လုပ်ပါသည်။

### GEOMCONSTRAINT and the GC commands

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`၊ ထို့နောက် ထို command ၏ prompt များ။

- {{cmd:GCHORIZONTAL}}၊ {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`။
- {{cmd:GCPARALLEL}}၊ {{cmd:GCPERPENDICULAR}}၊ {{cmd:GCCOLLINEAR}}၊ {{cmd:GCCONCENTRIC}}၊ {{cmd:GCEQUAL}}၊ {{cmd:GCTANGENT}}: `Select first object`၊ `Select second object` (ဒုတိယ object ရွေ့ပါသည်)။
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`၊ `Select second point [Object] <Object>`။
- {{cmd:GCFIX}}: `Select point [Object] <Object>`။
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`၊ `Select second object`၊ `Select symmetry line`။

### DIMCONSTRAINT and the DC commands

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`။

- {{cmd:DCLINEAR}}၊ {{cmd:DCHORIZONTAL}}၊ {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`၊ `Specify second constraint point`၊ `Specify dimension line location`၊ `Dimension text <d1=40>` (နံပါတ်၊ expression သို့မဟုတ် `name=expression`)။
- {{cmd:DCALIGNED}}: အထက်ပါအတိုင်း၊ `[Object/Point & line/2Lines]` ဖြင့်။
- {{cmd:DCRADIUS}}၊ {{cmd:DCDIAMETER}}: `Select arc or circle`။ {{cmd:DCANGULAR}}: `Select first line or arc`၊ `Select second line`။
- {{cmd:DCCONVERT}}: `Select dimensions to convert`။

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`။ `S` က အကွာအဝေးနှင့် angle tolerance များကို မေးပါသည်။
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; ၎င်းတို့၏ constraint များ ပျောက်ပါသည်။
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`၊ ထို့နောက် `[Show/Hide]`။
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`။

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`၊ `PARAM`) က {{ui:Parameters}} panel ကို ဖွင့်ပါသည်။ `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`။

### SWBOUT

Alias `SWMACRO`။ Model ကို SolidWorks တွင် constrained sketch တစ်ခုအဖြစ် ပြန်တည်ဆောက်သော macro (.swb) ကို ဒေါင်းလုဒ်လုပ်ပါသည်။ [Sketch များကို အခြား part modeler များသို့ နှင့် မှ ရွှေ့ခြင်း](topic:solidworks-sketches) ကို ကြည့်ပါ။

## ဘလောက်များ

### ANNOSCALE

Alias: `CANNOSCALE`။ Drawing ၏ annotation scale နှင့် ၎င်းတွင် annotative object ဘယ်နှစ်ခုရှိသည်ကို ပြောပြပြီး `New annotation scale` ကို မေးပါသည်: `1:50`၊ `1:100`၊ `2:1`၊ နံပါတ်တစ်ခုတည်း (`50` သည် 1:50)၊ သို့မဟုတ် drawing ၏ ကိုယ်ပိုင် scale တစ်ခု၏ အမည်ကို ရိုက်ပါ။ Annotative စာသားနှင့် dimension တိုင်းကို scale အသစ်တွင် အရွယ်အစား တူတူ ထွက်ရန် ပြောင်းပါသည်၊ undo step တစ်ခုတည်းဖြင့်; annotative မဟုတ်သော object များကို မထိပါ၊ scale စာရင်းကို ထိန်းသော်လည်း အသစ်မပါသော object ကိုလည်း မထိပါ ({{cmd:OBJECTSCALE}})။ ကြည့်ရန် [ယူနစ်၊ စာရွက်နှင့် scale များ](topic:units-papers-scales#annotate-by-scale)။

### OBJECTSCALE

Alias: `OBJSCALE`။ `Select annotative objects`၊ ထို့နောက် `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`။ Annotative စာသား သို့မဟုတ် dimension တစ်ခုသည် annotation scale စာရင်းကို ထိန်းထားပါသည်။ `Add` နှင့် `Delete` က scale တစ်ခုကို မေးပါသည် (`1:50`၊ `2:1`၊ နံပါတ်တစ်ခု သို့မဟုတ် drawing ၏ ကိုယ်ပိုင် scale အမည်)၊ `Current scale` က drawing ၏ annotation scale ကို ထည့်ပါသည်; `List` က object တစ်ခုစီ၏ scale များကို ပြပါသည်။ Object ၏ စာရင်းထဲတွင် scale ရှိသော viewport သည် ထို scale တွင် ၎င်း၏ paper အမြင့်ကို ပုံနှိပ်သည့် အရွယ်အစားဖြင့် object ကို ပြပါသည်၊ မျက်နှာပြင်နှင့် plot များတွင်။ နောက်ဆုံး scale ကို ဖျက်၍ မရပါ။ Annotative မဟုတ်သော object များကို ထားခဲ့ပါသည်: ဦးစွာ Properties တွင် Annotative ကို ဖွင့်ပါ။ စာရင်းများကို DWG နှင့် DXF တွင် CadCraft ၏ ကိုယ်ပိုင် data အဖြစ် သိမ်းပါသည်။ ကြည့်ရန် [ယူနစ်၊ စာရွက်နှင့် scale များ](topic:units-papers-scales#annotate-by-scale)။

### ANNOALLVISIBLE

Alias: `ANNOALL`။ `Show annotative objects at all scales [ON/OFF]`။ ဖွင့်ထားပါက (drawing စတင်သည့်အခါ အတိုင်း)၊ annotative object သည် viewport သို့မဟုတ် model တွင် စာရင်းမရှိသော scale ဖြင့် ရှိနေပါက ၎င်းတွင် ရှိသော အရွယ်အစားဖြင့် ပြပါသည်။ ပိတ်ထားပါက ထိုနေရာတွင် မပြပါ၊ model တွင် ရွေး၍လည်း မရပါ။ ခလုတ်သည် undo step တစ်ခု; ဖိုင်တွင် မသိမ်းပါ။

### SCALELISTEDIT

Alias: `SCALELIST`။ `Scale list [Add/Edit/Delete/List/Reset]` ကို Enter အထိ။ Add: `Scale name`၊ `Paper units`၊ `Drawing units`။ Edit နှင့် Delete က scale ၏ အမည်ကို မေးပါသည်။ Drawing ၏ ကိုယ်ပိုင် scale များသည် viewport နှင့် plot scale စာရင်းများထဲ ပါဝင်ပြီး drawing နှင့်အတူ သိမ်းပါသည်။ ကြည့်ရန် [ယူနစ်၊ စာရွက်နှင့် scale များ](topic:units-papers-scales#scales)။

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`။ Fit: curve ဖြတ်သန်းသော point များ; `Close`၊ `Undo`၊ ထို့နောက် `Start tangent` နှင့် `End tangent` (point တစ်ခု သို့မဟုတ် {{key:Enter}})။ Method › Control vertices က degree (1 မှ 5) ကို မေးပြီး control polygon မှ ဆွဲပါသည်။ Object က polyline များကို ၎င်းတို့၏ vertex များမှ spline အဖြစ် ပြောင်းပါသည်။ `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`။ `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`၊ object အများအပြားအတွက် `M`; မျဉ်း၊ arc နှင့် spline များကို ဦးစွာ polyline အဖြစ် ကမ်းလှမ်းပါသည်။ ကြည့်ရန် [Spline နှင့် polyline](topic:splines)။

### BLOCK

Alias: `B`, `BMAKE`။

- `Enter block name`။ ရှိပြီးသားဆိုလျှင်: `Block "…" already exists. Redefine it? [Yes/No] <N>`။
- `Specify insertion base point`
- `Select objects`။ ၎င်းတို့ကို ဘလောက်အသစ်၏ reference တစ်ခုဖြင့် အစားထိုးပါသည်။

### WBLOCK

Alias: `W`, `-WBLOCK`။ ဘလောက်၊ object အချို့ သို့မဟုတ် drawing တစ်ခုလုံးကို DWG သို့မဟုတ် DXF ဖိုင်အသစ်အဖြစ် ရေးပါသည်။ `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ဖိုင်အသစ်၏ origin ဖြစ်လာပါသည်)၊ `Select objects`၊ ထို့နောက် `File format [DWG/DXF/R12 DXF]` နှင့် `File name for the new drawing`၊ ထို့နောက် `What to do with the objects [Retain/Convert to block/Delete]`။ Convert က ၎င်းတို့ကို ဖိုင်အမည်ဖြင့် block တစ်ခု၏ reference တစ်ခုဖြင့် အစားထိုးပါသည်; Delete က ဖယ်ရှားပါသည်။
- **Block**: `Block to write out`။ ဘလောက်၏ ကိုယ်ပိုင် object များ၊ base point ကို origin အဖြစ်၊ ဘလောက်အတွင်း ဘလောက်များပါဝင်။
- **Entire drawing**: model space ရှိ object အားလုံး။ Sheet များကို မရေးပါ; sheet ပါသော မိတ္တူအတွက် {{cmd:SAVEAS}} ကို သုံးပါ။

ဖိုင်အသစ်တွင် ၎င်း၏ object များ သုံးသော layer၊ linetype၊ စာသားနှင့် dimension style နှင့် ဘလောက်များ၊ နှင့် drawing ၏ ယူနစ်များသာ ပါဝင်ပါသည်။ DWG ၏ version သည် {{cmd:SAVEAS}} နောက်ဆုံး သုံးခဲ့သော version ဖြစ်ပါသည်။ Browser တွင် ဖိုင်ကို ဒေါင်းလုဒ်လုပ်ပါသည်; Studio တွင် save dialog ဖွင့်ပါသည်။

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; သို့မဟုတ် {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}။ Mode များကို ပြပြီး `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`၊ `Enter attribute tag name`၊ `Enter attribute prompt`၊ `Enter default attribute value` (constant ဖြစ်သောအခါ `Enter attribute value`)၊ `Specify start point of text`၊ `Specify text height`၊ `Specify rotation angle of text` ကို မေးပါသည်။ {{cmd:BLOCK}} က attribute အဓိပ္ပာယ်များကို ဘလောက်ထဲ ယူပါသည်။

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`၊ သို့မဟုတ် attribute ပါသော reference ကို double-click; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`၊ ထို့နောက် {{ui:Edit attributes}} dialog။ `ATTEDIT` (`ATE`၊ `-ATTEDIT`): တူညီသော reference၊ ထို့နောက် attribute တစ်ခုစီအတွက် `<prompt> (<TAG>) <value>`; {{key:Enter}} က တန်ဖိုးကို ထိန်းသည်။ [Attribute](topic:attributes#see-and-change-the-values) ကို ကြည့်ပါ။

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`။ တန်ဖိုးများ ထိန်းထားပါသည်; attribute အသစ်များသည် ၎င်းတို့၏ default ကို ရပါသည်၊ ဖယ်ရှားထားသောများ ပျောက်ပါသည်၊ နေရာချထားမှု ပြန်သတ်မှတ်ပါသည်။

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}။ Dialog: ဘလောက်၊ attribute (tag၊ prompt၊ default၊ mode၊ အစဉ်)၊ {{ui:Update the references (values kept)}}၊ {{ui:Apply}}။

### REFEDIT and REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}။ `REFEDIT`: `Select the block reference to edit in place` (သို့မဟုတ် ရွေးထားသည်များ)။ `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; bar ရှိ {{ui:Save the block}} နှင့် {{ui:Discard}} က တူညီစွာ လုပ်ပါသည်။ တည်းဖြတ်မှု အားလုံးသည် undo step တစ်ခု။ [Attribute](topic:attributes#edit-a-title-block-where-it-is-refedit) ကို ကြည့်ပါ။

### BEDIT and BCLOSE

`BE`; သို့မဟုတ် {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}။ `Enter block name to edit <the selected reference's block>` က block editor ကို ဖွင့်ပါသည်။ `BCLOSE` က `Close the block editor on "…" [Save/Discard] <Save>` ကို မေးပါသည်; banner ရှိ {{ui:Save block}} နှင့် {{ui:Discard changes}} က တူညီစွာ လုပ်ပါသည်။ Editor တွင် လုပ်သမျှ အားလုံးသည် undo step တစ်ခု။

### VIEWBASE

Alias: `FLATSHOT`။ 3D tab ရှိ solid များ၏ ပြားချပ်ချပ် 2D မြင်ကွင်း: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`၊ `Hidden lines [Show/Hide]`၊ scale (`1:20`၊ `2:1`; {{key:Enter}} က စာရွက်နှင့် ကိုက်ညီသော တစ်ခုကို ယူပါသည်)၊ ထို့နောက် မြင်ကွင်း၏ center။ ဘလောက် reference တစ်ခု၊ မြင်ရသော အစွန်းများ VIEW-VISIBLE ပေါ်တွင်၊ ဖုံးကွယ်ထားသော အစွန်းများ VIEW-HIDDEN ပေါ်တွင် မျဉ်းကြောင်းဖြင့်။ ကြည့်ရန် [စာရွက်ပေါ်ရှိ ပြားချပ်ချပ် မြင်ကွင်းများ](topic:3d-solids#flat-views-on-a-sheet)။

### PUBLISH

Alias: `-PUBLISH`; သို့မဟုတ် {{ui:Plot to PDF}} dialog ရှိ {{ui:All sheets in one PDF}}။ `Sheets to plot [All/Some]`: {{key:Enter}} က sheet အားလုံးကို plot လုပ်ပါသည်၊ `S` က comma ဖြင့် ခြားထားသော အမည်များကို မေးပါသည်။ PDF တစ်ခု၊ sheet တစ်ခုစီအတွက် စာမျက်နှာနှင့် bookmark တစ်ခု။ ကြည့်ရန် [Sheet အားလုံး PDF တစ်ခုတည်းတွင်](topic:plot-pdf#every-sheet-in-one-pdf)။

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`။ ဘယ်ဘက် panel ရှိ {{ui:Sheet set}} အပိုင်းသို့ ပို့ပါသည်: drawing အများအပြားမှ sheet များ၊ နံပါတ်ပေးပြီး ခေါင်းစဉ်ရှိ၊ ၎င်းတို့၏ title block များကို set မှ ဖြည့်ပြီး PDF တစ်ခုအဖြစ် publish လုပ်သည်။ ကြည့်ရန် [Sheet set များ](topic:sheet-sets)။

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): DWG သို့မဟုတ် DXF တစ်ခုကို ရွေးပါ၊ ထို့နောက် ၎င်း၏ insertion point။ {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; link တစ်ခုထက်ပိုပါက ၎င်း၏ reference တစ်ခုကို ရွေးပါ သို့မဟုတ် `N` ရိုက်ပြီး အမည်ကို ရိုက်ပါ။ ကြည့်ရန် [Link ချိတ်ထားသော drawing များ](topic:files#linked-drawings-external-references)။

### COUNT

Alias: `BCOUNT`; သို့မဟုတ် {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}။ `Select a block reference to count, or [All/Export] (Enter: All)`: click တစ်ချက်က ဤ space ရှိ ထို block ၏ reference အားလုံးကို ရွေးပြီး ရေတွက်ပါသည်; {{key:Enter}} သို့မဟုတ် `A` က အားလုံးကို စာရင်းပြုလုပ်ပါသည်; `E` ပြီး `C` (ရေတွက်) သို့မဟုတ် `A` (attribute) က CSV ကို ဒေါင်းလုဒ်လုပ်ပါသည်။ ကြည့်ရန် [ဘလောက်များ ရေတွက်ပြီး schedule ထုတ်ခြင်း](topic:blocks#count-blocks-and-export-a-schedule)။

### INSERT

Alias: `I`, `DDINSERT`။

- `Enter block name or [File/Library] <last block>` (အက္ခရာအကြီးအသေး ခြားနားမှု မရှိ)။ `F` က DWG သို့မဟုတ် DXF ကို မေးပြီး ထို့နောက် drawing တစ်ခုလုံး သို့မဟုတ် ဘလောက်တစ်ခု; ရှိပြီးသား အမည်ဆိုလျှင် {{ui:Keep existing}} သို့မဟုတ် {{ui:Rename}} ကို မေးပါသည်။ `L` က library panel ကို ဖွင့်ပါသည်။
- `Specify insertion point [Scale/Rotate]`။ `S` က `Specify scale factor` ကို မေးပြီး၊ `R` က `Specify rotation angle` ကို မေးပါသည်; နှစ်ခုလုံး မှတ်ထားပါသည်။
- ဘလောက်က အခြားနေရာတွင် ဘလောက်မပါဘဲ ထပ်ခါတလဲလဲ ပေါ်နေသော object များ၏ ဘေးတွင် ရှိနေပါက၊ နေရာ အရေအတွက် အကြံပြုချက်ကို စာကြောင်းတစ်ကြောင်းက ပြပြီး prompt တွင် `suGgested` ထပ်ပါသည်: `G` က ပြပါသည်; နောက်ဆုံး ၏ အနီးတွင် click လုပ်ပါက ဘလောက်ကို ထိုနေရာတွင် ထားပါသည်၊ `A` က အားလုံး၊ {{key:Enter}} က နောက်သို့ ပြန်ပါသည်။ ၎င်းတို့သည် အနီးဘေးရှိ rotation နှင့် attribute ၏ default တန်ဖိုးများကို ယူပါသည်။ Open space တွင် object 20,000 ကျော်ရှိသော drawing ကို ရှာမည်မဟုတ်ပါ။
- ထို့နောက် ဘလောက်က မေးသော attribute တစ်ခုစီအတွက် `Enter <prompt> (<TAG>) <default>`။ ကြည့်ရန် [ဘလောက် attribute](topic:attributes)။

### LIBRARY

Alias: `LIB`။ Library panel ကို ဖွင့်ပါသည်: ပစ္စည်းများ ထည့်ရန်၊ အပ်ဒိတ်များ စစ်ဆေးရန်၊ library ၏ credit များ။ မေးခွန်းမရှိ။ ကြည့်ရန် [ဖိုင် သို့မဟုတ် library မှ ထည့်ခြင်း](topic:insert-from-file-and-library)။

### STEELMEMBER

Alias: `SMEMBER`; သို့မဟုတ် library ၏ {{ui:Standard}} tab ရှိ {{ui:3D member}}။ `Section size <W12x26>` (tab က ဖော်ပြသည့်အတိုင်း)၊ ထို့နောက် `Start point [Column]` နှင့် `End point`: 3D tab ပေါ်တွင် point နှစ်ခုကြား၊ မြေပြင်ပေါ် ထိုင်နေသော solid member တစ်ခု။ `C` က ကော်လံ၏ base point နှင့် အမြင့်ကို မေးပါသည်။ Undo step တစ်ခု။ ကြည့်ရန် [သံမဏိ section နှင့် စံ အစိတ်အပိုင်းများ ထားခြင်း](topic:steel-and-standard-parts)။

### PARTSLIST

Alias: `PLIST`။ `Top left corner of the parts list`၊ ထို့နောက် `Text height <2.5>`: library မှ ထားထားသော စံ အစိတ်အပိုင်းနှင့် သံမဏိ section တိုင်းအတွက် ဇယား ဆွဲပါသည် (item နံပါတ်၊ ပမာဏ၊ အစိတ်အပိုင်း၊ စံ၊ အရွယ်အစား၊ အလျား၊ ပစ္စည်း၊ အလေးချိန်)။ Undo step တစ်ခု။ ကြည့်ရန် [သံမဏိ section နှင့် စံ အစိတ်အပိုင်းများ ထားခြင်း](topic:steel-and-standard-parts#make-a-parts-list)။

### PURGE

Alias: `PU`။ မည်သူမှ မသုံးသော ဘလောက် အဓိပ္ပာယ်များကို ဖယ်ရှားပါသည်။ မေးခွန်းမရှိ။

### DELBLOCKS

သို့မဟုတ် {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}။ `Select block to delete [Name/eXit]`: ဘလောက် reference တစ်ခု click လုပ်ပါ၊ သို့မဟုတ် filter ဖြင့် ဘလောက်စာရင်းအတွက် `N` (တစ်ခုထက်ပို ရွေးနိုင်သည်)၊ သို့မဟုတ် `X` / {{key:Enter}} ဖြင့် ပြီးဆုံးပါ။ Reference အားလုံး ပျောက်ပါသည် — model၊ sheet တိုင်းနှင့် အခြားဘလောက်များအတွင်း — ထို့နောက် အဓိပ္ပာယ်ကိုပါ၊ နှင့် command line က ဘာဖျက်ပြီး ဘာမရနိုင်သလဲ ပြောပါသည်။ နာမည်မပေးထားသော ဘလောက်များနှင့် link ချိတ်ထားသော drawing များကို မပေးပါ။ Prompt က နောက်ဘလောက်အတွက် ပြန်လာပါသည်; command တစ်ခုလုံးသည် undo step တစ်ခု။

### PASTEBLOCK

{{cmd:PASTEBLOCK}} သည် သင်ကူးထားသော အရာ ({{cmd:COPYCLIP}}၊ {{cmd:COPYBASE}}) ကို ဘလောက်တစ်ခုအဖြစ် ကူးထည့်ပါသည်: insertion point ကို ရွေးပါ၊ ဘလောက်အသစ်တစ်ခု၏ reference တစ်ခု ထိုနေရာတွင် ထားပြီး ရွေးထားပါသည်။ ဘလောက်သည် ကိုယ်ပိုင် အမည်ရပါသည် (`A$C` နှင့် နံပါတ်); {{cmd:RENAME}} ဖြင့် သင်၏အမည်ပေးနိုင်ပါသည်။ Undo step တစ်ခုက reference နှင့် ဘလောက်ကို ဖယ်ရှားပါသည်။

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} သည် အစားထိုးမည့် ဘလောက်နှင့် ၎င်း၏နေရာတွင် ထည့်မည့် ဘလောက်ကို မေးပါသည် (`?` က ဘလောက်များကို စာရင်းပြသည်)၊ ထို့နောက် model၊ sheet တိုင်းနှင့် အခြားဘလောက်များအတွင်းရှိ reference အားလုံးကို ပြောင်းပါသည်။ Reference တစ်ခုစီသည် ၎င်း၏ နေရာ၊ scale၊ rotation၊ layer နှင့် ဘလောက်နှစ်ခုလုံးတွင် ရှိသော attribute တန်ဖိုးများကို ထိန်းထားပါသည်; ဘလောက်အသစ်တွင်သာ ရှိသော attribute များသည် ၎င်းတို့၏ default မှ စတင်ပြီး၊ ဆုံးရှုံးသွားသော တန်ဖိုးများကို ပြောပြပါသည်။ ဟောင်းဘလောက်ကို မည်သူမျှ မသုံးတော့သည့်အခါ ဖယ်ရှားရန် ကမ်းလှမ်းပါသည်။ Link ချိတ်ထားသော drawing များနှင့် ဘလောက်ကို ကိုယ်တိုင် ထဲထည့်ရမည့် အစားထိုးမှုကို ငြင်းပါသည်။ Undo step တစ်ခု။

### MINSERT

{{cmd:MINSERT}} သည် ဘလောက်ကို အတန်းနှင့် ကော်လံများဖြင့် ထားပါသည်: ဘလောက်အမည်၊ insertion point၊ scale၊ rotation၊ row နှင့် column အရေအတွက်၊ နှင့် ၎င်းတို့ကြား အကွာအဝေး။ အစုအဝေးတစ်ခုလုံး rotation ဖြင့် လှည့်ပါသည်။ တစ်ခုစီသည် ကိုယ်ပိုင် reference ဖြစ်ပြီး (အများဆုံး 10,000) နောက်ပိုင်း မည်သည့်တစ်ခုကိုမဆို ရွှေ့ သို့မဟုတ် ဖျက်နိုင်ပါသည်။

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; သို့မဟုတ် {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}။ {{ui:Blocks}} panel ကို filter ထဲ cursor ပါဖြင့် ပြပါသည်။ ဘလောက်တစ်ခုစီတွင် ပုံငယ်ရှိပြီး မကြာသေးမီ ထားထားသော အရာများ ရှေ့ဆုံးတွင်။ Filter ဘေးရှိ ခလုတ်နှစ်ခုက စာရင်းနှင့် ပုံ grid ကြား ပြောင်းပါသည်။ ပုံကို click လုပ်ပါ (သို့မဟုတ် {{ui:Insert}}) ဖြင့် {{cmd:INSERT}} ဖြင့် ဘလောက်ကို ထားပါ၊ သို့မဟုတ် drawing ပေါ်သို့ ဆွဲချပြီး ချလိုက်သည့်နေရာတွင် ထားပါ။

{{ui:Libraries}}၊ စာရင်းအောက်တွင်: {{ui:Add a drawing}} က သင့်ကိုယ်ပိုင် DWG သို့မဟုတ် DXF ဖိုင်ကို ယူပြီး ၎င်း၏ ဘလောက်များကို ပုံများဖြင့် ဖော်ပြပါသည်၊ drawing တစ်ခုလုံးကို ဘလောက်တစ်ခုအဖြစ် ဖော်ပြပါသည်။ တစ်ခုကို ထားသည့်အခါ ၎င်း၏ အဓိပ္ပာယ် (နှင့် ၎င်း၏ အတွင်းဘလောက်များနှင့် layer များ) ကို ဤ drawing ထဲ ကူးပါသည်၊ {{cmd:INSERT}} ၏ `File` option ကဲ့သို့; ဤနေရာတွင် ရှိပြီးသား တူညီသော အဓိပ္ပာယ်ရှိသော ဘလောက်ကို မေးမြန်းခြင်းမပြုဘဲ သုံးပါသည်၊ အမည်တူ ကွဲပြားသော ဘလောက်ဆိုလျှင် {{ui:Keep existing}} သို့မဟုတ် {{ui:Rename}} ကို မေးပါသည်။ Browser တွင် ဖိုင်သည် စာမျက်နှာ ပိတ်သည်အထိ ရှိနေပါသည်။ CadCraft Studio တွင် {{ui:Add a folder}} က ဖိုင်တွဲ၏ drawing များကို စာရင်းပြပြီး နှိပ်လိုက်သည့်အခါ ဖွင့်ပါသည်၊ ဖိုင်များနှင့် ဖိုင်တွဲများကို မှတ်ထားပါသည်။ အသေးစား x က library ကို စာရင်းမှ ဖယ်ရှားပါသည်; ဖိုင်ကို မထိပါ။ မျှဝေထားသော {{ui:Library}} သည် မတူညီသော အရာဖြစ်ပါသည်: [ဖိုင် သို့မဟုတ် library မှ ထည့်ခြင်း](topic:insert-from-file-and-library) ကို ကြည့်ပါ။

### BCONVERT

သို့မဟုတ် {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}။ ထပ်ခါတလဲလဲ ဖြစ်သော ဂျီသြမေတြီကို ရှာပြီး မိတ္တူတိုင်းကို ဘလောက်တစ်ခု၏ reference အဖြစ် ပြောင်းပါသည်။

- `Select the objects that repeat, or [Block]`: မိတ္တူတစ်ခု၏ object များ။ `B` က ရှိပြီးသား ဘလောက်တစ်ခုကို အစား အမည်ပေးပြီး ၎င်း၏ object များ၏ ပြန့်ကျဲနေသော မိတ္တူများကို ရှာပါသည်။
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`၊ `S` နှင့် `P` က မိတ္တူဟု ရေတွက်ရန် အရာကို ပြောင်းပါသည်; {{key:Enter}} က ရှာပါသည်။ ဆက်တင်များကို မှတ်ထားပါသည်။
- `Name for the new block <Block1>`၊ ထို့နောက် `Specify the block's base point` ({{key:Enter}} က ရွေးမှု၏ ဘယ်ဘက်အောက်ထောင့်ကို ယူပါသည်)။
- အခြား object အစုအဝေးမည်မျှ တူညီသော ဂျီသြမေတြီဖြစ်သည်ကို ပြောပြပြီး အစားထိုးမည့် အရာအားလုံးကို မီးမောင်းထိုးပြပါသည်၊ ထို့နောက် `Yes/No` ကို မေးပါသည်။

မိတ္တူဆိုသည်မှာ အတူတူ object များကို ရွှေ့ပြီး ထောင့်အမျိုးမျိုးဖြင့် လှည့်ထားခြင်း (ဖွင့်ထားပါက မှန်ပြောင်း သို့မဟုတ် တစ် factor ဖြင့် scale ပြုလုပ်ထားခြင်းလည်း ဖြစ်နိုင်သည်); object တိုင်းတွင် ၎င်း၏ အတွဲ ရှိရမည်၊ ရွေးမှု အရွယ်အစား၏ သန်းတစ်ပုံအတွင်း။ Reference တစ်ခုစီသည် ကိုယ်ပိုင် rotation နှင့် scale ရရှိပြီး (မှန်ပြောင်းထားသောတစ်ခုသည် Y scale အနုတ်)၊ object များ မျှဝေထားသော layer ကို ရရှိပါသည်။ Locked layer ပေါ်ရှိ object များကို မထိဘဲ ရေတွက်ပါသည်။ ဖွင့်ထားသော space (model သို့မဟုတ် ဖွင့်ထားသော sheet) ကို ရှာပါသည်။ အလွန်ကြီးမားသော ရှာဖွေမှုသည် အလုပ်ကန့်သတ်ချက်တွင် ရပ်ပြီး ထိုသို့ပြောပါသည်။ Undo step တစ်ခု။

### BSEARCH

သို့မဟုတ် {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}။ `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: ဘလောက်အမည်၏ အစိတ်အပိုင်း သို့မဟုတ် `*` နှင့် `?` ပါသော pattern။ ဘလောက်တစ်ခုစီကို ဤနေရာနှင့် drawing တစ်ခုလုံးရှိ reference များနှင့်အတူ စာရင်းပြသည်။
- `A`: attribute တန်ဖိုး သို့မဟုတ် `TAG=value`။ Reference များတွင် ၎င်းကို ရှိသော ဘလောက်များကို စာရင်းပြပြီး တွေ့သော တန်ဖိုးများကို ပြသည်။ Constant attribute များကိုလည်း ရေတွက်သည်။
- `G`: object များကို ရွေးပါ သို့မဟုတ် ဘလောက် reference တစ်ခု၊ ပုံသဏ္ဌာန် အနည်းဆုံး 85% တူသော ဘလောက်များကို ရှေ့ဆုံး အတွက် စာရင်းပြသည်။ အရွယ်အစား၊ rotation နှင့် မှန်ပြောင်းခြင်းကို မရေတွက်ပါ။ ပုံသဏ္ဌာန်ပေါ်ရှိ point များကြား အကွာအဝေးကို နှိုင်းယှဉ်ပြီး ဆင်တူသည်များကို ရှာပါသည်; အတိအကျ မိတ္တူများအတွက် {{cmd:BCONVERT}} ကို သုံးပါ။

ဖွင့်ထားသော space တွင် တွေ့သော reference များကို နောက် command အတွက် ရွေးပြီး အဆင်သင့် ထားပါသည်။

### BREPLACE

သို့မဟုတ် {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}။ `Replace [Selected/All]`: `S` က သင်ရွေးသော block reference များကို သင်အမည်ပေးသော ဘလောက်ဖြင့် အစားထိုးပါသည်; `A` က ဘလောက်နှင့် ၎င်း၏ အစားထိုးမည့်ဘလောက်ကို မေးပြီး {{cmd:BLOCKREPLACE}} ကဲ့သို့ reference အားလုံးကို ပြောင်းပါသည် (ကုဒ်တူ)။ Reference တစ်ခုသည် ၎င်း၏ နေရာ၊ scale၊ rotation၊ layer နှင့် ဘလောက်နှစ်ခုလုံးတွင် ရှိသော attribute တန်ဖိုးများကို ထိန်းထားပါသည်; ဘလောက်အသစ်တွင် နေရာမရှိသော တန်ဖိုးများကို ဖယ်ရှားပြီး အမည်ပေးပါသည်။ `?` က ဘလောက်များကို စာရင်းပြပါသည်။ Undo step တစ်ခု။

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; သို့မဟုတ် {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}။ ဘလောက်များ၊ ၎င်းတို့၏ attribute နှင့် object properties များကို table သို့မဟုတ် CSV ဖိုင်အဖြစ် စာရင်းပြသည်။

- ရွေးမှုပေါ်တွင် လုပ်ဆောင်သည် သို့မဟုတ် `Select objects (Enter: everything in this space)` ကို မေးသည်။
- ရွေးမှုတွင် နှစ်ခုလုံးရှိပါက `List: [Blocks/Objects/All]`။ နာမည်မပေးထားသော ဘလောက်၊ table နှင့် bill of materials များကို ဘယ်တော့မှ စာရင်းမပြပါ။
- ရွေးချယ်ရန် column များ (အမည်၊ အမျိုးအစား၊ layer၊ X၊ Y၊ rotation၊ scale၊ အလျား၊ ဧရိယာ၊ အရောင်၊ linetype၊ space နှင့် attribute tag တစ်ခုစီ) ကို ပြပြီး၊ ထို့နောက် `Columns, by name or number with commas between`။ {{key:Enter}} က ကြယ်ပွင့်ပါသော တစ်ခုများကို ယူပါသည်: ဘလောက်အတွက် အမည်နှင့် attribute တိုင်း; object အတွက် အမျိုးအစား၊ layer နှင့် အလျား။
- `Put identical rows together with a count? [Yes/No] <Yes>`၊ ထို့နောက် `Put the list in a: [Table/Csv] <Table>`။ Table သည် ပုံမှန် table ဖြစ်ပြီး ({{cmd:TABLEDIT}} ဖြင့် တည်းဖြတ်နိုင်သည်) တိုက်ရိုက် မချိတ်ဆက်ပါ; drawing ပြောင်းလျှင် command ကို ပြန်လုပ်ပါ။
- စာရင်းတွင် မပါသော column ကို ငြင်းပါသည်။ Table တွင် data အတန်း 1,999 ထည့်နိုင်ပြီး CSV ဖိုင်က အားလုံးကို ယူပါသည်။

### COUNTTABLE

ရွေးမှု (သို့မဟုတ် ဖွင့်ထားသော space) ၏ block reference များကို ရေတွက်ပြီး ရေတွက်မှုများကို table (`Block`၊ `Count`) သို့မဟုတ် CSV ဖိုင်တွင် ထည့်ပါသည်။ Drawing နှင့်အတူ ကိုယ်ပိုင် လိုက်ပြောင်းမည့် ရေတွက်မှုအတွက် {{cmd:BOMTABLE}} ကို ကြည့်ပါ။

## စာရွက်များနှင့် plot ထုတ်ခြင်း

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; သို့မဟုတ် drawing အောက်ရှိ {{ui:+}} ခလုတ်။ ဘောင်၊ title block နှင့် viewport တစ်ခုပါသော sheet အသစ်၊ ISO A3 (သို့မဟုတ် လက်မ သို့မဟုတ် ပေ ယူနစ်ရှိ drawing အတွက် Tabloid)။ မေးခွန်းမရှိ။

### MVIEW

Alias: `MV`။ Sheet ပေါ်တွင်သာ ({{cmd:VPORTS}} ကို sheet တွင် သုံးလျှင် တူညီစွာ လုပ်ပါသည်)။

- `Specify corner of viewport [Polygonal/Object]`၊ `Specify opposite corner`။ Viewport က model တစ်ခုလုံးကို စံ scale တစ်ခုဖြင့် ပြပါသည်။
- `P` (Polygonal): outline ၏ corner များကို click လုပ်ပါ (`Undo`၊ `Close`)၊ ပြီးလျှင် {{key:Enter}}။ Corner သုံးခုအောက်ကို ငြင်းပါသည်။
- `O` (Object): `Select a closed object for the viewport's outline`: sheet ပေါ်ရှိ ပိတ်ထားသော polyline၊ စက်ဝိုင်း သို့မဟုတ် ellipse။ Viewport သည် ၎င်း၏ ပုံသဏ္ဌာန်ကို ယူပါသည် (ကွေးများကို တိုတောင်းသော မျဉ်းဖြောင့်များဖြင့်); object သည် မူလအတိုင်း ကျန်ပါသည်။ ပိတ်မထားသော object ကို ငြင်းပါသည်။

### VPCLIP

Sheet ပေါ်တွင် ရှိပြီးသား viewport ကို ဖြတ်ပါသည်။ `Select viewport to clip` (သို့မဟုတ် ရွေးထားပါ)၊ ထို့နောက် `Select the object to clip to [Polygonal/Delete]`:

- ပိတ်ထားသော polyline၊ စက်ဝိုင်း သို့မဟုတ် ellipse ကို click လုပ်ပါ၊ သို့မဟုတ် {{key:Enter}} (သို့မဟုတ် `P`) ဖြင့် polygon ၏ corner များကို click လုပ်ပါ။
- `D` (Delete၊ viewport ကို ဖြတ်ထားသည့်အခါ ပေးသည်) က ၎င်းကို ထပ်မံ rectangle ဖြစ်စေပါသည်: ယခင် outline ၏ ဘောင်။
- Viewport က ပြသသည့်အရာသည် စာရွက်ပေါ်တွင် မရွှေ့ပါ၊ ၎င်း၏ scale လည်း ထိန်းထားပါသည်။ Model ကို outline အတွင်းသာ ဆွဲပြီး plot လုပ်ပါသည်၊ နယ်နိမိတ်ကလည်း လိုက်ပါသည်။ Undo step တစ်ခု။
- ဖြတ်ထားသော viewport တွင် outline ၏ corner တိုင်းတွင် grip ရှိပြီး၊ center နှင့် ၎င်း၏ ဘောင် corner လေးခုအပြင် (ဘောင် corner ကို ဆွဲခြင်းသည် outline ကို ၎င်းနှင့်အတူ ဆန့်ပါသည်)။ Properties တွင် Outline: Rectangle၊ သို့မဟုတ် Clipped နှင့် corner အရေအတွက် ပြသပါသည်။
- DWG နှင့် DXF 2000 ဖိုင်များက outline ကို CadCraft အတွက် ထိန်းထားပါသည်။ အခြားပရိုဂရမ်များက viewport ကို ၎င်းပတ်လည်ရှိ rectangle အဖြစ် ဖွင့်ပါသည်; DXF R12 က rectangle ကိုသာ ထိန်းပါသည်။
- Model tab တွင် viewport များသည် sheet ပေါ်တွင်ရှိကြောင်း ပြောပါသည်။

### VPORTS

Alias: `VIEWPORTS`။ {{cmd:SPLIT}} သည် sheet မှလည်း တူညီသည်၊ နှင့် {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}၊ {{ui:Split stacked}}၊ {{ui:Four panes}}၊ {{ui:One pane}} တို့က ၎င်းကို လုပ်ပါသည်။ Model ပေါ်တွင်: `Enter number of panes [SIngle/2/3/4] <3>`; `2` က `[Horizontal/Vertical] <Vertical>` (Vertical = ဘေးချင်းကပ်); `3` က `[Left/Right] <Right>` (ကြီးသော pane ဘယ်မှာ)။ Pane တစ်ခုစီက ကိုယ်ပိုင် မြင်ကွင်းနှင့် space ကို ထိန်းပါသည်; click တစ်ချက်က pane ကို active ဖြစ်စေပါသည်။ Sheet ပေါ်တွင် {{cmd:MVIEW}} ဖြစ်ပါသည်။ ကြည့်ရန် [မျက်နှာပြင် ခွဲခြင်း](topic:split-screen)။

### VPVIEW

Alias မရှိ။ Sheet ပေါ်တွင်သာ။

- `Select viewport` (ရွေးထားပါက ကျော်ပါသည်)၊ ထို့နောက် model ပေါ်တွင်: `Specify first corner of the window to show`၊ `Specify opposite corner`။

### UCS

Alias မရှိ။ သင့်ကိုယ်ပိုင် coordinate system; တည်းဖြတ်ခြင်း မဟုတ်ပါ။ `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: point တစ်ခုက origin အသစ်ဖြစ်ပြီး၊ ထို့နောက် `Specify point on X-axis (Enter keeps the angle)`။ `Z`: `Specify rotation angle about Z axis <90>`။ `3`: origin၊ positive X axis ပေါ်ရှိ point တစ်ခု၊ positive-Y ဘက်ရှိ point တစ်ခု။ `OB`: `Select object to align UCS`။ `NA`: `[Restore/Save/Delete/?]` နှင့် အမည်။ မြင်ကွင်းက X axis အသစ်ကို ညီအောင် လှည့်ပါသည်။ ကြည့်ရန် [မြင်ကွင်းကို လှည့်ပြီး ကိုယ်ပိုင် coordinate သုံးခြင်း](topic:ucs-and-turned-view)။

### PLAN

Alias မရှိ။ `Enter an option [Current ucs/Ucs/World] <Current ucs>`: active pane ၏ မြင်ကွင်းကို UCS ၏ X axis (သို့မဟုတ် world ၏) ညီအောင် လှည့်ပါသည်။ Drawing ထဲရှိ ဘာမှ မရွှေ့ပါ။

### TURNLEFT, TURNRIGHT, TURNWORLD

Alias မရှိ; သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}၊ {{ui:Turn view 90° right}}၊ {{ui:Back to world}}။ `UCS Z -90`၊ `UCS Z 90` နှင့် `UCS W` နှင့် တူညီပြီး မြင်ကွင်းက လိုက်ပါသည်။

### VPLAYER

Alias မရှိ။ Sheet ပေါ်တွင် သို့မဟုတ် viewport အတွင်း။ `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`၊ `T`၊ `R` က layer အမည်များကို မေးပါသည် (comma၊ `*` နှင့် `?` wildcard များ)၊ ထို့နောက် `[All/Select/Current] <Current>` viewport များ; Reset က layer တစ်ခုစီကို "frozen in new viewports" default သို့ ပြန်ထားပါသည်; `V` က ထို default (`[Frozen/Thawed]`) ကို သတ်မှတ်ပါသည်၊ {{cmd:MVIEW}} က သုံးပါသည်။ `?` က လက်ရှိ viewport တွင် freeze ထားသော layer များကို စာရင်းပြပါသည်။ Layers panel ၏ viewport column က viewport တစ်ခုအတွက် တူညီစွာ လုပ်ပါသည်။ ကြည့်ရန် [Layer တစ်ခုကို viewport တစ်ခုတွင် freeze လုပ်ခြင်း](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport)။

### MSPACE

Alias: `MS`; သို့မဟုတ် viewport အတွင်း double-click။ Sheet ပေါ်တွင်သာ။ Viewport မှတစ်ဆင့် model ပေါ်တွင် အလုပ်လုပ်ပါ: ရွေးထားသော တစ်ခု၊ sheet ပေါ်ရှိ တစ်ခုတည်း၊ သို့မဟုတ် `Click inside the viewport to work in`။ အတွင်းတွင် pan နှင့် zoom သည် viewport ၏ မြင်ကွင်းကို ပြောင်းပါသည် (display-locked တစ်ခုက ထိန်းထားပြီး sheet ရွေ့ပါသည်); မြင်ကွင်းအသစ်ကို undo step တစ်ခုအဖြစ် ရေးပါသည်။ ကြည့်ရန် [Viewport မှတစ်ဆင့် model ပေါ်တွင် အလုပ်လုပ်ခြင်း](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)။

### PSPACE

Alias: `PS`; သို့မဟုတ် viewport အပြင်ဘက် double-click၊ သို့မဟုတ် drawing အောက်ရှိ tab ကို click။ Sheet သို့ ပြန်သွားပါသည်။

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; သို့မဟုတ် {{key:Mod+P}}။ {{ui:Plot to PDF}} dialog ကို ဖွင့်ပါသည်။ ကြည့်ရန် [PDF သို့ plot ထုတ်ခြင်း](topic:plot-pdf)။

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; သို့မဟုတ် {{ui:Plot to PDF}} dialog ရှိ {{ui:Edit tables…}}။ {{ui:Plot style tables}} ကို ဖွင့်ပါသည်: အရောင်တစ်ခုစီ ဘယ်လို ပုံနှိပ်သလဲ (အရောင်၊ မီးခိုး၊ မင်၊ lineweight)၊ drawing နှင့်အတူ ထိန်းထားပါသည်။ ကြည့်ရန် [Plot style table များ](topic:plot-pdf#plot-style-tables)။

### CHSPACE

{{cmd:CHSPACE}} သည် viewport မှတစ်ဆင့် sheet နှင့် model ကြား object များကို ရွှေ့ပါသည်၊ scale နှင့် လှည့်ထားပြီး အခြားဘက်မှ ကြည့်လျှင် တူညီပုံ ဖြစ်စေပါသည်။ Sheet ပေါ်တွင်၊ object များကို ရွေးပါက model သို့ သွားပါသည် (sheet တွင် တစ်ခုထက်ပိုရှိပါက viewport ကို ရွေးပါ)။ Viewport မှတစ်ဆင့် model ပေါ်တွင် အလုပ်လုပ်စဉ် ({{cmd:MSPACE}})၊ ရွေးထားသော object များသည် sheet သို့ လာပါသည်။ ၎င်းတို့ ဘယ်လောက် ကြီးလာ သို့မဟုတ် ငယ်လာသည်ကို ပြောပါသည်။ Viewport များသည် ၎င်းတို့၏ sheet ပေါ်တွင် ကျန်ပါသည်။ Undo step တစ်ခု။

### ISODRAFT

{{cmd:ISODRAFT}} သည် isometric drafting ကို `ON` သို့မဟုတ် `OFF` ဖွင့်ပါသည်၊ သို့မဟုတ် `Left`၊ `Top` သို့မဟုတ် `Right` plane သို့ တိုက်ရိုက်သွားပါသည်။ ဖွင့်ထားစဉ်: Ortho ({{key:F8}}) က မျဉ်းများကို plane ၏ axis နှစ်ခု (left: 90° နှင့် 150°; top: 30° နှင့် 150°; right: 30° နှင့် 90°) တွင် ထားပါသည်၊ polar tracking ({{key:F10}}) က axis တူတူ လိုက်ပါသည်၊ snap to grid ({{key:F9}}) က isometric grid ကို သုံးပါသည်၊ grid ({{key:F7}}) ကို 30°၊ 90° နှင့် 150° မျဉ်းများဖြင့် ဆွဲပါသည်။ {{cmd:ELLIPSE}} တွင် `Isocircle` ထပ်ရပါသည်: center နှင့် radius (သို့မဟုတ် `Diameter`) ပေးပါက လက်ရှိ plane ပေါ်တွင် စက်ဝိုင်းတစ်ခု ပေါ်ပုံ ellipse ကို ဆွဲပါသည်။ Drawing သည် ပြားချပ်ချပ်ဖြစ်နေဆဲ ဖြစ်ပါသည်: ဤသည်များသည် ပုံရိပ်ဆွဲရန် အကူအညီများသာ ဖြစ်ပြီး 3D model မဟုတ်ပါ။ ဆက်တင်သည် ဤ session အတွက်ဖြစ်ပြီး ဖိုင်တွင် မသိမ်းပါ။

### ISOPLANE

{{cmd:ISOPLANE}} သည် isometric drafting လုပ်သော plane ကို ရွေးပါသည်: `Left`၊ `Top` သို့မဟုတ် `Right`။ Enter က နောက် plane သို့ သွားပါသည်။ Isometric drafting ဖွင့်ထားစဉ်၊ {{key:F5}} က command အလယ်တွင် အတူတူ လုပ်ပါသည်; ပိတ်ထားစဉ် {{key:F5}} က browser အတွက် ထားပါသည်။

## စစ်ဆေးမှု

### CAL

တွက်ချက်မှု၏ တန်ဖိုးကို ပြပါသည်၊ အလျားကို ရိုက်ထည့်သည့် နေရာတိုင်းတွင် ဖတ်သည့်အတိုင်း။

- `Expression`: ရိုက်ထည့်ပါ၊ ဥပမာ `12'6"+3/4"` သို့မဟုတ် `(24'-0")/3`၊ ထို့နောက် {{key:Enter}} ကို နှိပ်ပါ။ CadCraft က `= 12'-6 3/4"   (150.75 drawing units)` ကို ပြပါသည်။ ကြည့်ရန် [ရိုက်ထည့်ထားသော တန်ဖိုးထဲရှိ ဂဏန်းသင်္ချာ](topic:coordinate-entry#arithmetic-in-a-typed-value)။

### DIST

Alias: `DI`; သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}။

- `Specify first point`၊ `Specify second point`။ အကွာအဝေး၊ angle၊ Delta X နှင့် Delta Y ကို ပြပါသည်။

### AREA

Alias: `AA`; သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:Area}}။ ဧရိယာနှင့် ပတ်လည်အလျားကို ပြပါသည်။

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Corner များကို click လုပ်ပါ သို့မဟုတ် ရိုက်ပါ; `Specify next point (Enter closes) [Undo]` တွင် outline ကို ပိတ်ရန် {{key:Enter}} ကို နှိပ်ပါ။ `U` က နောက်ဆုံး corner ကို ပြန်ယူပါသည်။
  - {{key:Enter}} သို့မဟုတ် `O`၊ ထို့နောက် `Select object`: စက်ဝိုင်း (ပတ်လည်ကို ပြသည်)၊ ellipse၊ polyline (ဖွင့်ထားသော polyline ကို ဧရိယာအတွက် မျဉ်းဖြောင့်ဖြင့် ပိတ်ပြီး အလျားကို ပြသည်) သို့မဟုတ် hatch (အပေါက်များကို နုတ်သည်)။
  - `A` (Add area) နှင့် `S` (Subtract area) က စုစုပေါင်းကို ဆက်ထိန်းပါသည်: prompt သည် `(ADD mode)` သို့မဟုတ် `(SUBTRACT mode)` ဖြင့် စတင်ပြီး ဧရိယာတစ်ခုစီကို ထည့်သည် သို့မဟုတ် နုတ်သည်၊ `Total area = …` ကို တစ်ခုစီနောက်တွင် ပြသည်။ ဤ mode များတွင် `O` က Enter အထိ object များ ရွေးပြီး၊ ပထမ prompt တွင် {{key:Enter}} က command ကို ပြီးဆုံးစေပါသည်။

### MEASUREGEOM

Alias: `MEA`။ `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; တိုင်းတာမှုတစ်ခုစီပြီးနောက် ထပ်မေးပြီး `eXit` က default ဖြစ်ပါသည်။

`Quick` က pointer ကို ရွှေ့နေစဉ် ပတ်လည်ကို တိုင်းပါသည်: ညာ၊ အပေါ်၊ ဘယ်နှင့် အောက်ရှိ အနီးဆုံး object အထိ အကွာအဝေး (လက်ရှိ UCS ၏ axis များအတိုင်း)၊ သွားနေစဉ် ဆွဲပြပါသည်၊ ထိုအနီးအနားတွင် နှစ်ခု ဖြောင့်ပြီး ဆုံစဉ် angle ကိုလည်း ပြသည်။ Click တစ်ချက်က အကွာအဝေး လေးခု၊ ရှင်းလင်းသော အကျယ်နှင့် အမြင့်၊ နှင့် angle များကို သမိုင်းတွင် ရေးပါသည်; Enter က options သို့ ပြန်သွားပါသည်။ မျက်နှာပြင်ပေါ်ရှိ ဘာကို ဖတ်ပါသည်။

- `D`: point နှစ်ခု၊ {{cmd:DIST}} ကဲ့သို့ပင်။
- `R`: `Select arc or circle`; radius နှင့် diameter ကို ပြပါသည်။
- `A`: arc (ပါဝင်သော angle)၊ မျဉ်းတစ်ကြောင်းနှင့် ဒုတိယမျဉ်း (မျဉ်းနှစ်ကြောင်းကြား angle၊ ၎င်းတို့၏ အဝေးဆုံးအဆုံးဘက်သို့)၊ သို့မဟုတ် {{key:Enter}} နှင့် point သုံးခု (ထောင့်ဗဟို၊ ထို့နောက် အဆုံးနှစ်ခု)။
- `AR`: {{cmd:AREA}} ကဲ့သို့၊ ဧရိယာတစ်ခု။

### ID

Alias မရှိ။ `Specify point`; X နှင့် Y ကို ပြသည်။

### LIST

Alias: `LI`, `LS`။ `Select objects`; object တစ်ခုစီ၏ အမျိုးအစား၊ layer နှင့် အဓိက တိုင်းတာမှုများကို ပြသည်။

### MASSPROP

{{cmd:MASSPROP}} သည် သင်ရွေးထားသော region များနှင့် ပိတ်ထားသော object များ၏ section property များကို ပေးပါသည်၊ အတူတကွ ယူပြီး: ဧရိယာ၊ ပတ်လည်အလျား၊ bounding box၊ centroid၊ origin မှတဆင့် X နှင့် Y axis များအကြောင်း inertia moment များ၊ inertia product၊ gyration radius များ၊ centroid အကြောင်း တူညီသော moment များနှင့် ၎င်းတို့၏ axis ဦးတည်ချက်များနှင့်အတူ principal moment များ။ Region ထဲရှိ အပေါက်များကို အပေါက်အဖြစ် ရေတွက်သည်။ ပမာဏများသည် drawing unit ဖြင့် ဖြစ်ပြီး မျဉ်းနှင့် arc ဖြင့် ဖွဲ့စည်းထားသော outline များအတွက် တိကျသည်; ellipse နှင့် spline များကို တိုတောင်းသော မျဉ်းဖြောင့်အပိုင်းများအဖြစ် တိုင်းပြီး ထိုသို့ ပြောပါသည်။ အစီရင်ခံစာပြီးနောက် စာသားဖိုင်တစ်ခုသို့ ရေးမလား မေးပါသည်။ ပိတ်မထားသော object များကို ဖယ်ထားပြီး ဘယ်နှစ်ခုဖယ်ထားသည်ကို ပြောပါသည်။

## မြင်ကွင်း၊ ဖိုင်နှင့် အခြား

### ZOOM

Alias: `Z`။

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`။ Window အတွက် corner နှစ်ခု click လုပ်ပါ။ `E`၊ `A` သို့မဟုတ် Enter: drawing တစ်ခုလုံး။
- `P` (Previous၊ သို့မဟုတ် toolbar ရှိ {{ui:Previous}}) က ယခင် မြင်ကွင်းသို့ ပြန်သွားပါသည်၊ tab တစ်ခုလျှင် မြင်ကွင်း 10 အထိ; wheel အဆင့်များ အစုအဝေး သို့မဟုတ် pan တစ်ခုက မြင်ကွင်းတစ်ခုဟု ရေတွက်ပါသည်။
- `2`၊ `2x` သို့မဟုတ် `0.5x` ကဲ့သို့ နံပါတ် (သို့မဟုတ် `S` ထို့နောက် နံပါတ်) က မျက်နှာပြင်အလယ်ဗဟိုအနီးတွင် ထို factor ဖြင့် zoom in သို့မဟုတ် out လုပ်ပါသည်။
- `C` က `Specify center point` နှင့် `Enter height or magnification (nX)` ကို မေးပါသည်။

### PDFATTACH, PDFIMPORT and the PDF commands

Alias: `PDFATT` for {{cmd:PDFATTACH}}၊ `PDFIM` for {{cmd:PDFIMPORT}}။ {{cmd:PDFATTACH}} က PDF စာမျက်နှာကို drawing အောက်တွင် ထားပါသည် (ဖိုင်၊ စာမျက်နှာ၊ insertion point၊ scale၊ rotation); {{cmd:PDFIMPORT}} က စာမျက်နှာ၏ မျဉ်း၊ curve၊ fill နှင့် စာသားများကို PDF အမည်အတိုင်း layer များပေါ်ရှိ drawing object များအဖြစ် ပြောင်းပါသည်၊ အမှန်တကယ် အရွယ်အစား၊ ရိုက်ထားသော scale၊ သို့မဟုတ် point နှစ်ခုနှင့် အမှန်တကယ် အကွာအဝေးမှ scale ပြုလုပ်ပါသည်။ {{cmd:PDFCLIP}} က underlay ကို ဖြတ်ပါသည်၊ {{cmd:PDFADJUST}} က fade၊ contrast၊ monochrome သတ်မှတ်ပါသည် သို့မဟုတ် ပိတ်ပါသည်၊ {{cmd:PDFLAYERS}} က PDF ၏ ကိုယ်ပိုင် layer များကို ပြောင်းပါသည်၊ {{cmd:PDF}} က drawing ၏ underlay များ သုံးသော ဖိုင်များကို CadCraft သို့ ပြန်ပေးပါသည်။ ကြည့်ရန် [PDF underlay](topic:pdf-underlay)။

### AUTOCOMPLETE

Alias: `AUTOC`။ Drawing autocomplete: command မလုပ်နေစဉ်၊ မီးခိုးရောင် ghost တစ်ခုက drawing ကိုယ်ပိုင် pattern များက နောက်ဘာလာမည်ကို ပြပါသည်။ {{cmd:AUTOCOMPLETE}} က `On` သို့မဟုတ် `Off` (ဆက်တင် › CadCraft လည်း ရ) ပြောင်းပါသည် သို့မဟုတ် ယခု အကြံပြုမည့်အရာကို `Show` ပြပါသည်။ **Tab** က ghost ကို undo step တစ်ခုအဖြစ် ဆွဲပါသည်၊ **Esc** က drawing ပြောင်းသည်အထိ ပယ်ဖျက်ပါသည်။ နောက်ဆုံး object များထဲတွင် အရာသုံးမျိုးကို ရှာပါသည်: အကွာအဝေးညီသော အဆင့်ဖြင့် နှစ်ကြိမ်ဆွဲပြီးသော အရာ၏ နောက်မိတ္တူ (ကော်လံငယ်၊ ကော်လံ၊ လှေကားတစ်ဆင့်၏ riser နှင့် tread)၊ polyline လှေကား၏ နောက်အဆင့်များ၊ နှင့် အခန်း သို့မဟုတ် နံရံ ကွင်း၏ လိုအပ်နေသော ဘက်။ {{cmd:LINE}} သို့မဟုတ် {{cmd:PLINE}} အလယ်တွင် ghost သည် **နောက် point** ဖြစ်ပါသည်: လှေကား၏ နောက်အဆင့် (riser၊ tread၊ riser…)၊ စတုဂံ၏ စတုတ္ထ corner၊ ပိတ်ပေးသော point၊ သို့မဟုတ် နောက်တစ်ဆင့် တူညီသော အကွာအဝေး။ Cursor ကို အနီးသို့ ယူပြီး **Tab** ကို နှိပ်ပါ၊ ထိုနေရာတွင် click လုပ်သလို; ဆက်လုပ်ပါ သို့မဟုတ် Enter ကို နှိပ်ပါ။ ဤကွန်ပျူတာတွင် စည်းမျဉ်းများဖြင့် တွက်ချက်ထားပြီး model မသုံးပါ။

### AUTOSHEET

Alias: `ASH`။ ကိုယ်တိုင် layout လုပ်သော sheet များ။ {{cmd:AUTOSHEET}} သည် drawing ၏ အပိုင်းများ (သင်၏ အမည်ပေးထားသော မြင်ကွင်းများ၊ model ၏ သီးခြားအပိုင်းများ၊ သို့မဟုတ် model တစ်ခုလုံး) ကို ယူပါသည်၊ paper အရွယ်အစား (သို့မဟုတ် သင်ပေးသောတစ်ခု) ကို ရွေးပါသည်၊ အပိုင်းတိုင်းကို စံ scale တစ်ခု ပေးပါသည် (အားလုံးအတွက် scale တစ်ခု၊ သို့မဟုတ် ယူနိုင်သော အကြီးဆုံး)၊ မြင်ကွင်းများကို sheet အသစ်များပေါ်တွင် row များဖြင့် title block နှင့် တစ်ခုစီအောက် caption (အမည်နှင့် scale) ဖြင့် ထားပါသည်။ Sheet တစ်ခုတည်းတွင် မဝင်သော အရာသည် ကိုယ်ပိုင် sheet ရရှိပါသည်။ Undo step တစ်ခု။ ဤကွန်ပျူတာတွင် စည်းမျဉ်းများဖြင့် တွက်ချက်ထားပြီး model မသုံးပါ။

### PHOTOSKETCH

Alias: `PSK`။ လက်ရေးရေးဆွဲချက် ဓာတ်ပုံမှ drawing။ ကော်ဇောပေါ်ရှိ လက်ရေးရေးဆွဲချက်၏ ဓာတ်ပုံ (JPEG၊ PNG သို့မဟုတ် TIFF) ကို ရွေးပါ။ {{cmd:PHOTOSKETCH}} က စာရွက်၏ corner လေးခုကို ရှာပါသည်၊ perspective ကို ဖြောင့်ပါသည်၊ သင်ပေးသော paper အရွယ်အစား (`Paper` သို့မဟုတ် အနီးဆုံး စံ) နှင့် ရေးဆွဲချက်၏ `Scale` (1 : n) ကို ယူပြီး၊ ဘောပင်မျဉ်းများကို မျဉ်း၊ arc နှင့် စက်ဝိုင်းများအဖြစ် ခြေရာခံပါသည်၊ ဘောပင်အရောင်တစ်ခုစီအတွက် layer (အနက်၊ အနီ၊ အပြာ၊ အစိမ်း)။ စာရွက်အနားကို ရှာမတွေ့ပါက ဓာတ်ပုံတစ်ခုလုံးကို sheet အဖြစ် ယူပြီး ထိုသို့ ပြောပါသည်။ စာလုံးများကို ချန်ထားပါသည်။ Undo step တစ်ခု။ ဤကွန်ပျူတာတွင် ရိုးရာ image processing ဖြင့် လုပ်ပြီး model မသုံးပါ၊ ဘာမှ ဘယ်သို့မှ မပို့ပါ။ Scanned drawing command များကိုလည်း ကြည့်ပါ။

### AUTODIM

Alias: `ADIM`။ စည်းမျဉ်းဖြင့် အလိုအလျောက် dimension။ {{cmd:AUTODIM}} သည် ရွေးထားသော object များ (သို့မဟုတ် drawing တစ်ခုလုံး) ကို ၎င်းတို့၏ level နှင့် plumb အစွန်းများမှ dimension လုပ်ပါသည်: ရွေးထားသော အစွန်းများ (`Sides`) တစ်လျှောက် dimension ကွင်း၊ ၎င်းအပြင်ဘက်တွင် overall dimension တစ်ခု၊ အဖွင့်တစ်ခုစီ၏ အကျယ် (ညီသော နံရံမျဉ်းများကြား ကွာဟချက်)၊ အပေါက်အရွယ်အစားတစ်ခုစီအတွက် diameter၊ နှင့် `Grid` ဖြင့် grid မျဉ်းများကြား အကွာအဝေး။ ရှိပြီးသား dimension ကို ထပ်မလုပ်ပါ။ Undo step တစ်ခု။ ဤကွန်ပျူတာတွင် စည်းမျဉ်းဖြင့် လုပ်ပြီး model မသုံးပါ။

### GRIDMOVE

Alias: `GM`။ Grid မျဉ်းကို ရွှေ့လျှင် အစုကို လိုက်ရွှေ့ပါသည်။ {{cmd:GRIDMOVE}} သည် grid မျဉ်း (အမည်တွင် grid သို့မဟုတ် axis ပါသော layer ပေါ်ရှိ မျဉ်း) နှင့် ၎င်းနှင့်ချိတ်ဆက်သော အရာများကို ရွှေ့ပါသည်: မျဉ်းတွင် အဆုံးရှိသော နံရံများသည် လိုက်ရန် ဆန့်ပါသည်၊ ၎င်းနှင့်အတူ ရှိသော နံရံများ တစ်ခုလုံး ရွှေ့ပါသည်၊ ကော်လံများ (မျဉ်းပေါ်ရှိ block reference နှင့် စက်ဝိုင်းများ)၊ ၎င်း၏ bubble နှင့် tag ရွှေ့ပါသည်၊ မျဉ်းပေါ်တွင် point များရှိ dimension များသည် အကွာအဝေးအသစ်ကို တိုင်းပါသည်။ Point နှစ်ခု (မျဉ်းကို ဖြတ်သော အပိုင်းသာ ရေတွက်သည်) သို့မဟုတ် `Distance` ပေးပါ။ Undo step တစ်ခုက အားလုံးကို ပြန်ပြင်ပါသည်။ ဤကွန်ပျူတာပေါ်တွင် စည်းမျဉ်းဖြင့် လုပ်ပါသည်။

### DETAILS

Alias: `DET`။ သင့်ကို ရှာတွေ့သော အသေးစိတ်များ။ {{cmd:DETAILS}} သည် သင့်ကုမ္ပဏီ၏ ကိုယ်ပိုင် အသေးစိတ်များကို ထိန်းထားသည်: `Add` က ဤ drawing ၏ ဘလောက်တစ်ခုကို စာရင်းထဲ ထည့်ပါသည်၊ `List` နှင့် `Remove` က စီမံပါသည်၊ `Find` က ရွေးထားသည် (သို့မဟုတ် နောက်ဆုံး ဆွဲခဲ့သည်) အတွက် ၎င်းတို့၏ layer များ၊ ဘလောက်အမည်များ၊ hatch pattern များနှင့် မှတ်ချက်များပေါ်ရှိ စကားလုံးများကို အသေးစိတ်တစ်ခုစီ၏ အမည်နှင့် မှတ်ချက်များနှင့် နှိုင်းယှဉ်ပြီး အဆင့်သတ်မှတ်ပါသည်၊ ဥပမာ window head သည် သင့် sill flashing ကို ရှာပေးသည်။ နံပါတ်တစ်ခုနှင့် point တစ်ခုကို ရွေးပြီး နေရာချပါ။ `Hint` ဖွင့်ထားပါက (ဆက်တင် › CadCraft တွင်လည်း ရ) အသေးစိတ်တစ်ခုနှင့် ကိုက်ညီသည်ကို ရွေးပါက status bar တွင် စာကြောင်းတစ်ကြောင်း ပြပါသည်။ စာရင်းကို ဤ browser တွင်၊ ဤကွန်ပျူတာပေါ်တွင် သိမ်းပြီး ရှာသည်မှာ ထိုစာရင်းဖြစ်ပါသည်။ `Share` က Documents ဖိုင်တွဲတွင်လည်း ထည့်ပါသည် (`.cadcraft/firm-details.json`၊ ဘလောက်တစ်ခုစီ၏ drawing နှင့်အတူ): `Pull` က သင့်အဖွဲ့ရှိပြီး သင်မရှိသည်ကို ထည့်ပါသည်၊ `Push` က သင်ရှိပြီး သူတို့မရှိသည်ကို ထည့်ပါသည်၊ `Both` က နှစ်ခုလုံးလုပ်ပါသည်၊ နှစ်ဘက်လုံးမှ ဘာမျှ ဖယ်ရှားခြင်း မရှိပါ။ Documents ဖိုင်တွဲကို ဦးစွာ ဖွင့်ပါ ({{cmd:DOCUMENTS}}); ထိုဖိုင်တွဲသည် Team Cloud Plan ဖိုင်တွဲဖြစ်ပါက အဖွဲ့တစ်ခုလုံး စာရင်းတစ်ခုတည်းကို မျှဝေပါသည်။ Library panel ရှိ အသေးစိတ် item တွင် **Add to my firm's details** ခလုတ် ရှိပြီး တူညီသော စာရင်းထဲ ထည့်ပါသည်။ ဤကွန်ပျူတာတွင် စည်းမျဉ်းဖြင့် စကားလုံးများဖြင့် လုပ်ပြီး model မသုံးပါ။

### SKETCHFIX

Alias: `SKF`။ ဘောပင်ရေးဆွဲချက်များ တိကျသော ဂျီသြမေတြီ ဖြစ်လာသည်။ တစ်ကြိမ်တွင် လက်ဖြင့်ဆွဲသော မျဉ်းတစ်ခုကို နှိပ်ပြီး ဆွဲပါ (ဘောပင်၊ မောက်စ် သို့မဟုတ် လက်ချောင်း)၊ ထို့နောက် Enter။ မျဉ်းတစ်ခုစီကို မျဉ်း၊ စက်ဝိုင်း၊ arc၊ စတုဂံ သို့မဟုတ် polyline အဖြစ် ဖတ်ပါသည်: နီးပါး အလျားလိုက်နှင့် ဒေါင်လိုက် မျဉ်းများကို တိတိကျကျ ညီအောင် ပြုလုပ်ပါသည်၊ ပိတ်ထားသော လုံးသော မျဉ်းသည် စက်ဝိုင်းဖြစ်လာပါသည်၊ ထောင့်မှန်လေးခုပါဝင်သော ပိတ်ထားသော မျဉ်းသည် စတုဂံ ဖြစ်လာပါသည်၊ မျဉ်းများ၏ အဆုံးများကို ဆွဲယူပြီး drawing တွင် ရှိပြီးသား အဆုံးများနှင့် ကပ်ပါသည်။ Undo step တစ်ခု။ ဤကွန်ပျူတာတွင် စည်းမျဉ်းဖြင့် လုပ်ပြီး model မသုံးပါ။

### SCANATTACH and the scanned-drawing commands

Alias: `SCA` {{cmd:SCANATTACH}}၊ `SCS` {{cmd:SCANSCALE}}၊ `SCL` {{cmd:SCANALIGN}}၊ `SCD` {{cmd:SCANDESKEW}}၊ `SCC` {{cmd:SCANCLEAN}}၊ `SCR` {{cmd:SCANCROP}}၊ `SCE` {{cmd:SCANERASE}}၊ `SCT` {{cmd:SCANTRACE}}၊ `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} တွင် alias မရှိ။ ၎င်းတို့သည် ပုံတစ်ပုံပေါ်တွင် အလုပ်လုပ်ပြီး command တစ်ခုစီသည် undo step တစ်ခု။ {{cmd:SCANATTACH}} သည် ပုံဖြစ်သော PNG၊ JPEG၊ TIFF (စာမျက်နှာတစ်ခု သို့မဟုတ် အားလုံး) သို့မဟုတ် PDF စာမျက်နှာကို ထည့်ပါသည်။ {{cmd:SCANSCALE}} သည် ရွေးထားသော point နှစ်ခုနှင့် အမှန်တကယ် အကွာအဝေးမှ sheet ကို scale လုပ်ပါသည်။ {{cmd:SCANALIGN}} သည် ၎င်းကို point နှစ်ခုသို့ ရွှေ့ပြီး လှည့်ပါသည် (`Scale the sheet to fit` Yes/No)။ {{cmd:SCANDESKEW}} သည် sheet ၏ ရှည်သော မျဉ်းများ၏ angle ကို ပြပြီး `Accept` သို့မဟုတ် `Value` ပေးသည်နှင့် sheet ကို လှည့်ပါသည်။ {{cmd:SCANCLEAN}} သည် အနက်နှင့်ဖြူ ဖြစ်အောင် ပြုလုပ်ပါသည် (`Threshold` Auto/Adaptive/Level၊ `Specks`) နှင့် `Run`။ {{cmd:SCANCROP}} သည် window တစ်ခုကို ထိန်းသည်။ {{cmd:SCANERASE}} သည် `Rectangle`၊ `Polygon` သို့မဟုတ် `Lasso` ကို ဖျက်သည်။ {{cmd:SCANTRACE}} သည် မျဉ်းနှင့် arc များကို layer အသစ်ပေါ်သို့ ခြေရာခံပြီး (`Tolerance`၊ `Window`၊ `Arcs`၊ `Leftovers`၊ `Run`) တွေ့သည်နှင့် raster အဖြစ် ထားခဲ့သည်များကို အစီရင်ခံပါသည်။ {{cmd:SCANINFO}} သည် မူရင်းဖိုင်နှင့် အဆင့်များကို ဖော်ပြပါသည်။ {{cmd:RASTERSNAP}} သည် scan လုပ်ထားသော sheet ၏ မျဉ်းများသို့ snap ကို On သို့မဟုတ် Off ပြုလုပ်ပါသည်။ ကြည့်ရန် Scanned drawing နှင့် trace အကြောင်း အကြောင်းအရာ။

### REGEN and REGENALL

Alias: `RE` for {{cmd:REGEN}}၊ `REA` for {{cmd:REGENALL}}။ Drawing မှ မျက်နှာပြင်ပေါ် ဆွဲထားသည်များကို ပြန်တည်ဆောက်ပါသည်: {{cmd:REGEN}} က သင်ကြည့်နေသော tab (sheet ပေါ်တွင်ဆိုလျှင် viewport များပြသသော model ပါ)၊ {{cmd:REGENALL}} က tab အားလုံး၊ split-screen pane အားလုံးနှင့် ဖွင့်ထားသော drawing အားလုံး။ Script သို့မဟုတ် အလွန်ကြီးသော ပြောင်းလဲမှုပြီးနောက် ပုံသည် ဟောင်းနေပါက သို့မဟုတ် AI assistant က drawing ကို တည်းဖြတ်ခဲ့ပါက အသုံးပြုပါ; drawing ကိုယ်တိုင် မထိသောကြောင့် undo လုပ်စရာ မရှိပါ။

### NAMEDVIEW

Alias: `NV`, `VIEWS`။ `Enter an option [?/Restore/Save/Window/Delete] <Restore>`၊ ထို့နောက် မြင်ကွင်း၏ အမည်။ `S` က မျက်နှာပြင်ပေါ်ရှိ မြင်ကွင်းကို သိမ်းပါသည်၊ `W` က သင်ရွေးသော window ကို၊ `R` က သိမ်းထားသော မြင်ကွင်းကို ပြပါသည်၊ `D` က တစ်ခုကို ဖျက်ပါသည်၊ `?` က ဤ tab ၏ မြင်ကွင်းများကို စာရင်းပြပါသည်။ ရှိပြီးသား အမည်ဖြင့် သိမ်းလျှင် အစားထိုးပါသည်; ပြောင်းလဲမှု တစ်ခုစီသည် undo step တစ်ခု။ မြင်ကွင်းများသည် ၎င်းတို့ သိမ်းခဲ့သော tab နှင့် ပိုင်ပါသည်။ DWG နှင့် DXF ဖိုင်များက ၎င်းတို့ကို ထိန်းထားပါသည် (VIEW table); sheet ၏ မြင်ကွင်းများသည် ပထမ sheet တွင် ပြန်ရောက်ပါသည်၊ ဖိုင်က မည်သည်ကို ပြောမထားသောကြောင့်။

### UNDO and REDO

Alias: `U` for {{cmd:UNDO}}; {{cmd:REDO}} တွင် alias မရှိ။ {{key:Mod+Z}} နှင့် {{key:Mod+Y}} ကိုလည်း သုံးနိုင်ပါသည်။

### LAYER

Alias: `LA`။ {{ui:Layers}} panel သို့ ခုန်ပါသည်။

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`၊ `ByBlock` သို့မဟုတ် အမည် (`?` က စာရင်း: Continuous၊ drawing ကိုယ်ပိုင်၊ နှင့် DASHED၊ HIDDEN၊ CENTER၊ PHANTOM၊ DOT၊ DASHDOT၊ BORDER၊ DIVIDE ၏ `2` (တစ်ဝက်) နှင့် `X2` (နှစ်ဆ) အရွယ်အစားများ)။ {{cmd:LWEIGHT}} (`LW`): object အသစ်များအတွက် lineweight mm ဖြင့်၊ သို့မဟုတ် `ByLayer`၊ `ByBlock`၊ `Default`။ {{cmd:LTSCALE}} (`LTS`): drawing ၏ linetype scale (undo လုပ်နိုင်)။ {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — status bar ရှိ {{ui:LWT}} ခလုတ်နှင့် တူညီသည်။ ကြည့်ရန် [မျဉ်းအထူနှင့် linetype များ](topic:units-papers-scales#line-weights-and-linetypes)။

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`၊ `REN`): `Enter object type to rename [LAyer/Block]`၊ `Enter old name`၊ ထို့နောက် အမည်အသစ်; object များ သို့မဟုတ် reference များ လိုက်ပါသည်။ {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` Enter အထိ၊ ထို့နောက် `Select object on target layer or [Name]` နှင့် `Y`။ {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`၊ ထို့နောက် `Y`: layer နှင့် ၎င်းပေါ်ရှိ object အားလုံး ပျောက်ပါသည် (layer 0၊ DEFPOINTS သို့မဟုတ် လက်ရှိ layer မဟုတ်)။ Command တစ်ခုစီ undo step တစ်ခု။ ကြည့်ရန် [Layer များဖြင့် drawing ကို စီစဉ်ခြင်း](topic:layers#rename-merge-and-delete-layers)။

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Object များကို ရွေးခြင်းဖြင့် layer များ; {{ui:Layers}} panel ၏ {{ui:Tools}} menu တွင်လည်း ရပါသည်။ {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated` ၊ ထို့နောက် {{key:Enter}}: အခြား layer အားလုံး ပိတ်ပါသည်။ {{cmd:LAYUNISO}} က ၎င်းတို့ကို ပြန်ဖွင့်ပါသည်။ {{cmd:LAYOFF}} နှင့် {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (သို့မဟုတ် frozen) ထပ်ခါတလဲလဲ; `U` က နောက်ဆုံးတစ်ခုကို ပြန်ယူပါသည်၊ {{key:Enter}} က ပြီးဆုံးစေပါသည်။ {{cmd:LAYMCUR}}: `Select object whose layer will become current`။ {{cmd:LAYON}} က layer အားလုံး ဖွင့်ပါသည်၊ {{cmd:LAYTHW}} က layer အားလုံး thaw လုပ်ပါသည်။ Command တစ်ခုစီ undo step တစ်ခု။ ကြည့်ရန် [Layer များဖြင့် drawing ကို စီစဉ်ခြင်း](topic:layers#work-on-layers-by-picking-objects)။

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} က drawing ဗလာတစ်ခု စတင်ပြီး {{cmd:OPEN}} က DWG သို့မဟုတ် DXF ကို ဖွင့်ပါသည်၊ တစ်ခုစီ၏ ကိုယ်ပိုင် tab အတွင်း drawing အပေါ်တွင် (မထိသေးသော drawing အသစ်ကို tab အသစ်အစား သုံးပါသည်)။ မသိမ်းသေးသော ပြောင်းလဲမှုရှိ tab ကို ပိတ်လျှင် ဦးစွာ မေးပါသည်။ ကြည့်ရန် [မျက်နှာပြင် ခွဲခြင်း](topic:split-screen)။

{{cmd:SAVE}} (alias `QSAVE`၊ နှင့် {{key:Mod+S}}) က drawing ၏ format ဖြင့် မိတ္တူကို ဒေါင်းလုဒ်လုပ်ပါသည်: DWG မှ ဖွင့်ထားလျှင် DWG၊ DXF မှ ဖွင့်ထားလျှင် DXF။ Drawing အသစ်သည် ဤ browser တွင် နောက်ဆုံး Save as တွင် ရွေးခဲ့သော format ကို သုံးပါသည်၊ မဟုတ်ပါက DWG။

{{cmd:SAVEAS}} (နှင့် {{key:Mod+Shift+S}}) က {{ui:Save a copy as}} dialog ကို ဖွင့်ပါသည်: {{ui:DWG}} (နှင့် ၎င်း၏ {{ui:Version}})၊ {{ui:DXF R12}} သို့မဟုတ် {{ui:DXF 2000}} ကို ရွေးပြီး {{ui:Save}}။ ရွေးချယ်မှုသည် ဤ drawing နှင့် ဤ browser ရှိ drawing အသစ်များအတွက် ကျန်ရစ်ပါသည်။

{{cmd:DXFOUT}} က {{cmd:SAVE}} သုံးသော format ကို မပြောင်းဘဲ DXF R12 မိတ္တူကို အမြဲ ဒေါင်းလုဒ်လုပ်ပါသည်။

ကြည့်ရန် [ဖိုင်များ: ဖွင့်နိုင်သည်များ၊ သိမ်းနိုင်သည်များ](topic:files#saving)။

### TOUR

Alias: `TUTORIAL`။ ပထမ drawing ခြေလှမ်း ခြောက်ဆင့် ခရီးကြမ်းကို ပြန်စတင်ပါသည်။ ကြည့်ရန် [စတင်ခြင်း](topic:getting-started#prefer-to-be-guided)။

### TOOLBARDOCK

Alias: `TBDOCK`။ `Toolbar position [Top/Bottom/Left/Right]`။ ကြည့်ရန် [ဆက်တင်များ](topic:settings#toolbar-position)။

### COMMANDLINE

Alias: `CMDLINE`။ `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: command line ကို ထိပ်တွင် ချိတ်ထားခြင်း သို့မဟုတ် လွတ်ထားခြင်း၊ တစ်ကြောင်းပြုလုပ်ခြင်း၊ ပြသမည့် history စာကြောင်း အရေအတွက် (0 မှ 12) ကို မေးခြင်း၊ သို့မဟုတ် history ကို ဖွင့်ခြင်း။ ကြည့်ရန် [ဆက်တင်များ](topic:settings#command-line)။

### TOPAREA

`Top area [Standard/Compact]`: drawing အပေါ်ရှိ bar များကို မူလအတိုင်း သို့မဟုတ် ကျစ်လစ်စွာ။ ကြည့်ရန် [ဆက်တင်များ](topic:settings#top-area)။

### POLARANG

`Enter polar angle step in degrees <90>`: {{ui:Polar}} tracking လိုင်းများ ညီသော အဆင့် (0 ထက်များ၊ 180 အထိ)။ ဤ browser တွင် မှတ်ထားပါသည်။

### UNITS

Alias: `UN`။ အလျားများကို မည်သို့ ရေးပြပြီး ရိုက်ထည့်သလဲ။

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural နှင့် Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`။ အခြားများ: `Enter number of decimal places (0 to 8)`။

Dimension အသစ်များသည် ၎င်းကို လိုက်ပါသည်။ Undo step တစ်ခု။ {{ui:Current settings}} ရှိ {{ui:Length format}} နှင့် {{ui:Precision}} နှင့် တူညီသည်; ကြည့်ရန် [ပေနှင့် လက်မ](topic:units-papers-scales#feet-and-inches-and-fractions)။

### GDSIN

Alias: `GDS`။ IC layout (GDSII stream ဖိုင်) ကို ကြည့်ပါ: lab spike၊ ကြည့်ခြင်းနှင့် တိုင်းခြင်းအတွက်သာ။

- ဖိုင်ရွေးချယ်ကိရိယာက `.gds` ဖိုင်ကို ယူပါသည်; top cell အများအပြားရှိပါက `Enter the top cell to draw`။
- Layer နှင့် datatype တိုင်းသည် drawing layer တစ်ခု ဖြစ်လာပါသည် (`GDS 1`၊ `GDS 2/5`)၊ reference နှင့် array များကို ပြားချပ်ချပ် နေရာချပြီး ဖိုင်၏ user unit (များသောအားဖြင့် micrometre) ဖြင့်။ Undo step တစ်ခု။ ဘာမှ simulate သို့မဟုတ် စစ်ဆေးခြင်း မရှိပါ၊ ဖိုင်ကို ပြန်မရေးပါ။

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`။ စာသားမှ ပုံကြမ်း။

- သေတ္တာတစ်ခုက စာသား (သို့မဟုတ် command line တွင် `;` ဖြင့် ခြားထားသော statement တစ်ကြောင်း) ကို ယူပါသည်: Mermaid flowchart၊ PlantUML component diagram၊ D2 သို့မဟုတ် from-to စာရင်း။
- `Specify the top left corner of the diagram`၊ ထို့နောက် `Specify the text height`။

ဘလောက်များနှင့် connector များသည် `Diagram` layer ပေါ်ရှိ ရိုးရိုး object များ ဖြစ်ပြီး ပြီးဆုံးချိန်တွင် ရွေးထားပါသည်။ Undo step တစ်ခု။ ကြည့်ရန် [စာသားမှ ပုံကြမ်း ဆွဲခြင်း](topic:text-to-diagram)။

### OLELIST

Alias: `OLES`။ DWG ထဲတွင် CadCraft က ကိုယ်တိုင် မထားနိုင်သော OLE object များ။

- တစ်ခုစီကို စာရင်းပြသည်: နံပါတ်၊ အမျိုးအစား၊ အရွယ်အစား၊ ပုံသိမ်းထားခြင်း ရှိ/မရှိ။
- `Enter an option [Place/eXit] <eXit>`: Place က နံပါတ်၊ ဘယ်ဘက်အောက်ထောင့်နှင့် အကျယ်ကို မေးပြီး ပုံပါသော ဘောင်ကို ဆွဲပါသည်။ Undo step တစ်ခု; သိမ်းထားသော object ကို မပြောင်းပါ။ ကြည့်ရန် [ပုံများ](topic:pictures#objects-from-other-programs-ole)။

### SHXFONTS

Alias: `SHX`။ သင့်ကိုယ်ပိုင် SHX font များ။

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} က ဖိုင်တွဲရှိ `.shx` အားလုံးကို ဖတ်ပါသည် (CadCraft Studio; စတင်တိုင်း ထပ်ဖတ်)၊ {{ui:Files}} က ရွေးထားသော ဖိုင်များကို ယူပါသည် (browser)၊ {{ui:Reverse}} က font တစ်ခု၏ အက္ခရာများကို နောက်ဆုံးမှ ပထမသို့ စီပါသည်။ Load လုပ်ထားသော font အမည်ကို ညွှန်ပြသော စာသား style များသည် ထို font ဖြင့် ဆွဲပါသည်။ ကြည့်ရန် [ကိုယ်ပိုင် SHX font များဖြင့် စာသား ဆွဲခြင်း](topic:shx-fonts)။

### LIMITS

Drawing သည် ဘယ်လောက်ကြီးရန် ရည်ရွယ်သလဲ။

- `Specify lower left corner or [ON/OFF] <current>`: point တစ်ခု၊ `ON` သို့မဟုတ် `OFF`။
- `Specify upper right corner <current>`။

Grid သည် limit များကို ဖြည့်ပြီး {{cmd:ZOOM}} All က ၎င်းတို့ကို ပြပါသည်၊ ON ဖြင့် ပြင်ပ point ကို ငြင်းပါသည် (`**Outside limits`)။ Undo step တစ်ခု; DWG နှင့် DXF တွင် သိမ်းပါသည်။ ကြည့်ရန် [Drawing limit သတ်မှတ်ခြင်း](topic:drawing-limits)။

### AUNITS

Alias: `ANGUNITS`။ Angle များကို မည်သို့ ပြပြီး ရိုက်ထည့်သလဲ။

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`၊ သို့မဟုတ် အခြား နှစ်ခုအတွက် `Enter precision` (0 ဒီဂရီ၊ 2 မိနစ်၊ 4 စက္ကန့်၊ စက္ကန့်၏ ဒဿမ 5 မှ 8)။

Undo step တစ်ခု; DWG နှင့် DXF တွင် သိမ်းပါသည်။ {{ui:Current settings}} ရှိ {{ui:Angle format}} နှင့် တူညီသည်။ ကြည့်ရန် [Bearing နှင့် angle များ ရိုက်ခြင်းနှင့် ပြခြင်း](topic:bearings-and-angles)။

### APPLOAD

Alias: `AP`; သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:Load application…}}။ {{ui:Load applications}} dialog: `.lsp` routine များနှင့် `.dcl` dialog ဖိုင်များ load လုပ်ခြင်း၊ unload လုပ်ခြင်း၊ history မှ ပြန် load လုပ်ခြင်း၊ နှင့် Startup Suite။ Routine ၏ `(defun c:NAME …)` command များသည် အခြား command တစ်ခုကဲ့သို့ အလုပ်လုပ်ပါသည်။ ကြည့်ရန် [အက်ပလီကေးရှင်းများ load လုပ်ခြင်း](topic:load-applications) နှင့် [LISP routine များ run လုပ်ခြင်း](topic:run-lisp)။

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) က သင့် alias ဖိုင် (`ALIAS, *COMMAND` စာကြောင်းများ) ကို ဖွင့်ပါသည်; {{ui:Save}} က အသုံးပြုပါသည်။ {{cmd:REINIT}} က ထပ်အသုံးပြုပါသည်။ ကြည့်ရန် [command alias များ တည်းဖြတ်ခြင်း](topic:command-aliases)။

### LISPEDIT

Alias: `VLIDE`; သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}။ LISP editor ကို ဖွင့်ပါသည်၊ drawing ဘေးတွင် ဆက်ဖွင့်ထားသော window ဖြစ်ပါသည်။

- စာသား: စာကြောင်းနံပါတ်များ၊ cursor ရှိ ကွင်းပိတ်ရန် အတွဲကို အမှတ်အသားပြုပါသည် (မရှိလျှင် အနီ)၊ {{key:Enter}} က စာကြောင်းအသစ်ကို ဖွင့်ထားသော ကွင်းအောက်တွင် indent လုပ်ပါသည်၊ {{key:Tab}} က space နှစ်ခု ရိုက်ပါသည်၊ {{key:Esc}} က စာသားမှ ထွက်ပါသည်။
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): form အားလုံးကို ဖတ်ပါသည်၊ {{cmd:APPLOAD}} က ဖိုင်ဖြင့် လုပ်သကဲ့သို့၊ နှင့် ၎င်း၏ `c:` command များကို ပြုလုပ်ပါသည်။ ဖိုင်သည် {{cmd:APPLOAD}} ၏ စာရင်းတွင် ပေါ်ပါသည်။
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): ရွေးထားသော form များ၊ သို့မဟုတ် cursor ရှိ form ကို တွက်ချက်ပါသည်။
- {{ui:Stop}}: လည်ပတ်နေသော routine ကို ရပ်စေပါသည်။
- {{ui:Console}}: routine က ရိုက်ထုတ်ထားသည်များ၊ နှင့် error တစ်ခုစီနှင့် ၎င်း၏ စာကြောင်း; error ကို click လုပ်ပါက ထိုနေရာသို့ သွားပါသည်။ စာသားကို top-level form တစ်ခုချင်းစီ run လုပ်သဖြင့် စာကြောင်းသည် form ၏ ဖြစ်သည်၊ သို့မဟုတ် အတွင်းတွင် error က အမည်ပေးသော function ကို ခေါ်သည့် စာကြောင်း။
- {{ui:New}}၊ {{ui:Open}}၊ {{ui:Save}} ({{key:Ctrl+S}}): `.lsp` ဖိုင်။ စာသားကို ဤ browser တွင်လည်း ထိန်းထားပါသည်၊ ထို့ကြောင့် window ပိတ်ခြင်းက မဆုံးရှုံးစေပါ။
- စာသားဘေးတွင်: routine က သတ်မှတ်သော function များ၊ ဤ LISP တွင် မရှိသေးသော ခေါ်ဆိုသော function များ၊ ၎င်းအတွင်း သတ်မှတ်မထားပြီး built-in မဟုတ်သော ခေါ်ဆိုသော function များ၊ နှင့် built ဖြစ်ပြီး မဖြစ်သော အပြည့်အစုံ စာရင်းများ။

မပိတ်ထားသော ကွင်း သို့မဟုတ် မပြီးသော string ပါသော စာသားကို run မလုပ်ပါ: စာကြောင်းကို အမည်ပေးပါသည်။ အဆင့်လိုက် debugger၊ breakpoint သို့မဟုတ် watch window မရှိပါ။ ကြည့်ရန် [LISP routine များ run လုပ်ခြင်း](topic:run-lisp)။

### HELP

Alias: `?`။ Command အားလုံး၊ ၎င်းတို့၏ alias များနှင့် တစ်ကြောင်းတည်း ဖော်ပြချက်ကို command line history တွင် ရိုက်ထုတ်ပါသည်။ ဤအကူအညီကို မဖွင့်ပါ: {{key:F1}} ကို နှိပ်ပါ သို့မဟုတ် {{ui:Help}} ကို click လုပ်ပါ။

## Select objects prompt

မည်သည့် `Select objects` prompt တွင်မဆို: object များကို click လုပ်ပါ၊ window (ဘယ်မှ ညာ) နှင့် crossing (ညာမှ ဘယ်) ကို click နှစ်ချက်ဖြင့် ဆွဲပါ၊ သို့မဟုတ် lasso ကို နှိပ်ပြီး ဆွဲပါ ({{key:Space}} ဆွဲနေစဉ်: window၊ crossing၊ fence)၊ ဖယ်ရှားရန် {{key:Shift}}+click၊ နှင့် ပြီးဆုံးရန် {{key:Enter}} ကို နှိပ်ပါ။ `ALL` (အားလုံး)၊ `L` (နောက်ဆုံး object)၊ `P` (Previous: နောက်ဆုံး command သုံးခဲ့သည်များ)၊ `F` (Fence: point အစဉ်ကို ဖြတ်သော object များ; `U` က point တစ်ခုကို ပြန်ယူသည်)၊ `W` (Window)၊ `C` (Crossing)၊ `R` (Remove mode: pick များက object များကို ဖယ်ရှားသည်; prompt က `Remove objects` ဟု ဖတ်ရသည်) နှင့် `A` (Add again) ကိုလည်း ရိုက်နိုင်ပါသည်။ `?` က ၎င်းတို့ကို စာရင်းပြသည်။ ၎င်းတို့ကို prompt တွင် မပြပါ။ {{key:Tab}} က ထပ်နေသော object များပေါ်တွင် နောက်တစ်ခုကို မီးမောင်းထိုးပြပါသည်; ရွေးရန် click လုပ်ပါ။ ကြည့်ရန် [Object များ ရွေးခြင်း](topic:select-objects)။
