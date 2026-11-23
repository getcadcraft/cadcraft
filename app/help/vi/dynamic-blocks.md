---
title: Khối động
summary: CadCraft làm gì với khối động trong DWG: giữ đúng tên của chúng, hiện trạng thái đã lưu, chuyển trạng thái hiển thị, xem các giá trị khác, và vẫn là khối động khi lưu.
keywords: khối động, trạng thái hiển thị, lật, kéo giãn, tra cứu, tham số, tùy chỉnh, thuộc tính khối, *u blocks, động
from: dea2ee7c
---

## Những gì hoạt động

Một DWG có khối động mở ra với chúng hoạt động đến mức sau:

- **Tên đúng của chúng.** Một khối động được liệt kê trong bảng {{ui:Khối}} dưới tên riêng của nó ("Receptacle", "Sink"), không phải là khối `*U` không tên.
- **Trạng thái mà chúng được lưu.** Mỗi tham chiếu hiện đúng những gì chương trình kia đã hiển thị: trạng thái hiển thị đã được đặt, được kéo giãn hoặc lật như lúc lưu.
- **Chuyển trạng thái hiển thị.** Chọn một tham chiếu (hoặc vài tham chiếu cùng khối), mở {{ui:Thuộc tính}}, và trong mục {{ui:Tùy chỉnh}} chọn trạng thái khác từ danh sách {{ui:Trạng thái hiển thị}}. Tham chiếu hiện trạng thái đó ngay, các thuộc tính của nó cũng vậy: những thuộc tính trạng thái ẩn đi sẽ biến mất, những thuộc tính trạng thái hiện ra sẽ xuất hiện với giá trị của chúng. Một tham chiếu giữ mọi giá trị, nên không có gì trở về trống; {{ui:Thuộc tính}} liệt kê những cái bị ẩn, đánh dấu "đã ẩn". {{key:Mod+Z}} đưa trạng thái cũ trở lại trong một bước.
- **Grip.** Một khối động đang chọn hiện các grip riêng tại chỗ các tham số của nó: một tam giác nhỏ cho trạng thái hiển thị (nhấp để xem danh sách trạng thái), mũi tên ở hai đầu một khoảng cách, mũi tên kép cho lật. Hiện nay chỉ grip trạng thái hiển thị có tác dụng; các grip khác báo điều đó trên thanh trạng thái.
- **Các giá trị khác, chỉ đọc.** Bên dưới danh sách hiển thị, {{ui:Tùy chỉnh}} cũng hiện các khoảng cách, góc căn chỉnh, trạng thái lật và điểm của khối như bản vẽ đang giữ.
- **Chỉnh sửa trạng thái hiển thị.** Mở khối bằng {{cmd:BEDIT}}: trình soạn hiện một trạng thái, được ghi tên trên thanh phía trên bản vẽ (chọn trạng thái khác ở đó). Gõ {{cmd:BVSTATE}} để chuyển, thêm (ẩn mọi thứ, hiện mọi thứ, hoặc giữ những gì đang hiện), đổi tên hoặc xóa một trạng thái; {{cmd:BVHIDE}} ẩn các đối tượng đã chọn trong trạng thái đang hiện; {{cmd:BVSHOW}} hiện các đối tượng bị ẩn dưới dạng mờ để bạn nhấp chọn những cái cần đưa lại. Lưu khối: các tham chiếu đặt ở trạng thái đã đổi tên giữ nó dưới tên mới, và các tham chiếu đặt ở trạng thái đã xóa hiện trạng thái đầu tiên.
- **Vẫn là khối động.** Lưu thành DWG ở phiên bản bản vẽ đã mở ra, các khối vẫn là khối động, với trạng thái bạn đã chọn: chương trình kia mở chúng như cùng các khối động đó. Các trạng thái hiển thị bạn đã sửa cũng được lưu: tên mới, các trạng thái bạn đã thêm và những gì mỗi trạng thái hiện.

## Những gì chỉ đọc, hoặc chưa có

| Chưa có | Thay vào đó, hiện tại |
|---|---|
| Thay đổi khoảng cách, góc hoặc lật (các hành động kéo giãn, dời, lật) | Chúng hiện chỉ đọc trong {{ui:Tùy chỉnh}}; sửa trong chương trình đã tạo khối. |
| Tham số tra cứu, XY, xoay và cực | Chưa đọc: tham chiếu hiện như đã lưu. |
| Kéo các grip khoảng cách, lật và điểm | Chúng hiện đúng vị trí các tham số; grip trạng thái hiển thị và danh sách {{ui:Trạng thái hiển thị}} trong Thuộc tính chuyển trạng thái. |
| Tạo khối động cùng loại với chương trình kia (kéo giãn, lật, tra cứu) | Khối bạn tạo trong CadCraft là khối thường; {{cmd:BPARAMETER}} nói điều đó. Tham số riêng và nhiều tham số hiển thị nằm trong trình quản lý Tham số (xem "Tham số và trạng thái hiển thị riêng" bên dưới). |
| Thêm hoặc xóa đối tượng của khối có trạng thái hiển thị trong trình soạn khối | Khối khi đó được lưu thành khối thường (trình soạn nói điều đó khi đóng). |
| Giữ chúng là khối động trong một phiên bản DWG khác hoặc trong DXF | Chúng được lưu thành khối thường hiện trạng thái bạn đã chọn, và lần lưu nói điều đó. |

:::note
Dời hoặc đổi đối tượng trong {{cmd:BEDIT}} giữ khối có trạng thái hiển thị là khối động. Khối không có trạng thái, hoặc khối mà đối tượng được thêm hoặc xóa trong trình soạn, sẽ thành khối thường.
:::

## Tham số và trạng thái hiển thị riêng

Khối bạn tạo trong CadCraft có thể mang tham số riêng và **nhiều** tham số hiển thị, mỗi tham số có trạng thái riêng. Gõ {{cmd:BPARAMS}} (hoặc `BPM`) để mở **Trình quản lý tham số** cho khối đang sửa trong {{cmd:BEDIT}}, cho khối của tham chiếu đã chọn, hoặc cho khối bạn nêu tên.

- **Tham số**: một tên, một kiểu (số, chiều dài, góc, đếm, có/không), và một giá trị hoặc công thức trên các tham số khác (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Cho ra}} hiện kết quả. Một công thức không chạy được, hoặc một giá trị không hợp kiểu của nó (đếm 1.5), bị từ chối và trình quản lý nói lý do; không có gì khác đổi.
- **Tham số hiển thị**: {{ui:Thêm tham số hiển thị}} tạo một cái với trạng thái đầu tiên. Mỗi trạng thái có thể đổi tên, gỡ (trạng thái cuối cùng vẫn còn), hoặc được gán một số "hiện khi". Một công thức chọn trạng thái từ các tham số (trạng thái có số khớp, nếu không thì trạng thái ở vị trí đó trong danh sách); không có công thức, mỗi tham chiếu tự chọn.
- **Đặt đối tượng vào một trạng thái**: trong trình soạn khối, chọn các đối tượng, gõ {{cmd:BPARAMS}}, rồi nhấp {{ui:Đặt các đối tượng đã chọn vào đây}} tại trạng thái. Đối tượng mà không tham số hiển thị nào liệt kê luôn hiện.
- **Tham chiếu này**: khi bắt đầu từ một tham chiếu đã chọn, trình quản lý cũng hiện các giá trị và trạng thái riêng của tham chiếu đó.

Ngoài trình soạn khối, mọi thay đổi là một bước hoàn tác. Trong trình soạn khối, các thay đổi thuộc về trình soạn: {{ui:Lưu khối}} giữ chúng. `-BPARAMS` hỏi cùng nội dung trên dòng lệnh.

**Trong tệp.** DWG và DXF giữ các tham số, đối tượng nào ở trạng thái nào, và giá trị riêng của mỗi tham chiếu, trong các bản ghi riêng của CadCraft; mở lại tệp trong CadCraft thì mọi thứ trở lại. Chương trình khác thấy mỗi tham chiếu là khối với đầy đủ các đối tượng, vì một DWG chỉ giữ tối đa một tham số hiển thị cho mỗi khối cùng loại. Một tham chiếu mà chương trình khác đã dời, hoặc một khối có đối tượng mà nó đã đổi, sẽ quay lại không có các phần không còn khớp (không đoán gì cả).
