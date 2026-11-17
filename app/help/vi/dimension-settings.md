---
title: Đặt kích thước, số thập phân và tỷ lệ của kích thước
summary: Chọn chiều cao văn bản, kích thước mũi tên, số thập phân và tỷ lệ chung cho kích thước mới, đổi các kích thước đã có, và hiểu cách kiểu kích thước hoạt động trong CadCraft.
keywords: kiểu kích thước, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, tỷ lệ chung, số thập phân, kích thước mũi tên, tỷ lệ chú thích, dimtextunit, đơn vị trong văn bản, mm, cm, m, km, milimét, mét, dimlfac, dimpost
from: 8ec82a07
---

## Bạn sẽ học gì

Chữ và mũi tên của kích thước lớn đến mức nào, cách đặt chúng cho bản vẽ in ở tỷ lệ 1:50 hoặc 1:100, và cách đổi các kích thước bạn đã vẽ.

## Cách kích thước hoạt động

Mỗi kích thước mang bộ kích thước riêng: chiều cao văn bản, kích thước mũi tên, số thập phân, khoảng cách quanh văn bản, mức đường gióng kéo dài qua đường kích thước và mức nó bắt đầu cách đối tượng. Mặc định gần với kiểu ISO thông dụng:

| Thiết lập | Mặc định | Lệnh |
|---|---|---|
| Chiều cao văn bản | 2.5 | {{cmd:DIMTXT}} |
| Kích thước mũi tên | 2.5 | {{cmd:DIMASZ}} |
| Số thập phân | 2 (bỏ các số 0 cuối) | {{cmd:DIMDEC}} |
| Khoảng cách quanh văn bản | 0.625 | {{cmd:DIMGAP}} |
| Đường gióng vượt qua đường kích thước | 1.25 | {{cmd:DIMEXE}} |
| Dời khỏi đối tượng | 0.625 | {{cmd:DIMEXO}} |
| Tỷ lệ chung | 1 | {{cmd:DIMSCALE}} |

Mọi kích thước được nhân với **tỷ lệ chung**. Đặt các kích thước như bạn muốn trên giấy (chữ 2.5 mm), và đặt tỷ lệ chung bằng tỷ lệ in (50 cho 1:50). Khi đó chữ cao 2.5 × 50 = 125 đơn vị bản vẽ, và in ra cao 2.5 mm.

:::note
Kiểu kích thước đặt tên được quản lý bằng {{cmd:DIMSTYLE}}: xem phần bên dưới. Mỗi kích thước cũng giữ thiết lập mà nó được tạo với, nên bạn vẫn có thể đổi riêng một kích thước trong {{ui:Thuộc tính}}.
:::

## Đặt kích thước cho kích thước mới

Cả hai cách dưới đây chỉ đổi các kích thước bạn vẽ sau đó.

### Trong bảng Cài đặt hiện tại

1. Nhấn {{key:Esc}} để không có gì được chọn. Trên thẻ {{ui:Mô hình}}, bảng bên phải hiển thị {{ui:Cài đặt hiện tại}}.
2. Cuộn bảng xuống đến {{ui:Kích thước mới}}, qua các dòng lớp, màu, đơn vị và {{ui:Lớp 0}} (trên màn hình nhỏ, nó bắt đầu bên dưới mép dưới). Nhấp vào {{ui:Tỷ lệ chung}}, gõ `50` và nhấn {{key:Enter}}.
3. Đặt {{ui:Chiều cao văn bản}}, {{ui:Kích thước mũi tên}} và {{ui:Số thập phân}} theo cách tương tự nếu bạn muốn giá trị khác.

Thanh trạng thái xác nhận từng cái, ví dụ "Tỷ lệ chung cho kích thước mới: 50".

### Tại dòng lệnh

1. Gõ `DIMSCALE` rồi nhấn {{key:Enter}}.
2. Tại `Enter new value for DIMSCALE <1>`, gõ `50` và nhấn {{key:Enter}}.

Lịch sử xác nhận "DIMSCALE = 50. Kích thước mới dùng nó; chọn các kích thước đã có để đổi của chúng." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} và {{cmd:DIMEXO}} hoạt động theo cùng cách. Nhấn {{key:Enter}} tại dấu nhắc để giữ giá trị hiện tại.

### Feet và inch trong kích thước

Kích thước mới dùng định dạng độ dài của bản vẽ: đặt nó bằng {{ui:Định dạng độ dài}} trong {{ui:Cài đặt hiện tại}} hoặc {{cmd:UNITS}} (xem [Feet và inch](topic:units-papers-scales#feet-and-inches-and-fractions)), và kích thước kế tiếp sẽ đọc `12'-6 1/2"`. {{cmd:DIMLUNIT}} chỉ đặt định dạng của các kích thước (2 thập phân, 3 kỹ thuật, 4 kiến trúc, 5 phân số). Với một kích thước bạn đã vẽ, chọn nó và chọn {{ui:Định dạng}} trong {{ui:Thuộc tính}}; với định dạng phân số, ô {{ui:Phân số}} lấy lũy thừa của hai (4 = 1/16).

## Kích thước theo mm, cm, m hoặc km

Một kích thước đo bằng đơn vị bản vẽ. Nó có thể ghi độ dài đó bằng milimét, centimét, mét hoặc kilômét thay thế, với đơn vị đặt sau con số: một bức tường 1250 mm ghi `1250 mm`, `125 cm`, `1.25 m` hoặc `0.00125 km`.

1. Đặt {{ui:Đơn vị}} của bản vẽ trong {{ui:Cài đặt hiện tại}} trước (xem [Đơn vị, kích cỡ giấy và tỷ lệ](topic:units-papers-scales#drawing-units)), để CadCraft biết một đơn vị bản vẽ là bao nhiêu. Bản vẽ không có đơn vị được đọc là milimét, và {{cmd:DIMTEXTUNIT}} cho biết điều đó.
2. Với kích thước mới: nhấn {{key:Esc}} để không có gì được chọn, và dưới {{ui:Kích thước mới}} chọn {{ui:Đơn vị trong văn bản}}: {{ui:Đơn vị bản vẽ}}, `mm`, `cm`, `m` hoặc `km`.
3. Với các kích thước bạn đã vẽ: chọn chúng, và trong {{ui:Thuộc tính}} › {{ui:Đơn vị chính}} chọn {{ui:Đơn vị trong văn bản}}.

Hoặc gõ {{cmd:DIMTEXTUNIT}} (`DTU`) và trả lời `D`, `MM`, `CM`, `M` hoặc `KM`: khi có kích thước được chọn, nó đổi chúng (một bước hoàn tác); khi không chọn gì, nó đặt cho kích thước mới.

{{ui:Số thập phân}} ({{cmd:DIMDEC}}) vẫn đặt số chữ số thập phân hiển thị: với mét và 3 thập phân, 1234 mm ghi `1.234 m`. Văn bản được viết như một số thập phân. Trên tờ, kích thước đo theo đơn vị giấy của tờ (milimét hoặc inch).

Một DWG hoặc DXF đã lưu giữ lựa chọn dưới dạng tỷ lệ đo của kích thước (DIMLFAC) và một hậu tố (DIMPOST, ` m`), để các chương trình khác hiển thị cùng văn bản. Nếu sau này bạn đổi {{ui:Đơn vị}} của bản vẽ, các kích thước ghi bằng mm, cm, m hoặc km sẽ được tính lại, nên chúng vẫn ghi đúng độ dài. {{ui:Đặt bằng tay (tỷ lệ hoặc hậu tố)}} nghĩa là {{ui:Tỷ lệ đo}} hoặc hậu tố của kích thước được đặt theo cách khác; chọn một đơn vị để thay thế chúng.

## Đổi các kích thước bạn đã vẽ

1. Nhấp vào một kích thước. Tiêu đề của bảng bên phải ghi {{ui:Kích thước}}.
2. Các thiết lập được chia thành các mục; cuộn bảng xuống để đến các mục sau:
   - {{ui:Chung}}: {{ui:Kiểu kích thước}}
   - {{ui:Hình học}}: {{ui:Loại}} và {{ui:Số đo}} (chỉ đọc)
   - {{ui:Văn bản}}: {{ui:Ghi đè văn bản}} và {{ui:Chiều cao văn bản}}
   - {{ui:Đường và mũi tên}}: {{ui:Kích thước mũi tên}}
   - {{ui:Vừa}}: {{ui:Tỷ lệ chung}}
   - {{ui:Đơn vị chính}}: {{ui:Số thập phân}}
3. Gõ một giá trị mới và nhấn {{key:Enter}}.

Kích thước vẽ lại ngay. Với kích thước góc, {{ui:Số thập phân (°)}} đặt số thập phân của góc.

:::note
Khi chọn nhiều kích thước, bảng hiển thị các dòng mà chúng dùng chung, và một giá trị khác nhau giữa chúng hiện {{ui:Khác nhau}}. Một giá trị bạn gõ sẽ đổi mọi kích thước được chọn trong một bước, nên một {{key:Mod+Z}} sẽ khôi phục tất cả.
:::

## Kích thước từ bản vẽ đã mở

Một kích thước từ DWG hoặc DXF đã mở được hiển thị đúng như chương trình khác đã vẽ nó. Bảng của nó ghi "Hiển thị theo cách chương trình tạo ra nó vẽ. Khi bạn đổi, CadCraft vẽ lại theo kiểu riêng của nó." Ngay khi bạn đổi bất kỳ giá trị nào, kéo một grip, hoặc di chuyển kích thước, CadCraft vẽ lại nó với mũi tên và phông chữ của riêng mình, dùng các kích thước đọc được từ tệp.

Một số kích thước chỉ có thể đọc như đã vẽ, không phải là kích thước có thể sửa; khi đó bảng hiển thị "Vẽ từ" kèm một tên khối, và hộp "Về tệp này" đếm chúng.

## Lỗi thường gặp

- **Đổi DIMSCALE không thay đổi gì trên màn hình.** Thiết lập dành cho kích thước mới. Chọn các kích thước đã có và đổi {{ui:Tỷ lệ chung}} trong bảng.
- **Số thập phân hiển thị ít chữ số hơn đã đặt.** Các số 0 cuối bị bỏ: với 2 thập phân, hiển thị `1250` và `1250.5`, không phải `1250.00`.
- **Chữ đúng chiều cao trên giấy trong khung nhìn nhưng sai khi in mô hình.** Tỷ lệ chung phải khớp với tỷ lệ bạn in. In ở chế độ vừa khổ giấy cho ra một tỷ lệ lạ; hãy chọn một tỷ lệ chuẩn trong hộp thoại in.
- **Đơn vị như mm hoặc m trong văn bản.** Chọn {{ui:Đơn vị trong văn bản}} (xem [Kích thước theo mm, cm, m hoặc km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Với bất kỳ từ nào khác sau con số, gõ nó trong phần ghi đè: `<> TYP.`.

## Kiểu kích thước đặt tên

Gõ `DIMSTYLE` (`D`) để mở {{ui:Trình quản lý kiểu kích thước}}. Nó liệt kê các kiểu của bản vẽ, có bao nhiêu kích thước dùng mỗi kiểu, và kiểu nào đang hiện hành. **Standard** luôn có sẵn.

- {{ui:Đặt làm hiện tại}}: kích thước mới dùng thiết lập của kiểu đó và mang tên của nó.
- {{ui:Mới…}}: một kiểu mới bắt đầu như một bản sao của kiểu bạn chọn.
- {{ui:Sửa…}}: cùng các trường như mục kích thước của {{ui:Thuộc tính}} (đường và mũi tên, văn bản, vừa, đơn vị, đơn vị phụ, dung sai). Nhấn {{ui:OK}} và kiểu đổi, **và mọi kích thước dùng nó cũng đổi theo**, từng thiết lập một. Một thiết lập bạn đã đổi riêng trên một kích thước sẽ giữ nguyên, trừ khi kiểu đổi thiết lập đó.
- {{ui:Đổi tên…}} và {{ui:Xóa}}: Standard không thể đổi tên hoặc xóa, và kiểu hiện hành hay kiểu đang được kích thước dùng cũng không thể.
- {{ui:So sánh…}}: những gì khác nhau giữa hai kiểu.
- {{ui:Áp dụng cho mục đã chọn}}: chọn kích thước trước; chúng nhận thiết lập của kiểu và tên của nó.

`-DIMSTYLE` làm điều tương tự trên dòng lệnh: `Restore`, `Save` (các thiết lập hiện tại, gồm những gì bạn đã gõ với {{cmd:DIMTXT}} và các lệnh khác, dưới một tên), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Các kiểu được lưu trong DWG hoặc DXF (bảng kiểu kích thước của nó) và được đọc từ các tệp bạn mở. Kiểu *hiện hành* không được lưu: một bản vẽ mở ra với Standard là hiện hành. Standard giữ thiết lập riêng khi một kiểu khác đang hiện hành.

## Đổi văn bản kích thước và đường gióng

{{cmd:DIMEDIT}} (`DED`) làm việc với các kích thước bạn chọn: **Về gốc** đưa văn bản về nơi kiểu của nó đặt, **Mới** gõ văn bản khác (`<>` là số đo), **Xoay** xoay văn bản, **Nghiêng** làm nghiêng các đường gióng của kích thước thẳng và song song theo một góc bạn gõ (nhấn {{key:Enter}} để không có). {{cmd:DIMTEDIT}} đưa văn bản sang **Trái**, **Phải** hoặc **Giữa** của đường kích thước, hoặc xoay nó (**Góc**), hoặc đưa nó **Về gốc**. Văn bản luôn nằm trên đường kích thước: không thể kéo nó đến một chỗ tự do.
