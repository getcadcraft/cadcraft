---
title: कमांड संदर्भ
summary: CadCraft ड्राफ़्टिंग ऐप का हर कमांड, उसके उपनाम, उसके सवाल, उसके विकल्प और डिफ़ॉल्ट।
keywords: कमांड, उपनाम, कमांड सूची, क्षेत्रफल, परिमाप, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

कमांड का नाम या उपनाम टाइप करें और {{key:Enter}} या {{key:Space}} दबाएँ। अक्षरों का बड़ा या छोटा होना मायने नहीं रखता, और पहला `_`, `-`, `.` या `'` अनदेखा किया जाता है। कमांड इतिहास में हर कमांड की छोटी सूची छापने के लिए `HELP` (या `?`) टाइप करें; इस सहायता को देखने के लिए {{key:F1}} दबाएँ।

प्रॉम्प्ट कैसे पढ़ें: विकल्प वर्गाकार ब्रैकेट में होते हैं, और आप किसी एक को उसके बड़े अक्षर टाइप करके चुनते हैं (`D` व्यास के लिए)। डिफ़ॉल्ट कोणीय ब्रैकेट में होता है; उसे स्वीकार करने के लिए {{key:Enter}} दबाएँ। जहाँ कोई बिंदु माँगा जाए, वहाँ आप क्लिक कर सकते हैं या [निर्देशांक और दूरी दर्ज करना](topic:coordinate-entry) में दिए किसी भी प्रारूप में टाइप कर सकते हैं। जहाँ दूरी माँगी जाए, वहाँ आप एक संख्या टाइप कर सकते हैं या दो बिंदुओं पर क्लिक कर सकते हैं।

जहाँ कोई बिंदु या ऑब्जेक्ट ज़रूरी हो और कोई डिफ़ॉल्ट न हो, वहाँ {{key:Enter}} दबाने से कमांड खत्म हो जाता है। {{key:Esc}} उसे रद्द करता है। कमांड ने जो भी किया, वह एक पूर्ववत करने का चरण है।

## ड्रॉ

### LINE

उपनाम: `L`। सीधे खंड, हर एक अपना अलग ऑब्जेक्ट।

- `Specify first point` (Enter: आपके दिए आखिरी बिंदु से शुरू करें)
- `Specify next point [Undo]`, बार-बार आता है। दो खंडों के बाद: `[Undo/Close]`।
- `U` आखिरी खंड वापस लेता है, `C` पहले बिंदु तक बंद करके समाप्त करता है। Enter समाप्त करता है।

### PLINE

उपनाम: `PL`। लाइन और चाप खंडों की एक पॉलीलाइन।

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (दो खंड होने पर Close)
- `A` चापों पर जाता है: `Specify endpoint of arc [Line/CLose/Undo]`। हर चाप पिछले खंड के साथ स्पर्शरेखा में जारी रहता है। `L` वापस लाइनों पर जाता है, `CL` चाप से बंद करता है।
- Enter समाप्त करता है; पॉलीलाइन खुली रहती है।

### CIRCLE

उपनाम: `C`।

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` पूछता है `Specify diameter of circle`।
- `2P`: व्यास के दो सिरे। `3P`: वृत्त पर तीन बिंदु।
- `T` (साथ ही कमांड `TTR`, और {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, फिर दूसरा, फिर त्रिज्या (Enter: आखिरी वाली)। वृत्त दोनों ऑब्जेक्ट को छूता है (लाइनें, चाप, वृत्त, पॉलीलाइन के खंड, ब्लॉक के अंदर भी); जो वृत्त ऐसा करते हैं उनमें से वह जो आपके चुने बिंदुओं के सबसे नज़दीक हो। कोई फ़िट न हो तो "Circle does not exist" दिखता है।
- `TTT` (या {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): तीन ऑब्जेक्ट; वह वृत्त जो तीनों को छूता है, आपके चुने बिंदुओं के सबसे नज़दीक (तीन लाइनें अंदर या बाहर का वृत्त देती हैं, इस पर निर्भर कि आप कहाँ क्लिक करते हैं)।

### ARC

उपनाम: `A`।

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: तीन बिंदुओं से होकर एक चाप।
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`। चाप शुरू से अंत तक वामावर्त (counterclockwise) चलता है।

### RECTANG

उपनाम: `REC`, `RECTANGLE`। एक बंद पॉलीलाइन।

- `Specify first corner point`, `Specify other corner point`। दूसरे कोने के लिए `@width,height` टाइप करें।

### POLYGON

उपनाम: `POL`। एक नियमित बहुभुज, बंद पॉलीलाइन के रूप में।

- `Enter number of sides <4>` (3 से 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: क्लिक करें या एक बिंदु टाइप करें; उसकी दूरी आकार तय करती है और उसकी दिशा बहुभुज को घुमाती है।

### ELLIPSE

उपनाम: `EL`।

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, फिर दूसरे अक्ष की दूरी।
- `I` (`Isocircle`, केवल तब जब {{cmd:ISODRAFT}} चालू हो): केंद्र, फिर त्रिज्या या `Diameter`: वह दीर्घवृत्त जो एक वृत्त मौजूदा आइसोमेट्रिक प्लेन पर दिखता है।

### HATCH

उपनाम: `H`, `BH`, `BHATCH`; या टूलबार में {{ui:Hatch}}। पहले मौजूदा पैटर्न, स्केल और कोण छापता है।

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, बार-बार (`Undo` एक क्षेत्र आने के बाद): हर क्लिक उसके आसपास का बंद क्षेत्र जोड़ता है, और उसके अंदर के बंद आकार द्वीप (islands) बनते हैं। Enter सभी से एक हैच बनाता है।
- `S`: `Select closed objects` (बंद पॉलीलाइनें, वृत्त, बंद दीर्घवृत्त)।
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`। `SC`: `Specify pattern scale`। `A`: `Specify pattern angle`।
- `G` (ग्रेडिएंट): भराव पैटर्न की जगह ग्रेडिएंट होता है। उसके सवालों के लिए {{cmd:GRADIENT}} देखें।

देखें [हैच और भराव क्षेत्र](topic:hatch)।

### GRADIENT

उपनाम: `GD`। एक या दो रंगों के ग्रेडिएंट से एक क्षेत्र भरता है। पहले ग्रेडिएंट के सवाल पूछता है, फिर {{cmd:HATCH}} की तरह चलता है (`Pick internal point`, बंद ऑब्जेक्ट के लिए `S`, समाप्त करने के लिए {{key:Enter}})।

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, बार-बार; हर बार यह ग्रेडिएंट को अभी जैसा है छापता है।
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, या उनमें से एक उलटा (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`)। शुरुआती अक्षर काफ़ी हैं।
- `O`: एक रंग, फिर 0 से 1 तक उसकी छाया (0 उसे काला करता है, 0.5 रंग खुद है, 1 उसे सफ़ेद करता है)। `TW`: पहला और दूसरा रंग। रंग 1 से 255 तक की संख्या है, `255,128,0` जैसे तीन अंक, या `#rrggbb`।
- `A`: वह कोण जिस पर ग्रेडिएंट चलता है। `C`: केंद्रित Yes या No (No ग्रेडिएंट के बीच को एक तरफ़ ले जाता है)।
- जो रंग या प्रकार वह नहीं जानता, और 0 से 1 के बाहर की छाया, उसे अस्वीकार करता है।

{{cmd:HATCHEDIT}} `G` और Properties (Gradient) बाद में ग्रेडिएंट बदलते हैं, या कोई भी हैच उसमें बदलते हैं। ग्रेडिएंट स्क्रीन पर दिखता है और प्लॉट होता है। DWG 2004 और बाद के संस्करण इसे असली ग्रेडिएंट हैच के रूप में रखते हैं; DXF 2000 और DWG 2000 इसे CadCraft के लिए रखते हैं, और दूसरे प्रोग्राम पहले रंग का ठोस भराव देखते हैं।

### HATCHGENERATEBOUNDARY

उपनाम: `HGB`। जो हैच अपनी सीमा खो चुका है, उसकी सीमा फिर से बनाता है। `Select hatches` (या पहले चुनें), फिर `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`।

- हैच का हर लूप उसकी लेयर पर एक बंद पॉलीलाइन बन जाता है; नई पॉलीलाइनें चुनी हुई छोड़ दी जाती हैं। एक घुमावदार किनारा हैच द्वारा रखे गए छोटे सीधे टुकड़ों के रूप में लौटता है।
- Yes के साथ हैच अपनी नई सीमा का अनुसरण करता है, जैसे {{cmd:HATCH}} से बनी हैच करती है। एक पूर्ववत करने का चरण।
- कोई हैच न चुनी गई हो तो यह बताता है।

### POINT

उपनाम: `PO`; या {{ui:Draw}} › {{ui:More}} › {{ui:Point}}। हर क्लिक पर एक बिंदु ऑब्जेक्ट, Enter तक।

- `Specify a point`

### XLINE

उपनाम: `XL`; या {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}। निर्माण रेखाएँ, दोनों ओर अंतहीन। देखें [निर्माण रेखाएँ और किरणें](topic:construction-lines)।

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, फिर हर रेखा के लिए `Specify through point`, Enter तक।
- `A`: `Enter angle of construction line [Reference] <0>`; `R` पहले `Select a line object` पूछता है।
- `B`: `Specify angle vertex point`, `Specify angle start point`, फिर हर रेखा के लिए `Specify angle end point`।
- `O`: `Specify offset distance [Through] <Through>`, फिर हर रेखा के लिए `Select a line object` और `Specify side to offset` (या `Specify through point`)।

### RAY

कोई उपनाम नहीं; या {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}। `Specify start point`, फिर हर किरण के लिए `Specify through point`, Enter तक।

### TEXT

उपनाम: `DT`, `DTEXT`; या टूलबार में {{ui:Text}}। एक पंक्ति का टेक्स्ट; हर पंक्ति अपना अलग ऑब्जेक्ट है।

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, फिर `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, बार-बार: हर Enter नीचे की अगली पंक्ति शुरू करता है। खाली पंक्ति पर Enter समाप्त करता है। यहाँ {{key:Space}} एक स्पेस टाइप करता है।

### DIVIDE

उपनाम: `DIV`। {{cmd:DIVIDE}} एक लाइन, चाप, वृत्त, पॉलीलाइन, स्प्लाइन या दीर्घवृत्त पर ऐसे निशान लगाता है जो उसे बराबर भागों में काटते हैं। ऑब्जेक्ट चुनें, फिर भागों की संख्या दें (2 से 32767)। खुले ऑब्जेक्ट को भागों से एक निशान कम मिलता है; बंद ऑब्जेक्ट को उसके आरंभ पर भी निशान मिलता है। ऑब्जेक्ट खुद नहीं कटता। निशान बिंदु होते हैं; `Block` इसके बजाय इस ड्रॉइंग का एक ब्लॉक माँगता है और यह कि वह ऑब्जेक्ट के साथ घूमे या नहीं। स्प्लाइन और दीर्घवृत्त पर लंबाइयाँ छोटी जीवाओं (chords) के साथ मापी जाती हैं। यह टेक्स्ट, हैच और दूसरे ऑब्जेक्ट जिनकी कोई लंबाई नहीं होती, उन्हें अस्वीकार करता है।

### MEASURE

उपनाम: `ME`। {{cmd:MEASURE}} एक लाइन, चाप, वृत्त, पॉलीलाइन, स्प्लाइन या दीर्घवृत्त के साथ हर दी गई लंबाई पर एक निशान लगाता है, उस सिरे से गिनते हुए जो आपके चुनाव के सबसे नज़दीक है (बंद ऑब्जेक्ट: उसके आरंभ से)। लंबाई टाइप करके या दो बिंदुओं से दें। खुले ऑब्जेक्ट के दूर वाले सिरे पर कोई निशान नहीं लगता। `Block` हर निशान पर एक बिंदु के बजाय एक ब्लॉक रखता है। यह 0 की लंबाई, ऑब्जेक्ट से लंबी लंबाई, और 32767 से ज़्यादा निशान बनाने वाली लंबाई को अस्वीकार करता है।

### BOUNDARY

उपनाम: `BO`, `BPOLY`। {{cmd:BOUNDARY}} उस क्षेत्र के चारों ओर एक बंद पॉलीलाइन बनाता है जिसमें आपका चुना बिंदु है, स्क्रीन पर उसे घेरती लाइनों, चापों, वृत्तों, पॉलीलाइनों और वक्रों से। वृत्त या चाप पर पड़े हिस्से चाप खंडों के रूप में लौटते हैं; दीर्घवृत्त और स्प्लाइन के हिस्से छोटे सीधे खंडों के रूप में। `Islands` चालू होने पर (शुरुआती सेटिंग), उसके अंदर का हर बंद क्षेत्र भी अपनी पॉलीलाइन पाता है। बिंदु चुनते रहें; Enter समाप्त करता है। क्षेत्र को घेरने वाले ऑब्जेक्ट जैसे हैं वैसे रहते हैं। यदि कोई बंद क्षेत्र उस बिंदु को न घेरे तो यह बताता है।

### BLEND

{{cmd:BLEND}} दो खुले वक्रों के सिरों के बीच एक स्प्लाइन बनाता है। जुड़ने के लिए हर वक्र को उसके सिरे के पास चुनें। `CONtinuity` चुनता है `Tangent` (स्प्लाइन दोनों वक्रों के साथ-साथ निकलती और पहुँचती है) या `Smooth` (यह सिरों पर उनके मुड़ने के ढंग के साथ भी मुड़ती है); यह चुनाव सत्र के लिए रखा जाता है। दोनों वक्र नहीं बदलते। यह बंद ऑब्जेक्ट और ऐसे दो सिरों को अस्वीकार करता है जो पहले से मिलते हैं।

### REGION

उपनाम: `REG`। {{cmd:REGION}} बंद ऑब्जेक्ट को regions में बदलता है: समतल क्षेत्र जिन्हें आप जोड़, काट और माप सकते हैं। वृत्त, बंद पॉलीलाइनें, बंद दीर्घवृत्त या बंद स्प्लाइनें चुनें, या लाइनें, चाप और खुली पॉलीलाइनें जो सिरे से सिरा मिलकर एक लूप बनाएँ; हर लूप एक region बनता है और उस ऑब्जेक्ट की जगह ले लेता है जिससे वह आया। चाप चाप रहते हैं; दीर्घवृत्त और स्प्लाइन छोटे सीधे खंड बन जाते हैं। जो बंद नहीं है और कोई लूप नहीं बनाता, वह वैसा ही रहता है, और यह बताता है कि कितने ऐसे थे। ड्रॉइंग में एक region एक या अधिक बंद पॉलीलाइनें होता है जो एक बेनाम समूह के रूप में जुड़ी हैं, इसलिए एक क्लिक पूरा region चुनता है और एक प्रति अपना अलग region होती है; वह फ़ाइल खोलने वाले दूसरे प्रोग्राम बंद पॉलीलाइनें देखते हैं।

ड्रॉइंग में regions होने पर 2D टैब पर {{cmd:UNION}}, {{cmd:SUBTRACT}} और {{cmd:INTERSECT}} regions पर काम करते हैं: `UNION` चुने हुए regions को एक में जोड़ता है (जो regions अलग-अलग हैं वे एक region के कई रूपरेखा बन जाते हैं); `SUBTRACT` पहले वे regions माँगता है जिनमें से घटाना है और फिर वे जो हटाने हैं (छेद region का हिस्सा रहता है); `INTERSECT` वह क्षेत्र रखता है जो वे सब साझा करते हैं। हर एक परिणाम का क्षेत्रफल बताता है और एक पूर्ववत करने का चरण है। जब कुछ नहीं बचेगा या कुछ साझा नहीं है, तो वे मना करते हैं। 3D टैब पर, और ऐसी ड्रॉइंग में जिसमें कोई region नहीं, वही कमांड पहले की तरह ठोस आकृतियों पर काम करते हैं।

## संशोधित करें

उपनाम: `MT`, `T`; या टूलबार में {{ui:Paragraph}}। अनुच्छेद टेक्स्ट जो एक चौड़ाई पर लिपटता है, उसी जगह टाइप होता है।

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: दोनों कोनों के बीच की चौड़ाई वह जगह है जहाँ टेक्स्ट लिपटता है। `H` `Specify height` पूछता है, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)`, और दूसरा कोना छोड़ देता है।
- फिर ड्रॉइंग पर एक बॉक्स खुलता है: टाइप करें, नए अनुच्छेद के लिए {{key:Enter}}, समाप्त करने के लिए {{key:Mod+Enter}} या बाहर क्लिक, रद्द करने के लिए {{key:Esc}}। उसकी पट्टी ऊँचाई, लाइन स्पेसिंग, चौड़ाई और संरेखण सेट करती है। देखें [टेक्स्ट और लेबल जोड़ें](topic:text#write-a-note-that-wraps)।

### TEXTEDIT

उपनाम: `ED`, `DDEDIT`; या टेक्स्ट पर डबल-क्लिक करें। `Select a text to edit`, Enter तक बार-बार: हर एक उसी बॉक्स में खुलता है। किसी चुने हुए या डबल-क्लिक किए टेक्स्ट पर शुरू हो तो वह उसी एक को संपादित करता है और समाप्त हो जाता है।

### ERASE

उपनाम: `E`, `DELETE`; या ऑब्जेक्ट चुने होने पर {{key:Delete}} दबाएँ।

- `Select objects` (ऑब्जेक्ट पहले से चुने हों तो छूट जाता है)

### MOVE

उपनाम: `M`।

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, `dx,dy` के रूप में टाइप किया गया।

### COPY

उपनाम: `CO`, `CP`। जितने बिंदु आप देते हैं उतनी बार कॉपी करता है।

दूसरे-बिंदु वाले प्रॉम्प्ट पर `Array` एक बार में एक पंक्ति बनाता है: आइटम की संख्या दें (मूल भी एक गिना जाता है), फिर वह बिंदु जहाँ पहली प्रति जाती है; बाकी उसी दूरी पर चलते हैं। `Fit` उस बिंदु को आखिरी प्रति की जगह बनाता है, और बीच की प्रतियाँ समान रूप से फैलती हैं।

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, Enter तक बार-बार। `U` आखिरी प्रति वापस लेता है।

### ROTATE

उपनाम: `RO`।

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: डिग्री में, वामावर्त धनात्मक; या किसी बिंदु पर क्लिक करें ताकि वह उसकी ओर घूमे।

### SCALE

उपनाम: `SC`।

- `Select objects`, `Specify base point`
- `Specify scale factor`: `0.5` या `2` जैसा कारक टाइप करें। क्लिक किया गया बिंदु उसकी आधार बिंदु से दूरी को कारक बनाता है।

### MIRROR

उपनाम: `MI`।

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

उपनाम: `AL`; या {{ui:Modify}} › {{ui:More}} › {{ui:Align}}।

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- दो जोड़ों के साथ: `Scale objects based on alignment points? [Yes/No] <N>`

देखें [ऑब्जेक्ट संरेखित करें](topic:modify-objects#align-objects)।

### ALIGNTO

- `Select objects` (या चयन), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` बिंदु माँगता है। चयन बना रहता है।

### DISTRIBUTE

- `Select objects` (कम से कम तीन), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`। बाहरी दो अपनी जगह रहते हैं; चयन बना रहता है।

### ALIGNPANEL

उपनाम: `ALP`; या {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}। वह पैनल खोलता है जो क्लिक से ALIGNTO और DISTRIBUTE चलाता है।

### LASER

उपनाम: `LASERCUT`; या {{ui:View}} › {{ui:More}} › {{ui:Laser…}}। ड्रॉइंग पर Laser पैनल खोलता है: हर लेयर क्या करती है (cut, score, engrave, fill, picture), पूर्वावलोकन, सहेजने योग्य GRBL G-code, और Web Serial पर फ़्रेमिंग और भेजना। देखें [ड्रॉइंग को लेज़र पर भेजें](topic:laser-cutting)।

### STRETCH

उपनाम: `S`; या {{ui:Stretch}}। `Select objects to stretch`: हिलाने के लिए सिरों पर क्रॉसिंग विंडो खींचें (या `C` टाइप करें)। `Specify base point [Displacement]`, `Specify second point`। विंडो के अंदर के बिंदु हिलते हैं: लाइन के सिरे, पॉलीलाइन के वर्टेक्स (चाप खंड अपनी ऊँचाई रखते हैं), डाइमेंशन बिंदु; वृत्त, दीर्घवृत्त, टेक्स्ट, बिंदु और ब्लॉक पूरे हिलते हैं जब उनका केंद्र या डालने का बिंदु अंदर हो। कमांड से पहले किया गया चयन उन क्रॉसिंग विंडो (और लैसो) को रखता है जिन्होंने उसे बनाया, ताकि वे उसी तरह खिंचें। बिना किसी विंडो के, ऑब्जेक्ट पूरे हिलते हैं।

### ARRAY, ARRAYRECT, ARRAYPOLAR

उपनाम: `AR`; या {{ui:Array}}। `Select objects`, फिर `Enter array type [Rectangular/POlar] <Rectangular>` (केवल ARRAY)।

- Rectangular 4 कॉलम × 3 पंक्तियों से शुरू होता है, ऑब्जेक्ट के आकार के 1.5 गुना दूरी पर, एक पूर्वावलोकन के रूप में। `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` कॉलम और पंक्तियाँ पूछता है, `S` कॉलमों और पंक्तियों के बीच की दूरी (ऋणात्मक बाएँ या नीचे जाता है), `COL` और `R` हर एक दिशा।
- Polar `Specify center point of array` पूछता है, 6 आइटम पूरे चक्कर में शुरू होते हैं, घुमे हुए। `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` आइटम, `F` वह कोण जो भरना है (+ वामावर्त, − दक्षिणावर्त), `ROT` Yes या No।
- {{key:Enter}} (eXit) प्रतियाँ बनाता है, सादे ऑब्जेक्ट के रूप में। एक पूर्ववत करने का चरण।
- `AS` (ASsociative) सादी प्रतियों और एक ऐसे ऐरे के बीच बदलता है जो संपादन योग्य रहे: एक ऑब्जेक्ट जिसे आप बाद में {{cmd:ARRAYEDIT}} से, उसकी ग्रिप से, या Properties में बदलते हैं। चुनाव याद रखा जाता है ({{cmd:ARRAYASSOCIATIVITY}}); यह सादी प्रतियों से शुरू होता है।

### ARRAYPATH

एक वक्र के साथ प्रतियाँ। `Select objects`, फिर `Select path curve`: एक लाइन, चाप, वृत्त, दीर्घवृत्त, पॉलीलाइन या स्प्लाइन (ऐरे किए जा रहे ऑब्जेक्ट में से नहीं)। पथ अपने उस सिरे से शुरू होता है जो ऑब्जेक्ट के नज़दीक है, और पहला आइटम वे ऑब्जेक्ट हैं जहाँ वे अभी हैं।

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, पूर्वावलोकन के साथ। `M`: `Divide` आइटम पूरे पथ पर समान रूप से फैलाता है, `Measure` हर इतनी दूरी पर एक रखता है। `I`: आइटम की संख्या (Measure के साथ 0 का अर्थ है जितने फ़िट हों); पथ के अंत से बड़ी संख्या उस पर सीमित होती है जो फ़िट होता है। `SP`: आइटमों के बीच पथ पर दूरी (Measure पर स्विच करता है)। `AL`: Yes हर आइटम को पथ के साथ घुमाता है, No उन्हें सीधा रखता है।
- `AS` {{cmd:ARRAY}} की तरह। चालू होने पर ऐरे पथ के आकार की अपनी प्रति रखता है: बाद में पथ वक्र संपादित करने से आइटम नहीं हिलते।
- यह ऐसे पथ को अस्वीकार करता है जो वक्र नहीं है, और एक आइटम को भी।

### ARRAYEDIT

ASsociative से बने ऐरे को बदलता है। `Select array` (या पहले चुनें)। यह बताता है कि ऐरे अभी क्या है, फिर {{key:Enter}} तक पूछता है:

- Rectangular: `COL` कॉलम और उनकी दूरी, `R` पंक्तियाँ और उनकी दूरी, `A` वह कोण जिस पर कॉलम चलते हैं।
- Polar: `I` आइटम, `F` भरने का कोण, `ROT` आइटम घुमाएँ Yes या No।
- Path: `M` Divide या Measure, `I` आइटम, `SP` दूरी, `AL` पथ के साथ संरेखित।
- `S` (Source) वे ऑब्जेक्ट खोलता है जिन्हें ऐरे दोहराता है, अकेले, ब्लॉक एडिटर की तरह। वहाँ बनाएँ और संपादित करें; {{cmd:ARRAYCLOSE}} सहेजता या छोड़ता है, और हर आइटम साथ चलता है।
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, फिर बदलने के लिए आइटमों पर क्लिक करें, {{key:Enter}}। वे आइटम उसकी जगह प्रतिस्थापन दिखाते हैं; प्रतिस्थापन ऑब्जेक्ट ड्रॉइंग से निकलकर ऐरे में रहते हैं। `RES` (RESet) हर आइटम में मूल स्रोत ऑब्जेक्ट फिर दिखाता है।
- हर बदलाव एक पूर्ववत करने का चरण है। यह सादी प्रतियों, एक सादे ब्लॉक संदर्भ, और लॉक लेयर पर के ऐरे को अस्वीकार करता है।

वही संख्याएँ Properties में Array के तहत हैं, और ऐरे की ग्रिप हैं: उसका बेस बिंदु उसे हिलाता है, दूसरे आइटम की ग्रिप दूरी सेट करती है, आखिरी आइटम के बाद की ग्रिप गिनती (polar में दूसरा आइटम कितने आइटम, और आखिरी आइटम भरने का कोण)। {{cmd:EXPLODE}} ऐरे को वापस सादी प्रतियों में बदलता है।

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} Source को समाप्त करता है: `Save the changes to the array's source objects? [Save/Discard] <Save>`। जब कोई ऐरे का स्रोत ऑब्जेक्ट खुला न हो तो यह बताता है। {{cmd:BCLOSE}} भी यही करता है।

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`। सेट करता है कि {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR और {{cmd:ARRAYPATH}} किससे शुरू हों; उनका विकल्प `AS` वही सेटिंग बदलता है। इस ब्राउज़र में याद रखा जाता है।

### OFFSET

उपनाम: `O`। लाइनें, चाप, वृत्त और पॉलीलाइनें।

जहाँ पॉलीलाइन बाहर की ओर हटती है और उसके सीधे खंड एक कोने पर अलग होते हैं, वहाँ {{cmd:OFFSETGAPTYPE}} तय करता है कि खाली जगह कैसे बंद हो।

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, फिर `Specify point on side to offset` (या Through के साथ, `Specify through point`), Enter तक बार-बार।

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: {{cmd:OFFSET}} पॉलीलाइन के बाहरी कोनों पर खाली जगहें कैसे बंद करता है। `0` खंडों को तब तक बढ़ाता है जब तक वे मिल न जाएँ (शुरुआती सेटिंग), `1` पुराने कोने के चारों ओर एक चाप से जोड़ता है, `2` एक सीधे कट से। भीतरी कोने और चाप खंड प्रभावित नहीं होते। इस सत्र के लिए रखा जाता है।

### EXTRIM

{{cmd:EXTRIM}} किनारे की एक तरफ़ की हर चीज़ ट्रिम करता है। कटिंग किनारा चुनें (लाइन, चाप, वृत्त, पॉलीलाइन, दीर्घवृत्त, स्प्लाइन या निर्माण रेखा), फिर उस तरफ़ का एक बिंदु चुनें जिसे साफ़ करना है: हर लाइन, चाप, वृत्त, पॉलीलाइन और निर्माण रेखा जो किनारे को काटती है, वह उस तरफ़ का अपना हिस्सा खो देती है, जहाँ वह किनारे से शुरू होती है। तरफ़ चुनते समय जो टुकड़े जाएँगे वे पॉइंटर का अनुसरण करते हैं। बंद किनारे के लिए तरफ़ें अंदर और बाहर हैं। जो ऑब्जेक्ट केवल किनारे को छूते हैं, और टेक्स्ट, हैच, स्प्लाइन और दीर्घवृत्त जो उसे पार करते हैं, वे जैसे हैं वैसे रहते हैं। एक पूर्ववत करने का चरण।

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: {{cmd:TRIM}} और {{cmd:EXTEND}} कैसे शुरू हों। `1` Quick: हर ऑब्जेक्ट एक कटिंग किनारा या सीमा है। `0` Standard: वे पहले किनारे माँगते हैं। LISP में `(setvar "TRIMEXTENDMODE" 0)` भी।

### TRIM

उपनाम: `TR`। पहले `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` छापता है। Quick मोड में हर दिखने वाला ऑब्जेक्ट कटिंग किनारा है, और जिस ऑब्जेक्ट को कुछ भी नहीं काटता वह मिट जाता है; Standard मोड में वह पहले `Select cutting edges (Enter = every object)` पूछता है और केवल उन्हीं पर काटता है।

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, बार-बार: हटाने के लिए टुकड़े पर क्लिक करें (पॉइंटर उस पर रुके तो वह स्लेटी और डैश्ड दिखता है), कई टुकड़ों से होकर एक पथ खींचें (सब एक चरण में जाते हैं), या उनके बीच दो खाली जगहों पर क्लिक करके एक बाड़ बनाएँ। {{key:Shift}} इसकी जगह बढ़ाता है। `T` कटिंग किनारे चुनता है (Standard मोड), `F` बाड़ के बिंदु पूछता है, `C` दो विंडो कोने (जो टुकड़े आंशिक रूप से अंदर हैं वे जाते हैं), `O` `Enter a trim mode option [Quick/Standard]` पूछता है, `E` `Enter an implied edge extension mode [Extend/No extend]` पूछता है (EDGEMODE), `R` चुने हुए ऑब्जेक्ट मिटाता है, `U` आखिरी चुनाव या खिंचाव वापस लेता है। Enter समाप्त करता है। देखें [ट्रिम और बढ़ाना](topic:trim-and-extend)।

- हैच पर क्लिक हैच को काटता है: कटिंग किनारे हैच वाले क्षेत्र को बाँटते हैं, और जिस टुकड़े पर आपने क्लिक किया वह हटा दिया जाता है (जहाँ वह था वहाँ कोई बनी रेखा नहीं बचती)। हैच अपना पैटर्न या ग्रेडिएंट रखता है; जो हैच अपनी सीमा से जुड़ी थी, वह उसके बाद नहीं जुड़ी रहती, क्योंकि अब वह उसे नहीं भरती। जब वहाँ कोई कटिंग किनारा हैच को न बाँटे, जब क्लिक हैच से बाहर हो, और जब कुछ न बचे (तब {{cmd:ERASE}} इस्तेमाल करें), तो यह बताता है। खींचा गया पथ या बाड़ हैच नहीं काटते।

### EXTEND

उपनाम: `EX`। TRIM का उल्टा: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`। एक क्लिक उसके नज़दीकी सिरे को अगली सीमा तक बढ़ाता है; खींचा गया पथ या बाड़ जिन ऑब्जेक्ट को पार करता है उन सबको बढ़ाता है; {{key:Shift}} ट्रिम करता है। `B` सीमा किनारे चुनता है (Standard मोड)। मोड और Edge TRIM के साथ साझा हैं।

### LINKVIEWS

उपनाम: `SYNCVIEWS`; या {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, या ड्रॉइंग टैब पर लिंक आइकन। `Link the panes' views [ON/OFF]` (Enter दूसरी स्थिति लेता है): चालू होने पर सक्रिय खंड में पैन या ज़ूम वही तरह का स्पेस दिखाने वाले हर खंड को हिलाता है। देखें [स्क्रीन बाँटें](topic:split-screen)।

### OPENIN3D

कोई उपनाम नहीं; या {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}}, जहाँ 3D मॉडलिंग ऐप सौंपी गई ड्रॉइंग लेता है। उसे वहाँ नए टैब में DWG के रूप में खोलता है (कुछ अपलोड नहीं होता)। यदि ब्राउज़र टैब रोक दे तो यह बताता है।

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: किसी खाली जगह पर दबाकर खींचने से क्या बनता है। वही जो Settings › CadCraft › Dragging to select में है। देखें [लैसो चयन](topic:lasso-selection)।

### FILLET

उपनाम: `F`। लाइनें, चाप, वृत्त और पॉलीलाइनें। पहले `Current settings: Mode = TRIM, Radius = 0` छापता है।

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` `Specify fillet radius <last>` पूछता है। `T` `Enter Trim mode option [Trim/No trim]` पूछता है: No trim के साथ ऑब्जेक्ट जैसे हैं वैसे रहते हैं और केवल चाप जुड़ता है।
  - `M` और कोनों के लिए कमांड चलता रहता है, Enter तक; `U` कमांड छोड़े बिना आखिरी कोना वापस लेता है।
  - `P` `Select 2D polyline [Radius]` पूछता है और हर उस कोने को गोल करता है जहाँ दो सीधे खंड मिलते हैं। जिन फ़िलेट पर वह पहले से है, वे नई त्रिज्या से बदल जाते हैं; त्रिज्या 0 उन्हें हटा देती है। जिन कोनों की भुजाएँ त्रिज्या के लिए बहुत छोटी हैं, वे छोड़ दिए जाते हैं और गिने जाते हैं।
- `Select second object or shift-select to apply corner [Radius]`। तीखे कोने के लिए क्लिक करते समय {{key:Shift}} दबाएँ, त्रिज्या चाहे जो हो।

हर ऑब्जेक्ट को उस हिस्से पर क्लिक करें जो आप रखना चाहते हैं। जो दो लाइनें नहीं मिलतीं, वे बढ़ाई जाती हैं। दो समांतर लाइनों के बीच की खाली जगह पर एक अर्धवृत्त बनता है, पहली लाइन के उस सिरे पर जो आपके क्लिक के नज़दीक है। वृत्त कभी नहीं काटा जाता। एक ही पॉलीलाइन के बगल के दो खंडों को पॉलीलाइन के भीतर चाप मिलता है; पॉलीलाइन और दूसरा ऑब्जेक्ट तब काम करते हैं जब कट पॉलीलाइन के पहले या आखिरी खंड पर पड़े।

### CHAMFER

उपनाम: `CHA`। लाइनें और पॉलीलाइनों के सीधे खंड। पहले मौजूदा दूरियाँ (या लंबाई और कोण) छापता है।

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` `Specify first chamfer distance <last>` और `Specify second chamfer distance <the first>` पूछता है: पहली दूरी आपकी चुनी पहली लाइन से कटती है, दूसरी दूसरी से।
  - `A` `Specify chamfer length on the first line` और `Specify chamfer angle from the first line` पूछता है।
  - `E` (mEthod) चुनता है कि अगला चैम्फ़र दोनों में से कौन सी विधि इस्तेमाल करे। `T`, `M`, `U` और `P` {{cmd:FILLET}} की तरह काम करते हैं।
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`। {{key:Shift}}+क्लिक तीखा कोना बनाता है।

लाइन से लंबी दूरी को अस्वीकार किया जाता है (`Distance is too large.`)।

### BREAK और BREAKATPOINT

उपनाम: `BR`। `Select object` (जहाँ आप क्लिक करते हैं वह पहला बिंदु है), `Specify second break point [First point]`; `F` `Specify first break point` और `Specify second break point` पूछता है। बीच का हिस्सा हट जाता है; वृत्त पर, पहले बिंदु से वामावर्त। BREAKATPOINT `Specify break point` पूछता है और ऑब्जेक्ट को वहीं दो भागों में बाँटता है (वृत्त नहीं)।

### LENGTHEN

उपनाम: `LEN`। `Select an object to measure [DElta/Percent/Total/DYnamic]`: एक चयन `Current length` (और चाप का अंतर्गत कोण) छापता है और फिर पूछता है। `DE` `Enter delta length (negative shortens) [Angle]` पूछता है, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` खींचता है। फिर `Select an object to change [Undo]`, बार-बार: क्लिक के नज़दीकी सिरा हिलता है। लाइनें, चाप और खुली पॉलीलाइनें।

### JOIN

उपनाम: `J`। `Select objects to join`। लाइनें, चाप और खुली पॉलीलाइनें जो सिरे से सिरा मिलती हैं, पॉलीलाइनें बनती हैं (बंद, जब शृंखला बंद हो); एक ही रेखा की लाइनें एक लाइन बनती हैं; एक ही वृत्त के चाप एक चाप या वृत्त बनते हैं। इतिहास बताता है कितने ऑब्जेक्ट जुड़े और कितने नहीं।

### MATCHPROP

उपनाम: `MA`, `PAINTER`। `Select source object`, फिर `Select destination objects [Settings]` और {{key:Enter}}। लेयर और रंग कॉपी करता है, और एक ही प्रकार के ऑब्जेक्ट के बीच टेक्स्ट की ऊँचाई और चौड़ाई, डाइमेंशन के आकार, या हैच पैटर्न। `S` `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` पूछता है, Enter तक बार-बार; चुनाव सत्र के लिए याद रखा जाता है।

### EXPLODE

उपनाम: `X`। पॉलीलाइनें लाइनें और चाप बनती हैं, ब्लॉक संदर्भ अपने ऑब्जेक्ट बनते हैं, डाइमेंशन लाइनें, तीर और टेक्स्ट बनते हैं। जो ऐरे संपादन योग्य रहता है ({{cmd:ARRAYEDIT}}), वह अपने ऑब्जेक्ट की सादी प्रतियाँ बन जाता है।

- `Select objects`

### GROUP

उपनाम: `G`। {{cmd:GROUP}} चुने हुए ऑब्जेक्ट को एक साझा नाम देता है। ऑब्जेक्ट चुनें, फिर एक नाम टाइप करें (कोई स्पेस नहीं; `?` समूहों की सूची देता है; Enter बिना नाम का समूह बनाता है) और, नामित समूह के लिए, एक वैकल्पिक विवरण। उसके बाद उनमें से एक पर क्लिक, या एक ऐसी विंडो जो उनमें से एक को लेती है, उन सबको चुनती है, ताकि वे एक साथ हिलें, कॉपी हों और मिटें; हर ऑब्जेक्ट फिर भी अपना अलग ऑब्जेक्ट है। एक ऑब्जेक्ट कई समूहों में हो सकता है। पूरे समूह की प्रति एक नया बेनाम समूह है; किसी एक सदस्य की प्रति अकेली उस समूह में जुड़ जाती है। समूह उस स्पेस के होते हैं जिसमें वे बने (मॉडल या शीट)। वे तब बचे रहते हैं जब आप DWG या DXF के रूप में सहेजते हैं और CadCraft में फ़ाइल फिर खोलते हैं; DXF 2000 फ़ाइलें उन्हें दूसरे प्रोग्रामों के लिए समूह ऑब्जेक्ट के रूप में भी रखती हैं, और दूसरे प्रोग्राम में बने समूह DXF या DWG खुलने पर पढ़े जाते हैं।

### UNGROUP

उपनाम नहीं। {{cmd:UNGROUP}} समूहों को तोड़ता है: समूहों के ऑब्जेक्ट चुनें (जिस समूह में वे हैं वह सब टूट जाता है) या `Name` और समूह का नाम टाइप करें। ऑब्जेक्ट ड्रॉइंग में रहते हैं। एक पूर्ववत करने का चरण समूहों को वापस लाता है।

### GROUPEDIT

{{cmd:GROUPEDIT}} एक समूह बदलता है। उसका एक ऑब्जेक्ट चुनें, या `Name` और उसका नाम दें; पहले से चुना गया समूह जैसा है वैसा लिया जाता है। फिर: `Add` ऑब्जेक्ट (एक-एक करके, समूह-दर-समूह नहीं), `Remove` ऑब्जेक्ट, `REName` समूह, उसका `Description` बदलें, या `Selectable` सेट करें (क्या एक ऑब्जेक्ट पर क्लिक पूरा समूह चुनता है)। `eXit` या Enter समाप्त करता है। जिस समूह में कोई ऑब्जेक्ट न बचे, वह चला जाता है।

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1` (शुरुआती सेटिंग) के साथ समूह के ऑब्जेक्ट पर क्लिक या विंडो उसका पूरा समूह चुनती है; `0` के साथ अकेले ऑब्जेक्ट, ताकि आप किसी एक सदस्य को संपादित कर सकें। इस सत्र के लिए रखा जाता है।

## क्लिपबोर्ड

CadCraft का अपना क्लिपबोर्ड: यह एक ड्रॉइंग के भीतर, ड्रॉइंग के बीच, और इस ब्राउज़र में CadCraft टैब के बीच काम करता है। देखें [कॉपी, चिपकाना और डुप्लिकेट बनाना](topic:copy-paste)।

### COPYCLIP

{{key:Mod+C}}, या {{ui:Edit}} समूह में {{ui:Copy}}। ब्लॉक और लेयर समेत ऑब्जेक्ट क्लिपबोर्ड पर कॉपी करता है। ऑब्जेक्ट चुने हुए रहते हैं।

- `Select objects to copy` (ऑब्जेक्ट पहले से चुने हों तो छूट जाता है)

### CUTCLIP

{{key:Mod+X}}, या {{ui:More}} मेन्यू में {{ui:Cut}}। ऑब्जेक्ट क्लिपबोर्ड पर कॉपी करता है, फिर उन्हें मिटाता है (एक पूर्ववत करने का चरण)।

- `Select objects to cut` (ऑब्जेक्ट पहले से चुने हों तो छूट जाता है)

### COPYBASE

आपके चुने बेस बिंदु के साथ ऑब्जेक्ट क्लिपबोर्ड पर कॉपी करता है; चिपकाने पर वह बिंदु वहीं जाता है।

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, या {{ui:Edit}} समूह में {{ui:Paste}}। कॉपी कर्सर के साथ चलती है, उसके विस्तार (extents) के निचले-बाएँ कोने से लटकी हुई (या उसके केंद्र से, या `COPYBASE` बिंदु से; देखें [CadCraft सेटिंग्स](topic:settings))।

- `Specify insertion point`

चिपकाए गए ऑब्जेक्ट चुने हुए रहते हैं। जो ब्लॉक ड्रॉइंग में पहले से उसी नाम से है, वह इस ड्रॉइंग की परिभाषा रखता है।

जब MarkupCraft में कॉपी किया गया क्षेत्र CadCraft द्वारा कॉपी की गई चीज़ से नया हो (और 6 घंटे से कम पुराना), तो {{key:Mod+V}} और `PASTECLIP` वह क्षेत्र चिपकाते हैं: देखें `PASTEAREA`।

### PASTEAREA

उपनाम: `PAREA`। {{ui:More}} मेन्यू में {{ui:Paste a copied area}}। MarkupCraft में {{ui:Copy area}} से कॉपी किया गया क्षेत्र उसके असली आकार में एक तस्वीर के रूप में चिपकाता है। देखें [ड्रॉइंग में तस्वीरें](topic:pictures)।

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (केवल जब शीट का ड्रॉइंग स्केल न हो): एक संख्या, कागज़ के आकार के लिए {{key:Enter}}, या `P`, फिर `First point on the pasted area`, `Second point on the pasted area` और उनकी सही दूरी।

### PASTEORIG

{{key:Mod+Shift+V}}, या {{ui:More}} मेन्यू में {{ui:Paste in place}}। ठीक उन निर्देशांकों पर चिपकाता है जहाँ से ऑब्जेक्ट कॉपी हुए थे। कुछ नहीं पूछता।

### DUPLICATE

उपनाम: `DUP`। {{key:Mod+D}}, या {{ui:More}} मेन्यू में {{ui:Duplicate and move}}। ऑब्जेक्ट की एक प्रति जहाँ वह है वहाँ से पॉइंटर के साथ चलती है; {{key:Esc}} कुछ नहीं छोड़ता। क्लिपबोर्ड इस्तेमाल नहीं करता।

- `Select objects to duplicate` (ऑब्जेक्ट पहले से चुने हों तो छूट जाता है)
- `Specify where the copy goes (Esc leaves nothing)`: क्लिक करें, एक बिंदु टाइप करें, `@dx,dy` (जहाँ पॉइंटर था वहाँ से), या कर्सर की ओर एक दूरी।

### SELECT

`Select objects` पूछता है (नीचे के हर विकल्प के साथ) और जो आप चुनते हैं उसे अगले कमांड के लिए, या बाद में `P` के लिए चुना हुआ छोड़ता है।

### QSELECT

उपनाम: `QS`। ब्राउज़र में, {{ui:Quick select}} संवाद बॉक्स (देखें [ऑब्जेक्ट चुनें](topic:select-objects#select-by-a-rule-quick-select))। उसके बिना कमांड लाइन पूछती है `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` और `Enter value`। मेल खाने वाले ऑब्जेक्ट चयन बन जाते हैं।

### SELECTSIMILAR

उपनाम: `SIM`। `Select objects [SEttings]` (या मौजूदा चयन): वही प्रकार, लेयर और रंग (और ब्लॉक नाम, हैच पैटर्न) वाला हर ऑब्जेक्ट चुनता है। `SE` `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` पूछता है, Enter तक बार-बार।

### FIND

कोई उपनाम नहीं; या {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}। ब्राउज़र में, {{ui:Find and replace}} संवाद बॉक्स (देखें [टेक्स्ट और लेबल जोड़ें](topic:text#find-and-replace-words))। उसके बिना: `Enter text to find`, फिर `Enter replacement text (Enter: select what is found)`। यह टेक्स्ट, एट्रिब्यूट मान और डाइमेंशन टेक्स्ट में खोजता है, खुले टैब पर या चयन में।

### SELECTALL और DESELECT

`SELECTALL` (उपनाम `AI_SELALL`, {{key:Mod+A}}) खुले टैब पर हर संपादन योग्य ऑब्जेक्ट चुनता है। `DESELECT` (उपनाम `AI_DESELECT`, `SELECTNONE`; या {{key:Esc}}) चयन साफ़ करता है।

## डाइमेंशन

### DIMLINEAR

उपनाम: `DLI`, `DIMLIN`। क्षैतिज या ऊर्ध्वाधर दूरी।

- `Specify first extension line origin [Select object]` (Enter या `S`: `Select object to dimension`, फिर एक लाइन, चाप, वृत्त या पॉलीलाइन खंड पर क्लिक करें)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`। `T` टेक्स्ट माँगता है (`<>` मापा गया मान है), `H` और `V` दिशा तय करते हैं, `R` `Specify angle of dimension line <0>` पूछता है।

### DIMALIGNED

उपनाम: `DAL`, `DIMALI`। दो बिंदुओं के बीच की सही दूरी।

- मूल बिंदु {{cmd:DIMLINEAR}} की तरह, फिर `Specify dimension line location [Text]`।

### DIMANGULAR

उपनाम: `DAN`, `DIMANG`।

- `Select arc, circle or line, or Enter for a vertex`
- चाप: उसका कोण। वृत्त: `Specify second angle endpoint`। लाइन: `Select second line`। Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`।
- `Specify dimension line location [Text]`: जिस कोण को मापना है उसके अंदर क्लिक करें।

### DIMRADIUS और DIMDIAMETER

उपनाम: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`।

- `Select arc or circle`, फिर `Specify dimension line location [Text]`।

### DIMCONTINUE

उपनाम: `DCO`, `DIMCONT`। बने आखिरी रैखिक या संरेखित डाइमेंशन से जारी रहता है (या `Select linear or aligned dimension` पूछता है)।

- `Specify second extension line origin [Undo]`, Enter तक बार-बार।

### DIMBASELINE

उपनाम: `DBA`, `DIMBASE`। {{cmd:DIMCONTINUE}} की तरह, पर हर डाइमेंशन पहले मूल बिंदु से शुरू होता है और और बाहर की ओर एक के ऊपर एक रखा जाता है।

### DIMORDINATE

उपनाम: `DOR`, `DIMORD`। `Specify feature location`, फिर `Specify leader endpoint [Xdatum/Ydatum/Text]`। एक लीडर पर लिखता है कि फ़ीचर UCS मूल से X या Y दिशा में कितनी दूर है: जो लीडर ज़्यादातर ऊपर या नीचे जाता है वह X पढ़ा जाता है, जो बगल में जाता है वह Y; `Xdatum` और `Ydatum` यह तय करते हैं। पहले {{cmd:UCS}} से मूल तय करें (उसके बिना वह ड्रॉइंग का 0,0 है)। ग्रिप फ़ीचर, मूल और लीडर का सिरा हिलाती हैं, और मान उनके साथ चलता है। DWG और DXF में असली ऑर्डिनेट डाइमेंशन के रूप में सहेजा जाता है। लीडर का सिरा ठीक फ़ीचर पर होने को अस्वीकार करता है।

### DIMARC

उपनाम: `DAR`। `Select arc or polyline arc segment`, फिर `Specify arc length dimension location [Text]`। चाप के साथ दूरी मापता है (जीवा नहीं) और मान से पहले चाप का चिह्न लिखता है। पूरे वृत्त, लाइन या सीधे पॉलीलाइन खंड को अस्वीकार करता है। DWG इसे चाप लंबाई डाइमेंशन के रूप में रखता है; DXF इसे लंबाई को टेक्स्ट बनाकर कोणीय डाइमेंशन के रूप में रखता है, और CadCraft उसे फिर से चाप लंबाई डाइमेंशन के रूप में खोलता है।

### DIMJOGGED

उपनाम: `DJO`, `JOG`। `Select arc or circle`, `Specify center location override`, `Specify jog location`। ऐसे वक्र के लिए त्रिज्या डाइमेंशन जिसका केंद्र दूर या शीट से बाहर है: डाइमेंशन रेखा केंद्र के बजाय आपके दिए बिंदु से शुरू होती है, उसमें एक जॉग के साथ, और फिर भी सही त्रिज्या लिखता है। DWG इसे झुकी हुई त्रिज्या डाइमेंशन के रूप में रखता है; DXF इसे त्रिज्या डाइमेंशन के रूप में रखता है, और CadCraft उसे फिर झुकाकर खोलता है।

### DIMJOGLINE

उपनाम: `DJL`। `Select dimension to add jog [Remove]`, फिर `Specify jog location (or press Enter)`। किसी रैखिक या संरेखित डाइमेंशन की रेखा पर एक जॉग चिह्न लगाता है, ताकि दिखे कि दूरी स्केल के अनुसार नहीं खींची गई; मान नहीं बदलता। `Remove` उसे हटाता है। दूसरे प्रकार के डाइमेंशन को अस्वीकार करता है।

### QDIM

कोई उपनाम नहीं। `Select geometry to dimension`, फिर `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`। एक ही चरण में कई ऑब्जेक्ट का डाइमेंशन: लाइनों और पॉलीलाइन खंडों के सिरों, वृत्तों और चापों के केंद्रों, बिंदुओं और ब्लॉक संदर्भों से। ऑब्जेक्ट के ऊपर या नीचे की स्थिति आर-पार मापती है, बगल की स्थिति ऊपर मापती है। `Continuous` बिंदुओं को जोड़ता है, `Baseline` सब कुछ पहले से मापता है, `Staggered` बीच से बाहर की ओर जोड़े रखता है, `Ordinate` हर बिंदु को डेटम से उसकी दूरी देता है (`datumPoint` नया डेटम चुनता है), `Radius` और `Diameter` हर चुने वृत्त और चाप का डाइमेंशन बनाते हैं। मोड याद रखा जाता है। जो वह बनाता है वह एक पूर्ववत करने का चरण है। दो से कम बिंदु होने पर, या Radius और Diameter के लिए कोई चाप या वृत्त न होने पर, यह बताता है।

### DIMBREAK

उपनाम: `DBREAK`। `Select dimensions to add or remove breaks`, फिर `Break where other objects cross [Auto/Manual/Remove] <Auto>`। `Auto` डाइमेंशन और विस्तार रेखाओं में हर उस जगह एक अंतर छोड़ता है जहाँ कोई दूसरा ऑब्जेक्ट उन्हें काटता है, और जब वे ऑब्जेक्ट या डाइमेंशन हिलते हैं तो अंतर फिर से निकालता है। `Manual` (एक डाइमेंशन) दो बिंदु माँगता है और उनके बीच अंतर छोड़ता है। `Remove` हर अंतर हटाता है। अंतर डाइमेंशन के टेक्स्ट की ऊँचाई का 1.5 गुना होता है।

### DIMSPACE

कोई उपनाम नहीं। `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`। समांतर रैखिक और संरेखित डाइमेंशनों की (या एक ही शीर्ष से कोणीय डाइमेंशनों की) डाइमेंशन रेखाएँ हिलाता है ताकि वे आधार डाइमेंशन से गिनी गई एक समान दूरी पर हों, हर एक उस तरफ़ जिस पर वह है। `0` उन्हें आधार के साथ एक पंक्ति में लाता है; `Auto` आधार डाइमेंशन के टेक्स्ट की ऊँचाई का दोगुना है। आधार के समांतर न होने वाले डाइमेंशन जैसे हैं वैसे छोड़ दिए जाते हैं।

### DIMINSPECT

कोई उपनाम नहीं। `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`। मान के चारों ओर एक फ़्रेम बनाता है, उससे पहले एक लेबल और उसके बाद निरीक्षण दर के साथ। `remove` फ़्रेम हटाता है। सहनशीलता का टेक्स्ट मान के साथ रहता है।

### DIMOVERRIDE

उपनाम: `DOV`, `DIMOVER`। `Enter dimension variable name to override or Clear`, `Enter new value for …`, Enter तक फिर से, फिर `Select dimensions`। केवल चुने हुए डाइमेंशन पर वे सेटिंग बदलता है; डाइमेंशन स्टाइल नहीं बदलता। वे वेरिएबल लेता है जो संख्या या स्विच हैं (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …)। `Clear` चुने हुए डाइमेंशन को उनकी स्टाइल पर वापस लाता है। ऐसा नाम जो ऐसा वेरिएबल नहीं है, और ऐसा मान जो वह नहीं ले सकता, उसे अस्वीकार करता है।

### DIMREASSOCIATE

उपनाम: `DRE`, `DIMREASSOC`। `Select dimensions`, फिर हर एक के लिए उसके विस्तार रेखा मूल (`Specify first extension line origin on an object`: किसी लाइन के सिरे या बीच, पॉलीलाइन कोने, या केंद्र पर स्नैप करें; Enter उस बिंदु को मुक्त रखता है), या त्रिज्या, व्यास, झुकी त्रिज्या या चाप लंबाई डाइमेंशन के लिए `Select arc or circle`। डाइमेंशन फिर उन ऑब्जेक्ट से जुड़ जाता है: जब वे हिलते हैं या आकार बदलते हैं तो वह उसी पूर्ववत करने के चरण में उनके साथ चलता है और फिर से मापता है। जुड़े बिंदु को हाथ से हिलाने, या ऑब्जेक्ट मिटाने से वह जुड़ाव खत्म होता है। यह जुड़ाव DWG और DXF 2000 में CadCraft के अपने डेटा के रूप में सहेजा जाता है; दूसरे प्रोग्राम एक साधारण डाइमेंशन देखते हैं।

### DIMDISASSOCIATE

उपनाम: `DDA`, `DIMDISASSOC`। `Select dimensions`। उन्हें उन ऑब्जेक्ट से मुक्त करता है जिनसे वे जुड़े हैं; कुछ नहीं हिलता।

### CENTERMARK

उपनाम: `CM`, `DIMCENTER`, `DCE`। `Select circle or arc to add center mark`, Enter तक फिर से। केंद्र पर एक क्रॉस और चार केंद्र रेखाएँ बनाता है जो वक्र से थोड़ा आगे तक जाती हैं (लाइनटाइप CENTER), मौजूदा लेयर पर सादी लाइनों के रूप में; वे मौजूदा डाइमेंशन सेटिंग के तीर के आकार और कुल स्केल से तय होते हैं, और UCS के साथ घूमते हैं। यदि वृत्त हिले तो वे उसका अनुसरण नहीं करते।

### CENTERLINE

उपनाम: `CL`। `Select first line`, `Select second line`। दो लाइनों के ठीक बीच में एक लाइन बनाता है (जब वे मिलें तो द्विभाजक के साथ), उनसे थोड़ी लंबी, लाइनटाइप CENTER में। वह एक सादी लाइन है: वह दोनों लाइनों का अनुसरण नहीं करती।

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

कोई उपनाम नहीं। हर एक `Enter new value for … <current>` पूछता है और उस आकार को **नए** डाइमेंशन के लिए सेट करता है: कुल स्केल, टेक्स्ट की ऊँचाई, तीर का आकार, दशमलव स्थान (8 तक), टेक्स्ट के चारों ओर का अंतर, डाइमेंशन रेखा से आगे का विस्तार, मूल से ऑफ़सेट। देखें [डाइमेंशन के आकार सेट करें](topic:dimension-settings)।

### DIMLUNIT

डाइमेंशन सेटिंग: केवल नए डाइमेंशन का लंबाई प्रारूप (1 scientific, 2 decimal, 3 engineering, 4 architectural, 5 fractional)।

### DIMSTYLE और -DIMSTYLE

उपनाम: `DST`, `DDIM`, `D`। डाइमेंशन स्टाइल मैनेजर: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}। कमांड लाइन पर `-DIMSTYLE`: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`। देखें [डाइमेंशन के आकार सेट करें](topic:dimension-settings#named-dimension-styles)।

### DIMEDIT और DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, फिर डाइमेंशन (या जो पहले से चुने हों)। New टेक्स्ट माँगता है (`<>` = माप); Rotate एक कोण माँगता है (0 टेक्स्ट वापस रखता है); Oblique विस्तार रेखाओं का X धुरी से कोण माँगता है (Enter = कोई नहीं; केवल रैखिक और संरेखित डाइमेंशन)। `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`। देखें [डाइमेंशन के आकार सेट करें](topic:dimension-settings#change-dimension-text-and-extension-lines)।

### DIMTEXTUNIT

उपनाम: `DTU`। `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, या चुने हुए डाइमेंशन के साथ `Units in the text of the selected dimensions`। मापी गई लंबाई उस इकाई में लिखता है, इकाई उसके बाद (DIMLFAC और DIMPOST प्रत्यय); `D` ड्रॉइंग की इकाइयों पर वापस जाता है। देखें [डाइमेंशन mm, cm, m या km में](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)।

### REVCLOUD

उपनाम: `RC`। `Arc length: … Type: …` छापता है, फिर `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`। Rectangular `Specify opposite corner` पूछता है; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand एक क्लिक या {{key:Enter}} तक पॉइंटर का अनुसरण करता है; `O` `Select object` और `Reverse direction? [Yes/No] <N>` पूछता है और ऑब्जेक्ट को क्लाउड में बदलता है। `A` `Specify the length of each arc` पूछता है। `R`, `P` और `F` अगले क्लाउड का प्रकार चुनते हैं। परिणाम चापों की एक बंद पॉलीलाइन है।

### MLEADER

उपनाम: `MLD`; या {{ui:Leader}}। `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, फिर जगह के अंदर के बॉक्स में टेक्स्ट (या उसके बिना, `Enter text (an empty line ends)`)। `Block` पहले ब्लॉक का नाम पूछता है और मल्टीलीडर टेक्स्ट की जगह वह ब्लॉक दिखाता है। और लीडर लाइनें: {{cmd:MLEADEREDIT}}। DWG में असली मल्टीलीडर के रूप में सहेजा जाता है; DXF वे लाइनें, तीर और टेक्स्ट रखता है जो वह बनाता है।

### MLEADEREDIT

उपनाम: `MLE`। `Select a multileader`, फिर `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: हर बिंदु एक नए तीर से उसी लैंडिंग तक एक लीडर लाइन जोड़ता है, Enter तक। `Remove leaders` फिर उस लीडर लाइन को हटाता है जिस पर आप क्लिक करें (मल्टीलीडर में कम से कम एक रहती है)। `Block content` एक ब्लॉक का नाम पूछता है और टेक्स्ट की जगह वह ब्लॉक दिखाता है (उसके एट्रिब्यूट पूछे जाते हैं); `Text content` टेक्स्ट वापस रखता है। हर लीडर लाइन की अपनी ग्रिप है। DWG हर लीडर लाइन और ब्लॉक को एक मल्टीलीडर में रखता है।

### MLEADERALIGN

उपनाम: `MLA`। `Select multileaders`, फिर `Select multileader to align to [Distribute/Spacing/Use current spacing]` और `Specify direction`। दूसरे मल्टीलीडर की लैंडिंग (और उनका टेक्स्ट या ब्लॉक) उस दिशा में चुने हुए की लैंडिंग से गुज़रती रेखा पर हिलाता है; तीर जहाँ इंगित करते हैं वहीं रहते हैं। `Spacing` उन्हें समान दूरी पर भी रखता है; `Distribute` दो बिंदु माँगता है और उनके बीच समान रूप से बाँटता है। कम से कम दो मल्टीलीडर चाहिए।

### MLEADERCOLLECT

उपनाम: `MLC`। `Select multileaders`, फिर `Specify collected multileader location [Vertical/Horizontal]` (Enter पहले वाले की जगह रखता है)। कई से एक मल्टीलीडर बनाता है: ब्लॉक सामग्री एक नए ब्लॉक में जाती है जो हर ब्लॉक को बगल-बगल या एक के नीचे एक रखता है; टेक्स्ट सामग्री एक नोट बनती है जिसकी हर पंक्ति अलग होती है। पहले मल्टीलीडर की लीडर लाइनें रहती हैं; बाकी हटा दिए जाते हैं। टेक्स्ट और ब्लॉक सामग्री का मिश्रण अस्वीकार करता है।

### TABLE

उपनाम: `TB`; या {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}। एक टेबल बनाता है: एक ऑब्जेक्ट जिसे आप बाकी ऑब्जेक्ट की तरह हिलाते, कॉपी करते, घुमाते, स्केल करते और प्लॉट करते हैं, जिसकी कोशिकाएँ डेटा के रूप में रहती हैं।

- `Number of data rows or [Paste/File/Style] <3>`, फिर `Number of columns <3>`, `Text height` और `Top left corner of the table`। टेबल को एक शीर्षक पंक्ति (एक मिली हुई सेल) और डेटा पंक्तियों के ऊपर एक हेडर पंक्ति मिलती है।
- `P`: क्लिपबोर्ड पर स्प्रेडशीट सेल से टेबल (सेल के बीच टैब के साथ टेक्स्ट)। ऐसे सेल क्लिपबोर्ड पर होने पर {{key:Ctrl+V}} वही करता है, जब तक CadCraft की अपनी कॉपी नई न हो (या CadCraft पता न लगा सके: तब वह अपनी कॉपी चिपकाता है और यह बताता है)। `F`: `.csv` या टैब से अलग की गई फ़ाइल से टेबल। पहली पंक्ति हेडर पंक्ति बनती है; कॉलम की चौड़ाई टेक्स्ट में फ़िट होती है।
- `S`: इस टेबल के लिए टेबल स्टाइल चुनें (देखें {{cmd:TABLESTYLE}})।
- यह पंक्तियों या कॉलमों की ऐसी संख्या को अस्वीकार करता है जो पूरी नहीं है, और उन सेलों को भी जो टेबल में नहीं समा सकते (2,000 पंक्तियाँ, 200 कॉलम, 40,000 सेल)।
- {{cmd:EXPLODE}} टेबल को लाइनों और टेक्स्ट में बदलता है। DWG में सहेजी टेबल एक असली टेबल ऑब्जेक्ट है जिसे दूसरे प्रोग्राम संपादित कर सकते हैं; DXF में सहेजी टेबल एक ब्लॉक है जो उसे बनाता है, और CadCraft उसे फिर टेबल के रूप में खोलता है।

### TABLEDIT

उपनाम: `TABLEEDIT`, `TABEDIT`; या किसी सेल पर डबल-क्लिक करें। एक टेबल संपादित करता है।

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`। एक सेल पर क्लिक करें, या जब टेबल चुनी हो तो उसका नाम टाइप करें (`B3`: कॉलम B, पंक्ति 3; शीर्षक पंक्ति पंक्ति 1 है)। ब्राउज़र में सेल के ऊपर एक बॉक्स खुलता है: {{key:Enter}} टेक्स्ट रखता है, {{key:Tab}} अगली सेल पर जाता है, {{key:Alt+Enter}} नई पंक्ति शुरू करता है, {{key:Esc}} सेल को पहले जैसा छोड़ता है।
- जो टेक्स्ट `=` से शुरू होता है वह एक सूत्र है: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^` के साथ, ब्रैकेट और `sqrt` और `round` जैसे फ़ंक्शन। सेल मान दिखाता है; जो सूत्र अपनी ही सेल का नाम ले, टेबल के बाहर की सेल ले, या बिना संख्या वाली सेल ले, वह `####` दिखाता है और कमांड लाइन बताती है क्यों।
- `R` / `C`: किसी चुनी सेल पर `Insert` या `Delete` पंक्तियाँ या कॉलम (कितने, और ऊपर या नीचे, बाएँ या दाएँ)। सूत्र उन सेलों का अनुसरण करते हैं जिनका वे नाम लेते हैं।
- `S`: कॉलम की चौड़ाई और पंक्ति की ऊँचाई। पंक्ति कभी अपने टेक्स्ट से नीची नहीं होती। चुनी हुई टेबल पर हर कॉलम और हर पंक्ति के किनारे पर भी एक ग्रिप होती है।
- `M`: एक चुनी सेल से दूसरी तक मिलाना; `U`: मिलाना हटाना। `A`: संरेखण (`TL` ऊपर बाएँ … `MC` बीच में केंद्र … `BR` नीचे दाएँ)। `H`: इस सेल की अपनी टेक्स्ट ऊँचाई (0 = स्टाइल की)। `K`: पंक्ति को शीर्षक, हेडर या डेटा पंक्ति बनाएँ। `CL`: सेल खाली करें।
- यह ऐसी टेबल को अस्वीकार करता है जो लॉक लेयर पर है, हर पंक्ति या कॉलम हटाने को, और ऐसे मिलाने को जो दूसरी मिली हुई सेल को दो भागों में काटे।

### TABLESTYLE

उपनाम: `TS`। टेबल स्टाइल सूचीबद्ध करता है और हर एक को कितनी टेबलें इस्तेमाल करती हैं, फिर `Table style: [New/Set/Edit/Delete/Apply]`।

- स्टाइल शीर्षक, हेडर और डेटा पंक्तियों की टेक्स्ट ऊँचाई और संरेखण, सेल का मार्जिन, और कौन से बॉर्डर बनते हैं (बाहरी, पंक्तियों के बीच, कॉलमों के बीच) रखता है।
- `N` मौजूदा स्टाइल से एक स्टाइल बनाता है और उसे सक्रिय करता है; `S` सक्रिय स्टाइल सेट करता है (नई टेबलें उसे लेती हैं); `E` एक को संपादित करता है: जो टेबलें उसे इस्तेमाल करती हैं वे फिर बनती हैं; `A` चुनी टेबलों को सक्रिय स्टाइल देता है; `D` एक हटाता है (Standard नहीं, सक्रिय नहीं; जो टेबलें उसे इस्तेमाल करती थीं वे अपना रूप रखती हैं)।
- स्टाइल ड्रॉइंग के साथ सहेजी जाती हैं (DWG और DXF)।

### TABLEEXPORT

टेबल जो दिखाती है उसे CSV फ़ाइल के रूप में सहेजता है (सूत्र उसके मान के रूप में)। `Select a table`, या पहले एक चुनें। जो टेक्स्ट सेल `=`, `+`, `-` या `@` से शुरू होते हैं उन पर एक आगे का `'` लगता है, ताकि स्प्रेडशीट उन्हें न चलाए।

### TABLEPASTE

उपनाम: `PASTETABLE`। क्लिपबोर्ड पर स्प्रेडशीट सेल से एक टेबल बनाता है, फिर उसका ऊपरी-बायाँ कोना पूछता है। {{cmd:TABLE}} › `Paste` जैसा ही।

### DATALINK

उपनाम: `DL`। `Data link: [New/List/Remove] <New>`। `N` एक CSV फ़ाइल माँगता है, उसकी एक टेबल रखता है और फ़ाइल का नाम याद रखता है; `L` लिंक उनकी फ़ाइल, आकार, कब पढ़ी गई और कितनी टेबलें उसे इस्तेमाल करती हैं, के साथ सूचीबद्ध करता है; `R` एक लिंक हटाता है (उसकी टेबलें सादी टेबलें बनी रहती हैं)।

### DATALINKUPDATE

उपनाम: `DLU`। डेटा लिंक की फ़ाइल फिर से पढ़ता है और उससे जुड़ी टेबलें फिर भरता है (पंक्तियाँ और कॉलम जुड़ते या हटते हैं ताकि मेल खाएँ)। ब्राउज़र खुद कोई फ़ाइल नहीं खोल सकता, इसलिए वह आपसे फ़ाइल फिर चुनने को कहता है। कई लिंक हों तो पूछता है कौन सा।

### FIELD

ड्रॉइंग में एक फ़ील्ड डालता है: ऐसा टेक्स्ट जो खुद निकल आता है। `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: अभी, या सहेजी, बनाई या प्लॉट की गई तारीख, और एक प्रारूप (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`)। `F`: फ़ाइल का नाम, उसके एक्सटेंशन के साथ या उसके बिना। `S`: शीट का नंबर, उसका शीर्षक, या कितनी शीटें हैं। `P`: नाम से एक ड्रॉइंग गुण (देखें {{cmd:DWGPROPS}})। `O`: एक ऑब्जेक्ट चुनें, फिर क्या पढ़ना है (क्षेत्रफल, लंबाई, परिमाप, त्रिज्या, व्यास, लेयर, नाम, x, y, टेक्स्ट, घुमाव, रंग) और दशमलव। `E`: एक सूत्र। `C`: कोड के साथ टेक्स्ट जैसे वे टाइप किए गए हैं, जैसे `Sheet %<sheetnumber>% of %<sheetcount>%`।
- फिर `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: चुने गए टेक्स्ट में फ़ील्ड उसके मौजूदा टेक्स्ट के बाद जुड़ता है; टेबल सेल भी ऐसे ही; एट्रिब्यूट वाला ब्लॉक संदर्भ पूछता है कौन सा एट्रिब्यूट; {{key:Enter}} नए टेक्स्ट के लिए एक ऊँचाई और एक बिंदु पूछता है।
- स्क्रीन पर फ़ील्ड की पृष्ठभूमि हल्की स्लेटी होती है; प्लॉट और PDF में वह कभी नहीं होती। फ़ील्ड के टेक्स्ट पर हाथ से टाइप करने से फ़ील्ड खत्म हो जाता है। जो फ़ील्ड निकल न सके वह `####` दिखाता है।
- ऑब्जेक्ट का फ़ील्ड उसके ऑब्जेक्ट को उस कुंजी से ढूँढता है जो CadCraft ऑब्जेक्ट पर रखता है (Settings › CadCraft › Merge-friendly files); कुंजियाँ बंद होने पर वह मना करता है।

### UPDATEFIELD

उपनाम: `UPDATEFIELDS`। `Select the objects whose fields to update (Enter: every field) or [Settings]`। `S` सेट करता है कि फ़ील्ड अपने-आप कब अपडेट हों: `O` open, `S` save, `P` plot, `R` regen के अक्षर टाइप करें (शुरू में चारों), या `NONE`।

### DWGPROPS

उपनाम: `DRAWINGPROPS`। ड्रॉइंग के गुण सूचीबद्ध करता है, फिर `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`। पहले छह वही हैं जो {{ui:Drawing details}} पैनल दिखाता है; `U` आपका अपना नाम और मान जोड़ता है, `R` एक हटाता है। फ़ील्ड इन्हें पढ़ते हैं (`%<prop:title>%`, `%<prop:Client>%`) और तुरंत उनका अनुसरण करते हैं। ऐसा कस्टम नाम अस्वीकार करता है जो बने-बनाए नामों में से एक है, या जिसमें `%`, `<`, `>`, उद्धरण चिह्न या बैकस्लैश है।

## पैरामेट्रिक

देखें [ड्रॉइंग को बाधित करें](topic:constraints) और [पैरामीटर और समीकरण इस्तेमाल करें](topic:parameters)। बाधाएँ {{ui:Model}} टैब पर काम करती हैं।

### GEOMCONSTRAINT और GC कमांड

उपनाम `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, फिर उस कमांड के प्रॉम्प्ट।

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`।
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (दूसरा हिलता है)।
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`।
- {{cmd:GCFIX}}: `Select point [Object] <Object>`।
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`।

### DIMCONSTRAINT और DC कमांड

उपनाम `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`।

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (एक संख्या, एक व्यंजक, या `name=expression`)।
- {{cmd:DCALIGNED}}: ऊपर की तरह, `[Object/Point & line/2Lines]` के साथ।
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`। {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`।
- {{cmd:DCCONVERT}}: `Select dimensions to convert`।

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`। `S` दूरी और कोण की सहनशीलता पूछता है।
- {{cmd:DELCONSTRAINT}} (उपनाम `DELCON`): `Select objects`; उनकी बाधाएँ चली जाती हैं।
- {{cmd:CONSTRAINTBAR}} (उपनाम `CBAR`): `Select objects [Showall/Hideall]`, फिर `[Show/Hide]`।
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`।

### PARAMETERS और -PARAMETERS

{{cmd:PARAMETERS}} (उपनाम `PAR`, `PARAM`) {{ui:Parameters}} पैनल खोलता है। `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`।

### SWBOUT

उपनाम `SWMACRO`। एक मैक्रो (.swb) डाउनलोड करता है जो SolidWorks में मॉडल को एक बाधा-युक्त स्केच के रूप में फिर से बनाता है। देखें [स्केच को दूसरे पार्ट मॉडलरों तक और से ले जाना](topic:solidworks-sketches)।

## ब्लॉक

### ANNOSCALE

उपनाम: `CANNOSCALE`। ड्रॉइंग का एनोटेशन स्केल और उसमें कितने एनोटेटिव ऑब्जेक्ट हैं, बताता है, फिर `New annotation scale` पूछता है: `1:50`, `1:100`, `2:1`, एक अकेली संख्या (`50` यानी 1:50), या ड्रॉइंग के अपने किसी स्केल का नाम टाइप करें। हर एनोटेटिव टेक्स्ट और डाइमेंशन का आकार ऐसा बदलता है कि नए स्केल पर वह एक ही आकार में छपे, एक पूर्ववत करने के चरण में; गैर-एनोटेटिव ऑब्जेक्ट जैसे हैं वैसे रहते हैं, और वह ऑब्जेक्ट भी जो स्केलों की सूची रखता है और उसमें नया स्केल नहीं है ({{cmd:OBJECTSCALE}})। देखें [इकाइयाँ, कागज़ और स्केल](topic:units-papers-scales#annotate-by-scale)।

### OBJECTSCALE

उपनाम: `OBJSCALE`। `Select annotative objects`, फिर `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`। एक एनोटेटिव टेक्स्ट या डाइमेंशन एनोटेशन स्केलों की एक सूची रखता है। `Add` और `Delete` एक स्केल पूछते हैं (`1:50`, `2:1`, एक अकेली संख्या, या ड्रॉइंग के अपने किसी स्केल का नाम); `Current scale` ड्रॉइंग का एनोटेशन स्केल जोड़ता है; `List` हर ऑब्जेक्ट के स्केल छापता है। जिस व्यूपोर्ट का स्केल किसी ऑब्जेक्ट की सूची में है, वह ऑब्जेक्ट को उस आकार पर दिखाता है जो उस स्केल पर उसकी कागज़ ऊँचाई छापता है, स्क्रीन और प्लॉट दोनों पर। आखिरी स्केल मिटाया नहीं जा सकता। जो ऑब्जेक्ट एनोटेटिव नहीं हैं वे छूट जाते हैं: पहले Properties में Annotative चालू करें। सूचियाँ DWG और DXF में CadCraft के अपने डेटा के रूप में सहेजी जाती हैं। देखें [इकाइयाँ, कागज़ और स्केल](topic:units-papers-scales#annotate-by-scale)।

### ANNOALLVISIBLE

उपनाम: `ANNOALL`। `Show annotative objects at all scales [ON/OFF]`। ON (ड्रॉइंग शुरू होते ही): एनोटेटिव ऑब्जेक्ट एक व्यूपोर्ट या मॉडल में भी दिखता है जिसका स्केल उसकी सूची में नहीं है, उस आकार पर जो उसका है। OFF: वहाँ नहीं दिखता, और मॉडल में चुना भी नहीं जा सकता। यह स्विच एक पूर्ववत करने का चरण है; फ़ाइल में नहीं रखा जाता।

### SCALELISTEDIT

उपनाम: `SCALELIST`। `Scale list [Add/Edit/Delete/List/Reset]` Enter तक। Add: `Scale name`, `Paper units`, `Drawing units`। Edit और Delete स्केल का नाम पूछते हैं। ड्रॉइंग के अपने स्केल व्यूपोर्ट और प्लॉट स्केल सूचियों में जुड़ते हैं और ड्रॉइंग के साथ सहेजे जाते हैं। देखें [इकाइयाँ, कागज़ और स्केल](topic:units-papers-scales#scales)।

### SPLINE, SPLINEDIT और PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`। Fit: वे बिंदु जिनसे वक्र गुज़रता है; `Close`, `Undo`, फिर `Start tangent` और `End tangent` (एक बिंदु, या {{key:Enter}})। Method › Control vertices एक डिग्री (1 से 5) पूछता है और एक कंट्रोल पॉलीगन से बनाता है। Object पॉलीलाइनों को उनके वर्टेक्स से गुज़रने वाली स्प्लाइन में बदलता है। `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`। `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, कई ऑब्जेक्ट के लिए `M`; लाइनें, चाप और स्प्लाइनें पहले पॉलीलाइनों के रूप में दी जाती हैं। देखें [स्प्लाइन और पॉलीलाइनें](topic:splines)।

### BLOCK

उपनाम: `B`, `BMAKE`।

- `Enter block name`। यदि वह पहले से है: `Block "…" already exists. Redefine it? [Yes/No] <N>`।
- `Specify insertion base point`
- `Select objects`। वे नए ब्लॉक के एक संदर्भ से बदल दिए जाते हैं।

### WBLOCK

उपनाम: `W`, `-WBLOCK`। एक ब्लॉक, कुछ ऑब्जेक्ट या पूरी ड्रॉइंग एक नई DWG या DXF फ़ाइल के रूप में लिखता है। `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (वह नई ड्रॉइंग का मूल बन जाता है), `Select objects`, फिर `File format [DWG/DXF/R12 DXF]` और `File name for the new drawing`, फिर `What to do with the objects [Retain/Convert to block/Delete]`। Convert उन्हें फ़ाइल के नाम वाले ब्लॉक के एक संदर्भ से बदलता है; Delete उन्हें हटाता है।
- **Block**: `Block to write out`। ब्लॉक के अपने ऑब्जेक्ट, उसके बेस बिंदु को मूल बनाकर, भीतर के ब्लॉक समेत।
- **Entire drawing**: मॉडल स्पेस का हर ऑब्जेक्ट। शीटें नहीं लिखी जातीं; शीटों वाली प्रति के लिए {{cmd:SAVEAS}} इस्तेमाल करें।

नई फ़ाइल में केवल वही लेयर, लाइनटाइप, टेक्स्ट और डाइमेंशन स्टाइल और ब्लॉक रहते हैं जो उसके ऑब्जेक्ट इस्तेमाल करते हैं, और ड्रॉइंग की इकाइयाँ। DWG का संस्करण वही है जो {{cmd:SAVEAS}} ने आखिरी बार इस्तेमाल किया। ब्राउज़र में फ़ाइल डाउनलोड होती है; Studio में सहेजने का संवाद खुलता है।

### ATTDEF

उपनाम: `ATT`, `DDATTDEF`, `-ATTDEF`; या {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}। मोड छापता है, फिर `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (जब constant हो तो `Enter attribute value`), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text` पूछता है। {{cmd:BLOCK}} एट्रिब्यूट परिभाषाओं को ब्लॉक में ले जाता है।

### EATTEDIT और ATTEDIT

`EATTEDIT` (`DDATTE`, या एट्रिब्यूट वाले संदर्भ पर डबल-क्लिक; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, फिर {{ui:Edit attributes}} संवाद बॉक्स। `ATTEDIT` (`ATE`, `-ATTEDIT`): वही संदर्भ, फिर हर एट्रिब्यूट के लिए `<prompt> (<TAG>) <value>`; {{key:Enter}} एक मान रखता है। देखें [एट्रिब्यूट](topic:attributes#see-and-change-the-values)।

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`। मान रखे जाते हैं; नए एट्रिब्यूट अपना डिफ़ॉल्ट पाते हैं, हटाए गए जाते हैं, और स्थान रीसेट होते हैं।

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}। संवाद बॉक्स: ब्लॉक, एट्रिब्यूट (टैग, प्रॉम्प्ट, डिफ़ॉल्ट, मोड, क्रम), {{ui:Update the references (values kept)}}, {{ui:Apply}}।

### REFEDIT और REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}। `REFEDIT`: `Select the block reference to edit in place` (या चयन)। `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; पट्टी के {{ui:Save the block}} और {{ui:Discard}} भी यही करते हैं। पूरा संपादन एक पूर्ववत करने का चरण है। देखें [एट्रिब्यूट](topic:attributes#edit-a-title-block-where-it-is-refedit)।

### BEDIT और BCLOSE

`BE`; या {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}। `Enter block name to edit <the selected reference's block>` ब्लॉक एडिटर खोलता है। `BCLOSE` पूछता है `Close the block editor on "…" [Save/Discard] <Save>`; बैनर के {{ui:Save block}} और {{ui:Discard changes}} भी यही करते हैं। एडिटर में किया गया सब कुछ एक पूर्ववत करने का चरण है।

### VIEWBASE

उपनाम: `FLATSHOT`। 3D टैब के ठोस आकृतियों का एक सपाट 2D व्यू: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, एक स्केल (`1:20`, `2:1`; {{key:Enter}} शीट में फ़िट होने वाला लेता है), फिर व्यू का केंद्र। एक ब्लॉक संदर्भ; दिखने वाले किनारे VIEW-VISIBLE पर, छिपे हुए डैश्ड VIEW-HIDDEN पर। देखें [शीट पर सपाट व्यू](topic:3d-solids#flat-views-on-a-sheet)।

### PUBLISH

उपनाम: `-PUBLISH`; या {{ui:Plot to PDF}} संवाद बॉक्स में {{ui:All sheets in one PDF}}। `Sheets to plot [All/Some]`: {{key:Enter}} हर शीट छापता है, `S` नाम कॉमा से अलग माँगता है। एक PDF, हर शीट के लिए एक पेज और एक बुकमार्क। देखें [सभी शीट एक PDF में](topic:plot-pdf#every-sheet-in-one-pdf)।

### SHEETSET

उपनाम: `SSM`, `SHEETSETMANAGER`। बाएँ पैनल के {{ui:Sheet set}} भाग पर ले जाता है: कई ड्रॉइंग की शीटें, नंबर और शीर्षक वाली, उनके टाइटल ब्लॉक सेट से भरे हुए, एक PDF के रूप में प्रकाशित। देखें [शीट सेट](topic:sheet-sets)।

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): एक DWG या DXF चुनें, फिर उसका डालने का बिंदु। {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; एक से ज़्यादा लिंक हों तो उनमें से एक संदर्भ चुनें या `N` टाइप करके उसका नाम दें। देखें [जुड़ी हुई ड्रॉइंग](topic:files#linked-drawings-external-references)।

### COUNT

उपनाम: `BCOUNT`; या {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}। `Select a block reference to count, or [All/Export] (Enter: All)`: एक चयन उस ब्लॉक के हर संदर्भ को इस स्पेस में चुनता और गिनता है; {{key:Enter}} या `A` उन सबकी सूची देते हैं; `E` फिर `C` (गिनती) या `A` (एट्रिब्यूट) एक CSV डाउनलोड करता है। देखें [ब्लॉक गिनें और एक सूची निर्यात करें](topic:blocks#count-blocks-and-export-a-schedule)।

### INSERT

उपनाम: `I`, `DDINSERT`।

- `Enter block name or [File/Library] <last block>` (अक्षरों का आकार मायने नहीं रखता)। `F` एक DWG या DXF माँगता है, फिर पूरी ड्रॉइंग या उसका एक ब्लॉक; पहले से इस्तेमाल हो रहे नाम पर {{ui:Keep existing}} या {{ui:Rename}} पूछा जाता है। `L` लाइब्रेरी पैनल खोलता है।
- `Specify insertion point [Scale/Rotate]`। `S` `Specify scale factor` पूछता है, `R` `Specify rotation angle`; दोनों याद रखे जाते हैं।
- जब ब्लॉक पहले से ऐसे ऑब्जेक्ट के पास हो जो उसके बिना कहीं और दोहराए जाते हैं, तो एक पंक्ति बताती है कि कितनी जगहें सुझाई गई हैं, और प्रॉम्प्ट में `suGgested` जुड़ता है: `G` उन्हें दिखाता है; उनमें से किसी के पास क्लिक करें ताकि ब्लॉक वहाँ जाए, `A` सबके लिए, {{key:Enter}} वापस जाने के लिए। वे अपने पड़ोसियों का घुमाव और डिफ़ॉल्ट एट्रिब्यूट मान लेते हैं। खुली जगह में 20,000 से ज़्यादा ऑब्जेक्ट वाली ड्रॉइंग में खोज नहीं होती।
- फिर हर एट्रिब्यूट के लिए जो ब्लॉक माँगता है `Enter <prompt> (<TAG>) <default>`। देखें [ब्लॉक एट्रिब्यूट](topic:attributes)।

### LIBRARY

उपनाम: `LIB`। लाइब्रेरी पैनल खोलता है: आइटम रखें, अपडेट जाँचें, लाइब्रेरी के श्रेय। कोई सवाल नहीं। देखें [फ़ाइल या लाइब्रेरी से डालें](topic:insert-from-file-and-library)।

### STEELMEMBER

उपनाम: `SMEMBER`; या लाइब्रेरी के {{ui:Standard}} टैब पर {{ui:3D member}}। `Section size <W12x26>` (जैसा टैब सूचीबद्ध करता है), फिर `Start point [Column]` और `End point`: 3D टैब पर दो बिंदुओं के बीच एक ठोस सदस्य, ज़मीन पर टिका हुआ। `C` स्तंभ का बेस बिंदु और उसकी ऊँचाई माँगता है। एक पूर्ववत करने का चरण। देखें [स्टील खंड और मानक भाग रखें](topic:steel-and-standard-parts)।

### PARTSLIST

उपनाम: `PLIST`। `Top left corner of the parts list`, फिर `Text height <2.5>`: लाइब्रेरी से रखे हर मानक भाग और स्टील खंड की एक टेबल बनाता है (आइटम नंबर, मात्रा, भाग, मानक, आकार, लंबाई, मटीरियल, द्रव्यमान)। एक पूर्ववत करने का चरण। देखें [स्टील खंड और मानक भाग रखें](topic:steel-and-standard-parts#make-a-parts-list)।

### PURGE

उपनाम: `PU`। ऐसी ब्लॉक परिभाषाएँ हटाता है जिन्हें कोई इस्तेमाल नहीं करता। कोई सवाल नहीं।

### DELBLOCKS

या {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}। `Select block to delete [Name/eXit]`: एक ब्लॉक संदर्भ चुनें, या ब्लॉकों की सूची के लिए `N` (फ़िल्टर के साथ, कई चुन सकते हैं), या समाप्त करने के लिए `X` / {{key:Enter}}। हर संदर्भ जाता है — मॉडल में, हर शीट पर और भीतर के ब्लॉकों में — फिर परिभाषा, और कमांड लाइन बताती है क्या हटा और क्या नहीं हट सका। बेनाम ब्लॉक और जुड़ी हुई ड्रॉइंग की पेशकश नहीं होती। प्रॉम्प्ट अगले ब्लॉक के लिए लौटता है; पूरा कमांड एक पूर्ववत करने का चरण है।

### PASTEBLOCK

{{cmd:PASTEBLOCK}} वह चिपकाता है जो आपने कॉपी किया ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) एक ब्लॉक के रूप में: डालने का बिंदु चुनें और एक नए ब्लॉक का एक संदर्भ वहाँ जाता है, चुना हुआ। ब्लॉक को अपना नाम मिलता है (`A$C` और एक संख्या); {{cmd:RENAME}} उसे आपका नाम देता है। एक पूर्ववत करने का चरण संदर्भ और ब्लॉक दोनों हटाता है।

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} बदले जाने वाले ब्लॉक और उसकी जगह रखे जाने वाले ब्लॉक का नाम पूछता है (`?` ब्लॉकों की सूची देता है), फिर मॉडल में, हर शीट पर और भीतर के ब्लॉकों में हर संदर्भ बदलता है। हर संदर्भ अपना स्थान, स्केल, घुमाव, लेयर और दोनों ब्लॉकों में मौजूद एट्रिब्यूट के मान रखता है; केवल नए ब्लॉक के एट्रिब्यूट अपने डिफ़ॉल्ट पर शुरू होते हैं, और यह बताता है कौन से मान हटे। जब पुराने ब्लॉक को कुछ इस्तेमाल न करे, तो वह उसे हटाने की पेशकश करता है। लिंक की गई ड्रॉइंग और ऐसे प्रतिस्थापन को अस्वीकार करता है जो एक ब्लॉक को उसी के भीतर डाल दे। एक पूर्ववत करने का चरण।

### MINSERT

{{cmd:MINSERT}} एक ब्लॉक को पंक्तियों और कॉलमों में रखता है: ब्लॉक का नाम, डालने का बिंदु, स्केल, घुमाव, पंक्तियों और कॉलमों की संख्या, और उनके बीच की दूरी। पूरा समूह घुमाव के साथ घूमता है। हर एक अपना संदर्भ है (अधिकतम 10,000), इसलिए बाद में उनमें से किसी को भी हिलाया या मिटाया जा सकता है।

### BLOCKSPALETTE

उपनाम: `BLOCKSPAL`; या {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}। फ़िल्टर में कर्सर के साथ {{ui:Blocks}} पैनल दिखाता है। हर ब्लॉक की एक छोटी तस्वीर होती है; सबसे हाल में रखे गए पहले आते हैं। फ़िल्टर के बगल के दो बटन तस्वीरों की सूची और ग्रिड के बीच बदलते हैं। ब्लॉक को {{cmd:INSERT}} से रखने के लिए तस्वीर पर क्लिक करें (या {{ui:Insert}}), या उसे ड्रॉइंग पर खींचें ताकि वह जहाँ छोड़ें वहाँ जाए।

{{ui:Libraries}}, सूची के नीचे: {{ui:Add a drawing}} आपकी अपनी DWG या DXF फ़ाइल लेता है और उसके ब्लॉक तस्वीरों के साथ सूचीबद्ध करता है, और पूरी ड्रॉइंग को एक ब्लॉक के रूप में। एक को रखने पर उसकी परिभाषा (और जिन ब्लॉकों को वह भीतर रखता है, और उनकी लेयर) इस ड्रॉइंग में कॉपी होती है, जैसे {{cmd:INSERT}} के `File` विकल्प से होता है; वही परिभाषा वाला ब्लॉक जो यहाँ पहले से है बिना पूछे इस्तेमाल होता है, एक ही नाम का अलग परिभाषा वाला {{ui:Keep existing}} या {{ui:Rename}} पूछता है। ब्राउज़र में फ़ाइल पेज बंद होने तक रहती है। CadCraft Studio में {{ui:Add a folder}} एक फ़ोल्डर की ड्रॉइंग सूचीबद्ध करता है, हर एक उस पर क्लिक करने पर खुलती है, और फ़ाइलें और फ़ोल्डर याद रखे जाते हैं। छोटा x लाइब्रेरी को सूची से हटाता है; फ़ाइल को नहीं छुआ जाता। साझा {{ui:Library}} अलग चीज़ है: देखें [फ़ाइल या लाइब्रेरी से डालें](topic:insert-from-file-and-library)।

### BCONVERT

या {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}। दोहराई गई ज्यामिति ढूँढता है और हर प्रति को एक ब्लॉक के संदर्भ में बदलता है।

- `Select the objects that repeat, or [Block]`: एक प्रति के ऑब्जेक्ट। `B` इसके बजाय एक मौजूदा ब्लॉक का नाम लेता है, ताकि उसके ऑब्जेक्ट की अलग प्रतियाँ मिलें।
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` और `P` बदलते हैं कि प्रति में क्या गिना जाए; {{key:Enter}} खोजता है। सेटिंग्स याद रखी जाती हैं।
- `Name for the new block <Block1>`, फिर `Specify the block's base point` ({{key:Enter}} चयन के निचले-बाएँ कोने को लेता है)।
- वह बताता है कि कितने और ऑब्जेक्ट-समूह वही ज्यामिति हैं, वह सब हाइलाइट करता है जो वह बदल देगा, और `Yes/No` पूछता है।

प्रति वही ऑब्जेक्ट है जो किसी भी कोण पर हिले और घुमाए गए हों (और चालू होने पर एक ही गुणक से दर्पण-प्रतिबिंबित या स्केल किए गए): हर ऑब्जेक्ट का अपना समकक्ष होना चाहिए, चयन के आकार के दस लाखवें हिस्से की सहनशीलता के भीतर। हर संदर्भ का अपना घुमाव और स्केल होता है (दर्पण-प्रतिबिंब वाले का Y स्केल ऋणात्मक), और वह लेयर जिस पर उसके ऑब्जेक्ट साझा थे। लॉक लेयर के ऑब्जेक्ट छोड़ दिए जाते हैं और गिने जाते हैं। यह खुली जगह (मॉडल या खुली शीट) खोजता है। बहुत बड़ी खोज एक कार्य-सीमा पर रुकती है और यह बताती है। एक पूर्ववत करने का चरण।

### BSEARCH

या {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}। `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: ब्लॉक नाम का कोई हिस्सा, या `*` और `?` वाला पैटर्न। हर ब्लॉक को यहाँ और पूरी ड्रॉइंग में उसके संदर्भों के साथ सूचीबद्ध करता है।
- `A`: एक एट्रिब्यूट मान, या `TAG=value`। वे ब्लॉक सूचीबद्ध करता है जिनके संदर्भ उसे रखते हैं, मिले हुए मानों के साथ। स्थिर (constant) एट्रिब्यूट भी गिने जाते हैं।
- `G`: ऑब्जेक्ट चुनें, या एक ब्लॉक संदर्भ, और वे ब्लॉक सूचीबद्ध होते हैं जिनकी आकृति कम से कम 85% मिलती है, सबसे अच्छे पहले। आकार, घुमाव और दर्पण-प्रतिबिंब नहीं गिने जाते। माप बाहरी रेखाओं पर फैले बिंदुओं के बीच की दूरियों की तुलना करता है, इसलिए यह मिलते-जुलते आकार ढूँढता है; हूबहू प्रतियों के लिए {{cmd:BCONVERT}} इस्तेमाल करें।

खुली जगह में मिले संदर्भ चुने जाते हैं, अगले कमांड के लिए तैयार।

### BREPLACE

या {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}। `Replace [Selected/All]`: `S` आपके चुने ब्लॉक संदर्भों को उस ब्लॉक से बदलता है जिसका आप नाम लेते हैं; `A` एक ब्लॉक और उसका प्रतिस्थापन माँगता है और हर संदर्भ बदलता है, जैसे {{cmd:BLOCKREPLACE}} करता है (वही कोड)। संदर्भ अपना स्थान, स्केल, घुमाव, लेयर और दोनों ब्लॉकों में मौजूद एट्रिब्यूट के मान रखता है; जिन मानों के लिए नए ब्लॉक में जगह नहीं है, वे हटते हैं और नाम से बताए जाते हैं। `?` ब्लॉक सूचीबद्ध करता है। एक पूर्ववत करने का चरण।

### DATAEXTRACTION

उपनाम: `EATTEXT`, `DX`; या {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}। ब्लॉक, उनके एट्रिब्यूट और ऑब्जेक्ट गुण एक टेबल या CSV फ़ाइल के रूप में सूचीबद्ध करता है।

- चयन पर काम करता है, या `Select objects (Enter: everything in this space)` पूछता है।
- `List: [Blocks/Objects/All]` जब चयन में दोनों हों। बेनाम ब्लॉक, टेबल और बिल ऑफ़ मटीरियल कभी सूचीबद्ध नहीं होते।
- यह चुनने योग्य कॉलम छापता है (नाम, प्रकार, लेयर, X, Y, घुमाव, स्केल, लंबाई, क्षेत्रफल, रंग, लाइनटाइप, स्पेस, और हर एट्रिब्यूट टैग के लिए एक), फिर `Columns, by name or number with commas between`। {{key:Enter}} तारे वाले चुनता है: ब्लॉक के लिए नाम और हर एट्रिब्यूट; ऑब्जेक्ट के लिए प्रकार, लेयर और लंबाई।
- `Put identical rows together with a count? [Yes/No] <Yes>`, फिर `Put the list in a: [Table/Csv] <Table>`। टेबल एक साधारण टेबल है ({{cmd:TABLEDIT}} उसे संपादित करता है) और लाइव नहीं है: ड्रॉइंग बदलने पर कमांड फिर चलाएँ।
- जो कॉलम सूची में नहीं है उसे अस्वीकार करता है। एक टेबल में 1,999 डेटा पंक्तियाँ आती हैं; CSV फ़ाइल सब लेती है।

### COUNTTABLE

चयन (या खुली जगह) के ब्लॉक संदर्भ गिनता है और गिनतियाँ एक टेबल (`Block`, `Count`) या CSV फ़ाइल में रखता है। ऐसी गिनती जो ड्रॉइंग के साथ खुद चलती है, उसके लिए देखें {{cmd:BOMTABLE}}।

## शीट और प्लॉटिंग

### LAYOUT

उपनाम: `LO`, `NEWLAYOUT`; या ड्रॉइंग के नीचे {{ui:+}} बटन। एक बॉर्डर, एक टाइटल ब्लॉक और एक व्यूपोर्ट वाली नई शीट, ISO A3 पर (इंच या फ़ुट वाली ड्रॉइंग के लिए Tabloid)। कोई सवाल नहीं।

### MVIEW

उपनाम: `MV`। केवल शीट पर ({{cmd:VPORTS}} शीट पर वही करता है)।

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`। व्यूपोर्ट पूरा मॉडल एक मानक स्केल पर दिखाता है।
- `P` (Polygonal): रूपरेखा के कोनों पर क्लिक करें (`Undo`, `Close`), हो जाने पर {{key:Enter}}। तीन से कम कोने हों तो अस्वीकार करता है।
- `O` (Object): `Select a closed object for the viewport's outline`: शीट पर एक बंद पॉलीलाइन, वृत्त या दीर्घवृत्त। व्यूपोर्ट उसका आकार लेता है (वक्र छोटे सीधे टुकड़ों के रूप में); ऑब्जेक्ट जैसा था वैसा रहता है। जो ऑब्जेक्ट बंद नहीं है उसे अस्वीकार करता है।

### VPCLIP

शीट पर पहले से मौजूद एक व्यूपोर्ट को क्लिप करता है। `Select viewport to clip` (या पहले उसे चुनें), फिर `Select the object to clip to [Polygonal/Delete]`:

- एक बंद पॉलीलाइन, वृत्त या दीर्घवृत्त पर क्लिक करें, या {{key:Enter}} (या `P`) से बहुभुज के कोनों पर क्लिक करें।
- `D` (Delete, जब व्यूपोर्ट क्लिप हो तब उपलब्ध) उसे फिर आयत बना देता है: उस रूपरेखा के चारों ओर का बॉक्स जो उसकी थी।
- व्यूपोर्ट जो दिखाता है वह कागज़ पर नहीं हिलता, और उसका स्केल वही रहता है। मॉडल केवल रूपरेखा के भीतर बनता और प्लॉट होता है, और बॉर्डर उसका अनुसरण करता है। एक पूर्ववत करने का चरण।
- क्लिप किए गए व्यूपोर्ट पर उसकी रूपरेखा के हर कोने पर एक ग्रिप होती है, उसके केंद्र और उसके बॉक्स के चार कोनों के अलावा (बॉक्स का कोना खींचने पर रूपरेखा उसके साथ खिंचती है)। Properties Outline दिखाता है: Rectangle, या Clipped और कोनों की संख्या।
- DWG और DXF 2000 फ़ाइलें रूपरेखा CadCraft के लिए रखती हैं। दूसरे प्रोग्राम व्यूपोर्ट को उसके चारों ओर के आयत के रूप में खोलते हैं; DXF R12 केवल आयत रखता है।
- मॉडल टैब पर यह बताता है कि व्यूपोर्ट शीटों पर होते हैं।

### VPORTS

उपनाम: `VIEWPORTS`। {{cmd:SPLIT}} शीट से भी वही है, और {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} उसे चलाते हैं। मॉडल पर: `Enter number of panes [SIngle/2/3/4] <3>`; `2` `[Horizontal/Vertical] <Vertical>` पूछता है (Vertical = बगल-बगल), `3` `[Left/Right] <Right>` पूछता है (बड़ा खंड कहाँ जाए)। हर खंड अपना व्यू और स्पेस रखता है; क्लिक एक खंड को सक्रिय बनाता है। शीट पर यह {{cmd:MVIEW}} है। देखें [स्क्रीन बाँटें](topic:split-screen)।

### VPVIEW

कोई उपनाम नहीं। केवल शीट पर।

- `Select viewport` (चुना हो तो छूट जाता है), फिर मॉडल पर: `Specify first corner of the window to show`, `Specify opposite corner`।

### UCS

कोई उपनाम नहीं। आपकी अपनी निर्देशांक प्रणाली; कोई संपादन नहीं। `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: एक बिंदु नया मूल है, फिर `Specify point on X-axis (Enter keeps the angle)`। `Z`: `Specify rotation angle about Z axis <90>`। `3`: मूल, धनात्मक X धुरी पर एक बिंदु, धनात्मक-Y तरफ़ एक बिंदु। `OB`: `Select object to align UCS`। `NA`: `[Restore/Save/Delete/?]` और एक नाम। व्यू ऐसे घूमता है कि नई X धुरी सीधी हो। देखें [व्यू घुमाएँ और अपने निर्देशांक इस्तेमाल करें](topic:ucs-and-turned-view)।

### PLAN

कोई उपनाम नहीं। `Enter an option [Current ucs/Ucs/World] <Current ucs>`: सक्रिय खंड का व्यू ऐसे घुमाता है कि UCS की X धुरी (या दुनिया की) सीधी हो। ड्रॉइंग का कुछ नहीं हिलता।

### TURNLEFT, TURNRIGHT, TURNWORLD

कोई उपनाम नहीं; या {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}। `UCS Z -90`, `UCS Z 90` और `UCS W` जैसा ही, व्यू उसके साथ चलता है।

### VPLAYER

कोई उपनाम नहीं। शीट पर, या किसी व्यूपोर्ट के भीतर। `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` लेयर के नाम पूछते हैं (कॉमा, `*` और `?` वाइल्डकार्ड), फिर `[All/Select/Current] <Current>` व्यूपोर्ट; Reset हर लेयर को उसके "नए व्यूपोर्ट में फ़्रीज़" डिफ़ॉल्ट पर लौटाता है; `V` वह डिफ़ॉल्ट सेट करता है (`[Frozen/Thawed]`), जिसे {{cmd:MVIEW}} इस्तेमाल करता है। `?` मौजूदा व्यूपोर्ट में फ़्रीज़ लेयर सूचीबद्ध करता है। लेयर पैनल का व्यूपोर्ट कॉलम एक व्यूपोर्ट के लिए वही करता है। देखें [एक व्यूपोर्ट में लेयर फ़्रीज़ करें](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport)।

### MSPACE

उपनाम: `MS`; या व्यूपोर्ट के भीतर डबल-क्लिक करें। केवल शीट पर। एक व्यूपोर्ट के ज़रिए मॉडल पर काम करें: चुना हुआ, या शीट पर अकेला, या `Click inside the viewport to work in`। उसके भीतर पैन और ज़ूम व्यूपोर्ट का व्यू बदलते हैं (जो व्यूपोर्ट डिस्प्ले-लॉक है वह अपना व्यू रखता है और शीट हिलती है); नया व्यू एक पूर्ववत करने का चरण है। देखें [व्यूपोर्ट के ज़रिए मॉडल पर काम करें](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)।

### PSPACE

उपनाम: `PS`; या व्यूपोर्ट के बाहर डबल-क्लिक करें, या ड्रॉइंग के नीचे किसी टैब पर क्लिक करें। शीट पर वापस।

### PLOT

उपनाम: `PRINT`, `PUBLISH`, `EXPORTPDF`; या {{key:Mod+P}}। {{ui:Plot to PDF}} संवाद बॉक्स खोलता है। देखें [PDF में प्लॉट करें](topic:plot-pdf)।

### PLOTSTYLES

उपनाम: `STYLESMANAGER`, `PSTABLES`; या {{ui:Plot to PDF}} संवाद बॉक्स में {{ui:Edit tables…}}। {{ui:Plot style tables}} खोलता है: हर रंग कैसे छपे (रंग, ग्रे, इंक, लाइनवेट), ड्रॉइंग के साथ रखा जाता है। देखें [प्लॉट स्टाइल टेबल](topic:plot-pdf#plot-style-tables)।

### CHSPACE

{{cmd:CHSPACE}} ऑब्जेक्ट को शीट और मॉडल के बीच एक व्यूपोर्ट से होकर ले जाता है, इस तरह स्केल और घुमाए गए कि दूसरी तरफ़ से एक जैसे दिखें। शीट पर ऑब्जेक्ट चुनें और वे मॉडल में जाते हैं (शीट पर एक से ज़्यादा हों तो व्यूपोर्ट चुनें)। जब आप {{cmd:MSPACE}} से व्यूपोर्ट के ज़रिए मॉडल पर काम कर रहे हों, तो चुने हुए ऑब्जेक्ट शीट पर आते हैं। यह बताता है वे कितने गुना बड़े या छोटे हुए। व्यूपोर्ट अपनी शीट पर रहते हैं। एक पूर्ववत करने का चरण।

### ISODRAFT

{{cmd:ISODRAFT}} आइसोमेट्रिक ड्राफ़्टिंग `ON` या `OFF` करता है, या सीधे `Left`, `Top` या `Right` प्लेन पर जाता है। चालू रहते हुए: Ortho ({{key:F8}}) लाइनों को प्लेन की दो धुरियों पर रखता है (left: 90° और 150°; top: 30° और 150°; right: 30° और 90°), पोलर ट्रैकिंग ({{key:F10}}) वही धुरियाँ अनुसरण करती है, ग्रिड पर स्नैप ({{key:F9}}) आइसोमेट्रिक ग्रिड इस्तेमाल करता है, और ग्रिड ({{key:F7}}) 30°, 90° और 150° पर लाइनों से बनता है। {{cmd:ELLIPSE}} को `Isocircle` मिलता है: एक केंद्र और एक त्रिज्या (या `Diameter`) दें और वह दीर्घवृत्त बनता है जो एक वृत्त मौजूदा प्लेन पर दिखता है। ड्रॉइंग समतल रहती है: ये किसी चित्रात्मक व्यू को बनाने के सहायक हैं, 3D मॉडल नहीं। यह सेटिंग इस सत्र के लिए है और फ़ाइल में नहीं रखी जाती।

### ISOPLANE

{{cmd:ISOPLANE}} वह आइसोमेट्रिक प्लेन चुनता है जिस पर आइसोमेट्रिक ड्राफ़्टिंग काम करती है: `Left`, `Top` या `Right`। Enter अगले प्लेन पर जाता है। आइसोमेट्रिक ड्राफ़्टिंग चालू होने पर {{key:F5}} कमांड के बीच में वही करता है; बंद होने पर {{key:F5}} ब्राउज़र के लिए छोड़ा जाता है।

## जाँच

### CAL

किसी गणना का मान छापता है, जैसे उसे पढ़ा जाता है जहाँ भी लंबाई टाइप होती है।

- `Expression`: उसे टाइप करें, जैसे `12'6"+3/4"` या `(24'-0")/3`, और {{key:Enter}} दबाएँ। CadCraft `= 12'-6 3/4"   (150.75 drawing units)` छापता है। देखें [टाइप किए मान में अंकगणित](topic:coordinate-entry#arithmetic-in-a-typed-value)।

### DIST

उपनाम: `DI`; या {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}।

- `Specify first point`, `Specify second point`। दूरी, कोण, Delta X और Delta Y छापता है।

### AREA

उपनाम: `AA`; या {{ui:View}} › {{ui:More}} › {{ui:Area}}। क्षेत्रफल और परिमाप छापता है।

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - कोने क्लिक करें या टाइप करें; `Specify next point (Enter closes) [Undo]` पर रूपरेखा बंद करने के लिए {{key:Enter}} दबाएँ। `U` आखिरी कोना वापस लेता है।
  - {{key:Enter}} या `O`, फिर `Select object`: एक वृत्त (उसकी परिधि छापता है), एक दीर्घवृत्त, एक पॉलीलाइन (खुली हो तो क्षेत्र के लिए एक सीधी रेखा से बंद होती है, और उसकी लंबाई छापी जाती है) या एक हैच (छेद घटाए जाते हैं)।
  - `A` (Add area) और `S` (Subtract area) एक चलता हुआ कुल रखते हैं: प्रॉम्प्ट `(ADD mode)` या `(SUBTRACT mode)` से शुरू होता है, हर क्षेत्र जुड़ता या घटता है, और हर बार के बाद `Total area = …` छपता है। इन मोड में `O` Enter तक ऑब्जेक्ट चुनता है, और पहले प्रॉम्प्ट पर {{key:Enter}} कमांड समाप्त करता है।

### MEASUREGEOM

उपनाम: `MEA`। `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; हर माप के बाद फिर पूछता है, `eXit` डिफ़ॉल्ट है।

`Quick` पॉइंटर के चारों ओर मापता है जैसे आप उसे हिलाते हैं: दाएँ, ऊपर, बाएँ और नीचे के निकटतम ऑब्जेक्ट तक की दूरी (मौजूदा UCS की धुरियों के अनुसार), जैसे-जैसे आप चलते हैं बनती हुई; और वह कोण जहाँ उनमें से दो पड़ोसी सीधे हों और मिलें। एक क्लिक चारों दूरियाँ, साफ़ चौड़ाई और ऊँचाई, और कोण इतिहास में लिखता है; Enter विकल्पों पर लौटाता है। यह स्क्रीन पर जो है उसे पढ़ता है।

- `D`: दो बिंदु, {{cmd:DIST}} की तरह।
- `R`: `Select arc or circle`; त्रिज्या और व्यास छापता है।
- `A`: एक चाप (उसका अंतर्गत कोण), एक लाइन और फिर दूसरी लाइन (उनके बीच का कोण, उनके दूर के सिरों की ओर), या {{key:Enter}} और तीन बिंदु (शीर्ष, फिर दो सिरे)।
- `AR`: {{cmd:AREA}} की तरह, एक क्षेत्र।

### ID

कोई उपनाम नहीं। `Specify point`; उसका X और Y छापता है।

### LIST

उपनाम: `LI`, `LS`। `Select objects`; हर ऑब्जेक्ट का प्रकार, लेयर और मुख्य माप छापता है।

### MASSPROP

{{cmd:MASSPROP}} चुने हुए क्षेत्रों और बंद ऑब्जेक्ट के खंड गुण एक साथ मिलाकर देता है: क्षेत्रफल, परिमाप, बाउंडिंग बॉक्स, केंद्रक, मूल से होकर X और Y धुरियों के बारे में जड़त्व आघूर्ण, जड़त्व का गुणनफल, जड़त्व की त्रिज्याएँ, केंद्रक के बारे में वही आघूर्ण, और मुख्य आघूर्ण उनकी धुरियों की दिशाओं के साथ। region के भीतर के छेद छेद गिने जाते हैं। आँकड़े ड्रॉइंग की इकाइयों में हैं और लाइनों और चापों से बनी रूपरेखा के लिए सटीक हैं; दीर्घवृत्त और स्प्लाइन छोटे सीधे खंडों के रूप में मापे जाते हैं, और यह यह बताता है। रिपोर्ट के बाद यह पूछता है कि क्या उसे एक टेक्स्ट फ़ाइल में लिखना है। जो ऑब्जेक्ट बंद नहीं हैं वे छूट जाते हैं, और यह बताता है कितने।

## व्यू, फ़ाइल और अन्य

### ZOOM

उपनाम: `Z`।

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`। विंडो के लिए दो कोने क्लिक करें। `E`, `A` या Enter: पूरी ड्रॉइंग।
- `P` (Previous, या टूलबार में {{ui:Previous}}) टैब के हर दृश्य पर 10 व्यू तक पीछे जाता है; पहिए के कई चरण या एक पैन एक व्यू गिना जाता है।
- `2`, `2x` या `0.5x` जैसी संख्या (या `S` और फिर संख्या) स्क्रीन के बीच से उतने कारक से ज़ूम करती है।
- `C` `Specify center point` और `Enter height or magnification (nX)` पूछता है।

### PDFATTACH, PDFIMPORT और PDF कमांड

उपनाम: `PDFATT` {{cmd:PDFATTACH}} के लिए, `PDFIM` {{cmd:PDFIMPORT}} के लिए। {{cmd:PDFATTACH}} ड्रॉइंग के नीचे एक PDF पेज रखता है (फ़ाइल, पेज, डालने का बिंदु, स्केल, घुमाव); {{cmd:PDFIMPORT}} एक पेज की लाइनें, वक्र, भराव और टेक्स्ट को PDF के नाम पर लेयरों में ड्रॉइंग ऑब्जेक्ट बनाता है, असली आकार पर, टाइप किए स्केल पर, या दो बिंदुओं और एक असली दूरी से स्केल किए। {{cmd:PDFCLIP}} एक अंडरले को क्लिप करता है, {{cmd:PDFADJUST}} फीका करना, कंट्रास्ट, मोनोक्रोम सेट करता है या उसे बंद करता है, {{cmd:PDFLAYERS}} PDF की अपनी लेयर चालू या बंद करता है, और {{cmd:PDF}} CadCraft को वे फ़ाइलें फिर देता है जो ड्रॉइंग के अंडरले इस्तेमाल करते हैं। देखें [PDF अंडरले](topic:pdf-underlay)।

### AUTOCOMPLETE

उपनाम: `AUTOC`। ड्रॉइंग का ऑटोकम्प्लीट: जब कोई कमांड न चल रहा हो, एक धूसर भूत दिखाता है कि आपकी ड्रॉइंग के अपने पैटर्न के अनुसार आगे क्या आता है। {{cmd:AUTOCOMPLETE}} उसे `On` या `Off` करता है (या Settings › CadCraft से भी), या `Show` से बताता है कि वह अभी क्या सुझाएगा। **Tab** भूत को एक पूर्ववत करने के चरण के रूप में खींचता है, **Esc** उसे तब तक हटाता है जब तक ड्रॉइंग न बदले। वह नवीनतम ऑब्जेक्ट में तीन चीज़ें ढूँढता है: किसी चीज़ की अगली प्रति जो दो बार या उससे ज़्यादा एक समान चरण पर बनी है (स्टड, कॉलम, सीढ़ी का राइज़र और ट्रेड), पॉलीलाइन सीढ़ी के अगले चरण, और कमरे या दीवार की शृंखला की गायब भुजा। {{cmd:LINE}} या {{cmd:PLINE}} के बीच में भूत **अगला बिंदु** होता है: सीढ़ी का अगला चरण (राइज़र, ट्रेड, राइज़र…), आयत का चौथा कोना, वह बिंदु जो उसे बंद करता है, या एक और समान चरण। कर्सर उसके पास लाएँ और **Tab** दबाएँ, जैसे आपने वहाँ क्लिक किया हो; आगे बढ़ें या Enter दबाएँ। यह इसी कंप्यूटर पर नियमों से निकाला जाता है, बिना किसी मॉडल के।

### AUTOSHEET

उपनाम: `ASH`। जो शीटें अपना लेआउट खुद बनाती हैं। {{cmd:AUTOSHEET}} ड्रॉइंग के टुकड़े लेता है (आपके नामित व्यू, या मॉडल के अलग टुकड़े, या पूरा मॉडल), कागज़ का आकार चुनता है (या जो आप दें), हर टुकड़े को एक मानक स्केल देता है (सबके लिए एक, या जितना हर एक ले सके), और व्यू नई शीटों पर पंक्तियों में रखता है, हर एक के नीचे टाइटल ब्लॉक और कैप्शन (नाम और स्केल) के साथ। जो एक शीट पर फ़िट न हो उसकी अपनी शीट बनती है। एक पूर्ववत करने का चरण। यह इसी कंप्यूटर पर नियमों से निकाला जाता है, बिना किसी मॉडल के।

### PHOTOSKETCH

उपनाम: `PSK`। फ़ोटो से ड्रॉइंग। कागज़ पर हाथ के स्केच की एक फ़ोटो (JPEG, PNG या TIFF) चुनें। {{cmd:PHOTOSKETCH}} शीट के चारों कोने ढूँढता है, परिप्रेक्ष्य सीधा करता है, वह कागज़ का आकार लेता है जो आप नाम दें (`Paper`, या सबसे नज़दीकी मानक) और स्केच का `Scale` (1 : n), फिर पेन की लाइनों को लाइनों, चापों और वृत्तों में ट्रेस करता है, हर पेन के रंग (काला, लाल, नीला, हरा) के लिए एक लेयर। यदि वह कागज़ का किनारा न ढूँढ पाए तो पूरी फ़ोटो को शीट मानता है और यह बताता है। अक्षर छोड़ दिए जाते हैं। एक पूर्ववत करने का चरण। यह इसी कंप्यूटर पर क्लासिक इमेज प्रोसेसिंग से होता है, कोई मॉडल नहीं, कुछ कहीं नहीं भेजा जाता। स्कैन की गई ड्रॉइंग के कमांड भी देखें।

### AUTODIM

उपनाम: `ADIM`। नियमों से ऑटो-डाइमेंशन। {{cmd:AUTODIM}} चुने हुए ऑब्जेक्ट (या पूरी ड्रॉइंग) को उनके स्तर और सीधे किनारों से डाइमेंशन करता है: आपके चुने किनारों (`Sides`) के साथ डाइमेंशन की एक शृंखला, उसके बाहर एक कुल डाइमेंशन, हर खुलने की चौड़ाई (सरेखित दीवार लाइनों के बीच का अंतर), हर छेद के आकार के लिए एक व्यास, और `Grid` के साथ ग्रिड लाइनों के बीच की दूरी। जो डाइमेंशन पहले से है वह फिर नहीं बनाया जाता। एक पूर्ववत करने का चरण। यह इसी कंप्यूटर पर नियमों से निकाला जाता है, बिना किसी मॉडल के।

### GRIDMOVE

उपनाम: `GM`। ग्रिड लाइन हिलाने पर उसका पूरा समूह साथ जाता है। {{cmd:GRIDMOVE}} एक ग्रिड लाइन (ऐसी लेयर पर लाइन जिसका नाम grid या axis कहता है) और उस पर टिकी चीज़ें हिलाता है: जिन दीवारों का सिरा लाइन पर है वे उसके साथ खिंचती हैं, जो दीवारें उसके साथ-साथ हैं वे पूरी हिलती हैं, लाइन पर के कॉलम (ब्लॉक संदर्भ और वृत्त), उसका बबल और टैग हिलते हैं, और जिन डाइमेंशन के बिंदु उस पर हैं वे नई दूरी मापते हैं। दो बिंदु दें (केवल लाइन के आर-पार का हिस्सा गिना जाता है) या `Distance`। एक पूर्ववत करने का चरण सब कुछ वापस लाता है। यह इसी कंप्यूटर पर नियमों से होता है।

### DETAILS

उपनाम: `DET`। ऐसे डिटेल जो आपको खुद मिलते हैं। {{cmd:DETAILS}} आपकी फ़र्म के अपने डिटेल रखता है: `Add` इस ड्रॉइंग का एक ब्लॉक सूची में डालता है, `List` और `Remove` उसे प्रबंधित करते हैं, और `Find` चुने हुए ऑब्जेक्ट (या जो आपने आखिरी बार बनाया) के लिए उन्हें क्रम देता है, उसकी लेयर, ब्लॉक नामों, हैच पैटर्न और नोट के शब्दों से हर डिटेल के नाम और नोट मिलाकर, ताकि एक विंडो हेड आपकी सिल फ़्लैशिंग ढूँढ ले। स्थान रखने के लिए एक नंबर और एक बिंदु चुनें। `Hint` चालू होने पर (Settings › CadCraft से भी), ऐसा कुछ चुनना जिससे कोई डिटेल मेल खाए स्टेटस बार में एक पंक्ति दिखाता है। सूची इस ब्राउज़र में, इसी कंप्यूटर पर रखी जाती है, और वही खोजी जाती है। `Share` उसे आपके Documents फ़ोल्डर में भी रखता है (`.cadcraft/firm-details.json`, हर ब्लॉक की ड्रॉइंग के साथ): `Pull` वह जोड़ता है जो आपकी टीम के पास है और आपके पास नहीं, `Push` वह जोड़ता है जो आपके पास है और उनके पास नहीं, `Both` दोनों करता है, और दोनों में से किसी से कुछ नहीं हटता। पहले Documents फ़ोल्डर खोलें ({{cmd:DOCUMENTS}}); जब वह फ़ोल्डर Team Cloud Plan का फ़ोल्डर हो, तो पूरी टीम एक सूची साझा करती है। लाइब्रेरी पैनल में एक डिटेल आइटम पर **Add to my firm's details** बटन है जो उसे उसी सूची में डालता है। इसी कंप्यूटर पर, शब्दों से, बिना किसी मॉडल के होता है।

### SKETCHFIX

उपनाम: `SKF`। हाथ के स्केच सटीक ज्यामिति बनते हैं। एक समय में एक मुक्त स्ट्रोक दबाकर खींचें (पेन, माउस या उँगली से), फिर Enter। हर स्ट्रोक एक लाइन, वृत्त, चाप, आयत या पॉलीलाइन के रूप में पढ़ा जाता है: लगभग समतल और सीधी लाइनें बिल्कुल समतल और सीधी बनती हैं, एक बंद गोल स्ट्रोक एक वृत्त बनता है, समकोण वाले चार कोनों का बंद स्ट्रोक एक आयत, और स्ट्रोक के सिरे एक-दूसरे की ओर और ड्रॉइंग में पहले से मौजूद सिरों पर खिंचते हैं। एक पूर्ववत करने का चरण। इसी कंप्यूटर पर नियमों से होता है, बिना किसी मॉडल के।

### SCANATTACH और स्कैन ड्रॉइंग के कमांड

उपनाम: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} का कोई उपनाम नहीं। ये एक चित्र पर काम करते हैं, हर एक एक पूर्ववत करने का चरण। {{cmd:SCANATTACH}} एक PNG, JPEG, TIFF (एक पेज या सारे) या एक PDF पेज डालता है जो चित्र है। {{cmd:SCANSCALE}} दो चुने बिंदुओं और सही दूरी से शीट स्केल करता है। {{cmd:SCANALIGN}} शीट को दो बिंदुओं पर हिलाता और घुमाता है (`Scale the sheet to fit` Yes/No)। {{cmd:SCANDESKEW}} शीट की लंबी लाइनों का कोण दिखाता है और आपके `Accept` या `Value` देने पर शीट घुमाता है। {{cmd:SCANCLEAN}} उसे काला-सफ़ेद करता है (`Threshold` Auto/Adaptive/Level, `Specks`) और `Run`। {{cmd:SCANCROP}} एक विंडो रखता है। {{cmd:SCANERASE}} एक `Rectangle`, `Polygon` या `Lasso` मिटाता है। {{cmd:SCANTRACE}} लाइनें और चाप एक नई लेयर पर ट्रेस करता है (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) और बताता है कि उसने क्या पाया और क्या रास्टर छोड़ा। {{cmd:SCANINFO}} मूल फ़ाइल और कदम सूचीबद्ध करता है। {{cmd:RASTERSNAP}} स्कैन की गई शीटों की लाइनों पर स्नैपिंग On या Off करता है। देखें विषय स्कैन की गई ड्रॉइंग और ट्रेस।

### REGEN और REGENALL

उपनाम: `RE` {{cmd:REGEN}} के लिए, `REA` {{cmd:REGENALL}} के लिए। ड्रॉइंग से स्क्रीन पर जो बना है उसे फिर बनाता है: {{cmd:REGEN}} जिस टैब को आप देख रहे हैं उसे (शीट पर, उसके व्यूपोर्ट जो मॉडल दिखाते हैं वह भी), {{cmd:REGENALL}} हर टैब, हर स्प्लिट-स्क्रीन खंड और हर खुली ड्रॉइंग को। जब किसी स्क्रिप्ट या बहुत बड़े बदलाव के बाद, या किसी सहायक ने ड्रॉइंग बदली हो और तस्वीर पुरानी लगे, तब इस्तेमाल करें; ड्रॉइंग खुद नहीं छुई जाती, इसलिए पूर्ववत करने को कुछ नहीं है।

### NAMEDVIEW

उपनाम: `NV`, `VIEWS`। `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, फिर व्यू का नाम। `S` स्क्रीन का व्यू सहेजता है, `W` एक विंडो जो आप चुनते हैं, `R` एक सहेजा हुआ व्यू दिखाता है, `D` एक हटाता है, `?` इस टैब के व्यू सूचीबद्ध करता है। मौजूदा नाम के तहत सहेजने पर वह बदल जाता है; हर बदलाव एक पूर्ववत करने का चरण है। व्यू उस टैब के होते हैं जिस पर वे सहेजे गए। DWG और DXF फ़ाइलें उन्हें रखती हैं (VIEW टेबल); शीट के व्यू पहली शीट पर लौटते हैं, क्योंकि फ़ाइल यह नहीं बताती कि कौन सा।

### UNDO और REDO

उपनाम: {{cmd:UNDO}} के लिए `U`; {{cmd:REDO}} का कोई उपनाम नहीं। साथ ही {{key:Mod+Z}} और {{key:Mod+Y}}।

### LAYER

उपनाम: `LA`। {{ui:Layers}} पैनल पर ले जाता है।

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` या एक नाम (`?` उन्हें सूचीबद्ध करता है: Continuous, ड्रॉइंग के अपने, और DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE, उनके `2` (आधा) और `X2` (दोगुना) आकार के साथ)। {{cmd:LWEIGHT}} (`LW`): नए ऑब्जेक्ट के लिए लाइनवेट mm में, या `ByLayer`, `ByBlock`, `Default`। {{cmd:LTSCALE}} (`LTS`): ड्रॉइंग का लाइनटाइप स्केल (पूर्ववत करने योग्य)। {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — स्टेटस बार के {{ui:LWT}} बटन जैसा ही। देखें [लाइनवेट और लाइनटाइप](topic:units-papers-scales#line-weights-and-linetypes)।

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, फिर नया नाम; ऑब्जेक्ट या संदर्भ साथ चलते हैं। {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` Enter तक, फिर `Select object on target layer or [Name]` और `Y`। {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, फिर `Y`: लेयर और उस पर का हर ऑब्जेक्ट जाता है (लेयर 0, DEFPOINTS या मौजूदा लेयर नहीं)। हर एक एक पूर्ववत करने का चरण। देखें [लेयर से ड्रॉइंग व्यवस्थित करें](topic:layers#rename-merge-and-delete-layers)।

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

ऑब्जेक्ट चुनकर लेयर; {{ui:Layers}} पैनल के {{ui:Tools}} मेन्यू में भी। {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, फिर {{key:Enter}}: बाकी हर लेयर बंद। {{cmd:LAYUNISO}} उन्हें वापस चालू करता है। {{cmd:LAYOFF}} और {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (या फ़्रीज़ होने वाली), बार-बार; `U` आखिरी वापस लेता है, {{key:Enter}} समाप्त करता है। {{cmd:LAYMCUR}}: `Select object whose layer will become current`। {{cmd:LAYON}} हर लेयर चालू करता है, {{cmd:LAYTHW}} हर लेयर अनफ़्रीज़ करता है। हर कमांड एक पूर्ववत करने का चरण है। देखें [लेयर से ड्रॉइंग व्यवस्थित करें](topic:layers#work-on-layers-by-picking-objects)।

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} एक खाली ड्रॉइंग शुरू करता है और {{cmd:OPEN}} एक DWG या DXF खोलता है, हर एक ड्रॉइंग के ऊपर अपने टैब में (बिना बदली नई ड्रॉइंग के बजाय एक अप्रयुक्त नई ड्रॉइंग इस्तेमाल होती है)। बिना सहेजे बदलाव वाला टैब बंद करने पर पहले पूछा जाता है। देखें [स्क्रीन बाँटें](topic:split-screen)।

{{cmd:SAVE}} (उपनाम `QSAVE`, साथ ही {{key:Mod+S}}) ड्रॉइंग के प्रारूप में एक प्रति डाउनलोड करता है: DWG यदि वह DWG से खुली थी, DXF यदि DXF से। नई ड्रॉइंग इस ब्राउज़र में Save as के लिए आखिरी चुना गया प्रारूप लेती है, नहीं तो DWG।

{{cmd:SAVEAS}} (साथ ही {{key:Mod+Shift+S}}) {{ui:Save a copy as}} संवाद बॉक्स खोलता है: {{ui:DWG}} (और उसका {{ui:Version}}), {{ui:DXF R12}} या {{ui:DXF 2000}} चुनें, फिर {{ui:Save}}। चुनाव इस ड्रॉइंग और इस ब्राउज़र की नई ड्रॉइंग के लिए बना रहता है।

{{cmd:DXFOUT}} हमेशा एक DXF R12 प्रति डाउनलोड करता है, {{cmd:SAVE}} के इस्तेमाल किए प्रारूप को बदले बिना।

देखें [फ़ाइलें: क्या खुलता है, क्या सहेजा जाता है](topic:files#saving)।

### TOUR

उपनाम: `TUTORIAL`। पहली ड्रॉइंग का छह-चरण का दौरा फिर से शुरू करता है। देखें [शुरुआत करना](topic:getting-started#prefer-to-be-guided)।

### TOOLBARDOCK

उपनाम: `TBDOCK`। `Toolbar position [Top/Bottom/Left/Right]`। देखें [सेटिंग्स](topic:settings#toolbar-position)।

### COMMANDLINE

उपनाम: `CMDLINE`। `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: कमांड लाइन को डॉक या फ़्लोट करता है, उसे एक पंक्ति बनाता है, पूछता है कितनी इतिहास पंक्तियाँ दिखें (0 से 12), या इतिहास खोलता है। देखें [सेटिंग्स](topic:settings#command-line)।

### TOPAREA

`Top area [Standard/Compact]`: ड्रॉइंग के ऊपर की पट्टियाँ जैसी थीं वैसी, या संक्षिप्त। देखें [सेटिंग्स](topic:settings#top-area)।

### POLARANG

`Enter polar angle step in degrees <90>`: वह चरण जिस पर {{ui:Polar}} ट्रैकिंग रेखाएँ लगती हैं (0 से अधिक, 180 तक)। इस ब्राउज़र में रखा जाता है।

### UNITS

उपनाम: `UN`। लंबाइयाँ कैसे लिखी और टाइप की जाती हैं।

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural और Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 या 256)`। बाकी: `Enter number of decimal places (0 to 8)`।

नए डाइमेंशन इसका अनुसरण करते हैं। एक पूर्ववत करने का चरण। {{ui:Current settings}} में {{ui:Length format}} और {{ui:Precision}} के समान; देखें [फ़ुट और इंच](topic:units-papers-scales#feet-and-inches-and-fractions)।

### GDSIN

उपनाम: `GDS`। एक IC लेआउट (GDSII स्ट्रीम फ़ाइल) देखें: लैब स्पाइक, केवल देखने और मापने के लिए।

- एक फ़ाइल चयनकर्ता `.gds` फ़ाइल लेता है; कई टॉप सेल हों तो `Enter the top cell to draw`।
- हर लेयर और डेटाटाइप एक ड्रॉइंग लेयर बनता है (`GDS 1`, `GDS 2/5`), संदर्भ और ऐरे समतल रखे जाते हैं, फ़ाइल की user unit में (आम तौर पर माइक्रोमीटर)। एक पूर्ववत करने का चरण। कुछ भी सिम्युलेट या जाँचा नहीं जाता और फ़ाइल वापस नहीं लिखी जाती।

### DIAGRAM

उपनाम: `TEXTDIAGRAM`, `T2D`। टेक्स्ट से एक डायग्राम।

- एक बॉक्स टेक्स्ट लेता है (या कमांड लाइन पर `;` से अलग एक पंक्ति): एक Mermaid फ़्लोचार्ट, एक PlantUML कंपोनेंट डायग्राम, D2 या एक from-to सूची।
- `Specify the top left corner of the diagram`, फिर `Specify the text height`।

ब्लॉक और कनेक्टर लेयर `Diagram` पर साधारण ऑब्जेक्ट हैं, और समाप्त होने पर चुने हुए रहते हैं। एक पूर्ववत करने का चरण। देखें [टेक्स्ट से डायग्राम बनाएँ](topic:text-to-diagram)।

### OLELIST

उपनाम: `OLES`। वे OLE ऑब्जेक्ट जो एक DWG में हैं और जिन्हें CadCraft खुद नहीं रख सकता।

- हर एक को सूचीबद्ध करता है: नंबर, प्रकार, आकार, क्या उसने एक तस्वीर सहेजी।
- `Enter an option [Place/eXit] <eXit>`: Place नंबर, निचला-बायाँ कोना और चौड़ाई माँगता है, और तस्वीर वाला एक फ़्रेम बनाता है। एक पूर्ववत करने का चरण; रखा हुआ ऑब्जेक्ट नहीं बदलता। देखें [तस्वीरें](topic:pictures#objects-from-other-programs-ole)।

### SHXFONTS

उपनाम: `SHX`। आपके अपने SHX फ़ॉन्ट।

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} एक फ़ोल्डर की हर `.shx` पढ़ता है (CadCraft Studio; हर शुरुआत पर फिर), {{ui:Files}} चुनी हुई फ़ाइलें लेता है (ब्राउज़र), {{ui:Reverse}} एक फ़ॉन्ट के अक्षर आखिरी से पहले बिछाता है। टेक्स्ट स्टाइल जो लोड किए गए फ़ॉन्ट का नाम लेते हैं, उसमें बनते हैं। देखें [अपने SHX फ़ॉन्ट में टेक्स्ट बनाएँ](topic:shx-fonts)।

### LIMITS

ड्रॉइंग कितनी बड़ी होने के लिए है।

- `Specify lower left corner or [ON/OFF] <current>`: एक बिंदु, `ON` या `OFF`।
- `Specify upper right corner <current>`।

ग्रिड सीमाएँ भरता है, {{cmd:ZOOM}} All उन्हें दिखाता है, और उनके ON होने पर बाहर का बिंदु अस्वीकार होता है (`**Outside limits`)। एक पूर्ववत करने का चरण; DWG और DXF में सहेजी जाती हैं। देखें [ड्रॉइंग की सीमाएँ सेट करें](topic:drawing-limits)।

### AUNITS

उपनाम: `ANGUNITS`। कोण कैसे दिखते और टाइप होते हैं।

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, या बाकी दो के लिए `Enter precision` (0 डिग्री, 2 मिनट, 4 सेकंड, सेकंड के 5 से 8 दशमलव)।

एक पूर्ववत करने का चरण; DWG और DXF में सहेजा जाता है। {{ui:Current settings}} में {{ui:Angle format}} के समान। देखें [बियरिंग और कोण टाइप करें और दिखाएँ](topic:bearings-and-angles)।

### APPLOAD

उपनाम: `AP`; या {{ui:View}} › {{ui:More}} › {{ui:Load application…}}। {{ui:Load applications}} संवाद बॉक्स: `.lsp` रूटीन और `.dcl` डायलॉग फ़ाइलें लोड करें, उन्हें अनलोड करें, इतिहास से फिर लोड करें, और Startup Suite। एक रूटीन के `(defun c:NAME …)` कमांड फिर किसी दूसरे कमांड की तरह काम करते हैं। देखें [एप्लिकेशन लोड करें](topic:load-applications) और [LISP रूटीन चलाएँ](topic:run-lisp)।

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (या {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) आपकी उपनाम फ़ाइल खोलता है (`ALIAS, *COMMAND` पंक्तियाँ); {{ui:Save}} उसे लागू करता है। {{cmd:REINIT}} उसे फिर लागू करता है। देखें [कमांड उपनाम संपादित करें](topic:command-aliases)।

### LISPEDIT

उपनाम: `VLIDE`; या {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}। LISP एडिटर खोलता है, एक विंडो जो ड्रॉइंग के बगल में खुली रहती है।

- टेक्स्ट: लाइन नंबर, कर्सर पर के कोष्ठक का जोड़ीदार चिह्नित (कोई न हो तो लाल), {{key:Enter}} नई लाइन को खुले कोष्ठक के नीचे इंडेंट करता है, {{key:Tab}} दो स्पेस टाइप करता है, {{key:Esc}} टेक्स्ट छोड़ता है।
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): हर फ़ॉर्म पढ़ता है, जैसे {{cmd:APPLOAD}} फ़ाइल के साथ करता है, और उसके `c:` कमांड बनाता है। फ़ाइल {{cmd:APPLOAD}} की सूची में दिखती है।
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): चुने हुए फ़ॉर्म चलाता है, या वह फ़ॉर्म जिसमें कर्सर है।
- {{ui:Stop}}: चलते हुए रूटीन को रोकता है।
- {{ui:Console}}: रूटीन ने क्या छापा, और हर त्रुटि उसकी लाइन के साथ; किसी त्रुटि पर क्लिक करें तो वहाँ जाएँ। टेक्स्ट एक समय में एक टॉप-लेवल फ़ॉर्म चलता है, इसलिए लाइन उस फ़ॉर्म की है, या उसके भीतर वह लाइन जो उस फ़ंक्शन को बुलाती है जिसका नाम त्रुटि देता है।
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): एक `.lsp` फ़ाइल। टेक्स्ट इस ब्राउज़र में भी रखा जाता है, इसलिए विंडो बंद करने से वह नहीं खोता।
- टेक्स्ट के बगल में: वे फ़ंक्शन जो रूटीन परिभाषित करता है, वे जिन्हें वह बुलाता है और जो यह LISP अभी नहीं रखता, वे जिन्हें वह बुलाता है और जो न उसमें परिभाषित हैं न अंतर्निहित, और उनकी पूरी सूचियाँ कि क्या बना है और क्या नहीं।

जिस टेक्स्ट में कोष्ठक कभी बंद न हो, या स्ट्रिंग कभी खत्म न हो, वह नहीं चलता: लाइन का नाम बताया जाता है। कोई चरण-दर-चरण डीबगर, ब्रेकपॉइंट या वॉच विंडो नहीं है। देखें [LISP रूटीन चलाएँ](topic:run-lisp)।

### HELP

उपनाम: `?`। हर कमांड, उसके उपनाम और एक पंक्ति का विवरण कमांड लाइन इतिहास में छापता है। यह यह सहायता नहीं खोलता: उसके लिए {{key:F1}} दबाएँ या {{ui:Help}} पर क्लिक करें।

## Select objects प्रॉम्प्ट

किसी भी `Select objects` प्रॉम्प्ट पर: ऑब्जेक्ट पर क्लिक करें, विंडो (बाएँ से दाएँ) और क्रॉसिंग (दाएँ से बाएँ) दो क्लिक से खींचें, या लैसो दबाकर खींचें ({{key:Space}} खींचते समय: विंडो, क्रॉसिंग, बाड़), {{key:Shift}}+क्लिक से हटाएँ, और समाप्त करने के लिए {{key:Enter}} दबाएँ। आप `ALL` (सब कुछ), `L` (आखिरी ऑब्जेक्ट), `P` (Previous: आखिरी कमांड ने जो इस्तेमाल किया), `F` (Fence: वे ऑब्जेक्ट जिन्हें बिंदुओं की एक रेखा काटती है; `U` एक बिंदु वापस लेता है), `W` (Window), `C` (Crossing), `R` (Remove मोड: क्लिक ऑब्जेक्ट निकालते हैं; प्रॉम्प्ट `Remove objects` पढ़ता है) और `A` (फिर से Add) भी टाइप कर सकते हैं। `?` उनकी सूची देता है। वे प्रॉम्प्ट में नहीं दिखाए जाते। {{key:Tab}} एक-दूसरे पर के ऑब्जेक्ट पर अगले को हाइलाइट करता है; उसे चुनने के लिए क्लिक करें। देखें [ऑब्जेक्ट चुनें](topic:select-objects)।

### ACCESS

उपनाम: `AX`। बिना देखे ड्राफ़्टिंग। {{cmd:ACCESS}} Access चालू या बंद करता है (`On`, `Off`) और स्नैप की आवाज़ें (`Sound`) और बोले गए कमांड (`Voice`) बदलता है; पहले मौजूदा स्थिति बताता है। Access चालू होने पर हर कमांड और नतीजा आपकी स्क्रीन रीडर से बोला जाता है, और ड्रॉइंग क्षेत्र में कीबोर्ड कर्सर होता है। सहायता विषय "Draft without sight" में कुंजियाँ हैं।

### DESCRIBE

उपनाम: `DESC`। बताएँ कि ड्रॉइंग में क्या है: कितने ऑब्जेक्ट, किस प्रकार के, कितने बड़े, कितनी लेयर, क्या चुना गया है। केवल पढ़ता है; कुछ नहीं बदलता।

### WHEREAMI

उपनाम: `WHERE`। बताएँ कि कर्सर कहाँ है, ड्रॉइंग की इकाइयों में।

### NEARBY

बताएँ कि कर्सर के पास क्या है, सबसे नज़दीक पहले, हर एक अपनी दूरी और तरफ़ के साथ।

### SAYSEL

बताएँ कि क्या चुना है, हर ऑब्जेक्ट के लिए एक वाक्य (लाइन की लंबाई, सिरे और कोण; वृत्त की त्रिज्या और केंद्र; टेक्स्ट जैसा लिखा है)।

### VOICE

बोले गए कमांड चालू या बंद करें। वे इसी कंप्यूटर पर पहचाने जाते हैं; जहाँ ब्राउज़र ऐसा नहीं कर सकता, वहाँ आप Settings में ब्राउज़र की ऑनलाइन सेवा नहीं चुनते तब तक आवाज़ बंद रहती है।

### TOUCHCROSSHAIR

उपनाम: `TCX`। उँगली से ड्राफ़्टिंग के लिए ऑफ़सेट क्रॉसहेयर, ताकि उँगली का सिरा वह बिंदु न ढके जो आप चुनते हैं। चालू रहते हुए ड्रॉइंग पर एक उँगली कुछ नहीं चुनती: वह एक क्रॉसहेयर हिलाती है जो उँगली के ऊपर और एक तरफ़ रहता है। ऑब्जेक्ट स्नैप और ट्रैकिंग क्रॉसहेयर का अनुसरण करते हैं। उँगली उठाने पर कुछ नहीं चुना जाता और क्रॉसहेयर वहीं रहता है। चुनने के लिए ड्रॉइंग के कोने में {{ui:Click}} बटन दबाएँ, या दूसरी उँगली से ड्रॉइंग पर कहीं थपकी दें। दूसरी उँगली हिलाते समय {{ui:Click}} दबाए रखें ताकि खींचा जाए (चयन विंडो, लैसो, ग्रिप)। एक उँगली जो बिना हिले दबाकर रखी जाए, या {{ui:Enter}} बटन, Enter है। दो उँगलियाँ पहले की तरह पैन और ज़ूम करती हैं। नीचे के किनारे और दूर वाले किनारे के पास क्रॉसहेयर उँगली के करीब सिमट जाता है, ताकि ड्रॉइंग का हर हिस्सा पहुँच में रहे। पेन और माउस हमेशा सीधे चुनते हैं।

{{cmd:TOUCHCROSSHAIR}} स्थिति बताता है और `ON`, `OFF`, `Auto` (केवल वहाँ चालू जहाँ उँगली ही एकमात्र पॉइंटर हो, इसलिए माउस वाले कंप्यूटर पर बंद), `Distance` (क्रॉसहेयर उँगली से कितनी दूर रहे, 24 से 240 पिक्सेल) या `Side` (`Left`: ऊपर और बाईं ओर, दाएँ हाथ के लिए; `Right` बाएँ हाथ के लिए; बटन दूसरे कोने में चले जाते हैं) पूछता है। वही विकल्प Settings › CadCraft में हैं, और टचस्क्रीन वाले डिवाइस पर स्टेटस बार में {{ui:Offset crosshair}} स्विच होता है। विकल्प इस ब्राउज़र में रखे जाते हैं।

### WHOHAS

बताता है कि ड्रॉइंग किसने खोली है। CadCraft Studio में एक कंप्यूटर पर DWG या DXF खोलने से उसके बगल में एक छोटी लॉक फ़ाइल बनती है (`Plan.dwg.cclock`: कौन, कब से, कौन सा संस्करण), जो ड्रॉइंग खुली रहने तक हर मिनट ताज़ा होती है, और ड्रॉइंग बंद होने पर हटती है। किसी और की खुली ड्रॉइंग खोलने पर बताता है कि कौन और कब से, और {{ui:Open read-only}} (फिर सहेजने पर नया नाम माँगा जाता है), {{ui:Open anyway}} (दूसरे व्यक्ति को उसके अगले ताज़ा करने पर बताया जाता है) या {{ui:Cancel}} देता है। किसी और की खुली फ़ाइल पर सहेजने से पहले पूछा जाता है। पाँच मिनट से ताज़ा न हुआ लॉक पुराना माना जाता है: दूसरी प्रति बिना सहेजे बंद हो गई या कंप्यूटर सो रहा है।

{{cmd:WHOHAS}} पूछता है `Current` (खुली ड्रॉइंग), `File` (एक चुनें), `FOlder` (एक फ़ोल्डर चुनें: उसकी हर ड्रॉइंग जो कहीं खुली है सूचीबद्ध होती है), `Path` (पूरा पथ टाइप करें) या `Name` (वह नाम जो दूसरे देखते हैं; साइन इन होने पर आपके खाते का नाम)। Studio केवल वे फ़ोल्डर देख सकता है जो आपने चुने हैं: जिस फ़ोल्डर से खुली ड्रॉइंग कभी चुना नहीं गया, उसके लिए वह एक बार बताता है कि वह ड्रॉइंग को खुली नहीं दर्ज कर सकता; `FOlder` वह फ़ोल्डर चुनता है, और उसके बाद वहाँ लॉक काम करते हैं। लॉक लोगों के लिए एक नोट है, कोई रोक नहीं: दूसरा प्रोग्राम फिर भी फ़ाइल लिख सकता है। ब्राउज़र में फ़ोल्डर नहीं होते जिन्हें देखा जाए, और कमांड यह बताता है।

### OVERKILL

दोहराए गए ऑब्जेक्ट मिटाता है और ओवरलैप होती लाइनों और चापों को ठीक करता है, उन ड्रॉइंग के लिए जो दोहरी लाइनों से भरी आती हैं। `Select objects to clean up`, {{key:Enter}}, फिर दिखाई गई सेटिंग्स से साफ़ करने के लिए फिर {{key:Enter}}, या पहले एक बदलें:

- `Tolerance`: दो निर्देशांक कितने करीब हों तो एक माने जाएँ (शुरू में 0.000001; 0 का अर्थ बिल्कुल एक जैसा)।
- `Ignore`: वे गुण जो दो बाकी एक जैसे ऑब्जेक्ट के बीच अलग हो सकते हैं। नाम टाइप करें उसे बदलने के लिए: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, या `None` / `All`। हो जाने पर {{key:Enter}}।
- `Overlap`: चालू या बंद। चालू होने पर एक सीधी रेखा पर ओवरलैप होती लाइनें एक लाइन बनती हैं (दूसरी के भीतर की लाइन बस मिटा दी जाती है), और एक ही वृत्त पर ओवरलैप होते चाप एक चाप बनते हैं; जो चाप पूरा चक्कर बंद करें वे वृत्त बनते हैं, और वृत्त पर पड़ा चाप मिटा दिया जाता है।
- `Ends`: चालू या बंद। चालू होने पर सिरे से सिरा छूने वाली एक सीधी रेखा की लाइनें और एक वृत्त के चाप एक टुकड़ा बनते हैं।

हर प्रकार के ऑब्जेक्ट की दोहराव के लिए जाँच होती है: दो ऑब्जेक्ट दोहराए हुए तब होते हैं जब उनकी ज्यामिति सहनशीलता के भीतर एक जैसी हो और उनकी लेयर, रंग, लाइनटाइप, लाइनटाइप स्केल, लाइनवेट, मोटाई, पारदर्शिता और ऊँचाई मिलें (उन गुणों को छोड़कर जिन्हें आप नज़रअंदाज़ करें)। लाइनें और खुली पॉलीलाइनें उल्टी दिशा में खींची हों तब भी मेल खाती हैं। ड्रॉ-क्रम में पहला ऑब्जेक्ट रहता है और अपने गुण रखता है। कमांड बताता है कितने ऑब्जेक्ट जाँचे और मिटाए: दोहराए, मिलाए गए ओवरलैपिंग टुकड़े, सिरे से सिरा जुड़े टुकड़े। एक {{cmd:UNDO}} सब वापस लाता है। सेटिंग्स ड्रॉइंग विंडो बंद होने तक चलती हैं।

यह इन्हें छोड़ता है: लॉक लेयर के ऑब्जेक्ट और छिपे हुए ऑब्जेक्ट। यह ऊँचाई (Z) वाली लाइनों को नहीं मिलाता (उनके बिल्कुल दोहराव फिर भी जाते हैं), और पॉलीलाइन के भीतर के खंडों को नहीं छूता (वे पतले नहीं होते), न पॉलीलाइन के खंड पर पड़ी लाइन, न उल्टी दिशा में खींची बंद पॉलीलाइन।

### DRAWORDER

बताता है कि कौन से ऑब्जेक्ट आगे बनते हैं। `Select objects to re-order`, {{key:Enter}}, फिर `Above objects`, `Under objects`, `Front` या `Back` ({{key:Enter}} = `Back`)। `Above objects` और `Under objects` संदर्भ ऑब्जेक्ट माँगते हैं: चयन उनमें से सबसे आगे वाले के ठीक सामने, या सबसे पीछे वाले के ठीक पीछे जाता है। चुने हुए ऑब्जेक्ट अपने आपसी क्रम को रखते हैं। एक पूर्ववत करने का चरण। क्रम DWG और DXF में ड्रॉइंग के साथ सहेजा जाता है, जहाँ वह वह क्रम है जिसमें ऑब्जेक्ट लिखे जाते हैं।

स्क्रीन पर CadCraft पहले भरे हुए क्षेत्र (ठोस हैच, चौड़ी पॉलीलाइनें, मास्क) बनाता है, फिर रेखाएँ, फिर टेक्स्ट, ताकि टेक्स्ट हमेशा भराव के ऊपर पढ़ा जाए; ड्रॉ-क्रम भरे ऑब्जेक्ट के बीच और तस्वीरों के बीच दिखता है। दूसरे प्रोग्राम जो फ़ाइल खोलते हैं, हर ऑब्जेक्ट को सहेजे गए क्रम में बनाते हैं।

### TEXTTOFRONT

खुली जगह में टेक्स्ट, डाइमेंशन और लीडर को बाकी सब के सामने लाता है: `Text`, `Dimensions`, `Leaders` या `All` ({{key:Enter}} = `All`)। एक पूर्ववत करने का चरण। कोई न हो, या वे पहले से सबसे आगे हों, तो यह बताता है।

### HATCHTOBACK

खुली जगह की हर हैच को बाकी हर चीज़ के पीछे भेजता है, ताकि सहेजी गई फ़ाइल में भराव रेखाओं और टेक्स्ट को न ढके। कोई प्रॉम्प्ट नहीं। एक पूर्ववत करने का चरण।

### ISOLATEOBJECTS

उपनाम: `ISOLATE`। केवल चुने हुए ऑब्जेक्ट दिखाता है: इस स्पेस की बाकी हर चीज़ UNISOLATEOBJECTS तक नज़र से हट जाती है। {{cmd:LAYISO}} के विपरीत यह उन ऑब्जेक्ट पर काम करता है जिन्हें आप चुनते हैं, उनकी लेयर चाहे जो हों, और कोई लेयर नहीं बदलता। छिपे ऑब्जेक्ट न बनते हैं, न चुने जाते हैं, न स्नैप होते हैं, न उन पर ज़ूम होता है, न प्लॉट होते हैं, और `ALL` लेने वाले कमांड उन्हें छोड़ देते हैं। ऑब्जेक्ट अलग रहते समय आप जो बनाते हैं वह हमेशा की तरह दिखता है।

यह केवल सत्र के लिए है: इसके बारे में कुछ भी ड्रॉइंग के साथ नहीं सहेजा जाता, यह एक पूर्ववत करने का चरण नहीं है, और ड्रॉइंग फिर खोलने पर सब कुछ दिखता है। ऑब्जेक्ट छिपे होने पर स्टेटस बार में उनकी संख्या वाला एक बटन दिखता है; उस पर क्लिक करें तो वे फिर दिखते हैं।

### HIDEOBJECTS

UNISOLATEOBJECTS तक चुने हुए ऑब्जेक्ट छिपाता है। {{cmd:ISOLATEOBJECTS}} के नियम वही हैं: केवल सत्र के लिए, सहेजे नहीं जाते, पूर्ववत करने का चरण नहीं।

### UNISOLATEOBJECTS

उपनाम: `UNISOLATE`, `UNHIDE`। {{cmd:ISOLATEOBJECTS}} या {{cmd:HIDEOBJECTS}} से छिपाए गए हर ऑब्जेक्ट फिर दिखाता है, और बताता है कितने लौटे।

### LAYLOCKFADE

बताता है कि लॉक लेयर के ऑब्जेक्ट कैसे दिखते हैं और क्या क्लिक उन तक पहुँचता है। यह मौजूदा स्थिति बताता है, फिर लेता है:

- 0 से 90 तक एक संख्या: प्रतिशत में फीका करने की मात्रा (शुरू में 50)। 0 फीका करना बंद करता है।
- `ON` या `OFF`: फीका करना चालू या बंद, मात्रा रखते हुए।
- `Pick`, फिर `Yes` या `No`: क्या कोई कमांड न चलने पर क्लिक लॉक लेयर के ऑब्जेक्ट चुन सकता है? `No` (शुरुआती): उन्हें बिल्कुल नहीं चुना जा सकता। `Yes`: क्लिक या विंडो उन्हें चुनती है ताकि {{ui:Properties}} उन्हें दिखा सके; वे फिर भी बदले नहीं जा सकते, और कमांड का अपना `Select objects` उन्हें कभी नहीं लेता।

ऑब्जेक्ट स्नैप दोनों तरह से लॉक लेयर के ऑब्जेक्ट ढूँढते हैं। प्लॉट कभी फीके नहीं होते। ये दोनों सेटिंग्स आपकी हैं, ड्रॉइंग की नहीं, और Settings में {{ui:Locked layers}} के तहत भी हैं।

### BURST

ब्लॉक संदर्भ तोड़ता है और वह रखता है जो उनके एट्रिब्यूट कहते हैं। `Select block references to burst`, {{key:Enter}}: हर संदर्भ ब्लॉक के ऑब्जेक्ट से बदल जाता है, और हर दिखने वाले एट्रिब्यूट का मान उस एट्रिब्यूट की अपनी लेयर पर सादा टेक्स्ट बन जाता है (लेयर 0 का एट्रिब्यूट संदर्भ की लेयर पर जाता है, जैसे ब्लॉक के बाकी लेयर 0 ऑब्जेक्ट)। अदृश्य एट्रिब्यूट हटा दिए जाते हैं। ब्लॉक के भीतर का ब्लॉक ब्लॉक संदर्भ रहता है। एक पूर्ववत करने का चरण; यह बताता है कितने संदर्भ टूटे और कितने एट्रिब्यूट मान टेक्स्ट बने।

एक लिंक की गई ड्रॉइंग को उसके नाम से अस्वीकार करता है (पहले उसे बाइंड करें, या {{cmd:NCOPY}} से उससे कॉपी करें), और दूसरे चुने हुए ऑब्जेक्ट छोड़ देता है। ब्लॉक संदर्भों के लिए {{cmd:EXPLODE}} वही ऑब्जेक्ट देता है; {{cmd:BURST}} केवल ब्लॉक संदर्भ लेता है और एट्रिब्यूट टेक्स्ट गिनता है।

### TXT2MTXT

उपनाम: `T2M`। एक-पंक्ति के टेक्स्ट को एक अनुच्छेद टेक्स्ट में जोड़ता है। `Select single-line text to join`, {{key:Enter}}, फिर `Paragraph` (पंक्तियाँ आपस में मिलती हैं और सबसे चौड़ी पंक्ति की चौड़ाई पर लिपटती हैं) या `Lines` (हर टेक्स्ट अपनी अलग पंक्ति रहता है); {{key:Enter}} आखिरी इस्तेमाल किया गया लेता है। पंक्तियाँ ऊपर से नीचे, फिर बाएँ से दाएँ, ऊपर वाले टेक्स्ट की दिशा के अनुसार क्रमबद्ध होती हैं। अनुच्छेद ऊपर वाले टेक्स्ट के ऊपरी-बाएँ कोने से लटकता है, और उसकी ऊँचाई, घुमाव, स्टाइल, लेयर और रंग लेता है। एक पूर्ववत करने का चरण।

जो टेक्स्ट पहले से अनुच्छेद टेक्स्ट है, खाली टेक्स्ट और चयन के दूसरे ऑब्जेक्ट छूट जाते हैं, और कमांड बताता है कितने।

### NCOPY

किसी ब्लॉक संदर्भ या लिंक की गई ड्रॉइंग से ऑब्जेक्ट को बिना कुछ तोड़े ड्रॉइंग में कॉपी करता है। `Pick an object inside a block reference or a linked drawing`: जो ऑब्जेक्ट आपके पिक के सबसे नज़दीक है वह वहीं कॉपी होता है जहाँ वह दिखता है, चाहे वह कितने भी ब्लॉक गहराई में हो; और चुनें, फिर {{key:Enter}}। फिर `Base point to move the copies`: {{key:Enter}} उन्हें जगह पर छोड़ता है, या एक बेस बिंदु और दूसरा बिंदु दें। पूरा कमांड एक पूर्ववत करने का चरण है।

कॉपी वह लेयर लेती है जिस पर वह दिखती है: ब्लॉक के भीतर लेयर 0 का ऑब्जेक्ट उस संदर्भ की लेयर पर जाता है जिसमें वह था, और ByBlock रंग उस संदर्भ का रंग बनता है। जुड़ी हुई ड्रॉइंग से लेयर `Plan|Walls` `Plan$0$Walls` बनती है (लिंक द्वारा दिया गया नाम), उस लिंक की लेयर के रंग, लाइनटाइप और लाइनवेट के साथ। एट्रिब्यूट का मान टेक्स्ट के रूप में कॉपी होता है। लॉक लेयर पर के ब्लॉक संदर्भ चुने नहीं जा सकते।

### FLATTEN

चुने हुए ऑब्जेक्ट की ऊँचाई (Z) और मोटाई 0 पर सेट करता है। `Select objects to flatten`, {{key:Enter}}। यह उन ब्लॉक परिभाषाओं के भीतर के ऑब्जेक्ट भी समतल करता है जिन्हें चयन इस्तेमाल करता है (और उनके भीतर के ब्लॉक भी), ताकि उन ब्लॉकों का हर संदर्भ बदले; जुड़ी हुई ड्रॉइंग जैसी हैं वैसी छोड़ी जाती हैं। एक पूर्ववत करने का चरण; यह बताता है कितने ऑब्जेक्ट बदले, और कोई ऊँचाई या मोटाई न हो तो वह भी।

2D ड्रॉइंग में CadCraft तीसरे आयाम का जो हिस्सा रखता है वह है: वृत्तों, चापों, दीर्घवृत्तों, बिंदुओं, टेक्स्ट, ब्लॉक संदर्भों, हैच, लीडर और पॉलीलाइनों पर ऊँचाई (उनका एलिवेशन), लाइन के हर सिरे पर ऊँचाई, और लाइनों, वृत्तों, चापों, पॉलीलाइनों, बिंदुओं और टेक्स्ट पर मोटाई, जैसी वे फ़ाइल में थीं। {{cmd:FLATTEN}} ठीक वही साफ़ करता है। यह 3D टैब के 3D मॉडल, 3D फ़ेस या ठोस आकृतियों को नहीं छूता, और फ़ाइल खुलते समय झुके हुए तल पर बना ऑब्जेक्ट पहले ही ड्रॉइंग तल में लाया जा चुका होता है।

### BREAKLINE

टूटने के चिह्न वाली लाइन बनाता है, उस व्यू के लिए जो छोटा काटा गया है। यह मौजूदा आकार और विस्तार बताता है, फिर `First point of the break line` (या उन्हें पहले बदलने के लिए `Size` / `Extension`), `Second point`, और `Where the break symbol sits`: लाइन के साथ क्लिक करें, या बीच के लिए {{key:Enter}}। नतीजा मौजूदा लेयर पर एक पॉलीलाइन है: लाइन, हर बिंदु से विस्तार जितनी आगे तक, और आकार जितनी ऊँची और उसकी आधी लंबाई वाली Z-आकार की रेखा के साथ।

`Size` और `Extension` आपकी सेटिंग्स के रूप में याद रहते हैं (आकार शुरू में डाइमेंशन टेक्स्ट की ऊँचाई के दोगुने का डाइमेंशन स्केल गुना होता है; विस्तार आकार का आधा)। {{key:Enter}} कमांड दोहराता है।

### AUDIT

ड्रॉइंग में खराबी जाँचता है और उसे ठीक करता है। {{cmd:AUDIT}} मॉडल के हर ऑब्जेक्ट, शीटों और ब्लॉकों के भीतर, और लेयर टेबल को देखता है, और जो मिला उसे प्रकार के अनुसार सूचीबद्ध करता है:

- ऐसी संख्याएँ जो सीमित नहीं हैं या बेतुकी रूप से बड़ी हैं;
- बिना आकार के ऑब्जेक्ट: बिना लंबाई की लाइन, बिना त्रिज्या का वृत्त, एक बिंदु वाली पॉलीलाइन, बिना अक्षरों या ऊँचाई का टेक्स्ट, शून्य स्केल का ब्लॉक संदर्भ;
- ऐसी लेयर पर ऑब्जेक्ट जो ड्रॉइंग में नहीं है; ऐसा ब्लॉक संदर्भ जो नहीं है; ऐसे टेक्स्ट और डाइमेंशन स्टाइल नाम और लाइनटाइप नाम जो ड्रॉइंग में नहीं हैं;
- ऐसे ब्लॉक जो खुद को समाहित करते हैं, सीधे या दूसरे ब्लॉकों के ज़रिए;
- ऐसे ऑब्जेक्ट जो एक ही आईडी, कुंजी या फ़ाइल हैंडल साझा करते हैं;
- ऐसे डाइमेंशन जिनके मापने के बिंदु नहीं हैं, और ऐसे हैच जिनकी सीमा बंद रूपरेखा नहीं है।

फिर वह पूछता है `Fix them? [Yes/No]`। `No` कुछ नहीं बदलता। `Yes` सब कुछ एक पूर्ववत करने के चरण में ठीक करता है: जो बनाया नहीं जा सकता वह हटता है (खराब संख्याएँ, कोई आकार नहीं, गायब ब्लॉक, टूटा डाइमेंशन, ऐसी हैच जिसकी कोई काम की सीमा नहीं, ब्लॉकों का वह संदर्भ जो एक वृत्त बंद करता है); गायब लेयर बनती है; अज्ञात स्टाइल और लाइनटाइप नाम अपने डिफ़ॉल्ट पर लौटते हैं; साझा कुंजी बदली जाती है। यह बताता है कितने ऑब्जेक्ट हटे और कितने ठीक हुए। वही निष्कर्ष Problems पैनल में भी दिखते हैं, हर एक के अपने {{ui:Repair}} के साथ।

यह कुछ मना नहीं करता, पर केवल वही जाँचता है जो CadCraft खुद बनाता है: दूसरे प्रोग्रामों के लिए रखा डेटा (3D ठोस आकृतियाँ, OLE ऑब्जेक्ट) नहीं खोला जाता।

### RECOVER

एक खराब DXF या DWG खोलता है। {{cmd:RECOVER}} फ़ाइल माँगता है, वह जो पढ़ा जा सकता है पढ़ता है बजाय फ़ाइल को मना करने के, वह सूची देता है जो छूटा या मान लिया गया, फिर {{cmd:AUDIT}} की तरह `Yes` से ड्रॉइंग जाँचता और ठीक करता है।

- DXF: वे लाइनें जो कोड और मान की जोड़ी का हिस्सा नहीं हैं, तब तक छोड़ी जाती हैं जब तक जोड़ियाँ फिर न मिलें; बिना अंत वाला सेक्शन बंद होता है; जो फ़ाइल बीच में कटी है, वह कटने तक पढ़ी जाती है; जो बाइनरी DXF बीच में कटी है, वह अपने आखिरी पूरे मान तक पढ़ी जाती है। जब कोई सेक्शन, ब्लॉक या ऑब्जेक्ट फिर भी न पढ़ा जा सके, तो वह छोड़ दिया जाता है और नाम से बताया जाता है, और पढ़ना उसके आगे जारी रहता है।
- DWG: जो ऑब्जेक्ट अपनी जाँच में विफल हों या डीकोड न हो सकें, वे छोड़े जाते हैं, और खोई हुई ऑब्जेक्ट सूची ऑब्जेक्ट डेटा में चलकर फिर बनती है।

डिस्क पर की फ़ाइल नहीं बदली जाती। बरामद ड्रॉइंग बिना सहेजे खुलती है: उसे नए नाम से सहेजें। जिस फ़ाइल से कुछ भी न पढ़ा जा सके, उसे कारण के साथ मना किया जाता है।

### LEGACYTEXT

पुराने 8-bit वियतनामी फ़ॉन्ट में टाइप किए टेक्स्ट को Unicode में बदलता है। छोटे नाम `TEXTTOUNICODE` और `VNTEXT`।

पुरानी वियतनामी ड्रॉइंग में टेक्स्ट पश्चिमी अक्षरों के रूप में रहता है, जिन्हें केवल फ़ॉन्ट वियतनामी बनाता है: ABC फ़ॉन्ट (`.VnTime`, `.VnArial`, और वे बड़े-अक्षर वाले फ़ॉन्ट जिनके नाम `H` पर खत्म होते हैं) में TCVN3 टेक्स्ट, और VNI फ़ॉन्ट (`VNI-Times`) में VNI टेक्स्ट। CadCraft ऐसा टेक्स्ट ड्रॉइंग खुलते ही वैसे दिखाता है जैसे वह पढ़ा जाता है, उसकी टेक्स्ट स्टाइल, ऑब्जेक्ट, या अनुच्छेद टेक्स्ट के किसी हिस्से के फ़ॉन्ट से; फ़ाइल में पुराने अक्षर ही रहते हैं।

{{cmd:LEGACYTEXT}} बताता है कि हर एन्कोडिंग में कितने टेक्स्ट मिले और पूछता है `Convert … to Unicode?`। `Yes` हर एक को फिर से लिखता है (मॉडल, शीटें, ब्लॉक, एट्रिब्यूट मान और परिभाषाएँ), और टेक्स्ट स्टाइल को एक Unicode फ़ॉन्ट देता है (पुराने फ़ॉन्ट के प्रकार के अनुसार Times New Roman, Arial या Courier New), एक पूर्ववत करने के चरण में। अनुच्छेद टेक्स्ट के भीतर का फ़ॉर्मेटिंग रहता है।

जब कोई टेक्स्ट किसी ज्ञात फ़ॉन्ट का इस्तेमाल न करे (जिस स्टाइल का फ़ॉन्ट नाम खो गया हो), तो यह पूछता है `Read selected texts as [Tcvn3/Vni/None]`: एन्कोडिंग चुनें और टेक्स्ट चुनें। जो टेक्स्ट पहले से Unicode है वह छोड़ दिया जाता है। डाइमेंशन टेक्स्ट के ओवरराइड और मल्टीलीडर टेक्स्ट नहीं बदले जाते।
