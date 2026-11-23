---
title: Đặt ký tự riêng cho tùy chọn lệnh
summary: Trả lời tùy chọn của lệnh bằng các chữ cái bạn chọn, bằng bất kỳ ngôn ngữ nào, từ một tệp văn bản bạn có thể sửa, nhập và xuất.
keywords: ký tự tùy chọn, optionkeys, optkeys, từ khóa tùy chọn, từ khóa, ánh xạ, tùy chỉnh, ký tự riêng, polar, array, P, PO, ngôn ngữ, dịch tùy chọn, dạng ngắn, nhập, xuất, mơ hồ
from: 7c8328c6
---

## Bạn sẽ học được gì

Cách đổi các chữ cái bạn gõ để trả lời tùy chọn của lệnh. Ví dụ, {{cmd:ARRAY}} hỏi `[Rectangular/POlar]` và nhận `PO` cho Cực; bạn có thể làm cho `P` hoặc các chữ cái khác làm điều tương tự, bằng ngôn ngữ của bạn nếu muốn.

## Cách trả lời tùy chọn

Khi một lệnh hiện tùy chọn trong ngoặc vuông, các chữ cái viết hoa là những chữ cần gõ: `POlar` là `PO`, `eXit` là `X`.

Bạn cũng có thể gõ ít chữ hơn. Nếu những gì bạn gõ chỉ khớp một trong các tùy chọn đang hiện, CadCraft nhận nó: với `[Rectangular/POlar]`, chỉ `P` là Cực. Nếu nó khớp hai, dòng lệnh nêu tên chúng và hỏi lại:

```
C could be COUnt, COLumns. Type more letters.
```

Số không bao giờ bị đoán, nên một khoảng cách hoặc số lượng được gõ luôn được đọc là số.

## Thêm ký tự của riêng bạn

Mỗi lệnh giữ các chữ cái có sẵn của nó. Bạn thêm của mình lên trên chúng, nên danh sách của bạn chỉ chứa những gì bạn đã đổi.

1. Mở {{ui:Cài đặt}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Ký tự tùy chọn}} và nhấp {{ui:Sửa…}}. Hoặc gõ {{cmd:OPTIONKEYS}} rồi nhấn {{key:Enter}}.
2. Dưới {{ui:Lệnh}}, chọn lệnh, ví dụ `ARRAY`. Danh sách có mọi lệnh hỏi tùy chọn, và bắt đầu với lệnh bạn dùng gần nhất.
3. Dưới {{ui:Tùy chọn}}, chọn tùy chọn. Mỗi cái hiện các chữ cái có sẵn trong ngoặc, ví dụ `POlar (PO)`.
4. Trong {{ui:Ký tự của bạn}}, gõ chữ cái bạn muốn, ví dụ `P`, rồi nhấp {{ui:Thêm}}.
5. Tùy chọn giờ xuất hiện dưới {{ui:Ký tự của bạn}} với các chữ cái có sẵn và của bạn. Nhấp {{ui:Lưu}}.

Bắt đầu {{cmd:ARRAY}}, chọn một đối tượng và nhấn {{key:Enter}}. Lời nhắc hiện chữ cái của bạn sau tùy chọn, `POlar (P)`, và `P` trả lời nó.

Để gỡ một cái, nhấp dấu x ở cuối hàng của nó rồi {{ui:Lưu}}. Tùy chọn trở về chỉ các chữ cái có sẵn.

## Chữ cái bạn không dùng được

Trình soạn từ chối các chữ cái sẽ che một thứ mà dòng lệnh đã đọc, và nói lý do:

- chữ cái có sẵn của một tùy chọn khác của cùng lệnh (`R` cho Cực trong `ARRAY`, nơi `R` là Rectangular);
- một từ bắt điểm đối tượng dài ba chữ cái trở lên, như `END`, `MID` hay `CEN`, và các từ `ALL` và `LAST`;
- cùng chữ cái cho hai tùy chọn khác nhau của một lệnh.

Khi có bất kỳ dòng nào hiện màu đỏ, {{ui:Lưu}} bị tắt: sửa dòng hoặc gỡ nó, và nó trở lại. Chữ cái có sẵn của một lời nhắc luôn thắng chữ cái của bạn, nên danh sách của bạn không bao giờ có thể chặn một câu trả lời có sẵn. Chữ cái trùng với tên lệnh, như `L` hay `C`, là bình thường: tại một lời nhắc tùy chọn, dòng lệnh đang đọc một câu trả lời, không phải khởi chạy lệnh.

Danh sách tùy chọn của một lệnh lấy từ các lệnh dùng chung lời nhắc với nó, nên đôi khi một lệnh liệt kê một tùy chọn chỉ được hỏi trong một số trường hợp.

## Một lựa chọn cho mọi lệnh

Dưới {{ui:Lệnh}}, chọn {{ui:Mọi lệnh}}. Các tùy chọn khi đó là mọi tùy chọn mà bất kỳ lệnh nào có, như eXit hay Undo. Chữ cái bạn thêm ở đó trả lời tùy chọn đó ở bất kỳ đâu một lệnh đưa ra nó. Chữ cái thêm cho một lệnh cụ thể thắng những cái này.

## Chữ cái bằng ngôn ngữ của bạn

Các chữ cái có thể thuộc bất kỳ bảng chữ cái nào, nên bạn có thể trả lời tùy chọn mà không cần đổi bàn phím: thêm `З` cho Close dưới {{ui:Mọi lệnh}}, hoặc `П` cho POlar trong `ARRAY`.

CadCraft chỉ đi kèm chữ cái tiếng Anh. Danh sách của riêng bạn là cách bạn, văn phòng của bạn hoặc những người cùng ngôn ngữ thiết lập phần còn lại, và {{ui:Xuất}} tạo một tệp bạn có thể chuyển cho người khác.

## Sửa dạng văn bản

{{ui:Sửa dạng văn bản}} trong trình soạn hiện cùng danh sách dưới dạng các dòng văn bản, mỗi dòng một tùy chọn, và cũng là thứ {{ui:Xuất}} lưu:

```
ARRAY.PO,  P
*.X,       Q
```

Mỗi dòng gồm lệnh, một dấu chấm, chữ cái có sẵn của tùy chọn, một dấu phẩy và chữ cái của bạn. Dấu sao thay cho tên lệnh nghĩa là mọi lệnh. Một dòng bắt đầu bằng `;` là ghi chú.

## Những gì giữ nguyên

- Chữ cái có sẵn tiếp tục hoạt động bên cạnh chữ cái của bạn.
- Các chương trình con và nút thanh công cụ tiếp tục dùng chữ cái có sẵn, nên không có gì bạn đã nạp bị hỏng. Để tự gõ chữ cái có sẵn khi chữ cái của bạn cản đường, đặt dấu gạch dưới trước: `_PO`.
- Tên tắt của lệnh là một thứ khác: xem [Sửa bí danh lệnh](topic:command-aliases).

## Các dòng bị từ chối

Khi bạn sửa dưới dạng văn bản hoặc nhập một tệp, trình soạn liệt kê từng lỗi kèm số dòng:

- lệnh không tồn tại (tên tắt của lệnh thì được: `AR.PO` được đọc như `ARRAY.PO`);
- dòng không có dạng `COMMAND.OPTION, LETTERS`;
- chữ cái có khoảng trắng hoặc dấu (chỉ chữ cái và chữ số, tối đa 16);
- cùng chữ cái trả lời hai tùy chọn khác nhau của một lệnh.

## Nhập và xuất

{{ui:Xuất}} lưu chữ cái của bạn thành một tệp văn bản, để giữ hoặc đưa cho người khác. {{ui:Nhập…}} đọc một tệp như vậy. Cả hai nằm trong trình soạn và trong {{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Ký tự tùy chọn}}.

Trong Cài đặt, {{ui:Nhập…}} thay tệp của bạn bằng tệp bạn chọn. Một tệp có dòng xung đột hoặc không dùng được sẽ không được nhận; mở trình soạn và nhập ở đó để xem các dòng. Trong trình soạn, nó chỉ điền vào ô: không có gì đổi cho đến khi bạn nhấp {{ui:Lưu}}.

## Nạp lại hoặc gỡ

Gõ {{cmd:REINIT}} rồi nhấn {{key:Enter}} để áp dụng lại tệp của bạn. Để gỡ một chữ cái, xóa dòng của nó và nhấp {{ui:Lưu}}.

## Ký tự của bạn đi theo tài khoản của bạn

Khi bạn đăng nhập vào getcadcraft.com, các chữ cái của bạn được giữ cùng tài khoản. Mở CadCraft trên trình duyệt khác hoặc máy tính khác với cùng tài khoản thì chúng tự đến; dòng lệnh hiện `Option letters from your account`. Nếu bạn đã đổi chúng ở hai nơi, bản mới nhất thắng và bản bị thay thế được giữ một lần.

{{ui:Cài đặt}} › {{ui:CadCraft}} › {{ui:Ký tự tùy chọn}} cho biết chúng đang ở đâu. Khi đăng xuất hoặc ngoại tuyến, chúng ở lại trong trình duyệt này và sẽ được gửi lên tài khoản lần kế tiếp bạn lưu khi đã đăng nhập.

Liên quan: [Sửa bí danh lệnh](topic:command-aliases) · [Cài đặt CadCraft](topic:settings) · [Lệnh](topic:commands)
