---
title: Spline và đa tuyến: SPLINE, SPLINEDIT, PEDIT
summary: Vẽ đường cong trơn qua các điểm hoặc từ một đa giác điều khiển, sửa điểm khớp và điểm điều khiển, và sửa đa tuyến (nối, khép, độ rộng, khớp, spline, bỏ cong) hoặc đổi spline thành đa tuyến.
keywords: spline, splinedit, spl, spe, pedit, pe, điểm khớp, điểm điều khiển, trọng số, nurbs, sửa đa tuyến, nối, đường cong khớp, bỏ cong, chuyển thành đa tuyến, độ chính xác, tiếp tuyến, đường cong, dung sai khớp
from: d31f72d8
---

## Bạn sẽ tạo gì

Một đường cong qua năm điểm, rồi cùng đường cong đó được sửa theo ba cách, và một đa tuyến dựng từ ba đường thẳng.

## Vẽ spline qua các điểm

1. Gõ `SPL` và nhấn {{key:Enter}}.
2. Nhấp hoặc gõ các điểm mà đường cong phải đi qua: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Nhấn {{key:Enter}} sau điểm cuối.
3. {{ui:Tiếp tuyến đầu}}: nhấp vào một điểm mà đường cong nên rời về phía đó, hoặc nhấn {{key:Enter}} để để máy quyết định. Làm tương tự cho tiếp tuyến cuối.

Đường cong đi qua mọi điểm. Gõ `C` thay vì {{key:Enter}} để khép nó (đường cong quay về điểm đầu tiên). {{key:U}} (`Hoàn tác`) lấy lại điểm cuối trong khi bạn đang vẽ.

### Vẽ từ một đa giác điều khiển

Gõ `M` ở dấu nhắc đầu, rồi `C` (Đỉnh điều khiển) và một bậc từ 1 đến 5 (3 là thông thường). Lúc này các điểm bạn chọn là các góc của một đa giác kéo đường cong về phía chúng; đường cong bắt đầu ở điểm đầu và kết thúc ở điểm cuối. Đường cong khép kín sẽ quấn quanh, không có góc tại chỗ nối.

### Đổi đa tuyến thành spline

Ở dấu nhắc đầu, gõ `O` (Đối tượng) và chọn các đa tuyến hoặc đường thẳng. Chúng trở thành spline đi qua các đỉnh của chúng; bản gốc bị xóa.

## Sửa spline

Chọn nó rồi gõ `SPE` (hoặc gõ `SPE` rồi nhấp vào nó). Các tay nắm hiện điểm khớp (hoặc điểm điều khiển của spline không có điểm khớp): kéo một điểm để định hình lại đường cong. Ở dấu nhắc:

- **Dữ liệu khớp** (spline vẽ qua các điểm): `A` thêm một điểm khớp (nhấp nơi cần), `D` xóa một điểm (nhấp gần nó), `M` di chuyển một điểm (nhấp gần nó, rồi nhấp vào vị trí mới), `T` đặt tiếp tuyến cuối, `P` xóa sạch các điểm khớp, từ đó spline được sửa theo điểm điều khiển của nó.
- **Sửa đỉnh**: `A` thêm một điểm điều khiển mà không đổi đường cong, `M` di chuyển một điểm, `W` gán cho một điểm một **trọng số** (lớn hơn 1 kéo đường cong lại gần nó hơn, nhỏ hơn 1 thì để nó lỏng ra).
- **Mở** hoặc **Đóng**, và **Đảo ngược** (đường cong chạy theo chiều ngược lại).
- **chuyển thành Đa tuyến** (`P`): spline trở thành đa tuyến; độ chính xác là số đoạn của mỗi nhịp (10 là thông thường).
- **Hoàn tác** lấy lại thay đổi cuối; **Thoát (X)** kết thúc.

{{ui:Thuộc tính}} hiển thị bậc của spline, số điểm khớp và điểm điều khiển, chiều dài, và cho phép bạn mở hoặc đóng nó.

## Sửa đa tuyến

Chọn một đa tuyến và gõ `PE`. Đường thẳng, cung tròn hoặc spline bạn chọn trước hết sẽ được đề nghị đổi thành đa tuyến (spline sẽ hỏi độ chính xác).

- **Đóng** / **Mở** nối hoặc tách hai đầu.
- **Nối** thêm các đường thẳng, cung tròn và đa tuyến có đầu chạm đầu của đa tuyến. `Khoảng cách dung sai` là khoảng cách tối đa giữa các đầu vẫn được nối (0 nghĩa là phải chạm nhau).
- **Độ rộng** đặt cho toàn bộ đa tuyến một độ rộng (0 sẽ bỏ nó).
- **Khớp** thay đa tuyến bằng một đường cong trơn đi qua các đỉnh của nó; **Spline** thay bằng một B-spline bậc ba đi theo chúng (bắt đầu và kết thúc ở đỉnh đầu và đỉnh cuối, và nằm gần các đỉnh khác). Cả hai đều thành đa tuyến gồm các đoạn ngắn, và các góc gốc được giữ lại, nên **Bỏ cong** sẽ khôi phục chúng.
- **Tạo kiểu đường** cho biết một kiểu đường nét đứt chạy suốt toàn bộ đa tuyến hay bắt đầu lại tại mỗi đỉnh.
- **Đảo ngược** đổi thứ tự các đỉnh. **Nhiều** (`M` ở dấu nhắc đầu) sửa nhiều đa tuyến với cùng các tùy chọn.

Sửa đỉnh của đa tuyến trong {{ui:Thuộc tính}} hoặc bằng tay nắm thì vẫn giữ nguyên như cũ: PEDIT không có trình sửa đỉnh.

## Trong tệp

DWG và DXF 2000 giữ spline như một spline: bậc, điểm điều khiển, nút, trọng số, điểm khớp và tiếp tuyến. Spline bạn mở và không thay đổi sẽ được ghi lại đúng như khi nó đến. DXF R12 không có spline: nó được lưu thành đa tuyến dọc theo đường cong, và lịch sử cho biết có bao nhiêu đoạn.

Dời song song, cắt, kéo dài, bo góc, ngắt và nối không hoạt động trên spline. Dùng {{cmd:EXPLODE}} trên spline, hoặc {{cmd:PEDIT}} nó, để có một đa tuyến mà các lệnh đó nhận.

## Lỗi thường gặp

- **Đường cong vượt quá giữa các điểm gần nhau.** Đường cong đi qua các điểm sẽ uốn ở nơi các điểm uốn. Dùng ít điểm hơn, hoặc một đa giác điều khiển.
- **"That is not a spline."** SPLINEDIT chỉ nhận spline; {{cmd:PEDIT}} sửa đa tuyến.
- **Spline khép kín có khớp có hình dạng hơi khác trong chương trình khác.** CadCraft khép nó bằng một chỗ nối trơn tại điểm đầu; chương trình khác có thể khép nó bằng một đường cong tuần hoàn. Spline khép kín có điểm điều khiển thì giống nhau ở cả hai.
