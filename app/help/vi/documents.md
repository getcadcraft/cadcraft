---
title: Tài liệu: check out, sửa đổi và phát hành
summary: Kiểm soát bản vẽ trong thư mục dự án: check out một tệp để không ai khác thay đổi nó, check in như một lần sửa đổi mới, gửi duyệt và phát hành với tên người phê duyệt; có lịch sử, cho biết cái gì dùng cái gì, bảng kê vật tư và khung tên thể hiện lần sửa đổi.
keywords: cài đặt dự án, người phê duyệt, quản trị viên, ký hiệu sửa đổi, ASME, chỉ đọc, so sánh các lần sửa đổi, mở bản sao, partcraft, bimcraft, documents, DOCUMENTS, DOCS, kho, quản lý tài liệu, pdm, check out, check in, checkout, checkin, khóa, sửa đổi, rev, ký hiệu sửa đổi, phát hành, đã phát hành, phê duyệt, duyệt, xem xét, lỗi thời, nơi được dùng, bom, bảng kê vật tư, khung tên, bảng sửa đổi, thư mục dự án
from: ee938722
---

## Bạn sẽ tạo gì

Một thư mục dự án trong đó mỗi bản vẽ có một lần sửa đổi (A.1, A.2 … rồi A, B …) và một trạng thái (Đang làm, Chờ duyệt, Đã phát hành, Lỗi thời), trong đó tại một thời điểm chỉ một người có thể thay đổi một tệp, và trong đó mọi lần check out, check in, phê duyệt và check out bị hủy đều được ghi lại cùng người thực hiện và thời điểm.

Mọi thứ được giữ trong chính thư mục, trong thư mục ẩn `.ccvault` nằm cạnh bản vẽ. Một thư mục trên ổ đĩa dùng chung hoặc thư mục đồng bộ hoạt động cho cả nhóm. Không có máy chủ và không có gì được tải lên.

## Mở Tài liệu

Gõ `DOCUMENTS` (hoặc `DOCS`) rồi nhấn {{key:Enter}}. Bảng mở ra cạnh bản vẽ.

Chọn {{ui:Chọn thư mục dự án}} rồi chọn thư mục chứa bản vẽ của dự án. Thư mục dự án hoạt động trong CadCraft Studio và trong các trình duyệt có thể mở một thư mục (Chrome, Edge). Ở trình duyệt khác, bảng sẽ cho biết điều đó.

Lần đầu, gõ tên bạn (tên này đi kèm mọi thao tác) và tên của máy tính này. Nếu bạn đã đăng nhập, tên đã có sẵn.

## Bắt đầu một kho

Thư mục chưa là kho sẽ hiện {{ui:Bắt đầu một kho trong thư mục này}}. Gõ tên dự án. Sau đó mở {{ui:Tệp chưa có trong kho}} và chọn {{ui:Thêm}} bên cạnh từng tệp cần đưa vào kiểm soát. Tệp bạn thêm bắt đầu từ lần sửa đổi **A.1**, Đang làm.

## Thay đổi một bản vẽ

1. Chọn {{ui:Mở}} bên cạnh một bản vẽ. Nó mở trong CadCraft. Nếu tệp không được check out cho bạn, chỉ xem chứ đừng thay đổi: Lưu sẽ từ chối ghi đè và cho biết lý do (dùng {{ui:Lưu thành}} để giữ một bản sao của riêng bạn).
2. Chọn {{ui:Check out}}. Không ai khác có thể check out tệp lúc này; bảng cho biết ai đang giữ, trên máy nào, từ khi nào.
3. Vẽ.
4. Chọn {{ui:Check in}} và ghi lại điều đã thay đổi. Bản vẽ bạn đang mở được lưu vào thư mục dự án theo định dạng riêng của nó và trở thành lần sửa đổi tiếp theo (A.1, rồi A.2). Check in khi không có thay đổi thì giữ nguyên lần sửa đổi.

{{ui:Hoàn tác check out}} trả lại tệp mà không tạo lần sửa đổi mới.

## Duyệt và phát hành

- {{ui:Gửi duyệt}}: tệp chỉ đọc trong lúc được duyệt.
- {{ui:Phê duyệt}}: gõ tên người phê duyệt. A.3 trở thành **A**, Đã phát hành. Tệp đã phát hành là chỉ đọc.
- {{ui:Gửi lại}}: trở về Đang làm, kèm lý do.
- {{ui:Sửa đổi mới}} trên một tệp đã phát hành sẽ check out nó cho ký hiệu tiếp theo: check in đầu tiên là **B.1**. {{ui:Hoàn tác check out}} trước lần đó sẽ giữ nó ở A.
- {{ui:Đánh dấu lỗi thời}} gỡ một tệp đã phát hành khỏi sử dụng.

Một dự án có thể giữ danh sách những ai được phê duyệt, và có thể yêu cầu người phê duyệt không phải là người đã check in tệp (xem Cài đặt dự án bên dưới).

## Cài đặt dự án

Mở {{ui:Cài đặt dự án}} trong bảng:

- **Người phê duyệt**: mỗi dòng một tên. Khi có tên, chỉ họ mới có thể phê duyệt việc phát hành.
- **Người phê duyệt phải là người khác với tác giả**: quy tắc "bốn mắt".
- **Quản trị viên**: mỗi dòng một tên. Khi có tên, chỉ họ mới có thể phá check out của người khác hoặc thay đổi các cài đặt này.
- **Ký hiệu sửa đổi cần bỏ qua**: {{ui:Dùng dãy ASME Y14.35}} bỏ qua I, O, Q, S, X và Z, hoặc gõ các ký hiệu riêng của bạn. Ký hiệu đã cấp vẫn giữ nguyên; lựa chọn áp dụng cho các lần sửa đổi sau.
- **Một check out được xem là cũ sau**: số ngày (mặc định 14).

Chọn {{ui:Lưu cài đặt}}. Thay đổi được ghi vào nhật ký kèm người thực hiện.

## Có người để tệp ở trạng thái check out

{{ui:Hủy check out}} giải phóng một tệp mà người khác đang check out (họ đi vắng, hoặc máy tính của họ hỏng). Bạn phải gõ lý do: nó được ghi vào nhật ký kèm việc check out của ai. Khi dự án có quản trị viên, chỉ họ mới làm được điều này. Một check out cũ hơn 14 ngày được đánh dấu là đã lâu.

## Lịch sử, các lần sửa đổi, dùng, được dùng bởi

Chọn tên một tệp để xem:

- {{ui:Lịch sử}}: mọi sự kiện, mới nhất trước, kèm người, máy tính và thời điểm.
- {{ui:Các lần sửa đổi}}: mỗi lần sửa đổi được giữ lại. Một bản sao của mọi lần sửa đổi nằm trong kho (cùng một nội dung chỉ giữ một lần). {{ui:Mở bản sao}} mở lần sửa đổi đó như một bản sao thường, không thể ghi đè tệp trong kho. {{ui:So sánh với}} liệt kê những gì được thêm, gỡ và thay đổi giữa lần sửa đổi đó và lần trước nó (hoặc bất kỳ lần nào bạn chọn), và tô màu trên bản vẽ.
- {{ui:Dùng}}: các bản vẽ mà nó liên kết tới (xref), các tài liệu mà mô hình IFC trỏ tới, các chi tiết của một cụm lắp ráp PartCraft.
- {{ui:Được dùng bởi}}: mọi tệp trong kho dùng tệp này.

{{ui:Bảng kê vật tư (CSV)}} lưu danh sách mọi thứ một tệp sử dụng, theo từng cấp, kèm số lượng, lần sửa đổi và trạng thái, để mở bằng bảng tính.

## Bảng sửa đổi trên tờ

Với một bản vẽ đang mở có bố cục, chọn {{ui:Bảng sửa đổi}}. Một bảng các lần sửa đổi đã phát hành (lần sửa đổi, ngày, bởi, đã duyệt, mô tả) được vẽ ở góc trên bên phải của tờ bạn đang xem. Khi bạn phê duyệt một việc phát hành, bảng được cập nhật.

## Lần sửa đổi trong khung tên

Gắn cho các thuộc tính khung tên một trong các thẻ sau và chọn {{ui:Điền khung tên}} trên bản vẽ đang mở:

| Thẻ | Được điền bằng |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | lần sửa đổi (B, hoặc B.2 khi đang làm) |
| `VAULT.STATE` | trạng thái (Đã phát hành …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | ngày của lần sửa đổi mới nhất |
| `VAULT.APPROVER`, `APPROVED_BY` | ai đã phê duyệt lần phát hành mới nhất |

## PartCraft và BimCraft

PartCraft và BimCraft có cùng bảng Tài liệu cho tệp của riêng chúng: chi tiết và cụm lắp ráp trong PartCraft, mô hình IFC trong BimCraft. Check in lưu mô hình đang mở vào thư mục dự án, và một cụm lắp ráp cho biết nó dùng những chi tiết nào cùng một bảng kê vật tư.

## Điều nên biết

- Hai người trên cùng một thư mục dùng chung không thể cùng check out một tệp: check out là một tệp mà hệ thống từ chối tạo hai lần. Trong trình duyệt, và trong Studio có vỏ cũ hơn tính năng này, điều này chặt chẽ đến mức thư mục cho phép: hai lần check out trong cùng một phần giây có thể cùng thành công. Bảng cho biết áp dụng cái nào.
- Đừng sửa hoặc xóa thư mục `.ccvault` bằng tay. Nhật ký trong đó là bản ghi; kho dựng lại danh sách của nó từ đó khi cần.
- Thay đổi một tệp trong thư mục mà không check out được hiển thị là {{ui:Đã đổi trong thư mục mà không check out}}.
