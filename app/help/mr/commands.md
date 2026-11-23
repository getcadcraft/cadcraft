---
title: कमांड संदर्भ
summary: CadCraft ड्राफ्टिंग अॅपमधील प्रत्येक कमांड, तिच्या उपनावांसह, ती विचारत असलेल्या प्रश्नांसह, तिच्या पर्यायांसह आणि डीफॉल्टसह.
keywords: कमांड, उपनावे, कमांड यादी, क्षेत्र, परिमिती, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

कमांडचे नाव किंवा उपनाव टाइप करा आणि {{key:Enter}} किंवा {{key:Space}} दाबा. मोठी-लहान अक्षरे महत्त्वाची नाहीत, आणि सुरुवातीचा `_`, `-`, `.` किंवा `'` दुर्लक्षित केला जातो. कमांड लाइन इतिहासात प्रत्येक कमांडची छोटी यादी छापण्यासाठी `HELP` (किंवा `?`) टाइप करा; या मदत पानासाठी {{key:F1}} दाबा.

प्रॉम्प्ट कसे वाचायचे: पर्याय चौकोनी कंसात असतात, आणि तुम्ही त्यातील एक त्याची मोठी अक्षरे टाइप करून निवडता (`D` म्हणजे व्यास). डीफॉल्ट टोकदार कंसात असतो; तो स्वीकारण्यासाठी {{key:Enter}} दाबा. बिंदू मागितला असेल तिथे तुम्ही क्लिक करू शकता किंवा [अंतर आणि समन्वय प्रवेश](topic:coordinate-entry) मधील कोणताही फॉरमॅट टाइप करू शकता. अंतर मागितले असेल तिथे संख्या टाइप करू शकता किंवा दोन बिंदू क्लिक करू शकता.

बिंदू किंवा वस्तू आवश्यक असताना आणि डीफॉल्ट नसताना {{key:Enter}} दाबल्यास कमांड संपते. {{key:Esc}} ती रद्द करते. कमांडने जे केले ते एक undo पायरी आहे.

## रेखाटन

### LINE

उपनाव: `L`. सरळ खंड, प्रत्येक स्वतःची वस्तू.

- `Specify first point` ({{key:Enter}}: शेवटच्या दिलेल्या बिंदूपासून सुरू करा)
- `Specify next point [Undo]`, पुनरावृत्ती. दोन खंडांनंतर: `[Undo/Close]`.
- `U` शेवटचा खंड परत घेतो, `C` पहिल्या बिंदूपर्यंत बंद करून संपवतो. {{key:Enter}} संपवतो.

### PLINE

उपनाव: `PL`. रेषा आणि कंस खंडांची एक पॉलीलाइन.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (दोन खंड असल्यावर Close)
- `A` कंसांवर जाते: `Specify endpoint of arc [Line/CLose/Undo]`. प्रत्येक कंस आधीच्या खंडाला स्पर्शिका राहून पुढे जातो. `L` रेषांवर परत जाते, `CL` कंसाने बंद करते.
- {{key:Enter}} संपवतो; पॉलीलाइन उघडी राहते.

### CIRCLE

उपनाव: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` `Specify diameter of circle` विचारते.
- `2P`: व्यासाची दोन टोके. `3P`: वर्तुळावरील तीन बिंदू.
- `T` (तसेच कमांड `TTR`, आणि {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, मग दुसरी, मग त्रिज्या ({{key:Enter}}: शेवटची). वर्तुळ दोन्ही वस्तूंना स्पर्श करते (रेषा, कंस, वर्तुळे, पॉलीलाइन खंड, ब्लॉकच्या आतही); जी स्पर्श करतात त्यांपैकी, तुमच्या क्लिकला सर्वात जवळ स्पर्श करणारे. कोणतेही बसत नसेल तर "Circle does not exist".
- `TTT` (किंवा {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): तीन वस्तू; तिन्हींना स्पर्श करणारे वर्तुळ, तुमच्या क्लिकला सर्वात जवळचे (तीन रेषा तुम्ही कुठे क्लिक करता त्यानुसार आतील किंवा बाहेरील वर्तुळ देतात).

### ARC

उपनाव: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: तीन बिंदूंमधून जाणारा कंस.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. कंस सुरुवातीपासून शेवटपर्यंत घड्याळाच्या उलट दिशेने जातो.

### RECTANG

उपनाव: `REC`, `RECTANGLE`. दोन कोपऱ्यांपासून बंद पॉलीलाइन.

- `Specify first corner point`, `Specify other corner point`. दुसऱ्या कोपऱ्यासाठी `@width,height` टाइप करा.

### POLYGON

उपनाव: `POL`. नियमित बहुभुज, बंद पॉलीलाइन म्हणून.

- `Enter number of sides <4>` (3 ते 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: बिंदू क्लिक करा किंवा टाइप करा; त्याचे अंतर आकार ठरवते आणि त्याची दिशा बहुभुज फिरवते.

### ELLIPSE

उपनाव: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, मग दुसऱ्या अक्षापर्यंतचे अंतर.
- `I` (`Isocircle`, फक्त {{cmd:ISODRAFT}} चालू असताना): केंद्र, मग त्रिज्या किंवा `Diameter`: सध्याच्या आयसोमेट्रिक प्लेनवर वर्तुळ जसे दिसते तसे एलिप्स.

### HATCH

उपनाव: `H`, `BH`, `BHATCH`; किंवा टूलबारवरील {{ui:Hatch}}. प्रथम सध्याचा पॅटर्न, स्केल आणि कोन छापते.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, पुनरावृत्ती (`Undo` एकदा क्षेत्र आल्यावर): प्रत्येक क्लिक त्याभोवतीचे बंद क्षेत्र जोडतो, आतील बंद आकार island म्हणून. {{key:Enter}} त्या सर्वांचा एक हॅच बनवतो.
- `S`: `Select closed objects` (बंद पॉलीलाइन, वर्तुळे, बंद एलिप्स).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): भरणे पॅटर्नऐवजी ग्रेडियंट आहे. त्याच्या प्रश्नांसाठी {{cmd:GRADIENT}} पहा.

[हॅच आणि भरलेली क्षेत्रे](topic:hatch) पहा.

### GRADIENT

उपनाव: `GD`. क्षेत्र एक किंवा दोन रंगांच्या ग्रेडियंटने भरते. ते आधी ग्रेडियंट विचारते, मग {{cmd:HATCH}} प्रमाणे पुढे जाते (`Pick internal point`, बंद वस्तूंसाठी `S`, पूर्ण करण्यासाठी {{key:Enter}}).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, पुनरावृत्ती; प्रत्येक वेळी ग्रेडियंट आता कसा आहे ते छापते.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, किंवा त्यांपैकी एक उलटा (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). सुरुवातीची अक्षरे पुरेशी आहेत.
- `O`: एक रंग, मग त्याची 0 ते 1 मधील छटा (0 त्याला काळे करते, 0.5 रंगच आहे, 1 त्याला पांढरे करते). `TW`: पहिला आणि दुसरा रंग. रंग 1 ते 255 मधील संख्या, `255,128,0` सारख्या तीन संख्या, किंवा `#rrggbb` असतो.
- `A`: ग्रेडियंट ज्या कोनात चालतो. `C`: केंद्रित Yes किंवा No (No ग्रेडियंटचे मध्य एका बाजूला हलवते).
- ओळखता न येणारा रंग किंवा प्रकार, आणि 0 ते 1 बाहेरील छटा नाकारते.

{{cmd:HATCHEDIT}} `G` आणि Properties (Gradient) नंतर ग्रेडियंट बदलतात, किंवा कोणताही हॅच त्याचा बनवतात. ग्रेडियंट स्क्रीनवर काढला जातो आणि छापला जातो. DWG 2004 आणि नंतरच्या आवृत्त्या तो खरा ग्रेडियंट हॅच म्हणून ठेवतात; DXF 2000 आणि DWG 2000 तो CadCraft साठी ठेवतात, आणि इतर प्रोग्राम पहिल्या रंगाचे घन भरणे पाहतात.

### HATCHGENERATEBOUNDARY

उपनाव: `HGB`. हॅचमधून, ज्याने ती गमावली तिची सीमा पुन्हा बनवते. `Select hatches` (किंवा आधी निवडा), मग `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- हॅचचा प्रत्येक लूप त्याच्या लेयरवर बंद पॉलीलाइन बनतो; नव्या पॉलीलाइन निवडलेल्या राहतात. वक्र कडा हॅच ठेवणाऱ्या लहान सरळ तुकड्यांच्या रूपात परत येते.
- Yes असल्यास हॅच त्याच्या नव्या सीमेला अनुसरतो, {{cmd:HATCH}} ने बनवलेल्या हॅचप्रमाणे. एक undo पायरी.
- कोणताही हॅच निवडलेला नसल्यास ते सांगते.

### POINT

उपनाव: `PO`; किंवा {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. बिंदू वस्तू, प्रत्येक क्लिकला एक, {{key:Enter}} पर्यंत.

- `Specify a point`

### XLINE

उपनाव: `XL`; किंवा {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. बांधकाम रेषा, दोन्ही बाजूंना अंतहीन. [बांधकाम रेषा आणि किरण](topic:construction-lines) पहा.

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, मग प्रत्येक रेषेसाठी `Specify through point`, {{key:Enter}} पर्यंत.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` आधी `Select a line object` विचारते.
- `B`: `Specify angle vertex point`, `Specify angle start point`, मग प्रत्येक रेषेसाठी `Specify angle end point`.
- `O`: `Specify offset distance [Through] <Through>`, मग प्रत्येक रेषेसाठी `Select a line object` आणि `Specify side to offset` (किंवा `Specify through point`).

### RAY

उपनाव नाही; किंवा {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`, मग प्रत्येक किरणासाठी `Specify through point`, {{key:Enter}} पर्यंत.

### TEXT

उपनाव: `DT`, `DTEXT`; किंवा टूलबारवरील {{ui:Text}}. एक-ओळी मजकूर; प्रत्येक ओळ स्वतःची वस्तू.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, मग `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, पुनरावृत्ती: प्रत्येक Enter खाली पुढची ओळ सुरू करतो. रिकाम्या ओळीवरील Enter संपवतो. {{key:Space}} इथे जागा टाइप करते.

### DIVIDE

उपनाव: `DIV`. {{cmd:DIVIDE}} रेषा, कंस, वर्तुळ, पॉलीलाइन, स्प्लाइन किंवा एलिप्सवर खुणा ठेवते, ज्या ते समान भागांत कापतात. वस्तू निवडा, मग भागांची संख्या द्या (2 ते 32767). उघड्या वस्तूला भागांपेक्षा एक खूण कमी मिळते; बंद वस्तूला तिच्या सुरुवातीलाही खूण मिळते. वस्तू स्वतः कापली जात नाही. खुणा बिंदू असतात; `Block` त्याऐवजी या ड्रॉइंगमधील एक ब्लॉक मागते, आणि तो वस्तूसोबत फिरावा का ते विचारते. स्प्लाइन आणि एलिप्सवरील लांबी लहान जीवांवर मोजल्या जातात. मजकूर, हॅच आणि लांबी नसलेल्या इतर वस्तू नाकारते.

### MEASURE

उपनाव: `ME`. {{cmd:MEASURE}} रेषा, कंस, वर्तुळ, पॉलीलाइन, स्प्लाइन किंवा एलिप्सच्या बाजूने दिलेल्या लांबीवर खूण ठेवते, तुम्ही उचललेल्या जवळच्या टोकापासून मोजत (बंद वस्तू: तिच्या सुरुवातीपासून). लांबी टाइप करून किंवा दोन बिंदूंनी द्या. उघड्या वस्तूच्या दूरच्या टोकाला खूण मिळत नाही. `Block` प्रत्येक खुणेवर बिंदूऐवजी एक ब्लॉक ठेवते. 0 लांबी, वस्तूपेक्षा मोठी लांबी, आणि 32767 पेक्षा जास्त खुणा होतील अशी लांबी नाकारते.

### BOUNDARY

उपनाव: `BO`, `BPOLY`. {{cmd:BOUNDARY}} तुम्ही उचललेला बिंदू असलेल्या क्षेत्राभोवती बंद पॉलीलाइन बनवते, स्क्रीनवर जे रेषा, कंस, वर्तुळे, पॉलीलाइन आणि वक्र त्याला सीमा देतात त्यावरून. कंस किंवा वर्तुळावर पडलेले तुकडे कंस खंड म्हणून परत येतात; एलिप्स आणि स्प्लाइनचे तुकडे लहान सरळ खंड म्हणून येतात. `Islands` चालू असल्यास (सुरुवातीची सेटिंग), त्यातील प्रत्येक बंद क्षेत्रालाही स्वतःची पॉलीलाइन मिळते. बिंदू उचलत राहा; {{key:Enter}} संपवतो. क्षेत्राला सीमा देणाऱ्या वस्तू जशा होत्या तशाच राहतात. बिंदू धरणारे बंद क्षेत्र नसल्यास ते सांगते.

### BLEND

{{cmd:BLEND}} दोन उघड्या वक्रांच्या टोकांदरम्यान स्प्लाइन काढते. जोडण्यासाठी प्रत्येक वक्र टोकाजवळ निवडा. `CONtinuity` `Tangent` (स्प्लाइन दोन्ही वक्रांच्या बाजूने निघते आणि पोहोचते) किंवा `Smooth` (त्यांच्या टोकांवर ते वाकतात त्याच दिशेने वाकते) निवडते; निवड सत्रासाठी ठेवली जाते. दोन वक्र बदलले जात नाहीत. बंद वस्तू आणि आधीच भेटणारी दोन टोके नाकारते.

### REGION

उपनाव: `REG`. {{cmd:REGION}} बंद वस्तूंना प्रदेशांत बदलते: सपाट क्षेत्रे जी तुम्ही जोडू, कापू आणि मोजू शकता. वर्तुळे, बंद पॉलीलाइन, बंद एलिप्स किंवा बंद स्प्लाइन, किंवा टोकाला टोक जोडून लूप बंद करणाऱ्या रेषा, कंस आणि उघड्या पॉलीलाइन निवडा; प्रत्येक लूप एक प्रदेश बनतो आणि ज्या वस्तूंपासून आला त्या बदलतो. कंस कंसच राहतात; एलिप्स आणि स्प्लाइन लहान सरळ खंड बनतात. जे बंद नाही आणि कोणताही लूप बंद करत नाही ते जसे आहे तसे राहते, आणि किती ते सांगते. ड्रॉइंगमध्ये प्रदेश एक किंवा अधिक बंद पॉलीलाइन असतात, नावविरहित गटात धरलेल्या, म्हणून एक क्लिक संपूर्ण प्रदेश निवडते, आणि प्रत. इतर प्रोग्राम ती फाइल उघडताना बंद पॉलीलाइन पाहतात.

ड्रॉइंगमध्ये प्रदेश असल्यास, 2D टॅबवरील {{cmd:UNION}}, {{cmd:SUBTRACT}} आणि {{cmd:INTERSECT}} प्रदेशांवर काम करतात: `UNION` निवडलेले प्रदेश एकात जोडते (वेगळे असलेले एक प्रदेश होतात, अनेक बाह्यरेषांसह), `SUBTRACT` ज्यातून वजा करायचे ते प्रदेश आणि मग काढायचे ते विचारते (छिद्र प्रदेशाचा भाग राहते), `INTERSECT` ते सर्व सामायिक असलेले क्षेत्र ठेवते. प्रत्येक निकालाचे क्षेत्र सांगतो आणि एक undo पायरी आहे. काहीही उरले नसेल किंवा काही सामायिक नसेल तर नाकारतात. 3D टॅबवर, आणि प्रदेश नसलेल्या ड्रॉइंगमध्ये, तीच कमांड पूर्वीप्रमाणे घनांवर चालतात.

## बदला

उपनाव: `MT`, `T`; किंवा टूलबारवरील {{ui:Paragraph}}. परिच्छेद मजकूर जो रुंदीत गुंडाळतो, जागेवर टाइप केलेला.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: दोन कोपऱ्यांमधील रुंदी म्हणजे मजकूर गुंडाळण्याची जागा. `H` `Specify height` विचारते, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` आणि दुसरा कोपरा वगळते.
- मग ड्रॉइंगवर एक बॉक्स उघडतो: टाइप करा, नव्या परिच्छेदासाठी {{key:Enter}}, पूर्ण करण्यासाठी {{key:Mod+Enter}} किंवा बाहेर क्लिक, रद्द करण्यासाठी {{key:Esc}}. त्याची पट्टी उंची, रेषांमधील अंतर, रुंदी आणि संरेखन सेट करते. [मजकूर आणि लेबले जोडा](topic:text#write-a-note-that-wraps) पहा.

### TEXTEDIT

उपनाव: `ED`, `DDEDIT`; किंवा मजकुरावर डबल-क्लिक. `Select a text to edit`, {{key:Enter}} पर्यंत पुनरावृत्ती: प्रत्येक त्याच बॉक्समध्ये उघडतो. निवडलेल्या किंवा डबल-क्लिक केलेल्या मजकुरावर सुरू केल्यास तो एकच संपादित करते आणि संपते.

### ERASE

उपनाव: `E`, `DELETE`; किंवा वस्तू निवडलेल्या असताना {{key:Delete}} दाबा.

- `Select objects` (वस्तू आधीच निवडलेल्या असताना वगळले जाते)

### MOVE

उपनाव: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, `dx,dy` असे टाइप केलेले.

### COPY

उपनाव: `CO`, `CP`. तुम्ही जितके बिंदू द्याल तितक्या प्रती.

`Array` दुसऱ्या बिंदूच्या प्रॉम्प्टवर एका वेळी एक ओळ बनवते: आयटमांची संख्या द्या (मूळ एक धरून), मग पहिली प्रत जिथे जाईल तो बिंदू; बाकीच्या त्याच अंतराने येतात. `Fit` तो बिंदू शेवटच्या प्रतीची जागा बनवते, आणि बाकीच्या मधे समान पसरतात.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, {{key:Enter}} पर्यंत पुनरावृत्ती. `U` शेवटची प्रत परत घेते.

### ROTATE

उपनाव: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: अंश, घड्याळाच्या उलट दिशा धनात्मक; किंवा त्याकडे फिरवण्यासाठी एक बिंदू क्लिक करा.

### SCALE

उपनाव: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: `0.5` किंवा `2` सारखा घटक टाइप करा. क्लिक केलेला बिंदू त्याचे बेस पॉइंटपासूनचे अंतर घटक म्हणून देतो.

### MIRROR

उपनाव: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

उपनाव: `AL`; किंवा {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- दोन जोड्यांसह: `Scale objects based on alignment points? [Yes/No] <N>`

[वस्तू संरेखित करा](topic:modify-objects#align-objects) पहा.

### ALIGNTO

- `Select objects` (किंवा निवड), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` बिंदू विचारते. निवड राहते.

### DISTRIBUTE

- `Select objects` (किमान तीन), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. बाहेरील दोन राहतात; निवड राहते.

### ALIGNPANEL

उपनाव: `ALP`; किंवा {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. क्लिकने ALIGNTO आणि DISTRIBUTE चालवणारा पॅनेल उघडतो.

### LASER

उपनाव: `LASERCUT`; किंवा {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. ड्रॉइंगवर Laser पॅनेल उघडतो: प्रत्येक लेयर काय करतो (कापणे, खरवडणे, कोरणे, भरणे, चित्र), पूर्वावलोकन, जतन करण्यासाठी GRBL G-code, आणि Web Serial वरून फ्रेमिंग आणि पाठवणे. [ड्रॉइंग लेझरला पाठवा](topic:laser-cutting) पहा.

### STRETCH

उपनाव: `S`; किंवा {{ui:Stretch}}. `Select objects to stretch`: टोकांवर क्रॉसिंग विंडो ड्रॅग करा (किंवा `C` टाइप करा) हलवण्यासाठी. `Specify base point [Displacement]`, `Specify second point`. विंडोच्या आतील बिंदू हलतात: रेषांची टोके, पॉलीलाइन शिरोबिंदू (कंस खंड त्यांची उंची ठेवतात), डायमेन्शन बिंदू; वर्तुळे, एलिप्स, मजकूर, बिंदू आणि ब्लॉक त्यांचे केंद्र किंवा घाला बिंदू आत असल्यास पूर्ण हलतात. कमांडपूर्वी केलेली निवड ती निर्माण करणाऱ्या क्रॉसिंग विंडो (आणि लॅसो) राखते, म्हणून त्या तसेच ताणतात. विंडोशिवाय वस्तू पूर्ण हलतात.

### ARRAY, ARRAYRECT, ARRAYPOLAR

उपनाव: `AR`; किंवा {{ui:Array}}. `Select objects`, मग `Enter array type [Rectangular/POlar] <Rectangular>` (फक्त ARRAY).

- Rectangular 4 स्तंभ × 3 ओळींनी सुरू होते, वस्तूंच्या आकाराच्या 1.5 पटीने अंतरावर, पूर्वावलोकनात. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` स्तंभ आणि ओळी विचारते, `S` स्तंभांमधील आणि ओळींमधील अंतर (ऋण डावीकडे किंवा खाली जाते), `COL` आणि `R` प्रत्येकी एक दिशा.
- Polar `Specify center point of array` विचारते, सुरुवातीला 6 आयटम पूर्ण फेरीभर, फिरवलेले. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` आयटम, `F` भरण्याचा कोन (+ घड्याळाच्या उलट, − घड्याळाच्या दिशेने), `ROT` Yes किंवा No.
- {{key:Enter}} (eXit) साध्या वस्तू म्हणून प्रती बनवते. एक undo पायरी.
- `AS` (ASsociative) साध्या प्रती आणि नंतर संपादित करता येणारा अॅरे यांत बदलतो: एक वस्तू जी तुम्ही नंतर {{cmd:ARRAYEDIT}} ने, तिच्या ग्रिप्सने किंवा Properties मध्ये बदलता. निवड लक्षात राहते ({{cmd:ARRAYASSOCIATIVITY}}); ती साध्या प्रतींवर सुरू होते.

### ARRAYPATH

वक्रावरील प्रती. `Select objects`, मग `Select path curve`: रेषा, कंस, वर्तुळ, एलिप्स, पॉलीलाइन किंवा स्प्लाइन (अॅरे होणाऱ्या वस्तूंपैकी नाही). मार्ग वस्तूंच्या जवळच्या टोकापासून सुरू होतो, आणि पहिला आयटम वस्तू जिथे आहेत तिथेच असतो.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, पूर्वावलोकनासह. `M`: `Divide` आयटम संपूर्ण मार्गावर समान पसरवते, `Measure` दर ठराविक अंतरावर एक ठेवते. `I`: आयटमांची संख्या (Measure सह, 0 म्हणजे बसतील तितके; मार्गाच्या शेवटाच्या पलीकडील संख्या बसतील तेवढ्यावर थांबवली जाते). `SP`: मार्गावरील आयटमांमधील अंतर (Measure वर स्विच करते). `AL`: Yes प्रत्येक आयटम मार्गाला अनुसरून वळवते, No त्यांना सरळ ठेवते.
- `AS` {{cmd:ARRAY}} प्रमाणे. तो चालू असताना अॅरे मार्गाच्या आकाराची स्वतःची प्रत ठेवतो: नंतर मार्ग वक्र संपादित केल्याने आयटम हलत नाहीत.
- मार्ग वक्र नसेल आणि एक आयटम असेल तर नाकारते.

### ARRAYEDIT

AS सह बनवलेला अॅरे बदलते. `Select array` (किंवा आधी निवडा). तो आता अॅरे काय आहे ते छापतो, मग {{key:Enter}} पर्यंत विचारतो:

- Rectangular: `COL` स्तंभ आणि त्यांचे अंतर, `R` ओळी आणि त्यांचे अंतर, `A` स्तंभ ज्या कोनात चालतात तो.
- Polar: `I` आयटम, `F` भरण्याचा कोन, `ROT` आयटम फिरवायचे Yes किंवा No.
- Path: `M` Divide किंवा Measure, `I` आयटम, `SP` अंतर, `AL` मार्गाशी संरेखित.
- `S` (Source) अॅरे पुन्हा करणाऱ्या वस्तू, स्वतंत्रपणे, ब्लॉक एडिटरप्रमाणे उघडते. तिथे काढा आणि संपादित करा; {{cmd:ARRAYCLOSE}} जतन किंवा टाकते, आणि प्रत्येक आयटम अनुसरतो.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, मग बदलायचे आयटम क्लिक करा, {{key:Enter}}. ते आयटम त्याऐवजी बदली दाखवतात; बदली वस्तू ड्रॉइंग सोडतात आणि अॅरेमध्ये राहतात. `RES` (RESet) प्रत्येक आयटमवर पुन्हा स्रोत वस्तू दाखवते.
- प्रत्येक बदल एक undo पायरी आहे. साध्या प्रती, साधा ब्लॉक संदर्भ आणि लॉक केलेल्या लेयरवरील अॅरे नाकारते.

तीच संख्या Properties मध्ये Array अंतर्गत आहेत, आणि अॅरेला ग्रिप्स आहेत: त्याचा बेस पॉइंट त्याला हलवतो, दुसऱ्या आयटमवरील ग्रिप अंतर सेट करते, शेवटच्या आयटमच्या पलीकडील ग्रिप संख्या सेट करते (polar: दुसरा आयटम किती आयटम ठरवतो, शेवटचा आयटम भरण्याचा कोन). {{cmd:EXPLODE}} अॅरेला साध्या प्रतींत परत आणते.

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} Source संपवते: `Save the changes to the array's source objects? [Save/Discard] <Save>`. कोणत्याही अॅरेचे स्रोत उघडे नसल्यास ते सांगते. {{cmd:BCLOSE}} तेच करते.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR आणि {{cmd:ARRAYPATH}} कशावर सुरू होतात ते सेट करते; त्यांचा `AS` पर्याय तीच सेटिंग बदलतो. या ब्राउझरमध्ये लक्षात ठेवले.

### OFFSET

उपनाव: `O`. रेषा, कंस, वर्तुळे आणि पॉलीलाइन.

जिथे पॉलीलाइन बाहेरच्या दिशेने हलते आणि तिचे सरळ खंड कोपऱ्यात वेगळे होतात, तिथे {{cmd:OFFSETGAPTYPE}} ठरवते की अंतर कसे बंद होते.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, मग `Specify point on side to offset` (किंवा Through सह, `Specify through point`), {{key:Enter}} पर्यंत पुनरावृत्ती.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: {{cmd:OFFSET}} पॉलीलाइनच्या बाहेरील कोपऱ्यांतील अंतर कसे बंद करते. `0` खंड भेटेपर्यंत वाढवते (सुरुवातीची सेटिंग), `1` जुन्या कोपऱ्याभोवतीच्या कंसाने जोडते, `2` सरळ कापाने. आतील कोपरे आणि कंस खंड प्रभावित होत नाहीत. या सत्रासाठी ठेवले.

### EXTRIM

{{cmd:EXTRIM}} कडेच्या एका बाजूवरील सर्व काही ट्रिम करते. कटिंग एज निवडा (रेषा, कंस, वर्तुळ, पॉलीलाइन, एलिप्स, स्प्लाइन किंवा बांधकाम रेषा), मग मोकळी करायच्या बाजूवरील एक बिंदू: एजला ओलांडणारी प्रत्येक रेषा, कंस, वर्तुळ, पॉलीलाइन आणि बांधकाम रेषा त्या बाजूचा भाग गमावते, जिथे ती एजवर सुरू होते. तुम्ही बाजू निवडता तेव्हा जे तुकडे जातील ते पॉइंटरचे अनुसरण करतात. बंद एजसाठी बाजू आत आणि बाहेर असतात. एजला फक्त स्पर्श करणाऱ्या वस्तू, आणि ती ओलांडणारे मजकूर, हॅच, स्प्लाइन आणि एलिप्स जसे आहेत तसे राहतात. एक undo पायरी.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: {{cmd:TRIM}} आणि {{cmd:EXTEND}} कसे सुरू होतात. `1` Quick: प्रत्येक वस्तू कटिंग एज किंवा सीमा आहे. `0` Standard: ते आधी कडा विचारतात. LISP मध्ये `(setvar "TRIMEXTENDMODE" 0)` देखील.

### TRIM

उपनाव: `TR`. प्रथम `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` छापते. Quick मोडमध्ये प्रत्येक दिसणारी वस्तू कटिंग एज असते, आणि कोणीही ओलांडत नसलेली वस्तू मिटवली जाते; Standard मोडमध्ये ते आधी `Select cutting edges (Enter = every object)` विचारते आणि फक्त तिथेच कापते.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, पुनरावृत्ती: काढायचा तुकडा क्लिक करा (पॉइंटर त्यावर असताना तो राखाडी आणि डॅश दिसतो), अनेक तुकड्यांमधून मार्ग ड्रॅग करा (सर्व एकाच पायरीत जातात), किंवा त्यांच्यामधील फेन्ससाठी दोन रिकाम्या जागी क्लिक करा. {{key:Shift}} त्याऐवजी एक्सटेंड करते. `T` कटिंग एज निवडते (Standard मोड), `F` फेन्स बिंदू विचारते, `C` दोन विंडो कोपरे (अंशतः आत असलेले तुकडे जातात), `O` `Enter a trim mode option [Quick/Standard]` विचारते, `E` `Enter an implied edge extension mode [Extend/No extend]` विचारते (EDGEMODE), `R` तुम्ही निवडलेल्या वस्तू मिटवते, `U` शेवटची निवड किंवा ड्रॅग परत घेते. {{key:Enter}} संपवतो. [ट्रिम आणि एक्सटेंड](topic:trim-and-extend) पहा.

- हॅचवर क्लिक केल्यास हॅच कापला जातो: कटिंग एज हॅच केलेले क्षेत्र विभागतात, आणि तुम्ही क्लिक केलेला भाग काढला जातो (जिथे रेषा होती तिथे काढलेली बाह्यरेषा राहत नाही). हॅच त्याचा पॅटर्न किंवा ग्रेडियंट ठेवतो; ज्या हॅचची सीमेशी दुवा होता तो नंतर दुवा राहत नाही, कारण तो आता तिला भरत नाही. तिथे कोणताही कटिंग एज हॅच विभागत नसेल, क्लिक हॅचच्या बाहेर असेल, किंवा काहीही उरणार नसेल तर ते सांगते ({{cmd:ERASE}} वापरा). ड्रॅग केलेला मार्ग किंवा फेन्स हॅच कापत नाही.

### EXTEND

उपनाव: `EX`. TRIM ची उलट: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. क्लिकने त्याच्या जवळचे टोक पुढील सीमेपर्यंत लांब होते; ड्रॅग केलेला मार्ग किंवा फेन्स तो ओलांडणारी प्रत्येक वस्तू लांब करतो; {{key:Shift}} ट्रिम करते. `B` सीमा कडा निवडते (Standard मोड). Mode आणि Edge TRIM सोबत सामायिक आहेत.

### LINKVIEWS

उपनाव: `SYNCVIEWS`; किंवा {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, किंवा ड्रॉइंग टॅबवरील दुवा चिन्ह. `Link the panes' views [ON/OFF]` (Enter दुसरी स्थिती घेतो): चालू असताना सक्रिय पेनमधील पॅन किंवा झूम त्याच प्रकारची जागा दाखवणारा प्रत्येक पेन हलवते. [स्क्रीन विभाजित करा](topic:split-screen) पहा.

### OPENIN3D

उपनाव नाही; किंवा {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} जिथे 3D मॉडेलिंग अॅप हस्तांतरित केलेले ड्रॉइंग घेते. ते नव्या टॅबमध्ये DWG म्हणून तिथे उघडते (काहीही अपलोड होत नाही). ब्राउझर टॅब अडवला तर ते सांगते.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: रिकाम्या जागेवर दाबून ड्रॅग केल्यास काय काढले जाते. Settings › CadCraft › Dragging to select सारखेच. [लॅसो निवड](topic:lasso-selection) पहा.

### FILLET

उपनाव: `F`. रेषा, कंस, वर्तुळे आणि पॉलीलाइन. प्रथम `Current settings: Mode = TRIM, Radius = 0` छापते.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` `Specify fillet radius <last>` विचारते. `T` `Enter Trim mode option [Trim/No trim]` विचारते: No trim असताना वस्तू जशा होत्या तशाच राहतात आणि फक्त कंस जोडला जातो.
  - `M` अधिक कोपऱ्यांसाठी कमांड चालू ठेवते, {{key:Enter}} पर्यंत; `U` कमांड न सोडता शेवटचा कोपरा परत घेते.
  - `P` `Select 2D polyline [Radius]` विचारते आणि जिथे दोन सरळ खंड भेटतात तिथला प्रत्येक कोपरा गोल करते. ती आधीच असलेली फिलेट नव्या त्रिज्येने बदलली जातात; त्रिज्या 0 त्या काढते. त्रिज्येसाठी बाजू खूप लहान असलेले कोपरे सोडले जातात आणि मोजले जातात.
- `Select second object or shift-select to apply corner [Radius]`. तीक्ष्ण कोपऱ्यासाठी, त्रिज्या काहीही असो, क्लिक करताना {{key:Shift}} धरा.

प्रत्येक वस्तूवर तो भाग क्लिक करा जो तुम्हाला ठेवायचा आहे. न भेटणाऱ्या दोन रेषा लांब केल्या जातात. समांतर दोन रेषांमध्ये अंतर ओलांडून अर्धवर्तुळ येते, तुमच्या क्लिकच्या जवळच्या पहिल्या रेषेच्या टोकावर. वर्तुळ कधीही कापले जात नाही. एकाच पॉलीलाइनचे लगतचे दोन खंड पॉलीलाइनच्या आत कंस घेतात; पॉलीलाइन आणि दुसरी वस्तू तेव्हा चालतात जेव्हा कट पॉलीलाइनच्या पहिल्या किंवा शेवटच्या खंडावर पडतो.

### CHAMFER

उपनाव: `CHA`. रेषा आणि पॉलीलाइनचे सरळ खंड. प्रथम सध्याची अंतरे (किंवा लांबी आणि कोन) छापते.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` `Specify first chamfer distance <last>` आणि `Specify second chamfer distance <the first>` विचारते: पहिले तुम्ही निवडलेल्या पहिल्या रेषेतून, दुसरे दुसऱ्या रेषेतून कापले जाते.
  - `A` `Specify chamfer length on the first line` आणि `Specify chamfer angle from the first line` विचारते.
  - `E` (mEthod) पुढचा चेम्फर दोनपैकी कोणती पद्धत वापरेल ते निवडते. `T`, `M`, `U` आणि `P` {{cmd:FILLET}} प्रमाणेच काम करतात.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+क्लिक तीक्ष्ण कोपरा बनवतो.

रेषेपेक्षा लांब अंतर नाकारले जाते (`Distance is too large.`).

### BREAK आणि BREAKATPOINT

उपनाव: `BR`. `Select object` (जिथे तुम्ही क्लिक करता तो पहिला बिंदू आहे), `Specify second break point [First point]`; `F` `Specify first break point` आणि `Specify second break point` विचारते. मधला भाग जातो; वर्तुळावर, पहिल्या बिंदूपासून घड्याळाच्या उलट दिशेने. BREAKATPOINT `Specify break point` विचारते आणि तिथे वस्तू दोन भागांत विभाजित करते (वर्तुळ नाही).

### LENGTHEN

उपनाव: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: एक निवड `Current length` (आणि कंसाचा समाविष्ट कोन) छापते आणि पुन्हा विचारते. `DE` `Enter delta length (negative shortens) [Angle]` विचारते, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` ड्रॅग करते. मग `Select an object to change [Undo]`, पुनरावृत्ती: क्लिकच्या जवळचे टोक हलते. रेषा, कंस आणि उघड्या पॉलीलाइन.

### JOIN

उपनाव: `J`. `Select objects to join`. टोकाला टोक मिळणाऱ्या रेषा, कंस आणि उघड्या पॉलीलाइन पॉलीलाइन बनतात (साखळी बंद झाल्यास बंद); एका रेषेवरील रेषा एक रेषा होतात; एका वर्तुळाचे कंस एक कंस किंवा वर्तुळ होतात. इतिहास किती वस्तू जोडल्या आणि किती जोडल्या नाहीत ते सांगतो.

### MATCHPROP

उपनाव: `MA`, `PAINTER`. `Select source object`, मग `Select destination objects [Settings]` आणि {{key:Enter}}. लेयर आणि रंग कॉपी करते, आणि एकाच प्रकारच्या वस्तूंमध्ये मजकुराची उंची आणि रुंदी, डायमेन्शन आकार, किंवा हॅच पॅटर्न. `S` `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` विचारते, {{key:Enter}} पर्यंत पुनरावृत्ती; निवड सत्रासाठी ठेवली जाते.

### EXPLODE

उपनाव: `X`. पॉलीलाइन रेषा आणि कंस बनतात, ब्लॉक संदर्भ त्यांच्या वस्तू बनतात, डायमेन्शन रेषा, बाण आणि मजकूर बनतात. संपादित करता येणारा अॅरे ({{cmd:ARRAYEDIT}}) साध्या प्रती बनतो.

- `Select objects`

### GROUP

उपनाव: `G`. {{cmd:GROUP}} निवडलेल्या वस्तूंना त्यांनी सामायिक केलेले नाव देते. वस्तू निवडा, मग नाव टाइप करा (स्पेस नाही; `?` गट यादी करते; Enter नावविरहित गट बनवतो) आणि नावाच्या गटासाठी पर्यायी वर्णन. तेव्हापासून त्यांपैकी एकावर क्लिक केल्यास किंवा ज्या विंडोत एक येते तिने त्या सर्व निवडल्या जातात, म्हणून त्या एकत्र हलतात, कॉपी होतात आणि मिटतात; प्रत्येक वस्तू तरीही स्वतःची वस्तू राहते. वस्तू अनेक गटांत असू शकते. संपूर्ण गटाची प्रत नवा नावविरहित गट बनते; एका सदस्याची प्रत स्वतः गटात सामील होते. गट ते तयार झालेल्या जागेचे असतात (मॉडेल किंवा शीट). DWG किंवा DXF म्हणून जतन करताना ते राखले जातात, आणि CadCraft मध्ये फाइल पुन्हा उघडल्यावर परत येतात; DXF 2000 फाइल्स इतर प्रोग्रामसाठी त्यांना गट वस्तू म्हणूनही नेतात, आणि दुसऱ्या प्रोग्राममध्ये बनवलेले गट DXF किंवा DWG उघडताना वाचले जातात.

### UNGROUP

{{cmd:UNGROUP}} गट वेगळे करते: गटांच्या वस्तू निवडा (त्या असलेला प्रत्येक गट वेगळा होतो) किंवा `Name` आणि गटाचे नाव टाइप करा. वस्तू ड्रॉइंगमध्ये राहतात. एक undo पायरी गट परत आणते.

### GROUPEDIT

{{cmd:GROUPEDIT}} एक गट बदलते. त्यातील एक वस्तू निवडा, किंवा `Name` आणि त्याचे नाव; आधीच निवडलेला गट जसा आहे तसा घेतला जातो. मग: `Add` वस्तू (एकेक निवडून, गटानुसार नाही), `Remove` वस्तू, गटाचे `REName`, त्याचे `Description` बदला, किंवा `Selectable` सेट करा (एका वस्तूवरील क्लिक संपूर्ण गट निवडतो का). `eXit` किंवा {{key:Enter}} संपवतो. कोणतीही वस्तू नसलेला गट नाहीसा होतो.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1` (सुरुवातीची सेटिंग) असताना गटबद्ध वस्तूवरील क्लिक किंवा विंडो तिचा संपूर्ण गट निवडते; `0` असताना एकेक वस्तू, म्हणजे एक सदस्य संपादित करता येतो. सत्रासाठी ठेवले.

## क्लिपबोर्ड

CadCraft चा स्वतःचा क्लिपबोर्ड: तो एका ड्रॉइंगमध्ये, ड्रॉइंगदरम्यान आणि या ब्राउझरमधील CadCraft टॅबदरम्यान काम करतो. [कॉपी, पेस्ट आणि डुप्लिकेट](topic:copy-paste) पहा.

### COPYCLIP

{{key:Mod+C}}, किंवा {{ui:Edit}} गटातील {{ui:Copy}}. वस्तू त्यांचे ब्लॉक आणि लेयरसह क्लिपबोर्डवर कॉपी करते. वस्तू निवडलेल्या राहतात.

- `Select objects to copy` (वस्तू आधीच निवडलेल्या असताना वगळले जाते)

### CUTCLIP

{{key:Mod+X}}, किंवा {{ui:More}} मेनूतील {{ui:Cut}}. वस्तू क्लिपबोर्डवर कॉपी करते, मग त्या मिटवते (एक undo पायरी).

- `Select objects to cut` (वस्तू आधीच निवडलेल्या असताना वगळले जाते)

### COPYBASE

तुम्ही उचललेल्या बेस पॉइंटसह वस्तू क्लिपबोर्डवर कॉपी करते; पेस्ट केल्यावर तो बिंदू ठेवला जातो.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, किंवा {{ui:Edit}} गटातील {{ui:Paste}}. प्रत कर्सरचे अनुसरण करते, तिच्या विस्ताराच्या खालच्या डाव्या कोपऱ्यावरून लटकत (किंवा तिच्या केंद्रावरून, किंवा `COPYBASE` बिंदूवरून; [CadCraft सेटिंग्ज](topic:settings) पहा).

- `Specify insertion point`

पेस्ट केलेल्या वस्तू निवडलेल्या असतात. ड्रॉइंगमध्ये त्याच नावाचा ब्लॉक आधीच असल्यास या ड्रॉइंगची व्याख्या ठेवली जाते.

MarkupCraft मध्ये कॉपी केलेले क्षेत्र CadCraft ने कॉपी केलेल्यापेक्षा नवे असेल (आणि 6 तासांपेक्षा जुने नसेल) तर {{key:Mod+V}} आणि `PASTECLIP` ते क्षेत्र पेस्ट करतात: पहा `PASTEAREA`.

### PASTEAREA

उपनाव: `PAREA`. {{ui:More}} मेनूतील {{ui:Paste a copied area}}. MarkupCraft मध्ये {{ui:Copy area}} ने कॉपी केलेले क्षेत्र त्याच्या खऱ्या आकारात चित्र म्हणून पेस्ट करते. [ड्रॉइंगमधील चित्रे](topic:pictures) पहा.

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (फक्त शीटला ड्रॉइंग स्केल नसल्यास): एक संख्या, कागद आकारासाठी {{key:Enter}}, किंवा `P`, मग `First point on the pasted area`, `Second point on the pasted area` आणि त्यांचे खरे अंतर.

### PASTEORIG

{{key:Mod+Shift+V}}, किंवा {{ui:More}} मेनूतील {{ui:Paste in place}}. वस्तू ज्या निर्देशांकांवरून कॉपी झाल्या होत्या तिथे पेस्ट करते. काहीही विचारत नाही.

### DUPLICATE

उपनाव: `DUP`. {{key:Mod+D}}, किंवा {{ui:More}} मेनूतील {{ui:Duplicate and move}}. वस्तूंची प्रत जिथे आहे तिथून पॉइंटरसोबत हलते; {{key:Esc}} काहीही ठेवत नाही. क्लिपबोर्ड वापरत नाही.

- `Select objects to duplicate` (वस्तू आधीच निवडलेल्या असताना वगळले जाते)
- `Specify where the copy goes (Esc leaves nothing)`: क्लिक करा, बिंदू टाइप करा, `@dx,dy` (पॉइंटर जिथे होता तिथून), किंवा कर्सरकडे जाणारे अंतर.

### SELECT

`Select objects` विचारते (खालील प्रत्येक पर्यायासह) आणि तुम्ही निवडलेले पुढच्या कमांडसाठी किंवा नंतर `P` साठी निवडलेले ठेवते.

### QSELECT

उपनाव: `QS`. ब्राउझरमध्ये, {{ui:Quick select}} संवाद ([वस्तू निवडा](topic:select-objects#select-by-a-rule-quick-select) पहा). त्याशिवाय कमांड लाइन `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` आणि `Enter value` विचारते. जुळणाऱ्या वस्तू निवड होतात.

### SELECTSIMILAR

उपनाव: `SIM`. `Select objects [SEttings]` (किंवा सध्याची निवड): तोच प्रकार, लेयर आणि रंग (आणि ब्लॉकचे नाव, हॅच पॅटर्न) असलेली प्रत्येक वस्तू निवडते. `SE` `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` विचारते, {{key:Enter}} पर्यंत पुनरावृत्ती.

### FIND

उपनाव नाही; किंवा {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. ब्राउझरमध्ये, {{ui:Find and replace}} संवाद ([मजकूर आणि लेबले जोडा](topic:text#find-and-replace-words) पहा). त्याशिवाय: `Enter text to find`, मग `Enter replacement text (Enter: select what is found)`. मजकूर, विशेषता मूल्ये आणि डायमेन्शन मजकुरात उघड्या टॅबवर किंवा निवडीत शोधते.

### SELECTALL आणि DESELECT

`SELECTALL` (उपनाव `AI_SELALL`, {{key:Mod+A}}) उघड्या टॅबवर तुम्ही संपादित करू शकता अशी प्रत्येक वस्तू निवडते. `DESELECT` (उपनावे `AI_DESELECT`, `SELECTNONE`; किंवा {{key:Esc}}) निवड साफ करते.

## डायमेन्शन

### DIMLINEAR

उपनाव: `DLI`, `DIMLIN`. आडवे किंवा उभे अंतर.

- `Specify first extension line origin [Select object]` ({{key:Enter}} किंवा `S`: `Select object to dimension`, मग रेषा, कंस, वर्तुळ किंवा पॉलीलाइन खंडावर क्लिक करा)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` मजकूर विचारते (`<>` मोजलेले मूल्य आहे), `H` आणि `V` दिशा ठरवतात, `R` `Specify angle of dimension line <0>` विचारते.

### DIMALIGNED

उपनाव: `DAL`, `DIMALI`. दोन बिंदूंमधील खरे अंतर.

- उगम {{cmd:DIMLINEAR}} प्रमाणे, मग `Specify dimension line location [Text]`.

### DIMANGULAR

उपनाव: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- कंस: त्याचा कोन. वर्तुळ: `Specify second angle endpoint`. रेषा: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: मोजायच्या कोनाच्या आत क्लिक करा.

### DIMRADIUS आणि DIMDIAMETER

उपनावे: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, मग `Specify dimension line location [Text]`.

### DIMCONTINUE

उपनावे: `DCO`, `DIMCONT`. बनवलेल्या शेवटच्या रेषीय किंवा संरेखित डायमेन्शनपासून पुढे चालते (किंवा `Select linear or aligned dimension` विचारते).

- `Specify second extension line origin [Undo]`, {{key:Enter}} पर्यंत पुनरावृत्ती.

### DIMBASELINE

उपनावे: `DBA`, `DIMBASE`. {{cmd:DIMCONTINUE}} सारखे, पण प्रत्येक डायमेन्शन पहिल्या उगमापासून सुरू होते आणि अधिक बाहेर रचले जाते.

### DIMORDINATE

उपनावे: `DOR`, `DIMORD`. `Specify feature location`, मग `Specify leader endpoint [Xdatum/Ydatum/Text]`. वैशिष्ट्य UCS उगमापासून X किंवा Y बाजूने किती दूर आहे ते लीडरवर लिहिते: मुख्यतः वर किंवा खाली जाणारा लीडर X वाचतो, बाजूला जाणारा Y वाचतो; `Xdatum` आणि `Ydatum` ते निश्चित करतात. प्रथम {{cmd:UCS}} ने उगम सेट करा (त्याशिवाय तो ड्रॉइंगचा 0,0 असतो). ग्रिप्स वैशिष्ट्य, उगम आणि लीडरचे शेवटचे टोक हलवतात, आणि मूल्य अनुसरते. DWG आणि DXF मध्ये खरा ordinate डायमेन्शन म्हणून जतन होते. वैशिष्ट्यावरच लीडरचे टोक नाकारते.

### DIMARC

उपनाव: `DAR`. `Select arc or polyline arc segment`, मग `Specify arc length dimension location [Text]`. कंसावर (जीवा नाही) मोजते आणि मूल्यासमोर कंस चिन्ह लिहिते. पूर्ण वर्तुळ, रेषा किंवा सरळ पॉलीलाइन खंड नाकारते. DWG त्याला कंस लांबीचा डायमेन्शन म्हणून ठेवते; DXF त्याला मजकूर म्हणून लांबी असलेला कोनीय डायमेन्शन म्हणून ठेवते, आणि CadCraft ते पुन्हा कंस लांबीचा डायमेन्शन म्हणून उघडते.

### DIMJOGGED

उपनावे: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. केंद्र दूर किंवा पानाबाहेर असलेल्या वक्रासाठी त्रिज्या डायमेन्शन: डायमेन्शन रेषा केंद्राऐवजी तुम्ही दिलेल्या बिंदूपासून सुरू होते, त्यात झिगझॅगसह, तरीही खरी त्रिज्या लिहिते. DWG त्याला झिगझॅग त्रिज्या डायमेन्शन म्हणून ठेवते; DXF त्याला त्रिज्या डायमेन्शन म्हणून ठेवते, आणि CadCraft ते पुन्हा झिगझॅगसह उघडते.

### DIMJOGLINE

उपनाव: `DJL`. `Select dimension to add jog [Remove]`, मग `Specify jog location (or press Enter)`. रेषीय किंवा संरेखित डायमेन्शनच्या रेषेवर झिगझॅग चिन्ह ठेवते, अंतर स्केलनुसार काढले नाही हे दाखवण्यासाठी; मूल्य बदलत नाही. `Remove` ते काढते. इतर प्रकारचे डायमेन्शन नाकारते.

### QDIM

उपनाव नाही. `Select geometry to dimension`, मग `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. एका पायरीत अनेक वस्तूंना डायमेन्शन करते: रेषा आणि पॉलीलाइन खंडांच्या टोकांपासून, वर्तुळे आणि कंसांच्या केंद्रांपासून, बिंदू आणि ब्लॉक संदर्भांपासून. वस्तूंच्या वर किंवा खाली असलेली स्थिती आडवी मोजते, बाजूला असलेली वर मोजते. `Continuous` बिंदू साखळते, `Baseline` सर्व पहिल्यापासून मोजते, `Staggered` मधल्या भागापासून बाहेरच्या दिशेने जोड्या रचते, `Ordinate` प्रत्येक बिंदूला डेटमपासूनचे अंतर देते (`datumPoint` नवा निवडते), `Radius` आणि `Diameter` निवडलेले प्रत्येक वर्तुळ आणि कंस डायमेन्शन करतात. मोड लक्षात राहतो. जे बनते ते सर्व एक undo पायरी आहे. दोनपेक्षा कमी बिंदू असल्यास, किंवा Radius आणि Diameter साठी कंस किंवा वर्तुळे नसल्यास ते सांगते.

### DIMBREAK

उपनाव: `DBREAK`. `Select dimensions to add or remove breaks`, मग `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` डायमेन्शन आणि विस्तार रेषांमध्ये, जिथे इतर वस्तू त्यांना ओलांडतात तिथे अंतर ठेवते, आणि त्या वस्तू किंवा डायमेन्शन हलल्यावर अंतर पुन्हा मोजते. `Manual` (एक डायमेन्शन) दोन बिंदू विचारते आणि त्यांच्यामध्ये अंतर ठेवते. `Remove` सर्व अंतरे काढते. अंतर डायमेन्शन मजकुराच्या उंचीच्या 1.5 पट असते.

### DIMSPACE

उपनाव नाही. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. समांतर रेषीय आणि संरेखित डायमेन्शनच्या (किंवा त्याच शिरोबिंदूभोवतीच्या कोनीय डायमेन्शनच्या) डायमेन्शन रेषा हलवते, म्हणजे त्या बेस डायमेन्शनपासून मोजलेल्या समान अंतरावर राहतात, प्रत्येक त्या बाजूला जिथे आहे तिथे. `0` त्यांना बेससोबत एका रेषेत ठेवते; `Auto` बेस डायमेन्शनच्या मजकुराच्या उंचीच्या दुप्पट असते. बेसला समांतर नसलेले डायमेन्शन सोडले जातात.

### DIMINSPECT

उपनाव नाही. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. मूल्याभोवती चौकट काढते, त्याच्या आधी लेबल आणि नंतर तपासणी दर. `remove` चौकट काढते. सहनशीलता मजकूर मूल्यासोबत राहतो.

### DIMOVERRIDE

उपनावे: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, Enter पर्यंत पुन्हा, मग `Select dimensions`. फक्त निवडलेल्या डायमेन्शनवरील ती सेटिंग्ज बदलते; डायमेन्शन शैली बदलत नाही. संख्या किंवा स्विच असलेले व्हेरिएबल्स घेते (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` निवडलेल्या डायमेन्शनना त्यांच्या शैलीकडे परत ठेवते. असे व्हेरिएबल नसलेले नाव आणि ते घेऊ शकत नाही असे मूल्य नाकारते.

### DIMREASSOCIATE

उपनावे: `DRE`, `DIMREASSOC`. `Select dimensions`, मग प्रत्येकासाठी त्याचे विस्तार रेषा उगम (`Specify first extension line origin on an object`: रेषेचा शेवट किंवा मध्यभाग, पॉलीलाइन कोपरा, केंद्र यावर स्नॅप; Enter तो बिंदू मोकळा ठेवतो), किंवा त्रिज्या, व्यास, झिगझॅग त्रिज्या किंवा कंस लांबी डायमेन्शनसाठी `Select arc or circle`. डायमेन्शन मग त्या वस्तूंना बांधले जाते: त्या हलल्या किंवा आकार बदलला तर ते त्याच undo पायरीत अनुसरते आणि पुन्हा मोजते. बांधलेला बिंदू हाताने हलवणे, किंवा वस्तू मिटवणे, तो बंध संपवते. बंध DWG आणि DXF 2000 मध्ये CadCraft ची स्वतःची माहिती म्हणून जतन होतो; इतर प्रोग्राम त्याला साधा डायमेन्शन पाहतात.

### DIMDISASSOCIATE

उपनावे: `DDA`, `DIMDISASSOC`. `Select dimensions`. ते ज्या वस्तूंना बांधलेले आहेत त्यांच्यापासून त्यांना मोकळे करते; काहीही हलत नाही.

### CENTERMARK

उपनावे: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, Enter पर्यंत पुन्हा. केंद्रावर क्रॉस आणि वक्रापलीकडे थोड्या अंतरापर्यंत चार केंद्र रेषा काढते (लाइनटाइप CENTER), सध्याच्या लेयरवर साध्या रेषा म्हणून; सध्याच्या डायमेन्शन सेटिंग्जच्या बाण आकार आणि एकूण स्केलवरून मोजल्या जातात, UCS सोबत फिरवलेल्या. वर्तुळ हलले तरी त्या त्याचे अनुसरत नाहीत.

### CENTERLINE

उपनाव: `CL`. `Select first line`, `Select second line`. दोन रेषांच्या मध्यभागी एक रेषा काढते (त्या भेटतात तेव्हा द्विभाजकाने), त्या असतील त्यापेक्षा थोडी लांब, लाइनटाइप CENTER मध्ये. साधी रेषा: ती दोन रेषांचे अनुसरण करत नाही.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

उपनाव नाही. प्रत्येक `Enter new value for … <current>` विचारते आणि **नव्या** डायमेन्शनसाठी तो आकार सेट करते: एकूण स्केल, मजकुराची उंची, बाणाचा आकार, दशांश स्थाने (8 पर्यंत), मजकुराभोवतीचे अंतर, डायमेन्शन रेषेपलीकडील विस्तार, उगमापासून ऑफसेट. [डायमेन्शन आकार सेट करा](topic:dimension-settings) पहा.

### DIMLUNIT

डायमेन्शन सेटिंग: फक्त नव्या डायमेन्शनचा लांबी फॉरमॅट (1 वैज्ञानिक, 2 दशांश, 3 अभियांत्रिकी, 4 स्थापत्य, 5 अपूर्णांक).

### DIMSTYLE आणि -DIMSTYLE

उपनावे: `DST`, `DDIM`, `D`. डायमेन्शन शैली व्यवस्थापक: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. कमांड लाइनवर `-DIMSTYLE`: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. [डायमेन्शन आकार सेट करा](topic:dimension-settings#named-dimension-styles) पहा.

### DIMEDIT आणि DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, मग डायमेन्शन (किंवा आधीच निवडलेले). New मजकूर विचारते (`<>` = मोजमाप); Rotate कोन विचारते (0 मजकूर परत ठेवते); Oblique विस्तार रेषांचा X अक्षापासूनचा कोन विचारते (Enter = काही नाही; फक्त रेषीय आणि संरेखित डायमेन्शन). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. [डायमेन्शन आकार सेट करा](topic:dimension-settings#change-dimension-text-and-extension-lines) पहा.

### DIMTEXTUNIT

उपनाव: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, किंवा डायमेन्शन निवडलेले असताना `Units in the text of the selected dimensions`. मोजलेली लांबी त्या एककात, एककानंतर ते एकक लिहून लिहिते (DIMLFAC आणि DIMPOST प्रत्यय); `D` ड्रॉइंग एककांकडे परत जाते. [डायमेन्शन mm, cm, m किंवा km मध्ये](topic:dimension-settings#dimensions-in-mm-cm-m-or-km) पहा.

### REVCLOUD

उपनाव: `RC`. `Arc length: … Type: …` छापते, मग `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular `Specify opposite corner` विचारते; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand क्लिक किंवा {{key:Enter}} पर्यंत पॉइंटरचे अनुसरण करते; `O` `Select object` आणि `Reverse direction? [Yes/No] <N>` विचारते आणि वस्तूला ढगात बदलते. `A` `Specify the length of each arc` विचारते. `R`, `P` आणि `F` पुढच्या ढगासाठी प्रकार निवडतात. निकाल कंसांची बंद पॉलीलाइन आहे.

### MLEADER

उपनाव: `MLD`; किंवा {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, मग इन-प्लेस बॉक्समधील मजकूर (किंवा त्याशिवाय, `Enter text (an empty line ends)`). `Block` प्रथम ब्लॉकचे नाव विचारते, आणि मल्टीलीडर मजकुराऐवजी तो ब्लॉक दाखवतो. अधिक लीडर रेषा: {{cmd:MLEADEREDIT}}. DWG मध्ये खरा multileader म्हणून जतन होते; DXF त्याने काढलेल्या रेषा, बाण आणि मजकूर ठेवतो.

### MLEADEREDIT

उपनाव: `MLE`. `Select a multileader`, मग `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: प्रत्येक बिंदू नव्या बाणाच्या टोकापासून त्याच लँडिंगकडे एक लीडर रेषा जोडतो, Enter पर्यंत. `Remove leaders` मग तुम्ही क्लिक केलेली लीडर रेषा काढते (multileader कमीत कमी एक ठेवतो). `Block content` ब्लॉकचे नाव विचारते आणि मजकुराऐवजी तो दाखवते (त्याच्या विशेषता विचारल्या जातात); `Text content` मजकूर परत ठेवते. प्रत्येक लीडर रेषेला स्वतःची ग्रिप असते. DWG प्रत्येक लीडर रेषा आणि ब्लॉक एका multileader मध्ये ठेवते.

### MLEADERALIGN

उपनाव: `MLA`. `Select multileaders`, मग `Select multileader to align to [Distribute/Spacing/Use current spacing]` आणि `Specify direction`. इतर multileaders ची लँडिंगे (आणि त्यांचा मजकूर किंवा ब्लॉक) निवडलेल्याच्या लँडिंगमधून त्या दिशेने जाणाऱ्या रेषेवर हलवते; बाण ते जिथे निर्देश करतात तिथेच राहतात. `Spacing` त्यांना समान अंतरावर ठेवते; `Distribute` दोन बिंदू विचारते आणि त्यांच्यामध्ये समान पसरवते. किमान दोन multileaders लागतात.

### MLEADERCOLLECT

उपनाव: `MLC`. `Select multileaders`, मग `Specify collected multileader location [Vertical/Horizontal]` (Enter पहिल्याची जागा ठेवतो). अनेकांचा एक multileader बनवते: ब्लॉक मजकूर एका नव्या ब्लॉकमध्ये जातो जो प्रत्येक ब्लॉक बाजूबाजूला किंवा एकाखाली एक ठेवतो; मजकूर सामग्री एक नोट बनते, प्रत्येक ओळीसह. पहिला multileader त्याच्या लीडर रेषा ठेवतो; इतर काढले जातात. मजकूर आणि ब्लॉक सामग्रीचे मिश्रण नाकारते.

### TABLE

उपनाव: `TB`; किंवा {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. तक्ता बनवते: एक वस्तू जी तुम्ही इतर वस्तूंप्रमाणे हलवता, कॉपी करता, फिरवता, स्केल करता आणि छापता, तिचे सेल डेटा म्हणून ठेवलेले.

- `Number of data rows or [Paste/File/Style] <3>`, मग `Number of columns <3>`, `Text height` आणि `Top left corner of the table`. तक्त्याला शीर्षक ओळ (एक विलीन सेल) आणि डेटा ओळींच्या वर एक हेडर ओळ मिळते.
- `P`: क्लिपबोर्डवरील स्प्रेडशीट सेलमधून तक्ता (सेलमध्ये टॅब असलेला मजकूर). क्लिपबोर्डवर असे सेल असताना {{key:Ctrl+V}} दाबल्यास तेच होते, CadCraft ची स्वतःची प्रत नवी नसेल तर (किंवा CadCraft सांगू शकत नसेल: तेव्हा ती स्वतःची प्रत पेस्ट करते आणि ते सांगते). `F`: `.csv` किंवा टॅब-विभाजित फाइलमधून तक्ता. पहिली ओळ हेडर ओळ बनते; स्तंभांची रुंदी मजकुरात बसते.
- `S`: या तक्त्यासाठी तक्ता शैली निवडा (पहा {{cmd:TABLESTYLE}}).
- ओळींची किंवा स्तंभांची संख्या पूर्ण नसल्यास, किंवा तक्त्यात बसतील त्यापेक्षा जास्त सेल असल्यास नाकारते (2,000 ओळी, 200 स्तंभ, 40,000 सेल).
- {{cmd:EXPLODE}} तक्त्याला रेषा आणि मजकुरात बदलते. DWG म्हणून जतन केल्यावर तक्ता इतर प्रोग्राम संपादित करू शकणारी खरी तक्ता वस्तू असते; DXF म्हणून जतन केल्यावर तो तो काढणारा ब्लॉक असतो, आणि CadCraft तो पुन्हा तक्ता म्हणून उघडते.

### TABLEDIT

उपनावे: `TABLEEDIT`, `TABEDIT`; किंवा सेलवर डबल-क्लिक. तक्ता संपादित करते.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. सेलवर क्लिक करा, किंवा तक्ता निवडलेला असताना त्याचे नाव टाइप करा (`B3`: स्तंभ B, ओळ 3; शीर्षक ओळ ही ओळ 1 आहे). ब्राउझरमध्ये सेलवर एक बॉक्स उघडतो: {{key:Enter}} मजकूर ठेवतो, {{key:Tab}} पुढच्या सेलवर जातो, {{key:Alt+Enter}} नवी ओळ सुरू करतो, {{key:Esc}} सेल जसा होता तसा सोडतो.
- `=` ने सुरू होणारा मजकूर सूत्र आहे: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^`, कंस आणि `sqrt` व `round` सारखी फंक्शन्स. सेल मूल्य दाखवतो; स्वतःच्या सेलचे नाव देणारे, तक्त्याबाहेरील सेल किंवा संख्या नसलेला सेल असलेले सूत्र `####` दाखवते आणि कमांड लाइन कारण सांगते.
- `R` / `C`: निवडलेल्या सेलवर `Insert` किंवा `Delete` ओळी किंवा स्तंभ (किती, आणि वर किंवा खाली, डावीकडे किंवा उजवीकडे). सूत्रे ज्या सेलचे नाव देतात त्यांचे अनुसरण करतात.
- `S`: स्तंभाची रुंदी आणि ओळीची उंची. ओळ तिच्या मजकुरापेक्षा कधीही कमी नसते. निवडलेल्या तक्त्यावर प्रत्येक स्तंभाच्या आणि ओळीच्या कडेवर एक ग्रिप असते.
- `M`: एका निवडलेल्या सेलपासून दुसऱ्यापर्यंत विलीन करा; `U`: विलीन काढा. `A`: संरेखन (`TL` वर-डावीकडे … `MC` मधला-मध्य … `BR` खाली-उजवीकडे). `H`: या सेलची स्वतःची मजकूर उंची (0 = शैलीची). `K`: ओळ शीर्षक, हेडर किंवा डेटा ओळ बनवते. `CL`: सेल रिकामा करते.
- लॉक केलेल्या लेयरवरील तक्ता, प्रत्येक ओळ किंवा स्तंभ मिटवणे, आणि दुसरे विलीन सेल दोन भागांत कापणारे विलीनीकरण नाकारते.

## पॅरामेट्रिक

[ड्रॉइंगवर मर्यादा ठेवा](topic:constraints) आणि [पॅरामीटर्स आणि समीकरणे वापरा](topic:parameters) पहा. मर्यादा {{ui:Model}} टॅबवर काम करतात.

### GEOMCONSTRAINT आणि GC कमांड

उपनाव `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, मग त्या कमांडचे प्रॉम्प्ट.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (दुसरी हलते).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT आणि DC कमांड

उपनाव `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (संख्या, अभिव्यक्ती, किंवा `name=expression`).
- {{cmd:DCALIGNED}}: वरीलप्रमाणे, `[Object/Point & line/2Lines]` सह.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` अंतर आणि कोन सहनशीलता विचारते.
- {{cmd:DELCONSTRAINT}} (उपनाव `DELCON`): `Select objects`; त्यांच्या मर्यादा जातात.
- {{cmd:CONSTRAINTBAR}} (उपनाव `CBAR`): `Select objects [Showall/Hideall]`, मग `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS आणि -PARAMETERS

{{cmd:PARAMETERS}} (उपनावे `PAR`, `PARAM`) {{ui:Parameters}} पॅनेल उघडते. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

उपनाव `SWMACRO`. SolidWorks मध्ये मॉडेल एका मर्यादित स्केचप्रमाणे पुन्हा बांधणारा मॅक्रो (.swb) डाउनलोड करते. [मॉडेल इतर पार्ट मॉडेलर्सकडे आणि तिथून हलवा](topic:solidworks-sketches) पहा.

## ब्लॉक

### ANNOSCALE

उपनाव: `CANNOSCALE`. ड्रॉइंगचा ॲनोटेशन स्केल आणि त्यात असलेल्या ॲनोटेटिव्ह वस्तूंची संख्या सांगते, मग `New annotation scale` विचारते: `1:50`, `1:100`, `2:1`, साधी संख्या (`50` म्हणजे 1:50) किंवा ड्रॉइंगच्या स्वतःच्या स्केलपैकी एकाचे नाव टाइप करा. प्रत्येक ॲनोटेटिव्ह मजकूर आणि डायमेन्शन नव्या स्केलवर समान आकारात छापले जावेत म्हणून आकार बदलले जातात, एका undo पायरीत; ॲनोटेटिव्ह नसलेल्या वस्तू सोडल्या जातात, आणि नव्या स्केलशिवाय स्केलांची यादी ठेवणारी वस्तूही ({{cmd:OBJECTSCALE}}). [एककं, कागद आणि स्केल](topic:units-papers-scales#annotate-by-scale) पहा.

### OBJECTSCALE

उपनाव: `OBJSCALE`. `Select annotative objects`, मग `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. ॲनोटेटिव्ह मजकूर किंवा डायमेन्शन ॲनोटेशन स्केलची यादी ठेवतो. `Add` आणि `Delete` स्केल विचारतात (`1:50`, `2:1`, साधी संख्या, किंवा ड्रॉइंगच्या स्वतःच्या स्केलपैकी एकाचे नाव); `Current scale` ड्रॉइंगचा ॲनोटेशन स्केल जोडतो; `List` प्रत्येक वस्तूचे स्केल छापते. ज्या व्ह्यूपोर्टचा स्केल वस्तूच्या यादीत आहे तो त्या स्केलवर तिची कागदी उंची छापणाऱ्या आकारात वस्तू दाखवतो, स्क्रीनवर आणि प्लॉटमध्ये. शेवटचा स्केल मिटवता येत नाही. ॲनोटेटिव्ह नसलेल्या वस्तू सोडल्या जातात: आधी Properties मध्ये Annotative चालू करा. यादी DWG आणि DXF मध्ये CadCraft ची स्वतःची माहिती म्हणून जतन होते. [एककं, कागद आणि स्केल](topic:units-papers-scales#annotate-by-scale) पहा.

### ANNOALLVISIBLE

उपनाव: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. चालू (ड्रॉइंग सुरू होतानाप्रमाणे): ॲनोटेटिव्ह वस्तू व्ह्यूपोर्ट किंवा मॉडेलमध्ये, ज्याचा स्केल त्यांच्या यादीत नाही, तिथेही तिच्या आकारासह दिसते. बंद: तिथे दाखवली जात नाही, आणि मॉडेलमध्ये निवडता येत नाही. स्विच एक undo पायरी आहे; तो फाइलमध्ये ठेवला जात नाही.

### SCALELISTEDIT

उपनाव: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` {{key:Enter}} पर्यंत. Add: `Scale name`, `Paper units`, `Drawing units`. Edit आणि Delete स्केलचे नाव विचारतात. ड्रॉइंगचे स्वतःचे स्केल व्ह्यूपोर्ट आणि प्लॉट स्केल यादीत सामील होतात, आणि ड्रॉइंगसोबत जतन होतात. [एककं, कागद आणि स्केल](topic:units-papers-scales#scales) पहा.

### SPLINE, SPLINEDIT आणि PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: वक्र ज्यातून जातो ते बिंदू; `Close`, `Undo`, मग `Start tangent` आणि `End tangent` (एक बिंदू, किंवा {{key:Enter}}). Method › Control vertices पदवी (1 ते 5) विचारते आणि नियंत्रण बहुभुजातून काढते. Object पॉलीलाइनला त्यांच्या शिरोबिंदूंमधून स्प्लाइनमध्ये बदलते. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, अनेक वस्तूंसाठी `M`; रेषा, कंस आणि स्प्लाइन प्रथम पॉलीलाइन म्हणून दिले जातात. [स्प्लाइन आणि पॉलीलाइन](topic:splines) पहा.

### BLOCK

उपनावे: `B`, `BMAKE`.

- `Enter block name`. ते अस्तित्वात असल्यास: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. त्या एका नव्या ब्लॉकच्या संदर्भाने बदलल्या जातात.

### WBLOCK

उपनावे: `W`, `-WBLOCK`. ब्लॉक, काही वस्तू किंवा संपूर्ण ड्रॉइंग नव्या DWG किंवा DXF फाइलमध्ये लिहिते. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ते नव्या ड्रॉइंगचा उगम बनते), `Select objects`, मग `File format [DWG/DXF/R12 DXF]` आणि `File name for the new drawing`, मग `What to do with the objects [Retain/Convert to block/Delete]`. Convert त्यांना फाइलच्या नावाच्या ब्लॉकच्या एका संदर्भाने बदलते; Delete त्या काढते.
- **Block**: `Block to write out`. ब्लॉकच्या स्वतःच्या वस्तू, त्याच्या बेस बिंदूला उगम धरून, आतील ब्लॉकसह.
- **Entire drawing**: मॉडेल स्पेसमधील प्रत्येक वस्तू. शीट्स लिहिल्या जात नाहीत; त्या राखणाऱ्या प्रतीसाठी {{cmd:SAVEAS}} वापरा.

नव्या फाइलमध्ये फक्त तिच्या वस्तू वापरत असलेले लेयर, लाइनटाइप, मजकूर आणि डायमेन्शन शैली आणि ब्लॉक, आणि ड्रॉइंगची एकके असतात. DWG ची आवृत्ती ती असते जी {{cmd:SAVEAS}} शेवटची वापरली. ब्राउझरमध्ये फाइल डाउनलोड होते; Studio मध्ये सेव्ह संवाद उघडतो.

### ATTDEF

उपनावे: `ATT`, `DDATTDEF`, `-ATTDEF`; किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. मोड छापते, मग `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (स्थिर असल्यास `Enter attribute value`), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} विशेषता व्याख्या ब्लॉकमध्ये घेतो.

### EATTEDIT आणि ATTEDIT

`EATTEDIT` (`DDATTE`, किंवा विशेषता असलेल्या संदर्भावर डबल-क्लिक; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, मग {{ui:Edit attributes}} संवाद. `ATTEDIT` (`ATE`, `-ATTEDIT`): तोच संदर्भ, मग प्रत्येक विशेषतासाठी `<prompt> (<TAG>) <value>`; {{key:Enter}} मूल्य ठेवतो. [विशेषता](topic:attributes#see-and-change-the-values) पहा.

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. मूल्ये ठेवली जातात; नव्या विशेषतांना त्यांचे डीफॉल्ट मिळतात, काढलेल्या जातात, आणि जागा रीसेट होतात.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. संवाद: ब्लॉक, विशेषता (टॅग, प्रॉम्प्ट, डीफॉल्ट, मोड, क्रम), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT आणि REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (किंवा निवड). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; पट्टीवरील {{ui:Save the block}} आणि {{ui:Discard}} तेच करतात. संपूर्ण संपादन एक undo पायरी आहे. [विशेषता](topic:attributes#edit-a-title-block-where-it-is-refedit) पहा.

### PENPRESSURE

`[ON/OFF]`: पेन स्ट्रोकचा दाब {{cmd:SKETCHFIX}} आणि {{cmd:SKETCHLIVE}} बनवणाऱ्या गोष्टींचा लाइनवेट सेट करतो की नाही (सुरुवातीला चालू). [पेनने स्केच करा](topic:sketch-with-a-pen#pressure-sets-the-lineweight) पहा.

### OFFICESTANDARD

उपनाव: `OFFSTD`. या ड्रॉइंगसाठी कोणते कार्यालय मानक लागू आहे आणि ते कुठून येते ते सांगते: ड्रॉइंगची स्वतःची नोंद, तुमच्या टीमचे सामायिक मानक, किंवा तुमची Default Policies (मजकुराची उंची `all.anno.*`); काहीच नसेल तर प्रोग्रामचे स्वतःचे आकार. `[Import/Layers/Title block/Clear/eXit]`: `Import` `cc-office-standard` .json (SuperCad आणि BimCraft लिहितात ती नोंद) या ड्रॉइंगमध्ये वाचते, ती त्यासोबत DWG आणि DXF मध्ये जतन होते; `Layers` ड्रॉइंगमध्ये नसलेले कार्यालयाचे लेयर एका undo पायरीत जोडते, आणि कधीही काढत नाही; `Title block` कार्यालयाचे फील्ड या ड्रॉइंगच्या स्वतःच्या मूल्यांसह यादी करते; `Clear` ड्रॉइंगची स्वतःची नोंद काढते. ॲनोटेटिव्ह मजकूर आणि डायमेन्शन उंची लागू मानकाचे अनुसरण करतात. [एककं, कागद आणि स्केल](topic:units-papers-scales) पहा.

### BPARAMS

उपनावे: `BPM`, `BLOCKPARAMS`. ब्लॉक एडिटरमधील ब्लॉकसाठी, निवडलेल्या संदर्भाच्या ब्लॉकसाठी, किंवा तुम्ही नाव दिलेल्या ब्लॉकसाठी (`Block name`) Parameters व्यवस्थापक उघडते: सूत्रांसह पॅरामीटर्स, त्यांच्या स्थितींसह अनेक दृश्यमानता पॅरामीटर्स, आणि निवडलेल्या संदर्भाची स्वतःची मूल्ये आणि स्थिती. [तुमचे स्वतःचे पॅरामीटर्स आणि दृश्यमानता स्थिती](topic:dynamic-blocks#your-own-parameters-and-visibility-states) पहा. `-BPARAMS` कमांड लाइनवर तेच करते: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT आणि BCLOSE

`BE`; किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` ब्लॉक एडिटर उघडते. `BCLOSE` `Close the block editor on "…" [Save/Discard] <Save>` विचारते; पट्टीवरील {{ui:Save block}} आणि {{ui:Discard changes}} तेच करतात. एडिटरमध्ये केलेले सर्व एक undo पायरी आहे.

### VIEWBASE

उपनाव: `FLATSHOT`. 3D टॅबवरील घनांचे सपाट 2D दृश्य: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, एक स्केल (`1:20`, `2:1`; {{key:Enter}} शीटला बसणारा घेतो), मग दृश्याचे केंद्र. एक ब्लॉक संदर्भ; दिसणाऱ्या कडा VIEW-VISIBLE वर, लपलेल्या डॅश VIEW-HIDDEN वर. [शीटवर सपाट दृश्ये](topic:3d-solids#flat-views-on-a-sheet) पहा.

### PUBLISH

उपनाव: `-PUBLISH`; किंवा {{ui:Plot to PDF}} संवादातील {{ui:All sheets in one PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} प्रत्येक शीट छापतो, `S` नावे स्वल्पविरामाने वेगळी विचारते. एक PDF, प्रति शीट एक पान आणि एक बुकमार्क. [प्रत्येक शीट एका PDF मध्ये](topic:plot-pdf#every-sheet-in-one-pdf) पहा.

### SHEETSET

उपनावे: `SSM`, `SHEETSETMANAGER`. तुम्हाला डाव्या पॅनेलच्या {{ui:Sheet set}} विभागात नेते: अनेक ड्रॉइंगमधील शीट्स, क्रमांकित आणि शीर्षकांकित, त्यांचे शीर्षक ब्लॉक संचावरून भरलेले, एका PDF मध्ये छापलेले. [शीट संच](topic:sheet-sets) पहा.

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): एक DWG किंवा DXF निवडा, मग त्याचा घाला बिंदू. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; एकापेक्षा जास्त दुवे असल्यास त्यातील एक संदर्भ निवडा किंवा `N` टाइप करा आणि त्याचे नाव. [जोडलेली ड्रॉइंगे](topic:files#linked-drawings-external-references) पहा.

### COUNT

उपनाव: `BCOUNT`; किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: एक क्लिक त्या ब्लॉकचे या जागेतील प्रत्येक संदर्भ निवडते आणि मोजते; {{key:Enter}} किंवा `A` ते सर्व यादी करते; `E` मग `C` (मोजणी) किंवा `A` (विशेषता) CSV डाउनलोड करते. [ब्लॉक मोजा आणि वेळापत्रक निर्यात करा](topic:blocks#count-blocks-and-export-a-schedule) पहा.

### INSERT

उपनावे: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (मोठी-लहान अक्षरे महत्त्वाची नाहीत). `F` DWG किंवा DXF विचारते, मग संपूर्ण ड्रॉइंग किंवा त्यातील एक ब्लॉक; आधीच वापरलेले नाव {{ui:Keep existing}} किंवा {{ui:Rename}} विचारते. `L` लायब्ररी पॅनेल उघडते.
- `Specify insertion point [Scale/Rotate]`. `S` `Specify scale factor` विचारते, `R` `Specify rotation angle` विचारते; दोन्ही लक्षात ठेवले जातात.
- ब्लॉक आधीच अशा वस्तूंच्या शेजारी असेल ज्या त्याशिवाय इतरत्र पुनरावृत्त होतात, तर एक ओळ किती जागा सुचवल्या ते सांगते आणि प्रॉम्प्टला `suGgested` जोडला जातो: `G` त्या दाखवते; एकाजवळ क्लिक करा तिथे ब्लॉक ठेवण्यासाठी, `A` सर्वांसाठी, {{key:Enter}} मागे जाण्यासाठी. ते शेजाऱ्यांचे फिरणे आणि डीफॉल्ट विशेषता मूल्ये घेतात. खुल्या जागेत 20,000 पेक्षा जास्त वस्तू असलेली ड्रॉइंगे शोधली जात नाहीत.
- मग ब्लॉक मागणाऱ्या प्रत्येक विशेषतेसाठी `Enter <prompt> (<TAG>) <default>`. [ब्लॉक विशेषता](topic:attributes) पहा.

### LIBRARY

उपनाव: `LIB`. लायब्ररी पॅनेल उघडते: आयटम ठेवा, अद्ययावतता तपासा, लायब्ररी श्रेय. प्रश्न नाहीत. [फाइलमधून किंवा लायब्ररीतून घाला](topic:insert-from-file-and-library) पहा.

### STEELMEMBER

उपनाव: `SMEMBER`; किंवा लायब्ररीच्या {{ui:Standard}} टॅबवरील {{ui:3D member}}. `Section size <W12x26>` (टॅब ते दाखवते तसे), मग `Start point [Column]` आणि `End point`: दोन बिंदूंमधील, जमिनीवर बसलेला, 3D टॅबवरील घन सदस्य. `C` स्तंभाचा बेस बिंदू आणि त्याची उंची विचारते. एक undo पायरी. [स्टील विभाग आणि मानक भाग ठेवा](topic:steel-and-standard-parts) पहा.

### PARTSLIST

उपनाव: `PLIST`. `Top left corner of the parts list`, मग `Text height <2.5>`: लायब्ररीतून ठेवलेल्या प्रत्येक मानक भागाचा आणि स्टील विभागाचा तक्ता काढते (आयटम क्रमांक, प्रमाण, भाग, मानक, आकार, लांबी, साहित्य, वजन). एक undo पायरी. [स्टील विभाग आणि मानक भाग ठेवा](topic:steel-and-standard-parts#make-a-parts-list) पहा.

### PURGE

उपनाव: `PU`. कोणीही न वापरलेल्या ब्लॉक व्याख्या काढते. प्रश्न नाहीत.

### DELBLOCKS

किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: एक ब्लॉक संदर्भ निवडा, किंवा फिल्टरसह ब्लॉकच्या यादीसाठी `N` (अनेक निवडा), किंवा संपवण्यासाठी `X` / {{key:Enter}}. प्रत्येक संदर्भ जातो — मॉडेलमध्ये, प्रत्येक शीटवर आणि इतर ब्लॉकच्या आत — आणि मग व्याख्या, आणि कमांड लाइन काय मिटवले आणि काय मिटवता आले नाही ते सांगते. नावविरहित ब्लॉक आणि जोडलेली ड्रॉइंगे दिली जात नाहीत. प्रॉम्प्ट पुढच्या ब्लॉकसाठी परत येतो; संपूर्ण कमांड एक undo पायरी आहे.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} तुम्ही कॉपी केलेले ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) एक ब्लॉक म्हणून पेस्ट करते: घाला बिंदू उचला आणि नव्या ब्लॉकचा एक संदर्भ तिथे जातो, निवडलेला. ब्लॉकला स्वतःचे नाव मिळते (`A$C` आणि एक संख्या); {{cmd:RENAME}} त्याला तुमचे नाव देते. एक undo पायरी संदर्भ आणि ब्लॉक काढते.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} बदलायचा ब्लॉक आणि त्याच्या जागी ठेवायचा ब्लॉक विचारते (`?` ब्लॉकची यादी करते), मग मॉडेलमधील, प्रत्येक शीटवरील आणि इतर ब्लॉकच्या आतील प्रत्येक संदर्भ बदलते. प्रत्येक संदर्भ आपली जागा, स्केल, फिरणे, लेयर आणि दोन्ही ब्लॉकमधील विशेषतांची मूल्ये ठेवतो; फक्त नव्या ब्लॉकमधील विशेषता त्यांच्या डीफॉल्टपासून सुरू होतात, आणि कोणती मूल्ये टाकली गेली ते सांगते. कोणीही जुना ब्लॉक वापरत नसल्यास तो काढण्याची ऑफर देते. जोडलेली ड्रॉइंगे आणि स्वतःच्या आत ब्लॉक ठेवणारी बदली नाकारते. एक undo पायरी.

### MINSERT

{{cmd:MINSERT}} एका वेळी ब्लॉक ओळी आणि स्तंभांत ठेवते: ब्लॉकचे नाव, घाला बिंदू, स्केल, फिरणे, ओळी आणि स्तंभांची संख्या, आणि त्यांच्यामधील अंतर. संपूर्ण संच फिरण्यासोबत फिरतो. प्रत्येक स्वतःचा संदर्भ असतो (10,000 पर्यंत), त्यामुळे त्यांपैकी कोणताही नंतर हलवता किंवा मिटवता येतो.

### BLOCKSPALETTE

उपनाव: `BLOCKSPAL`; किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. फिल्टरमध्ये कर्सर असलेला {{ui:Blocks}} पॅनेल दाखवते. प्रत्येक ब्लॉकचे एक छोटे चित्र असते; सर्वात अलीकडे ठेवलेले आधी येतात. फिल्टरशेजारील दोन बटणे चित्रांची यादी आणि ग्रिड यांच्यात स्विच करतात. ब्लॉक ठेवण्यासाठी चित्रावर क्लिक करा (किंवा {{ui:Insert}}) — {{cmd:INSERT}} ने — किंवा ड्रॉइंगवर ड्रॅग करा, जिथे सोडाल तिथे ठेवण्यासाठी.

यादीखालील {{ui:Libraries}}: {{ui:Add a drawing}} तुमची स्वतःची DWG किंवा DXF फाइल घेते आणि तिचे ब्लॉक चित्रांसह यादी करते, आणि संपूर्ण ड्रॉइंग एक ब्लॉक म्हणून. एक ठेवल्याने त्याची व्याख्या (आणि त्याने घरटे केलेले ब्लॉक, आणि त्यांचे लेयर) {{cmd:INSERT}} च्या `File` पर्यायाप्रमाणे या ड्रॉइंगमध्ये कॉपी होते; त्याच व्याख्येचा ब्लॉक आधीच इथे असेल तर तो विचारल्याशिवाय वापरला जातो, आणि त्याच नावाचा पण वेगळा ब्लॉक {{ui:Keep existing}} किंवा {{ui:Rename}} विचारतो. ब्राउझरमध्ये फाइल पेज बंद होईपर्यंत राहते. CadCraft Studio मध्ये {{ui:Add a folder}} फोल्डरमधील ड्रॉइंगांची यादी करते, प्रत्येक तुम्ही क्लिक केल्यावर उघडले जाते, आणि फाइल्स व फोल्डर लक्षात ठेवले जातात. लहान x लायब्ररी यादीतून काढतो; फाइलला स्पर्श होत नाही. सामायिक {{ui:Library}} वेगळी गोष्ट आहे: [फाइलमधून किंवा लायब्ररीतून घाला](topic:insert-from-file-and-library) पहा.

### BCONVERT

किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. पुनरावृत्त होणारी भूमिती शोधते आणि प्रत्येक प्रत एका ब्लॉकच्या संदर्भात बदलते.

- `Select the objects that repeat, or [Block]`: एका प्रतीच्या वस्तू. `B` त्याऐवजी अस्तित्वात असलेल्या ब्लॉकचे नाव देते, त्याच्या वस्तूंच्या सुट्या प्रती शोधण्यासाठी.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` आणि `P` प्रत म्हणून काय मोजले जाते ते बदलतात; {{key:Enter}} शोधते. सेटिंग्ज लक्षात ठेवल्या जातात.
- `Name for the new block <Block1>`, मग `Specify the block's base point` ({{key:Enter}} निवडीचा खालचा डावा कोपरा घेतो).
- तीच भूमिती असलेले किती वस्तूंचे इतर संच आहेत ते सांगते, ते बदलणारी प्रत्येक गोष्ट हायलाइट करते, आणि `Yes/No` विचारते.

प्रत म्हणजे तीच वस्तू हलवलेली आणि कोणत्याही कोनात फिरवलेली (आणि सुरू असल्यास एका घटकाने आरसा किंवा स्केल केलेली): प्रत्येक वस्तूला तिचा समकक्ष असावा लागतो, निवडीच्या आकाराच्या दशलक्षांशाच्या आत. प्रत्येक संदर्भाला स्वतःचे फिरणे आणि स्केल मिळते (आरसा केलेल्याला ऋण Y स्केल), आणि त्याच्या वस्तू जो लेयर सामायिक करतात तो. लॉक केलेल्या लेयरवरील वस्तूंना हात लागत नाही आणि त्या मोजल्या जातात. ते खुली जागा (मॉडेल किंवा उघडी शीट) शोधते. खूप मोठी शोध एका कामाच्या मर्यादेवर थांबते आणि ते सांगते. एक undo पायरी.

### BSEARCH

किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: ब्लॉकच्या नावाचा भाग, किंवा `*` आणि `?` असलेला पॅटर्न. प्रत्येक ब्लॉक इथे आणि संपूर्ण ड्रॉइंगमधील संदर्भांसह यादी होतो.
- `A`: विशेषता मूल्य, किंवा `TAG=value`. ज्या ब्लॉकच्या संदर्भांमध्ये ते आहे ते त्यांच्या सापडलेल्या मूल्यांसह यादी होतात. स्थिर विशेषता मोजल्या जातात.
- `G`: वस्तू निवडा, किंवा एक ब्लॉक संदर्भ, आणि आकार किमान 85% सारखे असलेले ब्लॉक, सर्वात चांगले आधी यादी होतात. आकार, फिरणे आणि आरसा मोजला जात नाही. मोजमाप बाह्यरेषांवर पसरलेल्या बिंदूंमधील अंतरांची तुलना करते, म्हणून ते सारखे दिसणारे शोधते; अचूक प्रती शोधण्यासाठी {{cmd:BCONVERT}} वापरा.

खुल्या जागेत सापडलेले संदर्भ पुढच्या कमांडसाठी निवडले जातात.

### BREPLACE

किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` तुम्ही निवडलेले ब्लॉक संदर्भ तुम्ही नाव दिलेल्या ब्लॉकने बदलते; `A` एक ब्लॉक आणि त्याची बदली विचारते आणि {{cmd:BLOCKREPLACE}} प्रमाणे (तोच कोड) प्रत्येक संदर्भ बदलते. संदर्भ आपली जागा, स्केल, फिरणे, लेयर आणि दोन्ही ब्लॉकमधील विशेषतांची मूल्ये ठेवतो; नव्या ब्लॉकला जागा नसलेली मूल्ये टाकली जातात आणि नाव दिली जातात. `?` ब्लॉकची यादी करते. एक undo पायरी.

### DATAEXTRACTION

उपनावे: `EATTEXT`, `DX`; किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. ब्लॉक, त्यांच्या विशेषता आणि वस्तूंचे गुणधर्म तक्ता किंवा CSV फाइल म्हणून यादी करते.

- निवडीवर काम करते, किंवा `Select objects (Enter: everything in this space)` विचारते.
- निवडीत दोन्ही असल्यास `List: [Blocks/Objects/All]`. नावविरहित ब्लॉक, तक्ते आणि साहित्य बिले कधीही यादीत येत नाहीत.
- यादीतील स्तंभ छापते (नाव, प्रकार, लेयर, X, Y, फिरणे, स्केल, लांबी, क्षेत्र, रंग, लाइनटाइप, जागा, आणि प्रत्येक विशेषता टॅगसाठी एक), मग `Columns, by name or number with commas between`. {{key:Enter}} तारकांकित निवडते: ब्लॉकसाठी नाव आणि प्रत्येक विशेषता; वस्तूंसाठी प्रकार, लेयर आणि लांबी.
- `Put identical rows together with a count? [Yes/No] <Yes>`, मग `Put the list in a: [Table/Csv] <Table>`. तक्ता हा एक सामान्य तक्ता आहे ({{cmd:TABLEDIT}} तो संपादित करते) आणि तो थेट नाही: ड्रॉइंग बदलल्यानंतर कमांड पुन्हा चालवा.
- स्तंभ यादीत नसल्यास नाकारते. तक्त्यात 1,999 डेटा ओळी बसतात; CSV फाइल सर्व घेते.

### COUNTTABLE

निवडीचे (किंवा खुल्या जागेचे) ब्लॉक संदर्भ मोजते आणि मोजणी `Block`, `Count` तक्त्यात किंवा CSV फाइलमध्ये ठेवते. ड्रॉइंग स्वतः अनुसरणारी मोजणी हवी असल्यास {{cmd:BOMTABLE}} पहा.

## शीट्स आणि प्लॉटिंग

### LAYOUT

उपनावे: `LO`, `NEWLAYOUT`; किंवा ड्रॉइंगखालील {{ui:+}} बटण. बॉर्डर, शीर्षक ब्लॉक आणि एक व्ह्यूपोर्ट असलेली नवी शीट, ISO A3 वर (किंवा इंच किंवा फूट ड्रॉइंगसाठी Tabloid). प्रश्न नाहीत.

### MVIEW

उपनाव: `MV`. फक्त शीटवर ({{cmd:VPORTS}} शीटवर तेच करते).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. व्ह्यूपोर्ट प्रमाणित स्केलवर संपूर्ण मॉडेल दाखवतो.
- `P` (Polygonal): बाह्यरेषेचे कोपरे क्लिक करा (`Undo`, `Close`), पूर्ण झाल्यावर {{key:Enter}}. तीनपेक्षा कमी कोपरे नाकारते.
- `O` (Object): `Select a closed object for the viewport's outline`: शीटवरील बंद पॉलीलाइन, वर्तुळ किंवा एलिप्स. व्ह्यूपोर्ट त्याचा आकार घेतो (वक्र लहान सरळ तुकडे म्हणून); वस्तू जशी होती तशीच राहते. बंद नसलेली वस्तू नाकारते.

### VPCLIP

शीटवर आधीच असलेल्या व्ह्यूपोर्टला कापते. `Select viewport to clip` (किंवा आधी निवडा), मग `Select the object to clip to [Polygonal/Delete]`:

- बंद पॉलीलाइन, वर्तुळ किंवा एलिप्सवर क्लिक करा, किंवा बहुभुजाचे कोपरे क्लिक करण्यासाठी {{key:Enter}} (किंवा `P`).
- `D` (Delete, व्ह्यूपोर्ट कापलेला असताना उपलब्ध) त्याला पुन्हा आयत बनवते: त्याच्या बाह्यरेषेभोवतीचा बॉक्स.
- व्ह्यूपोर्ट कागदावर काय दाखवतो ते हलत नाही, आणि त्याचा स्केल राहतो. मॉडेल फक्त बाह्यरेषेच्या आत काढले आणि छापले जाते, आणि सीमा तिचे अनुसरण करते. एक undo पायरी.
- कापलेल्या व्ह्यूपोर्टला त्याच्या बाह्यरेषेच्या प्रत्येक कोपऱ्यावर एक ग्रिप असते, त्याच्या केंद्र आणि त्याच्या बॉक्सच्या चार कोपऱ्यांव्यतिरिक्त (बॉक्सचा कोपरा ओढल्याने बाह्यरेषाही ताणली जाते). Properties मध्ये Outline: Rectangle, किंवा Clipped आणि कोपऱ्यांची संख्या दाखवते.
- DWG आणि DXF 2000 फाइल्स बाह्यरेषा CadCraft साठी ठेवतात. इतर प्रोग्राम व्ह्यूपोर्ट त्याच्याभोवतीच्या आयत म्हणून उघडतात; DXF R12 फक्त आयत ठेवतो.
- मॉडेल टॅबवर ते सांगते की व्ह्यूपोर्ट शीटवर असतात.

### VPORTS

उपनाव: `VIEWPORTS`. {{cmd:SPLIT}} शीटवरूनही तेच आहे, आणि {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} ते चालवतात. मॉडेलवर: `Enter number of panes [SIngle/2/3/4] <3>`; `2` `[Horizontal/Vertical] <Vertical>` विचारते (Vertical = बाजूबाजूला), `3` `[Left/Right] <Right>` विचारते (मोठा पेन कुठे जातो). प्रत्येक पेन स्वतःचे दृश्य आणि जागा ठेवतो; क्लिक एक पेन सक्रिय करतो. शीटवर ते {{cmd:MVIEW}} आहे. [स्क्रीन विभाजित करा](topic:split-screen) पहा.

### VPVIEW

उपनाव नाही. फक्त शीटवर.

- `Select viewport` (एक निवडलेला असल्यास वगळले), मग मॉडेलवर: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

उपनाव नाही. तुमची स्वतःची समन्वय प्रणाली; संपादन नाही. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: एक बिंदू नवा उगम आहे, मग `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: उगम, धन X अक्षावरील एक बिंदू, धन-Y बाजूचा एक बिंदू. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` आणि एक नाव. दृश्य फिरते म्हणून नवा X अक्ष सपाट असतो. [दृश्य फिरवा आणि तुमची स्वतःची समन्वय वापरा](topic:ucs-and-turned-view) पहा.

### PLAN

उपनाव नाही. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: सक्रिय पेनचे दृश्य असे फिरवते की UCS चा X अक्ष (किंवा जगाचा) सपाट असेल. ड्रॉइंगमधील काहीही हलत नाही.

### TURNLEFT, TURNRIGHT, TURNWORLD

उपनाव नाही; किंवा {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. `UCS Z -90`, `UCS Z 90` आणि `UCS W` सारखेच, दृश्य अनुसरत.

### VPLAYER

उपनाव नाही. शीटवर, किंवा व्ह्यूपोर्टच्या आत. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` लेयर नावे विचारतात (स्वल्पविराम, `*` आणि `?` वाइल्डकार्ड), मग `[All/Select/Current] <Current>` व्ह्यूपोर्ट; Reset प्रत्येक लेयरला त्याच्या "frozen in new viewports" डीफॉल्टवर परत ठेवते; `V` तो डीफॉल्ट सेट करते (`[Frozen/Thawed]`), जो {{cmd:MVIEW}} वापरतो. `?` सध्याच्या व्ह्यूपोर्टमध्ये गोठवलेले लेयर यादी करते. Layers पॅनेलचा व्ह्यूपोर्ट स्तंभ एका व्ह्यूपोर्टसाठी तेच करतो. [एका व्ह्यूपोर्टमध्ये लेयर गोठवा](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport) पहा.

### MSPACE

उपनाव: `MS`; किंवा व्ह्यूपोर्टच्या आत डबल-क्लिक. फक्त शीटवर. व्ह्यूपोर्टद्वारे मॉडेलवर काम करा: निवडलेला, शीटवरील एकमेव, किंवा `Click inside the viewport to work in`. आत पॅन आणि झूम व्ह्यूपोर्टचे दृश्य बदलतात (डिस्प्ले-लॉक केलेला त्याला ठेवतो आणि त्याऐवजी शीट हलते); नवे दृश्य एक undo पायरी म्हणून लिहिले जाते. [व्ह्यूपोर्टद्वारे मॉडेलवर काम करा](topic:sheets-and-viewports#work-on-the-model-through-a-viewport) पहा.

### PSPACE

उपनाव: `PS`; किंवा व्ह्यूपोर्टबाहेर डबल-क्लिक, किंवा ड्रॉइंगखालील टॅब क्लिक करा. शीटवर परत.

### PLOT

उपनावे: `PRINT`, `PUBLISH`, `EXPORTPDF`; किंवा {{key:Mod+P}}. {{ui:Plot to PDF}} संवाद उघडते. [PDF मध्ये छापा](topic:plot-pdf) पहा.

### PLOTSTYLES

उपनावे: `STYLESMANAGER`, `PSTABLES`; किंवा {{ui:Plot to PDF}} संवादातील {{ui:Edit tables…}}. {{ui:Plot style tables}} उघडते: प्रत्येक रंग काय छापतो (रंग, राखाडी, शाई, लाइनवेट), ड्रॉइंगसोबत ठेवलेले. [प्लॉट शैली तक्ते](topic:plot-pdf#plot-style-tables) पहा.

### CHSPACE

{{cmd:CHSPACE}} व्ह्यूपोर्टद्वारे शीट आणि मॉडेलदरम्यान वस्तू हलवते, स्केल आणि फिरवलेल्या, त्या दुसऱ्या बाजूने सारख्या दिसाव्यात म्हणून. शीटवर वस्तू निवडा आणि त्या मॉडेलकडे जातात (शीटवर एकापेक्षा जास्त असल्यास व्ह्यूपोर्ट निवडा). व्ह्यूपोर्टद्वारे मॉडेलवर काम करताना ({{cmd:MSPACE}}), निवडलेल्या वस्तू शीटवर येतात. त्या किती पट मोठ्या किंवा लहान झाल्या ते सांगते. व्ह्यूपोर्ट त्यांच्या शीटवरच राहतात. एक undo पायरी.

### ISODRAFT

{{cmd:ISODRAFT}} आयसोमेट्रिक ड्राफ्टिंग `ON` किंवा `OFF` करते, किंवा थेट `Left`, `Top` किंवा `Right` प्लेनवर जाते. ते चालू असताना: Ortho ({{key:F8}}) रेषा प्लेनच्या दोन अक्षांवर ठेवते (left: 90° आणि 150°; top: 30° आणि 150°; right: 30° आणि 90°), ध्रुवीय ट्रॅकिंग ({{key:F10}}) तेच अक्ष अनुसरते, स्नॅप टू ग्रिड ({{key:F9}}) आयसोमेट्रिक ग्रिड वापरते, आणि ग्रिड ({{key:F7}}) 30°, 90° आणि 150° रेषांनी काढला जातो. {{cmd:ELLIPSE}} ला `Isocircle` मिळते: केंद्र आणि त्रिज्या (किंवा `Diameter`) द्या, आणि ते सध्याच्या प्लेनवर वर्तुळ जसे दिसते तसा एलिप्स काढते. ड्रॉइंग सपाट राहते: हे चित्रमय दृश्य काढण्यासाठी मदत आहेत, 3D मॉडेल नाही. सेटिंग या सत्रासाठी आहे आणि फाइलमध्ये जतन होत नाही.

### ISOPLANE

{{cmd:ISOPLANE}} आयसोमेट्रिक ड्राफ्टिंग ज्या प्लेनवर चालते ते निवडते: `Left`, `Top` किंवा `Right`. Enter पुढच्या प्लेनवर जातो. आयसोमेट्रिक ड्राफ्टिंग चालू असताना, {{key:F5}} कमांडच्या मध्यात तेच करते; ते बंद असताना, {{key:F5}} ब्राउझरकडे सोडले जाते.

## तपासणी

### CAL

गणनेचे मूल्य छापते, जसे ते लांबी टाइप करता तिथे कुठेही वाचले जाते.

- `Expression`: टाइप करा, उदाहरणार्थ `12'6"+3/4"` किंवा `(24'-0")/3`, आणि {{key:Enter}} दाबा. CadCraft `= 12'-6 3/4"   (150.75 drawing units)` छापते. [टाइप केलेल्या मूल्यातील अंकगणित](topic:coordinate-entry#arithmetic-in-a-typed-value) पहा.

### DIST

उपनाव: `DI`; किंवा {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`, `Specify second point`. अंतर, कोन, Delta X आणि Delta Y छापते.

### AREA

उपनाव: `AA`; किंवा {{ui:View}} › {{ui:More}} › {{ui:Area}}. क्षेत्र आणि परिमिती छापते.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - कोपरे क्लिक करा किंवा टाइप करा; `Specify next point (Enter closes) [Undo]` वर {{key:Enter}} दाबा बाह्यरेषा बंद करण्यासाठी. `U` शेवटचा कोपरा परत घेतो.
  - {{key:Enter}} किंवा `O`, मग `Select object`: वर्तुळ (त्याचा घेर छापते), एलिप्स, पॉलीलाइन (उघडी असल्यास क्षेत्रासाठी सरळ रेषेने बंद होते, आणि तिची लांबी छापली जाते), किंवा हॅच (छिद्रे वजा होतात).
  - `A` (Add area) आणि `S` (Subtract area) चालू बेरीज ठेवतात: प्रॉम्प्ट `(ADD mode)` किंवा `(SUBTRACT mode)` ने सुरू होतो, प्रत्येक क्षेत्र जोडले किंवा वजा केले जाते, आणि प्रत्येकानंतर `Total area = …` छापले जाते. या मोडमध्ये `O` {{key:Enter}} पर्यंत वस्तू निवडते, आणि पहिल्या प्रॉम्प्टवर {{key:Enter}} कमांड संपवतो.

### MEASUREGEOM

उपनाव: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; प्रत्येक मोजमापानंतर पुन्हा विचारते, `eXit` डीफॉल्ट.

`Quick` पॉइंटरभोवती तुम्ही तो हलवता तसे मोजते: सर्वात जवळच्या वस्तूपर्यंतचे अंतर उजवीकडे, वर, डावीकडे आणि खाली (सध्याच्या UCS च्या अक्षांसह), तुम्ही जाताना काढलेले, आणि दोन शेजारी सरळ असून भेटतात तिथे कोन. क्लिक चार अंतरे, स्पष्ट रुंदी आणि उंची, आणि कोन इतिहासात लिहितो; Enter पर्यायांकडे परत जातो. ते स्क्रीनवर जे आहे ते वाचते.

- `D`: दोन बिंदू, {{cmd:DIST}} प्रमाणे.
- `R`: `Select arc or circle`; त्रिज्या आणि व्यास छापते.
- `A`: कंस (त्याचा समाविष्ट कोन), एक रेषा आणि मग दुसरी रेषा (त्यांच्यामधील कोन, त्यांच्या दूरच्या टोकांच्या दिशेने), किंवा {{key:Enter}} आणि तीन बिंदू (शिरोबिंदू, मग दोन टोके).
- `AR`: {{cmd:AREA}} प्रमाणे, एक क्षेत्र.

### ID

उपनाव नाही. `Specify point`; त्याचे X आणि Y छापते.

### LIST

उपनावे: `LI`, `LS`. `Select objects`; प्रत्येक वस्तूचा प्रकार, लेयर आणि मुख्य मोजमाप छापते.

### MASSPROP

{{cmd:MASSPROP}} तुम्ही निवडलेल्या प्रदेश आणि बंद वस्तूंचे विभाग गुणधर्म एकत्रितपणे देते: क्षेत्र, परिमिती, बाउंडिंग बॉक्स, केंद्रक, उगमापासून X आणि Y अक्षांभोवतीचे जडत्वाचे क्षण, जडत्वाचा गुणाकार, जडत्वाच्या त्रिज्या, केंद्रकाभोवतीचे तेच क्षण, आणि मुख्य क्षण त्यांच्या अक्षांच्या दिशांसह. प्रदेशातील छिद्रे छिद्र म्हणून मोजली जातात. आकडे ड्रॉइंग एककांत असतात आणि रेषा आणि कंसांनी बनलेल्या बाह्यरेषांसाठी अचूक असतात; एलिप्स आणि स्प्लाइन लहान सरळ खंड म्हणून मोजल्या जातात, आणि ते तसे सांगते. अहवालानंतर तो मजकूर फाइलमध्ये लिहायचा का ते विचारते. बंद नसलेल्या वस्तू सोडल्या जातात, आणि किती ते सांगते.

## दृश्य, फाइल आणि इतर

### ZOOM

उपनाव: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. विंडोसाठी दोन कोपरे क्लिक करा. `E`, `A` किंवा Enter: संपूर्ण ड्रॉइंग.
- `P` (Previous, किंवा टूलबारवरील {{ui:Previous}}) आधीच्या दृश्यावर परत जाते, प्रति टॅब 10 दृश्यांपर्यंत; चाकाच्या पायऱ्यांची मालिका किंवा एक पॅन एक दृश्य मोजली जाते.
- `2`, `2x` किंवा `0.5x` सारखी संख्या (किंवा `S` आणि मग संख्या) स्क्रीनच्या मध्याभोवती त्या घटकाने झूम इन किंवा आउट करते.
- `C` `Specify center point` आणि `Enter height or magnification (nX)` विचारते.

### PDFATTACH, PDFIMPORT आणि PDF कमांड

उपनावे: `PDFATT` {{cmd:PDFATTACH}} साठी, `PDFIM` {{cmd:PDFIMPORT}} साठी. {{cmd:PDFATTACH}} PDF पान ड्रॉइंगखाली ठेवते (फाइल, पान, घाला बिंदू, स्केल, फिरणे); {{cmd:PDFIMPORT}} पानाच्या रेषा, वक्र, भरणे आणि मजकूर PDF च्या नावाच्या लेयरवरील ड्रॉइंग वस्तू बनवते, खऱ्या आकारात, टाइप केलेल्या स्केलवर, किंवा दोन बिंदू आणि खऱ्या अंतरावरून स्केल केलेले. {{cmd:PDFCLIP}} अंडरले कापते, {{cmd:PDFADJUST}} फिकट, कॉन्ट्रास्ट, मोनोक्रोम सेट करते किंवा बंद करते, {{cmd:PDFLAYERS}} PDF चे स्वतःचे लेयर चालू किंवा बंद करते, आणि {{cmd:PDF}} ड्रॉइंगच्या अंडरले वापरत असलेल्या फाइल्स CadCraft ला पुन्हा देते. [PDF अंडरले](topic:pdf-underlay) पहा.

### AUTOCOMPLETE

उपनाव: `AUTOC`. ड्रॉइंग स्वयंपूर्ण: कोणतीही कमांड चालू नसताना, राखाडी भूत दाखवते की तुमच्या ड्रॉइंगचे स्वतःचे पॅटर्न पुढे काय सांगतात. {{cmd:AUTOCOMPLETE}} त्याला `On` किंवा `Off` करते (किंवा Settings › CadCraft) किंवा आता काय सुचवेल ते `Show` करते. **Tab** भूत एक undo पायरी म्हणून काढते, **Esc** ड्रॉइंग बदलेपर्यंत ते नाकारते. ते नवीनतम वस्तूंमध्ये तीन गोष्टी शोधते: दोनदा किंवा अधिक सम अंतरावर काढलेल्या गोष्टीची पुढची प्रत (स्टड, स्तंभ, जिन्याचा राइजर आणि ट्रेड), पॉलीलाइन जिन्याच्या पुढच्या पायऱ्या, आणि खोली किंवा भिंत साखळीची गहाळ बाजू. {{cmd:LINE}} किंवा {{cmd:PLINE}} च्या मध्यात भूत **पुढचा बिंदू** असतो: जिन्याची पुढची पायरी (राइजर, ट्रेड, राइजर…), आयताचा चौथा कोपरा, तो बंद करणारा बिंदू, किंवा आणखी एक समान पायरी. त्याच्या जवळ कर्सर आणा आणि **Tab** दाबा, जणू तिथे क्लिक केले; पुढे चला किंवा Enter दाबा. हा संगणकावर नियमांनी काढला जातो, कोणत्याही मॉडेलशिवाय.

### AUTOSHEET

उपनाव: `ASH`. स्वतः मांडणी करणाऱ्या शीट्स. {{cmd:AUTOSHEET}} ड्रॉइंगचे तुकडे घेते (तुमची नावाची दृश्ये, किंवा मॉडेलचे वेगळे तुकडे, किंवा संपूर्ण मॉडेल), कागद आकार निवडते (किंवा तुम्ही दिलेला), प्रत्येक तुकड्याला प्रमाणित स्केल देते (सर्वांसाठी एक, किंवा प्रत्येक जितका घेऊ शकतो तितका मोठा), आणि दृश्ये नव्या शीट्सवर ओळींत ठेवते, शीर्षक ब्लॉक आणि प्रत्येकाखाली मथळा (नाव आणि स्केल) सह. एका शीटवर न बसणारे स्वतःच्या शीटवर जाते. एक undo पायरी. हे संगणकावर नियमांनी काढले जाते, मॉडेलशिवाय.

### PHOTOSKETCH

उपनाव: `PSK`. फोटो स्केचचे ड्रॉइंग. कागदावरील हाताच्या स्केचचा फोटो (JPEG, PNG किंवा TIFF) निवडा. {{cmd:PHOTOSKETCH}} कागदाचे चार कोपरे शोधते, दृष्टीकोन सरळ करते, तुम्ही दिलेला कागद आकार (`Paper`, किंवा जवळचा प्रमाणित) आणि स्केचचा `Scale` (1 : n) घेते, मग पेन रेषा रेषा, कंस आणि वर्तुळांत ट्रेस करते, प्रत्येक पेन रंगासाठी एक लेयर (काळा, लाल, निळा, हिरवा). कागदाची कड सापडली नाही तर संपूर्ण फोटो शीट म्हणून घेते आणि ते सांगते. अक्षरे वगळली जातात. एक undo पायरी. हे क्लासिक इमेज प्रोसेसिंगने संगणकावर होते, मॉडेलशिवाय, कुठेही काही न पाठवता. स्कॅन केलेल्या ड्रॉइंग कमांडही पहा.

### AUTODIM

उपनाव: `ADIM`. नियमांनी ऑटो-डायमेन्शन. {{cmd:AUTODIM}} निवडलेल्या वस्तू (किंवा संपूर्ण ड्रॉइंग) त्यांच्या पातळी आणि लंब कडांवरून डायमेन्शन करते: तुम्ही निवडलेल्या बाजूंनी डायमेन्शनची साखळी (`Sides`), त्याच्या बाहेरील एक एकूण डायमेन्शन, प्रत्येक उघड्याची रुंदी (सरळ भिंत रेषांमधील अंतर), प्रत्येक छिद्र आकारासाठी व्यास, आणि `Grid` सह ग्रिड रेषांमधील अंतर. आधीच असलेला डायमेन्शन पुन्हा बनवला जात नाही. एक undo पायरी. हे संगणकावर नियमांनी, मॉडेलशिवाय काढले जाते.

### GRIDMOVE

उपनाव: `GM`. ग्रिड रेषा हलवल्याने संच सोबत जातो. {{cmd:GRIDMOVE}} ग्रिड रेषा (लेयरवरील रेषा ज्याचे नाव grid किंवा axis म्हणते) आणि तिच्यावर लटकलेले हलवते: रेषेवर टोक असलेल्या भिंती तिचे अनुसरण करण्यासाठी ताणल्या जातात, तिच्या बाजूने भिंती पूर्ण हलतात, स्तंभ (रेषेवरील ब्लॉक संदर्भ आणि वर्तुळे), तिचा बबल आणि टॅग हलतात, आणि ज्या डायमेन्शनचे बिंदू तिच्यावर आहेत ते नवे अंतर मोजतात. दोन बिंदू (फक्त रेषेपलीकडचा भाग मोजला जातो) किंवा `Distance` द्या. एक undo पायरी सर्व परत आणते. हे संगणकावर नियमांनी होते.

### DETAILS

उपनाव: `DET`. तुम्हाला शोधणारे तपशील. {{cmd:DETAILS}} तुमच्या फर्मचे स्वतःचे तपशील ठेवते: `Add` या ड्रॉइंगचा ब्लॉक यादीत टाकते, `List` आणि `Remove` ते व्यवस्थापित करतात, आणि `Find` निवडलेल्या वस्तूसाठी (किंवा तुम्ही शेवटी काढलेल्यासाठी) ते त्यांच्या लेयर, ब्लॉक नावे, हॅच पॅटर्न आणि नोट्सवरील शब्दांनुसार, प्रत्येक तपशिलाच्या नाव आणि नोट्सशी जुळवून क्रम लावते, म्हणून खिडकीचे डोके तुमचे खिडकीच्या चौकटीवरील फ्लॅशिंग शोधते. क्रमांक आणि बिंदू निवडा आणि ते ठेवा. `Hint` चालू (Settings › CadCraft मध्येही) असताना, जुळणारे काहीतरी निवडल्यास स्टेटस बारमध्ये एक ओळ येते. यादी या ब्राउझरमध्ये, या संगणकावर ठेवली जाते, आणि तीच यादी शोधली जाते. `Share` ती तुमच्या Documents फोल्डरमध्येही ठेवते (`.cadcraft/firm-details.json`, प्रत्येक ब्लॉकच्या ड्रॉइंगसह): `Pull` तुमच्या टीमकडे आहे आणि तुमच्याकडे नाही ते जोडते, `Push` तुमच्याकडे आहे आणि त्यांच्याकडे नाही ते जोडते, `Both` दोन्ही करते, आणि दोन्ही बाजूंपैकी काहीही कधीही काढले जात नाही. आधी Documents फोल्डर उघडा ({{cmd:DOCUMENTS}}); ते फोल्डर Team Cloud Plan फोल्डर असल्यास, संपूर्ण टीम एक यादी सामायिक करते. लायब्ररी पॅनेलमधील तपशील आयटमला **Add to my firm's details** बटण आहे, जे ते त्याच यादीत ठेवते. संगणकावर शब्दांनुसार, मॉडेलशिवाय.

### SKETCHFIX

उपनाव: `SKF`. पेन स्केच अचूक भूमिती बनतात. एका वेळी एक मुक्तहस्त स्ट्रोक दाबून ड्रॅग करा (पेन, माउस किंवा बोट), मग Enter. प्रत्येक स्ट्रोक रेषा, वर्तुळ, कंस, आयत किंवा पॉलीलाइन म्हणून वाचला जातो: जवळजवळ आडव्या आणि उभ्या रेषा अचूक आडव्या आणि उभ्या केल्या जातात, बंद गोल स्ट्रोक वर्तुळ बनतो, काटकोन असलेले चार कोपरे असलेला बंद स्ट्रोक आयत बनतो, आणि स्ट्रोकची टोके एकत्र ओढली जातात आणि ड्रॉइंगमध्ये आधीच असलेल्या टोकांवर. एक undo पायरी. हे संगणकावर नियमांनी होते, मॉडेलशिवाय.

### SCANATTACH आणि स्कॅन केलेल्या ड्रॉइंग कमांड

उपनावे: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} ला उपनाव नाही. ते चित्रावर काम करतात, प्रत्येकी एक undo पायरी. {{cmd:SCANATTACH}} PNG, JPEG, TIFF (एक पान किंवा सर्व) किंवा चित्र असलेले PDF पान घालते. {{cmd:SCANSCALE}} शीटला त्यावरील दोन निवडलेल्या बिंदूंवरून आणि खऱ्या अंतरावरून स्केल करते. {{cmd:SCANALIGN}} शीटला दोन बिंदूंवर हलवते आणि फिरवते (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} शीटच्या लांब रेषांचा कोन दाखवते आणि तुम्ही `Accept` किंवा `Value` दिल्यावर शीट फिरवते. {{cmd:SCANCLEAN}} ते काळे-पांढरे करते (`Threshold` Auto/Adaptive/Level, `Specks`) आणि `Run`. {{cmd:SCANCROP}} एक विंडो ठेवते. {{cmd:SCANERASE}} `Rectangle`, `Polygon` किंवा `Lasso` मिटवते. {{cmd:SCANTRACE}} नव्या लेयरवर रेषा आणि कंस ट्रेस करते (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) आणि काय सापडले आणि काय रास्टर म्हणून राहिले ते सांगते. {{cmd:SCANINFO}} मूळ फाइल आणि टप्पे यादी करते. {{cmd:RASTERSNAP}} स्कॅन केलेल्या शीट्सच्या रेषांवर स्नॅप चालू (On) किंवा बंद (Off) करते. स्कॅन केलेले ड्रॉइंग आणि ट्रेस हा विषय पहा.

### REGEN आणि REGENALL

उपनावे: {{cmd:REGEN}} साठी `RE`, {{cmd:REGENALL}} साठी `REA`. ड्रॉइंगवरून स्क्रीनवर जे काढले आहे ते पुन्हा बनवते: {{cmd:REGEN}} तुम्ही पाहत असलेला टॅब (शीटवर, त्याचे व्ह्यूपोर्ट दाखवत असलेले मॉडेलही), {{cmd:REGENALL}} प्रत्येक टॅब, प्रत्येक विभाजित-स्क्रीन पेन आणि प्रत्येक उघडलेले ड्रॉइंग. स्क्रिप्ट केलेल्या किंवा खूप मोठ्या बदलानंतर चित्र जुने दिसते, किंवा सहाय्यकाने ड्रॉइंग संपादित केले तेव्हा वापरा; ड्रॉइंग स्वतः स्पर्श होत नाही, म्हणून undo करण्यासारखे काही नाही.

### NAMEDVIEW

उपनावे: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, मग दृश्याचे नाव. `S` स्क्रीनवरील दृश्य जतन करते, `W` तुम्ही निवडलेली विंडो, `R` जतन केलेले दृश्य दाखवते, `D` एक हटवते, `?` या टॅबची दृश्ये यादी करते. विद्यमान नावाखाली जतन केल्यास ते बदलते; प्रत्येक बदल एक undo पायरी आहे. दृश्ये ज्या टॅबवर जतन झाली त्याची असतात. DWG आणि DXF फाइल्स त्यांना ठेवतात (VIEW तक्ता); शीटची दृश्ये पहिल्या शीटवर परत येतात, कारण फाइल सांगत नाही की कोणती.

### UNDO आणि REDO

उपनाव: `U` {{cmd:UNDO}} साठी; {{cmd:REDO}} ला उपनाव नाही. तसेच {{key:Mod+Z}} आणि {{key:Mod+Y}}.

### LAYER

उपनाव: `LA`. {{ui:Layers}} पॅनेलवर जाते.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` किंवा नाव (`?` त्यांची यादी करते: Continuous, ड्रॉइंगचा स्वतःचा, आणि DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE त्यांच्या `2` (अर्धा) आणि `X2` (दुप्पट) आकारांसह). {{cmd:LWEIGHT}} (`LW`): नव्या वस्तूंसाठी लाइनवेट mm मध्ये, किंवा `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): ड्रॉइंगचा लाइनटाइप स्केल (undo करण्यायोग्य). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — स्टेटस बारमधील {{ui:LWT}} बटणासारखेच. [लाइनवेट आणि लाइनटाइप](topic:units-papers-scales#line-weights-and-linetypes) पहा.

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, मग नवे नाव; वस्तू किंवा संदर्भ अनुसरतात. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` {{key:Enter}} पर्यंत, मग `Select object on target layer or [Name]` आणि `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, मग `Y`: लेयर आणि त्यावरील प्रत्येक वस्तू जातात (लेयर 0, DEFPOINTS किंवा चालू लेयर नाही). प्रत्येकी एक undo पायरी. [लेयरसह ड्रॉइंग व्यवस्थित करा](topic:layers#rename-merge-and-delete-layers) पहा.

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

वस्तू निवडून लेयर; तसेच {{ui:Layers}} पॅनेलच्या {{ui:Tools}} मेनूमध्ये. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, मग {{key:Enter}}: इतर प्रत्येक लेयर बंद होतो. {{cmd:LAYUNISO}} त्यांना परत चालू करते. {{cmd:LAYOFF}} आणि {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (किंवा गोठवलेला), पुन्हा पुन्हा; `U` शेवटचा परत घेते, {{key:Enter}} संपवतो. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} प्रत्येक लेयर चालू करते, {{cmd:LAYTHW}} प्रत्येक लेयर विरघळवते. प्रत्येक कमांड एक undo पायरी आहे. [वस्तू निवडून लेयरवर काम करा](topic:layers#work-on-layers-by-picking-objects) पहा.

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} एक रिकामे ड्रॉइंग सुरू करते आणि {{cmd:OPEN}} DWG किंवा DXF उघडते, प्रत्येक ड्रॉइंगवर स्वतःच्या टॅबमध्ये (न वापरलेले नवे ड्रॉइंग नवा टॅब न बनवता वापरले जाते). न जतन केलेले बदल असलेला टॅब बंद करताना आधी विचारले जाते. [स्क्रीन विभाजित करा](topic:split-screen) पहा.

{{cmd:SAVE}} (उपनाव `QSAVE`, तसेच {{key:Mod+S}}) ड्रॉइंगच्या स्वरूपात प्रत डाउनलोड करते: DWG जर DWG मधून उघडले असेल, DXF जर DXF मधून. नवे ड्रॉइंग या ब्राउझरमध्ये शेवटचे Save as मध्ये निवडलेले स्वरूप वापरते, नाहीतर DWG.

{{cmd:SAVEAS}} (तसेच {{key:Mod+Shift+S}}) {{ui:Save a copy as}} संवाद उघडते: {{ui:DWG}} (आणि त्याची {{ui:Version}}), {{ui:DXF R12}} किंवा {{ui:DXF 2000}} निवडा, मग {{ui:Save}}. निवड या ड्रॉइंगसाठी आणि या ब्राउझरमधील नव्या ड्रॉइंगसाठी टिकते.

{{cmd:DXFOUT}} नेहमी DXF R12 प्रत डाउनलोड करते, {{cmd:SAVE}} वापरत असलेले स्वरूप न बदलता.

[फाइल्स: काय उघडते, काय जतन होते](topic:files#saving) पहा.

### TOUR

उपनाव: `TUTORIAL`. सहा-पायऱ्यांचा पहिले-ड्रॉइंग दौरा पुन्हा सुरू करते. [सुरुवात](topic:getting-started#prefer-to-be-guided) पहा.

### TOOLBARDOCK

उपनाव: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. [सेटिंग्ज](topic:settings#toolbar-position) पहा.

### COMMANDLINE

उपनाव: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: कमांड लाइन जोडते किंवा तरंगवते, एक ओळ करते, किती इतिहास ओळी दाखवायच्या (0 ते 12) ते विचारते, किंवा इतिहास उघडते. [सेटिंग्ज](topic:settings#command-line) पहा.

### TOPAREA

`Top area [Standard/Compact]`: ड्रॉइंगवरील पट्ट्या पूर्वीप्रमाणे, किंवा कॉम्पॅक्ट. [सेटिंग्ज](topic:settings#top-area) पहा.

### POLARANG

`Enter polar angle step in degrees <90>`: {{ui:Polar}} ट्रॅकिंग ओळी ज्या अंतराने जुळतात ते पाऊल (0 पेक्षा जास्त, 180 पर्यंत). या ब्राउझरमध्ये ठेवले.

### UNITS

उपनाव: `UN`. लांबी कशी लिहिली आणि टाइप केली जाते.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural आणि Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. इतर: `Enter number of decimal places (0 to 8)`.

नवे डायमेन्शन त्याचे अनुसरण करतात. एक undo पायरी. {{ui:Current settings}} मधील {{ui:Length format}} आणि {{ui:Precision}} सारखेच; [फूट आणि इंच](topic:units-papers-scales#feet-and-inches-and-fractions) पहा.

### GDSIN

उपनाव: `GDS`. IC लेआउट पाहा (GDSII स्ट्रीम फाइल): lab spike, फक्त पाहणे आणि मोजणे यासाठी.

- फाइल पिकर `.gds` फाइल घेतो; अनेक टॉप सेल असल्यास, `Enter the top cell to draw`.
- प्रत्येक लेयर आणि डेटाटाइप एक ड्रॉइंग लेयर बनतो (`GDS 1`, `GDS 2/5`), संदर्भ आणि अॅरे सपाट, फाइलच्या वापरकर्ता एककात (सहसा मायक्रोमीटर) ठेवले जातात. एक undo पायरी. काहीही सिम्युलेट किंवा तपासले जात नाही आणि फाइल परत लिहिली जात नाही.

### DIAGRAM

उपनावे: `TEXTDIAGRAM`, `T2D`. मजकुरातून आकृती.

- बॉक्स मजकूर घेतो (किंवा कमांड लाइनवर `;` ने वेगळी एक ओळ): Mermaid फ्लोचार्ट, PlantUML घटक आकृती, D2 किंवा from-to यादी.
- `Specify the top left corner of the diagram`, मग `Specify the text height`.

ब्लॉक आणि जोडणारे `Diagram` लेयरवरील साध्या वस्तू असतात, संपल्यावर निवडलेल्या. एक undo पायरी. [मजकुरातून आकृती काढा](topic:text-to-diagram) पहा.

### OLELIST

उपनाव: `OLES`. DWG मध्ये असलेल्या OLE वस्तू ज्या CadCraft स्वतः ठेवू शकत नाही.

- प्रत्येक एक यादी करते: क्रमांक, प्रकार, आकार, चित्र जतन केले आहे का.
- `Enter an option [Place/eXit] <eXit>`: Place क्रमांक, खालचा डावा कोपरा आणि रुंदी विचारते, आणि चित्रासह चौकट काढते. एक undo पायरी; ठेवलेली वस्तू बदलली जात नाही. [चित्रे](topic:pictures#objects-from-other-programs-ole) पहा.

### SHXFONTS

उपनाव: `SHX`. तुमचे स्वतःचे SHX फॉन्ट.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} फोल्डरमधील प्रत्येक `.shx` वाचते (CadCraft Studio; प्रत्येक सुरुवातीला पुन्हा), {{ui:Files}} निवडलेल्या फाइल घेते (ब्राउझर), {{ui:Reverse}} एका फॉन्टची अक्षरे शेवटची-पहिली मांडते. लोड केलेला फॉन्ट नाव देणारे मजकूर शैली त्यात काढले जातात. [तुमच्या स्वतःच्या SHX फॉन्टमध्ये मजकूर काढा](topic:shx-fonts) पहा.

### LIMITS

ड्रॉइंग किती मोठे असावे.

- `Specify lower left corner or [ON/OFF] <current>`: एक बिंदू, `ON` किंवा `OFF`.
- `Specify upper right corner <current>`.

ग्रिड मर्यादा भरतो, {{cmd:ZOOM}} All त्या दाखवतो, आणि मर्यादा ON असताना बाहेरचा बिंदू नाकारला जातो (`**Outside limits`). एक undo पायरी; DWG आणि DXF मध्ये जतन. [ड्रॉइंग मर्यादा सेट करा](topic:drawing-limits) पहा.

### AUNITS

उपनाव: `ANGUNITS`. कोन कसे दाखवले आणि टाइप केले जातात.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, किंवा इतर दोनसाठी `Enter precision` (0 अंश, 2 मिनिटे, 4 सेकंद, सेकंदाचे 5 ते 8 दशांश).

एक undo पायरी; DWG आणि DXF मध्ये जतन. {{ui:Current settings}} मधील {{ui:Angle format}} सारखेच. [बेअरिंग आणि कोन टाइप करा आणि दाखवा](topic:bearings-and-angles) पहा.

### APPLOAD

उपनावे: `AP`; किंवा {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. {{ui:Load applications}} संवाद: `.lsp` रूटीन आणि `.dcl` संवाद फाइल्स लोड करा, अनलोड करा, इतिहासातून पुन्हा लोड करा, आणि स्टार्टअप सूट. रूटीनची `(defun c:NAME …)` कमांड मग इतर कोणत्याही कमांडप्रमाणे चालते. [अॅप्लिकेशन लोड करा](topic:load-applications) आणि [LISP रूटीन चालवा](topic:run-lisp) पहा.

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (किंवा {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) तुमची उपनाव फाइल (`ALIAS, *COMMAND` ओळी) उघडते; {{ui:Save}} ती लागू करतो. {{cmd:REINIT}} ती पुन्हा लागू करते. [कमांड उपनावे संपादित करा](topic:command-aliases) पहा.

### OPTIONKEYS

उपनावे: `OPTKEYS`; किंवा {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} › {{ui:Edit…}}. तुमची पर्याय अक्षरे फाइल (`COMMAND.OPTION, LETTERS` ओळी, जसे `ARRAY.PO, P`) उघडते; {{ui:Save}} ती लागू करतो आणि {{cmd:REINIT}} पुन्हा लागू करते. [कमांड पर्यायांना स्वतःची अक्षरे द्या](topic:option-letters) पहा.

### LISPEDIT

उपनाव: `VLIDE`; किंवा {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. LISP संपादक उघडते, ड्रॉइंगच्या शेजारी उघडी राहणारी विंडो.

- मजकूर: ओळ क्रमांक, कर्सरवरील कंसाचा जोडीदार चिन्हांकित (जोडीदार नसल्यास लाल), {{key:Enter}} नव्या ओळीला उघड्या कंसाखाली इंडेंट करते, {{key:Tab}} दोन जागा टाइप करते, {{key:Esc}} मजकुरातून बाहेर पडते.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): प्रत्येक फॉर्म वाचते, जसे {{cmd:APPLOAD}} फाइलने करते, आणि त्याचे `c:` कमांड बनवते. फाइल {{cmd:APPLOAD}} च्या यादीत दिसते.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): निवडलेले फॉर्म, किंवा कर्सर ज्यात आहे तो फॉर्म मूल्यांकित करते.
- {{ui:Stop}}: चालणारे रूटीन संपवते.
- {{ui:Console}}: रूटीनने काय छापले, आणि प्रत्येक त्रुटी तिच्या ओळीसह; त्रुटीवर क्लिक करून तिथे जा. मजकूर एका वेळी एक वरच्या-स्तरीय फॉर्म चालवला जातो, म्हणून ओळ त्या फॉर्मची असते, किंवा त्याच्या आत, त्रुटी नाव देणारे फंक्शन बोलावणारी ओळ.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): `.lsp` फाइल. मजकूर या ब्राउझरमध्येही ठेवला जातो, त्यामुळे विंडो बंद केल्याने तो हरवत नाही.
- मजकुराजवळ: रूटीनने परिभाषित केलेली फंक्शन्स, ते बोलावते पण या LISP कडे अजून नाहीत अशी, ते बोलावते पण त्यात परिभाषित नाहीत किंवा अंगभूत नाहीत अशी, आणि जे अंगभूत आहे आणि नाही त्याची पूर्ण यादी.

कंस न बंद झालेला किंवा कधीही न संपणारी स्ट्रिंग असलेला मजकूर चालवला जात नाही: ओळ नाव दिली जाते. पायरीपायरीने डीबगर, ब्रेकपॉइंट किंवा वॉच विंडो नाही. [LISP रूटीन चालवा](topic:run-lisp) पहा.

### HELP

उपनाव: `?`. प्रत्येक कमांड, तिची उपनावे आणि एका ओळीचे वर्णन कमांड लाइन इतिहासात छापते. ही मदत उघडत नाही: त्यासाठी {{key:F1}} दाबा किंवा {{ui:Help}} क्लिक करा.

## निवड प्रॉम्प्ट

कोणत्याही `Select objects` प्रॉम्प्टवर: वस्तूंवर क्लिक करा, विंडो (डावीकडून उजवीकडे) आणि क्रॉसिंग (उजवीकडून डावीकडे) दोन क्लिकने काढा, किंवा लॅसो दाबून ड्रॅग करा ({{key:Space}} ड्रॅग करताना: विंडो, क्रॉसिंग, फेन्स), काढण्यासाठी {{key:Shift}}+क्लिक, आणि पूर्ण करण्यासाठी {{key:Enter}} दाबा. तुम्ही `ALL` (सर्व), `L` (शेवटची वस्तू), `P` (Previous: शेवटच्या कमांडने वापरलेले), `F` (Fence: बिंदूंची रेषा ओलांडणाऱ्या वस्तू; `U` बिंदू परत घेतो), `W` (Window), `C` (Crossing), `R` (Remove मोड: उचललेल्या वस्तू काढते; प्रॉम्प्ट `Remove objects` म्हणतो) आणि `A` (पुन्हा Add) टाइप करू शकता. `?` त्यांची यादी करते. ते प्रॉम्प्टमध्ये दाखवले जात नाहीत. एकमेकांवर पडलेल्या वस्तूंवर {{key:Tab}} पुढचा हायलाइट करतो; उचलण्यासाठी क्लिक करा. [वस्तू निवडा](topic:select-objects) पहा.

### ACCESS

उपनाव: `AX`. दृष्टीशिवाय ड्राफ्टिंग. {{cmd:ACCESS}} Access चालू किंवा बंद करते (`On`, `Off`), आणि स्नॅप आवाज (`Sound`) आणि बोललेल्या कमांड (`Voice`) बदलते; आधी स्थिती सांगते. Access चालू असताना, प्रत्येक कमांड आणि निकाल तुमच्या स्क्रीन रीडरद्वारे बोलले जातात, आणि ड्रॉइंग क्षेत्रात कीबोर्ड कर्सर असतो. "दृष्टीशिवाय ड्राफ्टिंग" मदत विषयात कळा आहेत.

### DESCRIBE

उपनाव: `DESC`. ड्रॉइंगमध्ये काय आहे ते सांगते: किती वस्तू, कोणत्या प्रकारच्या, किती मोठ्या, किती लेयर, काय निवडलेले. फक्त वाचते; काहीही बदलत नाही.

### WHEREAMI

उपनाव: `WHERE`. कर्सर कुठे आहे ते ड्रॉइंगच्या एककात सांगते.

### NEARBY

कर्सरजवळ काय आहे ते सांगते, सर्वात जवळचे आधी, प्रत्येकाचे अंतर आणि ती बाजू यासह.

### SAYSEL

निवडलेले काय आहे ते सांगते, प्रत्येक वस्तूसाठी एक वाक्य (रेषेची लांबी, टोके आणि कोन; वर्तुळाची त्रिज्या आणि केंद्र; मजकूर जसा लिहिला तसा).

### VOICE

बोललेल्या कमांड चालू किंवा बंद करते. त्या या संगणकावर ओळखल्या जातात; ब्राउझर ते करू शकत नसेल तर, Settings मध्ये ब्राउझरची ऑनलाइन सेवा निवडल्याशिवाय आवाज बंद राहतो.

### TOUCHCROSSHAIR

उपनाव: `TCX`. बोटाने ड्राफ्टिंगसाठी ऑफसेट क्रॉसहेअर, त्यामुळे बोटाचे टोक तुम्ही निवडलेला बिंदू झाकत नाही. चालू असताना, ड्रॉइंगवरील एक बोट निवड करत नाही: ते बोटाच्या वर आणि एका बाजूला बसणारा क्रॉसहेअर हलवते. ऑब्जेक्ट स्नॅप आणि ट्रॅकिंग क्रॉसहेअरचे अनुसरण करतात. बोट उचलल्यास काहीही निवडले जात नाही आणि क्रॉसहेअर तिथेच राहतो. निवडण्यासाठी ड्रॉइंगच्या कोपऱ्यातील {{ui:Click}} बटण दाबा, किंवा दुसऱ्या बोटाने ड्रॉइंगवर कुठेही टॅप करा. दुसरे बोट हलवताना {{ui:Click}} धरल्यास ड्रॅग होते (निवड विंडो, लॅसो, ग्रिप). स्थिर दाबलेले बोट, किंवा {{ui:Enter}} बटण, म्हणजे Enter. दोन बोटे पूर्वीप्रमाणे पॅन आणि झूम करतात. खालच्या काठाजवळ आणि दूरच्या बाजूच्या काठाजवळ क्रॉसहेअर बोटाच्या जवळ येतो, म्हणून ड्रॉइंगचा प्रत्येक भाग पोहोचता येतो. पेन आणि माउस नेहमी थेट निवडतात.

{{cmd:TOUCHCROSSHAIR}} स्थिती सांगते आणि `ON`, `OFF`, `Auto` (फक्त जिथे बोट एकमेव पॉइंटर आहे तिथे चालू, म्हणून माउस असलेल्या संगणकावर बंद), `Distance` (क्रॉसहेअर बोटापासून किती दूर, 24 ते 240 पिक्सेल) किंवा `Side` (`Left`: वर आणि डावीकडे, उजव्या हातासाठी; `Right` डाव्या हातासाठी; बटणे दुसऱ्या कोपऱ्यात जातात) विचारते. तीच निवड Settings › CadCraft मध्ये आहे, आणि टच स्क्रीन असलेल्या उपकरणावर स्टेटस बारमध्ये {{ui:Offset crosshair}} स्विच आहे. निवड या ब्राउझरमध्ये ठेवली जाते.

### WHOHAS

ड्रॉइंग कोणी उघडले आहे ते सांगते. संगणकावरील CadCraft Studio मध्ये DWG किंवा DXF उघडल्यावर त्याच्या बाजूला एक छोटी लॉक फाइल लिहिली जाते (`Plan.dwg.cclock`: कोण, कधीपासून, कोणती आवृत्ती), ती ड्रॉइंग उघडे असताना दर मिनिटाला रिफ्रेश होते, आणि ड्रॉइंग बंद केल्यावर काढली जाते. कोणीतरी उघडलेले ड्रॉइंग उघडल्यावर कोण आणि कधीपासून ते सांगते, आणि {{ui:Open read-only}} (नंतर Save नवे नाव विचारते), {{ui:Open anyway}} (दुसऱ्या व्यक्तीला त्यांच्या पुढच्या रिफ्रेशवर कळवले जाते), किंवा {{ui:Cancel}} देते. कोणीतरी उघडलेल्या फाइलवर जतन करताना आधी विचारले जाते. पाच मिनिटे रिफ्रेश न झालेला लॉक जुना म्हटला जातो: दुसरी प्रत बचत न करता बंद झाली किंवा संगणक झोपलेला आहे.

{{cmd:WHOHAS}} विचारते `Current` (उघडलेले ड्रॉइंग), `File` (एक निवडा), `FOlder` (फोल्डर निवडा: त्यातील प्रत्येक ड्रॉइंग जे कुठेतरी उघडे आहे ते यादी होते), `Path` (पूर्ण मार्ग टाइप करा) किंवा `Name` (इतरांना दिसणारे नाव; तुम्ही साइन इन असल्यास तुमच्या खात्याचे नाव). Studio फक्त तुम्ही निवडलेल्या फोल्डरपर्यंत पोहोचू शकते: कधीही न निवडलेल्या फोल्डरमधील उघड्या ड्रॉइंगसाठी ते एकदा सांगते की ड्रॉइंग उघडे आहे अशी नोंद करता येत नाही; `FOlder` फोल्डर निवडते, आणि तेव्हापासून तिथे लॉक चालतात. लॉक लोकांसाठी एक सूचना आहे, अडथळा नाही: दुसरा प्रोग्राम अजूनही फाइल लिहू शकतो. ब्राउझरमध्ये फोल्डर पाहण्यासाठी नसतात, आणि कमांड ते सांगते.

### OVERKILL

डुप्लिकेट वस्तू मिटवते आणि आच्छादित रेषा आणि कंस नीट करते, दुहेरी रेषांनी भरलेल्या ड्रॉइंगसाठी. `Select objects to clean up`, {{key:Enter}}, मग दाखवलेल्या सेटिंग्जसह स्वच्छ करण्यासाठी पुन्हा {{key:Enter}}, किंवा आधी एक बदला:

- `Tolerance`: दोन निर्देशांक एकसारखे मानले जाण्यासाठी किती जवळ हवेत (सुरुवातीला 0.000001; 0 म्हणजे अगदी सारखे).
- `Ignore`: दोन वस्तू अन्यथा सारख्या असताना भिन्न असू शकणारे गुणधर्म. नाव टाइप करून स्विच करा: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, किंवा `None` / `All`. झाल्यावर {{key:Enter}}.
- `Overlap`: चालू किंवा बंद. चालू असताना, एका सरळ रेषेवरील आच्छादित रेषा एक रेषा होतात (दुसऱ्या आत असलेली रेषा फक्त मिटवली जाते), आणि एका वर्तुळावरील आच्छादित कंस एक कंस होतात; पूर्ण फेरी बंद करणारे कंस वर्तुळ होतात, आणि वर्तुळावरील कंस मिटवला जातो.
- `Ends`: चालू किंवा बंद. चालू असताना, एका सरळ रेषेवरील रेषा आणि एका वर्तुळावरील कंस जे फक्त टोकाला टोक स्पर्श करतात ते एक तुकडा होतात.

प्रत्येक प्रकारच्या वस्तूची डुप्लिकेटसाठी तपासणी होते: दोन वस्तू डुप्लिकेट असतात जेव्हा त्यांची भूमिती सहनशीलतेच्या आत सारखी असते आणि त्यांचा लेयर, रंग, लाइनटाइप, लाइनटाइप स्केल, लाइनवेट, जाडी, पारदर्शकता आणि उंची जुळते (तुम्ही दुर्लक्षित केलेले वजा). रेषा आणि उघड्या पॉलीलाइन उलट दिशेने काढल्या असतानाही जुळतात. ड्रॉइंग-क्रमात पहिली वस्तू राहते आणि स्वतःचे गुणधर्म ठेवते. कमांड किती वस्तू तपासल्या आणि मिटवल्या ते सांगते: डुप्लिकेट, विलीन आच्छादित तुकडे, टोकाला टोक जोडलेले तुकडे. एक {{cmd:UNDO}} सर्व परत आणतो. सेटिंग्ज तुम्ही ड्रॉइंग विंडो बंद करेपर्यंत टिकतात.

ते सोडते: लॉक केलेल्या लेयरवरील वस्तू आणि लपवलेल्या वस्तू. ते उंची (Z) असलेल्या रेषा विलीन करत नाही (त्यांच्या अचूक डुप्लिकेट तरीही जातात), आणि पॉलीलाइनच्या आतील खंडांना हात लावत नाही (ते पातळ केले जात नाहीत), पॉलीलाइनच्या खंडावरील रेषेला, आणि उलट काढलेल्या बंद पॉलीलाइनला.

### DRAWORDER

कोणत्या वस्तू समोर काढल्या जातात ते बदलते. `Select objects to re-order`, {{key:Enter}}, मग `Above objects`, `Under objects`, `Front` किंवा `Back` ({{key:Enter}} = `Back`). `Above objects` आणि `Under objects` संदर्भ वस्तू विचारतात: निवड त्यांपैकी सर्वात पुढच्या वस्तूच्या अगदी समोर, किंवा सर्वात मागच्या वस्तूच्या अगदी मागे जाते. निवडलेल्या वस्तू त्यांच्यातील स्वतःचा क्रम राखतात. एक undo पायरी. क्रम DWG आणि DXF मध्ये ड्रॉइंगसोबत जतन होतो, जिथे तो वस्तू लिहिल्या जातात तो क्रम आहे.

स्क्रीनवर प्रत्येक वस्तू ड्रॉइंगच्या क्रमाने काढली जाते, जसे इतर प्रोग्राम फाइल उघडताना काढतात: घन हॅच, रुंद पॉलीलाइन किंवा मजकूर मास्क त्याच्या मागच्या रेषा आणि मजकूर झाकतो, आणि त्याच्या समोरील त्याला झाकते. रेषा मजकुराला ओलांडते तिथे दोन्ही दिसतात. चित्रे आणि जोडलेली PDF पाने रेषांच्या खाली राहतात. खूप मोठ्या ड्रॉइंगमध्ये, जिथे भरणे आणि रेषा 256 पेक्षा जास्त वेळा आच्छादित आणि एकाआड एक होतात, तिथे पहिल्या 256 त्यांचा क्रम ठेवतात आणि बाकीचे भरणे रेषांखाली काढले जातात, म्हणजे पुन्हा काढणे वेगवान राहते.

### TEXTTOFRONT

ड्रॉइंग जागेतील इतर सर्वांच्या समोर मजकूर, डायमेन्शन आणि लीडर आणते: `Text`, `Dimensions`, `Leaders` किंवा `All` ({{key:Enter}} = `All`). एक undo पायरी. काहीच नसल्यास, किंवा ते आधीच समोर असल्यास ते सांगते.

### HATCHTOBACK

ड्रॉइंग जागेतील प्रत्येक हॅच बाकी सर्वांच्या मागे पाठवते, जेणेकरून भरणे जतन केलेल्या फाइलमध्ये रेषा आणि मजकूर झाकत नाहीत. प्रॉम्प्ट नाहीत. एक undo पायरी.

### ISOLATEOBJECTS

उपनाव: `ISOLATE`. फक्त निवडलेल्या वस्तू दाखवते: या जागेतील बाकी सर्व UNISOLATEOBJECTS पर्यंत नजरेआड. {{cmd:LAYISO}} च्या विपरीत हे तुम्ही उचललेल्या वस्तूंवर काम करते, त्यांचे लेयर काहीही असोत, आणि कोणताही लेयर बदलत नाही. लपवलेल्या वस्तू काढल्या जात नाहीत, उचलल्या जात नाहीत, त्यांना स्नॅप होत नाही, त्यांच्यावर झूम होत नाही, किंवा छापल्या जात नाहीत, आणि `ALL` घेणाऱ्या कमांड त्यांना वगळतात. वस्तू वेगळ्या असताना तुम्ही जे काढता ते नेहमीप्रमाणे दिसते.

हे फक्त सत्रासाठी आहे: यातील काहीही ड्रॉइंगसोबत जतन होत नाही, ती एक undo पायरी नाही, आणि ड्रॉइंग पुन्हा उघडल्यावर सर्व काही दिसते. वस्तू लपवलेल्या असताना स्टेटस बारमध्ये त्यांच्या संख्येचे एक बटण दिसते; ते दाबल्यास त्या पुन्हा दिसतात.

### HIDEOBJECTS

UNISOLATEOBJECTS पर्यंत निवडलेल्या वस्तू लपवते. {{cmd:ISOLATEOBJECTS}} सारखेच नियम: फक्त सत्रासाठी, जतन होत नाही, undo पायरी नाही.

### UNISOLATEOBJECTS

उपनावे: `UNISOLATE`, `UNHIDE`. ISOLATEOBJECTS किंवा HIDEOBJECTS ने लपवलेली प्रत्येक वस्तू पुन्हा दाखवते, आणि किती परत आल्या ते सांगते.

### LAYLOCKFADE

लॉक केलेल्या लेयरवरील वस्तू कशा दिसतात आणि क्लिक त्यांच्यापर्यंत पोहोचतो का ते सेट करते. सध्याची स्थिती सांगते, मग घेते:

- 0 ते 90 मधील संख्या: टक्केवारीत फिकट होण्याचे प्रमाण (सुरुवातीला 50). 0 फिकट होणे बंद करते.
- `ON` किंवा `OFF`: फिकट होणे चालू किंवा बंद, प्रमाण ठेवून.
- `Pick`, मग `Yes` किंवा `No`: कोणतीही कमांड चालू नसताना लॉक केलेल्या लेयरवरील वस्तू क्लिक निवडू शकतो का? `No` (डीफॉल्ट): त्या अजिबात उचलता येत नाहीत. `Yes`: क्लिक किंवा विंडो त्या निवडते, म्हणजे {{ui:Properties}} त्या दाखवू शकते; तरीही त्या बदलता येत नाहीत, आणि कमांडचे स्वतःचे `Select objects` त्या कधीही घेत नाही.

ऑब्जेक्ट स्नॅप दोन्ही प्रकारे लॉक केलेल्या लेयरवरील वस्तू शोधतात. प्लॉट कधीही फिकट होत नाहीत. दोन्ही सेटिंग्ज तुमच्या आहेत, ड्रॉइंगच्या नाहीत, आणि {{ui:Settings}} मध्ये {{ui:Locked layers}} अंतर्गतही आहेत.

### BURST

ब्लॉक संदर्भ फोडते आणि त्यांच्या विशेषता जे सांगतात ते ठेवते. `Select block references to burst`, {{key:Enter}}: प्रत्येक संदर्भ ब्लॉकच्या वस्तूंनी बदलला जातो, आणि प्रत्येक दिसणाऱ्या विशेषतेचे मूल्य त्या विशेषतेच्या स्वतःच्या लेयरवर साधा मजकूर होते (लेयर 0 वरील विशेषता संदर्भाच्या लेयरवर जाते, ब्लॉकच्या इतर लेयर 0 वरील वस्तूंप्रमाणे). ब्लॉकच्या आतील ब्लॉक ब्लॉक संदर्भच राहतो. एक undo पायरी; किती संदर्भ फुटले आणि किती विशेषता मूल्ये मजकूर झाली ते सांगते.

जोडलेले ड्रॉइंग नावाने नाकारते (आधी ते bind करा, किंवा {{cmd:NCOPY}} ने त्यातून कॉपी करा), आणि निवडलेल्या इतर वस्तूंना हात लावत नाही. ब्लॉक संदर्भांसाठी {{cmd:EXPLODE}} त्याच वस्तू देते; {{cmd:BURST}} फक्त ब्लॉक संदर्भ घेते आणि विशेषता मजकूर मोजते.

### TXT2MTXT

उपनाव: `T2M`. एक-ओळी मजकुरांना एका परिच्छेद मजकुरात जोडते. `Select single-line text to join`, {{key:Enter}}, मग `Paragraph` (ओळी एकत्र धावतात आणि सर्वात रुंद ओळीच्या रुंदीवर गुंडाळतात) किंवा `Lines` (प्रत्येक मजकूर स्वतःची ओळ राहतो); {{key:Enter}} शेवटी वापरलेला घेतो. ओळी वरपासून खालपर्यंत, मग डावीकडून उजवीकडे, वरच्या मजकुराच्या दिशेने क्रमाने लावल्या जातात. परिच्छेद वरच्या मजकुराच्या वरच्या-डाव्या कोपऱ्यातून लटकतो, आणि त्याची उंची, फिरणे, शैली, लेयर आणि रंग घेतो. एक undo पायरी.

आधीच परिच्छेद मजकूर असलेला मजकूर, रिकामा मजकूर आणि निवडीतील इतर वस्तू सोडल्या जातात, आणि कमांड किती ते सांगते.

### NCOPY

ब्लॉक संदर्भ किंवा जोडलेल्या ड्रॉइंगमधून वस्तू काहीही फोडल्याशिवाय ड्रॉइंगमध्ये कॉपी करते. `Pick an object inside a block reference or a linked drawing`: जवळच्या वस्तूची प्रत जिथे ती दिसते तिथे बनते, किती ब्लॉक खोलवर असली तरी; आणखी उचला, मग {{key:Enter}}. पुढे `Base point to move the copies`: {{key:Enter}} त्यांना जागेवर ठेवतो, किंवा बेस बिंदू आणि दुसरा बिंदू द्या. संपूर्ण कमांड एक undo पायरी.

प्रत ती जिथे दिसते तो लेयर घेते: ब्लॉकमधील लेयर 0 वरील वस्तू ज्या संदर्भात होती त्याच्या लेयरवर जाते, आणि ByBlock रंग त्या संदर्भाचा रंग होतो. जोडलेल्या ड्रॉइंगमधून, `Plan|Walls` लेयर `Plan$0$Walls` होतो (जोडणी त्याला देणारे नाव), जोडलेल्या लेयरच्या रंग, लाइनटाइप आणि लाइनवेटसह बनवलेला. विशेषतेचे मूल्य मजकूर म्हणून कॉपी होते. लॉक केलेल्या लेयरवरील ब्लॉक संदर्भ उचलता येत नाहीत.

### FLATTEN

निवडलेल्या वस्तूंची उंची (Z) आणि जाडी 0 सेट करते. `Select objects to flatten`, {{key:Enter}}. निवड वापरत असलेल्या ब्लॉक व्याख्यांमधील वस्तूंनाही (आणि त्यांच्या आतील ब्लॉकलाही) सपाट करते, म्हणून त्या ब्लॉकचा प्रत्येक संदर्भ बदलतो; जोडलेली ड्रॉइंगे जशी आहेत तशी सोडली जातात. एक undo पायरी; किती वस्तू बदलल्या ते सांगते, आणि कोणत्याही वस्तूला उंची किंवा जाडी नव्हती तेव्हा तसे सांगते.

2D ड्रॉइंगमध्ये CadCraft तिसऱ्या परिमाणाचे काय ठेवते: वर्तुळे, कंस, एलिप्स, बिंदू, मजकूर, ब्लॉक संदर्भ, हॅच, लीडर आणि पॉलीलाइनवर उंची (त्यांची एलिव्हेशन), रेषेच्या प्रत्येक टोकावर उंची, आणि रेषा, वर्तुळे, कंस, पॉलीलाइन, बिंदू आणि मजकुरावर जाडी, फाइलमध्ये होत्या तशा. {{cmd:FLATTEN}} नेमके तेच साफ करते. ते टॅब 3D वरील 3D मॉडेलला, 3D चेहऱ्यांना किंवा घनांना स्पर्श करत नाही, आणि फाइल उघडताना ड्रॉइंग प्लेनमध्ये आणलेली तिरकी प्लेनमधील वस्तू आधीच आणली गेली होती.

### BREAKLINE

तोडण्याच्या चिन्हासह रेषा काढते, लहान केलेल्या दृश्यासाठी. सध्याचा आकार आणि विस्तार सांगते, मग `First point of the break line` (किंवा आधी बदलण्यासाठी `Size` / `Extension`), `Second point`, आणि `Where the break symbol sits`: रेषेच्या बाजूने क्लिक करा, किंवा मधल्यासाठी {{key:Enter}}. निकाल सध्याच्या लेयरवर एक पॉलीलाइन आहे: रेषा, प्रत्येक बिंदूच्या पलीकडे विस्ताराने, आकाराइतकी उंच आणि अर्धी लांब Z-आकाराच्या स्ट्रोकसह.

`Size` आणि `Extension` तुमच्या सेटिंग्ज म्हणून लक्षात ठेवले जातात (आकार मजकूर उंचीच्या दुप्पट आणि डायमेन्शन स्केलने सुरू होतो; विस्तार आकाराच्या निम्मा). {{key:Enter}} कमांड पुन्हा चालवतो.

### AUDIT

उघडे ड्रॉइंग नुकसानीसाठी तपासते आणि दुरुस्त करते. {{cmd:AUDIT}} मॉडेलमधील, शीटवरील आणि ब्लॉकच्या आतील प्रत्येक वस्तू आणि लेयर तक्ता तपासते, आणि प्रकारानुसार काय सापडले ते यादी करते:

- अंत नसलेली किंवा अवास्तव मोठी संख्या;
- आकार नसलेल्या वस्तू: लांबी नसलेली रेषा, त्रिज्या नसलेले वर्तुळ, एक बिंदू असलेली पॉलीलाइन, अक्षरे किंवा उंची नसलेला मजकूर, शून्य स्केलचा ब्लॉक संदर्भ;
- नसलेल्या लेयरवरील वस्तू; तिथे नसलेले ब्लॉक संदर्भ; ड्रॉइंगमध्ये नसलेली मजकूर आणि डायमेन्शन शैली नावे आणि लाइनटाइप नावे;
- स्वतः धरून असलेले ब्लॉक, थेट किंवा इतर ब्लॉकमधून;
- सामायिक ओळख, की किंवा फाइल हँडल असलेल्या वस्तू;
- ज्या बिंदूंपासून ते मोजले जातात त्याशिवायचे डायमेन्शन, आणि बंद बाह्यरेषा नसलेली बाउंडरी असलेले हॅच.

मग ते `Fix them? [Yes/No]` विचारते. `No` काहीही बदलत नाही. `Yes` सर्व काही एका undo पायरीत दुरुस्त करते: जे काढता येत नाही ते काढले जाते (वाईट संख्या, आकार नसणे, गहाळ ब्लॉक, तुटलेला डायमेन्शन, वापरता येणारी बाउंडरी नसलेला हॅच, ब्लॉकचे वर्तुळ बंद करणारा संदर्भ); गहाळ लेयर बनवला जातो; अनोळखी शैली आणि लाइनटाइप नावे डीफॉल्टवर परत जातात; सामायिक की बदलली जाते. किती वस्तू काढल्या आणि किती दुरुस्त झाल्या ते छापते. समान निष्कर्ष Problems पॅनेलमध्येही दिसतात, प्रत्येक स्वतःच्या {{ui:Repair}} सह.

ते काहीही नाकारत नाही, पण फक्त CadCraft स्वतः काढते तेच तपासते: इतर प्रोग्रामसाठी ठेवलेला डेटा (3D घन, OLE वस्तू) उघडला जात नाही.

### RECOVER

खराब झालेली DXF किंवा DWG उघडते. {{cmd:RECOVER}} फाइल विचारते, वाचता येईल ते वाचते फाइल नाकारण्याऐवजी, काय वगळले किंवा गृहीत धरले ते यादी करते, मग {{cmd:AUDIT}} `Yes` सह करते तसे ड्रॉइंग तपासते आणि दुरुस्त करते.

- DXF: कोड आणि मूल्य जोडीचा भाग नसलेल्या ओळी जोड्या पुन्हा जुळेपर्यंत वगळल्या जातात; शेवट नसलेला विभाग बंद केला जातो; कापलेली फाइल कापलेल्या जागेपर्यंत वाचली जाते; कापलेली बायनरी DXF तिच्या शेवटच्या पूर्ण मूल्यापर्यंत वाचली जाते. विभाग, ब्लॉक किंवा वस्तू अजूनही वाचता येत नसल्यास ती वगळली जाते आणि नाव दिले जाते, आणि वाचन पुढे चालू राहते.
- DWG: त्यांच्या तपासण्या अयशस्वी होणाऱ्या किंवा डीकोड न होणाऱ्या वस्तू वगळल्या जातात, आणि हरवलेली वस्तू यादी वस्तू डेटामधून चालून पुन्हा बांधली जाते.

डिस्कवरील फाइल बदलत नाही. पुनर्प्राप्त ड्रॉइंग जतन न केलेले उघडते: ते नव्या नावाने जतन करा. ज्या फाइलमधून काहीच वाचता येत नाही ती कारणासह नाकारली जाते.

### LEGACYTEXT

जुन्या 8-बिट व्हिएतनामी फॉन्टमध्ये टाइप केलेला मजकूर Unicode मध्ये बदलते. लघु नावे `TEXTTOUNICODE` आणि `VNTEXT`.

जुन्या व्हिएतनामी ड्रॉइंगमध्ये त्यांचा मजकूर पाश्चात्त्य अक्षरांच्या रूपात असतो, जे फक्त फॉन्ट व्हिएतनामी बनवतो: ABC फॉन्टमधील TCVN3 मजकूर (`.VnTime`, `.VnArial`, आणि ज्या फॉन्टची नावे `H` ने संपतात ते मोठ्या अक्षरांचे फॉन्ट), आणि VNI फॉन्टमधील VNI मजकूर (`VNI-Times`). CadCraft असा मजकूर ड्रॉइंग उघडताच तो कसा वाचतो तसा दाखवतो, त्याच्या मजकूर शैलीच्या फॉन्टने, वस्तूच्या फॉन्टने, किंवा परिच्छेद मजकुरातील रनच्या फॉन्टने; फाइलमध्ये अजूनही जुनी अक्षरे आहेत.

{{cmd:LEGACYTEXT}} प्रत्येक एन्कोडिंगमध्ये किती मजकूर सापडले ते सांगते आणि `Convert … to Unicode?` विचारते. `Yes` प्रत्येकाला पुन्हा लिहिते (मॉडेल, शीट्स, ब्लॉक, विशेषता मूल्ये आणि व्याख्या), आणि मजकूर शैलींना Unicode फॉन्ट देते (Times New Roman, Arial किंवा Courier New जुन्या फॉन्टच्या प्रकारानुसार), एका undo पायरीत. परिच्छेद मजकुरातील फॉरमॅटिंग राखले जाते.

कोणताही मजकूर ज्ञात फॉन्ट वापरत नसेल (फॉन्ट नाव गमावलेली शैली), तेव्हा ते `Read selected texts as [Tcvn3/Vni/None]` विचारते: एन्कोडिंग निवडा आणि मजकूर निवडा. आधीच Unicode असलेला मजकूर सोडला जातो. डायमेन्शन मजकूर अधिभार आणि मल्टीलीडर मजकूर रूपांतरित होत नाहीत.
