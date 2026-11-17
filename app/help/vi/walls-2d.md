---
title: Vẽ tường, cửa đi và cửa sổ thông minh trong 2D
summary: Vẽ tường như đa tuyến, nối chúng gọn gàng, và đặt cửa đi và cửa sổ đi theo tường. Tất cả đều là 2D, không có mô hình 3D.
keywords: tường, tường, WALL, WA, cửa đi, DOOR, DR, cửa sổ, WINDOW, WN, DELOPENING, tường thông minh, mặt bằng, mở cánh, bản lề, lỗ mở
from: 45845d49
---

Tường ở đây là đối tượng bản vẽ 2D. Chúng không tạo mô hình 3D, nên một mặt bằng vẫn nhẹ như một bản vẽ đường thẳng. Để có mô hình công trình, hãy dùng BimCraft.

## Vẽ tường

Gõ `WALL` (`WA`), hoặc chọn {{ui:Tường}} trong menu {{ui:Thêm}} của nhóm {{ui:Vẽ}}, rồi nhấp các điểm như khi vẽ một đa tuyến. Nhấn {{key:Enter}} để kết thúc, hoặc gõ `C` để đóng phòng.

- `T` đặt độ dày.
- `J` cho biết các điểm nhấp của bạn theo đâu: tâm của tường, hoặc mặt trái hay mặt phải của nó.
- `F` đặt kiểu tô: không có, đặc, hoặc tô bóng (hatch).

Các góc tự vát góc. Một tường kết thúc trong độ dày của tường khác sẽ nối với nó thành chữ T gọn, và các tường cắt nhau sẽ mở ra với nhau. Các mối nối được lưu cùng với tường. Với hình chữ nhật, đa giác, cung, tách, khóa và các phần còn lại, xem "Hình dạng, cắt, dời và khóa tường 2D".

## Thêm cửa đi và cửa sổ

Gõ `DOOR` (`DR`) hoặc `WINDOW` (`WN`) rồi nhấp vào một tường. Cửa đi mở về phía cạnh của tường bạn nhấp. `W` đặt chiều rộng, `Y` đặt loại, và `H` đặt phía bản lề. Tiếp tục nhấp để đặt thêm, và nhấn {{key:Enter}} để kết thúc. Cửa đi có thể là cánh đơn, cánh đôi, cửa trượt, hoặc lối đi mở. Cửa sổ có thể là cố định, mở quay, hoặc trượt.

## Thay đổi chúng

Chọn một tường để thấy các grip của nó:

- Các grip đầu kéo giãn tường. Các tường nối với nó đi theo.
- Grip giữa di chuyển tường.
- Một grip trên một lỗ mở trượt nó dọc theo tường.
- Các mũi tên lật bản lề và hướng mở của cửa đi.

Thuộc tính hiển thị độ dày, kiểu tô và từng lỗ mở: loại, chiều rộng, vị trí, bản lề, hướng mở, hiển thị mở hoặc đóng, và gỡ bỏ. `DELOPENING` xóa lỗ mở gần nơi bạn nhấp nhất.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` và `ERASE` hoạt động như thường lệ. Cửa đi và cửa sổ đi cùng tường, các tường nối giữ mối nối của chúng, và một lần Hoàn tác sẽ lấy lại tất cả.

## Trong các chương trình khác

Mỗi tường được lưu như một khối thông thường, nên các chương trình CAD khác hiển thị nó đúng và có thể di chuyển nó, nhưng không thể chỉnh sửa nó như một tường. `EXPLODE` biến tường thành các đường thẳng và cung thông thường, và khi đó nó không còn là tường nữa.
