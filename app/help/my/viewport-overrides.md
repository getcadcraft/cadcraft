---
title: Viewport class ပြင်ဆင်ချက်များ
summary: စာရွက်ပေါ်တွင် class တစ်ခုကို ဖျောက်ခြင်း သို့မဟုတ် viewport တစ်ခုတည်းတွင်သာ အခြားအရောင်၊ lineweight သို့မဟုတ် fill ပေးခြင်း; model နှင့် အခြား viewport များသည် မပြောင်းပါ။
keywords: viewport, class ပြင်ဆင်ချက်, viewport ပြင်ဆင်ချက်, viewport တွင် class ဖျောက်ရန်, စာရွက်, layout, VPLAYER, plot, Vectorworks
from: c1a2b51f
---

စာရွက်တစ်ခုသည် မကြာခဏ model တစ်ခုကိုပင် တစ်ကြိမ်ထက်ပို ပြသသည်: furniture ပါသော plan နှင့် ထိုအရာမပါသော plan၊ သို့မဟုတ် မီးလင်းမှုပုံဆွဲတွင် မီးများသာ အရောင်ရှိသော ပုံ။ viewport class ပြင်ဆင်ချက်သည် [class](topic:classes) တစ်ခု ပြသပုံကို **ထို viewport တစ်ခုတည်းတွင်သာ** ပြောင်းသည်။

1. စာရွက်ကို ဖွင့်ပြီး viewport တစ်ခုကို ရွေးပါ။
2. Classes panel (`CLASSES`) ကို ဖွင့်ပြီး class ကို ရွေးပါ။
3. {{ui:This viewport}} အောက်တွင် {{ui:Hide in this viewport}} ကို အမှတ်အသားပြုပါ၊ သို့မဟုတ် {{ui:Color here}}၊ {{ui:Lineweight here}} သို့မဟုတ် {{ui:Fill here}} ကို သတ်မှတ်ပါ။

အောက်ပါ စာရင်းသည် ဤ viewport ပြောင်းသော class တိုင်းကို ပြသည်။ {{ui:Clear this viewport's overrides}} သည် ၎င်းတို့အားလုံးကို ဖယ်ရှားသည်။ ပြောင်းလဲမှု တစ်ခုစီသည် ပြန်ဖျက်ရန် အဆင့် တစ်ခု ဖြစ်သည်။

## ပြင်ဆင်ချက်က ဘာကို ပြောင်းသလဲ

- **Hide** သည် ဤ viewport တွင် class နှင့် ၎င်းအောက်ရှိ class အားလုံးကို ဖျောက်သည်။
- **အရောင်၊ lineweight နှင့် fill** သည် တန်ဖိုးကို object ပေါ်တွင် ကိုယ်တိုင် မသတ်မှတ်ထားသော class ၏ objects များကို ပြောင်းသည်၊ ဆိုလိုသည်မှာ class သို့မဟုတ် layer အလိုက် ယူသော objects များ။ ကိုယ်ပိုင်အရောင်ရှိသော object သည် viewport layer ပြင်ဆင်ချက်ကဲ့သို့ ၎င်းကို ထိန်းထားသည်။

ပြင်ဆင်ချက်များသည် မျက်နှာပြင်နှင့် plot နှင့် PDF များတွင် ပြသည်၊ PDF သို့ ထုတ်ဝေထားသော sheet set ပါဝင်သည်။ ၎င်းတို့သည် viewport ၏ frozen layer များနှင့် layer ပြင်ဆင်ချက်များနှင့်အတူ လုပ်ဆောင်သည်။

ပြင်ဆင်ချက်များကို DWG နှင့် DXF တွင် ပုံဆွဲနှင့်အတူ သိမ်းသည် (class list ပါဝင်ပြီး `CADCRAFT_CLASSES` block ထဲတွင်) ပြီး ဖိုင်ကို CadCraft တွင် ဖွင့်သောအခါ တူညီသော viewport သို့ ပြန်ရောက်သည်။
