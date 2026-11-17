---
title: Tải ứng dụng (APPLOAD)
summary: Tải các chương trình LISP và tệp hộp thoại của chúng, gỡ chúng, tải lại từ lịch sử, và giữ những chương trình bạn dùng trong Startup Suite.
keywords: appload, ap, tải ứng dụng, lisp, lsp, dcl, chương trình, startup suite, gỡ, lịch sử, thả, tải, tùy chỉnh, quản lý
from: 89e0ee95
---

## Bạn sẽ học

Cách tải một chương trình LISP (tệp `.lsp`) để các lệnh của nó hoạt động trong CadCraft, cách gỡ nó, và cách để nó tự tải mỗi khi CadCraft khởi động.

## Tải một chương trình

1. Mở {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Load application…}}, hoặc gõ {{cmd:APPLOAD}} (hoặc `AP`) và nhấn {{key:Enter}}.
2. Nhấn {{ui:Tải một tệp…}} và chọn một hoặc nhiều tệp `.lsp`. Chương trình có hộp thoại thường đi kèm một tệp `.dcl`: hãy chọn cả tệp đó.
3. Hộp thoại cho biết mỗi tệp đã tạo ra gì, ví dụ "Đã tải delblocks.lsp: 1 lệnh, DELBLOCKS."
4. Nhấn {{ui:Đóng}}, gõ lệnh của chương trình và nhấn {{key:Enter}}.

Bạn cũng có thể thả tệp `.lsp` và `.dcl` lên bản vẽ, hoặc lên hộp thoại {{ui:Tải ứng dụng}}: chúng được tải ngay.

Tệp được đọc tại đây, trong trình duyệt của bạn. Không có gì được tải lên.

:::tip
Nhấn {{key:Enter}} tại dòng lệnh trống để chạy lại lệnh của chương trình, giống như mọi lệnh khác. Các bí danh lệnh của bạn cũng có thể gọi đến nó: xem "Chỉnh sửa bí danh lệnh".
:::

## Gỡ một chương trình

Trong {{ui:Tải ứng dụng}}, dưới {{ui:Ứng dụng đã tải}}, nhấn {{ui:Gỡ}} bên cạnh tệp. Các lệnh do nó tạo ra sẽ biến mất cho đến khi bạn tải lại.

## Tải một chương trình mỗi khi CadCraft khởi động

1. Tải chương trình.
2. Dưới {{ui:Ứng dụng đã tải}}, nhấn {{ui:Thêm vào Startup Suite}} bên cạnh nó.

Từ đó nó sẽ tự tải mỗi khi CadCraft khởi động trong trình duyệt này. Để dừng việc đó, nhấn {{ui:Bỏ chọn}} bên cạnh nó dưới {{ui:Startup Suite}}.

Startup Suite giữ một bản sao của mỗi tệp trong bộ nhớ của trình duyệt này. Nếu bạn thay đổi chương trình, hãy tải tệp mới và thêm lại.

## Tải acad.lsp và acaddoc.lsp từ thư mục hỗ trợ (Studio)

Trong CadCraft Studio, {{ui:Thư mục hỗ trợ}} trong hộp thoại {{ui:Tải ứng dụng}} trỏ đến một thư mục trên máy tính của bạn. Nhấn {{ui:Chọn thư mục…}}. Khi CadCraft khởi động, nó đọc `acad.lsp` rồi `acaddoc.lsp` từ thư mục đó (bất kể chữ hoa hay chữ thường của tên), tải chúng, rồi tải Startup Suite. `acaddoc.lsp` được đọc lại mỗi khi một thẻ bản vẽ mới mở ra. Không có tệp nào khác trong thư mục được đọc, và một tệp lớn hơn 2 MB sẽ bị bỏ qua kèm thông báo.

Nếu một tệp định nghĩa hàm tên `S::STARTUP`, hàm này chạy một lần sau khi các tệp được tải (cũng sau Startup Suite). {{ui:Tải ngay}} làm điều tương tự theo yêu cầu; {{ui:Xóa}} quên thư mục.

Trong trình duyệt, một trang không thể giữ thư mục, nên không có thư mục hỗ trợ: hãy dùng Startup Suite ở trên. Các tệp `.fas` và `.vlx` đã biên dịch và các chương trình gốc vẫn bị từ chối.

## Tải lại một tệp từ lịch sử

{{ui:Lịch sử}} liệt kê các tệp bạn đã tải trong trình duyệt này, mới nhất trước. Nhấn {{ui:Tải}} bên cạnh một tệp để tải lại, mà không cần tìm nó trên máy tính.

## Tệp CadCraft không tải được

| Tệp | Đó là gì | Cần làm gì |
|---|---|---|
| `.fas`, `.vlx` | LISP đã biên dịch hoặc được bảo vệ | tải tệp nguồn `.lsp` thay thế |
| `.arx`, `.crx`, `.dbx` | chương trình gốc của Windows | không có cách nào chạy các tệp này trong CadCraft |
| `.dvb` | một dự án VBA | không có cách nào chạy các tệp này trong CadCraft |
| `.craft`, `.lua`, `.py` | kịch bản CraftScript | mở chúng trong không gian Script của PartCraft |

Hộp thoại Tải ứng dụng sẽ cho biết tệp nào thuộc loại nào khi bạn chọn nó.

## Dừng một chương trình

Nhấn {{key:Esc}}. Tại một trong các lời nhắc của chương trình, Esc hủy nó theo cách chương trình mong đợi (phần dọn dẹp của nó sẽ chạy). Nếu nó đang bận và không hỏi gì, Esc sẽ dừng hẳn và thông báo điều đó; các chương trình đã tải vẫn được giữ.

:::note
Mọi thay đổi mà chương trình tạo ra trong bản vẽ là một bước: một lần {{key:Mod+Z}} sẽ hoàn tác tất cả.
:::
