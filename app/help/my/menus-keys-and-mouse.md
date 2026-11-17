---
title: Menu၊ key နှင့် mouse
summary: သင် လုပ်နေကျ နည်းနှင့် ကိုက်ညီသော menu style ရွေးပါ၊ command တစ်ခုစီကို ကိုယ်ပိုင် key သို့မဟုတ် command ရိုက်ပေးသော key ပေးပါ၊ command များကို ribbon tab များကြား ရွှေ့ပါ၊ wheel နှင့် mouse ခလုတ်များ လုပ်ဆောင်ချက် သတ်မှတ်ပါ။
keywords: menu style, menus, ribbon, toolbar, command line, keyboard shortcuts, hotkeys, keys, စိတ်ကြိုက်ပြင်ရန်, remap, rebind, shortcuts, text keys, mouse, wheel, ပြောင်းပြန်, zoom direction, middle button, right button, pan, ထုတ်ရန်, သွင်းရန်, ပြောင်းခြင်း, အကျွမ်းတဝင်, drafting classic
from: 8bbf4f88
---

CadCraft ၏ command များကို မည်သည့်နည်းဖြင့် ရောက်ရောက် အတူတူဖြစ်ပြီး command line သည် aliases (`L`, `C`, `TR` …) နှင့်အတူ အမြဲရှိသည်။ **Menu style** သည် ခလုတ်များ မျက်နှာပြင်တွင် ဘယ်မှာ ထားမည်၊ ၎င်းတို့ကို ဘယ်လို ခေါ်မည်နှင့် ဘယ် key က run မည်ကိုသာ ဆုံးဖြတ်သည်။ {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menus, keys and mouse}} တွင် ရွေးပါ; ပြောင်းလဲမှု ချက်ချင်း ဖြစ်ပြီး ဤ browser က မှတ်ထားသည်။

## Style သုံးမျိုး

| Style | ရရှိသည့်အရာ |
|---|---|
| {{ui:CadCraft}} | CadCraft ၏ ကိုယ်ပိုင် toolbar: File၊ Draw၊ Modify၊ Annotate၊ Parametric၊ Blocks၊ Sheets၊ Edit နှင့် View၊ တစ်ခုစီတွင် {{ui:More}} menu ပါသည်။ စတင်ရာ။ |
| {{ui:Drafting classic}} | Classic 2D drafting ပရိုဂရမ်များ ချထားသည့်နည်းဖြင့် ribbon: {{ui:File}} menu နှင့် အမြန်ခလုတ်များ၊ ထို့နောက် tab များ {{ui:Home}} (Draw၊ Modify၊ Annotation၊ Layers၊ Block၊ Properties၊ Utilities၊ Clipboard)၊ {{ui:Insert}}၊ {{ui:Annotate}}၊ {{ui:Parametric}}၊ {{ui:View}}၊ {{ui:Manage}}၊ {{ui:Output}} နှင့် {{ui:3D}}။ Command များကို ပုံမှန်အတိုင်း ရိုက်ပါ။ Middle ခလုတ်က pan လုပ်သည်; right click သည် {{key:Enter}} ဖြစ်ပြီး right ခလုတ်ဖြင့် ဆွဲလျှင် ဘာမျှ မလုပ်ပါ။ |
| {{ui:Ribbon}} | Task tab ရိုးရိုးများ၏ ribbon: {{ui:Draw}}၊ {{ui:Modify}}၊ {{ui:Annotate}}၊ {{ui:Parametric}}၊ {{ui:Blocks}}၊ {{ui:Sheets}}၊ {{ui:View}}၊ {{ui:3D}} နှင့် {{ui:Tools}}၊ ညာဘက်ရှိ {{ui:File}} menu နှင့် အမြန်ခလုတ်များနှင့်အတူ။ Middle နှင့် right ခလုတ်များက CadCraft ၏ ကိုယ်ပိုင် style ကဲ့သို့ pan လုပ်သည်။ |

Style တိုင်းသည် CadCraft ၏ key များကို ထိန်းသည်: {{key:Mod+Z}}၊ {{key:Mod+Y}}၊ {{key:Mod+S}}၊ {{key:Mod+Shift+S}}၊ {{key:Mod+O}}၊ {{key:Mod+P}}၊ {{key:Mod+C}}၊ {{key:Mod+X}}၊ {{key:Mod+V}}၊ {{key:Mod+D}}၊ {{key:Mod+A}}၊ နှင့် drafting aids အတွက် {{key:F3}}၊ {{key:F7}}၊ {{key:F8}}၊ {{key:F10}}၊ {{key:F11}}၊ {{key:F12}}။ အက္ခရာများသည် ဘယ်တော့မှ key မဖြစ်: CadCraft က command line တွင် ရိုက်ထည့်သည်။

Ribbon များတွင် Layers panel ၏ tool များနှင့် status bar ၏ drafting aids လည်း ပါသည်။ {{ui:3D}} tab သည် ပုံဆွဲအောက်ရှိ 3D tab ကို ဖွင့်ပြီးမှ ဖြည့်သည်; Model tab ပေါ်တွင် 3D tool ရွေးလျှင် 3D tab ကို အရင်ဖွင့်သည်၊ 3D tab ပေါ်တွင် 2D tool ရွေးလျှင် Model tab သို့ အရင် ပြန်သွားသည်။

:::tip
CadCraft ၏ ကိုယ်ပိုင် layout ပါသော key ကို သင့် style က အခြား command အတွက် ပေးထားလျှင် ၎င်းသည် ဘာမျှ မလုပ်ပါ၊ status bar က ၎င်း command ရောက်ရာကို ပြောသည် ("My keys" တွင် Ortho သည် Ctrl+Alt+O)။ {{key:Delete}}၊ {{key:Esc}}၊ {{key:Enter}}၊ {{key:Tab}}၊ {{key:Space}} နှင့် မြားခလုတ်များသည် အမြဲ ၎င်းတို့၏ အဓိပ္ပာယ်ကို ထိန်းသည်။ Command run နေစဉ် သို့မဟုတ် command line တွင် စာလုံး ရိုက်နေစဉ် key များသည် command line နှင့် ပါသည်။
:::

## ကိုယ်ပိုင် ပြုလုပ်ရန်

1. သင်လိုချင်သည်နှင့် အနီးစပ်ဆုံး style ကို ရွေးပြီး {{ui:Customize…}} ကို နှိပ်ပါ။
2. {{ui:Keys and menus}} တွင် command တစ်ခုကို ရှာပါ (ရှာဖွေရေး box က ကူညီသည်)။ {{ui:Add a key}} ကို နှိပ်ပြီး key ကို နှိပ်ပါ။ Key တစ်ခုကို ဖယ်ရန် နှိပ်ပါ။
3. Ribbon ဖြင့် {{ui:Where it sits}} သည် command ကို အခြား tab နှင့် panel သို့၊ {{ui:File}} menu သို့၊ သို့မဟုတ် {{ui:Keys only}} သို့ ရွှေ့သည်။
4. {{ui:Mouse}} တွင် wheel နှင့် ပုံဆွဲကို pan လုပ်သော ခလုတ်များကို သတ်မှတ်ပါ။
5. အမည်ပေးပြီး {{ui:Save}} ကို နှိပ်ပါ။

Built-in style ကို သိမ်းခြင်းသည် သင့်ကိုယ်ပိုင် မိတ္တူ ("My Drafting classic") ဖန်တီးသည်; built-in တစ်ခုက ဘယ်တော့မှ မပြောင်းပါ။ Command နှစ်ခုကို key တစ်ခုပေးထားလျှင် အနီဖြင့် ပြပြီး သိမ်းမီ ပြင်ရမည်။

## Command ရိုက်ပေးသော key များ

{{cmd:SHORTCUTS}} (View › More › {{ui:Keyboard shortcuts…}}) သည် key တစ်ခုကို command line တစ်ခုလုံး ပေးသည်၊ ဥပမာ `LINE` အတွက် {{key:Ctrl+Alt+L}} သို့မဟုတ် `ZOOM E` အတွက် {{key:F9}}။ ဤ key များသည် အသုံးပြုနေသော style နှင့် ပိုင်သည်: ဤဗားရှင်း ပထမဆုံး ဖွင့်သည့်အခါ ယခင်ဗားရှင်းတွင် ပြုလုပ်ခဲ့သော key များကို "My CadCraft keys" ဟူသော သင့်ကိုယ်ပိုင် style သို့ တစ်ကြိမ်တည်း ယူလာပြီး ယခင်အတိုင်း အလုပ်လုပ်သည်။ Style ကို ထုတ်ယူလျှင် ၎င်းတို့ပါ လိုက်ပါသည်။

## Mouse

- **Mouse wheel**: {{ui:Scroll up zooms in}} (စတင်ချက်) သို့မဟုတ် {{ui:Scroll up zooms out}}၊ နှင့် ဘယ်လောက်မြန်သလဲ။ Trackpad pinch သည် အမြဲ သင့်လက်ချောင်း ရွေ့သည့်နည်းဖြင့် zoom လုပ်သည်။
- **ပုံဆွဲကို pan လုပ်ရန်**: middle ခလုတ်၊ right ခလုတ်၊ သို့မဟုတ် နှစ်ခုလုံး။ ဆွဲခြင်းမပါဘဲ right click သည် အမြဲ {{key:Enter}} ဖြစ်သည်။ Left ခလုတ်သည် CadCraft တွင် အမြဲ ရွေးပြီး ဆွဲသည်၊ ထို့ကြောင့် ၎င်းကို ရွေးခြင်းသည် ဤနေရာတွင် ဘာမျှ မပြောင်းပါ။
- **3D view များတွင် ဆွဲခြင်း**: 3D tab သည် style တိုင်းတွင် ကိုယ်ပိုင် ခလုတ်များ ထားသည် (left orbit၊ middle နှင့် right pan)။

## ယူသွားရန်

{{ui:Export}} သည် သုံးနေသော style ကို `.ccinput.json` ဖိုင်သေးသေး အဖြစ် သိမ်းသည်; {{ui:Import…}} သည် အခြားကွန်ပျူတာ သို့မဟုတ် လုပ်ဖော်ကိုင်ဖက်ထံမှ တစ်ခု ထည့်သည်။ ဝင်လာသော ဖိုင်သည် CadCraft ၏ ကိုယ်ပိုင် command များကိုသာ ညွှန်နိုင်သည်: အခြားအရာများကို ချန်ထားပြီး status bar တွင် ရေတွက်သည်။ {{ui:Delete this style}} သည် သင့်ကိုယ်ပိုင် style တစ်ခုကို ဖယ်သည်။

:::note
ဤ ဆက်တင်များသည် ဤ browser တွင် ရှိနေသည်။ Style ကဒ်များအောက်ရှိ {{ui:Use this style in every app}} သည် အက်ပ်တိုင်းကို ကိုက်ညီသော style ဖြင့် ဖွင့်စေသည် (ကိုယ်ပိုင် toolbar၊ ribbon သို့မဟုတ် Drafting classic)၊ အက်ပ်တစ်ခုစီတွင် ပြုလုပ်ခဲ့သော ပြောင်းလဲမှုများနှင့်အတူ။ CadCraft တွင် menu-bar style မရှိပါ: အခြားအက်ပ်၏ menu bar ကို အက်ပ်အားလုံးအတွက် ရွေးထားလျှင် CadCraft သည် ကိုယ်ပိုင် toolbar ကို ထိန်းထားသည်။
:::

ဆက်စပ်: [ကီးဘုတ်နှင့် mouse](topic:keyboard) · [CadCraft ဆက်တင်များ](topic:settings) · [အခြား drafting software မှ ပြောင်းလာခြင်း](topic:coming-from) · [Command alias များ](topic:command-aliases)
