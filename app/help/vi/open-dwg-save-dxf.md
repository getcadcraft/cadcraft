---
title: Mở DWG, chỉnh sửa và lưu một bản sao
summary: Mở một bản vẽ DWG ai đó gửi cho bạn, kiểm tra những gì đã vào, thực hiện thay đổi và gửi lại một bản sao dưới dạng DWG hoặc DXF.
keywords: dwg, dxf, mở, nhập, xuất, lưu, r12, khứ hồi, tư vấn, xref, kiểm tra bản vẽ, lưu thành, lưu dwg, định dạng
from: 49de4bf6
---

## Bạn sẽ làm gì

Mở một DWG từ đơn vị tư vấn, kiểm tra những gì CadCraft có thể và không thể hiển thị, thêm một ghi chú, in một tờ ra PDF, và lưu một bản sao để gửi lại, dưới dạng DWG hoặc DXF.

## Mở tệp

1. Nhấn {{key:Mod+O}}, hoặc nhấp {{ui:Open}}.
2. Chọn tệp `.dwg`.

Dòng trạng thái hiện "Đang đọc …" trong khi bản vẽ được đọc. Khi xong, bản vẽ lấp đầy màn hình, và lịch sử ghi, chẳng hạn, "Đã mở plan.dwg: 18,240 đối tượng trên 64 lớp", kèm thời gian đã mất.

:::offline
Bạn đang ngoại tuyến. Nếu nút {{ui:Save for offline}} hiện "Sẵn sàng ngoại tuyến", các tệp DWG vẫn mở bình thường. Nếu không, và chưa có DWG nào được mở trong thẻ này, việc mở DWG có thể lỗi vì trình đọc DWG của CadCraft được tải cùng DWG đầu tiên: hãy mở một DXF thay vào, hoặc lưu CadCraft để dùng ngoại tuyến lần tới khi bạn trực tuyến. Xem [Làm việc ngoại tuyến](common:offline).
:::

## Kiểm tra những gì đã vào

1. Nhìn vào mục {{ui:Drawing}} của bảng bên trái: định dạng và phiên bản, đơn vị, số đối tượng và lớp, và các tờ.
2. Đọc hộp "Về tệp này" bên dưới, nếu có.

Hộp liệt kê:

- **Chưa hiển thị:** các đối tượng CadCraft chưa vẽ được, theo loại và số lượng. Chúng bị bỏ đi, không đoán mò.
- **Bố cục (tờ) đã vào:** mở chúng bằng các thẻ dưới bản vẽ.
- **Kích thước chỉ đọc được như đã vẽ.**

3. Nhấp qua các thẻ dưới bản vẽ để xem từng tờ.
4. Kiểm tra {{ui:Units}} trong {{ui:Current settings}} (khi không chọn gì, thẻ {{ui:Model}}). Nếu nó ghi {{ui:Unitless}} mà bạn biết bản vẽ là milimét, hãy đặt lại, để tỷ lệ tờ và tỷ lệ in đọc đúng.

:::tip
Nếu bạn mong thấy một phần của bản vẽ mà không thấy, kiểm tra bảng {{ui:Layers}}: lớp có thể đang tắt hoặc bị đóng băng trong tệp. Nhấp tên của nó để làm nó hiện hành; điều đó sẽ bật nó.
:::

## Thực hiện thay đổi

1. Tạo một lớp cho ghi chú: nhấp {{ui:New layer}}, gõ `NOTES` và nhấn {{key:Enter}}.
2. Gõ `DT` và nhấn {{key:Enter}}.
3. Nhấp nơi ghi chú sẽ đặt.
4. Gõ chiều cao chữ phù hợp với bản vẽ (xem [Thêm văn bản và nhãn](topic:text)) và nhấn {{key:Enter}}.
5. Nhấn {{key:Enter}} để giữ góc xoay là 0.
6. Gõ ghi chú của bạn và nhấn {{key:Enter}}.
7. Nhấn {{key:Enter}} lần nữa để kết thúc.

Chỉnh sửa kích thước đã nhập vào thì vẫn ổn: ngay khi bạn thay đổi một kích thước, CadCraft sẽ vẽ lại nó theo kiểu riêng.

## In một tờ để xem xét

1. Nhấp thẻ của tờ.
2. Nhấn {{key:Mod+P}}.
3. Nhấp {{ui:Download PDF}}.

Xem [In ra PDF](topic:plot-pdf).

## Lưu một bản sao

1. Nhấn {{key:Mod+S}}, hoặc nhấp {{ui:Save}}.

Bạn đã mở một DWG, nên trình duyệt sẽ tải về `<name>.dwg`, theo phiên bản mà DWG đã đến. Lịch sử ghi, chẳng hạn, "Đã lưu bản sao thành Plan.dwg (DWG (AutoCAD 2018))." và liệt kê, trên các dòng bên dưới, mọi thứ đã thay đổi trên đường đi.

2. Đọc các dòng đó trước khi gửi tệp. [DWG giữ và thay đổi những gì](topic:files#what-a-dwg-keeps-and-changes) giải thích từng dòng.

Bản DWG gốc của bạn không bao giờ bị thay đổi. Mỗi lần lưu là một tải về mới.

## Lưu thành DWG hoặc DXF

Để tự chọn định dạng:

1. Nhấn {{key:Mod+Shift+S}}, hoặc nhấp {{ui:Save as}}.

Hộp thoại {{ui:Save a copy as}} mở ra với bốn lựa chọn, mỗi cái kèm tên tệp nó sẽ đặt: {{ui:DWG}}, với danh sách {{ui:Version}} của nó, {{ui:DXF R12}}, {{ui:DXF 2000}} và {{ui:DXF 2000 (binary)}}. Định dạng và phiên bản hiện tại của bản vẽ đã được chọn sẵn.

2. Nhấp định dạng bạn muốn. Với DWG, hãy chọn phiên bản mà văn phòng kia dùng, hoặc một phiên bản cũ hơn: AutoCAD 2018, 2013, 2010, 2007, 2004 hoặc 2000.
3. Nhấp {{ui:Save}}.

Bản sao được tải về. Từ giờ, {{key:Mod+S}} sẽ lưu bản vẽ này theo định dạng đó, và bản vẽ mới cũng bắt đầu với định dạng đó, trong trình duyệt này. {{ui:Cancel}} hoặc {{key:Esc}} không lưu gì, và lịch sử ghi "Chưa lưu."

Chọn cái nào:

- **DWG** giữ được nhiều nhất: các tờ với khung nhìn của chúng, kích thước thật, mẫu tô bóng, tên lớp và tên khối như bạn đã gõ, và văn bản nhiều dòng như văn bản nhiều dòng. Phiên bản AutoCAD 2000 mở được trong nhiều chương trình nhất; 2004 trở lên còn giữ màu thật.
- **DXF 2000** là tệp văn bản giữ gần như mọi thứ DWG giữ: mọi tờ như một bố cục với khung nhìn, kích thước thật, mẫu tô bóng, màu thật, độ dày nét, kiểu đường, và tên như bạn đã gõ. Nó mở được trong AutoCAD 2000 trở lên và hầu hết các chương trình CAD. Multileader trở thành các đường, mũi tên và văn bản mà chúng vẽ. Một DXF được mở ở phiên bản 2000 trở lên sẽ lưu thành DXF 2000.
- **DXF 2000 (binary)** giữ cùng nội dung như DXF 2000 nhưng ở dạng nhị phân: tệp nhỏ hơn và giữ mọi số chính xác. Tệp DXF nhị phân của chương trình khác mở như tệp văn bản, và một bản vẽ mở từ DXF nhị phân sẽ được lưu lại dưới dạng nhị phân.
- **DXF R12** mở được trong hầu hết mọi chương trình CAD. Nó giữ tờ đầu tiên với các khung nhìn của nó, và các tờ khác của CadCraft. Nó đơn giản hóa những thứ mới hơn, như văn bản nhiều dòng và tô bóng.

## Văn phòng kia sẽ thấy gì

Trong DWG:

- Đường thẳng, cung, đường tròn, elip, đa tuyến, văn bản, văn bản nhiều dòng, khối kèm thuộc tính, tô đặc, mẫu tô bóng và lớp như bạn thấy.
- Kích thước thật: chương trình kia đo lại chúng khi bị kéo giãn.
- Mọi tờ, với giấy và các khung nhìn của nó.
- Multileader như multileader. Trong phiên bản AutoCAD 2000, màu thật trở thành màu tiêu chuẩn gần nhất.

Trong DXF R12:

- Đường thẳng, cung, đường tròn, đa tuyến, văn bản, tham chiếu khối và kích thước như bạn thấy. Kích thước vẫn là kích thước thật.
- Tên lớp viết hoa, với khoảng trắng đổi thành `_`.
- Tờ đầu tiên như không gian giấy của bản vẽ, với các khung nhìn. Các tờ khác đến dưới dạng khối tên `CCLAYOUT_1` và cứ thế; nếu họ cần mọi tờ dưới dạng bố cục, hãy in PDF từng tờ cho họ.
- Văn bản nhiều dòng thành các dòng riêng, elip thành đa tuyến, tô bóng thành đường viền.

Dù theo cách nào, mọi thứ được liệt kê là "Chưa hiển thị" khi bạn mở DWG đều **không** có trong bản sao, trừ khi lịch sử ghi là đã được giữ: đối tượng OLE của DWG và khối 3D trong không gian mô hình được ghi lại khi bạn lưu thành DWG. Hãy báo cho họ, và gửi thêm một PDF.

## Lỗi thường gặp

- **"CadCraft chỉ mở bản vẽ DWG và DXF."** Tệp có phần mở rộng khác. Kiểm tra nó là `.dwg` hoặc `.dxf`.
- **"Không đọc được bản vẽ này."** Tệp DWG bị hỏng hoặc ở một phiên bản mà trình đọc không xử lý. Yêu cầu một DXF, hoặc DWG được lưu ở phiên bản cũ hơn.
- **"DXF nhị phân này kết thúc giữa một đối tượng."** Tệp bị cắt ngắn hoặc hỏng. Gõ RECOVER để mở phần đọc được, hoặc yêu cầu gửi lại tệp.
- **Tệp đã lưu có tên `name (1).dwg` hoặc `name (1).dxf`.** Trình duyệt làm vậy khi trong thư mục đã có một tệp cùng tên.
- **Họ có chương trình cũ không mở được DWG.** Lưu thành DWG với {{ui:Version}} {{ui:AutoCAD 2000}}, hoặc thành {{ui:DXF R12}}: hầu hết chương trình CAD đều mở được.
- **Một phần bản vẽ bị thiếu.** Bản vẽ liên kết (xref) không được tải cho đến khi bạn chọn tệp của chúng ({{cmd:XREF}}, `R`), và hình ảnh hiện như khung với tên tệp của chúng.
