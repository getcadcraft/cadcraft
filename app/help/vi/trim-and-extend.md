---
title: Cắt và kéo dài
summary: Cắt các đường bị các đường khác cắt ngang và kéo dài chúng cho chạm đến đường khác, từng đoạn một hoặc nhiều đoạn cùng lúc bằng cách kéo một đường đi qua chúng.
keywords: trimextendmode, kéo cửa sổ, cắt, kéo dài, tr, ex, cắt nhanh, kéo, tự do, đường đi, hàng rào, chọn cắt, shift, cạnh cắt, cạnh biên, edgemode, chế độ, chuẩn, xóa, xem trước, tường, dọn dẹp
from: 25fbc5bd
---

## Bạn sẽ học gì

Cách {{cmd:TRIM}} và {{cmd:EXTEND}} hoạt động, và các cách dùng nhanh: kéo qua nhiều đoạn cùng lúc, giữ {{key:Shift}} để chuyển giữa cắt và kéo dài, và xem trước những gì sẽ bị xóa trước khi nhấn.

## Cắt một đoạn

1. Vẽ một đường ngang dài và hai đường ngắn cắt ngang nó.
2. Gõ `TR` rồi nhấn {{key:Enter}}. Lịch sử ghi `Cài đặt hiện tại: Chế độ nhanh, cạnh: Không kéo dài`.
3. Đặt con trỏ lên đường dài nằm giữa hai đường ngắn. Đoạn đó chuyển thành màu xám và nét đứt: đó là phần sẽ bị xóa.
4. Nhấn. Đoạn đó biến mất.
5. Nhấn {{key:Enter}} để kết thúc lệnh.

Ở Chế độ nhanh (mặc định) mọi đối tượng nhìn thấy đều là cạnh cắt, nên bạn không cần chọn cạnh trước. Nhấn vào đoạn bạn muốn bỏ. Một đối tượng không đường nào cắt sẽ bị xóa nguyên, và lịch sử cho biết điều đó.

## Cắt nhiều đoạn trong một lần kéo

1. Vẽ một đường ngang dài và mười đường dọc ngắn cắt ngang nó.
2. Gõ `TR` rồi nhấn {{key:Enter}}.
3. Nhấn nút chuột phía trên đường dài, bên trái đường dọc đầu tiên, rồi kéo ngang qua cả mười đường phía trên đường dài.

Khi bạn kéo, đường đi hiện thành nét đứt, và mọi đoạn nó đã cắt qua chuyển sang màu xám. Thả ra: cả mười đoạn phía trên được cắt trong một bước. Gõ `U` rồi nhấn {{key:Enter}} để khôi phục tất cả cùng lúc.

:::tip
Bạn cũng có thể nhấn hai chỗ trống: đường giữa chúng hoạt động như đường đi đã kéo. Gõ `F` (Hàng rào) để nhấn một chuỗi điểm thay thế, rồi nhấn {{key:Enter}}.
:::

:::touch
Kéo bằng ngón tay theo cách tương tự. Chạm vào một đoạn sẽ cắt nó.
:::

## Kéo dài thay vào đó, với Shift

1. Vẽ một đường dọc, và năm đường ngang ngắn ở bên trái của nó, dừng trước khi chạm đến.
2. Gõ `TR` rồi nhấn {{key:Enter}}.
3. Giữ {{key:Shift}}. Đặt con trỏ lên một đường ngắn: phần nó sẽ dài thêm hiện thành màu xám và nét đứt.
4. Vẫn giữ {{key:Shift}}, kéo xuống qua năm đường ngắn.

Cả năm đường giờ chạy đến đường dọc. {{key:Shift}} hoạt động ngược lại trong {{cmd:EXTEND}} (`EX`): một lần nhấn sẽ kéo dài, còn {{key:Shift}}+nhấn sẽ cắt. Kéo dài làm dài thêm đầu gần nơi bạn nhấn hoặc nơi đường đi cắt ngang.

## Cắt bên trong cửa sổ

1. Gõ `TR` rồi nhấn {{key:Enter}}.
2. Gõ `C` rồi nhấn {{key:Enter}}.
3. Nhấn hai góc quanh các đoạn cần bỏ.

Mọi đoạn nằm ít nhất một phần bên trong cửa sổ sẽ bị cắt.

Để có cửa sổ chỉ bằng cách kéo, không gõ `C`: {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Kéo để cắt và kéo dài}} ›
{{ui:Một cửa sổ}}. Khi đó nhấn lên một chỗ trống rồi kéo sẽ vẽ một hộp, và mọi đoạn nó chạm vào sẽ bị cắt (hoặc kéo dài, trong {{cmd:EXTEND}}, hoặc với {{key:Shift}}). {{ui:Một đường đi}} (mặc định) đưa lại đường đi tự do. Dòng cài đặt ở đầu TRIM cho biết cái nào đang bật.

## Chọn cạnh cắt (Chế độ chuẩn)

Đôi khi chỉ một đường nên đóng vai trò cạnh cắt, chẳng hạn một mặt tường có nhiều đường khác cắt ngang.

1. Gõ `TR` rồi nhấn {{key:Enter}}.
2. Gõ `O` (chế độ) rồi nhấn {{key:Enter}}, sau đó gõ `S` (Chuẩn) rồi nhấn {{key:Enter}}.
3. Tại `Chọn cạnh cắt`, nhấn vào các đường cạnh (hoặc kéo một cửa sổ), rồi nhấn {{key:Enter}}. Nhấn {{key:Enter}} khi chưa chọn gì sẽ biến mọi đối tượng thành cạnh.
4. Nhấn hoặc kéo qua các đoạn cần bỏ.

Chỉ các cạnh đã chọn mới cắt, và một đối tượng không cạnh nào cắt sẽ không bị đụng đến. Chế độ được giữ cho đến khi bạn đóng trang; gõ `O`, rồi `Q` để quay lại Chế độ nhanh. {{cmd:TRIMEXTENDMODE}} đặt nó trước khi bạn bắt đầu, như biến cùng tên ở chỗ khác: `0` Chuẩn, `1` Nhanh. `T` (cạnh cắt) chọn cạnh mới bất kỳ lúc nào; trong {{cmd:EXTEND}} đó là `B` (Cạnh biên).

## Các cạnh sẽ chạm tới

1. Gõ `TR` rồi nhấn {{key:Enter}}.
2. Gõ `E` (Cạnh) rồi nhấn {{key:Enter}}, sau đó `E` (Kéo dài) rồi nhấn {{key:Enter}}.

Bây giờ một đường hoặc cung cắt dừng ngắn được tính như thể nó vẫn kéo tiếp: một đường ngắn cắt ở chỗ nó sẽ giao nếu dài hơn. Gõ `E`, rồi `N` (Không kéo dài) để chuyển lại. Điều này giống như EDGEMODE 1 và 0.

## Xóa mà không thoát

Gõ `R` (Xóa) rồi nhấn {{key:Enter}}, chọn các đối tượng cần xóa, rồi nhấn {{key:Enter}}. TRIM tiếp tục.

## Lỗi thường gặp

- **Cả một đường biến mất.** Ở Chế độ nhanh, một đối tượng không đường nào cắt sẽ bị xóa. Gõ `U` để khôi phục, hoặc chuyển sang Chế độ chuẩn (`O`, `S`).
- **"Không có gì để cắt ở đó: không có cạnh đã chọn nào cắt đối tượng đó."** Chế độ chuẩn chỉ cắt ở các cạnh bạn đã chọn. Gõ `T` để chọn lại.
- **"Không có biên theo hướng đó."** Kéo dài không tìm thấy gì phía trước. Nhấn gần đầu sẽ dài ra hơn, hoặc bật `E` (Cạnh, Kéo dài) cho các biên dừng ngắn.
- **Kéo lại vẽ thành vùng chọn tự do.** Một lần kéo chỉ cắt khi TRIM hoặc EXTEND đang chờ một đối tượng. Khi không có lệnh nào chạy, kéo sẽ chọn (xem [Chọn vùng tự do](topic:lasso-selection)).
- **Chỉ đường thẳng, cung, hình tròn và đa tuyến mới cắt được.** Hãy phân rã khối trước để cắt các đường của nó.
