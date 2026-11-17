---
title: Đặt giới hạn bản vẽ
summary: LIMITS đặt một hình chữ nhật cho bản vẽ: lưới lấp đầy nó, ZOOM Tất cả hiển thị nó, và khi giới hạn được bật, các điểm nằm ngoài sẽ bị từ chối. Chúng được lưu trong tệp DWG và DXF.
keywords: giới hạn, giới hạn bản vẽ, drawing limits, LIMITS, LIMMIN, LIMMAX, LIMCHECK, lưới, grid, ngoài giới hạn, kích thước tờ, vùng bản vẽ, zoom tất cả, biên
from: 9e97b30d
---

**Giới hạn bản vẽ** là một hình chữ nhật cho biết bản vẽ được định sẽ lớn cỡ nào: vùng bạn dự định vẽ, chẳng hạn một tờ 420 × 297. Một bản vẽ mới không có giới hạn nào, nên lưới và vùng bản vẽ không có biên, như trước đây.

## Đặt chúng

Gõ {{cmd:LIMITS}} và trả lời:

- `Chỉ định góc dưới bên trái hoặc [Bật (ON)/Tắt (OFF)] <0,0>`: một điểm, hoặc {{key:Enter}} để giữ điểm hiện tại.
- `Chỉ định góc trên bên phải <420,297>`: một điểm, hoặc {{key:Enter}} để giữ điểm hiện tại. Nó phải ở phía trên và bên phải của điểm đầu tiên.

Hoặc gõ `ON` hoặc `OFF` ở câu hỏi đầu tiên để bật hoặc tắt kiểm tra mà không đổi hình chữ nhật. Đặt các góc là một bước hoàn tác, và mỗi lần ON và OFF cũng vậy.

## Chúng làm gì

- **Lưới lấp đầy giới hạn** và dừng ở biên của chúng. Đó là hình ảnh của vùng, nên bật {{ui:Lưới}} để thấy nó.
- **ZOOM Tất cả** ({{cmd:ZOOM}}, rồi {{ui:Tất cả}}) hiển thị cả giới hạn và bản vẽ cùng lúc; {{ui:Phạm vi}} vẫn chỉ hiển thị bản vẽ.
- **Khi giới hạn BẬT**, một điểm bạn gõ hoặc nhấp ra ngoài chúng sẽ bị từ chối với `**Ngoài giới hạn` và lời nhắc vẫn còn. Điều này áp dụng cho các lệnh tạo đối tượng: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, các lệnh kích thước và một vài lệnh khác. Các lệnh chỉ di chuyển, chọn hoặc đo không bị giới hạn, và cũng không phải dán, kéo grip, hay đối tượng do một thường trình LISP tạo ra: giới hạn là hướng dẫn khi vẽ, không phải bức tường. Khi giới hạn TẮT, không có gì bị từ chối.
- Các đối tượng đã nằm ngoài giới hạn sẽ ở nguyên chỗ.

## Trong tệp và LISP

Chúng được lưu trong DWG và DXF dưới dạng `$LIMMIN`, `$LIMMAX` và `$LIMCHECK`. Một tệp từ chương trình khác chỉ có giới hạn mặc định của chương trình đó (0,0 đến 12,9 hoặc 420,297, kiểm tra tắt) sẽ mở ra không có giới hạn, để lưới không bị ép vào một hình chữ nhật nhỏ; một tệp có giới hạn riêng, hoặc có kiểm tra bật, sẽ giữ chúng. Trong LISP, `(getvar "LIMMIN")`, `LIMMAX` và `LIMCHECK` đọc chúng và `setvar` ghi chúng, như một bước hoàn tác.

Giới hạn thuộc về mô hình. Một tờ (bố cục) có kích thước giấy riêng.
