---
title: Hình dạng, cắt, dời và khóa tường 2D
summary: Vẽ tường thành hình chữ nhật, đa giác và cung tròn, tách và nối lại chúng, dời theo kích thước, và khóa một tường vào tường khác hoặc vào một đường lưới. Các công cụ giống với tường của BimCraft.
keywords: tường, thanh công cụ tường, nút tường, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, kiểu nối, vát góc, phẳng, vuông góc, ổ khóa, grip, kéo đầu, xoay, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, nối, không cho nối, khóa, đường lưới, tách, khoảng hở, dời song song, đường vị trí
from: f41e7433
---

Các công cụ này hoạt động trên tường 2D từ `WALL` (xem "Vẽ tường, cửa đi và cửa sổ thông minh trong 2D"). Chúng dùng cùng quy tắc với các công cụ tường trong BimCraft, nên một tường hoạt động giống nhau ở cả hai.

## Các công cụ ở đâu

- Trên thanh công cụ, nhóm {{ui:Tường}} có {{ui:Tường}}, {{ui:Hình chữ nhật}}, {{ui:Tách}} và {{ui:Dời song song}}. Menu {{ui:Thêm}} của nó có mọi công cụ tường khác, mỗi công cụ kèm biểu tượng.
- Trong các kiểu dải lệnh (ribbon menu), thẻ {{ui:Tường}} có các bảng {{ui:Vẽ tường}}, {{ui:Cắt}}, {{ui:Đặt và chỉnh sửa}}, {{ui:Giữ}} và {{ui:Nối}}.
- Trong một bố cục, các hàng công cụ và hộp công cụ hiển thị cùng nhóm {{ui:Tường}}.
- Bạn cũng có thể gõ bất kỳ lệnh nào được nêu dưới đây.

## Các mối nối được lưu

Khi đầu của một tường chạm vào tường khác, CadCraft lưu mối nối đó cùng với cả hai tường. Nó không còn tính lại các mối nối từ vị trí các đầu tường tình cờ nằm. Vì vậy:

- Các tường nối với một tường bạn di chuyển sẽ đi theo và vẫn nối. Các đầu của chúng trượt dọc theo đường riêng, nên không có gì bị xoay.
- Kéo một đầu tường bằng grip của nó, tường nối tại đó cũng giữ hướng của nó. Đầu của nó trượt dọc theo đường riêng để gặp tường đang kéo, nên đầu được kéo nằm trên đường đó, không phải lúc nào cũng dưới con trỏ. Bản xem trước cho biết vị trí. Một tường đâm vào tường đang kéo sẽ đi theo dọc đường riêng của nó. Kéo đầu tường thẳng dọc theo tường sẽ thay đổi chiều dài của nó, và tường nối tại đó di chuyển theo.
- {{ui:Xoay}} trên một tường đã nối hoạt động tương tự: các đầu của tường láng giềng trượt dọc theo đường riêng của chúng đến tường đã xoay.
- Để di chuyển một góc, chọn cả hai tường gặp nhau tại đó và kéo grip ở góc. Cả hai tường vẫn ở góc và cả hai đều xoay. Các tường xa hơn giữ nguyên.
- Giữ {{key:Alt}} khi bạn nhấp vào vị trí mới của grip để phá các mối nối có chủ đích: tường đi đến nơi bạn đặt và không có gì đi theo.
- Nếu một lần kéo làm một tường đã nối bị xoay ngược qua đầu xa của chính nó, thao tác đó bị từ chối và không có gì thay đổi.
- Một tường bạn vẽ với {{ui:Không cho nối}} (`D` trong `WALL`), hoặc tắt trong Thuộc tính ({{ui:Không cho nối ở đầu}}, {{ui:Không cho nối ở cuối}}), sẽ tự do ở đầu đó, ngay cả khi nó chạm vào tường khác, cho đến khi bạn cho phép lại.
- `WALLDISJOIN` ({{ui:Không cho nối}} trong nhóm {{ui:Tường}}) làm điều tương tự chỉ bằng một cú nhấp: nhấp vào một tường gần một đầu để không cho nối tại đầu đó, và nhấp lại để cho phép.
- Bản vẽ cũ chưa có mối nối được lưu. Thay đổi đầu tiên bạn thực hiện sẽ tìm chúng một lần, từ cách các tường đứng trước thay đổi, rồi lưu lại. `WALLJOINS` làm việc này ngay lập tức.
- Các tệp DWG và DXF mang mối nối bên trong từng tường. CadCraft đọc lại đúng như đã lưu. Một chương trình không giữ dữ liệu mở rộng sẽ hiển thị tường như khối thông thường và bỏ các mối nối; một mối nối có tường đã bị di chuyển trong chương trình khác sẽ bị bỏ vào lần tiếp theo bạn thay đổi một trong hai tường.

## Kiểu nối của góc

Một góc nơi hai tường gặp nhau đầu cuối được vẽ là vát góc, trừ khi bạn chọn kiểu khác.

- `WALLJOINSTYLE` ({{ui:Kiểu nối}} trong nhóm {{ui:Tường}}): nhấp vào góc. Mỗi lần nhấp chuyển sang kiểu tiếp theo: {{ui:Vát góc}}, {{ui:Phẳng}}, {{ui:Vuông góc}}, rồi lại {{ui:Vát góc}}. Gõ `T` để đổi tường nào chạy xuyên qua tại góc bạn nhấp cuối cùng. Nhấn {{key:Enter}} để kết thúc. Một lần chạy lệnh là một bước hoàn tác.
- {{ui:Phẳng}}: một tường chạy xuyên đến mặt xa của tường kia, và tường kia dừng sát vào cạnh của nó. {{ui:Vuông góc}}: như vậy, nhưng tường chạy xuyên kết thúc vuông góc với chính nó. Ở góc vuông, hai kiểu trông giống nhau.
- Trong Thuộc tính của tường: {{ui:Kiểu nối ở đầu}}, {{ui:Kiểu nối ở cuối}}, và {{ui:Chạy xuyên qua ở đầu}}, {{ui:Chạy xuyên qua ở cuối}}.
- Kiểu được lưu cùng cả hai tường và đi theo trong các tệp DWG và DXF. Một bản sao của tường bắt đầu không có kiểu này.
- Một mối nối chữ T không có kiểu để chọn: tường có cạnh bị chạm vào sẽ chạy xuyên qua. Một góc nơi ba tường trở lên gặp nhau vẫn là vát góc. Cũng vậy với một góc rất nhọn (dưới khoảng 30 độ) và hai tường thẳng hàng.

## Vẽ hình dạng tường

Mỗi công cụ tạo các tường trong một bước hoàn tác, với các góc đã nối. Trong `WALL`, `O` đặt độ dời vị trí (tường nằm cách bên trái các điểm nhấp của bạn bao xa), và `D` tắt nối cho các tường bạn vẽ tiếp theo.

- `WALLRECT` (`WR`): hai góc đối diện, như `RECTANG`.
- `WALLROT`: cạnh đầu tiên, rồi khoảng cách cạnh kia ra xa, cho một hình chữ nhật ở bất kỳ góc nào.
- `WALLPOLY` (`WP`): số cạnh (3 đến 64), tâm, `I` cho nội tiếp hoặc `C` cho ngoại tiếp, rồi bán kính, như `POLYGON`.
- `WALLARC` (`WARC`): tâm, điểm đầu, điểm cuối. `D` đổi chiều cung.
- `WALLTAN`: nhấp gần đầu một tường, rồi đến điểm cuối của cung, cung rời khỏi dọc theo tường đó.
- `WALLPICK`: nhấp một đường hoặc đa tuyến và cho biết có lấy luôn các đường nối với nó không.
- `WALLTRACE`: nhấp vào bên trong một vùng khép kín của đường và tường để đặt tường quanh vùng nhỏ nhất.

Tường trên mặt bằng là thẳng, nên một cung được vẽ thành các đoạn tường thẳng ngắn, mỗi đoạn 15 độ. Chúng nối như mọi góc khác.

## Cắt tường

- `WALLSPLIT` (`WS`): nhấp vào tường, rồi đến điểm. `C` cắt chỗ tường khác cắt ngang, `G` để lại khoảng hở giữa các phần, `F` làm các đầu cắt tự do thay vì nối. Phần đầu giữ vị trí của tường trong bản vẽ, và cửa đi và cửa sổ đi cùng phần của chúng. Cắt xuyên qua cửa đi hoặc cửa sổ sẽ bị từ chối.
- `WALLSPLITGAP` ({{ui:Tách có khoảng hở}}): như việc tách, nhưng hỏi khoảng hở trước.
- `WALLDELSEG`: nhấp vào tường, rồi hai đầu của đoạn cần xóa.
- `WALLREJOIN`: nhấp vào hai phần của một tường để biến chúng lại thành một.

## Dời tường theo khoảng cách

- `WALLDIM`: nhấp vào một kích thước thẳng hoặc song song chạy từ tường này đến tường kia, rồi gõ giá trị mới. Tường ở đầu xa dời vuông góc với chính nó, tường ở đầu thứ nhất giữ nguyên, và các tường nối với nó đi theo.
- `WALLOFFSET` (`WO`): nhấp vào một tường, rồi đến phía để dời nó tới (`D` gõ một khoảng cách, `C` thay vào đó tạo một bản sao).
- `WALLSTRETCH`: một khung chọn quanh các đầu tường, rồi một điểm gốc và một điểm thứ hai.
- Trong Thuộc tính, một {{ui:Chiều dài}} gõ vào giữ điểm đầu và kéo theo tường nối ở đầu xa; một {{ui:Độ dày}} mới mở rộng ra khỏi {{ui:Đường vị trí}} bạn chọn (mặt trái, mặt phải hoặc tâm).

## Khóa tường

Một khóa vẫn gắn với tường trong tệp. Nếu bạn di chuyển một tường bị khóa, tường kia đi theo. Nếu một thay đổi làm hai tường di chuyển khác nhau, thay đổi đó bị từ chối và không có gì thay đổi.

- `WALLHOLD`: khóa một tường vào tường khác. `A` dời nó lên đường của tường kia trước, `K` giữ khoảng cách hiện có.
- `WALLHOLDDIM`: khóa khoảng cách giữa hai tường song song.
- `WALLGRID`: khóa một tường vào một đường lưới (một đường trên lớp lưới có nhãn bằng văn bản ở một đầu), hoặc dọc theo nó hoặc với một đầu nằm trên đường. Tường khóa dọc theo đường giữ khoảng cách hiện có với nó. Di chuyển đường lưới bằng `GRIDMOVE` và tường đi theo nguyên vẹn, cùng các tường nối với nó. Tường nằm dọc theo đường lưới di chuyển nguyên vẹn cùng với nó ngay cả khi không khóa, và tường chỉ kết thúc trên đường thì bị kéo giãn bởi đầu đó.
- `WALLHOLDS` liệt kê các khóa. `WALLUNHOLD` gỡ các khóa khỏi một tường.
- Mỗi khóa hiển thị một ổ khóa nhỏ trên mặt bằng: cạnh giữa tường bị khóa, hoặc cạnh đầu bị khóa vào đường lưới. Nhấp vào một ổ khóa để gỡ khóa đó.

## Chưa có ở đây

Khóa dùng đường tâm của các tường. Tường ở đây không có lớp, nên không có ưu tiên lớp tại chỗ giao, và tường không cong (xem phần cung ở trên). Chưa ai thử các công cụ này trên một bản vẽ lớn, và chúng chưa được kiểm tra trong một chương trình CAD khác.
