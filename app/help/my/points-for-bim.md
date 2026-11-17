---
title: BIM ပရိုဂရမ်များအတွက် အမှတ်များ
summary: အမှတ်များနှင့် description ပါသော block များ၏ insertion point များကို BIM နှင့် survey ပရိုဂရမ်များ သွင်းနိုင်သော CSV သို့မဟုတ် TXT ဖိုင်သို့ export လုပ်ရန်။
keywords: exportpoints, export points, points, csv, txt, pnezd, penzd, xyz, survey points, coordinates, bim, setting out, point file, northing, easting, elevation
from: d80e2d53
---

## ဘာကို ဖန်တီးမလဲ

point ဖိုင်တစ်ခု: အမှတ်တစ်ခုလျှင် မျဉ်းတစ်ကြောင်း၊ ၎င်း၏နံပါတ်၊ northing၊ easting၊ elevation နှင့် description ပါဝင်သည်; BIM ပရိုဂရမ်များ (Revit နှင့် Archicad အပါအဝင်) နှင့် survey software များက survey အမှတ်များ၊ site marker များ သို့မဟုတ် equipment များ နေရာချရန် သွင်းနိုင်သည်။

## အမှတ်များ export လုပ်ခြင်း

1. အမှတ်များနှင့် insertion point ကို လိုချင်သော block reference များကို ရွေးပါ၊ သို့မဟုတ် အမှတ်အားလုံးကို ယူရန် ဘာမျှ မရွေးပါ။
2. {{cmd:EXPORTPOINTS}} (သို့မဟုတ် `EXPPTS`၊ သို့မဟုတ် {{ui:Blocks}} › {{ui:နောက်ထပ်}} › {{ui:အမှတ်များ ထုတ်ရန်}}) ကို ရိုက်ပြီး {{key:Enter}} ကို နှိပ်ပါ (`Select points and blocks` တွင် ဘာမျှ မရွေးထားလျှင် {{key:Enter}} ကို ထပ်နှိပ်ပါ)။
3. attribute ပါသော block များကို ရွေးလျှင် CadCraft က ၎င်းတို့၏ tag များကို စာရင်းပြသည်: value သည် description ဖြစ်သော tag ကို ရိုက်ပါ (ဥပမာ `ITEM`), သို့မဟုတ် block တစ်ခုစီ၏ အမည်ကို သုံးရန် အခြားတစ်ခုခု ရိုက်ပါ။
4. ကော်လံများကို ရွေးပါ: `PNEZD` (point၊ northing၊ easting၊ elevation၊ description: ပုံမှန်တစ်ခု)၊ `PENZD` (easting ကို northing ရှေ့တွင်)၊ သို့မဟုတ် `XYZ` (coordinate များသာ)။
5. ယူနစ်ကို ရွေးပါ: `D` ဆွဲထားသည့်အတိုင်း၊ `M` မီတာ သို့မဟုတ် `F` ပေ (ပုံဆွဲ၏ ယူနစ်များ သတ်မှတ်ထားမှသာ: ဘာမျှ မရွေးဘဲ Properties › {{ui:Units}})။
6. UCS သတ်မှတ်ထားလျှင် `W` world သို့မဟုတ် `U` UCS coordinate ကို ရွေးပါ ([UCS နှင့် လှည့်ထားသော view](topic:ucs-and-turned-view) ကို ကြည့်ပါ)။
7. `C` (ကော်မာခြားထားသော `.csv`) သို့မဟုတ် `T` (tab ခြားထားသော `.txt`) ကို ရွေးပြီး ပထမ point နံပါတ်ကို ရိုက်ပါ။

ဖိုင်ကို `<drawing>-points.csv` (သို့မဟုတ် `.txt`) အဖြစ် ဒေါင်းလုဒ်ဆွဲပြီး history က အမှတ်အရေအတွက်ကို ပြောသည်။

## ဖိုင်ထဲတွင် ပါဝင်သည်များ

- အမှတ်တစ်ခုလျှင် မျဉ်းတစ်ကြောင်း၊ line break (CR LF) ဖြင့် အဆုံးသတ်ပြီး ဒဿမ သုံးနေရာ။
- အမှတ်၏ elevation သည် ၎င်း၏ Z ဖြစ်သည် (မရှိလျှင် 0)။ block ၏ အမှတ်သည် ၎င်း၏ insertion point ဖြစ်သည်။
- ကော်မာ (သို့မဟုတ် TXT တွင် tab) သို့မဟုတ် quote ပါသော description ကို double quote ဖြင့် ထည့်ပြီး ၎င်း၏ quote များကို နှစ်ဆဖြစ်စေသည်။
- ဖော်မတ်သည် CivilCraft ဖတ်ပြီး ရေးသည့် ဖော်မတ်ဖြစ်သောကြောင့် ဖိုင်ကို ထိုနေရာတွင်လည်း အမှတ်များအဖြစ် ဖွင့်နိုင်သည်။

## အမှားများ အများဆုံး

- ယူနစ်အတွက် `D` ကိုသာ ပေးသည်: ပုံဆွဲတွင် ယူနစ် မသတ်မှတ်ရသေးပါ။ သတ်မှတ်ပါ၊ သို့မဟုတ် အခြားပရိုဂရမ်တွင် ပြောင်းပါ။
- အမှတ်များသည် အခြားပရိုဂရမ်တွင် မျှော်လင့်ထားသော နေရာနှင့် ဝေးနေသည်: world coordinate များ (`W`) ကို export လုပ်ပါ၊ သို့မဟုတ် အခြားပရိုဂရမ်၏ survey point က သုံးသော UCS (`U`) ကို export လုပ်ပါ။
