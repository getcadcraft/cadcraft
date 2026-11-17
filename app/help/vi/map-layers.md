---
title: Lớp bản đồ dưới bản vẽ
summary: Hiển thị bản đồ đường phố, ảnh trên không hoặc một hình ảnh kèm tệp thế giới dưới không gian mô hình, được đặt theo hệ tọa độ của bản vẽ.
keywords: bản đồ, lớp bản đồ, maplayers, ml, geomap, bản đồ nền, ảnh vệ tinh, ảnh trên không, ô bản đồ, xyz, wms, wmts, dịch vụ bản đồ, tệp thế giới, hệ tọa độ, epsg, state plane, utm, định vị địa lý, mặt bằng tổng thể, vị trí địa lý, dữ liệu địa lý, đã lưu, dwg, dxf
from: f103045f
---

## Bạn sẽ tạo gì

Một mặt bằng tổng thể được vẽ trên ảnh trên không hoặc bản đồ đường phố, mỗi thứ ở đúng vị trí.

## Cho CadCraft biết bản vẽ ở đâu

1. Đặt đơn vị của bản vẽ trong {{ui:Thuộc tính}} › {{ui:Đơn vị}} (ví dụ feet hoặc mét).
2. Gõ {{cmd:MAPLAYERS}} (hoặc `ML`) và nhấn {{key:Enter}}.
3. Dưới {{ui:Bản vẽ ở đâu}}, gõ tên hoặc mã EPSG vào {{ui:Tìm một hệ}} (ví dụ `2277` hoặc `Texas Central`) và chọn trong {{ui:Hệ}}.
4. Nếu bản vẽ được vẽ theo tọa độ riêng của hệ đó, để vị trí đặt ở 0. Nếu không, hãy cho một điểm của bản vẽ ({{ui:X bản vẽ}}, {{ui:Y bản vẽ}}), điểm đó nằm ở đâu trên lưới bản đồ ({{ui:Đông}}, {{ui:Bắc}}), và bản vẽ được xoay so với hướng đông bao nhiêu ({{ui:Xoay (°)}}).
5. Nhấn {{ui:Dùng hệ này}}.

## Thêm một lớp

1. Bật {{ui:Lớp bản đồ từ internet}} ở đầu hộp thoại. Cho đến lúc đó, không có máy chủ nào được yêu cầu gì; khi nó bật, các máy chủ bạn thêm sẽ thấy khu vực trên màn hình và địa chỉ internet của bạn, không bao giờ thấy bản vẽ.
2. Trong {{ui:Thêm một lớp}}, chọn nguồn của nó:
   - **Ô bản đồ (XYZ)**: một địa chỉ ô với `{z}`, `{x}` và `{y}`, một tên và ghi công mà nhà cung cấp yêu cầu.
   - **WMS**, **WMTS** hoặc **ArcGIS**: địa chỉ của dịch vụ, rồi nhấn {{ui:Lấy danh sách lớp}} và chọn một lớp.
   - **Một hình ảnh**: tệp PNG hoặc JPEG cùng tệp thế giới (và tệp `.prj` của nó nếu có).
3. Lớp sẽ hiển thị dưới bản vẽ. Ghi công của nó hiển thị ở góc dưới bên phải bản vẽ.

Mỗi lớp trong danh sách có thể được ẩn, làm trong suốt hơn hoặc ít hơn, di chuyển lên hoặc xuống, hoặc gỡ bỏ.

Mỗi thay đổi về hệ hoặc các lớp là một bước của {{cmd:UNDO}}.

## Được lưu cùng bản vẽ

Hệ tọa độ và danh sách lớp được lưu trong bản vẽ khi bạn lưu dưới dạng DWG hoặc DXF, và được khôi phục khi bạn mở lại, trên bất kỳ máy tính nào. Ảnh từ tệp không được lưu: hãy thêm lại sau khi mở. Công tắc {{ui:Lớp bản đồ từ internet}} không được lưu trong bản vẽ: nó thuộc về trình duyệt này, nên một bản vẽ ai đó gửi cho bạn sẽ không yêu cầu máy chủ nào cho đến khi chính bạn bật nó.

Các chương trình khác thấy gì:

| Lưu thành | Vị trí của bản vẽ | Các lớp bản đồ |
|---|---|---|
| DWG 2010, 2013 hoặc 2018, DXF 2000 | Được ghi theo cách chuẩn mà các chương trình đọc vị trí địa lý của bản vẽ: mã EPSG của hệ, một điểm của bản vẽ và vị trí của nó trên lưới bản đồ, đơn vị và hướng bắc. | Chỉ CadCraft |
| DWG 2000, 2004 hoặc 2007, DXF R12 | Chỉ CadCraft (CadCraft thông báo khi bạn lưu) | Chỉ CadCraft |

- **Đã kiểm tra:** ODA File Converter đọc vị trí mà không có lỗi, và thư viện DXF (ezdxf) đọc chính xác mã EPSG và vị trí đặt.
- **Chưa kiểm tra:** liệu các chương trình vẽ khác có nhận ra hệ từ mã EPSG của nó hay không. Một chương trình giữ danh sách hệ riêng với tên khác có thể hiển thị bản vẽ mà không có vị trí.
- Các chương trình khác hiển thị một khối tên `CADCRAFT_GEO` trong danh sách khối. Đó là bản sao riêng của CadCraft về hệ và các lớp; nó không bao giờ được đặt vào bản vẽ. Hãy để nó ở đó.

## Bản vẽ từ chương trình khác

Khi một bản vẽ từ chương trình khác có vị trí địa lý, CadCraft sẽ đọc nó:

- Nếu nó nêu một mã EPSG, {{ui:Bản vẽ ở đâu}} hiển thị hệ đó và các lớp bản đồ được đặt theo hệ đó.
- Nếu CadCraft không biết hệ (tên riêng của chương trình khác, một lưới địa phương, hoặc một hệ số tỷ lệ), vị trí không được dùng, nhưng vẫn được giữ và lưu lại như cũ, để chương trình khác vẫn tìm thấy. Chọn một hệ trong {{ui:Bản vẽ ở đâu}} để thay thế.

:::note
Các lớp bản đồ chỉ được vẽ trên màn hình: chúng không được in. Chỉ dùng các dịch vụ bản đồ có điều khoản cho phép điều đó, và giữ ghi công của họ luôn hiển thị.
:::
