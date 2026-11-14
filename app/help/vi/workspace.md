---
title: Màn hình CadCraft
summary: Một vòng tham quan mọi thanh, bảng và thẻ trong ứng dụng vẽ, theo tên hiển thị trên màn hình.
keywords: màn hình, giao diện, thanh công cụ, dải lệnh, bảng, dòng lệnh, thanh trạng thái, thẻ, thẻ bố cục, thuộc tính, bảng lớp, tham quan
from: b5a33388
---

Màn hình có bảy phần. Từ trên xuống dưới: thanh ứng dụng, thanh công cụ, vùng vẽ với một bảng ở mỗi bên, các thẻ dưới bản vẽ, dòng lệnh và thanh trạng thái.

## Thanh ứng dụng

Thanh mỏng ở trên cùng thuộc về trang web, không phải bản vẽ. Nó hiển thị biểu tượng CadCraft, tên ứng dụng, phiên bản bạn đang chạy, liên kết đến trang của ứng dụng, nút {{ui:Trợ giúp}} (hoặc {{key:F1}}), nút {{ui:Lưu để dùng ngoại tuyến}}, nút {{ui:Toàn màn hình}} và hai nút giao diện, {{ui:Giấy}} và {{ui:Mô hình}}.

Nút {{ui:Cài đặt}} (bánh răng) chứa cài đặt riêng của CadCraft và những cài đặt mọi ứng dụng dùng chung: xem [Cài đặt CadCraft](topic:settings).

{{ui:Lưu để dùng ngoại tuyến}} giữ một bản sao của CadCraft, gồm cả trình đọc DWG, trong trình duyệt này để nó mở được khi không có kết nối. Nhãn của nút cho biết trạng thái: "Saving N of M", "Offline ready", "Could not save" hoặc "Offline not available". Xem [Làm việc ngoại tuyến](common:offline).

:::note
Các nút {{ui:Giấy}} và {{ui:Mô hình}} trên thanh ứng dụng chỉ đổi màu của màn hình: {{ui:Giấy}} là giao diện sáng, {{ui:Mô hình}} là giao diện tối. Chúng không liên quan đến thẻ {{ui:Mô hình}} dưới bản vẽ, thẻ chuyển giữa bản vẽ và các tờ của nó.
:::

Nút {{ui:Toàn màn hình}}, hoặc {{key:Ctrl+Shift+F}} (phím Control trên mọi máy tính, kể cả Mac), chuyển vòng qua ba chế độ màn hình: bình thường, toàn màn hình, và toàn màn hình với các thanh bị ẩn. Khi các thanh bị ẩn, di con trỏ lên mép trên của màn hình để đưa chúng trở lại.

## Thanh công cụ

Dưới thanh ứng dụng là thanh công cụ. Mỗi nút chạy một lệnh, đúng như khi bạn gõ lệnh đó, nên dòng lệnh đặt cùng các câu hỏi theo cả hai cách. Rê chuột lên một nút để thấy bí danh lệnh của nó. Các nhóm là:

| Nhóm | Các nút |
|---|---|
| Tệp | {{ui:Mới}}, {{ui:Mở}}, {{ui:Lưu}}, {{ui:Lưu thành}}, {{ui:In}} |
| Vẽ | {{ui:Đường thẳng}}, {{ui:Đa tuyến}}, {{ui:Vòng tròn}}, {{ui:Cung tròn}}, {{ui:Hình chữ nhật}}, {{ui:Đa giác}}, {{ui:Elip}}, {{ui:Văn bản}}, {{ui:Đoạn văn}}, {{ui:Tô bóng}}, và {{ui:Thêm}}: {{ui:Điểm}}, {{ui:Đường dựng}} và {{ui:Tia}} (xem [Đường dựng và tia](topic:construction-lines)) |
| Sửa đổi | {{ui:Di chuyển}}, {{ui:Sao chép}}, {{ui:Xoay}}, {{ui:Tỷ lệ}}, {{ui:Đối xứng}}, {{ui:Kéo giãn}}, {{ui:Dời song song}}, {{ui:Cắt}}, {{ui:Kéo dài}}, {{ui:Bo góc}}, {{ui:Vát mép}}, {{ui:Phân rã}}, {{ui:Xóa}}, và {{ui:Thêm}}: {{ui:Mảng}}, {{ui:Nối}}, {{ui:Khớp thuộc tính}}, {{ui:Ngắt}} và {{ui:Kéo dài chiều dài}} |
| Chú thích | {{ui:Thẳng}}, {{ui:Song song}}, {{ui:Góc}}, {{ui:Bán kính}}, {{ui:Đường kính}} (kích thước), {{ui:Đường dẫn}} (đường dẫn nhiều), và {{ui:Thêm}}: {{ui:Kích thước nối tiếp}}, {{ui:Kích thước cơ sở}} và {{ui:Đám mây sửa đổi}} |
| Tham số | {{ui:Tự động}}, {{ui:Ràng buộc}}, {{ui:Kích thước}}, {{ui:Tham số}}, và {{ui:Thêm}} với từng ràng buộc (xem [Ràng buộc một bản vẽ](topic:constraints)) |
| Khối | {{ui:Tạo}}, {{ui:Chèn}}, {{ui:Thư viện}}, và {{ui:Thêm}}: {{ui:Sửa khối}} và {{ui:Định nghĩa thuộc tính}} |
| Tờ | {{ui:Tờ mới}}, {{ui:Khung nhìn}} |
| Chỉnh sửa | {{ui:Hoàn tác}}, {{ui:Làm lại}}, {{ui:Sao chép}} (vào bộ nhớ tạm), {{ui:Dán}}, và {{ui:Thêm}}: một menu có {{ui:Cắt}}, {{ui:Sao chép}}, {{ui:Dán}}, {{ui:Dán tại chỗ}}, {{ui:Nhân bản và di chuyển}}, {{ui:Xóa}}, {{ui:Chọn tất cả}}, {{ui:Bỏ chọn}}, {{ui:Chọn nhanh}}, {{ui:Chọn giống nhau}} và {{ui:Tìm và thay thế}}, mỗi mục kèm phím của nó |
| Xem | {{ui:Phạm vi}}, {{ui:Cửa sổ}}, {{ui:Trước đó}}, và {{ui:Thêm}}: {{ui:Đo khoảng cách}}, {{ui:Diện tích}}, {{ui:Đo (bán kính, góc …)}}, và màn hình chia: {{ui:Chia cạnh nhau}}, {{ui:Chia xếp chồng}}, {{ui:Bốn khung}}, {{ui:Một khung}} (xem [Chia màn hình](topic:split-screen)), và {{ui:Xoay khung nhìn 90° sang trái}}, {{ui:Xoay khung nhìn 90° sang phải}}, {{ui:Về thế giới}} (xem [Xoay khung nhìn](topic:ucs-and-turned-view)) |

{{ui:Sao chép}} trong nhóm {{ui:Sửa đổi}} là lệnh {{cmd:COPY}} (điểm gốc, rồi nơi mỗi bản sao đi tới); {{ui:Sao chép}} trong nhóm {{ui:Chỉnh sửa}} đưa đối tượng vào bộ nhớ tạm cho {{ui:Dán}}. Xem [Sao chép, dán và nhân bản](topic:copy-paste). Nút của lệnh đang chạy vẫn sáng cho đến khi lệnh kết thúc. Chú giải công cụ ghi phím tắt Windows ("Ctrl+O"); trên Mac, {{key:Mod+O}} cũng dùng được.

Trên cửa sổ thấp (ví dụ laptop có màn hình đặt tỷ lệ 125 % trở lên), thanh công cụ không bao giờ chiếm chỗ của bản vẽ: khi bản vẽ sắp có quá ít chiều cao, các nút bỏ chữ dưới biểu tượng và tên nhóm (rê chuột lên nút để xem tên), và nếu vẫn chưa đủ, thanh công cụ thành một hàng cuộn ngang. Cửa sổ cao hơn sẽ đưa chữ trở lại.

## Bảng bên trái

Bảng bên trái có ba mục.

- **{{ui:Lớp}}.** Mọi lớp trong bản vẽ, với một chấm đặc ở lớp hiện hành. Nhấp một tên để đặt lớp đó làm hiện hành. Mỗi hàng có một ô màu (nhấp để chọn màu) và bốn nút: bật/tắt (con mắt), đóng băng (bông tuyết), khóa (ổ khóa) và in (máy in). {{ui:Lớp mới}} mở một hộp để thêm lớp. Xem [Tổ chức bản vẽ bằng các lớp](topic:layers).
- **{{ui:Khối}}.** Các khối được định nghĩa trong bản vẽ, mỗi khối được dùng bao nhiêu lần, và một nút {{ui:Chèn}} cho từng khối. Xem [Tạo và chèn khối](topic:blocks).
- **{{ui:Bản vẽ}}.** Thông tin về tệp đang mở: tên (kèm "(changed)" khi có chỉnh sửa chưa lưu), định dạng, dung lượng, đơn vị, số đối tượng, lớp, khối và tờ. Sau khi bạn mở một tệp, hộp "About this file" liệt kê mọi thứ CadCraft không hiển thị được hoặc phải chuyển đổi.

## Vùng vẽ

Giữa màn hình là bản vẽ. Con trỏ là hình chữ thập. Khi CadCraft cần một điểm, một dấu nhỏ và một nhãn ("Endpoint", "Midpoint") cho thấy chỗ bắt điểm đối tượng sẽ rơi vào. Khi nó cần đối tượng, hình chữ thập có một ô chọn và các đối tượng dưới đó sáng lên.

Khi bản vẽ trống, thẻ "Start drawing" hiện vài lệnh đầu tiên. Nó biến mất ngay khi bạn chạy một lệnh hoặc mở một tệp. Bạn có thể thả tệp DWG hoặc DXF lên bất kỳ đâu trong vùng này để mở nó.

## Các thẻ dưới bản vẽ

Dưới bản vẽ là các thẻ: {{ui:Mô hình}} đầu tiên, rồi {{ui:3D}}, rồi mỗi tờ (bố cục) một thẻ, rồi nút {{ui:+}}.

- {{ui:Mô hình}} là chính bản vẽ, ở kích thước thật, theo đơn vị bản vẽ.
- {{ui:3D}} hiển thị bản vẽ nằm trên mặt đất và các khối đặc tạo từ nó. Khi nó hiện, thanh công cụ có nhóm {{ui:3D}} thay cho các nhóm vẽ. Xem [Dựng mô hình 3D](topic:3d-solids).
- Mỗi thẻ tờ là một tờ giấy có khung tên và các khung nhìn vào mô hình. Những gì bạn vẽ ở đó theo đơn vị giấy (milimét hoặc inch). Nhấp đúp bên trong một khung nhìn để làm việc trên mô hình qua nó (xem [Làm việc trên mô hình qua khung nhìn](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Tên tờ dài bị cắt ngắn trên thẻ; rê chuột lên thẻ để xem tên đầy đủ. Khi có nhiều tờ, {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Thẻ tờ}} › {{ui:Chỉ số hiệu tờ}} chỉ hiện số hiệu của từng tờ (A-101) trên thẻ.
- {{ui:+}} tạo một tờ mới có đường viền, khung tên và một khung nhìn. Nó giống lệnh {{cmd:LAYOUT}}.
- Nhấp đúp một thẻ tờ để đổi tên. Khi một thẻ đang được chọn, {{key:Left}} và {{key:Right}} di chuyển giữa các thẻ.

Mỗi thẻ giữ mức thu phóng và vị trí riêng. Xem [Thiết lập một tờ](topic:sheets-and-viewports).

## Bảng bên phải: Thuộc tính

Bảng bên phải thay đổi theo thứ đang được chọn.

- **Không chọn gì, trên thẻ {{ui:Mô hình}}:** tiêu đề ghi {{ui:Cài đặt hiện tại}}. Ở đây bạn đặt {{ui:Lớp}}, {{ui:Màu}} và {{ui:Chiều cao văn bản}} cho đối tượng mới, {{ui:Đơn vị}} của bản vẽ, và các kích cỡ cho kích thước mới ({{ui:Chiều cao văn bản}}, {{ui:Kích thước mũi tên}}, {{ui:Số thập phân}}, {{ui:Tỷ lệ chung}}).
- **Không chọn gì, trên một tờ:** tiêu đề ghi "Sheet:" và tên tờ. Bạn có thể đổi tên tờ, đổi {{ui:Giấy}} và {{ui:Hướng}}, {{ui:In tờ này}} hoặc {{ui:Xóa tờ này}}. Các cài đặt cho đối tượng mới nằm bên dưới.
- **Chọn một đối tượng:** loại của nó làm tiêu đề (Line, Circle, Text, Dimension, Viewport …), rồi lớp, màu và hình học của nó. Nhập một giá trị mới và nhấn {{key:Enter}} để đổi.
- **Chọn nhiều đối tượng:** số lượng, cùng {{ui:Lớp}} và {{ui:Màu}} chung của chúng. Đổi một trong hai sẽ đổi tất cả. "Varies" nghĩa là chúng khác nhau.

Xem [Sửa bằng grip và Thuộc tính](topic:grips-and-properties).

Bên dưới, bảng {{ui:Tham số}} mở ra khi bạn chọn {{ui:Tham số}} hoặc gõ {{cmd:PARAMETERS}}: mọi tham số và ràng buộc kích thước trong một bảng. Xem [Dùng tham số và phương trình](topic:parameters).

## Dòng lệnh

Ở dưới cùng là dòng lệnh: lịch sử những gì bạn đã làm, và bên dưới là dòng nhắc.

- Nhãn dòng nhắc ghi `Command:` khi không có lệnh nào chạy. Khi một lệnh chạy, nó hiện câu hỏi, các tùy chọn trong ngoặc vuông và giá trị mặc định trong ngoặc nhọn, ví dụ `Specify radius of circle [Diameter] <500>:`.
- Khi bạn gõ tên lệnh, một gợi ý ở bên phải đề xuất các lệnh khớp. Nhấn {{key:Tab}} để chấp nhận lệnh đầu tiên. "No such command" nghĩa là không có gì khớp.
- {{key:Up}} và {{key:Down}} gọi lại các dòng bạn đã gõ trước đó.
- Lịch sử giữ 400 dòng gần nhất. Thông báo từ các lệnh, số đo từ {{cmd:DIST}} và {{cmd:LIST}}, và báo cáo lưu và in hiện ở đây.

## Thanh trạng thái

Hàng cuối cùng là thanh trạng thái.

- **Tọa độ** ở bên trái: X và Y của hình chữ thập. Khi một lệnh có điểm gốc, nó cũng hiện khoảng cách và góc từ điểm đó, ví dụ `Δ 1200 < 90°`.
- **Thông báo** ở giữa, như "Ortho on" hoặc "Current layer: Walls". Chúng mờ dần sau vài giây.
- **{{ui:Lưới}}**, **{{ui:Ortho}}**, **{{ui:Cực}}**, **{{ui:Bắt điểm}}**, **{{ui:Theo dõi}}**, **{{ui:Động}}** và **{{ui:LWT}}** ở bên phải. Mỗi nút là một công tắc; nút đang nhấn là đang bật. {{ui:LWT}} hiển thị độ dày nét trên màn hình (xem [Độ dày nét và kiểu đường](topic:units-papers-scales#line-weights-and-linetypes)). Mũi tên nhỏ cạnh {{ui:Bắt điểm}} mở {{ui:Bắt điểm đối tượng}}, nơi bạn đánh dấu các kiểu bắt điểm đang hoạt động. Xem [Bắt vào các điểm trên đối tượng](topic:object-snaps).

## Hộp thoại In ra PDF

{{ui:In}} (hoặc {{key:Mod+P}}) mở hộp thoại {{ui:In ra PDF}}, với các cài đặt ở bên trái và bản xem trước trực tiếp ở bên phải. Xem [In ra PDF](topic:plot-pdf).

## Trợ giúp

{{key:F1}} hoặc nút {{ui:Trợ giúp}} mở phần trợ giúp này thành một bảng bên; bản vẽ vẫn dùng được bên cạnh. Nó hoạt động khi không có kết nối. Nhấn {{key:F1}} lần nữa, hoặc {{key:Esc}} trong bảng, để đóng. Xem [Dùng phần trợ giúp này](common:help).
