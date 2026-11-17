---
title: Bảng Thuộc tính
summary: Xem và đổi mọi thứ của các đối tượng được chọn, nhiều cái cùng lúc: tọa độ có Z, kích thước, văn bản, thiết lập kích thước, độ trong suốt và nhiều hơn nữa. Các ô nhận biểu thức và độ dài có đơn vị.
keywords: tổng, tổng chiều dài, tổng diện tích, tổng, chiều dài vùng chọn, thuộc tính, bảng thuộc tính, ctrl+1, pr, ch, mo, ddmodify, khác nhau, chọn nhanh, pickadd, tọa độ, z, cao độ, độ dày, độ trong suốt, vật liệu, liên kết, biểu thức, quickcalc, đỉnh, kiểu kích thước, dung sai, số thập phân
from: 10d6a829
---

## Bạn sẽ học được gì

Cách mở bảng Thuộc tính, đổi một đối tượng hoặc một trăm đối tượng trong một bước, nhập tọa độ chính xác (có Z), dùng biểu thức và đơn vị trong mọi ô số, và mỗi loại đối tượng hiển thị những gì.

## Mở bảng

Bảng nằm bên phải. Để đưa nó lên trước:

- Nhấn {{key:Mod+1}}, hoặc gõ {{cmd:PROPERTIES}} (hoặc `PR`, `CH`, `MO`).
- Nhấp đúp một đối tượng (văn bản và multileader mở trình soạn thảo văn bản của chúng thay vì).

Bảng là một bảng di chuyển được như các bảng khác: kéo tay cầm của nó để gắn sang trái, phải hoặc dưới, hoặc thả nó lên bản vẽ để tách ra (xem [Sắp xếp các bảng và dùng màn hình thứ hai](common:arrange-panels)).

### Gập lại

Nút ghim ở góc trên bên phải của bảng bật **tự động ẩn**: bảng gập thành một dải ở mép phải và bản vẽ có thêm chỗ. Đưa con trỏ tới dải (hoặc nhấn {{key:Mod+1}}) và nó mở ra trên bản vẽ; rời đi thì nó gập lại. Nhấp ghim lần nữa để giữ mở. {{cmd:PROPERTIESCLOSE}} cũng gập nó.

## Các mục

Thuộc tính được nhóm thành các mục có thể gập: **Chung**, **Hình học**, **Văn bản**, **Đường và mũi tên**, **Khớp**, **Đơn vị chính**, **Đơn vị phụ**, **Dung sai**, **Mẫu**, **Khác**, và với khối là **Thuộc tính** và **Mục thư viện**. Nhấp tên một mục để gập hoặc mở nó; CadCraft nhớ mục nào bạn đã gập.

Kéo đường mảnh giữa tên và giá trị để làm cột tên rộng hơn hoặc hẹp hơn. Nhấp đúp vào nó để đặt lại. Bằng bàn phím, đưa tiêu điểm vào đó và dùng các phím mũi tên.

## Đổi một giá trị

1. Nhấp một dòng. Tiêu đề ghi "Line".
2. Nhấp vào {{ui:Chiều dài}}. Khi bạn sửa, ô hiện đầy đủ giá trị, không phải giá trị đã làm tròn.
3. Gõ `2500` và nhấn {{key:Enter}}. Đường có chiều dài 2500, giữ điểm đầu và góc của nó.

{{key:Enter}} hoặc nhấp chỗ khác sẽ áp dụng giá trị; {{key:Esc}} đặt lại giá trị cũ. Mỗi thay đổi là một bước hoàn tác.

### Biểu thức và đơn vị

Mọi ô số nhận nhiều hơn một con số đơn giản:

| Bạn gõ | Bạn nhận được |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inch, trong bản vẽ tính bằng feet và inch) |
| `900mm`, `3.5m`, `2ft` | Đổi thành đơn vị của bản vẽ |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (ô góc) |
| `0.5r`, `100g` | Radian và grad, quy đổi thành độ |

Một độ dài có đơn vị cần bản vẽ có đơn vị: đặt {{ui:Đơn vị}} trong {{ui:Đối tượng mới}} (khi không chọn gì) trước. Một mục nhập sai bị từ chối, kèm ghi chú dưới bảng, và không có gì thay đổi; nó không bao giờ được lưu thành 0. Các hàm: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; góc tính theo độ.

## Đổi nhiều đối tượng cùng lúc

1. Chọn nhiều đối tượng, ví dụ 8 đường và 4 kích thước.
2. Tiêu đề ghi "12 đối tượng", và một danh sách ở đầu cho chọn **Tất cả (12)**, **Đường thẳng (8)** và **Kích thước (4)**.
3. **Tất cả** hiển thị những gì mọi đối tượng có (lớp, màu, kiểu đường…). Chọn **Kích thước (4)** để xem thiết lập kích thước.
4. Đổi một giá trị, ví dụ {{ui:Số thập phân}} thành `1`.

Cả bốn kích thước đổi, trong một bước hoàn tác. Một ô ghi **Khác nhau** nghĩa là các đối tượng khác nhau; gõ một giá trị sẽ đặt nó cho tất cả. Các đối tượng trên lớp bị khóa được để nguyên, và ghi chú cho biết có bao nhiêu đối tượng như vậy.

## Tổng của vùng chọn

Khi có nhiều đối tượng được chọn, mục {{ui:Tổng}} ở đầu cho biết:

- **Đối tượng**: mỗi loại có bao nhiêu, ví dụ "8 đường, 2 đa tuyến, 1 vòng tròn".
- **Tổng chiều dài**: cộng các đường, cung và đa tuyến (spline cũng được tính), và có bao nhiêu đối tượng như vậy.
- **Tổng diện tích**: cộng các đối tượng khép kín: vòng tròn, elip đầy đủ, đa tuyến khép kín và hatch (lỗ của hatch được trừ đi).

Chúng theo định dạng chiều dài của bản vẽ (feet và inch khi bản vẽ dùng; khi đó diện tích tính bằng inch vuông và feet vuông). Thanh trạng thái hiển thị cùng chiều dài và diện tích mỗi khi có đối tượng được chọn; {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Chiều dài và diện tích của vùng chọn}} › {{ui:Ẩn}} tắt điều đó. Với một đối tượng, {{ui:Hình học}} hiển thị chiều dài và diện tích riêng của nó, như trước.

## Tọa độ

Mọi điểm hiển thị **X**, **Y** và **Z**: điểm đầu và cuối của đường, tâm, điểm chèn, vị trí văn bản, đỉnh đa tuyến hiện tại. Đường cũng hiển thị **Delta X**, **Delta Y** và **Delta Z** (chỉ đọc). Đa tuyến và hatch có một **Cao độ** (một Z cho cả đối tượng).

Nút chữ thập cạnh tên điểm cho phép bạn chọn điểm đó trên bản vẽ thay thế: nhấp nó, rồi nhấp vị trí mới (các bắt điểm vẫn hoạt động). Giá trị là tọa độ thế giới.

## Chung

| Ô | Ý nghĩa |
|---|---|
| {{ui:Lớp}}, {{ui:Màu}}, {{ui:Kiểu đường}}, {{ui:Tỷ lệ kiểu đường}}, {{ui:Độ dày nét}} | Như trong bảng lớp; {{ui:Theo lớp}} theo lớp |
| {{ui:Độ trong suốt}} | Theo lớp, theo khối, hoặc 0 đến 90% |
| {{ui:Độ dày}} | Đường, vòng tròn, cung, đa tuyến, điểm và văn bản kéo dài bao xa theo Z |
| {{ui:Vật liệu}} | Theo lớp, theo khối, Global, hoặc một tên mà bản vẽ mang vào |
| {{ui:Kiểu nét in}} | Chỉ đọc: bản vẽ được in theo màu, qua [bảng kiểu nét in](topic:plot-pdf#plot-style-tables) của tờ |
| {{ui:Liên kết}} | Một địa chỉ web được giữ cùng đối tượng |

## Mỗi loại hiển thị gì

| Được chọn | Bạn có thể đổi |
|---|---|
| Đường | X, Y, Z điểm đầu và cuối; chiều dài; góc |
| Vòng tròn | Tâm; bán kính; đường kính; chu vi; diện tích (mỗi cái đặt lại bán kính) |
| Cung | Tâm; bán kính; góc đầu và cuối; tổng góc; dây cung (hiển thị chiều dài cung và diện tích) |
| Elip | Tâm; bán kính trục chính và trục phụ; tỷ lệ bán kính; góc trục chính; góc đầu và cuối |
| Đa tuyến | Trình duyệt đỉnh (bên dưới); độ rộng chung; cao độ; khép kín; diện tích khi khép kín (co giãn quanh tâm của nó) |
| Văn bản | Nội dung; kiểu; căn chỉnh; chiều cao; góc xoay; hệ số rộng; góc nghiêng; chiều rộng xác định; khoảng cách dòng; chú thích; vị trí |
| Tham chiếu khối | Điểm chèn; góc xoay; tỷ lệ X, Y, Z và tỷ lệ đều; giá trị thuộc tính |
| Hatch | Mẫu; tỷ lệ; góc; gốc; liên kết; phát hiện đảo; màu nền; cao độ |
| Kích thước | Xem bên dưới |
| Đường dẫn nhiều (multileader) | Văn bản; chiều cao; chiều rộng; phía văn bản; kích thước mũi tên; khoảng cách hạ cánh; điểm mũi tên |
| Khung nhìn (viewport) | Tỷ lệ; tâm và kích thước trên tờ; tâm khung nhìn trong mô hình; bật; khóa hiển thị |

### Đỉnh đa tuyến

{{ui:Đỉnh hiện tại}} cho biết đỉnh nào các ô bên dưới thuộc về. Dùng các nút mũi tên, hoặc gõ một số, để chuyển sang đỉnh khác; không có giới hạn về số đỉnh. Mỗi đỉnh có X, Y, độ rộng đoạn đầu và cuối, và độ cong của đoạn bắt đầu tại đó (0 = thẳng).

## Kích thước

Một kích thước hiển thị **Kiểu kích thước** của nó, cái nó đo, các điểm của nó, và mọi thiết lập:

- **Đường và mũi tên:** đầu mũi tên cho mỗi đầu, kích thước mũi tên, kích thước dấu gạch, màu và độ dày nét của đường kích thước và đường gióng, ẩn một nửa hoặc một đường gióng, độ lệch của đường gióng và phần kéo dài của nó.
- **Văn bản:** ghi đè (để trống để dùng giá trị đo; `<>` đại diện cho nó trong văn bản của bạn), kiểu, màu, chiều cao, độ lệch, vị trí dọc và ngang, luôn nằm ngang, góc xoay, nền tô.
- **Khớp:** tỷ lệ tổng thể, khoảng cách đường cơ sở, cái gì di chuyển khi thiếu chỗ, và việc di chuyển văn bản.
- **Đơn vị chính:** định dạng, số thập phân, làm tròn, tiền tố, hậu tố, tỷ lệ đo, dấu thập phân, bỏ số 0 đầu và cuối; với góc là định dạng góc và số thập phân.
- **Đơn vị phụ:** bật hoặc tắt, định dạng, số thập phân, hệ số nhân (25.4 đổi inch thành milimét), làm tròn, tiền tố và hậu tố.
- **Dung sai:** không có, đối xứng, sai lệch, giới hạn hoặc cơ bản, với giá trị trên và dưới, số thập phân, chiều cao và vị trí.

Đổi bất kỳ thiết lập nào trên một kích thước đã mở sẽ bỏ hình vẽ mà chương trình khác đã tạo cho nó, và CadCraft vẽ lại.

:::note
Vị trí văn bản ngang (cạnh đường gióng thứ nhất hoặc thứ hai) và văn bản dưới đường được vẽ trên kích thước thẳng và kích thước song song; trên các kích thước khác, chúng được giữ và lưu nhưng chưa được vẽ. Các lựa chọn Khớp được giữ và lưu nhưng chưa được vẽ: CadCraft đặt văn bản theo quy tắc riêng của nó (phía trên đường, ra ngoài khi không vừa).
:::

## Khi không chọn gì

Khi không chọn gì, bảng hiển thị:

- **Đối tượng mới:** lớp, màu, kiểu đường, độ dày nét và chiều cao văn bản mà đối tượng mới nhận; đơn vị và định dạng chiều dài của bản vẽ; kiểu đường và độ dày nét của lớp hiện hành; kích thước cho kích thước mới. Trên một tờ, tên, giấy và hướng của tờ đứng đầu.
- **Khung nhìn:** tâm, chiều cao và chiều rộng của những gì đang trên màn hình. Gõ một giá trị để chuyển khung nhìn đến đó.
- **Khác:** biểu tượng UCS bật hoặc tắt, UCS (luôn là World: CadCraft chưa có hệ tọa độ người dùng) và tỷ lệ chú thích.

## Các nút ở đầu

| Nút | Chức năng |
|---|---|
| Phễu | {{cmd:QSELECT}}: chọn theo loại và thuộc tính |
| Con trỏ | {{cmd:SELECT}}: chọn đối tượng ở dòng lệnh |
| Dấu cộng hoặc 1 | Một cú nhấp thêm vào vùng chọn (dấu cộng) hay thay thế (1); cùng thiết lập với {{ui:Cài đặt}}, {{ui:CadCraft}} |
| Ghim | Tự động ẩn, như trên |

## Lỗi thường gặp

- **Gõ trong một ô không có gì xảy ra.** Nhấn {{key:Enter}} hoặc nhấp chỗ khác để áp dụng. Ô đỏ và một ghi chú nghĩa là mục nhập bị từ chối.
- **Độ dài có đơn vị bị từ chối.** Bản vẽ chưa có đơn vị. Đặt {{ui:Đơn vị}} khi không chọn gì.
- **Chỉ thấy Lớp và Màu.** Nhiều loại đối tượng đang được chọn và **Tất cả** được chọn. Chọn một loại trong danh sách ở đầu.
- **Một số đối tượng không đổi.** Chúng nằm trên lớp bị khóa. Mở khóa lớp trong bảng lớp.
- **Các chữ gõ đi vào một ô.** Khi ô có con trỏ, phím gõ vào đó. Nhấn {{key:Enter}} hoặc {{key:Esc}}, rồi gõ lệnh.
