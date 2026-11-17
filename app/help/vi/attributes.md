---
title: Thuộc tính khối
summary: Xem và thay đổi các giá trị mà một tham chiếu khối mang, như số hạng mục hoặc nhà sản xuất, và giữ chúng khi bạn lưu một bản sao.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, khối khung tên, sửa tại chỗ, trình soạn thuộc tính, attdef, định nghĩa thuộc tính, bedit, trình soạn khối, bclose, thuộc tính, attributes, attrib, thẻ, số hạng mục, giá trị, ẩn, hằng số, khối, danh sách, thẻ thiết bị
from: 34d307c7
---

## Thuộc tính là gì

Thuộc tính là một giá trị có tên đi kèm một tham chiếu khối: số hạng mục của một thẻ thiết bị, tên của thẻ phòng, khả năng chống cháy của cửa. Định nghĩa của khối cho biết nó có những thuộc tính nào (mỗi thuộc tính có một **thẻ**, một **lời nhắc**, một **mặc định** và vị trí, kích thước, góc cho chữ của nó). Mỗi tham chiếu đến khối mang giá trị riêng của nó.

Một số thuộc tính là **ẩn**: chúng chứa dữ liệu, như nhà sản xuất hoặc số model, nhưng không bao giờ được vẽ. Một số là **hằng số**: giống nhau ở mọi tham chiếu, do khối cố định.

## Thuộc tính đến từ đâu

- Các khối trong tệp DWG và DXF bạn mở giữ thuộc tính của chúng, cùng giá trị của từng tham chiếu.
- Các khối bạn đưa vào bằng {{cmd:INSERT}} và tùy chọn {{ui:Tệp}} cũng giữ thuộc tính của chúng. Xem [Chèn từ tệp hoặc thư viện](topic:insert-from-file-and-library).
- Mục thư viện được đưa vào dưới dạng khối có thuộc tính: một số hạng mục nhìn thấy được và dữ liệu của mục, ẩn.
- Khối do bạn tự tạo: định nghĩa thuộc tính bằng {{cmd:ATTDEF}} trước (bên dưới), rồi chọn chúng cùng các đối tượng khác khi bạn tạo khối.

## Định nghĩa thuộc tính cho khối của riêng bạn

1. Vẽ các đường của khối, ví dụ một thẻ phòng.
2. Chọn {{ui:Khối}} › {{ui:Thêm}} › {{ui:Định nghĩa thuộc tính}}, hoặc gõ `ATT` rồi nhấn {{key:Enter}}.
3. Lịch sử hiển thị các chế độ (`Invisible=No Constant=No Preset=No`). Gõ `I`, `C` hoặc `P` để chuyển một chế độ, và nhấn {{key:Enter}} khi đúng. Giá trị ẩn được giữ lại nhưng không vẽ; giá trị hằng số có cùng giá trị ở mọi tham chiếu; giá trị đặt sẵn không được hỏi khi bạn chèn khối.
4. Gõ thẻ (ví dụ `ROOM_NO`: chữ hoa, không có khoảng trắng), lời nhắc (`Số phòng`) và giá trị mặc định (`101`).
5. Nhấp vào nơi giá trị sẽ đặt, rồi nhập chiều cao và góc xoay. Thẻ sẽ hiển thị trên bản vẽ.
6. Tạo khối bằng {{cmd:BLOCK}}, chọn đồng thời các đường và định nghĩa thuộc tính. Tham chiếu thay thế chúng sẽ nhận giá trị mặc định; mỗi lần {{cmd:INSERT}} mới sẽ hỏi các giá trị này.

Một định nghĩa thuộc tính được chọn sẽ hiển thị {{ui:Thẻ}}, {{ui:Lời nhắc}}, {{ui:Mặc định}} và các chế độ trong {{ui:Thuộc tính}}.

## Thay đổi khối: trình soạn khối

{{ui:Khối}} › {{ui:Thêm}} › {{ui:Sửa khối}} ({{cmd:BEDIT}}, `BE`) mở một khối riêng: gõ tên của nó (hoặc chọn một tham chiếu trước). Một thanh ở trên cùng cho biết bạn đang sửa khối nào. Vẽ, xóa và thay đổi các đối tượng của nó bằng các lệnh thông thường, và thêm hoặc thay đổi định nghĩa thuộc tính. Sau đó nhấp {{ui:Lưu khối}} (hoặc gõ {{cmd:BCLOSE}} và `S`): mọi tham chiếu đều hiển thị thay đổi, và một lần {{key:Mod+Z}} hoàn tác tất cả. {{ui:Hủy thay đổi}} ({{cmd:BCLOSE}}, `D`) giữ khối như cũ.

Khi bạn thêm, xóa hoặc thay đổi định nghĩa thuộc tính, lưu cũng đưa mọi tham chiếu vào hàng: giá trị bạn đã nhập được giữ lại, thuộc tính mới nhận giá trị mặc định, thuộc tính bị xóa sẽ mất, và mỗi thuộc tính trở về vị trí mà định nghĩa đặt nó. Lịch sử cho biết có bao nhiêu tham chiếu đã được cập nhật.

## Sửa khung tên tại vị trí của nó (REFEDIT)

Khung tên trên tờ thường nằm trong một khối. Để thay đổi các đường hoặc chữ của nó mà không rời khỏi tờ:

1. Chọn khung tên, rồi {{ui:Khối}} › {{ui:Thêm}} › {{ui:Sửa tại chỗ}} (hoặc gõ {{cmd:REFEDIT}}).
2. Nội dung của nó trở thành các đối tượng thông thường tại chỗ; mọi thứ khác bị mờ đi và không thể thay đổi.
3. Thay đổi, xóa hoặc vẽ: các đối tượng mới trở thành một phần của khối.
4. Nhấp {{ui:Lưu khối}} trên thanh ở trên cùng (hoặc gõ {{cmd:REFCLOSE}} và `S`). Mọi tham chiếu hiển thị thay đổi, và một lần {{key:Mod+Z}} hoàn tác toàn bộ lần sửa. {{ui:Bỏ}} giữ khối như cũ.

Một bản vẽ liên kết, khối động, hoặc tham chiếu được co giãn khác nhau theo chiều ngang và chiều đứng thì không thể sửa tại chỗ: hãy dùng {{cmd:BEDIT}} (hoặc mở bản vẽ liên kết).

:::note
Lưu hoặc hủy trong trình soạn khối trước khi bạn lưu bản vẽ: một tệp được lưu khi trình soạn đang mở sẽ có khối như trước khi sửa.
:::

## Điền giá trị khi bạn đặt khối

1. Gõ `I` và nhấn {{key:Enter}}, gõ tên khối và nhấn {{key:Enter}}.
2. Nhấp vào nơi khối sẽ đặt.
3. CadCraft hỏi từng giá trị, ví dụ `Nhập số hạng mục (ITEM) <>`. Gõ giá trị và nhấn {{key:Enter}}, hoặc nhấn {{key:Enter}} để giữ mặc định hiện trong dấu ngoặc nhọn.

Các giá trị khối đánh dấu là đặt sẵn, và các giá trị hằng số, không được hỏi. Chúng nhận giá trị mặc định.

## Xem và thay đổi giá trị

1. Nhấp vào một tham chiếu khối.
2. Trong bảng bên phải, dưới {{ui:Thuộc tính}}, mỗi thẻ có giá trị của nó. Các thuộc tính ẩn ghi `hidden`.
3. Nhấp một giá trị, gõ giá trị mới và nhấn {{key:Enter}}.

Bản vẽ hiển thị giá trị mới ngay. Mỗi thay đổi là một bước: {{key:Mod+Z}} hoàn tác nó.

**Trình soạn thuộc tính.** Nhấp đúp vào một tham chiếu có thuộc tính (hoặc {{cmd:EATTEDIT}}): hộp thoại {{ui:Sửa thuộc tính}} liệt kê mọi thẻ cùng lời nhắc và giá trị. Gõ giá trị mới; nhấp một hàng để thay đổi {{ui:Chiều cao}}, {{ui:Xoay}}, {{ui:Hệ số rộng}}, {{ui:Căn lề}}, {{ui:Lớp}}, {{ui:Màu}} và {{ui:Ẩn}} của thuộc tính đó chỉ cho tham chiếu này. {{ui:Áp dụng}} giữ hộp thoại mở; {{ui:OK}} áp dụng và đóng lại. Mỗi {{ui:Áp dụng}} hoặc {{ui:OK}} là một bước hoàn tác.

**Trên dòng lệnh**, {{cmd:ATTEDIT}} hỏi từng giá trị theo thứ tự: gõ giá trị mới, hoặc nhấn {{key:Enter}} để giữ nguyên.

## Thay đổi định nghĩa thuộc tính (BATTMAN, ATTSYNC)

{{ui:Khối}} › {{ui:Thêm}} › {{ui:Trình quản lý thuộc tính}} ({{cmd:BATTMAN}}) liệt kê các thuộc tính của khối: đổi thẻ, lời nhắc hoặc mặc định, đánh dấu {{ui:Ẩn}}, {{ui:Hằng số}} hoặc {{ui:Đặt sẵn}}, và di chuyển chúng lên hoặc xuống (thứ tự quyết định thứ tự các giá trị được hỏi). Khi {{ui:Cập nhật các tham chiếu (giữ giá trị)}} được đánh dấu, {{ui:Áp dụng}} cũng đưa mọi tham chiếu vào hàng; một thẻ được đổi tên vẫn giữ giá trị của nó. Mỗi {{ui:Áp dụng}} là một bước hoàn tác.

{{cmd:ATTSYNC}} đưa tham chiếu vào hàng với định nghĩa khối của chúng bằng tay: `S` chọn một tham chiếu, `N` đặt tên một khối, `A` xử lý mọi khối. Giá trị được giữ nguyên.

Các giá trị trong trường riêng của mục thư viện (mã, phiên bản, giấy phép và ghi công) được hiển thị nhưng không sửa được, để việc kiểm tra cập nhật vẫn hoạt động. Số hạng mục và số lượng của nó thì do bạn thay đổi.

## Liệt kê chúng

Chọn các tham chiếu và gõ `LI` (cho {{cmd:LIST}}). Lịch sử hiển thị từng thuộc tính dưới dạng `TAG = value`, kèm `(invisible)` hoặc `(constant)` khi áp dụng.

## Di chuyển, xoay và phân rã

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} và {{cmd:MIRROR}} giữ nguyên giá trị; chữ di chuyển cùng khối và vẫn dễ đọc.
- {{cmd:EXPLODE}} biến các thuộc tính nhìn thấy được thành chữ thường cùng giá trị. Các thuộc tính ẩn bị bỏ.

## Lưu

Bản DWG và bản DXF đã lưu đều giữ mọi thuộc tính: định nghĩa của mỗi khối (cả ẩn, hằng số và đặt sẵn) và giá trị của mỗi tham chiếu. Các chương trình CAD khác đọc chúng như thuộc tính khối thông thường.

Trong DXF R12, giá trị dài hơn 255 ký tự sẽ bị cắt còn 255, và lịch sử sẽ ghi điều đó.

## Lỗi thường gặp

- **Giá trị không hiển thị trên bản vẽ.** Nó bị ẩn, hoặc trống. Giá trị ẩn vẫn hiện trong bảng bên phải.
- **Giá trị tôi gõ đi vào dòng lệnh.** Nhấp vào ô giá trị trong bảng bên phải trước.
