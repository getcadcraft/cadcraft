---
title: Bảng lệnh: nên gõ gì
summary: Mọi lệnh của CadCraft cùng tên viết tắt, từ A đến Z, lấy từ chính chương trình, và các thói quen từ phần mềm vẽ khác khác với CadCraft.
keywords: bảng lệnh, lệnh, tên viết tắt, tên ngắn, chuyển từ, danh sách lệnh, nên gõ gì, xóa, cắt, tương đương, khác biệt
from: 3bdfd3e6
---

CadCraft dùng tên lệnh và tên viết tắt mà người vẽ đã quen từ các phần mềm vẽ khác: gõ `L` để vẽ đường thẳng, `TR` để cắt, `E` để xóa. Vì vậy, với hầu hết lệnh, không cần học bảng dịch nào: tên bạn đã biết cũng là tên ở đây. Danh sách dưới đây gồm mọi lệnh của CadCraft, lấy từ chính chương trình. {{key:Enter}} lặp lại lệnh vừa dùng; `HELP` trong dòng lệnh cũng in ra đúng danh sách này.

Một số ít lệnh khác với thói quen cũ, hoặc chưa được xây dựng:

- **Save** tải xuống một bản sao trên trình duyệt ({{cmd:SAVE}}, {{cmd:SAVEAS}}); trong CadCraft Studio, lệnh này ghi thẳng vào tệp. Xem [Chuyển từ phần mềm vẽ khác](topic:coming-from).
- **PLOT** tạo tệp PDF (cũng có PNG và SVG), kèm bảng kiểu in; không có trình quản lý thiết lập trang.
- **DIMSTYLE** và **PEDIT** đã được xây dựng; **PEDIT** không có tùy chọn Sửa đỉnh (dùng grip để làm việc đó).
- **TABLE** chưa được xây dựng; {{cmd:XREF}}, {{cmd:SPLINE}} và {{cmd:WBLOCK}} đã có.
- Các lệnh riêng của một tiện ích (AutoLISP `C:NAME`) sẽ hiện sau khi bạn nạp bằng {{cmd:APPLOAD}}; chúng không có trong danh sách này.

## Tất cả lệnh (398)

| Lệnh | Tên viết tắt | Chức năng |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Xoay khung nhìn 3D bằng nút chuột trái |
| `ACCESS` | `AX` | Bật hoặc tắt chế độ vẽ không cần nhìn màn hình: kết quả được đọc qua trình đọc màn hình, có con trỏ bàn phím trên bản vẽ, âm thanh bắt điểm và lệnh bằng giọng nói. |
| `ALIASEDIT` |  | Sửa tên viết tắt của lệnh trong một tệp văn bản (kiểu quen thuộc L, *LINE) |
| `ALIGN` | `AL` | Di chuyển và xoay đối tượng để các điểm nguồn trùng với các điểm đích (một, hai hoặc ba cặp), và co giãn nếu bạn muốn |
| `ALIGNPANEL` | `ALP` | Mở bảng Căn chỉnh và phân bố |
| `ALIGNTO` |  | Căn các cạnh trái, giữa, phải, trên, giữa hoặc dưới của các đối tượng đã chọn theo vùng chọn, đối tượng chọn đầu tiên hoặc cuối cùng, hoặc một điểm |
| `ANNOALLVISIBLE` | `ANNOALL` | Hiện đối tượng chú thích ở mọi tỷ lệ, hoặc chỉ ở nơi tỷ lệ của khung nhìn (hoặc của bản vẽ) có trong danh sách của chúng |
| `ANNOSCALE` | `CANNOSCALE` | Đặt tỷ lệ chú thích của bản vẽ: văn bản và kích thước chú thích được đổi cỡ để in ra cùng kích thước |
| `APPLOAD` | `AP` | Nạp ứng dụng: các tiện ích LISP (.lsp) và tệp hộp thoại của chúng (.dcl); Bộ khởi động (AP) |
| `ARC` | `A` | Cung tròn: 3 điểm, Đầu/Tâm/Cuối, Đầu/Tâm/Góc, Đầu/Tâm/Độ dài, Đầu/Cuối/Góc, Đầu/Cuối/Hướng, Đầu/Cuối/Bán kính, Tâm/Đầu/Cuối, Tâm/Đầu/Góc, Tâm/Đầu/Độ dài, Tiếp tục |
| `AREA` | `AA` | Diện tích và chu vi theo điểm hoặc của một đối tượng; Cộng và Trừ giữ tổng chạy (AA) |
| `ARRAY` | `AR` | Bản sao theo hàng và cột, hoặc xoay quanh một tâm (AR) |
| `ARRAYASSOCIATIVITY` |  | Đặt xem các lệnh ARRAY tạo mảng vẫn chỉnh sửa được (1) hay chỉ là bản sao thường (0) |
| `ARRAYCLOSE` |  | Kết thúc chỉnh sửa các đối tượng nguồn của một mảng |
| `ARRAYEDIT` |  | Thay đổi mảng tạo bằng tùy chọn Liên kết: số lượng, khoảng cách, đối tượng nguồn, một mục |
| `ARRAYPATH` |  | Sao chép đối tượng dọc theo đường thẳng, cung, đa tuyến hoặc đường cong khác |
| `ARRAYPOLAR` |  | Sao chép quanh một điểm tâm |
| `ARRAYRECT` |  | Sao chép theo hàng và cột |
| `ASBUILT` | `ASB` | ASBUILT đọc các điểm hoàn công mà đội thi công đo được (CSV / TXT, do EXPORTPOINTS ghi ra) và so sánh với các điểm trong bản vẽ: trong hoặc ngoài dung sai, chưa đo, thừa. Đánh dấu chúng trên lớp AS-BUILT và tải xuống một báo cáo CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Định nghĩa một thuộc tính (thẻ mà khối yêu cầu một giá trị) để đưa vào khối (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Sửa giá trị thuộc tính của tham chiếu khối trên dòng lệnh, lần lượt từng cái (Enter giữ giá trị) |
| `ATTSYNC` |  | Đưa các tham chiếu của khối khớp với định nghĩa thuộc tính: thêm mới với giá trị mặc định, bỏ những cái đã xóa, đặt lại vị trí và văn bản; giữ nguyên giá trị |
| `AUDIT` |  | Kiểm tra bản vẽ đang mở xem có hỏng không: số không hữu hạn, đối tượng không có kích thước, thiếu lớp, khối, kiểu và kiểu đường, khối tự chứa chính nó, mã định danh trùng, kích thước và tô bóng bị lỗi. Liệt kê những gì tìm thấy theo loại và hỏi trước khi sửa; việc sửa là một bước hoàn tác. |
| `AUNITS` | `ANGUNITS` | Cách hiển thị và nhập góc: độ thập phân, độ-phút-giây hoặc phương vị như N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Bật hoặc tắt tự động hoàn thành bản vẽ, hoặc liệt kê các gợi ý từ mẫu của bản vẽ lúc này. |
| `AUTOCONSTRAIN` |  | Thêm ràng buộc trùng nhau, nằm ngang và thẳng đứng ở nơi hình học đã gần nhau |
| `AUTODIM` | `ADIM` | Ghi kích thước theo quy tắc: kích thước tổng thể, chuỗi dọc theo các cạnh, lỗ mở, đường kính lỗ và khoảng cách lưới, không ghi lại những gì đã có kích thước. |
| `AUTOSHEET` | `ASH` | Tự bố trí tờ: chọn khổ giấy và tỷ lệ chuẩn, đặt mọi khung nhìn kèm chú thích và khung tên. |
| `BATTMAN` |  | Trình quản lý thuộc tính khối: thứ tự, thẻ, lời nhắc, mặc định và chế độ của thuộc tính khối, rồi cập nhật các tham chiếu của nó |
| `BCLOSE` |  | Đóng trình soạn khối: lưu khối hoặc bỏ thay đổi |
| `BCONVERT` |  | BCONVERT tìm hình học lặp lại và đổi thành tham chiếu khối. Chọn các đối tượng lặp lại: mọi nhóm đối tượng khác trong không gian mở có cùng hình học, dù dời hay xoay theo góc nào, sẽ được tìm thấy; khi bật Đối xứng hoặc Co giãn, các ảnh đối xứng và bản sao ở kích thước khác cũng được tìm. Đặt tên cho khối mới và chọn điểm gốc; vùng chọn và mọi bản sao sẽ thành tham chiếu đến khối đó, mỗi cái có góc xoay và tỷ lệ riêng. Hoặc chọn Khối và đặt tên một khối có sẵn để tìm các bản sao rời của đối tượng của nó. Bản sao phải cùng lớp, màu, kiểu đường và độ dày nét, trừ khi Thuộc tính được đặt là Bỏ qua. Đối tượng trên lớp bị khóa sẽ không bị động đến. Một bước hoàn tác. |
| `BEDIT` | `BE` | Trình soạn khối: sửa đối tượng và thuộc tính của khối; BCLOSE lưu (BE) |
| `BLEND` |  | BLEND: một spline nối hai đầu của hai đường cong hở, chọn gần các đầu để nối. CONtinuity: Tiếp tuyến theo hướng của cả hai, Trơn còn theo cách chúng uốn cong. |
| `BLOCK` | `B`, `BMAKE` | Tạo khối từ các đối tượng (chúng thành một tham chiếu) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: mọi tham chiếu đến một khối trở thành tham chiếu đến khối khác, đúng vị trí, cùng tỷ lệ và góc xoay. Giá trị của các thuộc tính mà cả hai khối đều có được giữ nguyên. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE mở bảng Khối với con trỏ ở ô lọc. Bảng hiển thị hình ảnh của từng khối (khối đặt gần nhất hiện trước), dạng danh sách hoặc lưới; nhấp vào hình hoặc kéo vào bản vẽ để đặt khối bằng INSERT. Dưới mục Thư viện, thêm tệp DWG hoặc DXF của bạn: các khối trong đó được liệt kê kèm hình và được sao vào bản vẽ này khi bạn đặt một khối. Trong CadCraft Studio cũng có thể thêm một thư mục bản vẽ, và tệp cùng thư mục được ghi nhớ. |
| `BOMEDIT` | `BOMCOLUMNS` | Cột, nhóm, sắp xếp, tiêu đề, tổng và ghi chú của bảng danh mục vật tư |
| `BOMEXPORT` |  | Lưu bảng danh mục vật tư thành tệp .csv |
| `BOMTABLE` | `BOM` | Bảng danh mục vật tư động của một vùng, hoặc của toàn bản vẽ |
| `BOMUPDATE` |  | Cập nhật mọi bảng danh mục vật tư ngay bây giờ, kể cả bảng đã đóng băng |
| `BOMZONE` | `BZONE` | Một vùng có tên trong bản vẽ dùng cho danh mục vật tư: hai góc, một đa giác, hoặc đường bao của một đối tượng kín |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): chọn một điểm bên trong vùng kín để tạo đa tuyến kín bao quanh. Cung vẫn là cung. Đảo ảo đường bao các vùng nằm bên trong cũng được tạo. |
| `BOX` |  | Một hộp: hai góc và một chiều cao (3D) |
| `BPARAMETER` | `BPARAM` | Chưa được xây dựng: thêm tham số (như Hiển thị) vào khối. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Tham số khối: tham số có tên kèm công thức, và nhiều tham số hiển thị trong một khối. Hoạt động trong trình soạn khối (gán các đối tượng đã chọn vào một trạng thái) và trên tham chiếu đã chọn (giá trị và trạng thái riêng của nó). |
| `BREAK` | `BR` | Ngắt đường thẳng, cung, vòng tròn hoặc đa tuyến giữa hai điểm (BR) |
| `BREAKATPOINT` |  | Tách đường thẳng, cung hoặc đa tuyến thành hai tại một điểm |
| `BREAKLINE` |  | Vẽ đường thẳng có ký hiệu ngắt; kích thước và phần kéo dài vượt ra ngoài hai đầu được ghi nhớ. |
| `BREPLACE` |  | BREPLACE thay một khối bằng khối khác. Đã chọn: chọn tham chiếu khối và đặt tên khối thay thế. Tất cả: đặt tên một khối và khối thay thế của nó, mọi tham chiếu trong mọi không gian và bên trong khối khác sẽ đổi. Tham chiếu giữ vị trí, tỷ lệ, góc xoay và lớp, cùng giá trị của thuộc tính mà cả hai khối đều có; giá trị mà khối mới không có chỗ đặt sẽ bị bỏ và được nêu tên. |
| `BSEARCH` |  | BSEARCH tìm khối. Tên: một phần tên khối, hoặc mẫu có * và ?. Thuộc tính: một giá trị (hoặc TAG=giá trị) nằm trong thuộc tính của tham chiếu. Hình học: chọn đối tượng hoặc một tham chiếu khối, và liệt kê các khối có hình dạng giống ít nhất 85%, giống nhất đứng đầu; kích thước, góc xoay và đối xứng không tính. Các tham chiếu tìm thấy trong không gian mở được chọn sẵn cho lệnh tiếp theo. |
| `BURST` |  | Phân rã tham chiếu khối và giữ lại những gì thuộc tính ghi: mỗi giá trị thành văn bản trên lớp của thuộc tính. |
| `BVHIDE` | `BVH` | Trong trình soạn khối: ẩn đối tượng trong trạng thái hiển thị hiện tại. |
| `BVSHOW` | `BVSH` | Trong trình soạn khối: hiện đối tượng mà trạng thái hiển thị hiện tại đang ẩn (chúng hiện mờ để chọn). |
| `BVSTATE` | `BVS` | Trong trình soạn khối, trên khối có trạng thái hiển thị: chuyển sang một trạng thái, hoặc thêm, đổi tên hay xóa một trạng thái. |
| `CAL` |  | Tính độ dài hoặc số: + − * / và dấu ngoặc, gõ ở đâu cũng được |
| `CENTERLINE` | `CL` | Đường tâm giữa hai đường thẳng: nằm giữa chúng, hoặc theo đường phân giác khi chúng giao nhau (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Dấu tâm: chữ thập ở tâm vòng tròn hoặc cung, với đường tâm kéo dài ra ngoài một chút (CM) |
| `CHAMFER` | `CHA` | Vát góc giữa hai đường thẳng (D hai khoảng cách, A độ dài và góc, P mọi góc của đa tuyến) |
| `CHSPACE` |  | CHSPACE: di chuyển đối tượng giữa tờ và mô hình qua khung nhìn. Chúng được đổi tỷ lệ và xoay để trông giống nhau khi nhìn từ phía kia. Trên tờ, chúng đi tới mô hình; khi bạn làm việc qua khung nhìn (MSPACE), chúng đi tới tờ. |
| `CIRCLE` | `C` | Tâm và bán kính, đường kính, 2 hoặc 3 điểm |
| `CLASS` |  | Đặt các đối tượng đã chọn vào một lớp, hoặc khi không chọn gì thì đặt lớp đang dùng (? liệt kê chúng) |
| `CLASSES` | `CLS` | Bảng Lớp đối tượng: lớp sắp xếp đối tượng qua các lớp; hiện, ẩn và định kiểu chúng, và ghi đè theo từng khung nhìn (CLS) |
| `COMMANDLINE` | `CMDLINE` | Gắn hoặc tách dòng lệnh, đưa về một dòng, đặt số dòng lịch sử, hoặc mở lịch sử (F2) |
| `COMPARESETTINGS` | `CMPSET` | So sánh kiểu kích thước, kiểu văn bản, lớp, tờ hoặc đơn vị: hai cái trong bản vẽ này, hoặc bản vẽ này với một bản vẽ khác đang mở, và sao chép giá trị. |
| `CONSTRAINTBAR` | `CBAR` | Hiện hoặc ẩn thanh ràng buộc (Hiện tất cả / Ẩn tất cả, hoặc theo từng đối tượng) |
| `COPY` | `CO`, `CP` | Sao chép đối tượng, bao nhiêu lần tùy theo số lần bạn nhấp |
| `COPYBASE` |  | Sao chép đối tượng vào bộ nhớ tạm với một điểm gốc bạn chọn |
| `COPYCLIP` |  | Sao chép đối tượng vào bộ nhớ tạm (Ctrl+C); PASTECLIP đặt chúng vào |
| `COUNT` | `BCOUNT` | Đếm tham chiếu khối: chọn một tham chiếu để chọn và đếm mọi tham chiếu của khối đó |
| `COUNTTABLE` |  | Đặt bảng đếm khối |
| `CREDITS` |  | Đặt phần ghi công của Thư viện vào bản vẽ dưới dạng bảng. Chạy lại để cập nhật bảng theo các mục có trong bản vẽ lúc này. |
| `CURSORSIZE` |  | Kích thước chữ thập con trỏ: 100 làm nó chạy từ mép này sang mép kia của bản vẽ (Cài đặt › Con trỏ › Toàn màn hình) |
| `CUTCLIP` |  | Cắt đối tượng vào bộ nhớ tạm (Ctrl+X): sao chép, rồi xóa |
| `CYLINDER` | `CYL` | Một hình trụ: tâm, bán kính và chiều cao (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Liệt kê khối, thuộc tính và đặc tính đối tượng thành bảng trong bản vẽ hoặc tệp CSV |
| `DATALINK` | `DL` | Bảng từ tệp CSV ghi nhớ tệp đó, để đọc lại được |
| `DATALINKUPDATE` | `DLU` | Đọc lại tệp của liên kết dữ liệu và nạp lại bảng |
| `DCALIGNED` | `DCALI` | Ràng buộc kích thước: khoảng cách thực giữa hai điểm, một điểm và một đường, hoặc hai đường |
| `DCANGULAR` | `DCANG` | Ràng buộc kích thước: góc giữa hai đường, hoặc của một cung |
| `DCCONVERT` |  | Đổi kích thước vẽ trên hình học có thể ràng buộc thành ràng buộc kích thước |
| `DCDIAMETER` | `DCDIA` | Ràng buộc kích thước: đường kính của vòng tròn hoặc cung |
| `DCDISPLAY` |  | Hiện hoặc ẩn ràng buộc kích thước trên bản vẽ |
| `DCHORIZONTAL` | `DCHOR` | Ràng buộc kích thước: khoảng cách ngang |
| `DCLINEAR` | `DCLIN` | Ràng buộc kích thước: khoảng cách ngang hoặc dọc, tính từ nơi bạn đặt |
| `DCRADIUS` | `DCRAD` | Ràng buộc kích thước: bán kính của vòng tròn hoặc cung |
| `DCVERTICAL` | `DCVER` | Ràng buộc kích thước: khoảng cách dọc |
| `DELBLOCKS` |  | Xóa khối: mọi tham chiếu (cả tham chiếu lồng bên trong, trên mọi tờ) và định nghĩa |
| `DELCONSTRAINT` | `DELCON` | Gỡ mọi ràng buộc (hình học và kích thước) khỏi các đối tượng bạn chọn |
| `DELOPENING` |  | Lấy cửa đi hoặc cửa sổ ra khỏi tường. |
| `DESCRIBE` | `DESC` | Cho biết bản vẽ có gì: bao nhiêu đối tượng, thuộc loại nào, kích thước ra sao, cái gì đang được chọn. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Xóa vùng chọn (Esc) |
| `DETAILS` | `DET` | Chi tiết riêng của công ty bạn, tìm theo những gì bạn đang vẽ: tìm, thêm khối, liệt kê, gỡ bỏ, bật hoặc tắt gợi ý. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Vẽ sơ đồ từ văn bản: lưu đồ Mermaid, sơ đồ thành phần PlantUML, D2, danh sách từ-đến hoặc XML draw.io, dưới dạng khối và nối mà bạn có thể sửa |
| `DIMALIGNED` | `DAL`, `DIMALI` | Khoảng cách thực giữa hai điểm |
| `DIMANGULAR` | `DAN`, `DIMANG` | Góc giữa hai đường, của một cung, hoặc theo ba điểm |
| `DIMARC` | `DAR` | Kích thước độ dài cung: khoảng cách dọc theo cung, kèm ký hiệu cung (DAR) |
| `DIMASZ` |  | Thiết lập kích thước: Kích cỡ mũi tên |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kích thước xếp chồng từ một đường gốc |
| `DIMBREAK` | `DBREAK` | Ngắt đường kích thước và đường gióng ở chỗ chúng cắt đối tượng khác (Tự động), giữa hai điểm (Thủ công), hoặc gỡ các chỗ ngắt |
| `DIMCONSTRAINT` | `DCON` | Ràng buộc kích thước: thẳng, song song, góc, bán kính, đường kính, đổi |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Chuỗi kích thước, mỗi cái bắt đầu từ đầu cái trước |
| `DIMDEC` |  | Thiết lập kích thước: Số chữ số thập phân |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Đường kính của cung hoặc vòng tròn |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Gỡ kích thước khỏi các đối tượng mà nó gắn vào (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Đổi văn bản kích thước (Trang đầu, Văn bản mới, Xoay) hoặc nghiêng đường gióng (Xiên) |
| `DIMEXE` |  | Thiết lập kích thước: Phần kéo dài vượt qua đường kích thước |
| `DIMEXO` |  | Thiết lập kích thước: Khoảng lệch từ gốc |
| `DIMGAP` |  | Thiết lập kích thước: Khoảng cách quanh văn bản |
| `DIMINSPECT` |  | Kích thước kiểm tra: khung quanh giá trị kèm nhãn và tần suất kiểm tra chi tiết |
| `DIMJOGGED` | `DJO`, `JOG` | Kích thước bán kính gãy: bán kính vẽ từ một điểm gần hơn khi tâm ở xa (DJO) |
| `DIMJOGLINE` | `DJL` | Thêm ký hiệu gãy vào đường kích thước thẳng hoặc song song, để cho thấy khoảng cách không vẽ theo tỷ lệ (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Khoảng cách ngang hoặc dọc (R cho góc bất kỳ) |
| `DIMLUNIT` |  | Thiết lập kích thước: định dạng độ dài (1 khoa học, 2 thập phân, 3 kỹ thuật, 4 kiến trúc, 5 phân số) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Kích thước tọa độ: khoảng cách X hoặc Y của một điểm từ gốc UCS, trên đường dẫn (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Ghi đè biến kích thước trên các kích thước đã chọn mà không đổi kiểu; Xóa đặt lại kiểu (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Bán kính của cung hoặc vòng tròn |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Gắn điểm của kích thước vào đối tượng, để nó theo và đo lại khi các đối tượng đó di chuyển (DRE) |
| `DIMSCALE` |  | Thiết lập kích thước: Tỷ lệ tổng thể (kích thước nhân với số này) |
| `DIMSPACE` |  | Khoảng cách đều giữa các kích thước song song, đo từ một kích thước gốc (0 thẳng hàng, Tự động là gấp đôi chiều cao chữ) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Tạo, đổi, đặt hiện hành, xóa, áp dụng và so sánh các kiểu kích thước có tên (hộp thoại; -DIMSTYLE trên dòng lệnh) |
| `DIMTEDIT` | `DIMTED` | Di chuyển văn bản kích thước sang trái, phải hoặc giữa đường kích thước, hoặc xoay nó |
| `DIMTEXTUNIT` | `DTU` | Văn bản kích thước theo mm, cm, m hoặc km, hoặc theo đơn vị riêng của bản vẽ: các kích thước đã chọn, nếu không thì kích thước mới (DTU) |
| `DIMTXT` |  | Thiết lập kích thước: Chiều cao chữ |
| `DIST` | `DI` | Khoảng cách và góc giữa hai điểm |
| `DISTRIBUTE` |  | Xếp đều các đối tượng đã chọn theo chiều ngang hoặc dọc: bước bằng nhau giữa các tâm, hoặc khoảng hở bằng nhau; hai đối tượng ngoài cùng giữ nguyên |
| `DIVIDE` | `DIV` | DIVIDE (DIV): các dấu chia đường thẳng, cung, vòng tròn, đa tuyến, spline hoặc elip thành các phần bằng nhau. Điểm, hoặc với Khối là một khối tại mỗi dấu. |
| `DOCUMENTS` | `DOCS` | Mở bảng Tài liệu: lấy ra và trả lại bản vẽ, bản sửa đổi, trạng thái phát hành và phê duyệt cho thư mục dự án |
| `DOOR` | `DR` | Đặt cửa đi vào tường. Phía bạn nhấp là phía cửa mở về. |
| `DRAWORDER` |  | Đổi thứ tự vẽ: đưa đối tượng lên trước, gửi xuống sau, hoặc đặt lên trên hay dưới đối tượng khác. |
| `DUPLICATE` | `DUP` | Một bản sao di chuyển theo con trỏ: nhấp để đặt xuống (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Thuộc tính của bản vẽ: tiêu đề, tác giả và các mục khác, cùng cặp tên và giá trị do bạn tự đặt |
| `DXFOUT` |  | Tải bản vẽ xuống dạng DXF R12 (Lưu giữ định dạng riêng của nó) |
| `EATTEDIT` | `DDATTE` | Sửa thuộc tính của tham chiếu khối: giá trị, văn bản và thuộc tính, mỗi lần một thuộc tính |
| `ELLIPSE` | `EL` | Điểm cuối của trục và nửa trục còn lại |
| `ERASE` | `E`, `DELETE` | Gỡ đối tượng |
| `EXPLODE` | `X` | Tách đa tuyến, khối và kích thước thành các phần |
| `EXPORT` | `EXP` | Lưu bản sao của bản vẽ thành tệp kiểu mà một tiện ích ghi ra |
| `EXPORT3D` | `3DEXPORT` | Xuất mô hình 3D: GLB, OBJ hoặc STL |
| `EXPORTPOINTS` | `EXPPTS` | Ghi điểm, và điểm chèn của khối với một thuộc tính làm mô tả, ra tệp CSV hoặc TXT (PNEZD, PENZD hoặc XYZ) cho các chương trình BIM và trắc địa |
| `EXTEND` | `EX` | Kéo dài đối tượng đến chạm các đối tượng khác: nhấp gần một đầu, kéo qua nhiều đối tượng, hoặc Shift+nhấp để cắt |
| `EXTRIM` |  | EXTRIM: chọn một cạnh cắt, rồi một phía. Mọi thứ cắt qua cạnh sẽ bị cắt ở phía đó. Các đoạn sẽ bị bỏ hiện ra khi bạn di chuyển con trỏ. |
| `EXTRUDE` | `EXT` | Đùn đối tượng 2D kín thành khối đặc (3D) |
| `FIELD` |  | Đặt một trường vào văn bản, ô bảng hoặc thuộc tính: ngày, tên tệp, số tờ, thuộc tính bản vẽ, diện tích hoặc độ dài của đối tượng, hoặc một công thức |
| `FILLET` | `F` | Bo tròn hoặc vuông góc chỗ nối giữa hai đối tượng (R bán kính, P mọi góc của đa tuyến, M nhiều đối tượng) |
| `FIND` |  | Tìm và thay thế từ trong văn bản, giá trị thuộc tính và văn bản kích thước |
| `FLATTEN` |  | Đặt chiều cao (Z) và độ dày của đối tượng đã chọn về 0, cả trong các khối chúng dùng. |
| `FLOOR` |  | Chọn tầng để vẽ, thêm một tầng, hoặc di chuyển hay sao chép vùng chọn sang tầng khác. |
| `FLOORLAYERS` |  | Biến các tầng thành lớp đặt tên Tầng-Lớp, dùng cho tệp gửi cho người không có tầng. |
| `FLOORS` | `FLR` | Mở bảng Tầng: xếp chồng các tầng trong cùng một không gian mô hình. |
| `GCCOINCIDENT` |  | Ràng buộc: hai điểm trùng nhau, hoặc một điểm nằm yên trên một đối tượng |
| `GCCOLLINEAR` |  | Ràng buộc: hai đường thẳng nằm trên cùng một đường |
| `GCCONCENTRIC` |  | Ràng buộc: hai vòng tròn hoặc cung có chung tâm |
| `GCEQUAL` |  | Ràng buộc: hai đường thẳng có độ dài bằng nhau, hoặc hai vòng tròn/cung có cùng bán kính |
| `GCFIX` |  | Ràng buộc: một điểm hoặc cả đối tượng giữ nguyên vị trí |
| `GCHORIZONTAL` |  | Ràng buộc: một đường thẳng (hoặc hai điểm) giữ nằm ngang |
| `GCPARALLEL` |  | Ràng buộc: hai đường thẳng giữ song song |
| `GCPERPENDICULAR` |  | Ràng buộc: hai đường thẳng giữ vuông góc |
| `GCSYMMETRIC` |  | Ràng buộc: hai điểm, đường thẳng hoặc vòng tròn đối xứng nhau qua một đường |
| `GCTANGENT` |  | Ràng buộc: một đường thẳng và một vòng tròn hoặc cung (hoặc hai trong số đó) giữ tiếp tuyến |
| `GCVERTICAL` |  | Ràng buộc: một đường thẳng (hoặc hai điểm) giữ thẳng đứng |
| `GDSIN` | `GDS` | Xem bố cục vi mạch (tệp luồng GDSII): mọi lớp và kiểu dữ liệu thành lớp bản vẽ, phẳng, theo đơn vị người dùng; chỉ để xem và đo (thử nghiệm trong phòng thí nghiệm) |
| `GEOMCONSTRAINT` | `GCON` | Ràng buộc hình học: nằm ngang, thẳng đứng, song song, tiếp tuyến, trùng nhau… |
| `GLBOUT` |  | Xuất mô hình 3D thành GLB (glTF) |
| `GRADIENT` | `GD` | Tô một vùng bằng gradient của một hoặc hai màu |
| `GRIDMOVE` | `GM` | Di chuyển đường lưới và những gì treo trên nó: tường co giãn, cột, bong bóng và thẻ di chuyển, kích thước đi theo. |
| `GROUP` | `G` | GROUP (G): đặt tên chung cho các đối tượng đã chọn. Sau đó nhấp một trong số chúng sẽ chọn tất cả. Enter ở ô tên tạo nhóm không tên. |
| `GROUPEDIT` |  | GROUPEDIT: sửa một nhóm. Chọn một đối tượng của nhóm hoặc nhập Tên của nó, rồi Thêm hoặc Gỡ đối tượng, ĐỔI tên, sửa Mô tả, hoặc chọn nhóm có được chọn cả khối khi nhấp hay không. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Tô một vùng bằng màu đặc hoặc mẫu: nhấp bên trong, hoặc chọn các đối tượng kín (H) |
| `HATCHEDIT` | `HE` | Đổi tô bóng: mẫu, tỷ lệ, góc, gốc, và liên kết với đường bao. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Tạo lại đa tuyến đường bao từ một tô bóng, có liên kết hoặc không |
| `HATCHTOBACK` |  | Gửi mọi tô bóng ra sau mọi thứ khác. |
| `HELP` | `?` | Danh sách này |
| `HIDEOBJECTS` |  | Ẩn các đối tượng đã chọn cho đến khi UNISOLATEOBJECTS. Không được lưu cùng bản vẽ. |
| `HISTORY` | `HIST` | HISTORY (HIST): các phiên bản của bản vẽ này — bản sao được giữ trên máy tính này khi Studio lưu, và các phiên bản trên đám mây — để mở, khôi phục, và so sánh với phần đã thay đổi được tô màu. |
| `ID` |  | Tọa độ của một điểm |
| `IMAGE` | `IM` | Cho CadCraft biết các tệp hình ảnh mà bản vẽ dùng (DWG chỉ lưu nơi chúng nằm). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Đặt một hình ảnh (PNG hoặc JPEG) từ tệp. |
| `IMAGECLIP` | `ICL` | Cắt hình ảnh theo hình chữ nhật hoặc đa giác, hoặc gỡ phần cắt. |
| `IMPORT` | `IMP` | Nhập một tệp thuộc loại mà tiện ích đọc được vào bản vẽ này |
| `INSERT` | `I`, `DDINSERT` | Đặt khối (S tỷ lệ, R xoay); F từ tệp DWG/DXF, L từ thư viện |
| `INTERSECT` | `IN` | Chỉ giữ phần chung của các khối đặc (3D), hoặc vùng chung của các miền 2D |
| `ISODRAFT` |  | ISODRAFT: bật hoặc tắt vẽ đẳng cự, hoặc vẽ thẳng trên mặt Trái, Trên hoặc Phải. Khi bật, Ortho và truy vết cực theo hai trục của mặt, lưới được vẽ đẳng cự, và ELLIPSE có Vòng đẳng cự. |
| `ISOLATEOBJECTS` | `ISOLATE` | Chỉ hiện các đối tượng đã chọn; mọi thứ khác trong không gian này bị ẩn cho đến khi UNISOLATEOBJECTS. Không được lưu cùng bản vẽ. |
| `ISOPLANE` |  | ISOPLANE: chọn mặt đẳng cự để vẽ: Trái, Trên hoặc Phải. Enter chuyển sang mặt kế tiếp, giống như F5 khi đang bật vẽ đẳng cự. |
| `JOIN` | `J` | Nối đường thẳng, cung và đa tuyến gặp nhau đầu nối đầu thành một đa tuyến; đường thẳng nằm trên một đường thành một đường thẳng (J) |
| `LASER` | `LASERCUT` | Mở bảng Laser: gửi lớp đến máy cắt laser hoặc máy khắc (G-code GRBL) |
| `LASSOMODE` |  | Nhấn và kéo vẽ lasso (1) hoặc hình chữ nhật (0) |
| `LAYDEL` |  | Xóa một lớp và mọi đối tượng trên đó (trong mô hình, trên tờ và trong khối) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Mở trình quản lý lớp: mọi lớp trong một bảng |
| `LAYERPANEL` |  | Hiện bảng lớp |
| `LAYFRZ` |  | Đóng băng lớp của mỗi đối tượng bạn chọn |
| `LAYGROUP` | `LG` | Gom lớp thành thư mục trong bảng Lớp. |
| `LAYISO` |  | Cô lập các lớp của đối tượng đã chọn (tắt mọi lớp khác) |
| `LAYLOCKFADE` |  | Đặt mức mờ của đối tượng trên lớp bị khóa, và có cho phép nhấp để chọn chúng hay không. |
| `LAYMCUR` |  | Đặt lớp của đối tượng bạn chọn làm lớp hiện hành |
| `LAYMRG` |  | Gộp lớp: đối tượng của chúng chuyển sang lớp đích, và các lớp đã gộp bị xóa |
| `LAYOFF` |  | Tắt lớp của mỗi đối tượng bạn chọn |
| `LAYON` |  | Bật mọi lớp |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Một tờ mới có khung tên và khung nhìn |
| `LAYTHW` |  | Mở băng mọi lớp |
| `LAYUNISO` |  | Bật lại các lớp mà LAYISO đã tắt |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Đổi văn bản gõ bằng phông tiếng Việt cũ (phông TCVN3 / ABC như .VnTime, và phông VNI như VNI-Times) sang Unicode. Văn bản như vậy vốn đã hiện đúng; lệnh này ghi lại hẳn, kèm số lượng và một bước hoàn tác. |
| `LENGTHEN` | `LEN` | Kéo dài hoặc rút ngắn đường thẳng, cung và đa tuyến: theo một lượng, một phần trăm, đến một tổng, hoặc bằng cách kéo (LEN) |
| `LIBRARY` | `LIB` | Bảng thư viện: đặt mục, kiểm tra cập nhật, phần ghi công |
| `LIMITS` |  | Đặt giới hạn bản vẽ: BẬT, TẮT, hoặc các góc dưới-trái và trên-phải. Khi giới hạn được BẬT, các điểm nằm ngoài sẽ bị từ chối |
| `LINE` | `L` | Các đoạn thẳng, mỗi đoạn là một đối tượng riêng |
| `LINETYPE` | `LT`, `CELTYPE` | Kiểu đường mà đối tượng mới nhận (theo lớp, theo khối, hoặc một kiểu có tên) |
| `LINKVIEWS` | `SYNCVIEWS` | Di chuyển và thu phóng mọi khung cùng lúc (chia màn hình), để so sánh hai bản vẽ hoặc hai bản sửa đổi |
| `LISPEDIT` | `VLIDE` | LISPEDIT (hoặc VLIDE) mở trình soạn LISP: một cửa sổ để viết, nạp và thử một chương trình con. Nạp vào bản vẽ đọc mọi dạng, như khi nạp tệp bằng APPLOAD, và tạo các lệnh của nó. Chạy vùng chọn tính các dạng đã chọn, hoặc dạng mà con trỏ đang ở. Bảng điều khiển hiện những gì chương trình in ra và từng lỗi kèm dòng. Dấu ngoặc tương ứng được đánh dấu khi bạn gõ, và Enter thụt đầu dòng mới. Mới, Mở và Lưu làm việc với tệp .lsp. Các danh sách bên cạnh văn bản hiện các hàm mà chương trình định nghĩa, các hàm nó gọi mà LISP này chưa có, và mọi hàm nó có. Cửa sổ không chặn bản vẽ, nên chương trình có thể yêu cầu điểm; Stop hoặc Esc kết thúc chương trình đang chạy. |
| `LIST` | `LI`, `LS` | Mô tả đối tượng trong lịch sử |
| `LTSCALE` | `LTS` | Tỷ lệ kiểu đường của bản vẽ (mỗi nét và khoảng hở được nhân với số này) |
| `LWDISPLAY` | `LWT` | Hiện hoặc ẩn độ dày nét trên màn hình (nút LWT ở thanh trạng thái) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Độ dày nét mà đối tượng mới nhận (theo lớp, theo khối, mặc định, hoặc mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | lớp bản đồ dưới không gian mô hình: hệ tọa độ của bản vẽ, ô bản đồ, WMS, WMTS, ArcGIS, hình ảnh |
| `MASSPROP` |  | MASSPROP: thuộc tính mặt cắt của miền và đối tượng kín: diện tích, chu vi, tâm, mômen và tích quán tính, bán kính quán tính và các trục chính. Chính xác với đường thẳng và cung. Có thể ghi báo cáo ra tệp văn bản. |
| `MATCHPROP` | `MA`, `PAINTER` | Khớp thuộc tính: sao chép lớp, màu và nhiều thứ khác của một đối tượng sang các đối tượng khác (MA) |
| `MEASURE` | `ME` | MEASURE (ME): một dấu cách mỗi độ dài cho trước dọc theo đường thẳng, cung, vòng tròn, đa tuyến, spline hoặc elip, tính từ đầu gần điểm bạn chọn. Điểm, hoặc với Khối là một khối tại mỗi dấu. |
| `MEASUREGEOM` | `MEA` | Đo khoảng cách, bán kính, góc hoặc diện tích (MEA) |
| `MINSERT` |  | MINSERT: đặt khối theo hàng và cột trong một lần. Mỗi cái là một tham chiếu riêng, nên bạn có thể di chuyển hoặc xóa từng cái. |
| `MIRROR` | `MI` | Lấy đối xứng đối tượng qua một đường |
| `MLEADER` | `MLD`, `MLEAD` | Đường dẫn nhiều: một mũi tên, đường dẫn và ghi chú, thành một đối tượng (MLD) |
| `MLEADERALIGN` | `MLA` | Thẳng hàng các đường dẫn nhiều với một cái trong số đó theo một hướng, cách đều, hoặc phân bố giữa hai điểm (MLA) |
| `MLEADERCOLLECT` | `MLC` | Gom nhiều đường dẫn nhiều thành một: khối của chúng thành hàng hoặc cột, hoặc ghi chú xếp dưới nhau (MLC) |
| `MLEADEREDIT` | `MLE` | Thêm hoặc gỡ đường dẫn của đường dẫn nhiều; đổi nội dung giữa văn bản và khối (MLE) |
| `MLINE` |  | Vẽ nhiều đường song song cùng lúc, nối tại các góc. |
| `MOVE` | `M` | Di chuyển đối tượng theo một điểm gốc và một điểm thứ hai |
| `MSPACE` | `MS` | Làm việc trên mô hình qua một khung nhìn của tờ đang mở (hoặc nhấp đúp bên trong khung nhìn). |
| `MTEXT` | `MT`, `T` | Văn bản đoạn: kéo để chọn chiều rộng, rồi gõ tại chỗ; Enter bắt đầu đoạn mới (T) |
| `MVIEW` | `MV` | Một khung nhìn vào mô hình, trên một bố cục |
| `NAMEDVIEW` | `NV`, `VIEWS` | Khung nhìn có tên: lưu khung nhìn trên màn hình (hoặc một cửa sổ) dưới một tên và quay lại sau (NV) |
| `NCOPY` |  | Sao chép đối tượng từ một tham chiếu khối hoặc bản vẽ liên kết vào bản vẽ, mà không phân rã nó. |
| `NEARBY` |  | Cho biết những gì nằm gần con trỏ, gần nhất trước, kèm khoảng cách và phía. |
| `NEW` |  | Bắt đầu bản vẽ mới |
| `OBJECTSCALE` | `OBJSCALE` | Tỷ lệ chú thích của văn bản và kích thước chú thích: thêm một tỷ lệ, xóa một tỷ lệ, thêm tỷ lệ hiện hành, hoặc liệt kê (mỗi khung nhìn hiện chúng theo cỡ của tỷ lệ riêng) |
| `OBJOUT` |  | Xuất mô hình 3D thành OBJ |
| `OFFSET` | `O` | Bản sao song song ở một khoảng cách |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: cách OFFSET khép các khe hở ở góc ngoài của đa tuyến. 0 kéo dài các đoạn, 1 thêm cung, 2 thêm đường cắt thẳng. Được giữ cho phiên này. |
| `OLELIST` | `OLES` | Liệt kê các đối tượng OLE mà bản vẽ mang theo và đặt một bản sao hình của một cái vào nơi bạn chọn |
| `OPEN` |  | Mở DWG hoặc DXF từ máy tính này |
| `OPENIN3D` |  | Mở bản vẽ này trong ứng dụng mô hình hóa 3D, trong thẻ mới (không tải lên gì cả) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Mở menu bắt điểm đối tượng: chọn bắt điểm nào được bật. Cũng là nhấp chuột phải vào Bắt điểm ở thanh trạng thái. |
| `OVERKILL` |  | Xóa đối tượng trùng và gộp đường thẳng, cung chồng lên nhau hoặc nối đầu với nhau, trong một dung sai. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Bảng Tham số: tham số người dùng và ràng buộc kích thước trong một bảng |
| `PARTSLIST` | `PLIST` | Bảng danh sách chi tiết của mọi chi tiết tiêu chuẩn và thép hình được đặt từ Thư viện |
| `PASTEAREA` | `PAREA` | Dán vùng đã sao chép trong MarkupCraft (Sao chép vùng) với kích thước thật, dưới dạng hình. |
| `PASTEBLOCK` |  | PASTEBLOCK: dán những gì bạn đã sao chép thành một khối. Khối có tên riêng; RENAME đặt tên của bạn. |
| `PASTECLIP` |  | Dán bộ nhớ tạm: nó đi theo con trỏ, nhấp nơi cần đặt (Ctrl+V) |
| `PASTEORIG` |  | Dán bộ nhớ tạm tại tọa độ nơi nó được sao chép (Ctrl+Shift+V) |
| `PDF` |  | Cho CadCraft biết các tệp PDF mà lớp nền của bản vẽ dùng |
| `PDFADJUST` |  | Làm mờ, đổi độ tương phản, đơn sắc hoặc tắt lớp nền PDF |
| `PDFATTACH` | `PDFATT` | Đính trang PDF làm lớp nền (PDFATTACH) |
| `PDFCLIP` |  | Cắt lớp nền PDF theo hình chữ nhật hoặc đa giác |
| `PDFIMPORT` | `PDFIM` | Biến đường, màu tô và văn bản của một trang PDF thành đối tượng bản vẽ (PDFIMPORT) |
| `PDFLAYERS` |  | Bật hoặc tắt các lớp của lớp nền PDF |
| `PEDIT` | `PE` | Sửa đa tuyến: đóng, mở, nối, độ rộng, làm khớp đường cong, spline, bỏ đường cong, tạo kiểu đường, đảo chiều; đường thẳng, cung và spline có thể đổi thành đa tuyến |
| `PHOTOSKETCH` | `PSK` | Biến ảnh chụp bản phác thảo tay trên giấy thành đường thẳng và cung theo tỷ lệ, nắn phối cảnh và cho mỗi màu bút một lớp riêng. |
| `PICKSTYLE` |  | PICKSTYLE: khi chọn một đối tượng trong nhóm, có chọn cả nhóm (1, thiết lập ban đầu) hay chỉ đối tượng đó (0). Được giữ cho phiên này. |
| `PLAN` |  | Xoay khung nhìn để trục X của UCS (UCS hiện hành, một UCS đã lưu, hoặc Thế giới) nằm ngang trên màn hình. Không có gì trong bản vẽ di chuyển. |
| `PLINE` | `PL` | Đa tuyến gồm các đoạn thẳng và cung |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | In ra PDF: một bố cục, hoặc mô hình theo một tỷ lệ |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Bảng kiểu in: đặt mỗi màu sẽ in ra thành gì (màu, đen, xám, mực, độ dày nét); được lưu cùng bản vẽ (STYLESMANAGER) |
| `POINT` | `PO` | Đối tượng điểm |
| `POINTCLOUD` | `PC` | đám điểm đính kèm: cắt lát, chiều cao, độ dày, màu, kích thước, hiện, thu phóng, tháo |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | đính kèm đám điểm (LAS, LAZ, XYZ, PTS) dưới bản vẽ |
| `POLARANG` |  | Bước truy vết cực tính bằng độ (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Đa giác đều |
| `PRESSPULL` |  | Đẩy hoặc kéo một mặt của khối đặc (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Mở bảng Thuộc tính (cũng là Ctrl+1, hoặc nhấp đúp vào đối tượng) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Gấp bảng Thuộc tính về mép cửa sổ |
| `PSPACE` | `PS` | Rời khung nhìn đang làm việc và quay lại tờ (hoặc nhấp đúp bên ngoài khung). |
| `PUBLISH` | `-PUBLISH` | In nhiều hoặc mọi tờ thành một PDF (một trang và một dấu trang cho mỗi tờ) |
| `PURGE` | `PU` | Xóa định nghĩa khối không được dùng |
| `QDIM` |  | Kích thước nhanh: ghi kích thước cho nhiều đối tượng cùng lúc (liên tục, đường gốc, so le, tọa độ, bán kính hoặc đường kính) |
| `QPMODE` | `QP` | Thuộc tính nhanh theo con trỏ: bật hoặc tắt |
| `QSELECT` | `QS` | Chọn nhanh: mọi đối tượng của một loại có lớp, màu, kích thước hoặc tên khớp (QS) |
| `RASTERSNAP` |  | Bật hoặc tắt bắt điểm vào các đường của bản quét. |
| `RAY` |  | Tia: một đường dựng từ một điểm, kéo dài vô hạn về một phía. |
| `RECOVER` |  | Mở DXF hoặc DWG bị hỏng: bỏ qua phần không đọc được thay vì từ chối tệp, cho biết đã bỏ những gì, rồi kiểm tra và sửa bản vẽ như AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Đa tuyến kín từ hai góc |
| `REDLINE` | `RDL` | Đường đỏ sang bản sửa đổi: đọc gói đường đỏ của MarkupCraft, chấp nhận hoặc từ chối từng thay đổi, đám mây các thay đổi được chấp nhận kèm nhật ký sửa đổi, và lưu tệp trả lời (RDL) |
| `REDO` |  | Làm lại những gì vừa hoàn tác |
| `REFCLOSE` |  | Kết thúc sửa khối tại chỗ: lưu, hoặc bỏ thay đổi |
| `REFEDIT` |  | Sửa khối tại chỗ, nơi có một tham chiếu của nó, với phần còn lại của bản vẽ bị làm mờ; REFCLOSE lưu lại |
| `REGEN` | `RE` | Dựng lại những gì được vẽ trong thẻ này từ bản vẽ |
| `REGENALL` | `REA` | Dựng lại những gì được vẽ trong mọi thẻ, khung và bản vẽ đang mở |
| `REGION` | `REG` | REGION (REG): tạo miền phẳng từ đối tượng kín, hoặc từ đường thẳng, cung và đa tuyến khép vòng đầu nối đầu. UNION, SUBTRACT và INTERSECT sau đó kết hợp các miền, và MASSPROP cho thuộc tính mặt cắt của chúng. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Đăng ký nhiều bản quét: đặt chúng vào một khung bằng các cặp điểm hoặc mục tiêu chọn trên hình, tinh chỉnh bằng ICP, xuất một tệp LAS hoặc E57 |
| `REINIT` |  | Nạp lại tệp tên viết tắt của bạn |
| `RENAME` | `-RENAME`, `REN` | Đổi tên lớp hoặc khối (mọi đối tượng hoặc tham chiếu đi theo) |
| `REVCLOUD` | `RC` | Đám mây sửa đổi: bao quanh bằng hình chữ nhật, đa giác, đường vẽ tự do hoặc một đối tượng (RC) |
| `REVOLVE` | `REV` | Quay đối tượng 2D kín quanh một trục thành khối đặc (3D) |
| `ROTATE` | `RO` | Xoay đối tượng quanh một điểm gốc |
| `SAMPLES` | `SAMPLE` | Mở một trong các bản vẽ mẫu của CadCraft (bộ kiến trúc, bản hoàn công) để học |
| `SAVE` | `QSAVE` | Tải bản vẽ xuống theo định dạng của nó (DWG hoặc DXF) |
| `SAVEAS` |  | Tải bản vẽ xuống dạng DWG hoặc DXF: chọn loại nào |
| `SAYSEL` |  | Đọc to những gì đang được chọn, mỗi đối tượng một câu. |
| `SCALE` | `SC` | Đổi tỷ lệ đối tượng quanh một điểm gốc |
| `SCALELISTEDIT` | `SCALELIST` | Thêm, sửa và xóa các tỷ lệ riêng của bản vẽ; chúng hiện trong danh sách tỷ lệ của khung nhìn và của bản in, và được lưu trong tệp (SCALELIST) |
| `SCANALIGN` | `SCL` | Căn một bản quét theo hai điểm: di chuyển, xoay và, nếu bạn chọn, đổi tỷ lệ. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Chèn bản vẽ quét: PNG, JPEG hoặc TIFF (một trang hoặc tất cả trang của tệp nhiều trang) hoặc một trang PDF là hình ảnh. |
| `SCANCLEAN` | `SCC` | Đổi bản quét thành đen trắng và xóa các đốm. |
| `SCANCROP` | `SCR` | Cắt bản quét theo một cửa sổ. |
| `SCANDESKEW` | `SCD` | Tìm góc mà các đường dài của bản quét nghiêng, và xoay cho thẳng sau khi bạn chấp nhận góc đó. |
| `SCANERASE` | `SCE` | Xóa một vùng của bản quét: hình chữ nhật, đa giác hoặc lasso. |
| `SCANINFO` | `SCI` | Hiện tệp gốc của bản quét và các bước đã thực hiện từ đó. |
| `SCANSCALE` | `SCS` | Đổi tỷ lệ bản quét: chọn hai điểm trên đó và gõ khoảng cách thực giữa chúng. |
| `SCANTRACE` | `SCT` | Vẽ lại bản quét thành đường thẳng và cung trên lớp mới, theo dung sai bạn đặt. Văn bản và tô bóng vẫn ở dạng ảnh. |
| `SELECT` |  | Chọn đối tượng ngay (cho P, Trước, trong lệnh kế tiếp) |
| `SELECTALL` | `AI_SELALL` | Chọn mọi đối tượng bạn có thể sửa trong thẻ này (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Chọn mọi đối tượng giống các đối tượng bạn chọn: cùng loại, lớp và màu (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Hiện bảng Bộ tờ: các tờ từ nhiều bản vẽ, được đánh số, xuất bản thành một PDF. |
| `SHORTCUTS` | `KEYS` | Gán cho lệnh bất kỳ một phím riêng (Ctrl hoặc Alt với một chữ cái, hoặc một phím chức năng trống), được giữ trong trình duyệt hoặc ứng dụng máy tính này. |
| `SHXFONTS` | `SHX` | Cho CadCraft phông SHX từ một thư mục hoặc tệp, để kiểu văn bản nêu tên chúng vẽ được bằng chúng (liệt kê, gỡ, đảo) |
| `SKETCHFIX` | `SKF` | Vẽ nét tự do; mỗi nét thành một đường thẳng, vòng tròn, cung, hình chữ nhật hoặc đa tuyến gọn, vuông góc và nối với các nét khác. |
| `SKETCHLIVE` | `SKL` | Phác thảo bằng bút: mỗi nét thành một đường thẳng, vòng tròn, cung hoặc hình chữ nhật chính xác khi bạn nhấc bút, bắt vào bản vẽ, với kích thước gõ đè lên. |
| `SPLINE` | `SPL` | Vẽ spline qua các điểm (hoặc với đa giác điều khiển), hoặc đổi đa tuyến thành spline |
| `SPLINEDIT` | `SPE` | Sửa spline: điểm khớp, điểm điều khiển và trọng số, mở hoặc đóng, đảo chiều, hoặc đổi thành đa tuyến |
| `SPLIT` |  | Chia vùng vẽ thành các khung (như VPORTS trên mô hình; cũng từ tờ) |
| `STEELMEMBER` | `SMEMBER` | Thanh thép 3D từ tiết diện tiêu chuẩn: hai điểm (dầm) hoặc một điểm gốc và chiều cao (Cột) |
| `STLOUT` |  | Xuất mô hình 3D thành STL (milimét) |
| `STRETCH` | `S` | Kéo giãn: kéo một cửa sổ chọn cắt qua các đầu để di chuyển; phần bên trong di chuyển, phần còn lại đứng yên (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Kiểu văn bản: phông, chiều cao, chiều rộng và độ nghiêng mà văn bản mới nhận (hộp thoại; -STYLE trên dòng lệnh) |
| `SUBTRACT` | `SU` | Lấy khối đặc ra khỏi khối khác (3D), hoặc lấy miền 2D ra khỏi miền khác |
| `SWBOUT` | `SWMACRO` | Tải xuống một macro cho SolidWorks (.swb) để dựng lại mô hình thành một phác thảo có ràng buộc |
| `SWEEP` |  | Quét đối tượng 2D kín dọc theo một đường (đường thẳng, đa tuyến, cung, vòng tròn) thành khối đặc (3D) |
| `TABLE` | `TB` | Tạo bảng: hàng và cột, hoặc từ ô bảng tính trong bộ nhớ tạm hoặc tệp CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Sửa bảng: gõ vào ô, chèn và xóa hàng và cột, kích thước, ô gộp, căn lề |
| `TABLEEXPORT` |  | Lưu những gì bảng hiện thành tệp CSV |
| `TABLEPASTE` | `PASTETABLE` | Tạo bảng từ ô bảng tính trong bộ nhớ tạm |
| `TABLESTYLE` | `TS` | Kiểu bảng: chiều cao chữ, căn lề, lề và viền cho hàng tiêu đề, đầu đề và dữ liệu |
| `TAGS` |  | Thẻ trên tham chiếu khối: định nghĩa một thẻ (loại, giá trị cho phép, các khối áp dụng), đặt nó cho các tham chiếu đã chọn, và liệt kê chúng thành bảng có thể lưu CSV |
| `TEXT` | `DT`, `DTEXT` | Văn bản một dòng; Enter bắt đầu dòng kế tiếp |
| `TEXTEDIT` | `ED`, `DDEDIT` | Sửa văn bản tại chỗ: chọn một văn bản (hoặc nhấp đúp vào) (ED) |
| `TEXTMASK` | `TMASK` | Đặt nền che phía sau văn bản (nền bản vẽ hoặc một màu), hoặc gỡ bỏ. |
| `TEXTTOFRONT` |  | Đưa mọi văn bản, kích thước và đường dẫn lên trước mọi thứ khác. |
| `TOOLBAR` |  | Chọn nút thanh công cụ hiển thị: biểu tượng và chữ, chỉ biểu tượng, hoặc chỉ chữ (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Đặt thanh công cụ ở trên, dưới, trái hoặc phải của cửa sổ |
| `TOOLBARROWS` |  | Chọn thanh công cụ dùng bao nhiêu hàng: tự gói cho vừa, 2, hoặc 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Đặt các thanh phía trên bản vẽ thành tiêu chuẩn hoặc gọn |
| `TOUCHCROSSHAIR` | `TCX` | Chữ thập lệch khi vẽ bằng ngón tay: một ngón tay di chuyển một chữ thập nằm phía trên và bên cạnh, nên ngón tay không che điểm chọn. Nhấc ngón tay không chọn gì; nút Nhấp hoặc chạm bằng ngón thứ hai sẽ chọn tại chữ thập, và giữ Nhấp khi di chuyển thì kéo. Nhấn giữ lâu hoặc nút Enter là Enter. Hai ngón tay để di chuyển và thu phóng. Tùy chọn: BẬT, TẮT, Tự động (chỉ bật khi ngón tay là con trỏ duy nhất), Khoảng cách, Phía. |
| `TOUR` | `TUTORIAL` | Xem lại hướng dẫn sáu bước cho bản vẽ đầu tiên |
| `TRIM` | `TR` | Cắt đối tượng về chỗ các đối tượng khác cắt qua: nhấp một đoạn, kéo qua nhiều đoạn, hoặc Shift+nhấp để kéo dài |
| `TRIMEXTENDMODE` |  | Cách TRIM và EXTEND bắt đầu: 1 Nhanh (mọi đối tượng là cạnh cắt hoặc đường bao), 0 Tiêu chuẩn (chọn cạnh trước) |
| `TTR` |  | Một vòng tròn tiếp tuyến với hai đối tượng, với bán kính bạn cho (giống CIRCLE T). |
| `TURNLEFT` |  | Xoay khung nhìn 90° sang trái (ngược chiều kim đồng hồ): UCS Z -90, và khung nhìn đi theo. Không có gì trong bản vẽ di chuyển. |
| `TURNRIGHT` |  | Xoay khung nhìn 90° sang phải (theo chiều kim đồng hồ): UCS Z 90, và khung nhìn đi theo. Không có gì trong bản vẽ di chuyển. |
| `TURNWORLD` |  | Về thế giới: UCS Thế giới, và khung nhìn lại nằm ngang. |
| `TXT2MTXT` | `T2M` | Nối các văn bản một dòng thành một văn bản đoạn, từ trên xuống dưới. |
| `UCS` |  | Hệ tọa độ riêng của bạn: một gốc và trục X (gốc, góc Z, 3 điểm, Đối tượng, Trước, Thế giới, Có tên). Điểm bạn gõ, ortho, truy vết cực, lưới và văn bản mới đều theo nó; khung nhìn xoay để trục X của nó nằm ngang. Không có gì trong bản vẽ di chuyển. |
| `UNDO` | `U` | Hoàn tác lệnh vừa dùng |
| `UNGROUP` |  | UNGROUP: tháo các nhóm. Chọn đối tượng của nhóm, hoặc nhập Tên. Các đối tượng vẫn nằm trong bản vẽ. |
| `UNION` | `UNI` | Gộp các khối đặc thành một (3D), hoặc các miền 2D thành một miền |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Hiện lại mọi đối tượng đã bị ẩn bởi ISOLATEOBJECTS hoặc HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cách hiển thị và nhập độ dài: thập phân, feet và inch, phân số (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Tính lại các trường, và chọn khi nào chúng tự cập nhật |
| `USDOUT` |  | Xuất mô hình 3D thành USD (.usda văn bản, .usdc nhị phân hoặc gói .usdz) |
| `VIEW` | `-VIEW`, `V` | Khung nhìn 3D chuẩn, phối cảnh hoặc song song (3D) |
| `VIEWBASE` | `FLATSHOT` | Đặt khung nhìn 2D phẳng của khối 3D (trước, trên, bên hoặc đẳng cự, đường khuất đứt nét) lên tờ hoặc trong mô hình |
| `VIEWLABEL` | `VL` | Tiêu đề khung nhìn trên tờ, hiện tên khung nhìn của khung và đổi theo nó. |
| `VOICE` |  | Bật hoặc tắt lệnh bằng giọng nói. Được nhận diện trên máy tính này. |
| `VPCLIP` |  | Cắt khung nhìn tờ theo một đối tượng kín hoặc đa giác vẽ; Delete biến nó lại thành hình chữ nhật |
| `VPLAYER` |  | Đóng băng hoặc mở băng lớp trong một số khung nhìn (Đóng băng, Mở băng, Đặt lại), và chọn lớp nào khung nhìn mới bắt đầu ở trạng thái đóng băng (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Chia vùng vẽ thành các khung, mỗi khung có khung nhìn riêng (trên tờ: một khung nhìn, như MVIEW) |
| `VPVIEW` |  | Đặt khung nhìn hiển thị gì: chọn một cửa sổ trên mô hình |
| `VSCURRENT` | `VS`, `SHADEMODE` | Kiểu hiển thị của khung nhìn 3D: tô bóng, cạnh, đường khuất, khung dây, tia X |
| `WALL` | `WA` | Vẽ tường 2D như đa tuyến. Chúng nối vào nhau, và mang cửa đi và cửa sổ. |
| `WALLARC` | `WARC` | Vẽ một cung tường. Tường trên mặt bằng là thẳng, nên cung được vẽ thành các đoạn tường thẳng ngắn (mỗi đoạn 15 độ) nối với nhau. |
| `WALLDELSEG` |  | Xóa một đoạn tường giữa hai điểm. Phần còn lại vẫn là một hoặc hai tường. |
| `WALLDIM` |  | Gõ giá trị mới cho một kích thước: tường ở đầu xa di chuyển vuông góc với chính nó, tường ở đầu thứ nhất giữ nguyên, và các tường nối với nó đi theo. |
| `WALLDISJOIN` |  | Chọn một tường gần một đầu để không cho nối ở đầu đó: đầu được vẽ vuông và không có gì đi theo. Chọn lại để cho phép nối. |
| `WALLGRID` |  | Khóa tường vào một đường lưới: dọc theo nó, hoặc một đầu nằm trên nó. Di chuyển đường bằng GRIDMOVE và tường đi theo. |
| `WALLHOLD` |  | Căn và khóa: tường giữ vị trí so với tường khác (trên đường của nó, hoặc ở khoảng cách đang có). Nếu một bên di chuyển, bên kia đi theo. |
| `WALLHOLDDIM` |  | Khóa khoảng cách giữa hai tường song song. Nếu một bên di chuyển, bên kia đi theo để giữ khoảng cách. |
| `WALLHOLDS` |  | Liệt kê các khóa trên tường. |
| `WALLJOINS` |  | Gán mã định danh cho mọi tường của bản vẽ cũ và lưu các chỗ nối giữa chúng. Việc này cũng xảy ra ở lần thay đổi đầu tiên bạn làm. |
| `WALLJOINSTYLE` |  | Nhấp vào góc nơi hai tường gặp nhau đầu nối đầu để đổi cách vẽ: vát, đối đầu, cắt vuông. T đổi tường nào chạy xuyên qua. |
| `WALLOFFSET` | `WO` | Dời tường vuông góc với chính nó một khoảng (các tường nối với nó đi theo), hoặc tạo bản sao ở khoảng cách đó. |
| `WALLPICK` |  | Tạo tường trên một đường thẳng hoặc đa tuyến trong bản vẽ, với các đường nối vào nó nếu bạn chọn Có. |
| `WALLPOLY` | `WP` | Vẽ tường quanh một đa giác đều có 3 đến 64 cạnh, giống POLYGON. |
| `WALLRECT` | `WR` | Vẽ bốn tường nối nhau từ hai góc đối diện, giống RECTANG. |
| `WALLREJOIN` |  | Biến hai phần của một tường thành một tường trở lại. Phần đầu giữ vị trí trong bản vẽ. |
| `WALLROT` |  | Vẽ bốn tường nối nhau thành hình chữ nhật xoay theo góc bất kỳ: cạnh thứ nhất, rồi khoảng cách ra ngoài. |
| `WALLSPLIT` | `WS` | Tách một tường thành hai tại một điểm hoặc chỗ tường khác cắt qua. Các phần vẫn nối với nhau trừ khi bạn yêu cầu khe hở hoặc đầu tự do. Cửa đi và cửa sổ đi theo phần của chúng. |
| `WALLSPLITGAP` |  | Tách tường và để lại khe hở: gõ khe hở, chọn tường, rồi chọn điểm. Các phần giữ đầu tự do và có thể nối lại. |
| `WALLSTRETCH` |  | Kéo giãn bằng cửa sổ: đầu tường nằm trong cửa sổ di chuyển, tường nằm hoàn toàn trong cửa sổ di chuyển nguyên cái, và tường chạm vào cạnh bên trượt theo. |
| `WALLTAN` |  | Nối tiếp tường bằng một cung rời khỏi nó theo hướng tường (vẽ thành các đoạn tường thẳng ngắn). |
| `WALLTRACE` |  | Tạo tường quanh vùng kín nhỏ nhất của đường và tường bao quanh điểm bạn nhấp. |
| `WALLUNHOLD` |  | Gỡ khóa khỏi một tường (và khóa của các tường khác nối với nó). |
| `WBLOCK` | `W`, `-WBLOCK` | Ghi một khối, một số đối tượng, hoặc toàn bộ bản vẽ thành tệp DWG hoặc DXF mới (W) |
| `WEDGE` | `WE` | Một nêm: hai góc và một chiều cao; nó dốc xuống từ góc thứ nhất (3D) |
| `WHEREAMI` | `WHERE` | Cho biết con trỏ đang ở đâu. |
| `WHOHAS` |  | Cho biết ai đang mở bản vẽ. CadCraft Studio giữ một tệp khóa nhỏ bên cạnh mỗi bản vẽ đang mở (Plan.dwg.cclock: ai, từ lúc nào, phiên bản nào) và xóa khi đóng. Tùy chọn: Hiện hành (bản vẽ đang mở), Tệp (chọn một tệp), Thư mục (mọi bản vẽ trong thư mục đang được mở ở đâu đó; cũng cho phép Studio giữ tệp khóa trong thư mục đó), Đường dẫn (gõ một đường dẫn), Tên (tên người khác thấy). Khóa không được làm mới trong năm phút được coi là cũ. Không dùng được trên trình duyệt. |
| `WINDOW` | `WN` | Đặt cửa sổ vào tường. |
| `XATTACH` | `XA` | Liên kết một DWG hoặc DXF khác vào bản vẽ này, chỉ đọc (XREF liệt kê và nạp lại chúng) |
| `XCLIP` | `XC` | Cắt tham chiếu khối và bản vẽ liên kết theo hình chữ nhật hoặc đa giác, hoặc gỡ phần cắt. |
| `XLINE` | `XL` | Đường dựng, vô hạn về cả hai phía: qua hai điểm, nằm ngang, thẳng đứng, theo một góc, chia đôi một góc, hoặc dời từ một đường. |
| `XREF` | `XR`, `-XREF` | Bản vẽ liên kết (tham chiếu ngoài): liệt kê, đính kèm, nạp lại, gắn vào, tháo |
| `ZOOM` | `Z` | Phạm vi, hoặc một cửa sổ |
