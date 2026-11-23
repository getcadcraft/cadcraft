---
title: Cài đặt CadCraft
summary: Các cài đặt thuộc ứng dụng vẽ: kích thước con trỏ, nơi bản sao được dán treo theo con trỏ, một cú nhấp làm gì với vùng chọn, số dòng thanh công cụ, dòng lệnh đặt ở đâu và cao bao nhiêu, khu vực trên gọn, và chỉ báo góc.
keywords: dòng lệnh, dòng lệnh nổi, nổi, neo, một dòng, f2, lịch sử lệnh, commandline, cmdline, toparea, khu vực trên, gọn, cursorsize, tâm ngắm toàn màn hình, con trỏ toàn màn hình, từ mép đến mép, số dòng thanh công cụ, hiển thị thanh công cụ, ctrl f1, cài đặt, tùy chọn, chỉ báo góc, biểu tượng trục, biểu tượng UCS, con trỏ, tâm ngắm, ô chọn, điểm dán, điểm gốc, nhấp vào đối tượng, vùng chọn, pickadd, shift, đặt lại
from: ae1a81db
---

Mở {{ui:Cài đặt}} bằng bánh răng trên thanh ứng dụng hoặc {{key:Mod+,}}. Thẻ đầu tiên, {{ui:CadCraft}}, giữ các cài đặt thuộc ứng dụng này; {{ui:Chung}} giữ những cài đặt mà mọi ứng dụng trong bộ dùng chung (giao diện, cỡ chữ và độ rộng bảng, diện mạo và thứ tự thanh công cụ). Cài đặt của CadCraft chỉ tồn tại trong ứng dụng: bạn đổi chúng ở đây, và trình duyệt này ghi nhớ chúng. {{ui:Đặt lại cài đặt CadCraft}} đưa mọi cài đặt về ban đầu.

## Con trỏ

**Nhỏ**, **Vừa** (ban đầu), **Lớn** hoặc **Toàn màn hình**: kích thước của tâm ngắm và ô chọn trong bản vẽ. Ô chọn lớn hơn cũng chọn đối tượng từ xa hơn một chút, điều này hữu ích trên màn hình cảm ứng hoặc bản vẽ rất mịn.

**Toàn màn hình** chạy hai đường của tâm ngắm từ mép này sang mép kia của bản vẽ, ngay cả khi không có lệnh nào đang chạy, để bạn có thể kiểm tra bằng mắt rằng hai thứ thẳng hàng trên toàn bộ khung nhìn. Khi khung nhìn được chia, các đường chỉ ở trong khung bạn đang làm việc. Giống {{cmd:CURSORSIZE}} 100 của AutoCAD: gõ {{cmd:CURSORSIZE}} và 100 cho toàn màn hình; một số nhỏ hơn chọn kích thước gần nhất (dưới 5 là Nhỏ, từ 5 đến 9 là Vừa, từ 10 đến 99 là Lớn).

## Điểm dán

Nơi một bản sao đã dán treo theo con trỏ sau {{key:Mod+V}} ({{cmd:PASTECLIP}}), cho đến khi bạn nhấp:

- **Góc dưới-trái** (ban đầu): góc dưới-trái của phạm vi các đối tượng đã sao chép, như trong AutoCAD.
- **Tâm**: giữa phạm vi của chúng. Tiện để đặt một ký hiệu bằng mắt.

Bản sao được tạo bằng `COPYBASE` luôn treo từ điểm gốc bạn đã chọn. {{ui:Dán tại chỗ}} ({{key:Mod+Shift+V}}) bỏ qua cài đặt này: nó giữ tọa độ gốc. Xem [Sao chép, dán và nhân bản](topic:copy-paste).

## Nhấp vào đối tượng

Một cú nhấp trong bản vẽ làm gì với vùng chọn khi không có lệnh nào đang chạy:

- **Thêm vào vùng chọn** (ban đầu): mỗi cú nhấp hoặc cửa sổ thêm đối tượng; {{key:Shift}}+nhấp, hoặc {{key:Shift}}+cửa sổ, bỏ chúng ra.
- **Thay thế vùng chọn**: một cú nhấp hoặc cửa sổ chỉ chọn những gì nó bắt được. {{key:Shift}}+nhấp thêm một đối tượng, hoặc bỏ một đối tượng đã được chọn; {{key:Shift}}+cửa sổ thì thêm.

Tại lời nhắc `Select objects:` bên trong một lệnh, các cú nhấp luôn thêm (và {{key:Shift}} bỏ), bất kể cài đặt này. Xem [Chọn đối tượng](topic:select-objects).

## Nhấp vào chỗ trống

Một cú nhấp nơi không có đối tượng làm gì khi không có lệnh nào đang chạy. Cả hai cách đều bắt đầu một cửa sổ chọn (cú nhấp thứ hai hoàn tất nó).

- **Xóa vùng chọn** (ban đầu): những gì đã chọn được bỏ. Giữ {{key:Shift}} khi nhấp để giữ lại.
- **Giữ vùng chọn**: vùng chọn ở lại, như trong các chương trình vẽ khác; cửa sổ thêm vào nó. Nhấn {{key:Esc}} để xóa vùng chọn.

## Kéo để chọn

Nhấn và kéo trên một chỗ trống sẽ vẽ gì:

- **Lasso** (ban đầu): một đường viền tự do. Di chuyển sang phải trước sẽ chọn những gì nằm trọn bên trong nó, sang trái trước thì chọn những gì nó chạm; {{key:Space}} khi đang kéo chuyển giữa cửa sổ, giao và hàng rào.
- **Hình chữ nhật**: hộp, như một cú nhấp và một cú nhấp thứ hai vẽ nó.

{{cmd:LASSOMODE}} `1` hoặc `0` đặt cùng cài đặt. Xem [Chọn bằng lasso](topic:lasso-selection).

## Kéo để cắt và kéo dài

Nhấn trên một chỗ trống và kéo làm gì trong {{cmd:TRIM}} và {{cmd:EXTEND}}:

- **Một đường** (ban đầu): một đường tự do; mọi đoạn nó cắt qua sẽ bị cắt (hoặc kéo dài).
- **Một cửa sổ**: một hộp; mọi đoạn nó chạm sẽ bị cắt, như tùy chọn `C` làm.

Xem [Cắt và kéo dài](topic:trim-and-extend).

## Vị trí thanh công cụ

{{ui:CadCraft}} › {{ui:Vị trí thanh công cụ}}: **Trên** (ban đầu, như vẫn có), **Dưới**, **Trái** hoặc **Phải**. Ở bên trái hoặc phải, các nhóm công cụ xếp thành một cột cuộn khi nó cao hơn cửa sổ, và các nút xuống dòng hai hoặc ba cái một hàng. Lựa chọn được lưu cùng cài đặt của bạn, và {{cmd:TOOLBARDOCK}} (`TBDOCK`) đặt nó từ dòng lệnh. {{ui:Chung}} › {{ui:Đặt lại bố cục}} đưa thanh công cụ về trên cùng.

Các thanh của kiểu menu nằm trong thanh công cụ và di chuyển cùng nó, nhưng kiểu {{ui:Dải lệnh}} được làm để chạy ngang trên cùng hoặc dưới cùng: ở cạnh nó được một cột hẹp cuộn. Trên điện thoại, thanh công cụ ở nơi bố cục điện thoại đặt nó.

## Số dòng thanh công cụ

Có bao nhiêu dòng công cụ dùng phía trên bản vẽ, trong thanh công cụ CadCraft và trong các kiểu {{ui:Vẽ cổ điển}} và {{ui:Dải lệnh}}:

- **Xuống dòng để vừa** (ban đầu): các công cụ xuống dòng theo chiều rộng của cửa sổ.
- **2 dòng**: tối đa hai hàng. Khi các công cụ xuống dòng thành hai hàng hoặc ít hơn ở chiều rộng này, chúng chỉ xuống dòng; nếu không, chúng nằm trong hai hàng cuộn ngang.
- **1 dòng**: một hàng cuộn ngang, để bản vẽ có nhiều chỗ nhất.

{{key:Shift+Ctrl+F1}} lần lượt qua ba lựa chọn, và {{cmd:TOOLBARROWS}} đặt một cái. Các nút hiện gì (biểu tượng và chữ, chỉ biểu tượng, hoặc chỉ chữ) là một cài đặt của {{ui:Chung}} › {{ui:Thanh công cụ}}; {{key:Ctrl+F1}} lần lượt qua nó và {{cmd:TOOLBAR}} đặt nó.

## Dòng lệnh

Dòng lệnh có thể ở yên dưới bản vẽ, như vẫn có, hoặc nổi trên nó, và có thể mỏng như một dòng.

- **Làm nổi.** Kéo tay cầm ở đầu trái của nó vào bản vẽ, hoặc chọn {{ui:Nổi trên bản vẽ}} trong menu {{ui:Tùy chọn dòng lệnh}} (ba chấm ở đầu phải). Kéo tay cầm lần nữa để di chuyển nó; vị trí được giữ khi cửa sổ đổi cỡ. Kéo cạnh phải của nó để làm rộng hơn hoặc hẹp hơn. Thả nó lên thanh trạng thái, hoặc chọn {{ui:Neo ở dưới}}, để neo lại.
- **Làm mỏng hoặc cao hơn.** Kéo cạnh trên của nó: mỗi bước là một dòng lịch sử. Xuống không dòng nào là một **dòng lệnh một dòng**: chỉ lời nhắc và những gì bạn gõ, và một thông báo mới hiện phía trên nó trong chốc lát. Nhấp đúp cạnh trên chuyển giữa một dòng và chiều cao bạn đã có.
- **Lịch sử.** {{key:F2}}, hoặc nút đồng hồ trên dòng lệnh ({{ui:Lịch sử lệnh (F2)}}), mở toàn bộ lịch sử phía trên dòng (phía dưới khi dòng nổi gần đầu cửa sổ). Gõ vẫn đi đến dòng lệnh; {{key:PageUp}} và {{key:PageDown}} cuộn lịch sử, và {{key:Esc}}, {{key:F2}} hoặc một cú nhấp ở chỗ khác đóng nó. Một phím của riêng bạn trên F2 thắng việc này.
- **Từ bàn phím.** Tay cầm là một nút: khi nó được chọn tiêu điểm, các phím mũi tên di chuyển dòng lệnh nổi (với {{key:Shift}}, bước lớn hơn); {{key:Up}} làm nổi dòng đã neo và {{key:Down}} ở cạnh dưới thì neo lại. Cạnh trên là một dải phân cách: {{key:Up}} và {{key:Down}} thêm hoặc bớt một dòng, {{key:Home}} làm nó thành một dòng, {{key:End}} là cao nhất. Trình đọc màn hình vẫn đọc mọi thông báo, kể cả ở dòng lệnh một dòng.

{{ui:CadCraft}} › {{ui:Dòng lệnh}} có cùng các lựa chọn: {{ui:Neo ở dưới cùng}} hoặc {{ui:Nổi}}, {{ui:Số dòng lịch sử hiển thị}} (0 đến 12) và {{ui:Chiều cao chuẩn}}. {{cmd:COMMANDLINE}} (`CMDLINE`) đặt chúng từ dòng lệnh. Vị trí và chiều cao được giữ cho CadCraft trong trình duyệt này cùng phần bố cục còn lại, nên một môi trường làm việc đã lưu mang theo chúng; {{ui:Chung}} › {{ui:Đặt lại bố cục}} neo dòng lệnh lại ở chiều cao chuẩn. Trên điện thoại, dòng lệnh vẫn neo với một dòng lịch sử; nút lịch sử cũng hoạt động ở đó.

Khi cửa sổ thấp và kiểm tra bố cục đề nghị một bố cục chặt hơn, nút {{ui:Có}} của nó cũng đổi dòng lệnh thành một dòng nếu bản vẽ vẫn ngắn sau các thanh công cụ.

{{ui:CadCraft}} › {{ui:Ký tự tùy chọn}} giữ các chữ cái bạn đã chọn cho tùy chọn lệnh: {{ui:Sửa…}} mở tệp, {{ui:Nhập…}} thay nó bằng một tệp bạn chọn, và {{ui:Xuất}} lưu nó. Xem [Đặt ký tự riêng cho tùy chọn lệnh](topic:option-letters).

## Khu vực trên

{{ui:CadCraft}} › {{ui:Khu vực trên cùng}}: **Chuẩn** (ban đầu) hoặc **Gọn**. Gọn giữ các thanh phía trên bản vẽ nhỏ trong mọi kiểu menu: tên nhóm và chữ dưới biểu tượng bị bỏ (chú giải công cụ và trình đọc màn hình vẫn có chúng), và các nút chặt hơn. Nó hoạt động cùng [Số dòng thanh công cụ](topic:settings#toolbar-rows): Gọn và **1 dòng** cho bản vẽ nhiều chỗ nhất. {{cmd:TOPAREA}} đặt nó.

## Chỉ báo góc

Những gì nằm ở góc bản vẽ:

- **Tự động** (ban đầu): biểu tượng trục trên thẻ {{ui:Mô hình}} và khối xem trên thẻ {{ui:3D}}.
- **Biểu tượng trục**: dấu X và Y ở góc dưới-trái của thẻ {{ui:Mô hình}}, và một dấu X, Y và Z nhỏ trên thẻ 3D.
- **Khối xem**: một khối ở góc trên-phải của cả hai thẻ. Trên thẻ {{ui:Mô hình}} nó hiện bản vẽ từ trên, và nhấp một mặt, cạnh hoặc góc khác sẽ mở thẻ {{ui:3D}} nhìn từ đó. Trên thẻ 3D nó xoay theo khung nhìn: nhấp để nhìn từ một bên, kéo để quay quanh, và ngôi nhà quay về khung nhìn isometric. Xem [Mô hình 3D](topic:3d-solids).
- **Không có**: không có gì ở góc.

Tờ không hiện cái nào.

## Độ dài và diện tích của vùng chọn

- **Trên thanh trạng thái** (ban đầu): khi có đối tượng được chọn, thanh trạng thái hiện tổng chiều dài của chúng và tổng diện tích của các cái khép kín. Xem [Tổng của vùng chọn](topic:properties-panel#totals-of-a-selection).
- **Ẩn**: thanh trạng thái bỏ chúng đi. Thuộc tính vẫn hiện chúng cho nhiều đối tượng.

## Lưới, Ortho và bắt điểm

Chúng không nằm trong hộp thoại: các nút {{ui:Lưới}}, {{ui:Ortho}} và {{ui:Bắt điểm}} trên thanh trạng thái (hoặc {{key:F7}}, {{key:F8}}, {{key:F3}}) và danh sách bắt điểm đối tượng bên cạnh được ghi nhớ khi bạn rời khỏi chúng. Xem [Bắt vào điểm trên đối tượng](topic:object-snaps).
