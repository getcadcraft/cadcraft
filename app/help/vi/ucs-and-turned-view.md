---
title: Xoay khung nhìn và dùng hệ tọa độ riêng (UCS)
summary: Xoay khung nhìn 90° hoặc theo góc bất kỳ mà không di chuyển gì trong bản vẽ, và đặt hệ tọa độ người dùng (UCS) để các điểm, ortho, truy vết cực, lưới và văn bản mới theo trục riêng của công trình.
keywords: ucs, hệ tọa độ người dùng, mặt bằng, xoay khung nhìn, xoay góc nhìn, xoắn khung nhìn, ucs z, ucs 3point, ucs object, ucs world, ucs đặt tên, ucsfollow, turnleft, turnright, turnworld, công trình nghiêng, lưới xoay
from: 6f152c65
---

## Bạn sẽ học gì

Cách xem một bản vẽ đã xoay, để một công trình vẽ theo góc nhìn vuông góc trên màn hình, và cách gõ các điểm dọc theo trục riêng của nó. Không có gì trong bản vẽ di chuyển khi bạn làm việc này: các đối tượng giữ nguyên tọa độ, việc xoay không phải là một chỉnh sửa, và bản vẽ không bị đánh dấu là đã thay đổi.

## Xoay khung nhìn một góc vuông

1. Nhấn {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Xoay khung nhìn 90° trái}} hoặc {{ui:Xoay khung nhìn 90° phải}}.

Bản vẽ xoay trên màn hình quanh giữa vùng bản vẽ. Làm lại để tiếp tục xoay.

2. Nhấn {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Về thế giới}} để đặt lại thẳng.

Các lệnh đằng sau chúng là {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} và {{cmd:TURNWORLD}}. Để gán một phím cho một lệnh, thêm một dòng như `TL=TURNLEFT` vào các bí danh của bạn bằng {{cmd:ALIASEDIT}}.

## Căn theo một công trình nghiêng

1. Gõ `UCS` rồi nhấn {{key:Enter}}, sau đó `OB` và {{key:Enter}}.
2. Nhấn một đường tường gần đầu nên là gốc.

UCS giờ bắt đầu ở đầu đó với trục X dọc theo tường, và khung nhìn xoay để tường nằm thẳng trên màn hình. Biểu tượng trục ở góc dưới bên trái cho biết các trục UCS hướng về đâu.

3. Vẽ như bình thường. Khi UCS đã được đặt:
   - `x,y` và `@dx,dy` được đo dọc theo các trục UCS; `d<a` đo góc từ trục X của UCS.
   - {{ui:Ortho}}, truy vết cực và lưới đi theo các trục UCS, và con trỏ chữ thập cũng vậy.
   - Văn bản mới và đoạn mới chạy dọc theo trục X của UCS; phương ngang và dọc của {{cmd:DIMLINEAR}} cũng theo nó.
   - Tọa độ trên thanh trạng thái và từ {{cmd:ID}} là tọa độ UCS.
4. Để gõ một điểm trong thế giới khi có UCS, đặt `*` phía trước: `*0,0` hoặc `@*100,0`.
5. Gõ `UCS`, {{key:Enter}}, rồi {{key:Enter}} lần nữa để quay lại thế giới.

## Các cách khác để đặt UCS

Tại dòng nhắc {{cmd:UCS}}:

| Bạn gõ | Điều nó làm |
|---|---|
| một điểm | Một gốc mới; sau đó nhấn một điểm trên trục X mới, hoặc nhấn {{key:Enter}} để giữ góc |
| `Z` | Xoay UCS quanh gốc của nó một góc bạn gõ (độ, ngược chiều kim đồng hồ) hoặc chọn |
| `3` (3point) | Một gốc, một điểm dọc theo trục X dương, và một điểm ở phía Y dương |
| `OB` (OBject) | Từ một đường thẳng, cung, hình tròn, đoạn đa tuyến, văn bản, tham chiếu khối, điểm hoặc đường dựng |
| `P` (Previous) | UCS trước cái này (mười cái gần nhất được giữ khi bản vẽ đang mở) |
| `W` (World) | Trở về thế giới |
| `NA` (NAmed) | `S` lưu UCS hiện tại dưới một tên, `R` khôi phục một cái, `D` xóa một cái, `?` liệt kê chúng |

Mọi thay đổi đều xoay khung nhìn sao cho trục X của UCS mới nằm ngang. {{cmd:PLAN}} xoay khung nhìn mà không đổi UCS: {{key:Enter}} cho UCS hiện tại, `U` cho một UCS đã lưu, `W` cho thế giới.

## Điều nên biết

- Mỗi khung của màn hình chia đôi giữ phép xoay riêng của nó. UCS thuộc về bản vẽ.
- Các tờ làm việc bằng tọa độ giấy; hãy đặt UCS trên thẻ {{ui:Mô hình}}, hoặc bên trong một khung nhìn.
- Các cửa sổ chọn kéo trong khung nhìn đã xoay chọn những gì nằm bên trong chúng trên màn hình.
- Các chương trình LISP nhận điểm trong UCS từ `getpoint`, có thể đọc `UCSORG`, `UCSXDIR`, `UCSYDIR` và `VIEWTWIST`, và `trans` chuyển đổi giữa thế giới, UCS và màn hình.

:::note
Tệp đã lưu giữ UCS và góc xoay của khung nhìn trong một bản dựng sau; cho đến lúc đó chúng được giữ khi bản vẽ đang mở.
:::
