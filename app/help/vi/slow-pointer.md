---
title: Con trỏ giật hoặc chậm trên bản vẽ
summary: Cần làm gì khi con trỏ chữ thập không chạy mượt theo chuột, trên máy cũ hoặc chậm.
keywords: con trỏ giật, con trỏ chậm, chữ thập chậm, con trỏ giật cục, máy cũ, card đồ họa cũ, đồ họa tích hợp, tăng tốc phần cứng, con trỏ mượt hơn, laptop chậm
from: 39dc9057
---

CadCraft chạy trong trình duyệt (CadCraft Studio cũng là một chế độ xem trên trình duyệt), nên không có thứ gì trong đó được xây dựng cho card đồ họa này hay card khác. Con trỏ chữ thập do ứng dụng vẽ, nghĩa là nó chỉ có thể di chuyển nhanh bằng tốc độ ứng dụng vẽ được một khung hình.

## Để CadCraft giảm các phần phụ

1. Mở {{ui:Cài đặt}} (biểu tượng bánh răng ở góc trên bên phải) và giữ nguyên thẻ {{ui:CadCraft}}.
2. Chọn {{ui:Con trỏ mượt hơn trên máy chậm}}.
3. Chọn {{ui:Bật}}.

Khi bật, con trỏ chữ thập riêng của máy tính được dùng thay cho chữ thập và ô chọn vẽ ra (kể cả chữ thập toàn màn hình), và đối tượng dưới con trỏ sáng lên khi con trỏ đứng yên thay vì khi đang di chuyển. Bắt điểm đối tượng, truy vết và dây cao su vẫn hoạt động như trước.

{{ui:Tự động}} là cách CadCraft khởi động: nó theo dõi thời gian mỗi khung hình khi bạn di chuyển con trỏ, và tự bật chế độ này khi khung hình chậm trong vài giây. Nó thông báo một lần khi làm vậy. {{ui:Tắt}} giữ chữ thập vẽ ra bất kể tốc độ.

## Nếu vẫn chậm

- Kiểm tra tăng tốc phần cứng đã bật trong trình duyệt: mở `chrome://gpu` (hoặc `edge://gpu`) trong thẻ mới. Nếu các dòng đầu ghi "Software only" hoặc "Disabled", trình duyệt đang vẽ mà không dùng card đồ họa. Cập nhật driver card đồ họa thường khắc phục được.
- Đóng các thẻ và chương trình nặng khác, và thử cửa sổ trình duyệt nhỏ hơn.
- Báo cho chúng tôi qua {{ui:Trợ giúp}}, {{ui:Báo cáo sự cố}}: cho biết đang dùng trình duyệt hay CadCraft Studio, phiên bản của nó, và nội dung trang gpu.
