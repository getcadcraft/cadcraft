---
title: Đổi cỡ chữ kích thước
summary: Làm chữ kích thước lớn hơn hoặc nhỏ hơn, cho các kích thước bạn vẽ tiếp theo và cho các kích thước đã có trong bản vẽ.
keywords: cỡ chữ kích thước, chiều cao chữ, dimtxt, dimscale, chữ kích thước quá nhỏ, chữ kích thước quá lớn, chữ kích thước lớn hơn, tỷ lệ ghi chú
from: 30e40633
---

## Cho các kích thước bạn vẽ tiếp theo

1. Nhấn {{key:Esc}} để không có gì được chọn: bảng bên phải hiển thị {{ui:Cài đặt hiện tại}}.
2. Cuộn bảng xuống đến {{ui:Kích thước mới}}. Gõ chiều cao bạn muốn trên giấy trong {{ui:Chiều cao văn bản}} (ví dụ `2.5` cho 2.5 mm, hoặc `3/32"`) và nhấn {{key:Enter}}.
3. Đặt {{ui:Tỷ lệ chung}} thành tỷ lệ in (`50` cho 1:50, `48` cho 1/4" = 1'-0"): mọi kích thước đều được nhân với nó.

Trên dòng lệnh, {{cmd:DIMTXT}} đặt chiều cao và {{cmd:DIMSCALE}} đặt tỷ lệ chung.

## Cho các kích thước đã có trong bản vẽ

1. Chọn các kích thước (một hoặc nhiều: chọn {{ui:Kích thước}} trong danh sách ở đầu Thuộc tính).
2. Gõ {{ui:Chiều cao văn bản}} mới (trong phần {{ui:Văn bản}}), hoặc {{ui:Tỷ lệ chung}} mới (trong phần {{ui:Vừa}} ở phía dưới hơn), rồi nhấn {{key:Enter}}.

Chúng được vẽ lại ngay, trong một bước hoàn tác. Một kích thước từ tệp của chương trình khác sẽ được vẽ lại theo kiểu của CadCraft ngay khi bạn thay đổi nó.

:::tip
Chữ đúng trên màn hình nhưng quá nhỏ trên tờ in thường là do tỷ lệ chung đang bằng 1: hãy đặt nó bằng tỷ lệ của tờ.
:::

Xem [Đặt kích thước, số thập phân và tỷ lệ](topic:dimension-settings) để biết mọi cài đặt.
