---
title: Ghi đè lớp của khung nhìn
summary: Trên một tờ, ẩn một lớp hoặc đổi cho nó màu, độ dày nét hoặc tô khác chỉ trong một khung nhìn; mô hình và các khung nhìn khác giữ nguyên.
keywords: khung nhìn, ghi đè lớp (class), ghi đè khung nhìn, ẩn lớp trong khung nhìn, tờ, bố cục, VPLAYER, in, Vectorworks
from: c1a2b51f
---

Một tờ thường hiển thị cùng một mô hình hơn một lần: một mặt bằng có nội thất và một mặt bằng không có, hoặc một bản vẽ chiếu sáng nơi chỉ có đèn được tô màu. Ghi đè lớp của khung nhìn thay đổi cách một [lớp](topic:classes) hiển thị **chỉ trong khung nhìn đó**.

1. Mở tờ và chọn một khung nhìn.
2. Mở bảng Lớp (`CLASSES`) và chọn lớp.
3. Dưới {{ui:Khung nhìn này}}, đánh dấu {{ui:Ẩn trong khung nhìn này}}, hoặc đặt {{ui:Màu ở đây}}, {{ui:Độ dày nét ở đây}} hoặc {{ui:Tô ở đây}}.

Danh sách bên dưới hiển thị mọi lớp mà khung nhìn này thay đổi. {{ui:Xóa các ghi đè của khung nhìn này}} gỡ bỏ tất cả. Mỗi thay đổi là một bước hoàn tác.

## Ghi đè thay đổi những gì

- **Ẩn** ẩn lớp và mọi lớp nằm dưới nó trong khung nhìn này.
- **Màu, độ dày nét và tô** thay đổi các đối tượng của lớp mà giá trị không được đặt trên chính đối tượng, tức là các đối tượng lấy giá trị theo lớp (class) hoặc theo layer. Một đối tượng có màu riêng sẽ giữ màu đó, như với ghi đè lớp của khung nhìn.

Ghi đè hiển thị trên màn hình và trong bản in và PDF, kể cả một bộ tờ được xuất ra PDF. Chúng hoạt động cùng với các lớp đóng băng của khung nhìn và các ghi đè lớp của khung nhìn.

Ghi đè được lưu cùng bản vẽ trong DWG và DXF (cùng danh sách lớp, trong khối `CADCRAFT_CLASSES`) và quay lại đúng khung nhìn đó khi tệp được mở trong CadCraft.
