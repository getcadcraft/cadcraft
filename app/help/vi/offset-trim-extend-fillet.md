---
title: Dời song song, cắt, kéo dài, bo góc và vát mép tường
summary: Biến đường thẳng đơn thành tường đôi bằng Dời song song, làm sạch góc bằng Bo góc, và cắt hoặc kéo dài đường bằng Cắt và Kéo dài.
keywords: dời song song, offset, cắt, kéo dài, bo góc, vát mép, vát, ngắt, breakatpoint, kéo dài độ dài, lengthen, tường, góc, song song, bán kính, dọn dẹp
from: c6c5cbd0
---

## Bạn sẽ vẽ gì

Một căn phòng nhỏ với tường dày 200: mặt trong được vẽ, mặt ngoài được dời song song, các góc được làm sạch, và một lối đi được cắt qua một bức tường.

## Vẽ mặt trong

1. Gõ `L` và nhấn {{key:Enter}}.
2. Gõ `0,0` và nhấn {{key:Enter}}.
3. Gõ `@5000,0` và nhấn {{key:Enter}}.
4. Gõ `@0,4000` và nhấn {{key:Enter}}.
5. Gõ `@-5000,0` và nhấn {{key:Enter}}.
6. Gõ `C` và nhấn {{key:Enter}}.
7. Nhấp {{ui:Extents}}.

Bạn có bốn đường thẳng riêng. (Một đa tuyến đóng sẽ dời trong một lần; các đường riêng cho thấy cách Bo góc làm sạch góc.)

## Dời mặt ngoài

1. Gõ `O` và nhấn {{key:Enter}}. Dấu nhắc hiện `Specify offset distance [Through] <Through>:`.
2. Gõ `200` và nhấn {{key:Enter}}.
3. Tại `Select object to offset`, nhấp đường dưới cùng.
4. Tại `Specify point on side to offset`, nhấp bất kỳ chỗ nào phía dưới nó. Một đường song song xuất hiện cách 200 bên dưới.
5. Nhấp đường bên phải, rồi nhấp về phía bên phải của nó.
6. Nhấp đường trên cùng, rồi nhấp phía trên nó.
7. Nhấp đường bên trái, rồi nhấp về phía bên trái của nó.
8. Nhấn {{key:Enter}} để kết thúc lệnh.

Bạn sẽ thấy bốn đường ngoài, mỗi đường dài bằng đường trong tương ứng, nên các góc ngoài chưa gặp nhau.

:::tip
Nhấn {{key:Enter}} tại dấu nhắc khoảng cách để dùng lại khoảng cách trước đó. Gõ `T` để chọn Xuyên qua (T): khi đó mỗi bản sao đi qua điểm bạn nhấp, ở bất kỳ khoảng cách nào.
:::

{{cmd:OFFSET}} làm việc trên đường thẳng, cung, đường tròn và đa tuyến. Dời một đa tuyến đóng sẽ dời toàn bộ đường viền, kể cả các góc.

## Làm sạch góc ngoài bằng Bo góc

{{cmd:FILLET}} nối hai đường thẳng ở một góc: nó cắt hoặc kéo dài cả hai để chúng gặp nhau. Với bán kính 0, góc sẽ vuông.

1. Gõ `F` và nhấn {{key:Enter}}. Dấu nhắc hiện `Select first line [Radius]:`.
2. Nếu lần bo góc gần nhất bạn dùng một bán kính, gõ `R`, nhấn {{key:Enter}}, gõ `0` và nhấn {{key:Enter}}.
3. Nhấp đường dưới cùng ngoài gần đầu phải của nó.
4. Tại `Select second line`, nhấp đường bên phải ngoài gần đầu dưới của nó.

Hai đường giờ gặp nhau tạo một góc nhọn, và lệnh kết thúc.

5. Nhấn {{key:Enter}} để lặp lại {{cmd:FILLET}}, rồi làm góc kế tiếp.
6. Lặp lại cho đến khi cả bốn góc ngoài gặp nhau.

Nhấp mỗi đường ở phần bạn muốn **giữ**. Với bán kính lớn hơn 0, Bo góc sẽ thêm một cung giữa các đường thay vì thế.

:::tip
Gõ `M` (Nhiều) tại dấu nhắc đầu tiên để làm cả bốn góc trong một lần, hoặc vẽ mặt ngoài thành một đa tuyến đóng và gõ `P`: mọi góc được làm cùng lúc. Giữ {{key:Shift}} khi nhấp đường thứ hai để có góc nhọn mà không đổi bán kính.
:::

## Vát một góc bằng Chamfer

{{cmd:CHAMFER}} cắt một góc bằng một đường thẳng.

1. Gõ `CHA` và nhấn {{key:Enter}}.
2. Gõ `D` và nhấn {{key:Enter}}. Gõ `300` và nhấn {{key:Enter}} cho khoảng cách thứ nhất, rồi nhấn {{key:Enter}} để dùng 300 cho khoảng cách thứ hai.
3. Nhấp đường trên cùng trong gần đầu trái của nó, rồi nhấp đường bên trái trong gần đầu trên của nó.

Góc được cắt lùi 300 dọc theo mỗi đường và một đường vát nối chúng. Gõ `A` thay vì `D` để nhập chiều dài trên đường thứ nhất và một góc.

## Cắt một lối đi bằng Cắt

Trước tiên vẽ hai thanh khung cửa ngang qua tường dưới, rồi cắt các đường tường nằm giữa chúng.

1. Gõ `L` và nhấn {{key:Enter}}.
2. Gõ `1000,200` và nhấn {{key:Enter}}.
3. Gõ `@0,-600` và nhấn {{key:Enter}}, rồi nhấn {{key:Enter}} lần nữa.
4. Nhấn {{key:Enter}} để lặp lại {{cmd:LINE}}.
5. Gõ `1900,200` và nhấn {{key:Enter}}.
6. Gõ `@0,-600` và nhấn {{key:Enter}}, rồi nhấn {{key:Enter}} lần nữa.

Bạn có hai đường ngắn cắt ngang tường dưới, cách nhau 900.

7. Gõ `TR` và nhấn {{key:Enter}}. Lịch sử ghi `Current settings: Quick mode, edges: No extend`.
8. Nhấp đường trong dưới cùng giữa hai thanh khung. Đoạn đó biến mất. (Rê con trỏ lên trước: đoạn sẽ bị xóa chuyển sang màu xám và nét đứt.)
9. Nhấp đường ngoài dưới cùng giữa hai thanh khung. Đoạn đó cũng biến mất.
10. Nhấp phần của mỗi thanh khung nhô lên trên tường, và phần bên dưới nó.
11. Nhấn {{key:Enter}} để kết thúc lệnh.

Bạn sẽ thấy một khe hở 900 trên tường dưới, với các thanh khung khép hai đầu tường.

Ở {{ui:Quick mode}} (chế độ Nhanh, mặc định), Cắt không hỏi bạn chọn cạnh cắt trước: mọi đối tượng nhìn thấy đều là cạnh cắt. Chọn đoạn bạn muốn bỏ, hoặc kéo một đường qua nhiều đoạn để cắt tất cả cùng lúc. Gõ `U` và nhấn {{key:Enter}} để đưa lại lần chọn hoặc lần kéo gần nhất mà không thoát lệnh. Hàng rào, chọn cắt, cạnh đã chọn và {{key:Shift}} để kéo dài có trong [Cắt và kéo dài](topic:trim-and-extend).

## Kéo dài một đường đến đường khác

{{cmd:EXTEND}} kéo dài đầu của đường thẳng, cung hoặc đa tuyến cho đến khi nó gặp đối tượng kế tiếp theo hướng đó.

1. Gõ `L` và nhấn {{key:Enter}}.
2. Gõ `1000,2000` và nhấn {{key:Enter}}.
3. Gõ `@2000,0` và nhấn {{key:Enter}}, rồi nhấn {{key:Enter}} lần nữa. Đường dừng cách tường phải 2000.
4. Gõ `EX` và nhấn {{key:Enter}}.
5. Nhấp đường mới gần đầu phải của nó.
6. Nhấn {{key:Enter}} để kết thúc lệnh.

Đường giờ chạy đến mặt trong của tường phải. Mọi đối tượng nhìn thấy đều là ranh giới; hãy chọn gần đầu cần dài ra. Trong {{cmd:TRIM}}, {{key:Shift}}+nhấp làm điều tương tự.

## Ngắt và kéo dài độ dài

{{cmd:BREAK}} (`BR`, hoặc {{ui:Modify}} › {{ui:More}} › {{ui:Break}}) cắt một khoảng hở mà không cần cạnh cắt: nhấp đối tượng nơi khoảng hở bắt đầu (cú nhấp đó là điểm đầu tiên), rồi nhấp nơi nó kết thúc. Với đường tròn, phần ngược chiều kim đồng hồ từ điểm đầu đến điểm thứ hai sẽ bị bỏ. `F` tại câu hỏi thứ hai cho phép bạn nhập lại điểm đầu, và {{cmd:BREAKATPOINT}} chia một đối tượng thành hai tại một điểm mà không có khoảng hở.

{{cmd:LENGTHEN}} (`LEN`) thay đổi chiều dài ở một đầu:

1. Gõ `LEN` và nhấn {{key:Enter}}. Nhấp một đường để xem chiều dài hiện tại; dấu nhắc sẽ hỏi lại.
2. Chọn cách: `DE` (Chênh lệch: lượng cộng thêm, số âm để bớt; `A` cho góc của cung), `P` (Phần trăm: 50 làm nó bằng một nửa), `T` (Tổng: chiều dài nó nên có) hoặc `DY` (Động: kéo đầu).
3. Nhấp mỗi đối tượng gần đầu cần di chuyển. `U` hoàn lại cái cuối; {{key:Enter}} kết thúc.

Đường thẳng, cung và đa tuyến hở (đoạn cuối của nó) có thể được kéo dài.

## Lỗi thường gặp

- **Cả một đường biến mất.** Không có gì cắt qua nó, nên chế độ Nhanh đã xóa nó. Gõ `U` để đưa lại; kiểm tra đường cắt thật sự cắt qua nó (hãy phóng to) và không nằm trên lớp đang tắt.
- **"Không có ranh giới theo hướng đó."** Kéo dài không tìm thấy gì để chạm vào. Chọn gần đầu cần dài ra.
- **"Bán kính quá lớn."** Cung sẽ chạy qua đầu của một trong các đường. Dùng bán kính nhỏ hơn.
- **"Chỉ có đoạn đầu hoặc đoạn cuối của đa tuyến hở mới cắt lùi được."** Chọn hai đoạn cạnh nhau của đa tuyến, hoặc gõ `P` để bo mọi góc của nó.
- **Dời sang sai phía.** Phía là nơi bạn nhấp sau khi chọn đối tượng. Hoàn tác bằng {{key:Mod+Z}} và nhấp về phía bên kia.
- **"Không thể dời xa đến vậy."** Phép dời sẽ làm cung, đường tròn hoặc đa tuyến bị lộn trong ra ngoài. Dùng khoảng cách nhỏ hơn.
