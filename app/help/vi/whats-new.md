---
title: Có gì mới trong 0.9
summary: Tô bóng theo đường biên, nhóm lớp, các tầng xếp chồng, tường thông minh 2D có cửa đi và cửa sổ, kiểu văn bản và trình soạn văn bản định dạng, dòng lệnh nổi, bắt điểm lưới, mười cách vẽ cung tròn, và bảng Tài liệu.
keywords: có gì mới, 0.9, ghi chú phát hành, nhật ký thay đổi, tô bóng, tô bóng liên kết, HATCHEDIT, tệp .pat, tệp mẫu, nhóm lớp, LAYGROUP, tầng, các tầng xếp chồng, FLOORLAYERS, tường thông minh, tường, cửa đi, cửa sổ, công cụ tường, kiểu văn bản, kiểu, trình soạn MTEXT, văn bản đoạn, định dạng, dòng lệnh nổi, dòng lệnh, vùng trên, gọn, bắt điểm theo lưới, bắt điểm lưới, F9, cung tròn, bảng tài liệu, lấy ra (check out), kích thước thép Anh, draw.io, văn bản tiếng Thái, DXF R12, có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, tự động hoàn thành, bóng mờ, tab, SKETCHFIX, PHOTOSKETCH, AUTOSHEET, chi tiết, GRIDMOVE, AUTODIM, thẻ, đánh dấu, gộp, git, Fossil, truy cập, giới hạn, phương vị, AUNITS, SHX, sơ đồ, OLE, lịch sử, so sánh, bằng lời, thuộc tính, feet và inch, kéo giãn, ngôn ngữ, thiết bị nhập, vấn đề, Live, trợ lý
from: 8b6dea0b
---

Đây là các thay đổi trong CadCraft 0.9 so với 0.8.1. CadCraft là ứng dụng vẽ 2D và 3D trong CadCraft Studio 0.9 và tám ứng dụng của bộ này. Phiên bản 0.9 hoàn thiện việc vẽ mặt bằng, thêm kiểu văn bản và một trình soạn văn bản thực sự, và mang lại nhiều không gian hơn trên màn hình.

## Mới

### Vẽ mặt bằng

- **Tô bóng theo đường biên.** {{cmd:HATCH}} liên kết với đường biên bao quanh nó. Di chuyển, xoay hoặc thu phóng đường biên thì tô bóng và mẫu của nó đi theo; định hình lại đường biên thì tô bóng được tính lại. {{cmd:HATCHEDIT}} (`HE`) thay đổi tô bóng sau này và tạo hoặc kết thúc liên kết. Xem [Tô bóng và vùng tô](topic:hatch).
- **Tệp mẫu tô bóng.** Ở câu hỏi `Pick internal point` của {{cmd:HATCH}}, gõ `F` (Tệp mẫu) rồi chọn tệp `.pat`. Chỉ các tệp theo định dạng thông thường đã được thử.
- **Nhóm lớp.** Trong {{ui:Tools}} ở bảng {{ui:Layers}}: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}} và {{ui:Find a layer}}; hoặc gõ {{cmd:LAYGROUP}} (`LG`). Xem [Sắp xếp bản vẽ bằng lớp](topic:layers#group-layers).
- **Các tầng xếp chồng.** {{cmd:FLOORS}} (`FLR`), hoặc {{ui:Floors…}} trong menu {{ui:More}} của nhóm {{ui:View}}. Khung nhìn trên tờ có thể hiển thị một tầng qua {{ui:Floor shown}} trong Thuộc tính. {{cmd:FLOORLAYERS}} chuyển các tầng thành lớp cho tệp gửi cho người khác. Xem [Xếp chồng tầng trong một bản vẽ](topic:floors).
- **Tường, cửa đi và cửa sổ 2D thông minh.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) và {{cmd:DELOPENING}}. Góc, mối nối chữ T và chỗ giao nhau được tính tự động. Tường lưu lại cách chúng nối với nhau; Thuộc tính có thêm Không cho nối ở đầu / ở cuối, một dòng Vị trí và Chiều dài có thể sửa. Xem [Vẽ tường, cửa đi và cửa sổ 2D](topic:walls-2d).
- **Công cụ tường cho tường mặt bằng.** Gõ {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} và các lệnh còn lại. Chúng chưa có nút trên thanh công cụ. Xem [Hình dạng, cắt, dời và khóa tường 2D](topic:wall-tools-2d).

### Văn bản

- **Kiểu văn bản.** {{cmd:STYLE}} (`ST`), hoặc {{ui:Text style}} trên thanh công cụ {{ui:Draw}}: các kiểu có tên, với phông, chiều cao, hệ số rộng và độ nghiêng. Xem [Đặt phông và cỡ chữ bằng kiểu văn bản](topic:text-styles).
- **Trình soạn văn bản đoạn có định dạng.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} hoặc nhấp đúp vào văn bản sẽ mở một hộp có phông, cỡ chữ, đậm, nghiêng, gạch chân, gạch ngang, màu, căn lề, và các ký hiệu độ, cộng-trừ và đường kính, cùng {{ui:OK}} và {{ui:Cancel}}. Xem [Định dạng văn bản đoạn](topic:format-paragraph-text).
- **Sơ đồ từ XML của draw.io.** {{cmd:DIAGRAM}} (`T2D`) cũng đọc XML của draw.io được dán vào. Xem [Vẽ sơ đồ từ văn bản](topic:text-to-diagram).
- **Văn bản tiếng Thái trong bản in PDF.** Trước đây in ra thành dấu hỏi.

### Thêm không gian và công cụ vẽ hỗ trợ

- **Dòng lệnh nổi, mỏng hơn, và vùng trên gọn hơn.** Kéo tay cầm của dòng lệnh để làm nó nổi, kéo cạnh trên để có ít dòng hơn, {{key:F2}} mở lịch sử. {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Command line}} và các lựa chọn vùng trên có cùng cài đặt. Xem [Cài đặt](topic:settings#command-line).
- **Menu bắt điểm đối tượng.** Nhấp chuột phải vào {{ui:Snap}} trên thanh trạng thái, hoặc gõ {{cmd:OSNAP}}.
- **Bắt điểm theo lưới.** Nút {{ui:Grid snap}} trên thanh trạng thái, hoặc {{key:F9}}: các điểm được chọn sẽ đi tới điểm lưới gần nhất khi không có bắt điểm đối tượng nào lấy điểm đó.
- **Cung tròn theo mười cách, và Continue.** {{ui:Arc}} trên thanh công cụ {{ui:Draw}} hoặc {{cmd:ARC}}: 3 điểm, nhóm Start/Center/End và nhóm Center/Start/End, và Continue (nhấn {{key:Enter}} tại điểm đầu) từ đường thẳng, cung tròn hoặc đa tuyến cuối cùng.
- **Bảng Tài liệu.** {{cmd:DOCUMENTS}} (`DOCS`) hoặc {{ui:Documents…}} trong menu {{ui:More}} của nhóm {{ui:View}}: phiên bản sửa đổi, trạng thái và lấy ra (check out) cho mọi bản vẽ trong thư mục dự án. Bảng mở ra như một hộp thoại căn giữa. Xem [Tài liệu](topic:documents).

### Tệp

- **Kích thước thép Anh.** 976 mặt cắt trong bảng Standard, nhập như trên bản vẽ (ví dụ `305x165x40 UB`).
- **Bộ quy định Nam Phi** (thực hành bản vẽ và quy chuẩn xây dựng) dưới dạng bộ của tiện ích Quy chuẩn xây dựng. Các con số chưa được kiểm chứng.
- **Tiện ích bổ sung cho CadCraft,** thêm khi cần và mặc định tắt: thiết kế chiếu sáng nội thất, thiết kế chip (từ HDL sang bố cục), khắc máy router, mô phỏng mạch, bánh xích con lăn và các bộ quy chuẩn xây dựng theo quốc gia.

## Đã sửa

- Di chuyển, xoay hoặc thu phóng tô bóng từng để lại mẫu của nó.
- {{cmd:GRIDMOVE}} kéo cả một bức tường mặt bằng chỉ bắt đầu trên đường lưới. Giờ tường được đánh giá theo hai đầu của nó.
- Lưới chỉ hiển thị bên trong giới hạn bản vẽ kể cả khi giới hạn đã tắt.
- Danh sách khối trong bảng bên có thể cuộn, và tên không phải khối sẽ liệt kê các khối bắt đầu bằng tên đó ("Có phải ý bạn là").
- Tệp DXF R12 mà AutoCAD từng từ chối ("Unknown group 1001 for table") giờ mở được.
- Tệp rất lớn (khoảng 70,000 thực thể trở lên) từng không mở được với thông báo "Maximum call stack size exceeded".
- Tệp DWG từ AutoCAD 2018 trở lên có phiên bản bảo trì cao từng không mở được với thông báo "bad BITLONG code 11".
- Trong hộp văn bản đoạn, kích thước mới nhập cho một phần đã chọn giữ nguyên vùng chọn.

## Trong mọi ứng dụng

Chú giải công cụ Bootstrap trên mọi điều khiển có gợi ý, một mẹo khởi động có thể đóng, các dải thẻ cuộn khi không vừa, và tiêu đề thẻ trình duyệt theo bản vẽ đang mở (`<drawing> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} giờ là danh sách thả xuống với các lựa chọn hai dòng. Danh sách ngôn ngữ trong {{ui:Settings}} dài hơn so với 0.8. Cộng tác trực tiếp, bộ sưu tập Thư viện và đơn vị trọng lượng và nhiệt độ được mô tả trong ghi chú Studio.

## Giới hạn thực tế

- Văn bản đoạn không có danh sách đánh dấu hay đánh số, thước tab hoặc căn đều hai bên. Bản PDF đã in đặt văn bản bằng Helvetica.
- Tường mặt bằng là thẳng, nên một cung được vẽ thành các đoạn tường ngắn. Việc kiểm tra công cụ tường của cộng đồng vẫn đang chờ.
- Nhóm lớp không được ghi theo định dạng riêng của AutoCAD, nên AutoCAD hiển thị một danh sách phẳng. Các chương trình khác hiển thị mọi tầng cùng lúc trừ khi bạn chạy {{cmd:FLOORLAYERS}}.
- Bảng Tài liệu chưa được hai người thử trên một thư mục chia sẻ thật. Khắc máy router chưa chạy trên máy thật nào. Ước tính chiếu sáng được kiểm tra bằng một phép theo dõi photon, không phải bằng chương trình khác. Các tiện ích kỹ thuật là công cụ hỗ trợ kiểm tra, không thay thế cho việc kỹ sư xem xét.
- Các ngôn ngữ khác tiếng Anh là bản nháp máy, và một số từ mới chỉ có tiếng Anh.

## Trước đó: 0.8 và 0.8.1

Đây là các thay đổi trong CadCraft 0.8 và 0.8.1 so với 0.7. Phiên bản 0.8 (1 tháng 11 năm 2026) thêm các công cụ hỗ trợ vẽ hoạt động từ chính bản vẽ của bạn, theo quy tắc trên máy tính của bạn và không cần mô hình; còn 0.8.1 (2 tháng 11 năm 2026) sửa các lỗi được báo cáo sau đó.

### Mới

**Bản vẽ tự hoàn thiện ý bạn**

- **Bóng mờ cho thấy bước tiếp theo.** Khi không có lệnh nào chạy, một bóng mờ nét đứt màu xám cho thấy các mẫu của chính bản vẽ dự đoán điều gì tiếp theo: thanh đứng kế tiếp với cùng khoảng cách, bậc tiếp theo của cầu thang, bức tường còn thiếu của một phòng. Nhấn {{key:Tab}} để vẽ nó như một bước hoàn tác, hoặc {{key:Esc}} để bỏ qua. Nó chỉ xem các đối tượng mới nhất, nên vẫn mượt trên bản vẽ lớn. Tắt trong {{ui:Settings}} › {{ui:CadCraft}} hoặc bằng {{cmd:AUTOCOMPLETE}} `Off`.
- **Điểm tiếp theo khi bạn vẽ đường thẳng.** Giữa lúc {{cmd:LINE}} hoặc {{cmd:PLINE}} chạy, bóng mờ là điểm tiếp theo: bậc tiếp theo của cầu thang, góc thứ tư của hình chữ nhật, hoặc điểm khép kín nó. Đưa con trỏ lại gần và nhấn {{key:Tab}}, như thể bạn đã nhấp ở đó.
- **Nét phác bằng bút thành hình học chính xác.** {{cmd:SKETCHFIX}}: vẽ nét thô bằng bút, chuột hoặc ngón tay và mỗi nét thành một đường thẳng, vòng tròn, cung tròn, hình chữ nhật hoặc đa tuyến gọn, bắt vào những gì đã vẽ. Xem [Phác thảo bằng bút và có hình học chính xác](topic:sketch-with-a-pen).
- **Ảnh của bản phác thảo thành bản vẽ.** {{cmd:PHOTOSKETCH}} (`PSK`) tìm tờ giấy trong ảnh, nắn lại phối cảnh, áp dụng khổ giấy và tỷ lệ bạn nhập, và vẽ lại các nét bút lên một lớp cho mỗi màu bút. Chữ viết không được vẽ lại.
- **Kích thước theo quy tắc.** {{cmd:AUTODIM}} (`ADIM`) tạo chuỗi kích thước dọc theo các cạnh bạn chọn, kích thước tổng thể, chiều rộng lỗ mở, đường kính lỗ và, với `Grid`, khoảng cách lưới. Nó không bao giờ lặp lại kích thước đã có.
- **Di chuyển đường lưới và bộ theo sau.** {{cmd:GRIDMOVE}} (`GM`): tường kết thúc tại đường lưới được kéo giãn theo, tường nằm dọc theo nó, cột, đầu tròn và thẻ của nó được di chuyển, và kích thước trên nó đo khoảng cách mới. Một bước hoàn tác.

**Tờ, chi tiết và thẻ**

- **Tờ tự bố trí.** {{cmd:AUTOSHEET}} lấy các khung nhìn đặt tên của bạn (hoặc các phần riêng của mô hình), chọn khổ giấy và tỷ lệ tiêu chuẩn, rồi đặt các khung nhìn lên tờ mới có khung tên và chú thích tên-và-tỷ lệ. Mọi thứ vẫn có thể chỉnh sửa. Xem [Tự bố trí tờ](topic:lay-out-sheets-for-me).
- **Chi tiết của công ty bạn, được gợi ý khi bạn vẽ.** {{cmd:DETAILS}} (`DET`) giữ các khối chi tiết riêng của bạn. Khi những gì bạn chọn khớp với một khối qua các từ trên lớp, tên khối và ghi chú, thanh trạng thái sẽ cho biết; chọn nó và đặt vào. {{cmd:DETAILS}} › Chia sẻ đưa danh sách của bạn vào thư mục Tài liệu và lấy về những gì nhóm đã thêm. Cài đặt tắt các gợi ý.
- **Thẻ trên khối.** {{cmd:TAGS}} định nghĩa một thẻ (loại, các giá trị có thể nhận, các khối áp dụng), gán nó cho các tham chiếu khối bạn chọn, và liệt kê chúng thành bảng thống kê có thể lưu dưới dạng CSV. Định nghĩa được giữ trong DWG. Xem [Thẻ](topic:tags).
- **Giới hạn bản vẽ.** {{cmd:LIMITS}} đặt một hình chữ nhật cho bản vẽ: lưới lấp đầy nó và thu phóng Tất cả hiển thị nó. Giới hạn hiện thành đường viền và được lưu trong DWG và DXF, cùng với giới hạn giấy. Xem [Đặt giới hạn bản vẽ](topic:drawing-limits).

**Làm việc với người khác và chương trình khác**

- **Chuyển đánh dấu thành bản sửa đổi.** {{cmd:REDLINE}} đọc gói mà MarkupCraft ghi ra và liệt kê mọi thay đổi. Chấp nhận hoặc từ chối từng thay đổi kèm ghi chú; các thay đổi được chấp nhận có đám mây sửa đổi và nhật ký sửa đổi trong một bước hoàn tác, và bạn lưu tệp trả lời để đóng các đánh dấu trong MarkupCraft. Xem [Chuyển đánh dấu thành bản sửa đổi](topic:redline-to-revision).
- **Bản vẽ mà git và Fossil có thể gộp.** Khi bật {{ui:Merge-friendly files}} trong {{ui:Settings}} › {{ui:CadCraft}}, mọi đối tượng có một khóa không bao giờ đổi (tệp lớn hơn khoảng 10 phần trăm). `cadcraft merge base ours theirs` sau đó gộp chỉnh sửa của hai người trên một đối tượng DWG hoặc DXF theo từng đối tượng, và chỉ báo cáo chỗ nào hai người cùng thay đổi một thứ. Xem [Gộp chỉnh sửa của hai người trên một bản vẽ](topic:merge-drawings).
- **Thay đổi bằng lời.** Trong Lịch sử, So sánh đưa ra một danh sách đơn giản: chỗ nào đã thay đổi, các vùng lớn cỡ nào, cái gì được thêm, xóa hoặc đổi, và văn bản nào đã được sửa. Xem [Mô tả thay đổi bằng lời](topic:changes-in-words).
- **Phương vị và góc.** Nhập hướng theo phương vị của người đo đạc như N45°23'30"E, hoặc theo độ, phút và giây, ở bất cứ chỗ nào hỏi góc; AUNITS đặt cách hiển thị góc. Xem [Nhập và hiển thị phương vị và góc](topic:bearings-and-angles).
- **Phông SHX của riêng bạn.** Cho CadCraft một thư mục phông SHX, và các kiểu văn bản đặt tên chúng sẽ được vẽ bằng chúng, trên màn hình và khi in. Xem [Vẽ văn bản bằng phông SHX của bạn](topic:shx-fonts).
- **Sơ đồ từ văn bản.** {{cmd:DIAGRAM}} đọc sơ đồ lưu đồ Mermaid, sơ đồ thành phần PlantUML, D2 hoặc danh sách từ-đến và vẽ các khối và đường nối mà bạn có thể chỉnh sửa. Xem [Vẽ sơ đồ từ văn bản](topic:text-to-diagram).
- **Đối tượng OLE trong DWG.** {{cmd:OLELIST}} liệt kê các đối tượng OLE mà DWG mang theo và CadCraft không thể tự đặt, và đặt một bản sao hình ảnh vào chỗ bạn chỉ định. Xem [Hình ảnh](topic:pictures#objects-from-other-programs-ole).
- **Phép tính của bạn ở lại với bản vẽ.** Tờ tính toán và lý do thiết kế được giữ trong DWG cùng bảng lớp.

**Vẽ không cần nhìn**

- Bật {{ui:Drafting without sight}} trong {{ui:Settings}} (hoặc gõ {{cmd:ACCESS}} và trả lời `On`). CadCraft đọc mọi lệnh và kết quả qua trình đọc màn hình của bạn, mô tả bản vẽ và những gì ở gần con trỏ, cho phép bạn di chuyển con trỏ và chọn điểm bằng bàn phím, và phát âm thanh cho mỗi bắt điểm và tay cầm. Ở nơi trình duyệt của bạn nhận diện được giọng nói trên máy tính, có thể đọc lệnh bằng giọng nói. Xem [Vẽ không cần nhìn](topic:draft-without-sight).

**Trong mọi ứng dụng**

- **Ngôn ngữ.** 54 ngôn ngữ; mười ngôn ngữ mới (Litva, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek). Các ngôn ngữ ngoài tiếng Anh là bản nháp máy cho đến khi người bản ngữ đọc qua.
- **Thiết bị nhập.** Các điều khiển bàn di chuột, bút, chuột 3D, tay cầm chơi game và MIDI.
- **Số dòng thanh công cụ và bảng thuộc tính.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} cung cấp Wrap, 2 dòng hoặc 1 dòng trong các ứng dụng khác. CadCraft giữ cài đặt riêng trong {{ui:Settings}} › {{ui:CadCraft}} (xem [Số dòng thanh công cụ](topic:settings#toolbar-rows)). Bảng thuộc tính dùng chung nằm trong ba ứng dụng khác, không nằm trong CadCraft.
- **Vấn đề, Live và tiện ích bổ sung.** Một bảng Vấn đề dùng chung cảnh báo trong mọi ứng dụng, một khung nhìn Live cho biết ai ở đâu trong CadCraft Studio (xem [Cùng làm việc trên một bản vẽ](topic:work-live)), và danh sách tiện ích bổ sung.
- **Kết nối AI của bạn.** Một kết nối từ CadCraft Studio tới cả tám ứng dụng, với mức chỉ đọc, gợi ý hoặc chỉnh sửa cho từng ứng dụng và nhật ký bằng lời đơn giản về những gì trợ lý đã làm. CadCraft không có AI riêng, và Hỏi trong mọi ứng dụng dùng AI bạn đã kết nối.

### Đã sửa trong 0.8.1

- **Thuộc tính hiển thị 150 thay vì 12'-6"** trong bản vẽ theo feet và inch. Các trường mà ứng dụng tự đọc giữ lại văn bản của chúng.
- **Tệp DWG có phần lớp bị đọc sai kiểu** (GitHub cadcraft#5) giờ mở đúng.
- **Con trỏ chữ thập không còn hiện sau cửa sổ bật lên.**
- **Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy.** Trước đây chỉ có tiếng Anh. Chưa thử trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- **Máy tính bảng ở chế độ dọc** dành thêm chiều cao lưới cho vùng vẽ, và chế độ tờ bắt đầu ở 760 px hoặc ít hơn.
- **STRETCH với cửa sổ cắt, và LIMITS,** được báo cáo trên Studio 0.8.0 và đã đúng trong bản web 0.8; trình cài đặt của người báo cáo cũ hơn. Studio 0.8.1 đã có các sửa này.

### Chưa có trong phiên bản này

- **0.8 và 0.8.1 chưa được ký mã.** Windows có thể cảnh báo (chọn {{ui:More info}}, rồi {{ui:Run anyway}}); trên Mac, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Open}}. Bản phát hành trên cửa hàng đang tạm dừng, và bản iPad và iPhone chưa được dựng lại cho 0.8.1.
- **Nét phác bằng bút và ảnh phác thảo** mới chỉ thử trên ảnh tự tạo và chuột, chưa thử với bút thật, màn hình cảm ứng hoặc bản phác tay trên giấy.
- **Vẽ không cần nhìn** mới được kiểm tra bằng kiểm tra tự động, chưa dùng trình đọc màn hình hay người thử nghiệm khiếm thị.
- **Chia sẻ chi tiết** chưa được hai người kiểm tra, và thư mục Team Cloud Plan làm thư mục Tài liệu chưa được xây dựng.
- **Gộp** hoạt động với tệp DWG và DXF của CadCraft; với tệp của các ứng dụng khác thì chưa được xây dựng.
- **Hoàn tác giữa các cửa sổ:** CadCraft báo từng bước đã xong, nhưng Studio chưa có một lệnh Hoàn tác chung cho mọi ứng dụng; mỗi ứng dụng hoàn tác bước của riêng nó.
- **Đối tượng OLE của DWG** được giữ lại nhưng không được vẽ tại chỗ.
- **Đọc bảng kiểu nét in (tệp CTB)** từ chương trình khác đã được xây dựng nhưng chưa được kiểm tra với tệp từ chương trình khác.
- **Kết nối AI:** kết nối một chạm trong Studio, trình kết nối được host cho AI trên trình duyệt, khóa API riêng của bạn trong Studio, và gói MCP đã công bố không được hứa trong bản phát hành này.

Về phiên bản trước, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
