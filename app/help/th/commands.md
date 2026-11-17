---
title: อ้างอิงคำสั่ง
summary: คำสั่งทุกตัวในแอปร่างแบบ CadCraft พร้อมนามแฝง คำถามที่คำสั่งถาม ตัวเลือก และค่าเริ่มต้น
keywords: คำสั่ง, นามแฝง, รายการคำสั่ง, พื้นที่, เส้นรอบรูป, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, บล็อก, แทรก, เลย์เอาต์, พล็อต, ซูม, ช่วยเหลือ, copyclip, cutclip, pasteclip, pasteorig, copybase, ทำสำเนา, selectall
from: 7db2646b
---

พิมพ์ชื่อคำสั่งหรือนามแฝง แล้วกด {{key:Enter}} หรือ {{key:Space}} ไม่แยกตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก และจะละเว้น `_`, `-`, `.` หรือ `'` ที่อยู่หน้าคำสั่ง พิมพ์ `HELP` (หรือ `?`) เพื่อแสดงรายการคำสั่งทั้งหมดแบบย่อในประวัติบรรทัดคำสั่ง กด {{key:F1}} เพื่อดูวิธีใช้นี้

วิธีอ่านพรอมต์: ตัวเลือกอยู่ในวงเล็บเหลี่ยม และคุณเลือกตัวเลือกได้โดยพิมพ์ตัวอักษรพิมพ์ใหญ่ของตัวเลือกนั้น (`D` สำหรับ Diameter) ค่าเริ่มต้นอยู่ในวงเล็บมุม กด {{key:Enter}} เพื่อยอมรับค่านั้น เมื่อคำสั่งขอจุด คุณคลิกหรือพิมพ์รูปแบบใดก็ได้ใน [การป้อนพิกัดและระยะทาง](topic:coordinate-entry) เมื่อคำสั่งขอระยะทาง คุณพิมพ์ตัวเลขหรือคลิกสองจุดก็ได้

เมื่อคำสั่งต้องการจุดหรือวัตถุและไม่มีค่าเริ่มต้น การกด {{key:Enter}} จะจบคำสั่ง {{key:Esc}} ยกเลิกคำสั่ง สิ่งที่คำสั่งทำไปทั้งหมดเป็นหนึ่งขั้นตอนของการเลิกทำ

## วาด

### LINE

นามแฝง: `L` ส่วนของเส้นตรง แต่ละส่วนเป็นวัตถุของตัวเอง

- `Specify first point` (Enter: เริ่มจากจุดสุดท้ายที่คุณให้)
- `Specify next point [Undo]` ซ้ำไปเรื่อย ๆ เมื่อมีสองส่วนแล้วจะเป็น `[Undo/Close]`
- `U` ย้อนส่วนสุดท้ายกลับ `C` ปิดไปยังจุดแรกและจบ Enter จบคำสั่ง

### PLINE

นามแฝง: `PL` โพลีไลน์หนึ่งเส้นที่ประกอบจากส่วนของเส้นตรงและส่วนโค้ง

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (ปิดได้เมื่อมีสองส่วนแล้ว)
- `A` สลับไปวาดส่วนโค้ง: `Specify endpoint of arc [Line/CLose/Undo]` แต่ละส่วนโค้งต่อเนื่องแบบสัมผัสกับส่วนก่อนหน้า `L` กลับไปวาดเส้นตรง `CL` ปิดด้วยส่วนโค้ง
- Enter จบคำสั่ง โพลีไลน์จะยังคงเปิดอยู่

### CIRCLE

นามแฝง: `C`

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>` ถ้าพิมพ์ `D` จะขอ `Specify diameter of circle`
- `2P`: ปลายทั้งสองของเส้นผ่านศูนย์กลาง `3P`: สามจุดบนวงกลม
- `T` (ใช้ได้ด้วยคำสั่ง `TTR` และ {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle` ตามด้วยเส้นสัมผัสที่สอง แล้วจึงรัศมี (Enter: รัศมีล่าสุด) วงกลมจะสัมผัสวัตถุทั้งสอง (เส้น ส่วนโค้ง วงกลม ส่วนของโพลีไลน์ และภายในบล็อกด้วย) ในบรรดาวงกลมที่สัมผัสได้ วงกลมที่ใกล้จุดที่คุณเลือกมากที่สุดจะถูกใช้ ถ้าไม่มีวงกลมใดเข้ากันได้จะแสดง "Circle does not exist"
- `TTT` (หรือ {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): วัตถุสามชิ้น วงกลมที่สัมผัสทั้งสามชิ้น และใกล้จุดที่คุณเลือกมากที่สุด (เส้นสามเส้นจะได้วงกลมด้านในหรือด้านนอก ขึ้นกับตำแหน่งที่คุณเลือก)

### ARC

นามแฝง: `A`

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: ส่วนโค้งที่ผ่านสามจุด
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc` ส่วนโค้งจะวิ่งทวนเข็มนาฬิกาจากจุดเริ่มไปยังจุดจบ

### RECTANG

นามแฝง: `REC`, `RECTANGLE` โพลีไลน์ปิด

- `Specify first corner point`, `Specify other corner point` พิมพ์ `@width,height` เพื่อกำหนดมุมที่สอง

### POLYGON

นามแฝง: `POL` รูปหลายเหลี่ยมปกติเป็นโพลีไลน์ปิด

- `Enter number of sides <4>` (3 ถึง 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: คลิกหรือพิมพ์จุด ระยะห่างจากจุดศูนย์กลางจะกำหนดขนาด และทิศทางจะหมุนรูปหลายเหลี่ยม

### ELLIPSE

นามแฝง: `EL`

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis` แล้วระยะถึงแกนอีกด้าน
- `I` (`Isocircle` ใช้ได้เฉพาะเมื่อ {{cmd:ISODRAFT}} เปิดอยู่): จุดศูนย์กลาง แล้วรัศมีหรือ `Diameter` นี่คือรูปวงรีที่วงกลมปรากฏบนระนาบไอโซเมตริกปัจจุบัน

### HATCH

นามแฝง: `H`, `BH`, `BHATCH` หรือ {{ui:Hatch}} บนแถบเครื่องมือ จะแสดงรูปแบบ มาตราส่วน และมุมปัจจุบันก่อน

- `Pick internal point [Select objects/Pattern/SCale/Angle]` ซ้ำได้ (`Undo` ใช้ได้เมื่อมีพื้นที่แล้ว): แต่ละการคลิกจะเพิ่มพื้นที่ปิดรอบจุดนั้น โดยรูปปิดที่อยู่ข้างในจะเป็นเกาะ Enter จะสร้างแฮตช์เดียวจากทั้งหมด
- `S`: `Select closed objects` (โพลีไลน์ปิด วงกลม วงรีปิด)
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>` `SC`: `Specify pattern scale` `A`: `Specify pattern angle`
- `G` (Gradient): การเติมเป็นการไล่สีแทนลวดลาย ดู {{cmd:GRADIENT}} สำหรับคำถามของคำสั่งนี้

ดู [แฮตช์และการเติมพื้นที่](topic:hatch)

### GRADIENT

นามแฝง: `GD` เติมพื้นที่ด้วยการไล่สีหนึ่งหรือสองสี คำสั่งจะถามการไล่สีก่อน แล้วดำเนินต่อเหมือน {{cmd:HATCH}} (`Pick internal point`, `S` สำหรับวัตถุปิด และ {{key:Enter}} เพื่อจบ)

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>` ซ้ำได้ ทุกครั้งจะพิมพ์การไล่สีในสถานะปัจจุบัน
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` หรือรูปกลับด้านของรูปใดรูปหนึ่ง (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`) พิมพ์แค่ตัวอักษรนำหน้าก็พอ
- `O`: หนึ่งสี แล้วค่าความอ่อนแก่จาก 0 ถึง 1 (0 ทำให้เป็นสีดำ 0.5 คือสีนั้นเอง 1 ทำให้เป็นสีขาว) `TW`: สีแรกและสีที่สอง สีคือตัวเลขตั้งแต่ 1 ถึง 255 ตัวเลขสามค่าเช่น `255,128,0` หรือ `#rrggbb`
- `A`: มุมที่การไล่สีวิ่งไป `C`: กึ่งกลาง Yes หรือ No (No จะย้ายจุดกึ่งกลางของการไล่สีไปทางด้านหนึ่ง)
- คำสั่งจะปฏิเสธสีหรือประเภทที่ไม่รู้จัก และค่าความอ่อนแก่ที่อยู่นอกช่วง 0 ถึง 1

{{cmd:HATCHEDIT}} `G` และ Properties (Gradient) ใช้เปลี่ยนการไล่สีภายหลัง หรือเปลี่ยนแฮตช์ใดก็ได้ให้เป็นการไล่สี การไล่สีจะถูกวาดบนหน้าจอและพล็อตด้วย DWG 2004 ขึ้นไปจะเก็บเป็นแฮตช์การไล่สีจริง ส่วน DXF 2000 และ DWG 2000 จะเก็บไว้สำหรับ CadCraft และโปรแกรมอื่นจะเห็นเป็นการเติมทึบด้วยสีแรก

### HATCHGENERATEBOUNDARY

นามแฝง: `HGB` สร้างขอบเขตขึ้นใหม่จากแฮตช์ที่สูญเสียขอบเขตไป `Select hatches` (หรือเลือกไว้ก่อน) แล้วจึง `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`

- แต่ละวงของแฮตช์จะกลายเป็นโพลีไลน์ปิดบนเลเยอร์ของแฮตช์ โพลีไลน์ใหม่จะยังถูกเลือกอยู่ ขอบโค้งจะกลับมาเป็นส่วนเส้นตรงสั้น ๆ ที่แฮตช์เก็บไว้
- เมื่อตอบ Yes แฮตช์จะติดตามขอบเขตใหม่ เหมือนแฮตช์ที่สร้างด้วย {{cmd:HATCH}} เป็นหนึ่งขั้นตอนของการเลิกทำ
- จะแจ้งเมื่อไม่ได้เลือกแฮตช์

### POINT

นามแฝง: `PO` หรือ {{ui:Draw}} › {{ui:More}} › {{ui:Point}} วัตถุจุดหนึ่งจุดต่อการคลิกหนึ่งครั้ง จนกว่าจะกด Enter

- `Specify a point`

### XLINE

นามแฝง: `XL` หรือ {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}} เส้นช่วยวาดที่ไม่มีที่สิ้นสุดทั้งสองทิศ ดู [เส้นช่วยวาดและเรย์](topic:construction-lines)

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]` แล้ว `Specify through point` สำหรับแต่ละเส้น จนกว่าจะกด Enter
- `A`: `Enter angle of construction line [Reference] <0>` `R` ขอ `Select a line object` ก่อน
- `B`: `Specify angle vertex point`, `Specify angle start point` แล้ว `Specify angle end point` สำหรับแต่ละเส้น
- `O`: `Specify offset distance [Through] <Through>` แล้ว `Select a line object` และ `Specify side to offset` (หรือ `Specify through point`) สำหรับแต่ละเส้น

### RAY

ไม่มีนามแฝง หรือ {{ui:Draw}} › {{ui:More}} › {{ui:Ray}} `Specify start point` แล้ว `Specify through point` สำหรับแต่ละเรย์ จนกว่าจะกด Enter

### TEXT

นามแฝง: `DT`, `DTEXT` หรือ {{ui:Text}} บนแถบเครื่องมือ ข้อความบรรทัดเดียว แต่ละบรรทัดเป็นวัตถุของตัวเอง

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>` แล้ว `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text` ซ้ำได้: Enter แต่ละครั้งจะขึ้นบรรทัดใหม่ข้างล่าง Enter บนบรรทัดว่างจะจบ {{key:Space}} พิมพ์เว้นวรรคได้ตรงนี้

### DIVIDE

นามแฝง: `DIV` {{cmd:DIVIDE}} วางเครื่องหมายบนเส้น ส่วนโค้ง วงกลม โพลีไลน์ สไปลน หรือวงรี เพื่อแบ่งให้เป็นส่วนเท่ากัน เลือกวัตถุ แล้วให้จำนวนส่วน (2 ถึง 32767) วัตถุแบบเปิดจะได้เครื่องหมายน้อยกว่าจำนวนส่วนหนึ่งจุด ส่วนวัตถุแบบปิดจะมีเครื่องหมายที่จุดเริ่มด้วย ตัววัตถุเองจะไม่ถูกตัด เครื่องหมายเป็นจุด `Block` จะถามบล็อกของแบบนี้แทน และถามว่าจะให้หมุนตามวัตถุหรือไม่ ความยาวตามสไปลนและวงรีวัดตามคอร์ดสั้น ๆ คำสั่งจะปฏิเสธข้อความ แฮตช์ และวัตถุอื่นที่ไม่มีความยาว

### MEASURE

นามแฝง: `ME` {{cmd:MEASURE}} วางเครื่องหมายทุกระยะที่กำหนดตามเส้น ส่วนโค้ง วงกลม โพลีไลน์ สไปลน หรือวงรี โดยนับจากปลายที่อยู่ใกล้จุดที่คุณเลือก (วัตถุปิด: นับจากจุดเริ่ม) ระบุความยาวโดยพิมพ์หรือจากสองจุด ปลายไกลของวัตถุแบบเปิดจะไม่มีเครื่องหมาย `Block` จะวางบล็อกที่แต่ละเครื่องหมายแทนจุด คำสั่งจะปฏิเสธความยาว 0 ความยาวที่ยาวกว่าวัตถุ และความยาวที่ทำให้มีเครื่องหมายเกิน 32767 จุด

### BOUNDARY

นามแฝง: `BO`, `BPOLY` {{cmd:BOUNDARY}} สร้างโพลีไลน์ปิดรอบพื้นที่ที่มีจุดที่คุณเลือก จากเส้น ส่วนโค้ง วงกลม โพลีไลน์ และเส้นโค้งใด ๆ ที่กั้นพื้นที่นั้นบนหน้าจอ ชิ้นที่อยู่บนส่วนโค้งหรือวงกลมจะกลับมาเป็นส่วนโค้ง ชิ้นของวงรีและสไปลนจะกลับมาเป็นส่วนเส้นตรงสั้น ๆ เมื่อ `Islands` เปิดอยู่ (ค่าเริ่มต้น) พื้นที่ปิดแต่ละพื้นที่ที่อยู่ข้างในก็จะได้โพลีไลน์ของตัวเองด้วย คลิกจุดต่อไปได้เรื่อย ๆ Enter จบ วัตถุที่กั้นพื้นที่จะยังคงเดิม และจะแจ้งเมื่อไม่มีพื้นที่ปิดตรงจุดนั้น

### BLEND

{{cmd:BLEND}} วาดสไปลนระหว่างปลายของเส้นโค้งแบบเปิดสองเส้น คลิกแต่ละเส้นใกล้ปลายที่จะต่อ `CONtinuity` เลือกได้ `Tangent` (สไปลนออกและเข้าตามทั้งสองเส้นโค้ง) หรือ `Smooth` (ยังให้ความโค้งตามทิศทางที่เส้นโค้งโค้งที่ปลาย) ตัวเลือกจะถูกจำไว้ตลอดเซสชัน เส้นโค้งทั้งสองจะไม่เปลี่ยน คำสั่งจะปฏิเสธวัตถุปิด และปลายสองด้านที่ชนกันอยู่แล้ว

### REGION

นามแฝง: `REG` {{cmd:REGION}} เปลี่ยนวัตถุปิดให้เป็นรีเจียน ซึ่งคือพื้นที่แบนที่คุณสามารถรวม ตัด และวัดได้ เลือกวงกลม โพลีไลน์ปิด วงรีปิด หรือสไปลนปิด หรือเส้น ส่วนโค้ง และโพลีไลน์เปิดที่ต่อปลายถึงปลายจนเป็นวงปิด แต่ละวงจะกลายเป็นรีเจียนหนึ่งชิ้นและแทนที่วัตถุต้นทาง ส่วนโค้งจะยังเป็นส่วนโค้ง วงรีและสไปลนจะกลายเป็นส่วนเส้นตรงสั้น ๆ สิ่งที่ไม่ปิดและไม่ได้ทำให้เกิดวงปิดจะคงไว้อย่างเดิม และคำสั่งจะบอกจำนวนชิ้นเหล่านั้น ในแบบ รีเจียนคือโพลีไลน์ปิดหนึ่งเส้นหรือมากกว่าที่รวมกันเป็นกลุ่มไม่มีชื่อ ดังนั้นการคลิกหนึ่งครั้งจะเลือกรีเจียนทั้งหมด และการคัดลอกจะได้รีเจียนใหม่หนึ่งชิ้น โปรแกรมอื่นที่เปิดไฟล์จะเห็นเป็นโพลีไลน์ปิด

เมื่อมีรีเจียนในแบบ {{cmd:UNION}}, {{cmd:SUBTRACT}} และ {{cmd:INTERSECT}} ในแท็บ 2D จะทำงานกับรีเจียน `UNION` รวมรีเจียนที่เลือกให้เป็นหนึ่งเดียว (รีเจียนที่แยกกันจะกลายเป็นรีเจียนเดียวที่มีหลายเส้นขอบ) `SUBTRACT` จะถามรีเจียนที่จะลบออกจาก แล้วถามรีเจียนที่จะเอาออก (รูจะยังเป็นส่วนหนึ่งของรีเจียน) `INTERSECT` เก็บพื้นที่ที่ทุกรีเจียนใช้ร่วมกัน แต่ละคำสั่งจะบอกพื้นที่ของผลลัพธ์และเป็นหนึ่งขั้นตอนของการเลิกทำ คำสั่งจะปฏิเสธเมื่อไม่เหลืออะไรหรือไม่มีส่วนที่ใช้ร่วมกัน ในแท็บ 3D และในแบบที่ไม่มีรีเจียน คำสั่งเดียวกันจะทำงานกับโซลิดเหมือนเดิม

## แก้ไขรูปทรง

นามแฝง: `MT`, `T` หรือ {{ui:Paragraph}} บนแถบเครื่องมือ ข้อความย่อหน้าที่ตัดคำตามความกว้างที่กำหนด พิมพ์ในตำแหน่งนั้นเลย

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: ความกว้างระหว่างสองมุมคือจุดที่ข้อความจะตัดบรรทัด `H` ขอ `Specify height`, `J` ขอ `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` ขอ `Enter line spacing factor (0.25 to 4)`, `R` ขอ `Specify rotation angle`, `W` ขอ `Specify width (0 for no wrapping)` และข้ามมุมที่สอง
- จากนั้นจะมีกล่องเปิดขึ้นบนแบบ พิมพ์ได้เลย กด {{key:Enter}} เพื่อขึ้นย่อหน้าใหม่ กด {{key:Mod+Enter}} หรือคลิกนอกกล่องเพื่อจบ กด {{key:Esc}} เพื่อยกเลิก แถบของกล่องใช้กำหนดความสูง ระยะบรรทัด ความกว้าง และการจัดชิด ดู [เพิ่มข้อความและป้าย](topic:text#write-a-note-that-wraps)

### TEXTEDIT

นามแฝง: `ED`, `DDEDIT` หรือดับเบิลคลิกที่ข้อความ `Select a text to edit` ซ้ำจนกด {{key:Enter}}: แต่ละข้อความจะเปิดในกล่องเดียวกัน หากเริ่มจากข้อความที่เลือกหรือดับเบิลคลิกไว้ คำสั่งจะแก้เฉพาะข้อความนั้นและจบ
### ERASE

นามแฝง: `E`, `DELETE` หรือกด {{key:Delete}} เมื่อมีวัตถุถูกเลือกอยู่

- `Select objects` (ข้ามไปเมื่อเลือกวัตถุไว้แล้ว)

### MOVE

นามแฝง: `M`

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement` พิมพ์เป็น `dx,dy`

### COPY

นามแฝง: `CO`, `CP` คัดลอกได้เท่าจำนวนจุดที่คุณให้

`Array` ที่พรอมต์จุดที่สองจะสร้างแถวในครั้งเดียว ให้จำนวนรายการ (ต้นฉบับนับเป็นหนึ่ง) แล้วให้จุดที่สำเนาชิ้นแรกจะวาง ชิ้นอื่นจะตามระยะห่างเท่ากัน `Fit` ทำให้จุดนั้นเป็นตำแหน่งของสำเนาชิ้นสุดท้ายแทน โดยชิ้นอื่นจะกระจายเท่า ๆ กันระหว่างนั้น

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]` ซ้ำจนกด Enter `U` ย้อนสำเนาสุดท้ายกลับ

### ROTATE

นามแฝง: `RO`

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: เป็นองศา ทวนเข็มนาฬิกาเป็นค่าบวก หรือคลิกจุดเพื่อหมุนไปทางจุดนั้น

### SCALE

นามแฝง: `SC`

- `Select objects`, `Specify base point`
- `Specify scale factor`: พิมพ์ค่าสัดส่วน เช่น `0.5` หรือ `2` จุดที่คลิกจะให้ระยะห่างจากจุดฐานเป็นค่าสัดส่วน

### MIRROR

นามแฝง: `MI`

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

นามแฝง: `AL` หรือ {{ui:Modify}} › {{ui:More}} › {{ui:Align}}

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- เมื่อมีสองคู่: `Scale objects based on alignment points? [Yes/No] <N>`

ดู [จัดแนววัตถุ](topic:modify-objects#align-objects)

### ALIGNTO

- `Select objects` (หรือที่เลือกอยู่), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>` `P` จะขอจุด ที่เลือกจะยังคงอยู่

### DISTRIBUTE

- `Select objects` (อย่างน้อยสามชิ้น), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>` สองชิ้นนอกสุดจะอยู่ที่เดิม ที่เลือกจะยังคงอยู่

### ALIGNPANEL

นามแฝง: `ALP` หรือ {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} เปิดพาเนลที่ทำงานของ ALIGNTO และ DISTRIBUTE ด้วยการคลิก

### LASER

นามแฝง: `LASERCUT` หรือ {{ui:View}} › {{ui:More}} › {{ui:Laser…}} เปิดพาเนลเลเซอร์ทับบนแบบ แสดงว่าแต่ละเลเยอร์ทำอะไร (ตัด ขีด สลัก เติม รูปภาพ) ตัวอย่าง G-code ของ GRBL ที่บันทึกได้ และการวางกรอบและส่งผ่าน Web Serial ดู [ส่งแบบไปยังเลเซอร์](topic:laser-cutting)

### STRETCH

นามแฝง: `S` หรือ {{ui:Stretch}} `Select objects to stretch`: ลากกรอบข้าม (หรือพิมพ์ `C`) ครอบปลายที่จะเคลื่อนย้าย `Specify base point [Displacement]`, `Specify second point` จุดที่อยู่ภายในกรอบจะเคลื่อนที่: ปลายเส้น จุดยอดของโพลีไลน์ (ส่วนโค้งจะคงความสูงของตัวเอง) จุดของไดเมนชัน วงกลม วงรี ข้อความ จุด และบล็อกจะเคลื่อนทั้งชิ้นเมื่อจุดศูนย์กลางหรือจุดแทรกอยู่ภายในกรอบ การเลือกที่ทำไว้ก่อนคำสั่งจะเก็บกรอบข้าม (และลาสโซ) ที่สร้างมันไว้ จึงยืดแบบเดียวกัน หากไม่มีกรอบ วัตถุจะเคลื่อนทั้งชิ้น

### ARRAY, ARRAYRECT, ARRAYPOLAR

นามแฝง: `AR` หรือ {{ui:Array}} `Select objects` แล้ว `Enter array type [Rectangular/POlar] <Rectangular>` (เฉพาะ ARRAY)

- แบบสี่เหลี่ยมเริ่มที่ 4 คอลัมน์ × 3 แถว เว้นระยะเป็น 1.5 เท่าของขนาดวัตถุ และแสดงตัวอย่าง `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` ขอคอลัมน์และแถว `S` ขอระยะระหว่างคอลัมน์และระหว่างแถว (ค่าลบจะไปทางซ้ายหรือลง) `COL` และ `R` แต่ละอันกำหนดทิศทางเดียว
- แบบวงกลมจะขอ `Specify center point of array` เริ่มที่ 6 ชิ้นรอบครบวง และหมุนได้ `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` จำนวนชิ้น `F` มุมที่จะเติม (+ ทวนเข็มนาฬิกา − ตามเข็มนาฬิกา) `ROT` Yes หรือ No
- {{key:Enter}} (eXit) จะสร้างสำเนาเป็นวัตถุธรรมดา เป็นหนึ่งขั้นตอนของการเลิกทำ
- `AS` (ASsociative) สลับระหว่างสำเนาธรรมดากับอาร์เรย์ที่ยังแก้ไขได้ คืออ็อบเจ็กต์เดียวที่แก้ทีหลังได้ด้วย {{cmd:ARRAYEDIT}} ด้วยจุดจับหรือใน Properties ตัวเลือกจะถูกจำไว้ ({{cmd:ARRAYASSOCIATIVITY}}) และเริ่มที่สำเนาธรรมดา

### ARRAYPATH

คัดลอกไปตามเส้นโค้ง `Select objects` แล้ว `Select path curve`: เส้น ส่วนโค้ง วงกลม วงรี โพลีไลน์ หรือสไปลน (ไม่ใช่วัตถุที่กำลังทำอาร์เรย์) เส้นทางจะเริ่มที่ปลายที่ใกล้วัตถุมากกว่า และชิ้นแรกคือวัตถุที่อยู่ตรงนั้น

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>` พร้อมตัวอย่าง `M`: `Divide` กระจายรายการให้เท่ากันตลอดเส้นทาง `Measure` วางหนึ่งชิ้นทุกระยะที่กำหนดไปตามเส้นทาง `I`: จำนวนรายการ (กับ Measure ค่า 0 หมายถึงให้พอดีมากที่สุดเท่าที่จะใส่ได้ และจำนวนที่เกินความยาวของเส้นทางจะถูกลดให้พอดี) `SP`: ระยะห่างระหว่างรายการตามเส้นทาง (จะสลับไปเป็น Measure) `AL`: Yes ให้แต่ละรายการหมุนตามเส้นทาง No ให้ตั้งตรง
- `AS` เหมือนใน {{cmd:ARRAY}} เมื่อเปิดอยู่ อาร์เรย์จะเก็บรูปร่างของเส้นทางไว้เอง การแก้เส้นโค้งภายหลังจะไม่เคลื่อนรายการ
- คำสั่งจะปฏิเสธเส้นทางที่ไม่ใช่เส้นโค้ง และการมีรายการเพียงชิ้นเดียว

### ARRAYEDIT

แก้อาร์เรย์ที่สร้างด้วย ASsociative `Select array` (หรือเลือกไว้ก่อน) คำสั่งจะพิมพ์สถานะของอาร์เรย์ตอนนี้ แล้วถามจนกด {{key:Enter}}

- แบบสี่เหลี่ยม: `COL` คอลัมน์และระยะห่าง `R` แถวและระยะห่าง `A` มุมที่คอลัมน์วิ่งไป
- แบบวงกลม: `I` จำนวนรายการ `F` มุมที่เติม `ROT` หมุนรายการ Yes หรือ No
- แบบเส้นทาง: `M` Divide หรือ Measure `I` จำนวนรายการ `SP` ระยะห่าง `AL` จัดแนวตามเส้นทาง
- `S` (Source) จะเปิดวัตถุที่อาร์เรย์ทำซ้ำ ให้แก้ได้เองเหมือนตัวแก้ไขบล็อก วาดและแก้ที่นั่น {{cmd:ARRAYCLOSE}} จะบันทึกหรือทิ้ง และทุกรายการจะเปลี่ยนตาม
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects` แล้วคลิกรายการที่จะแทนที่ และกด {{key:Enter}} รายการเหล่านั้นจะแสดงวัตถุแทนแทน และวัตถุแทนจะออกจากแบบไปอยู่ในอาร์เรย์ `RES` (RESet) จะแสดงวัตถุต้นฉบับในทุกรายการอีกครั้ง
- แต่ละการเปลี่ยนแปลงเป็นหนึ่งขั้นตอนของการเลิกทำ คำสั่งจะปฏิเสธสำเนาธรรมดา การอ้างอิงบล็อกธรรมดา และอาร์เรย์บนเลเยอร์ที่ล็อก

ค่าตัวเลขเดียวกันอยู่ใน Properties ภายใต้ Array และอาร์เรย์มีจุดจับ: จุดฐานใช้เคลื่อนย้าย จุดจับที่รายการที่สองกำหนดระยะห่าง จุดจับหลังรายการสุดท้ายกำหนดจำนวน (แบบวงกลม: รายการที่สองกำหนดจำนวนรายการ รายการสุดท้ายกำหนดมุมที่เติม) {{cmd:EXPLODE}} จะเปลี่ยนอาร์เรย์กลับเป็นสำเนาธรรมดา

### ARRAYCLOSE

จบ Source ของ {{cmd:ARRAYEDIT}}: `Save the changes to the array's source objects? [Save/Discard] <Save>` จะแจ้งเมื่อไม่มีวัตถุต้นฉบับของอาร์เรย์ที่เปิดอยู่ {{cmd:BCLOSE}} ทำงานเหมือนกัน

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)` กำหนดว่า {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR และ {{cmd:ARRAYPATH}} จะเริ่มที่อะไร ตัวเลือก `AS` ของคำสั่งเหล่านั้นเปลี่ยนค่าเดียวกันนี้ จำไว้ในเบราว์เซอร์นี้

### OFFSET

นามแฝง: `O` เส้น ส่วนโค้ง วงกลม และโพลีไลน์

เมื่อโพลีไลน์เคลื่อนออกด้านนอกแล้วส่วนเส้นตรงแยกออกจากกันที่มุม {{cmd:OFFSETGAPTYPE}} จะกำหนดวิธีปิดช่องว่าง

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset` แล้ว `Specify point on side to offset` (หรือ เมื่อใช้ Through: `Specify through point`) ซ้ำจนกด Enter

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: วิธีที่ {{cmd:OFFSET}} ปิดช่องว่างที่มุมด้านนอกของโพลีไลน์ `0` ต่อส่วนออกไปจนกว่าจะชนกัน (ค่าเริ่มต้น) `1` เชื่อมด้วยส่วนโค้งรอบมุมเดิม `2` ด้วยการตัดเฉียง มุมด้านในและส่วนโค้งจะไม่ได้รับผลกระทบ เก็บไว้สำหรับเซสชันนี้

### EXTRIM

{{cmd:EXTRIM}} ตัดทุกอย่างที่อยู่ด้านหนึ่งของขอบ เลือกขอบที่จะใช้ตัด (เส้น ส่วนโค้ง วงกลม โพลีไลน์ วงรี สไปลน หรือเส้นช่วยวาด) แล้วเลือกจุดบนด้านที่จะเคลียร์ เส้น ส่วนโค้ง วงกลม โพลีไลน์ และเส้นช่วยวาดทุกเส้นที่ตัดกับขอบจะเสียส่วนที่อยู่ด้านนั้น โดยเริ่มที่ขอบ ขณะเลือกด้าน ชิ้นที่จะถูกตัดจะเคลื่อนตามตัวชี้ สำหรับขอบปิด ด้านคือด้านในและด้านนอก วัตถุที่แค่สัมผัสขอบ รวมถึงข้อความ แฮตช์ สไปลน และวงรีที่ตัดผ่านขอบ จะคงไว้อย่างเดิม เป็นหนึ่งขั้นตอนของการเลิกทำ

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: {{cmd:TRIM}} และ {{cmd:EXTEND}} จะเริ่มแบบไหน `1` Quick: ทุกวัตถุเป็นขอบตัดหรือขอบเขต `0` Standard: จะถามขอบก่อน ใน LISP ใช้ `(setvar "TRIMEXTENDMODE" 0)` ได้เช่นกัน

### TRIM

นามแฝง: `TR` จะพิมพ์ `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` ก่อน ในโหมด Quick วัตถุที่มองเห็นทุกชิ้นเป็นขอบตัด และวัตถุที่ไม่มีอะไรตัดจะถูกลบ ในโหมด Standard จะถาม `Select cutting edges (Enter = every object)` ก่อน และตัดเฉพาะที่ขอบเหล่านั้น

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]` ซ้ำ: คลิกชิ้นที่จะเอาออก (จะแสดงเป็นสีเทาและเส้นประขณะตัวชี้อยู่บนชิ้นนั้น) ลากเส้นทางผ่านหลายชิ้น (ทั้งหมดไปในขั้นตอนเดียว) หรือคลิกสองจุดว่างเพื่อสร้างรั้วระหว่างจุดนั้น {{key:Shift}} จะยืดแทน `T` เลือกขอบตัด (โหมด Standard) `F` ขอจุดรั้ว `C` สองมุมของกรอบ (ชิ้นที่อยู่ในกรอบบางส่วนจะถูกตัด) `O` จะถาม `Enter a trim mode option [Quick/Standard]` `E` จะถาม `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE) `R` ลบวัตถุที่คุณเลือก `U` ย้อนการเลือกหรือการลากล่าสุด Enter จบ ดู [ตัดแต่งและยืดออก](topic:trim-and-extend)

- การคลิกบนแฮตช์จะตัดแฮตช์: ขอบตัดจะแบ่งพื้นที่ที่แรเงาไว้ และชิ้นที่คุณคลิกจะถูกเอาออก (จะไม่มีเส้นขอบที่วาดไว้เหลือที่เดิม) แฮตช์จะเก็บลวดลายหรือการไล่สีไว้ แฮตช์ที่ผูกกับขอบเขตจะไม่ผูกอีกหลังจากนั้น เพราะไม่ได้เติมขอบเขตแล้ว คำสั่งจะแจ้งเมื่อไม่มีขอบตัดตรงนั้นแบ่งแฮตช์ เมื่อคลิกนอกแฮตช์ และเมื่อไม่มีอะไรเหลือ (ให้ใช้ {{cmd:ERASE}}) เส้นทางหรือรั้วที่ลากไม่ตัดแฮตช์

### EXTEND

นามแฝง: `EX` เหมือน TRIM แต่กลับทิศ: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]` การคลิกจะยืดปลายที่ใกล้จุดนั้นไปถึงขอบเขตถัดไป เส้นทางหรือรั้วที่ลากจะยืดทุกวัตถุที่มันตัดผ่าน {{key:Shift}} จะตัดแทน `B` เลือกขอบเขต (โหมด Standard) Mode และ Edge ใช้ร่วมกับ TRIM

### LINKVIEWS

นามแฝง: `SYNCVIEWS` หรือ {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}} หรือไอคอนลิงก์บนแท็บของแบบ `Link the panes' views [ON/OFF]` (Enter เปลี่ยนเป็นสถานะตรงข้าม) ขณะเปิดอยู่ การเลื่อนหรือซูมในพาเนลที่ทำงานอยู่จะเคลื่อนทุกพาเนลที่แสดงพื้นที่ประเภทเดียวกัน ดู [แบ่งหน้าจอ](topic:split-screen)

### OPENIN3D

ไม่มีนามแฝง หรือ {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} เมื่อแอปจำลองแบบ 3D รับแบบที่ส่งต่อมา จะเปิดแบบในแท็บใหม่ที่นั่น เป็น DWG (ไม่มีการอัปโหลดอะไร) หากเบราว์เซอร์บล็อกแท็บ คำสั่งจะแจ้ง

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: การกดแล้วลากในที่ว่างจะวาดอะไร เหมือนกับ การตั้งค่า › CadCraft › Dragging to select ดู [การเลือกด้วยลาสโซ](topic:lasso-selection)

### FILLET

นามแฝง: `F` เส้น ส่วนโค้ง วงกลม และโพลีไลน์ จะพิมพ์ `Current settings: Mode = TRIM, Radius = 0` ก่อน

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` ขอ `Specify fillet radius <last>` `T` ขอ `Enter Trim mode option [Trim/No trim]`: ถ้าเลือก No trim วัตถุจะคงเดิม และจะเพิ่มเฉพาะส่วนโค้ง
  - `M` ทำให้คำสั่งทำงานต่อสำหรับมุมอื่นจนกด {{key:Enter}} `U` ย้อนมุมสุดท้ายโดยไม่ออกจากคำสั่ง
  - `P` จะขอ `Select 2D polyline [Radius]` และทำให้ทุกมุมที่ส่วนเส้นตรงสองส่วนมาเจอกันโค้งมน การโค้งมนที่มีอยู่แล้วจะถูกแทนด้วยรัศมีใหม่ รัศมี 0 จะเอาออก มุมที่ด้านสั้นเกินไปสำหรับรัศมีจะถูกทิ้งไว้และนับจำนวน
- `Select second object or shift-select to apply corner [Radius]` กด {{key:Shift}} ค้างขณะคลิกเพื่อได้มุมแหลม ไม่ว่ารัศมีจะเป็นเท่าใด

คลิกแต่ละวัตถุบนส่วนที่คุณต้องการเก็บไว้ เส้นสองเส้นที่ไม่มาชนกันจะถูกยืดออก เส้นขนานสองเส้นจะได้ครึ่งวงกลมข้ามช่องว่าง ที่ปลายของเส้นแรกที่ใกล้จุดที่คลิกมากที่สุด วงกลมจะไม่ถูกตัดเลย ส่วนของโพลีไลน์เดียวกันสองส่วนที่ติดกันจะได้ส่วนโค้งอยู่ภายในโพลีไลน์ และโพลีไลน์กับวัตถุอื่นจะทำงานได้เมื่อการตัดลงที่ส่วนแรกหรือส่วนสุดท้ายของโพลีไลน์

### CHAMFER

นามแฝง: `CHA` เส้นและส่วนเส้นตรงของโพลีไลน์ จะพิมพ์ระยะปัจจุบัน (หรือความยาวกับมุม) ก่อน

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` ขอ `Specify first chamfer distance <last>` และ `Specify second chamfer distance <the first>`: ระยะแรกถูกตัดจากเส้นแรกที่คุณเลือก ระยะที่สองถูกตัดจากอีกเส้น
  - `A` ขอ `Specify chamfer length on the first line` และ `Specify chamfer angle from the first line`
  - `E` (mEthod) เลือกว่าการเฉือนมุมครั้งถัดไปจะใช้วิธีใดในสองวิธี `T`, `M`, `U` และ `P` ทำงานเหมือนใน {{cmd:FILLET}}
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]` {{key:Shift}}+คลิกจะได้มุมแหลม

ระยะที่ยาวกว่าเส้นจะถูกปฏิเสธ (`Distance is too large.`)

### BREAK and BREAKATPOINT

นามแฝง: `BR` `Select object` (จุดที่คุณคลิกคือจุดแรก), `Specify second break point [First point]` `F` ขอ `Specify first break point` และ `Specify second break point` ส่วนระหว่างจุดจะถูกเอาออก บนวงกลม จะเอาทวนเข็มนาฬิกาจากจุดแรก BREAKATPOINT จะขอ `Specify break point` และแบ่งวัตถุออกเป็นสองที่จุดนั้น (ใช้กับวงกลมไม่ได้)

### LENGTHEN

นามแฝง: `LEN` `Select an object to measure [DElta/Percent/Total/DYnamic]`: การเลือกหนึ่งครั้งจะพิมพ์ `Current length` (และมุมรวมของส่วนโค้ง) แล้วถามอีกครั้ง `DE` ขอ `Enter delta length (negative shortens) [Angle]` `P` ขอ `Enter percentage length` `T` ขอ `Specify total length [Angle]` `DY` ลากได้ จากนั้น `Select an object to change [Undo]` ซ้ำ ปลายที่ใกล้จุดคลิกที่สุดจะเคลื่อนที่ ใช้กับเส้น ส่วนโค้ง และโพลีไลน์แบบเปิด

### JOIN

นามแฝง: `J` `Select objects to join` เส้น ส่วนโค้ง และโพลีไลน์แบบเปิดที่มาต่อกันปลายถึงปลายจะกลายเป็นโพลีไลน์ (ปิดเมื่อโซ่นั้นปิด) เส้นที่อยู่บนเส้นเดียวกันจะกลายเป็นเส้นเดียว ส่วนโค้งของวงกลมเดียวกันจะกลายเป็นส่วนโค้งเดียวหรือวงกลม ประวัติจะบอกจำนวนวัตถุที่ต่อได้และที่ต่อไม่ได้

### MATCHPROP

นามแฝง: `MA`, `PAINTER` `Select source object` แล้ว `Select destination objects [Settings]` และ {{key:Enter}} คัดลอกเลเยอร์และสี และระหว่างวัตถุชนิดเดียวกัน จะคัดลอกความสูงและความกว้างของข้อความ ขนาดไดเมนชัน หรือลวดลายแฮตช์ด้วย `S` จะถาม `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` ซ้ำจนกด {{key:Enter}} ตัวเลือกจะถูกจำไว้ตลอดเซสชัน

### EXPLODE

นามแฝง: `X` โพลีไลน์จะกลายเป็นเส้นและส่วนโค้ง การอ้างอิงบล็อกจะกลายเป็นวัตถุของมัน ไดเมนชันจะกลายเป็นเส้น หัวลูกศร และข้อความ อาร์เรย์ที่ยังแก้ได้ ({{cmd:ARRAYEDIT}}) จะกลายเป็นสำเนาธรรมดาของวัตถุของมัน

- `Select objects`

### GROUP

นามแฝง: `G` {{cmd:GROUP}} ตั้งชื่อร่วมให้วัตถุที่เลือก เลือกวัตถุ แล้วพิมพ์ชื่อ (ห้ามมีเว้นวรรค `?` แสดงรายการกลุ่ม และ Enter จะสร้างกลุ่มที่ไม่มีชื่อ) และสำหรับกลุ่มที่มีชื่อ คำอธิบายเป็นตัวเลือก จากนั้นการคลิกที่วัตถุใดชิ้นหนึ่ง หรือกรอบที่ครอบวัตถุนั้น จะเลือกทั้งกลุ่ม ทำให้เคลื่อนย้าย คัดลอก และลบพร้อมกัน แต่ละวัตถุยังเป็นวัตถุของตัวเอง วัตถุหนึ่งชิ้นอยู่ได้หลายกลุ่ม การคัดลอกทั้งกลุ่มจะได้กลุ่มใหม่ที่ไม่มีชื่อ การคัดลอกสมาชิกหนึ่งชิ้นจะเข้าร่วมกลุ่ม กลุ่มเป็นของพื้นที่ที่สร้างขึ้น (โมเดลหรือแผ่น) จะยังอยู่เมื่อบันทึกเป็น DWG หรือ DXF และเปิดไฟล์อีกครั้งใน CadCraft ไฟล์ DXF 2000 ยังเก็บกลุ่มเป็นออบเจ็กต์กลุ่มสำหรับโปรแกรมอื่นด้วย และกลุ่มที่สร้างในโปรแกรมอื่นจะถูกอ่านเมื่อเปิด DXF หรือ DWG

### UNGROUP

{{cmd:UNGROUP}} แยกกลุ่มออก เลือกวัตถุของกลุ่ม (แต่ละกลุ่มที่วัตถุอยู่จะถูกแยก) หรือพิมพ์ `Name` แล้วชื่อของกลุ่ม วัตถุจะยังอยู่ในแบบ หนึ่งขั้นตอนของการเลิกทำจะคืนกลุ่มกลับมา

### GROUPEDIT

{{cmd:GROUPEDIT}} แก้ไขกลุ่มหนึ่งกลุ่ม เลือกวัตถุหนึ่งชิ้นของกลุ่ม หรือพิมพ์ `Name` แล้วชื่อ กลุ่มที่เลือกอยู่แล้วจะถูกใช้ตามนั้น จากนั้น: `Add` เพิ่มวัตถุ (เลือกทีละชิ้น ไม่ใช่ทีละกลุ่ม) `Remove` เอาวัตถุออก `REName` เปลี่ยนชื่อกลุ่ม แก้ `Description` หรือกำหนด `Selectable` (ว่าการคลิกที่วัตถุหนึ่งชิ้นจะเลือกทั้งกลุ่มหรือไม่) `eXit` หรือ Enter จบ กลุ่มที่ไม่มีวัตถุเหลือจะหายไป

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: เมื่อเป็น `1` (ค่าเริ่มต้น) การคลิกหรือกรอบที่วัตถุในกลุ่มจะเลือกทั้งกลุ่ม เมื่อเป็น `0` จะเลือกวัตถุเดี่ยว ๆ เพื่อให้แก้สมาชิกหนึ่งชิ้นได้ เก็บไว้สำหรับเซสชันนี้

## คลิปบอร์ด

คลิปบอร์ดของ CadCraft เอง ใช้ได้ในแบบเดียวกัน ระหว่างแบบ และระหว่างแท็บ CadCraft ในเบราว์เซอร์นี้ ดู [คัดลอก วาง และทำสำเนา](topic:copy-paste)

### COPYCLIP

{{key:Mod+C}} หรือ {{ui:Copy}} ในกลุ่ม {{ui:Edit}} คัดลอกวัตถุไปยังคลิปบอร์ด พร้อมบล็อกและเลเยอร์ที่วัตถุใช้ วัตถุจะยังถูกเลือกอยู่

- `Select objects to copy` (ข้ามไปเมื่อเลือกวัตถุไว้แล้ว)

### CUTCLIP

{{key:Mod+X}} หรือ {{ui:Cut}} ในเมนู {{ui:More}} คัดลอกวัตถุไปยังคลิปบอร์ด แล้วลบวัตถุนั้น (หนึ่งขั้นตอนของการเลิกทำ)

- `Select objects to cut` (ข้ามไปเมื่อเลือกวัตถุไว้แล้ว)

### COPYBASE

คัดลอกวัตถุไปยังคลิปบอร์ดพร้อมจุดฐานที่คุณเลือก การวางจะให้จุดนั้นอยู่ที่ตำแหน่งที่วาง

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}} หรือ {{ui:Paste}} ในกลุ่ม {{ui:Edit}} สำเนาจะตามเคอร์เซอร์ โดยห้อยจากมุมซ้ายล่างของขอบเขตของมัน (หรือจากจุดศูนย์กลาง หรือจากจุด `COPYBASE` ดู [การตั้งค่า CadCraft](topic:settings))

- `Specify insertion point`

วัตถุที่วางจะถูกเลือกอยู่ บล็อกที่แบบมีอยู่แล้วโดยใช้ชื่อเดียวกันจะคงนิยามของแบบนี้ไว้

เมื่อพื้นที่ที่คัดลอกจาก MarkupCraft ใหม่กว่าสิ่งที่ CadCraft คัดลอกไว้ (และอายุไม่เกิน 6 ชั่วโมง) {{key:Mod+V}} และ `PASTECLIP` จะวางพื้นที่นั้นแทน ดู `PASTEAREA`

### PASTEAREA

นามแฝง: `PAREA` {{ui:Paste a copied area}} ในเมนู {{ui:More}} วางพื้นที่ที่คัดลอกด้วย {{ui:Copy area}} จาก MarkupCraft เป็นรูปภาพที่ขนาดจริง ดู [รูปภาพในแบบ](topic:pictures)

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (เฉพาะเมื่อแผ่นไม่มีมาตราส่วนของแบบ): ตัวเลข {{key:Enter}} สำหรับขนาดกระดาษ หรือ `P` แล้ว `First point on the pasted area`, `Second point on the pasted area` และระยะจริงระหว่างสองจุดนั้น

### PASTEORIG

{{key:Mod+Shift+V}} หรือ {{ui:Paste in place}} ในเมนู {{ui:More}} วางที่พิกัดที่วัตถุถูกคัดลอกมา ไม่ถามอะไร

### DUPLICATE

นามแฝง: `DUP` {{key:Mod+D}} หรือ {{ui:Duplicate and move}} ในเมนู {{ui:More}} สำเนาของวัตถุจะเคลื่อนไปกับตัวชี้จากตำแหน่งที่อยู่ {{key:Esc}} จะไม่ทิ้งอะไรไว้ ไม่ใช้คลิปบอร์ด

- `Select objects to duplicate` (ข้ามไปเมื่อเลือกวัตถุไว้แล้ว)
- `Specify where the copy goes (Esc leaves nothing)`: คลิก พิมพ์จุด `@dx,dy` (จากตำแหน่งตัวชี้) หรือระยะไปทางเคอร์เซอร์

### SELECT

ขอ `Select objects` (พร้อมทุกตัวเลือกด้านล่าง) และคงวัตถุที่คุณเลือกไว้ให้เลือกอยู่สำหรับคำสั่งถัดไป หรือสำหรับ `P` ภายหลัง

### QSELECT

นามแฝง: `QS` ในเบราว์เซอร์คือกล่องโต้ตอบ {{ui:Quick select}} (ดู [เลือกวัตถุ](topic:select-objects#select-by-a-rule-quick-select)) หากไม่มีกล่องนั้น บรรทัดคำสั่งจะถาม `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` และ `Enter value` วัตถุที่ตรงจะกลายเป็นที่เลือก

### SELECTSIMILAR

นามแฝง: `SIM` `Select objects [SEttings]` (หรือที่เลือกปัจจุบัน): เลือกวัตถุทุกชิ้นที่มีชนิดเดียวกัน เลเยอร์เดียวกัน และสีเดียวกัน (และชื่อบล็อก ลวดลายแฮตช์) `SE` ขอ `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` ซ้ำจนกด {{key:Enter}}

### FIND

ไม่มีนามแฝง หรือ {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}} ในเบราว์เซอร์คือกล่องโต้ตอบ {{ui:Find and replace}} (ดู [เพิ่มข้อความและป้าย](topic:text#find-and-replace-words)) หากไม่มีกล่องนั้น: `Enter text to find` แล้ว `Enter replacement text (Enter: select what is found)` ค้นในข้อความ ค่าแอตทริบิวต์ และข้อความของไดเมนชัน บนแท็บที่เปิดอยู่หรือในที่เลือก

### SELECTALL and DESELECT

`SELECTALL` (นามแฝง `AI_SELALL`, {{key:Mod+A}}) เลือกวัตถุทุกชิ้นที่คุณแก้ไขได้บนแท็บที่เปิดอยู่ `DESELECT` (นามแฝง `AI_DESELECT`, `SELECTNONE`; หรือ {{key:Esc}}) ล้างการเลือก

## ไดเมนชัน

### DIMLINEAR

นามแฝง: `DLI`, `DIMLIN` ระยะแนวนอนหรือแนวตั้ง

- `Specify first extension line origin [Select object]` (Enter หรือ `S`: `Select object to dimension` แล้วคลิกเส้น ส่วนโค้ง วงกลม หรือส่วนของโพลีไลน์)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]` `T` ขอข้อความ (`<>` คือค่าที่วัดได้) `H` และ `V` กำหนดทิศทาง `R` ขอ `Specify angle of dimension line <0>`

### DIMALIGNED

นามแฝง: `DAL`, `DIMALI` ระยะจริงระหว่างสองจุด

- จุดเริ่มเหมือนใน {{cmd:DIMLINEAR}} แล้ว `Specify dimension line location [Text]`

### DIMANGULAR

นามแฝง: `DAN`, `DIMANG`

- `Select arc, circle or line, or Enter for a vertex`
- ส่วนโค้ง: มุมของส่วนโค้ง วงกลม: `Specify second angle endpoint` เส้น: `Select second line` Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`
- `Specify dimension line location [Text]`: คลิกในมุมที่ต้องการวัด

### DIMRADIUS and DIMDIAMETER

นามแฝง: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`

- `Select arc or circle` แล้ว `Specify dimension line location [Text]`

### DIMCONTINUE

นามแฝง: `DCO`, `DIMCONT` ต่อจากไดเมนชันเชิงเส้นหรือแบบขนานที่ทำล่าสุด (หรือถาม `Select linear or aligned dimension`)

- `Specify second extension line origin [Undo]` ซ้ำจนกด Enter

### DIMBASELINE

นามแฝง: `DBA`, `DIMBASE` เหมือน {{cmd:DIMCONTINUE}} แต่ไดเมนชันทุกชิ้นเริ่มจากจุดเริ่มแรก และซ้อนออกไปไกลขึ้น

### DIMORDINATE

นามแฝง: `DOR`, `DIMORD` `Specify feature location` แล้ว `Specify leader endpoint [Xdatum/Ydatum/Text]` เขียนระยะที่คุณลักษณะอยู่จากจุดกำเนิด UCS ตามแกน X หรือแกน Y ในรูปของเส้นชี้ เส้นชี้ที่ไปขึ้นหรือลงเป็นส่วนใหญ่จะอ่านเป็น X ส่วนที่ไปทางด้านข้างจะอ่านเป็น Y `Xdatum` และ `Ydatum` กำหนดให้แน่นอน ตั้งจุดกำเนิดก่อนด้วย {{cmd:UCS}} (ถ้าไม่ตั้ง จะใช้ 0,0 ของแบบ) จุดจับจะเคลื่อนคุณลักษณะ จุดกำเนิด และปลายเส้นชี้ และค่าจะตามไป จะบันทึกเป็นไดเมนชันออร์ดินัลจริงใน DWG และ DXF คำสั่งจะปฏิเสธปลายเส้นชี้ที่อยู่บนคุณลักษณะนั้นเอง

### DIMARC

นามแฝง: `DAR` `Select arc or polyline arc segment` แล้ว `Specify arc length dimension location [Text]` วัดตามส่วนโค้ง (ไม่ใช่คอร์ด) และเขียนสัญลักษณ์ส่วนโค้งก่อนค่า คำสั่งจะปฏิเสธวงกลมเต็ม เส้น หรือส่วนเส้นตรงของโพลีไลน์ DWG จะเก็บเป็นไดเมนชันความยาวส่วนโค้ง DXF จะเก็บเป็นไดเมนชันมุมที่มีความยาวเป็นข้อความ และ CadCraft จะเปิดกลับมาเป็นไดเมนชันความยาวส่วนโค้ง

### DIMJOGGED

นามแฝง: `DJO`, `JOG` `Select arc or circle`, `Specify center location override`, `Specify jog location` ไดเมนชันรัศมีสำหรับเส้นโค้งที่จุดศูนย์กลางอยู่ไกลหรืออยู่นอกแผ่น เส้นของไดเมนชันจะเริ่มที่จุดที่คุณให้แทนจุดศูนย์กลาง โดยมีรอยหักอยู่ในเส้น และยังคงแสดงรัศมีจริง DWG จะเก็บเป็นไดเมนชันรัศมีที่มีรอยหัก DXF จะเก็บเป็นไดเมนชันรัศมี และ CadCraft จะเปิดกลับมาเป็นแบบมีรอยหัก

### DIMJOGLINE

นามแฝง: `DJL` `Select dimension to add jog [Remove]` แล้ว `Specify jog location (or press Enter)` ใส่สัญลักษณ์รอยหักบนเส้นของไดเมนชันเชิงเส้นหรือแบบขนาน เพื่อแสดงว่าระยะนั้นไม่ได้วาดตามสัดส่วน ค่าจะไม่เปลี่ยน `Remove` เอาออก คำสั่งจะปฏิเสธไดเมนชันชนิดอื่น

### QDIM

ไม่มีนามแฝง `Select geometry to dimension` แล้ว `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]` ใส่ไดเมนชันให้วัตถุหลายชิ้นในขั้นตอนเดียว จากปลายของเส้นและส่วนของโพลีไลน์ จุดศูนย์กลางของวงกลมและส่วนโค้ง จุด และการอ้างอิงบล็อก ตำแหน่งที่อยู่เหนือหรือใต้วัตถุจะวัดข้าม ตำแหน่งที่อยู่ข้างวัตถุจะวัดขึ้น `Continuous` เชื่อมจุดต่อกัน `Baseline` วัดทุกค่าจากจุดแรก `Staggered` จัดคู่ซ้อนจากกลางออกไป `Ordinate` ให้แต่ละจุดมีระยะจากดาตัม (`datumPoint` เลือกดาตัมใหม่) `Radius` และ `Diameter` ใส่ไดเมนชันให้วงกลมและส่วนโค้งทุกชิ้นที่เลือก โหมดจะถูกจำไว้ ทั้งหมดที่สร้างเป็นหนึ่งขั้นตอนของการเลิกทำ คำสั่งจะแจ้งเมื่อมีจุดน้อยกว่าสองจุด หรือไม่มีส่วนโค้งหรือวงกลมสำหรับ Radius และ Diameter

### DIMBREAK

นามแฝง: `DBREAK` `Select dimensions to add or remove breaks` แล้ว `Break where other objects cross [Auto/Manual/Remove] <Auto>` `Auto` เว้นช่องว่างในเส้นไดเมนชันและเส้นต่อขยายทุกที่ที่มีวัตถุอื่นตัดผ่าน และคำนวณช่องว่างใหม่เมื่อวัตถุเหล่านั้นหรือไดเมนชันย้าย `Manual` (ไดเมนชันเดียว) ขอสองจุดและเว้นช่องว่างระหว่างจุดนั้น `Remove` เอาช่องว่างทั้งหมดออก ช่องว่างกว้าง 1.5 เท่าของความสูงข้อความของไดเมนชัน

### DIMSPACE

ไม่มีนามแฝง `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>` ย้ายเส้นไดเมนชันของไดเมนชันเชิงเส้นและแบบขนานที่ขนานกัน (หรือไดเมนชันมุมที่มีจุดยอดเดียวกัน) ให้ห่างกันเท่า ๆ กัน นับจากไดเมนชันฐาน แต่ละชิ้นอยู่ด้านที่เป็นอยู่ `0` จะจัดให้ตรงกับไดเมนชันฐาน `Auto` คือสองเท่าของความสูงข้อความของไดเมนชันฐาน ไดเมนชันที่ไม่ขนานกับไดเมนชันฐานจะไม่ถูกแตะ

### DIMINSPECT

ไม่มีนามแฝง `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>` วาดกรอบรอบค่า มีป้ายอยู่หน้าค่า และอัตราการตรวจอยู่หลังค่า `remove` เอากรอบออก ข้อความความคลาดเคลื่อนจะอยู่กับค่า

### DIMOVERRIDE

นามแฝง: `DOV`, `DIMOVER` `Enter dimension variable name to override or Clear`, `Enter new value for …` ซ้ำจนกด Enter แล้ว `Select dimensions` จะเปลี่ยนการตั้งค่าเหล่านั้นเฉพาะไดเมนชันที่เลือก ไม่เปลี่ยนรูปแบบไดเมนชัน รับตัวแปรที่เป็นตัวเลขหรือสวิตช์ (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …) `Clear` ทำให้ไดเมนชันที่เลือกกลับไปใช้รูปแบบของมัน คำสั่งจะปฏิเสธชื่อที่ไม่ใช่ตัวแปรเช่นนั้น และค่าที่ใช้ไม่ได้

### DIMREASSOCIATE

นามแฝง: `DRE`, `DIMREASSOC` `Select dimensions` แล้วสำหรับแต่ละชิ้นจะให้จุดเริ่มของเส้นต่อขยาย (`Specify first extension line origin on an object`: ดูดไปที่ปลายหรือกึ่งกลางของเส้น มุมของโพลีไลน์ หรือจุดศูนย์กลาง Enter จะให้จุดนั้นเป็นอิสระ) หรือสำหรับไดเมนชันรัศมี เส้นผ่านศูนย์กลาง รัศมีที่มีรอยหัก หรือความยาวส่วนโค้ง `Select arc or circle` จากนั้นไดเมนชันจะผูกกับวัตถุเหล่านั้น เมื่อวัตถุย้ายหรือเปลี่ยนขนาด ไดเมนชันจะตามไปในขั้นตอนการเลิกทำเดียวกันและวัดใหม่ การขยับจุดที่ผูกไว้ด้วยมือ หรือการลบวัตถุจะทำให้การผูกนั้นหมดไป การผูกจะถูกบันทึกใน DWG และ DXF 2000 เป็นข้อมูลของ CadCraft เอง โปรแกรมอื่นจะเห็นเป็นไดเมนชันธรรมดา

### DIMDISASSOCIATE

นามแฝง: `DDA`, `DIMDISASSOC` `Select dimensions` ปลดการผูกจากวัตถุที่ผูกไว้ ไม่มีอะไรเคลื่อนที่

### CENTERMARK

นามแฝง: `CM`, `DIMCENTER`, `DCE` `Select circle or arc to add center mark` ซ้ำจนกด Enter วาดกากบาทที่จุดศูนย์กลาง และเส้นศูนย์กลางสี่เส้นที่ยื่นเลยเส้นโค้งออกไปเล็กน้อย (ชนิดเส้น CENTER) เป็นเส้นธรรมดาบนเลเยอร์ปัจจุบัน ขนาดได้จากขนาดลูกศรและมาตราส่วนรวมของการตั้งค่าไดเมนชันปัจจุบัน หมุนตาม UCS หากวงกลมถูกย้าย เครื่องหมายจะไม่ตามไป

### CENTERLINE

นามแฝง: `CL` `Select first line`, `Select second line` วาดเส้นตรงกลางระหว่างสองเส้น (ตามเส้นแบ่งครึ่งมุมเมื่อเส้นทั้งสองตัดกัน) ยาวกว่าเส้นเดิมเล็กน้อย ชนิดเส้น CENTER เป็นเส้นธรรมดา ไม่ตามสองเส้นนั้น

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

ไม่มีนามแฝง แต่ละคำสั่งถาม `Enter new value for … <current>` และตั้งขนาดนั้นให้ไดเมนชัน**ใหม่**: มาตราส่วนรวม ความสูงข้อความ ขนาดลูกศร จำนวนทศนิยม (ไม่เกิน 8) ช่องว่างรอบข้อความ ระยะที่เส้นต่อขยายยื่นเลยเส้นไดเมนชัน และระยะชดเชยจากจุดกำเนิด ดู [กำหนดขนาดไดเมนชัน](topic:dimension-settings)

### DIMLUNIT

การตั้งค่าไดเมนชัน: รูปแบบของไดเมนชันใหม่เท่านั้น (1 วิทยาศาสตร์ 2 ทศนิยม 3 วิศวกรรม 4 สถาปัตย์ 5 เศษส่วน)

### DIMSTYLE and -DIMSTYLE

นามแฝง: `DST`, `DDIM`, `D` ตัวจัดการรูปแบบไดเมนชัน: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}} `-DIMSTYLE` ที่บรรทัดคำสั่ง: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]` ดู [กำหนดขนาดไดเมนชัน](topic:dimension-settings#named-dimension-styles)

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>` แล้วไดเมนชัน (หรือที่เลือกไว้แล้ว) New ขอข้อความ (`<>` = ค่าที่วัดได้) Rotate ขอมุม (0 จะคืนข้อความ) Oblique ขอมุมของเส้นต่อขยายจากแกน X (Enter = ไม่มี ใช้กับไดเมนชันเชิงเส้นและแบบขนานเท่านั้น) `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>` ดู [กำหนดขนาดไดเมนชัน](topic:dimension-settings#change-dimension-text-and-extension-lines)

### DIMTEXTUNIT

นามแฝง: `DTU` `Units in the text of new dimensions [Drawing units/mm/cm/m/km]` หรือเมื่อเลือกไดเมนชันไว้ `Units in the text of the selected dimensions` จะเขียนความยาวที่วัดได้ในหน่วยนั้น โดยมีหน่วยตามหลัง (DIMLFAC และคำต่อท้าย DIMPOST) `D` กลับไปใช้หน่วยของแบบ ดู [ไดเมนชันเป็น mm, cm, m หรือ km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)

### REVCLOUD

นามแฝง: `RC` พิมพ์ `Arc length: … Type: …` แล้ว `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]` Rectangular ขอ `Specify opposite corner` Polygonal ขอ `Specify next point (Enter closes the cloud) [Undo]` Freehand ตามตัวชี้จนกว่าจะคลิกหรือกด {{key:Enter}} `O` ขอ `Select object` และ `Reverse direction? [Yes/No] <N>` แล้วเปลี่ยนวัตถุเป็นเมฆ `A` ขอ `Specify the length of each arc` `R`, `P` และ `F` เลือกชนิดของเมฆถัดไป ผลลัพธ์คือโพลีไลน์ปิดที่ประกอบจากส่วนโค้ง

### MLEADER

นามแฝง: `MLD` หรือ {{ui:Leader}} `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location` แล้วข้อความในกล่องแก้ไขตรงนั้น (หรือถ้าไม่มี `Enter text (an empty line ends)`) `Block` จะถามชื่อบล็อกก่อน และเส้นชี้หลายเส้นจะแสดงบล็อกนั้นแทนข้อความ เส้นชี้เพิ่มเติม: {{cmd:MLEADEREDIT}} บันทึกเป็นมัลติลีดเดอร์จริงใน DWG DXF จะเก็บเส้น หัวลูกศร และข้อความที่วาดไว้

### MLEADEREDIT

นามแฝง: `MLE` `Select a multileader` แล้ว `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: แต่ละจุดจะเพิ่มเส้นชี้จากหัวลูกศรใหม่ไปยังจุดลงเดิม จนกด Enter `Remove leaders` จะเอาเส้นชี้ที่คลิกออก (มัลติลีดเดอร์จะเก็บอย่างน้อยหนึ่งเส้น) `Block content` ขอชื่อบล็อกและแสดงบล็อกนั้นแทนข้อความ (จะถามแอตทริบิวต์ของบล็อก) `Text content` ใส่ข้อความกลับ เส้นชี้แต่ละเส้นมีจุดจับของตัวเอง DWG จะเก็บเส้นชี้ทุกเส้นและบล็อกไว้ในมัลติลีดเดอร์เดียว

### MLEADERALIGN

นามแฝง: `MLA` `Select multileaders`, แล้ว `Select multileader to align to [Distribute/Spacing/Use current spacing]` และ `Specify direction` จะย้ายจุดลงของมัลติลีดเดอร์อื่น (พร้อมข้อความหรือบล็อก) ไปยังเส้นที่ผ่านจุดลงของอันที่เลือกในทิศทางนั้น หัวลูกศรจะอยู่ที่เดิมตามที่ชี้ `Spacing` จะตั้งระยะห่างให้เท่ากันด้วย `Distribute` จะขอสองจุดและกระจายให้เท่า ๆ กันระหว่างนั้น ต้องมีมัลติลีดเดอร์อย่างน้อยสองอัน

### MLEADERCOLLECT

นามแฝง: `MLC` `Select multileaders` แล้ว `Specify collected multileader location [Vertical/Horizontal]` (Enter จะคงตำแหน่งของอันแรก) รวมหลายอันให้เป็นมัลติลีดเดอร์เดียว เนื้อหาที่เป็นบล็อกจะเข้าไปในบล็อกใหม่ที่เก็บทุกบล็อกเรียงข้างกันหรือซ้อนกัน เนื้อหาข้อความจะกลายเป็นหมายเหตุเดียวที่มีบรรทัดละหนึ่งรายการ มัลติลีดเดอร์อันแรกจะคงเส้นชี้ของตัวเอง อันอื่นจะถูกเอาออก คำสั่งจะปฏิเสธการผสมระหว่างเนื้อหาข้อความและเนื้อหาบล็อก

### TABLE

นามแฝง: `TB` หรือ {{ui:Annotate}} › {{ui:More}} › {{ui:Table}} สร้างตาราง: วัตถุหนึ่งชิ้นที่คุณย้าย คัดลอก หมุน สเกล และพล็อตได้เหมือนวัตถุอื่น โดยเซลล์ของมันเก็บเป็นข้อมูล

- `Number of data rows or [Paste/File/Style] <3>` แล้ว `Number of columns <3>` `Text height` และ `Top left corner of the table` ตารางจะได้แถวชื่อ (เซลล์เดียวที่รวมกัน) และแถวหัวตารางอยู่เหนือแถวข้อมูล
- `P`: ตารางจากเซลล์สเปรดชีตที่อยู่บนคลิปบอร์ด (ข้อความที่มีแท็บคั่นระหว่างเซลล์) การกด {{key:Ctrl+V}} เมื่อมีเซลล์เช่นนั้นบนคลิปบอร์ดก็ให้ผลเดียวกัน เว้นแต่สำเนาของ CadCraft จะใหม่กว่า (หรือ CadCraft แยกไม่ได้ จะวางสำเนาของตัวเองและแจ้งให้ทราบ) `F`: ตารางจากไฟล์ `.csv` หรือไฟล์คั่นด้วยแท็บ แถวแรกจะกลายเป็นแถวหัวตาราง และความกว้างคอลัมน์จะพอดีกับข้อความ
- `S`: เลือกรูปแบบตารางสำหรับตารางนี้ (ดู {{cmd:TABLESTYLE}})
- คำสั่งจะปฏิเสธจำนวนแถวหรือคอลัมน์ที่ไม่ใช่จำนวนเต็ม และจำนวนเซลล์ที่มากกว่าที่ตารางจะถือได้ (2,000 แถว 200 คอลัมน์ 40,000 เซลล์)
- {{cmd:EXPLODE}} จะเปลี่ยนตารางเป็นเส้นและข้อความ บันทึกเป็น DWG ตารางจะเป็นออบเจ็กต์ตารางจริงที่โปรแกรมอื่นแก้ได้ บันทึกเป็น DXF จะเป็นบล็อกที่วาดตาราง และ CadCraft จะเปิดกลับมาเป็นตาราง

### TABLEDIT

นามแฝง: `TABLEEDIT`, `TABEDIT` หรือดับเบิลคลิกที่เซลล์ ใช้แก้ไขตาราง

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]` คลิกเซลล์ หรือเมื่อเลือกตารางไว้ พิมพ์ชื่อเซลล์ (`B3`: คอลัมน์ B แถว 3 แถวชื่อคือแถว 1) ในเบราว์เซอร์จะมีกล่องเปิดทับเซลล์: {{key:Enter}} เก็บข้อความ {{key:Tab}} ไปเซลล์ถัดไป {{key:Alt+Enter}} ขึ้นบรรทัดใหม่ {{key:Esc}} ปล่อยเซลล์ไว้ตามเดิม
- ข้อความที่ขึ้นต้นด้วย `=` คือสูตร: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)` ใช้ `+ - * / ^` วงเล็บ และฟังก์ชันเช่น `sqrt` และ `round` เซลล์จะแสดงค่า สูตรที่อ้างถึงเซลล์ของตัวเอง เซลล์นอกตาราง หรือเซลล์ที่ไม่มีตัวเลข จะแสดง `####` และบรรทัดคำสั่งจะบอกสาเหตุ
- `R` / `C`: `Insert` หรือ `Delete` แถวหรือคอลัมน์ที่เซลล์ที่คลิก (กี่แถว และอยู่บนหรือล่าง ซ้ายหรือขวา) สูตรจะตามเซลล์ที่มันอ้างถึง
- `S`: ความกว้างของคอลัมน์และความสูงของแถว แถวจะไม่เตี้ยกว่าข้อความที่ต้องใช้ ตารางที่เลือกไว้จะมีจุดจับที่ขอบของแต่ละคอลัมน์และแต่ละแถวด้วย
- `M`: รวมจากเซลล์ที่คลิกเซลล์หนึ่งไปอีกเซลล์หนึ่ง `U`: แยกการรวม `A`: การจัดแนว (`TL` บนซ้าย … `MC` กลางกลาง … `BR` ล่างขวา) `H`: ความสูงข้อความของเซลล์นี้เอง (0 = ตามรูปแบบ) `K`: ทำให้แถวเป็นแถวชื่อ หัวตาราง หรือแถวข้อมูล `CL`: ล้างเซลล์
- คำสั่งจะปฏิเสธตารางบนเลเยอร์ที่ล็อก การลบทุกแถวหรือทุกคอลัมน์ และการรวมที่จะตัดเซลล์ที่รวมอยู่แล้วให้เป็นสองส่วน

### TABLESTYLE

นามแฝง: `TS` แสดงรูปแบบตารางพร้อมจำนวนตารางที่ใช้แต่ละรูปแบบ แล้ว `Table style: [New/Set/Edit/Delete/Apply]`

- รูปแบบเก็บความสูงข้อความและการจัดแนวของแถวชื่อ หัวตาราง และแถวข้อมูล ระยะขอบของเซลล์ และเส้นขอบที่วาด (ด้านนอก ระหว่างแถว ระหว่างคอลัมน์)
- `N` สร้างรูปแบบจากรูปแบบปัจจุบันและทำให้เป็นปัจจุบัน `S` ตั้งรูปแบบปัจจุบัน (ตารางใหม่จะใช้ค่านั้น) `E` แก้ไขรูปแบบหนึ่ง: ตารางที่ใช้จะถูกวาดใหม่ `A` ให้ตารางที่เลือกใช้รูปแบบปัจจุบัน `D` ลบรูปแบบหนึ่ง (ยกเว้น Standard และรูปแบบปัจจุบัน ตารางที่เคยใช้จะคงลักษณะเดิมไว้)
- รูปแบบจะถูกบันทึกไว้กับแบบ (DWG และ DXF)

### TABLEEXPORT

บันทึกสิ่งที่ตารางแสดงเป็นไฟล์ CSV (สูตรเป็นค่าของมัน) `Select a table` หรือเลือกตารางไว้ก่อน เซลล์ข้อความที่ขึ้นต้นด้วย `=`, `+`, `-` หรือ `@` จะได้เครื่องหมาย `'` นำหน้า เพื่อไม่ให้สเปรดชีตรันมัน

### TABLEPASTE

นามแฝง: `PASTETABLE` สร้างตารางจากเซลล์สเปรดชีตที่อยู่บนคลิปบอร์ด แล้วถามตำแหน่งมุมซ้ายบน เหมือน {{cmd:TABLE}} › `Paste`

### DATALINK

นามแฝง: `DL` `Data link: [New/List/Remove] <New>` `N` ขอไฟล์ CSV วางตารางจากไฟล์นั้น และจำชื่อไฟล์ `L` แสดงลิงก์พร้อมไฟล์ ขนาด เวลาที่อ่านล่าสุด และจำนวนตารางที่ใช้ `R` เอาลิงก์ออก (ตารางจะคงเป็นตารางธรรมดา)

### DATALINKUPDATE

นามแฝง: `DLU` อ่านไฟล์ของลิงก์ข้อมูลอีกครั้ง และเติมตารางที่ผูกกับลิงก์นั้นใหม่ (เพิ่มหรือลบแถวและคอลัมน์ให้ตรงกัน) เบราว์เซอร์เปิดไฟล์เองไม่ได้ ดังนั้นจะให้คุณเลือกไฟล์อีกครั้ง หากมีหลายลิงก์ จะถามว่าเป็นอันไหน

### FIELD

ใส่ฟิลด์ลงในแบบ: ข้อความที่คำนวณค่าของมันเอง `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: วันที่ปัจจุบันหรือวันที่บันทึก สร้าง หรือพล็อต พร้อมรูปแบบ (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`) `F`: ชื่อไฟล์ มีหรือไม่มีนามสกุลก็ได้ `S`: หมายเลขแผ่น ชื่อ หรือจำนวนแผ่นทั้งหมด `P`: คุณสมบัติของแบบตามชื่อ (ดู {{cmd:DWGPROPS}}) `O`: คลิกวัตถุ แล้วเลือกสิ่งที่จะอ่าน (พื้นที่ ความยาว เส้นรอบรูป รัศมี เส้นผ่านศูนย์กลาง เลเยอร์ ชื่อ x y ข้อความ การหมุน สี) และจำนวนทศนิยม `E`: สูตร `C`: ข้อความที่มีรหัสพิมพ์ตามที่เป็น เช่น `Sheet %<sheetnumber>% of %<sheetcount>%`
- จากนั้น `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)` ข้อความที่เลือกจะได้ฟิลด์ต่อจากเนื้อหาที่มีอยู่ เซลล์ตารางก็เช่นกัน การอ้างอิงบล็อกจะถามว่าเป็นแอตทริบิวต์ใด {{key:Enter}} จะถามความสูงและจุดสำหรับข้อความใหม่
- บนหน้าจอ ฟิลด์จะมีพื้นหลังสีเทาอ่อน การพล็อตและ PDF จะไม่มีพื้นหลังนั้นเลย การพิมพ์ทับข้อความของฟิลด์ด้วยมือจะทำให้ฟิลด์หมดสภาพ ฟิลด์ที่คำนวณไม่ได้จะแสดง `####`
- ฟิลด์ของวัตถุจะหาวัตถุของมันด้วยคีย์ที่ CadCraft เก็บไว้กับวัตถุ (การตั้งค่า › CadCraft › Merge-friendly files) เมื่อปิดคีย์ไว้ คำสั่งจะปฏิเสธ

### UPDATEFIELD

นามแฝง: `UPDATEFIELDS` `Select the objects whose fields to update (Enter: every field) or [Settings]` `S` กำหนดว่าฟิลด์จะอัปเดตเองเมื่อใด ให้พิมพ์ตัวอักษรของ `O` เปิด `S` บันทึก `P` พล็อต `R` regen (ทั้งสี่เพื่อเริ่มต้น) หรือ `NONE`

### DWGPROPS

นามแฝง: `DRAWINGPROPS` แสดงคุณสมบัติของแบบ แล้ว `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]` หกรายการแรกคือรายการที่พาเนล {{ui:Drawing details}} แสดง `U` เพิ่มชื่อและค่าของคุณเอง `R` เอาหนึ่งรายการออก ฟิลด์จะอ่านค่าเหล่านี้ (`%<prop:title>%`, `%<prop:Client>%`) และตามทันที คำสั่งจะปฏิเสธชื่อที่กำหนดเองซึ่งเป็นชื่อในตัว หรือมี `%`, `<`, `>`, เครื่องหมายคำพูด หรือแบ็กสแลช

## เชิงพารามิเตอร์

ดู [กำหนดข้อจำกัดให้แบบ](topic:constraints) และ [ใช้พารามิเตอร์และสมการ](topic:parameters) ข้อจำกัดทำงานบนแท็บ {{ui:Model}}

### GEOMCONSTRAINT and the GC commands

นามแฝง `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>` แล้วพรอมต์ของคำสั่งนั้น

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (ตัวที่สองจะเคลื่อน)
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`
- {{cmd:GCFIX}}: `Select point [Object] <Object>`
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`

### DIMCONSTRAINT and the DC commands

นามแฝง `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (ตัวเลข นิพจน์ หรือ `name=expression`)
- {{cmd:DCALIGNED}}: เหมือนข้างบน มี `[Object/Point & line/2Lines]`
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle` {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`
- {{cmd:DCCONVERT}}: `Select dimensions to convert`

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]` `S` ถามค่าความคลาดเคลื่อนของระยะและมุม
- {{cmd:DELCONSTRAINT}} (นามแฝง `DELCON`): `Select objects` ข้อจำกัดของวัตถุเหล่านั้นจะถูกลบ
- {{cmd:CONSTRAINTBAR}} (นามแฝง `CBAR`): `Select objects [Showall/Hideall]` แล้ว `[Show/Hide]`
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (นามแฝง `PAR`, `PARAM`) เปิดพาเนล {{ui:Parameters}} `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`

### SWBOUT

นามแฝง `SWMACRO` ดาวน์โหลดมาโคร (.swb) ที่สร้างแบบใหม่เป็นสเกตช์เดียวที่มีข้อจำกัดใน SolidWorks ดู [ย้ายสเกตช์ไปและกลับจากโปรแกรมโมเดลชิ้นส่วนอื่น](topic:solidworks-sketches)

## บล็อก

### ANNOSCALE

นามแฝง: `CANNOSCALE` แสดงมาตราส่วนคำอธิบายของแบบ และจำนวนวัตถุที่ใส่คำอธิบายได้ที่มี แล้วถาม `New annotation scale`: พิมพ์ `1:50`, `1:100`, `2:1`, ตัวเลขเปล่า (`50` คือ 1:50) หรือชื่อหนึ่งในมาตราส่วนของแบบเอง ข้อความและไดเมนชันที่ใส่คำอธิบายได้ทุกชิ้นจะถูกปรับขนาดให้พิมพ์ออกมาขนาดเท่าเดิมที่มาตราส่วนใหม่ ในหนึ่งขั้นตอนของการเลิกทำ วัตถุที่ไม่ใส่คำอธิบายได้จะไม่ถูกแตะ และวัตถุที่เก็บรายการมาตราส่วนโดยไม่มีมาตราส่วนใหม่ก็ไม่ถูกแตะเช่นกัน ({{cmd:OBJECTSCALE}}) ดู [หน่วย กระดาษ และมาตราส่วน](topic:units-papers-scales#annotate-by-scale)

### OBJECTSCALE

นามแฝง: `OBJSCALE` `Select annotative objects` แล้ว `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>` ข้อความหรือไดเมนชันที่ใส่คำอธิบายได้จะเก็บรายการมาตราส่วนคำอธิบาย `Add` และ `Delete` ขอมาตราส่วนหนึ่ง (`1:50`, `2:1`, ตัวเลขเปล่า หรือชื่อหนึ่งในมาตราส่วนของแบบ) `Current scale` เพิ่มมาตราส่วนคำอธิบายของแบบ `List` พิมพ์มาตราส่วนของแต่ละวัตถุ วิวพอร์ตที่มีมาตราส่วนของตัวเองอยู่ในรายการของวัตถุจะแสดงวัตถุในขนาดที่พิมพ์ความสูงบนกระดาษได้ที่มาตราส่วนนั้น ทั้งบนหน้าจอและในการพล็อต มาตราส่วนสุดท้ายจะลบไม่ได้ วัตถุที่ไม่ได้ตั้งเป็นใส่คำอธิบายได้จะถูกข้าม: เปิด Annotative ใน Properties ก่อน รายการจะถูกบันทึกใน DWG และ DXF เป็นข้อมูลของ CadCraft เอง ดู [หน่วย กระดาษ และมาตราส่วน](topic:units-papers-scales#annotate-by-scale)

### ANNOALLVISIBLE

นามแฝง: `ANNOALL` `Show annotative objects at all scales [ON/OFF]` เมื่อเปิด (ตามที่แบบเริ่มต้น) วัตถุที่ใส่คำอธิบายได้จะแสดงในวิวพอร์ตหรือในโมเดลที่มาตราส่วนไม่อยู่ในรายการของมัน ที่ขนาดที่มีอยู่ เมื่อปิด จะไม่แสดงที่นั่น และเลือกในโมเดลไม่ได้ สวิตช์นี้เป็นหนึ่งขั้นตอนของการเลิกทำ และไม่ถูกเก็บในไฟล์

### SCALELISTEDIT

นามแฝง: `SCALELIST` `Scale list [Add/Edit/Delete/List/Reset]` จนกด {{key:Enter}} Add: `Scale name`, `Paper units`, `Drawing units` Edit และ Delete ขอชื่อของมาตราส่วน มาตราส่วนของแบบจะเข้าไปอยู่ในรายการมาตราส่วนของวิวพอร์ตและการพล็อต และถูกบันทึกพร้อมแบบ ดู [หน่วย กระดาษ และมาตราส่วน](topic:units-papers-scales#scales)

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)` แบบ Fit: จุดที่เส้นโค้งผ่าน `Close`, `Undo`, แล้ว `Start tangent` และ `End tangent` (เป็นจุด หรือ {{key:Enter}}) Method › Control vertices ขอดีกรี (1 ถึง 5) แล้ววาดจากรูปหลายเหลี่ยมควบคุม Object เปลี่ยนโพลีไลน์เป็นสไปลนที่ผ่านจุดยอดของมัน `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]` Fit data `[Add/Delete/Move/Purge/Tangents/eXit]` Edit vertex `[Add control point/Move/Weight/eXit]` `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]` `M` สำหรับหลายวัตถุ เส้น ส่วนโค้ง และสไปลนจะถูกเสนอให้เป็นโพลีไลน์ก่อน ดู [สไปลนและโพลีไลน์](topic:splines)

### BLOCK

นามแฝง: `B`, `BMAKE`

- `Enter block name` ถ้ามีอยู่แล้ว: `Block "…" already exists. Redefine it? [Yes/No] <N>`
- `Specify insertion base point`
- `Select objects` วัตถุเหล่านั้นจะถูกแทนที่ด้วยการอ้างอิงหนึ่งรายการไปยังบล็อกใหม่

### WBLOCK

นามแฝง: `W`, `-WBLOCK` เขียนบล็อก วัตถุบางชิ้น หรือทั้งแบบเป็นไฟล์ DWG หรือ DXF ใหม่ `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (จะกลายเป็นจุดกำเนิดของแบบใหม่) `Select objects` แล้ว `File format [DWG/DXF/R12 DXF]` และ `File name for the new drawing` แล้ว `What to do with the objects [Retain/Convert to block/Delete]` Convert จะแทนที่วัตถุด้วยการอ้างอิงหนึ่งรายการไปยังบล็อกที่ชื่อเหมือนไฟล์ Delete จะลบวัตถุ
- **Block**: `Block to write out` วัตถุของบล็อกเอง โดยมีจุดฐานเป็นจุดกำเนิด รวมถึงบล็อกที่ซ้อนอยู่
- **Entire drawing**: ทุกวัตถุในพื้นที่โมเดล แผ่นจะไม่ถูกเขียน ใช้ {{cmd:SAVEAS}} สำหรับสำเนาที่เก็บแผ่นไว้

ไฟล์ใหม่จะมีเฉพาะเลเยอร์ ชนิดเส้น ข้อความ และรูปแบบไดเมนชัน รวมทั้งบล็อกที่วัตถุของมันใช้ และหน่วยของแบบ เวอร์ชันของ DWG คือเวอร์ชันที่ {{cmd:SAVEAS}} ใช้ล่าสุด ในเบราว์เซอร์ไฟล์จะถูกดาวน์โหลด ใน Studio กล่องบันทึกจะเปิดขึ้น

### ATTDEF

นามแฝง: `ATT`, `DDATTDEF`, `-ATTDEF` หรือ {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}} แสดงโหมด แล้ว `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` เมื่อเป็นค่าคงที่), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text` {{cmd:BLOCK}} จะนำนิยามแอตทริบิวต์เข้าไปในบล็อก

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE` หรือดับเบิลคลิกการอ้างอิงที่มีแอตทริบิวต์ หรือ {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes` แล้วกล่องโต้ตอบ {{ui:Edit attributes}} `ATTEDIT` (`ATE`, `-ATTEDIT`): การอ้างอิงเดียวกัน แล้ว `<prompt> (<TAG>) <value>` สำหรับแต่ละแอตทริบิวต์ {{key:Enter}} จะคงค่าเดิมไว้ ดู [แอตทริบิวต์](topic:attributes#see-and-change-the-values)

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>` คงค่าไว้ แอตทริบิวต์ใหม่จะได้ค่าเริ่มต้น แอตทริบิวต์ที่ถูกลบจะหายไป และตำแหน่งจะถูกตั้งใหม่

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}} กล่องโต้ตอบ: บล็อก แอตทริบิวต์ (แท็ก พรอมต์ ค่าเริ่มต้น โหมด ลำดับ) {{ui:Update the references (values kept)}} {{ui:Apply}}

### REFEDIT and REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}} `REFEDIT`: `Select the block reference to edit in place` (หรือที่เลือก) `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>` {{ui:Save the block}} และ {{ui:Discard}} บนแถบจะทำงานเหมือนกัน การแก้ทั้งหมดเป็นหนึ่งขั้นตอนของการเลิกทำ ดู [แอตทริบิวต์](topic:attributes#edit-a-title-block-where-it-is-refedit)

### BEDIT and BCLOSE

`BE` หรือ {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} `Enter block name to edit <the selected reference's block>` เปิดตัวแก้ไขบล็อก `BCLOSE` ถาม `Close the block editor on "…" [Save/Discard] <Save>` {{ui:Save block}} และ {{ui:Discard changes}} บนแบนเนอร์ทำงานเหมือนกัน ทุกอย่างที่ทำในตัวแก้ไขเป็นหนึ่งขั้นตอนของการเลิกทำ

### VIEWBASE

นามแฝง: `FLATSHOT` มุมมอง 2D แบบแบนของโซลิดในแท็บ 3D `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, มาตราส่วน (`1:20`, `2:1` {{key:Enter}} จะเลือกมาตราส่วนที่พอดีกับแผ่น) แล้วจุดศูนย์กลางของมุมมอง เป็นการอ้างอิงบล็อกหนึ่งรายการ ขอบที่มองเห็นอยู่บน VIEW-VISIBLE ขอบที่ซ่อนเป็นเส้นประบน VIEW-HIDDEN ดู [มุมมองแบนบนแผ่น](topic:3d-solids#flat-views-on-a-sheet)

### PUBLISH

นามแฝง: `-PUBLISH` หรือ {{ui:All sheets in one PDF}} ในกล่องโต้ตอบ {{ui:Plot to PDF}} `Sheets to plot [All/Some]`: {{key:Enter}} จะพล็อตทุกแผ่น `S` ขอชื่อคั่นด้วยเครื่องหมายจุลภาค ได้ไฟล์ PDF หนึ่งไฟล์ มีหน้าหนึ่งหน้าและบุ๊กมาร์กหนึ่งอันต่อแผ่น ดู [ทุกแผ่นในไฟล์ PDF เดียว](topic:plot-pdf#every-sheet-in-one-pdf)

### SHEETSET

นามแฝง: `SSM`, `SHEETSETMANAGER` พาไปยังส่วน {{ui:Sheet set}} ของพาเนลซ้าย: แผ่นจากหลายแบบ ใส่หมายเลขและชื่อ ตารางชื่อเรื่องของแผ่นถูกเติมจากชุด และพล็อตเป็นไฟล์ PDF เดียว ดู [ชุดแผ่น](topic:sheet-sets)

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): เลือก DWG หรือ DXF แล้วจุดแทรก {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)` เมื่อมีลิงก์มากกว่าหนึ่ง ให้เลือกการอ้างอิงหนึ่งอันหรือพิมพ์ `N` แล้วชื่อ ดู [แบบที่เชื่อมโยง](topic:files#linked-drawings-external-references)

### COUNT

นามแฝง: `BCOUNT` หรือ {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}} `Select a block reference to count, or [All/Export] (Enter: All)`: การคลิกจะเลือกและนับทุกการอ้างอิงของบล็อกนั้นในพื้นที่นี้ {{key:Enter}} หรือ `A` จะแสดงทั้งหมด `E` แล้ว `C` (นับ) หรือ `A` (แอตทริบิวต์) จะดาวน์โหลดเป็น CSV ดู [นับบล็อกและส่งออกตารางรายการ](topic:blocks#count-blocks-and-export-a-schedule)

### INSERT

นามแฝง: `I`, `DDINSERT`

- `Enter block name or [File/Library] <last block>` (ไม่แยกตัวพิมพ์ใหญ่เล็ก) `F` ขอ DWG หรือ DXF แล้วทั้งแบบหรือบล็อกหนึ่งชิ้นของแบบ ถ้าชื่อถูกใช้แล้วจะถาม {{ui:Keep existing}} หรือ {{ui:Rename}} `L` เปิดพาเนลคลัง
- `Specify insertion point [Scale/Rotate]` `S` ขอ `Specify scale factor` `R` ขอ `Specify rotation angle` ค่าทั้งสองจะถูกจำไว้
- เมื่อบล็อกอยู่ติดกับวัตถุที่ซ้ำกันที่อื่นโดยไม่มีมัน จะมีบรรทัดแจ้งจำนวนตำแหน่งที่แนะนำ และพรอมต์จะมี `suGgested` เพิ่มมา `G` จะแสดงตำแหน่งเหล่านั้น คลิกใกล้ตำแหน่งหนึ่งเพื่อวางบล็อกตรงนั้น `A` สำหรับทั้งหมด {{key:Enter}} เพื่อกลับ ตำแหน่งเหล่านั้นจะรับการหมุนของเพื่อนบ้านและค่าเริ่มต้นของแอตทริบิวต์ แบบที่มีวัตถุเกิน 20,000 ชิ้นในพื้นที่เปิดจะไม่ถูกค้นหา
- จากนั้น `Enter <prompt> (<TAG>) <default>` สำหรับแต่ละแอตทริบิวต์ที่บล็อกต้องการ ดู [แอตทริบิวต์ของบล็อก](topic:attributes)

### LIBRARY

นามแฝง: `LIB` เปิดพาเนลคลัง: วางรายการ ตรวจหาการอัปเดต และเครดิตของคลัง ไม่มีคำถาม ดู [แทรกจากไฟล์หรือคลัง](topic:insert-from-file-and-library)

### STEELMEMBER

นามแฝง: `SMEMBER` หรือ {{ui:3D member}} บนแท็บ {{ui:Standard}} ของคลัง `Section size <W12x26>` (ตามที่แท็บแสดง) แล้ว `Start point [Column]` และ `End point`: ชิ้นส่วนโซลิดบนแท็บ 3D ระหว่างสองจุด วางบนพื้น `C` ขอจุดฐานของเสาและความสูง หนึ่งขั้นตอนของการเลิกทำ ดู [วางหน้าตัดเหล็กและชิ้นส่วนมาตรฐาน](topic:steel-and-standard-parts)

### PARTSLIST

นามแฝง: `PLIST` `Top left corner of the parts list` แล้ว `Text height <2.5>`: วาดตารางของชิ้นส่วนมาตรฐานและหน้าตัดเหล็กทุกชิ้นที่วางจากคลัง (หมายเลขรายการ จำนวน ชิ้นส่วน มาตรฐาน ขนาด ความยาว วัสดุ มวล) หนึ่งขั้นตอนของการเลิกทำ ดู [วางหน้าตัดเหล็กและชิ้นส่วนมาตรฐาน](topic:steel-and-standard-parts#make-a-parts-list)

### PURGE

นามแฝง: `PU` เอานิยามบล็อกที่ไม่มีอะไรใช้ออก ไม่มีคำถาม

### DELBLOCKS

หรือ {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}} `Select block to delete [Name/eXit]`: คลิกการอ้างอิงบล็อก หรือพิมพ์ `N` เพื่อดูรายการบล็อกพร้อมตัวกรอง (เลือกได้หลายอัน) หรือ `X` / {{key:Enter}} เพื่อจบ การอ้างอิงทุกตัวจะถูกลบ ทั้งในโมเดล ทุกแผ่น และในบล็อกอื่น แล้วจึงลบนิยาม และบรรทัดคำสั่งจะบอกว่าลบอะไรไปและลบอะไรไม่ได้ บล็อกที่ไม่มีชื่อและแบบที่เชื่อมโยงจะไม่ถูกเสนอ พรอมต์จะกลับมาสำหรับบล็อกถัดไป ทั้งคำสั่งเป็นหนึ่งขั้นตอนของการเลิกทำ

### PASTEBLOCK

{{cmd:PASTEBLOCK}} วางสิ่งที่คุณคัดลอกไว้ ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) เป็นบล็อกหนึ่งบล็อก: เลือกจุดแทรก แล้วการอ้างอิงหนึ่งรายการไปยังบล็อกใหม่จะถูกวางตรงนั้นและถูกเลือก บล็อกจะได้ชื่อของตัวเอง (`A$C` และตัวเลข) {{cmd:RENAME}} จะตั้งชื่อตามที่คุณต้องการ หนึ่งขั้นตอนของการเลิกทำจะลบการอ้างอิงและบล็อกนั้น

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} ถามบล็อกที่จะแทนที่และบล็อกที่จะใส่แทน (`?` แสดงรายการบล็อก) แล้วเปลี่ยนการอ้างอิงทุกตัวในโมเดล ทุกแผ่น และในบล็อกอื่น การอ้างอิงแต่ละตัวจะคงตำแหน่ง สเกล การหมุน เลเยอร์ และค่าของแอตทริบิวต์ที่ทั้งสองบล็อกมี แอตทริบิวต์ที่มีเฉพาะบล็อกใหม่จะเริ่มที่ค่าเริ่มต้น และจะบอกว่าค่าไหนถูกทิ้ง เมื่อไม่มีอะไรใช้บล็อกเก่าแล้ว จะเสนอให้เอาออก คำสั่งจะปฏิเสธแบบที่เชื่อมโยง และการแทนที่ที่จะทำให้บล็อกอยู่ข้างในตัวเอง หนึ่งขั้นตอนของการเลิกทำ

### MINSERT

{{cmd:MINSERT}} วางบล็อกเป็นแถวและคอลัมน์: ชื่อบล็อก จุดแทรก สเกล การหมุน จำนวนแถวและคอลัมน์ และระยะระหว่างกัน ชุดทั้งหมดหมุนไปตามการหมุน แต่ละชิ้นเป็นการอ้างอิงของตัวเอง (ไม่เกิน 10,000) จึงย้ายหรือลบชิ้นใดได้ภายหลัง

### BLOCKSPALETTE

นามแฝง: `BLOCKSPAL` หรือ {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}} แสดงพาเนล {{ui:Blocks}} โดยเคอร์เซอร์อยู่ในตัวกรอง แต่ละบล็อกมีภาพเล็ก บล็อกที่วางล่าสุดจะอยู่ก่อน สองปุ่มข้างตัวกรองสลับระหว่างรายการกับตารางภาพ คลิกภาพ (หรือ {{ui:Insert}}) เพื่อวางบล็อกด้วย {{cmd:INSERT}} หรือลากไปยังแบบเพื่อวางตรงจุดที่ปล่อย

{{ui:Libraries}} อยู่ใต้รายการ: {{ui:Add a drawing}} รับไฟล์ DWG หรือ DXF ของคุณเองและแสดงบล็อกของมันพร้อมภาพ รวมถึงทั้งแบบเป็นบล็อกหนึ่งอัน การวางหนึ่งอันจะคัดลอกนิยามของมัน (และบล็อกที่ซ้อนอยู่ พร้อมเลเยอร์) เข้าไปในแบบนี้ เหมือนตัวเลือก `File` ของ {{cmd:INSERT}} บล็อกที่มีอยู่แล้วที่นี่และนิยามเหมือนกันจะถูกใช้โดยไม่ถาม ส่วนบล็อกชื่อเดียวกันที่นิยามต่างกันจะถาม {{ui:Keep existing}} หรือ {{ui:Rename}} ในเบราว์เซอร์ ไฟล์จะคงอยู่จนกว่าหน้าจะปิด ใน CadCraft Studio {{ui:Add a folder}} จะแสดงแบบในโฟลเดอร์ แต่ละแบบจะเปิดเมื่อคุณคลิก และไฟล์กับโฟลเดอร์จะถูกจำไว้ เครื่องหมาย x เล็ก ๆ เอาคลังออกจากรายการ โดยไม่แตะไฟล์ {{ui:Library}} ที่ใช้ร่วมกันเป็นอีกเรื่องหนึ่ง ดู [แทรกจากไฟล์หรือคลัง](topic:insert-from-file-and-library)

### BCONVERT

หรือ {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}} ค้นหาเรขาคณิตที่ซ้ำกันและเปลี่ยนสำเนาทุกชิ้นเป็นการอ้างอิงไปยังบล็อกหนึ่งอัน

- `Select the objects that repeat, or [Block]`: วัตถุของสำเนาหนึ่งชุด `B` ตั้งชื่อบล็อกที่มีอยู่แล้วแทน เพื่อค้นหาสำเนาที่กระจัดกระจายของวัตถุของมัน
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` และ `P` สลับว่าอะไรนับเป็นสำเนา {{key:Enter}} จะค้นหา การตั้งค่าจะถูกจำไว้
- `Name for the new block <Block1>` แล้ว `Specify the block's base point` ({{key:Enter}} ใช้มุมซ้ายล่างของที่เลือก)
- คำสั่งจะบอกว่ามีวัตถุชุดอื่นอีกกี่ชุดที่เป็นเรขาคณิตเดียวกัน จะไฮไลต์ทุกอย่างที่มันจะแทนที่ และถาม `Yes/No`

สำเนาคือวัตถุชุดเดียวกันที่เลื่อนและหมุนด้วยมุมใดก็ได้ (และสลับด้านหรือปรับสเกลด้วยค่าหนึ่งเมื่อเปิดตัวเลือกเหล่านั้น) วัตถุทุกชิ้นต้องมีคู่ของมันภายในหนึ่งในล้านของขนาดที่เลือก แต่ละการอ้างอิงจะได้การหมุนและสเกลของตัวเอง (ชิ้นที่สลับด้านจะมีสเกล Y เป็นลบ) และเลเยอร์ที่วัตถุของมันใช้ร่วมกัน วัตถุบนเลเยอร์ที่ล็อกจะถูกปล่อยไว้และนับจำนวน มันค้นหาในพื้นที่เปิด (โมเดลหรือแผ่นที่เปิดอยู่) การค้นหาที่ใหญ่มากจะหยุดที่ขีดจำกัดงานและจะบอกว่าหยุดแล้ว หนึ่งขั้นตอนของการเลิกทำ

### BSEARCH

หรือ {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}} `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: ส่วนของชื่อบล็อก หรือรูปแบบที่มี `*` และ `?` แสดงแต่ละบล็อกพร้อมการอ้างอิงของมันที่นี่และทั้งแบบ
- `A`: ค่าแอตทริบิวต์ หรือ `TAG=value` แสดงบล็อกที่การอ้างอิงของมันมีค่านั้น พร้อมค่าที่พบ แอตทริบิวต์แบบคงที่ก็นับด้วย
- `G`: เลือกวัตถุ หรือการอ้างอิงบล็อกหนึ่งอัน แล้วบล็อกที่มีรูปร่างเหมือนอย่างน้อย 85% จะถูกแสดง เรียงจากดีที่สุด ขนาด การหมุน และการสลับด้านไม่นับ การวัดเปรียบเทียบระยะระหว่างจุดที่กระจายบนขอบรูป จึงหาตัวที่หน้าตาคล้ายกันได้ ใช้ {{cmd:BCONVERT}} เพื่อหาสำเนาที่เหมือนทุกอย่าง

การอ้างอิงที่พบในพื้นที่เปิดจะถูกเลือกไว้ พร้อมสำหรับคำสั่งถัดไป

### BREPLACE

หรือ {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}} `Replace [Selected/All]`: `S` แทนที่การอ้างอิงบล็อกที่คุณเลือกด้วยบล็อกที่คุณตั้งชื่อ `A` ถามบล็อกและตัวที่จะแทนที่ แล้วเปลี่ยนการอ้างอิงทุกตัว เหมือน {{cmd:BLOCKREPLACE}} (เป็นโค้ดชุดเดียวกัน) การอ้างอิงจะคงตำแหน่ง สเกล การหมุน เลเยอร์ และค่าแอตทริบิวต์ที่ทั้งสองบล็อกมี ค่าที่บล็อกใหม่ไม่มีที่ให้จะถูกทิ้งและจะถูกระบุชื่อ `?` แสดงรายการบล็อก หนึ่งขั้นตอนของการเลิกทำ

### DATAEXTRACTION

นามแฝง: `EATTEXT`, `DX` หรือ {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}} แสดงบล็อก แอตทริบิวต์ และคุณสมบัติของวัตถุเป็นตารางหรือไฟล์ CSV

- ทำงานกับที่เลือก หรือถาม `Select objects (Enter: everything in this space)`
- `List: [Blocks/Objects/All]` เมื่อที่เลือกมีทั้งสองอย่าง บล็อกที่ไม่มีชื่อ ตาราง และรายการวัสดุจะไม่ถูกแสดงเลย
- จะพิมพ์คอลัมน์ที่เลือกได้ (ชื่อ ชนิด เลเยอร์ X Y การหมุน สเกล ความยาว พื้นที่ สี ชนิดเส้น พื้นที่ และหนึ่งคอลัมน์ต่อแท็กแอตทริบิวต์) แล้ว `Columns, by name or number with commas between` {{key:Enter}} จะเลือกรายการที่มีดาว: ชื่อและทุกแอตทริบิวต์สำหรับบล็อก ชนิด เลเยอร์ และความยาวสำหรับวัตถุ
- `Put identical rows together with a count? [Yes/No] <Yes>` แล้ว `Put the list in a: [Table/Csv] <Table>` ตารางเป็นตารางธรรมดา ({{cmd:TABLEDIT}} แก้ได้) และไม่ได้เชื่อมกับแบบแบบสด ให้รันคำสั่งอีกครั้งเมื่อแบบเปลี่ยน
- จะปฏิเสธคอลัมน์ที่ไม่อยู่ในรายการ ตารางรับข้อมูลได้ 1,999 แถว ส่วนไฟล์ CSV รับได้ทั้งหมด

### COUNTTABLE

นับการอ้างอิงบล็อกของที่เลือก (หรือของพื้นที่เปิด) และใส่จำนวนลงในตาราง (`Block`, `Count`) หรือไฟล์ CSV สำหรับการนับที่ตามแบบเองโดยอัตโนมัติ ดู {{cmd:BOMTABLE}}

## แผ่นและการพล็อต

### LAYOUT

นามแฝง: `LO`, `NEWLAYOUT` หรือปุ่ม {{ui:+}} ใต้แบบ แผ่นใหม่ที่มีกรอบ ตารางชื่อเรื่อง และวิวพอร์ตหนึ่งอันบน ISO A3 (หรือ Tabloid สำหรับแบบที่เป็นนิ้วหรือฟุต) ไม่มีคำถาม

### MVIEW

นามแฝง: `MV` ใช้ได้เฉพาะบนแผ่น ({{cmd:VPORTS}} บนแผ่นให้ผลเดียวกัน)

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner` วิวพอร์ตจะแสดงทั้งโมเดลที่มาตราส่วนมาตรฐาน
- `P` (Polygonal): คลิกมุมของเส้นรอบ (`Undo`, `Close`) และกด {{key:Enter}} เมื่อเสร็จ คำสั่งจะปฏิเสธเมื่อมีมุมน้อยกว่าสามมุม
- `O` (Object): `Select a closed object for the viewport's outline` คือโพลีไลน์ปิด วงกลม หรือวงรีบนแผ่น วิวพอร์ตจะรับรูปร่างของมัน (เส้นโค้งจะกลายเป็นส่วนเส้นตรงสั้น ๆ) วัตถุจะยังคงเดิม คำสั่งจะปฏิเสธวัตถุที่ไม่ปิด

### VPCLIP

ตัดวิวพอร์ตที่อยู่บนแผ่นอยู่แล้ว `Select viewport to clip` (หรือเลือกไว้ก่อน) แล้ว `Select the object to clip to [Polygonal/Delete]`:

- คลิกโพลีไลน์ปิด วงกลม หรือวงรี หรือ {{key:Enter}} (หรือ `P`) เพื่อคลิกมุมของรูปหลายเหลี่ยม
- `D` (Delete ใช้ได้เมื่อวิวพอร์ตถูกตัดแล้ว) จะทำให้เป็นสี่เหลี่ยมอีกครั้ง คือกรอบรอบเส้นรอบที่มันเคยมี
- สิ่งที่วิวพอร์ตแสดงไม่ขยับบนกระดาษ และมาตราส่วนของมันคงเดิม โมเดลจะถูกวาดและพล็อตเฉพาะภายในเส้นรอบ และกรอบจะตามเส้นรอบ หนึ่งขั้นตอนของการเลิกทำ
- วิวพอร์ตที่ถูกตัดจะมีจุดจับที่แต่ละมุมของเส้นรอบ นอกเหนือจากจุดศูนย์กลางและมุมทั้งสี่ของกรอบ (การลากมุมกรอบจะยืดเส้นรอบไปด้วย) Properties จะแสดง Outline: Rectangle หรือ Clipped พร้อมจำนวนมุม
- ไฟล์ DWG และ DXF 2000 จะเก็บเส้นรอบไว้สำหรับ CadCraft โปรแกรมอื่นจะเปิดวิวพอร์ตเป็นสี่เหลี่ยมรอบมัน DXF R12 เก็บแค่สี่เหลี่ยม
- บนแท็บโมเดลจะแจ้งว่าวิวพอร์ตอยู่บนแผ่น

### VPORTS

นามแฝง: `VIEWPORTS` {{cmd:SPLIT}} ก็เหมือนกันจากแผ่น และ {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} จะรันคำสั่งนี้ บนโมเดล: `Enter number of panes [SIngle/2/3/4] <3>` `2` ถาม `[Horizontal/Vertical] <Vertical>` (Vertical = เรียงข้างกัน) `3` ถาม `[Left/Right] <Right>` (พาเนลใหญ่อยู่ด้านไหน) แต่ละพาเนลเก็บมุมมองและพื้นที่ของตัวเอง การคลิกจะทำให้พาเนลนั้นเป็นพาเนลที่ใช้งาน บนแผ่นจะเป็น {{cmd:MVIEW}} ดู [แบ่งหน้าจอ](topic:split-screen)

### VPVIEW

ไม่มีนามแฝง ใช้ได้เฉพาะบนแผ่น

- `Select viewport` (ข้ามไปเมื่อเลือกไว้แล้ว) แล้วบนโมเดล: `Specify first corner of the window to show` `Specify opposite corner`

### UCS

ไม่มีนามแฝง ระบบพิกัดของคุณเอง ไม่ใช่การแก้ไข `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: จุดคือจุดกำเนิดใหม่ แล้ว `Specify point on X-axis (Enter keeps the angle)` `Z`: `Specify rotation angle about Z axis <90>` `3`: จุดกำเนิด จุดบนแกน X ทิศบวก และจุดด้านแกน Y บวก `OB`: `Select object to align UCS` `NA`: `[Restore/Save/Delete/?]` และชื่อ มุมมองจะหมุนให้แกน X ใหม่อยู่ในระดับเดียวกัน ดู [หมุนมุมมองและใช้พิกัดของคุณเอง](topic:ucs-and-turned-view)

### PLAN

ไม่มีนามแฝง `Enter an option [Current ucs/Ucs/World] <Current ucs>`: หมุนมุมมองของพาเนลที่ใช้งานให้แกน X ของ UCS (หรือของโลก) อยู่ในระดับเดียวกัน ไม่มีอะไรในแบบเคลื่อนที่

### TURNLEFT, TURNRIGHT, TURNWORLD

ไม่มีนามแฝง หรือ {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}} เหมือน `UCS Z -90`, `UCS Z 90` และ `UCS W` โดยมุมมองตามไปด้วย

### VPLAYER

ไม่มีนามแฝง บนแผ่น หรือภายในวิวพอร์ต `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` ขอชื่อเลเยอร์ (คั่นด้วยเครื่องหมายจุลภาค และใช้ตัวแทน `*` กับ `?` ได้) แล้ว `[All/Select/Current] <Current>` สำหรับวิวพอร์ต Reset จะคืนแต่ละเลเยอร์ไปยังค่าเริ่มต้น "แช่แข็งในวิวพอร์ตใหม่" `V` ตั้งค่าเริ่มต้นนั้น (`[Frozen/Thawed]`) ซึ่ง {{cmd:MVIEW}} ใช้ `?` แสดงเลเยอร์ที่ถูกแช่แข็งในวิวพอร์ตปัจจุบัน คอลัมน์วิวพอร์ตของพาเนล Layers ทำเช่นเดียวกันสำหรับวิวพอร์ตหนึ่งอัน ดู [แช่แข็งเลเยอร์ในวิวพอร์ตเดียว](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport)

### MSPACE

นามแฝง: `MS` หรือดับเบิลคลิกภายในวิวพอร์ต ใช้ได้เฉพาะบนแผ่น ทำงานกับโมเดลผ่านวิวพอร์ต: อันที่เลือก อันเดียวบนแผ่น หรือ `Click inside the viewport to work in` การเลื่อนและซูมภายในจะเปลี่ยนมุมมองของวิวพอร์ต (วิวพอร์ตที่ล็อกการแสดงผลจะคงมุมมองไว้และแผ่นจะเลื่อนแทน) มุมมองใหม่จะถูกบันทึกเป็นหนึ่งขั้นตอนของการเลิกทำ ดู [ทำงานกับโมเดลผ่านวิวพอร์ต](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)

### PSPACE

นามแฝง: `PS` หรือดับเบิลคลิกนอกวิวพอร์ต หรือคลิกแท็บใต้แบบ กลับไปยังแผ่น

### PLOT

นามแฝง: `PRINT`, `PUBLISH`, `EXPORTPDF` หรือ {{key:Mod+P}} เปิดกล่องโต้ตอบ {{ui:Plot to PDF}} ดู [พล็อตเป็น PDF](topic:plot-pdf)

### PLOTSTYLES

นามแฝง: `STYLESMANAGER`, `PSTABLES` หรือ {{ui:Edit tables…}} ในกล่องโต้ตอบ {{ui:Plot to PDF}} เปิด {{ui:Plot style tables}}: สีแต่ละสีจะพิมพ์เป็นอะไร (สี เทา หมึก ความหนาเส้น) เก็บไว้กับแบบ ดู [ตารางรูปแบบการพล็อต](topic:plot-pdf#plot-style-tables)

### CHSPACE

{{cmd:CHSPACE}} ย้ายวัตถุระหว่างแผ่นกับโมเดลผ่านวิวพอร์ต โดยปรับสเกลและหมุนให้ดูเหมือนกันเมื่อมองจากอีกด้าน บนแผ่น เลือกวัตถุและมันจะไปที่โมเดล (เลือกวิวพอร์ตเมื่อแผ่นมีมากกว่าหนึ่ง) ขณะที่คุณทำงานกับโมเดลผ่านวิวพอร์ต ({{cmd:MSPACE}}) วัตถุที่เลือกจะมาที่แผ่น คำสั่งจะบอกว่ามันใหญ่หรือเล็กขึ้นกี่เท่า วิวพอร์ตจะอยู่บนแผ่นของมัน หนึ่งขั้นตอนของการเลิกทำ

### ISODRAFT

{{cmd:ISODRAFT}} เปิดหรือปิดการร่างไอโซเมตริกเป็น `ON` หรือ `OFF` หรือไปยังระนาบ `Left`, `Top` หรือ `Right` ทันที ขณะเปิดอยู่: Ortho ({{key:F8}}) ทำให้เส้นอยู่บนแกนสองแกนของระนาบ (ซ้าย: 90° และ 150°; บน: 30° และ 150°; ขวา: 30° และ 90°) polar tracking ({{key:F10}}) ตามแกนเดียวกัน snap to grid ({{key:F9}}) ใช้กริดไอโซเมตริก และกริด ({{key:F7}}) วาดด้วยเส้นที่ 30°, 90° และ 150° {{cmd:ELLIPSE}} ได้ `Isocircle` เพิ่ม: ให้จุดศูนย์กลางและรัศมี (หรือ `Diameter`) แล้วจะวาดวงรีที่วงกลมปรากฏบนระนาบปัจจุบัน แบบยังเป็นระนาบ นี่คือตัวช่วยสำหรับการวาดภาพมุมมองเชิงภาพ ไม่ใช่โมเดล 3D การตั้งค่านี้ใช้สำหรับเซสชันนี้ และไม่ถูกบันทึกในไฟล์

### ISOPLANE

{{cmd:ISOPLANE}} เลือกระนาบที่การร่างไอโซเมตริกทำงานบน: `Left`, `Top` หรือ `Right` Enter ไปยังระนาบถัดไป เมื่อการร่างไอโซเมตริกเปิดอยู่ {{key:F5}} ทำเช่นเดียวกันกลางคำสั่ง ขณะปิดอยู่ {{key:F5}} จะเป็นของเบราว์เซอร์

## การสืบค้น

### CAL

พิมพ์ค่าของการคำนวณ เหมือนที่จะอ่านได้ทุกที่ที่พิมพ์ความยาว

- `Expression`: พิมพ์ เช่น `12'6"+3/4"` หรือ `(24'-0")/3` แล้วกด {{key:Enter}} CadCraft จะพิมพ์ `= 12'-6 3/4"   (150.75 drawing units)` ดู [เลขคณิตในค่าที่พิมพ์](topic:coordinate-entry#arithmetic-in-a-typed-value)

### DIST

นามแฝง: `DI` หรือ {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}

- `Specify first point`, `Specify second point` จะพิมพ์ระยะ มุม Delta X และ Delta Y

### AREA

นามแฝง: `AA` หรือ {{ui:View}} › {{ui:More}} › {{ui:Area}} พิมพ์พื้นที่และเส้นรอบรูป

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - คลิกหรือพิมพ์มุม ที่ `Specify next point (Enter closes) [Undo]` กด {{key:Enter}} เพื่อปิดเส้นรอบ `U` ย้อนมุมสุดท้าย
  - {{key:Enter}} หรือ `O` แล้ว `Select object`: วงกลม (จะพิมพ์เส้นรอบวง) วงรี โพลีไลน์ (โพลีไลน์แบบเปิดจะถูกปิดด้วยเส้นตรงเพื่อคิดพื้นที่ และจะพิมพ์ความยาวของมัน) หรือแฮตช์ (หักรูออก)
  - `A` (Add area) และ `S` (Subtract area) เก็บยอดรวมที่สะสม พรอมต์จะขึ้นต้นด้วย `(ADD mode)` หรือ `(SUBTRACT mode)` พื้นที่แต่ละอันจะถูกบวกหรือหักออก และ `Total area = …` จะถูกพิมพ์หลังแต่ละอัน ในโหมดนี้ `O` จะเลือกวัตถุจนกด {{key:Enter}} และ {{key:Enter}} ที่พรอมต์แรกจะจบคำสั่ง

### MEASUREGEOM

นามแฝง: `MEA` `Enter an option [Distance/Radius/Angle/ARea] <Distance>` หลังการวัดแต่ละครั้งจะถามอีกครั้ง โดยค่าเริ่มต้นคือ `eXit`

`Quick` วัดรอบตัวชี้เมื่อคุณเลื่อนมัน: ระยะถึงวัตถุที่ใกล้ที่สุดทางขวา บน ซ้าย และล่าง (ตามแกนของ UCS ปัจจุบัน) วาดขณะเคลื่อนไป และมุมที่ตำแหน่งที่เพื่อนบ้านสองตัวเป็นเส้นตรงและมาบรรจบกัน การคลิกจะเขียนระยะทั้งสี่ ความกว้างและความสูงที่โล่ง และมุมลงในประวัติ Enter จะกลับไปที่ตัวเลือก มันอ่านสิ่งที่อยู่บนหน้าจอ

- `D`: สองจุด เหมือน {{cmd:DIST}}
- `R`: `Select arc or circle` พิมพ์รัศมีและเส้นผ่านศูนย์กลาง
- `A`: ส่วนโค้ง (มุมรวมของมัน) หรือเส้นแล้วเส้นที่สอง (มุมระหว่างทั้งสอง นับไปทางปลายที่ไกลของมัน) หรือ {{key:Enter}} แล้วสามจุด (จุดยอด แล้วปลายทั้งสอง)
- `AR`: เหมือน {{cmd:AREA}} หนึ่งพื้นที่

### ID

ไม่มีนามแฝง `Specify point` พิมพ์ X และ Y ของจุดนั้น

### LIST

นามแฝง: `LI`, `LS` `Select objects` พิมพ์ชนิด เลเยอร์ และการวัดหลักของแต่ละวัตถุ

### MASSPROP

{{cmd:MASSPROP}} ให้คุณสมบัติหน้าตัดของรีเจียนและวัตถุปิดที่คุณเลือก รวมกันทั้งหมด: พื้นที่ เส้นรอบรูป กรอบขอบเขต จุดศูนย์ถ่วง โมเมนต์ความเฉื่อยรอบแกน X และ Y ที่ผ่านจุดกำเนิด ผลคูณความเฉื่อย รัศมีไจเรชัน โมเมนต์เดียวกันรอบจุดศูนย์ถ่วง และโมเมนต์หลักพร้อมทิศทางของแกนเหล่านั้น รูในรีเจียนจะนับเป็นรู ตัวเลขเป็นหน่วยของแบบและแม่นยำสำหรับเส้นรอบที่ทำจากเส้นและส่วนโค้ง วงรีและสไปลนจะวัดเป็นส่วนเส้นตรงสั้น ๆ และคำสั่งจะบอกเช่นนั้น หลังรายงาน จะถามว่าจะเขียนลงไฟล์ข้อความหรือไม่ วัตถุที่ไม่ปิดจะถูกข้าม และคำสั่งจะบอกจำนวนของมัน

## มุมมอง ไฟล์ และอื่น ๆ

### ZOOM

นามแฝง: `Z`

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]` คลิกสองมุมเพื่อทำเป็นกรอบ `E`, `A` หรือ Enter: ทั้งแบบ
- `P` (Previous หรือ {{ui:Previous}} บนแถบเครื่องมือ) กลับไปยังมุมมองก่อนหน้า สูงสุด 10 มุมมองต่อแท็บ การเลื่อนล้อเมาส์ชุดหนึ่งหรือการแพนหนึ่งครั้งนับเป็นหนึ่งมุมมอง
- ตัวเลขเช่น `2`, `2x` หรือ `0.5x` (หรือ `S` แล้วตามด้วยตัวเลข) ซูมเข้าหรือออกด้วยค่าสัดส่วนนั้นรอบกลางหน้าจอ
- `C` ถาม `Specify center point` และ `Enter height or magnification (nX)`

### PDFATTACH, PDFIMPORT and the PDF commands

นามแฝง: `PDFATT` สำหรับ {{cmd:PDFATTACH}}, `PDFIM` สำหรับ {{cmd:PDFIMPORT}} {{cmd:PDFATTACH}} วางหน้า PDF ใต้แบบ (ไฟล์ หน้า จุดแทรก สเกล การหมุน) {{cmd:PDFIMPORT}} เปลี่ยนเส้น เส้นโค้ง การเติม และข้อความของหน้าให้เป็นวัตถุในแบบ บนเลเยอร์ที่ตั้งชื่อตาม PDF ที่ขนาดจริง ที่มาตราส่วนที่พิมพ์ หรือปรับสเกลจากสองจุดและระยะจริง {{cmd:PDFCLIP}} ตัดอันเดอร์เลย์ {{cmd:PDFADJUST}} ตั้งการจางหาย คอนทราสต์ ขาวดำ หรือปิด {{cmd:PDFLAYERS}} สลับเลเยอร์ของ PDF เอง และ {{cmd:PDF}} ให้ CadCraft ใช้ไฟล์ที่อันเดอร์เลย์ของแบบใช้อีกครั้ง ดู [อันเดอร์เลย์ PDF](topic:pdf-underlay)

### AUTOCOMPLETE

นามแฝง: `AUTOC` การเติมอัตโนมัติของแบบ: เมื่อไม่มีคำสั่งทำงานอยู่ จะแสดงเงาสีเทาว่ารูปแบบของแบบเองบอกว่าอะไรมาต่อไป {{cmd:AUTOCOMPLETE}} เปิดหรือปิดด้วย `On` หรือ `Off` (หรือการตั้งค่า › CadCraft) หรือ `Show` เพื่อดูว่ามันจะแนะนำอะไรตอนนี้ **Tab** วาดเงานั้นเป็นหนึ่งขั้นตอนของการเลิกทำ **Esc** ซ่อนมันจนกว่าแบบจะเปลี่ยน มันพบสามอย่างในวัตถุที่ใหม่ที่สุด: สำเนาถัดไปของบางอย่างที่วาดสองครั้งขึ้นไปในระยะเท่ากัน (เสา คอลัมน์ ลูกนอนและลูกตั้งของบันได) ขั้นถัดไปของบันไดที่เป็นโพลีไลน์ และด้านที่ขาดหายของห้องหรือโซ่ผนัง ระหว่าง {{cmd:LINE}} หรือ {{cmd:PLINE}} เงาคือ **จุดถัดไป**: ขั้นถัดไปของบันได (ลูกนอน ลูกตั้ง ลูกนอน…) มุมที่สี่ของสี่เหลี่ยม จุดที่ปิดมัน หรือหนึ่งขั้นที่เท่ากันอีกขั้น นำตัวชี้เข้าใกล้ แล้วกด **Tab** เหมือนคุณคลิกตรงนั้น จากนั้นทำต่อหรือกด Enter คำนวณบนคอมพิวเตอร์เครื่องนี้ด้วยกฎ ไม่มีโมเดล

### AUTOSHEET

นามแฝง: `ASH` แผ่นที่จัดหน้าเองได้ {{cmd:AUTOSHEET}} รับชิ้นส่วนของแบบ (มุมมองที่ตั้งชื่อของคุณ ชิ้นส่วนที่แยกของโมเดล หรือทั้งโมเดล) เลือกขนาดกระดาษ (หรือที่คุณให้) ให้แต่ละชิ้นมีมาตราส่วนมาตรฐาน (มาตราส่วนเดียวกันทั้งหมด หรือใหญ่ที่สุดที่แต่ละชิ้นรับได้) และวางมุมมองเป็นแถวบนแผ่นใหม่ที่มีตารางชื่อเรื่องและคำบรรยาย (ชื่อและมาตราส่วน) ใต้แต่ละอัน สิ่งที่ไม่พอดีกับแผ่นเดียวจะได้แผ่นของตัวเอง หนึ่งขั้นตอนของการเลิกทำ คำนวณบนคอมพิวเตอร์เครื่องนี้ด้วยกฎ ไม่มีโมเดล

### PHOTOSKETCH

นามแฝง: `PSK` ร่างภาพถ่ายเป็นแบบ เลือกรูปถ่าย (JPEG, PNG หรือ TIFF) ของสเกตช์ด้วยมือบนกระดาษ {{cmd:PHOTOSKETCH}} หามุมทั้งสี่ของแผ่น ทำให้มุมมองตรง รับขนาดกระดาษที่คุณระบุ (`Paper` หรือขนาดมาตรฐานที่ใกล้ที่สุด) และ `Scale` ของสเกตช์ (1 : n) แล้วลอกเส้นปากกาเป็นเส้น ส่วนโค้ง และวงกลม โดยมีเลเยอร์หนึ่งต่อสีปากกา (ดำ แดง น้ำเงิน เขียว) ถ้าหาขอบกระดาษไม่พบ จะใช้ทั้งรูปถ่ายเป็นแผ่นและจะบอกเช่นนั้น ตัวอักษรจะไม่ถูกรวม หนึ่งขั้นตอนของการเลิกทำ ทำบนคอมพิวเตอร์เครื่องนี้ด้วยการประมวลผลภาพแบบคลาสสิก ไม่มีโมเดล ไม่มีการส่งอะไรไปที่ใด ดูคำสั่งของแบบสแกนด้วย

### AUTODIM

นามแฝง: `ADIM` ใส่ไดเมนชันอัตโนมัติด้วยกฎ {{cmd:AUTODIM}} ใส่ไดเมนชันให้วัตถุที่เลือก (หรือทั้งแบบ) จากระดับและขอบดิ่งของมัน: โซ่ของไดเมนชันตามด้านที่คุณเลือก (`Sides`) ไดเมนชันรวมหนึ่งอันอยู่นอกโซ่นั้น ความกว้างของช่องเปิดแต่ละช่อง (ช่องว่างระหว่างเส้นผนังที่อยู่บนเส้นเดียวกัน) เส้นผ่านศูนย์กลางสำหรับรูแต่ละขนาด และด้วย `Grid` ระยะระหว่างเส้นกริด ไดเมนชันที่มีอยู่แล้วจะไม่ถูกทำซ้ำ หนึ่งขั้นตอนของการเลิกทำ คำนวณบนคอมพิวเตอร์เครื่องนี้ด้วยกฎ ไม่มีโมเดล

### GRIDMOVE

นามแฝง: `GM` การย้ายเส้นกริดจะพาชุดไปด้วย {{cmd:GRIDMOVE}} ย้ายเส้นกริด (เส้นบนเลเยอร์ที่ชื่อมีคำว่า grid หรือ axis) และสิ่งที่แขวนอยู่กับมัน: ผนังที่มีปลายอยู่บนเส้นจะยืดตาม ผนังที่วิ่งไปตามเส้นจะเคลื่อนทั้งชิ้น เสา (การอ้างอิงบล็อกและวงกลมบนเส้น) ฟองสัญลักษณ์และป้ายจะเคลื่อนไป และไดเมนชันที่จุดอยู่บนเส้นจะวัดระยะห่างใหม่ ให้สองจุด (นับเฉพาะส่วนที่ข้ามเส้น) หรือ `Distance` หนึ่งขั้นตอนของการเลิกทำจะย้อนกลับทั้งหมด ทำด้วยกฎบนคอมพิวเตอร์เครื่องนี้

### DETAILS

นามแฝง: `DET` รายละเอียดที่มาหาคุณ {{cmd:DETAILS}} เก็บรายละเอียดของบริษัทคุณเอง: `Add` ใส่บล็อกของแบบนี้ลงในรายการ `List` และ `Remove` จัดการ `Find` จัดอันดับให้ตรงกับสิ่งที่เลือก (หรือสิ่งที่คุณวาดล่าสุด) ด้วยคำในเลเยอร์ ชื่อบล็อก ลวดลายแฮตช์ และหมายเหตุ เทียบกับชื่อและหมายเหตุของแต่ละรายละเอียด เพื่อให้รายละเอียดหัวหน้าต่างหาแผ่นกันซึมของธรณีประตูคุณได้ เลือกหมายเลขและจุดเพื่อวาง เมื่อเปิด `Hint` (หรือการตั้งค่า › CadCraft) การเลือกสิ่งที่รายละเอียดตรงกันจะแสดงหนึ่งบรรทัดในแถบสถานะ รายการจะถูกเก็บในเบราว์เซอร์นี้บนคอมพิวเตอร์เครื่องนี้ และรายการนั้นคือสิ่งที่ถูกค้นหา `Share` จะใส่ไว้ในโฟลเดอร์ Documents ของคุณด้วย (`.cadcraft/firm-details.json` พร้อมแบบของแต่ละบล็อก) `Pull` เพิ่มสิ่งที่ทีมมีและคุณไม่มี `Push` เพิ่มสิ่งที่คุณมีและเขาไม่มี `Both` ทำทั้งสองอย่าง และจะไม่มีการลบอะไรออกจากทั้งสองฝั่ง เปิดโฟลเดอร์ Documents ก่อนด้วย {{cmd:DOCUMENTS}} เมื่อโฟลเดอร์นั้นเป็นโฟลเดอร์ของ Team Cloud Plan ทั้งทีมจะใช้รายการเดียวกัน รายการรายละเอียดในพาเนล Library มีปุ่ม **Add to my firm's details** ที่ใส่ลงในรายการเดียวกัน ทำด้วยคำบนคอมพิวเตอร์เครื่องนี้ ไม่มีโมเดล

### SKETCHFIX

นามแฝง: `SKF` สเกตช์ด้วยปากกาจะกลายเป็นเรขาคณิตที่แม่นยำ กดแล้วลากเส้นอิสระทีละเส้น (ปากกา เมาส์ หรือนิ้ว) แล้ว Enter แต่ละเส้นจะถูกอ่านเป็นเส้น วงกลม ส่วนโค้ง สี่เหลี่ยมผืนผ้า หรือโพลีไลน์ เส้นที่เกือบระดับและเกือบดิ่งจะทำให้ระดับและดิ่งพอดี เส้นโค้งปิดรอบจะเป็นวงกลม เส้นปิดที่มีมุมฉากสี่มุมจะเป็นสี่เหลี่ยมผืนผ้า และปลายของเส้นจะถูกดึงเข้าหากันและไปยังปลายที่มีอยู่แล้วในแบบ หนึ่งขั้นตอนของการเลิกทำ คำนวณบนคอมพิวเตอร์เครื่องนี้ด้วยกฎ ไม่มีโมเดล

### SCANATTACH and the scanned-drawing commands

นามแฝง: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} ไม่มีนามแฝง ทำงานกับรูปภาพ หนึ่งขั้นตอนของการเลิกทำต่อคำสั่ง {{cmd:SCANATTACH}} แทรก PNG, JPEG, TIFF (หน้าเดียวหรือทั้งหมด) หรือหน้า PDF ที่เป็นรูปภาพ {{cmd:SCANSCALE}} ปรับสเกลแผ่นจากสองจุดที่เลือกและระยะจริง {{cmd:SCANALIGN}} เลื่อนและหมุนมันให้ทับสองจุด (`Scale the sheet to fit` Yes/No) {{cmd:SCANDESKEW}} แสดงมุมของเส้นยาวของแผ่น และหมุนแผ่นเมื่อคุณ `Accept` หรือให้ `Value` {{cmd:SCANCLEAN}} ทำให้เป็นขาวดำ (`Threshold` Auto/Adaptive/Level, `Specks`) และ `Run` {{cmd:SCANCROP}} เก็บกรอบหนึ่งกรอบ {{cmd:SCANERASE}} ลบ `Rectangle`, `Polygon` หรือ `Lasso` {{cmd:SCANTRACE}} ลอกเส้นและส่วนโค้งลงบนเลเยอร์ใหม่ (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) และรายงานสิ่งที่พบและสิ่งที่เหลือเป็นแรสเตอร์ {{cmd:SCANINFO}} แสดงไฟล์ต้นฉบับและขั้นตอน {{cmd:RASTERSNAP}} เปิดหรือปิดการยึดติดกับเส้นของแผ่นที่สแกน ดูหัวข้อ Scanned drawings และ the trace

### REGEN and REGENALL

นามแฝง: `RE` สำหรับ {{cmd:REGEN}}, `REA` สำหรับ {{cmd:REGENALL}} สร้างสิ่งที่วาดบนหน้าจอขึ้นใหม่จากแบบ {{cmd:REGEN}} แท็บที่คุณดูอยู่ (บนแผ่น โมเดลที่วิวพอร์ตแสดงก็ด้วย) {{cmd:REGENALL}} ทุกแท็บ ทุกพาเนลของหน้าจอแบ่ง และทุกแบบที่เปิดอยู่ ใช้เมื่อภาพดูค้างจากการเปลี่ยนแปลงด้วยสคริปต์หรือแบบขนาดใหญ่มาก หรือเมื่อผู้ช่วยแก้ไขแบบ แบบของคุณจะไม่ถูกแตะต้อง จึงไม่มีอะไรให้เลิกทำ

### NAMEDVIEW

นามแฝง: `NV`, `VIEWS` `Enter an option [?/Restore/Save/Window/Delete] <Restore>` แล้วชื่อของมุมมอง `S` บันทึกมุมมองบนหน้าจอ `W` บันทึกกรอบที่คุณเลือก `R` แสดงมุมมองที่บันทึกไว้ `D` ลบอันหนึ่ง `?` แสดงรายการมุมมองของแท็บนี้ การบันทึกภายใต้ชื่อที่มีอยู่แล้วจะแทนที่ แต่ละการเปลี่ยนแปลงเป็นหนึ่งขั้นตอนของการเลิกทำ มุมมองเป็นของแท็บที่บันทึกไว้ ไฟล์ DWG และ DXF จะเก็บไว้ (ตาราง VIEW) มุมมองของแผ่นจะกลับมาที่แผ่นแรก เพราะไฟล์ไม่ได้บอกว่าเป็นแผ่นไหน

### UNDO and REDO

นามแฝง: `U` สำหรับ {{cmd:UNDO}} {{cmd:REDO}} ไม่มีนามแฝง และ {{key:Mod+Z}} กับ {{key:Mod+Y}} ก็ใช้ได้เช่นกัน

### LAYER

นามแฝง: `LA` ไปยังพาเนล {{ui:Layers}}

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` หรือชื่อ (`?` แสดงรายการ: Continuous, ของแบบเอง และ DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE พร้อมขนาด `2` (ครึ่ง) และ `X2` (สองเท่า)) {{cmd:LWEIGHT}} (`LW`): ความหนาเส้นของวัตถุใหม่เป็นมม. หรือ `ByLayer`, `ByBlock`, `Default` {{cmd:LTSCALE}} (`LTS`): มาตราส่วนชนิดเส้นของแบบ (ย้อนกลับได้) {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` เหมือนปุ่ม {{ui:LWT}} บนแถบสถานะ ดู [ความหนาเส้นและชนิดเส้น](topic:units-papers-scales#line-weights-and-linetypes)

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name` แล้วชื่อใหม่ วัตถุหรือการอ้างอิงจะตามไป {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` จนกด {{key:Enter}} แล้ว `Select object on target layer or [Name]` และ `Y` {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]` แล้ว `Y`: เลเยอร์และทุกวัตถุบนเลเยอร์นั้นจะหายไป (ยกเว้นเลเยอร์ 0, DEFPOINTS หรือเลเยอร์ปัจจุบัน) หนึ่งขั้นตอนของการเลิกทำต่อคำสั่ง ดู [จัดระเบียบแบบด้วยเลเยอร์](topic:layers#rename-merge-and-delete-layers)

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

เลเยอร์โดยการเลือกวัตถุ และในเมนู {{ui:Tools}} ของพาเนล {{ui:Layers}} ด้วย {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated` แล้ว {{key:Enter}}: เลเยอร์อื่นทั้งหมดจะปิด {{cmd:LAYUNISO}} เปิดกลับ {{cmd:LAYOFF}} และ {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (หรือแช่แข็ง) ซ้ำไปเรื่อย ๆ `U` ย้อนอันสุดท้าย {{key:Enter}} จบ {{cmd:LAYMCUR}}: `Select object whose layer will become current` {{cmd:LAYON}} เปิดทุกเลเยอร์ {{cmd:LAYTHW}} ละลายการแช่แข็งทุกเลเยอร์ แต่ละคำสั่งเป็นหนึ่งขั้นตอนของการเลิกทำ ดู [จัดระเบียบแบบด้วยเลเยอร์](topic:layers#work-on-layers-by-picking-objects)

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} เริ่มแบบว่าง และ {{cmd:OPEN}} เปิด DWG หรือ DXF แต่ละอันในแท็บของตัวเองเหนือแบบ (แบบใหม่ที่ยังไม่ได้แก้จะถูกใช้แทนการเปิดแท็บใหม่) การปิดแท็บที่มีการเปลี่ยนแปลงที่ยังไม่บันทึกจะถามก่อน ดู [แบ่งหน้าจอ](topic:split-screen)

{{cmd:SAVE}} (นามแฝง `QSAVE` และ {{key:Mod+S}}) ดาวน์โหลดสำเนาในรูปแบบของแบบ: DWG ถ้าเปิดมาจาก DWG หรือ DXF ถ้าเปิดมาจาก DXF แบบใหม่จะใช้รูปแบบที่เลือกล่าสุดในบันทึกเป็น ในเบราว์เซอร์นี้ มิฉะนั้นเป็น DWG

{{cmd:SAVEAS}} (และ {{key:Mod+Shift+S}}) เปิดกล่องโต้ตอบ {{ui:Save a copy as}}: เลือก {{ui:DWG}} (และ {{ui:Version}}) {{ui:DXF R12}} หรือ {{ui:DXF 2000}} แล้ว {{ui:Save}} ตัวเลือกจะคงอยู่สำหรับแบบนี้และแบบใหม่ในเบราว์เซอร์นี้

{{cmd:DXFOUT}} ดาวน์โหลดสำเนา DXF R12 เสมอ โดยไม่เปลี่ยนรูปแบบที่ {{cmd:SAVE}} ใช้

ดู [ไฟล์: เปิดอะไรได้ บันทึกอะไรได้](topic:files#saving)

### TOUR

นามแฝง: `TUTORIAL` เริ่มทัวร์หกขั้นตอนของแบบแรกอีกครั้ง ดู [เริ่มต้นใช้งาน](topic:getting-started#prefer-to-be-guided)

### TOOLBARDOCK

นามแฝง: `TBDOCK` `Toolbar position [Top/Bottom/Left/Right]` ดู [การตั้งค่า](topic:settings#toolbar-position)

### COMMANDLINE

นามแฝง: `CMDLINE` `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: ติดหรือลอยบรรทัดคำสั่ง ทำให้เป็นบรรทัดเดียว ถามจำนวนบรรทัดประวัติที่จะแสดง (0 ถึง 12) หรือเปิดประวัติ ดู [การตั้งค่า](topic:settings#command-line)

### TOPAREA

`Top area [Standard/Compact]`: แถบเหนือแบบตามที่เคยเป็น หรือแบบกระชับ ดู [การตั้งค่า](topic:settings#top-area)

### POLARANG

`Enter polar angle step in degrees <90>`: ขั้นมุมที่การติดตาม {{ui:Polar}} จะเรียงตาม (มากกว่า 0 ถึงไม่เกิน 180) จำไว้ในเบราว์เซอร์นี้

### UNITS

นามแฝง: `UN` วิธีเขียนและพิมพ์ความยาว

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural และ Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)` ที่เหลือ: `Enter number of decimal places (0 to 8)`

ไดเมนชันใหม่จะทำตาม หนึ่งขั้นตอนของการเลิกทำ เหมือน {{ui:Length format}} และ {{ui:Precision}} ใน {{ui:Current settings}} ดู [ฟุตและนิ้ว](topic:units-papers-scales#feet-and-inches-and-fractions)

### GDSIN

นามแฝง: `GDS` ดูผังวงจร IC (ไฟล์สตรีม GDSII): เป็นเครื่องมือทดลองในห้องปฏิบัติการ สำหรับดูและวัดเท่านั้น

- ตัวเลือกไฟล์รับไฟล์ `.gds` เมื่อมี cell ระดับบนหลายตัว `Enter the top cell to draw`
- ทุกเลเยอร์และ datatype จะกลายเป็นเลเยอร์ของแบบ (`GDS 1`, `GDS 2/5`) การอ้างอิงและอาร์เรย์จะถูกวางแบบแบน ในหน่วยผู้ใช้ของไฟล์ (มักเป็นไมโครเมตร) หนึ่งขั้นตอนของการเลิกทำ ไม่มีการจำลองหรือตรวจสอบอะไร และจะไม่เขียนไฟล์กลับ

### DIAGRAM

นามแฝง: `TEXTDIAGRAM`, `T2D` แผนภาพจากข้อความ

- กล่องรับข้อความ (หรือหนึ่งบรรทัดโดยมี `;` คั่นระหว่างคำสั่งที่บรรทัดคำสั่ง): ผังงาน Mermaid แผนภาพส่วนประกอบ PlantUML D2 หรือรายการจากไปยัง
- `Specify the top left corner of the diagram` แล้ว `Specify the text height`

บล็อกและตัวเชื่อมเป็นวัตถุปกติบนเลเยอร์ `Diagram` ซึ่งจะถูกเลือกเมื่อจบ หนึ่งขั้นตอนของการเลิกทำ ดู [วาดแผนภาพจากข้อความ](topic:text-to-diagram)

### OLELIST

นามแฝง: `OLES` วัตถุ OLE ที่ DWG มี ซึ่ง CadCraft วางเองไม่ได้

- แสดงแต่ละชิ้น: หมายเลข ชนิด ขนาด และว่าได้เก็บรูปภาพไว้หรือไม่
- `Enter an option [Place/eXit] <eXit>`: Place ขอหมายเลข มุมซ้ายล่าง และความกว้าง แล้ววาดกรอบพร้อมรูปภาพ หนึ่งขั้นตอนของการเลิกทำ วัตถุที่เก็บไว้จะไม่เปลี่ยน ดู [รูปภาพ](topic:pictures#objects-from-other-programs-ole)

### SHXFONTS

นามแฝง: `SHX` ฟอนต์ SHX ของคุณเอง

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} อ่านไฟล์ `.shx` ทุกไฟล์ในโฟลเดอร์ (CadCraft Studio อ่านใหม่ทุกครั้งที่เริ่ม) {{ui:Files}} รับไฟล์ที่เลือก (เบราว์เซอร์) {{ui:Reverse}} จัดตัวอักษรของฟอนต์หนึ่งให้อยู่ตัวสุดท้ายก่อน สไตล์ข้อความที่ระบุฟอนต์ที่โหลดไว้จะวาดด้วยฟอนต์นั้น ดู [วาดข้อความด้วยฟอนต์ SHX ของคุณเอง](topic:shx-fonts)

### LIMITS

แบบนี้ตั้งใจให้มีขนาดเท่าไร

- `Specify lower left corner or [ON/OFF] <current>`: จุด `ON` หรือ `OFF`
- `Specify upper right corner <current>`

กริดจะเต็มขอบเขต {{cmd:ZOOM}} All จะแสดงขอบเขต และเมื่อเปิด ON จุดที่อยู่นอกขอบเขตจะถูกปฏิเสธ (`**Outside limits`) หนึ่งขั้นตอนของการเลิกทำ บันทึกใน DWG และ DXF ดู [กำหนดขอบเขตของแบบ](topic:drawing-limits)

### AUNITS

นามแฝง: `ANGUNITS` วิธีแสดงและพิมพ์มุม

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)` หรือสำหรับอีกสองแบบ `Enter precision` (0 องศา 2 ลิปดา 4 ฟิลิปดา 5 ถึง 8 ทศนิยมของวินาที)

หนึ่งขั้นตอนของการเลิกทำ บันทึกใน DWG และ DXF เหมือน {{ui:Angle format}} ใน {{ui:Current settings}} ดู [พิมพ์และแสดงทิศทางและมุม](topic:bearings-and-angles)

### APPLOAD

นามแฝง: `AP` หรือ {{ui:View}} › {{ui:More}} › {{ui:Load application…}} กล่องโต้ตอบ {{ui:Load applications}}: โหลดรูทีน `.lsp` และไฟล์ไดอะล็อก `.dcl` ยกเลิกการโหลด โหลดใหม่จากประวัติ และชุดเริ่มต้น คำสั่ง `(defun c:NAME …)` ของรูทีนจะทำงานเหมือนคำสั่งอื่น ดู [โหลดแอปพลิเคชัน](topic:load-applications) และ [รันรูทีน LISP](topic:run-lisp)

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (หรือ {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) เปิดไฟล์นามแฝงของคุณ (บรรทัด `ALIAS, *COMMAND`) {{ui:Save}} จะนำไปใช้ {{cmd:REINIT}} นำไปใช้อีกครั้ง ดู [แก้ไขนามแฝงคำสั่ง](topic:command-aliases)

### LISPEDIT

นามแฝง: `VLIDE` หรือ {{ui:View}} › {{ui:More}} › {{ui:LISP editor}} เปิดตัวแก้ไข LISP เป็นหน้าต่างที่เปิดค้างไว้ข้างแบบ

- ข้อความ: หมายเลขบรรทัด คู่ของวงเล็บที่เคอร์เซอร์อยู่จะถูกทำเครื่องหมาย (สีแดงเมื่อไม่มีคู่) {{key:Enter}} เยื้องบรรทัดใหม่ไปใต้วงเล็บที่เปิดอยู่ {{key:Tab}} พิมพ์ช่องว่างสองช่อง {{key:Esc}} ออกจากข้อความ
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): อ่านทุกฟอร์ม เหมือนที่ {{cmd:APPLOAD}} ทำกับไฟล์ และสร้างคำสั่ง `c:` ของมัน ไฟล์จะปรากฏในรายการของ {{cmd:APPLOAD}}
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): ประเมินฟอร์มที่เลือก หรือฟอร์มที่เคอร์เซอร์อยู่
- {{ui:Stop}}: จบรูทีนที่กำลังทำงาน
- {{ui:Console}}: สิ่งที่รูทีนพิมพ์ และข้อผิดพลาดแต่ละอันพร้อมบรรทัด คลิกข้อผิดพลาดเพื่อไปที่นั่น ข้อความจะรันทีละฟอร์มระดับบนสุด บรรทัดจึงเป็นของฟอร์มนั้น หรือถ้าอยู่ข้างในก็เป็นบรรทัดที่เรียกฟังก์ชันที่ข้อผิดพลาดระบุ
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): ไฟล์ `.lsp` ข้อความยังถูกเก็บในเบราว์เซอร์นี้ ดังนั้นการปิดหน้าต่างจะไม่ทำให้สูญหาย
- ข้างข้อความ: ฟังก์ชันที่รูทีนกำหนด ฟังก์ชันที่มันเรียกแต่ LISP นี้ยังไม่มี ฟังก์ชันที่มันเรียกโดยไม่ได้กำหนดในนั้นและไม่ได้มาในตัว และรายการเต็มของสิ่งที่มีและสิ่งที่ไม่มี

ข้อความที่มีวงเล็บที่ไม่ได้ปิด หรือสตริงที่ไม่จบ จะไม่ถูกรัน และจะระบุชื่อบรรทัด ไม่มีดีบักเกอร์แบบทีละขั้น จุดพัก หรือหน้าต่างเฝ้าดู ดู [รันรูทีน LISP](topic:run-lisp)

### HELP

นามแฝง: `?` พิมพ์ทุกคำสั่ง นามแฝงของมัน และคำอธิบายหนึ่งบรรทัดในประวัติบรรทัดคำสั่ง ไม่ได้เปิดวิธีใช้นี้ ให้กด {{key:F1}} หรือคลิก {{ui:Help}} สำหรับสิ่งนั้น

## พรอมต์การเลือกวัตถุ

ที่พรอมต์ `Select objects` ใด ๆ: คลิกวัตถุ ลากกรอบ (จากซ้ายไปขวา) และกรอบข้าม (จากขวาไปซ้าย) ด้วยสองคลิก หรือกดแล้วลากลาสโซ ({{key:Space}} ขณะลาก: กรอบ กรอบข้าม รั้ว) {{key:Shift}}+คลิกเพื่อเอาออก และกด {{key:Enter}} เพื่อจบ คุณยังพิมพ์ `ALL` (ทุกอย่าง) `L` (วัตถุสุดท้าย) `P` (Previous: สิ่งที่คำสั่งล่าสุดใช้) `F` (Fence: วัตถุที่เส้นของจุดตัดผ่าน `U` ย้อนจุด) `W` (Window) `C` (Crossing) `R` (โหมดเอาออก: การเลือกจะนำวัตถุออก พรอมต์จะเป็น `Remove objects`) และ `A` (Add again) ได้ `?` แสดงรายการเหล่านี้ ซึ่งไม่ได้แสดงในพรอมต์ {{key:Tab}} บนวัตถุที่ซ้อนทับกันจะไฮไลต์อันถัดไป คลิกเพื่อเลือก ดู [เลือกวัตถุ](topic:select-objects)

### ACCESS

นามแฝง: `AX` ร่างโดยไม่ต้องมองเห็น {{cmd:ACCESS}} เปิดหรือปิด Access (`On`, `Off`) และสลับเสียงการยึดติด (`Sound`) และคำสั่งด้วยเสียง (`Voice`) มันบอกสถานะก่อน เมื่อเปิด Access ทุกคำสั่งและผลลัพธ์จะถูกอ่านออกเสียงผ่านโปรแกรมอ่านหน้าจอ และพื้นที่แบบจะมีเคอร์เซอร์แป้นพิมพ์ หัวข้อวิธีใช้ "Draft without sight" มีปุ่มกด

### DESCRIBE

นามแฝง: `DESC` บอกว่าแบบมีอะไร: มีวัตถุกี่ชิ้น เป็นชนิดใด ใหญ่แค่ไหน มีเลเยอร์กี่อัน และอะไรถูกเลือกอยู่ อ่านอย่างเดียว ไม่เปลี่ยนแปลงอะไร

### WHEREAMI

นามแฝง: `WHERE` บอกว่าเคอร์เซอร์อยู่ที่ไหน ในหน่วยของแบบ

### NEARBY

บอกว่ามีอะไรอยู่ใกล้เคอร์เซอร์ เรียงจากใกล้ที่สุด แต่ละรายการพร้อมระยะและด้านที่มันอยู่

### SAYSEL

บอกสิ่งที่ถูกเลือก หนึ่งประโยคต่อวัตถุหนึ่งชิ้น (ความยาวเส้น ปลายและมุม รัศมีและจุดศูนย์กลางของวงกลม ข้อความตามที่เขียน)

### VOICE

เปิดหรือปิดคำสั่งด้วยเสียง คำสั่งเหล่านี้ถูกจดจำบนคอมพิวเตอร์เครื่องนี้ ในกรณีที่เบราว์เซอร์ทำไม่ได้ เสียงจะปิดอยู่ เว้นแต่คุณจะเลือกบริการออนไลน์ของเบราว์เซอร์ในการตั้งค่า

### TOUCHCROSSHAIR

นามแฝง: `TCX` เส้นเล็งที่เลื่อนออกจากตำแหน่ง เพื่อร่างด้วยนิ้ว เพื่อไม่ให้ปลายนิ้วบังจุดที่คุณเลือก เมื่อเปิดอยู่ นิ้วเดียวบนแบบจะไม่เลือก แต่จะเลื่อนเส้นเล็งที่อยู่เหนือนิ้วและไปด้านหนึ่ง การยึดวัตถุและการติดตามจะตามเส้นเล็ง การยกนิ้วจะไม่เลือกอะไรและเส้นเล็งจะอยู่ที่เดิม หากต้องการเลือก กดปุ่ม {{ui:Click}} ที่มุมของแบบ หรือแตะที่ใดก็ได้บนแบบด้วยนิ้วที่สอง กดค้าง {{ui:Click}} ขณะเลื่อนนิ้วอีกข้างเพื่อลาก (กรอบเลือก ลาสโซ จุดจับ) นิ้วที่กดค้างโดยไม่ขยับ หรือปุ่ม {{ui:Enter}} คือ Enter สองนิ้วแพนและซูมเหมือนเดิม ใกล้ขอบด้านล่างและขอบด้านไกล เส้นเล็งจะเข้ามาใกล้นิ้ว เพื่อให้ทุกส่วนของแบบเข้าถึงได้ ปากกาและเมาส์จะเลือกโดยตรงเสมอ

{{cmd:TOUCHCROSSHAIR}} บอกสถานะและถาม `ON`, `OFF`, `Auto` (เปิดเฉพาะเมื่อนิ้วเป็นตัวชี้เดียว จึงปิดบนคอมพิวเตอร์ที่มีเมาส์), `Distance` (เส้นเล็งอยู่ห่างจากนิ้วแค่ไหน 24 ถึง 240 พิกเซล) หรือ `Side` (`Left`: ขึ้นและไปซ้าย สำหรับมือขวา `Right` สำหรับมือซ้าย ปุ่มจะย้ายไปอีกมุม) ตัวเลือกเดียวกันอยู่ใน การตั้งค่า › CadCraft และบนอุปกรณ์ที่มีจอสัมผัส แถบสถานะจะมีสวิตช์ {{ui:Offset crosshair}} ตัวเลือกจะถูกเก็บไว้ในเบราว์เซอร์นี้

### WHOHAS

บอกว่าใครกำลังเปิดแบบอยู่ ใน CadCraft Studio บนคอมพิวเตอร์ การเปิด DWG หรือ DXF จะเขียนไฟล์ล็อกเล็ก ๆ ข้างไฟล์ (`Plan.dwg.cclock`: ใคร ตั้งแต่เมื่อไร เวอร์ชันใด) รีเฟรชทุกนาทีขณะที่แบบเปิดอยู่ และลบเมื่อปิดแบบ การเปิดแบบที่คนอื่นเปิดอยู่จะบอกว่าใครและตั้งแต่เมื่อไร และเสนอ {{ui:Open read-only}} (การบันทึกจะขอชื่อใหม่) {{ui:Open anyway}} (อีกฝ่ายจะได้รับแจ้งในการรีเฟรชครั้งถัดไป) หรือ {{ui:Cancel}} การบันทึกทับไฟล์ที่คนอื่นเปิดอยู่จะถามก่อน ล็อกที่ไม่ได้รีเฟรชมาห้านาทีจะถือว่าเก่า คือสำเนาอีกชุดปิดโดยไม่ได้บันทึก หรือคอมพิวเตอร์อยู่ในโหมดพัก

{{cmd:WHOHAS}} ถาม `Current` (แบบที่เปิดอยู่) `File` (เลือกหนึ่งไฟล์) `FOlder` (เลือกโฟลเดอร์: แสดงทุกแบบในนั้นที่เปิดอยู่ที่ใดที่หนึ่ง) `Path` (พิมพ์พาธเต็ม) หรือ `Name` (ชื่อที่คนอื่นเห็น ซึ่งเป็นชื่อบัญชีของคุณเมื่อคุณลงชื่อเข้าใช้) Studio เข้าถึงได้เฉพาะโฟลเดอร์ที่คุณเลือก สำหรับแบบที่เปิดจากโฟลเดอร์ที่ไม่เคยเลือก มันจะบอกครั้งเดียวว่าไม่สามารถบันทึกว่าแบบนั้นเปิดอยู่ `FOlder` เลือกโฟลเดอร์ และการล็อกจะทำงานที่นั่นตั้งแต่นั้น การล็อกเป็นหมายเหตุสำหรับคน ไม่ใช่สิ่งกั้น โปรแกรมอื่นยังเขียนไฟล์ได้ ในเบราว์เซอร์ไม่มีโฟลเดอร์ให้ค้นหา และคำสั่งจะบอกเช่นนั้น

### OVERKILL

ลบวัตถุที่ซ้ำกันและจัดเส้นและส่วนโค้งที่ทับกันให้เรียบร้อย สำหรับแบบที่มาพร้อมเส้นที่ซ้ำกัน `Select objects to clean up` {{key:Enter}} แล้ว {{key:Enter}} อีกครั้งเพื่อทำความสะอาดด้วยการตั้งค่าที่แสดง หรือเปลี่ยนค่าหนึ่งก่อน:

- `Tolerance`: สองพิกัดต้องใกล้กันแค่ไหนจึงนับว่าเหมือนกัน (เริ่มที่ 0.000001 ค่า 0 หมายถึงเหมือนกันทุกประการ)
- `Ignore`: คุณสมบัติที่สองวัตถุอาจต่างกันได้แม้เหมือนกันในส่วนอื่น พิมพ์ชื่อเพื่อสลับ: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency` หรือ `None` / `All` {{key:Enter}} เมื่อเสร็จ
- `Overlap`: เปิดหรือปิด เมื่อเปิด เส้นที่ทับกันบนเส้นตรงเดียวกันจะกลายเป็นเส้นเดียว (เส้นที่อยู่ข้างในเส้นอื่นจะถูกลบไปเลย) และส่วนโค้งบนวงกลมเดียวกันที่ทับกันจะกลายเป็นส่วนโค้งเดียว ส่วนโค้งที่ปิดเป็นรอบเต็มจะกลายเป็นวงกลม และส่วนโค้งที่วางบนวงกลมจะถูกลบ
- `Ends`: เปิดหรือปิด เมื่อเปิด เส้นบนเส้นตรงเดียวกันและส่วนโค้งบนวงกลมเดียวกันที่แตะกันเฉพาะปลายถึงปลาย จะกลายเป็นชิ้นเดียว

วัตถุทุกชนิดจะถูกตรวจว่าซ้ำหรือไม่: สองวัตถุจะซ้ำกันเมื่อเรขาคณิตของมันเหมือนกันภายในค่าความคลาดเคลื่อน และเลเยอร์ สี ชนิดเส้น มาตราส่วนชนิดเส้น ความหนาเส้น ความหนา ความโปร่งใส และความสูงตรงกัน (หักคุณสมบัติที่คุณเลือกให้ละเว้น) เส้นและโพลีไลน์แบบเปิดจะตรงกันด้วยเมื่อวาดจากอีกทิศทาง วัตถุแรกในลำดับการวาดจะคงอยู่และเก็บคุณสมบัติของตัวเอง คำสั่งจะรายงานว่าตรวจกี่ชิ้นและลบกี่ชิ้น: ชิ้นที่ซ้ำ ชิ้นที่ทับกันที่รวมกันแล้ว ชิ้นที่ต่อปลายถึงปลาย หนึ่ง {{cmd:UNDO}} จะย้อนทั้งหมด การตั้งค่าจะคงอยู่จนกว่าคุณจะปิดหน้าต่างแบบ

มันจะไม่แตะ: วัตถุบนเลเยอร์ที่ล็อกและวัตถุที่ซ่อนอยู่ มันจะไม่รวมเส้นที่มีความสูง (Z) (สำเนาที่ซ้ำกันเป๊ะของมันยังถูกลบ) และไม่แตะส่วนภายในของโพลีไลน์ (จะไม่ถูกทำให้บางลง) เส้นที่วางบนส่วนของโพลีไลน์ และโพลีไลน์ปิดที่วาดจากอีกทิศทาง

### DRAWORDER

เปลี่ยนว่าวัตถุใดถูกวาดอยู่ด้านหน้า `Select objects to re-order` {{key:Enter}} แล้ว `Above objects`, `Under objects`, `Front` หรือ `Back` ({{key:Enter}} = `Back`) `Above objects` และ `Under objects` ขอวัตถุอ้างอิง: ที่เลือกจะไปอยู่หน้าสุดของวัตถุที่อยู่หน้าสุดในนั้น หรือหลังสุดของวัตถุที่อยู่หลังสุด วัตถุที่เลือกจะคงลำดับของตัวเองระหว่างกัน หนึ่งขั้นตอนของการเลิกทำ ลำดับถูกบันทึกกับแบบใน DWG และ DXF ซึ่งเป็นลำดับที่วัตถุถูกเขียนลงไป

บนหน้าจอ CadCraft วาดพื้นที่เติม (แฮตช์ทึบ โพลีไลน์กว้าง มาสก์) ก่อน แล้วเส้น แล้วข้อความ ดังนั้นข้อความจะอ่านได้เหนือการเติมเสมอ ลำดับการวาดจะแสดงระหว่างวัตถุที่เติมและระหว่างรูปภาพ โปรแกรมอื่นที่เปิดไฟล์จะวาดทุกวัตถุตามลำดับที่บันทึกไว้

### TEXTTOFRONT

นำข้อความ ไดเมนชัน และเส้นชี้มาอยู่หน้าสุดของทุกอย่างในพื้นที่เปิด: `Text`, `Dimensions`, `Leaders` หรือ `All` ({{key:Enter}} = `All`) หนึ่งขั้นตอนของการเลิกทำ จะแจ้งเมื่อไม่มีอะไรให้ทำ หรืออยู่หน้าสุดแล้ว

### HATCHTOBACK

ส่งแฮตช์ทุกอันของพื้นที่เปิดไปอยู่หลังทุกอย่างอื่น เพื่อไม่ให้การเติมบังเส้นและข้อความในไฟล์ที่บันทึก ไม่มีพรอมต์ หนึ่งขั้นตอนของการเลิกทำ

### ISOLATEOBJECTS

นามแฝง: `ISOLATE` แสดงเฉพาะวัตถุที่เลือก ทุกอย่างอื่นในพื้นที่เปิดจะหายจากสายตาจนกว่าจะถึง {{cmd:UNISOLATEOBJECTS}} ต่างจาก {{cmd:LAYISO}} มันทำงานกับวัตถุที่คุณเลือก ไม่ว่าเลเยอร์จะเป็นอะไร และไม่เปลี่ยนเลเยอร์ใด วัตถุที่ซ่อนจะไม่ถูกวาด เลือก ยึด ซูมไปหา หรือพล็อต และคำสั่งที่รับ `ALL` จะข้ามมันไป สิ่งที่คุณวาดขณะที่วัตถุถูกแยกไว้จะแสดงตามปกติ

นี่ใช้เฉพาะในเซสชันนี้: ไม่มีอะไรเกี่ยวกับมันที่ถูกบันทึกกับแบบ ไม่ใช่ขั้นตอนของการเลิกทำ และเมื่อเปิดแบบอีกครั้งจะเห็นทุกอย่าง ขณะที่มีวัตถุถูกซ่อน แถบสถานะจะแสดงปุ่มที่มีจำนวนของมัน คลิกเพื่อแสดงอีกครั้ง

### HIDEOBJECTS

ซ่อนวัตถุที่เลือกจนกว่าจะถึง {{cmd:UNISOLATEOBJECTS}} กฎเดียวกับ {{cmd:ISOLATEOBJECTS}}: ใช้เฉพาะในเซสชัน ไม่ถูกบันทึก และไม่ใช่ขั้นตอนของการเลิกทำ

### UNISOLATEOBJECTS

นามแฝง: `UNISOLATE`, `UNHIDE` แสดงวัตถุทุกชิ้นที่ถูกซ่อนโดย {{cmd:ISOLATEOBJECTS}} หรือ {{cmd:HIDEOBJECTS}} อีกครั้ง และบอกว่ากลับมากี่ชิ้น

### LAYLOCKFADE

กำหนดว่าวัตถุบนเลเยอร์ที่ล็อกจะดูเป็นอย่างไร และการคลิกจะเข้าถึงมันได้หรือไม่ มันบอกสถานะปัจจุบัน แล้วรับ:

- ตัวเลข 0 ถึง 90: ปริมาณการจางเป็นเปอร์เซ็นต์ (เริ่มที่ 50) 0 ปิดการจาง
- `ON` หรือ `OFF`: เปิดหรือปิดการจาง โดยคงปริมาณไว้
- `Pick` แล้ว `Yes` หรือ `No`: การคลิกจะเลือกวัตถุบนเลเยอร์ที่ล็อกได้หรือไม่เมื่อไม่มีคำสั่งทำงานอยู่ `No` (ค่าเริ่มต้น): เลือกไม่ได้เลย `Yes`: การคลิกหรือกรอบจะเลือกเพื่อให้ {{ui:Properties}} แสดงได้ แต่ยังเปลี่ยนแปลงไม่ได้ และ `Select objects` ของคำสั่งจะไม่รับมันเลย

การยึดวัตถุจะพบวัตถุบนเลเยอร์ที่ล็อกไม่ว่าจะเป็นแบบใด การพล็อตจะไม่จางเลย การตั้งค่าทั้งสองเป็นของคุณ ไม่ใช่ของแบบ และอยู่ใน {{ui:Settings}} ภายใต้ {{ui:Locked layers}} ด้วย

### BURST

แยกการอ้างอิงบล็อกและเก็บสิ่งที่แอตทริบิวต์บอกไว้ `Select block references to burst`, {{key:Enter}}: การอ้างอิงแต่ละอันจะถูกแทนที่ด้วยวัตถุของบล็อก และค่าของแอตทริบิวต์ที่มองเห็นแต่ละอันจะกลายเป็นข้อความธรรมดาบนเลเยอร์ของแอตทริบิวต์นั้นเอง (แอตทริบิวต์บนเลเยอร์ 0 จะไปอยู่บนเลเยอร์ของการอ้างอิง เหมือนวัตถุอื่นของบล็อกที่อยู่บนเลเยอร์ 0) แอตทริบิวต์ที่มองไม่เห็นจะถูกทิ้ง บล็อกที่อยู่ข้างในบล็อกจะยังเป็นการอ้างอิงบล็อก หนึ่งขั้นตอนของการเลิกทำ มันจะรายงานการอ้างอิงที่แยกแล้วและค่าแอตทริบิวต์ที่กลายเป็นข้อความ

มันปฏิเสธการอ้างอิงแบบเชื่อมโยงตามชื่อ (ผูกก่อนหรือคัดลอกจากมันด้วย {{cmd:NCOPY}}) และปล่อยวัตถุที่เลือกอื่นไว้ตามเดิม สำหรับการอ้างอิงบล็อก {{cmd:EXPLODE}} ให้วัตถุเดียวกัน {{cmd:BURST}} รับเฉพาะการอ้างอิงบล็อกและนับข้อความของแอตทริบิวต์

### TXT2MTXT

นามแฝง: `T2M` รวมข้อความบรรทัดเดียวให้เป็นข้อความย่อหน้าเดียว `Select single-line text to join`, {{key:Enter}}, แล้ว `Paragraph` (บรรทัดจะต่อกันและตัดตามความกว้างของบรรทัดที่กว้างที่สุด) หรือ `Lines` (ข้อความแต่ละอันยังเป็นบรรทัดของตัวเอง) {{key:Enter}} เลือกอันที่ใช้ล่าสุด บรรทัดจะถูกเรียงจากบนลงล่าง แล้วจากซ้ายไปขวา ตามทิศทางของข้อความบนสุด ย่อหน้าจะห้อยจากมุมซ้ายบนของข้อความบนสุด และรับความสูง การหมุน สไตล์ เลเยอร์ และสีของมัน หนึ่งขั้นตอนของการเลิกทำ

ข้อความที่เป็นข้อความย่อหน้าอยู่แล้ว ข้อความว่าง และวัตถุอื่นในที่เลือกจะไม่ถูกแตะ และคำสั่งจะบอกจำนวนของมัน

### NCOPY

คัดลอกวัตถุออกจากการอ้างอิงบล็อกหรือแบบที่เชื่อมโยงเข้าไปในแบบ โดยไม่ระเบิดอะไร `Pick an object inside a block reference or a linked drawing`: วัตถุที่ใกล้จุดที่เลือกที่สุดจะถูกคัดลอกไปยังตำแหน่งที่มันแสดง ไม่ว่าจะซ้อนอยู่ลึกแค่ไหน เลือกเพิ่มแล้วกด {{key:Enter}} `Base point to move the copies` ถัดไป: {{key:Enter}} จะคงสำเนาไว้ที่เดิม หรือให้จุดฐานและจุดที่สอง ทั้งคำสั่งเป็นหนึ่งขั้นตอนของการเลิกทำ

สำเนาจะได้เลเยอร์ที่มันแสดงอยู่: วัตถุบนเลเยอร์ 0 ภายในบล็อกจะไปอยู่บนเลเยอร์ของการอ้างอิงที่มันอยู่ และสี ByBlock จะกลายเป็นสีของการอ้างอิงนั้น จากแบบที่เชื่อมโยง เลเยอร์ `Plan|Walls` จะกลายเป็น `Plan$0$Walls` (ชื่อที่การเชื่อมโยงให้) และสร้างด้วยสี ชนิดเส้น และความหนาเส้นของเลเยอร์ที่เชื่อมโยง ค่าของแอตทริบิวต์จะถูกคัดลอกเป็นข้อความ การอ้างอิงบล็อกบนเลเยอร์ที่ล็อกจะถูกเลือกไม่ได้

### FLATTEN

ตั้งความสูง (Z) และความหนาของวัตถุที่เลือกให้เป็น 0 `Select objects to flatten`, {{key:Enter}} มันยังทำให้วัตถุภายในนิยามบล็อกที่ที่เลือกใช้แบนด้วย (และบล็อกที่อยู่ข้างในนั้น) เพื่อให้การอ้างอิงทุกตัวของบล็อกเหล่านั้นเปลี่ยน แบบที่เชื่อมโยงจะไม่ถูกแตะ หนึ่งขั้นตอนของการเลิกทำ มันรายงานจำนวนวัตถุที่เปลี่ยน และบอกเมื่อไม่มีชิ้นใดมีความสูงหรือความหนา

สิ่งที่ CadCraft เก็บของมิติที่สามในแบบ 2D คือ ความสูงของวงกลม ส่วนโค้ง วงรี จุด ข้อความ การอ้างอิงบล็อก แฮตช์ เส้นชี้ และโพลีไลน์ (ระดับของมัน) ความสูงที่ปลายแต่ละข้างของเส้น และความหนาของเส้น วงกลม ส่วนโค้ง โพลีไลน์ จุด และข้อความ ตามที่ไฟล์มี {{cmd:FLATTEN}} ล้างเฉพาะสิ่งเหล่านั้น มันไม่แตะโมเดล 3D บนแท็บ 3D, ใบหน้า 3D หรือโซลิด และวัตถุที่วาดบนระนาบเอียงนั้นถูกนำเข้าสู่ระนาบของแบบแล้วตั้งแต่เปิดไฟล์

### BREAKLINE

วาดเส้นที่มีสัญลักษณ์การขาดสำหรับมุมมองที่ถูกตัดให้สั้น มันบอกขนาดและส่วนขยายปัจจุบัน แล้ว `First point of the break line` (หรือ `Size` / `Extension` เพื่อเปลี่ยนก่อน) `Second point`, และ `Where the break symbol sits`: คลิกตามเส้น หรือ {{key:Enter}} สำหรับตรงกลาง ผลลัพธ์คือโพลีไลน์หนึ่งเส้นบนเลเยอร์ปัจจุบัน: เส้นนั้น ยื่นเลยแต่ละจุดออกไปตามส่วนขยาย พร้อมเส้นรูปตัว Z ที่สูงเท่าขนาดและยาวครึ่งหนึ่ง

`Size` และ `Extension` ถูกจำไว้เป็นการตั้งค่าของคุณ (ขนาดเริ่มที่สองเท่าของความสูงข้อความของไดเมนชันคูณกับมาตราส่วนของไดเมนชัน ส่วนขยายเริ่มที่ครึ่งหนึ่งของขนาด) {{key:Enter}} ทำซ้ำคำสั่ง

### AUDIT

ตรวจแบบที่เปิดอยู่ว่ามีความเสียหายหรือไม่ และซ่อมแซม {{cmd:AUDIT}} ดูทุกวัตถุในโมเดล บนแผ่น และภายในบล็อก และตารางเลเยอร์ แล้วแสดงสิ่งที่พบตามชนิด:

- ตัวเลขที่ไม่จำกัดหรือใหญ่เกินจริง
- วัตถุที่ไม่มีขนาด: เส้นที่ไม่มีความยาว วงกลมที่ไม่มีรัศมี โพลีไลน์ที่มีจุดเดียว ข้อความที่ไม่มีตัวอักษรหรือความสูง การอ้างอิงบล็อกที่มีสเกลศูนย์
- วัตถุบนเลเยอร์ที่แบบไม่มี การอ้างอิงถึงบล็อกที่ไม่มีอยู่ ชื่อสไตล์ข้อความและไดเมนชันและชื่อชนิดเส้นที่ไม่อยู่ในแบบ
- บล็อกที่มีตัวเองอยู่ข้างใน โดยตรงหรือผ่านบล็อกอื่น
- วัตถุที่ใช้ id คีย์ หรือ file handle ร่วมกัน
- ไดเมนชันที่ไม่มีจุดที่ใช้วัด และแฮตช์ที่ขอบเขตไม่ใช่เส้นรอบปิด

จากนั้นจะถาม `Fix them? [Yes/No]` `No` ไม่เปลี่ยนแปลงอะไร `Yes` จะซ่อมทุกอย่างในหนึ่งขั้นตอนของการเลิกทำ: สิ่งที่วาดไม่ได้จะถูกลบ (ตัวเลขที่ไม่ดี ไม่มีขนาด บล็อกที่หาย ไดเมนชันที่เสีย แฮตช์ที่ไม่มีขอบเขตใช้ได้ การอ้างอิงที่ปิดวงของบล็อก) เลเยอร์ที่หายจะถูกสร้าง ชื่อสไตล์และชนิดเส้นที่ไม่รู้จักจะกลับไปเป็นค่าเริ่มต้น คีย์ที่ใช้ร่วมกันจะถูกแทนที่ มันพิมพ์จำนวนวัตถุที่ถูกลบและจำนวนที่ซ่อม สิ่งที่พบเดียวกันจะปรากฏในพาเนล Problems แต่ละอันมี {{ui:Repair}} ของตัวเอง

มันไม่ปฏิเสธอะไร แต่ตรวจเฉพาะสิ่งที่ CadCraft วาดเองเท่านั้น ข้อมูลที่เก็บไว้สำหรับโปรแกรมอื่น (โซลิด 3D ออบเจ็กต์ OLE) จะไม่ถูกเปิด

### RECOVER

เปิด DXF หรือ DWG ที่เสียหาย {{cmd:RECOVER}} ขอไฟล์ อ่านสิ่งที่อ่านได้แทนที่จะปฏิเสธไฟล์ แสดงรายการสิ่งที่ข้ามไปหรือสมมติไว้ แล้วตรวจและซ่อมแบบเหมือนที่ {{cmd:AUDIT}} ทำกับ `Yes`

- DXF: บรรทัดที่ไม่ใช่ส่วนหนึ่งของคู่รหัสและค่าจะถูกข้ามจนกว่าคู่จะเรียงกันอีกครั้ง ส่วนที่ไม่มีจุดจบจะถูกปิด ไฟล์ที่ถูกตัดสั้นจะอ่านจนถึงจุดที่ถูกตัด DXF แบบไบนารีที่ถูกตัดสั้นจะอ่านจนถึงค่าที่สมบูรณ์สุดท้าย เมื่อส่วน บล็อก หรือออบเจ็กต์ยังอ่านไม่ได้ จะถูกทิ้งและระบุชื่อ และการอ่านจะดำเนินต่อไปผ่านมัน
- DWG: วัตถุที่ไม่ผ่านการตรวจหรือถอดรหัสไม่ได้จะถูกทิ้ง และรายการวัตถุที่หายจะถูกสร้างใหม่โดยไล่ผ่านข้อมูลของวัตถุ

ไฟล์บนดิสก์จะไม่เปลี่ยน แบบที่กู้คืนจะเปิดขึ้นโดยยังไม่บันทึก บันทึกด้วยชื่อใหม่ ไฟล์ที่อ่านอะไรไม่ได้เลยจะถูกปฏิเสธพร้อมเหตุผล

### LEGACYTEXT

แปลงข้อความที่พิมพ์ด้วยฟอนต์เวียดนาม 8 บิตรุ่นเก่าเป็น Unicode ชื่อสั้น `TEXTTOUNICODE` และ `VNTEXT`

แบบเวียดนามรุ่นเก่าเก็บข้อความเป็นอักขระตะวันตกที่มีเพียงฟอนต์เท่านั้นที่แปลงเป็นภาษาเวียดนาม: ข้อความ TCVN3 ในฟอนต์ ABC (`.VnTime`, `.VnArial` และฟอนต์ตัวพิมพ์ใหญ่ที่ชื่อลงท้ายด้วย `H`) และข้อความ VNI ในฟอนต์ VNI (`VNI-Times`) CadCraft แสดงข้อความเช่นนั้นตามที่มันอ่านได้ทันทีที่เปิดแบบ โดยดูจากฟอนต์ของสไตล์ข้อความ ของวัตถุ หรือของช่วงในข้อความย่อหน้า แต่ไฟล์ยังเก็บอักขระเก่าไว้

{{cmd:LEGACYTEXT}} บอกว่าพบข้อความกี่ข้อความในแต่ละการเข้ารหัส และถาม `Convert … to Unicode?` `Yes` เขียนทับทุกข้อความ (โมเดล แผ่น บล็อก ค่าและนิยามแอตทริบิวต์) และให้สไตล์ข้อความใช้ฟอนต์ Unicode (Times New Roman, Arial หรือ Courier New ตามชนิดของฟอนต์เก่า) ในหนึ่งขั้นตอนของการเลิกทำ การจัดรูปแบบภายในข้อความย่อหน้ายังคงไว้

เมื่อไม่มีข้อความใดใช้ฟอนต์ที่รู้จัก (สไตล์ที่ทำชื่อฟอนต์หาย) จะถาม `Read selected texts as [Tcvn3/Vni/None]`: เลือกการเข้ารหัสและเลือกข้อความ ข้อความที่เป็น Unicode อยู่แล้วจะไม่ถูกแตะ การแทนที่ข้อความของไดเมนชันและข้อความของมัลติลีดเดอร์จะไม่ถูกแปลง
