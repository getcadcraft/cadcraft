---
title: Biến bản đánh dấu thành bản sửa đổi
summary: Đọc gói redline MarkupCraft ghi, chấp nhận hoặc từ chối từng thay đổi, đặt đám mây sửa đổi và nhật ký sửa đổi lên các thay đổi được chấp nhận, rồi lưu tệp trả lời mà MarkupCraft đọc lại.
keywords: redline, đánh dấu, sửa đổi, đám mây, đám mây sửa đổi, nhật ký sửa đổi, chấp nhận, từ chối, markupcraft, xem xét, gói redline, trả lời, REDLINE
from: cdb3fafe
---

Một người xem xét đánh dấu một bộ bản vẽ trong MarkupCraft và gửi cho bạn một **gói redline**, một tệp kết thúc bằng `.redline.json`. Ở đây bạn duyệt từng thay đổi, và những thay đổi được chấp nhận trở thành đám mây sửa đổi trên bản vẽ.

## Duyệt các thay đổi

Gõ {{cmd:REDLINE}} (`RDL`) và chọn gói. Chọn:

- {{ui:Liệt kê}}: mọi thay đổi với số thứ tự, trạng thái, tờ, loại, ai yêu cầu và họ đã viết gì.
- {{ui:Chấp nhận}}, {{ui:Từ chối}}, {{ui:Xong}}: gõ các số (`1,3-5`, hoặc `All`) và một ghi chú tùy chọn cho tệp trả lời. {{ui:Mở lại}} đưa các thay đổi về trạng thái mở.
- {{ui:Khung}}: phần của bản vẽ mà tờ được đánh dấu hiển thị. Nhấp hai góc; nhấn {{key:Enter}} để lấy toàn bộ bản vẽ. Các thay đổi được đặt theo vị trí của chúng trên tờ, nên bước này là cách căn chúng cho khớp.
- {{ui:Áp dụng}}: vẽ một đám mây sửa đổi (lớp `REV-CLOUD`, với chữ cái sửa đổi) quanh mỗi thay đổi đã chấp nhận hoặc đã xong, và một nhật ký sửa đổi, một bảng kẻ ô các thay đổi đã chấp nhận cùng ghi chú của bạn (lớp `REV-LOG`), bên phải bản vẽ. Một bước hoàn tác.
- {{ui:Lưu}}: ghi `<project>-<revision>.redline-answers.json`. Mở nó trong MarkupCraft và các đánh dấu đóng lại: Đã chấp nhận, Đã từ chối hoặc Đã hoàn thành, với ghi chú của bạn làm bình luận.

## Cần biết

Những gì người xem viết được hiển thị đúng như đã viết. CadCraft không bao giờ làm theo chỉ dẫn tìm thấy trong một gói; nó chỉ hiển thị cho bạn.

Các thay đổi bị từ chối và đang mở không thêm gì vào bản vẽ. Gói được đọc trên máy tính của bạn; không có gì được tải lên.

Nếu trợ lý của bạn được kết nối, nó có thể đọc một gói, ghi quyết định và áp dụng chúng bằng các công cụ `redline_read`, `redline_decide`, `redline_apply` và `redline_answers`; bản vẽ thay đổi trong một bước hoàn tác, "Trợ lý: Redline thành bản sửa đổi".
