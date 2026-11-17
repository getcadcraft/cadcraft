---
title: Hình ảnh trong bản vẽ
summary: Đặt một hình PNG hoặc JPEG, cắt nó theo hình chữ nhật hoặc đa giác, hiển thị các hình mà DWG dùng, và in chúng sắc nét.
keywords: pastearea, parea, copy area, copied area, markupcraft, kích thước thật, kích thước thực, overlay, lớp phủ, ole, ole2frame, đối tượng nhúng, dán hình ảnh, paste picture, ảnh chụp màn hình, ctrl+v, hình ảnh bộ nhớ tạm, screenshot, picture, image, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, ảnh, raster, imagedef, xref, plot, pdf, độ phân giải
from: 4025ac97
---

## Bạn sẽ tạo gì

Một logo công ty đặt trong khung tên, được cắt theo phần bạn muốn, và một PDF trong đó nó in ở độ phân giải riêng của nó.

## Đặt một hình

1. Gõ {{cmd:IMAGEATTACH}} (hoặc `IAT`) rồi nhấn {{key:Enter}}. Chọn một tệp PNG hoặc JPEG.
2. `Chỉ định góc dưới bên trái`: bấm, hoặc gõ một điểm.
3. `Chỉ định chiều rộng`: chiều rộng theo đơn vị bản vẽ. {{key:Enter}} giữ chiều rộng được đề xuất: một đơn vị cho mỗi điểm ảnh, hoặc chiều rộng bạn đã dùng cho tệp này lần trước (dòng nhắc cho biết).
4. `Chỉ định góc xoay`: nhấn {{key:Enter}} nếu không xoay.

Hình là một đối tượng: chọn nó bằng khung của nó, và di chuyển, sao chép, xoay, đổi tỷ lệ hoặc xóa nó như một khối.

:::note
Tệp hình ảnh ở lại cùng bản vẽ khi bản vẽ đang mở. Một DWG đã lưu ghi tên tệp, như các chương trình khác làm; nó không giữ các điểm ảnh. Hãy giữ hình ảnh cạnh bản vẽ.
:::

## Dán ảnh chụp màn hình hoặc hình đã sao chép

1. Sao chép hình ảnh (ảnh chụp màn hình bằng {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=công cụ chụp màn hình của bạn}},
   hoặc Sao chép hình ảnh trong chương trình khác hoặc trình duyệt).
2. Chỉ vào nơi nó nên đặt trên bản vẽ và nhấn {{key:Mod+V}}.

Góc dưới bên trái của hình rơi tại con trỏ (hoặc giữa khung nhìn), rộng 40 % so với những gì bạn thấy; di chuyển, đổi tỷ lệ và cắt nó như mọi hình khác. Tên của nó là tên của bản vẽ với `-picture-1.png` (rồi `-2`, …), và lịch sử ghi điều đó.
{{ui:Edit}} › {{ui:More}} › {{ui:Paste a picture}} làm điều tương tự từ menu (trình duyệt có thể hỏi trước).

DWG chỉ giữ tên tệp của một hình, nên khi lưu bản vẽ, hình cũng được lưu thành tệp riêng của nó. Hãy để hai tệp trong cùng một thư mục: bản vẽ hiển thị hình từ đó. Trong trình duyệt, đó là một lần tải xuống thứ hai, và lịch sử ghi điều đó. Khi trên bộ nhớ tạm chỉ có các đối tượng CadCraft, {{key:Mod+V}} dán chúng như trước.

## Dán một vùng đã sao chép trong MarkupCraft

{{ui:Copy area}} trong MarkupCraft sao chép một phần của tờ thành một hình biết kích thước của nó. CadCraft dán nó ở kích thước đó.

1. Trong MarkupCraft, sao chép vùng (một hình chữ nhật, một vòng tròn hoặc một hình tự do; {{ui:Copy as overlay}} nếu bạn muốn thấy bản vẽ của mình xuyên qua nó).
2. Trong CadCraft, nhấn {{key:Mod+V}}, hoặc gõ {{cmd:PASTEAREA}} (hoặc `PAREA`), hoặc chọn {{ui:Edit}} › {{ui:More}} › {{ui:Paste a copied area}}.
3. `Chỉ định góc dưới bên trái của vùng đã sao chép`: bấm, hoặc gõ một điểm. Một khung có kích thước của vùng đi theo con trỏ.

Nó rơi vào kích thước như sau:

- **Tờ có tỷ lệ bản vẽ:** ở kích thước thật, theo đơn vị bản vẽ (một chi tiết 1:50 của cầu thang dài 2 m sẽ dài 2 m trong bản vẽ mét, 78.74 trong bản vẽ inch). Không hỏi gì thêm.
- **Tờ không có tỷ lệ:** CadCraft cho biết kích thước của nó trên giấy và hỏi tỷ lệ: gõ `100` cho tờ 1:100, nhấn {{key:Enter}} cho kích thước giấy, hoặc gõ `P`, bấm hai điểm trên hình đã dán và gõ khoảng cách thật giữa chúng (như {{cmd:SCANSCALE}} làm). Góc dưới bên trái vẫn ở nơi bạn đặt.

Bản vẽ không có đơn vị lấy milimét, như một nền PDF. Lớp phủ giữ giấy trong suốt và bắt đầu mờ như lúc được sao chép; bên ngoài một hình tròn hoặc hình tự do cũng trong suốt. Vùng đã dán là một hình như mọi hình khác: di chuyển, xoay, đổi tỷ lệ, cắt hoặc xóa, và toàn bộ thao tác dán là một bước hoàn tác. Khi lưu thành DWG, nó là một IMAGE với độ mờ và độ trong suốt của nó.

{{key:Mod+V}} dán vùng khi hình trên bộ nhớ tạm là của vùng, hoặc khi vùng được sao chép sau bất kỳ thứ gì bạn đã sao chép trong CadCraft (và trong 6 giờ qua). Nếu không, nó dán như trước. {{cmd:PASTEAREA}} dán vùng đã sao chép gần nhất vào bất kỳ lúc nào.

## Hiển thị các hình mà một DWG dùng

Một DWG chỉ lưu vị trí các hình của nó, nên CadCraft hiển thị mỗi hình như một khung kèm tên tệp.

1. Gõ {{cmd:IMAGE}} (hoặc `IM`). Dòng lệnh liệt kê từng tệp hình và cho biết nó có được hiển thị hay không.
2. Chọn các tệp (nhiều tệp cùng lúc). Một tệp có tên chứa tên mà bản vẽ ghi cũng được tính, vì các lần xuất thường thêm tiền tố dự án.

## Cắt một hình

1. Gõ {{cmd:IMAGECLIP}} (hoặc `ICL`) và chọn hình.
2. Chọn `R` và bấm hai góc, hoặc `P` và bấm các điểm của một đa giác, rồi nhấn {{key:Enter}}. `D` gỡ cắt.

## In các hình

Hình đi vào PDF dưới dạng hình, ở độ phân giải riêng và nằm dưới các đường. Trong hộp thoại {{ui:Plot}}, {{ui:Pictures}} có thể giới hạn chúng ở 600, 300 hoặc 150 dpi để tệp nhỏ hơn. JPEG được đưa vào nguyên như vậy.

## Lưu ở đâu

| Định dạng | Hình ảnh |
|---|---|
| DWG (mọi phiên bản) | Dưới dạng hình (IMAGE), kèm cắt |
| DXF | Dưới dạng khung với tên tệp; khi lưu có thông báo |

## Đối tượng từ chương trình khác (OLE)

Một bản vẽ có thể chứa các đối tượng do chương trình khác tạo, như một hình từ phần mềm vẽ hoặc một vùng bảng tính (đối tượng OLE). CadCraft không chạy hay sửa chúng, và không thể chèn đối tượng mới. Những gì nó làm:

- **Trong DXF**, một đối tượng OLE mở ra như một khung. Nếu đối tượng đã lưu một ảnh của chính nó và ảnh đó là bitmap, ảnh được vẽ bên trong khung; nếu không, khung mang một nhãn ghi loại đối tượng, như "Microsoft Excel Worksheet (OLE)". Bạn có thể di chuyển, sao chép và xóa khung như một khối. {{cmd:SAVEAS}} sang DXF 2000 ghi nó lại như một đối tượng OLE, với dữ liệu không đổi.
- **Trong DWG**, các đối tượng được giữ lại và ghi lại khi bạn lưu thành DWG, từng byte một, nhưng **không được hiển thị**: DWG giữ vị trí của đối tượng trong dữ liệu riêng của nó, và CadCraft chưa đọc nó. Lịch sử ghi có bao nhiêu đối tượng được giữ lại. Gõ {{cmd:OLELIST}} để xem chúng là gì (loại, kích thước, mỗi cái có lưu ảnh hay không) và để đặt một bản sao hình của đối tượng ở nơi bạn chọn: **Đặt** hỏi số thứ tự, góc dưới bên trái và chiều rộng, rồi vẽ một khung có hình bên trong. Bản sao đó là một khung bạn có thể di chuyển hoặc xóa; đối tượng gốc vẫn nằm trong bản vẽ và vẫn được ghi lại khi bạn lưu.
- Một đối tượng đến từ DXF được lưu trong DWG chỉ như khung và nhãn của nó; lịch sử ghi điều đó. Lưu thành DXF 2000 để giữ đối tượng gốc.
- Hình là metafile (nhiều chương trình lưu kiểu này) không được vẽ: khung và nhãn hiển thị thay thế.

## Lỗi thường gặp

| Bạn thấy | Vì sao | Cách sửa |
|---|---|---|
| Một khung có tên tệp | CadCraft không có tệp | {{cmd:IMAGE}}, rồi chọn tệp |
| "Đối tượng được chọn không phải hình ảnh" | Đối tượng bạn chọn không phải là hình | Chọn khung của hình |
