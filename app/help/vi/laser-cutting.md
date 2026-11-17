---
title: Gửi bản vẽ đến máy laser
summary: Mở bảng Laser, chọn mỗi lớp làm gì (cắt, vạch, khắc đường, tô, khắc ảnh), xem trước đường đi của đầu laser, lưu G-code chế độ laser GRBL, hoặc gửi từ trình duyệt sau khi căn khung công việc.
keywords: laser, máy cắt laser, máy khắc laser, GRBL, G-code, gcode, khắc, tô, dither, khắc ảnh, khắc vạch, cắt, Web Serial, căn khung công việc, công suất, tốc độ, số lượt, LASER, LASERCUT, CNC
from: 72b56db0
---

Bảng {{ui:Laser}} biến các lớp của bản vẽ thành một chương trình cho máy laser chạy GRBL (hầu hết các bộ điều khiển diode và CO2 cho người chơi và xưởng nhỏ). Gõ `LASER` (hoặc `LASERCUT`) và nhấn {{key:Enter}}, hoặc chọn {{ui:Laser…}} trong menu {{ui:Thêm}} của nhóm {{ui:Khung nhìn}}. Trong các kiểu dải lệnh, nó nằm trong menu {{ui:Tệp}} và cạnh {{ui:In}}. Bảng mở trên bản vẽ và giữ nguyên khi bạn vẽ: bản xem trước theo mọi thay đổi.

:::warning
Thử mọi thiết lập trên phế liệu trước, đeo kính bảo hộ mắt phù hợp với laser của bạn, đóng nắp nếu có, và không bao giờ để laser đang chạy mà không có người trông. Các con số ban đầu của một lớp chỉ là giá trị giữ chỗ, không phải khuyến nghị cho bất kỳ vật liệu nào.
:::

## Những gì được gửi

Bảng đọc mô hình (không đọc các tờ), trên các lớp đang bật và đã mở băng:

- Đường thẳng, cung tròn, vòng tròn, đa tuyến (các đoạn cung vẫn là cung), elip và spline. Một hình kết thúc tại nơi nó bắt đầu được coi là khép kín.
- Các khối được tách ra: một đối tượng ở lớp 0 bên trong khối đi theo lớp của tham chiếu khối.
- Một tô bóng gửi biên của nó, nên một logo được tô bóng trên lớp **Tô hình** sẽ được tô.
- Một ảnh (`IMAGEATTACH`) được khắc trên một lớp đặt là **Khắc ảnh**, khi nó nằm thẳng (không xoay hoặc nghiêng) và tệp của nó đang mở trong CadCraft.
- Văn bản, kích thước, đường dẫn, điểm và đường dựng không được gửi; bảng cho biết có bao nhiêu mục đã bị bỏ qua. Để khắc văn bản, hãy vẽ các chữ cái thành hình hoặc tô bóng chúng.

Kích thước được gửi theo milimét từ đơn vị của bản vẽ (`UNITS`): bản vẽ bằng inch được nhân với 25.4. Bản vẽ chưa đặt đơn vị được gửi với mỗi đơn vị bằng một milimét. Đánh dấu {{ui:Chỉ các đối tượng đã chọn}} để gửi một phần của bản vẽ.

## Chọn mỗi lớp làm gì

Mỗi lớp có đối tượng trên đó là một hàng. {{ui:Làm}} đặt nó thành **Cắt**, **Vạch**, **Khắc đường**, **Tô hình**, **Khắc ảnh** hoặc **Không gửi**, cùng với {{ui:Công suất %}}, {{ui:Tốc độ mm/phút}} và số {{ui:Số lượt}}. Mỗi thay đổi là một bước hoàn tác và được lưu trong bản vẽ: DWG (mọi phiên bản mà CadCraft lưu) và DXF giữ các thiết lập, nên bản vẽ mở lại với chúng lần sau. Các chương trình khác mở tệp như trước; chúng thấy một khối không dùng có tên CADCRAFT_LASER (xóa nó ở đó sẽ gỡ các thiết lập).

- **Tô hình** khắc phần bên trong của các hình khép kín bằng các đường, cách nhau {{ui:Khoảng dòng}}, theo một {{ui:Góc}}, theo cả hai chiều hoặc một chiều, với một đoạn vượt để đầu đạt tốc độ khi laser bật; tô chéo thêm một lượt thứ hai ở 90°. Một hình có lỗ sẽ để hở tại lỗ.
- **Khắc ảnh** biến một ảnh thành các chấm (Floyd–Steinberg, Atkinson, có thứ tự, hoặc đen trắng đơn giản tại một ngưỡng) hoặc, với *Mức xám*, thành công suất thay đổi.
- Thứ tự: ảnh và tô trước, rồi khắc đường, rồi vạch, rồi cắt, để một chi tiết đã cắt rời không bị xê dịch khi đang được khắc. Trong một lớp, các đường đi **từ bên trong ra trước** (một lỗ trước tấm chứa nó), rồi đến điểm gần nhất.

## Xem trước, rồi lưu

Bản xem trước vẽ những gì đầu máy làm: các đường đang khắc bằng màu, các di chuyển nhanh bằng màu xám, và một hộp màu xanh lá bao quanh mọi thứ sẽ được khắc. Bên dưới là kích thước, chiều dài đường khắc và ước tính thời gian (không tính gia tốc; máy thật sẽ lâu hơn). {{ui:Lưu G-code…}} ghi G-code chế độ laser GRBL: `$32=1`, `M4` (hoặc `M3`) với các giá trị S, các di chuyển `G0` và `G1`, và `M5` ở cuối. X0 Y0 là góc dưới bên trái của công việc, trừ khi bạn chọn gốc của bản vẽ: đặt điểm không làm việc của máy tại đó.

## Gửi từ trình duyệt

Trong Chrome và Edge, {{ui:Kết nối…}} yêu cầu bạn chọn cổng USB của laser. Không có gì kết nối hoặc gửi cho đến khi bạn nhấn một nút. Nhấn {{ui:Căn khung công việc}} trước: đầu máy vẽ khung của công việc với laser **tắt** (hoặc ở công suất thấp bạn đặt cho đèn chỉ đường) để bạn thấy nó sẽ khắc ở đâu. Chỉ sau đó {{ui:Gửi công việc}} mới bật, và nó tắt lại nếu bạn thay đổi gì. {{ui:Tạm dừng}} giữ đầu máy, {{ui:Dừng}} cũng giữ nó, đặt lại bộ điều khiển (laser tắt) và gửi `M5`. Khi thiếu Web Serial (Firefox, Safari, và CadCraft Studio, vốn chưa có Web Serial) bảng chỉ cung cấp lưu: lưu G-code và gửi nó bằng chương trình riêng của laser.

## Chưa xây dựng

Chưa xây dựng: các định dạng của bộ điều khiển khác (Ruida, laser Marlin, tệp của nhà cung cấp), thẻ và đoạn mồi, bù kerf, thư viện vật liệu, trục xoay và trục Z, căn chỉnh camera, văn bản dưới dạng đường viền.
