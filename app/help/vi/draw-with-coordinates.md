---
title: Vẽ bằng tọa độ
summary: Vẽ đường bao sàn chính xác bằng cách gõ tọa độ tuyệt đối, tương đối và cực, và nhập khoảng cách trực tiếp.
keywords: line, pline, polyline, đa tuyến, tọa độ, tương đối, cực, tuyệt đối, khoảng cách trực tiếp, @, gõ điểm, chính xác, ortho
from: 19e82350
---

## Bạn sẽ tạo gì

Đường bao của một căn phòng hình chữ L, 6000 × 4500 với phần khuyết 2000 × 1500, vẽ chính xác, cộng thêm một bức tường ở góc 30 độ. Bạn sẽ dùng cả bốn cách gõ một điểm. Làm việc theo milimét: một đơn vị bản vẽ là một milimét.

Bảng tham khảo nhanh cho mọi định dạng nằm trong [Nhập tọa độ và khoảng cách](topic:coordinate-entry).

## Trước khi bắt đầu

1. Mở CadCraft. Nếu đang mở một bản vẽ, bấm {{ui:New}} trước.
2. Nhấn {{key:Esc}} để không có gì được chọn. Bảng bên phải hiển thị {{ui:Current settings}}.
3. Đặt {{ui:Units}} thành {{ui:Millimeters}}. Không có gì bị đổi kích thước; điều này chỉ cho tờ và bản in biết một đơn vị có nghĩa là gì.

## Tọa độ tuyệt đối: điểm đầu tiên

Tọa độ tuyệt đối là một vị trí đo từ gốc tọa độ, gõ dạng `x,y`.

1. Gõ `L` rồi nhấn {{key:Enter}}. Dòng nhắc hiện `Chỉ định điểm đầu tiên:`.
2. Gõ `0,0` rồi nhấn {{key:Enter}}.

Đường thẳng giờ kéo dãn từ gốc tọa độ tới con trỏ chữ thập. Tọa độ trên thanh trạng thái hiển thị khoảng cách và góc từ điểm đầu khi bạn di chuyển.

## Tọa độ tương đối: @dx,dy

Tọa độ tương đối được gõ dạng `@dx,dy`: đi ngang bao nhiêu, đi lên bao nhiêu, tính từ điểm cuối cùng. Số âm đi sang trái hoặc xuống dưới.

3. Gõ `@6000,0` rồi nhấn {{key:Enter}}. Một đoạn 6000 chạy sang phải.
4. Gõ `@0,3000` rồi nhấn {{key:Enter}}.
5. Gõ `@-2000,0` rồi nhấn {{key:Enter}}.
6. Gõ `@0,1500` rồi nhấn {{key:Enter}}.

Bạn sẽ thấy bốn đường thẳng nối nhau đi lên phía bên phải căn phòng.

## Nhập khoảng cách trực tiếp: một số đơn lẻ

Khi bạn gõ một số đơn lẻ, CadCraft đi đúng khoảng cách đó theo hướng của con trỏ chữ thập. Bật Ortho để hướng được bắt vào ngang hoặc dọc.

7. Nhấn {{key:F8}}, hoặc bấm {{ui:Ortho}} trên thanh trạng thái. Thanh trạng thái ghi "Ortho đã bật".
8. Di con trỏ sang trái của điểm cuối cùng. Đường kéo giãn giữ nằm ngang.
9. Gõ `4000` rồi nhấn {{key:Enter}}. Đường đi 4000 sang trái.
10. Di con trỏ xuống dưới điểm cuối cùng.
11. Gõ `4500` rồi nhấn {{key:Enter}}. Bạn quay về điểm đầu.
12. Nhấn {{key:Enter}} ở dòng nhắc trống để kết thúc lệnh.

:::mac
F8 có thể điều khiển phát đa phương tiện trên bàn phím Mac. Giữ **fn** và nhấn F8, hoặc bấm {{ui:Ortho}}. Xem [Phím, chuột và bàn di chuột](common:keys).
:::

Bây giờ bạn có một đường bao hình chữ L khép kín gồm sáu đường thẳng rời.

13. Bấm {{ui:Extents}} để thấy toàn bộ.

## Tọa độ cực: @khoảng cách<góc

Tọa độ cực được gõ dạng `@khoảng cách<góc`. Góc tính bằng độ, đo ngược chiều kim đồng hồ từ hướng X dương: 0 là phải, 90 là lên, 180 là trái, 270 (hoặc -90) là xuống.

14. Gõ `L` rồi nhấn {{key:Enter}}.
15. Gõ `6000,0` rồi nhấn {{key:Enter}} để bắt đầu tại góc dưới bên phải.
16. Gõ `@2500<-30` rồi nhấn {{key:Enter}}. Một đoạn 2500 rời góc, đi xuống và sang phải với góc 30 độ dưới phương ngang.
17. Nhấn {{key:Enter}} để kết thúc lệnh.

Tọa độ cực không có `@`, như `2500<30`, được đo từ gốc tọa độ thay vì từ điểm cuối cùng.

## Cùng đường bao đó dưới dạng một đa tuyến

Sáu đường thẳng rời vẫn ổn cho nhiều việc, nhưng một đa tuyến là một đối tượng: nó dời song song, đo và chọn như một khối. Dùng {{cmd:PLINE}} với cùng cách nhập.

1. Gõ `PL` rồi nhấn {{key:Enter}}.
2. Gõ `0,-6000` rồi nhấn {{key:Enter}} để bắt đầu bên dưới đường bao đầu tiên.
3. Gõ `@6000,0`, rồi nhấn {{key:Enter}}.
4. Gõ `@0,3000`, rồi nhấn {{key:Enter}}.
5. Gõ `@-2000,0`, rồi nhấn {{key:Enter}}.
6. Gõ `@0,1500`, rồi nhấn {{key:Enter}}.
7. Gõ `@-4000,0`, rồi nhấn {{key:Enter}}.
8. Gõ `C` rồi nhấn {{key:Enter}}. Đa tuyến khép kín và lệnh kết thúc.
9. Bấm đường bao mới. Bảng bên phải hiển thị "Đa tuyến", {{ui:Vertices}}, {{ui:Length}} và, vì nó khép kín, {{ui:Area}}.

Diện tích phải là 24000000 (milimét vuông, tức 24 mét vuông).

## Tùy chọn khi vẽ

- Trong {{cmd:LINE}} và {{cmd:PLINE}}, gõ `U` rồi nhấn {{key:Enter}} để hoàn tác đoạn cuối mà không thoát lệnh.
- Trong {{cmd:LINE}}, `C` khép kín về điểm đầu khi có ít nhất hai đoạn.
- Trong {{cmd:PLINE}}, `A` chuyển sang đoạn cung (mỗi cung nối trơn từ đoạn trước), và `L` chuyển lại sang đường thẳng. Ở chế độ cung, tùy chọn khép kín là `CL`.
- Nhấn {{key:Enter}} tại `Chỉ định điểm đầu tiên:` trong {{cmd:LINE}} sẽ bắt đầu từ điểm cuối cùng bạn đã nhập, để bạn tiếp tục từ chỗ đã dừng.

## Lỗi thường gặp

- **Gõ `6000,0` khi bạn định gõ `@6000,0`.** Không có `@`, điểm được đo từ gốc tọa độ, không phải từ điểm cuối cùng, nên đường bay đến một chỗ bất ngờ. Trong CadCraft, `x,y` luôn là tuyệt đối. Gõ `U` rồi nhấn {{key:Enter}} để hoàn tác.
- **Dấu phẩy gõ thay cho dấu thập phân.** Số thập phân dùng dấu chấm: `1250.5`. Dấu phẩy luôn tách X và Y.
- **Khoảng cách trực tiếp đi sai hướng.** Số đơn lẻ đi theo con trỏ chữ thập. Di con trỏ về phía bạn muốn trước khi nhấn {{key:Enter}}, và bật {{ui:Ortho}} cho đường thẳng.
- **"Cần nhập điểm hoặc từ khóa tùy chọn."** CadCraft không hiểu những gì bạn gõ. Kiểm tra khoảng trắng bên trong số hoặc dấu phẩy bị thiếu, rồi gõ lại.
- **Feet và inch.** CadCraft chỉ đọc số thuần. Gõ `150` cho 12'-6" trong bản vẽ theo Inches, hoặc `12.5` trong bản vẽ theo Feet.
