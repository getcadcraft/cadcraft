---
title: Bắt điểm trên đối tượng
summary: Dùng bắt điểm đối tượng, Ortho và lưới để chọn chính xác điểm cuối, trung điểm, tâm và giao điểm bằng chuột.
keywords: osnap, object snap, điểm cuối, trung điểm, tâm, giao điểm, vuông góc, góc phần tư, gần nhất, nút, điểm chèn, ortho, lưới, f3, f8, f7, theo dõi cực, cực, polarang, theo dõi bắt điểm đối tượng, otrack, theo dõi, f10, f11
from: 3cf17f94
---

## Bạn sẽ tạo gì

Một hình chữ nhật với hai đường chéo, một vòng tròn có tâm đặt tại chỗ hai đường chéo cắt nhau, và một đường từ giữa một cạnh vuông góc tới vòng tròn. Mọi điểm được chọn bằng chuột, và mọi điểm đều chính xác.

## Bắt điểm hoạt động thế nào

Khi một lệnh đang yêu cầu một điểm, CadCraft tìm các điểm bắt trong khoảng 10 điểm ảnh quanh con trỏ chữ thập. Khi tìm thấy, một dấu và một nhãn xuất hiện ("Điểm cuối", "Giao điểm"), và một cú bấm rơi **chính xác** vào điểm đó, không phải nơi con trỏ chữ thập đang ở.

Bắt điểm được bật khi {{ui:Snap}} trên thanh trạng thái được nhấn. {{key:F3}} bật và tắt nó.

Các bắt điểm bạn có thể dùng là:

| Bắt điểm | Bắt vào |
|---|---|
| Điểm cuối | Hai đầu của đường thẳng, cung và đoạn đa tuyến |
| Trung điểm | Điểm giữa của đường thẳng, cung và đoạn đa tuyến |
| Tâm | Tâm của vòng tròn và cung, và của đoạn cung đa tuyến |
| Góc phần tư | Các điểm 0, 90, 180 và 270 độ của vòng tròn và cung |
| Giao điểm | Nơi hai đối tượng cắt nhau |
| Vuông góc | Điểm trên một đối tượng vuông góc với điểm cuối cùng (cần một điểm gốc) |
| Tiếp tuyến | Điểm trên vòng tròn hoặc cung mà một đường từ điểm cuối cùng vừa chạm tới. Khi chưa có điểm cuối cùng (điểm đầu của đường thẳng), dấu ghi "hoãn lại": điểm chạm được tính khi biết điểm kế tiếp, nên một đường từ Tiếp tuyến tới Tiếp tuyến sẽ chạm cả hai vòng tròn |
| Gần nhất | Điểm gần nhất trên bất kỳ đối tượng nào |
| Nút | Đối tượng điểm |
| Điểm chèn | Điểm chèn của văn bản và tham chiếu khối |

Tất cả đều bật mặc định, trừ Tiếp tuyến và Gần nhất. Gần nhất thường thắng khi bạn muốn thứ khác; bật Tiếp tuyến khi bạn cần.

## Chọn bắt điểm

1. Bấm mũi tên nhỏ bên cạnh {{ui:Snap}} trên thanh trạng thái. Danh sách {{ui:Object snaps}} mở ra.
2. Đánh dấu hoặc bỏ đánh dấu các bắt điểm. Thay đổi áp dụng ngay.
3. Bấm mũi tên lần nữa để đóng danh sách.

CadCraft nhớ lựa chọn của bạn, cùng các thiết lập {{ui:Grid}}, {{ui:Ortho}} và {{ui:Snap}}, trong trình duyệt này.

## Các bước

1. Gõ `REC` rồi nhấn {{key:Enter}}.
2. Gõ `0,0` rồi nhấn {{key:Enter}}.
3. Gõ `@4000,3000` rồi nhấn {{key:Enter}}. Một hình chữ nhật xuất hiện.
4. Bấm {{ui:Extents}}.
5. Gõ `L` rồi nhấn {{key:Enter}}.
6. Di con trỏ tới góc dưới bên trái. Dấu ghi "Điểm cuối" xuất hiện. Bấm.
7. Di tới góc trên bên phải cho tới khi "Điểm cuối" hiện ra. Bấm.
8. Nhấn {{key:Enter}} để kết thúc đường thẳng.
9. Nhấn {{key:Enter}} lần nữa để lặp lại {{cmd:LINE}}, và vẽ đường chéo kia từ góc dưới bên phải tới góc trên bên trái theo cách tương tự.
10. Gõ `C` rồi nhấn {{key:Enter}} để bắt đầu một vòng tròn.
11. Di con trỏ tới chỗ hai đường chéo cắt nhau. Dấu ghi "Giao điểm" xuất hiện. Bấm.
12. Gõ `800` rồi nhấn {{key:Enter}}.

Bạn sẽ thấy một vòng tròn có tâm đặt chính xác tại điểm giao nhau.

13. Gõ `L` rồi nhấn {{key:Enter}}.
14. Di tới trung điểm của cạnh trái hình chữ nhật cho tới khi "Trung điểm" hiện ra. Bấm.
15. Di con trỏ lên vòng tròn, ở phía trái của nó. Dấu ghi "Vuông góc" hoặc "Góc phần tư" xuất hiện; ở đây cả hai là cùng một điểm. Bấm.
16. Nhấn {{key:Enter}}.

Đường mới chạy từ trung điểm cạnh trái và dừng chính xác trên vòng tròn.

## Bỏ qua một bắt điểm cho một lần bấm

Giữ {{key:Shift}} khi bạn bấm. Các bắt điểm đối tượng bị bỏ qua cho lần bấm đó, và điểm rơi đúng vào nơi con trỏ chữ thập đang ở (hoặc theo hướng Ortho, nếu Ortho được bật).

## Ortho

{{ui:Ortho}} ({{key:F8}}) giữ điểm kế tiếp thẳng ngang hoặc thẳng đứng từ điểm gốc. Nó áp dụng cho các cú bấm và cho nhập khoảng cách trực tiếp (một số đơn lẻ gõ tại dòng nhắc). Bắt điểm đối tượng thắng Ortho: nếu một dấu bắt hiện ra, cú bấm sẽ đi tới bắt điểm.

## Theo dõi cực

{{ui:Polar}} ({{key:F10}}) là Ortho ở nhiều góc hơn. Khi lệnh có điểm gốc (điểm cuối của đường thẳng, điểm gốc của lệnh di chuyển), con trỏ thẳng hàng bất cứ khi nào nó đến gần một tia từ điểm đó tại một bội số của bước cực: một đường chấm hiện ra, và một nhãn cạnh con trỏ chữ thập ghi `Polar: 1200 < 30°`. Bấm để dùng điểm đó, hoặc gõ khoảng cách: `1200` đi chính xác 1200 dọc theo tia.

Bước là 90° cho đến khi bạn đổi nó: gõ {{cmd:POLARANG}}, nhấn {{key:Enter}}, rồi gõ `30` (hoặc 45, 22.5, 15 …). {{ui:Polar}} và Ortho loại trừ nhau: bật cái này sẽ tắt cái kia.

## Theo dõi bắt điểm đối tượng

{{ui:Track}} ({{key:F11}}) căn con trỏ thẳng hàng với các điểm bắt mà bạn đã đặt con trỏ lên, để bạn chọn một điểm ngang bằng với một góc và phía trên một góc khác mà không cần vẽ đường phụ.

1. Bật {{ui:Snap}} và {{ui:Track}}, rồi bắt đầu một lệnh cần điểm (`L`).
2. Đặt con trỏ lên một điểm bắt, như một góc, trong nửa giây, không bấm. Một dấu chữ thập nhỏ đánh dấu nó: nó đã được lấy. Đặt lên nó lần nữa để bỏ.
3. Di con trỏ thẳng ra khỏi nó, ngang hoặc dọc. Một đường chấm đi theo con trỏ và nhãn ghi `Track: 600 < 90°`. Bấm, hoặc gõ khoảng cách.
4. Lấy một điểm thứ hai, và di đến chỗ đường dọc qua một điểm gặp đường ngang qua điểm kia: con trỏ bắt vào giao điểm đó (`Track: nơi hai đường gặp nhau`).

Khi {{ui:Polar}} cũng được bật, các điểm đã lấy được theo dõi ở mọi góc cực. Tối đa bảy điểm được giữ lại, cho đến khi lệnh kết thúc. {{key:Shift}} tắt theo dõi cho một lần bấm, giống như bắt điểm.

## Lưới

{{ui:Grid}} ({{key:F7}}) hiển thị một lưới đường phía sau bản vẽ, với các đường đậm hơn cứ mỗi năm đường; khoảng cách thay đổi khi bạn thu phóng. Nó chỉ là một hướng dẫn cho đến khi bạn bật {{ui:Grid snap}} ({{key:F9}}): khi đó các cú bấm rơi vào điểm lưới gần nhất, trừ khi một bắt điểm đối tượng lấy điểm đó trước.

## Phím chức năng trên máy tính của bạn

{{key:F9}} là Bắt điểm lưới, {{key:F10}} là Cực và {{key:F11}} là Theo dõi.

:::mac
Trên Mac, F3, F7, F8 và F9 thường điều khiển Mission Control và phát đa phương tiện. Giữ **fn** cùng phím, hoặc bật phím chức năng tiêu chuẩn, như mô tả trong [Phím, chuột và bàn di chuột](common:keys). Các nút trên thanh trạng thái luôn hoạt động.
:::

:::firefox
Trong Firefox, F7 cũng là phím cho duyệt bằng con trỏ văn bản (caret browsing). Nếu Firefox hỏi có bật caret browsing không, chọn **No**. Dùng nút {{ui:Grid}} nếu câu hỏi cứ hiện lại.
:::

:::touch
Trên màn hình cảm ứng không có di chuột, nên dấu bắt điểm chỉ hiện ở nơi ngón tay chạm. Thu phóng sát để nhắm vào mục tiêu nhỏ, hoặc gõ tọa độ thay thế.
:::

## Lỗi thường gặp

- **Cú bấm rơi vào sai điểm.** Nhìn nhãn của dấu trước khi bấm: Điểm cuối thắng Trung điểm khi cả hai đều gần. Thu phóng, hoặc bỏ đánh dấu các bắt điểm bạn không cần.
- **Không có dấu nào hiện.** {{ui:Snap}} đang tắt, hoặc bắt điểm bạn muốn đã bị bỏ đánh dấu, hoặc đối tượng nằm trên một lớp đang tắt hoặc bị đóng băng.
- **Bắt điểm lấy nhầm trong một bản vẽ đông đúc.** Thu phóng. Khoảng cách bắt được đo bằng điểm ảnh trên màn hình, nên thu phóng làm nó nhỏ hơn trên bản vẽ.
- **Mong Shift cho một đường thẳng.** Trong CadCraft, Shift tắt bắt điểm cho một lần bấm. Dùng {{ui:Ortho}} cho đường thẳng.
- **Mong các điểm rơi vào điểm lưới.** Bật {{ui:Grid snap}} ({{key:F9}}), hoặc gõ tọa độ cho các số tròn.
