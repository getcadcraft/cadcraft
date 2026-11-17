---
title: Có gì mới trong 0.7 (trước đó)
summary: Lớp nền PDF và nhập PDF, bản vẽ quét có vết dò tự động, spline thực với SPLINE, SPLINEDIT và PEDIT, trình quản lý kiểu kích thước, văn bản giữ định dạng, WBLOCK và tỷ lệ riêng của bạn, khối 3D từ chương trình khác, đăng ký bản quét, bảng Laser, xuất USD, Lịch sử và in trong CadCraft Studio, hướng dẫn bản vẽ đầu tiên, thanh công cụ ở bất kỳ cạnh nào hoặc trong ít dòng hơn, và nhiều hơn nữa cho trợ lý AI.
keywords: có gì mới 0.7, phiên bản trước, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, pdf, pdfattach, pdfimport, lớp nền, quét, scanattach, scantrace, vết dò, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, định dạng, wblock, scalelistedit, danh sách tỷ lệ, acis, khối 3D, registerscans, đăng ký bản quét, icp, e57, las, laser, grbl, g-code, usd, usdout, lịch sử, các phiên bản, so sánh, in, máy in, png, svg, kiểu in, kiểu đường, hướng dẫn, bảng tra cứu nhanh, bản đồ lệnh, vị trí thanh công cụ, số dòng thanh công cụ, toolbardock, regen, regenall, bàn di chuột, vuốt, bảng mã, chữ Kirin, tiếng Hàn, tiếng Trung, tiếng Nhật, điện, rcd, p&id, pid, acad.lsp, acaddoc.lsp, thư mục hỗ trợ, trợ lý, mcp, đơn vị, tiếng Bồ Đào Nha
from: d07ca034
---

Đây là những gì đã thay đổi trong CadCraft 0.7, so với 0.6. Phần lớn được yêu cầu trên Discord. Danh sách được nhóm theo khu vực, với những điều quan trọng nhất đứng đầu.

## Mới

### PDF và bản vẽ quét

- **Đặt một trang PDF dưới bản vẽ.** {{cmd:PDFATTACH}} (`PDFATT`) đặt một trang ở kích thước thật hoặc tỷ lệ bạn gõ. Bắt điểm vào các đường của nó, làm mờ, chuyển sang đơn sắc ({{cmd:PDFADJUST}}), cắt xén ({{cmd:PDFCLIP}}) và bật hoặc tắt các lớp riêng của PDF ({{cmd:PDFLAYERS}}). Nó được in như đường, nét tô và văn bản, và DWG hoặc DXF 2000 giữ nó như một liên kết tới tệp. Mở một PDF bằng {{ui:Mở}} sẽ hỏi bạn muốn đính kèm hay nhập. Xem [Lớp nền PDF và nhập PDF](topic:pdf-underlay).
- **Biến một trang PDF thành đối tượng bản vẽ.** {{cmd:PDFIMPORT}} (`PDFIM`) tạo đường thẳng, đa tuyến, vòng tròn, cung tròn, tô bóng (hatch) đặc và văn bản trên các lớp đặt theo tên PDF, ở kích thước thật, theo tỷ lệ bạn gõ, hoặc tỷ lệ theo hai điểm và một khoảng cách thật, trong một bước hoàn tác. Xem [Nhập một trang](topic:pdf-underlay#import-a-page).
- **Bản vẽ quét.** {{cmd:SCANATTACH}} đưa vào một tệp PNG, JPEG hoặc TIFF (một trang hoặc tất cả) hoặc một trang PDF là ảnh. Sau đó bạn có thể đặt tỷ lệ theo hai điểm ({{cmd:SCANSCALE}}), căn chỉnh ({{cmd:SCANALIGN}}), làm thẳng góc theo các đường dài của chính nó ({{cmd:SCANDESKEW}}), chuyển sang đen trắng và xóa các đốm bẩn ({{cmd:SCANCLEAN}}), cắt xén và xóa một phần của nó. Mỗi bước là một bước hoàn tác và tệp gốc được giữ lại. Xem [Bản vẽ quét và vết dò](topic:scanned-drawings).
- **Dò một bản quét thành đường và cung.** {{cmd:SCANTRACE}} vẽ các đường của bản quét thành đường thẳng và cung trên một lớp mới, SCAN-TRACE, theo dung sai bạn đặt, và giữ nguyên văn bản và tô bóng. Báo cáo cho biết đã tạo gì và để lại gì, và nó không khẳng định kết quả là đúng: hãy kiểm tra với bản vẽ gốc. {{cmd:RASTERSNAP}} cho phép bắt điểm đối tượng tìm các đầu, góc và giao điểm của bản quét. Không có gì được gửi đi đâu và không dùng mô hình đã huấn luyện nào. Xem [Vết dò](topic:scanned-drawings#the-trace).

### Vẽ và chỉnh sửa

- **Spline thật.** {{cmd:SPLINE}} (`SPL`) vẽ một đường cong qua các điểm hoặc từ các điểm điều khiển (bậc 1 đến 5), với tiếp tuyến ở hai đầu; {{cmd:SPLINEDIT}} (`SPE`) di chuyển, thêm và xóa các điểm khớp hoặc điểm điều khiển, đặt trọng số, mở, đóng, đảo chiều, hoặc biến một spline thành đa tuyến. Spline từ tệp DWG và DXF mở ra như spline, và DWG và DXF 2000 lưu chúng như spline. Xem [Spline và đa tuyến](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) đóng và mở đa tuyến, nối đường thẳng và cung vào chúng, đặt một độ rộng, khớp một đường cong qua các đỉnh hoặc một spline dọc theo chúng và đưa lại về bằng Decurve, đảo chiều, và sửa nhiều đối tượng cùng lúc. Xem [Sửa một đa tuyến](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) ghi một khối, một số đối tượng hoặc toàn bộ bản vẽ ra một tệp DWG hoặc DXF mới, chỉ chứa các lớp, kiểu và khối mà chúng dùng. Xem [Ghi một khối hoặc đối tượng ra tệp riêng](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN và REGENALL.** {{cmd:REGEN}} (`RE`) vẽ lại thẻ bạn đang ở từ bản vẽ, {{cmd:REGENALL}} (`REA`) vẽ lại mọi thẻ, khung và bản vẽ đang mở. Xem [REGEN và REGENALL](topic:commands#regen-and-regenall).

### Văn bản và kích thước

- **Văn bản giữ định dạng.** Văn bản đoạn từ chương trình khác giữ màu theo từng từ, đậm và nghiêng, gạch chân, phân số xếp chồng và chiều cao: chúng được vẽ trên màn hình và trong PDF, được giữ khi bạn sửa các từ, và được lưu lại. Xem [Định dạng bên trong văn bản đoạn từ chương trình khác](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Trình quản lý kiểu kích thước.** {{cmd:DIMSTYLE}} (`D`) tạo, thay đổi, so sánh và áp dụng các kiểu kích thước có tên; thay đổi một kiểu sẽ thay đổi mọi kích thước dùng nó. {{cmd:DIMEDIT}} (`DED`) đưa văn bản về vị trí mặc định, gõ văn bản mới, xoay văn bản hoặc làm nghiêng các đường gióng; {{cmd:DIMTEDIT}} di chuyển văn bản sang trái, sang phải hoặc vào giữa. Xem [Kiểu kích thước có tên](topic:dimension-settings#named-dimension-styles).
- **Tỷ lệ riêng của bạn.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) thêm các tỷ lệ như 1:75 vào danh sách tỷ lệ của khung nhìn và của bản in; chúng được lưu trong bản vẽ (DWG và DXF 2000), và một bản vẽ từ chương trình khác mang theo danh sách riêng của nó. Xem [Tỷ lệ](topic:units-papers-scales#scales).
- **Văn bản trong các bảng chữ cái khác.** Các tệp DXF được lưu bằng bảng mã Kirin, Hàn, Trung, Nhật hoặc Việt giờ mở ra với văn bản của chúng, và văn bản tiếng Trung, Nhật và Hàn được in trong PDF (lần đầu cần, bản in sẽ tải một phông lớn hơn). Xem [Phông](topic:text#font).

### In ấn

- **Thêm trong bảng kiểu in.** Với mỗi màu, một bảng giờ còn có thể đặt kiểu đường, đầu và nối nét, và một kiểu tô để in các nét tô đặc thành đường hatch; bảng có danh sách độ dày nét riêng và tỷ lệ kiểu đường. Xem [Bảng kiểu in](topic:plot-pdf#plot-style-tables).
- **In, và các tệp PNG và SVG.** Hộp thoại In có {{ui:In…}}, {{ui:Tải xuống PNG}} (300 dpi) và {{ui:Tải xuống SVG}}. Trong CadCraft Studio, nó liệt kê các máy in của máy tính, giấy của chúng và số bản sao. Xem [In](topic:plot-pdf#print) và [Tệp ảnh và SVG](topic:plot-pdf#picture-and-svg-files).

### 3D và đám điểm

- **Khối 3D từ chương trình khác.** Khối đặc, vùng và thân trong không gian mô hình của bản vẽ hiển thị trên thẻ 3D, chỉ đọc, và khi lưu thành DWG sẽ được ghi lại nguyên vẹn. Các mặt trên bề mặt mà CadCraft chưa vẽ được liệt kê, không đoán. Xem [Khối đặc từ chương trình khác](topic:3d-solids#solids-from-other-programs).
- **Đăng ký nhiều bản quét.** {{cmd:REGISTERSCANS}} (`REGSCAN`) đặt các bản quét chụp từ các vị trí khác nhau vào một khung chung, bằng cặp điểm hoặc tọa độ đích gõ vào, tinh chỉnh bằng ICP, lưu việc đăng ký thành một tệp dự án nhỏ, và ghi đám điểm đã đăng ký thành một tệp LAS hoặc E57. Xem [Đăng ký nhiều bản quét thành một](topic:register-scans).
- **Xuất USD.** {{cmd:USDOUT}}, hoặc {{cmd:EXPORT3D}} › {{ui:USD}}, ghi các khối đặc của thẻ 3D thành `.usda`, `.usdc` hoặc `.usdz`. Xem [Xuất mô hình 3D sang USD](topic:usd).
- **Tính toán trên thẻ 3D.** Ở chỗ các công cụ của thẻ 3D yêu cầu một khoảng cách, bạn có thể gõ một phép tính, như trên dòng lệnh. Xem [Phép tính trong một giá trị gõ vào](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Làm sản phẩm

- **Gửi bản vẽ đến máy laser.** {{cmd:LASER}}, hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Laser…}}, mở một bảng trên bản vẽ: mỗi lớp được cắt, khắc vạch, khắc đường, tô hình, khắc một ảnh, hoặc không gửi, cùng với công suất, tốc độ và số lượt. Bản xem trước theo các chỉnh sửa của bạn, {{ui:Lưu G-code…}} ghi G-code chế độ laser GRBL, và trong Chrome hoặc Edge bảng có thể vẽ khung công việc và gửi qua USB. Các cài đặt được lưu trong bản vẽ (DWG và DXF). Xem [Gửi bản vẽ đến máy laser](topic:laser-cutting).
- **Ký hiệu lắp đặt công trình trong tiện ích Điện.** Ổ cắm dữ liệu, điện thoại và TV, công tắc khóa và công tắc hẹn giờ, bộ điều nhiệt, biển thoát hiểm, đầu dò, điểm gọi và còi báo, quạt, bình nóng lạnh, bếp, điểm sạc xe điện, đồng hồ đo điện và bảng con, và các ký hiệu RCD và RCBO. Một mạch có thể mang một RCD, bảng lịch tủ điện có một cột RCD, và các kiểm tra nêu tên các mạch ổ cắm không có RCD 30 mA trở xuống. Đây là lời nhắc khi lập kế hoạch, không phải kiểm tra theo quy chuẩn.
- **Tiện ích P&ID.** P&ID vẽ sơ đồ quy trình: ký hiệu có điểm nối, đường quy trình và đường tín hiệu, nhãn, số đường, danh sách đường, thiết bị, thiết bị đo và van (CSV hoặc bảng tính), và các kiểm tra. Nó đi kèm CadCraft và tắt cho đến khi bạn bật trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Tiện ích bổ sung}}. Đây là công cụ hỗ trợ vẽ, không phải phê duyệt kỹ thuật, và các chữ của nó hiện chỉ có bằng tiếng Anh.

### Bắt đầu và màn hình

- **Bản vẽ đầu tiên có hướng dẫn.** {{cmd:TOUR}} (hoặc {{ui:Xem hướng dẫn}} trên thẻ bắt đầu) dẫn bạn qua sáu bước trong bản vẽ thật: một đường thẳng, một vòng tròn, một di chuyển, một cắt, một xóa và một kích thước. Nó tự bắt đầu lần đầu CadCraft mở khi không có gì trong đó. Xem [Muốn được hướng dẫn?](topic:getting-started#prefer-to-be-guided)
- **Bảng tra cứu nhanh và bản đồ lệnh.** [Bảng tra cứu nhanh](topic:cheat-sheet) có 40 lệnh thường dùng trên một trang, cũng dưới dạng PDF để in, và [bản đồ lệnh](topic:command-map) liệt kê các lệnh cùng tên ngắn, từ A đến Z.
- **Thanh công cụ ở mọi cạnh.** {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Vị trí thanh công cụ}}: trên (như trước), dưới, trái hoặc phải, hoặc gõ {{cmd:TOOLBARDOCK}}. Xem [Vị trí thanh công cụ](topic:settings#toolbar-position).
- **Số dòng thanh công cụ.** {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Số dòng thanh công cụ}}: tự xuống dòng vừa khít, 2 dòng hoặc 1 dòng, cho thanh công cụ CadCraft và các kiểu Drafting classic và Ribbon. {{key:Shift+Ctrl+F1}} lần lượt qua các chế độ, {{key:Ctrl+F1}} qua những gì các nút hiển thị, và {{cmd:TOOLBARROWS}} và {{cmd:TOOLBAR}} đặt chúng. Gợi ý khi khởi động có nút đóng. Cảm ơn GJoe2, người đã gửi điều này dưới dạng một pull request. Xem [Số dòng thanh công cụ](topic:settings#toolbar-rows).

### Trong CadCraft Studio

- **Lịch sử.** {{cmd:HISTORY}} (`HIST`), hoặc {{ui:Khung nhìn}} › {{ui:Thêm}} › {{ui:Lịch sử…}}: các bản sao Studio giữ khi bạn mở và lưu bản vẽ, và các phiên bản trên đám mây của bản vẽ khi bạn mở nó từ đám mây. Mở hoặc khôi phục một bản, hoặc so sánh hai bản, với những gì được thêm, bỏ đi và thay đổi hiển thị bằng màu. Xem [Lịch sử](topic:history).
- **acad.lsp và acaddoc.lsp.** Chọn một thư mục hỗ trợ trong {{cmd:APPLOAD}}: hai tệp đó được nạp khi CadCraft khởi động (acaddoc.lsp được nạp lại cho mỗi thẻ bản vẽ mới), và `S::STARTUP` chạy sau chúng. Xem [Nạp ứng dụng](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Hộp thoại In trong cửa sổ riêng.** Một nút trên thanh tiêu đề đưa nó vào một cửa sổ mà bạn có thể đặt trên màn hình khác. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).

### Cho trợ lý AI

- **Tệp theo tên, trong các thư mục bạn chọn.** Trong CadCraft Studio, một trợ lý có thể mở, lưu và in tệp theo tên, và đưa cho một lệnh tệp mà lệnh đó yêu cầu (INSERT từ một tệp, xuất của COUNT, SAVEAS, PLOT), nhưng chỉ bên trong các thư mục bạn thêm dưới {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Trợ lý}} › {{ui:Thư mục được phép dùng}}. Xem [Cho phép dùng tệp trong các thư mục bạn chọn](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Ít lệnh gọi hơn.** Một trợ lý có thể gõ cả một dòng lệnh trong một lần, giữ một lệnh mở giữa các lần gọi, đếm đối tượng theo loại và lớp mà không cần liệt kê chúng, và đặt một khối cùng các giá trị thuộc tính trong một bước.
- **Không cần cửa sổ.** Dòng lệnh `cadcraft` ghi các bản in SVG và chuyển đổi, in, kiểm tra hoặc mô tả nhiều tệp cùng lúc. Gói MCP chưa được phát hành. Xem [Làm việc với tệp mà không mở CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Thay đổi

- **Bàn di chuột để di chuyển.** Di chuyển hai ngón trên bàn di chuột và khung nhìn 2D đi theo; chụm ngón và con lăn chuột để thu phóng. Xem [Chuột, bàn di chuột và cảm ứng](topic:mouse-trackpad-touch).
- **Giữ các đối tượng OLE.** Các đối tượng nhúng của DXF hiển thị dưới dạng ảnh hoặc khung có nhãn và được lưu lại khi lưu bằng DXF 2000. Các đối tượng của DWG được giữ và ghi lại khi bạn lưu thành DWG, nhưng chưa hiển thị. Trước đây chúng bị mất khi lưu. Xem [Đối tượng từ chương trình khác (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Đơn vị của bản vẽ mới** theo đơn vị bạn đánh dấu sao trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}}.

## Đã sửa

- Các bố cục mở ra trống, hoặc mất một khung nhìn và hiển thị toàn bộ mô hình thay vào đó, giờ mở với các khung nhìn thật. Một bố cục không có liên kết với nội dung của nó vẫn được giữ, và báo cáo khi mở sẽ nói như vậy.
- Các tệp DXF ở bảng mã cũ từng hiển thị văn bản Kirin và Hàn bị lỗi. Giờ chúng đọc đúng.
- Văn bản đoạn từ chương trình khác từng mất định dạng khi được mở và được lưu lại dạng thuần.

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} có một danh sách cho độ dài, diện tích, thể tích, góc và độ dốc, với kích thước chính xác theo định nghĩa của đơn vị (foot khảo sát của Mỹ là một đơn vị riêng). Tắt các đơn vị bạn không dùng và chúng rời khỏi danh sách; đánh dấu sao một đơn vị và công việc mới bắt đầu bằng đơn vị đó. Một tệp luôn giữ đơn vị riêng của nó. Trong CadCraft, dấu sao đặt đơn vị cho bản vẽ mới khi đó là một đơn vị mà bản vẽ có thể mang; hộp {{ui:Đơn vị}} của CadCraft chưa theo các công tắc. Khi bản vẽ đã có đơn vị, một chiều dài bạn gõ có thể mang ký hiệu của bất kỳ đơn vị nào. Xem [Đơn vị, giá trị gõ vào và danh sách đơn vị](common:unit-lists).
- **Mật độ bố cục và các bảng tự gọn.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Mật độ bố cục}} › {{ui:Gọn}} đưa nhiều hơn lên màn hình (màn hình cảm ứng và điện thoại giữ các nút lớn). Mỗi bảng bên có một thanh tiêu đề mỏng: kéo để neo hoặc nổi bảng, thả lên thanh của bảng khác để chia chung một khung thành các thẻ, ghim để nó trượt vào mép, hoặc ẩn và đưa lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại có thể di chuyển.** Kéo một hộp thoại bằng thanh tiêu đề ra khỏi bản vẽ; nó trở về nơi bạn đã để. Nhấp đúp vào thanh tiêu đề để đưa nó về giữa. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý của riêng bạn (dọn bản vẽ, in một bộ, kiểm tra bản vẽ, hỏi mô hình, cộng bóc tách khối lượng, thử một biến thể chi tiết…), mỗi yêu cầu kèm các công cụ nó gọi và các quyền nó cần, và mỗi yêu cầu được các bài kiểm thử của chúng tôi chạy lại. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** mới có trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Ngôn ngữ}}. Ngôn ngữ này, **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** giờ có đủ mọi chữ của các ứng dụng, dưới dạng bản nháp chưa được người bản ngữ duyệt. Các chủ đề trợ giúp vẫn bằng tiếng Anh.
- **CadCraft Studio** cho biết vì sao kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký sai) thay vì chỉ "Xong", và không hiện lại thẻ Có gì mới mà bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký mã và gói Microsoft Store được chuyển sang 0.8 vì việc xác thực chứng chỉ chưa xong. Kiểm tra SHA-256 bên cạnh mỗi tệp tại getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:Thêm thông tin}}, rồi {{ui:Vẫn chạy}}. Trên Mac, lần đầu, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. CadCraft Studio chưa có trên kho ứng dụng nào, và chưa có bản dựng cho iPad hay iPhone.
- Các danh sách góc và độ dốc trong {{ui:Đơn vị}} được lưu, nhưng chưa có hộp nào đọc chúng.
- Các đối tượng OLE của DWG được giữ nhưng không hiển thị, và các ảnh metafile bên trong đối tượng OLE không được vẽ.
- Việc đọc các bảng kiểu in (tệp CTB) từ chương trình khác đang chờ một tệp mẫu.
- Văn bản Á Đông cũ viết dưới dạng mã `\M+` được đọc, nhưng chưa được kiểm tra với một tệp từ chương trình khác.
- Lớp nền PDF: ảnh bên trong trang được hiển thị trên màn hình nhưng không được in, bản in của trợ lý bỏ qua các lớp nền, và cách các chương trình khác đọc đường cắt và tỷ lệ đã lưu chưa được kiểm tra.
- Lịch sử: CadCraft chưa gửi các lần lưu của bạn lên đám mây, nên các phiên bản trên đám mây là những bản được lưu từ thiết bị khác và từ trang web. Lịch sử chỉ có trong CadCraft Studio.
- Chưa kiểm tra xem Studio có giữ thư mục hỗ trợ acad.lsp sau khi khởi động lại không; nếu nó hỏi, hãy chọn lại thư mục trong APPLOAD.
- Bảng Laser chưa được thử trên một máy laser thật: kiểm tra mọi cài đặt trên phế liệu. CadCraft Studio không có Web Serial, nên trong Studio bảng chỉ lưu G-code.
- Đăng ký bản quét mới được thử với các bản quét tự tạo, chưa phải với bộ quét của một máy quét thật.
- Cuộn bằng hai ngón mới được thử với các sự kiện bàn di chuột mô phỏng, chưa thử trên một bàn di chuột thật.
- {{cmd:PEDIT}} không có tùy chọn Sửa đỉnh (dùng grip hoặc Thuộc tính). Offset, trim, extend, fillet, break và join chưa nhận spline; chiều cao (Z) của spline không được giữ.
- Đoạn văn bản mới chưa thể gán mã định dạng, và các bản in SVG hiển thị văn bản có định dạng bằng một màu.
- Tùy chọn Toàn bộ bản vẽ của WBLOCK chỉ ghi mô hình, không ghi các tờ. Kiểu kích thước hiện hành không được lưu trong tệp: bản vẽ mở ra với Standard làm hiện hành.
- Các kiểu menu dải lệnh chưa có danh sách lớp, màu hay kiểu đường: dùng bảng {{ui:Lớp}} và {{ui:Thuộc tính}}.
- Đám điểm vẫn chưa được lưu trong bản vẽ hoặc in ra, và tệp E57 mở tối đa 6 triệu điểm và 512 MB.
- Các tệp DWG CadCraft lưu chưa được kiểm tra trong chính AutoCAD.

Mọi thứ khác nằm trong [Chưa xây dựng](topic:not-built-yet).
