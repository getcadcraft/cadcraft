---
title: Có gì mới trong 0.8 và 0.8.1
summary: Một bóng mờ hoàn thành bản vẽ của bạn, nét bút phác thảo và ảnh phác thảo chuyển thành hình học, tờ tự bố trí, chi tiết được gợi ý khi bạn vẽ, GRIDMOVE và AUTODIM, thẻ, tệp thân thiện với gộp, đánh dấu chuyển thành bản sửa đổi, vẽ không cần nhìn, giới hạn bản vẽ, góc và hướng, phông SHX, sơ đồ từ văn bản, và các sửa lỗi trong 0.8.1.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, tự động hoàn thành, bóng mờ, tab, sketchfix, photosketch, autosheet, chi tiết, gridmove, autodim, thẻ, redline, gộp, git, fossil, truy cập, vẽ không cần nhìn, trình đọc màn hình, giới hạn, hướng, aunits, shx, sơ đồ, ole, lịch sử, so sánh, bằng lời, thuộc tính, feet và inch, kéo giãn, ngôn ngữ, thiết bị nhập, vấn đề, live, trợ lý
from: 9dd82db5
---

Đây là những thay đổi trong CadCraft 0.8 và 0.8.1, so với 0.7. 0.8 (1 tháng 11 năm 2026) bổ sung các công cụ hỗ trợ vẽ hoạt động từ chính bản vẽ của bạn, theo các quy tắc trên máy tính của bạn và không cần mô hình, còn 0.8.1 (2 tháng 11 năm 2026) sửa các lỗi được báo cáo sau bản 0.8.

## Mới

### Bản vẽ hoàn thành ý bạn

- **Bóng mờ cho biết bước tiếp theo.** Khi không có lệnh nào đang chạy, một bóng mờ xám nét đứt cho biết các mẫu của chính bản vẽ dự đoán bước tiếp theo: thanh đứng kế tiếp với cùng khoảng cách, bậc tiếp theo của cầu thang, bức tường còn thiếu của một phòng. Nhấn {{key:Tab}} để vẽ nó thành một bước hoàn tác, hoặc {{key:Esc}} để bỏ qua. Bóng mờ chỉ xét các đối tượng mới nhất, nên vẫn mượt trên bản vẽ lớn. Tắt nó trong {{ui:Cài đặt}} › {{ui:CadCraft}} hoặc bằng {{cmd:AUTOCOMPLETE}} `Off`.
- **Điểm tiếp theo khi bạn vẽ đường thẳng.** Ở giữa {{cmd:LINE}} hoặc {{cmd:PLINE}}, bóng mờ là điểm tiếp theo: bậc tiếp theo của cầu thang, góc thứ tư của hình chữ nhật, hoặc điểm khép kín nó. Đưa con trỏ lại gần rồi nhấn {{key:Tab}}, như thể bạn đã nhấp chuột ở đó.
- **Nét bút phác thảo thành hình học chính xác.** {{cmd:SKETCHFIX}}: vẽ các nét phác bằng bút, chuột hoặc ngón tay, và mỗi nét thành một đường thẳng, vòng tròn, cung tròn, hình chữ nhật hoặc đa tuyến sạch, bắt vào những gì đã có trên bản vẽ. Xem [Phác thảo bằng bút và nhận hình học chính xác](topic:sketch-with-a-pen).
- **Ảnh một bản phác thảo thành bản vẽ.** {{cmd:PHOTOSKETCH}} (`PSK`) tìm tờ giấy trong ảnh, nắn lại phối cảnh, áp dụng khổ giấy và tỷ lệ bạn nhập, rồi vẽ lại các nét bút lên một lớp cho mỗi màu bút. Chữ viết không được vẽ lại.
- **Kích thước theo quy tắc.** {{cmd:AUTODIM}} (`ADIM`) tạo chuỗi kích thước dọc theo các cạnh bạn chọn, kích thước tổng thể, bề rộng lỗ mở, đường kính lỗ và, với `Grid`, khoảng cách lưới. Nó không bao giờ lặp lại một kích thước đã có.
- **Di chuyển đường lưới và cả hệ theo sau.** {{cmd:GRIDMOVE}} (`GM`): tường kết thúc tại đường lưới sẽ kéo giãn theo nó, tường nằm dọc theo nó, cột, bong bóng và thẻ của nó được di chuyển, còn kích thước đo trên nó sẽ đo khoảng cách mới. Một bước hoàn tác.

### Tờ, chi tiết và thẻ

- **Tờ tự bố trí.** {{cmd:AUTOSHEET}} lấy các khung nhìn đặt tên của bạn (hoặc các phần rời của mô hình), chọn khổ giấy và tỷ lệ tiêu chuẩn, rồi đặt các khung nhìn lên tờ mới có khung tên và chú thích tên cùng tỷ lệ. Mọi thứ vẫn có thể chỉnh sửa. Xem [Tự bố trí tờ cho tôi](topic:lay-out-sheets-for-me).
- **Chi tiết của công ty bạn, được gợi ý khi bạn vẽ.** {{cmd:DETAILS}} (`DET`) giữ các khối chi tiết riêng của bạn. Khi những gì bạn chọn khớp với một khối theo các từ trên lớp, tên khối và ghi chú, thanh trạng thái sẽ cho biết; chọn nó và đặt vào. {{cmd:DETAILS}} › Chia sẻ đưa danh sách của bạn vào thư mục Tài liệu và nhận những gì nhóm bạn đã thêm. Cài đặt tắt các gợi ý.
- **Thẻ trên khối.** {{cmd:TAGS}} định nghĩa một thẻ (loại, các giá trị có thể nhận, các khối được áp dụng), gán nó cho các tham chiếu khối bạn chọn, và liệt kê chúng thành bảng thống kê bạn có thể lưu dưới dạng CSV. Định nghĩa được lưu trong DWG. Xem [Thẻ](topic:tags).
- **Giới hạn bản vẽ.** {{cmd:LIMITS}} đặt một hình chữ nhật cho bản vẽ: lưới lấp đầy nó và thu phóng Tất cả hiển thị nó. Giới hạn hiện dưới dạng đường viền và được lưu trong DWG và DXF, cùng với giới hạn giấy. Xem [Đặt giới hạn bản vẽ](topic:drawing-limits).

### Làm việc với người khác và các chương trình khác

- **Đánh dấu thành bản sửa đổi.** {{cmd:REDLINE}} đọc gói mà MarkupCraft ghi ra và liệt kê mọi thay đổi. Chấp nhận hoặc từ chối từng thay đổi kèm ghi chú; các thay đổi được chấp nhận nhận đám mây sửa đổi và nhật ký sửa đổi trong một bước hoàn tác, và bạn lưu tệp câu trả lời để đóng các đánh dấu trong MarkupCraft. Xem [Chuyển đánh dấu thành bản sửa đổi](topic:redline-to-revision).
- **Bản vẽ mà git và Fossil có thể gộp.** Khi {{ui:Tệp thân thiện với gộp}} được bật trong {{ui:Cài đặt}} › {{ui:CadCraft}}, mỗi đối tượng nhận một khóa không bao giờ thay đổi (tệp lớn hơn khoảng 10 phần trăm). Lệnh `cadcraft merge base ours theirs` khi đó gộp hai bản chỉnh sửa của hai người trên một đối tượng DWG hoặc DXF theo từng đối tượng, và chỉ báo cáo những chỗ hai người cùng thay đổi một thứ. Xem [Gộp hai bản chỉnh sửa của một bản vẽ](topic:merge-drawings).
- **Thay đổi gì, bằng lời.** Trong Lịch sử, So sánh đưa ra danh sách đơn giản: những chỗ nào đã thay đổi, các vùng đó lớn đến đâu, cái gì được thêm, bỏ hoặc thay đổi, và đoạn văn bản nào đã được sửa. Xem [Nói bằng lời điều gì đã thay đổi](topic:changes-in-words).
- **Hướng và góc.** Nhập một hướng theo kiểu phương vị của người đo đạc, chẳng hạn N45°23'30"E, hoặc theo độ, phút và giây, ở bất cứ chỗ nào được yêu cầu một góc; AUNITS đặt cách hiển thị góc. Xem [Nhập và hiển thị hướng và góc](topic:bearings-and-angles).
- **Phông SHX của riêng bạn.** Đưa cho CadCraft một thư mục phông SHX, và các kiểu văn bản có tên của chúng sẽ được vẽ bằng các phông đó, trên màn hình và khi in. Xem [Vẽ văn bản bằng phông SHX của bạn](topic:shx-fonts).
- **Sơ đồ từ văn bản.** {{cmd:DIAGRAM}} đọc một lưu đồ Mermaid, sơ đồ thành phần PlantUML, D2 hoặc danh sách từ-đến, rồi vẽ các khối và đường nối mà bạn có thể chỉnh sửa. Xem [Vẽ sơ đồ từ văn bản](topic:text-to-diagram).
- **Đối tượng OLE trong DWG.** {{cmd:OLELIST}} liệt kê các đối tượng OLE mà một DWG mang theo và CadCraft không tự đặt được, rồi đặt một bản sao của hình ảnh vào vị trí bạn chỉ định. Xem [Hình ảnh](topic:pictures#objects-from-other-programs-ole).
- **Phép tính của bạn đi kèm bản vẽ.** Các tờ tính toán và lý do thiết kế được lưu trong DWG cùng bảng lớp.

### Vẽ không cần nhìn

- Bật {{ui:Vẽ không cần nhìn}} trong {{ui:Cài đặt}} (hoặc gõ {{cmd:ACCESS}} và trả lời `On`). CadCraft đọc to mọi lệnh và kết quả qua trình đọc màn hình của bạn, mô tả bản vẽ và những gì ở gần con trỏ, cho phép bạn di chuyển con trỏ và chọn điểm bằng bàn phím, và phát âm thanh cho mỗi điểm bắt và mỗi grip. Khi trình duyệt của bạn có thể nhận diện giọng nói trên máy tính, bạn có thể đọc lệnh thành tiếng. Xem [Vẽ không cần nhìn](topic:draft-without-sight).

### Trong mọi ứng dụng

- **Ngôn ngữ.** 54 ngôn ngữ; mười ngôn ngữ mới (tiếng Litva, tiếng Latvia, tiếng Bosnia, tiếng Marathi, tiếng Telugu, tiếng Albania, tiếng Afrikaans, tiếng Filipino, tiếng Swahili, tiếng Uzbek). Các ngôn ngữ ngoài tiếng Anh là bản nháp máy cho đến khi có người bản ngữ đọc lại.
- **Thiết bị nhập.** Điều khiển bàn di chuột, bút, chuột 3D, tay cầm trò chơi và MIDI.
- **Số dòng thanh công cụ và lưới thuộc tính.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số dòng thanh công cụ}} đưa ra Xuống dòng, 2 dòng hoặc 1 dòng trong các ứng dụng khác. CadCraft giữ cài đặt riêng trong {{ui:Cài đặt}} › {{ui:CadCraft}} (xem [Số dòng thanh công cụ](topic:settings#toolbar-rows)). Lưới thuộc tính dùng chung có trong ba ứng dụng khác, không có trong CadCraft.
- **Vấn đề, Live và tiện ích bổ sung.** Một bảng Vấn đề dùng chung cảnh báo trong mọi ứng dụng, một khung nhìn Live cho biết ai đang ở đâu trong CadCraft Studio (xem [Cùng làm việc trên một bản vẽ](topic:work-live)), và danh sách tiện ích bổ sung.
- **Kết nối trợ lý AI của bạn.** Một kết nối từ CadCraft Studio đến cả tám ứng dụng, với mức chỉ đọc, gợi ý hoặc chỉnh sửa cho từng ứng dụng, và một nhật ký bằng lời ghi lại những gì trợ lý đã làm. CadCraft không có AI riêng, còn Hỏi trong mọi ứng dụng dùng AI mà bạn kết nối.

## Đã sửa trong 0.8.1

- **Thuộc tính hiển thị 150 thay vì 12'-6"** trong các bản vẽ theo feet và inch. Các trường mà ứng dụng tự đọc lại giữ đúng văn bản của chúng.
- **Các tệp DWG có phần lớp bị đọc sai kiểu** (GitHub cadcraft#5) giờ mở đúng.
- **Con trỏ chữ thập không còn hiện phía sau cửa sổ bật lên.**
- **Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy.** Trước đây chỉ có tiếng Anh. Chưa thử trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- **Máy tính bảng ở chế độ dọc** dành thêm chiều cao lưới cho vùng vẽ, và chế độ tờ bắt đầu ở 760 px hoặc thấp hơn.
- **STRETCH với cửa sổ chọn cắt, và LIMITS,** đã được báo cáo trên Studio 0.8.0 và đã đúng trong bản web 0.8; trình cài đặt của người báo cáo là bản cũ hơn. Studio 0.8.1 đã có các sửa này.

## Chưa có trong phiên bản này

- **0.8 và 0.8.1 chưa được ký mã.** Windows có thể cảnh báo (chọn {{ui:Thêm thông tin}}, rồi {{ui:Vẫn chạy}}); trên Mac, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. Các bản phát hành lên cửa hàng ứng dụng đang tạm dừng, và bản dựng cho iPad và iPhone chưa được dựng lại cho 0.8.1.
- **Nét bút phác thảo và ảnh phác thảo** mới chỉ được thử với ảnh giả lập và chuột, chưa thử với bút thật, màn hình cảm ứng hoặc nét phác tay trên giấy.
- **Vẽ không cần nhìn** mới được kiểm tra bằng các bước kiểm tra tự động, chưa kiểm tra với trình đọc màn hình hoặc người thử nghiệm khiếm thị.
- **Chia sẻ chi tiết** chưa được hai người kiểm tra, và thư mục Tài liệu là thư mục của gói Team Cloud Plan chưa được xây dựng.
- **Gộp** hoạt động với tệp DWG và DXF của CadCraft; tệp của các ứng dụng khác chưa được xây dựng.
- **Hoàn tác giữa các cửa sổ:** CadCraft báo cáo từng bước đã hoàn tất, nhưng Studio chưa có một lệnh Hoàn tác chung cho mọi ứng dụng; mỗi ứng dụng hoàn tác các bước của chính nó.
- **Đối tượng OLE của một DWG** được giữ lại nhưng chưa được vẽ tại chỗ.
- **Đọc bảng kiểu nét in (tệp CTB)** từ các chương trình khác đã được xây dựng nhưng chưa được kiểm tra với một tệp từ chương trình khác.
- **Kết nối trợ lý AI:** kết nối một chạm trong Studio, trình kết nối lưu trữ cho AI trên trình duyệt, khóa API riêng của bạn bên trong Studio và gói MCP đã công bố chưa được hứa trong bản phát hành này.

Về phiên bản trước, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
