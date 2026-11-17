---
title: Khối động
summary: CadCraft xử lý khối động trong DWG thế nào: chúng giữ tên thật, hiển thị trạng thái đã lưu, chuyển trạng thái hiển thị, hiển thị các giá trị khác, và vẫn là khối động khi được lưu.
keywords: khối động, dynamic block, dynamic blocks, hiển thị, visibility, trạng thái hiển thị, lật, kéo giãn, tra cứu, tham số, tùy chỉnh, thuộc tính khối, khối *u, dynamic
from: 26b6aa80
---

## Những gì hoạt động

Một DWG được tạo bằng khối động sẽ mở với chúng hoạt động đến mức này:

- **Tên thật của chúng.** Một khối động được liệt kê trong bảng {{ui:Khối}} dưới tên riêng ("Receptacle", "Sink"), không phải là khối `*U` không tên.
- **Trạng thái đã lưu của chúng.** Mỗi tham chiếu hiển thị đúng những gì chương trình khác đã hiển thị: trạng thái hiển thị đã được đặt, được kéo giãn hoặc lật như khi đã lưu.
- **Chuyển trạng thái hiển thị.** Chọn một tham chiếu (hoặc vài tham chiếu cùng khối), mở {{ui:Thuộc tính}}, và trong mục {{ui:Tùy chỉnh}} chọn một trạng thái khác từ danh sách {{ui:Trạng thái hiển thị}}. Tham chiếu hiển thị trạng thái đó ngay, cả các thuộc tính của nó: những thuộc tính trạng thái ẩn sẽ biến mất, những thuộc tính nó hiện sẽ xuất hiện với giá trị. Một tham chiếu giữ mọi giá trị, nên không có gì trở về rỗng; {{ui:Thuộc tính}} liệt kê những cái bị ẩn với đánh dấu "ẩn". {{key:Mod+Z}} đưa trạng thái cũ trở lại trong một bước.
- **Grip.** Một khối động được chọn hiển thị grip riêng tại nơi các tham số của nó nằm: một tam giác nhỏ cho trạng thái hiển thị (nhấp để xem danh sách trạng thái), mũi tên ở hai đầu một khoảng cách, mũi tên kép cho lật. Chỉ grip hiển thị có tác dụng hiện tại; các grip khác thông báo điều đó trên thanh trạng thái.
- **Các giá trị khác, chỉ đọc.** Dưới danh sách hiển thị, {{ui:Tùy chỉnh}} cũng hiển thị khoảng cách, góc căn chỉnh, trạng thái lật và các điểm của khối như bản vẽ đang giữ.
- **Chỉnh sửa trạng thái hiển thị.** Mở khối bằng {{cmd:BEDIT}}: trình chỉnh sửa hiển thị một trạng thái, được ghi tên trên thanh phía trên bản vẽ (chọn trạng thái khác ở đó). Gõ {{cmd:BVSTATE}} để chuyển, thêm (ẩn mọi thứ, hiện mọi thứ hoặc giữ những gì đang hiện), đổi tên hoặc xóa một trạng thái; {{cmd:BVHIDE}} ẩn các đối tượng được chọn trong trạng thái đang hiện; {{cmd:BVSHOW}} hiện những cái đã ẩn, mờ đi để bạn nhấp vào cái cần đưa trở lại. Lưu khối: các tham chiếu đặt sang trạng thái đã đổi tên sẽ giữ nó dưới tên mới, còn những tham chiếu đặt sang trạng thái đã xóa sẽ hiển thị trạng thái đầu tiên.
- **Vẫn là khối động.** Khi lưu dưới dạng DWG theo phiên bản của bản vẽ, các khối vẫn động, với trạng thái bạn đã chọn: chương trình khác mở chúng như những khối động giống nhau. Các trạng thái hiển thị bạn đã chỉnh sửa cũng được lưu: tên mới, các trạng thái bạn đã thêm và những gì mỗi trạng thái hiển thị.

## Chỉ đọc, hoặc chưa có

| Chưa có | Hiện tại thay vào đó |
|---|---|
| Thay đổi khoảng cách, góc hoặc lật (các hành động kéo giãn, dời, lật) | Chúng hiển thị chỉ đọc trong {{ui:Tùy chỉnh}}; chỉnh sửa trong chương trình đã tạo ra khối. |
| Tham số tra cứu, XY, xoay và cực | Chưa đọc: tham chiếu hiển thị như đã lưu. |
| Kéo grip khoảng cách, lật và điểm | Chúng hiển thị nơi các tham số nằm; grip hiển thị và danh sách {{ui:Trạng thái hiển thị}} trong Thuộc tính chuyển trạng thái. |
| Tạo khối động (thêm tham số, hoặc thêm trạng thái hiển thị vào khối chưa có) | Khối bạn tạo trong CadCraft là khối thường; {{cmd:BPARAMETER}} cho biết điều đó. |
| Thêm hoặc xóa đối tượng của khối có trạng thái hiển thị trong trình chỉnh sửa khối | Khối khi đó được lưu như khối thường (trình chỉnh sửa cho biết khi đóng). |
| Giữ chúng động trong phiên bản DWG khác hoặc trong DXF | Chúng được lưu như khối thường hiển thị trạng thái bạn chọn, và việc lưu cho biết điều đó. |

:::note
Di chuyển hoặc thay đổi đối tượng trong {{cmd:BEDIT}} giữ một khối có trạng thái hiển thị ở dạng động. Một khối không có trạng thái, hoặc một khối có đối tượng được thêm hoặc xóa trong trình chỉnh sửa, sẽ thành khối thường.
:::
