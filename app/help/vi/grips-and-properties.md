---
title: Chỉnh sửa bằng grip và Thuộc tính
summary: Kéo giãn, di chuyển và đổi kích thước đối tượng bằng grip của chúng, và gõ chiều dài, bán kính, góc và tọa độ chính xác trong bảng Thuộc tính.
keywords: grip, thuộc tính, kéo giãn, chiều dài, bán kính, tọa độ, chỉnh sửa, thuộc tính nhanh, bảng thuộc tính, thay đổi, lớp, màu sắc
from: f22541ba
---

## Bạn sẽ học được gì

Hai cách nhanh để thay đổi một đối tượng mà không cần lệnh: kéo các **grip** của nó, hoặc gõ giá trị mới trong bảng **Thuộc tính** ở bên phải.

## Grip

Khi bạn chọn các đối tượng (tối đa 200 cái một lúc) mà không có lệnh nào đang chạy, các ô vuông nhỏ hiện trên chúng. Đó là các grip:

| Đối tượng | Grip |
|---|---|
| Đường thẳng | Hai đầu, và điểm giữa (di chuyển cả đường thẳng) |
| Vòng tròn | Tâm (di chuyển) và bốn điểm trên đường tròn (đổi bán kính) |
| Cung tròn | Tâm, và hai đầu (đổi nơi bắt đầu và kết thúc) |
| Đa tuyến | Mọi đỉnh |
| Văn bản, điểm, tham chiếu khối | Điểm chèn |
| Elip | Tâm |
| Kích thước | Các điểm xác định và vị trí đường kích thước |
| Khung nhìn (viewport) | Tâm (di chuyển) và bốn góc (đổi kích thước) |

### Di chuyển một grip

1. Vẽ một đường thẳng rồi nhấp vào nó. Ba grip hiện ra.
2. Nhấp vào grip ở một đầu. Thanh trạng thái hiện: "Nhấp vào nơi grip này sẽ đến (Esc để hủy). Bắt điểm và Ortho vẫn áp dụng."
3. Di chuyển con trỏ chữ thập. Một bản xem trước đi theo.
4. Nhấp vào vị trí mới, hoặc bắt điểm vào một điểm trên đối tượng khác rồi nhấp.

Đầu đó di chuyển, phần còn lại của đường thẳng giữ nguyên. Bạn cũng có thể nhấn vào một grip rồi kéo, và thả ở nơi cần đến.

:::note
Bạn không thể gõ tọa độ cho một grip. Để có vị trí chính xác, hãy bắt điểm vào một điểm, hoặc gõ giá trị trong Thuộc tính.
:::

Nhấn {{key:Esc}} hoặc nhấp chuột phải để hủy việc di chuyển grip.

## Thuộc tính

Bảng bên phải hiển thị thuộc tính của những gì đang được chọn.

1. Nhấp vào một đường thẳng. Tiêu đề bảng ghi "Đường thẳng".
2. Nhấp vào {{ui:Chiều dài}}, gõ `2500` và nhấn {{key:Enter}}.

Đường thẳng giờ dài đúng 2500, giữ nguyên điểm đầu và góc. {{key:Enter}} hoặc nhấp chỗ khác sẽ áp dụng giá trị; {{key:Esc}} đặt lại giá trị cũ. Mỗi thay đổi là một bước hoàn tác, kể cả khi nhiều đối tượng cùng thay đổi.

Các ô nhận biểu thức (`=2*45`) và chiều dài có đơn vị (`3'6"`, `900mm`), mỗi điểm có X, Y và Z, và có thể đổi nhiều đối tượng cùng lúc. Toàn bộ nội dung này nằm trong [Bảng Thuộc tính](topic:properties-panel).

## Những lỗi thường gặp

- **Không thấy grip nào.** Một lệnh đang chạy (nhấn {{key:Esc}}), hoặc chọn hơn 200 đối tượng, hoặc đối tượng nằm trên một lớp bị khóa.
- **Grip đến sai chỗ.** Một điểm bắt đã bắt trúng. Giữ {{key:Shift}} khi nhấp để bỏ qua các điểm bắt.
- **Gõ trong Thuộc tính mà không có gì xảy ra.** Nhấn {{key:Enter}} hoặc nhấp chỗ khác để áp dụng. Giá trị không hợp lệ (chiều dài hoặc bán kính bằng 0 hoặc âm, văn bản không phải là một giá trị) sẽ làm ô nhập chuyển sang màu đỏ và ghi rõ lý do.
- **Chữ gõ đi vào một ô của Thuộc tính.** Khi một ô có con trỏ, các phím gõ vào đó. Nhấn {{key:Enter}} hoặc {{key:Esc}}, rồi gõ lệnh.
