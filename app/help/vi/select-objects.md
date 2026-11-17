---
title: Chọn đối tượng
summary: Chọn đối tượng từng cái một, bằng cửa sổ hoặc khung cắt, trước hoặc trong khi chạy lệnh, và bỏ đối tượng ra khỏi vùng chọn.
keywords: chọn, vùng chọn, cửa sổ, khung cắt, danh từ-động từ, chọn, tất cả, cuối cùng, trước đó, hàng rào, gỡ bỏ, thêm, tab, xoay vòng, chồng lên nhau, qselect, chọn nhanh, bộ lọc, chọn giống nhau, selectsimilar, shift, bỏ chọn, ctrl+a, pickfirst
from: 676508c7
---

## Bạn sẽ học được gì

Cách chọn các đối tượng mà một lệnh tác động lên. CadCraft có hai cách làm việc, và cả hai đều tốt:

- **Chọn trước, rồi chạy lệnh** (danh từ-động từ). Chọn đối tượng, rồi gõ `M` cho lệnh Di chuyển. Lệnh nhận vùng chọn của bạn và đi thẳng đến câu hỏi tiếp theo.
- **Chạy lệnh trước, rồi chọn** (động từ-danh từ). Gõ `M`; lệnh hỏi `Chọn đối tượng:`; bạn chọn, rồi nhấn {{key:Enter}}.

## Chọn từng đối tượng một

1. Khi không có lệnh nào đang chạy, nhấp một đường. Nó được tô sáng và các điểm nắm (ô vuông nhỏ) xuất hiện. Bảng thuộc tính bên phải hiển thị các thuộc tính của nó.
2. Nhấp một đối tượng khác. Nó được thêm vào vùng chọn.
3. Giữ {{key:Shift}} và nhấp một đối tượng đã chọn. Nó bị bỏ khỏi vùng chọn.
4. Nhấn {{key:Esc}}. Không còn gì được chọn.

## Cửa sổ và khung cắt

Nhấp một lần vào khoảng trống, di chuyển, rồi nhấp lần nữa: tạo thành một hình chữ nhật. Nhấn và kéo thay vào đó sẽ vẽ một lasso tự do, với hai kiểu tương tự (xem [Chọn bằng lasso](topic:lasso-selection); Cài đặt có thể làm cho kéo vẽ ra hình chữ nhật). Đối tượng nào được chọn phụ thuộc vào hướng bạn kéo:

| Bạn di chuyển | Hộp | Chọn |
|---|---|---|
| Từ trái sang phải | Cửa sổ | Chỉ các đối tượng **nằm hoàn toàn trong** hộp |
| Từ phải sang trái | Khung cắt | Các đối tượng nằm trong hộp **và** các đối tượng mà hộp chạm vào |

1. Vẽ vài đường và vòng tròn chồng lên nhau.
2. Nhấp vào khoảng trống bên trái một số đối tượng, di chuyển sang phải, rồi nhấp lần nữa. Chỉ các đối tượng nằm hoàn toàn trong hộp được chọn.
3. Nhấn {{key:Esc}}.
4. Nhấp vào khoảng trống bên phải, di chuyển sang trái qua một số đối tượng, rồi nhấp lần nữa. Mọi đối tượng mà hộp chạm vào đều được chọn.
5. Giữ {{key:Shift}} và vẽ một hộp hoặc lasso qua một số đối tượng đã chọn. Chúng sẽ bị bỏ khỏi vùng chọn.

## Chọn, rồi chạy lệnh

1. Chọn hai vòng tròn.
2. Gõ `M` và nhấn {{key:Enter}}.

Lịch sử ghi `Đã tìm thấy 2`, và lời nhắc chuyển thẳng sang `Chỉ định điểm gốc`. Hoàn tất việc di chuyển (xem [Di chuyển, sao chép, xoay, tỷ lệ và đối xứng](topic:modify-objects)).

Khi một lệnh kết thúc, vùng chọn được xóa, để lệnh tiếp theo bắt đầu từ đầu.

Các lệnh nhận vùng chọn theo cách này: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} và {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} và {{cmd:CHAMFER}} luôn yêu cầu bạn chọn từng đối tượng một; {{cmd:TRIM}} và {{cmd:EXTEND}} nhận một lần nhấp hoặc một đường đi mà bạn kéo qua các đoạn (xem [Cắt và kéo dài](topic:trim-and-extend)).

## Chạy lệnh, rồi chọn

1. Đảm bảo không có gì được chọn ({{key:Esc}}).
2. Gõ `E` và nhấn {{key:Enter}}. Lời nhắc ghi `Chọn đối tượng:`.
3. Nhấp đối tượng, hoặc kéo cửa sổ và khung cắt. Lịch sử đếm mỗi lần chọn (`Đã tìm thấy 1`, `Đã tìm thấy 3`).
4. Nhấn {{key:Enter}}, nhấn {{key:Space}} hoặc nhấp chuột phải để kết thúc việc chọn.

Các đối tượng bị xóa, và lịch sử ghi số lượng.

Tại lời nhắc `Chọn đối tượng:`, bạn cũng có thể gõ:

- `ALL`, rồi {{key:Enter}}: mọi đối tượng bạn có thể chỉnh sửa trong thẻ đang mở.
- `L` (hoặc `LAST`), rồi {{key:Enter}}: đối tượng vừa vẽ gần nhất.
- `P` (Trước đó): các đối tượng mà lệnh trước đã tác động, nếu chúng vẫn còn.
- `F` (Hàng rào): nhấp hoặc gõ các điểm dọc theo một đường; mọi đối tượng mà đường đó cắt qua sẽ được thêm vào. Nhấn {{key:Enter}} để kết thúc hàng rào; `U` lấy lại điểm cuối của nó.
- `W` (Cửa sổ) hoặc `C` (Khung cắt): hai góc, theo bất kỳ hướng nào bạn kéo.
- `R` (Bỏ): từ đó trở đi, các lần nhấp, cửa sổ và hàng rào sẽ đưa đối tượng **ra khỏi** vùng chọn. Lời nhắc ghi `Bỏ đối tượng:`. `A` (Thêm) quay lại chế độ cũ.
- `?`: danh sách các tùy chọn này trong lịch sử.

Các tùy chọn này không hiển thị trong lời nhắc, như trong AutoCAD.

## Chọn một trong nhiều đối tượng chồng lên nhau

Khi các đối tượng chồng lên nhau hoặc chạm nhau, một lần nhấp sẽ chọn đối tượng gần nhất. Để chọn đối tượng khác:

1. Giữ con trỏ yên tại vị trí đó.
2. Nhấn {{key:Tab}}. Đối tượng tiếp theo tại đó được tô sáng, và thanh trạng thái cho biết đó là đối tượng nào ("2 trong 3: Đường trên lớp Walls").
3. Nhấn {{key:Tab}} thêm lần nữa cho đến khi đối tượng bạn muốn được tô sáng, rồi nhấp mà không di chuyển.

Di chuyển con trỏ sẽ bắt đầu lại từ đầu. Cách này hoạt động khi không có lệnh nào đang chạy, tại `Chọn đối tượng:` và bất cứ khi nào một lệnh yêu cầu bạn chọn một đối tượng.

## Chọn theo quy tắc: Chọn nhanh

{{cmd:QSELECT}} (`QS`, hoặc {{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Chọn nhanh}}) chọn mọi đối tượng khớp với một quy tắc, chẳng hạn mọi vòng tròn có bán kính dưới 50, hoặc mọi tham chiếu khối tên DOOR-900.

1. Mở {{ui:Chọn nhanh}}.
2. Chọn {{ui:Loại đối tượng}} (danh sách đếm số lượng của mỗi loại), rồi {{ui:Thuộc tính}}: {{ui:Lớp}}, {{ui:Màu}}, và với một số loại là {{ui:Chiều dài}}, {{ui:Bán kính}}, {{ui:Diện tích}}, {{ui:Chiều cao văn bản}}, {{ui:Nội dung văn bản}}, {{ui:Tên khối}} hoặc {{ui:Mẫu tô bóng}}.
3. Chọn {{ui:Toán tử}} và {{ui:Giá trị}}. `*` khớp với ký tự đại diện (`DOOR-*`); {{ui:Chọn tất cả}} lấy mọi đối tượng của loại đó. Số đếm ở cuối cho biết có bao nhiêu đối tượng khớp khi bạn chọn.
4. {{ui:Cách áp dụng}}: bao gồm các đối tượng khớp, hoặc mọi thứ còn lại. {{ui:Áp dụng cho}} {{ui:Vùng chọn hiện tại}} sẽ thu hẹp những gì bạn đã chọn; {{ui:Thêm vào vùng chọn hiện tại}} sẽ bổ sung vào đó.
5. Nhấp {{ui:Chọn}}. Sau đó chạy lệnh bạn muốn: nó sẽ dùng vùng chọn này.

## Chọn giống nhau

Chọn một hoặc nhiều đối tượng và gõ {{cmd:SELECTSIMILAR}} (`SIM`), hoặc chọn {{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Chọn giống nhau}}. Mọi đối tượng cùng loại, cùng lớp và cùng màu sẽ được chọn; các tham chiếu khối cũng cần cùng khối, các nét tô bóng cần cùng mẫu. Gõ `SE` tại lời nhắc `Chọn đối tượng` của lệnh đó để chọn điều kiện phải khớp.

## Chọn bây giờ, dùng sau

Gõ `SELECT` và nhấn {{key:Enter}}, chọn đối tượng bằng bất kỳ cách nào ở trên, rồi nhấn {{key:Enter}}. Chúng sẽ được giữ chọn cho lệnh tiếp theo, và `P` chọn lại chúng tại một lời nhắc `Chọn đối tượng:` về sau.

## Chọn tất cả

Khi không có lệnh nào đang chạy, nhấn {{key:Mod+A}}, hoặc chọn {{ui:Chọn tất cả}} trong menu {{ui:Chỉnh sửa}} › {{ui:Thêm}} của thanh công cụ, để chọn mọi đối tượng bạn có thể chỉnh sửa trên thẻ đang mở. Nếu bạn đã gõ gì đó trên dòng lệnh, {{key:Mod+A}} sẽ chọn đoạn văn bản đó thay vì đối tượng: hãy nhấn {{key:Esc}} để xóa nó trước. Tại lời nhắc `Chọn đối tượng:`, gõ `ALL`. {{ui:Bỏ chọn}} trong cùng menu, hoặc {{key:Esc}}, sẽ xóa vùng chọn.

:::tip
Nếu bạn muốn mỗi lần nhấp thay thế vùng chọn (và {{key:Shift}} thêm vào), hãy đặt {{ui:Nhấp đối tượng}} thành {{ui:Thay thế vùng chọn}} trong [cài đặt CadCraft](topic:settings).
:::

## Những gì không thể chọn

- Đối tượng trên lớp đang **tắt**, **đóng băng** hoặc **khóa**. Đối tượng bị khóa vẫn hiển thị, và bạn vẫn có thể bắt điểm vào chúng, nhưng không thể chọn hay thay đổi chúng.
- Trên thẻ tờ, mô hình hiển thị bên trong một khung nhìn. Bạn chọn các đối tượng riêng của tờ (khung tên, ghi chú, khung khung nhìn). Để chỉnh sửa mô hình, hãy chuyển sang thẻ {{ui:Mô hình}}.

## Xóa nhanh

Chọn đối tượng, rồi nhấn {{key:Delete}} (hoặc {{key:Backspace}} khi dòng lệnh không có con trỏ). Trên bàn phím Mac, phím có nhãn delete hoạt động sau khi bạn đã nhấp vào bản vẽ; khi dòng lệnh có con trỏ, hãy nhấn fn và delete cùng lúc. Thao tác này chạy {{cmd:ERASE}} trên vùng chọn. Nếu không có gì xảy ra, bạn đã gõ gì đó trên dòng lệnh: hãy nhấn {{key:Esc}}, hoặc gõ `E` rồi nhấn {{key:Enter}} thay thế.

## Lỗi thường gặp

- **Cửa sổ chọn quá ít.** Bạn kéo từ trái sang phải, nên chỉ lấy những gì nằm hoàn toàn bên trong. Hãy kéo từ phải sang trái để có khung cắt.
- **Nhấp vào khoảng trống đã bắt đầu một hộp.** Một lần nhấp vào khoảng trống sẽ bắt đầu một cửa sổ; lần nhấp thứ hai hoàn tất nó. Nhấn {{key:Esc}} hoặc nhấp chuột phải để hủy.
- **Nhấp vào khoảng trống làm mất vùng chọn.** Đúng như vậy, trừ khi bạn giữ {{key:Shift}}. Để giữ vùng chọn khi nhấp như thế và chỉ xóa bằng {{key:Esc}}, hãy đặt {{ui:Nhấp vào chỗ trống}} thành {{ui:Giữ vùng chọn}} trong [cài đặt CadCraft](topic:settings#clicking-an-empty-spot).
- **Lệnh tác động lên đối tượng bạn không định chọn.** Có thứ vẫn đang được chọn khi bạn bắt đầu lệnh. Nhấn {{key:Esc}} trước khi chạy lệnh để bắt đầu với không có gì được chọn.
- **Sau khi lệnh chạy xong, không có gì được chọn.** Điều này là cố ý: một lệnh đã xong sẽ xóa vùng chọn.
