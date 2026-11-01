---
title: Có gì mới trong 0.7
summary: Nền PDF và nhập PDF, bản vẽ quét với dò tự động, spline thật với SPLINE, SPLINEDIT và PEDIT, trình quản lý kiểu kích thước, văn bản giữ nguyên định dạng, WBLOCK và tỷ lệ của riêng bạn, khối đặc 3D từ chương trình khác, đăng ký bản quét, bảng Laser, xuất USD, Lịch sử và in trong CadCraft Studio, bản vẽ đầu tiên có hướng dẫn, thanh công cụ ở bất kỳ cạnh nào hoặc ít hàng hơn, và nhiều hơn cho các trợ lý AI.
keywords: có gì mới, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, pdf, pdfattach, pdfimport, nền, bản quét, scanattach, scantrace, dò theo, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, định dạng, wblock, scalelistedit, danh sách tỷ lệ, acis, khối đặc 3d, registerscans, đăng ký bản quét, icp, e57, las, laser, grbl, g-code, usd, usdout, lịch sử, phiên bản, so sánh, in, máy in, png, svg, kiểu in, kiểu đường, hướng dẫn, bảng tra nhanh, bản đồ lệnh, vị trí thanh công cụ, hàng thanh công cụ, toolbardock, regen, regenall, bàn di chuột, vuốt, bảng mã, kiril, tiếng hàn, tiếng trung, tiếng nhật, điện, rcd, p&id, pid, acad.lsp, acaddoc.lsp, thư mục hỗ trợ, trợ lý, mcp, đơn vị, tiếng bồ đào nha
from: b9258ca6
---

Đây là những thay đổi trong CadCraft 0.7 so với 0.6. Nhiều thay đổi được yêu cầu trên Discord. Danh sách được nhóm theo mảng, mục quan trọng nhất ở trước.

## Mới

### PDF và bản vẽ quét

- **Đặt một trang PDF dưới bản vẽ.** {{cmd:PDFATTACH}} (`PDFATT`) đặt một trang theo kích thước thật hoặc tỷ lệ bạn nhập. Bắt điểm vào các đường của nó, làm mờ, chuyển sang đơn sắc ({{cmd:PDFADJUST}}), cắt xén ({{cmd:PDFCLIP}}) và bật tắt các lớp riêng của PDF ({{cmd:PDFLAYERS}}). Nó được in dưới dạng đường, hình tô và văn bản, và DWG hoặc DXF 2000 giữ nó như một liên kết đến tệp. Mở một PDF bằng {{ui:Mở}} sẽ hỏi nên gắn hay nhập nó. Xem [Nền PDF và nhập PDF](topic:pdf-underlay).
- **Biến một trang PDF thành đối tượng bản vẽ.** {{cmd:PDFIMPORT}} (`PDFIM`) tạo đường thẳng, đa tuyến, vòng tròn, cung tròn, hình tô đặc và văn bản trên các lớp đặt tên theo PDF, ở kích thước thật, theo tỷ lệ nhập, hoặc theo tỷ lệ từ hai điểm và một khoảng cách thực, trong một bước hoàn tác. Xem [Nhập một trang](topic:pdf-underlay#import-a-page).
- **Bản vẽ quét.** {{cmd:SCANATTACH}} đưa vào một PNG, JPEG hoặc TIFF (một trang hoặc tất cả) hoặc một trang PDF là hình ảnh. Sau đó chỉnh tỷ lệ từ hai điểm ({{cmd:SCANSCALE}}), căn chỉnh ({{cmd:SCANALIGN}}), nắn thẳng từ các đường dài của chính nó ({{cmd:SCANDESKEW}}), chuyển thành đen trắng và loại bỏ đốm ({{cmd:SCANCLEAN}}), cắt và xóa từng phần. Mỗi bước là một bước hoàn tác và tệp gốc được giữ. Xem [Bản vẽ quét và việc dò theo](topic:scanned-drawings).
- **Dò bản quét thành đường thẳng và cung tròn.** {{cmd:SCANTRACE}} vẽ các đường của bản quét thành đường thẳng và cung tròn trên một lớp mới, SCAN-TRACE, theo dung sai bạn đặt, và để nguyên văn bản và nét tô. Báo cáo cho biết nó đã tạo gì và bỏ lại gì, và đó không phải là lời khẳng định rằng kết quả đúng: hãy đối chiếu với tờ giấy. {{cmd:RASTERSNAP}} cho phép bắt điểm đối tượng tìm thấy các đầu mút, góc và giao điểm của bản quét. Không có gì được gửi đi đâu và không dùng mô hình đã huấn luyện. Xem [Việc dò theo](topic:scanned-drawings#the-trace).

### Vẽ và sửa

- **Spline thật.** {{cmd:SPLINE}} (`SPL`) vẽ một đường cong qua các điểm hoặc từ các điểm điều khiển (bậc 1 đến 5), với tiếp tuyến đầu mút; {{cmd:SPLINEDIT}} (`SPE`) di chuyển, thêm và xóa điểm khớp hoặc điểm điều khiển, đặt trọng số, mở, khép, đảo chiều, hoặc biến spline thành đa tuyến. Spline từ tệp DWG và DXF mở ra dưới dạng spline, và DWG cùng DXF 2000 lưu chúng dưới dạng spline. Xem [Spline và đa tuyến](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) khép và mở đa tuyến, nối đường thẳng và cung tròn vào chúng, đặt một độ rộng, khớp một đường cong qua các đỉnh hoặc một spline dọc theo chúng và hoàn lại bằng Decurve, đảo chiều, và sửa nhiều đa tuyến cùng lúc. Xem [Sửa một đa tuyến](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) ghi một khối, vài đối tượng hoặc cả bản vẽ ra một DWG hoặc DXF mới chỉ chứa các lớp, kiểu và khối mà chúng dùng. Xem [Ghi một khối hoặc đối tượng ra tệp riêng](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN và REGENALL.** {{cmd:REGEN}} (`RE`) vẽ lại thẻ bạn đang ở từ bản vẽ, {{cmd:REGENALL}} (`REA`) vẽ lại mọi thẻ, khung và bản vẽ đang mở. Xem [REGEN và REGENALL](topic:commands#regen-and-regenall).

### Văn bản và kích thước

- **Văn bản giữ nguyên định dạng.** Văn bản đoạn từ chương trình khác giữ màu theo từng từ, chữ đậm và nghiêng, gạch chân, phân số xếp chồng và chiều cao: chúng được vẽ trên màn hình và trong PDF, được giữ khi bạn sửa các từ, và được lưu trở lại. Xem [Định dạng bên trong văn bản đoạn từ chương trình khác](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Trình quản lý kiểu kích thước.** {{cmd:DIMSTYLE}} (`D`) tạo, đổi, so sánh và áp dụng các kiểu kích thước có tên; đổi một kiểu sẽ đổi mọi kích thước dùng nó. {{cmd:DIMEDIT}} (`DED`) đặt văn bản về chỗ cũ, nhập văn bản mới, xoay nó hoặc nghiêng các đường gióng; {{cmd:DIMTEDIT}} di chuyển văn bản sang trái, phải hoặc vào giữa. Xem [Kiểu kích thước có tên](topic:dimension-settings#named-dimension-styles).
- **Tỷ lệ của riêng bạn.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) thêm các tỷ lệ như 1:75 vào danh sách tỷ lệ khung nhìn và tỷ lệ in; chúng được lưu trong bản vẽ (DWG và DXF 2000), và bản vẽ từ chương trình khác mang theo danh sách riêng. Xem [Tỷ lệ](topic:units-papers-scales#scales).
- **Văn bản bằng các bảng chữ cái khác.** Tệp DXF lưu theo bảng mã Kiril, Hàn, Trung, Nhật hoặc Việt giờ mở ra cùng văn bản của chúng, và văn bản Trung, Nhật, Hàn được in trong PDF (lệnh in tải một phông lớn hơn vào lần đầu cần đến). Xem [Phông](topic:text#font).

### In

- **Thêm trong bảng kiểu in.** Với mỗi màu, một bảng giờ còn đặt được kiểu đường, đầu đường và chỗ nối đường, cùng kiểu tô in hình tô đặc thành các đường tô bóng; bảng có danh sách độ dày nét riêng và một tỷ lệ kiểu đường. Xem [Bảng kiểu in](topic:plot-pdf#plot-style-tables).
- **In, và tệp PNG và SVG.** Hộp thoại In có {{ui:In…}}, {{ui:Tải xuống PNG}} (300 dpi) và {{ui:Tải xuống SVG}}. Trong CadCraft Studio, nó liệt kê các máy in của máy tính, khổ giấy của chúng và số bản sao. Xem [In](topic:plot-pdf#print) và [Tệp ảnh và SVG](topic:plot-pdf#picture-and-svg-files).

### 3D và đám điểm

- **Khối đặc 3D từ chương trình khác.** Khối đặc, vùng (region) và thân (body) trong không gian mô hình của bản vẽ hiện trên thẻ 3D, chỉ để đọc, và lưu thành DWG sẽ ghi chúng trở lại không đổi. Các mặt trên bề mặt mà CadCraft chưa vẽ được sẽ được liệt kê, không đoán mò. Xem [Khối đặc từ chương trình khác](topic:3d-solids#solids-from-other-programs).
- **Đăng ký nhiều bản quét.** {{cmd:REGISTERSCANS}} (`REGSCAN`) đặt các bản quét chụp từ những vị trí khác nhau vào một hệ khung, bằng các cặp điểm hoặc tọa độ mục tiêu nhập tay, tinh chỉnh bằng ICP, lưu việc đăng ký thành một tệp dự án nhỏ, và ghi đám điểm đã đăng ký thành một tệp LAS hoặc E57. Xem [Đăng ký nhiều bản quét thành một](topic:register-scans).
- **Xuất USD.** {{cmd:USDOUT}}, hoặc {{cmd:EXPORT3D}} › {{ui:USD}}, ghi các khối đặc của thẻ 3D thành `.usda`, `.usdc` hoặc `.usdz`. Xem [Xuất mô hình 3D thành USD](topic:usd).
- **Tính toán trên thẻ 3D.** Nơi các công cụ của thẻ 3D hỏi một khoảng cách, bạn có thể gõ một phép tính, như trên dòng lệnh. Xem [Phép tính trong giá trị đã gõ](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Chế tạo

- **Gửi bản vẽ đến máy laser.** {{cmd:LASER}}, hoặc {{ui:Xem}} › {{ui:Thêm}} › {{ui:Laser…}}, mở một bảng phía trên bản vẽ: mỗi lớp cắt, vạch, khắc đường, tô hình, khắc một ảnh hoặc không được gửi, với công suất, tốc độ và số lượt của nó. Bản xem trước theo các chỉnh sửa của bạn, {{ui:Lưu G-code…}} ghi G-code chế độ laser GRBL, và trong Chrome hoặc Edge bảng có thể căn khung công việc và gửi qua USB. Các cài đặt được lưu trong bản vẽ (DWG và DXF). Xem [Gửi bản vẽ đến máy laser](topic:laser-cutting).
- **Ký hiệu lắp đặt công trình trong tiện ích bổ sung Điện.** Ổ cắm dữ liệu, điện thoại và TV, công tắc khóa và hẹn giờ, bộ điều nhiệt, biển báo lối thoát, đầu báo, nút báo cháy và còi, quạt, máy nước nóng, bếp, điểm sạc xe điện, đồng hồ đo điện năng và tủ phụ, cùng ký hiệu RCD và RCBO. Một mạch có thể mang RCD, bảng thống kê tủ điện có cột RCD, và các kiểm tra chỉ ra các mạch ổ cắm không có RCD từ 30 mA trở xuống. Đây là lời nhắc khi lập kế hoạch, không phải kiểm tra theo quy chuẩn.
- **Tiện ích bổ sung P&ID.** P&ID vẽ sơ đồ quy trình: ký hiệu có điểm nối, đường quy trình và tín hiệu, thẻ gắn, số đường ống, danh sách đường ống, thiết bị, dụng cụ đo và van (CSV hoặc sổ làm việc) và các kiểm tra. Nó đi kèm CadCraft và tắt cho đến khi bạn bật trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Tiện ích bổ sung}}. Đây là công cụ hỗ trợ vẽ, không phải phê duyệt kỹ thuật, và hiện chữ của nó chỉ có tiếng Anh.

### Bắt đầu và màn hình

- **Bản vẽ đầu tiên có hướng dẫn.** {{cmd:TOUR}} (hoặc {{ui:Xem hướng dẫn}} trên thẻ bắt đầu) dẫn bạn qua sáu bước trong chính bản vẽ thật: một đường thẳng, một vòng tròn, một lần di chuyển, một lần cắt, một lần xóa và một kích thước. Nó tự bắt đầu vào lần đầu CadCraft mở mà chưa có gì trong đó. Xem [Thích được hướng dẫn?](topic:getting-started#prefer-to-be-guided)
- **Bảng tra nhanh và bản đồ lệnh.** [Bảng tra nhanh](topic:cheat-sheet) có 40 lệnh hằng ngày trên một trang, cũng có dạng PDF để in, và [bản đồ lệnh](topic:command-map) liệt kê các lệnh cùng tên viết tắt, từ A đến Z.
- **Thanh công cụ ở bất kỳ cạnh nào.** {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Vị trí thanh công cụ}}: trên (như trước), dưới, trái hoặc phải, hoặc gõ {{cmd:TOOLBARDOCK}}. Xem [Vị trí thanh công cụ](topic:settings#toolbar-position).
- **Hàng của thanh công cụ.** {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Số dòng thanh công cụ}}: xuống dòng cho vừa, 2 hàng hoặc 1 hàng, cho thanh công cụ CadCraft và các kiểu Vẽ kiểu cổ điển và Dải lệnh. {{key:Shift+Ctrl+F1}} chuyển lần lượt qua chúng, {{key:Ctrl+F1}} qua những gì các nút hiển thị, và {{cmd:TOOLBARROWS}} cùng {{cmd:TOOLBAR}} đặt chúng. Gợi ý bắt đầu có nút đóng. Cảm ơn GJoe2, người đã gửi mục này dưới dạng pull request. Xem [Hàng của thanh công cụ](topic:settings#toolbar-rows).

### Trong CadCraft Studio

- **Lịch sử.** {{cmd:HISTORY}} (`HIST`), hoặc {{ui:Xem}} › {{ui:Thêm}} › {{ui:Lịch sử…}}: các bản sao mà Studio giữ khi bạn mở và lưu một bản vẽ, và các phiên bản đám mây của bản vẽ khi bạn mở nó từ đám mây. Mở hoặc khôi phục một bản, hoặc so sánh hai bản, với phần được thêm, bị xóa và đã đổi hiển thị bằng màu. Xem [Lịch sử](topic:history).
- **acad.lsp và acaddoc.lsp.** Chọn một thư mục hỗ trợ trong {{cmd:APPLOAD}}: hai tệp đó tải khi CadCraft khởi động (acaddoc.lsp lại tải cho mỗi thẻ bản vẽ mới), và `S::STARTUP` chạy sau chúng. Xem [Tải ứng dụng](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Hộp thoại In trong cửa sổ riêng.** Một nút trên thanh tiêu đề của nó chuyển nó vào một cửa sổ bạn có thể đặt trên màn hình khác. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).

### Cho trợ lý AI

- **Tệp theo tên, trong các thư mục bạn chọn.** Trong CadCraft Studio, một trợ lý có thể mở, lưu và in tệp theo tên, và đưa cho một lệnh tệp mà lệnh đó yêu cầu (INSERT từ một tệp, xuất của COUNT, SAVEAS, PLOT), nhưng chỉ trong các thư mục bạn thêm tại {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Trợ lý}} › {{ui:Thư mục được phép dùng}}. Xem [Cho phép nó dùng tệp trong các thư mục bạn chọn](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Ít lần gọi hơn.** Một trợ lý có thể gõ cả một dòng lệnh trong một lần, giữ một lệnh mở giữa các lần gọi, đếm đối tượng theo loại và lớp mà không cần liệt kê, và đặt một khối cùng giá trị thuộc tính của nó trong một bước.
- **Không cần cửa sổ.** Dòng lệnh `cadcraft` ghi bản in SVG và chuyển đổi, in, kiểm tra hoặc mô tả nhiều tệp cùng lúc. Gói MCP chưa được phát hành. Xem [Làm việc trên tệp mà không mở CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Đã thay đổi

- **Bàn di chuột di chuyển khung nhìn.** Di hai ngón tay trên bàn di chuột và khung nhìn 2D đi theo; chụm ngón tay và con lăn chuột thì thu phóng. Xem [Chuột, bàn di chuột và cảm ứng](topic:mouse-trackpad-touch).
- **Đối tượng OLE được giữ lại.** Các đối tượng nhúng của DXF hiện thành ảnh của chúng hoặc thành khung có nhãn và được DXF 2000 lưu trở lại. Của DWG được giữ và ghi trở lại khi bạn lưu thành DWG, nhưng chưa hiển thị. Trước đây chúng bị mất khi lưu. Xem [Đối tượng từ chương trình khác (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Đơn vị của bản vẽ mới** theo đơn vị bạn gắn sao trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}}.

## Đã sửa

- Các bố cục mở ra trống, hoặc mất khung nhìn và hiện cả mô hình thay vào đó, giờ mở ra với các khung nhìn thật của chúng. Một bố cục không có liên kết đến nội dung của nó được giữ lại và báo cáo mở tệp ghi rõ điều đó.
- Tệp DXF theo bảng mã cũ hiện văn bản Kiril và Hàn bị lỗi chữ. Giờ chúng đọc đúng.
- Văn bản đoạn từ chương trình khác mất định dạng khi mở và được lưu trở lại ở dạng trơn.

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} có một danh sách riêng cho chiều dài, diện tích, thể tích, góc và độ dốc, với các cỡ chính xác theo định nghĩa của đơn vị (feet khảo sát Mỹ là một đơn vị riêng). Tắt những đơn vị bạn không bao giờ dùng và chúng rời khỏi danh sách đơn vị; gắn sao một đơn vị và công việc mới bắt đầu bằng nó. Một tệp luôn giữ đơn vị riêng của nó. Trong CadCraft, dấu sao đặt đơn vị của bản vẽ mới khi đó là đơn vị mà bản vẽ mang được; ô {{ui:Đơn vị}} riêng của CadCraft chưa theo các công tắc. Khi bản vẽ đã có đơn vị, một chiều dài bạn gõ có thể mang ký hiệu của bất kỳ đơn vị nào. Xem [Đơn vị, giá trị nhập và các danh sách đơn vị](common:unit-lists).
- **Bố cục dày hơn và các bảng tự gọn lại.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Mật độ bố cục}} › {{ui:Gọn}} chứa được nhiều hơn trên màn hình (màn hình cảm ứng và điện thoại giữ các nút lớn). Mỗi bảng bên có một thanh tiêu đề mảnh: kéo nó để neo hoặc cho bảng nổi, thả nó lên thanh của bảng khác để dùng chung một khung dưới dạng các thẻ, ghim nó để trượt ra mép, hoặc ẩn nó và gọi lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo một hộp thoại bằng thanh tiêu đề để tránh khỏi bản vẽ; nó trở lại nơi bạn để. Nhấp đúp thanh tiêu đề để căn giữa lại. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý của riêng bạn (dọn bản vẽ, in một bộ, kiểm tra bản vẽ, hỏi mô hình, cộng một bản bóc tách, thử một biến thể chi tiết…), mỗi yêu cầu kèm các công cụ nó gọi và quyền nó cần, và mỗi yêu cầu được các bài kiểm thử của chúng tôi chạy lại. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Ngôn ngữ}}. Nó, **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** giờ có đủ mọi chữ của các ứng dụng, dưới dạng bản nháp chưa được người bản ngữ xem xét. Các chủ đề trợ giúp bằng tiếng Anh.
- **CadCraft Studio** nói rõ vì sao kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký sai) thay vì chỉ "Done", và ngừng đưa lại thẻ Có gì mới mà bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký, và gói Microsoft Store, đã chuyển sang 0.8 vì việc xác thực chứng chỉ chưa xong. Hãy kiểm tra SHA-256 bên cạnh mỗi tệp trên getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:Thông tin thêm}}, rồi {{ui:Vẫn chạy}}. Trên Mac, lần đầu, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. CadCraft Studio chưa có trên cửa hàng ứng dụng nào, và chưa có bản cho iPad hay iPhone.
- Các danh sách góc và độ dốc trong {{ui:Đơn vị}} được lưu, nhưng chưa có ô nào đọc chúng.
- Đối tượng OLE của DWG được giữ nhưng chưa hiển thị, và ảnh metafile bên trong đối tượng OLE không được vẽ.
- Việc đọc bảng kiểu in (tệp CTB) từ chương trình khác đang chờ một tệp mẫu.
- Văn bản châu Á cũ viết bằng mã `\M+` được đọc, nhưng chưa được đối chiếu với tệp từ chương trình khác.
- Nền PDF: ảnh bên trong trang hiện trên màn hình nhưng không được in, bản in của một trợ lý bỏ qua nền, và cách các chương trình khác đọc phần cắt xén và tỷ lệ đã lưu chưa được kiểm tra trong chúng.
- Lịch sử: CadCraft chưa gửi các bản lưu của nó lên đám mây, nên các phiên bản đám mây là những bản lưu từ thiết bị khác và từ web. Lịch sử chỉ có trong CadCraft Studio.
- Việc Studio có giữ thư mục hỗ trợ acad.lsp sau khi khởi động lại hay không chưa được kiểm tra; nếu nó hỏi, hãy chọn lại thư mục trong APPLOAD.
- Bảng Laser chưa được thử trên máy laser thật: hãy thử mọi cài đặt trên vật liệu thừa. CadCraft Studio không có Web Serial, nên trong Studio bảng chỉ lưu G-code.
- Việc đăng ký bản quét đã được thử trên các bản quét tự tạo, chưa thử trên bộ quét từ máy quét thật.
- Việc di chuyển khung nhìn bằng hai ngón tay đã được thử với sự kiện bàn di chuột mô phỏng, chưa thử trên bàn di chuột thật.
- {{cmd:PEDIT}} không có tùy chọn Edit vertex (dùng grip hoặc Thuộc tính). Dời song song, cắt, kéo dài, bo góc, ngắt và nối chưa nhận spline; chiều cao (Z) của spline không được giữ.
- Văn bản đoạn mới chưa gán được mã định dạng, và bản in SVG hiện văn bản có định dạng bằng một màu.
- Tùy chọn Entire drawing của WBLOCK chỉ ghi mô hình, không ghi các tờ. Kiểu kích thước hiện hành không được lưu trong tệp: bản vẽ mở ra với Standard là hiện hành.
- Các kiểu menu dải lệnh chưa có danh sách lớp, màu hay kiểu đường: hãy dùng bảng {{ui:Lớp}} và {{ui:Thuộc tính}}.
- Đám điểm vẫn chưa được lưu trong bản vẽ hay in, và tệp E57 mở được đến 6 triệu điểm và 512 MB.
- Các tệp DWG đã lưu của CadCraft chưa được kiểm tra trong chính AutoCAD.

Mọi thứ còn lại nằm trong [Chưa xây dựng](topic:not-built-yet).
