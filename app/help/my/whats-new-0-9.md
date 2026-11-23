---
title: 0.9 တွင် အသစ်ရှိသည် (အစောပိုင်း)
summary: Boundary ကို လိုက်သော hatch များ၊ layer အုပ်စုများ၊ ထပ်ခွဲထားသော ထပ်များ၊ ပေါက်ပြတင်းနှင့်အတူ 2D smart နံရံများ၊ စာသားပုံစံများနှင့် ပုံစံချထားသော paragraph editor၊ မျောနေသော command line၊ grid snap၊ arc ဆယ်နည်း နှင့် Documents panel။
keywords: whats new 0.9, earlier release, whats new, 0.9, release notes, changelog, hatch, associative hatch, hatchedit, pat file, pattern file, layer groups, laygroup, floors, stacked floors, floorlayers, smart walls, wall, door, window, wall tools, text style, style, mtext editor, paragraph text, formatting, floating command line, command line, top area, compact, snap to grid, grid snap, f9, arc, documents panel, check out, uk steel sizes, draw.io, thai text, dxf r12, whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, autocomplete, ghost, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, draft without sight, screen reader, limits, bearings, aunits, shx, diagram, ole, history, compare, in words, properties, feet and inches, stretch, languages, input devices, problems, live, assistants
from: 3451e64c
---

ဤသည်မှာ CadCraft 0.9 တွင် 0.8.1 နှင့်နှိုင်းယှဉ်၍ ပြောင်းလဲချက်များ ဖြစ်သည်။ CadCraft သည် CadCraft Studio 0.9 နှင့် ၎င်း၏ app ရှစ်ခု၏ 2D နှင့် 3D drawing app ဖြစ်သည်။ 0.9 သည် plan drafting ကို ပြီးစီးစေ၊ စာသားပုံစံများနှင့် တကယ့် စာသား editor ထည့်၊ မျက်နှာပြင်တွင် နေရာ ပိုပေးသည်။

## အသစ်

### Plan drafting

- **Boundary ကို လိုက်သော hatch များ။** {{cmd:HATCH}} သည် ၎င်းကို ကန့်သတ်သည့်အရာနှင့် ချိတ်သည်။ Boundary ကို ရွှေ့၊ လှည့်၊ scale ပြောင်းလျှင် hatch နှင့် pattern လိုက်; ပုံသဏ္ဍာန် ပြောင်းလျှင် hatch ကို ပြန်တွက်။ {{cmd:HATCHEDIT}} (`HE`) က နောက်ပိုင်း hatch ကို ပြောင်း၊ ချိတ်ဆက်မှု ပြု သို့မဟုတ် ရပ်။ See [Hatch နှင့် ဖြည့်ရန် ဧရိယာများ](topic:hatch)။
- **Hatch pattern ဖိုင်များ။** {{cmd:HATCH}} မေးခွန်း `Pick internal point` တွင် `F` (Pattern file) ရိုက်ပြီး `.pat` ဖိုင် ရွေး။ အသုံးများသော ပုံစံဖြင့် ရေးထားသော ဖိုင်များကိုသာ စမ်းသပ်ထားပြီး။
- **Layer အုပ်စုများ။** {{ui:ကိရိယာများ}} တွင် {{ui:လေယာများ}} panel ပေါ်: {{ui:အုပ်စုအသစ်}}၊ {{ui:အဆင်သင့် အုပ်စုများ ထည့်ရန်}}၊ {{ui:အမည်ဖြင့် အုပ်စုဖွဲ့ရန်}} နှင့် {{ui:လေယာ ရှာရန်}}; သို့မဟုတ် {{cmd:LAYGROUP}} (`LG`) ရိုက်။ See [Layer များဖြင့် drawing စီစဉ်ခြင်း](topic:layers#group-layers)။
- **ထပ်ခွဲထားသော ထပ်များ။** {{cmd:FLOORS}} (`FLR`)၊ သို့မဟုတ် {{ui:ထပ်များ…}} ကို {{ui:အမြင်}} အုပ်စု၏ {{ui:နောက်ထပ်}} မီနူးတွင်။ Sheet ရှိ viewport တစ်ခုသည် Properties ရှိ {{ui:ပြထားသော ထပ်}} အောက်တွင် ထပ်တစ်ခု ပြနိုင်။ {{cmd:FLOORLAYERS}} က ထပ်များကို အခြားသူထံ ပို့မည့် ဖိုင်အတွက် layer များအဖြစ် ပြော။ See [drawing တစ်ခုတည်းတွင် ထပ်များ ပုံ့ခြင်း](topic:floors)။
- **2D smart နံရံများ၊ တံခါးများနှင့် ပြတင်းပေါက်များ။** {{cmd:WALL}} (`WA`)၊ {{cmd:DOOR}} (`DR`)၊ {{cmd:WINDOW}} (`WN`) နှင့် {{cmd:DELOPENING}}။ ထောင့်များ၊ T ဆက်ခြင်းများနှင့် ဖြတ်ကျော်မှုများကို သင့်အတွက် တွက်ပေး။ နံရံများက ၎င်းတို့ ဘယ်လို ဆက်သလဲ မှတ်တမ်း၊ Properties တွင် Disallow join at start / at end၊ Location line နှင့် ပြင်နိုင်သော Length ရ။ See [2D နံရံများ၊ တံခါးများနှင့် ပြတင်းပေါက်များ ဆွဲခြင်း](topic:walls-2d)။
- **Plan နံရံများပေါ် နံရံကိရိယာ။** {{cmd:WALLRECT}}၊ {{cmd:WALLPOLY}}၊ {{cmd:WALLARC}}၊ {{cmd:WALLTRACE}}၊ {{cmd:WALLDIM}}၊ {{cmd:WALLOFFSET}}၊ {{cmd:WALLSPLIT}}၊ {{cmd:WALLGRID}} နှင့် အခြားများ ရိုက်။ ၎င်းတို့တွင် toolbar ခလုတ်များ မရှိသေး။ See [2D နံရံများအတွက် ပုံသဏ္ဍာန်များ၊ ဖြတ်ခြင်းများ၊ အော့ဖ်ဆက်များနှင့် လော့ခ်များ](topic:wall-tools-2d)။

### စာသား

- **စာသားပုံစံများ။** {{cmd:STYLE}} (`ST`)၊ သို့မဟုတ် {{ui:ဆွဲရန်}} toolbar ရှိ {{ui:စာသားပုံစံ}}: font၊ အမြင့်၊ အကျယ်ကိန်းနှင့် စောင်း ပါသော အမည်ပေးထားသော style များ။ See [text style များဖြင့် စာသား၏ font နှင့် အရွယ်ကို သတ်မှတ်](topic:text-styles)။
- **ပုံစံချထားသော paragraph စာသား editor။** {{cmd:MTEXT}}၊ {{cmd:TEXTEDIT}} သို့မဟုတ် စာသားကို နှစ်ချက်နှိပ်လျှင် font၊ အရွယ်၊ bold၊ italic၊ underline၊ strike-through၊ အရောင်၊ ညှိနှိုင်းမှု နှင့် ဒီဂရီ၊ ±၊ အချင်း သင်္ကေတများ ပါသော box တစ်ခု ဖွင့်၊ နှင့် {{ui:OK}} နှင့် {{ui:Cancel}}။ See [paragraph စာသားကို ပုံစံချခြင်း](topic:format-paragraph-text)။
- **draw.io XML မှ diagram။** {{cmd:DIAGRAM}} (`T2D`) က ကူးထည့်ထားသော draw.io XML ကိုလည်း ဖတ်။ See [စာသားမှ diagram ဆွဲခြင်း](topic:text-to-diagram)။
- **PDF plot တွင် ထိုင်း စာသား။** အရင်က မေးခွန်းအမှတ်များအဖြစ် ရိုက်ထုတ်ခဲ့။

### ပိုမို နေရာနှင့် drawing အကူအညီများ

- **မျောနေပြီး ပါးသော command line နှင့် compact ထိပ်ဧရိယာ။** Command line ၏ grip ကို ဆွဲ၍ မျောစေ၊ ထိပ်အစွန်းကို ဆွဲ၍ လိုင်းနည်းစေ၊ {{key:F2}} က မှတ်တမ်းကို ဖွင့်။ {{ui:ဆက်တင်များ}} › {{ui:CadCraft}} › {{ui:အမိန့်စာကြောင်း}} နှင့် ထိပ်ဧရိယာ ရွေးချယ်မှုများသည် တူညီသော ဆက်တင်များ။ See [ဆက်တင်များ](topic:settings#command-line)။
- **Object snap menu။** Status bar ရှိ {{ui:Snap}} ကို right-click၊ သို့မဟုတ် {{cmd:OSNAP}} ရိုက်။
- **Grid သို့ snap။** Status bar ရှိ {{ui:ဂရစ်သို့ ကပ်ခြင်း}} ခလုတ်၊ သို့မဟုတ် {{key:F9}}: object snap မယူသောအခါ ရွေးထားသော point များသည် အနီးဆုံး grid point သို့ ရောက်။
- **Arc ဆယ်နည်းနှင့် Continue။** {{ui:ဆွဲရန်}} toolbar ရှိ {{ui:လုံးပတ်အပိုင်း}} သို့မဟုတ် {{cmd:ARC}}: 3-point၊ Start/Center/End မိသားစုနှင့် Center/Start/End မိသားစု၊ နှင့် Continue (start point တွင် {{key:Enter}} ကို နှိပ်) နောက်ဆုံး line၊ arc သို့မဟုတ် polyline မှ။
- **Documents panel။** {{cmd:DOCUMENTS}} (`DOCS`) သို့မဟုတ် {{ui:အမြင်}} အုပ်စု၏ {{ui:နောက်ထပ်}} မီနူးရှိ {{ui:စာရွက်စာတမ်းများ…}}: project ဖိုင်တွဲ၏ drawing တိုင်းအတွက် revision၊ state နှင့် check-out။ Dialog အလယ်တွင် ဖွင့်။ See [Documents](topic:documents)။

### ဖိုင်များ

- **UK steel size များ။** Standard panel တွင် 976 section၊ drawing တွင် ရေးသည့်အတိုင်း ရိုက် (ဥပမာ `305x165x40 UB`)။
- **တောင်အာဖရိက pack များ** (ဒီဇိုင်းအလေ့အကျင့်နှင့် အဆောက်အဦ စည်းမျဉ်း) Building regulations add-on ၏ pack များအဖြစ်။ ဂဏန်းများ အတည်မပြုရသေး။
- **CadCraft အတွက် Add-on များ**၊ လိုအပ်သလို ထည့်ပြီး မူလ ပိတ်ထား: အတွင်းပိုင် အလင်းအင်ဂျင်နီယာ၊ chip ဒီဇိုင်း (HDL မှ layout)၊ router ခြစ်ထွင်း၊ ပတ်လမ်း simulation၊ roller chain sprocket များ နှင့် Building regulations နိုင်ငံ pack များ။

## ပြင်ဆင်ပြီး

- Hatch ကို ရွှေ့၊ လှည့် သို့မဟုတ် scale ပြုလုပ်လျှင် ၎င်း၏ pattern ကျန်ခဲ့။
- {{cmd:GRIDMOVE}} သည် grid line ပေါ်တွင်သာ စတင်သော နံရံတစ်ခုလုံးကို သယ်ခဲ့။ နံရံကို ယခု ၎င်း၏ ဆုံးများဖြင့် ဆုံးဖြတ်။
- Drawing limit များ ပိတ်ထားသော်လည်း grid သည် limit အတွင်းသာ ပြခဲ့။
- Sidebar ရှိ block စာရင်း scroll လုပ်ပြီး အမည် block မဟုတ်လျှင် ထိုအက္ခရာဖြင့် စတင်သော block များကို စာရင်း ("Did you mean")။
- DXF R12 ဖိုင်များ AutoCAD က ("Unknown group 1001 for table") ဟု ငြင်းခဲ့သည်; ယခု ထိုနေရာတွင် ဖွင့်နိုင်။
- ထိုအရွယ် entity 70,000 ခန့် နှင့် အထက် ဖိုင်ကြီးများ "Maximum call stack size exceeded" ဖြင့် ဖွင့်မရ။
- AutoCAD 2018 နှင့် နောက်ပိုင်း DWG ဖိုင်များ maintenance version မြင့်သည် "bad BITLONG code 11" ဖြင့် ဖွင့်မရ။
- Paragraph စာသား box တွင် ရွေးထားသော အပိုင်းအတွက် အရွယ်အစားအသစ် ရိုက်သောအခါ ရွေးချယ်မှု ထိန်း။

## Program အားလုံးတွင်

Hint ရှိသော control တိုင်းတွင် Bootstrap tooltip၊ ပိတ်နိုင်သော အစမှတ်အသား၊ ကိုက်မည်မဟုတ်သော tab strip များ scroll လုပ်ပြီး browser tab ၏ ခေါင်းစဉ်သည် ဖွင့်ထားသော drawing ကို လိုက် (`<drawing> - CadCraft | CadCraft`)။ {{ui:ဆက်တင်များ}} › Layout သည် ယခု နှစ်ကြောင်းရွေးချယ်မှု drop-down ဖြစ်သည်။ {{ui:ဆက်တင်များ}} ရှိ ဘာသာစကား စာရင်း 0.8 ထက် ရှည်။ Live co-editing၊ Library collection နှင့် အလေးချိန်နှင့် အပူချိန် unit များကို Studio မှတ်စုများတွင် ဖော်ပြ။

## အမှန်တကယ် ကန့်သတ်ချက်များ

- Paragraph စာသားတွင် bullet သို့မဟုတ် နံပါတ်စဉ် စာရင်း၊ tab ruler သို့မဟုတ် justify မရှိ။ Plot ထုတ်ထားသော PDF များက စာသားကို Helvetica ဖြင့် ထား။
- Plan နံရံများ မျဉ်းဖြောင့်ဖြစ်သဖြင့် arc ကို တိုတို နံရံများအဖြစ် ဆွဲ။ နံရံကိရိယာ၏ လူအဖွဲ့ စစ်ဆေးမှု ဆိုင်းငံ့ထား။
- Layer အုပ်စုများကို AutoCAD ၏ ကိုယ်ပိုင်ပုံစံဖြင့် မရေးထား၊ ထို့ကြောင့် AutoCAD က flat စာရင်း ပြ။ အခြား program များက {{cmd:FLOORLAYERS}} မလုပ်ပါက ထပ်အားလုံးကို အတူ ပြ။
- Documents panel ကို လူနှစ်ဦးက အမှန်တကယ် မျှဝေ folder တွင် မစမ်းရသေး။ Router ခြစ်ထွင်းခြင်းကို စက်အစစ်တွင် မစမ်းရသေး။ လင်းရောင် ခန့်မှန်းချက်ကို photon trace နှင့် စစ်ထားပြီး အခြား program နှင့် မဟုတ်။ အင်ဂျင်နီယာ add-on များသည် စစ်ဆေးကိရိယာများ ဖြစ်ပြီး အင်ဂျင်နီယာ၏ သုံးသပ်ချက်ကို မအစားထိုးနိုင်။
- အင်္ဂလိပ်မှအပ ဘာသာစကားများသည် စက်မူကြမ်းများ ဖြစ်ပြီး အသစ်စကားလုံး အချို့ အင်္ဂလိပ်သာ ရှိ။

## 0.8 နှင့် 0.8.1 အစောပိုင်း

ဤသည်မှာ CadCraft 0.8 နှင့် 0.8.1 တွင် 0.7 နှင့်နှိုင်းယှဉ်၍ ပြောင်းလဲချက်များ ဖြစ်သည်။ 0.8 (1 နိုဝင်ဘာ 2026) သည် သင့် drawing မှ အလုပ်လုပ်သော drawing အကူအညီများ ထည့်၊ စည်းမျဉ်းဖြင့် သင့်ကွန်ပျူတာပေါ်တွင်၊ မော်ဒယ် မရှိဘဲ၊ 0.8.1 (2 နိုဝင်ဘာ 2026) သည် ၎င်းနောက်တွင် တင်ပြထားသော bug များကို ပြင်ဆင်။

### အသစ်

**သင့်အတွေးကို ဆက်ပြီးပြီးစီးစေသော drawing**

- **Ghost က နောက်ဖြစ်လာမည့်အရာကို ပြ။** Command မလည်ပတ်ချိန်တွင် မီးခိုးရောင် မျဉ်းကြောင်း ghost က သင့် drawing ၏ကိုယ်ပိုင် pattern များက နောက်ဖြစ်လာမည့်အရာကို ပြ: တူညီသော အကွာအဝေးဖြင့် နောက်တစ်ခု stud၊ stair ၏ နောက်အဆင့်၊ အခန်း၏ ပျောက်နေသော နံရံ။ {{key:Tab}} ကို နှိပ်လျှင် undo အဆင့် တစ်ခုအဖြစ် ဆွဲ၊ {{key:Esc}} က ဖယ်။ အသစ်ဆုံး object များကိုသာ ကြည့်၍ ကြီးမားသော drawing တွင်ပင် ချောမွေ့။ ဆက်တင်များ › CadCraft တွင် သို့မဟုတ် {{cmd:AUTOCOMPLETE}} `Off` ဖြင့် ပိတ်။
- **လိုင်းဆွဲစဉ် နောက် point။** {{cmd:LINE}} သို့မဟုတ် {{cmd:PLINE}} အလယ်တွင် ghost သည် နောက် point: stair ၏ နောက်အဆင့် (riser၊ tread)၊ စတုဂံ၏ စတုတ္ထ ထောင့်၊ သို့မဟုတ် ပိတ်သော point။ ကာဆာကို အနီး ယူပြီး {{key:Tab}} ကို နှိပ်၊ နှိပ်ခဲ့သကဲ့သို့။
- **လက်ဖြင့် ရေးထားသော ပုံကို တိကျသော geometry ဖြစ်အောင်။** {{cmd:SKETCHFIX}}: ဘောပင်၊ မောက်စ် သို့မဟုတ် လက်ချောင်းဖြင့် ကြမ်းသော stroke များ ဆွဲ၊ တစ်ခုစီ သန့်ရှင်းသော line၊ circle၊ arc၊ စတုဂံ သို့မဟုတ် polyline ဖြစ်လာ၊ ရှိပြီးသား ပုံဆွဲချက်နှင့် ကပ်ခြင်း။ See [ဘောပင်ဖြင့် ပုံဖော်ပြီး တိကျသော ပုံသဏ္ဍာန် ရယူခြင်း](topic:sketch-with-a-pen)။
- **ဓာတ်ပုံမှ ပုံဆွဲ။** {{cmd:PHOTOSKETCH}} (`PSK`) က ဓာတ်ပုံထဲရှိ စာရွက်ကို ရှာ၊ perspective ဖြောင့်၊ သင်ပေးသော စာရွက်အရွယ်နှင့် scale ကို ထည့်၊ ဘောပင်အရောင်တစ်ခုစီအတွက် layer တစ်ခုတွင် ဘောပင်မျဉ်းများကို trace လုပ်။ စာလုံးများကို trace မလုပ်။
- **ကိုယ်တိုင် အရွယ်ပေးခြင်း။** {{cmd:AUTODIM}} (`ADIM`) က သင်ရွေးသော ဘက်တွင် dimension chain များ၊ overall size၊ opening အကျယ်များ၊ hole diameter များနှင့် `Grid` ဖြင့် grid spacing ကို ပြုလုပ်။ ရှိပြီးသား dimension ကို နောက်တစ်ကြိမ် မလုပ်။
- **Grid line ရွှေ့လျှင် အစုံ လိုက်။** {{cmd:GRIDMOVE}} (`GM`): grid line ပေါ်ဆုံးသော နံရံများ ဆန့်၊ လိုင်းတလျှောက် နံရံများ၊ ကော်လံများ၊ bubble နှင့် tag များ ရွေ့၊ grid တွင် dimension များက spacing အသစ် တိုင်း။ Undo အဆင့် တစ်ခု။

**Sheet များ၊ အသေးစားနှင့် tag များ**

- **ကိုယ်တိုင် layout ချသော sheet များ။** {{cmd:AUTOSHEET}} က သင့် named view များ (သို့မဟုတ် model ၏ သီးခြား အပိုင်းများ) ကို ယူ၊ paper အရွယ်နှင့် standard scale ရွေး၊ view များကို sheet အသစ်များပေါ် title block နှင့် အမည်-scale caption ဖြင့် အတန်းများအတိုင်း နေရာချ။ အားလုံး ပြင်နိုင်ဆဲ။ See [sheet များကို ကိုယ်တိုင် layout ချခြင်း](topic:lay-out-sheets-for-me)။
- **သင့်ကုမ္ပဏီ၏ အသေးစားများ၊ ပုံဆွဲနေစဉ် ကမ်းလှမ်း။** {{cmd:DETAILS}} (`DET`) က သင့်ကိုယ်ပိုင် အသေးစား block များကို ထိန်း။ သင်ရွေးထားသည်များသည် layer၊ block အမည်နှင့် မှတ်ချက်များပေါ်ရှိ စာလုံးများနှင့် ကိုက်ညီလျှင် status bar က ထိုသို့ ပြော၊ ရွေး၍ နေရာချ။ {{cmd:DETAILS}} › Share က သင့်စာရင်းကို သင့် Documents ဖိုင်တွဲတွင် ထား၊ အဖွဲ့က ထည့်ထားသည်များကို ယူ။ Settings က ကမ်းလှမ်းချက်များကို ပိတ်။
- **Block များပေါ် tag များ။** {{cmd:TAGS}} က tag တစ်ခု သတ်မှတ် (အမျိုးအစား၊ ခွင့်ပြုသော တန်ဖိုးများ၊ သက်ဆိုင်သော block များ)၊ ရွေးထားသော block reference များတွင် သတ်မှတ်၊ CSV အဖြစ် သိမ်းနိုင်သော schedule အဖြစ် စာရင်း။ အဓိပ္ပာယ်ဖွင့်ဆိုချက်များကို DWG တွင် ထိန်း။ See [Tag များ](topic:tags)။
- **Drawing limit များ။** {{cmd:LIMITS}} က drawing အတွက် ဘောင်တစ်ခု သတ်မှတ်: grid က ဖြည့်၊ zoom All က ပြ။ Limit များသည် outline အဖြစ် ပြ၊ DWG နှင့် DXF တွင် paper limit များနှင့်အတူ သိမ်း။ See [drawing limit များ သတ်မှတ်ခြင်း](topic:drawing-limits)။

**အခြားသူများနှင့် အခြား program များနှင့် အလုပ်လုပ်ခြင်း**

- **Markup ကို revision အဖြစ် ပြောင်း။** {{cmd:REDLINE}} က MarkupCraft ရေးသော package ကို ဖတ်၊ ပြောင်းလဲမှု တစ်ခုစီကို စာရင်း။ တစ်ခုစီကို မှတ်ချက်ဖြင့် လက်ခံ သို့မဟုတ် ပယ်; လက်ခံထားသည်များက revision cloud နှင့် revision log ကို undo အဆင့် တစ်ခုတည်းဖြင့် ရ၊ MarkupCraft တွင် markup များ ပိတ်သော answers ဖိုင်ကို သိမ်း။ See [markup ကို revision အဖြစ် ပြောင်းခြင်း](topic:redline-to-revision)။
- **git နှင့် Fossil ပေါင်းနိုင်သော drawing များ။** ဆက်တင်များ › CadCraft တွင် {{ui:ပေါင်းစည်းရလွယ်ကူသော ဖိုင်များ}} ဖွင့်ထား၊ object တိုင်းက ဘယ်တော့မှ မပြောင်းသော key ရ (ဖိုင်များ ၁၀ ရာခိုင်နှုန်းခန့် ကြီး)။ `cadcraft merge base ours theirs` က လူနှစ်ဦး၏ DWG သို့မဟုတ် DXF တည်းဖြတ်ချက်များကို object အလိုက် ပေါင်း၊ တူညီသောအရာကို နှစ်ဦးပြောင်းမိသော နေရာကိုသာ ပြ။ See [drawing တစ်ခုကို လူနှစ်ဦးတည်းဖြတ်ချက် ပေါင်းခြင်း](topic:merge-drawings)။
- **စကားလုံးဖြင့် ဘာပြောင်းသလဲ။** History တွင် Compare က ရိုးရှင်းသော စာရင်း: အရာများ ပြောင်းသည့်နေရာ၊ နေရာများ၏ အရွယ်၊ ထည့်ထား၊ ဖယ်ထား သို့မဟုတ် ပြောင်းထားသည်များနှင့် တည်းဖြတ်ထားသော စာသား။ See [ဘာပြောင်းသလဲ စကားလုံးဖြင့် ပြော](topic:changes-in-words)။
- **Bearing နှင့် ထောင့်များ။** Direction ကို အင်ဂျင်နီယာ bearing ဥပမာ N45°23'30"E၊ သို့မဟုတ် ဒီဂရီ၊ မိနစ်၊ စက္ကန့်ဖြင့် ရိုက်၊ ထောင့် တောင်းသည့်နေရာတိုင်း; AUNITS က ထောင့်များ ပြပုံကို သတ်မှတ်။ See [bearing နှင့် ထောင့်များ ရိုက်ပြခြင်း](topic:bearings-and-angles)။
- **ကိုယ်ပိုင် SHX font များ။** CadCraft သို့ SHX font ဖိုင်တွဲတစ်ခု ပေး၊ ၎င်းတို့ကို အမည်ပေးထားသော text style များ ထို font ဖြင့် ဆွဲ၊ မျက်နှာပြင်နှင့် plot တွင်။ See [ကိုယ်ပိုင် SHX font ဖြင့် စာသား ဆွဲခြင်း](topic:shx-fonts)။
- **စာသားမှ diagram။** {{cmd:DIAGRAM}} က Mermaid flowchart၊ PlantUML component diagram၊ D2 သို့မဟုတ် from-to စာရင်းကို ဖတ်၊ တည်းဖြတ်နိုင်သော block နှင့် connector များ ဆွဲ။ See [စာသားမှ diagram ဆွဲခြင်း](topic:text-to-diagram)။
- **DWG ထဲရှိ OLE object များ။** {{cmd:OLELIST}} က DWG တွင်ပါပြီး CadCraft မိမိဘာသာ နေရာချမရနိုင်သော OLE object များကို စာရင်း၊ ပုံ၏ မိတ္တူကို သင်ပြောသော နေရာတွင် ထား။ See [ပုံများ](topic:pictures#objects-from-other-programs-ole)။
- **သင့် တွက်ချက်မှုများ drawing နှင့်အတူ။** Calc sheet နှင့် design reason များကို class table နှင့်အတူ DWG တွင် ထိန်း။

**{{ui:မျက်စိမမြင်ဘဲ ပုံဆွဲခြင်း}}**

- {{ui:ဆက်တင်များ}} တွင် ဖွင့် (သို့မဟုတ် {{cmd:ACCESS}} ရိုက်ပြီး `On` ဖြင့် ဖြေ)။ CadCraft က command တိုင်းနှင့် ရလဒ်ကို သင့်မျက်နှာပြင် ဖတ်စက်မှ ပြော၊ drawing ကို ဖော်ပြ၊ cursor အနီးရှိသည်ကို ပြော၊ cursor ကို ကီးဘုတ်ဖြင့် ရွှေ့ပြီး point ရွေးခွင့်ပြု၊ snap တစ်ခုစီနှင့် grip အတွက် အသံ ဖွင့်။ Browser က သင့်ကွန်ပျူတာပေါ်တွင် အသံအသိအမှတ်ပြုနိုင်လျှင် command များကို ပြောနိုင်။ See [မျက်စိမမြင်ဘဲ ပုံဆွဲခြင်း](topic:draft-without-sight)။

**Program အားလုံးတွင်**

- **ဘာသာစကား ၅၄ ခု။** ၁၀ ခုသည် အသစ် (Lithuanian၊ Latvian၊ Bosnian၊ Marathi၊ Telugu၊ Albanian၊ Afrikaans၊ Filipino၊ Swahili၊ Uzbek)။ အင်္ဂလိပ်မှအပ ဘာသာစကားများသည် မူကြမ်း စက်ဖြင့် ပြုလုပ်ထား၊ ဘာသာစကား၏ လူဇာတိ ဖတ်ပြီးမှ။
- **Input device များ။** Trackpad၊ ဘောပင်၊ 3D mouse၊ game controller နှင့် MIDI ထိန်းချုပ်မှုများ။
- **Toolbar အတန်းများနှင့် property grid။** {{ui:ဆက်တင်များ}} › {{ui:အထွေထွေ}} › {{ui:Toolbar rows}} က အခြား app များတွင် Wrap၊ 2 rows သို့မဟုတ် 1 row ကို ပေး။ CadCraft သည် {{ui:ဆက်တင်များ}} › {{ui:CadCraft}} တွင် ကိုယ်ပိုင် ဆက်တင်ကို ထိန်း (see [Toolbar အတန်းများ](topic:settings#toolbar-rows))။ Property grid ကို အခြား app သုံးခုတွင် ဖြစ်၍ CadCraft တွင် မဟုတ်။
- **Problem များ၊ Live နှင့် add-on များ။** Program တိုင်းတွင် သတိပေးသော ဝေမျှထားသော Problems panel၊ CadCraft Studio တွင် မည်သူ ဘယ်မှာရှိသည်ကို ပြသော Live view (see [drawing တစ်ခုကို အတူ အလုပ်လုပ်ခြင်း](topic:work-live))၊ နှင့် add-on စာရင်း။
- **သင်၏ AI ကို ချိတ်ဆက်။** CadCraft Studio မှ ရှစ် app အားလုံးသို့ ချိတ်ဆက်တစ်ခု၊ app တစ်ခုစီအတွက် read-only၊ suggest သို့မဟုတ် edit အဆင့်နှင့်အတူ၊ AI က ပြုလုပ်သည့်အရာ၏ ရိုးရှင်းသော မှတ်တမ်း။ CadCraft တွင် ကိုယ်ပိုင် AI မရှိ၊ Ask in every app က သင်ချိတ်ထားသော AI ကို သုံး။

### 0.8.1 တွင် ပြင်ဆင်ပြီး

- **Properties က 12'-6" အစား 150 ပြခဲ့။** ပေနှင့် လက်မ drawing များတွင်။ App ကိုယ်တိုင် ဖတ်သော field များသည် စာသားကို ပြန်ထား။
- **Classes အပိုင်းကို မှား type အဖြစ် ဖတ်ခဲ့သော DWG ဖိုင်များ** (GitHub cadcraft#5) ကို ယခု မှန်ကန်စွာ ဖွင့်နိုင်။
- **Crosshair သည် pop-up များနောက်တွင် မပေါ်တော့။**
- **Studio နှင့် ထုပ်ပိုး ထုတ်ဝေချက်များသည် ဘာသာစကားကို run time တွင် ပြောင်းနိုင်။** အရင်က အင်္ဂလိပ်သာ။ Platform အားလုံးတွင် မစမ်းရသေး: ဘာသာစကား မပြောင်းလျှင် ပြောပါ။
- **Portrait အတွင်း tablet များ** သည် ကျန်သော grid အမြင့်ကို canvas သို့ ပေး၊ sheet mode သည် 760 px သို့မဟုတ် နည်းသည်တွင် စတင်။
- **Crossing window ဖြင့် STRETCH နှင့် LIMITS** ကို Studio 0.8.0 တွင် အစီရင်ခံခဲ့; 0.8 web build တွင် ဆီလျော်ပြီးသား၊ အစီရင်ခံသူ၏ installer သည် အဟောင်း။ Studio 0.8.1 တွင် ပါ။

### ဤဗားရှင်းတွင် မရှိသေးသည်များ

- **0.8 နှင့် 0.8.1 ကို code-sign မလုပ်ထား။** Windows က သတိပေးနိုင် ({{ui:နောက်ထပ် အချက်အလက်}} ကို ရွေး၊ ထို့နောက် {{ui:ဆက်လုပ်ရန်}}); Mac တွင် CadCraft Studio ကို right-click ၍ {{ui:ဖွင့်ရန်}} ကို ရွေး။ Store build များကို ဆိုင်းငံ့ထား၊ iPad နှင့် iPhone build ကို 0.8.1 အတွက် ပြန်မတည်ဆောက်ရသေး။
- **ဘောပင် ရေးဆွဲမှုနှင့် ဓာတ်ပုံ ပုံဆွဲခြင်း** ကို ယောင်ထားသော ဓာတ်ပုံများနှင့် မောက်စ်သာဖြင့် စမ်း၊ အမှန်ဘောပင်၊ touch screen သို့မဟုတ် စက္ကူပေါ်ရှိ လက်ရေးဖြင့် မစမ်းရသေး။
- **မျက်စိမမြင်ဘဲ ပုံဆွဲခြင်း** ကို အလိုအလျောက် စစ်ဆေးမှုဖြင့်သာ စမ်း၊ မျက်နှာပြင် ဖတ်စက် သို့မဟုတ် မျက်မမြင် စမ်းသပ်သူဖြင့် မစမ်းရသေး။
- **ဝေမျှခြင်း details** တွင် လူနှစ်ဦး စစ်ဆေးမှု မရှိ၊ Team Cloud Plan ဖိုင်တွဲကို Documents ဖိုင်တွဲအဖြစ် မတည်ဆောက်ရသေး။
- **ပေါင်းစည်းခြင်း** သည် CadCraft ၏ DWG နှင့် DXF ဖိုင်များအတွက် အလုပ်လုပ်; အခြား app ဖိုင်များအတွက် မတည်ဆောက်ရသေး။
- **Undo အကြား window များ:** CadCraft သည် ပြီးသည့် အဆင့်တိုင်းကို အစီရင်ခံ၊ သို့သော် Studio တွင် app အားလုံးအတွက် Undo တစ်ခု မရှိသေး; app တစ်ခုစီက ကိုယ်ပိုင် အဆင့်များကို undo။
- **DWG ၏ OLE object များ** ကို ထိန်း၊ သို့သော် နေရာတွင် မဆွဲ။
- **အခြား program များမှ plot style table (CTB ဖိုင်) ဖတ်ခြင်း** ကို တည်ဆောက်ပြီးပြီး၊ သို့သော် အခြား program ၏ ဖိုင်နှင့် စစ်ဆေးမှု မရှိသေး။
- **သင်၏ AI ကို ချိတ်ဆက်:** Studio တွင် တစ်ချက်နှိပ် ချိတ်ဆက်၊ browser AI အတွက် hosted connector၊ Studio အတွင်း သင့်ကိုယ်ပိုင် API key နှင့် ထုတ်ဝေထားသော MCP package များကို ဤထုတ်ဝေမှုတွင် မကတိပြု။

ဤဗားရှင်းမတိုင်မီကို [0.7 တွင် အသစ်ရှိသည်](topic:whats-new-0-7) တွင် ကြည့်ပါ။
