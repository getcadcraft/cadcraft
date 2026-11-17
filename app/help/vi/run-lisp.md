---
title: Chạy các chương trình LISP
summary: LISP của CadCraft chạy những gì (hàm, lời nhắc, lệnh, đối tượng, hộp thoại, đối tượng vla), cách gõ LISP trên dòng lệnh, và những phần chưa có.
keywords: lisp, chương trình, lsp, dcl, hộp thoại, lệnh, defun, entget, ssget, vla, vlax, vl, getpoint, lỗi, tương thích, hoạt động được gì
from: 571bc077
---

## Bạn sẽ học được gì

Những điều cần biết khi nạp một chương trình LISP viết cho chương trình CAD khác: phần nào chạy trong CadCraft và phần nào chưa có.

CadCraft có LISP riêng. Nó được viết dựa trên tài liệu tham khảo AutoLISP công khai, không lấy từ chương trình của ai khác, nên hầu hết chương trình viết cho AutoCAD chạy được mà không cần sửa. Khi thiếu một thứ gì đó, dòng lệnh sẽ nêu tên hàm, để bạn phân biệt được chỗ thiếu của CadCraft với lỗi trong chương trình.

## Gõ LISP trên dòng lệnh

Gõ một biểu thức bắt đầu bằng `(` rồi nhấn {{key:Enter}}: `(+ 1 2)` in ra `3`. `!name` in ra giá trị của một biến. Biểu thức chưa đóng ngoặc sẽ chờ đến dòng tiếp theo.

Tại một lời nhắc, biểu thức sẽ trả lời lời nhắc đó: tại "Nhập bán kính", gõ `(* 2 12.5)` để được 25.

## Những gì chạy được

- **Ngôn ngữ:** `defun` (với biến cục bộ sau `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, và `*error*` (một `*error*` cục bộ cũng hoạt động). Tên không phân biệt chữ hoa và chữ thường; số nguyên và số thực khác nhau, như bạn mong đợi (`(/ 7 2)` là 3).
- **Hàm tích hợp:** toán học, danh sách (`car`, `cdr` và các hàm cùng họ, `assoc`, `nth`, `member`, `subst`, `append`…), chuỗi (`strcat`, `substr`, `strcase`, `wcmatch`…), chuyển đổi (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), hình học (`polar`, `distance`, `angle`, `inters`) và tệp (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Lệnh:** `(defun c:NAME …)` tạo một lệnh. `(command …)` và `(command-s …)` điều khiển các lệnh của CadCraft, với `pause` để chờ câu trả lời của bạn.
- **Lời nhắc:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` với các từ khóa `initget`, `entsel`, `nentsel` và `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, với danh sách bộ lọc và các kiểm tra `-4`).
- **Đối tượng dưới dạng danh sách:** `entget`, `entmod`, `entmake` (cả khối), `entdel`, `entlast`, `entnext` (thuộc tính của một tham chiếu khối nằm ngay sau nó dưới dạng ATTRIB, rồi đến SEQEND, nên các chương trình thuộc tính hoạt động), `handent`, tập chọn, `tblsearch` và `tblnext`, `layoutlist`, `regapp`, `getvar` và `setvar` cho các cài đặt mà CadCraft có.
- **Hộp thoại:** tệp `.dcl` với `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Nút, ô nhập, hộp danh sách, danh sách thả xuống, công tắc, nút radio, hàng, cột và hộp đều hiển thị. Chương trình ghi hộp thoại vào tệp tạm cũng hoạt động.
- **Đối tượng:** `vl-load-com` (không làm gì cả; không có gì cần nạp), các hàm danh sách và chuỗi `vl-`, `vl-catch-all-apply`, và các thuộc tính `vla-get-…` / `vla-put-…`, các phương thức `vla-…` và `vlax-for` trên các tập hợp Blocks, Layers và Layouts, không gian mô hình và định nghĩa khối, với các biến thể và mảng an toàn.

## Chương trình đã kiểm thử

Bộ kiểm thử của CadCraft chạy một tập chương trình được viết cho các kiểm tra này (bộ lọc chọn, lời nhắc, lệnh, đối tượng, trình xử lý lỗi), và một chương trình phổ biến mà người dùng yêu cầu theo tên: DelBlocks của Lee Mac, theo tên qua hộp thoại và bằng cách chọn một khối. CadCraft cũng có {{cmd:DELBLOCKS}} riêng, nên bạn không cần chương trình cho việc đó.

## Chưa có

- `grread` (tự theo dõi chuột), các phản ứng (`vlr-…`), các hàm đường cong (`vlax-curve-…`), từ điển và dữ liệu mở rộng (`dictsearch`, xdata trong `entget` và `entmake`), và các hàm `acet-…` của Express Tools.
- Hình ảnh và slide trong hộp thoại hiển thị thành khung trống.
- Chạy chương trình khác, sổ đăng ký Windows, và các tệp ngoài những tệp bạn nạp: chương trình có thể ghi và đọc các tệp tạm của riêng nó, và các tệp này tồn tại cho đến khi bạn đóng trang.

Khi một chương trình chạm đến những thứ này, dòng lệnh hiển thị "Chưa có định nghĩa hàm" cùng với tên, và cho biết CadCraft chưa hỗ trợ nó.

## Những lỗi cần tránh

- **Lệnh trùng tên với lệnh của CadCraft.** Lệnh của CadCraft vẫn giữ nguyên. Chạy lệnh của chương trình bằng `(c:NAME)` trên dòng lệnh.
- **Chạy LISP mà bạn không tin cậy.** Một chương trình có thể thay đổi bất cứ thứ gì trong bản vẽ, nhưng không thể thay đổi gì bên ngoài: nó không thể truy cập tệp của bạn, các trang web khác hay các ứng dụng khác.
