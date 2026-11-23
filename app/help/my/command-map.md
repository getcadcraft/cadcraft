---
title: Command မြေပုံ: ဘာရိုက်ရမလဲ
summary: CadCraft တွင်ရှိသော command အားလုံးကို အတိုကောက်အမည်များနှင့်အတူ A မှ Z အထိ၊ ပရိုဂရမ်ကိုယ်တိုင်မှ ထုတ်ထားသည်၊ အခြား drafting program များမှ ကွာခြားသော အကျင့်များ။
keywords: command map, command များ, alias များ, အတိုကောက်အမည်များ, မှ ပြောင်းလာခြင်း, command စာရင်း, ဘာရိုက်ရမလဲ, ဖျက်ရန်, ညှပ်ရန်, ညီမျှ, ကွာခြားချက်များ
from: 9426856f
---

CadCraft သည် အခြား drafting program များတွင် လူများ သိပြီးသား command နာမည်များနှင့် အတိုကောက်အမည်များကို လက်ခံပါသည်- လိုင်းအတွက် `L`၊ ညှပ်ရန် `TR`၊ ဖျက်ရန် `E` ကို ရိုက်ပါ။ ထို့ကြောင့် အများစုအတွက် သင်ယူရမည့် ဘာသာပြန်ဇယား မရှိပါ- သင်သိသော နာမည်သည် ဤနေရာတွင်လည်း ထိုနာမည်ပင် ဖြစ်ပါသည်။ အောက်ပါစာရင်းသည် CadCraft တွင်ရှိသော command အားလုံး ဖြစ်ပြီး ပရိုဂရမ်ကိုယ်တိုင်မှ ထုတ်ထားပါသည်။ {{key:Enter}} က နောက်ဆုံး command ကို ထပ်လုပ်ပေးပါသည်; command line ရှိ `HELP` က တူညီသော စာရင်းကို ပြပါသည်။

အတူတူ မဟုတ်သော သို့မဟုတ် မတည်ဆောက်ရသေးသော အချို့-

- **Save** က browser တွင် မိတ္တူကို ဒေါင်းလုဒ် ဆွဲပါသည် ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio တွင် ဖိုင်ကို ရေးသားပါသည်။ ကြည့်ရန်- [အခြား drafting software မှ ပြောင်းလာခြင်း](topic:coming-from)။
- **PLOT** က plot style table ဖြင့် PDF (PNG နှင့် SVG ပါ) ကို ပြုလုပ်ပါသည်; page setup manager မရှိပါ။
- **DIMSTYLE** နှင့် **PEDIT** ကို တည်ဆောက်ပြီးပါပြီ; **PEDIT** တွင် Edit-vertex ရွေးချယ်စရာ မရှိပါ (grip များက ထိုအလုပ်ကို လုပ်ပါသည်)။
- **TABLE** ကို မတည်ဆောက်ရသေးပါ; {{cmd:XREF}}၊ {{cmd:SPLINE}} နှင့် {{cmd:WBLOCK}} တို့ကို တည်ဆောက်ပြီးပါပြီ။
- Routine တစ်ခု၏ ကိုယ်ပိုင် command များ (AutoLISP `C:NAME`) ကို {{cmd:APPLOAD}} ဖြင့် တင်ပြီးနောက် ပေါ်လာပါမည်; ဤနေရာတွင် မစာရင်းပါ။

## Command အားလုံး (402)

| Command | အတိုကောက်အမည်များ | ဘာလုပ်ပေးသလဲ |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | ဘယ်ဘက်ခလုတ်ဖြင့် 3D view ကို လှည့်ပါ |
| `ACCESS` | `AX` | Drafting without sight ကို ဖွင့်/ပိတ်: သင့် screen reader မှတဆင့် ရလဒ်များကို ပြောပြခြင်း၊ ပုံဆွဲနေရာတွင် ကီးဘုတ် cursor၊ snap အသံများနှင့် ပြောသော command များ။ |
| `ALIASEDIT` |  | Command alias များကို ဖိုင်စာသား တစ်ခုတည်းဖြင့် တည်းဖြတ် (L, *LINE ပုံစံ) |
| `ALIGN` | `AL` | Source point များ destination point များပေါ် ရောက်အောင် အရာဝတ္ထုများကို ရွှေ့ပြီး လှည့် (အတွဲ တစ်ခု၊ နှစ်ခု သို့မဟုတ် သုံးခု)၊ လိုလျှင် scale ပြောင်း |
| `ALIGNPANEL` | `ALP` | Align and distribute panel ကို ဖွင့် |
| `ALIGNTO` |  | ရွေးထားသော အရာဝတ္ထုများ၏ ဘယ်၊ အလယ်၊ ညာ၊ အပေါ်၊ အလယ်အလတ် သို့မဟုတ် အောက်အနားများကို ညှိ၊ ရွေးချယ်မှု၊ ပထမ သို့မဟုတ် နောက်ဆုံး ရွေးထားသော အရာဝတ္ထု၊ သို့မဟုတ် point တစ်ခုပေါ်တွင် |
| `ANNOALLVISIBLE` | `ANNOALL` | Annotative အရာဝတ္ထုများကို scale အားလုံးတွင် ပြ၊ သို့မဟုတ် viewport (သို့မဟုတ် drawing) ၏ scale သည် ၎င်းတို့၏ စာရင်းတွင် ရှိသည့်နေရာတွင်သာ ပြ |
| `ANNOSCALE` | `CANNOSCALE` | Drawing ၏ annotation scale ကို သတ်မှတ်: annotative စာသားနှင့် dimension များကို တူညီသော အရွယ်အစားဖြင့် print ထုတ်ရန် အရွယ်ပြောင်း |
| `APPLOAD` | `AP` | Application များ တင်: LISP routine (.lsp) နှင့် ၎င်းတို့၏ dialog ဖိုင် (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Arc: 3-Point, Start/Center/End, Start/Center/Angle, Start/Center/Length, Start/End/Angle, Start/End/Direction, Start/End/Radius, Center/Start/End, Center/Start/Angle, Center/Start/Length, Continue |
| `AREA` | `AA` | Point များ သို့မဟုတ် အရာဝတ္ထု၏ ဧရိယာနှင့် perimeter; Add နှင့် Subtract က running total ကို ထိန်းသည် (AA) |
| `ARRAY` | `AR` | အတန်းများနှင့် ကော်လံများအလိုက် ကော်ပီများ၊ သို့မဟုတ် center တစ်ခုပတ်လည် (AR) |
| `ARRAYASSOCIATIVITY` |  | ARRAY command များက ပြင်ဆင်နိုင်သော array (1) သို့မဟုတ် ရိုးရိုး ကော်ပီ (0) ဖြစ်စေမည်ကို သတ်မှတ် |
| `ARRAYCLOSE` |  | Array ၏ source အရာဝတ္ထုများ တည်းဖြတ်ခြင်း ပြီးဆုံး |
| `ARRAYEDIT` |  | Associative ရွေးချယ်စရာဖြင့် ပြုလုပ်ထားသော array ကို ပြောင်း: အရေအတွက်၊ အကွာအဝေး၊ source အရာဝတ္ထုများ၊ item တစ်ခု |
| `ARRAYPATH` |  | လိုင်း၊ arc၊ circle၊ polyline သို့မဟုတ် အခြား curve တလျှောက် အရာဝတ္ထုများ၏ ကော်ပီများ |
| `ARRAYPOLAR` |  | Center point တစ်ခုပတ်လည် ကော်ပီများ |
| `ARRAYRECT` |  | အတန်းများနှင့် ကော်လံများအလိုက် ကော်ပီများ |
| `ASBUILT` | `ASB` | ASBUILT က အဖွဲ့က တိုင်းထားသော as-built point များကို (CSV / TXT၊ EXPORTPOINTS ရေးသည့်အတိုင်း) ဖတ်ပြီး drawing ၏ point များနှင့် နှိုင်းယှဉ်သည်: tolerance အတွင်း သို့မဟုတ် အပြင်၊ မတိုင်းရသေး၊ အပို။ ၎င်းတို့ကို AS-BUILT layer တွင် မှတ်ပြီး CSV report ကို ဒေါင်းလုဒ်ဆွဲပါသည်။ |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Attribute (ဘလောက်က တန်ဖိုးတောင်းသော tag) သတ်မှတ်ပြီး ဘလောက်တွင် ထည့် (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Block reference ၏ attribute တန်ဖိုးများကို command line တွင် တစ်ခုပြီးတစ်ခု တည်းဖြတ် (Enter က တန်ဖိုးကို ထိန်းသည်) |
| `ATTSYNC` |  | ဘလောက်၏ reference များကို ၎င်းတို့၏ attribute သတ်မှတ်ချက်များနှင့် ကိုက်ညီအောင် ပြု: အသစ်များကို default ဖြင့် ထည့်၊ ဖယ်ထားသည်များကို ဖျက်၊ နေရာနှင့် စာသား ပြန်သတ်မှတ်; တန်ဖိုးများ ထိန်း |
| `AUDIT` |  | ဖွင့်ထားသော drawing ကို ပျက်စီးမှုအတွက် စစ်ဆေး: finite မဟုတ်သော ဂဏန်းများ၊ အရွယ်အစားမရှိသော အရာဝတ္ထုများ၊ ပျောက်နေသော layer၊ ဘလောက်၊ style နှင့် linetype များ၊ ကိုယ်ကိုယ်ကို ပါသော ဘလောက်များ၊ ဝေမျှသော id များ၊ ပျက်နေသော dimension နှင့် hatch များ။ တွေ့သည်များကို အမျိုးအစားအလိုက် ပြပြီး ပြင်ခြင်းမပြုမီ မေးသည်; ပြင်ဆင်ချက်သည် undo အဆင့် တစ်ခု။ |
| `AUNITS` | `ANGUNITS` | ထောင့်များကို မည်သို့ ပြပြီး ရိုက်မလဲ: ဒဿမ ဒီဂရီ၊ ဒီဂရီ-မိနစ်-စက္ကန့် သို့မဟုတ် N45°23'30"E ကဲ့သို့ bearing (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Drawing autocomplete ဖွင့်/ပိတ်၊ သို့မဟုတ် drawing ၏ pattern များက ယခု အကြံပြုသည်များကို စာရင်းပြ။ |
| `AUTOCONSTRAIN` |  | Geometry က ဆိုင်ရာ နီးနေပြီးသား နေရာများတွင် coincident၊ horizontal နှင့် vertical constraint များ ထည့် |
| `AUTODIM` | `ADIM` | စည်းမျဉ်းအလိုက် dimension: overall size၊ ဘေးများတလျှောက် chain များ၊ opening များ၊ hole diameter များနှင့် grid spacing၊ ရှိပြီးသားကို ထပ်မလုပ်ဘဲ။ |
| `AUTOSHEET` | `ASH` | Sheet များကို ကိုယ်တိုင် layout ချ: paper နှင့် standard scale များ ရွေးပြီး view တိုင်းကို caption နှင့် title block ဖြင့် နေရာချ။ |
| `BATTMAN` |  | Block attribute manager: ဘလောက် attribute များ၏ အစီအစဉ်၊ tag၊ prompt၊ default နှင့် mode များ၊ ထို့နောက် reference များ update |
| `BCLOSE` |  | Block editor ကို ပိတ်: ဘလောက်ကို သိမ်း သို့မဟုတ် ပြောင်းလဲမှုများ ပယ် |
| `BCONVERT` |  | BCONVERT က ထပ်နေသော geometry ကို ရှာပြီး block reference များအဖြစ် ပြောင်းသည်။ ထပ်နေသော အရာဝတ္ထုများကို ရွေး: open space ရှိ အခြားအရာဝတ္ထု အစုတိုင်း၊ ဆင်ထားပြီး ဘယ်ထောင့်ဖြင့်မဆို လှည့်ထားသော ဂျီအိုမေတြီတူ၊ ရှာတွေ့မည်; Mirrored သို့မဟုတ် Scaled ဖွင့်ထားလျှင် မှန်ပြောင်း ပုံနှင့် အရွယ်ကွဲသော ကော်ပီများလည်း။ ဘလောက်အသစ်အမည်နှင့် base point ပေးပါ; ရွေးချယ်မှုနှင့် ကော်ပီအားလုံးသည် ၎င်းကို ကိုးကားသော reference ဖြစ်လာ၊ တစ်ခုစီ ကိုယ်ပိုင် လည်ပတ်မှုနှင့် scale ရှိ။ သို့မဟုတ် Block ရွေး၍ ရှိပြီးသား ဘလောက်ကို အရာဝတ္ထု ကျွတ်ကြွင်းကော်ပီများ ရှာ။ ကော်ပီတစ်ခု layer၊ အရောင်၊ linetype နှင့် lineweight တူရမည်၊ Properties ကို Ignore မသတ်မှတ်လျှင်။ Locked layer ရှိ အရာဝတ္ထုများကို မထိ။ Undo အဆင့် တစ်ခု။ |
| `BEDIT` | `BE` | Block editor: ဘလောက်၏ အရာဝတ္ထုများနှင့် attribute များကို တည်းဖြတ်; BCLOSE က သိမ်း (BE) |
| `BLEND` |  | BLEND: ဆုံးချင်းနီးရန် ရွေးထားသော အဖွင့် curve နှစ်ခု၏ ဆုံးများကြား spline။ CONtinuity: Tangent က နှစ်ခုလုံး၏ ဦးတည်ချက်ကို လိုက်၊ Smooth က ကွေးပုံကိုလည်း လိုက်သည်။ |
| `BLOCK` | `B`, `BMAKE` | အရာဝတ္ထုများမှ ဘလောက်တစ်ခု ပြု (၎င်းတို့သည် reference တစ်ခု ဖြစ်လာ) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: ဘလောက်တစ်ခု၏ reference အားလုံး နောက်တစ်ခု၏ reference ဖြစ်လာ၊ နေရာ၊ scale နှင့် rotation တူ။ နှစ်ခုလုံးတွင်ရှိသော attribute တန်ဖိုးများ ထိန်း။ |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE က Blocks panel ကို cursor ၏ filter တွင် ပြ။ Panel က ဘလောက်တစ်ခုစီ၏ ပုံ (နောက်ဆုံး ထားသည်များ ရှေ့ဆုံး) ကို စာရင်း သို့မဟုတ် ဂရစ်ဖြင့် ပြ; ပုံကို နှိပ်ပါ သို့မဟုတ် drawing ပေါ် ဆွဲချပြီး INSERT ဖြင့် ဘလောက်ကို နေရာချပါ။ Libraries အောက်တွင် ကိုယ်ပိုင် DWG သို့မဟုတ် DXF ဖိုင် ထည့်နိုင်; ၎င်း၏ ဘလောက်များ ပုံဖြင့် စာရင်းပြ၊ နေရာချသည့်အခါ ဤ drawing သို့ ကူးထည့်။ CadCraft Studio တွင် drawing ဖိုင်တွဲ ထည့်နိုင်ပြီး ဖိုင်နှင့် ဖိုင်တွဲများ မှတ်ထား။ |
| `BOMEDIT` | `BOMCOLUMNS` | Bill of materials table ၏ ကော်လံများ၊ grouping၊ sorting၊ title၊ total နှင့် remark များ |
| `BOMEXPORT` |  | Bill of materials table ကို .csv ဖိုင်အဖြစ် သိမ်း |
| `BOMTABLE` | `BOM` | Zone တစ်ခု သို့မဟုတ် drawing တစ်ခုလုံး၏ live bill of materials table |
| `BOMUPDATE` |  | Bill of materials table အားလုံးကို ယခု update၊ ခဲထားသည်များပါ |
| `BOMZONE` | `BZONE` | BOM အတွက် drawing ၏ အမည်ပေးထားသော နေရာ: ထောင့်နှစ်ခု၊ polygon သို့မဟုတ် ပိတ်ထားသော အရာဝတ္ထု၏ outline |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): ပိတ်ထားသော ဧရိယာ အတွင်းမှ point တစ်ခု ရွေး၍ ၎င်းပတ်လည် ပိတ်ထားသော polyline ရယူ။ Arc များသည် arc ဖြစ်နေဆဲ။ Islands က အတွင်းရှိ ဧရိယာများကိုလည်း outline ပေးသည်။ |
| `BOX` |  | ဘောက်စ်: ထောင့်နှစ်ခုနှင့် အမြင့် (3D) |
| `BPARAMETER` | `BPARAM` | မပြုလုပ်ရသေးပါ: ဘလောက်တစ်ခုသို့ parameter (ဥပမာ Visibility) ထည့်ခြင်း။ |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Block parameter များ: formula ပါသော အမည်ပေး parameter များနှင့် ဘလောက်တစ်ခုတွင် visibility parameter အများအပြား။ Block editor တွင် အလုပ်လုပ် (ရွေးထားသော အရာဝတ္ထုများကို state တစ်ခုသို့ သတ်မှတ်) နှင့် ရွေးထားသော reference တွင် (၎င်း၏ ကိုယ်ပိုင် တန်ဖိုးနှင့် state များ)။ |
| `BREAK` | `BR` | Line၊ arc၊ circle သို့မဟုတ် polyline ကို point နှစ်ခုကြား ဖြတ် (BR) |
| `BREAKATPOINT` |  | Line၊ arc သို့မဟုတ် polyline ကို point တစ်ခုတွင် နှစ်ပိုင်းခွဲ |
| `BREAKLINE` |  | Break symbol ပါသော လိုင်းတစ်ခု ဆွဲ; ၎င်း၏ အရွယ်အစားနှင့် ဆုံးများ ကျော်ထွက်ချဲ့ထွင်မှုကို မှတ်ထား။ |
| `BREPLACE` |  | BREPLACE က ဘလောက်တစ်ခုကို နောက်တစ်ခုဖြင့် လဲ။ Selected: block reference များ ရွေး၍ အစားထိုးမည့် ဘလောက်ကို အမည်ပေး။ All: ဘလောက်နှင့် ၎င်း၏ အစားထိုးမှုကို အမည်ပေး၊ space တိုင်းနှင့် အခြားဘလောက်အတွင်း reference အားလုံး ပြောင်းမည်။ Reference သည် ၎င်း၏ နေရာ၊ scale၊ rotation နှင့် layer ကို ထိန်း၊ ဘလောက်နှစ်ခုလုံးတွင်ရှိသော attribute တန်ဖိုးများ ထိန်း၊ ဘလောက်အသစ်တွင် နေရာမရှိသော တန်ဖိုးများ ပယ်ပြီး အမည်ပေးသည်။ |
| `BSEARCH` |  | BSEARCH က ဘလောက်များ ရှာ။ Name: ဘလောက်နာမည်၏ အစိတ်အပိုင်း၊ သို့မဟုတ် * နှင့် ? ပါသော pattern။ Attribute: reference ၏ attribute က ထားသော တန်ဖိုး (သို့မဟုတ် TAG=value)။ Geometry: အရာဝတ္ထုများ သို့မဟုတ် block reference တစ်ခု ရွေး၊ ပုံသဏ္ဍာန် အနည်းဆုံး 85% တူသော ဘလောက်များကို အကောင်းဆုံးဦးစွာ စာရင်း၊ အရွယ်အစား၊ လှည့်ခြင်းနှင့် mirror မစဉ်းစား။ Open space တွင် တွေ့သော reference များကို ရွေးထားပြီး နောက် command အတွက် အဆင်သင့်။ |
| `BURST` |  | Block reference များကို explode လုပ်ပြီး attribute တို့ ပြောသည်ကို ထိန်း: တန်ဖိုးတစ်ခုစီ attribute ၏ layer ပေါ်တွင် စာသား ဖြစ်လာ။ |
| `BVHIDE` | `BVH` | Block editor တွင်: လက်ရှိ visibility state တွင် အရာဝတ္ထုများ ဝှက်။ |
| `BVSHOW` | `BVSH` | Block editor တွင်: လက်ရှိ visibility state က ဝှက်ထားသော အရာဝတ္ထုများကို ပြ (ရွေးရန် မှိန်ပြ)။ |
| `BVSTATE` | `BVS` | Block editor တွင်၊ visibility state ရှိသော ဘလောက်ပေါ်: state တစ်ခုသို့ ပြောင်း၊ သို့မဟုတ် state ထည့်၊ အမည်ပြောင်း၊ ဖျက်။ |
| `CAL` |  | Length သို့မဟုတ် ဂဏန်း တွက်: + − * / နှင့် ကွင်းများ၊ မည်သည့်နေရာတွင်မဆို ရိုက်သလို |
| `CENTERLINE` | `CL` | လိုင်းနှစ်ခုကြား center line: ကြားတွင် အလယ်၊ သို့မဟုတ် ဆုံသည့်အခါ bisector တလျှောက် (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Center mark: circle သို့မဟုတ် arc ၏ center တွင် လက်ကမ်းပုံ၊ ၎င်းအပြင်သို့ center line များ (CM) |
| `CHAMFER` | `CHA` | ထောင့်နှစ်ခု line အကြား ဘေးဖြတ် (D အကွာအဝေး နှစ်ခု၊ A အရှည်နှင့် ထောင့်၊ P polyline ၏ ထောင့်တိုင်း) |
| `CHSPACE` |  | CHSPACE: viewport မှတဆင့် sheet နှင့် model ကြား အရာဝတ္ထုများ ရွှေ့။ ၎င်းတို့ကို scale ပြောင်းပြီး လှည့်ထား၍ တခြားဘက်မှ ကြည့်လျှင် တူညီပုံ ပေါ်သည်။ Sheet တွင် model သို့ သွား၊ MSPACE ဖြင့် viewport တစ်ခုမှ အလုပ်လုပ်နေစဉ် sheet သို့ လာ။ |
| `CIRCLE` | `C` | Center နှင့် radius၊ diameter၊ point 2 သို့မဟုတ် 3 |
| `CLASS` |  | ရွေးထားသော အရာဝတ္ထုများကို class တစ်ခုထဲ ထည့်၊ သို့မဟုတ် ဘာမျှ မရွေးလျှင် active class သတ်မှတ် (? က စာရင်းပြ) |
| `CLASSES` | `CLS` | Classes panel: class များက layer များကြား အရာဝတ္ထုများကို စီ၊ ပြ၊ ဖျောက်၊ ပုံစံချ၊ viewport တစ်ခုချင်းတွင် ထပ်ရေး (CLS) |
| `COMMANDLINE` | `CMDLINE` | Command line ကို ဆိုက်ထား သို့မဟုတ် မျော၊ လိုင်းတစ်ခုတည်း လုပ်၊ history လိုင်း သတ်မှတ်၊ သို့မဟုတ် history ဖွင့် (F2) |
| `COMPARESETTINGS` | `CMPSET` | Dimension style၊ text style၊ layer၊ sheet သို့မဟုတ် unit များ နှိုင်းယှဉ်: ဤ drawing တွင် နှစ်ခု၊ သို့မဟုတ် ဤ drawing နှင့် ဖွင့်ထားသော အခြားတစ်ခု၊ တန်ဖိုးတစ်ခု ကူး။ |
| `CONSTRAINTBAR` | `CBAR` | Constraint bar များကို ပြ သို့မဟုတ် ဖျော (Showall / Hideall၊ သို့မဟုတ် object တစ်ခုချင်း) |
| `COPY` | `CO`, `CP` | အရာဝတ္ထုများကို သင်နှိပ်သလောက် ကော်ပီကူး |
| `COPYBASE` |  | Base point ရွေး၍ အရာဝတ္ထုများကို clipboard သို့ ကူး |
| `COPYCLIP` |  | အရာဝတ္ထုများကို clipboard သို့ ကူး (Ctrl+C); PASTECLIP က နေရာချ |
| `COUNT` | `BCOUNT` | Block reference များ ရေတွက်: တစ်ခု ရွေး၍ ၎င်း၏ block ၏ reference အားလုံးကို ရွေးပြီး ရေတွက် |
| `COUNTTABLE` |  | Block count များ၏ table ထား |
| `CREDITS` |  | Library credit များကို drawing ထဲ table အဖြစ် ထည့်။ ထပ်လုပ်လျှင် ယခု drawing ရှိ item များမှ table ကို update။ |
| `CURSORSIZE` |  | Crosshair ၏ အရွယ်အစား: 100 က drawing တစ်ဖက်မှ တစ်ဖက်ထိ ပြေး (Settings › Cursor › Full screen) |
| `CUTCLIP` |  | အရာဝတ္ထုများကို clipboard သို့ ဖြတ်ယူ (Ctrl+X): ကူးပြီး ဖျက် |
| `CYLINDER` | `CYL` | Cylinder: center၊ radius နှင့် အမြင့် (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | ဘလောက်များ၊ attribute များနှင့် object property များကို drawing ထဲ table သို့မဟုတ် CSV ဖိုင်အဖြစ် စာရင်းပြ |
| `DATALINK` | `DL` | CSV ဖိုင်မှ table တစ်ခု၊ ဖိုင်ကို မှတ်ထား၍ ထပ်ဖတ်နိုင် |
| `DATALINKUPDATE` | `DLU` | Data link ၏ ဖိုင်ကို ထပ်ဖတ်ပြီး ၎င်း၏ table များကို ပြန်ဖြည့် |
| `DCALIGNED` | `DCALI` | Dimensional constraint: point များကြား၊ point နှင့် line ကြား သို့မဟုတ် line နှစ်ခုကြား အမှန်တကယ် အကွာအဝေး |
| `DCANGULAR` | `DCANG` | Dimensional constraint: line နှစ်ခုကြား ထောင့်၊ သို့မဟုတ် arc ၏ |
| `DCCONVERT` |  | Constrainable geometry ပေါ်ဆွဲထားသော dimension များကို dimensional constraint များအဖြစ် ပြောင်း |
| `DCDIAMETER` | `DCDIA` | Dimensional constraint: circle သို့မဟုတ် arc ၏ diameter |
| `DCDISPLAY` |  | Drawing ပေါ်ရှိ dimensional constraint များကို ပြ သို့မဟုတ် ဖျော |
| `DCHORIZONTAL` | `DCHOR` | Dimensional constraint: အလျားလိုက် အကွာအဝေး |
| `DCLINEAR` | `DCLIN` | Dimensional constraint: အလျားလိုက် သို့မဟုတ် ဒေါင်လိုက် အကွာအဝေး၊ နေရာချသည့်နေရာမှ |
| `DCRADIUS` | `DCRAD` | Dimensional constraint: circle သို့မဟုတ် arc ၏ radius |
| `DCVERTICAL` | `DCVER` | Dimensional constraint: ဒေါင်လိုက် အကွာအဝေး |
| `DELBLOCKS` |  | ဘလောက်များ ဖျက်: reference အားလုံး (nested များပါ၊ sheet တိုင်းတွင်) နှင့် definition များ |
| `DELCONSTRAINT` | `DELCON` | ရွေးထားသော အရာဝတ္ထုများမှ constraint အားလုံး (geometric နှင့် dimensional) ဖယ်ရှား |
| `DELOPENING` |  | တံခါး သို့မဟုတ် ပြတင်းပေါက်ကို နံရံမှ ဖယ်ရှား။ |
| `DESCRIBE` | `DESC` | Drawing တွင်ရှိသည်ကို ပြော: အရာဝတ္ထု အရေအတွက်၊ အမျိုးအစား၊ အရွယ်အစား၊ ရွေးထားသည်များ။ |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | ရွေးချယ်မှုကို ရှင်း (Esc) |
| `DETAILS` | `DET` | သင့်ကုမ္ပဏီ၏ ကိုယ်ပိုင် details များ၊ ဆွဲနေသည်အတွက် ရှာတွေ့: ရှာ၊ block ထည့်၊ စာရင်း၊ ဖယ်ရှား၊ အကြံပြုချက်များ ဖွင့်/ပိတ်။ |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | စာသားမှ diagram ဆွဲ: Mermaid flowchart၊ PlantUML component diagram၊ D2၊ from-to စာရင်း သို့မဟုတ် draw.io XML၊ တည်းဖြတ်နိုင်သော block နှင့် connector များအဖြစ် |
| `DIMALIGNED` | `DAL`, `DIMALI` | Point နှစ်ခုကြား အမှန်တကယ် အကွာအဝေး |
| `DIMANGULAR` | `DAN`, `DIMANG` | Line နှစ်ခုကြား ထောင့်၊ arc ၏၊ သို့မဟုတ် point သုံးခုဖြင့် |
| `DIMARC` | `DAR` | Arc length dimension: arc တလျှောက် အကွာအဝေး၊ arc symbol ဖြင့် (DAR) |
| `DIMASZ` |  | Dimension setting: Arrow size |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Base line တစ်ခုမှ ပုံဆိုင်းထားသော dimension များ |
| `DIMBREAK` | `DBREAK` | Dimension နှင့် extension line များကို အခြားအရာဝတ္ထုများ ဖြတ်သည့်နေရာတွင် ဖြတ် (Auto)၊ point နှစ်ခုကြား (Manual) သို့မဟုတ် break များကို ဖယ် |
| `DIMCONSTRAINT` | `DCON` | Dimensional constraint များ: linear၊ aligned၊ angular၊ radius၊ diameter၊ convert |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Dimension chain၊ တစ်ခုစီသည် နောက်ဆုံး၏ အဆုံးမှ စ |
| `DIMDEC` |  | Dimension setting: Decimal places |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Arc သို့မဟုတ် circle ၏ diameter |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Dimension များကို ချိတ်ထားသော အရာဝတ္ထုများမှ လွတ်ပေး (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Dimension စာသား ပြော (Home, New text, Rotate) သို့မဟုတ် extension line များကို စောင်း (Oblique) |
| `DIMEXE` |  | Dimension setting: Extension beyond the dimension line |
| `DIMEXO` |  | Dimension setting: Offset from the origin |
| `DIMGAP` |  | Dimension setting: Gap round the text |
| `DIMINSPECT` |  | Inspection dimension: တန်ဖိုးပတ်လည် frame၊ label နှင့် အပိုင်းကို ဘယ်လောက်ကြိမ် စစ်သလဲ |
| `DIMJOGGED` | `DJO`, `JOG` | Jogged radius dimension: center ဝေးသည့်အခါ နီးသော point မှ ဆွဲသော radius (DJO) |
| `DIMJOGLINE` | `DJL` | Linear သို့မဟုတ် aligned dimension line တွင် jog symbol ထည့်၊ အကွာအဝေး scale အတိုင်း မဆွဲကြောင်း ပြ (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | အလျားလိုက် သို့မဟုတ် ဒေါင်လိုက် အကွာအဝေး (ထောင့်မည်သည့်ဖြစ်စေ R) |
| `DIMLUNIT` |  | Dimension setting: length format (1 scientific၊ 2 decimal၊ 3 engineering၊ 4 architectural၊ 5 fractional) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinate dimension: point တစ်ခု၏ UCS origin မှ X သို့မဟုတ် Y အကွာအဝေး၊ leader တွင် (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | ရွေးထားသော dimension များပေါ်တွင် dimension variable များကို override၊ style မပြောင်း; Clear က style သို့ ပြန်ထား (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Arc သို့မဟုတ် circle ၏ radius |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Dimension ၏ point များကို အရာဝတ္ထုများနှင့် ချိတ်၊ ၎င်းတို့ ရွေ့သည့်အခါ လိုက်၍ ထပ်တိုင်း (DRE) |
| `DIMSCALE` |  | Dimension setting: Overall scale (အရွယ်အစား × ဤတန်ဖိုး) |
| `DIMSPACE` |  | Base dimension မှ တိုင်းထားသော ပြိုင် dimension များကြား တူညီသော အကွာအဝေး (0 က တန်းစီ၊ Auto က စာသားအမြင့်၏ နှစ်ဆ) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Dimension style များ ပြု၊ ပြော၊ လက်ရှိသတ်မှတ်၊ ဖျက်၊ သုံး၊ နှိုင်းယှဉ် (dialog; command line တွင် -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | Dimension စာသားကို dimension line ၏ ဘယ်၊ ညာ သို့မဟုတ် အလယ်သို့ ရွှေ့၊ သို့မဟုတ် လှည့် |
| `DIMTEXTUNIT` | `DTU` | Dimension စာသား mm၊ cm၊ m သို့မဟုတ် km ဖြင့်၊ သို့မဟုတ် drawing ၏ ကိုယ်ပိုင် unit: ရွေးထားသော dimension များ၊ မဟုတ်လျှင် အသစ်များ (DTU) |
| `DIMTXT` |  | Dimension setting: Text height |
| `DIST` | `DI` | Point နှစ်ခုကြား အကွာအဝေးနှင့် ထောင့် |
| `DISTRIBUTE` |  | ရွေးထားသော အရာဝတ္ထုများကို ညီညီ ခွဲဝေ၊ ဘေးတိုက် သို့မဟုတ် အပေါ်အောက်: center များကြား အဆင့်တူ သို့မဟုတ် gap တူ; အပြင်ဆုံးနှစ်ခု ထား |
| `DIVIDE` | `DIV` | DIVIDE (DIV): line၊ arc၊ circle၊ polyline၊ spline သို့မဟုတ် ellipse ကို ညီမျှသော အပိုင်းများအဖြစ် ဖြတ်သော အမှတ်များ။ Point များ၊ သို့မဟုတ် Block ဖြင့် အမှတ်တိုင်းတွင် block တစ်ခု။ |
| `DOCUMENTS` | `DOCS` | Documents panel ဖွင့်: project ဖိုင်တွဲ၏ drawing များကို check out/in၊ revision၊ release state နှင့် အတည်ပြုချက် |
| `DOOR` | `DR` | နံရံတွင် တံခါးထား။ သင်နှိပ်သော ဘက်သည် ပွင့်သွားမည့်ဘက် ဖြစ်သည်။ |
| `DRAWORDER` |  | Draw order ပြော: object များကို ရှေ့သို့ ယူ၊ နောက်သို့ ပို့၊ သို့မဟုတ် အခြား object များ၏ အပေါ် သို့မဟုတ် အောက်တွင် ထား။ |
| `DUPLICATE` | `DUP` | Pointer နှင့်အတူ ရွေ့သော ကော်ပီ: နေရာချရန် နှိပ် (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Drawing ၏ property များ: title၊ author နှင့် အခြား၊ သင့်ကိုယ်ပိုင် name နှင့် value တွဲများ |
| `DXFOUT` |  | Drawing ကို DXF R12 အဖြစ် ဒေါင်းလုဒ် (Save က ၎င်း၏ ပုံစံကို ထိန်း) |
| `EATTEDIT` | `DDATTE` | Block reference ၏ attribute များ တည်းဖြတ်: တန်ဖိုး၊ စာသားနှင့် property များ၊ attribute တစ်ခုချင်း |
| `ELLIPSE` | `EL` | Axis endpoint များနှင့် တခြား half-axis |
| `ERASE` | `E`, `DELETE` | အရာဝတ္ထုများ ဖယ်ရှား |
| `EXPLODE` | `X` | Polyline၊ block နှင့် dimension များကို ၎င်းတို့၏ အစိတ်အပိုင်းများအဖြစ် ခွဲ |
| `EXPORT` | `EXP` | Add-on ရေးသော ဖိုင်အမျိုးအစားဖြင့် drawing ၏ မိတ္တူကို သိမ်း |
| `EXPORT3D` | `3DEXPORT` | 3D model ကို export: GLB၊ OBJ သို့မဟုတ် STL |
| `EXPORTPOINTS` | `EXPPTS` | Point များနှင့် attribute တစ်ခု (description အဖြစ်) ပါသော block insertion point များကို CSV သို့မဟုတ် TXT ဖိုင်သို့ ရေး (PNEZD၊ PENZD သို့မဟုတ် XYZ) BIM နှင့် survey program များအတွက် |
| `EXTEND` | `EX` | အရာဝတ္ထုများကို အခြားတစ်ခုနှင့် တွေ့အောင် ရှည်ချဲ့: အဆုံးအနီးတွင် နှိပ်၊ အများအပြား ဖြတ်ဆွဲ၊ သို့မဟုတ် Shift+click ဖြင့် ညှပ် |
| `EXTRIM` |  | EXTRIM: cutting edge တစ်ခုရွေး၊ ထို့နောက် side တစ်ခု။ Edge ကို ဖြတ်သော အရာအားလုံး ထို side တွင် ညှပ်မည်။ သွားမည့် အပိုင်းများ pointer ရွှေ့သည့်အခါ ပြ။ |
| `EXTRUDE` | `EXT` | ပိတ်ထားသော 2D အရာဝတ္ထုများကို solid အဖြစ် extrude (3D) |
| `FIELD` |  | စာသား၊ table cell သို့မဟုတ် attribute တွင် field ထည့်: ရက်စွဲ၊ ဖိုင်အမည်၊ sheet နံပါတ်၊ drawing property၊ object ၏ ဧရိယာ သို့မဟုတ် အရှည်၊ သို့မဟုတ် formula |
| `FILLET` | `F` | ရှစ်ခု object နှစ်ခုကြား ထောင့်ကို ကွေး သို့မဟုတ် စတုရန်းပြု (R radius၊ P polyline ၏ ထောင့်တိုင်း၊ M အများအပြား) |
| `FIND` |  | စာသား၊ attribute တန်ဖိုးနှင့် dimension စာသားတွင် စကားလုံးများ ရှာ၍ အစားထိုး |
| `FLATTEN` |  | ရွေးထားသော အရာဝတ္ထုများ၏ height (Z) နှင့် thickness ကို 0 ထား၊ ၎င်းတို့ သုံးထားသော ဘလောက်များတွင်လည်း။ |
| `FLOOR` |  | ဆွဲရန် ထပ်ကို ရွေး၊ တစ်ခု ထည့်၊ သို့မဟုတ် ရွေးချယ်မှုကို ထိုထပ်သို့ ရွှေ့ သို့မဟုတ် ကူး။ |
| `FLOORLAYERS` |  | ထပ်များကို Floor-Layer အမည်ရှိ layer များအဖြစ် ပြော၊ ထပ်မရှိသော သူထံ ပို့မည့် ဖိုင်အတွက်။ |
| `FLOORS` | `FLR` | Floors panel ဖွင့်: model space တစ်ခုတည်းတွင် ထပ်များ ပုံ့ထား။ |
| `GCCOINCIDENT` |  | Constraint: point နှစ်ခု တွေ့၊ သို့မဟုတ် point တစ်ခု object ပေါ်တွင် ကျန် |
| `GCCOLLINEAR` |  | Constraint: line နှစ်ခု တစ်ကြောင်းတည်းတွင် ကျန် |
| `GCCONCENTRIC` |  | Constraint: circle သို့မဟုတ် arc နှစ်ခု center တူ |
| `GCEQUAL` |  | Constraint: line နှစ်ခု အရှည်တူ၊ သို့မဟုတ် circle/arc နှစ်ခု radius တူ |
| `GCFIX` |  | Constraint: point သို့မဟုတ် object တစ်ခုလုံး နေရာတူ |
| `GCHORIZONTAL` |  | Constraint: line (သို့မဟုတ် point နှစ်ခု) အလျားလိုက် |
| `GCPARALLEL` |  | Constraint: line နှစ်ခု ပြိုင် |
| `GCPERPENDICULAR` |  | Constraint: line နှစ်ခု ထောင့်မှန် |
| `GCSYMMETRIC` |  | Constraint: point၊ line သို့မဟုတ် circle နှစ်ခု line တစ်ခုအပေါ် ကြည့်မှန်ပုံ |
| `GCTANGENT` |  | Constraint: line နှင့် circle သို့မဟုတ် arc (သို့မဟုတ် နှစ်ခု) tangent ဖြစ်နေ |
| `GCVERTICAL` |  | Constraint: line (သို့မဟုတ် point နှစ်ခု) ဒေါင်လိုက် |
| `GDSIN` | `GDS` | IC layout (GDSII stream ဖိုင်) ကြည့်: layer နှင့် datatype တိုင်းကို drawing layer အဖြစ်၊ flat၊ user unit ဖြင့်; ကြည့်ရန်နှင့် တိုင်းရန်သာ (lab spike) |
| `GEOMCONSTRAINT` | `GCON` | Geometric constraint များ: အလျားလိုက်၊ ဒေါင်လိုက်၊ ပြိုင်၊ tangent၊ coincident… |
| `GLBOUT` |  | 3D model ကို GLB (glTF) အဖြစ် export |
| `GRADIENT` | `GD` | ဧရိယာတစ်ခုကို အရောင်တစ်ခု သို့မဟုတ် နှစ်ခု gradient ဖြင့် ဖြည့် |
| `GRID` |  | Grid သတ်မှတ်: မျဉ်းများကြား အကွာအဝေး၊ Nth line ကို major line အဖြစ်၊ ON သို့မဟုတ် OFF၊ သို့မဟုတ် zoom ကို ပြန်လိုက်ရန် Auto |
| `GRIDMOVE` | `GM` | Grid line တစ်ခု ရွှေ့ပြီး ၎င်းပေါ်ချိတ်ထားသောအရာများ ယူသွား: နံရံများ ဆန့်၊ ကော်လံများ၊ bubble နှင့် tag များ ရွေ့၊ dimension များ လိုက် |
| `GROUP` | `G` | GROUP (G): ရွေးထားသော အရာဝတ္ထုများကို ဝေမျှသော အမည်ပေး။ ၎င်းတို့ထဲမှ တစ်ခုကို နှိပ်လျှင် အားလုံးကို ရွေးပေးသည်။ အမည်တွင် Enter က အမည်မဲ့ group ပြုလုပ်သည်။ |
| `GROUPEDIT` |  | GROUPEDIT: group ကို ပြော။ ၎င်း၏ object တစ်ခုကို ရွေး သို့မဟုတ် Name ပေး၊ ထို့နောက် Add သို့မဟုတ် Remove၊ REName၊ Description ပြော၊ သို့မဟုတ် နှိပ်လျှင် အပြည့်ရွေးမရွေး သတ်မှတ် |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | ဧရိယာကို solid fill သို့မဟုတ် pattern ဖြင့် ဖြည့်: အတွင်းမှ နှိပ်၊ သို့မဟုတ် ပိတ်ထားသော အရာဝတ္ထုများ ရွေး (H) |
| `HATCHEDIT` | `HE` | Hatch ကို ပြော: pattern၊ scale၊ angle၊ origin နှင့် boundary သို့ ချိတ်ဆက်မှု။ |
| `HATCHGENERATEBOUNDARY` | `HGB` | Hatch မှ boundary polyline များကို ပြန်ပြု၊ ချိတ်ထား သို့မဟုတ် မချိတ်ထား |
| `HATCHTOBACK` |  | Hatch အားလုံးကို အခြားအရာအားလုံး၏ နောက်သို့ ပို့။ |
| `HELP` | `?` | ဤစာရင်း |
| `HIDEOBJECTS` |  | UNISOLATEOBJECTS အထိ ရွေးထားသော အရာဝတ္ထုများကို ဝှက်။ Drawing နှင့်အတူ မသိမ်း။ |
| `HISTORY` | `HIST` | HISTORY (HIST): drawing ၏ version များ — Studio က သိမ်းသည့်အခါ ဤကွန်ပျူတာတွင် ထိန်းထားသော မိတ္တူများနှင့် cloud ၏ version များ — ဖွင့်၊ ပြန်ယူ၊ ပြောင်းလဲမှုကို အရောင်ဖြင့် နှိုင်းယှဉ် |
| `ID` |  | Point ၏ coordinate |
| `IMAGE` | `IM` | CadCraft သို့ drawing သုံးသော ပုံဖိုင်များ ပေး (DWG က ၎င်းတို့ ရှိရာနေရာသာ သိမ်း) |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | ဖိုင်မှ ပုံ (PNG သို့မဟုတ် JPEG) နေရာချ။ |
| `IMAGECLIP` | `ICL` | ပုံကို စတုဂံ သို့မဟုတ် polygon သို့ clip၊ သို့မဟုတ် ၎င်း၏ clip ကို ဖယ်။ |
| `IMPORT` | `IMP` | Add-on ဖတ်သော အမျိုးအစား ဖိုင်တစ်ခုကို ဤ drawing သို့ သွင်း |
| `INSERT` | `I`, `DDINSERT` | ဘလောက်တစ်ခု နေရာချ (S scale၊ R rotate); F ဖြင့် DWG/DXF ဖိုင်မှ၊ L ဖြင့် library မှ |
| `INTERSECT` | `IN` | Solid များ ဘုံရှိသည်များကိုသာ ထား (3D)၊ သို့မဟုတ် 2D region များ ဝေမျှသော ဧရိယာ |
| `ISODRAFT` |  | ISODRAFT: isometric drafting ဖွင့်/ပိတ်၊ သို့မဟုတ် Left၊ Top သို့မဟုတ် Right plane ပေါ်သို့ တိုက်ရိုက်။ ဖွင့်ထားစဉ် Ortho နှင့် polar tracking က plane ၏ axis နှစ်ခုကို လိုက်၊ grid ကို isometric ဆွဲ၊ ELLIPSE တွင် Isocircle ရှိ။ |
| `ISOLATEOBJECTS` | `ISOLATE` | ရွေးထားသော အရာဝတ္ထုများသာ ပြ; UNISOLATEOBJECTS အထိ ကျန်တာ ဝှက်။ Drawing နှင့်အတူ မသိမ်း။ |
| `ISOPLANE` |  | ISOPLANE: isometric plane ရွေး (Left၊ Top သို့မဟုတ် Right)။ Enter က နောက်တစ်ခု၊ isometric drafting ဖွင့်စဉ် F5 ကဲ့သို့။ |
| `JOIN` | `J` | ဆုံးချင်း ဆုံသော line၊ arc နှင့် polyline များကို polyline တစ်ခု၊ တစ်ကြောင်းတည်းရှိ line များကို line တစ်ခုအဖြစ် ပေါင်း (J) |
| `LASER` | `LASERCUT` | Laser panel ဖွင့်: layer များကို laser cutter သို့မဟုတ် engraver သို့ ပို့ (GRBL G-code) |
| `LASSOMODE` |  | ဖိ၍ ဆွဲလျှင် lasso (1) သို့မဟုတ် စတုဂံ (0) ဆွဲ |
| `LAYDEL` |  | Layer တစ်ခုနှင့် ၎င်းပေါ်ရှိ object အားလုံး ဖျက် (model၊ sheet နှင့် block များတွင်) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Layer manager ဖွင့်: layer အားလုံးကို table တစ်ခုတည်းတွင် |
| `LAYERPANEL` |  | Layers panel ကို ပြ |
| `LAYFRZ` |  | ရွေးသော object တစ်ခုစီ၏ layer ကို freeze |
| `LAYGROUP` | `LG` | Layers panel ရှိ folder များအဖြစ် layer များကို အုပ်စုဖွဲ့ |
| `LAYISO` |  | ရွေးထားသော အရာဝတ္ထုများ၏ layer များကို ဖွင့်ထား၊ အခြား layer အားလုံး ပိတ် |
| `LAYLOCKFADE` |  | Locked layer ပေါ်ရှိ object များ မှိန်ပုံနှင့် click ရောက်/မရောက် သတ်မှတ် |
| `LAYMCUR` |  | ရွေးသော object ၏ layer ကို current လုပ် |
| `LAYMRG` |  | Layer များ ပေါင်း: ၎င်းတို့၏ object များ target layer သို့ ရွေ့ပြီး ပေါင်းထားသော layer များ ပျောက် |
| `LAYOFF` |  | ရွေးသော object တစ်ခုစီ၏ layer ကို ပိတ် |
| `LAYON` |  | Layer အားလုံးကို ဖွင့် |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Title block နှင့် viewport တစ်ခုပါသော sheet အသစ် |
| `LAYTHW` |  | Layer အားလုံးကို thaw |
| `LAYUNISO` |  | LAYISO ပိတ်ထားသော layer များကို ပြန်ဖွင့် |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | ဟောင်း Vietnamese font (TCVN3 / ABC font များ၊ VNI font များ) ဖြင့် ရိုက်ထားသော စာသားကို Unicode သို့ ပြော။ ဤစာသားကို ယခုပင် ဖတ်ရသလို ပြနေပြီးဖြစ်သည်; ဤကား ၎င်းကို အပြီးတိုင် ပြန်ရေး၊ အရေအတွက်နှင့် undo အဆင့် တစ်ခု။ |
| `LENGTHEN` | `LEN` | Line၊ arc နှင့် polyline ကို ရှည်/တို ပြု: ပမာဏ၊ ရာခိုင်နှုန်း၊ စုစုပေါင်း သို့မဟုတ် ဆွဲ (LEN) |
| `LIBRARY` | `LIB` | Library panel: item များ နေရာချ၊ update စစ်၊ credit |
| `LIMITS` |  | Drawing limit များ သတ်မှတ်: ON၊ OFF သို့မဟုတ် ဘယ်အောက်နှင့် ညာအပေါ် ထောင့်များ။ Limit ON ဖြစ်စဉ် ပြင်ပ point များကို ငြင်းသည်။ |
| `LINE` | `L` | Straight segment များ၊ တစ်ခုစီ ကိုယ်ပိုင် object |
| `LINETYPE` | `LT`, `CELTYPE` | Object အသစ်များ ရရှိမည့် linetype (layer အလိုက်၊ block အလိုက် သို့မဟုတ် နာမည်ရှိ) |
| `LINKVIEWS` | `SYNCVIEWS` | Pane အားလုံး pan/zoom အတူ (split screen)၊ drawing နှစ်ခု သို့မဟုတ် revision နှိုင်းယှဉ်ရန် |
| `LISPEDIT` | `VLIDE` | LISPEDIT (သို့မဟုတ် VLIDE) က LISP editor ဖွင့်: routine ရေး၊ တင်နှင့် စမ်းရန် window။ Load into the drawing က ဖိုင်ကို APPLOAD ဖြင့် တင်သကဲ့သို့ ပုံစံတိုင်းကို ဖတ်၊ command များ ပြု။ Run selection က ရွေးထားသော form များ သို့မဟုတ် cursor ရှိ form ကို အကဲဖြတ်။ Console က routine ပုံနှိပ်ထားသည်နှင့် error တစ်ခုစီကို လိုင်းနှင့်အတူ ပြ။ Typing လုပ်စဉ် ကိုက်ညီသော ကွင်းကို မှတ်ပြီး Enter က လိုင်းသစ်ကို indent လုပ်။ New၊ Open နှင့် Save က .lsp ဖိုင်အပေါ် အလုပ်လုပ်။ စာသားဘေးရှိ စာရင်းများက routine ၏ သတ်မှတ်ထားသော function များ၊ ၎င်းခေါ်သော်လည်း LISP တွင် မရှိသေးသော function များ နှင့် ရှိသမျှ function များကို ပြ။ Window က drawing ကို မပိတ်ထားသဖြင့် routine က point တောင်းနိုင်; Stop သို့မဟုတ် Esc က အလုပ်လုပ်နေသော routine ကို ရပ်။ |
| `LIST` | `LI`, `LS` | Object များကို history တွင် ဖော်ပြ |
| `LTSCALE` | `LTS` | Drawing ၏ linetype scale (dash နှင့် gap တိုင်းကို ဤတန်ဖိုးဖြင့် မြှောက်) |
| `LWDISPLAY` | `LWT` | Screen ပေါ်တွင် lineweight ကို ပြ/ဖျော (status bar ရှိ LWT ခလုတ်) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Object အသစ်များ ရရှိမည့် lineweight (layer အလိုက်၊ block အလိုက်၊ default သို့မဟုတ် mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Model space အောက်ရှိ map layer များ: drawing ၏ coordinate system၊ tile၊ WMS၊ WMTS၊ ArcGIS၊ ပုံများ |
| `MASSPROP` |  | MASSPROP: region နှင့် ပိတ်ထားသော အရာဝတ္ထု၏ section property များ: ဧရိယာ၊ perimeter၊ centroid၊ moment နှင့် product of inertia၊ radii of gyration နှင့် principal axis။ Line နှင့် arc အတွက် အတိအကျ။ Report ကို ဖိုင်စာသားသို့ ရေးနိုင်။ |
| `MATCHPROP` | `MA`, `PAINTER` | Property များ ကိုက်ညီ: object တစ်ခု၏ layer၊ အရောင်နှင့် အခြားကို တခြားသို့ ကူး (MA) |
| `MEASURE` | `ME` | MEASURE (ME): line၊ arc၊ circle၊ polyline၊ spline သို့မဟုတ် ellipse တလျှောက် အကွာအဝေးတစ်ခုစီတွင် အမှတ်တစ်ခု၊ သင်ရွေးသော အဆုံးနားမှ။ Point များ၊ သို့မဟုတ် Block ဖြင့် အမှတ်တိုင်းတွင် block တစ်ခု။ |
| `MEASUREGEOM` | `MEA` | အကွာအဝေး၊ radius၊ ထောင့် သို့မဟုတ် ဧရိယာ တိုင်း (MEA) |
| `MINSERT` |  | MINSERT: ဘလောက်တစ်ခုကို အတန်းနှင့် ကော်လံအလိုက် တစ်ကြိမ်တည်း နေရာချ။ တစ်ခုစီသည် ကိုယ်ပိုင် reference ဖြစ်သည်၊ ဖယ်ရှား သို့မဟုတ် ဖျက်နိုင်။ |
| `MIRROR` | `MI` | Line တစ်ခုအပေါ် အရာဝတ္ထုများ မှန်ပြော |
| `MLEADER` | `MLD`, `MLEAD` | Multileader: မြား၊ leader နှင့် မှတ်ချက်၊ object တစ်ခုအဖြစ် (MLD) |
| `MLEADERALIGN` | `MLA` | Multileader များကို တစ်ခုနှင့် ဦးတည်ချက်တလျှောက် ညှိ၊ အကွာအဝေးတူ သို့မဟုတ် point နှစ်ခုကြား ဝေ (MLA) |
| `MLEADERCOLLECT` | `MLC` | Multileader အများအပြားကို တစ်ခုအဖြစ် စုဆောင်း: ၎င်းတို့၏ block များ အတန်း သို့မဟုတ် ကော်လံ၊ သို့မဟုတ် မှတ်ချက်များ တစ်ခုအောက်တစ်ခု (MLC) |
| `MLEADEREDIT` | `MLE` | Multileader သို့ leader မျဉ်းများ ထည့် သို့မဟုတ် ဖယ်; content ကို စာသားနှင့် block ကြား ပြော (MLE) |
| `MLINE` |  | ပြိုင်မျဉ်းများကို အတူတကွ ဆွဲ၊ ထောင့်များတွင် ဆုံဆက်။ |
| `MOVE` | `M` | Base point နှင့် ဒုတိယ point ဖြင့် အရာဝတ္ထုများ ရွှေ့ |
| `MSPACE` | `MS` | ဖွင့်ထားသော sheet ၏ viewport တစ်ခုမှတဆင့် model တွင် အလုပ်လုပ် (သို့မဟုတ် viewport အတွင်း နှစ်ချက်နှိပ်)။ |
| `MTEXT` | `MT`, `T` | Paragraph စာသား: အကျယ်ဆွဲ၊ ထို့နောက် နေရာတွင် ရိုက်; Enter က paragraph အသစ်စ (T) |
| `MVIEW` | `MV` | Layout ပေါ်ရှိ model သို့ viewport |
| `NAMEDVIEW` | `NV`, `VIEWS` | Named view များ: ဖန်သားပြင်ပေါ် view (သို့မဟုတ် window) ကို နာမည်ဖြင့် သိမ်းပြီး ပြန်သွား (NV) |
| `NCOPY` |  | Block reference သို့မဟုတ် linked drawing မှ အရာဝတ္ထုများကို explode မလုပ်ဘဲ drawing သို့ ကူး။ |
| `NEARBY` |  | Cursor အနီးရှိ အရာများကို အနီးဆုံးဦးစွာ၊ အကွာအဝေးနှင့် ဘက်ဖြင့် ပြော။ |
| `NEW` |  | Drawing အသစ် စတင် |
| `OBJECTSCALE` | `OBJSCALE` | Annotative စာသားနှင့် dimension ၏ annotation scale များ: scale ထည့်၊ ဖျက်၊ လက်ရှိ scale ထည့်၊ သို့မဟုတ် စာရင်းပြ (viewport တစ်ခုစီက ၎င်း၏ scale အတွက် အရွယ်အစားဖြင့် ပြ) |
| `OBJOUT` |  | 3D model ကို OBJ အဖြစ် export |
| `OFFICESTANDARD` | `OFFSTD` | Office standard: စာရွက်ပေါ် စာသားအမြင့်များ၊ layer များ၊ title block field များနှင့် template များ record တစ်ခုတည်းတွင်။ အသုံးဝင်နေသည်ကို ပြ၊ ၎င်းမည်သည်နေရာမှ လာသလဲ ပြ; Drawing ထဲသို့ .json record ကို Import၊ ပျောက်နေသော office layer များ ထည့်၊ title block field များ စာရင်းပြ။ |
| `OFFSET` | `O` | အကွာအဝေးတွင် ပြိုင်ကော်ပီများ |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: OFFSET က polyline ၏ အပြင်ထောင့်များတွင် gap များကို မည်သို့ ပိတ်သလဲ။ 0 က segment များ ဆန့်၊ 1 က arc ထည့်၊ 2 က မျဉ်းဖြတ် ထည့်။ ဤ session အတွက် ထိန်း။ |
| `OLELIST` | `OLES` | DWG တွင်ပါသော OLE object များကို စာရင်းပြ၊ တစ်ခု၏ ပုံ၏ မိတ္တူကို သင်ရွေးသော နေရာတွင် ထား |
| `OPEN` |  | ဤကွန်ပျူတာမှ DWG သို့မဟုတ် DXF ဖွင့် |
| `OPENIN3D` |  | ဤ drawing ကို 3D modeling app တွင် tab အသစ်ဖြင့် ဖွင့် (ဘာမျှ upload မလုပ်) |
| `OPTIONKEYS` | `OPTKEYS` | Command option များကို ကိုယ်ပိုင် အက္ခရာ (ARRAY.PO၊ P) ပေး၊ စာသားဖိုင်တစ်ခုတွင် |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Object snap menu ဖွင့်: snap ဘယ်ဟာ ဖွင့်မလဲ ရွေး။ Status bar ရှိ Snap ပေါ်တွင် right-click လည်း ရ။ |
| `OVERKILL` |  | ထပ်နေသော အရာဝတ္ထုများ ဖျက်၊ tolerance အတွင်း ထပ်နေသော သို့မဟုတ် ဆုံးချင်း ဆက်နေသော line နှင့် arc များ ပေါင်း။ |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parameters panel: user parameter နှင့် dimensional constraint များ table တစ်ခုတည်းတွင် |
| `PARTSLIST` | `PLIST` | Library မှ ထားသော standard part နှင့် steel section အားလုံး၏ parts list table |
| `PASTEAREA` | `PAREA` | MarkupCraft တွင် ကူးထားသော ဧရိယာ (Copy area) ကို အမှန်အရွယ်ဖြင့် ပုံအဖြစ် ကူး။ |
| `PASTEBLOCK` |  | PASTEBLOCK: ကူးထားသည့်အရာကို ဘလောက်တစ်ခုအဖြစ် ကူး။ ဘလောက်က ကိုယ်ပိုင် အမည်ရ; RENAME ဖြင့် သင့်အမည် ပေး။ |
| `PASTECLIP` |  | Clipboard ကို ကူး: cursor ကို လိုက်၊ ရောက်ရမည့် နေရာကို နှိပ် (Ctrl+V) |
| `PASTEORIG` |  | Clipboard ကို မိတ္တူကူးခဲ့သော coordinate များတွင် ကူး (Ctrl+Shift+V) |
| `PDF` |  | Drawing ၏ underlay များက သုံးသော PDF ဖိုင်များကို CadCraft သို့ ပေး |
| `PDFADJUST` |  | PDF underlay ကို မှိန်၊ contrast၊ monochrome သို့မဟုတ် ပိတ် |
| `PDFATTACH` | `PDFATT` | PDF စာမျက်နှာတစ်ခုကို underlay အဖြစ် ချိတ် (PDFATTACH) |
| `PDFCLIP` |  | PDF underlay ကို စတုဂံ သို့မဟုတ် polygon သို့ clip |
| `PDFIMPORT` | `PDFIM` | PDF စာမျက်နှာ၏ line၊ fill နှင့် စာသားကို drawing object များအဖြစ် ပြော (PDFIMPORT) |
| `PDFLAYERS` |  | PDF underlay ၏ layer များကို ဖွင့်/ပိတ် |
| `PEDIT` | `PE` | Polyline တည်းဖြတ်: ပိတ်၊ ဖွင့်၊ ပေါင်း၊ အကျယ်၊ fit curve၊ spline curve၊ decurve၊ linetype generation၊ ပြောင်းပြန်; line၊ arc နှင့် spline များကို polyline အဖြစ် ပြောင်းနိုင် |
| `PENPRESSURE` |  | ဘောပင်ဖိအားက SKETCHFIX နှင့် SKETCHLIVE ထုတ်သည်များ၏ lineweight ကို သတ်မှတ်ခြင်း ရှိ/မရှိ (မူလ ဖွင့်)။ ဤ browser တွင် ထိန်း။ |
| `PHOTOSKETCH` | `PSK` | လက်ဖြင့်ရေးထားသော ပုံ၏ ဓာတ်ပုံကို scale ဖြင့် line နှင့် arc အဖြစ်ပြော၊ perspective ဖြောင့်၊ ဘောပင်အရောင်တစ်ခုစီအတွက် layer ပေး။ |
| `PICKSTYLE` |  | Group တစ်ခု၏ object တစ်ခုရွေးလျှင် group တစ်ခုလုံး (1၊ မူလ) သို့မဟုတ် object တစ်ခုတည်း (0) ရွေးမရွေး။ ဤ session အတွက် ထိန်း။ |
| `PLAN` |  | View ကို လှည့်၍ UCS X axis (လက်ရှိ ucs၊ သိမ်းထားသော Ucs သို့မဟုတ် World) ကို screen တွင် ညီအောင်။ Drawing ဘာမျှ မရွေ့။ |
| `PLINE` | `PL` | Line နှင့် arc segment များ၏ polyline |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | PDF သို့ Plot: layout တစ်ခု၊ သို့မဟုတ် model ကို scale ဖြင့် |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plot style table များ: အရောင်တစ်ခုစီ ဘာအဖြစ် print ထုတ်မလဲ (color၊ black၊ gray၊ ink၊ lineweight); drawing နှင့်အတူ ထိန်း (STYLESMANAGER) |
| `POINT` | `PO` | Point object များ |
| `POINTCLOUD` | `PC` | ချိတ်ထားသော point cloud: slice၊ height၊ thickness၊ color၊ size၊ visible၊ zoom၊ detach |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Point cloud (LAS၊ LAZ၊ XYZ၊ PTS) ကို drawing အောက်တွင် ချိတ် |
| `POLARANG` |  | Polar tracking step ဒီဂရီဖြင့် (90၊ 45၊ 30၊ 22.5၊ 15 …) |
| `POLYGON` | `POL` | Regular polygon |
| `PRESSPULL` |  | Solid ၏ face ကို တွန်း သို့မဟုတ် ဆွဲ (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Properties panel ဖွင့် (Ctrl+1 သို့မဟုတ် object ကို နှစ်ချက်နှိပ်လည်း ရ) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Properties panel ကို window ၏ အစွန်းသို့ ခေါက် |
| `PSPACE` | `PS` | သင်အလုပ်လုပ်နေသော viewport မှ ထွက်ပြီး sheet သို့ ပြန် (သို့မဟုတ် ပြင်ပ နှစ်ချက်နှိပ်)။ |
| `PUBLISH` | `-PUBLISH` | Sheet အများအပြား သို့မဟုတ် အားလုံးကို PDF တစ်ခုတည်းသို့ plot (sheet တစ်ခုအတွက် စာမျက်နှာနှင့် bookmark တစ်ခု) |
| `PURGE` | `PU` | ဘယ်သူမှ မသုံးသော block definition များ ဖယ် |
| `QDIM` |  | Quick dimension: object အများအပြားကို တစ်ကြိမ်တည်း dimension (continuous၊ baseline၊ staggered၊ ordinate၊ radius သို့မဟုတ် diameter) |
| `QPMODE` | `QP` | Cursor ဖြင့် Quick Properties ဖွင့်/ပိတ် |
| `QSELECT` | `QS` | Quick select: layer၊ အရောင်၊ အရွယ်အစား သို့မဟုတ် နာမည် ကိုက်ညီသော အမျိုးအစား၏ object အားလုံး (QS) |
| `RASTERSNAP` |  | Scan လုပ်ထားသော စာရွက်၏ line များသို့ snap ဖွင့်/ပိတ်။ |
| `RAY` |  | Ray: point တစ်ခုမှ construction line၊ တစ်ဖက်တည်း အဆုံးမရှိ |
| `RECOVER` |  | ပျက်စီးနေသော DXF သို့မဟုတ် DWG ကို ဖွင့်: ဖတ်မရသည်ကို ကျော်၊ ဘာကျော်သလဲ ပြော၊ ထို့နောက် AUDIT ကဲ့သို့ စစ်ဆေး ပြင်။ |
| `RECTANG` | `REC`, `RECTANGLE` | ထောင့်နှစ်ခုမှ ပိတ်ထားသော polyline |
| `REDLINE` | `RDL` | Redline ကို revision သို့: MarkupCraft redline package ကို ဖတ်၊ ပြောင်းလဲမှု တစ်ခုစီကို လက်ခံ/ပယ်၊ လက်ခံထားသည်များကို revision log ဖြင့် cloud လုပ်၊ answers ဖိုင်သိမ်း (RDL) |
| `REDO` |  | ပြန်ဖျက်ထားသည်ကို ပြန်လုပ် |
| `REFCLOSE` |  | Block ကို နေရာတွင် တည်းဖြတ်ခြင်း ပြီးဆုံး: သိမ်း သို့မဟုတ် ပြောင်းလဲမှု ပယ် |
| `REFEDIT` |  | Block ကို reference တည်ရှိရာတွင် တည်းဖြတ်၊ drawing ၏ ကျန်တာ မှိန်; REFCLOSE က သိမ်း |
| `REGEN` | `RE` | ဤ tab ရှိ drawing ကို drawing မှ ပြန်တည်ဆောက် |
| `REGENALL` | `REA` | Tab၊ pane နှင့် ဖွင့်ထားသော drawing အားလုံးကို ပြန်တည်ဆောက် |
| `REGION` | `REG` | REGION (REG): ပိတ်ထားသော အရာဝတ္ထုများ သို့မဟုတ် ဆုံးချင်း ပိတ်ဖွဲ့သော line၊ arc နှင့် polyline မှ flat region များ ပြု။ UNION၊ SUBTRACT နှင့် INTERSECT က region များ ပေါင်း၊ နှုတ်၊ ဆုံ။ MASSPROP က section property များ ပေး။ |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Scan အများအပြား မှတ်ပုံတင်: point အတွဲ သို့မဟုတ် target ဖြင့် ဘောင်တစ်ခုတွင် နေရာချ၊ ICP ဖြင့် ညှိ၊ LAS သို့မဟုတ် E57 တစ်ခု export |
| `REINIT` |  | Alias ဖိုင်ကို ပြန်တင် |
| `RENAME` | `-RENAME`, `REN` | Layer သို့မဟုတ် block ကို အမည်ပြောင်း (object အားလုံး သို့မဟုတ် reference အားလုံး လိုက်) |
| `REVCLOUD` | `RC` | Revision cloud: စတုဂံ၊ polygon၊ လွတ်လပ်ဆွဲလမ်းကြောင်း သို့မဟုတ် object ကို ပတ်ပါ (RC) |
| `REVOLVE` | `REV` | ပိတ်ထားသော 2D အရာဝတ္ထုများကို axis တစ်ခုတလျှောက် လှည့်၍ solid ပြု (3D) |
| `ROTATE` | `RO` | Base point တစ်ခုပတ်လည် အရာဝတ္ထုများ လှည့် |
| `SAMPLES` | `SAMPLE` | CadCraft ၏ နမူနာ drawing တစ်ခု (architectural set၊ as-built) ဖွင့်ပြီး လေ့လာ |
| `SAVE` | `QSAVE` | Drawing ကို ၎င်း၏ format (DWG သို့မဟုတ် DXF) ဖြင့် ဒေါင်းလုဒ် |
| `SAVEAS` |  | Drawing ကို DWG သို့မဟုတ် DXF အဖြစ် ဒေါင်းလုဒ်: ရွေး |
| `SAYSEL` |  | ရွေးထားသည်ကို ပြော၊ အရာတစ်ခုစီ၏ စာကြောင်းတစ်ကြောင်း |
| `SCALE` | `SC` | Base point တစ်ခုပတ်လည် object များ scale |
| `SCALELISTEDIT` | `SCALELIST` | Drawing ၏ ကိုယ်ပိုင် scale များ ထည့်၊ တည်းဖြတ်၊ ဖျက်; viewport နှင့် plot scale စာရင်းတွင် ပေါ်ပြီး ဖိုင်တွင် သိမ်း (SCALELIST) |
| `SCANALIGN` | `SCL` | Scan စာရွက်ကို point နှစ်ခုသို့ ညှိ: ရွှေ့၊ လှည့်၊ ရွေးလျှင် scale ပြော |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Scan drawing ထည့်: PNG၊ JPEG သို့မဟုတ် TIFF (စာမျက်နှာတစ်ခု သို့မဟုတ် အားလုံး) သို့မဟုတ် ပုံဖြစ်သော PDF စာမျက်နှာ |
| `SCANCLEAN` | `SCC` | Scan စာရွက်ကို အဖြူအမည်း လုပ်ပြီး အစက်အပြောက် ဖယ် |
| `SCANCROP` | `SCR` | Scan စာရွက်ကို window သို့ crop |
| `SCANDESKEW` | `SCD` | Scan စာရွက်၏ ရှည်သော line များ ထောင့်ကို ရှာ၊ ထောင့်ကို လက်ခံပြီးနောက် စာရွက်ကို ဖြောင့်အောင် လှည့် |
| `SCANERASE` | `SCE` | Scan စာရွက်၏ ဧရိယာတစ်ခု ဖျက်: စတုဂံ၊ polygon သို့မဟုတ် lasso |
| `SCANINFO` | `SCI` | Scan စာရွက်၏ မူလဖိုင်နှင့် ယခုအထိ ပြုလုပ်ထားသော အဆင့်များ ပြ |
| `SCANSCALE` | `SCS` | Scan စာရွက်ကို scale: အမှတ်နှစ်ခု ရွေးပြီး ၎င်းတို့ကြား အမှန်အကွာအဝေး ရိုက် |
| `SCANTRACE` | `SCT` | Scan စာရွက်ကို line နှင့် arc အဖြစ် layer အသစ်တွင် trace၊ သင်သတ်မှတ်သော tolerance ဖြင့်။ စာသားနှင့် hatch များ raster အဖြစ် ကျန် |
| `SELECT` |  | အရာဝတ္ထုများ ယခု ရွေး (နောက် command တွင် P၊ Previous အတွက်) |
| `SELECTALL` | `AI_SELALL` | ဤ tab ပေါ်တွင် တည်းဖြတ်နိုင်သော object အားလုံး ရွေး (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | သင်ရွေးသော object များနှင့် တူသည်များ: အမျိုးအစား၊ layer နှင့် အရောင် တူသော object အားလုံး (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Sheet Set panel ပြ: drawing အများအပြားမှ sheet များ၊ နံပါတ်ပေး၊ PDF တစ်ခုတည်းအဖြစ် publish |
| `SHORTCUTS` | `KEYS` | Command တစ်ခုကို ကိုယ်ပိုင် ကီးပေး (Ctrl သို့မဟုတ် Alt နှင့် အက္ခရာ၊ သို့မဟုတ် အခမဲ့ function ကီး)၊ ဤ browser သို့မဟုတ် desktop app တွင် ထိန်း |
| `SHXFONTS` | `SHX` | ဖိုင်တွဲ သို့မဟုတ် ဖိုင်များမှ SHX font များ ပေး၊ ၎င်းတို့ကို အမည်ပေးထားသော text style များ ထို font ဖြင့် ဆွဲ (စာရင်း၊ ဖယ်၊ ပြော) |
| `SKETCHFIX` | `SKF` | လက်ဖြင့်ဆွဲသော stroke များ၊ တစ်ခုစီ သန့်စင်သော line၊ circle၊ arc၊ စတုဂံ သို့မဟုတ် polyline ဖြစ်လာ၊ စတုရန်းပြုပြီး အခြားနှင့် ဆက် |
| `SKETCHLIVE` | `SKL` | ဘောပင်ဖြင့် ဆွဲ: stroke တစ်ခုစီ ဘောပင် ထောင်ချိန်တွင် တိကျသော line၊ circle၊ arc သို့မဟုတ် စတုဂံ ဖြစ်လာ၊ drawing သို့ snap လုပ်ပြီး အရွယ်အစားကို ထပ်ရိုက်နိုင် |
| `SPLINE` | `SPL` | Point များမှတဆင့် spline ဆွဲ (သို့မဟုတ် control polygon ဖြင့်)၊ သို့မဟုတ် polyline ကို spline အဖြစ် ပြော |
| `SPLINEDIT` | `SPE` | Spline တည်းဖြတ်: fit point၊ control point နှင့် weight၊ ဖွင့်/ပိတ်၊ ပြောင်းပြန်၊ သို့မဟုတ် polyline အဖြစ် ပြော |
| `SPLIT` |  | Drawing ဧရိယာကို pane များ ခွဲ (model ပေါ်တွင် VPORTS ကဲ့သို့; sheet မှလည်း) |
| `STEELMEMBER` | `SMEMBER` | Standard section မှ 3D steel member: point နှစ်ခု (beam) သို့မဟုတ် base point နှင့် အမြင့် (Column) |
| `STLOUT` |  | 3D model ကို STL (မီလီမီတာ) အဖြစ် export |
| `STRETCH` | `S` | Stretch: ဆုံးများပေါ်တွင် crossing window ဆွဲ၍ ရွှေ့; အတွင်းရှိ အရာများ ရွေ့၊ ကျန်တာ မရွေ့ (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Text style များ: font၊ အမြင့်၊ အကျယ်နှင့် စောင်း (dialog; command line တွင် -STYLE) |
| `SUBTRACT` | `SU` | Solid များကို တခြားမှ နှုတ် (3D)၊ သို့မဟုတ် 2D region များကို region မှ နှုတ် |
| `SWBOUT` | `SWMACRO` | SolidWorks အတွက် macro (.swb) ဒေါင်းလုဒ်၊ model ကို constrained sketch တစ်ခုအဖြစ် ပြန်ဆောက် |
| `SWEEP` |  | ပိတ်ထားသော 2D အရာဝတ္ထုများကို path (line၊ polyline၊ arc၊ circle) တလျှောက် solid အဖြစ် sweep (3D) |
| `TABLE` | `TB` | Table ပြု: အတန်းနှင့် ကော်လံ၊ သို့မဟုတ် clipboard ရှိ spreadsheet cell များ သို့မဟုတ် CSV ဖိုင်မှ |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Table တည်းဖြတ်: cell တွင် ရိုက်၊ အတန်းနှင့် ကော်လံ ထည့်/ဖျက်၊ အရွယ်အစား၊ ပေါင်းထားသော cell၊ ညှိ |
| `TABLEEXPORT` |  | Table ပြသသည်ကို CSV ဖိုင်အဖြစ် သိမ်း |
| `TABLEPASTE` | `PASTETABLE` | Clipboard ရှိ spreadsheet cell များမှ table ပြု |
| `TABLESTYLE` | `TS` | Table style များ: title၊ header နှင့် data အတန်းများအတွက် စာသားအမြင့်၊ ညှိ၊ margin နှင့် border |
| `TAGS` |  | Block reference များပေါ် tag များ: tag သတ်မှတ် (အမျိုးအစား၊ ခွင့်ပြုသော တန်ဖိုးများ၊ သက်ဆိုင်သော block များ)၊ ရွေးထားသော reference များတွင် သတ်မှတ်၊ CSV အဖြစ် သိမ်းနိုင်သော schedule အဖြစ် စာရင်းပြ |
| `TEXT` | `DT`, `DTEXT` | Line တစ်ကြောင်း စာသား; Enter က နောက် line စ |
| `TEXTEDIT` | `ED`, `DDEDIT` | စာသားကို နေရာတွင် တည်းဖြတ်: စာသား တစ်ခု ရွေး (သို့မဟုတ် နှစ်ချက်နှိပ်) (ED) |
| `TEXTMASK` | `TMASK` | စာသားနောက်ခံ mask (drawing ၏ နောက်ခံ သို့မဟုတ် အရောင်) ထား သို့မဟုတ် ဖယ် |
| `TEXTTOFRONT` |  | စာသား၊ dimension နှင့် leader အားလုံးကို အခြားအရာအားလုံး၏ ရှေ့သို့ ယူ |
| `TOOLBAR` |  | Toolbar ခလုတ်များ ဘာပြမလဲ ရွေး: icon နှင့် စာသား၊ icon သာ သို့မဟုတ် စာသားသာ (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Toolbar ကို window ၏ အပေါ်၊ အောက်၊ ဘယ် သို့မဟုတ် ညာတွင် ထား |
| `TOOLBARROWS` |  | Toolbar က အတန်းဘယ်နှစ်ခု သုံးမလဲ ရွေး: ကိုက်အောင် ခေါက်၊ 2 သို့မဟုတ် 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Drawing အပေါ်ရှိ bar များကို standard သို့မဟုတ် compact ပြု |
| `TOUCHCROSSHAIR` | `TCX` | လက်ချောင်းဖြင့် ဆွဲရန် offset crosshair: လက်ချောင်းတစ်ချောင်းက ၎င်းနှင့် အပေါ်နှင့် ဘေးတွင် ရှိသော crosshair ကို ရွှေ့၊ လက်ချောင်းက pick point ကို မဖုံး။ လက်ချောင်းကို ဖယ်လျှင် ဘာမျှ မရွေး; Click ခလုတ် သို့မဟုတ် ဒုတိယလက်ချောင်းဖြင့် crosshair တွင် ရွေး။ Click ကို ဖိထားပြီး အခြားလက်ချောင်းရွှေ့လျှင် ဆွဲ။ Options: ON၊ OFF၊ Auto၊ Distance၊ Side။ |
| `TOUR` | `TUTORIAL` | ပထမ drawing ခြေလှမ်း ခြောက်ဆင့် tour ကို ပြန်စ |
| `TRIM` | `TR` | Object များကို အခြားတစ်ခု ဖြတ်သွားသော နေရာသို့ ညှပ်: အပိုင်းကို နှိပ်၊ အများအပြား ဖြတ်ဆွဲ၊ သို့မဟုတ် Shift+click ဖြင့် ရှည်ချဲ့ |
| `TRIMEXTENDMODE` |  | TRIM နှင့် EXTEND မည်သို့ စမလဲ: 1 Quick (object တိုင်း cutting edge သို့မဟုတ် boundary)၊ 0 Standard (edge များ အရင်ရွေး) |
| `TTR` |  | ပေးသော radius ဖြင့် object နှစ်ခုကို tangent ဖြစ်သော circle (CIRCLE T နှင့် တူ)။ |
| `TURNLEFT` |  | View ကို 90° ဘယ်သို့ လှည့် (နာရီလက်တံ ဆန့်ကျင်ဘက်): UCS Z -90၊ view လိုက်။ Drawing ဘာမျှ မရွေ့။ |
| `TURNRIGHT` |  | View ကို 90° ညာသို့ လှည့် (နာရီလက်တံအတိုင်း): UCS Z 90၊ view လိုက်။ |
| `TURNWORLD` |  | World သို့ ပြန်: UCS World၊ view ပြန်ညီ။ |
| `TXT2MTXT` | `T2M` | Single-line စာသားများကို paragraph စာသားတစ်ခုအဖြစ် ပေါင်း၊ အပေါ်မှ အောက်သို့။ |
| `UCS` |  | သင့်ကိုယ်ပိုင် coordinate system: origin နှင့် X axis (origin၊ Z angle၊ 3point၊ OBject၊ Previous၊ World၊ NAmed)။ ရိုက်သော point များ၊ ortho၊ polar tracking၊ grid နှင့် စာသားအသစ်တို့က လိုက်၊ view က X axis ညီအောင် လှည့်။ Drawing ဘာမျှ မရွေ့။ |
| `UNDO` | `U` | နောက်ဆုံး command ကို ပြန်ဖျက် |
| `UNGROUP` |  | UNGROUP: group များကို ခွဲ။ Group ၏ object များကို ရွေး၊ သို့မဟုတ် Name ပေး။ Object များ drawing တွင် ကျန်။ |
| `UNION` | `UNI` | Solid များကို တစ်ခုသို့ ပေါင်း (3D)၊ သို့မဟုတ် 2D region များကို region တစ်ခုသို့ |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | ISOLATEOBJECTS သို့မဟုတ် HIDEOBJECTS ဖြင့် ဝှက်ထားသော object အားလုံးကို ပြန်ပြ |
| `UNITS` | `UN`, `DDUNITS` | Length ကို မည်သို့ ပြပြီး ရိုက်ရမလဲ: decimal၊ feet နှင့် inch၊ fraction (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Field များကို ထပ်တွက်၊ ၎င်းတို့ အလိုအလျောက် update မည့်အချိန်ရွေး |
| `USDOUT` |  | 3D model ကို USD အဖြစ် export (.usda စာသား၊ .usdc binary သို့မဟုတ် .usdz package) |
| `VIEW` | `-VIEW`, `V` | Standard 3D view များ၊ perspective သို့မဟုတ် parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | 3D solid များ၏ flat 2D view (front၊ top၊ side သို့မဟုတ် isometric၊ hidden line dashed) ကို sheet သို့မဟုတ် model တွင် ထား |
| `VIEWLABEL` | `VL` | Sheet ပေါ်ရှိ view title၊ viewport ၏ view အမည်ကို ပြ၊ ၎င်းနှင့်အတူ ပြောင်း |
| `VOICE` |  | ပြောသော command များကို ဖွင့်/ပိတ်။ ဤကွန်ပျူတာပေါ်တွင် အသိအမှတ်ပြု |
| `VPCLIP` |  | Sheet viewport ကို ပိတ်ထားသော object သို့မဟုတ် ဆွဲထားသော polygon သို့ clip; Delete က ပြန်စတုဂံ ဖြစ်စေ |
| `VPLAYER` |  | Viewport အချို့တွင်သာ layer များ freeze သို့မဟုတ် thaw (Freeze၊ Thaw၊ Reset)၊ viewport အသစ်များ freeze ဖြင့် စရမည့် layer များ ရွေး (Vpvisdflt) |
| `VPORTS` | `VIEWPORTS` | Drawing ဧရိယာကို pane များ ခွဲ၊ pane တစ်ခုစီ ကိုယ်ပိုင် view ဖြင့် (sheet ပေါ်တွင်: MVIEW ကဲ့သို့ viewport) |
| `VPVIEW` |  | Viewport က ပြသသည်ကို သတ်မှတ်: model ပေါ်တွင် window တစ်ခု ရွေး |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D view ၏ visual style: shaded၊ edges၊ hidden line၊ wireframe၊ X-ray |
| `WALL` | `WA` | Polyline ကဲ့သို့ 2D နံရံများ ဆွဲ။ ဆုံဆက်ပြီး တံခါးနှင့် ပြတင်းပေါက် ဆောင်သည်။ |
| `WALLARC` | `WARC` | နံရံများ၏ arc ဆွဲ။ Plan နံရံများ မျဉ်းဖြောင့်ဖြစ်သဖြင့် arc ကို ဆက်နေသော တိုတို မျဉ်းဖြောင့် နံရံ (တစ်ခုလျှင် 15 ဒီဂရီ) အဖြစ် ဆွဲ |
| `WALLDELSEG` |  | နံရံ၏ အပိုင်းတစ်ခုကို အမှတ်နှစ်ခုကြား ဖျက်။ ကျန်တာ နံရံ တစ်ခု သို့မဟုတ် နှစ်ခု။ |
| `WALLDIM` |  | Dimension အတွက် တန်ဖိုးအသစ် ရိုက်: အဝေးဆုံးဘက်ရှိ နံရံ ကိုယ်ဘက်သို့ ထောင့်မှန် ရွေ့၊ ပထမဆုံးဘက်ရှိ နံရံ ကိုင်ထား၊ ၎င်းနှင့် ဆုံသော နံရံများ လိုက် |
| `WALLDISJOIN` |  | အဆုံးတစ်ခုအနီးရှိ နံရံကို ရွေး၍ ထိုအဆုံးတွင် ဆက်ခြင်းကို ပိတ်: အဆုံးသည် ထောင့်မှန် ဆွဲ၍ ဘာမျှ မလိုက်။ ထပ်ရွေးလျှင် ပြန်ခွင့်ပြု |
| `WALLGRID` |  | နံရံကို grid line သို့ လော့ခ်ချ: တလျှောက် သို့မဟုတ် ဆုံးတစ်ခုကို ထိုတွင်။ GRIDMOVE ဖြင့် line ရွှေ့လျှင် နံရံလိုက် |
| `WALLHOLD` |  | ညှိပြီး လော့ခ်: နံရံတစ်ခုက အခြားနံရံနှင့် နေရာကိုင်ထား (၎င်း၏ line ပေါ်၊ သို့မဟုတ် ရှိပြီးသား အကွာအဝေး)။ တစ်ခု ရွေ့လျှင် အခြားက လိုက် |
| `WALLHOLDDIM` |  | ပြိုင်နံရံ နှစ်ခုကြား အကွာအဝေးကို လော့ခ်ချ။ တစ်ခု ရွေ့လျှင် အခြားက အကွာအဝေး ထိန်းရန် လိုက် |
| `WALLHOLDS` |  | နံရံများ၏ လော့ခ်များကို စာရင်းပြ |
| `WALLJOINS` |  | အဟောင်း drawing ၏ နံရံတိုင်းကို id ပေး၊ ၎င်းတို့ကြား ဆက်စပ်မှုများ သိမ်း။ သင် ပထမ ပြောင်းလဲသည့်အခါလည်း ဖြစ်သည်။ |
| `WALLJOINSTYLE` |  | နံရံနှစ်ခု ဆုံးချင်းတွေ့သော ထောင့်ကို နှိပ်၍ ဆွဲပုံ ပြော: mitre၊ butt၊ square off။ T က မည်သည့်နံရံ ဖြတ်သွားမလဲ ပြော |
| `WALLOFFSET` | `WO` | နံရံကို အကွာအဝေးဖြင့် ကိုယ်ဘက်သို့ ရွှေ့ (ဆက်နေသော နံရံများ လိုက်) သို့မဟုတ် ထို အကွာအဝေးတွင် မိတ္တူပြု |
| `WALLPICK` |  | Drawing ရှိ line သို့မဟုတ် polyline ပေါ်တွင် နံရံများ ပြု၊ Yes ဟု ပြောလျှင် ဆက်ထားသော line များပါ |
| `WALLPOLY` | `WP` | Regular polygon (3 မှ 64 ဘက်) ပတ်လည် နံရံများ ဆွဲ၊ POLYGON ကဲ့သို့ |
| `WALLRECT` | `WR` | ဆန့်ကျင်ဘက် ထောင့်နှစ်ခုမှ ဆက်နံရံ လေးခု ဆွဲ၊ RECTANG ကဲ့သို့ |
| `WALLREJOIN` |  | နံရံ၏ အပိုင်းနှစ်ခုကို နံရံတစ်ခုသို့ ပြန်ပေါင်း။ ပထမဆုံးက drawing တွင် နေရာ ထိန်း |
| `WALLROT` |  | လှည့်ထားသော စတုဂံအဖြစ် ဆက်နံရံ လေးခု ဆွဲ: ပထမဘက်၊ ထို့နောက် အခြားဘက် ဘယ်လောက်ထွက်မလဲ |
| `WALLSPLIT` | `WS` | နံရံကို အမှတ် သို့မဟုတ် အခြားနံရံ ဖြတ်သော နေရာတွင် နှစ်ပိုင်းခွဲ။ Gap သို့မဟုတ် free ends မတောင်းမှ အပိုင်းများ ဆက်ထား။ တံခါးနှင့် ပြတင်းပေါက်များ ၎င်းတို့၏ အပိုင်းနှင့် အတူ |
| `WALLSPLITGAP` |  | Gap ထားပြီး နံရံခွဲ: gap ရိုက်၊ နံရံရွေး၊ ထို့နောက် point။ အပိုင်းများ free ends ထားပြီး ပြန်ပေါင်းနိုင် |
| `WALLSTRETCH` |  | Window ဖြင့် ဆန့်: ထိုအတွင်းရှိ နံရံ ဆုံးများ ရွေ့၊ အပြည့်အတွင်းရှိ နံရံများ အပြည့် ရွေ့၊ ဘေးကို ထိနေသော နံရံများ ၎င်းနှင့်အတူ ဆွဲ |
| `WALLTAN` |  | နံရံနှင့် အတူ ထွက်သော arc ဖြင့် နံရံကို ဆက် (တိုတို မျဉ်းဖြောင့် နံရံများအဖြစ် ဆွဲ) |
| `WALLTRACE` |  | သင်နှိပ်သော point ပတ်လည် line နှင့် နံရံများ၏ အသေးငယ်ဆုံး ပိတ်ထားသော ဧရိယာ ပတ်လည် နံရံများ ပြု |
| `WALLUNHOLD` |  | နံရံ၏ လော့ခ်များ ဖယ် (နှင့် အခြားနံရံ၏ ဆက်လော့ခ်များ) |
| `WBLOCK` | `W`, `-WBLOCK` | ဘလောက်၊ အရာဝတ္ထု အချို့ သို့မဟုတ် drawing အပြည့်ကို DWG သို့မဟုတ် DXF ဖိုင်အသစ်သို့ ရေး (W) |
| `WEDGE` | `WE` | Wedge: ထောင့်နှစ်ခုနှင့် အမြင့်၊ ပထမထောင့်မှ ဆင်းသွား (3D) |
| `WHEREAMI` | `WHERE` | Cursor ရှိနေရာကို ပြော |
| `WHOHAS` |  | Drawing ကို ဘယ်သူဖွင့်ထားသလဲ ပြော။ CadCraft Studio က ဖွင့်ထားသော drawing တစ်ခုစီ ဘေးတွင် lock ဖိုင်ငယ် (Plan.dwg.cclock: ဘယ်သူ၊ အဘယ်အချိန်ကစ၍၊ ဘယ် version) ထားပြီး ပိတ်သောအခါ ဖျက်။ Options: Current၊ File၊ FOlder၊ Path၊ Name။ Browser တွင် မရနိုင်။ |
| `WINDOW` | `WN` | နံရံတွင် ပြတင်းပေါက်ထား |
| `XATTACH` | `XA` | အခြား DWG သို့မဟုတ် DXF ကို ဤ drawing တွင် ချိတ်၊ read-only ပြ (XREF က စာရင်းပြ၊ ပြန်တင်) |
| `XCLIP` | `XC` | Block reference နှင့် linked drawing များကို စတုဂံ သို့မဟုတ် polygon သို့ clip၊ သို့မဟုတ် clip ဖယ် |
| `XLINE` | `XL` | Construction line၊ အဆုံးမရှိ နှစ်ဖက်စလုံး: point နှစ်ခုမှတဆင့်၊ အလျားလိုက်၊ ဒေါင်လိုက်၊ ထောင့်တစ်ခု၊ ထောင့်ကို နှစ်ပိုင်းခွဲ သို့မဟုတ် line မှ offset |
| `XREF` | `XR`, `-XREF` | Linked drawing များ (external reference): စာရင်း၊ ချိတ်၊ ပြန်တင်၊ bind၊ detach |
| `ZOOM` | `Z` | Extent သို့မဟုတ် window |
