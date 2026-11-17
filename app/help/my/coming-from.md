---
title: အခြား drafting ဆော့ဖ်ဝဲမှ ပြောင်းလာခြင်း
summary: ရင်းနှီးသော command များ၊ ကီးများနှင့် အလေ့အကျင့်များက CadCraft သို့ ဘယ်လို ကိုက်ညီသလဲ၊ အတွေ့အကြုံရှိ drafter များကို ခြေချော်စေသော ကွာခြားချက်များ။
keywords: switching, differences, migrate, habits, aliases, dynamic input, pickfirst, pickadd, qsave, saveas, save as, mtext, ctb, polar tracking, xref, keyboard shortcuts, familiar, copyclip, pasteclip, pasteorig, copybase, clipboard, ပြောင်းလဲခြင်း, ကွာခြားချက်, alias, ကီးဖြတ်လမ်း, clipboard
from: b58688e7
---

AutoCAD သို့မဟုတ် အလားတူ မော်ဒယ်ပေါ်တွင် တည်ဆောက်ထားသော ပရိုဂရမ်ကို သင်သုံးဖူးပါက၊ သင်သိသည့်အရာအများစု ဤနေရာတွင် အလုပ်လုပ်သည်: command line၊ `L`၊ `C`၊ `TR` နှင့် `O` ကဲ့သို့ alias များ၊ ထပ်လုပ်ရန် Enter သို့မဟုတ် Space၊ window နှင့် crossing ရွေးခြင်း၊ F3 တွင် object snap၊ F8 တွင် Ortho၊ layout နှင့် viewport ပါသော model space။ ဤစာမျက်နှာသည် တိုက်ရိုက်ကိုက်ညီသည်များကို ဖော်ပြပြီး၊ လူများကို ခြေချော်စေသော ကွာခြားချက်များကို ဖော်ပြသည်။ ပထမတစ်ဝက်ကို ကျော်ဖတ်ပါက ဒုတိယတစ်ဝက်ကိုလည်း ဖတ်ပါ။

## တိုက်ရိုက်ကိုက်ညီသည်များ

| အလေ့အကျင့် | CadCraft တွင် |
|---|---|
| `L`၊ `PL`၊ `C`၊ `A`၊ `REC`၊ `POL`၊ `EL`၊ `PO`၊ `T`၊ `DT` | command အတိုင်း၊ alias အတိုင်း |
| `M`၊ `CO`၊ `RO`၊ `SC`၊ `MI`၊ `O`၊ `TR`၊ `EX`၊ `F`၊ `X`၊ `E` | အတိုင်း |
| `DLI`၊ `DAL`၊ `DAN`၊ `DRA`၊ `DDI`၊ `DCO`၊ `DBA` | dimension command အတိုင်း |
| command line တွင် ရိုက်သော `DIMSCALE`၊ `DIMTXT`၊ `DIMASZ`၊ `DIMDEC`၊ `DIMGAP`၊ `DIMEXE`၊ `DIMEXO` | အတိုင်း၊ dimension အသစ်များအတွက် |
| block ဖန်တီးရန် `B`၊ ထည့်ရန် `I`၊ purge ပြုရန် `PU` | အတိုင်း (purge က အသုံးမပြုသော block များကိုသာ ဖယ်ရှားသည်) |
| `LAYOUT`၊ `MV`၊ `PLOT`၊ `DI`၊ `ID`၊ `LI`၊ `Z` ပြီး `E` သို့မဟုတ် `W` | အတိုင်း |
| script သို့မဟုတ် အလေ့အကျင့်မှ `_LINE` သို့မဟုတ် `-LAYER` ရိုက်ခြင်း | ရှေ့ရှိ `_`၊ `-`၊ `.` သို့မဟုတ် `'` ကို လျစ်လျူရှုသည် |
| အလွတ် prompt တွင် Enter သို့မဟုတ် Space | နောက်ဆုံး command ကို ထပ်လုပ်သည်၊ အတိုင်း |
| Esc က ဖျက်သိမ်းသည်; Esc နောက်တစ်ကြိမ် ရွေးမှုကို ရှင်းသည် | အတိုင်း |
| `@dx,dy`၊ `@d<a`၊ ရိုက်သော ထောင့်များ အရှေ့မှ နာရီပြန်ရောက်အတိုင်း | အတိုင်း |
| Window ဘယ်မှညာ၊ crossing ညာမှဘယ်၊ click-click၊ lasso အတွက် နှိပ်ဆွဲခြင်း၊ Space က window / crossing / fence ကို လှည့်သည် (LASSOMODE) | အတိုင်း |
| အရင်ရွေး၊ နောက်မှ command (noun-verb) | အတိုင်း; ပြီးသော command က ရွေးမှုကို ရှင်းသည် |
| `ALL` နှင့် Select objects တွင် `L` | အတိုင်း |
| Shift+click ဖြင့် ရွေးမှုမှ ဖယ်ရှားခြင်း | အတိုင်း။ ဆက်တင်များက click တိုင်းကို ရွေးမှု အစားထိုးစေနိုင်သည်၊ PICKADD 0 ကဲ့သို့: [CadCraft ဆက်တင်များ](topic:settings) ကို ကြည့်ပါ |
| Ctrl+C၊ Ctrl+X၊ Ctrl+V၊ Ctrl+Shift+V (COPYCLIP၊ CUTCLIP၊ PASTECLIP၊ PASTEORIG)၊ COPYBASE | command နှင့် ကီးအတိုင်း; paste သည် ကော်ပီကို ဘယ်အောက်ထောင့်ဖြင့် နေရာချသည်၊ PASTECLIP ကဲ့သို့ |
| F3 object snap၊ F7 grid၊ F8 Ortho | ကီးအတိုင်း |
| Wheel ကို နှစ်ချက်နှိပ်ခြင်းဖြင့် extents ကို zoom | အတိုင်း |
| ပြောင်းပြန်ထားသော စာသား ဖတ်ရလွယ်ဆဲ | အတိုင်း (MIRRTEXT 0 ကဲ့သို့) |
| Ctrl+Z၊ Ctrl+Y၊ Ctrl+S၊ Ctrl+O၊ Ctrl+P၊ Ctrl+A | အတိုင်း; Mac တွင် Command လည်း အလုပ်လုပ်သည် |

[Command reference](topic:commands) တွင် command နှင့် alias အားလုံး ရှိသည်။

:::tip
AutoCAD ribbon ကို နှစ်သက်ပါက {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Menus, keys and mouse}} တွင် {{ui:Drafting classic}} menu style ကို ရွေးပါ: Home၊ Insert၊ Annotate၊ Parametric၊ View၊ Manage နှင့် Output tab များ အပေါ် command line တူညီစွာ၊ အလယ်ခလုတ်က pan လုပ်ပြီး ညာ click က Enter ဖြစ်သည်။ [Menus, keys and mouse](topic:menus-keys-and-mouse) ကို ကြည့်ပါ။
:::

[command map](topic:command-map) တွင် CadCraft ရှိ command အားလုံးနှင့် ၎င်းတို့၏ တိုတောင်းသော အမည်များ ရှိပြီး [cheat sheet](topic:cheat-sheet) တွင် အသုံးအများဆုံး 40 ခု ရှိသည် (PDF စာမျက်နှာတစ်ခုအဖြစ်လည်း ရှိသည်)။

## လူများကို ခြေချော်စေသော ကွာခြားချက်များ

### ရိုက်ထည့်သော point များ အကြွင်းမဲ့ ဖြစ်သည်

dynamic input ဖွင့်ထားစဉ် အခြားပရိုဂရမ်သည် ဒုတိယ point အတွက် ရိုက်သော `100,0` ကို ဆွေမျိုးအဖြစ် သတ်မှတ်သည်။ **CadCraft ၏ command line သည် မသတ်မှတ်ပါ**: ထိုနေရာတွင် `x,y` သည် အမြဲ origin မှ တိုင်းသည်။ {{ui:Dyn}} ({{key:F12}}) ဖွင့်ထားသည့်အခါ ၎င်း၏ field များကို သုံးပါ: အကွာအဝေး၊ {{key:Tab}}၊ ထောင့်။ "နောက်ဆုံး point ၏ ညာဘက် 100" အတွက် `@100,0` ကို သုံးပါ၊ သို့မဟုတ် crosshair ကို မှန်ကန်စွာ ရွှေ့ပြီး `100` တစ်ခုတည်း ရိုက်ပါ။

### Shift က snap ကို ကျော်သည်; Ortho မပေးပါ

click လုပ်စဉ် Shift ကိုင်ထားခြင်းသည် ထို click အတွက် object snap ကို လျစ်လျူရှုသည်။ Ortho ကို ယာယီ ပြောင်းခြင်း မဟုတ်ပါ။ F8 သို့မဟုတ် {{ui:Ortho}} ခလုတ်ကို သုံးပါ။

### Right-click သည် အမြဲ Enter

right-click menu မရှိပါ။ ပုံဆွဲထဲတွင် right-click သည် Enter ဖြစ်သည်: command ကို အဆုံးသတ်သည်၊ ရွေးမှုကို ပြီးစီးစေသည်၊ သို့မဟုတ် နောက်ဆုံး command ကို ထပ်လုပ်သည်။ grip move သို့မဟုတ် ရွေးသော အကွက်အတွင်းတွင် ဖြစ်လျှင် ယင်းက ဖျက်သိမ်းသည်။ ညာခလုတ်ဖြင့် ဆွဲ၍ pan လုပ်ပါ။

### Space-bar ဖြင့် pan မလုပ်နိုင်ပါ

Space သည် Enter ဖြစ်သောကြောင့် Space ကိုင်ထားပြီး ဆွဲခြင်းဖြင့် pan မလုပ်ပါ။ အလယ်ခလုတ် သို့မဟုတ် ညာခလုတ်ဖြင့် pan လုပ်ပါ၊ သို့မဟုတ် wheel ဖြင့် ချဲ့ပြီး အခြားနေရာတွင် ပြန်ချဲ့ပါ။

### Trim နှင့် Extend

Trim နှင့် Extend သည် Quick mode ဖြင့် စတင်သည်: မြင်ရသော အရာဝတ္ထု တိုင်းသည် ဖြတ်အစွန်း သို့မဟုတ် နယ်နိမိတ် ဖြစ်သည်၊ pointer အောက်ရှိ အပိုင်းက ပျောက်မည့်အရာကို ပြသည်၊ ဆွဲသော လမ်းကြောင်းက ဖြတ်သွားသော အပိုင်းအားလုံးကို trim လုပ်သည်၊ ဘယ်သူမျှ မဖြတ်သော အရာကို ဖျက်သည်။ {{key:Shift}} က trim နှင့် extend ကြား ပြောင်းသည်။ `O` က Standard mode သို့ ပြောင်းသည် (အစွန်းများကို အရင်ရွေးပါ)၊ `F` နှင့် `C` က fence နှင့် crossing ဖြစ်သည်၊ `E` က EDGEMODE ဖြစ်သည်၊ `R` က ဖျက်သည်။ `P` (Project) ရွေးချယ်မှု မရှိပါ: CadCraft သည် ပုံဆွဲ၏ ပလိန်းတွင် trim လုပ်သည်။

### Fillet နှင့် chamfer

{{cmd:FILLET}} နှင့် {{cmd:CHAMFER}} တွင် သင်သိသော ရွေးချယ်မှုများ ရှိသည်: Undo၊ Polyline၊ Radius (သို့မဟုတ် Distance၊ Angle နှင့် mEthod)၊ Trim နှင့် Multiple၊ နှင့် sharp corner အတွက် {{key:Shift}}+click။ polyline နှင့် line ကြား fillet သည် arc ကို polyline ထဲသို့ မပေါင်းဘဲ ၎င်း၏ ကိုယ်ပိုင် object အဖြစ် ထည့်သည်၊ arc segment နားရှိ polyline corner များကို ယခင်အတိုင်း ထားသည်။

### Paragraph စာသားနှင့် တစ်ကြောင်းစာသား

`T`၊ `MT` နှင့် `MTEXT` သည် နေရာတွင် ရိုက်သော paragraph စာသား ဖြစ်ပြီး အနံ၊ လိုင်းကွာဝေးမှုနှင့် ညှိနှိုင်းမှု ပါသည်; `DT` နှင့် `DTEXT` သည် သင်သိသည့်အတိုင်း တစ်ကြောင်းစာသား ဖြစ်သည်။ text style သို့မဟုတ် column မရှိပါ၊ in-text format (bold၊ stacked fraction) ကို ယခု ရိုက်၍ မရသေးပါ; ဖိုင်မှ လာသော format ကို ထိန်းသိမ်း၊ ဆွဲ၊ သိမ်းသည် ([စာသား ထည့်ခြင်း](topic:text#formatting-inside-paragraph-text-from-other-programs) ကို ကြည့်ပါ)။ အရာအားလုံးကို Helvetica ပုံစံ font ဖြင့် ဆွဲသည်။

### သိမ်းခြင်းဆိုသည်မှာ "ကော်ပီ download လုပ်ခြင်း"

{{key:Mod+S}}၊ `SAVE` နှင့် `QSAVE` သည် ပုံဆွဲ၏ format ဖြင့် ကော်ပီကို download လုပ်သည်: DWG အဖြစ် ဖွင့်ထားသည် DWG အဖြစ်၊ DXF က DXF အဖြစ် သိမ်းသည်။ browser တွင် ဘာမျှ အစားထိုး overwrite မလုပ်ပါ၊ ဖွင့်ထားသော ဖိုင်များကို လုံးဝ မပြောင်းပါ။ CadCraft Studio တွင် {{key:Mod+S}} က ဖွင့်ခဲ့သော ဖိုင်ထဲသို့ ပြန်ရေးသည်။

`SAVEAS` ({{key:Mod+Shift+S}}) သည် ဖိုင်ကိုင်တွယ်စနစ် မဟုတ်ဘဲ dialog ငယ်တစ်ခုဖြစ်သည်: {{ui:DWG}} (နှင့် ၎င်း၏ {{ui:Version}}၊ AutoCAD 2000 မှ 2018)၊ {{ui:DXF R12}} သို့မဟုတ် {{ui:DXF 2000}} ကို ရွေးပြီး {{ui:Save}} ကို နှိပ်ပါ။ download သွားရမည့်နေရာကို browser က ဆုံးဖြတ်သည်။ `DXFOUT` သည် အမြဲ DXF R12 ကို download လုပ်သည်။

DWG ဖွင့်ထားသည်က ၎င်းပါလာသော ဗားရှင်းဖြင့် သိမ်းသည်; ပုံဆွဲအသစ်က သင်မရွေးမှ AutoCAD 2000 format ဖြင့် သိမ်းသည်။ စာရွက်များ၊ dimension များနှင့် hatch pattern များကို ထိန်းသိမ်းသည်။ [ဖိုင်များ: ဖွင့်နိုင်သည်၊ သိမ်းနိုင်သည်](topic:files#saving) ကို ကြည့်ပါ။

### လေယာများ: ပိုရိုးရှင်း

- လေယာပြောင်းလဲမှု တိုင်း (on၊ freeze၊ lock၊ color၊ plot၊ linetype၊ lineweight၊ current layer) သည် undo အဆင့်တစ်ခု ဖြစ်သည်။
- Off နှင့် freeze သည် CadCraft တွင် တူညီသော အကျိုးရှိသည်။
- viewport တစ်ခုတွင် ပုံဆွဲက freeze လုပ်ထားသော လေယာများသည် ထို viewport တွင် freeze ဆက်ရှိနေသည်: မျက်နှာပြင်၊ plot နှင့် DWG သို့မဟုတ် DXF အဖြစ် သိမ်းသည့်အခါ။
- လေယာကို ကိုယ်ပိုင် အရောင်၊ linetype၊ lineweight သို့မဟုတ် ပွင့်လင်းမှုဖြင့် ပြသသော viewport သည် မျက်နှာပြင်၊ plot နှင့် DWG သိမ်းဆည်းချိန်တွင် ဆက်လုပ်သည် (DXF က လေယာ၏ ကိုယ်ပိုင် ဆက်တင်များကို ထိန်းသည်; သိမ်းချက်က ထိုသို့ ပြောသည်)။ viewport အလိုက် ပြောင်းခြင်းကို မတည်ဆောက်ရသေးပါ။
- လေယာ properties manager နှင့် layer state မရှိပါ; {{cmd:RENAME}}၊ {{cmd:LAYMRG}} နှင့် {{cmd:LAYDEL}} က လေယာများကို အမည်ပြောင်း၊ ပေါင်း၊ ဖျက်သည်။ Linetype နှင့် lineweight ကို ညာဘက် panel တွင် သတ်မှတ်သည် ([Line weights and linetypes](topic:units-papers-scales#line-weights-and-linetypes) ကို ကြည့်ပါ); {{cmd:LAYISO}}၊ {{cmd:LAYOFF}}၊ {{cmd:LAYFRZ}} နှင့် {{cmd:LAYMCUR}} က ရွေးခြင်းဖြင့် အလုပ်လုပ်သည်။
- DXF R12 သို့ သိမ်းသည့်အခါ လေယာအမည်များကို စာလုံးကြီးဖြင့် ရေးသည်။ DWG က သင်ရိုက်ခဲ့သည့်အတိုင်း ထိန်းသိမ်းသည်။

### Dimension style များ

`DIMSTYLE` သည် အမည်ပေးထားသော style များအတွက် manager ကို ဖွင့်သည် (အသစ်၊ ပြင်ဆင်၊ လက်ရှိအဖြစ်သတ်မှတ်၊ နှိုင်းယှဉ်၊ အသုံးချ)။ `DIMSCALE` နှင့် အခြား ဆက်တင်များသည် dimension အသစ်များ အသုံးပြုသည့်အရာကို ပြောင်းဆဲဖြစ်ပြီး dimension တစ်ခုစီသည် ကိုယ်ပိုင် အရွယ်အစားကို ထိန်းသည်၊ ၎င်းကို Properties panel တွင်လည်း ပြောင်းနိုင်သည်။ လက်ရှိ style ကို ဖိုင်တွင် မသိမ်းပါ။ Dimension များသည် ပုံဆွဲ၏ length format (ဒဿမ၊ သို့မဟုတ် {{cmd:UNITS}} ဖြင့် ပေနှင့် လက်မ) ကို လိုက်သည်၊ သို့မဟုတ် ကိုယ်ပိုင် {{ui:Format}} ကို လိုက်သည်။ [Set dimension sizes](topic:dimension-settings) ကို ကြည့်ပါ။

### Plot လုပ်ခြင်း ပိုရိုးရှင်း

Plot style table များသည် အရောင်ဖြင့် အလုပ်လုပ်သည်၊ CTB ဖိုင်များကဲ့သို့: Monochrome၊ Colour နှင့် Grayscale ကို ထည့်ထားပြီး ကိုယ်ပိုင် table ကိုလည်း ဖန်တီးနိုင်ပြီး စာရွက်တစ်ခုစီက ၎င်း၏ table ကို ထိန်းသည်။ CTB ဖိုင် ဖတ်ခြင်းကို ထုတ်ပြန်ထားသော ဖော်ပြချက်မှ တည်ဆောက်ထားပြီး ကျွန်ုပ်တို့ ဖန်တီးထားသော ဖိုင်များပေါ်တွင်သာ စမ်းသပ်ထားသည်; အမည်ပေးထားသော plot style table (STB) နှင့် page setup များကို မတည်ဆောက်ရသေးပါ။ မျဉ်းများကို ၎င်းတို့၏ lineweight ဖြင့် ပရင့်ပြီး အခြားများကို ပင်ကိုယ် pen အနံတစ်ခုဖြင့် ပရင့်သည်။ စာရွက်များကို ၎င်းတို့၏ စာရွက်ပေါ်တွင် 1:1 ဖြင့် plot လုပ်သည်; မော်ဒယ်ကို ရွေးထားသော စကေး သို့မဟုတ် ကိုက်ညီအောင် plot လုပ်သည်။ [Plot to PDF](topic:plot-pdf) ကို ကြည့်ပါ။

### Viewport အတွင်း အလုပ်လုပ်ခြင်း

သင်သိသည့်အတိုင်း: viewport အတွင်း နှစ်ချက်နှိပ်ခြင်း (သို့မဟုတ် {{cmd:MSPACE}} ရိုက်ခြင်း) သည် viewport မှတစ်ဆင့် မော်ဒယ်ပေါ်တွင် အလုပ်လုပ်စေသည်၊ viewport အပြင် နှစ်ချက်နှိပ်ခြင်း (သို့မဟုတ် {{cmd:PSPACE}}) သည် စာရွက်သို့ ပြန်ရောက်စေသည်။ အတွင်းတွင် pan နှင့် zoom က viewport ပြသသည်ကို ပြောင်းသည်၊ ၎င်း၏ display ကို လော့ခ်မခတ်ထားလျှင်သာ; လော့ခ်ခတ်ထားလျှင် စာရွက်ကို ရွှေ့သည်။ ပုံဆွဲအောက်ရှိ tab ကို နှိပ်ခြင်းဖြင့်လည်း viewport မှ ထွက်သည်။ [Work on the model through a viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport) ကို ကြည့်ပါ။

### Tracking နှင့် dynamic input ရှိသည်၊ grid snap မရှိသေး

grid သည် ကြည့်ရန်သာ ဖြစ်သည်; point များသည် ၎င်းသို့ snap မလုပ်ပါ (F9 snap mode မရှိပါ)။ Polar tracking ({{key:F10}}၊ အဆင့်ကို {{cmd:POLARANG}} ဖြင့် သတ်မှတ်) နှင့် object snap tracking ({{key:F11}}: snap point ပေါ်တွင် ရပ်နားပြီး ယူသည်) သည် သင်သိသည့်အတိုင်း အလုပ်လုပ်သည်; [Snap to objects](topic:object-snaps#polar-tracking) ကို ကြည့်ပါ။ Dynamic input ({{key:F12}}) သည် crosshair ဘေးတွင် အကွာအဝေးနှင့် ထောင့် (သို့မဟုတ် X နှင့် Y) ကို ပြသည်; [Coordinate and distance entry](topic:coordinate-entry#dynamic-input) ကို ကြည့်ပါ။

### ပေနှင့် လက်မ

{{ui:Length format}} ကို {{ui:Architectural}} သို့မဟုတ် {{ui:Engineering}} ရွေးပါ (သို့မဟုတ် {{cmd:UNITS}} ရိုက်ပါ)၊ ထို့နောက် အလျားများကို သင်သိသည့်အတိုင်း ရိုက်ပါ: `12'6"`၊ `12'6-1/2"`။ အပိုင်းဂဏန်းမတိုင်မီ space မဟုတ်ဘဲ hyphen သုံးပါ: {{key:Space}} က {{key:Enter}} ဖြစ်သည်။ စာရွက်များနှင့် plot များက architectural စကေးများကို ပေးနိုင်ရန် {{ui:Units}} ကိုလည်း {{ui:Inches}} သို့ သတ်မှတ်ပါ။ format ကို သိမ်းထားသော DWG နှင့် DXF ဖိုင်များတွင် ထိန်းသည်။ [Feet and inches](topic:units-papers-scales#feet-and-inches-and-fractions) ကို ကြည့်ပါ။

### Copy နှင့် paste သည် CadCraft အတွင်းတွင်သာ

{{key:Mod+C}}၊ {{key:Mod+X}} နှင့် {{key:Mod+V}} သည် ပုံဆွဲတစ်ခု အတွင်း၊ ပုံဆွဲများကြား နှင့် browser တစ်ခုတည်းရှိ CadCraft tab များကြား အရာဝတ္ထုများကို copy၊ cut၊ paste လုပ်သည်။ clipboard သည် CadCraft ၏ ကိုယ်ပိုင်ဖြစ်သည်: CadCraft အရာဝတ္ထုများကို အခြားပရိုဂရမ်သို့ သို့မဟုတ် အခြားပရိုဂရမ်မှ အရာဝတ္ထုများကို CadCraft သို့ paste မလုပ်နိုင်ပါ။ အခြားယူနစ်ရှိ ပုံဆွဲမှ paste လုပ်သည့်အခါ အရွယ်အစား မပြောင်းပါ: ထို့နောက် {{cmd:SCALE}} ကို သုံးပါ။ {{key:Mod+D}} သည် pointer နှင့်အတူ ရွှေ့သော duplicate ဖြစ်ပြီး CadCraft ၏ ထပ်ထည့်ချက် ဖြစ်သည်။ [Copy, paste and duplicate](topic:copy-paste) ကို ကြည့်ပါ။

### သင်အသုံးမပြုနိုင်သော browser ကီးများ

web page က browser မှ {{key:Mod+N}}၊ {{key:Mod+W}} သို့မဟုတ် {{key:Mod+T}} ကို မယူနိုင်ပါ: ၎င်းတို့က window နှင့် tab များကို ဖွင့်ပြီး ပိတ်သည်။ {{ui:New}} ခလုတ်ကို သုံးပါ သို့မဟုတ် `NEW` ရိုက်ပါ။ [Keys, mice and trackpads](common:keys) ကို ကြည့်ပါ။

## ယခုမရှိသေးသော command များ

{{cmd:TABLE}} ကို မတည်ဆောက်ရသေးပါ။ ရိုက်လျှင် "Unknown command" ဟု ပြောသည်။ ({{cmd:PEDIT}}၊ {{cmd:SPLINE}}၊ {{cmd:SPLINEDIT}} နှင့် {{cmd:XREF}} ကို တည်ဆောက်ပြီးဖြစ်သည်။) [Not built yet](topic:not-built-yet) တွင် ယခု ဘာလုပ်ရမည်ကို စာရင်းပြုထားသည်။
