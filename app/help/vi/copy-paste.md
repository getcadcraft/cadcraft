---
title: Sao chép, dán và nhân bản
summary: Sao chép đối tượng vào bộ nhớ tạm của CadCraft, dán chúng nơi bạn nhấp hoặc tại chỗ, nhân bản bằng con trỏ, và đưa công việc từ một bản vẽ hoặc thẻ khác sang.
keywords: sao chép, cắt, dán, dán tại chỗ, nhân bản, bộ nhớ tạm, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, giữa các bản vẽ, thẻ khác, điểm gốc
from: 4b9f29d3
---

## Bạn sẽ học gì

Cách sao chép đối tượng vào bộ nhớ tạm, dán chúng nơi bạn nhấp, dán tại tọa độ riêng của chúng, nhân bản bằng con trỏ, cắt chúng, và đưa chúng sang một bản vẽ khác. Mọi thứ ở đây cũng có trong nhóm {{ui:Chỉnh sửa}} của thanh công cụ: {{ui:Sao chép}}, {{ui:Dán}} và menu {{ui:Thêm}}.

## Sao chép và dán nơi bạn nhấp

1. Chọn các đối tượng: nhấp chúng, hoặc kéo một cửa sổ.
2. Nhấn {{key:Mod+C}}, hoặc nhấp {{ui:Sao chép}} trong nhóm {{ui:Chỉnh sửa}}. Dòng lệnh cho biết có bao nhiêu đối tượng đã được sao chép. Chúng vẫn được chọn.
3. Nhấn {{key:Mod+V}}, hoặc nhấp {{ui:Dán}}. Bản sao xuất hiện tại con trỏ, treo từ góc dưới bên trái của các đối tượng đã sao chép.
4. Nhấp nơi góc đó sẽ đến, hoặc gõ một điểm như `2000,500` rồi nhấn {{key:Enter}}. Bắt điểm đối tượng và Ortho hoạt động như bình thường.

Các đối tượng vừa dán được chọn, nên bạn có thể di chuyển hoặc đổi chúng ngay. Một {{key:Mod+Z}} gỡ toàn bộ thao tác dán.

:::tip
Muốn bản sao treo từ một điểm bạn chọn, như góc của một bức tường? Gõ `COPYBASE`, nhấp điểm gốc, chọn các đối tượng, rồi nhấn {{key:Enter}}. Khi dán, điểm đó được đặt tại chỗ bạn nhấp. Để treo mọi bản sao từ tâm thay vì góc dưới bên trái, đổi {{ui:Điểm dán}} trong [Cài đặt CadCraft](topic:settings).
:::

## Dán tại chỗ

Nhấn {{key:Mod+Shift+V}}, hoặc chọn {{ui:Dán tại chỗ}} trong menu {{ui:Thêm}}. Bản sao được đặt chính xác tại tọa độ mà nó được sao chép từ, không cần nhấp. Dùng nó để đưa đối tượng vào một bản vẽ khác ở cùng vị trí, hoặc từ một tờ sang tờ khác.

## Nhân bản và di chuyển

1. Chọn các đối tượng.
2. Nhấn {{key:Mod+D}}, hoặc chọn {{ui:Nhân bản và di chuyển}} trong menu {{ui:Thêm}}.
3. Một bản sao nằm trên bản gốc và di chuyển theo con trỏ. Nhấp nơi nó sẽ đến. Bạn cũng có thể gõ một độ dời như `@0,-600`, hoặc một khoảng cách về phía con trỏ.

{{key:Esc}} trước khi nhấp sẽ không để lại gì. Bản nhân bản là một bước hoàn tác và không ảnh hưởng đến bộ nhớ tạm.

## Cắt

Nhấn {{key:Mod+X}}, hoặc chọn {{ui:Cắt}} trong menu {{ui:Thêm}}. Các đối tượng đi vào bộ nhớ tạm và bị xóa khỏi bản vẽ, trong một bước hoàn tác. Dán lại bằng {{key:Mod+V}} hoặc {{key:Mod+Shift+V}}.

## Giữa các bản vẽ và thẻ

Bộ nhớ tạm giữ bản sao của nó khi bạn mở một bản vẽ khác, và được mọi thẻ CadCraft trong trình duyệt này dùng chung. Sao chép ở một thẻ, rồi nhấn {{key:Mod+V}} ở thẻ khác.

- Các khối mà đối tượng dùng đi kèm theo. Nếu bản vẽ bạn dán vào đã có một khối cùng tên, định nghĩa riêng của nó được dùng, như AutoCAD vẫn làm.
- Các lớp mà đối tượng dùng được thêm vào, với màu và thiết lập mà chúng đã có.
- Bản sao không được co giãn lại khi hai bản vẽ dùng các đơn vị khác nhau: CadCraft thông báo điều đó, và sau đó bạn có thể dùng {{cmd:SCALE}}.
- Khung nhìn ở lại trên tờ của chúng; chúng bị bỏ khỏi bản sao.

:::note
Bộ nhớ tạm là của riêng CadCraft. Bạn không thể dán đối tượng CadCraft vào chương trình khác, hoặc dán từ chương trình khác vào CadCraft: hãy lưu thành DWG hoặc DXF. Một bản sao rất lớn có thể quá lớn để chia sẻ giữa các thẻ; khi đó dòng lệnh chỉ nói rằng chỉ thẻ này mới dán được.
:::

## Lỗi thường gặp

- **{{key:Mod+V}} đã dán văn bản vào dòng lệnh.** Bạn đã gõ gì đó ở đó, nên các phím tác động lên văn bản. Nhấn {{key:Esc}} để xóa, rồi nhấn {{key:Mod+V}} lần nữa.
- **Không có gì xảy ra, và thanh trạng thái bảo bạn hoàn tất lệnh hiện tại.** Một lệnh khác đang chạy. Nhấn {{key:Esc}} trước.
- **Bản dán rơi rất xa.** Nó treo từ góc dưới bên trái của những gì bạn đã sao chép, có thể là một đối tượng ở xa mà bạn chọn nhầm. Dùng {{ui:Dán tại chỗ}}, hoặc sao chép bằng `COPYBASE`.
- **"Không dán gì" kèm lý do.** Những gì thẻ khác để lại trong bộ nhớ tạm không đọc được (bị hỏng, hoặc bị sửa tay). Hãy sao chép lại các đối tượng.

Xem đầy đủ danh sách phím trong [Bàn phím và chuột](topic:keyboard), và mọi dấu nhắc trong [Tham chiếu lệnh](topic:commands#clipboard).
