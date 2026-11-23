---
title: Chèn từ tệp hoặc thư viện
summary: Đưa một khối, hoặc cả bản vẽ, từ một DWG hoặc DXF khác vào, và đặt các mục từ Thư viện, một tệp, hoặc một thư viện khác, kèm ghi công và cập nhật.
keywords: chèn, tệp, thư viện, librarycraft, mục, thiết bị, khối từ bản vẽ khác, wblock, trung tâm thiết kế, ghi công, giấy phép, cập nhật, nguồn cấp, item.json
from: f6e4e452
---

## Chèn một khối từ bản vẽ khác

1. Gõ `I` rồi nhấn {{key:Enter}}, hoặc nhấp {{ui:Chèn}} trong nhóm Khối.
2. Dòng lệnh ở cuối cửa sổ hỏi `Enter block name or [File/Library]`. Gõ `F` tại đó rồi nhấn {{key:Enter}}.
3. Chọn DWG hoặc DXF trên máy tính này. Nó được đọc tại đây; không được mở, và không có gì được tải lên.
4. Trong hộp thoại {{ui:Chèn từ}}, chọn một khối từ danh sách (gõ trong {{ui:Lọc khối}} để tìm), hoặc giữ {{ui:Toàn bộ bản vẽ}}. Nhấp {{ui:Chèn}}.
5. Nhấp chỗ cần đặt, và điền các thuộc tính nếu được hỏi.

Bạn cũng có thể bắt đầu từ bảng {{ui:Khối}}: gõ `F` trong hộp {{ui:Lọc khối}} rồi nhấn {{key:Enter}}, hoặc gõ thứ gì không khớp khối nào rồi nhấp {{ui:Từ tệp…}}. `L` và {{ui:Thư viện…}} mở thư viện theo cùng cách. Trước phiên bản 0.10.1, một chữ cái gõ trong {{ui:Lọc khối}} chỉ tìm các khối của bản vẽ này và trả lời "Không có khối nào khớp với bộ lọc."

Để giữ một bản vẽ các khối của riêng bạn trong tầm tay, nhấp {{ui:Thêm bản vẽ}} dưới {{ui:Thư viện}} trong bảng {{ui:Khối}} và chọn DWG hoặc DXF. Các khối của nó được liệt kê kèm hình; nhấp một cái để đặt.

Toàn bộ bản vẽ vào như một khối có tên theo tệp. Các khối bên trong khối bạn đã chọn cũng vào. Các lớp mà chúng dùng được thêm vào bản vẽ này.

Nếu bản vẽ kia có đơn vị khác (ví dụ inch và milimét), CadCraft đổi tỷ lệ tham chiếu cho khớp và nói điều đó trong lịch sử.

### Khi một tên đã được dùng

Nếu bản vẽ này đã có một khối cùng tên, CadCraft hỏi:

- {{ui:Giữ cái hiện có}} dùng khối cùng tên của bản vẽ này.
- {{ui:Đổi tên}} đưa khối mới vào với tên `Name (2)`.

Toàn bộ việc chèn là một bước: {{key:Mod+Z}} lấy tham chiếu và các định nghĩa đã sao chép ra khỏi bản vẽ.

## Mở thư viện

Nhấp {{ui:Thư viện…}} trong bảng {{ui:Khối}}, hoặc {{ui:Thư viện}} trong nhóm Khối, hoặc gõ `LIB`. Tại lời nhắc `INSERT`, `L` cũng mở nó.

Thư viện có bốn nguồn, dưới dạng thẻ:

- {{ui:Thư viện}}: thư viện CadCraft. Tìm theo tên, nhà sản xuất hoặc mẫu, và lọc theo danh mục.
- {{ui:Tệp…}}: một tệp mục (`item.json`) từ bất kỳ thư viện nào, hoặc một bản vẽ, bảng tính hoặc mô hình 3D để tạo mục từ đó: một DWG hoặc DXF (mỗi khối thành một mục), một CSV có cột tên và kích thước, hoặc một mô hình glTF hoặc OBJ. Không có gì được tải lên.
- {{ui:Chuẩn}}: thép hình (dưới dạng mặt cắt, mặt đứng hoặc thanh 3D) và các chi tiết tiêu chuẩn như bulông, đai ốc và ổ trục, được tạo ở đây từ các bảng đã công bố. Xem [Đặt thép hình và chi tiết tiêu chuẩn](topic:steel-and-standard-parts).
- {{ui:Nguồn khác}}: các thư viện khác trả lời theo cách giống Thư viện. Thêm địa chỉ của chúng một lần; trình duyệt này sẽ ghi nhớ.

Mỗi thẻ hiện một hình xem trước, tên, nhà sản xuất và mẫu, giấy phép và phiên bản. Một mục đã rút lại được đánh dấu {{ui:Đã rút lại}} kèm lý do; CadCraft hỏi trước khi bạn đặt một cái.

## Đặt một mục

1. Nhấp {{ui:Đặt}} trên một thẻ.
2. Nhấp chỗ mục sẽ đến. Gõ `R` trước để xoay nó, hoặc `S` để đổi tỷ lệ.
3. Tại `Enter Item number (CC-ITEM)`, nhấn {{key:Enter}} cho số trống kế tiếp, hoặc gõ số riêng của bạn.

Mục trở thành một khối tên `LIB_<name>_v<version>`, vẽ theo đơn vị của bản vẽ này. Nếu bản vẽ không có đơn vị, mục vào theo milimét và lịch sử nói điều đó; đặt {{ui:Đơn vị}} trong bảng bên phải trước.

Dữ liệu của nó đi theo dưới dạng thuộc tính ẩn: id và phiên bản của mục, giấy phép và ghi công, nhà sản xuất, mẫu, danh mục và kích thước. Xem [Thuộc tính khối](topic:attributes).

## Mục bằng ngôn ngữ của bạn

Một mục có thể mang tên và mô tả của nó bằng các ngôn ngữ khác. Khi nó có chúng bằng ngôn ngữ mà CadCraft được đặt (Cài đặt › Chung › Ngôn ngữ), thẻ và tên mục của khối được đặt dùng chúng. Bản thân khối giữ tên lấy từ tên riêng của mục, nên một bản vẽ có một khối cho mỗi mục bất kể ngôn ngữ nào đã đặt nó.

## Kiểm tra cập nhật

1. Mở thư viện.
2. Nhấp {{ui:Kiểm tra cập nhật}}.

Mỗi mục thư viện trong bản vẽ được liệt kê với các số mục và cho biết nó có cập nhật không, có phiên bản mới hơn (và thay đổi gì), hoặc đã bị rút lại. Nhấp {{ui:Cập nhật}} ở một hàng, hoặc {{ui:Cập nhật tất cả}}. Mỗi tham chiếu chuyển sang khối của phiên bản mới và giữ số mục, số lượng, vị trí, góc và lớp của nó. {{key:Mod+Z}} hoàn tác một lần cập nhật.

## Ghi công những gì bạn đã dùng

Nhấp {{ui:Ghi công thư viện}}. Mỗi mục được liệt kê kèm dòng ghi công và giấy phép của nó.

- {{ui:Sao chép ghi công}} sao chép dòng của một mục; {{ui:Sao chép tất cả}} sao chép mọi dòng.
- {{ui:Tải CSV}} lưu danh sách với các số mục, nhà sản xuất, mẫu, giấy phép và ghi công. Nó mở trong bất kỳ bảng tính nào.

Các giấy phép như CC BY yêu cầu bạn ghi công tác giả ở nơi bạn dùng tác phẩm. Đặt các dòng đó lên bản vẽ, trong bản đặc tả hoặc trong ghi chú dự án.

## Ký hiệu và tài sản

Thư viện có ba loại mục: Ký hiệu (quy ước vẽ, 2D), Loại (một cấu kiện được làm từ gì) và Tài sản (vật thể vật lý). Trong thẻ {{ui:Thư viện}}, danh sách {{ui:Loại mục}} hiện Ký hiệu và tài sản cùng nhau, chỉ Ký hiệu, hoặc chỉ Tài sản. Loại là những gì một dự án BimCraft được xây từ đó, nên CadCraft không liệt kê chúng.

## Đăng nhập vào thư viện

Nhấp {{ui:Đăng nhập vào thư viện}}. Một cửa sổ nhỏ mở trên trang web; khi bạn đã đăng nhập ở đó, CadCraft có thể hiện các mục của nhóm bạn và ghi lại những gì bạn đặt, để bạn được báo khi một mục bạn đã dùng thay đổi. Phiên đăng nhập kéo dài cho thẻ trình duyệt này. Thu hồi bất cứ lúc nào từ trang bảo mật của tài khoản.

## Giữ các đối tượng riêng trong Đối tượng riêng

{{ui:Đối tượng riêng}} là một danh sách riêng trong Thư viện mà chỉ bạn thấy. Nó không nằm trong thư viện công khai, không có trong tìm kiếm, và không được hiện cho nhóm bạn; nó đi theo tài khoản của bạn đến mọi máy tính nơi bạn đăng nhập vào thư viện.

1. Trong bảng Thư viện, nhấp {{ui:Tệp…}} và đọc một tệp.
2. Trên mục bạn muốn dùng lại, nhấp {{ui:Giữ trong đối tượng riêng}}.
3. Sau đó, nhấp {{ui:Đối tượng riêng}} rồi nhấp {{ui:Đặt}}. Nó đặt như mọi mục thư viện khác, và {{ui:Kiểm tra cập nhật}} có bao gồm nó.
4. {{ui:Gỡ khỏi đối tượng riêng}} lấy nó ra khỏi danh sách. Các bản sao đã đặt trong bản vẽ vẫn ở đó.

Bạn cần đăng nhập vào thư viện. Đọc một tệp không tải lên gì; giữ một mục chỉ gửi mục đó đến tài khoản của bạn.

:::note
Đối tượng riêng đang được thử nghiệm và có thể chưa mở cho tài khoản của bạn. Nếu nó nói "Đối tượng riêng chưa mở cho tài khoản này", bạn vẫn có thể đặt các mục từ tệp của mình bằng {{ui:Tệp…}}.
:::

## Lỗi thường gặp

- **"Making items from IFC types is in BimCraft."** Tệp IFC và tệp họ được đọc trong ứng dụng BimCraft. Tạo mục ở đó hoặc trên Thư viện, rồi dùng `item.json` của nó ở đây.
- **"The library could not be reached."** Bạn đang ngoại tuyến, hoặc thư viện đang ngừng. Các mục đã có trong bản vẽ không bị ảnh hưởng.
- **Một mục quá lớn hoặc quá nhỏ.** Đơn vị của bản vẽ sai hoặc chưa đặt. Hoàn tác, đặt {{ui:Đơn vị}}, rồi đặt lại mục.
