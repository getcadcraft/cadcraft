---
title: आज्ञा संदर्भ
summary: CadCraft ड्राफ्टिंग ॲपमधील प्रत्येक आज्ञा, तिची उपनावे, विचारले जाणारे प्रश्न, पर्याय आणि डीफॉल्ट मूल्ये.
keywords: आज्ञा, उपनावे, आज्ञा यादी, क्षेत्रफळ, परिमिती, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

आज्ञेचे नाव किंवा उपनाव टाइप करा आणि {{key:Enter}} किंवा {{key:Space}} दाबा. अक्षरांची मोठी-लहान स्थिती महत्त्वाची नाही, आणि सुरुवातीचे `_`, `-`, `.` किंवा `'` दुर्लक्षित केले जातात. आज्ञा ओळ इतिहासातील प्रत्येक आज्ञेची छोटी यादी छापण्यासाठी `HELP` (किंवा `?`) टाइप करा; या मदतीसाठी {{key:F1}} दाबा.

प्रॉम्प्ट कसे वाचावेत: पर्याय चौकोनी कंसात असतात, आणि तुम्ही त्यांचे मोठे अक्षर टाइप करून एक निवडता (`D` म्हणजे व्यास). डीफॉल्ट टोकदार कंसात असतो; तो स्वीकारण्यासाठी {{key:Enter}} दाबा. जेथे बिंदू विचारला जातो, तेथे तुम्ही [निर्देशांक आणि अंतर प्रविष्टी](topic:coordinate-entry) मधील कोणताही स्वरूप क्लिक करून किंवा टाइप करून देऊ शकता. जेथे अंतर विचारले जाते, तेथे तुम्ही संख्या टाइप करू शकता किंवा दोन बिंदू क्लिक करू शकता.

बिंदू किंवा वस्तू आवश्यक असताना आणि डीफॉल्ट नसताना {{key:Enter}} दाबल्यास आज्ञा संपते. {{key:Esc}} ती रद्द करते. आज्ञेने जे काही केले ते एक पूर्ववत करा पायरी असते.

## रेखाटन

### LINE

उपनाव: `L`. सरळ खंड, प्रत्येक स्वतंत्र वस्तू.

- `Specify first point` (Enter: तुम्ही दिलेल्या शेवटच्या बिंदूपासून सुरू करा)
- `Specify next point [Undo]`, वारंवार. दोन खंडांनंतर: `[Undo/Close]`.
- `U` शेवटचा खंड मागे घेते, `C` पहिल्या बिंदूपर्यंत बंद करून संपवते. Enter दिल्यास आज्ञा संपते.

### PLINE

उपनाव: `PL`. रेषा आणि कंस खंडांची एक पॉलिलाइन.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (दोन खंड झाल्यावर Close)
- `A` कंसांकडे वळते: `Specify endpoint of arc [Line/CLose/Undo]`. प्रत्येक कंस आधीच्या खंडाला स्पर्शिका राहून पुढे जातो. `L` रेषांवर परत जाते, `CL` कंसाने बंद करते.
- Enter दिल्यास आज्ञा संपते; पॉलिलाइन उघडी राहते.

### CIRCLE

उपनाव: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` `Specify diameter of circle` विचारते.
- `2P`: व्यासाची दोन टोके. `3P`: वर्तुळावरील तीन बिंदू.
- `T` (तसेच आज्ञा `TTR`, आणि {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, मग दुसरी, नंतर त्रिज्या (Enter: शेवटची). वर्तुळ दोन्ही वस्तूंना स्पर्श करते (रेषा, कंस, वर्तुळे, पॉलिलाइन खंड, ब्लॉकच्या आतीलही); जी वर्तुळे असे करतात, त्यांपैकी तुमच्या निवडींच्या सर्वात जवळ स्पर्श करणारे. काहीही बसत नसल्यास "वर्तुळ अस्तित्वात नाही" दिसते.
- `TTT` (किंवा {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): तीन वस्तू; तिन्हींना स्पर्श करणारे वर्तुळ, तुमच्या निवडींच्या सर्वात जवळचे (तीन रेषा तुम्ही कुठे निवडता त्यानुसार आतील किंवा बाहेरील वर्तुळ देतात).

### ARC

उपनाव: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: तीन बिंदूंमधून जाणारा कंस.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. कंस सुरुवातीपासून शेवटपर्यंत घड्याळाच्या उलट दिशेने जातो.

### RECTANG

उपनावे: `REC`, `RECTANGLE`. बंद पॉलिलाइन.

- `Specify first corner point`, `Specify other corner point`. दुसऱ्या कोपऱ्यासाठी `@width,height` टाइप करा.

### POLYGON

उपनाव: `POL`. बंद पॉलिलाइन म्हणून नियमित बहुभुज.

- `Enter number of sides <4>` (3 ते 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: बिंदू क्लिक करा किंवा टाइप करा; त्याचे अंतर आकार ठरवते आणि त्याची दिशा बहुभुज फिरवते.

### ELLIPSE

उपनाव: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, नंतर दुसऱ्या अक्षापर्यंतचे अंतर.
- `I` (`Isocircle`, फक्त {{cmd:ISODRAFT}} चालू असताना): केंद्र, नंतर त्रिज्या किंवा `Diameter`: सध्याच्या आयसोमेट्रिक समतलावर वर्तुळ जसे दिसते तसे लंबवर्तुळ.

### HATCH

उपनावे: `H`, `BH`, `BHATCH`; किंवा टूलबारमधील {{ui:Hatch}}. प्रथम सध्याचा नमुना, स्केल आणि कोन छापते.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, वारंवार (क्षेत्र आल्यानंतर `Undo`): प्रत्येक क्लिक त्याभोवतीचे बंद क्षेत्र जोडते, आत असलेले बंद आकार बेट म्हणून. Enter त्या सर्वांचा मिळून एक हॅच बनवते.
- `S`: `Select closed objects` (बंद पॉलिलाइन, वर्तुळे, बंद लंबवर्तुळे).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (ग्रेडियंट): भरणा नमुन्याऐवजी ग्रेडियंट असतो. त्याचे प्रश्न पाहण्यासाठी {{cmd:GRADIENT}} पहा.

[हॅच आणि भरणा क्षेत्रे](topic:hatch) पहा.

### GRADIENT

उपनाव: `GD`. क्षेत्र एक किंवा दोन रंगांच्या ग्रेडियंटने भरते. ती आधी ग्रेडियंट विचारते, मग {{cmd:HATCH}} प्रमाणे पुढे जाते (`Pick internal point`, बंद वस्तूंसाठी `S`, पूर्ण करण्यासाठी {{key:Enter}}).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, वारंवार; प्रत्येक वेळी सध्याचा ग्रेडियंट छापते.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, किंवा त्यांपैकी एक उलटा (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). सुरुवातीची अक्षरे पुरेशी आहेत.
- `O`: एक रंग, नंतर त्याची 0 ते 1 मधील छटा (0 म्हणजे काळी छटा, 0.5 म्हणजे रंगच, 1 म्हणजे पांढरी छटा). `TW`: पहिला आणि दुसरा रंग. रंग म्हणजे 1 ते 255 मधील संख्या, `255,128,0` सारख्या तीन संख्या, किंवा `#rrggbb`.
- `A`: ग्रेडियंट ज्या कोनात जातो तो कोन. `C`: केंद्रित Yes किंवा No (No मुळे ग्रेडियंटचा मध्य एका बाजूला सरकतो).
- जो रंग किंवा प्रकार माहीत नाही, आणि 0 ते 1 बाहेरील छटा, ते नाकारते.

{{cmd:HATCHEDIT}} `G` आणि गुणधर्म (Gradient) नंतर ग्रेडियंट बदलतात, किंवा कोणताही हॅच त्यात बदलतात. ग्रेडियंट स्क्रीनवर काढला जातो आणि छापला जातो. DWG 2004 आणि नंतरचे ते खरा ग्रेडियंट हॅच म्हणून ठेवतात; DXF 2000 आणि DWG 2000 ते CadCraft साठी ठेवतात, आणि इतर प्रोग्रॅम्स पहिल्या रंगातील घन भरणा पाहतात.

### HATCHGENERATEBOUNDARY

उपनाव: `HGB`. ज्या हॅचची सीमा हरवली आहे तिची पुन्हा सीमा बनवते. `Select hatches` (किंवा आधी निवडा), नंतर `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- हॅचचा प्रत्येक लूप हॅचच्या लेयरवरील बंद पॉलिलाइन बनतो; नव्या पॉलिलाइन निवडलेल्या राहतात. वक्र कडा हॅच ठेवत असलेल्या लहान सरळ तुकड्यांच्या रूपात परत येते.
- Yes असल्यास हॅच {{cmd:HATCH}} ने बनवलेल्या हॅचप्रमाणे नव्या सीमेचे अनुसरण करतो. एक पूर्ववत करा पायरी.
- कोणताही हॅच निवडलेला नसल्यास ते तसे सांगते.

### POINT

उपनाव: `PO`; किंवा {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. बिंदू वस्तू, प्रत्येक क्लिकला एक, Enter पर्यंत.

- `Specify a point`

### XLINE

उपनाव: `XL`; किंवा {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. दोन्ही बाजूंनी अमर्याद रचना रेषा. [रचना रेषा आणि किरण](topic:construction-lines) पहा.

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, नंतर प्रत्येक रेषेसाठी `Specify through point`, Enter पर्यंत.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` आधी `Select a line object` विचारते.
- `B`: `Specify angle vertex point`, `Specify angle start point`, नंतर प्रत्येक रेषेसाठी `Specify angle end point`.
- `O`: `Specify offset distance [Through] <Through>`, नंतर प्रत्येक रेषेसाठी `Select a line object` आणि `Specify side to offset` (किंवा `Specify through point`).

### RAY

उपनाव नाही; किंवा {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`, नंतर प्रत्येक किरणासाठी `Specify through point`, Enter पर्यंत.

### TEXT

उपनावे: `DT`, `DTEXT`; किंवा टूलबारमधील {{ui:Text}}. एका ओळीचा मजकूर; प्रत्येक ओळ स्वतंत्र वस्तू.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, नंतर `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, वारंवार: प्रत्येक Enter खाली पुढची ओळ सुरू करते. रिकाम्या ओळीवर Enter दिल्यास संपते. येथे {{key:Space}} स्पेस टाइप करते.

### DIVIDE

उपनाव: `DIV`. {{cmd:DIVIDE}} रेषा, कंस, वर्तुळ, पॉलिलाइन, स्प्लाइन किंवा लंबवर्तुळावर खुणा ठेवते, ज्या त्याचे समान भाग करतात. वस्तू निवडा, मग भागांची संख्या द्या (2 ते 32767). उघड्या वस्तूला भागांपेक्षा एक खूण कमी मिळते; बंद वस्तूला सुरुवातीलाही खूण मिळते. वस्तू स्वतः कापली जात नाही. खुणा बिंदू असतात; `Block` त्याऐवजी या ड्रॉइंगमधील ब्लॉक विचारते, आणि तो वस्तूचे अनुसरण करण्यासाठी फिरावा की नाही. स्प्लाइन आणि लंबवर्तुळांवरील लांबी लहान जीवांनी मोजली जाते. मजकूर, हॅच आणि लांबी नसलेल्या इतर वस्तू ते नाकारते.

### MEASURE

उपनाव: `ME`. {{cmd:MEASURE}} रेषा, कंस, वर्तुळ, पॉलिलाइन, स्प्लाइन किंवा लंबवर्तुळावर दिलेल्या प्रत्येक लांबीवर खूण ठेवते, तुम्ही जेथे निवडले तेथील जवळच्या टोकापासून मोजत (बंद वस्तू: तिच्या सुरुवातीपासून). लांबी टाइप करून किंवा दोन बिंदूंनी द्या. उघड्या वस्तूच्या दूरच्या टोकाला खूण मिळत नाही. `Block` बिंदूऐवजी प्रत्येक खुणेवर ब्लॉक ठेवते. 0 लांबी, वस्तूपेक्षा मोठी लांबी, आणि 32767 हून अधिक खुणा देणारी लांबी ते नाकारते.

### BOUNDARY

उपनावे: `BO`, `BPOLY`. {{cmd:BOUNDARY}} तुम्ही निवडलेला बिंदू ज्या क्षेत्रात आहे त्याभोवती बंद पॉलिलाइन बनवते, स्क्रीनवर ते क्षेत्र मर्यादित करणाऱ्या रेषा, कंस, वर्तुळे, पॉलिलाइन आणि वक्रांपासून. कंस किंवा वर्तुळावर असलेले तुकडे कंस खंड म्हणून परत येतात; लंबवर्तुळ आणि स्प्लाइनचे तुकडे लहान सरळ खंड म्हणून परत येतात. `Islands` चालू असल्यास (सुरुवातीची सेटिंग) त्याच्या आतील प्रत्येक बंद क्षेत्राला स्वतःची पॉलिलाइनही मिळते. बिंदू निवडत राहा; Enter संपवते. क्षेत्र मर्यादित करणाऱ्या वस्तू जशा आहेत तशा राहतात. बिंदू धरणारे बंद क्षेत्र नसल्यास ते तसे सांगते.

### BLEND

{{cmd:BLEND}} दोन उघड्या वक्रांच्या टोकांदरम्यान स्प्लाइन काढते. जोडण्यासाठी प्रत्येक वक्र टोकाजवळ निवडा. `CONtinuity` `Tangent` (स्प्लाइन दोन्ही वक्रांच्या बाजूने सुटते आणि पोहोचते) किंवा `Smooth` (टोकांवर ते ज्या प्रकारे वाकतात तसेही वाकते) निवडते; निवड सत्रासाठी ठेवली जाते. दोन्ही वक्र बदलले जात नाहीत. बंद वस्तू आणि आधीच भेटणारी दोन टोके ते नाकारते.

### REGION

उपनाव: `REG`. {{cmd:REGION}} बंद वस्तूंचे प्रदेश बनवते: सपाट क्षेत्रे जी तुम्ही जोडू, कापू आणि मोजू शकता. वर्तुळे, बंद पॉलिलाइन, बंद लंबवर्तुळे किंवा बंद स्प्लाइन, किंवा टोकापासून टोकापर्यंत लूप बंद करणाऱ्या रेषा, कंस आणि उघड्या पॉलिलाइन निवडा; प्रत्येक लूप एक प्रदेश बनतो आणि ज्या वस्तूंपासून तो आला त्या बदलतो. कंस कंसच राहतात; लंबवर्तुळे आणि स्प्लाइन लहान सरळ खंड बनतात. जे बंद नाही आणि कोणताही लूप बंद करत नाही ते जसे आहे तसे राहते, आणि किती ते सांगते. ड्रॉइंगमध्ये प्रदेश म्हणजे एक किंवा अधिक बंद पॉलिलाइन, ज्या नाव नसलेल्या गटाप्रमाणे एकत्र धरल्या जातात; त्यामुळे एका क्लिकने संपूर्ण प्रदेश निवडला जातो आणि प्रत्येक प्रत हा स्वतःचा प्रदेश असतो; फाइल उघडणारे इतर प्रोग्रॅम बंद पॉलिलाइन पाहतात.

ड्रॉइंगमध्ये प्रदेश असताना, 2D टॅबवरील {{cmd:UNION}}, {{cmd:SUBTRACT}} आणि {{cmd:INTERSECT}} प्रदेशांवर चालतात: `UNION` निवडलेले प्रदेश एकात जोडते (जे एकमेकांपासून वेगळे आहेत ते बाह्यरेषांच्या एका प्रदेशात येतात), `SUBTRACT` ज्यातून वजा करायचे त्या प्रदेशांची आणि मग ज्या काढून टाकायच्या त्यांची विचारणा करते (छिद्र प्रदेशाचा भाग राहते), `INTERSECT` त्या सर्वांमध्ये सामायिक क्षेत्र ठेवते. प्रत्येक निकालाचे क्षेत्र सांगते आणि एक पूर्ववत करा पायरी असते. काहीही उरणार नसल्यास किंवा काहीही सामायिक नसल्यास ते नाकारतात. 3D टॅबवर, आणि प्रदेश नसलेल्या ड्रॉइंगमध्ये, तेच आज्ञा पूर्वीप्रमाणे घनवस्तूंवर चालतात.

## बदला

उपनावे: `MT`, `T`; किंवा टूलबारमधील {{ui:Paragraph}}. रुंदीनुसार गुंडाळणारा परिच्छेद मजकूर, जागेवरच टाइप केलेला.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: दोन कोपऱ्यांमधील रुंदी म्हणजे जेथे मजकूर गुंडाळतो ती जागा. `H` `Specify height` विचारते, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` आणि दुसरा कोपरा वगळते.
- नंतर ड्रॉइंगवर एक बॉक्स उघडतो: टाइप करा, नवीन परिच्छेदासाठी {{key:Enter}}, पूर्ण करण्यासाठी {{key:Mod+Enter}} किंवा बाहेर क्लिक, रद्द करण्यासाठी {{key:Esc}}. त्याची पट्टी उंची, ओळींमधील अंतर, रुंदी आणि संरेखन ठरवते. [मजकूर आणि लेबले जोडा](topic:text#write-a-note-that-wraps) पहा.

### TEXTEDIT

उपनावे: `ED`, `DDEDIT`; किंवा मजकुरावर दोनदा क्लिक करा. `Select a text to edit`, {{key:Enter}} पर्यंत वारंवार: प्रत्येक त्याच बॉक्समध्ये उघडतो. निवडलेल्या किंवा दोनदा क्लिक केलेल्या मजकुरावर सुरू केल्यास ते तो एकच संपादित करते आणि संपते.

### ERASE

उपनावे: `E`, `DELETE`; किंवा वस्तू निवडलेल्या असताना {{key:Delete}} दाबा.

- `Select objects` (वस्तू आधीच निवडलेल्या असल्यास वगळले जाते)

### MOVE

उपनाव: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, `dx,dy` असे टाइप केलेले.

### COPY

उपनावे: `CO`, `CP`. तुम्ही जितके बिंदू द्याल तितक्या वेळा कॉपी करते.

दुसऱ्या बिंदूच्या प्रॉम्प्टवर `Array` एकाच वेळी एक रांग बनवते: वस्तूंची संख्या द्या (मूळ वस्तू एक मोजली जाते), मग पहिली प्रत जिथे जाईल तो बिंदू; बाकीच्या त्याच अंतराने येतात. `Fit` त्या बिंदूला त्याऐवजी शेवटच्या प्रतीची जागा बनवते, आणि बाकीच्या मध्ये समान अंतरावर पसरतात.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, Enter पर्यंत वारंवार. `U` शेवटची प्रत मागे घेते.

### ROTATE

उपनाव: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: अंश, घड्याळाच्या उलट दिशा धनात्मक; किंवा त्या दिशेने फिरवण्यासाठी बिंदूवर क्लिक करा.

### SCALE

उपनाव: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: `0.5` किंवा `2` सारखा गुणक टाइप करा. क्लिक केलेला बिंदू आधार बिंदूपासूनचे त्याचे अंतर गुणक म्हणून देतो.

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
- दोन जोड्या असल्यास: `Scale objects based on alignment points? [Yes/No] <N>`

[वस्तू संरेखित करा](topic:modify-objects#align-objects) पहा.

### ALIGNTO

- `Select objects` (किंवा निवड), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` बिंदू विचारते. निवड कायम राहते.

### DISTRIBUTE

- `Select objects` (किमान तीन), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. बाहेरील दोन जागी राहतात; निवड कायम राहते.

### ALIGNPANEL

उपनाव: `ALP`; किंवा {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. क्लिकने ALIGNTO आणि DISTRIBUTE चालवणारा पॅनल उघडते.

### LASER

उपनाव: `LASERCUT`; किंवा {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. ड्रॉइंगवर लेझर पॅनल उघडते: प्रत्येक लेयर काय करतो (कापणे, रेघ मारणे, कोरणे, भरणे, चित्र), पूर्वावलोकन, जतन करण्यासाठी GRBL G-code, आणि Web Serial द्वारे फ्रेमिंग व पाठवणे. [ड्रॉइंग लेझरकडे पाठवा](topic:laser-cutting) पहा.

### STRETCH

उपनाव: `S`; किंवा {{ui:Stretch}}. `Select objects to stretch`: हलवायच्या टोकांवर आडव्या निवड खिडक्या ओढा (किंवा `C` टाइप करा). `Specify base point [Displacement]`, `Specify second point`. खिडक्यांच्या आतील बिंदू हलतात: रेषांची टोके, पॉलिलाइनचे शिरोबिंदू (कंस खंड त्यांची उंची ठेवतात), डायमेन्शन बिंदू; वर्तुळे, लंबवर्तुळे, मजकूर, बिंदू आणि ब्लॉक त्यांचे केंद्र किंवा समाविष्ट बिंदू आत असल्यास पूर्णपणे हलतात. आज्ञेपूर्वी केलेली निवड ज्या खिडक्या (आणि लॅसो) तयार केल्या त्या कायम ठेवते, त्यामुळे त्या त्याच प्रकारे ताणल्या जातात. खिडकीशिवाय वस्तू पूर्णपणे हलतात.

### ARRAY, ARRAYRECT, ARRAYPOLAR

उपनाव: `AR`; किंवा {{ui:Array}}. `Select objects`, नंतर `Enter array type [Rectangular/POlar] <Rectangular>` (फक्त ARRAY साठी).

- आयताकार 4 स्तंभ × 3 ओळींपासून सुरू होतो, वस्तूंच्या आकाराच्या 1.5 पट अंतरावर, पूर्वावलोकन म्हणून दिसतो. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` स्तंभ आणि ओळी विचारते, `S` स्तंभांमधील आणि ओळींमधील अंतर (ऋण असल्यास डावीकडे किंवा खाली), `COL` आणि `R` प्रत्येकी एक दिशा.
- पोलार `Specify center point of array` विचारते, पूर्ण वर्तुळभर 6 वस्तूंपासून सुरू होतो, फिरवलेला. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` वस्तू, `F` भरायचा कोन (+ घड्याळाच्या उलट, − घड्याळाच्या दिशेने), `ROT` Yes किंवा No.
- {{key:Enter}} (eXit) साध्या वस्तू म्हणून प्रती बनवते. एक पूर्ववत करा पायरी.
- `AS` (ASsociative) साध्या प्रती आणि संपादनयोग्य राहणारी अॅरे यांदरम्यान बदलते: एक वस्तू जी तुम्ही नंतर {{cmd:ARRAYEDIT}} ने, तिच्या ग्रिपने किंवा गुणधर्मांमध्ये बदलता. निवड लक्षात ठेवली जाते ({{cmd:ARRAYASSOCIATIVITY}}); ती साध्या प्रतींवर सुरू होते.

### ARRAYPATH

वक्रावर बाजूने प्रती बनवते. `Select objects`, नंतर `Select path curve`: रेषा, कंस, वर्तुळ, लंबवर्तुळ, पॉलिलाइन किंवा स्प्लाइन (अॅरे केल्या जाणाऱ्या वस्तूंपैकी एक नाही). मार्ग वस्तूंच्या जवळच्या टोकापासून सुरू होतो, आणि पहिली वस्तू जिथे आहे तिथेच असते.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, पूर्वावलोकनासह. `M`: `Divide` वस्तू संपूर्ण मार्गावर समान पसरवते, `Measure` त्यावर ठराविक अंतरावर एक ठेवते. `I`: वस्तूंची संख्या (Measure सह, 0 म्हणजे बसतील तितक्या; मार्गाच्या शेवटाबाहेरील संख्या बसतील तेवढ्यापर्यंत मर्यादित केली जाते). `SP`: मार्गावरील वस्तूंमधील अंतर (Measure वर बदलते). `AL`: Yes प्रत्येक वस्तू मार्गाचे अनुसरण करण्यासाठी फिरवते, No त्या सरळ ठेवते.
- {{cmd:ARRAY}} प्रमाणे `AS`. ते चालू असताना अॅरे मार्गाच्या आकाराची स्वतःची प्रत ठेवते: नंतर मार्ग वक्र संपादित केल्यास वस्तू हलत नाहीत.
- वक्र नसलेला मार्ग आणि एक वस्तू ते नाकारते.

### ARRAYEDIT

ASsociative सह बनवलेली अॅरे बदलते. `Select array` (किंवा आधी निवडा). अॅरे सध्या काय आहे ते छापते, मग {{key:Enter}} पर्यंत विचारते:

- आयताकार: `COL` स्तंभ आणि त्यांचे अंतर, `R` ओळी आणि त्यांचे अंतर, `A` स्तंभ ज्या कोनात जातात तो कोन.
- पोलार: `I` वस्तू, `F` भरण्याचा कोन, `ROT` वस्तू फिरवायच्या Yes किंवा No.
- मार्ग: `M` Divide किंवा Measure, `I` वस्तू, `SP` अंतर, `AL` मार्गाशी संरेखित.
- `S` (Source) अॅरे पुनरावृत्त करत असलेल्या वस्तू स्वतंत्रपणे उघडते, ब्लॉक संपादकाप्रमाणे. तेथे काढा आणि संपादित करा; {{cmd:ARRAYCLOSE}} जतन करते किंवा टाकते, आणि प्रत्येक वस्तू त्याचे अनुसरण करते.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, नंतर बदलायच्या वस्तूंवर क्लिक करा, {{key:Enter}}. त्या वस्तू त्याऐवजी बदली दाखवतात; बदली वस्तू ड्रॉइंग सोडून अॅरेमध्ये राहतात. `RES` (RESet) प्रत्येक वस्तूत मूळ वस्तू पुन्हा दाखवते.
- प्रत्येक बदल एक पूर्ववत करा पायरी असतो. साध्या प्रती, साधा ब्लॉक संदर्भ आणि लॉक केलेल्या लेयरवरील अॅरे ते नाकारते.

तीच संख्या गुणधर्मांमध्ये Array खाली असतात, आणि अॅरेला ग्रिप असतात: तिचा आधार बिंदू तिला हलवतो, दुसऱ्या वस्तूवरील ग्रिप अंतर ठरवते, शेवटच्या वस्तूपलीकडील ग्रिप संख्या ठरवते (पोलार: दुसरी वस्तू किती वस्तू, शेवटची वस्तू भरण्याचा कोन ठरवते). {{cmd:EXPLODE}} अॅरेला पुन्हा साध्या प्रतींमध्ये बदलते.

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} Source संपवते: `Save the changes to the array's source objects? [Save/Discard] <Save>`. अॅरेच्या स्रोत वस्तू उघड्या नसल्यास ते तसे सांगते. {{cmd:BCLOSE}} तेच करते.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR आणि {{cmd:ARRAYPATH}} कशावर सुरू होतात ते ठरवते; त्यांचा `AS` पर्याय तीच सेटिंग बदलतो. या ब्राउझरमध्ये लक्षात ठेवली जाते.

### OFFSET

उपनाव: `O`. रेषा, कंस, वर्तुळे आणि पॉलिलाइन.

पॉलिलाइन बाहेरच्या दिशेने सरकते आणि तिचे सरळ खंड कोपऱ्यावर वेगळे होतात तेथे {{cmd:OFFSETGAPTYPE}} ठरवते की अंतर कसे बंद होते.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, नंतर `Specify point on side to offset` (किंवा Through सह, `Specify through point`), Enter पर्यंत वारंवार.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: {{cmd:OFFSET}} पॉलिलाइनच्या बाहेरील कोपऱ्यांवरील अंतर कसे बंद करते. `0` खंड भेटेपर्यंत वाढवते (सुरुवातीची सेटिंग), `1` जुन्या कोपऱ्याभोवतीच्या कंसाने त्यांना जोडते, `2` सरळ कापाने. आतील कोपरे आणि कंस खंड प्रभावित होत नाहीत. हे सत्रासाठी ठेवले जाते.

### EXTRIM

{{cmd:EXTRIM}} कडेच्या एका बाजूवरील सर्व काही छाटते. कापण्याची कड निवडा (रेषा, कंस, वर्तुळ, पॉलिलाइन, लंबवर्तुळ, स्प्लाइन किंवा रचना रेषा), मग साफ करायच्या बाजूवरील बिंदू निवडा: कडेला ओलांडणारी प्रत्येक रेषा, कंस, वर्तुळ, पॉलिलाइन आणि रचना रेषा त्या बाजूचा भाग गमावते, जेथे तो कडेपासून सुरू होतो. बाजू निवडताना जाणारे तुकडे पॉइंटरचे अनुसरण करतात. बंद कडेसाठी बाजू आतील आणि बाहेरील असतात. फक्त कडेला स्पर्श करणाऱ्या वस्तू, आणि तिला ओलांडणारे मजकूर, हॅच, स्प्लाइन आणि लंबवर्तुळे जशा आहेत तशा राहतात. एक पूर्ववत करा पायरी.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: {{cmd:TRIM}} आणि {{cmd:EXTEND}} कसे सुरू होतात. `1` Quick: प्रत्येक वस्तू कापण्याची कड किंवा सीमा असते. `0` Standard: आधी कडा विचारतात. LISP मध्ये `(setvar "TRIMEXTENDMODE" 0)` देखील.

### TRIM

उपनाव: `TR`. प्रथम `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` छापते. Quick मोडमध्ये दृश्यमान प्रत्येक वस्तू कापण्याची कड असते, आणि जी वस्तू कोणीही ओलांडत नाही ती पुसली जाते; Standard मोडमध्ये ते प्रथम `Select cutting edges (Enter = every object)` विचारते आणि फक्त त्यांवरच कापते.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, वारंवार: काढायचा तुकडा क्लिक करा (पॉइंटर त्यावर असताना तो राखाडी आणि ठिपकेदार दिसतो), अनेक तुकड्यांमधून मार्ग ओढा (सर्व एका पायरीत जातात), किंवा त्यांमधील कुंपणासाठी दोन रिकाम्या जागांवर क्लिक करा. {{key:Shift}} त्याऐवजी वाढवते. `T` कापण्याच्या कडा निवडते (Standard मोड), `F` कुंपण बिंदू विचारते, `C` दोन खिडकी कोपरे (अंशतः आत असलेले तुकडे जातात), `O` `Enter a trim mode option [Quick/Standard]` विचारते, `E` `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE) विचारते, `R` तुम्ही निवडलेल्या वस्तू पुसते, `U` शेवटची निवड किंवा ओढणे पूर्ववत करते. Enter संपवते. [छाटा आणि वाढवा](topic:trim-and-extend) पहा.

- हॅचवर क्लिक केल्यास हॅच कापला जातो: कापण्याच्या कडा हॅच केलेले क्षेत्र विभागतात, आणि तुम्ही क्लिक केलेला तुकडा काढून घेतला जातो (जेथे तो होता तेथे काढलेली बाह्यरेषा उरत नाही). हॅच त्याचा नमुना किंवा ग्रेडियंट ठेवतो; सीमेशी जोडलेला हॅच नंतर जोडलेला राहत नाही, कारण तो आता तिला भरत नाही. तेथे कोणतीही कापण्याची कड हॅच विभागत नसल्यास, क्लिक हॅचच्या बाहेर असल्यास, आणि काहीही उरणार नसल्यास ({{cmd:ERASE}} वापरा) ते तसे सांगते. ओढलेला मार्ग किंवा कुंपण हॅच कापत नाही.

### EXTEND

उपनाव: `EX`. TRIM ची उलट आवृत्ती: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. एक क्लिक जवळच्या टोकाला पुढच्या सीमेपर्यंत लांब करते; ओढलेला मार्ग किंवा कुंपण ओलांडलेली प्रत्येक वस्तू लांब करतो; {{key:Shift}} छाटते. `B` सीमा कडा निवडते (Standard मोड). Mode आणि Edge TRIM सोबत सामायिक आहेत.

### LINKVIEWS

उपनाव: `SYNCVIEWS`; किंवा {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, किंवा ड्रॉइंग टॅबवरील लिंक चिन्ह. `Link the panes' views [ON/OFF]` (Enter दुसरी स्थिती घेते): चालू असताना सक्रिय पॅनमधील पॅन किंवा झूम त्याच प्रकारची जागा दाखवणारा प्रत्येक पॅन हलवते. [स्क्रीन विभाजित करा](topic:split-screen) पहा.

### OPENIN3D

उपनाव नाही; किंवा {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}}, जेथे 3D मॉडेलिंग ॲप हस्तांतरित ड्रॉइंग घेते. ते तेथे नव्या टॅबमध्ये DWG म्हणून उघडते (काहीही अपलोड होत नाही). ब्राउझरने टॅब अडवल्यास ते तसे सांगते.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: रिकाम्या जागी दाबून ओढल्यावर काय काढले जाते. सेटिंग्ज › CadCraft › निवडीसाठी ओढणे सारखेच. [लॅसो निवड](topic:lasso-selection) पहा.

### FILLET

उपनाव: `F`. रेषा, कंस, वर्तुळे आणि पॉलिलाइन. प्रथम `Current settings: Mode = TRIM, Radius = 0` छापते.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` `Specify fillet radius <last>` विचारते. `T` `Enter Trim mode option [Trim/No trim]` विचारते: No trim सह वस्तू जशा आहेत तशा राहतात आणि फक्त कंस जोडला जातो.
  - `M` {{key:Enter}} पर्यंत आणखी कोपऱ्यांसाठी आज्ञा चालू ठेवते; `U` आज्ञा न सोडता शेवटचा कोपरा मागे घेते.
  - `P` `Select 2D polyline [Radius]` विचारते आणि दोन सरळ खंड भेटतील तेथील प्रत्येक कोपरा गोल करते. तिच्याकडे आधीच असलेले फिलेट नव्या त्रिज्येने बदलले जातात; त्रिज्या 0 त्यांना काढून टाकते. ज्या कोपऱ्यांच्या बाजू त्रिज्येसाठी खूप लहान आहेत ते सोडले जातात आणि मोजले जातात.
- `Select second object or shift-select to apply corner [Radius]`. त्रिज्या कोणतीही असो, टोकदार कोपऱ्यासाठी क्लिक करताना {{key:Shift}} धरा.

तुम्हाला ठेवायच्या भागावर प्रत्येक वस्तू क्लिक करा. न भेटणाऱ्या दोन रेषा वाढवल्या जातात. दोन समांतर रेषांमधील अंतरावर अर्धवर्तुळ मिळते, तुमच्या क्लिकच्या सर्वात जवळच्या पहिल्या रेषेच्या टोकाला. वर्तुळ कधीच कापले जात नाही. एका पॉलिलाइनचे शेजारी असलेले दोन खंड पॉलिलाइनच्या आतील कंस मिळवतात; पॉलिलाइन आणि दुसरी वस्तू तेव्हा चालतात जेव्हा कट पॉलिलाइनच्या पहिल्या किंवा शेवटच्या खंडावर पडतो.

### CHAMFER

उपनाव: `CHA`. रेषा आणि पॉलिलाइनचे सरळ खंड. प्रथम सध्याची अंतरे (किंवा लांबी आणि कोन) छापते.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` `Specify first chamfer distance <last>` आणि `Specify second chamfer distance <the first>` विचारते: पहिले तुम्ही निवडलेल्या पहिल्या रेषेतून कापले जाते, दुसरे दुसऱ्या रेषेतून.
  - `A` `Specify chamfer length on the first line` आणि `Specify chamfer angle from the first line` विचारते.
  - `E` (mEthod) पुढील चेम्फर दोनपैकी कोणती पद्धत वापरेल ते निवडते. `T`, `M`, `U` आणि `P` {{cmd:FILLET}} प्रमाणे चालतात.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+क्लिक टोकदार कोपरा बनवते.

रेषेपेक्षा लांब अंतर नाकारले जाते (`Distance is too large.`).

### BREAK and BREAKATPOINT

उपनाव: `BR`. `Select object` (जेथे तुम्ही क्लिक करता तो पहिला बिंदू आहे), `Specify second break point [First point]`; `F` `Specify first break point` आणि `Specify second break point` विचारते. मधील भाग जातो; वर्तुळावर, पहिल्या बिंदूपासून घड्याळाच्या उलट दिशेने. BREAKATPOINT `Specify break point` विचारते आणि तेथे वस्तूचे दोन भाग करते (वर्तुळ नसलेली).

### LENGTHEN

उपनाव: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: निवड `Current length` (आणि कंसाचा समाविष्ट कोन) छापते आणि पुन्हा विचारते. `DE` `Enter delta length (negative shortens) [Angle]` विचारते, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` ओढते. मग `Select an object to change [Undo]`, वारंवार: क्लिकच्या जवळचे टोक हलते. रेषा, कंस आणि उघड्या पॉलिलाइन.

### JOIN

उपनाव: `J`. `Select objects to join`. टोकापासून टोकापर्यंत भेटणाऱ्या रेषा, कंस आणि उघड्या पॉलिलाइन पॉलिलाइन बनतात (साखळी बंद झाल्यावर बंद); एकाच रेषेवरील रेषा एक रेषा बनतात; एकाच वर्तुळाचे कंस एक कंस किंवा वर्तुळ बनतात. इतिहास किती वस्तू जोडल्या गेल्या आणि किती गेल्या नाहीत ते सांगतो.

### MATCHPROP

उपनावे: `MA`, `PAINTER`. `Select source object`, नंतर `Select destination objects [Settings]` आणि {{key:Enter}}. लेयर आणि रंग कॉपी करते, आणि एकाच प्रकारच्या वस्तूंमध्ये मजकुराची उंची आणि रुंदी, डायमेन्शनचे आकार, किंवा हॅच नमुना. `S` `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` विचारते, {{key:Enter}} पर्यंत वारंवार; निवड सत्रासाठी लक्षात ठेवली जाते.

### EXPLODE

उपनाव: `X`. पॉलिलाइन रेषा आणि कंस बनतात, ब्लॉक संदर्भ त्यांच्या वस्तू बनतात, डायमेन्शन रेषा, बाण आणि मजकूर बनतात. संपादनयोग्य राहणारी अॅरे ({{cmd:ARRAYEDIT}}) तिच्या वस्तूंच्या साध्या प्रती बनते.

- `Select objects`

### GROUP

उपनाव: `G`. {{cmd:GROUP}} निवडलेल्या वस्तूंना त्या सामायिक करत असलेले नाव देते. वस्तू निवडा, मग नाव टाइप करा (स्पेस नाहीत; `?` गट यादी दाखवते; Enter नाव नसलेला गट बनवते) आणि नावाच्या गटासाठी, ऐच्छिक वर्णन. तेव्हापासून त्यांपैकी एकावर क्लिक केल्यास, किंवा एकाला धरणारी खिडकी, सर्व निवडल्या जातात, त्यामुळे त्या एकत्र हलतात, कॉपी होतात आणि पुसल्या जातात; प्रत्येक वस्तू तरीही स्वतंत्र वस्तू राहते. एक वस्तू अनेक गटांत असू शकते. संपूर्ण गटाची प्रत नवा नाव नसलेला गट असतो; एका सदस्याची स्वतंत्र प्रत गटात सामील होते. गट ते ज्या जागेत (मॉडेल किंवा शीट) बनवले त्या जागेचे असतात. DWG किंवा DXF म्हणून जतन करून CadCraft मध्ये फाइल पुन्हा उघडल्यावर ते कायम राहतात; DXF 2000 फाइल्समध्ये इतर प्रोग्रॅम्ससाठीही ते गट वस्तू म्हणून असतात, आणि दुसऱ्या प्रोग्रॅममध्ये बनवलेले गट DXF किंवा DWG उघडल्यावर वाचले जातात.

### UNGROUP

{{cmd:UNGROUP}} गट वेगळे करते: गटांच्या वस्तू निवडा (ज्या प्रत्येक गटात त्या आहेत तो वेगळा केला जातो) किंवा `Name` आणि गटाचे नाव टाइप करा. वस्तू ड्रॉइंगमध्ये राहतात. एक पूर्ववत करा पायरी गट परत आणते.

### GROUPEDIT

{{cmd:GROUPEDIT}} एक गट बदलते. त्यातील एक वस्तू निवडा, किंवा `Name` आणि त्याचे नाव; आधीच निवडलेला गट जसा आहे तसा घेतला जातो. मग: `Add` वस्तू (एकेक करून निवडलेल्या, गटानुसार नव्हे), `Remove` वस्तू, `REName` गटाचे नाव बदला, त्याचे `Description` बदला, किंवा `Selectable` सेट करा (एका वस्तूवर क्लिक केल्यास संपूर्ण गट निवडला जातो की नाही). `eXit` किंवा Enter संपवते. वस्तू उरलेल्या नसलेला गट नाहीसा होतो.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1` (सुरुवातीची सेटिंग) सह गटबद्ध वस्तूवर क्लिक किंवा खिडकी तिचा संपूर्ण गट निवडते; `0` सह स्वतंत्र वस्तू, त्यामुळे तुम्ही एक सदस्य संपादित करू शकता. हे सत्रासाठी ठेवले जाते.

## क्लिपबोर्ड

CadCraft चा स्वतःचा क्लिपबोर्ड: तो एका ड्रॉइंगमध्ये, ड्रॉइंग्जमध्ये आणि या ब्राउझरमधील CadCraft टॅबमध्ये चालतो. [कॉपी, पेस्ट आणि डुप्लिकेट](topic:copy-paste) पहा.

### COPYCLIP

{{key:Mod+C}}, किंवा {{ui:Edit}} गटातील {{ui:Copy}}. वस्तू त्या वापरत असलेल्या ब्लॉक आणि लेयरसह क्लिपबोर्डवर कॉपी करते. वस्तू निवडलेल्या राहतात.

- `Select objects to copy` (वस्तू आधीच निवडलेल्या असल्यास वगळले जाते)

### CUTCLIP

{{key:Mod+X}}, किंवा {{ui:More}} मेनूमधील {{ui:Cut}}. वस्तू क्लिपबोर्डवर कॉपी करते, मग त्या पुसते (एक पूर्ववत करा पायरी).

- `Select objects to cut` (वस्तू आधीच निवडलेल्या असल्यास वगळले जाते)

### COPYBASE

तुम्ही निवडलेल्या आधार बिंदूसह वस्तू क्लिपबोर्डवर कॉपी करते; पेस्ट केल्यावर तो बिंदू जागी येतो.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, किंवा {{ui:Edit}} गटातील {{ui:Paste}}. प्रत कर्सरचे अनुसरण करते, तिच्या विस्ताराच्या खालच्या-डाव्या कोपऱ्यापासून लटकत (किंवा तिच्या केंद्रापासून, किंवा `COPYBASE` बिंदूपासून; [CadCraft सेटिंग्ज](topic:settings) पहा).

- `Specify insertion point`

पेस्ट केलेल्या वस्तू निवडलेल्या असतात. ड्रॉइंगमध्ये आधीच असलेला, त्याच नावाचा ब्लॉक या ड्रॉइंगची व्याख्या ठेवतो.

MarkupCraft मध्ये कॉपी केलेले क्षेत्र CadCraft ने कॉपी केलेल्यापेक्षा नवे असल्यास (आणि 6 तासांपेक्षा जुने नसल्यास), {{key:Mod+V}} आणि `PASTECLIP` ते क्षेत्र पेस्ट करतात: `PASTEAREA` पहा.

### PASTEAREA

उपनावे: `PAREA`. {{ui:More}} मेनूमधील {{ui:Paste a copied area}}. MarkupCraft मध्ये {{ui:Copy area}} ने कॉपी केलेले क्षेत्र त्याच्या खऱ्या आकारात चित्र म्हणून पेस्ट करते. [ड्रॉइंगमधील चित्रे](topic:pictures) पहा.

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (फक्त शीटला ड्रॉइंग स्केल नसल्यास): एक संख्या, कागदाच्या आकारासाठी {{key:Enter}}, किंवा `P`, नंतर `First point on the pasted area`, `Second point on the pasted area` आणि त्यांचे खरे अंतर.

### PASTEORIG

{{key:Mod+Shift+V}}, किंवा {{ui:More}} मेनूमधील {{ui:Paste in place}}. वस्तू ज्या निर्देशांकांवरून कॉपी केल्या होत्या तेथे पेस्ट करते. काहीही विचारत नाही.

### DUPLICATE

उपनाव: `DUP`. {{key:Mod+D}}, किंवा {{ui:More}} मेनूमधील {{ui:Duplicate and move}}. वस्तूंची प्रत जेथे आहे तेथून पॉइंटरसोबत हलते; {{key:Esc}} काहीही ठेवत नाही. क्लिपबोर्ड वापरत नाही.

- `Select objects to duplicate` (वस्तू आधीच निवडलेल्या असल्यास वगळले जाते)
- `Specify where the copy goes (Esc leaves nothing)`: क्लिक करा, बिंदू टाइप करा, `@dx,dy` (पॉइंटर होता तेथून), किंवा कर्सरकडे अंतर.

### SELECT

`Select objects` विचारते (खालील प्रत्येक पर्यायासह) आणि तुम्ही निवडलेल्या वस्तू पुढील आज्ञेसाठी किंवा नंतर `P` साठी निवडलेल्या ठेवते.

### QSELECT

उपनावे: `QS`. ब्राउझरमध्ये {{ui:Quick select}} संवाद (पहा [वस्तू निवडा](topic:select-objects#select-by-a-rule-quick-select)). त्याशिवाय आज्ञा ओळ `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` आणि `Enter value` विचारते. जुळणाऱ्या वस्तू निवड बनतात.

### SELECTSIMILAR

उपनावे: `SIM`. `Select objects [SEttings]` (किंवा सध्याची निवड): समान लेयर आणि रंग (तसेच ब्लॉकचे नाव, हॅच नमुना) असलेली प्रत्येक एकाच प्रकारची वस्तू निवडते. `SE` `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` विचारते, {{key:Enter}} पर्यंत वारंवार.

### FIND

उपनाव नाही; किंवा {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. ब्राउझरमध्ये {{ui:Find and replace}} संवाद (पहा [मजकूर आणि लेबले जोडा](topic:text#find-and-replace-words)). त्याशिवाय: `Enter text to find`, नंतर `Enter replacement text (Enter: select what is found)`. उघड्या टॅबवर किंवा निवडीत, मजकूर, विशेषता मूल्ये आणि डायमेन्शन मजकुरात शोधते.

### SELECTALL and DESELECT

`SELECTALL` (उपनाव `AI_SELALL`, {{key:Mod+A}}) उघड्या टॅबवरील संपादित करता येणाऱ्या प्रत्येक वस्तूची निवड करते. `DESELECT` (उपनावे `AI_DESELECT`, `SELECTNONE`; किंवा {{key:Esc}}) निवड साफ करते.

## डायमेन्शन

### DIMLINEAR

उपनावे: `DLI`, `DIMLIN`. आडवे किंवा उभे अंतर.

- `Specify first extension line origin [Select object]` (Enter किंवा `S`: `Select object to dimension`, नंतर रेषा, कंस, वर्तुळ किंवा पॉलिलाइन खंडावर क्लिक करा)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` मजकूर विचारते (`<>` म्हणजे मोजलेले मूल्य), `H` आणि `V` दिशा निश्चित करतात, `R` `Specify angle of dimension line <0>` विचारते.

### DIMALIGNED

उपनावे: `DAL`, `DIMALI`. दोन बिंदूंमधील खरे अंतर.

- बिंदू [DIMLINEAR] प्रमाणे, नंतर `Specify dimension line location [Text]`.

### DIMANGULAR

उपनावे: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- कंस: त्याचा कोन. वर्तुळ: `Specify second angle endpoint`. रेषा: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: मोजायच्या कोनाच्या आत क्लिक करा.

### DIMRADIUS and DIMDIAMETER

उपनावे: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, नंतर `Specify dimension line location [Text]`.

### DIMCONTINUE

उपनावे: `DCO`, `DIMCONT`. शेवटच्या रेषीय किंवा संरेखित डायमेन्शनपासून पुढे चालू ठेवते (किंवा `Select linear or aligned dimension` विचारते).

- `Specify second extension line origin [Undo]`, Enter पर्यंत वारंवार.

### DIMBASELINE

उपनावे: `DBA`, `DIMBASE`. {{cmd:DIMCONTINUE}} सारखे, पण प्रत्येक डायमेन्शन पहिल्या उगमापासून सुरू होतो आणि अधिक बाहेर रचला जातो.

### DIMORDINATE

उपनावे: `DOR`, `DIMORD`. `Specify feature location`, नंतर `Specify leader endpoint [Xdatum/Ydatum/Text]`. वैशिष्ट्य UCS उगमापासून X किंवा Y बाजूने किती दूर आहे ते लीडरवर लिहिते: जो लीडर मुख्यतः वर किंवा खाली जातो तो X वाचला जातो, जो बाजूला जातो तो Y; `Xdatum` आणि `Ydatum` कोणता ते निश्चित करतात. आधी {{cmd:UCS}} ने उगम सेट करा (त्याशिवाय तो ड्रॉइंगचा 0,0 असतो). ग्रिप वैशिष्ट्य, उगम आणि लीडरचे टोक हलवतात, आणि मूल्य त्यामागे येते. DWG आणि DXF मध्ये खरा ordinate डायमेन्शन म्हणून जतन होतो. वैशिष्ट्यावरच लीडरचे टोक असल्यास नाकारते.

### DIMARC

उपनाव: `DAR`. `Select arc or polyline arc segment`, नंतर `Specify arc length dimension location [Text]`. कंसावर मोजते (जीवेवर नाही) आणि मूल्यापूर्वी कंसाचे चिन्ह लिहिते. पूर्ण वर्तुळ, रेषा किंवा सरळ पॉलिलाइन खंड नाकारते. DWG त्याला कंस लांबी डायमेन्शन म्हणून ठेवते; DXF त्याला लांबी मजकूर म्हणून कोनीय डायमेन्शन म्हणून ठेवते, आणि CadCraft ते पुन्हा कंस लांबी डायमेन्शन म्हणून उघडते.

### DIMJOGGED

उपनावे: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. ज्या वक्राचे केंद्र दूर किंवा शीटच्या बाहेर आहे त्यासाठी त्रिज्या डायमेन्शन: डायमेन्शन रेषा केंद्राऐवजी तुम्ही दिलेल्या बिंदूपासून सुरू होते, त्यात एक वळण असते, आणि तरीही खरी त्रिज्या लिहिते. DWG त्याला वळण असलेला त्रिज्या डायमेन्शन म्हणून ठेवते; DXF त्याला त्रिज्या डायमेन्शन म्हणून ठेवते, आणि CadCraft ते पुन्हा वळण असलेले उघडते.

### DIMJOGLINE

उपनावे: `DJL`. `Select dimension to add jog [Remove]`, नंतर `Specify jog location (or press Enter)`. रेषीय किंवा संरेखित डायमेन्शनच्या रेषेवर वळण चिन्ह ठेवते, अंतर स्केलनुसार काढलेले नाही हे दाखवण्यासाठी; मूल्य बदलत नाही. `Remove` ते काढते. इतर प्रकारचे डायमेन्शन नाकारते.

### QDIM

उपनाव नाही. `Select geometry to dimension`, नंतर `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. एका पायरीत अनेक वस्तूंचे डायमेन्शन करते: रेषा आणि पॉलिलाइन खंडांची टोके, वर्तुळे आणि कंसांची केंद्रे, बिंदू आणि ब्लॉक संदर्भ. वस्तूंच्या वर किंवा खाली असलेली स्थिती आडवी मोजते, बाजूला असलेली उभी मोजते. `Continuous` बिंदू साखळते, `Baseline` सर्व पहिल्यापासून मोजते, `Staggered` मधून बाहेरच्या दिशेने जोड्या ठेवते, `Ordinate` प्रत्येक बिंदूला डेटमपासूनचे अंतर देते (`datumPoint` नवा निवडतो), `Radius` आणि `Diameter` निवडलेल्या प्रत्येक वर्तुळ आणि कंसाचे डायमेन्शन करतात. मोड लक्षात ठेवला जातो. ते बनवलेले सर्व एक पूर्ववत करा पायरी असते. दोनपेक्षा कमी बिंदू असल्यास, किंवा Radius आणि Diameter साठी कंस किंवा वर्तुळे नसल्यास ते तसे सांगते.

### DIMBREAK

उपनाव: `DBREAK`. `Select dimensions to add or remove breaks`, नंतर `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` इतर वस्तू जेथे डायमेन्शन आणि विस्तार रेषा ओलांडतात तेथे अंतर सोडते, आणि त्या वस्तू किंवा डायमेन्शन हलल्यावर अंतर पुन्हा ठरवते. `Manual` (एक डायमेन्शन) दोन बिंदू विचारते आणि त्यांमध्ये अंतर सोडते. `Remove` सर्व अंतरे काढते. अंतर डायमेन्शनच्या मजकुराच्या उंचीच्या 1.5 पट असते.

### DIMSPACE

उपनाव नाही. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. समांतर रेषीय आणि संरेखित डायमेन्शनच्या (किंवा त्याच शिरोबिंदूभोवतीच्या कोनीय डायमेन्शनच्या) डायमेन्शन रेषा हलवते, त्यामुळे त्या समान अंतरावर येतात, आधारभूत डायमेन्शनपासून मोजल्या जाऊन, प्रत्येक ज्या बाजूला आहे तेथेच. `0` त्यांना आधारभूत डायमेन्शनसह रांगेत ठेवते; `Auto` म्हणजे आधारभूत डायमेन्शनच्या मजकुराच्या उंचीच्या दुप्पट. आधारभूत डायमेन्शनला समांतर नसलेले डायमेन्शन तसेच राहतात.

### DIMINSPECT

उपनाव नाही. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. मूल्याभोवती चौकट काढते, तिच्या आधी लेबल आणि नंतर तपासणी दर. `remove` चौकट काढते. सहनशीलता मजकूर मूल्यासोबत राहतो.

### DIMOVERRIDE

उपनावे: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, Enter पर्यंत पुन्हा, नंतर `Select dimensions`. फक्त निवडलेल्या डायमेन्शनवरील त्या सेटिंग्ज बदलते; डायमेन्शन शैली बदलत नाही. संख्या किंवा स्विच असलेली व्हेरिएबल्स घेते (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` निवडलेल्या डायमेन्शनना त्यांच्या शैलीवर परत ठेवते. अशी व्हेरिएबल नसलेले नाव आणि जे मूल्य घेता येत नाही ते नाकारते.

### DIMREASSOCIATE

उपनावे: `DRE`, `DIMREASSOC`. `Select dimensions`, नंतर प्रत्येकासाठी त्याचे विस्तार रेषा उगम (`Specify first extension line origin on an object`: रेषेचे टोक किंवा मध्य, पॉलिलाइन कोपरा, केंद्र यावर स्नॅप करा; Enter तो बिंदू मोकळा ठेवतो), किंवा त्रिज्या, व्यास, वळण असलेली त्रिज्या किंवा कंस लांबी डायमेन्शनसाठी `Select arc or circle`. डायमेन्शन नंतर त्या वस्तूंशी बांधले जाते: त्या हलल्या किंवा त्यांचा आकार बदलला तर ते एकाच पूर्ववत करा पायरीत त्यांचे अनुसरण करते आणि पुन्हा मोजते. बांधलेला बिंदू हाताने हलवल्यास, किंवा वस्तू पुसल्यास, ते बंधन संपते. हे बंधन DWG आणि DXF 2000 मध्ये CadCraft ची स्वतःची माहिती म्हणून जतन होते; इतर प्रोग्रॅम्स त्याला साधे डायमेन्शन म्हणून पाहतात.

### DIMDISASSOCIATE

उपनावे: `DDA`, `DIMDISASSOC`. `Select dimensions`. ज्या वस्तूंशी ते बांधलेले आहेत त्यांच्यापासून मोकळे करते; काहीही हलत नाही.

### CENTERMARK

उपनावे: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, Enter पर्यंत पुन्हा. केंद्रावर एक क्रॉस आणि वक्रापलीकडे थोड्या अंतरापर्यंत चार केंद्र रेषा काढते (linetype CENTER), सध्याच्या लेयरवर साध्या रेषा म्हणून; सध्याच्या डायमेन्शन सेटिंग्जच्या बाण आकार आणि एकूण स्केलनुसार आकारली जाते, UCS सह फिरवली जाते. वर्तुळ हलले तरी ती त्याचे अनुसरण करत नाहीत.

### CENTERLINE

उपनावे: `CL`. `Select first line`, `Select second line`. दोन रेषांच्या मध्यभागी एक रेषा काढते (त्या भेटल्या तर द्विभाजकाबाजूने), त्या असतात त्यापेक्षा थोडी लांब, linetype CENTER मध्ये. साधी रेषा: ती दोन रेषांचे अनुसरण करत नाही.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

उपनाव नाही. प्रत्येक `Enter new value for … <current>` विचारते आणि तो आकार **नव्या** डायमेन्शनसाठी सेट करते: एकूण स्केल, मजकुराची उंची, बाणाचा आकार, दशांश स्थाने (8 पर्यंत), मजकुराभोवती अंतर, डायमेन्शन रेषेपलीकडील विस्तार, उगमापासूनचा ऑफसेट. [डायमेन्शनचे आकार सेट करा](topic:dimension-settings) पहा.

### DIMLUNIT

डायमेन्शन सेटिंग: फक्त नव्या डायमेन्शनचे स्वरूप (1 वैज्ञानिक, 2 दशांश, 3 अभियांत्रिकी, 4 वास्तुशास्त्रीय, 5 अपूर्णांक).

### DIMSTYLE and -DIMSTYLE

उपनावे: `DST`, `DDIM`, `D`. डायमेन्शन शैली व्यवस्थापक: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. आज्ञा ओळीवर `-DIMSTYLE`: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. [डायमेन्शनचे आकार सेट करा](topic:dimension-settings#named-dimension-styles) पहा.

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, नंतर डायमेन्शन (किंवा आधीच निवडलेले). New मजकूर विचारते (`<>` = मोजमाप); Rotate कोनासाठी (0 मजकूर परत ठेवते); Oblique X अक्षापासून विस्तार रेषांचा कोन (Enter = काहीही नाही; फक्त रेषीय आणि संरेखित डायमेन्शन). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. [डायमेन्शनचे आकार सेट करा](topic:dimension-settings#change-dimension-text-and-extension-lines) पहा.

### DIMTEXTUNIT

उपनाव: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, किंवा डायमेन्शन निवडलेली असताना `Units in the text of the selected dimensions`. मोजलेली लांबी त्या एककात, त्यानंतर एकक लिहून लिहिते (DIMLFAC आणि DIMPOST प्रत्यय); `D` ड्रॉइंग एककांवर परत जाते. [डायमेन्शन mm, cm, m किंवा km मध्ये](topic:dimension-settings#dimensions-in-mm-cm-m-or-km) पहा.

### REVCLOUD

उपनाव: `RC`. `Arc length: … Type: …` छापते, नंतर `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular `Specify opposite corner` विचारते; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand पॉइंटरचे अनुसरण करते, क्लिक किंवा {{key:Enter}} पर्यंत; `O` `Select object` आणि `Reverse direction? [Yes/No] <N>` विचारते आणि वस्तूला ढगात बदलते. `A` `Specify the length of each arc` विचारते. `R`, `P` आणि `F` पुढील ढगाचा प्रकार निवडतात. निकाल कंसांची एक बंद पॉलिलाइन असते.

### MLEADER

उपनाव: `MLD`; किंवा {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, नंतर जागेवरील बॉक्समधील मजकूर (किंवा त्याशिवाय, `Enter text (an empty line ends)`). `Block` प्रथम ब्लॉकचे नाव विचारते आणि मल्टीलीडर मजकुराऐवजी तो ब्लॉक दाखवते. अधिक लीडर रेषा: {{cmd:MLEADEREDIT}}. DWG मध्ये खरा मल्टीलीडर म्हणून जतन होते; DXF त्याने काढलेल्या रेषा, बाण आणि मजकूर ठेवते.

### MLEADEREDIT

उपनाव: `MLE`. `Select a multileader`, नंतर `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: प्रत्येक बिंदू नव्या बाणाच्या टोकापासून त्याच लँडिंगला एक लीडर रेषा जोडतो, Enter पर्यंत. `Remove leaders` नंतर तुम्ही क्लिक केलेली लीडर रेषा काढते (मल्टीलीडरकडे किमान एक राहते). `Block content` ब्लॉकचे नाव विचारते आणि मजकुराऐवजी तो ब्लॉक दाखवते (त्याची विशेषता विचारली जाते); `Text content` मजकूर परत ठेवते. प्रत्येक लीडर रेषेची स्वतःची ग्रिप असते. DWG प्रत्येक लीडर रेषा आणि ब्लॉक एकाच मल्टीलीडरमध्ये ठेवते.

### MLEADERALIGN

उपनाव: `MLA`. `Select multileaders`, नंतर `Select multileader to align to [Distribute/Spacing/Use current spacing]` आणि `Specify direction`. इतर मल्टीलीडरची लँडिंग (आणि त्यांचा मजकूर किंवा ब्लॉक) निवडलेल्याच्या लँडिंगमधून त्या दिशेने जाणाऱ्या रेषेवर हलवते; बाण जिथे दाखवतात तिथेच राहतात. `Spacing` त्यांना समान अंतरावरही ठेवते; `Distribute` दोन बिंदू विचारते आणि त्यांदरम्यान समान पसरवते. किमान दोन मल्टीलीडर लागतात.

### MLEADERCOLLECT

उपनाव: `MLC`. `Select multileaders`, नंतर `Specify collected multileader location [Vertical/Horizontal]` (Enter पहिल्याची जागा ठेवतो). अनेकांपासून एक मल्टीलीडर बनवते: ब्लॉक मजकूर एका नव्या ब्लॉकमध्ये जातो जो प्रत्येक ब्लॉकला बाजूबाजूला किंवा एकाखाली एक धरतो; मजकूर मजकूर एका नोटमध्ये होतो, प्रत्येक ओळीसह. पहिला मल्टीलीडर त्याच्या लीडर रेषा ठेवतो; इतर काढले जातात. मजकूर आणि ब्लॉक मजकूर यांचे मिश्रण नाकारते.

### TABLE

उपनावे: `TB`; किंवा {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. तक्ता बनवते: एक वस्तू जी तुम्ही इतर वस्तूंप्रमाणे हलवता, कॉपी करता, फिरवता, स्केल करता आणि छापता, तिचे सेल डेटा म्हणून ठेवलेले.

- `Number of data rows or [Paste/File/Style] <3>`, नंतर `Number of columns <3>`, `Text height` आणि `Top left corner of the table`. तक्त्याला शीर्षक ओळ (एक एकत्रित सेल) आणि डेटा ओळींच्या वर एक शीर्षक ओळ मिळते.
- `P`: क्लिपबोर्डवरील स्प्रेडशीट सेलमधून तक्ता (सेलदरम्यान टॅबसह मजकूर). क्लिपबोर्डवर असे सेल असताना {{key:Ctrl+V}} दाबल्यास तेच होते, जोपर्यंत CadCraft ची स्वतःची कॉपी नवी नसते (किंवा CadCraft सांगू शकत नाही: तेव्हा ते स्वतःची कॉपी पेस्ट करते आणि तसे सांगते). `F`: `.csv` किंवा टॅब-विभाजित फाइलमधून तक्ता. पहिली ओळ शीर्षक ओळ बनते; स्तंभांची रुंदी मजकुराला बसते.
- `S`: या तक्त्यासाठी तक्ता शैली निवडा (पहा {{cmd:TABLESTYLE}}).
- पूर्ण संख्या नसलेली ओळ किंवा स्तंभ संख्या, आणि तक्त्यात बसू शकतील त्यापेक्षा जास्त सेल (2,000 ओळी, 200 स्तंभ, 40,000 सेल) ते नाकारते.
- {{cmd:EXPLODE}} तक्त्याला रेषा आणि मजकूर बनवते. DWG म्हणून जतन केल्यास तक्ता खरी तक्ता वस्तू असते जी इतर प्रोग्रॅम्स संपादित करू शकतात; DXF म्हणून जतन केल्यास तो तो काढणारा ब्लॉक असतो, आणि CadCraft तो पुन्हा तक्ता म्हणून उघडते.

### TABLEDIT

उपनावे: `TABLEEDIT`, `TABEDIT`; किंवा सेलवर दोनदा क्लिक करा. तक्ता संपादित करते.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. सेलवर क्लिक करा, किंवा तक्ता निवडलेला असताना त्याचे नाव टाइप करा (`B3`: स्तंभ B, ओळ 3; शीर्षक ओळ ओळ 1 आहे). ब्राउझरमध्ये सेलवर एक बॉक्स उघडतो: {{key:Enter}} मजकूर ठेवतो, {{key:Tab}} पुढील सेलवर जातो, {{key:Alt+Enter}} नवी ओळ सुरू करतो, {{key:Esc}} सेल जसा होता तसाच सोडतो.
- `=` ने सुरू होणारा मजकूर सूत्र आहे: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^`, कंस आणि `sqrt` व `round` सारखी कार्ये सह. सेल मूल्य दाखवतो; जे सूत्र स्वतःच्या सेलचे नाव देते, तक्त्याबाहेरील सेल देते किंवा संख्या नसलेला सेल देते ते `####` दाखवते आणि आज्ञा ओळ कारण सांगते.
- `R` / `C`: निवडलेल्या सेलवर ओळी किंवा स्तंभ `Insert` किंवा `Delete` (किती, आणि वर किंवा खाली, डावीकडे किंवा उजवीकडे). सूत्रे ज्या सेलचे नाव देतात त्यांचे अनुसरण करतात.
- `S`: स्तंभाची रुंदी आणि ओळीची उंची. ओळ तिच्या मजकुरापेक्षा कधीच कमी नसते. निवडलेल्या तक्त्यावर प्रत्येक स्तंभ आणि ओळीच्या कडेवर ग्रिप देखील असते.
- `M`: एका निवडलेल्या सेलपासून दुसऱ्यापर्यंत एकत्र करा; `U`: एकत्र करणे काढा. `A`: संरेखन (`TL` वर-डावीकडे … `MC` मध्य-मध्य … `BR` खाली-उजवीकडे). `H`: या सेलची स्वतःची मजकुराची उंची (0 = शैलीची). `K`: ओळ शीर्षक, शीर्षक ओळ किंवा डेटा ओळ बनवा. `CL`: सेल रिकामा करा.
- लॉक केलेल्या लेयरवरील तक्ता, प्रत्येक ओळ किंवा स्तंभ पुसणे, आणि दुसऱ्या एकत्र सेलला कापणारे एकत्रीकरण ते नाकारते.

### TABLESTYLE

उपनावे: `TS`. तक्ता शैलींची यादी दाखवते, प्रत्येक किती तक्ते वापरतात ते सांगत, नंतर `Table style: [New/Set/Edit/Delete/Apply]`.

- शैली शीर्षक, शीर्षक ओळ आणि डेटा ओळींची मजकुराची उंची आणि संरेखन, सेल मार्जिन, आणि कोणत्या कडा काढल्या जातात (बाह्य, ओळींमध्ये, स्तंभांमध्ये) ठेवते.
- `N` सध्याच्या शैलीवरून एक शैली बनवते आणि ती सध्याची करते; `S` सध्याची शैली सेट करते (नवे तक्ते ती घेतात); `E` एक संपादित करते: ती वापरणारे तक्ते पुन्हा काढले जातात; `A` निवडलेल्या तक्त्यांना सध्याची शैली देते; `D` एक हटवते (Standard नाही, सध्याची नाही; ती वापरणारे तक्ते त्यांचे स्वरूप ठेवतात).
- शैली ड्रॉइंगसह जतन होतात (DWG आणि DXF).

### TABLEEXPORT

तक्ता जे दाखवतो ते CSV फाइल म्हणून जतन करतो (सूत्र त्याचे मूल्य म्हणून). `Select a table`, किंवा आधी एक निवडा. `=`, `+`, `-` किंवा `@` ने सुरू होणाऱ्या मजकूर सेलना स्प्रेडशीट ते चालवू नये म्हणून पुढे `'` जोडला जातो.

### TABLEPASTE

उपनाव: `PASTETABLE`. क्लिपबोर्डवरील स्प्रेडशीट सेलमधून तक्ता बनवते, मग त्याचा वर-डावा कोपरा विचारते. {{cmd:TABLE}} › `Paste` सारखेच.

### DATALINK

उपनाव: `DL`. `Data link: [New/List/Remove] <New>`. `N` CSV फाइल विचारते, तिचा तक्ता ठेवते आणि फाइलचे नाव लक्षात ठेवते; `L` दुवे त्यांच्या फाइल, आकार, केव्हा वाचले आणि किती तक्ते वापरतात त्यासह यादी करते; `R` एक दुवा काढते (त्याचे तक्ते साधे तक्ते म्हणून राहतात).

### DATALINKUPDATE

उपनाव: `DLU`. दुव्याची फाइल पुन्हा वाचते आणि त्याला जोडलेले तक्ते पुन्हा भरते (ओळी आणि स्तंभ जुळण्यासाठी जोडले किंवा काढले जातात). ब्राउझर स्वतः फाइल उघडू शकत नाही, म्हणून ती पुन्हा निवडण्यास सांगते. अनेक दुवे असल्यास कोणता ते विचारते.

### FIELD

ड्रॉइंगमध्ये फील्ड ठेवते: स्वतः काढले जाणारे मजकूर. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: आता, किंवा जतन, तयार किंवा छापलेली तारीख, आणि स्वरूप (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: फाइलचे नाव, विस्तारासह किंवा त्याशिवाय. `S`: शीटचा क्रमांक, तिचे शीर्षक, किंवा किती शीट्स आहेत. `P`: नावाने ड्रॉइंग गुणधर्म (पहा {{cmd:DWGPROPS}}). `O`: वस्तू निवडा, मग काय वाचायचे (क्षेत्र, लांबी, परिमिती, त्रिज्या, व्यास, लेयर, नाव, x, y, मजकूर, फिरवणे, रंग) आणि दशांश. `E`: सूत्र. `C`: जसे टाइप केले तसे कोड असलेला मजकूर, जसे `Sheet %<sheetnumber>% of %<sheetcount>%`.
- मग तो घालण्यासाठी `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: निवडलेल्या मजकुरात फील्ड त्यात जे आहे त्यानंतर जोडले जाते; तक्त्याचा सेलही तसाच; विशेषता असलेला ब्लॉक संदर्भ कोणती विशेषता ते विचारतो; {{key:Enter}} नव्या मजकुरासाठी उंची आणि बिंदू विचारतो.
- स्क्रीनवर फील्डची पार्श्वभूमी हलकी राखाडी असते; छापणे आणि PDF मध्ये ती कधीच नसते. फील्डच्या मजकुरावर हाताने टाइप केल्यास फील्ड संपते. ज्या फील्डची गणना होऊ शकत नाही ते `####` दाखवते.
- वस्तूचे फील्ड त्या वस्तूला CadCraft वस्तूंवर ठेवत असलेल्या की द्वारे शोधते (सेटिंग्ज › CadCraft › Merge-friendly files); की बंद असताना ते नाकारते.

### UPDATEFIELD

उपनाव: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` फील्ड स्वतः कधी अद्ययावत होतात ते सेट करते: `O` उघडल्यावर, `S` जतन केल्यावर, `P` छापल्यावर, `R` पुन्हा बनवल्यावर या चार अक्षरांचे टाइप करा (सुरुवातीला सर्व चार), किंवा `NONE`.

### DWGPROPS

उपनाव: `DRAWINGPROPS`. ड्रॉइंगचे गुणधर्म यादी करते, नंतर `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. पहिले सहा ते आहेत जे {{ui:Drawing details}} पॅनल दाखवतो; `U` तुमचे स्वतःचे नाव आणि मूल्य जोडते, `R` एक काढते. फील्ड ते वाचतात (`%<prop:title>%`, `%<prop:Client>%`) आणि लगेच अनुसरण करतात. अंगभूत नावांपैकी एक असलेले किंवा `%`, `<`, `>`, कोट किंवा बॅकस्लॅश असलेले सानुकूल नाव ते नाकारते.

## पॅरामेट्रिक

[ड्रॉइंगवर बंधने ठेवा](topic:constraints) आणि [पॅरामीटर्स आणि समीकरणे वापरा](topic:parameters) पहा. बंधने {{ui:Model}} टॅबवर चालतात.

### GEOMCONSTRAINT and the GC commands

उपनाव `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, नंतर त्या आज्ञेचे प्रॉम्प्ट.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (दुसरी हलते).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT and the DC commands

उपनाव `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (संख्या, अभिव्यक्ती, किंवा `name=expression`).
- {{cmd:DCALIGNED}}: वरीलप्रमाणे, `[Object/Point & line/2Lines]` सह.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` अंतर आणि कोन सहनशीलता विचारते.
- {{cmd:DELCONSTRAINT}} (उपनाव `DELCON`): `Select objects`; त्यांची बंधने जातात.
- {{cmd:CONSTRAINTBAR}} (उपनाव `CBAR`): `Select objects [Showall/Hideall]`, नंतर `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (उपनावे `PAR`, `PARAM`) {{ui:Parameters}} पॅनल उघडते. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

उपनाव `SWMACRO`. SolidWorks मध्ये मॉडेलला एक बंधित स्केच म्हणून पुन्हा बनवणारा मॅक्रो (.swb) डाउनलोड करते. [स्केच इतर पार्ट मॉडेलर्सकडे आणि तेथून हलवा](topic:solidworks-sketches) पहा.

## ब्लॉक

### ANNOSCALE

उपनाव: `CANNOSCALE`. ड्रॉइंगचा ॲनोटेशन स्केल आणि त्यात किती ॲनोटेटिव्ह वस्तू आहेत ते सांगते, नंतर `New annotation scale` विचारते: `1:50`, `1:100`, `2:1`, नुसती संख्या (`50` म्हणजे 1:50) किंवा ड्रॉइंगच्या स्वतःच्या एका स्केलचे नाव टाइप करा. प्रत्येक ॲनोटेटिव्ह मजकूर आणि डायमेन्शन नव्या स्केलवर तेवढ्याच आकारात छापले जाईल असे आकारले जाते, एका पूर्ववत करा पायरीत; ॲनोटेटिव्ह नसलेल्या वस्तू तशाच राहतात, आणि स्केलची यादी ठेवणारी वस्तू ज्यात नवा स्केल नाही (OBJECTSCALE) तीही तशीच राहते. [एकके, कागद आणि स्केल](topic:units-papers-scales#annotate-by-scale) पहा.

### OBJECTSCALE

उपनाव: `OBJSCALE`. `Select annotative objects`, नंतर `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. ॲनोटेटिव्ह मजकूर किंवा डायमेन्शन ॲनोटेशन स्केलची यादी ठेवतो. `Add` आणि `Delete` स्केल विचारतात (`1:50`, `2:1`, नुसती संख्या, किंवा ड्रॉइंगच्या स्वतःच्या एका स्केलचे नाव); `Current scale` ड्रॉइंगचा ॲनोटेशन स्केल जोडतो; `List` प्रत्येक वस्तूचे स्केल छापते. ज्या व्ह्यूपोर्टचा स्केल वस्तूच्या यादीत आहे तो ती वस्तू त्या स्केलवर तिची कागदी उंची छापेल एवढ्या आकारात दाखवतो, स्क्रीनवर आणि छापांमध्ये. शेवटचा स्केल हटवता येत नाही. ॲनोटेटिव्ह नसलेल्या वस्तू वगळल्या जातात: आधी गुणधर्मांमध्ये Annotative चालू करा. यादी DWG आणि DXF मध्ये CadCraft ची स्वतःची माहिती म्हणून जतन होते. [एकके, कागद आणि स्केल](topic:units-papers-scales#annotate-by-scale) पहा.

### ANNOALLVISIBLE

उपनाव: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. चालू असताना (ड्रॉइंग सुरू होते तसे): ॲनोटेटिव्ह वस्तू व्ह्यूपोर्टमध्ये किंवा मॉडेलमध्ये देखील दिसते, ज्याचा स्केल तिच्या यादीत नाही, तिच्याकडे असलेल्या आकारात. बंद असताना: तेथे ती दिसत नाही, आणि मॉडेलमध्ये निवडता येत नाही. हा स्विच एक पूर्ववत करा पायरी असतो; तो फाइलमध्ये ठेवला जात नाही.

### SCALELISTEDIT

उपनाव: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` {{key:Enter}} पर्यंत. Add: `Scale name`, `Paper units`, `Drawing units`. Edit आणि Delete स्केलचे नाव विचारतात. ड्रॉइंगचे स्वतःचे स्केल व्ह्यूपोर्ट आणि छपाई स्केलच्या यादीत सामील होतात आणि ड्रॉइंगसह जतन होतात. [एकके, कागद आणि स्केल](topic:units-papers-scales#scales) पहा.

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: वक्र ज्यातून जातो ते बिंदू; `Close`, `Undo`, नंतर `Start tangent` आणि `End tangent` (एक बिंदू, किंवा {{key:Enter}}). Method › Control vertices अंश (1 ते 5) विचारते आणि नियंत्रण बहुभुजावरून काढते. Object पॉलिलाइनना त्यांच्या शिरोबिंदूंमधून जाणाऱ्या स्प्लाइनमध्ये बदलते. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, अनेक वस्तूंसाठी `M`; रेषा, कंस आणि स्प्लाइन आधी पॉलिलाइन म्हणून दिल्या जातात. [स्प्लाइन आणि पॉलिलाइन](topic:splines) पहा.

### BLOCK

उपनावे: `B`, `BMAKE`.

- `Enter block name`. ते आधीच असल्यास: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. त्या नव्या ब्लॉकच्या एका संदर्भाने बदलल्या जातात.

### WBLOCK

उपनावे: `W`, `-WBLOCK`. ब्लॉक, काही वस्तू किंवा संपूर्ण ड्रॉइंग नवी DWG किंवा DXF फाइल म्हणून लिहिते. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ते नव्या ड्रॉइंगचा उगम बनते), `Select objects`, नंतर `File format [DWG/DXF/R12 DXF]` आणि `File name for the new drawing`, नंतर `What to do with the objects [Retain/Convert to block/Delete]`. Convert त्या फाइलच्या नावाच्या ब्लॉकच्या एका संदर्भाने बदलते; Delete काढून टाकते.
- **Block**: `Block to write out`. ब्लॉकच्या स्वतःच्या वस्तू, त्याचा आधार बिंदू उगम म्हणून, घरट्यातील ब्लॉकसह.
- **Entire drawing**: मॉडेल जागेतील प्रत्येक वस्तू. शीट्स लिहिल्या जात नाहीत; शीट्ससह प्रत हवी असल्यास {{cmd:SAVEAS}} वापरा.

नवी फाइल फक्त तिच्या वस्तू वापरत असलेले लेयर, linetype, मजकूर आणि डायमेन्शन शैली आणि ब्लॉक, तसेच ड्रॉइंगची एकके ठेवते. DWG ची आवृत्ती ती असते जी {{cmd:SAVEAS}} शेवटची वापरली. ब्राउझरमध्ये फाइल डाउनलोड होते; Studio मध्ये जतन करण्याचा संवाद उघडतो.

### ATTDEF

उपनावे: `ATT`, `DDATTDEF`, `-ATTDEF`; किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. मोड छापते, नंतर `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (स्थिर असताना `Enter attribute value`), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} विशेषता व्याख्या ब्लॉकमध्ये घेतो.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, किंवा विशेषता असलेल्या संदर्भावर दोनदा क्लिक करा; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, नंतर {{ui:Edit attributes}} संवाद. `ATTEDIT` (`ATE`, `-ATTEDIT`): तोच संदर्भ, नंतर प्रत्येक विशेषतेसाठी `<prompt> (<TAG>) <value>`; {{key:Enter}} मूल्य ठेवते. [विशेषता](topic:attributes#see-and-change-the-values) पहा.

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. मूल्ये ठेवली जातात; नव्या विशेषतांना त्यांचे डीफॉल्ट मिळते, काढलेल्या जातात, ठेवणी पुन्हा सेट होते.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. संवाद: ब्लॉक, विशेषता (टॅग, प्रॉम्प्ट, डीफॉल्ट, मोड, क्रम), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT and REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (किंवा निवड). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; पट्टीवरील {{ui:Save the block}} आणि {{ui:Discard}} तेच करतात. संपूर्ण संपादन एक पूर्ववत करा पायरी असते. [विशेषता](topic:attributes#edit-a-title-block-where-it-is-refedit) पहा.

### BEDIT and BCLOSE

`BE`; किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` ब्लॉक संपादक उघडते. `BCLOSE` `Close the block editor on "…" [Save/Discard] <Save>` विचारते; बॅनरवरील {{ui:Save block}} आणि {{ui:Discard changes}} तेच करतात. संपादकात केलेले सर्व एक पूर्ववत करा पायरी असते.

### VIEWBASE

उपनाव: `FLATSHOT`. 3D टॅबवरील घनवस्तूंचे सपाट 2D दृश्य: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, स्केल (`1:20`, `2:1`; {{key:Enter}} शीटला बसणारा घेतो), नंतर दृश्याचे केंद्र. एक ब्लॉक संदर्भ; दिसणाऱ्या कडा VIEW-VISIBLE वर, लपलेल्या ठिपकेदार VIEW-HIDDEN वर. [शीटवर सपाट दृश्ये](topic:3d-solids#flat-views-on-a-sheet) पहा.

### PUBLISH

उपनावे: `-PUBLISH`; किंवा {{ui:Plot to PDF}} संवादातील {{ui:All sheets in one PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} प्रत्येक शीट छापते, `S` स्वल्पविरामाने विभक्त नावे विचारते. एक PDF, प्रत्येक शीटसाठी एक पान आणि एक बुकमार्क. [सर्व शीट्स एका PDF मध्ये](topic:plot-pdf#every-sheet-in-one-pdf) पहा.

### SHEETSET

उपनावे: `SSM`, `SHEETSETMANAGER`. तुम्हाला डाव्या पॅनलमधील {{ui:Sheet set}} विभागात नेते: अनेक ड्रॉइंग्जमधील शीट्स, क्रमांकित आणि शीर्षक असलेल्या, त्यांचे शीर्षक ब्लॉक संचातून भरलेले, एक PDF म्हणून छापलेल्या. [शीट संच](topic:sheet-sets) पहा.

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): DWG किंवा DXF निवडा, मग त्याचा घालण्याचा बिंदू. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; एकापेक्षा अधिक दुवे असल्यास त्यांपैकी एक संदर्भ निवडा किंवा `N` टाइप करून त्याचे नाव द्या. [जोडलेली ड्रॉइंग्ज](topic:files#linked-drawings-external-references) पहा.

### COUNT

उपनाव: `BCOUNT`; किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: एक क्लिक त्या ब्लॉकचा प्रत्येक संदर्भ या जागेत निवडते आणि मोजते; {{key:Enter}} किंवा `A` ते सर्व यादी करते; `E` नंतर `C` (मोजणी) किंवा `A` (विशेषता) CSV डाउनलोड करते. [ब्लॉक मोजा आणि शेड्यूल निर्यात करा](topic:blocks#count-blocks-and-export-a-schedule) पहा.

### INSERT

उपनावे: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (अक्षरांची मोठी-लहान स्थिती महत्त्वाची नाही). `F` DWG किंवा DXF विचारते, मग संपूर्ण ड्रॉइंग किंवा त्यातील एक ब्लॉक; आधीच वापरलेले नाव {{ui:Keep existing}} किंवा {{ui:Rename}} विचारते. `L` लायब्ररी पॅनल उघडते.
- `Specify insertion point [Scale/Rotate]`. `S` `Specify scale factor` विचारते, `R` `Specify rotation angle` विचारते; दोन्ही लक्षात ठेवले जातात.
- ब्लॉक आधीच इतर ठिकाणी त्याशिवाय पुनरावृत्त होत असलेल्या वस्तूंच्या बाजूला उभा असल्यास, एक ओळ किती जागा सुचवल्या आहेत ते सांगते, आणि प्रॉम्प्टमध्ये `suGgested` जोडले जाते: `G` त्या दाखवते; त्यांपैकी एकाजवळ क्लिक करा म्हणजे ब्लॉक तेथे जातो, `A` सर्वांसाठी, {{key:Enter}} मागे जाण्यासाठी. ते त्यांच्या शेजाऱ्यांचे फिरवणे आणि डीफॉल्ट विशेषता मूल्ये घेतात. खुल्या जागेतील 20,000 हून अधिक वस्तू असलेली ड्रॉइंग शोधली जात नाहीत.
- नंतर ब्लॉकला हवी असलेली प्रत्येक विशेषता `Enter <prompt> (<TAG>) <default>`. [ब्लॉक विशेषता](topic:attributes) पहा.

### LIBRARY

उपनाव: `LIB`. लायब्ररी पॅनल उघडते: आयटम ठेवा, अद्यतने तपासा, लायब्ररी श्रेय. प्रश्न नाहीत. [फाइलमधून किंवा लायब्ररीतून घाला](topic:insert-from-file-and-library) पहा.

### STEELMEMBER

उपनाव: `SMEMBER`; किंवा लायब्ररीच्या {{ui:Standard}} टॅबवरील {{ui:3D member}}. `Section size <W12x26>` (टॅब ते जसे यादीत देतो तसे), नंतर `Start point [Column]` आणि `End point`: दोन बिंदूंदरम्यान 3D टॅबवरील घन सदस्य, जमिनीवर बसलेला. `C` स्तंभाचा आधार बिंदू आणि त्याची उंची विचारते. एक पूर्ववत करा पायरी. [स्टील विभाग आणि प्रमाणित भाग ठेवा](topic:steel-and-standard-parts) पहा.

### PARTSLIST

उपनाव: `PLIST`. `Top left corner of the parts list`, नंतर `Text height <2.5>`: लायब्ररीतून ठेवलेल्या प्रत्येक प्रमाणित भागाची आणि स्टील विभागाची तक्ता काढते (आयटम क्रमांक, प्रमाण, भाग, मानक, आकार, लांबी, साहित्य, वस्तुमान). एक पूर्ववत करा पायरी. [स्टील विभाग आणि प्रमाणित भाग ठेवा](topic:steel-and-standard-parts#make-a-parts-list) पहा.

### PURGE

उपनाव: `PU`. कोणीही न वापरलेल्या ब्लॉक व्याख्या काढते. प्रश्न नाहीत.

### DELBLOCKS

किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: एक ब्लॉक संदर्भ निवडा, किंवा फिल्टरसह ब्लॉकच्या यादीसाठी `N` (अनेक निवडता येतात), किंवा संपवण्यासाठी `X` / {{key:Enter}}. प्रत्येक संदर्भ जातो — मॉडेलमध्ये, प्रत्येक शीटवर आणि इतर ब्लॉकमध्ये — नंतर व्याख्या, आणि आज्ञा ओळ काय काढले आणि काय काढता आले नाही ते सांगते. नाव नसलेले ब्लॉक आणि जोडलेली ड्रॉइंग्ज ऑफर केली जात नाहीत. प्रॉम्प्ट पुढच्या ब्लॉकसाठी परत येतो; संपूर्ण आज्ञा एक पूर्ववत करा पायरी असते.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} तुम्ही कॉपी केलेले ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) एक ब्लॉक म्हणून पेस्ट करते: घालण्याचा बिंदू निवडा, आणि नव्या ब्लॉकचा एक संदर्भ तेथे जातो, निवडलेला. ब्लॉकला स्वतःचे नाव मिळते (`A$C` आणि एक संख्या); {{cmd:RENAME}} ते तुमचे नाव देते. एक पूर्ववत करा पायरी संदर्भ आणि ब्लॉक दोन्ही काढते.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} बदलायचा ब्लॉक आणि त्याच्या जागी ठेवायचा ब्लॉक विचारते (`?` ब्लॉकची यादी दाखवते), नंतर मॉडेलमधील, प्रत्येक शीटवरील आणि इतर ब्लॉकमधील प्रत्येक संदर्भ बदलते. प्रत्येक संदर्भ त्याची जागा, स्केल, फिरवणे, लेयर आणि दोन्ही ब्लॉकमध्ये असलेल्या विशेषतांची मूल्ये ठेवतो; फक्त नव्या ब्लॉकमध्ये असलेल्या विशेषता त्यांच्या डीफॉल्टपासून सुरू होतात, आणि कोणती मूल्ये टाकली गेली ते सांगते. जुना ब्लॉक कोणीही वापरत नसल्यास तो काढण्याची ऑफर देते. जोडलेली ड्रॉइंग्ज आणि ब्लॉकला स्वतःच्या आत ठेवणारी बदली नाकारते. एक पूर्ववत करा पायरी.

### MINSERT

{{cmd:MINSERT}} ब्लॉक ओळी आणि स्तंभांमध्ये ठेवते: ब्लॉकचे नाव, घालण्याचा बिंदू, स्केल, फिरवणे, ओळी आणि स्तंभांची संख्या, आणि त्यांच्यातील अंतर. संपूर्ण संच फिरवण्याबरोबर फिरतो. प्रत्येक स्वतंत्र संदर्भ असतो (जास्तीत जास्त 10,000), त्यामुळे त्यांपैकी कोणताही नंतर हलवता किंवा पुसता येतो.

### BLOCKSPALETTE

उपनाव: `BLOCKSPAL`; किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. {{ui:Blocks}} पॅनल दाखवते, कर्सर त्याच्या फिल्टरमध्ये. प्रत्येक ब्लॉकचे एक लहान चित्र असते; सर्वात अलीकडे ठेवलेले आधी येतात. फिल्टरच्या बाजूची दोन बटणे यादी आणि चित्रांच्या ग्रिडमध्ये बदलतात. {{cmd:INSERT}} ने ब्लॉक ठेवण्यासाठी चित्रावर क्लिक करा (किंवा {{ui:Insert}}), किंवा तो जेथे सोडाल तेथे ठेवण्यासाठी ड्रॉइंगवर ओढा.

यादीखाली {{ui:Libraries}}: {{ui:Add a drawing}} तुमची स्वतःची DWG किंवा DXF फाइल घेते आणि तिचे ब्लॉक चित्रांसह यादी करते, आणि संपूर्ण ड्रॉइंग एक ब्लॉक म्हणून. एक ठेवल्यास त्याची व्याख्या (आणि त्यात घरट्यात असलेले ब्लॉक, आणि त्यांचे लेयर) या ड्रॉइंगमध्ये कॉपी होते, {{cmd:INSERT}} च्या `File` पर्यायाप्रमाणे; त्याच व्याख्येचा आधीच येथे असलेला ब्लॉक प्रश्न न विचारता वापरला जातो, आणि तेच नाव पण वेगळी व्याख्या असल्यास {{ui:Keep existing}} किंवा {{ui:Rename}} विचारते. ब्राउझरमध्ये पान बंद होईपर्यंत फाइल राहते. CadCraft Studio मध्ये {{ui:Add a folder}} फोल्डरमधील ड्रॉइंग्जची यादी करते, प्रत्येक तुम्ही क्लिक केल्यावर उघडले जाते, आणि फाइल्स व फोल्डर लक्षात ठेवले जातात. लहान x यादीतून लायब्ररी काढते; फाइलला हात लागत नाही. सामायिक {{ui:Library}} वेगळी गोष्ट आहे: पहा [फाइलमधून किंवा लायब्ररीतून घाला](topic:insert-from-file-and-library).

### BCONVERT

किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. पुनरावृत्त होणारी भूमिती शोधते आणि प्रत्येक प्रत एका ब्लॉकच्या संदर्भात बदलते.

- `Select the objects that repeat, or [Block]`: एका प्रतीच्या वस्तू. `B` त्याऐवजी अस्तित्वात असलेला ब्लॉक नाव देते, त्याच्या वस्तूंच्या सुट्या प्रती शोधण्यासाठी.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` आणि `P` प्रत म्हणून काय मोजले जाते ते बदलतात; {{key:Enter}} शोधते. सेटिंग्ज लक्षात ठेवल्या जातात.
- `Name for the new block <Block1>`, नंतर `Specify the block's base point` ({{key:Enter}} निवडीच्या खालच्या-डाव्या कोपऱ्याला घेते).
- समान भूमिती असलेले इतर वस्तूंचे संच किती आहेत ते सांगते, ते बदलेल ते सर्व ठळक करते, आणि `Yes/No` विचारते.

प्रत म्हणजे तीच वस्तू कोणत्याही कोनाने हलवलेली आणि फिरवलेली (आणि ती चालू असल्यास एका गुणकाने आरसा किंवा स्केल केलेली): प्रत्येक वस्तूचा जुळणारा भाग असला पाहिजे, निवडीच्या आकाराच्या दशलक्षांश भागापर्यंत. प्रत्येक संदर्भाला स्वतःचे फिरवणे आणि स्केल मिळते (आरशाचा ऋण Y स्केल), आणि वस्तू सामायिक करत असलेला लेयर. लॉक केलेल्या लेयरवरील वस्तू तशाच राहतात आणि मोजल्या जातात. ते खुली जागा शोधते (मॉडेल किंवा उघडी शीट). खूप मोठी शोध कार्य मर्यादेवर थांबते आणि ते तसे सांगते. एक पूर्ववत करा पायरी.

### BSEARCH

किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: ब्लॉकच्या नावाचा भाग, किंवा `*` आणि `?` असलेला नमुना. प्रत्येक ब्लॉक येथे आणि संपूर्ण ड्रॉइंगमधील त्याच्या संदर्भांसह यादी करते.
- `A`: विशेषता मूल्य, किंवा `TAG=value`. ज्यांच्या संदर्भांमध्ये ते आहे त्या ब्लॉकची सापडलेल्या मूल्यांसह यादी करते. स्थिर विशेषता मोजल्या जातात.
- `G`: वस्तू निवडा, किंवा एक ब्लॉक संदर्भ, आणि ज्यांचा आकार किमान 85% सारखा आहे ते ब्लॉक सर्वोत्तम प्रथम यादीत. आकार, फिरवणे आणि आरसा मोजला जात नाही. मोजमाप बाह्यरेषांवर पसरलेल्या बिंदूंमधील अंतरांची तुलना करते, त्यामुळे ते सारखेपणा शोधते; अचूक प्रती शोधण्यासाठी {{cmd:BCONVERT}} वापरा.

खुल्या जागेत सापडलेले संदर्भ पुढील आज्ञेसाठी तयार, निवडलेले असतात.

### BREPLACE

किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` तुम्ही निवडलेले ब्लॉक संदर्भ तुम्ही नाव दिलेल्या ब्लॉकने बदलते; `A` एक ब्लॉक आणि त्याची बदली विचारते आणि प्रत्येक संदर्भ बदलते, {{cmd:BLOCKREPLACE}} प्रमाणे (तोच कोड). संदर्भ त्याची जागा, स्केल, फिरवणे, लेयर आणि दोन्ही ब्लॉकमध्ये असलेल्या विशेषतांची मूल्ये ठेवतो; नव्या ब्लॉकला जागा नसलेली मूल्ये टाकली जातात आणि नावाने सांगितली जातात. `?` ब्लॉकची यादी दाखवते. एक पूर्ववत करा पायरी.

### DATAEXTRACTION

उपनावे: `EATTEXT`, `DX`; किंवा {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. ब्लॉक, त्यांच्या विशेषता आणि वस्तूंचे गुणधर्म तक्ता किंवा CSV फाइल म्हणून यादी करते.

- निवडीवर चालते, किंवा `Select objects (Enter: everything in this space)` विचारते.
- निवडीत दोन्ही असल्यास `List: [Blocks/Objects/All]`. नाव नसलेले ब्लॉक, तक्ते आणि सामग्री-सूची कधीच यादीत येत नाहीत.
- ते निवडण्यासाठी स्तंभ छापते (नाव, प्रकार, लेयर, X, Y, फिरवणे, स्केल, लांबी, क्षेत्र, रंग, linetype, जागा, आणि प्रत्येक विशेषता टॅगसाठी एक), नंतर `Columns, by name or number with commas between`. {{key:Enter}} तारांकित असलेले घेते: ब्लॉकसाठी नाव आणि प्रत्येक विशेषता; वस्तूंसाठी प्रकार, लेयर आणि लांबी.
- `Put identical rows together with a count? [Yes/No] <Yes>`, नंतर `Put the list in a: [Table/Csv] <Table>`. तक्ता हा साधा तक्ता असतो ({{cmd:TABLEDIT}} तो संपादित करते) आणि तो जिवंत नसतो: ड्रॉइंग बदलल्यावर आज्ञा पुन्हा चालवा.
- यादीत नसलेला स्तंभ नाकारते. तक्त्यात 1,999 डेटा ओळी बसतात; CSV फाइल त्या सर्व घेते.

### COUNTTABLE

निवडीच्या (किंवा खुल्या जागेच्या) ब्लॉक संदर्भांची मोजणी करते, आणि मोजणी तक्त्यात (`Block`, `Count`) किंवा CSV फाइलमध्ये ठेवते. ड्रॉइंगसोबत स्वतः अद्ययावत होणाऱ्या मोजणीसाठी पहा {{cmd:BOMTABLE}}.

## शीट्स आणि छपाई

### LAYOUT

उपनावे: `LO`, `NEWLAYOUT`; किंवा ड्रॉइंगखालील {{ui:+}} बटण. ISO A3 वर (किंवा इंच किंवा फुटातील ड्रॉइंग्जसाठी Tabloid) सीमा, शीर्षक ब्लॉक आणि एक व्ह्यूपोर्ट असलेली नवी शीट. प्रश्न नाहीत.

### MVIEW

उपनाव: `MV`. फक्त शीटवर ({{cmd:VPORTS}} शीटवर तेच करते).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. व्ह्यूपोर्ट संपूर्ण मॉडेल एका मानक स्केलवर दाखवतो.
- `P` (Polygonal): बाह्यरेषेचे कोपरे क्लिक करा (`Undo`, `Close`), पूर्ण झाल्यावर {{key:Enter}}. तीनपेक्षा कमी कोपरे नाकारते.
- `O` (Object): `Select a closed object for the viewport's outline`: शीटवरील बंद पॉलिलाइन, वर्तुळ किंवा लंबवर्तुळ. व्ह्यूपोर्ट त्याचा आकार घेतो (वक्र लहान सरळ तुकडे म्हणून); वस्तू जशी होती तशीच राहते. बंद नसलेली वस्तू नाकारते.

### VPCLIP

आधीच शीटवर असलेल्या व्ह्यूपोर्टला क्लिप करते. `Select viewport to clip` (किंवा आधी निवडा), नंतर `Select the object to clip to [Polygonal/Delete]`:

- बंद पॉलिलाइन, वर्तुळ किंवा लंबवर्तुळावर क्लिक करा, किंवा बहुभुजाचे कोपरे क्लिक करण्यासाठी {{key:Enter}} (किंवा `P`).
- `D` (Delete, व्ह्यूपोर्ट क्लिप केलेला असताना दिलेला) त्याला पुन्हा आयत बनवते: त्याच्याकडे असलेल्या बाह्यरेषेभोवतीचा बॉक्स.
- व्ह्यूपोर्ट कागदावर जे दाखवतो ते हलत नाही, आणि त्याचा स्केल कायम राहतो. मॉडेल फक्त बाह्यरेषेच्या आत काढले आणि छापले जाते, आणि सीमा त्याचे अनुसरण करते. एक पूर्ववत करा पायरी.
- क्लिप केलेल्या व्ह्यूपोर्टला त्याच्या बाह्यरेषेच्या प्रत्येक कोपऱ्यावर ग्रिप असते, तसेच त्याच्या केंद्रावर आणि त्याच्या बॉक्सच्या चार कोपऱ्यांवर (बॉक्सचा कोपरा ओढल्यास बाह्यरेषा त्यासोबत ताणली जाते). गुणधर्म Outline: Rectangle, किंवा कोपऱ्यांच्या संख्येसह Clipped दाखवतो.
- DWG आणि DXF 2000 फाइल्स बाह्यरेषा CadCraft साठी ठेवतात. इतर प्रोग्रॅम्स व्ह्यूपोर्ट त्याभोवतीचा आयत म्हणून उघडतात; DXF R12 फक्त आयत ठेवतो.
- मॉडेल टॅबवर व्ह्यूपोर्ट शीटवर असतात असे सांगते.

### VPORTS

उपनाव: `VIEWPORTS`. {{cmd:SPLIT}} शीटवरूनही तेच आहे, आणि {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} ते चालवतात. मॉडेलवर: `Enter number of panes [SIngle/2/3/4] <3>`; `2` `[Horizontal/Vertical] <Vertical>` विचारते (Vertical = बाजूबाजूला), `3` `[Left/Right] <Right>` विचारते (मोठा पॅन कुठे जातो). प्रत्येक पॅन स्वतःचे दृश्य आणि जागा ठेवतो; एक क्लिक पॅन सक्रिय करतो. शीटवर ते {{cmd:MVIEW}} आहे. [स्क्रीन विभाजित करा](topic:split-screen) पहा.

### VPVIEW

उपनाव नाही. फक्त शीटवर.

- `Select viewport` (एक निवडलेला असल्यास वगळले जाते), नंतर मॉडेलवर: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

उपनाव नाही. तुमची स्वतःची निर्देशांक प्रणाली; संपादन नाही. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: बिंदू नवा उगम आहे, नंतर `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: उगम, धन X अक्षावरील बिंदू, धन-Y बाजूवरील बिंदू. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` आणि नाव. नवा X अक्ष सपाट होईल असे दृश्य फिरते. [दृश्य फिरवा आणि स्वतःचे निर्देशांक वापरा](topic:ucs-and-turned-view) पहा.

### PLAN

उपनाव नाही. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: सक्रिय पॅनचे दृश्य असे फिरवते की त्या UCS चा X अक्ष (किंवा जगाचा) सपाट होईल. ड्रॉइंगमधील काहीही हलत नाही.

### TURNLEFT, TURNRIGHT, TURNWORLD

उपनाव नाही; किंवा {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. `UCS Z -90`, `UCS Z 90` आणि `UCS W` सारखेच, दृश्य त्याचे अनुसरण करत.

### VPLAYER

उपनाव नाही. शीटवर, किंवा व्ह्यूपोर्टच्या आत. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` लेयरची नावे विचारतात (स्वल्पविराम, `*` आणि `?` वाइल्डकार्ड), नंतर `[All/Select/Current] <Current>` व्ह्यूपोर्ट; Reset प्रत्येक लेयरला त्याच्या "नव्या व्ह्यूपोर्टमध्ये गोठवलेला" डीफॉल्टवर परत ठेवतो; `V` तो डीफॉल्ट सेट करतो (`[Frozen/Thawed]`), जो {{cmd:MVIEW}} वापरतो. `?` सध्याच्या व्ह्यूपोर्टमध्ये गोठवलेले लेयर यादी करते. लेयर्स पॅनलचा व्ह्यूपोर्ट स्तंभ एका व्ह्यूपोर्टसाठी तेच करतो. [एका व्ह्यूपोर्टमध्ये लेयर गोठवा](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport) पहा.

### MSPACE

उपनावे: `MS`; किंवा व्ह्यूपोर्टच्या आत दोनदा क्लिक करा. फक्त शीटवर. व्ह्यूपोर्टद्वारे मॉडेलवर काम करा: निवडलेला, शीटवरील एकमेव, किंवा `Click inside the viewport to work in`. आतील पॅन आणि झूम व्ह्यूपोर्टचे दृश्य बदलतात (डिस्प्ले-लॉक केलेला तो ठेवतो आणि त्याऐवजी शीट हलते); नवे दृश्य एक पूर्ववत करा पायरी म्हणून लिहिले जाते. [व्ह्यूपोर्टद्वारे मॉडेलवर काम करा](topic:sheets-and-viewports#work-on-the-model-through-a-viewport) पहा.

### PSPACE

उपनावे: `PS`; किंवा व्ह्यूपोर्टच्या बाहेर दोनदा क्लिक करा, किंवा ड्रॉइंगखालील टॅबवर क्लिक करा. शीटवर परत.

### PLOT

उपनावे: `PRINT`, `PUBLISH`, `EXPORTPDF`; किंवा {{key:Mod+P}}. {{ui:Plot to PDF}} संवाद उघडते. [PDF मध्ये छापा](topic:plot-pdf) पहा.

### PLOTSTYLES

उपनावे: `STYLESMANAGER`, `PSTABLES`; किंवा {{ui:Plot to PDF}} संवादातील {{ui:Edit tables…}}. {{ui:Plot style tables}} उघडते: प्रत्येक रंग काय म्हणून छापला जातो (रंग, राखाडी, शाई, रेषेची जाडी), ड्रॉइंगसोबत ठेवलेले. [छपाई शैली तक्ते](topic:plot-pdf#plot-style-tables) पहा.

### CHSPACE

{{cmd:CHSPACE}} वस्तू शीट आणि मॉडेलदरम्यान व्ह्यूपोर्टद्वारे हलवते, स्केल आणि फिरवलेल्या, त्यामुळे दुसऱ्या बाजूने पाहिल्यावर त्या सारख्याच दिसतात. शीटवर, वस्तू निवडा आणि त्या मॉडेलला जातात (शीटवर एकापेक्षा अधिक असल्यास व्ह्यूपोर्ट निवडा). व्ह्यूपोर्टद्वारे मॉडेलवर काम करताना ({{cmd:MSPACE}}), निवडलेल्या वस्तू शीटवर येतात. त्या किती पट मोठ्या किंवा लहान झाल्या ते सांगते. व्ह्यूपोर्ट त्यांच्या शीटवरच राहतात. एक पूर्ववत करा पायरी.

### ISODRAFT

{{cmd:ISODRAFT}} आयसोमेट्रिक ड्राफ्टिंग `ON` किंवा `OFF` करते, किंवा थेट `Left`, `Top` किंवा `Right` समतलावर नेते. चालू असताना: Ortho ({{key:F8}}) रेषा समतलाच्या दोन अक्षांसह ठेवते (डावीकडे: 90° आणि 150°; वर: 30° आणि 150°; उजवीकडे: 30° आणि 90°), polar tracking ({{key:F10}}) तेच अक्ष अनुसरते, grid वर स्नॅप ({{key:F9}}) आयसोमेट्रिक ग्रिड वापरतो, आणि ग्रिड ({{key:F7}}) 30°, 90° आणि 150° रेषांसह काढला जातो. {{cmd:ELLIPSE}} ला `Isocircle` मिळते: केंद्र आणि त्रिज्या (किंवा `Diameter`) द्या आणि ते सध्याच्या समतलावर वर्तुळ दिसते तसे लंबवर्तुळ काढते. ड्रॉइंग सपाट राहते: ही चित्रमय दृश्य काढण्याची साधने आहेत, 3D मॉडेल नाही. ही सेटिंग या सत्रासाठी असते आणि फाइलमध्ये जतन होत नाही.

### ISOPLANE

{{cmd:ISOPLANE}} आयसोमेट्रिक ड्राफ्टिंग कोणत्या समतलावर चालते ते निवडते: `Left`, `Top` किंवा `Right`. Enter पुढील समतलावर जाते. आयसोमेट्रिक ड्राफ्टिंग चालू असताना, {{key:F5}} आज्ञेच्या मध्यातही तेच करते; ते बंद असताना, {{key:F5}} ब्राउझरसाठी सोडले जाते.

## माहिती

### CAL

गणिताचे मूल्य छापते, जसे ते लांबी टाइप करता येते तेथे वाचले जाईल.

- `Expression`: ते टाइप करा, उदाहरणार्थ `12'6"+3/4"` किंवा `(24'-0")/3`, आणि {{key:Enter}} दाबा. CadCraft `= 12'-6 3/4"   (150.75 drawing units)` छापते. [टाइप केलेल्या मूल्यातील अंकगणित](topic:coordinate-entry#arithmetic-in-a-typed-value) पहा.

### DIST

उपनाव: `DI`; किंवा {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`, `Specify second point`. अंतर, कोन, Delta X आणि Delta Y छापते.

### AREA

उपनाव: `AA`; किंवा {{ui:View}} › {{ui:More}} › {{ui:Area}}. क्षेत्रफळ आणि परिमिती छापते.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - कोपरे क्लिक करा किंवा टाइप करा; `Specify next point (Enter closes) [Undo]` वर बाह्यरेषा बंद करण्यासाठी {{key:Enter}} दाबा. `U` शेवटचा कोपरा मागे घेते.
  - {{key:Enter}} किंवा `O`, नंतर `Select object`: वर्तुळ (त्याचा घेर छापते), लंबवर्तुळ, पॉलिलाइन (उघडी असल्यास क्षेत्रासाठी सरळ रेषेने बंद केली जाते आणि तिची लांबी छापली जाते) किंवा हॅच (छिद्रे वजा केली जातात).
  - `A` (Add area) आणि `S` (Subtract area) चालू बेरीज ठेवतात: प्रॉम्प्ट `(ADD mode)` किंवा `(SUBTRACT mode)` ने सुरू होतो, प्रत्येक क्षेत्र जोडले किंवा वजा केले जाते, आणि प्रत्येकानंतर `Total area = …` छापले जाते. या मोडमध्ये `O` Enter पर्यंत वस्तू निवडते, आणि पहिल्या प्रॉम्प्टवर {{key:Enter}} आज्ञा संपवते.

### MEASUREGEOM

उपनाव: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; प्रत्येक मापनानंतर पुन्हा विचारते, `eXit` डीफॉल्ट.

`Quick` पॉइंटरभोवती मोजते कारण तुम्ही तो हलवता: उजवीकडे, वर, डावीकडे आणि खाली असलेल्या सर्वात जवळच्या वस्तूपर्यंतचे अंतर (सध्याच्या UCS च्या अक्षांसह), जाताना काढलेले; आणि त्यांपैकी दोन शेजारी सरळ असून भेटतात तेथील कोन. क्लिक चार अंतरे, स्पष्ट रुंदी आणि उंची आणि कोन इतिहासात लिहिते; Enter पर्यायांवर परत जाते. ते स्क्रीनवर जे आहे ते वाचते.

- `D`: दोन बिंदू, {{cmd:DIST}} प्रमाणे.
- `R`: `Select arc or circle`; त्रिज्या आणि व्यास छापते.
- `A`: कंस (त्याचा समाविष्ट कोन), एक रेषा आणि मग दुसरी रेषा (त्यांच्यातील कोन, त्यांच्या दूरच्या टोकांच्या दिशेने), किंवा {{key:Enter}} आणि तीन बिंदू (शिरोबिंदू, नंतर दोन टोके).
- `AR`: {{cmd:AREA}} प्रमाणे, एक क्षेत्र.

### ID

उपनाव नाही. `Specify point`; त्याचे X आणि Y छापते.

### LIST

उपनावे: `LI`, `LS`. `Select objects`; प्रत्येक वस्तूचा प्रकार, लेयर आणि मुख्य मोजमाप छापते.

### MASSPROP

{{cmd:MASSPROP}} तुम्ही निवडलेल्या प्रदेशांचे आणि बंद वस्तूंचे विभाग गुणधर्म एकत्र घेऊन देते: क्षेत्र, परिमिती, सीमारेषा बॉक्स, केंद्रक, X आणि Y अक्षांभोवती उगमातून जाणारे जडत्वाचे क्षण, जडत्वाचा गुणाकार, जडत्वाच्या त्रिज्या, केंद्रकाभोवतीचे तेच क्षण, आणि मुख्य क्षण त्यांच्या अक्षांच्या दिशांसह. प्रदेशातील छिद्रे छिद्रेच मोजली जातात. आकडे ड्रॉइंग एककांत असतात आणि रेषा व कंसांनी बनलेल्या बाह्यरेषांसाठी अचूक असतात; लंबवर्तुळे आणि स्प्लाइन लहान सरळ खंड म्हणून मोजली जातात, आणि ते तसे सांगते. अहवालानंतर ते मजकूर फाइलमध्ये लिहायचे की नाही ते विचारते. बंद नसलेल्या वस्तू वगळल्या जातात, आणि किती ते सांगते.

## दृश्य, फाइल आणि इतर

### ZOOM

उपनाव: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. खिडकीसाठी दोन कोपरे क्लिक करा. `E`, `A` किंवा Enter: संपूर्ण ड्रॉइंग.
- `P` (Previous, किंवा टूलबारमधील {{ui:Previous}}) प्रत्येक टॅबसाठी 10 दृश्यांपर्यंत आधीच्या दृश्यावर परत जाते; व्हील स्टेप्सची मालिका किंवा एक पॅन एक दृश्य मोजले जाते.
- `2`, `2x` किंवा `0.5x` सारखी संख्या (किंवा `S` आणि नंतर संख्या) स्क्रीनच्या मध्याभोवती त्या गुणकाने झूम इन किंवा आउट करते.
- `C` `Specify center point` आणि `Enter height or magnification (nX)` विचारते.

### PDFATTACH, PDFIMPORT and the PDF commands

उपनावे: `PDFATT` {{cmd:PDFATTACH}} साठी, `PDFIM` {{cmd:PDFIMPORT}} साठी. {{cmd:PDFATTACH}} ड्रॉइंगखाली PDF पान ठेवते (फाइल, पान, घालण्याचा बिंदू, स्केल, फिरवणे); {{cmd:PDFIMPORT}} पानाच्या रेषा, वक्र, भरणे आणि मजकूर PDF च्या नावाच्या लेयरवरील ड्रॉइंग वस्तू बनवते, खऱ्या आकारात, टाइप केलेल्या स्केलवर, किंवा दोन बिंदू आणि खऱ्या अंतरावरून स्केल करून. {{cmd:PDFCLIP}} अंडरले क्लिप करते, {{cmd:PDFADJUST}} फिकटपणा, कॉन्ट्रास्ट, मोनोक्रोम सेट करते किंवा ते बंद करते, {{cmd:PDFLAYERS}} PDF चे स्वतःचे लेयर बदलते, आणि {{cmd:PDF}} ड्रॉइंगचे अंडरले वापरत असलेल्या फाइल्स CadCraft ला पुन्हा देते. [PDF अंडरले](topic:pdf-underlay) पहा.

### AUTOCOMPLETE

उपनाव: `AUTOC`. ड्रॉइंग स्वयंपूर्ण: कोणतीही आज्ञा चालू नसताना, राखाडी छाया दाखवते की ड्रॉइंगचे स्वतःचे नमुने पुढे काय येईल असे सांगतात. {{cmd:AUTOCOMPLETE}} त्याला `On` किंवा `Off` करते (तसेच सेटिंग्ज › CadCraft) किंवा आता काय सुचवेल ते `Show` करते. **Tab** छाया एक पूर्ववत करा पायरी म्हणून काढते, **Esc** ड्रॉइंग बदलेपर्यंत ती नाकारते. ते नवीन वस्तूंमध्ये तीन गोष्टी शोधते: सम अंतराने दोनदा किंवा अधिक काढलेल्या गोष्टीची पुढची प्रत (स्टड, स्तंभ, पायरीचा राइजर आणि ट्रेड), पॉलिलाइन पायऱ्यांची पुढची पायरी, आणि खोली किंवा भिंत साखळीची गहाळ बाजू. {{cmd:LINE}} किंवा {{cmd:PLINE}} च्या मध्ये छाया **पुढचा बिंदू** असते: पायरीची पुढची पायरी (राइजर, ट्रेड, राइजर…), आयताचा चौथा कोपरा, तो बंद करणारा बिंदू, किंवा आणखी एक समान पायरी. पॉइंटर जवळ आणा आणि **Tab** दाबा, जणू तेथे क्लिक केले; पुढे जा किंवा Enter दाबा. हे नियमांनुसार या संगणकावर, कोणत्याही मॉडेलशिवाय काढले जाते.

### AUTOSHEET

उपनाव: `ASH`. स्वतः मांडणी होणाऱ्या शीट्स. {{cmd:AUTOSHEET}} ड्रॉइंगचे तुकडे घेते (तुमची नामांकित दृश्ये, किंवा मॉडेलचे वेगळे तुकडे, किंवा संपूर्ण मॉडेल), कागदाचा आकार निवडते (किंवा तुम्ही दिलेला), प्रत्येक तुकड्याला मानक स्केल देते (सर्वांसाठी एक, किंवा प्रत्येक जितका घेऊ शकतो तितका मोठा), आणि दृश्ये नव्या शीट्सवर ओळींत ठेवते, शीर्षक ब्लॉक आणि प्रत्येकाखाली मथळा (नाव आणि स्केल) सह. एका शीटमध्ये न बसणारे भाग स्वतःची शीट मिळवतात. एक पूर्ववत करा पायरी. हे नियमांनुसार या संगणकावर, कोणत्याही मॉडेलशिवाय काढले जाते.

### PHOTOSKETCH

उपनाव: `PSK`. स्केचचे फोटो ड्रॉइंगमध्ये. कागदावरील हाताच्या स्केचचा फोटो (JPEG, PNG किंवा TIFF) निवडा. {{cmd:PHOTOSKETCH}} शीटचे चार कोपरे शोधते, परिप्रेक्ष्य सरळ करते, तुम्ही दिलेला कागदाचा आकार (`Paper`, किंवा जवळचा मानक) आणि स्केचचा `Scale` (1 : n) घेते, नंतर पेनच्या रेषा रेषा, कंस आणि वर्तुळांमध्ये काढते, प्रत्येक पेनच्या रंगासाठी एक लेयर (काळा, लाल, निळा, हिरवा). कागदाची कड सापडली नाही तर संपूर्ण फोटो शीट म्हणून घेते आणि ते सांगते. अक्षरे वगळली जातात. एक पूर्ववत करा पायरी. पारंपरिक प्रतिमा प्रक्रियेने या संगणकावर केले जाते, मॉडेलशिवाय, कुठेही पाठवले जात नाही. [स्कॅन केलेली ड्रॉइंग्ज](topic:scanned-drawings) देखील पहा.

### AUTODIM

उपनाव: `ADIM`. नियमांनुसार स्वयं-डायमेन्शन. {{cmd:AUTODIM}} निवडलेल्या वस्तूंचे (किंवा संपूर्ण ड्रॉइंगचे) त्यांच्या पातळी आणि उभ्या कडांवरून डायमेन्शन करते: तुम्ही निवडलेल्या बाजूंवर (`Sides`) डायमेन्शनची साखळी, तिच्या बाहेर एक एकूण डायमेन्शन, प्रत्येक उघड्याची रुंदी (सरळ रेषांच्या भिंतींमधील अंतर), प्रत्येक आकाराच्या छिद्रासाठी एक व्यास, आणि `Grid` सह ग्रिड रेषांमधील अंतर. आधीच असलेले डायमेन्शन पुन्हा बनवले जात नाही. एक पूर्ववत करा पायरी. हे नियमांनुसार या संगणकावर, कोणत्याही मॉडेलशिवाय काढले जाते.

### GRIDMOVE

उपनाव: `GM`. ग्रिड रेषा हलवल्यास त्यावर लटकलेल्या गोष्टी सोबत जातात. {{cmd:GRIDMOVE}} ग्रिड रेषा (नाव grid किंवा axis म्हणणाऱ्या लेयरवरील रेषा) आणि तिच्यावर लटकलेल्या गोष्टी हलवते: रेषेवर टोक असलेल्या भिंती तिचे अनुसरण करण्यासाठी ताणल्या जातात, रेषेसोबतच्या भिंती पूर्णपणे हलतात, स्तंभ (रेषेवरील ब्लॉक संदर्भ आणि वर्तुळे), तिचा बबल आणि टॅग हलतात, आणि ज्या डायमेन्शनचे बिंदू तिच्यावर आहेत ते नवे अंतर मोजतात. दोन बिंदू द्या (रेषेच्या पलीकडील भागच मोजला जातो) किंवा `Distance`. एक पूर्ववत करा पायरी सर्व परत आणते. हे नियमांनुसार या संगणकावर केले जाते.

### DETAILS

उपनाव: `DET`. तपशील जे तुम्हाला शोधतात. {{cmd:DETAILS}} तुमच्या फर्मचे स्वतःचे तपशील ठेवते: `Add` या ड्रॉइंगचा एक ब्लॉक यादीत ठेवते, `List` आणि `Remove` ती व्यवस्थापित करतात, `Find` निवडलेल्या (किंवा तुम्ही शेवटचे काढलेल्या) गोष्टीसाठी त्यांच्या लेयरची नावे, ब्लॉकची नावे, हॅच नमुने आणि नोट्सवरील शब्दांवरून, प्रत्येक तपशिलाच्या नाव आणि नोट्सशी तुलना करून त्यांना क्रम देते, त्यामुळे खिडकीचे हेड तुमचे सिल फ्लॅशिंग शोधते. ठेवण्यासाठी एक संख्या आणि एक बिंदू निवडा. सेटिंग्ज › CadCraft मध्येही असलेला `Hint` चालू असल्यास, तपशिलाशी जुळणारी वस्तू निवडल्यास स्टेटस बारमध्ये एक ओळ येते. यादी या ब्राउझरमध्ये, या संगणकावर ठेवली जाते, आणि ती यादीच शोधली जाते. `Share` ती तुमच्या Documents फोल्डरमध्येही ठेवते (`.cadcraft/firm-details.json`, प्रत्येक ब्लॉकच्या ड्रॉइंगसह): `Pull` तुमच्या टीमकडे आहे पण तुमच्याकडे नाही ते जोडते, `Push` तुमच्याकडे आहे पण त्यांच्याकडे नाही ते जोडते, `Both` दोन्ही करते, आणि दोन्ही बाजूंपैकी काहीही काढले जात नाही. प्रथम Documents फोल्डर उघडा ({{cmd:DOCUMENTS}}); तो फोल्डर Team Cloud Plan फोल्डर असल्यास, संपूर्ण टीम एक यादी सामायिक करते. लायब्ररी पॅनलमधील तपशील आयटमला **Add to my firm's details** बटण आहे, जे ते त्याच यादीत ठेवते. हे नियमांनुसार या संगणकावर, शब्दांनुसार काढले जाते, मॉडेलशिवाय.

### SKETCHFIX

उपनाव: `SKF`. पेनच्या स्केचेस अचूक भूमितीत बदलतात. एका वेळी एक मुक्तहस्त स्ट्रोक दाबा आणि ओढा (पेन, माउस किंवा बोट), नंतर Enter. प्रत्येक स्ट्रोक रेषा, वर्तुळ, कंस, आयत किंवा पॉलिलाइन म्हणून वाचला जातो: जवळजवळ आडव्या आणि उभ्या रेषा अचूक आडव्या आणि उभ्या केल्या जातात, बंद गोल स्ट्रोक वर्तुळ होतो, काटकोन असलेले चार कोपरे असलेला बंद स्ट्रोक आयत होतो, आणि स्ट्रोकची टोके एकत्र ओढली जातात आणि ड्रॉइंगमध्ये आधीच असलेल्या टोकांकडे ओढली जातात. एक पूर्ववत करा पायरी. हे नियमांनुसार या संगणकावर, कोणत्याही मॉडेलशिवाय काढले जाते.

### SCANATTACH and the scanned-drawing commands

उपनावे: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} ला उपनाव नाही. ते चित्रावर काम करतात, प्रत्येकी एक पूर्ववत करा पायरी. {{cmd:SCANATTACH}} PNG, JPEG, TIFF (एक पान किंवा सर्व) किंवा चित्र असलेले PDF पान घालते. {{cmd:SCANSCALE}} दोन निवडलेल्या बिंदूंवरून आणि खऱ्या अंतरावरून शीट स्केल करते. {{cmd:SCANALIGN}} त्याला दोन बिंदूंवर हलवते आणि फिरवते (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} शीटच्या लांब रेषांचा कोन दाखवते आणि तुम्ही `Accept` किंवा `Value` दिल्यावर शीट फिरवते. {{cmd:SCANCLEAN}} ते काळे-पांढरे करते (`Threshold` Auto/Adaptive/Level, `Specks`) आणि `Run`. {{cmd:SCANCROP}} एक खिडकी ठेवते. {{cmd:SCANERASE}} `Rectangle`, `Polygon` किंवा `Lasso` पुसते. {{cmd:SCANTRACE}} रेषा आणि कंस नव्या लेयरवर काढते (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) आणि त्याला काय सापडले आणि काय राहिले ते सांगते. {{cmd:SCANINFO}} मूळ फाइल आणि पायऱ्या यादी करते. {{cmd:RASTERSNAP}} स्कॅन केलेल्या शीट्सच्या रेषांवर स्नॅप चालू किंवा बंद करते. [स्कॅन केलेली ड्रॉइंग्ज आणि ट्रेस](topic:scanned-drawings) हा विषय पहा.

### REGEN and REGENALL

उपनावे: `RE` {{cmd:REGEN}} साठी, `REA` {{cmd:REGENALL}} साठी. ड्रॉइंगवरून स्क्रीनवर जे काढले आहे ते पुन्हा बनवते: {{cmd:REGEN}} तुम्ही पाहत असलेला टॅब (शीटवर, त्याचे व्ह्यूपोर्ट दाखवतात ते मॉडेलसुद्धा), {{cmd:REGENALL}} प्रत्येक टॅब, प्रत्येक स्क्रीन-विभाजित पॅन आणि प्रत्येक उघडे ड्रॉइंग. स्क्रिप्ट केलेल्या किंवा खूप मोठ्या बदलानंतर चित्र जुने दिसत असल्यास, किंवा सहाय्यकाने ड्रॉइंग संपादित केले असल्यास ते वापरा; ड्रॉइंग स्वतः स्पर्श केले जात नाही, त्यामुळे पूर्ववत करण्यासारखे काही नसते.

### NAMEDVIEW

उपनावे: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, नंतर दृश्याचे नाव. `S` स्क्रीनवरील दृश्य जतन करते, `W` तुम्ही निवडलेली खिडकी, `R` जतन केलेले दृश्य दाखवते, `D` एक हटवते, `?` या टॅबची दृश्ये यादी करते. विद्यमान नावाने जतन केल्यास ते बदलले जाते; प्रत्येक बदल एक पूर्ववत करा पायरी असतो. दृश्ये ती ज्या टॅबवर जतन झाली त्याची असतात. DWG आणि DXF फाइल्स त्यांना ठेवतात (VIEW तक्ता); शीटची दृश्ये पहिल्या शीटवर परत येतात, कारण फाइल सांगत नाही की ती कोणती.

### UNDO and REDO

उपनाव: `U` {{cmd:UNDO}} साठी; {{cmd:REDO}} ला उपनाव नाही. {{key:Mod+Z}} आणि {{key:Mod+Y}} देखील.

### LAYER

उपनाव: `LA`. {{ui:Layers}} पॅनलवर जाते.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` किंवा नाव (`?` त्यांची यादी करते: Continuous, ड्रॉइंगचे स्वतःचे, आणि DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE त्यांच्या `2` (अर्धे) आणि `X2` (दुप्पट) आकारांसह). {{cmd:LWEIGHT}} (`LW`): नव्या वस्तूंसाठी रेषेची जाडी mm मध्ये, किंवा `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): ड्रॉइंगचा linetype स्केल (पूर्ववत करता येतो). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — स्टेटस बारमधील {{ui:LWT}} बटणासारखेच. [रेषेची जाडी आणि linetype](topic:units-papers-scales#line-weights-and-linetypes) पहा.

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, नंतर नवे नाव; वस्तू किंवा संदर्भ त्याचे अनुसरण करतात. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` {{key:Enter}} पर्यंत, नंतर `Select object on target layer or [Name]` आणि `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, नंतर `Y`: लेयर आणि त्यावरील प्रत्येक वस्तू जाते (layer 0, DEFPOINTS किंवा सध्याचा लेयर नाही). प्रत्येकी एक पूर्ववत करा पायरी. [लेयरसह ड्रॉइंग व्यवस्थित करा](topic:layers#rename-merge-and-delete-layers) पहा.

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

वस्तू निवडून लेयर; {{ui:Layers}} पॅनलच्या {{ui:Tools}} मेनूमध्येही. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, नंतर {{key:Enter}}: इतर प्रत्येक लेयर बंद होतो. {{cmd:LAYUNISO}} ते परत चालू करतो. {{cmd:LAYOFF}} आणि {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (किंवा गोठवलेला), वारंवार; `U` शेवटचा मागे घेते, {{key:Enter}} संपवते. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} प्रत्येक लेयर चालू करतो, {{cmd:LAYTHW}} प्रत्येक लेयर वितळवतो. प्रत्येक आज्ञा एक पूर्ववत करा पायरी. [वस्तू निवडून लेयरवर काम करा](topic:layers#work-on-layers-by-picking-objects) पहा.

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} रिकामे ड्रॉइंग सुरू करते आणि {{cmd:OPEN}} DWG किंवा DXF उघडते, प्रत्येकी ड्रॉइंगवरील स्वतःच्या टॅबमध्ये (न वापरलेले नवे ड्रॉइंग नव्या टॅबऐवजी वापरले जाते). न जतन केलेले बदल असलेला टॅब बंद केल्यास आधी विचारले जाते. [स्क्रीन विभाजित करा](topic:split-screen) पहा.

{{cmd:SAVE}} (उपनाव `QSAVE`, तसेच {{key:Mod+S}}) ड्रॉइंगच्या स्वरूपात एक प्रत डाउनलोड करते: DWG मधून उघडले असल्यास DWG, DXF मधून असल्यास DXF. नवे ड्रॉइंग या ब्राउझरमध्ये Save as मध्ये शेवटचे निवडलेले स्वरूप वापरते, नाहीतर DWG.

{{cmd:SAVEAS}} (तसेच {{key:Mod+Shift+S}}) {{ui:Save a copy as}} संवाद उघडते: {{ui:DWG}} (आणि त्याची {{ui:Version}}), {{ui:DXF R12}} किंवा {{ui:DXF 2000}} निवडा, नंतर {{ui:Save}}. निवड या ड्रॉइंगसाठी आणि या ब्राउझरमधील नव्या ड्रॉइंग्जसाठी टिकते.

{{cmd:DXFOUT}} नेहमी DXF R12 प्रत डाउनलोड करते, {{cmd:SAVE}} वापरत असलेले स्वरूप न बदलता.

[फाइल्स: काय उघडते, काय जतन होते](topic:files#saving) पहा.

### TOUR

उपनाव: `TUTORIAL`. सहा-पायऱ्यांचा पहिल्या ड्रॉइंगचा फेरफटका पुन्हा सुरू करते. [सुरुवात करणे](topic:getting-started#prefer-to-be-guided) पहा.

### TOOLBARDOCK

उपनाव: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. [सेटिंग्ज](topic:settings#toolbar-position) पहा.

### COMMANDLINE

उपनाव: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: आज्ञा ओळ तळाशी जोडते किंवा तरंगती करते, तिला एक ओळ करते, दाखवण्यासाठी इतिहास ओळी किती ते विचारते (0 ते 12), किंवा इतिहास उघडते. [सेटिंग्ज](topic:settings#command-line) पहा.

### TOPAREA

`Top area [Standard/Compact]`: ड्रॉइंगवरील पट्ट्या पूर्वीप्रमाणे, किंवा संक्षिप्त. [सेटिंग्ज](topic:settings#top-area) पहा.

### POLARANG

`Enter polar angle step in degrees <90>`: ज्या पायरीवर {{ui:Polar}} ट्रॅकिंग रेषा रांगेत येतात (0 पेक्षा जास्त, 180 पर्यंत). या ब्राउझरमध्ये ठेवले जाते.

### UNITS

उपनाव: `UN`. लांबी कशा लिहिल्या आणि टाइप केल्या जातात.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural आणि Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. इतरांसाठी: `Enter number of decimal places (0 to 8)`.

नवे डायमेन्शन त्याचे अनुसरण करतात. एक पूर्ववत करा पायरी. {{ui:Current settings}} मधील {{ui:Length format}} आणि {{ui:Precision}} सारखेच; [फूट आणि इंच](topic:units-papers-scales#feet-and-inches-and-fractions) पहा.

### GDSIN

उपनाव: `GDS`. IC लेआउट (GDSII स्ट्रीम फाइल) पाहा: प्रयोगशाळेतील प्रायोगिक साधन, फक्त पाहण्यासाठी आणि मोजण्यासाठी.

- फाइल निवडक `.gds` फाइल घेतो; अनेक वरच्या सेल असल्यास, `Enter the top cell to draw`.
- प्रत्येक लेयर आणि datatype एक ड्रॉइंग लेयर बनतो (`GDS 1`, `GDS 2/5`), संदर्भ आणि अॅरे सपाट ठेवल्या जातात, फाइलच्या वापरकर्ता एककात (सहसा मायक्रोमीटर). एक पूर्ववत करा पायरी. काहीही सिम्युलेट किंवा तपासले जात नाही आणि फाइल परत लिहिली जात नाही.

### DIAGRAM

उपनावे: `TEXTDIAGRAM`, `T2D`. मजकुरावरून आकृती.

- एक बॉक्स मजकूर घेतो (किंवा आज्ञा ओळीवर `;` ने विभक्त एक ओळ): Mermaid फ्लोचार्ट, PlantUML घटक आकृती, D2 किंवा from-to यादी.
- `Specify the top left corner of the diagram`, नंतर `Specify the text height`.

ब्लॉक आणि कनेक्टर `Diagram` लेयरवरील साध्या वस्तू असतात, आज्ञा संपल्यावर निवडलेल्या. एक पूर्ववत करा पायरी. [मजकुरावरून आकृती काढा](topic:text-to-diagram) पहा.

### OLELIST

उपनावे: `OLES`. DWG मध्ये असलेल्या OLE वस्तू ज्या CadCraft स्वतः ठेवू शकत नाही.

- प्रत्येकाची यादी करते: क्रमांक, प्रकार, आकार, चित्र जतन केले की नाही.
- `Enter an option [Place/eXit] <eXit>`: Place क्रमांक, खालचा-डावा कोपरा आणि रुंदी विचारते, आणि चित्रासह एक चौकट काढते. एक पूर्ववत करा पायरी; ठेवलेली वस्तू बदलली जात नाही. [चित्रे](topic:pictures#objects-from-other-programs-ole) पहा.

### SHXFONTS

उपनावे: `SHX`. तुमचे स्वतःचे SHX फॉन्ट.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} फोल्डरमधील प्रत्येक `.shx` वाचते (CadCraft Studio; प्रत्येक सुरुवातीला पुन्हा), {{ui:Files}} निवडलेल्या फाइल्स घेते (ब्राउझर), {{ui:Reverse}} एका फॉन्टची अक्षरे शेवटच्या अक्षरापासून पहिल्यापर्यंत मांडते. लोड केलेला फॉन्ट नाव देणारी मजकूर शैली त्यात काढली जाते. [तुमच्या स्वतःच्या SHX फॉन्टमध्ये मजकूर काढा](topic:shx-fonts) पहा.

### LIMITS

ड्रॉइंग किती मोठे असावे.

- `Specify lower left corner or [ON/OFF] <current>`: एक बिंदू, `ON` किंवा `OFF`.
- `Specify upper right corner <current>`.

ग्रिड मर्यादा भरतो, {{cmd:ZOOM}} All त्या दाखवतो, आणि त्या ON असताना बाहेरील बिंदू नाकारला जातो (`**Outside limits`). एक पूर्ववत करा पायरी; DWG आणि DXF मध्ये जतन होते. [ड्रॉइंगच्या मर्यादा सेट करा](topic:drawing-limits) पहा.

### AUNITS

उपनाव: `ANGUNITS`. कोन कसे दाखवले आणि टाइप केले जातात.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, किंवा इतर दोनसाठी `Enter precision` (0 अंश, 2 मिनिटे, 4 सेकंद, सेकंदाचे 5 ते 8 दशांश).

एक पूर्ववत करा पायरी; DWG आणि DXF मध्ये जतन होते. {{ui:Current settings}} मधील {{ui:Angle format}} सारखेच. [बेअरिंग आणि कोन टाइप करा आणि दाखवा](topic:bearings-and-angles) पहा.

### APPLOAD

उपनावे: `AP`; किंवा {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. {{ui:Load applications}} संवाद: `.lsp` दिनचर्या आणि `.dcl` संवाद फाइल्स लोड करा, अनलोड करा, इतिहासातून पुन्हा लोड करा, आणि Startup Suite. दिनचर्येच्या `(defun c:NAME …)` आज्ञा मग इतर कोणत्याही आज्ञेप्रमाणे चालतात. [अॅप्लिकेशन्स लोड करा](topic:load-applications) आणि [LISP दिनचर्या चालवा](topic:run-lisp) पहा.

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (किंवा {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) तुमची उपनावांची फाइल (`ALIAS, *COMMAND` ओळी) उघडते; {{ui:Save}} ती लागू करते. {{cmd:REINIT}} ती पुन्हा लागू करते. [आज्ञांची उपनावे संपादित करा](topic:command-aliases) पहा.

### LISPEDIT

उपनावे: `VLIDE`; किंवा {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. LISP संपादक उघडते, एक खिडकी जी ड्रॉइंगच्या बाजूला उघडी राहते.

- मजकूर: ओळ क्रमांक, कर्सरवरील कंसाचा जोडीदार चिन्हांकित (जोडीदार नसल्यास लाल), {{key:Enter}} नव्या ओळीला उघड्या कंसाखाली इंडेंट करते, {{key:Tab}} दोन स्पेस टाइप करते, {{key:Esc}} मजकूर सोडते.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): प्रत्येक फॉर्म वाचते, {{cmd:APPLOAD}} फाइलसोबत करते तसे, आणि त्याच्या `c:` आज्ञा बनवते. फाइल {{cmd:APPLOAD}} च्या यादीत दिसते.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): निवडलेले फॉर्म, किंवा कर्सर ज्या फॉर्ममध्ये आहे तो मूल्यांकित करते.
- {{ui:Stop}}: चालू असलेली दिनचर्या संपवते.
- {{ui:Console}}: दिनचर्येने जे छापले ते, आणि प्रत्येक त्रुटी तिच्या ओळीसह; त्रुटीवर क्लिक करून तेथे जा. मजकूर एका वेळी एक सर्वोच्च-स्तरीय फॉर्म चालवला जातो, त्यामुळे ओळ फॉर्मची असते, किंवा त्याच्या आत, त्रुटी ज्या फंक्शनचे नाव देते त्याला कॉल करणारी ओळ.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): `.lsp` फाइल. मजकूर या ब्राउझरमध्येही ठेवला जातो, त्यामुळे खिडकी बंद केल्याने तो हरवत नाही.
- मजकुराच्या बाजूला: दिनचर्या परिभाषित करणारे फंक्शन्स, ती कॉल करत असलेली आणि हे LISP कडे अजून नसलेली, ती कॉल करत असलेली आणि त्यात परिभाषित नसलेली किंवा अंगभूत नसलेली, आणि जे अंगभूत आहे आणि जे नाही त्यांच्या पूर्ण याद्या.

कधीच बंद न होणारा कंस किंवा कधीच न संपणारा स्ट्रिंग असलेला मजकूर चालवला जात नाही: ओळ नाव दिली जाते. स्टेप-बाय-स्टेप डीबगर, ब्रेकपॉइंट किंवा वॉच खिडकी नाही. [LISP दिनचर्या चालवा](topic:run-lisp) पहा.

### HELP

उपनाव: `?`. प्रत्येक आज्ञा, तिची उपनावे आणि एका ओळीचे वर्णन आज्ञा ओळ इतिहासात छापते. ती ही मदत उघडत नाही: त्यासाठी {{key:F1}} दाबा किंवा {{ui:Help}} क्लिक करा.

## वस्तू निवडण्याचा प्रॉम्प्ट

प्रत्येक `Select objects` प्रॉम्प्टवर: वस्तूंवर क्लिक करा, खिडक्या (डावीकडून उजवीकडे) आणि छेद (उजवीकडून डावीकडे) दोन क्लिकने काढा, किंवा लॅसो दाबून ओढा ({{key:Space}} ओढताना: खिडकी, छेद, कुंपण), {{key:Shift}}+क्लिक काढण्यासाठी, आणि Enter दाबून पूर्ण करा. तुम्ही `ALL` (सर्व), `L` (शेवटची वस्तू), `P` (Previous: शेवटच्या आज्ञेने जे वापरले), `F` (Fence: बिंदूंची रेषा ओलांडणाऱ्या वस्तू; `U` एक बिंदू मागे घेते), `W` (Window), `C` (Crossing), `R` (Remove मोड: निवडीने वस्तू काढल्या जातात; प्रॉम्प्ट `Remove objects` वाचतो) आणि `A` (Add again) टाइपही करू शकता. `?` त्यांची यादी करते. ती प्रॉम्प्टमध्ये दाखवली जात नाहीत. {{key:Tab}} एकमेकांवर आलेल्या वस्तूंवर पुढची हायलाइट करते; ती निवडण्यासाठी क्लिक करा. [वस्तू निवडा](topic:select-objects) पहा.

### ACCESS

उपनाव: `AX`. दृष्टीशिवाय ड्राफ्टिंग. {{cmd:ACCESS}} Access चालू किंवा बंद करते (`On`, `Off`), आणि स्नॅप आवाज (`Sound`) आणि व्हॉइस आज्ञा (`Voice`) बदलते; प्रथम स्थिती सांगते. Access चालू असताना, प्रत्येक आज्ञा आणि निकाल तुमच्या स्क्रीन रीडरद्वारे बोलला जातो आणि ड्रॉइंग क्षेत्रात कीबोर्ड कर्सर असतो. "दृष्टीशिवाय ड्राफ्टिंग" हा मदत विषय कळा सांगतो.

### DESCRIBE

उपनाव: `DESC`. ड्रॉइंगमध्ये काय आहे ते सांगा: किती वस्तू, कोणत्या प्रकारच्या, किती मोठ्या, किती लेयर, काय निवडलेले आहे. फक्त वाचते; काहीही बदलत नाही.

### WHEREAMI

उपनाव: `WHERE`. कर्सर कुठे आहे ते ड्रॉइंगच्या एककांत सांगा.

### NEARBY

कर्सरजवळ काय आहे ते सांगा, सर्वात जवळचे प्रथम, प्रत्येकासह त्याचे अंतर आणि ती कोणत्या बाजूला आहे.

### SAYSEL

काय निवडलेले आहे ते सांगा, प्रत्येक वस्तूसाठी एक वाक्य (रेषेची लांबी, टोके आणि कोन; वर्तुळाची त्रिज्या आणि केंद्र; मजकूर लिहिल्याप्रमाणे).

### VOICE

बोललेल्या आज्ञा चालू किंवा बंद करा. त्या या संगणकावर ओळखल्या जातात; ब्राउझर ते करू शकत नसेल तेथे, सेटिंग्जमध्ये ब्राउझरची ऑनलाइन सेवा निवडल्याशिवाय व्हॉइस बंद राहतो.

### TOUCHCROSSHAIR

उपनाव: `TCX`. बोटाने ड्राफ्टिंगसाठी ऑफसेट क्रॉसहेअर, जेणेकरून बोटाचे टोक तुम्ही निवडलेला बिंदू झाकणार नाही. ते चालू असताना, ड्रॉइंगवरील एक बोट निवडत नाही: ते बोटाच्या वर आणि एका बाजूला असलेला क्रॉसहेअर हलवते. ऑब्जेक्ट स्नॅप आणि ट्रॅकिंग क्रॉसहेअरचे अनुसरण करतात. बोट उचलल्यास काहीही निवडले जात नाही आणि क्रॉसहेअर जेथे आहे तेथेच राहतो. निवडण्यासाठी, ड्रॉइंगच्या कोपऱ्यातील {{ui:Click}} बटण दाबा, किंवा दुसऱ्या बोटाने ड्रॉइंगवर कुठेही टॅप करा. दुसरे बोट हलवताना {{ui:Click}} धरून ठेवा आणि ओढा (निवड खिडकी, लॅसो, ग्रिप). स्थिर धरलेले बोट, किंवा {{ui:Enter}} बटण, म्हणजे Enter. दोन बोटे पूर्वीप्रमाणे पॅन आणि झूम करतात. खालच्या कडेजवळ आणि दूरच्या बाजूच्या कडेजवळ क्रॉसहेअर बोटाच्या जवळ येतो, त्यामुळे ड्रॉइंगचा प्रत्येक भाग पोहोचता येतो. पेन आणि माउस थेट निवडतात.

{{cmd:TOUCHCROSSHAIR}} स्थिती सांगते आणि `ON`, `OFF`, `Auto` (फक्त तेथे चालू जेथे बोट हा एकमेव पॉइंटर आहे, त्यामुळे माउस असलेल्या संगणकावर बंद), `Distance` (क्रॉसहेअर बोटापासून किती दूर, 24 ते 240 पिक्सेल) किंवा `Side` (`Left`: वर आणि डावीकडे, उजव्या हातासाठी; `Right` डाव्या हातासाठी; बटणे दुसऱ्या कोपऱ्यात जातात) विचारते. तीच निवड सेटिंग्ज › CadCraft मध्ये आहे, आणि टच स्क्रीन असलेल्या उपकरणावर स्टेटस बारमध्ये {{ui:Offset crosshair}} स्विच आहे. निवड या ब्राउझरमध्ये ठेवली जाते.

### WHOHAS

ड्रॉइंग कोणी उघडले आहे ते सांगते. संगणकावरील CadCraft Studio मध्ये DWG किंवा DXF उघडल्यास त्याच्या शेजारी एक लहान लॉक फाइल लिहिली जाते (`Plan.dwg.cclock`: कोण, कधीपासून, कोणती आवृत्ती), ड्रॉइंग उघडे असताना दर मिनिटाला ती ताजी केली जाते आणि ड्रॉइंग बंद झाल्यावर ती काढली जाते. कोणीतरी दुसऱ्याने उघडलेले ड्रॉइंग उघडल्यास, कोण आणि कधीपासून ते सांगते आणि {{ui:Open read-only}} (मग Save नवे नाव विचारते), {{ui:Open anyway}} (दुसऱ्या व्यक्तीला त्यांच्या पुढील ताजेपणात कळवले जाते) किंवा {{ui:Cancel}} देते. दुसऱ्याने उघडलेल्या फाइलवर जतन केल्यास प्रथम विचारले जाते. पाच मिनिटे ताजे न केलेला लॉक शिळा म्हणून सांगितला जातो: दुसरी प्रत जतन न करता बंद झाली किंवा संगणक झोपेत आहे.

{{cmd:WHOHAS}} `Current` (उघडे ड्रॉइंग), `File` (एक निवडा), `FOlder` (फोल्डर निवडा: त्यातील कुठेतरी उघडे असलेले प्रत्येक ड्रॉइंग यादीत), `Path` (पूर्ण मार्ग टाइप करा) किंवा `Name` (इतर लोकांना दिसणारे नाव; तुम्ही साइन इन असल्यास तुमच्या खात्याचे नाव) विचारते. Studio फक्त तुम्ही निवडलेल्या फोल्डरपर्यंत पोहोचू शकते: कधीही निवडला नसलेल्या फोल्डरमधून उघडलेल्या ड्रॉइंगसाठी ते एकदाच सांगते की ते ड्रॉइंग उघडे म्हणून नोंदवू शकत नाही; `FOlder` फोल्डर निवडते, आणि त्यानंतर तेथे लॉक काम करतात. लॉक लोकांसाठी एक नोंद आहे, अडथळा नाही: दुसरा प्रोग्रॅम अजूनही फाइल लिहू शकतो. ब्राउझरमध्ये पाहण्यासारखे फोल्डर नसतात, आणि आज्ञा ते सांगते.

### OVERKILL

डुप्लिकेट वस्तू काढते आणि एकमेकांवर आलेल्या रेषा आणि कंस नीटनेटके करते, दुप्पट रेषाकाम घेऊन येणाऱ्या ड्रॉइंग्जसाठी. `Select objects to clean up`, {{key:Enter}}, नंतर दाखवलेल्या सेटिंग्जसह स्वच्छ करण्यासाठी पुन्हा {{key:Enter}}, किंवा आधी एक बदला:

- `Tolerance`: दोन निर्देशांक एकच मानले जाण्यासाठी किती जवळ असले पाहिजेत (सुरुवातीला 0.000001; 0 म्हणजे अगदी सारखे).
- `Ignore`: दोन वस्तू अन्यथा सारख्या असताना बदलू शकणारे गुणधर्म. स्विच करण्यासाठी नाव टाइप करा: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, किंवा `None` / `All`. पूर्ण झाल्यावर {{key:Enter}}.
- `Overlap`: चालू किंवा बंद. चालू असताना, एका सरळ रेषेवरील एकमेकांवर आलेल्या रेषा एक रेषा होतात (दुसऱ्या रेषेच्या आत असलेली रेषा सरळ काढली जाते), आणि एकाच वर्तुळावरील एकमेकांवर आलेले कंस एक कंस होतात; पूर्ण वळण घेणारे कंस वर्तुळ होतात, आणि वर्तुळावर असलेला कंस काढला जातो.
- `Ends`: चालू किंवा बंद. चालू असताना, टोकापासून टोकापर्यंत स्पर्श करणाऱ्या एका सरळ रेषेवरील रेषा आणि एका वर्तुळावरील कंस एक तुकडा होतात.

प्रत्येक प्रकारच्या वस्तूची डुप्लिकेटसाठी तपासणी होते: दोन वस्तू डुप्लिकेट असतात जेव्हा त्यांची भूमिती सहनशीलतेत सारखी असते आणि त्यांचे लेयर, रंग, linetype, linetype स्केल, रेषेची जाडी, जाडी, पारदर्शकता आणि उंची जुळतात (तुम्ही दुर्लक्षित केलेले वगळून). रेषा आणि उघड्या पॉलिलाइन उलट दिशेने काढल्या असतानाही जुळतात. ड्रॉ क्रमातील पहिली वस्तू राहते आणि तिचे स्वतःचे गुणधर्म ठेवते. आज्ञा किती वस्तू तपासल्या आणि पुसल्या ते सांगते: डुप्लिकेट, एकत्र केलेले एकमेकांवर आलेले तुकडे, टोकापासून टोकापर्यंत जोडलेले तुकडे. एक {{cmd:UNDO}} सर्व परत आणते. सेटिंग्ज ड्रॉइंग विंडो बंद होईपर्यंत टिकतात.

ते सोडते: लॉक केलेल्या लेयरवरील वस्तू आणि लपलेल्या वस्तू. उंची (Z) असलेल्या रेषा ते एकत्र करत नाही (त्यांच्या अचूक डुप्लिकेट तरीही जातात), आणि पॉलिलाइनच्या आतील खंडांना (ते पातळ केले जात नाहीत), पॉलिलाइनच्या खंडावरील रेषेला, आणि उलट दिशेने काढलेल्या बंद पॉलिलाइनला स्पर्श करत नाही.

### DRAWORDER

कोणत्या वस्तू समोर काढल्या जातात ते बदलते. `Select objects to re-order`, {{key:Enter}}, नंतर `Above objects`, `Under objects`, `Front` किंवा `Back` ({{key:Enter}} = `Back`). `Above objects` आणि `Under objects` संदर्भ वस्तू विचारतात: निवड त्यांपैकी सर्वात पुढच्या वस्तूच्या अगदी समोर, किंवा सर्वात मागच्या वस्तूच्या अगदी मागे जाते. निवडलेल्या वस्तू आपापसांतील त्यांचा क्रम ठेवतात. एक पूर्ववत करा पायरी. हा क्रम DWG आणि DXF मध्ये ड्रॉइंगसोबत जतन होतो, जेथे तो वस्तू लिहिल्या जातात तो क्रम असतो.

स्क्रीनवर CadCraft आधी भरलेले क्षेत्र (घन हॅच, रुंद पॉलिलाइन, मास्क) काढते, मग रेषाकाम, मग मजकूर, त्यामुळे मजकूर नेहमी भरणाऱ्या भागावर वाचता येतो; ड्रॉ क्रम भरलेल्या वस्तूंमध्ये आणि चित्रांमध्ये दिसतो. सेव्ह केलेल्या क्रमात प्रत्येक वस्तू काढणारे इतर प्रोग्रॅम्स फाइल उघडतात.

### TEXTTOFRONT

खुल्या जागेतील इतर सर्व गोष्टींच्या समोर मजकूर, डायमेन्शन आणि लीडर आणते: `Text`, `Dimensions`, `Leaders` किंवा `All` ({{key:Enter}} = `All`). एक पूर्ववत करा पायरी. ते नसल्यास, किंवा ते आधीच समोर असल्यास ते तसे सांगते.

### HATCHTOBACK

खुल्या जागेतील प्रत्येक हॅच इतर सर्व गोष्टींच्या मागे पाठवते, त्यामुळे जतन केलेल्या फाइलमध्ये भरणे रेषाकाम आणि मजकूर झाकत नाही. प्रश्न नाहीत. एक पूर्ववत करा पायरी.

### ISOLATEOBJECTS

उपनाव: `ISOLATE`. फक्त निवडलेल्या वस्तू दाखवते: `UNISOLATEOBJECTS` पर्यंत खुल्या जागेतील बाकी सर्व दृष्टीआड जाते. {{cmd:LAYISO}} च्या विपरीत ते तुम्ही निवडलेल्या वस्तूंवर चालते, त्यांचे लेयर काहीही असो, आणि कोणताही लेयर बदलत नाही. लपवलेल्या वस्तू काढल्या जात नाहीत, निवडल्या जात नाहीत, स्नॅप होत नाहीत, झूम होत नाहीत किंवा छापल्या जात नाहीत, आणि `ALL` घेणारी आज्ञा त्यांना वगळते. वस्तू वेगळ्या असताना तुम्ही जे काढता ते नेहमीप्रमाणे दिसते.

हे फक्त सत्रासाठी आहे: त्याबद्दल काहीही ड्रॉइंगसोबत जतन होत नाही, ते एक पूर्ववत करा पायरी नाही, आणि ड्रॉइंग पुन्हा उघडल्यावर सर्वकाही दिसते. वस्तू लपवलेल्या असताना स्टेटस बारमध्ये त्यांच्या संख्येचे बटण दिसते; ते क्लिक केल्यास त्या पुन्हा दिसतात.

### HIDEOBJECTS

`UNISOLATEOBJECTS` पर्यंत निवडलेल्या वस्तू लपवते. {{cmd:ISOLATEOBJECTS}} सारखेच नियम: फक्त सत्रासाठी, जतन होत नाही, एक पूर्ववत करा पायरी नाही.

### UNISOLATEOBJECTS

उपनावे: `UNISOLATE`, `UNHIDE`. {{cmd:ISOLATEOBJECTS}} किंवा {{cmd:HIDEOBJECTS}} ने लपवलेल्या प्रत्येक वस्तू पुन्हा दाखवते, आणि किती परत आल्या ते सांगते.

### LAYLOCKFADE

लॉक केलेल्या लेयरवरील वस्तू कशा दिसतात आणि क्लिक त्यांच्यापर्यंत पोहोचते का ते सेट करते. सध्याची स्थिती सांगते, नंतर घेते:

- 0 ते 90 मधील संख्या: टक्केवारीत फिकटपणाची रक्कम (सुरुवातीला 50). 0 फिकटपणा बंद करते.
- `ON` किंवा `OFF`: फिकटपणा चालू किंवा बंद, रक्कम ठेवून.
- `Pick`, नंतर `Yes` किंवा `No`: आज्ञा चालू नसताना क्लिक लॉक केलेल्या लेयरवरील वस्तू निवडू शकते का? `No` (डीफॉल्ट): त्या अजिबात निवडता येत नाहीत. `Yes`: क्लिक किंवा खिडकी त्या निवडते जेणेकरून {{ui:Properties}} त्या दाखवू शकेल; त्या तरीही बदलता येत नाहीत, आणि आज्ञेचे स्वतःचे `Select objects` त्या कधीच घेत नाही.

ऑब्जेक्ट स्नॅप दोन्ही प्रकारे लॉक केलेल्या लेयरवरील वस्तू शोधतात. छपाई कधीच फिकट केली जात नाही. दोन्ही सेटिंग्ज तुमच्या आहेत, ड्रॉइंगच्या नाहीत, आणि सेटिंग्ज मध्ये {{ui:Locked layers}} खालीही आहेत.

### BURST

ब्लॉक संदर्भ स्फोट करते आणि त्यांच्या विशेषता काय सांगतात ते ठेवते. `Select block references to burst`, {{key:Enter}}: प्रत्येक संदर्भ ब्लॉकच्या वस्तूंनी बदलला जातो, आणि प्रत्येक दृश्यमान विशेषतेचे मूल्य त्या विशेषतेच्या स्वतःच्या लेयरवर साधा मजकूर बनते (लेयर 0 वरील विशेषता संदर्भाच्या लेयरवर जाते, ब्लॉकच्या इतर लेयर 0 वस्तूंप्रमाणे). अदृश्य विशेषता काढल्या जातात. ब्लॉकच्या आत असलेला ब्लॉक ब्लॉक संदर्भच राहतो. एक पूर्ववत करा पायरी; किती संदर्भ स्फोट झाले आणि किती विशेषता मूल्ये मजकूर झाली ते सांगते.

जोडलेले ड्रॉइंग नावाने नाकारते (आधी ते बाइंड करा, किंवा {{cmd:NCOPY}} ने त्यातून कॉपी करा), आणि इतर निवडलेल्या वस्तूंना एकटे सोडते. ब्लॉक संदर्भांसाठी {{cmd:EXPLODE}} तेच वस्तू देते; {{cmd:BURST}} फक्त ब्लॉक संदर्भ घेते आणि विशेषता मजकूर मोजते.

### TXT2MTXT

उपनाव: `T2M`. एक-ओळीचे मजकूर एका परिच्छेद मजकुरात जोडते. `Select single-line text to join`, {{key:Enter}}, नंतर `Paragraph` (ओळी एकत्र धावतात आणि सर्वात रुंद ओळीच्या रुंदीवर गुंडाळतात) किंवा `Lines` (प्रत्येक मजकूर स्वतःची ओळ राहतो); {{key:Enter}} शेवटी वापरलेले घेते. ओळी वरपासून खालपर्यंत, मग डावीकडून उजवीकडे, वरच्या मजकुराच्या दिशेने लावल्या जातात. परिच्छेद वरच्या मजकुराच्या वरच्या-डाव्या कोपऱ्यापासून लटकतो आणि त्याची उंची, फिरवणे, शैली, लेयर आणि रंग घेतो. एक पूर्ववत करा पायरी.

आधीच परिच्छेद मजकूर असलेला, रिकामा मजकूर आणि निवडीतील इतर वस्तू तशाच राहतात, आणि आज्ञा किती ते सांगते.

### NCOPY

ब्लॉक संदर्भ किंवा जोडलेल्या ड्रॉइंगमधील वस्तू काहीही स्फोट न करता ड्रॉइंगमध्ये कॉपी करते. `Pick an object inside a block reference or a linked drawing`: निवडीच्या सर्वात जवळची वस्तू ती जेथे दिसते तेथे कॉपी होते, ती कितीही ब्लॉक खोल असली तरी; आणखी निवडा, मग {{key:Enter}}. पुढे `Base point to move the copies`: {{key:Enter}} त्यांना जागेवरच ठेवते, किंवा आधार बिंदू आणि दुसरा बिंदू द्या. संपूर्ण आज्ञा एक पूर्ववत करा पायरी आहे.

प्रत त्या लेयरवर जाते जिथे ती दिसते: ब्लॉकमध्ये लेयर 0 वरील वस्तू ज्या संदर्भात होती त्याच्या लेयरवर जाते, आणि ByBlock रंग त्या संदर्भाचा रंग होतो. जोडलेल्या ड्रॉइंगमधून, `Plan|Walls` लेयर `Plan$0$Walls` होतो (दुवा देत असलेले नाव), जोडलेल्या लेयरच्या रंग, linetype आणि रेषेच्या जाडीने बनवलेला. विशेषतेचे मूल्य मजकूर म्हणून कॉपी होते. लॉक केलेल्या लेयरवरील ब्लॉक संदर्भ निवडता येत नाहीत.

### FLATTEN

निवडलेल्या वस्तूंची उंची (Z) आणि जाडी 0 करते. `Select objects to flatten`, {{key:Enter}}. निवड वापरत असलेल्या ब्लॉक व्याख्यांतील वस्तू (आणि त्यांच्या आतील ब्लॉक) देखील सपाट करते, त्यामुळे त्या ब्लॉकचा प्रत्येक संदर्भ बदलतो; जोडलेली ड्रॉइंग्ज जशी आहेत तशी राहतात. एक पूर्ववत करा पायरी; किती वस्तू बदलल्या ते सांगते, आणि त्यांना उंची किंवा जाडी नसल्यास ते तसे सांगते.

2D ड्रॉइंगमध्ये तिसऱ्या परिमाणाचे CadCraft काय ठेवते: वर्तुळे, कंस, लंबवर्तुळे, बिंदू, मजकूर, ब्लॉक संदर्भ, हॅच, लीडर आणि पॉलिलाइनवर उंची (त्यांचे एलिव्हेशन), रेषेच्या प्रत्येक टोकावर उंची, आणि रेषा, वर्तुळे, कंस, पॉलिलाइन, बिंदू आणि मजकुरावर जाडी, फाइलमध्ये होती तशी. {{cmd:FLATTEN}} नेमके तेच साफ करते. ते 3D टॅबवरील 3D मॉडेलला, 3D फेसेस किंवा सॉलिड्सला स्पर्श करत नाही, आणि झुकलेल्या समतलात काढलेली वस्तू फाइल उघडली तेव्हाच ड्रॉइंग समतलात आणली गेली होती.

### BREAKLINE

तोडण्याचे चिन्ह असलेली रेषा काढते, एका छोट्या दृश्यासाठी. ते सध्याचा आकार आणि विस्तार सांगते, नंतर `First point of the break line` (किंवा आधी बदलण्यासाठी `Size` / `Extension`), `Second point`, आणि `Where the break symbol sits`: रेषेवर बाजूने क्लिक करा, किंवा मध्यासाठी {{key:Enter}}. परिणाम सध्याच्या लेयरवर एक पॉलिलाइन असतो: रेषा, प्रत्येक बिंदूच्या पलीकडे विस्ताराइतकी चालत, आकाराइतका उंच आणि अर्धा लांब Z-आकाराच्या रेषेसह.

`Size` आणि `Extension` तुमच्या सेटिंग्ज म्हणून लक्षात ठेवले जातात (आकार डायमेन्शन मजकुराच्या उंचीच्या दुप्पट गुणिले डायमेन्शन स्केल; विस्तार आकाराच्या निम्मा). {{key:Enter}} आज्ञा पुन्हा करते.

### AUDIT

उघड्या ड्रॉइंगमध्ये नुकसान तपासते आणि दुरुस्त करते. {{cmd:AUDIT}} मॉडेलमधील, शीट्सवरील आणि ब्लॉकच्या आतील प्रत्येक वस्तू, आणि लेयर तक्ता तपासते, आणि ते जे सापडते ते प्रकारानुसार यादी करते:

- अ-परिमित किंवा अवाजवी मोठ्या संख्या;
- आकार नसलेल्या वस्तू: लांबी नसलेली रेषा, त्रिज्या नसलेले वर्तुळ, एक बिंदू असलेली पॉलिलाइन, अक्षरे किंवा उंची नसलेला मजकूर, शून्य स्केलचा ब्लॉक संदर्भ;
- ड्रॉइंगमध्ये नसलेल्या लेयरवरील वस्तू; नसलेल्या ब्लॉकचे संदर्भ; ड्रॉइंगमध्ये नसलेली मजकूर आणि डायमेन्शन शैली नावे आणि linetype नावे;
- स्वतःला असलेले ब्लॉक, थेट किंवा इतर ब्लॉकमधून;
- एकच id, की किंवा फाइल हँडल असलेल्या वस्तू;
- ज्या बिंदूंपासून ते मोजले आहेत ते नसलेले डायमेन्शन, आणि बंद बाह्यरेषा नसलेली हॅच सीमा.

मग `Fix them? [Yes/No]` विचारते. `No` काहीही बदलत नाही. `Yes` सर्व एका पूर्ववत करा पायरीत दुरुस्त करते: जे काढता येत नाही ते काढले जाते (वाईट संख्या, आकार नसलेले, नसलेला ब्लॉक, तुटलेला डायमेन्शन, वापरता येण्याजोगी सीमा नसलेला हॅच, ब्लॉकचे वर्तुळ बंद करणारा संदर्भ); नसलेला लेयर बनवला जातो; अनोळखी शैली आणि linetype नावे डीफॉल्टवर परत जातात; सामायिक की बदलली जाते. किती वस्तू काढल्या आणि किती दुरुस्त केल्या ते छापते. तेच निष्कर्ष **Problems** पॅनलमध्ये दिसतात, प्रत्येकासह स्वतःचे {{ui:Repair}}.

ते काहीही नाकारत नाही, पण ते फक्त CadCraft स्वतः काढते तेच तपासते: इतर प्रोग्रॅम्ससाठी ठेवलेला डेटा (3D सॉलिड्स, OLE वस्तू) उघडला जात नाही.

### RECOVER

खराब झालेली DXF किंवा DWG उघडते. {{cmd:RECOVER}} फाइल विचारते, नाकारण्याऐवजी वाचता येईल ते वाचते, वगळलेले किंवा गृहीत धरलेले सर्व यादी करते, आणि {{cmd:AUDIT}} `Yes` ने करते तसे ड्रॉइंग तपासते आणि दुरुस्त करते.

- DXF: कोड आणि मूल्य जोडीचा भाग नसलेल्या ओळी जोड्या पुन्हा जुळेपर्यंत वगळल्या जातात; शेवट नसलेला विभाग बंद केला जातो; अर्धवट कापलेली फाइल कापलेल्या भागापर्यंत वाचली जाते; अर्धवट कापलेली बायनरी DXF तिच्या शेवटच्या पूर्ण मूल्यापर्यंत वाचली जाते. विभाग, ब्लॉक किंवा वस्तू तरीही वाचता येत नसल्यास ती वगळली जाते आणि नाव दिले जाते, आणि वाचन त्यापुढे चालू राहते.
- DWG: तपासणी न पार पडणाऱ्या किंवा डीकोड न होणाऱ्या वस्तू वगळल्या जातात, आणि हरवलेली वस्तू यादी वस्तू डेटा चालून पुन्हा बांधली जाते.

डिस्कवरील फाइल बदलली जात नाही. पुनर्प्राप्त ड्रॉइंग न जतन केलेले उघडते: त्याला नव्या नावाने जतन करा. ज्या फाइलमधून काहीही वाचता येत नाही ती कारणासह नाकारली जाते.

### LEGACYTEXT

जुन्या 8-बिट व्हिएतनामी फॉन्टमध्ये टाइप केलेला मजकूर युनिकोडमध्ये बदलते. लहान नावे `TEXTTOUNICODE` आणि `VNTEXT`.

जुन्या व्हिएतनामी ड्रॉइंग्जमध्ये त्यांचा मजकूर पाश्चात्य अक्षरांच्या रूपात असतो जे फक्त फॉन्ट व्हिएतनामी बनवतो: ABC फॉन्टमधील TCVN3 मजकूर (`.VnTime`, `.VnArial`, आणि नावे `H` ने संपणारे मोठ्या अक्षरांचे फॉन्ट), आणि VNI फॉन्टमधील VNI मजकूर (`VNI-Times`). CadCraft असा मजकूर ड्रॉइंग उघडताच, मजकूर शैलीच्या फॉन्टने, वस्तूच्या फॉन्टने, किंवा परिच्छेद मजकुरातील एका भागाच्या फॉन्टने, तो वाचला जातो तसा दाखवते; फाइलमध्ये अजूनही जुनी अक्षरे असतात.

{{cmd:LEGACYTEXT}} प्रत्येक एन्कोडिंगमध्ये किती मजकूर सापडले ते सांगते आणि `Convert … to Unicode?` विचारते. `Yes` प्रत्येकाला पुन्हा लिहिते (मॉडेल, शीट्स, ब्लॉक, विशेषता मूल्ये आणि व्याख्या), आणि मजकूर शैलींना युनिकोड फॉन्ट देते (जुन्या फॉन्टच्या प्रकारानुसार Times New Roman, Arial किंवा Courier New), एका पूर्ववत करा पायरीत. परिच्छेद मजकुरातील स्वरूप जसे आहे तसे राहते.

कोणताही मजकूर ओळखलेला फॉन्ट वापरत नसल्यास (ज्या शैलीने फॉन्टचे नाव गमावले आहे), ते `Read selected texts as [Tcvn3/Vni/None]` विचारते: एन्कोडिंग निवडा आणि मजकूर निवडा. आधीच युनिकोड असलेला मजकूर तसाच राहतो. डायमेन्शन मजकूर अधिलेखने आणि मल्टीलीडर मजकूर रूपांतरित होत नाहीत.
