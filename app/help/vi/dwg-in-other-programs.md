---
title: Mở DWG của CadCraft trong các chương trình khác
summary: DWG do CadCraft lưu đã được mở trong những chương trình nào, những gì được kiểm tra, và cần làm gì khi một chương trình báo lỗi.
keywords: dwg, mở trong chương trình khác, open in other programs, tương thích, compatibility, có mở được không, audit, trueview, chương trình cad khác, dxf, kiểm tra, lưu thành dwg
from: 0f8c15c4
---

## CadCraft ghi gì

{{ui:Lưu}} ghi một DWG thật, theo phiên bản mà bản vẽ đã có hoặc phiên bản bạn chọn trong {{ui:Lưu thành}}: AutoCAD 2000, 2004, 2007, 2010, 2013 hoặc 2018. Không có gì bị chuyển đổi sau lưng bạn: lịch sử liệt kê mọi thứ đã thay đổi trên đường đi (ví dụ một màu thực được ghi thành màu chuẩn gần nhất trong DWG 2000).

## Đã được mở ở đâu

Mọi DWG mà CadCraft ghi đều được mở, ở mọi phiên bản, bởi ba chương trình không phải CadCraft: ODA File Converter (kiểm tra tệp và không sửa gì trong đó), LibreDWG và libdxfrw. Cách đọc của họ được so sánh với của CadCraft: đối tượng, lớp, khối và thuộc tính, kích thước, tô bóng, tờ và khung nhìn của chúng.

Việc mở các tệp DWG của CadCraft trong AutoCAD và trong DWG TrueView miễn phí đang được kiểm tra trên Windows, theo từng loại đối tượng (AUDIT, lớp, tờ, kích thước, tô bóng, thuộc tính, khối động, tham chiếu bị cắt, hình ảnh). Kết quả sẽ được liệt kê ở đây khi có.

## Khi chương trình khác báo lỗi

1. Lưu lại dưới dạng DXF ({{ui:Lưu thành}} › {{ui:DXF 2000}}) và mở tệp đó: hầu hết chương trình đọc được DXF.
2. Lưu DWG theo một phiên bản cũ hơn (2013 hoặc 2010).
3. Báo cho chúng tôi trên Discord biết chương trình và phiên bản nào, và nó đã nói gì; tệp giúp ích nhất.
