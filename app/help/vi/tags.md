---
title: Thẻ: thuộc tính đưa vào bảng thống kê
summary: Định nghĩa một thẻ (loại, các giá trị được phép, các khối áp dụng), đặt nó lên các tham chiếu khối, và liệt kê các tham chiếu thành một bảng thống kê bạn có thể lưu dưới dạng CSV.
keywords: thẻ, tag, thuộc tính, bảng thống kê, trích xuất dữ liệu, thuộc tính, xếp hạng chống cháy, danh sách chọn, tham chiếu khối, TAGS, csv
from: 9b90bacc
---

Một **thẻ** là một thuộc tính khối có định nghĩa: nó giữ loại giá trị nào, những giá trị nào được phép, và áp dụng cho khối nào. Các giá trị là thuộc tính khối thông thường, nên mọi chương trình khác đều đọc được và {{cmd:ATTEDIT}} hiển thị chúng. Chỉ phần định nghĩa là mới, và chúng được giữ trong bản vẽ.

## Định nghĩa và đặt

Gõ {{cmd:TAGS}} và chọn:

- {{ui:Định nghĩa}}: một tên (chữ cái, chữ số, khoảng trắng, `_ . -`), một loại (`text`, `number`, `integer`, `yesno`, `length`, `angle`), các giá trị được phép ngăn cách bằng `;` (để trống nếu tùy ý), và tên các khối nó áp dụng (`DOOR*` khớp mọi khối bắt đầu bằng DOOR; để trống nghĩa là mọi khối).
- {{ui:Bộ}}: với các tham chiếu khối đã chọn, gõ `FireRating=60 min; Width=850`. Một giá trị nằm ngoài danh sách cho phép, hoặc không phải số với thẻ số, sẽ bị từ chối và được thông báo. Một bước hoàn tác. Khối không có thuộc tính đó sẽ nhận nó như một thuộc tính ẩn.
- {{ui:Bảng thống kê}}: mọi tham chiếu đến một khối mà thẻ áp dụng, tùy chọn nhóm theo thẻ hoặc theo tên khối, được in và lưu dưới dạng CSV.
- {{ui:Bỏ chọn}}: xóa một định nghĩa; các giá trị vẫn nằm trên các tham chiếu.

Đổi tên một thẻ sẽ đổi tên các giá trị của nó trên mọi tham chiếu. Tên thẻ không phân biệt chữ hoa chữ thường, cũng như tên thuộc tính.
