---
title: Tạo và chèn khối
summary: Biến một cửa đã vẽ thành khối, đặt lại ở các vị trí, tỷ lệ và góc khác, và dọn các khối không dùng.
keywords: khối, bmake, chèn, ddinsert, ký hiệu, purge, explode, redefine, điểm gốc, tham chiếu, đếm, bcount, bảng thống kê, csv, thuộc tính, trích xuất dữ liệu
from: 125a129d
---

## Bạn sẽ tạo gì

Một ký hiệu cửa được làm thành khối tên `DOOR-900`, rồi đặt ba lần: như đã vẽ, xoay 90 độ, và lấy đối xứng gương.

Khối là một nhóm đối tượng có tên. Bạn vẽ nó một lần; mọi nơi dùng nó đều là một **tham chiếu khối** trỏ về cùng một định nghĩa. Mục {{ui:Blocks}} trong bảng bên trái liệt kê các khối trong bản vẽ và số lần mỗi khối được dùng.

## Vẽ cửa

1. Gõ `L` rồi nhấn {{key:Enter}}.
2. Gõ `0,0` rồi nhấn {{key:Enter}}.
3. Gõ `@0,900` rồi nhấn {{key:Enter}}, sau đó nhấn {{key:Enter}} thêm lần nữa. Đây là cánh cửa.
4. Gõ `A` rồi nhấn {{key:Enter}}.
5. Gõ `C` rồi nhấn {{key:Enter}} để nhập tâm trước.
6. Gõ `0,0` rồi nhấn {{key:Enter}} cho tâm.
7. Gõ `900,0` rồi nhấn {{key:Enter}} cho điểm đầu.
8. Gõ `0,900` rồi nhấn {{key:Enter}} cho điểm cuối. Đây là cung mở cửa.
9. Bấm {{ui:Extents}}.

Cung đi theo chiều ngược kim đồng hồ từ điểm đầu đến điểm cuối.

## Tạo khối

1. Gõ `B` rồi nhấn {{key:Enter}}, hoặc bấm {{ui:Make}} trong nhóm Khối.
2. Tại `Nhập tên khối`, gõ `DOOR-900` rồi nhấn {{key:Enter}}.
3. Tại `Chỉ định điểm gốc chèn`, gõ `0,0` rồi nhấn {{key:Enter}}. Đây là bản lề: điểm sẽ nằm đúng chỗ bạn đặt khối.
4. Tại `Chọn đối tượng`, kéo một cửa sổ bao quanh cánh cửa và cung.
5. Nhấn {{key:Enter}}.

Lịch sử ghi: `Đã tạo khối "DOOR-900" từ 2 đối tượng, và chúng được thay bằng một tham chiếu tới khối này.` Bảng {{ui:Blocks}} liệt kê DOOR-900 với `1×` bên cạnh: một tham chiếu. Bấm vào cửa: giờ nó được chọn như một đối tượng duy nhất, "Tham chiếu khối".

:::tip
Bạn có thể chọn đối tượng trước rồi gõ `B`. CadCraft vẫn hỏi tên và điểm gốc, rồi dùng vùng chọn của bạn.
:::

## Chèn khối

1. Gõ `I` rồi nhấn {{key:Enter}}, hoặc bấm {{ui:Insert}} bên cạnh DOOR-900 trong bảng {{ui:Blocks}}.
2. Tại `Enter block name or [File/Library] <DOOR-900>`, nhấn {{key:Enter}}. (Nút {{ui:Insert}} của bảng tự điền tên cho bạn.)
3. Cửa đi theo con trỏ chữ thập. Bấm nơi bản lề sẽ nằm.

Một cửa thứ hai xuất hiện.

## Chèn khối đã xoay hoặc đổi tỷ lệ

1. Gõ `I` rồi nhấn {{key:Enter}}, sau đó nhấn {{key:Enter}} để chấp nhận tên.
2. Tại `Chỉ định điểm chèn [Scale/Rotate]`, gõ `R` rồi nhấn {{key:Enter}}.
3. Gõ `90` rồi nhấn {{key:Enter}}. Bản xem trước xoay theo.
4. Bấm để đặt.

Gõ `S` thay vào đó để đặt hệ số tỷ lệ; nó áp dụng cho cả hai chiều. Tỷ lệ và góc xoay được nhớ cho lần chèn tiếp theo. Để lấy đối xứng một cửa, chèn nó rồi dùng {{cmd:MIRROR}} trên tham chiếu.

## Đổi khối đã đặt

Chọn một tham chiếu khối. Trong bảng bên phải bạn có thể đổi {{ui:X}}, {{ui:Y}}, {{ui:Scale X}}, {{ui:Scale Y}} và {{ui:Rotation}}. {{ui:Scale X}} âm sẽ lật nó.

## Định nghĩa lại khối

Để đổi mọi cửa cùng lúc, tạo một khối cùng tên:

1. Vẽ phiên bản mới của cửa.
2. Gõ `B` rồi nhấn {{key:Enter}}, và gõ `DOOR-900`.
3. Tại `Khối "DOOR-900" đã tồn tại. Định nghĩa lại không?`, gõ `Y` rồi nhấn {{key:Enter}}.
4. Chỉ định điểm gốc và chọn các đối tượng mới, như trước.

Mọi tham chiếu tới DOOR-900 giờ hiển thị phiên bản mới.

Hoặc sửa chính khối: {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}) mở nó riêng, và {{ui:Save block}} lưu lại. Xem [Thuộc tính khối](topic:attributes#change-a-block-the-block-editor).

## Đếm khối và xuất bảng thống kê

Gõ {{cmd:COUNT}} (hoặc {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}), rồi:

- bấm một cửa: mọi cửa trong không gian này được chọn, và lịch sử ghi có bao nhiêu ở đây và trong cả bản vẽ;
- hoặc nhấn {{key:Enter}}: lịch sử liệt kê mọi khối với số đếm, nhiều nhất trước;
- hoặc gõ `E`, rồi `C` cho một tệp CSV các số đếm (trong mô hình, trên tờ, và tổng) hoặc `A` cho một dòng mỗi tham chiếu, kèm lớp, vị trí, góc xoay và mọi giá trị thuộc tính — một bảng thống kê bạn có thể mở trong bảng tính.

Khối không tên (kích thước, bảng) và tham chiếu bên trong các khối khác không được đếm. Các ô bắt đầu như công thức (`=`, `+`, `-`, `@`) sẽ có `'` ở đầu để bảng tính hiển thị chúng là văn bản.

## Phân rã và dọn dẹp

- {{cmd:EXPLODE}} (`X`) biến một tham chiếu khối đã chọn thành các đối tượng rời. Định nghĩa vẫn còn.
- {{cmd:PURGE}} (`PU`) xóa các định nghĩa khối mà không còn gì dùng. Lịch sử ghi số lượng đã xóa.

## Tên khối

Tên có thể dài tới 255 ký tự và chứa khoảng trắng, nhưng không được bắt đầu bằng dấu sao, và không được chứa `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` hoặc dấu backtick. Khi bạn lưu DXF R12, tên được ghi bằng chữ hoa, các ký tự khác chữ cái, chữ số, `$`, `_` và `-` đổi thành `_`, và tên bị cắt còn 31 ký tự; lịch sử ghi có bao nhiêu tên đã đổi. Tên ngắn viết hoa, chữ số và gạch nối, như `DOOR-900`, giữ nguyên. DWG đã lưu giữ tên đúng như bạn gõ, chữ hoa và thường; chỉ các ký tự DWG không cho phép mới đổi (`|` thành `$0$`, các ký tự khác thành `_`).

## Ghi một khối hoặc đối tượng ra tệp riêng

Gõ `W` ({{cmd:WBLOCK}}) và chọn **Đối tượng**, **Khối** hoặc **Toàn bộ bản vẽ**. Kết quả là một DWG hoặc DXF mới chỉ chứa các lớp, kiểu và khối nó dùng, với điểm gốc của bạn làm gốc tọa độ. Với đối tượng, bạn có thể giữ chúng, biến thành khối, hoặc xóa khỏi bản vẽ này.

## Lỗi thường gặp

- **Khối rơi xa con trỏ chữ thập.** Điểm gốc không nằm trên các đối tượng. Tạo lại khối với điểm gốc ở một góc hoặc bản lề.
- **"Chưa chọn đối tượng nào; chưa tạo gì."** Bạn đã nhấn {{key:Enter}} trước khi chọn gì.
- **"Bản vẽ này chưa có khối nào: F chèn một khối từ tệp, L từ thư viện (hoặc tạo khối bằng BLOCK)."** Gõ `F` để đưa một khối từ bản vẽ khác vào, hoặc `L` để lấy từ thư viện. Xem [Chèn từ tệp hoặc thư viện](topic:insert-from-file-and-library).
- **"Khung nhìn không thể nằm trong khối."** Đừng chọn khung của khung nhìn.
