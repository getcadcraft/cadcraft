---
title: Nhập tọa độ và khoảng cách
summary: Mọi cách gõ một điểm, một khoảng cách, một góc hoặc một số tại dòng lệnh CadCraft, kèm ví dụ.
keywords: nhập động, dyn, f12, tab, tọa độ, tuyệt đối, tương đối, cực, @, khoảng cách trực tiếp, góc, độ, điểm cuối cùng, lastpoint, gõ điểm, nhập liệu, phép tính, máy tính, cal, cộng, phân số, biểu thức
from: 7de9252d
---

## Điểm

Khi lệnh yêu cầu một điểm, gõ một trong các dạng sau rồi nhấn {{key:Enter}}:

| Bạn gõ | Nghĩa | Ví dụ |
|---|---|---|
| `x,y` | Tuyệt đối: đo từ gốc 0,0 | `2500,1200` |
| `#x,y` | Cũng là tuyệt đối (được chấp nhận theo thói quen) | `#2500,1200` |
| `@dx,dy` | Tương đối: sang ngang và lên trên từ điểm cuối | `@600,0` |
| `@d<a` | Cực tương đối: khoảng cách và góc từ điểm cuối | `@1500<45` |
| `d<a` | Cực tuyệt đối: khoảng cách và góc từ gốc | `3000<90` |
| một số đơn lẻ | Khoảng cách trực tiếp: cách điểm gốc chừng ấy, về phía con trỏ | `1200` |
| `*x,y`, `@*dx,dy` | Tọa độ thế giới khi đã đặt UCS | `*0,0` |

Khi đã đặt UCS ({{cmd:UCS}}), `x,y`, `@dx,dy` và góc trong `d<a` được đo theo các trục UCS. Xem [Xoay khung nhìn và dùng tọa độ riêng](topic:ucs-and-turned-view).

Hoặc nhấp trong bản vẽ; bắt điểm đối tượng và Ortho áp dụng cho các cú nhấp.

Quy tắc:

- Dấu phẩy phân tách X với Y. Số thập phân dùng dấu chấm: `1250.75,300`.
- Giá trị âm đi sang trái và xuống dưới: `@-600,0`.
- Không gõ khoảng trắng: {{key:Space}} gửi dòng như {{key:Enter}}.
- Số có thể dùng lũy thừa: `1e3` là 1000.
- Không gõ đơn vị, và không dùng ký hiệu feet và inch. Gõ số thường theo đơn vị bản vẽ.

## Điểm cuối cùng

`@` đếm từ **điểm cuối bạn đã nhập ở bất kỳ dấu nhắc điểm nào**, trong mọi lệnh: một cú nhấp, một điểm bắt hoặc một điểm gõ. Nó được nhớ giữa các lệnh, nên bạn có thể bắt đầu một đường mới cách điểm kết thúc của đường cũ `@0,500`. Trước khi bạn nhập bất kỳ điểm nào, `@` đếm từ 0,0.

Một số nơi điều này quan trọng:

- Trong {{cmd:COPY}}, sau bản sao đầu tiên, điểm cuối cùng là điểm của bản sao đó. `@600,0` hai lần đặt các bản sao cách bản gốc 600 và 1200.
- Sau khi bạn đặt một kích thước, điểm cuối cùng là chỗ bạn đặt đường kích thước, không phải điểm cuối của kích thước.

Khi phân vân, hãy dùng một điểm tuyệt đối, một điểm bắt, hoặc khoảng cách trực tiếp.

## Nhập khoảng cách trực tiếp

Một số đơn lẻ là khoảng cách từ **điểm gốc** của lệnh (điểm mà dây cao su bắt đầu) theo hướng con trỏ:

1. Di chuyển con trỏ theo hướng bạn muốn.
2. Gõ khoảng cách và nhấn {{key:Enter}}.

Khi {{ui:Ortho}} bật, hướng được bắt vào chiều ngang hoặc chiều dọc thẳng, và đây là cách nhanh nhất để vẽ tường vuông. Nếu không có điểm gốc, hoặc con trỏ nằm đúng trên điểm gốc, số bị từ chối với thông báo "Cần một điểm hoặc từ khóa tùy chọn."

## Góc

- Tính bằng độ, dạng số thường: `30`, `-45`, `112.5`.
- Đo ngược chiều kim đồng hồ từ hướng X dương (chỉ sang phải): 0 là phải, 90 là lên, 180 là trái, 270 hoặc -90 là xuống.
- Ở chỗ hỏi một góc (xoay, góc văn bản), bạn cũng có thể nhấp: góc được đo từ điểm gốc đến chỗ nhấp. Trước khi có điểm gốc, cú nhấp đầu tiên đặt nó và dấu nhắc sẽ hỏi điểm thứ hai.

## Khoảng cách

Ở chỗ hỏi một khoảng cách (bán kính, dời song song, chiều cao văn bản, hệ số tỷ lệ):

- gõ một số dương (trong bản vẽ feet và inch cũng có `12'6"` hoặc `6-1/2`: xem [Feet và inch](topic:units-papers-scales#feet-and-inches-and-fractions)), hoặc
- nhấp một điểm: khoảng cách từ điểm gốc của lệnh đến điểm đó, hoặc
- nhấp hai điểm khi không có điểm gốc: dấu nhắc đổi thành `Specify second point`.

"Cần một số dương hoặc hai điểm." nghĩa là giá trị không phải là số, hoặc là số âm.

## Phép tính trong giá trị đã gõ

Ở bất kỳ chỗ nào nhập độ dài, tọa độ, góc hoặc số (dòng lệnh, nhập động, các ô Thuộc tính và hộp thoại), bạn có thể gõ một phép tính với `+`, `-`, `*`, `/` và ngoặc thay vì tự tính trước:

| Gõ | Cho ra |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (trong bản vẽ feet và inch) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, theo đơn vị bản vẽ (khi đã đặt đơn vị) |
| `@4+7/16,0` | một điểm cách điểm cuối 4.4375 về bên phải |
| `360/7` | một góc 51.43 độ |

- Dấu gạch ngang viết trong độ dài vẫn là một phần của nó: `4-7/16` là 4 7/16 và `24'-6"` là 24 feet 6 inch. Để trừ sau dấu feet, hoàn tất độ dài trước, `24'-0"-6"`, hoặc đặt phép tính trong ngoặc với khoảng trắng quanh dấu gạch, `(24' - 6")` (trong ngoặc, khoảng trắng là khoảng trắng; ở nơi khác nó nhấn {{key:Enter}}).
- Một số thường được cộng vào độ dài là theo đơn vị bản vẽ; nhân hoặc chia với một số sẽ co giãn độ dài. Nhân hai độ dài tạo thành diện tích, nên `2'*3'` bị từ chối.
- `abs`, `round`, `ceil` và `floor` cũng hoạt động: `round(10/3)`.
- Phép tính không đọc được sẽ bị từ chối kèm chỗ sai, ví dụ "Phép tính kết thúc quá sớm (ký tự 3): thiếu một giá trị." Không bao giờ coi là 0. {{cmd:CAL}} in giá trị của một phép tính.

## Nhập động

{{ui:Động}} ({{key:F12}}, trên thanh trạng thái) đặt các giá trị cạnh con trỏ khi một lệnh hỏi một điểm.

- Khi chưa có điểm gốc (điểm đầu của đường thẳng), hai ô là **X** và **Y**.
- Sau đó, chúng là **khoảng cách** và **góc** từ điểm cuối.

Gõ vẫn đi vào dòng lệnh; ô cạnh con trỏ hiển thị nó, và dây cao su đi theo.

1. Gõ một giá trị: nó vào ô được tô sáng.
2. Nhấn {{key:Tab}} (hoặc dấu phẩy sau X). Giá trị được khóa (hiện đậm) và ô tiếp theo được tô sáng. Khoảng cách đã khóa giữ dây cao su dài như vậy trong khi bạn ngắm bằng chuột.
3. Gõ giá trị thứ hai, hoặc chỉ ngắm, rồi nhấn {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} vẽ 50 thẳng lên từ điểm cuối.

Nhấn {{key:Enter}} sau một giá trị mà không có {{key:Tab}} hoạt động như nhập khoảng cách trực tiếp. Feet và inch cũng dùng được trong các ô (`12'6"`). Các dấu nhắc khoảng cách và góc (bán kính vòng tròn, phép xoay) cũng hiển thị giá trị của chúng cạnh con trỏ.

## Tùy chọn và mặc định

- Tùy chọn hiện trong ngoặc vuông. Gõ các chữ cái viết hoa của một tùy chọn (`D` cho `[Diameter]`, `CL` cho `CLose`) rồi nhấn {{key:Enter}}. Phần đầu dài hơn của từ cũng hoạt động (`DIA`).
- Mặc định hiện trong ngoặc nhọn, như `<500>`. Nhấn {{key:Enter}} hoặc nhấp phải để dùng nó.

## Bố cục bàn phím khác và bàn phím số

Tên lệnh, tên ngắn và các chữ cái tùy chọn là chữ Latinh. Với bố cục Hy Lạp, Kirin (Nga, Ukraina, Belarus, Serbia, Macedonia, Bulgaria), Hebrew, Ả Rập, Ba Tư, Thái hoặc Hàn đang hoạt động, bạn không cần đổi bố cục: khi từ bạn gõ không phải là lệnh, tên ngắn hoặc tùy chọn như hiện có, CadCraft đọc theo các phím bạn đã nhấn. Phím `L` trên bàn phím Latinh vẫn bắt đầu `LINE`, và phím `C` vẫn trả lời `Close`, bất kể bố cục đặt chữ gì lên đó. Danh sách lệnh khớp phía trên dòng lệnh theo cùng quy tắc. Văn bản bạn gõ ở chỗ lệnh yêu cầu văn bản (nội dung của {{cmd:TEXT}}, một tên) không bao giờ bị đổi.

Trên các bố cục mà phím thập phân của bàn phím số cho ra dấu phẩy, phím đó gõ một điểm trong dòng lệnh và trong các ô số, nên `12.5` có thể gõ trên bàn phím số. Dấu phẩy của bàn phím chính vẫn phân tách `x,y`.

Cả hai có thể tắt trong {{ui:Cài đặt}}: {{ui:Commands on a non-Latin keyboard layout}} và {{ui:Keypad decimal key}}.

## Hiển thị tọa độ

Thanh trạng thái hiển thị X và Y của con trỏ (trong UCS khi có đặt), sau các điểm bắt và Ortho. Khi một lệnh có điểm gốc, nó thêm `Δ` với khoảng cách và góc từ điểm đó, ví dụ `Δ 1500 < 30°`: các số bạn sẽ gõ là `@1500<30`.

Dùng {{cmd:ID}} để in tọa độ của một điểm và {{cmd:DIST}} để đo giữa hai điểm.
