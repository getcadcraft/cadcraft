---
title: Point cloud ဖော်မတ်များ- ဘာတွဲချိတ်နိုင်သလဲ၊ ဘာကို export လုပ်ရမလဲ
summary: Laser scan ဖိုင်များ မည်သည်တို့ ပုံဆွဲအောက်တွင် ချိတ်ဆက်နိုင်သလဲ၊ မည်သည်တို့ သည် scanner ထုတ်လုပ်သူ၏ ကိုယ်ပိုင်ဖော်မတ်ဖြစ်သလဲ၊ နှင့် scan ကို ဤနေရာတွင် ချိတ်ဆက်နိုင်ရန် scanner ၏ software မှ ဘာကို export လုပ်ရမလဲ။
keywords: point cloud, pointcloudattach, pcattach, laser scan, scan, formats, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, can't open, not read
from: 20a5f4ee
---

## ဤနေရာတွင် ချိတ်ဆက်နိုင်သည်များ

ဤဖိုင်များကို {{cmd:POINTCLOUDATTACH}}၊ {{ui:Open}} ဖြင့် သို့မဟုတ် စာမျက်နှာပေါ် ချထားခြင်းဖြင့် ချိတ်ဆက်ပါ (point cloud ပေါ်တွင် as-built မျဉ်းများ ခြေရာခံခြင်း အကြောင်းအရာကို ကြည့်ပါ)။

| ဖော်မတ် | Extension | ဖတ်သည့်အရာ |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: အမှတ်များ၊ အရောင်များ၊ intensity၊ LiDAR classes၊ coordinate system နှင့် ၎င်း၏ ယူနစ်များ။ LAZ 1 GB အထိ။ |
| E57 | `.e57` | ဖိုင်ရှိ scan တိုင်းကို ၎င်း၏ pose ဖြင့် နေရာချထားသည်; အရောင်များ၊ ဖိုင်တွင် အရောင်မရှိလျှင် intensity; မီတာ။ ဖိုင်ထဲရှိ ပုံများကို ချန်ထားသည် (ပြောပြသည်)။ ယခုအချိန်တွင် အမှတ် 6 သန်းနှင့် 512 MB အထိ: ပိုကြီးသော scan များကို LAS သို့မဟုတ် LAZ အဖြစ် export လုပ်ပါ။ |
| PLY | `.ply` | စာသားနှင့် binary (byte order နှစ်မျိုးလုံး): vertex များ၏ x y z၊ အရောင်များနှင့် intensity။ မျက်နှာများကို ချန်ထားသည် (ပြောပြသည်)။ |
| PCD | `.pcd` | စာသားနှင့် binary: x y z၊ ပေါင်းထားသော သို့မဟုတ် သီးခြား အရောင်များ၊ intensity။ Compressed PCD ဖိုင်များကို မဖတ်ရသေးပါ: binary သို့မဟုတ် စာသားအဖြစ် သိမ်းပါ။ |
| PTX | `.ptx` | scan တစ်ခု သို့မဟုတ် ထို့ထက်ပိုသော၊ ၎င်းတို့၏ ကိုယ်ပိုင် transform ဖြင့် နေရာချထားသည်; scanner မတိုင်းတာခဲ့သော အမှတ်များကို ချန်ထားသည်။ မီတာ။ |
| PTS, XYZ | `.pts`, `.xyz` | စာသား: x y z၊ column များရှိလျှင် intensity နှင့် အရောင်များဖြင့်။ |

## Scanner ၏ software သာ ဖတ်နိုင်သော ဖိုင်များ

scan ဖိုင်အချို့သည် scanner ထုတ်လုပ်သူ၏ ကိုယ်ပိုင်ဖော်မတ်ဖြစ်ပြီး ထုတ်ပြန်ထားသော ဖော်ပြချက် သို့မဟုတ် ဖွင့်ထားသော reader မရှိပါ။ CadCraft က ၎င်းတို့ကို မဖတ်နိုင်ပါ: တစ်ခုကို ချိတ်ဆက်ရန် ကြိုးစားလျှင် ၎င်းသည် ဘာဖြစ်ကြောင်းနှင့် command line တွင် ဘာလုပ်ရမည်ကို ပြပါသည်။ scan ကို ထုတ်လုပ်သူ၏ software မှ E57 သို့မဟုတ် LAS (သို့မဟုတ် PTX၊ PTS) အဖြစ် export လုပ်ပြီး export ထားသော ဖိုင်ကို ချိတ်ဆက်ပါ။

| ဖိုင် | Extension | မည်သည့်အရာမှ export လုပ်ရမလဲ |
|---|---|---|
| ReCap project | `.rcp` | ReCap: project ကို ဖွင့်ပြီး export လုပ်ပါ။ project သည် ၎င်း၏ scan များကိုသာ ညွှန်ပြသောကြောင့် `.rcp` ကိုသာ ကူးလျှင် အမှတ်မရပါ။ |
| ReCap scan | `.rcs` | ReCap: scan ပိုင်သော project ကို ဖွင့်ပြီး export လုပ်ပါ။ |
| FARO scan | `.fls` | FARO SCENE။ |
| Leica scan | `.lgs` | Leica Cyclone REGISTER 360။ |
| Trimble scan | `.tzf` | Trimble RealWorks သို့မဟုတ် Trimble Business Center။ |
| Z+F scan | `.zfs` | Z+F LaserControl။ |

:::tip
export က ဖော်မတ်ကို မေးသောအခါ LAS သို့မဟုတ် LAZ က CadCraft သုံးသော အရာအားလုံး (အရောင်များ၊ intensity၊ classes၊ coordinate system နှင့် ယူနစ်များ) ကို အသေးဆုံးဖိုင်တွင် ထိန်းသိမ်းသည်။
:::

## ဤဖိုင်များကို ဘာကြောင့် မဖတ်သလဲ

ထိုဖော်မတ်များကို ထုတ်ပြန်ခြင်း မရှိပါ၊ ၎င်းတို့ကို ဖတ်ရန် တစ်ခုတည်းသော နည်းလမ်းမှာ ထုတ်လုပ်သူတစ်ဦးစီ၏ ကိုယ်ပိုင် software library ဖြစ်ပြီး ၎င်း၏ ကိုယ်ပိုင်စည်းကမ်းများအောက်တွင် ရှိသည်။ CadCraft သည် သင်၏ကွန်ပျူတာပေါ်တွင် ကိုယ်ပိုင်ကုဒ်ဖြင့် ဖတ်နိုင်သော ဖော်မတ်များကိုသာ ဖတ်သည်၊ ထို့ကြောင့် ချိတ်ဆက်ရန် scan တစ်ခုကို နေရာတစ်ခုသို့ ပို့ရန် မလိုပါ။
