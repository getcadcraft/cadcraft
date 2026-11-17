---
title: Chia đôi màn hình
summary: Hiển thị bản vẽ trong hai, ba hoặc bốn khung với thu phóng riêng, đặt một tờ bên cạnh mô hình, và mở nhiều bản vẽ cạnh nhau.
keywords: chia, chia màn hình, khung, vports, viewports, xếp, xếp chồng, cạnh nhau, hai bản vẽ, thẻ, thẻ tài liệu, so sánh, thanh chia, mô hình và tờ, nhiều bản vẽ, bản vẽ đang mở
from: ee2f034b
---

## Bạn sẽ học gì

Cách xem một bản vẽ trong nhiều khung cùng lúc, mỗi khung có thu phóng riêng, và cách mở nhiều bản vẽ rồi xem chúng cạnh nhau.

## Chia một bản vẽ thành các khung

1. Mở một bản vẽ, hoặc vẽ vài đường thẳng và vòng tròn.
2. Mở {{ui:Khung nhìn}} › {{ui:Thêm}} và chọn {{ui:Chia cạnh nhau}} (hoặc gõ {{cmd:VPORTS}}, rồi `2`, rồi {{key:Enter}}).

Vùng bản vẽ chia thành hai khung, cả hai cùng hiển thị một khung nhìn. Khung đang hoạt động có viền xanh và nhận con trỏ chữ thập.

3. Nhấp trong khung kia. Nó trở thành khung hoạt động. (Cú nhấp đầu tiên đó chỉ chuyển khung; nhấp lần nữa để chọn.)
4. Thu phóng bằng bánh xe. Chỉ khung đó thu phóng.
5. Kéo đường giữa các khung để làm một khung rộng hơn. {{key:Home}} khi thanh chia đang được chọn sẽ đưa nó về giữa.

{{cmd:VPORTS}} cũng nhận `3` (hai khung ở một bên và một khung lớn ở bên kia: `L` hoặc `R`), `4`, và `SI` để trở lại một khung. Khi đó khung nhìn của khung hoạt động lấp đầy vùng. Trên một tờ, {{cmd:VPORTS}} thay vào đó thêm một khung nhìn vào tờ (như AutoCAD); gõ {{cmd:SPLIT}} ở đó, hoặc dùng menu {{ui:Khung nhìn}}.

## Vẽ từ khung này sang khung khác

1. Chia cạnh nhau, rồi thu phóng mỗi khung đến một góc khác nhau của bản vẽ.
2. Gõ `L` và nhấn {{key:Enter}}, rồi nhấp điểm đầu tiên trong khung bên trái.
3. Nhấp một lần trong khung bên phải để làm nó hoạt động, rồi nhấp điểm thứ hai ở đó.

Đường thẳng nối hai vị trí. Lệnh tiếp tục khi bạn đổi khung, và dây cao su hiển thị trong mọi khung.

## Mô hình bên cạnh một tờ

1. Chia cạnh nhau.
2. Nhấp khung bên phải, rồi nhấp thẻ của một tờ bên dưới bản vẽ.

Khung bên phải hiển thị tờ; khung bên trái vẫn hiển thị mô hình. Mỗi khung giữ không gian riêng, nên bạn có thể vẽ trên mô hình và xem khung nhìn của tờ cập nhật theo.

## Nhiều bản vẽ trong một cửa sổ

1. Mở một bản vẽ. Rồi mở một bản vẽ khác (hoặc nhấn {{ui:Mới}}).

Mỗi bản vẽ mở trong một thẻ riêng phía trên vùng bản vẽ. Nhấp một thẻ để chuyển sang; dòng lệnh, các bảng và hoàn tác theo bản vẽ bạn chuyển đến. {{key:Mod+C}} trong một bản vẽ và {{key:Mod+V}} trong bản vẽ khác sẽ sao chép đối tượng giữa chúng.

2. Nhấp {{ui:Xếp các bản vẽ đang mở cạnh nhau}} (biểu tượng chia ở cuối các thẻ), hoặc biểu tượng xếp chồng bên cạnh nó.

Mỗi khung giờ hiển thị một trong các bản vẽ đang mở, tối đa bốn. Nhấp một khung để làm việc trên bản vẽ đó.

3. Nhấp {{ui:×}} trên một thẻ để đóng bản vẽ đó. Nếu bản vẽ có thay đổi chưa lưu, CadCraft sẽ hỏi trước.

:::tip
Mở một bản vẽ khi cửa sổ chỉ chứa một bản vẽ mới, chưa chỉnh sửa, thì bản vẽ sẽ dùng thẻ đó thay vì thêm một thẻ.
:::

## Di chuyển khung nhìn và thu phóng cùng lúc

Để so sánh hai phiên bản, xếp chúng cạnh nhau, rồi nhấp {{ui:Liên kết khung nhìn của các khung}} (biểu tượng liên kết ở cuối các thẻ), hoặc chọn nó trong {{ui:Khung nhìn}} › {{ui:Thêm}}, hoặc gõ {{cmd:LINKVIEWS}} và `ON`. Bây giờ một lần di chuyển hoặc thu phóng trong một khung sẽ đưa mọi khung đang hiển thị mô hình (hoặc mọi khung đang hiển thị tờ) đến cùng một vị trí, nên hai bản vẽ vẫn thẳng hàng. {{cmd:LINKVIEWS}} `OFF` cho phép mỗi khung di chuyển riêng.

## Lỗi thường gặp

- **Nhấp không có tác dụng gì.** Nó chỉ làm khung đó hoạt động. Nhấp lần nữa để chọn hoặc vẽ.
- **Bánh xe thu phóng sai khung.** Bánh xe thu phóng khung đang nằm dưới con trỏ và làm khung đó hoạt động.
- **Các khung quay lại còn một.** Khi mở bản vẽ, nó hiển thị đúng như lúc được lưu; bản vẽ được lưu không có khung nào sẽ mở thành một khung.
- **Rời trang có cảnh báo về thay đổi chưa lưu mà không thấy được.** Một thẻ khác đang giữ bản vẽ có thay đổi. Chuyển sang thẻ đó rồi lưu, hoặc rời đi mà không lưu.
