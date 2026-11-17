---
title: Bảng thống kê vật liệu theo vùng
summary: Đánh dấu các khu vực của bản vẽ là vùng và đặt một bảng cho mỗi vùng để đếm các khối bên trong. Các bảng theo sát bản vẽ khi bạn làm việc, và bạn chọn các cột mà mỗi bảng hiển thị.
keywords: bảng thống kê vật liệu, BOM, danh sách vật tư, bảng thống kê, vùng, khu vực, bảng, đếm, số lượng, thuộc tính, cột, số hạng mục, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Một **vùng** là một khu vực có tên của bản vẽ. Một **bảng thống kê vật liệu** liệt kê những gì nằm bên trong một vùng, hoặc trong toàn bộ bản vẽ: mỗi khối cùng số lượng và giá trị thuộc tính của nó. Một bản vẽ có thể có bao nhiêu vùng và bảng tùy ý, và một vùng có thể có nhiều bảng với các cột khác nhau.

Các công cụ nằm trên thẻ Khối dưới {{ui:Bảng thống kê vật liệu}}, trong menu {{ui:Thêm}} của nhóm Khối, và có thể gõ lệnh.

## Tạo vùng

Gõ {{cmd:BOMZONE}} và chọn một trong các cách sau:

- nhấp hai góc đối diện để tạo hình chữ nhật,
- chọn {{ui:Đa giác}}, nhấp từng góc và nhấn Enter để khép lại, hoặc
- chọn {{ui:Đối tượng}} và chọn một đa tuyến khép kín, vòng tròn, elip hoặc spline khép kín. Đường bao của nó được sao chép; đối tượng vẫn giữ nguyên.

Sau đó gõ tên của vùng. Vùng được vẽ thành đường bao nét đứt với tên nằm phía trên góc trên bên trái, trên lớp `BOM-ZONES`, lớp này không được in. Bật in cho lớp đó nếu bạn muốn vùng hiển thị trên giấy.

Một vùng là một đa tuyến khép kín thông thường: di chuyển, kéo giãn hoặc kéo các điểm nắm của nó, và tên sẽ theo. Để đổi tên một vùng, sửa văn bản của tên, hoặc dùng {{cmd:BOMZONE}} và {{ui:Đổi tên}}. {{ui:Vùng}} liệt kê mọi vùng và số bảng của mỗi vùng.

## Đặt bảng

Gõ {{cmd:BOMTABLE}} (hoặc {{cmd:BOM}}), chọn đường bao của vùng hoặc tên của nó, nhập chiều cao chữ, rồi nhấp nơi góc trên bên trái của bảng sẽ đặt. Nhấn Enter thay vì chọn vùng, hoặc chọn {{ui:Toàn bộ}}, để có một bảng cho toàn bộ bản vẽ.

Bảng mới hiển thị số hạng mục, số lượng, tên khối và một cột cho mỗi thuộc tính mà các khối mang (sáu cột đầu; các cột khác được đưa ra nhưng chưa đánh dấu). Các khối có cùng tên và cùng giá trị thuộc tính sẽ chung một hàng.

## Thế nào là "bên trong"

- Một khối được tính vào vùng chứa **điểm chèn** của nó.
- Một đường, cung, vòng tròn, đa tuyến, elip, spline hoặc tô bóng được tính **trọn** vào vùng chứa trung điểm phạm vi của nó (đối với một đường thẳng, là trung điểm của nó). Chiều dài của nó không bị cắt tại mép vùng.
- Một điểm nằm đúng trên mép là bên trong.
- Các vùng có thể chồng lên nhau. Mỗi vùng được tính riêng, nên một đối tượng nằm trong phần chồng lên sẽ có mặt trong cả hai bảng.

## Bảng theo sát bản vẽ

Khi bạn thêm, di chuyển, sao chép hoặc xóa một khối, sửa một thuộc tính, hoặc đổi hình dạng hay di chuyển một vùng, mọi bảng sẽ được vẽ lại trong cùng một bước. Hoàn tác sẽ lấy lại thay đổi của bạn và thay đổi của bảng cùng lúc.

Để bảng ngừng theo sát, đánh dấu {{ui:Đã đóng băng}} trong cài đặt của nó. Bảng đã đóng băng chỉ thay đổi khi bạn sửa cài đặt của nó hoặc gõ {{cmd:BOMUPDATE}}, lệnh này cập nhật mọi bảng ngay bây giờ.

## Chọn các cột

Chọn một bảng và gõ {{cmd:BOMEDIT}}. Trong hộp thoại:

- **Cột**: đánh dấu các cột cần hiển thị (mục, số lượng, tên, lớp, chiều dài, diện tích, ghi chú và từng thuộc tính), gõ tiêu đề riêng cho bất kỳ cột nào, và di chuyển chúng lên hoặc xuống.
- {{ui:Nhóm các hàng theo}}: tên khối và giá trị thuộc tính, chỉ tên khối, lớp, hoặc một thuộc tính. Trong một hàng gộp, giá trị khác nhau giữa các khối sẽ hiện là "khác nhau".
- {{ui:Sắp xếp theo}} bất kỳ cột nào, tăng dần hoặc giảm dần.
- {{ui:Tiêu đề}}, {{ui:Hiện tiêu đề}} và {{ui:Hàng tổng}}.
- {{ui:Đếm đường nét theo lớp}} thêm một hàng cho mỗi lớp, với số đối tượng, tổng chiều dài và, đối với hình khép kín, tổng diện tích, theo đơn vị bản vẽ.
- **Ghi chú**: đánh dấu cột Ghi chú, rồi gõ ghi chú cho bất kỳ hàng nào trong bảng ở cuối hộp thoại.

Mỗi bảng giữ lựa chọn riêng của nó.

## Số hạng mục

Một hàng giữ số hạng mục của nó chừng nào còn nằm trong bảng. Một hàng mới nhận số trống tiếp theo, và số đã cấp sẽ không được dùng lại, để các bong bóng và ghi chú trích dẫn số luôn đúng. {{ui:Đánh số lại mục}} đánh số từ 1 theo thứ tự hiển thị.

Một hàng được nhận biết bằng những gì nó gộp: nếu bạn đổi cách nhóm hàng, hoặc đổi giá trị thuộc tính mà cách nhóm dùng, thì hàng đó được tính là một hàng mới.

## Xuất và chương trình khác

{{cmd:BOMEXPORT}}, hoặc {{ui:Xuất CSV}} trong hộp thoại, lưu một bảng thành tệp .csv cho bảng tính.

Trong tệp DWG hoặc DXF, bảng là một khối đường và chữ thông thường, nên các chương trình khác hiển thị và in nó như đã vẽ. Ở đó nó không phải là đối tượng bảng, và nó không tự cập nhật trong các chương trình khác. Liên kết đến vùng được giữ trong tệp dưới dạng dữ liệu mở rộng mà CadCraft đọc lại, nên bảng hoạt động trở lại khi bạn mở lại bản vẽ trong CadCraft. Một DXF R12 của bản vẽ không có tờ thì không giữ cài đặt "không in" của lớp vùng.

Phân rã một bảng sẽ biến nó thành các đường và chữ rời và chấm dứt liên kết.
