---
title: Kiểm tra điểm hoàn công
summary: Đọc các điểm mà tổ khảo sát đo được và so sánh với các điểm và khối của bản vẽ: trong hay ngoài dung sai, chưa đo, thừa — được đánh dấu trong bản vẽ và ghi thành báo cáo CSV.
keywords: hoàn công, as built, as-built, asbuilt, khảo sát, máy toàn đạc, bố trí, đóng cọc, tệp điểm, csv, txt, pnezd, penzd, xyz, dung sai, độ lệch, kiểm tra, so sánh, exportpoints, điểm bố trí
from: f7c35208
---

{{cmd:ASBUILT}} (bí danh ASB) là nửa còn lại của {{cmd:EXPORTPOINTS}}: bạn xuất các điểm của bản vẽ cho hiện trường, tổ đặt dấu theo chúng và đo những gì đã thi công, rồi ASBUILT so sánh tệp của họ với bản vẽ.

1. Gõ {{cmd:ASBUILT}} và chọn đúng các điểm và khối bạn đã xuất (Enter chọn mọi POINT, như EXPORTPOINTS làm).
2. **Ghép các điểm hoàn công theo** **Số** (tổ đã giữ số điểm của bạn: nhập số đầu tiên bạn đã xuất) hoặc **Gần nhất** (họ tự đánh số các điểm đo: mỗi điểm thiết kế lấy điểm gần nhất).
3. Nhập đơn vị và tọa độ của tệp như bạn đã xuất (Drawing, Metres hoặc Feet; World hoặc UCS), và **dung sai** theo đơn vị bản vẽ.
4. Chọn tệp CSV hoặc TXT của tổ. CadCraft đọc nó theo cách CivilCraft làm: dấu phẩy, tab, dấu chấm phẩy hoặc khoảng trắng, một dòng tiêu đề đặt tên các cột, hoặc PNEZD theo số cột.

Dòng lệnh cho biết có bao nhiêu điểm được ghép, bao nhiêu nằm trong dung sai, ngoài dung sai, chưa đo và thừa, cùng khoảng cách lớn nhất. **Đánh dấu chúng trong bản vẽ?** Có sẽ đặt chúng lên lớp **AS-BUILT** thành một bước hoàn tác: một điểm tại mỗi điểm đo, số và khoảng cách của nó đặt bên cạnh, và một đường đỏ từ điểm thiết kế đến mọi điểm đo nằm ngoài dung sai. Một báo cáo CSV được tải xuống với mọi điểm: tọa độ thiết kế và hoàn công, chênh lệch theo hướng đông, bắc và cao độ, và kết quả.

Xem thêm [Điểm cho các chương trình BIM](topic:points-for-bim).
