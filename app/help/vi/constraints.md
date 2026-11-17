---
title: Ràng buộc bản vẽ
summary: Giữ đường thẳng nằm ngang, các đầu nối với nhau và kích thước cố định bằng ràng buộc hình học và ràng buộc kích thước, để bản vẽ tự thay đổi khi bạn đổi một kích thước.
keywords: ràng buộc, các ràng buộc, tham số, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, bậc tự do, ràng buộc đầy đủ
from: f8f21fa4
---

## Bạn sẽ tạo gì

Một tấm có chiều rộng bạn chỉ đổi ở một chỗ: các cạnh vẫn vuông góc, một góc luôn cố định, và chiều cao luôn bằng một nửa chiều rộng.

Ràng buộc áp dụng cho đường thẳng, đa tuyến, vòng tròn, cung tròn và điểm trên thẻ {{ui:Mô hình}}. Mỗi ràng buộc bạn thêm là một bước hoàn tác.

## Vẽ và ràng buộc đường bao

1. Gõ `REC` rồi nhấn {{key:Enter}}. Gõ `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Gõ `AUTOCONSTRAIN` rồi nhấn {{key:Enter}}. Gõ `ALL`, {{key:Enter}}, rồi nhấn {{key:Enter}} thêm lần nữa.

   Lịch sử ghi "Đã áp dụng 4 ràng buộc". Các hộp nhỏ có chữ **H** và **V** xuất hiện cạnh các cạnh: đó là các thanh ràng buộc.
3. Gõ `GCFIX` rồi nhấn {{key:Enter}}. Nhấp gần góc dưới bên trái. Một hộp có ⊕ xuất hiện: góc đó giữ nguyên vị trí.

`AUTOCONSTRAIN` thêm ràng buộc trùng nhau ở chỗ các đầu gần khớp nhau, và ràng buộc ngang hoặc đứng ở chỗ các đường gần nằm ngang hoặc thẳng đứng. Gõ `S` tại dấu nhắc của nó để đổi mức độ "gần" (ban đầu là 0.05 đơn vị bản vẽ và 1°).

## Thêm kích thước

1. Gõ `DCHORIZONTAL` rồi nhấn {{key:Enter}}.
2. Nhấp gần góc dưới bên trái, rồi gần góc dưới bên phải.
3. Nhấp bên dưới hình chữ nhật để đặt đường kích thước.
4. Dấu nhắc hiển thị `Dimension text <d1=100>`. Gõ `width=120` rồi nhấn {{key:Enter}}.

   Hình chữ nhật giờ rộng 120, và nhãn ghi `width=120`.
5. Gõ `DCVERTICAL` rồi nhấn {{key:Enter}}, gõ `O` rồi nhấn {{key:Enter}}, sau đó nhấp vào cạnh phải.
6. Nhấp bên phải cạnh đó, gõ `width/2` rồi nhấn {{key:Enter}}.

   Chiều cao là 60. Nhãn ghi `fx: d1=width/2`: một biểu thức đang điều khiển kích thước.

Lịch sử giờ ghi rằng đường bao đã được ràng buộc đầy đủ. Để đổi kích thước, đổi `width` (xem [Dùng tham số và phương trình](topic:parameters)), hoặc nhấp đúp vào nhãn `width=120`, gõ giá trị mới và chọn {{ui:Áp dụng}}.

## Di chuyển đối tượng có ràng buộc

Di chuyển, xoay, tỷ lệ, grip và bảng Thuộc tính đều giữ nguyên các ràng buộc: phần bạn di chuyển được giữ lại, và phần còn lại đi theo. Khi các ràng buộc không thể đi theo, thao tác không được thực hiện và lịch sử ghi lý do, ví dụ "Chưa thực hiện: các ràng buộc giữ đối tượng đó tại vị trí hiện tại". Xóa một đối tượng cũng xóa luôn các ràng buộc của nó.

## Đối xứng và cắt đối tượng có ràng buộc

- {{cmd:MIRROR}} sao chép các ràng buộc giữa các đối tượng bạn lấy đối xứng sang các bản sao. Các phía (tiếp tuyến chạm từ phía nào, khoảng cách đo về phía nào) được tính lại cho bản sao đối xứng, và các kích thước được sao chép sẽ có tên riêng, giống như khi dán. Với `Erase source objects` `Y`, các ràng buộc ở lại trên đối tượng đã đối xứng. Lịch sử cho biết có bao nhiêu ràng buộc đã được chuyển theo.
- {{cmd:TRIM}} giữ các ràng buộc của đường thẳng hoặc cung tròn cho phần còn lại: ràng buộc trên một đầu chuyển sang đoạn vẫn còn đầu đó; quy tắc về hướng ({{ui:Ngang}}, {{ui:Đứng}}, {{ui:Song song}}, {{ui:Vuông góc}}) được giữ trên mọi đoạn; và kích thước giữa hai đầu ngoài cùng tiếp tục đo chúng. Các ràng buộc giữ phần đã bị cắt bỏ, hoặc một độ dài mà lần cắt làm thay đổi ({{ui:Bằng nhau}}, góc quét của cung), sẽ bị bỏ. Vòng tròn đã cắt giữ các ràng buộc tâm và bán kính. Đa tuyến đã cắt mất toàn bộ ràng buộc của chúng.

## Các ràng buộc

| Lệnh | Giữ |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | một đường thẳng hoặc đoạn nằm ngang hoặc thẳng đứng (`2P`: hai điểm nằm ngang hoặc thẳng đứng) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | hai đường thẳng song song, vuông góc hoặc cùng nằm trên một đường |
| {{cmd:GCCOINCIDENT}} | hai điểm trùng nhau; `O`: một điểm nằm trên đường thẳng, vòng tròn hoặc cung |
| {{cmd:GCTANGENT}} | một đường thẳng và một vòng tròn hoặc cung, hoặc hai trong số chúng, tiếp xúc nhau |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | hai vòng tròn hoặc cung có cùng tâm; hai độ dài hoặc hai bán kính bằng nhau |
| {{cmd:GCSYMMETRIC}} | hai điểm, đường thẳng hoặc vòng tròn đối xứng qua một đường |
| {{cmd:GCFIX}} | một điểm (nhấp gần nó) hoặc cả đối tượng (`O`) tại vị trí hiện tại |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | một khoảng cách |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | một bán kính, một đường kính, một góc giữa hai đường thẳng hoặc góc của một cung |

{{cmd:GEOMCONSTRAINT}} và {{cmd:DIMCONSTRAINT}} hỏi bạn chọn cái nào; {{ui:Ràng buộc}} và {{ui:Kích thước}} trong nhóm {{ui:Tham số}} chạy chúng, và {{ui:Thêm}} ở đó liệt kê từng cái. Vị trí bạn nhấp quyết định phần nào được chọn: nhấp gần một đầu, điểm giữa hoặc tâm sẽ lấy điểm đó; nhấp trên đa tuyến sẽ lấy đoạn nằm dưới con trỏ. Đối tượng thứ nhất giữ nguyên và đối tượng thứ hai di chuyển để gặp nó.

Một ràng buộc mâu thuẫn với các ràng buộc khác, hoặc không thêm gì vì các ràng buộc khác đã suy ra nó, sẽ bị từ chối kèm thông báo và không có gì bị di chuyển.

## Xem, chọn và gỡ bỏ

- Nhấp vào một hộp trong thanh ràng buộc (hoặc ô vuông trùng nhau, hoặc nhãn kích thước) để chọn ràng buộc đó; lịch sử sẽ nêu tên nó. Nhấn {{key:Delete}} để gỡ bỏ.
- {{cmd:DELCONSTRAINT}} gỡ bỏ mọi ràng buộc khỏi các đối tượng bạn chọn.
- {{cmd:CONSTRAINTBAR}}: `S` hiện mọi thanh, `H` ẩn chúng; chọn đối tượng trước để hiện hoặc ẩn thanh của chúng. {{ui:Thêm}} có {{ui:Hiện thanh ràng buộc}} và {{ui:Ẩn thanh ràng buộc}}.
- {{cmd:DCDISPLAY}} hiện hoặc ẩn các ràng buộc kích thước. Chúng không bao giờ được in.
- {{cmd:DCCONVERT}} biến các kích thước vẽ trên đường thẳng, vòng tròn và cung thành ràng buộc kích thước.

:::note
Nếu bạn đã dùng bản vẽ tham số của AutoCAD, tên lệnh và dấu nhắc giống nhau. Ràng buộc và tham số được lưu trong tệp DWG và DXF dưới dạng mà các chương trình khác bỏ qua; xem [Tệp](topic:files#constraints-in-files).
:::
