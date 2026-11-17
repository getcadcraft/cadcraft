---
title: Lịch sử: các phiên bản và những thay đổi
summary: Xem các phiên bản của một bản vẽ (các bản sao mà Studio giữ khi bạn lưu, và các bản của đám mây), mở hoặc khôi phục một bản, và so sánh hai bản với những thay đổi được tô màu.
keywords: lịch sử, phiên bản, lịch sử phiên bản, khôi phục, phiên bản trước, hoàn tác khi lưu, so sánh, so sánh bản vẽ, dwgcompare, thay đổi, đã thêm, đã xóa, đã đổi, bản chụp, sao lưu, phiên bản đám mây
from: 141d37b3
---

## Bạn sẽ tạo gì

Xem một phiên bản cũ của bản vẽ, và danh sách những gì khác với hiện tại: cái gì được thêm, cái gì bị xóa và cái gì đã đổi, được đánh dấu bằng màu trên bản vẽ.

## Mở Lịch sử

Gõ `HISTORY` (hoặc `HIST`) và nhấn {{key:Enter}}, hoặc chọn {{ui:Lịch sử…}} trong menu {{ui:Thêm}} của nhóm {{ui:Khung nhìn}}. Bảng mở cạnh bản vẽ và giữ nguyên khi bạn làm việc, nên bạn có thể di chuyển và phóng to bản vẽ cùng với các màu trên đó.

Lịch sử hoạt động trong CadCraft Studio. Trong trình duyệt, bảng chỉ thông báo điều đó.

## Các phiên bản đến từ đâu

- **Trên máy tính này.** Mỗi lần bạn mở một bản vẽ từ tệp trong Studio, và mỗi lần lưu, Studio giữ một bản sao của tệp trong kho lưu trữ riêng trên máy tính này. Bản sao đầu tiên là {{ui:Như lúc mở}}: tệp như trước lần lưu đầu tiên đè lên nó. Studio giữ 25 bản sao mới nhất của mỗi bản vẽ, và các bản cũ nhất bị xóa trước khi tổng các bản sao vượt quá 400 MB. Một lần lưu không thay đổi gì sẽ không giữ bản nào. Không có gì được tải lên.
- **Trên đám mây.** Khi bạn mở một bản vẽ từ các tệp trên đám mây trong Studio, bảng cũng liệt kê {{ui:Trên đám mây}}: mọi phiên bản mà đám mây giữ, với số thứ tự, người lưu và ghi chú. Bảng chỉ đọc chúng. CadCraft chưa gửi các lần lưu của chính nó lên đám mây, nên đây là các phiên bản được lưu từ thiết bị khác và từ web. Đăng nhập lại trong Studio nếu nó báo phiên đăng nhập đã hết hạn.

Bản vẽ bạn chưa lưu thì chưa có bản sao nào: hãy lưu trước.

## Mở hoặc khôi phục một phiên bản

- {{ui:Mở}} đặt phiên bản đó vào một thẻ riêng. Bản vẽ của bạn không bị thay đổi.
- {{ui:Khôi phục}} thay thế bản vẽ này bằng phiên bản đó. Nó hỏi trước. Studio giữ một bản sao của bản vẽ như hiện tại trong Lịch sử (được đánh dấu {{ui:Trước khi khôi phục}}) trước khi làm vậy, và không có gì được ghi vào tệp cho đến khi bạn lưu. Không thể hoàn tác việc khôi phục bằng {{key:Mod+Z}}; hãy dùng bản sao đó.

## So sánh

1. Nhấp {{ui:So sánh}} ở một phiên bản. Nó được so với {{ui:Bản vẽ như hiện tại}}; để so với một phiên bản khác, hãy chọn phiên bản đó trong {{ui:So sánh với}} trước.
2. Đọc kết quả bên dưới danh sách: có bao nhiêu đối tượng được thêm, xóa và đổi, cùng danh sách của chúng. Nhấp một mục trong danh sách để đưa khung nhìn đến nó.
3. Trên bản vẽ:
   - các đối tượng **màu xanh lá** được thêm,
   - các đối tượng **màu đỏ** bị xóa (chúng chỉ có trong phiên bản cũ),
   - các đối tượng **màu cam** đã đổi: hình mới là nét liền và hình cũ là nét đứt.
4. {{ui:Hiện trên bản vẽ}} bật và tắt các màu; {{ui:Xóa các màu}} gỡ kết quả đi. Đóng bảng cũng xóa các màu.

Danh sách cho biết điều gì đã đổi ở một đối tượng: văn bản của nó, việc nó đã di chuyển, hình dạng, lớp, màu, kiểu đường hoặc độ dày nét. Mỗi tờ được so sánh riêng; các màu hiện trên tờ đang mở.

:::note
Bản vẽ không có số cố định cho từng đối tượng, nên CadCraft khớp các đối tượng theo những gì chúng là: cùng một đối tượng ở hai phía thì không đổi; một đối tượng cùng kiểu và cùng lớp nằm trong phạm vi kích thước của chính nó so với một đối tượng cũ thì là cùng đối tượng, đã đổi; phần còn lại được coi là thêm hoặc xóa. Một đối tượng được di chuyển đi xa khỏi vị trí cũ sẽ hiện là đã xóa ở một chỗ và đã thêm ở chỗ khác. Tham chiếu khối được tính theo nội dung của khối đó.
:::

## Những lỗi thường gặp

- **"Chưa có bản sao nào."** Studio giữ một bản sao mỗi khi bạn mở và lưu một bản vẽ có tệp trên máy tính này. Bản vẽ mở từ một thẻ trình duyệt, hoặc chưa từng được lưu, thì không có bản nào.
- **Danh sách đám mây bị thiếu.** Nó xuất hiện với bản vẽ được mở từ đám mây trong Studio; tệp mở từ đĩa không phải là bản vẽ đám mây.
- **Mọi thứ trông như đã đổi.** Hai phiên bản được lưu bởi các chương trình khác nhau ghi cùng một bản vẽ theo những cách khác nhau (tên khối ẩn danh, làm tròn số). Hãy so sánh các phiên bản do CadCraft lưu.
