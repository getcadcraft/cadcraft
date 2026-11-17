---
title: Tổ chức bản vẽ bằng lớp
summary: Tạo lớp cho tường, cửa và ghi chú, đặt màu, đặt lớp hiện hành, và tắt, đóng băng, khóa hoặc không cho lớp đó in.
keywords: lớp, layer, la, lớp hiện hành, đóng băng, mở băng, khóa, tắt, bật, in, không in, màu, thuộc tính lớp, layiso, layuniso, cô lập, layoff, layfrz, laymcur, layon, laythw, đổi tên, laymrg, gộp, laydel, xóa lớp
from: cd033591
---

## Bạn sẽ tạo gì

Ba lớp: Tường, Cửa và Ghi chú, mỗi lớp có màu riêng, với các đối tượng được vẽ trên từng lớp và được chuyển giữa các lớp.

## Bảng Lớp

Các lớp nằm trong bảng bên trái, dưới {{ui:Lớp}}. Mỗi hàng hiển thị, từ trái sang phải:

- một chấm: được tô đầy cho lớp **hiện hành**, nơi các đối tượng mới được đặt vào;
- một ô màu;
- tên lớp;
- bốn nút: bật/tắt (con mắt), đóng băng (bông tuyết), khóa (ổ khóa) và in (máy in).

Mọi bản vẽ đều có một lớp tên là `0`. Gõ `LA` và nhấn {{key:Enter}} để nhảy đến bảng.

## Tạo lớp

1. Nhấn {{ui:Lớp mới}} phía trên danh sách. Một hộp tên sẽ mở ra.
2. Gõ `Tường` và nhấn {{key:Enter}} (hoặc nhấn {{ui:Thêm}}).

Thanh trạng thái hiện "Đã thêm lớp Tường và đặt làm lớp hiện hành." Lớp mới có màu 7 (đen trên giao diện sáng, trắng trên giao diện tối).

3. Nhấn {{ui:Lớp mới}} lần nữa, gõ `Cửa` và nhấn {{key:Enter}}.
4. Nhấn {{ui:Lớp mới}} lần nữa, gõ `Ghi chú` và nhấn {{key:Enter}}.

Ghi chú hiện là lớp hiện hành.

## Đặt màu cho mỗi lớp

1. Nhấn ô màu trên hàng Tường. Bộ chọn màu của hệ thống bạn sẽ mở ra.
2. Chọn một màu và xác nhận.

Ô màu và mọi thứ trên Tường được tô {{ui:Theo lớp}} sẽ thay đổi.

:::note
Một màu bạn chọn trùng với một trong 255 màu CAD chuẩn sẽ được lưu dưới số đó. Mọi màu khác được giữ nguyên trong CadCraft, nhưng khi lưu thành tệp DWG hoặc DXF sẽ được lưu thành màu chuẩn gần nhất.
:::

## Vẽ trên một lớp

1. Nhấn tên **Tường** trong danh sách. Chấm của nó được tô đầy và thanh trạng thái hiện "Lớp hiện hành: Tường".
2. Vẽ một hình chữ nhật (`REC`). Nó sẽ nằm trên Tường.
3. Nhấn **Cửa**, rồi vẽ một cung tròn (`A`). Nó sẽ nằm trên Cửa.

Bạn cũng có thể chọn lớp hiện hành trong {{ui:Cài đặt hiện tại}} ở bên phải (khi không chọn gì), dưới {{ui:Lớp}}.

## Chuyển đối tượng sang lớp khác

1. Chọn các đối tượng.
2. Trong bảng bên phải, chọn lớp mới trong {{ui:Lớp}}.

Chúng sẽ chuyển sang lớp đó và nhận màu của lớp nếu màu của chúng là {{ui:Theo lớp}}.

## Tắt, đóng băng, khóa và in

| Nút | Chức năng |
|---|---|
| Bật/tắt (con mắt) | Ẩn các đối tượng của lớp. Chúng không thể được nhìn thấy, chọn hoặc bắt điểm. |
| Đóng băng (bông tuyết) | Có tác dụng giống tắt trong CadCraft. Được tách riêng vì các chương trình khác xử lý khác nhau, và thiết lập này được lưu. |
| Khóa (ổ khóa) | Đối tượng vẫn hiển thị và bạn có thể bắt điểm vào chúng, nhưng không thể chọn hoặc thay đổi. Tốt cho nền mà bạn vẽ theo. |
| In (máy in) | Khi được nhấn, lớp vẫn hiển thị trên màn hình nhưng **không đưa vào bản in** và PDF. Dùng cho đường dựng và ghi chú cho chính bạn. |

Di chuyển chuột qua một nút để xem nó sẽ làm gì ("Tắt", "Đóng băng", "Khóa", "Không in lớp này").

Bạn không thể tắt lớp hiện hành: thanh trạng thái hiện "Đó là lớp hiện hành. Hãy đặt lớp khác làm hiện hành trước." Nhấn tên một lớp để đặt làm hiện hành cũng sẽ bật và mở băng lớp đó.

Mọi thay đổi lớp, trong bảng hay bằng lệnh, đều là một bước hoàn tác: {{key:Mod+Z}} sẽ khôi phục lại.

## Thao tác với lớp bằng cách chọn đối tượng

Bạn không cần biết tên lớp: chỉ cần chọn một đối tượng trên lớp đó. Gõ lệnh, hoặc mở {{ui:Công cụ}} ở đầu bảng {{ui:Lớp}}.

| Lệnh | Chức năng |
|---|---|
| {{cmd:LAYISO}} | Chọn đối tượng, nhấn {{key:Enter}}: chỉ các lớp của chúng được giữ bật, mọi lớp khác bị tắt. Nếu lớp hiện hành bị tắt, một trong các lớp được cô lập sẽ thành hiện hành. |
| {{cmd:LAYUNISO}} | Bật lại các lớp mà {{cmd:LAYISO}} lần trước đã tắt, và trả lại lớp hiện hành mà nó đã thay đổi. |
| {{cmd:LAYOFF}} | Nhấn lần lượt từng đối tượng: lớp của mỗi đối tượng bị tắt. Gõ `U` để hoàn tác mục cuối cùng, {{key:Enter}} để kết thúc. |
| {{cmd:LAYFRZ}} | Tương tự, nhưng đóng băng từng lớp. |
| {{cmd:LAYMCUR}} | Nhấn một đối tượng: lớp của nó trở thành hiện hành (và được bật và mở băng). Nếu đã chọn sẵn một đối tượng, đối tượng đó sẽ được dùng. |
| {{cmd:LAYON}} | Bật mọi lớp. |
| {{cmd:LAYTHW}} | Mở băng mọi lớp. |

Lớp hiện hành không bao giờ bị tắt hoặc đóng băng theo cách này: lịch sử lệnh sẽ cho biết điều đó, và bạn có thể đặt lớp khác làm hiện hành bằng {{cmd:LAYMCUR}} trước. Khi chọn một tham chiếu khối, lớp của chính tham chiếu đó được dùng.

## Đổi tên, gộp và xóa lớp

- {{cmd:RENAME}}: gõ `LA`, tên cũ và tên mới. Mọi đối tượng trên lớp sẽ theo. (`B` đổi tên một khối theo cùng cách, cùng với mọi tham chiếu đến nó.)
- {{cmd:LAYMRG}}: nhấn một đối tượng trên mỗi lớp cần gộp (hoặc gõ `N` và một tên), nhấn {{key:Enter}}, rồi chọn lớp đích và trả lời `Y`. Các đối tượng chuyển sang lớp đích, trong mô hình, trên các tờ và bên trong khối, và các lớp đã gộp sẽ bị xóa.
- {{cmd:LAYDEL}}: chọn một đối tượng trên lớp (hoặc gõ `N` và tên của nó) và trả lời `Y`. Lớp sẽ bị xóa **cùng với mọi đối tượng trên lớp đó**, ở mọi nơi. Lớp 0, DEFPOINTS và lớp hiện hành không thể xóa.

Mỗi thao tác là một bước hoàn tác. Cả ba đều có trong {{ui:Công cụ}} ở đầu bảng {{ui:Lớp}}.

1. Nhấn một đường tường, rồi gõ `LAYISO` và nhấn {{key:Enter}}. Chỉ Tường được giữ bật.
2. Vẽ hoặc thay đổi những gì bạn cần trên Tường.
3. Gõ `LAYUNISO` và nhấn {{key:Enter}}. Cửa và Ghi chú sẽ trở lại.

## Lỗi thường gặp

- **Nét mới được đặt sai lớp.** Kiểm tra chấm nào đang được tô đầy trước khi vẽ. Lớp mới trở thành hiện hành ngay khi bạn thêm nó.
- **Đối tượng không chọn được.** Lớp của nó bị khóa, tắt hoặc đóng băng.
- **Lớp vẫn in trong chương trình khác.** DXF R12 không lưu được "không in". CadCraft giữ thiết lập này cho riêng mình khi bản vẽ có tờ, nhưng các chương trình khác sẽ in lớp đó.
- **Tên lớp viết hoa sau khi lưu.** DXF R12 lưu tên bằng chữ hoa, nên `Tường` sẽ thành `TƯỜNG`, và khoảng trắng thành `_`. Tệp DWG đã lưu giữ tên đúng như bạn gõ.
- **Đổi tên, gộp hoặc xóa lớp.** Dùng {{cmd:RENAME}}, {{cmd:LAYMRG}} hoặc {{cmd:LAYDEL}} (cũng có trong {{ui:Công cụ}}): xem bên dưới.

## Nhóm lớp

Giữ danh sách ngắn bằng cách đặt các lớp vào thư mục, như Hiện có, Đề xuất và Dịch vụ. Mỗi thư mục có thể thu gọn, và các công tắc của nó bật hoặc tắt tất cả lớp trong đó, hoặc đóng băng hoặc khóa chúng cùng lúc. Lớp hiện hành không bao giờ bị tắt.

Trong {{ui:Công cụ}} trên bảng Lớp, chọn {{ui:Thêm nhóm có sẵn}} để có một bộ được làm sẵn cho công việc nhà ở quy mô nhỏ, {{ui:Nhóm theo tên}} để nhóm các lớp có chung tiền tố (`E-Tường`, `E-Cửa`), hoặc {{ui:Nhóm mới}}. Kéo một lớp vào thư mục, hoặc dùng danh sách phía trên các lớp để chọn lớp hiện hành. Gõ trong {{ui:Tìm lớp}} để thu hẹp danh sách. `LAYGROUP` (`LG`) làm điều tương tự ở dòng lệnh.

Các lớp không thay đổi, nên các chương trình CAD khác thấy chúng như một danh sách phẳng thông thường. CadCraft giữ các nhóm trong tệp.
