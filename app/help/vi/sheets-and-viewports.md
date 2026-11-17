---
title: Thiết lập tờ với khung tên và khung nhìn
summary: Tạo một tờ (bố cục) với khung viền và khung tên, đặt tỷ lệ khung nhìn, thêm khung nhìn thứ hai cho chi tiết, và điền khung tên.
keywords: layout, tờ, không gian giấy, paper space, khung nhìn, viewport, mview, vpview, khung tên, tỷ lệ, khổ giấy, khung viền, vports, tỷ lệ in, mspace, pspace, không gian mô hình, model space, vào khung nhìn, nhấp đúp khung nhìn
from: 45a45de8
---

## Bạn sẽ tạo gì

Một tờ A3 có khung tên, toàn bộ mặt bằng trong một khung nhìn ở tỷ lệ 1:100, và một khung nhìn thứ hai thể hiện một góc ở tỷ lệ 1:20.

## Mô hình và tờ

Bạn vẽ công trình trên thẻ {{ui:Model}}, ở kích thước thật: một bức tường 6 m dài 6000 đơn vị theo milimét. Một **tờ** (layout) là một tờ giấy, đo bằng milimét hoặc inch. Một **khung nhìn (viewport)** là một cửa sổ cắt trên tờ, thể hiện mô hình ở một tỷ lệ.

## Trước khi bắt đầu

1. Mở hoặc vẽ một mặt bằng trên thẻ {{ui:Model}}.
2. Nhấn {{key:Esc}} để không có gì được chọn.
3. Trong {{ui:Current settings}}, đặt {{ui:Units}} thành đơn vị bạn đã vẽ, ví dụ {{ui:Millimeters}}.

Đơn vị quan trọng: tỷ lệ khung nhìn như 1:100 nghĩa là một milimét trên giấy thể hiện 100 milimét thật, nên CadCraft cần biết một đơn vị bản vẽ là gì. Một bản vẽ để {{ui:Unitless}} được coi là có đơn vị của giấy (milimét trên giấy ISO, inch trên giấy Mỹ).

## Tạo tờ

1. Bấm nút {{ui:+}} bên phải các thẻ dưới bản vẽ, hoặc gõ `LAYOUT` rồi nhấn {{key:Enter}}, hoặc bấm {{ui:New sheet}}.

Một thẻ mới `Layout1` mở ra. Bạn sẽ thấy một tờ trên nền bàn tối hơn: một khung viền, một khung tên ở góc dưới bên phải, và một khung nhìn phía trên hiển thị toàn bộ mô hình ở tỷ lệ chuẩn lớn nhất vừa khít. Lịch sử ghi tên khổ giấy: ISO A3 cho bản vẽ hệ mét và bản vẽ không có đơn vị, Tabloid (ANSI B) cho bản vẽ theo inch hoặc feet.

2. Bấm {{ui:Extents}} để vừa tờ lên màn hình.

## Chọn giấy

1. Nhấn {{key:Esc}} để không có gì được chọn. Tiêu đề bảng bên phải ghi "Tờ: Layout1".
2. Trong {{ui:Name}}, gõ `A-101 Plan` rồi nhấn {{key:Enter}}. Thẻ được đổi tên.
3. Trong {{ui:Paper}}, chọn một khổ.
4. Trong {{ui:Orientation}}, chọn {{ui:Landscape}} hoặc {{ui:Portrait}}.

:::warning
Đổi giấy không di chuyển hay đổi kích thước những gì đã có trên tờ. Sau khi đổi, kiểm tra xem khung viền, khung tên và khung nhìn còn vừa không, rồi di chuyển hoặc đổi kích thước chúng bằng các núm grip. Chuyển giữa giấy milimét và giấy inch giữ nguyên các con số, nên mọi thứ đổi kích thước: thanh trạng thái sẽ cảnh báo bạn.
:::

## Đặt tỷ lệ khung nhìn

1. Bấm vào khung viền (cạnh) của khung nhìn. Tiêu đề bảng ghi "Khung nhìn".
2. Trong {{ui:Scale}}, chọn `1:100`.

Mô hình trong khung nhìn vẽ lại ở 1:100, căn giữa như trước. Danh sách đưa ra các tỷ lệ mét từ 10:1 đến 1:10000; bản vẽ theo inch hoặc feet cũng có tỷ lệ kiến trúc (1/4" = 1'-0" và tương tự) và tỷ lệ kỹ thuật (1" = 20' và tương tự). {{ui:Fit the whole model}} đặt một tỷ lệ chính xác, không chuẩn, vừa khít mọi thứ.

3. Nếu mặt bằng không còn căn giữa, đổi {{ui:X}} và {{ui:Y}} dưới {{ui:View center (model)}} trong bảng bên phải: đó là điểm mô hình nằm giữa khung nhìn.

## Hiển thị một phần mô hình trong khung nhìn

1. Khi khung nhìn được chọn, bấm {{ui:Pick a window on the model…}} trong bảng bên phải (hoặc gõ `VPVIEW` rồi nhấn {{key:Enter}}).
2. CadCraft chuyển sang thẻ {{ui:Model}}. Bấm một góc của vùng cần hiển thị.
3. Bấm góc đối diện.

Bạn quay về tờ, và khung nhìn hiển thị vùng đó ở tỷ lệ chuẩn lớn nhất vừa khít; lịch sử ghi tỷ lệ nào. {{ui:Show the whole model}} trở về toàn bộ mặt bằng ở một tỷ lệ chuẩn.

## Thêm khung nhìn thứ hai cho chi tiết

1. Tạo chỗ trên tờ: chọn khung nhìn đầu tiên và kéo một núm góc để thu nhỏ nó.
2. Gõ `MV` rồi nhấn {{key:Enter}}, hoặc bấm {{ui:Viewport}} trong nhóm Tờ.
3. Bấm một góc của khung nhìn mới trên tờ.
4. Bấm góc đối diện.

Khung nhìn mới hiển thị toàn bộ mô hình. Lịch sử ghi tỷ lệ của nó.

5. Bấm khung viền của khung nhìn mới.
6. Bấm {{ui:Pick a window on the model…}} và chọn một vùng nhỏ quanh một góc của mặt bằng.
7. Trong {{ui:Scale}}, chọn `1:20`.

Khung viền của khung nhìn nằm trên lớp `Viewports`, lớp này được đặt không in, nên các khung hiển thị trên màn hình nhưng không có trong PDF.

## Điền khung tên

Khung tên được tạo từ các đường và văn bản thông thường trên lớp `Title block`. Nó bắt đầu với tên bản vẽ, tỷ lệ của khung nhìn đầu tiên, ngày hôm nay và số tờ.

1. Nhấp đúp vào dòng tiêu đề lớn. Một hộp soạn thảo mở ra phía trên nó.
2. Gõ tiêu đề của tờ.
3. Bấm {{ui:OK}}, hoặc nhấn {{key:Mod+Enter}}.

Làm tương tự với các trường khác. Dùng {{cmd:TEXT}} để viết vào ô trống "DRAWN BY". Văn bản SCALE không tự cập nhật khi bạn đổi tỷ lệ khung nhìn: hãy sửa bằng tay.

## Vẽ trên tờ

Mọi thứ bạn vẽ trên thẻ tờ nằm trên giấy, theo đơn vị giấy: văn bản cao 3.5 là 3.5 mm trên tờ ISO. Ghi chú, mũi tên chỉ bắc và khung viền tờ thuộc về đây.

Để thay đổi chính mặt bằng, chuyển sang thẻ {{ui:Model}}, hoặc làm việc qua một khung nhìn (phần tiếp theo); mọi khung nhìn đều thể hiện thay đổi.

## Làm việc trên mô hình qua một khung nhìn

1. Nhấp đúp bên trong một khung nhìn, ngoài khung viền. Hoặc gõ `MS` rồi nhấn {{key:Enter}}: khi tờ chỉ có một khung nhìn, nó vào thẳng; khi có nhiều, bấm vào khung bạn muốn.

Khung viền được vẽ đậm hơn, lịch sử ghi bạn đang ở bên trong, và thẻ tờ vẫn được chọn. Mọi thứ bạn vẽ hoặc thay đổi lúc này nằm trên mô hình, theo đơn vị mô hình, như trên thẻ {{ui:Model}}: một đường vẽ trong khung nhìn ở 1:100 là milimét thật. Các lớp bị đóng băng trong khung nhìn này không thể chọn ở đây.

2. Lăn bánh xe hoặc kéo bằng nút giữa để thu phóng và di chuyển những gì khung nhìn hiển thị. Tờ vẫn ở yên.
3. Nhấp đúp ở bất kỳ đâu ngoài khung viền, hoặc gõ `PS` rồi nhấn {{key:Enter}}.

Bạn quay về tờ. Khung nhìn giữ góc nhìn bạn để lại; {{key:Mod+Z}} đưa góc nhìn cũ về trong một bước. Bấm bất kỳ thẻ nào dưới bản vẽ cũng thoát khỏi khung nhìn.

:::note
Khung nhìn có hiển thị bị khóa ({{ui:Display locked}} trong {{ui:Properties}}) giữ góc nhìn của nó: bên trong, di chuyển và thu phóng sẽ làm chuyển cả tờ. Khung nhìn đã tắt thì không thể vào được.
:::

## Ghi nhãn một góc nhìn bằng tên

Nhãn tiêu đề góc nhìn dưới một khung nhìn có thể hiển thị tên góc nhìn của khung nhìn và luôn cập nhật theo:

1. Đặt tên cho góc nhìn: chọn khung viền của khung nhìn và điền {{ui:View name}} trong {{ui:Properties}} — hoặc lưu góc nhìn trên thẻ {{ui:Model}} bằng {{cmd:NAMEDVIEW}} và, khi khung nhìn được chọn, gõ `VPVIEW`, `V` và tên của góc nhìn: khung nhìn hiển thị góc nhìn đó và nhận tên của nó.
2. Gõ `VIEWLABEL` (`VL`) rồi nhấn {{key:Enter}}, sau đó bấm nơi nhãn sẽ đặt ({{key:Enter}} đặt nó dưới góc dưới bên trái của khung nhìn).

Khi tên góc nhìn thay đổi, nhãn cũng thay đổi theo, trong cùng một bước hoàn tác.

## Đóng băng một lớp trong một khung nhìn

Để ẩn một lớp trong một khung nhìn mà không ẩn ở các khung khác (ví dụ đồ nội thất trong một chi tiết):

1. Chọn khung viền của khung nhìn, hoặc làm việc bên trong nó (nhấp đúp).

Bảng {{ui:Layers}} có thêm một nút trên mỗi hàng, và một dòng phía trên danh sách nói điều đó.

2. Bấm nút đó trên hàng của lớp.

Lớp biến mất chỉ ở khung nhìn đó. Bấm lại để mở băng; {{key:Mod+Z}} hoàn tác cả hai. Để làm nhiều lớp hoặc khung nhìn cùng lúc, gõ `VPLAYER`: `F` (đóng băng) hoặc `T` (mở băng), tên lớp (`A-*` lấy mọi lớp bắt đầu bằng A-), rồi `C` (hiện hành), `A` (Tất cả) hoặc `S` (Chọn). `VPLAYER` `V` (Vpvisdflt) chọn các lớp mà khung nhìn mới bắt đầu ở trạng thái đóng băng.

## Thêm tờ

Mỗi {{ui:+}} thêm một tờ khác (`Layout2`, `Layout3` …) với số tờ tiếp theo. Để xóa tờ đang mở, nhấn {{key:Esc}} và bấm {{ui:Delete this sheet}} trong bảng bên phải. Nó không hỏi lại; {{key:Mod+Z}} đưa tờ về.

In một tờ bằng {{ui:Plot this sheet}} hoặc {{key:Mod+P}}; xem [In ra PDF](topic:plot-pdf).

## Lỗi thường gặp

- **Khung nhìn không hiển thị gì.** Mô hình trống, hoặc góc nhìn hướng đi nơi khác. Chọn khung viền và bấm {{ui:Show the whole model}}.
- **Danh sách tỷ lệ chỉ có tỷ số, không có tỷ lệ feet và inch.** Đặt {{ui:Units}} thành {{ui:Inches}} hoặc {{ui:Feet}} trên thẻ {{ui:Model}}.
- **1:100 trông lớn hoặc nhỏ gấp mười lần.** Đơn vị bản vẽ bị sai. Đặt {{ui:Units}} thành đơn vị thật của một đơn vị.
- **Bấm mặt bằng trong khung nhìn không chọn được gì.** Trên tờ, bạn chọn các đối tượng của chính tờ. Nhấp đúp vào bên trong khung nhìn trước để làm việc trên mặt bằng qua nó.
- **Bấm ngoài khung nhìn không có tác dụng.** Bạn đang ở trong một khung nhìn: nhấp đúp ra ngoài, hoặc gõ `PS`, để làm việc trên tờ trở lại.
- **"Khung nhìn đặt trên tờ. Mở thẻ tờ (hoặc tạo tờ bằng LAYOUT) trước."** {{cmd:MVIEW}} chỉ hoạt động trên thẻ tờ.
