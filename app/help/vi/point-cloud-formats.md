---
title: Định dạng đám điểm: tệp nào gắn được và cần xuất gì
summary: Tệp quét laser nào gắn dưới bản vẽ, tệp nào là định dạng riêng của hãng máy quét, và cần xuất gì từ phần mềm của máy quét để quét gắn được ở đây.
keywords: đám điểm, pointcloudattach, pcattach, quét laser, quét, định dạng, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, xuất, không mở được, không đọc được
from: 20a5f4ee
---

## Những gì gắn được ở đây

Gắn các tệp này bằng {{cmd:POINTCLOUDATTACH}}, {{ui:Mở}} hoặc bằng cách thả chúng lên trang (xem chủ đề về vẽ theo các đường hoàn công trên một đám điểm):

| Định dạng | Phần mở rộng | Những gì được đọc |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: điểm, màu, cường độ, phân lớp LiDAR, hệ tọa độ và đơn vị của nó. LAZ đến 1 GB. |
| E57 | `.e57` | Mọi lần quét trong tệp, mỗi lần đặt theo tư thế của nó; màu, hoặc cường độ khi tệp không có màu; mét. Hình ảnh trong tệp bị bỏ (có thông báo). Đến 6 triệu điểm và 512 MB hiện tại: hãy xuất các lần quét lớn hơn dưới dạng LAS hoặc LAZ. |
| PLY | `.ply` | Văn bản và nhị phân (cả hai thứ tự byte): tọa độ x y z của đỉnh, màu và cường độ. Các mặt bị bỏ (có thông báo). |
| PCD | `.pcd` | Văn bản và nhị phân: x y z, màu gộp hoặc tách, cường độ. Tệp PCD nén chưa được đọc: hãy lưu dạng nhị phân hoặc văn bản. |
| PTX | `.ptx` | Một hoặc nhiều lần quét, mỗi lần đặt theo phép biến đổi riêng; các điểm mà máy quét không đo được bị bỏ. Mét. |
| PTS, XYZ | `.pts`, `.xyz` | Văn bản: x y z, kèm cường độ và màu khi có các cột đó. |

## Tệp chỉ phần mềm của máy quét đọc được

Một số tệp quét là định dạng riêng của hãng máy quét, không có mô tả công khai và không có trình đọc mở. CadCraft không đọc được chúng: khi gắn một tệp như vậy, nó in ra tệp đó là gì và cần làm gì trên dòng lệnh. Hãy xuất lần quét từ phần mềm của hãng dưới dạng E57 hoặc LAS (hoặc PTX, PTS), rồi gắn tệp đã xuất.

| Tệp | Phần mở rộng | Xuất từ |
|---|---|---|
| Dự án ReCap | `.rcp` | ReCap: mở dự án và xuất nó. Dự án chỉ trỏ đến các lần quét của nó, nên chỉ sao chép `.rcp` sẽ không có điểm nào. |
| Quét ReCap | `.rcs` | ReCap: mở dự án mà lần quét thuộc về và xuất nó. |
| Quét FARO | `.fls` | FARO SCENE. |
| Quét Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Quét Trimble | `.tzf` | Trimble RealWorks hoặc Trimble Business Center. |
| Quét Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Khi xuất yêu cầu chọn định dạng, LAS hoặc LAZ giữ mọi thứ CadCraft dùng (màu, cường độ, phân lớp, hệ tọa độ và đơn vị của nó) trong tệp nhỏ nhất.
:::

## Vì sao các tệp này không được đọc

Các định dạng đó không được công bố, và cách duy nhất để đọc chúng là thư viện phần mềm riêng của từng hãng, theo điều khoản riêng của hãng. CadCraft chỉ đọc các định dạng mà nó đọc được bằng mã riêng trên máy tính của bạn, nên một lần quét không bao giờ phải gửi đi đâu để được gắn.
