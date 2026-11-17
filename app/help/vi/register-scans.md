---
title: Đăng ký nhiều bản quét thành một
summary: Đặt các bản quét chụp từ nhiều vị trí vào cùng một hệ tọa độ bằng các cặp điểm chọn trên hình hoặc mục tiêu nhập tay, tinh chỉnh bằng ICP, lưu phép đăng ký thành dự án và xuất đám điểm đã đăng ký dưới dạng LAS hoặc E57. Lệnh là REGISTERSCANS.
keywords: đăng ký, phép đăng ký, bản quét, đám điểm, icp, iterative closest point, mục tiêu, cặp điểm, biến đổi cứng, căn chỉnh, gộp, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Bạn sẽ làm gì

Nhiều bản quét của cùng một nơi (mỗi bản quét từ một vị trí máy quét riêng) ban đầu nằm trong hệ tọa độ riêng. Hãy đăng ký chúng: đặt mỗi bản quét vào một vị trí để tất cả nằm trong cùng một hệ, rồi lưu kết quả thành dự án và ghi đám điểm đã đăng ký thành một tệp LAS hoặc E57.

## Đặt các bản quét

1. Mở hộp thoại (gõ `REGISTERSCANS` hoặc `REGSCAN`). {{ui:Thêm bản quét…}} nhận tệp LAS, LAZ, E57, PLY, PCD, PTX, PTS hoặc XYZ, hoặc bạn có thể thả tệp vào hộp thoại. Bản quét dùng đơn vị khác nhau sẽ bị từ chối kèm ghi chú: hãy chuyển đổi một trong số đó trước.
2. Chọn {{ui:Bản quét cần di chuyển}} và {{ui:Đặt vào}}. Hình hiển thị mọi bản quét trong khung nhìn ở vị trí hiện tại, mỗi bản một màu: {{ui:Mặt bằng}}, {{ui:Trước}} hoặc {{ui:Bên}}. Kéo để di chuyển khung nhìn; dùng bánh xe chuột để thu phóng.
3. **Theo cặp điểm.** Nhấn {{ui:Chọn một cặp}}, rồi chọn một điểm trên bản quét cần di chuyển, sau đó chọn đúng vị trí đó trên bản quét khác (một góc, một mục tiêu, chân một cột). Làm như vậy ít nhất ba lần, với các điểm không thẳng hàng và nằm cách xa nhau. Nhấn {{ui:Đặt theo cặp}}: bản quét được đặt bằng khớp bình phương tối thiểu, và **Còn lại** cho biết mỗi cặp vẫn lệch bao nhiêu. Cặp có số lớn là điểm chọn sai: xóa nó bằng dấu X rồi đặt lại.
4. **Theo mục tiêu.** Nếu biết tọa độ thật của một điểm (mục tiêu đo đạc), nhấn {{ui:Chọn, rồi nhập mục tiêu}}, nhấn vào điểm trên bản quét, rồi nhập X, Y và Z của mục tiêu vào dòng đó. Có thể dùng lẫn cặp điểm và mục tiêu nhập tay.

## Tinh chỉnh bằng ICP

Cặp điểm cho vị trí thô. {{ui:Tinh chỉnh}} di chuyển bản quét cho đến khi các bề mặt của nó khớp với bản quét kia: trước tiên là **điểm tới điểm**, sau đó là **điểm tới mặt phẳng**. Bảng liệt kê từng bước cùng sai số và số điểm khớp; đường phía trên bảng thể hiện sai số giảm dần. {{ui:Dừng}} kết thúc lượt đang chạy sau bước hiện tại và giữ kết quả đã đạt được. {{ui:Hoàn tác}} lấy lại toàn bộ lượt (hoặc lần đặt cuối cùng); {{ui:Đặt lại}} đưa bản quét về tọa độ trong tệp.

Để chạy nhanh trên máy tính xách tay, ICP làm việc trên một phần điểm đã giảm ({{ui:Số điểm dùng}}, từ 5,000 đến 60,000) và bỏ qua các điểm ghép xa hơn {{ui:Khoảng cách ghép lớn nhất}} (mặc định là 5% kích thước bản quét, và giảm dần khi kết quả ổn định). Cần có vị trí thô trước: các bản quét hầu như không chồng lên nhau sẽ báo rằng không thể ghép. Bề mặt chỉ phẳng hoặc chỉ thẳng không thể cố định vị trí dọc theo chính nó; trong trường hợp đó, hãy thêm cặp điểm.

## Lưu và xuất

- {{ui:Lưu dự án}} ghi một tệp `.ccscans.json` nhỏ: tên và kích thước của từng bản quét, dấu vân tay của 64 KB đầu tiên, cùng phép biến đổi của nó. Tệp không chứa điểm nào. {{ui:Mở dự án…}} tìm các tệp bản quét theo những tham chiếu đó (các tệp phải được thêm trước) và khôi phục mọi phép biến đổi.
- {{ui:Xuất LAS}} và {{ui:Xuất E57}} ghi một tệp chứa mọi bản quét ở vị trí đã đăng ký. Các điểm trong bản gốc không bao giờ bị ghi đè; phép biến đổi được áp dụng khi xuất. Khi bật {{ui:Đọc mọi điểm từ các tệp}}, mỗi tệp được đọc lại cho từng điểm (tối đa 20 triệu điểm mỗi bản quét); khi tắt, chỉ các điểm đang hiện trong trình xem được ghi.
- {{ui:Hiện đám điểm đã đăng ký}} (CadCraft) ghi tệp LAS và gắn nó dưới bản vẽ tại tọa độ riêng, như mọi đám điểm khác.

:::note
Không có gì được tải lên. Phép đăng ký làm việc bằng đơn vị của chính các tệp và giữ milimét: tệp LAS được ghi với tỷ lệ phù hợp (đến 0.1 mm), tệp E57 dùng số thực kép. Hệ tọa độ chỉ được đưa vào LAS khi mọi bản quét đều ghi cùng một mã EPSG. Bộ ghi E57 do chúng tôi tự viết; nó được kiểm tra bằng cách đọc lại các tệp bằng trình đọc này và bằng libE57Format.
:::
