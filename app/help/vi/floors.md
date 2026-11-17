---
title: Xếp tầng trong một bản vẽ
summary: Vẽ tầng một chồng lên tầng trệt tại cùng tọa độ và tắt từng tầng, không dùng Xref.
keywords: tầng, floor, floors, FLOORS, FLR, FLOOR, FLOORLAYERS, storey, level, xếp tầng, lớp thiết kế, không gian mô hình, model space, underlay, xref
from: 7440fc87
---

Tầng cho phép bạn xếp các mặt bằng trong cùng một không gian mô hình. Mỗi tầng có đối tượng riêng, và các lớp vẫn hoạt động xuyên suốt tất cả các tầng. Một tường trên `P-Walls` có thể nằm ở bất kỳ tầng nào.

## Bắt đầu

Gõ `FLOORS` (`FLR`), hoặc chọn {{ui:Tầng…}} trong menu {{ui:Thêm}} của nhóm {{ui:Khung nhìn}}, rồi chọn {{ui:Bắt đầu với các tầng}}. Những gì bạn đã vẽ cho đến nay sẽ nằm trên tầng trệt.

## Vẽ trên một tầng

Chọn tầng bằng nút tròn trong bảng. Đối tượng mới sẽ nằm trên tầng đó.

Các tầng khác đang hiển thị được làm mờ bên dưới. Bạn có thể bắt điểm vào chúng, nên tầng một thẳng hàng với tầng trệt, nhưng bạn không thể thay đổi chúng cho đến khi đặt chúng làm tầng hiện hành. Biểu tượng con mắt tắt một tầng. Tường chỉ nối với tường cùng nằm trên một tầng.

Để bắt đầu một tầng từ tầng ngay bên dưới, chọn những gì bạn muốn, chọn tầng trong bảng rồi nhấn {{ui:Sao chép tới đó}}.

## Đưa tầng lên tờ

Chọn một khung nhìn trên tờ rồi chọn tầng của nó dưới {{ui:Tầng hiển thị}} trong Thuộc tính. Một khung nhìn chưa chọn tầng sẽ hiển thị tất cả các tầng đang bật.

## Gửi tệp cho người khác

Các chương trình CAD khác không biết về tầng, nên chúng hiển thị mọi tầng cùng lúc. Trước khi gửi tệp, chọn {{ui:Biến tầng thành lớp}} trong bảng, hoặc gõ `FLOORLAYERS`. Mỗi đối tượng chuyển sang một lớp được đặt tên theo tầng của nó, chẳng hạn `Tầng trệt-P-Walls`, để người nhận vẫn có thể tắt từng tầng. Hoàn tác sẽ lấy lại như cũ. CadCraft giữ tầng trong tệp DWG hoặc DXF mà nó lưu.
