---
title: Tệp: cái gì mở được, cái gì lưu được
summary: Các định dạng CadCraft mở, lưu và xuất, những gì được giữ hoặc chuyển đổi, và tệp đi đâu.
keywords: xclip, clip, đường biên xclip, gắn liền phần cắt, dwg, dxf, pdf, r12, mở, lưu, xuất, nhập, định dạng, chuyển đổi, tải xuống, saveas, dxfout, lưu thành, lưu dwg, qsave, xref, xattach, bản vẽ liên kết, tham chiếu ngoài, gắn liền, tải lại, gỡ liên kết
from: 6d68b34e
---

## Nhìn nhanh

| Định dạng | Mở | Lưu | Ghi chú |
|---|---|---|---|
| DXF (văn bản, mọi phiên bản) | Có | Có, dạng DXF R12 hoặc DXF 2000 | DXF nhị phân bị từ chối: hãy lưu nó thành DXF văn bản trước. |
| DWG | Có | Có, dạng DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 hoặc 2018) | Được đọc và ghi bằng thư viện DWG riêng của CadCraft (tệp AutoCAD R13 đến 2018). DWG của bạn không bao giờ bị thay đổi. Tệp hỏng, hoặc phiên bản mà trình đọc không xử lý được, bị từ chối kèm một thông báo. |
| PDF | Đưa một trang vào: làm nền hoặc làm đối tượng ([Nền PDF](topic:pdf-underlay)) | Có, bằng cách in | PDF vector của một tờ, hoặc của mô hình theo một tỷ lệ. |

Mỗi bản vẽ bạn mở (hoặc bắt đầu bằng {{ui:Mới}}) có một thẻ riêng phía trên vùng vẽ; một bản vẽ mới chưa ai đụng đến sẽ được dùng lại thay vì thêm một thẻ. Nhấp một thẻ để chuyển, dấu {{ui:×}} của nó để đóng (CadCraft hỏi trước nếu có thay đổi chưa lưu), hoặc xếp các bản vẽ đang mở cạnh nhau: xem [Chia màn hình](topic:split-screen).

## Mở một bản vẽ

- Nhấn {{key:Mod+O}}, nhấp {{ui:Mở}}, hoặc gõ `OPEN`, rồi chọn tệp.
- Hoặc kéo một tệp `.dwg` hay `.dxf` vào vùng vẽ.

Tệp được đọc ngay trong trình duyệt của bạn. Nó không được tải lên đâu cả. Phần lịch sử báo có bao nhiêu đối tượng và lớp được đưa vào và mất bao lâu, và mục {{ui:Bản vẽ}} của bảng bên trái hiển thị định dạng, ví dụ "DWG 2018 (AC1032)".

Trình đọc DWG là một phần của CadCraft và được tải cùng DWG đầu tiên bạn mở sau khi trang tải (vài trăm KB), nên không có bản tải riêng nào phải chờ. Nó đọc tệp ở chế độ nền, nên trang vẫn phản hồi trong khi một DWG lớn đang mở.

### Những gì được đưa vào

- Đường thẳng, cung tròn, vòng tròn, đa tuyến (có đoạn cung), elip, điểm, văn bản và văn bản nhiều dòng, khối đặc, hình tô, tham chiếu khối cùng thuộc tính của chúng (các giá trị bạn sửa được; xem [Thuộc tính khối](topic:attributes)), kích thước, và các bố cục cùng khung nhìn của chúng. (Hình tô: các mẫu chuẩn được vẽ bằng các đường của chúng, các mẫu khác là một mảng màu phẳng.)
- Spline được đưa vào dưới dạng spline (bậc, điểm điều khiển, nút, trọng số, điểm khớp); xem [Spline và đa tuyến](topic:splines).
- Đường dẫn nhiều có một đường dẫn và văn bản được đưa vào dưới dạng đường dẫn nhiều của CadCraft mà bạn sửa được (xem {{cmd:MLEADER}}). Những loại khác (có khối, nhiều đường dẫn hoặc đường cong) được vẽ như chương trình kia đã vẽ và di chuyển như một khối; phần lịch sử cho biết bao nhiêu cái.
- Hình ảnh hiện thành một khung kèm tên tệp ảnh cho đến khi bạn đưa tệp cho CadCraft bằng {{cmd:IMAGE}}: xem [Hình ảnh trong bản vẽ](topic:pictures#show-the-pictures-a-dwg-uses). Wipeout hiện thành khung của chúng, và những gì bên dưới vẫn nhìn thấy.
- Bảng trong DWG được đưa vào như chương trình kia đã vẽ.
- Mặt 3D trong không gian mô hình được đưa vào thẻ {{ui:3D}}, không phải làm đối tượng 2D; những mặt bên trong khối cũng vậy, mỗi tham chiếu khối trong mô hình một lần. Trong một khối và trên một tờ, chúng cũng được vẽ phẳng, dưới dạng đường viền. Xem [Dựng mô hình 3D](topic:3d-solids).
- Lớp giữ màu, trạng thái bật, đóng băng, khóa và cài đặt in. DEFPOINTS không bao giờ được in.
- Kích thước trở thành kích thước CadCraft thật, sửa được, nếu đọc được các điểm của chúng. Ban đầu chúng hiện đúng như chương trình kia đã vẽ; ngay khi bạn đổi một cái, CadCraft vẽ lại nó theo kiểu riêng.
- Mỗi bố cục trở thành một thẻ tờ. Trong chương trình kia, mỗi bố cục có một khung nhìn đầu tiên ẩn chính là tờ giấy; CadCraft bỏ qua khung nhìn đó.

### Những gì chưa được đưa vào

Bất cứ thứ gì CadCraft không vẽ được đều được đếm, không đoán mò. Hộp "About this file" ở bảng bên trái liệt kê chúng dưới dạng "Not shown yet:" theo sau là từng loại đối tượng và số lượng. Các trường hợp điển hình là bảng trong DXF, lưới (mesh), và khối đặc 3D bên trong khối. Khối đặc 3D, vùng (region) và thân (body) trong không gian mô hình hiện trên thẻ 3D (xem [Dựng mô hình 3D](topic:3d-solids#solids-from-other-programs)). Khung nhìn bị xoay trong tệp hiện bị xoay, như ở đó, và giữ độ xoay khi bạn lưu; UCS hiện hành, các UCS đã đặt tên và khung nhìn bị xoay cũng vậy.

Văn bản được vẽ bằng một phông kiểu Helvetica. Một nhãn vừa trong một dòng ở phông hẹp hơn của chương trình gốc có thể xuống thành hai dòng trong CadCraft.

## Lưu

Có ba cách lưu. Mỗi cách tải xuống một bản sao.

- **Lưu**: nhấn {{key:Mod+S}}, nhấp {{ui:Lưu}}, hoặc gõ `SAVE` (cũng là `QSAVE`). Nó lưu theo định dạng của bản vẽ: DWG nếu bạn mở DWG, DXF nếu bạn mở DXF. DWG giữ phiên bản nó có khi vào (tệp 2018 lưu thành 2018). Bản vẽ mới dùng định dạng và phiên bản DWG bạn chọn lần gần nhất trong Lưu thành trong trình duyệt này; nếu bạn chưa chọn bao giờ, là DWG theo định dạng AutoCAD 2000.
- **Lưu thành**: nhấn {{key:Mod+Shift+S}}, nhấp {{ui:Lưu thành}}, hoặc gõ `SAVEAS`. Hộp thoại {{ui:Lưu bản sao thành}} đưa ra {{ui:DWG}}, kèm danh sách {{ui:Phiên bản}} (AutoCAD 2018, 2013, 2010, 2007, 2004 hoặc 2000), {{ui:DXF R12}} và {{ui:DXF 2000}}, mỗi cái kèm tên tệp nó sẽ đặt, và định dạng cùng phiên bản hiện tại của bản vẽ đã được chọn sẵn. Nhấp {{ui:Lưu}} để tải xuống, hoặc {{ui:Hủy}} (hoặc {{key:Esc}}) để không lưu gì; khi đó phần lịch sử ghi "Not saved." Lựa chọn của bạn được giữ: từ đó {{key:Mod+S}} dùng nó cho bản vẽ này, và các bản vẽ mới trong trình duyệt này bắt đầu với nó.
- **DXFOUT**: gõ `DXFOUT`. Nó luôn tải xuống một bản sao DXF R12, và lần {{key:Mod+S}} tiếp theo vẫn lưu theo định dạng riêng của bản vẽ.

Trình duyệt tải xuống `<tên bản vẽ>.dwg` hoặc `<tên bản vẽ>.dxf`. Mỗi lần lưu là một **lần tải xuống mới**; tệp bạn đã mở không bao giờ bị ghi đè hay thay đổi. Phần lịch sử xác nhận điều đó, ví dụ "Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged." Với DXF nó ghi "(DXF R12, opens in any CAD program)". Các dòng bên dưới liệt kê mọi thứ đã thay đổi trong quá trình lưu.

Khi CadCraft chạy trong ứng dụng máy tính để bàn, việc lưu hoạt động như các chương trình máy tính khác: {{key:Mod+S}} ghi bản vẽ trở lại tệp bạn đã mở, theo định dạng và phiên bản riêng của nó, và phần lịch sử cho biết nó đã lưu ở đâu. {{ui:Lưu thành}} và các lệnh xuất hiện hộp thoại lưu của hệ thống, và tệp `.dwg`, `.dxf` hay `.ccsheets` bạn nhấp đúp sẽ mở trong CadCraft.

Với PDF, hãy in (xem bên dưới).

## DWG giữ và thay đổi gì

CadCraft tự ghi DWG, ngay trong trình duyệt của bạn, bằng cùng thư viện DWG mà nó dùng để đọc. Chọn phiên bản trong Lưu thành: định dạng AutoCAD 2000 (phiên bản tệp AC1015) mở được trong nhiều chương trình nhất, kể cả cũ; các định dạng mới hơn (2004, AC1018, đến 2018, AC1032) còn giữ màu thật. Không có gì được tải lên, và việc lưu DWG hoạt động khi ngoại tuyến.

Mỗi phiên bản được kiểm tra bằng cách đọc lại các tệp đã lưu với trình đọc DWG của ba chương trình khác và với chính CadCraft. Một DWG của CadCraft chưa được mở trong chính AutoCAD.

### DWG giữ gì

- Đường thẳng, cung tròn, vòng tròn, elip, điểm, và đa tuyến cùng đoạn cung của chúng.
- Văn bản một dòng với căn lề và hệ số độ rộng.
- Văn bản nhiều dòng và văn bản xuống dòng, dưới dạng văn bản nhiều dòng. Chương trình kia xuống dòng lại từ cùng độ rộng.
- Màu đối tượng: theo lớp, theo khối, 255 màu chuẩn, và màu thật trong định dạng 2004 trở lên.
- Lớp với màu, kiểu đường, độ dày nét và các cài đặt bật, đóng băng, khóa, in; kiểu đường, độ dày nét và tỷ lệ kiểu đường riêng của đối tượng, các mẫu kiểu đường và tỷ lệ kiểu đường của bản vẽ.
- Đơn vị bản vẽ và định dạng chiều dài (thập phân, feet và inch, phân số…).
- Khối với điểm gốc và định nghĩa thuộc tính, kể cả loại ẩn, hằng và đặt sẵn.
- Tham chiếu khối với tỷ lệ, góc xoay và giá trị thuộc tính.
- Hình tô đặc, và hình tô mẫu với mẫu, tỷ lệ và góc (chính các đường của mẫu, để chương trình khác vẽ đúng các đường như CadCraft).
- Kích thước, dưới dạng kích thước thật: các chương trình khác đo lại chúng khi bị kéo giãn. Mỗi kích thước giữ cài đặt riêng (chiều cao chữ, cỡ mũi tên, số thập phân, định dạng chiều dài) và văn bản của nó, và mang theo bản vẽ sẵn mà mọi kích thước DWG đều có.
- Các tờ (bố cục): mỗi tờ với khổ giấy và đơn vị, những gì được vẽ trên đó, và các khung nhìn cùng góc nhìn và tỷ lệ.
- Khung nhìn đặt tên.
- Đường dẫn nhiều, dưới dạng đường dẫn nhiều.
- Tên lớp và khối đúng như bạn gõ, chữ hoa chữ thường. (DXF R12 ghi chúng bằng chữ hoa.)

### DWG thay đổi gì

Mỗi thay đổi dưới đây được liệt kê trong lịch sử sau khi bạn lưu, khi nó áp dụng cho bản vẽ của bạn.

| Trong CadCraft | Trong DWG đã lưu |
|---|---|
| Màu thật (chọn bằng bộ chọn màu), trong định dạng 2000 | Màu chuẩn gần nhất: định dạng 2000 chỉ có 255 màu. Lưu thành 2004 trở lên để giữ chúng |
| Khung nhìn đặt tên của một tờ | Khung nhìn không gian giấy: DWG không nói tờ nào, nên khi CadCraft mở lại tệp, chúng thuộc về tờ đầu tiên |
| Văn bản nhiều dòng có hệ số độ rộng | Độ rộng chữ bình thường: trong DWG hệ số độ rộng chỉ áp dụng cho văn bản một dòng |
| Tên lớp hoặc khối có ký tự DWG không cho phép | Bị đổi: tên từ bản vẽ liên kết như `Base\|Walls` thành `Base$0$Walls` (cách gắn liền một bản vẽ liên kết đặt tên), và các ký tự khác thành `_` |

### Vì sao là R12, và cái gì được chuyển đổi

Khi bạn lưu thành DXF, CadCraft ghi DXF R12, phiên bản mà mọi chương trình CAD đều mở được. Nó cũ hơn một số tính năng, nên vài thứ được ghi ở dạng đơn giản hơn:

| Trong CadCraft | Trong tệp R12 đã lưu |
|---|---|
| Văn bản nhiều dòng | Mỗi dòng một đối tượng văn bản |
| Elip | Đa tuyến bám theo elip |
| Hình tô (từ tệp đã mở) | Chỉ đường viền của chúng |
| Màu thật (chọn bằng bộ chọn màu) | Màu chuẩn gần nhất |
| Độ dày nét, và tỷ lệ kiểu đường riêng của đối tượng | Bị bỏ: R12 không có cả hai (kiểu đường được giữ) |
| Tên lớp và khối | Ghi bằng chữ hoa; dấu cách và ký tự khác thành `_`, và tên bị cắt còn 31 ký tự ("Title block" thành `TITLE_BLOCK`) |
| Lớp được đặt không in | Chương trình khác sẽ in chúng (CadCraft nhớ cài đặt khi bản vẽ có tờ) |
| Kích thước | Kích thước thật với khối vẽ riêng của chúng, để chương trình khác hiện chúng như bạn thấy |
| Đường dẫn nhiều | Các đường, mũi tên và văn bản mà chúng vẽ |
| Khung nhìn đặt tên | Được giữ, tên bằng chữ hoa; khung nhìn của một tờ quay về tờ đầu tiên |
| Nhiều tờ | Tờ đầu tiên là không gian giấy mà mọi chương trình hiển thị; các tờ khác được giữ thành khối tên `CCLAYOUT_1`, `CCLAYOUT_2` … mà CadCraft biến lại thành tờ khi mở tệp |

Phần lịch sử liệt kê từng thay đổi đã áp dụng cho bản vẽ của bạn.

:::tip
Để tiếp tục làm một bản vẽ trong nhiều ngày, hãy lưu thành DXF và lần sau mở DXF đó. Mọi thứ CadCraft vẽ được đều qua được vòng đi và về, gồm kích thước, khối và mọi tờ.
:::

## Bản vẽ liên kết (tham chiếu ngoài)

{{cmd:XATTACH}} (`XA`, hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Liên kết bản vẽ (xref)}}) liên kết một DWG hoặc DXF khác: chọn tệp, rồi nhấp nơi nó đặt ({{key:Enter}} đặt nó ở 0,0). Nó vào dưới dạng một khối đặt tên theo tệp, đúng tỷ lệ khi hai bản vẽ có đơn vị khác nhau. Các lớp và khối của nó giữ tên kèm tên liên kết ở phía trước, `Plan|Walls`, `Plan|Door`, nên chúng không bao giờ lẫn với của bạn: bật tắt, đóng băng hoặc khóa các lớp liên kết như lớp của bạn. Liên kết chỉ để đọc: hãy sửa bản vẽ kia rồi tải lại. Những gì bạn đặt trên các lớp của liên kết (màu, kiểu đường, độ dày nét, bật/tắt, đóng băng, khóa, in) được giữ khi bạn tải lại, khi bạn lưu bản vẽ thành DWG trong lúc liên kết vẫn là liên kết, và khi một bản vẽ khác liên kết bản vẽ này.

{{cmd:XREF}} (`XR`): `?` liệt kê các liên kết (đã tải hay chưa, tệp nào, bao nhiêu tham chiếu); `A` gắn; `R` tải lại một liên kết từ tệp của nó (chọn lại tệp: trình duyệt không tự vào được thư mục của bạn); `B` gắn liền một liên kết (nó thành khối và lớp thường tên `Plan$0$Walls`); `D` gỡ một liên kết (các tham chiếu và lớp của nó biến mất). Mỗi thao tác là một bước hoàn tác.

{{cmd:XCLIP}} (`XC`) cắt xén tham chiếu khối và liên kết: chọn chúng, `N` cho đường biên mới, rồi `R` và hai góc hoặc `P` và các điểm của đa giác ({{key:Enter}} khép lại); `D` xóa phần cắt xén. Chỉ phần nằm bên trong được hiển thị và in, và phần cắt xén di chuyển cùng tham chiếu. DWG và DXF 2000 giữ phần cắt xén; DXF R12 lưu tham chiếu nguyên vẹn và nói rõ điều đó. Khi bạn gắn liền một liên kết có tham chiếu bị cắt xén, {{cmd:XREF}} `B` hỏi: `A` gắn liền tất cả, `C` chỉ giữ phần bị cắt của mỗi tham chiếu (đường thẳng và cung tròn bị cắt tại đường biên; văn bản và khối lồng nhau ở lại khi điểm chèn của chúng nằm bên trong).

Một bản vẽ bạn mở có thể liên kết các tệp CadCraft không thấy được: nó cho biết có bao nhiêu cái chưa tải. Dùng {{cmd:XREF}}, `R` và chọn từng tệp để thấy chúng.

Khi bạn lưu, một liên kết đã tải được **gắn liền** vào tệp (chương trình khác thấy khối và lớp thường tên `Plan$0$…`), và phần lịch sử ghi điều đó. Một liên kết chưa tải vẫn là liên kết đến tệp của nó, trong DWG và DXF.

## Mở trong 3D

{{ui:Xem}} › {{ui:Thêm}} › {{ui:Mở trong ModelCraft}} ({{cmd:OPENIN3D}}) mở bản vẽ trong ứng dụng dựng mô hình 3D trong một thẻ mới, dưới dạng DWG, không tải lên. Thay đổi làm ở đó ở lại đó; hãy lưu chúng ở đó. Mục menu chỉ hiện ở nơi ứng dụng đó nhận được bản vẽ chuyển sang.

## In ra PDF

Nhấn {{key:Mod+P}}, nhấp {{ui:In}}, hoặc gõ `PLOT`. PDF được tạo ngay trong trình duyệt và được tải xuống, hoặc mở trong một thẻ mới để in. Xem [In ra PDF](topic:plot-pdf).

## Tệp đi đâu

Mỗi lần lưu và mỗi lần in là một lần tải xuống, nên tệp nằm ở nơi trình duyệt của bạn đặt các tệp tải xuống: thường là thư mục Downloads. Để chọn thư mục mỗi lần, hãy đổi cài đặt tải xuống trong trình duyệt; [Trình duyệt và máy tính](common:browsers) chỉ nơi làm việc đó.

Không có gì bạn mở hay lưu được gửi cho chúng tôi. Xem [Tệp của bạn đi đâu](common:your-files).

## Tệp dự án PLN và PLA

CadCraft mở bản vẽ DWG và DXF, không mở tệp riêng của Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Mở một tệp như vậy sẽ cho bạn biết nó là gì. Trong Archicad, hãy lưu các góc nhìn hoặc bố cục bạn cần thành DWG và mở chúng ở đây, hoặc xuất mô hình thành IFC và mở trong BimCraft. Nơi BimCraft nhận được tệp, CadCraft đưa ra {{ui:Mở trong BimCraft}}.

## Nếu trang đóng trước khi bạn lưu

CadCraft giữ một bản sao của mọi bản vẽ bạn thay đổi, chỉ trong trình duyệt này, ngay sau khi bạn ngừng chỉnh sửa. Nếu thẻ đóng, trình duyệt dừng hoặc máy tính khởi động lại trước khi bạn lưu, CadCraft hỏi **Recover your work?** vào lần khởi động tiếp theo: {{ui:Khôi phục}} mở lại bản vẽ, chưa lưu, trong thẻ riêng. Lưu bản vẽ sẽ xóa bản sao của nó. Xem [Khôi phục công việc của bạn](common:recover).

## Trực tuyến và ngoại tuyến

Mở, vẽ, lưu (DWG và DXF) và in đều diễn ra trên máy tính của bạn, nên chúng hoạt động khi không có kết nối sau khi CadCraft đã tải.

Để dùng CadCraft hoàn toàn không có kết nối, nhấp {{ui:Lưu để dùng ngoại tuyến}} trên thanh phía trên khi bạn đang trực tuyến. Nhãn đếm lên ("Saving 40 of 212") và kết thúc ở "Offline ready". Bản đã lưu gồm trình đọc DWG, tổng cộng khoảng 5 MB, nên **tệp DWG cũng mở được khi ngoại tuyến** sau khi đã lưu. Nhấp nút lần nữa để có {{ui:Lưu lại (lấy bản mới nhất)}} hoặc {{ui:Xóa bản ngoại tuyến}}. "Could not save" nghĩa là một số tệp chưa tải xuống: kiểm tra kết nối và nhấp để thử lại. "Offline not available" nghĩa là cửa sổ trình duyệt này không giữ được bản sao (cửa sổ riêng tư và một số máy tính được quản lý).

Nếu không có bản đã lưu, trình đọc DWG được tải vào lần đầu bạn mở DWG sau khi trang tải, nên mở DWG khi ngoại tuyến có thể thất bại; tệp DXF thì không bao giờ cần. Đừng tải lại trang khi ngoại tuyến trừ khi CadCraft đã được lưu.

Xem [Làm việc ngoại tuyến](common:offline) để biết chi tiết.

:::offline
Bây giờ bạn đang ngoại tuyến. Bản vẽ lưu thành DWG hoặc DXF và in bình thường, và tệp DXF mở được. Tệp DWG mở được nếu CadCraft hiện "Offline ready", hoặc nếu trình đọc DWG đã tải trong thẻ này.
:::

## Ràng buộc trong tệp

Ràng buộc và tham số (xem [Ràng buộc một bản vẽ](topic:constraints)) được lưu trong cả DWG và DXF. Mỗi đối tượng bị ràng buộc mang một ghi chú nhỏ của CadCraft (dữ liệu mở rộng), và một khối không dùng tên `CADCRAFT_PARAMETRIC` giữ các ràng buộc và bảng tham số. Chương trình khác mở bản vẽ bình thường và bỏ qua cả hai; chúng có thể xóa khối không dùng đó khi dọn dẹp (purge). Các ghi chú tham chiếu đối tượng bằng khóa riêng của chúng, không phải handle của tệp, nên chương trình đánh số lại handle không làm hỏng chúng. Khi chương trình khác đã xóa hoặc đổi một đối tượng bị ràng buộc, CadCraft bỏ các ràng buộc trên đó khi mở tệp và cho biết bao nhiêu cái. Một tệp không có chúng mở ra không có ràng buộc.

Một phác thảo xuất từ trình dựng chi tiết (`.json`) cũng mở được: xem [Chuyển phác thảo đến và đi từ các trình dựng chi tiết khác](topic:solidworks-sketches).

## Chưa có

- Đường dẫn nhiều dưới dạng đối tượng đường dẫn nhiều trong DXF đã lưu (R12 không có: chúng được lưu thành những gì chúng vẽ).
- Hình ảnh trong DXF đã lưu (chúng lưu thành khung; DWG giữ chúng làm hình ảnh), và wipeout che những gì bên dưới.
- Lưu phiên bản DXF mới hơn 2000.
- Lưu lên đám mây và đồng bộ giữa các máy tính.

Xem [Chưa xây dựng](topic:not-built-yet) để biết danh sách đầy đủ.
