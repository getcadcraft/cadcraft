---
title: Sửa bí danh lệnh
summary: Giữ bí danh lệnh của riêng bạn trong một tệp văn bản theo định dạng quen thuộc, nhập và xuất tệp .pgp, và tải lại bằng REINIT.
keywords: bí danh, aliases, aliasedit, pgp, phím tắt, tên ngắn, reinit, bàn phím, tùy chỉnh, sửa bí danh
from: 6ab6fa0e
---

## Bạn sẽ học được gì

Cách thêm tên ngắn của riêng cho lệnh, ví dụ `LL` cho {{cmd:LINE}}, tất cả trong một tệp văn bản.

## Thêm một bí danh

1. Mở {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Sửa bí danh…}}, hoặc gõ {{cmd:ALIASEDIT}} rồi nhấn {{key:Enter}}.
2. Thêm một dòng gồm bí danh, dấu phẩy và lệnh sau dấu sao:

```
LL,     *LINE
```

3. Bấm {{ui:Lưu}}. Dòng lệnh cho biết có bao nhiêu bí danh của bạn đang được dùng.
4. Gõ `LL` rồi nhấn {{key:Enter}}: LINE bắt đầu.

Bí danh của bạn nằm trên bí danh có sẵn của CadCraft. Một dòng của bạn thắng bí danh có sẵn cùng tên; xóa dòng đó đi và bí danh có sẵn trở lại.

## Các dòng CadCraft từ chối

Trình sửa liệt kê từng lỗi kèm số dòng khi bạn gõ:

- lệnh không tồn tại;
- bí danh chính là tên một lệnh (`LINE, *CIRCLE` sẽ che LINE);
- dòng không phải dạng `ALIAS, *COMMAND`;
- cùng một bí danh có trên hai dòng (dòng sau thắng).

Các dòng khởi chạy một chương trình trên máy tính của bạn, như `NOTEPAD, START, 1, *File to edit: ,`, bị bỏ qua kèm một ghi chú: một ứng dụng trong trình duyệt không thể khởi chạy chương trình.

## Nhập bí danh từ chương trình khác

1. Trong trình sửa bí danh, bấm {{ui:Nhập .pgp…}} và chọn tệp. Bạn cũng có thể kéo thả một tệp `.pgp` vào bản vẽ.
2. Kiểm tra các lỗi được liệt kê (lệnh mà CadCraft không có sẽ bị từ chối, các dòng còn lại vẫn hoạt động).
3. Bấm {{ui:Lưu}}.

{{ui:Xuất .pgp}} lưu bí danh của CadCraft và của bạn thành một tệp duy nhất theo cùng định dạng.

## Tải lại tệp

Gõ {{cmd:REINIT}} và nhấn {{key:Enter}} để áp dụng lại tệp bí danh của bạn. Tệp được giữ trong trình duyệt này; ứng dụng máy tính sẽ giữ nó trong thư mục riêng, và dịch vụ đám mây sẽ đồng bộ nó.

## Phím tắt cho mọi lệnh

Bí danh được gõ; phím tắt là một phím. Để gán một phím cho lệnh:

1. Bấm {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Phím tắt…}}, hoặc gõ `KEYS` rồi nhấn {{key:Enter}}.
2. Bấm ô {{ui:Phím}} và nhấn các phím, ví dụ {{key:Alt+Shift+C}}.
3. Trong {{ui:Chạy}}, ghi lệnh, và nếu muốn, những gì gõ sau nó: `CIRCLE`, hoặc `ZOOM E`.
4. Bấm {{ui:Thêm}}.

Một phím cần {{key:Mod}} hoặc {{key:Alt}} với một chữ cái hoặc chữ số, hoặc một phím chức năng còn trống ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Các phím mà CadCraft, ứng dụng hoặc trình duyệt đã dùng, và các phím mà nút Công cụ của riêng bạn có (xem [Nút của riêng bạn](topic:my-tools)), sẽ bị từ chối, và hộp thoại nói lý do. Phím tắt được giữ trong trình duyệt này (hoặc ứng dụng máy tính); {{ui:Bỏ chọn}} sẽ gỡ một phím tắt đi.
