---
title: "Sketch များကို အခြား part modeler များသို့ နှင့် မှ ရွှေ့ခြင်း"
summary: "ပုံဆွဲကို part modeler တွင် constrained sketch တစ်ခုအဖြစ် ပြန်တည်ဆောက်သော macro ရေးပြီး အခြားမှ ပို့ထားသော sketch ကို ဖွင့်ပါ။"
keywords: "sketch, macro, swb, vba, export, part modeler, global variables, ညီမျှခြင်းများ, ဆက်စပ်မှုများ, cadcraft-sw-export, swbout"
from: 3071ddd8
---

:::warning
SolidWorks သည် CadCraft တည်ဆောက်သည့်နေရာတွင် မရရှိနိုင်ပါ၊ ထို့ကြောင့် နှစ်ဖက်စလုံး SolidWorks တွင် မစမ်းသေးပါ။ CadCraft ရေးသည့်အရာကို ဖွဲ့စည်းပုံအတွက်သာ စစ်ဆေးထားသည်။ မှီခိုမီ ရလဒ်ကို စစ်ဆေးပါ။
:::

## ပုံဆွဲကို sketch အဖြစ် ပို့ခြင်း

1. ပုံဆွဲကို constrain နှင့် dimension ပြုလုပ်ပါ (see [Constrain a drawing](topic:constraints))။
2. {{ui:Parametric}} အုပ်စုတွင် {{ui:နောက်ထပ်}} ကို ဖွင့်ပြီး {{ui:SolidWorks အတွက် macro (.swb)}} ကို ရွေးပါ၊ သို့မဟုတ် {{cmd:SWBOUT}} ကို ရိုက်ပါ။

   ပုံဆွဲ၏ အမည်ဖြင့် `.swb` ဖြင့် အဆုံးသတ်သော ဖိုင်တစ်ခု ဒေါင်းလုဒ်ဆွဲမည်။
3. SolidWorks တွင် **Tools > Macro > Run** ကို ရွေးပြီး ထိုဖိုင်ကို ရွေးပါ။

macro သည် သင်၏ default part template မှ part အသစ်တစ်ခု ဖန်တီးပြီး Front Plane ပေါ်တွင် sketch တစ်ခု ဖွင့်ကာ မော်ဒယ်၏ မျဉ်း၊ စက်ဝိုင်း၊ arc၊ အမှတ်နှင့် polyline များကို အောက်ပါအတိုင်း ဆွဲထည့်သည်-

- သင်၏ constraint များကို sketch relation အဖြစ်၊
- သင်၏ dimensional constraint များကို အမည်တူ dimension (`d1@Sketch1`) အဖြစ်၊
- သင်၏ ကိုယ်ပိုင် parameter များကို global variable အဖြစ်၊
- expression တိုင်းကို equation အဖြစ်။

part သည် ပုံဆွဲ၏ အလျား unit ကို အသုံးပြုသည်။ စာသား၊ block၊ hatch၊ dimension နှင့် sheet များသည် sketch ထဲတွင် မပါဝင်ပါ; history တွင် ထားခဲ့သည့်အရာများ စာရင်းပါသည်။ equation ပုံစံ မရှိသော expression များ (`if`၊ `min`၊ `max`၊ `round`၊ `%` နှင့် အခြား အချို့) ကို လက်ရှိတန်ဖိုးအဖြစ် ရေးသည်၊ history က ဖော်ပြသည်။ macro မဖန်တီးနိုင်သော အရာတိုင်းကို macro ဘေးရှိ log ဖိုင်တွင် ရေးပြီး အဆုံးတွင် မက်ဆေ့ချ်တစ်ခုက အနှစ်ချုပ် ပြသည်။

## Part မှ sketch ကို ဖွင့်ခြင်း

1. SolidWorks တွင် CadCraft export macro ကို part ပေါ်တွင် run ပါ (PartCraft app တွင် ဒေါင်းလုဒ်ဆွဲနိုင်သည်: File > Export > Export macro to bring parts back)။ ၎င်းသည် part ဘေးတွင် `cadcraft-sw-export` ပုံစံဖြင့် `.json` ဖိုင်တစ်ခု ရေးသည်။
2. CadCraft တွင် {{ui:Open}} ကို ရွေးပြီး ထို `.json` ဖိုင်ကို ရွေးပါ။
3. part တွင် sketch အများအပြား ရှိလျှင် တစ်ခုကို ရွေးပါ။

sketch သည် မီလီမီတာဖြင့် ပုံဆွဲ ဖြစ်လာသည်: ၎င်း၏ မျဉ်း၊ arc၊ စက်ဝိုင်းနှင့် အမှတ်များ၊ ၎င်းတို့၏ relation များသည် constraint များ၊ dimension များသည် မူလအမည်အတိုင်း (`D1`၊ `D2` …) dimensional constraint များ၊ global variable များသည် parameter များ၊ dimension ပေါ်ရှိ equation များသည် expression များ ဖြစ်လာသည်။ CadCraft တွင် မရှိသော relation များကဲ့သို့ မပါဝင်ခဲ့သည့်အရာများကို history က ဖော်ပြသည်။ sketch သည် part အတွင်း ဘယ်နေရာတွင် ရှိသည်ကို မသိမ်းထားပါ: ၎င်းကို ၎င်း၏ plane အတိုင်း ပြန့်ပြားစွာ ဆွဲသည်။
