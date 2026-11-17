---
title: Kiểm tra bản vẽ đang dùng đơn vị nào
summary: Xem bản vẽ đã mở là milimét, inch hay đơn vị khác, kiểm tra bằng cách đo, và hiểu vì sao một chương trình khác có thể báo đơn vị khác cho cùng một tệp DXF.
keywords: đơn vị, đơn vị nào, kiểm tra đơn vị, milimét, mm, inch, hệ mét, hệ inch, đơn vị DXF, STEP sang DXF, sai đơn vị, inch hay mm, INSUNITS, MEASUREMENT, đơn vị bản vẽ, PartCraft DXF
from: c0ee75bb
---

## Bạn sẽ làm gì

Tìm xem một đơn vị trong bản vẽ đã mở tương ứng với gì, và bảo đảm các số bạn đọc có đúng kích thước bạn mong đợi.

## Các bước

1. Mở bản vẽ, rồi nhấn {{key:Esc}} để không chọn gì, trên thẻ {{ui:Mô hình}}.
2. Trong bảng bên phải, dưới {{ui:Cài đặt hiện tại}}, đọc {{ui:Đơn vị}}. Mục này cho biết một đơn vị bản vẽ tương ứng với gì: {{ui:Milimét}}, {{ui:Inch}}, {{ui:Feet}} và các đơn vị khác. Tệp DXF lưu từ PartCraft ghi {{ui:Milimét}}.
3. Kiểm tra bằng cách đo một thứ bạn biết kích thước. Gõ {{cmd:DIST}} rồi chọn hai đầu của một cạnh hoặc một lỗ. Nếu một chi tiết bạn biết dài 25 mm đọc được `25`, bản vẽ dùng milimét; nếu đọc khoảng `0.98`, bản vẽ dùng inch.

{{ui:Không có đơn vị}} nghĩa là tệp không ghi rõ. Khi đó CadCraft coi đó là đơn vị của khổ giấy (milimét với giấy ISO, inch với giấy US), và các số chỉ đúng khi chương trình đã ghi chúng làm đúng.

## Nếu đơn vị sai

Đổi {{ui:Đơn vị}} **không thay đổi kích thước**: các số giữ nguyên, chỉ thay đổi ý nghĩa của chúng. Vì vậy chỉ đặt nó để nói đúng bản vẽ thực tế là gì. Nếu các số là milimét mà {{ui:Đơn vị}} ghi {{ui:Inch}}, hãy chọn {{ui:Milimét}}. Nếu bạn cần chính hình học ở đơn vị khác, hãy đổi tỷ lệ bằng {{cmd:SCALE}} (25.4 từ inch sang milimét, 1/25.4 theo chiều ngược lại) rồi đặt {{ui:Đơn vị}}.

Cách ghi độ dài (thập phân, feet và inch, phân số) là một cài đặt riêng, {{ui:Định dạng độ dài}}: xem [Đơn vị, khổ giấy và tỷ lệ](topic:units-papers-scales).

## Vì sao chương trình khác có thể báo inch

DXF khai báo đơn vị trong phần đầu (header) của nó. Loại DXF cũ nhất, R12, không có biến đơn vị nào, nên một chương trình đọc R12 nghiêm ngặt sẽ bỏ qua thứ được ghi ở đó và dùng mặc định riêng, thường là inch. Hình học trong tệp vẫn như cũ bất kể thế nào: chỉ nhãn là khác. PartCraft ghi tệp DXF ở dạng R12 và khai báo milimét theo hai cách (`$INSUNITS` 4 và `$MEASUREMENT` 1) để nhiều chương trình đọc đúng hơn. Nếu một chương trình vẫn báo inch, hãy đặt đơn vị của nó là milimét khi mở tệp.

Đưa một tệp vào bản vẽ (thay vì mở nó) sẽ chuyển đổi đơn vị của nó: xem [Đơn vị khi nhập](topic:units-on-import).
