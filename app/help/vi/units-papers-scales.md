---
title: Đơn vị, khổ giấy và tỷ lệ
summary: Đơn vị bản vẽ nghĩa là gì trong CadCraft, khổ giấy cho tờ và bản in, mọi tỷ lệ chuẩn, và cách cỡ chữ và kích thước ghi chú liên hệ với tỷ lệ in.
keywords: đơn vị, milimét, inch, feet, feet và inch, kiến trúc, kỹ thuật, phân số, phân số, định dạng độ dài, độ chính xác, mét, khổ giấy, a3, a1, arch d, ansi, tabloid, letter, tỷ lệ, 1:100, 1/4 inch, tỷ lệ kiến trúc, tỷ lệ kỹ thuật, insunits
from: 7dc9b62e
---

## Đơn vị bản vẽ

Bạn vẽ ở kích thước thật, theo đơn vị bản vẽ. Một đơn vị đại diện cho gì là cài đặt **Đơn vị** của bản vẽ:

1. Nhấn {{key:Esc}} để không có gì được chọn, trên thẻ {{ui:Mô hình}}.
2. Trong {{ui:Cài đặt hiện tại}}, chọn {{ui:Đơn vị}}: {{ui:Không có đơn vị}}, {{ui:Milimét}}, {{ui:Centimét}}, {{ui:Mét}}, {{ui:Inch}} hoặc {{ui:Feet}}.

Kích thước có thể ghi chiều dài bằng milimét, centimét, mét hoặc kilômét bất kể đơn vị bản vẽ: xem [Kích thước theo mm, cm, m hoặc km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Đổi đơn vị không đổi kích thước của gì cả. Nó đổi cách tỷ lệ được đọc trên tờ và trong bản in, và các tỷ lệ nào được đưa ra. Một bản vẽ mở từ DWG hoặc DXF giữ đơn vị được lưu trong tệp; phần {{ui:Bản vẽ}} của bảng bên trái hiện chúng.

Một bản vẽ {{ui:Không có đơn vị}} được coi là ở đơn vị của giấy: milimét trên giấy ISO, inch trên giấy Mỹ.

## Feet và inch, và phân số

Cách chiều dài được **viết và gõ** là một cài đặt riêng, định dạng độ dài. Nó không đổi hình học nào, chỉ đổi cách các con số trông và những gì bạn có thể gõ.

1. Nhấn {{key:Esc}} để không có gì được chọn, trên thẻ {{ui:Mô hình}}.
2. Trong {{ui:Cài đặt hiện tại}}, chọn {{ui:Định dạng độ dài}}: {{ui:Thập phân}} (`150.5`), {{ui:Kiến trúc}} (`12'-6 1/2"`), {{ui:Kỹ thuật}} (`12'-6.5"`), {{ui:Phân số}} (`150 1/2`) hoặc {{ui:Khoa học}} (`1.505E+02`).
3. Chọn {{ui:Độ chính xác}}: số chữ số thập phân, hoặc phân số nhỏ nhất (1/16 là lựa chọn thường dùng cho kiến trúc).

Hoặc gõ {{cmd:UNITS}} (`UN`) và trả lời hai câu hỏi của nó.

Với {{ui:Kiến trúc}} hoặc {{ui:Kỹ thuật}}, một đơn vị bản vẽ là một inch, như trong AutoCAD: đặt {{ui:Đơn vị}} thành {{ui:Inch}} luôn. Khi đó bạn có thể gõ chiều dài theo feet và inch ở bất kỳ đâu một chiều dài được hỏi, và trong các ô của {{ui:Thuộc tính}}:

| Bạn gõ | Nghĩa là |
|---|---|
| `12'6"` hoặc `12'-6"` | 12 feet 6 inch (150) |
| `12'6-1/2"` | 12 feet 6½ inch. Dùng dấu gạch ngang trước phân số: {{key:Space}} là {{key:Enter}} ở dòng lệnh. |
| `12'` | 12 feet |
| `6"` hoặc `6` | 6 inch: một số trơ trọi là inch |
| `1/2`, `6-1/2` | phân số hoạt động ở mọi định dạng |

Điểm nhận cùng các chiều dài: `@12'6",0` hoặc `@10'<90`. Góc vẫn theo độ.

Định dạng hiện trong lịch sử ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: diện tích tính bằng inch vuông và feet vuông), trong {{ui:Thuộc tính}}, trong tọa độ trên thanh trạng thái, và trong **kích thước mới**. Tờ giữ đơn vị giấy của chúng (milimét hoặc inch) dưới dạng số thập phân.

:::note
Định dạng độ dài được lưu trong tệp DWG và DXF, và mỗi kích thước giữ định dạng riêng của nó: một bản vẽ đã lưu mở lại đúng như bạn đã để.
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

Tờ mới bắt đầu ở ISO A3 cho bản vẽ hệ mét và không đơn vị, và ở Tabloid cho bản vẽ tính bằng inch hoặc feet. Bản in mô hình bắt đầu ở ISO A4 hoặc Letter theo cách tương tự, rồi nhớ lựa chọn gần nhất của bạn. Tờ từ tệp đã mở giữ kích thước riêng của chúng, hiện là "Custom" khi nó không nằm trong danh sách này.

## Tỷ lệ

Tỷ lệ `1:n` nghĩa là một đơn vị trên giấy thể hiện n đơn vị cùng loại trong mô hình, nên 1:100 thể hiện 1 m công trình thành 10 mm trên giấy. CadCraft tính điều này từ đơn vị bản vẽ và đơn vị của giấy.

**Tỷ lệ hệ mét**, được đưa ra cho mọi bản vẽ: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Tỷ lệ kiến trúc**, được đưa ra khi đơn vị là inch hoặc feet: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Tỷ lệ kỹ thuật**, được đưa ra khi đơn vị là inch hoặc feet: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Tỷ lệ riêng của bạn.** Gõ `SCALELISTEDIT` (hoặc `SCALELIST`) để thêm một tỷ lệ riêng, như 1:75 hoặc một tỷ lệ công trường 2 giấy : 300 bản vẽ. `Add` hỏi một tên, rồi đơn vị giấy và đơn vị bản vẽ (một tên như `1:75` đưa ra số của riêng nó; nhấn {{key:Enter}} để lấy chúng). `Edit`, `Delete`, `List` và `Reset` làm việc trên cùng danh sách; `Reset` quay về danh sách chuẩn. Các tỷ lệ của bạn xuất hiện sau các tỷ lệ chuẩn trong danh sách tỷ lệ khung nhìn của Thuộc tính và trong hộp thoại {{ui:In ra PDF}}; một khung nhìn ở tỷ lệ đó hiện với tên của nó, và chúng được lưu trong bản vẽ (DWG và DXF 2000) như danh sách tỷ lệ của bản vẽ. Một bản vẽ mở từ chương trình khác mang danh sách của nó theo; các tỷ lệ nó có khớp với một tỷ lệ chuẩn thì không được hiện hai lần.

Khi một khung nhìn được hướng bằng {{ui:Hiện toàn bộ mô hình}} hoặc {{ui:Chọn một cửa sổ trên mô hình…}}, CadCraft chọn tỷ lệ chuẩn lớn nhất vừa vặn. {{ui:Vừa toàn bộ mô hình}} đặt một tỷ lệ chính xác thay vào đó, hiện như một tỷ số thông thường.

## Kích thước trên giấy và trong mô hình

Cỡ chữ và kích thước ghi chú tính theo đơn vị của không gian bạn đang vẽ.

| Bạn muốn trên giấy | Vẽ trên tờ | Vẽ trong mô hình ở 1:50 (bản vẽ mm) | Vẽ trong mô hình ở 1/4" = 1'-0" (bản vẽ inch) |
|---|---|---|---|
| Chữ 2.5 mm | 2.5 | 125 | — |
| Chữ 3/32" | 0.09375 | — | 4.5 |

Với kích thước, giữ các cỡ là kích thước giấy và đặt tỷ lệ tổng thể ({{cmd:DIMSCALE}}) bằng tỷ lệ in: 50 cho 1:50, 48 cho 1/4" = 1'-0". Xem [Đặt kích thước ghi chú](topic:dimension-settings).

## Chú thích theo tỷ lệ

Vẽ mô hình ở kích thước thật và để CadCraft làm các phép tính trên cho bạn.

1. Chọn văn bản hoặc kích thước nên giữ cỡ trên giấy. Trong Thuộc tính, đánh dấu {{ui:Chú thích theo tỷ lệ}}. Khi đó {{ui:Kích thước trên giấy}} hiện, ví dụ, `2.5 mm at 1:50`.
2. Gõ {{cmd:ANNOSCALE}} và tỷ lệ bản vẽ sẽ được in, như `1:100`.

Mỗi văn bản và kích thước chú thích được đổi cỡ để in ở cùng kích thước tại tỷ lệ mới: chữ 2.5 mm cao 125 trong bản vẽ mm ở 1:50 và cao 250 ở 1:100. Chiều rộng của một đoạn đổi theo; văn bản, mũi tên và khe hở của một kích thước đổi cùng nhau (tỷ lệ tổng thể của nó). Đây là một bước hoàn tác, và các đối tượng không chú thích không bao giờ bị đổi.

Cài đặt được lưu trong DWG và DXF: các chương trình khác đọc cờ chú thích, và CadCraft cũng giữ tỷ lệ mà mỗi đối tượng được cỡ theo.

Nếu văn phòng bạn đặt chiều cao trên giấy trong add-on Chính sách mặc định (Cài đặt › Chung › Chính sách mặc định › Kích thước chú thích trên giấy), {{cmd:ANNOSCALE}} cũng đặt chiều cao mà văn bản mới bắt đầu với thành chiều cao của văn phòng cho ghi chú ở tỷ lệ đó. Xem [Chính sách mặc định](topic:default-policies).

### Một đối tượng ở nhiều tỷ lệ

Một tờ thường hiện cùng một mặt bằng ở 1:100 và một phần của nó ở 1:50. Cho các ghi chú và kích thước cả hai tỷ lệ, và mỗi khung nhìn sẽ hiện chúng ở kích thước giấy của chúng:

1. Chọn văn bản và kích thước chú thích, rồi gõ `OBJECTSCALE`.
2. Chọn `Add` và gõ tỷ lệ, ví dụ `1:50`. (`Current scale` thêm tỷ lệ chú thích của bản vẽ; `List` cho thấy mỗi đối tượng giữ gì; `Delete` gỡ một cái.)

Một khung nhìn có tỷ lệ nằm trong danh sách của một đối tượng sẽ hiện nó ở kích thước cho tỷ lệ đó: chữ 2.5 mm được vẽ cao 250 qua khung 1:100 và cao 125 qua khung 1:50, trên màn hình và trong bản in. Đối tượng vẫn ở nguyên vị trí; chỉ kích thước khác nhau. Trong khung ở tỷ lệ không có trong danh sách của đối tượng, nó hiện ở kích thước mà nó có, cho đến khi bạn gõ `ANNOALLVISIBLE` và chọn `OFF`: khi đó nó bị bỏ đi ở đó. {{cmd:ANNOSCALE}} đổi cỡ các đối tượng có tỷ lệ mới trong danh sách và giữ nguyên các đối tượng khác.

Các danh sách được lưu trong DWG và DXF như dữ liệu riêng của CadCraft. Chương trình khác thấy mỗi đối tượng là chú thích, ở một tỷ lệ mà nó được cỡ theo. Công tắc ANNOALLVISIBLE không được giữ trong tệp.

## Độ dày nét và kiểu đường

Một lớp, hoặc một đối tượng, có thể có **độ dày nét** (0.05 đến 2.11 mm) và **kiểu đường** (nét đứt, khuất, tâm, phantom, chấm…). Đặt chúng trong bảng bên phải: khi không chọn gì, {{ui:Kiểu đường}} và {{ui:Độ dày nét}} dưới {{ui:Cài đặt hiện tại}} là thứ các đối tượng mới nhận ({{ui:Theo lớp}} để theo lớp của chúng), và hai mục dưới {{ui:Lớp …}} là của chính lớp hiện hành. Khi đối tượng được chọn, cùng hai hàng đó và {{ui:Tỷ lệ kiểu đường}} thay đổi các đối tượng đó. Các lệnh là {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) và {{cmd:LTSCALE}} (`LTS`).

Kiểu đường hiện trên màn hình và trong bản in. Các nét của chúng tính bằng đơn vị bản vẽ: bản vẽ hệ mét dùng kích thước ISO (DASHED: nét 12.7 mm), bản vẽ inch dùng kích thước inch (0.5"). Nếu nét trông quá nhỏ hoặc quá lớn, đổi {{ui:Tỷ lệ kiểu đường}} của bản vẽ (LTSCALE): mọi nét và khoảng trống được nhân với nó; tỷ lệ riêng của đối tượng nhân thêm lần nữa. Một mẫu quá mịn để thấy được sẽ được vẽ như đường liền.

Độ dày nét được in trong bản in, bằng mm trên giấy bất kể tỷ lệ. Đường có độ dày nét {{ui:Mặc định}} dùng độ rộng bút chọn trong hộp thoại {{ui:In ra PDF}} (0.13 đến 0.70 mm; ban đầu 0.25 mm); độ dày nét 0 được in thành đường mảnh nhất. Trên màn hình mỗi đường rộng một điểm ảnh cho đến khi bạn nhấn {{ui:LWT}} trên thanh trạng thái (hoặc gõ {{cmd:LWDISPLAY}}): khi đó độ dày nét trên 0.25 mm vẽ rộng hơn (0.5 mm = 2 điểm ảnh) trong mô hình, và đúng độ rộng thật trên giấy khi ở tờ. Lựa chọn được giữ trong trình duyệt này.

## Tiêu chuẩn văn phòng

Một văn phòng có thể giữ chiều cao chữ trên giấy, lớp, các trường khung tên và mẫu trong một bản ghi, gọi là tiêu chuẩn văn phòng. CadCraft đọc nó theo thứ tự này: bản ghi riêng của bản vẽ (đặt bằng {{cmd:OFFICESTANDARD}} › `Import`, được giữ trong tệp), tiêu chuẩn chung của nhóm bạn, rồi Chính sách mặc định của bạn. Văn bản và kích thước chú thích lấy chiều cao trên giấy của chúng từ đó tại tỷ lệ chú thích. Một tiêu chuẩn trống không đổi gì. {{cmd:OFFICESTANDARD}} › `Layers` thêm các lớp văn phòng mà bản vẽ còn thiếu.
