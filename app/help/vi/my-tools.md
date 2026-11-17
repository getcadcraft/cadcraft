---
title: Nút của riêng bạn (Công cụ của tôi)
summary: Thêm nút thanh công cụ chạy macro của riêng bạn, gán phím tắt, chia sẻ dưới dạng tệp, và đưa các nút từ tệp tùy chỉnh CUIx sang.
keywords: công cụ của tôi, nút tùy chỉnh, nút thanh công cụ, macro, macros, cui, cuix, tùy chỉnh, menu, phím tắt, diesel, ^c^c, nhập nút, xuất nút
from: 36618802
---

## Bạn sẽ học gì

Cách đặt nút của riêng bạn lên thanh công cụ, mỗi nút chạy một macro viết theo cách AutoCAD viết, cách gán một phím cho nút, và cách đưa các nút của tệp CUIx sang.

## Thêm một nút

1. Mở {{ui:Settings}} ({{key:Mod+,}}) và giữ ở thẻ {{ui:CadCraft}}. Cuộn đến {{ui:My tools}}.
2. Nhấp {{ui:Add a button…}}.
3. Điền vào hộp:
   - {{ui:Group}}: nhóm thanh công cụ mà nút sẽ thuộc về, ví dụ `Công cụ của tôi`. Tên mới sẽ tạo một nhóm mới.
   - {{ui:Label}}: chữ hiển thị trên nút.
   - {{ui:Macro}}: nội dung nút sẽ gõ, ví dụ `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Shortcut key}}: nhấp vào ô rồi nhấn các phím, ví dụ {{key:Ctrl+Alt+B}}.
   - {{ui:Icon}}: một ảnh PNG hoặc SVG tối đa 64 KB, hoặc không có (khi đó hiện hình ngôi sao).
4. Nhấp {{ui:Save}}.

Nút xuất hiện ở cuối thanh công cụ, trong nhóm của nó. Nhấp vào nó, hoặc nhấn phím của nó, để chạy. {{ui:Edit}} và {{ui:Delete}} trong danh sách sẽ đổi hoặc gỡ nút.

## Viết macro

Macro là những gì bạn sẽ gõ ở dòng lệnh, với vài ký hiệu:

| Ký hiệu | Nghĩa |
|---|---|
| `^C` | Hủy bất cứ thứ gì đang chạy (`^C^C` là cách bắt đầu thường dùng) |
| `;` hoặc dấu cách | {{key:Enter}} |
| `\` | Chờ bạn: một cú nhấp hoặc một câu trả lời gõ vào, rồi macro tiếp tục |
| `_` hoặc `.` trước lệnh | Được chấp nhận và bỏ qua (tên quốc tế và tên có sẵn) |
| `*` ở ngay đầu | Chạy lại mỗi khi kết thúc, cho đến khi bạn nhấn {{key:Esc}} |
| `^O`, `^G` | Bật hoặc tắt Ortho, lưới |
| `$M=` | Phần còn lại là DIESEL. Chỉ có `$(if,…)`, `$(getvar,…)`, `$(=,…)` và `$(eq,…)` được đọc; nút nào dùng thứ khác sẽ báo và không làm gì |

Ví dụ:

- `^C^C_line;0,0;@100,0;;` vẽ một đường thẳng dài 100 từ gốc tọa độ.
- `^C^C_circle;\25;` yêu cầu bạn chỉ tâm, rồi vẽ một đường tròn bán kính 25 tại đó.
- `^C^C_turnright` xoay khung nhìn 90° sang phải.

## Phím tắt

Một phím cần {{key:Mod}} (Ctrl, hoặc Cmd trên Mac) hoặc {{key:Alt}} kèm một chữ cái hoặc chữ số, hoặc một trong các phím chức năng còn trống {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Chữ cái đứng riêng sẽ đi vào dòng lệnh. Các phím mà CadCraft, ứng dụng hoặc trình duyệt đã dùng (như {{key:Ctrl+S}} hay {{key:Ctrl+Z}}) và các phím mà nút khác đang dùng sẽ bị từ chối, và hộp sẽ cho biết lý do.

## Chia sẻ nút của bạn

- {{ui:Export…}} lưu mọi nhóm và nút (kèm biểu tượng và phím) thành `my-tools.json`.
- {{ui:Import…}} thêm các nhóm của tệp như vậy vào sau nhóm của bạn. Tên nhóm bạn đã dùng sẽ có thêm "(2)"; phím bị trùng sẽ bị bỏ đi, và bảng sẽ báo cho bạn.

## Đưa nút từ tệp CUIx

1. Nhấp {{ui:Import CUIx…}} và chọn tệp `.cuix`.

Các thanh công cụ và bảng dải lệnh của tệp trở thành nhóm, mỗi nút có macro và hình ảnh của nó (PNG, hoặc BMP được chuyển thành PNG). Các phím tắt của tệp nằm trong một nhóm riêng, mỗi nút có phím của nó; các bí danh lệnh mà tệp có thể chứa nằm trong nhóm {{ui:Aliases}}. Bảng sẽ liệt kê những gì đã được đưa sang.

:::note
Tệp chỉ được đọc. Các lệnh mà CadCraft không có được liệt kê theo tên, không đoán mò: nút của chúng sẽ báo khi được nhấp. DIESEL ngoài vài hàm nêu trên, menu, nút chuột và không gian làm việc đều không được đọc.
:::

## Điều nên biết

- Nút được lưu trong trình duyệt này (hoặc ứng dụng máy tính này), không nằm trong bản vẽ.
- Nút chạy qua dòng lệnh, nên được hoàn tác như bất kỳ thứ gì bạn gõ: mỗi lệnh nút chạy cần một {{key:Mod+Z}}.
