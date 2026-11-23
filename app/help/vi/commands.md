---
title: Tham chiếu lệnh
summary: Mọi lệnh trong ứng dụng vẽ CadCraft, với các tên ngắn, các câu hỏi lệnh đưa ra, các tùy chọn và giá trị mặc định.
keywords: lệnh, bí danh, danh sách lệnh, diện tích, chu vi, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

Gõ tên lệnh hoặc tên ngắn rồi nhấn {{key:Enter}} hoặc {{key:Space}}. Không phân biệt chữ hoa chữ thường, và tiền tố `_`, `-`, `.` hoặc `'` bị bỏ qua. Gõ `HELP` (hoặc `?`) để in một danh sách ngắn mọi lệnh trong lịch sử dòng lệnh; nhấn {{key:F1}} để xem trợ giúp này.

Cách đọc các lời nhắc: tùy chọn nằm trong ngoặc vuông, và bạn chọn một tùy chọn bằng cách gõ các chữ cái viết hoa của nó (`D` cho Đường kính). Giá trị mặc định nằm trong ngoặc nhọn; nhấn {{key:Enter}} để chấp nhận. Khi cần một điểm, bạn có thể nhấp hoặc gõ bất kỳ định dạng nào trong [Nhập tọa độ và khoảng cách](topic:coordinate-entry). Khi cần một khoảng cách, bạn có thể gõ một số hoặc nhấp hai điểm.

Nhấn {{key:Enter}} khi cần một điểm hoặc một đối tượng mà không có giá trị mặc định sẽ kết thúc lệnh. {{key:Esc}} hủy lệnh. Mọi việc một lệnh đã làm là một bước hoàn tác.

## Vẽ

### LINE

Tên ngắn: `L`. Các đoạn thẳng, mỗi đoạn là một đối tượng riêng.

- `Specify first point` (Enter: bắt đầu từ điểm cuối cùng bạn đã chỉ định)
- `Specify next point [Undo]`, lặp lại. Sau hai đoạn: `[Undo/Close]`.
- `U` hoàn tác đoạn cuối, `C` đóng về điểm đầu tiên và kết thúc. Enter kết thúc.

### PLINE

Tên ngắn: `PL`. Một đa tuyến gồm các đoạn thẳng và cung.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close khi đã có hai đoạn)
- `A` chuyển sang cung: `Specify endpoint of arc [Line/CLose/Undo]`. Mỗi cung tiếp tục tiếp tuyến với đoạn trước đó. `L` quay lại đường thẳng, `CL` đóng bằng một cung.
- Enter kết thúc; đa tuyến vẫn để hở.

### CIRCLE

Tên ngắn: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` hỏi `Specify diameter of circle`.
- `2P`: hai đầu của một đường kính. `3P`: ba điểm trên hình tròn.
- `T` (cũng là lệnh `TTR`, và {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Vòng tròn: Tiếp tuyến, Tiếp tuyến, Bán kính}}): `Specify point on object for first tangent of circle`, rồi điểm thứ hai, rồi bán kính (Enter: bán kính trước). Hình tròn tiếp xúc với cả hai đối tượng (đường thẳng, cung, hình tròn, đoạn đa tuyến, cũng như bên trong khối); trong các hình tròn thỏa mãn, chọn hình tròn tiếp xúc gần các điểm bạn chọn nhất. "Circle does not exist" khi không có hình nào phù hợp.
- `TTT` (hoặc {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Vòng tròn: Tiếp tuyến, Tiếp tuyến, Tiếp tuyến}}): ba đối tượng; hình tròn tiếp xúc cả ba, gần các điểm bạn chọn nhất (ba đường thẳng cho hình tròn nội tiếp hoặc ngoại tiếp, tùy nơi bạn chọn).

### ARC

Tên ngắn: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: một cung qua ba điểm.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Cung chạy ngược chiều kim đồng hồ từ điểm đầu đến điểm cuối.

### RECTANG

Tên ngắn: `REC`, `RECTANGLE`. Một đa tuyến khép kín.

- `Specify first corner point`, `Specify other corner point`. Gõ `@width,height` cho góc thứ hai.

### POLYGON

Tên ngắn: `POL`. Một đa giác đều dạng đa tuyến khép kín.

- `Enter number of sides <4>` (3 đến 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: nhấp hoặc gõ một điểm; khoảng cách của nó đặt kích thước và hướng của nó xoay đa giác.

### ELLIPSE

Tên ngắn: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, rồi khoảng cách đến trục còn lại.
- `I` (`Isocircle`, chỉ khi {{cmd:ISODRAFT}} đang bật): tâm, rồi bán kính hoặc `Diameter`: elip mà một hình tròn hiện ra trên mặt phẳng đẳng trục hiện hành.

### HATCH

Tên ngắn: `H`, `BH`, `BHATCH`; hoặc {{ui:Tô bóng}} trên thanh công cụ. In mẫu, tỷ lệ và góc hiện hành trước.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, lặp lại (`Undo` khi đã có một vùng): mỗi lần nhấp thêm vùng khép kín bao quanh nó, với các hình khép kín bên trong là đảo. Enter tạo một tô cho tất cả.
- `S`: `Select closed objects` (đa tuyến khép kín, hình tròn, elip khép kín).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): tô là chuyển màu thay vì mẫu. Xem {{cmd:GRADIENT}} để biết các câu hỏi của nó.

Xem [Tô bóng và vùng tô](topic:hatch).

### GRADIENT

Tên ngắn: `GD`. Tô một vùng bằng chuyển màu của một hoặc hai màu. Nó hỏi chuyển màu trước, rồi tiếp tục như {{cmd:HATCH}} làm (`Pick internal point`, `S` cho đối tượng khép kín, {{key:Enter}} để kết thúc).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, lặp lại; mỗi lần nó in chuyển màu như hiện tại.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, hoặc một trong số đó đảo ngược (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Vài chữ cái đầu là đủ.
- `O`: một màu, rồi độ đậm nhạt của nó từ 0 đến 1 (0 làm tối thành đen, 0.5 là chính màu đó, 1 làm nhạt thành trắng). `TW`: màu thứ nhất và màu thứ hai. Một màu là một số từ 1 đến 255, ba số như `255,128,0`, hoặc `#rrggbb`.
- `A`: góc mà chuyển màu chạy theo. `C`: căn giữa Yes hoặc No (No dời điểm giữa của chuyển màu sang một bên).
- Nó từ chối một màu hoặc một kiểu nó không biết, và một độ đậm nhạt nằm ngoài 0 đến 1.

{{cmd:HATCHEDIT}} `G` và Thuộc tính (Gradient) đổi một chuyển màu về sau, hoặc biến bất kỳ tô nào thành chuyển màu. Chuyển màu được vẽ trên màn hình và được in. DWG 2004 trở lên giữ nó như một tô chuyển màu thật; DXF 2000 và DWG 2000 giữ nó cho CadCraft, và các chương trình khác thấy một tô đặc bằng màu thứ nhất.

### HATCHGENERATEBOUNDARY

Tên ngắn: `HGB`. Tạo lại biên từ một tô đã mất nó. `Select hatches` (hoặc chọn chúng trước), rồi `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Mỗi vòng của tô thành một đa tuyến khép kín trên lớp của tô; các đa tuyến mới được giữ ở trạng thái chọn.  Một cạnh cong quay lại thành các đoạn thẳng ngắn mà tô giữ.
- Với Yes, tô bám theo biên mới của nó, như một tô được tạo bằng {{cmd:HATCH}}. Một bước hoàn tác.
- Nó cho biết khi không có tô nào được chọn.

### POINT

Tên ngắn: `PO`; hoặc {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Điểm}}. Các đối tượng điểm, mỗi lần nhấp một điểm, cho đến khi Enter.

- `Specify a point`

### XLINE

Tên ngắn: `XL`; hoặc {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Đường dựng}}. Các đường dựng, không kết thúc hai hướng. Xem [Đường dựng và tia](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, rồi `Specify through point` cho mỗi đường, cho đến khi Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` hỏi `Select a line object` trước.
- `B`: `Specify angle vertex point`, `Specify angle start point`, rồi `Specify angle end point` cho mỗi đường.
- `O`: `Specify offset distance [Through] <Through>`, rồi `Select a line object` và `Specify side to offset` (hoặc `Specify through point`) cho mỗi đường.

### RAY

Không có tên ngắn; hoặc {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Tia}}. `Specify start point`, rồi `Specify through point` cho mỗi tia, cho đến khi Enter.

### TEXT

Tên ngắn: `DT`, `DTEXT`; hoặc {{ui:Văn bản}} trên thanh công cụ. Văn bản một dòng; mỗi dòng là một đối tượng riêng.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, rồi `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, lặp lại: mỗi lần Enter bắt đầu dòng kế tiếp bên dưới. Enter trên một dòng trống sẽ kết thúc. {{key:Space}} gõ một khoảng trắng tại đây.

### DIVIDE

Tên ngắn: `DIV`. {{cmd:DIVIDE}} đặt các dấu lên một đường thẳng, cung, hình tròn, đa tuyến, spline hoặc elip để cắt nó thành các phần bằng nhau. Chọn đối tượng, rồi cho số phần (2 đến 32767). Một đối tượng hở nhận ít hơn số phần một dấu; một đối tượng khép kín nhận thêm một dấu tại điểm đầu. Bản thân đối tượng không bị cắt. Các dấu là điểm; `Block` hỏi một khối của bản vẽ này thay thế và có xoay theo đối tượng không. Chiều dài dọc theo spline và elip được đo bằng các dây cung ngắn. Nó từ chối văn bản, tô và các đối tượng khác không có chiều dài.

### MEASURE

Tên ngắn: `ME`. {{cmd:MEASURE}} đặt một dấu mỗi khoảng chiều dài cho trước dọc theo một đường thẳng, cung, hình tròn, đa tuyến, spline hoặc elip, tính từ đầu gần điểm bạn chọn (đối tượng khép kín: từ điểm đầu của nó). Nhập chiều dài bằng cách gõ hoặc bằng hai điểm. Đầu xa của một đối tượng hở không có dấu. `Block` đặt một khối tại mỗi dấu thay vì một điểm. Nó từ chối chiều dài 0, chiều dài lớn hơn đối tượng, và chiều dài làm ra hơn 32767 dấu.

### BOUNDARY

Tên ngắn: `BO`, `BPOLY`. {{cmd:BOUNDARY}} tạo một đa tuyến khép kín quanh vùng chứa điểm bạn chọn, từ các đường thẳng, cung, hình tròn, đa tuyến và đường cong nào đang bao quanh nó trên màn hình. Các đoạn nằm trên cung hoặc hình tròn quay lại thành đoạn cung; các đoạn của elip và spline quay lại thành các đoạn thẳng ngắn. Với `Islands` bật (cài đặt ban đầu), mỗi vùng khép kín bên trong cũng có đa tuyến riêng. Tiếp tục chọn điểm; Enter kết thúc. Các đối tượng tạo thành vùng được giữ nguyên. Nó cho biết khi không có vùng khép kín nào chứa điểm.

### BLEND

{{cmd:BLEND}} vẽ một spline giữa hai đầu của hai đường cong hở. Chọn từng đường gần đầu cần nối. `CONtinuity` chọn `Tangent` (spline rời và tới theo cả hai đường cong) hoặc `Smooth` (cũng uốn theo cách hai đường cong uốn ở đầu); lựa chọn được giữ cho phiên làm việc. Hai đường cong không bị đổi. Nó từ chối các đối tượng khép kín và hai đầu đã gặp nhau.

### REGION

Tên ngắn: `REG`. {{cmd:REGION}} biến các đối tượng khép kín thành miền: các vùng phẳng mà bạn có thể nối, cắt và đo. Chọn hình tròn, đa tuyến khép kín, elip khép kín hoặc spline khép kín, hoặc đường thẳng, cung và đa tuyến hở khép thành vòng nối đầu cuối; mỗi vòng thành một miền và thay các đối tượng mà nó sinh ra. Cung vẫn là cung; elip và spline thành các đoạn thẳng ngắn. Phần không khép kín và không tạo vòng nào được giữ nguyên, và nó cho biết có bao nhiêu. Trong bản vẽ, một miền là một hoặc nhiều đa tuyến khép kín được giữ cùng nhau như một nhóm không tên, nên một cú nhấp chọn cả miền và một bản sao là một miền riêng; các chương trình khác mở tệp sẽ thấy đa tuyến khép kín.

Khi có miền trong bản vẽ, {{cmd:UNION}}, {{cmd:SUBTRACT}} và {{cmd:INTERSECT}} trên thẻ 2D làm việc trên miền: `UNION` nối các miền đã chọn thành một (các miền rời nhau thành một miền nhiều đường viền), `SUBTRACT` hỏi các miền để trừ đi và rồi các miền để lấy ra (một lỗ vẫn là một phần của miền), `INTERSECT` giữ phần diện tích mà tất cả cùng có. Mỗi lệnh cho biết diện tích kết quả và là một bước hoàn tác. Chúng từ chối khi không còn gì hoặc không có gì chung. Trên thẻ 3D, và trong bản vẽ không có miền, các lệnh này vẫn làm việc trên vật rắn như trước.

## Sửa đổi

Tên ngắn: `MT`, `T`; hoặc {{ui:Đoạn văn}} trên thanh công cụ. Văn bản đoạn tự xuống dòng theo một chiều rộng, gõ tại chỗ.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: chiều rộng qua hai góc là nơi văn bản xuống dòng. `H` hỏi `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` và bỏ qua góc thứ hai.
- Sau đó một hộp mở trên bản vẽ: gõ, {{key:Enter}} để sang đoạn mới, {{key:Mod+Enter}} hoặc nhấp ra ngoài để kết thúc, {{key:Esc}} để hủy. Thanh của nó đặt chiều cao, khoảng dòng, chiều rộng và căn lề. Xem [Thêm văn bản và nhãn](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Tên ngắn: `ED`, `DDEDIT`; hoặc nhấp đúp vào một văn bản. `Select a text to edit`, lặp lại cho đến {{key:Enter}}: mỗi văn bản mở trong cùng hộp. Bắt đầu trên một văn bản đã chọn hoặc đã nhấp đúp, nó sửa văn bản đó và kết thúc.

### ERASE

Tên ngắn: `E`, `DELETE`; hoặc nhấn {{key:Delete}} khi đã chọn đối tượng.

- `Select objects` (bỏ qua khi các đối tượng đã được chọn)

### MOVE

Tên ngắn: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, gõ dạng `dx,dy`.

### COPY

Tên ngắn: `CO`, `CP`. Sao chép bao nhiêu lần tùy số điểm bạn cho.

`Array` tại lời nhắc điểm thứ hai tạo một hàng trong một lần: cho số phần tử (bản gốc tính là một), rồi điểm mà bản sao đầu tiên đặt tới; các bản còn lại theo cùng khoảng cách. `Fit` thay vào đó đặt điểm đó làm vị trí của bản sao cuối cùng, với các bản còn lại trải đều giữa chúng.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, lặp lại cho đến Enter. `U` hoàn tác bản sao cuối.

### ROTATE

Tên ngắn: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: độ, dương ngược chiều kim đồng hồ; hoặc nhấp một điểm để xoay về phía nó.

### SCALE

Tên ngắn: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: gõ một hệ số như `0.5` hoặc `2`. Một điểm được nhấp cho khoảng cách của nó từ điểm gốc làm hệ số.

### MIRROR

Tên ngắn: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Tên ngắn: `AL`; hoặc {{ui:Sửa đổi}} › {{ui:Thêm}} › {{ui:Căn}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Với hai cặp: `Scale objects based on alignment points? [Yes/No] <N>`

Xem [Căn đối tượng](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (hoặc vùng chọn), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` hỏi điểm. Vùng chọn được giữ nguyên.

### DISTRIBUTE

- `Select objects` (ít nhất ba), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Hai đối tượng ngoài cùng được giữ nguyên; vùng chọn được giữ nguyên.

### ALIGNPANEL

Tên ngắn: `ALP`; hoặc {{ui:Sửa đổi}} › {{ui:Thêm}} › {{ui:Căn và phân bố}}. Mở bảng chạy ALIGNTO và DISTRIBUTE bằng các cú nhấp.

### LASER

Tên ngắn: `LASERCUT`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Laser…}}. Mở bảng Laser trên bản vẽ: mỗi lớp làm gì (cắt, khía, khắc, tô, ảnh), bản xem trước, G-code GRBL để lưu, và căn khung và gửi qua Web Serial. Xem [Gửi bản vẽ đến máy laser](topic:laser-cutting).

### STRETCH

Tên ngắn: `S`; hoặc {{ui:Kéo giãn}}. `Select objects to stretch`: kéo các cửa sổ giao qua các đầu để dời (hoặc gõ `C`). `Specify base point [Displacement]`, `Specify second point`. Các điểm nằm trong cửa sổ được dời: đầu đường thẳng, đỉnh đa tuyến (đoạn cung giữ nguyên chiều cao), điểm kích thước; hình tròn, elip, văn bản, điểm và khối được dời nguyên khi tâm hoặc điểm chèn của chúng nằm trong cửa sổ. Vùng chọn được tạo trước lệnh giữ các cửa sổ giao (và lasso) đã tạo nó, nên chúng kéo giãn theo cùng cách. Không có cửa sổ, các đối tượng được dời nguyên.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Tên ngắn: `AR`; hoặc {{ui:Mảng}}. `Select objects`, rồi `Enter array type [Rectangular/POlar] <Rectangular>` (chỉ ARRAY).

- Rectangular bắt đầu với 4 cột × 3 hàng, cách nhau 1.5 lần kích thước của đối tượng, hiện như bản xem trước. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` hỏi cột và hàng, `S` hỏi khoảng cách giữa các cột và giữa các hàng (âm thì sang trái hoặc xuống dưới), `COL` và `R` mỗi cái một hướng.
- Polar hỏi `Specify center point of array`, bắt đầu với 6 phần tử quanh hết vòng, đã xoay. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` các phần tử, `F` góc để lấp đầy (+ ngược chiều kim đồng hồ, − theo chiều kim đồng hồ), `ROT` Yes hoặc No.
- {{key:Enter}} (eXit) tạo các bản sao, như các đối tượng thường. Một bước hoàn tác.
- `AS` (ASsociative) chuyển giữa bản sao thường và một mảng vẫn chỉnh sửa được: một đối tượng mà bạn đổi về sau bằng {{cmd:ARRAYEDIT}}, bằng grip hoặc trong Thuộc tính. Lựa chọn được ghi nhớ ({{cmd:ARRAYASSOCIATIVITY}}); ban đầu là bản sao thường.

### ARRAYPATH

Bản sao dọc theo một đường cong. `Select objects`, rồi `Select path curve`: một đường thẳng, cung, hình tròn, elip, đa tuyến hoặc spline (không phải một trong các đối tượng đang được tạo mảng). Đường dẫn bắt đầu tại đầu gần đối tượng hơn, và phần tử đầu tiên là các đối tượng ở đúng vị trí của chúng.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, có bản xem trước. `M`: `Divide` trải các phần tử đều trên toàn bộ đường dẫn, `Measure` đặt một phần tử mỗi khoảng đã cho dọc theo nó. `I`: số phần tử (với Measure, 0 nghĩa là bao nhiêu vừa thì đặt bấy nhiêu; số vượt quá cuối đường dẫn được giới hạn theo những gì vừa). `SP`: khoảng cách giữa các phần tử dọc theo đường dẫn (chuyển sang Measure). `AL`: Yes xoay mỗi phần tử để theo đường dẫn, No giữ chúng thẳng đứng.
- `AS` như trong {{cmd:ARRAY}}. Khi bật, mảng giữ bản sao hình dạng của đường dẫn: sửa đường cong đường dẫn về sau không dời các phần tử.
- Nó từ chối một đường dẫn không phải đường cong, và một phần tử.

### ARRAYEDIT

Đổi một mảng được tạo với ASsociative. `Select array` (hoặc chọn trước). Nó in mảng hiện như thế nào, rồi hỏi cho đến {{key:Enter}}:

- Rectangular: `COL` các cột và khoảng cách của chúng, `R` các hàng và khoảng cách của chúng, `A` góc mà các cột chạy theo.
- Polar: `I` các phần tử, `F` góc lấp đầy, `ROT` xoay các phần tử Yes hoặc No.
- Path: `M` Divide hoặc Measure, `I` các phần tử, `SP` khoảng cách, `AL` căn theo đường dẫn.
- `S` (Source) mở các đối tượng mà mảng lặp lại, riêng lẻ, như trình soạn khối. Vẽ và sửa ở đó; {{cmd:ARRAYCLOSE}} lưu hoặc bỏ, và mọi phần tử theo sau.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, rồi nhấp các phần tử cần thay, {{key:Enter}}. Các phần tử đó hiện đối tượng thay thế; các đối tượng thay thế rời bản vẽ và sống trong mảng. `RES` (RESet) hiện lại đối tượng nguồn trong mọi phần tử.
- Mỗi thay đổi là một bước hoàn tác. Nó từ chối bản sao thường, một tham chiếu khối thường, và một mảng trên lớp đã khóa.

Các con số giống nhau có trong Thuộc tính dưới Mảng, và mảng có grip: điểm gốc của nó dời mảng, grip ở phần tử thứ hai đặt khoảng cách, grip sau phần tử cuối đặt số lượng (polar: phần tử thứ hai đặt số phần tử, phần tử cuối đặt góc lấp đầy). {{cmd:EXPLODE}} đổi mảng thành các bản sao thường.

### ARRAYCLOSE

Kết thúc {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Nó cho biết khi không có đối tượng nguồn nào của mảng đang mở. {{cmd:BCLOSE}} làm việc tương tự.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Đặt điều mà {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR và {{cmd:ARRAYPATH}} bắt đầu với; tùy chọn `AS` của chúng đổi cùng cài đặt này. Được ghi nhớ trong trình duyệt này.

### OFFSET

Tên ngắn: `O`. Đường thẳng, cung, hình tròn và đa tuyến.

Khi một đa tuyến dời ra ngoài và các đoạn thẳng của nó tách ra ở một góc, {{cmd:OFFSETGAPTYPE}} quyết định cách khe hở được khép lại.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, rồi `Specify point on side to offset` (hoặc, với Through, `Specify through point`), lặp lại cho đến Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: cách {{cmd:OFFSET}} khép các khe ở góc ngoài của một đa tuyến. `0` kéo dài các đoạn cho đến khi chúng gặp nhau (cài đặt ban đầu), `1` nối chúng bằng một cung quanh góc cũ, `2` bằng một đường cắt thẳng. Góc trong và đoạn cung không bị ảnh hưởng. Được giữ cho phiên làm việc này.

### EXTRIM

{{cmd:EXTRIM}} cắt mọi thứ ở một phía của một cạnh. Chọn cạnh cắt (đường thẳng, cung, hình tròn, đa tuyến, elip, spline hoặc đường dựng), rồi chọn một điểm ở phía cần xóa: mọi đường thẳng, cung, hình tròn, đa tuyến và đường dựng cắt qua cạnh sẽ mất phần của nó ở phía đó, bắt đầu từ cạnh. Khi bạn chọn phía, các phần sắp bị bỏ đi theo con trỏ. Với cạnh khép kín, hai phía là trong và ngoài. Đối tượng chỉ chạm vào cạnh, và văn bản, tô, spline và elip cắt qua nó, được giữ nguyên. Một bước hoàn tác.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: cách {{cmd:TRIM}} và {{cmd:EXTEND}} bắt đầu. `1` Nhanh: mọi đối tượng là một cạnh cắt hoặc biên. `0` Chuẩn: chúng hỏi các cạnh trước. Cũng là `(setvar "TRIMEXTENDMODE" 0)` trong LISP.

### TRIM

Tên ngắn: `TR`. In trước `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. Ở chế độ Nhanh, mọi đối tượng nhìn thấy là một cạnh cắt, và một đối tượng không có gì cắt qua sẽ bị xóa; ở chế độ Chuẩn, nó hỏi trước `Select cutting edges (Enter = every object)` và chỉ cắt tại những cạnh đó.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, lặp lại: nhấp đoạn cần bỏ (nó hiện màu xám và nét đứt khi con trỏ dừng trên nó), kéo một đường qua nhiều đoạn (tất cả đi trong một bước), hoặc nhấp hai chỗ trống để đặt một hàng rào giữa chúng. {{key:Shift}} thì kéo dài. `T` chọn cạnh cắt (chế độ Chuẩn), `F` hỏi các điểm hàng rào, `C` hai góc cửa sổ (các đoạn nằm một phần bên trong sẽ đi), `O` hỏi `Enter a trim mode option [Quick/Standard]`, `E` hỏi `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` xóa các đối tượng bạn chọn, `U` hoàn tác lần chọn hoặc kéo cuối. Enter kết thúc. Xem [Cắt và kéo dài](topic:trim-and-extend).

- Nhấp vào một tô sẽ cắt tô: các cạnh cắt chia vùng được tô, và phần bạn nhấp bị lấy đi (không để lại đường viền nào tại chỗ cũ). Tô giữ nguyên mẫu hoặc chuyển màu của nó; một tô đã được liên kết với biên của nó sẽ không còn liên kết sau đó, vì nó không còn tô biên đó nữa. Nó cho biết khi không có cạnh cắt nào chia tô tại đó, khi nhấp nằm ngoài tô, và khi không còn gì (dùng {{cmd:ERASE}}). Một đường kéo hoặc hàng rào không cắt tô.

### EXTEND

Tên ngắn: `EX`. Giống TRIM theo chiều ngược lại: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Một cú nhấp kéo dài đầu gần nó đến biên tiếp theo; một đường kéo hoặc hàng rào kéo dài mọi đối tượng nó cắt qua; {{key:Shift}} thì cắt. `B` chọn các cạnh biên (chế độ Chuẩn). Mode và Edge được dùng chung với TRIM.

### LINKVIEWS

Tên ngắn: `SYNCVIEWS`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Liên kết khung nhìn của các khung}}, hoặc biểu tượng liên kết trên thẻ bản vẽ. `Link the panes' views [ON/OFF]` (Enter chuyển sang trạng thái kia): khi bật, một di chuyển hoặc phóng to trong khung đang hoạt động sẽ dời mọi khung hiển thị cùng loại không gian. Xem [Chia màn hình](topic:split-screen).

### OPENIN3D

Không có tên ngắn; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Mở trong ModelCraft}} khi ứng dụng mô hình hóa 3D nhận bản vẽ được chuyển giao. Nó mở bản vẽ ở đó trong một thẻ mới, dưới dạng DWG (không có gì được tải lên). Nếu trình duyệt chặn thẻ, nó cho biết điều đó.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: những gì nhấn và kéo trên một chỗ trống sẽ vẽ. Giống Cài đặt › CadCraft › Kéo để chọn. Xem [Chọn bằng lasso](topic:lasso-selection).

### FILLET

Tên ngắn: `F`. Đường thẳng, cung, hình tròn và đa tuyến. In trước `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` hỏi `Specify fillet radius <last>`. `T` hỏi `Enter Trim mode option [Trim/No trim]`: với No trim, các đối tượng giữ nguyên và chỉ có cung được thêm vào.
  - `M` giữ lệnh chạy cho nhiều góc hơn cho đến {{key:Enter}}; `U` hoàn tác góc cuối mà không rời lệnh.
  - `P` hỏi `Select 2D polyline [Radius]` và bo tròn mọi góc nơi hai đoạn thẳng gặp nhau. Các bo tròn đã có sẽ được thay bằng bán kính mới; bán kính 0 sẽ gỡ chúng. Các góc mà cạnh quá ngắn so với bán kính được giữ nguyên và được đếm.
- `Select second object or shift-select to apply corner [Radius]`. Giữ {{key:Shift}} khi nhấp để có góc nhọn, bất kể bán kính.

Nhấp mỗi đối tượng ở phần bạn muốn giữ. Hai đường thẳng không gặp nhau sẽ được kéo dài. Hai đường thẳng song song nhận một nửa hình tròn qua khe hở, ở đầu của đường thẳng thứ nhất gần chỗ bạn nhấp nhất. Một hình tròn không bao giờ bị cắt. Hai đoạn liền kề của cùng một đa tuyến nhận cung bên trong đa tuyến; một đa tuyến và một đối tượng khác hoạt động khi phần cắt rơi trên đoạn đầu hoặc đoạn cuối của đa tuyến.

### CHAMFER

Tên ngắn: `CHA`. Đường thẳng và các đoạn thẳng của đa tuyến. In các khoảng cách hiện hành (hoặc độ dài và góc) trước.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` hỏi `Specify first chamfer distance <last>` và `Specify second chamfer distance <the first>`: khoảng thứ nhất được cắt từ đường thứ nhất bạn chọn, khoảng thứ hai từ đường kia.
  - `A` hỏi `Specify chamfer length on the first line` và `Specify chamfer angle from the first line`.
  - `E` (mEthod) chọn trong hai cách mà vát mép kế tiếp dùng. `T`, `M`, `U` và `P` hoạt động như trong {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+nhấp tạo góc nhọn.

Một khoảng cách dài hơn đường thẳng sẽ bị từ chối (`Distance is too large.`).

### BREAK và BREAKATPOINT

Tên ngắn: `BR`. `Select object` (nơi bạn nhấp là điểm thứ nhất), `Specify second break point [First point]`; `F` hỏi `Specify first break point` và `Specify second break point`. Phần nằm giữa bị xóa; trên hình tròn, ngược chiều kim đồng hồ từ điểm thứ nhất. BREAKATPOINT hỏi `Specify break point` và tách đối tượng thành hai tại đó (không áp dụng cho hình tròn).

### LENGTHEN

Tên ngắn: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: một lần chọn in `Current length` (và góc bao của cung) rồi hỏi lại. `DE` hỏi `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` kéo. Rồi `Select an object to change [Undo]`, lặp lại: đầu gần điểm nhấp nhất sẽ dời. Đường thẳng, cung và đa tuyến hở.

### JOIN

Tên ngắn: `J`. `Select objects to join`. Đường thẳng, cung và đa tuyến hở gặp nhau đầu cuối sẽ thành đa tuyến (khép kín khi chuỗi khép lại); đường thẳng cùng một đường thành một đường; các cung của cùng một hình tròn thành một cung hoặc hình tròn. Lịch sử cho biết có bao nhiêu đối tượng đã nối và bao nhiêu không nối được.

### MATCHPROP

Tên ngắn: `MA`, `PAINTER`. `Select source object`, rồi `Select destination objects [Settings]` và {{key:Enter}}. Sao chép lớp và màu, và giữa các đối tượng cùng loại thì chiều cao và chiều rộng văn bản, kích thước kích thước, hoặc mẫu tô. `S` hỏi `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, lặp lại cho đến {{key:Enter}}; lựa chọn được ghi nhớ cho phiên làm việc.

### EXPLODE

Tên ngắn: `X`. Đa tuyến thành đường thẳng và cung; tham chiếu khối thành các đối tượng của chúng; kích thước thành đường thẳng, đầu mũi tên và văn bản. Mảng vẫn chỉnh sửa được ({{cmd:ARRAYEDIT}}) thành các bản sao thường của các đối tượng của nó.

- `Select objects`

### GROUP

Tên ngắn: `G`. {{cmd:GROUP}} đặt cho các đối tượng đã chọn một tên mà chúng dùng chung. Chọn các đối tượng, rồi gõ một tên (không có khoảng trắng; `?` liệt kê các nhóm; Enter tạo một nhóm không tên) và, với nhóm có tên, một mô tả tùy chọn. Từ đó, một cú nhấp vào một trong số đó, hoặc một cửa sổ bắt được một trong số đó, sẽ chọn tất cả, nên chúng dời, sao chép và xóa cùng nhau; mỗi đối tượng vẫn là đối tượng riêng. Một đối tượng có thể nằm trong nhiều nhóm. Bản sao của cả nhóm là một nhóm không tên mới; bản sao của một thành viên đứng riêng thì gia nhập nhóm. Nhóm thuộc về không gian mà chúng được tạo ra (mô hình hoặc một tờ). Chúng được giữ khi bạn lưu thành DWG hoặc DXF và mở lại tệp trong CadCraft; tệp DXF 2000 cũng mang chúng như đối tượng nhóm cho các chương trình khác, và các nhóm được tạo trong chương trình khác được đọc khi mở DXF hoặc DWG.

### UNGROUP

{{cmd:UNGROUP}} tháo các nhóm ra: chọn các đối tượng của nhóm (mỗi nhóm chúng thuộc về sẽ được tháo), hoặc gõ `Name` và tên của nhóm. Các đối tượng vẫn ở trong bản vẽ. Một bước hoàn tác đưa các nhóm trở lại.

### GROUPEDIT

{{cmd:GROUPEDIT}} đổi một nhóm. Chọn một trong các đối tượng của nó, hoặc `Name` và tên của nó; một nhóm đã được chọn sẽ được lấy như nó đang là. Sau đó: `Add` các đối tượng (chọn từng cái một, không theo nhóm), `Remove` các đối tượng, `REName` nhóm, đổi `Description` của nó, hoặc đặt `Selectable` (liệu một cú nhấp vào một đối tượng có chọn cả nhóm không). `eXit` hoặc Enter kết thúc. Một nhóm không còn đối tượng nào sẽ biến mất.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: với `1` (cài đặt ban đầu) một cú nhấp hoặc cửa sổ trên một đối tượng có nhóm sẽ chọn cả nhóm; với `0` chọn từng đối tượng riêng, để bạn sửa một thành viên. Được giữ cho phiên làm việc này.

## Bộ nhớ tạm

Bộ nhớ tạm riêng của CadCraft: nó hoạt động trong một bản vẽ, giữa các bản vẽ và giữa các thẻ CadCraft trong trình duyệt này. Xem [Sao chép, dán và nhân bản](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, hoặc {{ui:Sao chép}} trong nhóm {{ui:Chỉnh sửa}}. Sao chép đối tượng vào bộ nhớ tạm, cùng với các khối và lớp mà chúng dùng. Các đối tượng vẫn được chọn.

- `Select objects to copy` (bỏ qua khi các đối tượng đã được chọn)

### CUTCLIP

{{key:Mod+X}}, hoặc {{ui:Cắt}} trong menu {{ui:Thêm}}. Sao chép đối tượng vào bộ nhớ tạm, rồi xóa chúng (một bước hoàn tác).

- `Select objects to cut` (bỏ qua khi các đối tượng đã được chọn)

### COPYBASE

Sao chép đối tượng vào bộ nhớ tạm với một điểm gốc bạn chọn; khi dán, điểm đó được đặt vào vị trí.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, hoặc {{ui:Dán}} trong nhóm {{ui:Chỉnh sửa}}. Bản sao đi theo con trỏ, treo từ góc dưới-trái của phạm vi của nó (hoặc tâm của nó, hoặc điểm `COPYBASE`; xem [Cài đặt CadCraft](topic:settings)).

- `Specify insertion point`

Các đối tượng được dán sẽ được chọn. Một khối mà bản vẽ đã có dưới cùng tên giữ định nghĩa của bản vẽ này.

Khi một vùng được sao chép trong MarkupCraft mới hơn những gì CadCraft đã sao chép (và chưa quá 6 giờ), {{key:Mod+V}} và `PASTECLIP` dán vùng đó thay thế: xem `PASTEAREA`.

### PASTEAREA

Tên ngắn: `PAREA`. {{ui:Dán một vùng đã sao chép}} trong menu {{ui:Thêm}}. Dán một vùng được sao chép bằng {{ui:Sao chép vùng}} trong MarkupCraft như một ảnh ở kích thước thật. Xem [Ảnh trong bản vẽ](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (chỉ khi tờ không có tỷ lệ bản vẽ): một số, {{key:Enter}} cho kích thước giấy, hoặc `P`, rồi `First point on the pasted area`, `Second point on the pasted area` và khoảng cách thật của chúng.

### PASTEORIG

{{key:Mod+Shift+V}}, hoặc {{ui:Dán tại chỗ}} trong menu {{ui:Thêm}}. Dán tại tọa độ mà các đối tượng đã được sao chép từ đó. Không hỏi gì.

### DUPLICATE

Tên ngắn: `DUP`. {{key:Mod+D}}, hoặc {{ui:Nhân bản và di chuyển}} trong menu {{ui:Thêm}}. Một bản sao của các đối tượng di chuyển theo con trỏ từ vị trí của chúng; {{key:Esc}} không để lại gì. Không dùng bộ nhớ tạm.

- `Select objects to duplicate` (bỏ qua khi các đối tượng đã được chọn)
- `Specify where the copy goes (Esc leaves nothing)`: nhấp, gõ một điểm, `@dx,dy` (từ nơi con trỏ đang ở), hoặc một khoảng cách về phía con trỏ.

### SELECT

Hỏi `Select objects` (với mọi tùy chọn bên dưới) và giữ những gì bạn chọn được chọn, cho lệnh kế tiếp hoặc cho `P` sau này.

## Chọn nhanh

### QSELECT

Tên ngắn: `QS`. Trong trình duyệt, hộp thoại {{ui:Chọn nhanh}} (xem [Chọn đối tượng](topic:select-objects#select-by-a-rule-quick-select)). Không có nó, dòng lệnh hỏi `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` và `Enter value`. Các đối tượng khớp trở thành vùng chọn.

### SELECTSIMILAR

Tên ngắn: `SIM`. `Select objects [SEttings]` (hoặc vùng chọn hiện tại): chọn mọi đối tượng cùng loại có cùng lớp và màu (và tên khối, mẫu tô). `SE` hỏi `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, lặp lại cho đến {{key:Enter}}.

### FIND

Không có tên ngắn; hoặc {{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Tìm và thay thế}}. Trong trình duyệt, hộp thoại {{ui:Tìm và thay thế}} (xem [Thêm văn bản và nhãn](topic:text#find-and-replace-words)). Không có hộp thoại: `Enter text to find`, rồi `Enter replacement text (Enter: select what is found)`. Tìm trong văn bản, giá trị thuộc tính và văn bản kích thước, trên thẻ đang mở hoặc trong vùng chọn.

### SELECTALL và DESELECT

`SELECTALL` (tên ngắn `AI_SELALL`, {{key:Mod+A}}) chọn mọi đối tượng bạn có thể sửa trên thẻ đang mở. `DESELECT` (tên ngắn `AI_DESELECT`, `SELECTNONE`; hoặc {{key:Esc}}) xóa vùng chọn.

## Kích thước

### DIMLINEAR

Tên ngắn: `DLI`, `DIMLIN`. Khoảng cách nằm ngang hoặc thẳng đứng.

- `Specify first extension line origin [Select object]` (Enter hoặc `S`: `Select object to dimension`, rồi nhấp một đường thẳng, cung, hình tròn hoặc đoạn đa tuyến)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` hỏi văn bản (`<>` là giá trị đo được), `H` và `V` cố định hướng, `R` hỏi `Specify angle of dimension line <0>`.

### DIMALIGNED

Tên ngắn: `DAL`, `DIMALI`. Khoảng cách thật giữa hai điểm.

- Gốc như trong {{cmd:DIMLINEAR}}, rồi `Specify dimension line location [Text]`.

### DIMANGULAR

Tên ngắn: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Cung: góc của nó. Hình tròn: `Specify second angle endpoint`. Đường thẳng: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: nhấp bên trong góc để đo.

### DIMRADIUS và DIMDIAMETER

Tên ngắn: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, rồi `Specify dimension line location [Text]`.

### DIMCONTINUE

Tên ngắn: `DCO`, `DIMCONT`. Tiếp tục từ kích thước thẳng hoặc song song được tạo gần nhất (hoặc hỏi `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, lặp lại cho đến Enter.

### DIMBASELINE

Tên ngắn: `DBA`, `DIMBASE`. Giống {{cmd:DIMCONTINUE}}, nhưng mọi kích thước đều bắt đầu từ gốc thứ nhất và xếp chồng xa hơn ra ngoài.

### DIMORDINATE

Tên ngắn: `DOR`, `DIMORD`. `Specify feature location`, rồi `Specify leader endpoint [Xdatum/Ydatum/Text]`. Ghi khoảng cách của đặc điểm từ gốc UCS theo X hoặc Y, trên một đường dẫn: đường dẫn chạy chủ yếu lên hoặc xuống được đọc là X, đường chạy ngang được đọc là Y; `Xdatum` và `Ydatum` cố định điều đó. Đặt gốc trước bằng {{cmd:UCS}} (không có nó thì là 0,0 của bản vẽ). Grip dời đặc điểm, gốc và đầu của đường dẫn, và giá trị đi theo. Được lưu như một kích thước tọa độ thật trong DWG và DXF. Từ chối một đầu đường dẫn nằm đúng trên đặc điểm.

### DIMARC

Tên ngắn: `DAR`. `Select arc or polyline arc segment`, rồi `Specify arc length dimension location [Text]`. Đo dọc theo cung (không phải dây cung) và ghi ký hiệu cung trước giá trị. Từ chối một hình tròn đầy đủ, một đường thẳng hoặc một đoạn thẳng của đa tuyến. DWG giữ nó như một kích thước độ dài cung; DXF giữ nó như một kích thước góc với độ dài làm văn bản, và CadCraft mở lại nó như một kích thước độ dài cung.

### DIMJOGGED

Tên ngắn: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Một kích thước bán kính cho một đường cong có tâm ở xa hoặc nằm ngoài tờ: đường kích thước bắt đầu từ điểm bạn đưa ra thay vì tâm, có một chỗ gãy trong đó, và vẫn ghi bán kính thật. DWG giữ nó như một kích thước bán kính gãy; DXF giữ nó như một kích thước bán kính, và CadCraft mở lại nó có gãy.

### DIMJOGLINE

Tên ngắn: `DJL`. `Select dimension to add jog [Remove]`, rồi `Specify jog location (or press Enter)`. Đặt một ký hiệu gãy lên đường của một kích thước thẳng hoặc song song, để cho thấy khoảng cách không vẽ theo tỷ lệ; giá trị không đổi. `Remove` gỡ nó đi. Từ chối các loại kích thước khác.

### QDIM

Không có tên ngắn. `Select geometry to dimension`, rồi `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Ghi kích thước cho nhiều đối tượng trong một bước, từ các đầu đường thẳng và đoạn đa tuyến, tâm của hình tròn và cung, điểm và tham chiếu khối. Một vị trí phía trên hoặc dưới các đối tượng đo ngang qua, một vị trí bên cạnh chúng đo lên. `Continuous` nối các điểm thành chuỗi, `Baseline` đo tất cả từ điểm đầu, `Staggered` lồng các cặp từ giữa ra ngoài, `Ordinate` cho mỗi điểm khoảng cách từ gốc (`datumPoint` chọn gốc mới), `Radius` và `Diameter` ghi kích thước cho mọi hình tròn và cung được chọn. Chế độ được ghi nhớ. Mọi thứ nó tạo là một bước hoàn tác. Nó cho biết khi có ít hơn hai điểm, hoặc không có cung hay hình tròn cho Radius và Diameter.

### DIMBREAK

Tên ngắn: `DBREAK`. `Select dimensions to add or remove breaks`, rồi `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` để một khe hở trong đường kích thước và đường gióng ở bất kỳ chỗ nào đối tượng khác cắt qua, và tính lại các khe đó khi các đối tượng ấy hoặc kích thước dời. `Manual` (một kích thước) hỏi hai điểm và để một khe hở giữa chúng. `Remove` gỡ mọi khe hở. Khe hở bằng 1.5 lần chiều cao văn bản của kích thước.

### DIMSPACE

Không có tên ngắn. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Dời các đường kích thước của các kích thước thẳng và song song (hoặc các kích thước góc quanh cùng một đỉnh) để chúng cách nhau đều, tính từ kích thước gốc, mỗi cái ở phía nó đang nằm. `0` xếp thẳng hàng với kích thước gốc; `Auto` bằng hai lần chiều cao văn bản của kích thước gốc. Các kích thước không song song với gốc được giữ nguyên.

### DIMINSPECT

Không có tên ngắn. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Vẽ một khung quanh giá trị với nhãn ở trước và tần suất kiểm tra ở sau. `remove` gỡ khung. Văn bản dung sai nằm cùng giá trị.

### DIMOVERRIDE

Tên ngắn: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, lặp lại cho đến Enter, rồi `Select dimensions`. Đổi các cài đặt đó chỉ trên các kích thước đã chọn; kiểu kích thước không đổi. Nhận các biến là số hoặc công tắc (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` đưa các kích thước đã chọn về kiểu của chúng. Từ chối một tên không phải biến như vậy, và một giá trị nó không nhận.

### DIMREASSOCIATE

Tên ngắn: `DRE`, `DIMREASSOC`. `Select dimensions`, rồi cho mỗi cái các gốc đường gióng của nó (`Specify first extension line origin on an object`: bắt vào một đầu hoặc giữa một đường, một góc đa tuyến, một tâm; Enter giữ điểm đó tự do), hoặc với kích thước bán kính, đường kính, bán kính gãy hoặc độ dài cung `Select arc or circle`. Kích thước khi đó gắn với các đối tượng đó: khi chúng dời hoặc đổi kích thước, nó đi theo trong cùng một bước hoàn tác và được đo lại. Sửa tay một điểm đã gắn, hoặc xóa đối tượng, sẽ kết thúc sự gắn đó. Sự gắn được lưu trong DWG và DXF 2000 như dữ liệu riêng của CadCraft; các chương trình khác thấy một kích thước thông thường.

### DIMDISASSOCIATE

Tên ngắn: `DDA`, `DIMDISASSOC`. `Select dimensions`. Giải phóng chúng khỏi các đối tượng mà chúng gắn vào; không có gì dời.

### CENTERMARK

Tên ngắn: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, lặp lại cho đến Enter. Vẽ một chữ thập ở tâm và bốn đường tâm kéo dài ra ngoài đường cong một chút (kiểu đường CENTER), như các đường thường trên lớp hiện hành; cỡ được lấy từ kích thước mũi tên và tỷ lệ tổng thể của cài đặt kích thước hiện hành, xoay theo UCS. Chúng không theo hình tròn nếu hình tròn dời.

### CENTERLINE

Tên ngắn: `CL`. `Select first line`, `Select second line`. Vẽ một đường ở giữa hai đường thẳng (dọc theo đường phân giác khi chúng gặp nhau), hơi dài hơn chúng, theo kiểu đường CENTER. Một đường thường: nó không theo hai đường thẳng.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Không có tên ngắn. Mỗi cái hỏi `Enter new value for … <current>` và đặt kích thước đó cho các kích thước **mới**: tỷ lệ tổng thể, chiều cao văn bản, kích thước mũi tên, số chữ số thập phân (tối đa 8), khoảng trống quanh văn bản, phần kéo dài vượt đường kích thước, khoảng dời khỏi gốc. Xem [Đặt kích thước ghi chú](topic:dimension-settings).

### DIMLUNIT

Cài đặt kích thước: định dạng của các kích thước mới (1 khoa học, 2 thập phân, 3 kỹ thuật, 4 kiến trúc, 5 phân số).

### DIMSTYLE và -DIMSTYLE

Tên ngắn: `DST`, `DDIM`, `D`. Trình quản lý kiểu kích thước: {{ui:Đặt làm hiện tại}}, {{ui:Mới…}}, {{ui:Sửa…}}, {{ui:Đổi tên…}}, {{ui:Xóa}}, {{ui:So sánh…}}, {{ui:Áp dụng cho mục đã chọn}}. `-DIMSTYLE` trên dòng lệnh: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Xem [Đặt kích thước ghi chú](topic:dimension-settings#named-dimension-styles).

### DIMEDIT và DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, rồi các kích thước (hoặc những cái đã được chọn). New hỏi văn bản (`<>` = số đo); Rotate cho một góc (0 đưa văn bản về chỗ cũ); Oblique cho góc của đường gióng so với trục X (Enter = không có; chỉ kích thước thẳng và song song). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Xem [Đặt kích thước ghi chú](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Tên ngắn: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, hoặc khi đã chọn kích thước `Units in the text of the selected dimensions`. Ghi chiều dài đo được theo đơn vị đó với đơn vị theo sau (DIMLFAC và một hậu tố DIMPOST); `D` quay lại đơn vị của bản vẽ. Xem [Kích thước theo mm, cm, m hoặc km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Tên ngắn: `RC`. In `Arc length: … Type: …`, rồi `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular hỏi `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand theo con trỏ cho đến một cú nhấp hoặc {{key:Enter}}; `O` hỏi `Select object` và `Reverse direction? [Yes/No] <N>` và biến đối tượng thành đám mây. `A` hỏi `Specify the length of each arc`. `R`, `P` và `F` chọn kiểu cho đám mây kế tiếp. Kết quả là một đa tuyến khép kín gồm các cung.

### MLEADER

Tên ngắn: `MLD`; hoặc {{ui:Đường dẫn}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, rồi văn bản trong hộp tại chỗ (hoặc, không có hộp, `Enter text (an empty line ends)`). `Block` hỏi tên khối trước, và đường dẫn nhiều hiện khối đó thay vì văn bản. Thêm đường dẫn: {{cmd:MLEADEREDIT}}. Được lưu như một đường dẫn nhiều thật trong DWG; DXF giữ các đường, đầu mũi tên và văn bản mà nó vẽ.

### MLEADEREDIT

Tên ngắn: `MLE`. `Select a multileader`, rồi `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: mỗi điểm thêm một đường dẫn từ một đầu mũi tên mới đến cùng điểm hạ cánh, cho đến Enter. `Remove leaders` khi đó gỡ đường dẫn bạn nhấp (một đường dẫn nhiều giữ ít nhất một đường). `Block content` hỏi tên khối và hiện khối đó thay vì văn bản (các thuộc tính của nó được hỏi); `Text content` đưa văn bản trở lại. Mỗi đường dẫn có grip riêng. DWG giữ mọi đường dẫn và khối trong một đường dẫn nhiều.

### MLEADERALIGN

Tên ngắn: `MLA`. `Select multileaders`, rồi `Select multileader to align to [Distribute/Spacing/Use current spacing]` và `Specify direction`. Dời các điểm hạ cánh của các đường dẫn nhiều khác (và văn bản hoặc khối của chúng) lên đường đi qua điểm hạ cánh của cái đã chọn theo hướng đó; các đầu mũi tên giữ nguyên hướng chỉ. `Spacing` cũng đặt chúng cách đều nhau; `Distribute` hỏi hai điểm và trải đều giữa chúng. Cần ít nhất hai đường dẫn nhiều.

### MLEADERCOLLECT

Tên ngắn: `MLC`. `Select multileaders`, rồi `Specify collected multileader location [Vertical/Horizontal]` (Enter giữ vị trí của cái đầu tiên). Tạo một đường dẫn nhiều từ nhiều cái: nội dung khối đi vào một khối mới chứa mọi khối xếp cạnh nhau hoặc chồng dưới nhau; nội dung văn bản thành một ghi chú với một dòng cho mỗi cái. Đường dẫn nhiều đầu tiên giữ các đường dẫn của nó; các cái khác bị gỡ. Từ chối trộn lẫn nội dung văn bản và khối.

### TABLE

Tên ngắn: `TB`; hoặc {{ui:Chú thích}} › {{ui:Thêm}} › {{ui:Bảng}}. Tạo một bảng: một đối tượng mà bạn dời, sao chép, xoay, đổi tỷ lệ và in như bất kỳ đối tượng nào khác, với các ô được giữ như dữ liệu.

- `Number of data rows or [Paste/File/Style] <3>`, rồi `Number of columns <3>`, `Text height` và `Top left corner of the table`. Bảng có một hàng tiêu đề (một ô gộp) và một hàng đầu phía trên các hàng dữ liệu.
- `P`: một bảng từ các ô bảng tính trong bộ nhớ tạm (văn bản có tab giữa các ô). Nhấn {{key:Ctrl+V}} khi các ô như vậy nằm trong bộ nhớ tạm sẽ làm việc tương tự, trừ khi bản sao của chính CadCraft mới hơn (hoặc CadCraft không phân biệt được: khi đó nó dán bản sao của chính nó và cho biết điều đó). `F`: một bảng từ tệp `.csv` hoặc tệp phân cách bằng tab. Hàng đầu tiên thành hàng đầu; độ rộng cột vừa với văn bản.
- `S`: chọn kiểu bảng cho bảng này (xem {{cmd:TABLESTYLE}}).
- Nó từ chối số hàng hoặc số cột không phải số nguyên, và số ô nhiều hơn một bảng chứa được (2.000 hàng, 200 cột, 40.000 ô).
- {{cmd:EXPLODE}} biến bảng thành đường thẳng và văn bản. Khi lưu thành DWG, bảng là một đối tượng bảng thật mà các chương trình khác có thể sửa; khi lưu thành DXF, nó là một khối vẽ nó, và CadCraft mở lại như một bảng.

### TABLEDIT

Tên ngắn: `TABLEEDIT`, `TABEDIT`; hoặc nhấp đúp vào một ô. Sửa một bảng.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Nhấp một ô, hoặc khi bảng được chọn gõ tên của nó (`B3`: cột B, hàng 3; hàng tiêu đề là hàng 1). Trong trình duyệt, một hộp mở trên ô: {{key:Enter}} giữ văn bản, {{key:Tab}} sang ô kế tiếp, {{key:Alt+Enter}} bắt đầu dòng mới, {{key:Esc}} để ô như cũ.
- Một văn bản bắt đầu bằng `=` là công thức: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, với `+ - * / ^`, dấu ngoặc và các hàm như `sqrt` và `round`. Ô hiện giá trị; một công thức tự nêu ô của nó, một ô nằm ngoài bảng, hoặc một ô không có số sẽ hiện `####` và dòng lệnh cho biết lý do.
- `R` / `C`: `Insert` hoặc `Delete` hàng hoặc cột tại một ô được chọn (bao nhiêu, và phía trên hoặc dưới, trái hoặc phải). Công thức đi theo các ô mà chúng nêu.
- `S`: chiều rộng của cột và chiều cao của hàng. Một hàng không bao giờ thấp hơn văn bản cần; một bảng đã chọn cũng có một grip ở mép mỗi cột và mỗi hàng.
- `M`: gộp từ một ô được chọn đến ô khác; `U`: bỏ gộp. `A`: căn lề (`TL` trên trái … `MC` giữa-giữa … `BR` dưới phải). `H`: chiều cao văn bản riêng của ô này (0 = của kiểu). `K`: đặt hàng thành tiêu đề, đầu hoặc dữ liệu. `CL`: làm rỗng ô.
- Nó từ chối một bảng trên lớp đã khóa, việc xóa mọi hàng hoặc cột, và một phép gộp sẽ cắt đôi một ô đã gộp khác.

### TABLESTYLE

Tên ngắn: `TS`. Liệt kê các kiểu bảng cùng số bảng dùng mỗi kiểu, rồi `Table style: [New/Set/Edit/Delete/Apply]`.

- Một kiểu giữ chiều cao văn bản và căn lề của các hàng tiêu đề, đầu và dữ liệu, lề ô, và các đường viền được vẽ (ngoài, giữa các hàng, giữa các cột).
- `N` tạo một kiểu từ kiểu hiện tại và đặt nó làm hiện hành; `S` đặt kiểu hiện hành (bảng mới nhận nó); `E` sửa một kiểu: các bảng dùng nó được vẽ lại; `A` đưa kiểu hiện hành cho các bảng đã chọn; `D` xóa một kiểu (không phải Standard, không phải kiểu hiện hành; các bảng từng dùng nó giữ diện mạo của chúng).
- Các kiểu được lưu cùng bản vẽ (DWG và DXF).

### TABLEEXPORT

Lưu những gì bảng hiện ra thành tệp CSV (một công thức như giá trị của nó). `Select a table`, hoặc chọn trước một bảng. Ô văn bản bắt đầu bằng `=`, `+`, `-` hoặc `@` được thêm `'` ở đầu để bảng tính không chạy chúng.

### TABLEPASTE

Tên ngắn: `PASTETABLE`. Tạo một bảng từ các ô bảng tính trong bộ nhớ tạm, rồi hỏi góc trên-trái của nó. Giống {{cmd:TABLE}} › `Paste`.

### DATALINK

Tên ngắn: `DL`. `Data link: [New/List/Remove] <New>`. `N` hỏi một tệp CSV, đặt một bảng của nó và ghi nhớ tên tệp; `L` liệt kê các liên kết cùng tệp, kích thước, thời điểm đọc và số bảng dùng; `R` gỡ một liên kết (các bảng của nó vẫn là bảng thường).

### DATALINKUPDATE

Tên ngắn: `DLU`. Đọc lại tệp của một liên kết dữ liệu và làm đầy lại các bảng được liên kết với nó (hàng và cột được thêm hoặc bỏ để khớp). Trình duyệt không tự mở được tệp, nên nó yêu cầu bạn chọn lại tệp. Khi có nhiều liên kết, nó hỏi cái nào.

### FIELD

Đặt một trường vào bản vẽ: văn bản tự tính. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: bây giờ, hoặc ngày đã lưu, đã tạo hay đã in, và một định dạng (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: tên tệp, có hoặc không có phần mở rộng. `S`: số tờ, tiêu đề của nó, hoặc có bao nhiêu tờ. `P`: một thuộc tính bản vẽ theo tên (xem {{cmd:DWGPROPS}}). `O`: chọn một đối tượng, rồi cái cần đọc (diện tích, chiều dài, chu vi, bán kính, đường kính, lớp, tên, x, y, văn bản, góc xoay, màu) và số chữ số thập phân. `E`: một công thức. `C`: một văn bản có các mã gõ như vậy, ví dụ `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Rồi `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: một văn bản được chọn sẽ có trường thêm vào sau nội dung của nó; một ô bảng cũng vậy; một tham chiếu khối hỏi thuộc tính nào; {{key:Enter}} hỏi chiều cao và một điểm cho văn bản mới.
- Trên màn hình, một trường có nền xám nhạt; bản in và PDF không bao giờ có. Gõ đè lên văn bản của trường bằng tay sẽ kết thúc trường. Một trường không tính được sẽ hiện `####`.
- Trường của một đối tượng tìm đối tượng đó theo khóa mà CadCraft giữ trên đối tượng (Cài đặt › CadCraft › Tệp thân thiện với gộp); khi khóa tắt, nó từ chối.

### UPDATEFIELD

Tên ngắn: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` đặt khi nào các trường tự cập nhật: gõ các chữ cái của `O` mở, `S` lưu, `P` in, `R` tạo lại (cả bốn để bắt đầu), hoặc `NONE`.

### DWGPROPS

Tên ngắn: `DRAWINGPROPS`. Liệt kê các thuộc tính của bản vẽ, rồi `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Sáu cái đầu là những cái mà bảng {{ui:Chi tiết bản vẽ}} hiện; `U` thêm tên và giá trị của riêng bạn, `R` gỡ một cái. Các trường đọc chúng (`%<prop:title>%`, `%<prop:Client>%`) và theo ngay. Nó từ chối một tên tùy chỉnh trùng với tên có sẵn hoặc chứa `%`, `<`, `>`, dấu nháy hoặc dấu gạch chéo ngược.

## Tham số

Xem [Ràng buộc bản vẽ](topic:constraints) và [Dùng tham số và phương trình](topic:parameters). Ràng buộc hoạt động trên thẻ {{ui:Mô hình}}.

### GEOMCONSTRAINT và các lệnh GC

Tên ngắn `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, rồi các lời nhắc của lệnh đó.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (đối tượng thứ hai dời).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT và các lệnh DC

Tên ngắn `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (một số, một biểu thức, hoặc `name=expression`).
- {{cmd:DCALIGNED}}: như trên, với `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` hỏi dung sai khoảng cách và góc.
- {{cmd:DELCONSTRAINT}} (tên ngắn `DELCON`): `Select objects`; các ràng buộc của chúng sẽ đi.
- {{cmd:CONSTRAINTBAR}} (tên ngắn `CBAR`): `Select objects [Showall/Hideall]`, rồi `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS và -PARAMETERS

{{cmd:PARAMETERS}} (tên ngắn `PAR`, `PARAM`) mở bảng {{ui:Tham số}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Tên ngắn `SWMACRO`. Tải một macro (.swb) dựng lại mô hình thành một phác thảo có ràng buộc trong SolidWorks. Xem [Chuyển phác thảo sang và từ các trình mô hình chi tiết khác](topic:solidworks-sketches).

## Khối

### ANNOSCALE

Tên ngắn: `CANNOSCALE`. Nói tỷ lệ chú thích của bản vẽ và có bao nhiêu đối tượng chú thích, rồi hỏi `New annotation scale`: gõ `1:50`, `1:100`, `2:1`, một số trơ trọi (`50` là 1:50), hoặc tên của một trong các tỷ lệ riêng của bản vẽ. Mọi văn bản và kích thước chú thích được đổi cỡ để in ở cùng kích thước tại tỷ lệ mới, trong một bước hoàn tác; các đối tượng không chú thích được giữ nguyên, và một đối tượng giữ danh sách tỷ lệ không có tỷ lệ mới cũng vậy ({{cmd:OBJECTSCALE}}). Xem [Đơn vị, khổ giấy và tỷ lệ](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Tên ngắn: `OBJSCALE`. `Select annotative objects`, rồi `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Một văn bản hoặc kích thước chú thích giữ một danh sách tỷ lệ chú thích. `Add` và `Delete` hỏi một tỷ lệ (`1:50`, `2:1`, một số trơ trọi, hoặc tên một trong các tỷ lệ riêng của bản vẽ); `Current scale` thêm tỷ lệ chú thích của bản vẽ; `List` in danh sách tỷ lệ của mỗi đối tượng. Một khung nhìn có tỷ lệ nằm trong danh sách của đối tượng sẽ hiện đối tượng ở kích thước in đúng chiều cao giấy của nó ở tỷ lệ đó, trên màn hình và trong bản in. Không xóa được tỷ lệ cuối cùng. Các đối tượng không chú thích bị bỏ qua: hãy bật Chú thích theo tỷ lệ trong Thuộc tính trước. Các danh sách được lưu trong DWG và DXF như dữ liệu riêng của CadCraft. Xem [Đơn vị, khổ giấy và tỷ lệ](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Tên ngắn: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Bật (khi bản vẽ mở): một đối tượng chú thích cũng hiện trong khung nhìn, hoặc trong mô hình, có tỷ lệ không nằm trong danh sách của nó, ở kích thước nó có. Tắt: nó không hiện ở đó, và không thể chọn trong mô hình. Công tắc là một bước hoàn tác; nó không được lưu trong tệp.

### SCALELISTEDIT

Tên ngắn: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` cho đến {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit và Delete hỏi tên tỷ lệ. Các tỷ lệ riêng của bản vẽ tham gia danh sách tỷ lệ khung nhìn và tỷ lệ in, và được lưu cùng bản vẽ. Xem [Đơn vị, khổ giấy và tỷ lệ](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT và PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: các điểm mà đường cong đi qua; `Close`, `Undo`, rồi `Start tangent` và `End tangent` (một điểm, hoặc {{key:Enter}}). Method › Control vertices hỏi bậc (1 đến 5) và vẽ từ một đa giác điều khiển. Object biến đa tuyến thành spline đi qua các đỉnh của nó. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` cho nhiều đối tượng; đường thẳng, cung và spline được đề nghị thành đa tuyến trước. Xem [Spline và đa tuyến](topic:splines).

### BLOCK

Tên ngắn: `B`, `BMAKE`.

- `Enter block name`. Nếu đã có: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Chúng được thay bằng một tham chiếu đến khối mới.

### WBLOCK

Tên ngắn: `W`, `-WBLOCK`. Ghi một khối, một số đối tượng hoặc toàn bộ bản vẽ thành một tệp DWG hoặc DXF mới. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (nó trở thành gốc của bản vẽ mới), `Select objects`, rồi `File format [DWG/DXF/R12 DXF]` và `File name for the new drawing`, rồi `What to do with the objects [Retain/Convert to block/Delete]`. Convert thay chúng bằng một tham chiếu đến một khối có tên của tệp; Delete xóa chúng.
- **Block**: `Block to write out`. Các đối tượng riêng của khối, với điểm gốc của nó làm gốc, kể cả các khối lồng nhau.
- **Entire drawing**: mọi đối tượng trong không gian mô hình. Tờ không được ghi; dùng {{cmd:SAVEAS}} để có bản sao giữ tờ.

Tệp mới chỉ chứa các lớp, kiểu đường, kiểu văn bản và kiểu kích thước, và các khối mà các đối tượng của nó dùng, cùng đơn vị của bản vẽ. Phiên bản của DWG là phiên bản mà {{cmd:SAVEAS}} dùng lần cuối. Trong trình duyệt, tệp được tải xuống; trong Studio, hộp thoại lưu mở ra.

### ATTDEF

Tên ngắn: `ATT`, `DDATTDEF`, `-ATTDEF`; hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Định nghĩa thuộc tính}}. In các chế độ, rồi `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` khi là hằng số), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} đưa các định nghĩa thuộc tính vào khối.

### EATTEDIT và ATTEDIT

`EATTEDIT` (`DDATTE`, hoặc nhấp đúp một tham chiếu có thuộc tính; {{ui:Khối}} › {{ui:Thêm}} › {{ui:Sửa thuộc tính}}): `Select a block reference with attributes`, rồi hộp thoại {{ui:Sửa thuộc tính}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): cùng tham chiếu, rồi `<prompt> (<TAG>) <value>` cho mỗi thuộc tính; {{key:Enter}} giữ một giá trị. Xem [Thuộc tính](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Giá trị được giữ; thuộc tính mới nhận giá trị mặc định, thuộc tính đã xóa đi, vị trí được đặt lại.

### BATTMAN

{{ui:Khối}} › {{ui:Thêm}} › {{ui:Trình quản lý thuộc tính}}. Hộp thoại: khối, thuộc tính (thẻ, lời nhắc, mặc định, chế độ, thứ tự), {{ui:Cập nhật các tham chiếu (giữ giá trị)}}, {{ui:Áp dụng}}.

### REFEDIT và REFCLOSE

{{ui:Khối}} › {{ui:Thêm}} › {{ui:Sửa tại chỗ}}. `REFEDIT`: `Select the block reference to edit in place` (hoặc vùng chọn). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Lưu khối}} và {{ui:Bỏ}} trên thanh làm việc giống nhau. Toàn bộ việc sửa là một bước hoàn tác. Xem [Thuộc tính](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: việc áp lực của nét bút có đặt độ dày nét của những gì {{cmd:SKETCHFIX}} và {{cmd:SKETCHLIVE}} tạo ra (ban đầu là bật). Xem [Phác thảo bằng bút](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Tên ngắn: `OFFSTD`. Cho biết tiêu chuẩn văn phòng nào có hiệu lực cho bản vẽ này và nó đến từ đâu: bản ghi riêng của bản vẽ, tiêu chuẩn chung của nhóm bạn, hoặc Chính sách mặc định của bạn (chiều cao văn bản `all.anno.*`); không có gì thì là kích thước riêng của chương trình. `[Import/Layers/Title block/Clear/eXit]`: `Import` đọc một `cc-office-standard` .json (bản ghi SuperCad và BimCraft ghi) vào bản vẽ này, được lưu cùng nó trong DWG và DXF; `Layers` thêm các lớp văn phòng mà bản vẽ còn thiếu, trong một bước hoàn tác, và không bao giờ xóa một lớp nào; `Title block` liệt kê các trường của văn phòng với giá trị riêng của bản vẽ này; `Clear` xóa bản ghi riêng của bản vẽ. Chiều cao văn bản và kích thước chú thích theo tiêu chuẩn đang có hiệu lực. Xem [Đơn vị, khổ giấy và tỷ lệ](topic:units-papers-scales).

### BPARAMS

Tên ngắn: `BPM`, `BLOCKPARAMS`. Mở trình quản lý Tham số cho khối trong trình soạn khối, khối của tham chiếu đã chọn, hoặc khối bạn nêu tên (`Block name`): tham số có công thức, nhiều tham số hiển thị với các trạng thái của chúng, và giá trị và trạng thái riêng của tham chiếu đã chọn. Xem [Tham số và trạng thái hiển thị riêng](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` làm việc tương tự trên dòng lệnh: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT và BCLOSE

`BE`; hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Sửa khối}}. `Enter block name to edit <the selected reference's block>` mở trình soạn khối. `BCLOSE` hỏi `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Lưu khối}} và {{ui:Bỏ thay đổi}} trên biểu ngữ làm việc giống nhau. Mọi việc làm trong trình soạn là một bước hoàn tác.

### VIEWBASE

Tên ngắn: `FLATSHOT`. Một khung nhìn 2D phẳng của các vật rắn trên thẻ 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, một tỷ lệ (`1:20`, `2:1`; {{key:Enter}} lấy tỷ lệ vừa tờ), rồi tâm của khung nhìn. Một tham chiếu khối; các cạnh nhìn thấy nằm trên VIEW-VISIBLE, cạnh khuất vẽ nét đứt trên VIEW-HIDDEN. Xem [Khung nhìn phẳng trên tờ](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Tên ngắn: `-PUBLISH`; hoặc {{ui:Mọi tờ trong một PDF}} trong hộp thoại {{ui:In ra PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} in mọi tờ, `S` hỏi tên cách nhau bằng dấu phẩy. Một PDF, một trang và một dấu trang cho mỗi tờ. Xem [Mọi tờ trong một PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Tên ngắn: `SSM`, `SHEETSETMANAGER`. Đưa bạn đến mục {{ui:Bộ tờ}} của bảng bên trái: các tờ từ nhiều bản vẽ, được đánh số và đặt tên, khung tên của chúng được điền từ bộ, xuất bản thành một PDF. Xem [Bộ tờ](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): chọn một DWG hoặc DXF, rồi điểm chèn của nó. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; khi có nhiều liên kết, chọn một tham chiếu của nó hoặc gõ `N` và tên của nó. Xem [Bản vẽ liên kết](topic:files#linked-drawings-external-references).

### COUNT

Tên ngắn: `BCOUNT`; hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Đếm khối}}. `Select a block reference to count, or [All/Export] (Enter: All)`: một cú chọn sẽ chọn và đếm mọi tham chiếu của khối đó trong không gian này; {{key:Enter}} hoặc `A` liệt kê tất cả; `E` rồi `C` (số đếm) hoặc `A` (thuộc tính) tải xuống một CSV. Xem [Đếm khối và xuất bảng thống kê](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Tên ngắn: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (không phân biệt chữ hoa chữ thường). `F` hỏi một DWG hoặc DXF, rồi toàn bộ bản vẽ hoặc một trong các khối của nó; một tên đã dùng hỏi {{ui:Giữ cái hiện có}} hoặc {{ui:Đổi tên}}. `L` mở bảng thư viện.
- `Specify insertion point [Scale/Rotate]`. `S` hỏi `Specify scale factor`, `R` hỏi `Specify rotation angle`; cả hai đều được ghi nhớ.
- Khi khối đã đứng cạnh các đối tượng lặp lại ở nơi khác mà không có nó, một dòng cho biết có bao nhiêu chỗ được gợi ý, và lời nhắc thêm `suGgested`: `G` hiện chúng; nhấp gần một chỗ để đặt khối vào đó, `A` cho tất cả, {{key:Enter}} để quay lại. Chúng nhận góc xoay của hàng xóm và giá trị thuộc tính mặc định. Bản vẽ có hơn 20.000 đối tượng trong không gian mở sẽ không được tìm.
- Rồi `Enter <prompt> (<TAG>) <default>` cho mỗi thuộc tính mà khối yêu cầu. Xem [Thuộc tính khối](topic:attributes).

### LIBRARY

Tên ngắn: `LIB`. Mở bảng thư viện: đặt mục, kiểm tra cập nhật, ghi công thư viện. Không có câu hỏi. Xem [Chèn từ tệp hoặc thư viện](topic:insert-from-file-and-library).

### STEELMEMBER

Tên ngắn: `SMEMBER`; hoặc {{ui:Thanh 3D}} trên thẻ {{ui:Chuẩn}} của thư viện. `Section size <W12x26>` (như thẻ liệt kê), rồi `Start point [Column]` và `End point`: một thanh đặc trên thẻ 3D giữa hai điểm, đặt trên mặt đất. `C` hỏi điểm gốc của cột và chiều cao của nó. Một bước hoàn tác. Xem [Đặt thép hình và chi tiết tiêu chuẩn](topic:steel-and-standard-parts).

### PARTSLIST

Tên ngắn: `PLIST`. `Top left corner of the parts list`, rồi `Text height <2.5>`: vẽ một bảng của mọi chi tiết tiêu chuẩn và thép hình được đặt từ thư viện (số mục, số lượng, chi tiết, tiêu chuẩn, kích thước, chiều dài, vật liệu, khối lượng). Một bước hoàn tác. Xem [Đặt thép hình và chi tiết tiêu chuẩn](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Tên ngắn: `PU`. Xóa các định nghĩa khối không có gì dùng. Không có câu hỏi.

### DELBLOCKS

Hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Xóa khối}}. `Select block to delete [Name/eXit]`: chọn một tham chiếu khối, hoặc `N` để có danh sách khối với bộ lọc (chọn nhiều), hoặc `X` / {{key:Enter}} để kết thúc. Mọi tham chiếu bị xóa — trong mô hình, trên mọi tờ và bên trong các khối khác — rồi đến định nghĩa, và dòng lệnh cho biết đã xóa gì và cái gì không xóa được. Khối không tên và bản vẽ liên kết không được đề nghị. Lời nhắc quay lại cho khối kế tiếp; toàn bộ lệnh là một bước hoàn tác.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} dán những gì bạn đã sao chép ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) thành một khối: chọn điểm chèn và một tham chiếu đến khối mới được đặt tại đó, và được chọn. Khối có tên riêng (`A$C` và một số); {{cmd:RENAME}} đặt tên của bạn. Một bước hoàn tác xóa tham chiếu và khối.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} hỏi khối cần thay và khối đặt vào chỗ đó (`?` liệt kê các khối), rồi đổi mọi tham chiếu trong mô hình, trên mọi tờ và bên trong các khối khác. Mỗi tham chiếu giữ vị trí, tỷ lệ, góc xoay, lớp và giá trị của các thuộc tính mà cả hai khối đều có; các thuộc tính chỉ khối mới có bắt đầu từ mặc định, và nó cho biết giá trị nào đã bị bỏ. Khi không còn gì dùng khối cũ, nó đề nghị xóa khối đó. Nó từ chối bản vẽ liên kết và một khối thay thế sẽ đặt một khối vào chính nó. Một bước hoàn tác.

### MINSERT

{{cmd:MINSERT}} đặt một khối theo hàng và cột: tên khối, điểm chèn, tỷ lệ, góc xoay, số hàng và cột, và khoảng cách giữa chúng. Cả bộ xoay theo góc xoay. Mỗi cái là một tham chiếu riêng (tối đa 10.000), nên cái nào cũng có thể dời hoặc xóa sau đó.

### BLOCKSPALETTE

Tên ngắn: `BLOCKSPAL`; hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Bảng Khối}}. Hiện bảng {{ui:Khối}} với con trỏ trong ô lọc. Mỗi khối có một hình nhỏ; khối được đặt gần đây nhất đứng trước. Hai nút bên cạnh bộ lọc chuyển giữa danh sách và lưới hình. Nhấp một hình (hoặc {{ui:Chèn}}) để đặt khối bằng {{cmd:INSERT}}, hoặc kéo nó vào bản vẽ để đặt nơi bạn thả.

{{ui:Thư viện}}, dưới danh sách: {{ui:Thêm bản vẽ}} lấy một tệp DWG hoặc DXF của riêng bạn và liệt kê các khối của nó kèm hình, và toàn bộ bản vẽ như một khối. Đặt một khối sẽ sao chép định nghĩa của nó (và các khối lồng trong nó, cùng các lớp của chúng) vào bản vẽ này, như tùy chọn `File` của {{cmd:INSERT}}; một khối đã có ở đây với cùng định nghĩa được dùng mà không hỏi, một khối cùng tên nhưng khác thì hỏi {{ui:Giữ cái hiện có}} hoặc {{ui:Đổi tên}}. Trong trình duyệt, tệp còn cho đến khi trang đóng. Trong CadCraft Studio, {{ui:Thêm thư mục}} liệt kê các bản vẽ trong một thư mục, mỗi bản được mở khi bạn nhấp, và tệp cùng thư mục được ghi nhớ. Nút x nhỏ gỡ một thư viện khỏi danh sách; tệp không bị động đến. {{ui:Thư viện}} dùng chung là một thứ khác: xem [Chèn từ tệp hoặc thư viện](topic:insert-from-file-and-library).

### BCONVERT

Hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Chuyển lặp lại thành khối}}. Tìm hình học lặp lại và biến mọi bản sao thành một tham chiếu đến một khối.

- `Select the objects that repeat, or [Block]`: các đối tượng của một bản sao. `B` đặt tên một khối có sẵn thay thế, để tìm các bản sao rời của các đối tượng của nó.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` và `P` đổi những gì được tính là bản sao; {{key:Enter}} tìm kiếm. Các cài đặt được ghi nhớ.
- `Name for the new block <Block1>`, rồi `Specify the block's base point` ({{key:Enter}} lấy góc dưới-trái của vùng chọn).
- Nó cho biết có bao nhiêu nhóm đối tượng khác có cùng hình học, làm nổi bật mọi thứ nó sẽ thay, và hỏi `Yes/No`.

Một bản sao là các đối tượng giống nhau được dời và xoay theo góc bất kỳ (và đối xứng hoặc đổi tỷ lệ theo một hệ số khi các tùy chọn đó bật): mỗi đối tượng phải có đối tác của nó, sai số trong một phần triệu kích thước vùng chọn. Mỗi tham chiếu nhận góc xoay và tỷ lệ riêng (một bản đối xứng thì tỷ lệ Y âm), và lớp mà các đối tượng của nó chung. Đối tượng trên lớp đã khóa được giữ nguyên và được đếm. Nó tìm trong không gian mở (mô hình hoặc tờ đang mở). Một tìm kiếm rất lớn dừng ở giới hạn công việc và cho biết điều đó. Một bước hoàn tác.

### BSEARCH

Hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Tìm khối}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: một phần tên khối, hoặc mẫu có `*` và `?`. Liệt kê mỗi khối cùng các tham chiếu của nó ở đây và trong toàn bộ bản vẽ.
- `A`: một giá trị thuộc tính, hoặc `TAG=value`. Liệt kê các khối có tham chiếu chứa nó, cùng các giá trị tìm được. Thuộc tính hằng số được tính.
- `G`: chọn đối tượng, hoặc một tham chiếu khối, và các khối có hình dạng giống ít nhất 85% được liệt kê, giống nhất đứng trước. Kích thước, góc xoay và đối xứng không được tính. Phép đo so sánh khoảng cách giữa các điểm trải dọc theo đường viền, nên nó tìm được các hình giống; dùng {{cmd:BCONVERT}} để tìm bản sao chính xác.

Các tham chiếu tìm được trong không gian mở được chọn, sẵn sàng cho lệnh kế tiếp.

### BREPLACE

Hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Thay khối}}. `Replace [Selected/All]`: `S` thay các tham chiếu khối bạn chọn bằng khối bạn nêu tên; `A` hỏi một khối và khối thay thế của nó, rồi đổi mọi tham chiếu, như {{cmd:BLOCKREPLACE}} làm (cùng mã). Một tham chiếu giữ vị trí, tỷ lệ, góc xoay, lớp và giá trị của các thuộc tính mà cả hai khối đều có; các giá trị mà khối mới không có chỗ đặt sẽ bị bỏ và được nêu tên. `?` liệt kê các khối. Một bước hoàn tác.

### DATAEXTRACTION

Tên ngắn: `EATTEXT`, `DX`; hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Trích xuất dữ liệu}}. Liệt kê khối, thuộc tính và thuộc tính đối tượng thành một bảng hoặc tệp CSV.

- Làm việc trên vùng chọn, hoặc hỏi `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` khi vùng chọn có cả hai. Khối không tên, bảng và bảng danh mục vật tư không bao giờ được liệt kê.
- Nó in các cột để chọn (tên, kiểu, lớp, X, Y, góc xoay, tỷ lệ, chiều dài, diện tích, màu, kiểu đường, không gian, và một cột cho mỗi thẻ thuộc tính), rồi `Columns, by name or number with commas between`. {{key:Enter}} lấy các cột có dấu sao: tên và mọi thuộc tính cho khối; kiểu, lớp và chiều dài cho đối tượng.
- `Put identical rows together with a count? [Yes/No] <Yes>`, rồi `Put the list in a: [Table/Csv] <Table>`. Một bảng là một bảng thông thường ({{cmd:TABLEDIT}} sửa nó) và không trực tiếp: chạy lại lệnh khi bản vẽ thay đổi.
- Nó từ chối một cột không có trong danh sách. Một bảng chứa 1.999 hàng dữ liệu; một tệp CSV chứa tất cả.

### COUNTTABLE

Đếm các tham chiếu khối của vùng chọn (hoặc của không gian mở) và đưa số đếm vào một bảng (`Block`, `Count`) hoặc tệp CSV. Để có số đếm tự theo bản vẽ, xem {{cmd:BOMTABLE}}.

## Tờ và in

### LAYOUT

Tên ngắn: `LO`, `NEWLAYOUT`; hoặc nút {{ui:+}} dưới bản vẽ. Một tờ mới với khung, khung tên và một khung nhìn, trên ISO A3 (hoặc Tabloid cho bản vẽ tính bằng inch hoặc feet). Không có câu hỏi.

### MVIEW

Tên ngắn: `MV`. Chỉ trên tờ ({{cmd:VPORTS}} trên tờ cũng vậy).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Khung nhìn hiện toàn bộ mô hình ở một tỷ lệ chuẩn.
- `P` (Polygonal): nhấp các góc của đường viền (`Undo`, `Close`), {{key:Enter}} khi xong. Nó từ chối ít hơn ba góc.
- `O` (Object): `Select a closed object for the viewport's outline`: một đa tuyến khép kín, một hình tròn hoặc một elip trên tờ. Khung nhìn lấy hình dạng của nó (đường cong thành các đoạn thẳng ngắn); đối tượng giữ nguyên. Nó từ chối một đối tượng không khép kín.

### VPCLIP

Cắt một khung nhìn đã có trên tờ. `Select viewport to clip` (hoặc chọn trước), rồi `Select the object to clip to [Polygonal/Delete]`:

- Nhấp một đa tuyến khép kín, hình tròn hoặc elip, hoặc {{key:Enter}} (hoặc `P`) để nhấp các góc của một đa giác.
- `D` (Delete, được đề nghị khi khung nhìn đã cắt) đưa nó về hình chữ nhật: hộp quanh đường viền mà nó có trước đó.
- Những gì khung nhìn hiện không dời trên giấy, và tỷ lệ của nó được giữ. Mô hình chỉ được vẽ và in bên trong đường viền, và khung viền theo nó. Một bước hoàn tác.
- Một khung nhìn đã cắt có một grip ở mỗi góc của đường viền của nó, bên cạnh tâm và bốn góc của hộp (kéo một góc hộp sẽ kéo giãn đường viền theo). Thuộc tính hiện Outline: Rectangle, hoặc Clipped kèm số góc.
- Tệp DWG và DXF 2000 giữ đường viền cho CadCraft. Các chương trình khác mở khung nhìn như hình chữ nhật bao quanh nó; DXF R12 chỉ giữ hình chữ nhật.
- Trên thẻ mô hình, nó cho biết các khung nhìn nằm trên tờ.

### VPORTS

Tên ngắn: `VIEWPORTS`. {{cmd:SPLIT}} giống vậy từ một tờ, và {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Chia cạnh nhau}}, {{ui:Chia xếp chồng}}, {{ui:Bốn khung}}, {{ui:Một khung}} chạy nó. Trên mô hình: `Enter number of panes [SIngle/2/3/4] <3>`; `2` hỏi `[Horizontal/Vertical] <Vertical>` (Vertical = cạnh nhau), `3` hỏi `[Left/Right] <Right>` (khung lớn nằm đâu). Mỗi khung giữ khung nhìn và không gian riêng; một cú nhấp đặt khung đang hoạt động. Trên tờ thì là {{cmd:MVIEW}}. Xem [Chia màn hình](topic:split-screen).

### VPVIEW

Không có tên ngắn. Chỉ trên tờ.

- `Select viewport` (bỏ qua nếu đã chọn một cái), rồi trên mô hình: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Không có tên ngắn. Một hệ tọa độ riêng; không phải là sửa. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: một điểm là gốc mới, rồi `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: gốc, một điểm trên trục X dương, một điểm ở phía Y dương. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` và một tên. Khung nhìn xoay để trục X mới nằm ngang. Xem [Xoay khung nhìn và dùng tọa độ riêng](topic:ucs-and-turned-view).

### PLAN

Không có tên ngắn. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: xoay khung nhìn của khung đang hoạt động để trục X của UCS (hoặc của thế giới) nằm ngang. Không có gì trong bản vẽ dời đi.

### TURNLEFT, TURNRIGHT, TURNWORLD

Không có tên ngắn; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Xoay khung nhìn 90° sang trái}}, {{ui:Xoay khung nhìn 90° sang phải}}, {{ui:Về thế giới}}. Giống `UCS Z -90`, `UCS Z 90` và `UCS W`, với khung nhìn đi theo.

### VPLAYER

Không có tên ngắn. Trên tờ, hoặc bên trong một khung nhìn. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` hỏi tên lớp (ngăn cách bằng dấu phẩy, có ký tự đại diện `*` và `?`), rồi các khung nhìn `[All/Select/Current] <Current>`; Reset đưa mỗi lớp về mặc định "đóng băng trong khung nhìn mới" của nó; `V` đặt mặc định đó (`[Frozen/Thawed]`), mà {{cmd:MVIEW}} dùng. `?` liệt kê các lớp đang đóng băng trong khung nhìn hiện hành. Cột khung nhìn của bảng Lớp làm việc tương tự cho một khung nhìn. Xem [Đóng băng một lớp trong một khung nhìn](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Tên ngắn: `MS`; hoặc nhấp đúp bên trong một khung nhìn. Chỉ trên tờ. Làm việc trên mô hình qua một khung nhìn: khung đã chọn, khung duy nhất trên tờ, hoặc `Click inside the viewport to work in`. Di chuyển và phóng to bên trong sẽ đổi khung nhìn của khung (một khung khóa hiển thị giữ nó và tờ di chuyển thay thế); khung nhìn mới được ghi như một bước hoàn tác. Xem [Làm việc trên mô hình qua một khung nhìn](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Tên ngắn: `PS`; hoặc nhấp đúp bên ngoài khung nhìn, hoặc nhấp một thẻ dưới bản vẽ. Quay lại tờ.

### PLOT

Tên ngắn: `PRINT`, `PUBLISH`, `EXPORTPDF`; hoặc {{key:Mod+P}}. Mở hộp thoại {{ui:In ra PDF}}. Xem [In ra PDF](topic:plot-pdf).

### PLOTSTYLES

Tên ngắn: `STYLESMANAGER`, `PSTABLES`; hoặc {{ui:Sửa bảng…}} trong hộp thoại {{ui:In ra PDF}}. Mở {{ui:Bảng kiểu nét in}}: mỗi màu in ra là gì (màu, xám, mực, độ dày nét), được giữ cùng bản vẽ. Xem [Bảng kiểu nét in](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} dời đối tượng giữa một tờ và mô hình qua một khung nhìn, được đổi tỷ lệ và xoay để trông giống nhau từ phía bên kia. Trên tờ, chọn đối tượng và chúng đi đến mô hình (chọn khung nhìn khi tờ có nhiều hơn một). Khi bạn làm việc trên mô hình qua một khung nhìn ({{cmd:MSPACE}}), các đối tượng đã chọn đi đến tờ. Nó cho biết chúng đã lớn hơn hoặc nhỏ hơn bao nhiêu lần. Khung nhìn ở lại trên tờ của chúng. Một bước hoàn tác.

### ISODRAFT

{{cmd:ISODRAFT}} bật hoặc tắt vẽ đẳng trục `ON` hoặc `OFF`, hoặc đi thẳng lên mặt phẳng `Left`, `Top` hoặc `Right`. Khi đang bật: Ortho ({{key:F8}}) giữ đường thẳng dọc theo hai trục của mặt phẳng (trái: 90° và 150°; trên: 30° và 150°; phải: 30° và 90°), truy vết cực ({{key:F10}}) theo cùng các trục, bắt điểm vào lưới ({{key:F9}}) dùng lưới đẳng trục, và lưới ({{key:F7}}) được vẽ với các đường ở 30°, 90° và 150°. {{cmd:ELLIPSE}} có thêm `Isocircle`: cho một tâm và một bán kính (hoặc `Diameter`) và nó vẽ elip mà một hình tròn hiện ra trên mặt phẳng hiện hành. Bản vẽ vẫn là phẳng: đây là công cụ hỗ trợ vẽ hình phối cảnh, không phải mô hình 3D. Cài đặt chỉ cho phiên làm việc này và không được lưu trong tệp.

### ISOPLANE

{{cmd:ISOPLANE}} chọn mặt phẳng mà vẽ đẳng trục làm việc trên: `Left`, `Top` hoặc `Right`. Enter chuyển sang mặt tiếp theo. Khi vẽ đẳng trục đang bật, {{key:F5}} làm điều tương tự giữa một lệnh; khi tắt, {{key:F5}} được trình duyệt giữ lại.

## Tra cứu

### CAL

In giá trị của một phép tính, như nó được đọc ở bất kỳ đâu một chiều dài được gõ.

- `Expression`: gõ nó, ví dụ `12'6"+3/4"` hoặc `(24'-0")/3`, rồi nhấn {{key:Enter}}. CadCraft in `= 12'-6 3/4"   (150.75 drawing units)`. Xem [Phép tính trong một giá trị được gõ](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Tên ngắn: `DI`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Đo khoảng cách}}.

- `Specify first point`, `Specify second point`. In khoảng cách, góc, Delta X và Delta Y.

### AREA

Tên ngắn: `AA`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Diện tích}}. In diện tích và chu vi.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Nhấp hoặc gõ các góc; tại `Specify next point (Enter closes) [Undo]` nhấn {{key:Enter}} để khép đường viền. `U` hoàn tác góc cuối.
  - {{key:Enter}} hoặc `O`, rồi `Select object`: một hình tròn (in chu vi của nó), một elip, một đa tuyến (một đa tuyến hở được khép bằng một đường thẳng để tính diện tích, và chiều dài của nó được in), hoặc một tô (các lỗ được trừ đi).
  - `A` (Add area) và `S` (Subtract area) giữ tổng chạy: lời nhắc bắt đầu bằng `(ADD mode)` hoặc `(SUBTRACT mode)`, mỗi diện tích được cộng hoặc trừ, và `Total area = …` được in sau mỗi lần. Trong các chế độ này, `O` chọn đối tượng cho đến {{key:Enter}}, và {{key:Enter}} tại lời nhắc đầu tiên kết thúc lệnh.

### MEASUREGEOM

Tên ngắn: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; sau mỗi phép đo nó hỏi lại, với `eXit` là mặc định.

`Quick` đo quanh con trỏ khi bạn di chuyển nó: khoảng cách đến đối tượng gần nhất ở bên phải, trên, trái và dưới (theo các trục của UCS hiện hành), vẽ khi bạn đi; và góc nơi hai láng giềng đó thẳng và gặp nhau. Một cú nhấp ghi bốn khoảng cách, chiều rộng và chiều cao thông thủy, và các góc vào lịch sử; Enter quay về các tùy chọn. Nó đọc những gì trên màn hình.

- `D`: hai điểm, như {{cmd:DIST}}.
- `R`: `Select arc or circle`; in bán kính và đường kính.
- `A`: một cung (góc bao của nó), một đường thẳng rồi một đường thẳng thứ hai (góc giữa chúng, về phía đầu xa của chúng), hoặc {{key:Enter}} và ba điểm (đỉnh, rồi hai đầu).
- `AR`: như {{cmd:AREA}}, một diện tích.

### ID

Không có tên ngắn. `Specify point`; in X và Y của nó.

### LIST

Tên ngắn: `LI`, `LS`. `Select objects`; in loại, lớp và các số đo chính của mỗi đối tượng.

### MASSPROP

{{cmd:MASSPROP}} cho thuộc tính mặt cắt của các miền và đối tượng khép kín bạn chọn, được tính gộp: diện tích, chu vi, hộp bao, trọng tâm, mô men quán tính đối với các trục X và Y đi qua gốc, tích quán tính, bán kính hồi chuyển, cùng các mô men đối với trọng tâm, và các mô men chính với hướng của các trục của chúng. Lỗ trong miền được tính là lỗ. Các con số tính theo đơn vị bản vẽ và chính xác với đường viền tạo từ đường thẳng và cung; elip và spline được đo thành các đoạn thẳng ngắn, và nó nói rõ điều đó. Sau báo cáo, nó hỏi có ghi ra tệp văn bản không. Các đối tượng không khép kín bị bỏ, và nó cho biết có bao nhiêu.

## Xem, tệp và khác

### ZOOM

Tên ngắn: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Nhấp hai góc để có một cửa sổ. `E`, `A` hoặc Enter: toàn bộ bản vẽ.
- `P` (Previous, hoặc {{ui:Trước đó}} trên thanh công cụ) quay về khung nhìn trước, tối đa 10 khung nhìn mỗi thẻ; một loạt các bước cuộn chuột hoặc một lần kéo được tính là một khung nhìn.
- Một số như `2`, `2x` hoặc `0.5x` (hoặc `S` rồi số) phóng to hoặc thu nhỏ theo hệ số đó quanh giữa màn hình.
- `C` hỏi `Specify center point` và `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT và các lệnh PDF

Tên ngắn: `PDFATT` cho {{cmd:PDFATTACH}}, `PDFIM` cho {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} đặt một trang PDF dưới bản vẽ (tệp, trang, điểm chèn, tỷ lệ, góc xoay); {{cmd:PDFIMPORT}} biến các đường, đường cong, nét đổ và văn bản của một trang thành đối tượng bản vẽ trên các lớp được đặt tên theo PDF, ở kích thước thật, theo một tỷ lệ gõ vào, hoặc đổi tỷ lệ từ hai điểm và một khoảng cách thật. {{cmd:PDFCLIP}} cắt một lớp nền, {{cmd:PDFADJUST}} đặt độ mờ, độ tương phản, đơn sắc hoặc tắt nó, {{cmd:PDFLAYERS}} bật tắt các lớp của chính PDF, và {{cmd:PDF}} đưa lại cho CadCraft các tệp mà lớp nền của bản vẽ dùng. Xem [Lớp nền PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Tên ngắn: `AUTOC`. Tự hoàn thành bản vẽ: khi không có lệnh nào chạy, một bóng xám cho thấy những gì các mẫu của bản vẽ bạn nói là sẽ đến tiếp. {{cmd:AUTOCOMPLETE}} bật `On` hoặc tắt `Off` (cũng là Cài đặt › CadCraft) hoặc `Show` những gì nó sẽ gợi ý ngay bây giờ. **Tab** vẽ bóng như một bước hoàn tác, **Esc** bỏ qua nó cho đến khi bản vẽ thay đổi. Nó tìm ba thứ trong các đối tượng mới nhất: bản sao kế tiếp của một thứ đã vẽ từ hai lần trở lên với bước đều (thanh đứng, cột, bậc và mặt bậc của cầu thang), các bước kế tiếp của một cầu thang đa tuyến, và cạnh còn thiếu của một phòng hoặc chuỗi tường. Giữa {{cmd:LINE}} hoặc {{cmd:PLINE}}, bóng là **điểm kế tiếp**: bước kế tiếp của cầu thang (mặt đứng, mặt bậc, mặt đứng…), góc thứ tư của một hình chữ nhật, điểm khép nó, hoặc thêm một bước đều. Đưa con trỏ gần nó và nhấn **Tab**, như thể bạn đã nhấp ở đó; tiếp tục hoặc nhấn Enter. Được tính trên máy tính này bằng quy tắc, không có mô hình.

### AUTOSHEET

Tên ngắn: `ASH`. Các tờ tự dàn trang. {{cmd:AUTOSHEET}} lấy các phần của bản vẽ (các khung nhìn đã đặt tên của bạn, hoặc các phần riêng của mô hình, hoặc toàn bộ mô hình), chọn khổ giấy (hoặc khổ bạn đưa), đặt cho mỗi phần một tỷ lệ chuẩn (một tỷ lệ cho tất cả, hoặc lớn nhất mà mỗi phần chịu được) và đặt các khung nhìn thành hàng trên các tờ mới với khung tên và một chú thích (tên và tỷ lệ) bên dưới mỗi cái. Phần nào không vừa một tờ sẽ có tờ riêng. Một bước hoàn tác. Được tính trên máy tính này bằng quy tắc, không có mô hình.

### PHOTOSKETCH

Tên ngắn: `PSK`. Ảnh phác thảo thành bản vẽ. Chọn một ảnh (JPEG, PNG hoặc TIFF) của bản phác thảo tay trên một tờ giấy. {{cmd:PHOTOSKETCH}} tìm bốn góc của tờ, nắn phối cảnh, lấy khổ giấy bạn đặt tên (`Paper`, hoặc khổ chuẩn gần nhất) và `Scale` của bản phác thảo (1 : n), rồi vẽ các nét bút thành đường thẳng, cung và hình tròn, mỗi màu bút (đen, đỏ, xanh dương, xanh lá) một lớp. Nếu không tìm thấy mép giấy, nó lấy cả ảnh làm tờ và cho biết điều đó. Chữ viết bị bỏ. Một bước hoàn tác. Thực hiện trên máy tính này bằng xử lý ảnh cổ điển, không có mô hình, không gửi đi đâu. Cũng xem các lệnh quét bản vẽ.

### AUTODIM

Tên ngắn: `ADIM`. Ghi kích thước tự động theo quy tắc. {{cmd:AUTODIM}} ghi kích thước cho các đối tượng đã chọn (hoặc toàn bộ bản vẽ) từ các cạnh thẳng đứng và nằm ngang của chúng: một chuỗi kích thước dọc theo các cạnh bạn chọn (`Sides`), một kích thước tổng bên ngoài nó, chiều rộng của mỗi khe hở (một khe giữa các đường tường thẳng hàng), một đường kính cho mỗi cỡ lỗ, và với `Grid` khoảng cách giữa các đường lưới. Một kích thước đã có sẵn sẽ không được tạo lại. Một bước hoàn tác. Thực hiện trên máy tính này bằng quy tắc, không có mô hình.

### GRIDMOVE

Tên ngắn: `GM`. Dời một đường lưới kéo theo bộ của nó. {{cmd:GRIDMOVE}} dời một đường lưới (một đường trên lớp có tên chứa grid hoặc axis) và những gì treo trên nó: tường có một đầu nằm trên đường sẽ kéo giãn theo nó, tường nằm dọc theo nó dời nguyên, cột (tham chiếu khối và hình tròn trên đường), bong bóng và thẻ của nó dời, và kích thước có điểm nằm trên đường đo khoảng cách lưới mới. Chọn hai điểm (chỉ phần cắt qua đường được tính) hoặc `Distance`. Một bước hoàn tác lấy lại tất cả. Thực hiện bằng quy tắc trên máy tính này.

### DETAILS

Tên ngắn: `DET`. Chi tiết tự tìm đến bạn. {{cmd:DETAILS}} giữ các chi tiết riêng của công ty bạn: `Add` đặt một khối của bản vẽ này vào danh sách, `List` và `Remove` quản lý nó, `Find` xếp hạng chúng cho những gì được chọn (hoặc cho những gì bạn vẽ gần nhất) theo các từ trong lớp, tên khối, mẫu tô và ghi chú của nó so với tên và ghi chú của mỗi chi tiết, nên một đầu cửa sổ tìm được chi tiết chống thấm ngưỡng cửa của bạn. Chọn một số và một điểm để đặt nó. Với `Hint` bật (cũng là Cài đặt › CadCraft), chọn thứ mà một chi tiết khớp sẽ đưa một dòng vào thanh trạng thái. Danh sách được giữ trong trình duyệt này, trên máy tính này, và danh sách đó là thứ được tìm. `Share` đặt nó vào thư mục Tài liệu của bạn (`.cadcraft/firm-details.json`, kèm bản vẽ của mỗi khối): `Pull` thêm những gì nhóm bạn có và bạn thiếu, `Push` thêm những gì bạn có và họ thiếu, `Both` làm cả hai, và không có gì bị xóa khỏi bên nào. Mở thư mục Tài liệu trước ({{cmd:DOCUMENTS}}); khi thư mục đó là thư mục Team Cloud Plan, cả nhóm chia sẻ một danh sách. Một mục chi tiết trong bảng Thư viện có nút **Thêm vào chi tiết của công ty tôi** đặt nó vào cùng danh sách. Thực hiện trên máy tính này bằng từ ngữ, không có mô hình.

### SKETCHFIX

Tên ngắn: `SKF`. Bản phác thảo bút thành hình học chính xác. Nhấn và kéo một nét tự do mỗi lần (bút, chuột hoặc ngón tay), rồi Enter. Mỗi nét được đọc thành một đường thẳng, hình tròn, cung, hình chữ nhật hoặc đa tuyến: các đường gần nằm ngang và thẳng đứng được làm đúng nằm ngang và thẳng đứng, một nét tròn khép kín thành hình tròn, một nét khép kín có bốn góc vuông thành hình chữ nhật, và các đầu của nét được kéo lại với nhau và vào các đầu đã có trong bản vẽ. Một bước hoàn tác. Thực hiện trên máy tính này bằng quy tắc, không có mô hình.

### SCANATTACH và các lệnh bản vẽ đã quét

Tên ngắn: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} không có. Chúng làm việc trên một ảnh, mỗi cái một bước hoàn tác. {{cmd:SCANATTACH}} chèn một PNG, JPEG, TIFF (một trang hoặc tất cả) hoặc một trang PDF là ảnh. {{cmd:SCANSCALE}} đổi tỷ lệ tờ từ hai điểm được chọn và khoảng cách thật. {{cmd:SCANALIGN}} dời và xoay nó lên hai điểm (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} hiện góc của các đường dài của tờ và xoay tờ khi bạn `Accept` hoặc đưa một `Value`. {{cmd:SCANCLEAN}} làm nó thành đen trắng (`Threshold` Auto/Adaptive/Level, `Specks`) và `Run`. {{cmd:SCANCROP}} giữ một cửa sổ. {{cmd:SCANERASE}} xóa một `Rectangle`, `Polygon` hoặc `Lasso`. {{cmd:SCANTRACE}} vẽ đường thẳng và cung lên một lớp mới (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) và báo những gì nó tìm được và những gì nó để lại dạng raster. {{cmd:SCANINFO}} liệt kê tệp gốc và các bước. {{cmd:RASTERSNAP}} bật hoặc tắt bắt điểm vào các đường của tờ đã quét. Xem chủ đề Bản vẽ đã quét và vẽ lại.

### REGEN và REGENALL

Tên ngắn: `RE` cho {{cmd:REGEN}}, `REA` cho {{cmd:REGENALL}}. Dựng lại những gì được vẽ trên màn hình từ bản vẽ: {{cmd:REGEN}} cho thẻ bạn đang xem (trên tờ, cả mô hình mà các khung nhìn của nó hiển thị), {{cmd:REGENALL}} cho mọi thẻ, mọi khung chia màn hình và mọi bản vẽ đang mở. Dùng khi hình ảnh có vẻ cũ sau một thay đổi bằng kịch bản hoặc rất lớn, hoặc khi một trợ lý đã sửa bản vẽ; bản vẽ không bị đụng đến, nên không có gì để hoàn tác.

### NAMEDVIEW

Tên ngắn: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, rồi tên của khung nhìn. `S` lưu khung nhìn đang hiện, `W` một cửa sổ bạn chọn, `R` hiện một khung nhìn đã lưu, `D` xóa một cái, `?` liệt kê các khung nhìn của thẻ này. Lưu dưới một tên đã có sẽ thay nó; mỗi thay đổi là một bước hoàn tác. Khung nhìn thuộc về thẻ mà chúng được lưu. Tệp DWG và DXF giữ chúng (bảng VIEW); các khung nhìn của một tờ quay lại ở tờ đầu tiên, vì tệp không cho biết tờ nào.

### UNDO và REDO

Tên ngắn: `U` cho {{cmd:UNDO}}; {{cmd:REDO}} không có. Cũng là {{key:Mod+Z}} và {{key:Mod+Y}}.

### LAYER

Tên ngắn: `LA`. Nhảy đến bảng {{ui:Lớp}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` hoặc một tên (`?` liệt kê: Continuous, các kiểu của bản vẽ, và DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE với kích thước `2` (nửa) và `X2` (gấp đôi) của chúng). {{cmd:LWEIGHT}} (`LW`): độ dày nét cho đối tượng mới theo mm, hoặc `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): tỷ lệ kiểu đường của bản vẽ (có thể hoàn tác). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — giống nút {{ui:LWT}} trên thanh trạng thái. Xem [Độ dày nét và kiểu đường](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, rồi tên mới; các đối tượng hoặc tham chiếu đi theo. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` cho đến {{key:Enter}}, rồi `Select object on target layer or [Name]` và `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, rồi `Y`: lớp và mọi đối tượng trên nó đều đi (không phải lớp 0, DEFPOINTS hoặc lớp hiện hành). Mỗi lệnh là một bước hoàn tác. Xem [Sắp xếp bản vẽ bằng lớp](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lớp bằng cách chọn đối tượng; cũng có trong menu {{ui:Công cụ}} của bảng {{ui:Lớp}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, rồi {{key:Enter}}: mọi lớp khác bị tắt. {{cmd:LAYUNISO}} bật lại chúng. {{cmd:LAYOFF}} và {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (hoặc đóng băng), lặp đi lặp lại; `U` hoàn tác lần cuối, {{key:Enter}} kết thúc. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} bật mọi lớp, {{cmd:LAYTHW}} mở băng mọi lớp. Mỗi lệnh là một bước hoàn tác. Xem [Sắp xếp bản vẽ bằng lớp](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} bắt đầu một bản vẽ trống và {{cmd:OPEN}} mở một DWG hoặc DXF, mỗi cái trong thẻ riêng trên bản vẽ (một bản vẽ mới chưa đụng đến được dùng thay vì mở thẻ mới). Đóng một thẻ có thay đổi chưa lưu sẽ hỏi trước. Xem [Chia màn hình](topic:split-screen).

{{cmd:SAVE}} (tên ngắn `QSAVE`, cũng là {{key:Mod+S}}) tải một bản sao xuống theo định dạng của bản vẽ: DWG nếu mở từ DWG, DXF nếu từ DXF. Bản vẽ mới dùng định dạng được chọn lần cuối trong Lưu thành trên trình duyệt này, nếu không thì DWG.

{{cmd:SAVEAS}} (cũng là {{key:Mod+Shift+S}}) mở hộp thoại {{ui:Lưu bản sao thành}}: chọn {{ui:DWG}} (và {{ui:Version}} của nó), {{ui:DXF R12}} hoặc {{ui:DXF 2000}}, rồi {{ui:Lưu}}. Lựa chọn được giữ cho bản vẽ này và cho các bản vẽ mới trong trình duyệt này.

{{cmd:DXFOUT}} luôn tải xuống một bản sao DXF R12, không đổi định dạng mà {{cmd:SAVE}} dùng.

Xem [Tệp: mở được gì, lưu được gì](topic:files#saving).

### TOUR

Tên ngắn: `TUTORIAL`. Bắt đầu lại chuyến tham quan sáu bước cho bản vẽ đầu tiên. Xem [Bắt đầu](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Tên ngắn: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Xem [Cài đặt](topic:settings#toolbar-position).

### COMMANDLINE

Tên ngắn: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: gắn hoặc nổi dòng lệnh, làm nó thành một dòng, hỏi số dòng lịch sử hiển thị (0 đến 12), hoặc mở lịch sử. Xem [Cài đặt](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: các thanh phía trên bản vẽ như cũ, hoặc gọn. Xem [Cài đặt](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: bước mà truy vết {{ui:Cực}} căn theo (lớn hơn 0, đến 180). Được giữ trong trình duyệt này.

### UNITS

Tên ngắn: `UN`. Cách chiều dài được viết và nhập.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural và Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Các loại khác: `Enter number of decimal places (0 to 8)`.

Kích thước mới theo nó. Một bước hoàn tác. Giống {{ui:Định dạng độ dài}} và {{ui:Độ chính xác}} trong {{ui:Cài đặt hiện tại}}; xem [Feet và inch](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Tên ngắn: `GDS`. Xem một bố cục IC (tệp luồng GDSII): thử nghiệm trong phòng lab, chỉ để xem và đo.

- Một bộ chọn tệp nhận tệp `.gds`; với nhiều ô gốc, `Enter the top cell to draw`.
- Mọi lớp và kiểu dữ liệu thành một lớp bản vẽ (`GDS 1`, `GDS 2/5`), tham chiếu và mảng được đặt phẳng, theo đơn vị người dùng của tệp (thường là micrômét). Một bước hoàn tác. Không có gì được mô phỏng hoặc kiểm tra và tệp không được ghi lại.

### DIAGRAM

Tên ngắn: `TEXTDIAGRAM`, `T2D`. Sơ đồ từ văn bản.

- Một hộp nhận văn bản (hoặc một dòng với `;` giữa các câu lệnh ở dòng lệnh): lưu đồ Mermaid, sơ đồ thành phần PlantUML, D2 hoặc danh sách từ-đến.
- `Specify the top left corner of the diagram`, rồi `Specify the text height`.

Các khối và đường nối là đối tượng thường trên lớp `Diagram`, được chọn khi kết thúc. Một bước hoàn tác. Xem [Vẽ sơ đồ từ văn bản](topic:text-to-diagram).

### OLELIST

Tên ngắn: `OLES`. Các đối tượng OLE mà một DWG mang theo mà CadCraft không tự đặt được.

- Liệt kê từng cái: số, loại, kích thước, và có lưu ảnh hay không.
- `Enter an option [Place/eXit] <eXit>`: Place hỏi số, góc dưới-trái và chiều rộng, và vẽ một khung với ảnh. Một bước hoàn tác; đối tượng được giữ không đổi. Xem [Ảnh](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Tên ngắn: `SHX`. Phông SHX riêng của bạn.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} đọc mọi tệp `.shx` trong một thư mục (CadCraft Studio; lại ở mỗi lần khởi động), {{ui:Files}} nhận các tệp đã chọn (trình duyệt), {{ui:Reverse}} xếp các chữ cái của một phông theo thứ tự ngược. Các kiểu văn bản có tên một phông đã tải sẽ vẽ bằng nó. Xem [Vẽ văn bản bằng phông SHX riêng](topic:shx-fonts).

### LIMITS

Bản vẽ được dự định lớn cỡ nào.

- `Specify lower left corner or [ON/OFF] <current>`: một điểm, `ON` hoặc `OFF`.
- `Specify upper right corner <current>`.

Lưới lấp đầy giới hạn, {{cmd:ZOOM}} All hiện chúng, và khi giới hạn ON thì một điểm nằm ngoài sẽ bị từ chối (`**Outside limits`). Một bước hoàn tác; được lưu trong DWG và DXF. Xem [Đặt giới hạn bản vẽ](topic:drawing-limits).

### AUNITS

Tên ngắn: `ANGUNITS`. Cách góc được hiển thị và nhập.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, hoặc với hai loại kia `Enter precision` (0 độ, 2 phút, 4 giây, 5 đến 8 chữ số thập phân của giây).

Một bước hoàn tác; được lưu trong DWG và DXF. Giống {{ui:Định dạng góc}} trong {{ui:Cài đặt hiện tại}}. Xem [Nhập và hiển thị phương vị và góc](topic:bearings-and-angles).

### APPLOAD

Tên ngắn: `AP`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Tải ứng dụng…}}. Hộp thoại {{ui:Tải ứng dụng}}: tải các chương trình con `.lsp` và tệp hộp thoại `.dcl`, gỡ chúng, tải lại từ lịch sử, và Bộ khởi động. Các lệnh `(defun c:NAME …)` của một chương trình con khi đó hoạt động như mọi lệnh khác. Xem [Tải ứng dụng](topic:load-applications) và [Chạy chương trình LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Sửa bí danh…}}) mở tệp bí danh của bạn (các dòng `ALIAS, *COMMAND`); {{ui:Lưu}} áp dụng nó. {{cmd:REINIT}} áp dụng lại. Xem [Sửa bí danh lệnh](topic:command-aliases).

### OPTIONKEYS

Tên ngắn: `OPTKEYS`; hoặc {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Ký tự tùy chọn}} › {{ui:Sửa…}}. Mở tệp ký tự tùy chọn của bạn (các dòng `COMMAND.OPTION, LETTERS`, như `ARRAY.PO, P`); {{ui:Lưu}} áp dụng nó và {{cmd:REINIT}} áp dụng lại. Xem [Đặt ký tự riêng cho tùy chọn lệnh](topic:option-letters).

### LISPEDIT

Tên ngắn: `VLIDE`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Trình soạn LISP}}. Mở trình soạn LISP, một cửa sổ giữ mở bên cạnh bản vẽ.

- Văn bản: số dòng, cặp của dấu ngoặc tại con trỏ được đánh dấu (màu đỏ khi không có), {{key:Enter}} thụt lề dòng mới dưới dấu ngoặc đang mở, {{key:Tab}} gõ hai khoảng trắng, {{key:Esc}} rời văn bản.
- {{ui:Nạp vào bản vẽ}} ({{key:Ctrl+Shift+Enter}}): đọc mọi biểu thức, như {{cmd:APPLOAD}} làm với tệp, và tạo các lệnh `c:` của nó. Tệp hiện trong danh sách của {{cmd:APPLOAD}}.
- {{ui:Chạy vùng chọn}} ({{key:Ctrl+Enter}}): đánh giá các biểu thức được chọn, hoặc biểu thức có con trỏ.
- {{ui:Dừng}}: kết thúc một chương trình đang chạy.
- {{ui:Bảng điều khiển}}: những gì chương trình đã in, và mỗi lỗi kèm dòng của nó; nhấp một lỗi để đi đến đó. Văn bản được chạy từng biểu thức cấp cao nhất một, nên dòng là của biểu thức đó, hoặc bên trong nó là dòng gọi hàm mà lỗi nêu tên.
- {{ui:Mới}}, {{ui:Mở}}, {{ui:Lưu}} ({{key:Ctrl+S}}): một tệp `.lsp`. Văn bản cũng được giữ trong trình duyệt này, nên đóng cửa sổ không làm mất nó.
- Bên cạnh văn bản: các hàm mà chương trình định nghĩa, các hàm nó gọi mà LISP này chưa có, các hàm nó gọi mà không được định nghĩa trong đó cũng không có sẵn, và danh sách đầy đủ những gì có sẵn và những gì không.

Một văn bản có dấu ngoặc không bao giờ đóng, hoặc một chuỗi không bao giờ kết thúc, sẽ không được chạy: dòng của nó được nêu tên. Không có trình gỡ lỗi từng bước, điểm dừng hay cửa sổ theo dõi. Xem [Chạy chương trình LISP](topic:run-lisp).

### HELP

Tên ngắn: `?`. In mọi lệnh, tên ngắn của chúng và một mô tả một dòng trong lịch sử dòng lệnh. Nó không mở trợ giúp này: nhấn {{key:F1}} hoặc nhấp {{ui:Trợ giúp}} để làm điều đó.

## Lời nhắc chọn đối tượng

Tại mọi lời nhắc `Select objects`: nhấp đối tượng, vẽ cửa sổ (từ trái sang phải) và giao (từ phải sang trái) bằng hai cú nhấp, hoặc nhấn và kéo một lasso ({{key:Space}} khi đang kéo: cửa sổ, giao, hàng rào), {{key:Shift}}+nhấp để bỏ, và nhấn {{key:Enter}} để kết thúc. Bạn cũng có thể gõ `ALL` (mọi thứ), `L` (đối tượng cuối), `P` (Trước đó: những gì lệnh trước đã dùng), `F` (Hàng rào: các đối tượng mà một đường điểm cắt qua; `U` hoàn tác một điểm), `W` (Cửa sổ), `C` (Giao), `R` (chế độ Bỏ: các lần chọn lấy đối tượng ra; lời nhắc hiện `Remove objects`) và `A` (Thêm lại). `?` liệt kê chúng. Chúng không hiện trong lời nhắc. {{key:Tab}} trên các đối tượng chồng nhau sẽ làm nổi bật cái tiếp theo; nhấp để chọn nó. Xem [Chọn đối tượng](topic:select-objects).

### ACCESS

Tên ngắn: `AX`. Vẽ không cần nhìn. {{cmd:ACCESS}} bật hoặc tắt Truy cập (`On`, `Off`) và chuyển âm thanh bắt điểm (`Sound`) và lệnh bằng giọng nói (`Voice`); nó nói trạng thái hiện tại trước. Khi Truy cập bật, mọi lệnh và kết quả được đọc qua trình đọc màn hình của bạn và vùng vẽ có một con trỏ bàn phím. Chủ đề trợ giúp "Vẽ không cần nhìn" có các phím.

### DESCRIBE

Tên ngắn: `DESC`. Nói bản vẽ chứa gì: bao nhiêu đối tượng, thuộc loại nào, kích thước ra sao, bao nhiêu lớp, cái gì đang được chọn. Chỉ đọc; không thay đổi gì.

### WHEREAMI

Tên ngắn: `WHERE`. Nói con trỏ đang ở đâu, theo đơn vị của bản vẽ.

### NEARBY

Nói những gì nằm gần con trỏ, gần nhất trước, mỗi cái kèm khoảng cách và phía nó đang ở.

### SAYSEL

Nói những gì đang được chọn, một câu cho mỗi đối tượng (chiều dài đường thẳng, đầu và góc; bán kính và tâm hình tròn; văn bản như đã viết).

### VOICE

Bật hoặc tắt lệnh bằng giọng nói. Chúng được nhận diện trên máy tính này; nơi trình duyệt không làm được điều đó, giọng nói tắt trừ khi bạn chọn dịch vụ trực tuyến của trình duyệt trong Cài đặt.

### TOUCHCROSSHAIR

Tên ngắn: `TCX`. Tâm ngắm lệch để vẽ bằng ngón tay, để đầu ngón tay không che điểm bạn chọn. Khi bật, một ngón tay trên bản vẽ không chọn: nó di chuyển một tâm ngắm nằm phía trên ngón tay và sang một bên. Bắt điểm đối tượng và truy vết đi theo tâm ngắm. Nhấc ngón tay không chọn gì và để tâm ngắm ở đó. Để chọn, nhấn nút {{ui:Nhấp}} ở góc bản vẽ, hoặc chạm bất kỳ đâu trên bản vẽ bằng ngón thứ hai. Giữ {{ui:Nhấp}} khi bạn di chuyển ngón kia để kéo (một cửa sổ chọn, một lasso, một grip). Một ngón tay được giữ yên, hoặc nút {{ui:Enter}}, là Enter. Hai ngón tay di chuyển và phóng to như trước. Gần cạnh dưới và cạnh xa, tâm ngắm tiến về phía ngón tay, nên mọi phần của bản vẽ đều với tới được. Bút và chuột luôn chọn trực tiếp.

{{cmd:TOUCHCROSSHAIR}} nói trạng thái và hỏi `ON`, `OFF`, `Auto` (chỉ bật ở nơi ngón tay là con trỏ duy nhất, nên tắt trên máy tính có chuột), `Distance` (tâm ngắm cách ngón tay bao xa, từ 24 đến 240 điểm ảnh) hoặc `Side` (`Left`: lên và sang trái, cho tay phải; `Right` cho tay trái; các nút chuyển sang góc kia). Các lựa chọn giống nhau có trong Cài đặt › CadCraft, và trên thiết bị có màn hình cảm ứng thanh trạng thái có một công tắc {{ui:Tâm ngắm lệch}}. Các lựa chọn được giữ trong trình duyệt này.

### WHOHAS

Cho biết ai đang mở một bản vẽ. Trong CadCraft Studio trên máy tính, mở một DWG hoặc DXF sẽ ghi một tệp khóa nhỏ cạnh nó (`Plan.dwg.cclock`: ai, từ khi nào, phiên bản nào), làm mới mỗi phút khi bản vẽ đang mở, và xóa khi bản vẽ đóng. Mở một bản vẽ người khác đang mở sẽ cho biết là ai và từ khi nào, và đề nghị {{ui:Mở chỉ đọc}} (Lưu khi đó hỏi tên mới), {{ui:Vẫn mở}} (người kia được báo ở lần làm mới kế tiếp) hoặc {{ui:Hủy}}. Lưu đè một tệp người khác đang mở sẽ hỏi trước. Một khóa không được làm mới trong năm phút được cho là cũ: bản kia đã đóng mà không lưu, hoặc máy tính đang ngủ.

{{cmd:WHOHAS}} hỏi `Current` (bản vẽ đang mở), `File` (chọn một tệp), `FOlder` (chọn một thư mục: mọi bản vẽ trong đó đang được mở ở đâu đó được liệt kê), `Path` (gõ đường dẫn đầy đủ) hoặc `Name` (tên người khác thấy; tên tài khoản của bạn khi bạn đăng nhập). Studio chỉ với tới các thư mục bạn đã chọn: với một bản vẽ mở từ thư mục chưa từng được chọn, nó nói một lần rằng nó không thể ghi nhận bản vẽ là đang mở; `FOlder` chọn thư mục, và từ đó khóa làm việc ở đó. Khóa chỉ là một ghi chú cho người khác, không phải rào chắn: một chương trình khác vẫn có thể ghi tệp. Trong trình duyệt không có thư mục để xem, và lệnh nói điều đó.

### OVERKILL

Xóa các đối tượng trùng lặp và dọn các đường thẳng và cung chồng lên nhau, cho các bản vẽ đến với nét bị nhân đôi. `Select objects to clean up`, {{key:Enter}}, rồi {{key:Enter}} lần nữa để dọn với cài đặt đang hiện, hoặc đổi một cái trước:

- `Tolerance`: hai tọa độ phải gần đến đâu để được tính là giống nhau (0.000001 ban đầu; 0 nghĩa là hoàn toàn giống).
- `Ignore`: các thuộc tính có thể khác nhau giữa hai đối tượng mà nếu không thì giống nhau. Gõ một tên để bật: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, hoặc `None` / `All`. {{key:Enter}} khi xong.
- `Overlap`: bật hoặc tắt. Khi bật, các đường thẳng nằm trên cùng một đường thẳng và chồng lên nhau thành một đường (một đường nằm trong đường khác chỉ bị xóa), và các cung trên cùng một hình tròn chồng lên nhau thành một cung; cung khép thành một vòng đầy đủ thì thành hình tròn, và một cung nằm trên hình tròn bị xóa.
- `Ends`: bật hoặc tắt. Khi bật, các đường thẳng nằm trên cùng một đường thẳng và các cung trên cùng một hình tròn chỉ chạm đầu cuối nhau sẽ thành một đoạn.

Mọi loại đối tượng đều được kiểm tra trùng lặp: hai đối tượng là trùng khi hình học của chúng giống nhau trong dung sai và lớp, màu, kiểu đường, tỷ lệ kiểu đường, độ dày nét, độ dày, độ trong suốt và chiều cao của chúng khớp (trừ những cái bạn bỏ qua). Đường thẳng và đa tuyến hở cũng khớp khi vẽ theo chiều ngược lại. Đối tượng đứng đầu theo thứ tự vẽ được giữ và giữ thuộc tính riêng. Lệnh báo số đối tượng nó đã kiểm tra và đã xóa: trùng lặp, các đoạn chồng đã gộp, các đoạn nối đầu cuối. Một {{cmd:UNDO}} lấy lại tất cả. Các cài đặt tồn tại cho đến khi bạn đóng cửa sổ bản vẽ.

Nó bỏ qua: các đối tượng trên lớp đã khóa và đối tượng ẩn. Nó không gộp các đường có chiều cao (Z) (các bản sao đúng từng cái vẫn bị xóa), và nó không đụng đến các đoạn bên trong đa tuyến (chúng không bị làm mỏng), một đường nằm trên đoạn của đa tuyến, và một đa tuyến khép kín vẽ theo chiều ngược lại.

### DRAWORDER

Thay đổi những đối tượng nào được vẽ ở phía trước. `Select objects to re-order`, {{key:Enter}}, rồi `Above objects`, `Under objects`, `Front` hoặc `Back` ({{key:Enter}} = `Back`). `Above objects` và `Under objects` hỏi các đối tượng tham chiếu: vùng chọn đi ngay trước đối tượng ở phía trước nhất trong số đó, hoặc ngay sau đối tượng ở phía sau nhất. Các đối tượng đã chọn giữ thứ tự riêng giữa chúng. Một bước hoàn tác. Thứ tự được lưu cùng bản vẽ trong DWG và DXF, nơi nó là thứ tự các đối tượng được ghi.

Trên màn hình mỗi đối tượng được vẽ theo thứ tự của bản vẽ, như các chương trình khác mở tệp vẽ chúng: một tô đặc, một đa tuyến rộng hoặc một mặt nạ văn bản che các đường và văn bản phía sau nó, và thứ đứng trước nó che nó. Chỗ một đường cắt một văn bản, cả hai đều hiện. Ảnh và trang PDF đính kèm nằm dưới các đường. Trong một bản vẽ rất lớn mà các tô và đường chồng và xen kẽ hơn 256 lần, 256 cái đầu giữ thứ tự, và phần còn lại vẽ tô dưới đường, nên việc vẽ lại vẫn nhanh.

### TEXTTOFRONT

Đưa văn bản, kích thước và đường dẫn lên trước mọi thứ khác trong không gian mở: `Text`, `Dimensions`, `Leaders` hoặc `All` ({{key:Enter}} = `All`). Một bước hoàn tác. Cho biết khi không có gì, hoặc khi chúng đã ở phía trước.

### HATCHTOBACK

Đưa mọi tô của không gian mở xuống dưới mọi thứ khác, để các nét tô không che đường và văn bản trong tệp đã lưu. Không có lời nhắc. Một bước hoàn tác.

### ISOLATEOBJECTS

Tên ngắn: `ISOLATE`. Chỉ hiện các đối tượng đã chọn: mọi thứ khác trong không gian mở khuất khỏi tầm nhìn cho đến {{cmd:UNISOLATEOBJECTS}}. Khác với {{cmd:LAYISO}}, nó làm việc trên các đối tượng bạn chọn, bất kể lớp của chúng, và không đổi lớp nào. Đối tượng ẩn không được vẽ, chọn, bắt điểm, phóng đến hay in, và các lệnh nhận `ALL` bỏ qua chúng. Những gì bạn vẽ khi các đối tượng đang bị cô lập hiện như thường.

Đây chỉ là cho phiên làm việc: không có gì về nó được lưu cùng bản vẽ, nó không phải là bước hoàn tác, và khi mở lại bản vẽ, mọi thứ hiện ra. Khi có đối tượng bị ẩn, thanh trạng thái hiện một nút với số của chúng; nhấp để hiện lại.

### HIDEOBJECTS

Ẩn các đối tượng đã chọn cho đến {{cmd:UNISOLATEOBJECTS}}. Các quy tắc giống {{cmd:ISOLATEOBJECTS}}: chỉ cho phiên làm việc, không được lưu, không phải bước hoàn tác.

### UNISOLATEOBJECTS

Tên ngắn: `UNISOLATE`, `UNHIDE`. Hiện lại mọi đối tượng bị ẩn bởi {{cmd:ISOLATEOBJECTS}} hoặc {{cmd:HIDEOBJECTS}}, và cho biết có bao nhiêu cái đã trở lại.

### LAYLOCKFADE

Đặt cách các đối tượng trên lớp đã khóa trông ra sao, và liệu một cú nhấp có tới chúng không. Nó nói trạng thái hiện tại, rồi nhận:

- một số từ 0 đến 90: mức mờ tính bằng phần trăm (50 ban đầu). 0 tắt mờ.
- `ON` hoặc `OFF`: bật hoặc tắt mờ, giữ mức.
- `Pick`, rồi `Yes` hoặc `No`: khi không có lệnh nào chạy, một cú nhấp có chọn được đối tượng trên lớp đã khóa không? `No` (mặc định): chúng không thể chọn chút nào. `Yes`: một cú nhấp hoặc cửa sổ chọn chúng để {{ui:Thuộc tính}} có thể hiện; chúng vẫn không thể đổi, và `Select objects` của một lệnh không bao giờ lấy chúng.

Bắt điểm đối tượng tìm được các đối tượng trên lớp đã khóa theo cả hai cách. Bản in không bao giờ bị mờ. Cả hai cài đặt là của bạn, không phải của bản vẽ, và cũng nằm trong {{ui:Cài đặt}} dưới {{ui:Lớp đã khóa}}.

### BURST

Phân rã tham chiếu khối và giữ những gì thuộc tính của chúng nói. `Select block references to burst`, {{key:Enter}}: mỗi tham chiếu được thay bằng các đối tượng của khối, và giá trị của mỗi thuộc tính hiện được thành văn bản thường trên lớp riêng của thuộc tính đó (một thuộc tính trên lớp 0 rơi xuống lớp của tham chiếu, như các đối tượng khác của khối trên lớp 0). Thuộc tính ẩn bị bỏ. Một khối bên trong khối vẫn là tham chiếu khối. Một bước hoàn tác; nó báo số tham chiếu đã phân rã và số giá trị thuộc tính đã thành văn bản.

Nó từ chối một bản vẽ liên kết theo tên (hãy liên kết trước, hoặc sao chép từ đó bằng {{cmd:NCOPY}}), và để các đối tượng khác trong vùng chọn yên. Với tham chiếu khối, {{cmd:EXPLODE}} cho cùng các đối tượng; {{cmd:BURST}} chỉ lấy tham chiếu khối và đếm văn bản thuộc tính.

### TXT2MTXT

Tên ngắn: `T2M`. Nối các văn bản một dòng thành một văn bản đoạn. `Select single-line text to join`, {{key:Enter}}, rồi `Paragraph` (các dòng chạy liền và xuống dòng theo chiều rộng của dòng rộng nhất) hoặc `Lines` (mỗi văn bản vẫn là một dòng riêng); {{key:Enter}} lấy lựa chọn dùng lần cuối. Các dòng được sắp từ trên xuống dưới, rồi từ trái sang phải, theo hướng của văn bản trên cùng. Đoạn treo từ góc trên-trái của văn bản trên cùng và lấy chiều cao, góc xoay, kiểu, lớp và màu của nó. Một bước hoàn tác.

Văn bản đoạn sẵn có, văn bản trống và các đối tượng khác trong vùng chọn được giữ yên, và lệnh cho biết có bao nhiêu cái.

### NCOPY

Sao chép đối tượng từ một tham chiếu khối hoặc một bản vẽ liên kết vào bản vẽ, mà không phân rã gì. `Pick an object inside a block reference or a linked drawing`: đối tượng gần điểm chọn nhất được sao chép nơi nó hiện, bất kể nó nằm sâu bao nhiêu lớp khối; chọn thêm, rồi {{key:Enter}}. Tiếp theo `Base point to move the copies`: {{key:Enter}} giữ chúng tại chỗ, hoặc cho một điểm gốc và một điểm thứ hai. Toàn bộ lệnh là một bước hoàn tác.

Một bản sao lấy lớp mà nó hiện trên đó: một đối tượng trên lớp 0 bên trong khối rơi xuống lớp của tham chiếu mà nó nằm trong, và màu ByBlock trở thành màu của tham chiếu đó. Từ một bản vẽ liên kết, lớp `Plan|Walls` thành `Plan$0$Walls` (tên mà liên kết đặt), được tạo với màu, kiểu đường và độ dày nét của lớp liên kết. Giá trị của thuộc tính được sao chép như văn bản. Các tham chiếu khối trên lớp đã khóa không thể chọn.

### FLATTEN

Đặt chiều cao (Z) và độ dày của các đối tượng đã chọn về 0. `Select objects to flatten`, {{key:Enter}}. Nó cũng làm phẳng các đối tượng bên trong định nghĩa khối mà vùng chọn dùng (và các khối bên trong chúng), nên mọi tham chiếu đến các khối đó đều đổi; các bản vẽ liên kết được giữ nguyên. Một bước hoàn tác; nó báo có bao nhiêu đối tượng đã đổi, và nói rõ khi không cái nào có chiều cao hoặc độ dày.

Những gì CadCraft giữ về chiều thứ ba trong bản vẽ 2D là: chiều cao trên hình tròn, cung, elip, điểm, văn bản, tham chiếu khối, tô, đường dẫn và đa tuyến (cao độ của chúng), chiều cao ở mỗi đầu của một đường thẳng, và độ dày trên đường thẳng, hình tròn, cung, đa tuyến, điểm và văn bản, như tệp đã có. {{cmd:FLATTEN}} xóa đúng những thứ đó. Nó không đụng đến mô hình 3D trên thẻ 3D, mặt 3D hay vật rắn, và một đối tượng vẽ trên mặt phẳng nghiêng đã được đưa vào mặt phẳng bản vẽ khi tệp được mở.

### BREAKLINE

Vẽ một đường có ký hiệu ngắt, cho một khung nhìn bị cắt ngắn. Nó nói kích thước và phần kéo dài hiện tại, rồi `First point of the break line` (hoặc `Size` / `Extension` để đổi trước), `Second point`, và `Where the break symbol sits`: nhấp dọc theo đường, hoặc {{key:Enter}} cho giữa. Kết quả là một đa tuyến trên lớp hiện hành: đường thẳng, chạy vượt qua mỗi điểm một đoạn bằng phần kéo dài, với một nét hình chữ Z cao bằng kích thước và dài bằng một nửa.

`Size` và `Extension` được ghi nhớ như cài đặt của bạn (kích thước bắt đầu bằng hai lần chiều cao văn bản kích thước nhân với tỷ lệ kích thước; phần kéo dài bằng một nửa kích thước). {{key:Enter}} lặp lại lệnh.

### AUDIT

Kiểm tra bản vẽ đang mở để tìm hư hỏng và sửa nó. {{cmd:AUDIT}} xem mọi đối tượng trong mô hình, trên các tờ và bên trong các khối, và bảng lớp, và liệt kê những gì nó tìm thấy theo loại:

- các số không hữu hạn hoặc lớn vô lý;
- đối tượng không có kích thước: đường thẳng không chiều dài, hình tròn không bán kính, đa tuyến một điểm, văn bản không có chữ hoặc chiều cao, tham chiếu khối có tỷ lệ 0;
- đối tượng trên một lớp mà bản vẽ không có; tham chiếu đến một khối không tồn tại; tên kiểu văn bản và kích thước, và tên kiểu đường không có trong bản vẽ;
- các khối tự chứa chính nó, trực tiếp hoặc qua các khối khác;
- các đối tượng trùng id, khóa, hoặc số tham chiếu tệp;
- kích thước không có các điểm mà chúng được đo từ đó, và tô có biên không phải là đường viền khép kín.

Sau đó nó hỏi `Fix them? [Yes/No]`. `No` không đổi gì. `Yes` sửa mọi thứ trong một bước hoàn tác: những thứ không thể vẽ được sẽ bị xóa (số xấu, không kích thước, khối thiếu, kích thước hỏng, tô không có biên dùng được, tham chiếu khép một vòng khối); một lớp thiếu được tạo; tên kiểu và kiểu đường không rõ được đưa về mặc định; một khóa trùng được thay thế. Nó in có bao nhiêu đối tượng đã xóa và bao nhiêu đã sửa. Cùng các phát hiện xuất hiện trong bảng Vấn đề, mỗi cái với {{ui:Sửa}} riêng.

Nó không từ chối gì, nhưng nó chỉ kiểm tra những gì chính CadCraft vẽ: dữ liệu giữ cho các chương trình khác (vật rắn 3D, đối tượng OLE) không được mở.

### RECOVER

Mở một DXF hoặc DWG bị hỏng. {{cmd:RECOVER}} hỏi tệp, đọc những gì đọc được thay vì từ chối tệp, liệt kê những gì nó bỏ qua hoặc giả định, rồi kiểm tra và sửa bản vẽ như {{cmd:AUDIT}} làm với `Yes`.

- DXF: các dòng không thuộc một cặp mã và giá trị bị bỏ qua cho đến khi các cặp thẳng hàng lại; một phần không có kết thúc được đóng lại; một tệp bị cắt cụt được đọc đến chỗ cắt; một DXF nhị phân bị cắt cụt được đọc đến giá trị nguyên vẹn cuối cùng. Khi một phần, một khối hoặc một đối tượng vẫn không đọc được, nó bị bỏ đi và được nêu tên, và việc đọc tiếp tục qua nó.
- DWG: các đối tượng không qua được kiểm tra hoặc không giải mã được sẽ bị bỏ đi, và danh sách đối tượng bị mất được dựng lại bằng cách duyệt dữ liệu đối tượng.

Tệp trên đĩa không đổi. Bản vẽ được phục hồi mở ra với trạng thái chưa lưu: hãy lưu nó dưới tên mới. Một tệp mà không đọc được gì cả sẽ bị từ chối, kèm lý do.

### LEGACYTEXT

Chuyển văn bản đã gõ bằng các phông tiếng Việt 8-bit cũ sang Unicode. Tên ngắn `TEXTTOUNICODE` và `VNTEXT`.

Các bản vẽ tiếng Việt cũ giữ văn bản dưới dạng ký tự Tây mà chỉ phông mới biến thành tiếng Việt: văn bản TCVN3 trong các phông ABC (`.VnTime`, `.VnArial`, và các phông chữ hoa mà tên kết thúc bằng `H`), và văn bản VNI trong các phông VNI (`VNI-Times`). CadCraft hiện văn bản như vậy đúng như nó được đọc ngay khi mở bản vẽ, theo phông của kiểu văn bản, của đối tượng, hoặc của một đoạn trong văn bản đoạn; tệp vẫn giữ các ký tự cũ.

{{cmd:LEGACYTEXT}} cho biết có bao nhiêu văn bản nó tìm thấy theo mỗi bảng mã, và hỏi `Convert … to Unicode?`. `Yes` viết lại mọi văn bản (mô hình, tờ, khối, giá trị và định nghĩa thuộc tính), và đặt cho các kiểu văn bản một phông Unicode (Times New Roman, Arial hoặc Courier New tùy loại của phông cũ), trong một bước hoàn tác. Định dạng bên trong văn bản đoạn được giữ.

Khi không có văn bản nào dùng một phông đã biết (một kiểu đã mất tên phông), nó hỏi `Read selected texts as [Tcvn3/Vni/None]`: chọn bảng mã và chọn các văn bản. Văn bản đã là Unicode được giữ yên. Ghi đè văn bản kích thước và văn bản đường dẫn nhiều không được chuyển đổi.
