---
title: Đặt phông và cỡ chữ bằng kiểu văn bản
summary: Tạo các kiểu văn bản có tên với phông, chiều cao, chiều rộng và độ nghiêng, đặt một kiểu hiện tại cho văn bản mới, và đổi một kiểu để đổi mọi văn bản dùng nó.
keywords: kiểu văn bản, kiểu, STYLE, ST, TEXTSTYLE, -STYLE, phông, chiều cao chữ, hệ số rộng, độ nghiêng, đổi phông, kiểu chuẩn, áp dụng kiểu, DDSTYLE
from: bd5a4883
---

## Bạn sẽ làm gì

Tạo một kiểu văn bản tên `Notes` với phông và chiều cao riêng, dùng nó cho văn bản mới, rồi sau đó đổi kiểu để mọi ghi chú dùng nó cùng thay đổi một lúc.

## Các bước

1. Gõ {{cmd:STYLE}} (`ST`) và nhấn {{key:Enter}}, hoặc nhấp {{ui:Kiểu văn bản}} trên thanh công cụ {{ui:Vẽ}}. Hộp thoại {{ui:Kiểu văn bản}} liệt kê các kiểu trong bản vẽ. Mọi bản vẽ đều có `Standard`.
2. Nhấp {{ui:Mới…}}, gõ `Notes` làm tên kiểu mới và nhấp {{ui:OK}}. Dòng trạng thái ghi: "Đã tạo kiểu văn bản Notes và đặt làm hiện tại."
3. Trong {{ui:Phông}}, chọn hoặc gõ tên phông. Đặt {{ui:Chiều cao (0 = hỏi mỗi lần)}} thành một số, như `2.5`, để mọi văn bản mới có chiều cao đó. Để `0` nếu muốn được hỏi mỗi lần.
4. Đặt {{ui:Hệ số rộng}} và {{ui:Góc nghiêng (°)}} nếu bạn muốn chữ hẹp hơn, rộng hơn hoặc nghiêng. Dòng mẫu cho thấy kết quả.
5. Nhấp {{ui:Đóng}}. Vẽ văn bản bằng {{cmd:TEXT}} hoặc {{cmd:MTEXT}}: văn bản mới dùng kiểu hiện tại.
6. Để dùng một kiểu đã tạo, mở lại hộp thoại, chọn nó trong danh sách và nhấp {{ui:Đặt làm hiện tại}}.
7. Để áp dụng một kiểu cho văn bản đã vẽ, chọn văn bản, mở hộp thoại, chọn kiểu và nhấp {{ui:Áp dụng cho văn bản đã chọn}}.

## Đổi kiểu sau này

Đổi phông, chiều cao, chiều rộng hoặc độ nghiêng của một kiểu trong hộp thoại thì mọi văn bản dùng nó sẽ theo, trong một bước hoàn tác ({{key:Mod+Z}}). Dòng trạng thái cho biết có bao nhiêu văn bản đã theo.

## Ghi chú

- {{ui:Xóa}} từ chối `Standard`, và một kiểu mà văn bản vẫn đang dùng: đổi văn bản đó sang kiểu khác trước.
- Các kiểu được lưu trong bảng STYLE của bản vẽ, nên tệp DXF và DWG giữ được chúng.
- Trên dòng lệnh, `-STYLE` làm việc tương tự với các tùy chọn (Current, New, Font, Height, Width, Oblique, Delete, List).
- Phông không có trên máy tính đọc bản vẽ sẽ được hiển thị bằng một kiểu chữ khác.
