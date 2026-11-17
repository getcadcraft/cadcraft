---
title: Điểm cho chương trình BIM
summary: Xuất các điểm, và điểm chèn của các khối có mô tả, ra tệp CSV hoặc TXT mà các chương trình BIM và khảo sát nhập được.
keywords: exportpoints, xuất điểm, điểm, csv, txt, pnezd, penzd, xyz, điểm khảo sát, tọa độ, bim, bố trí, tệp điểm, bắc, đông, cao độ
from: d80e2d53
---

## Bạn sẽ tạo

Một tệp điểm: mỗi dòng một điểm, với số hiệu, bắc, đông, cao độ và mô tả, mà các chương trình BIM (trong đó có Revit và Archicad) và phần mềm khảo sát có thể nhập để đặt các điểm khảo sát, mốc công trường hoặc thiết bị.

## Xuất các điểm

1. Chọn các điểm và các tham chiếu khối mà bạn muốn lấy điểm chèn, hoặc không chọn gì để lấy mọi điểm.
2. Gõ {{cmd:EXPORTPOINTS}} (hoặc `EXPPTS`, hoặc {{ui:Khối}} › {{ui:Thêm}} › {{ui:Xuất điểm}}) rồi nhấn {{key:Enter}} (nhấn {{key:Enter}} lần nữa tại `Select points and blocks` khi chưa chọn gì).
3. Khi bạn chọn các khối có thuộc tính, CadCraft liệt kê thẻ của chúng: gõ thẻ có giá trị là mô tả (ví dụ `ITEM`), hoặc gõ bất kỳ thứ gì khác để dùng tên của mỗi khối.
4. Chọn các cột: `PNEZD` (điểm, bắc, đông, cao độ, mô tả: thường dùng nhất), `PENZD` (đông trước bắc) hoặc `XYZ` (chỉ tọa độ).
5. Chọn đơn vị: `D` như đã vẽ, hoặc `M` mét hoặc `F` feet (chỉ khi đơn vị của bản vẽ đã đặt: Thuộc tính › {{ui:Đơn vị}} khi không chọn gì).
6. Khi có UCS đặt, chọn `W` thế giới hoặc `U` tọa độ UCS (xem [UCS và góc nhìn xoay](topic:ucs-and-turned-view)).
7. Chọn `C` cho `.csv` phân tách bằng dấu phẩy, hoặc `T` cho `.txt` phân tách bằng tab, và số hiệu của điểm đầu tiên.

Tệp tải xuống thành `<drawing>-points.csv` (hoặc `.txt`), và lịch sử cho biết tệp có bao nhiêu điểm.

## Trong tệp có gì

- Một điểm mỗi dòng, kết thúc bằng ngắt dòng (CR LF), ba chữ số thập phân.
- Cao độ của điểm là Z của nó (0 khi không có). Điểm của một khối là điểm chèn của nó.
- Một mô tả có dấu phẩy (hoặc tab trong TXT) hoặc dấu nháy được đặt trong dấu nháy kép, với các dấu nháy được nhân đôi.
- Định dạng là định dạng mà CivilCraft đọc và ghi, nên tệp cũng mở được ở đó như các điểm.

## Lỗi thường gặp

- Chỉ `D` được đưa ra cho đơn vị: bản vẽ chưa đặt đơn vị. Hãy đặt chúng, hoặc đổi trong chương trình khác.
- Các điểm ở xa nơi bạn mong đợi trong chương trình khác: xuất tọa độ thế giới (`W`), hoặc UCS mà điểm khảo sát của chương trình kia dùng (`U`).
