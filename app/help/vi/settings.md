---
title: Cài đặt CadCraft
summary: Các cài đặt thuộc ứng dụng vẽ: kích thước con trỏ, nơi bản sao được dán treo theo con trỏ, nhấp sẽ làm gì với vùng chọn, thanh công cụ dùng bao nhiêu hàng, dòng lệnh nằm ở đâu và cao bao nhiêu, khu vực trên cùng gọn, và chỉ báo góc.
keywords: dòng lệnh, dòng lệnh nổi, nổi, neo, một dòng, f2, lịch sử lệnh, commandline, cmdline, toparea, khu vực trên cùng, gọn, cursorsize, con trỏ toàn màn hình, con trỏ toàn màn hình, từ mép đến mép, hàng thanh công cụ, hiển thị thanh công cụ, ctrl f1, cài đặt, tùy chọn, chỉ báo góc, khối xem, biểu tượng trục, biểu tượng ucs, con trỏ, chữ thập, ô chọn, điểm dán, điểm gốc, nhấp đối tượng, vùng chọn, pickadd, shift, đặt lại
from: 0896eb42
---

Mở {{ui:Cài đặt}} bằng biểu tượng bánh răng ở thanh ứng dụng hoặc bằng {{key:Mod+,}}. Thẻ đầu tiên, {{ui:CadCraft}}, chứa các cài đặt thuộc ứng dụng này; {{ui:Chung}} chứa những cài đặt mà mọi ứng dụng trong bộ đều dùng chung (giao diện, kích thước và độ rộng chữ của bảng, kiểu và thứ tự của thanh công cụ). Cài đặt của CadCraft chỉ tồn tại trong ứng dụng: bạn thay đổi chúng tại đây, và trình duyệt này sẽ ghi nhớ chúng. {{ui:Đặt lại cài đặt CadCraft}} đưa mọi cài đặt về trạng thái ban đầu.

## Con trỏ

**Nhỏ**, **Vừa** (mặc định), **Lớn** hoặc **Toàn màn hình**: kích thước của chữ thập và ô chọn trong bản vẽ. Ô chọn lớn hơn cũng chọn đối tượng từ xa hơn một chút, điều này hữu ích trên màn hình cảm ứng hoặc khi bản vẽ rất chi tiết.

**Toàn màn hình** kéo hai đường của chữ thập từ mép đến mép trong bản vẽ, kể cả khi không có lệnh nào đang chạy, để bạn có thể kiểm tra bằng mắt rằng hai thứ thẳng hàng trên toàn bộ khung nhìn. Khi khung nhìn được chia, các đường vẫn nằm trong khung bạn đang làm việc. Điều này tương đương với {{cmd:CURSORSIZE}} 100 của AutoCAD: gõ {{cmd:CURSORSIZE}} và 100 để có toàn màn hình; một số nhỏ hơn sẽ chọn kích thước gần nhất (dưới 5 là Nhỏ, từ 5 đến 9 là Vừa, từ 10 đến 99 là Lớn).

## Điểm dán

Vị trí treo của bản sao được dán theo con trỏ sau {{key:Mod+V}} ({{cmd:PASTECLIP}}), cho đến khi bạn nhấp:

- **Góc dưới bên trái** (mặc định): góc dưới bên trái của vùng bao của các đối tượng được sao chép, như trong AutoCAD.
- **Tâm**: điểm giữa vùng bao của chúng. Tiện để đặt một ký hiệu bằng mắt.

Bản sao được tạo bằng `COPYBASE` luôn treo từ điểm gốc bạn đã chọn. {{ui:Dán tại chỗ}} ({{key:Mod+Shift+V}}) bỏ qua cài đặt này: nó giữ nguyên tọa độ gốc. Xem [Sao chép, dán và nhân bản](topic:copy-paste).

## Nhấp đối tượng

Một lần nhấp trong bản vẽ làm gì với vùng chọn khi không có lệnh nào đang chạy:

- **Thêm vào vùng chọn** (mặc định): mỗi lần nhấp hoặc cửa sổ sẽ thêm đối tượng; {{key:Shift}}+nhấp, hoặc {{key:Shift}}+cửa sổ, sẽ bỏ chúng ra.
- **Thay thế vùng chọn**: một lần nhấp hoặc cửa sổ chỉ chọn những gì nó bắt được. {{key:Shift}}+nhấp sẽ thêm một đối tượng, hoặc bỏ một đối tượng đã được chọn; {{key:Shift}}+cửa sổ sẽ thêm vào.

Tại lời nhắc `Chọn đối tượng:` bên trong một lệnh, các lần nhấp luôn thêm vào (và {{key:Shift}} thì bỏ đi), bất kể cài đặt này. Xem [Chọn đối tượng](topic:select-objects).

## Nhấp vào chỗ trống

Một lần nhấp vào vị trí không có đối tượng làm gì khi không có lệnh nào đang chạy. Dù thế nào, nó cũng bắt đầu một cửa sổ chọn (lần nhấp thứ hai sẽ hoàn tất nó).

- **Xóa vùng chọn** (mặc định): những gì đang được chọn sẽ được bỏ. Giữ {{key:Shift}} khi nhấp để giữ lại.
- **Giữ vùng chọn**: vùng chọn được giữ nguyên, như trong các chương trình vẽ khác; cửa sổ sẽ thêm vào vùng chọn. Nhấn {{key:Esc}} để xóa vùng chọn.

## Kéo để chọn

Nhấn và kéo trên một chỗ trống sẽ vẽ:

- **Lasso** (mặc định): một đường viền tự do. Kéo sang phải trước sẽ chọn những gì nằm hoàn toàn bên trong, kéo sang trái trước sẽ chọn những gì nó chạm vào; {{key:Space}} khi đang kéo sẽ chuyển giữa cửa sổ, khung cắt và hàng rào.
- **Hình chữ nhật**: hộp, giống như khi bạn nhấp một lần rồi nhấp lần nữa để vẽ.

{{cmd:LASSOMODE}} `1` hoặc `0` đặt cùng một lựa chọn này. Xem [Chọn bằng lasso](topic:lasso-selection).

## Kéo để cắt và kéo dài

Nhấn trên một chỗ trống rồi kéo sẽ làm gì trong {{cmd:TRIM}} và {{cmd:EXTEND}}:

- **Một đường đi** (mặc định): một đường đi tự do; mọi đoạn mà nó cắt qua sẽ bị cắt (hoặc kéo dài).
- **Một cửa sổ**: một hộp; mọi đoạn mà nó chạm vào sẽ bị cắt, như tùy chọn `C` làm.

Xem [Cắt và kéo dài](topic:trim-and-extend).

## Vị trí thanh công cụ

{{ui:CadCraft}} › {{ui:Vị trí thanh công cụ}}: **Trên** (mặc định, như từ trước đến nay), **Dưới**, **Trái** hoặc **Phải**. Ở bên trái hoặc bên phải, các nhóm công cụ xếp thành một cột có thể cuộn khi nó cao hơn cửa sổ, và các nút được xếp hai hoặc ba trên mỗi dòng. Lựa chọn này được lưu cùng cài đặt của bạn, và {{cmd:TOOLBARDOCK}} (`TBDOCK`) đặt nó từ dòng lệnh. {{ui:Chung}} › {{ui:Đặt lại bố cục}} đưa thanh công cụ về phía trên.

Các thanh của kiểu menu nằm bên trong thanh công cụ và di chuyển cùng nó, nhưng kiểu {{ui:Dải lệnh}} được thiết kế để chạy ngang phía trên hoặc phía dưới: khi nằm ở một bên, nó có một cột hẹp có thể cuộn. Trên điện thoại, thanh công cụ vẫn ở nơi bố cục điện thoại đặt nó.

## Số hàng thanh công cụ

Các công cụ sử dụng bao nhiêu dòng phía trên bản vẽ, trong thanh công cụ CadCraft và trong các kiểu {{ui:Vẽ cổ điển}} và {{ui:Dải lệnh}}:

- **Tự xuống dòng vừa khung** (mặc định): các công cụ xuống dòng theo chiều rộng của cửa sổ.
- **2 hàng**: tối đa hai dòng. Khi các công cụ xuống dòng thành hai dòng hoặc ít hơn ở chiều rộng này, chúng chỉ xuống dòng; nếu không, chúng nằm trong hai hàng có thể cuộn ngang.
- **1 hàng**: một dòng có thể cuộn ngang, giúp bản vẽ có nhiều chỗ nhất.

{{key:Shift+Ctrl+F1}} lần lượt chuyển qua ba lựa chọn này, và {{cmd:TOOLBARROWS}} đặt một trong số đó. Các nút hiển thị gì (biểu tượng và chữ, chỉ biểu tượng, hoặc chỉ chữ) là một cài đặt của {{ui:Chung}} › {{ui:Thanh công cụ}}; {{key:Ctrl+F1}} lần lượt chuyển qua nó, và {{cmd:TOOLBAR}} đặt nó.

## Dòng lệnh

Dòng lệnh có thể nằm cố định bên dưới bản vẽ như trước đây, hoặc nổi lên trên bản vẽ, và có thể mỏng chỉ còn một dòng.

- **Làm nổi.** Kéo tay cầm ở đầu bên trái vào bản vẽ, hoặc chọn {{ui:Nổi trên bản vẽ}} trong menu {{ui:Tùy chọn dòng lệnh}} (ba chấm ở đầu bên phải). Kéo tay cầm lần nữa để di chuyển; vị trí của nó được giữ khi cửa sổ thay đổi kích thước. Kéo cạnh phải để làm nó rộng hơn hoặc hẹp hơn. Thả nó lên thanh trạng thái, hoặc chọn {{ui:Neo ở dưới}}, để neo lại.
- **Làm mỏng hoặc cao hơn.** Kéo cạnh trên: mỗi bước là một dòng lịch sử. Khi về không dòng, nó là **dòng lệnh một dòng**: chỉ có lời nhắc và những gì bạn gõ, và một thông báo mới hiện lên phía trên trong chốc lát. Nhấp đúp vào cạnh trên sẽ chuyển giữa một dòng và chiều cao bạn đã có.
- **Lịch sử.** {{key:F2}}, hoặc nút đồng hồ trên dòng lệnh ({{ui:Lịch sử lệnh (F2)}}), mở toàn bộ lịch sử phía trên dòng (phía dưới khi dòng nổi gần đỉnh cửa sổ). Việc gõ vẫn đi đến dòng lệnh; {{key:PageUp}} và {{key:PageDown}} cuộn lịch sử, và {{key:Esc}}, {{key:F2}} hoặc một cú nhấp ở nơi khác sẽ đóng nó. Phím riêng của bạn trên F2 sẽ được ưu tiên hơn.
- **Từ bàn phím.** Tay cầm là một nút: khi nó đang được chọn, các phím mũi tên di chuyển dòng lệnh nổi (với {{key:Shift}}, bước sẽ lớn hơn); {{key:Up}} làm nổi dòng đang neo, và {{key:Down}} ở mép dưới sẽ neo lại. Cạnh trên là một đường phân cách: {{key:Up}} và {{key:Down}} thêm hoặc bớt một dòng, {{key:Home}} đặt thành một dòng, {{key:End}} đặt thành cao nhất. Trình đọc màn hình vẫn đọc mọi thông báo, kể cả trong dòng lệnh một dòng.

{{ui:CadCraft}} › {{ui:Dòng lệnh}} có các lựa chọn tương tự: {{ui:Neo ở dưới cùng}} hoặc {{ui:Nổi}}, {{ui:Số dòng lịch sử hiển thị}} (0 đến 12) và {{ui:Chiều cao tiêu chuẩn}}. {{cmd:COMMANDLINE}} (`CMDLINE`) đặt chúng từ dòng lệnh. Vị trí và chiều cao được giữ cho CadCraft trong trình duyệt này cùng với phần còn lại của bố cục, nên một môi trường làm việc đã lưu sẽ mang theo chúng; {{ui:Chung}} › {{ui:Đặt lại bố cục}} sẽ neo dòng lệnh ở chiều cao tiêu chuẩn. Trên điện thoại, dòng lệnh vẫn neo với một dòng lịch sử; nút lịch sử cũng hoạt động ở đó.

Khi cửa sổ thấp và kiểm tra bố cục đề xuất một bố cục chặt hơn, nút {{ui:Có}} của nó cũng sẽ chuyển dòng lệnh thành một dòng nếu bản vẽ vẫn còn thấp sau khi các thanh công cụ được sắp xếp.

## Khu vực trên cùng

{{ui:CadCraft}} › {{ui:Khu vực trên cùng}}: **Tiêu chuẩn** (mặc định) hoặc **Gọn**. Gọn giữ các thanh phía trên bản vẽ nhỏ trong mọi kiểu menu: tên nhóm và các chữ dưới biểu tượng bị bỏ đi (chú giải công cụ và trình đọc màn hình vẫn có chúng), và các nút được thu gọn hơn. Nó hoạt động cùng với [Số hàng thanh công cụ](topic:settings#toolbar-rows): Gọn và **1 hàng** cho bản vẽ nhiều chỗ nhất. {{cmd:TOPAREA}} đặt nó.

## Chỉ báo góc

Những gì nằm ở góc bản vẽ:

- **Tự động** (mặc định): biểu tượng trục trên thẻ {{ui:Mô hình}} và khối xem trên thẻ {{ui:3D}}.
- **Biểu tượng trục**: dấu X và Y ở góc dưới bên trái của thẻ {{ui:Mô hình}}, và một dấu X, Y, Z nhỏ trên thẻ {{ui:3D}}.
- **Khối xem**: một khối lập phương ở góc trên bên phải của cả hai thẻ. Trên thẻ {{ui:Mô hình}}, nó hiển thị bản vẽ từ trên xuống, và nhấp vào một mặt, cạnh hoặc góc khác sẽ mở thẻ {{ui:3D}} nhìn từ đó. Trên thẻ 3D, nó xoay theo khung nhìn: nhấp để nhìn từ một bên, kéo để xoay quanh, và biểu tượng ngôi nhà sẽ đưa về góc nhìn đẳng trục. Xem [Mô hình trong 3D](topic:3d-solids).
- **Không có**: không có gì ở góc.

Tờ không hiển thị cả hai.

## Chiều dài và diện tích của vùng chọn

- **Trên thanh trạng thái** (mặc định): khi các đối tượng được chọn, thanh trạng thái hiển thị tổng chiều dài của chúng và tổng diện tích của các đối tượng khép kín. Xem [Tổng của vùng chọn](topic:properties-panel#totals-of-a-selection).
- **Ẩn**: thanh trạng thái không hiển thị chúng. Bảng thuộc tính vẫn hiển thị khi chọn nhiều đối tượng.

## Lưới, Ortho và bắt điểm

Những thứ này không có trong hộp thoại: các nút {{ui:Lưới}}, {{ui:Ortho}} và {{ui:Bắt điểm}} trên thanh trạng thái (hoặc {{key:F7}}, {{key:F8}}, {{key:F3}}) và danh sách các bắt điểm đối tượng bên cạnh chúng được ghi nhớ khi bạn thay đổi chúng. Xem [Bắt điểm vào điểm trên đối tượng](topic:object-snaps).
