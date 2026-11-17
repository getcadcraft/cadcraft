---
title: Tự động bố trí tờ
summary: Đặt các phần của bản vẽ lên tờ một cách tự động, CadCraft chọn khổ giấy và tỷ lệ chuẩn vừa vặn, đặt từng phần kèm khung tên và tỷ lệ bên dưới, và mọi thứ vẫn có thể chỉnh sửa.
keywords: tờ, bố cục, layout, giấy, tỷ lệ, tự động, AUTOSHEET, khung tên, khung nhìn, viewport, khung nhìn đặt tên
from: 7f315dff
---

Chọn **Khung nhìn › Thêm › Tự động bố trí tờ** (hoặc gõ {{cmd:AUTOSHEET}}). CadCraft tìm các phần của bản vẽ (các khung nhìn đặt tên của bạn, hoặc các cụm riêng biệt của mô hình), chọn khổ giấy và tỷ lệ chuẩn để các phần vừa vặn, rồi đặt chúng lên các tờ mới với khung tên, chú thích và tỷ lệ bên dưới mỗi phần.

Trước khi chạy, bạn có thể thay đổi cách nó hoạt động: **Phần** (khung nhìn đặt tên, cụm, toàn bộ bản vẽ, hoặc để nó tự quyết định), **Giấy** (tự động hoặc một khổ như `iso-a1`), **Tỷ lệ** (một tỷ lệ cho tất cả, hoặc mỗi phần một tỷ lệ riêng) và **Tờ** (mỗi tờ có bao nhiêu phần).

Các tờ là tờ thông thường: di chuyển khung nhìn, đổi tỷ lệ hoặc xóa tờ như bình thường. Nhấn {{key:Ctrl+Z}} một lần để hoàn tác toàn bộ các tờ mới.

## Chú giải số

Trong {{cmd:AUTOSHEET}}, chọn **Chú giải số** để thêm một bảng chú giải có đánh số bên dưới các khung nhìn của mỗi tờ. Bảng liệt kê các lớp được vẽ trong những khung nhìn đó, mỗi lớp một dòng có số, dưới dạng văn bản thuần mà bạn có thể sửa như mọi văn bản khác. Chọn **Tệp** để đọc danh sách chú giải số của riêng bạn (mỗi dòng gồm một số và các từ của nó, phân cách bằng tab, dấu phẩy hoặc dấu chấm phẩy): lớp có tên khớp với một số trong danh sách sẽ nhận các từ đó. Ứng dụng không đi kèm danh sách chú giải nào.
