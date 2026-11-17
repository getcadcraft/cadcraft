---
title: အမိန့်မြေပုံ- ဘာကို ရိုက်ရမလဲ
summary: CadCraft တွင် ရှိသော အမိန့်အားလုံးကို တိုတောင်းသော အမည်များနှင့်အတူ A မှ Z အထိ ပရိုဂရမ်ကိုယ်တိုင်မှ ထုတ်ထားပြီး အခြား drafting ပရိုဂရမ်များနှင့် ကွဲပြားသော အလေ့အကျင့်များ။
keywords: အမိန့်မြေပုံ, အမိန့်များ, aliases, တိုတောင်းသော အမည်များ, အခြားမှ လာခြင်း, အမိန့်စာရင်း, ဘာရိုက်ရမလဲ, ဖျက်ရန်, ဖြတ်ရန်, ညီမျှ, ကွဲပြားချက်များ
from: 3bdfd3e6
---

CadCraft သည် အခြား drafting ပရိုဂရမ်များတွင် လူများ သိပြီးသား အမိန့်အမည်များနှင့် တိုတောင်းသော အမည်များကို လက်ခံသည်- မျဉ်းအတွက် `L`၊ ဖြတ်ရန် `TR`၊ ဖျက်ရန် `E` ကို ရိုက်ပါ။ ထို့ကြောင့် အများစုအတွက် သင်ယူရမည့် ဘာသာပြန်ဇယား မလိုပါ- သင်သိပြီးသား အမည်သည် ဤနေရာတွင်လည်း အမည်ဖြစ်သည်။ အောက်ပါစာရင်းသည် CadCraft တွင် ရှိသော အမိန့်အားလုံးဖြစ်ပြီး ပရိုဂရမ်ကိုယ်တိုင်မှ ထုတ်ထားသည်။ {{key:Enter}} သည် နောက်ဆုံးအမိန့်ကို ပြန်လုပ်သည်; command line ရှိ `HELP` သည် အတူတူစာရင်းကို ပြသသည်။

အတူတူမဟုတ်သော သို့မဟုတ် မတည်ဆောက်ရသေးသော အချို့မှာ-

- **သိမ်းရန်** သည် browser တွင် မိတ္တူကို ဒေါင်းလုဒ်ဆွဲသည် ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio တွင် ဖိုင်ကို ရေးသည်။ [အခြား drafting software မှ လာခြင်း](topic:coming-from) ကို ကြည့်ပါ။
- **PLOT** သည် PDF (PNG နှင့် SVG ပါ) ကို plot style table ဖြင့် ပြုလုပ်သည်; page setup manager မရှိပါ။
- **DIMSTYLE** နှင့် **PEDIT** ကို တည်ဆောက်ပြီးဖြစ်သည်; **PEDIT** တွင် Edit-vertex option မရှိပါ (grips က ထိုအလုပ်ကို လုပ်သည်)။
- **TABLE** ကို မတည်ဆောက်ရသေးပါ; {{cmd:XREF}}၊ {{cmd:SPLINE}} နှင့် {{cmd:WBLOCK}} တို့ ရှိသည်။
- routine ၏ ကိုယ်ပိုင်အမိန့်များ (AutoLISP `C:NAME`) သည် {{cmd:APPLOAD}} ဖြင့် load ပြီးနောက် ပေါ်လာသည်; ၎င်းတို့ကို ဤနေရာတွင် မဖော်ပြပါ။

## အမိန့်အားလုံး (398)

| အမိန့် | တိုတောင်းသော အမည်များ | ဘာလုပ်သလဲ |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | ဘယ်ခလုတ်ဖြင့် 3D မြင်ကွင်းကို လှည့်ကြည့်ရန် |
| `ACCESS` | `AX` | မျက်မမြင် ဒရာဖ်တင်ကို ဖွင့်/ပိတ်: ရလဒ်များကို screen reader ဖြင့် ပြောပြခြင်း၊ ပုံပေါ်ရှိ keyboard cursor၊ snap အသံများနှင့် အသံဖြင့် အမိန့်များ။ |
| `ALIASEDIT` | | စာသားဖိုင်တစ်ခုတည်းတွင် အမိန့် aliases များကို တည်းဖြတ်ရန် (L, *LINE ပုံစံ ရင်းနှီးသော) |
| `ALIGN` | `AL` | ရင်းမြစ်အမှတ်များ ဦးတည်ရာအမှတ်များပေါ် ရောက်အောင် အရာဝတ္ထုများကို ရွှေ့ပြီး လှည့်ရန် (အတွဲတစ်၊ နှစ်၊ သို့မဟုတ် သုံးတွဲ) နှင့် လိုလျှင် အတိုင်းအတာချိန်ရန် |
| `ALIGNPANEL` | `ALP` | Align and distribute panel ကို ဖွင့်ရန် |
| `ALIGNTO` | | ရွေးထားသော အရာဝတ္ထုများ၏ ဘယ်၊ အလယ်၊ ညာ၊ အပေါ်၊ အလယ်ဗဟို သို့မဟုတ် အောက်ဘောင်များကို ရွေးချယ်မှု၊ ပထမ သို့မဟုတ် နောက်ဆုံး ရွေးထားသော အရာဝတ္ထု၊ သို့မဟုတ် အမှတ်တစ်ခုပေါ်တွင် ညှိရန် |
| `ANNOALLVISIBLE` | `ANNOALL` | annotative အရာဝတ္ထုများကို စကေးအားလုံးတွင် ပြရန်၊ သို့မဟုတ် viewport (သို့မဟုတ် ဒရာဖ်) ၏ စကေးသည် ၎င်းတို့၏ စာရင်းတွင် ရှိသည့်နေရာတွင်သာ ပြရန် |
| `ANNOSCALE` | `CANNOSCALE` | ဒရာဖ်၏ annotation စကေးကို သတ်မှတ်ရန်: annotative စာသားနှင့် dimension များကို တူညီသော အရွယ်အစားဖြင့် print ထုတ်နိုင်အောင် ပြန်ညှိသည် |
| `APPLOAD` | `AP` | အပလီကေးရှင်းများ load ရန်: LISP routines (.lsp) နှင့် ၎င်းတို့၏ dialog ဖိုင်များ (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Arc: 3-Point, Start/Center/End, Start/Center/Angle, Start/Center/Length, Start/End/Angle, Start/End/Direction, Start/End/Radius, Center/Start/End, Center/Start/Angle, Center/Start/Length, Continue |
| `AREA` | `AA` | ပွိုင့်များဖြင့် သို့မဟုတ် အရာဝတ္ထုတစ်ခု၏ ဧရိယာနှင့် ပတ်လည်အလျား; Add နှင့် Subtract က စုစုပေါင်းကို ဆက်တိုက် ထိန်းထားသည် (AA) |
| `ARRAY` | `AR` | အတန်းနှင့် ကော်လံများအလိုက် မိတ္တူများ၊ သို့မဟုတ် အလယ်ဗဟိုပတ်လည် (AR) |
| `ARRAYASSOCIATIVITY` | | ARRAY အမိန့်များက တည်းဖြတ်နိုင်သော array (1) သို့မဟုတ် ရိုးရိုး မိတ္တူ (0) ဖန်တီးမလား သတ်မှတ်သည် |
| `ARRAYCLOSE` | | array ၏ ရင်းမြစ်အရာဝတ္ထုများကို တည်းဖြတ်ခြင်းကို အဆုံးသတ်သည် |
| `ARRAYEDIT` | | Associative option ဖြင့် ဖန်တီးထားသော array ကို ပြောင်းသည်: အရေအတွက်၊ အကွာအဝေး၊ ရင်းမြစ်အရာဝတ္ထုများ၊ တစ်ခုတည်း |
| `ARRAYPATH` | | မျဉ်း၊ arc၊ polyline သို့မဟုတ် အခြား curve တစ်လျှောက် အရာဝတ္ထုများ၏ မိတ္တူများ |
| `ARRAYPOLAR` | | အလယ်ဗဟိုမှတ်ပတ်လည် မိတ္တူများ |
| `ARRAYRECT` | | အတန်းနှင့် ကော်လံများအလိုက် မိတ္တူများ |
| `ASBUILT` | `ASB` | ASBUILT သည် အဖွဲ့က တိုင်းတာထားသော as-built အမှတ်များ (CSV / TXT, EXPORTPOINTS ရေးသော ပုံစံ) ကို ဖတ်ပြီး ဒရာဖ်၏ အမှတ်များနှင့် နှိုင်းယှဉ်သည်: tolerance အတွင်း သို့မဟုတ် ပြင်ပ၊ မတိုင်းရသေး၊ အပို။ AS-BUILT layer ပေါ်တွင် မှတ်သားပြီး CSV report ကို ဒေါင်းလုဒ်ဆွဲသည်။ |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | block က တန်ဖိုးတောင်းသော tag ဖြစ်သည့် attribute ကို သတ်မှတ်ပြီး block ထဲ ထည့်ရန် (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | block reference ၏ attribute တန်ဖိုးများကို command line ပေါ်တွင် တစ်ခုပြီးတစ်ခု တည်းဖြတ်ရန် (Enter က တန်ဖိုးကို ထားသည်) |
| `ATTSYNC` | | block references များကို attribute definitions နှင့် ကိုက်ညီအောင် ပြန်ညှိရန်: အသစ်များကို default ဖြင့် ထည့်၊ ဖယ်ထားသည်များကို ချ၊ နေရာနှင့် စာသားကို ပြန်သတ်မှတ်; တန်ဖိုးများကို ထိန်းသည် |
| `AUDIT` | | ဖွင့်ထားသော ဒရာဖ်တွင် ပျက်စီးမှု စစ်ဆေးသည်: အကန့်အသတ်မရှိသော ဂဏန်းများ၊ အရွယ်အစားမရှိသော အရာဝတ္ထုများ၊ ပျောက်နေသော layers၊ blocks၊ styles နှင့် linetypes၊ ကိုယ်တိုင်ပါဝင်သော blocks၊ မျှဝေထားသော ids၊ ပျက်နေသော dimensions နှင့် hatches။ တွေ့သည်များကို အမျိုးအစားအလိုက် ဖော်ပြပြီး ပြင်ခြင်းမပြုမီ မေးသည်; ပြင်ဆင်ချက်သည် undo တစ်ကြိမ်ဖြစ်သည်။ |
| `AUNITS` | `ANGUNITS` | ထောင့်များ ပြသပုံနှင့် ရိုက်ထည့်ပုံ: decimal degrees၊ degrees-minutes-seconds သို့မဟုတ် N45°23'30"E ကဲ့သို့ bearings (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | ဒရာဖ်အလိုအလျောက်ဖြည့်ခြင်းကို ဖွင့်/ပိတ်၊ သို့မဟုတ် ဒရာဖ်၏ ပုံစံများက ယခု အကြံပြုသည်များကို စာရင်းပြ။ |
| `AUTOCONSTRAIN` | | ဂျီသြမေတြီ နီးကပ်နေပြီးသား နေရာများတွင် coincident၊ horizontal နှင့် vertical constraints ထည့် |
| `AUTODIM` | `ADIM` | စည်းမျဉ်းများဖြင့် dimension ပေး: ယေဘုယျအရွယ်အစား၊ ဘေးများနှင့်အတူ ကွင်းဆက်များ၊ အဖွင့်များ၊ အပေါက်အချင်းများနှင့် grid အကွာအဝေး၊ dimension ပြီးသားကို ထပ်မလုပ်ဘဲ။ |
| `AUTOSHEET` | `ASH` | sheets များကို ကိုယ်တိုင် ဖွဲ့စည်း: စက္ကူနှင့် စံစကေးများ ရွေးပြီး view တိုင်းကို caption နှင့် title block ဖြင့် နေရာချ။ |
| `BATTMAN` | | Block attribute manager: block ၏ attributes များ၏ အစဉ်၊ tags၊ prompts၊ defaults နှင့် modes ကို ပြင်ပြီး ၎င်း၏ references များကို update လုပ်ရန် |
| `BCLOSE` | | block editor ကို ပိတ်: block ကို သိမ်းရန် သို့မဟုတ် ပြောင်းလဲမှုများကို ပယ်ရန် |
| `BCONVERT` | | BCONVERT သည် ထပ်နေသော ဂျီသြမေတြီကို ရှာပြီး block references အဖြစ် ပြောင်းသည်။ ထပ်နေသော အရာဝတ္ထုများကို ရွေးပါ: ဖွင့်ထားသော space ရှိ ဂျီသြမေတြီတူ အခြားအရာဝတ္ထုအစုတိုင်း (ရွှေ့ပြီး ထောင့်မည်သည့်ထောင့်ဖြင့်မဆို လှည့်ထား) ကို ရှာသည်၊ Mirrored သို့မဟုတ် Scaled ဖွင့်ထားလျှင် မှန်ပြောင်းပုံများနှင့် အခြားအရွယ်အစားရှိ မိတ္တူများလည်း ရှာသည်။ block အသစ်အမည်နှင့် base point ပေးပါ; ရွေးချယ်မှုနှင့် မိတ္တူအားလုံးသည် ၎င်းကို ရည်ညွှန်းသော references ဖြစ်လာပြီး တစ်ခုချင်းစီတွင် ကိုယ်ပိုင် လည်ပတ်မှုနှင့် စကေး ရှိသည်။ သို့မဟုတ် Block ကို ရွေးပြီး ရှိပြီးသား block အမည်ကို ပေးလျှင် ၎င်း၏ အရာဝတ္ထုများ၏ လွတ်နေသော မိတ္တူများကို ရှာသည်။ မိတ္တူတစ်ခုသည် Properties ကို Ignore မသတ်မှတ်ထားလျှင် layer၊ color၊ linetype နှင့် lineweight တူရမည်။ Locked layers ပေါ်ရှိ အရာဝတ္ထုများကို မထိပါ။ undo တစ်ကြိမ်။ |
| `BEDIT` | `BE` | Block editor: block ၏ အရာဝတ္ထုများနှင့် attributes များကို တည်းဖြတ်; BCLOSE က သိမ်းသည် (BE) |
| `BLEND` | | BLEND: ပွင့်နေသော curves နှစ်ခု၏ အဆုံးများကြား spline၊ ချိတ်ဆက်ရန် အဆုံးနားတွင် ရွေးသည်။ CONtinuity: Tangent က ဦးတည်ချက်နှစ်ခုကို လိုက်၊ Smooth က ကွေးပုံကိုပါ လိုက်သည်။ |
| `BLOCK` | `B`, `BMAKE` | အရာဝတ္ထုများမှ block တစ်ခု ဖန်တီး (တစ်ခုတည်း reference ဖြစ်လာသည်) |
| `BLOCKREPLACE` | | BLOCKREPLACE: block တစ်ခုအတွက် reference တိုင်းသည် အခြားတစ်ခု၏ reference ဖြစ်လာသည်၊ နေရာတူ၊ စကေးနှင့် လည်ပတ်မှုတူ။ block နှစ်ခုစလုံးတွင် ရှိသော attribute တန်ဖိုးများကို ထိန်းသည်။ |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE က Blocks panel ကို cursor filter တွင်ရှိပြီး ပြသည်။ panel က block တစ်ခုချင်းစီ၏ ပုံ (နောက်ဆုံး ချထားသည်များ ဦးစွာ) ကို list သို့မဟုတ် grid အဖြစ် ပြသည်; ပုံကို click လုပ်ပါ သို့မဟုတ် ဒရာဖ်ပေါ် ဆွဲချပြီး INSERT ဖြင့် block ကို ချပါ။ Libraries အောက်တွင် ကိုယ်ပိုင် DWG သို့မဟုတ် DXF ဖိုင် ထည့်နိုင်သည်: ၎င်း၏ blocks များကို ပုံများဖြင့် စာရင်းပြပြီး တစ်ခု ချသည့်အခါ ဤဒရာဖ်ထဲ ကူးထည့်သည်။ CadCraft Studio တွင် ဒရာဖ်ဖိုင်များ၏ folder ကိုလည်း ထည့်နိုင်ပြီး ဖိုင်နှင့် folder များကို မှတ်ထားသည်။ |
| `BOMEDIT` | `BOMCOLUMNS` | bill of materials ဇယား၏ ကော်လံများ၊ အုပ်စုဖွဲ့ခြင်း၊ စီခြင်း၊ ခေါင်းစဉ်၊ စုစုပေါင်းနှင့် မှတ်ချက်များ |
| `BOMEXPORT` | | bill of materials ဇယားကို .csv ဖိုင်အဖြစ် သိမ်းရန် |
| `BOMTABLE` | `BOM` | ဇုန်တစ်ခု သို့မဟုတ် ဒရာဖ်တစ်ခုလုံး၏ live bill of materials ဇယား |
| `BOMUPDATE` | | bill of materials ဇယား အားလုံးကို ယခု update လုပ်ရန်၊ freeze လုပ်ထားသည်များပါ |
| `BOMZONE` | `BZONE` | bill of materials အတွက် ဒရာဖ်၏ အမည်ပေးထားသော နေရာ: ထောင့်နှစ်ခု၊ polygon သို့မဟုတ် ပိတ်ထားသော အရာဝတ္ထု၏ outline |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): ပိတ်ထားသော နေရာတစ်ခု၏ အတွင်းဘက် ပွိုင့်တစ်ခုကို ရွေးပြီး ၎င်းပတ်လည် ပိတ်ထားသော polyline ရယူသည်။ Arcs က arc ရှိနေဆဲ။ Islands က ၎င်းအတွင်းရှိ နေရာများ၏ outline ကိုလည်း ဖော်ပြသည်။ |
| `BOX` | | သေတ္တာ: ထောင့်နှစ်ခုနှင့် အမြင့် (3D) |
| `BPARAMETER` | `BPARAM` | ဖန်တီးထားခြင်းမရှိသေး: block တစ်ခုသို့ parameter (ဥပမာ Visibility) ထည့်ခြင်း။ |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Block parameters: ပုံသေနည်းများနှင့် အမည်ပေးထားသော parameters၊ block တစ်ခုတည်းတွင် visibility parameters များစွာ။ Block editor တွင် အလုပ်လုပ် (ရွေးထားသော အရာဝတ္ထုများကို state တစ်ခုသို့ သတ်မှတ်) နှင့် ရွေးထားသော reference တွင် (ကိုယ်ပိုင်တန်ဖိုးနှင့် states) |
| `BREAK` | `BR` | မျဉ်း၊ arc၊ circle သို့မဟုတ် polyline ကို ပွိုင့်နှစ်ခုကြား ဖြတ်ရန် (BR) |
| `BREAKATPOINT` | | မျဉ်း၊ arc သို့မဟုတ် polyline ကို ပွိုင့်တစ်ခုတွင် နှစ်ခုခွဲရန် |
| `BREAKLINE` | | ဖြတ်တောက်ပြသည့် သင်္ကေတပါသော မျဉ်းတစ်ကြောင်း ဆွဲရန်; အရွယ်အစားနှင့် အဆုံးများ ကျော်သော အကျိုးအထွက်ကို မှတ်ထားသည်။ |
| `BREPLACE` | | BREPLACE သည် block တစ်ခုကို အခြားတစ်ခုဖြင့် လဲသည်။ Selected: block references ရွေးပြီး အစားထိုးမည့် block အမည်ပေးပါ။ All: block နှင့် ၎င်း၏ အစားထိုးမည့်အရာကို အမည်ပေးပါ၊ space အားလုံးနှင့် အခြား blocks အတွင်းရှိ reference အားလုံး ပြောင်းသည်။ reference သည် နေရာ၊ စကေး၊ လည်ပတ်မှုနှင့် layer ကို ထိန်းပြီး block နှစ်ခုစလုံးတွင် ရှိသော attribute တန်ဖိုးများကို ထိန်းသည်; block အသစ်တွင် နေရာမရှိသော တန်ဖိုးများကို ချပြီး အမည်ပေးထားသည်။ |
| `BSEARCH` | | BSEARCH သည် blocks ကို ရှာသည်။ Name: block အမည်၏ အစိတ်အပိုင်း သို့မဟုတ် * နှင့် ? ပုံစံ။ Attribute: reference ၏ attributes ထားသော တန်ဖိုး (သို့မဟုတ် TAG=value)။ Geometry: အရာဝတ္ထုများ သို့မဟုတ် block reference တစ်ခု ရွေးပါ၊ ပုံသဏ္ဍာန် အနည်းဆုံး 85% တူသော blocks များကို အကောင်းဆုံးမှ စာရင်းပြသည်; အရွယ်အစား၊ လည်ပတ်မှုနှင့် မှန်ပြောင်းခြင်းကို မစဉ်းစားပါ။ ဖွင့်ထားသော space တွင် တွေ့သော references များကို ရွေးပြီး နောက်အမိန့်အတွက် အဆင်သင့်ထားသည်။ |
| `BURST` | | Block references ကို ခွဲထုတ်ပြီး attributes ပြောသည်ကို ထိန်း: တန်ဖိုးတစ်ခုချင်းစီသည် attribute ၏ layer ပေါ်တွင် စာသားဖြစ်လာသည်။ |
| `BVHIDE` | `BVH` | block editor တွင်: လက်ရှိ visibility state ရှိ အရာဝတ္ထုများကို ဖျောက်ရန်။ |
| `BVSHOW` | `BVSH` | block editor တွင်: လက်ရှိ visibility state ဖျောက်ထားသော အရာဝတ္ထုများကို ပြရန် (ရွေးနိုင်ရန် မှေးမှိန်စွာ ပြသည်)။ |
| `BVSTATE` | `BVS` | block editor တွင်၊ visibility states ရှိသော block ပေါ်တွင်: state တစ်ခုသို့ ပြောင်းရန်၊ သို့မဟုတ် တစ်ခုကို ထည့်၊ အမည်ပြောင်း၊ ဖျက်ရန်။ |
| `CAL` | | အရှည် သို့မဟုတ် ဂဏန်းကို တွက်: + − * / နှင့် ကွင်းများ၊ သင်ရိုက်သည့် နေရာမှာပဲ။ |
| `CENTERLINE` | `CL` | မျဉ်းနှစ်ကြောင်းကြား center line: ကြားတွင် အလယ်၊ သို့မဟုတ် တွေ့သည့်အခါ bisector တလျှောက် (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Center mark: circle သို့မဟုတ် arc ၏ အလယ်တွင် လက်ကမ်း၊ ၎င်းထက် အနည်းငယ်ကျော်သော center lines ပါ (CM) |
| `CHAMFER` | `CHA` | နှစ်ကြောင်းကြား ထောင့်ကို ဖြတ်ရန် (D အကွာအဝေးနှစ်ခု၊ A အရှည်နှင့်ထောင့်၊ P polyline ၏ ထောင့်တိုင်း) |
| `CHSPACE` | | CHSPACE: sheet နှင့် model အကြား viewport တစ်ဆင့် အရာဝတ္ထုများကို ရွှေ့သည်။ တစ်ဖက်မှ ကြည့်ရာတွင် တူညီပုံရအောင် စကေးနှင့် လည်ပတ်မှု ပြောင်းသည်။ sheet ပေါ်တွင် model သို့ သွား; viewport (MSPACE) မှတစ်ဆင့် လုပ်နေချိန်တွင် sheet သို့ ရောက်လာသည်။ |
| `CIRCLE` | `C` | Center နှင့် radius, diameter, ပွိုင့် 2 သို့မဟုတ် 3 |
| `CLASS` | | ရွေးထားသော အရာဝတ္ထုများကို class တစ်ခုထဲ ထည့်ရန်၊ သို့မဟုတ် ဘာမှ မရွေးထားလျှင် active class ကို သတ်မှတ် (? က စာရင်းပြ) |
| `CLASSES` | `CLS` | Classes panel: classes များက အရာဝတ္ထုများကို layers အကြား စီသည်; ၎င်းတို့ကို ပြ၊ ဖျောက်၊ ပုံစံချ၊ viewport တစ်ခုချင်းစီတွင် ထပ်ရေးနိုင် (CLS) |
| `COMMANDLINE` | `CMDLINE` | command line ကို ချိတ်ဆက်ရန် သို့မဟုတ် မျောရန်၊ တစ်ကြောင်းတည်းဖြစ်အောင် လုပ်၊ history လိုင်းများကို သတ်မှတ်၊ သို့မဟုတ် history ကို ဖွင့် (F2) |
| `COMPARESETTINGS` | `CMPSET` | dimension styles၊ text styles၊ layers၊ sheets သို့မဟုတ် units များကို နှိုင်းယှဉ်: ဤဒရာဖ်တွင် နှစ်ခု၊ သို့မဟုတ် ဤဒရာဖ်နှင့် ဖွင့်ထားသော အခြားဒရာဖ်တစ်ခု၊ တန်ဖိုးတစ်ခုကို ကူးရန်။ |
| `CONSTRAINTBAR` | `CBAR` | constraint bars ကို ပြ သို့မဟုတ် ဖျောက် (Showall / Hideall၊ သို့မဟုတ် အရာဝတ္ထုတစ်ခုချင်းစီ) |
| `COPY` | `CO`, `CP` | အရာဝတ္ထုများကို ကူး၊ နှိပ်သည့်အကြိမ်အရေအတွက်အတိုင်း |
| `COPYBASE` | | ရွေးသော base point ဖြင့် အရာဝတ္ထုများကို clipboard သို့ ကူး |
| `COPYCLIP` | | အရာဝတ္ထုများကို clipboard သို့ ကူး (Ctrl+C); PASTECLIP က ချထားသည် |
| `COUNT` | `BCOUNT` | Block references ကို ရေ: တစ်ခုရွေးပြီး ၎င်း block ၏ reference အားလုံးကို ရွေးပြီး ရေ |
| `COUNTTABLE` | | block အရေအတွက် ဇယားတစ်ခု ချ |
| `CREDITS` | | Library ၏ credits ကို ဒရာဖ်တွင် ဇယားအဖြစ် ထည့်သည်။ ပြန်လုပ်လျှင် ဇယားကို ယခု ဒရာဖ်ရှိ items များမှ update လုပ်သည်။ |
| `CURSORSIZE` | | crosshair ၏ အရွယ်အစား: 100 က ဒရာဖ်တစ်လျှောက် အစွန်းမှအစွန်း ဖြစ်စေသည် (Settings › Cursor › Full screen) |
| `CUTCLIP` | | အရာဝတ္ထုများကို clipboard သို့ ဖြတ် (Ctrl+X): ကူးပြီး ဖျက် |
| `CYLINDER` | `CYL` | ဘူးတစ်ခု: အလယ်၊ radius နှင့် အမြင့် (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | blocks၊ ၎င်းတို့၏ attributes နှင့် object properties များကို ဒရာဖ် သို့မဟုတ် CSV ဖိုင်တွင် ဇယားအဖြစ် စာရင်းပြ |
| `DATALINK` | `DL` | ဖိုင်ကို မှတ်ထားသော CSV ဖိုင်မှ ဇယား၊ ထို့ကြောင့် ထပ်ဖတ်နိုင် |
| `DATALINKUPDATE` | `DLU` | data link ၏ ဖိုင်ကို ပြန်ဖတ်ပြီး ၎င်း၏ဇယားများကို ပြန်ဖြည့် |
| `DCALIGNED` | `DCALI` | Dimensional constraint: ပွိုင့်များ၊ ပွိုင့်နှင့် မျဉ်း၊ သို့မဟုတ် မျဉ်းနှစ်ကြောင်းကြား အမှန်အကွာအဝေး |
| `DCANGULAR` | `DCANG` | Dimensional constraint: မျဉ်းနှစ်ကြောင်းကြား သို့မဟုတ် arc ၏ ထောင့် |
| `DCCONVERT` | | constrainable ဂျီသြမေတြီပေါ်တွင် ဆွဲထားသော dimensions များကို dimensional constraints အဖြစ် ပြောင်း |
| `DCDIAMETER` | `DCDIA` | Dimensional constraint: circle သို့မဟုတ် arc ၏ အချင်း |
| `DCDISPLAY` | | ဒရာဖ်ပေါ်ရှိ dimensional constraints ကို ပြ သို့မဟုတ် ဖျောက် |
| `DCHORIZONTAL` | `DCHOR` | Dimensional constraint: အလျားလိုက် အကွာအဝေး |
| `DCLINEAR` | `DCLIN` | Dimensional constraint: အလျားလိုက် သို့မဟုတ် ဒေါင်လိုက် အကွာအဝေး၊ နေရာချသည့်နေရာမှ |
| `DCRADIUS` | `DCRAD` | Dimensional constraint: circle သို့မဟုတ် arc ၏ radius |
| `DCVERTICAL` | `DCVER` | Dimensional constraint: ဒေါင်လိုက် အကွာအဝေး |
| `DELBLOCKS` | | blocks ဖျက်: reference အားလုံး (အတွင်းပိုင်းများပါ၊ sheet တိုင်းပေါ်) နှင့် အဓိပ္ပာယ်ဖွင့်ဆိုချက်များ |
| `DELCONSTRAINT` | `DELCON` | သင်ရွေးထားသော အရာဝတ္ထုများမှ constraint အားလုံး (ဂျီသြမေတြီနှင့် dimensional) ကို ဖယ်ရှား |
| `DELOPENING` | | တံခါး သို့မဟုတ် ပြတင်းပေါက်ကို နံရံမှ ဖယ်ထုတ်ရန်။ |
| `DESCRIBE` | `DESC` | ဒရာဖ်တွင် ရှိသည်များကို ပြော: အရာဝတ္ထု အရေအတွက်၊ အမျိုးအစား၊ အရွယ်အစား၊ ရွေးထားသည်များ။ |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | ရွေးချယ်မှုကို ရှင်း (Esc) |
| `DETAILS` | `DET` | သင်၏ firm ၏ ကိုယ်ပိုင် details များ၊ သင်ဆွဲနေသည့်အတွက် ရှာဖွေ: ရှာ၊ block ထည့်၊ စာရင်း၊ ဖယ်၊ အကြံပြုချက်များ ဖွင့်/ပိတ်။ |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | စာသားမှ ဒိုင်ယာဂရမ် ဆွဲ: Mermaid flowchart၊ PlantUML component diagram၊ D2၊ from-to စာရင်း သို့မဟုတ် draw.io XML၊ တည်းဖြတ်နိုင်သော blocks နှင့် connectors အဖြစ် |
| `DIMALIGNED` | `DAL`, `DIMALI` | ပွိုင့်နှစ်ခုကြား အမှန်အကွာအဝေး |
| `DIMANGULAR` | `DAN`, `DIMANG` | မျဉ်းနှစ်ကြောင်းကြား ထောင့်၊ arc ၏ ထောင့်၊ သို့မဟုတ် ပွိုင့်သုံးခုဖြင့် |
| `DIMARC` | `DAR` | arc အရှည် dimension: arc ရှိ အကွာအဝေး၊ arc သင်္ကေတဖြင့် (DAR) |
| `DIMASZ` | | Dimension setting: Arrow size |
| `DIMBASELINE` | `DBA`, `DIMBASE` | base line တစ်ခုမှ ပုံးထပ်ထားသော dimensions |
| `DIMBREAK` | `DBREAK` | dimension နှင့် extension lines များ အခြားအရာဝတ္ထုများ ဖြတ်သည့်နေရာတွင် ဖြတ် (Auto)၊ ပွိုင့်နှစ်ခုကြား (Manual)၊ သို့မဟုတ် breaks များကို ဖယ် |
| `DIMCONSTRAINT` | `DCON` | Dimensional constraints: linear၊ aligned၊ angular၊ radius၊ diameter၊ convert |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | dimensions ကွင်းဆက်၊ တစ်ခုချင်းစီသည် နောက်ဆုံးအဆုံးမှ စ |
| `DIMDEC` | | Dimension setting: Decimal places |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | arc သို့မဟုတ် circle ၏ အချင်း |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | dimensions များကို ချိတ်ဆက်ထားသော အရာဝတ္ထုများမှ လွတ်စေ (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | dimension စာသား ပြောင်း (Home, New text, Rotate) သို့မဟုတ် extension lines များကို စောင်း (Oblique) |
| `DIMEXE` | | Dimension setting: dimension line ကျော်သော extension |
| `DIMEXO` | | Dimension setting: origin မှ offset |
| `DIMGAP` | | Dimension setting: စာသားဝန်းကျင် gap |
| `DIMINSPECT` | | Inspection dimension: တန်ဖိုးပတ်လည် frame၊ label နှင့် အပိုင်းကို မည်မျှ မကြာခဏ စစ်ဆေးသည်ကို ပါသည် |
| `DIMJOGGED` | `DJO`, `JOG` | Jogged radius dimension: center ဝေးသောအခါ ပိုနီးသော ပွိုင့်မှ ဆွဲသော radius (DJO) |
| `DIMJOGLINE` | `DJL` | linear သို့မဟုတ် aligned dimension line သို့ jog သင်္ကေတ ထည့်၊ အကွာအဝေး စကေးအတိုင်း မဆွဲကြောင်း ပြရန် (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | အလျားလိုက် သို့မဟုတ် ဒေါင်လိုက် အကွာအဝေး (R က မည်သည့်ထောင့်မဆို) |
| `DIMLUNIT` | | Dimension setting: အရှည် format (1 scientific, 2 decimal, 3 engineering, 4 architectural, 5 fractional) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinate dimension: ပွိုင့်တစ်ခု၏ UCS origin မှ X သို့မဟုတ် Y အကွာအဝေး၊ leader ပေါ်တွင် (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | ရွေးထားသော dimensions များ၏ dimension variables များကို style မပြောင်းဘဲ override; Clear က style ကို ပြန်ထား (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | arc သို့မဟုတ် circle ၏ radius |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | dimension ၏ ပွိုင့်များကို အရာဝတ္ထုများနှင့် ချိတ်၊ ၎င်းတို့ ရွှေ့လျှင် လိုက်ပြီး ပြန်တိုင်း (DRE) |
| `DIMSCALE` | | Dimension setting: ယေဘုယျ စကေး (အရွယ်အစား × ဤတန်ဖိုး) |
| `DIMSPACE` | | parallel dimensions များကြား တူညီသော အကွာအဝေး၊ base dimension မှ တိုင်း (0 က တန်းစီ၊ Auto က စာသားအမြင့်နှစ်ဆ) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | အမည်ပေးထားသော dimension styles ကို ဖန်တီး၊ ပြော၊ လက်ရှိသတ်မှတ်၊ ဖျက်၊ သုံး၊ နှိုင်းယှဉ် (dialog; command line တွင် -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | dimension စာသားကို dimension line ၏ ဘယ်၊ ညာ သို့မဟုတ် အလယ်သို့ ရွှေ့ သို့မဟုတ် လှည့် |
| `DIMTEXTUNIT` | `DTU` | dimension စာသားကို mm, cm, m သို့မဟုတ် km၊ သို့မဟုတ် ဒရာဖ်၏ ကိုယ်ပိုင် units ဖြင့်: ရွေးထားသော dimensions များ၊ မဟုတ်လျှင် အသစ်များ (DTU) |
| `DIMTXT` | | Dimension setting: စာသားအမြင့် |
| `DIST` | `DI` | ပွိုင့်နှစ်ခုကြား အကွာအဝေးနှင့် ထောင့် |
| `DISTRIBUTE` | | ရွေးထားသော အရာဝတ္ထုများကို ဘေးမှဘေး သို့မဟုတ် အပေါ်အောက် တူညီစွာ ခွဲ: center များကြား တူညီသော အဆင့်၊ သို့မဟုတ် တူညီသော gaps; အပြင်ဘက်နှစ်ခု ကျန်ရစ်သည် |
| `DIVIDE` | `DIV` | DIVIDE (DIV): မျဉ်း၊ arc၊ circle၊ polyline၊ spline သို့မဟုတ် ellipse ကို ညီမျှသော အပိုင်းများ ဖြတ်သော အမှတ်များ။ ပွိုင့်များ၊ သို့မဟုတ် Block ဖြင့် အမှတ်တစ်ခုတိုင်းတွင် block။ |
| `DOCUMENTS` | `DOCS` | Documents panel ဖွင့်: ပရောဂျက် folder အတွက် ဒရာဖ်များကို check out/in လုပ်၊ revisions၊ release states နှင့် approval ကို စစ်ဆေး |
| `DOOR` | `DR` | နံရံတွင် တံခါး ချ။ သင်နှိပ်သော ဘက်သည် ပွင့်သွားသည့်ဘက်ဖြစ်သည်။ |
| `DRAWORDER` | | draw order ပြောင်း: အရာဝတ္ထုများကို ရှေ့သို့ ယူ၊ နောက်သို့ ပို့၊ သို့မဟုတ် အခြားအရာဝတ္ထုများ အပေါ် သို့မဟုတ် အောက်တွင် ထား။ |
| `DUPLICATE` | `DUP` | ပွိုင့်နှင့်အတူ ရွှေ့သော မိတ္တူ: နှိပ်ပြီး ချထား (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | ဒရာဖ်၏ properties: ခေါင်းစဉ်၊ ရေးသူနှင့် အခြား၊ ကိုယ်ပိုင် name နှင့် value အတွဲများ |
| `DXFOUT` | | ဒရာဖ်ကို DXF R12 အဖြစ် ဒေါင်းလုဒ် (Save က ကိုယ်ပိုင်ဖော်မတ်ကို ထိန်း) |
| `EATTEDIT` | `DDATTE` | block reference ၏ attributes ကို တည်းဖြတ်: တန်ဖိုး၊ စာသားနှင့် properties၊ attribute တစ်ခုချင်းစီ |
| `ELLIPSE` | `EL` | axis endpoints နှင့် အခြား half-axis |
| `ERASE` | `E`, `DELETE` | အရာဝတ္ထုများ ဖယ်ရှား |
| `EXPLODE` | `X` | polylines၊ blocks နှင့် dimensions များကို အစိတ်အပိုင်းများအဖြစ် ခွဲ |
| `EXPORT` | `EXP` | add-on က ရေးသော ဖိုင်အမျိုးအစားဖြင့် ဒရာဖ်၏ မိတ္တူကို သိမ်း |
| `EXPORT3D` | `3DEXPORT` | 3D model ကို export: GLB၊ OBJ သို့မဟုတ် STL |
| `EXPORTPOINTS` | `EXPPTS` | ပွိုင့်များနှင့် attribute တစ်ခုပါသော blocks ၏ insertion points ကို description အဖြစ် CSV သို့မဟုတ် TXT ဖိုင် (PNEZD၊ PENZD သို့မဟုတ် XYZ) သို့ ရေး BIM နှင့် survey ပရိုဂရမ်များအတွက် |
| `EXTEND` | `EX` | အရာဝတ္ထုများကို အခြားတစ်ခုနှင့် တွေ့သည်အထိ ရှည်ချဲ့: အဆုံးနားကို နှိပ်၊ အများအပြား ဆွဲ၊ သို့မဟုတ် Shift+click ဖြင့် ဖြတ် |
| `EXTRIM` | | EXTRIM: cutting edge တစ်ခု၊ ထို့နောက် ဘက်တစ်ခု ရွေး။ ထို edge ကို ဖြတ်သော အရာအားလုံးကို ထိုဘက်တွင် ဖြတ်သည်။ ပျောက်မည့် အစိတ်အပိုင်းများကို cursor ရွှေ့သည့်အခါ ပြသည်။ |
| `EXTRUDE` | `EXT` | ပိတ်ထားသော 2D အရာဝတ္ထုများကို solids အဖြစ် extrude (3D) |
| `FIELD` | | စာသား၊ ဇယားဆဲလ် သို့မဟုတ် attribute တွင် field ထည့်: ရက်စွဲ၊ ဖိုင်အမည်၊ sheet နံပါတ်၊ ဒရာဖ် property၊ အရာဝတ္ထု၏ ဧရိယာ သို့မဟုတ် အရှည်၊ သို့မဟုတ် ပုံသေနည်း |
| `FILLET` | `F` | အရာဝတ္ထုနှစ်ခုကြား ထောင့်ကို ကွေး သို့မဟုတ် စတုရန်းလုပ် (R radius၊ P polyline ၏ ထောင့်တိုင်း၊ M အများအပြား) |
| `FIND` | | စာသား၊ attribute တန်ဖိုးများနှင့် dimension စာသားထဲ စကားလုံးများကို ရှာပြီး အစားထိုး |
| `FLATTEN` | | ရွေးထားသော အရာဝတ္ထုများ၏ အမြင့် (Z) နှင့် အထူကို 0 သတ်မှတ်၊ ၎င်းတို့ သုံးသော blocks တွင်လည်း။ |
| `FLOOR` | | ဆွဲရန် floor ရွေး၊ တစ်ခု ထည့်၊ သို့မဟုတ် ရွေးထားမှုကို ရွှေ့ သို့မဟုတ် ကူးပါ။ |
| `FLOORLAYERS` | | floors များကို Floor-Layer အမည်ရှိ layers အဖြစ် ပြောင်း၊ floors မပါသော တစ်ဦးထံ ပို့မည့် ဖိုင်အတွက်။ |
| `FLOORS` | `FLR` | Floors panel ဖွင့်: model space တစ်ခုတည်းတွင် floors ပုံးထပ်ထား။ |
| `GCCOINCIDENT` | | Constraint: ပွိုင့်နှစ်ခု တွေ့၊ သို့မဟုတ် ပွိုင့်တစ်ခု အရာဝတ္ထုပေါ် ကျန်ရစ် |
| `GCCOLLINEAR` | | Constraint: မျဉ်းနှစ်ကြောင်း တစ်ကြောင်းတည်းပေါ် ကျန်ရစ် |
| `GCCONCENTRIC` | | Constraint: circle နှစ်ခု သို့မဟုတ် arc နှစ်ခု အလယ်ဗဟို တူ |
| `GCEQUAL` | | Constraint: မျဉ်းနှစ်ကြောင်း အရှည်တူ၊ သို့မဟုတ် circle/arc နှစ်ခု radius တူ |
| `GCFIX` | | Constraint: ပွိုင့် သို့မဟုတ် အရာဝတ္ထုတစ်ခုလုံး နေရာမှာပဲ ကျန်ရစ် |
| `GCHORIZONTAL` | | Constraint: မျဉ်း (သို့မဟုတ် ပွိုင့်နှစ်ခု) အလျားလိုက်ဖြစ်နေ |
| `GCPARALLEL` | | Constraint: မျဉ်းနှစ်ကြောင် ပြိုင်ဖြစ်နေ |
| `GCPERPENDICULAR` | | Constraint: မျဉ်းနှစ်ကြောင် ထောင့်မှန်ဖြစ်နေ |
| `GCSYMMETRIC` | | Constraint: ပွိုင့်နှစ်ခု၊ မျဉ်းများ သို့မဟုတ် circles များ မျဉ်းတစ်ကြောင်းကို ဖြတ်၍ အချင်းချင်း မှန်ပြောင်း |
| `GCTANGENT` | | Constraint: မျဉ်းနှင့် circle သို့မဟုတ် arc (သို့မဟုတ် နှစ်ခု) ထိတွေ့နေ |
| `GCVERTICAL` | | Constraint: မျဉ်း (သို့မဟုတ် ပွိုင့်နှစ်ခု) ဒေါင်လိုက်ဖြစ်နေ |
| `GDSIN` | `GDS` | IC layout (GDSII stream ဖိုင်) ကို ကြည့်: layer နှင့် datatype တိုင်းကို ဒရာဖ် layer အဖြစ်၊ flat၊ user units ဖြင့်; ကြည့်ရန်နှင့် တိုင်းရန်သာ (lab spike) |
| `GEOMCONSTRAINT` | `GCON` | ဂျီသြမေတြီ constraints: အလျားလိုက်၊ ဒေါင်လိုက်၊ ပြိုင်၊ ထိတွေ့၊ တူညီ… |
| `GLBOUT` | | 3D model ကို GLB (glTF) အဖြစ် export |
| `GRADIENT` | `GD` | နေရာတစ်ခုကို အရောင်တစ်ခု သို့မဟုတ် နှစ်ခု၏ gradient ဖြင့် ဖြည့် |
| `GRIDMOVE` | `GM` | grid line တစ်ခုကို ရွှေ့ပြီး ၎င်းပေါ် ကပ်နေသည်များကို ယူသွား: နံရံများ ဆန့်၊ ကော်လံများ၊ bubbles နှင့် tags ရွှေ့၊ dimensions လိုက်။ |
| `GROUP` | `G` | GROUP (G): ရွေးထားသော အရာဝတ္ထုများကို ဝေမျှသော အမည်ပေး။ တစ်ခုကို နှိပ်လျှင် အားလုံးကို ရွေးသည်။ အမည်တွင် Enter နှိပ်လျှင် အမည်မပါသော group ဖြစ်သည်။ |
| `GROUPEDIT` | | GROUPEDIT: group ကို ပြောင်း။ အရာဝတ္ထုတစ်ခုကို ရွေး သို့မဟုတ် Name ပေး၊ ထို့နောက် objects Add သို့မဟုတ် Remove၊ REName၊ Description ပြောင်း၊ သို့မဟုတ် နှိပ်လျှင် အားလုံးကို ရွေးမရွေး သတ်မှတ်။ |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | နေရာတစ်ခုကို အစိုင်အခဲ fill သို့မဟုတ် pattern ဖြင့် ဖြည့်: အတွင်းဘက်ကို နှိပ် သို့မဟုတ် ပိတ်ထားသော အရာဝတ္ထုများ ရွေး (H) |
| `HATCHEDIT` | `HE` | hatch ပြောင်း: pattern၊ စကေး၊ ထောင့်၊ origin နှင့် boundary သို့ ချိတ်ဆက်မှု။ |
| `HATCHGENERATEBOUNDARY` | `HGB` | hatch မှ boundary polylines ကို ပြန်ဖန်တီး၊ ချိတ်ထားသည် သို့မဟုတ် မချိတ်ထားသည်ဖြစ်စေ |
| `HATCHTOBACK` | | hatch အားလုံးကို အခြားအရာတိုင်း၏ နောက်သို့ ပို့။ |
| `HELP` | `?` | ဤစာရင်း |
| `HIDEOBJECTS` | | UNISOLATEOBJECTS မတိုင်မီ ရွေးထားသော အရာဝတ္ထုများကို ဖျောက်။ ဒရာဖ်နှင့်အတူ မသိမ်းပါ။ |
| `HISTORY` | `HIST` | HISTORY (HIST): ဤဒရာဖ်၏ ဗားရှင်းများ: Studio သိမ်းသည့်အခါ ဤကွန်ပျူတာတွင် ထားသော မိတ္တူများနှင့် cloud ၏ ဗားရှင်းများ၊ ဖွင့်၊ ပြန်ယူ၊ နှင့် ပြောင်းလဲမှုကို အရောင်ဖြင့် နှိုင်းယှဉ် |
| `ID` | | ပွိုင့်တစ်ခု၏ coordinates |
| `IMAGE` | `IM` | ဒရာဖ်အသုံးပြုသော ပုံဖိုင်များကို CadCraft သို့ ပေး (DWG က နေရာကိုသာ သိမ်းသည်)။ |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | ဖိုင်မှ ပုံ (PNG သို့မဟုတ် JPEG) ချ။ |
| `IMAGECLIP` | `ICL` | ပုံကို rectangle သို့မဟုတ် polygon ဖြင့် clip၊ သို့မဟုတ် clip ဖယ်။ |
| `IMPORT` | `IMP` | add-on က ဖတ်သော အမျိုးအစား ဖိုင်ကို ဤဒရာဖ်သို့ သွင်း |
| `INSERT` | `I`, `DDINSERT` | block ချ (S စကေး၊ R လည်ပတ်); F ဖြင့် DWG/DXF ဖိုင်မှ၊ L ဖြင့် library မှ |
| `INTERSECT` | `IN` | solids တွင် ဘုံဖြစ်သည်ကိုသာ ထား (3D)၊ သို့မဟုတ် 2D regions ဘုံဧရိယာ |
| `ISODRAFT` | | ISODRAFT: isometric drafting ဖွင့်/ပိတ်၊ သို့မဟုတ် Left, Top သို့မဟုတ် Right plane ပေါ်သို့ တိုက်ရိုက်။ ဖွင့်ထားစဉ် Ortho နှင့် polar tracking က plane ၏ axes နှစ်ခုကို လိုက်၊ grid က isometric ဆွဲ၊ ELLIPSE တွင် Isocircle ရှိ။ |
| `ISOLATEOBJECTS` | `ISOLATE` | ရွေးထားသော အရာဝတ္ထုများကိုသာ ပြ; ဤနေရာရှိ အခြားအရာအားလုံး UNISOLATEOBJECTS မတိုင်မီ ဖျောက်ထား။ ဒရာဖ်နှင့်အတူ မသိမ်းပါ။ |
| `ISOPLANE` | | ISOPLANE: isometric plane ရွေး: Left, Top သို့မဟုတ် Right။ Enter က နောက်တစ်ခုသို့ သွား၊ isometric drafting ဖွင့်ထားစဉ် F5 ကဲ့သို့။ |
| `JOIN` | `J` | အဆုံးချင်း တွေ့သော မျဉ်း၊ arc နှင့် polylines များကို polyline တစ်ခုအဖြစ်; တစ်ကြောင်းတည်းပေါ်ရှိ မျဉ်းများကို မျဉ်းတစ်ကြောင်း (J) |
| `LASER` | `LASERCUT` | Laser panel ဖွင့်: layers များကို laser cutter သို့မဟုတ် engraver သို့ ပို့ (GRBL G-code) |
| `LASSOMODE` | | နှိပ်ပြီး ဆွဲလျှင် lasso (1) သို့မဟုတ် rectangle (0) ဆွဲ |
| `LAYDEL` | | layer တစ်ခုနှင့် ၎င်းပေါ်ရှိ အရာဝတ္ထုအားလုံးကို ဖျက် (model၊ sheets နှင့် blocks တွင်) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Layer manager ဖွင့်: layers အားလုံးကို ဇယားတစ်ခုတည်းတွင် |
| `LAYERPANEL` | | layers panel ကို ပြ |
| `LAYFRZ` | | ရွေးသော အရာဝတ္ထု တစ်ခုချင်းစီ၏ layer ကို freeze |
| `LAYGROUP` | `LG` | Layers panel တွင် layers များကို folders အဖြစ် အုပ်စုဖွဲ့ |
| `LAYISO` | | ရွေးထားသော အရာဝတ္ထုများ၏ layers ကို isolate (အခြား layer အားလုံးပိတ်) |
| `LAYLOCKFADE` | | layers ပိတ်ထားသော အရာဝတ္ထုများ မှေးမှိန်ပုံနှင့် နှိပ်လျှင် ရွေးနိုင်မနိုင် သတ်မှတ် |
| `LAYMCUR` | | နှိပ်ထားသော အရာဝတ္ထု၏ layer ကို current လုပ် |
| `LAYMRG` | | layers ပေါင်း: ၎င်းတို့၏ အရာဝတ္ထုများ target layer သို့ ရွှေ့ပြီး ပေါင်းထားသော layers ပျောက် |
| `LAYOFF` | | နှိပ်ထားသော အရာဝတ္ထု တစ်ခုချင်းစီ၏ layer ကို ပိတ် |
| `LAYON` | | layers အားလုံးကို ဖွင့် |
| `LAYOUT` | `LO`, `NEWLAYOUT` | ခေါင်းစဉ် block နှင့် viewport ပါသော sheet အသစ် |
| `LAYTHW` | | layers အားလုံးကို thaw |
| `LAYUNISO` | | LAYISO ပိတ်ထားသော layers များကို ပြန်ဖွင့် |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | ဟောင်း ဗီယက်နမ် fonts (TCVN3 / ABC fonts ဥပမာ .VnTime၊ VNI fonts ဥပမာ VNI-Times) ဖြင့် ရိုက်ထားသော စာသားကို Unicode သို့ ပြောင်း။ ထိုစာသားကို ဖတ်ရသလို ပြပြီးသား; ဤအမိန့်က အပြီးတိုင် ပြန်ရေးပြီး အရေအတွက်နှင့် undo တစ်ကြိမ်ဖြင့်။ |
| `LENGTHEN` | `LEN` | မျဉ်း၊ arc နှင့် polylines များကို ရှည်ထွက် သို့မဟုတ် တိုစေ: ပမာဏ၊ ရာခိုင်နှုန်း၊ စုစုပေါင်း၊ သို့မဟုတ် ဆွဲ (LEN) |
| `LIBRARY` | `LIB` | Library panel: အရာများ ချ၊ update စစ်၊ credits |
| `LIMITS` | | ဒရာဖ် limits သတ်မှတ်: ON၊ OFF၊ သို့မဟုတ် ဘယ်အောက်နှင့် ညာအပေါ် ထောင့်များ။ limits ON ဖြစ်စဉ် ၎င်းအပြင်ရှိ ပွိုင့်များကို ငြင်းသည် |
| `LINE` | `L` | မျဉ်းဖြောင့် အပိုင်းများ၊ တစ်ခုချင်းစီ ကိုယ်ပိုင် အရာဝတ္ထု |
| `LINETYPE` | `LT`, `CELTYPE` | အသစ်အရာဝတ္ထုများ ရရှိမည့် linetype (layer အလိုက်၊ block အလိုက်၊ သို့မဟုတ် အမည်ပေးထားသော) |
| `LINKVIEWS` | `SYNCVIEWS` | မျက်နှာပြင်အားလုံးကို အတူ pan နှင့် zoom (split screen)၊ ဒရာဖ်နှစ်ခု သို့မဟုတ် revisions နှိုင်းယှဉ်ရန် |
| `LISPEDIT` | `VLIDE` | LISPEDIT (သို့မဟုတ် VLIDE) က LISP editor ဖွင့်: routine ရေး၊ load လုပ်၊ စမ်း။ ဒရာဖ်သို့ Load က APPLOAD ဖြင့် ဖိုင်ကို load သလို form အားလုံးကို ဖတ်ပြီး ၎င်း၏ အမိန့်များ ပြုလုပ်သည်။ Run selection က ရွေးထားသော forms သို့မဟုတ် cursor ရှိ form ကို တွက်သည်။ console က routine ပြထားသည်များနှင့် error တစ်ခုချင်းစီကို line ဖြင့် ပြသည်။ စာသားဘေးရှိ စာရင်းများက routine သတ်မှတ်သော functions၊ ဤ LISP တွင် မရှိသေးဘဲ ခေါ်သော functions နှင့် ရှိသည့် function အားလုံးကို ပြသည်။ ဝင်းဒိုးက ဒရာဖ်ကို မပိတ်ဆို့ဘဲ routine က ပွိုင့်တောင်းနိုင်သည်; Stop သို့မဟုတ် Esc က ပြေးနေသော routine ကို ရပ်သည်။ |
| `LIST` | `LI`, `LS` | history ထဲ အရာဝတ္ထုများကို ဖော်ပြ |
| `LTSCALE` | `LTS` | ဒရာဖ်၏ linetype စကေး (dash နှင့် gap တိုင်း ၎င်းဖြင့် မြှောက်သည်) |
| `LWDISPLAY` | `LWT` | မျက်နှာပြင်တွင် lineweights ကို ပြ သို့မဟုတ် ဖျောက် (status bar ရှိ LWT ခလုတ်) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | အသစ်အရာဝတ္ထုများ ရရှိမည့် lineweight (layer အလိုက်၊ block အလိုက်၊ default၊ သို့မဟုတ် mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | model space အောက်ရှိ map layers: ဒရာဖ်၏ coordinate system၊ tiles၊ WMS၊ WMTS၊ ArcGIS၊ ပုံများ |
| `MASSPROP` | | MASSPROP: regions နှင့် ပိတ်ထားသော အရာဝတ္ထုများ၏ section properties: ဧရိယာ၊ ပတ်လည်အလျား၊ centroid၊ moments နှင့် product of inertia၊ radii of gyration နှင့် principal axes။ မျဉ်းနှင့် arc အတွက် တိကျသည်။ အစီရင်ခံစာကို စာသားဖိုင်သို့ ရေးနိုင်သည်။ |
| `MATCHPROP` | `MA`, `PAINTER` | properties ကိုက်ညီ: အရာဝတ္ထုတစ်ခု၏ layer၊ color နှင့် အခြားကို အခြားတွင် ကူး (MA) |
| `MEASURE` | `ME` | MEASURE (ME): မျဉ်း၊ arc၊ circle၊ polyline၊ spline သို့မဟုတ် ellipse တလျှောက် ပေးထားသော အလျားတိုင်း အမှတ်တစ်ခု၊ နှိပ်ထားသော နေရာနှင့် အနီးဆုံး အဆုံးမှ။ ပွိုင့်များ၊ သို့မဟုတ် Block ဖြင့် အမှတ်တိုင်းတွင် block။ |
| `MEASUREGEOM` | `MEA` | အကွာအဝေး၊ radius၊ ထောင့် သို့မဟုတ် ဧရိယာကို တိုင်း (MEA) |
| `MINSERT` | | MINSERT: block ကို အတန်းနှင့် ကော်လံများဖြင့် တစ်ကြိမ်တည်း ချ။ တစ်ခုချင်းစီသည် ကိုယ်ပိုင် reference ဖြစ်သဖြင့် မည်သည့်တစ်ခုကိုမဆို ရွှေ့ သို့မဟုတ် ဖျက်နိုင်သည်။ |
| `MIRROR` | `MI` | မျဉ်းတစ်ကြောင်းကို ဖြတ်၍ အရာဝတ္ထုများ မှန်ပြောင်း |
| `MLEADER` | `MLD`, `MLEAD` | Multileader: မြား၊ leader နှင့် မှတ်ချက်၊ အရာဝတ္ထုတစ်ခုအဖြစ် (MLD) |
| `MLEADERALIGN` | `MLA` | multileaders များကို ၎င်းတို့တစ်ခုနှင့် လမ်းညွှန်ချက်တစ်ခုတည်းတွင် တန်းညှိ၊ အကွာအဝေးတူ၊ သို့မဟုတ် ပွိုင့်နှစ်ခုကြား ခွဲ (MLA) |
| `MLEADERCOLLECT` | `MLC` | multileaders အများအပြားကို တစ်ခုတည်းသို့ စုစည်း: ၎င်းတို့၏ blocks ကို အတန်း သို့မဟုတ် ကော်လံ၊ သို့မဟုတ် မှတ်ချက်များကို တစ်ခုအောက် တစ်ခု (MLC) |
| `MLEADEREDIT` | `MLE` | multileader သို့ leader lines ထည့် သို့မဟုတ် ဖယ်; အကြောင်းအရာကို စာသားနှင့် block အကြား ပြောင်း (MLE) |
| `MLINE` | | parallel မျဉ်းများကို တစ်ပြိုင်တည်း ဆွဲ၊ ထောင့်များတွင် ချိတ်ဆက်။ |
| `MOVE` | `M` | base point နှင့် ဒုတိယ ပွိုင့်ဖြင့် အရာဝတ္ထုများ ရွှေ့ |
| `MSPACE` | `MS` | ဖွင့်ထားသော sheet ၏ viewport တစ်ခုမှတစ်ဆင့် model ပေါ် လုပ် (သို့မဟုတ် viewport အတွင်း double-click)။ |
| `MTEXT` | `MT`, `T` | စာပိုဒ် စာသား: အကျယ်ကို ဆွဲ၊ ထို့နောက် နေရာတွင် ရိုက်; Enter က စာပိုဒ်အသစ် (T) |
| `MVIEW` | `MV` | layout ပေါ်ရှိ model ကို ကြည့်သော viewport |
| `NAMEDVIEW` | `NV`, `VIEWS` | အမည်ပေးထားသော views: မျက်နှာပြင်ပေါ် view (သို့မဟုတ် ဝင်းဒိုး) ကို အမည်ဖြင့် သိမ်းပြီး ပြန်သွား (NV) |
| `NCOPY` | | block reference သို့မဟုတ် ချိတ်ထားသော ဒရာဖ်မှ အရာဝတ္ထုများကို explode မလုပ်ဘဲ ဒရာဖ်သို့ ကူး။ |
| `NEARBY` | | cursor အနီးရှိ အရာများကို အနီးဆုံးမှစ၍ အကွာအဝေးနှင့် ဘက်ဖြင့် ပြော။ |
| `NEW` | | ဒရာဖ်အသစ် စတင် |
| `OBJECTSCALE` | `OBJSCALE` | annotative စာသားနှင့် dimensions ၏ annotation စကေးများ: စကေးထည့်၊ ဖျက်၊ လက်ရှိစကေးထည့်၊ သို့မဟုတ် စာရင်းပြ (viewport တိုင်း ကိုယ်ပိုင်စကေး အရွယ်အစားဖြင့် ပြ) |
| `OBJOUT` | | 3D model ကို OBJ အဖြစ် export |
| `OFFSET` | `O` | အကွာအဝေးတစ်ခုတွင် parallel မိတ္တူများ |
| `OFFSETGAPTYPE` | | OFFSETGAPTYPE: OFFSET က polyline ၏ အပြင်ဘက်ထောင့်များရှိ gaps ကို မည်သို့ပိတ်သည်။ 0 က segments ကို ဆန့်၊ 1 က arc ထည့်၊ 2 က တည့်တည့် ဖြတ်ထည့်။ ဤ session အတွက် ထိန်း။ |
| `OLELIST` | `OLES` | ဒရာဖ်တွင် ပါသော OLE အရာဝတ္ထုများကို စာရင်းပြ၊ တစ်ခု၏ ပုံမိတ္တူကို သင်ရွေးသော နေရာတွင် ထား |
| `OPEN` | | ဤကွန်ပျူတာမှ DWG သို့မဟုတ် DXF ဖွင့် |
| `OPENIN3D` | | ဤဒရာဖ်ကို 3D modeling app တွင် tab အသစ်ဖြင့် ဖွင့် (ဘာမှ upload မလုပ်) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | object snap menu ဖွင့်: ဘယ် snaps ဖွင့်မလဲ ရွေး။ status bar ရှိ Snap ပေါ် right-click လည်း ရ။ |
| `OVERKILL` | | ပွားနေသော အရာဝတ္ထုများ ဖျက်ပြီး ထပ်နေသော သို့မဟုတ် အဆုံးချင်း တွေ့သော မျဉ်းများနှင့် arcs ကို tolerance အတွင်း ပေါင်း။ |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parameters panel: user parameters နှင့် dimensional constraints ကို ဇယားတစ်ခုတည်းတွင် |
| `PARTSLIST` | `PLIST` | Library မှ ထားသော စံ အစိတ်အပိုင်းနှင့် သံမဏိပိုင်းပိုင်း အားလုံး၏ parts list ဇယား |
| `PASTEAREA` | `PAREA` | MarkupCraft တွင် ကူးထားသော နေရာ (Copy area) ကို အမှန်အရွယ်အစားဖြင့် ပုံအဖြစ် ကူးထည့် |
| `PASTEBLOCK` | | PASTEBLOCK: ကူးထားသည်ကို block တစ်ခုအဖြစ် ကူးထည့်။ block က ကိုယ်ပိုင်အမည် ရ; RENAME ဖြင့် သင့်အမည် ပေး |
| `PASTECLIP` | | clipboard ကို ကူးထည့်: cursor နောက်လိုက်၊ သွားရမည့်နေရာ နှိပ် (Ctrl+V) |
| `PASTEORIG` | | clipboard ကို ကူးခဲ့သော coordinates တွင် ကူးထည့် (Ctrl+Shift+V) |
| `PDF` | | ဒရာဖ်၏ underlays များအသုံးပြုသော PDF ဖိုင်များကို CadCraft သို့ ပေး |
| `PDFADJUST` | | PDF underlay ကို မှေးမှိန်၊ contrast၊ monochrome သို့မဟုတ် ပိတ် |
| `PDFATTACH` | `PDFATT` | PDF စာမျက်နှာကို underlay အဖြစ် ချိတ် (PDFATTACH) |
| `PDFCLIP` | | PDF underlay ကို rectangle သို့မဟုတ် polygon ဖြင့် clip |
| `PDFIMPORT` | `PDFIM` | PDF စာမျက်နှာ၏ မျဉ်း၊ အဖြည့်နှင့် စာသားများကို ဒရာဖ်အရာဝတ္ထုများအဖြစ် ပြောင်း (PDFIMPORT) |
| `PDFLAYERS` | | PDF underlay ၏ layers များကို ဖွင့်/ပိတ် |
| `PEDIT` | `PE` | polyline တည်းဖြတ်: ပိတ်၊ ဖွင့်၊ ချိတ်၊ အကျယ်၊ curve ကိုက်ညီ၊ spline curve၊ decurve၊ linetype generation၊ ပြောင်းပြန်; မျဉ်း၊ arc နှင့် spline များကို polylines ပြောင်းနိုင် |
| `PHOTOSKETCH` | `PSK` | စက္ကူပေါ် လက်ဖြင့် ရေးထားသော ပုံဆွဲကို ဓာတ်ပုံမှ စကေးဖြင့် မျဉ်းနှင့် arcs အဖြစ် ပြောင်း၊ perspective ကို ဖြောင့်၍ ဆေးတံအရောင်တစ်ခုချင်းစီကို ကိုယ်ပိုင် layer ပေး။ |
| `PICKSTYLE` | | PICKSTYLE: group ၏ အရာဝတ္ထုတစ်ခုကို ရွေးလျှင် group တစ်ခုလုံး ရွေးမရွေး (1၊ စတင် သတ်မှတ်ချက်) သို့မဟုတ် ထိုအရာဝတ္ထုတစ်ခုတည်းသာ (0)။ ဤ session အတွက် ထိန်း။ |
| `PLAN` | | view ကို လှည့်ပြီး UCS X axis (Current ucs၊ သိမ်းထားသော Ucs၊ သို့မဟုတ် World) မျက်နှာပြင်တွင် ညီ။ ဒရာဖ်ရှိ ဘာမှ မရွှေ့။ |
| `PLINE` | `PL` | မျဉ်းနှင့် arc အပိုင်းများ၏ polyline |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | PDF သို့ plot: layout၊ သို့မဟုတ် စကေးဖြင့် model |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plot style tables: အရောင်တစ်ခုချင်းစီ (color၊ black၊ gray၊ ink၊ lineweight) ဘာအဖြစ် print ထွက်မလဲ သတ်မှတ်; ဒရာဖ်နှင့်အတူ သိမ်း (STYLESMANAGER) |
| `POINT` | `PO` | ပွိုင့် အရာဝတ္ထုများ |
| `POINTCLOUD` | `PC` | ချိတ်ထားသော point cloud: slice၊ height၊ thickness၊ color၊ size၊ visible၊ zoom၊ detach |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | point cloud ချိတ် (LAS, LAZ, XYZ, PTS) ဒရာဖ်အောက်တွင် |
| `POLARANG` | | polar tracking step ဒီဂရီဖြင့် (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | regular polygon |
| `PRESSPULL` | | solid ၏ face တစ်ခုကို တွန်း သို့မဟုတ် ဆွဲ (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Properties panel ဖွင့် (Ctrl+1 ဖြစ်စေ၊ အရာဝတ္ထုကို double-click ဖြစ်စေ) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Properties panel ကို ဝင်းဒိုး၏ အစွန်းသို့ ခေါက်ထား |
| `PSPACE` | `PS` | လုပ်နေသော viewport မှ ထွက်ပြီး sheet သို့ ပြန်သွား (သို့မဟုတ် ပြင်ပတွင် double-click)။ |
| `PUBLISH` | `-PUBLISH` | sheets အများအပြား သို့မဟုတ် အားလုံးကို PDF တစ်ခုတည်းသို့ plot (sheet တိုင်း စာမျက်နှာနှင့် bookmark) |
| `PURGE` | `PU` | ဘာမှ မသုံးထားသော block အဓိပ္ပာယ်ဖွင့်ဆိုချက်များ ဖယ် |
| `QDIM` | | Quick dimension: အရာဝတ္ထုများစွာကို တစ်ကြိမ်တည်း dimension (continuous၊ baseline၊ staggered၊ ordinate၊ radius သို့မဟုတ် diameter) |
| `QPMODE` | `QP` | cursor ဖြင့် Quick Properties ဖွင့်/ပိတ် |
| `QSELECT` | `QS` | Quick select: layer၊ color၊ အရွယ် သို့မဟုတ် အမည် ကိုက်ညီသော အမျိုးအစား၏ အရာဝတ္ထုအားလုံး (QS) |
| `RASTERSNAP` | | scan လုပ်ထားသော စက္ကူ၏ မျဉ်းများသို့ snap ဖွင့်/ပိတ်။ |
| `RAY` | | Ray: ပွိုင့်တစ်ခုမှ တစ်ဖက်တည်း အဆုံးမဲ့ construction line။ |
| `RECOVER` | | ပျက်စီးနေသော DXF သို့မဟုတ် DWG ဖွင့်: ဖတ်မရသည်များကို ကျော်၊ ကျော်သွားသည်ကို ပြော၊ ထို့နောက် AUDIT ကဲ့သို့ စစ်ဆေးပြင်။ |
| `RECTANG` | `REC`, `RECTANGLE` | ထောင့်နှစ်ခုမှ ပိတ်ထားသော polyline |
| `REDLINE` | `RDL` | revision သို့ Redline: MarkupCraft redline package ကို ဖတ်၊ ပြောင်းလဲမှု တစ်ခုချင်းစီကို လက်ခံ သို့မဟုတ် ပယ်၊ လက်ခံထားသည်များကို revision log ဖြင့် cloud ပုံဖော်၊ အဖြေဖိုင်ကို သိမ်း (RDL) |
| `REDO` | | undo ထားသည်ကို ပြန်လုပ် |
| `REFCLOSE` | | block ကို နေရာတွင် တည်းဖြတ်ခြင်းကို အဆုံးသတ်: သိမ်း သို့မဟုတ် ပြောင်းလဲမှု ပယ် |
| `REFEDIT` | | block ကို နေရာတွင် တည်းဖြတ်၊ ၎င်း၏ reference ရှိနေရာတွင်၊ ကျန်ဒရာဖ်ကို မှေးမှိန်; REFCLOSE က သိမ်း |
| `REGEN` | `RE` | ဤ tab တွင် ဆွဲထားသည်ကို ဒရာဖ်မှ ပြန်တည်ဆောက် |
| `REGENALL` | `REA` | tab၊ pane နှင့် ဖွင့်ထားသော ဒရာဖ် အားလုံးတွင် ဆွဲထားသည်ကို ပြန်တည်ဆောက် |
| `REGION` | `REG` | REGION (REG): ပိတ်ထားသော အရာဝတ္ထုများ၊ သို့မဟုတ် အဆုံးချင်း ပတ်ပြီး ပိတ်သော မျဉ်း၊ arc နှင့် polylines မှ regions (ပြားသော နေရာများ) ဖန်တီး။ UNION၊ SUBTRACT နှင့် INTERSECT က regions များကို ပေါင်းပြီး MASSPROP က section properties ပေး။ |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | scans အများအပြား မှတ်ပုံတင်: ရွေးထားသော အမှတ်တွဲများ သို့မဟုတ် targets ဖြင့် frame တစ်ခုတည်းတွင် ထား၊ ICP ဖြင့် ညှိ၊ LAS သို့မဟုတ် E57 တစ်ခုတည်း export |
| `REINIT` | | aliases ဖိုင်ကို ပြန် load |
| `RENAME` | `-RENAME`, `REN` | layer သို့မဟုတ် block အမည်ပြောင်း (အရာဝတ္ထု သို့မဟုတ် reference တိုင်း လိုက်) |
| `REVCLOUD` | `RC` | revision cloud: rectangle, polygon, လက်ဖြင့်ဆွဲလမ်းကြောင်း သို့မဟုတ် အရာဝတ္ထုတစ်ခုပတ်လည် ဝိုင်း (RC) |
| `REVOLVE` | `REV` | ပိတ်ထားသော 2D အရာဝတ္ထုများကို axis တစ်ခုပတ်လည် လှည့်ပြီး solids ပြု (3D) |
| `ROTATE` | `RO` | base point တစ်ခုပတ်လည် အရာဝတ္ထုများ လှည့် |
| `SAMPLES` | `SAMPLE` | CadCraft ၏ နမူနာဒရာဖ်တစ်ခု (ဗိသုကာ အစုံ၊ as-built) ဖွင့်၍ သင်ယူ |
| `SAVE` | `QSAVE` | ဒရာဖ်ကို ၎င်း၏ ဖော်မတ် (DWG သို့မဟုတ် DXF) ဖြင့် ဒေါင်းလုဒ် |
| `SAVEAS` | | ဒရာဖ်ကို DWG သို့မဟုတ် DXF အဖြစ် ဒေါင်းလုဒ်: ဘယ်ဟာ ရွေး |
| `SAYSEL` | | ရွေးထားသည်ကို ပြော၊ အကြောင်းတစ်ခုချင်းစီ။ |
| `SCALE` | `SC` | base point တစ်ခုပတ်လည် အရာဝတ္ထုများ စကေးချိန် |
| `SCALELISTEDIT` | `SCALELIST` | ဒရာဖ်၏ ကိုယ်ပိုင် စကေးများကို ထည့်၊ တည်းဖြတ်၊ ဖျက်; viewport နှင့် plot စကေး စာရင်းများတွင် ပေါ်ပြီး ဖိုင်တွင် သိမ်းသည် (SCALELIST) |
| `SCANALIGN` | `SCL` | scan လုပ်ထားသော စက္ကူကို ပွိုင့်နှစ်ခုသို့ ညှိ: ရွှေ့၊ လှည့်၊ လိုလျှင် စကေးချိန် |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | scan ဒရာဖ်ထည့်: PNG, JPEG သို့မဟုတ် TIFF (စာမျက်နှာတစ်ခု သို့မဟုတ် စာမျက်နှာအားလုံး) သို့မဟုတ် ပုံဖြစ်သော PDF စာမျက်နှာ။ |
| `SCANCLEAN` | `SCC` | scan လုပ်ထားသော စက္ကူကို အဖြူအမည်း လုပ်ပြီး အစက်အပြောက်များ ဖယ်။ |
| `SCANCROP` | `SCR` | scan လုပ်ထားသော စက္ကူကို ဝင်းဒိုးတစ်ခုအဖြစ် ဖြတ်။ |
| `SCANDESKEW` | `SCD` | scan စက္ကူ၏ ရှည်သောမျဉ်းများ ထောင့်ကို ရှာပြီး ထောင့်ကို လက်ခံသည်နှင့် စက္ကူကို ဒေါင့်မှန် လှည့်။ |
| `SCANERASE` | `SCE` | scan စက္ကူ၏ နေရာတစ်ခုကို ဖျက်: rectangle၊ polygon သို့မဟုတ် lasso။ |
| `SCANINFO` | `SCI` | scan စက္ကူ၏ မူရင်းဖိုင်နှင့် ထို့နောက် ပြုလုပ်ခဲ့သော အဆင့်များကို ပြ။ |
| `SCANSCALE` | `SCS` | scan စက္ကူကို စကေးချိန်: ပွိုင့်နှစ်ခု ရွေးပြီး ၎င်းတို့ကြား အမှန်အကွာအဝေးကို ရိုက်။ |
| `SCANTRACE` | `SCT` | scan စက္ကူကို layer အသစ်တစ်ခုပေါ်တွင် မျဉ်းနှင့် arcs အဖြစ် ခြေရာခံ၊ သင်သတ်မှတ်သော tolerance ဖြင့်။ စာသားနှင့် hatching များသည် raster အဖြစ် ကျန်သည်။ |
| `SELECT` | | အရာဝတ္ထုများ ယခု ရွေး (နောက်အမိန့်တွင် P၊ Previous အတွက်) |
| `SELECTALL` | `AI_SELALL` | ဤ tab တွင် တည်းဖြတ်နိုင်သော အရာဝတ္ထုအားလုံးကို ရွေး (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | သင်ရွေးသည်များနှင့် တူသော အရာအားလုံးကို ရွေး: အမျိုးအစား၊ layer နှင့် color တူ (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Sheet Set panel ပြ: ဒရာဖ်အများအပြားမှ sheets၊ နံပါတ်ပေး၊ PDF တစ်ခုတည်းအဖြစ် publish |
| `SHORTCUTS` | `KEYS` | အမိန့်တစ်ခုခုကို ကိုယ်ပိုင် ခလုတ် ပေး (Ctrl သို့မဟုတ် Alt နှင့် အက္ခရာ၊ သို့မဟုတ် အခမဲ့ function key)၊ ဤ browser သို့မဟုတ် desktop app တွင် သိမ်း။ |
| `SHXFONTS` | `SHX` | folder သို့မဟုတ် ဖိုင်များမှ CadCraft သို့ SHX fonts ပေး၊ ၎င်းတို့ကို အမည်ပေးသော text styles က ၎င်းဖြင့် ဆွဲ (စာရင်း၊ ဖယ်၊ ပြောင်းပြန်) |
| `SKETCHFIX` | `SKF` | လက်ဖြင့် ဆွဲမှန်များ ဆွဲ; တစ်ခုချင်းစီသည် သန့်ရှင်းသော မျဉ်း၊ circle၊ arc၊ rectangle သို့မဟုတ် polyline ဖြစ်လာပြီး အခြားများနှင့် ဒေါင့်မှန်ပြုကာ ချိတ်ဆက်သည်။ |
| `SKETCHLIVE` | `SKL` | ဘောပင်ဖြင့် ရေး: မှန်တိုင်း ကလမ်းကို ပင်ဖြုတ်သည့်အခါ ပိုတိကျသော မျဉ်း၊ circle၊ arc သို့မဟုတ် rectangle ဖြစ်လာပြီး ဒရာဖ်နှင့် ကပ်ကာ အရွယ်အစားကို ရိုက်ပြင်နိုင်သည်။ |
| `SPLINE` | `SPL` | ပွိုင့်များကို ဖြတ်ပြီး spline ဆွဲ (သို့မဟုတ် control polygon ဖြင့်)၊ သို့မဟုတ် polyline ကို spline ပြု |
| `SPLINEDIT` | `SPE` | spline တည်းဖြတ်: fit points၊ control points နှင့် weights၊ ဖွင့် သို့မဟုတ် ပိတ်၊ ပြောင်းပြန်၊ သို့မဟုတ် polyline သို့ ပြောင်း |
| `SPLIT` | | ဒရာဖ်နေရာကို panes များအဖြစ် ခွဲ (model ပေါ် VPORTS အဖြစ်; sheet မှလည်း) |
| `STEELMEMBER` | `SMEMBER` | စံ section မှ 3D သံမဏိ member: ပွိုင့်နှစ်ခု (beam) သို့မဟုတ် base point နှင့် အမြင့် (Column) |
| `STLOUT` | | 3D model ကို STL အဖြစ် export (မီလီမီတာ) |
| `STRETCH` | `S` | ဆန့်: အဆုံးများပေါ် crossing window ဆွဲ ရွှေ့; အတွင်းရှိသည် ရွှေ့၊ ကျန်သည် နေရာတွင်ပဲ (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | စာသား styles: ဖောင့်၊ အမြင့်၊ အကျယ်နှင့် ဘယ်ဘက်စောင်း ထည့်မည့် စာသား (dialog; command line တွင် -STYLE) |
| `SUBTRACT` | `SU` | အခြားမှ solids ကို ယူ (3D)၊ သို့မဟုတ် regions မှ 2D regions ကို ယူ |
| `SWBOUT` | `SWMACRO` | SolidWorks အတွက် macro (.swb) ဒေါင်းလုဒ်: မော်ဒယ်ကို sketch တစ်ခုတည်းဖြင့် ပြန်တည်ဆောက် |
| `SWEEP` | | ပိတ်ထားသော 2D အရာဝတ္ထုများကို path (မျဉ်း၊ polyline၊ arc၊ circle) တလျှောက် solids အဖြစ် ပွတ် (3D) |
| `TABLE` | `TB` | ဇယားတစ်ခု ဖန်တီး: အတန်းနှင့် ကော်လံများ၊ သို့မဟုတ် clipboard ရှိ spreadsheet ဆဲလ်များ သို့မဟုတ် CSV ဖိုင်မှ |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | ဇယား တည်းဖြတ်: ဆဲလ်ထဲ ရိုက်၊ အတန်းနှင့် ကော်လံများ ထည့်/ဖျက်၊ အရွယ်အစား၊ ပေါင်းထားသော ဆဲလ်များ၊ ညှိခြင်း |
| `TABLEEXPORT` | | ဇယားပြသည့်အရာကို CSV ဖိုင်အဖြစ် သိမ်း |
| `TABLEPASTE` | `PASTETABLE` | clipboard ရှိ spreadsheet ဆဲလ်များမှ ဇယားတစ်ခု ဖန်တီး |
| `TABLESTYLE` | `TS` | ဇယား styles: ခေါင်းစဉ်၊ header နှင့် data အတန်းများအတွက် စာသားအမြင့်၊ ညှိခြင်း၊ margin နှင့် ဘောင်များ |
| `TAGS` | | block references ပေါ် tags: tag သတ်မှတ် (အမျိုးအစား၊ ခွင့်ပြုသော တန်ဖိုးများ၊ ကိုက်ညီသော blocks)၊ ရွေးထားသော references ပေါ် သတ်မှတ်၊ CSV အဖြစ် သိမ်းနိုင်သော schedule အဖြစ် စာရင်းပြ |
| `TEXT` | `DT`, `DTEXT` | တစ်ကြောင်းတည်း စာသား; Enter က နောက်တစ်ကြောင်း စတင် |
| `TEXTEDIT` | `ED`, `DDEDIT` | နေရာတွင် စာသား တည်းဖြတ်: စာသားတစ်ခု ရွေး (သို့မဟုတ် double-click) (ED) |
| `TEXTMASK` | `TMASK` | စာသားများနောက်တွင် နောက်ခံ mask ထား (ဒရာဖ်နောက်ခံ သို့မဟုတ် အရောင်)၊ သို့မဟုတ် ဖယ်ရှား။ |
| `TEXTTOFRONT` | | စာသား၊ dimensions နှင့် leaders အားလုံးကို အခြားအရာအားလုံးရှေ့သို့ ယူ။ |
| `TOOLBAR` | | toolbar ခလုတ်များက ဘာပြမလဲ ရွေး: icons နှင့် စာသား၊ icons သာ၊ သို့မဟုတ် စာသားသာ (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | toolbar ကို ဝင်းဒိုး၏ အပေါ်၊ အောက်၊ ဘယ် သို့မဟုတ် ညာတွင် ထား |
| `TOOLBARROWS` | | toolbar က အတန်းအရေအတွက် ရွေး: ကိုက်အောင် wrap၊ 2၊ သို့မဟုတ် 1 (Shift+Ctrl+F1) |
| `TOPAREA` | | ဒရာဖ်အပေါ်ရှိ bars များကို standard သို့မဟုတ် compact ပြု |
| `TOUCHCROSSHAIR` | `TCX` | လက်ညှိုးဖြင့် ဆွဲရန် crosshair offset: လက်ညှိုးတစ်ချောင်းက အပေါ်နှင့် ဘေးတွင် ရှိသော crosshair ကို ရွှေ့ သဖြင့် လက်ညှိုးက ပွိုင့်ကို မဖုံး။ လက်ညှိုးကို မချလျှင် ဘာမှ ရွေးမထား; Click ခလုတ် သို့မဟုတ် လက်ညှိုးဒုတိယတစ်ချောင်း tap က crosshair တွင် ရွေး၊ Click ကိုင်ရင်း ရွှေ့လျှင် ဆွဲသည်။ ရှည်ရှည်နှိပ်ခြင်း သို့မဟုတ် Enter ခလုတ်က Enter။ လက်ညှိုးနှစ်ချောင်းက pan နှင့် zoom။ Options: ON၊ OFF၊ Auto (လက်ညှိုးသည် တစ်ခုတည်း pointer ဖြစ်သော နေရာတွင်သာ ဖွင့်)၊ Distance၊ Side။ |
| `TOUR` | `TUTORIAL` | ပထမဆုံး ဒရာဖ် လမ်းညွှန် အဆင့် ခြောက်ဆင့်ကို ထပ်ယူ |
| `TRIM` | `TR` | အခြားတွေ့သည့်နေရာသို့ အရာဝတ္ထုများ ဖြတ်: အပိုင်းတစ်ခု နှိပ်၊ အများအပြား ဆွဲ၊ သို့မဟုတ် Shift+click ဖြင့် ရှည်ချဲ့ |
| `TRIMEXTENDMODE` | | TRIM နှင့် EXTEND စတင်ပုံ: 1 Quick (အရာဝတ္ထုတိုင်း ဖြတ်ဖို့ edge သို့မဟုတ် boundary)၊ 0 Standard (edges ကို အရင်ရွေး) |
| `TTR` | | ပေးထားသော radius ဖြင့် အရာဝတ္ထုနှစ်ခုကို ထိသော circle (CIRCLE T နှင့် တူ) |
| `TURNLEFT` | | view ကို 90° ဘယ်သို့ လှည့် (နာရီလက်တံ ဆန့်ကျင်ဘက်): UCS Z -90၊ view လိုက်။ ဒရာဖ်ရှိ ဘာမှ မရွှေ့။ |
| `TURNRIGHT` | | view ကို 90° ညာသို့ လှည့် (နာရီလက်တံအတိုင်း): UCS Z 90၊ view လိုက်။ ဒရာဖ်ရှိ ဘာမှ မရွှေ့။ |
| `TURNWORLD` | | world သို့ ပြန်: UCS World၊ view ပြန် ညီ။ |
| `TXT2MTXT` | `T2M` | တစ်ကြောင်းစာသားများကို စာပိုဒ်စာသား တစ်ခုတည်းအဖြစ် ပေါင်း၊ အပေါ်မှအောက်သို့။ |
| `UCS` | | သင်၏ ကိုယ်ပိုင် coordinate system: origin နှင့် X axis (origin၊ Z ထောင့်၊ 3point၊ OBject၊ Previous၊ World၊ NAmed)။ သင်ရိုက်သည့် ပွိုင့်များ၊ ortho၊ polar tracking၊ grid နှင့် စာသားအသစ်များ ၎င်းကို လိုက်; view က X axis ညီအောင် လှည့်သည်။ ဒရာဖ်ရှိ ဘာမှ မရွှေ့။ |
| `UNDO` | `U` | နောက်ဆုံးအမိန့်ကို ပြန်ဖျက် |
| `UNGROUP` | | UNGROUP: groups ကို ခွဲ။ group ၏ အရာဝတ္ထုများ ရွေး သို့မဟုတ် Name ပေး။ အရာဝတ္ထုများ ဒရာဖ်တွင် ကျန်သည်။ |
| `UNION` | `UNI` | solids ကို တစ်ခုတည်းသို့ ပေါင်း (3D)၊ သို့မဟုတ် 2D regions ကို region တစ်ခုတည်းသို့ |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | ISOLATEOBJECTS သို့မဟုတ် HIDEOBJECTS ဖြင့် ဖျောက်ထားသော အရာဝတ္ထုအားလုံးကို ပြန်ပြ။ |
| `UNITS` | `UN`, `DDUNITS` | အရှည်များ ပြသပုံနှင့် ရိုက်ထည့်ပုံ: decimal၊ feet နှင့် inches၊ အစိတ်အပိုင်းများ (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | fields များကို ပြန်တွက်၊ ၎င်းတို့ အလိုအလျောက် update လုပ်မည့်အချိန်ကို ရွေး |
| `USDOUT` | | 3D model ကို USD အဖြစ် export (.usda စာသား၊ .usdc binary သို့မဟုတ် .usdz package) |
| `VIEW` | `-VIEW`, `V` | စံ 3D views၊ perspective သို့မဟုတ် parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | 3D solids ၏ ပြား 2D view (ရှေ့၊ ထိပ်၊ ဘေး သို့မဟုတ် isometric၊ hidden မျဉ်းများ dashed) ကို sheet သို့မဟုတ် model တွင် ထား |
| `VIEWLABEL` | `VL` | sheet ပေါ်ရှိ view ခေါင်းစဉ်; ၎င်း viewport ၏ view အမည်ကို ပြပြီး ပြောင်းသည်။ |
| `VOICE` | | အသံဖြင့် အမိန့်များ ဖွင့်/ပိတ်။ ဤကွန်ပျူတာတွင် အသိအမှတ်ပြုသည်။ |
| `VPCLIP` | | sheet viewport ကို ပိတ်ထားသော အရာဝတ္ထု သို့မဟုတ် ဆွဲထားသော polygon ဖြင့် clip; Delete က ပြန် rectangle ဖြစ်စေ |
| `VPLAYER` | | viewports အချို့တွင်သာ layers ကို freeze သို့မဟုတ် thaw (Freeze၊ Thaw၊ Reset)၊ viewports အသစ်များ freeze နှင့် စတင်မည့် layers ရွေး (Vpvisdflt)။ |
| `VPORTS` | `VIEWPORTS` | ဒရာဖ်နေရာကို panes အဖြစ် ခွဲ၊ တစ်ခုချင်းစီ ကိုယ်ပိုင် view ဖြင့် (sheet ပေါ်တွင်: MVIEW ကဲ့သို့ viewport) |
| `VPVIEW` | | viewport က ဘာပြမလဲ သတ်မှတ်: model ပေါ် ဝင်းဒိုး ရွေး |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D view ၏ visual style: shaded၊ edges၊ hidden line၊ wireframe၊ X-ray |
| `WALL` | `WA` | polyline ကဲ့သို့ 2D နံရံများ ဆွဲ။ ၎င်းတို့ ချိတ်ဆက်၊ တံခါးနှင့် ပြတင်းပေါက် ထားနိုင်။ |
| `WALLARC` | `WARC` | နံရံ arc တစ်ခု ဆွဲ။ Plan နံရံများ ဖြောင့်ဖြစ်သဖြင့် arc ကို တိုတောင်းသော ဖြောင့် နံရံများ (တစ်ခုလျှင် 15 ဒီဂရီ) ဖြင့် ဆွဲပြီး ချိတ်ဆက်သည်။ |
| `WALLDELSEG` | | ပွိုင့်နှစ်ခုကြား နံရံ အပိုင်းတစ်ခု ဖျက်။ ကျန်သည်မှာ နံရံတစ်ခု သို့မဟုတ် နှစ်ခု။ |
| `WALLDIM` | | dimension အတွက် တန်ဖိုးအသစ် ရိုက်: အဝေးဆုံးအဆုံးရှိ နံရံက မိမိနှင့် ထောင့်မှန် ရွှေ့၊ ပထမအဆုံးရှိ နံရံ ကျန်၊ ချိတ်ထားသော နံရံများ လိုက်။ |
| `WALLDISJOIN` | | အဆုံးတစ်ခုနားရှိ နံရံကို ရွေး ထိုအဆုံးတွင် ချိတ်ဆက်ခွင့် မပြု: အဆုံးက ထောင့်မှန် ဆွဲ၊ ဘာမှ မလိုက်။ ထပ်ရွေးလျှင် ပြန်ခွင့်ပြု။ |
| `WALLGRID` | | နံရံကို grid line သို့ ကပ်: ၎င်းတစ်လျှောက် သို့မဟုတ် အဆုံးတစ်ခု ၎င်းပေါ်။ GRIDMOVE ဖြင့် line ရွှေ့လျှင် နံရံ လိုက်။ |
| `WALLHOLD` | | ညှိ၍ ထား: နံရံတစ်ခု အခြားနံရံနှင့် နေရာကို ထိန်း (၎င်း၏ မျဉ်းပေါ် သို့မဟုတ် ရှိပြီးသား အကွာအဝေးတွင်)။ တစ်ခု ရွှေ့လျှင် အခြားက လိုက်။ |
| `WALLHOLDDIM` | | parallel နံရံနှစ်ခုကြား အကွာအဝေးကို ထား။ တစ်ခု ရွှေ့လျှင် အခြားက အကွာအဝေး ထိန်းရန် လိုက်။ |
| `WALLHOLDS` | | နံရံများပေါ်ရှိ locks များကို စာရင်းပြ။ |
| `WALLJOINS` | | ဟောင်းဒရာဖ်၏ နံရံတိုင်းကို id ပေး၊ ၎င်းတို့ကြား joins များကို သိမ်း။ သင်ပြောင်းသည့် ပထမအပြောင်းအလဲတွင်လည်း ဖြစ်သည်။ |
| `WALLJOINSTYLE` | | နံရံနှစ်ခု အဆုံးချင်း တွေ့သော ထောင့်ကို နှိပ်ပြီး ဆွဲပုံကို ပြောင်း: mitre၊ butt၊ square off။ T က ဘယ်နံရံ ဖြတ်သွားမလဲ ပြောင်း။ |
| `WALLOFFSET` | `WO` | နံရံကို အကွာအဝေးဖြင့် မိမိနှင့် ထောင့်မှန်ရွှေ့ (ချိတ်ထားသော နံရံများ လိုက်) သို့မဟုတ် ထိုအကွာအဝေးတွင် မိတ္တူ ပြု။ |
| `WALLPICK` | | ဒရာဖ်ရှိ မျဉ်း သို့မဟုတ် polyline ပေါ်တွင် နံရံများ ပြု၊ Yes ဟု ပြောလျှင် ၎င်းနှင့် ချိတ်ထားသော မျဉ်းများနှင့်အတူ။ |
| `WALLPOLY` | `WP` | 3 မှ 64 ဘက်ရှိ regular polygon ပတ်လည် နံရံများ ဆွဲ၊ POLYGON ကဲ့သို့။ |
| `WALLRECT` | `WR` | အတွင်းဆန့်ထောင့်နှစ်ခုမှ ချိတ်ထားသော နံရံလေးခု ဆွဲ၊ RECTANG ကဲ့သို့။ |
| `WALLREJOIN` | | နံရံ၏ အပိုင်းနှစ်ခုကို နံရံတစ်ခုသို့ ပြန်ပေါင်း။ ပထမအပိုင်းက ဒရာဖ်ထဲ နေရာကို ထိန်း။ |
| `WALLROT` | | ထောင့်မည်သည့်ထောင့်ဖြင့်မဆို လှည့်ထားသော စတုရန်းအဖြစ် ချိတ်ထားသော နံရံလေးခု ဆွဲ: ပထမဘေး၊ ထို့နောက် ဘယ်လောက်ထွက်မလဲ။ |
| `WALLSPLIT` | `WS` | နံရံကို ပွိုင့်တစ်ခု သို့မဟုတ် အခြားနံရံ ဖြတ်သည့်နေရာတွင် နှစ်ခွဲ။ အပိုင်းများ ချိတ်ထားမည်၊ gap သို့မဟုတ် free ends မတောင်းလျှင်။ တံခါးနှင့် ပြတင်းပေါက်များ ၎င်းတို့၏ အပိုင်းနှင့်အတူ လိုက်။ |
| `WALLSPLITGAP` | | gap ထားပြီး နံရံကို ခွဲ: gap ရိုက်၊ နံရံရွေး၊ ထို့နောက် ပွိုင့်။ အပိုင်းများ free ends ရှိပြီး ပြန်ချိတ်နိုင်သည်။ |
| `WALLSTRETCH` | | ဝင်းဒိုးဖြင့် ဆန့်: အတွင်းရှိ နံရံအဆုံးများ ရွှေ့၊ လုံးဝအတွင်းရှိ နံရံများ တစ်ခုလုံး ရွှေ့၊ ဘေးများ ထိုးဝင်သည့် နံရံများ ၎င်းတို့နှင့်အတူ ဆွဲ။ |
| `WALLTAN` | | နံရံကို ၎င်းနှင့်အတူ ထွက်သော arc ဖြင့် ဆက်။ (တိုတောင်းသော ဖြောင့် နံရံများဖြင့် ဆွဲ) |
| `WALLTRACE` | | သင်နှိပ်သော ပွိုင့်ပတ်လည် မျဉ်းများနှင့် နံရံများ၏ အသေးဆုံး ပိတ်ထားသော နေရာပတ်လည် နံရံများ ပြု။ |
| `WALLUNHOLD` | | နံရံ၏ locks များ ဖယ် (နှင့် အခြားနံရံများ၏ ၎င်းသို့ locks)။ |
| `WBLOCK` | `W`, `-WBLOCK` | block၊ အရာဝတ္ထုအချို့ သို့မဟုတ် ဒရာဖ်တစ်ခုလုံးကို ဖိုင် DWG သို့မဟုတ် DXF အသစ်သို့ ရေး (W) |
| `WEDGE` | `WE` | ကတ်ပုံ: ထောင့်နှစ်ခုနှင့် အမြင့်; ပထမထောင့်မှ ဆင်းသက်သည် (3D) |
| `WHEREAMI` | `WHERE` | cursor ဘယ်နေရာရှိသည် ပြော။ |
| `WHOHAS` | | ဒရာဖ်ဖွင့်ထားသူကို ပြော။ CadCraft Studio က ဖွင့်ထားသော ဒရာဖ်တစ်ခုစီဘေး lock ဖိုင်ငယ် (Plan.dwg.cclock: ဘယ်သူ၊ ဘယ်အချိန်ကစ၊ ဗားရှင်းဘယ်ဟာ) ထားပြီး ပိတ်သည့်အခါ ဖျက်သည်။ Options: Current (ဖွင့်ထားသော ဒရာဖ်)၊ File (တစ်ခု ရွေး)၊ FOlder (ဖွင့်ထားသည့် folder ရှိ ဒရာဖ်အားလုံး၊ ၎င်း folder တွင် Studio lock ဖိုင်များ ထားခွင့်ပြု)၊ Path (ရိုက်)၊ Name (အခြားသူများ မြင်သော အမည်)။ ငါးမိနစ် မပြန်စတင်သော lock ကို stale ဟု ခေါ်သည်။ browser တွင် မရ။ |
| `WINDOW` | `WN` | နံရံတွင် ပြတင်းပေါက် ထား။ |
| `XATTACH` | `XA` | အခြား DWG သို့မဟုတ် DXF ကို ဤဒရာဖ်သို့ ချိတ်၊ read-only ပြ (XREF က စာရင်းပြ၊ ပြန် load) |
| `XCLIP` | `XC` | block references နှင့် ချိတ်ထားသော ဒရာဖ်များကို rectangle သို့မဟုတ် polygon ဖြင့် clip၊ သို့မဟုတ် clip ဖယ်။ |
| `XLINE` | `XL` | construction line၊ နှစ်ဘက်လုံး အဆုံးမဲ့: ပွိုင့်နှစ်ခုမှတစ်ဆင့်၊ အလျားလိုက်၊ ဒေါင်လိုက်၊ ထောင့်တစ်ခုတွင်၊ ထောင့်ကို နှစ်ခွဲ၊ သို့မဟုတ် မျဉ်းမှ offset။ |
| `XREF` | `XR`, `-XREF` | ချိတ်ထားသော ဒရာဖ်များ (external references): စာရင်း၊ ချိတ်၊ ပြန် load၊ bind၊ ဖြုတ် |
| `ZOOM` | `Z` | extents သို့မဟုတ် ဝင်းဒိုး |
