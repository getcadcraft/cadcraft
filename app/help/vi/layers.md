---
title: Sắp xếp bản vẽ bằng lớp
summary: Tạo lớp cho tường, cửa đi và ghi chú, đặt màu, làm một lớp thành hiện hành, và tắt, đóng băng, khóa hoặc không cho lớp đó in.
keywords: lớp, layers, la, lớp hiện hành, đóng băng, mở băng, khóa, tắt, bật, in, không in, màu, thuộc tính lớp, layiso, layuniso, cô lập, layoff, layfrz, laymcur, layon, laythw, đổi tên, laymrg, gộp, laydel, xóa lớp
from: ba9f0617
---

## Bạn sẽ làm gì

Ba lớp, Walls, Doors và Notes, mỗi lớp có màu riêng, với các đối tượng được vẽ trên mỗi lớp và dời giữa chúng.

## Bảng Lớp

Các lớp nằm trong bảng bên trái, dưới {{ui:Lớp}}. Mỗi hàng hiện, từ trái sang phải:

- một chấm: đặc cho lớp **hiện hành**, nơi đối tượng mới đi vào;
- một ô màu;
- tên lớp;
- bốn nút: bật/tắt (con mắt), đóng băng (bông tuyết), khóa (ổ khóa) và in (máy in).

Mọi bản vẽ có một lớp tên `0`. Gõ `LA` rồi nhấn {{key:Enter}} để nhảy đến bảng.

## Tạo lớp

1. Nhấp {{ui:Lớp mới}} phía trên danh sách. Một ô tên mở ra.
2. Gõ `Walls` rồi nhấn {{key:Enter}} (hoặc nhấp {{ui:Thêm}}).

Thanh trạng thái nói "Added layer Walls and made it current." Lớp mới nhận màu 7 (đen trên giao diện sáng, trắng trên giao diện tối).

3. Nhấp {{ui:Lớp mới}} lần nữa, gõ `Doors` rồi nhấn {{key:Enter}}.
4. Nhấp {{ui:Lớp mới}} lần nữa, gõ `Notes` rồi nhấn {{key:Enter}}.

Notes giờ là lớp hiện hành.

## Đặt màu cho mỗi lớp

1. Nhấp ô màu ở hàng Walls. Bộ chọn màu của hệ thống mở ra.
2. Chọn một màu và xác nhận.

Ô màu và mọi thứ trên Walls được tô màu {{ui:Theo lớp}} sẽ đổi.

:::note
Màu bạn chọn khớp với một trong 255 màu CAD chuẩn thì được lưu thành số đó. Màu khác được giữ đúng trong CadCraft, nhưng khi lưu vào tệp DWG hoặc DXF nó được lưu thành màu chuẩn gần nhất.
:::

## Vẽ trên một lớp

1. Nhấp tên **Walls** trong danh sách. Chấm của nó đặc lại và thanh trạng thái nói "Current layer: Walls".
2. Vẽ một hình chữ nhật (`REC`). Nó nằm trên Walls.
3. Nhấp **Doors**, và vẽ một cung (`A`). Nó nằm trên Doors.

Bạn cũng có thể chọn lớp hiện hành trong {{ui:Cài đặt hiện tại}} ở bên phải (không chọn gì), dưới {{ui:Lớp}}.

## Dời đối tượng sang lớp khác

1. Chọn các đối tượng.
2. Trong bảng bên phải, chọn lớp mới trong {{ui:Lớp}}.

Chúng chuyển sang lớp đó và nhận màu của nó nếu màu của chúng là {{ui:Theo lớp}}.

## Tắt, đóng băng, khóa và in

| Nút | Tác dụng |
|---|---|
| Bật/tắt (con mắt) | Ẩn các đối tượng của lớp. Chúng không thể thấy, chọn hoặc bắt điểm. |
| Đóng băng (bông tuyết) | Cùng tác dụng với tắt trong CadCraft. Được giữ riêng vì các chương trình khác xử lý chúng khác nhau, và cài đặt được lưu. |
| Khóa (ổ khóa) | Đối tượng vẫn thấy được và bạn có thể bắt điểm vào chúng, nhưng không thể chọn hoặc đổi. Tốt cho một nền bạn vẽ đè lên. |
| In (máy in) | Khi được nhấn, lớp hiện trên màn hình nhưng **bị bỏ khỏi bản in** và PDF. Dùng cho đường dựng và ghi chú cho chính bạn. |

Rê chuột lên nút để xem nó sẽ làm gì ("Turn off", "Freeze", "Lock", "Do not plot this layer").

Bạn không thể tắt lớp hiện hành: thanh trạng thái nói "That is the current layer. Make another layer current first." Nhấp tên một lớp để làm nó hiện hành cũng sẽ bật và mở băng nó.

Mọi thay đổi lớp, trong bảng hay bằng lệnh, là một bước hoàn tác: {{key:Mod+Z}} đưa nó lại.

## Làm việc trên lớp bằng cách chọn đối tượng

Bạn không cần biết tên lớp: chọn một đối tượng trên nó. Gõ lệnh, hoặc mở {{ui:Công cụ}} ở đầu bảng {{ui:Lớp}}.

| Lệnh | Tác dụng |
|---|---|
| {{cmd:LAYISO}} | Chọn các đối tượng, nhấn {{key:Enter}}: chỉ các lớp của chúng còn bật, mọi lớp khác bị tắt. Nếu lớp hiện hành bị tắt, một trong các lớp được cô lập sẽ thành hiện hành. |
| {{cmd:LAYUNISO}} | Bật lại các lớp mà {{cmd:LAYISO}} cuối cùng đã tắt, và trả lại lớp hiện hành mà nó đã đổi. |
| {{cmd:LAYOFF}} | Nhấp các đối tượng lần lượt: lớp của mỗi cái bị tắt. Gõ `U` để lấy lại cái cuối, {{key:Enter}} để kết thúc. |
| {{cmd:LAYFRZ}} | Tương tự, nhưng đóng băng từng lớp. |
| {{cmd:LAYMCUR}} | Nhấp một đối tượng: lớp của nó thành hiện hành (và được bật và mở băng). Khi một đối tượng đã được chọn, nó được dùng. |
| {{cmd:LAYON}} | Bật mọi lớp. |
| {{cmd:LAYTHW}} | Mở băng mọi lớp. |

Lớp hiện hành không bao giờ bị tắt hoặc đóng băng theo cách này: lịch sử nói điều đó, và bạn có thể làm một lớp khác thành hiện hành bằng {{cmd:LAYMCUR}} trước. Chọn một tham chiếu khối thì dùng lớp riêng của tham chiếu đó.

## Đổi tên, gộp và xóa lớp

- {{cmd:RENAME}}: gõ `LA`, tên cũ và tên mới. Mọi đối tượng trên lớp đi theo. (`B` đổi tên một khối theo cách tương tự, cùng mọi tham chiếu đến nó.)
- {{cmd:LAYMRG}}: nhấp một đối tượng trên mỗi lớp để gộp (hoặc gõ `N` và một tên), nhấn {{key:Enter}}, rồi chọn lớp đích và trả lời `Y`. Các đối tượng chuyển sang đích — trong mô hình, trên tờ và bên trong khối — và các lớp đã gộp bị bỏ.
- {{cmd:LAYDEL}}: chọn một đối tượng trên lớp (hoặc `N` và tên của nó) và trả lời `Y`. Lớp đi **cùng mọi đối tượng trên nó**, ở khắp nơi. Lớp 0, DEFPOINTS và lớp hiện hành không thể xóa.

Mỗi lệnh là một bước hoàn tác. Cả ba đều nằm trong {{ui:Công cụ}} ở đầu bảng {{ui:Lớp}}.

1. Nhấp một đường tường, rồi gõ `LAYISO` và nhấn {{key:Enter}}. Chỉ Walls còn bật.
2. Vẽ hoặc đổi những gì bạn cần trên Walls.
3. Gõ `LAYUNISO` và nhấn {{key:Enter}}. Doors và Notes trở lại.

## Lỗi thường gặp

- **Đường mới vào sai lớp.** Kiểm tra chấm nào đang đặc trước khi vẽ. Một lớp mới thành hiện hành ngay khi bạn thêm nó.
- **Một đối tượng không chọn được.** Lớp của nó bị khóa, tắt hoặc đóng băng.
- **Lớp vẫn in trong chương trình khác.** DXF R12 không lưu được "không in". CadCraft giữ cài đặt cho riêng mình khi bản vẽ có tờ, nhưng các chương trình khác sẽ in lớp đó.
- **Tên lớp viết hoa sau khi lưu.** DXF R12 lưu tên bằng chữ hoa, nên `Walls` trở lại thành `WALLS`, và khoảng trắng thành `_`. Một DWG đã lưu giữ tên như bạn đã gõ.
- **Đổi tên, gộp hoặc xóa một lớp.** Dùng {{cmd:RENAME}}, {{cmd:LAYMRG}} hoặc {{cmd:LAYDEL}} (cũng trong {{ui:Công cụ}}): xem bên dưới.

## Nhóm lớp

Giữ danh sách ngắn bằng cách đặt các lớp vào thư mục, như Existing, Proposed và Services. Mỗi thư mục gấp lại được, và các công tắc của nó bật hoặc tắt tất cả các lớp của nó, đóng băng hoặc khóa chúng cùng lúc. Lớp hiện hành không bao giờ bị tắt.

Trong {{ui:Công cụ}} trên bảng Lớp, chọn {{ui:Thêm nhóm có sẵn}} cho một bộ được làm cho công việc nhà ở nhỏ, {{ui:Nhóm theo tên}} để gom các lớp có chung tiền tố (`E-Walls`, `E-Doors`), hoặc {{ui:Nhóm mới}}. Kéo một lớp vào thư mục, hoặc dùng danh sách phía trên các lớp cho lớp hiện hành. Gõ trong {{ui:Tìm lớp}} để thu hẹp danh sách. `LAYGROUP` (`LG`) làm điều tương tự trên dòng lệnh.

Để đổi tên một nhóm, nhấp đúp tên của nó (hoặc chọn nó rồi nhấn {{key:F2}}), gõ tên mới và nhấn {{key:Enter}}; {{key:Esc}} giữ tên cũ, và {{cmd:UNDO}} đưa nó lại. {{ui:Nhóm mới}} nằm trong {{ui:Công cụ}} trên bảng Lớp.

Bản thân các lớp không đổi, nên các chương trình CAD khác thấy chúng như một danh sách phẳng thông thường. CadCraft giữ các nhóm trong tệp.
