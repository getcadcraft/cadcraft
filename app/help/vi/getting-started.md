---
title: Bắt đầu với CadCraft
summary: Ứng dụng vẽ CadCraft làm được gì, chạy ở đâu, và bản vẽ đầu tiên của bạn từ màn hình trống đến tệp đã lưu.
keywords: bắt đầu, bản vẽ đầu tiên, mới, mở, lưu, lưu thành, khởi đầu, hướng dẫn, giới thiệu, bắt đầu nhanh
from: 1a56c575
---

CadCraft là ứng dụng vẽ 2D. Bạn vẽ và sửa đường thẳng, cung tròn, đa tuyến, văn bản, kích thước và khối, thiết lập các tờ có khung tên và khung nhìn, rồi in ra PDF. Nó mở bản vẽ DWG và DXF và lưu chúng thành DWG hoặc DXF.

Nó chạy trong trình duyệt web của bạn. Không cần cài đặt gì: trang web cho bạn địa chỉ, và toàn bộ ứng dụng tải vào trang. Bản vẽ của bạn được mở từ máy tính của bạn và lưu trở lại đó. **Không có gì được tải lên.**

Nếu bạn đã từng vẽ kỹ thuật, hãy đọc [Chuyển từ phần mềm vẽ khác](topic:coming-from) sau trang này. Hầu hết thói quen vẫn dùng được, và những thói quen không dùng được được liệt kê ở đó.

## Thích được hướng dẫn?

Gõ `TOUR` (hoặc nhấp {{ui:Xem hướng dẫn}} trên thẻ bắt đầu, hoặc {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Xem lại hướng dẫn}}). Sáu bước ngắn trong một ô phủ lên bản vẽ: vẽ một đường thẳng và một vòng tròn, di chuyển nó, cắt nó, xóa một thứ gì đó và ghi kích thước. Mỗi bước kết thúc khi bạn làm xong, và bạn có thể bỏ qua một bước hoặc cả hướng dẫn. Nó chỉ tự bắt đầu vào lần đầu tiên. [Bảng tra nhanh](topic:cheat-sheet) có 40 lệnh bạn sẽ dùng nhiều nhất, và [bản đồ lệnh](topic:command-map) có mọi lệnh hiện có.

## Bạn cần gì

- Chrome, Edge, Firefox hoặc Safari gần đây trên máy Mac, Windows hoặc Linux. Xem [Trình duyệt và nền tảng](common:browsers).
- Chuột có con lăn là thoải mái nhất. Bàn di chuột cũng dùng được; xem [Chuột, bàn di chuột và cảm ứng](topic:mouse-trackpad-touch).
- Bàn phím. CadCraft được điều khiển bằng các lệnh gõ, như hầu hết chương trình vẽ.

## Ý tưởng trong một đoạn

Bạn gõ một lệnh (hoặc nhấp nút của nó), và dòng lệnh ở dưới hỏi bạn từng câu một: "Specify first point", "Specify next point". Bạn trả lời mỗi câu bằng cách nhấp vào bản vẽ hoặc gõ một giá trị, rồi nhấn {{key:Enter}}. Nhấn {{key:Esc}} để hủy. Đó là toàn bộ cách tương tác; mọi thứ khác chỉ là chi tiết.

## Bản vẽ đầu tiên của bạn

Bạn sẽ vẽ một hình chữ nhật 4000 x 3000 bằng các đường thẳng, đặt một vòng tròn ở giữa, và lưu tệp.

1. Mở CadCraft. Dòng lệnh ở dưới hiện `Command:` và vùng vẽ hiện một thẻ ngắn "Start drawing".
2. Gõ `L` và nhấn {{key:Enter}}. Bạn không cần nhấp vào dòng lệnh trước: gõ ở bất kỳ đâu cũng vào đó.
3. Dòng nhắc đổi thành `Specify first point:`. Gõ `0,0` và nhấn {{key:Enter}}.
4. Gõ `@4000,0` và nhấn {{key:Enter}}. Một đường thẳng xuất hiện, chạy sang phải. Dấu `@` nghĩa là "từ điểm cuối".
5. Gõ `@0,3000` và nhấn {{key:Enter}}.
6. Gõ `@-4000,0` và nhấn {{key:Enter}}.
7. Gõ `C` và nhấn {{key:Enter}}. `C` là tùy chọn Close: đường cuối quay về điểm đầu và lệnh kết thúc.
8. Nhấp {{ui:Phạm vi}} trong nhóm Xem của thanh công cụ. Hình chữ nhật lấp đầy màn hình.

Bây giờ bạn sẽ thấy bốn đường thẳng tạo thành một hình chữ nhật, và phần lịch sử phía trên dòng lệnh liệt kê những gì bạn đã gõ.

9. Gõ `C` và nhấn {{key:Enter}} để bắt đầu lệnh vòng tròn.
10. Gõ `2000,1500` và nhấn {{key:Enter}} cho tâm.
11. Gõ `500` và nhấn {{key:Enter}} cho bán kính.

Một vòng tròn xuất hiện ở giữa hình chữ nhật.

12. Nhấn {{key:Mod+S}}, hoặc nhấp {{ui:Lưu}} trong nhóm Tệp.

Trình duyệt tải `Drawing1.dwg` về thư mục tải xuống thường dùng của bạn, và phần lịch sử cho biết nó đã lưu một bản sao dạng DWG. Tệp đó mở lại được trong CadCraft và trong hầu hết các chương trình CAD khác. (Nếu trước đó, trong trình duyệt này, bạn đã chọn DXF trong {{ui:Lưu thành}}, một bản vẽ mới sẽ lưu thành `Drawing1.dxf`.)

:::tip
Nhấn {{key:Enter}} trên dòng lệnh trống để lặp lại lệnh cuối. Nếu thích, nhấn {{key:Space}} thay cho {{key:Enter}}: ngoài văn bản, nó cũng có tác dụng như vậy.
:::

## Mở một bản vẽ có sẵn

1. Nhấn {{key:Mod+O}}, hoặc nhấp {{ui:Mở}}.
2. Chọn một tệp `.dwg` hoặc `.dxf` trong bộ chọn tệp.

Bạn cũng có thể kéo một tệp DWG hoặc DXF từ {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}} và thả lên vùng vẽ. Tệp được đọc ngay trong trang; nó không bao giờ rời khỏi máy tính của bạn.

Xem [Tệp: cái gì mở được, cái gì lưu được](topic:files) để biết những gì được giữ và những gì được chuyển đổi.

## Lưu: điều cần biết

Lưu trong trình duyệt hoạt động khác với chương trình trên máy tính:

- {{ui:Lưu}} luôn **tải xuống một bản sao mới**. Nó không ghi đè lên tệp bạn đã mở. Nếu trong thư mục tải xuống đã có tệp cùng tên, trình duyệt thường thêm một số, chẳng hạn `Drawing1 (1).dwg`.
- {{ui:Lưu}} dùng định dạng của bản vẽ: DWG nếu bạn mở DWG, DXF nếu bạn mở DXF. Để chọn, nhấn {{key:Mod+Shift+S}} hoặc nhấp {{ui:Lưu thành}}, rồi chọn {{ui:DWG}} (và phiên bản của nó), {{ui:DXF R12}} hoặc {{ui:DXF 2000}}. Xem [Lưu](topic:files#saving).
- Tệp bạn đã mở không bao giờ bị thay đổi.
- Mở một tệp khác, hoặc {{ui:Mới}}, đặt nó trong một thẻ riêng phía trên bản vẽ, nên không có gì đang mở bị đóng. Nếu bạn đóng thẻ của một bản vẽ hoặc rời trang khi còn thay đổi chưa lưu, CadCraft hỏi trước: {{ui:Lưu một bản sao trước}}, bỏ đi hoặc {{ui:Hủy}}. Đóng thẻ trình duyệt sẽ hiện câu hỏi "Leave site?" của chính trình duyệt.

Chưa có tính năng lưu lên đám mây. Tệp của bạn đi đâu và vì sao chúng vẫn riêng tư được giải thích ở [Tệp của bạn và quyền riêng tư](common:your-files).

## Đi tiếp đến đâu

Nhấn {{key:F1}} hoặc nhấp {{ui:Trợ giúp}} trên thanh phía trên để mở phần trợ giúp này bên cạnh bản vẽ bất cứ lúc nào. Nó hoạt động khi không có kết nối.

- [Màn hình CadCraft](topic:workspace) gọi tên mọi thanh và bảng.
- [Vẽ bằng tọa độ](topic:draw-with-coordinates) là bài hướng dẫn đầu tiên tốt nhất.
- [Bàn phím và chuột](topic:keyboard) liệt kê mọi phím.
- Gõ `HELP` ở dòng lệnh để xem danh sách mọi lệnh, hoặc đọc [Tham chiếu lệnh](topic:commands).
