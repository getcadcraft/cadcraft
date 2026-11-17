---
title: Vẽ văn bản bằng phông chữ SHX của bạn
summary: Cho CadCraft một thư mục phông chữ SHX (hoặc chọn các tệp), và các kiểu văn bản đặt tên chúng sẽ được vẽ bằng các phông đó, trên màn hình và khi in hoặc xuất PDF, với chiều cao, hệ số độ rộng và độ nghiêng của kiểu.
keywords: shx, phông chữ, phông, phông hình dạng, big font, bigfont, unifont, cũ, ba tư, farsi, ả rập, kiểu văn bản, thiếu phông, phông bị thay thế, SHXFONTS, thư mục, đảo chiều, thứ tự hiển thị, simplex, isocp
from: 14b0a4ab
---

Các bản vẽ từ chương trình khác thường đặt tên **phông chữ SHX** trong kiểu văn bản của chúng, và tệp DWG không mang theo các phông đó. Nếu không có phông, CadCraft vẽ văn bản đó bằng kiểu chữ riêng của nó, điều này ổn với văn bản Latin thông thường nhưng không ổn với các phông cũ ánh xạ mã ký tự thông thường sang các hình chữ cái khác, chẳng hạn chú thích tiếng Ba Tư kiểu cũ.

Hãy cho CadCraft các phông, và nó sẽ vẽ văn bản bằng chúng.

## Nạp phông của bạn

Gõ {{cmd:SHXFONTS}} (`SHX`) và chọn:

- {{ui:Thư mục}} (CadCraft Studio): chọn một thư mục. Mọi tệp `.shx` trong đó được đọc ngay bây giờ, và lại mỗi khi CadCraft khởi động.
- {{ui:Tệp}} (trình duyệt): chọn một hoặc nhiều tệp `.shx`. Chúng được giữ trong trình duyệt này và không bao giờ được tải lên.
- {{ui:Liệt kê}}: các phông đã được nạp, và các phông mà bản vẽ đang mở đặt tên nhưng bạn chưa nạp.
- {{ui:Bỏ chọn}} và {{ui:Xóa}}: quên một phông, hoặc tất cả.

CadCraft không thể kèm theo phông của bên thứ ba, nên nó không bao giờ đi kèm bất kỳ phông nào: chúng đến từ bạn. Một bản vẽ chỉ đặt tên các phông của nó, và không giữ bản sao nào của chúng.

## Điều gì xảy ra

Tên phông của một kiểu văn bản được khớp với một phông đã nạp theo tên, không phân biệt chữ hoa thường, bỏ qua thư mục và `.shx` (`SIMPLEX.SHX` khớp với `simplex`). Một văn bản trong kiểu như vậy được vẽ thành các đường, trên màn hình, khi in và trong PDF, tại vị trí, chiều cao, góc xoay, hệ số độ rộng và góc nghiêng của chính văn bản đó. Độ rộng của nó là độ rộng của phông, nên căn lề {{ui:Tâm}} và {{ui:Phải}}, ngắt dòng và chọn đối tượng khớp với những gì bạn thấy. Một kiểu có phông chưa được nạp sẽ giữ kiểu chữ tích hợp, và khi bạn mở một bản vẽ đặt tên các phông bạn chưa nạp, dòng lệnh sẽ cho biết điều đó.

Kiểu Standard cũng được tính: một bản vẽ có kiểu Standard đặt tên một phông riêng sẽ giữ phông đó.

## Phông đã theo thứ tự hiển thị

Nhiều phông SHX tiếng Ba Tư và tiếng Ả Rập cũ giữ sẵn các chữ cái đã được định hình cho màn hình và vẽ từ trái sang phải, nên văn bản gõ theo thứ tự logic sẽ hiện ngược. Gõ {{cmd:SHXFONTS}}, chọn {{ui:Đảo chiều}}, và đặt tên phông: văn bản của nó khi đó được sắp xếp với chữ cuối cùng đứng trước. Chạy lại để hoàn tác. Công tắc này thuộc về phông, được giữ trong trình duyệt này, và không được lưu trong bản vẽ.

## Những gì chưa được hỗ trợ

- Văn bản có mã định dạng nội tuyến (màu sắc, cột trong MTEXT) vẫn dùng kiểu chữ tích hợp.
- Big font (loại hai byte) lấp đầy các mã mà phông chính thiếu, nhưng văn bản theo bảng mã Đông Á mà CadCraft đã chuyển sang Unicode sẽ không được ánh xạ ngược về các mã hai byte của phông.
- Bộ đọc phông tuân theo mô tả đã công bố của định dạng và được kiểm thử trên các phông được làm cho CadCraft. Nếu một phông của bạn vẽ sai, hãy gửi cho chúng tôi phông và bản vẽ.
