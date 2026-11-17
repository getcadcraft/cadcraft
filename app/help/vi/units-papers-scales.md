---
title: Đơn vị, khổ giấy và tỷ lệ
summary: Đơn vị bản vẽ nghĩa là gì trong CadCraft, các khổ giấy cho tờ và bản in, mọi tỷ lệ chuẩn, và kích thước chữ và kích thước đo liên quan thế nào đến tỷ lệ in.
keywords: đơn vị, units, milimét, inch, feet, feet và inch, kiến trúc, kỹ thuật, phân số, fractions, lunits, định dạng độ dài, độ chính xác, mét, khổ giấy, a3, a1, arch d, ansi, tabloid, letter, tỷ lệ, scale, 1:100, 1/4 inch, tỷ lệ kiến trúc, tỷ lệ kỹ thuật, insunits
from: 8346236a
---

## Đơn vị bản vẽ

Bạn vẽ ở kích thước thật, theo đơn vị bản vẽ. Một đơn vị đại diện cho gì là thiết lập **Units** của bản vẽ:

1. Nhấn {{key:Esc}} để không có gì được chọn, trên thẻ {{ui:Model}}.
2. Trong {{ui:Current settings}}, chọn {{ui:Units}}: {{ui:Unitless}}, {{ui:Millimeters}}, {{ui:Centimeters}}, {{ui:Meters}}, {{ui:Inches}} hoặc {{ui:Feet}}.

Kích thước đo có thể ghi chiều dài bằng milimét, centimét, mét hoặc kilômét bất kể đơn vị bản vẽ là gì: xem [Kích thước theo mm, cm, m hoặc km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Đổi đơn vị không thay đổi kích thước của bất cứ thứ gì. Nó thay đổi cách tỷ lệ được đọc trên tờ và trong bản in, và các tỷ lệ nào được đưa ra. Một bản vẽ mở từ DWG hoặc DXF giữ đơn vị được lưu trong tệp; mục {{ui:Drawing}} của bảng bên trái hiển thị chúng.

Một bản vẽ {{ui:Unitless}} được coi là có đơn vị của giấy: milimét trên giấy ISO, inch trên giấy Mỹ.

## Feet và inch, và phân số

Cách chiều dài được **ghi và gõ** là một thiết lập riêng, định dạng độ dài. Nó không đổi hình học, chỉ đổi cách số trông và những gì bạn có thể gõ.

1. Nhấn {{key:Esc}} để không có gì được chọn, trên thẻ {{ui:Model}}.
2. Trong {{ui:Current settings}}, chọn {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) hoặc {{ui:Scientific}} (`1.505E+02`).
3. Chọn {{ui:Precision}}: số chữ số thập phân, hoặc phân số nhỏ nhất (1/16 là lựa chọn thường dùng cho kiến trúc).

Hoặc gõ {{cmd:UNITS}} (`UN`) và trả lời hai câu hỏi của nó.

Với {{ui:Architectural}} hoặc {{ui:Engineering}}, một đơn vị bản vẽ là một inch, như trong AutoCAD: đặt {{ui:Units}} thành {{ui:Inches}} luôn. Khi đó bạn có thể gõ chiều dài theo feet và inch ở bất kỳ chỗ nào yêu cầu một chiều dài, và trong các ô của {{ui:Properties}}:

| Bạn gõ | Có nghĩa |
|---|---|
| `12'6"` hoặc `12'-6"` | 12 feet 6 inch (150) |
| `12'6-1/2"` | 12 feet 6½ inch. Dùng dấu gạch nối trước phân số: {{key:Space}} là {{key:Enter}} tại dòng lệnh. |
| `12'` | 12 feet |
| `6"` hoặc `6` | 6 inch: số thuần là inch |
| `1/2`, `6-1/2` | phân số dùng được trong mọi định dạng |

Điểm nhận cùng cách viết chiều dài: `@12'6",0` hoặc `@10'<90`. Góc vẫn tính bằng độ.

Định dạng hiển thị trong lịch sử ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: diện tích tính bằng inch vuông và feet vuông), trong {{ui:Properties}}, trong tọa độ trên thanh trạng thái, và trong **kích thước mới**. Tờ giữ đơn vị giấy của chúng (milimét hoặc inch) dưới dạng số thập phân.

:::note
Định dạng độ dài được lưu trong tệp DWG và DXF, và mỗi kích thước giữ riêng của nó: một bản vẽ đã lưu mở lại đúng như bạn đã để lại.
:::

## Khổ giấy

Tờ và các bản in mô hình dùng các kích thước này, theo cả hai hướng:

| Giấy | Kích thước | Đơn vị trên tờ |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimét |
| ISO A3 | 420 × 297 mm | milimét |
| ISO A2 | 594 × 420 mm | milimét |
| ISO A1 | 841 × 594 mm | milimét |
| ISO A0 | 1189 × 841 mm | milimét |
| Letter | 11 × 8.5 in | inch |
| Legal | 14 × 8.5 in | inch |
| Tabloid / ANSI B | 17 × 11 in | inch |
| ANSI C | 22 × 17 in | inch |
| ANSI D | 34 × 22 in | inch |
| ARCH C | 24 × 18 in | inch |
| ARCH D | 36 × 24 in | inch |
| ARCH E | 48 × 36 in | inch |

Tờ mới bắt đầu ở ISO A3 cho bản vẽ hệ mét và bản vẽ không có đơn vị, và ở Tabloid cho bản vẽ theo inch hoặc feet. Các bản in mô hình bắt đầu ở ISO A4 hoặc Letter theo cùng cách, rồi nhớ lựa chọn gần nhất của bạn. Tờ từ các tệp đã mở giữ kích thước riêng của chúng, hiển thị là "Tùy chỉnh" khi không nằm trong danh sách này.

## Tỷ lệ

Một tỷ lệ `1:n` nghĩa là một đơn vị trên giấy thể hiện n đơn vị cùng loại trong mô hình, nên 1:100 thể hiện 1 m công trình thành 10 mm trên giấy. CadCraft tính điều này từ đơn vị bản vẽ và đơn vị của giấy.

**Tỷ lệ mét**, đưa ra cho mọi bản vẽ: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Tỷ lệ kiến trúc**, đưa ra khi đơn vị là inch hoặc feet: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Tỷ lệ kỹ thuật**, đưa ra khi đơn vị là inch hoặc feet: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Tỷ lệ riêng của bạn.** Gõ `SCALELISTEDIT` (hoặc `SCALELIST`) để thêm một tỷ lệ riêng, như 1:75 hoặc một tỷ lệ công trường 2 đơn vị giấy : 300 đơn vị bản vẽ. `Add` hỏi tên, rồi đơn vị giấy và đơn vị bản vẽ (một tên như `1:75` đưa ra các số của chính nó; nhấn {{key:Enter}} để lấy chúng). `Edit`, `Delete`, `List` và `Reset` làm việc trên cùng danh sách; `Reset` quay về danh sách tiêu chuẩn. Tỷ lệ riêng của bạn xuất hiện sau các tỷ lệ tiêu chuẩn trong danh sách tỷ lệ khung nhìn của {{ui:Properties}} và trong hộp thoại {{ui:Plot to PDF}}; một khung nhìn ở tỷ lệ đó hiển thị kèm tên của nó, và chúng được lưu trong bản vẽ (DWG và DXF 2000) như danh sách tỷ lệ của bản vẽ. Một bản vẽ mở từ chương trình khác mang theo danh sách của nó; các tỷ lệ trùng với một tỷ lệ chuẩn sẽ không hiển thị hai lần.

Khi một khung nhìn được hướng bằng {{ui:Show the whole model}} hoặc {{ui:Pick a window on the model…}}, CadCraft chọn tỷ lệ chuẩn lớn nhất vừa khít. {{ui:Fit the whole model}} đặt một tỷ lệ chính xác thay thế, và nó hiển thị như một tỷ số thuần.

## Kích thước trên giấy và trong mô hình

Kích thước chữ và kích thước đo tính bằng đơn vị của không gian bạn đang vẽ.

| Bạn muốn trên giấy | Vẽ trên tờ | Vẽ trong mô hình ở 1:50 (bản vẽ mm) | Vẽ trong mô hình ở 1/4" = 1'-0" (bản vẽ inch) |
|---|---|---|---|
| Chữ 2.5 mm | 2.5 | 125 | — |
| Chữ 3/32" | 0.09375 | — | 4.5 |

Với kích thước đo, giữ các cỡ như kích thước trên giấy và đặt tỷ lệ tổng ({{cmd:DIMSCALE}}) bằng tỷ lệ in: 50 cho 1:50, 48 cho 1/4" = 1'-0". Xem [Đặt kích thước đo](topic:dimension-settings).

## Chú thích theo tỷ lệ

Vẽ mô hình ở kích thước thật và để CadCraft làm các phép tính trên cho bạn.

1. Chọn văn bản hoặc kích thước cần giữ kích thước trên giấy. Trong {{ui:Properties}}, đánh dấu {{ui:Annotative}}. {{ui:Size on paper}} khi đó ghi, ví dụ, `2.5 mm ở 1:50`.
2. Gõ {{cmd:ANNOSCALE}} và tỷ lệ mà bản vẽ sẽ được in, như `1:100`.

Mỗi văn bản và kích thước chú thích được đổi kích thước để in ở cùng cỡ tại tỷ lệ mới: chữ 2.5 mm cao 125 trong một bản vẽ milimét ở 1:50 và cao 250 ở 1:100. Chiều rộng đoạn văn đổi theo; văn bản, mũi tên và khoảng hở của một kích thước đổi cùng nhau (tỷ lệ tổng của nó). Đây là một bước hoàn tác, và các đối tượng không chú thích không bao giờ bị thay đổi.

Thiết lập được lưu trong DWG và DXF: chương trình khác đọc cờ chú thích, và CadCraft cũng giữ tỷ lệ mà mỗi đối tượng được đặt kích thước theo.

Nếu văn phòng của bạn đặt chiều cao trên giấy trong add-on Default Policies (Cài đặt › Toàn cục › Default Policies › Kích thước chú thích trên giấy), {{cmd:ANNOSCALE}} cũng đặt chiều cao mà văn bản mới bắt đầu thành chiều cao của văn phòng cho ghi chú ở tỷ lệ đó. Xem [Default Policies](topic:default-policies).

### Một đối tượng ở nhiều tỷ lệ

Một tờ thường thể hiện cùng một mặt bằng ở 1:100 và một phần của nó ở 1:50. Hãy cho ghi chú và kích thước cả hai tỷ lệ, và mỗi khung nhìn sẽ thể hiện chúng ở kích thước giấy của chúng:

1. Chọn các văn bản và kích thước chú thích, rồi gõ `OBJECTSCALE`.
2. Chọn `Add` và gõ tỷ lệ, ví dụ `1:50`. (`Current scale` thêm tỷ lệ chú thích của bản vẽ; `List` cho thấy mỗi đối tượng giữ gì; `Delete` gỡ một tỷ lệ khỏi đối tượng.)

Một khung nhìn có tỷ lệ nằm trong danh sách của đối tượng sẽ thể hiện đối tượng ở kích thước của tỷ lệ đó: chữ 2.5 mm được vẽ cao 250 qua một khung 1:100 và cao 125 qua một khung 1:50, trên màn hình và trong bản in. Đối tượng vẫn ở chỗ cũ; chỉ kích thước là khác nhau. Trong một khung nhìn ở tỷ lệ không có trong danh sách của đối tượng, đối tượng hiển thị ở kích thước nó đang có, cho đến khi bạn gõ `ANNOALLVISIBLE` và chọn `OFF`: khi đó nó bị bỏ qua ở đó. {{cmd:ANNOSCALE}} đổi kích thước các đối tượng liệt kê tỷ lệ mới và để các đối tượng khác nguyên.

Các danh sách được lưu trong DWG và DXF như dữ liệu riêng của CadCraft. Chương trình khác thấy mỗi đối tượng là chú thích, ở một tỷ lệ mà nó được đặt kích thước theo. Công tắc ANNOALLVISIBLE không được lưu trong tệp.

## Độ dày nét và kiểu đường

Một lớp, hoặc một đối tượng, có thể có **độ dày nét** (0.05 đến 2.11 mm) và **kiểu đường** (nét đứt, nét khuất, nét tâm, nét ẩn, chấm…). Đặt chúng trong bảng bên phải: khi không chọn gì, {{ui:Linetype}} và {{ui:Lineweight}} dưới {{ui:Current settings}} là những gì đối tượng mới nhận ({{ui:By layer}} để theo lớp của chúng), và hai mục dưới {{ui:Layer …}} là của chính lớp hiện hành. Khi các đối tượng được chọn, cùng hai dòng đó và {{ui:Linetype scale}} thay đổi chính các đối tượng ấy. Các lệnh là {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) và {{cmd:LTSCALE}} (`LTS`).

Kiểu đường hiển thị trên màn hình và trong bản in. Nét của chúng tính theo đơn vị bản vẽ: một bản vẽ mét dùng kích thước ISO (DASHED: nét 12.7 mm), một bản vẽ inch dùng kích thước inch (0.5"). Nếu nét quá nhỏ hoặc quá lớn, đổi {{ui:Linetype scale}} của bản vẽ (LTSCALE): mọi nét và khoảng hở được nhân với nó; tỷ lệ riêng của một đối tượng nhân thêm lần nữa. Một mẫu quá mịn để thấy được sẽ vẽ như nét liền.

Độ dày nét được in trong bản in, tính bằng mm trên giấy, bất kể tỷ lệ. Các đường có độ dày nét {{ui:Default}} dùng độ rộng bút chọn trong hộp thoại {{ui:Plot to PDF}} (0.13 đến 0.70 mm; ban đầu là 0.25 mm); độ dày nét 0 in ra là nét mảnh nhất. Trên màn hình mỗi đường rộng một điểm ảnh, cho đến khi bạn bấm {{ui:LWT}} trên thanh trạng thái (hoặc gõ {{cmd:LWDISPLAY}}): khi đó độ dày nét trên 0.25 mm vẽ rộng hơn (0.5 mm = 2 điểm ảnh) trong mô hình, và đúng độ rộng thật trên giấy khi ở tờ. Lựa chọn được giữ lại trong trình duyệt này.
