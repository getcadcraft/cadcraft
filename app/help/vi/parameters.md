---
title: Dùng tham số và phương trình
summary: Đặt tên cho các kích thước, điều khiển chúng bằng biểu thức như width / 2, và gõ một số trên kích thước bị điều khiển để đổi thứ đang điều khiển nó.
keywords: tham số, par, trình quản lý tham số, phương trình, biểu thức, biến, hai chiều, ý đồ thiết kế, tham số người dùng, fx
from: 650b9844
---

## Một bảng cho mọi kích thước

Bảng {{ui:Parameters}} (nút {{ui:Parameters}} trong nhóm {{ui:Parametric}}, hoặc gõ {{cmd:PARAMETERS}}) liệt kê cùng lúc mọi ràng buộc kích thước (`d1`, `rad1`, `dia1`, `ang1`, hoặc tên bạn đã đặt) và các tham số riêng của bạn. Mọi tên đều dùng được trong mọi biểu thức.

Mỗi hàng có:

- **Tên**: gõ tên mới để đổi; mọi biểu thức dùng nó sẽ theo.
- **Biểu thức**: một số (`40`) hoặc một biểu thức (`width / 2 + gap`). Gõ vào và nhấn {{key:Enter}}: bản vẽ sẽ theo.
- **Giá trị**: kết quả tính được. Trên một hàng mà biểu thức đang điều khiển, bạn cũng có thể gõ một số vào đây: CadCraft sẽ tính ngược ra tham số đứng sau nó. Với `d1 = width / 2`, gõ `30` vào giá trị của d1 sẽ đặt `width` thành 60.

Khi hai tham số cùng điều khiển một giá trị (`width / 2 + gap`), một hộp thoại sẽ hỏi bạn muốn đổi cái nào. Mỗi thay đổi là một bước hoàn tác ({{key:Mod+Z}}).

## Thêm của riêng bạn

1. Mở bảng {{ui:Parameters}}.
2. Gõ một tên (`gap`) và một giá trị (`10`), rồi chọn {{ui:Add}}.
3. Dùng nó: trong biểu thức của d1, gõ `width / 2 + gap` và nhấn {{key:Enter}}.

Tên bắt đầu bằng một chữ cái hoặc `_`, và chỉ gồm chữ cái, chữ số và `_`. Tên hàm, `pi` và tên đơn vị không được dùng làm tên.

## Biểu thức

| Gõ | Nghĩa |
|---|---|
| `+ - * / ^ %` | cộng, trừ, nhân, chia, lũy thừa, phần dư |
| `( )` | nhóm |
| `sin cos tan asin acos atan atan2` | lượng giác, theo độ |
| `sqrt pow exp ln log abs sign` | căn, lũy thừa, logarit |
| `ceil floor int round min max` | làm tròn và giới hạn |
| `if(a > b, x, y)` | một lựa chọn |
| `pi` | 3.14159… |

Số có thể mang đơn vị: `25mm`, `1in`, `2'`, `90deg`. Chiều dài có đơn vị được đổi thành milimét, nên chỉ dùng đơn vị trong bản vẽ đo bằng milimét; ở nơi khác hãy gõ số thường.

## Ở dòng lệnh

`-PARAMETERS` làm cùng việc mà không cần bảng: `N` mới, `E` sửa (cả ràng buộc kích thước), `R` đổi tên, `D` xóa, `?` liệt kê.

## Những gì bị từ chối

- Một biểu thức tự tham chiếu đến chính nó, trực tiếp hoặc qua các biểu thức khác: "width và d1 phụ thuộc lẫn nhau."
- Một giá trị mà kích thước không thể nhận: chiều dài âm, hoặc góc trên 180°.
- Một giá trị mà bản vẽ không thể nhận cùng các ràng buộc khác: không có gì thay đổi, và thông báo nêu tên các ràng buộc đang cản.
- Xóa một tham số đang được dùng: bảng sẽ đề nghị ghi giá trị của nó vào các chỗ dùng trước. Tên của một ràng buộc kích thước được xóa bằng cách xóa chính ràng buộc đó.
