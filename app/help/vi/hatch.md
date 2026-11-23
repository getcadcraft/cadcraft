---
title: Tô bóng và vùng tô
summary: Tô một vùng bằng màu đặc hoặc mẫu chuẩn bằng cách nhấp vào bên trong hoặc chọn các hình khép kín, đặt tỷ lệ và góc của mẫu, và đổi một tô sau đó.
keywords: tô bóng, bhatch, tô, tô đặc, mẫu, ansi31, ansi37, gạch, đất, lưới, đường mặt cắt, poché, đảo, biên, tỷ lệ, góc
from: e7feb344
---

## Bạn sẽ làm gì

Một mặt cắt tường được tô bằng mẫu ANSI31, một cột trong đó để trống, và một tô đặc trong cột.

## Tô bằng cách nhấp vào bên trong một vùng

1. Vẽ một hình chữ nhật (`REC`, `0,0`, `@2000,1200`) và một hình tròn bên trong (`C`, `1000,600`, `300`). Nhấp {{ui:Phạm vi}}.
2. Nhấp {{ui:Tô bóng}} trong nhóm {{ui:Vẽ}}, hoặc gõ `H` rồi nhấn {{key:Enter}}. Lịch sử cho biết mẫu hiện hành, ví dụ `Current hatch: ANSI31, scale 1, angle 0°`.
3. Gõ `P` rồi nhấn {{key:Enter}}, gõ `ANSI31` rồi nhấn {{key:Enter}}.
4. Gõ `SC` rồi nhấn {{key:Enter}}, gõ `20` rồi nhấn {{key:Enter}}. Kích thước mẫu là trên giấy, nên bản vẽ in ở 1:20 cần tỷ lệ 20.
5. Tại `Pick internal point`, nhấp vào trong hình chữ nhật, ngoài hình tròn. Tô hiện như bản xem trước.
6. Nhấn {{key:Enter}}. Hình chữ nhật được tô; hình tròn bên trong vẫn trống, vì nó là một đảo.

Nhấp vào trong nhiều vùng trước khi nhấn {{key:Enter}} để biến chúng thành một tô. `U` lấy lại vùng cuối cùng.

## Tô đặc

1. Gõ `H` rồi nhấn {{key:Enter}}.
2. Gõ `P`, nhấn {{key:Enter}}, gõ `SOLID` rồi nhấn {{key:Enter}}.
3. Nhấp vào trong hình tròn, rồi nhấn {{key:Enter}}.

## Tô các hình khép kín bạn chọn

Thay vì nhấp vào bên trong, gõ `S` (Chọn đối tượng) tại `Pick internal point`, chọn các đa tuyến khép kín, hình tròn hoặc elip khép kín, rồi nhấn {{key:Enter}}. Các hình nằm trong hình khác sẽ để trống lần lượt (hình ngoài được tô, hình kế tiếp bên trong để trống, và cứ thế).

## Mẫu

Gõ `?` tại câu hỏi mẫu để xem danh sách. Các mẫu chuẩn là ANSI31 đến ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS và EARTH, và SOLID. Trong bản vẽ tính bằng inch (hoặc có định dạng độ dài là feet và inch), kích thước inch của mẫu được dùng, như trong AutoCAD; nếu không thì dùng kích thước milimét.

{{ui:Góc}} (`A`) xoay toàn bộ mẫu: ANSI31 ở 90° nghiêng theo hướng ngược lại.

**Tệp mẫu.** Gõ `F` (Tệp mẫu) tại `Pick internal point` và chọn một tệp `.pat`. Các mẫu trong đó được thêm vào danh sách; khi có nhiều hơn một, bạn được hỏi dùng cái nào. Một tệp không có mẫu nào CadCraft đọc được sẽ báo điều đó, và mọi mẫu bị bỏ qua được đếm. Kích thước trong tệp `.pat` không có đơn vị riêng, nên chúng được đọc theo đơn vị của bản vẽ. Chỉ các tệp viết theo định dạng `.pat` thông thường đã được thử; chưa thử tệp do chương trình khác tạo.

## Đổi một tô

Chọn nó (nhấp vào một trong các đường của nó). Trong {{ui:Thuộc tính}}: {{ui:Mẫu}}, {{ui:Tỷ lệ mẫu}} và {{ui:Góc mẫu}}. Các tô từ bản vẽ đã mở hiện mẫu của chúng khi đó là một trong các mẫu chuẩn; các mẫu khác hiện như một tông nhạt của màu của chúng.

## Lỗi thường gặp

- **"Không có biên khép kín quanh điểm đó."** Có một khe hở trong đường viền, hoặc một phần của nó nằm ngoài màn hình: CadCraft chỉ xét những gì hiện trên màn hình. Đóng khe hở (phóng to vào các góc), hoặc thu nhỏ.
- **"Mẫu quá dày để vẽ ở tỷ lệ này."** Các đường sẽ gần nhau hơn mức bản vẽ có thể hiện. Dùng tỷ lệ lớn hơn: thử tỷ lệ in (20 cho 1:20).
- **Mẫu trông rất to hoặc rất nhỏ.** Tỷ lệ tính bằng đơn vị bản vẽ trên mỗi đơn vị mẫu; xem bước 4 ở trên.
- **Tô ngừng bám theo đường viền.** Một tô được tạo bằng {{cmd:HATCH}} luôn gắn với các đối tượng mà nó được tạo từ đó: dời, xoay hoặc đổi tỷ lệ đường viền thì tô đi theo; định hình lại bằng grip thì tô được tính lại. Liên kết kết thúc khi đường viền không còn khép kín, khi bạn tự định hình lại tô, hoặc khi bạn cắt nó, và dòng lệnh nói điều đó. Không có gì mất: tô lại vùng đó để liên kết lại.

## Tô giữ với biên của nó

Một tô bạn tạo bằng `HATCH` nhớ những gì bao quanh nó. Dời, xoay hoặc đổi tỷ lệ biên thì tô và mẫu của nó đi theo. Kéo grip để định hình lại biên thì tô được tính lại. Dời riêng tô thì biên của nó cũng đi theo, như một hình tô trong chương trình vẽ.

Liên kết kết thúc, và dòng lệnh nói điều đó, nếu biên không còn khép kín, hoặc bạn định hình lại tô bằng tay. Chính tô vẫn còn. Gõ `AS` khi đang tô để tạo tô đứng riêng. Sao chép một tô cùng biên của nó thì bản sao có liên kết riêng.

`HATCHEDIT` (`HE`) đổi mẫu, tỷ lệ, góc và gốc của một tô, và liên kết nó với một biên hoặc kết thúc liên kết. Liên kết được lưu trong tệp DWG và DXF 2000. Tệp DXF R12 không có đối tượng tô, và các liên kết do chương trình khác tạo không được đọc: dùng `HATCHEDIT` và tùy chọn Link cho những trường hợp đó.

Một tô không còn biên (biên đã bị xóa, hoặc tệp đến không có nó) có thể lấy lại biên: `HATCHGENERATEBOUNDARY` (`HGB`) vẽ một đa tuyến khép kín quanh mỗi vòng của tô và, nếu bạn trả lời Yes, liên kết tô với chúng.

## Tô chuyển màu (gradient)

`GRADIENT` (`GD`) tô một vùng bằng chuyển màu thay vì mẫu: các lựa chọn giống như `HATCH`, sau khi nó hỏi kiểu (tuyến tính, hình trụ, hình cầu, bán cầu, cong, và từng kiểu đảo ngược), một màu với độ đậm nhạt hoặc hai màu, góc, và có căn giữa hay không. Trong `HATCH`, tùy chọn `G` làm việc tương tự. `HATCHEDIT` `G`, hoặc {{ui:Thuộc tính}} dưới mục Gradient, đổi một chuyển màu hoặc biến bất kỳ tô nào thành chuyển màu.

Chuyển màu hiện trên màn hình và trong bản in. Lưu thành DWG 2004 trở lên, các chương trình khác nhận được một tô chuyển màu thật. DXF 2000 và DWG 2000 không có chuyển màu: CadCraft giữ nó cho riêng mình, và các chương trình khác thấy một tô đặc bằng màu thứ nhất.

## Cắt một tô

`TRIM` cắt một tô như mọi đối tượng khác. Nhấp vào tô ở phía của cạnh cắt mà bạn muốn bỏ: các cạnh chia vùng được tô, và phần đó bị lấy đi. Ở chế độ Nhanh, mọi đối tượng là một cạnh cắt; chọn các cạnh trước (tùy chọn `T`) khi có nhiều. Một tô đã cắt không còn liên kết với biên của nó, vì nó không còn tô biên đó nữa.
