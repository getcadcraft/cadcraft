---
title: Dynamic block များ
summary: DWG တွင် dynamic block များနှင့် CadCraft က ဘာလုပ်သလဲ: ၎င်းတို့၏ မှန်ကန်သော အမည်များ ထိန်း၊ သိမ်းခဲ့သော state ကို ပြ၊ visibility state ပြောင်း၊ အခြားတန်ဖိုးများ ပြ၊ သိမ်းသည့်အခါ dynamic ဖြစ်နေ။
keywords: dynamic block, dynamic blocks, visibility, visibility state, flip, stretch, lookup, parameter များ, စိတ်ကြိုက်, block ဂုဏ်သတ္တိများ, *u blocks, dynamic
from: dea2ee7c
---

## ဘာအလုပ်လုပ်သလဲ

Dynamic block များပါသော DWG ကို ဖွင့်လျှင် ဤအထိ အလုပ်လုပ်ပါသည်-

- **မှန်ကန်သော အမည်များ။** Dynamic block ကို {{ui:ဘလောက်များ}} panel တွင် ၎င်း၏ကိုယ်ပိုင်အမည် ("Receptacle"၊ "Sink") ဖြင့် စာရင်းပြ၊ unnamed `*U` block အဖြစ် မပြ။
- **သိမ်းခဲ့သော state။** Reference တစ်ခုစီသည် အခြား program က ပြခဲ့သည့်အတိုင်း ပြသည်- သတ်မှတ်ထားသော visibility state၊ သိမ်းစဉ်က ဆန့်ထားခြင်း သို့မဟုတ် ပြောင်းထားခြင်း။
- **Visibility state ပြောင်းခြင်း။** Reference တစ်ခု (သို့မဟုတ် block တူတူ အများအပြား) ကို ရွေး၊ {{ui:ဂုဏ်သတ္တိများ}} ကို ဖွင့်၊ {{ui:စိတ်ကြိုက်}} အပိုင်းတွင် {{ui:မြင်နိုင်မှု}} စာရင်းမှ state အခြားတစ်ခု ရွေး။ Reference သည် state ကို ချက်ချင်း ပြ၊ attribute များလည်း: state က ဝှက်သည်များ ပျောက်၊ ပြသည်များ တန်ဖိုးနှင့်အတူ ပေါ်။ Reference သည် တန်ဖိုးအားလုံးကို ထိန်းသဖြင့် ဘာမျှ လွတ်မနေ၊ {{ui:ဂုဏ်သတ္တိများ}} က ဝှက်ထားသည်များကို "ဝှက်ထား" ဟု အမှတ်အသားဖြင့် စာရင်းပြ။ {{key:Mod+Z}} က state ဟောင်းကို တစ်ဆင့်တည်း ပြန်ထား။
- **Grip များ။** ရွေးထားသော dynamic block သည် ၎င်း၏ parameter များရှိရာတွင် ကိုယ်ပိုင် grip များ ပြ: visibility state အတွက် အသေးစား တြိဂံ (နှိပ်လျှင် state စာရင်း)၊ အကွာအဝေး၏ အဆုံးတွင် မြား၊ flip အတွက် မြားနှစ်ခု။ ယခုအချိန်တွင် visibility grip သာ လုပ်ဆောင်; အခြားများက status bar တွင် ထိုသို့ ပြော။
- **အခြားတန်ဖိုးများ၊ read only။** {{ui:မြင်နိုင်မှု}} စာရင်းအောက်တွင် {{ui:စိတ်ကြိုက်}} က ဘလောက်၏ အကွာအဝေး၊ ထောင့် ညှိချက်များ၊ flip state များနှင့် point များကို drawing က ထားသည့်အတိုင်း ပြသည်။
- **Visibility state များ တည်းဖြတ်ခြင်း။** [BEDIT](topic:commands) ဖြင့် ဘလောက်ကို ဖွင့်: editor က state တစ်ခုကို ပြ၊ drawing အပေါ် bar တွင် နာမည်ပေး (ထိုနေရာတွင် အခြားတစ်ခု ရွေးနိုင်)။ {{cmd:BVSTATE}} ရိုက်၍ ပြောင်း၊ state ထည့် (အားလုံး ဝှက်၊ အားလုံး ပြ သို့မဟုတ် ပြနေသည်ကို ထိန်း)၊ အမည်ပြောင်း သို့မဟုတ် ဖျက်။ {{cmd:BVHIDE}} က ရွေးထားသော object များကို လက်ရှိ ပြနေသော state တွင် ဝှက်၊ {{cmd:BVSHOW}} က ဝှက်ထားသည်များကို မှိန်ပြ ထားပြီး သင်နှိပ်၍ ပြန်ယူနိုင်။ ဘလောက်ကို သိမ်း: အမည်ပြောင်းထားသော state သို့ သတ်မှတ်ထားသော reference များက အမည်သစ်ဖြင့် ဆက်ထား၊ ဖျက်ထားသော state သို့ သတ်မှတ်ထားသည်များက ပထမ state ကို ပြ။
- **Dynamic ဆက်နေခြင်း။** Drawing ဝင်လာသော version ဖြင့် DWG အဖြစ် သိမ်းလျှင် ဘလောက်များ dynamic ဆက်နေ၊ သင်ရွေးထားသော state ဖြင့်၊ အခြား program က ၎င်းတို့ကို dynamic block အဖြစ် ပြန်ဖွင့်။ သင်တည်းဖြတ်ထားသော visibility state များကိုလည်း သိမ်း: ၎င်းတို့၏ အမည်သစ်များ၊ သင်ထည့်ထားသော state များနှင့် state တစ်ခုစီ ပြသည်များ။

## Read only ဖြစ်သည် သို့မဟုတ် မရှိသေးသည်များ

| ယခုမရှိသေး | ယခုအစား |
|---|---|
| အကွာအဝေး၊ ထောင့် သို့မဟုတ် flip များ ပြောင်း (stretch၊ move၊ flip action များ) | {{ui:စိတ်ကြိုက်}} တွင် read only ပြ; ဘလောက်ကို ဖန်တီးခဲ့သော program တွင် တည်းဖြတ်။ |
| Lookup၊ XY၊ rotation နှင့် polar parameter များ | ဖတ်ရသေးမည်မဟုတ်; reference သည် သိမ်းထားသည့်အတိုင်း ပြ။ |
| Distance၊ flip နှင့် point grip များကို ဆွဲခြင်း | Parameter ရှိရာတွင် ပြ; visibility grip နှင့် Properties ရှိ {{ui:မြင်နိုင်မှု}} စာရင်းသာ state ပြောင်း။ |
| အခြား program ၏ အမျိုးအစား dynamic block များ ဖန်တီး (stretch၊ flip၊ lookup) | CadCraft တွင် ဖန်တီးသော block များသည် ရိုးရိုး block များ; {{cmd:BPARAMETER}} က ထိုသို့ ပြော။ ကိုယ်ပိုင် parameter နှင့် visibility parameter အများအပြားကို Parameters manager တွင် ရှိ (အောက်ပါ "ကိုယ်ပိုင် parameter နှင့် visibility state များ" ကို ကြည့်ပါ)။ |
| Visibility state ပါသော block ၏ object များ ထည့်ခြင်း သို့မဟုတ် ဖျက်ခြင်း block editor တွင် | ထို block ကို ရိုးရိုး block အဖြစ် သိမ်း (editor က ပိတ်သောအခါ ပြော)။ |
| အခြား DWG version သို့မဟုတ် DXF တွင် dynamic ဆက်ထားခြင်း | ရွေးထားသော state ကို ပြသည့် ရိုးရိုး block များအဖြစ် သိမ်း၊ သိမ်းခြင်းက ထိုသို့ ပြော။ |

:::note
{{cmd:BEDIT}} တွင် object များ ရွှေ့ သို့မဟုတ် ပြောင်းခြင်းက visibility state ပါသော block ကို dynamic အဖြစ် ဆက်ထား။ State မရှိသော block၊ သို့မဟုတ် editor တွင် object များ ထည့်/ဖျက်ထားသော block သည် ရိုးရိုး block ဖြစ်လာ။
:::

## ကိုယ်ပိုင် parameter နှင့် visibility state များ

CadCraft တွင် ဖန်တီးသော block တစ်ခုသည် ကိုယ်ပိုင် parameter များနှင့် **အများအပြား** visibility parameter များ၊ တစ်ခုစီတွင် ကိုယ်ပိုင် state များ ပါနိုင်သည်။ {{cmd:BEDIT}} တွင် တည်းဖြတ်နေသော block၊ ရွေးထားသော reference ၏ block သို့မဟုတ် သင်နာမည်ပေးသော block အတွက် **Parameters manager** ကို ဖွင့်ရန် {{cmd:BPARAMS}} (သို့မဟုတ် `BPM`) ရိုက်ပါ။

- **Parameter များ**: နာမည်၊ အမျိုးအစား (ဂဏန်း၊ အရှည်၊ ထောင့်၊ အရေအတွက်၊ yes/no) နှင့် တန်ဖိုး သို့မဟုတ် အခြား parameter များပေါ် formula (`w * 2`၊ `if(n > 3, 1, 0)`)။ {{ui:ရလဒ်}} က ရလဒ်ကို ပြ။ အလုပ်မလုပ်သော formula သို့မဟုတ် အမျိုးအစားနှင့် မကိုက်သော တန်ဖိုး (အရေအတွက် 1.5) ကို ငြင်းပယ်ပြီး manager က အကြောင်းပြ; ဘာမျှ အခြားမပြောင်း။
- **Visibility parameter များ**: {{ui:မြင်နိုင်မှု ပါရာမီတာ ထည့်ရန်}} က state ပထမတစ်ခုပါသည့် တစ်ခု ပြုလုပ်။ State တစ်ခုစီကို အမည်ပြောင်း၊ ဖယ် (နောက်ဆုံးတစ်ခု ကျန်) သို့မဟုတ် "ပြသည့်အချိန်" နံပါတ် ပေးနိုင်။ Formula က parameter များမှ state ကို ရွေး (နံပါတ် ကိုက်သော state၊ သို့မဟုတ် စာရင်းထဲ နေရာတွင် ရှိသော state); formula မရှိလျှင် reference တစ်ခုစီက ကိုယ်ပိုင် ရွေးသည်။
- **Object များကို state တွင် ထားခြင်း**: block editor တွင် object များ ရွေး၊ {{cmd:BPARAMS}} ရိုက်ပြီး state ပေါ်ရှိ {{ui:ရွေးထားသော အရာဝတ္ထုများကို ဤနေရာတွင် ထားရန်}} ကို နှိပ်။ Visibility parameter မဖော်ပြသော object များ အမြဲပြ။
- **ဤ reference**: ရွေးထားသော reference မှ စတင်လျှင် manager က ထို reference ၏ ကိုယ်ပိုင် တန်ဖိုးနှင့် state များကိုလည်း ပြ။

Block editor အပြင်တွင် ပြောင်းလဲမှုတိုင်းသည် undo အဆင့် တစ်ခု။ Block editor အတွင်း ပြောင်းလဲမှုများသည် editor ၏ ဖြစ်ပြီး {{ui:ဘလောက် သိမ်းရန်}} က ထိန်းထား။ `-BPARAMS` က command line တွင် တူညီသော မေးခွန်းများ မေး။

**ဖိုင်တွင်။** DWG နှင့် DXF က parameter များ၊ object တစ်ခုစီ မည်သည့် state တွင်ရှိသလဲ၊ reference တစ်ခုစီ၏ ကိုယ်ပိုင် တန်ဖိုးများကို CadCraft ၏ ကိုယ်ပိုင် record များတွင် ထိန်း၊ CadCraft တွင် ဖိုင်ကို ပြန်ဖွင့်လျှင် အားလုံးပြန်ရောက်။ အခြား program က reference တစ်ခုစီကို object အားလုံးပါသော block အဖြစ် မြင်၊ ကိုယ်ပိုင်အမျိုးအစား block တစ်ခုတွင် visibility parameter တစ်ခုသာ ရှိနိုင်သောကြောင့်ဖြစ်သည်။ အခြား program က ရွှေ့ထားသော reference သို့မဟုတ် object များ ပြောင်းထားသော block သည် မကိုက်တော့သော အပိုင်းများ မပါဘဲ ပြန်ပေါ် (ဘာမျှ ခန့်မှန်းမထား)။
