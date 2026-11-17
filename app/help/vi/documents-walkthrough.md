---
title: Tài liệu và các lần sửa đổi (kho lưu trữ)
summary: Hướng dẫn từng bước một công việc thực: đưa thư mục dự án vào kiểm soát, lấy một bản vẽ ra để check out, sửa, check in kèm ghi chú, gửi duyệt, phê duyệt và phát hành, xem lịch sử và những gì đang dùng nó, người thứ hai thấy gì khi tệp bị khóa, và cách nó hoạt động với thư mục đám mây.
keywords: kho, tài liệu, hướng dẫn, bài hướng dẫn, check out, check in, sửa đổi, phát hành, phê duyệt, khóa, lịch sử, nơi dùng, thư mục đám mây, thư mục dự án, quản lý tài liệu, pdm, hai người, thư mục chia sẻ
from: 3829528d
---

## Bạn sẽ làm gì

Bạn là Ana, đang làm việc cho Phòng khám Riverside cùng một đồng nghiệp, Ben. Các bản vẽ của dự án nằm trong một thư mục mà cả hai bạn truy cập được (một ổ đĩa chia sẻ, một thư mục đồng bộ, hoặc một thư mục đám mây). Đến cuối, một tệp sẽ đi từ bản sao đầu tiên đến bản phát hành **A**, được sửa lại thành **B.1**; bạn sẽ thấy ai đã làm gì, và thấy Ben nhìn thấy gì khi bạn đang giữ tệp.

Mọi thứ được giữ trong một thư mục `.ccvault` ẩn nằm cạnh các tệp của bạn: không có máy chủ, không tải lên gì (thư mục đám mây là ngoại lệ, xem bước cuối). Để xem mọi nút và quy tắc ở một nơi, xem chủ đề *Tài liệu: check out, sửa đổi và phát hành* ở nơi ứng dụng của bạn có nó.

## 1. Đặt thư mục dự án

1. Chọn {{ui:Tài liệu…}} trong menu {{ui:Thêm}} của thẻ **Xem**, hoặc gõ `DOCUMENTS` (hoặc `DOCS`) rồi nhấn {{key:Enter}}.
2. Chọn {{ui:Chọn thư mục dự án}} và chọn thư mục chứa các bản vẽ của dự án. (Thư mục dự án hoạt động trong Studio và trong các trình duyệt có thể mở thư mục, như Chrome và Edge. Ở các trình duyệt khác, bảng sẽ nói điều đó.)
3. Chọn {{ui:Đổi}} bên cạnh **Bạn:** và gõ tên của bạn, `Ana` (nếu được hỏi, thêm cả tên của máy tính này). Bảng giờ ghi *Bạn: Ana trên* và tên máy tính. Tên của bạn đi kèm mọi việc bạn làm.
4. Chọn {{ui:Bắt đầu một kho trong thư mục này}} và gõ tên dự án, `Riverside clinic`. Bảng ghi *Đã bắt đầu kho cho Riverside clinic.*

## 2. Đưa một tệp vào kiểm soát

1. Mở **Tệp không nằm trong kho** và chọn {{ui:Thêm}} bên cạnh `plans/A-101.dxf`.
2. Nó xuất hiện dưới **Tệp trong kho** ở bản sửa đổi **A.1**, trạng thái **Đang thực hiện**. A.1 là bản sao đầu tiên của nó; kho giữ một bản sao của mọi bản sửa đổi.

## 3. Check out, sửa, check in

1. Chọn {{ui:Mở}} bên cạnh `plans/A-101.dxf`. Bản vẽ mở trong CadCraft và bảng đóng lại để bạn thấy nó. Bảng vẫn chỉ cách một lệnh: `DOCUMENTS`.
2. Mở lại bảng và chọn {{ui:Check out}}. Dòng giờ ghi **Đã check out cho bạn**. Một tệp khóa đã được tạo trong `.ccvault/locks`; không ai khác có thể check out tệp này cho đến khi bạn check in.
3. Vẽ thứ gì đó: thêm một đường, di chuyển một bức tường. Không có thao tác nào của bạn có thể lưu đè lên tệp của kho trừ khi bản vẽ đã được check out cho bạn; {{ui:Lưu thành}} luôn hoạt động cho một bản sao của riêng bạn.
4. Mở bảng, chọn {{ui:Check in}} và gõ những gì đã thay đổi (`Moved the door`). Bảng ghi *đã check in thành A.2*. Tệp trong thư mục dự án giờ là bản vẽ bạn đã mở, và khóa đã được gỡ. Check in khi không có thay đổi sẽ giữ nguyên bản sửa đổi.

Nếu bạn đổi ý, {{ui:Hoàn tác check out}} trả tệp lại mà không tạo bản sửa đổi mới.

## 4. Duyệt và phát hành

1. Chọn {{ui:Gửi duyệt}}. Trạng thái thành **Đang duyệt** và tệp chỉ đọc.
2. Trước khi phê duyệt, chọn {{ui:Cài đặt dự án}} và liệt kê ai được phép phê duyệt (mỗi tên một dòng), ví dụ `Ben` và `Carla`, rồi đánh dấu quy tắc rằng người phê duyệt phải là người khác với tác giả. Chọn {{ui:Lưu cài đặt}}. Bây giờ chính kho sẽ từ chối bất kỳ ai khác.
3. Ben (hoặc Carla) chọn {{ui:Phê duyệt}} và gõ tên người phê duyệt. Trạng thái thành **Đã phát hành** và bản sửa đổi thành **A**, kèm *phê duyệt bởi* và tên. Tệp đã phát hành là chỉ đọc. {{ui:Gửi lại}} sẽ đưa nó về Đang thực hiện, kèm lý do.

Tên người phê duyệt là tên được gõ trong bảng; nó là bản ghi về người đã ký duyệt, không phải bằng chứng danh tính.

## 5. Một bản sửa đổi mới

1. Trên tệp đã phát hành, chọn {{ui:Sửa đổi mới}}. Bạn giữ nó cho chữ cái kế tiếp.
2. Sửa nó, rồi {{ui:Check in}}. Bản sửa đổi là **B.1**, đang thực hiện. Phát hành nó theo cách tương tự và nó thành **B**. {{ui:Hoàn tác check out}} trước lần check in đầu tiên sẽ giữ nó ở **A**.

Các chữ cái sửa đổi chạy A, B … Z, AA, AB. Nếu tiêu chuẩn của bạn bỏ qua một số chữ cái, thiết lập dự án *Dùng chuỗi ASME Y14.35* sẽ bỏ qua I, O, Q, S, X và Z cho các bản sửa đổi tiếp theo.

## 6. Xem chuyện gì đã xảy ra

Chọn tên của tệp để mở chi tiết:

- **{{ui:Lịch sử}}**: mọi sự kiện, mới nhất trước, kèm ai, máy nào và khi nào: *Đã check in A.2* bởi Ana, *Đã phát hành* bởi Ben, và tương tự.
- **{{ui:Các lần sửa đổi}}**: bảng sửa đổi. {{ui:Mở bản sao}} mở một bản sửa đổi thành một bản sao thường không thể ghi đè tệp của kho; {{ui:So sánh với}} liệt kê những gì được thêm, xóa và thay đổi so với bản sửa đổi trước đó, hoặc so với bất kỳ bản nào khác.
- **{{ui:Dùng}}**: các bản vẽ mà nó liên kết tới (xref).
- **{{ui:Được dùng bởi}}**: liệt kê mọi bản vẽ khác trong kho liên kết tới bản này: khi bạn đổi một mặt bằng gốc, bạn biết những tờ nào cần kiểm tra.

## Bảng sửa đổi trên tờ

Khi bản vẽ đang mở (và có một bố cục trong đó), chọn {{ui:Bảng sửa đổi}}: một bảng các bản sửa đổi đã phát hành được vẽ ở góc trên bên phải của tờ. Chọn {{ui:Điền khung tên}} để điền các thuộc tính khung tên được gắn thẻ `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` hoặc `APPROVED_BY` bằng bản sửa đổi, trạng thái, ngày và người phê duyệt của tệp. Khi bạn phê duyệt lần phát hành tiếp theo, bảng sửa đổi được cập nhật.

## 7. Ben thấy gì khi bạn giữ tệp

Bây giờ check out tệp lần nữa, và nhờ Ben mở cùng thư mục dự án trên máy tính của anh ấy rồi mở bảng. Ở dòng của tệp, anh ấy thấy **Đã check out bởi Ana trên** máy tính của bạn **từ** thời điểm đó, và không có nút {{ui:Check out}}. Nếu anh ấy vẫn thử, kho sẽ từ chối: khóa là một tệp mà hệ thống không tạo hai lần, nên hai người không thể cùng giữ tệp, kể cả trong cùng một khoảnh khắc, khi thư mục nằm trên đĩa trong Studio. (Trong trình duyệt, thư mục chỉ cho phép theo kiểu tốt nhất có thể, và bảng nói điều đó dưới **Thư mục**.)

Nếu Ana đi vắng và Ben cần tệp, {{ui:Hủy check out}} sẽ giải phóng nó. Anh ấy phải gõ một lý do; lý do được ghi vào nhật ký kèm tên người đã check out. Khi dự án có danh sách quản trị viên, chỉ họ mới làm được. Một lần check out cũ hơn ngưỡng cũ (mặc định 14 ngày) được đánh dấu *đã lâu*. Sau khi hủy, lần check in muộn của Ana bị từ chối, nên hai bạn không thể ghi đè lên nhau.

## 8. Thư mục đám mây

Thư mục đám mây là một thư mục dự án được giữ trong kho đám mây của nhóm bạn, nên nhóm không cần ổ đĩa chia sẻ. Trong Studio, khi đã đăng nhập vào tài khoản CadCraft, bảng hiển thị {{ui:Mở thư mục đám mây}} bên cạnh {{ui:Chọn thư mục dự án}}. Chọn nó và chọn thư mục, được liệt kê dưới dạng không gian làm việc / thư mục. Chủ sở hữu không gian làm việc tạo thư mục trước, và kho đám mây của nhóm phải đang có hiệu lực. Mọi thứ ở trên đều hoạt động như nhau; máy chủ tạo khóa, và khóa này nghiêm ngặt giữa những người với nhau. Nếu bạn chưa đăng nhập, bảng yêu cầu đăng nhập. Trong một thẻ trình duyệt thông thường, nút đám mây không được cung cấp; hãy dùng Studio.

## Thử ngay

Thực hiện tám bước ở trên với một bản sao của một tệp thật. Đối với các bước hai người, bạn cần một người khác, hoặc hai cửa sổ với hai tên. Nếu bạn thử với một thư mục chia sẻ thật, trang Thử nghiệm cộng đồng có một kiểm tra hỏi đúng điều này, và nhận kết quả.
