---
title: Sắp xếp bản vẽ bằng class
summary: Class sắp xếp đối tượng theo cách thứ hai, xuyên qua các lớp (Lighting-Fixtures-Spot): hiển thị và ẩn, tô màu, đặt kiểu đường, độ dày nét, tô bóng và kiểu văn bản mà đối tượng có thể lấy "theo class", và đặt class cho đối tượng mới.
keywords: class, classes, CLASSES, CLS, CLASS, theo class, ByClass, class đang hoạt động, dùng khi tạo, None, lớp thiết kế, tỷ lệ lớp, cao độ, Vectorworks
from: 672de9cb
---

Lớp cho biết *đối tượng nằm ở đâu* trong bản vẽ; class cho biết *đối tượng là gì*. Một bức tường ở lớp `Level 1` có thể thuộc class `Walls-Exterior`, còn một đèn spot ở lớp `Ceiling` thuộc class `Lighting-Fixtures-Spot`. Bạn có thể ẩn mọi đèn ở mọi lớp cùng lúc, hoặc vẽ đậm mọi tường ngoài, mà không cần chuyển đối tượng nào sang lớp khác.

Mọi đối tượng bắt đầu ở class **None**. Một bản vẽ không có class riêng vẫn hoạt động y như trước.

## Mở bảng Class

Gõ `CLASSES` (hoặc `CLS`) rồi nhấn {{key:Enter}}, hoặc chọn {{ui:Class…}} trong menu {{ui:Thêm}} của nhóm {{ui:Khung nhìn}}. Bảng mở trên bản vẽ và vẫn mở khi bạn vẽ.

- **Thêm class:** gõ tên vào ô ở đầu và nhấn {{key:Enter}}. Dấu `-` tạo một cấp: `Lighting-Fixtures-Spot` nằm dưới `Lighting-Fixtures`, nằm dưới `Lighting`; các cấp còn thiếu sẽ được thêm cho bạn.
- **Hiện hoặc ẩn:** con mắt bên cạnh một class. Ẩn một class sẽ ẩn mọi class bên dưới nó, trên màn hình và khi in.
- **Class đang hoạt động:** nút tròn. Đối tượng mới bạn vẽ sẽ vào class đang hoạt động.
- **Chọn một class:** bấm vào tên của nó. Các nút và cài đặt bên dưới danh sách sẽ tác động lên class đó.

Số ở cuối mỗi dòng là số đối tượng trong class đó (trong mô hình, trên các tờ và bên trong định nghĩa khối).

## Đặt đối tượng vào class

Chọn các đối tượng, chọn class trong bảng rồi bấm {{ui:Đặt class}}. Đánh dấu {{ui:Theo class}} trước để chúng lấy màu, kiểu đường, độ dày nét, tô bóng và kiểu văn bản từ class. Bạn cũng có thể:

- gõ `CLASS` khi đã chọn đối tượng và nhập tên class (tên mới sẽ tạo class);
- gõ `CLASS` khi không chọn gì để đặt class đang hoạt động; `?` liệt kê các class kèm số lượng;
- dùng mục {{ui:Lớp}} trong bảng {{ui:Thuộc tính}}: class, và công tắc {{ui:… theo class}} cho màu, kiểu đường và độ dày nét (tô bóng cho tô bóng, kiểu văn bản cho văn bản);
- chọn theo class bằng `QSELECT`: chọn thuộc tính {{ui:Lớp}}.

{{ui:Chọn các đối tượng của nó}} chọn mọi đối tượng của class đã chọn trên tờ đang mở (hoặc trong mô hình).

## Cách một đối tượng được vẽ: đối tượng, class, lớp

Màu, kiểu đường, độ dày nét, tô bóng và kiểu văn bản của một đối tượng có thể là **theo class**, giống như có thể theo lớp. CadCraft tìm theo thứ tự này:

1. Giá trị riêng của đối tượng, trừ khi giá trị đó là theo class.
2. Giá trị của class, khi đối tượng lấy theo class và class có giá trị đó.
3. Giá trị của lớp.

Một class có màu (hoặc kiểu đường …) là {{ui:Chưa đặt}} sẽ chuyển đối tượng xuống lớp của nó. Chọn một class rồi đặt {{ui:Màu}}, {{ui:Kiểu đường}}, {{ui:Độ dày nét}}, {{ui:Tô (tô bóng)}} và {{ui:Kiểu văn bản}} bên dưới các nút. Đánh dấu {{ui:Dùng khi tạo}} để đối tượng mới vẽ trong class này lấy tất cả theo class.

Mỗi thay đổi trong bảng là một bước {{ui:Hoàn tác}}.

## Đổi tên và xóa

{{ui:Đổi tên}} sửa tên ngay tại chỗ: nhấn {{key:Enter}} để giữ, {{key:Esc}} để thoát. Các class bên dưới theo đó đổi (`Lighting-Spot` thành `Light-Spot` khi `Lighting` thành `Light`), và các đối tượng cùng các ghi đè theo khung nhìn cũng vậy.

{{ui:Xóa}} gỡ class và mọi class bên dưới nó. Đối tượng của chúng chuyển về **None**. Một lần {{ui:Hoàn tác}} khôi phục tất cả. **None** không thể đổi tên hay xóa.

## Lớp thiết kế

Dưới {{ui:Lớp thiết kế}} mỗi lớp có thể mang một tỷ lệ (`1:50`) và một cao độ. Lớp thiết kế là một lớp thông thường: không gian mô hình và các tờ vẫn hoạt động như trước, và tỷ lệ với cao độ được giữ cùng bản vẽ cho các công cụ sẽ dùng chúng.

## Trong tệp DWG và DXF

Class được giữ trong mọi phiên bản DWG mà CadCraft lưu và trong DXF (R12 và 2000). Class của mỗi đối tượng là dữ liệu mở rộng riêng của nó (ứng dụng `CADCRAFT_CLASS`), nên AutoCAD và các chương trình khác giữ nó cùng đối tượng. Danh sách class, màu và trạng thái hiển thị được giữ trong một khối không dùng tên `CADCRAFT_CLASSES`; nếu một chương trình khác làm sạch khối đó, CadCraft vẫn tìm được class của mọi đối tượng và các class trở lại với cài đặt mặc định.

Các chương trình khác không biết về class: chúng vẽ từng đối tượng theo giá trị riêng hoặc giá trị của lớp.

Xem thêm [Ghi đè class theo khung nhìn (viewport)](topic:viewport-overrides) và [Sắp xếp bản vẽ bằng lớp](topic:layers).
