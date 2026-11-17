---
title: Chọn bằng lasso
summary: Nhấn và kéo một đường viền tự do quanh đối tượng để chọn chúng, như cửa sổ, chọn cắt hoặc hàng rào; nhấn Space khi đang kéo để chuyển đổi.
keywords: lasso, lassomode, kéo, nét tự do, chọn, vùng chọn, cửa sổ, chọn cắt, hàng rào, space, đa giác, cảm ứng, bút, hình chữ nhật
from: 9ec6154d
---

## Bạn sẽ học

Cách chọn đối tượng bằng cách vẽ quanh chúng, và cách khôi phục hình chữ nhật khi bạn cần.

## Vẽ lasso

1. Vẽ vài đường thẳng và vòng tròn gần nhau.
2. Khi không có lệnh nào đang chạy, nhấn nút chuột vào một chỗ trống, rồi kéo quanh một số đối tượng, di chuyển **sang phải** trước.
3. Thả chuột.

Chỉ những đối tượng nằm hoàn toàn bên trong đường viền mới được chọn. Đường viền được vẽ liền nét khi bạn kéo: đây là lasso cửa sổ.

## Cửa sổ, chọn cắt và hàng rào

Đối tượng nào được chọn phụ thuộc vào hướng di chuyển đầu tiên khi kéo, và vào {{key:Space}}:

| Bạn kéo | Lasso | Chọn |
|---|---|---|
| Sang phải trước | Cửa sổ (đường viền liền) | Chỉ đối tượng **nằm hoàn toàn bên trong** |
| Sang trái trước | Chọn cắt (nét đứt, màu xanh lá) | Đối tượng nằm bên trong **và** đối tượng mà đường viền chạm vào |
| Nhấn {{key:Space}} khi đang kéo | Cửa sổ, rồi chọn cắt, rồi hàng rào | Hàng rào (đường nét đứt, không khép kín): chỉ đối tượng mà đường đi qua |

1. Nhấn vào chỗ trống và kéo quanh một số đối tượng, di chuyển **sang trái** trước. Mọi đối tượng mà đường viền chạm vào cũng được chọn.
2. Nhấn {{key:Esc}}.
3. Nhấn và kéo lại; khi vẫn giữ nút chuột, nhấn {{key:Space}} một lần. Đường viền chuyển thành chọn cắt; nhấn {{key:Space}} thêm lần nữa để thành hàng rào.

{{key:Shift}} khi thả chuột sẽ bỏ các đối tượng khỏi vùng chọn thay vì thêm vào (với "Nhấp đối tượng: Thêm" trong Cài đặt).

## Trong một lệnh

Lasso hoạt động ở bất cứ đâu CadCraft yêu cầu `Chọn đối tượng`: vẽ lasso, rồi nhấn {{key:Enter}} để kết thúc. {{cmd:STRETCH}} dùng lasso chọn cắt làm cửa sổ, nên bạn có thể kéo giãn một phần hình chữ L của bản vẽ chỉ trong một lần.

{{cmd:TRIM}} và {{cmd:EXTEND}} dùng cách kéo khác: ở đó lệnh cắt (hoặc kéo dài) mọi đoạn mà đường đi qua. Xem [Cắt và kéo dài](topic:trim-and-extend).

## Hình chữ nhật

Một lần nhấn vào chỗ trống, một lần di chuyển và một lần nhấn thứ hai luôn vẽ hình chữ nhật cửa sổ (từ trái sang phải) hoặc chọn cắt (từ phải sang trái).

Để kéo lại vẽ hình chữ nhật, mở {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Kéo để chọn}} rồi chọn {{ui:Hình chữ nhật}}, hoặc gõ {{cmd:LASSOMODE}}, rồi `0`. Gõ {{cmd:LASSOMODE}}, rồi `1` để dùng lasso. Lựa chọn được giữ trong trình duyệt này.

:::touch
Kéo bằng ngón tay hoặc bút theo cách tương tự. Chạm vẫn chỉ chọn một đối tượng.
:::

## Lỗi thường gặp

- **Không chọn được gì.** Lasso là cửa sổ và không có đối tượng nào nằm hoàn toàn bên trong. Bắt đầu kéo sang trái, hoặc nhấn {{key:Space}} khi đang kéo.
- **Thao tác kéo làm di chuyển một grip.** Nhấn vào grip của đối tượng đã chọn sẽ di chuyển grip. Hãy bắt đầu lasso tại một chỗ trống.
- **Space kết thúc lệnh.** {{key:Space}} chỉ chuyển lasso khi nút chuột đang được giữ; nếu không thì nó là Enter.
