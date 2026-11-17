---
title: LISP routine များကို run ရန်
summary: CadCraft ၏ LISP က ဘာတွေ run နိုင်သလဲ (function များ၊ prompt များ၊ command များ၊ object များ၊ ဒိုင်ယာလော့ခ်များ၊ vla object များ)၊ command line ပေါ်တွင် LISP ကို ဘယ်လိုရိုက်ရမလဲ၊ နှင့် ဘာတွေ မရှိသေးသလဲ။
keywords: lisp, routine, lsp, dcl, ဒိုင်ယာလော့ခ်, command, defun, entget, ssget, vla, vlax, vl, getpoint, အမှား, လိုက်ဖက်မှု, ဘာတွေ အလုပ်လုပ်သလဲ
from: 571bc077
---

## ဘာတွေ သိရမလဲ

အခြား CAD ပရိုဂရမ်အတွက် ရေးထားသော LISP routine တစ်ခုကို load လုပ်သောအခါ ဘာကို မျှော်လင့်ရမလဲ: LISP ၏ အစိတ်အပိုင်းများ CadCraft တွင် run မည်နည်း၊ နှင့် ဘာတွေ မရှိသေးသလဲ။

CadCraft တွင် ၎င်း၏ကိုယ်ပိုင် LISP ရှိသည်။ ၎င်းကို အများသူငှာ AutoLISP ကိုးကားစာအုပ်မှ ရေးထားပြီး အခြားသူ၏ ပရိုဂရမ်မှ မဟုတ်ပါ၊ ထို့ကြောင့် AutoCAD အတွက် ရေးထားသော routine အများစုသည် မပြောင်းဘဲ အလုပ်လုပ်သည်။ မရှိသောအရာရှိလျှင် command line က function အမည်ကို ပြောသည်၊ ထို့ကြောင့် CadCraft ၏ ချို့ယွင်းချက်နှင့် routine ၏ အမှားကို ခွဲခြားနိုင်သည်။

## command line ပေါ်တွင် LISP ရိုက်ရန်

`(` ဖြင့် စတင်သော expression တစ်ခု ရိုက်ပြီး {{key:Enter}} ကို နှိပ်ပါ: `(+ 1 2)` သည် `3` ကို ပြသည်။ `!name` သည် variable တစ်ခု၏ တန်ဖိုးကို ပြသည်။ မပိတ်သေးသော expression သည် နောက်လိုင်းကို စောင့်သည်။

prompt တစ်ခုတွင် expression သည် ထို prompt ကို ဖြေသည်: "Specify radius" တွင် `(* 2 12.5)` ရိုက်လျှင် 25 ဖြစ်သည်။

## ဘာတွေ run လဲ

- **ဘာသာစကား:** `defun` (`/` ၏ နောက်ရှိ local များဖြင့်), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, နှင့် `*error*` (local `*error*` အလုပ်လုပ်သည်)။ အမည်များသည် စာလုံးအကြီးအသေး ခွဲခြားခြင်း မရှိပါ; integer နှင့် real သည် သင်မျှော်လင့်သည့်အတိုင်း ကွဲပြားသည် (`(/ 7 2)` သည် 3)။
- **Built-in function များ:** သင်္ချာ၊ list များ (`car`, `cdr` နှင့် ၎င်းတို့၏ မိသားစု, `assoc`, `nth`, `member`, `subst`, `append`…), string များ (`strcat`, `substr`, `strcase`, `wcmatch`…), ပြောင်းလဲမှုများ (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometry (`polar`, `distance`, `angle`, `inters`) နှင့် ဖိုင်များ (`open`, `read-line`, `write-line`, `close`, `findfile`)။
- **Command များ:** `(defun c:NAME …)` က command တစ်ခု ဖန်တီးသည်။ `(command …)` နှင့် `(command-s …)` သည် CadCraft ၏ ကိုယ်ပိုင် command များကို မောင်းနှင်သည်၊ သင့်အဖြေအတွက် `pause` ဖြင့်။
- **Prompt များ:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `initget` keyword များဖြင့် `getkword`, `entsel`, `nentsel` နှင့် `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, filter list များနှင့် `-4` စစ်ဆေးချက်များဖြင့်)။
- **Object များကို list အဖြစ်:** `entget`, `entmod`, `entmake` (block များပါ), `entdel`, `entlast`, `entnext` (block reference ၏ attribute များသည် ၎င်းနောက်တွင် ATTRIB အဖြစ်၊ ထို့နောက် SEQEND ဖြင့် လာသည်၊ ထို့ကြောင့် attribute routine များ အလုပ်လုပ်သည်), `handent`, selection set များ, `tblsearch` နှင့် `tblnext`, `layoutlist`, `regapp`, CadCraft တွင် ရှိသော ဆက်တင်များအတွက် `getvar` နှင့် `setvar`။
- **ဒိုင်ယာလော့ခ်များ:** `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog` ဖြင့် `.dcl` ဖိုင်များ။ ခလုတ်များ၊ edit box များ၊ list box များ၊ popup list များ၊ toggle များ၊ radio button များ၊ row များ၊ column များနှင့် box များ အားလုံး ပြသသည်။ ၎င်း၏ ဒိုင်ယာလော့ခ်ကို ယာယီဖိုင်တစ်ခုသို့ ရေးသော routine လည်း အလုပ်လုပ်သည်။
- **Object များ:** `vl-load-com` (၎င်းသည် ဘာမျှ မလုပ်ပါ; ဘာမျှ load လုပ်စရာ မလိုပါ), `vl-` list နှင့် string function များ, `vl-catch-all-apply`, နှင့် `vla-get-…` / `vla-put-…` property များ, `vla-…` method များ, နှင့် Blocks, Layers နှင့် Layouts collection များပေါ်ရှိ `vlax-for`, model space နှင့် block definition များ၊ variant နှင့် safe array များဖြင့်။

## စမ်းသပ်ပြီး routine များ

CadCraft ၏ စမ်းသပ်မှုများသည် ဤစစ်ဆေးမှုများ (selection filter များ၊ prompt များ၊ command များ၊ object များ၊ error handler များ) အတွက် ရေးထားသော routine အစုတစ်ခုကို run ပြီး၊ လူများက အမည်ဖြင့် တောင်းဆိုခဲ့သော လူကြိုက်များသော routine တစ်ခုကိုလည်း run သည်: Lee Mac ၏ DelBlocks ကို ၎င်း၏ဒိုင်ယာလော့ခ်မှ အမည်ဖြင့်၊ နှင့် block တစ်ခုကို ရွေးခြင်းဖြင့် စမ်းသည်။ CadCraft တွင် ကိုယ်ပိုင် {{cmd:DELBLOCKS}} လည်း ရှိသည်၊ ထို့ကြောင့် ထိုအတွက် routine မလိုပါ။

## မတည်ဆောက်ရသေးသည်များ

- `grread` (မောက်စ်ကို ကိုယ်တိုင် ခြေရာခံခြင်း), reactor များ (`vlr-…`), curve function များ (`vlax-curve-…`), dictionary များနှင့် extended data (`dictsearch`, `entget` နှင့် `entmake` ထဲရှိ xdata), နှင့် Express Tools ၏ `acet-…` function များ။
- ဒိုင်ယာလော့ခ်ထဲရှိ ပုံများနှင့် slide များသည် အလွတ်ဘောင်များအဖြစ် ပြသသည်။
- အခြားပရိုဂရမ် run ခြင်း၊ Windows registry နှင့် သင် load လုပ်ထားသည်များအပြင်ရှိ ဖိုင်များ: routine တစ်ခုသည် ၎င်း၏ကိုယ်ပိုင် ယာယီဖိုင်များကို ရေးနိုင်ပြီး ဖတ်နိုင်သည်၊ ၎င်းတို့သည် စာမျက်နှာကို ပိတ်သည်အထိ ရှိနေသည်။

routine တစ်ခုသည် ဤအရာများထဲမှ တစ်ခုသို့ ရောက်သောအခါ command line တွင် "no function definition" နှင့် အမည်ကို ပြပြီး CadCraft တွင် ၎င်း မရှိသေးကြောင်း ပြောသည်။

## ရှောင်ရှားရမည့် အမှားများ

- **CadCraft ၏ command တစ်ခုနှင့် အမည်တူသော command။** CadCraft ၏ကိုယ်ပိုင် command ကျန်ရှိနေမည်။ routine ၏ command ကို command line ပေါ်တွင် `(c:NAME)` အဖြစ် run ပါ။
- **ယုံကြည်ရခက်သော LISP ကို run ခြင်း။** routine တစ်ခုသည် ပုံဆွဲထဲရှိ အရာမည်သည့်အရာကိုမဆို ပြောင်းနိုင်သော်လည်း အပြင်ဘက်တွင် ဘာမျှ မပြောင်းနိုင်ပါ: သင့်ဖိုင်များ၊ အခြားဆိုက်များ သို့မဟုတ် အခြား app များသို့ ဝင်ရောက်၍ မရပါ။
