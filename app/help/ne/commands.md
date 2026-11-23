---
title: कमाण्ड सन्दर्भ
summary: CadCraft ड्राफ्टिङ एपका हरेक कमाण्ड, तिनका उपनाम, तिनले सोध्ने प्रश्न, विकल्प र पूर्वनिर्धारण।
keywords: कमाण्ड, उपनाम, कमाण्ड सूची, क्षेत्रफल, परिधि, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

कमाण्डको नाम वा उपनाम टाइप गरी {{key:Enter}} वा {{key:Space}} थिच्नुहोस्। ठूलो-सानो अक्षरले फरक पार्दैन, र सुरुको `_`, `-`, `.` वा `'` बेवास्ता गरिन्छ। कमाण्ड लाइन इतिहासमा हरेक कमाण्डको छोटो सूची छाप्न `HELP` (वा `?`) टाइप गर्नुहोस्; यो सहायता खोल्न {{key:F1}} थिच्नुहोस्।

प्रम्प्ट कसरी पढ्ने: विकल्प वर्गाकार कोष्ठकमा हुन्छन्, र तपाईं तिनका ठूला अक्षर टाइप गरेर एउटा छान्नुहुन्छ (`D` ले Diameter)। पूर्वनिर्धारण कोणी कोष्ठकमा हुन्छ; स्वीकार गर्न {{key:Enter}} थिच्नुहोस्। बिन्दु माग्दा तपाईं क्लिक गर्न, वा [निर्देशाङ्क र दूरी प्रविष्टि](topic:coordinate-entry) मा भएका कुनै पनि ढाँचा टाइप गर्न सक्नुहुन्छ। दूरी माग्दा तपाईं सङ्ख्या टाइप गर्न, वा दुई बिन्दु क्लिक गर्न सक्नुहुन्छ।

बिन्दु वा वस्तु आवश्यक हुँदा, र पूर्वनिर्धारण नभएको बेला, {{key:Enter}} थिच्दा कमाण्ड समाप्त हुन्छ। {{key:Esc}} ले यसलाई रद्द गर्छ। कमाण्डले जे गरे पनि त्यो एउटा पूर्ववत् चरण हो।

## रेखांकन

### LINE

उपनाम: `L`। सीधा खण्ड, हरेक आफ्नै वस्तु।

- `Specify first point` (Enter: तपाईंले दिनुभएको अन्तिम बिन्दुबाट सुरु गर्छ)
- `Specify next point [Undo]`, दोहोरिन्छ। दुई खण्डपछि: `[Undo/Close]`।
- `U` ले अन्तिम खण्ड फिर्ता लिन्छ, `C` ले पहिलो बिन्दुमा बन्द गरेर अन्त्य गर्छ। Enter ले अन्त्य गर्छ।

### PLINE

उपनाम: `PL`। रेखा र चाप खण्डको एउटा पोलिलाइन।

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (दुई खण्ड भएपछि Close)
- `A` ले चापमा जान्छ: `Specify endpoint of arc [Line/CLose/Undo]`। हरेक चाप अघिल्लो खण्डसँग स्पर्श गर्दै जारी रहन्छ। `L` ले फेरि रेखामा फर्काउँछ, `CL` ले चापसहित बन्द गर्छ।
- Enter ले अन्त्य गर्छ; पोलिलाइन खुला रहन्छ।

### CIRCLE

उपनाम: `C`।

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` ले `Specify diameter of circle` सोध्छ।
- `2P`: व्यासका दुई छेउ। `3P`: वृत्तका तीन बिन्दु।
- `T` (यसैगरी कमाण्ड `TTR`, र {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, त्यसपछि दोस्रो, र त्यसपछि त्रिज्या (Enter: अन्तिम)। वृत्तले दुवै वस्तु (रेखा, चाप, वृत्त, पोलिलाइनका खण्ड, ब्लकभित्र पनि) स्पर्श गर्छ; स्पर्श गर्ने वृत्तहरूमध्ये तपाईंको छनोटको सबैभन्दा नजिक हुने। कुनै नमिल्दा `Circle does not exist` भन्छ।
- `TTT` (वा {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): तीन वस्तु; तीनैलाई स्पर्श गर्ने वृत्त, तपाईंको छनोटको सबैभन्दा नजिक (तीन रेखाले भित्री वृत्त वा बाहिरी एउटा दिन्छ, तपाईंले कहाँ छान्नुभयो त्यसमा निर्भर गर्दै)।

### ARC

उपनाम: `A`।

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: तीन बिन्दुबाट गुज्रने चाप।
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`। चाप सुरुबाट अन्त्यसम्म घडीको उल्टो दिशामा जान्छ।

### RECTANG

उपनाम: `REC`, `RECTANGLE`। दुई कुनाबाट बन्द पोलिलाइन।

- `Specify first corner point`, `Specify other corner point`। दोस्रो कुनाका लागि `@width,height` टाइप गर्नुहोस्।

### POLYGON

उपनाम: `POL`। नियमित बहुभुज, बन्द पोलिलाइनका रूपमा।

- `Enter number of sides <4>` (3 देखि 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: क्लिक वा बिन्दु टाइप गर्नुहोस्; त्यसको दूरीले आकार तोक्छ, र त्यसको दिशाले बहुभुज घुमाउँछ।

### ELLIPSE

उपनाम: `EL`।

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, त्यसपछि अर्को अक्षको दूरी।
- `I` (`Isocircle`, केवल {{cmd:ISODRAFT}} खुला हुँदा): केन्द्र, त्यसपछि त्रिज्या वा `Diameter`: हालको आइसोमेट्रिक प्लेनमा वृत्त जस्तो देखिने दीर्घवृत्त।

### HATCH

उपनाम: `H`, `BH`, `BHATCH`; वा टुलबारमा {{ui:Hatch}}। पहिले हालको ढाँचा, स्केल र कोण छाप्छ।

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, दोहोरिन्छ (`Undo` क्षेत्र भएपछि)। हरेक क्लिकले वरिपरिको बन्द क्षेत्र थप्छ, त्यसभित्रका बन्द आकार island का रूपमा। Enter ले सबैलाई एउटै ह्याच बनाउँछ।
- `S`: `Select closed objects` (बन्द पोलिलाइन, वृत्त, बन्द दीर्घवृत्त)।
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`। `SC`: `Specify pattern scale`। `A`: `Specify pattern angle`।
- `G` (Gradient): भरण ढाँचाको सट्टा ग्रेडियन्ट हुन्छ। यसका प्रश्नका लागि {{cmd:GRADIENT}} हेर्नुहोस्।

[ह्याच र भरण क्षेत्र](topic:hatch) हेर्नुहोस्।

### GRADIENT

उपनाम: `GD`। क्षेत्र एक वा दुई रङको ग्रेडियन्टले भर्छ। पहिले यसले ग्रेडियन्ट सोध्छ, त्यसपछि {{cmd:HATCH}} ले जस्तै अघि बढ्छ (`Pick internal point`, बन्द वस्तुका लागि `S`, समाप्त गर्न {{key:Enter}})।

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, दोहोरिन्छ; हरेक पटक हालको ग्रेडियन्ट छाप्छ।
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, वा तिनमध्ये एउटा उल्टो (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`)। पहिला केही अक्षर पुग्छ।
- `O`: एउटा रङ, त्यसपछि 0 देखि 1 सम्मको टिन्ट (0 ले कालो पार्छ, 0.5 रङ नै हो, 1 ले सेतो पार्छ)। `TW`: पहिलो र दोस्रो रङ। रङ 1 देखि 255 सम्मको सङ्ख्या, `255,128,0` जस्ता तीन सङ्ख्या, वा `#rrggbb` हुन सक्छ।
- `A`: ग्रेडियन्ट चल्ने कोण। `C`: केन्द्रित Yes वा No (No ले ग्रेडियन्टको बीचलाई एउटा छेउमा सार्छ)।
- नचिनिने रङ वा प्रकार, र 0 देखि 1 बाहिरको टिन्ट अस्वीकार गर्छ।

{{cmd:HATCHEDIT}} `G` र Properties (Gradient) ले पछि ग्रेडियन्ट परिवर्तन गर्छन्, वा कुनै पनि ह्याचलाई एउटा बनाउँछन्। ग्रेडियन्ट स्क्रिनमा र प्लटमा देखिन्छ। DWG 2004 र पछिल्ला संस्करणले यसलाई वास्तविक ग्रेडियन्ट ह्याचका रूपमा राख्छ; DXF 2000 र DWG 2000 ले CadCraft का लागि राख्छन्, र अन्य कार्यक्रमले पहिलो रङको ठोस भरण देख्छन्।

### HATCHGENERATEBOUNDARY

उपनाम: `HGB`। ह्याचबाट सिमाना फेरि बनाउँछ जुन त्यसले गुमाएको थियो। `Select hatches` (वा पहिले छान्नुहोस्), त्यसपछि `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`।

- ह्याचको हरेक लुप यसको लेयरमा बन्द पोलिलाइन बन्छ; नयाँ पोलिलाइन छानिएकै रहन्छन्। घुमाउरो किनार ह्याचले राख्ने छोटा सीधा टुक्राका रूपमा फर्कन्छ।
- Yes भए ह्याच नयाँ सिमानालाई पछ्याउँछ, {{cmd:HATCH}} ले बनाएको ह्याच जस्तै। एउटा पूर्ववत् चरण।
- कुनै ह्याच नछानिएको भए त्यो भन्छ।

### POINT

उपनाम: `PO`; वा {{ui:Draw}} › {{ui:More}} › {{ui:Point}}। Enter नआउञ्जेल हरेक क्लिकमा एउटा बिन्दु वस्तु।

- `Specify a point`

### XLINE

उपनाम: `XL`; वा {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}। दुवै तर्फ अन्त्यविहीन निर्माण रेखा। [निर्माण रेखा र किरण](topic:construction-lines) हेर्नुहोस्।

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, त्यसपछि प्रत्येक रेखाका लागि `Specify through point`, Enter नआउञ्जेल।
- `A`: `Enter angle of construction line [Reference] <0>`; `R` ले पहिले `Select a line object` सोध्छ।
- `B`: `Specify angle vertex point`, `Specify angle start point`, त्यसपछि प्रत्येक रेखाका लागि `Specify angle end point`।
- `O`: `Specify offset distance [Through] <Through>`, त्यसपछि प्रत्येक रेखाका लागि `Select a line object` र `Specify side to offset` (वा `Specify through point`)।

### RAY

उपनाम छैन; वा {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}। `Specify start point`, त्यसपछि प्रत्येक किरणका लागि `Specify through point`, Enter नआउञ्जेल।

### TEXT

उपनाम: `DT`, `DTEXT`; वा टुलबारमा {{ui:Text}}। एक-पङ्क्तिको पाठ; प्रत्येक पङ्क्ति आफ्नै वस्तु।

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, त्यसपछि `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, दोहोरिन्छ: हरेक Enter ले तलको अर्को पङ्क्ति सुरु गर्छ। खाली पङ्क्तिमा Enter ले अन्त्य गर्छ। {{key:Space}} ले यहाँ खाली ठाउँ टाइप गर्छ।

### DIVIDE

उपनाम: `DIV`। {{cmd:DIVIDE}} ले रेखा, चाप, वृत्त, पोलिलाइन, स्प्लाइन वा दीर्घवृत्तमा चिन्ह राख्छ जसले त्यसलाई समान भागमा बाँड्छ। वस्तु छान्नुहोस्, त्यसपछि भागको सङ्ख्या दिनुहोस् (2 देखि 32767)। खुला वस्तुमा भागभन्दा एउटा कम चिन्ह हुन्छ; बन्द वस्तुमा सुरुमा पनि चिन्ह हुन्छ। वस्तु आफैँ काटिँदैन। चिन्ह बिन्दु हुन्, तर `Block` ले यस ड्रइङको ब्लक माग्छ, र त्यो वस्तुसँग घुम्ने कि नघुम्ने पनि सोध्छ। स्प्लाइन र दीर्घवृत्तमा लम्बाइ सानो कर्डमा नापिन्छ। पाठ, ह्याच र लम्बाइ नभएका वस्तु अस्वीकार गर्छ।

### MEASURE

उपनाम: `ME`। {{cmd:MEASURE}} ले रेखा, चाप, वृत्त, पोलिलाइन, स्प्लाइन वा दीर्घवृत्तमा दिइएको लम्बाइको हरेक दूरीमा चिन्ह राख्छ, तपाईंले क्लिक गरेको ठाउँको नजिकको अन्त्यबाट गन्दै (बन्द वस्तु: सुरुबाट)। लम्बाइ टाइप गरेर वा दुई बिन्दुले दिनुहोस्। खुला वस्तुको टाढाको अन्त्यमा चिन्ह हुँदैन। `Block` ले हरेक चिन्हमा बिन्दुको सट्टा ब्लक राख्छ। 0 लम्बाइ, वस्तुभन्दा लामो लम्बाइ, र 32767 भन्दा बढी चिन्ह बनाउने लम्बाइ अस्वीकार गर्छ।

### BOUNDARY

उपनाम: `BO`, `BPOLY`। {{cmd:BOUNDARY}} ले तपाईंले छानेको बिन्दु भएको क्षेत्रको वरिपरि बन्द पोलिलाइन बनाउँछ, स्क्रिनमा त्यसलाई घेर्ने रेखा, चाप, वृत्त, पोलिलाइन र वक्रबाट। चाप वा वृत्तमा परेका टुक्रा चापका खण्डका रूपमा फर्कन्छन्; दीर्घवृत्त र स्प्लाइनका टुक्रा छोटा सीधा खण्डका रूपमा फर्कन्छन्। `Islands` खुला (सुरु सेटिङ) भए त्यसभित्रको हरेक बन्द क्षेत्रलाई पनि आफ्नै पोलिलाइन दिइन्छ। बिन्दु छानिरहनुहोस्; Enter ले अन्त्य गर्छ। क्षेत्र घेर्ने वस्तु जस्ताको तस्तै रहन्छन्। बन्द क्षेत्र नभएको बिन्दुमा त्यो भन्छ।

### BLEND

{{cmd:BLEND}} ले दुई खुला वक्रका छेउबीच स्प्लाइन कोर्छ। जोड्न प्रत्येक वक्र छेउ नजिक छान्नुहोस्। `CONtinuity` ले `Tangent` (स्प्लाइन दुवै वक्रको दिशामा छोड्छ र आउँछ) वा `Smooth` (छेउमा तिनी जसरी बाङ्गिन्छन् त्यसरी पनि बाङ्गिन्छ) छान्छ; छनोट सत्रका लागि सम्झिइन्छ। दुई वक्र परिवर्तन हुँदैनन्। बन्द वस्तु र पहिल्यै मिलेका दुई छेउ अस्वीकार गर्छ।

### REGION

उपनाम: `REG`। {{cmd:REGION}} ले बन्द वस्तुलाई region मा बदल्छ: जोड्न, काट्न र नाप्न मिल्ने समतल क्षेत्र। वृत्त, बन्द पोलिलाइन, बन्द दीर्घवृत्त वा बन्द स्प्लाइन, वा छेउदेखि छेउसम्म लुप बनाउने रेखा, चाप वा खुला पोलिलाइन छान्नुहोस्; हरेक लुप एउटा region बन्छ र त्यसका स्रोत वस्तुलाई प्रतिस्थापन गर्छ। चाप चाप नै रहन्छ; दीर्घवृत्त र स्प्लाइन छोटा सीधा खण्ड बन्छन्। बन्द नभएको र कुनै लुप नबनाउने कुरा जस्तै रहन्छ, र कति भनिन्छ। ड्रइङमा region एउटा नामविहीन समूहका रूपमा राखिएका एक वा धेरै बन्द पोलिलाइन हो, त्यसैले क्लिकले पूरै region छानिन्छ, र प्रतिलिपि अर्को region हुन्छ; अरू कार्यक्रमले फाइल खोल्दा बन्द पोलिलाइन देख्छन्।

ड्रइङमा region भएपछि 2D ट्याबमा {{cmd:UNION}}, {{cmd:SUBTRACT}} र {{cmd:INTERSECT}} ले region मा काम गर्छन्: `UNION` ले छानिएका region एउटा बनाउँछ (टाढा-टाढाका region एउटा region का धेरै रूपरेखा बन्छन्); `SUBTRACT` ले जसबाट घटाउने region र त्यसपछि हटाउने region सोध्छ (प्वाल region को भाग रहन्छ); `INTERSECT` ले तिनीहरू सबैको साझा क्षेत्र राख्छ। हरेकले परिणामको क्षेत्रफल भन्छ, र एउटा पूर्ववत् चरण हो। नतिजामा केही नबचे वा कुनै साझा नभए तिनी अस्वीकार गर्छन्। 3D ट्याबमा, र region नभएको ड्रइङमा, उही कमाण्डहरू पहिलेझैँ सोलिडमा काम गर्छन्।

## परिमार्जन

उपनाम: `MT`, `T`; वा टुलबारमा {{ui:Paragraph}}। चौडाइमा लपेटिने अनुच्छेद पाठ, ठाउँमै टाइप गरिएको।

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: दुई कुनाबीचको चौडाइले पाठ कहाँ लपेटिन्छ त्यो तोक्छ। `H` ले `Specify height` सोध्छ, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)`, र दोस्रो कुना छोडिन्छ।
- त्यसपछि ड्रइङमा एउटा बक्स खुल्छ: टाइप गर्नुहोस्, नयाँ अनुच्छेदका लागि {{key:Enter}}, समाप्त गर्न {{key:Mod+Enter}} वा बाहिर क्लिक, रद्द गर्न {{key:Esc}}। यसको पट्टीले उचाइ, लाइन स्पेसिङ, चौडाइ र पङ्क्तिबद्धता सेट गर्छ। [पाठ र लेबल थप्नुहोस्](topic:text#write-a-note-that-wraps) हेर्नुहोस्।

### TEXTEDIT

उपनाम: `ED`, `DDEDIT`; वा पाठमा डबल-क्लिक। `Select a text to edit`, {{key:Enter}} नआउञ्जेल दोहोरिन्छ: हरेक पाठ उही बक्समा खुल्छ। छानिएको वा डबल-क्लिक गरिएको पाठबाट सुरु गर्दा त्यही एउटा सम्पादन हुन्छ र कमाण्ड समाप्त हुन्छ।

### ERASE

उपनाम: `E`, `DELETE`; वा वस्तु छानिएको बेला {{key:Delete}} थिच्नुहोस्।

- `Select objects` (वस्तु पहिल्यै छानिएका छन् भने छोडिन्छ)

### MOVE

उपनाम: `M`।

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, `dx,dy` ढाँचामा टाइप गरिने।

### COPY

उपनाम: `CO`, `CP`। तपाईंले जति बिन्दु दिनुहुन्छ त्यति पटक प्रतिलिपि गर्छ।

दोस्रो-बिन्दु प्रम्प्टमा `Array` ले एकैचोटि एउटा पङ्क्ति बनाउँछ: वस्तुको सङ्ख्या दिनुहोस् (मूल एउटा गनिन्छ), त्यसपछि पहिलो प्रतिलिपि जाने बिन्दु; अरू उही दूरीमा पछ्याउँछन्। `Fit` ले त्यो बिन्दुलाई अन्तिम प्रतिलिपिको ठाउँ बनाउँछ, र बीचका समान रूपमा फैलिन्छन्।

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, Enter नआउञ्जेल दोहोरिन्छ। `U` ले अन्तिम प्रतिलिपि फिर्ता लिन्छ।

### ROTATE

उपनाम: `RO`।

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: डिग्री, घडीको उल्टो दिशा सकारात्मक; वा त्यतातिर घुमाउन बिन्दु क्लिक गर्नुहोस्।

### SCALE

उपनाम: `SC`।

- `Select objects`, `Specify base point`
- `Specify scale factor`: `0.5` वा `2` जस्तो गुणक टाइप गर्नुहोस्। क्लिक गरिएको बिन्दुले आधार बिन्दुबाट त्यसको दूरीलाई गुणक बनाउँछ।

### MIRROR

उपनाम: `MI`।

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

उपनाम: `AL`; वा {{ui:Modify}} › {{ui:More}} › {{ui:Align}}।

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- दुई जोडीसँग: `Scale objects based on alignment points? [Yes/No] <N>`

[वस्तु पङ्क्तिबद्ध गर्नुहोस्](topic:modify-objects#align-objects) हेर्नुहोस्।

### ALIGNTO

- `Select objects` (वा छनोट), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` ले बिन्दु सोध्छ। छनोट रहन्छ।

### DISTRIBUTE

- `Select objects` (कम्तीमा तीन), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`। बाहिरका दुई रहन्छन्; छनोट रहन्छ।

### ALIGNPANEL

उपनाम: `ALP`; वा {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}। क्लिकबाट ALIGNTO र DISTRIBUTE चलाउने प्यानल खोल्छ।

### LASER

उपनाम: `LASERCUT`; वा {{ui:View}} › {{ui:More}} › {{ui:Laser…}}। ड्रइङमाथि Laser प्यानल खोल्छ: हरेक लेयरले के गर्छ (काट्ने, स्कोर, इन्ग्रेभ, भर्ने, तस्बिर), पूर्वावलोकन, बचत गर्न GRBL G-code, र Web Serial मार्फत फ्रेमिङ र पठाउने। [लेजरमा ड्रइङ पठाउनुहोस्](topic:laser-cutting) हेर्नुहोस्।

### STRETCH

उपनाम: `S`; वा {{ui:Stretch}}। `Select objects to stretch`: सिरामा क्रसिङ झ्याल तान्नुहोस् (वा `C` टाइप गर्नुहोस्) सार्न। `Specify base point [Displacement]`, `Specify second point`। झ्यालभित्रका बिन्दु सर्छन्: रेखाका छेउ, पोलिलाइनका कुना (चापका खण्डको उचाइ राखिन्छ), डाइमेन्सनका बिन्दु; वृत्त, दीर्घवृत्त, पाठ, बिन्दु र ब्लक केन्द्र वा सम्मिलन बिन्दु भित्र भए पूरै सर्छन्। कमाण्ड अघि बनाइएको छनोटले त्यसलाई बनाउने क्रसिङ झ्याल (र लासो) राख्छ, त्यसैले तिनले उही तरिकाले तन्काउँछन्। झ्याल नभए वस्तु पूरै सर्छन्।

### ARRAY, ARRAYRECT, ARRAYPOLAR

उपनाम: `AR`; वा {{ui:Array}}। `Select objects`, त्यसपछि `Enter array type [Rectangular/POlar] <Rectangular>` (केवल ARRAY)।

- Rectangular 4 स्तम्भ × 3 पङ्क्तिबाट सुरु हुन्छ, वस्तुको आकारको 1.5 गुणा दूरीमा, पूर्वावलोकनमा देखाइएको। `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` ले स्तम्भ र पङ्क्ति सोध्छ, `S` ले स्तम्भबीच र पङ्क्तिबीचको दूरी (ऋणात्मक भए बायाँ वा तल जान्छ), `COL` र `R` प्रत्येक दिशाका लागि।
- Polar ले `Specify center point of array` सोध्छ, सुरुमा 6 वस्तु पूरै वरिपरि, घुमाइएको। `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` वस्तु, `F` भर्ने कोण (+ घडीको उल्टो दिशा, − घडीको दिशामा), `ROT` Yes वा No।
- {{key:Enter}} (eXit) ले सादा वस्तुका रूपमा प्रतिलिपि बनाउँछ। एउटा पूर्ववत् चरण।
- `AS` (ASsociative) ले सादा प्रतिलिपि र पछि {{cmd:ARRAYEDIT}} सँग, वा तिनको ग्रिप वा Properties बाट परिवर्तन गर्न मिल्ने एरेका बीच बदल्छ। छनोट सम्झिइन्छ ({{cmd:ARRAYASSOCIATIVITY}}); सुरुमा सादा प्रतिलिपि हुन्छ।

### ARRAYPATH

वक्रको साथसाथ प्रतिलिपि। `Select objects`, त्यसपछि `Select path curve`: रेखा, चाप, वृत्त, दीर्घवृत्त, पोलिलाइन वा स्प्लाइन (एरे गरिँदै गरेका वस्तुमध्ये होइन)। बाटो वस्तुको नजिकको अन्त्यबाट सुरु हुन्छ, र पहिलो वस्तु जहाँ छन् त्यहीँ हुन्छ।

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, पूर्वावलोकनसहित। `M`: `Divide` ले वस्तु पूरै बाटोमा समान फैलाउँछ, `Measure` ले त्यसमा हरेक निश्चित दूरीमा एउटा राख्छ। `I`: वस्तुको सङ्ख्या (Measure सँग 0 को अर्थ जति अटाउँछन् त्यति; बाटोको अन्त्यभन्दा बढी सङ्ख्या जति अटाउँछ त्यतिमा सीमित हुन्छ)। `SP`: बाटोमा वस्तुबीचको दूरी (Measure मा बदल्छ)। `AL`: Yes ले हरेक वस्तुलाई बाटो पछ्याउन घुमाउँछ, No ले सीधा राख्छ।
- `AS` {{cmd:ARRAY}} मा जस्तै। यो खुला हुँदा एरेले बाटोको आफ्नै प्रतिलिपि राख्छ: पछि बाटो वक्र सम्पादन गर्दा वस्तु सर्दैनन्।
- बाटो वक्र नभए, वा एउटा वस्तु मात्र भए, अस्वीकार गर्छ।

### ARRAYEDIT

`AS` (ASsociative) ले बनाएको एरे परिवर्तन गर्छ। `Select array` (वा पहिले छान्नुहोस्)। यो अहिले के छ भनेर छाप्छ, र {{key:Enter}} नआउञ्जेल सोध्छ:

- Rectangular: `COL` स्तम्भ र तिनको दूरी, `R` पङ्क्ति र तिनको दूरी, `A` स्तम्भ चल्ने कोण।
- Polar: `I` वस्तु, `F` भर्ने कोण, `ROT` वस्तु घुमाउने Yes वा No।
- Path: `M` Divide वा Measure, `I` वस्तु, `SP` दूरी, `AL` बाटोसँग पङ्क्तिबद्ध।
- `S` (Source) ले एरेले दोहोर्‍याउने वस्तु आफ्नै रूपमा खोल्छ, ब्लक सम्पादक जस्तै। त्यहाँ कोर्नुहोस् र सम्पादन गर्नुहोस्; {{cmd:ARRAYCLOSE}} ले बचत वा त्याग गर्छ, र हरेक वस्तु पछ्याउँछ।
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, त्यसपछि बदल्न वस्तुमा क्लिक गर्नुहोस्, {{key:Enter}}। ती वस्तुले त्यसको सट्टा प्रतिस्थापन देखाउँछन्; प्रतिस्थापन वस्तु ड्रइङबाट बाहिर जान्छन् र एरेभित्र बस्छन्। `RES` (RESet) ले हरेक वस्तुमा स्रोत वस्तु फेरि देखाउँछ।
- हरेक परिवर्तन एउटा पूर्ववत् चरण हो। सादा प्रतिलिपि, सादा ब्लक सन्दर्भ, र लक लेयरमा भएको एरे अस्वीकार गर्छ।

उही सङ्ख्या Properties मा Array अन्तर्गत छन्, र एरेमा ग्रिप छन्: यसको आधार बिन्दुले यसलाई सार्छ, दोस्रो वस्तुको ग्रिपले दूरी सेट गर्छ, अन्तिम वस्तु पछिको ग्रिपले सङ्ख्या सेट गर्छ (polar मा दोस्रो वस्तुले कति वस्तु, अन्तिम वस्तुले भर्ने कोण)। {{cmd:EXPLODE}} ले एरेलाई फेरि सादा प्रतिलिपि बनाउँछ।

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} Source समाप्त गर्छ: `Save the changes to the array's source objects? [Save/Discard] <Save>`। कुनै एरेका स्रोत वस्तु खुला नभए त्यो भन्छ। {{cmd:BCLOSE}} ले उही गर्छ।

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`। {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR र {{cmd:ARRAYPATH}} कुन मा सुरु हुन्छन् सेट गर्छ; तिनको विकल्प `AS` ले उही सेटिङ बदल्छ। यस ब्राउजरमा सम्झिइन्छ।

### OFFSET

उपनाम: `O`। रेखा, चाप, वृत्त र पोलिलाइन।

पोलिलाइन बाहिरतिर सर्दा र त्यसका सीधा खण्ड कुनामा छुट्टिँदा, {{cmd:OFFSETGAPTYPE}} ले त्यो खाली कसरी बन्द हुन्छ भन्ने तय गर्छ।

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, त्यसपछि `Specify point on side to offset` (वा Through भए `Specify through point`), Enter नआउञ्जेल दोहोरिन्छ।

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: {{cmd:OFFSET}} ले पोलिलाइनको बाहिरी कुनाका खाली कसरी बन्द गर्छ। `0` ले भेटिएसम्म खण्ड लम्ब्याउँछ (सुरु सेटिङ), `1` ले पुरानो कुना वरिपरिको चापले जोड्छ, `2` ले सीधा कटले जोड्छ। भित्री कुना र चाप खण्ड प्रभावित हुँदैनन्। यो सत्रका लागि रहन्छ।

### EXTRIM

{{cmd:EXTRIM}} ले किनाराको एउटा छेउमा सबै कुरा ट्रिम गर्छ। काट्ने किनारा छान्नुहोस् (रेखा, चाप, वृत्त, पोलिलाइन, दीर्घवृत्त, स्प्लाइन वा निर्माण रेखा), त्यसपछि खाली गर्नुपर्ने पक्षमा बिन्दु छान्नुहोस्: त्यो किनारालाई काट्ने हरेक रेखा, चाप, वृत्त, पोलिलाइन र निर्माण रेखाले त्यस पक्षको भाग गुमाउँछ, जहाँ त्यो किनारबाट सुरु हुन्छ। पक्ष छान्दा हट्ने टुक्रा पोइन्टर सार्दा पछ्याउँछन्। बन्द किनारका लागि पक्ष भित्र र बाहिर हुन्छन्। किनारलाई केवल छुने वस्तु, र त्यसलाई काट्ने पाठ, ह्याच, स्प्लाइन र दीर्घवृत्त, जस्ताको तस्तै रहन्छन्। एउटा पूर्ववत् चरण।

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: {{cmd:TRIM}} र {{cmd:EXTEND}} कसरी सुरु हुन्छन्। `1` Quick: हरेक वस्तु काट्ने किनारा वा सीमा हो। `0` Standard: पहिले किनारा सोध्छ। LISP मा `(setvar "TRIMEXTENDMODE" 0)` पनि।

### TRIM

उपनाम: `TR`। पहिले `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` छाप्छ। Quick मोडमा देखिने हरेक वस्तु काट्ने किनारा हुन्छ, र कुनैले नकाटेको वस्तु मेटिन्छ; Standard मोडमा पहिले `Select cutting edges (Enter = every object)` सोध्छ र त्यहीँमा मात्र काट्छ।

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, दोहोरिन्छ: हटाउन टुक्रामा क्लिक गर्नुहोस् (पोइन्टर त्यसमा रहँदा त्यो खैरो र डटेड देखिन्छ), धेरै टुक्रामार्फत बाटो तान्नुहोस् (सबै एउटै चरणमा जान्छन्), वा बीचमा बाड़ लगाउन दुई खाली ठाउँमा क्लिक गर्नुहोस्। {{key:Shift}} ले विस्तार गर्छ। `T` ले काट्ने किनारा छान्छ (Standard मोड), `F` ले बाड़का बिन्दु सोध्छ, `C` ले दुई झ्याल कुना (आंशिक भित्र परेका पनि जान्छन्), `O` ले `Enter a trim mode option [Quick/Standard]` सोध्छ, `E` ले `Enter an implied edge extension mode [Extend/No extend]` सोध्छ (EDGEMODE), `R` ले छानेका वस्तु मेटाउँछ, `U` ले अन्तिम छनोट वा तानिएको बाटो फिर्ता लिन्छ। Enter ले अन्त्य गर्छ। [ट्रिम र विस्तार](topic:trim-and-extend) हेर्नुहोस्।

- ह्याचमा क्लिक गर्दा ह्याच काटिन्छ: काट्ने किनाराले भरिएको क्षेत्र विभाजित गर्छ, र तपाईंले क्लिक गरेको टुक्रा हटाइन्छ (त्यहाँ कुनै रूपरेखा बाँकी रहँदैन)। ह्याचले आफ्नो ढाँचा वा ग्रेडियन्ट राख्छ; सिमानासँग जोडिएको ह्याच पछि जोडिँदैन, किनभने अब त्यसले त्यो भर्दैन। त्यहाँ काट्ने किनारले ह्याच विभाजन नगर्दा, क्लिक ह्याचबाहिर हुँदा, र केही नबची रहँदा (ERASE प्रयोग गर्नुहोस्) त्यो भन्छ। तानिएको बाटो वा बाड़ले ह्याच काट्दैन।

### EXTEND

उपनाम: `EX`। TRIM को उल्टो: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`। क्लिकले नजिकको अन्त्यलाई अर्को सीमासम्म लम्ब्याउँछ; तानिएको बाटो वा बाड़ले पार गर्ने हरेक वस्तु लम्ब्याउँछ; {{key:Shift}} ले ट्रिम गर्छ। `B` ले सीमा किनारा छान्छ (Standard मोड)। Mode र Edge TRIM सँग साझा हुन्छन्।

### LINKVIEWS

उपनाम: `SYNCVIEWS`; वा {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, वा ड्रइङ ट्याबमा लिङ्क चिन्ह। `Link the panes' views [ON/OFF]` (Enter ले अर्को अवस्था लिन्छ): खुला हुँदा सक्रिय प्यानमा पान वा जुमले उही प्रकारको स्पेस देखाउने हरेक प्यान सार्छ। [स्क्रिन विभाजन](topic:split-screen) हेर्नुहोस्।

### OPENIN3D

छानिने कमाण्ड छैन; वा {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}}, जहाँ 3D मोडेलिङ एपले ह्यान्डओभर गरिएको ड्रइङ लिन्छ। त्यहाँ नयाँ ट्याबमा DWG को रूपमा खोल्छ (कुनै अपलोड हुँदैन)। ब्राउजरले ट्याब रोकेमा त्यो भन्छ।

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: खाली ठाउँमा थिचेर तान्दा के कोरिन्छ। Settings › CadCraft › Dragging to select जस्तै। [लासो छनोट](topic:lasso-selection) हेर्नुहोस्।

### FILLET

उपनाम: `F`। रेखा, चाप, वृत्त र पोलिलाइन। पहिले `Current settings: Mode = TRIM, Radius = 0` छाप्छ।

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` ले `Specify fillet radius <last>` सोध्छ। `T` ले `Enter Trim mode option [Trim/No trim]` सोध्छ: No trim भए वस्तु जस्ताको तस्तै रहन्छन् र चाप मात्र थपिन्छ।
  - `M` ले Enter नआउञ्जेल थप कुनाका लागि कमाण्ड चलाइरहन्छ; `U` ले कमाण्ड नछोडी अन्तिम कुना फिर्ता लिन्छ।
  - `P` ले `Select 2D polyline [Radius]` सोध्छ, र सीधा खण्ड भेटिने हरेक कुना गोलो बनाउँछ। यसले पहिल्यै बनाएका फिलेट नयाँ त्रिज्याले बदलिन्छन्; त्रिज्या 0 ले तिनलाई हटाउँछ। त्रिज्याका लागि खण्ड धेरै छोटा भएका कुना छोडिन्छन् र गनिन्छन्।
- `Select second object or shift-select to apply corner [Radius]`। तीखो कुनाका लागि क्लिक गर्दा {{key:Shift}} थिच्नुहोस्, त्रिज्या जति भए पनि।

तपाईंले राख्न चाहनुभएको भागमा हरेक वस्तुमा क्लिक गर्नुहोस्। नभेटिने दुई रेखा लम्बाइन्छन्। समानान्तर दुई रेखाबीचको खाली ठाउँमा, पहिलो रेखाको तपाईंको क्लिकको नजिकको छेउमा, अर्धवृत्त बन्छ। वृत्त कहिल्यै काटिँदैन। एउटै पोलिलाइनका दुई खण्ड छेउछेउमा भए चाप पोलिलाइनभित्र बन्छ; पोलिलाइन र अर्को वस्तु काम गर्छन् जब काट्ने ठाउँ पोलिलाइनको पहिलो वा अन्तिम खण्डमा पर्छ।

### CHAMFER

उपनाम: `CHA`। रेखा र पोलिलाइनका सीधा खण्ड। पहिले हालको दूरी (वा लम्बाइ र कोण) छाप्छ।

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` ले `Specify first chamfer distance <last>` र `Specify second chamfer distance <the first>` सोध्छ: पहिलोलाई तपाईंले छानेको पहिलो रेखाबाट, दोस्रोलाई अर्को रेखाबाट काटिन्छ।
  - `A` ले `Specify chamfer length on the first line` र `Specify chamfer angle from the first line` सोध्छ।
  - `E` (mEthod) ले अर्को चेम्फरले दुईमध्ये कुन प्रयोग गर्छ छान्छ। `T`, `M`, `U` र `P` FILLET मा जस्तै काम गर्छन्।
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`। {{key:Shift}}+क्लिकले तीखो कुना बनाउँछ।

रेखाभन्दा लामो दूरी अस्वीकार हुन्छ (`Distance is too large.`)।

### BREAK र BREAKATPOINT

उपनाम: `BR`। `Select object` (जहाँ क्लिक गर्नुहुन्छ त्यो पहिलो बिन्दु हो), `Specify second break point [First point]`; `F` ले `Specify first break point` र `Specify second break point` सोध्छ। बीचको भाग हट्छ; वृत्तमा, पहिलो बिन्दुबाट घडीको उल्टो दिशामा। BREAKATPOINT ले `Specify break point` सोध्छ र वस्तुलाई त्यहाँ दुई भागमा बाँड्छ (वृत्त होइन)।

### LENGTHEN

उपनाम: `LEN`। `Select an object to measure [DElta/Percent/Total/DYnamic]`: छान्दा `Current length` (र चापको समावेश कोण) छाप्छ र फेरि सोध्छ। `DE` ले `Enter delta length (negative shortens) [Angle]` सोध्छ, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` ले तान्छ। त्यसपछि `Select an object to change [Undo]`, दोहोरिन्छ: क्लिकको नजिकको छेउ सर्छ। रेखा, चाप र खुला पोलिलाइन।

### JOIN

उपनाम: `J`। `Select objects to join`। अन्त्यदेखि अन्त्यसम्म भेटिने रेखा, चाप र खुला पोलिलाइन पोलिलाइन बन्छन् (चेन बन्द भए बन्द); एउटै रेखामा भएका रेखा एउटा रेखा बन्छन्; एउटै वृत्तका चाप एउटा चाप वा वृत्त बन्छन्। इतिहासले कति वस्तु जोडिए र कति जोडिएनन् भन्छ।

### MATCHPROP

उपनाम: `MA`, `PAINTER`। `Select source object`, त्यसपछि `Select destination objects [Settings]` र {{key:Enter}}। लेयर र रङ प्रतिलिपि गर्छ, र उही प्रकारका वस्तुबीच पाठको उचाइ र चौडाइ, डाइमेन्सनको आकार, वा ह्याचको ढाँचा। `S` ले `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` सोध्छ, Enter नआउञ्जेल दोहोरिन्छ; छनोट सत्रका लागि सम्झिइन्छ।

### EXPLODE

उपनाम: `X`। पोलिलाइन रेखा र चापमा, ब्लक सन्दर्भ तिनका वस्तुमा, डाइमेन्सन रेखा, तीरको टाउको र पाठमा बदलिन्छन्। सम्पादन गर्न मिल्ने एरे ({{cmd:ARRAYEDIT}}) सादा प्रतिलिपिमा बदलिन्छ।

- `Select objects`

### GROUP

उपनाम: `G`। {{cmd:GROUP}} ले छानिएका वस्तुलाई तिनीहरूले बाँडेको नाम दिन्छ। वस्तु छान्नुहोस्, त्यसपछि नाम टाइप गर्नुहोस् (खाली ठाउँ नराख्नुहोस्; `?` ले समूह सूचीबद्ध गर्छ; Enter ले नामविहीन समूह बनाउँछ), र नामित समूहका लागि ऐच्छिक विवरण। त्यसपछि तिनीमध्ये एउटामा क्लिक गर्दा, वा कुनै एउटा समेट्ने झ्यालले, सबै छानिन्छन्, त्यसैले तिनी सँगै सर्छन्, प्रतिलिपि हुन्छन् र मेटिन्छन्; प्रत्येक वस्तु अझै आफ्नै वस्तु हो। एउटा वस्तु धेरै समूहमा हुन सक्छ। पूरै समूहको प्रतिलिपि नामविहीन नयाँ समूह हो; एउटा सदस्यको प्रतिलिपि त्यसको समूहमा जोडिन्छ। समूह बनाइएको स्पेस (मोडेल वा सिट) सँगै रहन्छन्। DWG वा DXF मा बचत गर्दा र CadCraft मा फेरि खोल्दा तिनी बचत हुन्छन्; DXF 2000 फाइलले अन्य कार्यक्रमका लागि तिनलाई समूह वस्तु पनि बोक्छ, र अर्को कार्यक्रमले बनाएका समूह DXF वा DWG खोल्दा पढिन्छन्।

### UNGROUP

उपनाम छैन। {{cmd:UNGROUP}} ले समूहलाई छुट्याउँछ: समूहका वस्तु छान्नुहोस् (तिनी भएका हरेक समूह छुट्टिन्छन्), वा `Name` र समूहको नाम टाइप गर्नुहोस्। वस्तु ड्रइङमै रहन्छन्। एउटा पूर्ववत् चरणले समूह फिर्ता ल्याउँछ।

### GROUPEDIT

{{cmd:GROUPEDIT}} ले एउटा समूह परिवर्तन गर्छ। यसको एउटा वस्तु क्लिक गर्नुहोस्, वा `Name` र यसको नाम दिनुहोस्; पहिल्यै छानिएको समूह जस्ताको तस्तै लिइन्छ। त्यसपछि: `Add` वस्तु (एक-एक गरी छानिएका, समूहअनुसार होइन), `Remove` वस्तु, `REName` समूह, `Description` परिवर्तन, वा `Selectable` सेट गर्नुहोस् (एउटा वस्तुमा क्लिकले पूरै समूह छान्छ कि छैन)। `eXit` वा Enter ले अन्त्य गर्छ। वस्तु नबचेको समूह हट्छ।

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1` (सुरु सेटिङ) मा समूहको वस्तुमा क्लिक वा झ्यालले पूरै समूह छान्छ; `0` मा एकल वस्तु, ताकि एउटा सदस्य सम्पादन गर्न सकियोस्। यो सत्रका लागि रहन्छ।

## क्लिपबोर्ड

CadCraft को आफ्नै क्लिपबोर्ड: यसले एउटै ड्रइङमा, ड्रइङहरूबीच र यस ब्राउजरका CadCraft ट्याबहरूबीच काम गर्छ। [प्रतिलिपि, टाँस्ने र नक्कल](topic:copy-paste) हेर्नुहोस्।

### COPYCLIP

{{key:Mod+C}}, वा {{ui:Edit}} समूहमा {{ui:Copy}}। ब्लक र लेयरसहित वस्तु क्लिपबोर्डमा प्रतिलिपि गर्छ। वस्तु छानिएकै रहन्छन्।

- `Select objects to copy` (वस्तु पहिल्यै छानिएका छन् भने छोडिन्छ)

### CUTCLIP

{{key:Mod+X}}, वा {{ui:More}} मेनुमा {{ui:Cut}}। वस्तु क्लिपबोर्डमा प्रतिलिपि गर्छ, त्यसपछि मेटाउँछ (एउटा पूर्ववत् चरण)।

- `Select objects to cut` (वस्तु पहिल्यै छानिएका छन् भने छोडिन्छ)

### COPYBASE

तपाईंले छानेको आधार बिन्दुसहित वस्तु क्लिपबोर्डमा प्रतिलिपि गर्छ; टाँस्दा त्यो बिन्दु राखिन्छ।

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, वा {{ui:Edit}} समूहमा {{ui:Paste}}। प्रतिलिपि कर्सरसँग सर्छ, यसको विस्तारको तल्लो-बायाँ कुनाबाट झुण्डिएर (वा केन्द्र, वा `COPYBASE` को बिन्दु; [CadCraft सेटिङ](topic:settings) हेर्नुहोस्)।

- `Specify insertion point`

टाँसिएका वस्तु छानिन्छन्। ड्रइङमा उही नाम भएको ब्लकले यस ड्रइङको परिभाषा राख्छ।

MarkupCraft मा प्रतिलिपि गरिएको क्षेत्र CadCraft ले प्रतिलिपि गरेको भन्दा नयाँ छ (र 6 घण्टाभन्दा कम पुरानो) भने, {{key:Mod+V}} र `PASTECLIP` ले त्यो क्षेत्र टाँस्छन्: `PASTEAREA` हेर्नुहोस्।

### PASTEAREA

उपनाम: `PAREA`। {{ui:More}} मेनुमा {{ui:Paste a copied area}}। {{ui:Copy area}} ले MarkupCraft मा प्रतिलिपि गरिएको क्षेत्र यसको साँचो आकारमा तस्बिरका रूपमा टाँस्छ। [ड्रइङमा तस्बिर](topic:pictures) हेर्नुहोस्।

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (सिटमा ड्रइङ स्केल नभएका बेला मात्र): एउटा सङ्ख्या, कागजको आकारका लागि {{key:Enter}}, वा `P`, त्यसपछि `First point on the pasted area`, `Second point on the pasted area` र तिनको साँचो दूरी।

### PASTEORIG

{{key:Mod+Shift+V}}, वा {{ui:More}} मेनुमा {{ui:Paste in place}}। जुन निर्देशाङ्कबाट वस्तु प्रतिलिपि गरिएका थिए, त्यहीँ टाँस्छ। केही सोध्दैन।

### DUPLICATE

उपनाम: `DUP`। {{key:Mod+D}}, वा {{ui:More}} मेनुमा {{ui:Duplicate and move}}। वस्तुको प्रतिलिपि जहाँ छ त्यहाँबाट पोइन्टरसँग सर्छ; {{key:Esc}} ले केही राख्दैन। क्लिपबोर्ड प्रयोग गर्दैन।

- `Select objects to duplicate` (वस्तु पहिल्यै छानिएका छन् भने छोडिन्छ)
- `Specify where the copy goes (Esc leaves nothing)`: क्लिक, बिन्दु टाइप, `@dx,dy` (पोइन्टर भएको ठाउँबाट), वा कर्सरतिरको दूरी।

### SELECT

`Select objects` सोध्छ (तलका सबै विकल्पसहित), र तपाईंले छानेका वस्तु अर्को कमाण्डका लागि, वा पछि `P` का लागि, छानिएकै रहन्छन्।

### QSELECT

उपनाम: `QS`। ब्राउजरमा, {{ui:Quick select}} संवाद ([वस्तु छान्नुहोस्](topic:select-objects#select-by-a-rule-quick-select) हेर्नुहोस्)। त्यो नभए कमाण्ड लाइनले `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` र `Enter value` सोध्छ। मिल्ने वस्तु छानिन्छन्।

### SELECTSIMILAR

उपनाम: `SIM`। `Select objects [SEttings]` (वा हालको छनोट): उही प्रकार, लेयर र रङ (र ब्लकको नाम, ह्याचको ढाँचा) भएका हरेक वस्तु छान्छ। `SE` ले `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` सोध्छ, Enter नआउञ्जेल दोहोरिन्छ।

### FIND

छानिने कमाण्ड छैन; वा {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}। ब्राउजरमा, {{ui:Find and replace}} संवाद ([पाठ र लेबल थप्नुहोस्](topic:text#find-and-replace-words) हेर्नुहोस्)। त्यो नभए: `Enter text to find`, त्यसपछि `Enter replacement text (Enter: select what is found)`। पाठ, विशेषता मान र डाइमेन्सन पाठमा खोज्छ, खुला ट्याब वा छनोटमा।

### SELECTALL र DESELECT

`SELECTALL` (उपनाम `AI_SELALL`, {{key:Mod+A}}) ले खुला ट्याबमा तपाईं सम्पादन गर्न सक्ने हरेक वस्तु छान्छ। `DESELECT` (उपनाम `AI_DESELECT`, `SELECTNONE`; वा {{key:Esc}}) ले छनोट खाली गर्छ।

## डाइमेन्सन

### DIMLINEAR

उपनाम: `DLI`, `DIMLIN`। तेर्सो वा ठाडो दूरी।

- `Specify first extension line origin [Select object]` (Enter वा `S`: `Select object to dimension`, त्यसपछि रेखा, चाप, वृत्त वा पोलिलाइन खण्डमा क्लिक)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`। `T` ले पाठ सोध्छ (`<>` नापिएको मान हो), `H` र `V` ले दिशा तोक्छन्, `R` ले `Specify angle of dimension line <0>` सोध्छ।

### DIMALIGNED

उपनाम: `DAL`, `DIMALI`। दुई बिन्दुबीचको साँचो दूरी।

- उत्पत्ति {{cmd:DIMLINEAR}} जस्तै, त्यसपछि `Specify dimension line location [Text]`।

### DIMANGULAR

उपनाम: `DAN`, `DIMANG`।

- `Select arc, circle or line, or Enter for a vertex`
- चाप: त्यसको कोण। वृत्त: `Specify second angle endpoint`। रेखा: `Select second line`। Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`।
- `Specify dimension line location [Text]`: नाप्न कोणभित्र क्लिक गर्नुहोस्।

### DIMRADIUS र DIMDIAMETER

उपनाम: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`।

- `Select arc or circle`, त्यसपछि `Specify dimension line location [Text]`।

### DIMCONTINUE

उपनाम: `DCO`, `DIMCONT`। बनाइएको अन्तिम रैखिक वा संरेखित डाइमेन्सनबाट जारी राख्छ (वा `Select linear or aligned dimension` सोध्छ)।

- `Specify second extension line origin [Undo]`, Enter नआउञ्जेल दोहोरिन्छ।

### DIMBASELINE

उपनाम: `DBA`, `DIMBASE`। {{cmd:DIMCONTINUE}} जस्तै, तर हरेक डाइमेन्सन पहिलो उत्पत्तिबाट सुरु हुन्छ र थप टाढा थुप्रिन्छ।

### DIMORDINATE

उपनाम: `DOR`, `DIMORD`। `Specify feature location`, त्यसपछि `Specify leader endpoint [Xdatum/Ydatum/Text]`। बिन्दु UCS उत्पत्तिबाट X वा Y दिशामा कति टाढा छ लेख्छ, लिडरमा: मुख्य रूपमा माथि वा तल जाने लिडरले X पढ्छ, छेउमा जानेले Y पढ्छ; `Xdatum` र `Ydatum` ले कुन हो तोक्छन्। पहिले उत्पत्ति {{cmd:UCS}} ले सेट गर्नुहोस् (नभए त्यो ड्रइङको 0,0 हो)। ग्रिपले वस्तु, उत्पत्ति र लिडरको अन्त्य सार्छन्, र मान पछ्याउँछ। DWG र DXF मा वास्तविक ordinate डाइमेन्सनका रूपमा बचत हुन्छ। वस्तुमै लिडरको अन्त्य राख्न अस्वीकार गर्छ।

### DIMARC

उपनाम: `DAR`। `Select arc or polyline arc segment`, त्यसपछि `Specify arc length dimension location [Text]`। चापसँगै नाप्छ (जीवा होइन) र मानअघि चाप चिन्ह लेख्छ। पूरा वृत्त, रेखा, वा सीधा पोलिलाइन खण्ड अस्वीकार गर्छ। DWG ले यसलाई चाप लम्बाइको डाइमेन्सनका रूपमा राख्छ; DXF ले यसलाई कोणीय डाइमेन्सनका रूपमा राख्छ जसको पाठ लम्बाइ हुन्छ, र CadCraft ले फेरि खोल्दा चाप लम्बाइको डाइमेन्सन बन्छ।

### DIMJOGGED

उपनाम: `DJO`, `JOG`। `Select arc or circle`, `Specify center location override`, `Specify jog location`। केन्द्र टाढा वा सिटबाहिर भएको वक्रको त्रिज्या डाइमेन्सन: डाइमेन्सन रेखा केन्द्रको सट्टा तपाईंले दिनुभएको बिन्दुबाट सुरु हुन्छ, बीचमा jog सहित, र तैपनि साँचो त्रिज्या लेख्छ। DWG ले यसलाई jogged त्रिज्या डाइमेन्सनका रूपमा राख्छ; DXF ले यसलाई त्रिज्या डाइमेन्सनका रूपमा राख्छ, र CadCraft ले फेरि खोल्दा jogged बन्छ।

### DIMJOGLINE

उपनाम: `DJL`। `Select dimension to add jog [Remove]`, त्यसपछि `Specify jog location (or press Enter)`। रैखिक वा संरेखित डाइमेन्सनको रेखामा jog चिन्ह राख्छ, दूरी स्केलमा नकोरिएको देखाउन; मान परिवर्तन हुँदैन। `Remove` ले हटाउँछ। अन्य प्रकारका डाइमेन्सन अस्वीकार गर्छ।

### QDIM

उपनाम छैन। `Select geometry to dimension`, त्यसपछि `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`। एउटै चरणमा धेरै वस्तु डाइमेन्सन गर्छ: रेखा र पोलिलाइन खण्डका छेउ, वृत्त र चापका केन्द्र, बिन्दु र ब्लक सन्दर्भबाट। वस्तुभन्दा माथि वा तल भएको स्थितिले आरपार नाप्छ; छेउमा भएकोले माथि नाप्छ। `Continuous` ले बिन्दुलाई चेन गर्छ, `Baseline` ले सबै पहिलोबाट नाप्छ, `Staggered` ले बीचबाट बाहिरतिर जोडीमा राख्छ, `Ordinate` ले हरेक बिन्दुलाई डाटमबाट दूरी दिन्छ (`datumPoint` ले नयाँ छान्छ), `Radius` र `Diameter` ले छानिएका हरेक वृत्त र चापलाई डाइमेन्सन गर्छ। मोड सम्झिइन्छ। बनाइएको सबै एउटै पूर्ववत् चरण हो। दुईभन्दा कम बिन्दु, वा Radius र Diameter का लागि चाप वा वृत्त नभए त्यो भन्छ।

### DIMBREAK

उपनाम: `DBREAK`। `Select dimensions to add or remove breaks`, त्यसपछि `Break where other objects cross [Auto/Manual/Remove] <Auto>`। `Auto` ले अरू वस्तु डाइमेन्सन र विस्तार रेखा काटेको ठाउँमा खाली छोड्छ, र ती वस्तु वा डाइमेन्सन सर्दा खाली फेरि गणना गर्छ। `Manual` (एउटा डाइमेन्सन) ले दुई बिन्दु सोध्छ र तिनबीच खाली छोड्छ। `Remove` ले सबै खाली हटाउँछ। खाली डाइमेन्सनको पाठ उचाइको 1.5 गुणा हुन्छ।

### DIMSPACE

उपनाम छैन। `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`। समानान्तर रैखिक र संरेखित डाइमेन्सनका (वा उही शीर्षबाट कोणीय) डाइमेन्सन रेखा सार्छ ताकि तिनी समान दूरीमा बसून्; आधार डाइमेन्सनबाट गनिन्छ, प्रत्येक आफ्नै पक्षमा। `0` ले आधारसँग पङ्क्तिबद्ध गर्छ; `Auto` आधार डाइमेन्सनको पाठ उचाइको दोब्बर हो। आधारसँग समानान्तर नभएका डाइमेन्सन छोडिन्छन्।

### DIMINSPECT

उपनाम छैन। `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`। मानको वरिपरि फ्रेम कोर्छ, अगाडि लेबल र पछाडि निरीक्षण दर सहित। `remove` ले फ्रेम हटाउँछ। सहनशीलता पाठ मानसँगै रहन्छ।

### DIMOVERRIDE

उपनाम: `DOV`, `DIMOVER`। `Enter dimension variable name to override or Clear`, `Enter new value for …`, Enter नआउञ्जेल फेरि, त्यसपछि `Select dimensions`। त्यी सेटिङ छानिएका डाइमेन्सनमा मात्र परिवर्तन गर्छ; डाइमेन्सन शैली बदलिँदैन। सङ्ख्या वा स्विच हुने डाइमेन्सन चर लिन्छ (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …)। `Clear` ले छानिएका डाइमेन्सनलाई तिनको शैलीमा फिर्ता राख्छ। त्यस्तो चर नभएको नाम र लिन नसक्ने मान अस्वीकार गर्छ।

### DIMREASSOCIATE

उपनाम: `DRE`, `DIMREASSOC`। `Select dimensions`, त्यसपछि हरेकको विस्तार रेखा उत्पत्ति (`Specify first extension line origin on an object`: छेउ वा रेखाको बीच, पोलिलाइन कुना, केन्द्रमा स्न्याप गर्नुहोस्; Enter ले त्यो बिन्दु स्वतन्त्र राख्छ), वा त्रिज्या, व्यास, jogged त्रिज्या वा चाप लम्बाइका लागि `Select arc or circle`। डाइमेन्सन त्यी वस्तुमा बाँधिन्छ: तिनी सर्दा वा आकार बदल्दा यो उही पूर्ववत् चरणमा पछ्याउँछ र फेरि नाप्छ। बाँधिएको बिन्दु हातले सार्नु, वा वस्तु मेटाउनुले त्यो बन्धन समाप्त गर्छ। बन्धन DWG र DXF 2000 मा CadCraft को आफ्नै डाटाका रूपमा बचत हुन्छ; अरू कार्यक्रमले सामान्य डाइमेन्सन देख्छन्।

### DIMDISASSOCIATE

उपनाम: `DDA`, `DIMDISASSOC`। `Select dimensions`। तिनी जुन वस्तुसँग बाँधिएका थिए त्यसबाट स्वतन्त्र बनाउँछ; केही सर्दैन।

### CENTERMARK

उपनाम: `CM`, `DIMCENTER`, `DCE`। `Select circle or arc to add center mark`, Enter नआउञ्जेल फेरि। केन्द्रमा क्रस र वक्रभन्दा अलिक बाहिरसम्म चार केन्द्र रेखा कोर्छ (रेखा प्रकार CENTER), हालको लेयरमा सादा रेखाका रूपमा; हालको डाइमेन्सन सेटिङको तीरको आकार र समग्र स्केलबाट साइज हुन्छ, UCS सँग घुम्छ। वृत्त सर्दा ती पछ्याउँदैनन्।

### CENTERLINE

उपनाम: `CL`। `Select first line`, `Select second line`। दुई रेखाबीच मध्यमा रेखा (भेटिँदा विभाजकसँग), तिनीभन्दा अलिक लामो, रेखा प्रकार CENTER मा। सादा रेखा: दुई रेखा पछ्याउँदैन।

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

छानिने कमाण्ड छैन। प्रत्येकले `Enter new value for … <current>` सोध्छ र **नयाँ** डाइमेन्सनका लागि त्यो आकार सेट गर्छ: समग्र स्केल, पाठ उचाइ, तीरको आकार, दशमलव स्थान (8 सम्म), पाठवरिपरिको खाली ठाउँ, डाइमेन्सन रेखाभन्दा बाहिरको विस्तार, उत्पत्तिबाट अफसेट। [डाइमेन्सनको आकार सेट गर्नुहोस्](topic:dimension-settings) हेर्नुहोस्।

### DIMLUNIT

डाइमेन्सन सेटिङ: केवल नयाँ डाइमेन्सनको ढाँचा (1 वैज्ञानिक, 2 दशमलव, 3 इन्जिनियरिङ, 4 आर्किटेक्चरल, 5 भिन्न)।

### DIMSTYLE र -DIMSTYLE

उपनाम: `DST`, `DDIM`, `D`। डाइमेन्सन शैली प्रबन्धक: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}। कमाण्ड लाइनमा `-DIMSTYLE`: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`। [डाइमेन्सनको आकार सेट गर्नुहोस्](topic:dimension-settings#named-dimension-styles) हेर्नुहोस्।

### DIMEDIT र DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, त्यसपछि डाइमेन्सन (वा पहिल्यै छानिएका)। New ले पाठ सोध्छ (`<>` = नाप); Rotate ले कोण (0 ले पाठ फिर्ता राख्छ); Oblique ले X अक्षबाट विस्तार रेखाको कोण (Enter = कुनै होइन; केवल रैखिक र संरेखित डाइमेन्सन)। `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`। [डाइमेन्सन पाठ र विस्तार रेखा परिवर्तन](topic:dimension-settings#change-dimension-text-and-extension-lines) हेर्नुहोस्।

### DIMTEXTUNIT

उपनाम: `DTU`। `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, वा डाइमेन्सन छानिएको बेला `Units in the text of the selected dimensions`। नापिएको लम्बाइ त्यो एकाइमा लेख्छ, एकाइ पछि (DIMLFAC र DIMPOST सफिक्स); `D` ले ड्रइङ एकाइमा फर्काउँछ। [mm, cm, m वा km मा डाइमेन्सन](topic:dimension-settings#dimensions-in-mm-cm-m-or-km) हेर्नुहोस्।

### REVCLOUD

उपनाम: `RC`। `Arc length: … Type: …` छाप्छ, त्यसपछि `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`। Rectangular ले `Specify opposite corner` सोध्छ; Polygonal ले `Specify next point (Enter closes the cloud) [Undo]`; Freehand ले क्लिक वा {{key:Enter}} नआउञ्जेल पोइन्टरलाई पछ्याउँछ; `O` ले `Select object` र `Reverse direction? [Yes/No] <N>` सोध्छ र वस्तुलाई बादलमा बदल्छ। `A` ले `Specify the length of each arc` सोध्छ। `R`, `P` र `F` ले अर्को बादलका लागि प्रकार छान्छन्। नतिजा चापका खण्डको बन्द पोलिलाइन हो।

### MLEADER

उपनाम: `MLD`; वा {{ui:Leader}}। `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, त्यसपछि इन-प्लेस बक्समा पाठ (वा त्यसबिना, `Enter text (an empty line ends)`)। `Block` ले पहिले ब्लकको नाम सोध्छ, र मल्टिलिडरले पाठको सट्टा त्यो ब्लक देखाउँछ। थप लिडर रेखा: {{cmd:MLEADEREDIT}}। DWG मा वास्तविक मल्टिलिडरका रूपमा बचत हुन्छ; DXF ले आफूले कोरेका लिडर, तीरको टाउको र पाठ राख्छ।

### MLEADEREDIT

उपनाम: `MLE`। `Select a multileader`, त्यसपछि `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: हरेक बिन्दुले नयाँ तीरको टाउकोबाट उही landing मा लिडर रेखा थप्छ, Enter नआउञ्जेल। `Remove leaders` ले तपाईंले क्लिक गरेको लिडर रेखा हटाउँछ (मल्टिलिडरमा कम्तीमा एउटा रहन्छ)। `Block content` ले ब्लकको नाम सोध्छ र पाठको सट्टा त्यो ब्लक देखाउँछ (यसका विशेषता सोधिन्छन्); `Text content` ले पाठ फिर्ता ल्याउँछ। हरेक लिडर रेखाको आफ्नै ग्रिप हुन्छ। DWG ले हरेक लिडर रेखा र ब्लकलाई एउटै मल्टिलिडरमा राख्छ।

### MLEADERALIGN

उपनाम: `MLA`। `Select multileaders`, त्यसपछि `Select multileader to align to [Distribute/Spacing/Use current spacing]` र `Specify direction`। अन्य मल्टिलिडरका landing (र तिनका पाठ वा ब्लक) छानिएकोको landing हुँदै त्यो दिशाको रेखामा सार्छ; तीरका टाउको जहाँ औँल्याउँछन् त्यहीँ रहन्छन्। `Spacing` ले तिनलाई समान दूरीमा पनि राख्छ; `Distribute` ले दुई बिन्दु सोधेर बीचमा समान फैलाउँछ। कम्तीमा दुई मल्टिलिडर चाहिन्छ।

### MLEADERCOLLECT

उपनाम: `MLC`। `Select multileaders`, त्यसपछि `Specify collected multileader location [Vertical/Horizontal]` (Enter ले पहिलोको ठाउँ राख्छ)। धेरैबाट एउटा मल्टिलिडर बनाउँछ: ब्लक सामग्री नयाँ ब्लकमा जान्छ जसले हरेक ब्लकलाई छेउछेउमा वा एउटैमाथि अर्को गरी राख्छ; पाठ सामग्री एउटा नोट बन्छ, प्रत्येकका लागि एउटा पङ्क्तिसहित। पहिलो मल्टिलिडरले आफ्ना लिडर रेखा राख्छ; अरू हटाइन्छन्। पाठ र ब्लक सामग्रीको मिश्रण अस्वीकार गर्छ।

### TABLE

उपनाम: `TB`; वा {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}। तालिका बनाउँछ: एउटा वस्तु जसलाई तपाईं अरू वस्तुजस्तै सार्न, प्रतिलिपि गर्न, घुमाउन, स्केल गर्न र प्लट गर्न सक्नुहुन्छ, यसका कक्ष डाटाका रूपमा राखिएका।

- `Number of data rows or [Paste/File/Style] <3>`, त्यसपछि `Number of columns <3>`, `Text height` र `Top left corner of the table`। तालिकामा शीर्षक पङ्क्ति (एउटा मर्ज गरिएको सेल) र डाटा पङ्क्तिमाथि हेडर पङ्क्ति हुन्छ।
- `P`: स्प्रेडसिट सेलबाट तालिका, क्लिपबोर्डमा (सेलबीच ट्याब भएको पाठ)। क्लिपबोर्डमा यस्ता सेल हुँदा {{key:Ctrl+V}} थिच्दा पनि त्यही हुन्छ, जबसम्म CadCraft को आफ्नै प्रतिलिपि नयाँ छैन (वा CadCraft ले भन्न सक्दैन: त्यसबेला यसले आफ्नै प्रतिलिपि टाँस्छ र त्यो भन्छ)। `F`: `.csv` वा ट्याब-विभाजित फाइलबाट तालिका। पहिलो पङ्क्ति हेडर बन्छ; स्तम्भको चौडाइ पाठमा मिलाइन्छ।
- `S`: यस तालिकाका लागि तालिका शैली छान्नुहोस् (हेर्नुहोस् {{cmd:TABLESTYLE}})।
- पङ्क्ति वा स्तम्भ सङ्ख्या पूर्ण सङ्ख्या नभए, र तालिकामा अट्ने भन्दा बढी सेल (2,000 पङ्क्ति, 200 स्तम्भ, 40,000 सेल) भए अस्वीकार गर्छ।
- {{cmd:EXPLODE}} ले तालिकालाई रेखा र पाठमा बदल्छ। DWG मा बचत गर्दा तालिका अरू कार्यक्रमले सम्पादन गर्न सक्ने साँचो तालिका वस्तु हुन्छ; DXF मा यो त्यसलाई कोर्ने ब्लक हुन्छ, र CadCraft ले फेरि तालिकाका रूपमा खोल्छ।

### TABLEDIT

उपनाम: `TABLEEDIT`, `TABEDIT`; वा सेलमा डबल-क्लिक। तालिका सम्पादन गर्छ।

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`। सेलमा क्लिक गर्नुहोस्, वा तालिका छानेर यसको नाम टाइप गर्नुहोस् (`B3`: स्तम्भ B, पङ्क्ति 3; शीर्षक पङ्क्ति पङ्क्ति 1 हो)। ब्राउजरमा सेलमाथि बक्स खुल्छ: {{key:Enter}} ले पाठ राख्छ, {{key:Tab}} ले अर्को सेलमा जान्छ, {{key:Alt+Enter}} ले नयाँ लाइन सुरु गर्छ, {{key:Esc}} ले सेल जस्ताको तस्तै छोड्छ।
- `=` ले सुरु हुने पाठ सूत्र हो: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^`, कोष्ठक र `sqrt` र `round` जस्ता प्रकार्यसहित। सेलले मान देखाउँछ; आफ्नै सेल नाम लिने, तालिकाबाहिरको सेल लिने, वा सङ्ख्या नभएको सेल लिने सूत्र `####` देखाउँछ र कमाण्ड लाइनले किन भन्छ।
- `R` / `C`: छानिएको सेलमा `Insert` वा `Delete` पङ्क्ति वा स्तम्भ (कति, र माथि वा तल, बायाँ वा दायाँ)। सूत्रले आफूले नाम लिएका सेल पछ्याउँछन्।
- `S`: स्तम्भको चौडाइ र पङ्क्तिको उचाइ। पङ्क्ति कहिल्यै पाठले चाहेभन्दा कम हुँदैन। छानिएको तालिकामा हरेक स्तम्भ र पङ्क्तिको किनारमा पनि ग्रिप हुन्छ।
- `M`: एउटा छानिएको सेलदेखि अर्कोसम्म मर्ज; `U`: अनमर्ज। `A`: पङ्क्तिबद्धता (`TL` माथि बायाँ … `MC` बीच केन्द्र … `BR` तल दायाँ)। `H`: यो सेलको आफ्नै पाठ उचाइ (0 = शैलीको)। `K`: पङ्क्तिलाई शीर्षक, हेडर वा डाटा पङ्क्ति बनाउनुहोस्। `CL`: सेल खाली गर्नुहोस्।
- लक लेयरमा भएको तालिका, सबै पङ्क्ति वा स्तम्भ मेटाउने, र अर्को मर्ज गरिएको सेललाई दुई भागमा काट्ने मर्ज अस्वीकार गर्छ।

### TABLESTYLE

उपनाम: `TS`। तालिका शैली सूचीबद्ध गर्छ, प्रत्येक कति तालिकाले प्रयोग गर्छन् भनेर, त्यसपछि `Table style: [New/Set/Edit/Delete/Apply]`।

- शैलीले शीर्षक, हेडर र डाटा पङ्क्तिको पाठ उचाइ र पङ्क्तिबद्धता, सेल मार्जिन, र कुन किनारा कोरिन्छ (बाहिरी, पङ्क्तिबीच, स्तम्भबीच) राख्छ।
- `N` ले हालकोबाट शैली बनाउँछ र त्यसलाई हालको बनाउँछ; `S` ले हालको शैली सेट गर्छ (नयाँ तालिकाले त्यो लिन्छ); `E` ले एउटा सम्पादन गर्छ: त्यसलाई प्रयोग गर्ने तालिका फेरि कोरिन्छन्; `A` ले छानिएका तालिकालाई हालको शैली दिन्छ; `D` ले एउटा मेटाउँछ (Standard होइन, हालको होइन; त्यसलाई प्रयोग गर्ने तालिका आफ्नो रूप राख्छन्)।
- शैली ड्रइङसँगै बचत हुन्छ (DWG र DXF)।

### TABLEEXPORT

तालिकाले देखाएको कुरा CSV फाइलका रूपमा बचत गर्छ (सूत्रको मान)। `Select a table`, वा पहिले एउटा छान्नुहोस्। `=`, `+`, `-` वा `@` ले सुरु हुने पाठ सेलको अगाडि `'` राखिन्छ, ताकि स्प्रेडसिटले त्यो नचलाओस्।

### TABLEPASTE

उपनाम: `PASTETABLE`। क्लिपबोर्डका स्प्रेडसिट सेलबाट तालिका बनाउँछ, र त्यसपछि यसको माथिल्लो-बायाँ कुना सोध्छ। {{cmd:TABLE}} › `Paste` जस्तै।

### DATALINK

उपनाम: `DL`। `Data link: [New/List/Remove] <New>`। `N` ले CSV फाइल सोध्छ, त्यसको तालिका राख्छ, र फाइलको नाम सम्झन्छ; `L` ले लिङ्क यसको फाइल, आकार, कहिले पढियो र कति तालिकाले प्रयोग गर्छन् सहित सूचीबद्ध गर्छ; `R` ले लिङ्क हटाउँछ (यसका तालिका सादा तालिका रहन्छन्)।

### DATALINKUPDATE

उपनाम: `DLU`। डाटा लिङ्कको फाइल फेरि पढ्छ र त्यससँग जोडिएका तालिका फेरि भर्छ (पङ्क्ति र स्तम्भ थपिन्छ वा हटाइन्छ)। ब्राउजरले आफैँ फाइल खोल्न सक्दैन, त्यसैले फेरि फाइल छान्न भन्छ। धेरै लिङ्क भए कुन भन्ने सोध्छ।

### FIELD

ड्रइङमा फिल्ड राख्छ: आफैँ गणना हुने पाठ। `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: अहिलेको, वा बचत, सिर्जना वा प्लट गरिएको मिति, र ढाँचा (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`)। `F`: फाइलको नाम, विस्तारसहित वा विनाविस्तार। `S`: सिटको नम्बर, यसको शीर्षक, वा कति सिट छन्। `P`: नामद्वारा ड्रइङ गुण (हेर्नुहोस् {{cmd:DWGPROPS}})। `O`: वस्तु छान्नुहोस्, त्यसपछि के पढ्ने (क्षेत्रफल, लम्बाइ, परिधि, त्रिज्या, व्यास, लेयर, नाम, x, y, पाठ, घुमाइ, रङ) र दशमलव। `E`: सूत्र। `C`: कोडसहितको पाठ जस्तो टाइप गरिएको, जस्तै `Sheet %<sheetnumber>% of %<sheetcount>%`।
- त्यसपछि `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: छानिएको पाठमा फिल्ड पहिले भएको पछाडि थपिन्छ; तालिकाको सेलमा पनि त्यसै गरी; ब्लक सन्दर्भले कुन विशेषता भनी सोध्छ; {{key:Enter}} ले नयाँ पाठका लागि उचाइ र बिन्दु सोध्छ।
- स्क्रिनमा फिल्डको पृष्ठभूमि हल्का खैरो हुन्छ; प्लट र PDF मा कहिल्यै हुँदैन। फिल्डको पाठमा हातले टाइप गर्दा फिल्ड समाप्त हुन्छ। गणना हुन नसक्ने फिल्ड `####` देखाउँछ।
- वस्तुको फिल्डले CadCraft ले वस्तुमा राख्ने कुञ्जीबाट वस्तु भेट्छ (Settings › CadCraft › Merge-friendly files); कुञ्जी बन्द भए अस्वीकार गर्छ।

### UPDATEFIELD

उपनाम: `UPDATEFIELDS`। `Select the objects whose fields to update (Enter: every field) or [Settings]`। `S` ले फिल्ड आफैँ कहिले अद्यावधिक हुन्छन् सेट गर्छ: `O` open, `S` save, `P` plot, `R` regen का अक्षर टाइप गर्नुहोस् (सुरुमा चारै), वा `NONE`।

### DWGPROPS

उपनाम: `DRAWINGPROPS`। ड्रइङका गुण सूचीबद्ध गर्छ, त्यसपछि `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`। पहिलो छ {{ui:Drawing details}} प्यानलले देखाउने हुन्; `U` ले आफ्नो नाम र मान थप्छ, `R` ले एउटा हटाउँछ। फिल्डले तिनलाई पढ्छन् (`%<prop:title>%`, `%<prop:Client>%`) र तुरुन्तै पछ्याउँछन्। अन्तर्निहित नाम वा `%`, `<`, `>`, उद्धरण चिन्ह वा ब्याकस्ल्यास भएको आफ्नो नाम अस्वीकार गर्छ।

## प्यारामेट्रिक

[ड्रइङमा बाधा दिनुहोस्](topic:constraints) र [प्यारामिटर र समीकरण प्रयोग गर्नुहोस्](topic:parameters) हेर्नुहोस्। बाधा {{ui:Model}} ट्याबमा काम गर्छन्।

### GEOMCONSTRAINT र GC कमाण्डहरू

उपनाम `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, त्यसपछि त्यो कमाण्डका प्रम्प्ट।

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`।
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (दोस्रो सर्छ)।
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`।
- {{cmd:GCFIX}}: `Select point [Object] <Object>`।
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`।

### DIMCONSTRAINT र DC कमाण्डहरू

उपनाम `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`।

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (सङ्ख्या, अभिव्यक्ति, वा `name=expression`)।
- {{cmd:DCALIGNED}}: माथिकै जस्तै, `[Object/Point & line/2Lines]` सहित।
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`। {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`।
- {{cmd:DCCONVERT}}: `Select dimensions to convert`।

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`। `S` ले दूरी र कोण सहनशीलता सोध्छ।
- {{cmd:DELCONSTRAINT}} (उपनाम `DELCON`): `Select objects`; तिनका बाधा हट्छन्।
- {{cmd:CONSTRAINTBAR}} (उपनाम `CBAR`): `Select objects [Showall/Hideall]`, त्यसपछि `[Show/Hide]`।
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`।

### PARAMETERS र -PARAMETERS

{{cmd:PARAMETERS}} (उपनाम `PAR`, `PARAM`) ले {{ui:Parameters}} प्यानल खोल्छ। `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`।

### SWBOUT

उपनाम `SWMACRO`। SolidWorks मा मोडेललाई एउटा बाधित स्केचका रूपमा पुनः बनाउने म्याक्रो (.swb) डाउनलोड गर्छ। [अन्य पार्ट मोडेलरसँग स्केच सार्नुहोस्](topic:solidworks-sketches) हेर्नुहोस्।

## ब्लक

### ANNOSCALE

उपनाम: `CANNOSCALE`। ड्रइङको एनोटेसन स्केल र त्यसमा कति एनोटेटिभ वस्तु छन् भन्छ, त्यसपछि `New annotation scale` सोध्छ: `1:50`, `1:100`, `2:1`, खाली सङ्ख्या (`50` भनेको 1:50), वा ड्रइङका आफ्नै स्केलमध्ये एउटाको नाम टाइप गर्नुहोस्। हरेक एनोटेटिभ पाठ र डाइमेन्सन नयाँ स्केलमा उही आकारमा छाप्ने गरी साइज बदलिन्छ, एउटा पूर्ववत् चरणमा; एनोटेटिभ नभएका वस्तु छोडिन्छन्, र नयाँ स्केल नभएको सूची राख्ने वस्तु पनि छोडिन्छ ({{cmd:OBJECTSCALE}})। [इकाइ, कागज र स्केल](topic:units-papers-scales#annotate-by-scale) हेर्नुहोस्।

### OBJECTSCALE

उपनाम: `OBJSCALE`। `Select annotative objects`, त्यसपछि `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`। एनोटेटिभ पाठ वा डाइमेन्सनले एनोटेसन स्केलको सूची राख्छ। `Add` र `Delete` ले स्केल सोध्छन् (`1:50`, `2:1`, खाली सङ्ख्या, वा ड्रइङका आफ्नै स्केलको नाम); `Current scale` ले ड्रइङको एनोटेसन स्केल थप्छ; `List` ले हरेक वस्तुका स्केल छाप्छ। कुनै भ्यूपोर्टको स्केल वस्तुको सूचीमा भए त्यसले वस्तुलाई त्यो स्केलमा कागज उचाइ छाप्ने आकारमा देखाउँछ, स्क्रिन र प्लटमा। अन्तिम स्केल मेटिँदैन। एनोटेटिभ नभएका वस्तु बाहिर राखिन्छन्: पहिले Properties मा Annotative अन गर्नुहोस्। सूचीहरू DWG र DXF मा CadCraft का आफ्नै डाटाका रूपमा बचत हुन्छन्। [इकाइ, कागज र स्केल](topic:units-papers-scales#annotate-by-scale) हेर्नुहोस्।

### ANNOALLVISIBLE

उपनाम: `ANNOALL`। `Show annotative objects at all scales [ON/OFF]`। ON (ड्रइङ सुरु हुँदा): एनोटेटिभ वस्तु भ्यूपोर्ट वा मोडेलमा पनि देखिन्छ, जसको स्केल त्यसको सूचीमा छैन, आफ्नो भएको आकारमा। OFF: त्यहाँ देखिँदैन, र मोडेलमा छान्न सकिँदैन। स्विच एउटा पूर्ववत् चरण हो; यो ड्रइङमा बचत हुँदैन।

### SCALELISTEDIT

उपनाम: `SCALELIST`। `Scale list [Add/Edit/Delete/List/Reset]` Enter नआउञ्जेल। Add: `Scale name`, `Paper units`, `Drawing units`। Edit र Delete ले स्केलको नाम सोध्छन्। ड्रइङका आफ्नै स्केल भ्यूपोर्ट र प्लट स्केल सूचीमा थपिन्छन् र ड्रइङसँग बचत हुन्छन्। [इकाइ, कागज र स्केल](topic:units-papers-scales#scales) हेर्नुहोस्।

### SPLINE, SPLINEDIT र PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`। Fit: वक्र गुज्रिने बिन्दु; `Close`, `Undo`, त्यसपछि `Start tangent` र `End tangent` (बिन्दु, वा {{key:Enter}})। Method › Control vertices ले डिग्री (1 देखि 5) सोध्छ र नियन्त्रण बहुभुजबाट कोर्छ। Object ले पोलिलाइनलाई तिनका कुनाबाट गुज्रने स्प्लाइनमा बदल्छ। `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`। `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, धेरै वस्तुका लागि `M`; रेखा, चाप र स्प्लाइन पहिले पोलिलाइनका रूपमा दिइन्छन्। [स्प्लाइन र पोलिलाइन](topic:splines) हेर्नुहोस्।

### BLOCK

उपनाम: `B`, `BMAKE`।

- `Enter block name`। यदि अवस्थित छ भने: `Block "…" already exists. Redefine it? [Yes/No] <N>`।
- `Specify insertion base point`
- `Select objects`। तिनी नयाँ ब्लकको एउटा सन्दर्भद्वारा प्रतिस्थापन हुन्छन्।

### WBLOCK

उपनाम: `W`, `-WBLOCK`। ब्लक, केही वस्तु वा पूरै ड्रइङलाई नयाँ DWG वा DXF फाइलमा लेख्छ। `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (यो नयाँ ड्रइङको उत्पत्ति बन्छ), `Select objects`, त्यसपछि `File format [DWG/DXF/R12 DXF]` र `File name for the new drawing`, त्यसपछि `What to do with the objects [Retain/Convert to block/Delete]`। Convert ले तिनलाई फाइलकै नामको ब्लकको एउटा सन्दर्भले बदल्छ; Delete ले हटाउँछ।
- **Block**: `Block to write out`। ब्लकका आफ्नै वस्तु, यसको आधार बिन्दु उत्पत्ति हुँदै, भित्री ब्लक पनि।
- **Entire drawing**: मोडेल स्पेसका हरेक वस्तु। सिट लेखिँदैन; सिट राखिएको प्रतिलिपिका लागि {{cmd:SAVEAS}} प्रयोग गर्नुहोस्।

नयाँ फाइलमा केवल तिनका वस्तुले प्रयोग गर्ने लेयर, रेखा प्रकार, पाठ र डाइमेन्सन शैली र ब्लक, र ड्रइङका एकाइ हुन्छन्। DWG को संस्करण {{cmd:SAVEAS}} ले अन्तिम पटक प्रयोग गरेको हो। ब्राउजरमा फाइल डाउनलोड हुन्छ; Studio मा बचत संवाद खुल्छ।

### ATTDEF

उपनाम: `ATT`, `DDATTDEF`, `-ATTDEF`; वा {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}। मोडहरू छाप्छ, त्यसपछि `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (स्थिर भए `Enter attribute value`), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`। {{cmd:BLOCK}} ले विशेषता परिभाषा ब्लकमा लिन्छ।

### EATTEDIT र ATTEDIT

`EATTEDIT` (`DDATTE`, वा विशेषता भएको सन्दर्भमा डबल-क्लिक; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, त्यसपछि {{ui:Edit attributes}} संवाद। `ATTEDIT` (`ATE`, `-ATTEDIT`): उही सन्दर्भ, त्यसपछि प्रत्येक विशेषताका लागि `<prompt> (<TAG>) <value>`; {{key:Enter}} ले मान राख्छ। [विशेषता](topic:attributes#see-and-change-the-values) हेर्नुहोस्।

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`। मानहरू राखिन्छन्; नयाँ विशेषता तिनको पूर्वनिर्धारण पाउँछ, हटाइएका जान्छन्, र स्थिति रिसेट हुन्छ।

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}। संवाद: ब्लक, विशेषता (ट्याग, प्रम्प्ट, पूर्वनिर्धारण, मोड, क्रम), {{ui:Update the references (values kept)}}, {{ui:Apply}}।

### REFEDIT र REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}। `REFEDIT`: `Select the block reference to edit in place` (वा छनोट)। `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; पट्टीको {{ui:Save the block}} र {{ui:Discard}} उही गर्छन्। सम्पूर्ण सम्पादन एउटा पूर्ववत् चरण हो। [विशेषता](topic:attributes#edit-a-title-block-where-it-is-refedit) हेर्नुहोस्।

### PENPRESSURE

`[ON/OFF]`: कलमको स्ट्रोकको दबाबले {{cmd:SKETCHFIX}} र {{cmd:SKETCHLIVE}} ले बनाउने लाइनवेट सेट गर्छ कि गर्दैन (सुरुमा अन)। [कलमले स्केच](topic:sketch-with-a-pen#pressure-sets-the-lineweight) हेर्नुहोस्।

### OFFICESTANDARD

उपनाम: `OFFSTD`। यो ड्रइङका लागि कुन कार्यालय मानक लागू छ र त्यो कहाँबाट आएको हो भन्छ: ड्रइङकै रेकर्ड, तपाईंको टोलीको साझा मानक, वा तपाईंका Default Policies (पाठ उचाइ `all.anno.*`); केही नभए कार्यक्रमको आफ्नै आकार। `[Import/Layers/Title block/Clear/eXit]`: `Import` ले `cc-office-standard` .json (SuperCad र BimCraft ले लेख्ने रेकर्ड) यस ड्रइङमा पढ्छ, र DWG र DXF मा यससँगै बचत हुन्छ; `Layers` ले ड्रइङमा नभएका कार्यालय लेयर थप्छ, एउटा पूर्ववत् चरणमा, र कुनै पनि हटाउँदैन; `Title block` ले कार्यालयका फिल्ड यो ड्रइङका आफ्नै मानसहित सूचीबद्ध गर्छ; `Clear` ले ड्रइङको आफ्नै रेकर्ड हटाउँछ। एनोटेटिभ पाठ र डाइमेन्सनको उचाइ लागू मानकअनुसार हुन्छ। [इकाइ, कागज र स्केल](topic:units-papers-scales) हेर्नुहोस्।

### BPARAMS

उपनाम: `BPM`, `BLOCKPARAMS`। ब्लक सम्पादकमा ब्लकका लागि, छानिएको सन्दर्भको ब्लकका लागि, वा तपाईंले नाम दिएको ब्लक (`Block name`) का लागि Parameters manager खोल्छ: सूत्रसहित प्यारामिटर, तिनका अवस्थासहित धेरै दृश्यता प्यारामिटर, र छानिएको सन्दर्भका आफ्नै मान र अवस्था। [तपाईंका आफ्नै प्यारामिटर र दृश्यता अवस्था](topic:dynamic-blocks#your-own-parameters-and-visibility-states) हेर्नुहोस्। `-BPARAMS` ले कमाण्ड लाइनमा उही गर्छ: `[Parameter/Visibility/State/Assign/Reference/Done]`।

### BEDIT र BCLOSE

`BE`; वा {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}। `Enter block name to edit <the selected reference's block>` ले ब्लक सम्पादक खोल्छ। `BCLOSE` ले `Close the block editor on "…" [Save/Discard] <Save>` सोध्छ; बैनरको {{ui:Save block}} र {{ui:Discard changes}} उही गर्छन्। सम्पादकमा गरिएका सबै कुरा एउटा पूर्ववत् चरण हो।

### VIEWBASE

उपनाम: `FLATSHOT`। 3D ट्याबका ठोस वस्तुको समतल 2D दृश्य: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, स्केल (`1:20`, `2:1`; {{key:Enter}} ले सिटमा फिट हुने छान्छ), त्यसपछि दृश्यको केन्द्र। एउटा ब्लक सन्दर्भ; देखिने किनारा VIEW-VISIBLE मा, लुकेका डट गरिएका VIEW-HIDDEN मा। [सिटमा समतल दृश्य](topic:3d-solids#flat-views-on-a-sheet) हेर्नुहोस्।

### PUBLISH

उपनाम: `-PUBLISH`; वा {{ui:Plot to PDF}} संवादमा {{ui:All sheets in one PDF}}। `Sheets to plot [All/Some]`: {{key:Enter}} ले हरेक सिट प्लट गर्छ, `S` ले अल्पविरामले छुट्याएका नाम सोध्छ। एउटा PDF, हरेक सिटका लागि एउटा पृष्ठ र एउटा बुकमार्क। [हरेक सिट एउटा PDF मा](topic:plot-pdf#every-sheet-in-one-pdf) हेर्नुहोस्।

### SHEETSET

उपनाम: `SSM`, `SHEETSETMANAGER`। बायाँ प्यानलको {{ui:Sheet set}} खण्डमा पुर्‍याउँछ: धेरै ड्रइङका सिट, नम्बर र शीर्षक लगाइएका, तिनका शीर्षक ब्लक सेटबाट भरिएका, एउटा PDF का रूपमा प्रकाशित। [सिट सेट](topic:sheet-sets) हेर्नुहोस्।

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): DWG वा DXF छान्नुहोस्, त्यसपछि त्यसको सम्मिलन बिन्दु। {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; एकभन्दा बढी लिङ्क भए त्यसको एउटा सन्दर्भ छान्नुहोस्, वा `N` टाइप गरी नाम दिनुहोस्। [जोडिएका ड्रइङ](topic:files#linked-drawings-external-references) हेर्नुहोस्।

### COUNT

उपनाम: `BCOUNT`; वा {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}। `Select a block reference to count, or [All/Export] (Enter: All)`: एउटा छान्दा त्यस स्पेसमा त्यो ब्लकका हरेक सन्दर्भ छानिन्छन् र गनिन्छन्; {{key:Enter}} वा `A` ले सबै सूचीबद्ध गर्छ; `E` त्यसपछि `C` (गन्ती) वा `A` (विशेषता) ले CSV डाउनलोड गर्छ। [ब्लक गन्नुहोस् र तालिका निर्यात गर्नुहोस्](topic:blocks#count-blocks-and-export-a-schedule) हेर्नुहोस्।

### INSERT

उपनाम: `I`, `DDINSERT`।

- `Enter block name or [File/Library] <last block>` (ठूलो-सानो अक्षरले फरक पार्दैन)। `F` ले DWG वा DXF सोध्छ, त्यसपछि सम्पूर्ण ड्रइङ वा त्यसको एउटा ब्लक; पहिल्यै प्रयोग भएको नामले {{ui:Keep existing}} वा {{ui:Rename}} सोधिन्छ। `L` ले लाइब्रेरी प्यानल खोल्छ।
- `Specify insertion point [Scale/Rotate]`। `S` ले `Specify scale factor` सोध्छ, `R` ले `Specify rotation angle`; दुवै सम्झिइन्छ।
- ब्लक पहिल्यै उही वस्तुहरू नभएका अरू ठाउँमा दोहोरिने वस्तुका छेउमा खडा भएमा, एउटा लाइनले कति ठाउँ सुझाइएको छ भन्छ, र प्रम्प्टमा `suGgested` थपिन्छ: `G` ले देखाउँछ; ब्लक राख्न तिनीमध्ये एकको नजिक क्लिक गर्नुहोस्, `A` सबै, {{key:Enter}} फर्कन। तिनले छिमेकीको घुमाइ र विशेषताको पूर्वनिर्धारित मान लिन्छन्। खुला स्पेसमा 20,000 भन्दा बढी वस्तु भएको ड्रइङ खोजिँदैन।
- त्यसपछि ब्लकले माग्ने हरेक विशेषताका लागि `Enter <prompt> (<TAG>) <default>`। [ब्लक विशेषता](topic:attributes) हेर्नुहोस्।

### LIBRARY

उपनाम: `LIB`। Library प्यानल खोल्छ: वस्तु राख्नुहोस्, अद्यावधिक जाँच गर्नुहोस्, लाइब्रेरी श्रेय। कुनै प्रश्न सोध्दैन। [फाइल वा लाइब्रेरीबाट राख्नुहोस्](topic:insert-from-file-and-library) हेर्नुहोस्।

### STEELMEMBER

उपनाम: `SMEMBER`; वा लाइब्रेरीको {{ui:Standard}} ट्याबमा {{ui:3D member}}। `Section size <W12x26>` (ट्यााबले देखाएजस्तै), त्यसपछि `Start point [Column]` र `End point`: दुई बिन्दुबीच 3D ट्याबमा जमिनमा बस्ने ठोस सदस्य। `C` ले स्तम्भको आधार बिन्दु र उचाइ सोध्छ। एउटा पूर्ववत् चरण। [स्टिल खण्ड र मानक भाग राख्नुहोस्](topic:steel-and-standard-parts) हेर्नुहोस्।

### PARTSLIST

उपनाम: `PLIST`। `Top left corner of the parts list`, त्यसपछि `Text height <2.5>`: लाइब्रेरीबाट राखिएका हरेक मानक भाग र स्टिल खण्डको तालिका बनाउँछ (वस्तु नम्बर, परिमाण, भाग, मानक, आकार, लम्बाइ, सामग्री, तौल)। एउटा पूर्ववत् चरण। [स्टिल खण्ड र मानक भाग राख्नुहोस्](topic:steel-and-standard-parts#make-a-parts-list) हेर्नुहोस्।

### PURGE

उपनाम: `PU`। कुनै पनि प्रयोग नगरिएका ब्लक परिभाषा हटाउँछ। कुनै प्रश्न सोध्दैन।

### DELBLOCKS

वा {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}। `Select block to delete [Name/eXit]`: ब्लक सन्दर्भ छान्नुहोस्, वा फिल्टरसहित ब्लकको सूचीका लागि `N` (धेरै छान्न सकिन्छ), वा अन्त्य गर्न `X` / {{key:Enter}}। हरेक सन्दर्भ जान्छ — मोडेलमा, हरेक सिटमा र अरू ब्लकभित्र — र त्यसपछि परिभाषा, र कमाण्ड लाइनले के मेटियो र के मेटिएन भन्छ। नामविहीन ब्लक र जोडिएका ड्रइङ दिइँदैन। अर्को ब्लकका लागि प्रम्प्ट फर्किन्छ; पूरै कमाण्ड एउटा पूर्ववत् चरण हो।

### PASTEBLOCK

{{cmd:PASTEBLOCK}} ले तपाईंले प्रतिलिपि गरेको कुरा ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) एउटा ब्लकका रूपमा टाँस्छ: सम्मिलन बिन्दु छान्नुहोस्, र त्यहाँ नयाँ ब्लकको एउटा सन्दर्भ जान्छ, छानिएको। ब्लकको आफ्नै नाम हुन्छ (`A$C` र एउटा सङ्ख्या); {{cmd:RENAME}} ले तपाईंको नाम दिन्छ। एउटा पूर्ववत् चरणले सन्दर्भ र ब्लक दुवै हटाउँछ।

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} ले प्रतिस्थापन गर्ने ब्लक र त्यसको ठाउँमा राख्ने ब्लक सोध्छ (`?` ले ब्लक सूचीबद्ध गर्छ), त्यसपछि मोडेल, हरेक सिट र अन्य ब्लकभित्रका हरेक सन्दर्भ बदल्छ। हरेक सन्दर्भले आफ्नो ठाउँ, स्केल, घुमाइ, लेयर र दुवै ब्लकमा भएका विशेषताका मान राख्छ; नयाँ ब्लकमा मात्र भएका विशेषता पूर्वनिर्धारणमा सुरु हुन्छन्, र कुन मानहरू हटाइए भनेर भन्छ। पुरानो ब्लक अब कुनैले प्रयोग नगर्दा त्यो हटाउन प्रस्ताव गर्छ। जोडिएका ड्रइङ अस्वीकार गर्छ, र ब्लकभित्रै ब्लक हुने प्रतिस्थापन पनि। एउटा पूर्ववत् चरण।

### MINSERT

{{cmd:MINSERT}} ले ब्लकलाई पङ्क्ति र स्तम्भमा राख्छ: ब्लकको नाम, सम्मिलन बिन्दु, स्केल, घुमाइ, पङ्क्ति र स्तम्भ सङ्ख्या, र तिनबीचको दूरी। पूरै समूह घुमाइसँग घुम्छ। हरेक एउटा आफ्नै सन्दर्भ हो (10,000 सम्म), त्यसैले कुनै पनि सार्न वा मेटाउन सकिन्छ।

### BLOCKSPALETTE

उपनाम: `BLOCKSPAL`; वा {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}। फिल्टरमा कर्सरसहित {{ui:Blocks}} प्यानल देखाउँछ। हरेक ब्लकको सानो तस्बिर हुन्छ; सबैभन्दा हालै राखिएका पहिले आउँछन्। फिल्टरको छेउका दुई बटनले सूची र तस्बिरको ग्रिडबीच बदल्छन्। तस्बिरमा क्लिक गर्नुहोस् (वा {{ui:Insert}}) ब्लक {{cmd:INSERT}} सँग राख्न, वा ड्रइङमा तानेर जहाँ छोड्नुहुन्छ त्यहाँ राख्न।

सूचीमुनिको {{ui:Libraries}}: {{ui:Add a drawing}} ले आफ्नै DWG वा DXF फाइल लिन्छ र त्यसका ब्लक तस्बिरसहित सूचीबद्ध गर्छ, र सम्पूर्ण ड्रइङ एउटा ब्लकका रूपमा। एउटा राख्दा त्यसको परिभाषा (र त्यसले भित्र राखेका ब्लक, र तिनका लेयर) यस ड्रइङमा प्रतिलिपि हुन्छ, {{cmd:INSERT}} को `File` विकल्पले जस्तै; यहाँ पहिल्यै उही परिभाषासहितको ब्लक छ भने प्रश्न नसोधी प्रयोग हुन्छ, उही नाम तर फरक परिभाषा भए {{ui:Keep existing}} वा {{ui:Rename}} सोधिन्छ। ब्राउजरमा फाइल पृष्ठ बन्द नहुन्जेल रहन्छ। CadCraft Studio मा {{ui:Add a folder}} ले फोल्डरका ड्रइङ सूचीबद्ध गर्छ, प्रत्येक क्लिकमा खुल्छ, र फाइल र फोल्डर सम्झिइन्छ। सानो x ले सूचीबाट लाइब्रेरी हटाउँछ; फाइल छोइँदैन। साझा {{ui:Library}} फरक कुरा हो: [फाइल वा लाइब्रेरीबाट राख्नुहोस्](topic:insert-from-file-and-library) हेर्नुहोस्।

### BCONVERT

वा {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}। दोहोरिने ज्यामिति फेला पार्छ र प्रत्येक प्रतिलिपिलाई एउटा ब्लकको सन्दर्भमा बदल्छ।

- `Select the objects that repeat, or [Block]`: एउटा प्रतिलिपिका वस्तु। `B` ले बरु अवस्थित ब्लकको नाम दिन्छ, त्यसका वस्तुका छुट्टिएका प्रतिलिपि खोज्न।
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` र `P` ले प्रतिलिपि मानिने कुरा बदल्छन्; {{key:Enter}} ले खोज्छ। सेटिङ सम्झिइन्छन्।
- `Name for the new block <Block1>`, त्यसपछि `Specify the block's base point` ({{key:Enter}} ले छनोटको तल्लो-बायाँ कुना लिन्छ)।
- यसले अर्को कति वस्तु-समूह उही ज्यामिति हुन् भन्छ, बदलिने सबै कुरा हाइलाइट गर्छ, र `Yes/No` सोध्छ।

प्रतिलिपि भनेको उही वस्तु सारेको र कुनै पनि कोणमा घुमाएको हो (र सक्रिय छ भने एउटै कारकले मिरर वा स्केल गरिएको): हरेक वस्तुको आफ्नो समकक्ष हुनुपर्छ, छनोटको आकारको दशलाख भागभित्र। हरेक सन्दर्भको आफ्नै घुमाइ र स्केल हुन्छ (मिररको नकारात्मक Y स्केल), र वस्तुले साझा गर्ने लेयर। लक लेयरका वस्तु छोडिन्छन् र गनिन्छन्। खुला स्पेस (मोडेल वा खुला सिट) खोज्छ। धेरै ठूलो खोजी कार्य सीमामा रोकिन्छ र त्यो भन्छ। एउटा पूर्ववत् चरण।

### BSEARCH

वा {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}। `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: ब्लकको नामको भाग, वा `*` र `?` भएको ढाँचा। हरेक ब्लक यहाँ र सम्पूर्ण ड्रइङमा सन्दर्भसहित सूचीबद्ध गर्छ।
- `A`: विशेषता मान, वा `TAG=value`। त्यो मान भएका सन्दर्भ भएका ब्लक, भेटिएका मानसहित सूचीबद्ध गर्छ। स्थिर विशेषता पनि गनिन्छन्।
- `G`: वस्तु, वा एउटा ब्लक सन्दर्भ छान्नुहोस्, र कम्तीमा 85% मिल्ने आकार भएका ब्लक सबैभन्दा मिल्ने पहिले सूचीबद्ध हुन्छन्। आकार, घुमाइ र मिररले गन्दैनन्। नाप सीमानाको वरिपरि फैलिएका बिन्दुबीचको दूरीहरू तुलना गर्छ, त्यसैले मिल्दाजुल्दा आकार भेटिन्छन्; ठ्याक्कै प्रतिलिपि खोज्न {{cmd:BCONVERT}} प्रयोग गर्नुहोस्।

खुला स्पेसमा भेटिएका सन्दर्भ छानिन्छन्, अर्को कमाण्डका लागि तयार।

### BREPLACE

वा {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}। `Replace [Selected/All]`: `S` ले तपाईंले छानेका ब्लक सन्दर्भलाई तपाईंले नाम दिएको ब्लकले बदल्छ; `A` ले ब्लक र त्यसको प्रतिस्थापन सोध्छ र हरेक सन्दर्भ बदल्छ, {{cmd:BLOCKREPLACE}} ले जस्तै (उही कोड)। सन्दर्भले आफ्नो ठाउँ, स्केल, घुमाइ, लेयर र दुवै ब्लकमा भएका विशेषताका मान राख्छ; नयाँ ब्लकमा ठाउँ नभएका मान हटाइन्छन् र नाम दिइन्छ। `?` ले ब्लक सूचीबद्ध गर्छ। एउटा पूर्ववत् चरण।

### DATAEXTRACTION

उपनाम: `EATTEXT`, `DX`; वा {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}। ब्लक, तिनका विशेषता र वस्तुका गुण तालिका वा CSV फाइलका रूपमा सूचीबद्ध गर्छ।

- छनोटमा चल्छ, वा `Select objects (Enter: everything in this space)` सोध्छ।
- छनोटमा दुवै भए `List: [Blocks/Objects/All]`। नामविहीन ब्लक, तालिका र बिल अफ म्याटेरियल्स कहिल्यै सूचीबद्ध हुँदैनन्।
- यसले छान्न मिल्ने स्तम्भ छाप्छ (नाम, प्रकार, लेयर, X, Y, घुमाइ, स्केल, लम्बाइ, क्षेत्रफल, रङ, रेखा प्रकार, स्पेस, र हरेक विशेषता ट्यागका लागि एक), त्यसपछि `Columns, by name or number with commas between`। {{key:Enter}} ले तारा लगाइएका छान्छ: ब्लकका लागि नाम र हरेक विशेषता; वस्तुका लागि प्रकार, लेयर र लम्बाइ।
- `Put identical rows together with a count? [Yes/No] <Yes>`, त्यसपछि `Put the list in a: [Table/Csv] <Table>`। तालिका सामान्य तालिका हो ({{cmd:TABLEDIT}} ले सम्पादन गर्छ) र प्रत्यक्ष होइन: ड्रइङ परिवर्तन भएपछि कमाण्ड फेरि चलाउनुहोस्।
- सूचीमा नभएको स्तम्भ अस्वीकार गर्छ। तालिकामा 1,999 डाटा पङ्क्ति अट्छ; CSV फाइलले सबै लिन्छ।

### COUNTTABLE

छनोटका (वा खुला स्पेसका) ब्लक सन्दर्भ गन्छ, र गन्तीलाई तालिका (`Block`, `Count`) वा CSV फाइलमा राख्छ। ड्रइङसँगै आफैँ पछ्याउने गन्तीका लागि {{cmd:BOMTABLE}} हेर्नुहोस्।

## सिट र प्लट

### LAYOUT

उपनाम: `LO`, `NEWLAYOUT`; वा ड्रइङमुनिको {{ui:+}} बटन। बोर्डर, शीर्षक ब्लक र एउटा भ्यूपोर्टसहित नयाँ सिट, ISO A3 मा (वा इन्च वा फिटका ड्रइङका लागि Tabloid)। कुनै प्रश्न छैन।

### MVIEW

उपनाम: `MV`। केवल सिटमा ({{cmd:VPORTS}} सिटमा पनि त्यही गर्छ)।

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`। भ्यूपोर्टले मानक स्केलमा सम्पूर्ण मोडेल देखाउँछ।
- `P` (Polygonal): रूपरेखाका कुनामा क्लिक गर्नुहोस् (`Undo`, `Close`), समाप्त गर्न {{key:Enter}}। तीनभन्दा कम कुना भए अस्वीकार गर्छ।
- `O` (Object): `Select a closed object for the viewport's outline`: सिटमा बन्द पोलिलाइन, वृत्त वा दीर्घवृत्त। भ्यूपोर्टले त्यसको आकार लिन्छ (वक्र छोटो सीधा टुक्रामा); वस्तु जस्ताको तस्तै रहन्छ। बन्द नभएको वस्तु अस्वीकार गर्छ।

### VPCLIP

पहिल्यै सिटमा रहेको भ्यूपोर्ट काट्छ। `Select viewport to clip` (वा पहिले छान्नुहोस्), त्यसपछि `Select the object to clip to [Polygonal/Delete]`:

- बन्द पोलिलाइन, वृत्त वा दीर्घवृत्तमा क्लिक गर्नुहोस्, वा बहुभुजका कुनामा क्लिक गर्न {{key:Enter}} (वा `P`) थिच्नुहोस्।
- `D` (Delete, भ्यूपोर्ट काटिएको भए प्रस्ताव गरिन्छ) ले फेरि आयत बनाउँछ: त्यसको रूपरेखाको वरिपरिको बाकस।
- भ्यूपोर्टले देखाउने कुरा कागजमा सर्दैन, र यसको स्केल रहन्छ। मोडेल केवल रूपरेखाभित्र कोरिन्छ र प्लट हुन्छ, र सिमाना त्यसलाई पछ्याउँछ। एउटा पूर्ववत् चरण।
- काटिएको भ्यूपोर्टमा यसको रूपरेखाको हरेक कुनामा ग्रिप हुन्छ, केन्द्र र यसको बाकसका चार कुनाको अतिरिक्त (बाकसको कुना तान्दा रूपरेखा पनि तन्कन्छ)। Properties मा Outline: Rectangle, वा Clipped र कुना सङ्ख्या देखिन्छ।
- DWG र DXF 2000 फाइलले रूपरेखा CadCraft का लागि राख्छन्। अन्य कार्यक्रमले भ्यूपोर्टलाई वरपरको आयतका रूपमा खोल्छन्; DXF R12 ले आयत मात्र राख्छ।
- मोडेल ट्याबमा भ्यूपोर्ट सिटमा हुन्छन् भनी भन्छ।

### VPORTS

उपनाम: `VIEWPORTS`। {{cmd:SPLIT}} सिटबाट पनि उही हो, र {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} ले चलाउँछन्। मोडेलमा: `Enter number of panes [SIngle/2/3/4] <3>`; `2` ले `[Horizontal/Vertical] <Vertical>` सोध्छ (Vertical = छेउछेउमा), `3` ले `[Left/Right] <Right>` सोध्छ (ठूलो प्यान कहाँ जाने)। हरेक प्यानले आफ्नै दृश्य र स्पेस राख्छ; क्लिकले प्यान सक्रिय बनाउँछ। सिटमा यो {{cmd:MVIEW}} हो। [स्क्रिन विभाजन](topic:split-screen) हेर्नुहोस्।

### VPVIEW

छानिने कमाण्ड छैन। केवल सिटमा।

- `Select viewport` (एउटा छानिएको छ भने छोडिन्छ), त्यसपछि मोडेलमा: `Specify first corner of the window to show`, `Specify opposite corner`।

### UCS

छानिने कमाण्ड छैन। तपाईंको आफ्नै निर्देशाङ्क प्रणाली; सम्पादन होइन। `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: बिन्दु नयाँ उत्पत्ति हो, त्यसपछि `Specify point on X-axis (Enter keeps the angle)`। `Z`: `Specify rotation angle about Z axis <90>`। `3`: उत्पत्ति, सकारात्मक X अक्षमा एउटा बिन्दु, र सकारात्मक-Y पक्षमा एउटा बिन्दु। `OB`: `Select object to align UCS`। `NA`: `[Restore/Save/Delete/?]` र नाम। नयाँ X अक्ष तेर्सो हुने गरी दृश्य घुम्छ। [दृश्य घुमाउनुहोस् र आफ्नै निर्देशाङ्क प्रयोग गर्नुहोस्](topic:ucs-and-turned-view) हेर्नुहोस्।

### PLAN

छानिने कमाण्ड छैन। `Enter an option [Current ucs/Ucs/World] <Current ucs>`: सक्रिय प्यानको दृश्य यसरी घुमाउँछ कि UCS को X अक्ष (वा विश्वको) तेर्सो हुन्छ। ड्रइङमा केही सर्दैन।

### TURNLEFT, TURNRIGHT, TURNWORLD

छानिने कमाण्ड छैन; वा {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}। `UCS Z -90`, `UCS Z 90` र `UCS W` जस्तै, दृश्यले पछ्याउँदै।

### VPLAYER

छानिने कमाण्ड छैन। सिटमा, वा भ्यूपोर्टभित्र। `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` ले लेयर नाम सोध्छन् (अल्पविरामसहित, `*` र `?` वाइल्डकार्ड), त्यसपछि `[All/Select/Current] <Current>` भ्यूपोर्ट; Reset ले हरेक लेयरलाई "नयाँ भ्यूपोर्टमा फ्रिज" पूर्वनिर्धारणमा फिर्ता राख्छ; `V` ले त्यो पूर्वनिर्धारण सेट गर्छ (`[Frozen/Thawed]`), जुन {{cmd:MVIEW}} ले प्रयोग गर्छ। `?` ले हालको भ्यूपोर्टमा फ्रिज लेयर सूचीबद्ध गर्छ। Layers प्यानलको भ्यूपोर्ट स्तम्भले एउटा भ्यूपोर्टका लागि उही गर्छ। [एउटा भ्यूपोर्टमा लेयर फ्रिज गर्नुहोस्](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport) हेर्नुहोस्।

### MSPACE

उपनाम: `MS`; वा भ्यूपोर्टभित्र डबल-क्लिक। केवल सिटमा। भ्यूपोर्टमार्फत मोडेलमा काम गर्नुहोस्: छानिएको, सिटमा एउटै मात्र, वा `Click inside the viewport to work in`। भित्र पान र जुमले भ्यूपोर्टको दृश्य बदल्छ (प्रदर्शन-लक भएको भ्यूपोर्टले त्यो राख्छ र सिट सर्छ); नयाँ दृश्य एउटा पूर्ववत् चरणका रूपमा लेखिन्छ। [भ्यूपोर्टमार्फत मोडेलमा काम गर्नुहोस्](topic:sheets-and-viewports#work-on-the-model-through-a-viewport) हेर्नुहोस्।

### PSPACE

उपनाम: `PS`; वा भ्यूपोर्ट बाहिर डबल-क्लिक, वा ड्रइङमुनिको ट्याबमा क्लिक। सिटमा फर्किन्छ।

### PLOT

उपनाम: `PRINT`, `PUBLISH`, `EXPORTPDF`; वा {{key:Mod+P}}। {{ui:Plot to PDF}} संवाद खोल्छ। [Plot to PDF](topic:plot-pdf) हेर्नुहोस्।

### PLOTSTYLES

उपनाम: `STYLESMANAGER`, `PSTABLES`; वा {{ui:Plot to PDF}} संवादमा {{ui:Edit tables…}}। {{ui:Plot style tables}} खोल्छ: हरेक रङ कसरी छाप्छ (रङ, खैरो, मसी, लाइनवेट), ड्रइङसँगै बचत हुन्छ। [प्लट स्टाइल तालिका](topic:plot-pdf#plot-style-tables) हेर्नुहोस्।

### CHSPACE

{{cmd:CHSPACE}} ले भ्यूपोर्टमार्फत सिट र मोडेलबीच वस्तु सार्छ, तिनी अर्को छेउबाट उस्तै देखियोस् भनी स्केल र घुमाइन्छन्। सिटमा, वस्तु छान्नुहोस् र तिनी मोडेलमा जान्छन् (सिटमा एकभन्दा बढी भ्यूपोर्ट भए भ्यूपोर्ट छान्नुहोस्)। {{cmd:MSPACE}} मार्फत मोडेलमा काम गर्दा, छानिएका वस्तु सिटमा आउँछन्। कति गुणा ठूला वा साना भए भन्छ। भ्यूपोर्ट आफ्नो सिटमै रहन्छ। एउटा पूर्ववत् चरण।

### ISODRAFT

{{cmd:ISODRAFT}} ले आइसोमेट्रिक ड्राफ्टिङ `ON` वा `OFF` गर्छ, वा सिधै `Left`, `Top` वा `Right` प्लेनमा जान्छ। खुला हुँदा: Ortho ({{key:F8}}) ले रेखा प्लेनका दुई अक्षमा राख्छ (left: 90° र 150°; top: 30° र 150°; right: 30° र 90°), polar ट्र्याकिङ ({{key:F10}}) उही अक्ष पछ्याउँछ, snap to grid ({{key:F9}}) ले आइसोमेट्रिक ग्रिड प्रयोग गर्छ, र ग्रिड ({{key:F7}}) 30°, 90° र 150° मा रेखासहित कोरिन्छ। {{cmd:ELLIPSE}} मा `Isocircle` थपिन्छ: केन्द्र र त्रिज्या (वा `Diameter`) दिनुहोस्, र यसले हालको प्लेनमा वृत्त जस्तो देखिने दीर्घवृत्त कोर्छ। ड्रइङ समतल रहन्छ: यी पिक्टोरियल दृश्य कोर्ने सहायक हुन्, 3D मोडेल होइन। सेटिङ यस सत्रका लागि हो र फाइलमा बचत हुँदैन।

### ISOPLANE

{{cmd:ISOPLANE}} ले आइसोमेट्रिक ड्राफ्टिङ कुन प्लेनमा चल्छ छान्छ: `Left`, `Top` वा `Right`। Enter ले अर्कोमा जान्छ। आइसोमेट्रिक ड्राफ्टिङ खुला हुँदा, {{key:F5}} ले कमाण्डको बीचमा उही गर्छ; बन्द हुँदा {{key:F5}} ब्राउजरलाई छोडिन्छ।

## निरीक्षण

### CAL

गणनाको मान छाप्छ, जसरी लम्बाइ टाइप गरिएको जुनसुकै ठाउँमा पढिन्छ।

- `Expression`: टाइप गर्नुहोस्, जस्तै `12'6"+3/4"` वा `(24'-0")/3`, र {{key:Enter}} थिच्नुहोस्। CadCraft ले `= 12'-6 3/4"   (150.75 drawing units)` छाप्छ। [टाइप गरिएको मानमा अङ्कगणित](topic:coordinate-entry#arithmetic-in-a-typed-value) हेर्नुहोस्।

### DIST

उपनाम: `DI`; वा {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}।

- `Specify first point`, `Specify second point`। दूरी, कोण, Delta X र Delta Y छाप्छ।

### AREA

उपनाम: `AA`; वा {{ui:View}} › {{ui:More}} › {{ui:Area}}। क्षेत्रफल र परिधि छाप्छ।

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - कुनाहरू क्लिक वा टाइप गर्नुहोस्; `Specify next point (Enter closes) [Undo]` मा रूपरेखा बन्द गर्न {{key:Enter}} थिच्नुहोस्। `U` ले अन्तिम कुना फिर्ता लिन्छ।
  - {{key:Enter}} वा `O`, त्यसपछि `Select object`: वृत्त (परिधि छाप्छ), दीर्घवृत्त, पोलिलाइन (खुला भए क्षेत्रफलका लागि सीधा रेखाले बन्द गरिन्छ, र लम्बाइ छापिन्छ), वा ह्याच (प्वाल घटाइन्छ)।
  - `A` (Add area) र `S` (Subtract area) ले चलिरहेको योग राख्छन्: प्रम्प्ट `(ADD mode)` वा `(SUBTRACT mode)` बाट सुरु हुन्छ, प्रत्येक क्षेत्र थपिन्छ वा घटाइन्छ, र प्रत्येक पछि `Total area = …` छापिन्छ। यी मोडमा `O` ले {{key:Enter}} नआउञ्जेल वस्तु छान्छ, र पहिलो प्रम्प्टमा {{key:Enter}} ले कमाण्ड समाप्त गर्छ।

### MEASUREGEOM

उपनाम: `MEA`। `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; हरेक नापपछि फेरि सोध्छ, `eXit` पूर्वनिर्धारण हुँदै।

`Quick` ले तपाईं पोइन्टर सार्दा त्यसको वरिपरि नाप्छ: हालको UCS का अक्षअनुसार दायाँ, माथि, बायाँ र तल नजिकको वस्तुसम्मको दूरी, तपाईं जाँदै गर्दा कोरिँदै; र त्यसका दुई छिमेकी सीधा भएर भेटिने ठाउँमा कोण। क्लिकले चार दूरी, सफा चौडाइ र उचाइ, र कोण इतिहासमा लेख्छ; Enter ले विकल्पमा फर्काउँछ। यसले स्क्रिनमा भएको कुरा पढ्छ।

- `D`: दुई बिन्दु, {{cmd:DIST}} जस्तै।
- `R`: `Select arc or circle`; त्रिज्या र व्यास छाप्छ।
- `A`: चाप (यसको समावेश कोण), रेखा र त्यसपछि दोस्रो रेखा (तिनीबीचको कोण, तिनीहरूका टाढाका अन्त्यतिर), वा {{key:Enter}} र तीन बिन्दु (शीर्ष, त्यसपछि दुई छेउ)।
- `AR`: {{cmd:AREA}} जस्तै, एउटा क्षेत्र।

### ID

छानिने कमाण्ड छैन। `Specify point`; यसको X र Y छाप्छ।

### LIST

उपनाम: `LI`, `LS`। `Select objects`; हरेक वस्तुको प्रकार, लेयर र मुख्य नाप छाप्छ।

### MASSPROP

{{cmd:MASSPROP}} ले तपाईंले छानेका region र बन्द वस्तुको खण्ड गुण सँगै दिन्छ: क्षेत्रफल, परिधि, बाउन्डिङ बाकस, केन्द्रक, X र Y अक्षको उत्पत्तिबाट जडत्वका आघूर्ण, जडत्वको गुणन, घुमाउने त्रिज्या, केन्द्रकको वरिपरि उही आघूर्ण, र मुख्य आघूर्ण तिनका अक्षको दिशासहित। region भित्रका प्वाल प्वालका रूपमा गनिन्छन्। आँकडा ड्रइङ एकाइमा हुन्छन् र रेखा र चापबाट बनेका रूपरेखाका लागि ठ्याक्कै; दीर्घवृत्त र स्प्लाइन छोटा सीधा खण्डका रूपमा नापिन्छन्, र त्यो भनिन्छ। प्रतिवेदनपछि यसले पाठ फाइलमा लेख्ने कि भनी सोध्छ। बन्द नभएका वस्तु बाहिर राखिन्छन्, र कति भनिन्छ।

## दृश्य, फाइल र अन्य

### ZOOM

उपनाम: `Z`।

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`। झ्यालका लागि दुई कुना क्लिक गर्नुहोस्। `E`, `A` वा Enter: सम्पूर्ण ड्रइङ।
- `P` (Previous, वा टुलबारमा {{ui:Previous}}) अघिल्लो दृश्यमा फर्काउँछ, प्रति ट्याबमा 10 दृश्यसम्म; पङ्क्तिका ह्वील चाल वा एउटा पान एउटा दृश्य गनिन्छ।
- `2`, `2x` वा `0.5x` जस्तो सङ्ख्या (वा `S` र त्यसपछि सङ्ख्या) ले स्क्रिनको बीचवरिपरि त्यो गुणकले जुम इन वा आउट गर्छ।
- `C` ले `Specify center point` र `Enter height or magnification (nX)` सोध्छ।

### PDFATTACH, PDFIMPORT र PDF कमाण्डहरू

उपनाम: `PDFATT` {{cmd:PDFATTACH}} का लागि, `PDFIM` {{cmd:PDFIMPORT}} का लागि। {{cmd:PDFATTACH}} ले PDF पृष्ठ ड्रइङमुनि राख्छ (फाइल, पृष्ठ, सम्मिलन बिन्दु, स्केल, घुमाइ); {{cmd:PDFIMPORT}} ले पृष्ठको रेखा, वक्र, भरण र पाठलाई PDF को नाममा राखिएका लेयरमा ड्रइङ वस्तु बनाउँछ, साँचो आकारमा, टाइप गरिएको स्केलमा, वा दुई बिन्दु र साँचो दूरीबाट स्केल गरेर। {{cmd:PDFCLIP}} ले अन्डरलेलाई काट्छ, {{cmd:PDFADJUST}} ले फेड, कन्ट्रास्ट, मोनोक्रोम सेट गर्छ वा बन्द गर्छ, {{cmd:PDFLAYERS}} ले PDF का आफ्नै लेयर बदल्छ, र {{cmd:PDF}} ले ड्रइङको अन्डरलेले प्रयोग गर्ने फाइल CadCraft लाई फेरि दिन्छ। [PDF अन्डरले](topic:pdf-underlay) हेर्नुहोस्।

### AUTOCOMPLETE

उपनाम: `AUTOC`। ड्रइङ स्वतः-पूर्ति: कुनै कमाण्ड नचलिरहँदा, खैरो प्रेतले ड्रइङका आफ्नै ढाँचाले के आउँछ भनी देखाउँछ। {{cmd:AUTOCOMPLETE}} ले यसलाई `On` वा `Off` गर्छ (वा Settings › CadCraft), वा अहिले के सुझाउँछ त्यो `Show` गर्छ। **Tab** ले प्रेतलाई एउटा पूर्ववत् चरणका रूपमा कोर्छ, **Esc** ले ड्रइङ परिवर्तन नहुन्जेल हटाउँछ। यसले नयाँ वस्तुमा तीन कुरा फेला पार्छ: समान चालमा दुई पटक वा बढी कोरिएको कुराको अर्को प्रतिलिपि (स्टड, स्तम्भ, सिँढीको रिजर र ट्रेड), पोलिलाइन सिँढीका अर्को चरण, र कोठा वा पर्खाल चेनको छुटेको पक्ष। {{cmd:LINE}} वा {{cmd:PLINE}} को बीचमा प्रेत **अर्को बिन्दु** हो: सिँढीको अर्को चरण (रिजर, ट्रेड, रिजर…), आयतको चौथो कुना, त्यसलाई बन्द गर्ने बिन्दु, वा अर्को बराबर चरण। कर्सर नजिक ल्याएर **Tab** थिच्नुहोस्, मानौँ त्यहाँ क्लिक गरियो; जारी राख्नुहोस् वा Enter थिच्नुहोस्। यो यस कम्प्युटरमा नियमद्वारा गणना हुन्छ, कुनै मोडेल बिना।

### AUTOSHEET

उपनाम: `ASH`। आफैँ मिलाउने सिटहरू। {{cmd:AUTOSHEET}} ले ड्रइङका टुक्रा (तपाईंका नामित दृश्य, वा मोडेलका छुट्टै टुक्रा, वा सम्पूर्ण मोडेल) लिन्छ, कागजको आकार (वा तपाईंले दिएको) छान्छ, प्रत्येक टुक्रालाई मानक स्केल दिन्छ (सबैका लागि एउटा, वा प्रत्येकले लिन सक्ने ठूलो), र दृश्यहरूलाई नयाँ सिटमा पङ्क्तिमा राख्छ, शीर्षक ब्लक र तलको क्यापसन (नाम र स्केल) सहित। एउटा सिटमा नअट्ने कुरा आफ्नै सिटमा जान्छ। एउटा पूर्ववत् चरण। यो यस कम्प्युटरमा नियमद्वारा गणना हुन्छ, कुनै मोडेल बिना।

### PHOTOSKETCH

उपनाम: `PSK`। स्केचको फोटोलाई ड्रइङमा बदल्छ। कागजमा हातले बनाएको स्केचको फोटो (JPEG, PNG वा TIFF) छान्नुहोस्। {{cmd:PHOTOSKETCH}} ले कागजका चार कुना फेला पार्छ, परिप्रेक्ष्य सीधा गर्छ, तपाईंले दिएको कागजको आकार (`Paper`, वा नजिकैको मानक) र स्केचको `Scale` (1 : n) लिन्छ, र कलमका रेखालाई रेखा, चाप र वृत्तमा ट्रेस गर्छ, कलमको रङ (कालो, रातो, नीलो, हरियो) अनुसार लेयर सहित। कागजको किनारा फेला नपरे सम्पूर्ण फोटोलाई सिट मान्छ र त्यो भन्छ। लेखाइ छोडिन्छ। एउटा पूर्ववत् चरण। यो यस कम्प्युटरमा पुरानो तस्बिर प्रशोधनद्वारा हुन्छ, कुनै मोडेल बिना, र कतै पठाइँदैन। स्क्यान गरिएका ड्रइङका कमाण्ड पनि हेर्नुहोस्।

### AUTODIM

उपनाम: `ADIM`। नियमद्वारा स्वतः-डाइमेन्सन। {{cmd:AUTODIM}} ले छानिएका वस्तु (वा सम्पूर्ण ड्रइङ) तिनका तह र ठाडा किनारबाट डाइमेन्सन गर्छ: तपाईंले छानेका पक्ष (`Sides`) का लागि डाइमेन्सनको चेन, त्यसबाहिर एउटा समग्र डाइमेन्सन, प्रत्येक खुल्ला ठाउँको चौडाइ (सँगै रेखा भएका पर्खालबीचको खाली), प्वालको हरेक आकारका लागि व्यास, र `Grid` ले ग्रिड रेखाबीचको दूरी। पहिल्यै भएको डाइमेन्सन फेरि बनाइँदैन। एउटा पूर्ववत् चरण। यो यस कम्प्युटरमा नियमद्वारा गणना हुन्छ, कुनै मोडेल बिना।

### GRIDMOVE

उपनाम: `GM`। ग्रिड रेखा सार्दा त्यसमा झुण्डिएको सेट पनि सर्छ। {{cmd:GRIDMOVE}} ले ग्रिड रेखा (नाममा grid वा axis भएको लेयरको रेखा) र त्यसमा झुण्डिएका कुरा सार्छ: रेखामा छेउ भएका पर्खाल रेखा पछ्याउन तन्कन्छन्, रेखासँगै भएका पर्खाल पूरै सर्छन्, स्तम्भ (रेखामा ब्लक सन्दर्भ र वृत्त), त्यसको बबल र ट्याग सर्छन्, र बिन्दु रेखामा भएका डाइमेन्सनले नयाँ दूरी नाप्छन्। दुई बिन्दु दिनुहोस् (रेखा पार गर्ने भाग मात्र गणना हुन्छ) वा `Distance`। एउटा पूर्ववत् चरणले सबै फिर्ता ल्याउँछ। यो यस कम्प्युटरमा नियमद्वारा गरिन्छ।

### DETAILS

उपनाम: `DET`। तपाईंको फर्मका आफ्नै डिटेल भेट्छ। {{cmd:DETAILS}} ले फर्मका आफ्नै डिटेल राख्छ: `Add` ले यस ड्रइङको ब्लक सूचीमा राख्छ, `List` र `Remove` ले व्यवस्थापन गर्छन्, `Find` ले छानिएका (वा तपाईंले भर्खर कोरेका) वस्तुका लागि तिनको लेयर, ब्लकको नाम, ह्याच ढाँचा र नोटका शब्दहरूलाई हरेक डिटेलको नाम र नोटसँग मिलाएर श्रेणीकरण गर्छ, त्यसैले एउटा विन्डो हेडले तपाईंको सिल फ्ल्यासिङ भेट्छ। नम्बर र बिन्दु छानेर राख्नुहोस्। `Hint` अन (Settings › CadCraft मा पनि) भएमा, डिटेलले मिल्ने कुरा छानिँदा स्थिति पट्टीमा एक लाइन देखिन्छ। सूची यस कम्प्युटरको यस ब्राउजरमा राखिन्छ, र खोजी यही सूचीमा हुन्छ। `Share` ले यसलाई तपाईंको Documents फोल्डरमा पनि राख्छ (`.cadcraft/firm-details.json`, हरेक ब्लकको ड्रइङसहित): `Pull` ले तपाईंको टोलीसँग भएको र तपाईंसँग नभएको थप्छ, `Push` ले तपाईंसँग भएको र तिनीहरूसँग नभएको थप्छ, `Both` दुवै गर्छ, र दुवै पक्षबाट कुनै पनि हटाइँदैन। पहिले Documents फोल्डर खोल्नुहोस् ({{cmd:DOCUMENTS}}); त्यो फोल्डर Team Cloud Plan फोल्डर हो भने पूरै टोलीले एउटै सूची साझा गर्छ। Library प्यानलको डिटेल वस्तुमा **Add to my firm's details** बटन छ, जसले यसलाई उही सूचीमा राख्छ। यो यस कम्प्युटरमा शब्दद्वारा गणना हुन्छ, कुनै मोडेल बिना।

### SKETCHFIX

उपनाम: `SKF`। कलमका स्केच सटीक ज्यामितिमा बदल्छ। एक पटकमा एउटा फ्रिहान्ड स्ट्रोक थिच्नुहोस् र तान्नुहोस् (कलम, माउस वा औँला), त्यसपछि Enter। हरेक स्ट्रोक रेखा, वृत्त, चाप, आयत वा पोलिलाइनका रूपमा पढिन्छ: लगभग तेर्सो र ठाडा रेखा ठ्याक्कै तेर्सो र ठाडो बनाइन्छ, बन्द गोलो स्ट्रोक वृत्त बन्छ, चार समकोण कुना भएको बन्द स्ट्रोक आयत बन्छ, र स्ट्रोकका छेउहरू एकअर्कातिर र ड्रइङमा भएका छेउमा तानिन्छन्। एउटा पूर्ववत् चरण। यो यस कम्प्युटरमा नियमद्वारा गणना हुन्छ, कुनै मोडेल बिना।

### SCANATTACH र स्क्यान गरिएका ड्रइङका कमाण्ड

उपनाम: `SCA` {{cmd:SCANATTACH}} का लागि, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} को उपनाम छैन। तिनी तस्बिरमा काम गर्छन्, प्रत्येकमा एउटा पूर्ववत् चरण। {{cmd:SCANATTACH}} ले PNG, JPEG, TIFF (एउटा पृष्ठ वा सबै) वा तस्बिर भएको PDF पृष्ठ राख्छ। {{cmd:SCANSCALE}} ले दुई छानिएका बिन्दु र साँचो दूरीबाट सिटलाई स्केल गर्छ। {{cmd:SCANALIGN}} ले सिटलाई दुई बिन्दुमा सार्छ र घुमाउँछ (`Scale the sheet to fit` Yes/No)। {{cmd:SCANDESKEW}} ले सिटका लामा रेखाको कोण देखाउँछ, र तपाईंले `Accept` वा `Value` दिएपछि सिट घुमाउँछ। {{cmd:SCANCLEAN}} ले यसलाई कालो-सेतो बनाउँछ (`Threshold` Auto/Adaptive/Level, `Specks`) र `Run`। {{cmd:SCANCROP}} ले झ्याल राख्छ। {{cmd:SCANERASE}} ले `Rectangle`, `Polygon` वा `Lasso` मेटाउँछ। {{cmd:SCANTRACE}} ले नयाँ लेयरमा रेखा र चाप ट्रेस गर्छ (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) र के भेट्यो र के राष्टरका रूपमा छोड्यो भन्छ। {{cmd:SCANINFO}} ले मूल फाइल र चरणहरू सूचीबद्ध गर्छ। {{cmd:RASTERSNAP}} ले स्क्यान गरिएका सिटका रेखामा स्न्याप On वा Off गर्छ। स्क्यान गरिएका ड्रइङ र ट्रेसको विषय हेर्नुहोस्।

### REGEN र REGENALL

उपनाम: {{cmd:REGEN}} का लागि `RE`, {{cmd:REGENALL}} का लागि `REA`। ड्रइङबाट स्क्रिनमा देखिएको कुरा फेरि बनाउँछ: {{cmd:REGEN}} ले तपाईं हेरिरहनुभएको ट्याब (सिटमा, त्यसका भ्यूपोर्टले देखाउने मोडेलसहित), {{cmd:REGENALL}} ले हरेक ट्याब, हरेक स्क्रिन-विभाजन प्यान र हरेक खुला ड्रइङ। स्क्रिप्ट वा धेरै ठूलो परिवर्तनपछि चित्र पुरानो देखिँदा, वा सहायकले ड्रइङ सम्पादन गरेमा प्रयोग गर्नुहोस्; ड्रइङ छोइँदैन, त्यसैले पूर्ववत् गर्नुपर्ने केही हुँदैन।

### NAMEDVIEW

उपनाम: `NV`, `VIEWS`। `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, त्यसपछि दृश्यको नाम। `S` ले स्क्रिनको दृश्य बचत गर्छ, `W` ले तपाईंले छान्ने झ्याल, `R` ले बचत गरिएको दृश्य देखाउँछ, `D` ले एउटा मेटाउँछ, `?` ले यस ट्याबका दृश्य सूचीबद्ध गर्छ। अवस्थित नामसँग बचत गर्दा त्यो बदलिन्छ; हरेक परिवर्तन एउटा पूर्ववत् चरण हो। दृश्य तिनी बचत गरिएको ट्याबका हुन्छन्। DWG र DXF फाइलले तिनलाई राख्छन् (VIEW तालिका); सिटका दृश्य पहिलो सिटमा फर्किन्छन्, किनभने फाइलले कुन सिटको भनेर भन्दैन।

### UNDO र REDO

उपनाम: {{cmd:UNDO}} का लागि `U`; {{cmd:REDO}} को उपनाम छैन। {{key:Mod+Z}} र {{key:Mod+Y}} पनि।

### LAYER

उपनाम: `LA`। {{ui:Layers}} प्यानलमा जान्छ।

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` वा नाम (`?` ले तिनलाई सूचीबद्ध गर्छ: Continuous, ड्रइङका आफ्नै, र DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE, तिनका `2` (आधा) र `X2` (दोब्बर) आकारसहित)। {{cmd:LWEIGHT}} (`LW`): नयाँ वस्तुका लागि mm मा लाइनवेट, वा `ByLayer`, `ByBlock`, `Default`। {{cmd:LTSCALE}} (`LTS`): ड्रइङको रेखा प्रकार स्केल (पूर्ववत् गर्न मिल्ने)। {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — स्थिति पट्टीको {{ui:LWT}} बटन जस्तै। [रेखाको चौडाइ र रेखा प्रकार](topic:units-papers-scales#line-weights-and-linetypes) हेर्नुहोस्।

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, त्यसपछि नयाँ नाम; वस्तु वा सन्दर्भ पछ्याउँछन्। {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` Enter नआउञ्जेल, त्यसपछि `Select object on target layer or [Name]` र `Y`। {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, त्यसपछि `Y`: लेयर र त्यसमा भएका हरेक वस्तु जान्छन् (layer 0, DEFPOINTS वा हालको लेयर होइन)। हरेकमा एउटा पूर्ववत् चरण। [लेयरसहित ड्रइङ व्यवस्थित गर्नुहोस्](topic:layers#rename-merge-and-delete-layers) हेर्नुहोस्।

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

वस्तु छानेर लेयरसँग काम गर्नुहोस्; {{ui:Layers}} प्यानलको {{ui:Tools}} मेनुमा पनि। {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, त्यसपछि {{key:Enter}}: अरू हरेक लेयर बन्द हुन्छ। {{cmd:LAYUNISO}} तिनलाई फेरि खोल्छ। {{cmd:LAYOFF}} र {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (वा फ्रिज), बारम्बार; `U` ले अन्तिम फिर्ता लिन्छ, {{key:Enter}} ले अन्त्य गर्छ। {{cmd:LAYMCUR}}: `Select object whose layer will become current`। {{cmd:LAYON}} ले हरेक लेयर खोल्छ, {{cmd:LAYTHW}} ले हरेक लेयर पग्लाउँछ। हरेक कमाण्ड एउटा पूर्ववत् चरण हो। [वस्तु छानेर लेयरसँग काम गर्नुहोस्](topic:layers#work-on-layers-by-picking-objects) हेर्नुहोस्।

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} ले खाली ड्रइङ सुरु गर्छ, र {{cmd:OPEN}} ले DWG वा DXF खोल्छ; दुवै ड्रइङमाथि आफ्नै ट्याबमा (नछोएको नयाँ ड्रइङ भए नयाँ ट्याब बनाउनुको सट्टा त्यही प्रयोग हुन्छ)। नबचेका परिवर्तन भएको ट्याब बन्द गर्दा पहिले सोधिन्छ। [स्क्रिन विभाजन](topic:split-screen) हेर्नुहोस्।

{{cmd:SAVE}} (उपनाम `QSAVE`, {{key:Mod+S}} पनि) ले ड्रइङको ढाँचामा प्रतिलिपि डाउनलोड गर्छ: DWG बाट खोलिएको भए DWG, DXF बाट खोलिएको भए DXF। नयाँ ड्रइङले यस ब्राउजरमा Save as मा अन्तिम छानिएको ढाँचा लिन्छ, नत्र DWG।

{{cmd:SAVEAS}} ({{key:Mod+Shift+S}} पनि) ले {{ui:Save a copy as}} संवाद खोल्छ: {{ui:DWG}} (र यसको {{ui:Version}}), {{ui:DXF R12}} वा {{ui:DXF 2000}} छान्नुहोस्, त्यसपछि {{ui:Save}}। छनोट यस ड्रइङका लागि र यस ब्राउजरका नयाँ ड्रइङका लागि रहन्छ।

{{cmd:DXFOUT}} ले सधैँ DXF R12 प्रतिलिपि डाउनलोड गर्छ, {{cmd:SAVE}} ले प्रयोग गर्ने ढाँचा नबदली।

[फाइल: के खुल्छ, के बचत हुन्छ](topic:files#saving) हेर्नुहोस्।

### TOUR

उपनाम: `TUTORIAL`। पहिलो ड्रइङको छ-चरणको भ्रमण फेरि सुरु गर्छ। [सुरु गर्दै](topic:getting-started#prefer-to-be-guided) हेर्नुहोस्।

### TOOLBARDOCK

उपनाम: `TBDOCK`। `Toolbar position [Top/Bottom/Left/Right]`। [सेटिङ](topic:settings#toolbar-position) हेर्नुहोस्।

### COMMANDLINE

उपनाम: `CMDLINE`। `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: कमाण्ड लाइन डक वा फ्लोट गर्छ, एक लाइन बनाउँछ, देखाउने इतिहास लाइनको सङ्ख्या सोध्छ (0 देखि 12), वा इतिहास खोल्छ। [सेटिङ](topic:settings#command-line) हेर्नुहोस्।

### TOPAREA

`Top area [Standard/Compact]`: ड्रइङमाथिका पट्टी जस्ताको तस्तै, वा संक्षिप्त। [सेटिङ](topic:settings#top-area) हेर्नुहोस्।

### POLARANG

`Enter polar angle step in degrees <90>`: {{ui:Polar}} ट्र्याकिङ रेखा मिलाउने चरण (0 भन्दा बढी, 180 सम्म)। यस ब्राउजरमा राखिन्छ।

### UNITS

उपनाम: `UN`। लम्बाइ कसरी लेखिन्छ र टाइप गरिन्छ।

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural र Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`। अरूका लागि: `Enter number of decimal places (0 to 8)`।

नयाँ डाइमेन्सनले त्यसलाई पछ्याउँछन्। एउटा पूर्ववत् चरण। {{ui:Current settings}} मा {{ui:Length format}} र {{ui:Precision}} जस्तै; [फिट र इन्च](topic:units-papers-scales#feet-and-inches-and-fractions) हेर्नुहोस्।

### GDSIN

उपनाम: `GDS`। IC लेआउट हेर्नुहोस् (GDSII स्ट्रिम फाइल): प्रयोगशाला परीक्षण, हेर्न र नाप्नका लागि मात्र।

- फाइल छनोटकर्ताले `.gds` फाइल लिन्छ; धेरै शीर्ष सेल भए `Enter the top cell to draw`।
- हरेक लेयर र datatype ड्रइङ लेयर बन्छ (`GDS 1`, `GDS 2/5`), र सन्दर्भ र एरे समतल राखिन्छन्, फाइलको user unit (सामान्यतया माइक्रोमिटर) मा। एउटा पूर्ववत् चरण। केही सिमुलेट वा जाँच गरिँदैन, र फाइल फर्कन लेखिँदैन।

### DIAGRAM

उपनाम: `TEXTDIAGRAM`, `T2D`। पाठबाट चित्र।

- बक्सले पाठ लिन्छ (वा कमाण्ड लाइनमा `;` ले छुट्याएको एउटै लाइन): Mermaid फ्लोचार्ट, PlantUML कम्पोनेन्ट चित्र, D2 वा from-to सूची।
- `Specify the top left corner of the diagram`, त्यसपछि `Specify the text height`।

ब्लक र जडान लेयर `Diagram` मा साधारण वस्तु हुन्, समाप्त हुँदा छानिएका। एउटा पूर्ववत् चरण। [पाठबाट चित्र बनाउनुहोस्](topic:text-to-diagram) हेर्नुहोस्।

### OLELIST

उपनाम: `OLES`। DWG ले बोकेका OLE वस्तु जसलाई CadCraft आफैँ राख्न सक्दैन।

- हरेक सूचीबद्ध गर्छ: नम्बर, प्रकार, आकार, र त्यसले तस्बिर बचत गरेको छ कि छैन।
- `Enter an option [Place/eXit] <eXit>`: Place ले नम्बर, तल्लो-बायाँ कुना र चौडाइ सोध्छ, र तस्बिरसहित फ्रेम कोर्छ। एउटा पूर्ववत् चरण; राखिएको वस्तु परिवर्तन हुँदैन। [तस्बिर](topic:pictures#objects-from-other-programs-ole) हेर्नुहोस्।

### SHXFONTS

उपनाम: `SHX`। तपाईंका आफ्नै SHX फन्ट।

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} ले फोल्डरको हरेक `.shx` पढ्छ (CadCraft Studio; हरेक सुरुमा फेरि), {{ui:Files}} ले छानिएका फाइल लिन्छ (ब्राउजर), {{ui:Reverse}} ले एउटा फन्टका अक्षर पछाडिबाट अगाडि लेआउट गर्छ। लोड गरिएको फन्टको नाम लिने पाठ शैली तिनमा कोरिन्छ। [आफ्नै SHX फन्टमा पाठ कोर्नुहोस्](topic:shx-fonts) हेर्नुहोस्।

### LIMITS

ड्रइङ कति ठूलो हुने भनेर अभिप्रेत।

- `Specify lower left corner or [ON/OFF] <current>`: बिन्दु, `ON` वा `OFF`।
- `Specify upper right corner <current>`।

ग्रिडले सीमा भर्छ, {{cmd:ZOOM}} All ले तिनलाई देखाउँछ, र ON भएमा बाहिरको बिन्दु अस्वीकार हुन्छ (`**Outside limits`)। एउटा पूर्ववत् चरण; DWG र DXF मा बचत हुन्छ। [ड्रइङका सीमा सेट गर्नुहोस्](topic:drawing-limits) हेर्नुहोस्।

### AUNITS

उपनाम: `ANGUNITS`। कोण कसरी देखिन्छ र टाइप गरिन्छ।

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, वा अरू दुईका लागि `Enter precision` (0 डिग्री, 2 मिनेट, 4 सेकेन्ड, सेकेन्डको 5 देखि 8 दशमलव)।

एउटा पूर्ववत् चरण; DWG र DXF मा बचत हुन्छ। {{ui:Current settings}} मा {{ui:Angle format}} जस्तै। [बियरिङ र कोण टाइप गर्नुहोस् र देखाउनुहोस्](topic:bearings-and-angles) हेर्नुहोस्।

### APPLOAD

उपनाम: `AP`; वा {{ui:View}} › {{ui:More}} › {{ui:Load application…}}। {{ui:Load applications}} संवाद: `.lsp` रुटिन र `.dcl` संवाद फाइल लोड गर्नुहोस्, अनलोड गर्नुहोस्, इतिहासबाट फेरि लोड गर्नुहोस्, र Startup Suite। रुटिनको `(defun c:NAME …)` कमाण्ड अरू कुनै पनि जस्तै काम गर्छन्। [अनुप्रयोग लोड गर्नुहोस्](topic:load-applications) र [LISP रुटिन चलाउनुहोस्](topic:run-lisp) हेर्नुहोस्।

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (वा {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) ले तपाईंको उपनाम फाइल (`ALIAS, *COMMAND` लाइन) खोल्छ; {{ui:Save}} ले लागू गर्छ। {{cmd:REINIT}} ले फेरि लागू गर्छ। [कमाण्ड उपनाम सम्पादन गर्नुहोस्](topic:command-aliases) हेर्नुहोस्।

### OPTIONKEYS

उपनाम: `OPTKEYS`; वा {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} › {{ui:Edit…}}। तपाईंको विकल्प अक्षर फाइल (`COMMAND.OPTION, LETTERS` लाइन, जस्तै `ARRAY.PO, P`) खोल्छ; {{ui:Save}} ले लागू गर्छ र {{cmd:REINIT}} ले फेरि लागू गर्छ। [कमाण्ड विकल्पलाई आफ्नै अक्षर दिनुहोस्](topic:option-letters) हेर्नुहोस्।

### LISPEDIT

उपनाम: `VLIDE`; वा {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}। LISP सम्पादक खोल्छ, ड्रइङको छेउमा खुलिरहने झ्याल।

- पाठ: लाइन नम्बर, कर्सरमा रहेको कोष्ठकको जोडी चिन्हित (नभए रातो), {{key:Enter}} ले खुला कोष्ठकमुनि नयाँ लाइन इन्डेन्ट गर्छ, {{key:Tab}} ले दुई खाली ठाउँ टाइप गर्छ, {{key:Esc}} ले पाठबाट बाहिर निस्कन्छ।
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): हरेक फर्म पढ्छ, {{cmd:APPLOAD}} ले फाइलसँग गर्ने जस्तै, र यसका `c:` कमाण्ड बनाउँछ। फाइल {{cmd:APPLOAD}} को सूचीमा देखिन्छ।
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): छानिएका फर्म, वा कर्सर भएको फर्म मूल्याङ्कन गर्छ।
- {{ui:Stop}}: चलिरहेको रुटिन रोक्छ।
- {{ui:Console}}: रुटिनले छापेको कुरा, र प्रत्येक त्रुटि यसको लाइनसहित; त्रुटिमा क्लिक गर्दा त्यहाँ जान्छ। पाठ एक-शीर्ष-स्तरको फर्मका एकपटकमा चलाइन्छ, त्यसैले लाइन फर्मको हो, वा त्यसभित्र त्रुटिले नामित गरेको फङ्सन बोलाउने लाइन हो।
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): `.lsp` फाइल। पाठ यस ब्राउजरमा पनि राखिन्छ, त्यसैले झ्याल बन्द गर्दा गुम्दैन।
- पाठको छेउमा: रुटिनले परिभाषित गरेका फङ्सन, यस LISP मा अहिले नभएका तर बोलाउने फङ्सन, यसमा परिभाषित नभएका र अन्तर्निहित पनि नभएका बोलाउने फङ्सन, र बनाइएका र नबनाइएका सबै कुराको पूरा सूची।

कोष्ठक बन्द नभएको वा स्ट्रिङ नसकिएको पाठ चलाइँदैन: लाइन नाम लिइन्छ। चरण-चरणको डिबगर, ब्रेकपोइन्ट वा वाच झ्याल छैन। [LISP रुटिन चलाउनुहोस्](topic:run-lisp) हेर्नुहोस्।

### HELP

उपनाम: `?`। हरेक कमाण्ड, तिनका उपनाम र एक-लाइनको विवरण कमाण्ड लाइन इतिहासमा छाप्छ। यो यो सहायता खोल्दैन: त्यसका लागि {{key:F1}} थिच्नुहोस् वा {{ui:Help}} मा क्लिक गर्नुहोस्।

## छनोट प्रम्प्ट

कुनै पनि `Select objects` प्रम्प्टमा: वस्तुमा क्लिक गर्नुहोस्, बायाँबाट दायाँ झ्याल (बायाँबाट दायाँ) र दायाँबाट बायाँ क्रसिङ (दुई क्लिकले), वा लासो थिचेर तान्नुहोस् (तान्दा {{key:Space}}: झ्याल, क्रसिङ, बाड़), हटाउन {{key:Shift}}+क्लिक, र समाप्त गर्न {{key:Enter}}। तपाईं `ALL` (सबै), `L` (अन्तिम वस्तु), `P` (Previous: अन्तिम कमाण्डले प्रयोग गरेको), `F` (Fence: बिन्दुहरूको रेखाले काटिएका वस्तु; `U` ले बिन्दु फिर्ता लिन्छ), `W` (Window), `C` (Crossing), `R` (Remove मोड: क्लिकले वस्तु हटाउँछ; प्रम्प्टमा `Remove objects`), र `A` (फेरि Add) पनि टाइप गर्न सक्नुहुन्छ। `?` ले तिनलाई सूचीबद्ध गर्छ। प्रम्प्टमा तिनी देखाइँदैनन्। {{key:Tab}} ले ओभरल्यापिङ वस्तुमा अर्को हाइलाइट गर्छ; छान्न क्लिक गर्नुहोस्। [वस्तु छान्नुहोस्](topic:select-objects) हेर्नुहोस्।

### ACCESS

उपनाम: `AX`। ड्राफ्टिङ विना-दृष्टि। {{cmd:ACCESS}} ले Access अन वा अफ गर्छ (`On`, `Off`) र snap ध्वनि (`Sound`) र बोलिने कमाण्ड (`Voice`) बदल्छ; पहिले अवस्था भन्छ। Access अन हुँदा हरेक कमाण्ड र नतिजा तपाईंको स्क्रिन रिडरमार्फत बोलिन्छ, र ड्रइङ क्षेत्रमा किबोर्ड कर्सर हुन्छ। "Draft without sight" मद्दत विषयमा कुञ्जी छन्।

### DESCRIBE

उपनाम: `DESC`। ड्रइङमा के छ भन्नुहोस्: कति वस्तु, कुन प्रकारका, कति ठूला, कति लेयर, के छानिएको छ। केवल पढ्छ; केही परिवर्तन गर्दैन।

### WHEREAMI

उपनाम: `WHERE`। कर्सर कहाँ छ भन्नुहोस्, ड्रइङका एकाइमा।

### NEARBY

कर्सरनजिक के छ भन्नुहोस्, सबैभन्दा नजिकदेखि, प्रत्येकसँग दूरी र यो कुन पक्षमा छ।

### SAYSEL

छानिएको कुरा भन्नुहोस्, प्रति वस्तु एउटा वाक्य (रेखाको लम्बाइ, छेउ र कोण; वृत्तको त्रिज्या र केन्द्र; पाठ जसरी लेखिएको)।

### VOICE

बोलिने कमाण्ड अन वा अफ गर्नुहोस्। तिनी यस कम्प्युटरमा चिनिन्छन्; जहाँ ब्राउजरले त्यो गर्न सक्दैन, Settings मा ब्राउजरको अनलाइन सेवा छानेसम्म आवाज अफ रहन्छ।

### TOUCHCROSSHAIR

उपनाम: `TCX`। औँलाले ड्राफ्ट गर्न अफसेट क्रसहेयर, ताकि औँलाको टुप्पोले तपाईंले छान्ने बिन्दु नछेक्होस्। यो खुला हुँदा, ड्रइङमा एउटा औँलाले छान्दैन: यसले माथि र छेउमा बस्ने क्रसहेयर सार्छ। वस्तु स्न्याप र ट्र्याकिङ क्रसहेयरलाई पछ्याउँछन्। औँला उठाउँदा केही छानिँदैन, र क्रसहेयर जहाँ छ त्यहीँ रहन्छ। छान्न, ड्रइङको कुनामा रहेको {{ui:Click}} बटन थिच्नुहोस्, वा दोस्रो औँलाले ड्रइङमा जहाँसुकै ट्याप गर्नुहोस्। अर्को औँला सार्दै {{ui:Click}} थिचिरहँदा तान्छ (छनोट झ्याल, लासो, ग्रिप)। स्थिर थिचिएको औँला, वा {{ui:Enter}} बटन, Enter हो। दुई औँलाले पहिलेझैँ पान र जुम गर्छन्। ड्रइङको तल्लो किनारा र टाढाको किनारको नजिक, क्रसहेयर औँलातिर सुर्छ, ताकि ड्रइङको हरेक भागमा पुग्न सकियोस्। कलम र माउसले सधैँ सीधै छान्छन्।

{{cmd:TOUCHCROSSHAIR}} ले अवस्था भन्छ र `ON`, `OFF`, `Auto` (केवल जहाँ औँला मात्र पोइन्टर हो तहाँ अन, त्यसैले माउस भएको कम्प्युटरमा अफ), `Distance` (औँलाबाट क्रसहेयर कति टाढा, 24 देखि 240 पिक्सेल) वा `Side` (`Left`: माथि र बायाँ, दायाँ हातका लागि; `Right` बायाँ हातका लागि; बटन अर्को कुनामा सर्छन्) सोध्छ। उही विकल्प Settings › CadCraft मा छन्, र टचस्क्रिन भएको यन्त्रमा स्थिति पट्टीमा {{ui:Offset crosshair}} स्विच हुन्छ। विकल्प यस ब्राउजरमा राखिन्छन्।

### WHOHAS

कसले ड्रइङ खोलेको छ भन्छ। CadCraft Studio मा कम्प्युटरमा DWG वा DXF खोल्दा त्यसको छेउमा सानो लक फाइल (`Plan.dwg.cclock`: को, कहिलेदेखि, कुन संस्करण) लेखिन्छ, ड्रइङ खुला रहँदा हरेक मिनेटमा ताजा गरिन्छ, र बन्द गर्दा हटाइन्छ। अर्कैले खोलेको ड्रइङ खोल्दा त्यो कसले र कहिलेदेखि भन्छ, र {{ui:Open read-only}} (त्यसपछि Save ले नयाँ नाम सोध्छ), {{ui:Open anyway}} (अर्को व्यक्तिलाई उनीहरूको अर्को ताजा गर्दा भनिन्छ), वा {{ui:Cancel}} प्रस्ताव गर्छ। अर्कैले खोलेको फाइलमा बचत गर्दा पहिले सोधिन्छ। पाँच मिनेट ताजा नभएको लक पुरानो मानिन्छ: अर्को प्रति सुरक्षित नबचाई बन्द भयो वा कम्प्युटर निद्रामा छ।

{{cmd:WHOHAS}} ले `Current` (खुला ड्रइङ), `File` (एउटा छान्नुहोस्), `FOlder` (फोल्डर छान्नुहोस्: त्यसमा खुला कतै भएका हरेक ड्रइङ सूचीबद्ध हुन्छन्), `Path` (पूरा बाटो टाइप गर्नुहोस्), वा `Name` (अरूले देख्ने नाम; तपाईं साइन इन हुँदा तपाईंको खाताको नाम) सोध्छ। Studio ले तपाईंले छानेका फोल्डर मात्र पुग्न सक्छ: कहिल्यै नछानिएको फोल्डरबाट खोलिएको ड्रइङका लागि यसले एकपटक भन्छ कि यसले ड्रइङलाई खुला भनी नोट गर्न सक्दैन; `FOlder` ले फोल्डर छान्छ, र त्यसपछि त्यहाँ लक काम गर्छन्। लक मानिसका लागि एउटा सूचना हो, अवरोध होइन: अर्को कार्यक्रमले अझै फाइल लेख्न सक्छ। ब्राउजरमा फोल्डर हुँदैनन्, र कमाण्डले त्यो भन्छ।

### OVERKILL

नक्कल वस्तु मेटाउँछ र ओभरल्यापिङ रेखा र चापलाई मिलाउँछ, दोहोरिएका रेखाचित्र आउने ड्रइङका लागि। `Select objects to clean up`, {{key:Enter}}, त्यसपछि देखाइएका सेटिङसँग सफा गर्न फेरि {{key:Enter}}, वा पहिले एउटा परिवर्तन गर्नुहोस्:

- `Tolerance`: दुई निर्देशाङ्क कति नजिक हुनुपर्छ उही मानिन (सुरुमा 0.000001; 0 को अर्थ ठ्याक्कै उही)।
- `Ignore`: दुई वस्तु अन्यथा उस्तै हुँदा फरक हुन सक्ने गुण। नाम टाइप गरी स्विच गर्नुहोस्: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, वा `None` / `All`। सकिएपछि {{key:Enter}}।
- `Overlap`: अन वा अफ। अन भएमा, एउटै सीधा रेखामा ओभरल्याप हुने रेखा एउटा रेखा बन्छन् (अर्कोभित्र पर्ने रेखा सिधै मेटिन्छ), र एउटै वृत्तमा ओभरल्याप हुने चाप एउटा चाप बन्छन्; पूरा घुम्ने चाप वृत्त बन्छ, र वृत्तमा परेको चाप मेटिन्छ।
- `Ends`: अन वा अफ। अन भएमा, एउटै सीधा रेखामा अन्त्य-देखि-अन्त्यसम्म मात्र छुने रेखा, र एउटै वृत्तमा मात्र छुने चाप, एउटा टुक्रा बन्छन्।

हरेक वस्तु प्रकार नक्कलका लागि जाँचिन्छ: दुई वस्तु नक्कल हुन् जब तिनको ज्यामिति सहनशीलतामा उस्तै हुन्छ र लेयर, रङ, रेखा प्रकार, रेखा प्रकार स्केल, लाइनवेट, मोटाइ, पारदर्शिता र उचाइ मिल्छन् (तपाईंले बेवास्ता गरेका बाहेक)। रेखा र खुला पोलिलाइन अर्को तरिकाले कोरिएका भए पनि मिल्छन्। ड्रइङ क्रममा पहिलो वस्तु रहन्छ र आफ्नै गुण राख्छ। कमाण्डले कति वस्तु जाँचियो र कति मेटियो भन्छ: नक्कल, मिलाइएका ओभरल्याप टुक्रा, अन्त्य-देखि-अन्त्यसम्म जोडिएका टुक्रा। एउटा {{cmd:UNDO}} ले सबै फिर्ता ल्याउँछ। सेटिङ ड्रइङ विन्डो बन्द नभएसम्म रहन्छन्।

यसले छाड्छ: लक लेयरका वस्तु र लुकेका वस्तु। यसले उचाइ (Z) भएका रेखालाई मिलाउँदैन (ठ्याक्कै नक्कल तिनीहरू पनि जान्छन्), र पोलिलाइनभित्रका खण्डलाई छुँदैन (पातलो बनाइँदैन), पोलिलाइनको खण्डमा रहेको रेखा, र उल्टो दिशामा कोरिएको बन्द पोलिलाइन।

### DRAWORDER

वस्तु कुनलाई अगाडि कोरिन्छ त्यो परिवर्तन गर्छ। `Select objects to re-order`, {{key:Enter}}, त्यसपछि `Above objects`, `Under objects`, `Front` वा `Back` ({{key:Enter}} = `Back`)। `Above objects` र `Under objects` ले सन्दर्भ वस्तु सोध्छन्: छानिएका वस्तु तिनीमध्ये सबैभन्दा अगाडिको ठीक अगाडि, वा सबैभन्दा पछाडिको ठीक पछाडि जान्छन्। छानिएका वस्तुले आपसमा आफ्नो क्रम राख्छन्। एउटा पूर्ववत् चरण। क्रम DWG र DXF मा ड्रइङसँग बचत हुन्छ, जहाँ यो वस्तु लेखिएको क्रम हो।

स्क्रिनमा हरेक वस्तु ड्रइङको क्रममा कोरिन्छ, अन्य कार्यक्रमले फाइल खोल्दा कोरे जस्तै: ठोस ह्याच, फराकिलो पोलिलाइन वा पाठ मास्कले पछाडिका रेखा र पाठ छोप्छ, र अगाडिको कुराले छोप्छ। रेखा र पाठ क्रस हुँदा दुवै देखिन्छन्। तस्बिर र जोडिएका PDF पृष्ठ रेखा मुनि रहन्छन्। धेरै ठूलो ड्रइङमा जहाँ भरण र रेखा 256 पटकभन्दा बढी ओभरल्याप र बदलिन्छन्, पहिलो 256 ले आफ्नो क्रम राख्छन् र बाँकीका भरण रेखाहरूमुनि कोरिन्छन्, ताकि फेरि कोर्न छिटो रहोस्।

### TEXTTOFRONT

खुला स्पेसमा पाठ, डाइमेन्सन र लिडरलाई अरू सबै कुराको अगाडि ल्याउँछ: `Text`, `Dimensions`, `Leaders` वा `All` ({{key:Enter}} = `All`)। एउटा पूर्ववत् चरण। त्यस्ता कुनै नभए, वा पहिल्यै अगाडि भए त्यो भन्छ।

### HATCHTOBACK

खुला स्पेसका हरेक ह्याच अरू सबै कुराको पछाडि पठाउँछ, ताकि बचत गरिएको फाइलमा भरणले रेखा र पाठ छोप्न छोडून्। कुनै प्रम्प्ट छैन। एउटा पूर्ववत् चरण।

### ISOLATEOBJECTS

उपनाम: `ISOLATE`। केवल छानिएका वस्तु देखाउँछ: खुला स्पेसका बाँकी सबै UNISOLATEOBJECTS नआउञ्जेल दृष्टिबाहिर हुन्छन्। {{cmd:LAYISO}} भन्दा फरक, यसले तपाईंले छानेका वस्तुमा काम गर्छ, तिनका लेयर जस्ता भए पनि, र कुनै लेयर परिवर्तन गर्दैन। लुकेका वस्तु कोरिँदैनन्, छानिँदैनन्, स्न्याप हुँदैनन्, जुम गरिँदैनन् न प्लट हुन्छन्, र `ALL` लिने कमाण्डले तिनलाई छाड्छन्। वस्तु अलग गरिएको बेला तपाईंले कोरेको कुरा सामान्यझैँ देखिन्छ।

यो सत्रका लागि मात्र हो: ड्रइङसँग केही बचत हुँदैन, यो पूर्ववत् चरण होइन, र ड्रइङ फेरि खोल्दा सबै देखिन्छ। वस्तु लुकिरहँदा स्थिति पट्टीमा तिनको सङ्ख्यासहित बटन देखिन्छ; फेरि देखाउन त्यसमा क्लिक गर्नुहोस्।

### HIDEOBJECTS

UNISOLATEOBJECTS नआउञ्जेल छानिएका वस्तु लुकाउँछ। ISOLATEOBJECTS को उही नियम: सत्रका लागि मात्र, बचत हुँदैन, पूर्ववत् चरण होइन।

### UNISOLATEOBJECTS

उपनाम: `UNISOLATE`, `UNHIDE`। ISOLATEOBJECTS वा HIDEOBJECTS ले लुकाएका हरेक वस्तु फेरि देखाउँछ, र कति फर्के भन्छ।

### LAYLOCKFADE

लक लेयरका वस्तु कस्तो देखिन्छन् र क्लिकले तिनलाई पुग्छ कि पुग्दैन सेट गर्छ। हालको अवस्था भन्छ, त्यसपछि लिन्छ:

- 0 देखि 90 सम्मको सङ्ख्या: प्रतिशतमा फेड मात्रा (सुरुमा 50)। 0 ले फेड बन्द गर्छ।
- `ON` वा `OFF`: फेड अन वा अफ, मात्रा कायम राखेर।
- `Pick`, त्यसपछि `Yes` वा `No`: कुनै कमाण्ड नचलिरहँदा क्लिकले लक लेयरका वस्तु छान्न सक्छ कि सक्दैन? `No` (पूर्वनिर्धारण): तिनी बिलकुल छानिँदैनन्। `Yes`: क्लिक वा झ्यालले तिनलाई छान्छ ताकि {{ui:Properties}} ले देखाउन सकोस्; तिनी अझै परिवर्तन गर्न मिल्दैनन्, र कमाण्डको आफ्नै `Select objects` ले तिनलाई कहिल्यै लिँदैन।

Object snap ले लक लेयरका वस्तु दुवै अवस्थामा फेला पार्छ। प्लट कहिल्यै फिका हुँदैन। दुवै सेटिङ तपाईंका हुन्, ड्रइङका होइनन्, र Settings मा {{ui:Locked layers}} अन्तर्गत पनि छन्।

### BURST

ब्लक सन्दर्भ विस्फोट गर्छ र तिनका विशेषताले भनेको कुरा राख्छ। `Select block references to burst`, {{key:Enter}}: हरेक सन्दर्भ ब्लकका वस्तुले बदलिन्छ, र प्रत्येक देखिने विशेषताको मान त्यस विशेषताकै आफ्नै लेयरमा सादा पाठ बन्छ (लेयर 0 मा भएको विशेषता सन्दर्भको लेयरमा जान्छ, ब्लकका अरू लेयर 0 वस्तुझैँ)। नदेखिने विशेषता हट्छन्। ब्लकभित्रको ब्लक ब्लक सन्दर्भ नै रहन्छ। एउटा पूर्ववत् चरण; विस्फोट गरिएका सन्दर्भ र पाठमा बदलिएका विशेषता मानको सङ्ख्या भन्छ।

जोडिएको ड्रइङलाई नामले अस्वीकार गर्छ (पहिले बाँध्नुहोस्, वा {{cmd:NCOPY}} बाट प्रतिलिपि गर्नुहोस्), र छानिएका अन्य वस्तु छोड्छ। ब्लक सन्दर्भका लागि {{cmd:EXPLODE}} ले उही वस्तु दिन्छ; {{cmd:BURST}} ले केवल ब्लक सन्दर्भ लिन्छ, र विशेषता पाठ गन्छ।

### TXT2MTXT

उपनाम: `T2M`। एक-पङ्क्तिका पाठलाई एउटा अनुच्छेद पाठमा जोड्छ। `Select single-line text to join`, {{key:Enter}}, त्यसपछि `Paragraph` (पङ्क्तिहरू एकसाथ दौडिन्छन् र सबैभन्दा चौडा पङ्क्तिको चौडाइमा लपेटिन्छन्) वा `Lines` (हरेक पाठ आफ्नै पङ्क्ति रहन्छ); {{key:Enter}} ले पछिल्लो पटक प्रयोग गरिएकोलाई लिन्छ। पङ्क्तिहरू माथिबाट तलसम्म, त्यसपछि बायाँबाट दायाँ, माथिल्लो पाठको दिशामा क्रमबद्ध हुन्छन्। अनुच्छेद माथिल्लो पाठको माथिल्लो-बायाँ कुनाबाट झुण्डिन्छ र त्यसको उचाइ, घुमाइ, शैली, लेयर र रङ लिन्छ। एउटा पूर्ववत् चरण।

पहिल्यै अनुच्छेद पाठ भएको, खाली पाठ, र छनोटका अन्य वस्तु छोडिन्छन्; कमाण्डले कति छोडियो भन्छ।

### NCOPY

ब्लक सन्दर्भ वा जोडिएको ड्रइङबाट वस्तु ड्रइङमा प्रतिलिपि गर्छ, केही विस्फोट नगरी। `Pick an object inside a block reference or a linked drawing`: छानेको नजिकको वस्तु त्यो देखिने ठाउँमा प्रतिलिपि हुन्छ, जति गहिराइमा भए पनि; अरू छान्नुहोस्, त्यसपछि {{key:Enter}}। अर्को `Base point to move the copies`: {{key:Enter}} ले तिनलाई ठाउँमै राख्छ, वा आधार बिन्दु र दोस्रो बिन्दु दिनुहोस्। पूरै कमाण्ड एउटा पूर्ववत् चरण हो।

प्रतिलिपिले देखिने लेयर लिन्छ: ब्लकभित्र लेयर 0 को वस्तु जुन सन्दर्भमा थियो त्यसको लेयरमा जान्छ, र ByBlock रङ त्यो सन्दर्भको रङ बन्छ। जोडिएको ड्रइङबाट, लेयर `Plan|Walls` `Plan$0$Walls` बन्छ (जोडले दिएको नाम), र लिङ्क लेयरको रङ, रेखा प्रकार र लाइनवेटसहित बन्छ। विशेषताको मान पाठका रूपमा प्रतिलिपि हुन्छ। लक लेयरमा भएका ब्लक सन्दर्भ छान्न सकिँदैन।

### FLATTEN

छानिएका वस्तुको उचाइ (Z) र मोटाइ 0 मा सेट गर्छ। `Select objects to flatten`, {{key:Enter}}। यसले छानिएको ब्लक परिभाषा भित्रका वस्तु पनि समतल बनाउँछ (र तिनभित्रका ब्लक पनि), त्यसैले ती ब्लकका हरेक सन्दर्भ परिवर्तन हुन्छ; जोडिएका ड्रइङ जस्ताका तस्तै रहन्छन्। एउटा पूर्ववत् चरण; कति वस्तु परिवर्तन भए भन्छ, र उचाइ वा मोटाइ नभएका भए त्यो पनि भन्छ।

2D ड्रइङमा CadCraft ले तेस्रो आयामका कुन कुरा राख्छ: वृत्त, चाप, दीर्घवृत्त, बिन्दु, पाठ, ब्लक सन्दर्भ, ह्याच, लिडर र पोलिलाइनमा उचाइ (तिनको एलिभेसन), रेखाको हरेक छेउमा उचाइ, र रेखा, वृत्त, चाप, पोलिलाइन, बिन्दु र पाठमा मोटाइ, फाइलमा जस्तो थियो त्यस्तै। {{cmd:FLATTEN}} ले ठ्याक्कै ती मात्र मेटाउँछ। यसले 3D मोडेल ट्याबमा, 3D फेस वा सोलिडमा छुँदैन, र झुकेको समतलमा कोरिएको वस्तु फाइल खुल्दा नै ड्रइङ समतलमा ल्याइएको थियो।

### BREAKLINE

काटिएको दृश्यका लागि तोड चिन्हसहितको रेखा कोर्छ। यसले हालको आकार र विस्तार भन्छ, त्यसपछि `First point of the break line` (वा पहिले बदल्न `Size` / `Extension`), `Second point`, र `Where the break symbol sits`: रेखामा क्लिक गर्नुहोस्, वा बीचको लागि {{key:Enter}}। नतिजा हालको लेयरमा एउटा पोलिलाइन हो: हरेक बिन्दुभन्दा विस्तारले अलिक बाहिर गएको रेखा, आकार जति अग्लो र त्यसको आधा लामो Z-आकारको स्ट्रोकसहित।

`Size` र `Extension` तपाईंका सेटिङका रूपमा सम्झिइन्छन् (आकार डाइमेन्सन पाठ उचाइको दोब्बर र डाइमेन्सन स्केलले गुणन गरिएको; विस्तार आकारको आधा)। {{key:Enter}} ले कमाण्ड दोहोर्‍याउँछ।

### AUDIT

खुला ड्रइङमा क्षति जाँच गरेर मर्मत गर्छ। {{cmd:AUDIT}} ले मोडेलका, सिटका, र ब्लक भित्रका हरेक वस्तु, र लेयर तालिका जाँच्छ, र फेला परेका कुरा प्रकारअनुसार सूचीबद्ध गर्छ:

- परिमित नभएका वा असाधारण ठूला सङ्ख्या;
- आकार नभएका वस्तु: शून्य लम्बाइको रेखा, शून्य त्रिज्याको वृत्त, एउटै बिन्दु भएको पोलिलाइन, अक्षर वा उचाइ नभएको पाठ, शून्य स्केलको ब्लक सन्दर्भ;
- ड्रइङमा नभएको लेयरका वस्तु; नभएको ब्लकका सन्दर्भ; ड्रइङमा नभएका पाठ र डाइमेन्सन शैली नाम र रेखा प्रकार नाम;
- आफैँ, प्रत्यक्ष वा अरू ब्लकमार्फत, समेटिने ब्लक;
- एउटै id, कुञ्जी वा फाइल ह्यान्डल भएका वस्तु;
- जसबाट नापिन्छन् त्यस बिन्दु नभएका डाइमेन्सन, र बन्द रूपरेखा नभएको सिमाना भएका ह्याच।

त्यसपछि `Fix them? [Yes/No]` सोध्छ। `No` ले केही परिवर्तन गर्दैन। `Yes` ले सबै कुरा एउटा पूर्ववत् चरणमा मर्मत गर्छ: जुन बनाउन सकिँदैन त्यो हटाइन्छ (खराब सङ्ख्या, आकार नभएको, नभएको ब्लक, बिग्रिएको डाइमेन्सन, प्रयोग योग्य सिमाना नभएको ह्याच, ब्लकको वृत्त बन्द गर्ने सन्दर्भ); नभएको लेयर बनाइन्छ; नचिनिने शैली र रेखा प्रकार नामहरू पूर्वनिर्धारणमा फर्किन्छन्; साझा कुञ्जी बदलिन्छ। कति वस्तु हटाइए र कति मर्मत गरिए भन्छ। उही फेला परेका कुरा Problems प्यानलमा देखिन्छन्, प्रत्येकसँग आफ्नै {{ui:Repair}}।

यसले कुनै कुरा अस्वीकार गर्दैन, तर केवल CadCraft ले आफैँ कोर्ने कुरा जाँच्छ: अन्य कार्यक्रमका लागि राखिएको डाटा (3D सोलिड, OLE वस्तु) खोलिँदैन।

### RECOVER

क्षतिग्रस्त DXF वा DWG खोल्छ। {{cmd:RECOVER}} ले फाइल सोध्छ, फाइल अस्वीकार गर्नुको सट्टा पढ्न सकिने कुरा पढ्छ, छोडिएका वा अनुमान गरिएका कुरा सूचीबद्ध गर्छ, त्यसपछि {{cmd:AUDIT}} ले `Yes` सँग गरे जस्तै ड्रइङ जाँच्छ र मर्मत गर्छ।

- DXF: कोड र मानको जोडीको भाग नभएका लाइन पछि जोडीहरू फेरि मिलेसम्म छोडिन्छन्; अन्त्य नभएको खण्ड बन्द गरिन्छ; काटिएको फाइल काटिएको ठाउँसम्म पढिन्छ; काटिएको बाइनरी DXF उसको अन्तिम पूरा मानसम्म पढिन्छ। खण्ड, ब्लक वा वस्तु अझै नपढिएमा, त्यो छोडिन्छ र नाम दिइन्छ, र पढाइ त्यसपछि जारी रहन्छ।
- DWG: जाँच असफल हुने वा डिकोड नहुने वस्तु छोडिन्छन्, र हराएको वस्तु सूची वस्तु डाटा पार गरेर फेरि बनाइन्छ।

डिस्कको फाइल परिवर्तन हुँदैन। रिकभर गरिएको ड्रइङ बचत नभई खुल्छ: नयाँ नाममा बचत गर्नुहोस्। जुन फाइलबाट केही पनि पढ्न सकिँदैन, त्यो कारणसहित अस्वीकार हुन्छ।

### LEGACYTEXT

पुराना 8-बिट भियतनामी फन्टमा टाइप गरिएको पाठलाई Unicode मा बदल्छ। छोटा नाम `TEXTTOUNICODE` र `VNTEXT`।

पुराना भियतनामी ड्रइङमा पाठ पश्चिमी अक्षरका रूपमा भण्डारण हुन्छ, जुन फन्टले मात्र भियतनामीमा बदल्छ: ABC फन्टमा TCVN3 पाठ (`.VnTime`, `.VnArial`, र नाम `H` मा अन्त्य हुने ठूला-अक्षर फन्ट), र VNI फन्टमा VNI पाठ (`VNI-Times`)। यस्तो पाठ CadCraft ले ड्रइङ खुलेपछि तुरुन्तै पढेझैँ देखाउँछ, पाठ शैलीको, वस्तुको, वा अनुच्छेद पाठभित्रको फन्टका आधारमा; फाइलमा पुराना अक्षर नै रहन्छन्।

{{cmd:LEGACYTEXT}} ले प्रत्येक इन्कोडिङमा कति पाठ भेटियो भन्छ र `Convert … to Unicode?` सोध्छ। `Yes` ले हरेक पाठ पुनः लेख्छ (मोडेल, सिट, ब्लक, विशेषता मान र परिभाषा), र पाठ शैलीलाई Unicode फन्ट दिन्छ (Times New Roman, Arial वा Courier New, पुरानो फन्टको प्रकारअनुसार), एउटा पूर्ववत् चरणमा। अनुच्छेद पाठभित्रको ढाँचा राखिन्छ।

कुनै पाठले ज्ञात फन्ट प्रयोग नगर्दा (फन्ट नाम हराएको शैली), त्यसले `Read selected texts as [Tcvn3/Vni/None]` सोध्छ: इन्कोडिङ छान्नुहोस् र पाठ छान्नुहोस्। पहिल्यै Unicode भएको पाठ छोडिन्छ। डाइमेन्सन पाठ ओभरराइड र मल्टिलिडर पाठ रूपान्तरण हुँदैन।
