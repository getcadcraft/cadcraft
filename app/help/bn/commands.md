---
title: কমান্ড রেফারেন্স
summary: CadCraft ড্রাফটিং অ্যাপের প্রতিটি কমান্ড, তার সংক্ষিপ্ত নামসহ, তার প্রশ্নগুলো, বিকল্প ও ডিফল্ট।
keywords: কমান্ড, সংক্ষিপ্ত নাম, কমান্ড তালিকা, area, perimeter, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

একটি কমান্ডের নাম বা সংক্ষিপ্ত নাম টাইপ করুন এবং {{key:Enter}} বা {{key:Space}} চাপুন। বড়-ছোট হাতের অক্ষরে কিছু আসে না, এবং শুরুতে `_`, `-`, `.` বা `'` থাকলে তা উপেক্ষা করা হয়। কমান্ড লাইনের ইতিহাসে প্রতিটি কমান্ডের একটি ছোট তালিকা পেতে `HELP` (বা `?`) টাইপ করুন; এই সাহায্যের জন্য {{key:F1}} চাপুন।

প্রম্পটগুলো কীভাবে পড়বেন: বিকল্পগুলো বর্গাকার বন্ধনীতে থাকে, এবং আপনি এর বড় হাতের অক্ষর টাইপ করে একটি বেছে নেন (`D` মানে Diameter)। ডিফল্ট কোণ বন্ধনীতে থাকে; সেটি গ্রহণ করতে {{key:Enter}} চাপুন। যেখানে একটি বিন্দু চাওয়া হয়, সেখানে আপনি ক্লিক করতে পারেন, অথবা [বিন্দু ও দূরত্ব ইনপুট](topic:coordinate-entry)-এ দেওয়া যেকোনো ফরম্যাট টাইপ করতে পারেন। যেখানে একটি দূরত্ব চাওয়া হয়, সেখানে একটি সংখ্যা টাইপ করতে পারেন, অথবা দুটি বিন্দুতে ক্লিক করতে পারেন।

যেখানে একটি বিন্দু বা একটি বস্তু প্রয়োজন এবং কোনো ডিফল্ট নেই, সেখানে {{key:Enter}} চাপলে কমান্ড শেষ হয়। {{key:Esc}} কমান্ডটি বাতিল করে। কমান্ড যা করে তা একটি পূর্বাবস্থার ধাপ।

## আঁকুন

### LINE

সংক্ষিপ্ত নাম: `L`। সোজা অংশ, প্রতিটি নিজের বস্তু।

- `Specify first point` (Enter: আপনার দেওয়া শেষ বিন্দু থেকে শুরু)
- `Specify next point [Undo]`, বারবার। দুটি অংশের পর: `[Undo/Close]`।
- `U` শেষ অংশটি ফিরিয়ে নেয়, `C` প্রথম বিন্দুতে বন্ধ করে শেষ করে। Enter শেষ করে।

### PLINE

সংক্ষিপ্ত নাম: `PL`। লাইন ও আর্ক অংশের একটি পলিলাইন।

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (দুটি অংশ হলে Close)
- `A` আর্কে যায়: `Specify endpoint of arc [Line/CLose/Undo]`। প্রতিটি আর্ক আগের অংশের সঙ্গে স্পর্শক হয়ে চলে। `L` লাইনে ফিরিয়ে আনে, `CL` আর্ক দিয়ে বন্ধ করে।
- Enter শেষ করে; পলিলাইনটি খোলা থাকে।

### CIRCLE

সংক্ষিপ্ত নাম: `C`।

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` জিজ্ঞাসা করে `Specify diameter of circle`।
- `2P`: একটি ব্যাসের দুই প্রান্ত। `3P`: বৃত্তের উপর তিনটি বিন্দু।
- `T` (এছাড়া কমান্ড `TTR`, এবং {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, তারপর দ্বিতীয়টি, তারপর ব্যাসার্ধ (Enter: শেষটি)। বৃত্তটি দুটি বস্তুকে স্পর্শ করে (লাইন, আর্ক, বৃত্ত, পলিলাইনের অংশ, ব্লকের ভেতরেও); যেগুলো স্পর্শ করে তার মধ্যে আপনার বাছাইয়ের সবচেয়ে কাছেরটি। কোনোটি না মিললে "Circle does not exist" দেখায়।
- `TTT` (বা {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): তিনটি বস্তু; তিনটিকেই স্পর্শ করা বৃত্ত, আপনার বাছাইয়ের সবচেয়ে কাছেরটি (তিনটি লাইন হলে ভেতরের বা বাইরের একটি বৃত্ত, আপনি কোথায় বাছেন তার ওপর নির্ভর করে)।

### ARC

সংক্ষিপ্ত নাম: `A`।

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: তিন বিন্দুর মধ্য দিয়ে একটি আর্ক।
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`। আর্কটি শুরু থেকে শেষ পর্যন্ত ঘড়ির উল্টো দিকে চলে।

### RECTANG

সংক্ষিপ্ত নাম: `REC`, `RECTANGLE`। একটি বন্ধ পলিলাইন।

- `Specify first corner point`, `Specify other corner point`। দ্বিতীয় কোণের জন্য `@width,height` টাইপ করুন।

### POLYGON

সংক্ষিপ্ত নাম: `POL`। একটি বন্ধ পলিলাইন হিসেবে একটি নিয়মিত বহুভুজ।

- `Enter number of sides <4>` (3 থেকে 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: একটি বিন্দুতে ক্লিক করুন বা টাইপ করুন; তার দূরত্ব আকার ঠিক করে এবং তার দিক বহুভুজটি ঘোরায়।

### ELLIPSE

সংক্ষিপ্ত নাম: `EL`।

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, তারপর অন্য অক্ষের দূরত্ব।
- `I` (`Isocircle`, শুধু {{cmd:ISODRAFT}} চালু থাকলে): কেন্দ্র, তারপর ব্যাসার্ধ বা `Diameter`: বর্তমান আইসোমেট্রিক তলে একটি বৃত্ত যেভাবে দেখা যায় সেই উপবৃত্ত।

### HATCH

সংক্ষিপ্ত নাম: `H`, `BH`, `BHATCH`; অথবা টুলবারে {{ui:Hatch}}। প্রথমে বর্তমান প্যাটার্ন, স্কেল ও কোণ প্রিন্ট করে।

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, বারবার (`Undo`, একবার একটি এলাকা হলে): প্রতিটি ক্লিক তার চারপাশের বন্ধ এলাকা যোগ করে, তার ভেতরের বন্ধ আকারগুলো দ্বীপ হিসেবে। Enter তাদের সবগুলো থেকে একটি হ্যাচ বানায়।
- `S`: `Select closed objects` (বন্ধ পলিলাইন, বৃত্ত, বন্ধ উপবৃত্ত)।
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`। `SC`: `Specify pattern scale`। `A`: `Specify pattern angle`।
- `G` (Gradient): ভরাটটি একটি প্যাটার্নের বদলে গ্রেডিয়েন্ট। প্রশ্নগুলোর জন্য দেখুন {{cmd:GRADIENT}}।

দেখুন [হ্যাচ ও এলাকা ভরাট](topic:hatch)।

### GRADIENT

সংক্ষিপ্ত নাম: `GD`। একটি এলাকা এক বা দুই রঙের গ্রেডিয়েন্ট দিয়ে ভরে। প্রথমে গ্রেডিয়েন্টের প্রশ্ন করে, তারপর {{cmd:HATCH}}-এর মতো এগোয় (`Pick internal point`, বন্ধ বস্তুর জন্য `S`, শেষ করতে {{key:Enter}})।

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, বারবার; প্রতিবার বর্তমান গ্রেডিয়েন্ট প্রিন্ট করে।
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, অথবা এর একটি উল্টানো (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`)। প্রথম কয়েকটি অক্ষরই যথেষ্ট।
- `O`: এক রং, তারপর তার টিন্ট 0 থেকে 1 (0 কালো করে, 0.5 রংটিই, 1 সাদা করে)। `TW`: প্রথম ও দ্বিতীয় রং। রং হলো 1 থেকে 255-এর একটি সংখ্যা, `255,128,0`-এর মতো তিনটি সংখ্যা, অথবা `#rrggbb`।
- `A`: গ্রেডিয়েন্ট যে কোণে চলে। `C`: কেন্দ্রীভূত হ্যাঁ বা না (না হলে গ্রেডিয়েন্টের মধ্যবিন্দু এক পাশে সরে যায়)।
- অজানা রং বা ধরন, এবং 0 থেকে 1-এর বাইরের টিন্ট প্রত্যাখ্যান করে।

পরে {{cmd:HATCHEDIT}} `G` এবং Properties (Gradient) একটি গ্রেডিয়েন্ট বদলায়, অথবা যেকোনো হ্যাচকে একটিতে বদলায়। গ্রেডিয়েন্ট পর্দায় আঁকা হয় এবং ছাপা হয়। DWG 2004 ও পরবর্তী সংস্করণ এটিকে আসল গ্রেডিয়েন্ট হ্যাচ হিসেবে রাখে; DXF 2000 ও DWG 2000 এটি CadCraft-এর জন্য রাখে, এবং অন্য প্রোগ্রাম প্রথম রঙের একটি কঠিন ভরাট দেখে।

### HATCHGENERATEBOUNDARY

সংক্ষিপ্ত নাম: `HGB`। যে হ্যাচ তার সীমানা হারিয়েছে, তার থেকে সীমানা আবার তৈরি করে। `Select hatches` (বা আগে নির্বাচন করুন), তারপর `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`।

- হ্যাচের প্রতিটি লুপ হ্যাচের লেয়ারে একটি বন্ধ পলিলাইন হয়; নতুন পলিলাইনগুলো নির্বাচিত থাকে। একটি বাঁকা প্রান্ত ফিরে আসে সেই ছোট সোজা অংশ হিসেবে, যা হ্যাচ রাখে।
- Yes হলে হ্যাচটি তার নতুন সীমানা অনুসরণ করে, যেমন {{cmd:HATCH}} দিয়ে বানানো হ্যাচ করে। এক পূর্বাবস্থার ধাপ।
- কোনো হ্যাচ নির্বাচিত না থাকলে তা জানায়।

### POINT

সংক্ষিপ্ত নাম: `PO`; অথবা {{ui:Draw}} › {{ui:More}} › {{ui:Point}}। বিন্দু বস্তু, প্রতি ক্লিকে একটি, Enter পর্যন্ত।

- `Specify a point`

### XLINE

সংক্ষিপ্ত নাম: `XL`; অথবা {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}। নির্মাণ-লাইন, দুই দিকেই অসীম। দেখুন [নির্মাণ লাইন ও রে](topic:construction-lines)।

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, তারপর প্রতিটি লাইনের জন্য `Specify through point`, Enter পর্যন্ত।
- `A`: `Enter angle of construction line [Reference] <0>`; `R` প্রথমে `Select a line object` জিজ্ঞাসা করে।
- `B`: `Specify angle vertex point`, `Specify angle start point`, তারপর প্রতিটি লাইনের জন্য `Specify angle end point`।
- `O`: `Specify offset distance [Through] <Through>`, তারপর প্রতিটি লাইনের জন্য `Select a line object` ও `Specify side to offset` (বা `Specify through point`)।

### RAY

কোনো সংক্ষিপ্ত নাম নেই; অথবা {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}। `Specify start point`, তারপর প্রতিটি রে-এর জন্য `Specify through point`, Enter পর্যন্ত।

### TEXT

সংক্ষিপ্ত নাম: `DT`, `DTEXT`; অথবা টুলবারে {{ui:Text}}। একলাইন টেক্সট; প্রতিটি লাইন নিজের বস্তু।

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, তারপর `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, বারবার: প্রতিটি Enter নিচে পরের লাইন শুরু করে। খালি লাইনে Enter শেষ করে। এখানে {{key:Space}} একটি ফাঁকা স্থান টাইপ করে।

### DIVIDE

সংক্ষিপ্ত নাম: `DIV`। {{cmd:DIVIDE}} একটি লাইন, আর্ক, বৃত্ত, পলিলাইন, স্প্লাইন বা উপবৃত্তের উপর চিহ্ন বসায়, যা তাকে সমান ভাগে ভাগ করে। বস্তুটি বেছে নিন, তারপর ভাগের সংখ্যা দিন (2 থেকে 32767)। একটি খোলা বস্তু ভাগের সংখ্যার চেয়ে একটি চিহ্ন কম পায়; একটি বন্ধ বস্তু তার শুরুতেও একটি চিহ্ন পায়। বস্তুটি নিজে কাটা হয় না। চিহ্নগুলো বিন্দু; `Block` এর বদলে এই ড্রয়িংয়ের একটি ব্লক চায় এবং বস্তু অনুসরণ করে ঘুরবে কি না জিজ্ঞাসা করে। স্প্লাইন ও উপবৃত্তের দৈর্ঘ্য ছোট জ্যা বরাবর মাপা হয়। টেক্সট, হ্যাচ ও দৈর্ঘ্যহীন অন্য বস্তু প্রত্যাখ্যান করে।

### MEASURE

সংক্ষিপ্ত নাম: `ME`। {{cmd:MEASURE}} একটি লাইন, আর্ক, বৃত্ত, পলিলাইন, স্প্লাইন বা উপবৃত্ত বরাবর প্রতিটি দেওয়া দৈর্ঘ্যে একটি চিহ্ন বসায়, যেখান থেকে আপনি বেছেছেন সেই নিকটতম প্রান্ত থেকে গণনা করে (একটি বন্ধ বস্তু: তার শুরু থেকে)। দৈর্ঘ্য টাইপ করে বা দুই বিন্দু দিয়ে দিন। একটি খোলা বস্তুর দূর প্রান্তে কোনো চিহ্ন পড়ে না। `Block` বিন্দুর বদলে প্রতিটি চিহ্নে একটি ব্লক বসায়। 0 দৈর্ঘ্য, বস্তুর চেয়ে বড় দৈর্ঘ্য, এবং যে দৈর্ঘ্যে 32767-এর বেশি চিহ্ন হবে তা প্রত্যাখ্যান করে।

### BOUNDARY

সংক্ষিপ্ত নাম: `BO`, `BPOLY`। {{cmd:BOUNDARY}} আপনার বাছাই করা বিন্দু যে এলাকায় আছে তার চারপাশে একটি বন্ধ পলিলাইন বানায়, পর্দায় যেসব লাইন, আর্ক, বৃত্ত, পলিলাইন ও বক্ররেখা সেটিকে সীমাবদ্ধ করে তার থেকে। আর্ক বা বৃত্তের উপর থাকা অংশ আর্ক-অংশ হয়ে ফিরে আসে; উপবৃত্ত ও স্প্লাইনের অংশ ছোট সোজা অংশ হয়ে ফেরে। `Islands` চালু থাকলে (শুরুর সেটিং) ভেতরের প্রতিটি বন্ধ এলাকাও তার নিজের পলিলাইন পায়। বিন্দু বাছতে থাকুন; Enter শেষ করে। যেসব বস্তু এলাকাটি সীমাবদ্ধ করে তারা যেমন ছিল তেমনই থাকে। কোনো বন্ধ এলাকা বিন্দুটি ধরে না হলে তা জানায়।

### BLEND

{{cmd:BLEND}} দুটি খোলা বক্ররেখার প্রান্তের মধ্যে একটি স্প্লাইন আঁকে। যুক্ত করার জন্য প্রান্তের কাছে প্রতিটি বক্ররেখা বেছে নিন। `CONtinuity` বেছে নেয় `Tangent` (স্প্লাইন দুই বক্ররেখা বরাবর বের হয় ও পৌঁছায়) অথবা `Smooth` (প্রান্তে তারা যেভাবে বাঁকে, স্প্লাইনও সেভাবে বাঁকে); পছন্দটি সেশনের জন্য থাকে। দুটি বক্ররেখা বদলায় না। বন্ধ বস্তু, এবং যে দুই প্রান্ত আগে থেকেই মেলে, তা প্রত্যাখ্যান করে।

### REGION

সংক্ষিপ্ত নাম: `REG`। {{cmd:REGION}} বন্ধ বস্তুকে রিজিয়নে বদলায়: সমতল এলাকা যা আপনি যুক্ত, কাটা ও মাপতে পারেন। বৃত্ত, বন্ধ পলিলাইন, বন্ধ উপবৃত্ত বা বন্ধ স্প্লাইন বেছে নিন, অথবা লাইন, আর্ক ও খোলা পলিলাইন যা প্রান্ত থেকে প্রান্তে একটি লুপ বন্ধ করে; প্রতিটি লুপ একটি রিজিয়ন হয় এবং যে বস্তু থেকে এসেছিল তা প্রতিস্থাপন করে। আর্ক আর্কই থাকে; উপবৃত্ত ও স্প্লাইন ছোট সোজা অংশ হয়। যা বন্ধ নয় এবং কোনো লুপ বন্ধ করে না তা যেমন ছিল তেমনই থাকে, এবং কতটি তা জানায়। ড্রয়িংয়ে একটি রিজিয়ন হলো এক বা একাধিক বন্ধ পলিলাইন, একটি নামহীন গ্রুপ হিসেবে একসঙ্গে ধরা; তাই একটি ক্লিক পুরো রিজিয়ন নির্বাচন করে, এবং একটি কপি নিজের আলাদা রিজিয়ন। যেসব অন্য প্রোগ্রাম ফাইলটি খোলে তারা বন্ধ পলিলাইন দেখে।

ড্রয়িংয়ে রিজিয়ন থাকলে 2D ট্যাবের {{cmd:UNION}}, {{cmd:SUBTRACT}} ও {{cmd:INTERSECT}} রিজিয়নে কাজ করে: `UNION` নির্বাচিত রিজিয়নগুলো একটিতে যুক্ত করে (যেগুলো আলাদা তারা একটি রিজিয়ন হয় যার একাধিক রূপরেখা), `SUBTRACT` যেগুলো থেকে বিয়োগ করা হবে এবং তারপর যেগুলো সরানো হবে তা জিজ্ঞাসা করে (একটি ছিদ্র রিজিয়নের অংশ থাকে), `INTERSECT` সবগুলোর যৌথ এলাকা রাখে। প্রতিটি ফলের এলাকা জানায় এবং এক পূর্বাবস্থার ধাপ। কিছুই বাকি না থাকলে বা কিছু মিলে না থাকলে এগুলো প্রত্যাখ্যান করে। 3D ট্যাবে, এবং রিজিয়নবিহীন ড্রয়িংয়ে, একই কমান্ড আগের মতো সলিডে কাজ করে।

## পরিবর্তন

সংক্ষিপ্ত নাম: `MT`, `T`; অথবা টুলবারে {{ui:Paragraph}}। অনুচ্ছেদ টেক্সট যা একটি প্রস্থে মোড়ে, জায়গাতেই টাইপ করা।

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: দুই কোণের মধ্যের প্রস্থই যেখানে টেক্সট মোড়ে। `H` `Specify height` জিজ্ঞাসা করে, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` এবং দ্বিতীয় কোণ এড়িয়ে যায়।
- তারপর ড্রয়িংয়ে একটি বাক্স খোলে: টাইপ করুন, নতুন অনুচ্ছেদের জন্য {{key:Enter}}, শেষ করতে {{key:Mod+Enter}} বা বাইরে ক্লিক, বাতিল করতে {{key:Esc}}। এর বার উচ্চতা, লাইন ব্যবধান, প্রস্থ ও সারিবদ্ধকরণ ঠিক করে। দেখুন [টেক্সট ও লেবেল যোগ করুন](topic:text#write-a-note-that-wraps)।

### TEXTEDIT

সংক্ষিপ্ত নাম: `ED`, `DDEDIT`; অথবা একটি টেক্সটে ডাবল-ক্লিক করুন। `Select a text to edit`, {{key:Enter}} পর্যন্ত বারবার: প্রতিটি একই বাক্সে খোলে। একটি নির্বাচিত বা ডাবল-ক্লিক করা টেক্সটে শুরু করলে সেটিই সম্পাদনা করে এবং শেষ হয়।

### ERASE

সংক্ষিপ্ত নাম: `E`, `DELETE`; অথবা বস্তু নির্বাচিত থাকলে {{key:Delete}} চাপুন।

- `Select objects` (বস্তু আগে থেকে নির্বাচিত থাকলে বাদ যায়)

### MOVE

সংক্ষিপ্ত নাম: `M`।

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, `dx,dy` হিসেবে টাইপ করা।

### COPY

সংক্ষিপ্ত নাম: `CO`, `CP`। আপনি যতগুলো বিন্দু দেন ততবার কপি করে।

`Array` দ্বিতীয়-বিন্দু প্রম্পটে এক ধাপে একটি সারি বানায়: আইটেমের সংখ্যা দিন (মূল বস্তুটি একটি ধরা হয়), তারপর যে বিন্দুতে প্রথম কপি যাবে; বাকিগুলো একই ব্যবধানে অনুসরণ করে। `Fit` সেই বিন্দুকে বরং শেষ কপির জায়গা বানায়, বাকিগুলো মাঝখানে সমানভাবে ছড়িয়ে।

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, Enter পর্যন্ত বারবার। `U` শেষ কপি ফিরিয়ে নেয়।

### ROTATE

সংক্ষিপ্ত নাম: `RO`।

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: ডিগ্রিতে, ঘড়ির উল্টো দিক ধনাত্মক; অথবা যেদিকে ঘোরাবেন সেই বিন্দুতে ক্লিক করুন।

### SCALE

সংক্ষিপ্ত নাম: `SC`।

- `Select objects`, `Specify base point`
- `Specify scale factor`: `0.5` বা `2`-এর মতো একটি গুণক টাইপ করুন। একটি ক্লিক করা বিন্দু তার বেস বিন্দু থেকে দূরত্বকে গুণক হিসেবে দেয়।

### MIRROR

সংক্ষিপ্ত নাম: `MI`।

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

সংক্ষিপ্ত নাম: `AL`; অথবা {{ui:Modify}} › {{ui:More}} › {{ui:Align}}।

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- দুই জোড়া থাকলে: `Scale objects based on alignment points? [Yes/No] <N>`

দেখুন [বস্তু সারিবদ্ধ করুন](topic:modify-objects#align-objects)।

### ALIGNTO

- `Select objects` (বা নির্বাচন), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` বিন্দু চায়। নির্বাচন থাকে।

### DISTRIBUTE

- `Select objects` (কমপক্ষে তিনটি), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`। বাইরের দুটি থাকে; নির্বাচন থাকে।

### ALIGNPANEL

সংক্ষিপ্ত নাম: `ALP`; অথবা {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}। যে প্যানেল ক্লিক দিয়ে ALIGNTO ও DISTRIBUTE চালায় তা খোলে।

### LASER

সংক্ষিপ্ত নাম: `LASERCUT`; অথবা {{ui:View}} › {{ui:More}} › {{ui:Laser…}}। ড্রয়িংয়ের উপরে Laser প্যানেল খোলে: প্রতিটি লেয়ার কী করে (কাটা, দাগ, খোদাই, ভরাট, ছবি), প্রিভিউ, সংরক্ষণের জন্য GRBL G-code, এবং Web Serial দিয়ে ফ্রেমিং ও পাঠানো। দেখুন [একটি ড্রয়িং লেজারে পাঠান](topic:laser-cutting)।

### STRETCH

সংক্ষিপ্ত নাম: `S`; অথবা {{ui:Stretch}}। `Select objects to stretch`: সরানোর জন্য প্রান্তের উপর ক্রসিং উইন্ডো টানুন (বা `C` টাইপ করুন)। `Specify base point [Displacement]`, `Specify second point`। উইন্ডোর ভেতরের বিন্দু সরে: লাইনের প্রান্ত, পলিলাইনের শীর্ষবিন্দু (আর্ক অংশ তার উচ্চতা রাখে), মাত্রার বিন্দু; বৃত্ত, উপবৃত্ত, টেক্সট, বিন্দু ও ব্লক পুরোটা সরে যখন তাদের কেন্দ্র বা ঢোকানোর বিন্দু ভেতরে থাকে। কমান্ডের আগে করা নির্বাচন তার ক্রসিং উইন্ডো (ও লাসো) রাখে, তাই সেগুলো একইভাবে প্রসারিত হয়। উইন্ডো ছাড়া বস্তুগুলো পুরোটা সরে।

### ARRAY, ARRAYRECT, ARRAYPOLAR

সংক্ষিপ্ত নাম: `AR`; অথবা {{ui:Array}}। `Select objects`, তারপর `Enter array type [Rectangular/POlar] <Rectangular>` (শুধু ARRAY-তে)।

- Rectangular 4 কলাম × 3 সারি দিয়ে শুরু হয়, বস্তুর আকারের 1.5 গুণ ব্যবধানে, একটি প্রিভিউ সহ। `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` কলাম ও সারি জিজ্ঞাসা করে, `S` কলামের ও সারির মধ্যে দূরত্ব (ঋণাত্মক মানে বাঁয়ে বা নিচে যায়), `COL` ও `R` প্রতিটি এক দিকে।
- Polar `Specify center point of array` জিজ্ঞাসা করে, চারদিক ঘিরে 6 আইটেম দিয়ে শুরু হয়, ঘোরানো। `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` আইটেম, `F` যে কোণ ভরতে হবে (+ ঘড়ির উল্টো দিক, − ঘড়ির দিকে), `ROT` Yes বা No।
- {{key:Enter}} (eXit) সাধারণ বস্তু হিসেবে কপিগুলো তৈরি করে। এক পূর্বাবস্থার ধাপ।
- `AS` (ASsociative) সাধারণ কপি ও সম্পাদনাযোগ্য অ্যারের মধ্যে বদলায়: একটি বস্তু যা আপনি পরে {{cmd:ARRAYEDIT}} দিয়ে, তার গ্রিপ দিয়ে বা Properties-এ বদলাতে পারেন। পছন্দটি মনে রাখা হয় ({{cmd:ARRAYASSOCIATIVITY}}); শুরুতে এটি সাধারণ কপিতে থাকে।

### ARRAYPATH

একটি বক্ররেখা বরাবর কপি। `Select objects`, তারপর `Select path curve`: একটি লাইন, আর্ক, বৃত্ত, উপবৃত্ত, পলিলাইন বা স্প্লাইন (সাজানো বস্তুগুলোর একটি নয়)। পথটি তার যে প্রান্ত বস্তুর কাছে তা থেকে শুরু হয়, এবং প্রথম আইটেম বস্তুগুলো যেখানে আছে সেখানেই থাকে।

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, একটি প্রিভিউসহ। `M`: `Divide` আইটেমগুলো পুরো পথে সমানভাবে ছড়ায়, `Measure` প্রতি এত দূরত্বে একটি দেয়। `I`: আইটেমের সংখ্যা (Measure-এ 0 মানে যতগুলো ধরে; পথের শেষের বেশি সংখ্যা যতটুকু ধরে তাতে সীমিত হয়)। `SP`: পথ বরাবর আইটেমের মধ্যে দূরত্ব (Measure-এ যায়)। `AL`: Yes প্রতিটি আইটেম পথ অনুসরণ করে ঘোরায়, No সোজা রাখে।
- `AS` {{cmd:ARRAY}}-এর মতো। এটি চালু থাকলে অ্যারে পথের আকারের নিজস্ব কপি রাখে: পরে পথ বক্ররেখা সম্পাদনা করলে আইটেম সরে না।
- পথ বক্ররেখা না হলে, বা একটি আইটেম হলে, প্রত্যাখ্যান করে।

### ARRAYEDIT

ASsociative দিয়ে বানানো একটি অ্যারে বদলায়। `Select array` (বা আগে নির্বাচন করুন)। অ্যারেটি এখন কী তা প্রিন্ট করে, তারপর {{key:Enter}} পর্যন্ত জিজ্ঞাসা করে:

- Rectangular: `COL` কলাম ও তাদের ব্যবধান, `R` সারি ও তাদের ব্যবধান, `A` যে কোণে কলামগুলো চলে।
- Polar: `I` আইটেম, `F` ভরাটের কোণ, `ROT` আইটেম ঘোরানো Yes বা No।
- Path: `M` Divide বা Measure, `I` আইটেম, `SP` ব্যবধান, `AL` পথের সঙ্গে সারিবদ্ধ।
- `S` (Source) যে বস্তুগুলো অ্যারে পুনরাবৃত্তি করে সেগুলো আলাদাভাবে খোলে, ব্লক সম্পাদকের মতো। সেখানে আঁকুন ও সম্পাদনা করুন; {{cmd:ARRAYCLOSE}} সংরক্ষণ বা বাদ দেয়, এবং প্রতিটি আইটেম অনুসরণ করে।
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, তারপর প্রতিস্থাপনের আইটেমগুলোতে ক্লিক করুন, Enter। ওই আইটেমগুলো তার বদলে প্রতিস্থাপন দেখায়; প্রতিস্থাপন বস্তুগুলো ড্রয়িং ছেড়ে অ্যারের ভেতরে থাকে। `RES` (RESet) প্রতিটি আইটেমে আবার মূল উৎস বস্তু দেখায়।
- প্রতিটি পরিবর্তন এক পূর্বাবস্থার ধাপ। সাধারণ কপি, একটি সাধারণ ব্লক রেফারেন্স এবং লক করা লেয়ারের একটি অ্যারে প্রত্যাখ্যান করে।

একই সংখ্যা Properties-এর Array অংশে আছে, এবং অ্যারের গ্রিপ আছে: তার বেস বিন্দু সরায়, দ্বিতীয় আইটেমের গ্রিপ ব্যবধান ঠিক করে, শেষ আইটেমের পরের গ্রিপ সংখ্যা ঠিক করে (পোলারে: দ্বিতীয় আইটেম কতগুলো আইটেম, শেষ আইটেম ভরাটের কোণ)। {{cmd:EXPLODE}} অ্যারেকে আবার সাধারণ কপিতে ফেরায়।

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} Source শেষ করে: `Save the changes to the array's source objects? [Save/Discard] <Save>`। কোনো অ্যারের উৎস বস্তু খোলা না থাকলে তা জানায়। {{cmd:BCLOSE}} একই কাজ করে।

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`। {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ও {{cmd:ARRAYPATH}} কোনটি দিয়ে শুরু হবে তা ঠিক করে; তাদের `AS` বিকল্প একই সেটিং বদলায়। এই ব্রাউজারে মনে রাখা হয়।

### OFFSET

সংক্ষিপ্ত নাম: `O`। লাইন, আর্ক, বৃত্ত ও পলিলাইন।

যেখানে একটি পলিলাইন বাইরের দিকে সরে এবং তার সরল অংশগুলো একটি কোণে আলাদা হয়ে যায়, সেখানে ফাঁকটি কীভাবে বন্ধ হবে তা {{cmd:OFFSETGAPTYPE}} ঠিক করে।

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, তারপর `Specify point on side to offset` (বা Through থাকলে `Specify through point`), Enter পর্যন্ত বারবার।

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: {{cmd:OFFSET}} একটি পলিলাইনের বাইরের কোণে ফাঁক কীভাবে বন্ধ করে। `0` অংশগুলো বাড়ায় যতক্ষণ না মেলে (শুরুর সেটিং), `1` পুরোনো কোণের চারপাশে একটি আর্ক দিয়ে জোড়া দেয়, `2` একটি সরল কাটা দিয়ে। ভেতরের কোণ ও আর্ক অংশ প্রভাবিত হয় না। এই সেশনের জন্য রাখা হয়।

### EXTRIM

{{cmd:EXTRIM}} একটি প্রান্তের এক পাশের সবকিছু ছাঁটে। কাটার প্রান্ত বেছে নিন (একটি লাইন, আর্ক, বৃত্ত, পলিলাইন, উপবৃত্ত, স্প্লাইন বা নির্মাণ-লাইন), তারপর যে পাশ খালি করবেন সেখানে একটি বিন্দু বেছে নিন: প্রান্তটি ছেদ করা প্রতিটি লাইন, আর্ক, বৃত্ত, পলিলাইন ও নির্মাণ-লাইন ওই পাশের অংশ হারায়, যেখানে সেটি প্রান্ত থেকে শুরু হয়। আপনি পাশ বাছার সময় যেসব অংশ যাবে তা পয়েন্টার অনুসরণ করে। একটি বন্ধ প্রান্তের জন্য পাশ হলো ভেতর ও বাইর। যে বস্তুগুলো শুধু প্রান্ত স্পর্শ করে, এবং যে টেক্সট, হ্যাচ, স্প্লাইন ও উপবৃত্ত প্রান্ত পার হয়, সেগুলো যেমন আছে তেমনই থাকে। এক পূর্বাবস্থার ধাপ।

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: {{cmd:TRIM}} ও {{cmd:EXTEND}} কীভাবে শুরু হয়। `1` Quick: প্রতিটি বস্তু একটি কাটার প্রান্ত বা সীমানা। `0` Standard: আগে প্রান্ত চায়। LISP-এ `(setvar "TRIMEXTENDMODE" 0)`-ও।

### TRIM

সংক্ষিপ্ত নাম: `TR`। প্রথমে `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` প্রিন্ট করে। Quick মোডে প্রতিটি দৃশ্যমান বস্তু একটি কাটার প্রান্ত, এবং যে বস্তুকে কিছু ছেদ করে না তা মুছে যায়; Standard মোডে আগে `Select cutting edges (Enter = every object)` জিজ্ঞাসা করে এবং শুধু সেখানে কাটে।

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, বারবার: সরানোর টুকরোতে ক্লিক করুন (পয়েন্টার সেখানে থাকলে এটি ধূসর ও ড্যাশড দেখায়), কয়েকটি টুকরোর উপর একটি পথ টানুন (সবই এক ধাপে যায়), অথবা মাঝে একটি বেড়ার জন্য দুটি খালি জায়গায় ক্লিক করুন। {{key:Shift}} বদলে প্রসারিত করে। `T` কাটার প্রান্ত বেছে নেয় (Standard মোড), `F` বেড়ার বিন্দু চায়, `C` দুই উইন্ডো কোণ (আংশিক ভেতরের টুকরো যায়), `O` `Enter a trim mode option [Quick/Standard]` জিজ্ঞাসা করে, `E` `Enter an implied edge extension mode [Extend/No extend]` জিজ্ঞাসা করে (EDGEMODE), `R` আপনার নির্বাচিত বস্তু মুছে দেয়, `U` শেষ বাছাই বা টানা পূর্বাবস্থায় আনে। Enter শেষ করে। দেখুন [ছাঁটা ও প্রসারিত](topic:trim-and-extend)।

- হ্যাচে একটি ক্লিক হ্যাচ কেটে দেয়: কাটার প্রান্ত হ্যাচ করা এলাকা ভাগ করে, এবং আপনি যে টুকরোতে ক্লিক করেছেন তা সরে যায় (যেখানে ছিল সেখানে কোনো আঁকা রেখা থাকে না)। হ্যাচ তার প্যাটার্ন বা গ্রেডিয়েন্ট রাখে; সীমানার সঙ্গে যুক্ত হ্যাচ পরে আর যুক্ত থাকে না, কারণ সে আর সীমানা ভরে না। সেখানে কোনো কাটার প্রান্ত হ্যাচ ভাগ না করলে, ক্লিক হ্যাচের বাইরে হলে, বা কিছুই না থাকলে (ERASE ব্যবহার করুন) তা জানায়। টানা পথ বা বেড়া হ্যাচ কাটে না।

### EXTEND

সংক্ষিপ্ত নাম: `EX`। TRIM-এর উল্টো: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`। একটি ক্লিক তার কাছের প্রান্তটি পরের সীমানা পর্যন্ত লম্বা করে; একটি টানা পথ বা বেড়া যা যা ছেদ করে সবগুলো লম্বা করে; {{key:Shift}} ছাঁটে। `B` সীমানার প্রান্ত বেছে নেয় (Standard মোড)। Mode ও Edge TRIM-এর সঙ্গে ভাগাভাগি করা হয়।

### LINKVIEWS

সংক্ষিপ্ত নাম: `SYNCVIEWS`; অথবা {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, অথবা ড্রয়িং ট্যাবের লিংক আইকন। `Link the panes' views [ON/OFF]` (Enter অন্য অবস্থায় নেয়): চালু থাকলে সক্রিয় প্যানে একটি প্যান বা জুম একই ধরনের স্থান দেখানো প্রতিটি প্যানকে সরায়। দেখুন [পর্দা ভাগ করুন](topic:split-screen)।

### OPENIN3D

কোনো সংক্ষিপ্ত নাম নেই; অথবা {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}}, যেখানে 3D মডেলিং অ্যাপ হস্তান্তরিত ড্রয়িং নেয়। সেখানে নতুন ট্যাবে একটি DWG হিসেবে খোলে (কিছুই আপলোড হয় না)। ব্রাউজার ট্যাব আটকালে তা জানায়।

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: একটি খালি জায়গায় চেপে টানলে কী আঁকা হবে। সেটিংস › CadCraft › Dragging to select-এর মতো। দেখুন [লাসো নির্বাচন](topic:lasso-selection)।

### FILLET

সংক্ষিপ্ত নাম: `F`। লাইন, আর্ক, বৃত্ত ও পলিলাইন। প্রথমে `Current settings: Mode = TRIM, Radius = 0` প্রিন্ট করে।

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` `Specify fillet radius <last>` জিজ্ঞাসা করে। `T` `Enter Trim mode option [Trim/No trim]` জিজ্ঞাসা করে: No trim হলে বস্তুগুলো যেমন আছে থাকে এবং শুধু আর্কটি যোগ হয়।
  - `M` Enter পর্যন্ত আরও কোণের জন্য কমান্ড চালিয়ে যায়; `U` কমান্ড না ছেড়ে শেষ কোণ ফিরিয়ে নেয়।
  - `P` `Select 2D polyline [Radius]` জিজ্ঞাসা করে এবং যেখানে দুটি সরল অংশ মেলে সেখানকার প্রতিটি কোণ গোল করে। যেসব ফিলেট আগে থেকে আছে নতুন ব্যাসার্ধ দিয়ে বদলায়; ব্যাসার্ধ 0 হলে সেগুলো সরে। যে কোণের বাহু ব্যাসার্ধের জন্য খুব ছোট, সেগুলো রেখে দেওয়া হয় এবং গণনা করা হয়।
- `Select second object or shift-select to apply corner [Radius]`। ব্যাসার্ধ যাই হোক, একটি ধারালো কোণের জন্য ক্লিক করার সময় {{key:Shift}} ধরে রাখুন।

যে অংশটি রাখতে চান সেখানে প্রতিটি বস্তুতে ক্লিক করুন। যে দুটি লাইন মেলে না তারা প্রসারিত হয়। দুটি সমান্তরাল লাইন ফাঁক জুড়ে একটি অর্ধবৃত্ত পায়, প্রথম লাইনের যে প্রান্ত আপনার ক্লিকের কাছে তাতে। একটি বৃত্ত কখনও কাটা হয় না। একটি পলিলাইনের পাশাপাশি দুটি অংশ পলিলাইনের ভেতরে আর্ক পায়; একটি পলিলাইন ও অন্য বস্তু কাজ করে যখন কাটাটি পলিলাইনের প্রথম বা শেষ অংশে পড়ে।

### CHAMFER

সংক্ষিপ্ত নাম: `CHA`। লাইন ও পলিলাইনের সরল অংশ। প্রথমে বর্তমান দূরত্ব (বা দৈর্ঘ্য ও কোণ) প্রিন্ট করে।

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` `Specify first chamfer distance <last>` ও `Specify second chamfer distance <the first>` জিজ্ঞাসা করে: প্রথমটি আপনার বাছা প্রথম লাইন থেকে কাটে, দ্বিতীয়টি অন্যটি থেকে।
  - `A` `Specify chamfer length on the first line` ও `Specify chamfer angle from the first line` জিজ্ঞাসা করে।
  - `E` (mEthod) বেছে নেয় পরের চেমফার দুটির কোনটি ব্যবহার করবে। `T`, `M`, `U` ও `P` {{cmd:FILLET}}-এর মতো কাজ করে।
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`। {{key:Shift}}+ক্লিক একটি ধারালো কোণ বানায়।

লাইনের চেয়ে বড় দূরত্ব প্রত্যাখ্যান করা হয় (`Distance is too large.`)।

### BREAK ও BREAKATPOINT

সংক্ষিপ্ত নাম: `BR`। `Select object` (যেখানে ক্লিক করেন সেটি প্রথম বিন্দু), `Specify second break point [First point]`; `F` `Specify first break point` ও `Specify second break point` জিজ্ঞাসা করে। মাঝের অংশটি যায়; একটি বৃত্তে, প্রথম বিন্দু থেকে ঘড়ির উল্টো দিকে। BREAKATPOINT `Specify break point` জিজ্ঞাসা করে এবং সেখানে বস্তুটিকে দুই ভাগে ভাগ করে (বৃত্তে নয়)।

### LENGTHEN

সংক্ষিপ্ত নাম: `LEN`। `Select an object to measure [DElta/Percent/Total/DYnamic]`: একটি বাছাই `Current length` (এবং আর্কের অন্তর্ভুক্ত কোণ) প্রিন্ট করে এবং আবার জিজ্ঞাসা করে। `DE` `Enter delta length (negative shortens) [Angle]` জিজ্ঞাসা করে, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` টানে। তারপর `Select an object to change [Undo]`, বারবার: ক্লিকের কাছের প্রান্তটি সরে। লাইন, আর্ক ও খোলা পলিলাইন।

### JOIN

সংক্ষিপ্ত নাম: `J`। `Select objects to join`। প্রান্ত থেকে প্রান্তে মেলা লাইন, আর্ক ও খোলা পলিলাইন পলিলাইন হয় (শৃঙ্খল বন্ধ হলে বন্ধ); একই রেখার লাইনগুলো একটি লাইন হয়; একই বৃত্তের আর্কগুলো একটি আর্ক বা বৃত্ত হয়। ইতিহাসে জানানো হয় কতগুলো বস্তু যুক্ত হয়েছে এবং কতগুলো হয়নি।

### MATCHPROP

সংক্ষিপ্ত নাম: `MA`, `PAINTER`। `Select source object`, তারপর `Select destination objects [Settings]` ও {{key:Enter}}। লেয়ার ও রং কপি করে, এবং একই ধরনের বস্তুর মধ্যে টেক্সটের উচ্চতা ও প্রস্থ, মাত্রার আকার, বা হ্যাচের প্যাটার্ন কপি করে। `S` `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` জিজ্ঞাসা করে, Enter পর্যন্ত বারবার; পছন্দটি সেশনের জন্য মনে রাখা হয়।

### EXPLODE

সংক্ষিপ্ত নাম: `X`। পলিলাইন লাইন ও আর্ক হয়, ব্লক রেফারেন্স তাদের বস্তু হয়, মাত্রা লাইন, তীরের মাথা ও টেক্সট হয়। সম্পাদনাযোগ্য থাকা অ্যারে ({{cmd:ARRAYEDIT}}) সাধারণ কপিতে পরিণত হয়।

- `Select objects`

### GROUP

সংক্ষিপ্ত নাম: `G`। {{cmd:GROUP}} নির্বাচিত বস্তুকে একটি যৌথ নাম দেয়। বস্তু নির্বাচন করুন, তারপর একটি নাম টাইপ করুন (স্পেস নেই; `?` গ্রুপ তালিকা দেখায়; Enter একটি নামহীন গ্রুপ বানায়), এবং নামযুক্ত গ্রুপের জন্য একটি ঐচ্ছিক বিবরণ। এরপর তাদের একটিতে ক্লিক করলে, বা যে উইন্ডো তাদের একটিকে ধরে, তারা সবাই নির্বাচিত হয়, তাই একসঙ্গে সরে, কপি হয় ও মোছে; প্রতিটি বস্তু তবু নিজের বস্তু থাকে। একটি বস্তু একাধিক গ্রুপে থাকতে পারে। পুরো গ্রুপের কপি একটি নতুন নামহীন গ্রুপ; একটি সদস্যের কপি তার নিজের ওপর গ্রুপে যোগ হয়। গ্রুপ যে স্থানে (মডেল বা শিট) তৈরি হয়েছিল সেখানে থাকে। DWG বা DXF হিসেবে সংরক্ষণ করলে এবং CadCraft-এ আবার খুললে তা টিকে থাকে; DXF 2000 ফাইল এগুলো অন্য প্রোগ্রামের জন্য গ্রুপ বস্তু হিসেবেও বহন করে, এবং অন্য প্রোগ্রামে তৈরি গ্রুপ একটি DXF বা DWG খোলার সময় পড়া হয়।

### UNGROUP

{{cmd:UNGROUP}} গ্রুপ ভাঙে: গ্রুপগুলোর বস্তু নির্বাচন করুন (যে প্রতিটি গ্রুপে তারা আছে তা ভাঙা হয়), অথবা `Name` টাইপ করে গ্রুপের নাম দিন। বস্তুগুলো ড্রয়িংয়ে থাকে। এক পূর্বাবস্থার ধাপে গ্রুপগুলো ফিরে আসে।

### GROUPEDIT

{{cmd:GROUPEDIT}} একটি গ্রুপ বদলায়। তার একটি বস্তু বেছে নিন, বা `Name` ও তার নাম দিন; যে গ্রুপটি আগে থেকে নির্বাচিত তা যেমন আছে তেমনই নেওয়া হয়। তারপর: `Add` বস্তু (একটি একটি করে বেছে, গ্রুপ ধরে নয়), `Remove` বস্তু, `REName` গ্রুপ, তার `Description` বদলান, বা `Selectable` ঠিক করুন (একটি বস্তুতে ক্লিক পুরো গ্রুপ নির্বাচন করবে কি না)। `eXit` বা Enter শেষ করে। কোনো বস্তু না থাকলে গ্রুপটি চলে যায়।

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1` (শুরুর সেটিং) হলে একটি গ্রুপ বস্তুতে ক্লিক বা উইন্ডো পুরো গ্রুপ নির্বাচন করে; `0` হলে একক বস্তু, যাতে একটি সদস্য সম্পাদনা করা যায়। এই সেশনের জন্য রাখা হয়।

## ক্লিপবোর্ড

CadCraft-এর নিজস্ব ক্লিপবোর্ড: এটি একটি ড্রয়িংয়ের ভেতরে, ড্রয়িংগুলোর মধ্যে, এবং এই ব্রাউজারে CadCraft ট্যাবগুলোর মধ্যে কাজ করে। দেখুন [কপি, পেস্ট ও ডুপ্লিকেট](topic:copy-paste)।

### COPYCLIP

{{key:Mod+C}}, অথবা {{ui:Edit}} গ্রুপে {{ui:Copy}}। বস্তু ক্লিপবোর্ডে কপি করে, যেসব ব্লক ও লেয়ার তারা ব্যবহার করে সেগুলোসহ। বস্তু নির্বাচিত থাকে।

- `Select objects to copy` (বস্তু আগে থেকে নির্বাচিত থাকলে বাদ যায়)

### CUTCLIP

{{key:Mod+X}}, অথবা {{ui:More}} মেনুতে {{ui:Cut}}। বস্তু ক্লিপবোর্ডে কপি করে, তারপর মুছে দেয় (এক পূর্বাবস্থার ধাপ)।

- `Select objects to cut` (বস্তু আগে থেকে নির্বাচিত থাকলে বাদ যায়)

### COPYBASE

আপনার বাছাই করা একটি বেস বিন্দু সহ বস্তু ক্লিপবোর্ডে কপি করে; পেস্ট করলে সেই বিন্দু বসে।

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, অথবা {{ui:Edit}} গ্রুপে {{ui:Paste}}। কপিটি কার্সর অনুসরণ করে, তার বিস্তারের নিচের-বাঁ কোণ থেকে ঝোলে (বা তার কেন্দ্র থেকে, বা `COPYBASE` বিন্দু থেকে; দেখুন [CadCraft সেটিংস](topic:settings))।

- `Specify insertion point`

পেস্ট করা বস্তুগুলো নির্বাচিত থাকে। ড্রয়িংয়ে একই নামের একটি ব্লক আগে থেকে থাকলে, এই ড্রয়িংয়ের সংজ্ঞাটিই রাখা হয়।

MarkupCraft-এ কপি করা একটি এলাকা CadCraft-এর কপির চেয়ে নতুন হলে (এবং 6 ঘণ্টার কম পুরোনো হলে), {{key:Mod+V}} ও `PASTECLIP` বরং সেই এলাকাটি পেস্ট করে: দেখুন `PASTEAREA`।

### PASTEAREA

সংক্ষিপ্ত নাম: `PAREA`। {{ui:Paste a copied area}}, {{ui:More}} মেনুতে। MarkupCraft-এ {{ui:Copy area}} দিয়ে কপি করা একটি এলাকা তার প্রকৃত আকারে একটি ছবি হিসেবে পেস্ট করে। দেখুন [একটি ড্রয়িংয়ে ছবি](topic:pictures)।

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (শুধু যখন শিটে কোনো ড্রয়িং স্কেল ছিল না): একটি সংখ্যা, কাগজের আকারের জন্য {{key:Enter}}, অথবা `P`, তারপর `First point on the pasted area`, `Second point on the pasted area` ও তাদের প্রকৃত দূরত্ব।

### PASTEORIG

{{key:Mod+Shift+V}}, অথবা {{ui:More}} মেনুতে {{ui:Paste in place}}। যে স্থানাঙ্ক থেকে বস্তুগুলো কপি হয়েছিল সেখানে পেস্ট করে। কিছু জিজ্ঞাসা করে না।

### DUPLICATE

সংক্ষিপ্ত নাম: `DUP`। {{key:Mod+D}}, অথবা {{ui:More}} মেনুতে {{ui:Duplicate and move}}। বস্তুর একটি কপি যেখানে আছে সেখান থেকে পয়েন্টারের সঙ্গে সরে; {{key:Esc}} কিছুই রাখে না। ক্লিপবোর্ড ব্যবহার করে না।

- `Select objects to duplicate` (বস্তু আগে থেকে নির্বাচিত থাকলে বাদ যায়)
- `Specify where the copy goes (Esc leaves nothing)`: ক্লিক করুন, একটি বিন্দু টাইপ করুন, `@dx,dy` (পয়েন্টার যেখানে ছিল সেখান থেকে), বা কার্সরের দিকে একটি দূরত্ব।

### SELECT

প্রশ্ন করে `Select objects` (নিচের প্রতিটি বিকল্পসহ) এবং আপনার বেছে নেওয়া জিনিস নির্বাচিত রাখে, পরের কমান্ডের জন্য বা পরে `P`-এর জন্য।

### QSELECT

সংক্ষিপ্ত নাম: `QS`। ব্রাউজারে, {{ui:Quick select}} ডায়ালগ (দেখুন [বস্তু নির্বাচন](topic:select-objects#select-by-a-rule-quick-select))। এটি ছাড়া কমান্ড লাইন জিজ্ঞাসা করে `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` ও `Enter value`। মিলে যাওয়াগুলো নির্বাচন হয়।

### SELECTSIMILAR

সংক্ষিপ্ত নাম: `SIM`। `Select objects [SEttings]` (বা বর্তমান নির্বাচন): একই ধরনের, একই লেয়ার ও রংয়ের প্রতিটি বস্তু নির্বাচন করে (এবং ব্লকের নাম, হ্যাচের প্যাটার্ন)। `SE` `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` জিজ্ঞাসা করে, Enter পর্যন্ত বারবার।

### FIND

কোনো সংক্ষিপ্ত নাম নেই; অথবা {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}। ব্রাউজারে, {{ui:Find and replace}} ডায়ালগ (দেখুন [টেক্সট ও লেবেল যোগ করুন](topic:text#find-and-replace-words))। এটি ছাড়া: `Enter text to find`, তারপর `Enter replacement text (Enter: select what is found)`। টেক্সট, অ্যাট্রিবিউট মান ও মাত্রার টেক্সটে খোঁজে, খোলা ট্যাবে বা নির্বাচনে।

### SELECTALL ও DESELECT

`SELECTALL` (সংক্ষিপ্ত নাম `AI_SELALL`, {{key:Mod+A}}) খোলা ট্যাবে সম্পাদনা করতে পারেন এমন প্রতিটি বস্তু নির্বাচন করে। `DESELECT` (সংক্ষিপ্ত নাম `AI_DESELECT`, `SELECTNONE`; অথবা {{key:Esc}}) নির্বাচন মুছে দেয়।

## মাত্রা

### DIMLINEAR

সংক্ষিপ্ত নাম: `DLI`, `DIMLIN`। অনুভূমিক বা উল্লম্ব দূরত্ব।

- `Specify first extension line origin [Select object]` (Enter বা `S`: `Select object to dimension`, তারপর একটি লাইন, আর্ক, বৃত্ত বা পলিলাইনের অংশে ক্লিক করুন)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`। `T` টেক্সট চায় (`<>` মানে মাপা মান), `H` ও `V` দিক ঠিক করে, `R` `Specify angle of dimension line <0>` জিজ্ঞাসা করে।

### DIMALIGNED

সংক্ষিপ্ত নাম: `DAL`, `DIMALI`। দুই বিন্দুর মধ্যে প্রকৃত দূরত্ব।

- উৎসগুলো {{cmd:DIMLINEAR}}-এর মতো, তারপর `Specify dimension line location [Text]`।

### DIMANGULAR

সংক্ষিপ্ত নাম: `DAN`, `DIMANG`।

- `Select arc, circle or line, or Enter for a vertex`
- আর্ক: এর কোণ। বৃত্ত: `Specify second angle endpoint`। লাইন: `Select second line`। Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`।
- `Specify dimension line location [Text]`: যে কোণ মাপতে চান তার ভেতরে ক্লিক করুন।

### DIMRADIUS ও DIMDIAMETER

সংক্ষিপ্ত নাম: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`।

- `Select arc or circle`, তারপর `Specify dimension line location [Text]`।

### DIMCONTINUE

সংক্ষিপ্ত নাম: `DCO`, `DIMCONT`। শেষ রৈখিক বা সমান্তরাল মাত্রা থেকে চলতে থাকে (বা `Select linear or aligned dimension` জিজ্ঞাসা করে)।

- `Specify second extension line origin [Undo]`, Enter পর্যন্ত বারবার।

### DIMBASELINE

সংক্ষিপ্ত নাম: `DBA`, `DIMBASE`। {{cmd:DIMCONTINUE}}-এর মতো, তবে প্রতিটি মাত্রা প্রথম উৎস থেকে শুরু হয় এবং আরও বাইরে স্তূপ হয়।

### DIMORDINATE

সংক্ষিপ্ত নাম: `DOR`, `DIMORD`। `Specify feature location`, তারপর `Specify leader endpoint [Xdatum/Ydatum/Text]`। একটি লিডারে লেখে বৈশিষ্ট্যটি UCS উৎস থেকে X বা Y বরাবর কতদূরে: যে লিডার বেশিরভাগ উপরে বা নিচে যায় তা X পড়ে, যেটি পাশে যায় তা Y পড়ে; `Xdatum` ও `Ydatum` কোনটি তা ঠিক করে। আগে {{cmd:UCS}} দিয়ে উৎস ঠিক করুন (না থাকলে ড্রয়িংয়ের 0,0)। গ্রিপ বৈশিষ্ট্য, উৎস ও লিডারের শেষ সরায়, এবং মান অনুসরণ করে। DWG ও DXF-এ একটি আসল অর্ডিনেট মাত্রা হিসেবে সংরক্ষিত হয়। বৈশিষ্ট্যের উপরেই লিডারের শেষ প্রত্যাখ্যান করে।

### DIMARC

সংক্ষিপ্ত নাম: `DAR`। `Select arc or polyline arc segment`, তারপর `Specify arc length dimension location [Text]`। আর্ক বরাবর মাপে (জ্যা নয়) এবং মানের আগে আর্ক চিহ্ন লেখে। একটি পূর্ণ বৃত্ত, একটি লাইন বা একটি সরল পলিলাইন অংশ প্রত্যাখ্যান করে। DWG এটিকে আর্ক-দৈর্ঘ্যের মাত্রা হিসেবে রাখে; DXF এটিকে কৌণিক মাত্রা হিসেবে রাখে যার টেক্সট হলো দৈর্ঘ্য, এবং CadCraft এটি আবার আর্ক-দৈর্ঘ্যের মাত্রা হিসেবে খোলে।

### DIMJOGGED

সংক্ষিপ্ত নাম: `DJO`, `JOG`। `Select arc or circle`, `Specify center location override`, `Specify jog location`। যে বক্ররেখার কেন্দ্র দূরে বা শিটের বাইরে তার জন্য একটি ব্যাসার্ধ মাত্রা: মাত্রা লাইন কেন্দ্রের বদলে আপনার দেওয়া বিন্দু থেকে শুরু হয়, তার মধ্যে একটি জগ থাকে, এবং তবু প্রকৃত ব্যাসার্ধ লেখে। DWG এটিকে জগড ব্যাসার্ধ মাত্রা হিসেবে রাখে; DXF এটিকে ব্যাসার্ধ মাত্রা হিসেবে রাখে, এবং CadCraft আবার জগড করে খোলে।

### DIMJOGLINE

সংক্ষিপ্ত নাম: `DJL`। `Select dimension to add jog [Remove]`, তারপর `Specify jog location (or press Enter)`। একটি রৈখিক বা সমান্তরাল মাত্রার লাইনে একটি জগ চিহ্ন বসায়, দেখাতে যে দূরত্বটি স্কেল অনুযায়ী আঁকা নয়; মান বদলায় না। `Remove` এটি সরায়। অন্য ধরনের মাত্রা প্রত্যাখ্যান করে।

### QDIM

কোনো সংক্ষিপ্ত নাম নেই। `Select geometry to dimension`, তারপর `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`। একবারে কয়েকটি বস্তুর মাত্রা দেয়: লাইন ও পলিলাইন অংশের প্রান্ত, বৃত্ত ও আর্কের কেন্দ্র, বিন্দু ও ব্লক রেফারেন্স থেকে। বস্তুগুলোর উপরে বা নিচে একটি অবস্থান মাপে ওপার জুড়ে, আর পাশে একটি অবস্থান উপরের দিকে মাপে। `Continuous` বিন্দুগুলো শৃঙ্খলে জোড়া দেয়, `Baseline` সবকিছু প্রথম থেকে মাপে, `Staggered` মাঝখান থেকে বাইরের দিকে জোড়া জোড়া বসায়, `Ordinate` প্রতিটি বিন্দুকে তার datum থেকে দূরত্ব দেয় (`datumPoint` নতুন একটি বাছে), `Radius` ও `Diameter` বাছা প্রতিটি বৃত্ত ও আর্কের মাত্রা দেয়। মোড মনে রাখা হয়। যা তৈরি হয় সব এক পূর্বাবস্থার ধাপ। দুটির কম বিন্দু থাকলে, বা Radius ও Diameter-এর জন্য কোনো আর্ক বা বৃত্ত না থাকলে তা জানায়।

### DIMBREAK

সংক্ষিপ্ত নাম: `DBREAK`। `Select dimensions to add or remove breaks`, তারপর `Break where other objects cross [Auto/Manual/Remove] <Auto>`। `Auto` মাত্রা ও এক্সটেনশন লাইনে যেখানে অন্য বস্তু ছেদ করে সেখানে একটি ফাঁক রাখে, এবং সেই বস্তুগুলো বা মাত্রা সরলে ফাঁকগুলো আবার হিসাব করে। `Manual` (একটি মাত্রা) দুই বিন্দু চায় এবং তাদের মাঝে একটি ফাঁক রাখে। `Remove` সব ফাঁক সরায়। ফাঁক মাত্রার টেক্সট উচ্চতার 1.5 গুণ।

### DIMSPACE

কোনো সংক্ষিপ্ত নাম নেই। `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`। সমান্তরাল রৈখিক ও সমান্তরাল মাত্রার (বা একই শীর্ষবিন্দু থেকে কৌণিক মাত্রার) মাত্রা লাইন সরায়, যাতে তারা একই দূরত্বে থাকে, বেস মাত্রা থেকে গণনা করে, প্রতিটি তার নিজের পাশে। `0` তাদের বেসের সঙ্গে সারিবদ্ধ করে; `Auto` বেস মাত্রার টেক্সট উচ্চতার দ্বিগুণ। বেসের সমান্তরাল নয় এমন মাত্রা অপরিবর্তিত থাকে।

### DIMINSPECT

কোনো সংক্ষিপ্ত নাম নেই। `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`। মানের চারপাশে একটি ফ্রেম আঁকে, এর আগে একটি লেবেল ও পরে পরিদর্শনের হার। `remove` ফ্রেম সরায়। টলারেন্সের টেক্সট মানের সঙ্গে থাকে।

### DIMOVERRIDE

সংক্ষিপ্ত নাম: `DOV`, `DIMOVER`। `Enter dimension variable name to override or Clear`, `Enter new value for …`, Enter পর্যন্ত আবার, তারপর `Select dimensions`। শুধু নির্বাচিত মাত্রার সেটিংস বদলায়; মাত্রা শৈলী বদলায় না। যে ভেরিয়েবলগুলো একটি সংখ্যা বা সুইচ (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …) তাদের নেয়। `Clear` নির্বাচিত মাত্রাকে তার শৈলীতে ফিরিয়ে দেয়। যে নাম এমন ভেরিয়েবল নয়, এবং যে মান এটি নিতে পারে না, তা প্রত্যাখ্যান করে।

### DIMREASSOCIATE

সংক্ষিপ্ত নাম: `DRE`, `DIMREASSOC`। `Select dimensions`, তারপর প্রতিটির জন্য তার এক্সটেনশন লাইনের উৎস (`Specify first extension line origin on an object`: একটি প্রান্ত বা লাইনের মাঝে, একটি পলিলাইন কোণে, একটি কেন্দ্রে স্ন্যাপ; Enter বিন্দুটি মুক্ত রাখে), অথবা একটি ব্যাসার্ধ, ব্যাস, জগড ব্যাসার্ধ বা আর্ক-দৈর্ঘ্যের মাত্রার জন্য `Select arc or circle`। মাত্রাটি তখন সেই বস্তুগুলোর সঙ্গে বাঁধা হয়: যখন সেগুলো সরে বা আকার বদলায়, তখন একই পূর্বাবস্থার ধাপে এটি অনুসরণ করে ও আবার মাপে। একটি বাঁধা বিন্দু হাতে সরালে, বা বস্তুটি মুছলে, সেই বাঁধন শেষ হয়। বাঁধনটি DWG ও DXF 2000-এ CadCraft-এর নিজস্ব ডেটা হিসেবে সংরক্ষিত হয়; অন্য প্রোগ্রাম একটি সাধারণ মাত্রা দেখে।

### DIMDISASSOCIATE

সংক্ষিপ্ত নাম: `DDA`, `DIMDISASSOC`। `Select dimensions`। যেসব বস্তুর সঙ্গে সেগুলো বাঁধা, তা থেকে মুক্ত করে; কিছু সরে না।

### CENTERMARK

সংক্ষিপ্ত নাম: `CM`, `DIMCENTER`, `DCE`। `Select circle or arc to add center mark`, Enter পর্যন্ত আবার। কেন্দ্রে একটি ক্রস এবং বক্ররেখার একটু বাইরে পর্যন্ত চারটি কেন্দ্ররেখা আঁকে (লাইনটাইপ CENTER), বর্তমান লেয়ারে সাধারণ লাইন হিসেবে; বর্তমান মাত্রা সেটিংসের তীরের আকার ও সামগ্রিক স্কেল থেকে মাপ নেয়, UCS অনুসারে ঘোরে। বৃত্ত সরলে এগুলো অনুসরণ করে না।

### CENTERLINE

সংক্ষিপ্ত নাম: `CL`। `Select first line`, `Select second line`। দুটি লাইনের মাঝখানে একটি লাইন আঁকে (তারা মিললে দ্বিখণ্ডকের বরাবর), তারা যতটুকু তার চেয়ে একটু লম্বা, লাইনটাইপ CENTER-এ। একটি সাধারণ লাইন: দুই লাইনের সঙ্গে অনুসরণ করে না।

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

কোনো সংক্ষিপ্ত নাম নেই। প্রতিটি `Enter new value for … <current>` জিজ্ঞাসা করে এবং **নতুন** মাত্রার জন্য সেই আকার ঠিক করে: সামগ্রিক স্কেল, টেক্সটের উচ্চতা, তীরের আকার, দশমিক স্থান (8 পর্যন্ত), টেক্সটের চারপাশের ফাঁক, মাত্রা লাইনের বাইরের বিস্তার, উৎস থেকে অফসেট। দেখুন [মাত্রার আকার ঠিক করুন](topic:dimension-settings)।

### DIMLUNIT

মাত্রা সেটিং: শুধু নতুন মাত্রার দৈর্ঘ্যের বিন্যাস (1 বৈজ্ঞানিক, 2 দশমিক, 3 ইঞ্জিনিয়ারিং, 4 স্থাপত্য, 5 ভগ্নাংশ)।

### DIMSTYLE ও -DIMSTYLE

সংক্ষিপ্ত নাম: `DST`, `DDIM`, `D`। মাত্রা শৈলী ম্যানেজার: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}। কমান্ড লাইনে `-DIMSTYLE`: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`। দেখুন [মাত্রার আকার ঠিক করুন](topic:dimension-settings#named-dimension-styles)।

### DIMEDIT ও DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, তারপর মাত্রাগুলো (বা আগে নির্বাচিতগুলো)। New টেক্সট চায় (`<>` = পরিমাপ); Rotate একটি কোণ চায় (0 টেক্সট ফিরিয়ে দেয়); Oblique X অক্ষ থেকে এক্সটেনশন লাইনের কোণ চায় (Enter = কিছু না; শুধু রৈখিক ও সমান্তরাল মাত্রায়)। `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`। দেখুন [মাত্রার আকার ঠিক করুন](topic:dimension-settings#change-dimension-text-and-extension-lines)।

### DIMTEXTUNIT

সংক্ষিপ্ত নাম: `DTU`। `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, অথবা মাত্রা নির্বাচিত থাকলে `Units in the text of the selected dimensions`। সেই এককে মাপা দৈর্ঘ্য লেখে, তার পরে এককটি (DIMLFAC ও একটি DIMPOST প্রত্যয়)। `D` ড্রয়িংয়ের এককে ফিরে যায়। দেখুন [মাত্রা mm, cm, m বা km-এ](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)।

### REVCLOUD

সংক্ষিপ্ত নাম: `RC`। `Arc length: … Type: …` প্রিন্ট করে, তারপর `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`। Rectangular `Specify opposite corner` জিজ্ঞাসা করে; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand একটি ক্লিক বা {{key:Enter}} পর্যন্ত পয়েন্টার অনুসরণ করে; `O` `Select object` ও `Reverse direction? [Yes/No] <N>` জিজ্ঞাসা করে এবং বস্তুটিকে মেঘে বদলায়। `A` `Specify the length of each arc` জিজ্ঞাসা করে। `R`, `P` ও `F` পরের মেঘের ধরন বেছে নেয়। ফল হলো আর্কের একটি বন্ধ পলিলাইন।

### MLEADER

সংক্ষিপ্ত নাম: `MLD`; অথবা {{ui:Leader}}। `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, তারপর জায়গাতেই বাক্সে টেক্সট (বা বাক্স ছাড়া `Enter text (an empty line ends)`)। `Block` প্রথমে একটি ব্লকের নাম চায় এবং মাল্টিলিডার টেক্সটের বদলে সেই ব্লক দেখায়। আরও লিডার লাইন: {{cmd:MLEADEREDIT}}। DWG-তে একটি আসল মাল্টিলিডার হিসেবে সংরক্ষিত হয়; DXF তার আঁকা লাইন, তীরের মাথা ও টেক্সট রাখে।

### MLEADEREDIT

সংক্ষিপ্ত নাম: `MLE`। `Select a multileader`, তারপর `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: প্রতিটি বিন্দু একই ল্যান্ডিংয়ের সঙ্গে একটি নতুন তীরের মাথা থেকে একটি লিডার লাইন যোগ করে, Enter পর্যন্ত। `Remove leaders` তখন আপনার ক্লিক করা লিডার লাইনটি সরায় (একটি মাল্টিলিডার কমপক্ষে একটি রাখে)। `Block content` একটি ব্লকের নাম চায় এবং টেক্সটের বদলে সেই ব্লক দেখায় (তার অ্যাট্রিবিউট চাওয়া হয়); `Text content` টেক্সট ফিরিয়ে আনে। প্রতিটি লিডার লাইনের নিজের গ্রিপ আছে। একটি DWG প্রতিটি লিডার লাইন ও ব্লক একটি মাল্টিলিডারে রাখে।

### MLEADERALIGN

সংক্ষিপ্ত নাম: `MLA`। `Select multileaders`, তারপর `Select multileader to align to [Distribute/Spacing/Use current spacing]` ও `Specify direction`। অন্য মাল্টিলিডারের ল্যান্ডিংগুলো (এবং তাদের টেক্সট বা ব্লক) সরায় বাছাই করা একটির ল্যান্ডিং দিয়ে গেছে এমন লাইনে, সেই দিকে; তীরের মাথাগুলো যেদিকে নির্দেশ করে সেখানেই থাকে। `Spacing` তাদের সমান দূরত্বেও রাখে; `Distribute` দুটি বিন্দু চায় এবং তাদের মাঝে সমানভাবে ছড়ায়। কমপক্ষে দুটি মাল্টিলিডার লাগে।

### MLEADERCOLLECT

সংক্ষিপ্ত নাম: `MLC`। `Select multileaders`, তারপর `Specify collected multileader location [Vertical/Horizontal]` (Enter প্রথমটির জায়গা রাখে)। কয়েকটি থেকে একটি মাল্টিলিডার বানায়: ব্লক কনটেন্ট একটি নতুন ব্লকে যায় যা প্রতিটি ব্লককে পাশাপাশি বা একটির নিচে আরেকটি রাখে; টেক্সট কনটেন্ট প্রতিটির জন্য একটি লাইনসহ একটি নোট হয়। প্রথম মাল্টিলিডার তার লিডার লাইন রাখে; বাকিগুলো সরানো হয়। টেক্সট ও ব্লক কনটেন্টের মিশ্রণ প্রত্যাখ্যান করে।

### TABLE

সংক্ষিপ্ত নাম: `TB`; অথবা {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}। একটি টেবিল তৈরি করে: একটি বস্তু যা আপনি অন্য যেকোনো বস্তুর মতো সরান, কপি, ঘোরান, স্কেল ও প্লট করেন, তার ঘরগুলো ডেটা হিসেবে রাখা থাকে।

- `Number of data rows or [Paste/File/Style] <3>`, তারপর `Number of columns <3>`, `Text height` ও `Top left corner of the table`। টেবিলে একটি শিরোনাম সারি (একটি একীভূত ঘর) এবং ডেটা সারির উপরে একটি হেডার সারি থাকে।
- `P`: ক্লিপবোর্ডের স্প্রেডশিটের ঘর থেকে একটি টেবিল (ঘরের মধ্যে ট্যাবসহ টেক্সট)। ক্লিপবোর্ডে এমন ঘর থাকলে {{key:Ctrl+V}} একই কাজ করে, যদি না CadCraft-এর নিজের কপিটি নতুন হয় (বা CadCraft বলতে না পারে: তখন নিজের কপিই পেস্ট করে এবং তা জানায়)। `F`: একটি `.csv` বা ট্যাব-বিভাজিত ফাইল থেকে একটি টেবিল। প্রথম সারি হেডার সারি হয়; কলামের প্রস্থ টেক্সটের সঙ্গে মানায়।
- `S`: এই টেবিলের জন্য টেবিল শৈলী বেছে নিন (দেখুন {{cmd:TABLESTYLE}})।
- সারি বা কলামের সংখ্যা পূর্ণ সংখ্যা না হলে, বা একটি টেবিল ধারণ করতে পারে তার চেয়ে বেশি ঘর হলে (2,000 সারি, 200 কলাম, 40,000 ঘর) তা প্রত্যাখ্যান করে।
- {{cmd:EXPLODE}} একটি টেবিলকে লাইন ও টেক্সটে ভাঙে। DWG হিসেবে সংরক্ষিত টেবিল একটি আসল টেবিল বস্তু, যা অন্য প্রোগ্রাম সম্পাদনা করতে পারে; DXF হিসেবে সংরক্ষিত হলে এটি একটি ব্লক যা একে আঁকে, এবং CadCraft আবার একটি টেবিল হিসেবে খোলে।

### TABLEDIT

সংক্ষিপ্ত নাম: `TABLEEDIT`, `TABEDIT`; অথবা একটি ঘরে ডাবল-ক্লিক। একটি টেবিল সম্পাদনা করে।

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`। একটি ঘরে ক্লিক করুন, বা একটি টেবিল নির্বাচিত থাকলে তার নাম টাইপ করুন (`B3`: কলাম B, সারি 3; শিরোনাম সারি হলো সারি 1)। ব্রাউজারে ঘরের উপরে একটি বাক্স খোলে: {{key:Enter}} টেক্সট রাখে, {{key:Tab}} পরের ঘরে যায়, {{key:Alt+Enter}} নতুন লাইন শুরু করে, {{key:Esc}} ঘরটিকে আগের মতো রাখে।
- যে টেক্সট `=` দিয়ে শুরু হয় তা একটি সূত্র: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^`, বন্ধনী এবং `sqrt` ও `round`-এর মতো ফাংশনসহ। ঘর মান দেখায়; যে সূত্র নিজের ঘরের নাম দেয়, টেবিলের বাইরের ঘর দেয়, বা সংখ্যাবিহীন ঘর দেয়, তা `####` দেখায় এবং কমান্ড লাইন কারণ জানায়।
- `R` / `C`: একটি বেছে নেওয়া ঘরে সারি বা কলাম `Insert` বা `Delete` করে (কয়টি, এবং উপরে/নিচে বা বাঁয়ে/ডানে)। সূত্রগুলো যে ঘরের নাম দেয় তা অনুসরণ করে।
- `S`: কলামের প্রস্থ ও সারির উচ্চতা। একটি সারি কখনও তার টেক্সটের চেয়ে ছোট হয় না। একটি নির্বাচিত টেবিলে প্রতিটি কলাম ও সারির প্রান্তে একটি গ্রিপও থাকে।
- `M`: একটি বেছে নেওয়া ঘর থেকে আরেকটিতে একীভূত করুন; `U`: একীভূতকরণ খুলুন। `A`: সারিবদ্ধকরণ (`TL` উপরে বাঁ … `MC` মাঝখানে মাঝ … `BR` নিচে ডান)। `H`: এই ঘরের নিজের টেক্সট উচ্চতা (0 = শৈলীর)। `K`: সারিটিকে শিরোনাম, হেডার বা ডেটা সারি করে। `CL`: ঘর খালি করে।
- একটি লক করা লেয়ারের টেবিল, সব সারি বা কলাম মুছে ফেলা, এবং অন্য একটি একীভূত ঘরকে দুই ভাগ করে এমন একীভূতকরণ প্রত্যাখ্যান করে।

### TABLESTYLE

সংক্ষিপ্ত নাম: `TS`। টেবিল শৈলীর তালিকা দেখায়, প্রতিটি কতটি টেবিল ব্যবহার করে তাসহ, তারপর `Table style: [New/Set/Edit/Delete/Apply]`।

- একটি শৈলী শিরোনাম, হেডার ও ডেটা সারির টেক্সট উচ্চতা ও সারিবদ্ধকরণ, ঘরের মার্জিন, এবং কোন বর্ডার আঁকা হবে (বাইরের, সারির মাঝে, কলামের মাঝে) ধরে।
- `N` বর্তমানটি থেকে একটি শৈলী বানায় এবং সেটিকে বর্তমান করে; `S` বর্তমান শৈলী ঠিক করে (নতুন টেবিল এটি নেয়); `E` একটি সম্পাদনা করে: তা ব্যবহারকারী টেবিলগুলো আবার আঁকা হয়; `A` নির্বাচিত টেবিলে বর্তমান শৈলী দেয়; `D` একটি মোছে (Standard বা বর্তমানটি নয়; যেসব টেবিল তা ব্যবহার করত তারা তাদের রূপ রাখে)।
- শৈলী ড্রয়িংয়ের সঙ্গে সংরক্ষিত হয় (DWG ও DXF)।

### TABLEEXPORT

একটি টেবিল যা দেখায় তা একটি CSV ফাইল হিসেবে সংরক্ষণ করে (একটি সূত্র তার মান হিসেবে)। `Select a table`, বা আগে একটি নির্বাচন করুন। `=`, `+`, `-` বা `@` দিয়ে শুরু হওয়া টেক্সট ঘরের আগে একটি `'` যোগ হয়, যাতে স্প্রেডশিট তাদের না চালায়।

### TABLEPASTE

সংক্ষিপ্ত নাম: `PASTETABLE`। ক্লিপবোর্ডের স্প্রেডশিট ঘর থেকে একটি টেবিল বানায়, তারপর তার উপরের-বাঁ কোণ জিজ্ঞাসা করে। {{cmd:TABLE}} › `Paste`-এর মতোই।

### DATALINK

সংক্ষিপ্ত নাম: `DL`। `Data link: [New/List/Remove] <New>`। `N` একটি CSV ফাইল চায়, তার একটি টেবিল বসায় এবং ফাইলের নাম মনে রাখে; `L` লিংকগুলো তালিকা করে তাদের ফাইল, আকার, কখন পড়া হয়েছিল ও কতগুলো টেবিল ব্যবহার করে তা দেখায়; `R` একটি লিংক সরায় (তার টেবিলগুলো সাধারণ টেবিল হিসেবে থাকে)।

### DATALINKUPDATE

সংক্ষিপ্ত নাম: `DLU`। একটি ডেটা লিংকের ফাইল আবার পড়ে এবং তার সঙ্গে যুক্ত টেবিলগুলো আবার ভরে (সারি ও কলাম যোগ বা সরানো হয় মিলাতে)। ব্রাউজার নিজে থেকে একটি ফাইল খুলতে পারে না, তাই এটি আপনাকে ফাইলটি আবার বেছে নিতে বলে। একাধিক লিংক থাকলে কোনটি তা জিজ্ঞাসা করে।

### FIELD

ড্রয়িংয়ে একটি ফিল্ড বসায়: নিজে থেকে গণনা হওয়া টেক্সট। `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: এখন, বা সংরক্ষিত, তৈরি বা প্লট করা তারিখ, এবং একটি বিন্যাস (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`)। `F`: ফাইলের নাম, তার এক্সটেনশনসহ বা ছাড়া। `S`: শিটের নম্বর, তার শিরোনাম, বা কয়টি শিট আছে। `P`: নাম দিয়ে একটি ড্রয়িং বৈশিষ্ট্য (দেখুন {{cmd:DWGPROPS}})। `O`: একটি বস্তু বাছুন, তারপর কী পড়বেন (ক্ষেত্রফল, দৈর্ঘ্য, পরিধি, ব্যাসার্ধ, ব্যাস, লেয়ার, নাম, x, y, টেক্সট, ঘূর্ণন, রং) এবং দশমিক স্থান। `E`: একটি সূত্র। `C`: একটি টেক্সট যার কোডগুলো যেমন লেখা হয় তেমন টাইপ করা, যেমন `Sheet %<sheetnumber>% of %<sheetcount>%`।
- তারপর যে টেক্সট, টেবিলের ঘর বা অ্যাট্রিবিউটসহ ব্লক তাতে এটি রাখতে `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: বাছাই করা টেক্সটে ফিল্ডটি তার ধারণ করা কিছুর পরে যোগ হয়; একটি টেবিলের ঘরও একইভাবে; একটি ব্লক রেফারেন্স কোন অ্যাট্রিবিউট চায় তা জিজ্ঞাসা করে; {{key:Enter}} একটি নতুন টেক্সটের জন্য উচ্চতা ও একটি বিন্দু চায়।
- পর্দায় একটি ফিল্ডের হালকা ধূসর পটভূমি থাকে; প্লট ও PDF-এ কখনও থাকে না। ফিল্ডের টেক্সটের উপর হাতে টাইপ করলে ফিল্ড শেষ হয়। যে ফিল্ড গণনা করা যায় না তা `####` দেখায়।
- একটি বস্তুর ফিল্ড তার বস্তুটি খুঁজে পায় CadCraft বস্তুতে রাখা কী দিয়ে (সেটিংস › CadCraft › মার্জ-বান্ধব ফাইল); কী বন্ধ থাকলে প্রত্যাখ্যান করে।

### UPDATEFIELD

সংক্ষিপ্ত নাম: `UPDATEFIELDS`। `Select the objects whose fields to update (Enter: every field) or [Settings]`। `S` ঠিক করে ফিল্ড কখন নিজে থেকে হালনাগাদ হবে: `O` খোলা, `S` সংরক্ষণ, `P` প্লট, `R` regen-এর অক্ষরগুলো টাইপ করুন (শুরুতে চারটিই), বা `NONE`।

### DWGPROPS

সংক্ষিপ্ত নাম: `DRAWINGPROPS`। ড্রয়িংয়ের বৈশিষ্ট্য তালিকা করে, তারপর `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`। প্রথম ছয়টি সেগুলো যা {{ui:Drawing details}} প্যানেল দেখায়; `U` আপনার নিজের নাম ও মান যোগ করে, `R` একটি সরায়। ফিল্ড সেগুলো পড়ে (`%<prop:title>%`, `%<prop:Client>%`) এবং সঙ্গে সঙ্গে অনুসরণ করে। যে কাস্টম নাম অন্তর্নির্মিত একটি, বা `%`, `<`, `>`, উদ্ধৃতি বা ব্যাকস্ল্যাশ ধরে, তা প্রত্যাখ্যান করে।

## প্যারামেট্রিক

দেখুন [একটি ড্রয়িং সীমাবদ্ধ করুন](topic:constraints) ও [প্যারামিটার ও সমীকরণ ব্যবহার করুন](topic:parameters)। সীমাবদ্ধতা {{ui:Model}} ট্যাবে কাজ করে।

### GEOMCONSTRAINT ও GC কমান্ডগুলো

সংক্ষিপ্ত নাম `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, তারপর সেই কমান্ডের প্রম্পটগুলো।

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`।
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (দ্বিতীয়টি সরে)।
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`।
- {{cmd:GCFIX}}: `Select point [Object] <Object>`।
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`।

### DIMCONSTRAINT ও DC কমান্ডগুলো

সংক্ষিপ্ত নাম `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`।

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (একটি সংখ্যা, একটি রাশি, বা `name=expression`)।
- {{cmd:DCALIGNED}}: উপরের মতো, `[Object/Point & line/2Lines]` সহ।
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`। {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`।
- {{cmd:DCCONVERT}}: `Select dimensions to convert`।

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`। `S` দূরত্ব ও কোণের সহনশীলতা জিজ্ঞাসা করে।
- {{cmd:DELCONSTRAINT}} (সংক্ষিপ্ত নাম `DELCON`): `Select objects`; তাদের সীমাবদ্ধতা চলে যায়।
- {{cmd:CONSTRAINTBAR}} (সংক্ষিপ্ত নাম `CBAR`): `Select objects [Showall/Hideall]`, তারপর `[Show/Hide]`।
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`।

### PARAMETERS ও -PARAMETERS

{{cmd:PARAMETERS}} (সংক্ষিপ্ত নাম `PAR`, `PARAM`) {{ui:Parameters}} প্যানেল খোলে। `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`।

### SWBOUT

সংক্ষিপ্ত নাম `SWMACRO`। একটি ম্যাক্রো (.swb) ডাউনলোড করে, যা SolidWorks-এ মডেলটিকে একটি সীমাবদ্ধ স্কেচ হিসেবে আবার তৈরি করে। দেখুন [অন্য পার্ট মডেলার থেকে স্কেচ সরান ও আনুন](topic:solidworks-sketches)।

## ব্লক

### ANNOSCALE

সংক্ষিপ্ত নাম: `CANNOSCALE`। ড্রয়িংয়ের টীকা স্কেল ও এতে কতগুলো টীকা-বস্তু আছে তা বলে, তারপর `New annotation scale` জিজ্ঞাসা করে: `1:50`, `1:100`, `2:1`, একটি শুধু সংখ্যা (`50` মানে 1:50), বা ড্রয়িংয়ের নিজস্ব একটি স্কেলের নাম টাইপ করুন। প্রতিটি টীকা-টেক্সট ও মাত্রা নতুন স্কেলে একই আকারে ছাপা হয় এমনভাবে আকার বদলায়, এক পূর্বাবস্থার ধাপে; যেসব বস্তু টীকা নয় তারা অপরিবর্তিত থাকে, এবং যে বস্তু স্কেলের একটি তালিকা রাখে তাতে নতুনটি না থাকলে সেটিও ({{cmd:OBJECTSCALE}})। দেখুন [একক, কাগজ ও স্কেল](topic:units-papers-scales#annotate-by-scale)।

### OBJECTSCALE

সংক্ষিপ্ত নাম: `OBJSCALE`। `Select annotative objects`, তারপর `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`। একটি টীকা-টেক্সট বা মাত্রা টীকা স্কেলের একটি তালিকা রাখে। `Add` ও `Delete` একটি স্কেল চায় (`1:50`, `2:1`, একটি শুধু সংখ্যা, বা ড্রয়িংয়ের নিজস্ব একটি স্কেলের নাম); `Current scale` ড্রয়িংয়ের টীকা স্কেল যোগ করে; `List` প্রতিটি বস্তুর স্কেল প্রিন্ট করে। কোনো বস্তুর তালিকায় যে স্কেল আছে তেমন একটি ভিউপোর্ট সেই স্কেলে তার কাগজের উচ্চতা ছাপার আকারে বস্তুটি দেখায়, পর্দায় ও প্লটে উভয়ই। শেষ স্কেল মোছা যায় না। যেসব বস্তু টীকা নয় তারা বাদ যায়: আগে Properties-এ Annotative চালু করুন। তালিকাগুলো DWG ও DXF-এ CadCraft-এর নিজস্ব ডেটা হিসেবে সংরক্ষিত হয়। দেখুন [একক, কাগজ ও স্কেল](topic:units-papers-scales#annotate-by-scale)।

### ANNOALLVISIBLE

সংক্ষিপ্ত নাম: `ANNOALL`। `Show annotative objects at all scales [ON/OFF]`। চালু (ড্রয়িং শুরু হওয়ার সময়): একটি টীকা-বস্তু একটি ভিউপোর্টে বা মডেলে তার তালিকায় নেই এমন স্কেলেও দেখায়, তার নিজের আকারে। বন্ধ: সেখানে দেখায় না, এবং মডেলে বাছা যায় না। এই সুইচটি এক পূর্বাবস্থার ধাপ; ফাইলে রাখা হয় না।

### SCALELISTEDIT

সংক্ষিপ্ত নাম: `SCALELIST`। `Scale list [Add/Edit/Delete/List/Reset]`, {{key:Enter}} পর্যন্ত। Add: `Scale name`, `Paper units`, `Drawing units`। Edit ও Delete স্কেলের নাম চায়। ড্রয়িংয়ের নিজস্ব স্কেলগুলো ভিউপোর্ট ও প্লট স্কেলের তালিকায় যোগ হয় এবং ড্রয়িংয়ের সঙ্গে সংরক্ষিত হয়। দেখুন [একক, কাগজ ও স্কেল](topic:units-papers-scales#scales)।

### SPLINE, SPLINEDIT ও PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`। Fit: বিন্দু যেগুলোর মধ্য দিয়ে বক্ররেখা যায়; `Close`, `Undo`, তারপর `Start tangent` ও `End tangent` (একটি বিন্দু, বা {{key:Enter}})। Method › Control vertices একটি ডিগ্রি (1 থেকে 5) চায় এবং একটি নিয়ন্ত্রণ বহুভুজ থেকে আঁকে। Object পলিলাইনকে তাদের শীর্ষবিন্দুর মধ্য দিয়ে স্প্লাইনে বদলায়। `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`। `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, একাধিক বস্তুর জন্য `M`; লাইন, আর্ক ও স্প্লাইন আগে পলিলাইন হিসেবে দেওয়া হয়। দেখুন [স্প্লাইন ও পলিলাইন](topic:splines)।

### BLOCK

সংক্ষিপ্ত নাম: `B`, `BMAKE`।

- `Enter block name`। নাম থাকলে: `Block "…" already exists. Redefine it? [Yes/No] <N>`।
- `Specify insertion base point`
- `Select objects`। সেগুলো একটি নতুন ব্লকের একক রেফারেন্স দিয়ে প্রতিস্থাপিত হয়।

### WBLOCK

সংক্ষিপ্ত নাম: `W`, `-WBLOCK`। একটি ব্লক, কিছু বস্তু বা পুরো ড্রয়িং একটি নতুন DWG বা DXF ফাইল হিসেবে লেখে। `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (এটি নতুন ড্রয়িংয়ের উৎস হয়), `Select objects`, তারপর `File format [DWG/DXF/R12 DXF]` ও `File name for the new drawing`, তারপর `What to do with the objects [Retain/Convert to block/Delete]`। Convert সেগুলোকে ফাইলের নামের একটি ব্লকের একটি রেফারেন্স দিয়ে প্রতিস্থাপন করে; Delete মোছে।
- **Block**: `Block to write out`। ব্লকের নিজের বস্তু, তার বেস বিন্দু উৎস হিসেবে, ভেতরের ব্লকসহ।
- **Entire drawing**: মডেল স্পেসের প্রতিটি বস্তু। শিট লেখা হয় না; শিটসহ একটি কপির জন্য {{cmd:SAVEAS}} ব্যবহার করুন।

নতুন ফাইলে শুধু সেই লেয়ার, লাইনটাইপ, টেক্সট ও মাত্রা শৈলী এবং ব্লক থাকে যা তার বস্তুগুলো ব্যবহার করে, এবং ড্রয়িংয়ের এককগুলো। DWG-এর সংস্করণ হলো {{cmd:SAVEAS}} শেষবার যেটি ব্যবহার করেছিল। ব্রাউজারে ফাইলটি ডাউনলোড হয়; Studio-তে সংরক্ষণ ডায়ালগ খোলে।

### ATTDEF

সংক্ষিপ্ত নাম: `ATT`, `DDATTDEF`, `-ATTDEF`; অথবা {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}। মোডগুলো প্রিন্ট করে, তারপর `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (constant হলে `Enter attribute value`), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`। {{cmd:BLOCK}} অ্যাট্রিবিউট সংজ্ঞাগুলো ব্লকে নেয়।

### EATTEDIT ও ATTEDIT

`EATTEDIT` (`DDATTE`, অথবা অ্যাট্রিবিউটসহ একটি রেফারেন্সে ডাবল-ক্লিক; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, তারপর {{ui:Edit attributes}} ডায়ালগ। `ATTEDIT` (`ATE`, `-ATTEDIT`): একই রেফারেন্স, তারপর প্রতিটি অ্যাট্রিবিউটের জন্য `<prompt> (<TAG>) <value>`; {{key:Enter}} একটি মান অপরিবর্তিত রাখে। দেখুন [অ্যাট্রিবিউট](topic:attributes#see-and-change-the-values)।

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`। মান রাখা হয়; নতুন অ্যাট্রিবিউট তাদের ডিফল্ট পায়, বাদ যাওয়াগুলো চলে যায়, অবস্থান রিসেট হয়।

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}। ডায়ালগ: ব্লক, অ্যাট্রিবিউট (ট্যাগ, প্রম্পট, ডিফল্ট, মোড, ক্রম), {{ui:Update the references (values kept)}}, {{ui:Apply}}।

### REFEDIT ও REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}। `REFEDIT`: `Select the block reference to edit in place` (বা নির্বাচন)। `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; বারের {{ui:Save the block}} ও {{ui:Discard}} একই কাজ করে। পুরো সম্পাদনা এক পূর্বাবস্থার ধাপ। দেখুন [অ্যাট্রিবিউট](topic:attributes#edit-a-title-block-where-it-is-refedit)।

### BEDIT ও BCLOSE

`BE`; অথবা {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}। `Enter block name to edit <the selected reference's block>` ব্লক সম্পাদক খোলে। `BCLOSE` `Close the block editor on "…" [Save/Discard] <Save>` জিজ্ঞাসা করে; ব্যানারের {{ui:Save block}} ও {{ui:Discard changes}} একই কাজ করে। সম্পাদকে যা করা হয় সবই এক পূর্বাবস্থার ধাপ।

### VIEWBASE

সংক্ষিপ্ত নাম: `FLATSHOT`। 3D ট্যাবের সলিডের একটি সমতল 2D ভিউ: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, একটি স্কেল (`1:20`, `2:1`; {{key:Enter}} শিটে মানায় যেটি নেয়), তারপর ভিউয়ের কেন্দ্র। একটি ব্লক রেফারেন্স; দৃশ্যমান প্রান্ত VIEW-VISIBLE-এ, লুকানো প্রান্ত VIEW-HIDDEN-এ ড্যাশড। দেখুন [শিটে সমতল ভিউ](topic:3d-solids#flat-views-on-a-sheet)।

### PUBLISH

সংক্ষিপ্ত নাম: `-PUBLISH`; অথবা {{ui:Plot to PDF}} ডায়ালগে {{ui:All sheets in one PDF}}। `Sheets to plot [All/Some]`: {{key:Enter}} প্রতিটি শিট প্লট করে, `S` কমা দিয়ে আলাদা করা নাম চায়। একটি PDF, প্রতি শিটে একটি পৃষ্ঠা ও একটি বুকমার্ক। দেখুন [একটি PDF-এ প্রতিটি শিট](topic:plot-pdf#every-sheet-in-one-pdf)।

### SHEETSET

সংক্ষিপ্ত নাম: `SSM`, `SHEETSETMANAGER`। বাঁ প্যানেলের {{ui:Sheet set}} অংশে নিয়ে যায়: অনেক ড্রয়িংয়ের শিট, নম্বরযুক্ত ও শিরোনামযুক্ত, তাদের টাইটেল ব্লক সেট থেকে পূরণ হয়ে, একটি PDF হিসেবে প্রকাশিত। দেখুন [শিট সেট](topic:sheet-sets)।

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): একটি DWG বা DXF বেছে নিন, তারপর তার ঢোকানোর বিন্দু। {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; একাধিক লিংক থাকলে তার একটি রেফারেন্স বেছে নিন, বা `N` টাইপ করে তার নাম দিন। দেখুন [লিংক করা ড্রয়িং](topic:files#linked-drawings-external-references)।

### COUNT

সংক্ষিপ্ত নাম: `BCOUNT`; অথবা {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}। `Select a block reference to count, or [All/Export] (Enter: All)`: একটি বাছাই সেই ব্লকের প্রতিটি রেফারেন্স এই স্থানে নির্বাচন ও গণনা করে; {{key:Enter}} বা `A` সবগুলো তালিকা করে; `E`, তারপর `C` (গণনা) বা `A` (অ্যাট্রিবিউট) একটি CSV ডাউনলোড করে। দেখুন [ব্লক গণনা করুন ও একটি সময়সূচি রপ্তানি করুন](topic:blocks#count-blocks-and-export-a-schedule)।

### INSERT

সংক্ষিপ্ত নাম: `I`, `DDINSERT`।

- `Enter block name or [File/Library] <last block>` (বড়-ছোট হাতের অক্ষরে কিছু আসে না)। `F` একটি DWG বা DXF চায়, তারপর পুরো ড্রয়িং বা তার একটি ব্লক; ইতিমধ্যে ব্যবহৃত নামের জন্য {{ui:Keep existing}} বা {{ui:Rename}} জিজ্ঞাসা করে। `L` লাইব্রেরি প্যানেল খোলে।
- `Specify insertion point [Scale/Rotate]`। `S` `Specify scale factor` জিজ্ঞাসা করে, `R` `Specify rotation angle`; দুটিই মনে রাখা হয়।
- যখন ব্লকটি এমন বস্তুর পাশে দাঁড়ায় যা ব্লক ছাড়া অন্যত্র পুনরাবৃত্ত হয়, তখন একটি লাইন জানায় কতগুলো জায়গা সুপারিশ করা হয়েছে, এবং প্রম্পটে `suGgested` যুক্ত হয়: `G` সেগুলো দেখায়; একটির কাছে ক্লিক করুন সেখানে ব্লকটি বসাতে, `A` সবগুলোর জন্য, {{key:Enter}} ফিরে যেতে। তারা প্রতিবেশীর ঘূর্ণন ও ডিফল্ট অ্যাট্রিবিউট মান নেয়। খোলা স্থানে 20,000-এর বেশি বস্তুর ড্রয়িং খোঁজা হয় না।
- তারপর ব্লকটি যে প্রতিটি অ্যাট্রিবিউট চায় তার জন্য `Enter <prompt> (<TAG>) <default>`। দেখুন [ব্লক অ্যাট্রিবিউট](topic:attributes)।

### LIBRARY

সংক্ষিপ্ত নাম: `LIB`। লাইব্রেরি প্যানেল খোলে: আইটেম বসান, আপডেট দেখুন, লাইব্রেরি কৃতিত্ব। কোনো প্রশ্ন নেই। দেখুন [একটি ফাইল বা লাইব্রেরি থেকে ঢোকান](topic:insert-from-file-and-library)।

### STEELMEMBER

সংক্ষিপ্ত নাম: `SMEMBER`; অথবা লাইব্রেরির {{ui:Standard}} ট্যাবে {{ui:3D member}}। `Section size <W12x26>` (ট্যাবটি যেমন তালিকা করে), তারপর `Start point [Column]` ও `End point`: 3D ট্যাবে দুই বিন্দুর মাঝে একটি সলিড সদস্য, মাটিতে বসা। `C` কলামের বেস বিন্দু ও তার উচ্চতা চায়। এক পূর্বাবস্থার ধাপ। দেখুন [ইস্পাতের বিভাগ ও আদর্শ অংশ বসান](topic:steel-and-standard-parts)।

### PARTSLIST

সংক্ষিপ্ত নাম: `PLIST`। `Top left corner of the parts list`, তারপর `Text height <2.5>`: লাইব্রেরি থেকে বসানো প্রতিটি আদর্শ অংশ ও ইস্পাত বিভাগের একটি টেবিল আঁকে (আইটেম নম্বর, পরিমাণ, অংশ, মান, আকার, দৈর্ঘ্য, উপাদান, ভর)। এক পূর্বাবস্থার ধাপ। দেখুন [ইস্পাতের বিভাগ ও আদর্শ অংশ বসান](topic:steel-and-standard-parts#make-a-parts-list)।

### PURGE

সংক্ষিপ্ত নাম: `PU`। যেসব ব্লক সংজ্ঞা কেউ ব্যবহার করে না তা সরায়। কোনো প্রশ্ন নেই।

### DELBLOCKS

অথবা {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}। `Select block to delete [Name/eXit]`: একটি ব্লক রেফারেন্স বেছে নিন, অথবা `N` দিয়ে একটি ফিল্টারসহ ব্লকের তালিকা (কয়েকটি বেছে নেওয়া যায়), অথবা শেষ করতে `X` / {{key:Enter}}। প্রতিটি রেফারেন্স যায় — মডেলে, প্রতিটি শিটে এবং অন্য ব্লকের ভেতরেও — তারপর সংজ্ঞা, এবং কমান্ড লাইন জানায় কী মোছা হলো এবং কী যায়নি। নামহীন ব্লক ও লিংক করা ড্রয়িং প্রস্তাব করা হয় না। পরের ব্লকের জন্য প্রম্পট ফিরে আসে; পুরো কমান্ড এক পূর্বাবস্থার ধাপ।

### PASTEBLOCK

{{cmd:PASTEBLOCK}} আপনার কপি করা জিনিস ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) একটি ব্লক হিসেবে পেস্ট করে: ঢোকানোর বিন্দু বেছে নিন এবং নতুন ব্লকের একটি রেফারেন্স সেখানে যায়, নির্বাচিত। ব্লকটি নিজের নাম পায় (`A$C` এবং একটি সংখ্যা); {{cmd:RENAME}} আপনার নাম দেয়। এক পূর্বাবস্থার ধাপ রেফারেন্স ও ব্লক দুটিই সরায়।

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} যে ব্লক প্রতিস্থাপন করতে হবে এবং তার জায়গায় যে ব্লক বসবে তা জিজ্ঞাসা করে (`?` ব্লকের তালিকা দেখায়), তারপর মডেলে, প্রতিটি শিটে এবং অন্য ব্লকের ভেতরে প্রতিটি রেফারেন্স বদলায়। প্রতিটি রেফারেন্স তার জায়গা, স্কেল, ঘূর্ণন, লেয়ার ও দুই ব্লকেই থাকা অ্যাট্রিবিউটের মান রাখে; শুধু নতুন ব্লকে থাকা অ্যাট্রিবিউট তাদের ডিফল্টে শুরু হয়, এবং কোন মানগুলো বাদ গেল তা বলে। পুরোনো ব্লক আর কেউ ব্যবহার না করলে তা সরাতে প্রস্তাব করে। লিংক করা ড্রয়িং এবং যে প্রতিস্থাপন একটি ব্লককে নিজের ভেতরে রাখবে তা প্রত্যাখ্যান করে। এক পূর্বাবস্থার ধাপ।

### MINSERT

{{cmd:MINSERT}} একটি ব্লক সারি ও কলামে বসায়: ব্লকের নাম, ঢোকানোর বিন্দু, স্কেল, ঘূর্ণন, সারি ও কলামের সংখ্যা, এবং তাদের মধ্যে দূরত্ব। পুরো সেটটি ঘূর্ণনের সঙ্গে ঘোরে। প্রতিটি নিজের রেফারেন্স (10,000 পর্যন্ত), তাই যেকোনোটি পরে সরানো বা মোছা যায়।

### BLOCKSPALETTE

সংক্ষিপ্ত নাম: `BLOCKSPAL`; অথবা {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}। {{ui:Blocks}} প্যানেল দেখায়, কার্সর তার ফিল্টারে। প্রতিটি ব্লকের একটি ছোট ছবি থাকে; সবচেয়ে সাম্প্রতিক বসানোগুলো আগে আসে। ফিল্টারের পাশের দুটি বোতাম ছবির তালিকা ও গ্রিডের মধ্যে বদলায়। একটি ছবিতে ক্লিক করুন (বা {{ui:Insert}}) {{cmd:INSERT}} দিয়ে ব্লকটি বসাতে, বা ড্রয়িংয়ে টেনে নিন যেখানে ছাড়বেন সেখানে বসাতে।

তালিকার নিচে {{ui:Libraries}}: {{ui:Add a drawing}} আপনার নিজের একটি DWG বা DXF ফাইল নেয় এবং তার ব্লকগুলো ছবিসহ তালিকা করে, এবং পুরো ড্রয়িংকে একটি ব্লক হিসেবে। একটি বসালে তার সংজ্ঞা (এবং তার ভেতরের ব্লক ও তাদের লেয়ার) এই ড্রয়িংয়ে কপি হয়, যেমন {{cmd:INSERT}}-এর `File` বিকল্প করে; যে ব্লক ইতিমধ্যে এখানে একই সংজ্ঞায় আছে তা কোনো প্রশ্ন ছাড়াই ব্যবহার হয়, একই নামের কিন্তু আলাদা একটি {{ui:Keep existing}} বা {{ui:Rename}} জিজ্ঞাসা করে। ব্রাউজারে ফাইলটি পেজ বন্ধ না হওয়া পর্যন্ত থাকে। CadCraft Studio-তে {{ui:Add a folder}} একটি ফোল্ডারের ড্রয়িংগুলো তালিকা করে, প্রতিটি ক্লিক করলে খোলে, এবং ফাইল ও ফোল্ডার মনে রাখা হয়। ছোট x তালিকা থেকে একটি লাইব্রেরি সরায়; ফাইলটি অক্ষত থাকে। যৌথ {{ui:Library}} আলাদা জিনিস: দেখুন [একটি ফাইল বা লাইব্রেরি থেকে ঢোকান](topic:insert-from-file-and-library)।

### BCONVERT

অথবা {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}। পুনরাবৃত্ত জ্যামিতি খোঁজে এবং প্রতিটি কপিকে একটি ব্লকের একটি রেফারেন্সে বদলায়।

- `Select the objects that repeat, or [Block]`: একটি কপির বস্তুগুলো। `B` বরং একটি বিদ্যমান ব্লকের নাম দেয়, তার বস্তুর আলগা কপি খুঁজতে।
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` ও `P` কী কপি হিসেবে গণ্য হবে তা বদলায়; {{key:Enter}} খোঁজে। সেটিংস মনে রাখা হয়।
- `Name for the new block <Block1>`, তারপর `Specify the block's base point` ({{key:Enter}} নির্বাচনের নিচের-বাঁ কোণ নেয়)।
- কতগুলো অন্য বস্তু-সেট একই জ্যামিতি তা জানায়, যা যা প্রতিস্থাপন করবে তা হাইলাইট করে, এবং `Yes/No` জিজ্ঞাসা করে।

একটি কপি হলো একই বস্তু যেকোনো কোণে সরানো ও ঘোরানো (এবং চালু থাকলে একটি গুণকে প্রতিবিম্ব বা স্কেল করা): প্রতিটি বস্তুর একটি প্রতিরূপ থাকতে হবে, নির্বাচনের আকারের এক মিলিয়ন ভাগের মধ্যে। প্রতিটি রেফারেন্স তার নিজের ঘূর্ণন ও স্কেল পায় (প্রতিবিম্বিতটি একটি ঋণাত্মক Y স্কেল), এবং বস্তুগুলো যে লেয়ার ভাগ করত। লক করা লেয়ারের বস্তু অপরিবর্তিত থাকে এবং গণনা হয়। এটি খোলা স্থান (মডেল বা খোলা শিট) খোঁজে। একটি খুব বড় খোঁজ একটি কাজের সীমায় থামে এবং তা জানায়। এক পূর্বাবস্থার ধাপ।

### BSEARCH

অথবা {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}। `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: ব্লকের নামের অংশ, বা `*` ও `?` দিয়ে একটি প্যাটার্ন। প্রতিটি ব্লক এখানে ও সমগ্র ড্রয়িংয়ে তার রেফারেন্সসহ তালিকাভুক্ত করে।
- `A`: একটি অ্যাট্রিবিউট মান, বা `TAG=value`। যেসব ব্লকের রেফারেন্সের অ্যাট্রিবিউটে তা আছে তাদের তালিকা করে, পাওয়া মানসহ। ধ্রুবক অ্যাট্রিবিউট গণনা হয়।
- `G`: বস্তু বা একটি ব্লক রেফারেন্স বেছে নিন, এবং যেসব ব্লকের আকার অন্তত 85% মেলে সেগুলো সবচেয়ে ভালোটি আগে তালিকাভুক্ত হয়। আকার, ঘূর্ণন ও প্রতিবিম্ব গণনা হয় না। পরিমাপ আউটলাইন বরাবর ছড়ানো বিন্দুর মধ্যে দূরত্ব তুলনা করে, তাই এটি হুবহু অনুরূপ নয়, বরং সদৃশ খোঁজে; হুবহু কপি খুঁজতে {{cmd:BCONVERT}} ব্যবহার করুন।

খোলা স্থানে পাওয়া রেফারেন্সগুলো নির্বাচিত হয়, পরের কমান্ডের জন্য প্রস্তুত।

### BREPLACE

অথবা {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}। `Replace [Selected/All]`: `S` আপনার নির্বাচিত ব্লক রেফারেন্সগুলো আপনার নাম দেওয়া ব্লক দিয়ে প্রতিস্থাপন করে; `A` একটি ব্লক ও তার প্রতিস্থাপন চায় এবং প্রতিটি রেফারেন্স বদলায়, {{cmd:BLOCKREPLACE}} যেমন করে (একই কোড)। একটি রেফারেন্স তার জায়গা, স্কেল, ঘূর্ণন, লেয়ার ও দুই ব্লকেই থাকা অ্যাট্রিবিউটের মান রাখে; নতুন ব্লকের জায়গা না থাকা মানগুলো বাদ যায় ও নাম দিয়ে জানানো হয়। `?` ব্লকের তালিকা দেয়। এক পূর্বাবস্থার ধাপ।

### DATAEXTRACTION

সংক্ষিপ্ত নাম: `EATTEXT`, `DX`; অথবা {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}। ব্লক, তাদের অ্যাট্রিবিউট ও বস্তুর বৈশিষ্ট্য একটি টেবিল বা CSV ফাইল হিসেবে তালিকা করে।

- নির্বাচনে কাজ করে, বা `Select objects (Enter: everything in this space)` জিজ্ঞাসা করে।
- নির্বাচনে দুটোই থাকলে `List: [Blocks/Objects/All]`। নামহীন ব্লক, টেবিল ও বিল অফ ম্যাটেরিয়ালস কখনও তালিকাভুক্ত হয় না।
- এটি কলামের তালিকা প্রিন্ট করে (নাম, ধরন, লেয়ার, X, Y, ঘূর্ণন, স্কেল, দৈর্ঘ্য, ক্ষেত্রফল, রং, লাইনটাইপ, স্থান, এবং প্রতি অ্যাট্রিবিউট ট্যাগের জন্য একটি), তারপর `Columns, by name or number with commas between`। {{key:Enter}} তারকাচিহ্নিতগুলো নেয়: ব্লকের জন্য নাম ও প্রতিটি অ্যাট্রিবিউট; বস্তুর জন্য ধরন, লেয়ার ও দৈর্ঘ্য।
- `Put identical rows together with a count? [Yes/No] <Yes>`, তারপর `Put the list in a: [Table/Csv] <Table>`। একটি টেবিল একটি সাধারণ টেবিল ({{cmd:TABLEDIT}} এটি সম্পাদনা করে) এবং সরাসরি নয়: ড্রয়িং বদলালে কমান্ডটি আবার চালান।
- তালিকায় না থাকা কলাম প্রত্যাখ্যান করে। একটি টেবিল 1,999 সারি ডেটা ধরে; একটি CSV ফাইল সবগুলো নেয়।

### COUNTTABLE

নির্বাচনের (বা খোলা স্থানের) ব্লক রেফারেন্সগুলো গণনা করে এবং গণনাগুলো একটি টেবিলে (`Block`, `Count`) বা একটি CSV ফাইলে রাখে। ড্রয়িংয়ের সঙ্গে নিজে থেকে অনুসরণ করা একটি গণনার জন্য দেখুন {{cmd:BOMTABLE}}।

## শিট ও প্লট করা

### LAYOUT

সংক্ষিপ্ত নাম: `LO`, `NEWLAYOUT`; অথবা ড্রয়িংয়ের নিচের {{ui:+}} বোতাম। ISO A3-এ (বা ইঞ্চি বা ফুটের ড্রয়িংয়ের জন্য Tabloid) একটি বর্ডার, একটি টাইটেল ব্লক ও একটি ভিউপোর্টসহ নতুন শিট। কোনো প্রশ্ন নেই।

### MVIEW

সংক্ষিপ্ত নাম: `MV`। শুধু একটি শিটে ({{cmd:VPORTS}} শিটে একই কাজ করে)।

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`। ভিউপোর্ট একটি আদর্শ স্কেলে পুরো মডেল দেখায়।
- `P` (Polygonal): আউটলাইনের কোণগুলোতে ক্লিক করুন (`Undo`, `Close`), শেষ হলে {{key:Enter}}। তিনটির কম কোণ প্রত্যাখ্যান করে।
- `O` (Object): `Select a closed object for the viewport's outline`: শিটের একটি বন্ধ পলিলাইন, একটি বৃত্ত বা একটি উপবৃত্ত। ভিউপোর্ট তার আকার নেয় (বক্ররেখা ছোট সরল টুকরো হিসেবে); বস্তুটি যেমন ছিল তেমন থাকে। যে বস্তু বন্ধ নয় তা প্রত্যাখ্যান করে।

### VPCLIP

শিটে আগে থেকে থাকা একটি ভিউপোর্ট ছাঁটে। `Select viewport to clip` (বা আগে নির্বাচন করুন), তারপর `Select the object to clip to [Polygonal/Delete]`:

- একটি বন্ধ পলিলাইন, বৃত্ত বা উপবৃত্তে ক্লিক করুন, অথবা একটি বহুভুজের কোণগুলোতে ক্লিক করতে {{key:Enter}} (বা `P`)।
- `D` (Delete, ভিউপোর্ট ছাঁটা থাকলে দেওয়া হয়) এটিকে আবার আয়তক্ষেত্র করে: তার আগের আউটলাইনের চারপাশের বাক্স।
- ভিউপোর্ট কাগজে যা দেখায় তা সরে না, এবং তার স্কেল থাকে। মডেল শুধু আউটলাইনের ভেতরে আঁকা ও প্লট হয়, এবং সীমানা তাকে অনুসরণ করে। এক পূর্বাবস্থার ধাপ।
- একটি ছাঁটা ভিউপোর্টের আউটলাইনের প্রতিটি কোণে একটি গ্রিপ থাকে, তার কেন্দ্র ও তার বাক্সের চার কোণের পাশাপাশি (বাক্সের কোণ টানলে আউটলাইনও তার সঙ্গে প্রসারিত হয়)। Properties দেখায় Outline: Rectangle, বা Clipped এবং কোণের সংখ্যা।
- DWG ও DXF 2000 ফাইল আউটলাইন CadCraft-এর জন্য রাখে। অন্য প্রোগ্রাম ভিউপোর্টটিকে তার চারপাশের আয়তক্ষেত্র হিসেবে খোলে; DXF R12 শুধু আয়তক্ষেত্র রাখে।
- মডেল ট্যাবে এটি জানায় যে ভিউপোর্ট শিটে থাকে।

### VPORTS

সংক্ষিপ্ত নাম: `VIEWPORTS`। {{cmd:SPLIT}} শিট থেকেও একই; এবং {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} এটি চালায়। মডেলে: `Enter number of panes [SIngle/2/3/4] <3>`; `2` `[Horizontal/Vertical] <Vertical>` জিজ্ঞাসা করে (Vertical = পাশাপাশি), `3` `[Left/Right] <Right>` জিজ্ঞাসা করে (বড় প্যানটি কোথায় যায়)। প্রতিটি প্যান তার নিজের ভিউ ও স্থান রাখে; একটি ক্লিক একটি প্যানকে সক্রিয় করে। শিটে এটি {{cmd:MVIEW}}। দেখুন [পর্দা ভাগ করুন](topic:split-screen)।

### VPVIEW

কোনো সংক্ষিপ্ত নাম নেই। শুধু একটি শিটে।

- `Select viewport` (একটি নির্বাচিত থাকলে বাদ যায়), তারপর মডেলে: `Specify first corner of the window to show`, `Specify opposite corner`।

### UCS

কোনো সংক্ষিপ্ত নাম নেই। আপনার নিজের একটি স্থানাঙ্ক ব্যবস্থা; এটি কোনো সম্পাদনা নয়। `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: একটি বিন্দু নতুন উৎস, তারপর `Specify point on X-axis (Enter keeps the angle)`। `Z`: `Specify rotation angle about Z axis <90>`। `3`: উৎস, ধনাত্মক X অক্ষের একটি বিন্দু, ধনাত্মক-Y পাশের একটি বিন্দু। `OB`: `Select object to align UCS`। `NA`: `[Restore/Save/Delete/?]` ও একটি নাম। ভিউ ঘোরে যাতে নতুন X অক্ষ সমতল থাকে। দেখুন [ভিউ ঘোরান ও আপনার নিজের স্থানাঙ্ক ব্যবহার করুন](topic:ucs-and-turned-view)।

### PLAN

কোনো সংক্ষিপ্ত নাম নেই। `Enter an option [Current ucs/Ucs/World] <Current ucs>`: সক্রিয় প্যানের ভিউ ঘোরায় যাতে UCS-এর X অক্ষ (বা বিশ্বের) সমতল হয়। ড্রয়িংয়ের কিছু সরে না।

### TURNLEFT, TURNRIGHT, TURNWORLD

কোনো সংক্ষিপ্ত নাম নেই; অথবা {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}। `UCS Z -90`, `UCS Z 90` ও `UCS W`-এর মতোই, ভিউ অনুসরণ করে।

### VPLAYER

কোনো সংক্ষিপ্ত নাম নেই। একটি শিটে, বা একটি ভিউপোর্টের ভেতরে। `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` লেয়ারের নাম চায় (কমা, `*` ও `?` ওয়াইল্ডকার্ড), তারপর `[All/Select/Current] <Current>` ভিউপোর্ট; Reset প্রতিটি লেয়ারকে তার "নতুন ভিউপোর্টে ফ্রিজ" ডিফল্টে ফেরায়; `V` সেই ডিফল্ট ঠিক করে (`[Frozen/Thawed]`), যা {{cmd:MVIEW}} ব্যবহার করে। `?` বর্তমান ভিউপোর্টে ফ্রিজ করা লেয়ারগুলো তালিকা করে। লেয়ার প্যানেলের ভিউপোর্ট কলাম একটি ভিউপোর্টের জন্য একই কাজ করে। দেখুন [একটি ভিউপোর্টে একটি লেয়ার ফ্রিজ করুন](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport)।

### MSPACE

সংক্ষিপ্ত নাম: `MS`; অথবা একটি ভিউপোর্টের ভেতরে ডাবল-ক্লিক করুন। শুধু একটি শিটে। একটি ভিউপোর্টের মাধ্যমে মডেলে কাজ করুন: নির্বাচিতটি, শিটের একমাত্রটি, অথবা `Click inside the viewport to work in`। ভেতরে প্যান ও জুম ভিউপোর্টের ভিউ বদলায় (ডিসপ্লে-লক করা একটি তা রাখে এবং শিট সরে); নতুন ভিউ এক পূর্বাবস্থার ধাপ হিসেবে লেখা হয়। দেখুন [একটি ভিউপোর্টের মাধ্যমে মডেলে কাজ করুন](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)।

### PSPACE

সংক্ষিপ্ত নাম: `PS`; অথবা ভিউপোর্টের বাইরে ডাবল-ক্লিক করুন, বা ড্রয়িংয়ের নিচের একটি ট্যাবে ক্লিক করুন। শিটে ফেরত।

### PLOT

সংক্ষিপ্ত নাম: `PRINT`, `PUBLISH`, `EXPORTPDF`; অথবা {{key:Mod+P}}। {{ui:Plot to PDF}} ডায়ালগ খোলে। দেখুন [PDF-এ প্লট করুন](topic:plot-pdf)।

### PLOTSTYLES

সংক্ষিপ্ত নাম: `STYLESMANAGER`, `PSTABLES`; অথবা {{ui:Plot to PDF}} ডায়ালগে {{ui:Edit tables…}}। {{ui:Plot style tables}} খোলে: প্রতিটি রং কী হিসেবে ছাপা হয় (রং, ধূসর, কালি, লাইনের পুরুত্ব), ড্রয়িংয়ের সঙ্গে রাখা। দেখুন [প্লট স্টাইল টেবিল](topic:plot-pdf#plot-style-tables)।

### CHSPACE

{{cmd:CHSPACE}} একটি ভিউপোর্টের মাধ্যমে শিট ও মডেলের মধ্যে বস্তু সরায়, স্কেল ও ঘোরানো হয়ে যাতে অন্য দিক থেকে একই দেখায়। শিটে বস্তু নির্বাচন করুন, সেগুলো মডেলে যায় (শিটে একাধিক থাকলে ভিউপোর্ট বেছে নিন)। {{cmd:MSPACE}}-এর মাধ্যমে মডেলে কাজ করার সময়, নির্বাচিত বস্তুগুলো শিটে আসে। এগুলো কতগুণ বড় বা ছোট হলো তা জানায়। ভিউপোর্ট তাদের শিটে থাকে। এক পূর্বাবস্থার ধাপ।

### ISODRAFT

{{cmd:ISODRAFT}} আইসোমেট্রিক ড্রাফটিং `ON` বা `OFF` করে, বা সরাসরি `Left`, `Top` বা `Right` তলে যায়। চালু থাকাকালে: Ortho ({{key:F8}}) রেখাগুলো তলের দুই অক্ষ বরাবর রাখে (বাঁ: 90° ও 150°; উপর: 30° ও 150°; ডান: 30° ও 90°), পোলার ট্র্যাকিং ({{key:F10}}) একই অক্ষ অনুসরণ করে, গ্রিডে স্ন্যাপ ({{key:F9}}) আইসোমেট্রিক গ্রিড ব্যবহার করে, এবং গ্রিড ({{key:F7}}) 30°, 90° ও 150°-এর রেখা দিয়ে আঁকা হয়। {{cmd:ELLIPSE}}-এ `Isocircle` যুক্ত হয়: একটি কেন্দ্র ও একটি ব্যাসার্ধ (বা `Diameter`) দিন, এবং বর্তমান তলে একটি বৃত্ত যেভাবে দেখায় সেই উপবৃত্ত আঁকে। ড্রয়িংটি সমতল থাকে: এগুলো একটি ছবিসদৃশ ভিউ আঁকার সহায়ক, একটি 3D মডেল নয়। সেটিং এই সেশনের জন্য, ফাইলে সংরক্ষিত হয় না।

### ISOPLANE

{{cmd:ISOPLANE}} যে আইসোমেট্রিক তলে ড্রাফটিং হবে তা বেছে নেয়: `Left`, `Top` বা `Right`। Enter পরের তলে যায়। আইসোমেট্রিক ড্রাফটিং চালু থাকলে {{key:F5}} একটি কমান্ডের মাঝখানে একই কাজ করে; বন্ধ থাকলে {{key:F5}} ব্রাউজারের হাতে থাকে।

## তথ্য জিজ্ঞাসা

### CAL

একটি হিসাবের মান প্রিন্ট করে, যেখানেই দৈর্ঘ্য টাইপ করা হয় সেখানে যেভাবে পড়া হয়।

- `Expression`: টাইপ করুন, যেমন `12'6"+3/4"` বা `(24'-0")/3`, এবং {{key:Enter}} চাপুন। CadCraft `= 12'-6 3/4"   (150.75 drawing units)` প্রিন্ট করে। দেখুন [একটি টাইপ করা মানে পাটিগণিত](topic:coordinate-entry#arithmetic-in-a-typed-value)।

### DIST

সংক্ষিপ্ত নাম: `DI`; অথবা {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}।

- `Specify first point`, `Specify second point`। দূরত্ব, কোণ, Delta X ও Delta Y প্রিন্ট করে।

### AREA

সংক্ষিপ্ত নাম: `AA`; অথবা {{ui:View}} › {{ui:More}} › {{ui:Area}}। ক্ষেত্রফল ও পরিধি প্রিন্ট করে।

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - কোণগুলো ক্লিক করুন বা টাইপ করুন; `Specify next point (Enter closes) [Undo]`-তে রূপরেখা বন্ধ করতে {{key:Enter}} চাপুন। `U` শেষ কোণ ফিরিয়ে নেয়।
  - {{key:Enter}} বা `O`, তারপর `Select object`: একটি বৃত্ত (তার পরিধি প্রিন্ট করে), একটি উপবৃত্ত, একটি পলিলাইন (একটি খোলা হলে ক্ষেত্রফলের জন্য একটি সরল রেখায় বন্ধ হয়, এবং তার দৈর্ঘ্য প্রিন্ট হয়), বা একটি হ্যাচ (ছিদ্র বাদ যায়)।
  - `A` (Add area) ও `S` (Subtract area) একটি চলমান মোট রাখে: প্রম্পট `(ADD mode)` বা `(SUBTRACT mode)` দিয়ে শুরু হয়, প্রতিটি ক্ষেত্রফল যোগ বা বিয়োগ হয়, এবং প্রতিটির পরে `Total area = …` প্রিন্ট হয়। এই মোডগুলোতে `O` Enter পর্যন্ত বস্তু বাছে, এবং প্রথম প্রম্পটে {{key:Enter}} কমান্ড শেষ করে।

### MEASUREGEOM

সংক্ষিপ্ত নাম: `MEA`। `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; প্রতিটি মাপের পরে আবার জিজ্ঞাসা করে, ডিফল্ট `eXit`।

`Quick` পয়েন্টারটি সরানোর সময় তার চারপাশে মাপে: ডানে, উপরে, বামে ও নিচে নিকটতম বস্তুর দূরত্ব (বর্তমান UCS-এর অক্ষ বরাবর), আপনি যেমন সরান তেমন আঁকা, এবং যেখানে তাদের দুটি প্রতিবেশী সরল ও মেলে সেখানে কোণ। একটি ক্লিক চারটি দূরত্ব, পরিষ্কার প্রস্থ ও উচ্চতা এবং কোণগুলো ইতিহাসে লেখে; Enter বিকল্পে ফিরে যায়। এটি পর্দায় যা আছে তা পড়ে।

- `D`: দুই বিন্দু, {{cmd:DIST}}-এর মতো।
- `R`: `Select arc or circle`; ব্যাসার্ধ ও ব্যাস প্রিন্ট করে।
- `A`: একটি আর্ক (এর অন্তর্ভুক্ত কোণ), একটি লাইন ও তারপর একটি দ্বিতীয় লাইন (তাদের মধ্যের কোণ, তাদের দূর প্রান্তের দিকে), অথবা {{key:Enter}} ও তিন বিন্দু (শীর্ষবিন্দু, তারপর দুই প্রান্ত)।
- `AR`: {{cmd:AREA}}-এর মতো, একটি ক্ষেত্রফল।

### ID

কোনো সংক্ষিপ্ত নাম নেই। `Specify point`; তার X ও Y প্রিন্ট করে।

### LIST

সংক্ষিপ্ত নাম: `LI`, `LS`। `Select objects`; প্রতিটি বস্তুর ধরন, লেয়ার ও প্রধান পরিমাপ প্রিন্ট করে।

### MASSPROP

{{cmd:MASSPROP}} আপনার নির্বাচিত রিজিয়ন ও বন্ধ বস্তুগুলোর বিভাগ-বৈশিষ্ট্য একসঙ্গে দেয়: ক্ষেত্রফল, পরিধি, বাউন্ডিং বক্স, কেন্দ্রবিন্দু, উৎসের মধ্য দিয়ে X ও Y অক্ষের চারপাশে জড়তার মোমেন্ট, জড়তার গুণফল, জড়তার ব্যাসার্ধ, কেন্দ্রবিন্দুর চারপাশে একই মোমেন্ট, এবং প্রধান মোমেন্ট ও তাদের অক্ষের দিক। একটি রিজিয়নের ছিদ্র ছিদ্র হিসেবে গণনা হয়। ফলাফল ড্রয়িং এককে, এবং লাইন ও আর্কের আউটলাইনে সঠিক; উপবৃত্ত ও স্প্লাইন ছোট সরল অংশ হিসেবে মাপা হয়, এবং তা জানায়। প্রতিবেদনের পরে এটি জিজ্ঞাসা করে সেটি একটি টেক্সট ফাইলে লিখবে কি না। যে বস্তু বন্ধ নয় সেগুলো বাদ যায়, এবং কতগুলো তা জানায়।

## ভিউ, ফাইল ও অন্যান্য

### ZOOM

সংক্ষিপ্ত নাম: `Z`।

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`। একটি উইন্ডোর জন্য দুই কোণে ক্লিক করুন। `E`, `A` বা Enter: পুরো ড্রয়িং।
- `P` (Previous, বা টুলবারে {{ui:Previous}}) আগের ভিউয়ে ফেরে, প্রতি ট্যাবে 10টি ভিউ পর্যন্ত; একসারি চাকার ধাপ বা একটি প্যান একটি ভিউ গণনা হয়।
- `2`, `2x` বা `0.5x`-এর মতো একটি সংখ্যা (বা `S` ও তারপর সংখ্যা) পর্দার মাঝখানকে কেন্দ্র করে সেই গুণক দিয়ে জুম করে।
- `C` `Specify center point` ও `Enter height or magnification (nX)` জিজ্ঞাসা করে।

### PDFATTACH, PDFIMPORT ও PDF কমান্ডগুলো

সংক্ষিপ্ত নাম: `PDFATT` {{cmd:PDFATTACH}}-এর জন্য, `PDFIM` {{cmd:PDFIMPORT}}-এর জন্য। {{cmd:PDFATTACH}} ড্রয়িংয়ের নিচে একটি PDF পৃষ্ঠা রাখে (ফাইল, পৃষ্ঠা, ঢোকানোর বিন্দু, স্কেল, ঘূর্ণন); {{cmd:PDFIMPORT}} একটি পৃষ্ঠার লাইন, বক্ররেখা, ভরাট ও টেক্সটকে PDF-এর নামে নামকরণ করা লেয়ারের ড্রয়িং বস্তুতে বদলায়, প্রকৃত আকারে, একটি টাইপ করা স্কেলে, বা দুই বিন্দু ও একটি প্রকৃত দূরত্ব থেকে স্কেল করে। {{cmd:PDFCLIP}} একটি আন্ডারলে ছাঁটে, {{cmd:PDFADJUST}} ফিকে ভাব, কনট্রাস্ট, একরঙা সেট করে বা বন্ধ করে, {{cmd:PDFLAYERS}} PDF-এর নিজস্ব লেয়ার বদলায়, এবং {{cmd:PDF}} CadCraft-কে সেই ফাইলগুলো আবার দেয় যা একটি ড্রয়িংয়ের আন্ডারলে ব্যবহার হয়। দেখুন [PDF আন্ডারলে](topic:pdf-underlay)।

### AUTOCOMPLETE

সংক্ষিপ্ত নাম: `AUTOC`। ড্রয়িং স্বয়ংসম্পূর্ণ করা: কোনো কমান্ড চলছে না এমন অবস্থায়, একটি ধূসর ছায়া দেখায় আপনার ড্রয়িংয়ের নিজস্ব প্যাটার্ন কী আসবে বলে। {{cmd:AUTOCOMPLETE}} এটি `On` বা `Off` করে (এবং সেটিংস › CadCraft-এও), অথবা এখন কী পরামর্শ দেবে তা `Show` করে। **Tab** ছায়াটি এক পূর্বাবস্থার ধাপ হিসেবে আঁকে, **Esc** ড্রয়িং বদলানো পর্যন্ত এটি লুকায়। এটি নতুনতম বস্তুতে তিনটি জিনিস খোঁজে: দুইবার বা বেশি একটি সমান ধাপে আঁকা কিছুর পরের কপি (স্টাড, কলাম, সিঁড়ির রাইজার ও ট্রেড), একটি পলিলাইন সিঁড়ির পরের ধাপ, এবং একটি ঘর বা দেয়াল শৃঙ্খলের অনুপস্থিত দিক। {{cmd:LINE}} বা {{cmd:PLINE}}-এর মাঝখানে ছায়াটি **পরের বিন্দু**: সিঁড়ির পরের ধাপ (রাইজার, ট্রেড, রাইজার…), একটি আয়তক্ষেত্রের চতুর্থ কোণ, তা বন্ধ করা বিন্দু, বা আরেকটি সমান ধাপ। কার্সরটি তার কাছে আনুন এবং **Tab** চাপুন, যেন আপনি সেখানে ক্লিক করেছেন; চালিয়ে যান বা Enter চাপুন। এটি এই কম্পিউটারে নিয়মের মাধ্যমে হিসাব হয়, কোনো মডেল ছাড়া।

### AUTOSHEET

সংক্ষিপ্ত নাম: `ASH`। নিজে সাজায় এমন শিট। {{cmd:AUTOSHEET}} ড্রয়িংয়ের অংশগুলো নেয় (আপনার নামযুক্ত ভিউ, বা মডেলের আলাদা অংশ, বা পুরো মডেল), একটি কাগজের আকার বেছে নেয় (বা আপনার দেওয়াটি), প্রতিটি অংশকে একটি আদর্শ স্কেল দেয় (সবার জন্য এক স্কেল, অথবা প্রতিটি যতটা নিতে পারে তার সবচেয়ে বড়), এবং ভিউগুলো নতুন শিটে সারিতে বসায়, প্রতিটির নিচে একটি টাইটেল ব্লক ও ক্যাপশন (নাম ও স্কেল)। একটি শিটে যা ধরে না তা নিজের একটি শিট পায়। এক পূর্বাবস্থার ধাপ। এটি এই কম্পিউটারে নিয়মের মাধ্যমে হিসাব হয়, কোনো মডেল ছাড়া।

### PHOTOSKETCH

সংক্ষিপ্ত নাম: `PSK`। স্কেচের ছবি থেকে ড্রয়িং। কাগজে হাতে আঁকা স্কেচের একটি ছবি (JPEG, PNG বা TIFF) বেছে নিন। {{cmd:PHOTOSKETCH}} কাগজের চারটি কোণ খুঁজে পায়, দৃষ্টিকোণ সোজা করে, আপনার নাম দেওয়া কাগজের আকার নেয় (`Paper`, বা নিকটতম আদর্শটি) এবং স্কেচের `Scale` (1 : n), তারপর কলমের রেখাগুলোকে লাইন, আর্ক ও বৃত্তে আঁকে, প্রতিটি কলমের রঙের (কালো, লাল, নীল, সবুজ) জন্য একটি লেয়ার। কাগজের প্রান্ত খুঁজে না পেলে পুরো ছবিটিকে শিট হিসেবে নেয় এবং তা জানায়। লেখা বাদ দেওয়া হয়। এক পূর্বাবস্থার ধাপ। এই কম্পিউটারে ক্লাসিক ইমেজ প্রসেসিং দিয়ে হয়, কোনো মডেল ছাড়া, কোথাও কিছু পাঠানো হয় না। স্ক্যান করা ড্রয়িংয়ের কমান্ডগুলোও দেখুন।

### AUTODIM

সংক্ষিপ্ত নাম: `ADIM`। নিয়ম অনুযায়ী স্বয়ংক্রিয় মাত্রা। {{cmd:AUTODIM}} নির্বাচিত বস্তু (বা পুরো ড্রয়িং) তাদের স্তর ও লম্ব প্রান্ত থেকে মাপে: আপনার বেছে নেওয়া পাশ বরাবর একটি মাত্রা শৃঙ্খল (`Sides`), তার বাইরে একটি সামগ্রিক মাত্রা, প্রতিটি খোলা জায়গার প্রস্থ (সমরেখ দেয়ালের লাইনের মধ্যে একটি ফাঁক), প্রতিটি আকারের ছিদ্রের জন্য একটি ব্যাস, এবং `Grid` দিয়ে গ্রিড লাইনের মধ্যে ব্যবধান। যে মাত্রা আগে থেকে আছে তা আবার তৈরি হয় না। এক পূর্বাবস্থার ধাপ। এই কম্পিউটারে নিয়মের মাধ্যমে হিসাব হয়, কোনো মডেল ছাড়া।

### GRIDMOVE

সংক্ষিপ্ত নাম: `GM`। একটি গ্রিড লাইন সরালে তার সেট বহন করে। {{cmd:GRIDMOVE}} একটি গ্রিড লাইন (এমন একটি লেয়ারের লাইন যার নামে grid বা axis আছে) এবং তার সঙ্গে যা ঝোলে তা সরায়: লাইনে একটি প্রান্ত থাকা দেয়াল তাকে অনুসরণ করতে প্রসারিত হয়, তার বরাবর থাকা দেয়াল পুরোটা সরে, কলাম (লাইনের উপরের ব্লক রেফারেন্স ও বৃত্ত), তার বাবল ও ট্যাগ সরে, এবং যে মাত্রার বিন্দু লাইনের উপর বসে তা নতুন ব্যবধান মাপে। দুটি বিন্দু দিন (শুধু লাইনের আড়াআড়ি অংশ গণনা হয়) বা `Distance`। এক পূর্বাবস্থার ধাপে সবটাই ফিরে আসে। এটি এই কম্পিউটারে নিয়মের মাধ্যমে করা হয়।

### DETAILS

সংক্ষিপ্ত নাম: `DET`। যে ডিটেইল আপনাকে খুঁজে পায়। {{cmd:DETAILS}} আপনার প্রতিষ্ঠানের নিজস্ব ডিটেইল রাখে: `Add` এই ড্রয়িংয়ের একটি ব্লককে তালিকায় রাখে, `List` ও `Remove` এটি পরিচালনা করে, `Find` নির্বাচিত বস্তুর (বা আপনি শেষবার যা আঁকেছেন তার) জন্য সেগুলোকে ক্রম দেয় লেয়ারের নাম, ব্লকের নাম, হ্যাচের প্যাটার্ন ও নোট দিয়ে, প্রতিটি ডিটেইলের নাম ও নোটের সঙ্গে মিলিয়ে, তাই একটি জানালার মাথা আপনার সিলের ফ্ল্যাশিং খুঁজে পায়। একটি নম্বর ও একটি বিন্দু বেছে এটি বসান। `Hint` চালু থাকলে (সেটিংস › CadCraft-এও), একটি ডিটেইলের সঙ্গে মিলে এমন কিছু নির্বাচন করলে স্ট্যাটাস বারে এক লাইন দেখায়। তালিকাটি এই ব্রাউজারে, এই কম্পিউটারে রাখা হয়, এবং এই তালিকাতেই খোঁজ হয়। `Share` এটি আপনার Documents ফোল্ডারেও রাখে (`.cadcraft/firm-details.json`, প্রতিটি ব্লকের ড্রয়িংসহ): `Pull` আপনার দলের যা আছে কিন্তু আপনার নেই তা যোগ করে, `Push` আপনার যা আছে কিন্তু তাদের নেই তা যোগ করে, `Both` দুটোই করে, এবং কোনো পক্ষ থেকে কিছুই সরে না। প্রথমে {{cmd:DOCUMENTS}} দিয়ে Documents ফোল্ডার খুলুন; সেই ফোল্ডারটি একটি Team Cloud Plan ফোল্ডার হলে পুরো দল একটি তালিকা ভাগ করে। লাইব্রেরি প্যানেলের একটি ডিটেইল আইটেমের একটি **Add to my firm's details** বোতাম আছে, যা একই তালিকায় রাখে। এই কম্পিউটারে শব্দ দিয়ে হিসাব হয়, কোনো মডেল ছাড়া।

### SKETCHFIX

সংক্ষিপ্ত নাম: `SKF`। কলমের স্কেচ সুনির্দিষ্ট জ্যামিতিতে পরিণত হয়। একবারে একটি হাতে আঁকা স্ট্রোক টেনে ধরুন (কলম, মাউস বা আঙুল), তারপর Enter। প্রতিটি স্ট্রোক একটি লাইন, বৃত্ত, আর্ক, আয়তক্ষেত্র বা পলিলাইন হিসেবে পড়া হয়: প্রায় সমতল ও লম্ব লাইনগুলো সঠিকভাবে সমতল ও লম্ব করা হয়, একটি বন্ধ গোল স্ট্রোক একটি বৃত্ত হয়, চারটি সমকোণ সহ একটি বন্ধ স্ট্রোক একটি আয়তক্ষেত্র, এবং স্ট্রোকের প্রান্তগুলো একত্র করা হয় এবং ড্রয়িংয়ে ইতিমধ্যে থাকা প্রান্তে টানা হয়। এক পূর্বাবস্থার ধাপ। এই কম্পিউটারে নিয়মের মাধ্যমে হিসাব হয়, কোনো মডেল ছাড়া।

### SCANATTACH ও স্ক্যান করা ড্রয়িংয়ের কমান্ডগুলো

সংক্ষিপ্ত নাম: `SCA` {{cmd:SCANATTACH}}-এর জন্য, `SCS` {{cmd:SCANSCALE}}-এর জন্য, `SCL` {{cmd:SCANALIGN}}-এর জন্য, `SCD` {{cmd:SCANDESKEW}}-এর জন্য, `SCC` {{cmd:SCANCLEAN}}-এর জন্য, `SCR` {{cmd:SCANCROP}}-এর জন্য, `SCE` {{cmd:SCANERASE}}-এর জন্য, `SCT` {{cmd:SCANTRACE}}-এর জন্য, `SCI` {{cmd:SCANINFO}}-এর জন্য; {{cmd:RASTERSNAP}}-এর কোনো নেই। এগুলো একটি ছবিতে কাজ করে, প্রতিটি এক পূর্বাবস্থার ধাপ। {{cmd:SCANATTACH}} একটি PNG, JPEG, TIFF (একটি পৃষ্ঠা বা সব পৃষ্ঠা) বা একটি ছবি-পৃষ্ঠা PDF ঢোকায়। {{cmd:SCANSCALE}} দুটি বাছাই করা বিন্দু ও প্রকৃত দূরত্ব থেকে শিটকে স্কেল করে। {{cmd:SCANALIGN}} এটিকে দুই বিন্দুতে সরায় ও ঘোরায় (`Scale the sheet to fit` Yes/No)। {{cmd:SCANDESKEW}} শিটের লম্বা লাইনগুলোর কোণ দেখায় এবং আপনি `Accept` বা একটি `Value` দিলে শিটটি ঘোরায়। {{cmd:SCANCLEAN}} এটিকে সাদা-কালো করে (`Threshold` Auto/Adaptive/Level, `Specks`) এবং `Run` করে। {{cmd:SCANCROP}} একটি উইন্ডো রাখে। {{cmd:SCANERASE}} একটি `Rectangle`, `Polygon` বা `Lasso` মোছে। {{cmd:SCANTRACE}} লাইন ও আর্ক একটি নতুন লেয়ারে আঁকে (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) এবং কী পেল ও কী রাস্টার হিসেবে রইল তা জানায়। {{cmd:SCANINFO}} মূল ফাইল ও ধাপগুলো তালিকা করে। {{cmd:RASTERSNAP}} স্ক্যান করা শিটের লাইনে স্ন্যাপ চালু বা বন্ধ করে। দেখুন স্ক্যান করা ড্রয়িং ও ট্রেস বিষয়টি।

### REGEN ও REGENALL

সংক্ষিপ্ত নাম: {{cmd:REGEN}}-এর জন্য `RE`, {{cmd:REGENALL}}-এর জন্য `REA`। ড্রয়িং থেকে পর্দায় আঁকা জিনিস আবার তৈরি করে: {{cmd:REGEN}} আপনি যে ট্যাবটি দেখছেন (শিটে, তার ভিউপোর্ট যে মডেল দেখায় সেটিও), {{cmd:REGENALL}} প্রতিটি ট্যাব, প্রতিটি স্প্লিট-স্ক্রিন প্যান ও প্রতিটি খোলা ড্রয়িং। ছবিটি একটি স্ক্রিপ্ট বা খুব বড় পরিবর্তনের পরে পুরোনো মনে হলে, বা কোনো সহকারী ড্রয়িংটি সম্পাদনা করলে এগুলো ব্যবহার করুন; ড্রয়িংটি নিজে স্পর্শ হয় না, তাই পূর্বাবস্থার কিছু নেই।

### NAMEDVIEW

সংক্ষিপ্ত নাম: `NV`, `VIEWS`। `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, তারপর ভিউয়ের নাম। `S` পর্দার ভিউ সংরক্ষণ করে, `W` আপনার বেছে নেওয়া একটি উইন্ডো, `R` একটি সংরক্ষিত ভিউ দেখায়, `D` একটি মোছে, `?` এই ট্যাবের ভিউগুলো তালিকা করে। একটি বিদ্যমান নামে সংরক্ষণ করলে তা বদলায়; প্রতিটি পরিবর্তন এক পূর্বাবস্থার ধাপ। ভিউ যে ট্যাবে সংরক্ষিত হয়েছিল সেটির সঙ্গে থাকে। DWG ও DXF ফাইল সেগুলো রাখে (VIEW টেবিল); একটি শিটের ভিউ প্রথম শিটে ফিরে আসে, কারণ ফাইলটি বলে না কোনটি।

### UNDO ও REDO

সংক্ষিপ্ত নাম: {{cmd:UNDO}}-এর জন্য `U`; {{cmd:REDO}}-এর কোনো নেই। এছাড়া {{key:Mod+Z}} ও {{key:Mod+Y}}।

### LAYER

সংক্ষিপ্ত নাম: `LA`। {{ui:Layers}} প্যানেলে যায়।

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` বা একটি নাম (`?` তালিকা দেয়: Continuous, ড্রয়িংয়ের নিজস্ব, এবং DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE, তাদের `2` (অর্ধেক) ও `X2` (দ্বিগুণ) আকারসহ)। {{cmd:LWEIGHT}} (`LW`): নতুন বস্তুর লাইনের পুরুত্ব mm-এ, বা `ByLayer`, `ByBlock`, `Default`। {{cmd:LTSCALE}} (`LTS`): ড্রয়িংয়ের লাইনটাইপ স্কেল (পূর্বাবস্থাযোগ্য)। {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — স্ট্যাটাস বারের {{ui:LWT}} বোতামের মতোই। দেখুন [লাইনের পুরুত্ব ও লাইনটাইপ](topic:units-papers-scales#line-weights-and-linetypes)।

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, তারপর নতুন নাম; বস্তু বা রেফারেন্স অনুসরণ করে। {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` Enter পর্যন্ত, তারপর `Select object on target layer or [Name]` ও `Y`। {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, তারপর `Y`: লেয়ার ও তার উপরের প্রতিটি বস্তু যায় (লেয়ার 0, DEFPOINTS বা বর্তমান লেয়ার নয়)। প্রতিটি এক পূর্বাবস্থার ধাপ। দেখুন [লেয়ার দিয়ে ড্রয়িং সাজান](topic:layers#rename-merge-and-delete-layers)।

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

বস্তু বেছে লেয়ার; {{ui:Layers}} প্যানেলের {{ui:Tools}} মেনুতেও। {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, তারপর {{key:Enter}}: অন্য সব লেয়ার বন্ধ হয়। {{cmd:LAYUNISO}} সেগুলো আবার চালু করে। {{cmd:LAYOFF}} ও {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (বা ফ্রিজ করা হবে), বারবার; `U` শেষটি ফিরিয়ে নেয়, {{key:Enter}} শেষ করে। {{cmd:LAYMCUR}}: `Select object whose layer will become current`। {{cmd:LAYON}} প্রতিটি লেয়ার চালু করে, {{cmd:LAYTHW}} প্রতিটি লেয়ার ফ্রিজ মুক্ত করে। প্রতিটি কমান্ড এক পূর্বাবস্থার ধাপ। দেখুন [বস্তু বেছে লেয়ারে কাজ করুন](topic:layers#work-on-layers-by-picking-objects)।

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} একটি খালি ড্রয়িং শুরু করে এবং {{cmd:OPEN}} একটি DWG বা DXF খোলে, প্রতিটি ড্রয়িংয়ের উপরে নিজস্ব ট্যাবে (একটি অপরিবর্তিত নতুন ড্রয়িং নতুন ট্যাবের বদলে ব্যবহৃত হয়)। অসংরক্ষিত পরিবর্তনসহ একটি ট্যাব বন্ধ করলে আগে জিজ্ঞাসা করে। দেখুন [পর্দা ভাগ করুন](topic:split-screen)।

{{cmd:SAVE}} (সংক্ষিপ্ত নাম `QSAVE`, এবং {{key:Mod+S}}) ড্রয়িংয়ের ফরম্যাটে একটি কপি ডাউনলোড করে: যদি DWG থেকে খোলা হয়ে থাকে তবে DWG, DXF থেকে হলে DXF। একটি নতুন ড্রয়িং এই ব্রাউজারে Save as-এ শেষবার যে ফরম্যাট বেছেছিলেন তা ব্যবহার করে, না হলে DWG।

{{cmd:SAVEAS}} (এবং {{key:Mod+Shift+S}}) {{ui:Save a copy as}} ডায়ালগ খোলে: {{ui:DWG}} (এবং তার {{ui:Version}}), {{ui:DXF R12}} বা {{ui:DXF 2000}} বেছে নিন, তারপর {{ui:Save}}। পছন্দটি এই ড্রয়িংয়ের জন্য এবং এই ব্রাউজারের নতুন ড্রয়িংয়ের জন্য থাকে।

{{cmd:DXFOUT}} সবসময় একটি DXF R12 কপি ডাউনলোড করে, {{cmd:SAVE}}-এর ব্যবহৃত ফরম্যাট না বদলে।

দেখুন [ফাইল: কী খোলে, কী সংরক্ষণ হয়](topic:files#saving)।

### TOUR

সংক্ষিপ্ত নাম: `TUTORIAL`। প্রথম ড্রয়িংয়ের ছয়-ধাপের সফর আবার শুরু করে। দেখুন [শুরু করা](topic:getting-started#prefer-to-be-guided)।

### TOOLBARDOCK

সংক্ষিপ্ত নাম: `TBDOCK`। `Toolbar position [Top/Bottom/Left/Right]`। দেখুন [সেটিংস](topic:settings#toolbar-position)।

### COMMANDLINE

সংক্ষিপ্ত নাম: `CMDLINE`। `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: কমান্ড লাইন ডক বা ভাসমান করে, এক লাইন করে, কতগুলো ইতিহাসের লাইন দেখাবে (0 থেকে 12) জিজ্ঞাসা করে, বা ইতিহাস খোলে। দেখুন [সেটিংস](topic:settings#command-line)।

### TOPAREA

`Top area [Standard/Compact]`: ড্রয়িংয়ের উপরের বারগুলো যেমন ছিল তেমন, বা কমপ্যাক্ট। দেখুন [সেটিংস](topic:settings#top-area)।

### POLARANG

`Enter polar angle step in degrees <90>`: যে ধাপে {{ui:Polar}} ট্র্যাকিং লাইন মেলায় (0-এর বেশি, 180 পর্যন্ত)। এই ব্রাউজারে মনে রাখা হয়।

### UNITS

সংক্ষিপ্ত নাম: `UN`। দৈর্ঘ্য কীভাবে লেখা ও টাইপ হয়।

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural ও Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`। বাকিগুলো: `Enter number of decimal places (0 to 8)`।

নতুন মাত্রা এটি অনুসরণ করে। এক পূর্বাবস্থার ধাপ। {{ui:Current settings}}-এর {{ui:Length format}} ও {{ui:Precision}}-এর মতোই; দেখুন [ফুট ও ইঞ্চি](topic:units-papers-scales#feet-and-inches-and-fractions)।

### GDSIN

সংক্ষিপ্ত নাম: `GDS`। একটি IC লেআউট দেখুন (একটি GDSII স্ট্রিম ফাইল): ল্যাব স্পাইক, শুধু দেখা ও মাপার জন্য।

- একটি ফাইল পিকার একটি `.gds` ফাইল নেয়; একাধিক টপ সেল থাকলে `Enter the top cell to draw`।
- প্রতিটি লেয়ার ও ডেটাটাইপ একটি ড্রয়িং লেয়ার হয় (`GDS 1`, `GDS 2/5`), রেফারেন্স ও অ্যারে সমতলভাবে বসে, ফাইলের ব্যবহারকারী এককে (সাধারণত মাইক্রোমিটার)। এক পূর্বাবস্থার ধাপ। কিছু সিমুলেট বা যাচাই হয় না এবং ফাইলটি ফিরে লেখা হয় না।

### DIAGRAM

সংক্ষিপ্ত নাম: `TEXTDIAGRAM`, `T2D`। টেক্সট থেকে একটি ডায়াগ্রাম।

- একটি বাক্স টেক্সট নেয় (বা কমান্ড লাইনে `;` দিয়ে আলাদা করা এক লাইন): একটি Mermaid ফ্লোচার্ট, একটি PlantUML কম্পোনেন্ট ডায়াগ্রাম, D2 বা একটি from-to তালিকা।
- `Specify the top left corner of the diagram`, তারপর `Specify the text height`।

ব্লক ও সংযোগকারী `Diagram` লেয়ারের সাধারণ বস্তু, শেষ হলে নির্বাচিত। এক পূর্বাবস্থার ধাপ। দেখুন [টেক্সট থেকে একটি ডায়াগ্রাম আঁকুন](topic:text-to-diagram)।

### OLELIST

সংক্ষিপ্ত নাম: `OLES`। একটি DWG-এর OLE বস্তুগুলো যা CadCraft নিজে বসাতে পারে না।

- প্রতিটি তালিকা করে: নম্বর, ধরন, আকার, একটি ছবি সংরক্ষিত হয়েছে কি না।
- `Enter an option [Place/eXit] <eXit>`: Place নম্বর, নিচের-বাঁ কোণ ও প্রস্থ চায়, এবং একটি ছবিসহ একটি ফ্রেম আঁকে। এক পূর্বাবস্থার ধাপ; সংরক্ষিত বস্তু বদলায় না। দেখুন [ছবি](topic:pictures#objects-from-other-programs-ole)।

### SHXFONTS

সংক্ষিপ্ত নাম: `SHX`। আপনার নিজের SHX ফন্ট।

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} একটি ফোল্ডারের প্রতিটি `.shx` পড়ে (CadCraft Studio; প্রতিটি শুরুতে আবার), {{ui:Files}} বাছাই করা ফাইল নেয় (ব্রাউজার), {{ui:Reverse}} একটি ফন্টের অক্ষরগুলো শেষ থেকে প্রথমে সাজায়। যে টেক্সট স্টাইল একটি লোড করা ফন্টের নাম দেয়, তা সেটিতে আঁকে। দেখুন [আপনার নিজের SHX ফন্টে টেক্সট আঁকুন](topic:shx-fonts)।

### LIMITS

ড্রয়িংটি কত বড় হওয়ার কথা।

- `Specify lower left corner or [ON/OFF] <current>`: একটি বিন্দু, `ON` বা `OFF`।
- `Specify upper right corner <current>`।

গ্রিড সীমা পূর্ণ করে, {{cmd:ZOOM}} All সেগুলো দেখায়, এবং সীমা ON থাকলে বাইরের একটি বিন্দু প্রত্যাখ্যাত হয় (`**Outside limits`)। এক পূর্বাবস্থার ধাপ; DWG ও DXF-এ সংরক্ষিত। দেখুন [ড্রয়িংয়ের সীমা ঠিক করুন](topic:drawing-limits)।

### AUNITS

সংক্ষিপ্ত নাম: `ANGUNITS`। কোণ কীভাবে দেখানো ও টাইপ হয়।

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, অথবা বাকি দুটির জন্য `Enter precision` (0 ডিগ্রি, 2 মিনিট, 4 সেকেন্ড, 5 থেকে 8 দশমিক স্থান সেকেন্ডের)।

এক পূর্বাবস্থার ধাপ; DWG ও DXF-এ সংরক্ষিত। {{ui:Current settings}}-এর {{ui:Angle format}}-এর মতোই। দেখুন [দিক ও কোণ টাইপ করুন ও দেখান](topic:bearings-and-angles)।

### APPLOAD

সংক্ষিপ্ত নাম: `AP`; অথবা {{ui:View}} › {{ui:More}} › {{ui:Load application…}}। {{ui:Load applications}} ডায়ালগ: `.lsp` রুটিন ও `.dcl` ডায়ালগ ফাইল লোড করুন, আনলোড করুন, ইতিহাস থেকে আবার লোড করুন, এবং Startup Suite। একটি রুটিনের `(defun c:NAME …)` কমান্ড তারপর অন্য যেকোনো কমান্ডের মতো কাজ করে। দেখুন [অ্যাপ্লিকেশন লোড করুন](topic:load-applications) ও [LISP রুটিন চালান](topic:run-lisp)।

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (বা {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) আপনার অ্যালিয়াস ফাইল খোলে (`ALIAS, *COMMAND` লাইন); {{ui:Save}} এটি প্রয়োগ করে। {{cmd:REINIT}} এটি আবার প্রয়োগ করে। দেখুন [কমান্ডের অ্যালিয়াস সম্পাদনা করুন](topic:command-aliases)।

### LISPEDIT

সংক্ষিপ্ত নাম: `VLIDE`; অথবা {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}। LISP সম্পাদক খোলে, একটি উইন্ডো যা ড্রয়িংয়ের পাশে খোলা থাকে।

- টেক্সট: লাইন নম্বর, কার্সরের বন্ধনীর জোড়াটি চিহ্নিত (না থাকলে লাল), {{key:Enter}} খোলা বন্ধনীর নিচে নতুন লাইনকে ইন্ডেন্ট করে, {{key:Tab}} দুটি স্থান টাইপ করে, {{key:Esc}} টেক্সট ছাড়ে।
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): প্রতিটি ফর্ম পড়ে, {{cmd:APPLOAD}} ফাইল দিয়ে যেমন করে, এবং তার `c:` কমান্ড তৈরি করে। ফাইলটি {{cmd:APPLOAD}}-এর তালিকায় দেখায়।
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): নির্বাচিত ফর্ম বা কার্সর যে ফর্মে আছে তা মূল্যায়ন করে।
- {{ui:Stop}}: চলমান একটি রুটিন শেষ করে।
- {{ui:Console}}: রুটিন যা প্রিন্ট করেছে এবং প্রতিটি ত্রুটি তার লাইনসহ; একটি ত্রুটিতে ক্লিক করলে সেখানে যায়। টেক্সটটি একবারে একটি উচ্চস্তরের ফর্ম চালায়, তাই লাইনটি সেই ফর্মের, বা তার ভেতরে যে ফাংশনের নাম ত্রুটি দেয় তাকে ডাকে সেই লাইন।
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): একটি `.lsp` ফাইল। টেক্সটটি এই ব্রাউজারেও রাখা হয়, তাই উইন্ডো বন্ধ করলে তা হারায় না।
- টেক্সটের পাশে: রুটিন যে ফাংশন সংজ্ঞায়িত করে, যেগুলো সে ডাকে কিন্তু এই LISP-এ এখনও নেই, যেগুলো ডাকে কিন্তু এতে সংজ্ঞায়িত বা অন্তর্নির্মিত নয়, এবং যা অন্তর্নির্মিত আর যা নয় তার পূর্ণ তালিকা।

যে টেক্সটের একটি বন্ধনী কখনো বন্ধ হয় না, বা একটি স্ট্রিং যা কখনো শেষ হয় না, তা চালানো হয় না: লাইনটি নাম ধরে জানানো হয়। ধাপে ধাপে ডিবাগার, ব্রেকপয়েন্ট বা ওয়াচ উইন্ডো নেই। দেখুন [LISP রুটিন চালান](topic:run-lisp)।

### HELP

সংক্ষিপ্ত নাম: `?`। প্রতিটি কমান্ড, তার সংক্ষিপ্ত নাম ও এক লাইনের বিবরণ কমান্ড লাইনের ইতিহাসে প্রিন্ট করে। এটি এই সাহায্য খোলে না: সেটির জন্য {{key:F1}} চাপুন বা {{ui:Help}} ক্লিক করুন।

## বস্তু নির্বাচন প্রম্পট

যেকোনো `Select objects` প্রম্পটে: বস্তুতে ক্লিক করুন, উইন্ডো আঁকুন (বাম থেকে ডানে) এবং ক্রসিং (ডান থেকে বাঁয়ে) দুটি ক্লিকে, অথবা একটি লাসো চেপে টেনে ধরুন ({{key:Space}} টানার সময়: উইন্ডো, ক্রসিং, বেড়া), অপসারণের জন্য {{key:Shift}}+ক্লিক, এবং শেষ করতে {{key:Enter}} চাপুন। আপনি `ALL` (সব), `L` (শেষ বস্তু), `P` (Previous: শেষ কমান্ড যা ব্যবহার করেছিল), `F` (Fence: একটি বিন্দুর রেখা যা বস্তুগুলো ছেদ করে; `U` একটি বিন্দু ফিরিয়ে নেয়), `W` (Window), `C` (Crossing), `R` (Remove মোড: বাছাই বস্তু সরায়; প্রম্পট `Remove objects` পড়ে), এবং `A` (আবার Add)-ও টাইপ করতে পারেন। `?` এগুলো তালিকা করে। এগুলো প্রম্পটে দেখানো হয় না। একে অপরের উপরে থাকা বস্তুর উপর {{key:Tab}} পরবর্তীটি হাইলাইট করে; বাছাই করতে ক্লিক করুন। দেখুন [বস্তু নির্বাচন](topic:select-objects)।

### ACCESS

সংক্ষিপ্ত নাম: `AX`। দৃষ্টিহীন অবস্থায় ড্রাফটিং। {{cmd:ACCESS}} Access চালু বা বন্ধ করে (`On`, `Off`) এবং স্ন্যাপের শব্দ (`Sound`) ও কণ্ঠের কমান্ড (`Voice`) পরিবর্তন করে; আগে অবস্থাটি জানায়। Access চালু থাকলে প্রতিটি কমান্ড ও ফলাফল আপনার স্ক্রিন রিডারের মাধ্যমে বলা হয়, এবং ড্রয়িং এলাকায় একটি কীবোর্ড কার্সর থাকে। "Draft without sight" সাহায্য বিষয়টিতে কী-গুলো আছে।

### DESCRIBE

সংক্ষিপ্ত নাম: `DESC`। ড্রয়িংয়ে কী আছে বলে: কতগুলো বস্তু, কোন ধরনের, কত বড়, কতগুলো লেয়ার, কী নির্বাচিত। শুধু পড়ে; কিছু বদলায় না।

### WHEREAMI

সংক্ষিপ্ত নাম: `WHERE`। কার্সর কোথায় আছে বলে, ড্রয়িংয়ের এককে।

### NEARBY

কার্সরের কাছে কী আছে বলে, নিকটতম প্রথমে, প্রতিটির সঙ্গে তার দূরত্ব ও যে পাশে আছে।

### SAYSEL

কী নির্বাচিত তা বলে, প্রতি বস্তুর জন্য এক বাক্য (লাইনের দৈর্ঘ্য, প্রান্ত ও কোণ; বৃত্তের ব্যাসার্ধ ও কেন্দ্র; টেক্সট যেমন লেখা)।

### VOICE

কণ্ঠের কমান্ড চালু বা বন্ধ করে। এগুলো এই কম্পিউটারে স্বীকৃত হয়; যেখানে ব্রাউজার তা করতে পারে না, সেখানে আপনি সেটিংসে ব্রাউজারের অনলাইন সেবা না বেছে নিলে ভয়েস বন্ধ থাকে।

### TOUCHCROSSHAIR

সংক্ষিপ্ত নাম: `TCX`। আঙুল দিয়ে ড্রাফটিংয়ের জন্য অফসেট ক্রসহেয়ার, যাতে আঙুলের ডগা আপনার বাছাই করা বিন্দু ঢেকে না দেয়। চালু থাকাকালে, ড্রয়িংয়ে এক আঙুল কিছু বাছে না: এটি একটি ক্রসহেয়ার সরায় যা আঙুলের উপরে ও এক পাশে থাকে। অবজেক্ট স্ন্যাপ ও ট্র্যাকিং ক্রসহেয়ার অনুসরণ করে। আঙুল তুললে কিছু বাছাই হয় না এবং ক্রসহেয়ার যেখানে ছিল সেখানে থাকে। বাছাই করতে ড্রয়িংয়ের কোণের {{ui:Click}} বোতাম চাপুন, বা দ্বিতীয় আঙুল দিয়ে ড্রয়িংয়ের যেকোনো জায়গায় ট্যাপ করুন। অন্য আঙুল সরানোর সময় {{ui:Click}} ধরে রাখুন টানার জন্য (একটি নির্বাচন উইন্ডো, লাসো, বা একটি গ্রিপ)। একটি আঙুল স্থির রেখে চেপে ধরলে, বা {{ui:Enter}} বোতাম, তা Enter। দুই আঙুল আগের মতো প্যান ও জুম করে। নিচের প্রান্তের কাছে এবং দূরের পাশের প্রান্তে ক্রসহেয়ার আঙুলের কাছে সংকুচিত হয়, যাতে ড্রয়িংয়ের প্রতিটি অংশে পৌঁছানো যায়। কলম ও মাউস সরাসরি বাছাই করে।

{{cmd:TOUCHCROSSHAIR}} অবস্থা জানায় এবং `ON`, `OFF`, `Auto` (শুধু যখন আঙুলই একমাত্র পয়েন্টার; তাই মাউসযুক্ত কম্পিউটারে বন্ধ), `Distance` (ক্রসহেয়ার আঙুল থেকে কতটা দূরে থাকবে, 24 থেকে 240 পিক্সেল) বা `Side` (`Left`: উপরে ও বাঁয়ে, ডান হাতের জন্য; `Right` বাঁ হাতের জন্য; বোতামগুলো অন্য কোণে যায়) জিজ্ঞাসা করে। একই পছন্দগুলো সেটিংস › CadCraft-এও আছে, এবং টাচ স্ক্রিনের ডিভাইসে স্ট্যাটাস বারে {{ui:Offset crosshair}} সুইচ আছে। পছন্দগুলো এই ব্রাউজারে রাখা হয়।

### WHOHAS

কে একটি ড্রয়িং খুলে রেখেছে তা বলে। একটি কম্পিউটারে CadCraft Studio-তে একটি DWG বা DXF খুললে তার পাশে একটি ছোট লক ফাইল লেখা হয় (`Plan.dwg.cclock`: কে, কখন থেকে, কোন সংস্করণ), ড্রয়িং খোলা থাকাকালে প্রতি মিনিটে এটি হালনাগাদ হয়, এবং ড্রয়িং বন্ধ হলে সেটি সরানো হয়। অন্য কেউ যে ড্রয়িং খুলে রেখেছে তা খুললে কে ও কখন থেকে তা বলে এবং {{ui:Open read-only}} (তারপর সংরক্ষণ নতুন নাম চায়), {{ui:Open anyway}} (অন্য ব্যক্তিকে তাদের পরের হালনাগাদে জানানো হয়) বা {{ui:Cancel}} দেয়। অন্য কারও খোলা ফাইলের উপরে সংরক্ষণ করার আগে জিজ্ঞাসা করে। পাঁচ মিনিটে হালনাগাদ না হওয়া লককে পুরোনো বলা হয়: অন্য কপিটি সংরক্ষণ না করেই বন্ধ হয়েছে, বা কম্পিউটারটি ঘুমে আছে।

{{cmd:WHOHAS}} `Current` (খোলা ড্রয়িং), `File` (একটি বেছে নিন), `FOlder` (একটি ফোল্ডার বেছে নিন: সেখানে যে প্রতিটি ড্রয়িং কোথাও খোলা আছে তা তালিকা হয়), `Path` (একটি পূর্ণ পথ টাইপ করুন) বা `Name` (অন্যরা যে নাম দেখে; আপনি সাইন ইন থাকলে আপনার অ্যাকাউন্টের নাম) জিজ্ঞাসা করে। Studio শুধু সেইসব ফোল্ডারে পৌঁছাতে পারে যা আপনি বেছেছেন: যে ফোল্ডার কখনও বেছে নেওয়া হয়নি সেখান থেকে খোলা ড্রয়িংয়ের জন্য এটি একবার জানায় যে ড্রয়িংটিকে খোলা হিসেবে নোট করা যাচ্ছে না; `FOlder` ফোল্ডার বেছে নেয়, এবং তারপর সেখানে লক কাজ করে। লকটি মানুষের জন্য একটি নোট, বাধা নয়: অন্য প্রোগ্রাম এখনও ফাইলটি লিখতে পারে। একটি ব্রাউজারে কোনো ফোল্ডার দেখার সুযোগ নেই, এবং কমান্ডটি তা জানায়।

### OVERKILL

ডুপ্লিকেট বস্তু মোছে এবং ওভারল্যাপিং লাইন ও আর্ক গুছিয়ে দেয়, দ্বিগুণ লাইনওয়ার্ক নিয়ে আসা ড্রয়িংয়ের জন্য। `Select objects to clean up`, {{key:Enter}}, তারপর দেখানো সেটিংসে পরিষ্কার করতে আবার {{key:Enter}}, অথবা আগে একটি বদলান:

- `Tolerance`: দুটি স্থানাঙ্ক কতটা কাছাকাছি হলে একই ধরা হবে (শুরুতে 0.000001; 0 মানে হুবহু একই)।
- `Ignore`: যে বৈশিষ্ট্যগুলো দুটি অন্যথায় একই বস্তুতে ভিন্ন হতে পারে। একটি নাম টাইপ করে তা বদলান: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, বা `None` / `All`। শেষ হলে {{key:Enter}}।
- `Overlap`: চালু বা বন্ধ। চালু থাকলে একই সরল রেখায় ওভারল্যাপ করা লাইনগুলো একটি লাইন হয় (অন্য লাইনের ভেতরে থাকা লাইন শুধু মুছে যায়), এবং একই বৃত্তে ওভারল্যাপ করা আর্কগুলো একটি আর্ক হয়; যে আর্ক পূর্ণ এক পাক বন্ধ করে তা একটি বৃত্ত হয়, এবং বৃত্তে থাকা আর্ক মুছে যায়।
- `Ends`: চালু বা বন্ধ। চালু থাকলে একই সরল রেখার লাইন এবং একই বৃত্তের আর্ক যারা শুধু প্রান্ত থেকে প্রান্তে স্পর্শ করে তারা একটি অংশ হয়।

প্রতিটি ধরনের বস্তু ডুপ্লিকেটের জন্য পরীক্ষা হয়: দুটি বস্তু ডুপ্লিকেট যখন তাদের জ্যামিতি সহনশীলতার মধ্যে একই এবং তাদের লেয়ার, রং, লাইনটাইপ, লাইনটাইপ স্কেল, লাইনের পুরুত্ব, পুরুত্ব, স্বচ্ছতা ও উচ্চতা মেলে (আপনি যেগুলো উপেক্ষা করেন তা বাদে)। লাইন ও খোলা পলিলাইন উল্টো দিকে আঁকা হলেও মেলে। প্রথম বস্তুটি আঁকার ক্রমে থাকে এবং তার নিজের বৈশিষ্ট্য রাখে। কমান্ডটি জানায় কতগুলো বস্তু পরীক্ষা ও মুছেছে: ডুপ্লিকেট, মেশানো ওভারল্যাপিং টুকরো, প্রান্ত থেকে প্রান্তে জোড়া টুকরো। একটি {{cmd:UNDO}} সবটাই ফিরিয়ে নেয়। সেটিংসগুলো ড্রয়িং উইন্ডো বন্ধ করা পর্যন্ত থাকে।

এটি যা ছেড়ে দেয়: লক করা লেয়ারের বস্তু এবং লুকানো বস্তু। এটি উচ্চতা (Z) সহ লাইন মেশায় না (তাদের হুবহু ডুপ্লিকেট তবু যায়), এবং পলিলাইনের ভেতরের অংশগুলো স্পর্শ করে না (সেগুলো পাতলা করা হয় না), পলিলাইনের একটি অংশের উপর থাকা লাইন, এবং উল্টো দিকে আঁকা বন্ধ পলিলাইন।

### DRAWORDER

কোন বস্তু সামনে আঁকা হবে তা বদলায়। `Select objects to re-order`, {{key:Enter}}, তারপর `Above objects`, `Under objects`, `Front` বা `Back` ({{key:Enter}} = `Back`)। `Above objects` ও `Under objects` রেফারেন্স বস্তু চায়: নির্বাচন তাদের সবচেয়ে সামনের বস্তুর ঠিক সামনে যায়, বা সবচেয়ে পিছনেরটির ঠিক পিছনে। নির্বাচিত বস্তুগুলো নিজেদের মধ্যে নিজেদের ক্রম রাখে। এক পূর্বাবস্থার ধাপ। ক্রমটি DWG ও DXF-এ ড্রয়িংয়ের সঙ্গে সংরক্ষিত হয়, যেখানে এটি বস্তুগুলো যে ক্রমে লেখা হয় তাই।

পর্দায় CadCraft আগে ভরাট এলাকা (কঠিন হ্যাচ, চওড়া পলিলাইন, মাস্ক) আঁকে, তারপর লাইনওয়ার্ক, তারপর টেক্সট, তাই টেক্সট সবসময় ভরাটের উপর পড়া যায়; আঁকার ক্রম ভরাট বস্তু ও ছবিগুলোর মধ্যে দেখা যায়। অন্য প্রোগ্রাম যারা ফাইলটি খোলে তারা প্রতিটি বস্তু সংরক্ষিত ক্রমে আঁকে।

### TEXTTOFRONT

খোলা স্থানে টেক্সট, মাত্রা ও লিডার অন্য সবকিছুর সামনে আনে: `Text`, `Dimensions`, `Leaders` বা `All` ({{key:Enter}} = `All`)। এক পূর্বাবস্থার ধাপ। কিছু না থাকলে, বা সেগুলো আগে থেকেই সামনে থাকলে তা জানায়।

### HATCHTOBACK

খোলা স্থানের প্রতিটি হ্যাচকে অন্য সবকিছুর পিছনে পাঠায়, যাতে সংরক্ষিত ফাইলে ভরাট আর লাইনওয়ার্ক ও টেক্সট ঢেকে না রাখে। কোনো প্রম্পট নেই। এক পূর্বাবস্থার ধাপ।

### ISOLATEOBJECTS

সংক্ষিপ্ত নাম: `ISOLATE`। শুধু নির্বাচিত বস্তু দেখায়: খোলা স্থানের বাকি সবকিছু {{cmd:UNISOLATEOBJECTS}} পর্যন্ত দৃষ্টির বাইরে যায়। {{cmd:LAYISO}}-এর মতো নয়, এটি আপনার বাছাই করা বস্তুতে কাজ করে তাদের লেয়ার যা-ই হোক, এবং কোনো লেয়ার বদলায় না। লুকানো বস্তু আঁকা, বাছাই, স্ন্যাপ, জুম বা প্লট হয় না, এবং `ALL` নেওয়া কমান্ডগুলো তাদের এড়িয়ে যায়। বস্তু আলাদা থাকাকালে যা আঁকেন তা স্বাভাবিকভাবে দেখায়।

এটি শুধু এই সেশনের জন্য: এ সম্পর্কে কিছুই ড্রয়িংয়ের সঙ্গে সংরক্ষিত হয় না, এটি কোনো পূর্বাবস্থার ধাপ নয়, এবং ড্রয়িং আবার খুললে সবকিছু দেখায়। বস্তু লুকানো থাকাকালে স্ট্যাটাস বারে তাদের সংখ্যাসহ একটি বোতাম দেখায়; তাদের আবার দেখাতে সেটিতে ক্লিক করুন।

### HIDEOBJECTS

{{cmd:UNISOLATEOBJECTS}} পর্যন্ত নির্বাচিত বস্তু লুকায়। {{cmd:ISOLATEOBJECTS}}-এর একই নিয়ম: শুধু এই সেশনের জন্য, সংরক্ষিত নয়, কোনো পূর্বাবস্থার ধাপ নয়।

### UNISOLATEOBJECTS

সংক্ষিপ্ত নাম: `UNISOLATE`, `UNHIDE`। {{cmd:ISOLATEOBJECTS}} বা {{cmd:HIDEOBJECTS}}-এর দ্বারা লুকানো প্রতিটি বস্তু আবার দেখায়, এবং কতগুলো ফিরল তা জানায়।

### LAYLOCKFADE

লক করা লেয়ারের বস্তু কেমন দেখাবে এবং একটি ক্লিক তাদের পৌঁছাতে পারবে কি না তা ঠিক করে। এটি বর্তমান অবস্থা বলে, তারপর নেয়:

- 0 থেকে 90-এর একটি সংখ্যা: শতাংশে ফিকে হওয়ার মাত্রা (শুরুতে 50)। 0 ফিকে হওয়া বন্ধ করে।
- `ON` বা `OFF`: ফিকে হওয়া চালু বা বন্ধ, মাত্রা রেখে।
- `Pick`, তারপর `Yes` বা `No`: কোনো কমান্ড না চললে একটি ক্লিক কি লক করা লেয়ারের বস্তু নির্বাচন করতে পারবে? `No` (ডিফল্ট): সেগুলো আদৌ বাছা যায় না। `Yes`: একটি ক্লিক বা উইন্ডো তাদের নির্বাচন করে যাতে {{ui:Properties}} তাদের দেখাতে পারে; তবু তাদের বদলানো যায় না, এবং কোনো কমান্ডের নিজস্ব `Select objects` তাদের কখনও নেয় না।

অবজেক্ট স্ন্যাপ উভয় ক্ষেত্রেই লক করা লেয়ারের বস্তু খুঁজে পায়। প্লট কখনও ফিকে হয় না। দুটি সেটিংই আপনার, ড্রয়িংয়ের নয়, এবং {{ui:Settings}}-এর {{ui:Locked layers}}-এও আছে।

### BURST

ব্লক রেফারেন্স ভাঙে এবং তাদের অ্যাট্রিবিউট যা বলে তা রাখে। `Select block references to burst`, {{key:Enter}}: প্রতিটি রেফারেন্স ব্লকের বস্তু দিয়ে প্রতিস্থাপিত হয়, এবং প্রতিটি দৃশ্যমান অ্যাট্রিবিউটের মান সেই অ্যাট্রিবিউটের নিজের লেয়ারে সাধারণ টেক্সট হয় (লেয়ার 0-এর একটি অ্যাট্রিবিউট রেফারেন্সের লেয়ারে পড়ে, ব্লকের অন্য লেয়ার-0 বস্তুর মতো)। অদৃশ্য অ্যাট্রিবিউট বাদ যায়। ব্লকের ভেতরের একটি ব্লক একটি ব্লক রেফারেন্স থাকে। এক পূর্বাবস্থার ধাপ; এটি কতগুলো রেফারেন্স ভাঙল এবং কতগুলো অ্যাট্রিবিউট মান টেক্সটে বদলাল তা জানায়।

এটি একটি লিংক করা ড্রয়িং নাম ধরে প্রত্যাখ্যান করে (আগে এটি বাঁধুন, বা {{cmd:NCOPY}} দিয়ে তা থেকে কপি করুন), এবং নির্বাচিত অন্য বস্তু অপরিবর্তিত রাখে। ব্লক রেফারেন্সের জন্য {{cmd:EXPLODE}} একই বস্তু দেয়; {{cmd:BURST}} শুধু ব্লক রেফারেন্স নেয় এবং অ্যাট্রিবিউট টেক্সট গণনা করে।

### TXT2MTXT

সংক্ষিপ্ত নাম: `T2M`। একলাইন টেক্সটগুলো একটি অনুচ্ছেদ টেক্সটে জোড়া দেয়। `Select single-line text to join`, {{key:Enter}}, তারপর `Paragraph` (লাইনগুলো একসঙ্গে চলে এবং সবচেয়ে চওড়া লাইনের প্রস্থে মোড়ে) বা `Lines` (প্রতিটি টেক্সট নিজের লাইন থাকে); {{key:Enter}} শেষবার যেটি ব্যবহৃত হয়েছিল তা নেয়। লাইনগুলো উপর থেকে নিচে, তারপর বাঁ থেকে ডানে, উপরের টেক্সটের দিক বরাবর সাজানো হয়। অনুচ্ছেদটি উপরের টেক্সটের উপরের-বাঁ কোণ থেকে ঝোলে এবং তার উচ্চতা, ঘূর্ণন, স্টাইল, লেয়ার ও রং নেয়। এক পূর্বাবস্থার ধাপ।

যে টেক্সট আগে থেকেই অনুচ্ছেদ টেক্সট, ফাঁকা টেক্সট এবং নির্বাচনের অন্য বস্তু অপরিবর্তিত থাকে, এবং কমান্ডটি কতগুলো তা জানায়।

### NCOPY

একটি ব্লক রেফারেন্স বা একটি লিংক করা ড্রয়িং থেকে বস্তু ড্রয়িংয়ে কপি করে, কিছু না ভেঙে। `Pick an object inside a block reference or a linked drawing`: যে বস্তুটি আপনার বাছাইয়ের সবচেয়ে কাছে তা যেখানে দেখা যায় সেখানেই কপি হয়, তা যত ব্লক গভীরেই থাকুক; আরও বাছুন, তারপর {{key:Enter}}। পরের `Base point to move the copies`: {{key:Enter}} সেগুলো জায়গায় রাখে, অথবা একটি বেস বিন্দু ও একটি দ্বিতীয় বিন্দু দিন। পুরো কমান্ড এক পূর্বাবস্থার ধাপ।

একটি কপি যে লেয়ারে দেখায় সেটিই নেয়: একটি ব্লকের ভেতরে লেয়ার 0-এর বস্তু যে রেফারেন্সে ছিল সেই রেফারেন্সের লেয়ারে যায়, এবং একটি ByBlock রং সেই রেফারেন্সের রং হয়ে যায়। একটি লিংক করা ড্রয়িং থেকে লেয়ার `Plan|Walls` হয় `Plan$0$Walls` (লিংকটি যে নাম বাঁধে), এবং লিংক করা লেয়ারের রং, লাইনটাইপ ও লাইনের পুরুত্ব নিয়ে তৈরি হয়। একটি অ্যাট্রিবিউটের মান টেক্সট হিসেবে কপি হয়। লক করা লেয়ারের ব্লক রেফারেন্স বাছা যায় না।

### FLATTEN

নির্বাচিত বস্তুর উচ্চতা (Z) ও পুরুত্ব 0 করে। `Select objects to flatten`, {{key:Enter}}। নির্বাচনটি যে ব্লক সংজ্ঞা ব্যবহার করে সেগুলোর ভেতরের বস্তুও সমতল করে (এবং সেগুলোর ভেতরের ব্লকও), তাই সেই ব্লকের প্রতিটি রেফারেন্স বদলায়; লিংক করা ড্রয়িংগুলো যেমন আছে তেমন থাকে। এক পূর্বাবস্থার ধাপ; কতগুলো বস্তু বদলেছে তা জানায়, এবং কোনোটির উচ্চতা বা পুরুত্ব না থাকলে তাও জানায়।

একটি 2D ড্রয়িংয়ে তৃতীয় মাত্রার কী CadCraft রাখে: বৃত্ত, আর্ক, উপবৃত্ত, বিন্দু, টেক্সট, ব্লক রেফারেন্স, হ্যাচ, লিডার ও পলিলাইনে উচ্চতা (তাদের এলিভেশন), একটি লাইনের প্রতিটি প্রান্তে একটি উচ্চতা, এবং লাইন, বৃত্ত, আর্ক, পলিলাইন, বিন্দু ও টেক্সটে একটি পুরুত্ব, ফাইলে যেমন ছিল তেমন। {{cmd:FLATTEN}} ঠিক সেগুলোই সাফ করে। এটি 3D ট্যাবের 3D মডেল, 3D ফেস বা সলিডে হাত দেয় না, এবং ফাইল খোলার সময় একটি কাত তলে থাকা বস্তু আগেই ড্রয়িং তলে আনা হয়ে গেছে।

### BREAKLINE

একটি ভাঙার চিহ্নসহ একটি লাইন আঁকে, একটি ভিউর জন্য যা ছোট করে কাটা। এটি বর্তমান আকার ও বিস্তার জানায়, তারপর `First point of the break line` (বা `Size` / `Extension` আগে বদলাতে), `Second point`, এবং `Where the break symbol sits`: লাইন বরাবর ক্লিক করুন, বা মাঝখানের জন্য {{key:Enter}}। ফলটি বর্তমান লেয়ারে একটি পলিলাইন: লাইনটি, প্রতিটি বিন্দুর বাইরে বিস্তারের সমান দূরে যায়, একটি Z-আকৃতির স্ট্রোক সহ যা আকারের সমান লম্বা এবং অর্ধেক চওড়া।

`Size` ও `Extension` আপনার সেটিং হিসেবে মনে রাখা হয় (আকার শুরু হয় মাত্রা টেক্সটের উচ্চতার দ্বিগুণ এবং মাত্রা স্কেল গুণে; বিস্তার আকারের অর্ধেক)। {{key:Enter}} কমান্ডটি আবার চালায়।

### AUDIT

ড্রয়িংয়ের ক্ষতি পরীক্ষা করে এবং মেরামত করে। {{cmd:AUDIT}} মডেলের, শিটের এবং ব্লকের ভেতরের প্রতিটি বস্তু এবং লেয়ার টেবিল দেখে, এবং যা পায় তা ধরন অনুযায়ী তালিকা করে:

- সীমাবদ্ধ নয় এমন বা অস্বাভাবিক বড় সংখ্যা;
- আকারহীন বস্তু: শূন্য দৈর্ঘ্যের লাইন, শূন্য ব্যাসার্ধের বৃত্ত, একটি বিন্দু না থাকা পলিলাইন, অক্ষরহীন বা উচ্চতাহীন টেক্সট, শূন্য স্কেলের একটি ব্লক রেফারেন্স;
- এমন লেয়ারে বস্তু যা ড্রয়িংয়ে নেই; সেখানে না থাকা ব্লকের রেফারেন্স; টেক্সট ও মাত্রা স্টাইলের নাম এবং লাইনটাইপের নাম যা ড্রয়িংয়ে নেই;
- নিজেদের ধারণ করা ব্লক, সরাসরি বা অন্য ব্লকের মাধ্যমে;
- একই আইডি, কী বা ফাইল হ্যান্ডেল ভাগ করা বস্তু;
- যেসব বিন্দু থেকে মাপা হয়েছে তা ছাড়া মাত্রা, এবং যে হ্যাচের সীমানা বন্ধ রূপরেখা নয়।

তারপর এটি `Fix them? [Yes/No]` জিজ্ঞাসা করে। `No` কিছু বদলায় না। `Yes` সবকিছু এক পূর্বাবস্থার ধাপে মেরামত করে: যা আঁকা যায় না তা সরানো হয় (খারাপ সংখ্যা, আকারহীন, অনুপস্থিত ব্লক, ভাঙা মাত্রা, কোনো ব্যবহারযোগ্য সীমানা নেই এমন হ্যাচ, ব্লকের বৃত্ত বন্ধ করা রেফারেন্স); একটি অনুপস্থিত লেয়ার তৈরি হয়; অজানা স্টাইল ও লাইনটাইপের নাম ডিফল্টে ফেরে; একটি শেয়ার করা কী বদলানো হয়। কতগুলো বস্তু সরানো ও কতগুলো মেরামত হয়েছে তা প্রিন্ট করে। একই ফলাফল Problems প্যানেলেও দেখা যায়, প্রতিটির নিজের {{ui:Repair}} সহ।

এটি কিছু প্রত্যাখ্যান করে না, কিন্তু শুধু সেগুলোই পরীক্ষা করে যা CadCraft নিজে আঁকে: অন্য প্রোগ্রামের জন্য রাখা ডেটা (3D সলিড, OLE বস্তু) খোলা হয় না।

### RECOVER

একটি ক্ষতিগ্রস্ত DXF বা DWG খোলে। {{cmd:RECOVER}} ফাইলটি চায়, যা পড়া যায় তা পড়ে ফাইল প্রত্যাখ্যান না করে, যা বাদ দিল বা ধরে নিল তার তালিকা দেয়, তারপর {{cmd:AUDIT}} `Yes` দিয়ে যেমন করে তেমন ড্রয়িং পরীক্ষা ও মেরামত করে।

- DXF: যেসব লাইন কোড ও মান জোড়ার অংশ নয় সেগুলো বাদ যায়, যতক্ষণ না জোড়াগুলো আবার মেলে; শেষ-ছাড়া সেকশন বন্ধ হয়; কাটা ফাইল কাটা জায়গা পর্যন্ত পড়া হয়; কাটা বাইনারি DXF তার শেষ সম্পূর্ণ মান পর্যন্ত পড়া হয়। যখন একটি সেকশন, একটি ব্লক বা একটি বস্তু তবু পড়া যায় না, তখন তা বাদ যায় ও নাম দিয়ে জানানো হয়, এবং পড়া তার পরেও চলে।
- DWG: যে বস্তু তার পরীক্ষায় ব্যর্থ বা ডিকোড হয় না তা বাদ যায়, এবং হারানো বস্তুর তালিকা বস্তুর ডেটা হেঁটে আবার তৈরি হয়।

ডিস্কের ফাইলটি বদলায় না। পুনরুদ্ধার করা ড্রয়িং অসংরক্ষিত অবস্থায় খোলে: নতুন নামে সংরক্ষণ করুন। যে ফাইল থেকে কিছুই পড়া যায় না তা কারণসহ প্রত্যাখ্যাত হয়।

### LEGACYTEXT

পুরোনো 8-বিট ভিয়েতনামী ফন্টে টাইপ করা টেক্সট Unicode-এ রূপান্তর করে। সংক্ষিপ্ত নাম `TEXTTOUNICODE` ও `VNTEXT`।

পুরোনো ভিয়েতনামী ড্রয়িংয়ে টেক্সট পশ্চিমা অক্ষর হিসেবে থাকে, যা শুধু ফন্ট ভিয়েতনামী বানায়: TCVN3 টেক্সট ABC ফন্টে (`.VnTime`, `.VnArial`, এবং নাম যেগুলো `H` দিয়ে শেষ হয় সেই বড়হাতের ফন্ট), এবং VNI টেক্সট VNI ফন্টে (`VNI-Times`)। CadCraft এমন টেক্সট ড্রয়িং খোলার সঙ্গে সঙ্গে যেমন পড়ে তেমন দেখায়, তার টেক্সট স্টাইলের, বস্তুর, বা অনুচ্ছেদ টেক্সটের একটি অংশের ফন্ট দিয়ে; ফাইলে তবু পুরোনো অক্ষরগুলো থাকে।

{{cmd:LEGACYTEXT}} প্রতিটি এনকোডিংয়ে কতগুলো টেক্সট পেল তা জানায় এবং `Convert … to Unicode?` জিজ্ঞাসা করে। `Yes` প্রতিটিকে নতুন করে লেখে (মডেল, শিট, ব্লক, অ্যাট্রিবিউট মান ও সংজ্ঞা), এবং টেক্সট স্টাইলগুলোকে একটি Unicode ফন্ট দেয় (পুরোনো ফন্টের ধরন অনুসারে Times New Roman, Arial বা Courier New), এক পূর্বাবস্থার ধাপে। অনুচ্ছেদ টেক্সটের ভেতরের ফরম্যাট রাখা হয়।

যখন কোনো টেক্সট একটি পরিচিত ফন্ট ব্যবহার করে না (যে স্টাইলের ফন্টের নাম হারিয়েছে), তখন এটি `Read selected texts as [Tcvn3/Vni/None]` জিজ্ঞাসা করে: এনকোডিং বেছে নিন এবং টেক্সটগুলো নির্বাচন করুন। ইতিমধ্যে Unicode টেক্সট অপরিবর্তিত থাকে। মাত্রার টেক্সট ওভাররাইড ও মাল্টিলিডার টেক্সট রূপান্তরিত হয় না।
