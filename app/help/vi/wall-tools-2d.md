---
title: Hình dạng tường, cắt, dời và khóa cho tường 2D
summary: Vẽ tường thành hình chữ nhật, đa giác và cung, tách và nối lại, dời theo một kích thước, và khóa một tường vào tường khác hoặc vào một đường lưới. Các công cụ giống như tường của BimCraft.
keywords: tường, thanh tường, nút tường, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, kiểu nối, vát góc, phẳng, vuông góc, ổ khóa, grip, kéo đầu, xoay, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, nối, không cho nối, khóa, đường lưới, tách, khe hở, dời, đường định vị
from: 49044181
---

Các công cụ này làm việc trên tường 2D từ `WALL` (xem "Vẽ tường, cửa đi và cửa sổ thông minh trong 2D"). Chúng dùng cùng quy tắc như các công cụ tường trong BimCraft, nên một bức tường hoạt động giống nhau trong cả hai.

## Các công cụ ở đâu

- Trên thanh công cụ, nhóm {{ui:Tường}} có {{ui:Tường}}, {{ui:Hình chữ nhật}}, {{ui:Tách}} và {{ui:Dời song song}}. Menu {{ui:Thêm}} của nó có mọi công cụ tường khác, mỗi cái với biểu tượng.
- Trong các kiểu menu Dải lệnh, thẻ {{ui:Tường}} có các bảng {{ui:Vẽ tường}}, {{ui:Cắt}}, {{ui:Đặt và chỉnh sửa}}, {{ui:Giữ}} và {{ui:Nối}}.
- Trong một bố cục, các hàng công cụ và hộp công cụ hiện cùng nhóm {{ui:Tường}}.
- Bạn cũng có thể gõ bất kỳ lệnh nào được nêu dưới đây.

## Các mối nối được lưu

Khi đầu một bức tường rơi lên một bức tường khác, CadCraft lưu mối nối đó cùng với cả hai tường. Nó không còn tính lại các mối nối từ chỗ các đầu tình cờ nằm. Vì vậy:

- Các tường nối với một tường bạn dời sẽ đi theo nó và vẫn nối. Đầu của chúng trượt dọc theo đường riêng, nên không có gì quay.
- Kéo một đầu của tường bằng grip của nó thì tường nối tại đó giữ hướng của nó. Đầu của nó trượt dọc theo đường riêng để gặp tường bị kéo, nên đầu bị kéo rơi lên đường đó, không luôn nằm dưới con trỏ. Bản xem trước cho thấy vị trí. Một tường đâm vào tường bị kéo đi theo đường riêng của nó. Kéo đầu thẳng dọc theo tường thì đổi chiều dài của nó, và tường nối tại đó dời cùng.
- `ROTATE` trên một tường đã nối làm việc giống vậy: đầu của các tường lân cận trượt dọc theo đường riêng của chúng đến tường đã xoay.
- Để dời một góc, chọn cả hai tường gặp nhau ở đó và kéo grip ở góc. Cả hai tường giữ trên góc và cả hai đều xoay. Các tường xa hơn giữ nguyên.
- Giữ {{key:Alt}} khi bạn nhấp vị trí mới của grip để cố ý phá các mối nối: tường đến nơi bạn đặt và không có gì đi theo.
- Nếu một lần kéo sẽ xoay một tường đã nối xuyên qua đầu xa của chính nó, nó bị từ chối và không có gì đổi.
- Một tường bạn vẽ với {{ui:Không cho nối}} (`D` trong `WALL`), hoặc tắt trong Thuộc tính ({{ui:Không cho nối ở đầu}}, {{ui:Không cho nối ở cuối}}), giữ đầu đó tự do, ngay cả khi nó chạm một tường khác, cho đến khi bạn cho phép lại.
- `WALLDISJOIN` ({{ui:Không cho nối}} trong nhóm {{ui:Tường}}) làm điều tương tự bằng một cú nhấp: nhấp một tường gần một đầu để không cho nối ở đầu đó, và nhấp lại để cho phép.
- Một bản vẽ cũ chưa có mối nối được lưu. Thay đổi đầu tiên bạn làm sẽ tìm chúng một lần, từ cách các tường đứng trước thay đổi, và lưu chúng. `WALLJOINS` làm việc đó ngay.
- Tệp DWG và DXF mang các mối nối bên trong mỗi tường. CadCraft đọc chúng lại như đã lưu. Một chương trình không giữ dữ liệu mở rộng hiện các tường như khối thường và bỏ các mối nối, và một mối nối mà tường của nó đã bị dời trong chương trình khác sẽ bị bỏ ở lần đổi tiếp theo của một trong hai tường.

## Kiểu nối của một góc

Một góc nơi hai tường gặp đầu cuối được vẽ thành vát góc, trừ khi bạn chọn kiểu khác.

- `WALLJOINSTYLE` ({{ui:Kiểu nối}} trong nhóm {{ui:Tường}}): nhấp góc. Mỗi cú nhấp chuyển sang kiểu kế tiếp: {{ui:Vát góc}}, {{ui:Phẳng}}, {{ui:Vuông góc}}, rồi lại {{ui:Vát góc}}. Gõ `T` để đổi tường nào chạy xuyên qua ở góc bạn nhấp cuối. Nhấn {{key:Enter}} để kết thúc. Một lần chạy lệnh là một bước hoàn tác.
- {{ui:Phẳng}}: một tường chạy xuyên đến mặt xa của tường kia, và tường kia dừng sát mặt bên của nó. {{ui:Vuông góc}}: như vậy, nhưng tường chạy xuyên kết thúc vuông góc với chính nó. Ở góc vuông hai cái trông giống nhau.
- Trong Thuộc tính của một tường: {{ui:Kiểu nối ở đầu}}, {{ui:Kiểu nối ở cuối}}, và {{ui:Chạy xuyên qua ở đầu}}, {{ui:Chạy xuyên qua ở cuối}}.
- Kiểu được lưu cùng cả hai tường và đi trong tệp DWG và DXF. Bản sao của một tường bắt đầu không có nó.
- Một mối nối T không có kiểu để chọn: tường có cạnh bị chạm sẽ chạy xuyên qua. Một góc nơi ba tường trở lên gặp nhau giữ là vát góc. Điều tương tự với góc rất nhọn (dưới khoảng 30 độ) và hai tường trên cùng một đường.

## Vẽ hình dạng tường

Mỗi cái tạo các tường trong một bước hoàn tác, với các góc được nối. Trong `WALL`, `O` đặt độ dời vị trí (tường nằm cách các cú nhấp của bạn bao xa về bên trái) và `D` tắt nối cho các tường bạn vẽ kế tiếp.

- `WALLRECT` (`WR`): hai góc đối diện, như `RECTANG`.
- `WALLROT`: cạnh đầu tiên, rồi cạnh kia ra xa bao nhiêu, cho một hình chữ nhật ở góc bất kỳ.
- `WALLPOLY` (`WP`): số cạnh (3 đến 64), tâm, `I` cho nội tiếp hoặc `C` cho ngoại tiếp, rồi bán kính, như `POLYGON`: nhấp nó, hoặc gõ nó (một bán kính được gõ chạy về phía con trỏ, hoặc dọc theo X khi con trỏ vẫn ở tâm).
- `WALLARC` (`WARC`): tâm, điểm đầu, điểm cuối. `D` làm cung quay theo chiều khác.
- `WALLTAN`: nhấp gần đầu một tường, rồi đến đầu của cung, rời khỏi tường đó.
- `WALLPICK`: nhấp một đường hoặc đa tuyến và nói có lấy luôn các đường nối với nó không.
- `WALLTRACE`: nhấp bên trong một vùng khép kín của đường và tường để đặt tường quanh vùng nhỏ nhất.

Tường mặt bằng là thẳng, nên một cung được vẽ thành các tường thẳng ngắn, mỗi cái 15 độ. Chúng nối như bất kỳ góc nào.

## Cắt tường

- `WALLSPLIT` (`WS`): nhấp tường, rồi nhấp điểm. `C` cắt chỗ một tường khác cắt nó, `G` để một khe hở giữa các phần, `F` làm các đầu cắt tự do thay vì nối. Phần đầu giữ vị trí của tường trong bản vẽ, và cửa đi và cửa sổ đi theo phần của chúng. Một vết cắt xuyên qua cửa đi hoặc cửa sổ bị từ chối.
- `WALLSPLITGAP` ({{ui:Tách có khoảng hở}}): cùng việc tách, nhưng hỏi khe hở trước.
- `WALLDELSEG`: nhấp tường, rồi hai đầu của đoạn cần xóa.
- `WALLREJOIN`: nhấp hai phần của một tường để làm chúng thành một tường lại.

## Dời tường theo khoảng cách

- `WALLDIM` ({{ui:Sửa theo kích thước}}): nhấp một kích thước thẳng hoặc song song chạy từ tường này đến tường kia, rồi gõ giá trị mới. Tường ở đầu xa của nó dời vuông góc với chính nó, tường ở đầu thứ nhất giữ nguyên, và các tường nối với nó đi theo. Điểm xa của kích thước dời cùng tường của nó, nên kích thước hiện đúng giá trị bạn đã gõ.
- `WALLOFFSET` (`WO`): nhấp một tường, rồi phía để dời nó sang (`D` gõ một khoảng cách, `C` tạo một bản sao thay vào đó).
- `WALLSTRETCH`: một cửa sổ quanh các đầu tường, rồi một điểm gốc và một điểm thứ hai.
- Trong Thuộc tính, một {{ui:Chiều dài}} được gõ giữ điểm đầu và đưa tường nối ở đầu xa đi theo, và một {{ui:Độ dày}} mới lớn ra từ {{ui:Đường định vị}} bạn chọn (mặt trái, mặt phải hoặc tâm).

## Kích thước giữa các đường tâm tường

Đường tâm của một tường không được vẽ, nhưng bắt điểm đối tượng tìm được nó. Khi bắt điểm đối tượng đang bật ({{key:F3}}), đưa con trỏ lên giữa độ dày của một tường: điểm đánh dấu đọc `Wall center: endpoint` hoặc `Wall center: midpoint`, và đường tâm hiện như một đường nét đứt trong khi điểm đánh dấu ở trên nó. Với {{ui:Vuông góc}} hoặc {{ui:Gần nhất}} được bật trong danh sách bắt điểm đối tượng, các cái đó cũng hoạt động trên đường tâm.

1. Bắt đầu `DIMLINEAR` (hoặc `DIMALIGNED`).
2. Nhấp tường thứ nhất tại chỗ điểm đánh dấu đọc `Wall center: midpoint` hoặc `Wall center: endpoint`.
3. Nhấp tường thứ hai theo cách tương tự, rồi nhấp chỗ đường kích thước đặt.
4. Để đổi khoảng cách, bắt đầu `WALLDIM`, nhấp kích thước và gõ giá trị mới. Tường thứ hai dời.

Bắt điểm đường tâm hoạt động trong mọi lệnh hỏi một điểm.

## Khóa tường

Một khóa ở lại với tường trong tệp. Nếu bạn dời một tường bị khóa, tường kia đi theo. Nếu một thay đổi làm cả hai tường dời khác nhau, nó bị từ chối và không có gì đổi.

- `WALLHOLD`: khóa một tường vào tường khác. `A` dời nó lên đường của tường kia trước, `K` giữ khoảng cách mà nó đang có.
- `WALLHOLDDIM`: khóa khoảng cách giữa hai tường song song.
- `WALLGRID`: khóa một tường vào một đường lưới (một đường trên lớp lưới với nhãn của nó bằng văn bản ở một đầu), hoặc dọc theo nó, hoặc với một đầu nằm trên đó. Một tường khóa dọc theo đường giữ khoảng cách mà nó đang có từ đường. Dời đường lưới bằng `GRIDMOVE` và tường đi theo nguyên vẹn, cùng các tường nối với nó. Một tường nằm dọc theo đường lưới dời nguyên cùng nó ngay cả khi không có khóa, và một tường chỉ kết thúc trên đường bị kéo giãn bởi đầu đó.
- `WALLHOLDS` liệt kê các khóa. `WALLUNHOLD` gỡ các khóa khỏi một tường.
- Mỗi khóa hiện một ổ khóa nhỏ trên mặt bằng: cạnh giữa của tường bị khóa, hoặc cạnh đầu bị khóa vào đường lưới. Nhấp một ổ khóa để gỡ khóa đó.

## Những gì chưa có

Các khóa dùng đường tâm của tường. Tường ở đây không có lớp, nên không có ưu tiên lớp tại một chỗ nối, và các tường không cong (xem các cung ở trên). Chưa ai thử các công cụ này trên bản vẽ lớn, và chúng chưa được kiểm tra trong chương trình CAD khác.
