---
title: Vẽ theo các đường hoàn công trên đám điểm
summary: Gắn một bản quét laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS hoặc XYZ) bên dưới bản vẽ, cắt một lát mặt bằng qua nó, rồi vẽ tường, cửa và cột với bắt điểm đối tượng trên các điểm của nó.
keywords: đám điểm, point cloud, pointcloudattach, pcattach, pointcloud, pc, quét laser, bản quét, scan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, hoàn công, as-built, as built, khảo sát, lát cắt, cắt mặt bằng, nút, bắt điểm, vẽ theo, điều kiện hiện trạng
from: b0e0aae5
---

## Bạn sẽ tạo gì

Một mặt bằng hoàn công: các tường của một tòa nhà đã quét được vẽ thành đường thẳng và đa tuyến nằm đúng trên các điểm của bản quét.

## Gắn đám điểm

1. Đặt đơn vị cho bản vẽ trước nếu chưa có (hộp {{ui:Units}} trong {{ui:Properties}}, hoặc {{cmd:UNITS}}): CadCraft chuyển đám điểm từ đơn vị riêng của nó sang đơn vị của bản vẽ.
2. Gõ {{cmd:POINTCLOUDATTACH}} (hoặc `PCATTACH`) rồi nhấn {{key:Enter}}. Chọn một tệp `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` hoặc `.xyz` (chủ đề về định dạng đám điểm cho biết mỗi loại mang theo những gì và cần xuất gì từ phần mềm của máy quét). Bạn cũng có thể mở tệp bằng {{ui:Open}}, thả tệp lên trang, hoặc gửi từ {{ui:Trace in CadCraft}} trong trình xem BIM.
3. `Góc dưới bên trái của đám điểm`: nhấn {{key:Enter}} để giữ tọa độ riêng của tệp (bản quét đã đăng ký theo dự án sẽ khớp với bản vẽ), hoặc nhấp vào nơi đặt góc dưới bên trái của đám điểm.
4. Dòng lệnh cho biết có bao nhiêu điểm được hiển thị. Khung nhìn phóng to đến đám điểm; đám điểm nằm dưới các đường vẽ, mọi điểm đều được nhìn từ phía trên.

## Cắt lát mặt bằng và vẽ theo

1. Gõ {{cmd:POINTCLOUD}} (hoặc `PC`), rồi `S` cho {{ui:Slice}}. Chỉ một dải mỏng cao 1.2 m phía trên điểm thấp nhất của đám điểm được hiển thị: tường, lỗ cửa và cột đọc được như một mặt bằng.
2. `H` đặt chiều cao của mặt cắt, `T` đặt độ dày của nó (theo đơn vị bản vẽ). Nhấn {{key:Enter}} để kết thúc lệnh.
3. Bật bắt điểm đối tượng ({{key:F3}}) với {{ui:Node}} trong các điểm bắt. Vẽ bằng {{cmd:LINE}} hoặc {{cmd:PLINE}}: con trỏ bắt vào các điểm của lát cắt, được ghi nhãn "Đám điểm (point cloud)". Điểm cuối, trung điểm và tâm của bản vẽ được ưu tiên hơn đám điểm, nên khi đóng một đa tuyến, nó sẽ bắt đúng vào điểm đầu tiên.
4. Đổi chiều cao mặt cắt để vẽ một tầng khác, rồi tắt lát cắt (nhấn `S` lần nữa) để xem toàn bộ đám điểm.

## Tùy chọn khác

Trong {{cmd:POINTCLOUD}}: `C` tô màu các điểm theo màu của tệp, theo độ cao, cường độ, lớp LiDAR hoặc một màu; `SI` đặt kích thước điểm; `V` ẩn hoặc hiện đám điểm; `Z` phóng đến đám điểm; `D` tách đám điểm ra.

Thẻ 3D cũng hiển thị đám điểm, với điểm thấp nhất nằm trên mặt đất, cùng lát cắt đó.

:::note
Đám điểm không phải là một phần của bản vẽ: nó không được lưu trong DWG hay DXF, và hoàn tác không thay đổi nó. Hãy gắn lại khi bạn mở bản vẽ sau này. Tệp được đọc trên máy tính này; không có gì được tải lên. Bản quét rất lớn được giảm đều xuống còn 2 triệu điểm. Hiện tại tệp E57 mở được tối đa 6 triệu điểm và 512 MB: hãy xuất các bản quét lớn hơn dưới dạng LAS hoặc LAZ.
:::

## In bản vẽ

{{cmd:PLOT}} in đám điểm cùng với bản vẽ, nằm dưới các đường vẽ: trong bản in mô hình ({{ui:Everything}} bao gồm vùng của đám điểm) và trong mọi khung nhìn của bố cục, trong PDF, PNG, SVG và những gì bạn gửi đến máy in. Nó in những gì đang hiển thị trên màn hình: lát cắt nếu lát cắt đang bật, các màu bạn đã chọn, và sẽ không in nếu bạn đã ẩn. Trên giấy, các điểm trở thành những ô vuông nhỏ, điểm cao nhất trong mỗi ô được giữ lại, và một lần in giữ tối đa khoảng 400.000 điểm (đám điểm rất dày sẽ in với ô vuông lớn hơn). Đám điểm chỉ được in trong bản vẽ mà nó được gắn vào; nó không bao giờ in trực tiếp trong không gian giấy, chỉ in qua khung nhìn.

## Nhiều bản quét

Các bản quét chụp từ những vị trí khác nhau có thể được đăng ký vào một hệ khung chung, tinh chỉnh bằng ICP và xuất thành một tệp LAS hoặc E57: xem [Đăng ký nhiều bản quét thành một](topic:register-scans).
