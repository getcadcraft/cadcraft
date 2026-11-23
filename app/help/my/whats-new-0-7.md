---
title: 0.7 တွင် အသစ် (ယခင်)
summary: PDF underlay နှင့် PDF import၊ အလိုအလျောက် trace ပါသော scan ပုံဆွဲများ၊ SPLINE၊ SPLINEDIT နှင့် PEDIT ဖြင့် အစစ်အမှန် spline များ၊ dimension style manager၊ ဖော်မတ်ကို ထိန်းသော စာသား၊ WBLOCK နှင့် သင့်ကိုယ်ပိုင် scale များ၊ အခြား program မှ 3D solid များ၊ scan များ ကြေညာခြင်း၊ Laser panel၊ USD export၊ CadCraft Studio တွင် History နှင့် ပရင့်ထုတ်ခြင်း၊ လမ်းညွှန်ထားသော ပထမဆုံး ပုံဆွဲ၊ toolbar ကို အနားမည်သည့်ဘက်မဆို သို့မဟုတ် အတန်းနည်းနည်းဖြင့် ထားနိုင်ခြင်း၊ နှင့် AI အကူအညီပေးသူများအတွက် နောက်ထပ်အရာများ။
keywords: 0.7 အသစ်, ယခင် ထုတ်ပြန်မှု, ထုတ်ပြန်ချက်မှတ်စုများ, changelog, ပြောင်းလဲမှုများ, 0.7, ဗားရှင်း, အင်္ဂါရပ်အသစ်များ, pdf, pdfattach, pdfimport, underlay, scan, scanattach, scantrace, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, ဖော်မတ်, wblock, scalelistedit, scale list, acis, 3d solids, registerscans, scan များ ကြေညာ, icp, e57, las, လေဆာ, grbl, g-code, usd, usdout, history, ဗားရှင်းများ, compare, print, printer, png, svg, plot style, linetype, လမ်းညွှန်, cheat sheet, command map, toolbar position, toolbar rows, toolbardock, regen, regenall, trackpad, swipe, code page, cyrillic, ကိုရီးယား, တရုတ်, ဂျပန်, လျှပ်စစ်, rcd, p&id, pid, acad.lsp, acaddoc.lsp, support ဖိုဒါ, အကူအညီပေးသူများ, mcp, ယူနစ်များ, ပေါ်တူဂီ
from: d9a8ea79
---

ဤသည်မှာ CadCraft 0.7 တွင် 0.6 နှင့်နှိုင်းယှဉ်လျှင် ပြောင်းလဲခဲ့သည်များ ဖြစ်သည်။ အများစုကို Discord တွင် တောင်းဆိုခဲ့သည်။ စာရင်းကို နယ်ပယ်အလိုက် အရေးကြီးဆုံး ရှေ့ဆုံးတွင် ထားသည်။

## အသစ်

### PDF များနှင့် scan ပုံဆွဲများ

- **PDF စာမျက်နှာတစ်ခုကို ပုံဆွဲအောက်တွင် ထားပါ။** {{cmd:PDFATTACH}} (`PDFATT`) သည် စာမျက်နှာကို အစစ်အမှန် အရွယ်အစား သို့မဟုတ် သင် ရိုက်ထည့်သော scale ဖြင့် ထားသည်။ ၎င်း၏ မျဉ်းများသို့ snap လုပ်၊ မှိန်စေ၊ monochrome ({{cmd:PDFADJUST}}) ပြုလုပ်၊ clip ({{cmd:PDFCLIP}}) လုပ်ပြီး PDF ၏ကိုယ်ပိုင် layer များကို ({{cmd:PDFLAYERS}}) ပြောင်းနိုင်သည်။ မျဉ်း၊ fill နှင့် စာသားအဖြစ် plot လုပ်ပြီး DWG သို့မဟုတ် DXF 2000 သည် ဖိုင်သို့ link အဖြစ် ထားသည်။ {{ui:Open}} ဖြင့် PDF ဖွင့်လျှင် ချိတ်ရမလား သို့မဟုတ် တင်သွင်းရမလား မေးသည်။ [PDF underlay နှင့် PDF import](topic:pdf-underlay) ကို ကြည့်ပါ။
- **PDF စာမျက်နှာတစ်ခုကို ပုံဆွဲအရာဝတ္ထုများအဖြစ် ပြောင်းပါ။** {{cmd:PDFIMPORT}} (`PDFIM`) သည် PDF ၏ အမည်ဖြင့် layer များပေါ်တွင် မျဉ်း၊ polyline၊ စက်ဝိုင်း၊ arc၊ solid hatch နှင့် စာသားများ ဖန်တီးသည်။ အစစ်အမှန် အရွယ်အစား၊ ရိုက်ထည့်သော scale၊ သို့မဟုတ် point နှစ်ခုနှင့် အမှန်တကယ် အကွာအဝေးမှ scale လုပ်သည်၊ အဆင့်တစ်ဆင့်တည်းတွင် ပြန်ဖျက်နိုင်သည်။ [စာမျက်နှာ တင်သွင်းခြင်း](topic:pdf-underlay#import-a-page) ကို ကြည့်ပါ။
- **Scan ပုံဆွဲများ။** {{cmd:SCANATTACH}} သည် PNG၊ JPEG သို့မဟုတ် TIFF (စာမျက်နှာတစ်ခု သို့မဟုတ် အားလုံး) သို့မဟုတ် ပုံဖြစ်သော PDF စာမျက်နှာကို ယူသည်။ ထို့နောက် နှစ်ချက်နှိပ်ပြီး scale လုပ်ခြင်း ({{cmd:SCANSCALE}})၊ ညှိခြင်း ({{cmd:SCANALIGN}})၊ ၎င်း၏ကိုယ်ပိုင် ရှည်လျားသော မျဉ်းများဖြင့် ထောင့်မှန်ဖြစ်အောင် ပြုလုပ်ခြင်း ({{cmd:SCANDESKEW}})၊ အဖြူအမည်းလုပ်ပြီး အစက်အပြောက်များ ဖယ်ရှားခြင်း ({{cmd:SCANCLEAN}})၊ ဖြတ်ခြင်းနှင့် အပိုင်းအစများကို ဖျက်ခြင်း တို့ လုပ်နိုင်သည်။ အဆင့်တိုင်းသည် ပြန်ဖျက်ရန် အဆင့် တစ်ခု ဖြစ်ပြီး မူရင်းဖိုင်ကို ထိန်းထားသည်။ [Scan ပုံဆွဲများနှင့် trace](topic:scanned-drawings) ကို ကြည့်ပါ။
- **Scan ကို မျဉ်းနှင့် arc အဖြစ် trace လုပ်ပါ။** {{cmd:SCANTRACE}} သည် scan ၏ မျဉ်းများကို မျဉ်းနှင့် arc အဖြစ် SCAN-TRACE ဟူသော layer အသစ်ပေါ်တွင် သင် သတ်မှတ်သော tolerance ဖြင့် ဆွဲသည်၊ စာသားနှင့် hatching များကို ကိုယ်ပိုင်အတိုင်း ထားသည်။ အစီရင်ခံစာက ဘာဆွဲခဲ့သလဲ ဘာချန်ခဲ့သလဲ ပြောသည်၊ ရလဒ်မှန်ကြောင်း အာမခံချက် မဟုတ်ပါ: ကြည့်ထားသော စာရွက်နှင့် နှိုင်းယှဉ်စစ်ပါ။ {{cmd:RASTERSNAP}} သည် object snap များကို scan ၏ အဆုံး၊ ထောင့်နှင့် ဖြတ်ကျော်မှုများကို ရှာခွင့်ပေးသည်။ ဘာမျှ မပို့ပါ၊ trained model မသုံးပါ။ [Trace](topic:scanned-drawings#the-trace) ကို ကြည့်ပါ။

### ပုံဆွဲခြင်းနှင့် တည်းဖြတ်ခြင်း

- **အစစ်အမှန် spline များ။** {{cmd:SPLINE}} (`SPL`) သည် အမှတ်များကို ဖြတ်သန်းသော သို့မဟုတ် control point များမှ ကွေးကို ဆွဲသည် (degree 1 မှ 5)၊ အဆုံး tangent များပါသည်; {{cmd:SPLINEDIT}} (`SPE`) သည် fit သို့မဟုတ် control point များကို ရွှေ့၊ ထည့်၊ ဖျက်၊ weight သတ်မှတ်၊ ဖွင့်၊ ပိတ်၊ ပြောင်းပြန်လှည့်၊ သို့မဟုတ် spline ကို polyline အဖြစ် ပြောင်းသည်။ DWG နှင့် DXF ဖိုင်များမှ spline များသည် spline အဖြစ် ဖွင့်ပြီး DWG နှင့် DXF 2000 သည် spline အဖြစ် သိမ်းသည်။ [Spline နှင့် polyline](topic:splines) ကို ကြည့်ပါ။
- **PEDIT။** {{cmd:PEDIT}} (`PE`) သည် polyline များကို ပိတ်ခြင်းနှင့် ဖွင့်ခြင်း၊ မျဉ်းနှင့် arc များကို ချိတ်ခြင်း၊ အကျယ်တစ်ခု သတ်မှတ်ခြင်း၊ vertex များမှတဆင့် ကွေးကို fit လုပ်ခြင်း သို့မဟုတ် spline ကို ၎င်းတို့တလျှောက် fit လုပ်ပြီး Decurve ဖြင့် ပြန်ယူခြင်း၊ ပြောင်းပြန်လှည့်ခြင်း၊ နှင့် အရေအတွက်များစွာကို တစ်ကြိမ်တည်း တည်းဖြတ်ခြင်း တို့ လုပ်သည်။ [Polyline တည်းဖြတ်ခြင်း](topic:splines#edit-a-polyline) ကို ကြည့်ပါ။
- **WBLOCK။** {{cmd:WBLOCK}} (`W`) သည် block တစ်ခု၊ object အချို့ သို့မဟုတ် ပုံဆွဲတစ်ခုလုံးကို ဖိုင်သစ် DWG သို့မဟုတ် DXF သို့ ရေးသည်၊ ၎င်းတို့ အသုံးပြုသော layer များ၊ style များနှင့် block များသာ ပါသည်။ [Block သို့မဟုတ် object များကို ကိုယ်ပိုင်ဖိုင်သို့ ရေးခြင်း](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own) ကို ကြည့်ပါ။
- **REGEN နှင့် REGENALL။** {{cmd:REGEN}} (`RE`) သည် သင်ရှိသော tab ကို ပုံဆွဲမှ ပြန်ဆွဲသည်၊ {{cmd:REGENALL}} (`REA`) သည် tab၊ pane နှင့် ဖွင့်ထားသော ပုံဆွဲအားလုံးကို ပြန်ဆွဲသည်။ [REGEN နှင့် REGENALL](topic:commands#regen-and-regenall) ကို ကြည့်ပါ။

### စာသားနှင့် dimension များ

- **စာသားသည် ဖော်မတ်ကို ထိန်းသည်။** အခြား program မှ paragraph စာသားသည် စကားလုံးတစ်လုံးချင်းစီ၏ အရောင်၊ bold နှင့် italic၊ underline၊ ထပ်ထားသော အစိတ်အပိုင်းများ နှင့် အမြင့်များကို ထိန်းသည်: မျက်နှာပြင်နှင့် PDF တွင် ဆွဲသည်၊ စကားလုံးများ တည်းဖြတ်သောအခါ ထိန်းသည်၊ ပြန်သိမ်းသည်။ [အခြား program မှ paragraph စာသားရှိ ဖော်မတ်](topic:text#formatting-inside-paragraph-text-from-other-programs) ကို ကြည့်ပါ။
- **Dimension style manager။** {{cmd:DIMSTYLE}} (`D`) သည် အမည်ပေးထားသော dimension style များ ဖန်တီး၊ ပြောင်း၊ နှိုင်းယှဉ်၊ အသုံးချသည်; style ကို ပြောင်းလျှင် ထို style ကို သုံးသော dimension အားလုံး ပြောင်းသည်။ {{cmd:DIMEDIT}} (`DED`) သည် စာသားကို ပြန်ထား၊ စာသားအသစ် ရိုက်၊ ၎င်းကို လှည့်ပြီး extension မျဉ်းများကို စောင်းစေသည်; {{cmd:DIMTEDIT}} သည် စာသားကို ဘယ်၊ ညာ သို့မဟုတ် ဗဟိုသို့ ရွှေ့သည်။ [အမည်ပေးထားသော dimension style များ](topic:dimension-settings#named-dimension-styles) ကို ကြည့်ပါ။
- **သင့်ကိုယ်ပိုင် scale များ။** {{cmd:SCALELISTEDIT}} (`SCALELIST`) သည် 1:75 ကဲ့သို့ scale များကို viewport နှင့် plot scale list များသို့ ထည့်သည်; ၎င်းတို့ကို ပုံဆွဲတွင် သိမ်းသည် (DWG နှင့် DXF 2000)၊ အခြား program မှ ပုံဆွဲသည် ၎င်း၏ကိုယ်ပိုင် list ကို ယူလာသည်။ [Scale များ](topic:units-papers-scales#scales) ကို ကြည့်ပါ။
- **Cyrillic၊ ကိုရီးယား၊ တရုတ်၊ ဂျပန် သို့မဟုတ် ဗီယက်နမ် code page များဖြင့် စာသား။** ၎င်းတို့ဖြင့် သိမ်းထားသော DXF ဖိုင်များသည် စာသားနှင့်အတူ ယခုဖွင့်သည်၊ တရုတ်၊ ဂျပန်နှင့် ကိုရီးယား စာသားသည် PDF တွင် ပရင့်ထုတ်သည် (plot သည် ပထမဆုံးလိုအပ်သောအချိန်တွင် ပိုကြီးသော font ကို ရယူသည်)။ [Font](topic:text#font) ကို ကြည့်ပါ။

### Plot နှင့် ပရင့်ထုတ်ခြင်း

- **Plot style table များတွင် ပိုများသည်။** အရောင်တစ်ခုစီအတွက် table သည် linetype၊ မျဉ်းအဆုံးနှင့် မျဉ်းဆက်ပုံ၊ solid fill များကို hatch မျဉ်းအဖြစ် ပရင့်ထုတ်သော fill style တို့ကိုလည်း သတ်မှတ်နိုင်သည်; table တွင် ကိုယ်ပိုင် lineweight list နှင့် linetype scale ရှိသည်။ [Plot style table များ](topic:plot-pdf#plot-style-tables) ကို ကြည့်ပါ။
- **ပရင့်နှင့် PNG နှင့် SVG ဖိုင်များ။** Plot dialog တွင် {{ui:Print…}}၊ {{ui:Download PNG}} (300 dpi) နှင့် {{ui:Download SVG}} ရှိသည်။ CadCraft Studio တွင် ကွန်ပျူတာ၏ ပရင်တာများ၊ ၎င်းတို့၏ စာရွက်နှင့် မိတ္တူအရေအတွက်ကို ပြသည်။ [Print](topic:plot-pdf#print) နှင့် [ပုံနှင့် SVG ဖိုင်များ](topic:plot-pdf#picture-and-svg-files) ကို ကြည့်ပါ။

### 3D နှင့် point cloud များ

- **အခြား program မှ 3D solid များ။** ပုံဆွဲ၏ model space ရှိ solid၊ region နှင့် body များသည် 3D tab တွင် ဖတ်ရုံသာ ပြသည်၊ DWG အဖြစ် သိမ်းသောအခါ မပြောင်းဘဲ ပြန်ရေးသည်။ CadCraft မဆွဲနိုင်သေးသော မျက်နှာပြင်များပေါ်ရှိ မျက်နှာများကို ခန့်မှန်းမဟုတ်ဘဲ စာရင်းပြုသည်။ [အခြား program မှ solid များ](topic:3d-solids#solids-from-other-programs) ကို ကြည့်ပါ။
- **Scan အများအပြား ကြေညာခြင်း။** {{cmd:REGISTERSCANS}} (`REGSCAN`) သည် မတူသော နေရာများမှ ယူထားသော scan များကို point အတွဲ သို့မဟုတ် ရိုက်ထည့်သော target coordinate များဖြင့် frame တစ်ခုတည်းတွင် ထားသည်၊ ICP ဖြင့် ညှိသည်၊ ကြေညာချက်ကို ဖိုင်ငယ် project အဖြစ် သိမ်းသည်၊ ပြီးလျှင် ကြေညာပြီး ပေါင်းထားသော cloud ကို LAS သို့မဟုတ် E57 ဖိုင်တစ်ခုအဖြစ် ရေးသည်။ [Scan အများအပြားကို တစ်ခုတည်းသို့ ကြေညာခြင်း](topic:register-scans) ကို ကြည့်ပါ။
- **USD export။** {{cmd:USDOUT}} သို့မဟုတ် {{cmd:EXPORT3D}} › {{ui:USD}} သည် 3D tab ၏ solid များကို `.usda`၊ `.usdc` သို့မဟုတ် `.usdz` အဖြစ် ရေးသည်။ [3D model ကို USD အဖြစ် export လုပ်ခြင်း](topic:usd) ကို ကြည့်ပါ။
- **3D tab တွင် တွက်ချက်မှုများ။** 3D tab ၏ tools များက အကွာအဝေး တောင်းသည့်အခါ command line ကဲ့သို့ တွက်ချက်မှုကို ရိုက်နိုင်သည်။ [ရိုက်ထည့်သော တန်ဖိုးတွင် သင်္ချာ](topic:coordinate-entry#arithmetic-in-a-typed-value) ကို ကြည့်ပါ။

### ဖန်တီးခြင်း

- **ပစ္စည်းများကို လေဆာသို့ ပို့ပါ။** {{cmd:LASER}}၊ သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:Laser…}} သည် ပုံဆွဲပေါ်တွင် panel ဖွင့်သည်: layer တစ်ခုစီသည် ဖြတ်၊ အမှတ်ရိုက်၊ မျဉ်းများ ထွင်း၊ ပုံသဏ္ဌာန်များ ဖြည့်၊ ပုံကို ထွင်း သို့မဟုတ် မပို့ရ၊ ၎င်း၏ power၊ အမြန်နှုန်းနှင့် pass များဖြင့်။ preview သည် သင်၏ တည်းဖြတ်မှုကို လိုက်သည်၊ {{ui:Save G-code…}} သည် GRBL laser-mode G-code ရေးသည်၊ Chrome သို့မဟုတ် Edge တွင် panel သည် အလုပ်ကို frame လုပ်ပြီး USB ဖြင့် ပို့နိုင်သည်။ ဆက်တင်များကို ပုံဆွဲတွင် သိမ်းသည် (DWG နှင့် DXF)။ [ပုံဆွဲကို လေဆာဖြတ်ရန် ပို့ခြင်း](topic:laser-cutting) ကို ကြည့်ပါ။
- **Electrical add-on တွင် တပ်ဆင်မှု သင်္ကေတများ။** ဒေတာ၊ ဖုန်းနှင့် TV outlet များ၊ key နှင့် time switch များ၊ thermostat၊ exit sign၊ detector များ၊ call point နှင့် sounder၊ ပန်ကာ၊ ရေနွေးအိုး၊ မီးဖိုချောင်၊ EV charging point၊ energy meter နှင့် sub-board နှင့် RCD နှင့် RCBO သင်္ကေတများ။ circuit တစ်ခုတွင် RCD ပါနိုင်သည်၊ panel schedule တွင် RCD column ရှိပြီး စစ်ဆေးမှုများက socket circuit များကို 30 mA သို့မဟုတ် နည်းသော RCD မရှိသည်ဟု အမည်ပေးသည်။ ၎င်းသည် စီစဉ်ချိန် သတိပေးချက်ဖြစ်ပြီး code စစ်ဆေးမှု မဟုတ်ပါ။
- **P&ID add-on။** P&ID သည် လုပ်ငန်းစဉ် ပုံဆွဲများ ဆွဲသည်: ချိတ်ဆက်မှု point ပါသော သင်္ကေတများ၊ process နှင့် signal မျဉ်းများ၊ tag များ၊ မျဉ်းနံပါတ်များ၊ လိုင်း၊ equipment၊ instrument နှင့် valve list များ (CSV သို့မဟုတ် workbook) နှင့် စစ်ဆေးမှုများ။ CadCraft နှင့်အတူ ပါသည်၊ {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} တွင် သင် ဖွင့်မှသာ ဖွင့်ထားသည်။ ၎င်းသည် drafting အကူအညီ ဖြစ်ပြီး အင်ဂျင်နီယာ အတည်ပြုချက် မဟုတ်ပါ၊ စာသားများသည် ယခုအချိန်တွင် အင်္ဂလိပ်သာ ဖြစ်သည်။

### စတင်ခြင်းနှင့် မျက်နှာပြင်

- **လမ်းညွှန်ထားသော ပထမ ပုံဆွဲ။** {{cmd:TOUR}} (သို့မဟုတ် ပထမကတ်ပေါ်ရှိ {{ui:Take the tour}}) သည် အဆင့် ခြောက်ဆင့်ကို အစစ်အမှန် ပုံဆွဲတွင် လမ်းညွှန်သည်: မျဉ်း၊ စက်ဝိုင်း၊ ရွှေ့ခြင်း၊ ဖြတ်ခြင်း၊ ဖျက်ခြင်းနှင့် dimension။ CadCraft ဘာမျှမပါဘဲ ပထမဆုံး ဖွင့်သောအခါ အလိုအလျောက် စသည်။ [ လမ်းညွှန်ချင်သလား? ](topic:getting-started#prefer-to-be-guided) ကို ကြည့်ပါ။
- **cheat sheet နှင့် command map။** [cheat sheet](topic:cheat-sheet) တွင် နေ့စဉ် command ၄၀ ကို စာမျက်နှာတစ်ခုတည်းတွင် ရှိပြီး ပရင့်ရန် PDF အဖြစ်လည်း ရှိသည်၊ [command map](topic:command-map) သည် command များကို တိုတောင်းသော အမည်များနှင့် A မှ Z အထိ စာရင်းပြုသည်။
- **toolbar ကို အနားမည်သည့်ဘက်မဆို။** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar position}}: အပေါ် (ယခင်အတိုင်း)၊ အောက်၊ ဘယ် သို့မဟုတ် ညာ၊ သို့မဟုတ် {{cmd:TOOLBARDOCK}} ကို ရိုက်ပါ။ [Toolbar နေရာ](topic:settings#toolbar-position) ကို ကြည့်ပါ။
- **Toolbar အတန်းများ။** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar rows}}: ကိုက်ညီအောင် ခေါက်ခြင်း၊ အတန်း ၂ ခု သို့မဟုတ် ၁ တန်း၊ CadCraft toolbar နှင့် Drafting classic နှင့် Ribbon ပုံစံများအတွက်။ {{key:Shift+Ctrl+F1}} သည် ၎င်းတို့ကြား ပြောင်းသည်၊ {{key:Ctrl+F1}} သည် ခလုတ်များ ပြသသည့်အရာများကြား ပြောင်းသည်၊ {{cmd:TOOLBARROWS}} နှင့် {{cmd:TOOLBAR}} က သတ်မှတ်သည်။ စတင်အကြံပြုချက်တွင် ပိတ်ခလုတ်ရှိသည်။ ဤကို GJoe2 က pull request ဖြင့် ပေးပို့ခဲ့သည်ကို ကျေးဇူးတင်ပါသည်။ [Toolbar အတန်းများ](topic:settings#toolbar-rows) ကို ကြည့်ပါ။

### CadCraft Studio တွင်

- **History။** {{cmd:HISTORY}} (`HIST`) သို့မဟုတ် {{ui:View}} › {{ui:More}} › {{ui:History…}}: ပုံဆွဲကို ဖွင့်ပြီး သိမ်းသောအခါ Studio သိမ်းထားသော မိတ္တူများနှင့် cloud မှ ဖွင့်ခဲ့လျှင် ပုံဆွဲ၏ cloud version များ။ တစ်ခုကို ဖွင့်ခြင်း သို့မဟုတ် ပြန်ထားခြင်း၊ သို့မဟုတ် နှစ်ခုကို နှိုင်းယှဉ်ခြင်း၊ ထည့်ထား၊ ဖျက်ထားနှင့် ပြောင်းထားသည်များကို အရောင်ဖြင့် ပြသည်။ [History](topic:history) ကို ကြည့်ပါ။
- **acad.lsp နှင့် acaddoc.lsp။** {{cmd:APPLOAD}} တွင် support ဖိုဒါတစ်ခု ရွေးပါ: ထိုဖိုင်နှစ်ခုသည် CadCraft စတင်သောအခါ တင်သည် (acaddoc.lsp သည် ပုံဆွဲ tab အသစ်တိုင်းအတွက် ထပ်တင်သည်)၊ `S::STARTUP` သည် ၎င်းတို့ပြီးနောက် run သည်။ [Application တင်ခြင်း](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio) ကို ကြည့်ပါ။
- **Plot dialog ၏ ကိုယ်ပိုင် window။** ၎င်း၏ title bar ရှိ ခလုတ်သည် dialog ကို အခြား monitor ပေါ်ထားနိုင်သော window တစ်ခုသို့ ရွှေ့သည်။ [Dialog ရွှေ့ခြင်း](common:arrange-panels#move-a-dialog) ကို ကြည့်ပါ။

### AI အကူအညီပေးသူများအတွက်

- **သင်ရွေးသော ဖိုဒါများရှိ ဖိုင်များကို အမည်ဖြင့်။** CadCraft Studio တွင် အကူအညီပေးသူသည် ဖိုင်များကို အမည်ဖြင့် ဖွင့်၊ သိမ်းနှင့် plot လုပ်နိုင်ပြီး command တစ်ခုကို ၎င်းတောင်းသော ဖိုင် (ဖိုင်မှ INSERT၊ COUNT ၏ export၊ SAVEAS၊ PLOT)ကို ပေးနိုင်သည်၊ သို့သော် {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}} အောက်တွင် သင် ထည့်ထားသော ဖိုဒါများအတွင်းသာ။ [သင်ရွေးသော ဖိုဒါများရှိ ဖိုင်များကို သုံးခွင့်ပေးခြင်း](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose) ကို ကြည့်ပါ။
- **Command နည်းနည်း။** အကူအညီပေးသူသည် command line တစ်ခုလုံးကို တစ်ကြိမ်တည်း ရိုက်နိုင်၊ ခေါ်ဆိုမှုများကြား command ကို ဖွင့်ထားနိုင်၊ objects များကို အမျိုးအစားနှင့် layer အလိုက် စာရင်းမပြဘဲ ရေတွက်နိုင်၊ block ကို attribute တန်ဖိုးများဖြင့် အဆင့်တစ်ဆင့်တည်း ထည့်နိုင်သည်။
- **ပြတင်းပေါက်မပါဘဲ။** `cadcraft` command line သည် SVG plot များ ရေးပြီး ဖိုင်များစွာကို ပြောင်း၊ plot၊ စစ်ဆေး သို့မဟုတ် ဖော်ပြနိုင်သည်။ MCP package ကို ယခုထုတ်ဝေထားခြင်း မရှိသေးပါ။ [ပြတင်းပေါက်မဖွင့်ဘဲ ဖိုင်များဖြင့် အလုပ်လုပ်ခြင်း](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft) ကို ကြည့်ပါ။

## ပြောင်းလဲထားသည်

- **Trackpad သည် ရွှေ့သည်။** trackpad ပေါ်တွင် လက်ညှိုး နှစ်ချောင် ရွှေ့လျှင် 2D view သည် လိုက်သည်; pinch နှင့် mouse wheel က zoom လုပ်သည်။ [Mouse၊ trackpad နှင့် touch](topic:mouse-trackpad-touch) ကို ကြည့်ပါ။
- **OLE object များ ထိန်းထားသည်။** DXF ၏ ထည့်ထားသော object များသည် ၎င်းတို့၏ ပုံ သို့မဟုတ် အမည်ပေးထားသော frame အဖြစ် ပြပြီး DXF 2000 ဖြင့် ပြန်သိမ်းသည်။ DWG ၏ object များကို ထိန်းထားပြီး DWG အဖြစ် သိမ်းသောအခါ ပြန်ရေးသည်၊ သို့သော် ယခု မပြသေးပါ။ ယခင်က သိမ်းသောအခါ ဆုံးရှုံးခဲ့သည်။ [အခြား program မှ object များ (OLE)](topic:pictures#objects-from-other-programs-ole) ကို ကြည့်ပါ။
- **ပုံဆွဲအသစ်၏ ယူနစ်များ** သည် {{ui:Settings}} › {{ui:General}} › {{ui:Units}} တွင် သင် star လုပ်ထားသော ယူနစ်ကို လိုက်သည်။

## ပြင်ဆင်ထားသည်

- ဗလာဖွင့်သော သို့မဟုတ် viewport တစ်ခုဆုံးရှုံးပြီး မော်ဒယ်တစ်ခုလုံးကို ၎င်း၏နေရာတွင် ပြသော layout များကို ယခု ၎င်းတို့၏ အစစ်အမှန် viewport များဖြင့် ဖွင့်သည်။ အကြောင်းအရာနှင့် ချိတ်ဆက်မှု မရှိသော layout ကို ထိန်းထားပြီး ဖွင့်သော အစီရင်ခံစာက ပြောသည်။
- ဟောင်း code page များရှိ DXF ဖိုင်များက Cyrillic နှင့် ကိုရီးယား စာသားကို ပျက်စီးနေပြသည်။ ယခု မှန်ကန်စွာ ဖတ်သည်။
- အခြား program မှ paragraph စာသားသည် ဖွင့်သောအခါ ဖော်မတ်ဆုံးရှုံးပြီး ရိုးရိုးပြန်သိမ်းခဲ့သည်။

## app တိုင်းတွင်

- **ယူနစ်များ။** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} တွင် အလျား၊ ဧရိယာ၊ ထုထည်၊ angle နှင့် slope အတွက် စာရင်းတစ်ခုစီ ရှိပြီး ယူနစ်များ၏ သတ်မှတ်ချက်များက ပေးသော တိကျသော အရွယ်အစားများ ဖြစ်သည် (US survey foot သည် ကိုယ်ပိုင်ယူနစ်ဖြစ်သည်)။ သင် မသုံးသောယူနစ်များကို ပိတ်ပါက ယူနစ်စာရင်းမှ ထွက်သည်; star လုပ်ထားသည်ကို အသစ်လုပ်ငန်းစဉ်က စတင်သည်။ ဖိုင်တိုင်းသည် ကိုယ်ပိုင်ယူနစ်ကို ထိန်းသည်။ CadCraft တွင် star သည် ပုံဆွဲတွင် ထည့်နိုင်သော ယူနစ်ဖြစ်သောအခါ ပုံဆွဲအသစ်၏ ယူနစ်များကို သတ်မှတ်သည်; CadCraft ၏ကိုယ်ပိုင် {{ui:Units}} အကွက်က switch များကို ယခုမလိုက်သေးပါ။ ပုံဆွဲတစ်ခုတွင် ယူနစ်ရှိပြီးသည်နှင့် ရိုက်ထည့်သော အကွာအဝေးတိုင်းသည် ယူနစ်အမှတ်အသားကို ဆောင်နိုင်သည်။ [ယူနစ်များ၊ ရိုက်ထည့်သော တန်ဖိုးများနှင့် ယူနစ် စာရင်းများ](common:unit-lists) ကို ကြည့်ပါ။
- **ပိုကျစ်သော layout နှင့် ပျောက်သွားသော panel များ။** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} သည် မျက်နှာပြင်ပေါ်တွင် ပိုထည့်နိုင်သည် (touch screen နှင့် ဖုန်းများက ခလုတ်ကြီးများ ထားသည်)။ panel တစ်ခုစီတွင် ပါးလွှာသော title bar ရှိသည်: ဆွဲ၍ dock သို့မဟုတ် ပြီးနေရာ တင်ပါ၊ အခြား panel ၏ bar ပေါ်သို့ ချပြီး frame တစ်ခုတည်းကို tab များအဖြစ် မျှဝေပါ၊ ဘေးသို့ ပြန်ဆွဲနိုင်ရန် pin လုပ်ပါ၊ သို့မဟုတ် ဖျောက်ပြီး ဘေးမှ ပြန်ခေါ်ပါ။ [Panel များကို စီစဉ်ခြင်း](common:arrange-panels#make-the-layout-denser) ကို ကြည့်ပါ။
- **Dialog များ ရွှေ့နိုင်သည်။** dialog ကို title bar ဖြင့် ဆွဲ၍ ပုံဆွဲမှ ဖယ်ပါ; သင် ထားခဲ့သည့်နေရာသို့ ပြန်ရောက်သည်။ title bar ကို နှစ်ချက်နှိပ်ပြီး ပြန်ဗဟိုထားနိုင်သည်။ [Dialog ရွှေ့ခြင်း](common:arrange-panels#move-a-dialog) ကို ကြည့်ပါ။
- **AI အကူအညီပေးသူများအတွက် ချက်များ။** သင်ကိုယ်တိုင် အကူအညီပေးသူအတွက် worked request ဆယ်ခု (ပုံဆွဲရှင်းခြင်း၊ အစုံ plot လုပ်ခြင်း၊ ပုံဆွဲစစ်ဆေးခြင်း၊ model ကို မေးခွန်းမေးခြင်း၊ takeoff စုစုပေါင်း၊ အပိုင်းကွဲပြားမှု စမ်းခြင်း...) တစ်ခုစီ၏ သုံးသော tools နှင့် လိုအပ်သော ခွင့်ပြုချက်များ၊ နှင့် ကျွန်ုပ်တို့၏ စမ်းသပ်မှုများဖြင့် ပြန်ထုတ်ထားသည်။ app များတွင် AI မပါပါ။ [AI အကူအညီပေးသူများအတွက် နည်းလမ်းများ](common:assistants-recipes) ကို ကြည့်ပါ။
- **ဘာသာစကားများ။** **Português (Portugal)** သည် {{ui:Settings}} › {{ui:General}} › {{ui:Language}} တွင် အသစ်ဖြစ်သည်။ ၎င်းနှင့် **Português (Brasil)**၊ **Español (México)** နှင့် **Bahasa Indonesia** တို့တွင် app များ၏ စကားလုံးအားလုံး ယခုရှိပြီး မူကြမ်းများဖြစ်ကာ မိခင်ဘာသာစကား ပြန်လည်စစ်ဆေးထားခြင်း မရှိသေးပါ။ Help topic များသည် အင်္ဂလိပ်ဖြင့်သာ ဖြစ်သည်။
- **CadCraft Studio** သည် update စစ်ဆေးမှု မအောင်မြင်သည့် အကြောင်းရင်းကို ပြသည် (သင့်စနစ်အတွက် ဖိုင်မရှိခြင်း၊ network မရှိခြင်း၊ signature မမှန်ခြင်း) "Done" ဟု အကြမ်းဖျင်း မပြတော့ပါ၊ နှင့် သင်ပိတ်ထားသော What's new ကတ်ကို နောက်ထုတ်ပြန်ချက်အသစ်မရှိမချင်း ပြန်မပြပါ။

## ဤဗားရှင်းတွင် မပါသေးသည်များ

- **0.7 ကို code-sign မလုပ်ရသေးပါ။** Signing နှင့် Microsoft Store package ကို certificate စစ်ဆေးမှု မပြီးသေးသဖြင့် 0.8 သို့ ရွှေ့ထားသည်။ ဖိုင်တိုင်းနှင့်အတူ SHA-256 ကို getcadcraft.com/download တွင် စစ်ပါ။ Windows တွင် SmartScreen က installer ကို ရပ်လျှင် {{ui:More info}} ကို ရွေးပြီး ထို့နောက် {{ui:Run anyway}} ကို ရွေးပါ။ Mac တွင် ပထမအကြိမ် CadCraft Studio ကို right-click လုပ်ပြီး {{ui:Open}} ကို ရွေးပါ။ CadCraft Studio သည် app store တွင် မရှိသေးပါ၊ iPad သို့မဟုတ် iPhone build လည်း မရှိသေးပါ။
- {{ui:Units}} ရှိ angle နှင့် slope စာရင်းများကို သိမ်းထားသော်လည်း ၎င်းတို့ကို ဖတ်သော အကွက် မရှိသေးပါ။
- DWG ၏ OLE object များကို ထိန်းထားသော်လည်း မပြသေးပါ၊ OLE object များအတွင်းရှိ metafile ပုံများကို ဆွဲခြင်းမရှိပါ။
- အခြား program များမှ plot style table (CTB ဖိုင်) များကို ဖတ်ခြင်းသည် နမူနာဖိုင်ကို စောင့်နေသည်။
- `\M+` ကုဒ်အဖြစ်ရေးထားသော ဟောင်း အာရှစာသားကို ဖတ်သော်လည်း အခြား program ဖိုင်ဖြင့် မစစ်ဆေးရသေးပါ။
- PDF underlay များ: စာမျက်နှာအတွင်းရှိ ပုံများကို မျက်နှာပြင်တွင် ပြသော်လည်း plot မလုပ်ပါ၊ အကူအညီပေးသူ၏ plot သည် underlay များကို ချန်ထားသည်၊ နှင့် အခြား program တွင် သိမ်းထားသော clip နှင့် scale ကို ဘယ်လိုဖတ်သည်ကို မစစ်ဆေးရသေးပါ။
- History: CadCraft သည် သိမ်းချက်များကို cloud သို့ မပို့သေးပါ၊ ထို့ကြောင့် cloud version များသည် အခြား ကိရိယာနှင့် web မှ သိမ်းထားသော ဖိုင်များ ဖြစ်သည်။ History သည် CadCraft Studio တွင်သာ ရှိသည်။
- Studio က acad.lsp support ဖိုဒါကို ပြန်စတင်ပြီးနောက် ထိန်းထားသလား မစစ်ဆေးရသေးပါ; မေးလျှင် APPLOAD တွင် ဖိုဒါကို ပြန်ရွေးပါ။
- Laser panel ကို အစစ်အမှန် လေဆာတွင် မစမ်းသပ်ရသေးပါ: ဆက်တင်တိုင်းကို scrap တွင် စမ်းပါ။ CadCraft Studio တွင် Web Serial မရှိပါ၊ ထို့ကြောင့် Studio တွင် panel သည် G-code ကိုသာ သိမ်းသည်။
- Scan ကြေညာခြင်းကို အတုဖန်တီးထားသော scan များဖြင့် စမ်းပြီးဖြစ်သည်၊ အစစ်အမှန် scanner ၏ set ဖြင့် မစမ်းရသေးပါ။
- Two-finger panning ကို simulated trackpad event များဖြင့် စမ်းပြီးဖြစ်သည်၊ အစစ်အမှန် trackpad ဖြင့် မစမ်းရသေးပါ။
- {{cmd:PEDIT}} တွင် Edit vertex option မရှိပါ (grip သို့မဟုတ် Properties ကို သုံးပါ)။ Offset၊ trim၊ extend၊ fillet၊ break နှင့် join တို့သည် spline ကို မယူသေးပါ; spline ၏ အမြင့် (Z) ကို မထိန်းပါ။
- စာပိုဒ်စာသား အသစ်များကို ဖော်မတ်ကုဒ် ပေးလို့ မရသေးပါ၊ SVG plot များတွင် ဖော်မတ်ထားသော စာသားသည် အရောင်တစ်ခုတည်းဖြင့် ပြသည်။
- WBLOCK ၏ Entire drawing သည် model ကိုသာ ရေး၍ sheet များကို မရေးပါ။ လက်ရှိ dimension style ကို ဖိုင်တွင် မသိမ်းပါ: ပုံဆွဲသည် Standard current ဖြင့် ဖွင့်သည်။
- ribbon menu style များတွင် layer၊ အရောင် သို့မဟုတ် linetype စာရင်းများ မရှိသေးပါ: {{ui:Layers}} panel နှင့် {{ui:Properties}} ကို သုံးပါ။
- Point cloud များကို ပုံဆွဲတွင် မသိမ်းသေးပါ သို့မဟုတ် plot မလုပ်သေးပါ၊ E57 ဖိုင်များ 6 သန်းအမှတ်နှင့် 512 MB အထိ ဖွင့်သည်။
- CadCraft ၏ သိမ်းထားသော DWG ဖိုင်များကို AutoCAD ကိုယ်တိုင်တွင် မစစ်ဆေးရသေးပါ။

အခြားအရာများကို [မတည်ဆောက်ရသေးသော အရာများ](topic:not-built-yet) တွင် ကြည့်ပါ။
