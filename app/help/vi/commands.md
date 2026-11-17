---
title: Tham chiếu lệnh
summary: Mọi lệnh trong ứng dụng vẽ CadCraft, cùng các bí danh, các câu hỏi nó đặt ra, các tùy chọn và mặc định.
keywords: lệnh, bí danh, danh sách lệnh, diện tích, chu vi, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, khối, chèn, bố cục, in, thu phóng, trợ giúp, copyclip, cutclip, pasteclip, pasteorig, copybase, nhân bản, selectall
from: 7db2646b
---

Gõ tên lệnh hoặc bí danh rồi nhấn {{key:Enter}} hoặc {{key:Space}}. Không phân biệt chữ hoa và chữ thường, và dấu `_`, `-`, `.` hoặc `'` ở đầu sẽ bị bỏ qua. Gõ `HELP` (hoặc `?`) để in vào lịch sử dòng lệnh một danh sách ngắn mọi lệnh; nhấn {{key:F1}} để xem trợ giúp này.

Cách đọc các câu nhắc: tùy chọn nằm trong dấu ngoặc vuông, và bạn chọn một tùy chọn bằng cách gõ các chữ cái viết hoa của nó (`D` cho Đường kính). Mặc định nằm trong dấu ngoặc nhọn; nhấn {{key:Enter}} để chấp nhận. Chỗ nào cần một điểm, bạn có thể bấm hoặc gõ bất kỳ định dạng nào trong [Nhập tọa độ và khoảng cách](topic:coordinate-entry). Chỗ nào cần một khoảng cách, bạn có thể gõ một số hoặc bấm hai điểm.

Nhấn {{key:Enter}} khi cần một điểm hoặc một đối tượng mà không có mặc định sẽ kết thúc lệnh. {{key:Esc}} hủy nó. Mọi việc một lệnh làm là một bước hoàn tác.

## Vẽ

### LINE

Bí danh: `L`. Các đoạn thẳng, mỗi đoạn là một đối tượng riêng.

- `Chỉ định điểm đầu tiên` (Enter: bắt đầu từ điểm cuối bạn đã cho)
- `Chỉ định điểm kế tiếp [Hoàn tác (U)]`, lặp lại. Sau hai đoạn: `[Hoàn tác (U)/Đóng (C)]`.
- `U` lấy lại đoạn cuối, `C` đóng về điểm đầu và kết thúc. Enter kết thúc.

### PLINE

Bí danh: `PL`. Một đa tuyến gồm các đoạn thẳng và cung.

- `Chỉ định điểm bắt đầu`
- `Chỉ định điểm kế tiếp [Cung (A)/Đóng (C)/Hoàn tác (U)]` (Đóng khi đã có hai đoạn)
- `A` chuyển sang cung: `Chỉ định điểm cuối của cung [Đường thẳng (L)/Đóng (C)/Hoàn tác (U)]`. Mỗi cung tiếp tuyến với đoạn trước nó. `L` quay lại đường thẳng, `CL` đóng bằng một cung.
- Enter kết thúc; đa tuyến vẫn mở.

### CIRCLE

Bí danh: `C`.

- `Chỉ định tâm của vòng tròn [3P/2P/Ttr (tiếp tuyến, tiếp tuyến, bán kính)]`
- `Chỉ định bán kính của vòng tròn [Đường kính (D)] <bán kính cuối>`; `D` hỏi `Chỉ định đường kính của vòng tròn`.
- `2P`: hai đầu của một đường kính. `3P`: ba điểm trên vòng tròn.
- `T` (cũng là lệnh `TTR`, và {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Vòng tròn: Tiếp tuyến, Tiếp tuyến, Bán kính}}): `Chỉ định điểm trên đối tượng cho tiếp tuyến thứ nhất của vòng tròn`, rồi tiếp tuyến thứ hai, rồi bán kính (Enter: bán kính cuối). Vòng tròn tiếp xúc với cả hai đối tượng (đường thẳng, cung, vòng tròn, đoạn đa tuyến, kể cả bên trong khối); trong các vòng tròn thỏa mãn, chọn cái tiếp xúc gần các điểm bạn chọn nhất. "Vòng tròn không tồn tại" khi không có cái nào hợp.
- `TTT` (hoặc {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Vòng tròn: Tiếp tuyến, Tiếp tuyến, Tiếp tuyến}}): ba đối tượng; vòng tròn tiếp xúc cả ba, gần các điểm bạn chọn nhất (ba đường thẳng cho một vòng tròn trong hoặc một vòng ngoài, tùy vị trí bạn bấm).

### ARC

Bí danh: `A`.

- `Chỉ định điểm đầu của cung [Tâm (C)]`, `Chỉ định điểm thứ hai của cung`, `Chỉ định điểm cuối của cung`: một cung đi qua ba điểm.
- `C`: `Chỉ định tâm của cung`, `Chỉ định điểm đầu của cung`, `Chỉ định điểm cuối của cung`. Cung chạy ngược chiều kim đồng hồ từ điểm đầu đến điểm cuối.

### RECTANG

Bí danh: `REC`, `RECTANGLE`. Một đa tuyến đóng.

- `Chỉ định góc thứ nhất`, `Chỉ định góc khác`. Gõ `@rộng,cao` cho góc thứ hai.

### POLYGON

Bí danh: `POL`. Một đa giác đều dưới dạng đa tuyến đóng.

- `Nhập số cạnh <4>` (3 đến 1024)
- `Chỉ định tâm của đa giác`
- `Nhập một tùy chọn [Nội tiếp đường tròn (I)/Ngoại tiếp đường tròn (C)] <I>`
- `Chỉ định bán kính của vòng tròn`: bấm hoặc gõ một điểm; khoảng cách của nó đặt kích thước và hướng của nó xoay đa giác.

### ELLIPSE

Bí danh: `EL`.

- `Chỉ định điểm cuối trục của elip [Tâm (C)]`, `Chỉ định điểm cuối khác của trục`, `Chỉ định khoảng cách tới trục khác`
- `C`: `Chỉ định tâm của elip`, `Chỉ định điểm cuối của trục`, rồi khoảng cách tới trục khác.
- `I` (`Vòng tròn đẳng cự (I)`, chỉ khi {{cmd:ISODRAFT}} bật): tâm, rồi bán kính hoặc `Đường kính`: elip mà một vòng tròn hiện ra trên mặt phẳng đẳng cự hiện hành.

### HATCH

Bí danh: `H`, `BH`, `BHATCH`; hoặc {{ui:Tô bóng}} trên thanh công cụ. In mẫu, tỷ lệ và góc hiện hành trước.

- `Chọn điểm bên trong [Chọn đối tượng (S)/Mẫu (P)/Tỷ lệ (SC)/Góc (A)]`, lặp lại (`Hoàn tác (U)` khi đã có một vùng): mỗi lần bấm thêm vùng kín bao quanh nó, với các hình kín bên trong là phần đảo. Enter tạo một tô bóng từ tất cả chúng.
- `S`: `Chọn đối tượng kín` (đa tuyến đóng, vòng tròn, elip đóng).
- `P`: `Nhập tên mẫu, SOLID, hoặc ? để xem danh sách <hiện tại>`. `SC`: `Chỉ định tỷ lệ mẫu`. `A`: `Chỉ định góc mẫu`.
- `G` (Chuyển màu): nền là một chuyển màu thay vì mẫu. Xem {{cmd:GRADIENT}} để biết các câu hỏi của nó.

Xem [Tô bóng và vùng tô](topic:hatch).

### GRADIENT

Bí danh: `GD`. Tô một vùng bằng chuyển màu của một hoặc hai màu. Nó hỏi chuyển màu trước, rồi tiếp tục như {{cmd:HATCH}} (`Chọn điểm bên trong`, `S` cho đối tượng kín, {{key:Enter}} để hoàn tất).

- `Nhập tùy chọn chuyển màu [Kiểu (T)/Một màu (O)/Hai màu (TW)/Góc (A)/Căn giữa (C)/Thoát (X)] <X>`, lặp lại; mỗi lần nó in chuyển màu như hiện tại.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, hoặc một trong số đó đảo ngược (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Vài chữ cái đầu là đủ.
- `O`: một màu, rồi độ đậm từ 0 đến 1 (0 làm tối thành đen, 0.5 là chính màu, 1 pha thành trắng). `TW`: màu thứ nhất và thứ hai. Một màu là một số từ 1 đến 255, ba số như `255,128,0`, hoặc `#rrggbb`.
- `A`: góc mà chuyển màu chạy theo. `C`: căn giữa Có hoặc Không (Không dời điểm giữa chuyển màu sang một bên).
- Nó từ chối một màu hoặc kiểu nó không biết, và một độ đậm nằm ngoài 0 đến 1.

{{cmd:HATCHEDIT}} `G` và Thuộc tính (Chuyển màu) đổi chuyển màu sau này, hoặc biến bất kỳ tô bóng nào thành chuyển màu. Chuyển màu được vẽ trên màn hình và được in. DWG 2004 trở lên giữ nó như một tô bóng chuyển màu thật; DXF 2000 và DWG 2000 giữ nó cho CadCraft, và các chương trình khác thấy một tô đặc bằng màu thứ nhất.

### HATCHGENERATEBOUNDARY

Bí danh: `HGB`. Tạo lại đường biên từ một tô bóng đã mất nó. `Chọn tô bóng` (hoặc chọn trước), rồi `Liên kết mỗi tô bóng với đường biên mới của nó, để tô bóng theo nó? [Có (Y)/Không (N)] <Có>`.

- Mỗi vòng của tô bóng trở thành một đa tuyến đóng trên lớp của tô bóng; các đa tuyến mới được giữ chọn. Một cạnh cong trở lại thành các đoạn thẳng ngắn mà tô bóng giữ.
- Với Có, tô bóng theo đường biên mới của nó, như một tô bóng do {{cmd:HATCH}} tạo. Một bước hoàn tác.
- Nó nói rõ khi không có tô bóng nào được chọn.

### POINT

Bí danh: `PO`; hoặc {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Điểm}}. Các đối tượng điểm, mỗi lần bấm một điểm, cho đến Enter.

- `Chỉ định một điểm`

### XLINE

Bí danh: `XL`; hoặc {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Đường dựng}}. Các đường dựng, vô hạn về hai phía. Xem [Đường dựng và tia](topic:construction-lines).

- `Chỉ định một điểm [Ngang (H)/Đứng (V)/Góc (A)/Chia đôi (B)/Dời (O)]`, rồi `Chỉ định điểm đi qua` cho mỗi đường, cho đến Enter.
- `A`: `Nhập góc của đường dựng [Tham chiếu] <0>`; `R` hỏi `Chọn một đối tượng đường thẳng` trước.
- `B`: `Chỉ định đỉnh của góc`, `Chỉ định điểm đầu của góc`, rồi `Chỉ định điểm cuối của góc` cho mỗi đường.
- `O`: `Chỉ định khoảng cách dời [Qua (T)] <Qua>`, rồi `Chọn một đối tượng đường thẳng` và `Chỉ định phía để dời` (hoặc `Chỉ định điểm đi qua`) cho mỗi đường.

### RAY

Không có bí danh; hoặc {{ui:Vẽ}} › {{ui:Thêm}} › {{ui:Tia}}. `Chỉ định điểm đầu`, rồi `Chỉ định điểm đi qua` cho mỗi tia, cho đến Enter.

### TEXT

Bí danh: `DT`, `DTEXT`; hoặc {{ui:Văn bản}} trên thanh công cụ. Văn bản một dòng; mỗi dòng là một đối tượng riêng.

- `Chỉ định điểm đầu của văn bản [Căn lề (J)]`
- `J`: `Nhập một tùy chọn [Trái (L)/Giữa (C)/Phải (R)/Chính giữa (M)/TL/MC] <L>`, rồi `Chỉ định điểm chèn của văn bản`
- `Chỉ định chiều cao <chiều cao văn bản hiện tại>`
- `Chỉ định góc xoay của văn bản <0>`
- `Nhập văn bản`, lặp lại: mỗi Enter bắt đầu dòng kế tiếp bên dưới. Enter trên dòng trống sẽ kết thúc. {{key:Space}} gõ một khoảng trắng ở đây.

### DIVIDE

Bí danh: `DIV`. {{cmd:DIVIDE}} đặt các dấu trên một đường thẳng, cung, vòng tròn, đa tuyến, spline hoặc elip để chia nó thành các phần bằng nhau. Chọn đối tượng, rồi nhập số phần (2 đến 32767). Một đối tượng mở nhận ít hơn số phần một dấu; một đối tượng đóng nhận một dấu ở cả điểm đầu của nó. Bản thân đối tượng không bị cắt. Các dấu là điểm; `Khối (B)` thay vào đó hỏi một khối của bản vẽ này và có xoay theo đối tượng hay không. Chiều dài dọc theo spline và elip được đo bằng các dây cung ngắn. Nó từ chối văn bản, tô bóng và các đối tượng khác không có chiều dài.

### MEASURE

Bí danh: `ME`. {{cmd:MEASURE}} đặt một dấu sau mỗi độ dài cho trước dọc theo đường thẳng, cung, vòng tròn, đa tuyến, spline hoặc elip, tính từ đầu gần nơi bạn chọn (đối tượng đóng: từ điểm đầu của nó). Cho độ dài bằng cách gõ hoặc bằng hai điểm. Đầu xa của đối tượng mở không có dấu. `Khối (B)` đặt một khối tại mỗi dấu thay vì một điểm. Nó từ chối độ dài 0, độ dài dài hơn đối tượng, và độ dài tạo ra hơn 32767 dấu.

### BOUNDARY

Bí danh: `BO`, `BPOLY`. {{cmd:BOUNDARY}} tạo một đa tuyến đóng quanh vùng chứa điểm bạn chọn, từ bất kỳ đường thẳng, cung, vòng tròn, đa tuyến và đường cong nào bao quanh nó trên màn hình. Các đoạn nằm trên một cung hoặc vòng tròn trở lại thành đoạn cung; các đoạn của elip và spline trở lại thành đoạn thẳng ngắn. Với `Đảo (I)` bật (thiết lập ban đầu), mỗi vùng kín bên trong nó cũng có đa tuyến riêng. Tiếp tục chọn điểm; Enter kết thúc. Các đối tượng tạo thành vùng được giữ nguyên. Nó nói rõ khi không có vùng kín nào chứa điểm.

### BLEND

{{cmd:BLEND}} vẽ một spline giữa các đầu của hai đường cong mở. Chọn mỗi đường cong gần đầu cần nối. `CONtinuity` chọn `Tangent` (spline rời và tới dọc theo cả hai đường cong) hoặc `Smooth` (nó cũng uốn theo cách hai đường cong uốn ở đầu); lựa chọn được giữ cho phiên làm việc. Hai đường cong không bị thay đổi. Nó từ chối đối tượng đóng và hai đầu đã gặp nhau.

### REGION

Bí danh: `REG`. {{cmd:REGION}} biến đối tượng đóng thành miền: các vùng phẳng bạn có thể nối, cắt và đo. Chọn vòng tròn, đa tuyến đóng, elip đóng hoặc spline đóng, hoặc đường thẳng, cung và đa tuyến mở tạo thành một vòng khép kín đầu nối đuôi; mỗi vòng thành một miền và thay thế các đối tượng nó đến từ đó. Cung vẫn là cung; elip và spline thành các đoạn thẳng ngắn. Phần không đóng và không tạo thành vòng nào được giữ nguyên, và nó cho biết có bao nhiêu phần như vậy. Trong bản vẽ, một miền là một hoặc nhiều đa tuyến đóng được giữ cùng nhau như một nhóm không tên, nên một lần bấm chọn toàn bộ miền, và một bản sao là một miền riêng; các chương trình khác mở tệp sẽ thấy các đa tuyến đóng.

Khi có miền trong bản vẽ, {{cmd:UNION}}, {{cmd:SUBTRACT}} và {{cmd:INTERSECT}} trên thẻ 2D làm việc trên miền: `UNION` nối các miền được chọn thành một (các miền rời nhau thành một miền gồm nhiều đường viền), `SUBTRACT` hỏi các miền để trừ đi và rồi các miền để bỏ đi (một lỗ vẫn là một phần của miền), `INTERSECT` giữ phần diện tích mà tất cả chúng cùng có. Mỗi lệnh cho biết diện tích của kết quả và là một bước hoàn tác. Chúng từ chối khi không còn gì hoặc không có phần chung. Trên thẻ 3D, và trong một bản vẽ không có miền, các lệnh tương tự hoạt động trên khối đặc như trước.

## Sửa đổi

Bí danh: `MT`, `T`; hoặc {{ui:Đoạn văn}} trên thanh công cụ. Văn bản đoạn tự ngắt dòng theo một chiều rộng, gõ ngay tại chỗ.

- `Chỉ định góc thứ nhất`
- `Chỉ định góc đối diện [Cao (H)/Căn lề (J)/Khoảng dòng (L)/Xoay (R)/Rộng (W)]`: chiều rộng qua hai góc là nơi văn bản ngắt dòng. `H` hỏi `Chỉ định chiều cao`, `J` `Nhập căn lề [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Nhập hệ số khoảng dòng (0.25 đến 4)`, `R` `Chỉ định góc xoay`, `W` `Chỉ định chiều rộng (0 để không ngắt dòng)` và bỏ qua góc thứ hai.
- Sau đó một hộp mở trên bản vẽ: gõ, {{key:Enter}} cho đoạn mới, {{key:Mod+Enter}} hoặc bấm ra ngoài để hoàn tất, {{key:Esc}} để hủy. Thanh của nó đặt chiều cao, khoảng dòng, chiều rộng và căn lề. Xem [Thêm văn bản và nhãn](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Bí danh: `ED`, `DDEDIT`; hoặc nhấp đúp một văn bản. `Chọn một văn bản để sửa`, lặp lại cho đến {{key:Enter}}: mỗi văn bản mở trong cùng hộp. Khi bắt đầu trên một văn bản đã chọn hoặc nhấp đúp, nó sửa đúng văn bản đó rồi kết thúc.
### ERASE

Bí danh: `E`, `DELETE`; hoặc nhấn {{key:Delete}} khi đối tượng đã được chọn.

- `Chọn đối tượng` (bỏ qua khi đối tượng đã được chọn)

### MOVE

Bí danh: `M`.

- `Chọn đối tượng`
- `Chỉ định điểm gốc [Độ dịch chuyển (D)]`, `Chỉ định điểm thứ hai`
- `D`: `Chỉ định độ dịch chuyển`, gõ dạng `dx,dy`.

### COPY

Bí danh: `CO`, `CP`. Sao chép bao nhiêu lần tùy số điểm bạn cho.

`Mảng (A)` ở câu nhắc điểm thứ hai tạo một hàng trong một lần: nhập số mục (bản gốc tính là một), rồi điểm nơi bản sao đầu tiên đặt; các bản khác theo cùng khoảng cách. `Vừa (F)` làm điểm đó là vị trí của bản sao cuối thay vì vậy, với các bản khác trải đều giữa.

- `Chọn đối tượng`
- `Chỉ định điểm gốc [Độ dịch chuyển (D)]`
- `Chỉ định điểm thứ hai [Hoàn tác (U)]`, lặp lại đến Enter. `U` lấy lại bản sao cuối.

### ROTATE

Bí danh: `RO`.

- `Chọn đối tượng`, `Chỉ định điểm gốc`
- `Chỉ định góc xoay <góc cuối>`: độ, dương ngược chiều kim đồng hồ; hoặc bấm một điểm để xoay về phía nó.

### SCALE

Bí danh: `SC`.

- `Chọn đối tượng`, `Chỉ định điểm gốc`
- `Chỉ định hệ số tỷ lệ`: gõ một hệ số như `0.5` hoặc `2`. Một điểm được bấm cho ra khoảng cách của nó tới điểm gốc làm hệ số.

### MIRROR

Bí danh: `MI`.

- `Chọn đối tượng`
- `Chỉ định điểm thứ nhất của đường đối xứng`, `Chỉ định điểm thứ hai của đường đối xứng`
- `Xóa đối tượng gốc? [Có (Y)/Không (N)] <N>`

### ALIGN

Bí danh: `AL`; hoặc {{ui:Sửa đổi}} › {{ui:Thêm}} › {{ui:Căn}}.

- `Chọn đối tượng`
- `Chỉ định điểm nguồn thứ nhất`, `Chỉ định điểm đích thứ nhất`
- `Chỉ định điểm nguồn thứ hai (Enter để tiếp tục)`, `Chỉ định điểm đích thứ hai`
- `Chỉ định điểm nguồn thứ ba (Enter để tiếp tục)`, `Chỉ định điểm đích thứ ba`
- Với hai cặp: `Đổi tỷ lệ đối tượng theo các điểm căn? [Có (Y)/Không (N)] <N>`

Xem [Căn đối tượng](topic:modify-objects#align-objects).

### ALIGNTO

- `Chọn đối tượng` (hoặc vùng chọn), `Căn [Trái (L)/Giữa (C)/Phải (R)/Trên (T)/Giữa dọc (M)/Dưới (B)] <Trái>`, `Đến [Vùng chọn/Đầu tiên (F)/Cuối cùng (L)/Điểm (P)] <Vùng chọn>`; `P` hỏi điểm. Vùng chọn vẫn được giữ.

### DISTRIBUTE

- `Chọn đối tượng` (ít nhất ba), `Phân bố [Theo chiều ngang/Theo chiều dọc] <Theo chiều ngang>`, `Trải đều [Tâm (C)/Khoảng hở (G)] <Khoảng hở>`. Hai đối tượng ngoài cùng giữ nguyên; vùng chọn vẫn được giữ.

### ALIGNPANEL

Bí danh: `ALP`; hoặc {{ui:Sửa đổi}} › {{ui:Thêm}} › {{ui:Căn và phân bố}}. Mở bảng chạy ALIGNTO và DISTRIBUTE bằng các lần bấm.

### LASER

Bí danh: `LASERCUT`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Laser…}}. Mở bảng Laser trên bản vẽ: mỗi lớp làm gì (cắt, khắc vạch, khắc, tô, hình ảnh), bản xem trước, mã G-code GRBL để lưu, và căn khung cùng gửi qua Web Serial. Xem [Gửi bản vẽ đến máy cắt laser](topic:laser-cutting).

### STRETCH

Bí danh: `S`; hoặc {{ui:Kéo giãn}}. `Chọn đối tượng để kéo giãn`: kéo các cửa sổ chọn cắt (hoặc gõ `C`) qua các đầu cần di chuyển. `Chỉ định điểm gốc [Độ dịch chuyển (D)]`, `Chỉ định điểm thứ hai`. Các điểm nằm trong cửa sổ di chuyển: đầu đường thẳng, đỉnh đa tuyến (đoạn cung giữ chiều cao của nó), điểm kích thước; vòng tròn, elip, văn bản, điểm và khối di chuyển nguyên vẹn khi tâm hoặc điểm chèn của chúng nằm bên trong. Một vùng chọn làm trước lệnh giữ các cửa sổ chọn cắt (và lasso) đã tạo ra nó, nên chúng kéo giãn theo cùng cách. Không có cửa sổ, các đối tượng di chuyển nguyên vẹn.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Bí danh: `AR`; hoặc {{ui:Mảng}}. `Chọn đối tượng`, rồi `Nhập kiểu mảng [Hình chữ nhật/Cực (PO)] <Hình chữ nhật>` (chỉ ARRAY).

- Hình chữ nhật bắt đầu với 4 cột × 3 hàng, cách nhau 1.5 lần kích thước đối tượng, hiện dưới dạng bản xem trước. `Nhập một tùy chọn [Số lượng (COU)/Khoảng cách (S)/Cột (COL)/Hàng (R)/Thoát (X)] <X>`: `COU` hỏi số cột và hàng, `S` khoảng cách giữa các cột và giữa các hàng (âm sang trái hoặc xuống dưới), `COL` và `R` mỗi cái một hướng.
- Cực hỏi `Chỉ định điểm tâm của mảng`, bắt đầu với 6 mục quay đều một vòng, đã xoay. `Nhập một tùy chọn [Mục (I)/Góc lấp đầy (F)/Xoay mục (ROT)/Thoát (X)] <X>`: `I` số mục, `F` góc cần lấp đầy (+ ngược chiều kim đồng hồ, − theo chiều kim đồng hồ), `ROT` Có hoặc Không.
- {{key:Enter}} (Thoát) tạo các bản sao, như đối tượng thường. Một bước hoàn tác.
- `AS` (Liên kết) chuyển giữa bản sao thường và một mảng vẫn sửa được: một đối tượng bạn đổi sau này bằng {{cmd:ARRAYEDIT}}, bằng các tay cầm hoặc trong Thuộc tính. Lựa chọn được ghi nhớ ({{cmd:ARRAYASSOCIATIVITY}}); nó bắt đầu với bản sao thường.

### ARRAYPATH

Sao chép dọc theo một đường cong. `Chọn đối tượng`, rồi `Chọn đường dẫn cong`: một đường thẳng, cung, vòng tròn, elip, đa tuyến hoặc spline (không phải một trong các đối tượng đang được tạo mảng). Đường dẫn bắt đầu tại đầu gần đối tượng hơn, và mục đầu tiên là các đối tượng đúng tại chỗ của chúng.

- `Nhập một tùy chọn [Phương pháp (M)/Mục (I)/Khoảng cách (SP)/Căn (AL)/Liên kết (AS)/Thoát (X)] <X>`, với bản xem trước. `M`: `Chia` trải các mục đều trên toàn đường dẫn, `Đo` đặt một mục sau mỗi khoảng cách nhất định dọc theo nó. `I`: số mục (với Đo, 0 nghĩa là bao nhiêu vừa đủ; một số vượt quá cuối đường dẫn được giới hạn theo những gì vừa). `SP`: khoảng cách giữa các mục dọc đường dẫn (chuyển sang Đo). `AL`: Có để mỗi mục xoay theo đường dẫn, Không để chúng giữ thẳng đứng.
- `AS` như trong {{cmd:ARRAY}}. Khi bật, mảng giữ một bản sao hình dạng đường dẫn của riêng nó: sửa đường cong sau đó không làm các mục di chuyển.
- Nó từ chối một đường dẫn không phải đường cong, và một mục.

### ARRAYEDIT

Đổi một mảng được tạo với Liên kết (AS). `Chọn mảng` (hoặc chọn trước). Nó in mảng hiện như thế nào, rồi hỏi cho đến {{key:Enter}}:

- Hình chữ nhật: `COL` các cột và khoảng cách của chúng, `R` các hàng và khoảng cách của chúng, `A` góc các cột chạy theo.
- Cực: `I` các mục, `F` góc lấp đầy, `ROT` xoay mục Có hoặc Không.
- Đường dẫn: `M` Chia hoặc Đo, `I` các mục, `SP` khoảng cách, `AL` căn theo đường dẫn.
- `S` (Nguồn) mở các đối tượng mà mảng lặp lại, riêng, như trình sửa khối. Vẽ và sửa ở đó; {{cmd:ARRAYCLOSE}} lưu hoặc bỏ, và mọi mục theo sau.
- `REP` (Thay thế): `Chọn đối tượng thay thế`, `Chỉ định điểm gốc của đối tượng thay thế`, rồi bấm các mục cần thay thế, {{key:Enter}}. Các mục đó hiện đối tượng thay thế; các đối tượng thay thế rời bản vẽ và nằm trong mảng. `RES` (Đặt lại) hiện lại các đối tượng nguồn trong mọi mục.
- Mỗi thay đổi là một bước hoàn tác. Nó từ chối bản sao thường, một tham chiếu khối thường và một mảng trên lớp bị khóa.

Các số này cũng có trong Thuộc tính, dưới mục Mảng, và mảng có tay cầm: điểm gốc của nó di chuyển nó, tay cầm ở mục thứ hai đặt khoảng cách, tay cầm sau mục cuối đặt số lượng (cực: mục thứ hai đặt số mục, mục cuối đặt góc lấp đầy). {{cmd:EXPLODE}} biến mảng trở lại thành các bản sao thường.

### ARRAYCLOSE

Kết thúc {{cmd:ARRAYEDIT}} Nguồn: `Lưu các thay đổi cho đối tượng nguồn của mảng? [Lưu/Bỏ] <Lưu>`. Nó nói rõ khi không có đối tượng nguồn của mảng nào đang mở. {{cmd:BCLOSE}} làm điều tương tự.

### ARRAYASSOCIATIVITY

`Nhập giá trị mới cho ARRAYASSOCIATIVITY (1 = mảng vẫn sửa được, 0 = bản sao thường)`. Đặt {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR và {{cmd:ARRAYPATH}} bắt đầu với gì; tùy chọn `AS` của chúng đổi cùng cài đặt. Được ghi nhớ trong trình duyệt này.

### OFFSET

Bí danh: `O`. Đường thẳng, cung, vòng tròn và đa tuyến.

Khi một đa tuyến dời ra ngoài và các đoạn thẳng của nó tách ra ở một góc, {{cmd:OFFSETGAPTYPE}} quyết định cách khép khoảng hở.

- `Chỉ định khoảng cách dời [Qua (T)] <khoảng cách cuối, hoặc Qua>`
- `Chọn đối tượng để dời`, rồi `Chỉ định điểm ở phía để dời` (hoặc, với Qua, `Chỉ định điểm đi qua`), lặp lại cho đến Enter.

### OFFSETGAPTYPE

- `Khoảng hở ở góc dời: 0 kéo dài, 1 bo góc, 2 vát mép`: cách {{cmd:OFFSET}} khép các khoảng hở tại các góc ngoài của một đa tuyến. `0` kéo dài các đoạn cho đến khi gặp nhau (thiết lập ban đầu), `1` nối chúng bằng một cung quanh góc cũ, `2` bằng một đường cắt thẳng. Góc trong và đoạn cung không bị ảnh hưởng. Được giữ cho phiên này.

### EXTRIM

{{cmd:EXTRIM}} cắt mọi thứ ở một phía của một cạnh. Chọn cạnh cắt (đường thẳng, cung, vòng tròn, đa tuyến, elip, spline hoặc đường dựng), rồi chọn một điểm ở phía cần làm trống: mọi đường thẳng, cung, vòng tròn, đa tuyến và đường dựng cắt cạnh sẽ mất phần của nó ở phía đó, nơi nó bắt đầu từ cạnh. Khi bạn chọn phía, các đoạn sẽ bị xóa đi theo con trỏ. Với một cạnh đóng, các phía là bên trong và bên ngoài. Các đối tượng chỉ chạm vào cạnh, và văn bản, tô bóng, spline và elip cắt qua nó, được giữ nguyên. Một bước hoàn tác.

### TRIMEXTENDMODE

- `Nhập giá trị mới cho TRIMEXTENDMODE (1 Nhanh, 0 Chuẩn)`: cách {{cmd:TRIM}} và {{cmd:EXTEND}} bắt đầu. `1` Nhanh: mọi đối tượng là một cạnh cắt hoặc ranh giới. `0` Chuẩn: chúng hỏi các cạnh trước. Cũng là `(setvar "TRIMEXTENDMODE" 0)` trong LISP.

### TRIM

Bí danh: `TR`. Trước tiên in `Cài đặt hiện tại: chế độ Nhanh (TRIMEXTENDMODE 1), cạnh: không kéo dài, kéo sẽ vẽ một đường`. Ở chế độ Nhanh, mọi đối tượng nhìn thấy là một cạnh cắt, và một đối tượng không bị đường nào cắt thì bị xóa; ở chế độ Chuẩn, nó hỏi `Chọn cạnh cắt (Enter = mọi đối tượng)` trước và chỉ cắt tại những cạnh đó.

- `Chọn đối tượng để cắt hoặc Shift+chọn để kéo dài [Cạnh cắt (T)/Hàng rào (F)/Chọn cắt (C)/Chế độ (O)/Cạnh (E)/Xóa (R)/Hoàn tác (U)]`, lặp lại: bấm đoạn cần bỏ (nó hiện màu xám và nét đứt khi con trỏ dừng trên đó), kéo một đường qua nhiều đoạn (tất cả đi trong một bước), hoặc bấm hai chỗ trống để có một hàng rào giữa chúng. {{key:Shift}} kéo dài thay vì cắt. `T` chọn cạnh cắt (chế độ Chuẩn), `F` hỏi các điểm hàng rào, `C` hai góc cửa sổ (đoạn nằm một phần bên trong cũng đi), `O` hỏi `Nhập một tùy chọn chế độ cắt [Nhanh/Chuẩn]`, `E` hỏi `Nhập chế độ kéo dài cạnh ngầm [Kéo dài/Không kéo dài]` (EDGEMODE), `R` xóa các đối tượng bạn chọn, `U` hoàn tác lần chọn hoặc kéo cuối. Enter kết thúc. Xem [Cắt và kéo dài](topic:trim-and-extend).
- Bấm một tô bóng sẽ cắt tô bóng: các cạnh cắt tách vùng được tô, và đoạn bạn bấm bị lấy đi (không để lại đường viền nào tại chỗ cũ). Tô bóng giữ mẫu hoặc chuyển màu của nó; một tô bóng từng được liên kết với đường biên sẽ không còn liên kết, vì nó không còn lấp đầy đường biên. Nó nói rõ khi không có cạnh cắt nào tách tô bóng tại đó, khi bấm nằm ngoài tô bóng, và khi không còn gì (dùng {{cmd:ERASE}}). Đường kéo hoặc hàng rào không cắt tô bóng.

### EXTEND

Bí danh: `EX`. Giống TRIM theo chiều ngược lại: `Chọn đối tượng để kéo dài hoặc Shift+chọn để cắt [Cạnh biên (B)/Hàng rào (F)/Chọn cắt (C)/Chế độ (O)/Cạnh (E)/Hoàn tác (U)]`. Một lần bấm kéo dài đầu gần nó đến ranh giới kế tiếp; một đường hoặc hàng rào kéo dài mọi đối tượng nó cắt qua; {{key:Shift}} cắt. `B` chọn cạnh biên (chế độ Chuẩn). Chế độ và Cạnh được dùng chung với TRIM.

### LINKVIEWS

Bí danh: `SYNCVIEWS`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Liên kết khung nhìn của các khung}}, hoặc biểu tượng liên kết trên thẻ bản vẽ. `Liên kết khung nhìn của các khung [Bật/Tắt]` (Enter chuyển sang trạng thái kia): khi bật, một kéo hoặc thu phóng trong khung đang hoạt động sẽ di chuyển mọi khung hiển thị cùng loại không gian. Xem [Chia màn hình](topic:split-screen).

### OPENIN3D

Không có bí danh; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Mở trong ModelCraft}}, nơi ứng dụng mô hình hóa 3D nhận một bản vẽ được chuyển sang. Mở nó ở đó trong thẻ mới, dưới dạng DWG (không có gì được tải lên). Nếu trình duyệt chặn thẻ, nó sẽ nói như vậy.

### LASSOMODE

`Nhập giá trị mới cho LASSOMODE (1 = lasso, 0 = hình chữ nhật)`: việc nhấn và kéo ở một chỗ trống sẽ vẽ gì. Giống Cài đặt › CadCraft › Kéo để chọn. Xem [Chọn bằng lasso](topic:lasso-selection).

### FILLET

Bí danh: `F`. Đường thẳng, cung, vòng tròn và đa tuyến. In `Cài đặt hiện tại: Chế độ = CẮT, Bán kính = 0` trước.

- `Chọn đối tượng đầu tiên [Hoàn tác (U)/Đa tuyến (P)/Bán kính (R)/Cắt (T)/Nhiều (M)]`
  - `R` hỏi `Chỉ định bán kính bo góc <cuối>`. `T` hỏi `Nhập chế độ cắt [Cắt/Không cắt]`: với Không cắt, các đối tượng giữ nguyên và chỉ có cung được thêm vào.
  - `M` giữ lệnh chạy để có thêm góc cho đến {{key:Enter}}; `U` lấy lại góc cuối mà không rời lệnh.
  - `P` hỏi `Chọn đa tuyến 2D [Bán kính]` và bo mọi góc nơi hai đoạn thẳng gặp nhau. Các bo góc đã có được thay bằng bán kính mới; bán kính 0 gỡ chúng ra. Các góc mà cạnh quá ngắn so với bán kính được để nguyên và được đếm.
- `Chọn đối tượng thứ hai hoặc Shift+chọn để áp dụng góc [Bán kính (R)]`. Giữ {{key:Shift}} khi bạn bấm để có góc nhọn, bất kể bán kính.

Bấm mỗi đối tượng ở phần bạn muốn giữ. Hai đường thẳng không gặp nhau sẽ được kéo dài. Hai đường thẳng song song nhận một nửa vòng tròn qua khoảng hở, tại đầu của đường thẳng thứ nhất gần nơi bạn bấm nhất. Một vòng tròn không bao giờ bị cắt. Hai đoạn của cùng một đa tuyến cạnh nhau nhận cung bên trong đa tuyến; một đa tuyến và một đối tượng khác hoạt động khi vết cắt rơi vào đoạn đầu hoặc đoạn cuối của đa tuyến.

### CHAMFER

Bí danh: `CHA`. Đường thẳng và các đoạn thẳng của đa tuyến. In các khoảng cách hiện tại (hoặc chiều dài và góc) trước.

- `Chọn đường thẳng thứ nhất [Hoàn tác (U)/Đa tuyến (P)/Khoảng cách (D)/Góc (A)/Cắt (T)/Phương pháp (E)/Nhiều (M)]`
  - `D` hỏi `Chỉ định khoảng cách vát thứ nhất <cuối>` và `Chỉ định khoảng cách vát thứ hai <cái thứ nhất>`: cái thứ nhất được cắt khỏi đường thẳng thứ nhất bạn chọn, cái thứ hai khỏi đường kia.
  - `A` hỏi `Chỉ định chiều dài vát trên đường thẳng thứ nhất` và `Chỉ định góc vát từ đường thẳng thứ nhất`.
  - `E` (Phương pháp) chọn cái nào trong hai cái mà lần vát kế tiếp dùng. `T`, `M`, `U` và `P` hoạt động như trong {{cmd:FILLET}}.
- `Chọn đường thẳng thứ hai hoặc Shift+chọn để áp dụng góc [Khoảng cách/Góc/Phương pháp (E)]`. {{key:Shift}}+bấm tạo một góc nhọn.

Một khoảng cách dài hơn đường thẳng sẽ bị từ chối (`Khoảng cách quá lớn.`).

### BREAK and BREAKATPOINT

Bí danh: `BR`. `Chọn đối tượng` (nơi bạn bấm là điểm đầu tiên), `Chỉ định điểm ngắt thứ hai [Điểm đầu (F)]`; `F` hỏi `Chỉ định điểm ngắt thứ nhất` và `Chỉ định điểm ngắt thứ hai`. Phần ở giữa bị bỏ; trên vòng tròn, ngược chiều kim đồng hồ từ điểm đầu. BREAKATPOINT hỏi `Chỉ định điểm ngắt` và chia đối tượng thành hai tại đó (không phải vòng tròn).

### LENGTHEN

Bí danh: `LEN`. `Chọn đối tượng để đo [Độ dài thay đổi (DE)/Phần trăm (P)/Tổng (T)/Động (DY)]`: một lần chọn in `Chiều dài hiện tại` (và góc bao của một cung) và hỏi lại. `DE` hỏi `Nhập độ dài thay đổi (số âm làm ngắn đi) [Góc (A)]`, `P` `Nhập phần trăm độ dài`, `T` `Chỉ định tổng độ dài [Góc (A)]`, `DY` kéo. Rồi `Chọn đối tượng để đổi [Hoàn tác (U)]`, lặp lại: đầu gần điểm bấm nhất sẽ di chuyển. Đường thẳng, cung và đa tuyến mở.

### JOIN

Bí danh: `J`. `Chọn đối tượng để nối`. Đường thẳng, cung và đa tuyến mở gặp nhau đầu nối đuôi thành đa tuyến (đóng khi chuỗi khép lại); đường thẳng nằm trên cùng một đường thành một đường thẳng; cung của cùng một vòng tròn thành một cung hoặc vòng tròn. Lịch sử cho biết có bao nhiêu đối tượng được nối và bao nhiêu thì không.

### MATCHPROP

Bí danh: `MA`, `PAINTER`. `Chọn đối tượng nguồn`, rồi `Chọn đối tượng đích [Cài đặt]` và {{key:Enter}}. Sao chép lớp và màu, và giữa các đối tượng cùng loại thì chiều cao và chiều rộng văn bản, cỡ kích thước, hoặc mẫu tô bóng. `S` hỏi `Bật hoặc tắt một thuộc tính [Màu (C)/Lớp (LA)/Văn bản (T)/Kích thước (D)/Tô bóng (H)]`, lặp lại cho đến {{key:Enter}}; lựa chọn được ghi nhớ cho phiên này.

### EXPLODE

Bí danh: `X`. Đa tuyến thành đường thẳng và cung, tham chiếu khối thành các đối tượng của chúng, kích thước thành đường thẳng, đầu mũi tên và văn bản. Một mảng có thể sửa được ({{cmd:ARRAYEDIT}}) thành các bản sao thường của các đối tượng của nó.

- `Chọn đối tượng`

### GROUP

Bí danh: `G`. {{cmd:GROUP}} đặt cho các đối tượng được chọn một tên mà chúng dùng chung. Chọn các đối tượng, rồi gõ một tên (không có khoảng trắng; `?` liệt kê các nhóm; Enter tạo một nhóm không tên) và, với nhóm có tên, một mô tả tùy chọn. Từ đó, một lần bấm vào một trong số chúng, hoặc một cửa sổ bao lấy một trong số chúng, sẽ chọn tất cả, để chúng di chuyển, sao chép và xóa cùng nhau; mỗi đối tượng vẫn là một đối tượng riêng. Một đối tượng có thể nằm trong nhiều nhóm. Bản sao của cả nhóm là một nhóm không tên mới; bản sao của một thành viên riêng lẻ sẽ vào nhóm. Nhóm thuộc về không gian mà chúng được tạo ra (mô hình hoặc một tờ). Chúng được giữ khi bạn lưu thành DWG hoặc DXF và mở lại tệp trong CadCraft; tệp DXF 2000 cũng mang chúng như đối tượng nhóm cho các chương trình khác, và các nhóm được tạo trong chương trình khác được đọc khi một DXF hoặc DWG được mở.

### UNGROUP

{{cmd:UNGROUP}} tháo nhóm: chọn đối tượng của các nhóm (mỗi nhóm chúng thuộc về sẽ bị tháo ra) hoặc gõ `Tên` và tên của nhóm. Các đối tượng vẫn ở trong bản vẽ. Một bước {{ui:Hoàn tác}} khôi phục các nhóm.

### GROUPEDIT

{{cmd:GROUPEDIT}} đổi một nhóm. Chọn một trong các đối tượng của nó, hoặc `Tên` và tên của nó; một nhóm đã được chọn sẽ được lấy đúng như nó đang là. Rồi: `Thêm (A)` đối tượng (chọn từng cái một, không theo nhóm), `Bỏ (R)` đối tượng, `Đổi tên (REN)` nhóm, đổi `Mô tả (D)`, hoặc đặt `Chọn được (S)` (một lần bấm vào một đối tượng có chọn cả nhóm hay không). `Thoát (X)` hoặc Enter kết thúc. Một nhóm không còn đối tượng nào sẽ biến mất.

### PICKSTYLE

- `Chọn nhóm: 0 một lần bấm chọn một đối tượng, 1 cả nhóm của nó`: với `1` (thiết lập ban đầu), một lần bấm hoặc một cửa sổ trên đối tượng đã nhóm sẽ chọn cả nhóm; với `0` chọn từng đối tượng riêng, để bạn sửa một thành viên. Được giữ cho phiên này.

## Bộ nhớ tạm

Bộ nhớ tạm riêng của CadCraft: nó hoạt động trong một bản vẽ, giữa các bản vẽ và giữa các thẻ CadCraft trong trình duyệt này. Xem [Sao chép, dán và nhân bản](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, hoặc {{ui:Sao chép}} trong nhóm {{ui:Chỉnh sửa}}. Sao chép đối tượng vào bộ nhớ tạm, kèm các khối và lớp chúng dùng. Các đối tượng vẫn được chọn.

- `Chọn đối tượng để sao chép` (bỏ qua khi đối tượng đã được chọn)

### CUTCLIP

{{key:Mod+X}}, hoặc {{ui:Cắt}} trong menu {{ui:Thêm}}. Sao chép đối tượng vào bộ nhớ tạm, rồi xóa chúng (một bước hoàn tác).

- `Chọn đối tượng để cắt` (bỏ qua khi đối tượng đã được chọn)

### COPYBASE

Sao chép đối tượng vào bộ nhớ tạm với một điểm gốc bạn chọn; khi dán, điểm đó được đặt.

- `Chỉ định điểm gốc`
- `Chọn đối tượng để sao chép`

### PASTECLIP

{{key:Mod+V}}, hoặc {{ui:Dán}} trong nhóm {{ui:Chỉnh sửa}}. Bản sao đi theo con trỏ, treo từ góc dưới bên trái của phạm vi (hoặc từ tâm, hoặc điểm `COPYBASE`; xem [Cài đặt CadCraft](topic:settings)).

- `Chỉ định điểm chèn`

Các đối tượng được dán sẽ được chọn. Một khối mà bản vẽ đã có cùng tên sẽ giữ định nghĩa của bản vẽ này.

Khi một vùng được sao chép trong MarkupCraft mới hơn những gì CadCraft đã sao chép (và chưa quá 6 giờ), {{key:Mod+V}} và `PASTECLIP` sẽ dán vùng đó thay vào đó: xem `PASTEAREA`.

### PASTEAREA

Bí danh: `PAREA`. {{ui:Dán vùng đã sao chép}} trong menu {{ui:Thêm}}. Dán một vùng được sao chép bằng {{ui:Sao chép vùng}} trong MarkupCraft như một hình ảnh ở kích thước thật. Xem [Hình ảnh trong bản vẽ](topic:pictures).

- `Chỉ định góc dưới bên trái của vùng đã sao chép`
- `Đổi cỡ giấy theo (100 cho tờ 1:100; Điểm: hai điểm trên nó và khoảng cách thật của chúng) [Điểm (P)] <1>` (chỉ khi tờ không có tỷ lệ bản vẽ): một số, {{key:Enter}} cho cỡ giấy, hoặc `P`, rồi `Điểm thứ nhất trên vùng được dán`, `Điểm thứ hai trên vùng được dán` và khoảng cách thật của chúng.

### PASTEORIG

{{key:Mod+Shift+V}}, hoặc {{ui:Dán tại chỗ}} trong menu {{ui:Thêm}}. Dán tại tọa độ mà các đối tượng đã được sao chép từ đó. Không hỏi gì.

### DUPLICATE

Bí danh: `DUP`. {{key:Mod+D}}, hoặc {{ui:Nhân bản và di chuyển}} trong menu {{ui:Thêm}}. Một bản sao của các đối tượng di chuyển theo con trỏ từ vị trí hiện tại; {{key:Esc}} không để lại gì. Không dùng bộ nhớ tạm.

- `Chọn đối tượng để nhân bản` (bỏ qua khi đối tượng đã được chọn)
- `Chỉ định nơi bản sao đi (Esc không để lại gì)`: bấm, gõ một điểm, `@dx,dy` (từ nơi con trỏ đã ở), hoặc một khoảng cách về phía con trỏ.

### SELECT

Hỏi `Chọn đối tượng` (với mọi tùy chọn dưới đây) và để những gì bạn đã chọn được giữ chọn, cho lệnh kế tiếp hoặc cho `P` về sau.

### QSELECT

Bí danh: `QS`. Trên trình duyệt, hộp thoại {{ui:Chọn nhanh}} (xem [Chọn đối tượng](topic:select-objects#select-by-a-rule-quick-select)). Không có nó, dòng lệnh hỏi `Nhập loại đối tượng`, `Nhập thuộc tính`, `Nhập toán tử [=/<>/>/</*/Chọn tất cả] <=>` và `Nhập giá trị`. Các đối tượng khớp trở thành vùng chọn.

### SELECTSIMILAR

Bí danh: `SIM`. `Chọn đối tượng [Cài đặt (SE)]` (hoặc vùng chọn hiện tại): chọn mọi đối tượng cùng loại với cùng lớp và màu (và tên khối, mẫu tô bóng). `SE` hỏi `Bật hoặc tắt một thuộc tính [Lớp (LA)/Màu (CO)/Tên (NA)/Mẫu (PA)/Chiều cao (HE)]`, lặp lại cho đến {{key:Enter}}.

### FIND

Không có bí danh; hoặc {{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Tìm và thay thế}}. Trên trình duyệt, hộp thoại {{ui:Tìm và thay thế}} (xem [Thêm văn bản và nhãn](topic:text#find-and-replace-words)). Không có nó: `Nhập văn bản cần tìm`, rồi `Nhập văn bản thay thế (Enter: chọn những gì được tìm thấy)`. Tìm trong văn bản, giá trị thuộc tính và văn bản kích thước, trên thẻ đang mở hoặc trong vùng chọn.

### SELECTALL and DESELECT

`SELECTALL` (bí danh `AI_SELALL`, {{key:Mod+A}}) chọn mọi đối tượng bạn có thể sửa trên thẻ đang mở. `DESELECT` (bí danh `AI_DESELECT`, `SELECTNONE`; hoặc {{key:Esc}}) xóa vùng chọn.

## Kích thước

### DIMLINEAR

Bí danh: `DLI`, `DIMLIN`. Khoảng cách ngang hoặc dọc.

- `Chỉ định gốc đường gióng thứ nhất [Chọn đối tượng (S)]` (Enter hoặc `S`: `Chọn đối tượng để ghi kích thước`, rồi bấm một đoạn đường thẳng, cung, vòng tròn hoặc đa tuyến)
- `Chỉ định gốc đường gióng thứ hai`
- `Chỉ định vị trí đường kích thước [Văn bản (T)/Ngang (H)/Đứng (V)/Xoay (R)]`. `T` hỏi văn bản (`<>` là giá trị đo), `H` và `V` cố định hướng, `R` hỏi `Chỉ định góc của đường kích thước <0>`.

### DIMALIGNED

Bí danh: `DAL`, `DIMALI`. Khoảng cách thật giữa hai điểm.

- Các gốc như trong {{cmd:DIMLINEAR}}, rồi `Chỉ định vị trí đường kích thước [Văn bản]`.

### DIMANGULAR

Bí danh: `DAN`, `DIMANG`.

- `Chọn cung, vòng tròn hoặc đường thẳng, hoặc Enter cho đỉnh`
- Cung: góc của nó. Vòng tròn: `Chỉ định điểm cuối góc thứ hai`. Đường thẳng: `Chọn đường thẳng thứ hai`. Enter: `Chỉ định đỉnh góc`, `Chỉ định điểm cuối góc thứ nhất`, `Chỉ định điểm cuối góc thứ hai`.
- `Chỉ định vị trí đường kích thước [Văn bản]`: bấm vào bên trong góc để đo.

### DIMRADIUS and DIMDIAMETER

Bí danh: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Chọn cung hoặc vòng tròn`, rồi `Chỉ định vị trí đường kích thước [Văn bản]`.

### DIMCONTINUE

Bí danh: `DCO`, `DIMCONT`. Tiếp nối từ kích thước thẳng hoặc căn chỉnh gần nhất đã tạo (hoặc hỏi `Chọn kích thước thẳng hoặc căn chỉnh`).

- `Chỉ định gốc đường gióng thứ hai [Hoàn tác (U)]`, lặp lại đến Enter.

### DIMBASELINE

Bí danh: `DBA`, `DIMBASE`. Giống {{cmd:DIMCONTINUE}}, nhưng mọi kích thước bắt đầu từ gốc đầu tiên và được xếp chồng ra xa hơn.

### DIMORDINATE

Bí danh: `DOR`, `DIMORD`. `Chỉ định vị trí đặc trưng`, rồi `Chỉ định điểm cuối đường dẫn [Gốc X (XD)/Gốc Y (YD)/Văn bản (T)]`. Ghi khoảng cách của đặc trưng từ gốc UCS theo X hoặc Y, trên một đường dẫn: đường dẫn chủ yếu đi lên hoặc đi xuống thì đọc X, còn đường đi ngang thì đọc Y; `Gốc X` và `Gốc Y` cố định cái nào. Đặt gốc trước bằng {{cmd:UCS}} (không có nó thì là 0,0 của bản vẽ). Tay cầm di chuyển đặc trưng, gốc và điểm cuối đường dẫn, và giá trị theo sau. Được lưu như một kích thước tọa độ thật trong DWG và DXF. Từ chối một điểm cuối đường dẫn nằm ngay trên đặc trưng.

### DIMARC

Bí danh: `DAR`. `Chọn cung hoặc đoạn cung của đa tuyến`, rồi `Chỉ định vị trí kích thước chiều dài cung [Văn bản]`. Đo dọc theo cung (không phải dây cung) và ghi ký hiệu cung trước giá trị. Từ chối một vòng tròn đầy đủ, một đường thẳng hoặc một đoạn thẳng của đa tuyến. Một DWG giữ nó như kích thước chiều dài cung; một DXF giữ nó như kích thước góc với chiều dài làm văn bản, và CadCraft mở lại nó như kích thước chiều dài cung.

### DIMJOGGED

Bí danh: `DJO`, `JOG`. `Chọn cung hoặc vòng tròn`, `Chỉ định vị trí ghi đè tâm`, `Chỉ định vị trí chỗ gãy`. Một kích thước bán kính cho một đường cong mà tâm nằm xa hoặc ngoài tờ: đường kích thước bắt đầu từ điểm bạn đưa vào thay vì tâm, có một chỗ gãy trong đó, và vẫn ghi bán kính thật. Một DWG giữ nó như kích thước bán kính gãy; một DXF giữ nó như kích thước bán kính, và CadCraft mở lại nó ở dạng gãy.

### DIMJOGLINE

Bí danh: `DJL`. `Chọn kích thước để thêm chỗ gãy [Xóa (R)]`, rồi `Chỉ định vị trí chỗ gãy (hoặc nhấn Enter)`. Đặt một ký hiệu gãy trên đường kích thước của một kích thước thẳng hoặc căn chỉnh, để cho thấy khoảng cách không được vẽ theo tỷ lệ; giá trị không đổi. `Xóa` gỡ nó đi. Từ chối các loại kích thước khác.

### QDIM

Không có bí danh. `Chọn hình học để ghi kích thước`, rồi `Chỉ định vị trí đường kích thước [Liên tục/So le/Đường cơ sở/Tọa độ/Bán kính/Đường kính/điểm gốc (datumPoint)]`. Ghi kích thước cho nhiều đối tượng trong một bước, từ các đầu của đường thẳng và đoạn đa tuyến, tâm của vòng tròn và cung, điểm và tham chiếu khối. Một vị trí phía trên hoặc phía dưới các đối tượng đo ngang, một vị trí bên cạnh chúng đo lên. `Liên tục` nối các điểm, `Đường cơ sở` đo tất cả từ điểm đầu, `So le` lồng các cặp từ giữa ra ngoài, `Tọa độ` cho mỗi điểm khoảng cách của nó từ gốc (`datumPoint` chọn gốc mới), `Bán kính` và `Đường kính` ghi kích thước cho mọi vòng tròn và cung được chọn. Chế độ được ghi nhớ. Mọi thứ nó tạo là một bước hoàn tác. Nó nói rõ khi có ít hơn hai điểm, hoặc không có cung hay vòng tròn cho Bán kính và Đường kính.

### DIMBREAK

Bí danh: `DBREAK`. `Chọn kích thước để thêm hoặc bỏ chỗ ngắt`, rồi `Ngắt chỗ các đối tượng khác cắt qua [Tự động/Thủ công/Xóa] <Tự động>`. `Tự động` để lại một khoảng hở trong đường kích thước và đường gióng ở mọi chỗ có đối tượng khác cắt qua, và tính lại các khoảng hở khi những đối tượng đó hoặc kích thước di chuyển. `Thủ công` (một kích thước) hỏi hai điểm và để lại một khoảng hở giữa chúng. `Xóa` gỡ mọi khoảng hở. Khoảng hở bằng 1.5 lần chiều cao văn bản của kích thước.

### DIMSPACE

Không có bí danh. `Chọn kích thước gốc`, `Chọn kích thước cần dàn`, `Nhập giá trị khoảng cách hoặc Tự động <Tự động>`. Di chuyển các đường kích thước của kích thước thẳng và căn chỉnh song song (hoặc kích thước góc quanh cùng một đỉnh) để chúng cách đều nhau, tính từ kích thước gốc, mỗi cái ở phía nó đang nằm. `0` xếp chúng thẳng hàng với gốc; `Tự động` bằng hai lần chiều cao văn bản của kích thước gốc. Các kích thước không song song với gốc được giữ nguyên.

### DIMINSPECT

Không có bí danh. `Chọn kích thước`, `Hình dạng khung kiểm tra [Tròn/Góc/Không/xóa] <Tròn>`, `Nhập nhãn`, `Nhập tỷ lệ kiểm tra <100%>`. Vẽ một khung quanh giá trị với nhãn đứng trước và tỷ lệ kiểm tra đứng sau. `xóa` gỡ khung đi. Văn bản dung sai giữ với giá trị.

### DIMOVERRIDE

Bí danh: `DOV`, `DIMOVER`. `Nhập tên biến kích thước để ghi đè hoặc Xóa`, `Nhập giá trị mới cho …`, lặp lại đến Enter, rồi `Chọn kích thước`. Chỉ đổi các cài đặt đó trên các kích thước được chọn; kiểu kích thước không đổi. Nhận các biến là số hoặc công tắc (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Xóa` đặt các kích thước được chọn về kiểu của chúng. Từ chối tên không phải biến như vậy và giá trị nó không nhận được.

### DIMREASSOCIATE

Bí danh: `DRE`, `DIMREASSOC`. `Chọn kích thước`, rồi cho mỗi kích thước các gốc đường gióng của nó (`Chỉ định gốc đường gióng thứ nhất trên một đối tượng`: bắt vào đầu hoặc giữa một đường thẳng, góc đa tuyến, tâm; Enter giữ điểm đó tự do), hoặc với kích thước bán kính, đường kính, bán kính gãy hoặc chiều dài cung, `Chọn cung hoặc vòng tròn`. Kích thước khi đó được gắn vào các đối tượng đó: khi chúng di chuyển hoặc đổi kích thước, nó theo sau trong cùng một bước hoàn tác và đo lại. Di chuyển tay một điểm đã gắn, hoặc xóa đối tượng, sẽ kết thúc liên kết đó. Liên kết được lưu trong DWG và DXF 2000 như dữ liệu riêng của CadCraft; các chương trình khác thấy một kích thước thông thường.

### DIMDISASSOCIATE

Bí danh: `DDA`, `DIMDISASSOC`. `Chọn kích thước`. Giải phóng chúng khỏi các đối tượng mà chúng gắn vào; không có gì di chuyển.

### CENTERMARK

Bí danh: `CM`, `DIMCENTER`, `DCE`. `Chọn vòng tròn hoặc cung để thêm dấu tâm`, lặp lại đến Enter. Vẽ một chữ thập tại tâm và bốn đường tâm vươn ra ngay quá đường cong (kiểu đường CENTER), như các đường thẳng thường trên lớp hiện hành; cỡ lấy theo cỡ mũi tên và tỷ lệ tổng thể của cài đặt kích thước hiện tại, xoay theo UCS. Chúng không theo vòng tròn nếu nó di chuyển.

### CENTERLINE

Bí danh: `CL`. `Chọn đường thẳng thứ nhất`, `Chọn đường thẳng thứ hai`. Vẽ một đường thẳng nằm giữa hai đường thẳng (dọc theo đường phân giác khi chúng gặp nhau), dài hơn chúng một chút, theo kiểu đường CENTER. Đó là một đường thẳng thường: nó không theo hai đường thẳng.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Không có bí danh. Mỗi cái hỏi `Nhập giá trị mới cho … <hiện tại>` và đặt cỡ đó cho kích thước **mới**: tỷ lệ tổng thể, chiều cao văn bản, cỡ mũi tên, số chữ số thập phân (tối đa 8), khoảng hở quanh văn bản, phần kéo dài vượt quá đường kích thước, độ lệch khỏi gốc. Xem [Đặt cỡ kích thước](topic:dimension-settings).

### DIMLUNIT

Cài đặt kích thước: định dạng của kích thước mới mà thôi (1 khoa học, 2 thập phân, 3 kỹ thuật, 4 kiến trúc, 5 phân số).

### DIMSTYLE and -DIMSTYLE

Bí danh: `DST`, `DDIM`, `D`. Trình quản lý kiểu kích thước: {{ui:Đặt làm hiện tại}}, {{ui:Mới…}}, {{ui:Sửa…}}, {{ui:Đổi tên…}}, {{ui:Xóa}}, {{ui:So sánh…}}, {{ui:Áp dụng cho mục đã chọn}}. `-DIMSTYLE` trên dòng lệnh: `Kiểu kích thước [Khôi phục/Lưu/Xóa/Áp dụng/So sánh/Đổi tên/Liệt kê]`. Xem [Đặt cỡ kích thước](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Sửa kích thước [Về gốc (H)/Mới (N)/Xoay (R)/Nghiêng (O)] <Về gốc>`, rồi các kích thước (hoặc những cái đã được chọn). Mới hỏi văn bản (`<>` = số đo); Xoay hỏi một góc (0 đặt văn bản về lại); Nghiêng hỏi góc của các đường gióng so với trục X (Enter = không có; chỉ kích thước thẳng và căn chỉnh). `DIMTEDIT` (`DIMTED`): `Văn bản kích thước [Trái (L)/Phải (R)/Giữa (C)/Về gốc (H)/Góc (A)] <Giữa>`. Xem [Đặt cỡ kích thước](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Bí danh: `DTU`. `Đơn vị trong văn bản của kích thước mới [Đơn vị bản vẽ/mm/cm/m/km]`, hoặc khi đã chọn kích thước `Đơn vị trong văn bản của các kích thước đã chọn`. Ghi chiều dài đo theo đơn vị đó với đơn vị theo sau (DIMLFAC và hậu tố DIMPOST); `D` quay về đơn vị bản vẽ. Xem [Kích thước theo mm, cm, m hoặc km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Bí danh: `RC`. In `Chiều dài cung: … Loại: …`, rồi `Chỉ định điểm đầu tiên [Chiều dài cung/Đối tượng/Chữ nhật/Đa giác/Tự do]`. Chữ nhật hỏi `Chỉ định góc đối diện`; Đa giác `Chỉ định điểm kế tiếp (Enter đóng đám mây) [Hoàn tác (U)]`; Tự do theo con trỏ cho đến một lần bấm hoặc {{key:Enter}}; `O` hỏi `Chọn đối tượng` và `Đảo chiều? [Có (Y)/Không (N)] <N>` và biến đối tượng thành đám mây. `A` hỏi `Chỉ định chiều dài của mỗi cung`. `R`, `P` và `F` chọn loại cho đám mây kế tiếp. Kết quả là một đa tuyến đóng gồm các cung.

### MLEADER

Bí danh: `MLD`; hoặc {{ui:Đường dẫn}}. `Chỉ định vị trí đầu mũi tên đường dẫn [Cỡ đầu mũi tên/Khoảng cách hạ cánh/Khối]`, `Chỉ định vị trí hạ cánh của đường dẫn`, rồi văn bản trong hộp gõ tại chỗ (hoặc, không có nó, `Nhập văn bản (dòng trống sẽ kết thúc)`). `Khối` hỏi tên khối trước và đa đường dẫn hiển thị khối đó thay vì văn bản. Thêm đường dẫn: {{cmd:MLEADEREDIT}}. Được lưu như một đa đường dẫn thật trong DWG; DXF giữ các đường, đầu mũi tên và văn bản mà nó vẽ.

### MLEADEREDIT

Bí danh: `MLE`. `Chọn một đa đường dẫn`, rồi `Chỉ định vị trí đầu mũi tên đường dẫn [Xóa đường dẫn/Nội dung khối/Nội dung văn bản]`: mỗi điểm thêm một đường dẫn từ một đầu mũi tên mới đến cùng điểm hạ cánh, cho đến Enter. `Xóa đường dẫn` rồi gỡ đường dẫn bạn bấm (một đa đường dẫn giữ ít nhất một). `Nội dung khối` hỏi tên khối và hiện khối đó thay cho văn bản (các thuộc tính của nó sẽ được hỏi). `Nội dung văn bản` đặt lại văn bản. Mỗi đường dẫn có một tay cầm riêng. Một DWG giữ mọi đường dẫn và khối trong một đa đường dẫn.

### MLEADERALIGN

Bí danh: `MLA`. `Chọn các đa đường dẫn`, rồi `Chọn đa đường dẫn để căn theo [Phân bố/Khoảng cách/Dùng khoảng cách hiện tại]` và `Chỉ định hướng`. Di chuyển các điểm hạ cánh của các đa đường dẫn khác (và văn bản hoặc khối của chúng) lên đường thẳng qua điểm hạ cánh của cái đã chọn theo hướng đó; các đầu mũi tên giữ nguyên hướng chúng chỉ. `Khoảng cách` cũng đặt chúng cách nhau bằng nhau; `Phân bố` hỏi hai điểm và trải đều giữa chúng. Cần ít nhất hai đa đường dẫn.

### MLEADERCOLLECT

Bí danh: `MLC`. `Chọn các đa đường dẫn`, rồi `Chỉ định vị trí đa đường dẫn đã gom [Dọc/Ngang]` (Enter giữ vị trí của cái đầu tiên). Tạo một đa đường dẫn từ nhiều cái: nội dung khối đi vào một khối mới chứa mọi khối đặt cạnh nhau hoặc cái này dưới cái kia; nội dung văn bản thành một ghi chú với một dòng cho mỗi cái. Đa đường dẫn đầu tiên giữ các đường dẫn của nó; các cái khác bị xóa. Từ chối hỗn hợp nội dung văn bản và khối.

### TABLE

Bí danh: `TB`; hoặc {{ui:Chú thích}} › {{ui:Thêm}} › {{ui:Bảng}}. Tạo một bảng: một đối tượng mà bạn di chuyển, sao chép, xoay, đổi tỷ lệ và in như mọi đối tượng khác, với các ô của nó được giữ như dữ liệu.

- `Số hàng dữ liệu hoặc [Dán (P)/Tệp (F)/Kiểu (S)] <3>`, rồi `Số cột <3>`, `Chiều cao văn bản` và `Góc trên bên trái của bảng`. Bảng có một hàng tiêu đề (một ô gộp) và một hàng đầu bên trên các hàng dữ liệu.
- `P`: một bảng từ các ô bảng tính trên bộ nhớ tạm (văn bản có tab giữa các ô). Nhấn {{key:Ctrl+V}} khi có các ô như vậy trên bộ nhớ tạm cũng làm điều tương tự, trừ khi bản sao của CadCraft mới hơn (hoặc CadCraft không phân biệt được: khi đó nó dán bản sao của chính nó và nói như vậy). `F`: một bảng từ một tệp `.csv` hoặc tách bằng tab. Hàng đầu trở thành hàng tiêu đề; độ rộng cột vừa với văn bản.
- `S`: chọn kiểu bảng cho bảng này (xem {{cmd:TABLESTYLE}}).
- Nó từ chối số hàng hoặc cột không phải số nguyên, và nhiều ô hơn một bảng chứa được (2.000 hàng, 200 cột, 40.000 ô).
- {{cmd:EXPLODE}} biến một bảng thành đường thẳng và văn bản. Khi lưu DWG, một bảng là một đối tượng bảng thật mà các chương trình khác có thể sửa; khi lưu DXF nó là một khối vẽ nó, và CadCraft mở lại như một bảng.

### TABLEDIT

Bí danh: `TABLEEDIT`, `TABEDIT`; hoặc nhấp đúp một ô. Sửa một bảng.

- `Chọn một ô để gõ vào (Enter để kết thúc) hoặc [Hàng (R)/Cột (C)/Kích thước (S)/Gộp (M)/Bỏ gộp (U)/Căn (A)/Chiều cao (H)/Loại (K)/Xóa (CL)]`. Bấm một ô, hoặc khi đã chọn một bảng thì gõ tên của nó (`B3`: cột B, hàng 3; hàng tiêu đề là hàng 1). Trên trình duyệt, một hộp mở trên ô: {{key:Enter}} giữ văn bản, {{key:Tab}} sang ô kế tiếp, {{key:Alt+Enter}} bắt đầu dòng mới, {{key:Esc}} để ô như cũ.
- Một văn bản bắt đầu bằng `=` là công thức: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, với `+ - * / ^`, dấu ngoặc và các hàm như `sqrt` và `round`. Ô hiện giá trị; một công thức nêu chính ô của nó, một ô ngoài bảng hoặc một ô không có số sẽ hiện `####` và dòng lệnh nói lý do.
- `R` / `C`: `Chèn` hoặc `Xóa` hàng hoặc cột tại một ô được chọn (bao nhiêu, và phía trên hay dưới, trái hay phải). Công thức theo các ô mà chúng nêu tên.
- `S`: chiều rộng của cột và chiều cao của hàng. Một hàng không bao giờ thấp hơn văn bản của nó cần. Một bảng được chọn cũng có một tay cầm ở cạnh mỗi cột và mỗi hàng.
- `M`: gộp từ một ô được chọn đến một ô khác; `U`: bỏ gộp. `A`: căn (`TL` trên trái … `MC` giữa chính giữa … `BR` dưới phải). `H`: chiều cao văn bản riêng của ô này (0 = của kiểu). `K`: đặt hàng thành hàng tiêu đề, hàng đầu hoặc hàng dữ liệu. `CL`: làm trống ô.
- Nó từ chối một bảng trên lớp bị khóa, xóa mọi hàng hoặc cột, và một lần gộp sẽ cắt đôi một ô gộp khác.

### TABLESTYLE

Bí danh: `TS`. Liệt kê các kiểu bảng cùng số bảng dùng mỗi kiểu, rồi `Kiểu bảng: [Mới/Đặt/Sửa/Xóa/Áp dụng]`.

- Một kiểu giữ chiều cao văn bản và căn chỉnh của hàng tiêu đề, hàng đầu và hàng dữ liệu, lề ô, và các viền được vẽ (ngoài, giữa các hàng, giữa các cột).
- `N` tạo một kiểu từ kiểu hiện tại và đặt nó làm hiện tại; `S` đặt kiểu hiện tại (bảng mới nhận nó); `E` sửa một kiểu: các bảng dùng nó được vẽ lại; `A` gán kiểu hiện tại cho các bảng được chọn; `D` xóa một kiểu (không phải Chuẩn, không phải kiểu hiện tại; các bảng từng dùng nó giữ diện mạo của chúng).
- Kiểu được lưu cùng bản vẽ (DWG và DXF).

### TABLEEXPORT

Lưu những gì một bảng hiển thị thành tệp CSV (một công thức như giá trị của nó). `Chọn một bảng`, hoặc chọn một bảng trước. Các ô văn bản bắt đầu bằng `=`, `+`, `-` hoặc `@` được thêm một `'` ở đầu để bảng tính không chạy chúng.

### TABLEPASTE

Bí danh: `PASTETABLE`. Tạo một bảng từ các ô bảng tính trên bộ nhớ tạm, rồi hỏi góc trên bên trái của nó. Giống {{cmd:TABLE}} › `Dán`.

### DATALINK

Bí danh: `DL`. `Liên kết dữ liệu: [Mới/Liệt kê/Xóa] <Mới>`. `N` hỏi một tệp CSV, đặt một bảng của nó và ghi nhớ tên tệp; `L` liệt kê các liên kết cùng tệp, kích thước, lúc được đọc và số bảng dùng nó; `R` xóa một liên kết (các bảng của nó vẫn là bảng thường).

### DATALINKUPDATE

Bí danh: `DLU`. Đọc lại tệp của một liên kết dữ liệu và đổ lại các bảng được liên kết với nó (hàng và cột được thêm hoặc bỏ để khớp). Trình duyệt không thể tự mở tệp, nên nó yêu cầu bạn chọn lại tệp. Khi có nhiều liên kết, nó hỏi cái nào.

### FIELD

Đặt một trường vào bản vẽ: văn bản tự tính. `Trường: [Ngày/Tên tệp/Tờ/Thuộc tính/Đối tượng/Biểu thức/Mã] <Ngày>`:

- `D`: bây giờ, hoặc ngày được lưu, tạo hoặc in, và một định dạng (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: tên tệp, có hoặc không có phần mở rộng. `S`: số của tờ, tiêu đề của nó, hoặc có bao nhiêu tờ. `P`: một thuộc tính bản vẽ theo tên (xem {{cmd:DWGPROPS}}). `O`: chọn một đối tượng, rồi đọc gì (diện tích, chiều dài, chu vi, bán kính, đường kính, lớp, tên, x, y, văn bản, góc xoay, màu) và số chữ số thập phân. `E`: một công thức. `C`: một văn bản với các mã gõ như vậy, như `Tờ %<sheetnumber>% của %<sheetcount>%`.
- Rồi `Chọn một văn bản, một ô bảng hoặc một khối có thuộc tính để đặt vào (Enter: một văn bản mới)`: một văn bản được chọn sẽ có trường thêm vào sau nội dung của nó; một ô bảng cũng vậy; một tham chiếu khối hỏi thuộc tính nào; {{key:Enter}} hỏi chiều cao và một điểm cho văn bản mới.
- Trên màn hình, một trường có nền xám nhạt; bản in và PDF không bao giờ có. Gõ đè lên văn bản của một trường bằng tay sẽ kết thúc trường. Một trường không tính được sẽ hiện `####`.
- Trường của một đối tượng tìm đối tượng bằng khóa mà CadCraft giữ trên đối tượng (Cài đặt › CadCraft › Tệp thân thiện khi gộp); khi tắt khóa, nó từ chối.

### UPDATEFIELD

Bí danh: `UPDATEFIELDS`. `Chọn các đối tượng có trường cần cập nhật (Enter: mọi trường) hoặc [Cài đặt (S)]`. `S` đặt khi nào trường tự cập nhật: gõ các chữ cái của `O` mở, `S` lưu, `P` in, `R` tính lại (cả bốn để bắt đầu), hoặc `NONE`.

### DWGPROPS

Bí danh: `DRAWINGPROPS`. Liệt kê thuộc tính của bản vẽ, rồi `Đổi: [Tiêu đề/Chủ đề/Tác giả/Công ty/Từ khóa/Ghi chú/Tùy chỉnh/Xóa/Thoát]`. Sáu mục đầu là những mục bảng {{ui:Thông tin bản vẽ}} hiển thị; `U` thêm tên và giá trị của riêng bạn, `R` gỡ một cái. Các trường đọc chúng (`%<prop:title>%`, `%<prop:Client>%`) và theo ngay. Nó từ chối một tên tùy chỉnh trùng với tên có sẵn hoặc chứa `%`, `<`, `>`, dấu nháy hoặc dấu gạch chéo ngược.

## Tham số

Xem [Tạo ràng buộc cho bản vẽ](topic:constraints) và [Dùng tham số và phương trình](topic:parameters). Ràng buộc hoạt động trên thẻ {{ui:Mô hình}}.

### GEOMCONSTRAINT and the GC commands

Bí danh `GCON`: `Nhập loại ràng buộc [Ngang/Đứng/Vuông góc/Song song (PA)/Tiếp tuyến/Trùng nhau/Đồng tâm (CON)/Thẳng hàng (COL)/Đối xứng/Bằng nhau/Cố định] <Ngang>`, rồi các câu nhắc của lệnh đó.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Chọn một đối tượng [2 điểm] <2 điểm>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Chọn đối tượng thứ nhất`, `Chọn đối tượng thứ hai` (đối tượng thứ hai di chuyển).
- {{cmd:GCCOINCIDENT}}: `Chọn điểm thứ nhất [Đối tượng/Tự động ràng buộc] <Đối tượng>`, `Chọn điểm thứ hai [Đối tượng] <Đối tượng>`.
- {{cmd:GCFIX}}: `Chọn điểm [Đối tượng] <Đối tượng>`.
- {{cmd:GCSYMMETRIC}}: `Chọn đối tượng thứ nhất [2 điểm] <2 điểm>`, `Chọn đối tượng thứ hai`, `Chọn đường đối xứng`.

### DIMCONSTRAINT and the DC commands

Bí danh `DCON`: `Chọn kích thước liên kết để chuyển đổi [Thẳng (LI)/Ngang/Đứng/Căn chỉnh (AL)/Góc (AN)/Bán kính/Đường kính/Chuyển đổi] <Căn chỉnh>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Chỉ định điểm ràng buộc thứ nhất [Đối tượng] <Đối tượng>`, `Chỉ định điểm ràng buộc thứ hai`, `Chỉ định vị trí đường kích thước`, `Văn bản kích thước <d1=40>` (một số, một biểu thức, hoặc `tên=biểu thức`).
- {{cmd:DCALIGNED}}: như trên, với `[Đối tượng/Điểm & đường/2 đường]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Chọn cung hoặc vòng tròn`. {{cmd:DCANGULAR}}: `Chọn đường thẳng hoặc cung thứ nhất`, `Chọn đường thẳng thứ hai`.
- {{cmd:DCCONVERT}}: `Chọn kích thước để chuyển đổi`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Chọn đối tượng [Cài đặt]`. `S` hỏi dung sai khoảng cách và góc.
- {{cmd:DELCONSTRAINT}} (bí danh `DELCON`): `Chọn đối tượng`; ràng buộc của chúng sẽ mất.
- {{cmd:CONSTRAINTBAR}} (bí danh `CBAR`): `Chọn đối tượng [Hiện tất cả/Ẩn tất cả]`, rồi `[Hiện/Ẩn]`.
- {{cmd:DCDISPLAY}}: `Nhập một tùy chọn [Hiện/Ẩn]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (bí danh `PAR`, `PARAM`) mở bảng {{ui:Tham số}}. `-PARAMETERS`: `Nhập một tùy chọn [Mới/Sửa/Đổi tên/Xóa/?] <?>`.

### SWBOUT

Bí danh `SWMACRO`. Tải xuống một macro (.swb) để dựng lại mô hình thành một phác thảo có ràng buộc trong SolidWorks. Xem [Chuyển phác thảo đến và đi từ các công cụ mô hình chi tiết khác](topic:solidworks-sketches).

## Khối

### ANNOSCALE

Bí danh: `CANNOSCALE`. Cho biết tỷ lệ chú thích của bản vẽ và có bao nhiêu đối tượng chú thích nó chứa, rồi hỏi `Tỷ lệ chú thích mới`: gõ `1:50`, `1:100`, `2:1`, một số trần (`50` là 1:50) hoặc tên của một trong các tỷ lệ riêng của bản vẽ. Mọi văn bản và kích thước chú thích được đổi cỡ để in cùng kích thước ở tỷ lệ mới, trong một bước hoàn tác; các đối tượng không phải chú thích được để yên, và cũng vậy một đối tượng giữ danh sách tỷ lệ mà không có tỷ lệ mới ({{cmd:OBJECTSCALE}}). Xem [Đơn vị, khổ giấy và tỷ lệ](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Bí danh: `OBJSCALE`. `Chọn đối tượng chú thích`, rồi `Tỷ lệ chú thích của các đối tượng được chọn [Thêm/Xóa/Tỷ lệ hiện tại/Liệt kê/Thoát] <Thêm>`. Một văn bản hoặc kích thước chú thích giữ một danh sách các tỷ lệ chú thích. `Thêm` và `Xóa` hỏi một tỷ lệ (`1:50`, `2:1`, một số trần, hoặc tên của một tỷ lệ riêng của bản vẽ); `Tỷ lệ hiện tại` thêm tỷ lệ chú thích của bản vẽ; `Liệt kê` in các tỷ lệ của mỗi đối tượng. Một khung nhìn có tỷ lệ nằm trong danh sách của đối tượng sẽ hiển thị đối tượng ở cỡ in chiều cao trên giấy của nó ở tỷ lệ đó, trên màn hình và trong bản in. Tỷ lệ cuối cùng không thể xóa. Các đối tượng không phải chú thích bị bỏ qua: bật Chú thích trong Thuộc tính trước. Các danh sách được lưu trong DWG và DXF như dữ liệu riêng của CadCraft. Xem [Đơn vị, khổ giấy và tỷ lệ](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Bí danh: `ANNOALL`. `Hiện đối tượng chú thích ở mọi tỷ lệ [Bật/Tắt]`. Bật (khi bản vẽ bắt đầu): một đối tượng chú thích cũng hiện trong một khung nhìn, hoặc trong mô hình, có tỷ lệ không nằm trong danh sách của nó, ở cỡ mà nó có. Tắt: nó không hiện ở đó, và không thể được chọn trong mô hình. Công tắc là một bước hoàn tác; nó không được giữ trong tệp.

### SCALELISTEDIT

Bí danh: `SCALELIST`. `Danh sách tỷ lệ [Thêm/Sửa/Xóa/Liệt kê/Đặt lại]` cho đến {{key:Enter}}. Thêm: `Tên tỷ lệ`, `Đơn vị trên giấy`, `Đơn vị bản vẽ`. Sửa và Xóa hỏi tên của tỷ lệ. Các tỷ lệ riêng của bản vẽ tham gia vào danh sách tỷ lệ khung nhìn và in, và được lưu cùng bản vẽ. Xem [Đơn vị, khổ giấy và tỷ lệ](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `Điểm đầu tiên của spline [Phương pháp/Đối tượng] (Điểm khớp)`. Khớp: các điểm đường cong đi qua; `Đóng`, `Hoàn tác`, rồi `Tiếp tuyến đầu` và `Tiếp tuyến cuối` (một điểm, hoặc {{key:Enter}}). Phương pháp › Đỉnh điều khiển hỏi bậc (1 đến 5) và vẽ từ một đa giác điều khiển. Đối tượng biến đa tuyến thành spline đi qua các đỉnh của chúng. `SPLINEDIT` (`SPE`): `[Dữ liệu khớp/Sửa đỉnh/chuyển thành Đa tuyến/Mở hoặc Đóng/Đảo ngược/Hoàn tác/Thoát]`; Dữ liệu khớp `[Thêm/Xóa/Di chuyển/Dọn/Tiếp tuyến/Thoát]`; Sửa đỉnh `[Thêm điểm điều khiển/Di chuyển/Trọng số/Thoát]`. `PEDIT` (`PE`): `[Đóng/Mở/Nối/Độ rộng/Khớp/Spline/Gỡ cong/Tạo kiểu đường/Đảo ngược/Hoàn tác/Thoát]`, `M` cho nhiều đối tượng; đường thẳng, cung và spline được đề nghị thành đa tuyến trước. Xem [Spline và đa tuyến](topic:splines).

### BLOCK

Bí danh: `B`, `BMAKE`.

- `Nhập tên khối`. Nếu nó đã có: `Khối "…" đã tồn tại. Định nghĩa lại? [Có (Y)/Không (N)] <N>`.
- `Chỉ định điểm gốc chèn`
- `Chọn đối tượng`. Chúng được thay bằng một tham chiếu đến khối mới.

### WBLOCK

Bí danh: `W`, `-WBLOCK`. Ghi một khối, một số đối tượng hoặc toàn bộ bản vẽ thành một tệp DWG hoặc DXF mới. `Nguồn WBLOCK [Khối/Toàn bộ bản vẽ/Đối tượng] <Đối tượng>`:

- **Đối tượng**: `Chỉ định điểm gốc chèn` (nó trở thành gốc của bản vẽ mới), `Chọn đối tượng`, rồi `Định dạng tệp [DWG/DXF/R12 DXF]` và `Tên tệp cho bản vẽ mới`, rồi `Xử lý các đối tượng [Giữ/Chuyển thành khối/Xóa]`. Chuyển thành khối thay chúng bằng một tham chiếu đến một khối có tên của tệp; Xóa thì gỡ chúng.
- **Khối**: `Khối cần ghi`. Các đối tượng riêng của khối, với điểm gốc của nó làm gốc, kể cả các khối lồng nhau.
- **Toàn bộ bản vẽ**: mọi đối tượng trong không gian mô hình. Các tờ không được ghi; dùng {{cmd:SAVEAS}} để có một bản sao giữ chúng.

Tệp mới chỉ chứa các lớp, kiểu đường, văn bản và kiểu kích thước, và các khối mà các đối tượng của nó dùng, cùng đơn vị của bản vẽ. Phiên bản của DWG là phiên bản mà {{cmd:SAVEAS}} dùng lần cuối. Trên trình duyệt tệp được tải xuống; trong Studio, hộp thoại lưu sẽ mở.

### ATTDEF

Bí danh: `ATT`, `DDATTDEF`, `-ATTDEF`; hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Định nghĩa thuộc tính}}. In các chế độ, rồi `Nhập một tùy chọn để đổi [Ẩn/Hằng số/Đặt trước] (Enter khi xong)`, `Nhập tên thẻ thuộc tính`, `Nhập câu nhắc thuộc tính`, `Nhập giá trị thuộc tính mặc định` (`Nhập giá trị thuộc tính` khi là hằng số), `Chỉ định điểm bắt đầu của văn bản`, `Chỉ định chiều cao văn bản`, `Chỉ định góc xoay của văn bản`. {{cmd:BLOCK}} đưa các định nghĩa thuộc tính vào khối.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, hoặc nhấp đúp một tham chiếu có thuộc tính; {{ui:Khối}} › {{ui:Thêm}} › {{ui:Sửa thuộc tính}}): `Chọn một tham chiếu khối có thuộc tính`, rồi hộp thoại {{ui:Sửa thuộc tính}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): cùng tham chiếu, rồi `<câu nhắc> (<TAG>) <giá trị>` cho mỗi thuộc tính; {{key:Enter}} giữ một giá trị. Xem [Thuộc tính](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Cập nhật thuộc tính của tham chiếu của khối nào [Tên/Chọn/Tất cả] <Chọn>`. Giá trị được giữ; các thuộc tính mới nhận mặc định của chúng, các cái đã xóa biến mất, vị trí được đặt lại.

### BATTMAN

{{ui:Khối}} › {{ui:Thêm}} › {{ui:Trình quản lý thuộc tính}}. Hộp thoại: khối, thuộc tính (thẻ, câu nhắc, mặc định, chế độ, thứ tự), {{ui:Cập nhật các tham chiếu (giữ giá trị)}}, {{ui:Áp dụng}}.

### REFEDIT and REFCLOSE

{{ui:Khối}} › {{ui:Thêm}} › {{ui:Sửa tại chỗ}}. `REFEDIT`: `Chọn tham chiếu khối để sửa tại chỗ` (hoặc vùng chọn). `REFCLOSE`: `Lưu các thay đổi cho "…" [Lưu/Bỏ] <Lưu>`; {{ui:Lưu khối}} và {{ui:Bỏ}} trên thanh làm điều tương tự. Toàn bộ việc sửa là một bước hoàn tác. Xem [Thuộc tính](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT and BCLOSE

`BE`; hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Sửa khối}}. `Nhập tên khối để sửa <khối của tham chiếu được chọn>` mở trình sửa khối. `BCLOSE` hỏi `Đóng trình sửa khối trên "…" [Lưu/Bỏ] <Lưu>`; {{ui:Lưu khối}} và {{ui:Hủy thay đổi}} trên biểu ngữ làm điều tương tự. Mọi việc làm trong trình sửa là một bước hoàn tác.

### VIEWBASE

Bí danh: `FLATSHOT`. Một khung nhìn 2D phẳng của các khối đặc trên thẻ 3D: `Khung nhìn [Trước/Trên/Phải/Trái/Sau/Dưới/Đẳng cự]`, `Đường khuất [Hiện/Ẩn]`, một tỷ lệ (`1:20`, `2:1`; {{key:Enter}} lấy tỷ lệ vừa tờ), rồi tâm của khung nhìn. Một tham chiếu khối; các cạnh nhìn thấy nằm trên VIEW-VISIBLE, các cạnh khuất nét đứt trên VIEW-HIDDEN. Xem [Khung nhìn phẳng trên tờ](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Bí danh: `-PUBLISH`; hoặc {{ui:Mọi tờ trong một PDF}} trong hộp thoại {{ui:In ra PDF}}. `Tờ cần in [Tất cả/Một số]`: {{key:Enter}} in mọi tờ, `S` hỏi tên cách nhau bằng dấu phẩy. Một PDF, một trang và một dấu trang cho mỗi tờ. Xem [Mọi tờ trong một PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Bí danh: `SSM`, `SHEETSETMANAGER`. Đưa bạn đến mục {{ui:Bộ tờ}} của bảng bên trái: các tờ từ nhiều bản vẽ, được đánh số và đặt tiêu đề, khung tên của chúng được điền từ bộ tờ, xuất bản thành một PDF. Xem [Bộ tờ](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): chọn một DWG hoặc DXF, rồi điểm chèn của nó. {{cmd:XREF}} (`XR`, `-XREF`): `Bản vẽ liên kết [?/Gắn/Tải lại/Buộc/Tách] (Enter: ?)`; khi có nhiều liên kết, chọn một tham chiếu của nó hoặc gõ `N` và tên của nó. Xem [Bản vẽ liên kết](topic:files#linked-drawings-external-references).

### COUNT

Bí danh: `BCOUNT`; hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Đếm khối}}. `Chọn một tham chiếu khối để đếm, hoặc [Tất cả/Xuất] (Enter: Tất cả)`: chọn một cái sẽ chọn và đếm mọi tham chiếu của khối đó trong không gian này; {{key:Enter}} hoặc `A` liệt kê tất cả; `E` rồi `C` (đếm) hoặc `A` (thuộc tính) tải xuống một CSV. Xem [Đếm khối và xuất bảng thống kê](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Bí danh: `I`, `DDINSERT`.

- `Nhập tên khối hoặc [Tệp/Thư viện] <khối cuối>` (không phân biệt chữ hoa thường). `F` hỏi một DWG hoặc DXF, rồi toàn bộ bản vẽ hoặc một trong các khối của nó; một tên đã dùng sẽ hỏi {{ui:Giữ cái hiện có}} hoặc {{ui:Đổi tên}}. `L` mở bảng thư viện.
- `Chỉ định điểm chèn [Tỷ lệ (S)/Xoay (R)]`. `S` hỏi `Chỉ định hệ số tỷ lệ`, `R` hỏi `Chỉ định góc xoay`; cả hai được ghi nhớ.
- Khi khối đã đứng cạnh các đối tượng lặp lại ở nơi khác mà không có nó, một dòng cho biết có bao nhiêu vị trí được gợi ý và câu nhắc có thêm `gợi Ý (G)`: `G` hiện chúng; bấm gần một vị trí để đặt khối tại đó, `A` cho tất cả, {{key:Enter}} để quay lại. Chúng nhận góc xoay của các đối tượng lân cận và giá trị thuộc tính mặc định. Bản vẽ có hơn 20.000 đối tượng trong không gian mở sẽ không được tìm kiếm.
- Rồi `Nhập <câu nhắc> (<TAG>) <mặc định>` cho mỗi thuộc tính mà khối hỏi. Xem [Thuộc tính khối](topic:attributes).

### LIBRARY

Bí danh: `LIB`. Mở bảng thư viện: đặt mục, kiểm tra cập nhật, ghi công thư viện. Không hỏi gì. Xem [Chèn từ tệp hoặc thư viện](topic:insert-from-file-and-library).

### STEELMEMBER

Bí danh: `SMEMBER`; hoặc {{ui:Thanh 3D}} trên thẻ {{ui:Chuẩn}} của thư viện. `Kích thước tiết diện <W12x26>` (như thẻ liệt kê), rồi `Điểm đầu [Cột (C)]` và `Điểm cuối`: một cấu kiện đặc trên thẻ 3D giữa hai điểm, đặt trên mặt đất. `C` hỏi điểm gốc của cột và chiều cao của nó. Một bước hoàn tác. Xem [Đặt thép hình và chi tiết tiêu chuẩn](topic:steel-and-standard-parts).

### PARTSLIST

Bí danh: `PLIST`. `Góc trên bên trái của danh sách chi tiết`, rồi `Chiều cao văn bản <2.5>`: vẽ một bảng mọi chi tiết tiêu chuẩn và thép hình đã đặt từ thư viện (số mục, số lượng, chi tiết, tiêu chuẩn, kích thước, chiều dài, vật liệu, khối lượng). Một bước hoàn tác. Xem [Đặt thép hình và chi tiết tiêu chuẩn](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Bí danh: `PU`. Xóa các định nghĩa khối mà không gì dùng. Không hỏi gì.

### DELBLOCKS

Hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Xóa khối}}. `Chọn khối cần xóa [Tên/Thoát]`: chọn một tham chiếu khối, hoặc `N` để có danh sách khối với bộ lọc (chọn nhiều), hoặc `X` / {{key:Enter}} để kết thúc. Mọi tham chiếu sẽ bị xóa — trong mô hình, trên mọi tờ và bên trong các khối khác — rồi đến định nghĩa, và dòng lệnh nói những gì đã xóa và những gì không được. Khối không tên và bản vẽ liên kết không được đề nghị. Câu nhắc quay lại cho khối kế tiếp; toàn bộ lệnh là một bước hoàn tác.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} dán những gì bạn đã sao chép ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) thành một khối: chọn điểm chèn và một tham chiếu đến một khối mới được đặt ở đó, được chọn. Khối có tên riêng (`A$C` và một số); {{cmd:RENAME}} đặt tên của bạn. Một bước hoàn tác xóa tham chiếu và khối.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} hỏi khối cần thay và khối đặt vào chỗ đó (`?` liệt kê các khối), rồi đổi mọi tham chiếu trong mô hình, trên mọi tờ và bên trong các khối khác. Mỗi tham chiếu giữ vị trí, tỷ lệ, góc xoay, lớp và giá trị của các thuộc tính mà cả hai khối đều có; thuộc tính chỉ có ở khối mới bắt đầu từ mặc định, và nó cho bạn biết những giá trị nào đã bị bỏ. Khi không còn gì dùng khối cũ, nó đề nghị xóa khối đó. Nó từ chối bản vẽ liên kết và một khối thay thế sẽ đặt khối vào chính nó. Một bước hoàn tác.

### MINSERT

{{cmd:MINSERT}} đặt một khối theo hàng và cột: tên khối, điểm chèn, tỷ lệ, góc xoay, số hàng và cột, và khoảng cách giữa chúng. Cả tập hợp xoay theo góc xoay. Mỗi cái là một tham chiếu riêng (tối đa 10.000), nên bất kỳ cái nào cũng có thể di chuyển hoặc xóa sau đó.

### BLOCKSPALETTE

Bí danh: `BLOCKSPAL`; hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Bảng khối}}. Hiện bảng {{ui:Khối}} với con trỏ trong ô lọc. Mỗi khối có một hình nhỏ; các khối được đặt gần đây nhất đi trước. Hai nút cạnh ô lọc chuyển giữa danh sách và lưới hình. Bấm một hình (hoặc {{ui:Chèn}}) để đặt khối bằng {{cmd:INSERT}}, hoặc kéo nó vào bản vẽ để đặt tại nơi bạn thả.

{{ui:Thư viện}}, dưới danh sách: {{ui:Thêm bản vẽ}} lấy một tệp DWG hoặc DXF của riêng bạn và liệt kê các khối của nó kèm hình, và toàn bộ bản vẽ thành một khối. Đặt một khối sẽ sao chép định nghĩa của nó (và các khối lồng trong nó, và lớp của chúng) vào bản vẽ này, như tùy chọn `Tệp` của {{cmd:INSERT}} làm; một khối đã có ở đây với cùng định nghĩa được dùng mà không hỏi, còn một khối cùng tên nhưng khác định nghĩa sẽ hỏi {{ui:Giữ cái hiện có}} hoặc {{ui:Đổi tên}}. Trong trình duyệt, tệp được giữ cho đến khi trang đóng. Trong CadCraft Studio, {{ui:Thêm thư mục}} liệt kê các bản vẽ trong một thư mục, mỗi cái được mở khi bạn bấm vào, và tệp và thư mục được ghi nhớ. Nút x nhỏ gỡ một thư viện khỏi danh sách; tệp không bị đụng đến. {{ui:Thư viện}} dùng chung là một thứ khác: xem [Chèn từ tệp hoặc thư viện](topic:insert-from-file-and-library).

### BCONVERT

Hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Chuyển bản lặp thành khối}}. Tìm hình học lặp lại và biến mọi bản sao thành một tham chiếu đến một khối.

- `Chọn các đối tượng lặp lại, hoặc [Khối]`: các đối tượng của một bản sao. `B` đặt tên một khối có sẵn để tìm các bản sao rời của các đối tượng của nó.
- `Một bản sao có thể là: đối xứng = Không, co giãn = Không; lớp, màu, kiểu đường và độ dày nét = Khớp … [Đối xứng/Co giãn/Thuộc tính]`: `M`, `S` và `P` đổi những gì được tính là bản sao; {{key:Enter}} tìm kiếm. Các cài đặt được ghi nhớ.
- `Tên cho khối mới <Khối1>`, rồi `Chỉ định điểm gốc của khối` ({{key:Enter}} lấy góc dưới bên trái của vùng chọn).
- Nó cho biết có bao nhiêu nhóm đối tượng khác có cùng hình học, làm nổi bật mọi thứ nó sẽ thay, và hỏi `Có/Không`.

Một bản sao là các đối tượng giống nhau được dời và xoay theo góc bất kỳ (và đối xứng hoặc co giãn theo một hệ số khi các tùy chọn đó bật): mỗi đối tượng phải có bản đối ứng của nó, trong phạm vi một phần triệu kích thước của vùng chọn. Mỗi tham chiếu có góc xoay và tỷ lệ riêng (một bản đối xứng có tỷ lệ Y âm), và lớp mà các đối tượng của nó cùng dùng. Các đối tượng trên lớp bị khóa được để yên và được đếm. Nó tìm trong không gian mở (mô hình hoặc tờ đang mở). Một tìm kiếm rất lớn sẽ dừng ở một giới hạn công việc và nói như vậy. Một bước hoàn tác.

### BSEARCH

Hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Tìm khối}}. `Tìm khối theo [Tên/Thuộc tính/Hình học] <Tên>`:

- `N`: một phần của tên khối, hoặc một mẫu với `*` và `?`. Liệt kê từng khối cùng các tham chiếu của nó ở đây và trong toàn bản vẽ.
- `A`: một giá trị thuộc tính, hoặc `TAG=giá trị`. Liệt kê các khối có tham chiếu giữ nó, cùng các giá trị tìm được. Thuộc tính hằng số cũng được tính.
- `G`: chọn các đối tượng, hoặc một tham chiếu khối, và các khối có hình dạng giống ít nhất 85% được liệt kê, tốt nhất trước. Kích thước, góc xoay và đối xứng không tính. Phép đo so sánh các khoảng cách giữa các điểm rải dọc theo đường viền, nên nó tìm các hình gần giống; dùng {{cmd:BCONVERT}} để tìm các bản sao chính xác.

Các tham chiếu tìm được trong không gian mở được chọn, sẵn cho lệnh kế tiếp.

### BREPLACE

Hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Thay khối}}. `Thay [Đã chọn/Tất cả]`: `S` thay các tham chiếu khối bạn chọn bằng khối bạn đặt tên; `A` hỏi một khối và khối thay thế của nó, và đổi mọi tham chiếu, như {{cmd:BLOCKREPLACE}} làm (cùng mã). Một tham chiếu giữ vị trí, tỷ lệ, góc xoay, lớp và giá trị của các thuộc tính mà cả hai khối đều có; các giá trị mà khối mới không có chỗ sẽ bị bỏ và được nêu tên. `?` liệt kê các khối. Một bước hoàn tác.

### DATAEXTRACTION

Bí danh: `EATTEXT`, `DX`; hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Trích xuất dữ liệu}}. Liệt kê các khối, thuộc tính và thuộc tính đối tượng của chúng thành một bảng hoặc một tệp CSV.

- Làm việc trên vùng chọn, hoặc hỏi `Chọn đối tượng (Enter: mọi thứ trong không gian này)`.
- `Liệt kê: [Khối/Đối tượng/Tất cả]` khi vùng chọn có cả hai. Khối không tên, bảng và bảng danh mục vật tư không bao giờ được liệt kê.
- Nó in các cột để chọn (tên, loại, lớp, X, Y, góc xoay, tỷ lệ, chiều dài, diện tích, màu, kiểu đường, không gian, và một cột cho mỗi thẻ thuộc tính), rồi `Các cột, theo tên hoặc số, cách nhau bằng dấu phẩy`. {{key:Enter}} lấy các cột có dấu sao: tên và mọi thuộc tính cho khối; loại, lớp và chiều dài cho đối tượng.
- `Gộp các dòng giống nhau thành một và ghi số lượng? [Có/Không] <Có>`, rồi `Đặt danh sách vào: [Bảng/Csv] <Bảng>`. Một bảng là một bảng thông thường ({{cmd:TABLEDIT}} sửa nó) và không trực tiếp: chạy lại lệnh khi bản vẽ thay đổi.
- Nó từ chối một cột không có trong danh sách. Một bảng chứa 1.999 hàng dữ liệu; một tệp CSV nhận tất cả.

### COUNTTABLE

Đếm các tham chiếu khối của vùng chọn (hoặc của không gian đang mở) và đặt các số đếm vào một bảng (`Khối`, `Số lượng`) hoặc một tệp CSV. Để có một số đếm tự theo bản vẽ, xem {{cmd:BOMTABLE}}.

## Tờ và in

### LAYOUT

Bí danh: `LO`, `NEWLAYOUT`; hoặc nút {{ui:+}} dưới bản vẽ. Một tờ mới có khung, khung tên và một khung nhìn, trên ISO A3 (hoặc Tabloid cho bản vẽ đơn vị inch hoặc feet). Không hỏi gì.

### MVIEW

Bí danh: `MV`. Chỉ trên tờ ({{cmd:VPORTS}} trên tờ cũng làm điều tương tự).

- `Chỉ định góc của khung nhìn [Đa giác (P)/Đối tượng (O)]`, `Chỉ định góc đối diện`. Khung nhìn hiển thị toàn bộ mô hình ở một tỷ lệ chuẩn.
- `P` (Đa giác): bấm các góc của đường viền (`Hoàn tác`, `Đóng`), {{key:Enter}} khi xong. Nó từ chối khi có ít hơn ba góc.
- `O` (Đối tượng): `Chọn một đối tượng đóng làm đường viền của khung nhìn`: một đa tuyến đóng, một vòng tròn hoặc một elip trên tờ. Khung nhìn nhận hình dạng của nó (đường cong thành các đoạn thẳng ngắn); đối tượng giữ nguyên. Nó từ chối đối tượng không đóng.

### VPCLIP

Cắt một khung nhìn đã có trên tờ. `Chọn khung nhìn để cắt` (hoặc chọn trước), rồi `Chọn đối tượng để cắt theo [Đa giác/Xóa]`:

- Bấm một đa tuyến đóng, vòng tròn hoặc elip, hoặc {{key:Enter}} (hoặc `P`) để bấm các góc của một đa giác.
- `D` (Xóa, có khi khung nhìn đã được cắt) biến nó lại thành hình chữ nhật: hộp bao quanh đường viền mà nó từng có.
- Những gì khung nhìn hiển thị không dịch chuyển trên giấy, và tỷ lệ của nó giữ nguyên. Mô hình chỉ được vẽ và in bên trong đường viền, và khung theo đường viền đó. Một bước hoàn tác.
- Một khung nhìn đã cắt có một tay cầm ở mỗi góc của đường viền, ngoài tâm và bốn góc của hộp (kéo một góc hộp sẽ kéo giãn đường viền theo). Thuộc tính hiện Đường viền: Hình chữ nhật, hoặc Đã cắt cùng số góc.
- Tệp DWG và DXF 2000 giữ đường viền cho CadCraft. Các chương trình khác mở khung nhìn như hình chữ nhật bao quanh nó; DXF R12 chỉ giữ hình chữ nhật.
- Trên thẻ mô hình, nó nói rằng khung nhìn nằm trên tờ.

### VPORTS

Bí danh: `VIEWPORTS`. {{cmd:SPLIT}} giống hệt từ một tờ, và {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Chia cạnh nhau}}, {{ui:Chia xếp chồng}}, {{ui:Bốn khung}}, {{ui:Một khung}} chạy nó. Trên mô hình: `Nhập số khung [Đơn/2/3/4] <3>`; `2` hỏi `[Ngang/Dọc] <Dọc>` (Dọc = cạnh nhau), `3` hỏi `[Trái/Phải] <Phải>` (khung lớn đặt ở đâu). Mỗi khung giữ khung nhìn và không gian riêng; một cú bấm làm khung đó thành khung đang hoạt động. Trên tờ, nó là {{cmd:MVIEW}}. Xem [Chia màn hình](topic:split-screen).

### VPVIEW

Không có bí danh. Chỉ trên tờ.

- `Chọn khung nhìn` (bỏ qua nếu đã chọn một khung), rồi trên mô hình: `Chỉ định góc thứ nhất của cửa sổ cần hiển thị`, `Chỉ định góc đối diện`.

### UCS

Không có bí danh. Một hệ tọa độ riêng của bạn; không phải một chỉnh sửa. `Chỉ định gốc của UCS [Đặt tên (NA)/Đối tượng (OB)/Trước đó (P)/World (W)/Z/3 điểm (3)] <World>`: một điểm là gốc mới, rồi `Chỉ định điểm trên trục X (Enter giữ góc)`. `Z`: `Chỉ định góc xoay quanh trục Z <90>`. `3`: gốc, một điểm trên trục X dương, một điểm ở phía Y dương. `OB`: `Chọn đối tượng để căn UCS`. `NA`: `[Khôi phục/Lưu/Xóa/?]` và một tên. Khung nhìn xoay để trục X mới nằm ngang. Xem [Xoay khung nhìn và dùng tọa độ riêng](topic:ucs-and-turned-view).

### PLAN

Không có bí danh. `Nhập một tùy chọn [UCS hiện tại/Ucs/World] <UCS hiện tại>`: xoay khung nhìn của khung đang hoạt động để trục X của UCS (hoặc của thế giới) nằm ngang. Không có gì trong bản vẽ di chuyển.

### TURNLEFT, TURNRIGHT, TURNWORLD

Không có bí danh; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Xoay khung nhìn 90° sang trái}}, {{ui:Xoay khung nhìn 90° sang phải}}, {{ui:Về thế giới}}. Giống `UCS Z -90`, `UCS Z 90` và `UCS W`, với khung nhìn theo.

### VPLAYER

Không có bí danh. Trên tờ, hoặc bên trong một khung nhìn. `Nhập một tùy chọn [?/Đóng băng/Mở băng/Đặt lại/Vpvisdflt]`: `F`, `T`, `R` hỏi tên lớp (cách nhau bằng dấu phẩy, với ký tự đại diện `*` và `?`), rồi các khung nhìn `[Tất cả/Chọn/Hiện tại] <Hiện tại>`; Đặt lại đưa mỗi lớp về mặc định "đóng băng trong khung mới"; `V` đặt mặc định đó (`[Đóng băng/Mở băng]`), mà {{cmd:MVIEW}} dùng. `?` liệt kê các lớp đang đóng băng trong khung hiện tại. Cột khung nhìn của bảng Lớp làm điều tương tự cho một khung. Xem [Đóng băng một lớp trong một khung nhìn](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Bí danh: `MS`; hoặc nhấp đúp bên trong một khung nhìn. Chỉ trên tờ. Làm việc trên mô hình qua một khung nhìn: khung được chọn, khung duy nhất trên tờ, hoặc `Bấm bên trong khung nhìn để làm việc`. Kéo và thu phóng bên trong thay đổi khung nhìn của khung (một khung khóa hiển thị giữ nguyên và tờ di chuyển thay); khung nhìn mới được ghi như một bước hoàn tác. Xem [Làm việc trên mô hình qua khung nhìn](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Bí danh: `PS`; hoặc nhấp đúp bên ngoài khung nhìn, hoặc bấm một thẻ dưới bản vẽ. Trở về tờ.

### PLOT

Bí danh: `PRINT`, `PUBLISH`, `EXPORTPDF`; hoặc {{key:Mod+P}}. Mở hộp thoại {{ui:In ra PDF}}. Xem [In ra PDF](topic:plot-pdf).

### PLOTSTYLES

Bí danh: `STYLESMANAGER`, `PSTABLES`; hoặc {{ui:Sửa bảng…}} trong hộp thoại {{ui:In ra PDF}}. Mở {{ui:Bảng kiểu nét in}}: mỗi màu in thành gì (màu, xám, mực, độ dày nét), được giữ cùng bản vẽ. Xem [Bảng kiểu nét in](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} di chuyển đối tượng giữa một tờ và mô hình qua một khung nhìn, được đổi tỷ lệ và xoay để trông giống nhau từ phía bên kia. Trên tờ, chọn đối tượng và chúng đi đến mô hình (chọn khung khi tờ có nhiều hơn một). Khi bạn làm việc trên mô hình qua một khung nhìn ({{cmd:MSPACE}}), các đối tượng được chọn đến tờ. Nó cho biết chúng lớn hơn hoặc nhỏ hơn bao nhiêu lần. Khung nhìn ở yên trên tờ của chúng. Một bước hoàn tác.

### ISODRAFT

{{cmd:ISODRAFT}} bật hoặc tắt vẽ đẳng cự `ON` hoặc `OFF`, hoặc chuyển thẳng sang mặt phẳng `Left` (Trái), `Top` (Trên) hoặc `Right` (Phải). Khi đang bật: Ortho ({{key:F8}}) giữ các đường theo hai trục của mặt phẳng (trái: 90° và 150°; trên: 30° và 150°; phải: 30° và 90°), truy vết cực ({{key:F10}}) theo cùng các trục, bắt lưới ({{key:F9}}) dùng lưới đẳng cự, và lưới ({{key:F7}}) được vẽ với các đường ở 30°, 90° và 150°. {{cmd:ELLIPSE}} có thêm `Isocircle`: cho một tâm và một bán kính (hoặc `Đường kính`) và nó vẽ elip mà một vòng tròn hiện ra trên mặt phẳng hiện tại. Bản vẽ vẫn phẳng: đây là các công cụ hỗ trợ vẽ hình phối cảnh, không phải mô hình 3D. Cài đặt này dành cho phiên làm việc này và không được lưu trong tệp.

### ISOPLANE

{{cmd:ISOPLANE}} chọn mặt phẳng mà vẽ đẳng cự làm việc trên: `Left` (Trái), `Top` (Trên) hoặc `Right` (Phải). Enter chuyển sang mặt phẳng kế tiếp. Khi vẽ đẳng cự đang bật, {{key:F5}} làm điều tương tự ngay giữa một lệnh; khi tắt, {{key:F5}} được để cho trình duyệt.

## Tra cứu

### CAL

In giá trị của một phép tính, như nó được đọc ở bất kỳ đâu có gõ độ dài.

- `Biểu thức`: gõ, ví dụ `12'6"+3/4"` hoặc `(24'-0")/3`, rồi nhấn {{key:Enter}}. CadCraft in `= 12'-6 3/4"   (150.75 đơn vị bản vẽ)`. Xem [Phép tính trong một giá trị được gõ](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Bí danh: `DI`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Đo khoảng cách}}.

- `Chỉ định điểm thứ nhất`, `Chỉ định điểm thứ hai`. In khoảng cách, góc, Delta X và Delta Y.

### AREA

Bí danh: `AA`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Diện tích}}. In diện tích và chu vi.

- `Chỉ định góc thứ nhất [Đối tượng/Thêm diện tích/Trừ diện tích] <Đối tượng>`
  - Bấm hoặc gõ các góc; ở `Chỉ định điểm kế tiếp (Enter đóng) [Hoàn tác (U)]` nhấn {{key:Enter}} để đóng đường viền. `U` lấy lại góc cuối.
  - {{key:Enter}} hoặc `O`, rồi `Chọn đối tượng`: một vòng tròn (in chu vi của nó), một elip, một đa tuyến (một đa tuyến mở được đóng bằng một đường thẳng để tính diện tích, và chiều dài của nó được in) hoặc một tô bóng (các lỗ được trừ đi).
  - `A` (Thêm diện tích) và `S` (Trừ diện tích) giữ một tổng chạy: câu nhắc bắt đầu bằng `(chế độ THÊM)` hoặc `(chế độ TRỪ)`, mỗi diện tích được cộng hoặc trừ, và `Tổng diện tích = …` được in sau mỗi lần. Trong các chế độ này `O` chọn đối tượng cho đến {{key:Enter}}, và {{key:Enter}} ở câu nhắc đầu tiên kết thúc lệnh.

### MEASUREGEOM

Bí danh: `MEA`. `Nhập một tùy chọn [Khoảng cách (D)/Bán kính (R)/Góc (A)/Diện tích (AR)] <Khoảng cách>`; sau mỗi phép đo nó hỏi lại, với `Thoát (X)` là mặc định.

`Nhanh` đo quanh con trỏ khi bạn di chuyển nó: khoảng cách đến đối tượng gần nhất bên phải, phía trên, bên trái và phía dưới (dọc theo các trục của UCS hiện hành), vẽ khi bạn đi, và góc nơi hai trong số các hàng xóm đó thẳng và gặp nhau. Một cú bấm ghi bốn khoảng cách, chiều rộng và chiều cao trống, và các góc vào lịch sử; Enter quay về các tùy chọn. Nó đọc những gì có trên màn hình.

- `D`: hai điểm, như {{cmd:DIST}}.
- `R`: `Chọn cung hoặc vòng tròn`; in bán kính và đường kính.
- `A`: một cung (góc bao của nó), một đường thẳng rồi đường thẳng thứ hai (góc giữa chúng, về phía đầu xa của chúng), hoặc {{key:Enter}} rồi ba điểm (đỉnh, rồi hai đầu).
- `AR`: như {{cmd:AREA}}, một diện tích.

### ID

Không có bí danh. `Chỉ định điểm`; in X và Y của nó.

### LIST

Bí danh: `LI`, `LS`. `Chọn đối tượng`; in loại, lớp và các số đo chính của mỗi đối tượng.

### MASSPROP

{{cmd:MASSPROP}} cho thuộc tính mặt cắt của các miền và đối tượng đóng bạn chọn, tính gộp: diện tích, chu vi, hộp bao, tâm, mô men quán tính quanh các trục X và Y đi qua gốc, tích quán tính, bán kính quán tính, cùng các mô men quanh tâm, và các mô men chính với hướng các trục của chúng. Lỗ trong một miền được tính là lỗ. Các con số tính theo đơn vị bản vẽ và chính xác với đường viền gồm đường thẳng và cung; elip và spline được đo như các đoạn thẳng ngắn, và nó nói như vậy. Sau báo cáo, nó hỏi có ghi ra tệp văn bản không. Các đối tượng không đóng bị bỏ qua, và nó cho biết có bao nhiêu.

## Xem, tệp và khác

### ZOOM

Bí danh: `Z`.

- `Chỉ định góc của cửa sổ, nhập hệ số tỷ lệ (nX) [Phạm vi (E)/Tất cả (A)/Cửa sổ (W)/Trước đó (P)/Tỷ lệ (S)/Tâm (C)]`. Bấm hai góc để có một cửa sổ. `E`, `A` hoặc Enter: toàn bộ bản vẽ.
- `P` (Trước đó, hoặc {{ui:Trước đó}} trên thanh công cụ) quay về khung nhìn trước, tối đa 10 khung nhìn cho mỗi thẻ; một loạt bước con lăn hoặc một lần kéo được tính là một khung nhìn.
- Một số như `2`, `2x` hoặc `0.5x` (hoặc `S` rồi số) phóng to hoặc thu nhỏ theo hệ số đó quanh giữa màn hình.
- `C` hỏi `Chỉ định điểm tâm` và `Nhập chiều cao hoặc độ phóng đại (nX)`.

### PDFATTACH, PDFIMPORT and the PDF commands

Bí danh: `PDFATT` cho {{cmd:PDFATTACH}}, `PDFIM` cho {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} đặt một trang PDF làm lớp phủ dưới bản vẽ (tệp, trang, điểm chèn, tỷ lệ, góc xoay); {{cmd:PDFIMPORT}} biến đường nét, đường cong, nền tô và văn bản của một trang thành đối tượng bản vẽ trên các lớp đặt tên theo PDF, ở kích thước thật, một tỷ lệ đã gõ, hoặc được đổi tỷ lệ từ hai điểm và một khoảng cách thật. {{cmd:PDFCLIP}} cắt một lớp phủ, {{cmd:PDFADJUST}} đặt độ mờ, tương phản, đơn sắc hoặc tắt nó, {{cmd:PDFLAYERS}} bật tắt các lớp của chính PDF, và {{cmd:PDF}} cấp lại cho CadCraft các tệp mà lớp phủ của bản vẽ dùng. Xem [Lớp phủ PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Bí danh: `AUTOC`. Tự động hoàn thành bản vẽ: khi không có lệnh nào đang chạy, một bóng mờ xám cho thấy những gì các mẫu của bản vẽ cho là sẽ đến tiếp theo. {{cmd:AUTOCOMPLETE}} bật nó `On` hoặc tắt `Off` (cũng có trong Cài đặt › CadCraft), hoặc `Show` cho biết nó sẽ gợi ý gì ngay bây giờ. **Tab** vẽ bóng mờ như một bước hoàn tác, **Esc** bỏ nó cho đến khi bản vẽ thay đổi. Nó tìm ba thứ trong các đối tượng mới nhất: bản sao kế tiếp của một thứ đã vẽ hai lần trở lên ở một bước đều (cột, thanh đứng, bậc thang và mặt bậc), các bước tiếp theo của một cầu thang đa tuyến, và cạnh còn thiếu của một phòng hay chuỗi tường. Giữa {{cmd:LINE}} hoặc {{cmd:PLINE}}, bóng mờ là **điểm kế tiếp**: bước kế tiếp của một cầu thang (mặt đứng, mặt bậc, mặt đứng…), góc thứ tư của một hình chữ nhật, điểm đóng nó, hoặc thêm một bước đều. Đưa con trỏ gần nó và nhấn **Tab**, như thể bạn đã bấm ở đó; tiếp tục hoặc nhấn Enter. Được tính trên máy tính này bằng các quy tắc, không có mô hình.

### AUTOSHEET

Bí danh: `ASH`. Các tờ tự bố trí. {{cmd:AUTOSHEET}} lấy các phần của bản vẽ (các khung nhìn đã đặt tên, hoặc các phần riêng của mô hình, hoặc toàn bộ mô hình), chọn một khổ giấy (hoặc khổ bạn đưa), đặt cho mỗi phần một tỷ lệ chuẩn (một tỷ lệ cho tất cả, hoặc lớn nhất mà mỗi phần chịu được), và xếp các khung nhìn thành hàng trên tờ mới có khung tên và chú thích (tên và tỷ lệ) bên dưới mỗi cái. Những gì không vừa một tờ sẽ có tờ riêng. Một bước hoàn tác. Được tính trên máy tính này bằng các quy tắc, không có mô hình.

### PHOTOSKETCH

Bí danh: `PSK`. Chuyển ảnh phác thảo thành bản vẽ. Chọn một ảnh (JPEG, PNG hoặc TIFF) của một bản phác thảo tay trên một tờ giấy. {{cmd:PHOTOSKETCH}} tìm bốn góc của tờ, làm thẳng phối cảnh, lấy cỡ giấy bạn đặt tên (`Giấy`, hoặc cỡ chuẩn gần nhất) và `Tỷ lệ` của bản phác thảo (1 : n), rồi dò các nét bút thành đường thẳng, cung và vòng tròn, mỗi màu bút một lớp (đen, đỏ, xanh dương, xanh lục). Nếu không tìm thấy mép giấy, nó lấy cả ảnh làm tờ và nói như vậy. Chữ viết bị loại bỏ. Một bước hoàn tác. Thực hiện trên máy tính này bằng xử lý ảnh cổ điển, không có mô hình, không gửi gì đi đâu. Xem thêm các lệnh bản vẽ quét.

### AUTODIM

Bí danh: `ADIM`. Tự ghi kích thước theo quy tắc. {{cmd:AUTODIM}} ghi kích thước cho các đối tượng được chọn (hoặc cả bản vẽ) theo cao độ và các mép thẳng đứng của chúng: một chuỗi kích thước dọc theo các cạnh bạn chọn (`Cạnh`), một kích thước tổng thể bên ngoài nó, chiều rộng của mỗi khẩu độ (khe hở giữa các đường tường thẳng hàng), một đường kính cho mỗi cỡ lỗ, và với `Lưới` khoảng cách giữa các đường lưới. Một kích thước đã có sẵn không được tạo lại. Một bước hoàn tác. Được tính trên máy tính này bằng các quy tắc, không có mô hình.

### GRIDMOVE

Bí danh: `GM`. Di chuyển một đường lưới kéo theo cả hệ. {{cmd:GRIDMOVE}} di chuyển một đường lưới (một đường trên lớp có tên chứa grid hoặc axis) và những gì treo trên nó: tường có một đầu nằm trên đường sẽ co giãn để theo, tường dọc theo nó di chuyển nguyên vẹn, cột (tham chiếu khối và vòng tròn trên đường), bong bóng và thẻ của nó di chuyển, và kích thước có điểm nằm trên đường sẽ đo khoảng cách mới. Cho hai điểm (chỉ phần ngang qua đường được tính) hoặc `Khoảng cách`. Một bước hoàn tác lấy lại tất cả. Thực hiện bằng các quy tắc trên máy tính này.

### DETAILS

Bí danh: `DET`. Chi tiết tự tìm đến bạn. {{cmd:DETAILS}} giữ các chi tiết riêng của công ty bạn: `Thêm` đặt một khối của bản vẽ này vào danh sách, `Liệt kê` và `Gỡ` quản lý nó, và `Tìm` xếp hạng chúng cho những gì được chọn (hoặc cho những gì bạn vẽ gần nhất) theo các từ trong lớp, tên khối, mẫu tô bóng và ghi chú của đối tượng, so với tên và ghi chú của từng chi tiết, nên một đầu cửa sổ sẽ tìm thấy lá chắn mưa cho ngưỡng cửa của bạn. Chọn một số và một điểm để đặt nó. Với `Gợi ý` bật (cũng có trong Cài đặt › CadCraft), chọn thứ mà một chi tiết khớp sẽ đưa một dòng vào thanh trạng thái. Danh sách được giữ trong trình duyệt này, trên máy tính này, và chính danh sách đó được tìm. `Chia sẻ` đưa nó vào thư mục Tài liệu của bạn (`.cadcraft/firm-details.json`, kèm bản vẽ của mỗi khối): `Kéo về` thêm những gì nhóm bạn có mà bạn thiếu, `Đẩy đi` thêm những gì bạn có mà họ thiếu, `Cả hai` làm cả hai, và không gì bị xóa khỏi bất kỳ bên nào. Mở thư mục Tài liệu trước ({{cmd:DOCUMENTS}}); khi thư mục đó là thư mục Gói Đám mây Nhóm, cả nhóm chia sẻ một danh sách. Một mục chi tiết trong bảng Thư viện có nút **Thêm vào chi tiết của công ty tôi**, đặt nó vào cùng danh sách. Thực hiện bằng các từ trên máy tính này, không có mô hình.

### SKETCHFIX

Bí danh: `SKF`. Nét phác bút trở thành hình học chính xác. Nhấn và kéo một nét tự do mỗi lần (bút, chuột hoặc ngón tay), rồi Enter. Mỗi nét được đọc như một đường thẳng, vòng tròn, cung, hình chữ nhật hoặc đa tuyến: các đường gần nằm ngang và thẳng đứng được làm cho nằm ngang và thẳng đứng chính xác, một nét tròn khép kín thành vòng tròn, một nét khép kín có bốn góc vuông thành hình chữ nhật, và các đầu nét được kéo lại gần nhau và về các đầu đã có trong bản vẽ. Một bước hoàn tác. Thực hiện bằng các quy tắc trên máy tính này, không có mô hình.

### SCANATTACH and the scanned-drawing commands

Bí danh: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} không có bí danh. Chúng làm việc trên một hình ảnh, mỗi lệnh một bước hoàn tác. {{cmd:SCANATTACH}} chèn một PNG, JPEG, TIFF (một trang hoặc tất cả) hoặc một trang PDF là hình ảnh. {{cmd:SCANSCALE}} đổi tỷ lệ tờ từ hai điểm đã chọn và khoảng cách thật. {{cmd:SCANALIGN}} di chuyển và xoay nó đến hai điểm (`Đổi tỷ lệ tờ cho vừa` Có/Không). {{cmd:SCANDESKEW}} cho biết góc của các đường dài của tờ và xoay tờ khi bạn `Chấp nhận` hoặc đưa một `Giá trị`. {{cmd:SCANCLEAN}} đưa nó về đen trắng (`Ngưỡng` Tự động/Thích ứng/Mức, `Đốm`) và `Chạy`. {{cmd:SCANCROP}} giữ lại một cửa sổ. {{cmd:SCANERASE}} xóa một `Hình chữ nhật`, `Đa giác` hoặc `Lasso`. {{cmd:SCANTRACE}} vẽ theo đường thẳng và cung lên một lớp mới (`Dung sai`, `Cửa sổ`, `Cung`, `Phần còn lại`, `Chạy`) và báo những gì nó tìm thấy và những gì nó để lại dưới dạng raster. {{cmd:SCANINFO}} liệt kê tệp gốc và các bước. {{cmd:RASTERSNAP}} bật hoặc tắt bắt vào các đường của tờ quét. Xem chủ đề Bản vẽ quét và vẽ theo.

### REGEN and REGENALL

Bí danh: `RE` cho {{cmd:REGEN}}, `REA` cho {{cmd:REGENALL}}. Dựng lại những gì được vẽ trên màn hình từ bản vẽ: {{cmd:REGEN}} cho thẻ bạn đang xem (trên tờ, cả mô hình mà các khung nhìn của nó hiển thị), {{cmd:REGENALL}} cho mọi thẻ, mọi khung chia màn hình và mọi bản vẽ đang mở. Dùng khi hình có vẻ cũ sau một thay đổi bằng script hoặc rất lớn, hoặc khi một trợ lý đã sửa bản vẽ; bản thân bản vẽ không bị đụng đến, nên không có gì để hoàn tác.

### NAMEDVIEW

Bí danh: `NV`, `VIEWS`. `Nhập một tùy chọn [?/Khôi phục/Lưu/Cửa sổ/Xóa] <Khôi phục>`, rồi tên của khung nhìn. `S` lưu khung nhìn trên màn hình, `W` một cửa sổ bạn chọn, `R` hiện một khung nhìn đã lưu, `D` xóa một khung, `?` liệt kê các khung nhìn của thẻ này. Lưu dưới một tên đã có sẽ thay thế nó; mỗi thay đổi là một bước hoàn tác. Khung nhìn thuộc về thẻ mà chúng được lưu. Các tệp DWG và DXF giữ chúng (bảng VIEW); các khung nhìn của một tờ sẽ quay lại ở tờ đầu tiên, vì tệp không nói là tờ nào.

### UNDO and REDO

Bí danh: `U` cho {{cmd:UNDO}}; {{cmd:REDO}} không có bí danh. Cũng là {{key:Mod+Z}} và {{key:Mod+Y}}.

### LAYER

Bí danh: `LA`. Chuyển đến bảng {{ui:Lớp}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Nhập kiểu đường cho đối tượng mới` — `ByLayer`, `ByBlock` hoặc một tên (`?` liệt kê chúng: Continuous, các kiểu của bản vẽ, và DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE với kích thước `2` (một nửa) và `X2` (gấp đôi) của chúng). {{cmd:LWEIGHT}} (`LW`): độ dày nét cho đối tượng mới tính bằng mm, hoặc `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): tỷ lệ kiểu đường của bản vẽ (có thể hoàn tác). {{cmd:LWDISPLAY}} (`LWT`): `Hiện độ dày nét [Bật/Tắt]` — giống nút {{ui:LWT}} trên thanh trạng thái. Xem [Độ dày nét và kiểu đường](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Nhập loại đối tượng để đổi tên [Lớp (LA)/Khối (B)]`, `Nhập tên cũ`, rồi tên mới; các đối tượng hoặc tham chiếu theo sau. {{cmd:LAYMRG}}: `Chọn đối tượng trên lớp để gộp hoặc [Tên]` cho đến {{key:Enter}}, rồi `Chọn đối tượng trên lớp đích hoặc [Tên]` và `Y`. {{cmd:LAYDEL}}: `Chọn đối tượng trên lớp để xóa hoặc [Tên]`, rồi `Y`: lớp và mọi đối tượng trên nó bị xóa (không xóa lớp 0, DEFPOINTS hoặc lớp hiện hành). Mỗi lệnh là một bước hoàn tác. Xem [Sắp xếp bản vẽ bằng lớp](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Các lớp bằng cách chọn đối tượng; cũng có trong menu {{ui:Công cụ}} của bảng {{ui:Lớp}}. {{cmd:LAYISO}}: `Chọn đối tượng trên (các) lớp cần cô lập`, rồi {{key:Enter}}: mọi lớp khác bị tắt. {{cmd:LAYUNISO}} bật chúng lại. {{cmd:LAYOFF}} và {{cmd:LAYFRZ}}: `Chọn một đối tượng trên lớp cần tắt` (hoặc đóng băng), lặp đi lặp lại; `U` lấy lại cái cuối, {{key:Enter}} kết thúc. {{cmd:LAYMCUR}}: `Chọn đối tượng mà lớp của nó sẽ thành hiện hành`. {{cmd:LAYON}} bật mọi lớp, {{cmd:LAYTHW}} mở băng mọi lớp. Mỗi lệnh là một bước hoàn tác. Xem [Sắp xếp bản vẽ bằng lớp](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} bắt đầu một bản vẽ trống và {{cmd:OPEN}} mở một DWG hoặc DXF, mỗi cái trong thẻ riêng trên bản vẽ (một bản vẽ mới chưa chỉnh sửa được dùng thay vì mở thẻ mới). Đóng một thẻ có thay đổi chưa lưu sẽ hỏi trước. Xem [Chia màn hình](topic:split-screen).

{{cmd:SAVE}} (bí danh `QSAVE`, cũng là {{key:Mod+S}}) tải xuống một bản sao theo định dạng của bản vẽ: DWG nếu được mở từ một DWG, DXF nếu từ một DXF. Một bản vẽ mới dùng định dạng được chọn lần cuối trong Lưu thành trên trình duyệt này, nếu không thì DWG.

{{cmd:SAVEAS}} (cũng là {{key:Mod+Shift+S}}) mở hộp thoại {{ui:Lưu bản sao thành}}: chọn {{ui:DWG}} (và {{ui:Phiên bản}} của nó), {{ui:DXF R12}} hoặc {{ui:DXF 2000}}, rồi {{ui:Lưu}}. Lựa chọn được giữ cho bản vẽ này và cho các bản vẽ mới trên trình duyệt này.

{{cmd:DXFOUT}} luôn tải xuống một bản sao DXF R12, không đổi định dạng mà {{cmd:SAVE}} dùng.

Xem [Tệp: mở được gì, lưu được gì](topic:files#saving).

### TOUR

Bí danh: `TUTORIAL`. Bắt đầu lại chuyến tham quan sáu bước cho bản vẽ đầu tiên. Xem [Bắt đầu](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Bí danh: `TBDOCK`. `Vị trí thanh công cụ [Trên/Dưới/Trái/Phải]`. Xem [Cài đặt](topic:settings#toolbar-position).

### COMMANDLINE

Bí danh: `CMDLINE`. `Dòng lệnh [Gắn ở dưới/Nổi/Một dòng/Số dòng lịch sử hiển thị/Lịch sử lệnh (F2)]`: gắn hoặc thả dòng lệnh, làm nó thành một dòng, hỏi số dòng lịch sử hiển thị (0 đến 12), hoặc mở lịch sử. Xem [Cài đặt](topic:settings#command-line).

### TOPAREA

`Vùng trên [Chuẩn/Gọn]`: các thanh phía trên bản vẽ như trước, hoặc gọn. Xem [Cài đặt](topic:settings#top-area).

### POLARANG

`Nhập bước góc cực tính bằng độ <90>`: bước mà đường truy vết {{ui:Cực}} căn theo (lớn hơn 0, tối đa 180). Được giữ trong trình duyệt này.

### UNITS

Bí danh: `UN`. Cách độ dài được ghi và gõ.

- `Nhập định dạng độ dài [Khoa học/Thập phân/Kỹ thuật/Kiến trúc/Phân số] <hiện tại>`
- Kiến trúc và Phân số: `Nhập mẫu số của phân số nhỏ nhất để hiển thị (1, 2, 4, 8, 16, 32, 64, 128 hoặc 256)`. Các loại khác: `Nhập số chữ số thập phân (0 đến 8)`.

Kích thước mới theo đó. Một bước hoàn tác. Giống {{ui:Định dạng độ dài}} và {{ui:Độ chính xác}} trong {{ui:Cài đặt hiện tại}}; xem [Feet và inch](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Bí danh: `GDS`. Xem một bố cục IC (tệp luồng GDSII): thử nghiệm trong phòng thí nghiệm, chỉ để xem và đo.

- Một hộp chọn tệp nhận một tệp `.gds`; với nhiều ô gốc, `Nhập ô gốc cần vẽ`.
- Mọi lớp và kiểu dữ liệu thành một lớp bản vẽ (`GDS 1`, `GDS 2/5`), các tham chiếu và mảng được đặt phẳng, theo đơn vị người dùng của tệp (thường là micromet). Một bước hoàn tác. Không có gì được mô phỏng hay kiểm tra, và tệp không được ghi ngược lại.

### DIAGRAM

Bí danh: `TEXTDIAGRAM`, `T2D`. Một sơ đồ từ văn bản.

- Một hộp nhận văn bản (hoặc một dòng với `;` giữa các câu lệnh ở dòng lệnh): lưu đồ Mermaid, sơ đồ thành phần PlantUML, D2 hoặc danh sách từ-đến.
- `Chỉ định góc trên bên trái của sơ đồ`, rồi `Chỉ định chiều cao văn bản`.

Các khối và đường nối là đối tượng thông thường trên lớp `Diagram`, được chọn khi kết thúc. Một bước hoàn tác. Xem [Vẽ sơ đồ từ văn bản](topic:text-to-diagram).

### OLELIST

Bí danh: `OLES`. Các đối tượng OLE mà một DWG mang mà CadCraft không tự đặt được.

- Liệt kê từng cái: số, loại, kích thước, có lưu hình ảnh hay không.
- `Nhập một tùy chọn [Đặt/Thoát (X)] <Thoát>`: Đặt hỏi số, góc dưới trái và chiều rộng, rồi vẽ một khung với hình ảnh. Một bước hoàn tác; đối tượng được giữ không bị đổi. Xem [Hình ảnh](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Bí danh: `SHX`. Các phông SHX riêng của bạn.

- `Nhập một tùy chọn phông SHX [Thư mục/Tệp/Liệt kê/Gỡ/Đảo ngược/Xóa] <Liệt kê>`

{{ui:Thư mục}} đọc mọi tệp `.shx` trong một thư mục (CadCraft Studio; lại ở mỗi lần khởi động), {{ui:Tệp}} lấy các tệp bạn chọn (trình duyệt), {{ui:Đảo chiều}} đặt các chữ của một phông theo thứ tự từ cuối lên đầu. Các kiểu văn bản nêu tên một phông đã tải sẽ vẽ bằng nó. Xem [Vẽ văn bản bằng phông SHX riêng](topic:shx-fonts).

### LIMITS

Bản vẽ được dự định lớn cỡ nào.

- `Chỉ định góc dưới trái hoặc [BẬT/TẮT] <hiện tại>`: một điểm, `ON` hoặc `OFF`.
- `Chỉ định góc trên phải <hiện tại>`.

Lưới phủ kín các giới hạn, {{cmd:ZOOM}} Tất cả hiện chúng, và khi giới hạn ON thì một điểm nằm ngoài sẽ bị từ chối (`**Ngoài giới hạn`). Một bước hoàn tác; được lưu trong DWG và DXF. Xem [Đặt giới hạn bản vẽ](topic:drawing-limits).

### AUNITS

Bí danh: `ANGUNITS`. Cách góc được hiển thị và gõ.

- `Nhập định dạng góc [Độ thập phân/Độ-phút-giây/Phương vị của người đo đạc] <hiện tại>`
- `Nhập số chữ số thập phân (0 đến 8)`, hoặc với hai loại kia `Nhập độ chính xác` (0 độ, 2 phút, 4 giây, 5 đến 8 chữ số thập phân của giây).

Một bước hoàn tác; được lưu trong DWG và DXF. Giống {{ui:Định dạng góc}} trong {{ui:Cài đặt hiện tại}}. Xem [Gõ và hiển thị phương vị và góc](topic:bearings-and-angles).

### APPLOAD

Bí danh: `AP`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Tải ứng dụng…}}. Hộp thoại {{ui:Tải ứng dụng}}: tải các đoạn `.lsp` và tệp hộp thoại `.dcl`, bỏ tải, tải lại từ lịch sử, và Bộ khởi động. Một lệnh `(defun c:TÊN …)` của đoạn chương trình sẽ hoạt động như mọi lệnh khác. Xem [Tải ứng dụng](topic:load-applications) và [Chạy đoạn chương trình LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Sửa bí danh…}}) mở tệp bí danh của bạn (các dòng `ALIAS, *COMMAND`); {{ui:Lưu}} áp dụng nó. {{cmd:REINIT}} áp dụng lại. Xem [Sửa bí danh lệnh](topic:command-aliases).

### LISPEDIT

Bí danh: `VLIDE`; hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Trình sửa LISP}}. Mở trình sửa LISP, một cửa sổ luôn mở bên cạnh bản vẽ.

- Văn bản: số dòng, đối tác của dấu ngoặc tại con trỏ được đánh dấu (màu đỏ khi không có), {{key:Enter}} thụt dòng mới dưới dấu ngoặc đang mở, {{key:Tab}} gõ hai khoảng trắng, {{key:Esc}} rời văn bản.
- {{ui:Tải vào bản vẽ}} ({{key:Ctrl+Shift+Enter}}): đọc mọi dạng, như {{cmd:APPLOAD}} làm với tệp, và tạo các lệnh `c:` của nó. Tệp hiện trong danh sách của {{cmd:APPLOAD}}.
- {{ui:Chạy vùng chọn}} ({{key:Ctrl+Enter}}): đánh giá các dạng được chọn, hoặc dạng nơi con trỏ đang ở.
- {{ui:Dừng}}: kết thúc một đoạn chương trình đang chạy.
- {{ui:Bảng điều khiển}}: những gì đoạn chương trình đã in, và từng lỗi kèm dòng của nó; bấm một lỗi để đến đó. Văn bản được chạy từng dạng cấp cao nhất một, nên dòng là dòng của dạng, hoặc bên trong nó là dòng gọi hàm mà lỗi nêu tên.
- {{ui:Mới}}, {{ui:Mở}}, {{ui:Lưu}} ({{key:Ctrl+S}}): một tệp `.lsp`. Văn bản cũng được giữ trong trình duyệt này, nên đóng cửa sổ không làm mất nó.
- Cạnh văn bản: các hàm mà đoạn chương trình định nghĩa, các hàm nó gọi mà LISP này chưa có, các hàm nó gọi mà không được định nghĩa trong đó cũng không có sẵn, và danh sách đầy đủ những gì đã có và chưa có.

Một văn bản có dấu ngoặc không bao giờ đóng, hoặc một chuỗi không bao giờ kết thúc, sẽ không được chạy: dòng của nó được nêu tên. Không có trình gỡ lỗi từng bước, điểm dừng hay cửa sổ theo dõi. Xem [Chạy đoạn chương trình LISP](topic:run-lisp).

### HELP

Bí danh: `?`. In mọi lệnh, các bí danh và mô tả một dòng của nó vào lịch sử dòng lệnh. Nó không mở trợ giúp này: nhấn {{key:F1}} hoặc bấm {{ui:Trợ giúp}} để xem.

## Câu nhắc chọn đối tượng

Ở mọi câu nhắc `Chọn đối tượng`: bấm các đối tượng, vẽ cửa sổ (từ trái sang phải) và chọn cắt (từ phải sang trái) bằng hai lần bấm, hoặc nhấn và kéo một lasso ({{key:Space}} khi đang kéo: cửa sổ, chọn cắt, hàng rào), {{key:Shift}}+bấm để bỏ, và nhấn {{key:Enter}} để hoàn tất. Bạn cũng có thể gõ `ALL` (tất cả), `L` (đối tượng cuối), `P` (Trước đó: những gì lệnh trước dùng), `F` (Hàng rào: các đối tượng mà một đường điểm cắt qua; `U` lấy lại một điểm), `W` (Cửa sổ), `C` (Chọn cắt), `R` (chế độ Bỏ: các lần chọn lấy đối tượng ra; câu nhắc ghi `Bỏ đối tượng`) và `A` (Thêm lại). `?` liệt kê chúng. Chúng không hiện trong câu nhắc. {{key:Tab}} trên các đối tượng chồng lên nhau sẽ làm nổi bật cái tiếp theo; bấm để chọn nó. Xem [Chọn đối tượng](topic:select-objects).

### ACCESS

Bí danh: `AX`. Vẽ không cần nhìn. {{cmd:ACCESS}} bật hoặc tắt Truy cập (`On`, `Off`) và đổi âm thanh bắt điểm (`Sound`) và lệnh bằng giọng nói (`Voice`); nó nói trạng thái hiện tại trước. Khi Truy cập bật, mọi lệnh và kết quả được đọc qua trình đọc màn hình của bạn và vùng vẽ có một con trỏ bàn phím. Chủ đề trợ giúp "Vẽ không cần nhìn" có các phím.

### DESCRIBE

Bí danh: `DESC`. Cho biết bản vẽ có gì: bao nhiêu đối tượng, thuộc loại nào, kích thước ra sao, bao nhiêu lớp, cái gì đang được chọn. Chỉ đọc; không thay đổi gì.

### WHEREAMI

Bí danh: `WHERE`. Cho biết con trỏ đang ở đâu, theo đơn vị của bản vẽ.

### NEARBY

Cho biết những gì nằm gần con trỏ, gần nhất trước, mỗi cái kèm khoảng cách và phía của nó.

### SAYSEL

Đọc to những gì đang được chọn, mỗi đối tượng một câu (chiều dài đường thẳng, đầu và góc; bán kính và tâm vòng tròn; văn bản như đã viết).

### VOICE

Bật hoặc tắt lệnh bằng giọng nói. Chúng được nhận diện trên máy tính này; nơi trình duyệt không làm được điều đó, giọng nói tắt trừ khi bạn chọn dịch vụ trực tuyến của trình duyệt trong Cài đặt.

### TOUCHCROSSHAIR

Bí danh: `TCX`. Chữ thập lệch để vẽ bằng ngón tay, để đầu ngón tay không che điểm bạn chọn. Khi nó bật, một ngón tay trên bản vẽ không chọn gì: nó di chuyển một chữ thập nằm phía trên ngón tay và sang một bên. Bắt điểm đối tượng và truy vết theo chữ thập. Nhấc ngón tay không chọn gì và để chữ thập ở yên. Để chọn, nhấn nút {{ui:Click}} ở góc bản vẽ, hoặc chạm vào bất kỳ đâu trên bản vẽ bằng ngón thứ hai. Giữ {{ui:Click}} khi bạn di chuyển ngón kia để kéo (một cửa sổ chọn, một lasso, một tay cầm). Một ngón tay giữ yên lâu, hoặc nút {{ui:Enter}}, là Enter. Hai ngón để di chuyển và thu phóng như trước. Gần mép dưới và mép xa phía bên, chữ thập thu lại về phía ngón tay, nên mọi phần của bản vẽ đều chạm tới được. Bút và chuột luôn chọn trực tiếp.

{{cmd:TOUCHCROSSHAIR}} cho biết trạng thái và hỏi `ON`, `OFF`, `Auto` (chỉ bật nơi ngón tay là con trỏ duy nhất, nên tắt trên máy tính có chuột), `Distance` (chữ thập cách ngón tay bao xa, từ 24 đến 240 điểm ảnh) hoặc `Side` (`Left`: lên và sang trái, cho tay phải; `Right` cho tay trái; các nút chuyển sang góc kia). Các lựa chọn tương tự nằm trong Cài đặt › CadCraft, và trên thiết bị có màn hình cảm ứng thanh trạng thái có công tắc {{ui:Chữ thập lệch}}. Các lựa chọn được giữ trong trình duyệt này.

### WHOHAS

Cho biết ai đang mở một bản vẽ. Trong CadCraft Studio trên máy tính, mở một DWG hoặc DXF sẽ ghi một tệp khóa nhỏ cạnh nó (`Plan.dwg.cclock`: ai, từ khi nào, phiên bản nào), làm mới mỗi phút khi bản vẽ đang mở, và xóa khi bản vẽ đóng. Mở một bản vẽ người khác đang mở sẽ cho biết ai và từ khi nào, và đề nghị {{ui:Mở chỉ đọc}} (khi Lưu sẽ hỏi tên mới), {{ui:Vẫn mở}} (người kia được báo khi họ làm mới) hoặc {{ui:Hủy}}. Lưu đè lên một tệp người khác đang mở sẽ hỏi trước. Một khóa không được làm mới trong năm phút được nói là cũ: bản sao kia đã đóng mà không lưu, hoặc máy tính đang ngủ.

{{cmd:WHOHAS}} hỏi `Hiện tại` (bản vẽ đang mở), `Tệp` (chọn một), `Thư mục` (chọn một thư mục: mọi bản vẽ trong đó đang được mở ở đâu đó sẽ được liệt kê), `Đường dẫn` (gõ đường dẫn đầy đủ) hoặc `Tên` (tên mà người khác thấy; tên tài khoản của bạn khi bạn đã đăng nhập). Studio chỉ truy cập được các thư mục bạn đã chọn: với bản vẽ mở từ một thư mục chưa từng được chọn, nó nói một lần rằng nó không thể ghi nhận bản vẽ là đang mở; `Thư mục` chọn thư mục đó, và từ đó các khóa làm việc ở đó. Khóa chỉ là một ghi chú cho người khác, không phải rào cản: một chương trình khác vẫn có thể ghi tệp. Trên trình duyệt không có thư mục nào để tìm, và lệnh nói như vậy.

### OVERKILL

Xóa các đối tượng trùng và chỉnh các đường thẳng và cung chồng lên nhau, cho các bản vẽ đến với nét vẽ bị nhân đôi. `Chọn đối tượng để dọn dẹp`, {{key:Enter}}, rồi {{key:Enter}} lần nữa để dọn với các cài đặt đang hiện, hoặc đổi một cái trước:

- `Dung sai`: hai tọa độ phải gần đến đâu để tính là giống nhau (0.000001 lúc đầu; 0 nghĩa là chính xác tuyệt đối).
- `Bỏ qua`: các thuộc tính có thể khác nhau giữa hai đối tượng vốn giống nhau. Gõ một tên để bật nó: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, hoặc `None` / `All`. {{key:Enter}} khi xong.
- `Chồng lên nhau`: bật hoặc tắt. Khi bật, các đường thẳng nằm trên cùng một đường thẳng chồng lên nhau sẽ thành một đường thẳng (một đường thẳng nằm trong một đường khác đơn giản là bị xóa), và các cung trên cùng một vòng tròn chồng lên nhau sẽ thành một cung; các cung khép thành một vòng đầy đủ trở thành vòng tròn, và một cung nằm trên một vòng tròn bị xóa.
- `Đầu`: bật hoặc tắt. Khi bật, các đường thẳng nằm trên cùng một đường thẳng và các cung trên cùng một vòng tròn chỉ chạm nhau đầu nối đuôi sẽ thành một đoạn.

Mọi loại đối tượng đều được kiểm tra trùng lặp: hai đối tượng là trùng khi hình học của chúng giống nhau trong dung sai và lớp, màu, kiểu đường, tỷ lệ kiểu đường, độ dày nét, độ dày, độ trong suốt và chiều cao của chúng khớp (trừ những cái bạn bỏ qua). Đường thẳng và đa tuyến mở cũng khớp khi được vẽ theo chiều ngược lại. Đối tượng đầu tiên theo thứ tự vẽ được giữ và giữ thuộc tính riêng. Lệnh báo số đối tượng đã kiểm tra và đã xóa: các trùng lặp, các đoạn chồng được gộp, các đoạn được nối đầu nối đuôi. Một {{cmd:UNDO}} lấy lại tất cả. Các cài đặt giữ đến khi bạn đóng cửa sổ bản vẽ.

Nó để yên: các đối tượng trên lớp bị khóa và các đối tượng ẩn. Nó không gộp đường thẳng có độ cao (Z) (các bản sao hoàn toàn giống nhau của chúng vẫn bị xóa), và không chạm vào các đoạn bên trong một đa tuyến (chúng không bị làm mỏng), một đường thẳng nằm trên đoạn của đa tuyến, và một đa tuyến đóng vẽ theo chiều ngược lại.

### DRAWORDER

Đổi các đối tượng nào được vẽ ở phía trước. `Chọn đối tượng để sắp xếp lại`, {{key:Enter}}, rồi `Trên đối tượng`, `Dưới đối tượng`, `Lên trước` hoặc `Xuống sau` ({{key:Enter}} = `Xuống sau`). `Trên đối tượng` và `Dưới đối tượng` hỏi các đối tượng tham chiếu: vùng chọn nằm ngay trước đối tượng ở trước nhất trong số đó, hoặc ngay sau đối tượng ở sau nhất. Các đối tượng được chọn giữ thứ tự riêng của chúng giữa nhau. Một bước hoàn tác. Thứ tự được lưu cùng bản vẽ trong DWG và DXF, nơi nó là thứ tự các đối tượng được ghi.

Trên màn hình, CadCraft vẽ các vùng đầy (tô đặc, đa tuyến rộng, mặt nạ) trước, rồi đến các nét, rồi đến văn bản, nên văn bản luôn đọc được trên nền tô; thứ tự vẽ chỉ hiện giữa các đối tượng đầy và giữa các hình ảnh. Các chương trình khác mở tệp vẽ mọi đối tượng theo thứ tự đã lưu.

### TEXTTOFRONT

Đưa văn bản, kích thước và đường dẫn lên trước mọi thứ khác trong không gian đang mở: `Văn bản`, `Kích thước`, `Đường dẫn` hoặc `Tất cả` ({{key:Enter}} = `Tất cả`). Một bước hoàn tác. Nói rõ khi không có gì để làm, hoặc khi chúng đã ở trước.

### HATCHTOBACK

Đưa mọi tô bóng của không gian đang mở ra sau mọi thứ khác, để các nền tô không che nét và văn bản trong tệp đã lưu. Không có câu nhắc. Một bước hoàn tác.

### ISOLATEOBJECTS

Bí danh: `ISOLATE`. Chỉ hiện các đối tượng được chọn: mọi thứ khác trong không gian đang mở bị khuất cho đến {{cmd:UNISOLATEOBJECTS}}. Khác {{cmd:LAYISO}}, nó làm việc trên các đối tượng bạn chọn, bất kể lớp của chúng, và không đổi lớp nào. Đối tượng ẩn không được vẽ, chọn, bắt điểm, phóng tới hay in, và các lệnh nhận `ALL` bỏ qua chúng. Những gì bạn vẽ trong lúc đối tượng bị cô lập hiện như bình thường.

Đây chỉ dành cho phiên làm việc: không có gì về nó được lưu cùng bản vẽ, nó không phải một bước hoàn tác, và mở lại bản vẽ sẽ hiện mọi thứ. Khi đối tượng đang bị ẩn, thanh trạng thái có một nút ghi số lượng; bấm để hiện lại chúng.

### HIDEOBJECTS

Ẩn các đối tượng được chọn cho đến {{cmd:UNISOLATEOBJECTS}}. Cùng quy tắc với {{cmd:ISOLATEOBJECTS}}: chỉ cho phiên làm việc, không được lưu, không phải một bước hoàn tác.

### UNISOLATEOBJECTS

Bí danh: `UNISOLATE`, `UNHIDE`. Hiện lại mọi đối tượng bị ẩn bởi {{cmd:ISOLATEOBJECTS}} hoặc {{cmd:HIDEOBJECTS}}, và nói có bao nhiêu cái đã hiện lại.

### LAYLOCKFADE

Đặt cách các đối tượng trên lớp bị khóa trông ra sao và liệu một cú bấm có chạm tới chúng không. Nó cho biết trạng thái hiện tại, rồi nhận:

- một số từ 0 đến 90: mức mờ tính bằng phần trăm (50 lúc đầu). 0 tắt độ mờ.
- `ON` hoặc `OFF`: bật hoặc tắt độ mờ, giữ nguyên mức.
- `Pick`, rồi `Yes` hoặc `No`: một cú bấm có được chọn đối tượng trên lớp bị khóa khi không có lệnh nào chạy không? `No` (mặc định): chúng không thể chọn được. `Yes`: một cú bấm hoặc một cửa sổ sẽ chọn chúng để {{ui:Thuộc tính}} hiện được; chúng vẫn không thể bị đổi, và `Chọn đối tượng` của một lệnh không bao giờ lấy chúng.

Bắt điểm đối tượng tìm được đối tượng trên lớp bị khóa trong cả hai trường hợp. Bản in không bao giờ bị mờ. Cả hai cài đặt là của bạn, không phải của bản vẽ, và cũng nằm trong {{ui:Cài đặt}} dưới {{ui:Khóa lớp}}.

### BURST

Phân rã tham chiếu khối và giữ những gì thuộc tính của chúng nói. `Chọn tham chiếu khối để phân rã`, {{key:Enter}}: mỗi tham chiếu được thay bằng các đối tượng của khối, và giá trị của mỗi thuộc tính nhìn thấy trở thành văn bản thường trên lớp riêng của thuộc tính đó (thuộc tính trên lớp 0 rơi xuống lớp của tham chiếu, giống các đối tượng khác của khối trên lớp 0). Thuộc tính ẩn bị bỏ. Một khối bên trong khối vẫn là một tham chiếu khối. Một bước hoàn tác; nó báo số tham chiếu đã phân rã và số giá trị thuộc tính đã thành văn bản.

Nó từ chối một bản vẽ liên kết theo tên (hãy buộc nó trước, hoặc sao chép từ nó bằng {{cmd:NCOPY}}), và để các đối tượng khác trong vùng chọn yên. Với tham chiếu khối, {{cmd:EXPLODE}} cho cùng các đối tượng; {{cmd:BURST}} chỉ lấy tham chiếu khối và đếm văn bản thuộc tính.

### TXT2MTXT

Bí danh: `T2M`. Nối các văn bản một dòng thành một văn bản đoạn. `Chọn văn bản một dòng để nối`, {{key:Enter}}, rồi `Đoạn` (các dòng chạy liền nhau và ngắt dòng theo chiều rộng của dòng rộng nhất) hoặc `Dòng` (mỗi văn bản giữ là một dòng riêng); {{key:Enter}} lấy cái được dùng lần cuối. Các dòng được sắp từ trên xuống dưới, rồi từ trái sang phải, theo hướng của văn bản trên cùng. Đoạn treo từ góc trên bên trái của văn bản trên cùng và lấy chiều cao, góc xoay, kiểu, lớp và màu của nó. Một bước hoàn tác.

Văn bản đã là văn bản đoạn, văn bản trống và các đối tượng khác trong vùng chọn được để yên, và lệnh nói có bao nhiêu cái.

### NCOPY

Sao chép đối tượng từ một tham chiếu khối hoặc một bản vẽ liên kết vào bản vẽ, mà không phân rã gì. `Chọn một đối tượng bên trong một tham chiếu khối hoặc một bản vẽ liên kết`: đối tượng gần điểm chọn nhất được sao chép nơi nó hiện ra, dù nó nằm sâu bao nhiêu khối; chọn thêm, rồi {{key:Enter}}. Tiếp theo `Điểm gốc để dời các bản sao`: {{key:Enter}} để chúng ở nguyên tại chỗ, hoặc cho một điểm gốc và một điểm thứ hai. Toàn bộ lệnh là một bước hoàn tác.

Một bản sao lấy lớp mà nó hiện trên đó: một đối tượng trên lớp 0 bên trong một khối rơi xuống lớp của tham chiếu mà nó nằm trong, và màu ByBlock trở thành màu của tham chiếu đó. Từ một bản vẽ liên kết, lớp `Plan|Walls` thành `Plan$0$Walls` (tên mà liên kết đặt), được tạo với màu, kiểu đường và độ dày nét của lớp được liên kết. Giá trị thuộc tính được sao chép như văn bản. Các tham chiếu khối trên lớp bị khóa không thể chọn.

### FLATTEN

Đặt chiều cao (Z) và độ dày của các đối tượng được chọn về 0. `Chọn đối tượng để làm phẳng`, {{key:Enter}}. Nó cũng làm phẳng các đối tượng bên trong các định nghĩa khối mà vùng chọn dùng (và các khối bên trong chúng), nên mọi tham chiếu đến các khối đó đều đổi; bản vẽ liên kết để yên. Một bước hoàn tác; nó báo số đối tượng đã đổi, và nói khi không cái nào có chiều cao hay độ dày.

Điều CadCraft giữ về chiều thứ ba trong bản vẽ 2D là: một chiều cao trên vòng tròn, cung, elip, điểm, văn bản, tham chiếu khối, tô bóng, đường dẫn và đa tuyến (cao độ của chúng), một chiều cao tại mỗi đầu của đường thẳng, và một độ dày trên đường thẳng, vòng tròn, cung, đa tuyến, điểm và văn bản, như tệp đã có. {{cmd:FLATTEN}} xóa chính xác những thứ đó. Nó không chạm vào mô hình 3D trên thẻ 3D, các mặt 3D hay khối đặc, và một đối tượng vẽ trên mặt phẳng nghiêng đã được đưa về mặt phẳng bản vẽ khi tệp được mở.

### BREAKLINE

Vẽ một đường thẳng có ký hiệu ngắt, cho một hình chiếu bị cắt ngắn. Nó cho biết kích thước và phần kéo dài hiện tại, rồi `Điểm đầu của đường ngắt` (hoặc `Kích thước` / `Phần kéo dài` để đổi chúng trước), `Điểm thứ hai`, và `Chỗ đặt ký hiệu ngắt`: bấm dọc theo đường, hoặc {{key:Enter}} cho giữa. Kết quả là một đa tuyến trên lớp hiện hành: đường thẳng, kéo dài quá mỗi điểm bởi phần kéo dài, với một nét hình Z cao bằng kích thước và dài bằng nửa.

`Kích thước` và `Phần kéo dài` được ghi nhớ như cài đặt của bạn (kích thước bắt đầu ở gấp đôi chiều cao văn bản kích thước nhân với tỷ lệ kích thước; phần kéo dài bằng nửa kích thước). {{key:Enter}} lặp lại lệnh.

### AUDIT

Kiểm tra bản vẽ đang mở có hỏng không và sửa nó. {{cmd:AUDIT}} xem mọi đối tượng trong mô hình, trên các tờ và bên trong khối, và bảng lớp, và liệt kê những gì nó tìm thấy theo loại:

- số không hữu hạn hoặc quá lớn một cách vô lý;
- đối tượng không có kích thước: đường thẳng dài bằng 0, vòng tròn bán kính 0, đa tuyến có một đỉnh, văn bản không có chữ hoặc chiều cao, tham chiếu khối có tỷ lệ 0;
- đối tượng trên một lớp mà bản vẽ không có; tham chiếu đến một khối không có ở đó; tên kiểu văn bản và kiểu kích thước và tên kiểu đường không có trong bản vẽ;
- khối tự chứa chính nó, trực tiếp hoặc qua các khối khác;
- đối tượng có chung một id, một khóa hay một tham chiếu tệp;
- kích thước thiếu các điểm mà nó đo từ, và tô bóng có đường biên không phải một đường viền kín.

Rồi nó hỏi `Sửa chúng? [Có/Không]`. `Không` không đổi gì. `Có` sửa mọi thứ trong một bước hoàn tác: cái không thể vẽ được sẽ bị xóa (số xấu, không có kích thước, khối thiếu, kích thước hỏng, tô bóng không có đường biên dùng được, tham chiếu khép một vòng khối); lớp bị thiếu được tạo; tên kiểu và kiểu đường không rõ được đưa về mặc định; một khóa trùng được thay. Nó in số đối tượng bị xóa và số đối tượng được sửa. Các phát hiện tương tự xuất hiện trong bảng Vấn đề, mỗi cái có {{ui:Sửa}} riêng.

Nó không từ chối gì, nhưng chỉ kiểm tra những gì CadCraft tự vẽ: dữ liệu giữ cho các chương trình khác (khối đặc 3D, đối tượng OLE) không được mở.

### RECOVER

Mở một DXF hoặc DWG bị hỏng. {{cmd:RECOVER}} hỏi tệp, đọc những gì đọc được thay vì từ chối tệp, liệt kê những gì nó đã bỏ qua hoặc giả định, rồi kiểm tra và sửa bản vẽ như {{cmd:AUDIT}} làm với `Có`.

- DXF: các dòng không thuộc một cặp mã và giá trị bị bỏ cho đến khi các cặp thẳng hàng trở lại; một phần không có kết thúc được đóng lại; một tệp bị cắt cụt được đọc đến chỗ bị cắt; một DXF nhị phân bị cắt cụt được đọc đến giá trị nguyên vẹn cuối cùng. Khi một phần, một khối hay một đối tượng vẫn không đọc được, nó bị bỏ qua và được nêu tên, và việc đọc tiếp tục qua nó.
- DWG: các đối tượng không qua được kiểm tra hoặc không giải mã được sẽ bị bỏ, và một danh sách đối tượng bị mất được dựng lại bằng cách duyệt dữ liệu đối tượng.

Tệp trên đĩa không bị đổi. Bản vẽ được khôi phục mở ra ở trạng thái chưa lưu: lưu nó với một tên mới. Một tệp mà không đọc được gì cả sẽ bị từ chối, kèm lý do.

### LEGACYTEXT

Chuyển văn bản gõ bằng các phông tiếng Việt 8-bit cũ sang Unicode. Tên ngắn `TEXTTOUNICODE` và `VNTEXT`.

Các bản vẽ tiếng Việt cũ giữ văn bản của chúng như các ký tự Tây mà chỉ phông chữ mới biến thành tiếng Việt: văn bản TCVN3 trong các phông ABC (`.VnTime`, `.VnArial`, và các phông chữ hoa có tên kết thúc bằng `H`), và văn bản VNI trong các phông VNI (`VNI-Times`). CadCraft hiển thị văn bản như vậy đúng như cách nó đọc ngay khi bản vẽ mở, theo phông của kiểu văn bản, của đối tượng, hoặc của một đoạn trong văn bản đoạn; tệp vẫn giữ các ký tự cũ.

{{cmd:LEGACYTEXT}} cho biết có bao nhiêu văn bản được tìm thấy trong mỗi bảng mã, và hỏi `Chuyển … sang Unicode?`. `Có` viết lại từng văn bản (mô hình, tờ, khối, giá trị và định nghĩa thuộc tính), và cho các kiểu văn bản một phông Unicode (Times New Roman, Arial hoặc Courier New tùy loại phông cũ), trong một bước hoàn tác. Định dạng bên trong văn bản đoạn được giữ.

Khi không có văn bản nào dùng một phông đã biết (một kiểu đã mất tên phông), nó hỏi `Đọc các văn bản đã chọn theo [Tcvn3/Vni/Không]`: chọn bảng mã và chọn các văn bản. Văn bản đã là Unicode được để yên. Ghi đè văn bản kích thước và văn bản đa đường dẫn không được chuyển đổi.
