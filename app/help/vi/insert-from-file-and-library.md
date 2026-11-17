---
title: Chèn từ tệp hoặc thư viện
summary: Đưa một khối, hoặc cả bản vẽ, từ một tệp DWG hoặc DXF khác vào, và đặt các mục từ Thư viện, từ một tệp hoặc thư viện khác, cùng với ghi công và cập nhật của chúng.
keywords: chèn, tệp, thư viện, librarycraft, mục, thiết bị, khối từ bản vẽ khác, wblock, design center, ghi công, attribution, giấy phép, cập nhật, nguồn cấp, item.json
from: 316188d2
---

## Chèn một khối từ bản vẽ khác

1. Gõ `I` và nhấn {{key:Enter}}, hoặc nhấp {{ui:Chèn}} trong nhóm Khối.
2. Tại `Enter block name or [File/Library]`, gõ `F` và nhấn {{key:Enter}}.
3. Chọn tệp DWG hoặc DXF trên máy tính này. Nó được đọc tại đây; không được mở, và không có gì được tải lên.
4. Trong hộp thoại {{ui:Chèn từ}}, chọn một khối trong danh sách (gõ vào {{ui:Lọc khối}} để tìm), hoặc giữ {{ui:Toàn bộ bản vẽ}}. Nhấp {{ui:Chèn}}.
5. Nhấp nơi khối sẽ đến, và điền các thuộc tính nếu được yêu cầu.

Toàn bộ bản vẽ được đưa vào như một khối duy nhất, đặt theo tên tệp. Các khối bên trong khối bạn đã chọn cũng được đưa vào. Các lớp mà chúng dùng sẽ được thêm vào bản vẽ này.

Nếu bản vẽ kia có đơn vị khác (chẳng hạn inch và milimét), CadCraft đổi tỷ lệ tham chiếu cho khớp và ghi điều đó trong lịch sử.

### Khi tên đã được dùng

Nếu bản vẽ này đã có một khối cùng tên, CadCraft sẽ hỏi:

- {{ui:Giữ cái hiện có}} dùng khối cùng tên của bản vẽ này.
- {{ui:Đổi tên}} đưa khối mới vào dưới tên `Name (2)`.

Toàn bộ thao tác chèn là một bước: {{key:Mod+Z}} gỡ tham chiếu và các định nghĩa đã sao chép đi.

## Mở thư viện

Nhấp {{ui:Thư viện…}} trong bảng {{ui:Khối}}, hoặc {{ui:Thư viện}} trong nhóm Khối, hoặc gõ `LIB`. Tại lời nhắc `INSERT`, `L` cũng mở nó.

Thư viện có bốn nguồn, dưới dạng các thẻ:

- {{ui:Thư viện}}: thư viện CadCraft. Tìm theo tên, nhà sản xuất hoặc model, và lọc theo danh mục.
- {{ui:Tệp…}}: một tệp mục (`item.json`) từ bất kỳ thư viện nào, hoặc một bản vẽ, bảng tính hoặc mô hình 3D để tạo mục từ đó: một DWG hoặc DXF (mỗi khối thành một mục), một CSV có các cột tên và kích thước, hoặc một mô hình glTF hoặc OBJ. Không có gì được tải lên.
- {{ui:Chuẩn}}: các tiết diện thép (dưới dạng mặt cắt, mặt đứng hoặc cấu kiện 3D) và các chi tiết tiêu chuẩn như bulông, đai ốc và ổ trục, được tạo tại đây từ các bảng đã xuất bản. Xem [Đặt tiết diện thép và chi tiết tiêu chuẩn](topic:steel-and-standard-parts).
- {{ui:Nguồn khác}}: các thư viện khác trả lời theo cách giống Thư viện. Thêm địa chỉ của chúng một lần; trình duyệt này sẽ ghi nhớ.

Mỗi thẻ hiển thị một ảnh xem trước, tên, nhà sản xuất và model, giấy phép và phiên bản. Một mục đã rút sẽ được đánh dấu {{ui:Đã rút}} kèm lý do; CadCraft hỏi trước khi bạn đặt nó.

## Đặt một mục

1. Nhấp {{ui:Đặt}} trên một thẻ.
2. Nhấp nơi mục sẽ đến. Gõ `R` trước để xoay nó, hoặc `S` để đổi tỷ lệ.
3. Tại `Enter Item number (CC-ITEM)`, nhấn {{key:Enter}} để lấy số trống tiếp theo, hoặc gõ số của riêng bạn.

Mục trở thành một khối tên `LIB_<name>_v<version>`, vẽ theo đơn vị của bản vẽ này. Nếu bản vẽ chưa có đơn vị, mục được đưa vào theo milimét và lịch sử ghi điều đó; hãy đặt {{ui:Đơn vị}} trong bảng bên phải trước.

Dữ liệu của nó đi kèm dưới dạng thuộc tính ẩn: mã và phiên bản của mục, giấy phép và ghi công, nhà sản xuất, model, danh mục và kích thước. Xem [Thuộc tính khối](topic:attributes).

## Mục bằng ngôn ngữ của bạn

Một mục có thể mang tên và mô tả bằng các ngôn ngữ khác. Khi mục có chúng bằng ngôn ngữ mà CadCraft đang đặt (Cài đặt › Chung › Ngôn ngữ), thẻ và tên mục của khối được đặt sẽ dùng chúng. Bản thân khối giữ một tên tạo từ tên gốc của mục, nên một bản vẽ có một khối cho mỗi mục, bất kể ngôn ngữ nào đã đặt nó.

## Kiểm tra cập nhật

1. Mở thư viện.
2. Nhấp {{ui:Kiểm tra cập nhật}}.

Mỗi mục thư viện trong bản vẽ được liệt kê cùng số mục và cho biết nó đã cập nhật hay chưa, có phiên bản mới hơn (và những gì đã đổi), hay đã rút. Nhấp {{ui:Cập nhật}} ở một hàng, hoặc {{ui:Cập nhật tất cả}}. Mọi tham chiếu chuyển sang khối của phiên bản mới và giữ nguyên số mục, số lượng, vị trí, góc và lớp. {{key:Mod+Z}} hoàn tác một lần cập nhật.

## Ghi công những gì bạn đã dùng

Nhấp {{ui:Ghi công thư viện}}. Mỗi mục được liệt kê cùng dòng ghi công và giấy phép của nó.

- {{ui:Sao chép ghi công}} sao chép dòng của một mục; {{ui:Sao chép tất cả}} sao chép mọi dòng.
- {{ui:Tải CSV}} lưu danh sách với số mục, nhà sản xuất, model, giấy phép và ghi công. Nó mở được trong bất kỳ bảng tính nào.

Các giấy phép như CC BY yêu cầu bạn ghi công tác giả ở nơi bạn dùng tác phẩm. Hãy đặt các dòng đó lên bản vẽ, trong bảng đặc tả hoặc ghi chú dự án.

## Ký hiệu và tài nguyên

Thư viện có ba loại mục: Ký hiệu (quy ước vẽ, 2D), Kiểu (một phần tử được cấu tạo từ gì) và Tài nguyên (vật thể vật lý). Trong thẻ {{ui:Thư viện}}, danh sách {{ui:Loại mục}} hiển thị Ký hiệu và Tài nguyên cùng nhau, chỉ Ký hiệu, hoặc chỉ Tài nguyên. Kiểu là những thứ tạo nên một dự án BimCraft, nên CadCraft không liệt kê chúng.

## Đăng nhập vào thư viện

Nhấp {{ui:Đăng nhập vào thư viện}}. Một cửa sổ nhỏ mở trên trang web; khi bạn đã đăng nhập ở đó, CadCraft có thể hiển thị các mục của nhóm bạn và ghi nhận những gì bạn đặt, để bạn biết khi một mục bạn đã dùng thay đổi. Đăng nhập có hiệu lực trong thẻ trình duyệt này. Bạn có thể thu hồi bất cứ lúc nào tại trang bảo mật của tài khoản.

## Những lỗi thường gặp

- **"Việc tạo mục từ kiểu IFC nằm trong BimCraft."** Tệp IFC và tệp họ được đọc trong ứng dụng BimCraft. Hãy tạo mục ở đó hoặc trên Thư viện, rồi dùng `item.json` của nó ở đây.
- **"Không thể kết nối đến thư viện."** Bạn đang ngoại tuyến, hoặc thư viện đang ngừng hoạt động. Các mục đã có trong bản vẽ không bị ảnh hưởng.
- **Một mục quá lớn hoặc quá nhỏ.** Đơn vị của bản vẽ sai hoặc chưa được đặt. Hoàn tác, đặt {{ui:Đơn vị}}, rồi đặt lại mục.
