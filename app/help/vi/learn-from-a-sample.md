---
title: Học từ một bản vẽ mẫu
summary: Mở ngôi nhà mẫu hoặc bản vẽ hoàn công mẫu của CadCraft và đi qua các tờ, khung tên, kích thước và lớp của nó.
keywords: mẫu, các mẫu, bản vẽ ví dụ, học, hướng dẫn, đi qua từng bước, khung tên, tờ, hoàn công, bộ bản vẽ kiến trúc, mở một mẫu
from: aa1f960a
---

## Bạn sẽ học được gì

Một bộ bản vẽ hoàn chỉnh được dựng thế nào: không gian mô hình, các tờ có khung nhìn theo tỷ lệ, khung tên có thuộc tính, kích thước theo feet và inch cũng như milimét, và các lớp. Các mẫu là của riêng CadCraft và dùng miễn phí cho mọi mục đích (CC0).

## Mở một mẫu

1. Ở bảng bên trái, dưới {{ui:Bản vẽ}}, nhấp {{ui:Mở một mẫu}} (hoặc gõ {{cmd:SAMPLES}}; trong các kiểu dải lệnh, nó nằm trong menu {{ui:Tệp}}).
2. Nhấp {{ui:Mở}} bên cạnh {{ui:Nhà mẫu}}. Nó mở trong một thẻ riêng, nên công việc của bạn vẫn mở.

## Xem quanh mô hình

1. Nhấp {{ui:Phạm vi}} (hoặc gõ `ZOOM`, rồi `E`): mặt bằng tầng, mặt đứng chính, một mặt cắt và một chi tiết tường.
2. Trong {{ui:Lớp}}, nhấp con mắt bên cạnh `A-ANNO-DIMS` để ẩn các kích thước, và nhấp lần nữa để hiện lại.
3. Nhấp vào một cửa đi: Thuộc tính hiện một tham chiếu khối `DOOR-32`. Cửa đi và cửa sổ là các khối, được đặt có xoay và đối xứng.

## Các tờ

1. Nhấp {{ui:A-101 FLOOR PLAN}} dưới bản vẽ: một tờ ARCH D với một khung nhìn tỷ lệ 1/4" = 1'-0".
2. Nhấp đúp bên trong khung nhìn để làm việc trên mô hình qua nó; nhấp đúp bên ngoài để quay lại.
3. {{ui:A-501 DETAILS}} cho thấy chi tiết tường ở tỷ lệ 1 1/2" = 1'-0": cùng mô hình, tỷ lệ khác.

## Khung tên

1. Trên bất kỳ tờ nào, nhấp đúp khung tên: {{ui:Sửa thuộc tính}} liệt kê PROJECT, TITLE, SCALE, DATE, DRAWN và SHEET.
2. Đổi DRAWN thành chữ cái đầu tên của bạn và nhấp {{ui:OK}}.
3. Để đổi chính khung tên trên mọi tờ, chọn nó rồi chọn {{ui:Khối}} › {{ui:Thêm}} › {{ui:Sửa tại chỗ}}. Xem [Thuộc tính](topic:attributes).

## Bản vẽ hoàn công

Mở {{ui:Hiện trạng mẫu}} theo cách tương tự. Các chấm xám trên `SCAN-SLICE` là một lát của bản quét; các bức tường trên `AB-WALL` được dò theo chúng. Tường phía đông lệch góc vuông 35 mm: các kích thước nói điều đó hai lần, bằng milimét (`AB-DIMS-MM`) và bằng feet và inch (`AB-DIMS-FTIN`, cùng các chiều dài qua một tỷ lệ đo). Các đám mây đỏ trên `REV-1` đánh dấu những gì cuộc khảo sát tìm thấy.

## Tiếp theo

- [Đổi cỡ chữ của kích thước](topic:change-dimension-text-size)
- [In ra PDF](topic:plot-pdf): in {{ui:A-101 FLOOR PLAN}}.
