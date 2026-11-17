---
title: Chưa xây dựng
summary: Những gì bản dựng CadCraft hiện tại chưa làm, và nên làm gì thay thế hôm nay.
keywords: thiếu, giới hạn, ctb, stb, kiểu nét in, thuộc tính, ucs, chú thích, khối động, spline, lộ trình, không được hỗ trợ, lưu dwg, tô bóng, kéo giãn, mảng, nối, matchprop, ngắt, kéo dài độ dài, kiểu đường, độ dày nét, xref, đám mây, 3d, khối đặc, phép bool, multileader, wipeout
from: 87e56521
---

CadCraft đang được phát triển. Trang này liệt kê những gì bản dựng hiện tại chưa làm, để bạn khỏi phải tìm. Mỗi mục nói rõ hôm nay nên làm gì thay thế.

## Tệp và lưu

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Một DWG của CadCraft được kiểm tra trong chính AutoCAD | Mọi phiên bản đã lưu đều được đọc lại bởi trình đọc DWG của ba chương trình khác và của CadCraft. Xem [DWG giữ và thay đổi những gì](topic:files#what-a-dwg-keeps-and-changes). |
| Lưu DXF mới hơn 2000 | Lưu thành DXF 2000, hoặc thành DWG đến AutoCAD 2018. |
| Lưu đè lên tệp đã mở trong trình duyệt | Mỗi lần lưu tải về một bản mới; tự thay thế tệp cũ nếu bạn muốn. Trong CadCraft Studio, {{key:Mod+S}} ghi trở lại tệp bạn đã mở. |
| Lưu lên đám mây và đồng bộ giữa các máy tính | CadCraft chưa gửi bản lưu lên đám mây: hãy giữ tệp DWG và DXF trong thư mục của riêng bạn. Trong CadCraft Studio, [Lịch sử](topic:history) liệt kê các phiên bản đám mây của một bản vẽ được lưu từ nơi khác, và các bản sao lưu của chính bạn trên máy tính này. |
| Lớp phủ (overlay), và chỉnh sửa bản vẽ liên kết ngay tại chỗ | Đính kèm bản vẽ dưới dạng liên kết và tải lại sau khi thay đổi bản vẽ kia. Liên kết vẫn là liên kết khi bạn lưu thành DWG, và {{cmd:XCLIP}} sẽ cắt nó. |
| Hình ảnh trong DXF; wipeout che phủ những gì bên dưới | DXF giữ hình ảnh như khung của nó, kèm tên tệp; DWG giữ như một hình ảnh — xem [Hình ảnh trong bản vẽ](topic:pictures). Một wipeout hiện như khung của nó. |
| Chỉnh sửa multileader có đường dẫn cong, có đường dẫn ở cả hai phía của nội dung, hoặc có khối bị xoay hay co giãn không đều | Chúng được vẽ như chương trình khác đã vẽ và di chuyển như một khối. Multileader có đường dẫn thẳng đến một điểm đặt, và văn bản hoặc khối làm nội dung, sẽ có thể chỉnh sửa ({{cmd:MLEADEREDIT}}). |
| Trong bảng từ chương trình khác: ô chứa khối, định dạng văn bản trong ô, viền và màu từng ô của bảng DXF, bảng tách thành cột | Bảng mở ra như một bảng có thể chỉnh sửa ({{cmd:TABLEDIT}}) và được hiển thị như chương trình khác đã vẽ cho đến khi bạn sửa; sau đó CadCraft vẽ lại từ các ô: văn bản thường, công thức như `=G3*H3` và `=Sum(I3:I9)`, căn lề và chiều cao chữ. Ô khối sau đó sẽ trống. Bảng DWG không sửa được được lưu lại cùng dữ liệu ô đi kèm. |
| Một đối tượng bảng thật trong DXF đã lưu | DWG giữ bảng như một bảng mà các chương trình khác có thể chỉnh sửa. DXF giữ nó như khối vẽ nó, kèm bản ghi riêng của CadCraft: CadCraft mở lại thành bảng; các chương trình khác thấy một khối. Bảng bị lật gương hoặc co giãn không đều cũng được lưu như vậy trong DWG. |
| Sao chép và dán với chương trình khác | Bộ nhớ tạm của CadCraft chỉ hoạt động giữa các bản vẽ và thẻ CadCraft trong cùng một trình duyệt, không với chương trình khác. Lưu thành DWG hoặc DXF và mở ở đó. Xem [Sao chép, dán và nhân bản](topic:copy-paste). |

## Vẽ và chỉnh sửa

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Mẫu tô bóng CadCraft chưa có, và tô chuyển màu đúng như chương trình khác tô | Tô bóng đã mở có mẫu CadCraft chưa có sẽ hiện như một tông màu. Tô chuyển màu ({{cmd:GRADIENT}}) được vẽ theo cách riêng của CadCraft cho từng loại: giống các chương trình khác về loại, không giống từng điểm. DWG 2004 trở lên giữ nó như một tô chuyển màu thật; trong tệp DXF 2000 hoặc DWG 2000 chỉ CadCraft đọc lại được, còn các chương trình khác thấy một tô đặc. Mẫu được nạp từ tệp `.pat`, và tô bóng có thể liên kết với biên của nó và theo nó: xem [Tô bóng và vùng tô](topic:hatch). |
| Kiểu đường có hình hoặc chữ trong đó, và độ dày nét trong DXF R12 đã lưu | Hình và chữ trong kiểu đường của tệp bị bỏ khỏi các đoạn nét đứt; lưu thành DWG để giữ độ dày nét. |
| Tô bóng có mẫu trong DXF đã lưu | R12 không có tô bóng: chúng được lưu thành đường viền. Lưu thành DWG để giữ mẫu. |
| Mảng do chương trình khác tạo hoặc có thể chỉnh sửa; hàng và tầng trong mảng theo đường dẫn và mảng cực; mảng bám theo đường cong đường dẫn | Mảng tạo bằng ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; đổi bằng {{cmd:ARRAYEDIT}}) được lưu như tham chiếu khối với số liệu riêng của CadCraft: các chương trình khác hiển thị, di chuyển, in và phân rã nó nhưng không đổi được số lượng; mảng do chương trình khác tạo mở ở đây như tham chiếu khối thường. Mảng theo đường dẫn giữ một bản sao đường dẫn của nó: sửa đường cong sau đó sẽ không làm các phần tử di chuyển. |
| Khung nhìn tờ đã cắt đến và đi từ chương trình khác | Khung nhìn được cắt bằng {{cmd:VPCLIP}} hoặc tạo bằng {{cmd:MVIEW}} Polygonal hoặc Object được lưu với đường viền riêng của CadCraft: chương trình khác mở nó như hình chữ nhật bao quanh; khung nhìn cắt trong chương trình khác mở ở đây như hình chữ nhật của nó. DXF R12 chỉ giữ hình chữ nhật. |
| {{cmd:STRETCH}} với đa giác chọn cắt | Dùng một hoặc nhiều cửa sổ chọn cắt. |
| {{cmd:PEDIT}} Chỉnh sửa đỉnh (từng đỉnh một trên dòng lệnh) | Grip, và trình duyệt đỉnh trong Thuộc tính (mọi đỉnh, độ rộng và độ phình của chúng). Phần còn lại của PEDIT đã có: xem [Spline và đa tuyến](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} và {{cmd:JOIN}} trên elip và spline | {{cmd:EXPLODE}} một spline (hoặc {{cmd:PEDIT}} nó) để có đa tuyến mà các lệnh này nhận. |
| Bo góc và vát mép giữa một đoạn cung của đa tuyến và đoạn kế bên; bo góc nối một đường thẳng vào đa tuyến | {{cmd:EXPLODE}} đa tuyến, rồi bo góc các phần. Cung bo góc được thêm như một đối tượng riêng. |
| Cắt và kéo dài: tùy chọn Chiếu (3D), và kéo dài đầu cung của đa tuyến | Cắt trong mặt phẳng của bản vẽ; với đầu cung, hãy phân rã đa tuyến hoặc vẽ lại cung. |
| Đối tượng OLE: chèn, chạy hoặc chỉnh sửa; hiển thị các đối tượng trong DWG nơi tệp đặt chúng; hình ảnh metafile | Xem [Hình ảnh](topic:pictures#objects-from-other-programs-ole). Đối tượng của DXF hiện như bitmap hoặc khung có nhãn; đối tượng của DWG được giữ lại, không vẽ tại chỗ (OLELIST liệt kê chúng và đặt một bản sao hình ảnh nơi bạn chỉ định). |
| Gõ mã định dạng (đậm, phân số xếp chồng, màu theo từng từ) trong văn bản đoạn; phông chữ khác phông kiểu Helvetica; cột | Định dạng có sẵn trong tệp được giữ, vẽ và lưu (xem Văn bản); văn bản đoạn mới có một chiều cao và một màu. |
| Văn bản đoạn được sửa khi đang xoay | Trình chỉnh sửa mở ở trạng thái thẳng; văn bản giữ góc xoay của nó. |
| Multileader được lưu như đối tượng multileader trong DXF | DWG giữ chúng như multileader, với mọi đường dẫn và khối làm nội dung; DXF giữ những gì chúng vẽ (đường thẳng, mũi tên, và văn bản hoặc khối). |
| Trong bảng ({{cmd:TABLE}}): văn bản xuống dòng trong ô, bảng tách thành nhiều phần, kiểu văn bản và màu theo từng loại hàng của kiểu bảng trong hộp thoại, liên kết dữ liệu với tệp bảng tính (`.xlsx`) hoặc tệp tự đọc | Văn bản trong ô chỉ ngắt chỗ bạn ngắt ({{key:Alt+Enter}}); hãy mở rộng cột. {{cmd:DATALINK}} đọc tệp `.csv`, và {{cmd:DATALINKUPDATE}} yêu cầu bạn chọn lại tệp. {{cmd:DATAEXTRACTION}} và {{cmd:COUNTTABLE}} tạo bảng không tự theo bản vẽ: hãy chạy lại chúng (đếm trực tiếp: {{cmd:BOMTABLE}}). |
| Định nghĩa thuộc tính giữ riêng trong tệp đã lưu (ngoài khối), thuộc tính nhiều dòng | Đưa định nghĩa thuộc tính vào khối trước khi lưu: đứng riêng, chúng được lưu như văn bản hiện thẻ. |
| Trạng thái lớp (lưu và khôi phục lớp nào đang bật) | Dùng {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, hoặc bật và tắt lớp bằng tay. |
| Chọn bằng đa giác cửa sổ và đa giác chọn cắt, và bộ lọc chọn đã lưu | Hàng rào (`F`), Cửa sổ, Chọn cắt, Gỡ bỏ (`R`), {{cmd:QSELECT}} cho một quy tắc. |

## Bảng Thuộc tính

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Vẽ các lựa chọn Fit, và vị trí văn bản ngang và văn bản dưới đường trên kích thước không phải thẳng hoặc song song | Chúng được giữ trên đối tượng, hiển thị trong {{ui:Properties}} và được lưu; CadCraft đặt văn bản theo quy tắc riêng của nó. |
| Vật liệu mà chương trình khác nhìn thấy | Tệp đã lưu giữ tên vật liệu cho CadCraft; chương trình khác hiển thị vật liệu của lớp. |
| Độ trong suốt trong DWG 2000 và tệp DXF | Chương trình khác hiển thị các đối tượng đó đặc; CadCraft giữ độ trong suốt. Lưu thành DWG 2004 trở lên để mọi người đều thấy. |
| Liên kết tô bóng tạo trong chương trình khác | CadCraft lưu liên kết riêng của nó trong tệp DWG và DXF 2000; liên kết tạo trong chương trình khác không được đọc. Dùng `HATCHEDIT` và Link: xem [Tô bóng và vùng tô](topic:hatch). |
| Tọa độ trong Thuộc tính ở UCS | Thuộc tính hiển thị tọa độ thế giới; thanh trạng thái và {{cmd:ID}} hiển thị tọa độ UCS. Xem [Xoay khung nhìn và dùng tọa độ riêng](topic:ucs-and-turned-view). |
| Vị trí riêng cho đối tượng chú thích ở mỗi tỷ lệ của nó; đọc các bản ghi theo tỷ lệ mà chương trình khác giữ | Văn bản hoặc kích thước chú thích giữ một danh sách tỷ lệ ({{cmd:OBJECTSCALE}}) và mỗi khung nhìn hiển thị nó với kích thước theo tỷ lệ của khung đó, tại cùng một vị trí. Danh sách được lưu như dữ liệu riêng của CadCraft: chương trình khác chỉ thấy đối tượng ở một tỷ lệ mà nó được định cỡ, và danh sách do chương trình khác tạo sẽ không được đọc. Xem [Đơn vị, tờ và tỷ lệ](topic:units-papers-scales#annotate-by-scale). |
| Đổi khoảng cách, góc hoặc lật của khối động; khối động vẫn động khi bạn lưu sang phiên bản DWG khác hoặc DXF | Đổi trạng thái hiển thị trong Thuộc tính › {{ui:Custom}}; các giá trị khác hiển thị ở đó ở chế độ chỉ đọc. Nó vẫn động khi bạn lưu thành DWG ở phiên bản mà bản vẽ đã đến. Xem [Khối động](topic:dynamic-blocks). |
| Dung sai khớp spline, bậc spline từ 6 trở lên, spline 3D | Điểm khớp và điểm điều khiển, bậc 1 đến 5 và trọng số đã có: xem [Spline và đa tuyến](topic:splines). Chiều cao (Z) của spline không được giữ. |

## Công cụ chính xác

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Truy vết từ các điểm qua nhiều lệnh, và hộp thoại cài đặt truy vết (góc cực tương đối, góc thêm) | {{cmd:POLARANG}} đặt bước; lấy lại các điểm trong lệnh kế tiếp. |
| Bắt vào lưới | Gõ tọa độ; lưới chỉ là hướng dẫn trực quan. |
| Tùy chọn Cung (A) và Độ dài (L) khi chọn các góc của một diện tích, và Thể tích của MEASUREGEOM | Vẽ đường viền bằng {{cmd:PLINE}} (kể cả cung), rồi {{cmd:AREA}} `O`. |
| Nhập động cho grip, và danh sách tùy chọn của nó (mũi tên xuống) | Dòng lệnh hiển thị các tùy chọn. |
| Góc theo độ-phút-giây, grad hoặc phương vị trắc địa | Gõ độ thập phân: `30.5` cho 30°30'. |
| Hộp thoại quản lý khung nhìn; khung nhìn đặt tên của một tờ quay lại đúng tờ đó | {{cmd:NAMEDVIEW}} liệt kê và khôi phục khung nhìn. Tệp đã lưu giữ chúng, nhưng khung nhìn của một tờ sẽ quay lại trên tờ đầu tiên. |

## Tờ, kích thước và in

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Trường cho tỷ lệ khung nhìn, đối tượng có tên như lớp hoặc khối, siêu liên kết, và trường bộ tờ ngoài số và tên tờ; trường được ghi như đối tượng trường mà chương trình khác cập nhật | {{cmd:FIELD}} có ngày, tên tệp, số và tên tờ, số lượng, thuộc tính của bản vẽ ({{cmd:DWGPROPS}}), diện tích, chiều dài và các thuộc tính khác của đối tượng, và công thức, trong văn bản, thuộc tính và ô bảng. Chương trình khác hiển thị trường của CadCraft như văn bản mà nó đọc lần cuối; CadCraft đọc các trường ngày, tên tệp, thuộc tính, tờ và biểu thức của chương trình khác, và để các loại khác là văn bản. Tỷ lệ khung nhìn được gõ bằng tay. |
| Lưu kiểu kích thước nào đang hiện hành; văn bản kích thước được kéo đến vị trí tự do | Bản vẽ mở ra với kiểu Standard hiện hành. Văn bản nằm trên đường kích thước (DIMTEDIT Left / Right / Center). Xem [Đặt cỡ kích thước](topic:dimension-settings). |
| Kích thước góc hai dòng có thể chỉnh sửa từ tệp mở mà CadCraft không suy ra được | Chúng hiển thị như đã vẽ trong tệp. Kích thước tọa độ, độ dài cung và bán kính gãy mở ra như kích thước có thể chỉnh sửa. |
| Kiểm tra trình đọc CTB với tệp của chương trình khác (đã có, theo mô tả công bố), kiểu nét in có tên (STB), dither, số bút, thang xám từ CTB và điều chỉnh kiểu đường thích ứng trong kiểu nét in | Lập bảng trong {{ui:Plot style tables}} (màu, xám, mực, độ dày nét, kiểu đường, kết thúc và nối đường, và kiểu tô theo từng màu): xem [Bảng kiểu nét in](topic:plot-pdf#plot-style-tables). |
| Thiết lập trang | Chọn giấy, tỷ lệ và kiểu nét in trong hộp thoại {{ui:Plot to PDF}}; một tờ giữ kiểu nét in của nó. |
| Tiếng Hindi và các chữ viết khác cần định hình phức tạp trong PDF, và chữ ideograph hiếm (chữ châu Âu, Kirin, Hy Lạp, Do Thái, Ả Rập, Ba Tư, Urdu, Thái, và khi in chữ Trung, Nhật, Hàn) | Chúng in ra thành "?". |
| Chữ viết Ả Rập cùng chữ Trung, Nhật hoặc Hàn trong cùng một PDF được in | Một bản in chỉ có một phông: một trong hai chữ viết sẽ in thành "?". |
| Dấu hướng tường minh trong văn bản (nhúng, ghi đè, cô lập) | Chúng bị bỏ qua: mỗi dòng được sắp xếp chỉ theo chữ cái của nó. |
| Hình ảnh trong trang PDF đính kèm, khi in | Các đường, tô và chữ của trang được in. Trang chỉ là hình ảnh được đưa vào bằng {{cmd:SCANATTACH}}, và hình ảnh sẽ được in. Xem [Lớp nền PDF](topic:pdf-underlay#plot-and-save). |
| Gửi công việc tới máy cắt laser từ CadCraft Studio (Studio không có Web Serial) | Lưu G-code và gửi bằng chương trình của máy laser, hoặc gửi từ Chrome hoặc Edge. Xem [Gửi bản vẽ tới máy laser](topic:laser-cutting#send-from-the-browser). |

## Ràng buộc và tham số

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Ràng buộc trên tờ, trong khối, trên elip, spline hoặc văn bản | Ràng buộc trên thẻ {{ui:Model}}, trên đường thẳng, đa tuyến, đường tròn, cung và điểm. |
| Trơn (G2), và ràng buộc trực tiếp độ phình cung của đa tuyến | Tiếp tuyến và bằng nhau; một đoạn cung bám theo hai đầu của nó. |
| Ràng buộc kích thước tham chiếu (bị dẫn), và `3Point` trong {{cmd:DCANGULAR}} | Kích thước thường (DIMLINEAR …) hiện một giá trị mà không điều khiển nó. |
| Ràng buộc kích thước có cỡ cố định trên giấy, và in chúng | Chúng chỉ hiện trên màn hình; thêm kích thước thường để in. |
| Ràng buộc được giữ qua EXPLODE, BREAK, JOIN và các lệnh khác tạo đối tượng mới, và trên đa tuyến đã cắt | Ràng buộc lại chúng (AUTOCONSTRAIN giúp được). {{cmd:MIRROR}} và {{cmd:TRIM}} của đường thẳng, cung và đường tròn giữ chúng. |
| Bảng thiết kế (cấu hình) trong CadCraft | Đổi tham số trong bảng điều khiển. |
| Vòng chuyển đổi đã kiểm thử với SolidWorks | Kiểm tra phác thảo mà macro tạo ra trước khi bạn dựa vào nó. |

## 3D

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Bo góc, vát mép, vỏ (shell) và chuyển tiếp (loft); quét dọc đường dẫn đi lên (đường dẫn 3D) | Đùn (extrude) đường viền có cung, đẩy và kéo mặt, quay tròn và quét dọc đường phẳng. |
| Đùn theo hướng khác với hướng lên | Vẽ hình trên mặt đất rồi đùn lên hoặc xuống (có độ thu hoặc dọc theo đường dẫn nếu bạn muốn); sau đó xoay khối. |
| Cao độ và độ dày của đối tượng 2D | Bản vẽ nằm trên mặt đất (cao độ 0) trên thẻ 3D. |
| Chỉnh sửa khối đặc, vùng và thân từ chương trình khác; hiển thị chúng trong khối; mặt của chúng trên bề mặt quét, chuyển tiếp hoặc bề mặt tự do khác; lưới đa diện (polyface) và lưới đa giác | Khối đặc trong không gian mô hình hiện trên thẻ 3D như chúng có, và được lưu lại không đổi trong DWG; những gì không vẽ được sẽ được liệt kê khi thẻ 3D mở. Yêu cầu lưới dưới dạng mặt 3D trong không gian mô hình. Xem [Khối đặc từ chương trình khác](topic:3d-solids#solids-from-other-programs). |
| Sao chép và dán khối đặc | Trên thẻ 3D, dùng {{cmd:COPY}}. Bộ nhớ tạm chỉ giữ đối tượng 2D. |
| Mặt cắt, khung nhìn theo các thay đổi sau này của khối đặc, và tô bóng khối đặc trên tờ in | {{cmd:VIEWBASE}} đặt các hình chiếu phẳng (ảnh chụp); hãy chạy lại sau khi thay đổi khối đặc. |
| Vật liệu, kết cấu và cài đặt ánh sáng | Các kiểu hiển thị: tô bóng, cạnh, đường ẩn, khung dây, tia X. |
| Lớp bản đồ được in, trên khung nhìn của tờ và trên thẻ 3D; hình ảnh từ tệp được lưu cùng bản vẽ; vị trí bản vẽ được ghi cho chương trình khác trong DWG 2000–2007 và DXF R12 | Lớp bản đồ hiển thị dưới không gian mô hình trên màn hình; hệ thống và danh sách lớp được lưu cùng bản vẽ: xem [Lớp bản đồ dưới bản vẽ](topic:map-layers). |
| Quét E57 trên 6 triệu điểm hoặc 512 MB, tệp riêng của hãng máy quét (RCP, RCS, FLS, LGS, TZF, ZFS), đám điểm được lưu cùng bản vẽ hoặc được in, bắt điểm vào đám trên thẻ 3D, lát cắt đứng (mặt cắt) trên thẻ Mô hình | Xuất các quét lớn hoặc quét riêng của hãng sang LAS hoặc LAZ ([Định dạng đám điểm](topic:point-cloud-formats)); đính kèm đám điểm mỗi lần mở bản vẽ; vẽ theo lát cắt mặt bằng trên thẻ Mô hình: xem [Vẽ đường thực tế trên đám điểm](topic:point-clouds). |
| Đăng ký quét: tự tìm mục tiêu (quả cầu, bàn cờ) trong quét, giải tất cả quét cùng lúc (bundle adjustment), tỷ lệ, đăng ký với mô hình | Chọn các điểm khớp hoặc gõ tọa độ mục tiêu, rồi tinh chỉnh từng quét một bằng ICP: xem [Đăng ký nhiều quét thành một](topic:register-scans). |

## Quy trình và tùy biến

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| LISP đã biên dịch hoặc được bảo vệ (.fas, .vlx), chương trình gốc (.arx, .crx, .dbx) và VBA (.dvb) | Nạp mã nguồn `.lsp` của quy trình bằng {{cmd:APPLOAD}}. |
| `grread` của LISP, reactor (`vlr-…`), hàm đường cong (`vlax-curve-…`), từ điển và dữ liệu mở rộng, `acet-…` của Express Tools | Phần còn lại của ngôn ngữ đều chạy: xem [Chạy quy trình LISP](topic:run-lisp). Dòng lệnh nêu tên một hàm bị thiếu khi quy trình gọi tới nó. |
| Hình và slide trong hộp thoại của quy trình | Chúng hiện như khung trống; phần còn lại của hộp thoại vẫn hoạt động. |
| CraftScript (.craft), Lua và Python trong CadCraft | Chạy chúng trong không gian làm việc Script của PartCraft. |
| Danh sách lớp, màu và kiểu đường trong kiểu menu dải lệnh | Dùng bảng {{ui:Layers}} và {{ui:Properties}}. |
| Bộ khởi động (Startup Suite) và bí danh lưu trên máy tính hoặc đồng bộ | Chúng được giữ trong trình duyệt này; ứng dụng máy tính và dịch vụ đám mây sẽ giữ chúng giúp bạn. Trong Studio, `acad.lsp` và `acaddoc.lsp` được đọc từ thư mục hỗ trợ bạn chọn (Nạp ứng dụng). |

## Trợ giúp

Trang trợ giúp mô tả bản dựng này. Khi có tính năng nào được thêm vào, nó sẽ chuyển khỏi trang này và sang các hướng dẫn từng bước.
