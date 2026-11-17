---
title: Bàn phím và chuột
summary: Mọi phím, thao tác chuột và phím dòng lệnh trong ứng dụng vẽ CadCraft, theo cách mã xử lý chúng.
keywords: bàn phím, chuột, phím tắt, phím, bánh xe, di chuyển khung nhìn, thu phóng, chuột phải, nút giữa, f3, f7, f8, ctrl, phím lệnh, phím nóng, sao chép, cắt, dán, nhân bản, bộ nhớ tạm, chọn tất cả
from: a2608a29
---

Phím tắt được hiển thị theo máy tính của bạn. Trên Mac, mọi phím tắt {{key:Mod}} bên dưới dùng phím Command, và phím Control cũng hoạt động. Cách viết phím, và cách dùng các phím F trên Mac, có trong [Phím, chuột và bàn di chuột](common:keys).

## Gõ lệnh

| Phím | Tác dụng |
|---|---|
| Bất kỳ chữ cái, chữ số hoặc ký hiệu nào | Đi đến dòng lệnh, dù con trỏ chuột ở đâu, trừ khi một ô trong bảng đang có con trỏ |
| {{key:Enter}} | Gửi nội dung bạn đã gõ. Khi dấu nhắc trống: lặp lại lệnh cuối cùng, kết thúc một lệnh, hoàn tất một vùng chọn, hoặc chấp nhận mặc định trong `<…>` |
| {{key:Space}} | Giống {{key:Enter}}, trừ khi CadCraft đang hỏi văn bản (văn bản, tên khối, chữ của kích thước), khi đó nó gõ một dấu cách |
| {{key:Esc}} | Hủy lệnh. Khi không có lệnh nào đang chạy: hủy việc di chuyển grip hoặc hộp chọn, rồi bỏ chọn |
| {{key:Tab}} | Chấp nhận lệnh gợi ý hiện bên phải dòng lệnh. Khi chưa gõ gì và con trỏ nằm trên các đối tượng chồng nhau: làm nổi bật đối tượng kế tiếp ở đó (nhấp để chọn) |
| {{key:Up}} {{key:Down}} | Duyệt qua các dòng bạn đã gõ trước đó (100 dòng gần nhất) |

## Vẽ và chỉnh sửa

| Phím | Tác dụng |
|---|---|
| {{key:Mod+Z}} | Hoàn tác lệnh cuối cùng |
| {{key:Mod+Y}} hoặc {{key:Mod+Shift+Z}} | Làm lại |
| {{key:Mod+A}} | Chọn mọi đối tượng bạn có thể sửa trên thẻ đang mở ({{cmd:SELECTALL}}). Nếu bạn đã gõ gì ở dòng lệnh, phím này chọn văn bản đó thay thế |
| {{key:Delete}} | Xóa các đối tượng đã chọn ({{cmd:ERASE}}), trừ khi bạn đã gõ gì ở dòng lệnh |
| {{key:Backspace}} | Xóa các đối tượng đã chọn khi dòng lệnh không có con trỏ; ở dòng lệnh, phím này xóa những gì bạn đã gõ |
| {{key:Esc}} | Khi không có lệnh nào đang chạy: bỏ chọn ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Lưu một bản sao theo định dạng của bản vẽ (DWG hoặc DXF) |
| {{key:Mod+Shift+S}} | Lưu thành: chọn DWG hoặc DXF, rồi lưu một bản sao |
| {{key:Mod+O}} | Mở một tệp DWG hoặc DXF |
| {{key:Mod+P}} | In ra PDF |

Hoàn tác, làm lại, chọn tất cả và in không làm gì khi một lệnh đang chạy: nhấn {{key:Esc}} trước.

## Sao chép, cắt và dán

| Phím | Tác dụng |
|---|---|
| {{key:Mod+C}} | Sao chép vùng chọn vào bộ nhớ tạm ({{cmd:COPYCLIP}}). Không chọn gì: CadCraft yêu cầu chọn đối tượng |
| {{key:Mod+X}} | Cắt: sao chép vùng chọn, rồi xóa nó ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Dán: bản sao đi theo con trỏ; nhấp, hoặc gõ một điểm, để đặt xuống ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Dán tại chỗ: tại tọa độ mà nó được sao chép từ ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Nhân bản: một bản sao của vùng chọn di chuyển theo con trỏ; nhấp để đặt xuống, {{key:Esc}} thì không để lại gì ({{cmd:DUPLICATE}}) |

Các thao tác này cũng có trong nhóm {{ui:Chỉnh sửa}} của thanh công cụ ({{ui:Sao chép}}, {{ui:Dán}}) và menu {{ui:Thêm}} của nó. Khi một lệnh khác đang chạy, hãy hoàn tất nó hoặc nhấn {{key:Esc}} trước; nhấn lại {{key:Mod+V}} hoặc {{key:Mod+D}} khi một bản sao đang đi theo con trỏ sẽ bắt đầu lại từ đầu. Khi bạn đã gõ gì ở dòng lệnh, hoặc khi một lệnh đang hỏi văn bản, các phím này sao chép, cắt và dán văn bản đó. Xem [Sao chép, dán và nhân bản](topic:copy-paste).

## Bật tắt

| Phím | Bật tắt | Nút thanh trạng thái |
|---|---|---|
| {{key:F3}} | Bắt điểm đối tượng bật hoặc tắt | {{ui:Bắt điểm}} |
| {{key:F7}} | Lưới bật hoặc tắt | {{ui:Lưới}} |
| {{key:F8}} | Ortho bật hoặc tắt | {{ui:Ortho}} |
| {{key:F10}} | Truy vết cực bật hoặc tắt | {{ui:Cực}} |
| {{key:F11}} | Truy vết bắt điểm đối tượng bật hoặc tắt | {{ui:Theo dõi}} |
| {{key:F12}} | Nhập động bật hoặc tắt | {{ui:Động}} |

:::mac
Trên Mac, F3, F7 và F8 thường là phím Mission Control và phím đa phương tiện. Giữ **fn** cùng với chúng, hoặc bật phím chức năng tiêu chuẩn trong Cài đặt Hệ thống, như mô tả trong [Phím, chuột và bàn di chuột](common:keys). Các nút thanh trạng thái luôn hoạt động.
:::

:::firefox
F7 trong Firefox cũng có thể hỏi có bật duyệt bằng con trỏ (caret browsing) không. Chọn **Không**, và dùng nút {{ui:Lưới}} nếu nó tiếp tục hỏi.
:::

## Trợ giúp

| Phím | Tác dụng |
|---|---|
| {{key:F1}} | Mở hoặc đóng trợ giúp này, cạnh bản vẽ. Nó hoạt động ngay cả khi một lệnh đang chạy, và không bao giờ chuyển đến dòng lệnh. |
| {{key:Esc}} | Khi con trỏ ở bảng trợ giúp: xóa nội dung tìm kiếm, hoặc đóng bảng |

Nút {{ui:Trợ giúp}} trong thanh ở trên cùng làm điều tương tự như {{key:F1}}. Khi bạn gõ trong ô tìm kiếm của trợ giúp, không có gì chuyển đến dòng lệnh. Nhấp vào bản vẽ để trả các phím lại cho CadCraft; bảng vẫn mở cạnh nó.

:::mac
Trên bàn phím Mac, giữ **fn** và nhấn F1, hoặc nhấp {{ui:Trợ giúp}}.
:::

## Màn hình

| Phím | Tác dụng |
|---|---|
| {{key:Ctrl+Shift+F}} | Chuyển vòng qua chế độ thường, toàn màn hình, và toàn màn hình với các thanh ẩn. Phím này dùng phím Control trên mọi máy tính, kể cả Mac. |
| {{key:Left}} {{key:Right}} | Khi một thẻ dưới bản vẽ đang được chọn: thẻ trước hoặc thẻ sau |

Ở chế độ toàn màn hình, trình duyệt có thể dùng lần nhấn {{key:Esc}} đầu tiên để thoát toàn màn hình. Nhấn {{key:Esc}} lần nữa để hủy một lệnh.

## Hộp thoại

| Phím | Tác dụng |
|---|---|
| {{key:Esc}} | Đóng hộp thoại ({{ui:In ra PDF}}, hoặc một câu hỏi như "Thay đổi chưa lưu", khi đó nó có nghĩa là {{ui:Hủy}}) |
| {{key:Tab}} | Chuyển giữa các thiết lập và nút của hộp thoại |

Khi một hộp thoại đang mở, các phím của bản vẽ bị tắt.

## Ô trong bảng

Trong một ô ở bảng bên phải hoặc bên trái:

| Phím | Tác dụng |
|---|---|
| {{key:Enter}} | Áp dụng giá trị và rời khỏi ô |
| {{key:Esc}} | Đặt lại giá trị cũ và rời khỏi ô |
| {{key:Tab}} | Áp dụng và chuyển sang ô kế tiếp |

Khi một ô có con trỏ, các chữ cái gõ vào đó, không vào dòng lệnh.

## Chuột

| Thao tác | Tác dụng |
|---|---|
| Nhấp | Chỉ định một điểm khi lệnh yêu cầu; chọn một đối tượng khi lệnh yêu cầu đối tượng; ngoài ra chọn một đối tượng hoặc một grip |
| Shift+nhấp | Bỏ một đối tượng đã chọn khỏi vùng chọn (khi {{ui:Nhấp đối tượng}} đặt là {{ui:Thay thế vùng chọn}} trong [Cài đặt](topic:settings): thì là thêm vào). Khi đang chỉ định một điểm: bỏ qua các điểm bắt đối tượng cho lần nhấp đó |
| Nhấp vào khoảng trống, rồi nhấp lại | Một hộp chọn: từ trái sang phải là cửa sổ, từ phải sang trái là chọn cắt |
| Kéo trên khoảng trống | Một lasso: kéo sang phải trước là cửa sổ, sang trái trước là chọn cắt; {{key:Space}} khi đang kéo sẽ đổi vòng qua cửa sổ, chọn cắt và hàng rào; {{key:Esc}} bỏ nó (LASSOMODE 0, hoặc Cài đặt, sẽ đưa nó về hình chữ nhật) |
| Kéo qua các mảnh trong TRIM hoặc EXTEND | Cắt (hoặc kéo dài) mọi mảnh mà đường kéo đi qua; giữ {{key:Shift}} để dùng chế độ kia |
| Kéo một grip | Di chuyển grip (hoặc nhấp vào grip, rồi nhấp nơi nó sẽ đến) |
| Nhấp đúp vào văn bản | Chọn nó và đặt con trỏ vào hộp {{ui:Văn bản}} trong bảng bên phải |
| Nhấp chuột phải | Enter. Khi đang di chuyển grip hoặc hộp chọn: hủy nó |
| Kéo bằng nút chuột phải | Di chuyển khung nhìn |
| Lăn bánh xe | Phóng to và thu nhỏ quanh con trỏ chữ thập |
| Kéo bằng bánh xe (nút giữa) | Di chuyển khung nhìn |
| Nhấp đúp vào bánh xe | Thu phóng phạm vi (toàn bộ bản vẽ) |
| Thả một tệp DWG hoặc DXF lên bản vẽ | Mở nó |

Trên bàn di chuột hoặc màn hình cảm ứng, xem [Chuột, bàn di chuột và cảm ứng](topic:mouse-trackpad-touch).

## Các phím trình duyệt giữ

{{key:Mod+N}}, {{key:Mod+W}} và {{key:Mod+T}} luôn thuộc về trình duyệt. CadCraft không dùng chúng: hãy dùng {{ui:Mới}} hoặc gõ `NEW` để tạo bản vẽ mới. Bộ nhớ tạm của CadCraft là riêng của nó: {{key:Mod+C}} và {{key:Mod+V}} sao chép đối tượng giữa các bản vẽ và thẻ CadCraft, không đến hoặc từ các chương trình khác.

:::mac
Nếu {{key:Mod+Y}} mở lịch sử trình duyệt thay vì làm lại, hãy dùng {{key:Mod+Shift+Z}} hoặc nút {{ui:Làm lại}}.
:::

## Vị trí của lệnh Di chuyển

Di chuyển là lệnh `MOVE` (phím {{key:M}}): chọn các đối tượng, rồi một điểm gốc và một điểm thứ hai hoặc một khoảng cách đã gõ. `ALIGN` và `DISTRIBUTE` cũng có sẵn. BimCraft dùng cùng tên cho cùng công việc trên các cấu kiện công trình, nhưng {{key:M}} của nó là Đo, và Di chuyển của nó là {{key:Shift+M}}.
