---
title: Chuyển phác thảo sang và từ các trình mô hình hóa chi tiết khác
summary: Viết macro dựng lại bản vẽ thành một phác thảo có ràng buộc trong trình mô hình hóa chi tiết, và mở một phác thảo đã xuất từ đó.
keywords: phác thảo, macro, swb, vba, xuất, trình mô hình hóa chi tiết, biến toàn cục, phương trình, quan hệ, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks chưa có sẵn nơi CadCraft được xây dựng, nên cả hai chiều chưa được thử nghiệm trong SolidWorks. Những gì CadCraft ghi ra chỉ được kiểm tra về cấu trúc. Hãy kiểm tra kết quả trước khi dựa vào nó.
:::

## Gửi bản vẽ dưới dạng phác thảo

1. Ràng buộc và ghi kích thước cho bản vẽ (xem [Ràng buộc bản vẽ](topic:constraints)).
2. Trong nhóm {{ui:Tham số}}, mở {{ui:Thêm}} và chọn {{ui:Macro cho SolidWorks (.swb)}}, hoặc gõ {{cmd:SWBOUT}}.

   Một tệp mang tên bản vẽ, đuôi `.swb`, được tải xuống.
3. Trong SolidWorks, chọn **Tools > Macro > Run** và chọn tệp đó.

Macro tạo một chi tiết mới từ mẫu chi tiết mặc định, mở một phác thảo trên Front Plane và vẽ trong đó các đường thẳng, vòng tròn, cung tròn, điểm và đa tuyến của mô hình, với:

- các ràng buộc của bạn thành quan hệ phác thảo,
- các ràng buộc kích thước của bạn thành kích thước cùng tên (`d1@Sketch1`),
- các tham số của bạn thành biến toàn cục,
- mỗi biểu thức thành một phương trình.

Chi tiết dùng đơn vị độ dài của bản vẽ. Chữ, khối, tô bóng, kích thước và tờ không thuộc phác thảo; lịch sử liệt kê những gì bị bỏ sót. Các biểu thức không có dạng phương trình (`if`, `min`, `max`, `round`, `%` và một số khác) được ghi dưới dạng giá trị hiện tại, và lịch sử cho biết điều đó. Bất cứ thứ gì macro không tạo được sẽ được ghi vào tệp nhật ký cạnh macro, và một thông báo tóm tắt hiện ở cuối.

## Mở phác thảo từ một chi tiết

1. Trong SolidWorks, chạy macro xuất của CadCraft trên chi tiết (tải về trong ứng dụng PartCraft: Tệp > Xuất > Xuất macro để đưa chi tiết trở lại). Macro ghi một tệp `.json` theo định dạng `cadcraft-sw-export` cạnh chi tiết.
2. Trong CadCraft, chọn {{ui:Mở}} và chọn tệp `.json` đó.
3. Khi chi tiết có nhiều phác thảo, hãy chọn một.

Phác thảo trở thành bản vẽ, tính theo milimét: các đường thẳng, cung tròn, vòng tròn và điểm; các quan hệ của nó thành ràng buộc; các kích thước thành ràng buộc kích thước giữ nguyên tên (`D1`, `D2` …); các biến toàn cục thành tham số; và các phương trình trên kích thước thành biểu thức của chúng. Lịch sử liệt kê những gì không được chuyển sang, chẳng hạn các quan hệ mà CadCraft không có. Vị trí của phác thảo trong chi tiết không được giữ: nó được vẽ phẳng, như nhìn trên mặt phẳng của nó.
