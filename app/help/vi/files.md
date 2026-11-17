---
title: Tệp: mở được gì, lưu được gì
summary: Các định dạng CadCraft mở, lưu và xuất, cái gì được giữ lại hoặc chuyển đổi, và tệp được lưu ở đâu.
keywords: xclip, clip, xclip boundary, bind clipped, dwg, dxf, pdf, r12, mở, lưu, xuất, nhập, định dạng, chuyển đổi, tải xuống, saveas, dxfout, lưu thành, dwg save, format, qsave, xref, xattach, bản vẽ liên kết, tham chiếu ngoài, bind, tải lại, detach
from: b8c5778d
---

## Tổng quan

| Định dạng | Mở | Lưu | Ghi chú |
|---|---|---|---|
| DXF (văn bản hoặc nhị phân, mọi phiên bản) | Có | Có, dưới dạng DXF R12, DXF 2000 hoặc DXF 2000 (nhị phân) | DXF nhị phân mở như DXF văn bản và lưu lại thành nhị phân. |
| DWG | Có | Có, dưới dạng DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 hoặc 2018) | Đọc và ghi bằng thư viện DWG riêng của CadCraft (tệp AutoCAD R13 đến 2018). Tệp DWG của bạn không bao giờ bị thay đổi. Tệp hỏng, hoặc phiên bản mà bộ đọc không xử lý, bị từ chối kèm thông báo. |
| PDF | Đưa một trang vào: dưới dạng nền (underlay) hoặc dạng đối tượng ([Nền PDF](topic:pdf-underlay)) | Có, bằng cách in | PDF vector của một tờ, hoặc của mô hình ở một tỷ lệ. |

Mỗi bản vẽ bạn mở (hoặc bắt đầu bằng {{ui:New}}) có một thẻ riêng phía trên vùng vẽ; một bản vẽ mới mà chưa ai chạm vào sẽ được dùng thay vì thêm thẻ. Bấm một thẻ để chuyển sang, {{ui:×}} của nó để đóng (CadCraft hỏi trước nếu có thay đổi chưa lưu), hoặc xếp các bản vẽ đang mở cạnh nhau: xem [Chia đôi màn hình](topic:split-screen).

## Mở bản vẽ

- Nhấn {{key:Mod+O}}, bấm {{ui:Open}}, hoặc gõ `OPEN`, rồi chọn tệp.
- Hoặc kéo tệp `.dwg` hoặc `.dxf` vào vùng vẽ.

Tệp được đọc bên trong trình duyệt của bạn. Tệp không được tải lên đâu cả. Lịch sử ghi có bao nhiêu đối tượng và lớp đã vào và mất bao lâu, và mục {{ui:Drawing}} của bảng bên trái hiển thị định dạng, ví dụ "DWG 2018 (AC1032)".

Bộ đọc DWG là một phần của CadCraft và được tải cùng với tệp DWG đầu tiên bạn mở sau khi trang tải xong (vài trăm KB), nên không có tải riêng nào phải chờ. Nó đọc tệp ở chế độ nền, nên trang vẫn phản hồi khi một DWG lớn đang mở.

DXF được đọc từng phần khoảng 4 MB, không bao giờ như một khối văn bản duy nhất, nên một DXF trên 512 MB vẫn mở được. Điều giới hạn là bộ nhớ máy tính của bạn: khi một DXF đang mở, hãy kỳ vọng nó dùng khoảng 16 đến 20 lần kích thước tệp (một DXF 100 MB với khoảng 690.000 đối tượng đã dùng khoảng 1.5 GB trong thử nghiệm của chúng tôi).

### Những gì được đưa vào

- Đường thẳng, cung, vòng tròn, đa tuyến (có đoạn cung), elip, điểm, văn bản và văn bản nhiều dòng, solid, tô bóng (các mẫu chuẩn được vẽ thành đường, các mẫu khác thành một màu phẳng), tham chiếu khối với thuộc tính của chúng (giá trị bạn có thể sửa; xem [Thuộc tính khối](topic:attributes)), kích thước, và các tờ với khung nhìn của chúng.
- Spline vào như spline (bậc, điểm điều khiển, nút, trọng số, điểm khớp); xem [Spline và đa tuyến](topic:splines).
- Đa dẫn (multileader) có một đường dẫn và văn bản vào như đa dẫn CadCraft mà bạn có thể sửa (xem {{cmd:MLEADER}}). Các loại khác (có khối, nhiều đường dẫn hoặc đường cong) được vẽ như chương trình khác đã vẽ và di chuyển như một khối; lịch sử ghi có bao nhiêu.
- Hình ảnh (pictures) hiển thị dạng khung với tên tệp của hình cho đến khi bạn cho CadCraft tệp đó bằng {{cmd:IMAGE}}: xem [Hình ảnh trong bản vẽ](topic:pictures#show-the-pictures-a-dwg-uses). Vùng xóa (wipeout) hiển thị dạng khung của nó, và những gì nằm dưới vẫn thấy được.
- Bảng trong DWG vào như chương trình khác đã vẽ chúng.
- Mặt 3D trong không gian mô hình vào trên thẻ {{ui:3D}}, không phải là đối tượng 2D; những mặt bên trong khối cũng vậy, mỗi tham chiếu khối một lần trong mô hình. Trong khối và trên tờ, chúng cũng được vẽ phẳng, như đường viền. Xem [Mô hình 3D](topic:3d-solids).
- Lớp giữ màu, bật, đóng băng, khóa và thiết lập in. DEFPOINTS không bao giờ được in.
- Kích thước trở thành kích thước CadCraft thật, có thể sửa, khi các điểm của chúng đọc được. Lúc đầu chúng hiển thị đúng như chương trình khác đã vẽ; ngay khi bạn đổi một kích thước, CadCraft vẽ lại theo kiểu riêng của nó.
- Mỗi bố cục trở thành một thẻ tờ. Trong chương trình khác, mỗi bố cục có một khung nhìn đầu tiên ẩn chính là tờ đó; CadCraft bỏ khung đó đi.

### Những gì chưa vào được

Mọi thứ CadCraft không vẽ được đều được đếm, không phải đoán. Hộp "Về tệp này" trong bảng bên trái liệt kê chúng dưới "Chưa hiển thị:" kèm từng loại đối tượng và số lượng. Các trường hợp thường gặp là bảng trong DXF, lưới, và khối 3D bên trong khối. Khối 3D, vùng và thân trong không gian mô hình hiển thị trên thẻ 3D (xem [Mô hình 3D](topic:3d-solids#solids-from-other-programs)). Khung nhìn bị xoay trong tệp hiển thị xoay như ở đó và giữ độ xoay khi bạn lưu; UCS hiện tại, các UCS đặt tên và một góc nhìn đã xoay cũng vậy.

Văn bản được vẽ bằng một kiểu phông Helvetica. Nhãn vừa trên một dòng trong phông hẹp hơn của chương trình gốc có thể xuống thành hai dòng trong CadCraft.

## Lưu

Có ba cách lưu. Mỗi cách tải xuống một bản sao.

- **Lưu**: nhấn {{key:Mod+S}}, bấm {{ui:Save}}, hoặc gõ `SAVE` (cũng là `QSAVE`). Nó lưu theo định dạng của bản vẽ: DWG nếu bạn mở DWG, DXF nếu bạn mở DXF. DWG giữ phiên bản nó đến (tệp 2018 lưu thành 2018). Bản vẽ mới dùng định dạng và phiên bản DWG bạn chọn gần nhất trong {{ui:Save as}} trên trình duyệt này; nếu chưa chọn bao giờ thì là DWG theo định dạng AutoCAD 2000.
- **Lưu thành**: nhấn {{key:Mod+Shift+S}}, bấm {{ui:Save as}}, hoặc gõ `SAVEAS`. Hộp thoại {{ui:Save a copy as}} đưa ra {{ui:DWG}}, một danh sách {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 hoặc 2000), {{ui:DXF R12}} và {{ui:DXF 2000}}, mỗi cái kèm tên tệp nó sẽ đặt, và định dạng cùng phiên bản hiện tại của bản vẽ đã được chọn sẵn. Bấm {{ui:Save}} để tải xuống, hoặc {{ui:Cancel}} (hoặc {{key:Esc}}) để không lưu gì; khi đó lịch sử ghi "Chưa lưu." Lựa chọn của bạn được giữ lại: {{key:Mod+S}} dùng nó cho bản vẽ này từ đó về sau, và bản vẽ mới trên trình duyệt này bắt đầu với nó.
- **DXFOUT**: gõ `DXFOUT`. Nó luôn tải xuống một bản sao DXF R12, và lần {{key:Mod+S}} tiếp theo vẫn lưu theo định dạng riêng của bản vẽ.

Trình duyệt tải xuống `<tên bản vẽ>.dwg` hoặc `<tên bản vẽ>.dxf`. Mỗi lần lưu là một **tải xuống mới**; tệp bạn đã mở không bao giờ bị ghi đè hay thay đổi. Lịch sử xác nhận điều đó, ví dụ "Đã lưu bản sao thành Plan.dwg (DWG (AutoCAD 2018)). Plan.dxf gốc của bạn không thay đổi." Với DXF, nó ghi "(DXF R12, mở được trong mọi chương trình CAD)". Các dòng bên dưới liệt kê mọi thứ đã thay đổi trên đường đi.

Khi CadCraft chạy trong ứng dụng máy tính, việc lưu hoạt động như trong các chương trình máy tính khác: {{key:Mod+S}} ghi bản vẽ trở lại tệp bạn đã mở, theo định dạng và phiên bản của nó, và lịch sử cho biết đã lưu ở đâu. {{ui:Save as}} và các lệnh xuất hiển thị hộp thoại lưu của hệ thống, và một tệp `.dwg`, `.dxf` hoặc `.ccsheets` bạn nhấp đúp sẽ mở trong CadCraft.

Với PDF, hãy in thay vì lưu (xem bên dưới).

## DWG giữ và thay đổi gì

CadCraft tự ghi DWG bên trong trình duyệt của bạn, bằng cùng thư viện DWG mà nó dùng để đọc. Chọn phiên bản trong {{ui:Save as}}: định dạng AutoCAD 2000 (phiên bản tệp AC1015) mở được trong nhiều chương trình nhất, kể cả các chương trình cũ; các định dạng mới hơn (2004, AC1018, đến 2018, AC1032) cũng giữ màu thật. Không có gì được tải lên, và lưu DWG hoạt động khi ngoại tuyến.

Mỗi phiên bản được kiểm tra bằng cách đọc lại các tệp đã lưu với bộ đọc DWG của ba chương trình khác và của chính CadCraft. Một tệp DWG của CadCraft chưa từng được mở trong chính AutoCAD.

### DWG giữ lại

- Đường thẳng, cung, vòng tròn, elip, điểm, và đa tuyến với các đoạn cung của chúng.
- Văn bản một dòng với căn lề và hệ số độ rộng.
- Văn bản nhiều dòng và văn bản tự xuống dòng, như văn bản nhiều dòng. Chương trình khác sẽ xuống dòng lại theo cùng độ rộng.
- Màu đối tượng: theo lớp, theo khối, 255 màu chuẩn, và màu thật trong định dạng 2004 trở lên.
- Lớp với màu, kiểu đường, độ dày nét và các thiết lập bật, đóng băng, khóa và in; kiểu đường, độ dày nét và tỷ lệ kiểu đường riêng của đối tượng; các mẫu kiểu đường và tỷ lệ kiểu đường của bản vẽ.
- Đơn vị bản vẽ và định dạng độ dài (thập phân, feet và inch, phân số…).
- Khối với điểm gốc và định nghĩa thuộc tính, kể cả thuộc tính ẩn, hằng số và đặt sẵn.
- Tham chiếu khối với tỷ lệ, góc xoay và giá trị thuộc tính.
- Tô đặc, và tô bóng theo mẫu với mẫu, tỷ lệ và góc của chúng (các đường của chính mẫu, để chương trình khác vẽ đúng các đường CadCraft vẽ).
- Kích thước, là kích thước thật: các chương trình khác đo lại chúng khi bị kéo giãn. Mỗi kích thước giữ thiết lập riêng (chiều cao chữ, kích thước mũi tên, số thập phân, định dạng độ dài) và văn bản của nó, và mang bản vẽ sao chép mà mọi kích thước DWG đều có.
- Tờ (bố cục): mỗi tờ với khổ giấy và đơn vị, những gì được vẽ trên đó, và các khung nhìn với góc nhìn và tỷ lệ của chúng.
- Góc nhìn đặt tên.
- Đa dẫn, như đa dẫn.
- Tên lớp và tên khối như bạn gõ, chữ hoa và thường. (DXF R12 ghi bằng chữ hoa.)

### DWG thay đổi

Mỗi mục sau được liệt kê trong lịch sử sau khi bạn lưu, khi nó áp dụng cho bản vẽ.

| Trong CadCraft | Trong DWG đã lưu |
|---|---|
| Màu thật (chọn bằng bộ chọn màu), trong định dạng 2000 | Màu chuẩn gần nhất: định dạng 2000 chỉ có 255 màu. Lưu thành 2004 trở lên để giữ chúng |
| Góc nhìn đặt tên của một tờ | Góc nhìn không gian giấy: DWG không cho biết tờ nào, nên khi CadCraft mở lại tệp, chúng thuộc về tờ đầu tiên |
| Văn bản nhiều dòng với hệ số độ rộng | Độ rộng chữ bình thường: trong DWG, hệ số độ rộng chỉ áp dụng cho văn bản một dòng |
| Tên lớp hoặc tên khối có ký tự DWG không cho phép | Đổi: một tên từ bản vẽ liên kết như `Base\|Walls` thành `Base$0$Walls` (cách việc gắn bản vẽ liên kết đặt tên), và các ký tự khác thành `_` |

### Vì sao R12, và cái gì được chuyển đổi

Khi bạn lưu thành DXF, CadCraft ghi DXF R12, phiên bản mà mọi chương trình CAD đều mở được. Nó cũ hơn một số tính năng, nên một vài thứ được ghi dưới dạng đơn giản hơn:

| Trong CadCraft | Trong tệp R12 đã lưu |
|---|---|
| Văn bản nhiều dòng | Một đối tượng văn bản cho mỗi dòng |
| Elip | Đa tuyến đi theo elip |
| Tô bóng (từ tệp đã mở) | Chỉ đường viền của chúng |
| Màu thật (chọn bằng bộ chọn màu) | Màu chuẩn gần nhất |
| Độ dày nét, và tỷ lệ kiểu đường riêng của đối tượng | Bỏ đi: R12 không có cả hai (kiểu đường được giữ lại) |
| Tên lớp và tên khối | Viết bằng chữ hoa; khoảng trắng và ký tự khác thành `_`, và tên bị cắt còn 31 ký tự ("Title block" thành `TITLE_BLOCK`) |
| Lớp được đặt không in | Các chương trình khác sẽ in chúng (CadCraft nhớ thiết lập khi bản vẽ có tờ) |
| Kích thước | Kích thước thật với khối vẽ riêng, để chương trình khác hiển thị như bạn thấy |
| Đa dẫn | Các đường, mũi tên và văn bản mà chúng vẽ |
| Góc nhìn đặt tên | Được giữ lại, tên viết hoa; góc nhìn của tờ quay về tờ đầu tiên |
| Nhiều tờ | Tờ đầu tiên là không gian giấy mà mọi chương trình đều hiển thị; các tờ khác được giữ như khối đặt tên `CCLAYOUT_1`, `CCLAYOUT_2` … mà CadCraft biến lại thành tờ khi mở tệp |

Lịch sử liệt kê từng mục áp dụng cho bản vẽ của bạn.

:::tip
Để làm việc trên một bản vẽ qua nhiều ngày, hãy lưu thành DXF và mở DXF đó lần sau. Mọi thứ CadCraft vẽ được đều giữ nguyên qua vòng lưu và mở lại, kể cả kích thước, khối và mọi tờ.
:::

## Bản vẽ liên kết (tham chiếu ngoài)

{{cmd:XATTACH}} (`XA`, hoặc {{ui:Blocks}} › {{ui:More}} › {{ui:Link a drawing (xref)}}) liên kết một DWG hoặc DXF khác: chọn tệp, rồi bấm nơi nó sẽ đặt ({{key:Enter}} đặt tại 0,0). Nó vào như một khối đặt tên theo tệp, ở đúng tỷ lệ khi hai bản vẽ có đơn vị khác nhau. Các lớp và khối của nó giữ tên, với tên liên kết đặt phía trước — `Plan|Walls`, `Plan|Door` — nên chúng không bao giờ lẫn với của bạn: bật và tắt, đóng băng hoặc khóa các lớp liên kết như lớp của chính bạn. Một liên kết chỉ đọc: thay đổi bản vẽ kia rồi tải lại nó. Những gì bạn đặt cho lớp của liên kết (màu, kiểu đường, độ dày nét, bật/tắt, đóng băng, khóa, in) được giữ khi bạn tải lại, khi bạn lưu bản vẽ thành DWG trong khi liên kết vẫn là liên kết, và khi một bản vẽ khác liên kết tới bản này.

{{cmd:XREF}} (`XR`): `?` liệt kê các liên kết (đã tải hay chưa, tệp nào, bao nhiêu tham chiếu); `A` gắn thêm; `R` tải lại một liên kết từ tệp của nó (chọn lại tệp: trình duyệt không tự truy cập được thư mục của bạn); `B` chuyển một liên kết thành các khối và lớp thông thường đặt tên `Plan$0$Walls` (bind); `D` gỡ một liên kết (tham chiếu và lớp của nó mất). Mỗi thao tác là một bước hoàn tác.

{{cmd:XCLIP}} (`XC`) cắt xén tham chiếu khối và liên kết: chọn chúng, `N` cho một ranh giới mới, rồi `R` và hai góc hoặc `P` và các điểm của một đa giác ({{key:Enter}} khép kín); `D` gỡ cắt xén. Chỉ những gì nằm trong ranh giới mới hiển thị và được in, và cắt xén di chuyển theo tham chiếu. DWG và DXF 2000 giữ cắt xén; DXF R12 lưu tham chiếu nguyên vẹn và thông báo như vậy. Khi bạn gắn (bind) một liên kết có tham chiếu bị cắt xén, {{cmd:XREF}} `B` hỏi: `A` gắn tất cả, `C` chỉ giữ phần bị cắt của mỗi tham chiếu (đường và cung bị cắt tại ranh giới; văn bản và khối lồng nhau vẫn giữ lại khi điểm chèn nằm bên trong).

Bản vẽ bạn mở có thể liên kết tới các tệp mà CadCraft không thấy: nó cho biết có bao nhiêu tệp chưa được tải. Dùng {{cmd:XREF}}, `R` và chọn từng tệp để xem chúng.

Khi bạn lưu, một liên kết đã tải được **gắn cứng** (bound) vào tệp (các chương trình khác thấy các khối và lớp thông thường đặt tên `Plan$0$…`), và lịch sử ghi điều đó. Một liên kết chưa tải vẫn là liên kết tới tệp của nó, trong DWG và DXF.

## Mở trong 3D

{{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} ({{cmd:OPENIN3D}}) mở bản vẽ trong ứng dụng mô hình hóa 3D, trong một thẻ mới, dưới dạng DWG, mà không tải lên. Các thay đổi làm ở đó vẫn ở đó; hãy lưu chúng ở đó. Mục menu chỉ hiển thị khi ứng dụng kia có thể nhận bản vẽ được chuyển giao.

## In PDF

Nhấn {{key:Mod+P}}, bấm {{ui:Plot}}, hoặc gõ `PLOT`. PDF được tạo bên trong trình duyệt và tải xuống, hoặc mở trong một thẻ mới để in. Xem [In ra PDF](topic:plot-pdf).

## Tệp được lưu ở đâu

Mỗi lần lưu và mỗi lần in đều là một tải xuống, nên tệp nằm ở bất kỳ nơi nào trình duyệt đặt các tải xuống: thường là thư mục Downloads. Để chọn thư mục mỗi lần, đổi thiết lập tải xuống trong trình duyệt; [Trình duyệt và máy tính](common:browsers) chỉ cách làm.

Không có gì bạn mở hoặc lưu được gửi cho chúng tôi. Xem [Tệp của bạn đi đâu](common:your-files).

## Tệp dự án PLN và PLA

CadCraft mở bản vẽ DWG và DXF, không mở tệp riêng của Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Khi mở một tệp như vậy, CadCraft cho bạn biết nó là gì. Trong Archicad, lưu các góc nhìn hoặc tờ bạn cần thành DWG rồi mở chúng ở đây, hoặc xuất mô hình thành IFC và mở trong BimCraft. Khi BimCraft có thể tiếp nhận tệp, CadCraft đưa ra {{ui:Open in BimCraft}}.

## Nếu trang đóng trước khi bạn lưu

CadCraft giữ một bản sao của mọi bản vẽ bạn thay đổi, chỉ trong trình duyệt này, ngay sau khi bạn ngừng chỉnh sửa. Nếu thẻ đóng, trình duyệt dừng hoặc máy tính khởi động lại trước khi bạn lưu, lần khởi động tiếp theo CadCraft hỏi **Khôi phục công việc của bạn?**: {{ui:Recover}} mở lại bản vẽ, chưa lưu, trong thẻ riêng của nó. Lưu bản vẽ sẽ xóa bản sao của nó. Xem [Khôi phục công việc của bạn](common:recover).

## Trực tuyến và ngoại tuyến

Mở, vẽ, lưu (DWG và DXF) và in đều diễn ra trên máy tính của bạn, nên chúng hoạt động không cần kết nối khi CadCraft đã tải xong.

Để dùng CadCraft hoàn toàn không có kết nối, bấm {{ui:Save for offline}} trên thanh phía trên khi bạn đang trực tuyến. Nhãn đếm lên ("Đang lưu 40 trên 212") và kết thúc ở "Sẵn sàng ngoại tuyến". Bản đã lưu gồm bộ đọc DWG, tổng khoảng 5 MB, nên **tệp DWG cũng mở được khi ngoại tuyến** sau khi đã lưu. Bấm lại nút để {{ui:Save again (get the newest version)}} hoặc {{ui:Remove the offline copy}}. "Không thể lưu" có nghĩa là một số tệp không tải xuống được: kiểm tra kết nối và bấm để thử lại. "Không có chế độ ngoại tuyến" có nghĩa là cửa sổ trình duyệt này không thể giữ một bản sao (cửa sổ riêng tư và một số máy tính được quản lý).

Nếu không có bản đã lưu, bộ đọc DWG được tải lần đầu bạn mở một DWG sau khi trang tải xong, nên mở DWG khi ngoại tuyến có thể thất bại; tệp DXF không bao giờ cần nó. Đừng tải lại trang khi ngoại tuyến trừ khi CadCraft đã được lưu.

Xem [Làm việc ngoại tuyến](common:offline) để biết chi tiết.

:::offline
Bạn đang ngoại tuyến. Bản vẽ lưu được thành DWG hoặc DXF và in bình thường, và tệp DXF mở được. Tệp DWG mở được nếu CadCraft hiển thị "Sẵn sàng ngoại tuyến", hoặc nếu bộ đọc DWG đã được tải trong thẻ này.
:::

## Ràng buộc trong tệp

Ràng buộc và tham số (xem [Ràng buộc bản vẽ](topic:constraints)) được lưu trong cả DWG và DXF. Mỗi đối tượng có ràng buộc mang một ghi chú nhỏ của CadCraft (dữ liệu mở rộng), và một khối không dùng tên `CADCRAFT_PARAMETRIC` giữ các ràng buộc và bảng tham số. Các chương trình khác mở bản vẽ bình thường và bỏ qua cả hai; chúng có thể xóa khối không dùng khi dọn dẹp. Các ghi chú tham chiếu đối tượng bằng khóa riêng của chúng, không phải handle của tệp, nên một chương trình đánh số lại handle sẽ không làm hỏng chúng. Khi chương trình khác đã xóa hoặc thay đổi một đối tượng có ràng buộc, CadCraft bỏ các ràng buộc trên đối tượng đó khi mở tệp và cho biết có bao nhiêu. Một tệp không có chúng mở ra không có ràng buộc.

Một phác thảo xuất từ phần mềm mô hình chi tiết (`.json`) cũng mở được: xem [Chuyển phác thảo qua lại với các phần mềm mô hình chi tiết khác](topic:solidworks-sketches).

## Chưa có sẵn

- Đa dẫn dưới dạng đối tượng đa dẫn trong một DXF đã lưu (R12 không có: chúng được lưu thành những gì chúng vẽ).
- Hình ảnh trong một DXF đã lưu (chúng lưu thành khung; DWG giữ chúng như hình ảnh), và vùng xóa (wipeout) che những gì ở dưới.
- Lưu một phiên bản DXF mới hơn 2000.
- Lưu lên đám mây và đồng bộ giữa các máy tính.

Xem [Chưa xây dựng](topic:not-built-yet) để có danh sách đầy đủ.
