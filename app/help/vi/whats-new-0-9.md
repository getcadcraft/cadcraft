---
title: Có gì mới trong 0.9 (trước đó)
summary: Tô bám theo biên của nó, nhóm lớp, tầng xếp chồng, tường 2D thông minh với cửa đi và cửa sổ, kiểu văn bản và trình soạn văn bản có định dạng, dòng lệnh nổi, bắt lưới, mười cách vẽ cung, và bảng Tài liệu.
keywords: có gì mới 0.9, phát hành trước, có gì mới, 0.9, ghi chú phát hành, nhật ký thay đổi, tô, tô liên kết, hatchedit, tệp pat, tệp mẫu, nhóm lớp, laygroup, tầng, tầng xếp chồng, floorlayers, tường thông minh, tường, cửa đi, cửa sổ, công cụ tường, kiểu văn bản, style, trình soạn mtext, văn bản đoạn, định dạng, dòng lệnh nổi, dòng lệnh, khu vực trên, gọn, bắt lưới, grid snap, f9, cung, bảng tài liệu, check out, kích thước thép Anh, draw.io, văn bản Thái, dxf r12, 0.8, 0.8.1, phiên bản, tính năng mới, tự hoàn thành, bóng ma, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, thẻ, gộp, git, fossil, access, vẽ không cần nhìn, trình đọc màn hình, giới hạn, phương vị, aunits, shx, diagram, ole, lịch sử, so sánh, bằng lời, thuộc tính, feet và inch, kéo giãn, ngôn ngữ, thiết bị nhập, vấn đề, live, trợ lý
from: 3451e64c
---

Đây là những gì đã thay đổi trong CadCraft 0.9 so với 0.8.1. CadCraft là ứng dụng vẽ 2D và 3D của CadCraft Studio 0.9 và tám ứng dụng của nó. 0.9 hoàn thành việc vẽ mặt bằng, thêm kiểu văn bản và một trình soạn văn bản thật, và cho bạn nhiều chỗ hơn trên màn hình.

## Mới

### Vẽ mặt bằng

- **Tô bám theo biên của nó.** {{cmd:HATCH}} liên kết với những gì bao quanh nó. Dời, xoay hoặc đổi tỷ lệ biên thì tô và mẫu của nó đi theo; định hình lại nó thì tô được tính lại. {{cmd:HATCHEDIT}} (`HE`) đổi một tô về sau và tạo hoặc kết thúc liên kết. Xem [Tô bóng và vùng tô](topic:hatch).
- **Tệp mẫu tô.** Ở câu hỏi {{cmd:HATCH}} `Pick internal point`, gõ `F` (Tệp mẫu) và chọn một tệp `.pat`. Chỉ các tệp viết theo định dạng thông thường đã được thử.
- **Nhóm lớp.** Trong {{ui:Công cụ}} trên bảng {{ui:Lớp}}: {{ui:Nhóm mới}}, {{ui:Thêm nhóm có sẵn}}, {{ui:Nhóm theo tên}}, và {{ui:Tìm lớp}}; hoặc gõ {{cmd:LAYGROUP}} (`LG`). Xem [Sắp xếp bản vẽ bằng lớp](topic:layers#group-layers).
- **Tầng xếp chồng.** {{cmd:FLOORS}} (`FLR`), hoặc {{ui:Tầng…}} trong menu {{ui:Thêm}} của nhóm {{ui:Khung nhìn}}. Một khung nhìn trên tờ có thể hiện một tầng dưới {{ui:Tầng hiển thị}} trong Thuộc tính. {{cmd:FLOORLAYERS}} biến các tầng thành lớp cho một tệp gửi đến người khác. Xem [Xếp tầng trong một bản vẽ](topic:floors).
- **Tường 2D thông minh, cửa đi và cửa sổ.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) và {{cmd:DELOPENING}}. Góc, nối T và giao nhau được tính cho bạn. Tường giữ bản ghi về cách chúng nối, và Thuộc tính có Không cho nối ở đầu / ở cuối, một Đường định vị và một Chiều dài có thể sửa. Xem [Vẽ tường, cửa đi và cửa sổ 2D](topic:walls-2d).
- **Công cụ tường trên tường mặt bằng.** Gõ {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} và các lệnh khác. Chúng chưa có nút trên thanh công cụ. Xem [Hình dạng tường, cắt, dời và khóa cho tường 2D](topic:wall-tools-2d).

### Văn bản

- **Kiểu văn bản.** {{cmd:STYLE}} (`ST`), hoặc {{ui:Kiểu văn bản}} trên thanh {{ui:Vẽ}}: các kiểu có tên với phông, chiều cao, hệ số chiều rộng và độ nghiêng. Xem [Đặt phông và cỡ chữ bằng kiểu văn bản](topic:text-styles).
- **Trình soạn văn bản đoạn có định dạng.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} hoặc nhấp đúp vào văn bản mở một hộp với phông, cỡ, đậm, nghiêng, gạch chân, gạch ngang, màu, căn lề, cùng các dấu độ, cộng-trừ và đường kính, và {{ui:OK}} và {{ui:Hủy}}. Xem [Định dạng văn bản đoạn](topic:format-paragraph-text).
- **Sơ đồ từ XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) cũng đọc XML draw.io được dán. Xem [Vẽ sơ đồ từ văn bản](topic:text-to-diagram).
- **Văn bản Thái trong bản in PDF.** Trước đây nó in thành dấu hỏi.

### Thêm chỗ và hỗ trợ vẽ

- **Dòng lệnh nổi và mỏng hơn, khu vực trên gọn.** Kéo tay cầm của dòng lệnh để làm nó nổi, kéo cạnh trên để có ít dòng hơn, {{key:F2}} mở lịch sử. {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Dòng lệnh}} và các lựa chọn khu vực trên có cùng cài đặt. Xem [Cài đặt](topic:settings#command-line).
- **Menu bắt điểm đối tượng.** Nhấp chuột phải vào {{ui:Bắt điểm}} trên thanh trạng thái, hoặc gõ {{cmd:OSNAP}}.
- **Bắt vào lưới.** Nút {{ui:Bắt điểm lưới}} trên thanh trạng thái, hoặc {{key:F9}}: các điểm được chọn đi đến điểm lưới gần nhất khi không có bắt điểm đối tượng nào lấy điểm đó.
- **Cung theo mười cách, và Tiếp tục.** {{ui:Cung tròn}} trên thanh {{ui:Vẽ}} hoặc {{cmd:ARC}}: 3 điểm, họ Điểm đầu/Tâm/Điểm cuối và họ Tâm/Điểm đầu/Điểm cuối, và Tiếp tục (nhấn {{key:Enter}} tại điểm đầu) từ đường thẳng, cung hoặc đa tuyến cuối.
- **Bảng Tài liệu.** {{cmd:DOCUMENTS}} (`DOCS`) hoặc {{ui:Tài liệu…}} trong menu {{ui:Thêm}} của nhóm {{ui:Khung nhìn}}: phiên bản, trạng thái và lấy ra cho mọi bản vẽ trong một thư mục dự án. Nó mở như một hộp thoại căn giữa. Xem [Tài liệu](topic:documents).

### Tệp

- **Kích thước thép Anh.** 976 mặt cắt trong bảng Chuẩn, gõ như trên bản vẽ (ví dụ `305x165x40 UB`).
- **Bộ dữ liệu Nam Phi** (thực hành vẽ và quy định xây dựng) như các gói của add-on Quy định xây dựng. Các con số chưa được xác minh.
- **Add-on cho CadCraft,** thêm khi cần và mặc định tắt: thiết kế chiếu sáng nội thất, thiết kế chip (từ HDL sang bố cục), khắc router, mô phỏng mạch, bánh xích con lăn, và gói quốc gia của add-on Quy định xây dựng.

## Đã sửa

- Dời, xoay hoặc đổi tỷ lệ một tô để lại mẫu của nó phía sau.
- {{cmd:GRIDMOVE}} mang theo một bức tường mặt bằng cả bức chỉ bắt đầu trên đường lưới. Giờ một bức tường được đánh giá theo các đầu của nó.
- Lưới chỉ hiện trong giới hạn bản vẽ ngay cả khi giới hạn tắt.
- Danh sách khối trong bảng bên hiện cuộn, và một tên không phải khối liệt kê các khối bắt đầu bằng nó ("Did you mean").
- Tệp DXF R12 mà AutoCAD từ chối ("Unknown group 1001 for table") giờ mở được ở đó.
- Tệp rất lớn (khoảng 70.000 thực thể trở lên) không mở được với "Maximum call stack size exceeded".
- Tệp DWG từ AutoCAD 2018 trở lên với phiên bản bảo trì cao không mở được với "bad BITLONG code 11".
- Trong hộp văn bản đoạn, một cỡ mới gõ cho phần được chọn giữ nguyên vùng chọn.

## Trong mọi ứng dụng

Chú giải công cụ Bootstrap trên mọi điều khiển có gợi ý, một mẹo khởi đầu bạn có thể đóng, các dải thẻ cuộn khi không vừa, và tiêu đề thẻ trình duyệt theo bản vẽ đang mở (`<drawing> - CadCraft | CadCraft`). {{ui:Cài đặt}} › {{ui:Bố cục}} giờ là một danh sách thả xuống các lựa chọn hai dòng. Danh sách ngôn ngữ trong {{ui:Cài đặt}} dài hơn so với 0.8. Cộng tác trực tiếp, bộ sưu tập Thư viện, và đơn vị trọng lượng và nhiệt độ được mô tả trong các ghi chú Studio.

## Giới hạn trung thực

- Văn bản đoạn không có danh sách gạch đầu dòng hoặc đánh số, thước tab hay căn đều. Các PDF được in đặt văn bản bằng Helvetica.
- Tường mặt bằng là thẳng, nên một cung được vẽ thành các tường ngắn. Việc kiểm tra thủ công của cộng đồng đối với công cụ tường đang chờ.
- Nhóm lớp không được ghi theo định dạng riêng của AutoCAD, nên AutoCAD hiện một danh sách phẳng. Các chương trình khác hiện mọi tầng cùng nhau trừ khi bạn chạy {{cmd:FLOORLAYERS}}.
- Bảng Tài liệu chưa được hai người thử trên một thư mục chia sẻ thật. Khắc router chưa chạy trên máy thật nào. Ước tính chiếu sáng được kiểm tra với một lần dò photon, không phải với chương trình khác. Các add-on kỹ thuật là công cụ kiểm tra, không thay thế được việc xem xét của kỹ sư.
- Các ngôn ngữ ngoài tiếng Anh là bản nháp máy, và một số từ mới chỉ có tiếng Anh.

## Trước đó: 0.8 và 0.8.1

Đây là những gì đã thay đổi trong CadCraft 0.8 và 0.8.1 so với 0.7. 0.8 (1 tháng 11 năm 2026) thêm các công cụ hỗ trợ vẽ làm việc từ chính bản vẽ của bạn, bằng quy tắc trên máy tính của bạn và không có mô hình, và 0.8.1 (2 tháng 11 năm 2026) sửa các lỗi được báo sau đó.

### Mới

**Bản vẽ hoàn thành suy nghĩ của bạn**

- **Một bóng ma cho thấy điều gì tiếp theo.** Khi không có lệnh nào chạy, một bóng đứt nét màu xám cho thấy những mẫu của bản vẽ bạn nói là sẽ đến tiếp: thanh đứng kế tiếp với cùng khoảng cách, bước kế tiếp của một cầu thang, bức tường còn thiếu của một phòng. Nhấn {{key:Tab}} để vẽ nó như một bước hoàn tác, hoặc {{key:Esc}} để bỏ qua. Nó chỉ xem các đối tượng mới nhất, nên vẫn mượt trên bản vẽ lớn. Tắt nó trong {{ui:Cài đặt}} › {{ui:CadCraft}} hoặc với {{cmd:AUTOCOMPLETE}} `Off`.
- **Điểm kế tiếp khi bạn vẽ một đường thẳng.** Giữa {{cmd:LINE}} hoặc {{cmd:PLINE}}, bóng là điểm kế tiếp: bước kế tiếp của một cầu thang, góc thứ tư của một hình chữ nhật, hoặc điểm khép nó. Đưa con trỏ gần và nhấn {{key:Tab}}, như thể bạn đã nhấp ở đó.
- **Nét bút thành hình học chính xác.** {{cmd:SKETCHFIX}}: vẽ các nét thô bằng bút, chuột hoặc ngón tay và mỗi cái thành một đường thẳng, hình tròn, cung, hình chữ nhật hoặc đa tuyến sạch, bắt vào những gì đã vẽ. Xem [Phác thảo bằng bút và nhận hình học chính xác](topic:sketch-with-a-pen).
- **Ảnh của một bản phác thảo thành bản vẽ.** {{cmd:PHOTOSKETCH}} (`PSK`) tìm tờ giấy trong ảnh, nắn phối cảnh, áp dụng khổ giấy và tỷ lệ bạn đưa, và vẽ các nét bút thành một lớp cho mỗi màu bút. Chữ không được vẽ.
- **Ghi kích thước theo quy tắc.** {{cmd:AUTODIM}} (`ADIM`) tạo chuỗi kích thước dọc theo các cạnh bạn chọn, kích thước tổng thể, chiều rộng các khe, đường kính lỗ, và với `Grid`, khoảng cách lưới. Nó không bao giờ lặp lại một kích thước đã có.
- **Dời một đường lưới và cả bộ đi theo.** {{cmd:GRIDMOVE}} (`GM`): tường kết thúc trên đường lưới kéo giãn theo, tường nằm dọc theo nó, cột, bong bóng và thẻ của nó dời, và kích thước trên nó đo khoảng cách mới. Một bước hoàn tác.

**Tờ, chi tiết và thẻ**

- **Tờ tự dàn trang.** {{cmd:AUTOSHEET}} lấy các khung nhìn đã đặt tên của bạn (hoặc các phần riêng của mô hình), chọn khổ giấy và tỷ lệ chuẩn, và đặt các khung nhìn lên tờ mới với khung tên và chú thích tên-và-tỷ lệ. Mọi thứ vẫn chỉnh sửa được. Xem [Dàn trang tờ cho tôi](topic:lay-out-sheets-for-me).

Hmm, "for me" › "cho bạn" fine. Let me fix: "Dàn trang tờ tự động".

- **Chi tiết của công ty bạn, được gợi ý khi bạn vẽ.** {{cmd:DETAILS}} (`DET`) giữ các khối chi tiết của riêng bạn. Khi thứ bạn chọn khớp một chi tiết theo các từ trong lớp, tên khối và ghi chú, thanh trạng thái cho biết điều đó; chọn và đặt nó. {{cmd:DETAILS}} › Share đặt danh sách của bạn vào thư mục Tài liệu và mang về những gì nhóm bạn đã thêm. Cài đặt tắt các gợi ý.
- **Thẻ trên khối.** {{cmd:TAGS}} định nghĩa một thẻ (loại của nó, các giá trị nó có thể nhận, các khối nó áp dụng), đặt nó lên các tham chiếu khối bạn chọn, và liệt kê chúng thành một bảng bạn có thể lưu thành CSV. Các định nghĩa được giữ trong DWG. Xem [Thẻ](topic:tags).
- **Giới hạn bản vẽ.** {{cmd:LIMITS}} đặt một hình chữ nhật cho bản vẽ: lưới lấp đầy nó và phóng to toàn bộ hiện nó. Các giới hạn hiện như một đường viền và được lưu trong DWG và DXF, cùng giới hạn giấy. Xem [Đặt giới hạn bản vẽ](topic:drawing-limits).

**Làm việc với người khác và chương trình khác**

- **Biến một bản đánh dấu thành sửa đổi.** {{cmd:REDLINE}} đọc gói mà MarkupCraft ghi và liệt kê mọi thay đổi. Chấp nhận hoặc từ chối từng cái kèm ghi chú; những cái được chấp nhận có một đám mây sửa đổi và một nhật ký sửa đổi trong một bước hoàn tác, và bạn lưu tệp trả lời đóng các đánh dấu trong MarkupCraft. Xem [Biến một bản đánh dấu thành sửa đổi](topic:redline-to-revision).
- **Bản vẽ mà git và Fossil có thể gộp.** Với {{ui:Tệp thân thiện với gộp}} bật trong {{ui:Cài đặt}} › {{ui:CadCraft}}, mọi đối tượng có một khóa không bao giờ đổi (tệp lớn hơn khoảng 10 phần trăm). `cadcraft merge base ours theirs` gộp hai bản chỉnh sửa của hai người trên một đối tượng DWG hoặc DXF theo từng đối tượng, và chỉ báo nơi hai người cùng đổi một thứ. Xem [Gộp hai bản chỉnh sửa của một bản vẽ](topic:merge-drawings).
- **Điều gì đã đổi, bằng lời.** Trong Lịch sử, So sánh đưa ra một danh sách đơn giản: nơi mọi thứ đã đổi, các vùng lớn cỡ nào, cái gì được thêm, xóa hoặc đổi, và văn bản nào đã được sửa. Xem [Nói bằng lời điều gì đã đổi](topic:changes-in-words).
- **Góc phương vị và góc.** Gõ một hướng dưới dạng phương vị trắc địa như N45°23'30"E, hoặc theo độ, phút và giây, ở bất kỳ đâu một góc được hỏi; AUNITS đặt cách góc được hiện. Xem [Nhập và hiển thị phương vị và góc](topic:bearings-and-angles).
- **Phông SHX của riêng bạn.** Đưa cho CadCraft một thư mục phông SHX và các kiểu văn bản đặt tên chúng được vẽ bằng chúng, trên màn hình và trong bản in. Xem [Vẽ văn bản bằng phông SHX riêng](topic:shx-fonts).
- **Sơ đồ từ văn bản.** {{cmd:DIAGRAM}} đọc một lưu đồ Mermaid, sơ đồ thành phần PlantUML, D2 hoặc danh sách từ-đến và vẽ các khối và đường nối bạn có thể sửa. Xem [Vẽ sơ đồ từ văn bản](topic:text-to-diagram).
- **Đối tượng OLE trong một DWG.** {{cmd:OLELIST}} liệt kê các đối tượng OLE mà một DWG mang và CadCraft không tự đặt được, và đặt một bản sao hình ảnh ở nơi bạn nói. Xem [Ảnh](topic:pictures#objects-from-other-programs-ole).
- **Phép tính của bạn ở lại với bản vẽ.** Tờ tính và lý do thiết kế được giữ trong DWG cùng bảng lớp.

**Vẽ không cần nhìn**

- Bật {{ui:Vẽ không cần nhìn}} trong {{ui:Cài đặt}} (hoặc gõ {{cmd:ACCESS}} và trả lời `On`). CadCraft đọc mọi lệnh và kết quả qua trình đọc màn hình của bạn, mô tả bản vẽ và những gì ở gần con trỏ, cho bạn di chuyển con trỏ và chọn điểm bằng bàn phím, và phát một âm thanh cho mỗi bắt điểm và grip. Ở nơi trình duyệt của bạn nhận được giọng nói trên máy tính, lệnh có thể được nói. Xem [Vẽ không cần nhìn](topic:draft-without-sight).

**Trong mọi ứng dụng**

- **Ngôn ngữ.** 54 ngôn ngữ; mười cái mới (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek). Các ngôn ngữ ngoài tiếng Anh là bản nháp máy cho đến khi người bản ngữ đọc chúng.
- **Thiết bị nhập.** Các điều khiển bàn di chuột, bút, chuột 3D, tay cầm chơi game và MIDI.
- **Số dòng thanh công cụ và bảng thuộc tính.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số dòng thanh công cụ}} đưa ra Xuống dòng, 2 dòng hoặc 1 dòng trong các ứng dụng khác. CadCraft giữ cài đặt riêng của nó trong {{ui:Cài đặt}} › {{ui:CadCraft}} (xem [Số dòng thanh công cụ](topic:settings#toolbar-rows)). Bảng thuộc tính dùng chung nằm trong ba ứng dụng khác, không phải CadCraft.
- **Vấn đề, Live và add-on.** Một bảng Vấn đề dùng chung cảnh báo trong mọi ứng dụng, một khung Live cho thấy ai đang ở đâu trong CadCraft Studio (xem [Làm việc trên một bản vẽ cùng nhau](topic:work-live)), và một danh sách add-on.
- **Kết nối AI của bạn.** Một kết nối từ CadCraft Studio đến cả tám ứng dụng, với mức chỉ đọc, gợi ý hoặc chỉnh sửa cho mỗi ứng dụng và một nhật ký bằng lời về những gì trợ lý đã làm. CadCraft không có AI riêng, và Hỏi trong mọi ứng dụng dùng AI bạn kết nối.

### Đã sửa trong 0.8.1

- **Thuộc tính hiện 150 thay vì 12'-6"** trong các bản vẽ feet và inch. Các trường mà ứng dụng tự đọc giữ lại văn bản của chúng.
- **Tệp DWG có phần lớp bị đọc như sai loại** (GitHub cadcraft#5) giờ mở đúng.
- **Con trỏ chữ thập không còn hiện sau các cửa sổ bật lên.**
- **Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy.** Trước đây chỉ có tiếng Anh. Chưa thử trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- **Máy tính bảng dọc** dành chiều cao lưới thừa cho canvas, và chế độ tờ bắt đầu ở 760 px hoặc ít hơn.
- **STRETCH với cửa sổ giao, và LIMITS,** được báo trên Studio 0.8.0 và đã đúng trong bản web 0.8; bản cài đặt của người báo cũ hơn. Studio 0.8.1 mang bản đúng.

### Chưa có trong phiên bản này

- **0.8 và 0.8.1 chưa được ký mã.** Windows có thể cảnh báo (chọn {{ui:Thông tin thêm}}, rồi {{ui:Vẫn chạy}}); trên Mac, nhấp chuột phải CadCraft Studio và chọn {{ui:Mở}}. Bản cửa hàng đang tạm dừng, và bản iPad và iPhone chưa được dựng lại cho 0.8.1.
- **Bản phác thảo bút và ảnh phác thảo** mới chỉ được thử trên ảnh giả và chuột, chưa dùng bút thật, màn hình cảm ứng hay bản phác thảo tay trên giấy.
- **Vẽ không cần nhìn** đã được thử bằng kiểm tra tự động, chưa dùng trình đọc màn hình hay người thử nghiệm khiếm thị.
- **Chia sẻ chi tiết** chưa được hai người kiểm tra, và thư mục Team Cloud Plan làm thư mục Tài liệu chưa được dựng.
- **Gộp** làm việc với các tệp DWG và DXF của CadCraft; với tệp của các ứng dụng khác thì chưa được dựng.
- **Hoàn tác giữa các cửa sổ:** CadCraft báo mỗi bước đã hoàn thành, nhưng Studio chưa có một Hoàn tác chung cho mọi ứng dụng; mỗi ứng dụng hoàn tác các bước của riêng nó.
- **Đối tượng OLE của DWG** được giữ nhưng không được vẽ tại chỗ.
- **Đọc bảng kiểu nét in (tệp CTB)** từ các chương trình khác đã được xây dựng nhưng chưa được kiểm tra với một tệp từ chương trình khác.
- **Kết nối AI của bạn:** kết nối một cú nhấp trong Studio, connector được lưu trữ cho AI trong trình duyệt, khóa API riêng trong Studio và gói MCP đã công bố không được hứa trong bản phát hành này.

Để xem phiên bản trước, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
