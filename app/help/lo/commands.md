---
title: ເອກະສານອ້າງອີງຄຳສັ່ງ
summary: ທຸກຄຳສັ່ງໃນແອັບແຕ້ມ CadCraft ພ້ອມນາມແຝງ, ຄຳຖາມທີ່ມັນຖາມ, ຕົວເລືອກ ແລະ ຄ່າເລີ່ມຕົ້ນ.
keywords: ຄຳສັ່ງ, ນາມແຝງ, ລາຍການຄຳສັ່ງ, ເນື້ອທີ່, ເສັ້ນຮອບ, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

ພິມຊື່ຄຳສັ່ງ ຫຼື ນາມແຝງ ແລ້ວກົດ {{key:Enter}} ຫຼື {{key:Space}}. ຕົວພິມໃຫຍ່ ຫຼື ນ້ອຍບໍ່ສຳຄັນ, ແລະ `_`, `-`, `.` ຫຼື `'` ທີ່ຢູ່ໜ້າສຸດຈະຖືກຂ້າມໄປ. ພິມ `HELP` (ຫຼື `?`) ເພື່ອພິມລາຍການສັ້ນຂອງທຸກຄຳສັ່ງໃນປະຫວັດແຖວຄຳສັ່ງ; ກົດ {{key:F1}} ເພື່ອເປີດເອກະສານນີ້.

ວິທີອ່ານພຣອມປ໌: ຕົວເລືອກຢູ່ໃນວົງເລັບກ້ອນ, ແລະ ທ່ານເລືອກໜຶ່ງໂດຍພິມຕົວພິມໃຫຍ່ຂອງມັນ (`D` ສຳລັບ Diameter). ຄ່າເລີ່ມຕົ້ນຢູ່ໃນວົງເລັບມົນ; ກົດ {{key:Enter}} ເພື່ອຮັບເອົາ. ບ່ອນທີ່ຂໍຈຸດ ທ່ານສາມາດກົດ ຫຼື ພິມຮູບແບບໃດກໍໄດ້ຈາກ [ການປ້ອນພິກັດ ແລະ ໄລຍະ](topic:coordinate-entry). ບ່ອນທີ່ຂໍໄລຍະ ທ່ານສາມາດພິມຕົວເລກ ຫຼື ກົດສອງຈຸດ.

ກົດ {{key:Enter}} ບ່ອນທີ່ຕ້ອງການຈຸດ ຫຼື ວັດຖຸ ແລະ ບໍ່ມີຄ່າເລີ່ມຕົ້ນ ຈະເປັນການສິ້ນສຸດຄຳສັ່ງ. {{key:Esc}} ຍົກເລີກມັນ. ສິ່ງທີ່ຄຳສັ່ງເຮັດແມ່ນໜຶ່ງ undo step.

## ແຕ້ມ

### LINE

ນາມແຝງ: `L`. ສ່ວນເສັ້ນຊື່, ແຕ່ລະອັນເປັນວັດຖຸຂອງມັນເອງ.

- `Specify first point` (Enter: ເລີ່ມຈາກຈຸດສຸດທ້າຍທີ່ທ່ານໃຫ້)
- `Specify next point [Undo]`, ຊ້ຳ. ຫຼັງສອງສ່ວນ: `[Undo/Close]`.
- `U` ເອົາສ່ວນສຸດທ້າຍຄືນ, `C` ປິດໄປຫາຈຸດທຳອິດ ແລະ ຈົບ. Enter ຈົບ.

### PLINE

ນາມແຝງ: `PL`. ໂພລີລາຍໜຶ່ງອັນຂອງສ່ວນເສັ້ນ ແລະ ສ່ວນເສັ້ນໂຄ້ງ.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close ເມື່ອມີສອງສ່ວນແລ້ວ)
- `A` ປ່ຽນເປັນເສັ້ນໂຄ້ງ: `Specify endpoint of arc [Line/CLose/Undo]`. ແຕ່ລະເສັ້ນໂຄ້ງຕໍ່ແບບສຳຜັດກັບສ່ວນກ່ອນໜ້າ. `L` ກັບໄປເປັນເສັ້ນ, `CL` ປິດດ້ວຍເສັ້ນໂຄ້ງ.
- Enter ຈົບ; ໂພລີລາຍຍັງເປີດຢູ່.

### CIRCLE

ນາມແຝງ: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` ຖາມ `Specify diameter of circle`.
- `2P`: ສອງປາຍຂອງເສັ້ນຜ່າສູນກາງ. `3P`: ສາມຈຸດເທິງວົງມົນ.
- `T` (ຄຳສັ່ງ `TTR` ກໍໄດ້, ແລະ {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, ຈຸດທີສອງ, ແລ້ວລັດສະໝີ (Enter: ອັນສຸດທ້າຍ). ວົງມົນສຳຜັດທັງສອງວັດຖຸ (ເສັ້ນ, ເສັ້ນໂຄ້ງ, ວົງມົນ, ສ່ວນໂພລີລາຍ, ລວມທັງຢູ່ໃນບລັອກ); ໃນບັນດາວົງມົນທີ່ສຳຜັດ ອັນທີ່ສຳຜັດໃກ້ຈຸດທີ່ທ່ານເລືອກທີ່ສຸດ. "Circle does not exist" ເມື່ອບໍ່ມີອັນໃດເໝາະ.
- `TTT` (ຫຼື {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): ສາມວັດຖຸ; ວົງມົນທີ່ສຳຜັດທັງສາມ, ອັນທີ່ໃກ້ຈຸດທີ່ທ່ານເລືອກທີ່ສຸດ (ສາມເສັ້ນໃຫ້ວົງມົນພາຍໃນ ຫຼື ພາຍນອກ ຂຶ້ນກັບບ່ອນທີ່ທ່ານເລືອກ).

### ARC

ນາມແຝງ: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: ເສັ້ນໂຄ້ງຜ່ານສາມຈຸດ.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. ເສັ້ນໂຄ້ງວິ່ງທວນເຂັມຈາກຈຸດເລີ່ມຫາຈຸດສິ້ນສຸດ.

### RECTANG

ນາມແຝງ: `REC`, `RECTANGLE`. ໂພລີລາຍປິດ.

- `Specify first corner point`, `Specify other corner point`. ພິມ `@width,height` ສຳລັບມຸມທີສອງ.

### POLYGON

ນາມແຝງ: `POL`. ໂພລີກອນປົກກະຕິເປັນໂພລີລາຍປິດ.

- `Enter number of sides <4>` (3 ຫາ 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: ກົດ ຫຼື ພິມຈຸດ; ໄລຍະຂອງມັນກຳນົດຂະໜາດ ແລະ ທິດທາງຂອງມັນໝຸນໂພລີກອນ.

### ELLIPSE

ນາມແຝງ: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, ແລ້ວໄລຍະຫາແກນອື່ນ.
- `I` (`Isocircle`, ໃຊ້ໄດ້ພຽງເວລາ {{cmd:ISODRAFT}} ເປີດຢູ່): ຈຸດສູນກາງ, ແລ້ວລັດສະໝີ ຫຼື `Diameter`: ellipse ທີ່ວົງມົນສະແດງເປັນໃນຍົນ isometric ປັດຈຸບັນ.

### HATCH

ນາມແຝງ: `H`, `BH`, `BHATCH`; ຫຼື {{ui:Hatch}} ໃນແຖບເຄື່ອງມື. ພິມລວດລາຍປັດຈຸບັນ, ມາດຕາສ່ວນ ແລະ ມຸມກ່ອນ.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, ຊ້ຳ (`Undo` ເມື່ອມີພື້ນທີ່ແລ້ວ): ແຕ່ລະການກົດເພີ່ມພື້ນທີ່ປິດທີ່ຢູ່ອ້ອມມັນ, ໂດຍມີຮູບປິດທີ່ຢູ່ພາຍໃນເປັນເກາະ. Enter ສ້າງ hatch ດຽວຂອງທັງໝົດ.
- `S`: `Select closed objects` (ໂພລີລາຍປິດ, ວົງມົນ, ellipse ປິດ).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): ການຕື່ມເປັນການໄລ່ສີແທນທີ່ຈະເປັນລວດລາຍ. ເບິ່ງ {{cmd:GRADIENT}} ສຳລັບຄຳຖາມຂອງມັນ.

ເບິ່ງ [Hatch and fill areas](topic:hatch).

### GRADIENT

ນາມແຝງ: `GD`. ຕື່ມພື້ນທີ່ດ້ວຍການໄລ່ສີຂອງສອງສີ ຫຼື ໜຶ່ງສີ. ມັນຖາມການໄລ່ສີກ່ອນ, ແລ້ວດຳເນີນຕໍ່ຄືກັບ {{cmd:HATCH}} (`Pick internal point`, `S` ສຳລັບວັດຖຸປິດ, {{key:Enter}} ເພື່ອສຳເລັດ).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, ຊ້ຳ; ມັນພິມການໄລ່ສີຕາມສະພາບປັດຈຸບັນທຸກຄັ້ງ.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ຫຼື ໜຶ່ງໃນພວກມັນທີ່ກັບດ້ານ (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). ຕົວອັກສອນຕົ້ນກໍພຽງພໍແລ້ວ.
- `O`: ສີໜຶ່ງ, ແລ້ວຄວາມເຂັ້ມຂອງມັນຈາກ 0 ຫາ 1 (0 ເຮັດໃຫ້ເປັນສີດຳ, 0.5 ແມ່ນສີນັ້ນເອງ, 1 ເຮັດໃຫ້ເປັນສີຂາວ). `TW`: ສີທີ່ໜຶ່ງ ແລະ ສີທີສອງ. ສີແມ່ນຕົວເລກ 1 ຫາ 255, ສາມຕົວເລກເຊັ່ນ `255,128,0`, ຫຼື `#rrggbb`.
- `A`: ມຸມທີ່ການໄລ່ສີວິ່ງ. `C`: Centered Yes ຫຼື No (No ຍ້າຍກາງຂອງການໄລ່ສີໄປຢູ່ດ້ານໜຶ່ງ).
- ມັນປະຕິເສດສີ ຫຼື ປະເພດທີ່ມັນບໍ່ຮູ້ຈັກ, ແລະ ຄວາມເຂັ້ມທີ່ຢູ່ນອກ 0 ຫາ 1.

{{cmd:HATCHEDIT}} `G` ແລະ Properties (Gradient) ປ່ຽນການໄລ່ສີໃນພາຍຫຼັງ, ຫຼື ປ່ຽນ hatch ໃດໆໃຫ້ເປັນການໄລ່ສີ. ການໄລ່ສີຖືກແຕ້ມໃນໜ້າຈໍ ແລະ ຖືກພິມ. DWG 2004 ແລະ ໃໝ່ກວ່າເກັບມັນເປັນ hatch ການໄລ່ສີແທ້; DXF 2000 ແລະ DWG 2000 ເກັບມັນໄວ້ສຳລັບ CadCraft, ແລະ ໂປຣແກຣມອື່ນເຫັນເປັນການຕື່ມທຶບໃນສີທຳອິດ.

### HATCHGENERATEBOUNDARY

ນາມແຝງ: `HGB`. ສ້າງຂອບຄືນໃໝ່ຈາກ hatch ທີ່ເສຍມັນໄປ. `Select hatches` (ຫຼື ເລືອກພວກມັນກ່ອນ), ແລ້ວ `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- ແຕ່ລະວົງຂອງ hatch ກາຍເປັນໂພລີລາຍປິດຢູ່ເລເຢີຂອງ hatch; ໂພລີລາຍໃໝ່ຖືກເລືອກຄ້າງໄວ້. ເສັ້ນໂຄ້ງກັບຄືນມາເປັນສ່ວນເສັ້ນຊື່ສັ້ນທີ່ hatch ເກັບໄວ້.
- ດ້ວຍ Yes hatch ຈະຕາມຂອບໃໝ່ຂອງມັນ, ຄືກັບ hatch ທີ່ສ້າງດ້ວຍ {{cmd:HATCH}}. ໜຶ່ງ undo step.
- ມັນບອກເມື່ອບໍ່ໄດ້ເລືອກ hatch.

### POINT

ນາມແຝງ: `PO`; ຫຼື {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. ວັດຖຸຈຸດ, ໜຶ່ງຈຸດຕໍ່ການກົດ, ຈົນກວ່າຈະກົດ Enter.

- `Specify a point`

### XLINE

ນາມແຝງ: `XL`; ຫຼື {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. ເສັ້ນກໍ່ສ້າງ, ບໍ່ມີທີ່ສຸດທັງສອງທາງ. ເບິ່ງ [Construction lines and rays](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, ແລ້ວ `Specify through point` ສຳລັບແຕ່ລະເສັ້ນ, ຈົນກວ່າຈະກົດ Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` ຖາມ `Select a line object` ກ່ອນ.
- `B`: `Specify angle vertex point`, `Specify angle start point`, ແລ້ວ `Specify angle end point` ສຳລັບແຕ່ລະເສັ້ນ.
- `O`: `Specify offset distance [Through] <Through>`, ແລ້ວ `Select a line object` ແລະ `Specify side to offset` (ຫຼື `Specify through point`) ສຳລັບແຕ່ລະເສັ້ນ.

### RAY

ບໍ່ມີນາມແຝງ; ຫຼື {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`, ແລ້ວ `Specify through point` ສຳລັບແຕ່ລະລຳແສງ, ຈົນກວ່າຈະກົດ Enter.

### TEXT

ນາມແຝງ: `DT`, `DTEXT`; ຫຼື {{ui:Text}} ໃນແຖບເຄື່ອງມື. ຂໍ້ຄວາມແຖວດຽວ; ແຕ່ລະແຖວເປັນວັດຖຸຂອງມັນເອງ.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, ແລ້ວ `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, ຊ້ຳ: ແຕ່ລະ Enter ເລີ່ມແຖວຕໍ່ໄປຂ້າງລຸ່ມ. Enter ໃນແຖວຫວ່າງຈະຈົບ. {{key:Space}} ພິມຊ່ອງຫວ່າງໄດ້ທີ່ນີ້.

### DIVIDE

ນາມແຝງ: `DIV`. {{cmd:DIVIDE}} ໃສ່ເຄື່ອງໝາຍໃສ່ເສັ້ນ, ເສັ້ນໂຄ້ງ, ວົງມົນ, ໂພລີລາຍ, spline ຫຼື ellipse ທີ່ຕັດມັນອອກເປັນສ່ວນເທົ່າກັນ. ເລືອກວັດຖຸ, ແລ້ວໃສ່ຈຳນວນສ່ວນ (2 ຫາ 32767). ວັດຖຸເປີດຈະໄດ້ເຄື່ອງໝາຍໜ້ອຍກວ່າສ່ວນໜຶ່ງ; ວັດຖຸປິດຈະໄດ້ເຄື່ອງໝາຍທີ່ຈຸດເລີ່ມດ້ວຍ. ວັດຖຸເອງບໍ່ຖືກຕັດ. ເຄື່ອງໝາຍເປັນຈຸດ; `Block` ຖາມຫາບລັອກຂອງແບບແຕ້ມນີ້ແທນ ແລະ ວ່າມັນຈະໝຸນຕາມວັດຖຸຫຼືບໍ່. ຄວາມຍາວຕາມ spline ແລະ ellipse ຖືກວັດຕາມຂີດສັ້ນ. ມັນປະຕິເສດຂໍ້ຄວາມ, hatch ແລະ ວັດຖຸອື່ນທີ່ບໍ່ມີຄວາມຍາວ.

### MEASURE

ນາມແຝງ: `ME`. {{cmd:MEASURE}} ໃສ່ເຄື່ອງໝາຍທຸກຄວາມຍາວທີ່ກຳນົດຕາມເສັ້ນ, ເສັ້ນໂຄ້ງ, ວົງມົນ, ໂພລີລາຍ, spline ຫຼື ellipse, ນັບຈາກປາຍທີ່ໃກ້ກັບບ່ອນທີ່ທ່ານເລືອກ (ວັດຖຸປິດ: ຈາກຈຸດເລີ່ມ). ໃສ່ຄວາມຍາວໂດຍພິມມັນ ຫຼື ດ້ວຍສອງຈຸດ. ປາຍໄກຂອງວັດຖຸເປີດຈະບໍ່ໄດ້ເຄື່ອງໝາຍ. `Block` ວາງບລັອກໃສ່ແຕ່ລະເຄື່ອງໝາຍແທນຈຸດ. ມັນປະຕິເສດຄວາມຍາວ 0, ຄວາມຍາວທີ່ຍາວກວ່າວັດຖຸ, ແລະ ອັນທີ່ຈະເຮັດໃຫ້ເກີນ 32767 ເຄື່ອງໝາຍ.

### BOUNDARY

ນາມແຝງ: `BO`, `BPOLY`. {{cmd:BOUNDARY}} ສ້າງໂພລີລາຍປິດອ້ອມພື້ນທີ່ທີ່ຈຸດທີ່ທ່ານເລືອກຢູ່, ຈາກເສັ້ນ, ເສັ້ນໂຄ້ງ, ວົງມົນ, ໂພລີລາຍ ແລະ ເສັ້ນໂຄ້ງທີ່ລ້ອມມັນໃນໜ້າຈໍ. ສ່ວນທີ່ຢູ່ເທິງເສັ້ນໂຄ້ງ ຫຼື ວົງມົນກັບຄືນມາເປັນສ່ວນເສັ້ນໂຄ້ງ; ສ່ວນຂອງ ellipse ແລະ spline ກັບຄືນມາເປັນສ່ວນເສັ້ນຊື່ສັ້ນ. ດ້ວຍ `Islands` ເປີດຢູ່ (ຄ່າເລີ່ມຕົ້ນ) ແຕ່ລະພື້ນທີ່ປິດທີ່ຢູ່ພາຍໃນກໍໄດ້ໂພລີລາຍຂອງມັນເອງເຊັ່ນກັນ. ເລືອກຈຸດຕໍ່ໄປ; Enter ຈົບ. ວັດຖຸທີ່ເປັນຂອບຂອງພື້ນທີ່ຈະຢູ່ຄືເກົ່າ. ມັນບອກເມື່ອບໍ່ມີພື້ນທີ່ປິດທີ່ຈຸດນັ້ນ.

### BLEND

{{cmd:BLEND}} ແຕ້ມເສັ້ນ spline ລະຫວ່າງປາຍຂອງເສັ້ນໂຄ້ງເປີດສອງເສັ້ນ. ເລືອກແຕ່ລະເສັ້ນໂຄ້ງໃກ້ປາຍທີ່ຈະຕໍ່. `CONtinuity` ເລືອກ `Tangent` (spline ອອກ ແລະ ມາຕາມທິດທາງຂອງເສັ້ນໂຄ້ງທັງສອງ) ຫຼື `Smooth` (ມັນຍັງໂຄ້ງຕາມວິທີທີ່ເສັ້ນໂຄ້ງໂຄ້ງທີ່ປາຍ); ການເລືອກຖືກເກັບໄວ້ສຳລັບ session. ເສັ້ນໂຄ້ງທັງສອງບໍ່ປ່ຽນແປງ. ມັນປະຕິເສດວັດຖຸປິດ ແລະ ປາຍສອງອັນທີ່ພົບກັນແລ້ວ.

### REGION

ນາມແຝງ: `REG`. {{cmd:REGION}} ປ່ຽນວັດຖຸປິດໃຫ້ເປັນ region: ພື້ນທີ່ແບນທີ່ທ່ານສາມາດຕໍ່, ຕັດ ແລະ ວັດໄດ້. ເລືອກວົງມົນ, ໂພລີລາຍປິດ, ellipse ປິດ ຫຼື spline ປິດ, ຫຼື ເສັ້ນ, ເສັ້ນໂຄ້ງ ແລະ ໂພລີລາຍເປີດທີ່ປິດເປັນວົງຈາກປາຍຕໍ່ປາຍ; ແຕ່ລະວົງກາຍເປັນ region ໜຶ່ງ ແລະ ແທນທີ່ວັດຖຸທີ່ມັນມາຈາກ. ເສັ້ນໂຄ້ງຄົງເປັນເສັ້ນໂຄ້ງ; ellipse ແລະ spline ກາຍເປັນສ່ວນເສັ້ນຊື່ສັ້ນ. ສິ່ງທີ່ບໍ່ປິດ ແລະ ບໍ່ປິດວົງໃດກໍຄືເກົ່າ, ແລະ ມັນບອກຈຳນວນ. ໃນແບບແຕ້ມ region ແມ່ນໂພລີລາຍປິດໜຶ່ງ ຫຼື ຫຼາຍອັນທີ່ຖືກຮວມເປັນກຸ່ມທີ່ບໍ່ມີຊື່, ດັ່ງນັ້ນການກົດໜຶ່ງຄັ້ງຈະເລືອກທັງ region, ແລະ ສຳເນົາແມ່ນ region ຂອງມັນເອງ; ໂປຣແກຣມອື່ນທີ່ເປີດໄຟລ໌ເຫັນໂພລີລາຍປິດ.

ເມື່ອມີ region ໃນແບບແຕ້ມ, {{cmd:UNION}}, {{cmd:SUBTRACT}} ແລະ {{cmd:INTERSECT}} ຢູ່ແທັບ 2D ເຮັດວຽກກັບ region: `UNION` ລວມ region ທີ່ເລືອກໃຫ້ເປັນໜຶ່ງ (region ທີ່ແຍກກັນກາຍເປັນ region ດຽວທີ່ມີຫຼາຍເສັ້ນຂອບ), `SUBTRACT` ຖາມ region ທີ່ຈະລົບອອກຈາກ ແລ້ວ region ທີ່ຈະເອົາອອກ (ຮູຍັງເປັນສ່ວນຂອງ region), `INTERSECT` ເກັບພື້ນທີ່ທີ່ທຸກອັນມີຮ່ວມກັນ. ແຕ່ລະອັນບອກພື້ນທີ່ຜົນລັບ ແລະ ເປັນໜຶ່ງ undo step. ພວກມັນປະຕິເສດເມື່ອບໍ່ມີຫຍັງເຫຼືອ ຫຼື ບໍ່ມີຮ່ວມກັນ. ຢູ່ແທັບ 3D, ແລະ ໃນແບບແຕ້ມທີ່ບໍ່ມີ region, ຄຳສັ່ງດຽວກັນເຮັດວຽກກັບ solid ຄືເກົ່າ.

## ແກ້ໄຂ

ນາມແຝງ: `MT`, `T`; ຫຼື {{ui:Paragraph}} ໃນແຖບເຄື່ອງມື. ຂໍ້ຄວາມຍ່ອໜ້າທີ່ຕັດເປັນຄວາມກວ້າງ, ພິມໃນບ່ອນນັ້ນ.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: ຄວາມກວ້າງຂ້າມສອງມຸມແມ່ນບ່ອນທີ່ຂໍ້ຄວາມຕັດແຖວ. `H` ຖາມ `Specify height`, `J` ຖາມ `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` ຖາມ `Enter line spacing factor (0.25 to 4)`, `R` ຖາມ `Specify rotation angle`, `W` ຖາມ `Specify width (0 for no wrapping)` ແລະ ຂ້າມມຸມທີສອງ.
- ຈາກນັ້ນ ກ່ອງໜຶ່ງເປີດຢູ່ແບບແຕ້ມ: ພິມ, {{key:Enter}} ສຳລັບຍ່ອໜ້າໃໝ່, {{key:Mod+Enter}} ຫຼື ກົດນອກກ່ອງເພື່ອສຳເລັດ, {{key:Esc}} ເພື່ອຍົກເລີກ. ແຖບຂອງມັນຕັ້ງຄວາມສູງ, ໄລຍະແຖວ, ຄວາມກວ້າງ ແລະ ການຈັດແນວ. ເບິ່ງ [Add text and labels](topic:text#write-a-note-that-wraps).

### TEXTEDIT

ນາມແຝງ: `ED`, `DDEDIT`; ຫຼື ດັບເບີ້ນຄລິກຂໍ້ຄວາມ. `Select a text to edit`, ຊ້ຳຈົນກວ່າຈະກົດ {{key:Enter}}: ແຕ່ລະອັນເປີດໃນກ່ອງດຽວກັນ. ເມື່ອເລີ່ມຈາກຂໍ້ຄວາມທີ່ເລືອກ ຫຼື ດັບເບີ້ນຄລິກ, ມັນແກ້ອັນນັ້ນແລ້ວຈົບ.
### ERASE

ນາມແຝງ: `E`, `DELETE`; ຫຼື ກົດ {{key:Delete}} ເມື່ອວັດຖຸຖືກເລືອກ.

- `Select objects` (ຂ້າມໄປເມື່ອວັດຖຸຖືກເລືອກແລ້ວ)

### MOVE

ນາມແຝງ: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, ພິມເປັນ `dx,dy`.

### COPY

ນາມແຝງ: `CO`, `CP`. ສຳເນົາຈຳນວນເທື່ອເທົ່າກັບຈຳນວນຈຸດທີ່ທ່ານໃຫ້.

`Array` ຢູ່ພຣອມປ໌ຈຸດທີສອງ ສ້າງແຖວໃນຄັ້ງດຽວ: ໃຫ້ຈຳນວນລາຍການ (ອັນເດີມນັບເປັນໜຶ່ງ), ແລ້ວຈຸດທີ່ສຳເນົາທຳອິດຢູ່; ອັນອື່ນຕາມໄລຍະຫ່າງດຽວກັນ. `Fit` ເຮັດໃຫ້ຈຸດນັ້ນເປັນບ່ອນຂອງສຳເນົາສຸດທ້າຍແທນ, ໂດຍອັນອື່ນກະຈາຍເທົ່າໆກັນລະຫວ່າງ.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, ຊ້ຳຈົນກວ່າຈະກົດ Enter. `U` ເອົາສຳເນົາສຸດທ້າຍຄືນ.

### ROTATE

ນາມແຝງ: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: ອົງສາ, ບວກທວນເຂັມ; ຫຼື ກົດຈຸດເພື່ອໝຸນໄປຫາມັນ.

### SCALE

ນາມແຝງ: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: ພິມຕົວຄູນ ເຊັ່ນ `0.5` ຫຼື `2`. ຈຸດທີ່ກົດໃຫ້ໄລຍະຈາກຈຸດຖານເປັນຕົວຄູນ.

### MIRROR

ນາມແຝງ: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

ນາມແຝງ: `AL`; ຫຼື {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- ດ້ວຍສອງຄູ່: `Scale objects based on alignment points? [Yes/No] <N>`

ເບິ່ງ [Align objects](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (ຫຼື ການເລືອກ), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` ຖາມຈຸດ. ການເລືອກຢູ່ຄົງເດີມ.

### DISTRIBUTE

- `Select objects` (ຢ່າງໜ້ອຍສາມອັນ), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. ສອງອັນນອກສຸດຢູ່ຄົງເດີມ; ການເລືອກຢູ່ຄົງເດີມ.

### ALIGNPANEL

ນາມແຝງ: `ALP`; ຫຼື {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. ເປີດແຜງທີ່ແລ່ນ ALIGNTO ແລະ DISTRIBUTE ດ້ວຍການກົດ.

### LASER

ນາມແຝງ: `LASERCUT`; ຫຼື {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. ເປີດແຜງ Laser ເໜືອແບບແຕ້ມ: ແຕ່ລະເລເຢີເຮັດຫຍັງ (ຕັດ, ຂີດ, ແກະສະຫຼັກ, ຕື່ມ, ຮູບ), ການສະແດງຜົນກ່ອນ, G-code GRBL ເພື່ອບັນທຶກ, ແລະ ການກຳນົດກອບ ແລະ ການສົ່ງຜ່ານ Web Serial. ເບິ່ງ [Send a drawing to a laser](topic:laser-cutting).

### STRETCH

ນາມແຝງ: `S`; ຫຼື {{ui:Stretch}}. `Select objects to stretch`: ລາກໜ້າຕ່າງຄວບ (ຫຼື ພິມ `C`) ຂ້າມປາຍເພື່ອຍ້າຍ. `Specify base point [Displacement]`, `Specify second point`. ຈຸດທີ່ຢູ່ໃນໜ້າຕ່າງຈະຍ້າຍ: ປາຍເສັ້ນ, ຈຸດຂອງໂພລີລາຍ (ສ່ວນເສັ້ນໂຄ້ງຮັກສາຄວາມສູງ), ຈຸດຂອງຂະໜາດ; ວົງມົນ, ellipse, ຂໍ້ຄວາມ, ຈຸດ ແລະ ບລັອກຍ້າຍທັງໝົດເມື່ອຈຸດສູນກາງ ຫຼື ຈຸດແຊກຂອງມັນຢູ່ໃນໜ້າຕ່າງ. ການເລືອກທີ່ເຮັດກ່ອນຄຳສັ່ງຈະຮັກສາໜ້າຕ່າງຄວບ (ແລະ lasso) ທີ່ສ້າງມັນ, ເພື່ອໃຫ້ພວກມັນຢືດໃນແບບດຽວກັນ. ຖ້າບໍ່ມີໜ້າຕ່າງ ວັດຖຸຈະຍ້າຍທັງໝົດ.

### ARRAY, ARRAYRECT, ARRAYPOLAR

ນາມແຝງ: `AR`; ຫຼື {{ui:Array}}. `Select objects`, ແລ້ວ `Enter array type [Rectangular/POlar] <Rectangular>` (ສະເພາະ ARRAY).

- Rectangular ເລີ່ມທີ່ 4 ຖັນ × 3 ແຖວ, ຫ່າງ 1.5 ເທົ່າຂອງຂະໜາດວັດຖຸ, ສະແດງເປັນການເບິ່ງກ່ອນ. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` ຖາມຖັນ ແລະ ແຖວ, `S` ຖາມໄລຍະລະຫວ່າງຖັນ ແລະ ລະຫວ່າງແຖວ (ລົບໄປຊ້າຍ ຫຼື ລົງ), `COL` ແລະ `R` ອັນລະທິດທາງ.
- Polar ຖາມ `Specify center point of array`, ເລີ່ມທີ່ 6 ລາຍການວົນຮອບ, ໝຸນແລ້ວ. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` ລາຍການ, `F` ມຸມທີ່ຈະຕື່ມ (+ ທວນເຂັມ, − ຕາມເຂັມ), `ROT` Yes ຫຼື No.
- {{key:Enter}} (eXit) ສ້າງສຳເນົາ, ເປັນວັດຖຸທຳມະດາ. ໜຶ່ງ undo step.
- `AS` (ASsociative) ສະຫຼັບລະຫວ່າງສຳເນົາທຳມະດາ ແລະ ອາເຣທີ່ຍັງແກ້ໄຂໄດ້: ວັດຖຸໜຶ່ງທີ່ທ່ານປ່ຽນໃນພາຍຫຼັງດ້ວຍ {{cmd:ARRAYEDIT}}, ດ້ວຍ grips ຂອງມັນ ຫຼື ໃນ Properties. ການເລືອກຖືກຈື່ໄວ້ ({{cmd:ARRAYASSOCIATIVITY}}); ມັນເລີ່ມດ້ວຍສຳເນົາທຳມະດາ.

### ARRAYPATH

ສຳເນົາຕາມເສັ້ນໂຄ້ງ. `Select objects`, ແລ້ວ `Select path curve`: ເສັ້ນ, ເສັ້ນໂຄ້ງ, ວົງມົນ, ellipse, ໂພລີລາຍ ຫຼື spline (ບໍ່ແມ່ນໜຶ່ງໃນວັດຖຸທີ່ກຳລັງຈັດອາເຣ). ເສັ້ນທາງເລີ່ມທີ່ປາຍທີ່ໃກ້ວັດຖຸກວ່າ, ແລະ ລາຍການທຳອິດແມ່ນວັດຖຸຢູ່ບ່ອນທີ່ມັນຢູ່.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, ພ້ອມການເບິ່ງກ່ອນ. `M`: `Divide` ກະຈາຍລາຍການເທົ່າໆກັນຕະຫຼອດເສັ້ນທາງ, `Measure` ວາງໜຶ່ງອັນທຸກໄລຍະທີ່ກຳນົດຕາມມັນ. `I`: ຈຳນວນລາຍການ (ດ້ວຍ Measure, 0 ໝາຍເຖິງເທົ່າທີ່ພໍດີ; ຈຳນວນທີ່ເກີນປາຍເສັ້ນທາງຈະຖືກຈຳກັດໃຫ້ພໍດີ). `SP`: ໄລຍະລະຫວ່າງລາຍການຕາມເສັ້ນທາງ (ປ່ຽນເປັນ Measure). `AL`: Yes ໝຸນແຕ່ລະລາຍການໃຫ້ຕາມເສັ້ນທາງ, No ຮັກສາໃຫ້ຕັ້ງຊື່.
- `AS` ຄືກັບໃນ {{cmd:ARRAY}}. ເມື່ອເປີດ, ອາເຣຈະເກັບສຳເນົາຮູບຮ່າງຂອງເສັ້ນທາງຂອງມັນເອງ: ການແກ້ໄຂເສັ້ນໂຄ້ງເສັ້ນທາງພາຍຫຼັງຈະບໍ່ຍ້າຍລາຍການ.
- ມັນປະຕິເສດເສັ້ນທາງທີ່ບໍ່ແມ່ນເສັ້ນໂຄ້ງ ແລະ ລາຍການດຽວ.

### ARRAYEDIT

ປ່ຽນອາເຣທີ່ສ້າງດ້ວຍ ASsociative. `Select array` (ຫຼື ເລືອກມັນກ່ອນ). ມັນພິມສະພາບປັດຈຸບັນຂອງອາເຣ, ແລ້ວຖາມຈົນກວ່າຈະກົດ {{key:Enter}}:

- Rectangular: `COL` ຖັນ ແລະ ໄລຍະຂອງມັນ, `R` ແຖວ ແລະ ໄລຍະຂອງມັນ, `A` ມຸມທີ່ຖັນວິ່ງ.
- Polar: `I` ລາຍການ, `F` ມຸມຕື່ມ, `ROT` ໝຸນລາຍການ Yes ຫຼື No.
- Path: `M` Divide ຫຼື Measure, `I` ລາຍການ, `SP` ໄລຍະ, `AL` ຈັດແນວກັບເສັ້ນທາງ.
- `S` (Source) ເປີດວັດຖຸທີ່ອາເຣຊ້ຳ, ໂດຍດ່ຽວ, ຄືກັບຕົວແກ້ໄຂບລັອກ. ແຕ້ມ ແລະ ແກ້ໄຂຢູ່ບ່ອນນັ້ນ; {{cmd:ARRAYCLOSE}} ບັນທຶກ ຫຼື ທິ້ງ, ແລະ ທຸກລາຍການຈະຕາມ.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, ແລ້ວກົດລາຍການທີ່ຈະແທນທີ່, {{key:Enter}}. ລາຍການເຫຼົ່ານັ້ນຈະສະແດງວັດຖຸແທນແທນ; ວັດຖຸແທນອອກຈາກແບບແຕ້ມ ແລະ ຢູ່ໃນອາເຣ. `RES` (RESet) ສະແດງວັດຖຸຕົ້ນທາງໃນທຸກລາຍການອີກຄັ້ງ.
- ແຕ່ລະການປ່ຽນແປງເປັນໜຶ່ງ undo step. ມັນປະຕິເສດສຳເນົາທຳມະດາ, ການອ້າງອີງບລັອກທຳມະດາ ແລະ ອາເຣໃນເລເຢີທີ່ລັອກ.

ຕົວເລກດຽວກັນຢູ່ໃນ Properties ພາຍໃຕ້ Array, ແລະ ອາເຣມີ grips: ຈຸດຖານຂອງມັນຍ້າຍມັນ, grip ທີ່ລາຍການທີສອງຕັ້ງໄລຍະ, grip ທີ່ຢູ່ເກີນລາຍການສຸດທ້າຍຕັ້ງຈຳນວນ (polar: ລາຍການທີສອງຕັ້ງຈຳນວນລາຍການ, ລາຍການສຸດທ້າຍຕັ້ງມຸມຕື່ມ). {{cmd:EXPLODE}} ປ່ຽນອາເຣກັບເປັນສຳເນົາທຳມະດາ.

### ARRAYCLOSE

ສິ້ນສຸດ {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. ມັນບອກເມື່ອບໍ່ມີວັດຖຸຕົ້ນທາງຂອງອາເຣເປີດຢູ່. {{cmd:BCLOSE}} ເຮັດສິ່ງດຽວກັນ.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. ກຳນົດວ່າ {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ແລະ {{cmd:ARRAYPATH}} ເລີ່ມດ້ວຍຫຍັງ; ຕົວເລືອກ `AS` ຂອງພວກມັນປ່ຽນການຕັ້ງຄ່າດຽວກັນ. ຈື່ໄວ້ໃນບຣາວເຊີນີ້.

### OFFSET

ນາມແຝງ: `O`. ເສັ້ນ, ເສັ້ນໂຄ້ງ, ວົງມົນ ແລະ ໂພລີລາຍ.

ເມື່ອໂພລີລາຍເຄື່ອນອອກ ແລະ ສ່ວນເສັ້ນຊື່ຂອງມັນແຍກອອກຈາກກັນທີ່ມຸມ, {{cmd:OFFSETGAPTYPE}} ກຳນົດວິທີປິດຊ່ອງວ່າງ.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, ແລ້ວ `Specify point on side to offset` (ຫຼື, ດ້ວຍ Through, `Specify through point`), ຊ້ຳຈົນກວ່າຈະກົດ Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: ວິທີ {{cmd:OFFSET}} ປິດຊ່ອງວ່າງຢູ່ມຸມນອກຂອງໂພລີລາຍ. `0` ຍືດສ່ວນຈົນກວ່າຈະພົບກັນ (ຄ່າເລີ່ມຕົ້ນ), `1` ຕໍ່ພວກມັນດ້ວຍເສັ້ນໂຄ້ງອ້ອມມຸມເກົ່າ, `2` ດ້ວຍການຕັດຊື່. ມຸມພາຍໃນ ແລະ ສ່ວນເສັ້ນໂຄ້ງບໍ່ຖືກກະທົບ. ເກັບໄວ້ສຳລັບ session ນີ້.

### EXTRIM

{{cmd:EXTRIM}} ຕັດທຸກສິ່ງໃນດ້ານໜຶ່ງຂອງຂອບ. ເລືອກຂອບຕັດ (ເສັ້ນ, ເສັ້ນໂຄ້ງ, ວົງມົນ, ໂພລີລາຍ, ellipse, spline ຫຼື ເສັ້ນກໍ່ສ້າງ), ແລ້ວເລືອກຈຸດໜຶ່ງເທິງດ້ານທີ່ຈະລຶບອອກ: ທຸກເສັ້ນ, ເສັ້ນໂຄ້ງ, ວົງມົນ, ໂພລີລາຍ ແລະ ເສັ້ນກໍ່ສ້າງທີ່ຂ້າມຂອບຈະເສຍສ່ວນຂອງມັນໃນດ້ານນັ້ນ, ໂດຍເລີ່ມຈາກຂອບ. ໃນຂະນະທີ່ທ່ານເລືອກດ້ານ, ສ່ວນທີ່ຈະຫາຍໄປຈະຕາມຕົວຊີ້. ສຳລັບຂອບປິດ ດ້ານຄືພາຍໃນ ແລະ ພາຍນອກ. ວັດຖຸທີ່ພຽງແຕ່ແຕະຂອບ, ແລະ ຂໍ້ຄວາມ, hatch, spline ແລະ ellipse ທີ່ຂ້າມມັນ, ຈະຄົງເດີມ. ໜຶ່ງ undo step.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: ວິທີ {{cmd:TRIM}} ແລະ {{cmd:EXTEND}} ເລີ່ມ. `1` Quick: ທຸກວັດຖຸເປັນຂອບຕັດ ຫຼື ຂອບເຂດ. `0` Standard: ພວກມັນຖາມຂອບກ່ອນ. ຫຼື `(setvar "TRIMEXTENDMODE" 0)` ໃນ LISP.

### TRIM

ນາມແຝງ: `TR`. ພິມ `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` ກ່ອນ. ໃນໂໝດ Quick ທຸກວັດຖຸທີ່ເຫັນເປັນຂອບຕັດ, ແລະ ວັດຖຸທີ່ບໍ່ມີຫຍັງຂ້າມຈະຖືກລຶບ; ໃນໂໝດ Standard ມັນຖາມ `Select cutting edges (Enter = every object)` ກ່ອນ ແລະ ຕັດພຽງຢູ່ຈຸດເຫຼົ່ານັ້ນ.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, ຊ້ຳ: ກົດຊິ້ນທີ່ຈະເອົາອອກ (ມັນຈະສະແດງເປັນສີເທົາ ແລະ ເສັ້ນປະໃນຂະນະທີ່ຕົວຊີ້ຢູ່ເທິງມັນ), ລາກເສັ້ນທາງຜ່ານຫຼາຍຊິ້ນ (ທັງໝົດໄປໃນຂັ້ນຕອນດຽວ), ຫຼື ກົດສອງບ່ອນຫວ່າງເພື່ອເປັນ fence ລະຫວ່າງພວກມັນ. {{key:Shift}} ຍືດແທນ. `T` ເລືອກຂອບຕັດ (ໂໝດ Standard), `F` ຖາມຈຸດ fence, `C` ສອງມຸມໜ້າຕ່າງ (ຊິ້ນທີ່ຢູ່ໃນບາງສ່ວນຈະຫາຍໄປ), `O` ຖາມ `Enter a trim mode option [Quick/Standard]`, `E` ຖາມ `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` ລຶບວັດຖຸທີ່ທ່ານເລືອກ, `U` ຍົກເລີກການເລືອກ ຫຼື ລາກຄັ້ງສຸດທ້າຍ. Enter ຈົບ. ເບິ່ງ [Trim and extend](topic:trim-and-extend).

- ການກົດເທິງ hatch ຈະຕັດ hatch: ຂອບຕັດແບ່ງບໍລິເວນທີ່ມີ hatch, ແລະ ຊິ້ນທີ່ທ່ານກົດຈະຖືກເອົາອອກ (ບໍ່ມີເສັ້ນຮູບຮ່າງຄ້າງຢູ່ບ່ອນເກົ່າ). Hatch ຍັງຮັກສາລວດລາຍ ຫຼື ການໄລ່ສີຂອງມັນ; hatch ທີ່ເຊື່ອມກັບຂອບຂອງມັນຈະບໍ່ເຊື່ອມອີກຫຼັງຈາກນັ້ນ, ເພາະມັນບໍ່ຕື່ມຂອບນັ້ນແລ້ວ. ມັນບອກເມື່ອບໍ່ມີຂອບຕັດແບ່ງ hatch ຢູ່ບ່ອນນັ້ນ, ເມື່ອການກົດຢູ່ນອກ hatch, ແລະ ເມື່ອຈະບໍ່ມີຫຍັງເຫຼືອ (ໃຫ້ໃຊ້ {{cmd:ERASE}}). ເສັ້ນທາງທີ່ລາກ ຫຼື fence ບໍ່ຕັດ hatch.

### EXTEND

ນາມແຝງ: `EX`. ຄືກັບ TRIM ໃນທິດກັບກັນ: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. ການກົດຍືດປາຍທີ່ໃກ້ມັນທີ່ສຸດໄປຫາຂອບເຂດຕໍ່ໄປ; ເສັ້ນທາງ ຫຼື fence ທີ່ລາກຍືດທຸກວັດຖຸທີ່ມັນຂ້າມ; {{key:Shift}} ຕັດ. `B` ເລືອກຂອບເຂດ (ໂໝດ Standard). Mode ແລະ Edge ໃຊ້ຮ່ວມກັບ TRIM.

### LINKVIEWS

ນາມແຝງ: `SYNCVIEWS`; ຫຼື {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, ຫຼື ໄອຄອນເຊື່ອມຢູ່ແທັບແບບແຕ້ມ. `Link the panes' views [ON/OFF]` (Enter ປ່ຽນເປັນສະຖານະອື່ນ): ເມື່ອເປີດ, ການເລື່ອນ ຫຼື ຊູມໃນບານທີ່ໃຊ້ຢູ່ຈະຍ້າຍທຸກບານທີ່ສະແດງພື້ນທີ່ປະເພດດຽວກັນ. ເບິ່ງ [Split the screen](topic:split-screen).

### OPENIN3D

ບໍ່ມີນາມແຝງ; ຫຼື {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} ບ່ອນທີ່ແອັບຈຳລອງ 3D ຮັບແບບແຕ້ມທີ່ສົ່ງມາ. ເປີດມັນທີ່ນັ້ນໃນແທັບໃໝ່, ເປັນ DWG (ບໍ່ມີການອັບໂຫລດ). ຖ້າບຣາວເຊີບລັອກແທັບ, ມັນຈະບອກ.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: ສິ່ງທີ່ການກົດ ແລະ ລາກໃນບ່ອນຫວ່າງຈະແຕ້ມ. ຄືກັນກັບ ການຕັ້ງຄ່າ › CadCraft › Dragging to select. ເບິ່ງ [Lasso selection](topic:lasso-selection).

### FILLET

ນາມແຝງ: `F`. ເສັ້ນ, ເສັ້ນໂຄ້ງ, ວົງມົນ ແລະ ໂພລີລາຍ. ພິມ `Current settings: Mode = TRIM, Radius = 0` ກ່ອນ.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` ຖາມ `Specify fillet radius <last>`. `T` ຖາມ `Enter Trim mode option [Trim/No trim]`: ດ້ວຍ No trim ວັດຖຸຄົງເດີມ ແລະ ມີແຕ່ເສັ້ນໂຄ້ງຖືກເພີ່ມ.
  - `M` ຮັກສາຄຳສັ່ງໃຫ້ແລ່ນສຳລັບມຸມເພີ່ມເຕີມຈົນກວ່າຈະກົດ {{key:Enter}}; `U` ເອົາມຸມສຸດທ້າຍຄືນໂດຍບໍ່ອອກຈາກຄຳສັ່ງ.
  - `P` ຖາມ `Select 2D polyline [Radius]` ແລະ ເຮັດມຸມມົນທຸກມຸມທີ່ສອງສ່ວນເສັ້ນຊື່ພົບກັນ. Fillet ທີ່ມັນມີແລ້ວຈະຖືກແທນທີ່ດ້ວຍລັດສະໝີໃໝ່; ລັດສະໝີ 0 ເອົາພວກມັນອອກ. ມຸມທີ່ດ້ານສັ້ນເກີນໄປສຳລັບລັດສະໝີຈະຖືກປະໄວ້ ແລະ ນັບ.
- `Select second object or shift-select to apply corner [Radius]`. ກົດ {{key:Shift}} ໃນຂະນະກົດສຳລັບມຸມແຫຼມ, ບໍ່ວ່າລັດສະໝີຈະເປັນເທົ່າໃດ.

ກົດແຕ່ລະວັດຖຸໃນສ່ວນທີ່ທ່ານຕ້ອງການຮັກສາ. ເສັ້ນສອງເສັ້ນທີ່ບໍ່ພົບກັນຈະຖືກຍືດ. ເສັ້ນຂະໜານສອງເສັ້ນຈະໄດ້ເສັ້ນເຄິ່ງວົງມົນຂ້າມຊ່ອງວ່າງ, ທີ່ປາຍຂອງເສັ້ນທຳອິດທີ່ໃກ້ການກົດຂອງທ່ານທີ່ສຸດ. ວົງມົນບໍ່ເຄີຍຖືກຕັດ. ສອງສ່ວນຂອງໂພລີລາຍດຽວທີ່ຢູ່ຕິດກັນຈະໄດ້ເສັ້ນໂຄ້ງຢູ່ພາຍໃນໂພລີລາຍ; ໂພລີລາຍ ແລະ ວັດຖຸອື່ນເຮັດວຽກເມື່ອການຕັດລົງຢູ່ສ່ວນທຳອິດ ຫຼື ສຸດທ້າຍຂອງໂພລີລາຍ.

### CHAMFER

ນາມແຝງ: `CHA`. ເສັ້ນ ແລະ ສ່ວນເສັ້ນຊື່ຂອງໂພລີລາຍ. ພິມໄລຍະປັດຈຸບັນ (ຫຼື ຄວາມຍາວ ແລະ ມຸມ) ກ່ອນ.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` ຖາມ `Specify first chamfer distance <last>` ແລະ `Specify second chamfer distance <the first>`: ອັນທຳອິດຖືກຕັດອອກຈາກເສັ້ນທຳອິດທີ່ທ່ານເລືອກ, ອັນທີສອງຈາກອີກເສັ້ນ.
  - `A` ຖາມ `Specify chamfer length on the first line` ແລະ `Specify chamfer angle from the first line`.
  - `E` (mEthod) ເລືອກວ່າອັນໃດໃນສອງອັນທີ່ການຕັດມຸມຕໍ່ໄປຈະໃຊ້. `T`, `M`, `U` ແລະ `P` ເຮັດວຽກຄືກັບໃນ {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+ກົດ ເຮັດໃຫ້ມຸມແຫຼມ.

ໄລຍະທີ່ຍາວກວ່າເສັ້ນຈະຖືກປະຕິເສດ (`Distance is too large.`).

### BREAK and BREAKATPOINT

ນາມແຝງ: `BR`. `Select object` (ບ່ອນທີ່ທ່ານກົດແມ່ນຈຸດທຳອິດ), `Specify second break point [First point]`; `F` ຖາມ `Specify first break point` ແລະ `Specify second break point`. ສ່ວນລະຫວ່າງຈະຫາຍໄປ; ເທິງວົງມົນ, ທວນເຂັມຈາກຈຸດທຳອິດ. BREAKATPOINT ຖາມ `Specify break point` ແລະ ແບ່ງວັດຖຸເປັນສອງບ່ອນນັ້ນ (ບໍ່ແມ່ນວົງມົນ).

### LENGTHEN

ນາມແຝງ: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: ການກົດພິມ `Current length` (ແລະ ມຸມລວມຂອງເສັ້ນໂຄ້ງ) ແລະ ຖາມອີກ. `DE` ຖາມ `Enter delta length (negative shortens) [Angle]`, `P` ຖາມ `Enter percentage length`, `T` ຖາມ `Specify total length [Angle]`, `DY` ລາກ. ແລ້ວ `Select an object to change [Undo]`, ຊ້ຳ: ປາຍທີ່ໃກ້ການກົດທີ່ສຸດຈະຍ້າຍ. ເສັ້ນ, ເສັ້ນໂຄ້ງ ແລະ ໂພລີລາຍເປີດ.

### JOIN

ນາມແຝງ: `J`. `Select objects to join`. ເສັ້ນ, ເສັ້ນໂຄ້ງ ແລະ ໂພລີລາຍເປີດທີ່ພົບກັນປາຍຕໍ່ປາຍກາຍເປັນໂພລີລາຍ (ປິດເມື່ອໂສ້ປິດ); ເສັ້ນຢູ່ເສັ້ນດຽວກັນກາຍເປັນເສັ້ນດຽວ; ເສັ້ນໂຄ້ງຂອງວົງມົນດຽວກັນກາຍເປັນເສັ້ນໂຄ້ງດຽວ ຫຼື ວົງມົນ. ປະຫວັດບອກວ່າມີວັດຖຸຈັກອັນຖືກຕໍ່ ແລະ ຈັກອັນບໍ່ຖືກຕໍ່.

### MATCHPROP

ນາມແຝງ: `MA`, `PAINTER`. `Select source object`, ແລ້ວ `Select destination objects [Settings]` ແລະ {{key:Enter}}. ສຳເນົາເລເຢີ ແລະ ສີ, ແລະ ລະຫວ່າງວັດຖຸປະເພດດຽວກັນ ຄວາມສູງ ແລະ ຄວາມກວ້າງຂອງຂໍ້ຄວາມ, ຂະໜາດຂອງຂະໜາດ, ຫຼື ລວດລາຍຂອງ hatch. `S` ຖາມ `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, ຊ້ຳຈົນກວ່າຈະກົດ {{key:Enter}}; ການເລືອກຖືກຈື່ສຳລັບ session.

### EXPLODE

ນາມແຝງ: `X`. ໂພລີລາຍກາຍເປັນເສັ້ນ ແລະ ເສັ້ນໂຄ້ງ, ການອ້າງອີງບລັອກກາຍເປັນວັດຖຸຂອງມັນ, ຂະໜາດກາຍເປັນເສັ້ນ, ຫົວລູກສອນ ແລະ ຂໍ້ຄວາມ. ອາເຣທີ່ຍັງແກ້ໄຂໄດ້ ({{cmd:ARRAYEDIT}}) ກາຍເປັນສຳເນົາທຳມະດາຂອງວັດຖຸຂອງມັນ.

- `Select objects`

### GROUP

ນາມແຝງ: `G`. {{cmd:GROUP}} ໃຫ້ວັດຖຸທີ່ເລືອກມີຊື່ຮ່ວມກັນ. ເລືອກວັດຖຸ, ແລ້ວພິມຊື່ (ບໍ່ມີຊ່ອງຫວ່າງ; `?` ລາຍການກຸ່ມ; Enter ສ້າງກຸ່ມທີ່ບໍ່ມີຊື່) ແລະ, ສຳລັບກຸ່ມທີ່ມີຊື່, ຄຳອະທິບາຍທີ່ເລືອກໄດ້. ຕັ້ງແຕ່ນັ້ນ ການກົດໃສ່ໜຶ່ງໃນພວກມັນ, ຫຼື ໜ້າຕ່າງທີ່ລວມມັນ, ຈະເລືອກທັງໝົດ, ດັ່ງນັ້ນພວກມັນຍ້າຍ, ສຳເນົາ ແລະ ລຶບນຳກັນ; ແຕ່ລະວັດຖຸຍັງເປັນວັດຖຸຂອງມັນເອງ. ວັດຖຸໜຶ່ງອາດຢູ່ໃນຫຼາຍກຸ່ມ. ສຳເນົາທັງກຸ່ມແມ່ນກຸ່ມທີ່ບໍ່ມີຊື່ໃໝ່; ສຳເນົາສະມາຊິກໜຶ່ງຄົນໂດດດ່ຽວຈະເຂົ້າກຸ່ມ. ກຸ່ມເປັນຂອງພື້ນທີ່ທີ່ມັນຖືກສ້າງ (ແບບ ຫຼື ແຜ່ນ). ພວກມັນຖືກເກັບໄວ້ເມື່ອທ່ານບັນທຶກເປັນ DWG ຫຼື DXF ແລະ ເປີດໄຟລ໌ອີກໃນ CadCraft; ໄຟລ໌ DXF 2000 ກໍບັນຈຸພວກມັນເປັນວັດຖຸກຸ່ມສຳລັບໂປຣແກຣມອື່ນ, ແລະ ກຸ່ມທີ່ສ້າງໃນໂປຣແກຣມອື່ນຈະຖືກອ່ານເມື່ອເປີດ DXF ຫຼື DWG.

### UNGROUP

{{cmd:UNGROUP}} ແຍກກຸ່ມອອກ: ເລືອກວັດຖຸຂອງກຸ່ມ (ທຸກກຸ່ມທີ່ພວກມັນຢູ່ຈະຖືກແຍກ) ຫຼື ພິມ `Name` ແລະ ຊື່ຂອງກຸ່ມ. ວັດຖຸຢູ່ໃນແບບແຕ້ມ. ໜຶ່ງ undo step ນຳກຸ່ມກັບຄືນມາ.

### GROUPEDIT

{{cmd:GROUPEDIT}} ປ່ຽນໜຶ່ງກຸ່ມ. ເລືອກໜຶ່ງວັດຖຸຂອງມັນ, ຫຼື `Name` ແລະ ຊື່ຂອງມັນ; ກຸ່ມທີ່ເລືອກແລ້ວຖືກຖືເອົາຕາມທີ່ມັນເປັນ. ຈາກນັ້ນ: `Add` ວັດຖຸ (ເລືອກເທື່ອລະອັນ, ບໍ່ແມ່ນທັງກຸ່ມ), `Remove` ວັດຖຸ, `REName` ກຸ່ມ, ປ່ຽນ `Description` ຂອງມັນ, ຫຼື ຕັ້ງ `Selectable` (ການກົດໜຶ່ງວັດຖຸຈະເລືອກທັງກຸ່ມຫຼືບໍ່). `eXit` ຫຼື Enter ຈົບ. ກຸ່ມທີ່ບໍ່ມີວັດຖຸເຫຼືອຈະຫາຍໄປ.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: ດ້ວຍ `1` (ຄ່າເລີ່ມຕົ້ນ) ການກົດ ຫຼື ໜ້າຕ່າງໃສ່ວັດຖຸທີ່ຢູ່ໃນກຸ່ມຈະເລືອກທັງກຸ່ມ; ດ້ວຍ `0` ວັດຖຸດຽວ, ເພື່ອໃຫ້ແກ້ໄຂສະມາຊິກໜຶ່ງໄດ້. ເກັບໄວ້ສຳລັບ session ນີ້.

## ຄລິບບອດ

clipboard ຂອງ CadCraft ເອງ: ມັນເຮັດວຽກພາຍໃນແບບແຕ້ມ, ລະຫວ່າງແບບແຕ້ມ ແລະ ລະຫວ່າງແທັບ CadCraft ໃນບຣາວເຊີນີ້. ເບິ່ງ [Copy, paste and duplicate](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ຫຼື {{ui:Copy}} ໃນກຸ່ມ {{ui:Edit}}. ສຳເນົາວັດຖຸເຂົ້າ clipboard, ພ້ອມບລັອກ ແລະ ເລເຢີທີ່ພວກມັນໃຊ້. ວັດຖຸຢູ່ໃນການເລືອກຢູ່.

- `Select objects to copy` (ຂ້າມໄປເມື່ອວັດຖຸຖືກເລືອກແລ້ວ)

### CUTCLIP

{{key:Mod+X}}, ຫຼື {{ui:Cut}} ໃນເມນູ {{ui:More}}. ສຳເນົາວັດຖຸເຂົ້າ clipboard, ແລ້ວລຶບພວກມັນ (ໜຶ່ງ undo step).

- `Select objects to cut` (ຂ້າມໄປເມື່ອວັດຖຸຖືກເລືອກແລ້ວ)

### COPYBASE

ສຳເນົາວັດຖຸເຂົ້າ clipboard ດ້ວຍຈຸດຖານທີ່ທ່ານເລືອກ; ການວາງຈະວາງຈຸດນັ້ນ.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, ຫຼື {{ui:Paste}} ໃນກຸ່ມ {{ui:Edit}}. ສຳເນົາຕາມເຄີເຊີ, ແຂວນຈາກມຸມລຸ່ມຊ້າຍຂອງຂອບເຂດຂອງມັນ (ຫຼື ຈາກຈຸດສູນກາງ, ຫຼື ຈຸດ `COPYBASE`; ເບິ່ງ [CadCraft settings](topic:settings)).

- `Specify insertion point`

ວັດຖຸທີ່ວາງຖືກເລືອກ. ບລັອກທີ່ແບບແຕ້ມມີຢູ່ແລ້ວດ້ວຍຊື່ດຽວກັນຈະໃຊ້ນິຍາມຂອງແບບແຕ້ມນີ້.

ເມື່ອເນື້ອທີ່ທີ່ສຳເນົາໃນ MarkupCraft ໃໝ່ກວ່າສິ່ງທີ່ CadCraft ສຳເນົາ (ແລະ ອາຍຸບໍ່ເກີນ 6 ຊົ່ວໂມງ), {{key:Mod+V}} ແລະ `PASTECLIP` ຈະວາງເນື້ອທີ່ນັ້ນແທນ: ເບິ່ງ `PASTEAREA`.

### PASTEAREA

ນາມແຝງ: `PAREA`. {{ui:Paste a copied area}} ໃນເມນູ {{ui:More}}. ວາງເນື້ອທີ່ທີ່ສຳເນົາດ້ວຍ {{ui:Copy area}} ໃນ MarkupCraft ເປັນຮູບໃນຂະໜາດຈິງ. ເບິ່ງ [Pictures in a drawing](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (ສະເພາະເມື່ອແຜ່ນບໍ່ມີມາດຕາສ່ວນແບບແຕ້ມ): ຕົວເລກ, {{key:Enter}} ສຳລັບຂະໜາດກະດາດ, ຫຼື `P`, ແລ້ວ `First point on the pasted area`, `Second point on the pasted area` ແລະ ໄລຍະຈິງຂອງພວກມັນ.

### PASTEORIG

{{key:Mod+Shift+V}}, ຫຼື {{ui:Paste in place}} ໃນເມນູ {{ui:More}}. ວາງທີ່ພິກັດທີ່ວັດຖຸຖືກສຳເນົາມາ. ບໍ່ຖາມຫຍັງ.

### DUPLICATE

ນາມແຝງ: `DUP`. {{key:Mod+D}}, ຫຼື {{ui:Duplicate and move}} ໃນເມນູ {{ui:More}}. ສຳເນົາວັດຖຸເຄື່ອນຕາມຕົວຊີ້ຈາກບ່ອນທີ່ມັນຢູ່; {{key:Esc}} ບໍ່ເຫຼືອຫຍັງ. ບໍ່ໃຊ້ clipboard.

- `Select objects to duplicate` (ຂ້າມໄປເມື່ອວັດຖຸຖືກເລືອກແລ້ວ)
- `Specify where the copy goes (Esc leaves nothing)`: ກົດ, ພິມຈຸດ, `@dx,dy` (ຈາກບ່ອນທີ່ຕົວຊີ້ຢູ່), ຫຼື ໄລຍະໄປທາງເຄີເຊີ.

### SELECT

ຖາມ `Select objects` (ພ້ອມທຸກຕົວເລືອກທາງລຸ່ມ) ແລະ ປະໄວ້ສິ່ງທີ່ທ່ານເລືອກໃຫ້ຖືກເລືອກ, ສຳລັບຄຳສັ່ງຕໍ່ໄປ ຫຼື ສຳລັບ `P` ໃນພາຍຫຼັງ.

### QSELECT

ນາມແຝງ: `QS`. ໃນບຣາວເຊີ ເປັນກ່ອງໂຕ້ຕອບ {{ui:Quick select}} (ເບິ່ງ [Select objects](topic:select-objects#select-by-a-rule-quick-select)). ຖ້າບໍ່ມີມັນ ແຖວຄຳສັ່ງຖາມ `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` ແລະ `Enter value`. ສິ່ງທີ່ກົງກັນກາຍເປັນການເລືອກ.

### SELECTSIMILAR

ນາມແຝງ: `SIM`. `Select objects [SEttings]` (ຫຼື ການເລືອກປັດຈຸບັນ): ເລືອກທຸກວັດຖຸປະເພດດຽວກັນທີ່ມີເລເຢີ ແລະ ສີດຽວກັນ (ແລະ ຊື່ບລັອກ, ລວດລາຍ hatch). `SE` ຖາມ `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, ຊ້ຳຈົນກວ່າຈະກົດ {{key:Enter}}.

### FIND

ບໍ່ມີນາມແຝງ; ຫຼື {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. ໃນບຣາວເຊີ ເປັນກ່ອງໂຕ້ຕອບ {{ui:Find and replace}} (ເບິ່ງ [Add text and labels](topic:text#find-and-replace-words)). ຖ້າບໍ່ມີມັນ: `Enter text to find`, ແລ້ວ `Enter replacement text (Enter: select what is found)`. ຊອກໃນຂໍ້ຄວາມ, ຄ່າຄຸນລັກສະນະ ແລະ ຂໍ້ຄວາມຂະໜາດ, ໃນແທັບທີ່ເປີດ ຫຼື ໃນການເລືອກ.

### SELECTALL and DESELECT

`SELECTALL` (ນາມແຝງ `AI_SELALL`, {{key:Mod+A}}) ເລືອກທຸກວັດຖຸທີ່ທ່ານແກ້ໄຂໄດ້ໃນແທັບທີ່ເປີດ. `DESELECT` (ນາມແຝງ `AI_DESELECT`, `SELECTNONE`; ຫຼື {{key:Esc}}) ລຶບການເລືອກ.

## ຂະໜາດ

### DIMLINEAR

ນາມແຝງ: `DLI`, `DIMLIN`. ໄລຍະແນວນອນ ຫຼື ແນວຕັ້ງ.

- `Specify first extension line origin [Select object]` (Enter ຫຼື `S`: `Select object to dimension`, ແລ້ວກົດເສັ້ນ, ເສັ້ນໂຄ້ງ, ວົງມົນ ຫຼື ສ່ວນໂພລີລາຍ)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` ຖາມຂໍ້ຄວາມ (`<>` ແມ່ນຄ່າທີ່ວັດໄດ້), `H` ແລະ `V` ກຳນົດທິດທາງ, `R` ຖາມ `Specify angle of dimension line <0>`.

### DIMALIGNED

ນາມແຝງ: `DAL`, `DIMALI`. ໄລຍະຈິງລະຫວ່າງສອງຈຸດ.

- ຈຸດເລີ່ມຕົ້ນຄືກັບໃນ {{cmd:DIMLINEAR}}, ແລ້ວ `Specify dimension line location [Text]`.

### DIMANGULAR

ນາມແຝງ: `DAN`, `DIMANG`.

- `Select arc or circle, or Enter for a vertex`
- ເສັ້ນໂຄ້ງ: ມຸມຂອງມັນ. ວົງມົນ: `Specify second angle endpoint`. ເສັ້ນ: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: ກົດພາຍໃນມຸມທີ່ຈະວັດ.

### DIMRADIUS and DIMDIAMETER

ນາມແຝງ: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, ແລ້ວ `Specify dimension line location [Text]`.

### DIMCONTINUE

ນາມແຝງ: `DCO`, `DIMCONT`. ສືບຕໍ່ຈາກຂະໜາດເສັ້ນຊື່ ຫຼື ຂະໜານອັນສຸດທ້າຍທີ່ສ້າງ (ຫຼື ຖາມ `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, ຊ້ຳຈົນກວ່າຈະກົດ Enter.

### DIMBASELINE

ນາມແຝງ: `DBA`, `DIMBASE`. ຄືກັບ {{cmd:DIMCONTINUE}}, ແຕ່ທຸກຂະໜາດເລີ່ມຈາກຈຸດເລີ່ມທຳອິດ ແລະ ຊ້ອນອອກໄປໄກຂຶ້ນ.

### DIMORDINATE

ນາມແຝງ: `DOR`, `DIMORD`. `Specify feature location`, ແລ້ວ `Specify leader endpoint [Xdatum/Ydatum/Text]`. ຂຽນໄລຍະຂອງຈຸດຈາກຈຸດເລີ່ມຂອງ UCS ຕາມ X ຫຼື ຕາມ Y, ໃນເສັ້ນນຳ: ເສັ້ນນຳທີ່ຂຶ້ນ ຫຼື ລົງສ່ວນຫຼາຍອ່ານເປັນ X, ອັນທີ່ໄປທາງຂ້າງອ່ານເປັນ Y; `Xdatum` ແລະ `Ydatum` ກຳນົດອັນໃດ. ຕັ້ງຈຸດເລີ່ມກ່ອນດ້ວຍ {{cmd:UCS}} (ຖ້າບໍ່ມີ ມັນແມ່ນ 0,0 ຂອງແບບແຕ້ມ). Grips ຍ້າຍຈຸດ, ຈຸດເລີ່ມ ແລະ ປາຍເສັ້ນນຳ, ແລະ ຄ່າຈະຕາມ. ບັນທຶກເປັນຂະໜາດຕຳແໜ່ງແທ້ໃນ DWG ແລະ DXF. ປະຕິເສດປາຍເສັ້ນນຳທີ່ຢູ່ເທິງຈຸດເອງ.

### DIMARC

ນາມແຝງ: `DAR`. `Select arc or polyline arc segment`, ແລ້ວ `Specify arc length dimension location [Text]`. ວັດຕາມເສັ້ນໂຄ້ງ (ບໍ່ແມ່ນເສັ້ນຊື່ລະຫວ່າງຈຸດ) ແລະ ຂຽນສັນຍາລັກເສັ້ນໂຄ້ງກ່ອນຄ່າ. ປະຕິເສດວົງມົນເຕັມ, ເສັ້ນ ຫຼື ສ່ວນເສັ້ນຊື່ຂອງໂພລີລາຍ. DWG ເກັບມັນເປັນຂະໜາດຄວາມຍາວເສັ້ນໂຄ້ງ; DXF ເກັບມັນເປັນຂະໜາດມຸມ ໂດຍມີຄວາມຍາວເປັນຂໍ້ຄວາມ, ແລະ CadCraft ເປີດມັນອີກຄັ້ງເປັນຂະໜາດຄວາມຍາວເສັ້ນໂຄ້ງ.

### DIMJOGGED

ນາມແຝງ: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. ຂະໜາດລັດສະໝີສຳລັບເສັ້ນໂຄ້ງທີ່ຈຸດສູນກາງຢູ່ໄກ ຫຼື ນອກແຜ່ນ: ເສັ້ນຂະໜາດເລີ່ມຈາກຈຸດທີ່ທ່ານໃຫ້ແທນທີ່ຈະເປັນຈຸດສູນກາງ, ມີການຫັກໃນມັນ, ແລະ ຍັງຂຽນລັດສະໝີຈິງ. DWG ເກັບມັນເປັນຂະໜາດລັດສະໝີແບບຫັກ; DXF ເກັບມັນເປັນຂະໜາດລັດສະໝີ, ແລະ CadCraft ເປີດມັນອີກຄັ້ງໃຫ້ຫັກ.

### DIMJOGLINE

ນາມແຝງ: `DJL`. `Select dimension to add jog [Remove]`, ແລ້ວ `Specify jog location (or press Enter)`. ໃສ່ສັນຍາລັກຫັກໃສ່ເສັ້ນຂອງຂະໜາດເສັ້ນຊື່ ຫຼື ຂະໜານ, ເພື່ອບອກວ່າໄລຍະບໍ່ໄດ້ແຕ້ມຕາມມາດຕາສ່ວນ; ຄ່າບໍ່ປ່ຽນ. `Remove` ເອົາມັນອອກ. ປະຕິເສດຂະໜາດປະເພດອື່ນ.

### QDIM

ບໍ່ມີນາມແຝງ. `Select geometry to dimension`, ແລ້ວ `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. ໃສ່ຂະໜາດໃຫ້ວັດຖຸຫຼາຍອັນໃນຂັ້ນຕອນດຽວ, ຈາກປາຍຂອງເສັ້ນ ແລະ ສ່ວນໂພລີລາຍ, ຈຸດສູນກາງຂອງວົງມົນ ແລະ ເສັ້ນໂຄ້ງ, ຈຸດ ແລະ ການອ້າງອີງບລັອກ. ຕຳແໜ່ງເທິງ ຫຼື ລຸ່ມວັດຖຸຈະວັດຂ້າມ, ຕຳແໜ່ງຂ້າງພວກມັນຈະວັດຂຶ້ນ. `Continuous` ຕໍ່ຈຸດເປັນໂສ້, `Baseline` ວັດທັງໝົດຈາກອັນທຳອິດ, `Staggered` ຊ້ອນຄູ່ຈາກກາງອອກໄປ, `Ordinate` ໃຫ້ແຕ່ລະຈຸດໄລຍະຈາກຈຸດອ້າງອີງ (`datumPoint` ເລືອກອັນໃໝ່), `Radius` ແລະ `Diameter` ໃສ່ຂະໜາດທຸກວົງມົນ ແລະ ເສັ້ນໂຄ້ງທີ່ເລືອກ. ໂໝດຖືກຈື່ໄວ້. ທຸກຢ່າງທີ່ມັນສ້າງເປັນໜຶ່ງ undo step. ບອກເມື່ອມີຈຸດໜ້ອຍກວ່າສອງ ຫຼື ບໍ່ມີເສັ້ນໂຄ້ງ ຫຼື ວົງມົນສຳລັບ Radius ແລະ Diameter.

### DIMBREAK

ນາມແຝງ: `DBREAK`. `Select dimensions to add or remove breaks`, ແລ້ວ `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` ເວັ້ນຊ່ອງວ່າງໃນເສັ້ນຂະໜາດ ແລະ ເສັ້ນຍືດບ່ອນໃດກໍຕາມທີ່ວັດຖຸອື່ນຂ້າມພວກມັນ, ແລະ ຄິດຊ່ອງວ່າງຄືນໃໝ່ເມື່ອວັດຖຸເຫຼົ່ານັ້ນ ຫຼື ຂະໜາດຍ້າຍ. `Manual` (ໜຶ່ງຂະໜາດ) ຖາມສອງຈຸດ ແລະ ເວັ້ນຊ່ອງວ່າງລະຫວ່າງພວກມັນ. `Remove` ເອົາຊ່ອງວ່າງທັງໝົດອອກ. ຊ່ອງວ່າງແມ່ນ 1.5 ເທົ່າຂອງຄວາມສູງຂໍ້ຄວາມຂະໜາດ.

### DIMSPACE

ບໍ່ມີນາມແຝງ. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. ຍ້າຍເສັ້ນຂະໜາດຂອງຂະໜາດເສັ້ນຊື່ ແລະ ເສັ້ນຂະໜານ (ຫຼື ຂະໜາດມຸມທີ່ຈຸດຍອດດຽວກັນ) ໃຫ້ຢູ່ຫ່າງເທົ່າກັນ, ນັບຈາກຂະໜາດຖານ, ແຕ່ລະອັນຢູ່ດ້ານທີ່ມັນຢູ່. `0` ຈັດໃຫ້ຕຽງກັບຖານ; `Auto` ເທົ່າກັບສອງເທົ່າຂອງຄວາມສູງຂໍ້ຄວາມຂອງຂະໜາດຖານ. ຂະໜາດທີ່ບໍ່ຂະໜານກັບຖານຈະຖືກປະໄວ້.

### DIMINSPECT

ບໍ່ມີນາມແຝງ. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. ແຕ້ມກອບອ້ອມຄ່າ ພ້ອມປ້າຍກ່ອນມັນ ແລະ ອັດຕາການກວດຫຼັງມັນ. `remove` ເອົາກອບອອກ. ຂໍ້ຄວາມຄວາມເບ່ຍຢູ່ກັບຄ່າ.

### DIMOVERRIDE

ນາມແຝງ: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, ອີກຈົນກວ່າຈະກົດ Enter, ແລ້ວ `Select dimensions`. ປ່ຽນການຕັ້ງຄ່າເຫຼົ່ານັ້ນໃນຂະໜາດທີ່ເລືອກເທົ່ານັ້ນ; ຮູບແບບຂະໜາດບໍ່ປ່ຽນ. ຮັບຕົວແປທີ່ເປັນຕົວເລກ ຫຼື ສະວິດ (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` ໃຫ້ຂະໜາດທີ່ເລືອກກັບໄປໃຊ້ຮູບແບບຂອງມັນ. ປະຕິເສດຊື່ທີ່ບໍ່ແມ່ນຕົວແປດັ່ງກ່າວ ແລະ ຄ່າທີ່ມັນຮັບບໍ່ໄດ້.

### DIMREASSOCIATE

ນາມແຝງ: `DRE`, `DIMREASSOC`. `Select dimensions`, ແລ້ວສຳລັບແຕ່ລະອັນ ຈຸດເລີ່ມຂອງເສັ້ນຂອບຂອງມັນ (`Specify first extension line origin on an object`: snap ໄປປາຍ ຫຼື ກາງຂອງເສັ້ນ, ມຸມໂພລີລາຍ, ຈຸດສູນກາງ; Enter ປະໄວ້ຈຸດນັ້ນເປັນອິດສະຫຼະ), ຫຼື ສຳລັບລັດສະໝີ, ເສັ້ນຜ່າສູນກາງ, ລັດສະໝີແບບຫັກ ຫຼື ຂະໜາດຄວາມຍາວເສັ້ນໂຄ້ງ `Select arc or circle`. ຂະໜາດຈາກນັ້ນຖືກຜູກເຂົ້າກັບວັດຖຸເຫຼົ່ານັ້ນ: ເມື່ອພວກມັນຍ້າຍ ຫຼື ປ່ຽນຂະໜາດ ມັນຈະຕາມໃນ undo step ດຽວກັນ ແລະ ວັດໃໝ່. ການຍ້າຍຈຸດທີ່ຜູກໄວ້ດ້ວຍມື, ຫຼື ລຶບວັດຖຸ, ຈະຢຸດການຜູກນັ້ນ. ການຜູກຖືກບັນທຶກໃນ DWG ແລະ DXF 2000 ເປັນຂໍ້ມູນຂອງ CadCraft ເອງ; ໂປຣແກຣມອື່ນເຫັນເປັນຂະໜາດທຳມະດາ.

### DIMDISASSOCIATE

ນາມແຝງ: `DDA`, `DIMDISASSOC`. `Select dimensions`. ປົດພວກມັນອອກຈາກວັດຖຸທີ່ມັນຜູກຢູ່; ບໍ່ມີຫຍັງຍ້າຍ.

### CENTERMARK

ນາມແຝງ: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, ອີກຈົນກວ່າຈະກົດ Enter. ແຕ້ມກາກບາດຢູ່ຈຸດສູນກາງ ແລະ ເສັ້ນກາງສີ່ເສັ້ນທີ່ຍືດເກີນເສັ້ນໂຄ້ງເລັກນ້ອຍ (ປະເພດເສັ້ນ CENTER), ເປັນເສັ້ນທຳມະດາໃນເລເຢີປັດຈຸບັນ; ຂະໜາດຂຶ້ນກັບຂະໜາດລູກສອນ ແລະ ມາດຕາສ່ວນລວມຂອງການຕັ້ງຄ່າຂະໜາດປັດຈຸບັນ, ໝຸນດ້ວຍ UCS. ພວກມັນບໍ່ຕາມວົງມົນຖ້າມັນຍ້າຍ.

### CENTERLINE

ນາມແຝງ: `CL`. `Select first line`, `Select second line`. ແຕ້ມເສັ້ນຢູ່ກາງລະຫວ່າງສອງເສັ້ນ (ຕາມເສັ້ນແບ່ງເມື່ອພວກມັນພົບກັນ), ຍາວກວ່າເລັກນ້ອຍ, ໃນປະເພດເສັ້ນ CENTER. ເປັນເສັ້ນທຳມະດາ: ມັນບໍ່ຕາມສອງເສັ້ນ.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

ບໍ່ມີນາມແຝງ. ແຕ່ລະອັນຖາມ `Enter new value for … <current>` ແລະ ຕັ້ງຂະໜາດນັ້ນສຳລັບຂະໜາດ **ໃໝ່**: ມາດຕາສ່ວນລວມ, ຄວາມສູງຂໍ້ຄວາມ, ຂະໜາດລູກສອນ, ຈຳນວນຕຳແໜ່ງທົດສະນິຍົມ (ເຖິງ 8), ຊ່ອງວ່າງອ້ອມຂໍ້ຄວາມ, ການຍືດເກີນເສັ້ນຂະໜາດ, ການຫ່າງຈາກຈຸດເລີ່ມ. ເບິ່ງ [Set dimension sizes](topic:dimension-settings).

### DIMLUNIT

ການຕັ້ງຄ່າຂະໜາດ: ຮູບແບບຄວາມຍາວຂອງຂະໜາດໃໝ່ເທົ່ານັ້ນ (1 ວິທະຍາສາດ, 2 ທົດສະນິຍົມ, 3 ວິສະວະ, 4 ສະຖາປັດ, 5 ເສດສ່ວນ).

### DIMSTYLE and -DIMSTYLE

ນາມແຝງ: `DST`, `DDIM`, `D`. ຕົວຈັດການຮູບແບບຂະໜາດ: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` ໃນແຖວຄຳສັ່ງ: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. ເບິ່ງ [Set dimension sizes](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, ແລ້ວຂະໜາດ (ຫຼື ອັນທີ່ເລືອກແລ້ວ). New ຖາມຂໍ້ຄວາມ (`<>` = ການວັດ); Rotate ສຳລັບມຸມ (0 ໃສ່ຂໍ້ຄວາມກັບຄືນ); Oblique ສຳລັບມຸມຂອງເສັ້ນຍືດຈາກແກນ X (Enter = ບໍ່ມີ; ໃຊ້ກັບຂະໜາດເສັ້ນຊື່ ແລະ ຂະໜານເທົ່ານັ້ນ). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. ເບິ່ງ [Set dimension sizes](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

ນາມແຝງ: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, ຫຼື ດ້ວຍຂະໜາດທີ່ເລືອກ `Units in the text of the selected dimensions`. ຂຽນຄວາມຍາວທີ່ວັດໄດ້ດ້ວຍຫົວໜ່ວຍນັ້ນ ໂດຍມີຫົວໜ່ວຍຕາມຫຼັງ (DIMLFAC ແລະ ຕົວຕໍ່ DIMPOST); `D` ກັບໄປໃຊ້ຫົວໜ່ວຍຂອງແບບແຕ້ມ. ເບິ່ງ [Dimensions in mm, cm, m or km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

ນາມແຝງ: `RC`. ພິມ `Arc length: … Type: …`, ແລ້ວ `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular ຖາມ `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand ຕາມຕົວຊີ້ຈົນກວ່າຈະກົດ ຫຼື Enter; `O` ຖາມ `Select object` ແລະ `Reverse direction? [Yes/No] <N>` ແລະ ປ່ຽນວັດຖຸເປັນເມກ. `A` ຖາມ `Specify the length of each arc`. `R`, `P` ແລະ `F` ເລືອກປະເພດສຳລັບເມກຕໍ່ໄປ. ຜົນລັບເປັນໂພລີລາຍປິດຂອງເສັ້ນໂຄ້ງ.

### MLEADER

ນາມແຝງ: `MLD`; ຫຼື {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, ແລ້ວຂໍ້ຄວາມໃນກ່ອງໃນບ່ອນ (ຫຼື ຖ້າບໍ່ມີ, `Enter text (an empty line ends)`). `Block` ຖາມຊື່ບລັອກກ່ອນ ແລະ multileader ສະແດງບລັອກນັ້ນແທນຂໍ້ຄວາມ. ເສັ້ນນຳເພີ່ມເຕີມ: {{cmd:MLEADEREDIT}}. ບັນທຶກເປັນ multileader ແທ້ໃນ DWG; DXF ເກັບເສັ້ນ, ລູກສອນ ແລະ ຂໍ້ຄວາມທີ່ມັນແຕ້ມ.

### MLEADEREDIT

ນາມແຝງ: `MLE`. `Select a multileader`, ແລ້ວ `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: ແຕ່ລະຈຸດເພີ່ມເສັ້ນນຳຈາກລູກສອນໃໝ່ໄປຫາການລົງຈອດດຽວກັນ, ຈົນກວ່າຈະກົດ Enter. `Remove leaders` ຈາກນັ້ນເອົາເສັ້ນນຳທີ່ທ່ານກົດອອກ (multileader ເກັບຢ່າງໜ້ອຍໜຶ່ງ). `Block content` ຖາມຊື່ບລັອກ ແລະ ສະແດງບລັອກນັ້ນແທນຂໍ້ຄວາມ (ຄຸນລັກສະນະຂອງມັນຈະຖືກຖາມ); `Text content` ໃສ່ຂໍ້ຄວາມກັບຄືນ. ເສັ້ນນຳແຕ່ລະເສັ້ນມີ grip ຂອງຕົນເອງ. DWG ເກັບເສັ້ນນຳທຸກເສັ້ນ ແລະ ບລັອກໃນ multileader ດຽວ.

### MLEADERALIGN

ນາມແຝງ: `MLA`. `Select multileaders`, ແລ້ວ `Select multileader to align to [Distribute/Spacing/Use current spacing]` ແລະ `Specify direction`. ຍ້າຍການລົງຈອດຂອງ multileader ອື່ນ (ແລະ ຂໍ້ຄວາມ ຫຼື ບລັອກຂອງພວກມັນ) ໄປເສັ້ນທີ່ຜ່ານການລົງຈອດຂອງອັນທີ່ເລືອກ ໃນທິດທາງນັ້ນ; ລູກສອນຢູ່ໃນບ່ອນທີ່ມັນຊີ້. `Spacing` ຍັງຕັ້ງໄລຍະຫ່າງເທົ່າກັນ; `Distribute` ຖາມສອງຈຸດ ແລະ ກະຈາຍພວກມັນເທົ່າໆກັນລະຫວ່າງ. ຕ້ອງການ multileader ຢ່າງໜ້ອຍສອງອັນ.

### MLEADERCOLLECT

ນາມແຝງ: `MLC`. `Select multileaders`, ແລ້ວ `Specify collected multileader location [Vertical/Horizontal]` (Enter ຮັກສາຕຳແໜ່ງຂອງອັນທຳອິດ). ສ້າງ multileader ອັນດຽວຈາກຫຼາຍອັນ: ເນື້ອຫາບລັອກເຂົ້າໄປໃນບລັອກໃໝ່ທີ່ຖືທຸກອັນຢູ່ຂ້າງກັນ ຫຼື ໃຕ້ກັນ; ເນື້ອຫາຂໍ້ຄວາມກາຍເປັນໝາຍເຫດອັນດຽວ ທີ່ມີເສັ້ນແຕ່ລະອັນ. multileader ທຳອິດຮັກສາເສັ້ນນຳຂອງມັນ; ອັນອື່ນຖືກລຶບ. ປະຕິເສດການປະສົມເນື້ອຫາຂໍ້ຄວາມ ແລະ ບລັອກ.

### TABLE

ນາມແຝງ: `TB`; ຫຼື {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. ສ້າງຕາຕະລາງ: ວັດຖຸດຽວທີ່ທ່ານຍ້າຍ, ສຳເນົາ, ໝຸນ, ປັບຂະໜາດ ແລະ ພິມຄືວັດຖຸອື່ນ, ໂດຍຊ່ອງຂອງມັນຖືເປັນຂໍ້ມູນ.

- `Number of data rows or [Paste/File/Style] <3>`, ແລ້ວ `Number of columns <3>`, `Text height` ແລະ `Top left corner of the table`. ຕາຕະລາງໄດ້ແຖວຫົວຂໍ້ (ຊ່ອງດຽວທີ່ລວມກັນ) ແລະ ແຖວຫົວຖັນເທິງແຖວຂໍ້ມູນ.
- `P`: ຕາຕະລາງຈາກຊ່ອງສະເປຣດຊີດໃນ clipboard (ຂໍ້ຄວາມມີແຖບລະຫວ່າງຊ່ອງ). ກົດ {{key:Ctrl+V}} ເມື່ອມີຊ່ອງດັ່ງກ່າວໃນ clipboard ກໍເຮັດແບບດຽວກັນ, ເວັ້ນເສຍແຕ່ການສຳເນົາຂອງ CadCraft ເອງໃໝ່ກວ່າ (ຫຼື CadCraft ບອກບໍ່ໄດ້: ຈາກນັ້ນມັນວາງສຳເນົາຂອງມັນເອງ ແລະ ບອກ). `F`: ຕາຕະລາງຈາກໄຟລ໌ `.csv` ຫຼື ໄຟລ໌ແຍກດ້ວຍແຖບ. ແຖວທຳອິດກາຍເປັນແຖວຫົວຖັນ; ຄວາມກວ້າງຖັນພໍດີກັບຂໍ້ຄວາມ.
- `S`: ເລືອກຮູບແບບຕາຕະລາງສຳລັບຕາຕະລາງນີ້ (ເບິ່ງ {{cmd:TABLESTYLE}}).
- ມັນປະຕິເສດຈຳນວນແຖວ ຫຼື ຖັນທີ່ບໍ່ແມ່ນຈຳນວນເຕັມ, ແລະ ຈຳນວນຊ່ອງທີ່ຫຼາຍກວ່າທີ່ຕາຕະລາງຈະຖືໄດ້ (2,000 ແຖວ, 200 ຖັນ, 40,000 ຊ່ອງ).
- {{cmd:EXPLODE}} ປ່ຽນຕາຕະລາງເປັນເສັ້ນ ແລະ ຂໍ້ຄວາມ. ບັນທຶກເປັນ DWG ຕາຕະລາງເປັນວັດຖຸຕາຕະລາງແທ້ທີ່ໂປຣແກຣມອື່ນແກ້ໄຂໄດ້; ບັນທຶກເປັນ DXF ມັນເປັນບລັອກທີ່ແຕ້ມມັນ, ແລະ CadCraft ເປີດມັນອີກຄັ້ງເປັນຕາຕະລາງ.

### TABLEDIT

ນາມແຝງ: `TABLEEDIT`, `TABEDIT`; ຫຼື ດັບເບີ້ນຄລິກຊ່ອງ. ແກ້ໄຂຕາຕະລາງ.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. ກົດຊ່ອງ, ຫຼື ເມື່ອຕາຕະລາງຖືກເລືອກ ພິມຊື່ຂອງມັນ (`B3`: ຖັນ B, ແຖວ 3; ແຖວຫົວຂໍ້ແມ່ນແຖວ 1). ໃນບຣາວເຊີ ກ່ອງເປີດທັບຊ່ອງ: {{key:Enter}} ຮັກສາຂໍ້ຄວາມ, {{key:Tab}} ໄປຊ່ອງຕໍ່ໄປ, {{key:Alt+Enter}} ເລີ່ມແຖວໃໝ່, {{key:Esc}} ອອກຈາກຊ່ອງໂດຍຄືເກົ່າ.
- ຂໍ້ຄວາມທີ່ເລີ່ມດ້ວຍ `=` ເປັນສູດ: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, ດ້ວຍ `+ - * / ^`, ວົງເລັບ ແລະ ຟັງຊັນເຊັ່ນ `sqrt` ແລະ `round`. ຊ່ອງສະແດງຄ່າ; ສູດທີ່ຊື່ຊ່ອງຂອງມັນເອງ, ຊ່ອງນອກຕາຕະລາງ ຫຼື ຊ່ອງທີ່ບໍ່ມີຕົວເລກ ຈະສະແດງ `####` ແລະ ແຖວຄຳສັ່ງບອກເຫດຜົນ.
- `R` / `C`: `Insert` ຫຼື `Delete` ແຖວ ຫຼື ຖັນທີ່ຊ່ອງທີ່ເລືອກ (ຈຳນວນເທົ່າໃດ, ແລະ ຢູ່ເທິງ ຫຼື ລຸ່ມ, ຊ້າຍ ຫຼື ຂວາ). ສູດຕາມຊ່ອງທີ່ມັນຊື່.
- `S`: ຄວາມກວ້າງຂອງຖັນ ແລະ ຄວາມສູງຂອງແຖວ. ແຖວບໍ່ເຄີຍຕ່ຳກວ່າທີ່ຂໍ້ຄວາມຕ້ອງການ. ຕາຕະລາງທີ່ເລືອກຍັງມີ grip ທີ່ຂອບຂອງແຕ່ລະຖັນ ແລະ ແຕ່ລະແຖວ.
- `M`: ລວມຈາກຊ່ອງໜຶ່ງທີ່ເລືອກໄປຫາອີກຊ່ອງ; `U`: ແຍກ. `A`: ການຈັດແນວ (`TL` ເທິງຊ້າຍ … `MC` ກາງ … `BR` ລຸ່ມຂວາ). `H`: ຄວາມສູງຂໍ້ຄວາມຂອງຊ່ອງນີ້ເອງ (0 = ຂອງຮູບແບບ). `K`: ເຮັດໃຫ້ແຖວເປັນຫົວຂໍ້, ຫົວຖັນ ຫຼື ແຖວຂໍ້ມູນ. `CL`: ລ້າງຊ່ອງ.
- ມັນປະຕິເສດຕາຕະລາງໃນເລເຢີທີ່ລັອກ, ການລຶບທຸກແຖວ ຫຼື ຖັນ, ແລະ ການລວມທີ່ຈະຕັດຊ່ອງທີ່ລວມກັນອື່ນເປັນສອງ.

### TABLESTYLE

ນາມແຝງ: `TS`. ລາຍການຮູບແບບຕາຕະລາງ ພ້ອມຈຳນວນຕາຕະລາງທີ່ໃຊ້ແຕ່ລະອັນ, ແລ້ວ `Table style: [New/Set/Edit/Delete/Apply]`.

- ຮູບແບບເກັບຄວາມສູງຂໍ້ຄວາມ ແລະ ການຈັດແນວຂອງແຖວຫົວຂໍ້, ຫົວຖັນ ແລະ ຂໍ້ມູນ, ຂອບຊ່ອງ, ແລະ ເສັ້ນຂອບທີ່ຖືກແຕ້ມ (ດ້ານນອກ, ລະຫວ່າງແຖວ, ລະຫວ່າງຖັນ).
- `N` ສ້າງຮູບແບບຈາກປັດຈຸບັນ ແລະ ເຮັດໃຫ້ມັນເປັນປັດຈຸບັນ; `S` ຕັ້ງຮູບແບບປັດຈຸບັນ (ຕາຕະລາງໃໝ່ໄດ້ມັນ); `E` ແກ້ໄຂອັນໜຶ່ງ: ຕາຕະລາງທີ່ໃຊ້ມັນຈະຖືກແຕ້ມໃໝ່; `A` ໃຫ້ຕາຕະລາງທີ່ເລືອກໄດ້ຮູບແບບປັດຈຸບັນ; `D` ລຶບອັນໜຶ່ງ (ບໍ່ແມ່ນ Standard, ບໍ່ແມ່ນອັນປັດຈຸບັນ; ຕາຕະລາງທີ່ເຄີຍໃຊ້ມັນຈະຮັກສາລັກສະນະເດີມ).
- ຮູບແບບຖືກບັນທຶກກັບແບບແຕ້ມ (DWG ແລະ DXF).

### TABLEEXPORT

ບັນທຶກສິ່ງທີ່ຕາຕະລາງສະແດງເປັນໄຟລ໌ CSV (ສູດເປັນຄ່າຂອງມັນ). `Select a table`, ຫຼື ເລືອກໜຶ່ງກ່ອນ. ຂໍ້ຄວາມຊ່ອງທີ່ເລີ່ມດ້ວຍ `=`, `+`, `-` ຫຼື `@` ຈະໄດ້ `'` ນຳໜ້າ ເພື່ອບໍ່ໃຫ້ສະເປຣດຊີດເຮັດວຽກມັນ.

### TABLEPASTE

ນາມແຝງ: `PASTETABLE`. ສ້າງຕາຕະລາງຈາກຊ່ອງສະເປຣດຊີດໃນ clipboard, ແລ້ວຖາມມຸມເທິງຊ້າຍຂອງມັນ. ຄືກັນກັບ {{cmd:TABLE}} › `Paste`.

### DATALINK

ນາມແຝງ: `DL`. `Data link: [New/List/Remove] <New>`. `N` ຖາມໄຟລ໌ CSV, ວາງຕາຕະລາງຂອງມັນ ແລະ ຈື່ຊື່ໄຟລ໌; `L` ລາຍການການເຊື່ອມພ້ອມໄຟລ໌, ຂະໜາດ, ເວລາທີ່ອ່ານ ແລະ ຈຳນວນຕາຕະລາງທີ່ໃຊ້; `R` ລຶບການເຊື່ອມ (ຕາຕະລາງຂອງມັນຢູ່ເປັນຕາຕະລາງທຳມະດາ).

### DATALINKUPDATE

ນາມແຝງ: `DLU`. ອ່ານໄຟລ໌ຂອງ data link ອີກຄັ້ງ ແລະ ເຕີມຕາຕະລາງທີ່ເຊື່ອມກັບມັນ (ແຖວ ແລະ ຖັນຖືກເພີ່ມ ຫຼື ລຶບໃຫ້ກົງກັນ). ບຣາວເຊີບໍ່ສາມາດເປີດໄຟລ໌ເອງໄດ້, ດັ່ງນັ້ນມັນຂໍໃຫ້ທ່ານເລືອກໄຟລ໌ອີກຄັ້ງ. ເມື່ອມີຫຼາຍການເຊື່ອມ ມັນຖາມວ່າອັນໃດ.

### FIELD

ໃສ່ຟີລດ໌ໃນແບບແຕ້ມ: ຂໍ້ຄວາມທີ່ຄຳນວນຕົວເອງ. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: ດຽວນີ້, ຫຼື ວັນທີທີ່ບັນທຶກ, ສ້າງ ຫຼື ພິມ, ແລະ ຮູບແບບ (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: ຊື່ໄຟລ໌, ມີ ຫຼື ບໍ່ມີນາມສະກຸນ. `S`: ເລກແຜ່ນ, ຫົວຂໍ້ຂອງມັນ, ຫຼື ມີກີ່ແຜ່ນ. `P`: ຄຸນສົມບັດຂອງແບບແຕ້ມຕາມຊື່ (ເບິ່ງ {{cmd:DWGPROPS}}). `O`: ເລືອກວັດຖຸ, ແລ້ວສິ່ງທີ່ຈະອ່ານ (ເນື້ອທີ່, ຄວາມຍາວ, ເສັ້ນຮອບ, ລັດສະໝີ, ເສັ້ນຜ່າສູນກາງ, ເລເຢີ, ຊື່, x, y, ຂໍ້ຄວາມ, ການໝຸນ, ສີ) ແລະ ຈຳນວນຕຳແໜ່ງທົດສະນິຍົມ. `E`: ສູດ. `C`: ຂໍ້ຄວາມທີ່ມີລະຫັດພິມຕາມທີ່ມັນເປັນ, ເຊັ່ນ `Sheet %<sheetnumber>% of %<sheetcount>%`.
- ຈາກນັ້ນ `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: ຂໍ້ຄວາມທີ່ເລືອກຈະໄດ້ຟີລດ໌ຕໍ່ທ້າຍສິ່ງທີ່ມັນມີ; ຊ່ອງຕາຕະລາງກໍຄືກັນ; ການອ້າງອີງບລັອກຖາມວ່າຄຸນລັກສະນະໃດ; {{key:Enter}} ຖາມຄວາມສູງ ແລະ ຈຸດສຳລັບຂໍ້ຄວາມໃໝ່.
- ໃນໜ້າຈໍ ຟີລດ໌ມີພື້ນຫຼັງສີເທົາອ່ອນ; ການພິມ ແລະ PDF ບໍ່ມີມັນເລີຍ. ການພິມທັບຂໍ້ຄວາມຂອງຟີລດ໌ດ້ວຍມືຈະສິ້ນສຸດຟີລດ໌. ຟີລດ໌ທີ່ຄຳນວນບໍ່ໄດ້ຈະສະແດງ `####`.
- ຟີລດ໌ຂອງວັດຖຸຊອກວັດຖຸດ້ວຍກຸນແຈທີ່ CadCraft ເກັບໄວ້ໃນວັດຖຸ (Settings › CadCraft › Merge-friendly files); ເມື່ອປິດກຸນແຈ ມັນຈະປະຕິເສດ.

### UPDATEFIELD

ນາມແຝງ: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` ຕັ້ງວ່າເມື່ອໃດຟີລດ໌ຈະອັບເດດເອງ: ພິມຕົວອັກສອນຂອງ `O` ເປີດ, `S` ບັນທຶກ, `P` ພິມ, `R` ສ້າງຄືນ (ທັງສີ່ເພື່ອເລີ່ມ), ຫຼື `NONE`.

### DWGPROPS

ນາມແຝງ: `DRAWINGPROPS`. ລາຍການຄຸນສົມບັດຂອງແບບແຕ້ມ, ແລ້ວ `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. ຫົກອັນທຳອິດແມ່ນສິ່ງທີ່ແຜງ {{ui:Drawing details}} ສະແດງ; `U` ເພີ່ມຊື່ ແລະ ຄ່າຂອງທ່ານເອງ, `R` ລຶບອັນໜຶ່ງ. ຟີລດ໌ອ່ານພວກມັນ (`%<prop:title>%`, `%<prop:Client>%`) ແລະ ຕາມທັນທີ. ມັນປະຕິເສດຊື່ທີ່ກຳນົດເອງທີ່ເປັນໜຶ່ງໃນຊື່ໃນຕົວ ຫຼື ມີ `%`, `<`, `>`, ເຄື່ອງໝາຍຄຳພົດ ຫຼື ແບັກສະແລ໊ດ.

## ແບບພາລາມິເຕີ

ເບິ່ງ [Constrain a drawing](topic:constraints) ແລະ [Use parameters and equations](topic:parameters). ຂໍ້ຈຳກັດເຮັດວຽກຢູ່ແທັບ {{ui:Model}}.

### GEOMCONSTRAINT and the GC commands

ນາມແຝງ `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, ແລ້ວຄຳຖາມຂອງຄຳສັ່ງນັ້ນ.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (ອັນທີສອງຈະຍ້າຍ).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT and the DC commands

ນາມແຝງ `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (ຕົວເລກ, ສູດ, ຫຼື `name=expression`).
- {{cmd:DCALIGNED}}: ຄືກັບຂ້າງເທິງ, ດ້ວຍ `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` ຖາມຄວາມເພ້ຍຂອງໄລຍະ ແລະ ມຸມ.
- {{cmd:DELCONSTRAINT}} (ນາມແຝງ `DELCON`): `Select objects`; ຂໍ້ຈຳກັດຂອງພວກມັນຈະຫາຍໄປ.
- {{cmd:CONSTRAINTBAR}} (ນາມແຝງ `CBAR`): `Select objects [Showall/Hideall]`, ແລ້ວ `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (ນາມແຝງ `PAR`, `PARAM`) ເປີດແຜງ {{ui:Parameters}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

ນາມແຝງ `SWMACRO`. ດາວໂຫລດ macro (.swb) ທີ່ສ້າງແບບຄືນເປັນ sketch ດຽວທີ່ມີຂໍ້ຈຳກັດໃນ SolidWorks. ເບິ່ງ [Move sketches to and from other part modelers](topic:solidworks-sketches).

## ບລັອກ

### ANNOSCALE

ນາມແຝງ: `CANNOSCALE`. ບອກມາດຕາສ່ວນການໝາຍຄຳອະທິບາຍຂອງແບບແຕ້ມ ແລະ ມີວັດຖຸ annotative ຈັກອັນ, ແລ້ວຖາມ `New annotation scale`: ພິມ `1:50`, `1:100`, `2:1`, ຕົວເລກເປົ່າ (`50` ແມ່ນ 1:50) ຫຼື ຊື່ຂອງມາດຕາສ່ວນໜຶ່ງຂອງແບບແຕ້ມ. ທຸກຂໍ້ຄວາມ ແລະ ຂະໜາດ annotative ຖືກປັບຂະໜາດເພື່ອໃຫ້ພິມອອກໃນຂະໜາດດຽວກັນທີ່ມາດຕາສ່ວນໃໝ່, ໃນໜຶ່ງ undo step; ວັດຖຸທີ່ບໍ່ແມ່ນ annotative ຄົງເດີມ, ແລະ ວັດຖຸທີ່ເກັບລາຍການມາດຕາສ່ວນໂດຍບໍ່ມີອັນໃໝ່ກໍຄືກັນ ({{cmd:OBJECTSCALE}}). ເບິ່ງ [Units, papers and scales](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

ນາມແຝງ: `OBJSCALE`. `Select annotative objects`, ແລ້ວ `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. ຂໍ້ຄວາມ ຫຼື ຂະໜາດ annotative ເກັບລາຍການມາດຕາສ່ວນການໝາຍ. `Add` ແລະ `Delete` ຖາມມາດຕາສ່ວນ (`1:50`, `2:1`, ຕົວເລກເປົ່າ, ຫຼື ຊື່ຂອງມາດຕາສ່ວນໜຶ່ງຂອງແບບແຕ້ມ); `Current scale` ເພີ່ມມາດຕາສ່ວນການໝາຍຂອງແບບແຕ້ມ; `List` ພິມມາດຕາສ່ວນຂອງແຕ່ລະວັດຖຸ. viewport ທີ່ມາດຕາສ່ວນຢູ່ໃນລາຍການຂອງວັດຖຸຈະສະແດງວັດຖຸໃນຂະໜາດທີ່ພິມຄວາມສູງກະດາດຂອງມັນໃນມາດຕາສ່ວນນັ້ນ, ໃນໜ້າຈໍ ແລະ ການພິມ. ມາດຕາສ່ວນສຸດທ້າຍລຶບບໍ່ໄດ້. ວັດຖຸທີ່ບໍ່ແມ່ນ annotative ຈະຖືກຂ້າມ: ເປີດ Annotative ໃນ Properties ກ່ອນ. ລາຍການຖືກບັນທຶກໃນ DWG ແລະ DXF ເປັນຂໍ້ມູນຂອງ CadCraft ເອງ. ເບິ່ງ [Units, papers and scales](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

ນາມແຝງ: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. ເປີດ (ເມື່ອແບບແຕ້ມເລີ່ມ): ວັດຖຸ annotative ຍັງສະແດງໃນ viewport ຫຼື ໃນແບບ ທີ່ມາດຕາສ່ວນບໍ່ຢູ່ໃນລາຍການຂອງມັນ, ໃນຂະໜາດທີ່ມັນມີ. ປິດ: ມັນບໍ່ສະແດງບ່ອນນັ້ນ ແລະ ເລືອກບໍ່ໄດ້ໃນແບບ. ການສະຫຼັບເປັນໜຶ່ງ undo step; ມັນບໍ່ຖືກເກັບໃນໄຟລ໌.

### SCALELISTEDIT

ນາມແຝງ: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` ຈົນກວ່າຈະກົດ {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit ແລະ Delete ຖາມຊື່ຂອງມາດຕາສ່ວນ. ມາດຕາສ່ວນຂອງແບບແຕ້ມເອງເຂົ້າໄປໃນລາຍການມາດຕາສ່ວນ viewport ແລະ ການພິມ ແລະ ຖືກບັນທຶກກັບແບບແຕ້ມ. ເບິ່ງ [Units, papers and scales](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: ຈຸດທີ່ເສັ້ນໂຄ້ງຜ່ານ; `Close`, `Undo`, ແລ້ວ `Start tangent` ແລະ `End tangent` (ຈຸດ, ຫຼື {{key:Enter}}). Method › Control vertices ຖາມດີກຣີ (1 ຫາ 5) ແລະ ແຕ້ມຈາກໂພລີກອນຄວບຄຸມ. Object ປ່ຽນໂພລີລາຍເປັນ spline ຜ່ານຈຸດຂອງມັນ. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` ສຳລັບຫຼາຍວັດຖຸ; ເສັ້ນ, ເສັ້ນໂຄ້ງ ແລະ spline ຖືກສະເໜີເປັນໂພລີລາຍກ່ອນ. ເບິ່ງ [Splines and polylines](topic:splines).

### BLOCK

ນາມແຝງ: `B`, `BMAKE`.

- `Enter block name`. ຖ້າມີຢູ່ແລ້ວ: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. ພວກມັນຖືກແທນທີ່ດ້ວຍການອ້າງອີງດຽວໄປຫາບລັອກໃໝ່.

### WBLOCK

ນາມແຝງ: `W`, `-WBLOCK`. ຂຽນບລັອກ, ບາງວັດຖຸ ຫຼື ທັງແບບແຕ້ມເປັນໄຟລ໌ DWG ຫຼື DXF ໃໝ່. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ມັນກາຍເປັນຈຸດເລີ່ມຂອງແບບແຕ້ມໃໝ່), `Select objects`, ແລ້ວ `File format [DWG/DXF/R12 DXF]` ແລະ `File name for the new drawing`, ແລ້ວ `What to do with the objects [Retain/Convert to block/Delete]`. Convert ແທນທີ່ພວກມັນດ້ວຍການອ້າງອີງດຽວໄປຫາບລັອກທີ່ມີຊື່ຂອງໄຟລ໌; Delete ລຶບພວກມັນ.
- **Block**: `Block to write out`. ວັດຖຸຂອງບລັອກເອງ, ໂດຍມີຈຸດຖານເປັນຈຸດເລີ່ມ, ລວມທັງບລັອກທີ່ຊ້ອນກັນ.
- **Entire drawing**: ທຸກວັດຖຸໃນພື້ນທີ່ແບບ. ແຜ່ນບໍ່ຖືກຂຽນ; ໃຊ້ {{cmd:SAVEAS}} ສຳລັບສຳເນົາທີ່ເກັບແຜ່ນໄວ້.

ໄຟລ໌ໃໝ່ມີພຽງເລເຢີ, ປະເພດເສັ້ນ, ຂໍ້ຄວາມ ແລະ ຮູບແບບຂະໜາດ ແລະ ບລັອກທີ່ວັດຖຸຂອງມັນໃຊ້, ແລະ ຫົວໜ່ວຍຂອງແບບແຕ້ມ. ເວີຊັນຂອງ DWG ແມ່ນອັນທີ່ {{cmd:SAVEAS}} ໃຊ້ຄັ້ງສຸດທ້າຍ. ໃນບຣາວເຊີ ໄຟລ໌ຖືກດາວໂຫລດ; ໃນ Studio ກ່ອງບັນທຶກຈະເປີດ.

### ATTDEF

ນາມແຝງ: `ATT`, `DDATTDEF`, `-ATTDEF`; ຫຼື {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. ພິມໂໝດ, ແລ້ວ `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` ເມື່ອເປັນ constant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} ເອານິຍາມຄຸນລັກສະນະເຂົ້າໃນບລັອກ.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, ຫຼື ດັບເບີ້ນຄລິກການອ້າງອີງທີ່ມີຄຸນລັກສະນະ; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, ແລ້ວກ່ອງໂຕ້ຕອບ {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): ການອ້າງອີງດຽວກັນ, ແລ້ວ `<prompt> (<TAG>) <value>` ສຳລັບແຕ່ລະຄຸນລັກສະນະ; {{key:Enter}} ຮັກສາຄ່າ. ເບິ່ງ [Attributes](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. ຄ່າຖືກຮັກສາ; ຄຸນລັກສະນະໃໝ່ໄດ້ຄ່າເລີ່ມຕົ້ນຂອງມັນ, ອັນທີ່ຖືກລຶບອອກຈະຫາຍໄປ, ຕຳແໜ່ງຖືກຕັ້ງຄືນ.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. ກ່ອງໂຕ້ຕອບ: ບລັອກ, ຄຸນລັກສະນະ (tag, prompt, ຄ່າເລີ່ມຕົ້ນ, ໂໝດ, ລຳດັບ), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT and REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (ຫຼື ການເລືອກ). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Save the block}} ແລະ {{ui:Discard}} ໃນແຖບເຮັດສິ່ງດຽວກັນ. ການແກ້ໄຂທັງໝົດເປັນໜຶ່ງ undo step. ເບິ່ງ [Attributes](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT and BCLOSE

`BE`; ຫຼື {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` ເປີດຕົວແກ້ໄຂບລັອກ. `BCLOSE` ຖາມ `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Save block}} ແລະ {{ui:Discard changes}} ໃນແຖບຂອງມັນເຮັດສິ່ງດຽວກັນ. ທຸກຢ່າງທີ່ເຮັດໃນຕົວແກ້ໄຂເປັນໜຶ່ງ undo step.

### VIEWBASE

ນາມແຝງ: `FLATSHOT`. ມຸມມອງ 2D ແບບແບນຂອງ solid ຢູ່ແທັບ 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, ມາດຕາສ່ວນ (`1:20`, `2:1`; {{key:Enter}} ເອົາອັນທີ່ພໍດີກັບແຜ່ນ), ແລ້ວຈຸດກາງຂອງມຸມມອງ. ເປັນການອ້າງອີງບລັອກດຽວ, ຂອບທີ່ເຫັນຢູ່ VIEW-VISIBLE, ແລະ ອັນທີ່ຊ່ອນເປັນເສັ້ນປະຢູ່ VIEW-HIDDEN. ເບິ່ງ [Flat views on a sheet](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

ນາມແຝງ: `-PUBLISH`; ຫຼື {{ui:All sheets in one PDF}} ໃນກ່ອງໂຕ້ຕອບ {{ui:Plot to PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} ພິມທຸກແຜ່ນ, `S` ຖາມຊື່ທີ່ແຍກດ້ວຍຈຸລະພາກ. PDF ໜຶ່ງ, ໜ້າ ແລະ ບຸກມາກຕໍ່ແຜ່ນ. ເບິ່ງ [Every sheet in one PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

ນາມແຝງ: `SSM`, `SHEETSETMANAGER`. ພາທ່ານໄປຫາພາກ {{ui:Sheet set}} ຂອງແຜງດ້ານຊ້າຍ: ແຜ່ນຈາກແບບແຕ້ມຈຳນວນຫຼາຍ, ໃສ່ເລກ ແລະ ຊື່, ບລັອກຫົວຂໍ້ຂອງພວກມັນຖືກເຕີມຈາກຊຸດ, ພິມເປັນ PDF ດຽວ. ເບິ່ງ [Sheet sets](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): ເລືອກ DWG ຫຼື DXF, ແລ້ວຈຸດແຊກ. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; ເມື່ອມີຫຼາຍກວ່າໜຶ່ງການເຊື່ອມ, ເລືອກໜຶ່ງໃນການອ້າງອີງຂອງມັນ ຫຼື ພິມ `N` ແລະ ຊື່ຂອງມັນ. ເບິ່ງ [Linked drawings](topic:files#linked-drawings-external-references).

### COUNT

ນາມແຝງ: `BCOUNT`; ຫຼື {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: ການກົດໜຶ່ງເລືອກ ແລະ ນັບທຸກການອ້າງອີງຂອງບລັອກນັ້ນໃນພື້ນທີ່ນີ້; {{key:Enter}} ຫຼື `A` ລາຍການທັງໝົດ; `E` ແລ້ວ `C` (ນັບ) ຫຼື `A` (ຄຸນລັກສະນະ) ດາວໂຫລດ CSV. ເບິ່ງ [Count blocks and export a schedule](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

ນາມແຝງ: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (ຕົວພິມໃຫຍ່ນ້ອຍບໍ່ສຳຄັນ). `F` ຖາມ DWG ຫຼື DXF, ແລ້ວແບບແຕ້ມທັງໝົດ ຫຼື ໜຶ່ງໃນບລັອກຂອງມັນ; ຊື່ທີ່ໃຊ້ແລ້ວຈະຖາມ {{ui:Keep existing}} ຫຼື {{ui:Rename}}. `L` ເປີດແຜງ library.
- `Specify insertion point [Scale/Rotate]`. `S` ຖາມ `Specify scale factor`, `R` ຖາມ `Specify rotation angle`; ທັງສອງຖືກຈື່ໄວ້.
- ເມື່ອບລັອກຢູ່ຕິດກັບວັດຖຸທີ່ຊ້ຳກັນບ່ອນອື່ນໂດຍບໍ່ມີມັນ, ແຖວໜຶ່ງບອກວ່າມີຈັກບ່ອນທີ່ແນະນຳ ແລະ ພຣອມປ໌ໄດ້ `suGgested` ເພີ່ມຂຶ້ນ: `G` ສະແດງພວກມັນ; ກົດໃກ້ໜຶ່ງເພື່ອວາງບລັອກທີ່ນັ້ນ, `A` ສຳລັບທັງໝົດ, {{key:Enter}} ເພື່ອກັບໄປ. ພວກມັນຮັບການໝຸນຂອງເພື່ອນບ້ານ ແລະ ຄ່າຄຸນລັກສະນະເລີ່ມຕົ້ນ. ແບບແຕ້ມທີ່ມີວັດຖຸເກີນ 20,000 ໃນພື້ນທີ່ເປີດຈະບໍ່ຖືກຄົ້ນຫາ.
- ຈາກນັ້ນ `Enter <prompt> (<TAG>) <default>` ສຳລັບແຕ່ລະຄຸນລັກສະນະທີ່ບລັອກຖາມ. ເບິ່ງ [Block attributes](topic:attributes).

### LIBRARY

ນາມແຝງ: `LIB`. ເປີດແຜງ library: ວາງລາຍການ, ກວດການອັບເດດ, ເຄຣດິດຂອງ library. ບໍ່ມີຄຳຖາມ. ເບິ່ງ [Insert from a file or the library](topic:insert-from-file-and-library).

### STEELMEMBER

ນາມແຝງ: `SMEMBER`; ຫຼື {{ui:3D member}} ໃນແທັບ {{ui:Standard}} ຂອງ library. `Section size <W12x26>` (ຕາມທີ່ແທັບລາຍການ), ແລ້ວ `Start point [Column]` ແລະ `End point`: ອົງປະກອບແຂງໃນແທັບ 3D ລະຫວ່າງສອງຈຸດ, ຕັ້ງຢູ່ເທິງພື້ນ. `C` ຖາມຈຸດຖານຂອງເສົາ ແລະ ຄວາມສູງຂອງມັນ. ໜຶ່ງ undo step. ເບິ່ງ [Place steel sections and standard parts](topic:steel-and-standard-parts).

### PARTSLIST

ນາມແຝງ: `PLIST`. `Top left corner of the parts list`, ແລ້ວ `Text height <2.5>`: ແຕ້ມຕາຕະລາງຂອງທຸກຊິ້ນສ່ວນມາດຕະຖານ ແລະ ໜ້າຕັດເຫຼັກທີ່ວາງຈາກ library (ເລກລຳດັບ, ຈຳນວນ, ຊິ້ນສ່ວນ, ມາດຕະຖານ, ຂະໜາດ, ຄວາມຍາວ, ວັດສະດຸ, ມວນ). ໜຶ່ງ undo step. ເບິ່ງ [Place steel sections and standard parts](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

ນາມແຝງ: `PU`. ລຶບນິຍາມບລັອກທີ່ບໍ່ມີຫຍັງໃຊ້. ບໍ່ມີຄຳຖາມ.

### DELBLOCKS

ຫຼື {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: ເລືອກການອ້າງອີງບລັອກ, ຫຼື `N` ສຳລັບລາຍການບລັອກພ້ອມຕົວກອງ (ເລືອກຫຼາຍອັນໄດ້), ຫຼື `X` / {{key:Enter}} ເພື່ອຈົບ. ທຸກການອ້າງອີງຖືກລຶບ — ໃນແບບ, ໃນທຸກແຜ່ນ ແລະ ຢູ່ໃນບລັອກອື່ນ — ແລ້ວນິຍາມ, ແລະ ແຖວຄຳສັ່ງບອກວ່າລຶບຫຍັງ ແລະ ອັນໃດລຶບບໍ່ໄດ້. ບລັອກທີ່ບໍ່ມີຊື່ ແລະ ແບບແຕ້ມທີ່ເຊື່ອມບໍ່ຖືກສະເໜີ. ຄຳຖາມກັບມາສຳລັບບລັອກຕໍ່ໄປ; ຄຳສັ່ງທັງໝົດເປັນໜຶ່ງ undo step.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} ວາງສິ່ງທີ່ທ່ານສຳເນົາ ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) ເປັນບລັອກດຽວ: ເລືອກຈຸດແຊກ ແລະ ການອ້າງອີງໜຶ່ງໄປຫາບລັອກໃໝ່ຈະໄປບ່ອນນັ້ນ, ຖືກເລືອກ. ບລັອກໄດ້ຊື່ຂອງມັນເອງ (`A$C` ແລະ ເລກ); {{cmd:RENAME}} ໃຫ້ຊື່ຂອງທ່ານ. ໜຶ່ງ undo step ລຶບການອ້າງອີງ ແລະ ບລັອກ.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} ຖາມບລັອກທີ່ຈະແທນ ແລະ ບລັອກທີ່ຈະໃສ່ແທນ (`?` ລາຍການບລັອກ), ແລ້ວປ່ຽນທຸກການອ້າງອີງໃນແບບ, ໃນທຸກແຜ່ນ ແລະ ຢູ່ໃນບລັອກອື່ນ. ແຕ່ລະການອ້າງອີງຮັກສາຕຳແໜ່ງ, ມາດຕາສ່ວນ, ການໝຸນ, ເລເຢີ ແລະ ຄ່າຄຸນລັກສະນະທີ່ທັງສອງບລັອກມີ; ຄຸນລັກສະນະທີ່ມີແຕ່ໃນບລັອກໃໝ່ເລີ່ມດ້ວຍຄ່າເລີ່ມຕົ້ນ, ແລະ ມັນບອກວ່າຄ່າໃດຖືກຍົກເລີກ. ເມື່ອບໍ່ມີຫຍັງໃຊ້ບລັອກເກົ່າແລ້ວ ມັນສະເໜີໃຫ້ລຶບອອກ. ມັນປະຕິເສດແບບແຕ້ມທີ່ເຊື່ອມ ແລະ ການແທນທີ່ທີ່ຈະໃສ່ບລັອກໄວ້ໃນຕົວມັນເອງ. ໜຶ່ງ undo step.

### MINSERT

{{cmd:MINSERT}} ວາງບລັອກເປັນແຖວ ແລະ ຖັນ: ຊື່ບລັອກ, ຈຸດແຊກ, ມາດຕາສ່ວນ, ການໝຸນ, ຈຳນວນແຖວ ແລະ ຖັນ, ແລະ ໄລຍະລະຫວ່າງພວກມັນ. ທັງຊຸດໝຸນດ້ວຍການໝຸນ. ແຕ່ລະອັນເປັນການອ້າງອີງຂອງຕົນເອງ (ສູງສຸດ 10,000), ດັ່ງນັ້ນອັນໃດກໍສາມາດຍ້າຍ ຫຼື ລຶບໃນພາຍຫຼັງໄດ້.

### BLOCKSPALETTE

ນາມແຝງ: `BLOCKSPAL`; ຫຼື {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. ສະແດງແຜງ {{ui:Blocks}} ໂດຍມີເຄີເຊີຢູ່ໃນຕົວກອງຂອງມັນ. ແຕ່ລະບລັອກມີຮູບນ້ອຍ; ອັນທີ່ຖືກວາງຫຼ້າສຸດມາກ່ອນ. ສອງປຸ່ມຂ້າງຕົວກອງສະຫຼັບລະຫວ່າງລາຍການ ແລະ ຕາຕະລາງຮູບ. ກົດຮູບ (ຫຼື {{ui:Insert}}) ເພື່ອວາງບລັອກດ້ວຍ {{cmd:INSERT}}, ຫຼື ລາກມັນໃສ່ແບບແຕ້ມເພື່ອວາງບ່ອນທີ່ທ່ານປ່ອຍ.

{{ui:Libraries}}, ຢູ່ລຸ່ມລາຍການ: {{ui:Add a drawing}} ເອົາໄຟລ໌ DWG ຫຼື DXF ຂອງທ່ານເອງ ແລະ ລາຍການບລັອກຂອງມັນພ້ອມຮູບ, ແລະ ທັງແບບແຕ້ມເປັນບລັອກດຽວ. ການວາງໜຶ່ງອັນສຳເນົານິຍາມຂອງມັນ (ແລະ ບລັອກທີ່ຊ້ອນກັນ, ແລະ ເລເຢີຂອງມັນ) ເຂົ້າໃນແບບແຕ້ມນີ້, ຄືກັບຕົວເລືອກ `File` ຂອງ {{cmd:INSERT}}; ບລັອກທີ່ມີຢູ່ແລ້ວດ້ວຍນິຍາມດຽວກັນຖືກໃຊ້ໂດຍບໍ່ຖາມ, ອັນທີ່ມີຊື່ດຽວກັນແຕ່ຕ່າງກັນຈະຖາມ {{ui:Keep existing}} ຫຼື {{ui:Rename}}. ໃນບຣາວເຊີ ໄຟລ໌ຢູ່ຈົນກວ່າໜ້າຈະປິດ. ໃນ CadCraft Studio {{ui:Add a folder}} ລາຍການແບບແຕ້ມໃນໂຟນເດີ, ແຕ່ລະອັນເປີດເມື່ອທ່ານກົດມັນ, ແລະ ໄຟລ໌ກັບໂຟນເດີຖືກຈື່ໄວ້. ປຸ່ມ x ນ້ອຍເອົາ library ອອກຈາກລາຍການ; ໄຟລ໌ບໍ່ຖືກແຕະຕ້ອງ. {{ui:Library}} ທີ່ໃຊ້ຮ່ວມກັນແມ່ນສິ່ງອື່ນ: ເບິ່ງ [Insert from a file or the library](topic:insert-from-file-and-library).

### BCONVERT

ຫຼື {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. ຊອກຮູບຮ່າງທີ່ຊ້ຳກັນ ແລະ ປ່ຽນທຸກສຳເນົາໃຫ້ເປັນການອ້າງອີງໄປຫາບລັອກດຽວ.

- `Select the objects that repeat, or [Block]`: ວັດຖຸຂອງສຳເນົາໜຶ່ງ. `B` ແທນທີ່ດ້ວຍການຕັ້ງຊື່ບລັອກທີ່ມີຢູ່ແລ້ວ, ເພື່ອຊອກສຳເນົາທີ່ຫຼຸດອອກຂອງວັດຖຸຂອງມັນ.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` ແລະ `P` ສະຫຼັບສິ່ງທີ່ນັບເປັນສຳເນົາ; {{key:Enter}} ຄົ້ນຫາ. ການຕັ້ງຄ່າຖືກຈື່ໄວ້.
- `Name for the new block <Block1>`, ແລ້ວ `Specify the block's base point` ({{key:Enter}} ເອົາມຸມລຸ່ມຊ້າຍຂອງການເລືອກ).
- ມັນບອກວ່າມີຈັກຊຸດວັດຖຸອື່ນທີ່ເປັນຮູບຮ່າງດຽວກັນ, ໄຮໄລຕ໌ທຸກສິ່ງທີ່ມັນຈະແທນ, ແລະ ຖາມ `Yes/No`.

ສຳເນົາແມ່ນວັດຖຸດຽວກັນທີ່ຍ້າຍ ແລະ ໝຸນດ້ວຍມຸມໃດກໍໄດ້ (ແລະ ສະທ້ອນ ຫຼື ປັບຂະໜາດດ້ວຍຕົວຄູນດຽວເມື່ອເປີດຢູ່): ທຸກວັດຖຸຕ້ອງມີຄູ່ຂອງມັນ, ພາຍໃນລ້ານສ່ວນຂອງຂະໜາດການເລືອກ. ແຕ່ລະການອ້າງອີງໄດ້ການໝຸນ ແລະ ມາດຕາສ່ວນຂອງຕົນເອງ (ອັນທີ່ສະທ້ອນໄດ້ມາດຕາສ່ວນ Y ລົບ), ແລະ ເລເຢີທີ່ວັດຖຸຂອງມັນໃຊ້ຮ່ວມກັນ. ວັດຖຸໃນເລເຢີທີ່ລັອກຖືກປະໄວ້ ແລະ ນັບ. ມັນຄົ້ນຫາໃນພື້ນທີ່ເປີດ (ແບບ ຫຼື ແຜ່ນທີ່ເປີດ). ການຄົ້ນຫາທີ່ໃຫຍ່ຫຼາຍຈະຢຸດທີ່ຂີດຈຳກັດການເຮັດວຽກ ແລະ ບອກ. ໜຶ່ງ undo step.

### BSEARCH

ຫຼື {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: ສ່ວນໜຶ່ງຂອງຊື່ບລັອກ, ຫຼື ຮູບແບບທີ່ມີ `*` ແລະ `?`. ລາຍການແຕ່ລະບລັອກພ້ອມການອ້າງອີງຂອງມັນທີ່ນີ້ ແລະ ໃນທັງແບບແຕ້ມ.
- `A`: ຄ່າຄຸນລັກສະນະ, ຫຼື `TAG=value`. ລາຍການບລັອກທີ່ການອ້າງອີງຂອງມັນມີມັນ, ພ້ອມຄ່າທີ່ພົບ. ຄຸນລັກສະນະຄົງທີ່ກໍນັບ.
- `G`: ເລືອກວັດຖຸ, ຫຼື ການອ້າງອີງບລັອກໜຶ່ງ, ແລ້ວບລັອກທີ່ມີຮູບຮ່າງຄ້າຍກັນຢ່າງໜ້ອຍ 85% ຈະຖືກລາຍການ, ເລີ່ມຈາກດີທີ່ສຸດ. ຂະໜາດ, ການໝຸນ ແລະ ການສະທ້ອນບໍ່ນັບ. ການວັດປຽບທຽບໄລຍະລະຫວ່າງຈຸດທີ່ກະຈາຍຕາມຂອບ, ດັ່ງນັ້ນມັນພົບສິ່ງທີ່ເບິ່ງຄ້າຍກັນ; ໃຊ້ {{cmd:BCONVERT}} ເພື່ອພົບສຳເນົາທີ່ຄືກັນທຸກປະການ.

ການອ້າງອີງທີ່ພົບໃນພື້ນທີ່ເປີດຈະຖືກເລືອກ, ພ້ອມສຳລັບຄຳສັ່ງຕໍ່ໄປ.

### BREPLACE

ຫຼື {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` ແທນທີ່ການອ້າງອີງບລັອກທີ່ທ່ານເລືອກດ້ວຍບລັອກທີ່ທ່ານຕັ້ງຊື່; `A` ຖາມບລັອກ ແລະ ອັນທົດແທນ ແລ້ວປ່ຽນທຸກການອ້າງອີງ, ຄືກັບ {{cmd:BLOCKREPLACE}} (ລະຫັດດຽວກັນ). ການອ້າງອີງຮັກສາຕຳແໜ່ງ, ມາດຕາສ່ວນ, ການໝຸນ, ເລເຢີ ແລະ ຄ່າຄຸນລັກສະນະທີ່ທັງສອງບລັອກມີ; ຄ່າທີ່ບລັອກໃໝ່ບໍ່ມີບ່ອນໃຫ້ຈະຖືກຍົກເລີກ ແລະ ຖືກລະບຸຊື່. `?` ລາຍການບລັອກ. ໜຶ່ງ undo step.

### DATAEXTRACTION

ນາມແຝງ: `EATTEXT`, `DX`; ຫຼື {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. ລາຍການບລັອກ, ຄຸນລັກສະນະ ແລະ ຄຸນສົມບັດວັດຖຸຂອງພວກມັນເປັນຕາຕະລາງ ຫຼື ໄຟລ໌ CSV.

- ເຮັດວຽກກັບການເລືອກ, ຫຼື ຖາມ `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` ເມື່ອການເລືອກມີທັງສອງ. ບລັອກທີ່ບໍ່ມີຊື່, ຕາຕະລາງ ແລະ ລາຍການວັດສະດຸບໍ່ເຄີຍຖືກລາຍການ.
- ມັນພິມຖັນທີ່ເລືອກໄດ້ (ຊື່, ປະເພດ, ເລເຢີ, X, Y, ການໝຸນ, ມາດຕາສ່ວນ, ຄວາມຍາວ, ເນື້ອທີ່, ສີ, ປະເພດເສັ້ນ, ພື້ນທີ່, ແລະ ໜຶ່ງອັນຕໍ່ tag ຄຸນລັກສະນະ), ແລ້ວ `Columns, by name or number with commas between`. {{key:Enter}} ເອົາຖັນທີ່ມີດາວ: ຊື່ ແລະ ທຸກຄຸນລັກສະນະສຳລັບບລັອກ; ປະເພດ, ເລເຢີ ແລະ ຄວາມຍາວສຳລັບວັດຖຸ.
- `Put identical rows together with a count? [Yes/No] <Yes>`, ແລ້ວ `Put the list in a: [Table/Csv] <Table>`. ຕາຕະລາງເປັນຕາຕະລາງທຳມະດາ ({{cmd:TABLEDIT}} ແກ້ໄຂມັນ) ແລະ ບໍ່ສົດ: ແລ່ນຄຳສັ່ງອີກຄັ້ງເມື່ອແບບແຕ້ມປ່ຽນ.
- ມັນປະຕິເສດຖັນທີ່ບໍ່ຢູ່ໃນລາຍການ. ຕາຕະລາງຮັບໄດ້ 1,999 ແຖວຂໍ້ມູນ; ໄຟລ໌ CSV ຮັບທັງໝົດ.

### COUNTTABLE

ນັບການອ້າງອີງບລັອກຂອງການເລືອກ (ຫຼື ຂອງພື້ນທີ່ເປີດ) ແລ້ວໃສ່ການນັບໃນຕາຕະລາງ (`Block`, `Count`) ຫຼື ໄຟລ໌ CSV. ສຳລັບການນັບທີ່ຕິດຕາມແບບແຕ້ມເອງ ເບິ່ງ {{cmd:BOMTABLE}}.

## ແຜ່ນ ແລະ ການພິມ

### LAYOUT

ນາມແຝງ: `LO`, `NEWLAYOUT`; ຫຼື ປຸ່ມ {{ui:+}} ຢູ່ລຸ່ມແບບແຕ້ມ. ແຜ່ນໃໝ່ມີຂອບ, ບລັອກຫົວຂໍ້ ແລະ viewport ດຽວ, ຢູ່ ISO A3 (ຫຼື Tabloid ສຳລັບແບບແຕ້ມເປັນນິ້ວ ຫຼື ຟຸດ). ບໍ່ມີຄຳຖາມ.

### MVIEW

ນາມແຝງ: `MV`. ຢູ່ແຜ່ນເທົ່ານັ້ນ ({{cmd:VPORTS}} ຢູ່ແຜ່ນກໍເຮັດແບບດຽວກັນ).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. viewport ສະແດງທັງແບບໃນມາດຕາສ່ວນມາດຕະຖານ.
- `P` (Polygonal): ກົດມຸມຂອງຮູບຮ່າງ (`Undo`, `Close`), {{key:Enter}} ເມື່ອສຳເລັດ. ມັນປະຕິເສດໜ້ອຍກວ່າສາມມຸມ.
- `O` (Object): `Select a closed object for the viewport's outline`: ໂພລີລາຍປິດ, ວົງມົນ ຫຼື ellipse ຢູ່ແຜ່ນ. viewport ເອົາຮູບຮ່າງຂອງມັນ (ເສັ້ນໂຄ້ງເປັນສ່ວນເສັ້ນຊື່ສັ້ນ); ວັດຖຸຢູ່ຄືເກົ່າ. ມັນປະຕິເສດວັດຖຸທີ່ບໍ່ປິດ.

### VPCLIP

ຕັດ viewport ທີ່ຢູ່ແຜ່ນແລ້ວ. `Select viewport to clip` (ຫຼື ເລືອກມັນກ່ອນ), ແລ້ວ `Select the object to clip to [Polygonal/Delete]`:

- ກົດໂພລີລາຍປິດ, ວົງມົນ ຫຼື ellipse, ຫຼື {{key:Enter}} (ຫຼື `P`) ເພື່ອກົດມຸມຂອງໂພລີກອນ.
- `D` (Delete, ສະເໜີເມື່ອ viewport ຖືກຕັດ) ເຮັດໃຫ້ມັນເປັນສີ່ຫຼ່ຽມອີກຄັ້ງ: ກ່ອງອ້ອມຮູບຮ່າງທີ່ມັນເຄີຍມີ.
- ສິ່ງທີ່ viewport ສະແດງບໍ່ຍ້າຍເທິງເຈ້ຍ, ແລະ ມາດຕາສ່ວນຂອງມັນຢູ່ຄືເກົ່າ. ແບບຖືກແຕ້ມ ແລະ ພິມພຽງແຕ່ໃນຮູບຮ່າງ, ແລະ ຂອບຕາມມັນ. ໜຶ່ງ undo step.
- viewport ທີ່ຖືກຕັດມີ grip ທີ່ແຕ່ລະມຸມຂອງຮູບຮ່າງ, ນອກຈາກຈຸດກາງ ແລະ ສີ່ມຸມຂອງກ່ອງ (ການລາກມຸມກ່ອງຢືດຮູບຮ່າງໄປນຳ). Properties ສະແດງ Outline: Rectangle, ຫຼື Clipped ພ້ອມຈຳນວນມຸມ.
- ໄຟລ໌ DWG ແລະ DXF 2000 ເກັບຮູບຮ່າງໄວ້ສຳລັບ CadCraft. ໂປຣແກຣມອື່ນເປີດ viewport ເປັນສີ່ຫຼ່ຽມຮອບມັນ; DXF R12 ເກັບພຽງແຕ່ສີ່ຫຼ່ຽມ.
- ໃນແທັບແບບ ມັນບອກວ່າ viewport ຢູ່ແຜ່ນ.

### VPORTS

ນາມແຝງ: `VIEWPORTS`. {{cmd:SPLIT}} ຄືກັນຈາກແຜ່ນເຊັ່ນກັນ, ແລະ {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} ແລ່ນມັນ. ໃນແບບ: `Enter number of panes [SIngle/2/3/4] <3>`; `2` ຖາມ `[Horizontal/Vertical] <Vertical>` (Vertical = ຢູ່ຂ້າງກັນ), `3` ຖາມ `[Left/Right] <Right>` (ບານໃຫຍ່ຢູ່ໃສ). ແຕ່ລະບານຮັກສາມຸມມອງ ແລະ ພື້ນທີ່ຂອງຕົນເອງ; ການກົດເຮັດໃຫ້ບານເປັນບານທີ່ໃຊ້ຢູ່. ຢູ່ແຜ່ນມັນແມ່ນ {{cmd:MVIEW}}. ເບິ່ງ [Split the screen](topic:split-screen).

### VPVIEW

ບໍ່ມີນາມແຝງ. ຢູ່ແຜ່ນເທົ່ານັ້ນ.

- `Select viewport` (ຂ້າມໄປຖ້າມີໜຶ່ງຖືກເລືອກ), ແລ້ວໃນແບບ: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

ບໍ່ມີນາມແຝງ. ລະບົບພິກັດຂອງທ່ານເອງ; ບໍ່ແມ່ນການແກ້ໄຂ. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: ຈຸດເປັນຈຸດເລີ່ມໃໝ່, ແລ້ວ `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: ຈຸດເລີ່ມ, ຈຸດໜຶ່ງເທິງແກນ X ບວກ, ຈຸດໜຶ່ງເທິງດ້ານ Y ບວກ. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` ແລະ ຊື່. ມຸມມອງໝຸນໃຫ້ແກນ X ໃໝ່ຢູ່ລະດັບ. ເບິ່ງ [Turn the view and use your own coordinates](topic:ucs-and-turned-view).

### PLAN

ບໍ່ມີນາມແຝງ. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: ໝຸນມຸມມອງຂອງບານທີ່ໃຊ້ຢູ່ ເພື່ອໃຫ້ແກນ X ຂອງ UCS (ຫຼື ຂອງໂລກ) ຢູ່ລະດັບ. ບໍ່ມີສິ່ງໃດໃນແບບຍ້າຍ.

### TURNLEFT, TURNRIGHT, TURNWORLD

ບໍ່ມີນາມແຝງ; ຫຼື {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. ຄືກັນກັບ `UCS Z -90`, `UCS Z 90` ແລະ `UCS W`, ໂດຍມຸມມອງຕາມ.

### VPLAYER

ບໍ່ມີນາມແຝງ. ຢູ່ແຜ່ນ, ຫຼື ພາຍໃນ viewport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` ຖາມຊື່ເລເຢີ (ຄັ່ນດ້ວຍຈຸລະພາກ, ຕົວແທນ `*` ແລະ `?`), ແລ້ວ viewport `[All/Select/Current] <Current>`; Reset ໃສ່ແຕ່ລະເລເຢີກັບໄປຄ່າເລີ່ມຕົ້ນ "ແຊ່ແຂງໃນ viewport ໃໝ່"; `V` ຕັ້ງຄ່າເລີ່ມຕົ້ນນັ້ນ (`[Frozen/Thawed]`), ທີ່ {{cmd:MVIEW}} ໃຊ້. `?` ລາຍການເລເຢີທີ່ແຊ່ແຂງໃນ viewport ປັດຈຸບັນ. ຖັນ viewport ຂອງແຜງເລເຢີເຮັດແບບດຽວກັນສຳລັບ viewport ດຽວ. ເບິ່ງ [Freeze a layer in one viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

ນາມແຝງ: `MS`; ຫຼື ດັບເບີ້ນຄລິກພາຍໃນ viewport. ຢູ່ແຜ່ນເທົ່ານັ້ນ. ເຮັດວຽກກັບແບບຜ່ານ viewport: ອັນທີ່ຖືກເລືອກ, ອັນດຽວໃນແຜ່ນ, ຫຼື `Click inside the viewport to work in`. ການເລື່ອນ ແລະ ຊູມພາຍໃນປ່ຽນມຸມມອງຂອງ viewport (viewport ທີ່ລັອກການສະແດງຜົນຈະຮັກສາມັນ ແລະ ແຜ່ນຈະຍ້າຍແທນ); ມຸມມອງໃໝ່ຖືກບັນທຶກເປັນໜຶ່ງ undo step. ເບິ່ງ [Work on the model through a viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

ນາມແຝງ: `PS`; ຫຼື ດັບເບີ້ນຄລິກນອກ viewport, ຫຼື ກົດແທັບໃຕ້ແບບແຕ້ມ. ກັບໄປແຜ່ນ.

### PLOT

ນາມແຝງ: `PRINT`, `PUBLISH`, `EXPORTPDF`; ຫຼື {{key:Mod+P}}. ເປີດກ່ອງໂຕ້ຕອບ {{ui:Plot to PDF}}. ເບິ່ງ [Plot to PDF](topic:plot-pdf).

### PLOTSTYLES

ນາມແຝງ: `STYLESMANAGER`, `PSTABLES`; ຫຼື {{ui:Edit tables…}} ໃນກ່ອງໂຕ້ຕອບ {{ui:Plot to PDF}}. ເປີດ {{ui:Plot style tables}}: ແຕ່ລະສີພິມອອກເປັນຫຍັງ (ສີ, ເທົາ, ໝຶກ, ຄວາມໜາເສັ້ນ), ເກັບໄວ້ກັບແບບແຕ້ມ. ເບິ່ງ [Plot style tables](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} ຍ້າຍວັດຖຸລະຫວ່າງແຜ່ນ ແລະ ແບບຜ່ານ viewport, ປັບຂະໜາດ ແລະ ໝຸນໃຫ້ເບິ່ງຄືກັນຈາກອີກດ້ານ. ຢູ່ແຜ່ນ, ເລືອກວັດຖຸແລ້ວພວກມັນໄປຫາແບບ (ເລືອກ viewport ເມື່ອແຜ່ນມີຫຼາຍອັນ). ໃນຂະນະທີ່ທ່ານເຮັດວຽກໃນແບບຜ່ານ viewport ({{cmd:MSPACE}}), ວັດຖຸທີ່ເລືອກມາຫາແຜ່ນ. ມັນບອກວ່າພວກມັນໃຫຍ່ ຫຼື ນ້ອຍຂຶ້ນກີ່ເທົ່າ. Viewport ຢູ່ແຜ່ນຂອງມັນ. ໜຶ່ງ undo step.

### ISODRAFT

{{cmd:ISODRAFT}} ເປີດການຮ່າງ isometric `ON` ຫຼື `OFF`, ຫຼື ໄປຍົນ `Left`, `Top` ຫຼື `Right` ໂດຍກົງ. ໃນຂະນະທີ່ເປີດ: Ortho ({{key:F8}}) ຮັກສາເສັ້ນຕາມສອງແກນຂອງຍົນ (ຊ້າຍ: 90° ແລະ 150°; ເທິງ: 30° ແລະ 150°; ຂວາ: 30° ແລະ 90°), polar tracking ({{key:F10}}) ຕາມແກນດຽວກັນ, snap ໃສ່ຕາຕະລາງ ({{key:F9}}) ໃຊ້ຕາຕະລາງ isometric, ແລະ ຕາຕະລາງ ({{key:F7}}) ຖືກແຕ້ມດ້ວຍເສັ້ນທີ່ 30°, 90° ແລະ 150°. {{cmd:ELLIPSE}} ໄດ້ `Isocircle` ເພີ່ມ: ໃຫ້ຈຸດກາງ ແລະ ລັດສະໝີ (ຫຼື `Diameter`) ແລະ ມັນແຕ້ມ ellipse ທີ່ວົງມົນສະແດງໃນຍົນປັດຈຸບັນ. ແບບແຕ້ມຍັງແບນ: ເຫຼົ່ານີ້ເປັນເຄື່ອງຊ່ວຍສຳລັບການແຕ້ມມຸມມອງຮູບພາບ, ບໍ່ແມ່ນແບບ 3D. ການຕັ້ງຄ່ານີ້ສຳລັບ session ນີ້ ແລະ ບໍ່ຖືກເກັບໄວ້ໃນໄຟລ໌.

### ISOPLANE

{{cmd:ISOPLANE}} ເລືອກຍົນ isometric ທີ່ການແຕ້ມ isometric ເຮັດວຽກ: `Left`, `Top` ຫຼື `Right`. Enter ໄປຍົນຖັດໄປ. ໃນຂະນະທີ່ການຮ່າງ isometric ເປີດຢູ່, {{key:F5}} ເຮັດແບບດຽວກັນໃນກາງຄຳສັ່ງ; ໃນຂະນະທີ່ມັນປິດ, {{key:F5}} ຖືກປະໄວ້ໃຫ້ບຣາວເຊີ.

## ການສອບຖາມ

### CAL

ພິມຜົນຂອງການຄິດໄລ່, ຄືກັບທີ່ມັນຖືກອ່ານຢູ່ທຸກບ່ອນທີ່ພິມຄວາມຍາວ.

- `Expression`: ພິມມັນ, ເຊັ່ນ `12'6"+3/4"` ຫຼື `(24'-0")/3`, ແລ້ວກົດ {{key:Enter}}. CadCraft ພິມ `= 12'-6 3/4"   (150.75 drawing units)`. ເບິ່ງ [Arithmetic in a typed value](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

ນາມແຝງ: `DI`; ຫຼື {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`, `Specify second point`. ພິມໄລຍະ, ມຸມ, Delta X ແລະ Delta Y.

### AREA

ນາມແຝງ: `AA`; ຫຼື {{ui:View}} › {{ui:More}} › {{ui:Area}}. ພິມເນື້ອທີ່ ແລະ ເສັ້ນຮອບ.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - ກົດ ຫຼື ພິມມຸມ; ທີ່ `Specify next point (Enter closes) [Undo]` ກົດ {{key:Enter}} ເພື່ອປິດຮູບຮ່າງ. `U` ເອົາມຸມສຸດທ້າຍຄືນ.
  - {{key:Enter}} ຫຼື `O`, ແລ້ວ `Select object`: ວົງມົນ (ພິມຄວາມຍາວຮອບ), ellipse, ໂພລີລາຍ (ໂພລີລາຍເປີດຖືກປິດດ້ວຍເສັ້ນຊື່ສຳລັບເນື້ອທີ່, ແລະ ຄວາມຍາວຂອງມັນຖືກພິມ) ຫຼື hatch (ຮູຖືກລຶບອອກ).
  - `A` (Add area) ແລະ `S` (Subtract area) ເກັບຜົນລວມແບບແລ່ນ: ຄຳຖາມເລີ່ມດ້ວຍ `(ADD mode)` ຫຼື `(SUBTRACT mode)`, ແຕ່ລະເນື້ອທີ່ຖືກເພີ່ມ ຫຼື ລົບອອກ, ແລະ `Total area = …` ຖືກພິມຫຼັງແຕ່ລະອັນ. ໃນໂໝດເຫຼົ່ານີ້ `O` ເລືອກວັດຖຸຈົນກວ່າຈະກົດ {{key:Enter}}, ແລະ {{key:Enter}} ທີ່ຄຳຖາມທຳອິດຈົບຄຳສັ່ງ.

### MEASUREGEOM

ນາມແຝງ: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; ຫຼັງແຕ່ລະການວັດ ມັນຖາມອີກ, ໂດຍ `eXit` ເປັນຄ່າເລີ່ມຕົ້ນ.

`Quick` ວັດອ້ອມຕົວຊີ້ໃນຂະນະທີ່ທ່ານເຄື່ອນມັນ: ໄລຍະຫາວັດຖຸທີ່ໃກ້ທີ່ສຸດທາງຂວາ, ເທິງ, ຊ້າຍ ແລະ ລຸ່ມ (ຕາມແກນຂອງ UCS ປັດຈຸບັນ), ແຕ້ມໃນຂະນະທີ່ໄປ, ແລະ ມຸມບ່ອນທີ່ສອງຂອງເພື່ອນບ້ານເຫຼົ່ານັ້ນເປັນເສັ້ນຊື່ ແລະ ພົບກັນ. ການກົດຂຽນໄລຍະສີ່ອັນ, ຄວາມກວ້າງ ແລະ ຄວາມສູງທີ່ຊັດເຈນ ແລະ ມຸມໃສ່ປະຫວັດ; Enter ກັບໄປຫາຕົວເລືອກ. ມັນອ່ານສິ່ງທີ່ຢູ່ໃນໜ້າຈໍ.

- `D`: ສອງຈຸດ, ຄືກັບ {{cmd:DIST}}.
- `R`: `Select arc or circle`; ພິມລັດສະໝີ ແລະ ເສັ້ນຜ່າສູນກາງ.
- `A`: ເສັ້ນໂຄ້ງ (ມຸມລວມຂອງມັນ), ເສັ້ນ ແລ້ວເສັ້ນທີສອງ (ມຸມລະຫວ່າງພວກມັນ, ໄປທາງປາຍໄກຂອງພວກມັນ), ຫຼື {{key:Enter}} ແລະ ສາມຈຸດ (ຈຸດຍອດ, ແລ້ວສອງປາຍ).
- `AR`: ຄືກັບ {{cmd:AREA}}, ເນື້ອທີ່ດຽວ.

### ID

ບໍ່ມີນາມແຝງ. `Specify point`; ພິມ X ແລະ Y ຂອງມັນ.

### LIST

ນາມແຝງ: `LI`, `LS`. `Select objects`; ພິມປະເພດ, ເລເຢີ ແລະ ການວັດຫຼັກຂອງແຕ່ລະວັດຖຸ.

### MASSPROP

{{cmd:MASSPROP}} ໃຫ້ຄຸນສົມບັດພາກຕັດຂອງ region ແລະ ວັດຖຸປິດທີ່ທ່ານເລືອກ, ຮວມກັນ: ເນື້ອທີ່, ເສັ້ນຮອບ, ກ່ອງຂອບເຂດ, ຈຸດສູນກາງ, moment of inertia ຕາມແກນ X ແລະ Y ຜ່ານຈຸດເລີ່ມ, product of inertia, ລັດສະໝີ gyration, moment ດຽວກັນຮອບຈຸດສູນກາງ, ແລະ moment ຫຼັກພ້ອມທິດທາງແກນຂອງພວກມັນ. ຮູໃນ region ນັບເປັນຮູ. ຕົວເລກຢູ່ໃນຫົວໜ່ວຍແບບແຕ້ມ ແລະ ແມ່ນຖືກຕ້ອງສຳລັບຮູບຮ່າງທີ່ເຮັດຈາກເສັ້ນ ແລະ ເສັ້ນໂຄ້ງ; ellipse ແລະ spline ຖືກວັດເປັນສ່ວນເສັ້ນຊື່ສັ້ນ, ແລະ ມັນບອກແບບນັ້ນ. ຫຼັງລາຍງານ ມັນຖາມວ່າຈະຂຽນມັນເປັນໄຟລ໌ຂໍ້ຄວາມບໍ. ວັດຖຸທີ່ບໍ່ປິດຖືກປະໄວ້ ແລະ ມັນບອກຈຳນວນ.

## ມຸມມອງ, ໄຟລ໌ ແລະ ອື່ນໆ

### ZOOM

ນາມແຝງ: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. ກົດສອງມຸມສຳລັບໜ້າຕ່າງ. `E`, `A` ຫຼື Enter: ທັງແບບແຕ້ມ.
- `P` (Previous, ຫຼື {{ui:Previous}} ໃນແຖບເຄື່ອງມື) ກັບໄປມຸມມອງກ່ອນ, ເຖິງ 10 ມຸມມອງຕໍ່ແທັບ; ຊຸດຂອງຂັ້ນລໍ້ເລື່ອນ ຫຼື ການເລື່ອນໜຶ່ງຄັ້ງນັບເປັນໜຶ່ງມຸມມອງ.
- ຕົວເລກເຊັ່ນ `2`, `2x` ຫຼື `0.5x` (ຫຼື `S` ແລ້ວຕົວເລກ) ຊູມເຂົ້າ ຫຼື ອອກດ້ວຍຕົວຄູນນັ້ນ ຮອບກາງໜ້າຈໍ.
- `C` ຖາມ `Specify center point` ແລະ `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT and the PDF commands

ນາມແຝງ: `PDFATT` ສຳລັບ {{cmd:PDFATTACH}}, `PDFIM` ສຳລັບ {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} ວາງໜ້າ PDF ໄວ້ໃຕ້ແບບແຕ້ມ (ໄຟລ໌, ໜ້າ, ຈຸດແຊກ, ມາດຕາສ່ວນ, ການໝຸນ); {{cmd:PDFIMPORT}} ປ່ຽນເສັ້ນ, ເສັ້ນໂຄ້ງ, ການຕື່ມ ແລະ ຂໍ້ຄວາມຂອງໜ້າໃຫ້ເປັນວັດຖຸແບບແຕ້ມໃນເລເຢີທີ່ຕັ້ງຊື່ຕາມ PDF, ໃນຂະໜາດຈິງ, ມາດຕາສ່ວນທີ່ພິມ, ຫຼື ປັບຈາກສອງຈຸດ ແລະ ໄລຍະຈິງ. {{cmd:PDFCLIP}} ຕັດ underlay, {{cmd:PDFADJUST}} ຕັ້ງການຈາງ, ຄອນທຣາສ, ຂາວດຳ ຫຼື ປິດມັນ, {{cmd:PDFLAYERS}} ສະຫຼັບເລເຢີຂອງ PDF ເອງ, ແລະ {{cmd:PDF}} ໃຫ້ CadCraft ໄຟລ໌ທີ່ underlay ຂອງແບບແຕ້ມໃຊ້ອີກຄັ້ງ. ເບິ່ງ [PDF underlays](topic:pdf-underlay).

### AUTOCOMPLETE

ນາມແຝງ: `AUTOC`. ການເຕີມອັດຕະໂນມັດຂອງແບບແຕ້ມ: ເມື່ອບໍ່ມີຄຳສັ່ງແລ່ນ, ເງົາສີເທົາສະແດງສິ່ງທີ່ຮູບແບບຂອງແບບແຕ້ມຂອງທ່ານບອກວ່າຈະມາຕໍ່. {{cmd:AUTOCOMPLETE}} ເປີດມັນ `On` ຫຼື `Off` (ຫຼື ການຕັ້ງຄ່າ › CadCraft) ຫຼື `Show` ສິ່ງທີ່ມັນຈະແນະນຳຕອນນີ້. **Tab** ວາດເງົາເປັນໜຶ່ງ undo step, **Esc** ປິດມັນຈົນກວ່າແບບແຕ້ມຈະປ່ຽນ. ມັນພົບສາມສິ່ງໃນວັດຖຸໃໝ່ທີ່ສຸດ: ສຳເນົາຕໍ່ໄປຂອງສິ່ງທີ່ແຕ້ມສອງຄັ້ງຫຼືຫຼາຍກວ່ານັ້ນໃນຂັ້ນເທົ່າກັນ (ເສົາ, ເສົາຄ້ຳ, ຂັ້ນ ແລະ ແນວນອນຂອງບັນໄດ), ຂັ້ນຕໍ່ໄປຂອງບັນໄດໂພລີລາຍ, ແລະ ດ້ານທີ່ຂາດຂອງຫ້ອງ ຫຼື ໂສ້ຝາ. ໃນທ່າມກາງ {{cmd:LINE}} ຫຼື {{cmd:PLINE}} ເງົານັ້ນເປັນ **ຈຸດຕໍ່ໄປ**: ຂັ້ນຕໍ່ໄປຂອງບັນໄດ (ລຸ້ມ, ແນວນອນ, ລຸ້ມ…), ມຸມທີ່ສີ່ຂອງສີ່ຫຼ່ຽມ, ຈຸດທີ່ປິດມັນ, ຫຼື ອີກຂັ້ນທີ່ເທົ່າກັນ. ນຳເຄີເຊີໃກ້ມັນແລ້ວກົດ **Tab**, ຄືກັບວ່າທ່ານກົດຢູ່ບ່ອນນັ້ນ; ດຳເນີນຕໍ່ ຫຼື ກົດ Enter. ຄຳນວນຢູ່ໃນຄອມພິວເຕີນີ້ດ້ວຍກົດ, ໂດຍບໍ່ມີແບບຈຳລອງ.

### AUTOSHEET

ນາມແຝງ: `ASH`. ແຜ່ນທີ່ຈັດຕົວເອງ. {{cmd:AUTOSHEET}} ເອົາຊິ້ນສ່ວນຂອງແບບແຕ້ມ (ມຸມມອງທີ່ມີຊື່ຂອງທ່ານ, ຫຼື ຊິ້ນສ່ວນແຍກຂອງແບບ, ຫຼື ທັງແບບ), ເລືອກຂະໜາດກະດາດ (ຫຼື ອັນທີ່ທ່ານໃຫ້), ໃຫ້ແຕ່ລະຊິ້ນສ່ວນມາດຕາສ່ວນມາດຕະຖານ (ມາດຕາສ່ວນດຽວສຳລັບທຸກອັນ, ຫຼື ອັນໃຫຍ່ທີ່ສຸດທີ່ແຕ່ລະອັນຮັບໄດ້) ແລະ ວາງມຸມມອງເປັນແຖວໃນແຜ່ນໃໝ່ ພ້ອມບລັອກຫົວຂໍ້ ແລະ ຄຳບັນຍາຍ (ຊື່ ແລະ ມາດຕາສ່ວນ) ໃຕ້ແຕ່ລະອັນ. ສິ່ງທີ່ບໍ່ພໍດີໃນແຜ່ນໜຶ່ງຈະໄດ້ແຜ່ນຂອງມັນເອງ. ໜຶ່ງ undo step. ຄຳນວນຢູ່ໃນຄອມພິວເຕີນີ້ດ້ວຍກົດ, ໂດຍບໍ່ມີແບບຈຳລອງ.

### PHOTOSKETCH

ນາມແຝງ: `PSK`. ແປງຮູບຖ່າຍເປັນແບບແຕ້ມ. ເລືອກຮູບຖ່າຍ (JPEG, PNG ຫຼື TIFF) ຂອງແບບຮ່າງດ້ວຍມືໃນແຜ່ນເຈ້ຍ. {{cmd:PHOTOSKETCH}} ຊອກມຸມທັງສີ່ຂອງແຜ່ນ, ຈັດມຸມມອງໃຫ້ຊື່, ເອົາຂະໜາດກະດາດທີ່ທ່ານລະບຸ (`Paper`, ຫຼື ອັນມາດຕະຖານທີ່ໃກ້ທີ່ສຸດ) ແລະ `Scale` ຂອງແບບຮ່າງ (1 : n), ແລ້ວຕາມເສັ້ນປາກກາເປັນເສັ້ນ, ເສັ້ນໂຄ້ງ ແລະ ວົງມົນ, ເລເຢີແຕ່ລະສີປາກກາ (ດຳ, ແດງ, ຟ້າ, ຂຽວ). ຖ້າມັນຊອກຂອບແຜ່ນບໍ່ພົບ ມັນຈະເອົາຮູບທັງໝົດເປັນແຜ່ນ ແລະ ບອກ. ຕົວອັກສອນຖືກປະໄວ້. ໜຶ່ງ undo step. ເຮັດໃນຄອມພິວເຕີນີ້ດ້ວຍການປະມວນຜົນຮູບແບບດັ້ງເດີມ, ບໍ່ມີແບບຈຳລອງ, ບໍ່ມີຫຍັງຖືກສົ່ງໄປບ່ອນໃດ. ເບິ່ງຄຳສັ່ງຮູບທີ່ສະແກນນຳ.

### AUTODIM

ນາມແຝງ: `ADIM`. ໃສ່ຂະໜາດອັດຕະໂນມັດຕາມກົດ. {{cmd:AUTODIM}} ໃສ່ຂະໜາດໃຫ້ວັດຖຸທີ່ເລືອກ (ຫຼື ທັງແບບແຕ້ມ) ຈາກຂອບລະດັບ ແລະ ແນວດິ່ງຂອງພວກມັນ: ໂສ້ຂະໜາດຕາມດ້ານທີ່ທ່ານເລືອກ (`Sides`), ຂະໜາດລວມໜຶ່ງອັນຢູ່ນອກມັນ, ຄວາມກວ້າງຂອງແຕ່ລະຊ່ອງເປີດ (ຊ່ອງວ່າງລະຫວ່າງເສັ້ນຝາທີ່ຢູ່ແນວດຽວກັນ), ເສັ້ນຜ່າສູນກາງສຳລັບແຕ່ລະຂະໜາດຂອງຮູ, ແລະ ດ້ວຍ `Grid` ໄລຍະລະຫວ່າງເສັ້ນຕາຕະລາງ. ຂະໜາດທີ່ມີຢູ່ແລ້ວຈະບໍ່ຖືກສ້າງຊ້ຳ. ໜຶ່ງ undo step. ຄຳນວນຢູ່ໃນຄອມພິວເຕີນີ້ດ້ວຍກົດ, ບໍ່ມີແບບຈຳລອງ.

### GRIDMOVE

ນາມແຝງ: `GM`. ການຍ້າຍເສັ້ນຕາຕະລາງຈະນຳຊຸດໄປນຳ. {{cmd:GRIDMOVE}} ຍ້າຍເສັ້ນຕາຕະລາງ (ເສັ້ນຢູ່ເລເຢີທີ່ຊື່ມີ grid ຫຼື axis) ແລະ ສິ່ງທີ່ແຂວນຢູ່ມັນ: ຝາທີ່ມີປາຍຢູ່ເສັ້ນຈະຍືດຕາມ, ຝາຕາມມັນຍ້າຍທັງອັນ, ເສົາ (ການອ້າງອີງບລັອກ ແລະ ວົງມົນເທິງເສັ້ນ), ຟອງ ແລະ ປ້າຍຂອງມັນຍ້າຍ, ແລະ ຂະໜາດທີ່ຈຸດຂອງມັນຢູ່ເທິງມັນຈະວັດໄລຍະໃໝ່. ໃຫ້ສອງຈຸດ (ນັບສະເພາະສ່ວນທີ່ຂ້າມເສັ້ນ) ຫຼື `Distance`. ໜຶ່ງ undo step ເອົາທັງໝົດຄືນ. ເຮັດດ້ວຍກົດໃນຄອມພິວເຕີນີ້.

### DETAILS

ນາມແຝງ: `DET`. ລາຍລະອຽດທີ່ຊອກຫາທ່ານ. {{cmd:DETAILS}} ຮັກສາລາຍລະອຽດຂອງບໍລິສັດທ່ານເອງ: `Add` ໃສ່ບລັອກຂອງແບບແຕ້ມນີ້ເຂົ້າໃນລາຍການ, `List` ແລະ `Remove` ຈັດການມັນ, ແລະ `Find` ຈັດອັນດັບພວກມັນສຳລັບສິ່ງທີ່ຖືກເລືອກ (ຫຼື ສິ່ງທີ່ທ່ານວາດລ່າສຸດ) ຕາມຄຳໃນເລເຢີ, ຊື່ບລັອກ, ລວດລາຍ hatch ແລະ ໝາຍເຫດຂອງມັນ ທຽບກັບຊື່ ແລະ ໝາຍເຫດຂອງແຕ່ລະລາຍລະອຽດ, ເຊັ່ນ ຫົວປ່ອງຢ້ຽມຊອກເຈົ້າຂອງ ແຜ່ນກັນນ້ຳຂອງທ່ານ. ເລືອກໝາຍເລກ ແລະ ຈຸດເພື່ອວາງມັນ. ດ້ວຍ `Hint` ເປີດ (ຫຼື ການຕັ້ງຄ່າ › CadCraft), ການເລືອກສິ່ງທີ່ລາຍລະອຽດກົງກັນຈະໃສ່ແຖວໜຶ່ງໃນແຖບສະຖານະ. ລາຍການຖືກເກັບໄວ້ໃນບຣາວເຊີນີ້, ໃນຄອມພິວເຕີນີ້, ແລະ ລາຍການນັ້ນແມ່ນອັນທີ່ຖືກຄົ້ນຫາ. `Share` ໃສ່ມັນໃນໂຟນເດີ Documents ຂອງທ່ານດ້ວຍ (`.cadcraft/firm-details.json`, ພ້ອມແບບແຕ້ມຂອງແຕ່ລະບລັອກ): `Pull` ເພີ່ມສິ່ງທີ່ທີມຂອງທ່ານມີ ແລະ ທ່ານບໍ່ມີ, `Push` ເພີ່ມສິ່ງທີ່ທ່ານມີ ແລະ ພວກເຂົາບໍ່ມີ, `Both` ເຮັດທັງສອງ, ແລະ ບໍ່ມີສິ່ງໃດຖືກລຶບອອກຈາກທັງສອງຝ່າຍ. ເປີດໂຟນເດີ Documents ກ່ອນ ({{cmd:DOCUMENTS}}); ເມື່ອໂຟນເດີນັ້ນເປັນໂຟນເດີ Team Cloud Plan, ທັງທີມແບ່ງປັນລາຍການດຽວ. ລາຍການລາຍລະອຽດໃນແຜງ Library ມີປຸ່ມ **Add to my firm's details** ທີ່ໃສ່ມັນໃນລາຍການດຽວກັນ. ເຮັດດ້ວຍຄຳໃນຄອມພິວເຕີນີ້, ບໍ່ມີແບບຈຳລອງ.

### SKETCHFIX

ນາມແຝງ: `SKF`. ແບບຮ່າງດ້ວຍປາກກາກາຍເປັນຮູບຮ່າງທີ່ແນ່ນອນ. ກົດ ແລະ ລາກເສັ້ນແບບອິດສະຫຼະທີລະເສັ້ນ (ປາກກາ, ເມົ້າສ ຫຼື ນິ້ວ), ແລ້ວ Enter. ແຕ່ລະເສັ້ນຖືກອ່ານເປັນເສັ້ນ, ວົງມົນ, ເສັ້ນໂຄ້ງ, ສີ່ຫຼ່ຽມ ຫຼື ໂພລີລາຍ: ເສັ້ນທີ່ເກືອບລະດັບ ແລະ ຕັ້ງສາກຖືກເຮັດໃຫ້ລະດັບ ແລະ ຕັ້ງສາກແທ້, ເສັ້ນມົນປິດຈະກາຍເປັນວົງມົນ, ເສັ້ນປິດທີ່ມີສີ່ມຸມສາກກາຍເປັນສີ່ຫຼ່ຽມ, ແລະ ປາຍຂອງເສັ້ນຖືກດຶງເຂົ້າຫາກັນ ແລະ ໄປຢູ່ເທິງປາຍທີ່ມີຢູ່ແລ້ວໃນແບບແຕ້ມ. ໜຶ່ງ undo step. ເຮັດດ້ວຍກົດໃນຄອມພິວເຕີນີ້, ບໍ່ມີແບບຈຳລອງ.

### SCANATTACH and the scanned-drawing commands

ນາມແຝງ: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} ບໍ່ມີ. ພວກມັນເຮັດວຽກກັບຮູບ, ໜຶ່ງ undo step ແຕ່ລະອັນ. {{cmd:SCANATTACH}} ໃສ່ PNG, JPEG, TIFF (ໜ້າດຽວ ຫຼື ທັງໝົດ) ຫຼື ໜ້າ PDF ທີ່ເປັນຮູບ. {{cmd:SCANSCALE}} ປັບຂະໜາດແຜ່ນຈາກສອງຈຸດທີ່ເລືອກ ແລະ ໄລຍະຈິງ. {{cmd:SCANALIGN}} ຍ້າຍ ແລະ ໝຸນມັນໃຫ້ຕົງກັບສອງຈຸດ (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} ສະແດງມຸມຂອງເສັ້ນຍາວຂອງແຜ່ນ ແລະ ໝຸນແຜ່ນເມື່ອທ່ານ `Accept` ຫຼື ໃຫ້ `Value`. {{cmd:SCANCLEAN}} ເຮັດໃຫ້ມັນເປັນຂາວດຳ (`Threshold` Auto/Adaptive/Level, `Specks`) ແລະ `Run`. {{cmd:SCANCROP}} ເກັບໜ້າຕ່າງໜຶ່ງ. {{cmd:SCANERASE}} ລຶບ `Rectangle`, `Polygon` ຫຼື `Lasso`. {{cmd:SCANTRACE}} ຕາມເສັ້ນ ແລະ ເສັ້ນໂຄ້ງໄປຢູ່ເລເຢີໃໝ່ (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) ແລະ ລາຍງານສິ່ງທີ່ມັນພົບ ແລະ ສິ່ງທີ່ມັນປະໄວ້ເປັນ raster. {{cmd:SCANINFO}} ລາຍການໄຟລ໌ຕົ້ນສະບັບ ແລະ ຂັ້ນຕອນ. {{cmd:RASTERSNAP}} ເປີດ ຫຼື ປິດການ snap ໃສ່ເສັ້ນຂອງແຜ່ນທີ່ສະແກນ. ເບິ່ງຫົວຂໍ້ Scanned drawings and the trace.

### REGEN and REGENALL

ນາມແຝງ: `RE` ສຳລັບ {{cmd:REGEN}}, `REA` ສຳລັບ {{cmd:REGENALL}}. ສ້າງສິ່ງທີ່ແຕ້ມໃນໜ້າຈໍຄືນຈາກແບບແຕ້ມ: {{cmd:REGEN}} ແທັບທີ່ທ່ານກຳລັງເບິ່ງ (ຢູ່ແຜ່ນ, ແບບທີ່ viewport ຂອງມັນສະແດງດ້ວຍ), {{cmd:REGENALL}} ທຸກແທັບ, ທຸກບານໜ້າຈໍແບ່ງ ແລະ ທຸກແບບແຕ້ມທີ່ເປີດ. ໃຊ້ເມື່ອພາບເບິ່ງເກົ່າຫຼັງການປ່ຽນແປງດ້ວຍສະຄຣິບ ຫຼື ແບບໃຫຍ່ຫຼາຍ, ຫຼື ຜູ້ຊ່ວຍແກ້ໄຂແບບແຕ້ມ; ແບບແຕ້ມເອງບໍ່ຖືກແຕະຕ້ອງ, ດັ່ງນັ້ນບໍ່ມີຫຍັງໃຫ້ undo.

### NAMEDVIEW

ນາມແຝງ: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, ແລ້ວຊື່ຂອງມຸມມອງ. `S` ບັນທຶກມຸມມອງໃນໜ້າຈໍ, `W` ໜ້າຕ່າງທີ່ທ່ານເລືອກ, `R` ສະແດງມຸມມອງທີ່ບັນທຶກໄວ້, `D` ລຶບອັນໜຶ່ງ, `?` ລາຍການມຸມມອງຂອງແທັບນີ້. ການບັນທຶກພາຍໃຕ້ຊື່ທີ່ມີຢູ່ແລ້ວຈະແທນທີ່ມັນ; ແຕ່ລະການປ່ຽນແປງເປັນໜຶ່ງ undo step. ມຸມມອງເປັນຂອງແທັບທີ່ມັນຖືກບັນທຶກ. ໄຟລ໌ DWG ແລະ DXF ເກັບມັນໄວ້ (ຕາຕະລາງ VIEW); ມຸມມອງຂອງແຜ່ນຈະກັບມາຢູ່ແຜ່ນທຳອິດ, ເພາະໄຟລ໌ບໍ່ບອກວ່າແຜ່ນໃດ.

### UNDO and REDO

ນາມແຝງ: `U` ສຳລັບ {{cmd:UNDO}}; {{cmd:REDO}} ບໍ່ມີ. ແລະ {{key:Mod+Z}} ແລະ {{key:Mod+Y}}.

### LAYER

ນາມແຝງ: `LA`. ໄປຫາແຜງ {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` ຫຼື ຊື່ (`?` ລາຍການພວກມັນ: Continuous, ອັນຂອງແບບແຕ້ມເອງ, ແລະ DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE ພ້ອມຂະໜາດ `2` (ເຄິ່ງ) ແລະ `X2` (ສອງເທົ່າ)). {{cmd:LWEIGHT}} (`LW`): ຄວາມໜາເສັ້ນສຳລັບວັດຖຸໃໝ່ເປັນ mm, ຫຼື `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): ມາດຕາສ່ວນປະເພດເສັ້ນຂອງແບບແຕ້ມ (undo ໄດ້). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — ຄືກັນກັບປຸ່ມ {{ui:LWT}} ໃນແຖບສະຖານະ. ເບິ່ງ [Line weights and linetypes](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, ແລ້ວຊື່ໃໝ່; ວັດຖຸ ຫຼື ການອ້າງອີງຕາມ. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` ຈົນກວ່າຈະກົດ {{key:Enter}}, ແລ້ວ `Select object on target layer or [Name]` ແລະ `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, ແລ້ວ `Y`: ເລເຢີ ແລະ ທຸກວັດຖຸຢູ່ເທິງມັນຫາຍໄປ (ບໍ່ແມ່ນເລເຢີ 0, DEFPOINTS ຫຼື ເລເຢີປັດຈຸບັນ). ໜຶ່ງ undo step ແຕ່ລະອັນ. ເບິ່ງ [Organize a drawing with layers](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

ເລເຢີໂດຍການເລືອກວັດຖຸ; ຢູ່ໃນເມນູ {{ui:Tools}} ຂອງແຜງ {{ui:Layers}} ກໍໄດ້. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, ແລ້ວ {{key:Enter}}: ເລເຢີອື່ນທັງໝົດປິດ. {{cmd:LAYUNISO}} ເປີດພວກມັນຄືນ. {{cmd:LAYOFF}} ແລະ {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (ຫຼື frozen), ຊ້ຳໄປເລື້ອຍໆ; `U` ເອົາອັນສຸດທ້າຍຄືນ, {{key:Enter}} ຈົບ. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} ເປີດທຸກເລເຢີ, {{cmd:LAYTHW}} ລະລາຍທຸກເລເຢີ. ແຕ່ລະຄຳສັ່ງເປັນໜຶ່ງ undo step. ເບິ່ງ [Organize a drawing with layers](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} ເລີ່ມແບບແຕ້ມທີ່ຫວ່າງ ແລະ {{cmd:OPEN}} ເປີດ DWG ຫຼື DXF, ແຕ່ລະອັນໃນແທັບຂອງມັນເອງເໜືອແບບແຕ້ມ (ແບບແຕ້ມໃໝ່ທີ່ຍັງບໍ່ໄດ້ແຕະຕ້ອງຖືກໃຊ້ແທນແທັບໃໝ່). ການປິດແທັບທີ່ມີການປ່ຽນແປງທີ່ຍັງບໍ່ໄດ້ບັນທຶກຈະຖາມກ່ອນ. ເບິ່ງ [Split the screen](topic:split-screen).

{{cmd:SAVE}} (ນາມແຝງ `QSAVE`, ແລະ {{key:Mod+S}}) ດາວໂຫລດສຳເນົາໃນຮູບແບບຂອງແບບແຕ້ມ: DWG ຖ້າເປີດມາຈາກ DWG, DXF ຖ້າມາຈາກ DXF. ແບບແຕ້ມໃໝ່ໃຊ້ຮູບແບບທີ່ເລືອກຄັ້ງສຸດທ້າຍໃນ Save as ໃນບຣາວເຊີນີ້, ຖ້າບໍ່ມີ ແມ່ນ DWG.

{{cmd:SAVEAS}} (ແລະ {{key:Mod+Shift+S}}) ເປີດກ່ອງໂຕ້ຕອບ {{ui:Save a copy as}}: ເລືອກ {{ui:DWG}} (ແລະ {{ui:Version}} ຂອງມັນ), {{ui:DXF R12}} ຫຼື {{ui:DXF 2000}}, ແລ້ວ {{ui:Save}}. ການເລືອກນັ້ນຄົງຢູ່ສຳລັບແບບແຕ້ມນີ້ ແລະ ສຳລັບແບບແຕ້ມໃໝ່ໃນບຣາວເຊີນີ້.

{{cmd:DXFOUT}} ດາວໂຫລດສຳເນົາ DXF R12 ສະເໝີ, ໂດຍບໍ່ປ່ຽນຮູບແບບທີ່ {{cmd:SAVE}} ໃຊ້.

ເບິ່ງ [Files: what opens, what saves](topic:files#saving).

### TOUR

ນາມແຝງ: `TUTORIAL`. ເລີ່ມທັດສະນະນຳ 6 ຂັ້ນຕອນການແຕ້ມທຳອິດອີກຄັ້ງ. ເບິ່ງ [Getting started](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

ນາມແຝງ: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. ເບິ່ງ [Settings](topic:settings#toolbar-position).

### COMMANDLINE

ນາມແຝງ: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: ຕິດ ຫຼື ລອຍແຖວຄຳສັ່ງ, ເຮັດໃຫ້ມັນເປັນແຖວດຽວ, ຖາມຈຳນວນແຖວປະຫວັດທີ່ຈະສະແດງ (0 ຫາ 12), ຫຼື ເປີດປະຫວັດ. ເບິ່ງ [Settings](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: ແຖບເທິງແບບແຕ້ມຄືເກົ່າ ຫຼື ກະທັດຮັດ. ເບິ່ງ [Settings](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: ຂັ້ນທີ່ເສັ້ນຕິດຕາມ {{ui:Polar}} ຈັດແນວ (ຫຼາຍກວ່າ 0, ເຖິງ 180). ຈື່ໄວ້ໃນບຣາວເຊີນີ້.

### UNITS

ນາມແຝງ: `UN`. ວິທີຂຽນ ແລະ ພິມຄວາມຍາວ.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural ແລະ Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. ອັນອື ນ: `Enter number of decimal places (0 to 8)`.

ຂະໜາດໃໝ່ປະຕິບັດຕາມ. ໜຶ່ງ undo step. ຄືກັນກັບ {{ui:Length format}} ແລະ {{ui:Precision}} ໃນ {{ui:Current settings}}; ເບິ່ງ [Feet and inches](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

ນາມແຝງ: `GDS`. ເບິ່ງແບບວົງຈອນ IC (ໄຟລ໌ GDSII stream): lab spike, ສຳລັບເບິ່ງ ແລະ ວັດເທົ່ານັ້ນ.

- ຕົວເລືອກໄຟລ໌ຮັບໄຟລ໌ `.gds`; ເມື່ອມີຫຼາຍເຊວເທິງ, `Enter the top cell to draw`.
- ທຸກເລເຢີ ແລະ datatype ກາຍເປັນເລເຢີແບບແຕ້ມ (`GDS 1`, `GDS 2/5`), ການອ້າງອີງ ແລະ ອາເຣຖືກວາງແບນ, ໃນໜ່ວຍຜູ້ໃຊ້ຂອງໄຟລ໌ (ປົກກະຕິແມ່ນໄມໂຄຣແມັດ). ໜຶ່ງ undo step. ບໍ່ມີການຈຳລອງ ຫຼື ກວດ ແລະ ໄຟລ໌ບໍ່ຖືກຂຽນກັບ.

### DIAGRAM

ນາມແຝງ: `TEXTDIAGRAM`, `T2D`. ແຜນວາດຈາກຂໍ້ຄວາມ.

- ກ່ອງໜຶ່ງຮັບຂໍ້ຄວາມ (ຫຼື ໜຶ່ງແຖວທີ່ມີ `;` ລະຫວ່າງຄຳສັ່ງໃນແຖວຄຳສັ່ງ): ຜັງ flowchart Mermaid, ແຜນວາດ component PlantUML, D2 ຫຼື ລາຍການຈາກ-ຫາ.
- `Specify the top left corner of the diagram`, ແລ້ວ `Specify the text height`.

ບລັອກ ແລະ ເສັ້ນເຊື່ອມແມ່ນວັດຖຸທຳມະດາຢູ່ເລເຢີ `Diagram`, ຖືກເລືອກເມື່ອມັນຈົບ. ໜຶ່ງ undo step. ເບິ່ງ [Draw a diagram from text](topic:text-to-diagram).

### OLELIST

ນາມແຝງ: `OLES`. ວັດຖຸ OLE ທີ່ DWG ຖືຢູ່ ທີ່ CadCraft ວາງເອງບໍ່ໄດ້.

- ລາຍການແຕ່ລະອັນ: ເລກ, ປະເພດ, ຂະໜາດ, ວ່າມັນບັນທຶກຮູບໄວ້ບໍ.
- `Enter an option [Place/eXit] <eXit>`: Place ຖາມເລກ, ມຸມລຸ່ມຊ້າຍ ແລະ ຄວາມກວ້າງ, ແລ້ວແຕ້ມກອບທີ່ມີຮູບ. ໜຶ່ງ undo step; ວັດຖຸທີ່ເກັບໄວ້ບໍ່ປ່ຽນ. ເບິ່ງ [Pictures](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

ນາມແຝງ: `SHX`. ຟອນ SHX ຂອງທ່ານເອງ.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} ອ່ານທຸກ `.shx` ໃນໂຟນເດີ (CadCraft Studio; ອີກຄັ້ງທຸກຄັ້ງທີ່ເລີ່ມ), {{ui:Files}} ຮັບໄຟລ໌ທີ່ເລືອກ (ບຣາວເຊີ), {{ui:Reverse}} ຈັດວາງຕົວອັກສອນຂອງຟອນໜຶ່ງໂດຍເລີ່ມຈາກທ້າຍ. ຮູບແບບຂໍ້ຄວາມທີ່ຕັ້ງຊື່ຟອນທີ່ໂຫລດແລ້ວຈະແຕ້ມດ້ວຍມັນ. ເບິ່ງ [Draw text in your own SHX fonts](topic:shx-fonts).

### LIMITS

ແບບແຕ້ມຄວນໃຫຍ່ເທົ່າໃດ.

- `Specify lower left corner or [ON/OFF] <current>`: ຈຸດ, `ON` ຫຼື `OFF`.
- `Specify upper right corner <current>`.

ຕາຕະລາງຈະເຕັມຂອບເຂດ, {{cmd:ZOOM}} All ສະແດງພວກມັນ, ແລະ ເມື່ອ limits ເປີດ ຈຸດນອກຈະຖືກປະຕິເສດ (`**Outside limits`). ໜຶ່ງ undo step; ບັນທຶກໃນ DWG ແລະ DXF. ເບິ່ງ [Set the drawing limits](topic:drawing-limits).

### AUNITS

ນາມແຝງ: `ANGUNITS`. ວິທີສະແດງ ແລະ ພິມມຸມ.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ຫຼື ສຳລັບອີກສອງແບບ `Enter precision` (0 ອົງສາ, 2 ນາທີ, 4 ວິນາທີ, 5 ຫາ 8 ຕຳແໜ່ງຂອງວິນາທີ).

ໜຶ່ງ undo step; ບັນທຶກໃນ DWG ແລະ DXF. ຄືກັນກັບ {{ui:Angle format}} ໃນ {{ui:Current settings}}. ເບິ່ງ [Type and show bearings and angles](topic:bearings-and-angles).

### APPLOAD

ນາມແຝງ: `AP`; ຫຼື {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. ກ່ອງໂຕ້ຕອບ {{ui:Load applications}}: ໂຫລດ routine `.lsp` ແລະ ໄຟລ໌ກ່ອງໂຕ້ຕອບ `.dcl`, ຖອນພວກມັນ, ໂຫລດຄືນຈາກປະຫວັດ, ແລະ Startup Suite. ຄຳສັ່ງ `(defun c:NAME …)` ຂອງ routine ຈະເຮັດວຽກຄືກັບຄຳສັ່ງອື່ນ. ເບິ່ງ [Load applications](topic:load-applications) ແລະ [Run LISP routines](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ຫຼື {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) ເປີດໄຟລ໌ນາມແຝງຂອງທ່ານ (ແຖວ `ALIAS, *COMMAND`); {{ui:Save}} ນຳໃຊ້ມັນ. {{cmd:REINIT}} ນຳໃຊ້ອີກຄັ້ງ. ເບິ່ງ [Edit command aliases](topic:command-aliases).

### LISPEDIT

ນາມແຝງ: `VLIDE`; ຫຼື {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. ເປີດຕົວແກ້ໄຂ LISP, ໜ້າຕ່າງທີ່ຢູ່ຂ້າງແບບແຕ້ມ.

- ຂໍ້ຄວາມ: ເລກແຖວ, ຄູ່ຂອງວົງເລັບຢູ່ເຄີເຊີຖືກໝາຍ (ສີແດງເມື່ອບໍ່ມີ), {{key:Enter}} ຍໍ້ໜ້າແຖວໃໝ່ໃຕ້ວົງເລັບທີ່ເປີດ, {{key:Tab}} ພິມຊ່ອງຫວ່າງສອງຕົວ, {{key:Esc}} ອອກຈາກຂໍ້ຄວາມ.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): ອ່ານທຸກຟອມ, ຄືກັບ {{cmd:APPLOAD}} ເຮັດກັບໄຟລ໌, ແລະ ສ້າງຄຳສັ່ງ `c:` ຂອງມັນ. ໄຟລ໌ສະແດງໃນລາຍການຂອງ {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): ປະເມີນຟອມທີ່ເລືອກ, ຫຼື ຟອມທີ່ເຄີເຊີຢູ່.
- {{ui:Stop}}: ຢຸດ routine ທີ່ກຳລັງເຮັດວຽກ.
- {{ui:Console}}: ສິ່ງທີ່ routine ພິມອອກ ແລະ ແຕ່ລະຂໍ້ຜິດພາດພ້ອມແຖວຂອງມັນ; ກົດຂໍ້ຜິດພາດເພື່ອໄປທີ່ນັ້ນ. ຂໍ້ຄວາມຖືກແລ່ນທີລະຟອມລະດັບເທິງສຸດ, ດັ່ງນັ້ນແຖວແມ່ນຂອງຟອມ, ຫຼື ຢູ່ພາຍໃນນັ້ນແມ່ນແຖວທີ່ເອີ້ນຟັງຊັນທີ່ຂໍ້ຜິດພາດລະບຸຊື່.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): ໄຟລ໌ `.lsp`. ຂໍ້ຄວາມຖືກເກັບໄວ້ໃນບຣາວເຊີນີ້ນຳ, ດັ່ງນັ້ນການປິດໜ້າຕ່າງຈະບໍ່ເສຍມັນ.
- ຂ້າງຂໍ້ຄວາມ: ຟັງຊັນທີ່ routine ກຳນົດ, ອັນທີ່ມັນເອີ້ນທີ່ LISP ນີ້ຍັງບໍ່ມີ, ອັນທີ່ມັນເອີ້ນແຕ່ບໍ່ໄດ້ກຳນົດໃນມັນ ແລະ ກໍບໍ່ແມ່ນຕິດມາ, ແລະ ລາຍການເຕັມຂອງສິ່ງທີ່ຕິດມາ ແລະ ສິ່ງທີ່ບໍ່ມີ.

ຂໍ້ຄວາມທີ່ມີວົງເລັບທີ່ບໍ່ເຄີຍປິດ, ຫຼື ສາຍທີ່ບໍ່ເຄີຍຈົບ, ຈະບໍ່ຖືກແລ່ນ: ແຖວຂອງມັນຖືກລະບຸ. ບໍ່ມີຕົວດີບັກທີລະຂັ້ນ, ບ່ອນຢຸດ ຫຼື ແຜງເບິ່ງຄ່າ. ເບິ່ງ [Run LISP routines](topic:run-lisp).

### HELP

ນາມແຝງ: `?`. ພິມທຸກຄຳສັ່ງ, ນາມແຝງຂອງມັນ ແລະ ຄຳອະທິບາຍໜຶ່ງແຖວໃນປະຫວັດແຖວຄຳສັ່ງ. ມັນບໍ່ເປີດເອກະສານນີ້: ກົດ {{key:F1}} ຫຼື ກົດ {{ui:Help}} ສຳລັບສິ່ງນັ້ນ.

## ພຣອມປ໌ການເລືອກວັດຖຸ

ທີ່ພຣອມປ໌ `Select objects` ໃດກໍໄດ້: ກົດວັດຖຸ, ລາກໜ້າຕ່າງ (ຈາກຊ້າຍໄປຂວາ) ແລະ ຂ້າມ (ຈາກຂວາໄປຊ້າຍ) ດ້ວຍສອງການກົດ, ຫຼື ກົດ ແລະ ລາກ lasso ({{key:Space}} ໃນຂະນະລາກ: ໜ້າຕ່າງ, ຂ້າມ, fence), {{key:Shift}}+ກົດ ເພື່ອເອົາອອກ, ແລະ ກົດ {{key:Enter}} ເພື່ອສຳເລັດ. ທ່ານຍັງສາມາດພິມ `ALL` (ທຸກຢ່າງ), `L` (ວັດຖຸສຸດທ້າຍ), `P` (Previous: ສິ່ງທີ່ຄຳສັ່ງສຸດທ້າຍໃຊ້), `F` (Fence: ວັດຖຸທີ່ເສັ້ນຈຸດຂ້າມ; `U` ເອົາຈຸດຄືນ), `W` (Window), `C` (Crossing), `R` (ໂໝດເອົາອອກ: ການກົດເອົາວັດຖຸອອກ; ພຣອມປ໌ອ່ານ `Remove objects`) ແລະ `A` (Add again). `?` ລາຍການພວກມັນ. ພວກມັນບໍ່ສະແດງໃນພຣອມປ໌. {{key:Tab}} ເທິງວັດຖຸທີ່ທັບກັນ ໄຮໄລຕ໌ອັນຕໍ່ໄປ; ກົດເພື່ອເລືອກມັນ. ເບິ່ງ [Select objects](topic:select-objects).

### ACCESS

ນາມແຝງ: `AX`. ການຮ່າງໂດຍບໍ່ເຫັນ. {{cmd:ACCESS}} ເປີດ ຫຼື ປິດ Access (`On`, `Off`) ແລະ ສະຫຼັບສຽງ snap (`Sound`) ແລະ ຄຳສັ່ງດ້ວຍສຽງ (`Voice`); ມັນບອກສະຖານະກ່ອນ. ເມື່ອ Access ເປີດ, ທຸກຄຳສັ່ງ ແລະ ຜົນລັບຖືກອ່ານອອກຜ່ານໂປຣແກຣມອ່ານໜ້າຈໍຂອງທ່ານ ແລະ ພື້ນທີ່ແບບແຕ້ມມີຕົວກະພິບແປ້ນພິມ. ຫົວຂໍ້ຊ່ວຍເຫຼືອ "Draft without sight" ມີປຸ່ມ.

### DESCRIBE

ນາມແຝງ: `DESC`. ບອກວ່າແບບແຕ້ມມີຫຍັງ: ມີວັດຖຸຈັກອັນ, ປະເພດໃດ, ໃຫຍ່ປານໃດ, ມີເລເຢີຈັກອັນ, ມີຫຍັງຖືກເລືອກ. ອ່ານພຽງຢ່າງດຽວ; ບໍ່ປ່ຽນແປງຫຍັງ.

### WHEREAMI

ນາມແຝງ: `WHERE`. ບອກວ່າເຄີເຊີຢູ່ໃສ, ໃນຫົວໜ່ວຍຂອງແບບແຕ້ມ.

### NEARBY

ບອກວ່າມີຫຍັງຢູ່ໃກ້ເຄີເຊີ, ໃກ້ທີ່ສຸດກ່ອນ, ແຕ່ລະອັນພ້ອມໄລຍະ ແລະ ດ້ານທີ່ມັນຢູ່.

### SAYSEL

ບອກສິ່ງທີ່ຖືກເລືອກ, ປະໂຫຍກໜຶ່ງຕໍ່ວັດຖຸ (ຄວາມຍາວເສັ້ນ, ປາຍ ແລະ ມຸມ; ລັດສະໝີວົງມົນ ແລະ ຈຸດສູນກາງ; ຂໍ້ຄວາມຕາມທີ່ຂຽນ).

### VOICE

ເປີດ ຫຼື ປິດຄຳສັ່ງດ້ວຍສຽງ. ພວກມັນຖືກຮັບຮູ້ໃນຄອມພິວເຕີນີ້; ບ່ອນທີ່ບຣາວເຊີເຮັດບໍ່ໄດ້, ສຽງຈະປິດຢູ່ ເວັ້ນເສຍແຕ່ທ່ານເລືອກບໍລິການອອນລາຍຂອງບຣາວເຊີໃນການຕັ້ງຄ່າ.

### TOUCHCROSSHAIR

ນາມແຝງ: `TCX`. ເສັ້ນກາກບາດຊົດເຊີຍສຳລັບການຮ່າງດ້ວຍນິ້ວ, ເພື່ອປາຍນິ້ວບໍ່ບັງຈຸດທີ່ທ່ານເລືອກ. ໃນຂະນະທີ່ມັນເປີດ, ນິ້ວໜຶ່ງເທິງແບບແຕ້ມບໍ່ເລືອກ: ມັນເຄື່ອນເສັ້ນກາກບາດທີ່ຢູ່ເໜືອນິ້ວ ແລະ ດ້ານໜຶ່ງ. ການຈັບວັດຖຸ ແລະ ການຕິດຕາມຕາມເສັ້ນກາກບາດ. ການຍົກນິ້ວບໍ່ເລືອກຫຍັງ ແລະ ປະໄວ້ເສັ້ນກາກບາດບ່ອນນັ້ນ. ເພື່ອເລືອກ, ກົດປຸ່ມ {{ui:Click}} ໃນມຸມຂອງແບບແຕ້ມ, ຫຼື ແຕະບ່ອນໃດກໍໄດ້ຂອງແບບແຕ້ມດ້ວຍນິ້ວທີສອງ. ຖື {{ui:Click}} ໃນຂະນະທີ່ທ່ານຍ້າຍນິ້ວອື່ນເພື່ອລາກ (ໜ້າຕ່າງເລືອກ, lasso, grip). ນິ້ວທີ່ກົດຄ້າງໄວ້ໂດຍບໍ່ເຄື່ອນ, ຫຼື ປຸ່ມ {{ui:Enter}}, ແມ່ນ Enter. ສອງນິ້ວເລື່ອນ ແລະ ຊູມເໝືອນເກົ່າ. ໃກ້ຂອບລຸ່ມ ແລະ ຂອບດ້ານໄກ ເສັ້ນກາກບາດຈະເຂົ້າຫານິ້ວ, ເພື່ອໃຫ້ທຸກສ່ວນຂອງແບບແຕ້ມເຂົ້າເຖິງໄດ້. ປາກກາ ແລະ ເມົ້າສ ເລືອກໂດຍກົງສະເໝີ.

{{cmd:TOUCHCROSSHAIR}} ບອກສະຖານະ ແລະ ຖາມ `ON`, `OFF`, `Auto` (ເປີດສະເພາະບ່ອນທີ່ນິ້ວເປັນຕົວຊີ້ດຽວ, ສະນັ້ນປິດຢູ່ຄອມພິວເຕີທີ່ມີເມົ້າສ), `Distance` (ເສັ້ນກາກບາດຢູ່ຫ່າງຈາກນິ້ວໄກເທົ່າໃດ, 24 ຫາ 240 ພິກເຊວ) ຫຼື `Side` (`Left`: ຂຶ້ນ ແລະ ໄປທາງຊ້າຍ, ສຳລັບມືຂວາ; `Right` ສຳລັບມືຊ້າຍ; ປຸ່ມຈະຍ້າຍໄປມຸມອື່ນ). ຕົວເລືອກດຽວກັນຢູ່ໃນການຕັ້ງຄ່າ › CadCraft, ແລະ ໃນອຸປະກອນທີ່ມີໜ້າຈໍສຳຜັດ ແຖບສະຖານະມີສະວິດ {{ui:Offset crosshair}}. ຕົວເລືອກຖືກເກັບໄວ້ໃນບຣາວເຊີນີ້.

### WHOHAS

ບອກວ່າໃຜເປີດແບບແຕ້ມຢູ່. ໃນ CadCraft Studio ເທິງຄອມພິວເຕີ, ການເປີດ DWG ຫຼື DXF ຂຽນໄຟລ໌ລັອກນ້ອຍໄວ້ຂ້າງມັນ (`Plan.dwg.cclock`: ໃຜ, ຕັ້ງແຕ່ເມື່ອໃດ, ເວີຊັນໃດ), ຮີເຟຣຊມັນທຸກນາທີໃນຂະນະທີ່ແບບແຕ້ມເປີດ, ແລະ ລຶບມັນເມື່ອປິດແບບແຕ້ມ. ການເປີດແບບແຕ້ມທີ່ຄົນອື່ນເປີດຢູ່ຈະບອກວ່າໃຜ ແລະ ຕັ້ງແຕ່ເມື່ອໃດ ແລະ ສະເໜີ {{ui:Open read-only}} (Save ແລ້ວຈະຖາມຊື່ໃໝ່), {{ui:Open anyway}} (ອີກຄົນໜຶ່ງຈະຖືກບອກໃນການຮີເຟຣຊຂອງເຂົາຕໍ່ໄປ) ຫຼື {{ui:Cancel}}. ການບັນທຶກທັບໄຟລ໌ທີ່ຄົນອື່ນເປີດຢູ່ຈະຖາມກ່ອນ. ລັອກທີ່ບໍ່ໄດ້ຮີເຟຣຊໃນຫ້າຖ້ວນຈະຖືກບອກວ່າເກົ່າ: ສຳເນົາອື່ນປິດໂດຍບໍ່ໄດ້ບັນທຶກ ຫຼື ຄອມພິວເຕີນອນ.

{{cmd:WHOHAS}} ຖາມ `Current` (ແບບແຕ້ມທີ່ເປີດ), `File` (ເລືອກໜຶ່ງ), `FOlder` (ເລືອກໂຟນເດີ: ທຸກແບບແຕ້ມໃນນັ້ນທີ່ເປີດຢູ່ບ່ອນໃດບ່ອນໜຶ່ງຈະຖືກລາຍການ), `Path` (ພິມເສັ້ນທາງເຕັມ) ຫຼື `Name` (ຊື່ທີ່ຄົນອື່ນເຫັນ; ຊື່ບັນຊີຂອງທ່ານເມື່ອທ່ານເຂົ້າສູ່ລະບົບ). Studio ເຂົ້າເຖິງໄດ້ພຽງໂຟນເດີທີ່ທ່ານເລືອກ: ສຳລັບແບບແຕ້ມທີ່ເປີດຈາກໂຟນເດີທີ່ບໍ່ເຄີຍຖືກເລືອກ ມັນບອກຄັ້ງດຽວວ່າມັນບໍ່ສາມາດບັນທຶກວ່າແບບແຕ້ມຖືກເປີດ; `FOlder` ເລືອກໂຟນເດີ, ແລະ ລັອກເຮັດວຽກທີ່ນັ້ນຕັ້ງແຕ່ນັ້ນ. ລັອກເປັນໝາຍເຫດສຳລັບຄົນ, ບໍ່ແມ່ນສິ່ງກີດຂວາງ: ໂປຣແກຣມອື່ນຍັງຂຽນໄຟລ໌ໄດ້. ໃນບຣາວເຊີ ບໍ່ມີໂຟນເດີໃຫ້ເບິ່ງ, ແລະ ຄຳສັ່ງບອກວ່າເປັນແບບນັ້ນ.

### OVERKILL

ລຶບວັດຖຸຊ້ຳ ແລະ ຈັດລຽງເສັ້ນ ແລະ ເສັ້ນໂຄ້ງທີ່ທັບກັນ, ສຳລັບແບບແຕ້ມທີ່ມາເຕັມໄປດ້ວຍເສັ້ນຊ້ຳ. `Select objects to clean up`, {{key:Enter}}, ແລ້ວ {{key:Enter}} ອີກຄັ້ງເພື່ອເຮັດຄວາມສະອາດດ້ວຍການຕັ້ງຄ່າທີ່ສະແດງ, ຫຼື ປ່ຽນໜຶ່ງກ່ອນ:

- `Tolerance`: ສອງຄ່າພິກັດຕ້ອງໃກ້ກັນເທົ່າໃດຈຶ່ງນັບວ່າເໝືອນກັນ (0.000001 ເປັນຄ່າເລີ່ມຕົ້ນ; 0 ໝາຍເຖິງຄືກັນທຸກປະການ).
- `Ignore`: ຄຸນສົມບັດທີ່ອາດແຕກຕ່າງກັນລະຫວ່າງສອງວັດຖຸທີ່ຄືກັນນອກຈາກນັ້ນ. ພິມຊື່ເພື່ອສະຫຼັບມັນ: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ຫຼື `None` / `All`. {{key:Enter}} ເມື່ອສຳເລັດ.
- `Overlap`: ເປີດ ຫຼື ປິດ. ເປີດ, ເສັ້ນທີ່ຢູ່ເສັ້ນຊື່ດຽວກັນ ແລະ ທັບກັນກາຍເປັນເສັ້ນດຽວ (ເສັ້ນທີ່ຢູ່ພາຍໃນເສັ້ນອື່ນຖືກລຶບອອກເລີຍ), ແລະ ເສັ້ນໂຄ້ງໃນວົງມົນດຽວກັນທີ່ທັບກັນກາຍເປັນເສັ້ນໂຄ້ງດຽວ; ເສັ້ນໂຄ້ງທີ່ປິດວົງເຕັມກາຍເປັນວົງມົນ, ແລະ ເສັ້ນໂຄ້ງທີ່ຢູ່ເທິງວົງມົນຖືກລຶບ.
- `Ends`: ເປີດ ຫຼື ປິດ. ເປີດ, ເສັ້ນທີ່ຢູ່ເສັ້ນຊື່ດຽວກັນ ແລະ ເສັ້ນໂຄ້ງໃນວົງມົນດຽວກັນທີ່ພຽງແຕ່ແຕະກັນປາຍຕໍ່ປາຍ ກາຍເປັນຊິ້ນດຽວ.

ທຸກປະເພດວັດຖຸຖືກກວດສຳລັບສຳເນົາ: ສອງວັດຖຸເປັນສຳເນົາເມື່ອຮູບຮ່າງຂອງມັນຄືກັນພາຍໃນຄວາມເພ້ຍ ແລະ ເລເຢີ, ສີ, ປະເພດເສັ້ນ, ມາດຕາສ່ວນປະເພດເສັ້ນ, ຄວາມໜາເສັ້ນ, ຄວາມໜາ, ຄວາມໂປ່ງໃສ ແລະ ຄວາມສູງຂອງມັນກົງກັນ (ລົບອັນທີ່ທ່ານເລືອກໃຫ້ຂ້າມ). ເສັ້ນ ແລະ ໂພລີລາຍເປີດຍັງກົງກັນເມື່ອແຕ້ມກັບດ້ານກັນ. ວັດຖຸທຳອິດໃນລຳດັບການແຕ້ມຢູ່ ແລະ ຮັກສາຄຸນສົມບັດຂອງມັນເອງ. ຄຳສັ່ງລາຍງານວ່າມັນກວດກີ່ວັດຖຸ ແລະ ລຶບກີ່ອັນ: ສຳເນົາ, ສ່ວນທີ່ທັບກັນທີ່ລວມແລ້ວ, ສ່ວນທີ່ຕໍ່ປາຍຕໍ່ປາຍ. ໜຶ່ງ {{cmd:UNDO}} ເອົາທັງໝົດຄືນ. ການຕັ້ງຄ່າຢູ່ຈົນກວ່າທ່ານຈະປິດໜ້າຕ່າງແບບແຕ້ມ.

ມັນປະໄວ້: ວັດຖຸໃນເລເຢີທີ່ລັອກ ແລະ ວັດຖຸທີ່ຖືກເຊື່ອງ. ມັນບໍ່ລວມເສັ້ນທີ່ມີຄວາມສູງ (Z) (ສຳເນົາທີ່ຄືກັນທຸກປະການຂອງພວກມັນຍັງຖືກລຶບ), ແລະ ມັນບໍ່ແຕະຕ້ອງສ່ວນພາຍໃນໂພລີລາຍ (ພວກມັນບໍ່ຖືກບາງລົງ), ເສັ້ນທີ່ວາງຢູ່ສ່ວນເສັ້ນຂອງໂພລີລາຍ, ແລະ ໂພລີລາຍປິດທີ່ແຕ້ມກັບດ້ານກັນ.

### DRAWORDER

ປ່ຽນວັດຖຸໃດຖືກແຕ້ມຢູ່ໜ້າ. `Select objects to re-order`, {{key:Enter}}, ແລ້ວ `Above objects`, `Under objects`, `Front` ຫຼື `Back` ({{key:Enter}} = `Back`). `Above objects` ແລະ `Under objects` ຖາມວັດຖຸອ້າງອີງ: ການເລືອກຈະໄປຢູ່ໜ້າສຸດຂອງອັນທີ່ຢູ່ໜ້າສຸດໃນພວກມັນ, ຫຼື ຢູ່ຫຼັງສຸດຂອງອັນທີ່ຢູ່ຫຼັງສຸດ. ວັດຖຸທີ່ເລືອກຮັກສາລຳດັບຂອງມັນເອງໃນທ່າມກາງກັນ. ໜຶ່ງ undo step. ລຳດັບຖືກບັນທຶກກັບແບບແຕ້ມໃນ DWG ແລະ DXF, ບ່ອນທີ່ມັນເປັນລຳດັບທີ່ວັດຖຸຖືກຂຽນ.

ໃນໜ້າຈໍ CadCraft ແຕ້ມພື້ນທີ່ທີ່ຕື່ມ (hatch ທຶບ, ໂພລີລາຍກວ້າງ, ໜ້າກາກ) ກ່ອນ, ແລ້ວເສັ້ນ, ແລ້ວຂໍ້ຄວາມ, ດັ່ງນັ້ນຂໍ້ຄວາມອ່ານເທິງການຕື່ມສະເໝີ; ລຳດັບການແຕ້ມສະແດງລະຫວ່າງວັດຖຸທີ່ຕື່ມ ແລະ ລະຫວ່າງຮູບ. ໂປຣແກຣມອື່ນທີ່ເປີດໄຟລ໌ແຕ້ມທຸກວັດຖຸຕາມລຳດັບທີ່ບັນທຶກ.

### TEXTTOFRONT

ນຳຂໍ້ຄວາມ, ຂະໜາດ ແລະ ເສັ້ນນຳໄປໜ້າທຸກສິ່ງອື່ນໃນພື້ນທີ່ເປີດ: `Text`, `Dimensions`, `Leaders` ຫຼື `All` ({{key:Enter}} = `All`). ໜຶ່ງ undo step. ມັນບອກເມື່ອບໍ່ມີ, ຫຼື ເມື່ອພວກມັນຢູ່ໜ້າແລ້ວ.

### HATCHTOBACK

ສົ່ງ hatch ທັງໝົດຂອງພື້ນທີ່ເປີດໄປຢູ່ຫຼັງທຸກສິ່ງອື່ນ, ເພື່ອໃຫ້ການຕື່ມຢຸດປົກຄຸມເສັ້ນ ແລະ ຂໍ້ຄວາມໃນໄຟລ໌ທີ່ບັນທຶກ. ບໍ່ມີຄຳຖາມ. ໜຶ່ງ undo step.

### ISOLATEOBJECTS

ນາມແຝງ: `ISOLATE`. ສະແດງສະເພາະວັດຖຸທີ່ເລືອກ: ທຸກສິ່ງອື່ນໃນພື້ນທີ່ເປີດຫາຍອອກຈາກສາຍຕາ ຈົນກວ່າຈະ {{cmd:UNISOLATEOBJECTS}}. ບໍ່ເໝືອນ {{cmd:LAYISO}}, ມັນເຮັດວຽກກັບວັດຖຸທີ່ທ່ານເລືອກ, ບໍ່ວ່າເລເຢີຂອງພວກມັນຈະເປັນຫຍັງ, ແລະ ບໍ່ປ່ຽນເລເຢີໃດ. ວັດຖຸທີ່ຖືກເຊື່ອງບໍ່ຖືກແຕ້ມ, ບໍ່ຖືກເລືອກ, ບໍ່ຖືກ snap, ບໍ່ຖືກຊູມໄປຫາ ຫຼື ບໍ່ຖືກພິມ, ແລະ ຄຳສັ່ງທີ່ຮັບ `ALL` ຂ້າມພວກມັນ. ສິ່ງທີ່ທ່ານແຕ້ມໃນຂະນະທີ່ວັດຖຸຖືກແຍກ ສະແດງຕາມປົກກະຕິ.

ນີ້ແມ່ນສຳລັບ session ເທົ່ານັ້ນ: ບໍ່ມີຫຍັງກ່ຽວກັບມັນຖືກບັນທຶກກັບແບບແຕ້ມ, ມັນບໍ່ແມ່ນ undo step, ແລະ ການເປີດແບບແຕ້ມອີກຄັ້ງສະແດງທຸກສິ່ງ. ໃນຂະນະທີ່ວັດຖຸຖືກເຊື່ອງ ແຖບສະຖານະສະແດງປຸ່ມທີ່ມີຈຳນວນຂອງພວກມັນ; ກົດມັນເພື່ອສະແດງພວກມັນອີກຄັ້ງ.

### HIDEOBJECTS

ເຊື່ອງວັດຖຸທີ່ເລືອກຈົນກວ່າຈະ {{cmd:UNISOLATEOBJECTS}}. ກົດລະບຽບດຽວກັນກັບ {{cmd:ISOLATEOBJECTS}}: ສຳລັບ session ເທົ່ານັ້ນ, ບໍ່ບັນທຶກ, ບໍ່ແມ່ນ undo step.

### UNISOLATEOBJECTS

ນາມແຝງ: `UNISOLATE`, `UNHIDE`. ສະແດງທຸກວັດຖຸທີ່ຖືກເຊື່ອງໂດຍ {{cmd:ISOLATEOBJECTS}} ຫຼື {{cmd:HIDEOBJECTS}} ອີກຄັ້ງ, ແລະ ບອກວ່າກີ່ອັນກັບຄືນມາ.

### LAYLOCKFADE

ກຳນົດວ່າວັດຖຸໃນເລເຢີທີ່ລັອກຈະເບິ່ງເປັນແນວໃດ ແລະ ການກົດເຖິງພວກມັນໄດ້ຫຼືບໍ່. ມັນບອກສະຖານະປັດຈຸບັນ, ແລ້ວຮັບ:

- ຕົວເລກ 0 ຫາ 90: ປະລິມານການຈາງເປັນເປີເຊັນ (50 ເປັນຄ່າເລີ່ມຕົ້ນ). 0 ປິດການຈາງ.
- `ON` ຫຼື `OFF`: ເປີດ ຫຼື ປິດການຈາງ, ຮັກສາປະລິມານ.
- `Pick`, ແລ້ວ `Yes` ຫຼື `No`: ການກົດອາດເລືອກວັດຖຸໃນເລເຢີທີ່ລັອກ ໃນຂະນະທີ່ບໍ່ມີຄຳສັ່ງແລ່ນບໍ? `No` (ຄ່າເລີ່ມຕົ້ນ): ເລືອກບໍ່ໄດ້ເລີຍ. `Yes`: ການກົດ ຫຼື ໜ້າຕ່າງເລືອກພວກມັນເພື່ອໃຫ້ {{ui:Properties}} ສະແດງໄດ້; ພວກມັນຍັງປ່ຽນບໍ່ໄດ້, ແລະ `Select objects` ຂອງຄຳສັ່ງເອງບໍ່ເຄີຍຮັບພວກມັນ.

Object snap ຊອກວັດຖຸໃນເລເຢີທີ່ລັອກໃນທັງສອງກໍລະນີ. ການພິມບໍ່ເຄີຍຈາງ. ທັງສອງການຕັ້ງຄ່າເປັນຂອງທ່ານ, ບໍ່ແມ່ນຂອງແບບແຕ້ມ, ແລະ ຢູ່ໃນ {{ui:Settings}} ພາຍໃຕ້ {{ui:Locked layers}} ເຊັ່ນກັນ.

### BURST

ແຍກການອ້າງອີງບລັອກ ແລະ ເກັບສິ່ງທີ່ຄຸນລັກສະນະບອກ. `Select block references to burst`, {{key:Enter}}: ແຕ່ລະການອ້າງອີງຖືກແທນທີ່ດ້ວຍວັດຖຸຂອງບລັອກ, ແລະ ຄ່າຂອງແຕ່ລະຄຸນລັກສະນະທີ່ເຫັນໄດ້ກາຍເປັນຂໍ້ຄວາມທຳມະດາໃນເລເຢີຂອງຄຸນລັກສະນະນັ້ນເອງ (ຄຸນລັກສະນະໃນເລເຢີ 0 ລົງໃນເລເຢີຂອງການອ້າງອີງ, ຄືກັບວັດຖຸອື່ນຂອງບລັອກໃນເລເຢີ 0). ຄຸນລັກສະນະທີ່ເຫັນບໍ່ໄດ້ຖືກລຶບ. ບລັອກທີ່ຢູ່ໃນບລັອກຍັງເປັນການອ້າງອີງບລັອກ. ໜຶ່ງ undo step; ມັນລາຍງານການອ້າງອີງທີ່ແຕກອອກ ແລະ ຄ່າຄຸນລັກສະນະທີ່ກາຍເປັນຂໍ້ຄວາມ.

ມັນປະຕິເສດແບບແຕ້ມທີ່ເຊື່ອມດ້ວຍຊື່ (ຜູກມັດກ່ອນ ຫຼື ສຳເນົາຈາກມັນດ້ວຍ {{cmd:NCOPY}}), ແລະ ປະໄວ້ວັດຖຸທີ່ເລືອກອື່ນ. ສຳລັບການອ້າງອີງບລັອກ {{cmd:EXPLODE}} ໃຫ້ວັດຖຸດຽວກັນ; {{cmd:BURST}} ເອົາພຽງແຕ່ການອ້າງອີງບລັອກ ແລະ ນັບຂໍ້ຄວາມຄຸນລັກສະນະ.

### TXT2MTXT

ນາມແຝງ: `T2M`. ຕໍ່ຂໍ້ຄວາມແຖວດຽວໃຫ້ເປັນຂໍ້ຄວາມຍ່ອໜ້າອັນດຽວ. `Select single-line text to join`, {{key:Enter}}, ແລ້ວ `Paragraph` (ແຖວຖືກຕໍ່ກັນ ແລະ ຕັດແຖວຕາມຄວາມກວ້າງຂອງແຖວກວ້າງສຸດ) ຫຼື `Lines` (ແຕ່ລະຂໍ້ຄວາມຍັງເປັນແຖວຂອງຕົນເອງ); {{key:Enter}} ເອົາອັນທີ່ໃຊ້ຄັ້ງສຸດທ້າຍ. ແຖວຖືກຈັດລຽງຈາກເທິງລົງລຸ່ມ, ແລ້ວຈາກຊ້າຍໄປຂວາ, ຕາມທິດທາງຂອງຂໍ້ຄວາມເທິງສຸດ. ຍ່ອໜ້າຫ້ອຍຈາກມຸມເທິງຊ້າຍຂອງຂໍ້ຄວາມເທິງສຸດ ແລະ ເອົາຄວາມສູງ, ການໝຸນ, ຮູບແບບ, ເລເຢີ ແລະ ສີຂອງມັນ. ໜຶ່ງ undo step.

ຂໍ້ຄວາມທີ່ເປັນຍ່ອໜ້າຢູ່ແລ້ວ, ຂໍ້ຄວາມຫວ່າງ ແລະ ວັດຖຸອື່ນໃນການເລືອກຖືກປະໄວ້, ແລະ ຄຳສັ່ງບອກຈຳນວນ.

### NCOPY

ສຳເນົາວັດຖຸອອກຈາກການອ້າງອີງບລັອກ ຫຼື ແບບແຕ້ມທີ່ເຊື່ອມ ເຂົ້າໃນແບບແຕ້ມ, ໂດຍບໍ່ແຍກອັນໃດອອກ. `Pick an object inside a block reference or a linked drawing`: ວັດຖຸທີ່ໃກ້ການກົດທີ່ສຸດຖືກສຳເນົາບ່ອນທີ່ມັນສະແດງ, ບໍ່ວ່າມັນຈະຢູ່ເລິກກີ່ຊັ້ນບລັອກ; ກົດອີກ, ແລ້ວ {{key:Enter}}. ຕໍ່ໄປ `Base point to move the copies`: {{key:Enter}} ປະໄວ້ພວກມັນຢູ່ບ່ອນເດີມ, ຫຼື ໃຫ້ຈຸດຖານ ແລະ ຈຸດທີສອງ. ຄຳສັ່ງທັງໝົດເປັນໜຶ່ງ undo step.

ສຳເນົາເອົາເລເຢີທີ່ມັນສະແດງຢູ່: ວັດຖຸໃນເລເຢີ 0 ພາຍໃນບລັອກລົງໃນເລເຢີຂອງການອ້າງອີງທີ່ມັນຢູ່ໃນ, ແລະ ສີແບບ ByBlock ກາຍເປັນສີຂອງການອ້າງອີງນັ້ນ. ຈາກແບບແຕ້ມທີ່ເຊື່ອມ ເລເຢີ `Plan|Walls` ກາຍເປັນ `Plan$0$Walls` (ຊື່ທີ່ການເຊື່ອມໃຫ້), ສ້າງດ້ວຍສີ, ປະເພດເສັ້ນ ແລະ ຄວາມໜາຂອງເລເຢີທີ່ເຊື່ອມ. ຄ່າຄຸນລັກສະນະຖືກສຳເນົາເປັນຂໍ້ຄວາມ. ການອ້າງອີງບລັອກໃນເລເຢີທີ່ລັອກບໍ່ສາມາດຖືກກົດເລືອກໄດ້.

### FLATTEN

ຕັ້ງຄວາມສູງ (Z) ແລະ ຄວາມໜາຂອງວັດຖຸທີ່ເລືອກເປັນ 0. `Select objects to flatten`, {{key:Enter}}. ມັນຍັງ flatten ວັດຖຸທີ່ຢູ່ໃນນິຍາມບລັອກທີ່ການເລືອກໃຊ້ (ແລະ ບລັອກທີ່ຢູ່ໃນນັ້ນ), ດັ່ງນັ້ນທຸກການອ້າງອີງໄປຫາບລັອກເຫຼົ່ານັ້ນປ່ຽນ; ແບບແຕ້ມທີ່ເຊື່ອມຖືກປະໄວ້ຕາມເດີມ. ໜຶ່ງ undo step; ມັນລາຍງານວ່າມີວັດຖຸຈັກອັນປ່ຽນ, ແລະ ບອກເມື່ອບໍ່ມີອັນໃດມີຄວາມສູງ ຫຼື ຄວາມໜາ.

ສິ່ງທີ່ CadCraft ເກັບຂອງມິຕິທີ່ສາມໃນແບບແຕ້ມ 2D ແມ່ນ: ຄວາມສູງຂອງວົງມົນ, ເສັ້ນໂຄ້ງ, ellipse, ຈຸດ, ຂໍ້ຄວາມ, ການອ້າງອີງບລັອກ, hatch, ເສັ້ນນຳ ແລະ ໂພລີລາຍ (ລະດັບຂອງພວກມັນ), ຄວາມສູງຢູ່ແຕ່ລະປາຍຂອງເສັ້ນ, ແລະ ຄວາມໜາຂອງເສັ້ນ, ວົງມົນ, ເສັ້ນໂຄ້ງ, ໂພລີລາຍ, ຈຸດ ແລະ ຂໍ້ຄວາມ, ຕາມທີ່ໄຟລ໌ມີ. {{cmd:FLATTEN}} ລຶບພຽງສິ່ງເຫຼົ່ານັ້ນ. ມັນບໍ່ແຕະແບບ 3D ຢູ່ແທັບ 3D, ໜ້າ 3D ຫຼື solid, ແລະ ວັດຖຸທີ່ແຕ້ມຢູ່ໃນຍົນທີ່ອຽງກໍຖືກນຳເຂົ້າສູ່ຍົນແບບແຕ້ມແລ້ວເມື່ອເປີດໄຟລ໌.

### BREAKLINE

ແຕ້ມເສັ້ນທີ່ມີສັນຍາລັກຕັດ, ສຳລັບມຸມມອງທີ່ຖືກຕັດສັ້ນ. ມັນບອກຂະໜາດ ແລະ ການຍືດປັດຈຸບັນ, ແລ້ວ `First point of the break line` (ຫຼື `Size` / `Extension` ເພື່ອປ່ຽນພວກມັນກ່ອນ), `Second point`, ແລະ `Where the break symbol sits`: ກົດຕາມເສັ້ນ, ຫຼື {{key:Enter}} ສຳລັບກາງ. ຜົນລັບເປັນໂພລີລາຍໜຶ່ງໃນເລເຢີປັດຈຸບັນ: ເສັ້ນ, ຍືດເກີນແຕ່ລະຈຸດດ້ວຍການຍືດ, ມີເສັ້ນຮູບ Z ທີ່ສູງເທົ່າຂະໜາດ ແລະ ຄຶ່ງໜຶ່ງຂອງຄວາມຍາວ.

`Size` ແລະ `Extension` ຖືກຈື່ໄວ້ເປັນການຕັ້ງຄ່າຂອງທ່ານ (ຂະໜາດເລີ່ມທີ່ສອງເທົ່າຂອງຄວາມສູງຂໍ້ຄວາມຂະໜາດຄູນດ້ວຍມາດຕາສ່ວນຂະໜາດ; ການຍືດທີ່ເຄິ່ງໜຶ່ງຂອງຂະໜາດ). {{key:Enter}} ເຮັດຊ້ຳຄຳສັ່ງ.

### AUDIT

ກວດແບບແຕ້ມທີ່ເປີດຢູ່ວ່າເສຍຫາຍບໍ ແລະ ແກ້ມັນ. {{cmd:AUDIT}} ເບິ່ງທຸກວັດຖຸໃນແບບ, ໃນແຜ່ນ ແລະ ຢູ່ໃນບລັອກ, ແລະ ຕາຕະລາງເລເຢີ, ແລະ ລາຍງານສິ່ງທີ່ພົບຕາມປະເພດ:

- ຕົວເລກທີ່ບໍ່ຈຳກັດ ຫຼື ໃຫຍ່ຜິດປົກກະຕິ;
- ວັດຖຸທີ່ບໍ່ມີຂະໜາດ: ເສັ້ນທີ່ບໍ່ມີຄວາມຍາວ, ວົງມົນທີ່ບໍ່ມີລັດສະໝີ, ໂພລີລາຍທີ່ມີຈຸດດຽວ, ຂໍ້ຄວາມທີ່ບໍ່ມີຕົວອັກສອນ ຫຼື ຄວາມສູງ, ການອ້າງອີງບລັອກທີ່ມາດຕາສ່ວນສູນ;
- ວັດຖຸຢູ່ເລເຢີທີ່ແບບແຕ້ມບໍ່ມີ; ການອ້າງອີງໄປຫາບລັອກທີ່ບໍ່ຢູ່; ຊື່ສະໄຕລ໌ຂໍ້ຄວາມ ແລະ ຂະໜາດ ແລະ ຊື່ປະເພດເສັ້ນທີ່ບໍ່ຢູ່ໃນແບບແຕ້ມ;
- ບລັອກທີ່ມີຕົວມັນເອງ, ໂດຍກົງ ຫຼື ຜ່ານບລັອກອື່ນ;
- ວັດຖຸທີ່ແບ່ງປັນ id, ກຸນແຈ ຫຼື handle ໄຟລ໌ດຽວກັນ;
- ຂະໜາດທີ່ບໍ່ມີຈຸດທີ່ມັນວັດຈາກ, ແລະ hatch ທີ່ຂອບບໍ່ແມ່ນເສັ້ນຮອບປິດ.

ແລ້ວມັນຖາມ `Fix them? [Yes/No]`. `No` ບໍ່ປ່ຽນຫຍັງ. `Yes` ແກ້ທຸກຢ່າງໃນໜຶ່ງ undo step: ສິ່ງທີ່ແຕ້ມບໍ່ໄດ້ຖືກລຶບ (ຕົວເລກບໍ່ດີ, ບໍ່ມີຂະໜາດ, ບລັອກທີ່ຫາຍໄປ, ຂະໜາດທີ່ເສຍ, hatch ທີ່ບໍ່ມີຂອບໃຊ້ໄດ້, ການອ້າງອີງທີ່ປິດວົງບລັອກ); ເລເຢີທີ່ຫາຍໄປຖືກສ້າງ; ຊື່ສະໄຕລ໌ ແລະ ປະເພດເສັ້ນທີ່ບໍ່ຮູ້ຈັກກັບຄືນເປັນຄ່າເລີ່ມຕົ້ນ; ກຸນແຈທີ່ໃຊ້ຮ່ວມກັນຖືກແທນທີ່. ມັນພິມຈຳນວນວັດຖຸທີ່ຖືກລຶບ ແລະ ຈຳນວນທີ່ຖືກແກ້. ການພົບດຽວກັນປາກົດໃນແຜງ Problems, ແຕ່ລະອັນມີ {{ui:Repair}} ຂອງມັນເອງ.

ມັນບໍ່ປະຕິເສດຫຍັງ, ແຕ່ມັນກວດພຽງສິ່ງທີ່ CadCraft ແຕ້ມເອງ: ຂໍ້ມູນທີ່ເກັບໄວ້ສຳລັບໂປຣແກຣມອື່ນ (solid 3D, ວັດຖຸ OLE) ບໍ່ຖືກເປີດ.

### RECOVER

ເປີດ DXF ຫຼື DWG ທີ່ເສຍ. {{cmd:RECOVER}} ຖາມໄຟລ໌, ອ່ານສິ່ງທີ່ອ່ານໄດ້ແທນທີ່ຈະປະຕິເສດໄຟລ໌, ລາຍການສິ່ງທີ່ມັນຂ້າມ ຫຼື ສົມມຸດ, ແລ້ວກວດ ແລະ ແກ້ແບບແຕ້ມຄືກັບ {{cmd:AUDIT}} ດ້ວຍ `Yes`.

- DXF: ເສັ້ນທີ່ບໍ່ແມ່ນສ່ວນໜຶ່ງຂອງຄູ່ລະຫັດ ແລະ ຄ່າຈະຖືກຂ້າມຈົນກວ່າຄູ່ຈະກົງກັນອີກຄັ້ງ; ພາກທີ່ບໍ່ມີຈຸດສິ້ນສຸດຖືກປິດ; ໄຟລ໌ທີ່ຖືກຕັດສັ້ນຖືກອ່ານຈົນເຖິງບ່ອນຕັດ; DXF ແບບ binary ທີ່ຖືກຕັດສັ້ນຖືກອ່ານຈົນເຖິງຄ່າເຕັມສຸດທ້າຍຂອງມັນ. ເມື່ອພາກ, ບລັອກ ຫຼື ວັດຖຸຍັງອ່ານບໍ່ໄດ້, ມັນຖືກປະໄວ້ ແລະ ລະບຸຊື່, ແລະ ການອ່ານດຳເນີນຕໍ່ຫຼັງມັນ.
- DWG: ວັດຖຸທີ່ລົ້ມເຫລວໃນການກວດ ຫຼື ຖອດລະຫັດບໍ່ໄດ້ຖືກປະໄວ້, ແລະ ລາຍການວັດຖຸທີ່ຫາຍໄປຖືກສ້າງຄືນໂດຍການເດີນຜ່ານຂໍ້ມູນວັດຖຸ.

ໄຟລ໌ໃນດິສກ໌ບໍ່ຖືກປ່ຽນ. ແບບແຕ້ມທີ່ກູ້ຄືນເປີດໂດຍບໍ່ໄດ້ບັນທຶກ: ບັນທຶກມັນດ້ວຍຊື່ໃໝ່. ໄຟລ໌ທີ່ອ່ານບໍ່ໄດ້ເລີຍຈະຖືກປະຕິເສດ, ພ້ອມເຫດຜົນ.

### LEGACYTEXT

ປ່ຽນຂໍ້ຄວາມທີ່ພິມດ້ວຍຟອນຫວຽດນາມ 8-bit ເກົ່າ ເປັນ Unicode. ຊື່ສັ້ນ `TEXTTOUNICODE` ແລະ `VNTEXT`.

ແບບແຕ້ມຫວຽດນາມເກົ່າເກັບຂໍ້ຄວາມເປັນຕົວອັກສອນຕາເວັນຕົກທີ່ມີແຕ່ຟອນເທົ່ານັ້ນທີ່ປ່ຽນເປັນຫວຽດນາມ: ຂໍ້ຄວາມ TCVN3 ໃນຟອນ ABC (`.VnTime`, `.VnArial`, ແລະ ຟອນຕົວພິມໃຫຍ່ທີ່ຊື່ລົງທ້າຍດ້ວຍ `H`), ແລະ ຂໍ້ຄວາມ VNI ໃນຟອນ VNI (`VNI-Times`). CadCraft ສະແດງຂໍ້ຄວາມແບບນີ້ຕາມທີ່ມັນອ່ານເມື່ອແບບແຕ້ມເປີດ, ໂດຍຟອນຂອງຮູບແບບຂໍ້ຄວາມຂອງມັນ, ຂອງວັດຖຸ, ຫຼື ຂອງສ່ວນໃນຂໍ້ຄວາມຍ່ອໜ້າ; ໄຟລ໌ຍັງເກັບຕົວອັກສອນເກົ່າ.

{{cmd:LEGACYTEXT}} ບອກວ່າພົບຂໍ້ຄວາມຈັກອັນໃນແຕ່ລະການເຂົ້າລະຫັດ ແລະ ຖາມ `Convert … to Unicode?`. `Yes` ຂຽນແຕ່ລະອັນໃໝ່ (ແບບ, ແຜ່ນ, ບລັອກ, ຄ່າຄຸນລັກສະນະ ແລະ ນິຍາມ) ແລະ ໃຫ້ຮູບແບບຂໍ້ຄວາມມີຟອນ Unicode (Times New Roman, Arial ຫຼື Courier New ຕາມປະເພດຂອງຟອນເກົ່າ), ໃນໜຶ່ງ undo step. ການຈັດຮູບແບບພາຍໃນຂໍ້ຄວາມຍ່ອໜ້າຖືກເກັບໄວ້.

ເມື່ອບໍ່ມີຂໍ້ຄວາມໃດໃຊ້ຟອນທີ່ຮູ້ຈັກ (ຮູບແບບທີ່ເສຍຊື່ຟອນ), ມັນຖາມ `Read selected texts as [Tcvn3/Vni/None]`: ເລືອກການເຂົ້າລະຫັດ ແລະ ເລືອກຂໍ້ຄວາມ. ຂໍ້ຄວາມທີ່ເປັນ Unicode ຢູ່ແລ້ວຖືກປະໄວ້. ການແທນທີ່ຂໍ້ຄວາມຂະໜາດ ແລະ ຂໍ້ຄວາມເສັ້ນນຳຫຼາຍແບບບໍ່ຖືກປ່ຽນ.
