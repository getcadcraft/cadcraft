---
title: Tô bóng và tô vùng
summary: Tô một vùng bằng màu đặc hoặc mẫu chuẩn, bằng cách nhấp vào bên trong hoặc chọn các hình khép kín, đặt tỷ lệ và góc của mẫu, và đổi tô bóng sau đó.
keywords: tô bóng, bhatch, tô, tô đặc, mẫu, ansi31, ansi37, brick, earth, net, đường cắt mặt, poché, đảo, biên, tỷ lệ, góc
from: 14399174
---

## Bạn sẽ tạo gì

Một mặt cắt tường được tô bằng mẫu ANSI31, một cột trong đó để trống, và một màu đặc trong cột.

## Tô bóng bằng cách nhấp vào bên trong một vùng

1. Vẽ một hình chữ nhật (`REC`, `0,0`, `@2000,1200`) và một vòng tròn bên trong nó (`C`, `1000,600`, `300`). Nhấp {{ui:Phạm vi}}.
2. Nhấp {{ui:Tô bóng}} trong nhóm {{ui:Vẽ}}, hoặc gõ `H` và nhấn {{key:Enter}}. Lịch sử cho biết mẫu hiện hành, ví dụ `Current hatch: ANSI31, scale 1, angle 0°`.
3. Gõ `P` và nhấn {{key:Enter}}, gõ `ANSI31` và nhấn {{key:Enter}}.
4. Gõ `SC` và nhấn {{key:Enter}}, gõ `20` và nhấn {{key:Enter}}. Kích thước mẫu tính trên giấy, nên bản vẽ in ở tỷ lệ 1:20 cần tỷ lệ 20.
5. Tại `Pick internal point`, nhấp bên trong hình chữ nhật, ngoài vòng tròn. Tô bóng hiện ra dưới dạng bản xem trước.
6. Nhấn {{key:Enter}}. Hình chữ nhật được tô bóng; vòng tròn bên trong vẫn để trống, vì nó là một đảo.

Nhấp vào nhiều vùng trước khi nhấn {{key:Enter}} để gộp thành một tô bóng. `U` bỏ vùng được chọn cuối cùng.

## Một màu đặc

1. Gõ `H` và nhấn {{key:Enter}}.
2. Gõ `P`, nhấn {{key:Enter}}, gõ `SOLID` và nhấn {{key:Enter}}.
3. Nhấp vào bên trong vòng tròn, rồi nhấn {{key:Enter}}.

## Tô các hình khép kín mà bạn chọn

Thay vì nhấp vào bên trong, gõ `S` (Chọn đối tượng) tại `Pick internal point` và chọn các đa tuyến khép kín, vòng tròn hoặc elip khép kín, rồi nhấn {{key:Enter}}. Các hình nằm bên trong hình khác sẽ để trống lần lượt (hình ngoài được tô, hình kế tiếp để trống, và cứ thế).

## Mẫu

Gõ `?` tại câu hỏi về mẫu để xem danh sách. Các mẫu chuẩn là ANSI31 đến ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH và SOLID. Trong bản vẽ có đơn vị inch (hoặc có định dạng độ dài là feet và inch), kích thước inch của các mẫu được dùng, như trong AutoCAD; ngược lại dùng kích thước milimét.

{{ui:Góc}} (`A`) xoay toàn bộ mẫu: ANSI31 ở 90° nghiêng theo chiều ngược lại.

**Tệp mẫu.** Gõ `F` (Tệp mẫu) tại `Pick internal point` và chọn một tệp `.pat`. Các mẫu trong đó được thêm vào danh sách; nếu có nhiều hơn một, bạn sẽ được hỏi dùng mẫu nào. Tệp không có mẫu nào CadCraft đọc được sẽ được báo, và mọi mẫu bị bỏ qua sẽ được đếm. Kích thước trong tệp `.pat` không có đơn vị riêng, nên chúng được đọc theo đơn vị của bản vẽ. Chỉ các tệp viết theo định dạng `.pat` thông thường đã được thử; chưa có tệp nào do chương trình khác tạo được thử.

## Đổi một tô bóng

Chọn nó (nhấp vào một trong các đường của nó). Trong {{ui:Thuộc tính}}: {{ui:Mẫu}}, {{ui:Tỷ lệ mẫu}} và {{ui:Góc mẫu}}. Tô bóng từ bản vẽ đã mở hiển thị mẫu của nó khi đó là một trong các mẫu chuẩn; các mẫu khác hiển thị dưới dạng một tông nhạt của màu của chúng.

## Những lỗi thường gặp

- **"Không có biên khép kín quanh điểm đó."** Có khoảng hở trong đường viền, hoặc một phần của nó nằm ngoài màn hình: CadCraft chỉ xét những gì hiện trên màn hình. Khép kín khoảng hở (phóng to ở các góc), hoặc thu nhỏ.
- **"Mẫu quá dày để vẽ ở tỷ lệ này."** Các đường sẽ gần nhau hơn mức bản vẽ có thể hiển thị. Dùng tỷ lệ lớn hơn: thử tỷ lệ in (20 cho 1:20).
- **Mẫu trông quá lớn hoặc quá nhỏ.** Tỷ lệ tính bằng đơn vị bản vẽ trên mỗi đơn vị mẫu; xem bước 4 ở trên.
- **Di chuyển đường viền không làm tô bóng di chuyển theo.** Tô bóng không gắn với biên của nó. Di chuyển cả hai, hoặc tô bóng lại.

## Tô bóng gắn với biên của nó

Tô bóng bạn tạo bằng `HATCH` ghi nhớ những gì bao quanh nó. Di chuyển, xoay hoặc đổi tỷ lệ biên thì tô bóng và mẫu của nó đi theo. Kéo một grip để định hình lại biên thì tô bóng được tính lại. Di chuyển riêng tô bóng thì biên của nó cũng đi theo, giống một hình được tô trong chương trình vẽ khác.

Liên kết sẽ kết thúc, và dòng lệnh báo như vậy, nếu biên không còn khép kín hoặc bạn định hình lại tô bóng bằng tay. Tô bóng vẫn còn. Gõ `AS` khi đang tô để tạo các tô bóng độc lập. Sao chép một tô bóng cùng biên của nó thì bản sao có liên kết riêng.

`HATCHEDIT` (`HE`) đổi mẫu, tỷ lệ, góc và gốc của tô bóng, và liên kết nó với một biên hoặc kết thúc liên kết. Liên kết được lưu trong tệp DWG và DXF 2000. Tệp DXF R12 không có đối tượng tô bóng, và các liên kết do chương trình khác tạo ra không được đọc: dùng `HATCHEDIT` và tùy chọn Liên kết cho những trường hợp đó.

Tô bóng không còn biên (biên đã bị xóa, hoặc tệp được lưu không có biên) có thể lấy lại biên: `HATCHGENERATEBOUNDARY` (`HGB`) vẽ một đa tuyến khép kín quanh mỗi vòng của tô bóng và, nếu bạn trả lời Có, liên kết tô bóng với chúng.

## Tô chuyển màu

`GRADIENT` (`GD`) tô một vùng bằng chuyển màu thay vì một mẫu: cùng các lựa chọn như `HATCH`, sau khi hỏi loại (tuyến tính, trụ, cầu, bán cầu, cong, và mỗi loại đảo ngược), một màu với sắc độ hoặc hai màu, góc, và có căn giữa hay không. Trong `HATCH`, tùy chọn `G` làm điều tương tự. `HATCHEDIT` `G`, hoặc {{ui:Thuộc tính}} dưới mục Chuyển màu, đổi một chuyển màu hoặc biến bất kỳ tô bóng nào thành chuyển màu.

Chuyển màu hiện trên màn hình và trong bản in. Lưu dưới dạng DWG 2004 trở lên thì các chương trình khác sẽ nhận được một tô bóng chuyển màu thực sự. DXF 2000 và DWG 2000 không có chuyển màu: ở đó CadCraft tự giữ nó và các chương trình khác thấy một màu đặc theo màu đầu tiên.

## Cắt tô bóng

`TRIM` cắt một tô bóng như mọi đối tượng khác. Nhấp vào tô bóng ở phía của cạnh cắt mà bạn muốn bỏ: các cạnh chia vùng được tô và phần đó bị xóa. Ở chế độ Nhanh, mọi đối tượng đều là cạnh cắt; hãy chọn các cạnh trước (tùy chọn `T`) khi có nhiều đối tượng. Tô bóng đã cắt không còn liên kết với biên của nó, vì nó không còn tô vùng đó nữa.
