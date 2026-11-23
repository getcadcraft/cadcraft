---
title: Bản đồ lệnh: nên gõ gì
summary: Mọi lệnh của CadCraft cùng tên ngắn, từ A đến Z, lấy từ chính chương trình, và các thói quen từ phần mềm vẽ khác có khác biệt.
keywords: bản đồ lệnh, lệnh, bí danh, tên ngắn, chuyển từ, danh sách lệnh, nên gõ gì, xóa, cắt, tương đương, khác biệt
from: 9426856f
---

CadCraft dùng tên lệnh và tên ngắn mà bạn đã biết từ các phần mềm vẽ khác: gõ `L` để vẽ đường thẳng, `TR` để cắt, `E` để xóa. Vì vậy hầu hết lệnh không cần học bảng đối chiếu nào: tên bạn đã biết cũng là tên ở đây. Danh sách dưới đây gồm mọi lệnh mà CadCraft có, do chính chương trình tạo ra. {{key:Enter}} lặp lại lệnh vừa dùng; `HELP` trên dòng lệnh in ra cùng danh sách này.

Các lệnh không giống, hoặc chưa được xây dựng:

- **Lưu** tải một bản sao trong trình duyệt ({{cmd:SAVE}}, {{cmd:SAVEAS}}); trong CadCraft Studio thì ghi tệp. Xem [Chuyển từ phần mềm vẽ khác](topic:coming-from).
- **PLOT** tạo PDF (cũng có PNG và SVG), với một bảng kiểu nét in; không có trình quản lý thiết lập trang.
- **DIMSTYLE** và **PEDIT** đã được xây dựng; **PEDIT** không có tùy chọn Sửa đỉnh (Edit-vertex), việc đó do grip đảm nhận.
- **TABLE** chưa được xây dựng; {{cmd:XREF}}, {{cmd:SPLINE}} và {{cmd:WBLOCK}} đã có.
- Các lệnh riêng của một chương trình con (AutoLISP `C:NAME`) xuất hiện sau khi bạn tải nó bằng {{cmd:APPLOAD}}; chúng không được liệt kê ở đây.

## Mọi lệnh (402)

| Lệnh | Tên ngắn | Chức năng |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Xoay chế độ xem 3D bằng nút trái chuột |
| `ACCESS` | `AX` | Bật hoặc tắt vẽ không cần nhìn: kết quả đọc qua trình đọc màn hình, con trỏ bàn phím trên bản vẽ, âm thanh khi bắt điểm và lệnh nói. |
| `ALIASEDIT` |  | Sửa bí danh lệnh trong một tệp văn bản (định dạng quen thuộc L, *LINE) |
| `ALIGN` | `AL` | Di chuyển và xoay đối tượng để các điểm nguồn nằm đúng trên các điểm đích (một, hai hoặc ba cặp), và đổi tỷ lệ nếu bạn muốn |
| `ALIGNPANEL` | `ALP` | Mở bảng Căn và phân bố |
| `ALIGNTO` |  | Căn thẳng các cạnh trái, giữa, phải, trên, giữa theo chiều dọc hoặc dưới của các đối tượng đã chọn, theo vùng chọn, đối tượng chọn đầu tiên hoặc cuối cùng, hoặc một điểm |
| `ANNOALLVISIBLE` | `ANNOALL` | Hiện các đối tượng chú thích ở mọi tỷ lệ, hoặc chỉ ở nơi tỷ lệ của khung nhìn (hoặc của bản vẽ) có trong danh sách của chúng |
| `ANNOSCALE` | `CANNOSCALE` | Đặt tỷ lệ chú thích của bản vẽ: văn bản và kích thước chú thích được đổi cỡ để in ở cùng kích thước |
| `APPLOAD` | `AP` | Tải ứng dụng: các chương trình con LISP (.lsp) và tệp hộp thoại của chúng (.dcl); Bộ khởi động (AP) |
| `ARC` | `A` | Cung: 3 điểm, Điểm đầu/Tâm/Điểm cuối, Điểm đầu/Tâm/Góc, Điểm đầu/Tâm/Độ dài, Điểm đầu/Điểm cuối/Góc, Điểm đầu/Điểm cuối/Hướng, Điểm đầu/Điểm cuối/Bán kính, Tâm/Điểm đầu/Điểm cuối, Tâm/Điểm đầu/Góc, Tâm/Điểm đầu/Độ dài, Tiếp tục |
| `AREA` | `AA` | Diện tích và chu vi theo điểm hoặc của một đối tượng; Cộng và Trừ giữ tổng chạy (AA) |
| `ARRAY` | `AR` | Bản sao theo hàng và cột, hoặc quanh một tâm (AR) |
| `ARRAYASSOCIATIVITY` |  | Đặt việc các lệnh ARRAY tạo mảng vẫn chỉnh sửa được (1) hay bản sao thường (0) |
| `ARRAYCLOSE` |  | Kết thúc việc sửa các đối tượng nguồn của một mảng |
| `ARRAYEDIT` |  | Đổi một mảng được tạo bằng tùy chọn Liên kết: số lượng, khoảng cách, đối tượng nguồn, một phần tử |
| `ARRAYPATH` |  | Bản sao của đối tượng dọc theo đường thẳng, cung, đa tuyến hoặc đường cong khác |
| `ARRAYPOLAR` |  | Bản sao quanh một điểm tâm |
| `ARRAYRECT` |  | Bản sao theo hàng và cột |
| `ASBUILT` | `ASB` | ASBUILT đọc các điểm hoàn công mà một tổ đo được (CSV / TXT, do EXPORTPOINTS ghi) và so sánh với các điểm của bản vẽ: trong hoặc ngoài dung sai, chưa đo, thừa. Đánh dấu chúng trên lớp AS-BUILT và tải xuống một báo cáo CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Định nghĩa một thuộc tính (một thẻ mà khối yêu cầu một giá trị) để đưa vào khối (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Sửa giá trị thuộc tính của một tham chiếu khối trên dòng lệnh, lần lượt từng cái (Enter giữ giá trị) |
| `ATTSYNC` |  | Đưa các tham chiếu của một khối khớp với định nghĩa thuộc tính của nó: thêm các cái mới với giá trị mặc định, bỏ các cái đã xóa, đặt lại vị trí và văn bản; giữ giá trị |
| `AUDIT` |  | Kiểm tra bản vẽ đang mở để tìm hư hỏng: số không hữu hạn, đối tượng không có kích thước, thiếu lớp, khối, kiểu và kiểu đường, khối tự chứa chính nó, id trùng, kích thước và tô bị hỏng. Liệt kê những gì tìm được theo loại và hỏi trước khi sửa; việc sửa là một bước hoàn tác. |
| `AUNITS` | `ANGUNITS` | Cách góc được hiển thị và nhập: độ thập phân, độ-phút-giây, hoặc phương vị như N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Bật hoặc tắt tự hoàn thành bản vẽ, hoặc liệt kê những gì các mẫu của bản vẽ gợi ý ngay bây giờ. |
| `AUTOCONSTRAIN` |  | Thêm các ràng buộc trùng nhau, nằm ngang và thẳng đứng khi hình học đã gần nhau |
| `AUTODIM` | `ADIM` | Ghi kích thước theo quy tắc: kích thước tổng thể, chuỗi dọc theo các cạnh, các khe hở, đường kính lỗ và khoảng cách lưới, không lặp lại những gì đã ghi kích thước. |
| `AUTOSHEET` | `ASH` | Tự dàn trang: chọn giấy và tỷ lệ chuẩn, rồi đặt mọi khung nhìn với chú thích và khung tên. |
| `BATTMAN` |  | Trình quản lý thuộc tính khối: thứ tự, thẻ, lời nhắc, giá trị mặc định và chế độ của thuộc tính khối, rồi cập nhật các tham chiếu của nó |
| `BCLOSE` |  | Đóng trình soạn khối: lưu khối hoặc bỏ thay đổi |
| `BCONVERT` |  | BCONVERT tìm hình học lặp lại và biến nó thành các tham chiếu khối. Chọn các đối tượng lặp lại: mọi nhóm đối tượng khác trong không gian mở có cùng hình học, được dời và xoay theo góc bất kỳ, sẽ được tìm thấy; và khi bật Đối xứng hoặc Tỷ lệ, cả ảnh đối xứng và bản sao ở kích thước khác cũng được tìm. Đặt tên cho khối mới và một điểm gốc; vùng chọn và mọi bản sao trở thành tham chiếu đến nó, mỗi cái có góc xoay và tỷ lệ riêng. Hoặc chọn Khối rồi đặt tên một khối có sẵn để tìm các bản sao rời của các đối tượng của nó. Một bản sao phải có cùng lớp, màu, kiểu đường và độ dày nét, trừ khi Thuộc tính được đặt là Bỏ qua. Đối tượng trên lớp đã khóa được giữ nguyên. Một bước hoàn tác. |
| `BEDIT` | `BE` | Trình soạn khối: sửa các đối tượng và thuộc tính của một khối; BCLOSE lưu (BE) |
| `BLEND` |  | BLEND: một spline nối hai đầu của hai đường cong hở, chọn gần các đầu để nối. CONtinuity: Tangent theo cả hai hướng, Smooth cũng theo cách chúng cong. |
| `BLOCK` | `B`, `BMAKE` | Tạo một khối từ các đối tượng (chúng trở thành một tham chiếu) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: mọi tham chiếu đến một khối trở thành tham chiếu đến khối khác, tại cùng vị trí với cùng tỷ lệ và góc xoay. Giá trị của các thuộc tính có ở cả hai khối được giữ lại. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE hiển thị bảng Khối với con trỏ trong ô lọc. Bảng hiện một hình ảnh của mỗi khối (khối được đặt gần đây nhất đứng trước), dạng danh sách hoặc lưới; nhấp một hình hoặc kéo nó vào bản vẽ để đặt khối bằng INSERT. Trong mục Thư viện, thêm một tệp DWG hoặc DXF của riêng bạn: các khối của nó được liệt kê kèm hình ảnh và được sao chép vào bản vẽ này khi bạn đặt một khối. Trong CadCraft Studio cũng có thể thêm một thư mục bản vẽ, và tệp cùng thư mục được ghi nhớ. |
| `BOMEDIT` | `BOMCOLUMNS` | Các cột, nhóm, sắp xếp, tiêu đề, tổng và ghi chú của bảng danh mục vật tư |
| `BOMEXPORT` |  | Lưu một bảng danh mục vật tư thành tệp .csv |
| `BOMTABLE` | `BOM` | Một bảng danh mục vật tư trực tiếp của một vùng, hoặc của cả bản vẽ |
| `BOMUPDATE` |  | Cập nhật ngay mọi bảng danh mục vật tư, kể cả các bảng đã đóng băng |
| `BOMZONE` | `BZONE` | Một vùng có tên trong bản vẽ dùng cho danh mục vật tư: hai góc, một đa giác, hoặc đường viền của một đối tượng khép kín |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): chọn một điểm bên trong vùng khép kín và nhận một đa tuyến khép kín quanh nó. Cung vẫn là cung. Các đảo cũng được vẽ đường viền bên trong. |
| `BOX` |  | Một hộp: hai góc và một chiều cao (3D) |
| `BPARAMETER` | `BPARAM` | Chưa xây dựng: thêm một tham số (như Trạng thái hiển thị) vào khối. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Tham số khối: tham số có tên với công thức, và nhiều tham số hiển thị trong một khối. Hoạt động trong trình soạn khối (gán các đối tượng đã chọn vào một trạng thái) và trên một tham chiếu đã chọn (giá trị và trạng thái riêng của nó). |
| `BREAK` | `BR` | Ngắt một đường thẳng, cung, hình tròn hoặc đa tuyến giữa hai điểm (BR) |
| `BREAKATPOINT` |  | Tách một đường thẳng, cung hoặc đa tuyến thành hai tại một điểm |
| `BREAKLINE` |  | Vẽ một đường có ký hiệu ngắt; kích thước và phần kéo dài qua hai đầu được ghi nhớ. |
| `BREPLACE` |  | BREPLACE đổi một khối lấy một khối khác. Đã chọn: chọn các tham chiếu khối và đặt tên khối dùng thay thế. Tất cả: đặt tên một khối và khối thay thế của nó, và mọi tham chiếu trong mọi không gian và bên trong các khối khác đều đổi. Một tham chiếu giữ vị trí, tỷ lệ, góc xoay và lớp của nó, và giá trị của các thuộc tính có ở cả hai khối; giá trị mà khối mới không có chỗ đặt sẽ bị bỏ và được nêu tên. |
| `BSEARCH` |  | BSEARCH tìm khối. Tên: một phần tên khối, hoặc mẫu có * và ?. Thuộc tính: một giá trị (hoặc TAG=value) có trong thuộc tính của một tham chiếu. Hình học: chọn đối tượng hoặc một tham chiếu khối, và các khối có hình dạng giống ít nhất 85% sẽ được liệt kê, giống nhất đứng trước; kích thước, góc xoay và đối xứng không được tính. Các tham chiếu tìm được trong không gian mở được chọn, sẵn sàng cho lệnh tiếp theo. |
| `BURST` |  | Phân rã các tham chiếu khối và giữ những gì thuộc tính của chúng nói: mỗi giá trị thành văn bản trên lớp của thuộc tính. |
| `BVHIDE` | `BVH` | Trong trình soạn khối: ẩn các đối tượng trong trạng thái hiển thị hiện tại. |
| `BVSHOW` | `BVSH` | Trong trình soạn khối: hiện các đối tượng mà trạng thái hiển thị hiện tại đang ẩn (chúng hiện mờ để chọn). |
| `BVSTATE` | `BVS` | Trong trình soạn khối, với khối có trạng thái hiển thị: chuyển sang một trạng thái, hoặc thêm, đổi tên hay xóa một trạng thái. |
| `CAL` |  | Tính một chiều dài hoặc một số: + − * / và dấu ngoặc, như bạn gõ ở bất kỳ đâu |
| `CENTERLINE` | `CL` | Đường tâm giữa hai đường thẳng: ở giữa chúng, hoặc dọc theo đường phân giác khi chúng gặp nhau (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Dấu tâm: một chữ thập ở tâm hình tròn hoặc cung, với các đường tâm kéo dài ra ngoài một chút (CM) |
| `CHAMFER` | `CHA` | Vát mép góc giữa hai đường thẳng (D hai khoảng cách, A độ dài và góc, P mọi góc của một đa tuyến) |
| `CHSPACE` |  | CHSPACE: dời đối tượng giữa một tờ và mô hình qua một khung nhìn. Chúng được đổi tỷ lệ và xoay để trông giống nhau từ phía bên kia. Trên tờ, chúng đi đến mô hình; khi bạn làm việc qua một khung nhìn (MSPACE) chúng đi đến tờ. |
| `CIRCLE` | `C` | Tâm và bán kính, đường kính, 2 hoặc 3 điểm |
| `CLASS` |  | Đặt các đối tượng đã chọn vào một lớp, hoặc khi không chọn gì thì đặt lớp đang hoạt động (? liệt kê chúng) |
| `CLASSES` | `CLS` | Bảng Lớp: lớp sắp xếp đối tượng qua các lớp khác nhau; hiện, ẩn và định kiểu chúng, và ghi đè theo từng khung nhìn (CLS) |
| `COMMANDLINE` | `CMDLINE` | Gắn hoặc nổi dòng lệnh, làm nó thành một dòng, đặt số dòng lịch sử, hoặc mở lịch sử (F2) |
| `COMPARESETTINGS` | `CMPSET` | So sánh kiểu kích thước, kiểu văn bản, lớp, tờ hoặc đơn vị: hai trong bản vẽ này, hoặc bản vẽ này với một bản vẽ khác đang mở, và sao chép một giá trị qua. |
| `CONSTRAINTBAR` | `CBAR` | Hiện hoặc ẩn các thanh ràng buộc (Showall / Hideall, hoặc theo từng đối tượng) |
| `COPY` | `CO`, `CP` | Sao chép đối tượng, bao nhiêu lần tùy bạn nhấp |
| `COPYBASE` |  | Sao chép đối tượng vào bộ nhớ tạm với một điểm gốc bạn chọn |
| `COPYCLIP` |  | Sao chép đối tượng vào bộ nhớ tạm (Ctrl+C); PASTECLIP đặt chúng |
| `COUNT` | `BCOUNT` | Đếm tham chiếu khối: chọn một cái để chọn và đếm mọi tham chiếu của khối đó |
| `COUNTTABLE` |  | Đặt một bảng đếm khối |
| `CREDITS` |  | Đưa ghi công thư viện vào bản vẽ dưới dạng bảng. Chạy lại để cập nhật bảng theo các mục có trong bản vẽ lúc này. |
| `CURSORSIZE` |  | Kích thước tâm ngắm: 100 chạy nó từ mép này sang mép kia của bản vẽ (Cài đặt › Con trỏ › Toàn màn hình) |
| `CUTCLIP` |  | Cắt đối tượng vào bộ nhớ tạm (Ctrl+X): sao chép, rồi xóa |
| `CYLINDER` | `CYL` | Một hình trụ: tâm, bán kính và chiều cao (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Liệt kê khối, thuộc tính và thuộc tính đối tượng thành bảng trong bản vẽ hoặc tệp CSV |
| `DATALINK` | `DL` | Một bảng từ tệp CSV, ghi nhớ tên tệp để có thể đọc lại |
| `DATALINKUPDATE` | `DLU` | Đọc lại tệp của một liên kết dữ liệu và làm đầy lại các bảng của nó |
| `DCALIGNED` | `DCALI` | Ràng buộc kích thước: khoảng cách thật giữa các điểm, giữa một điểm và một đường, hoặc giữa hai đường |
| `DCANGULAR` | `DCANG` | Ràng buộc kích thước: góc giữa hai đường, hoặc của một cung |
| `DCCONVERT` |  | Biến kích thước vẽ trên hình học có thể ràng buộc thành ràng buộc kích thước |
| `DCDIAMETER` | `DCDIA` | Ràng buộc kích thước: đường kính của một hình tròn hoặc cung |
| `DCDISPLAY` |  | Hiện hoặc ẩn các ràng buộc kích thước trên bản vẽ |
| `DCHORIZONTAL` | `DCHOR` | Ràng buộc kích thước: khoảng cách nằm ngang |
| `DCLINEAR` | `DCLIN` | Ràng buộc kích thước: khoảng cách nằm ngang hoặc thẳng đứng, từ nơi bạn đặt nó |
| `DCRADIUS` | `DCRAD` | Ràng buộc kích thước: bán kính của một hình tròn hoặc cung |
| `DCVERTICAL` | `DCVER` | Ràng buộc kích thước: khoảng cách thẳng đứng |
| `DELBLOCKS` |  | Xóa khối: mọi tham chiếu (cả các tham chiếu lồng nhau, trên mọi tờ) và định nghĩa |
| `DELCONSTRAINT` | `DELCON` | Gỡ mọi ràng buộc (hình học và kích thước) khỏi các đối tượng bạn chọn |
| `DELOPENING` |  | Lấy một cửa đi hoặc cửa sổ ra khỏi tường. |
| `DESCRIBE` | `DESC` | Nói bản vẽ chứa gì: bao nhiêu đối tượng, thuộc loại nào, kích thước ra sao, cái gì đang được chọn. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Xóa vùng chọn (Esc) |
| `DETAILS` | `DET` | Chi tiết riêng của công ty bạn, được tìm theo những gì bạn đang vẽ: tìm, thêm khối, liệt kê, gỡ bỏ, bật hoặc tắt các gợi ý. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Vẽ sơ đồ từ văn bản: lưu đồ Mermaid, sơ đồ thành phần PlantUML, D2, danh sách từ-đến hoặc XML draw.io, dưới dạng các khối và đường nối bạn có thể sửa |
| `DIMALIGNED` | `DAL`, `DIMALI` | Khoảng cách thật giữa hai điểm |
| `DIMANGULAR` | `DAN`, `DIMANG` | Góc giữa hai đường, của một cung, hoặc theo ba điểm |
| `DIMARC` | `DAR` | Kích thước độ dài cung: khoảng cách dọc theo một cung, kèm ký hiệu cung (DAR) |
| `DIMASZ` |  | Thiết lập kích thước: Kích thước mũi tên |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Các kích thước xếp chồng từ một đường gốc |
| `DIMBREAK` | `DBREAK` | Ngắt đường kích thước và đường gióng ở chỗ chúng cắt đối tượng khác (Tự động), giữa hai điểm (Thủ công), hoặc gỡ các chỗ ngắt |
| `DIMCONSTRAINT` | `DCON` | Ràng buộc kích thước: thẳng, song song, góc, bán kính, đường kính, chuyển đổi |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Một chuỗi kích thước, mỗi cái bắt đầu từ đầu cái trước |
| `DIMDEC` |  | Thiết lập kích thước: Số chữ số thập phân |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Đường kính của cung hoặc hình tròn |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Giải phóng kích thước khỏi các đối tượng mà chúng gắn vào (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Đổi văn bản kích thước (Trang đầu, Văn bản mới, Xoay) hoặc nghiêng đường gióng (Xiên) |
| `DIMEXE` |  | Thiết lập kích thước: Phần kéo dài vượt qua đường kích thước |
| `DIMEXO` |  | Thiết lập kích thước: Khoảng dời khỏi gốc |
| `DIMGAP` |  | Thiết lập kích thước: Khoảng trống quanh văn bản |
| `DIMINSPECT` |  | Kích thước kiểm tra: một khung quanh giá trị với nhãn và tần suất kiểm tra chi tiết |
| `DIMJOGGED` | `DJO`, `JOG` | Kích thước bán kính gãy: bán kính vẽ từ một điểm gần hơn khi tâm ở xa (DJO) |
| `DIMJOGLINE` | `DJL` | Thêm ký hiệu gãy vào đường kích thước thẳng hoặc song song, để cho thấy khoảng cách không vẽ theo tỷ lệ (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Khoảng cách nằm ngang hoặc thẳng đứng (R cho góc bất kỳ) |
| `DIMLUNIT` |  | Thiết lập kích thước: định dạng độ dài (1 khoa học, 2 thập phân, 3 kỹ thuật, 4 kiến trúc, 5 phân số) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Kích thước tọa độ: khoảng cách X hoặc Y của một điểm từ gốc UCS, trên một đường dẫn (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Ghi đè biến kích thước trên các kích thước đã chọn mà không đổi kiểu của chúng; Clear đưa kiểu trở lại (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Bán kính của cung hoặc hình tròn |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Gắn các điểm của kích thước vào đối tượng, để nó theo và đo lại khi chúng dời (DRE) |
| `DIMSCALE` |  | Thiết lập kích thước: Tỷ lệ tổng thể (kích thước × giá trị này) |
| `DIMSPACE` |  | Khoảng cách đều giữa các kích thước song song, đo từ một kích thước gốc (0 xếp thẳng hàng, Auto là gấp đôi chiều cao văn bản) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Tạo, đổi, đặt hiện hành, xóa, áp dụng và so sánh các kiểu kích thước có tên (hộp thoại; -DIMSTYLE trên dòng lệnh) |
| `DIMTEDIT` | `DIMTED` | Dời văn bản kích thước sang trái, phải hoặc giữa đường kích thước, hoặc xoay nó |
| `DIMTEXTUNIT` | `DTU` | Văn bản kích thước theo mm, cm, m hoặc km, hoặc theo đơn vị riêng của bản vẽ: các kích thước đã chọn, nếu không thì các kích thước mới (DTU) |
| `DIMTXT` |  | Thiết lập kích thước: Chiều cao văn bản |
| `DIST` | `DI` | Khoảng cách và góc giữa hai điểm |
| `DISTRIBUTE` |  | Dàn đều các đối tượng đã chọn theo chiều ngang hoặc chiều dọc: bước bằng nhau giữa các tâm, hoặc khe hở bằng nhau; hai đối tượng ngoài cùng được giữ nguyên |
| `DIVIDE` | `DIV` | DIVIDE (DIV): các dấu cắt một đường thẳng, cung, hình tròn, đa tuyến, spline hoặc elip thành các phần bằng nhau. Là điểm, hoặc với Khối là một khối tại mỗi dấu. |
| `DOCUMENTS` | `DOCS` | Mở bảng Tài liệu: lấy tệp ra và trả vào, các phiên bản, trạng thái phát hành và phê duyệt cho một thư mục dự án |
| `DOOR` | `DR` | Đặt một cửa đi vào tường. Phía bạn nhấp là phía cửa mở về. |
| `DRAWORDER` |  | Đổi thứ tự vẽ: đưa đối tượng lên trước, đẩy xuống sau, hoặc đặt chúng lên trên hay dưới các đối tượng khác. |
| `DUPLICATE` | `DUP` | Một bản sao di chuyển theo con trỏ: nhấp để đặt xuống (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Thuộc tính của bản vẽ: tiêu đề, tác giả và phần còn lại, cùng các cặp tên và giá trị riêng của bạn |
| `DXFOUT` |  | Tải bản vẽ xuống dưới dạng DXF R12 (Lưu giữ định dạng riêng của nó) |
| `EATTEDIT` | `DDATTE` | Sửa thuộc tính của một tham chiếu khối: giá trị, văn bản và thuộc tính, mỗi lần một thuộc tính |
| `ELLIPSE` | `EL` | Điểm cuối trục và nửa trục còn lại |
| `ERASE` | `E`, `DELETE` | Xóa đối tượng |
| `EXPLODE` | `X` | Tách đa tuyến, khối và kích thước thành các phần |
| `EXPORT` | `EXP` | Lưu một bản sao của bản vẽ dưới loại tệp mà một tiện ích bổ sung ghi |
| `EXPORT3D` | `3DEXPORT` | Xuất mô hình 3D: GLB, OBJ hoặc STL |
| `EXPORTPOINTS` | `EXPPTS` | Ghi các điểm, và điểm chèn của khối với một thuộc tính làm mô tả, ra tệp CSV hoặc TXT (PNEZD, PENZD hoặc XYZ) cho các chương trình BIM và trắc địa |
| `EXTEND` | `EX` | Kéo dài đối tượng để gặp đối tượng khác: nhấp gần một đầu, kéo qua nhiều cái, hoặc Shift+nhấp để cắt |
| `EXTRIM` |  | EXTRIM: chọn một cạnh cắt, rồi một phía. Mọi thứ cắt qua cạnh sẽ bị cắt ở phía đó. Các phần sẽ bị bỏ hiện khi bạn di chuyển con trỏ. |
| `EXTRUDE` | `EXT` | Đùn các đối tượng 2D khép kín thành vật rắn (3D) |
| `FIELD` |  | Đặt một trường vào văn bản, ô bảng hoặc thuộc tính: một ngày, tên tệp, số tờ, thuộc tính bản vẽ, diện tích hoặc chiều dài của đối tượng, hoặc một công thức |
| `FILLET` | `F` | Bo tròn hoặc vuông góc chỗ góc giữa hai đối tượng (R bán kính, P mọi góc của một đa tuyến, M nhiều góc) |
| `FIND` |  | Tìm và thay thế từ trong văn bản, giá trị thuộc tính và văn bản kích thước |
| `FLATTEN` |  | Đặt chiều cao (Z) và độ dày của các đối tượng đã chọn về 0, cả trong các khối chúng dùng. |
| `FLOOR` |  | Chọn tầng để vẽ, thêm một tầng, hoặc dời hay sao chép vùng chọn sang một tầng. |
| `FLOORLAYERS` |  | Biến các tầng thành lớp có tên Floor-Layer, cho một tệp sẽ gửi cho người không có tầng. |
| `FLOORS` | `FLR` | Mở bảng Tầng: xếp chồng các tầng trong một không gian mô hình. |
| `GCCOINCIDENT` |  | Ràng buộc: hai điểm gặp nhau, hoặc một điểm nằm trên một đối tượng |
| `GCCOLLINEAR` |  | Ràng buộc: hai đường thẳng nằm trên cùng một đường |
| `GCCONCENTRIC` |  | Ràng buộc: hai hình tròn hoặc cung chung một tâm |
| `GCEQUAL` |  | Ràng buộc: hai đường thẳng giữ cùng độ dài, hoặc hai hình tròn/cung cùng bán kính |
| `GCFIX` |  | Ràng buộc: một điểm hoặc cả một đối tượng giữ nguyên vị trí |
| `GCHORIZONTAL` |  | Ràng buộc: một đường thẳng (hoặc hai điểm) giữ nằm ngang |
| `GCPARALLEL` |  | Ràng buộc: hai đường thẳng giữ song song |
| `GCPERPENDICULAR` |  | Ràng buộc: hai đường thẳng giữ góc vuông |
| `GCSYMMETRIC` |  | Ràng buộc: hai điểm, đường thẳng hoặc hình tròn đối xứng nhau qua một đường |
| `GCTANGENT` |  | Ràng buộc: một đường thẳng và một hình tròn hoặc cung (hoặc hai trong số đó) giữ tiếp tuyến |
| `GCVERTICAL` |  | Ràng buộc: một đường thẳng (hoặc hai điểm) giữ thẳng đứng |
| `GDSIN` | `GDS` | Xem bố cục IC (tệp luồng GDSII): mọi lớp và kiểu dữ liệu thành lớp bản vẽ, phẳng, theo đơn vị người dùng; chỉ để xem và đo (thử nghiệm trong phòng lab) |
| `GEOMCONSTRAINT` | `GCON` | Ràng buộc hình học: nằm ngang, thẳng đứng, song song, tiếp tuyến, trùng nhau… |
| `GLBOUT` |  | Xuất mô hình 3D thành GLB (glTF) |
| `GRADIENT` | `GD` | Tô một vùng bằng chuyển màu của một hoặc hai màu |
| `GRID` |  | Đặt lưới: khoảng cách giữa các đường, cứ mỗi đường thứ N là một đường chính, BẬT hoặc TẮT, hoặc Auto để theo lại tỷ lệ phóng to |
| `GRIDMOVE` | `GM` | Dời một đường lưới và kéo theo những gì treo trên nó: tường được kéo giãn, cột, bong bóng và thẻ được dời, kích thước theo sau. |
| `GROUP` | `G` | GROUP (G): đặt cho các đối tượng đã chọn một tên mà chúng dùng chung. Nhấp vào một trong số đó sẽ chọn tất cả. Nhấn Enter ở ô tên sẽ tạo một nhóm không tên. |
| `GROUPEDIT` |  | GROUPEDIT: đổi một nhóm. Chọn một trong các đối tượng của nó hoặc nhập Tên của nó, rồi Thêm hoặc Gỡ đối tượng, ĐỔI TÊN, đổi Mô tả, hoặc chọn xem nhấp có chọn cả nhóm không. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Tô một vùng bằng màu đặc hoặc mẫu: nhấp vào bên trong, hoặc chọn các đối tượng khép kín (H) |
| `HATCHEDIT` | `HE` | Đổi một tô: mẫu, tỷ lệ, góc, gốc và liên kết của nó với một biên. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Tạo lại các đa tuyến biên từ một tô, liên kết hoặc không |
| `HATCHTOBACK` |  | Đưa mọi tô xuống dưới mọi thứ khác. |
| `HELP` | `?` | Danh sách này |
| `HIDEOBJECTS` |  | Ẩn các đối tượng đã chọn cho đến khi UNISOLATEOBJECTS. Không được lưu cùng bản vẽ. |
| `HISTORY` | `HIST` | HISTORY (HIST): các phiên bản của bản vẽ này — bản sao được giữ trên máy tính này khi Studio lưu, và các phiên bản trên đám mây — để mở, khôi phục, và so sánh với những gì đã đổi được tô màu. |
| `ID` |  | Tọa độ của một điểm |
| `IMAGE` | `IM` | Cho CadCraft các tệp ảnh mà một bản vẽ dùng (DWG chỉ lưu nơi chúng nằm). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Đặt một ảnh (PNG hoặc JPEG) từ một tệp. |
| `IMAGECLIP` | `ICL` | Cắt một ảnh theo hình chữ nhật hoặc đa giác, hoặc gỡ phần cắt của nó. |
| `IMPORT` | `IMP` | Nhập một tệp thuộc loại mà một tiện ích bổ sung đọc, vào bản vẽ này |
| `INSERT` | `I`, `DDINSERT` | Đặt một khối (S tỷ lệ, R xoay); F từ tệp DWG/DXF, L từ thư viện |
| `INTERSECT` | `IN` | Chỉ giữ phần chung của các vật rắn (3D), hoặc phần diện tích mà các miền 2D cùng chiếm |
| `ISODRAFT` |  | ISODRAFT: bật hoặc tắt vẽ đẳng trục, hoặc vẽ thẳng lên mặt phẳng Trái, Trên hoặc Phải. Khi bật, Ortho và truy vết cực theo hai trục của mặt phẳng, lưới được vẽ đẳng trục, và ELLIPSE có Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Chỉ hiện các đối tượng đã chọn; mọi thứ khác trong không gian này bị ẩn cho đến khi UNISOLATEOBJECTS. Không được lưu cùng bản vẽ. |
| `ISOPLANE` |  | ISOPLANE: chọn mặt phẳng đẳng trục để vẽ: Trái, Trên hoặc Phải. Enter chuyển sang mặt tiếp theo, như F5 khi vẽ đẳng trục đang bật. |
| `JOIN` | `J` | Nối các đường thẳng, cung và đa tuyến gặp nhau đầu cuối thành một đa tuyến; các đường thẳng cùng một đường thành một đường (J) |
| `LASER` | `LASERCUT` | Mở bảng Laser: gửi các lớp đến máy cắt laser hoặc máy khắc (G-code GRBL) |
| `LASSOMODE` |  | Nhấn và kéo vẽ một lasso (1) hoặc một hình chữ nhật (0) |
| `LAYDEL` |  | Xóa một lớp và mọi đối tượng trên nó (trong mô hình, trên tờ và trong khối) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Mở trình quản lý Lớp: mọi lớp trong một bảng |
| `LAYERPANEL` |  | Hiện bảng lớp |
| `LAYFRZ` |  | Đóng băng lớp của từng đối tượng bạn chọn |
| `LAYGROUP` | `LG` | Nhóm các lớp thành thư mục trong bảng Lớp. |
| `LAYISO` |  | Cô lập các lớp của đối tượng đã chọn (mọi lớp khác tắt) |
| `LAYLOCKFADE` |  | Đặt mức mờ của đối tượng trên lớp đã khóa, và liệu một cú nhấp có chọn được chúng không. |
| `LAYMCUR` |  | Đặt lớp của đối tượng bạn chọn thành lớp hiện hành |
| `LAYMRG` |  | Gộp lớp: các đối tượng của chúng chuyển sang một lớp đích, và các lớp đã gộp bị bỏ |
| `LAYOFF` |  | Tắt lớp của từng đối tượng bạn chọn |
| `LAYON` |  | Bật mọi lớp |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Một tờ mới với khung tên và một khung nhìn |
| `LAYTHW` |  | Mở băng mọi lớp |
| `LAYUNISO` |  | Bật lại các lớp mà LAYISO đã tắt |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Chuyển văn bản đã gõ bằng phông tiếng Việt cũ (phông TCVN3 / ABC như .VnTime, và phông VNI như VNI-Times) sang Unicode. Văn bản như vậy đã hiện đúng; lệnh này viết lại nó vĩnh viễn, có đếm và một bước hoàn tác. |
| `LENGTHEN` | `LEN` | Kéo dài hoặc rút ngắn đường thẳng, cung và đa tuyến: theo một lượng, một phần trăm, đến một tổng, hoặc bằng cách kéo (LEN) |
| `LIBRARY` | `LIB` | Bảng thư viện: đặt mục, kiểm tra cập nhật, ghi công |
| `LIMITS` |  | Đặt giới hạn bản vẽ: ON, OFF, hoặc góc dưới-trái và góc trên-phải. Khi giới hạn ON, các điểm nằm ngoài sẽ bị từ chối |
| `LINE` | `L` | Các đoạn thẳng, mỗi đoạn là một đối tượng riêng |
| `LINETYPE` | `LT`, `CELTYPE` | Kiểu đường mà đối tượng mới nhận (theo lớp, theo khối, hoặc một kiểu có tên) |
| `LINKVIEWS` | `SYNCVIEWS` | Di chuyển và phóng to mọi khung cùng lúc (chia màn hình), để so sánh hai bản vẽ hoặc hai bản sửa đổi |
| `LISPEDIT` | `VLIDE` | LISPEDIT (hoặc VLIDE) mở trình soạn LISP: một cửa sổ để viết, nạp và thử một chương trình con. Nạp vào bản vẽ đọc mọi biểu thức, như nạp tệp bằng APPLOAD, và tạo các lệnh của nó. Chạy vùng chọn đánh giá các biểu thức đã chọn, hoặc biểu thức có con trỏ. Bảng điều khiển cho biết chương trình đã in gì và mỗi lỗi kèm dòng của nó. Dấu ngoặc đối ứng được đánh dấu khi bạn gõ và Enter thụt lề dòng mới. Mới, Mở và Lưu làm việc với tệp .lsp. Các danh sách bên cạnh văn bản cho biết các hàm chương trình định nghĩa, các hàm nó gọi mà LISP này chưa có, và mọi hàm nó có. Cửa sổ không chặn bản vẽ, nên một chương trình có thể yêu cầu các điểm; Stop hoặc Esc kết thúc một chương trình đang chạy. |
| `LIST` | `LI`, `LS` | Mô tả đối tượng trong lịch sử |
| `LTSCALE` | `LTS` | Tỷ lệ kiểu đường của bản vẽ (mọi nét và khoảng trống nhân với nó) |
| `LWDISPLAY` | `LWT` | Hiện hoặc ẩn độ dày nét trên màn hình (nút LWT trên thanh trạng thái) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Độ dày nét mà đối tượng mới nhận (theo lớp, theo khối, mặc định, hoặc mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | các lớp bản đồ dưới không gian mô hình: hệ tọa độ của bản vẽ, ô bản đồ, WMS, WMTS, ArcGIS, ảnh |
| `MASSPROP` |  | MASSPROP: thuộc tính mặt cắt của các miền và đối tượng khép kín: diện tích, chu vi, trọng tâm, mô men và tích quán tính, bán kính hồi chuyển và các trục chính. Chính xác với đường thẳng và cung. Có thể ghi báo cáo ra tệp văn bản. |
| `MATCHPROP` | `MA`, `PAINTER` | Khớp thuộc tính: sao chép lớp, màu và nhiều thứ khác của một đối tượng sang các đối tượng khác (MA) |
| `MEASURE` | `ME` | MEASURE (ME): một dấu mỗi khoảng chiều dài cho trước dọc theo một đường thẳng, cung, hình tròn, đa tuyến, spline hoặc elip, tính từ đầu gần điểm bạn chọn. Là điểm, hoặc với Khối là một khối tại mỗi dấu. |
| `MEASUREGEOM` | `MEA` | Đo khoảng cách, bán kính, góc hoặc diện tích (MEA) |
| `MINSERT` |  | MINSERT: đặt một khối theo hàng và cột trong một lần. Mỗi cái là một tham chiếu riêng, nên bạn có thể dời hoặc xóa bất kỳ cái nào. |
| `MIRROR` | `MI` | Lấy đối xứng đối tượng qua một đường |
| `MLEADER` | `MLD`, `MLEAD` | Đường dẫn nhiều: một mũi tên, một đường dẫn và một ghi chú, như một đối tượng (MLD) |
| `MLEADERALIGN` | `MLA` | Căn các đường dẫn nhiều thẳng hàng với một trong số chúng theo một hướng, cách đều, hoặc phân bố giữa hai điểm (MLA) |
| `MLEADERCOLLECT` | `MLC` | Gom nhiều đường dẫn nhiều thành một: các khối của chúng xếp thành hàng hoặc cột, hoặc các ghi chú của chúng nằm dưới nhau (MLC) |
| `MLEADEREDIT` | `MLE` | Thêm đường dẫn vào một đường dẫn nhiều hoặc bỏ đi; chuyển nội dung của nó giữa văn bản và khối (MLE) |
| `MLINE` |  | Vẽ các đường song song cùng lúc, nối tại các góc. |
| `MOVE` | `M` | Di chuyển đối tượng theo một điểm gốc và một điểm thứ hai |
| `MSPACE` | `MS` | Làm việc trên mô hình qua một khung nhìn của tờ đang mở (hoặc nhấp đúp bên trong khung nhìn). |
| `MTEXT` | `MT`, `T` | Văn bản đoạn: kéo chiều rộng của nó, rồi gõ tại chỗ; Enter bắt đầu đoạn mới (T) |
| `MVIEW` | `MV` | Một khung nhìn lên mô hình, trên một bố cục |
| `NAMEDVIEW` | `NV`, `VIEWS` | Khung nhìn có tên: lưu khung nhìn đang hiện (hoặc một cửa sổ) dưới một tên và quay lại nó (NV) |
| `NCOPY` |  | Sao chép đối tượng từ một tham chiếu khối hoặc bản vẽ liên kết vào bản vẽ, mà không phân rã nó. |
| `NEARBY` |  | Nói những gì nằm gần con trỏ, gần nhất trước, kèm khoảng cách và phía của nó. |
| `NEW` |  | Bắt đầu một bản vẽ mới |
| `OBJECTSCALE` | `OBJSCALE` | Tỷ lệ chú thích của văn bản và kích thước chú thích: thêm một tỷ lệ, xóa một tỷ lệ, thêm tỷ lệ hiện hành, hoặc liệt kê chúng (mỗi khung nhìn hiện chúng ở kích thước theo tỷ lệ của nó) |
| `OBJOUT` |  | Xuất mô hình 3D thành OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Tiêu chuẩn văn phòng: chiều cao văn bản trên giấy, lớp, các trường khung tên và mẫu trong một bản ghi. Hiển thị bản đang có hiệu lực và nguồn của nó; Nhập một bản ghi .json vào bản vẽ này, thêm các lớp văn phòng mà bản vẽ còn thiếu, liệt kê các trường khung tên. |
| `OFFSET` | `O` | Bản sao song song ở một khoảng cách |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: cách OFFSET khép các khe ở góc ngoài của một đa tuyến. 0 kéo dài các đoạn, 1 thêm một cung, 2 thêm một đường cắt thẳng. Được giữ cho phiên làm việc này. |
| `OLELIST` | `OLES` | Liệt kê các đối tượng OLE mà một bản vẽ mang và đặt một bản sao hình ảnh của một đối tượng ở nơi bạn chọn |
| `OPEN` |  | Mở một DWG hoặc DXF từ máy tính này |
| `OPENIN3D` |  | Mở bản vẽ này trong ứng dụng mô hình hóa 3D, trong một thẻ mới (không có gì được tải lên) |
| `OPTIONKEYS` | `OPTKEYS` | Đặt cho các tùy chọn lệnh các ký tự riêng (ARRAY.PO, P), trong một tệp văn bản |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Mở menu bắt điểm đối tượng: chọn bắt điểm nào được bật. Cũng là nhấp chuột phải vào Bắt điểm trên thanh trạng thái. |
| `OVERKILL` |  | Xóa các đối tượng trùng lặp và gộp các đường thẳng hoặc cung chồng lên nhau hoặc nối đầu cuối, trong một dung sai. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Bảng Tham số: tham số người dùng và ràng buộc kích thước trong một bảng |
| `PARTSLIST` | `PLIST` | Một bảng danh sách chi tiết của mọi chi tiết tiêu chuẩn và thép hình được đặt từ Thư viện |
| `PASTEAREA` | `PAREA` | Dán một vùng đã sao chép trong MarkupCraft (Sao chép vùng) ở kích thước thật, như một ảnh. |
| `PASTEBLOCK` |  | PASTEBLOCK: dán những gì bạn đã sao chép thành một khối. Khối có tên riêng; RENAME đặt tên của bạn. |
| `PASTECLIP` |  | Dán bộ nhớ tạm: nó đi theo con trỏ, nhấp nơi bạn muốn đặt (Ctrl+V) |
| `PASTEORIG` |  | Dán bộ nhớ tạm tại tọa độ mà nó đã được sao chép từ đó (Ctrl+Shift+V) |
| `PDF` |  | Cho CadCraft các tệp PDF mà lớp nền của bản vẽ dùng |
| `PDFADJUST` |  | Làm mờ, đổi độ tương phản, đơn sắc hoặc tắt một lớp nền PDF |
| `PDFATTACH` | `PDFATT` | Đính kèm một trang PDF làm lớp nền (PDFATTACH) |
| `PDFCLIP` |  | Cắt một lớp nền PDF theo hình chữ nhật hoặc đa giác |
| `PDFIMPORT` | `PDFIM` | Biến các đường, nét đổ và văn bản của một trang PDF thành đối tượng bản vẽ (PDFIMPORT) |
| `PDFLAYERS` |  | Bật hoặc tắt các lớp của một lớp nền PDF |
| `PEDIT` | `PE` | Sửa một đa tuyến: đóng, mở, nối, độ rộng, khớp đường cong, spline, bỏ cong, tạo kiểu đường, đảo chiều; đường thẳng, cung và spline có thể đổi thành đa tuyến |
| `PENPRESSURE` |  | Việc áp lực của nét bút có đặt độ dày nét của những gì SKETCHFIX và SKETCHLIVE tạo ra (bật mặc định). Được giữ trong trình duyệt này. |
| `PHOTOSKETCH` | `PSK` | Biến ảnh chụp một bản phác thảo tay trên giấy thành đường thẳng và cung ở một tỷ lệ, nắn phối cảnh và cho mỗi màu bút một lớp riêng. |
| `PICKSTYLE` |  | PICKSTYLE: việc chọn một đối tượng của một nhóm có chọn cả nhóm (1, cài đặt ban đầu) hay chỉ đối tượng đó (0). Được giữ cho phiên làm việc này. |
| `PLAN` |  | Xoay khung nhìn để trục X của UCS (UCS hiện hành, một UCS đã lưu, hoặc Thế giới) nằm ngang trên màn hình. Không có gì trong bản vẽ dời đi. |
| `PLINE` | `PL` | Một đa tuyến gồm các đoạn thẳng và cung |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | In ra PDF: một bố cục, hoặc mô hình ở một tỷ lệ |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Bảng kiểu nét in: đặt mỗi màu in ra thành gì (màu, đen, xám, mực, độ dày nét); được giữ cùng bản vẽ (STYLESMANAGER) |
| `POINT` | `PO` | Đối tượng điểm |
| `POINTCLOUD` | `PC` | đám điểm được đính kèm: cắt lát, chiều cao, độ dày, màu, kích thước, hiện, thu phóng, tháo |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | đính kèm một đám điểm (LAS, LAZ, XYZ, PTS) vào bản vẽ |
| `POLARANG` |  | Bước truy vết cực tính bằng độ (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Một đa giác đều |
| `PRESSPULL` |  | Đẩy hoặc kéo một mặt của vật rắn (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Mở bảng Thuộc tính (cũng là Ctrl+1, hoặc nhấp đúp một đối tượng) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Gập bảng Thuộc tính về mép cửa sổ |
| `PSPACE` | `PS` | Rời khung nhìn đang làm việc và quay lại tờ (hoặc nhấp đúp bên ngoài nó). |
| `PUBLISH` | `-PUBLISH` | In nhiều hoặc mọi tờ thành một PDF (một trang và một dấu trang cho mỗi tờ) |
| `PURGE` | `PU` | Xóa định nghĩa khối không có gì dùng |
| `QDIM` |  | Kích thước nhanh: ghi kích thước cho nhiều đối tượng cùng lúc (liên tục, cơ sở, so le, tọa độ, bán kính hoặc đường kính) |
| `QPMODE` | `QP` | Thuộc tính nhanh theo con trỏ: bật hoặc tắt |
| `QSELECT` | `QS` | Chọn nhanh: mọi đối tượng thuộc một loại có lớp, màu, kích thước hoặc tên khớp (QS) |
| `RASTERSNAP` |  | Bật hoặc tắt bắt điểm vào các đường của tờ đã quét. |
| `RAY` |  | Tia: một đường dựng từ một điểm, không kết thúc theo một hướng. |
| `RECOVER` |  | Mở một DXF hoặc DWG bị hỏng: bỏ qua những gì không đọc được thay vì từ chối tệp, nói rõ những gì đã bỏ qua, rồi kiểm tra và sửa bản vẽ như AUDIT làm. |
| `RECTANG` | `REC`, `RECTANGLE` | Một đa tuyến khép kín từ hai góc |
| `REDLINE` | `RDL` | Đánh dấu thành bản sửa đổi: đọc gói đánh dấu MarkupCraft, chấp nhận hoặc từ chối từng thay đổi, bọc mây các thay đổi được chấp nhận kèm nhật ký sửa đổi, và lưu tệp trả lời (RDL) |
| `REDO` |  | Làm lại những gì đã hoàn tác |
| `REFCLOSE` |  | Kết thúc việc sửa một khối tại chỗ: lưu nó, hoặc bỏ thay đổi |
| `REFEDIT` |  | Sửa một khối tại chỗ, nơi có một tham chiếu của nó, với phần còn lại của bản vẽ mờ đi; REFCLOSE lưu |
| `REGEN` | `RE` | Dựng lại những gì được vẽ trong thẻ này từ bản vẽ |
| `REGENALL` | `REA` | Dựng lại những gì được vẽ trong mọi thẻ, khung và bản vẽ đang mở |
| `REGION` | `REG` | REGION (REG): tạo các miền phẳng (vùng) từ đối tượng khép kín, hoặc từ đường thẳng, cung và đa tuyến khép thành vòng nối đầu cuối. UNION, SUBTRACT và INTERSECT sau đó kết hợp các vùng, và MASSPROP cho thuộc tính mặt cắt của chúng. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Đăng ký nhiều bản quét: đặt chúng vào một khung bằng các cặp điểm hoặc mục tiêu đã chọn, tinh chỉnh bằng ICP, xuất một LAS hoặc E57 |
| `REINIT` |  | Tải lại tệp bí danh của bạn |
| `RENAME` | `-RENAME`, `REN` | Đổi tên một lớp hoặc một khối (mọi đối tượng hoặc tham chiếu theo sau) |
| `REVCLOUD` | `RC` | Đám mây sửa đổi: bọc tròn một hình chữ nhật, đa giác, đường vẽ tự do hoặc một đối tượng (RC) |
| `REVOLVE` | `REV` | Quay các đối tượng 2D khép kín quanh một trục thành vật rắn (3D) |
| `ROTATE` | `RO` | Xoay đối tượng quanh một điểm gốc |
| `SAMPLES` | `SAMPLE` | Mở một trong các bản vẽ mẫu của CadCraft (một bộ kiến trúc, một bản hoàn công) để học |
| `SAVE` | `QSAVE` | Tải bản vẽ xuống theo định dạng của nó (DWG hoặc DXF) |
| `SAVEAS` |  | Tải bản vẽ xuống dưới dạng DWG hoặc DXF: chọn cái nào |
| `SAYSEL` |  | Nói những gì đang được chọn, mỗi đối tượng một câu. |
| `SCALE` | `SC` | Đổi tỷ lệ đối tượng quanh một điểm gốc |
| `SCALELISTEDIT` | `SCALELIST` | Thêm, sửa và xóa các tỷ lệ riêng của bản vẽ; chúng xuất hiện trong danh sách tỷ lệ khung nhìn và tỷ lệ in, và được lưu trong tệp (SCALELIST) |
| `SCANALIGN` | `SCL` | Căn một tờ đã quét với hai điểm: dời, xoay và, nếu bạn chọn, đổi tỷ lệ. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Chèn một bản vẽ đã quét: PNG, JPEG hoặc TIFF (một trang hoặc tất cả các trang của tệp nhiều trang) hoặc một trang PDF là ảnh. |
| `SCANCLEAN` | `SCC` | Đổi tờ đã quét thành đen trắng và xóa các đốm. |
| `SCANCROP` | `SCR` | Cắt một tờ đã quét theo một cửa sổ. |
| `SCANDESKEW` | `SCD` | Tìm góc mà các đường dài của tờ đã quét nằm, và xoay tờ thẳng khi bạn chấp nhận góc đó. |
| `SCANERASE` | `SCE` | Xóa một vùng của tờ đã quét: một hình chữ nhật, một đa giác hoặc một lasso. |
| `SCANINFO` | `SCI` | Hiện tệp gốc của tờ đã quét và các bước đã thực hiện kể từ đó. |
| `SCANSCALE` | `SCS` | Đổi tỷ lệ một tờ đã quét: chọn hai điểm trên nó và nhập khoảng cách thật giữa chúng. |
| `SCANTRACE` | `SCT` | Vẽ lại một tờ đã quét thành đường thẳng và cung trên một lớp mới, với dung sai bạn đặt. Văn bản và tô bóng vẫn ở dạng raster. |
| `SELECT` |  | Chọn đối tượng ngay bây giờ (cho P, Trước đó, trong lệnh kế tiếp) |
| `SELECTALL` | `AI_SELALL` | Chọn mọi đối tượng bạn có thể sửa trên thẻ này (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Chọn mọi đối tượng giống những cái bạn chọn: cùng loại, lớp và màu (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Hiện bảng Bộ tờ: các tờ từ nhiều bản vẽ, được đánh số, xuất bản thành một PDF. |
| `SHORTCUTS` | `KEYS` | Đặt cho bất kỳ lệnh nào một phím riêng (Ctrl hoặc Alt kèm một chữ cái, hoặc một phím chức năng còn trống), được giữ trong trình duyệt này hoặc ứng dụng máy tính. |
| `SHXFONTS` | `SHX` | Đưa cho CadCraft các phông SHX từ một thư mục hoặc tệp, để các kiểu văn bản có tên chúng được vẽ bằng chúng (liệt kê, gỡ, đảo) |
| `SKETCHFIX` | `SKF` | Vẽ các nét tự do; mỗi nét thành một đường thẳng, hình tròn, cung, hình chữ nhật hoặc đa tuyến sạch, vuông góc và nối với các nét khác. |
| `SKETCHLIVE` | `SKL` | Phác thảo bằng bút: mỗi nét thành một đường thẳng, hình tròn, cung hoặc hình chữ nhật chính xác khi bạn nhấc bút, bắt vào bản vẽ, với kích thước để gõ đè lên. |
| `SPLINE` | `SPL` | Vẽ một spline đi qua các điểm (hoặc với một đa giác điều khiển), hoặc đổi một đa tuyến thành spline |
| `SPLINEDIT` | `SPE` | Sửa một spline: điểm khớp, điểm điều khiển và trọng số, mở hoặc đóng, đảo chiều, hoặc đổi thành đa tuyến |
| `SPLIT` |  | Chia vùng vẽ thành các khung (như VPORTS trên mô hình; cũng từ một tờ) |
| `STEELMEMBER` | `SMEMBER` | Một thanh thép 3D từ một mặt cắt tiêu chuẩn: hai điểm (một dầm) hoặc một điểm gốc và một chiều cao (Cột) |
| `STLOUT` |  | Xuất mô hình 3D thành STL (milimét) |
| `STRETCH` | `S` | Kéo giãn: kéo một cửa sổ giao qua các đầu để dời; những gì bên trong di chuyển, phần còn lại đứng yên (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Kiểu văn bản: phông, chiều cao, chiều rộng và độ nghiêng mà văn bản mới nhận (hộp thoại; -STYLE trên dòng lệnh) |
| `SUBTRACT` | `SU` | Lấy vật rắn ra khỏi vật khác (3D), hoặc miền 2D ra khỏi miền khác |
| `SWBOUT` | `SWMACRO` | Tải một macro cho SolidWorks (.swb) dựng lại mô hình thành một phác thảo có ràng buộc duy nhất |
| `SWEEP` |  | Quét các đối tượng 2D khép kín dọc theo một đường dẫn (đường thẳng, đa tuyến, cung, hình tròn) thành vật rắn (3D) |
| `TABLE` | `TB` | Tạo bảng: hàng và cột, hoặc từ các ô bảng tính trong bộ nhớ tạm hoặc tệp CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Sửa bảng: gõ trong ô, chèn và xóa hàng và cột, kích thước, ô gộp, căn lề |
| `TABLEEXPORT` |  | Lưu những gì bảng hiện ra thành tệp CSV |
| `TABLEPASTE` | `PASTETABLE` | Tạo bảng từ các ô bảng tính trong bộ nhớ tạm |
| `TABLESTYLE` | `TS` | Kiểu bảng: chiều cao văn bản, căn lề, lề và đường viền cho các hàng tiêu đề, đầu và dữ liệu |
| `TAGS` |  | Thẻ trên tham chiếu khối: định nghĩa một thẻ (loại, giá trị cho phép, các khối áp dụng), đặt nó lên các tham chiếu đã chọn, và liệt kê chúng thành một bảng có thể lưu thành CSV |
| `TEXT` | `DT`, `DTEXT` | Văn bản một dòng; Enter bắt đầu dòng kế tiếp |
| `TEXTEDIT` | `ED`, `DDEDIT` | Sửa văn bản tại chỗ: chọn một văn bản (hoặc nhấp đúp vào nó) (ED) |
| `TEXTMASK` | `TMASK` | Đặt một lớp nền che sau văn bản (nền bản vẽ hoặc một màu), hoặc gỡ nó đi. |
| `TEXTTOFRONT` |  | Đưa mọi văn bản, kích thước và đường dẫn lên trước mọi thứ khác. |
| `TOOLBAR` |  | Chọn những gì các nút thanh công cụ hiển thị: biểu tượng và chữ, chỉ biểu tượng, hoặc chỉ chữ (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Đặt thanh công cụ ở trên, dưới, trái hoặc phải của cửa sổ |
| `TOOLBARROWS` |  | Chọn số hàng mà thanh công cụ dùng: xuống dòng để vừa, 2, hoặc 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Làm các thanh phía trên bản vẽ thành chuẩn hoặc gọn |
| `TOUCHCROSSHAIR` | `TCX` | Tâm ngắm lệch để vẽ bằng ngón tay: một ngón tay di chuyển một tâm ngắm nằm phía trên và bên cạnh nó, để ngón tay không che điểm chọn. Nhấc ngón tay không chọn gì; nút Nhấp hoặc chạm bằng ngón thứ hai chọn tại tâm ngắm, và giữ Nhấp khi bạn di chuyển thì kéo. Nhấn giữ lâu hoặc nút Enter là Enter. Hai ngón tay di chuyển và phóng to. Tùy chọn: ON, OFF, Auto (chỉ bật ở nơi ngón tay là con trỏ duy nhất), Distance, Side. |
| `TOUR` | `TUTORIAL` | Chạy lại chuyến tham quan sáu bước cho bản vẽ đầu tiên |
| `TRIM` | `TR` | Cắt đối tượng lùi về nơi các đối tượng khác cắt qua chúng: nhấp một đoạn, kéo qua nhiều đoạn, hoặc Shift+nhấp để kéo dài |
| `TRIMEXTENDMODE` |  | Cách TRIM và EXTEND bắt đầu: 1 Nhanh (mọi đối tượng là cạnh cắt hoặc biên), 0 Chuẩn (chọn các cạnh trước) |
| `TTR` |  | Một hình tròn tiếp tuyến với hai đối tượng, với bán kính bạn cho (giống CIRCLE T). |
| `TURNLEFT` |  | Xoay khung nhìn 90° sang trái (ngược chiều kim đồng hồ): UCS Z -90, và khung nhìn đi theo. Không có gì trong bản vẽ dời đi. |
| `TURNRIGHT` |  | Xoay khung nhìn 90° sang phải (thuận chiều kim đồng hồ): UCS Z 90, và khung nhìn đi theo. Không có gì trong bản vẽ dời đi. |
| `TURNWORLD` |  | Về thế giới: UCS Thế giới, và khung nhìn lại nằm ngang. |
| `TXT2MTXT` | `T2M` | Nối các văn bản một dòng thành một văn bản đoạn, từ trên xuống dưới. |
| `UCS` |  | Hệ tọa độ riêng của bạn: một gốc và trục X (gốc, góc Z, 3point, OBject, Previous, World, NAmed). Các điểm bạn gõ, ortho, truy vết cực, lưới và văn bản mới đều theo nó; khung nhìn xoay để trục X của nó nằm ngang. Không có gì trong bản vẽ dời đi. |
| `UNDO` | `U` | Hoàn tác lệnh vừa rồi |
| `UNGROUP` |  | UNGROUP: tháo các nhóm ra. Chọn đối tượng của các nhóm, hoặc nhập một Tên. Các đối tượng vẫn ở trong bản vẽ. |
| `UNION` | `UNI` | Nối các vật rắn thành một (3D), hoặc các miền 2D thành một miền |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Hiện lại mọi đối tượng bị ẩn bởi ISOLATEOBJECTS hoặc HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cách chiều dài được hiển thị và nhập: thập phân, feet và inch, phân số (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Tính lại các trường, và chọn khi nào chúng tự cập nhật |
| `USDOUT` |  | Xuất mô hình 3D thành USD (.usda văn bản, .usdc nhị phân hoặc gói .usdz) |
| `VIEW` | `-VIEW`, `V` | Các khung nhìn 3D tiêu chuẩn, phối cảnh hoặc song song (3D) |
| `VIEWBASE` | `FLATSHOT` | Đặt một khung nhìn 2D phẳng của các vật rắn 3D (trước, trên, bên hoặc đẳng trục, cạnh khuất vẽ nét đứt) lên một tờ hoặc trong mô hình |
| `VIEWLABEL` | `VL` | Tiêu đề khung nhìn trên tờ, hiện tên khung nhìn của khung và đổi theo nó. |
| `VOICE` |  | Bật hoặc tắt lệnh bằng giọng nói. Chúng được nhận diện trên máy tính này. |
| `VPCLIP` |  | Cắt một khung nhìn của tờ theo một đối tượng khép kín hoặc đa giác vẽ; Delete biến nó lại thành hình chữ nhật |
| `VPLAYER` |  | Đóng băng hoặc mở băng các lớp ở một số khung nhìn (Freeze, Thaw, Reset), và chọn các lớp mà khung nhìn mới bắt đầu ở trạng thái đóng băng (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Chia vùng vẽ thành các khung, mỗi khung có khung nhìn riêng (trên tờ: một khung nhìn, như MVIEW) |
| `VPVIEW` |  | Đặt những gì khung nhìn hiện: chọn một cửa sổ trên mô hình |
| `VSCURRENT` | `VS`, `SHADEMODE` | Kiểu hiển thị của khung nhìn 3D: tô bóng, cạnh, đường khuất, khung dây, tia X |
| `WALL` | `WA` | Vẽ tường 2D như một đa tuyến. Chúng nối vào nhau, và mang cửa đi và cửa sổ. |
| `WALLARC` | `WARC` | Vẽ một cung tường. Tường mặt bằng là thẳng, nên cung được vẽ thành các đoạn tường thẳng ngắn (15 độ mỗi đoạn) nối nhau. |
| `WALLDELSEG` |  | Xóa một đoạn tường giữa hai điểm. Phần còn lại vẫn là một hoặc hai tường. |
| `WALLDIM` |  | Gõ một giá trị mới cho một kích thước: tường ở đầu xa của nó dời vuông góc với chính nó, tường ở đầu thứ nhất giữ nguyên, và các tường nối với nó đi theo. |
| `WALLDISJOIN` |  | Chọn một tường gần một đầu để không cho nối ở đầu đó: đầu được vẽ vuông và không có gì theo nó. Chọn lại để cho phép nối. |
| `WALLGRID` |  | Khóa một tường vào một đường lưới: dọc theo nó, hoặc một đầu nằm trên đó. Dời đường bằng GRIDMOVE và tường đi theo. |
| `WALLHOLD` |  | Căn và khóa: một tường giữ vị trí của nó so với tường khác (trên đường của nó, hoặc ở khoảng cách hiện có). Nếu một tường dời, cái kia đi theo. |
| `WALLHOLDDIM` |  | Khóa khoảng cách giữa hai tường song song. Nếu một tường dời, tường kia đi theo để giữ khoảng cách. |
| `WALLHOLDS` |  | Liệt kê các khóa trên tường. |
| `WALLJOINS` |  | Cấp cho mọi tường của một bản vẽ cũ một id và lưu các chỗ nối giữa chúng. Việc này cũng xảy ra ở lần thay đổi đầu tiên bạn thực hiện. |
| `WALLJOINSTYLE` |  | Nhấp vào một góc nơi hai tường gặp đầu cuối để đổi cách nó được vẽ: vát góc, phẳng, vuông góc. T đổi tường nào chạy xuyên qua. |
| `WALLOFFSET` | `WO` | Dời một tường vuông góc với chính nó một khoảng cách (các tường nối với nó đi theo), hoặc tạo một bản sao ở khoảng cách đó. |
| `WALLPICK` |  | Tạo tường trên một đường hoặc đa tuyến trong bản vẽ, với các đường nối vào nó nếu bạn nói Yes. |
| `WALLPOLY` | `WP` | Vẽ tường quanh một đa giác đều từ 3 đến 64 cạnh, giống POLYGON. |
| `WALLRECT` | `WR` | Vẽ bốn tường nối nhau từ hai góc đối diện, giống RECTANG. |
| `WALLREJOIN` |  | Biến hai phần của một tường thành một tường lại. Phần đầu giữ vị trí của nó trong bản vẽ. |
| `WALLROT` |  | Vẽ bốn tường nối nhau như một hình chữ nhật xoay theo góc bất kỳ: cạnh đầu tiên, rồi khoảng cách cạnh kia ra ngoài. |
| `WALLSPLIT` | `WS` | Tách một tường thành hai tại một điểm hoặc chỗ một tường khác cắt qua. Các phần vẫn nối nhau trừ khi bạn yêu cầu khe hở hoặc đầu tự do. Cửa đi và cửa sổ đi theo phần của chúng. |
| `WALLSPLITGAP` |  | Tách một tường để lại khe hở: gõ khe hở, chọn tường, rồi chọn điểm. Các phần giữ đầu tự do và có thể nối lại. |
| `WALLSTRETCH` |  | Kéo giãn bằng một cửa sổ: các đầu tường nằm trong nó di chuyển, các tường nằm hoàn toàn trong nó di chuyển nguyên, và các tường đâm vào cạnh của chúng trượt theo. |
| `WALLTAN` |  | Nối tiếp một tường bằng một cung rời khỏi nó dọc theo tường (vẽ thành các đoạn tường thẳng ngắn). |
| `WALLTRACE` |  | Tạo tường quanh vùng khép kín nhỏ nhất của các đường và tường quanh điểm bạn nhấp. |
| `WALLUNHOLD` |  | Gỡ các khóa khỏi một tường (và các khóa của tường khác vào nó). |
| `WBLOCK` | `W`, `-WBLOCK` | Ghi một khối, một số đối tượng hoặc toàn bộ bản vẽ thành một tệp DWG hoặc DXF mới (W) |
| `WEDGE` | `WE` | Một nêm: hai góc và một chiều cao; nó dốc ra xa góc thứ nhất (3D) |
| `WHEREAMI` | `WHERE` | Nói con trỏ đang ở đâu. |
| `WHOHAS` |  | Cho biết ai đang mở một bản vẽ. CadCraft Studio giữ một tệp khóa nhỏ cạnh mỗi bản vẽ đang mở (Plan.dwg.cclock: ai, từ khi nào, phiên bản nào) và xóa khi đóng. Tùy chọn: Current (bản vẽ đang mở), File (chọn một tệp), FOlder (mọi bản vẽ trong một thư mục đang mở ở đâu đó; điều này cũng cho phép Studio giữ tệp khóa trong thư mục đó), Path (gõ một đường dẫn), Name (tên người khác thấy). Khóa không được làm mới trong năm phút được coi là cũ. Không có trong trình duyệt. |
| `WINDOW` | `WN` | Đặt một cửa sổ vào tường. |
| `XATTACH` | `XA` | Liên kết một DWG hoặc DXF khác vào bản vẽ này, hiện ở chế độ chỉ đọc (XREF liệt kê và tải lại chúng) |
| `XCLIP` | `XC` | Cắt tham chiếu khối và bản vẽ liên kết theo một hình chữ nhật hoặc đa giác, hoặc gỡ phần cắt. |
| `XLINE` | `XL` | Đường dựng, không kết thúc hai hướng: qua hai điểm, nằm ngang, thẳng đứng, theo góc, chia đôi một góc, hoặc dời khỏi một đường. |
| `XREF` | `XR`, `-XREF` | Bản vẽ liên kết (tham chiếu ngoài): liệt kê, đính kèm, tải lại, gắn chặt, tháo rời |
| `ZOOM` | `Z` | Phạm vi, hoặc một cửa sổ |
