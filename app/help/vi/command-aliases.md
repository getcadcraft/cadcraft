---
title: Sửa bí danh lệnh
summary: Giữ bí danh lệnh của riêng bạn trong một tệp văn bản theo định dạng quen thuộc, nhập và xuất tệp .pgp, và tải lại bằng REINIT.
keywords: bí danh, aliasedit, pgp, phím tắt, tên ngắn, reinit, bàn phím, tùy chỉnh, sửa bí danh
from: 2282d36f
---

## Bạn sẽ học được gì

Cách thêm tên ngắn của riêng bạn cho lệnh, ví dụ `LL` cho {{cmd:LINE}}, tất cả trong một tệp văn bản.

## Thêm bí danh

1. Mở {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Sửa bí danh…}}, hoặc gõ {{cmd:ALIASEDIT}} rồi nhấn {{key:Enter}}.
2. Thêm một dòng gồm bí danh, dấu phẩy và lệnh đặt sau dấu sao:

```
LL,     *LINE
```

3. Nhấp {{ui:Lưu}}. Dòng lệnh cho biết có bao nhiêu bí danh của bạn đang được dùng.
4. Gõ `LL` rồi nhấn {{key:Enter}}: LINE bắt đầu.

Bí danh của bạn nằm trên bí danh có sẵn của CadCraft. Dòng của bạn thắng bí danh có sẵn cùng tên; xóa dòng của bạn đi thì bí danh có sẵn quay lại.

## Dòng CadCraft từ chối

Trình soạn liệt kê từng lỗi kèm số dòng khi bạn gõ:

- lệnh không tồn tại;
- bí danh chính là tên của một lệnh khác (`LINE, *CIRCLE` sẽ che LINE);
- dòng không có dạng `ALIAS, *COMMAND`;
- cùng một bí danh xuất hiện ở hai dòng (dòng sau thắng).

Các dòng khởi chạy một chương trình trên máy tính, như `NOTEPAD, START, 1, *File to edit: ,`, bị bỏ qua và có ghi chú: một ứng dụng trong trình duyệt không thể khởi chạy chương trình.

## Nhập bí danh từ chương trình khác

1. Trong trình soạn bí danh, nhấp {{ui:Nhập .pgp…}} và chọn tệp. Bạn cũng có thể kéo thả tệp `.pgp` lên bản vẽ.
2. Kiểm tra các lỗi được liệt kê (lệnh mà CadCraft không có sẽ bị từ chối, các dòng còn lại vẫn hoạt động).
3. Nhấp {{ui:Lưu}}.

{{ui:Xuất .pgp}} lưu bí danh của CadCraft và bí danh của bạn thành một tệp với cùng định dạng.

## Tải lại tệp

Gõ {{cmd:REINIT}} rồi nhấn {{key:Enter}} để áp dụng lại tệp bí danh. Tệp được giữ trong trình duyệt này; ứng dụng máy tính sẽ giữ tệp trong thư mục riêng, và dịch vụ đám mây sẽ đồng bộ tệp.

## Ký tự cho tùy chọn của lệnh

Bí danh đặt tên cho một lệnh. Để đổi các ký tự dùng để trả lời tùy chọn của lệnh (`P` cho Cực trong {{cmd:ARRAY}}), xem [Đặt ký tự riêng cho tùy chọn lệnh](topic:option-letters).

## Phím tắt cho lệnh bất kỳ

Bí danh là thứ được gõ; phím tắt là một phím. Để gán cho một lệnh phím riêng:

1. Nhấp {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Phím tắt…}}, hoặc gõ `KEYS` rồi nhấn {{key:Enter}}.
2. Nhấp ô {{ui:Phím}} và nhấn các phím, ví dụ {{key:Alt+Shift+C}}.
3. Trong {{ui:Chạy}}, ghi lệnh, và nếu muốn, phần sẽ gõ sau nó: `CIRCLE`, hoặc `ZOOM E`.
4. Nhấp {{ui:Thêm}}.

Một phím cần {{key:Mod}} hoặc {{key:Alt}} kèm một chữ cái hoặc chữ số, hoặc một phím chức năng còn trống ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Các phím mà CadCraft, ứng dụng hoặc trình duyệt đã dùng, và các phím mà nút Công cụ riêng có (xem [Nút của riêng bạn](topic:my-tools)), sẽ bị từ chối, và ô nhập cho biết lý do. Phím tắt được giữ trong trình duyệt này (hoặc ứng dụng máy tính); {{ui:Bỏ chọn}} gỡ bỏ một phím tắt.
