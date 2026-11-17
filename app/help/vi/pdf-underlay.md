---
title: Lớp nền PDF và nhập PDF
summary: Đặt một trang PDF dưới bản vẽ để vẽ theo và in, hoặc biến các đường và văn bản của trang thành đối tượng bản vẽ.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, lớp nền, vẽ theo, nhập pdf, quét, mặt bằng, làm mờ, cắt, lớp, bắt điểm, mở pdf
from: aa301d0f
---

## Hai cách đưa một trang PDF vào

- **Gắn** ({{cmd:PDFATTACH}}) giữ PDF như một hình ảnh dưới bản vẽ. Bạn vẽ theo, bắt điểm vào các đường của nó, làm mờ, cắt xén, và nó được in cùng tờ. Bản vẽ chỉ giữ tên tệp.
- **Nhập** ({{cmd:PDFIMPORT}}) biến các đường, cung, vùng tô và văn bản của trang thành đối tượng bản vẽ thông thường, nằm trên các lớp đặt theo tên của PDF. Bạn có thể chỉnh sửa chúng, và sau đó không cần PDF nữa.

Mở PDF bằng {{ui:Mở}} sẽ hỏi bạn muốn dùng cách nào.

## Gắn một trang

1. Gõ `PDFATTACH` (hoặc `PDFATT`) rồi chọn PDF. Nếu có nhiều trang, gõ số trang.
2. Nhấp điểm chèn (góc dưới bên trái của trang).
3. Nhấn {{key:Enter}} để dùng kích thước thật của trang, hoặc gõ tỷ lệ: số đơn vị bản vẽ trên mỗi điểm PDF (một điểm là 1/72 in, nên là 0.3528 trong bản vẽ có đơn vị mm).
4. Nhấn {{key:Enter}} để không xoay, hoặc gõ một góc.

Trang là một đối tượng như tham chiếu khối: di chuyển, xoay, co giãn, sao chép, xóa và đặt nó lên một lớp. Tắt lớp của nó và trang biến mất. Phóng to và trang được vẽ lại sắc nét.

## Vẽ theo

Khi {{ui:Bắt điểm}} bật, con trỏ bắt vào các đường của chính PDF: điểm cuối, trung điểm và giao điểm (và {{ui:Gần nhất}} khi bắt điểm đó bật). Văn bản được vẽ như các chữ trên trang thì không được bắt điểm.

## Chỉnh

- `PDFADJUST`: **Fade** (0 đến 80 phần trăm), **Contrast** (0 đến 100), **Monochrome**, và **Onoff** để ẩn mà không xóa.
- `PDFCLIP`: chỉ hiện một hình chữ nhật hoặc đa giác của trang; **Delete** gỡ phần cắt.
- `PDFLAYERS`: một PDF có thể có các lớp riêng. Lệnh liệt kê chúng; gõ một số để bật hoặc tắt lớp đó cho lớp nền này. Các lớp mà tệp đặt ở trạng thái tắt sẽ bắt đầu ở trạng thái tắt.

## In và lưu

PLOT in trang dưới dạng các đường, vùng tô và văn bản (nên vẫn sắc nét và tìm kiếm được). Hình ảnh bên trong PDF được hiện trên màn hình nhưng chưa được in.

Một DWG hoặc DXF 2000 giữ lớp nền như một liên kết: tên tệp, trang, vị trí, tỷ lệ, góc xoay, phần cắt, độ mờ và độ tương phản. PDF không nằm trong bản vẽ. Mở lại bản vẽ, gõ `PDF` và chọn lại tệp; cho đến khi làm vậy, các trang hiện như khung và chỉ nhận kích thước thật khi bạn làm vậy. DXF cũ (R12) không có lớp nền: nó chỉ giữ khung và tên. Cách các chương trình khác đọc phần cắt và tỷ lệ đã lưu vẫn chưa được kiểm tra trong chúng.

## Nhập một trang

1. Gõ `PDFIMPORT` (hoặc `PDFIM`) rồi chọn PDF và trang.
2. Nhấp nơi góc dưới bên trái của trang sẽ đặt.
3. Nhấn {{key:Enter}} để dùng kích thước thật, gõ một tỷ lệ, hoặc chọn **Two points**: trang được vẽ ở kích thước thật, sau đó bạn nhấp hai điểm có khoảng cách bạn biết và gõ khoảng cách thật; mọi thứ được co giãn để khớp.

Đường trở thành đường thẳng và đa tuyến, đường tròn và cung được nhận diện, các hình được tô trở thành hatch đặc, và văn bản trở thành văn bản trên một lớp kết thúc bằng `-TEXT`. Đó là một bước hoàn tác. Hình ảnh trong PDF không được nhập: thay vào đó hãy gắn trang. Một bản quét (trang chỉ là một hình ảnh) không có đường nào để nhập.

PDF được đọc như tệp không đáng tin: không chạy script nào, và trang rất lớn bị cắt bớt và có thông báo.
