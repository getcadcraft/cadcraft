---
title: Nhập và hiển thị phương vị và góc theo độ, phút, giây
summary: Nhập một hướng dưới dạng phương vị trắc địa như N45°23'30"E, hoặc theo độ-phút-giây ở bất kỳ nơi nào yêu cầu góc, và chọn cách bản vẽ hiển thị góc bằng AUNITS.
keywords: phương vị, bearing, bearings, trắc địa, phương vị góc phần tư, N45E, độ phút giây, DMS, góc, hướng, lô đất, bố trí, đường chuyền, AUNITS, ANGUNITS, định dạng góc, polar, khoảng cách trực tiếp, DIST
from: af805567
---

Ở bất kỳ nơi nào CadCraft yêu cầu một **góc hoặc hướng**, bạn có thể nhập một **phương vị theo góc phần tư** hoặc một góc theo **độ, phút và giây**, cũng như một số độ thông thường.

## Phương vị

Phương vị gọi tên bắc hoặc nam, một góc tối đa 90°, rồi đông hoặc tây:

| Bạn nhập | Hướng |
|---|---|
| `N45°23'30"E` hoặc `N45d23'30"E` | 45°23'30" từ hướng bắc về hướng đông |
| `S10-30-00W` hoặc `S 10 30 W` | 10°30' từ hướng nam về hướng tây (dấu gạch ngang hoặc khoảng trắng giữa các phần) |
| `N45.5E` | 45.5° từ hướng bắc về hướng đông |
| `N`, `E`, `S`, `W` | chính bắc, đông, nam, tây |

Chữ cái có thể viết hoa hoặc thường. Trong tiếng Tây Ban Nha, `O` cũng có nghĩa là tây (oeste). `d` và `°` có nghĩa giống nhau; `'` là phút và `"` là giây.

Để bố trí một cạnh lô đất dài 20 m theo N45°23'E, bắt đầu {{cmd:LINE}} và gõ điểm đầu, rồi gõ `@20<N45d23'E`. Cách này cũng dùng được tại lời nhắc góc của {{cmd:ROTATE}} và mọi lời nhắc khác yêu cầu góc, và trong ô góc của {{ui:Nhập động}}.

## Độ, phút, giây

`45°23'30"`, `45d23'30"`, `45d30'` hoặc `45d` là một góc tính từ trục X, ngược chiều kim đồng hồ. Cần có `°` hoặc `d`: `45-23-30` được đọc là phép tính (45 − 23 − 30). Phút và giây phải nhỏ hơn 60. Số thường, cùng phép tính (`360/7`), vẫn hoạt động.

## Cách hiển thị góc

Gõ {{cmd:AUNITS}} (hoặc chọn {{ui:Định dạng góc}} trong {{ui:Thuộc tính}} › {{ui:Cài đặt hiện tại}}) và chọn:

- **Độ thập phân** (mặc định): `44.6083°`.
- **Độ-phút-giây**: `44°36'30"`.
- **Phương vị trắc địa**: `N45°23'30"E`.

Độ chính xác theo những gì bạn gõ cho {{cmd:AUNITS}}: 0 hiển thị độ, 2 là phút, 4 là giây, và 5 đến 8 thêm phần thập phân của giây. Định dạng hiển thị trong {{cmd:DIST}}, trên thanh trạng thái, trong nhập động và các gợi ý theo dõi, và trong các ô góc của {{ui:Thuộc tính}} (một ô bạn sửa nhận bất kỳ dạng nào ở trên). Đây là một bước hoàn tác và được lưu trong tệp DWG và DXF (`$AUNITS`, `$AUPREC`); LISP đọc và ghi nó là `AUNITS` và `AUPREC`.
